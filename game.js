var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, gW, gX, gY, gZ, ga, gb, gc, gd, ge, gf,
	gg, gh, gi, iv, jL, jM, aCT, md, kn, a5l, ys, a2O, aGe, a92, a93, S = ["div", "100%", "absolute", "⬅️ ", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em", "50%",
		"0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "pointer", "middle",
		"break-word", "bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "fixed", "button", "Value", "Enter", "20%", "1.5em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string",
		"round", "rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseleave", "left", "keydown", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Reload", "Redacted ", "Battle Royale", "<a href='", "</a>", "1v1",
		"100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui", "style", "right", "rgba(140,10,10,0.75)",
		"rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading", "italic ",
		"https://territorial.io/", "https://", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "block", "battleRoyale", "aria-pressed", "arena", "account", "accept",
		"_blank", "^[0-9]+$", "[Redacted Message]", "Seed", "Report", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "Close", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1px 1px 0 lightgray",
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
	this.rVersion = 26, this.e8 = 0, this.dr = function() {
		this.o = "2.17.9", this.eA = "12 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eB = 0 <= this.hostname.indexOf("github.io"), this.eC = 0 <=
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

function dm(oW) {
	this.oX = -1, this.pow = -1;
	var oY = oW || {},
		oZ = this,
		oa = null,
		ob = null,
		oc = null,
		od = null,
		oe = null,
		og = [],
		oh = 0,
		oi = null,
		oj = null,
		ok = null,
		ol = !1,
		om = null,
		op = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function oq(or, os, className) {
		or = document.createElement(or);
		return className && (or.className = className), os && os.appendChild(or), or
	}

	function ou(es, os, action) {
		os = oq("button", os);
		return os.type = "button", os.textContent = es, os.addEventListener("click", action), os
	}

	function ov(os) {
		os = oq("canvas", os);
		return os.width = os.height = 128, os
	}

	function p2(canvas, p3) {
		for (var canvas = canvas.getContext("2d"), data = (oj || (oj = canvas.createImageData(128, 128), ok = new Uint32Array(oj.data.buffer)), p3), ox = ok, oy = 0, position = 0, color = 0; position < 16384; oy += 6, color ^= 1) {
			for (var eP = oy >> 3, oN = position + ((data[eP] << 8 | data[1 + eP]) >> 10 - (7 & oy) & 63), p1 = color ? op : 4294967295, aC = position; aC < oN; aC++) ox[aC] = p1;
			position = oN
		}
		canvas.putImageData(oj, 0, 0)
	}

	function p5() {
		if (oa) {
			oa.setAttribute("aria-busy", String(ol)), oe.disabled = ol, od.disabled = ol || !oh;
			for (var aC = 0; aC < og.length; aC++) og[aC].disabled = ol, og[aC].setAttribute("aria-pressed", String(Boolean(oh & 1 << aC)))
		}
	}

	function p7(event) {
		var p9, p8;
		"Escape" === event.key && (event.preventDefault(), oZ.close()), "Tab" === event.key && oa && (p9 = (p8 = oa.querySelectorAll("button:not(:disabled)"))[0], p8 = p8[p8.length - 1], event.shiftKey && document.activeElement === p9 ? (event
			.preventDefault(), p8.focus()) : event.shiftKey || document.activeElement !== p8 || (event.preventDefault(), p9.focus()))
	}

	function pB() {
		om = document.activeElement, (oa = oq("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oa.setAttribute("aria-modal", "true"), oa.setAttribute("aria-label", "Select all images matching the reference");
		oq("style", oa).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var pC = oq("div", oa, "captcha-reference-row");
		oq("span", pC, "captcha-reference-label").textContent = "Find All:", (oc = ov(pC)).className = "captcha-reference", oc.setAttribute("aria-label", "Reference image"), ob = oq("div", oa, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) og.push(function(eP) {
			var button = ou("", ob, function() {
				ol || (oh ^= 1 << eP, p5())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eP + 1)), button.setAttribute("aria-pressed", "false"), ov(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var pC = oq("div", oa, "captcha-actions"),
			pF = ou("Close", pC, function() {
				oZ.close()
			});
		oe = ou("Reload", pC, pG), od = ou("Verify", pC, pH), oa.addEventListener("keydown", p7), oZ.resize(), p5(), pF.focus()
	}

	function pG() {
		ol || (oZ.close(), b1.en.pI(0, 0, bx.oX, bx.pow))
	}

	function pH() {
		var pJ, pK;
		!ol && oh && (pJ = oh, pK = oi, oZ.close(), b1.en.pI(pJ, pK, bx.oX, bx.pow))
	}
	this.show = function(pL, pK, oX, pow) {
		this.oX = oX, this.pow = pow, oi = pK, oa || pB(), p2(oc, pL[0]);
		for (var iZ = 0; iZ < 16; iZ++) p2(og[iZ].firstChild, pL[iZ + 1]);
		oh = 0, ol = !1, p5(), "function" == typeof oY.pM && oY.pM()
	}, this.resize = function() {
		var size;
		oa && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oa.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oa) {
			for (var pN = oa.querySelectorAll("canvas"), aC = 0; aC < pN.length; aC++) pN[aC].width = pN[aC].height = 0;
			oa.remove(), oa = ob = oc = od = oe = null, oj = ok = oi = null, oh = 0, ol = !(og = []), om && document.body.contains(om) && om.focus(), om = null, "function" == typeof oY.pO && oY.pO()
		}
	}
}

function dn() {
	this.nF = new pP, this.pQ = new pR, this.pS = new pT, this.dr = function(pU, pV) {
		this.pQ.dr(pU, pV), this.nF.dr(pV), this.pS.dr()
	}
}

function pT() {
	var pW = 0,
		pX = [],
		pY = [],
		pZ = "";

	function pj(pk, name) {
		var pp = bq.pq;
		return pp && pk === pp.pk || 0 <= pX.indexOf(pk) || (pY.length && (pp = function(pk, name) {
			pk = bq.ps.pt(pk), pk = pk ? pk.username : name;
			return pk ? bD.pg.pu(pk) : null
		}(pk, name)) ? 0 <= pY.indexOf(pp) : void 0)
	}
	this.dr = function() {
		pW = 0, pX = [], pY = [], pZ = ""
	}, this.pa = function() {
		return pW
	}, this.pb = function(pc) {
		pW = 1 - pW, pZ = "", pX = [], pY = [], this.pd(pc), by.nF.reset()
	}, this.pd = function(pc) {
		if (pW && bq.fD) {
			var h = bq.pe.pf(pc),
				pc = h.join(" ");
			if (pc !== pZ) {
				pZ = pc, pX = [], pY = [];
				for (var aC = 0; aC < h.length; aC++) bD.pg.startsWith(h[aC], "@[") ? pY.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pX.push(bJ.f7.f8(h[aC].substring(1), 5));
				by.nF.reset()
			}
		}
	}, this.ph = function(pi) {
		if (!pW || !pX.length && !pY.length || 4 < pi.id) return 1;
		if (pj(pi.pk, pi.pl)) return 1;
		if (void 0 !== pi.target && pj(pi.target, pi.pm)) return 1;
		if (0 === pi.id)
			for (var h = bq.pe.pf(pi.s), aC = 0; aC < h.length; aC++)
				if (bD.pg.startsWith(h[aC], "@[")) {
					var pn = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pY.indexOf(pn) || pn === (pn = void 0, (pn = bq.pq) ? bD.pg.pu(pn.username) : null)) return 1
				} else if (pj(bJ.f7.f8(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pP() {
	var pv = null,
		pw = 1048575;

	function q4() {
		var h9 = pv.childNodes.length - bq.z.q7;
		if (!(h9 <= 0)) {
			for (var aC = 0; aC < h9; aC++) pv.removeChild(pv.firstChild);
			by.pQ.q8()
		}
	}

	function q1(q0, q9) {
		q9 && (q9.qA = 1, q0.appendChild(bq.qB.transform(q9)))
	}
	this.dr = function(pV) {
		pv = pV, pw = 1048575
	}, this.reset = function(px) {
		pw = 1048575, pv.textContent = "", px || this.nR()
	}, this.nR = function() {
		var py = bq.z.py,
			pz = bq.z.pz,
			fg = py.length,
			kI = 1048575 === pw ? 0 : fg - (pz - pw + 1048575) % 1048575;
		if (pw = pz, !(fg <= (kI = Math.max(kI, 0)))) {
			for (var q0 = document.createDocumentFragment(), aC = kI; aC < fg; aC++) by.pS.ph(py[aC]) && q1(q0, bq.lr.q2(py[aC], bq.lr.q3(py[aC])));
			pv.appendChild(q0), q4(), by.pQ.q5()
		}
	}, this.q6 = function(s) {
		var q0 = document.createDocumentFragment();
		q1(q0, s), pv.appendChild(q0), q4(), by.pQ.q5()
	}
}

function pR() {
	var qC = null,
		pv = null,
		qD = 1,
		qE = null,
		qF = 0;

	function qH() {
		qE && qE.parentNode === pv || (qE = pv.firstChild, qF = 0), qE && (qC.scrollTop = qE.offsetTop + qF)
	}
	this.dr = function(pU, pV) {
		pv = pV, qD = 1, qE = null, qF = 0, (qC = pU).addEventListener("scroll", function() {
			if (qC.scrollTop < qC.scrollHeight - qC.clientHeight - 2) {
				qD = 0;
				for (var qI = pv.childNodes, qJ = qC.scrollTop, aC = 0; aC < qI.length; aC++)
					if (qI[aC].offsetTop + qI[aC].offsetHeight > qJ) return void(qE = qI[aC], qF = qJ - qI[aC].offsetTop);
				qE = null
			} else qD = 1
		})
	}, this.q8 = function() {
		qD || qH()
	}, this.q5 = function(c1) {
		qD ? qC.scrollTop = qC.scrollHeight : c1 && qH()
	}
}

function c7() {
	var eq = bD.color;
	this.qK = eq.qL(0, 0, 0), this.qM = eq.qN(0, 0, 0, .7), this.qO = eq.qN(0, 0, 0, .5), this.qP = eq.qN(0, 0, 0, .85), this.qQ = eq.qN(0, 0, 0, .75), this.qR = eq.qN(0, 0, 0, .6), this.qS = eq.qN(0, 0, 0, .35), this.qT = eq.qL(255, 255, 255), this
		.qU = eq.qN(255, 255, 255, .3), this.qV = eq.qN(255, 255, 255, .6), this.qW = eq.qN(255, 255, 255, .4), this.qX = eq.qN(255, 255, 255, .25), this.qY = eq.qN(255, 255, 255, .85), this.qZ = eq.qN(255, 255, 255, .75), this.qa = eq.qN(255, 255,
			255, .15), this.qb = eq.qN(255, 255, 255, .11), this.qc = eq.qL(128, 128, 128), this.qd = eq.qN(64, 64, 64, .75), this.qe = eq.qN(88, 88, 88, .83), this.qf = eq.qN(60, 60, 60, .85), this.qg = eq.qN(80, 60, 60, .85), this.qh = eq.qL(170,
			170, 170), this.qi = eq.qL(200, 235, 245), this.qj = eq.qL(30, 255, 30), this.qk = eq.qL(0, 200, 0), this.ql = eq.qL(128, 255, 128), this.qm = eq.qN(10, 65, 10, .75), this.qn = eq.qN(0, 255, 0, .6), this.qo = eq.qN(0, 255, 0, .5), this
		.qp = eq.qN(0, 200, 0, .5), this.qq = eq.qN(0, 100, 0, .75), this.qr = eq.qN(0, 60, 0, .8), this.qs = eq.qN(0, 255, 0, .3), this.qt = eq.qN(0, 180, 0, .6), this.qu = eq.qN(0, 120, 0, .85), this.qv = eq.qL(0, 120, 0), this.qw = eq.qN(0, 70, 0,
			.85), this.qx = eq.qL(190, 230, 190), this.qy = eq.qL(0, 255, 0), this.qz = eq.qN(10, 120, 10, .9), this.r0 = eq.qL(200, 255, 200), this.r1 = eq.qL(255, 120, 120), this.r2 = eq.qL(255, 160, 160), this.r3 = eq.qL(255, 70, 70), this.r4 = eq
		.qL(230, 0, 0), this.r5 = eq.qN(220, 0, 0, .6), this.r6 = eq.qN(255, 100, 100, .8), this.r7 = eq.qN(100, 0, 0, .85), this.r8 = eq.qN(60, 0, 0, .85), this.r9 = eq.qN(200, 0, 0, .6), this.rA = eq.qN(120, 0, 0, .85), this.rB = eq.qL(255, 70,
		10), this.rC = eq.qL(230, 190, 190), this.rD = eq.qL(255, 0, 0), this.rE = eq.qL(255, 0, 255), this.rF = eq.qN(60, 0, 60, .85), this.rG = eq.qN(0, 60, 60, .85), this.rH = eq.qN(10, 60, 60, .9), this.rI = eq.qN(0, 96, 96, .75), this.rJ = eq
		.qL(0, 255, 255), this.rK = eq.qL(160, 160, 255), this.rL = eq.qN(0, 40, 90, .75), this.rM = eq.qN(0, 0, 255, .6), this.rN = eq.qL(200, 200, 255), this.rO = eq.qN(50, 50, 255, .83), this.rP = eq.qN(20, 90, 150, .75), this.rQ = eq.qN(10, 10,
			120, .75), this.rR = eq.qN(10, 60, 160, .9), this.rS = eq.qL(200, 220, 255), this.rT = eq.qN(0, 120, 255, .35), this.rU = eq.qL(70, 150, 255), this.rV = eq.qL(255, 120, 100), this.rW = eq.qN(255, 255, 0, .5), this.rX = eq.qN(255, 255,
			150, .2), this.rY = eq.qL(255, 255, 0), this.rZ = eq.qL(255, 255, 200), this.ra = eq.qN(200, 200, 0, .6), this.rb = eq.qN(140, 120, 0, .75), this.rc = eq.qN(180, 160, 40, .75), this.rd = eq.qN(70, 50, 20, .85), this.re = eq.qN(30, 30, 0,
			.85), this.rf = eq.qN(60, 60, 0, .85), this.rg = eq.qL(255, 255, 100), this.rh = eq.qL(255, 255, 140), this.ri = eq.qN(255, 140, 0, .75), this.rj = eq.qN(70, 40, 0, .85), this.rk = eq.qL(255, 150, 0), this.rl = eq.qN(255, 200, 80, .85),
		this.rm = eq.qN(0, 0, 0, 0), this.rn = eq.qN(255, 255, 255, 0), this.ro = eq.qN(254, 254, 254, 0)
}

function d7() {
	this.i7 = new rp, this.h2 = new rq, this.rr = new rs, this.rt = new ru, this.l4 = new rv
}

function rp() {
	this.rw = 1, this.i8 = function(fS) {
		aE.hq || (aE.lM ? bB.rr.i8(aE.fQ, fS) : b1.rx.ry(fS))
	}, this.iE = function(jK, kB) {
		aE.hq || (this.rw && (this.rw = 0, bm.rz.q5(182, jK)), aE.lM ? bB.rr.iE(aE.fQ, jK, kB) : b1.rx.s0(jK, kB))
	}, this.s1 = function(jK, s2) {
		aE.hq || (aE.lM ? bB.rr.s3(aE.fQ, jK, s2) : b1.rx.s4(jK, s2))
	}, this.iJ = function(jK, fS) {
		aE.hq || (fS = (fS << 3) + bR.gI[6], aE.lM ? bB.rr.iJ(aE.fQ, jK, fS) : bQ.n8.n9(aE.fQ) && b1.rx.s6(jK, fS))
	}, this.iM = function(jK) {
		var o2;
		aE.hq || (849 === jK && (jK = 850), o2 = bR.gI[3], aE.lM ? bB.rr.iM(aE.fQ, jK, o2) : bQ.iK.s7(aE.fQ, o2) && b1.rx.s8(jK, o2))
	}, this.s9 = function(o2) {
		aE.hq || (aE.lM ? bB.rr.s9(aE.fQ, o2) : b1.rx.s8(849, o2))
	}, this.sA = function(kB) {
		aE.hq || (aE.lM ? bB.rr.sA(aE.fQ, kB) : b1.rx.sB(kB))
	}, this.sC = function(sD) {
		aE.hq || (aE.lM ? bB.rr.sE(aE.fQ, sD) : b1.rx.sF(sD))
	}, this.iV = function(sG) {
		aE.hq || (aE.lM ? bB.rr.iV(aE.fQ, sG) : b1.rx.sH(sG))
	}, this.sI = function() {
		aE.hq || (aE.lM ? bB.rr.sI(aE.fQ) : b1.rx.sJ())
	}, this.iS = function() {
		aE.hq || (aE.lM ? bB.rr.iS(aE.fQ) : b1.rx.sB(513))
	}, this.iA = function(jK, fS, kB) {
		aE.hq || (aE.lM ? bB.rr.iA(aE.fQ, jK, fS, kB) : b1.rx.sK(jK, fS, kB))
	}
}

function rv() {
	this.l5 = function(player, s2, iQ) {
		bD.h2.sL(player, iQ, s2) && (af.s1(player, s2), !bD.h2.kP(s2)) && ap.jp.ke[s2] && ap.jp.ke[s2]--
	}, this.sM = function(player, s2, iQ) {
		bD.h2.sN(iQ, s2) ? ao.ep(s2, bR.gD[0]) && (bu.sO(player, s2, bR.gD[0], 1), bD.h2.h5(s2, bR.gD[0]), bg.sP(player, s2), ag.sQ(s2, bR.gD[0])) : bg.h6(player, iQ, 12)
	}
}

function rq() {
	this.sR = function(sD, player) {
		aE.hq || (aO.sC(aE.fQ, player, sD), b1.rx.sS(sD, player))
	}, this.sT = function(player) {
		aE.hq || (aO.sU(player, 0), b1.rx.sV(player))
	}, this.sW = function(sX, player) {
		aE.hq || (aO.sY(sX, player), b1.rx.sZ(sX, player))
	}, this.sa = function() {
		aE.lM || aE.hp || aE.hq || b1.sb.sa()
	}
}

function ru() {
	this.el = function(aD) {
		var id, gP, oN;
		for (bK.dr(aD), bK.eP += 2, oN = 8 * bK.size; bK.eP + 8 <= oN;) id = bK.sc(4), gP = bK.sc(9), 0 === id ? this.sd(id, gP, bK.sc(22)) : 1 === id ? this.sd(id, gP, bK.sc(10), bK.sc(10)) : 2 === id ? this.sd(id, gP, bK.sc(10), bK.sc(9)) :
			3 === id ? this.sd(id, gP, bK.sc(10), bK.sc(27)) : 4 === id ? this.sd(id, gP, bK.sc(10), bK.sc(16)) : 5 === id || 6 === id ? this.sd(id, gP, bK.sc(10)) : 7 === id ? this.sd(id, gP, bK.sc(1)) : 10 === id ? this.sd(id, gP, bK.sc(20), bK
				.sc(22)) : this.sd(id, gP)
	}, this.se = [], this.sf = function() {
		for (var sh = 0, si = 0, sj = 0, sk = 0, sl = 0, sm = 0, aC = 0; aC < 512; aC++) sh += ah.ne[aC], si += ah.hU[aC], sj += ah.hi[aC], sk += bQ.z.l6[aC];
		sl += bQ.z.ms, sm += am.lY, this.se.push(sj % 1073741824 * 4 + (sh + si + sk + sl + sm) % 4)
	}, this.sd = function(id, gP, gR, gT) {
		0 === id ? bB.rr.i8(gP, gR) : 1 === id ? bB.rr.iE(gP, gR, gT) : 2 === id ? bB.rr.s3(gP, gR, gT) : 3 === id ? bB.rr.iJ(gP, gR, gT) : 4 === id ? bB.rr.iM(gP, gR, gT) : 5 === id ? bB.rr.sA(gP, gR) : 6 === id ? bB.rr.sE(gP, gR) : 7 === id ?
			bB.rr.iV(gP, gR) : 8 === id ? bB.rr.sI(gP) : 9 === id ? bB.rr.sn(gP) : 10 === id && bB.rr.iA(gP, gR >> 10, gT, gR % 1024)
	}
}

function rs() {
	this.i8 = function(player, fS) {
		bD.h2.hs(0) && bD.h2.ht(player) && bP.jP(fS) && (bC.so.sp(0, player, fS), aE.sq.ep(player, fS))
	}, this.iE = function(player, jK, kB) {
		bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.sr(player, kB) && bD.h2.nA(player, jK, 12, 0) && bD.h2.ss(player, kB) && ((kB = ae.kN(player, bR.fc[0])) || ae.kg(player)) && (ah.st[player]++, bC.so.sp(1, player, jK, bR.fc[0]), ap.jn.k1(player,
			kB)) && (bD.h2.nC(player), bg.su(player, jK), ap.jn.k7(player))
	}, this.s3 = function(player, jK, s2) {
		bD.h2.hs(1) && bD.h2.ht(player) && aE.ib && bD.h2.sr(player, s2) && bD.h2.sv(player, s2) && bD.h2.sL(player, bD.h2.jJ(player, jK), s2) && ao.ep(s2, bR.gD[0]) && (bC.so.sp(2, player, jK, s2), af.s1(player, s2))
	}, this.iJ = function(player, jK, s5) {
		bR.gI[1] = 7 & s5;
		var fS = s5 >> 3;
		bD.h2.hs(1) && bD.h2.ht(player) && bP.jP(fS) && bQ.n8.n9(player) && bQ.n8.sw(fS) && bD.h2.nA(player, jK, 32, 0) && bQ.lp.sx(player, fS, 1) && (bg.sy(player), bC.so.sp(3, player, jK, s5), bD.h2.nC(player), bo.sz.iJ(player), bQ.z.nD(
			player))
	}, this.iM = function(player, jK, o2) {
		849 === jK ? this.s9(player, o2) : bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.nA(player, jK, 32, 0) && bQ.iK.t0(player, o2) && (bg.sy(player), bC.so.sp(4, player, jK, o2), bD.h2.nC(player), bo.sz.iM(player), bQ.z.nD(player))
	}, this.s9 = function(player, o2) {
		bD.h2.hs(1) && bD.h2.ht(player) && bQ.t1.el(player, o2) && bC.so.sp(4, player, 849, o2)
	}, this.sA = function(player, kB) {
		513 === kB ? this.iS(player) : bD.h2.hs(1) && bD.h2.ht(player) && (kB = Math.min(kB, aE.fd), ae.kN(player, kB)) && (bC.so.sp(5, player, kB), ae.t2(player, kB))
	}, this.sE = function(player, sD) {
		(bD.h2.hs(1) || bD.h2.hs(2)) && bD.h2.ht(player) && (sD = bO.is(sD, 0, 1023), bC.so.sp(6, player, sD), ag.t3(player, 0, sD))
	}, this.iV = function(player, sG) {
		ax.iU(player) && (bC.so.sp(7, player, sG), ax.t4(player, sG))
	}, this.sI = function(player) {
		(bD.h2.hs(0) || bD.h2.hs(1)) && bD.h2.ht(player) && aN.t5(player) && (bC.so.sp(8, player), bT.sI(player))
	}, this.sn = function(player) {
		bC.so.sp(9, player), bT.sn(player)
	}, this.iS = function(player) {
		ax.iW(player) && (bC.so.sp(5, player, 513), ax.iS(player))
	}, this.iA = function(player, jK, fS, kB) {
		bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.sr(player, kB) && bD.h2.ss(player, kB) && bP.jP(fS) && an.fH.fa(player, fS) && (ae.kN(player, bR.fc[0]) || ae.kg(player)) && (bC.so.sp(10, player, (jK << 10) + bR.fc[0], fS), kB = bD.h2.mE(player,
			jK), ah.h8[player].push(bR.fh[0]), ae.ep(player, kB, bR.fc[0]), aG.k9(player, !0), bg.t6(player))
	}
}

function t7(pc) {
	var k, t8 = new t9,
		tA = document.createElement("div");

	function tI() {
		tA.style.opacity = "0", setTimeout(tK, t8.tG)
	}

	function tK() {
		u.removeChild(document.body, tA), t8 = tA = null
	}
	k = bD.tC.tD(t8.tE, .5), tA.textContent = pc, tA.style.position = "fixed", tA.style.zIndex = t8.zIndex, tA.style.left = "50%", tA.style.top = .5 * k + "px", tA.style.transform = "translateX(-50%)", tA.style.maxWidth = "90%", tA.style.boxSizing =
		"border-box", tA.style.padding = .3 * k + "px " + .6 * k + "px", tA.style.backgroundColor = bE.qP, tA.style.color = bE.qT, tA.style.font = bD.tC.tF(0, .6 * k), tA.style.textAlign = "center", tA.style.userSelect = "none", tA.style
		.pointerEvents = "none", tA.style.transition = "opacity " + t8.tG + "ms", bD.tC.tH(tA), document.body.appendChild(tA), setTimeout(tI, t8.tJ)
}

function t9() {
	this.tJ = 5e3, this.tG = 600, this.zIndex = "1000", this.tE = .03
}

function tL() {
	var tN;
	this.tM = [], this.tN = document.createElement("div"), this.tO = function(pc, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pc, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tN.appendChild(
			title), title
	}, this.tP = function(pc, marginBottom) {
		var tQ = document.createElement("p");
		return tQ.textContent = pc, tQ.style.fontSize = "0.75em", tQ.style.lineHeight = "1.2em", tQ.style.marginBottom = marginBottom || "0", this.tN.appendChild(tQ), tQ
	}, this.tR = function(pc) {
		var tS = document.createElement("p");
		return tS.textContent = pc, tS.style.fontSize = "1em", tS.style.marginBottom = "0", tS.style.whiteSpace = "pre-wrap", tS.style.overflowWrap = "break-word", this.tN.appendChild(tS), tS
	}, this.tT = function(tU, fontSize) {
		var tN = document.createElement("div");
		return tN.innerHTML = tU, tN.style.fontSize = fontSize || "1em", tN.style.lineHeight = "1.2em", this.tN.appendChild(tN), tN
	}, this.tV = function(tW) {
		for (var tX = tW.tX, fg = tX.length, aC = 0; aC < fg; aC++) this.tN.appendChild(tX[aC])
	}, this.tY = function(q9) {
		return this.tM.push(q9), this.tN.appendChild(q9.e), q9
	}, this.resize = function() {
		for (var fg = this.tM.length, aC = 0; aC < fg; aC++) this.tM[aC].resize && this.tM[aC].resize()
	}, (tN = this.tN).style.position = "absolute", tN.style.height = "auto", tN.style.padding = "0.5em"
}

function tZ(ta, tb) {
	var tN = document.createElement("div");

	function ti() {
		var aC, qJ, k, hF, fj, tf = i.l * tN.offsetWidth,
			tj = new Float64Array(function(tf) {
				var j = .25 * bD.tC.tg(.6) * i.iu;
				return Math.max(Math.floor(tf / j), 1)
			}(tf)),
			tk = bf.tk,
			tl = (tf - (tj.length + 1) * bf.gap) / (tj.length * i.l);
		for (tj.fill(tk), aC = 0; aC < tb.length; aC++) qJ = (fj = tb[aC].tN).style, k = bD.tm.min(tj), hF = tj.indexOf(k), qJ.top = bD.tC.tn(k), qJ.left = bD.tC.tn(tk + hF * (tl + tk)), qJ.width = bD.tC.tn(tl), bD.tC.tH(fj, 5), tj[hF] += fj
			.offsetHeight + 3 * tk;
		tN.style.height = bD.tC.tn(bD.tm.max(tj) - 2 * tk)
	}
	this.tc = tN, this.td = tb, this.resize = function() {
		var aC;
		for (aC = 0; aC < tb.length; aC++) tb[aC].resize();
		ti(), ti()
	}, tN.style.width = "100%", tN.style.maxWidth = "100%", ta.style.lineHeight = "1.5em", ta.style.overflowX = "hidden", ta.style.overflowY = "auto";
	for (var aC = 0; aC < tb.length; aC++) tN.appendChild(tb[aC].tN);
	ta.appendChild(tN)
}

function x(tp, tq, tr, ts, tt) {
	var self, tu = document.createElement("button");

	function u0() {
		var u6;
		bM.u5() || (u6 = bD.color.u7(tr), !1 !== ts && 0 < u6[0] && u6[0] < 255 && u6[0] === u6[1] && u6[0] === u6[2]) || (128 < u6[0] && 128 < u6[1] && 128 < u6[2] ? tu.style.backgroundColor = bD.color.u8(tr, -50) : tu.style.backgroundColor = bD
			.color.u8(tr, u6[3] && u6[3] < 120 ? 150 : 50))
	}

	function tz() {
		if (ts) {
			var u6 = bD.color.u7(tr);
			if (u6[0] === u6[1] && u6[0] === u6[2]) return
		}
		tq && ((u6 = tq(this)) ? 2 === u6 && u0() : uA(this))
	}

	function u2() {
		this.style.backgroundColor = tr
	}

	function u1() {
		uA(this)
	}

	function uA(fj) {
		fj.style.backgroundColor = tr, fj.blur()
	}
	this.button = tu, this.tv = tq, this.tw = tr, this.ty = function(u3) {
		u3 = 1.1 - Math.min(.01 * tp.length, .6) + .2 * u3;
		tu.style.fontSize = u3.toFixed(1) + "em"
	}, this.tx = function(eq) {
		eq ? 1 === eq ? eq = bE.qf : 2 === eq && (ts = 1, eq = bE.qf) : (ts = 0, eq = bE.qP), this.tw = tr = eq, tu.style.backgroundColor = eq
	}, self = this, tu.innerHTML = tp, tu.style.color = tt ? bE.rY : bE.qT, tu.style.userSelect = "none", tu.style.outline = "none", tu.style.overflowWrap = "break-word", self.tx(tr), tu.style.border = "none", tu.style.font = "inherit", self.ty(
		0), tu.style.padding = "0em 0.3em", tu.onclick = tz, tu.addEventListener("mouseover", u0), tu.addEventListener("mouseout", u1), tu.addEventListener("focus", u0), tu.addEventListener("blur", u2)
}

function uB(p8, ta) {
	var tN;
	this.resize = function() {
		for (var aC = 0; aC < p8.length; aC++) bD.tC.tH(p8[aC].button);
		tN.style.gap = tN.style.padding = bD.tC.tn(bf.tk)
	}, (tN = document.createElement("div")).style.display = "grid", tN.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tN.style.overflowY = "auto", tN.style.gridAutoRows = "5.3em", tN.style.maxHeight = "100%";
	for (var aC = 0; aC < p8.length; aC++) p8[aC].ty(1), tN.appendChild(p8[aC].button);
	ta.appendChild(tN)
}

function uD(uE, uF, uG) {
	this.fn = 0, this.fp = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.tC.tg(uG || .5) * uE[1] * i.iu, i.k - 2 * bf.gap), this.j = Math.min(this.k * (uE[0] / uE[1]), i.j - 2 * bf.gap), this.k = uE[1] * this.j / uE[0], this.fn = bf.gap + uF[0] * (i.j - this.j - 2 * bf.gap), this.fp = bf
			.gap + uF[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uH = function() {
		return this.fn + .5 * this.j
	}
}

function uI(uJ, uK) {
	var uS, uT, self, qC = document.createElement("div"),
		uL = document.createElement("div"),
		uM = document.createElement("div"),
		uN = null,
		uU = (this.uO = new uP({
			value: "",
			eP: -1
		}, 0, uQ, function(e) {
			e.target.value = bD.pg.ua(e.target.value), uN.uZ.textContent = 255 - e.target.value.length, by.pS.pd(e.target.value)
		}), new uV(0)),
		uW = 0;

	function uQ() {
		uJ()
	}
	this.uY = function() {
			uN.uZ.textContent = 255 - this.uO.e.value.length, by.pS.pd(this.uO.e.value)
		}, this.show = function(ta) {
			ta.appendChild(qC), ta.appendChild(uM), this.resize(ta)
		}, this.ub = function(ta) {
			u.removeChild(ta, qC), u.removeChild(ta, uM)
		}, this.resize = function(ta) {
			uW = ta ? ta.offsetHeight : uW;
			var ta = bD.tC.tD(.04, .75),
				ud = Math.max(ta, uW - ta),
				ue = i.j / i.l,
				uf = .7 * ue,
				ug = bD.tC.tn(uW - ta - ud),
				ud = (uM.style.height = bD.tC.tn(ta), qC.style.height = bD.tC.tn(ud), i.k > i.j || a1.a2.it() ? (uM.style.top = ug, qC.style.top = bD.tC.tn(uW - ud), bD.tC.tH(qC, 8)) : (qC.style.top = ug, uM.style.top = bD.tC.tn(uW - ta), bD.tC.tH(
						qC, 2)), uT.button.style.width = bD.tC.tn(ta), uU.resize(.6 * ta), this.uO.e.style.left = bD.tC.tn(ta), this.uO.e.style.width = bD.tC.tn(uf - ta), this.uO.e.style.fontSize = uS.button.style.fontSize = bD.tC.tn(.5 * ta), bD.tC
					.tH(this.uO.e, 6), uS.button.style.left = bD.tC.tn(uf), uS.button.style.width = bD.tC.tn(ue - uf), .385 * ta);
			a1.a2.it() && (ud *= .8 - .12 * (i.j > i.k)), uL.style.marginLeft = uL.style.marginRight = bD.tC.tn(.5 * ud), uL.style.fontSize = bD.tC.tn(ud), by.pQ.q5(1)
		}, (self = this).uO.e.maxLength = 255, qC.style.position = "absolute", qC.style.left = "0", qC.style.width = "100%", qC.style.overflowX = "hidden", qC.style.overflowY = "auto", qC.style.font = "inherit", qC.style.backgroundColor = bE.qR, uL
		.style.font = "inherit", uM.style.position = "absolute", uM.style.left = "0", uM.style.width = "100%", self.uO.e.setAttribute("placeholder", L(13)), self.uO.e.style.position = "absolute", self.uO.e.style.top = "0", self.uO.e.style.height =
		"100%", self.uO.e.style.backgroundColor = bE.qO, self.uO.e.style.textAlign = "center", (uS = new x(L(14), uQ)).button.top = "0", uS.button.style.position = "absolute", uS.button.style.height = "100%", uS.tx(bE.rn), uN = new uX("255", uS
			.button, 1, 1), (uT = new x("", function() {
			return by.pS.pb(self.uO.e.value), uT.tx(by.pS.pa() ? bE.qs : bE.rn), 0
		})).button.style.position = "absolute", uT.button.style.top = "0", uT.button.style.left = "0", uT.button.style.height = "100%", uT.button.style.padding = "0", uT.tx(bE.rn), uU.canvas.style.display = "block", uU.canvas.style.margin = "auto",
		uT.button.appendChild(uU.canvas), qC.appendChild(uL), uM.appendChild(uT.button), uM.appendChild(self.uO.e), uM.appendChild(uS.button), by.dr(qC, uL)
}

function ui(uj, tp, uk) {
	function click() {
		var value = 1 - uj.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tp, void 0 !== uj.eP ? bm.rz.q5(uj.eP, value) : uj.value = value, uk && uk(value)
	}
	var e;
	tp = tp || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (uj.value ? "🟩 " : "⬜ ") + tp, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ul(ta, tU) {
	var tN = document.createElement("div");
	this.tc = tN, this.resize = function() {
		tN.style.padding = bD.tC.tn(bf.tk), tN.style.lineHeight = bD.tC.tn(bD.tC.tD(.035))
	}, ta.style.overflowX = "hidden", ta.style.overflowY = "auto", tN.innerHTML = tU, ta.appendChild(tN)
}

function um(un) {
	var tN = document.createElement("div");
	this.e = tN, this.uo = un, this.resize = function() {
		for (var fg = un.length, aC = 1; aC < fg; aC++) bD.tC.tH(un[aC], 4)
	};
	var aC, fg = un.length;
	for (tN.style.width = "100%", tN.style.height = "2.7em", tN.style.marginTop = "0.6em", tN.style.border = "inherit", aC = 0; aC < fg; aC++) un[aC].style.verticalAlign = "top", un[aC].style.width = (100 / fg).toFixed(2) + "%", un[aC].style.height =
		"100%", un[aC].style.fontSize = "0.75em", tN.appendChild(un[aC])
}

function up(uq, tr, ur, us) {
	this.tN = document.createElement("div"), this.p8 = uq;
	var ut = 0;
	this.resize = function(ta, uv) {
		var fg = uq.length;
		if (!ur)
			for (var aC = 1; aC < fg; aC++) bD.tC.tH(uq[aC].button, 4);
		if (us)
			for (aC = 0; aC < fg; aC++) uq[aC].button.style.width = us[aC] + "%";
		else {
			for (var uw = 0, aC = 0; aC < fg; aC++) uw += uq[aC].button.offsetWidth;
			if (ta && (ut = ta.offsetWidth), uv && uw < ut)
				for (aC = 0; aC < fg; aC++) uq[aC].button.style.width = (100 * uq[aC].button.offsetWidth / uw).toFixed(2) + "%";
			else
				for (aC = 0; aC < fg; aC++) uq[aC].button.style.width = "auto";
			uv || this.resize(ta, 1)
		}
	};
	var uu = this;
	uu.tN.style.height = uu.tN.style.maxHeight = "100%";
	for (var aC = 0; aC < uq.length; aC++) uq[aC].tx(tr), uq[aC].button.style.height = "100%", uq[aC].button.style.padding = "0.0em 0.9em", uq[aC].button.style.whiteSpace = "pre", uu.tN.appendChild(uq[aC].button)
}

function ux() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.tC.tH(this.e, 8, bE.qc)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function uy() {
	var v2, v3, tA = document.createElement("div"),
		uz = document.createElement("div"),
		v0 = 0,
		v1 = 0;
	this.show = function(fn, fp, pc, v4, v5, eq) {
			if (v0) {
				if (!v4) return;
				this.ub()
			}
			fn === fp && -1 === fn ? (fn = v2, fp = v3) : (v2 = fn, v3 = fp);
			var v6 = Math.floor(bD.tC.tD(.018)),
				v5 = (fn = Math.max(v6 + 2, fn), v5 || (v1 = v4), v0 = 1, i.j / i.l),
				v4 = (tA.style.whiteSpace = "pre", tA.textContent = pc, bD.tC.tH(tA, 5), tA.style.font = bD.tC.tF(0, bD.tC.tD(.015)), tA.style.padding = "0.3em 0.6em", tA.style.left = fn + "px", tA.style.top = "0px", document.body.appendChild(tA),
					fn + tA.offsetWidth - v5),
				pc = (0 < v4 && (fn -= v4, fn = Math.max(v6 + 1, fn), tA.style.left = fn + "px", fn < v6 + 2) && (tA.style.whiteSpace = "pre-wrap"), tA.offsetHeight);
			tA.style.top = fp - pc + v1 * bf.v9 + "px", fn -= v6, uz.style.backgroundColor = bD.color.qL(eq >> 12 << 2, (eq >> 6 & 63) << 2, (63 & eq) << 2), uz.style.left = fn + "px", uz.style.top = tA.style.top, uz.style.width = v6 + "px", uz.style
				.height = pc + "px", bD.tC.tH(uz, 4), bD.tC.tH(uz, 8), bD.tC.tH(uz, 2), document.body.appendChild(uz)
		}, this.ub = function(vA) {
			if (v0) {
				if (vA && v1) return 0;
				v0 = 0, u.removeChild(document.body, tA), u.removeChild(document.body, uz)
			}
			return 1
		}, tA.style.position = "absolute", tA.style.backgroundColor = bE.qP, tA.style.color = bE.qT, tA.style.pointerEvents = "none", tA.style.zIndex = "5", tA.style.maxWidth = "100%", uz.style.position = "absolute", uz.style.color = bE.qT, uz.style
		.pointerEvents = "none", uz.style.zIndex = "5"
}

function uP(vB, type, vC, vD) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vE++, e.value = vB.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qT, e.style.backgroundColor = bE.qM, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vF++
		}), e.addEventListener("blur", function() {
			i.vF--, -1 !== vB.eP && bm.rz.q5(vB.eP, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vB.eP && bm.rz.q5(vB.eP, e.value), vC ? vC() : e.blur())
		}), vD && e.addEventListener("input", function(q9) {
			vD(q9)
		})
}

function vG(ta, data, oW) {
	var fg = data.vH.length,
		vI = document.createElement("div"),
		vJ = document.createElement("div"),
		pV = document.createElement("div"),
		vK = new Array(fg),
		tb = new Array(fg),
		vL = new Array(data.vM.length),
		vN = bD.color.qN(70, 70, 0, .35);

	function u8() {
		this.style.backgroundColor = bD.color.u8(vN, 160)
	}

	function vU() {
		this.style.backgroundColor = vN
	}

	function ti() {
		var fz;
		for (ta.style.font = bD.tC.tF(0, bD.tC.vb(.026, .5, .03)), aC = 1; aC < vL.length; aC++) bD.tC.tH(vL[aC], 4);
		if (bD.tC.tH(vI, 2), fg) {
			for (var i9, vc = vI.offsetWidth, vd = pV.offsetWidth, aC = 0; aC < vL.length; aC++) i9 = .01 * data.vT[aC] * vd, vL[aC].style.width = (100 * i9 / vc).toFixed(2) + "%";
			var lx = data.vH[0].length;
			for (aC = 0; aC < fg; aC++)
				for (bD.tC.tH(vK[aC], 2), fz = 1; fz < lx; fz++) bD.tC.tH(tb[aC][fz], 4);
			vJ.vO && (vJ.scrollTop = vJ.vO)
		}
	}
	this.resize = function() {
			ti(), ti()
		}, ta.style.display = "flex", ta.style.flexDirection = "column", vJ.style.overflowX = "hidden", vJ.style.overflowY = "auto", vJ.addEventListener("scroll", function() {
			this.vO = this.scrollTop, oW && oW.vP && (u.z.vQ[oW.vP] = this.scrollTop)
		}),
		function() {
			var fj, aC, vH = data.vH,
				lx = fg ? vH[0].length : 0;
			for (aC = 0; aC < fg; aC++) {
				vK[aC] = document.createElement("div"), vK[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qN(130, 130, 130, .35) : bE.qS
				}(aC), vK[aC].style.width = "100%", vK[aC].style.display = "flex", tb[aC] = new Array(lx);
				for (var fz = 0; fz < lx; fz++) tb[aC][fz] = fj = document.createElement("div"), fj.style.display = "flex", fj.style.justifyContent = "center", fj.style.wordBreak = "break-all", fj.style.padding = "0.4em 0em", fj.style.width = data
					.vT[fz] + "%", fj.textContent = vH[aC][fz].g8, 1 === vH[aC][fz].eh && (fj.name = "" + aC, fj.style.color = bE.rY, fj.style.backgroundColor = vN, fj.addEventListener("mouseover", u8), fj.addEventListener("mouseout", vU), function(
						fj, pk, vW) {
						2147483647 !== vW && fj.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pk), bK.dr(bG.aD), this.style.backgroundColor = vN, u.v(8, u.vX, new vY(25, {
								action: 0,
								pk: bI.f7.vZ(bI.f7.va(5)),
								vW: vW
							}))
						})
					}(fj, vH[aC][fz].pk, vH[aC][fz].vW)), vK[aC].appendChild(fj)
			}
			for (vI.style.display = "flex", vI.style.backgroundColor = bD.color.qN(0, 120, 0, .35), aC = 0; aC < vL.length; aC++) vL[aC] = fj = document.createElement("div"), fj.style.display = "flex", fj.style.justifyContent = "center", fj.style
				.wordBreak = "break-all", fj.style.padding = "0.4em 0em", fj.style.width = data.vT[aC] + "%", fj.innerHTML = data.vM[aC], vI.appendChild(fj)
		}();
	for (var aC = 0; aC < fg; aC++) pV.appendChild(vK[aC]);
	vJ.appendChild(pV), ta.appendChild(vI), ta.appendChild(vJ), oW && oW.vP && (vJ.vO = u.z.vQ[oW.vP])
}

function ve() {
	var vi, vj, vf = document.createElement("div"),
		vg = document.createElement("div"),
		vh = document.createElement("div"),
		pV = document.createElement("div"),
		p8 = [],
		eK = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		vk = [1, 2, 3, 0, 9, 10, 11, 13];

	function vm(aC) {
		u.v(8, 0, new vY(21, {
			vo: vk[aC],
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
			this.q5(u.z.vr), document.body.appendChild(vf)
		}, this.ub = function() {
			u.removeChild(document.body, vf)
		}, this.q5 = function(vr) {
			for (var vs = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p8.length; aC++) {
				var j = vr[aC];
				vi[vs[aC]][1].uZ.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, vt = bf.gap,
				k = bD.tC.vu(.085),
				j = Math.min(4 * k, i.j - 2 * vt),
				fg = p8.length;
			for (bD.tC.vv(vf, vt, i.k - vt - k, j, k), bD.tC.tH(vf), bD.tC.tH(vg, 6), aC = 0; aC < fg - 1; aC++) bD.tC.tH(p8[aC].button, 6);
			for (aC = 0; aC < fg; aC++) vi[aC][0].resize(), vi[aC][1].resize();
			for (p8[0].fn = 0, p8[0].button.style.left = bD.tC.tn(p8[0].fn), p8[0].button.style.width = bD.tC.vw(1.7 * k), aC = 1; aC < fg; aC++) p8[aC].fn = p8[aC - 1].fn + p8[aC - 1].button.offsetWidth, p8[aC].button.style.left = bD.tC.tn(p8[aC]
				.fn);
			if (!vj) {
				if (!ac.vx()) return;
				(vj = ac.get(14)).style.width = "24%", vj.style.position = "absolute", vg.appendChild(vj)
			}
			vj.style.left = bD.tC.tn(0), vj.style.top = "7%", vh.vy && (vh.scrollLeft = vh.vy)
		}, vf.style.position = "absolute", vg.style.width = "25%", vg.style.height = "100%", vg.style.backgroundColor = bE.qP, vh.style.position = "absolute", vh.style.width = "75%", vh.style.height = "100%", vh.style.backgroundColor = bE.qP, vh
		.style.top = vh.style.right = bD.tC.tn(0), bD.tC.vl(vh), pV.style.height = pV.style.maxHeight = "100%", p8.push(new x("", function() {
			vm(0)
		}, bE.rF)), p8.push(new x("", function() {
			vm(1)
		}, bE.rG)), p8.push(new x("", function() {
			vm(2)
		}, bE.r8)), p8.push(new x("", function() {
			vm(3)
		}, bE.qr)), p8.push(new x("", function() {
			vm(4)
		}, bE.rj)), p8.push(new x("", function() {
			vm(5)
		}, bE.rf)), p8.push(new x("", function() {
			vm(6)
		}, bE.rj)), p8.push(new x("", function() {
			vm(7)
		}, bE.qK)), vi = new Array(p8.length);
	for (var aC = 0; aC < p8.length; aC++) p8[aC].button.style.position = "absolute", vi[aC] = [new vn(eK[aC], p8[aC].button, .25, .45), new vn("", p8[aC].button, .53, .84, 1)], p8[aC].button.style.height = p8[aC].button.style.maxHeight = "100%", p8[
		aC].button.top = bD.tC.tn(0), pV.appendChild(p8[aC].button);
	vh.appendChild(pV), vf.appendChild(vg), vf.appendChild(vh)
}

function vz(w0, w1, uJ, uK, w2) {
	var w3 = document.createElement("div"),
		w4 = document.createElement("div"),
		w5 = document.createElement("div"),
		pv = document.createElement("div"),
		w6 = document.createElement("div"),
		w7 = document.createElement("div"),
		w8 = document.createElement("span"),
		w9 = document.createElement("div"),
		wF = (this.wA = new uI(uJ, uK), this.wB = new wC(uK), this.wD = new wE(w2), 2);
	this.wJ = function(wK) {
		wK = (wK / 10).toFixed(1) + "%";
		w7.style.width = wK, w8.innerHTML = wK
	}, this.wL = function(wM) {
		(0 === wF ? this.wA : 1 === wF ? this.wB : this.wD).ub(pv), (0 === (wF = wM) ? this.wA : 1 === wM ? this.wB : this.wD).show(pv)
	}, this.wN = function() {
		return w4
	}, this.show = function() {
		document.body.appendChild(w3)
	}, this.ub = function() {
		u.removeChild(document.body, w3)
	}, this.resize = function() {
		var wO = 1 - .4 * a1.a2.it() * (i.j > 1.6 * i.k),
			wP = bD.tC.tD(.05 * wO),
			wQ = 1.3 * wP,
			wR = i.k > i.j,
			wS = bD.tC.tD(.06 * wO + .03 * wR),
			wR = bD.tC.tD(.02 * wO + .01 * wR),
			wU = bD.tC.tD(.025);
		w3.style.font = bD.tC.tF(0, wU), w5.style.font = bD.tC.tF(0, .9 * wU), w9.style.font = bD.tC.tF(0, .9 * wU), wO < 1 && (wO = bD.tC.tF(0, wO * wU), w5.style.font = wO, w9.style.font = wO, w6.style.font = wO), w4.style.height = bD.tC.tn(
			wQ), w4.style.font = bD.tC.tF(0, .72 * wP), bD.tC.tH(w4, 2), w5.style.top = bD.tC.tn(wQ), w5.style.height = bD.tC.tn(wS), bD.tC.tH(w5, 2), pv.style.top = bD.tC.tn(wQ + wS), pv.style.height = bD.tC.tn(i.k / i.l - wQ - 2 * wS - wR), w6
			.style.top = bD.tC.tn(i.k / i.l - wS - wR), w6.style.height = bD.tC.tn(wR), bD.tC.tH(w6, 8), w8.style.font = bD.tC.tF(0, .8 * wR), w9.style.top = bD.tC.tn(i.k / i.l - wS), w9.style.height = bD.tC.tn(wS), bD.tC.tH(w9, 8), w0.resize(
			w3), w1.resize(w3), 0 === wF ? this.wA.resize(pv) : (1 === wF ? this.wB : this.wD).resize()
	};
	uJ = this;
	w3.style.position = "absolute", w3.style.top = "0", w3.style.left = "0", w3.style.width = "100%", w3.style.height = "100%", w3.style.backgroundColor = bE.qS, bM.u5() || (w3.style.backdropFilter = "blur(4px)", w3.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (w3.style.display = "none"), w4.style.position = "absolute", w4.style.top = "0", w4.style.left = "0", w4.style.width = "100%", w4.style.display = "flex", w4.style.alignItems = "center", w4.translate = !1;
	for (var h = [w5, w9], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.tC.vl(h[aC]);
	pv.style.position = "absolute", pv.style.left = "0", pv.style.width = "100%", pv.style.font = "inherit", w6.style.position = "absolute", w6.style.left = "0", w6.style.width = "100%", w7.style.position = "absolute", w7.style.top = "0", w7.style
		.left = "0", w7.style.height = "100%", w7.style.width = "50%", w7.style.backgroundColor = bE.qp, w8.innerHTML = "", w8.style.position = "absolute", w8.style.top = "50%", w8.style.left = "50%", w8.style.transform = "translate(-50%, -50%)", w8
		.translate = !1, w4.appendChild(function() {
			var wI = document.createElement("h1");
			return wI.textContent = L(24), wI.style.margin = "0 auto 0.55em auto", wI.style.fontFamily = "Arial Black, system-ui", wI.style.fontSize = "inherit", wI.style.fontWeight = "inherit", wI
		}()), w5.appendChild(w0.tN), w6.appendChild(w7), w6.appendChild(w8), w9.appendChild(w1.tN), w3.appendChild(w4), w3.appendChild(w5), w3.appendChild(pv), w3.appendChild(w6), w3.appendChild(w9), w3.className = "fx-lobby", pv.className =
		"fx-panel", w6.className = "fx-progress", uJ.wD.show(pv)
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
		var tN = document.createElement("div");
		return tN.style.position = "absolute", tN.style.left = "0", tN.style.width = "100%", tN.style.height = "20%", tN.style.pointerEvents = "none", tN.style.backgroundColor = bE.qM, x2 ? tN.style.top = "0" : tN.style.bottom = "0", button
			.appendChild(tN), tN
	}

	function wf(x3, x4) {
		var tN = document.createElement("div");
		return tN.style.position = "absolute", tN.style.top = "0", tN.style.width = "20%", tN.style.height = "100%", x4 ? tN.style.left = "0" : tN.style.right = "0", x3.appendChild(tN), tN
	}

	function wq(x5) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, wo(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", x5.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wj(x3, left, right, width) {
		var tN = document.createElement("div");
		return tN.style.position = "absolute", tN.style.top = "50%", tN.style.transform = "translateY(-50%)", tN.style.left = left, tN.style.right = right, tN.style.width = width, tN.style.textAlign = "left", x3.appendChild(tN), {
			tN: tN,
			wx: x8(tN, 1.9),
			wm: x8(tN, 1)
		}
	}

	function x8(os, fontSize) {
		var tN = document.createElement("div");
		return tN.style.fontSize = fontSize + "em", tN.style.lineHeight = "1.1", tN.style.whiteSpace = "nowrap", tN.style.overflow = "hidden", tN.style.textOverflow = "ellipsis", tN.style.textShadow = "0 0 0.25em black", os.appendChild(tN), tN
	}

	function x9(e, pc) {
		e.textContent !== pc && (e.textContent = pc)
	}

	function xA(q9) {
		q9.canvas && (bq.xB.xV(q9.canvas), q9.canvas = null), q9.ww = ""
	}
	this.nR = function() {
		var tb = bq.tb.tb,
			fg = tb.length;
		if (fg !== wW.length) {
			for (var aC = 0; aC < wW.length; aC++) xA(wW[aC]);
			for (w3.textContent = "", wW = new Array(fg), aC = 0; aC < fg; aC++) wW[aC] = function(eP) {
				var button = document.createElement("button"),
					wb = (button.style.position = "absolute", button.style.backgroundColor = bE.qS, button.style.color = bE.qT, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.tC.wa(button, function() {
							w2(eP, 0)
						}, function() {
							w2(eP, 1)
						}), bD.tC.tH(button), wc(button, 1)),
					wd = wc(button, 0),
					we = wf(wb, 0),
					wg = wf(wd, 1),
					wh = wf(wd, 0),
					wi = wj(wb, "3%", "", "74%"),
					wk = wj(wd, "20%", "", "30%"),
					wl = wj(wd, "", "20%", "30%"),
					wn = (wl.tN.style.textAlign = "right", wk.wm.textContent = "Starts in", document.createElement("canvas"));
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
					hr: -1
				}).map.translate = !1, button.wy.translate = !1, button.wz.translate = !1, wk.wm.translate = !1, button
			}(aC), w3.appendChild(wW[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fg; aC++) wW[aC].ww !== bq.xB.xC(tb[aC].fM, tb[aC].mapSeed) && xA(wW[aC]);
		for (aC = 0; aC < fg; aC++) {
			var xD = tb[aC],
				q9 = wW[aC],
				hr = xD.id === bq.tb.xE ? 1 + bq.tb.xF : 0,
				h9 = bq.tb.xG(xD);
			x9(q9.map, bV.xH.xI[xD.fM]), x9(q9.wy, bq.tb.xJ(xD.wy)), x9(q9.wz, bq.tb.xK(xD.xL)), x9(q9.x0, h9 + (bq.tb.xM(xD) ? "/" + xD.nZ : "")), x9(q9.x1, L(1 === h9 ? 25 : 26)), q9.hr !== hr && (q9.hr = hr, q9.wb.style.backgroundColor = q9.wd
				.style.backgroundColor = [bE.qM, bE.qz, bE.rR][hr], bD.tC.tH(q9.button, 5, [bE.qT, bE.r0, bE.rS][hr]), q9.button.classList.toggle("fx-line", !hr)), ! function(q9) {
				!q9.ws && ac.vx() && (q9.ws = 1, q9.wp.drawImage(ac.x7("clock"), 0, 0), q9.wr.drawImage(ac.x7("userIcon"), 0, 0))
			}(q9), ! function(q9, wy) {
				q9.wv === wy || 7 <= wy && !ac.vx() || ((q9.wv = wy) < 7 ? bk.xT(q9.wu, wy + 2, wX) : (q9.wu.clearRect(0, 0, wX, wX), q9.wu.drawImage(ac.x7(wY[wy - 7]), 0, 0, wX, wX)))
			}(q9, xD.wy), ! function(q9, isContest) {
				q9.isContest === isContest || isContest && !ac.vx() || ((q9.isContest = isContest) ? (q9.wt || (q9.wt = function(q9) {
					var xS = ac.x7("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xS.width, canvas.height = xS.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xS, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q9.button.insertBefore(canvas, q9.wb), canvas
				}(q9)), q9.wt.hidden = !1) : q9.wt.hidden = !0)
			}(q9, xD.xP), ! function(q9, xD) {
				var canvas;
				q9.canvas || (canvas = bq.xB.xU(xD.fM, xD.mapSeed)) && (q9.canvas = canvas, q9.ww = bq.xB.xC(xD.fM, xD.mapSeed), wo(canvas), q9.button.insertBefore(canvas, q9.button.firstChild))
			}(q9, xD)
		}
	}, this.resize = function() {
		var fg = wW.length,
			j = w3.offsetWidth,
			k = w3.offsetHeight;
		if (0 !== fg && 0 !== j && 0 !== k) {
			for (var gap = bD.tC.tD(.012), xW = 0, xX = 1, eq = 1; eq <= fg; eq++) {
				var rows = bO.g7(fg + eq - 1, eq),
					rows = Math.min((j - (eq + 1) * gap) / eq, (k - (rows + 1) * gap) / rows);
				xW < rows && (xW = rows, xX = eq)
			}
			for (var xY = bO.g7(fg + xX - 1, xX), o5 = (j - xX * xW - (xX - 1) * gap) / 2, o6 = (k - xY * xW - (xY - 1) * gap) / 2, aC = 0; aC < fg; aC++) {
				var qJ = wW[aC].button.style;
				qJ.left = bD.tC.tn(o5 + aC % xX * (xW + gap)), qJ.top = bD.tC.tn(o6 + bO.g7(aC, xX) * (xW + gap)), qJ.width = qJ.height = bD.tC.tn(xW), qJ.fontSize = bD.tC.tn(.05 * xW)
			}
		}
	}, this.show = function(ta) {
		ta.appendChild(w3), this.nR(), this.resize()
	}, this.ub = function(ta) {
		u.removeChild(ta, w3)
	}, w3.style.position = "absolute", w3.style.top = "0", w3.style.left = "0", w3.style.width = w3.style.height = "100%", w3.style.overflow = "hidden", w3.style.font = "inherit"
}

function wC(uK) {
	var uZ, x5, w3 = document.createElement("div"),
		pv = document.createElement("div"),
		xZ = null,
		xa = null;
	this.nR = function() {
			pv.textContent = "", bq.xd.xe && bq.xd.ub(1);
			for (var q0 = document.createDocumentFragment(), x0 = bq.ps.xf, tb = bq.tb.tb, xg = 0, aC = 0; aC < tb.length; aC++) xg = xg || 8 === tb[aC].wy;
			for (xZ.style.width = xZ.style.maxWidth = xg ? "11.3em" : "10.3em", aC = 0; aC < x0.length; aC++) {
				var eP = bq.tb.xh(x0[aC].xi);
				! function(q0, q9, eP, xk) {
					var uZ = xZ.cloneNode(!0),
						x5 = uZ.firstChild;
					x5.style.backgroundColor = 0 <= eP && q9.xl ? bE.rU : xa[eP < 0 ? 15 : Math.min(eP, 14)], 0 <= eP && (x5.textContent = "" + (eP + 1));
					uZ.lastChild.textContent = bq.lr.xm(q9, xk), uZ.style.color = bq.lr.xn(q9.xo), 11 === q9.xo && (uZ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (x5 = __fx.utils.getDuplicateIpHighlightColor(q9, bq.ps.xf, "aHk")) && (uZ.style.backgroundColor = x5, uZ.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eP = __fx.utils.getSameClanHighlightColor(q9, bq.pq, "username")) && (uZ.style.backgroundColor ? uZ.style.boxShadow = "inset 0 0 0 2px " + eP : uZ.style.backgroundColor = eP, uZ.style
						.borderRadius = "0.3em");
					bq.lr.xp(q9) && (uZ.style.textDecoration = "underline"), q9.xq && (uZ.style.textDecorationLine = "underline", uZ.style.textDecorationStyle = "dotted");
					uZ.onclick = function(e) {
						uK(e, q9)
					}, bM.u5() || (uZ.onmouseover = function(e) {
						bq.xd.xr(uZ, q9, 1)
					}), q0.appendChild(uZ)
				}(q0, x0[aC], eP, 0 <= eP && 8 === tb[eP].wy)
			}
			pv.appendChild(q0), pv.classList.toggle("fx-wide", !!xg)
		}, this.show = function(ta) {
			ta.appendChild(w3)
		}, this.ub = function(ta) {
			u.removeChild(ta, w3)
		}, this.resize = function() {
			pv.style.fontSize = bD.tC.tn(bD.tC.tD(.02, .3))
		}, w3.style.top = "0", w3.style.left = "0", w3.style.width = w3.style.height = "100%", w3.style.overflowX = "hidden", w3.style.overflowY = "auto", w3.style.font = "inherit", pv.style.font = "inherit", pv.style.margin = "0.4em", w3
		.appendChild(pv), w3.className = "fx-players-scroll", pv.className = "fx-players", (uZ = document.createElement("span")).style.cursor = "pointer", uZ.style.margin = "0.2em 0.2em 0.2em 0.2em", uZ.style.height = uZ.style.maxHeight = "1.4em", uZ
		.style.whiteSpace = "nowrap", uZ.style.overflow = "hidden", uZ.style.textOverflow = "ellipsis", uZ.style.font = "inherit", uZ.style.display = "inline-block", (x5 = document.createElement("span")).style.display = "inline-block", x5.style
		.width = x5.style.height = x5.style.lineHeight = "1.3em", x5.style.marginRight = "0.4em", x5.style.fontSize = "0.8em", x5.style.fontWeight = "bold", x5.style.textAlign = "center", x5.style.color = bE.qK, x5.style.textShadow = "none", x5.style
		.textDecoration = "none", x5.style.pointerEvents = "none", x5.translate = !1, uZ.appendChild(x5), uZ.appendChild(document.createTextNode("")), xZ = uZ, xa = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function xs(xt) {
	var w3 = document.createElement("div"),
		uM = document.createElement("div"),
		xu = [];

	function u0() {
		bM.u5() || (this.style.backgroundColor = bD.color.u8(bE.qP, 50))
	}

	function u1() {
		this.style.backgroundColor = bE.qP
	}
	this.q5 = function(xw, xx) {
			xu[2].textContent = xw + 1 + " / " + xx
		}, this.show = function(q9) {
			q9 = bq.lr.q2(q9, bq.lr.q3(q9)), uM.appendChild(bq.qB.transform(q9)), document.body.appendChild(w3)
		}, this.resize = function() {
			var k = bD.tC.tD(.03, .5);
			w3.style.width = 10 * k + "px", w3.style.font = bD.tC.tF(1, .75 * k), bD.tC.tH(w3, 4), uM.style.top = k + "px", uM.style.font = bD.tC.tF(0, .55 * k), bD.tC.tH(uM, 2), w3.style.height = k + uM.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.tC.tH(xu[aC], 6), xu[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) xu[aC].style.height = k + "px", bD.tC.tH(xu[aC], 2);
			xu[2].style.width = 4 * k + "px", xu[1].style.left = 2 * k + "px", xu[2].style.left = 4 * k + "px", xu[3].style.left = 8 * k + "px"
		}, this.xy = function() {
			for (var aC = 0; aC < 4; aC++) xu[aC].onclick = null, xu[aC].onmouseover = null, xu[aC].onmouseout = null;
			u.removeChild(document.body, w3), w3 = uM = xu = null
		}, w3.style.position = "absolute", w3.style.color = bE.qT, w3.style.zIndex = "3", w3.style.right = "0", w3.style.top = "0", uM.style.position = "absolute", uM.style.height = "auto", uM.style.color = bE.qT, uM.style.backgroundColor = bE.qP, uM
		.style.left = "0", uM.style.width = "100%", uM.style.overflowWrap = "break-word", w3.appendChild(uM);
	for (var aC = 0; aC < 4; aC++) xu[aC] = document.createElement("div"), xu[aC].style.position = "absolute", xu[aC].style.backgroundColor = bE.qP, xu[aC].style.color = bE.qT, xu[aC].style.top = "0", xu[aC].style.display = "flex", xu[aC].style
		.justifyContent = "center", xu[aC].style.alignItems = "center", xu[aC].style.userSelect = "none", xu[aC].style.outline = "none", xu[aC].style.font = "inherit", 2 !== (xu[aC].xv = aC) && (xu[aC].onclick = xt, xu[aC].onmouseover = u0, xu[aC]
			.onmouseout = u1), w3.appendChild(xu[aC]);
	xu[0].textContent = "◀", xu[1].textContent = "▶", xu[3].textContent = "✖"
}

function xz(xt) {
	var tA = document.createElement("div");

	function u0() {
		bM.u5() || (tA.style.backgroundColor = bD.color.u8(bE.qP, 50))
	}

	function u1() {
		tA.style.backgroundColor = bE.qP
	}
	this.q5 = function(xx) {
			tA.textContent = xx
		}, this.show = function() {
			document.body.appendChild(tA)
		}, this.resize = function() {
			var k = bD.tC.tD(.03, .5);
			tA.style.width = 2 * k + "px", tA.style.height = k + "px", tA.style.font = bD.tC.tF(1, .75 * k), bD.tC.tH(tA, 4), bD.tC.tH(tA, 2)
		}, this.xy = function() {
			tA.onclick = null, tA.onmouseover = null, tA.onmouseout = null, u.removeChild(document.body, tA), tA = null
		}, tA.style.position = "absolute", u1(), tA.style.color = bE.qT, tA.style.zIndex = "3", tA.style.right = "0", tA.style.top = "0", tA.style.display = "flex", tA.style.justifyContent = "center", tA.style.alignItems = "center", tA.style
		.userSelect = "none", tA.style.outline = "none", tA.onclick = xt, tA.onmouseover = u0, tA.onmouseout = u1
}

function y0(uq) {
	var w3 = document.createElement("div"),
		y1 = document.createElement("div"),
		v0 = (this.fn = 0, this.fp = 0);

	function y3() {
		bq.y4.ub()
	}
	this.p8 = uq, this.show = function(fn, fp, y6) {
		if (v0) return [0, 0];
		v0 = 1, this.fn = fn, this.fp = fp,
			function(self, y6) {
				var j = bD.tC.tD(.16, .7),
					k = uq.length * j / 3,
					y8 = i.j / i.l,
					y9 = i.k / i.l,
					oH = Math.min(1, Math.min(y8 / j, y9 / k));
				j *= oH, k *= oH, y6 && (self.fn += bD.tC.tD(.03, .5)), self.fn = bO.is(self.fn, 0, y8 - j), self.fp = bO.is(self.fp, 0, y9 - k), y1.style.left = self.fn + "px", y1.style.top = self.fp + "px", y1.style.width = j + "px", y1.style
					.height = k + "px", y1.style.font = bD.tC.tF(0, .3 * k / uq.length), bD.tC.tH(y1, 5);
				for (var aC = 1; aC < uq.length; aC++) bD.tC.tH(uq[aC].button, 8)
			}(this, y6), document.body.appendChild(w3)
	}, this.ub = function() {
		v0 && (v0 = 0, w3.removeEventListener("click", y3), u.removeChild(document.body, w3))
	};
	for (var aC = 0; aC < uq.length; aC++) new uX("" + (1 + aC), uq[aC].button, 0, 1);
	w3.style.position = "fixed", w3.style.top = "0", w3.style.left = "0", w3.style.width = "100%", w3.style.height = "100%", w3.style.zIndex = "5", y1.style.position = "absolute",
		function() {
			for (var y5 = (100 / uq.length).toFixed(2) + "%", aC = 0; aC < uq.length; aC++) uq[aC].button.style.width = "100%", uq[aC].button.style.height = uq[aC].button.style.maxHeight = y5, uq[aC].button.style.padding = "0.0em 0.9em", y1
				.appendChild(uq[aC].button)
		}(), w3.appendChild(y1), w3.addEventListener("click", y3)
}

function er() {
	var yA, yB, yC;

	function yJ(aC) {
		return bD.color.qL(yB[aC][0], yB[aC][1], yB[aC][2])
	}

	function yP(fz, g0) {
		return bD.color.yY(yB[fz], yB[g0]), yJ(g0)
	}

	function yH() {
		yA && (yA.remove(), yA = null)
	}
	this.show = function(es, colors, id) {
		0 <= (yC = id) && b1.z.em(0) && b1.en.yD(0, id), es = (es = (es = (es = (es = (es = (es = (es = (es = (es = (es = (es = es.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yB = colors, (yA = document.createElement("div")).style.position = "fixed", yA.style.top = "0", yA.style.left = "0", yA.style.width = "100%", yA.style.height = "100%", yA.style.backgroundColor = bD.color.qN(yB[0][0], yB[0][1], yB[0][
				2], .6), yA.style.zIndex = "6", yA.onclick = function(e) {
				e.target === yA && yH()
			},
			function(es) {
				var ie, yI = document.createElement("div");
				yI.style.position = "absolute", yI.style.display = "flex", yI.style.flexDirection = "column", yI.style.top = "50%", yI.style.left = "50%", yI.style.backgroundColor = yJ(2), ie = a1.a2.it() ? bD.tC.yK(i.min) : bD.tC.tD(.4);
				ie = Math.max(ie, 200), yI.style.width = bD.tC.tn(ie), yI.style.height = bD.tC.tn(ie), yI.style.transform = "translate(-50%, -50%)",
					function(yI, ie) {
						var yO = document.createElement("div");
						yO.style.flex = "0 0 10%", yO.style.overflow = "hidden", yO.style.backgroundColor = yJ(1), yO.style.color = yP(1, 7), yO.style.font = bD.tC.tF(1, .05 * ie), yO.style.display = "flex", yO.style.alignItems = "center", yO
							.style.justifyContent = "center", yO.innerHTML = L(27), yI.appendChild(yO)
					}(yI, ie),
					function(yI, es, ie) {
						var yQ = document.createElement("div");
						yQ.style.flex = "0 0 70%", yQ.style.overflowY = "auto", yQ.style.overflowX = "hidden", yQ.style.whiteSpace = "pre-wrap", yQ.style.wordWrap = "break-word", yQ.style.padding = bD.tC.tn(.02 * ie), yQ.style.backgroundColor =
							yJ(2), yQ.style.color = yP(2, 8), yQ.style.font = bD.tC.tF(0, .07 * ie), yQ.innerHTML = es, yQ.innerHTML = "<style>a { color: inherit; }</style>" + yQ.innerHTML, yI.appendChild(yQ)
					}(yI, es, ie),
					function(yI, ie) {
						var os = document.createElement("div"),
							yR = (os.style.display = "flex", os.style.flexDirection = "row", os.style.justifyContent = "space-between", os.style.alignItems = "stretch", os.style.backgroundColor = yJ(3), os.style.flex = "1", os.style.padding = bD
								.tC.tn(.01 * ie), os.style.gap = bD.tC.tn(.01 * ie), document.createElement("div")),
							yS = (yR.style.flex = "0 0 60%", yR.style.height = "100%", new x(L(28, 0, 0, 1), function() {
								yH()
							}, yJ(4), !1)),
							yS = (yS.button.style.width = "100%", yS.button.style.height = "100%", yS.button.style.color = yP(4, 9), yS.button.style.font = bD.tC.tF(1, .05 * ie), yR.appendChild(yS.button), document.createElement("div")),
							yU = (yS.style.flex = "0 0 15%", yS.style.height = "100%", yS.style.backgroundColor = yJ(5), document.createElement("div")),
							yV = (yU.style.flex = "1", yU.style.height = "100%", new x(L(29), function(e) {
								return bD.tC.yW(e), yC < 0 || b1.z.em(0) && (b1.en.yD(1, yC), yC = -1), !0
							}, yJ(6), !1));
						yV.button.style.width = "100%", yV.button.style.height = "100%", yV.button.style.color = yP(6, 10), yV.button.style.font = bD.tC.tF(1, .035 * ie), yU.appendChild(yV.button), os.appendChild(yR), os.appendChild(yS), os
							.appendChild(yU), yI.appendChild(os)
					}(yI, ie), yA.appendChild(yI)
			}(es), document.body.appendChild(yA)
	}
}

function yZ(vB, ya) {
	this.tX = [];
	var yb = this.tX;

	function click() {
		for (var aC = 0; aC < yb.length; aC++) yb[aC].textContent = yb[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eP = parseInt(this.name);
		void 0 !== vB.eP && bm.rz.q5(vB.eP, eP), ya && ya(eP)
	}
	for (var yc, fg = vB.oW.length, aC = 0; aC < fg; aC++)(yc = document.createElement("p")).textContent = "⚪ " + vB.oW[aC], yc.style.margin = "0", yc.name = "" + aC, yc.style.cursor = "pointer", yc.style.fontSize = "1em", yc.addEventListener(
		"click", click), yb.push(yc);
	yb[vB.value].textContent = yb[vB.value].textContent.replace("⚪", "🟢")
}

function yd(title, ye, yf) {
	var vf = document.createElement("div"),
		pU = document.createElement("div"),
		pV = document.createElement("div"),
		yg = document.createElement("div"),
		yh = document.createElement("div");
	this.yi = pV, this.yj = ye, vf.className = "fx-page", this.show = function() {
			!1 !== yf ? document.body.appendChild(vf) : (document.body.appendChild(pU), document.body.appendChild(yg))
		}, this.ub = function() {
			!1 !== yf ? u.removeChild(document.body, vf) : (u.removeChild(document.body, pU), u.removeChild(document.body, yg))
		}, this.yn = function() {
			var ud = bD.tC.tD(.1),
				uc = bD.tC.tD(.08 + .04 * (i.yo < 1), .3);
			return {
				ud: ud,
				uc: uc,
				yp: i.k / i.l - ud - uc
			}
		}, this.resize = function(uv) {
			var fg = ye.length,
				yq = this.yn(),
				ud = yq.ud,
				uc = yq.uc;
			for (pU.style.height = bD.tC.tn(ud), bD.tC.tH(pU, 2), yg.style.top = bD.tC.tn(i.k / i.l - uc), yg.style.height = bD.tC.tn(uc), bD.tC.tH(yg, 8), pV.style.top = bD.tC.tn(ud), pV.style.height = pV.style.maxHeight = bD.tC.tn(yq.yp), pU.style
				.font = bD.tC.tF(0, bD.tC.tD(.02, .15)), yg.style.font = bD.tC.tF(0, bD.tC.tD(.02, .7)), pV.style.font = bD.tC.tF(0, bD.tC.tD(.02, .35)), aC = 1; aC < fg; aC++) bD.tC.tH(ye[aC].button, 4);
			for (var uw = 0, aC = 0; aC < fg; aC++) uw += ye[aC].button.offsetWidth;
			if (uv && uw < yg.offsetWidth)
				for (aC = 0; aC < fg; aC++) ye[aC].button.style.width = (100 * ye[aC].button.offsetWidth / uw).toFixed(2) + "%";
			else
				for (aC = 0; aC < fg; aC++) ye[aC].button.style.width = "auto";
			yg.vy && (yg.scrollLeft = yg.vy), uv || this.resize(!0)
		}, this.yr = function() {
			var yq = this.yn(),
				eq = i.l;
			ys.fillStyle = bE.qP, ys.fillRect(0, eq * yq.ud, i.j, eq * yq.yp)
		}, vf.style.position = "absolute", vf.style.top = "0", vf.style.left = "0", vf.style.width = "100%", vf.style.height = "100%", pU.style.position = "absolute", pU.style.top = "0", pU.style.left = "0", pU.style.width = "100%", pU.style
		.display = "flex", pU.style.backgroundColor = bE.qP, yg.style.position = "absolute", yg.style.left = "0", yg.style.width = "100%", bD.tC.vl(yg), yh.style.height = yh.style.maxHeight = "100%", pV.style.position = "absolute", pV.style.width =
		"100%", pV.style.backgroundColor = bE.qP,
		function() {
			for (var aC = 0; aC < ye.length; aC++) ye[aC].button.style.height = "100%", ye[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < ye.length; aC++) yh.appendChild(ye[aC].button);
	pU.appendChild(function() {
		var ym = document.createElement("h1");
		return ym.textContent = title, ym.style.margin = "auto", ym.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", ym.style.fontFamily = "Arial Black, system-ui", ym
	}()), yg.appendChild(yh), !1 !== yf && (vf.appendChild(pV), vf.appendChild(pU), vf.appendChild(yg))
}

function uX(yt, yu, yv, yw) {
	var self;
	this.uZ = document.createElement("span"), (self = this).uZ.textContent = yt, self.uZ.style.color = bE.qT, self.uZ.style.position = "absolute", self.uZ.style.font = "inherit", yw ? self.uZ.style.bottom = "0.06em" : self.uZ.style.top = "0.12em",
		yv ? self.uZ.style.left = "0.2em" : self.uZ.style.right = "0.2em", self.uZ.style.fontSize = "0.6em", self.uZ.style.pointerEvents = "none", self.uZ.style.whiteSpace = "pre", yu.style.position = "relative", yu.style.overflow = "hidden", yu
		.appendChild(self.uZ)
}

function vn(yt, yu, yx, yy, yz) {
	var self;
	this.uZ = document.createElement("span"), this.resize = function() {
			this.uZ.style.fontSize = ((yy - yx) * yu.offsetHeight).toFixed(1) + "px"
		}, (self = this).uZ.textContent = yt, self.uZ.style.color = bE.qT, self.uZ.style.font = "inherit", self.uZ.style.margin = "0.1em 0.6em", self.uZ.style.pointerEvents = "none", yz && (self.uZ.style.fontWeight = "bold"), self.uZ.style
		.whiteSpace = "nowrap", self.uZ.style.display = "block", yu.appendChild(self.uZ)
}

function z0(z1, z2, z3, oY) {
	var z4 = document.createElement("textarea"),
		z5 = (this.e = z4, !0);

	function zA() {
		z4.select(), document.execCommand("copy")
	}
	this.resize = function() {
			z2 && bD.tC.tH(z4, 5)
		}, this.z6 = function(es) {
			z4.value = es
		}, this.z7 = function() {
			return z4.value
		}, this.z8 = function() {
			z4.select()
		}, this.clear = function() {
			z4.value = ""
		}, this.z9 = function() {
			z5 && navigator.clipboard ? (z4.select(), navigator.clipboard.writeText(z4.value).catch(function() {
				z5 = !1, zA()
			})) : zA()
		}, z4.setAttribute("id", "textArea" + u.z.vE++), z4.setAttribute("autocomplete", "off"), z1 && z4.setAttribute("placeholder", z1), z4.style.top = "0", z4.style.left = "0", z4.style.width = "100%", z4.style.height = "100%", z4.style
		.userSelect = "none", z4.style.outline = "none", z4.style.resize = "none", z4.style.border = "none", z4.style.color = bE.qT, z4.style.backgroundColor = bE.qM, oY ? (z4.style.fontSize = "1em", z4.rows = 6, z4.style.padding = "0.25em") : (z4
			.style.padding = "0.45em", z4.style.fontSize = "1.2em"), z3 && z4.addEventListener("input", function(e) {
			z3(e)
		}), z4.addEventListener("focus", function() {
			i.vF++
		}), z4.addEventListener("blur", function() {
			i.vF--
		})
}

function dR() {
	this.tv = new zB, this.buffer = new zC, this.rz = new zD, this.z = new zE, this.zF = new zG, this.dr = function() {
		this.buffer.dr(), (new zH).dr(), this.zF.dr(), this.z.zI(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1, bm
			.buffer.data[2].value = bm.buffer.data[2].xP = 0)
	}
}

function zC() {
	function zJ(aC, type, zP, eA) {
		bm.buffer.data.push({
			eP: aC,
			type: type || 0,
			value: zP || 0,
			zP: zP || 0,
			eA: eA || 0
		})
	}

	function zK(aC, type, zP, eA) {
		bm.buffer.data.push({
			eP: aC,
			type: type,
			value: zP || "",
			zP: zP || "",
			eA: eA || 0
		})
	}

	function zL(oN) {
		for (var aC = bm.buffer.data.length; aC < oN; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dr = function() {
		zJ(0, 1, 0, 5), zJ(1, 1, 1), zJ(2, 0), zK(3, 2), zJ(4, 1), zK(5, 2, "system-ui", 2), zJ(6, 0), zJ(7, 0, 0), zJ(8, 0), zJ(9, 1, 1), zJ(10, 1), zJ(11, 1, 1), zK(12, 2, navigator.language), zJ(13), zJ(14), zJ(15, 0, 1), zJ(16, 0, 3), zL(
			100), zK(100, 2), zK(101, 2), zK(102, 2), zK(103, 2), zK(104, 2), zK(105, 2), zK(106, 2), zJ(107), zJ(108), zJ(109), zK(110, 2), zJ(111), zJ(112), zJ(113), zK(114, 2), zJ(115), zK(116, 2), zJ(117, 1), zK(118, 2, "", 2), zJ(119, 1, 0,
				1), zK(120, 2), zJ(121, 1, ~~(262144 * Math.random())), zK(122, 2, "Player " + Math.floor(1e3 * Math.random())), zJ(123), zK(124), zJ(125, 1), zK(126, 2), zJ(127, 0, 1), zJ(128), zJ(129), zJ(130), zJ(131), zJ(132), zK(133, 2), zJ(
				134, 0, 5), zK(135, 2), zK(136, 2), zJ(137), zJ(138), zJ(139), zJ(140), zJ(141), zJ(142), zJ(143), zJ(144), zK(145, 2), zJ(146), zJ(147), zK(148, 2), zJ(149), zJ(150, 0, 1), zK(151, 2), zJ(152, 0, 5), zJ(153, 1), zJ(154, 1), zK(
				155, 2), zK(156, 2), zJ(157), zJ(158), zJ(159), zJ(160), zK(161, 2), zJ(162, 0, 1024), zK(163, 2, "0,0,0"), zK(164, 2, "100,100,100"), zK(165, 2, "30,30,30"), zK(166, 2, "70,70,70"), zK(167, 2, "100,100,100"), zK(168, 2,
				"85,85,85"), zK(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zK(170 + aC, 2, "255,255,255");
		zK(174, 2), zK(175, 2), zJ(176, 0, 200), zL(180), zJ(180, 0), zJ(181, 0), zJ(182, 0, 1023), zK(183, 2), zJ(184, 0, 100), zK(185, 2)
	}, this.q5 = function(eP, value) {
		this.data[eP].value = value
	}, this.zM = function(eP, value) {
		this.q5(eP, value);
		var value = String(value),
			fg = value.length;
		5e4 < fg ? console.log("storage value too large: index " + eP + " size " + fg) : (bm.tv.save(eP, value), bm.tv.save(eP, String(this.data[eP].eA), !0))
	}, this.zN = function(eP) {
		return Number(this.data[eP].value)
	}, this.zO = function(eP) {
		return String(this.data[eP].value)
	}
}

function zG() {
	var zQ = [];

	function zT(pk) {
		zQ.unshift(pk), bm.rz.q5(161, zQ.join(";"))
	}

	function fC(pk) {
		for (var zV = zQ, fg = zV.length, aC = 0; aC < fg; aC++)
			if (zV[aC] === pk) return zV.splice(aC, 1), bm.rz.q5(161, zV.join(";")), 1
	}
	this.dr = function() {
		var pc = bm.buffer.data[161].value;
		pc.length && (zQ = pc.split(";"))
	}, this.get = function() {
		return zQ
	}, this.zR = function() {
		return {
			oW: zQ,
			value: 0
		}
	}, this.xq = function(pk) {
		return bD.tm.has(zQ, pk)
	}, this.zS = function(pk) {
		return fC(pk) ? 0 : (zT(pk), 1)
	}, this.nR = function(pk) {
		fC(pk) && zT(pk)
	}, this.zU = function(eP) {
		eP < zQ.length && (zQ.splice(eP, 1), bm.rz.q5(161, zQ.join(";")))
	}
}

function zB() {
	this.zW = function(eP, eA) {
		return Number(this.zX(eP, eA))
	}, this.zX = function(eP, eA) {
		var g8 = null;
		return 0 === a1.id ? a1.zY && (g8 = a1.zY.getItem((eA ? "v" : "d") + eP)) : 1 === a1.id ? g8 = a1.zZ.loadString((eA ? 1e3 : 2e3) + eP) : 2 === a1.id && (g8 = a1.za[(eA ? "v" : "d") + eP]), g8 && 0 !== g8.length ? g8 : null
	}, this.zb = function(fg, zc) {
		var h = [],
			zd = zc ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zY)
				for (aC = 0; aC < fg; aC++) h.push(a1.zY.getItem(zd + aC))
		} else if (1 === a1.id)
			for (var ze = zc ? 5e3 : 3e3, aC = 0; aC < fg; aC++) h.push(a1.zZ.loadString(ze + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fg; aC++) h.push(a1.za[zd + aC]);
		return h
	}, this.save = function(eP, value, eA) {
		var zf = (eA ? "v" : "d") + eP;
		if (0 === a1.id) {
			if (a1.zY && bm.buffer.data[140].value) try {
				a1.zY.setItem(zf, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zZ.saveString((eA ? 1e3 : 2e3) + eP, value) : 2 === a1.id && (a1.za[zf] = value, a1.zg.postMessage(zf + " " + value))
	}, this.zh = function(h, zc) {
		var fg = h.length,
			zd = zc ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zY && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fg; aC++) a1.zY.setItem(zd + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var ze = zc ? 5e3 : 3e3, aC = 0; aC < fg; aC++) a1.zZ.saveString(ze + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fg; aC++) a1.za[zd + aC] = h[aC], a1.zg.postMessage(zd + aC + " " + h[aC])
	}
}

function zH() {
	this.dr = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eA && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zP = 1);
			0 === data[100].eA && (data[100].value = data[100].zP = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fg = data.length;
		for (aC = 0; aC < fg; aC++) {
			var zk = bm.tv.zW(aC, !0);
			data[aC] && data[aC].eA === zk && (null === (zk = bm.tv.zX(aC)) ? data[aC].value = data[aC].zP : 2 === data[aC].type ? data[aC].value = zk : (zk = Number(zk), isNaN(zk) ? data[aC].value = data[aC].zP : data[aC].value = zk))
		}
	}
}

function zE() {
	function zp(h) {
		if (0 === h.length) bm.rz.q5(116, "");
		else {
			for (var zt = h[0], aC = 1; aC < h.length; aC++) zt += ";" + h[aC];
			bm.rz.q5(116, zt)
		}
	}
	this.zm = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rz.q5(110, ""), this.zn())
	}, this.zn = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var zo = [], aC = 0; aC < h.length; aC += 2) zo.push(h[aC]);
		zp(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oW = zo
	}, this.zq = function(eP) {
		bm.buffer.data[117].oW.splice(eP, 1), bm.buffer.data[117].value = Math.min(eP, bm.buffer.data[117].oW.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eP, 2), zp(h)
	}, this.zr = function(pk, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pk) return h[aC + 1] = password, void zp(h);
		h.push(pk, password), zp(h)
	}, this.zs = function(eP) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eP + 1) ? null : {
			pk: h[2 * eP],
			password: h[2 * eP + 1]
		}
	}, this.zu = function() {
		var g8 = bO.is(bm.buffer.data[121].value, -1, 262143);
		return g8 = -1 === g8 ? ~~(262144 * Math.random()) : g8
	}, this.zI = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var zv, pc = h[aC].trim();
			0 !== pc.length && (zv = 0 <= (zv = pc.indexOf("=")) ? pc.substring(0, zv) : pc, document.cookie = zv + "=;expires=0;path=/", document.cookie = zv + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = zv +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function zD() {
	this.q5 = function(eP, value) {
		2 !== bm.buffer.data[eP].type && (value = Math.floor(value)), bm.buffer.data[eP].value !== value && (bm.buffer.zM(eP, value), 0 === eP ? (u.y(), bA.dr(), u.v(2)) : 1 === eP ? i.e1(1) : 2 === eP ? i.e1(0) : 5 === eP && (bD.tC.zw(), i.e1(
			0)))
	}, this.zx = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zM(aC, data[aC].zP);
		bD.tC.zw(), i.e1(1)
	}, this.zy = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.q5(aC, data[aC].zP)
	}, this.zz = function() {
		for (var g0 = bm.buffer, aC = 128; aC < 135; aC++) g0.zM(aC, g0.data[aC].zP)
	}, this.a00 = function(data) {
		bm.rz.q5(109, data.vW), bm.rz.q5(107, data.a01), bm.rz.q5(108, data.a02), bm.rz.q5(112, data.a03), bm.rz.q5(111, data.a04), bm.rz.q5(113, data.a05), bm.rz.q5(135, data.a06), bm.rz.q5(136, data.a07), bm.rz.q5(137, data.a08), bm.rz.q5(138,
			data.a09), bm.rz.q5(139, data.a0A), bm.rz.q5(141, data.a0B), bm.rz.q5(142, data.a0C), bm.rz.q5(143, data.a0D), bm.rz.q5(144, data.a0E)
	}
}

function cB() {
	this.f7 = new a0F, this.a0G = new a0H, this.a0I = new a0J, this.dr = function() {
		this.f7.dr()
	}
}

function a0H() {
	this.a0K = function(size) {
		for (var a0L = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0L.sc(16)));
		return h.join("")
	}, this.a0M = function(pc) {
		return 20 < (pc = pc.trim()).length ? pc.substring(0, 20) : pc
	}
}

function a0F() {
	var a0N = new Uint8Array(78);
	this.dr = function() {
		var aC;
		for (a0N[50] = 37, aC = 0; aC < 10; aC++) a0N[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0N[aC + 20] = aC + 11, a0N[aC + 52] = aC + 38
	}, this.a0O = function(pc) {
		return pc || (console.log("validateString error: " + pc), pc = ""), pc.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0P = function(pc, size) {
		if ((pc = this.a0O(pc)).length > size) return pc.substring(0, size);
		for (; pc.length < size;) pc = "-" + pc;
		return pc
	}, this.a0Q = function(pc) {
		for (var a0R = a0N, fg = pc.length, h = new Uint8Array(fg), aC = 0; aC < fg; aC++) h[aC] = a0R[pc.charCodeAt(aC) - 45];
		return h
	}, this.a0S = function(a0T) {
		bG.a8(6 * a0T.length), this.a0U(a0T), bK.dr(bG.aD)
	}, this.a0U = function(a0T) {
		for (var fg = a0T.length, j = bG, aC = 0; aC < fg; aC++) j.a9(6, a0T[aC])
	}, this.a0V = function(pc) {
		this.a0U(this.a0Q(pc))
	}, this.a0W = function(pc, size) {
		this.a0U(this.a0Q(this.a0P(pc, size)))
	}, this.f8 = function(pc, size) {
		for (var h = this.a0Q(this.a0P(pc, size)), g8 = 0, oH = 1, aC = h.length - 1; 0 <= aC; aC--) g8 += oH * h[aC], oH *= 64;
		return g8
	}
}

function a0X() {
	var j, k, a0Y;

	function a0x(i9, fj, a0v, a0d, a0q) {
		fj = a0w(i9, fj + 1 + 2 * a0d & 3);
		! function(i9, lf) {
			return 1 < Math.abs(i9 % j - lf % j) || 1 < Math.abs(a10(i9) - a10(lf))
		}(i9, fj) && 0 === a0q[fj << 2] && (a0q[fj << 2] = a0v)
	}

	function a10(hE) {
		return Math.floor((hE + .5) / j) % k
	}

	function a0w(hE, fj) {
		return hE + a0Y[fj]
	}
	this.a0Z = function(pc) {
		var aC, a0a, fg, a0b, a0L = bK;
		for (bJ.f7.a0S(bJ.f7.a0Q(pc)), bV.xH.a0e[bV.fM].j = bV.fr = j = a0L.sc(12), bV.xH.a0e[bV.fM].k = bV.fs = k = a0L.sc(12), a0Y = [-j, -1, j, 1], bV.a0n = document.createElement("canvas"), bV.a0n.width = bV.fr, bV.a0n.height = bV.fs, bV
			.a0j = bV.a0n.getContext("2d", {
				alpha: !1
			}), bV.a0k = bV.a0o = null, bV.a0k = bV.a0j.getImageData(0, 0, bV.fr, bV.fs), bV.a0o = bV.a0k.data, bD.tm.a0p(bV.a0o), fg = a0L.sc(12), a0a = a0L.sc(5), a0b = a0g(j * k - 1), aC = 0; aC < fg; aC++) ! function(lx, hE, a0c, a0d) {
			var aC, fj, a0L = bK,
				a0q = bV.a0o,
				a0r = hE,
				a0s = hE,
				a0t = 0,
				a0u = 1 + a0c,
				a0v = 2 - a0c;
			for (a0q[hE << 2] = a0u, aC = 0; aC < lx; aC++) fj = a0L.sc(2), hE = a0w(hE, fj), a0q[hE << 2] === a0u ? a0t % 2 == 1 && a0x(a0s, a0t + 2 * a0d + 3, a0v, a0d, a0q) : a0q[hE << 2] = a0u, a0x(hE, fj, a0v, a0d, a0q), a0x(a0s, fj,
				a0v, a0d, a0q), a0s = hE, a0t = fj;
			a0w(hE, 0) === a0r ? (a0x(hE, 0, a0v, a0d, a0q), a0x(a0r, 0, a0v, a0d, a0q)) : a0w(hE, 1) === a0r && (a0x(hE, 0, a0v, a0d, a0q), a0x(a0r, 2, a0v, a0d, a0q));
			0 === lx && (a0x(a0r, 0, a0v, a0d, a0q), a0x(a0r, 2, a0v, a0d, a0q))
		}(a0L.sc(a0a), a0L.sc(a0b), 1 === a0L.sc(1), 1 === a0L.sc(1));
		var fn, fp, iZ, a11, a12, a13, a0q = bV.a0o,
			a14 = !0,
			a15 = bV.xH.a0e[bV.fM].a15,
			a16 = bV.xH.a0e[bV.fM].a16;
		for (fp = 0; fp < k; fp++)
			for (a11 = !0, a12 = a14, fn = a13 = 0; fn < j; fn++) iZ = 4 * fp * j + 4 * fn, a13 <= fn && 0 < a0q[iZ] && (a12 = 2 === a0q[iZ], a11) && (a11 = !1, a12 !== a14) ? (a14 = a12, a13 = fn + 1, fn = -1) : (a12 ? (a0q[iZ] = a16[0], a0q[1 +
				iZ] = a16[1], a0q[2 + iZ] = a16[2]) : (a0q[iZ] = a15[0], a0q[1 + iZ] = a15[1], a0q[2 + iZ] = a15[2]), a0q[3 + iZ] = 255);
		bV.a0j.putImageData(bV.a0k, 0, 0), bV.a0l = !0, bV.a0m.dr(), bi.dy = !0
	}
}

function a0J() {
	this.a0Z = function(a17) {
		for (var a0L = bK, size = a0L.sc(a17), a18 = 7 + 9 * a0L.sc(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0L.sc(a18)));
		return h.join("")
	}
}

function cG() {
	var v2, v3, a19, a1A, a1B, a1C, a1D, a1E, a1F, a1G;

	function a1I() {
		var a1L = aE.a1L;
		for (a1F = a1L; a1F < aE.fd; a1F++) a1H();
		for (a1F = aE.i5 ? aE.l2 : 0; a1F < a1L; a1F++) {
			if (!a1M()) {
				for (var g0 = aE.a1Q = a1F; g0 < a1L; g0++) a1F = g0, a1H();
				return
			}
			a1P(a1C + v2 * a1B + bO.g7(a1B, 2), a1D + v3 * a1B + bO.g7(a1B, 2))
		}
	}

	function a1s(player) {
		for (var ja = ah.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, fp = jc[player]; fp <= jd[player]; fp++)
			for (var fn = ja[player]; fn <= jb[player]; fn++) {
				var fK = ad.a1t(fn, fp);
				ad.hG(fK) && (ad.kD(fK) ? ad.hB(fK, player) : ad.a1u(fK, player))
			}
	}

	function a1r(h, vp, vq) {
		var eh = h[vp];
		h[vp] = h[vq], h[vq] = eh
	}

	function a1M() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (v2 = bO.g7(a19 * az.random(), az.value(100)), v3 = bO.g7(a1A * az.random(), az.value(100)), a1z()) return 1;
			return
		}() || function() {
			var j4, j7, fz, a1O, g0, a1N;
			for (j4 = bO.g7(a19 * az.random(), az.value(100)), j7 = bO.g7(a1A * az.random(), az.value(100)), fz = 40; 1 <= fz; fz--)
				for (a1O = a1A - fz; 0 <= a1O; a1O -= 40)
					for (v3 = (a1O + j7) % a1A, g0 = 40; 1 <= g0; g0--)
						for (a1N = a19 - g0; 0 <= a1N; a1N -= 40)
							if (v2 = (a1N + j4) % a19, a1z()) return 1;
			return
		}()
	}

	function a1z() {
		for (var hE, a21, gap = bO.g7(a1B - a1E, 2), a22 = a1D + v3 * a1B + gap, a23 = a1C + v2 * a1B + gap, a20 = a22 + a1E - 1; a22 <= a20; a20--)
			for (a21 = a23 + a1E - 1; a23 <= a21; a21--)
				if (hE = ad.a1t(a21, a20), !ad.fb(hE) || ad.kD(hE)) return;
		return 1
	}

	function a1P(a1N, a1O) {
		a1H(), a24(a1N - 2, a1O - 2)
	}

	function a1H() {
		ah.ne[a1F] = 0, ah.hU[a1F] = ah.a1p[a1F] = 0, ah.h8[a1F] = [], ah.hM[a1F] = [], ah.hN[a1F] = [], ah.g5[a1F] = [], ah.ja[a1F] = ah.jc[a1F] = ah.jb[a1F] = ah.jd[a1F] = 0
	}

	function a24(a1N, a1O) {
		var hE, aC, a25, a26;
		for (ah.ne[a1F] = 1, ah.ja[a1F] = a1N + 10, ah.jc[a1F] = a1O + 10, ah.jd[a1F] = ah.jb[a1F] = 0, a25 = a1N; a25 < a1N + 4; a25++)
			for (a26 = a1O; a26 < a1O + 4; a26++)(a1N < a25 && a25 < a1N + 3 || a1O < a26 && a26 < a1O + 3) && (hE = ad.a1t(a25, a26), ad.fb(hE)) && (ah.ja[a1F] = Math.min(a25, ah.ja[a1F]), ah.jb[a1F] = Math.max(a25, ah.jb[a1F]), ah.jc[a1F] = Math
				.min(a26, ah.jc[a1F]), ah.jd[a1F] = Math.max(a26, ah.jd[a1F]), a1G[ah.hU[a1F]] = hE, ah.hU[a1F]++, ad.a1u(hE, a1F));
		for (ah.a1p[a1F] = ah.hU[a1F], aC = ah.hU[a1F] - 1; 0 <= aC; aC--) ad.a27(a1G[aC], a1F) ? (ad.hB(a1G[aC], a1F), ah.hM[a1F].push(a1G[aC])) : ad.a28(a1G[aC]) ? (ad.hB(a1G[aC], a1F), ah.hN[a1F].push(a1G[aC])) : ad.a29(a1G[aC]) && (ad.hB(a1G[aC],
			a1F), ah.g5[a1F].push(a1G[aC]))
	}
	this.dr = function() {
		if (a1G = new Array(12), a1E = 6, a1B = 10, a19 = bO.g7(bV.fr, a1B), a1A = bO.g7(bV.fs, a1B), a1C = bO.g7(bV.fr - a1B * a19, 2), a1D = bO.g7(bV.fs - a1B * a1A, 2), aE.i5)
			for (var aC = 0; aC < aE.l2; aC++) a1F = aC, a1H(), ah.ne[a1F] = 1;
		(0 === aE.data.spawningType ? a1I : 1 === aE.data.spawningType ? (a1I(), function() {
			var a1R = aE.a1S;
			aE.a1T || a1R++;
			if (!(a1R < 3)) {
				for (var data = aE.data, kI = (aE.i5 ? aE.l2 : 0) + data.teamPlayerCount[0], oN = aE.a1Q, a1U = new Uint32Array(a1R), a1V = new Uint32Array(a1R), a1W = new Uint16Array(a1R), a1X = new Uint16Array(a1R), fe = bj.fe, ja = ah
						.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, gL = bR.gL, gM = bR.gM, aC = kI; aC < oN; aC++) gL[aC] = ja[aC] + jb[aC] >> 1, gM[aC] = jc[aC] + jd[aC] >> 1;
				for (aC = kI; aC < oN; aC++) {
					var id = fe[aC];
					a1U[id] += gL[aC], a1V[id] += gM[aC]
				}
				var lP = bj.lP;
				for (aC = 1; aC < a1R; aC++) {
					var h9 = Math.max(data.teamPlayerCount[lP[aC]], 1);
					a1W[aC] = bO.g7(a1U[aC], h9), a1X[aC] = bO.g7(a1V[aC], h9)
				}
				var a1Y = bj.a1Y,
					a1Z = bj.a1Z,
					a1a = bj.a1a,
					gK = bR.gK;
				for (aC = 0; aC < 512; aC++) gK[aC] = aC;
				for (var eO = 0; eO < 2 + (4 <= a1R); eO++)
					for (aC = kI; aC < oN; aC++) {
						for (var i9 = aC, a1b = gK[i9], a1c = 1, fw = bO.a1d(gL[a1b] - a1W[1], gM[a1b] - a1X[1]), fz = 2; fz < a1R; fz++) {
							var a1e = bO.a1d(gL[a1b] - a1W[fz], gM[a1b] - a1X[fz]);
							a1e < fw && (fw = a1e, a1c = fz)
						}
						var a1f = fe[i9];
						if (a1c !== a1f) {
							if (2 === eO && 4 <= a1R) {
								var a1g = Math.max((a1c + 1) % a1R, 1),
									a1h = bO.a1d(gL[a1b] - a1W[a1g], gM[a1b] - a1X[a1g]);
								for (fz = 1; fz < a1R; fz++) a1e = bO.a1d(gL[a1b] - a1W[fz], gM[a1b] - a1X[fz]), fw < a1e && a1e < a1h && (a1h = a1e, a1g = fz);
								a1g !== a1f && bO.a1d(a1W[a1f] - a1W[a1g], a1X[a1f] - a1X[a1g]) < bO.a1d(a1W[a1f] - a1W[a1c], a1X[a1f] - a1X[a1c]) && (a1c = a1g)
							}
							var a1i = lP[a1c],
								a1j = a1Z[a1i] + (aE.i5 ? 0 : a1a[a1i]),
								lf = a1Y[a1j],
								a1k = gK[lf],
								a1l = a1Z[a1i + 1];
							fw = bO.a1d(gL[a1k] - a1W[a1f], gM[a1k] - a1X[a1f]);
							for (var eq = a1j + 1; eq < a1l; eq++) {
								var a1m = a1Y[eq],
									a1n = gK[a1m];
								(a1e = bO.a1d(gL[a1n] - a1W[a1f], gM[a1n] - a1X[a1f])) < fw && (fw = a1e, lf = a1m)
							}
							lf < kI || oN <= lf || (a1k = gK[lf], a1U[a1f] += gL[a1k] - gL[a1b], a1V[a1f] += gM[a1k] - gM[a1b], a1U[a1c] += gL[a1b] - gL[a1k], a1V[a1c] += gM[a1b] - gM[a1k], h9 = data.teamPlayerCount[lP[a1f]], a1W[a1f] =
								bO.g7(a1U[a1f], h9), a1X[a1f] = bO.g7(a1V[a1f], h9), h9 = data.teamPlayerCount[a1i], a1W[a1c] = bO.g7(a1U[a1c], h9), a1X[a1c] = bO.g7(a1V[a1c], h9), gK[i9] = a1k, gK[lf] = a1b)
						}
					}! function() {
						for (var gK = bR.gK, ja = ah.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, hU = ah.hU, a1p = ah.a1p, hM = ah.hM, hN = ah.hN, g5 = ah.g5, aC = 0; aC < 512; aC++) {
							var a1q = gK[aC];
							if (a1q !== aC) {
								a1r(ja, aC, a1q), a1r(jc, aC, a1q), a1r(jb, aC, a1q), a1r(jd, aC, a1q), a1r(hU, aC, a1q), a1r(a1p, aC, a1q), a1r(hM, aC, a1q), a1r(hN, aC, a1q), a1r(g5, aC, a1q), a1s(aC), a1s(a1q), gK[aC] = aC;
								for (var k = a1q, hF = gK[k]; hF !== aC;) hF = gK[k = hF];
								gK[k] = a1q
							}
						}
					}()
			}
		}) : function() {
			var a1L = aE.a1L;
			for (a1F = a1L; a1F < aE.fd; a1F++) a1H();
			for (a1F = aE.i5 ? aE.l2 : 0; a1F < a1L; a1F++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a1N = spawningData[2 * a1F] + 1,
							spawningData = spawningData[2 * a1F + 1] + 1;
						if (3 < a1N && a1N < bV.fr - 5 && 3 < spawningData && spawningData < bV.fs - 5 && ad.fb(ad.a1t(a1N, spawningData)) && function(a1N, a1O) {
								var hE, a21, a20;
								for (a20 = a1O; a1O - 6 < a20; a20--)
									for (a21 = a1N; a1N - 6 < a21; a21--)
										if (hE = ad.a1t(a21, a20), ad.kD(hE)) return;
								return 1
							}(a1N + 3, spawningData + 3)) return a1P(a1N + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a1M()) {
						for (var g0 = aE.a1Q = a1F; g0 < a1L; g0++) a1F = g0, a1H();
						return
					}
					var a1N = a1C + v2 * a1B + bO.g7(a1B, 2),
						a1O = a1D + v3 * a1B + bO.g7(a1B, 2);
					a1P(a1N, a1O)
				}
		})(), bg.na[7] = ah.hU[aE.fQ]
	}, this.a2A = function(kB, a2B, a2C) {
		var aC, a1N, a1O, hE, v2, v3;
		for (a1F = kB, aC = 0; aC < 20; aC++)
			for (a1N = a2B + aC; a2B - aC <= a1N; a1N--)
				for (a1O = a2C + aC; a2C - aC <= a1O; a1O--)
					if ((a1N === a2B + aC || a1N === a2B - aC || a1O === a2C + aC || a1O === a2C - aC) && 3 < a1N && a1N < bV.fr - 5 && 3 < a1O && a1O < bV.fs - 5 && ad.fb(ad.a1t(a1N, a1O)) && function(a1N, a1O) {
							var hE, a21, a20;
							for (a20 = a1O; a1O - 6 < a20; a20--)
								for (a21 = a1N; a1N - 6 < a21; a21--)
									if (hE = ad.a1t(a21, a20), ad.kD(hE) && !ad.a2I(a1F, hE)) return;
							return 1
						}(a1N + 3, a1O + 3)) {
						if (0 < ah.hU[a1F]) {
							for (v3 = v2 = hE = void 0, v2 = ah.jb[a1F]; v2 >= ah.ja[a1F]; v2--)
								for (v3 = ah.jd[a1F]; v3 >= ah.jc[a1F]; v3--) hE = 4 * (v3 * bV.fr + v2), ad.a2F(a1F, hE) && (ad.a2G(hE), ah.hU[a1F]--);
							a1H()
						}
						return a24(a1N - 1, a1O - 1), !0
					} return !1
	}, this.a2H = function(kB) {
		a1F = kB, a1M() ? a1P(a1C + v2 * a1B + bO.g7(a1B, 2), a1D + v3 * a1B + bO.g7(a1B, 2)) : a1H()
	}
}

function a2J() {
	au.a2K(), ys.setTransform(iv, 0, 0, iv, 0, 0), ys.imageSmoothingEnabled = iv < 3, ys.drawImage(bV.a0n, aT.a2L(), aT.a2M()), bS.a2N.yr(), ys.drawImage(a2O, aT.a2L(), aT.a2M()), au.yr(), bQ.yr(), ag.yr(), (aE.o8 ? (bk.yr(), bF) : (aO.yr(), aW.yr(),
		aS.yr(), bF.yr(), ax.yr(), aX.yr(), aT.yr(), aR.yr(), bk.yr(), aV.yr(), aQ.yr(), aN.yr(), aM.yr(), aY.yr(), bh.yr(), aw)).yr(), u.yr()
}

function a2P(p4, j, k) {
	p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qQ, p4.fillRect(0, 0, j, k)
}

function a2Q(p4, j, k, a2R) {
	p4.fillStyle = bE.qT, p4.fillRect(0, 0, j, a2R), p4.fillRect(0, 0, a2R, k), p4.fillRect(j - a2R, 0, a2R, k), p4.fillRect(0, k - a2R, j, a2R)
}

function a2S(p4, fn, fp, ie, a2R, hE, a2T) {
	p4.fillStyle = bE.qT;
	var hE = Math.floor(ie * hE),
		vd = (hE += (hE - a2R) % 2, Math.floor((hE - a2R) / 2)),
		ie = Math.floor((ie - hE) / 2);
	p4.fillRect(fn + ie, fp + ie + vd, hE, a2R), a2T && p4.fillRect(fn + ie + vd, fp + ie, a2R, hE)
}

function a2V() {
	this.dr = function() {
		8 === aE.lK && aO.a2W()
	}, this.a2X = function(a2Y) {
		var elo = aE.data.elo,
			kH = (elo[a2Y] - elo[1 - a2Y]) / 10,
			kH = 8 / (1 + Math.pow(2, kH / 32)),
			kH = Math.floor(10 * kH + .5),
			a2a = elo[a2Y] + kH,
			a2b = this.a2c(a2a),
			elo = this.a2c(elo[1 - a2Y] - kH),
			kH = (0 === a2Y ? aO.a2e(a2b, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2e(elo, a2b, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2a * bO.sqrt(a2a) >> 8),
			elo = ((1 + aE.a2h) * kH / 100).toFixed(2);
		a2Y !== aE.fQ || aE.hq ? aO.a2i(640, L(31, [ah.a2j[a2Y], elo]), 40, 0, bE.qT, bE.qQ, -1, !1) : aO.a2i(640, L(30, [elo]), 40, 0, bE.qT, bE.qQ, -1, !1)
	}, this.a2c = function(elo) {
		return 16e3 === (elo = bO.is(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cm() {
	this.qB = new a2k, this.a0q = new a2l
}

function a2l() {
	this.iT = !1;
	this.a2p = [], this.a2q = 100;
	var o5, o6, gap, ie, a2m, a2o, a2r = 0,
		a2s = new Array(9),
		a2t = [],
		a2u = [],
		a2v = 0,
		a2w = 0,
		a2x = 0,
		a2y = 0;

	function a3A() {
		a2s.sort(function(fz, g0) {
			return g0.l7 - fz.l7
		});
		for (var pc = "" + a2s[0].sD, aC = 1; aC < 9; aC++) pc += "," + a2s[aC].sD;
		for (aC = 0; aC < 9; aC++) pc += "," + a2s[aC].l7;
		bm.buffer.zM(120, pc)
	}
	this.dr = function() {
		for (var a2z = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2z.length; aC++) {
			var color = 6 === a2z[aC] ? bE.qt : bE.qR;
			this.a2p.push(bD.canvas.a30(ac.get(3), a2z[aC], color))
		}
		for (aC = 0; aC < ak.qB.a31; aC++) a2u.push(ak.qB.a32 - ak.qB.a31 + aC);
		for (aC = 0; aC < ak.qB.a33; aC++) a2u.push(ak.qB.a34 + aC);
		var a35 = ak.qB.a36(bN.a35);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a35.slice(), aC = 0; aC < a35.length; aC++) a2u.push(a35[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2s[q] = {
						sD: isNaN(qcode) ? 1015 + q : qcode,
						l7: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2s[aC] = {
							sD: 1015 + aC,
							l7: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g8 = parseInt(h[aC]),
								eq = (g8 = 0 <= g8 && g8 < ak.qB.a32 ? g8 : 0, parseInt(h[aC + 9]));
							eq = 0 <= eq && eq < 1e3 ? eq : 0, a2s[aC] = {
								sD: g8,
								l7: eq
							}
						}
				}
		}()
	}, this.show = function(mH, mI, a3B) {
		var aC;
		if (a2v = mH, a2w = mI, a2r = a3B || 0, this.iT = !0, a2t = [], 0 === a2r)
			for (aC = 0; aC < 9; aC++) a2t.push(a2s[aC].sD);
		else {
			var g0 = 49 * a2r,
				a3B = g0 - 49;
			for (a3B >= a2u.length && (a2r = 1, a3B = 0, g0 = 49), aC = a3B = (g0 = Math.min(g0, a2u.length)) - 49; aC < g0; aC++) a2t.push(a2u[aC])
		}
		a2t.push(1024);
		a3B = a2t.length, ie = Math.floor((a1.a2.it() ? .075 : .0468) * i.iu), gap = Math.floor(ie / 3), (a2x = 10 * (a2m = ie + gap)) > i.j && (a2x = i.j, gap = (a2m = a2x / 10) - (ie = 3 * a2m / 4)), a2o = bO.g7(a3B, 10) + !!(a3B % 10), (a2y =
			a2o * a2m) > i.k && (a2y = i.k, gap = (a2m = a2y / a2o) - (ie = 3 * a2m / 4)), a3B = .5 * gap;
		o5 = Math.min(Math.max(mH - .5 * a2x + a3B, a3B), i.j - a2x + a3B), o6 = Math.min(Math.max(mI - .5 * a2y + a3B, a3B), i.k - a2y + a3B)
	}, this.hu = function(mH, mI, player) {
		if (!this.iT) return !1;
		if (this.a3D(mH, mI)) {
			mH = bO.is(bO.g7(mH - o5 + .5 * gap, a2m), 0, 9);
			if ((mH += 10 * bO.is(bO.g7(mI - o6 + .5 * gap, a2m), 0, 9)) >= a2t.length) return aM.ub(), !0;
			mI = a2t[mH];
			if (1024 === mI) return this.show(a2v, a2w, a2r + 1), !0;
			! function(sD) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2s[aC].l7 = Math.floor(.99 * a2s[aC].l7);
					for (aC = 0; aC < 9; aC++)
						if (sD === a2s[aC].sD) return a2s[aC].l7 = Math.min(a2s[aC].l7 + 30, 999), a3A();
					a2s.splice(5, 0, {
						sD: sD,
						l7: Math.max(a2s[4].l7, 30)
					}), a2s.pop(), a3A()
				}
			}(mI), player === aE.fQ ? bB.i7.sC(mI) : bB.h2.sR(mI, player)
		}
		return aM.ub(), !0
	}, this.a3D = function(mH, mI) {
		return !(mH < o5 - .5 * gap || mI < o6 - .5 * gap || o5 + a2x - .5 * gap <= mH || o6 + a2y - .5 * gap <= mI)
	}, this.yr = function() {
		ys.fillStyle = bE.qQ, ys.fillRect(o5 - .5 * gap, o6 - .5 * gap, a2x, a2y);
		for (var iZ = .5 * bf.a3E, fg = (ys.lineWidth = bf.a3E, ys.strokeStyle = ys.fillStyle = bE.qT, ys.strokeRect(o5 - .5 * gap + iZ, o6 - .5 * gap + iZ, a2x - 2 * iZ, a2y - 2 * iZ), ys.imageSmoothingEnabled = !0, a2t.length), aC = 0; aC <
			fg; aC++) this.a3F(a2t[aC], ys, o5 + aC % 10 * a2m, o6 + bO.g7(aC, 10) * a2m, ie);
		ys.imageSmoothingEnabled = !1
	}, this.a3F = function(sD, il, fn, fp, ie) {
		var fK;
		sD >= 1024 - ak.qB.a31 ? (fK = ie / this.a2q, il.setTransform(fK, 0, 0, fK, fn, fp), il.drawImage(this.a2p[sD - 1024 + ak.qB.a31], 0, 0), il.setTransform(1, 0, 0, 1, 0, 0)) : (bD.tC.textAlign(il, 1), bD.tC.textBaseline(il, 1), il.font =
			bD.tC.tF(0, .89 * ie), il.fillText(ak.qB.a3G(sD), fn + .5 * ie, fp + (.35 - bD.tC.a3H + .56) * ie))
	}
}

function a2k() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a31 = 13, this.a33 = this.emojis.length, this.a34 = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a34, this.a32 = 1024, this.a3I = this.emojis.indexOf(
		"💀"), this.a3J = this.a3I + 1, this.a3K = this.emojis.indexOf("🥇"), this.a3L = this.emojis.indexOf("😊"), this.a3G = function(g8) {
		return g8 < this.a34 ? String.fromCharCode(55356, 56806 + bO.g7(g8, 26), 55356, 56806 + g8 % 26) : this.emojis[Math.min(g8 - this.a34, this.a33 - 1)]
	}, this.a36 = function(pc) {
		for (var fg = pc.length - 2, h = [], aC = 0; aC < fg; aC++) {
			var a3M = pc.charCodeAt(aC) - 56806,
				a3N = pc.charCodeAt(aC + 2) - 56806;
			0 <= a3M && a3M < 26 && 0 <= a3N && a3N < 26 && (h.push(26 * a3M + a3N), aC += 3)
		}
		return h
	}, this.a3O = function(g8) {
		return g8 < this.a34
	}, this.a3P = function(g8) {
		return g8 >= 1024 - this.a31
	}, this.a3Q = function(g8) {
		return g8 >= this.a34 && g8 < this.a34 + this.a3J
	}
}

function cA() {
	this.f7 = new a3R, this.a0G = new a3S, this.a0I = new a3T, this.dr = function() {
		this.f7.dr()
	}
}

function a3S() {
	this.a0V = function(pc) {
		for (var fg = pc.length, j = bG, aC = 0; aC < fg; aC++) j.a9(16, pc.charCodeAt(aC))
	}
}

function a3R() {
	var a3U = new Uint8Array(64);
	this.dr = function() {
		var aC;
		for (a3U[0] = 45, a3U[37] = 95, aC = 0; aC < 10; aC++) a3U[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3U[aC + 11] = 65 + aC, a3U[aC + 38] = 97 + aC
	}, this.va = function(a3V) {
		for (var a0L = bK, a0T = new Uint8Array(a3V), aC = 0; aC < a3V; aC++) a0T[aC] = a0L.sc(6);
		return a0T
	}, this.vZ = function(a0T) {
		for (var fg = a0T.length, a3W = a3U, h = [], aC = 0; aC < fg; aC++) h.push(String.fromCharCode(a3W[a0T[aC]]));
		return h.join("")
	}, this.a3X = function(value, a3Y) {
		for (var a3W = a3U, h = [], aC = 0; aC < a3Y; aC++) h.push(String.fromCharCode(a3W[value >> 6 * (a3Y - 1 - aC) & 63]));
		return h.join("")
	}
}

function cI() {
	var a3Z, a3a, a3b;
	a3Z = [32, 65, 191, 913, 931], a3a = [64, 127, 688, 930, 1155], a3b = new Array(a3Z.length + 1);
	for (var aC = 0; aC < a3b.length; aC++) {
		a3b[aC] = 0;
		for (var fz = aC - 1; 0 <= fz; fz--) a3b[aC] += a3a[fz] - a3Z[fz]
	}

	function a3h(eq) {
		for (var aC = a3Z.length - 1; 0 <= aC; aC--)
			if (eq >= a3Z[aC] && eq < a3a[aC]) return aC;
		return -1
	}
	this.a0M = function(pc) {
		return 0 !== (pc = pc.trim()).indexOf("Bot ") && 0 !== pc.indexOf("[Bot] ") && function(pc, a3e, a3f) {
			var fg = (pc = pc.trim()).length;
			if (fg < a3e || a3f < fg) return !1;
			for (var eq, a3g = 0, aC = 0; aC < fg; aC++)
				if (eq = pc.charCodeAt(aC), a3g += 65 <= eq && eq <= 90 || 1040 <= eq && eq <= 1071 ? 1 : 0, -1 === a3h(eq)) return !1;
			if (3 < a3g && a3g > Math.floor(fg / 2)) return !1;
			return !0
		}(pc, 3, 20)
	}, this.a3i = function(pc) {
		for (var fg = (pc = pc.trim()).length, h = [], aC = 0; aC < fg; aC++) {
			var eq, hE = a3h(eq = pc.charCodeAt(aC));
			h.push(a3b[hE] + eq - a3Z[hE])
		}
		return h
	}, this.a0Z = function(h) {
		for (var eq, g0, pc = "", fg = h.length, aC = 0; aC < fg; aC++)
			for (g0 = 1; g0 < a3b.length; g0++)
				if (h[aC] < a3b[g0]) {
					eq = a3Z[g0 - 1] + h[aC] - a3b[g0 - 1], pc += String.fromCharCode(eq);
					break
				} return pc
	}, this.a3j = function(pc) {
		for (var h = this.a3i(pc), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3k = function(pc) {
		for (var h = new Array(Math.floor(pc.length / 3)), aC = 0; aC < pc.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pc.substring(aC, aC + 3));
		return this.a0Z(h)
	}, this.a3l = function(pc) {
		for (var g8, h = [pc.length], aC = 0; aC < pc.length; aC++) h[aC] = pc.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pc.length; aC++) aC === pc.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g8 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g8 + (g8 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3m = function(pc) {
		for (var eq, result = "", aC = 0; aC < pc.length; aC++) 48 <= (eq = pc.charCodeAt(aC)) && eq < 58 ? result += String.fromCharCode(eq) : 65 <= eq && eq < 75 ? result += "0" + (eq - 65).toString() : 75 <= eq && eq < 91 ? result += (eq - 65)
			.toString() : 97 <= eq && eq < 123 && (result += (eq - 71).toString());
		return result
	}, this.a3n = function(pc) {
		for (var fg = pc.length, h = [], aC = 0; aC < fg; aC++)(eq = pc.charCodeAt(aC)) < 58 ? h.push(pc[aC]) : (eq -= eq < 91 ? 65 : 71, h.push(String(bO.g7(eq, 10))), h.push(String(eq - 10 * bO.g7(eq, 10))));
		var fg = h.length - 2,
			eq = 0,
			a0T = [];
		for (aC = 0; aC < fg; aC += 3) a0T[eq++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0T
	}, this.a3o = function() {
		for (var eO, a3p = "", aC = 0; aC < 6; aC++) eO = 48 + az.random() % 36, eO += 58 <= eO ? 39 : 0, a3p += String.fromCharCode(eO);
		return a3p
	}
}

function a3T() {
	this.a3i = function(pc, a17, a3q) {
		for (var a3r = [], fg = pc.length, max = 0, aC = 0; aC < fg; aC++) {
			var g8 = pc.charCodeAt(aC);
			a3r.push(g8), max = Math.max(max, g8)
		}
		var a18 = max < 128 ? 7 : 16;
		for (a3q.a9(a17, fg), a3q.a9(1, +(16 == a18)), aC = 0; aC < fg; aC++) a3q.a9(a18, a3r[aC])
	}
}

function dJ() {
	this.a3s = new a3t, this.result = new a3u, this.a3v = new a3w, this.nF = new a3x, this.a3y = new a3z, this.a40 = new a41, this.dr = function() {
		this.result.dr()
	}
}

function a3w() {
	this.a42 = function() {
		for (var fg = am.lY, x0 = am.ld, a43 = [], aC = 0; aC < fg; aC++) {
			var hE = x0[aC];
			bD.h2.a44(hE) && a43.push(hE)
		}
		return a43
	}, this.a45 = function() {
		if (0 === bj.lP[aE.a46]) return this.a47();
		bk.l3(aE.a46);
		for (var a43 = [], fg = bR.gB[0], gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = gK[aC];
			bD.h2.a44(hE) && a43.push(hE)
		}
		return a43
	}, this.a47 = function() {
		var hE = md[0];
		return bD.h2.a44(hE) ? [hE] : []
	}, this.a48 = function(a43) {
		for (var fg = a43.length, eh = 0, hU = ah.hU, aC = 0; aC < fg; aC++) eh += hU[a43[aC]];
		return eh
	}
}

function a3t() {
	function a4A() {
		if (2 === aE.a4E) return 1;
		ax.a4F(), aE.a4E = 2, aE.a4G = aE.a4H
	}

	function a4C() {
		bU.a3y.a4I(), aY.show(1 === aE.a4J, !1, 2 === aE.a4J), bU.result.a4I(), bU.a40.el(), bU.nF.el(), bU.nF.a4K(), aO.a4L(!0), aO.a4M(247), aO.a4M(956), aO.a4M(957), aW.nQ(!0), aX.nQ(!0), ax.nQ(), bF.a4N(), aE.hp && bi.a4O.a4P(), bi.dy = !0, be
			.a4Q(), a1.a2.setState(0)
	}
	this.a49 = function() {
		a4A() || (aE.a4B = 2, a4C())
	}, this.a4D = function() {
		a4A() || (aE.a4B = 1, a4C())
	}
}

function a3x() {
	var a4R = 0;
	this.el = function() {
		var a4Z;
		2 === aE.a4B ? (aO.a4S(0, 59), aI.oE(2700)) : aE.lK < 7 ? (a4Z = bj.lP[aE.a46], a4Z = bj.a4b[a4Z], aR.a4c(L(32, [a4Z]), 2, 1, 12), aO.a2i(0, L(33, [a4Z]), 40, 0, bE.qT, bE.qQ, -1, !1), aI.oE(2700)) : 8 === aE.lK ? (aE.hq ? aO.a4S(aE.a4X,
			3) : aE.a4J ? aO.a4S(aE.a4X, 2) : aO.a4S(1 - aE.fQ, 3), aE.a4Y.a2X(aE.a4X), aI.o0(aE.a4X, 2700, !1, 0)) : 9 === aE.lK ? (aO.a4d(), aI.oE(2700)) : (aO.a4e(aE.a4X), aI.o0(aE.a4X, 2700, !1, 0))
	}, this.a4K = function() {
		a4R = 0, aE.hp || aE.lM || (a4R = 54)
	}, this.nG = function() {
		var pc;
		0 !== a4R && 0 === --a4R && (pc = b1.z.a4g(), aE.lK < 7 ? pc += "/log/team" : 8 === aE.lK ? pc += "/log/1v1" : 9 === aE.lK ? pc += "/log/zombies" : pc += "/log/br", aO.a2i(720, pc, 736, 0, bE.qT, bE.qr, -1, !1), aE.a4h < 0 || (pc = b1.z
			.a4g() + "/log/?r=" + bI.f7.a3X(aE.a4h, 6), aO.a2i(1071, pc, 736, 0, bE.qT, bE.qr, -1, !1)))
	}
}

function a41() {
	function a4r() {
		var vt;
		return 8 === aE.lK ? 0 : (vt = Math.floor(ah.a4s[aE.fQ] / 50), (vt = Math.min(vt, 200)) / 100)
	}

	function a4j() {
		var vt = a4r();
		0 === vt || aE.hq || aO.a2i(440, L(34, [vt.toFixed(2)]), 40, 0, bE.ql, bE.qQ, -1, !1)
	}
	this.el = function() {
		var a4k;
		0 === bU.result.a4i || 0 === bU.result.a43.length || 8 === aE.lK ? bD.h2.ht(aE.fQ) && a4j() : (function(a4k) {
			7 !== aE.lK && 10 !== aE.lK && 9 !== aE.lK || 0 !== aE.a4J && a4k && (9 === aE.lK ? aO.a2i(600, L(38, [100 * (1 + aE.a2h)]), 40, 0, bE.qT, bE.qQ, -1, !1) : aO.a2i(600, L(38, [a4k.toFixed(2)]), 40, 0, bE.qT, bE.qQ, -1, !1))
		}(a4k = function() {
			aO.a2i(520, L(35), 40, 0, bE.qT, bE.qQ, -1, !1);
			for (var a43 = bU.result.a43, fg = a43.length, hU = ah.hU, h = [], aC = 0; aC < fg; aC++) {
				var hE = a43[aC];
				h.push({
					hE: hE,
					eh: hU[hE]
				})
			}
			h.sort((fz, g0) => g0.eh - fz.eh);
			var a4b = ah.a2j,
				eh = bU.result.a4t,
				vt = bU.result.a4i,
				pc = "",
				a4k = 0;
			for (aC = 0; aC < fg; aC++) {
				var iR = h[aC].eh * vt / (100 * eh),
					a4v = a4b[h[aC].hE] + ": " + iR.toFixed(2) + "   ";
				h[aC].hE !== aE.fQ || aE.hq || (a4k = iR, 9 === aE.lK && 0 !== aC && (a4k = 0)), 2 < aC && 4 !== fg ? 3 === aC && (pc += "(" + L(36, [fg - 3]) + ")") : pc += a4v
			}
			aO.a2i(560, bD.pg.a4w(pc), 40, 0, bE.ql, bE.qQ, -1, !1), a4k ? aO.a2i(580, L(37, [a4k.toFixed(2) + " + " + a4r().toFixed(2)]), 40, 0, bE.ql, bE.qQ, -1, !1) : bD.h2.ht(aE.fQ) && a4j();
			return a4k
		}()), 2 === aE.a4B || 7 <= aE.lK || function(a4k) {
			var a43 = bU.result.a43,
				fg = a43.length,
				a4x = ah.a4x,
				hU = ah.hU,
				a4y = [];
			loop: for (var aC = 0; aC < fg; aC++) {
				var hE = a43[aC],
					a4z = bD.pg.pu(a4x[hE]);
				if (null !== a4z) {
					for (var a50 = hU[hE], g0 = a4y.length - 1; 0 <= g0; g0--)
						if (a4z === a4y[g0].name) {
							a4y[g0].eh += a50, a4y[g0].h.push({
								hE: hE,
								eh: a50
							});
							continue loop
						} a4y.push({
						name: a4z,
						eh: a50,
						h: [{
							hE: hE,
							eh: a50
						}]
					})
				}
			}
			if (0 !== a4y.length) {
				a4y.sort((fz, g0) => g0.eh - fz.eh);
				var h = a4y[0].h,
					a51 = (h.sort((fz, g0) => g0.eh - fz.eh), "[" + a4y[0].name + "]"),
					a52 = 512 * bU.result.a4i / 26214400,
					lx = (aO.a2i(0, L(39, [a51, a52.toFixed(4)]), 40, 0, bE.qT, bE.qQ, -1, !1), h.length),
					a0R = a4y[0].eh,
					a53 = 1e4 * a52;
				for (aC = 0; aC < lx; aC++)
					if (h[aC].hE === aE.fQ && !aE.hq) {
						aO.a2i(600, L(40, [(a53 * h[aC].eh / (10 * a0R)).toFixed(2)]), 40, 0, bE.qT, bE.qQ, -1, !1), aO.a2i(640, L(41, [(.2 * a4k).toFixed(2), a51]), 40, 0, bE.qT, bE.qQ, -1, !1);
						break
					}
			}
		}(a4k))
	}, this.a4o = function() {
		var a4p, a0r;
		aE.lM || (a4p = ah, a0r = aE.fQ, 0 === a4p.a4q[a0r]) || a4p.k6[a0r] < 1 || 2 * a4p.st[a0r] > 3 * (a4p.k5[a0r] + a4p.k6[a0r]) || a4j()
	}
}

function a3u() {
	this.dr = function() {
		this.a54 = 0, this.a43 = [], this.a4t = 0, this.a4i = 0
	}, this.a4I = function() {
		var uu;
		aE.lM || (uu = this, 2 === aE.a4B ? uu.a43 = bU.a3v.a42() : aE.ib ? uu.a43 = bU.a3v.a45() : uu.a43 = bU.a3v.a47(), uu.a54 = bl.a56.a57(), uu.a4t = Math.max(1, bU.a3v.a48(uu.a43)), bB.h2.sa(), 8 === aE.lK ? bU.result.a4i = 0 : uu.a4i =
			100 * bU.result.a54 * (1 + aE.a2h))
	}
}

function a3z() {
	this.a4I = function() {
		if (2 === aE.a4B) aE.a4J = 2;
		else {
			if (8 === aE.lK) bD.h2.kP(0) || 0 === ah.ne[0] ? aE.a4X = 1 : bD.h2.kP(1) || 0 === ah.ne[1] ? aE.a4X = 0 : aE.a4X = +(ah.hU[1] > ah.hU[0]);
			else {
				if (aE.ib) {
					var la = bk.a5A();
					if (aE.a46 = la, bj.lP[la]) return void(aE.a4J = +(bj.fe[aE.fQ] === la))
				}
				aE.a4X = md[0]
			}
			aE.a4J = +(aE.a4X === aE.fQ)
		}
	}
}

function dO() {
	this.id = 0, this.eA = 0, this.zY = null, this.zZ = null, this.za = null, this.zg = null, this.a2 = new a5B, this.dr = function() {
		var self, eA;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eA = Android.getVersion()) < 12 || (self.eA = eA, self.id = 1, self.zZ = Android),
			function(self) {
				var eA;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.za = mwIOSdataX, self.zg = window.webkit.messageHandlers.iosCommandA, eA = self
					.za.version, self.eA = eA ? Number(eA) : 0)
			}(this),
			function(self) {
				var zY;
				try {
					if (!(zY = window.localStorage)) return;
					zY.setItem("tls7", "1"), zY.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zY = zY
			}(this)
	}
}

function a5B() {
	this.a5F = function() {
		bm.rz.zx(), bm.rz.zy(), b1.z.close(0, 3255), 0 === a1.id ? a1.zY && a1.zY.clear() : 1 === a1.id ? a1.zZ.saveString(199, "") : 2 === a1.id && a1.zg.postMessage("clear")
	}, this.a5G = function() {
		2 === a1.id ? a1.zg.postMessage("showConsentForm") : 1 === a1.id && a1.zZ.setState(7)
	}, this.a5H = function() {
		this.setState(14)
	}, this.it = function() {
		return 1 === bm.buffer.zN(2)
	}, this.a5I = function() {
		bm.buffer.zM(102, "")
	}, this.setState = function(a5J) {
		1 === a1.id && 5 <= a1.eA && a1.zZ.setState(a5J)
	}, this.a3 = function() {
		var a5K;
		1 === a1.id && 7 <= a1.eA ? a1.zZ.setState(5) : 2 === a1.id ? a1.zg.postMessage("reload 0") : ((a5K = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a5K.toString())
	}, this.ec = function() {
		0 !== a1.id && (1 === a1.id ? a1.zZ.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eA ? a1.zg.postMessage("prepare ad 2904813909") : a1.zg.postMessage("loadAds 2904813909")))
	}, this.ei = function(eh) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eA && (a1.zZ.presentAd(eh), !0) : 2 === a1.id && 0 !== a1.eA && (a1.zg.postMessage("showAd"), !0))
	}, this.e0 = function() {
		2 === a1.id && a1.eA < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a5L + "' target='_blank'>" + bN
			.a5L + "</a>", !0, [new x("⬅️ " + L(42), function() {
				u.v(0)
			}, bE.rA)]))
	}
}

function dd() {
	function a5N(e) {
		mM(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(42), function() {
				u.a5O()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qq)]))
	}

	function a5a(e) {
		mM(e), u.v(4, 5, new w(L(43), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a5V(e), !0))
	}

	function a5V(e) {
		var pc = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pc : 4527 === e ? "Player already in lobby" + pc : 4577 === e ? "Your IP is banned." + pc : 4530 === e ? "Lobby Timeout" + pc : 4528 === e ?
			"Lobby Kick: Another login detected." + pc : 4540 === e ? "You have been kicked." + pc : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pc : 4555 === e ? "This Account is blocked." + pc :
			4580 === e ? "More Gold needed" + pc : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pc : 4591 === e ? "The algo determined you are a bot." + pc : "Unknown error" + pc
	}

	function mM(e) {
		a5Q(e), u.z.a0()
	}

	function a5Q(e) {
		4540 === e && b1.z.a5c(e);
		var a5J = ab.a5P();
		bx.close(), 6 === a5J ? b1.z.a5c(e) : bq.fD ? (u.y(), bq.xy(), b1.z.close(b1.z.fE, 3256)) : 8 === a5J && aE.a5d(!0)
	}
	this.q = [], this.a5M = function(oX, e) {
		if (1 === oX && __fx.customLobby.isActive() && 6 !== ab.a5P() && __fx.customLobby.setActive(!1), console.log("socket close index " + oX + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.zs(0)) && (console.log("Reset to: " +
				data.pk), bm.rz.q5(105, data.pk), bm.rz.q5(106, data.password)), 8 === u.vX && 0 === oX)
			if (4211 === e) a5N(e);
			else {
				if (bq.fD && (4495 === e || 4480 === e) && b1.z.fE !== oX) return void u.a5O();
				if (8 !== ab.a5P() && a5Q(), 4480 === e) return bm.rz.zz(), void u.v(4, 0, new w(L(45), L(46), !0));
				var data = 0;
				u.a5T() && 10 === u.a5T().a5U && (data = u.a5T().a5U), u.v(4, data, new w(L(43), a5V(e), !0))
			}
		else {
			data = ab.a5P();
			if (6 === data) {
				if (4211 === e) return void a5N(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5W(oX)
			} else if (bq.fD) {
				if (oX !== b1.z.fE) return
			} else {
				if (8 === data) return void(oX !== b1.z.a5X || aE.lM || 1 !== aE.a4E || aE.hp || aO.a5Y(L(44, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mM(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(42), function() {
					u.a5O()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qq)]))
			} : a5a)(e)
		}
	}, this.a5b = function(e) {
		this.q.push(e), 8 === ab.a5P() ? aE.lM || 1 !== aE.a4E || aO.a5Y(L(44, [e])) : a5a(e)
	}, this.t = function() {
		this.q.push(3268), mM(3268)
	}
}

function dD() {
	var a5e, a5f, a5g = -15e3,
		a5h = !1;

	function hu(e) {
		a61() || (a5h = !0, a62(e, 1), b1.z.a63(b1.z.a5X), a64(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5q(e) {
		a5g = bi.eg, a62(e, 1), b1.z.a63(b1.z.a5X), 0 < e.touches.length && (a5e = Math.floor(i.l * e.touches[0].clientX), a5f = Math.floor(i.l * e.touches[0].clientY), av.a5q(e) || a64(a5e, a5f))
	}

	function a64(fn, fp) {
		u.hu(fn, fp), 0 === aE.a4E ? ab.hu(fn, fp) : bF.a65(fn, fp) || bh.hu(fn, fp) || aY.hu(fn, fp) || aM.a66(fn, fp) || aQ.hu(fn, fp) || 0 <= aN.hu(fn, fp) || ax.hu(fn, fp) || bM.a67(fn, fp) || aM.a68(fn, fp)
	}

	function a5m(e) {
		a61() || (a5h = !0, a62(e, 1), a69(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5r(e) {
		a5g = bi.eg, a62(e, 1), 0 < e.touches.length && (a5e = Math.floor(i.l * e.touches[0].clientX), a5f = Math.floor(i.l * e.touches[0].clientY), av.a5r(e) || a69(a5e, a5f))
	}

	function a69(fn, fp) {
		bM.u5() || (bM.hl = fn, bM.hm = fp), u.a5m(fn, fp), 0 === aE.a4E ? ab.a5m(fn, fp) : (bW.hn(fn, fp), bh.a5m(fn, fp) || (aN.a5m(fn, fp), aM.iT() ? aM.a5m(fn, fp) : aS.hv ? aS.a5m(fn) && (bi.dy = !0) : (aW.a5m(fn, fp), aT.oA && aT.a5m(fn, fp) &&
			(bi.dy = !0))))
	}

	function a5o(e) {
		a61() || (a62(e, 1), a6A(), 0 === aE.a4E ? (ab.click(-1024, -1024), aU.reset()) : (aW.a6B(-1024, -1024), aN.a5m(-1024, -1024), aS.a6C(), aT.oA = !1))
	}

	function a5n(e) {
		a61() || (a62(e, 1), a6D(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5k && (bM.a5k = !1, e.preventDefault()))
	}

	function click(e) {
		a61() || a62(e, 1)
	}

	function a5s(e) {
		a5g = bi.eg, a62(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a4E ? aT.oA = !1 : av.a6E() || (a6D(a5e, a5f, !1), bM.a5k && (bM.a5k = !1, e.preventDefault()))
	}

	function a5t(e) {
		a5g = bi.eg, a62(e, 1), a6D(a5e, a5f, !1), bM.a5k && (bM.a5k = !1, e.preventDefault())
	}

	function a5u(e) {}

	function a5v(e) {}

	function a5w(e) {
		a61() || a62(e, 0)
	}

	function a6D(fn, fp, a6F) {
		a6A(), 0 === aE.a4E ? ab.click(fn, fp) : (aW.a6B(fn, fp), bh.a6B(), aS.a6C(), aT.oA = !1, aM.click(fn, fp, a6F) ? bi.dy = !0 : aN.a5n(fn, fp))
	}

	function a6A() {
		u.a6A()
	}

	function a5p(e) {
		var fn, fp, deltaY;
		a61() || (a62(e, 1), b1.z.a63(b1.z.a5X), fn = Math.floor(i.l * e.clientX), fp = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5p(fn, fp, deltaY), 0 === aE.a4E ? ab.a5p(fn, fp, deltaY) : aW.a5p(fn, fp,
			deltaY) || (aS.a6G(fn, fp) ? aS.a5p(deltaY) && (bi.dy = !0) : aT.a5p(fn, fp, deltaY)))
	}

	function a5x(e) {
		a62(e, 0)
	}

	function a62(e, id) {
		0 === id && u.iT() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a5P() && e.preventDefault()
	}

	function a5y(e) {
		if (__fx.keybindHandler(e.key)) return;
		a61() || 0 < i.vF || (e = e.code) && e.length && (ba.eq(e, 18) ? at.a6I(3) : ba.eq(e, 22) ? at.a6I(0) : ba.eq(e, 20) ? at.a6I(1) : ba.eq(e, 24) ? at.a6I(2) : ba.eq(e, 10) ? aS.a6J(31 / 32) : ba.eq(e, 8) ? aS.a6J(32 / 31) : ba.eq(e, 6) ? aS
			.a6J(7 / 8) : ba.eq(e, 4) ? aS.a6J(8 / 7) : ba.eq(e, 14) ? 0 !== aE.a4E && aT.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.eq(e, 16) ? 0 !== aE.a4E && aT.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.eq(e, 0) ?
			aE.a4E && bW.ho(0) : ba.eq(e, 2) ? aE.a4E && bW.ho(1) : ba.eq(e, 30) ? aE.a4E && bW.ho(2) : ba.eq(e, 26) ? aE.a4E && bW.iN() : ba.eq(e, 28) && aE.a4E && bW.iS())
	}

	function a5z(e) {
		if (!a61() && !(0 < i.vF || bi.eg < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a6K(1) || "Space" === code && u.a6K(0))) return bq.fD ? bq.y4.a6K(code) ? void 0 : void("Escape" === code && bM.g9()) : void(8 !== ab.a5P() && ab.a6K(e) ? bi.dy = !0 : "Escape" === code ?
				bM.g9() : ba.eq(code, 18) ? at.a6L(3) : ba.eq(code, 22) ? at.a6L(0) : ba.eq(code, 20) ? at.a6L(1) : ba.eq(code, 24) ? at.a6L(2) : ba.eq(code, 12) ? bF.a6M(!aE.o8) : "Space" === code && aE.a4E && (aN.hr && aN.a6N(), aE.hp) &&
				bF.a6O(!1))
		}
	}

	function a60() {
		"hidden" !== document.visibilityState && (bi.dy = !0)
	}

	function a61() {
		return a5g + 15e3 > bi.eg
	}

	function resize() {
		i.a6Q()
	}
	this.a5i = 0, this.a5j = "", this.a5k = !1, this.hl = 0, this.hm = 0, this.dr = function() {
		a5l.addEventListener("mousedown", hu, {
			passive: !1
		}), a5l.addEventListener("mousemove", a5m, {
			passive: !1
		}), a5l.addEventListener("mouseup", a5n, {
			passive: !1
		}), a5l.addEventListener("click", click, {
			passive: !1
		}), a5l.addEventListener("mouseleave", a5o, {
			passive: !1
		}), a5l.addEventListener("wheel", a5p, {
			passive: !1
		}), a5l.addEventListener("touchstart", a5q, {
			passive: !1
		}), a5l.addEventListener("touchmove", a5r, {
			passive: !1
		}), a5l.addEventListener("touchend", a5s, {
			passive: !1
		}), a5l.addEventListener("touchcancel", a5t, {
			passive: !1
		}), a5l.addEventListener("dragover", a5u), a5l.addEventListener("drop", a5v), a5l.addEventListener("dblclick", a5w), document.addEventListener("contextmenu", a5x), document.addEventListener("keydown", a5y), document.addEventListener(
			"keyup", a5z), document.addEventListener("visibilitychange", a60), window.addEventListener("resize", resize)
	}, this.a67 = function(fn, fp) {
		return !!bF.hu(fn, fp) || !!(aW.hu(fn, fp) || aT.hu(fn, fp) || aS.hu(fn, fp) || aO.hu(fn, fp))
	}, this.a6P = a61, this.u5 = function() {
		return !a5h || 0 < a5g
	}, this.g9 = function() {
		if (!u.iT()) return 8 === ab.a5P() ? aE.o8 ? void bF.a6M(!1) : bh.iT ? void bh.a6N() : void aN.a6N() : void(7 !== ab.a5P() && 6 === ab.a5P() && aa.a6R());
		u.a6K(2)
	}
}

function c6() {
	this.tC = new a6S, this.tm = new a6T, this.h2 = new a6U, this.pg = new a6V, this.p4 = new a6W, this.p1 = new a6X, this.canvas = new a6Y, this.color = new a6Z, this.a6a = new a6b, this.dr = function() {
		this.tC.zw()
	}
}

function a6T() {
	this.a0p = function(h) {
		h.fill(0)
	}, this.a6c = function(h) {
		for (var fg = h.length, aC = 0; aC < fg; aC++) h[aC] = []
	}, this.a6d = function(a3M, a6e) {
		for (var a3N = bR.gG, aC = 0; aC < 3; aC++) a3N[aC] = a6e * a3M[aC];
		return a3N
	}, this.a6f = function(a3M, a3N, a6g) {
		for (var kH = 0, aC = 0; aC < 3; aC++) kH += Math.abs(a3M[aC] - a3N[aC]);
		return a6g <= kH
	}, this.a6h = function(a3M, a6i) {
		for (var aC = 0; aC < 3; aC++) a3M[aC] = bO.is(a3M[aC] + a6i, 0, 255);
		return a3M
	}, this.a6j = function(h, vp, vq) {
		vq = vq || h.length - 1;
		for (var a6k = 0, aC = vp = vp || 0; aC <= vq; aC++) a6k += h[aC];
		return a6k
	}, this.a6l = function(h, a6m) {
		for (var aC, a6n, fg = h.length, a6o = [], fz = fg - 1; 0 <= fz; fz--) {
			for (aC = a6n = 0; aC < fg; aC++) a6m(h[aC]) < a6m(h[a6n]) && (a6n = aC);
			fg--, a6o.push(h[a6n]), h[a6n] = h[fg], h.pop()
		}
		return a6o
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
	}, this.a6p = function(h, g8) {
		for (var fg = h.length, h9 = 0, aC = 0; aC < fg; aC++) h9 += h[aC] > g8;
		return h9
	}, this.a6q = function(a6r, a6s, min) {
		for (var fg = a6s[0], aC = fg - 1; 0 <= aC; aC--) a6r[aC] < min && (a6r[aC] = a6r[--fg]);
		a6s[0] = fg
	}, this.a6t = function(h, fg, value) {
		for (var aC = 0; aC < fg; aC++) h[aC] -= value
	}, this.a6u = function(h) {
		for (var fg = h.length, aC = 0; aC < fg; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6v = function(pc, h, a6w) {
		h.fill(0);
		for (var vt = pc.split(","), fg = Math.min(vt.length, h.length), aC = 0; aC < fg; aC++) h[aC] = Math.min(parseInt(vt[aC]), a6w)
	}, this.a6x = function(pc, h, maxLength) {
		h.fill("");
		for (var vt = pc.split('"'), fg = Math.min(vt.length, 2 * h.length), iZ = 0, aC = 1; aC < fg; aC += 2) h[iZ++] = vt[aC].slice(0, maxLength)
	}, this.a6y = function(h, h9) {
		if (0 === h9) h.fill(0);
		else {
			var a6k = this.a6j(h),
				fg = h.length;
			if (0 === a6k) h.fill(bO.g7(h9, fg));
			else
				for (var aC = 0; aC < fg; aC++) h[aC] = bO.g7(h9 * h[aC], a6k);
			if (0 === (a6k = this.a6j(h))) h[1] = h9;
			else
				for (var iZ = 0; a6k++ < h9;) h[iZ = (iZ + 1) % fg] && h[iZ]++
		}
	}, this.a6z = function(h) {
		if (!h) return 0;
		var fg = h.length;
		if (0 === fg) return 0;
		for (var g8 = h[fg - 1], aC = fg - 2; 0 <= aC; aC--)
			if (h[aC] !== g8) return aC + 2;
		return 1
	}, this.a70 = function(h) {
		for (var a6k = 0, aC = 0; aC < h.length; aC++) a6k += h[aC].length;
		return a6k
	}, this.a71 = function(a72) {
		for (var h = [], aC = 0; aC < a72.length; aC++) h = h.concat(a72[aC]);
		return h
	}, this.has = function(h, g8) {
		for (var fg = h.length, aC = 0; aC < fg; aC++)
			if (h[aC] === g8) return !0;
		return !1
	}
}

function a6Y() {
	this.a30 = function(a73, eP, a74) {
		var ie = a73.height,
			a75 = bD.tC.a0f(ie, ie),
			il = bD.tC.getContext(a75);
		return function(j, il, a74) {
			il.fillStyle = a74, il.beginPath(), il.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), il.fill()
		}(ie, il, a74), il.drawImage(a73, -eP * ie, 0), a75
	}, this.a77 = function(a78) {
		var il, ii, ie = a78.height;
		return a78.width === ie && (ii = (il = bD.tC.getContext(a78, !0)).getImageData(0, 0, ie, ie), bD.p1.a79(ii.data, ie, ie, .9), il.putImageData(ii, 0, 0)), a78
	}
}

function a6Z() {
	this.a7A = function(g8) {
		return [g8 >> 12 & 63, g8 >> 6 & 63, 63 & g8]
	}, this.a7B = function(g8) {
		for (var h = this.a7A(g8), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a7C = function(g8) {
		g8 = this.a7B(g8);
		return bD.color.qL(g8[0], g8[1], g8[2])
	}, this.a7D = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qL = function(eO, vt, g0) {
		return "rgb(" + eO + "," + vt + "," + g0 + ")"
	}, this.qN = function(eO, vt, g0, fz) {
		return "rgba(" + eO + "," + vt + "," + g0 + "," + fz.toFixed(3) + ")"
	}, this.u7 = function(eq) {
		for (var h = eq.split("(")[1].split(","), gF = bR.gF, aC = 0; aC < 3; aC++) gF[aC] = parseInt(h[aC]);
		return 4 === h.length ? gF[3] = 255 * parseFloat(h[3].slice(0, -1)) : gF[3] = 255, gF
	}, this.u8 = function(a7E, fj) {
		for (var h = a7E.slice(a7E.indexOf("(") + 1, a7E.indexOf(")")).split(","), gF = bR.gF, aC = 0; aC < 3; aC++) gF[aC] = bO.is(parseInt(h[aC].trim(), 10) + fj, 0, 255);
		return 3 === h.length ? this.qL(gF[0], gF[1], gF[2]) : (a7E = parseFloat(h[3].trim()), this.qN(gF[0], gF[1], gF[2], a7E = 0 === a7E ? .3 : a7E))
	}, this.yY = function(a7F, a7G) {
		for (var kH = 0, aC = 0; aC < 3; aC++) kH += Math.abs(a7G[aC] - a7F[aC]);
		if (!(240 <= kH))
			for (aC = 0; aC < 3; aC++) a7G[aC] = a7F[aC] + (a7F[aC] < 128 ? 80 : -80)
	}, this.a7H = function(h) {
		for (var pc = "#", aC = 0; aC < 3; aC++) {
			var eO = h[aC].toString(16);
			pc += 1 === eO.length ? "0" + eO : eO
		}
		return pc
	}, this.a7I = function(pc) {
		var eO, vt;
		return pc.length < 7 ? bE.qK : (eO = parseInt(pc.slice(1, 3), 16), vt = parseInt(pc.slice(3, 5), 16), pc = parseInt(pc.slice(5, 7), 16), this.qL(eO, vt, pc))
	}
}

function a6W() {
	this.a7J = function(pc, font, maxWidth) {
		if (font && (ys.font = font), ys.measureText(pc).width <= maxWidth) return pc;
		for (var aC = pc.length - 1; 1 <= aC; aC--)
			if (pc = pc.substring(0, aC), ys.measureText(pc + "...").width <= maxWidth) return pc + "...";
		return "..."
	}
}

function a6b() {
	var a7L = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7M = function(eg) {
		var a7O, pc = new Date(eg.getTime() - 6e4 * eg.getTimezoneOffset()).toUTCString();
		return pc.length < 12 || (pc = pc.substring(5, pc.length), 0 === (eg = eg.getTimezoneOffset())) ? pc : (a7O = (eg < 0 ? "+" : "-") + bO.g7(Math.abs(eg), 60), 0 == (eg = Math.abs(eg) % 60) ? pc + a7O : pc + a7O + ":" + (eg < 10 ? "0" :
			"") + eg)
	}, this.a7P = function(eg) {
		var pc = eg.toUTCString();
		return pc.length < 12 ? pc : function(eg) {
			return a7L[eg.getUTCDay()]
		}(eg) + ", " + pc.substring(5, pc.length - 4)
	}
}

function a6S() {
	var a7R = null,
		a7a = (this.a3H = 0, this.zw = function() {
			var g8 = bm.buffer.data[5].value;
			a7R = "px " + g8, "system-ui" !== g8 && (a7R += ", system-ui"), this.a3H = ic(32, 32, ["a", "b", "m"], 200, a7R)
		}, this.a0f = function(j, k) {
			var eq = document.createElement("canvas");
			return eq.width = j, eq.height = k, eq
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(p4, j, k) {
			return p4.getImageData(0, 0, j, k)
		}, this.tF = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7R : 1 === type ? "bold " + size + a7R : 2 === type ? "lighter " + size + a7R : 3 === type ? "italic " + size + a7R : 4 === type ? "oblique " + size + a7R : 5 === type ?
				"small-caps " + size + a7R : "small-caps bold " + size + a7R
		}, this.textAlign = function(il, id) {
			il.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(il, id) {
			il.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tH = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.tn(bf.v9) + " solid " + (color || bE.qT);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.vv = function(e, fn, fp, j, k) {
			e = e.style;
			e.left = this.vw(fn), e.top = this.vw(fp), e.width = this.vw(j), e.height = this.vw(k)
		}, this.tg = function(g8) {
			return 1 + g8 * a1.a2.it()
		}, this.tD = function(oH, hF) {
			return oH * this.tg(void 0 === hF ? .5 : hF) * i.iu / i.l
		}, this.vu = function(oH, hF) {
			return oH * this.tg(void 0 === hF ? .5 : hF) * i.iu
		}, this.vb = function(oH, hF, a7S) {
			return this.tg(hF) * Math.min(oH * i.iu, a7S * i.j) / i.l
		}, this.tn = function(g8) {
			return g8.toFixed(1) + "px"
		}, this.vw = function(g8) {
			return this.yK(g8).toFixed(1) + "px"
		}, this.yK = function(g8) {
			return g8 / i.l
		}, this.a7U = function(a7V) {
			for (var pc = "<ul>", fg = a7V.length, aC = 0; aC < fg; aC++) pc += "<li>" + a7V[aC][0] + ": <a href='" + a7V[aC][1] + "' target='_blank'>" + a7V[aC][0] + "</a></li>";
			return pc += "</ul>"
		}, this.a7W = function(a7X) {
			return "<a href='" + a7X + "' target='_blank'>" + a7X + "</a>"
		}, this.a7Y = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.yW = function(e) {
			var eh = e.textContent;
			bD.pg.a7Z(eh, "✔") || (1 === eh.length ? e.textContent = "✔" : e.textContent = eh + " ✔", setTimeout(function() {
				e.textContent = eh
			}, 500))
		}, this.measureText = function(pc) {
			return ys.measureText(pc).width
		}, this.vl = function(ot) {
			ot.style.overflowX = "auto", ot.style.overflowY = "hidden", ot.style.whiteSpace = "nowrap", ot.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.vy = this.scrollLeft, e.preventDefault())
			}), ot.addEventListener("scroll", function() {
				this.vy = this.scrollLeft
			})
		}, -1e4);

	function a7e(a7c) {
		performance.now() - a7a < 600 || (a7a = performance.now(), a7c())
	}
	this.wa = function(e, a7b, a7c) {
		a7b && (e.onclick = function() {
			performance.now() - a7a < 600 || a7b()
		}), e.addEventListener("contextmenu", function(a7d) {
			a7d.preventDefault(), a7e(a7c)
		}), e.addEventListener("touchstart", function(a7d) {
			2 === a7d.touches.length && (a7d.preventDefault(), a7e(a7c))
		}, {
			passive: !1
		})
	}
}

function a6U() {
	this.hs = function(a5J) {
		return 0 === a5J ? 1 === aE.a4E && aE.i5 : 1 === a5J ? 1 === aE.a4E && !aE.i5 : 2 === aE.a4E
	}, this.ht = function(player) {
		return 0 !== ah.ne[player] && 2 !== ah.a7f[player]
	}, this.a7g = function(player) {
		return player === aE.fQ && 2 !== ah.a7f[player]
	}, this.lg = function(player, kB) {
		return player !== kB && (0 === bj.fe[player] || bj.fe[player] !== bj.fe[kB])
	}, this.mn = function() {
		return am.lY < 2 ? 0 : aE.ib ? 1 < bk.a7h() : ah.hU[md[1]]
	}, this.a7i = function() {
		var lY = am.lY;
		if (0 !== lY) {
			if (!aE.ib) return !this.kP(md[0]);
			for (var fe = bj.fe, la = bk.lb(), ld = am.ld, aC = lY - 1; 0 <= aC; aC--) {
				var hE = ld[aC];
				if (fe[hE] === la && !this.kP(hE)) return 1
			}
		}
		return 0
	}, this.a7j = function(player) {
		return player === aE.fQ
	}, this.a7k = function(kB, oH) {
		return ah.hi[aE.fQ] < oH * ah.hi[kB]
	}, this.kP = function(player) {
		return player >= aE.l2 || 2 === ah.a7f[player]
	}, this.m0 = function(player) {
		return 0 !== ah.ne[player]
	}, this.a44 = function(player) {
		return player < aE.l2
	}, this.sr = function(a7l, a7m) {
		return a7l !== a7m
	}, this.h5 = function(player, g8) {
		var min;
		return g8 = this.a7n(player, g8), ah.hi[player] += g8, ah.a7o[player] && (min = Math.min(ah.a7o[player], ah.hi[player]), ah.a7o[player] -= min, ah.hi[player] -= min), g8
	}, this.a7n = function(player, g8) {
		var a7p = ah.hi[player];
		return g8 = Math.min(g8, ah.hU[player] * aE.a7q - a7p), g8 = Math.min(g8, aE.a7r - a7p), Math.max(g8, 0)
	}, this.nA = function(player, jK, a7s, a7t) {
		var a7p = ah.hi[player],
			jK = bO.g7(a7p * (jK + 1), 1024),
			a7s = bO.g7(a7s * a7p, 1024),
			jK = Math.min(jK, a7p - a7s);
		return jK = b5.a7v(player, jK), bR.gD[0] = jK, bR.gD[1] = a7s, a7t <= jK
	}, this.sL = function(player, s3, s2) {
		var player = ah.hi[player],
			a7u = bO.g7(64 * player, 1024);
		return s3 = Math.min(s3, player - a7u), s3 = this.a7n(s2, s3), bR.gD[0] = s3, bR.gD[1] = a7u, 1 <= s3
	}, this.a7w = function(player, s3, s2) {
		var player = ah.hi[player],
			a7u = bO.g7(64 * player, 1024);
		return s3 = Math.min(s3, player - a7u), this.a7n(s2, s3)
	}, this.sN = function(s3, s2) {
		return s3 = this.a7n(s2, s3), bR.gD[0] = s3, bR.gD[1] = 0, 1 <= s3
	}, this.jJ = function(player, a7x) {
		return bO.g7(ah.hi[player] * (a7x + 1), 1024)
	}, this.a7y = function(player, a7s) {
		a7s = bO.g7(a7s * ah.hi[player], 1024);
		bR.gD[1] = a7s, ah.hi[player] -= a7s
	}, this.h3 = function(player, a7z) {
		var gR, gT, g0 = ah.hi[player];
		return a7z <= g0 ? ah.hi[player] -= a7z : (ah.hi[player] = 0, gT = ah.a7o[player] + (gR = 5 * ((g0 = a7z - g0) >> 2)), bg.h6(player, gR - g0, 12), gT <= aE.a80 ? ah.a7o[player] = gT : (ah.a7o[player] = aE.a80, bg.h6(player, gT - aE.a80,
			18))), a7z
	}, this.mE = function(player, jK) {
		var hi = ah.hi,
			a7p = hi[player],
			jK = bO.g7(a7p * (jK + 1), 1024),
			a7u = Math.max(bO.g7(a7p, 10), 1e3);
		return (jK = Math.min(jK, a7p - a7u)) < 0 ? (hi[player] = 0, a7u = Math.min(1e3, a7p + aE.a80 - ah.a7o[player]), bR.gD[1] = a7u, ah.a7o[player] += a7u - a7p, 0) : (bR.gD[1] = a7u, jK = b5.a7v(player, jK), hi[player] -= a7u + jK, b5.a81(
			player, jK), jK)
	}, this.nC = function(player) {
		var iQ = bR.gD[0];
		ah.hi[player] -= iQ + bR.gD[1], b5.a81(player, iQ)
	}, this.ss = function(player, kB) {
		return (kB = Math.min(kB, aE.fd)) < aE.fd && 0 === ah.ne[kB] && (kB = aE.fd), (bR.fc[0] = kB) === aE.fd || bw.fZ(player, kB)
	}, this.sv = function(player, s2) {
		return 0 !== ah.ne[s2] && !bw.fZ(player, s2)
	}, this.a82 = function(player, a83) {
		for (var hE, fg = am.lY, a84 = 0, a85 = md, aC = 0; aC < fg; aC++)
			if (hE = a85[aC], !this.kP(hE)) {
				if (player === hE) return !0;
				if (++a84 > a83) return !1
			} return !1
	}, this.mZ = function(hE) {
		var a86 = aE.ib ? bk.lZ() : ah.hU[md[0]];
		return a86 >= bO.g7(hE * aE.km, 100)
	}, this.a87 = function(g8, min, max) {
		return Math.floor(bO.is(isNaN(g8) ? 0 : Number(g8), min, max))
	}
}

function a6X() {
	this.a88 = function(canvas, a89, a8A) {
		var j = canvas.width,
			k = canvas.height,
			eq = bD.tC.a0f(j, k),
			il = bD.tC.getContext(eq, !0),
			canvas = (il.drawImage(canvas, 0, 0), il.getImageData(0, 0, j, k));
		return a89(canvas.data, j, k, a8A), il.putImageData(canvas, 0, 0), eq
	}, this.a8B = function(a0q, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0q[3 + aC] = a0q[aC], a0q[aC] = a0q[1 + aC] = a0q[2 + aC] = 255
			}
	}, this.a8C = function(a0q, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0q[1 + aC] > a0q[2 + aC] + 10 && (a0q[3 + aC] = a0q[aC], a0q[1 + aC] = a0q[2 + aC])
			}
	}, this.a8D = function(a0q, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var fz, g8, aC = 4 * (fn + fp * j);
				a0q[1 + aC] > a0q[2 + aC] + 10 && (g8 = 0 < (fz = 255 - a0q[1 + aC] + a0q[2 + aC]) ? Math.min(255, Math.round(255 * a0q[2 + aC] / fz)) : 0, a0q[aC] = a0q[1 + aC] = a0q[2 + aC] = g8, a0q[3 + aC] = fz)
			}
	}, this.a8E = function(a0q, j, k, a8A) {
		for (var gap = Math.floor(Math.min(j, k) * a8A), fn = 0; fn < j; fn++)
			for (var aC, fp = 0; fp < k; fp++)(fn < gap || fp < gap || j - gap <= fn || k - gap <= fp) && (a0q[3 + (aC = 4 * (fn + fp * j))] = 255 - 255 * (a0q[1 + aC] - a0q[aC]) / (255 - a0q[aC]))
	}, this.a8F = function(a0q, j, k, a8A) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0q[aC] = a8A[0], a0q[1 + aC] = a8A[1], a0q[2 + aC] = a8A[2]
			}
	}, this.a8G = function(a0q, j, k, a8A) {
		for (var gap = Math.floor(j * a8A), fn = 0; fn < j; fn++)
			for (var aC, fp = 0; fp < k; fp++)(fn < gap || fp < gap || j - gap <= fn || k - gap <= fp) && (a0q[aC = 4 * (fn + fp * j)] = a0q[1 + aC] = a0q[2 + aC] = 0)
	}, this.a8H = function(a0q, j, k) {
		for (var fp, aC, fn = j - 1; 0 <= fn; fn--)
			for (fp = k - 1; 0 <= fp; fp--) 200 < a0q[1 + (aC = 4 * (fn + fp * j))] && a0q[1 + aC] - 20 > a0q[aC] && a0q[1 + aC] - 20 > a0q[2 + aC] ? a0q[aC] + a0q[2 + aC] < 40 ? a0q[3 + aC] = 0 : (a0q[3 + aC] = a0q[aC], a0q[aC] = 255, a0q[1 +
				aC] = 255, a0q[2 + aC] = 255) : a0q[aC] < 50 && a0q[1 + aC] < 50 && a0q[2 + aC] < 50 && (a0q[aC] + a0q[1 + aC] + a0q[2 + aC] < 50 ? a0q[3 + aC] = 180 : a0q[3 + aC] = 180 + Math.floor(75 * (a0q[aC] + a0q[1 + aC] + a0q[2 + aC] -
				50) / 100))
	}, this.a8I = function(a0q, j, k) {
		for (var fp, aC, fn = j - 1; 0 <= fn; fn--)
			for (fp = k - 1; 0 <= fp; fp--) a0q[1 + (aC = 4 * (fn + fp * j))] > a0q[aC] + 20 && a0q[1 + aC] > a0q[2 + aC] + 20 && a0q[aC] + a0q[2] < 40 && (a0q[3 + aC] = 255 - a0q[1 + aC], a0q[aC] = a0q[1 + aC] = a0q[2 + aC] = a0q[aC])
	}, this.a79 = function(a0q, j, k, a8A) {
		for (var eO = j >> 1, fn = 0; fn < j; fn++)
			for (var fp = 0; fp < k; fp++) Math.sqrt((fn - eO) * (fn - eO) + (fp - eO) * (fp - eO)) > a8A * eO && (a0q[4 * (fn + fp * j) + 3] = 0)
	}
}

function a6V() {
	var a8J = {
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
		a8K = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ua = function(es) {
		return es.replace(a8K, function(match) {
			return a8J[match] || match
		})
	}, this.a3X = function(g8) {
		var aC, a8L, a8M, a8N, a8O;
		if (g8 < 0) return "-" + this.a3X(Math.abs(g8));
		if (g8 < 1e3) return g8.toString();
		for (a8L = Math.floor(Math.log(g8 + .5) / Math.log(10)) + 1, a8M = Math.floor((a8L - 1) / 3), a8O = (a8N = g8.toString()).substring(a8L - 3, a8L), aC = 1; aC < a8M; aC++) a8O = a8N.substring(a8L - 3 * (aC + 1), a8L - 3 * aC) + " " + a8O;
		return a8N.substring(0, a8L - 3 * a8M) + " " + a8O
	}, this.a8P = function(hE, a8L) {
		return hE.toFixed(a8L) + "%"
	}, this.a8Q = function(g8, a8R) {
		return g8.toFixed(bO.is(Math.floor((void 0 === a8R ? 3 : a8R) - Math.log10(Math.max(g8, 1))), 0, 8))
	}, this.a8S = function(g8, oH, a8L) {
		return (g8 * oH).toFixed(a8L)
	}, this.pu = function(username) {
		var fk, fV = username.indexOf("[");
		return !(fV < 0) && 1 < (fk = username.indexOf("]")) - fV && fk - fV <= 8 ? username.substring(fV + 1, fk).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.pu;
	this.a8T = function(pc) {
		for (var fz = Math.floor(.5 * pc.length + .5), oN = Math.floor(.5 * (fz - 1)), aC = 0; aC < oN; aC++)
			for (var g0 = -1; g0 < 2; g0 += 2) {
				var eq = fz + g0 * aC;
				if (" " === pc[eq]) return [this.a4w(pc.substring(0, eq)), this.a8U(pc.substring(eq))]
			}
		return [pc.substring(0, fz), pc.substring(fz)]
	}, this.a8U = function(pc) {
		for (var fg = pc.length, aC = 0; aC < fg; aC++)
			if (" " !== pc[aC]) return pc.substring(aC);
		return pc
	}, this.a4w = function(pc) {
		for (var aC = pc.length - 1; 0 <= aC; aC--)
			if (" " !== pc[aC]) return pc.substring(0, aC + 1);
		return pc
	}, this.a8V = function(pc, a8W) {
		return pc.split("(")[0] + "(🧈 " + a8W.toFixed(2) + ")"
	}, this.startsWith = function(pc, a8X) {
		return pc.substring(0, a8X.length) === a8X
	}, this.a7Z = function(pc, a8X) {
		var fg = pc.length;
		return pc.substring(fg - a8X.length, fg) === a8X
	}, this.a8Y = function(h, a8Z, a8a) {
		var pc = "",
			fg = h.length - 1;
		a8a = a8a || "";
		for (var aC = 0; aC < fg; aC++) pc += a8a + h[aC] + a8a + ",", (aC + 1) % a8Z == 0 && (pc += "\n");
		return pc += a8a + h[fg] + a8a
	}, this.a8b = function(pc, a3M, a3N) {
		return pc.replace(new RegExp(a3M, "g"), a3N)
	}
}

function a8c() {
	this.ep = function(player, fS) {
		aJ.a2A(player, bP.fo(fS), bP.fq(fS)) && (bi.dy = !0), aE.lM && this.el()
	}, this.el = function() {
		aE.i5 = !1;
		for (var aC = 0; aC < aE.l2; aC++) 0 !== ah.ne[aC] && 0 === ah.hU[aC] && aJ.a2H(aC);
		0 !== ah.ne[aE.fQ] ? (bg.na[7] = ah.hU[aE.fQ], bg.na[8] = ah.hi[aE.fQ], aS.a8d(), aX.a8e(), aE.hp || aE.hq || aI.nz(ah.ja[aE.fQ] - 5, ah.jc[aE.fQ] - 5, ah.jb[aE.fQ] + 5, ah.jd[aE.fQ] + 5), aw.dr()) : aY.show(!1, !1, !1, !0), aO.a8f(18),
			ag.a8g(), ag.nQ(!0), bS.z.a8h(), aM.ub(), aE.sq = null, be.a8i = !0, be.a8j(), aE.lM && a1.a2.setState(1)
	}
}

function c8() {
	this.fd = 512, this.a7r = 15e8, this.a8k = 1e9, this.a80 = 5e4, this.a8l = 512, this.h0 = 2, this.fQ = 0, this.l2 = 0, this.a4H = 0, this.lO = 0, this.a4G = 0, this.a1L = 512, this.a1Q = 512, this.a7q = 150, this.lM = !0, this.hp = 0, this.hq =
		0, this.a4E = 0, this.km = 0, this.o8 = !1, this.i5 = 0, this.a8m = 0, this.ib = !1, this.a1S = 0, this.a1T = 0, this.lK = 0, this.a2h = 0, this.sq = null, this.a4Y = new a2V, this.a8n = 30, this.a4B = 0, this.a4J = 0, this.a4X = 0, this
		.a46 = 0, this.data = new a8o, this.a8p = new a8q, this.a8r = 0, this.a8s = "", this.a4h = -1, this.a8t = function() {
			this.a4h = -1, bX.turnstile.close(), bR.dr(), bU.dr(), bu.clear(), this.a4H = this.l2 = this.data.humanCount, this.lM = 1 === this.a4H && !__fx.customLobby.isActive(), this.o8 = !1, this.hp = this.data.isReplay, this.hq = this.data.a8u,
				this.lK = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2h = this.data.isContest, this.ib = this.lK < 7 || 9 === this.lK, this.lK = 10 === this.lK &&
				this.lM ? 7 : this.lK, this.lK = 8 === this.lK && 2 !== this.l2 ? 7 : this.lK, b0.dr(), this.a1S = this.data.numberTeams, this.data.teamPlayerCount ? this.a1T = +(0 < this.data.teamPlayerCount[0]) : (this.a1T = 0, this.ib && this
					.lM && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1S + 1), aE.a8p.a8v())), this.a8n = this.l2 <= 2 ? 30 : this.l2 <= 50 ? 40 : 50, this.a8m = this.i5 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.sq = this.i5 ? new a8c : null, this.a1L = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l2) : 1 === m.e2 ? this.a1L = this.l2 : this.a1L = this.data.playerCount,
				this.a1Q = this.a1L, this.lO = this.a1L - this.l2, this.a4G = 0, this.fQ = this.data.selectedPlayer, this.a4B = 0, this.a4J = 0, this.a4X = 0, this.a46 = 0, az.a8w(this.data.spawningSeed), af.dr(), ah.dr(), ao.dr(), aj.a8x(), bB.rt
				.se = [], bB.i7.rw = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dr(), this.a4E = 1, bg.dr(), a8y(), ad.ds(), aq.a8z(), be.dr(), ad.dr(), au.dr(),
				bP.dr(), bQ.dr(), ap.dr(), bY.a90(), aF.dr(), aj.a8(), aJ.dr(), aK.dr(), am.a91(), bC.dr(), bk.dr(), bS.dr(), bh.dr(), a92.putImageData(a93, 0, 0), aW.dr(), aT.dr(), aS.dr(), bF.dr(), ax.dr(), aV.dr(), aX.dr(), aN.dr(), aR.dr(), aO
				.dr(), aQ.dr(), aM.dr(), aY.dr(), aG.dr(), aH.dr(), gj(), ae.dr(), ag.dr(), b5.dr(), b6.dr(), b2.dr(), b8.dr(), b9.dr(), this.a4Y.dr(), bi.a90(), aI.ny(), 0 === ah.ne[aE.fQ] && aY.show(!1, !0), ag.nQ(!0), aw.dr(), bi.dy = !0, this
				.hp || this.lM && this.i5 || a1.a2.setState(1), this.a8r = 0
		}, this.a5d = function(ef) {
			bC.so.a95.length ? this.a8s = bC.so.a95 : this.a8s = bC.a96.a3i(), __fx.replayHistory.save(this.a8s), !1 === __fx.customLobby.isActive() && b1.z.a97(), bu.clear(), this.a4E = 0, bi.a98(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eX.show(ef), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8r ? u.z.a99(0) : 1 === this.a8r ? u.v(19) : u.v(5, 5)
		}, this.a9A = function() {
			return this.hp ? aN.hr || !bF.a9B : this.lM && (aN.hr || this.i5)
		}, this.a9C = function() {
			return 1 === this.a4E && !this.i5
		}
}

function a8o() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8u = 0, this.a9D = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a9E = null
}

function a8q() {
	this.a8v = function() {
		var a9F = aE.data;
		bD.tm.a6y(a9F.teamPlayerCount, a9F.playerCount), a9F.numberTeams = bD.tm.a6p(a9F.teamPlayerCount, 0), a9F.teamPlayerCount[0] && a9F.teamPlayerCount[7] && (a9F.teamPlayerCount[7] = 0, this.a8v())
	}, this.a9G = function() {
		var a9F = aE.data;
		a9F.mapType < 2 ? bV.a8(bV.a9H(a9F), a9F.mapSeed) : bV.a9I(a9F.canvas)
	}, this.a9J = function() {
		var a9F = aE.data;
		a9F.colorsData || (a9F.colorsData = new Uint32Array(1)), 0 === a9F.gameMode && (a9F.colorsData[0] = bm.z.zu()), a9F.selectableName && (a9F.playerNamesData || (a9F.playerNamesData = new Array(1)), a9F.playerNamesData[0] = bm.buffer.data[
			122].value), a9F.a9E = new Uint32Array(1), a9F.a9E[0] = bJ.f7.f8(bm.buffer.data[105].value, 5)
	}, this.a9K = function() {
		aE.data = new a8o
	}
}

function dj() {
	var a9L = [];
	this.sO = function(player, s2, a9M, a9N) {
		player === aE.fQ || s2 === aE.fQ || !a9N && bD.h2.kP(player) || bD.h2.kP(s2) || this.a2i(ah.a2j[player] + " supported " + ah.a2j[s2] + " with " + bD.pg.a3X(a9M) + " ressource" + (1 === a9M ? "." : "s."))
	}, this.a2i = function(pc, sD) {
		pc = {
			eg: aX.a9P(),
			pc: pc,
			sD: sD
		};
		a9L.push(pc), 30 === u.vX && u.a5T().a2i(pc)
	}, this.clear = function() {
		a9L = [];
		var vt = u.a9Q(30);
		vt && vt.clear()
	}, this.a9R = function() {
		return a9L
	}
}

function dc() {
	this.a3E = 0, this.gap = 0, this.v9 = 0, this.tk = 0, this.dr = function() {
		this.resize()
	}, this.resize = function() {
		this.a3E = .0022 * bD.tC.tg(.5) * i.iu, this.v9 = this.a3E / i.l, this.gap = Math.max(Math.floor((a1.a2.it() ? .0114 : .01296) * i.iu), 2), this.tk = this.gap / i.l
	}
}

function db() {
	this.a9S = function() {
		return a1.a2.it() ? 2 : 1
	}
}

function cJ() {
	var p8, fn, fp, a9T, a9U, a9V, eg, a9W, a9X, a9Y, a9Z, gap, zoom, sX, a9a;

	function a9o(mH, mI, fK) {
		ad.fb(fK) || -1 === (mH = bQ.lr.a9x(mH, mI)) ? aO.a9w(fK) : aO.a9y(mH)
	}

	function a9k(a9W) {
		for (var aC = sX.length - 1; 0 <= aC; aC--)
			if (sX[aC] === a9W) return 1
	}

	function a9i(a9f) {
		var aC, fg;
		if (-1 !== a9f)
			for (fg = p8.length, aC = 0; aC < fg; aC++)
				if (p8[aC].iT && p8[aC].fn + 1 === a9f % 4 && p8[aC].fp + 1 === a9f >> 2) return aC;
		return -1
	}

	function a9g(mH, mI) {
		var vt = gap / 2;
		return mH < fn - a9T - 3 * vt || fn + 3 * a9T + 5 * vt < mH || mI < fp - a9T - 3 * vt || fp + 2 * a9T + 3 * vt < mI ? -1 : 4 * (mI < fp - vt ? 0 : mI < fp + a9T + vt ? 1 : 2) + (mH < fn - vt ? 0 : mH < fn + a9T + vt ? 1 : mH < fn + 2 * a9T +
			3 * vt ? 2 : 3)
	}
	this.a9b = function() {
		var aC, g0, a9e = [bE.qt, bE.r9, bE.qR, bE.ra, bE.rM];
		for (p8 = new Array(10), aC = 0; aC < 10; aC++) p8[aC] = {
			id: aC,
			iT: !1,
			lz: 0,
			canvas: [],
			fn: 0,
			fp: 0
		};
		for (p8[0].colors = [0, 1, 2, 3], p8[0].fn = 0, p8[0].fp = 0, p8[1].colors = [1, 4], p8[1].fn = 1, p8[1].fp = 0, p8[2].colors = [0, 1], p8[2].fn = -1, p8[2].fp = 0, p8[3].colors = [0], p8[3].fn = 0, p8[3].fp = 0, p8[4].colors = [0, 2],
			p8[4].fn = 1, p8[4].fp = 1, p8[5].colors = [3], p8[5].fn = 0, p8[5].fp = -1, p8[6].id = 20, p8[6].colors = [0], p8[6].fn = 1, p8[6].fp = -1, p8[7].id = 21, p8[7].colors = [0], p8[7].fn = 0, p8[7].fp = 1, p8[8].id = 16, p8[8]
			.colors = [0], p8[8].fn = 0, p8[8].fp = 0, p8[9].id = 10, p8[9].colors = [4], p8[9].fn = 2, p8[9].fp = 0, aC = 0; aC < 10; aC++)
			for (g0 = 0; g0 < p8[aC].colors.length; g0++) p8[aC].canvas.push(function(id, a74) {
				if (id < 20) return bD.canvas.a30(ac.get(3), id, a74);
				var a74 = ac.get(3).height,
					a75 = bD.tC.a0f(a74, a74),
					il = bD.tC.getContext(a75);
				20 === id ? il.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a0q.a3F(ak.qB.a34 + ak.qB.a3L, il, 0, 0, a74);
				return a75
			}(p8[aC].id, a9e[p8[aC].colors[g0]]))
	}, this.a9d = function() {
		return p8
	}, this.dr = function() {
		sX = [], fn = fp = eg = 0, a9U = a9V = -1e3, this.resize()
	}, this.resize = function() {
		a9T = Math.floor((a1.a2.it() ? .075 : .0468) * i.iu), zoom = a9T / ac.get(3).height, gap = Math.floor(a9T / 3)
	}, this.a66 = function(mH, mI) {
		return !!this.iT() && (bi.dy = !0, !!ak.a0q.hu(mH, mI, a9X) || (mH = function(mH, mI) {
			a9V = a9U = -1e3;
			var a9h = a9i(a9g(mH, mI));
			if (-1 === a9h) return 0;
			if (1 !== p8[a9h].colors[p8[a9h].lz])
				if (5 === a9h) {
					if (! function() {
							var eh = performance.now();
							a9a + 4e3 < eh && (sX = []);
							a9a = eh
						}(), a9k(a9W)) return 1;
					sX.push(a9W), 16 < sX.length && sX.shift()
				} else if (6 === a9h) {
				for (var aC = sX.length - 1; 0 <= aC; aC--) 0 === ah.ne[sX[aC]] && sX.splice(aC, 1);
				0 < sX.length && (b6.a9l(1, sX, !0) && bB.h2.sW(sX, a9W), sX = [])
			} else if (2 === a9h) ao.iL(a9W) && bB.i7.s1(aS.iB(), a9W);
			else if (3 === a9h) aE.i5 && bB.i7.i8(a9Y);
			else if (0 === a9h)
				if (0 === p8[0].lz) {
					if (aE.a8m && aX.a9P() < 350) return 1;
					bY.a9m(4), bB.i7.iE(aS.iB(), a9W)
				} else b2.iF(a9W, aS.iB());
			else if (1 === a9h) bB.i7.iJ(aS.iB(), a9Y);
			else if (9 === a9h) bB.i7.iM(aS.iB());
			else {
				if (7 === a9h) return bY.a9m(0), ak.a0q.show(mH, mI), 2;
				if (4 === a9h) b6.a9l(0, [a9W], !0) && bB.h2.sT(a9W);
				else {
					if (8 !== a9h) return 0;
					bB.i7.iA(aS.iB(), a9Z, a9W)
				}
			}
			return 1
		}(mH, mI), this.ub(), 2 === mH && (ak.a0q.iT = !0), 0 < mH))
	}, this.a68 = function(mH, mI) {
		this.iT() || (a9U = mH, a9V = mI, eg = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hx(mouseX),
			coordY = bP.hz(mouseY),
			point = bP.fW(bP.g3(coordX, coordY));
		bP.i0(coordX, coordY) && a9o(mouseX, mouseY, point)
	}, this.click = function(mH, mI, a6F) {
		var hw = bP.hx(mH),
			hy = bP.hz(mI),
			fS = bP.g3(hw, hy),
			fK = bP.fW(fS),
			a9n = (a1.a2.it() ? .025 : .0144) * i.iu,
			eh = performance.now();
		return !(Math.abs(mH - a9U) > a9n || Math.abs(mI - a9V) > a9n || eg + 500 < eh || (eg = eh, bM.u5() && (bM.hl = mH, bM.hm = mI, b8.el(1), b9.el(1)), !bP.i0(hw, hy))) && (a6F ? (a9o(mH, mI, fK), !1) : aN.hr || this.iT() || !bD.h2.ht(aE
			.fQ) || aE.hp || aE.hq ? (this.ub(), !1) : (aE.i5 ? 0 <= (a9Y = bv.i6(fS)) && (p8[3].iT = !0) : 2 === aE.a4E ? ad.hG(fK) && (a9W = ad.fY(fK), bD.h2.kP(a9W) || (p8[0].iT = !0, p8[0].lz = 1, p8[7].iT = !0)) : (bQ.iK.iL(aE.fQ, fS) &&
				(p8[0].iT = !0, p8[0].lz = 1, p8[1].iT = !0, p8[1].lz = 0, p8[9].iT = !0, p8[9].lz = 0), bQ.iH.iI(aE.fQ, fS) && (p8[0].iT = !0, p8[0].lz = 1, p8[1].iT = !0, p8[1].lz = 1, a9Y = bR.gI[7]), ad.fl(fK) ? (a9Z = an.fH.fJ(
				fK)) && (a9n = bP.fW(a9Z), p8[8].iT = !0, a9W = ad.fX(a9n) ? aE.fd : ad.fY(a9n)) : (ad.a2F(aE.fQ, fK) && (a9X = aE.fQ, p8[0].iT = !0, p8[0].lz = 1, p8[7].iT = !0), -1 !== (eh = bv.iC(fS)) && (ad.fX(eh << 2) ? (a9W = aE.fd,
					bw.iD(aE.fQ) ? (p8[0].iT = !0, p8[0].lz = 0) : ae.gn(aE.fQ) && (p8[0].iT = !0, p8[0].lz = 3)) : (a9W = ad.fY(eh << 2), p8[0].lz = 1, p8[5].iT = function(a9W) {
					return !bD.h2.kP(a9W) && !a9k(a9W) && b6.a9l(1, [a9W], !1)
				}(a9W), p8[7].iT || bD.h2.kP(a9W) || (a9X = a9W, p8[7].iT = !0), p8[4].iT = !bD.h2.kP(a9W) && !ag.a9s(a9W) && b6.a9l(0, [a9W], !1), p8[6].iT = function(a9W) {
					if (0 === sX.length) return !1;
					if (performance.now() > a9a + 4e3) return !(sX = []);
					return !a9k(a9W) && ! function(a9W) {
						var aC;
						if (aE.ib)
							for (aC = sX.length - 1; 0 <= aC; aC--)
								if (!bw.fZ(a9W, sX[aC])) return 1;
						return
					}(a9W)
				}(a9W), bw.fZ(a9W, aE.fQ) ? (bw.iG(aE.fQ, a9W) ? (p8[0].lz = 0, p8[0].iT = !0) : ae.gn(aE.fQ) && (p8[0].lz = 3, p8[0].iT = !0), p8[0].iT = this.a9u()) : (p8[2].iT = !0, ao.iL(a9W) ? p8[2].lz = 0 : p8[2].lz = 1,
					p8[0].iT = !0))))), this.a9p(mH, mI)))
	}, this.a9p = function(mH, mI) {
		return fn = mH - Math.floor(a9T / 2), fp = mI - Math.floor(a9T / 2), !!this.iT()
	}, this.a5m = function(mH, mI) {
		return !!this.iT() && (ak.a0q.iT ? !ak.a0q.a3D(mH, mI) && (ak.a0q.iT = !1, bi.dy = !0) : function(uu, mH, mI) {
			mH = a9g(mH, mI);
			if (0 <= a9i(mH)) return !1;
			if ((1 === mH || 6 === mH) && 0 <= a9i(2)) return !1;
			if ((6 === mH || 9 === mH) && 0 <= a9i(10)) return !1;
			return uu.ub(), bi.dy = !0
		}(this, mH, mI))
	}, this.ub = function() {
		for (var aC = p8.length - 1; 0 <= aC; aC--) p8[aC].iT = !1, p8[aC].lz = 0;
		ak.a0q.iT = !1
	}, this.iT = function() {
		return this.a9u() || ak.a0q.iT
	}, this.a9u = function() {
		for (var fg = p8.length, aC = 0; aC < fg; aC++)
			if (p8[aC].iT) return !0;
		return !1
	}, this.yr = function() {
		if (this.iT())
			if (ak.a0q.iT) ak.a0q.yr();
			else {
				var aC, il = ys,
					g0 = p8,
					fg = g0.length,
					aA2 = (a9T + gap) / zoom;
				for (il.imageSmoothingEnabled = !0, il.setTransform(zoom, 0, 0, zoom, fn, fp), aC = 0; aC < fg; aC++) g0[aC].iT && ys.drawImage(g0[aC].canvas[g0[aC].lz], g0[aC].fn * aA2, g0[aC].fp * aA2);
				il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cK() {
	var k, canvas, aA3, aA4, aA5, aA6 = -1;

	function aA7() {
		var aA8, p4 = canvas.getContext("2d", {
			alpha: !0
		});
		p4.clearRect(0, 0, k, k), p4.fillStyle = bE.qP, p4.fillRect(0, 0, k, k), 9 === aA4 && (p4.fillStyle = bE.qU, p4.fillRect(0, 0, k, k)), p4.fillStyle = bE.qT, __fx.utils.smoothFrame(p4, k, k) || (p4.fillRect(0, 0, k, 1), p4.fillRect(0, 0, 1,
			k), p4.fillRect(0, k - 1, k, 1), p4.fillRect(k - 1, 0, 1, k)), aA8 = .9 * k / ac.get(0).width, p4.imageSmoothingEnabled = !0, p4.setTransform(aA8, 0, 0, aA8, Math.floor((k - aA8 * ac.get(0).width) / 2), Math.floor((k - aA8 * ac.get(0)
			.height) / 2)), p4.drawImage(ac.get(0), 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAB(mH, mI) {
		if (!aN.hr) return mH <= k + bf.gap && mI >= aS.fp ? 9 : -1;
		if (mH <= 4 * k + bf.gap) {
			if (mI >= aS.fp) return 0;
			if (mI >= aS.fp - k - aA5 * bf.gap) return 2
		} else if (mH <= 7 * k + bf.gap && mI >= aS.fp - k - aA5 * bf.gap) return 1;
		return -1
	}
	this.hr = !1, this.dr = function() {
		aA4 = -1, this.hr = !1, aA5 = a1.a2.it() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, aA3 = bD.tC.tF(1, (a1.a2.it() ? .5 : .45) * k), aA7()
	}, this.aA9 = function() {
		return !(1 !== aE.a4E || aE.i5 || (aE.hp ? !bF.a9B : this.hr && aE.lM))
	}, this.a6N = function() {
		this.hr = !this.hr, this.hr ? (bF.a6M(!1), aE.hp && bF.a9B && bF.a6O(!0), this.aAA(), 9 === aA4 && (aA4 = 0)) : (aA4 = -1, aA7(), !aE.lM || 1 !== aE.a4E || aE.i5 || aE.hp || a1.a2.setState(1)), bi.dy = !0
	}, this.aAA = function() {
		(aE.lM || aE.hp) && 1 === aE.a4E && (aW.nQ(!0), aE.i5 || setTimeout(function() {
			be.a4Q()
		}, 0), a1.a2.setState(0))
	}, this.hu = function(mH, mI) {
		return 0 <= (aA6 = aAB(mH, mI)) || !aN.hr || aE.lM || aE.hp || bh.iT || aN.a6N(), aA6
	}, this.a5m = function(mH, mI) {
		mH = aAB(mH, mI);
		mH !== aA4 && (aA4 = mH, this.hr || aA7(), bi.dy = !0)
	}, this.a5n = function(mH, mI) {
		mH = aAB(mH, mI);
		return -1 !== mH && aA6 === mH && (this.hr ? aE.o8 ? (0 <= mH && bF.a6M(!1), !aE.hp) : (0 === mH ? aE.a5d() : 1 === mH ? this.a6N() : 2 === mH && u.v(1, 0), !0) : 9 === mH && (this.a6N(), !0))
	}, this.yr = function() {
		var j;
		this.hr ? (j = Math.floor(5.5 * k), ys.setTransform(1, 0, 0, 1, bf.gap, aS.fp), ys.fillStyle = bE.qP, ys.fillRect(0, 0, j, k), 0 === aA4 ? (ys.fillStyle = bE.qU, ys.fillRect(0, 0, 4 * k, k)) : 1 === aA4 && (ys.fillStyle = bE.qU, ys
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), ys.fillStyle = bE.qT, ys.fillRect(0, 0, j, 1), ys.fillRect(0, 0, 1, k), ys.fillRect(4 * k, 0, 1, k), ys.fillRect(0, k - 1, j, 1), ys.fillRect(j - 1, 0, 1, k), ys.font = aA3, bD.tC
			.textBaseline(ys, 1), bD.tC.textAlign(ys, 1), ys.fillText(L(47), 2 * k, .54 * k), j = .4 * k, aN.aAF(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fp + .3 * k, j), j = 1, ys.setTransform(1, 0, 0, 1, bf.gap, aS.fp - j * aA5 * bf.gap - j *
				k), ys.fillStyle = bE.qP, ys.fillRect(0, 0, 4 * k, k), aA4 === j + 1 && (ys.fillStyle = bE.qU, ys.fillRect(0, 0, 4 * k, k)), ys.fillStyle = bE.qT, ys.fillRect(0, 0, 4 * k, 1), ys.fillRect(0, 0, 1, k), ys.fillRect(4 * k, 0, 1,
				k), ys.fillRect(0, k - 1, 4 * k, 1), ys.fillText(L(0 === j ? 47 : 48), 2 * k, .54 * k), ys.setTransform(1, 0, 0, 1, 0, 0)) : ys.drawImage(canvas, bf.gap, aS.fp)
	}, this.t5 = function(player) {
		return 0 !== ah.ne[player] && 2 !== aE.a4E && !bD.h2.kP(player)
	}, this.aAF = function(fn, fp, fg) {
		ys.setTransform(1, 0, 0, 1, fn, fp), ys.lineWidth = bf.a3E, ys.strokeStyle = bE.qT, ys.beginPath(), ys.moveTo(0, 0), ys.lineTo(fg, fg), ys.moveTo(0, fg), ys.lineTo(fg, 0), ys.stroke()
	}
}

function cL() {
	var aAH, k, aAI, aAJ, aAK, aAL, aAM, aAN, aAO;

	function a2M() {
		return aS.aAh(aO.aAd()) ? ax.iT ? __fx.settings.keybindButtons ? aS.fp - 2 * aS.k - 3 * aAI : aS.fp - aS.k - 2 * aAI : __fx.settings.keybindButtons ? aS.fp - aS.k - 2 * aAI : aS.fp - aAI : bF.aAh(aO.aAg()) ? ax.iT ? bF.a2M() - aS.k - 2 *
			aAI : bF.a2M() - aAI : ax.iT ? i.k - aS.k - (bn.a9S() + 1) * aAI : i.k - bn.a9S() * bf.gap
	}

	function aAT(eh, pc, id, hE, aAX, aAY, lf, aAZ, aAa, aAb, aAm) {
		var aC, p4, a75, q9, aAn = void 0 !== aAa,
			j = Math.floor(aR.measureText(pc, aO.aA3) + 1.5 * aAJ + (aAn ? k : 1.5 * aAJ));
		if (bi.dy = !0, aAm || bu.a2i(pc, aAa), j + 2 * aAI + aS.k > i.j && !aAn && 50 !== id && 20 < pc.length) aAT(eh, (aAm = bD.pg.a8T(pc))[0], id, hE, aAX, aAY, lf, aAZ, aAa, aAb, !0), aAT(eh, aAm[1], id, hE, aAX, aAY, lf, aAZ, aAa, aAb, !0);
		else if (aAm = j + (50 === id ? aAK : 0), (a75 = document.createElement("canvas")).width = j, a75.height = k, (p4 = a75.getContext("2d", {
				alpha: !0
			})).font = aO.aA3, bD.tC.textBaseline(p4, 1), bD.tC.textAlign(p4, 0), p4.clearRect(0, 0, j, k), p4.fillStyle = aAY, p4.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p4, j, k, 0), p4.fillStyle = aAX, p4.fillText(pc, Math.floor(1.5 * aAJ),
				Math.floor(k / 2)), aAn && (p4.imageSmoothingEnabled = !0, ak.a0q.a3F(aAa, p4, j - k, 0, k)), 0 === (q9 = {
				eg: eh,
				pc: pc,
				id: id,
				player: hE,
				canvas: a75,
				aAX: aAX,
				aAY: aAY,
				j: j,
				aAe: aAm,
				lf: lf,
				aAZ: aAZ,
				aAa: aAa,
				aAb: aAb
			}).eg || 0 < aAH.length && 0 < aAH[0].eg) aAH.unshift(q9);
		else {
			for (aC = 1; aC < aAH.length; aC++)
				if (0 < aAH[aC].eg) return void aAH.splice(aC, 0, q9);
			aAH.push(q9)
		}
	}

	function aAU(eO, vt, g0) {
		return "rgb(" + eO + "," + vt + "," + g0 + ")"
	}

	function aAo(id, h9) {
		for (var fg = aAH.length, aC = 0; aC < fg; aC++) aAH[aC].id === id && h9-- <= 0 && (aAH.splice(aC, 1), aC--, fg--)
	}

	function aAp(id, player) {
		for (var fu = !1, aC = aAH.length - 1; 0 <= aC; aC--) aAH[aC].id !== id || player !== aE.fd && aAH[aC].player !== player || (aAH.splice(aC, 1), fu = !0);
		return fu
	}

	function aBB(pc) {
		aAT(340, pc, 6, 0, aAU(215, 245, 255), bE.qQ, -1, !1)
	}
	this.aAP = "", this.dr = function() {
		var self;
		aAN = 0, aAM = a1.a2.it() ? 7 : 12, aAL = {
				x0: [0, 0, 0],
				aAQ: [0, 0, 0],
				nw: [220, 180, 180],
				yq: [0, 0, 0],
				eq: [0, 0, 0]
			}, aAH = [], this.resize(), aE.i5 && this.a4S(0, 18), bV.xH.a0e[bV.fM].name.length && aBB(L(93, [bV.xH.a0e[bV.fM].name])), bV.xH.a0e[bV.fM].aBC && aBB(L(94, [bV.xH.a0e[bV.fM].aBC])), aBB(L(95, [bV.fr - 2 + "x" + (bV.fs - 2)])), aBB(L(
				96, [bD.pg.a3X(aq.aBD)])), aq.aBD !== aq.aBE && aBB(L(97, [bD.pg.a3X(aq.aBE) + " (" + bD.pg.a8P(100 * aq.aBE / aq.aBD, 1) + ")"])), 0 < aq.aBF && aBB(L(73, [bD.pg.a3X(aq.aBF) + " (" + bD.pg.a8P(100 * aq.aBF / aq.aBD, 1) + ")"])),
			0 < aq.aBG && aBB(L(98, [bD.pg.a3X(aq.aBG) + " (" + bD.pg.a8P(100 * aq.aBG / aq.aBD, 1) + ")"])), 10 === aE.lK && aAT(120, L(99), 6, 0, aAU(235, 255, 120), bE.qQ, -1, !1), 0 !== (self = this).aAP.length && (aAT(200, self.aAP, 0, 0, bE
				.qT, bE.qQ, -1, !1), self.aAP = ""), aE.a2h && aAT(340, L(49), 6, 0, aAU(255, 200, 0), bE.qQ, -1, !1), (self = aE.data.a9D) && aAT(340, 1 === self ? L(51) : L(52, [self]), 10, 0, bE.qT, bE.qQ, -1, !1)
	}, this.resize = function() {
		var aAW, aC;
		if (k = (k = Math.floor((a1.a2.it() ? .031 : .0249) * i.iu)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.aA3 = bD.tC.tF(1, this.fontSize), aAI = bf.gap, aAJ = Math.floor(k / 5), 0 < aAH.length)
			for (aAW = aAH, aAH = [], aC = aAW.length - 1; 0 <= aC; aC--) aAT(aAW[aC].eg, aAW[aC].pc, aAW[aC].id, aAW[aC].player, aAW[aC].aAX, aAW[aC].aAY, aAW[aC].lf, aAW[aC].aAZ, aAW[aC].aAa, aAW[aC].aAb, !0);
		this.aAc()
	}, this.aAc = function() {
		aAO = document.createElement("canvas");
		var pc = L(50),
			p4 = (aAK = aR.measureText(pc, this.aA3) + 5 * aAJ, aAO.height = k, aAO.width = aAK, aAO.getContext("2d", {
				alpha: !0
			}));
		p4.font = this.aA3, bD.tC.textBaseline(p4, 1), bD.tC.textAlign(p4, 1), p4.clearRect(0, 0, aAK, k), p4.fillStyle = bE.qq, p4.fillRect(0, 0, aAK, k), p4.fillStyle = bE.qT, p4.fillText(pc, Math.floor(aAK / 2), Math.floor(k / 2))
	}, this.aAd = function() {
		var fg;
		return ax.iT ? ax.j : 0 === (fg = aAH.length) ? 0 : 1 === fg ? aAH[0].aAe : aAf(aAH[0].aAe, aAH[1].aAe)
	}, this.aAg = function() {
		var fg = aAH.length;
		return ax.iT ? fg ? aAf(ax.j, aAH[0].aAe) : ax.j : 0 === fg ? 0 : 1 === fg ? aAH[0].aAe : 2 === fg ? aAf(aAH[0].aAe, aAH[1].aAe) : aAf(aAf(aAH[0].aAe, aAH[1].aAe), aAH[2].aAe)
	}, this.hu = function(fn, fp) {
		for (var o5, aAi, aAj = a2M(), aC = aAH.length - 1; 0 <= aC; aC--)
			if ((aAi = aAj - (aC + 1) * k) <= fp && fp < aAi + k) return 50 === aAH[aC].id ? fn >= i.j - aAK - aAI - aAH[aC].j && (fn >= i.j - aAK - aAI ? bB.h2.sT(aAH[aC].player) : aI.o0(aAH[aC].player, 800, !1, 0), !0) : fn >= i.j - aAH[aC].j -
				aAI && (736 === aAH[aC].id ? (aAi = "https://" + aAH[aC].pc, window.open(aAi, "_blank"), aT.oA = !1) : aAH[aC].aAZ && (aAH[aC].aAb && aAH[aC].aAb.fz ? (aAi = aAH[aC].aAb.fS, o5 = bP.fo(aAi) - 10, aAi = bP.fq(aAi) - 10, aI.nz(
					o5, aAi, 19 + o5, 19 + aAi)) : aAH[aC].aAb && aAH[aC].aAb.g0 ? aI.o1(aAH[aC].player, aAH[aC].aAb.o2) : (aI.o0(aAH[aC].player, 800, !1, 0), 0 <= aAH[aC].lf && (o5 = aAH[aC].lf, aAH[aC].lf = aAH[aC].player, aAH[aC]
					.player = o5))), !0);
		return !1
	}, this.a2i = function(eh, pc, id, hE, aAX, aAY, lf, aAZ, aAa, aAb) {
		aAT(eh, pc, id, hE, aAX, aAY, lf, aAZ, aAa, aAb)
	}, this.aAl = function(s) {
		aAT(300, s, 252, 0, bE.qT, bE.qQ, -1, !1)
	}, this.a8f = function(id) {
		for (var aC = aAH.length - 1; 0 <= aC; aC--) aAH[aC].id === id && (aAH[aC].eg = 1)
	}, this.a4S = function(player, id) {
		0 === id ? (aR.ep(player, 0), aAo(423, 2), aAT(160, L(53, [ah.a2j[player]]), 423, player, "rgb(10,220,10)", bE.qQ, -1, !1)) : 1 === id ? (aAp(50, aE.fd), aR.ep(player, 1), aAT(360, L(54, [ah.a2j[player]]), 0, player, bE.rB, bE.qQ, -1, !
				0), aI.o0(player, 2700, !1, 0)) : 2 === id ? (aR.ep(player, 2), aAT(0, L(55), 0, player, "rgb(10,255,255)", bE.qQ, -1, !0), aI.o0(player, 2700, !1, 0)) : 3 === id ? (aR.ep(player, 2), aAT(0, L(56, [ah.a2j[player]]), 0, player, bE
				.qT, bE.qQ, -1, !0), aI.o0(player, 2700, !1, 0)) : 4 === id ? this.aAq(1, player, player) : 5 === id ? bD.h2.kP(aE.fQ) || (function(id, nZ) {
				var aC, p0 = 0,
					fg = aAH.length;
				for (aC = 0; aC < fg; aC++)
					if (aAH[aC].id === id && nZ <= ++p0) return aAH.splice(aC, 1)
			}(1, 5), ag.aAs(player) && aAT(180, L(57, [ah.a2j[player]]), 1, player, aAU(255, 200, 180), bE.qQ, -1, !0), bD.h2.a7k(player, 10) && (aAo(573, 0), aAT(180, L(58, [ah.a2j[player]]), 573, player, bE.rB, bE.qQ, -1, !0))) : 18 === id ?
			aAT(255, L(59), 18, 0, bE.qT, bE.qQ, -1, !1) : 21 === id ? aAT(220, L(60), id, 0, bE.qT, bE.qQ, -1, !1) : 22 === id ? this.aAq(2, player, player) : 59 === id && aAT(0, L(61), id, 0, bE.rZ, bE.qQ, 0, !1)
	}, this.a5Y = function(s) {
		aAT(200, L(62, [s]), 94, 0, bE.qT, bE.r7, -1, !1)
	}, this.a4e = function(aAt) {
		if (aE.fQ === aAt && !aE.lM && !aE.hp)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAT(0, "Your Win Count is now " + __fx.wins.count, 3, aAt, bE.qT, bE.qQ, -1, !0);
		ah.hU[aAt] && (aR.ep(aAt, 2), aE.l2 < 100 ? aAT(0, L(56, [ah.a2j[aAt]]), 3, aAt, bE.qT, bE.qQ, -1, !0) : aAT(0, L(63, [ah.a2j[aAt]]), 3, aAt, bE.qT, bE.qQ, -1, !0))
	}, this.a9w = function(fK) {
		var pc, aAw, aAu = "(" + bP.fo(fK >> 2) + ", " + bP.fq(fK >> 2) + ")",
			aAZ = !1,
			player = 0;
		ad.fb(fK) ? ad.fX(fK) ? aAu = L(64, [aAu]) : (player = ad.fY(fK), (aE.hp || aE.hq) && !1 === __fx.hoveringTooltip.active && player !== aE.fQ && (aE.fQ = player, bg.aAv()), pc = L(65, [bD.p4.a7J(ah.a4x[player], bD.tC.tF(0, 10), 150)]) +
			"   ", pc = (pc += L(66, [bD.pg.a3X(ah.hi[player])]) + "   ") + L(67, [bD.pg.a3X(ah.hU[player])]) + "   ", aE.ib && (aAw = bj.a4b[bj.lP[bj.fe[player]]], pc += L(68) + ": " + aAw + "   "), bD.h2.kP(player) && (pc += L(69) + ": " +
				aF.lD[aF.iQ[player]] + "   "), aAu = pc = (pc += L(70, [player]) + "   ") + L(71, [aAu]), aAZ = !0) : aAu = ad.fl(fK) ? L(72, [aAu]) + "   #" + ad.fO(fK) : L(73, [aAu]), aAo(55, 0), aAT(220, aAu, 55, player, bE.qT, bE.qQ, -1,
			aAZ, void 0, void 0, !0)
	}, this.a9y = function(aAx) {
		var lx = bQ.z,
			player = lx.mw[aAx] >> 3,
			pc = (bi.dy = !0, aAo(55, 0), L(74, [ah.a2j[player]]) + "   ");
		aAT(220, pc += L(66, [bD.pg.a3X(lx.aAy[aAx])]), 55, player, bE.qT, bE.qQ, -1, !0)
	}, this.sC = function(rx, aAz, sD) {
		rx === aE.fQ ? aAT(175, " " + L(75, [ah.a2j[aAz]]) + ": ", 1001, aAz, aAU(200, 255, 210), bE.qQ, -1, !0, sD) : this.aB0(rx, sD)
	}, this.aB0 = function(rx, sD) {
		aAo(1e3, 0), aAT(175, ah.a2j[rx] + ": ", 1e3, rx, bE.qT, "rgba(5,60,25,0.9)", -1, !0, sD)
	}, this.a4d = function() {
		var s;
		aE.a4J ? (s = L(76), aR.a4c(L(77), 2, 1, 12), aAT(0, s, 40, 0, "rgb(10,220,10)", bE.qQ, -1, !1)) : (s = L(78), aR.a4c(L(79), 2, 0, 16), aAT(0, s, 41, 0, bE.qT, bE.qQ, -1, !1))
	}, this.a2W = function() {
		var h9 = ah.a2j,
			fj = aE.data;
		aAT(300, h9[0] + " [" + aE.a4Y.a2c(fj.elo[0]) + "] vs " + h9[1] + " [" + aE.a4Y.a2c(fj.elo[1]) + "]", 65, 0, bE.qK, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aB1 = function(s) {
		aAT(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aB2 = function(aB3) {
		aAT(0, L(aB3 ? 80 : 81), 247, 0, bE.rY, bE.qQ, -1, !1)
	}, this.a2e = function(a2b, a2d, aB4) {
		var fj = aE.data,
			h9 = ah.a2j;
		aAT(0, h9[0] + ": " + aE.a4Y.a2c(fj.elo[0]) + " -> " + a2b, 66, 0, bE.qT, aB4[0], -1, !1), aAT(0, h9[1] + ": " + aE.a4Y.a2c(fj.elo[1]) + " -> " + a2d, 66, 1, bE.qT, aB4[1], -1, !1)
	}, this.sU = function(player, id) {
		0 === id ? aAp(50, player) ? (aAT(128, L(82, [ah.a2j[player]]), 52, player, aAU(180, 255, 180), bE.qQ, -1, !0), ag.t3(player, 2, 255)) : aAT(384, L(83, [ah.a2j[player]]), 51, player, aAU(210, 210, 255), bE.qQ, -1, !0) : aAp(51, player) ?
			(aAT(128, L(84, [ah.a2j[player]]), 52, player, bE.qT, "rgba(60,120,10,0.9)", -1, !0), ag.t3(player, 2, 255)) : (aAT(384, L(85, [ah.a2j[player]]), 50, player, bE.qT, "rgba(90,90,90,0.9)", -1, !0), ag.t3(player, 2, 96))
	}, this.sY = function(x0, target) {
		var color = aAU(210, 255, 210);
		1 < x0.length ? aAT(230, L(86, [x0.length, ah.a2j[target]]), 66, target, color, bE.qQ, -1, !0) : aAT(230, L(87, [ah.a2j[x0[0]], ah.a2j[target]]), 66, x0[0], color, bE.qQ, target, !0)
	}, this.aB5 = function(player, target) {
		aAT(230, L(88, [ah.a2j[player], ah.a2j[target]]), 66, player, bE.qT, "rgba(75,65,5,0.9)", target, !0)
	}, this.aB6 = function(id, h9) {
		aAo(id, h9)
	}, this.a4M = function(id, player) {
		aAp(id, void 0 === player ? aE.fd : player)
	}, this.aB7 = function(id) {
		for (var aC = aAH.length - 1; 0 <= aC; aC--)
			if (aAH[aC].id === id) return aAH[aC];
		return null
	}, this.sP = function(a9M, aB8, player) {
		2 !== ah.a7f[aE.fQ] && aAT(200, 1 === a9M ? L(89, [ah.a2j[player]]) : L(90, [bD.pg.a3X(a9M), ah.a2j[player]]), 30, player, "rgb(190,255,190)", bE.qQ, -1, !0)
	}, this.aBA = function(a9M, player) {
		2 !== ah.a7f[aE.fQ] && (aAo(31, 0), a9M = " (" + bD.pg.a3X(a9M) + ") 💸", aAT(150, a9M = bD.h2.kP(player) ? L(91) + a9M : L(92, [ah.a2j[player]]) + a9M, 31, player, bE.qK, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a4L = function(c1) {
		for (var eq = bi.kz(), aC = 2; 0 <= aC; aC--) 0 < aAL.yq[aC] && (c1 || aAL.eq[aC] < eq - 220) && this.aBH(aC)
	}, this.aBH = function(id) {
		var pc, fg = aAL.yq[id],
			player = aAL.x0[id];
		aAL.yq[id] = 0, 1 === fg ? (0 === id ? pc = L(100, [ah.a2j[player], ah.a2j[aAL.aAQ[0]]]) : 1 === id ? pc = L(101, [ah.a2j[player]]) : 2 === id ? pc = L(102, [ah.a2j[player]]) : 3 === id && (pc = L(103, [ah.a2j[player]])), aAo(7, 0), aAT(
			aAL.nw[id], pc, 7, aAL.aAQ[id], bE.qT, bE.qQ, -1, !0)) : (pc = L(0 === id ? 104 : 1 === id ? 105 : 106, [fg]), aAo(7, 0), aAT(aAL.nw[id], pc, 7, player, bE.qT, bE.qQ, -1, !1))
	}, this.aAq = function(id, i9, lf) {
		var eq = bi.kz(),
			fg = aAL.yq[id] + 1;
		aAL.yq[id]++, aAL.x0[id] = i9, aAL.aAQ[id] = lf, 1 === fg && (aAL.eq[id] = eq), (1 === fg && (aE.a4H < 32 || 2 === aE.a4E) || 1 < fg && (aAL.eq[id] < eq - 140 || 2 === aE.a4E)) && this.aBH(id)
	}, this.el = function() {
		b3.el();
		for (var kH = (kH = aAH.length - aAM) <= 1 ? 1 : kH * kH, aC = aAH.length - 1; 0 <= aC; aC--) 0 < aAH[aC].eg && (aAH[aC].eg -= kH, aAH[aC].eg <= 0) && (bi.dy = !0, aAH.splice(aC, 1));
		! function() {
			var h9, aC;
			if (128 !== aAN && !(++aAN < 128))
				for (h9 = 5, aC = am.lY - 1; 0 <= aC; aC--) 1 === ah.a7f[am.ld[aC]] && 0 < h9-- && aAT(240, L(103, [ah.a2j[am.ld[aC]]]), 1, am.ld[aC], bE.qK, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a4L(!1)
	}, this.yr = function() {
		for (var a1O, fp = a2M(), aC = aAH.length - 1; 0 <= aC; aC--) a1O = fp - (aC + 1) * k, 50 === aAH[aC].id ? (ys.drawImage(aAH[aC].canvas, i.j - aAH[aC].j - aAK - aAI, a1O), ys.drawImage(aAO, i.j - aAK - aAI, a1O)) : ys.drawImage(aAH[aC]
			.canvas, i.j - aAH[aC].j - aAI, a1O)
	}, this.aBJ = function(id, iQ) {
		var aAu, aBK = bE.qd;
		0 === id ? aAu = L(107) : 1 === id ? (aAu = L(108), aBK = bE.rQ) : 2 === id ? aAu = L(109) : 3 === id ? aAu = L(110) : (aAu = bD.pg.a3X(iQ), aBK = 5 === id ? bE.rQ : bE.qQ), aAo(74, 0), aAT(0, aAu, 74, 0, bE.qT, aBK, -1, !1, void 0,
			void 0, !0)
	}
}

function cM() {
	var aBM, aBN, yt = "",
		a19 = 0,
		a1A = 0,
		aBL = -1,
		eK = ["Team", "BR", "1v1", "Zombie"],
		aBO = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBP = 10;

	function aBT() {
		for (var aBU = aBV(), aBW = -1, aBR = 0, aC = 0; aC < aBO.length; aC++) {
			var fj = aBX(aC, aBU);
			0 <= fj && (aBW < 0 || fj < aBW) && (aBW = fj, aBR = aC)
		}
		if (!(aBW < 0)) return aBW !== aBL && (yt = eK[aBR] + " " + aBN + ": " + aBY(aBW), aBL = aBW, a19 = aR.measureText(yt, aBM), a19 += Math.floor(.4 * a1A), 1);
		yt = ""
	}

	function aBV() {
		var eh = new Date;
		return 60 * eh.getUTCMinutes() + eh.getUTCSeconds()
	}

	function aBX(aBR, aBU) {
		for (var aBa = aBO[aBR], g8 = -1, fz = 0; fz < aBa.length; fz++) {
			var fj = (fj = 60 * aBa[fz] + aBP - aBU) <= 0 ? 3600 + fj : fj;
			(g8 < 0 || fj < g8) && (g8 = fj)
		}
		return g8
	}

	function aBY(aBb) {
		return aBc(Math.floor(aBb / 60)) + ":" + aBc(aBb % 60)
	}

	function aBc(aBd) {
		return aBd < 10 ? "0" + aBd : String(aBd)
	}
	this.aBQ = function(aBR, aBS) {
		return 0 <= aBO[aBR].indexOf(aBS)
	}, this.dr = function() {
		aBN = L(111)
	}, this.resize = function() {
		a19 = Math.floor((a1.a2.it() ? .53 : .36) * i.iu), a1A = Math.floor(.065 * a19), aBM = bD.tC.tF(1, Math.floor(.9 * a1A)), aBL += 1e3, aBT()
	}, this.el = function() {
		aBT() && (bi.dy = !0)
	}, this.aBZ = function(vp, vq) {
		for (var aBU = aBV(), pc = "", aC = vp; aC < Math.min(vq, aBO.length); aC++) {
			var fj = aBX(aC, aBU);
			0 <= fj && (pc += (pc ? "   " : "") + eK[aC] + ": " + aBY(fj))
		}
		return pc
	}, this.yr = function(fp) {
		yt && (ys.lineWidth = 1 + Math.floor(a1A / 15), ys.translate(i.j - a1A, fp + a19), ys.rotate(-Math.PI / 2), ys.fillStyle = bE.qT, ys.fillRect(0, 0, a19, a1A), ys.strokeStyle = bE.qK, ys.strokeRect(0, 0, a19, a1A + 10), ys.fillStyle = bE
			.qK, ys.font = aBM, bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 1), ys.fillText(yt, Math.floor(a19 / 2), Math.floor(.59 * a1A)), ys.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cN() {
	var a9L, aBe, aBf, a1A, aBg, aBh = 0,
		aBi = 0;

	function aBk(aC) {
		var aBm = !0,
			a3M = bE.qT,
			j = (1 === a9L[aC].id ? a9L[aC].p4.fillStyle = bE.rO : a9L[aC].kB === aE.fd ? a9L[aC].p4.fillStyle = bE.qe : (ad.aBn(a9L[aC].kB), a9L[aC].p4.fillStyle = bD.color.qN(bR.gF[0], bR.gF[1], bR.gF[2], .87), 400 < bD.tm.a6j(bR.gF, 0, 2) && (
				aBm = !1, a3M = bE.qK)), a9L[aC].canvas.width),
			vc = (a9L[aC].p4.clearRect(0, 0, j, a1A), a9L[aC].p4.fillRect(0, 0, j, a1A), a9L[aC].p4.fillStyle = a3M, ! function(p4, j, a1A) {
				p4.fillRect(0, 0, j, 1), p4.fillRect(0, a1A - 1, j, 1), p4.fillRect(0, 0, 1, a1A), p4.fillRect(j - 1, 0, 1, a1A)
			}(a9L[aC].p4, j, a1A), aBe + 2 * a1A < j && (a9L[aC].p4.fillRect(j - aBe - a1A, 0, 1, a1A), a9L[aC].p4.fillText(ah.a2j[a9L[aC].kB], Math.floor((j - aBe) / 2), Math.floor(.57 * a1A))), 0 !== a9L[aC].id ? 0 : a1A);
		a9L[aC].p4.fillText(bD.pg.a3X(a9L[aC].iQ), Math.floor(j - aBe / 2 - vc), Math.floor(.57 * a1A)),
			function(aC, j, vc, aBm) {
				a9L[aC].p4.fillStyle = aBm ? bE.qV : bE.qR;
				aBm = Math.floor(aBe * a9L[aC].iQ / a9L[aC].aBt);
				a9L[aC].p4.fillRect(Math.floor(j - aBe - vc), a1A - aBg, aBm, aBg)
			}(aC, j, vc, aBm), 0 === a9L[aC].id ? (aBq(aC, j, aBm, a3M), function(aC, j, aBm) {
				a9L[aC].p4.strokeStyle = aBm ? bE.ql : bE.qv, a9L[aC].p4.fillRect(a1A, 0, 1, a1A);
				aBm = j - a1A;
				a9L[aC].p4.beginPath(), a9L[aC].p4.moveTo(Math.floor(.3 * a1A + aBm), Math.floor(a1A / 2)), a9L[aC].p4.lineTo(Math.floor(a1A - .3 * a1A + 0 + aBm), Math.floor(a1A / 2)), a9L[aC].p4.stroke(), a9L[aC].p4.beginPath(), a9L[aC].p4
					.moveTo(Math.floor(a1A / 2 + aBm), Math.floor(.3 * a1A)), a9L[aC].p4.lineTo(Math.floor(a1A / 2 + aBm), Math.floor(a1A - .3 * a1A + 0)), a9L[aC].p4.stroke()
			}(aC, j, aBm)) : aBq(aC, 2 * a1A, aBm, a3M)
	}

	function aBq(aC, j, aBm, a3M) {
		a9L[aC].p4.strokeStyle = a9L[aC].aBu ? bE.qc : aBm ? bE.r3 : bE.r4, a9L[aC].p4.fillStyle = a3M, a9L[aC].p4.fillRect(j - a1A, 0, 1, a1A), a9L[aC].p4.lineWidth = Math.max(Math.floor(a1A / 12), 3), a9L[aC].p4.lineCap = "round";
		aBm = .35;
		j = a1A + 1, a9L[aC].p4.beginPath(), a9L[aC].p4.moveTo(Math.floor(j - aBm * a1A + 0), Math.floor(aBm * a1A)), a9L[aC].p4.lineTo(Math.floor(j - a1A + aBm * a1A), Math.floor(a1A - aBm * a1A + 0)), a9L[aC].p4.stroke(), a9L[aC].p4.beginPath(),
			a9L[aC].p4.moveTo(Math.floor(j - a1A + aBm * a1A), Math.floor(aBm * a1A)), a9L[aC].p4.lineTo(Math.floor(j - aBm * a1A + 0), Math.floor(a1A - aBm * a1A + 0)), a9L[aC].p4.stroke()
	}

	function aC6(h, aC4) {
		for (var iQ, aC = aC4 - 1; 0 <= aC; aC--) iQ = ae.gt(aE.fQ, aC), h[aC].iQ !== iQ && (h[aC].iQ = iQ, h[aC].aBt = Math.max(iQ, h[aC].aBt), h[aC].aBl = !0)
	}

	function aCA(h, aC8) {
		for (var vp = aE.fQ << 3, aAy = bQ.z.aAy, mt = bQ.z.mt, aCC = bQ.z.aCC, aC = aC8 - 1; 0 <= aC; aC--) {
			var aCD = aCC[vp + aC],
				iQ = aAy[aCD];
			h[aC].iQ !== iQ ? (h[aC].iQ = iQ, h[aC].aBt = Math.max(iQ, h[aC].aBt), h[aC].aBl = !0) : h[aC].aBu || mt[aCD] % 64 != 5 || (h[aC].aBu = !0, h[aC].aBl = !0)
		}
	}

	function aBj(a9O) {
		a9O.canvas = document.createElement("canvas"), bV.a0j.font = aBf;
		var j = aBe;
		a9O.kB < aE.fd && 0 === a9O.id && (j += Math.floor(bV.a0j.measureText(ah.a2j[a9O.kB] + "000").width)), j += a1A, 0 === a9O.id && (j += a1A), a9O.canvas.width = j, a9O.canvas.height = a1A, a9O.p4 = a9O.canvas.getContext("2d", {
			alpha: !0
		}), a9O.p4.font = aBf, bD.tC.textBaseline(a9O.p4, 1), bD.tC.textAlign(a9O.p4, 1)
	}

	function aC0(aC) {
		return aV.aCE() ? i.j - a9L[aC].canvas.width - bf.gap : aV.fn
	}

	function aC1(aC) {
		return Math.floor(2 * bf.gap + (aV.aCE() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a1A))
	}
	this.dr = function() {
		aBh = aBi = 0, a9L = [], this.resize()
	}, this.resize = function() {
		aBf = aO.aA3, a1A = aO.fontSize + 5, a1A = Math.floor(1.25 * a1A), a1.a2.it() && (a1A = Math.floor(1.25 * a1A)), aBg = Math.floor(.15 * a1A), bV.a0j.font = aBf, aBe = Math.floor(bV.a0j.measureText("02 000 000 0000").width);
		for (var aC = a9L.length - 1; 0 <= aC; aC--) aBj(a9L[aC]), aBk(aC)
	}, this.nQ = function() {
		for (var aC = a9L.length - 1; 0 <= aC; aC--) a9L[aC].aBl && (a9L[aC].aBl = !1, aBk(aC))
	}, this.hu = function(mH, mI) {
		if (!(2 === aE.a4E || 0 === ah.ne[aE.fQ] || aE.hp || aE.hq || bD.h2.kP(aE.fQ)))
			for (var aBv, aBw, aBx, aBy = a1.a2.it() ? a1A : 0, aBz = a1.a2.it() ? Math.floor(.15 * a1A) : 0, aC = a9L.length - 1; 0 <= aC; aC--)
				if (aBv = aC0(aC), aBw = aC1(aC), aBx = a9L[aC].canvas.width, aBw - aBz <= mI && mI <= aBw + a1A + aBz) {
					if (aBv - aBy <= mH && mH <= aBv + a1A + aBy) return a9L[aC].aBu || (a9L[aC].aBl = !0, a9L[aC].aBu = !0, 0 === a9L[aC].id ? bB.i7.sA(a9L[aC].kB) : bB.i7.s9(a9L[aC].kB)), !0;
					if (0 === a9L[aC].id && aBv + aBx - a1A - aBy <= mH && mH <= aBv + aBx + aBy) return bY.a9m(3), bB.i7.iE(aS.iB(), a9L[aC].kB), !0
				} return !1
	}, this.el = function() {
		var a6r, a6s, h, aC4;
		0 === ah.ne[aE.fQ] || bD.h2.kP(aE.fQ) && !aE.hp && !aE.hq || (a6r = a9L.slice(0, aBh), a6s = a9L.slice(aBh, aBh + aBi), h = a6r, aC4 = ae.gn(aE.fQ), function(h, aC4) {
			if (aBh !== aC4) return 1;
			for (var aC = aC4 - 1; 0 <= aC; aC--)
				if (h[aC].kB !== ae.gs(aE.fQ, aC)) return 1;
			return
		}(h, aC4) ? aC6(h = function(h, aC4) {
			var aC, kB, g0, iQ, aAW = [];
			loop: for (aC = 0; aC < aC4; aC++) {
				for (kB = ae.gs(aE.fQ, aC), g0 = 0; g0 < h.length; g0++)
					if (h[g0].kB === kB) {
						aAW.push(h.splice(g0, 1)[0]);
						continue loop
					} iQ = ae.gt(aE.fQ, aC), aBj(iQ = {
					kB: kB,
					iQ: iQ,
					aBt: iQ,
					id: 0,
					aBl: !0,
					aBu: !1,
					canvas: null,
					p4: null
				}), aAW.push(iQ)
			}
			return aAW
		}(h, aC4), aC4) : aC6(h, aC4), a6r = h, a6s = function(h) {
			var aC8 = bQ.z.l6[aE.fQ];
			return function(h, aC8) {
				if (aBi !== aC8) return 1;
				for (var vp = aE.fQ << 3, mv = bQ.z.mv, aCC = bQ.z.aCC, aC = aC8 - 1; 0 <= aC; aC--) {
					var aCD = aCC[vp + aC];
					if (h[aC].kB !== mv[aCD]) return 1
				}
				return
			}(h, aC8) ? aCA(h = function(h, aC8) {
				var aC, kB, g0, aAW = [],
					vp = aE.fQ << 3,
					mv = bQ.z.mv,
					aAy = bQ.z.aAy,
					aCC = bQ.z.aCC;
				loop: for (aC = 0; aC < aC8; aC++) {
					var aCD = aCC[vp + aC];
					for (kB = mv[aCD], g0 = 0; g0 < h.length; g0++)
						if (h[g0].kB === kB) {
							aAW.push(h.splice(g0, 1)[0]);
							continue loop
						} aCD = aAy[aCD], aBj(aCD = {
						kB: kB,
						iQ: aCD,
						aBt: aCD,
						id: 1,
						aBl: !0,
						aBu: !1,
						canvas: null,
						p4: null
					}), aAW.push(aCD)
				}
				return aAW
			}(h, aC8), aC8) : aCA(h, aC8), h
		}(a6s), aBh = a6r.length, aBi = a6s.length, a9L = a6r.concat(a6s))
	}, this.yr = function() {
		if (0 !== ah.ne[aE.fQ] && (!bD.h2.kP(aE.fQ) || aE.hp || aE.hq))
			for (var aC = a9L.length - 1; 0 <= aC; aC--) ys.drawImage(a9L[aC].canvas, aC0(aC), aC1(aC))
	}
}

function cO() {
	var aAH, l7, aCF, aCG, k, aA3, fontSize, aCH, aCI, aCJ, aCK, canvas, p4, nr, aCL;

	function z7(aC) {
		return L(0 === aC ? 112 : 1 === aC ? 113 : 2 === aC ? 114 : 115)
	}

	function aCS() {
		aE.ib ? aCT + 4 * bf.gap + k + bk.aCU() > aS.fp ? ys.drawImage(canvas, 2 * bf.gap + bk.aCU(), aCT + 2 * bf.gap) : ys.drawImage(canvas, bf.gap, aCT + 3 * bf.gap + bk.aCU()) : ys.drawImage(canvas, bf.gap, aCT + 2 * bf.gap)
	}

	function aCM() {
		canvas.width = aAH[0].width + aCJ, canvas.height = k + aCJ, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aAH[0].width + aCJ, k + aCJ), p4.translate(Math.floor(aCJ / 2), Math.floor(aCJ / 2)), p4.lineWidth = aCJ, p4.fillStyle = 1 === aAH[0].aCR ? bE.qY : bE.qQ, aCV(), p4.fill(), p4.strokeStyle = 1 === aAH[0].aCR ? bE.qK :
			bE.qT, aCV(), p4.stroke(), bD.tC.textAlign(p4, 1), bD.tC.textBaseline(p4, 1), p4.fillStyle = 1 === aAH[0].aCR ? bE.qK : bE.qT, p4.font = aA3[0], p4.fillText(z7(aAH[0].aCQ), Math.floor(aAH[0].width / 2), Math.floor(.72 * aCH[0] * k)), p4
			.font = aA3[1], p4.fillText(aAH[0].pc, Math.floor(aAH[0].width / 2), Math.floor((aCH[0] + .48 * aCH[1]) * k))
	}

	function aCV() {
		if (__fx.settings.smoothUI && p4.roundRect) return p4.beginPath(), p4.roundRect(0, 0, aAH[0].width, k, .15 * k);
		p4.beginPath(), p4.moveTo(aCK, 0), p4.lineTo(aAH[0].width - aCK, 0), p4.lineTo(aAH[0].width, aCK), p4.lineTo(aAH[0].width, k - aCK), p4.lineTo(aAH[0].width - aCK, k), p4.lineTo(aCK, k), p4.lineTo(0, k - aCK), p4.lineTo(0, aCK), p4.closePath()
	}
	this.dr = function() {
		l7 = 4, aCF = aCG = nr = 0, aAH = [], aA3 = new Array(2), fontSize = new Array(2), (aCH = new Array(2))[0] = .3, aCH[1] = .7, aCI = new Array(4), canvas = document.createElement("canvas"), aCL = bi.eg + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.it() ? .062 : .047) * i.iu), fontSize[0] = Math.floor(.85 * aCH[0] * k), fontSize[1] = Math.floor(.85 * aCH[1] * k), aA3[0] = bD.tC.tF(1, fontSize[0]), aA3[1] = bD.tC.tF(1, fontSize[1]), aC = aCI.length -
			1; 0 <= aC; aC--) aCI[aC] = this.measureText(z7(aC) + "000", aA3[0]);
		if (aCJ = Math.floor(1 + .05 * k), aCK = Math.floor(.2 * k), 0 < aAH.length) {
			for (aC = aAH.length - 1; 0 <= aC; aC--) j = this.measureText(aAH[aC].pc + "00", aA3[1]), aAH[aC].width = j < aCI[aC] ? aCI[aC] : j;
			aCM()
		}
	}, this.el = function() {
		0 !== l7 && (4 === l7 ? bi.eg > aCL && (l7 = 0, 1 === aE.a4E) && aR.a4c(bV.xH.a0e[bV.fM].name, 3, 1, 9) : (1 === l7 ? (0 === aCF && (aCM(), aCF = 1e-4), 1 <= (aCF += .002 * (bi.eg - nr)) && (aCG = 0, l7 = 2, aCF = 1), bi.dy = !0) : 2 ===
			l7 ? ((aCG += (bi.eg - nr) / 1e3) > aAH[0].nw || 1 < aCG && 1 < aAH.length) && (l7 = 3) : 3 === l7 && ((aCF -= .002 * (bi.eg - nr)) <= 0 && (aCF = 0, aAH.shift(), l7 = 0 < aAH.length ? 1 : 0), bi.dy = !0), nr = bi.eg))
	}, this.measureText = function(pc, aA3) {
		return ys.font = aA3, Math.floor(ys.measureText(pc).width)
	}, this.ep = function(aCP, aC) {
		this.a4c(ah.a2j[aCP], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4c = function(pc, aCQ, aCR, nw) {
		var j;
		pc.length && (j = (j = this.measureText(pc + "00", aA3[1])) < aCI[aCQ] ? aCI[aCQ] : j, aAH.push({
			pc: pc,
			width: j,
			aCQ: aCQ,
			aCR: aCR,
			nw: nw
		}), 0 === l7) && (aCF = 0, l7 = 1, nr = bi.eg)
	}, this.yr = function() {
		0 !== l7 && 0 !== aCF && (aCF < 1 ? (ys.globalAlpha = aCF, aCS(), ys.globalAlpha = 1) : aCS())
	}
}

function cx() {
	var k, canvas, p4, aCW, aCX, aCY, aCZ, aBl, aCa, aCb, aCc, aCd, aB3 = !1,
		a75 = (this.iT = !1, this.j = 0, new Array(2)),
		aCe = 0;

	function nR() {
		var j = ax.j,
			lx = (aBl = !1, a2P(p4, j, k), Math.floor(j / 2));
		1 === aCW ? (p4.fillStyle = bE.qn, p4.fillRect(lx, 0, lx, k)) : -1 === aCW && (p4.fillStyle = bE.r5, p4.fillRect(0, 0, lx, k)), a2Q(p4, j, k, 2);
		var lx = (lx = Math.floor(.25 * k)) < 2 ? 2 : lx,
			aBD = (p4.fillStyle = bE.qZ, Math.floor((k - 4) * aCX[1] / aCY[1]));
		0 < aBD && p4.fillRect(2, k - 2 - aBD, lx, aBD), 0 < (aBD = Math.floor((k - 4) * aCX[0] / aCY[0])) && p4.fillRect(j - 2 - lx, k - 2 - aBD, lx, aBD);
		lx = (lx = Math.floor(k / 8)) < 2 ? 2 : lx, a2S(p4, Math.floor(.4 * k), 0, k, lx, .5, !1), a2S(p4, Math.floor(j - 1.4 * k), 0, k, lx, .5, !0), aBD = 1.1 * k / a75[0].width;
		p4.imageSmoothingEnabled = !0, p4.setTransform(aBD, 0, 0, aBD, (j - aBD * a75[0].width) / 2, -.05 * k), p4.drawImage(a75[+aB3], 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCj() {
		aCd = -1, aB3 = ai.aCk(), aO.a8f(257), aO.aB2(aB3), ax.iT = !0, aBl = !0, aCa = 360;
		for (var g8, eh = 0, aC = am.lY - 1; 0 <= aC; aC--) bD.h2.kP(am.ld[aC]) || (eh += ah.hU[am.ld[aC]]);
		aB3 ? aCY[0] = Math.max(bO.g7(3 * eh, 4), 1) : aE.ib ? (g8 = 9 === aE.lK ? 8 === bj.lP[bk.lb()] ? 80 : (g8 = bO.g7(100 * bk.lZ(), aE.km), bO.g7(bO.is(1550 - 11 * g8, 400, 1e3), 10)) : (g8 = bO.g7(100 * bk.lZ(), aE.km), bO.g7(bO.is(1600 - 12 *
			g8, 400, 1e3), 10)), g8 = bO.g7(g8 * eh, 100), aCY[0] = Math.max(g8, 1)) : 8 === aE.lK ? aCY[0] = Math.max(bO.g7(3 * eh, 4), 1) : aCY[0] = Math.max(bO.g7(3 * eh, 5), 1), aCY[1] = Math.max(eh - aCY[0], 1)
	}

	function aCf() {
		aCc = bi.kz(), aBl = !0, aCa = aCW = 0, aCZ = [], ax.iT = !1, aO.a4M(247), aCX[0] = aCX[1] = 0, aO.a8f(673)
	}

	function a2M() {
		return aS.aAh(aO.aAd()) ? __fx.settings.keybindButtons ? aS.fp - 2 * (k + bf.gap) : aS.fp - k - bf.gap : bF.aAh(aO.aAg()) ? bF.a2M() - k - bf.gap : i.k - k - bn.a9S() * bf.gap
	}
	this.ds = function() {
		for (var aC = 0; aC < 2; aC++) a75[aC] = bD.canvas.a30(ac.get(3), 8 - aC, bE.rm), a75[aC] = bD.canvas.a77(a75[aC])
	}, this.dr = function() {
		aCc = -1e4, aCb = aCe = 0, aCd = -1, this.iT = !1, aBl = aB3 = !1, aCX = [aCW = aCa = 0, 0], aCY = [1, 1], aCZ = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p4 = canvas.getContext("2d", {
			alpha: !0
		}), nR()
	}, this.nQ = function() {
		aBl && nR()
	}, this.hu = function(fn, fp) {
		return !!this.iT && !(fn < i.j - this.j - bf.gap || fp < a2M() || (aE.hp || aE.hq || this.iU(aE.fQ) && (aN.hr && aN.a6N(), bB.i7.iV(fn > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.el = function() {
		0 < aCb ? 0 === --aCb && aCf() : this.iT ? 180 == --aCa && 3 * aCX[0] < aCY[0] ? aCf() : aCX[0] >= aCY[0] ? aB3 ? bU.a3s.a49() : bU.a3s.a4D() : aCX[1] >= aCY[1] ? aCb = 4 : aCa <= 0 && aCf() : ! function() {
			var aCm = bi.kz();
			if (aCm % 40 == 14) {
				if (aCe) return !(aCm < aCe) && !(aCm < aCc + 535) && (aCe = aCm + 1071, bD.h2.a7i()) ? (aCj(), 1) : 0;
				(1 === am.lY || (aE.ib ? bk.lZ() : ah.hU[md[0]]) >= bO.g7(96 * aE.km, 100)) && (aCe = aCm + 535)
			}
			return
		}() && 0 <= aCd && (aO.a2i(250, L(116, [ah.a2j[aCd]]), 673, aCd, bE.qT, bE.qQ, -1, !0), aCj())
	}, this.a4F = function() {
		this.iT && aCX[0] < aCY[0] && aCf()
	}, this.t4 = function(player, aCn) {
		var aCo = L(aCn ? 117 : 118, [ah.a2j[player]]),
			aCo = (aO.a2i(450, aCo, 257, player, aCn ? bE.ql : bE.r2, bE.qQ, -1, !0), aCZ.push(player), aBl = !0, aE.lM ? Math.max(aCY[0], aCY[1]) : ah.hU[player]),
			aCo = Math.max(aCo, 1);
		aCn ? aCX[0] += aCo : aCX[1] += aCo, player === aE.fQ && (aCW = aCn ? 1 : -1)
	}, this.yr = function() {
		var fp;
		this.iT && (fp = a2M(), ys.drawImage(canvas, i.j - this.j - bf.gap, fp))
	}, this.iW = function(player) {
		if (0 !== aCa) return !1;
		if (!bD.h2.hs(1)) return !1;
		if (!bD.h2.ht(player)) return !1;
		if (10 <= kn[player] && !bD.h2.a82(player, 9)) return !1;
		if (!(aE.lM || m.e4 && m.e8)) {
			player = bi.kz();
			if (player < aCc + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iU = function(hE) {
		if (!bD.h2.hs(1)) return !1;
		if (!bD.h2.ht(hE)) return !1;
		if (!this.iT) return !1;
		for (var aC = aCZ.length - 1; 0 <= aC; aC--)
			if (aCZ[aC] === hE) return !1;
		return !0
	}, this.iS = function(player) {
		aCd = player
	}
}

function cP() {
	var j, fn, aCq, canvas, p4, iT, jK, a8W, aA3, aBl, aCr = 11 / 12;

	function aCt() {
		var aBs = Math.floor(jK * (j - 2 * aCq)),
			aCw = 1 + Math.floor(.0625 * aS.k),
			aCx = 1 + Math.floor(.3 * aS.k),
			aCy = Math.floor(.55 * aS.k),
			rounded = (p4.clearRect(0, 0, j, aS.k), p4.fillStyle = bE.qP, p4.fillRect(0, 0, aCq, aS.k), p4.fillRect(aCq + aBs, 0, j - aCq - aBs, aS.k), p4.fillStyle = jK < 1 / 3 ? "rgba(" + Math.floor(3 * jK * 130) + ",130,0,0.85)" : jK < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jK - 2 / 3) * 130) + ",0.85)", p4.fillRect(aCq, 0, aBs, aS.k), p4.fillStyle = bE.qT, p4.fillStyle = __fx.utils.lineColor(bE.qT),
				__fx.utils.smoothFrame(p4, j, aS.k));
		rounded || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, aS.k - 1, j, 1), p4.fillRect(0, 0, 1, aS.k)), p4.fillRect(aCq, 0, 1, aS.k), p4.fillRect(aCq + aBs, 0, 1, aS.k), p4.fillRect(j - aCq, 0, 1, aS.k), rounded || p4.fillRect(j - 1, 0, 1, aS.k),
			p4.fillStyle = bE.qT, p4.fillRect(Math.floor(.25 * aS.k) + aCx, Math.floor((aS.k - aCw) / 2), aS.k - 2 * aCx, aCw), p4.fillRect(Math.floor(j - 1.25 * aS.k) + aCx, Math.floor((aS.k - aCw) / 2), aS.k - 2 * aCx - aCx % 2, aCw), p4.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aCw) / 2), aCx, aCw, aS.k - 2 * aCx - aCx % 2), a8W = bD.h2.jJ(aE.fQ, aS.iB()), p4.fillText(bD.pg.a3X(a8W) + " (" + bD.pg.a8P(100 * jK, +(jK < .1)) + ")", Math.floor(.5 * j), aCy)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jK = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a6J(arg1);

	function aD3(a6e) {
		return !(1 < a6e && 1 === jK || (1 < a6e && a6e * jK - jK < 1 / 1024 ? a6e = (jK + 1 / 1024) / jK : a6e < 1 && jK - a6e * jK < 1 / 1024 && (a6e = (jK - 1 / 1024) / jK), jK = bO.is(jK * a6e, 1 / 1024, 1), aCt(), 0))
	}

	function aD4(mH) {
		return jK !== (jK = bO.is((mH - fn - aCq) / (j - 2 * aCq), 1 / 1024, 1)) && (aCt(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCt(), bi.dy = !0
	}, this.fp = 0, this.hv = !1, this.dr = function() {
		iT = !aE.i5 && !aE.hp && !aE.hq, aBl = !1, jK = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8W = 0, this.hv = !1, this.resize()
	}, this.resize = function() {
		a1.a2.it() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iu), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.it() ? .65 : .389) * i.iu), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCq = Math.floor(3 * this.k / 2), aA3 =
			bD.tC.tF(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, ys), canvas.height = this.k, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = aA3, bD.tC.textBaseline(p4, 1), bD.tC.textAlign(p4, 1), this.aCs(), aCt()
	}, this.aCs = function() {
		fn = a1.a2.it() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fp = i.k - this.k - bn.a9S() * bf.gap
	}, this.nQ = function() {
		aBl && (aBl = !1, aCt())
	}, this.iT = function() {
		return !(!iT || aN.hr && fn < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAh = function(aCz) {
		return !!this.iT() && fn + j > i.j - aCz - bf.gap
	}, this.a8d = function() {
		iT = !aE.hp && !aE.hq
	}, this.aCf = function() {
		iT = !1
	}, this.iB = function() {
		return bO.is(Math.floor(1024 * jK + .5) - 1, 0, 1023)
	}, this.a6G = function(mH, mI) {
		return this.iT() && fn < mH && mH < fn + j && mI > this.fp
	}, this.hu = function(mH, mI) {
		if (!this.iT()) return !1;
		if (!(__fx.settings.keybindButtons && mI > this.fp - Math.floor(bf.gap / 4) - this.k && mI < this.fp - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mH - fn))) {
			if (!aS.a6G(mH, mI)) return !1;
			aT.oA = !1, ! function(uu, mH, mI) {
				if (function(mH, mI) {
						return fn < mH && mH < fn + aCq && mI > aS.fp
					}(mH, mI)) return aD3(aCr);
				if (function(mH, mI) {
						return fn + j - aCq < mH && mH < fn + j && mI > aS.fp
					}(mH, mI)) return aD3(1 / aCr);
				return uu.hv = !0, aD4(mH)
			}(this, mH, mI) || (bi.dy = !0)
		}
		return !0
	}, this.a6J = function(oH) {
		0 !== aE.a4E && this.iT() && aD3(oH) && (bi.dy = !0)
	}, this.a5p = function(deltaY) {
		var oH;
		return !(0 === deltaY || !this.iT()) && aD3(oH = 0 < deltaY ? (oH = 400 / (400 + deltaY)) < aCr ? aCr : oH : 1 / aCr < (oH = (400 - deltaY) / 400) ? 1 / aCr : oH)
	}, this.a5m = function(mH) {
		return !!this.hv && aD4(mH)
	}, this.a6C = function() {
		this.hv = !1
	}, this.el = function() {
		this.iT() && a8W !== bD.h2.jJ(aE.fQ, this.iB()) && (aBl = !0)
	}, this.yr = function() {
		this.iT() && (ys.drawImage(canvas, fn, this.fp), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ys, fn, this.fp)
	}
}

function d9() {
	var canvas, p4, rect, font, aD5 = 0,
		aD6 = !1,
		aD7 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aD8 = 5;

	function aDF() {
		if (aD6) {
			var aC, fg = aD7.length,
				aCy = Math.floor(.5 * rect.k),
				k = fg * aCy,
				fn = Math.floor(Math.floor(rect.fn) + .3 * rect.j - .5),
				fp = Math.floor(Math.floor(rect.fp) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (ys.fillStyle = bE.qP, ys.fillRect(fn, fp, j, k), ys.fillStyle = bE.qs, ys.fillRect(fn, fp + aD8 * aCy, j, aCy), ys.fillStyle = bE.qT, ys.fillRect(fn, fp, 2, k), ys.fillRect(fn, fp, j, 2), ys.fillRect(fn + j - 2, fp, 2, k), aC =
				1; aC < fg; aC++) ys.fillRect(fn, fp + aC * aCy, j, 2);
			for (ys.fillStyle = bE.qT, bD.tC.textAlign(ys, 1), bD.tC.textBaseline(ys, 1), ys.font = bD.tC.tF(0, .6 * aCy), fn += .5 * j, aC = 0; aC < fg; aC++) ys.fillText(aDN(aC), fn, fp + (aC + .6) * aCy)
		}
		ys.drawImage(canvas, Math.floor(rect.fn), Math.floor(rect.fp))
	}

	function nR(uu) {
		var fn, o5, o6, aCy;
		p4.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p4.fillStyle = bE.qP, p4.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.o8 && (p4.fillStyle = bE.qs, p4.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p4
			.fillStyle = bE.qT, p4.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p4.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fn = .5 * rect.j, p4.fillText("Replay Speed", fn, .31 * rect.k), p4.fillText(aDN(aD8), fn, .69 *
				rect.k), p4.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), uu.a9B ? (fn = Math.floor(.02 * rect.j), uu = Math.floor(.025 * rect.j), o5 = Math.floor(.85 * rect.j - fn - .5 * uu), o6 = Math.floor(.25 * rect.k), aCy =
				Math.floor(rect.k) - 2 * o6, p4.fillRect(o5, o6, fn, aCy), p4.fillRect(o5 + fn + uu, o6, fn, aCy)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fn = Math.floor(.85 * rect.j - .5 * j + j / 12),
					fp = Math.floor(.5 * rect.k - k);
				p4.beginPath(), p4.moveTo(fn, fp), p4.lineTo(fn + j, fp + k), p4.lineTo(fn, fp + (k << 1)), p4.fill()
			}(), p4.fillRect(0, 0, Math.floor(rect.j), 2), p4.fillRect(0, 0, 2, Math.floor(rect.k)), p4.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p4.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aDN(aC) {
		return 5 === aC ? "Normal" : "" + aD7[aC]
	}
	this.a9B = !1, this.dr = function() {
		aE.hp && (aD8 = 5, this.a9B = !1, aD6 = !1, rect = new uD([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aD9 = function() {
		return aD7[aD8]
	}, this.a2M = function() {
		return rect.fp
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a9B,
		fxGetSpeedIndex: () => aD8,
		fxSetSpeedIndex: index => {
			aD8 = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.fp
	}, this.aAh = function(aCz) {
		return !!aE.hp && rect.fn + rect.j > i.j - aCz - bf.gap
	}, this.resize = function() {
		aE.hp && (rect.resize(), rect.fp -= (bn.a9S() - 1) * bf.gap, font = bD.tC.tF(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.tC.textAlign(p4, 1), bD.tC.textBaseline(p4, 1), nR(this))
	}, this.a6M = function(aDA) {
		0 === aE.a4E || u.iT() || aDA !== aE.o8 && (aE.o8 = aDA, bk.resize(), bi.dy = !0, aE.hp) && (aD5 = bi.eg + 2e3, nR(this))
	}, this.hu = function(fn, fp) {
		if (!aE.hp) return !1;
		if (fn < rect.fn || fp < rect.fp || fn > rect.fn + rect.j) return aD6 && function(uu, fn, fp) {
			var fg = aD7.length,
				aCy = Math.floor(.5 * rect.k),
				k = fg * aCy,
				o5 = Math.floor(Math.floor(rect.fn) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.fp) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aD6 = !1, bi.dy = !0, fn < o5 || o5 + j < fn || fp < k || (aD8 = aDE(0, Math.floor((fp - k) / aCy), fg - 1), nR(uu)), !0
		}(this, fn, fp);
		if ((fn -= rect.fn) < .3 * rect.j) aD6 = !1, this.a6M(!aE.o8);
		else {
			if (fn < .7 * rect.j) return aD6 = !aD6, bi.dy = !0;
			this.a6O(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a6O(!0), this.a6O = function(aDC) {
		2 === aE.a4E ? (this.a6M(!1), u.v(3)) : (aD6 = !1, this.a9B = !this.a9B, this.a9B ? (aN.hr && aN.a6N(), a1.a2.setState(1)) : aDC || aN.aAA(), bi.dy = !0, nR(this))
	}, this.aDD = function() {
		this.a9B = !1, aN.aAA(), bi.dy = !0, nR(this)
	}, this.a65 = function(fn, fp) {
		return !!aE.o8 && (0 <= aN.hu(fn, fp) || (aE.hp ? ((bi.eg > aD5 || !this.hu(fn, fp)) && aT.hu(fn, fp), bi.dy = !0, aD5 = bi.eg + 2e3) : aT.hu(fn, fp)), !0)
	}, this.el = function() {
		aE.hp && aE.o8 && bi.eg > aD5 - 1e3 && bi.eg < aD5 && (bi.dy = !0)
	}, this.a4N = function() {
		aE.hp && (this.a9B = !1, bi.dy = !0, nR(this))
	}, this.yr = function() {
		if (aE.hp) {
			if (aE.o8) {
				if (bi.eg > aD5) return;
				if (bi.eg > aD5 - 1e3) return ys.globalAlpha = aDE(0, (1e3 - (bi.eg - (aD5 - 1e3))) / 1e3, 1), aDF(), void(ys.globalAlpha = 1)
			}
			aDF()
		}
	}
}

function cQ() {
	var aDO, aDP, j, fn, fp, aDQ, aDR;
	this.dr = function() {
		aDO = new Array(2), aDP = new Array(2), this.oA = !1, aDR = aDQ = jM = jL = 0, iv = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.it() ? .072 : .0502) * i.iu)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aDO[aC] = document.createElement("canvas"), aDO[aC].width = j, aDO[aC].height = j, aDP[aC] = aDO[aC].getContext("2d", {
			alpha: !0
		});
		this.aCs(),
			function() {
				for (var aDi = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aDP[aC].clearRect(0, 0, j, j), aDP[aC].fillStyle = bE.qM, aDP[aC].beginPath(), aDP[aC].arc(j / 2, j / 2, j / 2 - aDi, 0, 2 * Math.PI), aDP[aC].fill(), aDP[aC]
					.lineWidth = aDi, aDP[aC].fillStyle = bE.qT, aDP[aC].strokeStyle = bE.qT, aDP[aC].strokeStyle = __fx.utils.lineColor(bE.qT), aDP[aC].beginPath(), aDP[aC].arc(j / 2, j / 2, j / 2 - aDi, 0, 2 * Math.PI), aDP[aC].stroke(), a2S(
						aDP[aC], 0, 0, j, aDi, .3, 0 === aC)
			}()
	}, this.a2L = function() {
		return -jL / iv
	}, this.a2M = function() {
		return -jM / iv
	}, this.oK = function(aDV, j1) {
		jL = iv * aDV - j1
	}, this.oL = function(aDW, j2) {
		jM = iv * aDW - j2
	}, this.hu = function(aDU, aAi) {
		return aE.o8 || ! function(aDU, aAi) {
			return Math.pow(aDU - (fn + j / 2), 2) + Math.pow(aAi - (fp + j / 2), 2) < j * j / 4 || Math.pow(aDU - (fn + j / 2), 2) + Math.pow(aAi - (fp + 2 * j), 2) < j * j / 4
		}(aDU, aAi) || bm.buffer.data[8].value ? (aI.oN() && (this.oA = !0, aDQ = aDU, aDR = aAi), !1) : aAi < fp + 1.25 * j ? this.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5m = function(aDU, aAi) {
		var aDX, aDY, j4, j7;
		return !aI.oN() || (aDX = jL, aDY = jM, jL += j4 = aDQ - aDU, jM += j7 = aDR - aAi, ag.a5m(j4, j7), this.aDZ(), aDQ = aDU, aDR = aAi, aDX !== jL) || aDY !== jM
	}, this.a5p = function(mH, mI, deltaY) {
		var oH;
		if (aI.oN()) {
			if (0 < deltaY) oH = (oH = 500 / (500 + deltaY)) < .5 ? .5 : oH;
			else {
				if (!(deltaY < 0)) return !1;
				oH = 2 < (oH = (500 - deltaY) / 500) ? 2 : oH
			}
			this.aDa(mH, mI, oH), bi.dy = !0
		}
		return !0
	}, this.aDa = function(fn, fp, fK) {
		var a6e;
		fK = a6e = (a6e = 1024 < (a6e = fK) * iv ? 1024 / iv : a6e) * iv < .125 ? .125 / iv : a6e, ag.zoom(fK, fn, fp),
			function(a6e, mH, mI) {
				iv *= a6e, jL = (jL + mH) * a6e - mH, jM = (jM + mI) * a6e - mI, aT.aDZ()
			}(fK, fn, fp)
	}, this.aDZ = function() {
		var aDd = i.j / 16,
			aDe = 0,
			aDf = i.k / 16,
			aDg = 0;
		jL < -i.j + aDd && (aDe = -i.j + aDd - jL), jL > iv * bV.fr - aDd && (aDe = iv * bV.fr - aDd - jL), jM < -i.k + aDf && (aDg = -i.k + aDf - jM), jM > iv * bV.fs - aDf && (aDg = iv * bV.fs - aDf - jM), jL += aDe, jM += aDg, bd.oM(), ag.aDh(
			aDe, aDg)
	}, this.aCs = function() {
		fn = i.j - j - bf.gap, fp = Math.floor(i.k / 2 - 1.25 * j)
	}, this.yr = function() {
		bm.buffer.data[8].value || (ys.drawImage(aDO[0], fn, fp), ys.drawImage(aDO[1], fn, Math.floor(fp + 3 * j / 2)))
	}
}

function cR() {
	var h, aDj, aDk, aDl, gap, aDm, aDn, aDo, aDp, aDq, aA3, aDr, hl, aDs, aBs, aDt, aDu;

	function aDy() {
		aDl = Math.floor(.2 * (a1.a2.it() ? .07 : .035) * i.iu), aDl = aAf(a1.a2.it() ? 3 : 1, aDl);
		var aE1 = i.j / (h.length + gap);
		aDl = aDl < aE1 ? aE1 : aDl, aBs = Math.floor((1 - gap) * aDl), aDj = 0, aE2()
	}

	function aE2() {
		aDj = (aDj = aDj < -20 ? -20 : aDj) > (h.length - 15) * aDl ? (h.length - 15) * aDl : aDj, aDn = Math.floor(aDj / aDl), aDo = (aDo = aDn + Math.floor(i.j / aDl)) > h.length - 1 ? h.length - 1 : aDo, aDn = (aDn = aDo < aDn ? aDo : aDn) < 0 ?
			0 : aDn;
		var lx = aDo;
		aDm = aDk / h[lx];
		for (var aC = aDo - 1; aDn <= aC; aC--) h[aC] > h[lx] && (lx = aC, aDm = aDk / Math.pow(h[aC], aDs))
	}

	function aE5(fn) {
		fn = Math.floor((aDj + i.j - fn - gap * aDl) / aDl);
		return (fn = fn < -1 ? -1 : -1 === fn ? 0 : fn > h.length - 1 ? -1 : fn) !== aDp && (aDp = fn, -1 === aDt && 0 === aDp && aU.aDv && (aDt = setInterval(aE6, 100)), 1)
	}

	function aE7(aC) {
		var aE9 = Math.floor(aDm * Math.pow(h[aC], aDs));
		ys.fillRect(aDj + i.j - (aC + 1) * aDl, i.k - aE9, aBs, aE9)
	}

	function aE6() {
		var hE;
		0 !== (aDp = 8 === ab.a5P() ? -1 : aDp) ? (aDu = (new Date).getTime(), clearInterval(aDt), aDt = -1) : (hE = h[1] / 864e3, -1 !== aDu && (hE += ((new Date).getTime() - aDu) * h[1] / 864e5, aDu = -1), 0 < hE && (h[0] += Math.floor(hE), bi
			.dy = !0))
	}
	this.aDv = !1, this.dr = function() {
		aDu = aDt = -1, aDp = -(aDs = 1), this.aDw = !1, hl = 0, aDr = new Date, aDj = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDk = Math.floor(.15 * i.k), aDq = (aDq = Math.floor((a1.a2.it() ? .018 : .0137) * i.iu)) < 2 ? 2 : aDq, aA3 = bD.tC.tF(1, aDq), aDy()
	}, this.aDz = function(aE0) {
		var aC;
		for (this.aDv = !0, aC = 0; aC < aE0.length; aC++) h.unshift(aE0[aC]);
		aDy(), bi.dy = !0
	}, this.aE3 = function() {
		aE2()
	}, this.a5m = function(fn, fp) {
		fp > i.k - .6 * aDk ? this.aDw ? fn !== hl && (aDj += fn - hl, hl = fn, aE2(), aE5(fn), this.aDw = -1 !== aDp, bi.dy = !0) : aE5(fn) && (bi.dy = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDp && (this.aDw = !1, aDp = -1, bi.dy = !0)
	}, this.a5p = function(fn, deltaY) {
		-1 !== aDp && (aDj += Math.floor(deltaY), aE2(), aE5(fn), bi.dy = !0)
	}, this.hu = function(fn, fp) {
		this.a5m(fn, fp), -1 !== aDp && (hl = fn, this.aDw = !0)
	}, this.a6B = function() {
		-1 !== aDp && (this.aDw = !1)
	}, this.yr = function() {
		ys.fillStyle = bE.qW;
		for (var aEA, month, eh, vd, aED, aEE, o6, aEF, aEG, aC = aDo; aDn <= aC; aC--) aE7(aC);
		this.aDv && 0 === aDn && (ys.fillStyle = bE.r5, aE7(0)), -1 !== aDp && (ys.fillStyle = bE.qV, aE7(aDp)), -1 !== aDp && (ys.font = aA3, bD.tC.textBaseline(ys, 2), (eh = new Date).setTime(aDr.getTime() - 1e3 * aDp * 60 * 60 * 24), month =
			"month", aEA = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eh), aEA = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eh)), aEA = aEA + ", " + eh.getUTCDate() + " " + month + " " + eh.getFullYear(), month = 1 === h[aDp] ? L(119) : L(120), month = bD.pg.a3X(h[aDp]) + " " + month, eh = Math.floor(ys.measureText(aEA).width), vd = Math
			.floor(ys.measureText(month).width), aED = Math.floor(.5 * (eh + aDq)), aEE = (aEE = aDj + i.j - (aDp + 1) * aDl) < aED ? aED : aEE > i.j - aED ? i.j - aED : aEE, o6 = i.k - Math.floor(aDm * Math.pow(h[aDp], aDs)), aEF = Math
			.floor(1.1 * aDq), aEG = o6 > i.k - aEF ? i.k - aEF : o6, ys.fillStyle = bE.qQ, ys.fillRect(i.j - vd - aDq, aEG - aEF, vd + aDq, aEF), ys.fillRect(aEE - aED, i.k - aEF, eh + aDq, aEF), ys.fillStyle = bE.qT, bD.tC.textAlign(ys, 2),
			ys.fillText(month, Math.floor(i.j - .5 * aDq), aEG), bD.tC.textAlign(ys, 1), ys.fillText(aEA, aEE, i.k), ys.strokeStyle = bE.qX, ys.lineWidth = 1, ys.beginPath(), ys.moveTo(0, o6), ys.lineTo(i.j, o6), ys.closePath(), ys.stroke())
	}
}

function cS() {
	var aA3, j, fp, aEH, aEI, aEJ, canvas, p4, aBl, a7p, aEK, aEL, aEM, aEN;
	this.fn = 0, this.k = 0, this.dr = function() {
		aEJ = aE.a8l, aEL = "rgba(0,100,0,0.8)", aEM = "rgba(150,0,0,0.8)", aBl = aEK = !0, a7p = ah.hi[aE.fQ], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.it() ? .305 : .24) * i.iu), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), aA3 = bD.tC.tF(1, Math.floor(.8 * this.k)), aEI = bD.tC.tF(1, Math.floor(.45 * this.k)), aEN = Math.floor(.5 * this.k), bV
			.a0j.font = aA3, fp = bf.gap, aEH = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), bD.tC.textBaseline(p4, 1), bD.tC.textAlign(p4, 1), this.aEO()
	}, this.aCE = function() {
		return a1.a2.it() && i.j < 1.2 * i.k
	}, this.aCs = function() {
		this.aCE() ? this.fn = i.j - j - bf.gap : this.fn = Math.floor(aW.aEP() + (i.j - aW.aEP() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nQ = function() {
		aBl && (aBl = !1, this.aEO())
	}, this.aEO = function() {
		p4.font = aA3, p4.clearRect(0, 0, j, this.k), p4.fillStyle = aEK ? aEL : aEM, p4.fillRect(0, 0, j, this.k), p4.fillStyle = bE.qV;
		var eq = this.aEQ(),
			aES = (this.aER(), p4.fillStyle = ah.hi[aE.fQ] >= af.ki(aE.fQ) ? bE.r2 : bE.qT, bD.pg.a3X(a7p)),
			aES = (p4.fillText(aES, Math.floor(j / 2), aEN), p4.measureText(aES).width),
			aET = (p4.font = aEI, p4.fillStyle = 9 === eq ? bE.rg : bE.qT, af.aEU),
			aEV = "+" + aET,
			vd = p4.measureText(aEV).width,
			aEW = Math.floor(this.k / 12),
			aES = .5 * (j + aES) + aEW;
		(aES + vd + aEH <= j || 1e3 <= aET && (aEV = "+" + Math.floor(aET / 1e3) + "K", aES + (vd = p4.measureText(aEV).width) + aEH <= j)) && p4.fillText(aEV, Math.floor(aES + .5 * vd), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p4.fillText(9 - eq, Math.floor(2 * aEH + aEW), Math.floor(.3 * this.k)), p4.fillStyle = bE.qT, __fx.utils.smoothFrame(p4, j, this.k) || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, 0, 1, this.k), p4.fillRect(0, this
				.k - 1, j, 1), p4.fillRect(j - 1, 0, 1, this.k))
	}, this.aEQ = function() {
		var eq = bi.kz() % 100,
			a1O = (eq = 9 - bO.g7(eq -= eq % 10, 10), Math.floor(eq * (this.k - aEH) / 9));
		return p4.fillRect(0, a1O, aEH, this.k - a1O), p4.fillRect(j - aEH, a1O, aEH, this.k - a1O), eq
	}, this.aER = function() {
		p4.fillRect(aEH, this.k - aEH, Math.floor((j - 2 * aEH) * ah.hi[aE.fQ] / aEJ), aEH)
	}, this.el = function() {
		var hE = aE.fQ;
		bD.h2.ht(hE) && (hE = ah.hi[hE] - ah.a7o[hE], a7p !== hE ? (aEJ = aAf(hE, aEJ), aEK = a7p < hE && 10 <= hE, a7p = hE, aBl = !0) : bi.kz() % 10 == 9 && (aBl = !0))
	}, this.yr = function() {
		0 === ah.ne[aE.fQ] || aE.i5 || 2 === ah.a7f[aE.fQ] || ys.drawImage(canvas, this.fn, fp)
	}
}

function cT() {
	var aEX, aEY, aEZ, aEa, aEb, aEc, aEd, aEe, aEf, aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEq, aEr, aEs, position, aEt, aEu, aEv, aEw, aEx, aEy = 1,
		aEz = 1,
		aF0 = "";
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

	function aF2() {
		aEd.clearRect(0, 0, aEX, aCT),
			aEd.fillStyle = aEx ? bE.rP : bE.rL,
			aEd.fillRect(0, 0, aEX, aEi),
			aEd.fillStyle = bE.qP,
			aEd.fillRect(0, aEi, aEX, aCT - aEi);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEb)
				position = (rivalsCount > aEb ? rivalsCount : aEb) - aEb;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kn[aE.fQ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aEs = -1;
		if (__fx.leaderboardFilter.enabled && aEs >= __fx.leaderboardFilter.filteredLeaderboard.length) aEs = -1;
		if (__fx.leaderboardFilter.showingRivals && aEs + position >= __fx.leaderboardFilter.rivalsData.length) aEs = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEb) aF4(ownClanIndex - position, bE.qs);
			})() :
			(playerPos >= position && aF4(playerPos - position, bE.qs),
				0 !== kn[aE.fQ] && 0 === position && aF4(0, bE.rX))
		),
		-1 !== aEs && aF4(aEs, bE.qU),
			aEd.fillStyle = bE.qP,
			//console.log("drawing", aEs),
			aEd.clearRect(0, aCT - __fx.leaderboardFilter.tabBarOffset, aEX, __fx.leaderboardFilter.tabBarOffset);
		aEd.fillRect(0, aCT - __fx.leaderboardFilter.tabBarOffset, aEX, __fx.leaderboardFilter.tabBarOffset);
		aEd.fillStyle = __fx.utils.lineColor(bE.qT),
			aEd.fillRect(0, aEi, aEX, 1),
			aEd.fillRect(0, aCT - __fx.leaderboardFilter.tabBarOffset, aEX, 1),
			__fx.leaderboardFilter.drawTabs(aEd, aEX, aCT - __fx.leaderboardFilter.tabBarOffset, bE.qs),
			__fx.utils.smoothFrame(aEd, aEX, aCT, bf.a3E) || (
				aEd.fillRect(0, 0, aEX, bf.a3E),
				aEd.fillRect(0, 0, bf.a3E, aCT),
				aEd.fillRect(aEX - bf.a3E, 0, bf.a3E, aCT),
				aEd.fillRect(0, aCT - bf.a3E, aEX, bf.a3E)),
			aEd.fillStyle = bE.qT, aEd.font = aEY, bD.tC.textBaseline(aEd, 1), bD.tC.textAlign(aEd, 1), aEd.fillText(aF0, Math.floor((aEX + aEi - 22) / 2), Math.floor(aEg + aEZ / 2));
		__fx.playerList.drawButton(aEd, 12, 12, aEi - 22);
		var fz, hF = playerPos < position + aEb - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hF = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEb; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hU[repId], ah.a2j[repId], ah.a7f[repId]]);
					ah.hU[repId] = rivalsEntry.territory;
					ah.a2j[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7f[repId] = 0;
				}
				for (aEd.font = aEa, bD.tC.textAlign(aEd, 0), fz = aEb - hF; 0 <= fz; fz--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fz + position];
					if (rivalsEntryLeft !== undefined)
						aF5(rivalsEntryLeft.representativeId), aF6(fz, fz + position, rivalsEntryLeft.representativeId);
				}
				for (bD.tC.textAlign(aEd, 2), fz = aEb - hF; 0 <= fz; fz--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fz + position];
					if (rivalsEntryRight !== undefined)
						aF5(rivalsEntryRight.representativeId), aF7(fz, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hU[entry[0]] = entry[1];
					ah.a2j[entry[0]] = entry[2];
					ah.a7f[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEb)
				position = (result.length > aEb ? result.length : aEb) - aEb;
			//if (position >= result.length) position = result.length - 1;
			for (aEd.font = aEa, bD.tC.textAlign(aEd, 0), fz = aEb - hF; 0 <= fz; fz--) {
				const pos = result[fz + position];
				if (pos !== undefined)
					aF5(md[pos]), aF6(fz, pos, md[pos]);
			}
			for (bD.tC.textAlign(aEd, 2), fz = aEb - hF; 0 <= fz; fz--) {
				const pos = result[fz + position];
				if (pos !== undefined)
					aF5(md[pos]), aF7(fz, md[pos]);
			}
		} else {
			for (aEd.font = aEa, bD.tC.textAlign(aEd, 0), fz = aEb - hF; 0 <= fz; fz--)
				aF5(md[fz + position]), aF6(fz, fz + position, md[fz + position]);
			for (bD.tC.textAlign(aEd, 2), fz = aEb - hF; 0 <= fz; fz--)
				aF5(md[fz + position]), aF7(fz, md[fz + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hF && (aF5(aE.fQ), bD.tC.textAlign(aEd, 0), aF6(aEb - 1, kn[aE.fQ], aE.fQ), bD.tC.textAlign(aEd, 2), aF7(aEb - 1, aE.fQ)), 0 === position && (hF = .7 * aEj / ac.get(4).height, aEd.setTransform(
			hF, 0, 0, hF, Math.floor(aEk + .58 * aEj + .5 * hF * ac.get(4).width), Math.floor(aEg + aEZ + .4 * aEj)), aEd.imageSmoothingEnabled = !0, aEd.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEd.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aF5(player) {
		aE.ib && (aEd.fillStyle = bj.aF9[bj.aFA[player]])
	}

	function aF4(aC, aFB) {
		aEd.fillStyle = aFB, aC = aEb - 1 < aC ? aEb - 1 : aC;
		aFB = Math.floor((aC === aEb - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEj), aFB = aC === aEb - 2 ? Math.floor(aEi + 9.15 * aEj) - Math.floor(aEi + 8.15 * aEj) : aFB;
		aEd.fillRect(0, Math.floor(aEi + (aC + (0 === aC ? 0 : .15)) * aEj), aEX, aFB)
	}

	function aF6(zv, a84, aC) {
		aEd.fillText(aEo[a84], aEk, Math.floor(aEg + aEZ + (zv + .5) * aEj)), 1 === ah.a7f[aC] && (aEd.font = "italic " + aEa);
		a84 = Math.floor(aEg + aEZ + (zv + .5) * aEj);
		aEd.fillText(ah.a2j[aC], aEl, a84), 0 !== ah.a7f[aC] && (aEd.font = aEa), aC < aE.l2 && 2 !== ah.a7f[aC] || aEd.fillRect(aEl, a84 + .35 * aEy, aEn[aC], Math.max(1, .1 * aEy))
	}

	function aF7(zv, aC) {
		aEd.fillText(ah.hU[aC], aEm, Math.floor(aEg + aEZ + (zv + .5) * aEj))
	}
	this.dr = function() {
		var aC;
		for (u.z.vQ[0] = 0, aEw = aEv = aEt = 0, aEx = aEu = !1, aEs = -1, aEb = a1.a2.it() ? 6 : 10, aEz = (position = 0) === (aEz = bm.buffer.data[11].value) ? 10 : 1 === aEz ? 5 : 1, aEr = !1, aEp = new Uint16Array(aEb + 1), aEq =
			new Uint32Array(aEb + 1), aEf = aE.fd, md = new Uint16Array(aEf), kn = new Uint16Array(aEf), aC = aEf - 1; 0 <= aC; aC--) md[aC] = aC, kn[aC] = aC;
		this.resize(!0), aEn = new Uint16Array(aE.fd);
		var aF1 = Math.floor(aEX - aEl - aEk - aEe);
		for (aEo = new Array(aE.fd), aEd.font = aEa, aC = aE.fd - 1; 0 <= aC; aC--) aEo[aC] = aC + 1 + ".", ah.a2j[aC] = bD.p4.a7J(ah.a4x[aC], aEa, aF1), aEn[aC] = Math.floor(aEd.measureText(ah.a2j[aC]).width);
		aF2()
	}, this.resize = function(dr) {
		if (aCT = a1.a2.it() ? (aEX = Math.floor(.335 * i.iu), Math.floor(aEb * aEX / 8)) : (aEX = Math.floor(.27 * i.iu), Math.floor(aEb * aEX / 10)), aEX = Math.floor(.97 * aEX), (aEc = document.createElement("canvas")).width = aEX, aEc
			.height = aCT, aEd = aEc.getContext("2d", {
				alpha: !0
			}), aEg = .025 * aEX, aEZ = .16 * aEX, aEh = 0 * aEX, aEi = Math.floor(.45 * aEg + aEZ), aEj = (aCT - aEZ - 2 * aEg - aEh) / aEb,
			aEc.height = aCT += aEj, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEj * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCT - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEX,
			aEY = bD.tC.tF(1, Math.floor(.55 * aEZ)), aEy = Math.floor((a1.a2.it() ? .67 : .72) * aEj), aEa = bD.tC.tF(0, aEy), aEd.font = aEa, aEk = Math.floor(.04 * aEX), aEl = Math.floor((a1.a2.it() ? .195 : .18) * aEX), aEe = Math.floor(aEd
				.measureText("00920600").width), aEd.font = aEY, aEm = aEX - aEk, !dr) {
			aEd.font = aEa;
			for (var aC = aE.fd - 1; 0 <= aC; aC--) aEn[aC] = Math.floor(aEd.measureText(ah.a2j[aC]).width);
			aF2()
		}
		aF0 = bD.p4.a7J(L(121), aEY, .96 * aEX)
	}, this.aEP = function() {
		return aEX
	}, this.nQ = function(c1, aF3) {
		(aF3 || aEr && (c1 || bi.kz() % aEz == 0)) && (aEr = !1, aF2())
	}, this.el = function() {
		! function() {
			for (var fz = aEf - 1; 0 <= fz; fz--) 0 === ah.ne[md[fz]] && ! function(fz) {
				var aFJ = md[fz];
				aEf--;
				for (var aC = fz; aC < aEf; aC++) md[aC] = md[aC + 1], kn[md[aC]] = aC;
				md[aEf] = aFJ, kn[md[aEf]] = aEf
			}(fz)
		}();
		for (var aFH, oN = aEf - 1, fz = 0; fz < oN; fz++) ah.hU[md[fz]] < ah.hU[md[fz + 1]] && (aFH = md[fz], md[fz] = md[fz + 1], md[fz + 1] = aFH, kn[md[fz]] = fz, kn[md[fz + 1]] = fz + 1);
		! function() {
			for (var eh = aEr, hF = (aEr = !0, kn[aE.fQ] >= aEb - 1 ? aEb - 2 : aEb - 1), aC = hF; 0 <= aC; aC--)
				if (aEp[aC] !== md[aC] || aEq[aC] !== ah.hU[md[aC]]) return;
			(hF != aEb - 2 || aEp[aEb] === kn[aE.fQ] && aEq[aEb] === ah.hU[aE.fQ]) && (aEr = eh)
		}();
		for (var aC = aEb - 1; 0 <= aC; aC--) aEp[aC] = md[aC], aEq[aC] = ah.hU[md[aC]];
		aEp[aEb] = kn[aE.fQ], aEq[aEb] = ah.hU[aE.fQ];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hu = function(fn, fp) {
		if (a3D(fn, fp)) {
			if (__fx.utils.isPointInRectangle(fn, fp, bf.gap + 12, bf.gap + 12, aEi - 22, aEi - 22)) __fx.playerList.display(ah.a4x);
			else {
				if (fp - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fn - bf.gap);
				fn = aFL(fp);
				0 <= fn ? (aEt = bi.eg, aEu = !0, aEv = aEw = fn, bM.a6P() && (fn = aDE(-1, aEw, aEb), aEs !== (fn = fn === aEb ? -1 : fn)) && (aEs = fn, aF2(), bi.dy = !0)) : (aEx && (aEx = !1, aF2(), bi.dy = !0), u.v(10, 0, new aFM({
					aFN: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aF2(), bi.dy = !0
	};

	function aFL(fp) {
		return (fp -= bf.gap + aEi) < 0 ? Math.floor(fp / aEj) - 1 : fp < (aEb - 1) * aEj ? Math.floor(fp / aEj) : fp < aCT - aEi ? aEb - 1 : (fp -= aCT - aEi, aEb + Math.floor(fp / aEj))
	}

	function a3D(fn, fp) {
		return fn >= bf.gap && fn < bf.gap + aEX && fp >= bf.gap && fp < bf.gap + aCT
	}
	this.a5m = function(fn, fp) {
		var eh, aFK;
		if (__fx.utils.isPointInRectangle(fn, fp, bf.gap + 12, bf.gap + 12, aEi - 22, aEi - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fn, fp, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fn - bf.gap)) return aFK = aFL(fp), fn = a3D(fn, fp), fp = !(!(aFK < 0 && fn) || bM.a6P()), aEu ? (eh = position, (position = aDE(0, position += aEv - aFK, aE.fd - aEb)) !== eh ? (aEx = fp,
			aFK = aDE(-1, aEv = aFK, aEb), aEs = aFK = aFK !== aEb && fn ? aFK : -1, aF2(), bi.dy = !0) : aEx !== fp && (aEx = fp, aF2(), bi.dy = !0), !0) : (aFK = (aFK = aDE(-1, aFK, aEb)) === aEb || !fn || bM.a6P() ? -1 : aFK, (aEs !==
			aFK || aEx !== fp) && (aEs = aFK, aEx = fp, aF2(), bi.dy = !0))
	}, this.a6B = function(fn, fp) {
		if (!aEu) return !1;
		aEu = !1;
		var aFK = aFL(fp);
		var isEmptySpace = false;
		return bM.a6P() && -1 !== aEs && (aEs = -1, aF2(), bi.dy = !0), bi.eg - aEt < 350 && aEw === aFK && -1 !== (aFK = (aFK = aDE(-1, aFK, aEb)) !== aEb && a3D(fn, fp) ? aFK : -1) && (fn = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aFK + position] === undefined, __fx.leaderboardFilter.rivalsData[aFK + position]?.representativeId ?? aE.fQ) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), md[__fx.leaderboardFilter.filteredLeaderboard[aFK + position] ?? (isEmptySpace = true, kn[aE.fQ])]) : md[aFK + position]),
			aFK === aEb - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kn[aE.fQ]) >=
			position + aEb - 1 && (fn = aE.fQ), !isEmptySpace && aE.ib && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fn, ah.a4x, aE.lM), 0 === ah.ne[fn] || isEmptySpace || aE.i5 && !aE.lM && !aE.hp && !aE
			.hq && fn !== aE.fQ || aI.o0(fn, 800, !1, 0)), !0
	}, this.a5p = function(fn, fp, deltaY) {
		var aFQ;
		return !(aEu || aE.o8 || (aFQ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a3D(fn, fp)) || (fn = (fn = aDE(-1, aFL(fp), aEb)) === aEb || bM.a6P() ? -1 : fn, 0 < deltaY ? position < aE.fd - aEb && (position += Math.min(aE.fd - aEb -
			position, aFQ), aEs = fn, aF2(), bi.dy = !0) : 0 < position && (position -= Math.min(position, aFQ), aEs = fn, aF2(), bi.dy = !0), 0))
	}, this.yr = function() {
		ys.drawImage(aEc, bf.gap, bf.gap)
	}
}

function cU() {
	var canvas, p4, fn, fp, aE9, aFR, gap, aFS, fontSize, aFT, aFU, aFV, aFW, aFX, aFY, aFZ, aFa, aFb;

	function aFf() {
		p4.clearRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qQ, p4.fillRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qn, fK = 0 < aFZ ? aFZ : aFW[4] / 1e4, p4.fillRect(0, aX.k - aE9 - 1, Math.floor(fK * aX.j), aE9), p4.fillStyle = bE.qT, p4.fillStyle =
			__fx.utils.lineColor(bE.qT), __fx.utils.smoothFrame(p4, aX.j, aX.k) || (p4.fillRect(0, 0, aX.j, 1), p4.fillRect(0, 0, 1, aX.k), p4.fillRect(aX.j - 1, 0, 1, aX.k), p4.fillRect(0, aX.k - 1, aX.j, 1)), p4.fillRect(0, aX.k - aE9 - 1, aX.j,
			1), p4.fillStyle = bE.qT;
		for (var fK, aFh, eh = 0, aC = 0; aC < aFV.length; aC++) aFX[aC] ? (bD.tC.textAlign(p4, 0), aFh = Math.floor((aFR - aE9 + 2 * aFS) * (aC - eh + 1) / (aFV.length + 1) - .7 * aFS), p4.fillText(aFV[aC], gap, aFh), bD.tC.textAlign(p4, 2), 5 ===
			aC && 0 !== ah.ne[aE.fQ] && ah.hi[aE.fQ] >= af.ki(aE.fQ) ? (p4.fillStyle = bE.rV, p4.fillText(aFd(aC), aX.j - gap, aFh), p4.fillStyle = bE.qT) : p4.fillText(aFd(aC), aX.j - gap, aFh)) : eh++
	}

	function aFd(aC) {
		return aC < 3 ? aFW[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pg.a8P(aFW[aC] / 100, 2) : aC < 7 ? bD.pg.a3X(aFW[aC]) : aC === 7 ? aX.aFi(aFW[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hU, aE.fQ) : __fx.utils.getDensity(aE.fQ)
	}

	function aFc() {
		ah.hU[aE.fQ] !== aFW[6] && (aFW[6] = ah.hU[aE.fQ], aFT++)
	}
	this.dr = function() {
		aFZ = aFa = 0, (aFU = new Array(8))[0] = L(122), aFU[1] = aE.lM ? L(26) : L(123), aFU[2] = L(124), aFU[3] = L(125), aFU[4] = L(126), aFU[5] = L(127, 0, "Interest"), aFU[6] = L(128), aFU[7] = L(129),
			aFU.push("Max Troops", "Density"), // add aFU
			(aFV = new Array(aFU.length)).fill(""), (aFW = new Array(aFU.length))[0] = aE.lM ? 0 : aE.l2, aFW[1] = aE.lM ? am.lY : aE.lO, aFW[2] = aE.a4G, aFW[3] = 0, aFW[4] = bO.g7(1e4 * ah.hU[0], Math.max(aE.km, 1)), aFW[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g7(700 * aE.data.iIncomeValue, 64) : bO.g7(700 * aE.data.iIncomeData[aE.fQ], 64), aFW[6] = 0, aFc(), aFW[7] = 0, aFY = aFd(6), (aFX = new Array(aFU.length)).fill(!0), aFb = 0, aFb =
			aE.lM ? (aFX[0] = !1, aFX[2] = !1, aFX[3] = !1, 3) : (aFX[3] = !1, 1), aFT = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.it() ? .1646 : .126) * 1.25 * i.iu), this.k = Math.floor(1.18 * this.j), aE9 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aFS = .04 * this.j, aFR = this.k, this.k -= Math.floor(aFb * (this.k -
			2 * aE9) / aFU.length), fontSize = Math.floor(.7 * (aFR - aE9) / aFU.length);
		var aA3 = bD.tC.tF(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(aA3, j) {
				for (var aC = 0; aC < aFV.length; aC++) aFV[aC] = bD.p4.a7J(aFU[aC], aA3, j)
			}((p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = aA3, .575 * this.j), bD.tC.textBaseline(p4, 1), p4.lineWidth = 1, this.a8e(), this.aCs(), aV.aCs(), aFf()
	}, this.aCs = function() {
		fn = i.j - this.j - bf.gap
	}, this.aFg = function() {
		fp = bf.gap
	}, this.a8e = function() {
		fp = bf.gap + (aV.aCE() && 0 !== ah.ne[aE.fQ] && !aE.i5 ? aV.k + bf.gap : 0)
	}, this.nQ = function(c1) {
		(c1 || 100 <= aFT) && (aFT = 0, aFf())
	}, this.a9P = function() {
		return aFW[7]
	}, this.aFi = function(value) {
		var lx = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lx) / 1e3);
		return value < 10 ? lx + ":0" + value : lx + ":" + value
	}, this.el = function() {
		var aFt, per;
		aFX[0] && aE.a4H - aE.a4G !== aFW[0] && (aFW[0] = aE.a4H - aE.a4G, aFT++), am.lY - aFW[0] !== aFW[1] && (aFW[1] = am.lY - aFW[0], aFT++), this.nH(), (aFt = af.aFu(aE.fQ)) !== aFW[5] && (aFW[5] = aFt, aFT++), aFc(), aFW[7] += bi.aFv, aFt =
			aFd(7), aFY !== aFt && (aFY = aFt, aFT += 100), aFt = aE.ib ? bk.lZ() : ah.hU[md[0]], per = bO.g7(1e4 * aFt, Math.max(aE.km, 1)), aFW[3] = aFt, aFW[4] !== per && (aFT++, aFW[4] = per), 8 === aE.lK && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h2.ht(aC)) return bU.a3s.a4D(), 1;
				return
			}() || aFW[3] < aE.km || ! function() {
				for (var aC = am.lY - 1; 0 <= aC; aC--)
					if (0 < ah.h8[am.ld[aC]].length) return;
				return 1
			}() || bQ.lr.aFs().length || aE.ib && bk.lZ(1) < aE.km || bU.a3s.a4D()
	}, this.nH = function() {
		aFX[2] && aE.a4G !== aFW[2] && (aFW[2] = aE.a4G, aFT += 2 === aE.a4E ? 100 : 1)
	}, this.aFp = function() {
		return aFW[3] === aE.km
	}, this.aFw = function(aC) {
		var vt, aFx, eh;
		return 2 !== aE.a4E && (aC % 2 == 1 && (aW.nQ(1, 1), bi.dy = !0), aC === aE.a8n ? (aFZ = 0, aFf(), !1) : (-1 !== aC || 0 !== aFa) && (aFx = aFZ, aFZ = aE.hp ? aC / aE.a8n : (eh = performance.now(), 0 <= aC && (vt = eh - 392 * aC, aFa =
			0 === aC || vt < aFa ? vt : aFa), 1 < (aFZ = (eh - aFa) / (392 * aE.a8n)) ? 1 : aFZ), aFf(), aFZ !== aFx))
	}, this.yr = function() {
		ys.drawImage(canvas, fn, fp)
	}
}

function cV() {
	var iT, aFy, j, k, aCy, aFz, aG0, aCF, canvas, nr, aG1;

	function a2M() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dr = function() {
		aG1 = iT = !1, aCy = .61, aFz = .07, aG0 = .09, nr = aCF = k = 0
	}, this.resize = function() {
		var p4, o5, eq, aG6, aG7, aA8;
		iT && (j = aG2(j = a1.a2.it() ? Math.floor(.69 * i.iu) : Math.floor(.5 * i.iu), aAf(i.j - 2 * bf.gap, 10)), j = aG2(j, Math.floor(3.57 * aAf(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), o5 = Math.floor(1 + k / 40), p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qQ, p4.fillRect(o5, o5, j - 2 * o5, k - 2 * o5), p4.lineJoin = "bevel", p4.lineWidth = 2 * o5, p4.strokeStyle = bE.qT, p4.strokeRect(o5, o5, j - 2 * o5,
				k - 2 * o5), p4.imageSmoothingEnabled = !1, eq = ac.get(aFy), aG6 = eq.width, aA8 = (1 === aFy ? .85 : 21 === aFy ? .666 : .9) * aCy * k / (aG7 = eq.height), p4.setTransform(aA8, 0, 0, aA8, Math.floor((j - aA8 * aG6) / 2),
				Math.floor((k - aA8 * aG7) / 2)), p4.drawImage(eq, 0, 0), p4.setTransform(1, 0, 0, 1, Math.floor(j - aG0 * k - aFz * k - o5), Math.floor(o5 + aFz * k)),
			function(p4, fg) {
				p4.lineWidth = Math.floor(1 + k / 80), p4.strokeStyle = bE.qT, p4.beginPath(), p4.moveTo(0, 0), p4.lineTo(fg, fg), p4.moveTo(0, fg), p4.lineTo(fg, 0), p4.stroke()
			}(p4, Math.floor(aG0 * k)), p4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g8, aG4, aCk, aG5) {
		iT || aE.hq || aG5 && aG1 || (aFy = aCk ? 21 : g8 ? 1 : 2, iT = aG1 = !0, this.resize(), aM.ub(), aS.aCf(), nr = bi.eg, aCF = aG4 ? 1 : 0)
	}, this.el = function() {
		!iT || 1 <= aCF || (aCF = 1 < (aCF += 5e-4 * (bi.eg - nr)) ? 1 : aCF, nr = bi.eg, bi.dy = !0)
	}, this.hu = function(fn, fp) {
		return !(!iT || aCF <= 0 || (fn -= Math.floor((i.j - j) / 2), fp -= a2M(), fn < 0) || fp < 0 || j < fn || k < fp || (j - k / 3 < fn && fp < k / 3 && (iT = !1, bi.dy = !0), 0))
	}, this.yr = function() {
		!iT || aCF <= 0 || (ys.globalAlpha = aCF, ys.drawImage(canvas, Math.floor((i.j - j) / 2), a2M()), ys.globalAlpha = 1)
	}
}

function dW() {
	var aG9, aGA = new Uint8Array(5),
		aGB = new Uint8Array(5);
	this.aGC = new aGD, this.dr = function() {
		for (var g8 = bm.buffer.data[119].value, aC = 0; aC < aGA.length; aC++) aGA[aC] = (g8 >> 2 * aC) % 4
	}, this.a90 = function() {
		aG9 = [L(130), "", L(131, [ba.aGE[28]]), L(132, [ba.aGE[26]]), L(133, [ba.aGE[0]])], this.aGC.dr()
	}, this.el = function() {
		this.aGC.el()
	}, this.a9m = function(id) {
		1 < id && bM.u5() || ! function(eP) {
			if (3 === aGA[eP] || 1 === aGB[eP]) return;
			if (aGB[eP] = 1, !(Math.random() < .6)) {
				aGA[eP]++;
				for (var g8 = 0, aC = 0; aC < aGA.length; aC++) g8 += aGA[aC] << 2 * aC;
				bm.rz.q5(119, g8)
			}
			return 1
		}(id) || aO.aAl(aG9[id])
	}
}

function aGD() {
	var aGG;
	this.dr = function() {
		aGG = !1
	}, this.el = function() {
		var hE;
		if (function() {
				if (!aGG) {
					if (bi.kz() % 30 != 9) return;
					if (!bD.h2.mZ(90)) return;
					aGG = !0
				}
				return 1
			}() && (! function() {
				var q9 = aO.aB7(956);
				if (q9) {
					if (bD.h2.m0(q9.player)) return 1;
					aO.aB6(956, 0)
				}
				return
			}() && (-1 === (hE = (aE.ib ? function() {
				var id = bk.lb(),
					fg = am.lY;
				if (bj.lP[id])
					for (var x0 = am.ld, fe = bj.fe, aC = 0; aC < fg; aC++) {
						var hE = x0[aC];
						if (fe[hE] !== id) return hE
					} else if (1 < fg) return md[fg - 1];
				return -1
			} : function() {
				for (var aGO = am.lY, lw = am.ld, aGP = kn, aC = 0; aC < aGO; aC++) {
					var hE = lw[aC];
					if (0 !== aGP[hE]) return hE
				}
				return -1
			})()) ? ! function() {
				var q9 = aO.aB7(957);
				if (q9 && q9.aAb) {
					if (ad.fX(q9.aAb.fS << 2)) return 1;
					aO.aB6(957, 0)
				}
				return
			}() : (aO.a2i(0, L(134, [ah.a2j[hE]]), 956, hE, bE.qT, bE.qQ, -1, !0), 0)))) {
			var fg = ap.jg.mC;
			if (0 !== fg)
				for (var buffer = ap.jg.buffer, aC = 0; aC < fg; aC++) {
					var fS = buffer[aC];
					if (ad.fX(fS << 2)) return void aO.a2i(0, L(135, [bP.fo(fS), bP.fq(fS)]), 957, 0, bE.qT, bE.qQ, -1, !0, void 0, {
						fz: 1,
						fS: fS
					})
				}
		}
	}
}

function dX() {
	this.aGQ = new aGR, this.dr = function() {
		this.aGQ.resize()
	}
}

function aGR() {
	this.resize = function() {
		var aC, aGS = document.head.querySelector("style#ss");
		if (aGS)
			for (aC = aGS.sheet.cssRules.length - 1; 0 <= aC; aC--) aGS.sheet.deleteRule(0);
		else(aGS = document.createElement("style")).id = "ss", document.head.appendChild(aGS);
		var aD5 = "::-webkit-scrollbar",
			aGT = bD.tC.tn(bf.v9),
			ie = bD.tC.tn(Math.max(bD.tC.tD(.012), 8));
		try {
			aGS.sheet.insertRule(aD5 + "{width:" + ie + ";height:" + ie + ";}", aGS.sheet.cssRules.length), aGS.sheet.insertRule(aD5 + "-thumb{background-color:white;}", aGS.sheet.cssRules.length), aGS.sheet.insertRule(aD5 +
				"-track{background:" + bE.qP + ";}", aGS.sheet.cssRules.length), aGS.sheet.insertRule(aD5 + "-track:horizontal{border-top:" + aGT + " solid white;}", aGS.sheet.cssRules.length), aGS.sheet.insertRule(aD5 +
				"-track:vertical{border-left:" + aGT + " solid white;}", aGS.sheet.cssRules.length), aGS.sheet.insertRule(aD5 + "-button{display:none;}", aGS.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aGS.sheet.cssRules.length - 1; 0 <= aC; aC--) aGS.sheet.deleteRule(0)
		}
	}
}

function dp() {
	this.data = new aGU, this.aGV = new aGW
}

function aGU() {
	var aGX = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGX[id]
	}
}

function uV(id) {
	this.canvas = document.createElement("canvas");
	var aGY = this.canvas.getContext("2d"),
		aGZ = 0;
	this.resize = function(size) {
		var aGa = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.tC.tn(size), aGa !== aGZ && (aGZ = aGa, this.canvas.width = this.canvas.height = aGa, bz.aGV.yr(aGY, bz.data.get(id), aGa))
	}
}

function aGW() {
	this.yr = function(il, h, size) {
		var id, pc, oH = size / 100,
			fg = h.length,
			aC = 0;
		for (il.clearRect(0, 0, size, size), il.lineJoin = "round", il.lineCap = "round"; aC < fg;)
			if (0 === (id = h[aC++])) il.beginPath();
			else if (1 === id) il.moveTo(oH * h[aC], oH * h[aC + 1]), aC += 2;
		else if (2 === id) il.lineTo(oH * h[aC], oH * h[aC + 1]), aC += 2;
		else if (3 === id) il.closePath();
		else if (4 === id) il.fill();
		else if (5 === id) il.stroke();
		else if (6 === id) pc = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", il.fillStyle = il.strokeStyle = pc, aC += 4;
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
	this.aGb = !1, this.oV = !1, this.a8i = !1, this.aGc = [0, 0, 0, 0], this.render = function() {
		var o5, o6, oI, oJ;
		this.a8i = this.a8i || this.oV, (this.oV || this.aGb && this.a8i) && (o5 = bd.aGd[0], o6 = bd.aGd[1], oI = bd.aGd[2], oJ = bd.aGd[3], o5 = o5 < this.aGc[0] ? this.aGc[0] : o5, o6 = o6 < this.aGc[1] ? this.aGc[1] : o6, oI = oI > this.aGc[
				2] ? this.aGc[2] : oI, oJ = oJ > this.aGc[3] ? this.aGc[3] : oJ, this.oV = !1, this.aGb = !1, o5 === this.aGc[0] && o6 === this.aGc[1] && oI === this.aGc[2] && oJ === this.aGc[3] ? this.a8j() : o5 <= oI && o6 <= oJ && a92
			.putImageData(a93, 0, 0, o5, o6, oI - o5 + 1, oJ - o6 + 1))
	}, this.a8j = function() {
		this.a8i && this.aGc[2] >= this.aGc[0] && this.aGc[3] >= this.aGc[1] && a92.putImageData(a93, 0, 0, this.aGc[0], this.aGc[1], this.aGc[2] - this.aGc[0] + 1, this.aGc[3] - this.aGc[1] + 1), this.a8i = !1
	}, this.a4Q = function() {
		this.aGc[2] >= this.aGc[0] && this.aGc[3] >= this.aGc[1] && a92.putImageData(a93, 0, 0, this.aGc[0], this.aGc[1], this.aGc[2] - this.aGc[0] + 1, this.aGc[3] - this.aGc[1] + 1), this.a8i = !1
	}, this.dr = function() {
		var fn, fp;
		this.aGb = !1, this.oV = !1, this.a8i = !1, this.aGc[0] = bV.fr, this.aGc[1] = bV.fs, this.aGc[2] = this.aGc[3] = 0;
		loop: for (fn = 1; fn < bV.fr - 1; fn++)
			for (fp = bV.fs - 2; 1 < fp; fp--)
				if (1 === aGe[ad.a1t(fn, fp) + 2]) {
					this.aGc[0] = fn;
					break loop
				} loop: for (fp = 1; fp < bV.fs - 1; fp++)
			for (fn = bV.fr - 2; 1 < fn; fn--)
				if (1 === aGe[ad.a1t(fn, fp) + 2]) {
					this.aGc[1] = fp;
					break loop
				} loop: for (fn = bV.fr - 2; 0 < fn; fn--)
			for (fp = bV.fs - 2; 1 < fp; fp--)
				if (1 === aGe[ad.a1t(fn, fp) + 2]) {
					this.aGc[2] = fn;
					break loop
				} loop: for (fp = bV.fs - 2; 0 < fp; fp--)
			for (fn = bV.fr - 2; 1 < fn; fn--)
				if (1 === aGe[ad.a1t(fn, fp) + 2]) {
					this.aGc[3] = fp;
					break loop
				}
	}
}

function L(value, aGf, zP, aGg) {
	var pc = "number" == typeof value ? bA.aGh[value] : value;
	if (zP && bA.aGi() && (pc = zP), !aGf) return aGg ? pc.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pc;
	for (var fg = aGf.length, aC = 0; aC < fg; aC++)
		for (var fz = 0; fz < 3; fz++) pc = pc.replace("{" + (10 * fz + aC) + "}", aGf[aC]);
	return pc
}

function c9() {
	this.data = new aGj;
	var aGk = (new aGl).L84,
		aGn = (this.aGh = aGk, !(this.aGm = "en"));
	this.dr = function() {
		var pc, h;
		aGn = !1, ("en" === (pc = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGh = aGk, bA.aGm = pc, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pc = bm.buffer.data[146].value,
			(h = bm.tv.zb(pc, !1)).length === pc) && !!bD.tm.a6u(h) && function(h) {
			for (var fg = h.length, k = 0; k < fg; k++) h[k] = h[k].replace("&#39;", "'");
			var aGt = bm.tv.zb(fg, !0);
			if (fg !== aGt.length) return !1;
			if (!bD.tm.a6u(aGt)) return !1;
			for (var lx = aGk.length, aE0 = new Array(lx), aGu = lx === fg, h9 = Math.min(fg, lx), aC = 0; aC < lx; aC++)
				if (aE0[aC] = aGk[aC], aC < fg && aGt[aC] === aE0[aC]) aE0[aC] = h[aC];
				else {
					aGu = !1;
					for (var g0 = 0; g0 < h9; g0++)
						if (aGt[g0] === aE0[aC]) {
							aE0[aC] = h[g0];
							break
						}
				} return bA.aGh = aE0, bA.aGm = bm.buffer.data[12].value, aGu
		}(h)) || (aGn = !0)
	}, this.dt = function() {
		bj.ds(), aF.ds(), bh.ds(), bg.ds(), aP.dr(), br = new eF
	}, this.aGi = function() {
		return this.aGh === aGk || !aGk.length
	}, this.aGv = function() {
		var aGw;
		return !!aGn && (aGn = !1, 0 !== aGk.length) && (aGw = bm.buffer.data[12].value, b1.en.aGx(0, aGw.slice(0, 20)), !0)
	}, this.aGy = function(h) {
		h.length !== aGk.length ? 8 === u.vX && u.a5T().aGz(30, 0, 1) : (this.aGh = h, this.aGm = bm.buffer.data[12].value, bm.rz.q5(145, this.aGm), bm.rz.q5(146, h.length), bm.tv.zh(h, !1), bm.tv.zh(aGk, !0), 8 === u.vX ? u.a5T().aGz(30) : 0 ===
			ab.a5P() && 5 === u.vX && u.z.aH0())
	}, this.aH1 = function() {
		var zk, h = navigator.languages;
		return h && h.length ? (zk = Math.max(bA.data.aH2(h[0]), 0), 1 === h.length ? [zk, zk] : [zk, Math.max(bA.data.aH2(h[1]), 0)]) : [0, 0]
	}
}

function aGj() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aH3 = function() {
		for (var aH4 = [], h = this.h, fg = h.length, aC = 0; aC < fg; aC++) aH4.push(h[aC]);
		var aH5 = bm.buffer.data[12].zP;
		for (aC = 0; aC < fg; aC++)
			if (aH4[aC] === aH5) {
				aH4.splice(aC, 1), fg--;
				break
			} aH4.sort(), fg++, aH4.unshift(aH5);
		try {
			if ("undefined" == typeof Intl) return aH4;
			for (aC = 0; aC < fg; aC++) {
				var pc = new Intl.DisplayNames([aH4[aC]], {
					type: "language"
				}).of(aH4[aC]);
				pc !== aH4[aC] && (aH4[aC] = aH4[aC] + ": " + pc)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aH4
	}, this.aH7 = function(aH8) {
		for (var pc = bm.buffer.data[12].value, fg = aH8.length, aC = 0; aC < fg; aC++)
			if (pc === aH8[aC].split(":")[0]) return aC;
		return 0
	}, this.aH2 = function(aH9) {
		if (aH9 && !(aH9.length < 2)) {
			aH9 = aH9.split("-")[0].toLowerCase();
			for (var h = this.h, fg = h.length, aC = 0; aC < fg; aC++)
				if (aH9 === h[aC]) return aC
		}
		return -1
	}
}

function aGl() {
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

function dw() {
	var fn, fp, k, wQ, aHA, aHB, aHC, aHD, aHE, j, a7X, aHF;
	this.iT = !1, this.dr = function(pc, aHG) {
		if (1 === a1.id && 13 <= a1.eA && a1.eA < 18) return aHG ? void(a7X = pc) : a7X !== pc ? void 0 : void a1.zZ.saveString(200, pc);
		aHG && (a7X = pc, (aHF = document.createElement("a")).appendChild(document.createTextNode(a7X)), this.iT = !0, aHF.title = a7X, aHF.target = "_blank", aHF.href = a7X, aHF.style.textAlign = "center", aHF.style.color = bE.qT, aHF.style
			.position = "absolute", aHF.style.padding = "0px", aHF.style.margin = "0px", this.resize(), document.body.appendChild(aHF), bi.dy = !0)
	}, this.ub = function() {
		return !(!this.iT || (u.removeChild(document.body, aHF), this.iT = !1))
	}, this.hu = function(j1, j2) {
		return !!this.iT && ((j1 < fn || j2 < fp || fn + j < j1 || fp + k < j2 || fn + j - wQ < j1 && j2 < fp + wQ) && (bi.dy = !0, this.iT = !1, u.removeChild(document.body, aHF)), !0)
	}, this.resize = function() {
		var aA3, aHH;
		this.iT && (aHD = Math.floor(.8 * (a1.a2.it() ? i.j > i.k ? .6 : .55 : .4) * i.iu), wQ = Math.floor(.15 * aHD), aHA = Math.floor(.35 * wQ), aHB = Math.floor(.5 * wQ), aHC = Math.floor(2.5 * aHB), k = wQ + aHA + 3 * aHB, aA3 = bD.tC.tF(1,
			aHA / i.l), aHE = Math.floor(i.l * aR.measureText(a7X, aA3)), aHH = j = (aHD < aHE ? aHE : aHD) + 2 * aHC, j = Math.min(j, i.j - 2 * (a1.a2.it() ? 2 : 1) * bf.gap), aA3 = bD.tC.tF(1, j / aHH * aHA / i.l), aHE = Math.floor(i
			.l * aR.measureText(a7X, aA3)), fn = Math.floor((i.j - j) / 2), fp = Math.floor((i.k - k) / 2), aHF.style.font = aA3, aHF.style.top = Math.floor((fp + 1.4 * aHB + wQ) / i.l) + "px", aHF.style.left = Math.floor((fn + (j -
			aHE) / 2) / i.l) + "px")
	}, this.yr = function() {
		this.iT && (ys.fillStyle = bE.qQ, ys.fillRect(fn, fp + wQ, j, k - wQ), ys.fillStyle = bE.ri, ys.fillRect(fn, fp, j, wQ), ys.fillStyle = bE.qT, ys.lineWidth = bf.a3E, ys.strokeStyle = bE.qT, ys.strokeRect(fn, fp, j, k), ys.fillRect(fn,
			fp + wQ, j, bf.a3E), ys.font = bD.tC.tF(1, .48 * wQ), bD.tC.textAlign(ys, 1), bD.tC.textBaseline(ys, 1), ys.fillText(L(136), Math.floor(fn + (j - .5 * wQ) / 2), Math.floor(fp + .55 * wQ)), aN.aAF(Math.floor(fn + j - .8 * wQ),
			Math.floor(fp + .25 * wQ), Math.floor(.5 * wQ)), ys.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dv() {
	var gap, aFU, fn = [0, 0, 0, 0, 0],
		fp = [0, 0, 0, 0, 0],
		oH = [1, 1, 1, 1, 1],
		g8 = [!0, !0, !0, !1, !1],
		eq = (this.gT = [!0, !0, !0, !1, !1], null);
	this.aHI = function(a75, aHJ) {
		eq = a75, g8 = aHJ, aFU = [bN.aHK, bN.a5L, bN.aHL, bN.aHL, bN.aHM], this.dr()
	}, this.dr = function() {
		if (ac.vx()) {
			var aC, vc = Math.floor((a1.a2.it() ? .261 : .195) * i.iu),
				vd = Math.floor(.9 * vc),
				aCy = Math.floor(.17 * vd);
			if (gap = a1.a2.it() ? 2 * bf.gap : bf.gap, oH[0] = vc / eq[0].width, oH[1] = vd / eq[1].width, oH[2] = aCy / eq[2].height, oH[3] = aCy / eq[3].height, oH[4] = aCy / eq[4].height, oH[2] *= 1.7, oH[3] *= 1.07, fn[0] = gap, fn[1] = gap,
				fn[2] = gap, fn[3] = gap, fn[4] = Math.floor(2 * gap + oH[3] * eq[3].width), fp[0] = gap, fp[1] = fp[0] + gap + oH[0] * eq[0].height, fp[2] = fp[1] + gap + oH[1] * eq[1].height, fp[3] = fp[2] + gap + oH[2] * eq[2].height, fp[4] =
				fp[3], !g8[0])
				for (aC = 0; aC < 5; aC++) fp[aC] -= oH[0] * eq[0].height + gap;
			if (!g8[1])
				for (aC = 2; aC < 5; aC++) fp[aC] -= oH[1] * eq[1].height + gap
		}
	}, this.iT = function() {
		return !(7 === ab.a5P() && a1.a2.it())
	}, this.hu = function(j1, j2) {
		if (eq && this.iT())
			for (var aC = g8.length - 1; 0 <= aC; aC--)
				if (g8[aC] && this.gT[aC] && fn[aC] < j1 && fp[aC] < j2 && j1 < fn[aC] + oH[aC] * eq[aC].width && j2 < fp[aC] + oH[aC] * eq[aC].height) return u.v(9, u.vX, new aHN(L(137), bD.tC.a7W(aFU[aC]))), !0;
		return !1
	}, this.yr = function() {
		if (eq && this.iT()) {
			var aC;
			for (ys.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g8[aC] && this.gT[aC] && (ys.setTransform(oH[aC], 0, 0, oH[aC], fn[aC], fp[aC]), ys.drawImage(eq[aC], 0, 0));
			ys.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dg() {
	this.aHO = 0, this.pq = null, this.ps = null, this.tb = null, this.lr = null, this.z = null, this.y4 = null, this.xd = null, this.message = null, this.pe = null, this.qB = null, this.aHP = null, this.aHQ = new aHR, this.xB = new aHS, this.fD = 0,
		this.aDr = 0, this.dr = function() {
			this.aDr = bi.eg, this.aHO = bJ.f7.f8(bm.buffer.data[105].value, 5), this.ps = new aHT, this.tb = new aHU, this.lr = new aHV, this.z = new aHW, this.y4 = new aHX, this.xd = new aHY, this.message = new aHZ, this.pe = new aHa, this.qB =
				new aHb, this.aHP = new aHc, bt.dr(), this.fD = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fB()
		}, this.xy = function() {
			this.xB.aHd(), this.qB && this.qB.xy(), this.pq = null, this.ps = null, this.tb = null, this.lr = null, this.z = null, this.y4 = null, this.xd = null, this.message = null, this.pe = null, this.qB = null, this.aHP = null, this.fD = 0, bt
				.xy(), a1.a2.setState(0)
		}
}

function aHT() {
	function aHf() {
		bq.z.aHg += 29 === u.vX && 1 === bq.z.aHh
	}

	function aIB(self, kI, h9) {
		for (var h = self.x0.splice(kI, h9), aC = 0; aC < h.length; aC++) aI1(self, h[aC]);
		aHf()
	}

	function aI1(self, hE) {
		var self = self.xf,
			pA = self.pop();
		pA !== hE && ((self[hE.aHn] = pA).aHn = hE.aHn)
	}
	this.x0 = [], this.xf = [], this.aHe = [], this.aHi = function(pk, username, xo, a84, aHj, elo, color, a05, aHk, code, xi, xl) {
		username = this.aHm(pk, username, xo, a84, aHj, elo, color, a05, aHk, code);
		username.xi = xi, username.xl = xl, this.x0.push(username), username.aHn = this.xf.length, this.xf.push(username), bq.aHO === pk && (bq.pq = username), bq.aHP.aHo(pk) && (username.xq = 1), bq.qB.aHp(pk), aHf()
	}, this.aHm = function(pk, username, xo, a84, aHj, elo, color, a05, aHk, code) {
		return {
			pk: pk,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f7.a3X(pk, 2),
			aHq: __fx.nameFilter.filter(username),
			xo: xo,
			a84: a84,
			aHj: aHj,
			elo: elo,
			color: color,
			a05: a05,
			aHk: aHk
		}
	}, this.aHr = function(eP, xo, a84, aHj, elo, a05, color) {
		eP = this.x0[eP];
		eP.xo = xo, eP.a84 = a84, eP.aHj = aHj, eP.elo = elo, eP.a05 = a05, eP.color = color, bq.qB.aHp(eP.pk), aHf()
	}, this.aHs = function(eP, code) {
		eP = this.x0[eP];
		1 === code && (eP.username = eP.aHq), bq.qB.aHp(eP.pk), aHf()
	}, this.aHt = function(eP, aHu) {
		var eP = this.x0[eP],
			aHv = eP.username,
			aDA = eP.username !== eP.aHq,
			aHw = "Redacted " + bI.f7.a3X(eP.pk, 2);
		eP.aHq = aHu ? "[" + bD.pg.pu(eP.aHq) + "] " + aHw : aHw, aDA || (eP.username = eP.aHq), aHv.indexOf("Redacted") < 0 && (eP.aHx = aHv), bq.qB.aHp(eP.pk), aHf()
	}, this.aHy = function(eP, username) {
		var eP = this.x0[eP],
			aDA = eP.username !== eP.aHq;
		eP.aHq = username, aDA || (eP.username = username), eP.pk === bq.aHO && bq.lr.aHz(username), bq.qB.aHp(eP.pk), aHf()
	}, this.aI0 = function(eP) {
		eP = this.x0.splice(eP, 1)[0];
		aI1(this, eP), this.aHe.push(eP), 1e3 < this.aHe.length && this.aHe.shift(), aHf()
	}, this.aI2 = function(eP, target, xi, xl) {
		var x0 = this.x0,
			eP = x0.splice(eP, 1)[0];
		x0.splice(target, 0, eP), !eP.xi && xi && bq.aHP.join(eP), eP.xi = xi, eP.xl = xl, aHf()
	}, this.aI3 = function(xi) {
		for (var x0 = this.x0, fg = x0.length, aC = 0; aC < fg; aC++)
			if (x0[aC].xi === xi) return aC;
		return fg
	}, this.aI4 = function(kI) {
		for (var x0 = this.x0, fg = x0.length, xi = kI < fg ? x0[kI].xi : 0, aC = kI; aC < fg && x0[aC].xi === xi && !x0[aC].xl;) aC++;
		return aC
	}, this.aI5 = function(kI, aI6, aI7) {
		for (var aI8 = this.aI4(kI), h = [], aC = 0; aC < aI6; aC++) aI7 && 511 === aI7[aC] || h.push(this.x0[aI8 + aC]);
		return h
	}, this.aI9 = function(kI, h9, aI6, aI7) {
		for (var aIA = this.aI5(kI, aI6, aI7), aC = aIA.length - 1; 0 <= aC; aC--) aIB(this, this.x0.indexOf(aIA[aC], kI), 1);
		aIB(this, kI, h9)
	}, this.aIC = function(xi) {
		for (var x0 = this.x0, aID = 0; aID < x0.length && x0[aID].xi === xi;) aID++;
		for (var left = x0.splice(0, aID), aC = 0; aC < aID; aC++) left[aC].xi = 0, left[aC].xl = 0, x0.push(left[aC]);
		aHf()
	}, this.pt = function(pk) {
		for (var x0 = this.x0, lx = x0.length, fz = 0; fz < lx; fz++)
			if (pk === x0[fz].pk) return x0[fz];
		return null
	}
}

function aHU() {
	this.tb = [], this.xE = 0, this.xF = 0, this.aIE = 0;
	var aIG = this.aIF = 0,
		aIH = 0;
	this.aII = function() {
		for (var self, fg = bK.sc(4), tb = new Array(fg), aC = 0; aC < fg; aC++) tb[aC] = {
			id: bK.sc(13),
			xL: bK.sc(12),
			h9: bK.sc(16),
			aI6: bK.sc(16),
			nZ: bK.sc(10),
			fM: bK.sc(6),
			mapSeed: bK.sc(14),
			wy: bK.sc(4),
			xP: bK.sc(1)
		};
		this.tb = tb, __fx.lobbyReminders.setRooms(this.tb), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aIK({
				id: 7,
				s: text
			})
		}), !(self = this).xE || 0 <= self.xh(self.xE) || (self.xE = 0, self.xF = 0, bq.message.aIK({
			id: 7,
			s: L(138)
		}))
	}, this.xh = function(id) {
		for (var tb = this.tb, aC = tb.length - 1; 0 <= aC; aC--)
			if (tb[aC].id === id) return aC;
		return -1
	}, this.aIL = function() {
		return 1 === aIG
	}, this.aIM = function(id) {
		return 0 < id && 0 < this.tb.length && this.tb[0].id === id
	}, this.aIN = function() {
		return this.aIM(this.xE)
	}, this.click = function(eP, xl) {
		eP = this.tb[eP];
		xl = xl ? 1 : 0, eP && (eP.id === this.xE && xl === this.xF ? this.select(0, 0) : this.select(eP.id, xl))
	}, this.select = function(id, xl) {
		this.xE = id, this.xF = id ? xl : 0, this.aIE = this.aIF = 0, aIG = 1, aIH++, b1.aIO.aIP(4, {
			xi: id,
			xl: this.xF
		}), u.a9Q(29).aIQ()
	}, this.aIR = function(id, xl) {
		0 === (aIH = Math.max(aIH - 1, 0)) && (this.xE = id, this.xF = xl)
	}, this.zF = function(pk, wy) {
		this.aIE = wy ? pk : 0, this.aIF = wy, aIG = 1, b1.aIO.aIP(6, {
			wy: wy,
			pk: pk
		})
	}, this.aIS = function(pk, wy) {
		return this.aIF === wy && this.aIE === pk
	}, this.xG = function(xD) {
		return xD.h9 - xD.aI6
	}, this.xJ = function(wy) {
		return wy < 7 ? wy + 2 + " Teams" : 7 === wy ? "Battle Royale" : 8 === wy ? "1v1" : 9 === wy ? "Zombie" : "No Full-Sending"
	}, this.xM = function(xD) {
		return xD.nZ < (9 === xD.wy ? 333 : 512)
	}, this.xK = function(xL) {
		var aBb = xL % 60;
		return bO.g7(xL, 60) + ":" + (aBb < 10 ? "0" : "") + aBb
	}
}

function aHc() {
	var aIT = [],
		aIU = [],
		aIV = 0;

	function aIW(h, aB9, aIZ, aIa) {
		var fg = h.length;
		if (0 === fg) return "";
		var pc = "@" + h[0];
		if (1 === fg) return pc + aB9 + aIa;
		for (var aC = 1; aC < fg - 1; aC++) pc += ", @" + h[aC];
		return pc + " and @" + h[fg - 1] + aIZ + aIa
	}
	this.dr = function() {
		var pc = aIW(aIU, " is", " are", " in the lobby.");
		pc.length && bq.message.aIK({
			id: 7,
			s: pc
		}), aIT = [], aIU = [], aIV = 0
	}, this.aHo = function(aIX) {
		return bq.aHO !== aIX && (aIX = bI.f7.a3X(aIX, 5), !!bm.zF.xq(aIX)) && (aIU.push(aIX), !0)
	}, this.join = function(player) {
		bq.aHO !== player.pk && (player = bI.f7.a3X(player.pk, 5), bm.zF.xq(player)) && aIT.push(player)
	}, this.aIY = function() {
		var aB9, aIZ;
		++aIV < 3 || (aIV = 0, aB9 = aIW(aIU, "", "", " entered the lobby!"), (aB9 = (aIZ = aIW(aIT, "", "", " joined a game!")).length ? aB9.length ? aB9 + " " + aIZ : aIZ : aB9).length && bq.message.aIK({
			id: 7,
			s: aB9
		}), aIT = [], aIU = [])
	}
}

function aHR() {
	this.dz = function(kI, aIb, aI6) {
		var ps, aHQ = bq.z.aHQ,
			aIc = bq.ps.x0.slice(kI, kI + aIb),
			kI = bq.ps.aI5(kI, aI6, aHQ.aI7),
			aI6 = function(aIc) {
				if (__fx.customLobby.isActive()) return bq.pq ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pq && bq.tb.aIL())
					for (var fg = aIc.length, pk = bq.pq.pk, aC = 0; aC < fg; aC++)
						if (aIc[aC].pk === pk) return aC;
				return -1
			}(aIc.concat(kI));
		if (-1 === aI6) return (ps = bq.ps).aHe = ps.aHe.concat(aIc, kI), 1e3 < bq.ps.aHe.length && bq.ps.aHe.splice(0, bq.ps.aHe.length - 1e3), bq.z.aHg += 29 === u.vX && 1 === bq.z.aHh, !1;
		if (aHQ.a8u = aIb <= aI6 ? 1 : 0, aHQ.a9D = kI.length, 8 === aHQ.wy) {
			for (var aIg = function(aI7) {
					for (var h = [], aC = 0; aC < aI7.length; aC++) 511 !== aI7[aC] && h.push(aI7[aC]);
					return h
				}(aHQ.aI7), iZ = aI6 - aIb, aIi = aHQ.a8u ? aIg[iZ] : aI6 >> 1, aIj = 0, aC = aHQ.a9D = 0; aC < aIg.length; aC++) aIg[aC] === aIi && (aIj += aC < iZ ? 1 : 0, aHQ.a9D++);
			aHQ.aIk = (aHQ.aIk + aIi) % 1024, 0 <= aHQ.a4h && (aHQ.a4h += aIi), aI6 = aHQ.a8u ? 2 + aIj : aI6 % 2, aIc = aIc.slice(2 * aIi, 2 * aIi + 2)
		}
		return aHQ.aIl = aHQ.a8u ? function(aIc) {
			var tb = bq.tb;
			if (tb.aIF)
				for (var aC = 0; aC < aIc.length; aC++)
					if (aIc[aC].pk === tb.aIE) return aC;
			return 0
		}(aIc) : 0, ay.dr(aHQ, aIc, aI6), !0
	}, this.aIn = function(aHQ, aIc, aIe) {
		var fj = aE.data = new a8o,
			aIq = (fj.spawningSeed = aHQ.spawningSeed, aHQ.wy < 7 ? (fj.gameMode = 1, fj.numberTeams = aHQ.wy + 2) : 9 === aHQ.wy ? (fj.gameMode = fj.isZombieMode = 1, fj.numberTeams = 2) : (fj.gameMode = 0, fj.battleRoyaleMode = 7 === aHQ.wy ?
					0 : 10 === aHQ.wy ? 1 : 2), fj.selectedPlayer = aHQ.a8u ? aHQ.aIl : aIe, fj.a8u = aHQ.a8u, fj.a9D = aHQ.a9D, fj.isContest = aHQ.xP, fj.mapType = bV.aIo(aHQ.fM) ? 0 : 1, bV.aIp(fj, aHQ.fM), fj.mapSeed = aHQ.mapSeed, fj
				.humanCount = aIc.length);
		fj.selectableSpawn = 1 === fj.gameMode || aIq < 100, fj.colorsData = new Uint32Array(aIq), fj.playerNamesData = new Array(aIq), fj.a9E = new Uint32Array(aIq);
		for (var aC = 0; aC < aIq; aC++) fj.colorsData[aC] = aIc[aC].color, fj.playerNamesData[aC] = aIc[aC].username, fj.a9E[aC] = aIc[aC].pk;
		if (2 === fj.battleRoyaleMode)
			for (fj.elo = new Uint16Array(aIq), aC = 0; aC < aIq; aC++) fj.elo[aC] = aIc[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aHQ.fM, fj.mapSeed), aE.a8t(), aE.a4h = aHQ.a4h, aE.a8r = 2
	}
}

function aHV() {
	var eG = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aIr = [bE.qh, bE.qh, bE.qi, bE.rD, bE.rE, bE.qy, bE.rJ, bE.qi, bE.rk, bE.rY, bE.rh, bE.qK],
		aIs = [
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
		aIt = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aJ8(py, pk, aJA) {
		for (var g0 = py.length - 1; 0 <= g0; g0--) {
			var q9 = py[g0];
			0 === q9.id && q9.pk === pk && (q9.s = "[Redacted Message]", aJA) && (q9.aJB = 1)
		}
	}
	this.q3 = function(pi) {
		var aIu, a50;
		return pi.id < 5 && (aIu = "@" + bI.f7.a3X(pi.pk, 5)), 0 === pi.id ? aIu + ": " + pi.s : 1 === pi.id ? (a50 = "@" + bI.f7.a3X(pi.target, 5), 0 === pi.aIv ? 32768 <= pi.value ? aIu + " voted with " + (pi.value - 32768 + 1) +
				" gold against " + a50 + " to weaken the latter's admin position. 📉" : aIu + " voted with " + (pi.value + 1) + " gold for " + a50 + " to strengthen the latter's admin position. 💪" : 1 === pi.aIv ? aIu + " sent " + Math.floor(pi
					.value / 100) + " 🧈 gold to " + a50 + "." : aIu + " voted with " + (pi.value / 10).toFixed(1) + " points for " + a50 + " to acknowledge the latter as clan leader. ✅") : 2 === pi.id ? 0 === pi.aIv ? aIu +
			" was 🔇 muted for 1 Hour." : 1 === pi.aIv ? "The username of " + aIu + " was ✂️ redacted. Duration: 1 Day" : aIu + " 👢 was kicked." : 3 === pi.id ? aIu + br.eS(pi.aIv, br.eM[pi.aIv][pi.value]) + "@" + bI.f7.a3X(pi.target, 5) + br
			.eU(pi.aIv, br.eM[pi.aIv][pi.value]) : 4 === pi.id ? (a50 = "@" + bI.f7.a3X(pi.target, 5), 1 === pi.aIv ? "✅ " + aIu + " vouched for " + a50 + "." + (pi.aIx ? " ⚖️ The punishment of " + a50 + " was refunded." : "") : "🚩 " + aIu +
				" reported " + a50 + "." + (pi.aIx ? " ⚖️ " + a50 + " was punished." : "")) : 5 === pi.id ? aIt[pi.aIv] : 6 === pi.id ? "You are about to mention " + pi.value + " player" + (1 === pi.value ? "" : "s") +
			". This action will cost " + (Math.max(pi.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pi.id ? pi.s : void 0
	}, this.q2 = function(pi, aIy) {
		return {
			pi: pi,
			s: aIy,
			aIz: 0,
			fontSize: 4 === pi.id ? .8 : 1,
			qA: 0,
			aJ0: pi.id ? bE.rC : bE.qT
		}
	}, this.xm = function(player, xk) {
		return (xk ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xn = function(xo) {
		return aIr[xo]
	}, this.aJ1 = function(xo, a84) {
		return xo < 3 || 7 === xo ? aIs[xo][0] : 4 === xo ? aIs[xo][a84 < 1 ? 0 : a84 < 10 ? 1 : 2] : aIs[xo][a84 < 10 ? 0 : 1]
	}, this.aJ2 = function(a84) {
		return 0 === a84
	}, this.xp = function(q9) {
		return !!bq.pq && q9.pk === bq.pq.pk
	}, this.aJ3 = function(ps, aJ4, aJ5) {
		var a4y = [];
		loop: for (var aC = aJ4; aC < aJ5; aC++) {
			var a4z = bD.pg.pu(ps[aC].username);
			if (a4z) {
				for (var g0 = a4y.length - 1; 0 <= g0; g0--)
					if (a4z === a4y[g0].name) {
						a4y[g0].h9++;
						continue loop
					} a4y.push({
					name: a4z,
					h9: 1
				})
			}
		}
		if (a4y.sort(function(fz, g0) {
				return g0.h9 - fz.h9
			}), 0 === a4y.length) return "";
		for (var pc = a4y[0].name + ": " + a4y[0].h9, aC = 1; aC < a4y.length; aC++) pc += "   " + a4y[aC].name + ": " + a4y[aC].h9;
		return pc
	}, this.aJ6 = function(xo, a84, aHj) {
		return 0 === eG[xo].length ? "Rank: " + (a84 + 1) : eG[xo] + " Rank: " + (a84 + 1) + (3 !== xo && aHj < 100 ? "   " + eG[3] + " Rank: " + (aHj + 1) : "")
	}, this.aJ7 = function(pk) {
		aJ8(bq.z.py, pk), aJ8(bq.message.aJ9(), pk, 1), bq.qB.aJ7(pk)
	}, this.aHz = function(username) {
		var username = this.aJC(username);
		username && (username = "[" + username + "] " + function(username) {
			var fV = username.indexOf("["),
				fk = username.indexOf("]", fV);
			for (; 0 <= fV && fV < fk;) username = username.substring(0, fV) + username.substring(fk + 1), fV = username.indexOf("["), fk = username.indexOf("]", fV);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rz.q5(122, username.trim().slice(0, 20)))
	}, this.aJC = function(username) {
		var fV = username.indexOf("["),
			fk = username.indexOf("]");
		return !(fV < 0 || fk - fV <= 1 || 8 < fk - fV) && (username = username.substring(fV + 1, fk).trim()).length ? username : null
	}
}

function aHY() {
	var v0 = 0,
		aJF = 0,
		aJG = 0,
		aJH = null,
		aJI = null;

	function aJL(q9, aJM, aJN) {
		var pc = q9.username;
		return (pc += "   " + bq.lr.aJ6(q9.xo, q9.a84, q9.aHj)) + function(q9) {
			q9 = q9.a05;
			if (q9 < 1e3) return "   Gold: " + q9;
			if ((q9 %= 1024) < 1e3) return "   Gold: " + q9 + "k";
			return "   Gold: " + (q9 - 999) + "M"
		}(q9) + ("   IP: " + bI.f7.a3X(q9.aHk, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJN ? aJF : aJK(q9, aJM)])
	}

	function aJK(q9, aJM) {
		return aJF = aJM || bq.ps.pt(q9.pk) ? 1 : 0
	}
	this.xe = 0, this.aJJ = function() {
		!v0 || aJF === aJK(aJI) && aJG === aJI.a05 || (aJG = aJI.a05, aJH.show(-1, -1, aJL(aJI, 0, 1), 1, 1, aJI.color))
	}, this.xr = function(e, q9, aJM) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q9, 0, aJM), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xd && bq.xd.ub(1)
		}), this.xe = aJM
	}, this.show = function(fn, fp, q9, v4, aJM) {
		aJH = aJH || new uy, aJG = (aJI = q9).a05, aJH.show(fn, fp, aJL(q9, aJM), v4, 0, aJI.color), v0 = 1
	}, this.ub = function(vA) {
		this.xe = 0, aJH && aJH.ub(vA) && (v0 = 0, aJI = null)
	}
}

function aHW() {
	function aJR() {
		var fM, mapSeed;
		u.a9Q(29) && (bq.z.aHg && 1 === bq.z.aHh && u.a9Q(29).aJT(), bq.z.aHg = 0, u.a9Q(29).aJU(), fM = bV.fM, mapSeed = bV.mapSeed, u.a9Q(29).aJV(), fM === bV.fM && mapSeed === bV.mapSeed || bq.xB.aJW(), bq.xd.aJJ())
	}
	this.wK = 0, this.aHh = 2, this.aHQ = {
		fM: 0,
		mapSeed: 0,
		wy: 0,
		xP: 0,
		spawningSeed: 0,
		a4h: -1,
		a5X: 0,
		aIk: 0,
		aI6: 0,
		aI7: null,
		a9D: 0,
		a8u: 0,
		aIl: 0
	}, this.py = [], this.q7 = 300, this.pz = 1048575, this.aHg = 0, this.aJP = [0, 0], this.aJQ = function() {
		aJR(), bq.aHP.dr(), __fx.lobbyReminders.check()
	}, this.aIY = function() {
		bq.aHP.aIY(), aJR(), __fx.lobbyReminders.check()
	}, this.aJX = function() {
		0 === this.aHh && u.a9Q(29).aJY()
	}
}

function aHS() {
	var aJZ = 256,
		aJa = 18,
		aJb = [],
		aJe = 0;

	function zT(key, aJg, fn, fp, xW) {
		var canvas = document.createElement("canvas"),
			p4 = (canvas.width = canvas.height = aJZ, canvas.getContext("2d", {
				alpha: !1
			})),
			p4 = (p4.imageSmoothingEnabled = !0, p4.drawImage(aJg, fn, fp, xW, xW, 0, 0, aJZ, aJZ), {
				key: key,
				canvas: canvas,
				iT: 0
			});
		return aJb.push(p4), aJb.length > aJa && function(aJm) {
			for (var fg = aJb.length, aC = 0; aC < fg; aC++) {
				var hE = aJb[aC];
				if (!hE.iT && hE !== aJm) return hE.canvas.width = hE.canvas.height = 0, aJb.splice(aC, 1)
			}
		}(p4), p4
	}
	this.xC = function(fM, mapSeed) {
		return fM + "_" + (bV.aJf(fM) ? mapSeed : 0)
	}, this.xU = function(fM, mapSeed) {
		for (var key = this.xC(fM, mapSeed), aJg = null, aC = aJb.length - 1; 0 <= aC; aC--) {
			var hE = aJb[aC];
			if (hE.key === key) {
				if (!hE.iT) return hE.iT = 1, aJb.splice(aC, 1), aJb.push(hE), hE.canvas;
				aJg = hE
			}
		}
		return aJg ? ((fM = zT(key, aJg.canvas, 0, 0, aJZ)).iT = 1, fM.canvas) : null
	}, this.xV = function(canvas) {
		for (var aC = aJb.length - 1; 0 <= aC; aC--)
			if (aJb[aC].canvas === canvas) {
				aJb[aC].iT = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHd = function() {
		for (var aC = aJb.length - 1; 0 <= aC; aC--) this.xV(aJb[aC].canvas)
	}, this.el = function() {
		if (bq.fD && !(bi.eg < aJe)) {
			for (var self, fM, mapSeed, eh, tb = bq.tb.tb, fg = tb.length, aC = 0; aC < fg; aC++)
				if (! function(key) {
						for (var aC = aJb.length - 1; 0 <= aC; aC--)
							if (aJb[aC].key === key) return 1;
						return
					}(this.xC(tb[aC].fM, tb[aC].mapSeed))) return self = this, fM = tb[aC].fM, mapSeed = tb[aC].mapSeed, eh = void 0, eh = performance.now(),
					function(self, fM, mapSeed) {
						var aJg = bV.aJk(fM, mapSeed),
							xW = Math.min(aJg.width, aJg.height);
						zT(self.xC(fM, mapSeed), aJg, aJg.width - xW >> 1, aJg.height - xW >> 1, xW), aJg !== bV.a0n && (aJg.width = aJg.height = 0)
					}(self, fM, mapSeed), u.a9Q(29).aIQ(), self = performance.now(), void(aJe = self + Math.max(Math.min(self - eh, 500), 200));
			aJe = bi.eg + 200
		}
	}, this.aJW = function() {
		aJe = performance.now() + 200
	}
}

function aHa() {
	var aJn = 0,
		aJo = "",
		aJp = 0,
		aJq = 0,
		aJr = "";

	function aJu(aIy) {
		b1.aIO.aIP(3, aIy)
	}

	function aJt(s) {
		s = bq.pe.pf(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aK5(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aJx(s) {
		var aKB = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aKB)
	}
	this.a4I = function(s) {
		var h, aJy, aJs;
		if (aJn) return aJn = 0, "yes" === (aJs = s.toLowerCase()) || "y" === aJs ? (aJr = aJt(aJo), void aJu(aJo)) : (aJr = "", void bq.message.aIK({
			id: 5,
			aIv: 7
		}));
		aJr = aJt(s), !(s.indexOf("@") < 0) && (aJs = aJx(s)) ? (aJo = s, h = bq.ps.x0.slice(), function(aJw, aJy, s) {
			if (!aJp) return;
			for (var fg = aJy.length, aC = 0; aC < fg; aC++) 2 === aJy[aC].id && (s = s.replace(aJw[aJy[aC].eP], "@" + aJy[aC].g8));
			return aJn = 1, aJu((aJo = s).slice(0, 126) + "|"), 1
		}(aJs, aJy = function(aJw) {
			for (var aJy = [], fg = (aJq = aJp = 0, aJw.length), aC = 0; aC < fg; aC++) {
				var j = aJw[aC],
					lx = j.length;
				bD.pg.startsWith(j, "@[") ? lx <= 9 && bD.pg.a7Z(j, "]") && aJy.push({
					id: 0,
					g8: j.substring(2, lx - 1).toUpperCase()
				}) : 6 === lx && (aJq++, aJy.push({
					id: 1,
					g8: bJ.f7.f8(j.substring(1), 5)
				}))
			}
			return aJy
		}(aJs), s) || (0 === aJy.length || aJs.length === aJq ? aJu(s) : (function(h, aJy) {
			var lx = aJy.length;
			if (0 === lx) return;
			var fg = h.length;
			loop: for (var aC = fg - 1; 0 <= aC; aC--) {
				for (var fz = 0; fz < lx; fz++)
					if (0 === aJy[fz].id) {
						if (aJy[fz].g8 === bD.pg.pu(h[aC].username)) continue loop
					} else if (1 === aJy[fz].id && aJy[fz].g8 === h[aC].pk) continue loop;
				h[aC] = h[--fg], h.pop()
			}
		}(h, aJy), aJs = h.length, aJr = "", aJn = 1, bq.message.aIK({
			id: 6,
			value: aJs
		})))) : aJu(s)
	}, this.aK3 = function() {
		return aJn
	}, this.aK4 = function() {
		return aJr
	}, this.pf = function(s) {
		var aJw = aJx(s),
			h = [];
		if (aJw)
			for (var aC = 0; aC < aJw.length; aC++) aK5(aJw[aC]) && h.indexOf(aJw[aC]) < 0 && h.push(aJw[aC]);
		return h
	}, this.aK6 = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var zv = e.selectionStart;
		if (zv !== e.selectionEnd) return 0;
		var pc = e.value.substring(0, zv),
			lx = pc.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!lx || !aK5(lx[0].substring(0, lx[0].length - 1))) return 0;
		event.preventDefault();
		event = zv - lx[0].length;
		return e.value = pc.substring(0, event) + e.value.substring(zv), e.setSelectionRange(event, event), 1
	}, this.aK7 = function(s) {
		s = aJx(s);
		return s ? function(aJw) {
			for (var fg = aJw.length, aC = 0; aC < fg; aC++) {
				var j = aJw[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aJw) {
			for (var aKA = new RegExp("^[0-9]"), a8L = new RegExp("^[0-9]+$"), aC = 0; aC < aJw.length; aC++) {
				var j = aJw[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aKA.test(j) && !a8L.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aKC = function(s) {
		var aJw = aJx(s);
		if (aJw)
			for (var a6 = new RegExp("^[0-9]+$"), fg = aJw.length, aC = 0; aC < fg; aC++) {
				var j = aJw[aC].substring(1),
					lx = j.length;
				1 <= lx && lx <= 3 && a6.test(j) && (lx = parseInt(j, 10), !isNaN(lx)) && 0 <= lx && lx < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lx]))
			}
		return s
	}
}

function aHZ() {
	var aKE, aKF = [],
		aKG = -1,
		aKH = 0,
		aKI = 0;

	function aKM() {
		aKH = bi.eg, (3 === this.xv ? aKL : (aKG = (aKF.length + aKG + 2 * this.xv - 1) % aKF.length, aKK))()
	}

	function aKK() {
		0 !== aKF.length && (aKI = 0, aKE && aKE.xy(), (aKE = new xs(aKM)).q5(aKG, aKF.length), aKE.show(aKF[aKG]), bq.message.resize())
	}

	function aKL() {
		aKI = 1, aKE && aKE.xy(), (aKE = new xz(aKK)).q5(aKF.length), aKE.show(), bq.message.resize()
	}
	this.aIK = function(pi) {
		var q9;
		2 === pi.id && 3 === pi.aIv ? bq.lr.aJ7(pi.pk) : (q9 = bq.lr.q2(pi, bq.lr.q3(pi)), (5 !== pi.id && 6 !== pi.id || (by.nF.q6(q9), 5 === pi.id)) && (q9 = bi.eg < aKH + 2e4, aKG !== aKF.length - 1 && q9 || (aKG = aKF.length), __fx.pingFilter
			.isMuted(pi, "s") || (aKF.push(pi), bm.buffer.data[14].value || 7 === pi.id || bt.play(), aKE && (aKI && (bm.buffer.data[13].value || q9) ? aKE.q5(aKF.length) : aKK()))))
	}, this.show = function() {
		aKL()
	}, this.ub = function() {
		aKG = aKF.length - 1, aKE && aKE.xy(), aKE = null
	}, this.resize = function() {
		aKE && aKE.resize()
	}, this.aJ9 = function() {
		return aKF
	}
}

function aHX() {
	var aKN = null,
		aKO = null,
		aKP = 0,
		aKQ = null;

	function aKS() {
		0 !== aKO.xo && (bq.y4.ub(), u.v(8, 29, new vY(25, {
			action: 0,
			pk: bI.f7.a3X(aKO.pk, 5),
			vW: 0
		}, 29)))
	}

	function aKY() {
		return !bq.pq || bq.lr.xp(aKO) ? 1 : 0
	}

	function aKU() {
		return aKY() ? 1 : +bs.aKc(bI.f7.a3X(aKO.pk, 5))
	}

	function aKT(aKd) {
		aKU() || (bs.aKe(bI.f7.a3X(aKO.pk, 5), aKd), bq.y4.ub())
	}

	function aKW(wy) {
		return bq.tb.aIS(aKO.pk, wy)
	}

	function aKX(wy) {
		aKY() || (bq.tb.zF(aKO.pk, aKW(wy) ? 0 : wy), bq.y4.ub())
	}

	function aKa() {
		var or;
		return !aKY() && (or = bD.pg.pu(aKO.username)) ? +(or === bD.pg.pu(bq.pq.aHq)) : 1
	}

	function aKZ() {
		aKa() || (b1.aIO.aIP(2, aKO.pk), bq.y4.ub())
	}

	function aKV() {
		29 === u.vX && u.a5T().pe(bI.f7.a3X(aKO.pk, 5))
	}
	this.aKR = function(e, q9) {
		var y6;
		aKP = 1, aKO = q9, aKN = new y0([new x(L(139), aKS, 0 === q9.xo ? 1 : 0), new x(L(140), function() {
			aKT(1)
		}, aKU()), new x(L(141), function() {
			aKT(0)
		}, aKU()), new x(L(142), aKV, 0), new x(aKW(1) ? L(143) : L(144), function() {
			aKX(1)
		}, aKY()), new x(aKW(2) ? L(145) : L(146), function() {
			aKX(2)
		}, aKY()), new x(L(147), aKZ, aKa())]), aKQ = {
			clientX: e.clientX,
			clientY: e.clientY
		}, q9 = aKQ.clientX, e = aKQ.clientY, y6 = 1, aKN.show(q9, e, y6), bq.xd.show(aKN.fn, aKN.fp, aKO, 1)
	}, this.a6K = function(code) {
		if (29 !== u.vX) return !1;
		if (!aKO) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ub();
			else if (bD.pg.startsWith(code, "Numpad") || bD.pg.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKP) this.aKR(aKQ, aKO);
				else {
					if (!aKN) return !1;
					code <= 1 ? aKS() : code <= 3 ? aKT(+(2 === code)) : 4 === code ? (aKV(), this.ub()) : code <= 6 ? aKX(5 === code ? 1 : 2) : aKZ()
				}
		}
		return !0
	}, this.ub = function() {
		aKP = 0, aKN && aKN.ub(), aKN = null, bq.xd.ub()
	}
}

function aHb() {
	var aKf = [],
		vi = [],
		aKg = [],
		aKh = {},
		aKi = {};

	function aKk(q9) {
		for (var s = q9.s, aKj = [];;) {
			var eq = function aKm(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pc = s.substring(position + 1, position + 6);
				if (5 !== pc.length) return aKm(s, position + 1);
				var aL0 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aL0.test(pc)) return aKm(s, position + 1);
				aL0 = s.substring(position + 6, position + 7);
				if (1 !== aL0.length) return position;
				pc = new RegExp("^[ :!.]+$");
				if (!pc.test(aL0)) return aKm(s, position + 1);
				return position
			}(s, 0);
			if (-1 === eq) {
				aKj.push(aKn(s, q9));
				break
			}
			0 === eq ? aKj.push(aKo(s.substring(1, 6), q9, eq)) : (aKj.push(aKn(s.substring(0, eq), q9)), aKj.push(aKo(s.substring(eq + 1, eq + 6), q9, eq))), s = s.substring(eq + 6)
		}
		return aKj
	}

	function aKo(pc, q9, eq) {
		var pc = aKp(pc),
			uZ = (0 === eq && 0 === q9.pi.id && q9.qA && (q9.fontSize = bq.lr.aJ1(pc.xo, pc.a84), q9.aIz = bq.lr.aJ2(pc.a84)), document.createElement("span"));
		return uZ.style.display = "inline-block", uZ.style.cursor = "pointer", uZ.style.margin = "0", uZ.style.font = "inherit", uZ.style.minWidth = uZ.style.minHeight = "1em", uZ.aKq = {
			q9: q9,
			eq: eq
		}, aKr(uZ, pc), vi.push(uZ), (aKh[pc.pk] || (aKh[pc.pk] = [])).push(uZ), uZ
	}

	function aKr(uZ, aHl) {
		var q9 = uZ.aKq.q9;
		uZ.textContent = function(aHl, q9, eq) {
				if (aHl.aKt) return aHl.aKt--, eq = 2 === q9.pi.id || (3 === q9.pi.id || 4 === q9.pi.id) && 0 !== eq, aHl.username + (eq ? " (" + aHl.aHx + ")" : "");
				if (q9.pi.aJB) return "Redacted " + bI.f7.a3X(aHl.pk, 2);
				return aHl.username
			}(aHl, q9, uZ.aKq.eq), uZ.style.color = bq.lr.xn(aHl.xo), uZ.style.textShadow = 11 !== aHl.xo ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uZ.style.textDecoration = bq.lr.xp(aHl) ?
			"underline" : "none", aHl.xq && (uZ.style.textDecorationLine = "underline", uZ.style.textDecorationStyle = "dotted"), uZ.style.fontWeight = bq.lr.aJ2(aHl.a84) ? "bold" : "inherit", uZ.onclick = function(e) {
				bq.y4.aKR(e, aHl)
			}, bM.u5() || (uZ.onmouseover = function(e) {
				bq.xd.xr(e.target, aHl)
			})
	}

	function aKn(s, q9) {
		var uZ = document.createElement("span");
		return uZ.textContent = s, uZ.style.color = q9.aJ0, uZ.style.margin = "0", uZ.style.font = "inherit", uZ
	}

	function aKp(pc) {
		var pk = bJ.f7.f8(pc, 5),
			aHl = bq.ps.pt(pk);
		if (aHl) {
			for (aKf.push(aHl); 75 < aKf.length;) aKf.shift();
			return aHl
		}
		for (var aHe = bq.ps.aHe, aC = aHe.length - 1; 0 <= aC; aC--)
			if (pk === (aHl = aHe[aC]).pk) return aKf.push(aHl), aHl;
		for (aC = aKf.length - 1; 0 <= aC; aC--)
			if (pk === (aHl = aKf[aC]).pk) return aKf.push(aHl), aHl;
		return aKv(pk, null)
	}

	function aKv(pk, name) {
		return aKi[pk] || (aKi[pk] = bq.ps.aHm(pk, name || "Player " + bI.f7.a3X(pk, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aKz(pk, name) {
		var aHl;
		name && !bq.ps.pt(pk) && ((aHl = function(pk) {
			for (var aHe = bq.ps.aHe, aC = aHe.length - 1; 0 <= aC; aC--)
				if (pk === aHe[aC].pk) return aHe[aC];
			for (aC = aKf.length - 1; 0 <= aC; aC--)
				if (pk === aKf[aC].pk) return aKf[aC];
			return aKi[pk] || null
		}(pk)) ? aHl.username !== name && (aHl.username = aHl.aHq = name, bq.qB.aHp(pk)) : aKv(pk, name))
	}

	function aL4(aHl, aHw, pk) {
		pk === aHl.pk && (aHl.aHx || (aHl.aHx = aHl.username), aHl.username = aHl.aHq = aHw)
	}
	this.xy = function() {
		for (var aC = 0; aC < vi.length; aC++) vi[aC].onclick = vi[aC].onmouseover = null;
		aKi = aKh = aKg = vi = null
	}, this.transform = function(q9) {
		for (var tN = document.createElement("div"), aKj = aKk(q9), aC = 0; aC < aKj.length; aC++) tN.appendChild(aKj[aC]);
		0 === q9.pi.id && (tN.vx143 = q9.pi, aKg.push(tN)), tN.style.margin = "0.6em 0.6em", q9.qA && (tN.style.marginLeft = tN.style.marginRight = "inherit"), tN.style.font = "inherit";
		var aKl = 0 < q9.pi.id;
		return q9.aIz && (tN.style.fontWeight = "bold"), aKl && (tN.style.paddingLeft = "0.7em"), aKl && (tN.style.fontStyle = "italic"), tN.style.fontSize = q9.fontSize.toFixed(2) + "em", tN
	}, this.aHp = function(pk) {
		var h = aKh && aKh[pk];
		if (h)
			for (var aHl = aKp(bI.f7.a3X(pk, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aKr(h[aC], aHl) : h.splice(aC, 1)
	}, this.aKx = function(aKy) {
		!aKy || 4 < aKy.id || (aKz(aKy.pk, aKy.pl), aKy.pm && aKz(aKy.target, aKy.pm))
	}, this.aL3 = function(aKy) {
		if (aKy && (2 === aKy.id && 1 === aKy.aIv || 3 === aKy.id && 2 === aKy.aIv)) {
			var pk = 3 === aKy.id ? aKy.target : aKy.pk;
			if (!bq.ps.pt(pk)) {
				for (var aHw = (3 === aKy.id ? aKy.pm : aKy.pl) || "Redacted " + bI.f7.a3X(pk, 2), aHe = bq.ps.aHe, aC = aHe.length - 1; 0 <= aC; aC--) aL4(aHe[aC], aHw, pk);
				for (aC = aKf.length - 1; 0 <= aC; aC--) aL4(aKf[aC], aHw, pk);
				aKi[pk] && aL4(aKi[pk], aHw, pk), this.aHp(pk)
			}
		}
	}, this.aJ7 = function(pk) {
		for (var aL5 = aKg, aC = aL5.length - 1; 0 <= aC; aC--) {
			var fj = aL5[aC];
			if (fj.vx143.pk === pk) {
				for (; fj.firstChild;) u.removeChild(fj, fj.firstChild);
				fj.vx143.s = "[Redacted Message]";
				for (var aKj = aKk(bq.lr.q2(fj.vx143, bq.lr.q3(fj.vx143))), fz = 0; fz < aKj.length; fz++) fj.appendChild(aKj[fz]);
				aL5.splice(aC, 1)
			}
		}
	}
}

function cW() {
	var aL6, aL7, aL8;

	function aLD(aC) {
		var button = aZ.p8[aC],
			fn = button.fn,
			fp = button.fp,
			j = button.j,
			k = button.k;
		ys.fillStyle = button.aLB, ys.fillRect(fn, fp, j, k), aC === aL6 && (ys.fillStyle = aL8, ys.fillRect(fn, fp, j, k)), ys.lineWidth = bf.a3E, ys.strokeStyle = aL7, ys.strokeRect(fn, fp, j, k),
			function(button) {
				var fn = button.fn,
					fp = button.fp,
					j = button.j,
					k = button.k;
				bD.tC.textAlign(ys, 1), bD.tC.textBaseline(ys, 1), ys.font = button.font, ys.fillStyle = aL7, ys.fillText(button.aIy, Math.floor(fn + j / 2), Math.floor(fp + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fp = 0, this.gap = 0, this.dr = function() {
		aL6 = -1, aL7 = bE.qT, aL8 = "rgba(255,255,255,0.16)", this.p8 = new Array(7), this.k = Math.floor((a1.a2.it() ? .123 : .093) * i.iu), this.j = Math.floor((a1.a2.it() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aL9 = Math.floor(.26 * this.k),
			aLA = bD.tC.tF(1, aL9);
		this.p8[0] = {
			fn: 0,
			fp: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aIy: "Multiplayer",
			font: aLA,
			aLB: "rgba(22,88,22,0.8)",
			fontSize: aL9
		}, aL9 = Math.floor(.18 * this.k), aLA = bD.tC.tF(1, aL9), this.p8[1] = {
			fn: 0,
			fp: 0,
			j: this.j - this.p8[0].j - this.gap,
			k: this.k,
			aIy: "Single Player",
			font: aLA,
			aLB: "rgba(22,88,88,0.8)",
			fontSize: aL9
		}, this.p8[2] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIy: "",
			font: this.p8[1].font,
			aLB: "rgba(100,0,0,0.8)",
			fontSize: this.p8[1].fontSize
		}, this.p8[3] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: this.k,
			aIy: "Back",
			font: this.p8[0].font,
			aLB: "rgba(0,0,0,0.8)",
			fontSize: this.p8[0].fontSize
		}, this.p8[4] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIy: "The game was updated!",
			font: this.p8[1].font,
			aLB: "rgba(100,0,0,0.8)",
			fontSize: this.p8[1].fontSize
		}, this.p8[5] = {
			fn: 0,
			fp: 0,
			j: this.p8[0].j,
			k: Math.floor(.8 * this.k),
			aIy: "Reload",
			font: this.p8[0].font,
			aLB: "rgba(0,100,0,0.8)",
			fontSize: this.p8[0].fontSize
		}, this.p8[6] = {
			fn: 0,
			fp: 0,
			j: this.p8[1].j,
			k: this.p8[5].k,
			aIy: "Back",
			font: this.p8[0].font,
			aLB: "rgba(0,0,0,0.8)",
			fontSize: this.p8[0].fontSize
		}, this.aE3()
	}, this.aE3 = function() {
		this.fp = Math.floor(.54 * i.k), this.p8[0].fn = Math.floor(.5 * i.j - .5 * this.j), this.p8[1].fn = this.p8[0].fn + this.p8[0].j + this.gap, this.p8[2].fn = this.p8[3].fn = this.p8[0].fn, this.p8[4].fn = this.p8[5].fn = this.p8[0].fn,
			this.p8[6].fn = this.p8[1].fn, this.p8[0].fp = Math.floor(.54 * i.k), this.p8[1].fp = this.p8[0].fp, this.p8[2].fp = Math.floor((i.k - this.p8[2].k - this.p8[3].k - this.gap) / 2), this.p8[3].fp = this.p8[2].fp + this.p8[2].k + this
			.gap, this.p8[4].fp = Math.floor((i.k - this.p8[4].k - this.p8[5].k - this.gap) / 2), this.p8[5].fp = this.p8[6].fp = this.p8[4].fp + this.p8[4].k + this.gap
	}, this.aLC = function() {
		aLD(0), aLD(1)
	}, this.aLE = function() {
		aLD(2), aLD(3)
	}, this.aLF = function() {
		aLD(4), aLD(5), aLD(6)
	}, this.a5m = function(fn, fp, nQ) {
		var aC = -1;
		return 0 === ab.a5P() ? aC = this.a6G(fn, fp, 0, 2) : 3 === ab.a5P() ? aC = this.a6G(fn, fp, 3, 1) : 5 === ab.a5P() && (aC = this.a6G(fn, fp, 5, 2)), aL6 !== aC && (aL6 = aC, nQ) && (bi.dy = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a6G = function(fn, fp, aLG, size) {
		for (var aC = aLG; aC < aLG + size; aC++)
			if (fn >= this.p8[aC].fn && fp >= this.p8[aC].fp && fn <= this.p8[aC].fn + this.p8[aC].j && fp <= this.p8[aC].fp + this.p8[aC].k) return aC;
		return -1
	}
}

function cX() {
	var aLI, aLJ, aBg, aLK, aLL, aLM, aLN, aLO, aLP, aBf, aLQ, aLR, aLS, aLT = 1,
		aLV = 0;

	function aLY(aLZ) {
		aLZ ? aLS = (aLS + 1) % b1.z.aLa : (b1.z.close(aLS, 3280), aLT ? aLT = 0 : (aLS = (aLS + 1) % b1.z.aLa, b1.z.close(aLS, 3280))), aLR = bi.eg, aa.aLX = aLV, b1.z.aLb(aLS, 4, 1) && b1.aIO.aLc(aLS)
	}

	function aLd() {
		if (0 !== aLS) return 1 === aLS && __fx.customLobby.isActive() ? (p.a5b(3249), __fx.customLobby.setActive(!1)) : void aLY();
		p.a5b(3249)
	}

	function aLi(fp, aDl, wK) {
		var o5 = Math.floor((i.j - aLK) / 2) + aLN,
			oI = o5 + Math.floor(wK * (aLK - 2 * aLN));
		ys.lineWidth = aDl, ys.beginPath(), ys.moveTo(o5, fp), ys.lineTo(oI, fp), ys.lineTo(Math.floor(o5 - aLN + wK * aLK), fp + aBg), ys.lineTo(o5 - aLN, fp + aBg), ys.closePath()
	}
	this.f9 = 1, this.aLW = 0, this.aLX = 0, this.dr = function() {
		bX.turnstile.f5(), ab.setState(6), aLI = 0, aLJ = 1, aLO = "rgba(0,220,120,0.4)", aLP = "rgba(0,0,0,0.8)", this.resize(), bi.dy = !0, aLT = 1, aLS = this.f9 - 1, aLV = 0, aLY(1)
	}, this.resize = function() {
		aLK = Math.floor((a1.a2.it() ? .5 : .25) * i.iu), aLL = aLK + 12, aBg = Math.floor(.125 * aLK), aLN = 3 * aBg, aLM = Math.floor(.225 * aLK), aLQ = Math.floor(.3 * aBg), aBf = bD.tC.tF(0, aLQ)
	}, this.a5W = function(oX) {
		oX === aLS && aLd()
	}, this.hu = function(fn, fp) {
		var o5 = Math.floor((i.j - aLL) / 2),
			o6 = Math.floor(.5 * (i.k - bf.gap - aBg - aLM)) + aBg + bf.gap;
		return o5 < fn && fn < o5 + aLL && o6 < fp && fp < o6 + aLM && (this.a6R(), aZ.a5m(fn, fp, !1), !0)
	}, this.a6R = function() {
		b1.z.a5c(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.el = function() {
		6 === ab.a5P() && (bi.eg > aLR + 12e3 && aLd(), 100 < (aLI += .07 * aLJ * (aLI < 16 ? 5 + aLI : 84 < aLI ? 105 - aLI : 17)) ? (aLI = 100, aLJ = -1) : aLI < 0 && (aLI = 0, aLJ = 1), aLO = "rgba(0," + Math.floor(190 - 1.9 * aLI) + "," +
			Math.floor(120 - 1.2 * aLI) + "," + (.4 + .004 * aLI) + ")", aLP = "rgba(0," + Math.floor(1.9 * aLI) + "," + Math.floor(1.2 * aLI) + "," + (.8 - .004 * aLI) + ")", bi.dy = !0)
	}, this.yr = function() {
		var fn = Math.floor((i.j - aLL) / 2),
			fp = Math.floor(.5 * (i.k - bf.gap - aBg - aLM));
		! function(title, fp, aDl, wK) {
			ys.fillStyle = aLP, aLi(fp, aDl, 1), ys.fill(), ys.fillStyle = aLO, aLi(fp, aDl, wK), ys.fill(), ys.strokeStyle = bE.qT, __fx.settings.smoothUI && (ys.strokeStyle = "rgba(255, 255, 255, 0.3)", ys.lineJoin = "round"), aLi(fp, aDl, 1),
				ys.stroke(), ys.lineJoin = "miter",
				function(aLk, fp) {
					bD.tC.textAlign(ys, 1), bD.tC.textBaseline(ys, 1), ys.font = aBf, ys.fillStyle = bE.qT, ys.fillText(aLk, Math.floor(.5 * i.j), Math.floor(fp + .58 * aBg))
				}(title, fp)
		}(L(148), fp, 3, aLI / 100),
		function(fn, fp, j, k, aIy) {
			ys.fillStyle = bE.qO, ys.beginPath(), __fx.settings.smoothUI && ys.roundRect ? ys.roundRect(fn, fp, j, k, .1 * k) : ys.rect(fn, fp, j, k), ys.fill(), ys.lineWidth = 3, ys.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qT, ys.stroke();
			var fg = Math.floor(.3 * k);
			bD.tC.textAlign(ys, 1), bD.tC.textBaseline(ys, 1), ys.font = bD.tC.tF(0, fg), ys.fillStyle = bE.qT, ys.fillText(aIy, Math.floor(fn + j / 2), Math.floor(fp + k / 2 + .1 * fg))
		}(fn, fp + aBg + bf.gap, aLL, aLM, L(42))
	}
}

function cY() {
	var a5J = 0;
	this.dr = function() {
		aZ.dr(), a5J = 0
	}, this.setState = function(aLl) {
		a5J = aLl
	}, this.a5P = function() {
		return a5J
	}, this.aLm = function() {
		this.setState(8), u.y()
	}, this.a6K = function(e) {
		if (!bV.a0l) return !1;
		if (!(bi.eg < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aLn()) return !0;
				if ("Enter" === e.key) {
					if (0 === a5J) return !0;
					if (7 === a5J) return !0
				}
			}
			return !1
		}
	}, this.aLo = function() {
		bc.resize()
	}, this.aLn = function() {
		return !!bc.ub()
	}, this.hu = function(fn, fp) {
		!bV.a0l || bc.hu(fn, fp) || 6 === a5J && aa.hu(fn, fp) || bb.hu(fn, fp) || aU.hu(fn, fp)
	}, this.a5m = function(fn, fp) {
		!aU.aDw && aZ.a5m(fn, fp, !0) || aU.a5m(fn, fp)
	}, this.click = function(fn, fp) {
		aU.a6B()
	}, this.a5p = function(fn, fp, deltaY) {}, this.aLp = function() {
		aZ.aE3(), bi.dy = !0
	}, this.yr = function() {
		8 !== a5J && 10 !== a5J && (ys.imageSmoothingEnabled = !0, this.a2K(), 0 !== a5J && (aU.yr(), aP.yr(), this.aLq(), bb.yr()), 0 !== a5J && 6 === a5J && aa.yr(), bc.yr(), u.yr())
	}, this.a2K = function() {
		var aLs, aLr;
		if (__fx.makeMainMenuTransparent) ys.clearRect(0, 0, i.j, i.k);
		else bV.a0l ? (aLr = i.j / bV.fr, aLs = i.k / bV.fs, ys.setTransform(aLr = aLs < aLr ? aLr : aLs, 0, 0, aLr, Math.floor((i.j - aLr * bV.fr) / 2), Math.floor((i.k - aLr * bV.fs) / 2)), ys.drawImage(bV.a0n, 0, 0), ys.setTransform(1, 0, 0,
			1, 0, 0), ys.fillStyle = bE.qO) : ys.fillStyle = bE.qK, ys.fillRect(0, 0, i.j, i.k)
	}, this.aLq = function() {
		var fp = Math.floor(.3 * i.k),
			canvas = ac.x7("territorial.io"),
			ik = (ik = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ik,
			fn = (ys.globalAlpha = .15, ys.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ik * canvas.width))),
			fn = Math.floor(fn / ik),
			fp = Math.floor(fp - .5 * canvas.height * ik),
			fp = Math.floor(fp / ik);
		ys.setTransform(ik, 0, 0, ik, fn, fp), ys.drawImage(canvas, fn, fp), ys.setTransform(1, 0, 0, 1, 0, 0), ys.globalAlpha = 1, ys.imageSmoothingEnabled = !0
	}
}

function cy() {
	this.aIk = 0;
	var aLu, aLv, aLw, aLx, aLy, aLz = this.aLt = 0;

	function tK() {
		aLx = aLy = null, aLz = 0
	}
	this.dr = function(aHQ, aIc, aIe) {
		u.y(), bq.xy(), ab.setState(10), aLx = aHQ, aLy = aIc, aLz = aIe, this.aIk = aHQ.aIk, this.aLt = aIe, aLu = 0, aLv = bi.eg + 4500, b1.z.a5X = aHQ.a5X, 1 === aIc.length ? (b1.z.close(b1.z.fE, 3281), aLw = 0) : b1.z.fE === aHQ.a5X ? (
			console.log("direct pass"), aLw = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fE, 3247), aLw = 2, b1.z.aLb(aHQ.a5X, 5, 2) && b1.rx.aM0()), ys.imageSmoothingEnabled = !0, ab.a2K();
		aIe = ac.x7("loading"), aIc = (a1.a2.it() ? .396 : .25) * i.iu / aIe.width;
		ys.setTransform(aIc, 0, 0, aIc, Math.floor((i.j - aIc * aIe.width) / 2), Math.floor((i.k - aIc * aIe.height) / 2)), ys.imageSmoothingEnabled = !1, ys.drawImage(aIe, 0, 0), ys.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nO = function() {
		0 < aLw && bi.eg > aLv && (aLw--, aLv += 4500, 0 === bi.aM1) && 0 === bi.kz() && b1.z.aLb(b1.z.a5X, 5, 2)
	}, this.aM2 = function() {
		return 10 === ab.a5P() && (bq.aHQ.aIn(aLx, aLy, aLz), tK(), !0)
	}, this.aM3 = function() {
		10 === ab.a5P() && 2 <= ++aLu && (bq.aHQ.aIn(aLx, aLy, aLz), tK())
	}
}

function cZ() {
	var aM5, canvas, a4b, aM6;

	function aMC(eP, name, aMD, pc) {
		a4b[eP] = name, canvas[eP] = new Image, canvas[eP].onload = function() {
			! function(eP, aMD) {
				var a89, a8A = null;
				7 === aMD ? a89 = bD.p1.a8C : 9 === aMD ? a89 = bD.p1.a8D : 8 === aMD ? (a89 = bD.p1.a8G, a8A = .1) : 3 === aMD ? (a89 = bD.p1.a8E, a8A = .06) : 5 === aMD ? a89 = bD.p1.a8H : 6 === aMD ? a89 = bD.p1.a8B : 4 === aMD && (a89 = bD.p1
					.a8I);
				canvas[eP] = bD.p1.a88(canvas[eP], a89, a8A)
			}(eP, aMD), aMF()
		}, canvas[eP].onerror = function(e) {
			console.error("Error loading image at index", eP, "Error:", e), aMF()
		}, canvas[eP].src = "data:image/png;base64," + pc
	}

	function aMF() {
		aM5--, aM9()
	}

	function aM9() {
		0 === aM5 && (aM5 = -1, aMB(), bi.dy = !0, canvas[7] = aM6, canvas[8] = aM6, canvas[9] = aM6, canvas[10] = aM6, 5 === u.vX) && u.a5T().aMH.resize()
	}

	function aMB() {
		aM.a9b(), bb.aHI([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a0q = new a2l, ak.a0q.dr(), ax.ds()
	}
	this.dr = function() {
		if (void 0 === canvas) {
			aM5 = 29, canvas = new Array(aM5), a4b = new Array(aM5), (aM6 = document.createElement("canvas")).width = 1;
			for (var aC = aM5 - (aM6.height = 1); 0 <= aC; aC--) canvas[aC] = aM6;
			aMB(), aMC(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aMC(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aMC(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(3, "orders", 6,
					"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"
					), aMC(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aMC(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aMC(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAGe4AAAMACAYAAAD286EDAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAR6vSURBVHic7N1/3Nbz/f//x3me1XmqJM6ypNGSSoW0LHqXt99qZWIzovIrkzWbUjrrLCEpP5f1A40RxjDDQjVhWCsLsWGitbSMt19LnxA5z77/7LvLZqrzPOvseRzn63r9r+NynudxO/44jo7zvLyO570gIjYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGREYeoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANieDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7baaqvsBAAAqqlhw4bxhz/8Ie6+++7o0KFDdg5FarPNNovnnnsuBgwYkJ0C8L0aNmwYjz32WOy+++7ZKdSiioqKuOmmm+Lwww/PTgEAAAAAAAAAoI4w3AMAAAAAAAAAALXsN7/5Tbz99tvZGSxGq1at4vTTT09t6NmzZ2y99dapDfyf999/P4YPH56dAcAy6tWrV6y99trZGSyBf/7zn3HqqadmZ1CLTj311HjrrbeyM/geG2+8cXYCAADVsNVWW8U//vGPOOyww6JBgwbZORS58vLyOO+88+Lxxx+Ptm3bZucA/Ffjxo3j2Wefjd69e2enkKBJkyZxzTXXRL9+/bJTAAAAAAAAAACoAwz3AAAAAAAAAABAgosuuig7gWo49NBDo7Q072VWp5xySpSVlaXdn//nggsuiKqqquwMAJbRfvvtl53AEvj666/j5JNP9hhcZKqqquLUU0+NysrK7BS+o2XLlrHVVltlZwAAsAjDhw+PRx55JNZbb73sFPiWbbfdNl5++eXYe++9s1MAomHDhvHoo4/GZpttlp1CokaNGsWll15qvAcAAAAAAAAAAMM9AAAAAAAAAACQ4YYbboixY8dmZ7AYa665Zhx33HEp9+7SpUvssMMOKffm28aMGRPXX399dgYANaBnz57ZCSyBW2+9NZ544onsDBKMGjUq7r333uwMvsdOO+2UnQAAwPdo2bJlPPbYYzF06NBo0qRJdg58r7Zt28btt98el156aXYKUMQaNmwYTzzxhHFiIsJ4DwAAAAAAAAAA/8dwDwAAAAAAAAAAJDn33HNj/vz52RksRt++fVPue/rpp8cKK6yQcm/+n6qqqhg2bFh2BgA1oHPnzvGjH/0oO4Nq+vTTT+OUU07JziDRKaecEtOnT8/O4Dt+/OMfZycAAPAd2223Xbz88sux3XbbZafAYjVo0CCOP/74eOqpp6Jt27bZOUCRKS0tjYceeshoD9/SqFGjuPjii+Oggw7KTgEAAAAAAAAAIInhHgAAAAAAAAAASHLffffFc889l53BYmywwQa1fkhPu3btYrfddqvVe/L9HnvssXjkkUeyMwCoAQcccECUlJRkZ1BNF198sdGWIjdx4sS49tprszP4jq5du2YnAACwkFNPPTUefPDBWHPNNbNTYIn87Gc/ixdffDF69+6dnQIUkVtuuSW233777AzqoCZNmsRVV10VO+64Y3YKAAAAAAAAAAAJDPcAAAAAAAAAAECis88+OyorK7MzWIz+/fvX6v0GDx4czZs3r9V78r/mzJkTQ4YMyc4AoIb06tUrO4Fqev311+Oiiy7KzqAOGDJkSLz//vvZGSykdevWsckmm2RnAAAUvdLS0rjpppvi/PPPj8aNG2fnwFJZY4014v77749+/fplpwBF4LLLLos+ffpkZ1CHrbjiinHTTTfFxhtvnJ0CAAAAAAAAAEAtM9wDAAAAAAAAAACJ/vKXv8Sjjz6ancFibLrpprHTTjvVyr3Ky8tjn332qZV7sWgjR46M1157LTsDgBpQXl7usL16orKy0nAe/1VZWRlXXHFFdgbfsd1222UnAAAUtTZt2sTzzz8fhxxySJSUlGTnwDJp3rx5XHHFFXHJJZdkpwAF7Pjjj49jjz02O4N6oFWrVjFy5Mho2bJldgoAAAAAAAAAALXIcA8AAAAAAAAAACQbPnx4zJ07NzuDRSgpKYkTTzyxVu41aNCgWGWVVWrlXvywzz//PE4//fTsDABqyAEHHBCNGzfOzqAannjiiXj44YezM6hDLrvsshg/fnx2Bgv58Y9/nJ0AAFC0Ntlkk3j++edj8803z06BGlNWVhYnnHBC3HvvvVFa6q3vQM3aZZdd4rzzzjN2R7V17NjRYxIAAAAAAAAAQJHxShEAAAAAAAAAAEg2ZsyYuP/++7MzWIxtttkmevTosVzvUVZWFgcddNByvQfVc8MNN8SkSZOyMwCoIdtuu212AtUwb968OPvss7MzqIMuv/zy7AQW0qVLl+wEAICitMcee8QjjzwSHTp0yE6B5WLPPfeM5557Llq0aJGdAhSITp06xQ033BBNmjTJTqGe6dmzZ1x77bXZGQAAAAAAAAAA1BLDPQAAAAAAAAAAUAecccYZMXPmzOwMFqGsrCwGDBiwXO8xYMCAaNu27XK9B4v34YcfxqBBg7IzAKhBm2yySXYC1fDII4/Eiy++mJ1BHXTdddfFuHHjsjNYoEOHDtGsWbPsDACAotK3b9+47bbbDJpQ8LbYYot45plnDFQBy6y0tDRuu+22aN26dXYK9dQvf/nLOOaYY7IzAAAAAAAAAACoBYZ7AAAAAAAAAACgDnj33Xfj9ttvz85gMXbeeefo1KnTcrv+4YcfvtyuTfVdcsklUVlZmZ0BQA3p0aNHtG/fPjuDxZg7d24MGTIkO4M67IYbbshOYIEGDRrELrvskp0BAFA0Bg4cGFdffXU0adIkOwVqRefOnePJJ5+Mrl27ZqcA9dgNN9wQPXr0yM6gHispKYlzzz03Nt544+wUAAAAAAAAAACWM8M9AAAAAAAAAABQRwwdOjSmTZuWncEiNG7cOAYNGrRcrt2/f//o2LHjcrk21ff666/HZZddlp0BQA36xS9+kZ1ANTzwwAMxbty47AzqsCuvvDI++OCD7AwW6N69e3YCAEBROP/882PEiBHRoEGD7BSoVWuttVY89thjscUWW2SnAPXQYYcdFoccckh2BgWgvLw8/vCHP0RpqaNZAAAAAAAAAAAKmVeHAAAAAAAAAABAHTFlypT4/e9/n53BYuy1117RsmXLGr/ukUceWePXZMnMnz8/zj777OwMAGrYlltumZ3AYnz99ddxzjnnZGdQx1VVVcUf//jH7AwW6NKlS3YCAEDBu+SSS+K0006LkpKS7BRI0aZNm7jvvvuM9wBLpEOHDnHhhRcaWqHGdOvWLa688srsDAAAAAAAAAAAliOvNgIAAAAAAAAAgDpk2LBh8cknn2RnsAjl5eUxaNCgGr1mnz59YsMNN6zRa7Lk/vrXv8Z9992XnQFADSotLY1u3bplZ7AYjz/+eIwbNy47g3rgwgsvjOnTp2dnEBHrrLNOdgIAQEG74YYb4oQTTsjOgHStW7eO++67L7bddtvsFKCeuPHGG2PVVVfNzqDA9O3bN/baa6/sDAAAAAAAAAAAlhPDPQAAAAAAAAAAUIfMmTMnrrrqquwMFqNPnz7RuHHjGrvescceW2PXYunMmzcvzjjjjOwMAGrYbrvtFiuuuGJ2BotQVVUVv/nNb7IzqCdmzZoVDz/8cHYGEbHmmmtGWVlZdgYAQEG64YYb4pe//GV2BtQZrVu3jttvvz222GKL7BSgjhs8eHD89Kc/zc6gADVo0CAuvfTSqKioyE4BAAAAAAAAAGA5MNwDAAAAAAAAAAB1zAUXXBDvvfdedgaL0KpVqxgwYECNXGvHHXeMzTffvEauxdK7995748UXX8zOAKCGbbfddtkJLMbzzz8fzz33XHYG9ciVV14ZVVVV2RlFr1GjRrHNNttkZwAAFJxrr73WaA98j1VXXTXuu+++6N69e3YKUEd17tw5TjnllOwMCli7du3i8ssvz84AAAAAAAAAAGA5MNwDAAAAAAAAAAB1TFVVVVx88cXZGSzGoYceWiPXOfnkk6OkpKRGrsXSmTFjRgwaNCg7A4DloEePHtkJLIaDDllSo0ePjldeeSU7g4jYZJNNshMAAArKJZdcEkceeWR2BtRZrVu3jvvvvz86d+6cnQLUQVdffXWstNJK2RkUuP333z922WWX7AwAAAAAAAAAAGqY4R4AAAAAAAAAAKiDfve738Xrr7+encEirLXWWnH88ccv0zW22GKL6NWrVw0VsbRuvvnmmDBhQnYGADWsYcOGscEGG2RnsAj//Oc/47777svOoB669957sxOIiB/96EfZCQAABeOss86KE044ITsD6rw11lgj7r///mjTpk12ClCHHHvssbHVVltlZ1AEGjRoEBdddFGUljqqBQAAAAAAAACgkHg1CAAAAAAAAAAA1FHnn39+dgKL0bdv32X6+lNPPTXKyspqqIal8Z///CcGDBiQnQHAcrD33ntHkyZNsjNYhLvuuis7gXrqmmuuiRkzZmRnFL2OHTtmJwAAFIRTTjklBg4cmJ0B9cY666wTo0aNisaNG2enAHVARUVFDBo0KDuDIrLeeuvFRRddlJ0BAAAAAAAAAEANMtwDAAAAAAAAAAB11F133RUvvPBCdgaL0KVLlzjwwAOX6mvXX3/92GmnnWq4iCV1+eWXx5w5c7IzAFgOevbsmZ3AIkyfPj0uueSS7AzqqVmzZsUzzzyTnVH0Vl999ewEAIB677DDDosRI0YYeIcl1L179/jTn/6UnQHUAZdeemm0adMmO4Mic+SRR8a6666bnQEAAAAAAAAAQA0x3AMAAAAAAAAAAHXY8OHDo6qqKjuDRejfv/9Sfd3AgQNjhRVWqOEalsSbb74ZF1xwQXYGAMvJxhtvnJ3AIvz5z3+OWbNmZWdQj915553ZCUVvtdVWc8A8AMAy2GGHHeLyyy+PRo0aZadAvbTtttvG9ddfn50BJNpss81i//33z86gCDVr1szzzAAAAAAAAAAABcRwDwAAAAAAAAAA1GFPPPFEPPHEE9kZLMJmm20WO+644xJ9Tdu2bWPPPfdcTkVU14gRI7ITAFiOOnfunJ3AD6iqqoqrr746O4N67o477ojPPvssO6OoNWzYMH7yk59kZwAA1Etdu3aNm2++OZo3b56dAvXaEUccEYMHD87OAJKce+65BvBIs+uuu8Z2222XnQEAAAAAAAAAQA0w3AMAAAAAAAAAAHXcGWecEfPmzcvO4AeUlJTESSedtERfM2jQIAcyJnv++efj9ttvz84AYDnZcccdo7y8PDuDHzB27Nh44YUXsjMoAM8991x2QtHr1q1bdgIAQL1TUVERd999d7Rq1So7BQrC0KFDY++9987OAGrZvvvuG1tvvXV2BkWsrKwszjrrrOwMAAAAAAAAAABqgOEeAAAAAAAAAACo41555ZV48MEHszNYhG222SZ69OhRrc8tLy+P/fbbbzkXsSiVlZVxxhlnZGcAsBz16tUrO4FFeOCBB7ITKBCjRo3KTih6HTt2zE4AAKh37r333lh33XWzM6BgNGrUKK6++uro2rVrdgpQi04//fQoKSnJzqDIbbbZZtG3b9/sDAAAAAAAAAAAlpHhHgAAAAAAAAAAqAcGDRoUs2fPzs7gB5SVlcWAAQOq9bkDBw6MFi1aLOciFuVPf/pTPP3009kZACxH3bp1y07gB8yePTuuvvrq7AwKxB//+Mf44osvsjOKWrt27bITAADqlWuvvdbYLCwHq666atx+++3RuHHj7BSgFhx55JGx0UYbZWdARESceOKJ2QkAAAAAAAAAACwjwz0AAAAAAAAAAFAPvPvuu3HnnXdmZ7AIO++8c3Tq1GmRn1NWVhYHHXRQLRXxfWbPnh0DBw7MzgBgOevcuXN2Aj/g2WefjenTp2dnUCAqKytj7Nix2RlFbbXVVstOAACoN4499tjo27dvdgYUrA022CBuvfXW7AygFpxwwgnZCfBfnTt3jqOOOio7AwAAAAAAAACAZWC4BwAAAAAAAAAA6omBAwc65LwOa9y4cQwaNGiRn3PqqafG6quvXktFfJ9bb7013n777ewMAJaj9u3be7ytw0aOHJmdQIF57rnnshOKmuEeAIDq+elPfxrnnntulJSUZKdAQdtrr73itNNOy84AlqOjjjrKcDt1zvHHH5+dAAAAAAAAAADAMjDcAwAAAAAAAAAA9cSUKVPixhtvzM5gEfbcc89o2bLlD/73ww8/vBZr+K4pU6Y4sA+gCOy6664OQq6jPv300/jjH/+YnUGBueeee2L+/PnZGUVr1VVXzU4AAKjzWrRoETfeeGM0b948OwWKwhlnnBFbb711dgawnPzqV7/KToD/0blz5zjqqKOyMwAAAAAAAAAAWEqGewAAAAAAAAAAoB4ZPHhwfPrpp9kZ/ICVVlopBg4c+L3/7eijj4511lmnlotY2NVXXx0zZszIzgBgOdtkk02yE/gBTz/9dFRVVWVnUGDGjRsX77//fnZG0WrevPkix0sBAIi4+eabo0OHDtkZUDSaNm0av/vd76Jx48bZKUAN69OnT3Tr1i07A77Xsccem50AAAAAAAAAAMBSMtwDAAAAAAAAAAD1yJw5c+Kaa67JzmAR+vTpE+uvv3506tTpWx/9+vXLTitq7733Xpx99tnZGQDUgg022CA7gR/wwAMPZCdQoP7xj39kJxS1jTbaKDsBAKDOGjx4cOy8887ZGVB01l133fjDH/6QnQHUMMMo1GVdunSJvffeOzsDAAAAAAAAAIClYLgHAAAAAAAAAADqmREjRsSECROyM/gBrVu3jvHjx8fbb7/9rY9u3bplpxW1888/P6qqqrIzAKgFHTp0yE7ge3z22Wdx1113ZWdQoEaPHp2dUNTWXnvt7AQAgDqpV69eMWjQoOwMKFr77bdfHHHEEdkZQA3p2bNnbLbZZtkZsEj9+vXLTgAAAAAAAAAAYCkY7gEAAAAAAAAAgHqmqqoqLrnkkuwMqDdefvnl+P3vf5+dAUAt6Nq1a7Ro0SI7g+/x3HPPZSdQwEaNGpWdUNRWX3317AQAgDqnYcOGcc0110STJk2yU6BolZSUxLnnnhvt2rXLTgFqwHHHHRelpY7HoG7baqutYuONN87OAAAAAAAAAABgCXllEgAAAAAAAAAA1ENXXHFF/POf/8zOgDqvqqoqzjzzzOwMAGrJNttsk53AD3j44YezEyhg48ePj4kTJ2ZnFK02bdpkJwAA1DnXX399rLvuutkZUPRatmwZ1113XXYGsIzatGkTO++8c3YGLFaDBg3i5JNPzs4AAAAAAAAAAGAJGe4BAAAAAAAAAIB66oILLshOgDrv0UcfjUcffTQ7A4BastFGG2Un8D2mT58eN998c3YGBe6tt97KTihaK6+8cnYCAECdcsABB8SBBx6YnQEssOOOO8Zxxx2XnQEsgxNOOCGaNWuWnQHV8vOf/zzKy8uzMwAAAAAAAAAAWAKGewAAAAAAAAAAoJ669dZbY/To0dkZUGfNmTMnBg8enJ0BQC1ab731shP4Hq+++mpUVlZmZ1Dgxo8fn51QtAz3AAD8Py1atIgLL7wwysrKslOAhQwdOjTatWuXnQEspT322CM7AaqtvLw8TjjhhOwMAAAAAAAAAACWgOEeAAAAAAAAAACox0aMGBFVVVXZGVAn3XXXXfH6669nZwBQizp06JCdwPd4+umnsxMoAmPGjMlOKFqGewAA/p9rr7022rZtm50BfMeqq64aV155ZXYGsBR22mkng+3UO3vuuWd2AgAAAAAAAAAAS8BwDwAAAAAAAAAA1GMPP/xwPPXUU9kZUOdMmzYtTjvttOwMAGpRu3btolWrVtkZfMf8+fPjrrvuys6gCDz66KNGTZOUl5dnJwAA1Al9+vSJPfbYIzsD+AE///nP48ADD8zOAJbQEUcckZ0AS6xbt26x5ZZbZmcAAAAAAAAAAFBNhnsAAAAAAAAAAKCeGz58eMybNy87A+qU66+/PqZMmZKdAUAt2mabbbIT+B5vv/12vPvuu9kZFIEpU6bEpEmTsjOKUvPmzbMTAADSNWvWLC644IIoLfW2XairSkpK4uyzz46GDRtmpwDVVFZWFr169crOgCVWUlISRx55ZHYGAAAAAAAAAADV5BXAAAAAAAAAAABQzz3//PMxatSo7AyoMz788MMYMmRIdgYAtWzDDTfMTuB7vPTSS9kJFJGPPvooO6EoNW3aNDsBACDdFVdcEe3atcvOABZjrbXWiosuuig7A6imvn37xsorr5ydAUtlp512MuoIAAAAAAAAAFBPeJUHAAAAAAAAAAAUgGHDhsXs2bOzM6BOuOiii6KysjI7A4Batu6662Yn8D0ef/zx7ASKyIQJE7ITilKzZs2yEwAAUvXu3TsOPPDA7Aygmo444ojYeOONszOAathzzz2zE2CptWrVKg4//PDsDAAAAAAAAAAAqsFwDwAAAAAAAAAAFIBx48bFPffck50B6f7+97/HlVdemZ0BQIIOHTpkJ/Ads2bNipEjR2ZnUETee++97ISiVFZWFm3atMnOAABIc9FFF0XDhg2zM4Bqatq0aVx44YXZGcB3XHfddTF58uRvffTu3Ts7C5bJ7rvvnp0AAAAAAAAAAEA1GO4BAAAAAAAAAIACMWTIkPjiiy+yMyDN/Pnz4+yzz87OACBJ+/btsxP4jn/9619RWVmZnUEReeONN7ITila7du2yEwAAUpx++unRrVu37AxgCW2zzTaxzz77ZGcAC6moqIhVV131Wx9lZWXZWbBMevbs6f9jAAAAAAAAAIB6wHAPAAAAAAAAAAAUiIkTJ8Yf//jH7AxI85e//CXuv//+7AwAEnTt2jWaN2+encF3vPbaa9kJFJl//vOf2QlFq2nTptkJAAC1rmXLlnHSSSdlZwBLoaSkJIYNG5adAUCBq6ioiMMOOyw7AwAAAAAAAACAxTDcAwAAAAAAAAAABWTo0KExefLk7AyodV9//XUMHTo0OwOAJJtttll2At/j6aefzk6gyIwbNy7mzp2bnVGUWrVqlZ0AAFDrLr744mjZsmV2BrCUOnfuHAMGDMjOAKDA7b777tkJAAAAAAAAAAAshuEeAAAAAAAAAAAoIDNmzIjrr78+OwNq3b333hujR4/OzgAgyfrrr5+dwHfMnTs37r///uwMitCUKVOyE4pS48aNsxMAAGrVZpttFvvuu292BrCMjj32WD/PALBc9ezZM8rKyrIzAAAAAAAAAABYBMM9AAAAAAAAAABQYM4888z48MMPszOg1syYMSMGDhyYnQFAoo4dO2Yn8B3/+te/Ys6cOdkZFCHDPTmaNm2anQAAUKvOOeecaNSoUXYGsIxWX331GD58eHYGAAWsoqIi+vTpk50BAAAAAAAAAMAiNMgOAAAAAAAAAAAAalZlZWVcfvnlcdFFF2WnQK248cYbjVUBFLk111wzO4HveP3117MTKFK77LJLNG/ePDuj6EycODE7AQCg1uyzzz7Rq1ev7AyghhxxxBFx0UUXGYIFYLnZYYcd4tZbb83OAAAAAAAAAADgBxjuAQAAAAAAAACAAvTb3/42+vbtG+uvv352CixXn3zySQwcODA7A4Bkq6++enYC3/Hqq69mJ1CkJk2alJ0AAECBGzJkSJSUlGRnADVklVVWiTPPPDP69++fnQJAgdpss82yEwAAAAAAAAAAWITS7AAAAAAAAAAAAGD5+M1vfpOdAMvdpZdeGnPmzMnOACBRs2bNYtVVV83O4Dsef/zx7AQAAIAa169fv+jatWt2BlDD+vTpEy1btszOAKBAdezYMbp06ZKdAQAAAAAAAADADzDcAwAAAAAAAAAABerGG2+MMWPGZGfAcjN+/Pi46KKLsjMASLbllltGSUlJdgYLmTRpUrz99tvZGQAAADXupJNOyk4AloOKioo488wzszMAKFAlJSWx3377ZWcAAAAAAAAAAPADDPcAAAAAAAAAAEABO+ecc2L+/PnZGbBcnHPOOdkJANQBXbt2zU7gO4z2AAAAhWjAgAGxzjrrZGcAy0mfPn2iRYsW2RkAFKiePXtmJwAAAAAAAAAA8AMM9wAAAAAAAAAAQAF78MEH45lnnsnOgBr33HPPxR133JGdAUAd0KFDh+wEvuONN97ITgAAAKhRpaWlcfTRR2dnAMtRRUVFDB48ODsDgAK10UYbZScAAAAAAAAAAPADDPcAAAAAAAAAAECBO/PMM6OysjI7A2rMN998E0OHDs3OAKCOWGONNbIT+I5XXnklOwEAAKBGnXrqqbHWWmtlZwDLWZ8+faJx48bZGQAUoJVWWil23HHH7AwAAAAAAAAAAL6H4R4AAAAAAAAAAChwzz77bPz5z3/OzoAa89BDD8Wzzz6bnQFAHdG2bdvsBBYyf/78ePLJJ7MzAAAAakxpaWkcffTR2RnUgsrKypg+fXr85z//iQ8++OBbH5MmTYovvvgiKisrszNZjlq3bh0DBgzIzgCgQG2zzTbZCQAAAAAAAAAAfI8G2QEAAAAAAAAAAMDyd8YZZ8T2228fK6ywQnYKLJNZs2Y5NA+Ab2ndunV2AguZPHlyfPLJJ9kZAAAANeaEE06ItdZaKzuDGlJZWRkfffRRvPfee/H222/HhAkT4u2334433ngj3n///Wpdo0OHDtG1a9fo1KlTrLXWWrHOOutEhw4don379tGoUaPl/CdgeTv44INj+PDh2RkAFKAePXpkJwAAAAAAAAAA8D0M9wAAAAAAAAAAQBF4/fXX4957740DDjggOwWWyS233BLvvvtudgYAdUjLli2zE1jIhAkTshMAAABq1JFHHpmdwDKYP39+vPvuu/Hyyy/Hc889F/fff39MmTJlma75/vvvf+/IT3l5eey+++7Rs2fP2GKLLeJHP/pRlJWVLdO9qH0dOnSIvn37xg033JCdAkCB2WCDDbITAAAAAAAAAAD4HqXZAQAAAAAAAAAAQO0YNGhQzJw5MzsDltrkyZPj9NNPz84AoA5Zf/31Y4UVVsjOYCHvvfdedgIAAECNOeyww2L99dfPzmApjB8/Pi6++OLYZJNNYr311ouDDz44rrvuumUe7VmUGTNmxC233BJHH310bLjhhtGxY8cYPnx4vPLKK1FZWbnc7kvNO+KII7ITAChAq666amy11VbZGQAAAAAAAAAAfIfhHgAAAAAAAAAAKBIffvhh3HLLLdkZsNSuuuqqmDFjRnYGAHXIhhtumJ3Ad/zrX//KTgAAAKgxv/rVr7ITWAJffvlljBw5Mrbeeuvo0qVLnHrqqfHaa6+l9Xz44YcxfPjw2GyzzaJbt25x/fXXx+TJk9N6qL5NN900tt566+wMAApQr169shMAAAAAAAAAAPgOwz0AAAAAAAAAAFBEBg8eHFOnTs3OgCX2zjvvxDnnnJOdAUAd07Fjx+wEvmPMmDHZCQAAADVixx13jE022SQ7g2qYMmVKXHrppdGhQ4fYf//949lnn81O+h/jx4+Po48+OlZfffUYNGhQTJgwITuJRSgpKYn+/ftnZwBQgLp165adAAAAAAAAAADAdxjuAQAAAAAAAACAIjJ9+vS44YYbsjNgiV1wwQVRVVWVnQFAHbP66qtnJ7CQefPmxV//+tfsDAAAgBpx7LHHRklJSXYGizB9+vS48MILY80114yTTz45pk6dmp20WJWVlXH++edHp06dYvDgwTFp0qTsJH7ADjvsEBUVFdkZABSY9dZbLzsBAAAAAAAAAIDvMNwDAAAAAAAAAABFZsiQITFx4sTsDKi20aNHxx/+8IfsDADqoNatW2cnsJBJkybFvHnzsjMAAACW2brrrhu9e/fOzuAHfPPNN3H77bdHly5d4vTTT485c+ZkJy2xqqqqOO+882L99deP3/3udzF37tzsJL6jefPmceqpp2ZnAFBg1l577SgrK8vOAAAAAAAAAABgIYZ7AAAAAAAAAACgyFRWVsZVV12VnQHVUllZGWeeeWZ2BgB1lOGeuuWTTz7JTgAAAKgRv/71r2OFFVbIzuB7jB8/Pn7+85/HQQcdVBA/h86YMSOOOeaY2G677eK1117LzuE79tprr+wEAApM48aNY+edd87OAAAAAAAAAABgIYZ7AAAAAAAAAACgCF1wwQXxzjvvZGfAYj366KPx2GOPZWcAUEetssoq2Qks5MMPP8xOAAAAWGZlZWWx++67Z2fwHd98801cddVVseGGGxbk74yff/75+PGPfxxXXHFFfPPNN9k5LLDeeuvFTjvtlJ0BQIHZfPPNsxMAAAAAAAAAAFiI4R4AAAAAAAAAAChSF110UXYCLNJXX30VgwYNys4AoA4z3FO3TJgwITsBAABgmR1//PHRqlWr7AwW8sknn8R+++0Xxx13XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aMC(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(8,
					"googleplay", 3,
					"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"
					), aMC(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aMC(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMC(14, "bestPlayer", 5,
					"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"
					), aMC(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aMC(16, "apple", 3,
					"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"
					), aMC(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aMC(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aMC(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aMC(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aMC(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aMC(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aMC(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aMC(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aMC(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aMC(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aMC(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aMC(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eP) {
		return canvas[eP]
	}, this.x7 = function(name) {
		for (var aC = a4b.length - 1; 0 <= aC; aC--)
			if (a4b[aC] === name) return canvas[aC];
		return aM6
	}, this.vx = function() {
		return aM5 <= 0
	}, this.aM8 = function() {
		aM5 = 0, aM9()
	}
}

function ca() {
	var aMI = [
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
		aMJ = [
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
	this.aMK = null, this.aML = null, this.aMM = null, this.aMN = null, this.aMO = null, this.aMP = null, this.aMQ = null, this.aMR = null, this.aMS = null, this.aMT = null;

	function aMa(kI, oN) {
		for (var aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aC = kI; aC < oN; aC++) aMK[aC] = bO.g7(64 * az.random(), az.value(100)) << 2, aML[aC] = bO.g7(64 * az.random(), az.value(100)) << 2, aMM[aC] = bO.g7(64 * az.random(), az.value(100)) << 2
	}

	function aMZ(kI, oN) {
		for (var colorsData = aE.data.colorsData, aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aC = kI; aC < oN; aC++) {
			var g8 = colorsData[aC];
			aMK[aC] = 4 * (g8 >> 12), aML[aC] = 4 * (g8 >> 6 & 63), aMM[aC] = 4 * (63 & g8)
		}
	}

	function aMr(fK, aMt) {
		aGe[fK] = 0, aGe[fK + 1] = 0, aGe[fK + 2] = aMt, aGe[fK + 3] = 0, aMu(fK)
	}

	function aMu(fK) {
		var fn;
		be.oV || (fn = ad.a2L(fK), fK = ad.a2M(fK), be.oV = fn >= bd.aGd[0] && fn <= bd.aGd[2] && fK >= bd.aGd[1] && fK <= bd.aGd[3])
	}
	this.fi = new Int32Array(4), this.aMX = new Int32Array(8), this.ds = function() {
		var fi = this.fi,
			fi = (fi[0] = -4 * bV.fr, fi[1] = 4, fi[2] = -fi[0], fi[3] = -fi[1], this.aMX);
		fi[0] = -4 * bV.fr - 4, fi[1] = -4 * bV.fr, fi[2] = -4 * bV.fr + 4, fi[3] = -4, fi[4] = 4, fi[5] = 4 * bV.fr - 4, fi[6] = 4 * bV.fr, fi[7] = 4 * bV.fr + 4
	}, this.dr = function() {
		if (this.aMK ? (this.aMK.fill(0), this.aML.fill(0), this.aMM.fill(0), this.aMN.fill(0), this.aMO.fill(0), this.aMP.fill(0), this.aMQ.fill(0), this.aMR.fill(0), this.aMS.fill(0), this.aMT.fill(0), this.aCv.fill(0)) : (this.aMK =
				new Uint8Array(aE.fd), this.aML = new Uint8Array(aE.fd), this.aMM = new Uint8Array(aE.fd), this.aMN = new Uint8Array(aE.fd), this.aMO = new Uint8Array(aE.fd), this.aMP = new Uint8Array(aE.fd), this.aMQ = new Uint8Array(aE.fd),
				this.aMR = new Uint8Array(aE.fd), this.aMS = new Uint8Array(aE.fd), this.aMT = new Uint8Array(aE.fd), this.aCv = new Uint8Array(aE.fd)), aE.ib)
			for (var aFA = bj.aFA, aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aC = aE.fd - 1; 0 <= aC; aC--) {
				var eq = aFA[aC],
					lx = bO.g7((aMJ[eq][3] + 1) * az.random(), az.value(100));
				aMK[aC] = aMI[eq][0] + lx * aMJ[eq][0], aML[aC] = aMI[eq][1] + lx * aMJ[eq][1], aMM[aC] = aMI[eq][2] + lx * aMJ[eq][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aMZ(0, aE.l2), aMa(aE.l2, aE.fd)) : aMa(0, aE.fd) : aMZ(0, aE.fd);
		! function() {
			var aC, fj, aMK = ad.aMK,
				aML = ad.aML,
				aMM = ad.aMM;
			for (aC = aE.fd - 1; 0 <= aC; aC--) fj = bO.g7(aMK[aC] + aML[aC] + aMM[aC], 3), aMK[aC] += aMg(fj - aMK[aC], 2), aML[aC] += aMg(fj - aML[aC], 2), aMM[aC] += aMg(fj - aMM[aC], 2), aMK[aC] -= aMK[aC] % 4, aML[aC] -= aML[aC] % 4, aMM[
				aC] -= aMM[aC] % 4
		}(),
		function() {
			for (var fg = aE.fd, aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aMN = ad.aMN, aC = 0; aC < fg; aC++) aMK[aC] += aC >> 7, aML[aC] += aC >> 5 & 3, aMM[aC] += aC >> 3 & 3, aMN[aC] = 7 & aC
		}(), this.aMd(),
			function() {
				for (var fg = aE.fd, aMO = ad.aMO, aMP = ad.aMP, aMQ = ad.aMQ, aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aC = 0; aC < fg; aC++) {
					var eO = aMK[aC],
						vt = aML[aC],
						g0 = aMM[aC];
					60 <= eO + vt + g0 ? (aMO[aC] = Math.max(eO - 40, 3 & eO), aMP[aC] = Math.max(vt - 40, 3 & vt), aMQ[aC] = Math.max(g0 - 40, 3 & g0)) : (aMO[aC] = eO + 40, aMP[aC] = vt + 40, aMQ[aC] = g0 + 40)
				}
			}(),
			function() {
				for (var fg = aE.fd, aMR = ad.aMR, aMS = ad.aMS, aMT = ad.aMT, aMK = ad.aMK, aML = ad.aML, aMM = ad.aMM, aC = 0; aC < fg; aC++) {
					var eO = aMK[aC],
						vt = aML[aC],
						g0 = aMM[aC];
					688 <= eO + vt + g0 ? (aMR[aC] = eO - 88, aMS[aC] = vt - 88, aMT[aC] = g0 - 88) : (aMR[aC] = Math.min(eO + 88, 252 + (3 & eO)), aMS[aC] = Math.min(vt + 88, 252 + (3 & vt)), aMT[aC] = Math.min(g0 + 88, 252 + (3 & g0)))
				}
			}()
	}, this.aBn = function(player) {
		var h = bR.gF;
		return h[0] = this.aMK[player], h[1] = this.aML[player], h[2] = this.aMM[player], h
	}, this.aMd = function() {
		for (var aC = aE.fd - 1; 0 <= aC; aC--) this.aCv[aC] = this.aMK[aC] + this.aML[aC] + this.aMM[aC] < 280 ? 0 : 1
	}, this.a2L = function(fK) {
		return bO.g7(fK, 4) % bV.fr
	}, this.a2M = function(fK) {
		return bO.g7(fK, 4 * bV.fr)
	}, this.a1t = function(fn, fp) {
		return Math.floor(4 * (fp * bV.fr + fn))
	}, this.a29 = function(fK) {
		var fi = this.fi;
		return this.aMh(fK + fi[0]) || this.aMh(fK + fi[1]) || this.aMh(fK + fi[2]) || this.aMh(fK + fi[3])
	}, this.g4 = function(fK) {
		var fi = this.fi;
		return this.fl(fK + fi[0]) || this.fl(fK + fi[1]) || this.fl(fK + fi[2]) || this.fl(fK + fi[3])
	}, this.a27 = function(fK, player) {
		var fi = this.fi;
		return this.aMi(fK + fi[0], player) || this.aMi(fK + fi[1], player) || this.aMi(fK + fi[2], player) || this.aMi(fK + fi[3], player)
	}, this.aMj = function(aC, aMk, aMl, aMm) {
		this.aMK[aC] = aMk >> 16, this.aML[aC] = aMk >> 8 & 255, this.aMM[aC] = 255 & aMk, this.aMO[aC] = aMl >> 16, this.aMP[aC] = aMl >> 8 & 255, this.aMQ[aC] = 255 & aMl, this.aMR[aC] = aMm >> 16, this.aMS[aC] = aMm >> 8 & 255, this.aMT[aC] =
			255 & aMm
	}, this.aMn = function(aC) {
		return [(this.aMK[aC] << 16) + (this.aML[aC] << 8) + this.aMM[aC], (this.aMO[aC] << 16) + (this.aMP[aC] << 8) + this.aMQ[aC], (this.aMR[aC] << 16) + (this.aMS[aC] << 8) + this.aMT[aC]]
	}, this.hG = function(fK) {
		return 208 <= aGe[fK + 3]
	}, this.a2F = function(player, fK) {
		return this.hG(fK) && this.a2I(player, fK)
	}, this.a2I = function(player, fK) {
		return player === this.fY(fK)
	}, this.aMo = function(fK) {
		return 208 <= aGe[fK + 3] && aGe[fK + 3] < 224
	}, this.kD = function(fK) {
		return 224 <= aGe[fK + 3] && aGe[fK + 3] < 248
	}, this.aMp = function(fK) {
		return 248 <= aGe[fK + 3]
	}, this.a28 = function(fK) {
		for (var fi = this.fi, aC = 3; 0 <= aC; aC--)
			if (this.iy(fK + fi[aC])) return !0;
		return !1
	}, this.fb = function(fK) {
		return this.hG(fK) || this.fX(fK)
	}, this.iy = function(fK) {
		return 0 === aGe[fK + 3] && 2 === aGe[fK + 2]
	}, this.fX = function(fK) {
		return 0 === aGe[fK + 3] && 1 === aGe[fK + 2]
	}, this.a0y = function(fK) {
		return 0 === aGe[fK + 3] && 3 === aGe[fK + 2]
	}, this.fl = function(fK) {
		return 0 === aGe[fK + 3] && 5 === aGe[fK + 2]
	}, this.aMh = function(fK) {
		return 0 === aGe[fK + 3] && 3 <= aGe[fK + 2]
	}, this.fO = function(fK) {
		return (aGe[fK] >> 1 << 8) + aGe[fK + 1]
	}, this.aMq = function(fK) {
		return 1 & aGe[fK]
	}, this.aMi = function(fK, player) {
		return this.fX(fK) || this.hG(fK) && player !== this.fY(fK)
	}, this.fY = function(fK) {
		return ((3 & aGe[fK]) << 7) + ((3 & aGe[fK + 1]) << 5) + ((3 & aGe[fK + 2]) << 3) + (7 & aGe[fK + 3])
	}, this.a2G = function(fK) {
		aMr(fK, 1)
	}, this.aMs = function(fK) {
		aMr(fK, 2)
	}, this.a1u = function(fK, player) {
		aGe[fK] = this.aMK[player], aGe[fK + 1] = this.aML[player], aGe[fK + 2] = this.aMM[player], aGe[fK + 3] = 208 + this.aMN[player], aMu(fK)
	}, this.hB = function(fK, player) {
		aGe[fK] = this.aMO[player], aGe[fK + 1] = this.aMP[player], aGe[fK + 2] = this.aMQ[player], aGe[fK + 3] = 224 + this.aMN[player], aMu(fK)
	}, this.kE = function(fK, player) {
		aGe[fK] = this.aMR[player], aGe[fK + 1] = this.aMS[player], aGe[fK + 2] = this.aMT[player], aGe[fK + 3] = 248 + this.aMN[player], aMu(fK)
	}
}

function cz() {
	var aMv = 0,
		aMw = new Uint16Array(64);

	function fC(a9f) {
		aMv -= 2;
		for (var aC = a9f; aC < aMv; aC += 2) aMw[aC] = aMw[aC + 2], aMw[aC + 1] = aMw[aC + 3]
	}
	this.dr = function() {
		aMv = 0
	}, this.el = function() {
		var aC, kB, jK;
		if (0 !== aMv)
			if (0 === ah.ne[aE.fQ]) aMv = 0;
			else if (0 === ae.gn(aE.fQ)) aMv = 0;
		else
			for (aC = aMv - 2; 0 <= aC; aC -= 2)(kB = aMw[aC]) < aE.fd && 0 === ah.ne[kB] ? fC(aC) : (jK = aMw[aC + 1], (kB >= aE.fd && bw.aMy(aE.fQ) || kB < aE.fd && bw.aMz(aE.fQ, kB)) && (bB.i7.iE(jK, kB), fC(aC)))
	}, this.iF = function(kB, jK) {
		! function(kB, jK) {
			for (var aC = 0; aC < aMv; aC += 2)
				if (aMw[aC] === kB) return aMw[aC + 1] = Math.min(aMw[aC + 1] + jK, 1023), 1;
			return
		}(kB, jK) && 64 !== aMv && (aMw[aMv] = kB, aMw[aMv + 1] = jK, aMv += 2)
	}
}

function cb() {
	function aN7(player) {
		var eh;
		bD.h2.a7j(player) && (eh = ah.hi[player] - ah.a7o[player] + ae.aN9(player), bg.h6(player, Math.abs(eh), eh < 0 ? 18 : 12)), ah.hi[player] = 0, ah.a7o[player] = 0
	}

	function aNG() {
		aY.show(!1, !1, !1, !0), aX.aFg(), bU.a40.a4o()
	}

	function aN3(player, aNF) {
		for (var aC = aNF.length - 1; 0 <= aC; aC--) ae.aNI(aNF[aC], player)
	}

	function aN6(player) {
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
					ad.a2F(player, hE) && ad.a2G(hE)
				}
		}
		jb[player] = jd[player] = 0, ja[player] = jc[player] = Math.max(fr, bV.fs)
	}
	this.dz = function(hE) {
		var player, eh = ah.hU[hE] + ah.a1p[hE];
		bQ.z.l6[hE] ? eh && (aN3(player = hE, ae.aN4(player)), ag.aN5(player), aN6(player), aG.h4(player), ae.clear(player), aN7(player), function(player) {
			ah.a1p[player] = 0, ah.h8[player] = [], ah.hM[player] = [], ah.hN[player] = [], ah.g5[player] = []
		}(player)) : !eh && ah.h8[hE].length || this.aN2(hE)
	}, this.aN2 = function(player) {
		! function(player) {
			bD.h2.kP(player) || (ah.a4s[player] = bl.a56.aNE(), aE.a4G++);
			var aNF = ae.aN4(player);
			0 === aNF.length ? bD.h2.a7g(player) && aNG() : (aN3(player, aNF), function(player, aNF) {
				var aNK = aNF[function(aNF) {
					var aC, eP = 0;
					for (aC = aNF.length - 1; 1 <= aC; aC--) ah.hU[aNF[aC]] > ah.hU[aNF[eP]] && (eP = aC);
					return eP
				}(aNF)];
				9 === aE.lK && (1 === bj.fe[player] ? az.ku(8) && b0.aNL(aNK) : aF.iQ[player] && (aO.aB6(765, 0), aO.a2i(280, L(149, [ah.a2j[aNK], ah.a2j[player]]), 765, aNK, bE.qK, bE.rl, -1, !0)));
				if (bD.h2.a7g(player)) aNG(), aO.a4S(aNK, 1);
				else {
					for (var aC = aNF.length - 1; 0 <= aC; aC--)
						if (bD.h2.a7j(aNF[aC]) && (bg.na[4 - bD.h2.kP(player)]++, bD.h2.a7g(aNF[aC]))) return aO.a4S(player, 0);
					bD.h2.kP(player) || aO.aAq(0, player, aNK)
				}
			}(player, aNF))
		}(player), ag.aN5(player), aN6(player), aN7(player),
			function(player) {
				ah.ne[player] = 0, ah.h8[player] = null, ah.hM[player] = null, ah.hN[player] = null, ah.g5[player] = null
			}(player), aG.h4(player), ae.clear(player), bQ.aNC.aND(player)
	}
}

function d4() {
	var input;

	function aNM(e) {
		(e = e.target.files) && 0 < e.length && b7.aNP(e[0])
	}

	function aNT(e) {
		var eq = new Image;
		eq.onload = aNU, eq.src = e.target.result
	}

	function aNU(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aNW = bm.buffer.data[162].value,
			max = Math.min(bV.aNX, aNW),
			aNW = (max = a1.id || bM.u5() ? Math.min(1400, aNW) : max) / Math.max(j, k);
		if (aNW < 1 && (j = Math.floor(aNW * j + .125), k = Math.floor(aNW * k + .125)), max < j || max < k || j < 10 || k < 10) aNW = "Invalid Image Dimensions!", a1.zZ ? a1.zZ.showToast(aNW) : alert(aNW);
		else {
			for (var max = document.createElement("canvas"), aNW = (max.width = j, max.height = k, max.getContext("2d")), aNZ = document.createElement("canvas"), aNa = (aNZ.width = e.width, aNZ.height = e.height, aNZ.getContext("2d")), e = (aNa
					.drawImage(e, 0, 0), aNa.getImageData(0, 0, aNZ.width, aNZ.height)), aNa = aNW.createImageData(j, k), src = e.data, aNd = aNa.data, aDV = aNZ.width / j, aDW = aNZ.height / k, fp = 0; fp < k; fp++)
				for (var fn = 0; fn < j; fn++) {
					var aNe = Math.floor(fn * aDV),
						aNe = 4 * (Math.floor(fp * aDW) * aNZ.width + aNe),
						aNh = 4 * (fp * j + fn);
					aNd[aNh] = src[aNe], aNd[1 + aNh] = src[1 + aNe], aNd[2 + aNh] = src[2 + aNe], aNd[3 + aNh] = 255
				}
			aNW.putImageData(aNa, 0, 0), 20 === u.vX && u.a5T().aNU(max)
		}
	}
	this.dr = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aNM
	}, this.xy = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNN = function() {
		input.click()
	}, this.aNP = function(aNQ) {
		var h = aNQ.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aNT, h.readAsDataURL(aNQ))
	}
}

function d2() {
	this.aNi = new Uint32Array(aE.fd), this.dr = function() {
		10 === aE.lK && this.aNi.fill(0)
	}, this.el = function() {
		10 === aE.lK && this.lr()
	}, this.lr = function() {
		for (var hE, target, aFt, aNi = this.aNi, x0 = am.ld, a7p = ah.hi, aC = am.lY - 1; 0 <= aC; aC--)(hE = x0[aC]) >= aE.l2 || (target = Math.max(bO.g7(a7p[hE], 4), 2048), aFt = Math.max(af.aFu(hE), 100), aNi[hE] += bO.g7(aFt * target, 1e4),
			aNi[hE] > target && (aNi[hE] = target))
	}, this.a7v = function(player, iQ) {
		return 10 !== aE.lK || bD.h2.kP(player) ? iQ : Math.min(this.aNi[player], iQ)
	}, this.a81 = function(player, iQ) {
		10 !== aE.lK || bD.h2.kP(player) || (this.aNi[player] -= iQ)
	}
}

function d5() {
	var aNj = -1,
		aNk = null,
		aNl = -1,
		yP = 4;

	function aNn() {
		aN.aA9() ? be.render() : be.a4Q()
	}

	function aNv(eq, fj) {
		var eO = eq >> 16,
			vt = eq >> 8 & 255,
			eq = 255 & eq,
			aNw = 255 - fj,
			aNw = (aNw < eO && aNw < vt && aNw < eq && (fj = -fj), aNj >> 7),
			aNy = aNj >> 5 & 3,
			aNz = aNj >> 3 & 3;
		return (Math.max(Math.min(eO + fj, 252 + aNw), aNw) << 16) + (Math.max(Math.min(vt + fj, 252 + aNy), aNy) << 8) + Math.max(Math.min(eq + fj, 252 + aNz), aNz)
	}

	function aNm() {
		return -1 !== aNj && (ad.aMj(aNj, aNk[0], aNk[1], aNk[2]), aNs(aNj), aNj = -1)
	}

	function aNs(player) {
		bi.dy = !0;
		for (var ja = ah.ja[player], jc = ah.jc[player], jb = ah.jb[player], jd = ah.jd[player], fp = jc; fp <= jd; fp++)
			for (var fn = ja; fn <= jb; fn++) {
				var fK = ad.a1t(fn, fp);
				ad.a2F(player, fK) && (ad.aMp(fK) ? ad.kE(fK, player) : ad.kD(fK) ? ad.hB(fK, player) : ad.a1u(fK, player))
			}
	}
	this.dr = function() {
		aNk = null, aNl = aNj = -1, yP = bO.is(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.el = function(c1) {
		if (bm.buffer.data[15].value && 0 !== yP && (c1 || !bM.u5())) {
			var c1 = bP.hx(bM.hl),
				hy = bP.hz(bM.hm);
			if (bP.i0(c1, hy)) {
				c1 = bP.g3(c1, hy), hy = bP.fW(c1);
				if (aNl === hy)
					if (ad.hG(hy)) {
						if (aNj === ad.fY(hy)) return
					} else if (-1 === aNj) return;
				! function(fK) {
					ad.hG(fK) ? (fK = ad.fY(fK)) !== aNj && (aNm(), function(player) {
						aNj = player, aNk = ad.aMn(player);
						var aNq = function() {
							var q9 = aNk,
								aNt = yP << 2,
								aNu = aNt << 1;
							return [aNv(q9[0], aNt), aNv(q9[1], aNu), aNv(q9[2], aNu)]
						}();
						ad.aMj(player, aNq[0], aNq[1], aNq[2]), aNs(player)
					}(fK), aNn()) : aNm() && aNn()
				}(aNl = hy)
			} else aNm() && aNn()
		}
	}
}

function d6() {
	var yC = 0,
		aO0 = 0,
		aO1 = 0,
		aO2 = 0,
		aNl = -1;

	function aO5(fK) {
		if (aNl === fK) return !1;
		if (-1 === (aNl = fK)) yC = 0, aO.aBJ(yC, 0);
		else {
			if (ad.hG(fK)) return aO1 = ad.fY(fK), l1 = ah.hi[aO1] - ah.a7o[aO1], (4 !== yC || l1 !== aO0) && (yC = 4, aO0 = l1, aO.aBJ(yC, l1), !0);
			if (ad.fX(fK)) return 3 !== yC && (yC = 3, aO.aBJ(yC, 0), !0);
			if (ad.fl(fK)) return 2 !== yC && (yC = 2, aO.aBJ(yC, 0), !0);
			var l1 = bQ.lr.a9x(bM.hl, bM.hm);
			if (-1 === l1) return 1 !== yC && (yC = 1, aO.aBJ(yC, 0), !0);
			fK = bQ.z.aAy[l1];
			if (aO1 = bQ.z.mv[l1], aO2 = bQ.z.mw[l1] >> 3, 5 === yC && fK === aO0) return !1;
			yC = 5, aO0 = fK, aO.aBJ(yC, fK)
		}
		return !0
	}
	this.dr = function() {
		aO2 = aO1 = aO0 = yC = 0, aNl = -1
	}, this.el = function(c1) {
		var hy;
		!c1 && bM.u5() || (c1 = bP.hx(bM.hl), hy = bP.hz(bM.hm), bP.i0(c1, hy) ? (c1 = bP.g3(c1, hy), aO5(bP.fW(c1))) : aO5(-1))
	}, this.nL = function() {
		var aO7, l1, a9v, aO6;
		if (0 !== yC && 2 !== yC)
			if (bM.u5()) {
				if (1 !== yC && 3 !== yC) {
					if (4 === yC) return void(l1 = ah.hi[aO1] - ah.a7o[aO1], aO0 === l1 || (aO0 = l1, aO.aBJ(yC, l1)));
					(a9v = bQ.lr.o4(aO2, aO1)) < 0 ? (yC = 1, aO.aBJ(yC, 0)) : (aO6 = bQ.z.aAy[a9v]) !== aO0 && (aO0 = aO6, aO.aBJ(yC, aO6))
				}
			} else if (1 === yC) - 1 !== (a9v = bQ.lr.a9x(bM.hl, bM.hm)) && (yC = 5, aO0 = bQ.z.aAy[a9v], aO.aBJ(yC, aO0));
		else if (3 === yC) ad.hG(aNl) && (yC = 4, aO7 = ad.fY(aNl), aO0 = ah.hi[aO7] - ah.a7o[aO7], aO.aBJ(yC, aO0));
		else if (4 === yC) {
			if (ad.hG(aNl)) return void(aO7 = ad.fY(aNl), l1 = ah.hi[aO7] - ah.a7o[aO7], aO0 === l1 || (aO0 = l1, aO.aBJ(yC, l1)));
			yC = 3, aO.aBJ(yC, 0)
		} else - 1 === (a9v = bQ.lr.a9x(bM.hl, bM.hm)) ? (yC = 1, aO.aBJ(yC, 0)) : (aO6 = bQ.z.aAy[a9v]) !== aO0 && (aO0 = aO6, aO.aBJ(yC, aO6))
	}
}

function df() {
	function aO9(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOH, h.readAsText(e))
	}

	function aOH(e) {
		var aOK;
		aE.a4E || (e = JSON.parse(e.target.result), aOK = aE.data = new a8o, aOL(e, aOK, "mapType", 0, 2), aOL(e, aOK, "mapProceduralIndex", 0, 255), aOL(e, aOK, "mapRealisticIndex", 0, 255), aOL(e, aOK, "mapSeed", 0, 16383), function(aOJ, aOK, hF,
				max) {
				aOJ = aOJ[hF];
				aOK[hF] = aOR(aOJ) ? aOJ.slice(0, max) : aOK[hF]
			}(e, aOK, "mapName", 20), function(aOJ, aOK, hF) {
				var aNV;
				2 === aOK.mapType && (!aOR(aOJ = aOJ[hF]) || aOJ.length <= 20 ? aOK.mapType = 0 : ((aNV = new Image).onload = function() {
					bC.aOS.aOT(aNV, 1), aNV.onload = null, aNV = null
				}, aNV.src = aOJ))
			}(e, aOK, "canvas"), aOL(e, aOK, "passableWater", 0, 1), aOL(e, aOK, "passableMountains", 0, 1), aOL(e, aOK, "playerCount", 1, 512), aOL(e, aOK, "humanCount", 1, 1), aOL(e, aOK, "selectedPlayer", 0, 0), aOL(e, aOK, "gameMode", 0, 1),
			aOL(e, aOK, "playerMode", 0, 0), aOL(e, aOK, "battleRoyaleMode", 0, 0), aOL(e, aOK, "numberTeams", 0, 8), aOL(e, aOK, "isZombieMode", 0, 0), aOL(e, aOK, "isContest", 0, 0), aOL(e, aOK, "isReplay", 0, 0), aOO(e, aOK, "elo", 16, 2,
				16383), aOL(e, aOK, "colorsType", 0, 1), aOL(e, aOK, "colorsPersonalized", 0, 1), aOO(e, aOK, "colorsData", 32, 512, 262143), aOL(e, aOK, "selectableColor", 0, 1), aOO(e, aOK, "teamPlayerCount", 16, 9, 512), aOL(e, aOK,
				"neutralBots", 0, 1), aOL(e, aOK, "botDifficultyType", 0, 3), aOL(e, aOK, "botDifficultyValue", 0, 15), aOO(e, aOK, "botDifficultyTeam", 8, 9, 15), aOO(e, aOK, "botDifficultyData", 8, 512, 15), aOL(e, aOK, "spawningType", 0, 2),
			aOL(e, aOK, "spawningSeed", 0, 16383), aOO(e, aOK, "spawningData", 16, 1024, 4095), aOL(e, aOK, "selectableSpawn", 0, 1), aOL(e, aOK, "playerNamesType", 0, 2),
			function(aOJ, aOK, hF, size, max) {
				var a6r = aOJ[hF];
				if (Array.isArray(a6r)) {
					for (var a6s = new Array(size), fg = Math.min(a6r.length, size), aC = 0; aC < fg; aC++) a6s[aC] = aOR(a6r[aC]) ? a6r[aC].slice(0, max) : "";
					a6s.fill("", fg), aOK[hF] = a6s
				}
			}(e, aOK, "playerNamesData", 512, 20), aOL(e, aOK, "selectableName", 0, 1), aOL(e, aOK, "aIncomeType", 0, 2), aOL(e, aOK, "aIncomeValue", 0, 255), aOO(e, aOK, "aIncomeData", 8, 512, 255), aOL(e, aOK, "tIncomeType", 0, 2), aOL(e, aOK,
				"tIncomeValue", 0, 255), aOO(e, aOK, "tIncomeData", 8, 512, 255), aOL(e, aOK, "iIncomeType", 0, 2), aOL(e, aOK, "iIncomeValue", 0, 255), aOO(e, aOK, "iIncomeData", 8, 512, 255), aOL(e, aOK, "sResourcesType", 0, 2), aOL(e, aOK,
				"sResourcesValue", 0, 2047), aOO(e, aOK, "sResourcesData", 16, 512, 2047), u.y(), u.z.vQ[0] = 0, u.v(19))
	}

	function aOL(aOJ, aOK, hF, min, max) {
		aOJ = aOJ[hF];
		aOK[hF] = "number" == typeof aOJ && min <= aOJ && aOJ <= max ? Math.floor(aOJ) : aOK[hF]
	}

	function aOR(pc) {
		return "string" == typeof pc
	}

	function aOO(aOJ, aOK, hF, aOU, size, max) {
		var a6r = aOJ[hF];
		if (Array.isArray(a6r)) {
			for (var a6s = new(8 === aOU ? Uint8Array : 16 === aOU ? Uint16Array : Uint32Array)(size), fg = Math.min(a6r.length, size), aC = 0; aC < fg; aC++) a6s[aC] = bO.is(a6r[aC], 0, max);
			aOK[hF] = a6s
		}
	}
	this.aO8 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aO9, input.click()
	}, this.aOA = function() {
		for (var aOD, aHF, a9O = aE.data, keys = Object.keys(a9O), aOB = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9O[key] instanceof Uint8Array || a9O[key] instanceof Uint16Array || a9O[key] instanceof Uint32Array ? aOB[key] = Array.from(a9O[key]) : aOB[key] = a9O[key]
		}
		aOB.canvas = 2 === aOB.mapType && aOB.canvas ? aOB.canvas.toDataURL() : null, aOD = aOB, aOD = JSON.stringify(aOD, null, 2), aOD = new Blob([aOD], {
			type: "application/json"
		}), (aHF = document.createElement("a")).href = URL.createObjectURL(aOD), aHF.download = "tt_scenario.json", aHF.click()
	}
}

function cf() {
	var aOV, aOW, size, kB, iQ, aOX;

	function aOY(player) {
		return player < aE.l2 ? aOV * player : aOV * aE.l2 + aOW * (player - aE.l2)
	}
	this.dr = function() {
		aOV = aE.l2 < 16 ? 12 : 8, aOW = 4;
		var fg = aOY(aE.fd);
		size = new Uint8Array(aE.fd), kB = new Uint16Array(fg), iQ = new Uint32Array(fg), aOX = new Uint8Array(fg)
	}, this.t2 = function(aCP, aOZ) {
		var aOa = this.hj(aCP, aOZ),
			aOZ = (this.hh(aCP, aOZ, 0), bD.h2.h5(aCP, aOa));
		bg.h6(aCP, aOa - aOZ, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNI = function(player, aOZ) {
		var aOd, aOZ = function(player, aOZ) {
			var aC, lx = aOY(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kB[lx + aC] === aOZ) return aC;
			return size[player]
		}(player, aOZ);
		aOZ !== size[player] && (aOd = iQ[aOY(player) + aOZ], this.h7(player, aOZ), this.ep(player, aOd, aE.fd))
	}, this.kN = function(player, aOZ) {
		for (var lx = aOY(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOZ) return !0;
		return !1
	}, this.kg = function(player) {
		return player < aE.l2 ? size[player] < aOV : size[player] < aOW
	}, this.gn = function(player) {
		return size[player]
	}, this.gs = function(player, aC) {
		return kB[aOY(player) + aC]
	}, this.gt = function(player, aC) {
		return iQ[aOY(player) + aC]
	}, this.hj = function(player, aOZ) {
		for (var lx = aOY(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOZ) return iQ[lx + aC];
		return 0
	}, this.aN9 = function(player) {
		for (var lx = aOY(player), g8 = 0, aC = size[player] - 1; 0 <= aC; aC--) g8 += iQ[lx + aC];
		return g8
	}, this.hh = function(player, aOZ, aOd) {
		for (var lx = aOY(player), aC = size[player] - 1; 0 <= aC; aC--) kB[lx + aC] === aOZ && (iQ[lx + aC] = aOd)
	}, this.hS = function(player, aC, aOd) {
		iQ[aOY(player) + aC] = Math.max(aOd, 0)
	}, this.hT = function(player, aC) {
		aOX[aOY(player) + aC] = 0
	}, this.gu = function(player, aC) {
		return aOX[aOY(player) + aC]
	}, this.ep = function(player, aOd, aOZ) {
		ap.jp.ke[player] = ap.jp.ke[aOZ] = 8, bD.h2.a7j(aOZ) && bg.na[6 - bD.h2.kP(player)]++;
		for (var lx = aOY(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOZ) return iQ[lx + aC] += aOd, void(iQ[lx + aC] = iQ[lx + aC] > aE.a7r ? aE.a7r : iQ[lx + aC]);
		kB[lx + size[player]] = aOZ, iQ[lx + size[player]] = aOd, aOX[lx + size[player]] = 1, size[player]++, aOZ === aE.fQ ? aO.a4S(player, 5) : player < aE.l2 && player === aE.fQ && ag.aAs(aOZ)
	}, this.h7 = function(player, eP) {
		var fz, lx;
		if (0 !== size[player])
			for (lx = aOY(player), size[player]--, fz = eP; fz < size[player]; fz++) kB[lx + fz] = kB[lx + fz + 1], iQ[lx + fz] = iQ[lx + fz + 1], aOX[lx + fz] = aOX[lx + fz + 1]
	}, this.aN4 = function(player) {
		for (var fz, lx, aNF = [], aC = am.lY - 1; 0 <= aC; aC--)
			for (lx = aOY(am.ld[aC]), fz = size[am.ld[aC]] - 1; 0 <= fz; fz--)
				if (kB[lx + fz] === player) {
					aNF.push(am.ld[aC]);
					break
				} return aNF
	}
}

function cg() {
	var aOe;

	function aOg(player) {
		var eO, kh;
		return bD.h2.kP(player) && player < aE.l2 ? 0 : (eO = aOe[bO.g7((aE.fd - 1) * ah.hU[player], aE.km)], bi.kz() < 1920 && (eO = Math.max(bO.g7(100 * (13440 - 6 * bi.kz()), 1920), eO)), kh = af.ki(player), ah.hi[player] > kh && (eO -= bO.g7(2 *
			eO * (ah.hi[player] - kh), kh)), Math.min(Math.max(eO, 0), 700))
	}

	function aOs(oH) {
		for (var hU = ah.hU, ld = am.ld, aC = am.lY - 1; 0 <= aC; aC--) {
			var hE = ld[aC];
			bD.h2.h5(hE, bO.g7(oH * hU[hE], 32))
		}
	}

	function aOp() {
		var a0r = aE.fQ;
		bR.gC[0] = ah.hi[a0r] - ah.a7o[a0r]
	}

	function aOr(eP) {
		var a0r = aE.fQ,
			a0r = ah.hi[a0r] - ah.a7o[a0r] - bR.gC[0];
		af.aEU += a0r, bg.na[eP] += a0r
	}
	this.aEU = 0, this.dx = function() {
		for (var fg = aE.fd, aC = (aOe = new Uint16Array(fg), 0); aC < fg; aC++) aOe[aC] = 100 + aOf(bO.g7(25600 * aC, fg - 4), 9)
	}, this.dr = function() {
		(this.aEU = 0) === aE.data.iIncomeType ? this.aFu = aOg : 1 === aE.data.iIncomeType ? this.aFu = function(player) {
			return bO.g7(aE.data.iIncomeValue * aOg(player), 64)
		} : this.aFu = function(player) {
			return bO.g7(aE.data.iIncomeData[player] * aOg(player), 64)
		}
	}, this.el = function() {
		if (bi.kz() % 10 == 9 && (af.aEU = 0, function() {
				aOp();
				for (var ld = am.ld, hi = ah.hi, aC = am.lY - 1; 0 <= aC; aC--) {
					var hE = ld[aC],
						aOq = bO.g7(af.aFu(hE) * hi[hE], 1e4);
					bD.h2.h5(hE, Math.max(aOq, 1))
				}
				aOr(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aOp(), 1 === aE.data.aIncomeType)
						for (var hU = ah.hU, ld = am.ld, oH = aE.data.aIncomeValue, aC = am.lY - 1; 0 <= aC; aC--) {
							var hE = ld[aC];
							bD.h2.h5(hE, bO.g7(oH * hU[hE], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hU = ah.hU, ld = am.ld, oH = aE.data.aIncomeData, aC = am.lY - 1; 0 <= aC; aC--) {
								var hE = ld[aC];
								bD.h2.h5(hE, bO.g7(oH[hE] * hU[hE], 128))
							}
						}();
					aOr(18)
				}
			}(), bi.kz() % 100 == 99)) {
			if (aOp(), 0 === aE.data.tIncomeType) aOs(32);
			else if (1 === aE.data.tIncomeType) aOs(aE.data.tIncomeValue);
			else
				for (var hU = ah.hU, ld = am.ld, oH = aE.data.tIncomeData, aC = am.lY - 1; 0 <= aC; aC--) {
					var hE = ld[aC];
					bD.h2.h5(hE, bO.g7(oH[hE] * hU[hE], 32))
				}
			aOr(8)
		}
	}, this.ki = function(player) {
		return Math.min(100 * ah.hU[player], aE.a8k)
	}, this.s1 = function(player, s2) {
		bu.sO(player, s2, bR.gD[0], 0), bD.h2.h5(s2, bR.gD[0]), bg.sP(player, s2), ag.aOi(player, bR.gD[0] + bR.gD[1]), ag.sQ(s2, bR.gD[0]), bD.h2.nC(player)
	}, this.aOj = function() {
		for (var fg = am.lY, x0 = am.ld, lx = 0, a7p = ah.hi, aC = 0; aC < fg; aC++) lx += a7p[x0[aC]];
		return lx
	}, this.aOk = function(aOl) {
		for (var hE, fg = am.lY, x0 = am.ld, lx = 0, a7p = ah.hi, fe = bj.fe, aC = 0; aC < fg; aC++) fe[hE = x0[aC]] === aOl && (lx += a7p[hE]);
		return lx
	}
}

function ci() {
	var aOw, aOx, aOy, aOz, aP0, aP1, aP2, aP3, aP4, aP5, aP6, aP7, aP8, aP9, aPA, aPB, aPC, aPD, aPF, aPG, aH8, aPH, aPI, aPO, aPP, aPE = null,
		aPK = 0,
		aPL = !1,
		aPM = new Float32Array(4),
		aPN = 0,
		aEz = 112,
		aPQ = 0;

	function ti() {
		aP4 = Math.floor(+i.iu), aP5 = Math.floor(.5 * aP4), aPE.width = i.j, aPE.height = i.k, aPF = aPE.getContext("2d", {
			alpha: !0
		}), bD.tC.textAlign(aPF, 1), bD.tC.textBaseline(aPF, 1), aPF.imageSmoothingEnabled = !0
	}

	function aPR() {
		var aC, aPW;
		for (ys.font = bD.tC.tF(1, 100 * aP6), aPW = 80 / Math.floor(ys.measureText(bD.pg.a3X(aE.a7r)).width), ys.font = bD.tC.tF(1, 100), aC = aE.fd - 1; 0 <= aC; aC--) aP3[aC] = 100 / Math.floor(ys.measureText(ah.a2j[aC]).width), aP2[aC] = Math
			.min(aPW, aP3[aC])
	}

	function aPX(aC) {
		return !aPQ || (aC = ah.hi[aC]) < 1e6 ? 1 : aC < 1e7 ? aPM[0] : aPM[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aPV(il) {
		aPL = !1, aPK = bi.eg, aPD = !1, aPC = 1, aPA = aPB = 0, il.clearRect(0, 0, i.j, i.k);
		for (var aPd, aPe, aC, aPf, fontSize, aPg, o5 = jL / iv, o6 = jM / iv, oI = (i.j + jL) / iv, oJ = (i.k + jM) / iv, aPh = 0 !== ah.ne[aE.fQ] && !bD.h2.kP(aE.fQ), fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz], (fontSize = Math.floor(aP9 * iv *
			aPX(aC) * aP2[aC] * aP0[aC])) < aP8 || aP4 <= fontSize || aOy[aC] + aP0[aC] > o5 && aOy[aC] < oI && aOz[aC] + aP1[aC] > o6 && aOz[aC] < oJ && (aPd = Math.floor(i.j * (aOy[aC] + aP0[aC] / 2 - o5) / (oI - o5)), aPe = Math.floor(i.k * (
			aOz[aC] + aP1[aC] / 2 - o6) / (oJ - o6) - .1 * fontSize), aPf = ad.aCv[aC], il.font = bD.tC.tF(1 === ah.a7f[aC] ? 4 : 1, fontSize), il.fillStyle = aPi(fontSize, aPf % 2), aPQ ? aPj(il, aC, fontSize, aPd, aPe, aPf) : aPk(aC,
			fontSize, aPd, aPe, il), aPD = !0, 0 < aH8[aC] ? function(aPd, aPe, fontSize, aC, il) {
			0 === kn[aC] ? ak.qB.a3O(aPG[aC]) ? (function(aPd, aPe, fontSize, player, sD, il) {
				for (var a1O = aPe, ik = (il.globalAlpha = aPs(fontSize), aPX(player) * (aPQ ? aPN : aP3[player])), a1N = aPd - .5 * fontSize / ik - .9 * fontSize, g0 = 0; g0 < 2; g0++) il.fillText(ak.qB.a3G(sD), a1N, a1O), a1N =
					aPd + .5 * fontSize / ik + .9 * fontSize;
				il.globalAlpha = 1
			}(aPd, aPe, fontSize, aC, aPG[aC], il), aPm(aPd, aPe, fontSize, 0, 0, il)) : ak.qB.a3Q(aPG[aC]) ? (aPv(aPd, aPe, fontSize, aPG[aC], 0, il), aPm(aPd, aPe, fontSize, 0, 1, il)) : (aPv(aPd, aPe, fontSize, aPG[aC], 1, il), aPm(
				aPd, aPe, fontSize, 1, 0, il)) : aPv(aPd, aPe, fontSize, aPG[aC], 0, il)
		}(aPd, aPe, fontSize, aC, il) : 0 === kn[aC] && aPm(aPd, aPe, fontSize, 0, 0, il), aPh && (0 < aH8[aC + aE.fd] || 0 < aH8[aC + 2 * aE.fd] || 0 < aH8[aC + 3 * aE.fd] || 0 < aH8[aC + 4 * aE.fd]) && function(aPd, aPe, fontSize, aC, il) {
			var eq, h9 = -1;
			for (eq = 4; 1 <= eq; eq--) 0 < aH8[aC + eq * aE.fd] && h9++;
			for (eq = 1; eq < 5; eq++) 0 < aH8[aC + eq * aE.fd] && (! function(aPd, aPe, fontSize, eq, aC, aPq, eh, il) {
				var a75;
				if (1 === eq) {
					aC = aPG[aC + aE.fd];
					if (!ak.qB.a3P(aC)) return function(aPd, aPe, fontSize, sD, aPq, il) {
						il.globalAlpha = aPs(fontSize);
						aPd -= .534 * aPq * fontSize, aPq = aPe + 1.59 * fontSize;
						il.font = bD.tC.tF(0, .785 * fontSize), il.fillText(ak.qB.a3G(sD), aPd, aPq), il.globalAlpha = 1
					}(aPd, aPe, fontSize, aC, aPq, il);
					a75 = ak.a0q.a2p[aC - 1024 + ak.qB.a31]
				} else a75 = 2 === eq ? aM.a9d()[4].canvas[+(eh < 255)] : (3 === eq ? aM.a9d()[5] : aM.a9d()[6]).canvas[0];
				aC = ak.a0q.a2q, eh = .8 * fontSize / aC, eq = aPd - .5 * eh * aC - .534 * aPq * fontSize, aPd = aPe + 1.4 * eh * aC;
				il.setTransform(eh, 0, 0, eh, eq, aPd), il.globalAlpha = aPs(fontSize), il.drawImage(a75, 0, 0), il.globalAlpha = 1, il.setTransform(1, 0, 0, 1, 0, 0)
			}(aPd, aPe, fontSize, eq, aC, h9, aH8[aC + eq * aE.fd], il), h9 -= 2)
		}(aPd, aPe, fontSize, aC, il), (aPg = aP6 * fontSize) < aP8 || (il.font = bD.tC.tF(1, aPg), aPe += Math.floor(.78 * fontSize), aPQ ? aPk(aC, aPg, aPd, aPe, il) : aPj(il, aC, aPg, aPd, aPe, aPf)))
	}

	function aPk(aC, fontSize, fn, fp, il) {
		var ___id = aC;
		var showName = aC < aE.l2 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hi[___id] - ah.a7o[___id]) :
			"";
		if (showName) il.fillText(ah.a2j[aC], fn, fp), aC < aE.l2 && 2 !== ah.a7f[aC] || (aC = fontSize / aP3[aC], il.fillRect(fn - .5 * aC, fp + bD.tC.a3H * fontSize, aC, Math.max(1, .1 * fontSize)));
		aPQ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (il.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			il.fillText(__fx.utils.getDensity(___id), fn, showName ? fp + fontSize : fp),
			eliminationEstimate && il.fillText(eliminationEstimate, fn, showName ? fp + 2 * fontSize : fp + fontSize)
		);
	}

	function aPj(il, aC, fontSize, aPd, aPe, aPf) {
		var eh, a7o = ah.a7o[aC],
			aPp = bD.pg.a3X(ah.hi[aC] - a7o);

		function drawDensity() {
			var eliminationEstimate;
			!aPQ && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (il.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), il.fillText(__fx.utils.getDensity(aC), aPd, aPe + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hi[aC] - a7o) : "") && il.fillText(eliminationEstimate, aPd, aPe + 2 * fontSize)
		}
		a7o ? (eh = il.fillStyle, il.fillStyle = aPi(fontSize, 2 + aPf % 2), il.fillText(aPp, aPd, aPe), il.fillStyle = eh) : aPf >> 1 & 1 ? (il.lineWidth = .05 * fontSize, il.strokeStyle = aPi(fontSize, aPf % 2), il.strokeText(aPp, aPd, aPe)) : (1 <
			aPf && (il.lineWidth = .12 * fontSize, il.strokeStyle = aPi(fontSize, aPf), il.strokeText(aPp, aPd, aPe)), il.fillText(aPp, aPd, aPe)), drawDensity()
	}

	function aPm(aPd, aPe, fontSize, aPq, aPr, il) {
		var aA8 = .95 * fontSize / aPI,
			aPd = aPd - .5 * aA8 * aPH + .8 * aPq * fontSize,
			aPq = aPe - 1.76 * aA8 * aPI - (.35 - bD.tC.a3H + .7) * aPr * fontSize;
		il.setTransform(aA8, 0, 0, aA8, aPd, aPq), il.globalAlpha = aPs(fontSize), il.drawImage(ac.get(4), 0, 0), il.globalAlpha = 1, il.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aPv(aPd, aPe, fontSize, sD, aPq, il) {
		var ie, a1N, aA8;
		il.globalAlpha = aPs(fontSize), ak.qB.a3P(sD) ? (ie = ak.a0q.a2q, il.setTransform(aA8 = 1.1 * fontSize / ie, 0, 0, aA8, a1N = aPd - .5 * aA8 * ie - .8 * aPq * fontSize, aA8 = aPe - 1.55 * aA8 * ie), il.drawImage(ak.a0q.a2p[sD - 1024 + ak.qB
			.a31], 0, 0), il.setTransform(1, 0, 0, 1, 0, 0)) : (a1N = aPd - .8 * aPq * fontSize, aA8 = aPe - (.35 - bD.tC.a3H + 1) * fontSize, il.fillText(ak.qB.a3G(sD), a1N, aA8)), il.globalAlpha = 1
	}

	function aPi(fontSize, aPf) {
		return aP5 <= fontSize && fontSize < aP4 ? bj.aPx[aPf] + aPs(fontSize).toFixed(3) + ")" : bj.aPy[aPf]
	}

	function aPs(fontSize) {
		return aP5 <= fontSize && fontSize < aP4 ? 1 - (fontSize - aP5) / (aP4 - aP5) : 1
	}

	function aQ7(ik, j) {
		return 1 + Math.floor(aP7 * ik * j)
	}

	function aQ4(aC) {
		for (var left = aOy[aC], fz = aOy[aC] - ah.ja[aC] - 1; 0 <= fz; fz--)
			if (!aQ9(aC, --left, aOz[aC], aP1[aC])) {
				left++;
				break
			} var right = aOy[aC];
		for (fz = ah.jb[aC] - aOy[aC] - aP0[aC]; 0 <= fz; fz--)
			if (!aQ9(aC, ++right + aP0[aC] - 1, aOz[aC], aP1[aC])) {
				right--;
				break
			} var fn = Math.floor((left + right) / 2),
			top = aOz[aC];
		for (fz = aOz[aC] - ah.jc[aC] - 1; 0 <= fz; fz--)
			if (!aQA(aC, fn, --top, aP0[aC])) {
				top++;
				break
			} var bottom = aOz[aC];
		for (fz = ah.jd[aC] - aOz[aC] - aP1[aC]; 0 <= fz; fz--)
			if (!aQA(aC, fn, ++bottom + aP1[aC] - 1, aP0[aC])) {
				bottom--;
				break
			} var fp = Math.floor((top + bottom) / 2);
		aQ1(aC, fn, fp, aP0[aC], aP1[aC]) && (aOy[aC] = fn, aOz[aC] = fp)
	}

	function aQ1(player, fn, fp, j, k) {
		fj = Math.floor(.2 * j);
		for (var fj, eq = fn + j - 1; fn <= eq; eq--)
			if (!aQ9(player, eq, fp, k)) return;
		for (eq = fp + k - 1 - (fj = (fj = Math.floor(.25 * k)) < 1 ? 1 : fj); fp + fj <= eq; eq--)
			if (!aQA(player, fn, eq, j)) return;
		return 1
	}

	function aQ9(player, fn, fp, k) {
		return ad.a2F(player, 4 * (fp * bV.fr + fn)) && ad.a2F(player, 4 * ((fp + k - 1) * bV.fr + fn))
	}

	function aQA(player, fn, fp, j) {
		return ad.a2F(player, 4 * (fp * bV.fr + fn)) && ad.a2F(player, 4 * (fp * bV.fr + fn + j - 1))
	}
	this.dr = function() {
		if (aPQ = bm.buffer.data[7].value || 8 === aE.lK, aPD = !1, aP9 = .88, aP6 = .5, aP7 = 1.8, aP8 = 12 - 3 * bm.buffer.data[9].value, aOx = aOw = 0, aOy = new Uint16Array(aE.fd), aOz = new Uint16Array(aE.fd), aP0 = new Uint16Array(aE.fd),
			aP1 = new Uint16Array(aE.fd), aP2 = new Float32Array(aE.fd), aP3 = new Float32Array(aE.fd), aPG = new Uint16Array(2 * aE.fd), aH8 = new Uint8Array(5 * aE.fd), aPO = new Uint8Array(aE.fd), aPP = new Uint8Array(aE.fd), aPE = aPE ||
			document.createElement("canvas"), ti(), aPB = aPA = 0, aPC = 1, aPQ) {
			var aC, aPW;
			for (aPR(), ys.font = bD.tC.tF(1, 100), aPW = 100 / Math.floor(ys.measureText("900 000").width), aC = aE.fd - 1; 0 <= aC; aC--) aP2[aC] = Math.min(aPW, 2 * aP3[aC]);
			aPN = aPW, aPM[0] = 100 / (aPW * Math.floor(ys.measureText("5 000 000").width)), aPM[1] = 100 / (aPW * Math.floor(ys.measureText("50 000 000").width)), aPM[2] = 100 / (aPW * Math.floor(ys.measureText("500 000 000").width)), aPM[3] =
				100 / (aPW * Math.floor(ys.measureText("1 000 000 000").width))
		} else aPR();
		! function() {
			var aC;
			for (aC = aE.fd - 1; 0 <= aC; aC--) ah.hU[aC] < 12 ? (aOy[aC] = ah.ja[aC] + 1, aOz[aC] = ah.jc[aC] + 1, aP0[aC] = 1, aP1[aC] = 1) : (aOy[aC] = ah.ja[aC], aOz[aC] = ah.jc[aC] + 1, aP0[aC] = 4, aP1[aC] = 2);
			if (aE.i5)
				for (aC = 0; aC < aE.l2; aC++) aP0[aC] = 0;
			aPH = ac.get(4).width, aPI = ac.get(4).height
		}()
	}, this.aOi = function(hE, a9M) {
		a9M > 18 * ah.hU[hE] ? (aPP[hE] = 6, ad.aCv[hE] = 2 + ad.aCv[hE] % 2) : (aPO[hE] = 4, (ad.aCv[hE] < 2 || 3 < ad.aCv[hE]) && (ad.aCv[hE] = 6 + ad.aCv[hE] % 2))
	}, this.sQ = function(hE, a9M) {
		a9M > 6 * ah.hU[hE] ? (aPP[hE] = 6, ad.aCv[hE] = 4 + ad.aCv[hE] % 2) : (aPO[hE] = 4, (ad.aCv[hE] < 4 || 5 < ad.aCv[hE]) && (ad.aCv[hE] = 8 + ad.aCv[hE] % 2))
	}, this.resize = function() {
		ti(), aPV(aPF)
	}, this.a8g = function() {
		for (var aC = 0; aC < aE.l2; aC++) ah.jb[aC] - ah.ja[aC] != 3 || ah.jd[aC] - ah.jc[aC] != 3 ? (aOy[aC] = ah.ja[aC] + (ah.jb[aC] !== ah.ja[aC] ? 1 : 0), aOz[aC] = ah.jc[aC], aP0[aC] = 1, aP1[aC] = 1) : (aOy[aC] = ah.ja[aC], aOz[aC] = ah
			.jc[aC] + 1, aP0[aC] = 4, aP1[aC] = 2)
	}, this.t3 = function(player, eP, aPY) {
		! function(player, eP, aPY) {
			player += eP * aE.fd;
			0 === eP ? aPG[player] === aPY && 0 < aH8[player] ? aH8[player] = 0 : (aPG[player] = aPY, aH8[player] = ak.qB.a3O(aPY) ? 255 : 64) : 1 === eP ? (aH8[player] = 64, aPG[player] = aPY) : aH8[player] = aPY
		}(player, eP, aPY), 2 === aE.a4E && this.nQ(!0)
	}, this.yr = function() {
		aPD && (1 !== aPC ? (ys.imageSmoothingEnabled = !0, ys.setTransform(aPC, 0, 0, aPC, 0, 0), ys.drawImage(aPE, -aPA / aPC, -aPB / aPC), ys.setTransform(1, 0, 0, 1, 0, 0), ys.imageSmoothingEnabled = !1) : ys.drawImage(aPE, -aPA, -aPB))
	}, this.aDh = function(j4, j7) {
		aPA += j4, aPB += j7
	}, this.a5m = function(j4, j7) {
		ag.aDh(j4, j7)
	}, this.zoom = function(a6e, mH, mI) {
		aPC *= a6e, aPA = (aPA + mH) * a6e - mH, aPB = (aPB + mI) * a6e - mI
	}, this.aN5 = function(player) {
		var ja = ah.ja[player],
			jb = ah.jb[player],
			jc = ah.jc[player],
			jd = ah.jd[player],
			jF = bP.hx(0),
			jG = bP.hz(0),
			jH = bP.hx(i.j),
			jI = bP.hz(i.k);
		ja < jH && jF < jb && jc < jI && jG < jd && (aP0[player] = 0, aPL = !0)
	}, this.nQ = function(c1) {
		return !(!aPL && !c1 && bi.eg < aPK + (1 === aPC && 0 === aPA && 0 === aPB && (aE.a9A() || aE.i5 || 2 === aE.a4E) ? 1e3 : aEz) || (aPV(aPF), 0))
	}, this.aPb = function(aC) {
		return aPX(aC) * aP2[aC]
	}, this.aPc = function(player) {
		return aP2[player]
	}, this.el = function() {
		bi.kz() % 10 == 9 && (aPL = aPL || aE.a9C() && !aE.a9A()), !aE.a9A() && 4 <= ++aOx && function() {
			var aC, fz, g0;
			for (aOx = 0, g0 = 4; 1 <= g0; g0--)
				for (fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz] + g0 * aE.fd, 0 < aH8[aC] && aH8[aC] < 255 && aH8[aC]--;
			if (2 !== aE.a4E)
				for (fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz], 0 < aH8[aC] && aH8[aC] < 255 && aH8[aC]--
		}();
		var aC, fz, fg = Math.floor(.1 * am.lY);
		for (fg = (fg = fg < 8 ? 8 : fg) > am.lY ? am.lY : fg, aC = aOw + fg - 1; aOw <= aC; aC--) fz = aC % am.lY, ! function(aC) {
			var ik = aPX(aC) * aP2[aC];
			0 < aP0[aC] && aQ1(aC, aOy[aC], aOz[aC], aP0[aC], aP1[aC]) ? ! function(aC) {
				for (var fn, fp, j, k, fK = !1, g0 = 0; g0 < 8; g0++) {
					if (j = aP0[aC] + 2, k = aP1[aC] + 2, j > ah.jb[aC] - ah.ja[aC] + 1 || k > ah.jd[aC] - ah.jc[aC] + 1) return fK;
					if (fn = aOy[aC] - 1, fp = aOz[aC] - 1, !aQ1(aC, fn, fp, j, k)) return fK;
					aOy[aC] = fn, aOz[aC] = fp, aP0[aC] = j, aP1[aC] = k, fK = !0
				}
				return fK
			}(aC) && function(aC, ik) {
				for (var fn, fp, j, k, fK = !1, aHH = aP0[aC], oH = 1 + Math.floor(.02 * aHH), g0 = 1; g0 < 5; g0++) {
					if ((j = aHH + g0 * oH) > ah.jb[aC] - ah.ja[aC] + 1) return fK;
					if ((k = aQ7(ik, j)) > ah.jd[aC] - ah.jc[aC] + 1) return fK;
					fn = ah.ja[aC] + Math.floor(Math.random() * (ah.jb[aC] - ah.ja[aC] + 2 - j)), fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - k)), aQ1(aC, fn, fp, j, k) && (aOy[aC] = fn, aOz[aC] = fp, aP0[
						aC] = j, aP1[aC] = k, fK = !0)
				}
				return fK
			}(aC, ik) && aQ4(aC) : ! function(aC, ik) {
				var k, fn = aOy[aC] + 1,
					fp = aOz[aC] + 1,
					j = aP0[aC] - 2;
				for (;;) {
					if (j < 1) {
						aP0[aC] = 0;
						break
					}
					if (k = aQ7(ik, j), aQ1(aC, fn, fp, j, k)) return aOy[aC] = fn, aOz[aC] = fp, aP0[aC] = j, aP1[aC] = k, 1;
					fn++, fp++, j -= 2
				}
				return
			}(aC, ik) ? function(aC, ik) {
				var fn, fp, j, k, g0, oN, kI = ah.jb[aC] - ah.ja[aC] + 1,
					aQ8 = Math.floor(.02 * kI);
				for (oN = -6 * (aQ8 = aQ8 < 1 ? 1 : aQ8), g0 = kI; oN <= g0; g0 -= aQ8)
					if (k = aQ7(ik, j = 0 < g0 ? g0 : 1), fn = ah.ja[aC] + Math.floor(Math.random() * (ah.jb[aC] - ah.ja[aC] + 2 - j)), fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - k)), aQ1(aC, fn, fp, j, k))
						return aOy[aC] = fn, aOz[aC] = fp, aP0[aC] = j, aP1[aC] = k
			}(aC, ik) : aQ4(aC)
		}(am.ld[fz]);
		aOw = (aOw += fg) % am.lY
	}, this.nK = function() {
		var aC, hE, a3M, a3N;
		if (bi.kz() % 4 == 1)
			for (aC = am.lY - 1; 0 <= aC; aC--) hE = am.ld[aC], ad.aCv[hE] < 2 || ((a3M = Math.max(aPO[hE] - 1, 0)) === (a3N = Math.max(aPP[hE] - 1, 0)) ? 0 === a3M && (ad.aCv[hE] %= 2) : 0 === a3N && ad.aCv[hE] < 6 && (ad.aCv[hE] += 4), aPO[
				hE] = a3M, aPP[hE] = a3N)
	}, this.aAs = function(player) {
		var aC = player + 2 * aE.fd,
			eh = aH8[aC];
		return 0 < eh && (aO.a4M(50, player), aH8[aC] = 0, 255 === eh)
	}, this.a9s = function(player) {
		return 255 === aH8[player + 2 * aE.fd]
	}
}

function ck() {
	var aQB, aQC, aQD;
	this.dr = function() {
		aQB =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQC =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQD = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aB9 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIZ = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQB.length - 1; 0 <= aC; aC--)
			for (var fz = aB9.length - 1; 0 <= fz; fz--) aQB[aC] = aQB[aC].replace(aB9[fz], aIZ[fz]);
		if (__fx.settings.realisticNames) aQB = realisticNames;
	}, this.a8x = function() {
		var fg = aE.l2,
			a2j = ah.a2j,
			a4x = ah.a4x,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fg)
			for (var aC = 0; aC < fg; aC++) a2j[aC] = a4x[aC] = "Player " + az.kJ(1e3);
		else
			for (aC = 0; aC < fg; aC++) a2j[aC] = a4x[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lK) {
			for (var eO = az.random(), aQJ = aQD, aQK = aQC, iQ = aF.iQ, fg = aQJ.length, lx = aE.data.teamPlayerCount[7], a2j = ah.a2j, a4x = ah.a4x, aC = lx - 1; aC >= aE.l2; aC--) a2j[aC] = a4x[aC] = aQJ[(aC + eO) % fg];
			for (fg = aQK.length - 1, aC = lx; aC < aE.fd; aC++) a2j[aC] = a4x[aC] = aQK[iQ[aC] ? fg : aC % fg]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fg = aE.fd, a2j = ah.a2j, a4x = ah.a4x, playerNamesData = aE.data.playerNamesData, aC = aE.l2; aC < fg; aC++) a2j[aC] = a4x[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2j = ah.a2j, a4x = ah.a4x, aC = aE.l2; aC < aE.fd; aC++) a2j[aC] = a4x[aC] = "Bot " + az.kJ(1e3)
		} : function() {
			for (var aQL = aQB, fg = aQL.length, eO = az.random(), a2j = ah.a2j, a4x = ah.a4x, aC = aE.l2; aC < aE.fd; aC++) a2j[aC] = a4x[aC] = aQL[(aC + eO) % fg]
		})()
	}
}

function d3() {
	this.aQM = [], this.aQN = [], this.dr = function() {
		this.aQM = [], this.aQN = []
	}, this.el = function() {
		0 <= this.aQM.length && this.aQO(this.aQM), 0 <= this.aQN.length && this.aQO(this.aQN)
	}, this.aQO = function(h) {
		for (var g0 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eg--, h[aC].eg <= 0) {
				g0 = aC;
				break
			} for (aC = g0; 0 <= aC; aC--) h.shift()
	}, this.a9l = function(id, x0, aQP) {
		return this.g1(this.aQM, id, x0, aQP)
	}, this.aQQ = function(id, x0, aQP) {
		return this.g1(this.aQN, id, x0, aQP)
	}, this.g1 = function(h, id, x0, aQP) {
		return ! function(h, id, x0) {
			var aC, iZ;
			for (aC = x0.length - 1; 0 <= aC; aC--)
				for (iZ = h.length - 1; 0 <= iZ; iZ--)
					if (h[iZ].player === x0[aC] && id === h[iZ].id) return 1;
			return
		}(h, id, x0) && (aQP && function(h, id, x0) {
			var aC;
			for (aC = x0.length - 1; 0 <= aC; aC--) h.push({
				player: x0[aC],
				id: id,
				eg: 384
			})
		}(h, id, x0), !0)
	}
}

function cj() {
	this.a4x = new Array(aE.fd), this.a2j = new Array(aE.fd), this.a7f = new Uint8Array(aE.fd), this.ne = new Uint8Array(aE.fd), this.ja = new Uint16Array(aE.fd), this.jc = new Uint16Array(aE.fd), this.jb = new Uint16Array(aE.fd), this.jd =
		new Uint16Array(aE.fd), this.hU = new Uint32Array(aE.fd), this.a1p = new Uint32Array(aE.fd), this.hi = new Uint32Array(aE.fd), this.h8 = null, this.hM = null, this.hN = null, this.g5 = null, this.st = new Uint16Array(aE.fd), this.k5 =
		new Uint16Array(aE.fd), this.k6 = new Uint16Array(aE.fd), this.a4s = new Uint16Array(aE.fd), this.a4q = new Uint8Array(aE.fd), this.a7o = new Uint16Array(aE.fd), this.dr = function() {
			this.a4x.fill(""), this.a2j.fill(""), this.a7f.fill(0), this.ne.fill(0), this.ja.fill(0), this.jc.fill(0), this.jb.fill(0), this.jd.fill(0), this.hU.fill(0), this.a1p.fill(0), this.hi.fill(0), this.h8 = new Array(aE.fd), this.hM =
				new Array(aE.fd), this.hN = new Array(aE.fd), this.g5 = new Array(aE.fd), this.st.fill(0), this.k5.fill(0), this.k6.fill(0), this.a4s.fill(0), this.a4q.fill(0), this.a7o.fill(0)
		}
}

function d1() {
	this.aHi = function(player) {
		aH.nd(player), aE.a4G++, ah.a7f[player] = 2, ah.a4s[player] = bl.a56.aNE(), player === aE.fQ && (aY.show(!1, !1), aX.aFg(), bU.a40.a4o()), ag.aAs(player)
	}
}

function cc() {
	this.ld = null, this.lY = 0, this.a91 = function() {
		for (this.lY = 0, aC = aE.fd - 1; 0 <= aC; aC--) 0 !== ah.ne[aC] && this.lY++;
		this.ld = new Uint16Array(this.lY);
		for (var fg = 0, aC = 0; aC < aE.fd; aC++) 0 !== ah.ne[aC] && (this.ld[fg++] = aC)
	}, this.nJ = function() {
		for (var hU = ah.hU, a1p = ah.a1p, a4q = ah.a4q, ld = am.ld, aC = am.lY - 1; 0 <= aC; aC--) {
			var hE = ld[aC],
				eh = hU[hE],
				lx = a1p[hE];
			eh <= bO.g7(lx, 4) ? al.dz(hE) : lx <= eh ? 250 <= (a1p[hE] = eh) && (a4q[hE] = 1) : a1p[hE] = lx - Math.max(1, bO.g7(lx - eh, 1e3))
		}
		this.aQU()
	}, this.aQU = function() {
		for (var ne = ah.ne, lw = this.ld, aGO = this.lY, aC = aGO - 1; 0 <= aC; aC--) 0 === ne[lw[aC]] && (lw[aC] = lw[--aGO]);
		this.lY = aGO
	}
}

function cd() {
	var aQV = new Uint16Array(aE.fd),
		aQW = 0;

	function aQa(aAz, aQY) {
		var eq = bi.kz();
		return 3213 <= eq ? 4 + bO.g7(100 * aQY, af.ki(aAz)) : (aAz = 1 + bO.g7(aE.km, 300), eq < 357 ? 2 + bO.g7(100 * aQY, aAz) : eq < 714 ? 2 + bO.g7(100 * aQY, 4 * aAz) : eq < 1071 ? 2 + bO.g7(100 * aQY, 10 * aAz) : eq < 2142 ? 2 + bO.g7(100 *
			aQY, 30 * aAz) : 2 + bO.g7(100 * aQY, 100 * aAz))
	}

	function aQZ(aAz) {
		return aE.lM || 4284 <= bi.kz() || bD.h2.kP(aAz)
	}
	this.dr = function() {
		aQV.fill(0), aQW = 15
	}, this.iL = function(s2) {
		var player = aE.fQ;
		return !!bD.h2.sv(player, s2) && !(!bD.h2.sL(player, bD.h2.jJ(player, aS.iB()), s2) || (player = s2, s2 = bR.gD[0], !aQZ(player) && aQV[player] + aQa(player, s2) > aQW))
	}, this.ep = function(aAz, aQY) {
		if (!aQZ(aAz)) {
			aQY = aQa(aAz, aQY);
			if (aQV[aAz] + aQY > aQW) return !1;
			aQV[aAz] += aQY
		}
		return !0
	}, this.el = function() {
		bi.kz() % 100 == 99 && (bi.kz() < 1071 ? aQW += 4 : bi.kz() < 2142 ? aQW += 6 : bi.kz() < 3213 ? aQW += 8 : aQW += 10)
	}
}

function cl() {
	var aQb;
	this.lT = null, this.lS = 0, this.dr = function() {
		aQb = [], 9 === aE.lK && this.aQc()
	}, this.aQc = function() {
		this.lT = [0, 0, 0, 0, 0, 0];
		for (var aQd = [254, 227, 167, 149, 102, this.lS = 0, 0, 0], aQe = [0, 8, 24, 30, 46, 80, 256, 333], aQf = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l2, aC = 1; aC < aQd.length; aC++)
			if (k <= aQe[aC]) {
				this.lS = aQd[aC - 1] - bO.g7((k - aQe[aC - 1]) * (aQd[aC - 1] - aQd[aC]), aQe[aC] - aQe[aC - 1]), this.lT[5] = aQf[aC - 1] - bO.g7((k - aQe[aC - 1]) * (aQf[aC - 1] - aQf[aC]), aQe[aC] - aQe[aC - 1]), this.lT[0] = aE.fd - k - this
					.lS - this.lT[5];
				break
			} aE.lO = aE.fd - aE.l2, aE.data.numberTeams = (0 < aE.l2) + (0 < aE.lO), aE.data.playerCount = aE.a1L = aE.l2 + aE.lO, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l2 + this.lS, aE.lO - this.lS]), aE.a8p.a8v()
	}, this.aNL = function(player) {
		aQb.push({
			player: player,
			h9: 14 + az.kJ(20)
		})
	}, this.el = function() {
		if (9 === aE.lK)
			for (var aC = aQb.length - 1; 0 <= aC; aC--) --aQb[aC].h9 <= 0 && (ag.t3(aQb[aC].player, 0, ak.qB.a34 + ak.qB.a3I), aQb.splice(aC, 1))
	}
}

function dK() {
	this.aQh = 25, this.aQi = 13, this.aNX = 4096, this.fr = 0, this.fs = 0, this.a0n = null, this.a0j = null, this.a0k = null, this.a0o = null, this.fM = 0, this.mapSeed = 0, this.a0l = !1, this.a0m = new aQj, this.xH = new aQk, this.aBG = new aQl;
	var aQm = {
		aQn: function() {},
		dr: function() {}
	};

	function aQw() {
		return {
			fr: bV.fr,
			fs: bV.fs,
			a0n: bV.a0n,
			a0j: bV.a0j,
			a0k: bV.a0k,
			a0o: bV.a0o,
			fM: bV.fM,
			mapSeed: bV.mapSeed,
			a0l: bV.a0l
		}
	}

	function aQx(g8) {
		bV.fr = g8.fr, bV.fs = g8.fs, bV.a0n = g8.a0n, bV.a0j = g8.a0j, bV.a0k = g8.a0k, bV.a0o = g8.a0o, bV.fM = g8.fM, bV.mapSeed = g8.mapSeed, bV.a0l = g8.a0l
	}

	function aQp(aC) {
		return !(1 === aC || !bV.aIo(aC) || aC === bV.aR1())
	}
	this.dr = function() {
		this.xH.dr()
	}, this.a8 = function(map, aQo) {
		((map %= this.aQh) !== this.fM || aQp(this.fM) && aQo !== this.mapSeed) && (this.a0l = !1, this.a0m.aQn(), az.a8w(map), this.fM = map, this.mapSeed = aQo, aQp(map) && (bV.xH.a0e[map].aQq = aQo), this.aIo(this.fM) ? (map = bV.xH.a0e[this
			.fM], this.fr = map.j, this.fs = map.k, az.a8w(map.aQq), ar.a8([this.fr, this.fs, map.nj, map.ng]), aQs(), aq.aQt(), ar.aQu()) : aQr())
	}, this.aQv = function(map, aQo) {
		var gP = aQw(),
			map = (this.a8(map, aQo), this.a0m.aQn(), aQw());
		return aQx(gP), map
	}, this.aJk = function(map, aQo) {
		var gP = aQw(),
			aQq = az.aQy(),
			aQz = this.xH.a0e[map].aQq,
			aR0 = this.a0m,
			aQo = (this.a0m = aQm, this.a8(map, aQo), this.a0n);
		return this.a0m = aR0, this.xH.a0e[map].aQq = aQz, az.a8w(aQq), aQx(gP), aQo
	}, this.a9I = function(canvas) {
		canvas && this.a0n !== canvas && (this.fr = canvas.width, this.fs = canvas.height, this.a0n = canvas, this.a0j = this.a0n.getContext("2d", {
			alpha: !1
		}), this.ii = this.a0j.getImageData(0, 0, this.fr, this.fs), this.a0o = this.ii.data, this.fM = this.aR1(), this.mapSeed = 0, bV.xH.a0e[this.fM].name = aE.data.mapName)
	}, this.fL = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aR1()
	}, this.aR2 = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aR3 = function(aC) {
		return 1 === aC
	}, this.aR1 = function() {
		return this.aQh
	}, this.aIo = function(aC) {
		return void 0 === this.xH.a0e[aC].aR4
	}, this.aJf = aQp, this.a9H = function(q9) {
		return 0 === q9.mapType ? q9.mapProceduralIndex < 10 ? q9.mapProceduralIndex : 10 + q9.mapProceduralIndex : 1 === q9.mapType ? 10 <= q9.mapRealisticIndex ? 22 + q9.mapRealisticIndex - 10 : q9.mapRealisticIndex + 10 : void 0
	}, this.aIp = function(q9, aR5) {
		0 === q9.mapType ? q9.mapProceduralIndex = aR5 < 10 ? aR5 : aR5 - 10 : 1 === q9.mapType && (q9.mapRealisticIndex = aR5 - (22 <= aR5 ? 12 : 10))
	}
}

function aQj() {
	function aRE() {
		bV.a0m.el()
	}

	function aRJ(hE, aRI) {
		0 < aRI && (bV.a0o[hE] += aRI, bV.a0o[hE + 1] += aRI, bV.a0o[hE + 2] += aRI)
	}

	function iy(hE) {
		return bV.a0o[hE + 2] > bV.a0o[hE] && bV.a0o[hE + 2] > bV.a0o[hE + 1]
	}
	this.aDt = -1, this.a5J = 0, this.aR6 = 0, this.aR7 = 8, this.aR8 = 32, this.aR9 = 8, this.aRA = 32, this.aRB = [0, 0], this.aCv = [0, 0, 0, 0], this.jU = null, this.aRC = !0, this.aRD = !1, this.aQn = function() {
		-1 !== this.aDt && clearTimeout(this.aDt), this.aDt = -1, this.jU = null, ar.aQu()
	}, this.dr = function() {
		7 === ab.a5P() || this.aRD || (this.aRC = !0, this.a5J = 0, this.aR6 = 1, this.aRB = [bV.xH.a0e[bV.fM].a15[0], bV.xH.a0e[bV.fM].a16[0]], this.aCv = [bV.xH.a0e[bV.fM].aR4[3], bV.xH.a0e[bV.fM].aR4[4], bV.xH.a0e[bV.fM].aR4[5], bV.xH.a0e[bV
			.fM].aR4[6]], this.aR7 = bV.xH.a0e[bV.fM].aR4[7], this.aR8 = bV.xH.a0e[bV.fM].aR4[8], this.aR9 = bV.xH.a0e[bV.fM].aR4[9], this.aRA = bV.xH.a0e[bV.fM].aR4[10], this.aRC ? this.aDt = setTimeout(aRE, 16) : this.el())
	}, this.el = function() {
		if (8 === ab.a5P() && aI.nx()) this.aDt = setTimeout(aRE, 16);
		else {
			if (0 === this.a5J) {
				var aQq = az.aQy();
				if (az.a8w(bV.xH.a0e[bV.fM].aR4[2]), ar.a8([bV.fr, bV.fs, bV.xH.a0e[bV.fM].aR4[0], bV.xH.a0e[bV.fM].aR4[1]]), az.a8w(aQq), this.jU = ar.aRF(), this.a5J++, this.aRC) return void(this.aDt = setTimeout(aRE, 16))
			}
			for (var hE, fS, aQq = this.aRC ? 10 : 1e6, aQq = bV.fs - this.aR6 - 1 < aQq ? bV.fs - this.aR6 - 1 : aQq, a22 = this.aR6 + aQq, fp = this.aR6; fp < a22; fp++)
				for (var fn = 1; fn < bV.fr - 1; fn++) iy(hE = 4 * (fS = fn + fp * bV.fr)) ? this.aRG(hE, fS, 1) : (this.aRG(hE, fS, 0), function(fn, fp, hE) {
					return 1 < fn && iy(hE - 4) || fn < bV.fr - 2 && iy(hE + 4) || 1 < fp && iy(hE - 4 * bV.fr) || fp < bV.fs - 2 && iy(hE + 4 * bV.fr)
				}(fn, fp, hE) && this.aRH(fn, fp));
			this.aR6 = a22, this.aR6 >= bV.fs - 1 ? (bV.a0j.putImageData(bV.a0k, 0, 0, 1, 1, bV.fr - 2, bV.fs - 2), bi.dy = !0, this.aQn()) : this.aRC && (this.aDt = setTimeout(aRE, 16))
		}
	}, this.aRG = function(hE, fS, eP) {
		aRJ(hE, Math.floor(this.aRB[eP] + this.aCv[eP] * this.jU[fS] / 1e4) - bV.a0o[hE])
	}, this.aRK = function(hE, eO, aRL, eP, aCv) {
		aRJ(hE, Math.floor(this.aRB[eP] + (1 - eO / aRL) * aCv) - bV.a0o[hE])
	}, this.aRH = function(mH, mI) {
		for (var hE, eO, aRL, aDj = mH - this.aR8, aRM = mI - this.aR8, a23 = mH + this.aR8, a22 = mI + this.aR8, aDj = aDj < 1 ? 1 : aDj, a23 = a23 > bV.fr - 2 ? bV.fr - 2 : a23, a22 = a22 > bV.fs - 2 ? bV.fs - 2 : a22, fp = aRM < 1 ? 1 :
			aRM; fp <= a22; fp++)
			for (var fn = aDj; fn <= a23; fn++) iy(hE = 4 * (fn + fp * bV.fr)) ? (aRL = this.aR7 + (this.aR8 - this.aR7) * this.jU[fn + bV.fr * fp] / 1e4, Math.abs(mH - fn) > aRL || Math.abs(mI - fp) > aRL || aRL <= (eO = Math.sqrt((mH - fn) * (
				mH - fn) + (mI - fp) * (mI - fp))) || this.aRK(hE, eO, aRL, 1, this.aCv[3])) : (aRL = this.aR9 + (this.aRA - this.aR9) * this.jU[fn + bV.fr * fp] / 1e4, Math.abs(mH - fn) > aRL || Math.abs(mI - fp) > aRL || aRL <= (eO = Math
				.sqrt((mH - fn) * (mH - fn) + (mI - fp) * (mI - fp))) || this.aRK(hE, eO, aRL, 0, this.aCv[2]))
	}
}

function aQs() {
	var oW = aRN(bV.fM);
	oW && aRO(oW[0], oW[1], oW[2], oW[3], oW[4])
}

function aRN(fM) {
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

function aRO(aRP, aRQ, aRR, aRS, aRT) {
	for (var fn, fp, aNt, aNu, a6e, aRW, j3 = aRP.length - 1, aRU = bV.fr + bV.fs, fg = (aRU *= aRU, aRR.length), aRV = Array(fg), aC = fg - 1; 0 <= aC; aC--) aRV[aC] = aRR[aC] * aRR[aC];
	var aRX = new Array(fg),
		aH5 = new Array(fg),
		aRY = new Array(fg),
		g8 = ar.aRF();
	if (void 0 === aRT)
		for (aRT = new Array(fg), aC = fg - 1; 0 <= aC; aC--) aRT[aC] = 0;
	for (aC = 1; aC < fg; aC++) aRX[aC] = aRV[aC] - aRV[aC - 1], aH5[aC] = aRS[aC] - aRS[aC - 1], aRY[aC] = aRT[aC] - aRT[aC - 1];
	for (fn = bV.fr - 1; 0 <= fn; fn--)
		for (fp = bV.fs - 1; 0 <= fp; fp--) {
			for (aNt = aRU, aC = j3; 0 <= aC; aC--) aNt = (aNu = (fn - aRP[aC]) * (fn - aRP[aC]) + (fp - aRQ[aC]) * (fp - aRQ[aC])) < aNt ? aNu : aNt;
			for (a6e = aRS[fg - 1], aRW = aRT[fg - 1], aC = 1; aC < fg; aC++)
				if (aNt < aRV[aC]) {
					a6e = aRS[aC - 1] + aMg((aNt - aRV[aC - 1]) * aH5[aC], aRX[aC]), aRW = aRT[aC - 1] + aMg((aNt - aRV[aC - 1]) * aRY[aC], aRX[aC]);
					break
				} aRZ(bV.fr * fp + fn, a6e, aRW, g8)
		}
}

function aRZ(eP, a6e, aRW, g8) {
	a6e < 500 ? g8[eP] = bO.g7(g8[eP] * a6e * 2, 1e3) : 500 < a6e && (g8[eP] += bO.g7(2 * (1e4 - g8[eP]) * (a6e - 500), 1e3)), g8[eP] += bO.g7(aRW * (10 * a6e - g8[eP]), 1e3)
}

function cn() {
	var aRa;

	function aRk(a75, ik, fn, fp, globalAlpha) {
		bV.a0j.save(), bV.a0j.globalAlpha = globalAlpha, bV.a0j.imageSmoothingEnabled = !1, bV.a0j.scale(ik, ik), bV.a0j.drawImage(a75, Math.floor(fn * (bV.fr / ik - a75.width)), Math.floor(fp * (bV.fs / ik - a75.height))), bV.a0j.restore()
	}
	this.aBD = 0, this.aBE = 0, this.aBF = 0, this.aBG = 0, this.dr = function() {
		(aRa = new Array(bV.aQh))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eO: [220, 250, 255, 220],
			vt: [190, 220, 0, 0],
			g0: [170, 200, 0, 0]
		}, aRa[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eO: [25, 0, 100, 0, 25],
			vt: [25, 0, 0, 0, 25],
			g0: [25, 0, 0, 0, 25]
		}, aRa[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eO: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			vt: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g0: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aRa[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eO: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			vt: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g0: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aRa[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eO: [10, 10, 20, 10, 10, 170, 212],
			vt: [20, 20, 60, 100, 100, 110, 170],
			g0: [70, 70, 160, 30, 30, 60, 120]
		}, aRa[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eO: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			vt: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g0: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aRa[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eO: [10, 10, 60, 255, 255, 200, 200],
			vt: [10, 10, 60, 255, 255, 200, 200],
			g0: [80, 80, 255, 255, 255, 200, 200]
		}, aRa[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eO: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			vt: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g0: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aRa[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eO: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			vt: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g0: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aRa[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eO: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			vt: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g0: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aRa[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eO: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			vt: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g0: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aRa[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eO: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			vt: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g0: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aQt = function() {
		var aRj, aC, fz, gP, ii = function() {
				var ii;
				return bV.a0n = document.createElement("canvas"), bV.a0n.width = bV.fr, bV.a0n.height = bV.fs, bV.a0j = bV.a0n.getContext("2d", {
					alpha: !1
				}), ii = bV.a0j.getImageData(0, 0, bV.fr, bV.fs), bV.a0o = ii.data, ii
			}(),
			j = aRa[bV.fM].j,
			eO = aRa[bV.fM].eO,
			vt = aRa[bV.fM].vt,
			g0 = aRa[bV.fM].g0,
			g8 = ar.aRF(),
			fg = j.length - 2,
			aRe = new Array(1 + fg),
			aRf = new Array(1 + fg),
			aRg = new Array(1 + fg),
			aRh = new Array(1 + fg);
		for (fz = fg; 0 <= fz; fz--) aRe[fz] = j[fz + 1] - j[fz], aRf[fz] = eO[fz + 1] - eO[fz], aRg[fz] = vt[fz + 1] - vt[fz], aRh[fz] = g0[fz + 1] - g0[fz];
		for (aC = bV.fr * bV.fs - 1; 0 <= aC; aC--)
			for (fz = fg; 0 <= fz; fz--)
				if (g8[aC] >= j[fz]) {
					gP = g8[aC] - j[fz], bV.a0o[4 * aC] = eO[fz] + aMg(aRf[fz] * gP, aRe[fz]), bV.a0o[4 * aC + 1] = vt[fz] + aMg(aRg[fz] * gP, aRe[fz]), bV.a0o[4 * aC + 2] = g0[fz] + aMg(aRh[fz] * gP, aRe[fz]), bV.a0o[4 * aC + 3] = 255;
					break
				} bV.a0j.putImageData(ii, 0, 0), bV.aR3(bV.fM) && ac.vx() && bV.aR3(bV.fM) && (ii = ac.x7("arena"), aRj = ac.x7("territorial.io"), aRk(ii, 5, .5, .5, .1), aRk(aRj, 2, .5, .45, .1)), bV.a0l = !0, bi.dy = !0
	}, this.a8z = function() {
		for (var hE, fn, fp, aRl, iX, gR, aBE = 0, j = bV.fr, k = bV.fs, gP = j * k * 4, aRm = aGe, aRn = bV.a0o, aC = j - 1; 0 <= aC; aC--) aRm[(hE = aC << 2) + 2] = aRm[gP - hE - 2] = 3;
		for (gP = 4 * j, aC = k - 1; 0 <= aC; aC--) aRm[(hE = aC * gP) + 2] = aRm[hE + gP - 2] = 3;
		for (aRl = j - 1, iX = k - 1, fp = 1; fp < iX; fp++)
			for (gP = fp * j, fn = 1; fn < aRl; fn++) gR = 1 - (aRn[(hE = gP + fn << 2) + 2] > aRn[hE + 1] && aRn[hE + 2] > aRn[hE]), aRm[hE + 2] = 6 - 5 * gR, aBE += gR;
		this.aBD = (j - 2) * (k - 2), this.aBG = 0, bV.fL(bV.fM) && (bV.aBG.aRo(), bV.aBG.aRp(4, 5)), this.aBE = aE.km = aBE - this.aBG, this.aBF = this.aBD - this.aBE - this.aBG, this.aBF && (bV.aBG.aRp(6, 2), bV.aBG.aRq())
	}
}

function aQr() {
	var pc;
	10 === bV.fM ? pc =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fM ? pc =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fM ? pc =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fM ? pc =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fM ? pc =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fM ? pc =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fM ? pc =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fM ? pc =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fM ? pc =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fM ? pc =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fM ? pc =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fM ? pc =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fM && (pc =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new a0X).a0Z(pc)
}

function aQk() {
	this.a0e = null, this.aRr = null, this.aRs = null, this.xI = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dr = function() {
		this.aRt = [L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), "Mare Nostrum"];
		var aRu = [120, 105, 92],
			cos = [12, 12, 60],
			aRv = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aRw = [140, 130, 120],
			aRx = [12, 12, 76],
			aRy = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aRz = [130, 117, 106],
			aS0 = [12, 12, 68],
			aS1 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.a0e = new Array(bV.aQh + 1), __fx.customLobby.setMapInfo(this.a0e), this.a0e[0] = {
			j: 230,
			k: 230,
			nj: 1e3,
			ng: 2e3,
			aQq: 173
		}, this.a0e[1] = {
			j: 800,
			k: 800,
			nj: 100,
			ng: 50,
			aQq: 43
		}, this.a0e[2] = {
			j: 512,
			k: 512,
			nj: 128,
			ng: 32,
			aQq: 0
		}, this.a0e[3] = {
			j: 960,
			k: 960,
			nj: 60,
			ng: 8,
			aQq: 0
		}, this.a0e[4] = {
			j: 900,
			k: 900,
			nj: 100,
			ng: 5,
			aQq: 0
		}, this.a0e[5] = {
			j: 1e3,
			k: 1e3,
			nj: 100,
			ng: 40,
			aQq: 0
		}, this.a0e[6] = {
			j: 1e3,
			k: 1e3,
			nj: 100,
			ng: 20,
			aQq: 0
		}, this.a0e[7] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQq: 0
		}, this.a0e[8] = {
			j: 820,
			k: 820,
			nj: 200,
			ng: 100,
			aQq: 0
		}, this.a0e[9] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQq: 0
		}, this.a0e[10] = {
			a15: aRw,
			a16: aRx,
			aR4: aRy
		}, this.a0e[11] = {
			a15: aRz,
			a16: aS0,
			aR4: aS1
		}, this.a0e[12] = {
			a15: aRz,
			a16: aS0,
			aR4: aS1
		}, this.a0e[13] = {
			a15: aRu,
			a16: cos,
			aR4: aRv
		}, this.a0e[14] = {
			a15: aRu,
			a16: cos,
			aR4: aRv
		}, this.a0e[15] = {
			a15: aRw,
			a16: aRx,
			aR4: aRy
		}, this.a0e[16] = {
			a15: aRw,
			a16: aRx,
			aR4: aRy
		}, this.a0e[17] = {
			a15: aRu,
			a16: cos,
			aR4: aRv
		}, this.a0e[18] = {
			a15: aRz,
			a16: aS0,
			aR4: aS1
		}, this.a0e[19] = {
			a15: aRu,
			a16: cos,
			aR4: aRv
		}, this.a0e[20] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQq: 0
		}, this.a0e[21] = {
			j: 940,
			k: 940,
			nj: 80,
			ng: 8,
			aQq: 0
		}, this.a0e[22] = {
			a15: aRz,
			a16: aS0,
			aR4: aS1
		}, this.a0e[23] = {
			a15: aRw,
			a16: aRx,
			aR4: aRy
		}, this.a0e[24] = {
			a15: [157, 136, 117],
			a16: [16, 13, 68],
			aR4: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aBC: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aQh; aC++) this.a0e[aC].name = this.aRt[aC];
		this.a0e[bV.aQh] = {
			name: ""
		}, this.aRr = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aRr[aC] = aC;
		for (this.aRr[10] = 20, this.aRr[11] = 21, this.aRs = new Uint8Array(bV.aQi), aC = 0; aC < 10; aC++) this.aRs[aC] = 10 + aC;
		this.aRs[10] = 22, this.aRs[11] = 23, this.aRs[12] = 24
	}
}

function aQl() {
	this.aRo = function() {
		for (var hE, fn, gP, aRm = aGe, aRn = bV.a0o, j = bV.fr, aRl = j - 1, iX = bV.fs - 1, h9 = 0, fp = 1; fp < iX; fp++)
			for (gP = fp * j, fn = 1; fn < aRl; fn++) aRn[hE = gP + fn << 2] === aRn[1 + hE] && aRn[hE] === aRn[2 + hE] && (h9++, aRm[2 + hE] = 4);
		aq.aBG = h9
	}, this.aRp = function(aS3, aS4) {
		for (var aRm = aGe, j = bV.fr, aRl = j - 1, iX = bV.fs - 1, id = 0, fp = 1; fp < iX; fp++)
			for (var gP = fp * j, fn = 1; fn < aRl; fn++) {
				var fK = 2 + (gP + fn << 2);
				aRm[fK] === aS3 && (! function(fK, id, aS3, aS4) {
					var fg = 1,
						aRm = aGe,
						fi = ad.aMX,
						a6r = [fK],
						aS6 = id >> 8 << 1,
						aS7 = 255 & id;
					aRm[fK - 2] = aS6, aRm[fK - 1] = aS7, aRm[fK] = 5;
					for (; fg;) {
						for (var a6s = [], aC = 0; aC < fg; aC++)
							for (var fV = a6r[aC], fj = 0; fj < 8; fj++) {
								var fk = fV + fi[fj];
								aRm[fk] === aS3 && (aRm[fk - 2] = aS6, aRm[fk - 1] = aS7, aRm[fk] = aS4, a6s.push(fk))
							}
						fg = (a6r = a6s).length
					}
				}(fK, id, aS3, aS4), id = (id + 1) % 32768)
			}
	}, this.aRq = function() {
		for (var aRm = aGe, j = bV.fr, aRl = j - 3, iX = bV.fs - 3, aS9 = 12 * j, fp = 3; fp < iX; fp++)
			for (var gP = fp * j, fn = 3; fn < aRl; fn++) {
				var fK = 2 + (gP + fn << 2);
				2 !== aRm[fK] || 2 === aRm[fK - 12] && 2 === aRm[12 + fK] && 2 === aRm[fK - aS9] && 2 === aRm[fK + aS9] || (aRm[fK - 2] = 1 | aRm[fK - 2])
			}
	}
}

function a8y() {
	(a2O = void 0 === a2O ? document.createElement("canvas") : a2O).width = bV.fr, a2O.height = bV.fs, a92 = a2O.getContext("2d", {
		alpha: !0
	}), a93 = aGe = null, a93 = a92.getImageData(0, 0, bV.fr, bV.fs), aGe = a93.data, bD.tm.a0p(aGe)
}

function co() {
	var g8, j, k, max, aSA, ng, aSC, aSD, aSE, aSF, aSG, aSH, aSI, aSJ, aSB = 1e4;

	function aSQ(aSP, nj, fg) {
		var aC;
		for (aSC[0] = aSP, aC = 1; aC < fg; aC++) aSC[aC] = aSC[aC - 1] + nj, nj = aSC[aC] >= aSB ? (aSC[aC] = aSB - 1, -nj) : aSC[aC] < 0 ? (aSC[aC] = 0, -nj) : (nj += 16384 <= az.random() ? ng : -ng) < -aSA ? -aSA : aSA < nj ? aSA : nj
	}

	function aSS(fn, fp, aST, fg) {
		(aST ? function(fn, fp, fg) {
			var aC;
			for (aC = 0; aC < fg; aC++) g8[fp * j + fn + aC] = aSC[aC]
		} : function(fn, fp, fg) {
			var aC;
			for (aC = 0; aC < fg; aC++) g8[fp * j + fn + aC * j] = aSC[aC]
		})(fn, fp, fg)
	}

	function aSW(value, fg) {
		var aC, aQ8, fK, kH = value - aSC[fg - 1];
		if (0 != kH) {
			for (aQ8 = 1 + bO.g7(Math.abs(kH), fg - 1), aQ8 = kH < 0 ? -aQ8 : aQ8, aSC[fg - 1] = value, fK = (fK = fg - 1 - bO.g7(Math.abs(kH), Math.abs(aQ8))) < 1 ? 1 : fg - 2 < fK ? fg - 2 : fK, aC = fg - 2; fK <= aC; aC--) aSC[aC] += kH - (fg -
				1 - aC) * aQ8;
			(kH < 0 ? function(fg) {
				var aC;
				for (aC = fg - 2; 1 <= aC; aC--) aSC[aC] < 0 && (aSC[aC] = -aSC[aC] - 1)
			} : function(fg) {
				var aC;
				for (aC = fg - 2; 1 <= aC; aC--) aSC[aC] >= aSB && (aSC[aC] = 2 * aSB - aSC[aC] - 1)
			})(fg)
		}
	}

	function aSZ(a6r, a6s, fg) {
		for (var aC = 0; aC < fg; aC++) a6r[aC] = a6s[aC]
	}

	function aSa(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aSb(a9f, gap, iY) {
		aSD.push(a9f), aSE.push(gap), aSF.push(iY)
	}
	this.a8 = function(a8A) {
		! function(a8A) {
			var aC;
			for (j = a8A[0], k = a8A[1], aSA = a8A[2], ng = a8A[3], g8 = new Int16Array(j * k), max = k < j ? j : k, aSC = new Int16Array(max), aSD = [], aSE = [], aSF = [], aSG = new Array(j), aSH = new Array(k), aC = j - 1; 0 <= aC; aC--) aSG[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aSH[aC] = !1;
			aSI = new Int16Array(j), aSJ = new Int16Array(k)
		}(a8A),
		function(fg) {
			var aSP = az.random() % aSB,
				nj = az.random() % (2 * aSA + 1) - aSA;
			aSQ(aSP, nj, fg)
		}(max), aSZ(aSJ, aSC, k), aSS(0, 0, !0, j);
		var fn, fp, a8A = g8[0],
			fg = max,
			nj = az.random() % (2 * aSA + 1) - aSA;
		for (aSQ(a8A, nj, fg), aSZ(aSI, aSC, j), aSS(0, 0, !1, k), aSa(aSI), aSa(aSJ), aSQ(g8[j - 1], aSI[j - 1], k), aSS(j - 1, 0, !1, k), aSQ(g8[j * (k - 1)], aSJ[k - 1], j), aSW(g8[j * k - 1], j), aSS(0, k - 1, !0, j), aSG[j - 1] = aSG[0] = !
			0, aSH[k - 1] = aSH[0] = !0, aSb(0, j, !0), aSb(0, k, !1), ! function() {
				var aSd, a9f;
				for (;;) {
					if (aSd = function() {
							var aC, aSd = aSD.length - 1;
							for (aC = aSd - 1; 0 <= aC; aC--) aSE[aC] > aSE[aSd] && (aSd = aC);
							return aSd
						}(), aSE[aSd] < 5) return;
					a9f = aSD[aSd] + bO.g7(aSE[aSd], 2), (aSF[aSd] ? function(fn) {
						var fg, aSg, aC, aLG = 0,
							aSh = 0;
						for (; aSh < k - 1;) {
							for (aC = aLG + 1; aC < k; aC++)
								if (aSH[aC]) {
									aSh = aC;
									break
								} fg = aSh - aLG + 1, aSQ(g8[fn + j * aLG], 0 === aLG ? aSI[fn] : aSC[aSg - 1] - aSC[aSg - 2], fg), aSW(g8[aSh * j + fn], fg), aSS(fn, aLG, !1, fg), aSg = fg, aLG = aSh
						}
						aSG[fn] = !0
					} : function(fp) {
						var fg, aSg, aC, aLG = 0,
							aSh = 0;
						for (; aSh < j - 1;) {
							for (aC = aLG + 1; aC < j; aC++)
								if (aSG[aC]) {
									aSh = aC;
									break
								} fg = aSh - aLG + 1, aSQ(g8[fp * j + aLG], 0 === aLG ? aSJ[fp] : aSC[aSg - 1] - aSC[aSg - 2], fg), aSW(g8[fp * j + aSh], fg), aSS(aLG, fp, !0, fg), aSg = fg, aLG = aSh
						}
						aSH[fp] = !0
					})(a9f), aSb(a9f, aSD[aSd] + aSE[aSd] - a9f, aSF[aSd]), aSE[aSd] = a9f - aSD[aSd] + 1
				}
			}(), fn = 0; fn < j; fn++)
			if (!aSG[fn])
				for (fp = 0; fp < k; fp++) aSH[fp] || ! function(fn, fp) {
					var value = g8[fp * j + fn - 1] + g8[(fp - 1) * j + fn],
						aBd = 2;
					aSG[fn + 1] && (aBd++, value += g8[fp * j + fn + 1]);
					aSH[fp + 1] && (aBd++, value += g8[(fp + 1) * j + fn]);
					g8[fp * j + fn] = bO.g7(value, aBd)
				}(fn, fp)
	}, this.aRF = function() {
		return g8
	}, this.aQu = function() {
		g8 = null
	}
}

function aMg(fz, g0) {
	return 0 <= fz ? bO.g7(fz, g0) : -bO.g7(-fz, g0)
}

function kY(g8) {
	return g8 * g8
}

function aAf(fz, g0) {
	return g0 < fz ? fz : g0
}

function aG2(fz, g0) {
	return fz < g0 ? fz : g0
}

function aDE(fz, g8, g0) {
	return g8 < fz ? fz : g0 < g8 ? g0 : g8
}

function aSj(g8, fg) {
	for (var eq = bO.g7(g8 + 1, 2), aC = 0; aC < fg; aC++) eq = bO.g7(eq + bO.g7(g8, eq), 2);
	return eq
}

function aOf(g8, fg) {
	return g8 < 1 ? 0 : aSj(g8, fg)
}

function aSk(o5, o6, vc, aCy, oI, oJ, vd, wI) {
	return !(o5 + vc <= oI || o6 + aCy <= oJ || oI + vd <= o5 || oJ + wI <= o6)
}

function aSl(o5, o6, vc, aCy, oI, oJ, vd, wI) {
	return o5 <= oI && o6 <= oJ && oI + vd <= o5 + vc && oJ + wI <= o6 + aCy
}

function a0g(g8) {
	return Math.floor(!!g8 * (1 + Math.log2(g8 + .5)))
}

function c4() {
	this.g7 = function(fz, g0) {
		return Math.floor((fz + .5) / g0)
	}, this.aSm = function(fz, g0) {
		return Math.floor(fz * (g0 + .5))
	}, this.sqrt = function(g8) {
		return ~~Math.sqrt(g8 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.is = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aSn = function(gP, gR, gT) {
		return Math.max(Math.min(gP, gR), gT)
	}, this.aSo = function(aSp, aSq, fn, fp) {
		fn -= aSp, aSp = fp - aSq, fp = 0;
		return 0 == fn ? fp = 0 <= aSp ? Math.PI : 0 : (fp = Math.atan(aSp / fn), fp += 0 < fn ? .5 * Math.PI : 1.5 * Math.PI), fp
	}, this.log2 = function(g8) {
		return Math.floor(!!g8 * (1 + Math.log2(g8 + .5)))
	}, this.log10 = function(g8) {
		return Math.floor(Math.log10(g8 + .5))
	}, this.aSs = function(aGa, aSt, aSu, aSv, aSw) {
		return aSu - aSw < aGa && aGa < aSu + aSw && aSv - aSw < aSt && aSt < aSv + aSw
	}, this.a1d = function(aDe, aDg) {
		return aDe * aDe + aDg * aDg
	}
}

function dM() {
	this.z = new aSx, this.vX = 0;
	var aSy = new Array(32);

	function aT1() {
		for (var fg = aSy.length, aC = 0; aC < fg; aC++) aSy[aC] = null
	}
	this.dr = function() {
		for (var aSz, aT0 = document.body.firstChild; aT0;) aSz = aT0.nextSibling, !document.body.contains(aT0) || "DIV" !== aT0.tagName && "INPUT" !== aT0.tagName && "BUTTON" !== aT0.tagName || u.removeChild(document.body, aT0), aT0 = aSz
	}, this.v = function(eP, a5U, a8A) {
		void 0 === a5U && (a5U = this.vX), bi.dy = !0, 0 === eP && (0 === ab.a5P() ? eP = 5 : a1.a2.setState(13)), this.ub(), this.vX === eP && (a5U = aSy[eP].a5U, aSy[eP] = null), this.vX = eP;
		var lx = aSy[eP];
		if (!lx || 4 === eP || 7 === eP || 8 === eP || 9 === eP || 10 === eP || 11 === eP || 13 === eP || 15 === eP || 18 === eP || 20 <= eP && eP <= 28 || 32 === eP || 33 === eP) {
			if (0 === eP) return void aT1();
			1 === eP ? lx = new aT2 : 2 === eP ? lx = new aT3 : 3 === eP ? lx = new aT4 : 4 === eP || 9 === eP || 10 === eP || 11 === eP || 13 === eP || 33 === eP ? lx = a8A : 5 === eP ? lx = new aT5 : 6 === eP ? lx = new aT6 : 7 === eP ? lx =
				new aT7(u.z.aT8) : 8 === eP ? lx = a8A : 12 === eP ? lx = new aT9 : 14 === eP ? lx = new aTA : 15 === eP ? lx = new aT7(u.z.aTB) : 16 === eP ? lx = new aTC : 17 === eP ? lx = new aTD : 18 === eP ? lx = new aTE : 19 === eP ? lx =
				new aTF : 20 === eP ? lx = new aTG : 21 === eP ? lx = new aTH : 22 === eP ? lx = new aTI : 23 === eP ? lx = new aTJ : 24 === eP ? lx = new aTK : 25 === eP ? lx = new aTL : 26 === eP ? lx = new aTM : 27 === eP ? lx = new aTN :
				28 === eP ? lx = new aTO : 29 === eP ? lx = new aTP : 30 === eP ? lx = new aTQ : 31 === eP ? lx = new aTR : 32 === eP && (lx = new aTS), lx.a5U = a5U, aSy[eP] = lx
		}
		lx.show(a8A)
	}, this.a5O = function() {
		this.iT() && this.aTT(this.a5T().a5U)
	}, this.aTT = function(eP) {
		this.iT() && (aSy[eP] ? (this.ub(), bi.dy = !0, this.vX = eP, aSy[eP].show()) : this.v(eP))
	}, this.ub = function() {
		this.iT() && aSy[this.vX].ub()
	}, this.y = function() {
		this.iT() && (aSy[this.vX].ub(), aT1(), this.vX = 0, a1.a2.setState(13))
	}, this.yr = function() {
		var lx;
		this.iT() && (lx = aSy[this.vX]).yr && lx.yr()
	}, this.resize = function() {
		if (!this.iT()) return !1;
		aSy[this.vX].resize()
	}, this.hu = function(fn, fp) {
		var lx;
		this.iT() && (lx = aSy[this.vX]).hu && lx.hu(fn, fp)
	}, this.a5m = function(fn, fp) {
		var lx;
		this.iT() && (lx = aSy[this.vX]).a5m && lx.a5m(fn, fp)
	}, this.a6A = function() {
		var lx;
		this.iT() && (lx = aSy[this.vX]).a6A && lx.a6A()
	}, this.a5p = function(mH, mI, deltaY) {
		var lx;
		this.iT() && (lx = aSy[this.vX]).a5p && lx.a5p(mH, mI, deltaY)
	}, this.a6K = function(code) {
		var lx;
		return !!this.iT() && ((lx = aSy[this.vX]).a6K && lx.a6K(code), !0)
	}, this.el = function() {
		var lx;
		this.iT() && (lx = aSy[this.vX]) && lx.el && lx.el()
	}, this.iT = function() {
		return 0 < this.vX
	}, this.a5T = function() {
		return aSy[this.vX]
	}, this.a9Q = function(eP) {
		return aSy[eP]
	}, this.aTU = function() {
		return aSy
	}, this.removeChild = function(os, ot) {
		try {
			os.removeChild(ot)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aT7(data) {
	var aTV, aTW;

	function aTZ(tb, x2) {
		if (!data.aTX) {
			if (data.aUM) {
				if (x2) return
			} else {
				if (!x2) return;
				if (data.a05 < 1e4) return
			}
			var aUT, xD = new tL,
				aUR = x2 && 1e5 <= data.a05,
				aUS = xD.tO(x2 ? (aUR ? "⚠️ " : "") + L(278) : L(279)),
				aUV = (aUR && (aUS.style.color = "yellow"), x2 ? xD.tP(L(280, [bD.pg.a8S(data.a05, .01, 0)])) : ((aUT = new uP({
					value: data.aUU,
					eP: -1
				})).e.readOnly = !0, aUT.e.type = "password", xD.tY(aUT), xD.tY(new um([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aUT.e.type = "text") : (e.textContent = L(208), aUT.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.tC.a7Y(aUT.e), bD.tC.yW(e), !0
				}).button]))), xD.tT(L(x2 ? 279 : 281)).style.marginTop = "0.75em", new uP({
					value: "",
					eP: -1
				}, 0, 0)),
				aUX = (aUV.e.type = "email", aUV.e.autocomplete = "email", aUV.e.name = "email", aUV.e.inputMode = "email", aUV.e.spellcheck = !1, xD.tY(aUV), xD.tY(new um([new x(L(282), function(e) {
					return b1.aU1.aUW({
						action: 3,
						pc: aUV.e.value.trim().substring(0, 63)
					}), bD.tC.yW(e), !0
				}).button])), x2 && xD.tP(L(283)), xD.tT(L(284)).style.marginTop = "0.75em", new uP({
					value: "",
					eP: -1
				}, 1));
			xD.tY(aUX), xD.tY(new um([new x(L(285), function() {
				b1.aU1.aU2({
					action: 4,
					pk: "",
					value: Math.floor(+aUX.e.value)
				}), u.v(8, u.a5T().a5U, new vY(18))
			}).button])), tb.push(xD)
		}
	}
	this.show = function() {
		data.aTX && bL.aUp("account", data.pk), aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(data.username, [new x("⬅️ " + L(42), function() {
		bL.clear(), u.a5O()
	}), new x(data.aTX ? "🔄 " + L(174) : L(175), function() {
		u.v(8, data.aTX ? u.a5T().a5U : void 0, new vY(25, {
			action: 0,
			pk: data.pk,
			vW: data.vW
		}))
	}, 0, 0, 1)]), aTW = new tZ(aTV.yi, function() {
		var tb = [];
		aTZ(tb, 1), tb.push(function() {
				var xD = new tL;
				xD.tO(L(253)), data.aUM && (xD.tT("✅ " + L(254)).style.marginBottom = "0.75em");
				var a50 = data.aUN;
				a50 < 1 ? (xD.tT(L(255)), 0 === data.aUO ? xD.tP(L(256)) : 1 === data.aUO ? xD.tP(L(257)) : 2 === data.aUO ? xD.tP(L(258)) : 3 === data.aUO ? xD.tP(L(259)) : 4 === data.aUO ? xD.tP(L(260)) : 5 === data.aUO ? xD.tP(L(
					261)) : 6 === data.aUO ? xD.tP(L(262)) : xD.tP(L(263))) : (xD.tT(L(264)), a50 = a50 < 2 ? L(265) : a50 < 61 ? 2 === a50 ? L(266) : L(267, [a50 - 1]) : a50 < 84 ? 61 === a50 ? L(268) : L(269, [a50 - 60]) : a50 <
					255 ? 84 === a50 ? L(270) : L(271, [a50 - 83]) : L(272), xD.tP(a50));
				{
					var tQ, aTy;
					xD.tY(new ux), data.aTX && (tQ = xD.tP(), xD.tY(new um([new x(bm.zF.xq(data.pk) ? L(273) : L(274), function(e) {
						return bm.zF.zS(data.pk) ? (e.textContent = L(273), aTy(1)) : (e.textContent = L(274), aTy(0)), !0
					}).button])), aTy = function(g8) {
						tQ.textContent = g8 ? L(275) : ""
					}, bm.zF.xq(data.pk) && aTy(1), xD.tY(new ux))
				}
				var qJ, uO = new uP({
					value: data.username,
					eP: -1
				});
				uO.e.readOnly = !0, xD.tY(uO), xD.tY(new um([new x(L(205), function(e) {
					return bD.tC.a7Y(uO.e), bD.tC.yW(e), !0
				}).button])), data.aTX || xD.tP(L(276));
				(data.aUP || data.aUQ) && (xD.tY(new ux), xD.tP(L(277)), data.aUP && ((qJ = xD.tP("• Muted")).style.color = "orange", qJ.style.marginTop = "0.5em"), data.aUQ) && ((qJ = xD.tP("• Redacted")).style.color = "orange", qJ.style
					.marginTop = "0.5em");
				data.aTX && (xD.tY(new ux), xD.tT(b1.z.aTu("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xD) {
					function click(e, aKd) {
						return bs.aKe(data.pk, aKd) && (bD.tC.yW(e), p8[0].tx(1), p8[1].tx(1)), !0
					}
					var color = bs.aKc(data.pk) ? 1 : 0,
						p8 = [];
					p8.push(new x(L(240), function(e) {
						return click(e, 1)
					}, color || bE.qv)), p8.push(new x(L(241), function(e) {
						return click(e, 0)
					}, color || bE.rA)), xD.tY(new um([p8[0].button])), xD.tY(new um([p8[1].button]))
				}(xD));
				return xD
			}()),
			function(tb) {
				var xD, uO, k, aTz, aU3, aU0;
				data.aTX && data.aU6 && ((xD = new tL).tO(L(201)), xD.tP(L(198)), (uO = new uP({
					value: data.aU6,
					eP: -1
				})).e.readOnly = !0, xD.tY(uO), k = !1, aTz = new x(L(202), function(e) {
					return k && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aU7({
						action: 9,
						pk: data.pk
					})), !0
				}, 1), aU3 = new x(L(195), function(e) {
					return e.textContent === L(195) ? (k = !0, e.textContent = L(196), aTz.tx(0), aTz.button.style.color = bE.rY) : aU0(), !0
				}), xD.tY(new um([aU3.button])), aU0 = function() {
					k = !1, aU3.button.textContent = L(195), aTz.tx(1), aTz.button.style.color = bE.qT
				}, xD.tY(new um([aTz.button])), xD.tP(L(203)), tb.push(xD))
			}(tb),
			function(tb) {
				var xD, tQ, aGu, aUZ, aTz, aU3, aU0;
				data.aTX || ((xD = new tL).tO(L(286)), (tQ = xD.tP(data.aUY.length + " / 160")).style.textAlign = "center", aGu = !0, (aUZ = new z0(0, 1, function(e) {
					e = e.target.value.length;
					tQ.textContent = e + " / 160", 160 < e ? aGu && (aGu = !1, aU3.tx(1)) : aGu || (aGu = !0, aU3.tx(0))
				})).e.rows = 6, aUZ.e.style.fontSize = "1em", aUZ.z6(data.aUY), xD.tY(aUZ), 0 !== data.aUa ? (aU3 = new x(L(287), function() {
					if (!aGu) return !0;
					u.v(8, u.a5T().a5U, new vY(29, {
						action: 1,
						pc: aUZ.z7().substring(0, 160)
					}))
				}, 0, 0, 1), xD.tY(new um([aU3.button])), xD.tY(new um([new x(1 === data.aUa ? L(288) : L(289), function() {
					u.v(8, u.a5T().a5U, new vY(29, {
						action: 0,
						pc: ""
					}))
				}, 0, 0, 1).button])), xD.tP(1 === data.aUa ? L(290, [data.aUb - 1]) : L(291, [data.aUb - 1])), xD.tP(L(292, [data.aUc]))) : (aTz = new x(L(202), function() {
					if (!aUZ.e.readOnly) return !0;
					u.v(8, u.a5T().a5U, new vY(29, {
						action: 1,
						pc: aUZ.z7().substring(0, 160)
					}))
				}, 1), aU3 = new x(L(195), function(e) {
					if (e.textContent === L(195)) {
						if (!aGu) return !0;
						e.textContent = L(196), aUZ.e.readOnly = !0, aTz.tx(0), aTz.button.style.color = bE.rY
					} else aU0();
					return !0
				}), xD.tY(new um([aU3.button])), xD.tP(L(292, [data.aUc])), aU0 = function() {
					aU3.button.textContent = L(195), aUZ.e.readOnly = !1, aTz.tx(1), aTz.button.style.color = bE.qT
				}, xD.tY(new um([aTz.button]))), tb.push(xD))
			}(tb),
			function(tb) {
				var xD;
				data.aTX && 0 !== data.aUa && ((xD = new tL).tO(L(293)), xD.tR(data.aUY), xD.tY(new um([new x(L(294, 0, "Report"), function(e) {
					return b1.z.em(0) && (bD.tC.yW(e), b1.aU1.aU7({
						action: 5,
						pk: data.pk
					})), !0
				}, 0, 0, 1).button])), tb.push(xD))
			}(tb), tb.push(function() {
				var xD = new tL,
					aTv = (xD.tO(L(176)), xD.tT(b1.z.aTu("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190)]),
					eO = data.aTw;
				return xD.tT(L(191) + bD.pg.a8S(data.a05, .01, 2) + "<br>" + L(192) + (eO + 1) + " / " + data.a04 + "<br>" + L(193) + aTv[function(eO, a05) {
					if (eO < 10) return 0;
					if (eO < 30) return 1;
					if (eO < 60) return 2;
					if (3e4 <= (a05 = bO.g7(a05, 100))) return 3;
					if (12e3 <= a05) return 4;
					if (7e3 <= a05) return 5;
					if (3e3 <= a05) return 6;
					if (1e3 <= a05) return 7;
					if (500 <= a05) return 8;
					if (200 <= a05) return 9;
					if (70 <= a05) return 10;
					if (20 <= a05) return 11;
					if (3 <= a05) return 12;
					return 13
				}(eO, data.a05)]), xD
			}()), data.aTX && tb.push(function() {
				var xD = new tL,
					uO = (xD.tO(L(194)), xD.tT(b1.z.aTu("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uP({
						value: bm.buffer.data[147].value,
						eP: -1
					}, 1, void 0, function(e) {
						bm.rz.q5(147, aTy(e.target.value))
					})),
					aTz = (xD.tY(uO), new x(L(14), function(e) {
						return uO.e.readOnly && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aU2({
							action: 0,
							pk: data.pk,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aU3 = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), uO.e.readOnly = !0, aTz.tx(0), aTz.button.style.color = bE.rY, bm.rz.q5(147, uO.e.value), aTy(bm.buffer.data[147].value)) : aU0(), !0
					}),
					tQ = (xD.tY(new um([aU3.button])), xD.tP()),
					aTy = function(g8) {
						return tQ.innerHTML = u.z.aU4(g8, bm.buffer.data[105].value, data.pk), g8
					},
					aU0 = function() {
						aU3.button.textContent = L(195), uO.e.readOnly = !1, aTz.tx(1), aTz.button.style.color = bE.qT
					};
				return aTy(bm.buffer.data[147].value), xD.tY(new um([aTz.button])), xD
			}());
		tb.push(function() {
			var xD = new tL,
				uO = (xD.tO(L(204)), new uP({
					value: data.pk,
					eP: -1
				})),
				aU5 = (uO.e.readOnly = !0, xD.tY(uO), xD.tY(new um([new x(L(205), function(e) {
					return bD.tC.a7Y(uO.e), bD.tC.yW(e), !0
				}).button])), xD.tY(new ux), new uP({
					value: data.pk,
					eP: -1
				}));
			return xD.tY(aU5), xD.tY(new um([new x(L(206), function(e) {
				u.v(8, u.a5T().a5U, new vY(25, {
					action: 0,
					pk: aU5.e.value,
					vW: 0
				}))
			}).button])), xD
		}()), data.aTX || (tb.push(function() {
			var xD = new tL,
				aU8 = (xD.tO(L(207)), new uP(bm.buffer.data[106])),
				customPasswordInput = (aU8.e.readOnly = !0, aU8.e.type = "password", xD.tY(aU8), xD.tY(new um([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aU8.e.type = "text") : (e.textContent = L(208), aU8.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.tC.a7Y(aU8.e), bD.tC.yW(e), !0
				}).button])), new uP({
					value: "",
					eP: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", xD.tY(customPasswordInput), xD.tY(new um([new x(L(210), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a5T().a5U, new vY(15))
			}).button])), xD.tO(L(211), "0.8em"), xD.tP(L(212)), xD.tP(L(213)), xD.tP(L(214)), xD
		}()), tb.push(function() {
			var xD = new tL;
			return xD.tO(L(215)), xD.tY(new um([new x(L(216), function() {
				u.v(6, u.a5T().a5U)
			}).button])), xD.tY(new um([new x(L(217), function() {
				bm.rz.q5(105, ""), u.v(8, u.a5T().a5U, new vY(18))
			}).button])), xD.tY(new um([new x(L(218) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(219), L(220), !0, [new x("⬅️ " + L(42), function() {
					u.v(7, u.a9Q(7).a5U)
				})]))
			}, bE.rA).button])), xD
		}()), tb.push(function() {
			function aUA(eP) {
				aU9[0].tx(0 === eP ? bE.qf : bE.qq), aU9[1].tx(0 === eP ? bE.qf : bE.rA)
			}
			var tW, aU9, xD = new tL;
			xD.tO(L(224)), xD.tP(L(225)), bm.z.zn();
			return aU9 = [new x(L(226), function() {
				var eP = Math.min(bm.buffer.data[117].value, tW.tX.length - 1);
				eP < 1 || (eP = bm.z.zs(eP)) && (bm.rz.q5(105, eP.pk), bm.rz.q5(106, eP.password), u.v(8, u.a5T().a5U, new vY(18)))
			}, bE.qf, 1), new x(L(223), function() {
				var eP = Math.min(bm.buffer.data[117].value, tW.tX.length - 1);
				if (!(eP < 1)) {
					tW.tX[eP].remove(), tW.tX.splice(eP, 1);
					for (var aC = eP; aC < tW.tX.length; aC++) tW.tX[aC].name = "" + aC;
					bm.z.zq(eP), eP = bm.buffer.data[117].value, tW.tX[eP].textContent = tW.tX[eP].textContent.replace("⚪", "🟢"), aUA(eP)
				}
			}, bE.qf, 1)], tW = new yZ(bm.buffer.data[117], aUA), __fx.savedAccounts.decorate(tW.tX, bm.buffer.data[117].oW), aUA(0), tW.tX[0].style.marginTop = "0.5em", xD.tV(tW), xD.tY(new um([aU9[0].button])), xD.tY(new um(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), xD.tY(new um([aU9[1].button])), xD
		}()));
		return tb.push(function() {
				var xD = new tL,
					pc = (xD.tO(L(236)), L(237, [(data.aUC / 1e3).toFixed(3)]) + "<br>" + L(238, [data.aUD]));
				data.aUE && (pc += "<br>" + L(239, [(data.aUF / 1e3).toFixed(3)]));
				return xD.tT(pc), xD
			}()), tb.push(function() {
				var xD = new tL,
					aTv = (xD.tO(L(230)), [L(231), L(232), L(233), L(234)]),
					eO = data.aUB;
				return xD.tT(L(235) + (data.a4k / 100).toFixed(2) + "<br>" + L(192) + (eO + 1) + " / " + data.a04 + "<br>" + L(193) + aTv[eO < 10 ? 0 : eO < 50 ? 1 : eO < 200 ? 2 : 3]), xD
			}()), tb.push(function() {
				var xD = new tL;
				return xD.tO(L(227)), xD.tT(L(228) + bD.pg.a8S(data.a01, .1, 1) + "<br>" + L(192) + (data.a02 + 1) + " / " + data.a04 + "<br>" + L(229) + data.a03), xD
			}()),
			function(tb) {
				var xD = new tL,
					aUd = data.a08,
					aUe = (xD.tO(L(295)), xD.tT(L(296, [data.a06.length ? "[" + data.a06 + "]" : "-"])), xD.tT(L(297, [bD.pg.a8S(aUd, .01, 2)])), xD.tT(L(298, [data.a0A + 1 + " / " + data.a04])), data.a0B),
					aUf = (xD.tT(L(299, [bD.pg.a8S(aUe, .1, 1)])), data.a0D);
				xD.tT(L(300, [aUf])), xD.tT(L(301, [bD.pg.a8S(aUe / Math.max(aUf, 1), .1, 2)])), aUd = data.a09, xD.tO(L(302), "0.8em"), xD.tT(L(296, [data.a07.length ? "[" + data.a07 + "]" : "-"])), xD.tT(L(297, [bD.pg.a8S(aUd, .01, 2)])),
					aUe = data.a0C, xD.tT(L(299, [bD.pg.a8S(aUe, .1, 1)])), aUf = data.a0E, xD.tT(L(300, [aUf])), xD.tT(L(301, [bD.pg.a8S(aUe / Math.max(aUf, 1), .1, 2)])), xD.tT(b1.z.aTu("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tb.push(xD)
			}(tb),
			function(tb) {
				var xD = new tL;
				xD.tO(L(303)), xD.tT(L(235) + (data.aUg / 10).toFixed(1) + "<br>" + L(193) + (data.aUh.length ? L(304, [data.aUh]) : L(305))), data.aTX && xD.tY(new um([new x(L(251), function(e) {
					return b1.z.em(0) && (bD.tC.yW(e), b1.aU1.aU7({
						action: 4,
						pk: data.pk
					})), !0
				}, 0, 0, 1).button]));
				xD.tT(b1.z.aTu("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tb.push(xD)
			}(tb), tb.push(function() {
				var xD = new tL;
				{
					var uO, aU3, aUL, tQ, aTy, aU0;
					xD.tO(L(249)), xD.tT(L(250) + data.aUJ + "<br>" + L(192) + (data.aUK + 1) + " / " + data.a04 + "<br>" + L(193) + br.eR(data.aUK)), data.aTX && ((uO = new uP({
						value: bm.buffer.data[157].value,
						eP: -1
					}, 1, void 0, function(e) {
						bm.rz.q5(157, aTy(e.target.value))
					})).e.style.marginTop = "0.6em", xD.tY(uO), aU3 = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), uO.e.readOnly = !0, aUL[0].tx(0), aUL[0].button.style.color = bE.rY, aTy(bm.buffer.data[157].value)) : aU0(), !0
					}), xD.tY(new um([aU3.button])), aUL = [new x(L(251), function(e) {
						return uO.e.readOnly && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aU2({
							action: 1,
							pk: data.pk,
							value: bO.is(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tQ = xD.tP(), aTy = function(g8) {
						return g8 = bD.h2.a87(g8, 2, 3e4), tQ.textContent = L(252, [g8 - 1, g8, bm.buffer.data[105].value]), g8
					}, xD.tY(new um([aUL[0].button])), aU0 = function() {
						aU3.button.textContent = L(195), uO.e.readOnly = !1, aUL[0].tx(1), aUL[0].button.style.color = bE.qT
					}, aTy(bm.buffer.data[157].value))
				}
				return xD
			}()),
			function(tb) {
				var xD, a7X;
				data.aTX && !data.aUi || (0 === a1.id || data.aTX || data.aUi) && ((xD = new tL).tO("Patreon"), !data.aTX && data.aUj ? xD.tY(new um([new x(L(208), function() {
					b1.aU1.aU7({
						action: 7,
						pk: data.pk
					}), data.aUj = 0, u.v(7)
				}).button])) : data.aUi ? (xD.tT(L(306, [(data.aUk / 100).toFixed(2)]) + "<br>" + L(307, [1 + data.aUl + " / " + data.aUm]) + "<br>" + L(308, [data.aUn ? L(309) : L(310)])), data.aTX || xD.tY(new um([new x(L(311),
					function() {
						b1.aU1.aU7({
							action: 8,
							pk: data.pk
						}), data.aUi = 0, bm.rz.q5(160, 0), u.v(7)
					}).button]))) : (xD.tT(L(312), "0.75em").style.marginBottom = "0.3em", xD.tT("  • " + L(313), "0.75em").style.whiteSpace = "pre", xD.tT("  • " + L(314), "0.75em").style.whiteSpace = "pre", xD.tT("  • " + L(315),
						"0.75em").style.whiteSpace = "pre", xD.tT(L(316), "0.75em").style.marginTop = "1.0em", xD.tT(L(317), "0.75em").style.marginTop = "1.0em", xD.tT("<a href='" + bN.aUo +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7X = "https://www.patreon.com/oauth2/authorize?state=" + data.pk +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4g() + "/", xD.tT(L(318), "0.75em").style.marginTop = "1.0em", xD.tT("<a href='" +
						a7X + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aTX || (xD.tY(new ux), xD.tY(new um([new x(L(209), function() {
						b1.aU1.aU7({
							action: 6,
							pk: data.pk
						}), data.aUj = 1, u.v(7)
					}).button])), xD.tT(L(319), "0.75em").style.marginTop = "0.75em")), tb.push(xD))
			}(tb), tb.push(function() {
				var xD = new tL,
					aTv = (xD.tO(L(242)), [L(243), L(244), L(245), L(246), "Scout", L(247)]),
					eO = data.aUH;
				return xD.tT(L(248) + (data.aUI / 100).toFixed(2) + "<br>" + L(192) + (eO + 1) + " / " + data.a04 + "<br>" + L(193) + aTv[eO < 3 ? 0 : eO < 20 ? 1 : eO < 100 ? 2 : eO < 500 ? 3 : eO < 2e3 ? 4 : 5]), xD.tT(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xD
			}()),
			function(tb) {
				var xD, uO, aU5, aTz, aU3, aU0;
				data.aTX || ((xD = new tL).tO(L(197)), xD.tP(L(198)), uO = new uP({
					value: bm.buffer.data[184].value,
					eP: -1
				}, 1, void 0, function(e) {
					bm.rz.q5(184, e.target.value)
				}), xD.tY(uO), xD.tP(L(199)), aU5 = new uP({
					value: bm.buffer.data[185].value,
					eP: -1
				}, 0, void 0, function(e) {
					bm.rz.q5(185, e.target.value)
				}), xD.tY(aU5), aTz = new x(L(200), function(e) {
					return uO.e.readOnly && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aU2({
						action: 5,
						pk: bm.buffer.data[185].value,
						value: bO.is(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aU3 = new x(L(195), function(e) {
					return e.textContent === L(195) ? (e.textContent = L(196), uO.e.readOnly = !0, aU5.e.readOnly = !0, aTz.tx(0), aTz.button.style.color = bE.rY, bm.rz.q5(184, uO.e.value)) : aU0(), !0
				}), xD.tY(new um([aU3.button])), aU0 = function() {
					aU3.button.textContent = L(195), uO.e.readOnly = !1, aU5.e.readOnly = !1, aTz.tx(1), aTz.button.style.color = bE.qT
				}, xD.tY(new um([aTz.button])), tb.push(xD))
			}(tb),
			function(tb) {
				var xD, tW, aU9, eP, aUA;
				data.aTX || bm.zF.get().length && ((xD = new tL).tO(L(221)), eP = 0, aUA = function() {
					var aGS = bm.zF.get().length;
					aU9[0].tx(eP === aGS ? bE.qf : bE.qq), aU9[1].tx(eP === aGS ? bE.qf : bE.rA)
				}, aU9 = [new x(L(222), function() {
					u.v(8, void 0, new vY(25, {
						action: 0,
						pk: bm.zF.get()[eP],
						vW: 0
					}))
				}, bE.qf, 1), new x(L(223), function() {
					bm.zF.zU(eP), tW.tX[eP].remove(), tW.tX.splice(eP, 1);
					for (var aC = eP; aC < tW.tX.length; aC++) tW.tX[aC].name = "" + aC;
					bm.zF.get().length && (eP = Math.max(eP - 1, 0), tW.tX[eP].textContent = tW.tX[eP].textContent.replace("⚪", "🟢")), aUA()
				}, bE.qf, 1)], aUA(), tW = new yZ(bm.zF.zR(), function(aC) {
					eP = aC, aUA()
				}), __fx.followedAccounts.decorate(tW.tX, bm.zF.get()), tW.tX[0].style.marginTop = "0.5em", xD.tV(tW), xD.tY(new um([aU9[0].button])), xD.tY(new um([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eP)
				}).button])), xD.tY(new um([aU9[1].button])), tb.push(xD))
			}(tb), aTZ(tb, 0), tb
	}())
}

function aTI() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.aIncomeType ? (bD.tm.a6v(aUs.z7(), aE.data.aIncomeData, 255), bD.tm.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(320), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(322), L(323), L(324)],
			value: aE.data.aIncomeType
		}, function(eP) {
			aUv(), 2 !== eP || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fd)), aE.data.aIncomeType = eP, u.v(22)
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD;
		1 === aE.data.aIncomeType && ((xD = new tL).tO("Value"), xD.tY(new uP({
			eP: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tb.push(xD))
	}(tb), function(tb) {
		var xD;
		2 === aE.data.aIncomeType && ((xD = new tL).tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.aIncomeData, 4)), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aTL() {
	var aUq, aUr, aUs;

	function aUt() {
		aUv(), 3 !== aE.data.botDifficultyType || bD.tm.a6j(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		3 === aE.data.botDifficultyType && bD.tm.a6v(aUs.z7(), aE.data.botDifficultyData, aF.lD.length - 1)
	}

	function aV0(tb, eP) {
		var xD = new tL,
			value = (xD.tO(eP < 0 ? L(69) : L(68) + " " + bj.a4b[eP % 9]), 0 <= eP && (xD.tT(L(327) + ": " + aE.data.teamPlayerCount[eP]).style.marginBottom = "1em"), eP < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eP]);
		xD.tV(new yZ({
			oW: aF.lD,
			value: value
		}, function(iZ) {
			eP < 0 ? aE.data.botDifficultyValue = iZ : aE.data.botDifficultyTeam[eP] = iZ
		})), tb.push(xD)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(69), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, function() {
		var tb = [];
		if (function(tb) {
				var xD = new tL,
					oW = (xD.tO(L(321)), [L(323), L(325), L(326), L(324)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oW.splice(2, 1));
				xD.tV(new yZ({
					oW: oW,
					value: value
				}, function(eP) {
					aUv(), aE.data.botDifficultyType = eP, 0 === aE.data.gameMode && 2 === eP && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fd)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tb.push(xD)
			}(tb), 0 === aE.data.botDifficultyType) aV0(tb, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aV0(tb, aC);
		else 3 === aE.data.botDifficultyType && ! function(tb) {
			var xD = new tL;
			xD.tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.botDifficultyData, 8)), xD.tY(aUs), tb.push(xD)
		}(tb);
		return tb
	}())
}

function aV1(data) {
	var aTV, aV2, aV3, aV4, aV5, aV6, aV7, colors, aV8, aV9, aVA = 0,
		aVB = 0,
		aVC = !1,
		aVD = !1,
		aVE = [1, 5, 60, 240, 1440, 10080, 43200];

	function aVi(mH, mI) {
		! function(mH, mI) {
			return aV2 < mH && mH < aV2 + aV4 && aV3 < mI && mI < aV3 + aV5
		}(aVA = mH, aVB = mI) ? (aVC && (bi.dy = !0), aVC = !1) : (aVC = !0, bi.dy = !0)
	}
	this.show = function() {
		aVD = bm.buffer.data[127].value, aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize();
		var eq = i.l,
			yq = aTV.yn(),
			aVN = eq * yq.yp,
			eq = eq * yq.ud;
		aV6 = bD.tC.vu(.06), aV7 = bD.tC.vu(.04), aV2 = bD.tC.vu(.06), aV3 = eq + aV6, aV4 = i.j - aV2 - aV7, aV5 = aVN + eq - aV3 - aV7
	}, this.yr = function() {
		aTV.yr(),
			function() {
				var aC, aVK, h9, fn, fz, h = data.data,
					aVR = 1,
					aVS = .125,
					aVT = aVD ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aVK = h[aC].aVK, h9 = aVK.length, aVR = Math.max(h9, aVR), fz = 0; fz < h9; fz++) aVS = Math.max(aVK[fz], aVS), aVT = Math.min(aVK[fz], aVT);
				var o6 = aV3 + aV5,
					a2C = aV5 / (aVS - aVT),
					a2B = 1 / (aVR - 1);
				for (ys.lineWidth = bf.a3E, aC = 0; aC < h.length; aC++) {
					for (aVK = h[aC].aVK, h9 = aVK.length, fn = aV2, ys.beginPath(), ys.moveTo(fn + aV4, o6 - a2C * (aVK[h9 - 1] - aVT)), fz = h9 - 2; 0 <= fz; fz--) ys.lineTo(fn + a2B * fz * aV4, o6 - a2C * (aVK[fz] - aVT));
					ys.strokeStyle = colors[aC], ys.stroke()
				}(function(aVT, aVS, o6, a2C) {
					ys.font = bD.tC.tF(0, .25 * aV2), bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 2), ys.fillStyle = colors[0];
					for (var fn = .92 * aV2, aC = 0; aC < 3; aC++) {
						var g8 = aVT + aC * (aVS - aVT) / 2;
						ys.fillText((g8 / 1e3).toFixed(3), fn, o6 - a2C * (g8 - aVT))
					}
				})(aVT, aVS, o6, a2C),
				function(aVR) {
					var fp = aV3 + aV5 + .15 * aV7;
					ys.font = bD.tC.tF(0, Math.min(.4 * aV7, .028 * i.j)), bD.tC.textBaseline(ys, 0), bD.tC.textAlign(ys, 2), ys.fillStyle = colors[0], ys.fillText(bD.a6a.a7P(aV8), aV2 + aV4, fp), bD.tC.textAlign(ys, 0), ys.fillText(bD.a6a.a7P(
						new Date(aV9.getTime() - 6e4 * (aVR - 1) * aVE[data.aVJ])), aV2, fp)
				}(aVR),
				function(aVR, aVT, aVS) {
					if (aVC && !(aVR < 2)) {
						for (var aD5, eP = (aVA - aV2) / aV4 * (aVR - 1), aVW = Math.floor(eP), aVX = Math.floor(1 + eP), aVY = eP - aVW, aVZ = 1e5, aVa = -1, aVb = -1, aVc = aVS - (aVS - aVT) * (aVB - aV3) / aV5, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aH5, aVK = h[aC].aVK;
							aVK.length <= aVX || (aVK = aVK[aVW] + aVY * (aVK[aVX] - aVK[aVW]), (aH5 = Math.abs(aVc - aVK)) < aVZ && (aVZ = aH5, aVa = aC, aVb = aVK))
						} - 1 !== aVa && (aVS = aV3 + aV5 - (aVb - aVT) / (aVS - aVT) * aV5, ys.lineWidth = .5 * bf.a3E, ys.strokeStyle = colors[aVa], ys.beginPath(), ys.moveTo(aV2, aVS), ys.lineTo(aVA, aVS), ys.lineTo(aVA, aV3 + aV5), ys
							.stroke(), ys.beginPath(), ys.arc(aVA, aVS, .1 * aV2, 0, 2 * Math.PI), ys.fillStyle = colors[aVa], ys.fill(), aVT = aV3 + aV5 + .15 * aV7, bD.tC.textAlign(ys, 1), aD5 = aVR - 2 < eP ? (aD5 = aV9.getTime() - 6e4 *
								aVE[data.aVJ], new Date(aD5 + (eP - (aVR - 2)) * (aV8.getTime() - aD5))) : new Date(aV9.getTime() - 6e4 * (aVR - eP - 1) * aVE[data.aVJ]), aVR = bD.a6a.a7P(aD5), eP = bD.tC.measureText(aVR), aD5 = bO.is(aVA,
								aV2 + .5 * eP, aV2 + aV4 - .5 * eP), ys.fillStyle = bD.color.qL(70, 50, 20), ys.fillRect(aD5 - .52 * eP, aV3 + aV5, 1.04 * eP, .55 * aV7), ys.fillStyle = colors[0], ys.fillText(aVR, aD5, aVT), ys.font = bD.tC
							.tF(0, .25 * aV2), bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 2), aD5 = .92 * aV2, aVR = (aVb / 1e3).toFixed(3), eP = bD.tC.measureText(aVR), aVT = aD5 - 1.04 * eP, ys.fillStyle = bD.color.qL(70, 50, 20), ys
							.fillRect(aVT, aVS - .1625 * aV2, aV2 - aVT, .275 * aV2), ys.fillStyle = colors[aVa], ys.fillText(aVR, aD5, aVS))
					}
				}(aVR, aVT, aVS)
			}(), ys.lineWidth = bf.a3E, ys.strokeStyle = bE.qT, ys.beginPath(), ys.moveTo(aV2, aV3), ys.lineTo(aV2, aV3 + aV5), ys.lineTo(aV2 + aV4, aV3 + aV5), ys.stroke();
		var aC, fontSize = .5 * aV6,
			h = (ys.font = bD.tC.tF(0, fontSize), bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 0), data.data),
			fg = h.length,
			fp = aV3 - .5 * aV6,
			pc = "";
		for (aC = 0; aC < fg; aC++) pc += h[aC].name + "  ";
		pc = pc.trim();
		var aVf = bD.tC.measureText(pc),
			fn = .5 * (i.j - aVf);
		for (aVf > i.j && (fn = 0, ys.font = bD.tC.tF(0, i.j / aVf * fontSize)), aC = 0; aC < fg; aC++) ys.fillStyle = colors[aC], ys.fillText(h[aC].name, fn, fp), fn += bD.tC.measureText(h[aC].name + "  ")
	}, this.hu = function(mH, mI) {
		aVi(mH, mI)
	}, this.a5m = function(mH, mI) {
		aVi(mH, mI)
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	};
	var aC, eh, a7N, iZ, fj = data.data,
		fg = fj.length,
		max = 1;
	for (aC = 0; aC < fg; aC++) max = Math.max(max, fj[aC].aVK.length);
	for (aC = 0; aC < fg; aC++)
		for (; fj[aC].aVK.length < max;) fj[aC].aVK.unshift(0);
	eh = new Date, a7N = 6e4 * eh.getTimezoneOffset(), iZ = eh.getTime() - a7N, aV8 = new Date(iZ), 6 === data.aVJ ? function(eh, a7N) {
		var aVM = eh.getUTCFullYear(),
			eh = eh.getUTCMonth() + 1;
		aV9 = eh < 12 ? new Date(Date.UTC(aVM, eh) - a7N) : new Date(Date.UTC(aVM + 1, 0) - a7N)
	}(eh, a7N) : (a7N = 6e4 * aVE[data.aVJ], aV9 = data.aVJ <= 4 ? new Date(iZ + a7N - eh.getTime() % a7N) : new Date(iZ + a7N - (eh.getTime() + 2592e5) % a7N)), iZ = bD.color, colors = [bE.qT, iZ.qL(255, 0, 0), iZ.qL(0, 200, 0), iZ.qL(80, 80,
		255), iZ.qL(255, 255, 0), iZ.qL(255, 0, 255), iZ.qL(0, 255, 255), iZ.qL(255, 140, 0), iZ.qL(128, 128, 128), iZ.qL(0, 255, 140)], aTV = new yd(L(328) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aVJ] + ", " + bD.a6a.a7M(aV8), [
		new x("⬅️ " + L(42), function() {
			u.v(1)
		}), new x(L(329), function() {
			u.v(14)
		})
	], !1)
}

function aTA() {
	var aTV, aTW, tb, aVj = -1;
	this.show = function() {
		aTV.show(), this.resize(), aVj = bm.buffer.data[125].value
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(330), [new x("⬅️ " + L(42), function() {
		aVj !== bm.buffer.data[125].value ? u.z.aVk() : u.aTT(13)
	})]), aTW = new tZ(aTV.yi, ((tb = []).push(function() {
		var xD = new tL,
			aU3 = (xD.tO(L(331)), xD.tP(L(332)), new x(L(333), function() {
				bm.rz.q5(130, 0), u.z.aVk()
			}, 0, 0, 1)),
			uO = new uP(bm.buffer.data[126], 0, function() {
				aU3.button.click()
			});
		return xD.tY(uO), uO.e.placeholder = "a,b,c", uO.e.style.marginTop = "0.5em", xD.tY(new um([aU3.button])), xD
	}()), tb.push(function() {
		var xD = new tL,
			aU3 = new x(L(333), function() {
				bm.rz.q5(130, 1), u.z.aVk()
			}, 0, 0, 1),
			aVp = new uP(bm.buffer.data[129], 1, function() {
				aVp.e.focus()
			}),
			aVq = new uP(bm.buffer.data[128], 1, function() {
				aU3.button.click()
			});
		return xD.tO(L(334)), xD.tY(aVq), aVq.e.style.marginBottom = "0.5em", xD.tO(L(335)), xD.tY(aVp), xD.tY(new um([aU3.button])), xD
	}()), tb.push(function() {
		var xD = new tL;
		return xD.tO(L(336)), bm.buffer.data[125].oW = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xD.tV(new yZ(bm.buffer.data[125])), xD
	}()), tb.push(function() {
		var xD = new tL;
		return xD.tO(L(337)), xD.tY(new ui(bm.buffer.data[127], L(338))), xD
	}()), tb))
}

function aT9() {
	var aTV, aVr, aV4, aVs, aVt, aVu, colors = [0, 0, 0],
		aVv = -1;

	function aVy(aC) {
		var aVz = aVr.fp + aC * (bf.gap + aVu);
		ys.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", ys.fillRect(aVs, aVz, colors[aC] * aVt, aVu), ys.strokeStyle = bE.qT, ys.strokeRect(aVs, aVz, aVt,
			aVu), ys.fillStyle = bE.qT, ys.font = bD.tC.tF(0, .32 * aVu), bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 0), ys.fillText(L(0 === aC ? 341 : 1 === aC ? 342 : 343) + aVw(aC), aVs + bf.gap, aVz + .53 * aVu)
	}

	function aVw(aC, aW0) {
		return aW0 = aW0 || 256, bO.is(Math.floor(aW0 * colors[aC]), 0, aW0 - 1)
	}

	function a6G(mH, mI) {
		return !(mH < aVs || mI < aVr.fp || mH > aVr.fn + aVr.j || mI > aVr.fp + aVr.k)
	}
	this.show = function() {
		var g8 = bm.buffer.data[121].value;
		colors[0] = (g8 >> 12) / 63, colors[1] = (g8 >> 6 & 63) / 63, colors[2] = (63 & g8) / 63, aTV.show(), this.resize()
	}, this.ub = function() {
		bm.rz.q5(121, (aVw(0, 64) << 12) + (aVw(1, 64) << 6) + aVw(2, 64)), aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aVr.resize();
		var eq = i.l,
			yq = aTV.yn(),
			aVx = (aVr.fp = Math.max(aVr.fp, eq * yq.ud + bf.gap), eq * yq.yp - 2 * bf.gap);
		aVr.k = Math.min(aVr.k, aVx), aVr.j = 2 * aVr.k, aVr.fp = eq * yq.ud + .5 * (eq * yq.yp - aVr.k), aVr.fn = .5 * (i.j - aVr.j), aV4 = .25 * aVr.j, aVs = aVr.fn + aV4 + bf.gap, aVt = aVr.j - aV4 - bf.gap, aVu = (aVr.k - 2 * bf.gap) / 3
	}, this.yr = function() {
		var eO, vt, g0;
		aTV.yr(), ys.lineWidth = bf.a3E, eO = aVw(0), vt = aVw(1), g0 = aVw(2), ys.fillStyle = "rgb(" + eO + "," + vt + "," + g0 + ")", ys.fillRect(aVr.fn, aVr.fp, aV4, aVr.k), ys.strokeStyle = bE.qT, ys.strokeRect(aVr.fn, aVr.fp, aV4, aVr.k), ys
			.fillStyle = eO + vt + g0 < 306 && vt < 150 ? bE.qT : bE.qK, bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 1), ys.font = bD.tC.tF(0, .1 * aVr.k), ys.rotate(-Math.PI / 2), ys.fillText(L(340), -aVr.fp - .5 * aVr.k, aVr.fn + .5 * aV4),
			ys.setTransform(1, 0, 0, 1, 0, 0), aVy(0), aVy(1), aVy(2)
	}, this.hu = function(mH, mI) {
		a6G(mH, mI) && (aVv = bO.is(Math.floor((mI - aVr.fp) / (aVu + .75 * bf.gap)), 0, 2), colors[aVv] = bO.is((mH - aVs) / aVt, 0, 1), bi.dy = !0)
	}, this.a5m = function(mH) {
		-1 !== aVv && (colors[aVv] = bO.is((mH - aVs) / aVt, 0, 1), bi.dy = !0)
	}, this.a5p = function(mH, mI, deltaY) {
		a6G(mH, mI) && (mH = bO.is(Math.floor((mI - aVr.fp) / (aVu + .75 * bf.gap)), 0, 2), colors[mH] = bO.is(colors[mH] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.dy = !0)
	}, this.a6A = function() {
		0 <= aVv && (aVv = -1, bi.dy = !0)
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(339), [new x("⬅️ " + L(42), function() {
		u.z.aH0()
	})], !1), aVr = new uD([.5, .25], [.5, .5], 1)
}

function aTH() {
	var aUq, aUr, aUs, p8;

	function aUt() {
		aUv(), u.aTU()[19] = null, u.a5O()
	}

	function aW1() {
		aUv(), u.v(21)
	}

	function aUv() {
		1 === aE.data.gameMode ? aE.a8p.a8v() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.tm.a6v(aUs.z7(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, p8 = [new x("⬅️ " + L(42), aUt)], 1 === aE.data.gameMode && p8.push(new x(L(344), aW1, 1, 1)), aUq = new yd(L(345), p8), aUr = new tZ(aUq.yi, (p8 = [], 0 === aE.data.gameMode ? (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(346), L(324)],
			value: aE.data.colorsType
		}, function(eP) {
			aUv(), aE.data.colorsType = eP, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fd || (aE.data.colorsData = new Uint32Array(aE.fd)), u.v(21)
		})), tb.push(xD)
	}(p8), 1 === aE.data.colorsType && function(tb) {
		var xD = new tL;
		xD.tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.colorsData, 1)), xD.tY(aUs), tb.push(xD)
	}(p8)) : (aE.a8p.a8v(), p8.push(function() {
		var xD = new tL;
		xD.tO(L(327));
		for (var aC = 0; aC < bj.a4b.length; aC++) {
			var iZ = (aC + 1) % bj.a4b.length,
				e = xD.tT((0 == iZ ? "" : "Team ") + bj.a4b[iZ]);
			aC && (e.style.marginTop = "0.5em"), xD.tY(new uP({
				eP: -1,
				value: aE.data.teamPlayerCount[iZ]
			}, 1, 0, function(e) {
				aUq.yj[1].tx(0);
				var playerCount = bO.is(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aW4] = playerCount
			})).e.aW4 = iZ
		}
		return xD
	}()), function(tb) {
		for (var xD = new tL, oW = (xD.tO(L(347)), []), aC = 0; aC < bj.a4b.length; aC++) {
			var iZ = (aC + 1) % bj.a4b.length;
			oW.push(bj.a4b[iZ])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xD.tV(new yZ({
			oW: oW,
			value: (aE.data.colorsData[0] % 16 + bj.a4b.length - 1) % bj.a4b.length
		}, function(eP) {
			var eP = (eP + 1) % bj.a4b.length,
				aW5 = bj.aW6[eP],
				aW5 = (aW5[0] >> 2 << 12) + (aW5[1] >> 2 << 6) + (aW5[2] >> 2);
			aE.data.colorsData[0] = aW5 - (15 & aW5) + eP
		})), tb.push(xD)
	}(p8)), p8))
}

function vY(id, a8A, aW7) {
	var aTV, aW8;

	function aWD() {
		aW8.tc.innerHTML += "<br>" + L(350)
	}

	function aWM() {
		var g0 = 1;
		u.v(4, 1, new w(L(351), L(352), !1, [new x("🔄 Reload", function() {
			g0 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g0 = 0
		}, bE.qq)]))
	}

	function aWC() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dr(bG.aD), bm.rz.q5(110, __fx.passwordReset.getCustomPassword() || bI.f7
			.vZ(bI.f7.va(15))), b1.aU1.aWO()
	}
	this.aW9 = !0, this.aWA = id, this.show = function() {
		aTV.show(), this.resize(), 15 === id ? (b1.z.aWB(id) ? aWC : aWD)() : 16 === id ? b1.z.aWB(id) ? b1.en.eo(2) : aWD() : 17 === id ? b1.z.aWB(id) ? b1.en.eo(3) : aWD() : 18 === id ? (b1.z.close(0, 3253), b1.z.aLb(0, id, 0), aWD()) : 21 ===
			id ? b1.z.aWB(id) ? b1.aWE.aWF(a8A.vo, a8A.vp, a8A.vq) : aWD() : 22 === id ? b1.z.aWB(id) ? b1.aWE.aWG(a8A.vo, a8A.aWH, a8A.aWI) : aWD() : 23 === id ? b1.z.aWB(id) ? b1.aWE.aWJ(a8A.aVJ, a8A.a4y) : aWD() : 24 === id ? b1.z.aWB(id) ? b1
			.aWE.aWK(a8A.aVJ, a8A.vp, a8A.vq) : aWD() : 25 === id ? b1.z.aWB(id) ? b1.aU1.aU7(a8A) : aWD() : 28 === id ? b1.z.aWB(id) ? b1.aWE.aWL(a8A.vo, a8A.aWH, a8A.aWI) : aWD() : 29 === id ? b1.z.aWB(id) ? b1.aU1.aUW(a8A) : aWD() : 30 ===
			id && (b1.z.aWB(id) ? bA.aGv() || aWM() : aWD())
	}, this.aWN = function() {
		15 === id ? aWC() : 16 === id ? b1.en.eo(2) : 17 === id ? b1.en.eo(3) : 18 === id ? u.v(8, this.a5U, new vY(16)) : 21 === id ? b1.aWE.aWF(a8A.vo, a8A.vp, a8A.vq) : 22 === id ? b1.aWE.aWG(a8A.vo, a8A.aWH, a8A.aWI) : 23 === id ? b1.aWE.aWJ(
			a8A.aVJ, a8A.a4y) : 24 === id ? b1.aWE.aWK(a8A.aVJ, a8A.vp, a8A.vq) : 25 === id ? b1.aU1.aU7(a8A) : 28 === id ? b1.aWE.aWL(a8A.vo, a8A.aWH, a8A.aWI) : 29 === id ? b1.aU1.aUW(a8A) : 30 === id ? bA.aGv() || aWM() : 1e3 === id && (
			this.aWA = id = 25, b1.aU1.aU7(a8A))
	}, this.aGz = function(code, c1, data) {
		!c1 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5U) : 17 === code ? (b1.z.close(0, 3252), bm.z.zq(0), bm.buffer.data[117].oW && 0 < bm.buffer.data[117].oW.length && (c1 = bm.z.zs(0)) ? (bm.rz.q5(105, c1.pk), bm.rz.q5(106,
			c1.password), u.v(8, this.a5U, new vY(16))) : (bm.rz.q5(105, ""), u.z.aH0())) : 21 === code ? u.v(10, this.a5U, new aFM(data)) : 23 === code ? u.v(13, this.a5U, new aV1({
			data: data,
			aVJ: a8A.aVJ
		})) : 25 === code ? (u.z.aTB.pk = a8A.pk, bm.zF.nR(a8A.pk), u.v(15, this.a5U)) : 30 === code && (data ? u.v(1) : aWM()))
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aW8.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(348), [new x("⬅️ " + L(42), function() {
		aW7 ? u.v(29) : u.z.aH0()
	})]), aW8 = new ul(aTV.yi, L(349))
}

function aTF() {
	var aUq, aUr, tb;

	function aWR() {
		var h9;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8p.a8v()), h9 = bD.tm.a6p(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h9) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aUt() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aWT(), aE.data.canvas = null, u.v(5, 5)
	}

	function aWT() {
		bC.so.dr(), bm.rz.q5(156, bC.a96.a3i())
	}

	function aWP() {
		aE.data.isReplay = 0, aWT(), aE.a8p.a9J(), ab.aLm(), aE.a8p.a9G(), aE.data.canvas = 2 === aE.data.mapType ? bV.a0n : null, aE.a8t(), aE.a8r = 1
	}

	function aWf() {
		aWR();
		for (var h = [aWW(), aWX(), aWY()], aC = 3; aC < 6; aC++) u.removeChild(aUr.tc, aUr.td[aC].tN), aUr.td[aC] = h[aC - 3], aUr.tc.appendChild(aUr.td[aC].tN);
		aUr.resize()
	}

	function aWW() {
		var aWg, xD = new tL;
		return xD.tO(L(345)), aWg = 0 === aE.data.gameMode ? [L(346), L(324)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xD.tT(aWg), xD.tY(new um([new x(L(356), function() {
			u.v(21)
		}).button])), xD
	}

	function aWX() {
		var xD = new tL,
			h = (xD.tO(L(69)), [L(323) + ": " + aF.lD[aE.data.botDifficultyValue], L(325), L(326), L(324)]);
		return xD.tT(h[aE.data.botDifficultyType]), xD.tY(new um([new x(L(356), function() {
			u.v(25)
		}).button])), xD
	}

	function aWY() {
		var xD = new tL,
			h = (xD.tO("Spawning"), [L(346), L(358), L(324)]);
		return xD.tT(h[aE.data.spawningType]), xD.tY(new um([new x(L(356), function() {
			u.v(24)
		}).button])), xD
	}
	this.show = function() {
		aUq.show(), this.resize(), aUq.yi.scrollTop = u.z.vQ[0]
	}, this.ub = function() {
		u.z.vQ[0] = aUq.yi.scrollTop, aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd("🔧 " + L(353), [new x("⬅️ " + L(42), aUt), new x(L(354), aWP)]), aWR(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a0n : 1 === aE.data.mapType ? aE.data.canvas = bV.aQv(bV.a9H(aE.data), 0).a0n : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aQv(bV.a9H(aE.data), aE.data.mapSeed).a0n)), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL,
			a75 = (xD.tO(L(355)), aE.data.canvas);
		a75.style.width = "100%", xD.tY({
			e: a75
		}), xD.tY(new um([new x(L(356), function() {
			u.v(20)
		}).button])), tb.push(xD)
	}(tb = []), function(tb) {
		var xD = new tL;
		xD.tO(L(327)), xD.tY(new uP({
			eP: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.is(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.tm.a6p(aE.data.teamPlayerCount, 0), aE.a8p.a8v(), bD.tm.a6p(aE.data.teamPlayerCount, 0) !== e) && aWf()
		})), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL;
		xD.tO(L(357)), xD.tV(new yZ({
			oW: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eP) {
			aE.data.gameMode !== eP && (1 === (aE.data.gameMode = eP) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aWf())
		})), tb.push(xD)
	}(tb), tb.push(aWW()), tb.push(aWX()), tb.push(aWY()), function(tb) {
		var xD = new tL,
			h = (xD.tO(L(359)), [L(360), L(361), L(324)]);
		xD.tT(h[aE.data.playerNamesType]), xD.tY(new um([new x(L(356), function() {
			u.v(23)
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL,
			h = (xD.tO(L(320)), [L(322), L(323) + ": " + aE.data.aIncomeValue, L(324)]);
		xD.tT(h[aE.data.aIncomeType]), xD.tY(new um([new x(L(356), function() {
			u.v(22)
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL,
			h = (xD.tO(L(362)), [L(322), L(323) + ": " + aE.data.tIncomeValue, L(324)]);
		xD.tT(h[aE.data.tIncomeType]), xD.tY(new um([new x(L(356), function() {
			u.v(26)
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL,
			h = (xD.tO(L(363)), [L(322), L(323) + ": " + aE.data.iIncomeValue, L(324)]);
		xD.tT(h[aE.data.iIncomeType]), xD.tY(new um([new x(L(356), function() {
			u.v(27)
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL,
			h = (xD.tO(L(364)), [L(322), L(323) + ": " + aE.data.sResourcesValue, L(324)]);
		xD.tT(h[aE.data.sResourcesType]), xD.tY(new um([new x(L(356), function() {
			u.v(28)
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL;
		xD.tO(L(365)), xD.tY(new um([new x(L(366), function() {
			u.y(), aE.a8p.a9K(), u.z.vQ[0] = 0, u.v(19)
		}).button])), xD.tY(new um([new x(L(367), function() {
			bp.aO8()
		}).button])), xD.tY(new um([new x(L(368), function() {
			return bp.aOA(), !0
		}).button])), tb.push(xD)
	}(tb), tb))
}

function aTQ() {
	var aUq, qD = !0;

	function q1(q0, a9O) {
		var tN = document.createElement("div"),
			aWj = document.createElement("span"),
			aWk = document.createElement("span");
		aWj.textContent = aX.aFi(a9O.eg) + ":", aWj.style.color = bE.qi, aWj.style.paddingRight = "0.4em", aWj.style.display = "table-cell", aWj.style.width = "6ch", aWj.style.textAlign = "end", tN.appendChild(aWj), aWk.textContent = a9O.pc, tN
			.appendChild(aWk), tN.style.display = "table", a9O.sD && function(tN, sD) {
				{
					var aNV;
					sD >= 1024 - ak.qB.a31 ? ((aNV = document.createElement("img")).src = ak.a0q.a2p[sD - 1024 + ak.qB.a31].toDataURL(), aNV.style.width = "1.5em", aNV.style.height = "1.5em", aNV.style.verticalAlign = "middle", tN.appendChild(aNV)) :
						((aNV = document.createElement("span")).textContent = ak.qB.a3G(sD), aNV.style.display = "inline-block", aNV.style.fontSize = "1.5em", aNV.style.lineHeight = "1em", aNV.style.verticalAlign = "middle", tN.appendChild(aNV))
				}
			}(tN, a9O.sD), q0.appendChild(tN)
	}

	function aWi() {
		qD && (aUq.yi.scrollTop = aUq.yi.scrollHeight)
	}
	this.clear = function() {
		aUq.yi.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aAH = bu.a9R(), fg = aAH.length, q0 = document.createDocumentFragment(), aC = 0; aC < fg; aC++) q1(q0, aAH[aC]);
		aUq.yi.appendChild(q0), aWi(), aUq.show(), this.resize(), qD = !0, aWi()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUq.yi.style.padding = "0.4em " + bD.tC.tn(bf.tk)
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, this.a2i = function(a9O) {
		var q0 = document.createDocumentFragment();
		q1(q0, a9O), aUq.yi.appendChild(q0), aWi()
	}, (aUq = new yd(L(369), [new x("⬅️ " + L(42), function() {
		u.aTT(1)
	})])).yi.style.overflowY = "auto", aUq.yi.addEventListener("scroll", function() {
		qD = aUq.yi.scrollTop >= aUq.yi.scrollHeight - aUq.yi.clientHeight - 2
	})
}

function aTN() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.iIncomeType && bD.tm.a6v(aUs.z7(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(363), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(322), L(323), L(324)],
			value: aE.data.iIncomeType
		}, function(eP) {
			aUv(), 2 !== eP || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fd), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eP, u.v(27)
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD;
		1 === aE.data.iIncomeType && ((xD = new tL).tO("Value"), xD.tY(new uP({
			eP: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tb.push(xD))
	}(tb), function(tb) {
		var xD;
		2 === aE.data.iIncomeType && ((xD = new tL).tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.iIncomeData, 4)), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aT5() {
	var aWm, aWn, aVr, uO, aWo, v3 = 0;
	this.aMH = new ve, aVr = new uD([.45, .27], [.5, .5], 2 / 3), aWn = [new x("⚔️<br>" + L(370), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aWp(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qw), new x("🗡️<br>" + L(353), function() {
			aWp(1)
		}, bE.rG), new x("🔑<br>" + L(371), function() {
			aWp(2)
		}, bE.rd), new x("☰<br>" + L(372), function() {
			aWp(3)
		}, bE.qg), new x("", function() {
			u.v(12)
		}, bE.qP, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uO = new uP(bm.buffer.data[122]);
	for (var aC = 0; aC < aWn.length; aC++) aWn[aC].button.style.position = "absolute";

	function aWp(eP) {
		a1.a2.setState(10), ac.vx() || ac.aM8(), 0 === eP ? u.z.a99(1) : 1 === eP ? (bC.aOS.a0Z(bm.buffer.data[156].value, 1) || aE.a8p.a9K(), u.v(19)) : 2 === eP ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vX, new vY(16)) : u.z.aWq(u.vX,
			16) : 3 === eP && u.v(1)
	}
	uO.e.style.position = "absolute", uO.e.style.textAlign = "center", uO.e.placeholder = L(373), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aMH.show(), aWn[4].tx(bD.color.a7C(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uO.e);
		for (var aC = 0; aC < aWn.length; aC++) document.body.appendChild(aWn[aC].button);
		1 !== a1.id || a1.eA < 5 || (aWo && bi.eg > aWo + 144e5 ? a1.zZ.setState(14) : aWo = bi.eg)
	}, this.ub = function() {
		this.aMH.ub(), u.removeChild(document.body, uO.e);
		for (var aC = 0; aC < aWn.length; aC++) u.removeChild(document.body, aWn[aC].button)
	}, this.resize = function() {
		this.aMH.resize(), this.aMH.resize(), aVr.resize();
		var gap = .5 * bf.gap,
			wQ = 10 / 99 * .84 * aVr.j,
			aWt = .16 * aVr.k,
			aDd = .19 * aVr.j,
			fn = aVr.fn + aDd,
			wQ = aVr.fp + wQ + 3 * gap,
			j = .5 * (aVr.j - gap) - aDd,
			aDd = aVr.j - 2 * aDd - aWt - gap,
			aDd = (bD.tC.vv(uO.e, fn, wQ, aDd, aWt), bD.tC.vv(aWn[4].button, fn + aDd + gap, wQ, aWt, aWt), v3 = wQ, .5 * (aVr.fp + aVr.k - (wQ += aWt + gap) - gap));
		bD.tC.vv(aWn[0].button, fn, wQ, j, aDd), bD.tC.vv(aWn[1].button, fn + j + gap, wQ, j, aDd), bD.tC.vv(aWn[2].button, fn, wQ + aDd + gap, j, aDd), bD.tC.vv(aWn[3].button, fn + j + gap, wQ + aDd + gap, j, aDd);
		bD.tC.vv(aWn[5].button, fn, wQ + aDd * 2 + gap * 2, j * 2 + gap, aDd / 3);
		bD.tC.vv(aWn[6].button, fn, wQ + aDd * 2.33 + gap * 3, j * 2 + gap, aDd / 3);
		for (var aC = 0; aC < aWn.length; aC++) aWn[aC].button.style.font = bD.tC.tF(0, bD.tC.yK(.065 * aVr.k)), bD.tC.tH(aWn[aC].button, 5);
		uO.e.style.font = bD.tC.tF(0, bD.tC.yK(.08 * aVr.k)), bD.tC.tH(uO.e, 5)
	}, this.yr = function() {
		if (ab.aLq(), aU.yr(), fg = Math.floor((a1.a2.it() ? .018 : .0137) * i.iu), ys.font = bD.tC.tF(0, Math.max(5, fg)), bD.tC.textBaseline(ys, 0), bD.tC.textAlign(ys, 2), ys.fillStyle = bE.qT, ys.fillText(m.eA, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = ys.measureText(text).width, fg = Math.max(5, fg), ys.textAlign = "left", ys.textBaseline = "middle", ys.fillText(text, ys.canvas.width - textLength - fg / 2, 2 * fg), aP.yr(v3), bb.yr(), ac.vx()) {
			ys.imageSmoothingEnabled = !1;
			var text = ac.x7("territorial.io"),
				textLength = .84 * aVr.j / text.width;
			ys.setTransform(textLength, 0, 0, textLength, aVr.fn + .08 * aVr.j, aVr.fp), aWm = aWm || bD.p1.a88(text, bD.p1.a8F, [0, 0, 0]);
			for (var fn = -1; fn <= 1; fn += 2)
				for (var fp = -1; fp <= 1; fp += 2) ys.drawImage(aWm, fn, fp);
			ys.drawImage(text, 0, 0), ys.imageSmoothingEnabled = !0;
			var fg = ac.x7("logo"),
				aWw = .6666 * textLength * text.height / fg.height,
				oI = .5 * i.j,
				oJ = aVr.fp + .5 * textLength * text.height - .5 * aWw * fg.height;
			ys.setTransform(aWw, 0, 0, aWw, oI - .6 * textLength * text.width, oJ), ys.drawImage(fg, 0, 0), ys.setTransform(aWw, 0, 0, aWw, oI + .6 * textLength * text.width - aWw * fg.width, oJ), ys.drawImage(fg, 0, 0), ys.setTransform(1, 0, 0,
				1, 0, 0), ys.imageSmoothingEnabled = !0
		}
	}
}

function aTC() {
	var aTV, aWx, aWy, ye;

	function aWz(aC) {
		u.v(8, u.vX, new vY(21, {
			vo: aC,
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aWx.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aWy = [new x(L(374), function() {
		aWz(1)
	}, 0, 0, 1), new x(L(375), function() {
		aWz(2)
	}, 0, 0, 1), new x(L(376), function() {
		aWz(3)
	}, 0, 0, 1), new x(L(377), function() {
		aWz(0)
	}, 0, 0, 1), new x(L(378), function() {
		aWz(9)
	}, 0, 0, 1), new x(L(379), function() {
		aWz(10)
	}, 0, 0, 1), new x(L(380), function() {
		aWz(11)
	}, 0, 0, 1), new x(L(381), function() {
		aWz(13)
	}, 0, 0, 1)], ye = [new x("⬅️ " + L(42), function() {
		u.a5O()
	})], aTV = new yd(L(382), ye), aWx = new uB(aWy, aTV.yi)
}

function aHN(title, tU, aX0) {
	var aTV, aW8;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aW8.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aX0 = aX0 || [new x("⬅️ " + L(42), function() {
		u.a5O()
	}, bE.rA)], aTV = new yd(title, aX0), aW8 = new ul(aTV.yi, tU), bD.tC.textAlign(aTV.yi.style, 1)
}

function aFM(data) {
	var aTV, aX1;

	function aXA(fg) {
		return fg < 60 ? 1 === fg ? fg + " Second" : fg + " Seconds" : fg < 3600 ? 1 === (fg = Math.floor(fg / 60)) ? fg + " Minute" : fg + " Minutes" : fg < 172800 ? 1 === (fg = Math.floor(fg / 3600)) ? fg + " Hour" : fg + " Hours" : (fg = Math
			.floor(fg / 172800)) + " Days"
	}

	function aX3(kH) {
		var fg = data.data.length;
		if (fg) {
			for (var vp, max = min = parseInt(data.data[0][0]), aC = 1; aC < fg; aC++) var aKD = parseInt(data.data[aC][0]),
				min = Math.min(aKD, min),
				max = Math.max(aKD, max);
			vp = kH < 0 ? min + kH : max + 1, u.v(8, u.a5T().a5U, new vY(21, {
				vo: data.vo,
				vp: vp,
				vq: vp + Math.abs(kH)
			}))
		}
	}
	if (this.show = function() {
			aTV.show(), this.resize()
		}, this.ub = function() {
			aTV.ub()
		}, this.resize = function() {
			aTV.resize(), aX1.resize()
		}, this.a6K = function(eq) {
			2 === eq && aTV.yj[0].tv()
		}, data.aFN) {
		aTV = new yd(L(26), [new x("⬅️ " + L(42), function() {
			u.a5O()
		})]);
		var fj = {
				vH: [],
				vM: [L(395), L(396), L(397) + " ↗"],
				vT: [12, 50, 38]
			},
			a9E = aE.data.a9E;
		if (a9E) {
			for (var fg = a9E.length, vH = fj.vH, a2j = ah.a2j, aC = 0; aC < fg; aC++) vH.push([{
				g8: aC + 1 + ".",
				eh: 0
			}, {
				g8: a2j[aC],
				eh: 0
			}, {
				g8: bI.f7.a3X(a9E[aC], 5),
				eh: 1,
				pk: a9E[aC],
				vW: 0
			}]);
			aX1 = new vG(aTV.yi, fj, {
				vP: 1
			})
		} else aX1 = new vG(aTV.yi, fj)
	} else {
		var fj = data.data.length ? 0 : 1,
			aX0 = [new x("⬅️ " + L(42), function() {
				u.a5O()
			}), new x(L(383), function() {
				aX3(-10)
			}, fj, 0, 1), new x(L(384), function() {
				aX3(10)
			}, fj, 0, 1), new x(L(329), function() {
				u.v(11, 10, new aX4({
					vo: data.vo
				}))
			})],
			vM = [L(385), L(386), L(387), L(388), L(389), L(390), L(391), L(392), L(393), L(394), L(379), L(380), "Audit Log", L(381)];
		aTV = new yd(vM[data.vo], aX0), ! function() {
			var aC, fj = {
					vH: []
				},
				vH = fj.vH,
				aX6 = data.data,
				fg = aX6.length;
			fg && 0 === aX6[0][0] && 0 <= (eP = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.vo]) && (u.z.vr[eP] = aX6[0][1]);
			var oH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.vo],
				a8L = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.vo],
				eP = [
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
			if (fj.vM = eP[data.vo], fj.vT = [
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
				for (aC = 0; aC < fg; aC++) vH.push([{
					g8: aX6[aC][0] + 1 + ".",
					eh: 0
				}, {
					g8: aX6[aC][1],
					eh: 1,
					pk: aX6[aC][4],
					vW: aX6[aC][3]
				}, {
					g8: (oH * aX6[aC][2]).toFixed(a8L),
					eh: 0
				}]);
			else if (12 === data.vo)
				for (aC = 0; aC < fg; aC++) {
					var aX9 = aX6[aC][3];
					vH.push([{
						g8: "" + aX6[aC][0],
						eh: 0
					}, {
						g8: aXA(aX6[aC][4]),
						eh: 0
					}, {
						g8: aX6[aC][5],
						eh: 1,
						pk: aX6[aC][1],
						vW: 0
					}, {
						g8: aX6[aC][6],
						eh: 1,
						pk: aX6[aC][2],
						vW: 0
					}, {
						g8: br.eV(aX9, bI.f7.a3X(aX6[aC][1], 5)),
						eh: 0
					}])
				} else if (1 === data.vo)
					for (aC = 0; aC < fg; aC++) vH.push([{
						g8: aX6[aC][0] + 1 + ".",
						eh: 0
					}, {
						g8: aX6[aC][1],
						eh: 0
					}, {
						g8: (oH * aX6[aC][2]).toFixed(a8L),
						eh: 0
					}, {
						g8: aX6[aC][3],
						eh: 1,
						pk: aX6[aC][5],
						vW: aX6[aC][4]
					}]);
				else if (4 === data.vo || 5 === data.vo || 6 === data.vo || 7 === data.vo || 8 === data.vo)
				for (aC = 0; aC < fg; aC++) {
					var aXB = aX6[aC][5];
					4 === data.vo || 8 === data.vo ? "100%" === (aXB = (aXB % 64 * 100 / (aXB >> 6)).toFixed(0) + "%") && (4 === data.vo ? aXB += " (" + L(415) + ")" : aXB += " (" + L(416) + ")") : 5 === data.vo ? 32768 <= aXB && (aXB = -(aXB -
						32768)) : aXB = (oH * aXB).toFixed(a8L), vH.push([{
						g8: "" + aX6[aC][0],
						eh: 0
					}, {
						g8: aXA(aX6[aC][6]),
						eh: 0
					}, {
						g8: aX6[aC][7],
						eh: 1,
						pk: aX6[aC][1],
						vW: aX6[aC][2]
					}, {
						g8: aX6[aC][8],
						eh: 1,
						pk: aX6[aC][3],
						vW: aX6[aC][4]
					}, {
						g8: "" + aXB,
						eh: 0
					}])
				}
			aX1 = new vG(aTV.yi, fj)
		}()
	}
}

function aX4(a8A) {
	var aTV, aTW, tb;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(417), [new x("⬅️ " + L(42), function() {
		u.aTT(10)
	})]), aTW = new tZ(aTV.yi, ((tb = []).push(function() {
		var aU3, xD = new tL,
			aVp = new uP(bm.buffer.data[132], 1, function() {
				aU3.button.click()
			}),
			aVq = new uP(bm.buffer.data[131], 1, function() {
				aVp.e.focus()
			});
		xD.tO(L(334)), xD.tY(aVq), aVq.e.style.marginBottom = "0.8em", xD.tO(L(335)), xD.tY(aVp);
		return aU3 = new x(L(333), function() {
			vp = Math.floor(aVq.e.value), vq = Math.floor(aVp.e.value);
			var vq, vp = {
				a6n: Math.min(vp, vq),
				aSd: Math.max(vp, vq)
			};
			u.v(8, u.a9Q(10).a5U, new vY(21, {
				vo: a8A.vo,
				vp: vp.a6n,
				vq: vp.aSd
			}))
		}, 0, 0, 1), xD.tY(new um([aU3.button])), xD
	}()), tb.push(function() {
		var aU3, xD = new tL,
			aVp = new uP(bm.buffer.data[134], 1, function() {
				aU3.button.click()
			}),
			aVq = new uP(bm.buffer.data[133], 0, function() {
				aVp.e.focus()
			});
		return xD.tO(1 === a8A.vo ? L(418) : L(419)), xD.tY(aVq), aVq.e.style.marginBottom = "0.8em", xD.tO(L(420)), xD.tY(aVp), aU3 = new x(L(333), function() {
			var aWH = aVq.e.value.slice(0, 20),
				aWI = Math.abs(Math.floor(aVp.e.value));
			u.v(8, u.a9Q(10).a5U, new vY(22, {
				vo: a8A.vo,
				aWH: aWH,
				aWI: aWI
			}))
		}, 0, 0, 1), xD.tY(new um([aU3.button])), xD
	}()), tb.push(function() {
		var aU3, xD = new tL,
			aVp = new uP(bm.buffer.data[152], 1, function() {
				aU3.button.click()
			}),
			aVq = new uP(bm.buffer.data[151], 0, function() {
				aVp.e.focus()
			});
		return xD.tO(L(421)), xD.tY(aVq), aVq.e.style.marginBottom = "0.8em", xD.tO(L(420)), xD.tY(aVp), aU3 = new x(L(333), function() {
			var aWH = aVq.e.value.slice(0, 5),
				aWI = Math.abs(Math.floor(aVp.e.value));
			u.v(8, u.a9Q(10).a5U, new vY(28, {
				vo: a8A.vo,
				aWH: aWH,
				aWI: aWI
			}))
		}, 0, 0, 1), xD.tY(new um([aU3.button])), xD
	}()), tb))
}

function aTP() {
	var aXF, aXG, aXH, aXI, aXJ, aXK, aXL, w0, w1, aXM = new Array(2);

	function aXO(button, aXQ) {
		button = new uX("", button, 1, aXQ);
		return button.uZ.style.right = "0.2em", button.uZ.style.textAlign = "left", button.uZ.style.overflow = "hidden", button.uZ.style.textOverflow = "ellipsis", button.uZ.translate = !1, button
	}

	function aJu() {
		var input, aIy;
		!bq.fD || (aIy = (input = aXF.wA.uO.e).value.trim().slice(0, 255)).length < 1 || (bq.pe.a4I(aIy), input.value = bq.pe.aK4(), aXF.wA.uY(), bM.u5()) || input.focus()
	}

	function aXN(wM) {
		var aXS = bq.z.aHh;
		aXS !== wM && (aXP(aXS, 0), aXP(wM, 1), bq.z.aHh = wM, 0 === aXS && b1.aIO.aIP(1), 0 === wM ? (b1.aIO.aIP(0), by.nF.nR()) : 1 === wM && aXF.wB.nR(), aXF.wL(wM), aXF.resize())
	}

	function aXP(wM, color) {
		w0.p8[wM].tx(color ? bE.qs : bE.rn), w0.p8[wM].button.classList.toggle("fx-selected", !!color)
	}
	this.pe = function(pk) {
		aXN(0);
		var pc = aXF.wA.uO.e.value,
			pk = "@" + pk + " ";
		pc.length && !bD.pg.a7Z(pc, " ") && (pk = " " + pk), aXF.wA.uO.e.value = pc += pk, aXF.wA.uY(), aXF.wA.uO.e.focus()
	}, this.aJT = function() {
		aXF.wB.nR()
	}, this.aIQ = function() {
		var tb = bq.tb,
			tb = tb.aIN() ? tb.xF ? bE.rT : bE.qs : bE.rn;
		w1.p8[1].tx(tb), aXF.wD.nR()
	}, this.aJV = function() {
		var xD = bq.tb.tb[0];
		bV.a8(xD.fM, xD.mapSeed)
	}, this.aJU = function() {
		aXF.wJ(bq.z.wK);
		var x0 = bq.ps.x0,
			aXT = x0.length,
			xD = bq.tb.tb[0],
			aXU = xD ? Math.min(bq.tb.xG(xD), aXT) : 0;
		aXG.uZ.textContent = "" + aXT, aXH.uZ.textContent = "" + aXU, aXI.uZ.textContent = aP.aBZ(0, 2), aXJ.uZ.textContent = aP.aBZ(2, 4), aXK.uZ.textContent = xD ? bq.tb.xJ(xD.wy) + "   " + bV.xH.xI[xD.fM] : "", aXL[0].uZ.textContent = bq.lr
			.aJ3(x0, 0, aXT), aXL[1].uZ.textContent = xD && xD.wy < 7 ? bq.lr.aJ3(x0, 0, aXU) : "", aXM[1].uZ.textContent = "Multiplayer: " + bq.z.aJP[0] + "   Single: " + bq.z.aJP[1] + "   Lobby: " + aXT, this.aIQ()
	}, this.aJY = function() {
		by.nF.nR()
	}, this.show = function() {
		bq.z.aHg++, aXF.show(), this.resize(), bq.message.show()
	}, this.ub = function() {
		aXF.ub(), bq.y4.ub(), bq.xd.ub(), bq.message.ub()
	}, this.resize = function() {
		aXF.resize(), bq.message.resize()
	}, this.a6K = function(eq) {
		2 === eq ? bq.tb.xE ? bq.tb.select(0) : w1.p8[0].tv() : eq < 2 && bq.tb.click(0)
	}, w0 = new up([new x(L(422), function() {
		return aXN(0), 2
	}), new x(L(26), function() {
		return aXN(1), 2
	}), new x(L(423), function() {
		return aXN(2), 2
	})], bE.rn, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) w0.p8[aC].button.style.padding = "0";
	w1 = new up([new x(L(28, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.xy(), b1.z.a5c(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.xy(), b1.z.a5c(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(424), function() {
		return bq.tb.click(0), 2
	})], bE.rn, 0, [25, 75]), aXF = new vz(w0, w1, aJu, bq.y4.aKR, function(eP, xl) {
		bq.fD && bq.tb.click(eP, xl)
	});
	var join = w1.p8[1].button,
		input = (bD.tC.wa(join, null, function() {
			bq.fD && bq.tb.click(0, 1)
		}), aXF.wA.uO.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fD && bq.pe.aK6(event, input) && aXF.wA.uY()
		}), aXG = new uX("0", w0.p8[1].button), aXH = new uX("0", w1.p8[1].button), aXI = aXO(w0.p8[2].button, 0), aXJ = aXO(w0.p8[2].button, 1), (aXK = aXO(w1.p8[1].button, 0)).uZ.style.right = "3em", (aXL = [new uX("", w0.p8[1].button, 1, 1),
			new uX("", w1.p8[1].button, 1, 1)
		])[0].uZ.style.bottom = "0em", aXL[1].uZ.style.bottom = "0em", aXL[0].uZ.translate = !1, aXL[1].uZ.translate = !1, aXP(bq.z.aHh, 1), (aXM = [new uX(L(327), aXF.wN(), 1, 0), new uX("", aXF.wN(), 1, 1)])[0].uZ.style.fontSize = "0.4em", aXM[1]
		.uZ.style.fontSize = "0.4em"
}

function aT6() {
	var aTV, aTW, tb;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(425), [new x("⬅️ " + L(42), function() {
		u.v(7, u.a9Q(7).a5U)
	}), new x(L(226), function() {
		bm.rz.q5(105, bJ.f7.a0P(aTW.td[0].tM[0].e.value, 5)), bm.rz.q5(106, bJ.f7.a0P(aTW.td[1].tM[0].e.value, 15)), u.v(8, u.a9Q(7).a5U, new vY(18))
	})]), aTW = new tZ(aTV.yi, ((tb = []).push(function() {
		var xD = new tL;
		return xD.tO(L(204)), xD.tY(new uP({
			value: "",
			eP: -1
		})), xD
	}()), tb.push(function() {
		var xD = new tL,
			aU8 = (xD.tO(L(207)), new uP({
				value: "",
				eP: -1
			}));
		return aU8.e.type = "password", xD.tY(aU8), xD.tY(new um([new x(L(208), function(e) {
			return e.textContent === L(208) ? (e.textContent = L(209), aU8.e.type = "text") : (e.textContent = L(208), aU8.e.type = "password"), !0
		}).button])), xD
	}()), tb.push(function() {
		var xD = new tL;
		return xD.tO(L(211)), xD.tP(L(426)), xD.tP(L(427)), xD.tP(L(428)), xD
	}()), tb))
}

function aTD() {
	var aTV, aWx, aWy, ye;

	function aWz(aC) {
		u.v(8, u.vX, new vY(21, {
			vo: aC,
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aWx.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aWy = [new x(L(390), function() {
		aWz(5)
	}, 0, 0, 1), new x(L(391), function() {
		aWz(6)
	}, 0, 0, 1), new x(L(392), function() {
		aWz(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aWz(12)
	}, 0, 0, 1)], ye = [new x("⬅️ " + L(42), function() {
		u.a5O()
	})], aTV = new yd(L(429), ye), aWx = new uB(aWy, aTV.yi)
}

function aSx() {
	this.buffer = {}, this.vr = new Array(8), this.aTB = null, this.aT8 = null, this.vE = 0, this.vQ = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a99 = function(aXX) {
		aXX && (aa.f9 = aXX), u.y(), aa.dr()
	}, __fx.customLobby.setJoinFunction(() => this.a99(1)), this.aH0 = function() {
		u.v(0 === ab.a5P() ? 5 : 0)
	}, this.aVk = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5T().a5U, new vY(24, {
			aVJ: bm.buffer.data[125].value,
			vp: bm.buffer.data[128].value,
			vq: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5T().a5U, new vY(23, {
				aVJ: bm.buffer.data[125].value,
				a4y: h
			}))
		}
	}, this.aWq = function(a5U, target) {
		u.v(4, a5U, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aTu(
				"/privacy"), !1, [new x("⬅️ " + L(42), function() {
				u.v(a5U)
			}), new x("✅ Accept", function() {
				bm.rz.q5(140, 1), 0 === target ? u.v(2, a5U) : u.v(8, a5U, new vY(target))
			})]))
	}, this.aXY = function() {
		for (var aC = 0; aC < 8; aC++) this.vr[aC] = bJ.a0G.a0K(bK.sc(5));
		this.vr[1] = "[" + this.vr[1] + "]", 5 === u.vX && (u.a5T().aMH.q5(this.vr), u.a5T().resize())
	}, this.aU4 = function(g8, rx, aAz) {
		g8 = bD.h2.a87(g8, 1, 1e6);
		rx = L(430, [rx]);
		return (rx += "<br>") + L(431, [__fx.utils.escapeHtml("" + aAz)]) + "<br>" + L(432, [g8 + "–" + (g8 + 2)]) + "<br>" + L(433, [g8])
	}
}

function aTG() {
	var aUq, aUr, aXZ, tb;

	function aUt() {
		b7.xy(), u.aTU()[19] = null, u.a5O()
	}

	function aXg() {
		aXj(), aXh()
	}

	function aXj() {
		aXZ.tN.lastChild && u.removeChild(aXZ.tN, aXZ.tN.lastChild)
	}

	function aXh() {
		var aXk = bV.a9H(aE.data);
		aE.data.canvas = bV.aQv(aXk, aE.data.mapSeed).a0n, aXi()
	}

	function aXi() {
		var a75 = aE.data.canvas;
		a75.style.width = "100%", aXZ.tN.appendChild(a75)
	}
	this.aNU = function(a75) {
		aE.data.canvas && aXj(), aE.data.canvas = a75, aXi()
	}, this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(355), [new x("⬅️ " + L(42), aUt)]), 2 === aE.data.mapType && b7.dr(), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(434), L(435), L(436)],
			value: aE.data.mapType
		}, function(eP) {
			2 === (aE.data.mapType = eP) ? (b7.dr(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.xy()), u.v(20)
		})), 2 <= aE.data.mapType && (xD.tY(new ux), xD.tY(new ui({
			value: aE.data.passableWater
		}, L(437), function(value) {
			aE.data.passableWater = value
		})), xD.tY(new ui({
			value: aE.data.passableMountains
		}, L(438), function(value) {
			aE.data.passableMountains = value
		})));
		tb.push(xD)
	}(tb = []), function(tb) {
		if (0 === aE.data.mapType) {
			for (var xD = new tL, oW = (xD.tO(L(355)), []), aC = 0; aC < bV.xH.aRr.length; aC++) oW.push(bV.xH.a0e[bV.xH.aRr[aC]].name);
			xD.tV(new yZ({
				oW: oW,
				value: aE.data.mapProceduralIndex
			}, function(eP) {
				aE.data.mapProceduralIndex = eP, aXg()
			})), tb.push(xD)
		}
	}(tb), function(tb) {
		if (1 === aE.data.mapType) {
			for (var xD = new tL, oW = (xD.tO(L(355)), []), aC = 0; aC < bV.xH.aRs.length; aC++) oW.push(bV.xH.a0e[bV.xH.aRs[aC]].name);
			xD.tV(new yZ({
				oW: oW,
				value: aE.data.mapRealisticIndex
			}, function(eP) {
				aE.data.mapRealisticIndex = eP, aXg()
			})), tb.push(xD)
		}
	}(tb), function(tb) {
		var xD;
		2 === aE.data.mapType && ((xD = new tL).tO(L(439)), xD.tY(new uP(bm.buffer.data[162], 1)), xD.tO(L(440), "0.8em"), xD.tY(new um([new x(L(441), function() {
			return b7.aNN(), !0
		}).button])), tb.push(xD))
	}(tb), function(tb) {
		var xD, uO;
		2 === aE.data.mapType && ((xD = new tL).tO(L(442)), uO = new uP({
			eP: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xD.tY(uO), tb.push(xD))
	}(tb), function(tb) {
		var xD, uO, aU3;
		0 === aE.data.mapType && ((xD = new tL).tO("Seed"), uO = new uP({
			eP: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aXg())
		}), aU3 = new x(L(346), function(e) {
			var aQq = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aQq) return uO.e.value = aE.data.mapSeed = aQq, aXg(), !0
		}), xD.tY(uO), xD.tY(new um([aU3.button])), tb.push(xD))
	}(tb), function(tb) {
		(aXZ = new tL).tO(L(443)), 2 !== aE.data.mapType ? aXh() : aE.data.canvas && aXi();
		tb.push(aXZ)
	}(tb), tb))
}

function w(title, tU, aXl, aX0) {
	var aTV, aW8;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aW8.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aX0 = aX0 || [new x("⬅️ " + L(42), function() {
		u.a5O()
	})], aTV = new yd(title, aX0), aW8 = new ul(aTV.yi, tU), aXl && bD.tC.textAlign(aTV.yi.style, 1)
}

function aTJ() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 === aE.data.playerNamesType && 1 === bD.tm.a6j(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.playerNamesType && bD.tm.a6x(aUs.z7(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(359), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(360), L(361), L(324)],
			value: aE.data.playerNamesType
		}, function(eP) {
			aUv(), aE.data.playerNamesType = eP, u.v(23)
		})), xD.tY(new ux), xD.tY(new ui({
			value: aE.data.selectableName
		}, L(444), function(value) {
			aE.data.selectableName = value
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD;
		2 === aE.data.playerNamesType && ((xD = new tL).tO("Data"), aUs = new z0(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fd || (aE.data.playerNamesData = new Array(aE.fd), aE.data.playerNamesData
			.fill("")), aUs.z6(bD.pg.a8Y(aE.data.playerNamesData, 1, '"')), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aTR() {
	var aUq, aUr, tb;

	function aXr() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fz = 0; fz < 3; fz++) fz < h.length && (colors[aC][fz] = Number(h[fz]))
		}
		return colors
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(445), [new x("⬅️ " + L(42), function() {
		u.a5O()
	})]), aUr = new tZ(aUq.yi, ((tb = []).push(function() {
		var xD = new tL;
		return xD.tO(L(446)), xD.tT(b1.z.aTu("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xD.tT("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xD
	}()), tb.push(function() {
		var xD = new tL,
			es = (xD.tO(L(447)), bm.buffer.data[174].value),
			tQ = xD.tP(es.length + " / 180"),
			aUZ = (tQ.style.textAlign = "center", new z0(0, 1, function(e) {
				var e = e.target.value,
					h9 = e.length;
				tQ.textContent = h9 + " / 180", h9 <= 180 && bm.rz.q5(174, e)
			}));
		return aUZ.e.rows = 6, aUZ.e.style.fontSize = "1em", aUZ.z6(es), xD.tY(aUZ), xD
	}()), tb.push(function() {
		var xD = new tL;
		xD.tO(L(345));
		for (var aC = 0; aC < 11; aC++) {
			var j3 = xD.tY(new uP(bm.buffer.data[163 + aC]));
			aC && (j3.e.style.marginTop = "0.6em")
		}
		return xD.tY(new um([new x(L(448), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zM(aC, data[aC].zP);
			u.a5O(), u.aTU()[31] = null, u.v(31)
		}).button])), xD
	}()), tb.push(function() {
		var xD = new tL;
		return xD.tO("Targeting"), xD.tT(L(449)), xD.tY(new uP(bm.buffer.data[175], 0, 0)), xD
	}()), tb.push(function() {
		var xD = new tL;
		return xD.tO(L(443)), xD.tY(new um([new x(L(208), function() {
			(new er).show(bm.buffer.data[174].value, aXr(), -1)
		}).button])), xD
	}()), tb.push(function() {
		var xD = new tL,
			aXs = (xD.tO(L(450)), xD.tT(L(451)), new uP(bm.buffer.data[176], 1, 0)),
			aXt = (xD.tY(aXs), new x(L(452), function(e) {
				return aXu.button.textContent === L(196) && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aXv(bm.buffer.data[176].value, aXr(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aU0 = function() {
				aXu.button.textContent = L(195), aXt.tx(1), aXt.button.style.color = bE.qT
			},
			aXu = new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aXt.tx(0), aXt.button.style.color = bE.rY) : aU0(), !0
			});
		return xD.tY(new um([aXu.button, aXt.button])), xD
	}()), tb))
}

function aTS() {
	var aTV, aTW, tb;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd("🔒 " + L(453), [new x("⬅️ " + L(42), function() {
		u.a5O()
	})]), aTW = new tZ(aTV.yi, ((tb = []).push(function() {
		var xD = new tL,
			uO = (xD.tT(b1.z.aTu("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xD.tO(L(204)), new uP({
				value: "",
				eP: -1
			})),
			aUV = (xD.tY(uO), xD.tO(L(279), "0.8em"), new uP({
				value: "",
				eP: -1
			}, 0, 0)),
			aTz = (aUV.e.type = "email", aUV.e.autocomplete = "email", aUV.e.name = "email", aUV.e.inputMode = "email", aUV.e.spellcheck = !1, xD.tY(aUV), new x(L(454), function(e) {
				return bD.tC.yW(e), b1.aU1.aUW({
					action: 4,
					pc: uO.e.value.trim() + aUV.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xD.tY(new um([aTz.button])), xD
	}()), tb))
}

function aT4() {
	var aUq, z4;

	function aXw() {
		u.y();
		var pc = bC.aY0(z4.z7());
		(aE.a4E && 0 < pc.length && pc === bC.so.a95 || bC.aOS.a0Z(pc)) && bC.aY1()
	}
	this.show = function(aXx) {
		this.aXy(aXx), aUq.show(), this.resize()
	}, this.aXy = function(aXx) {
		0 === aE.a4E ? aXx ? z4.z6(aXx) : aE.a8s.length && z4.z6(aE.a8s) : (aE.hp || (bC.so.a95 = bC.a96.a3i()), z4.z6(bC.aXz(bC.so.a95)))
	}, this.z6 = function(pc) {
		z4.z6(pc)
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), z4.resize()
	}, this.a6K = function(eq) {
		2 === eq ? aUq.yj[0].tv() : aXw()
	}, aUq = new yd(L(455), [new x("⬅️ " + L(42), function() {
		u.aTT(1)
	}), new x(L(456), function() {
		z4.z8()
	}), new x(L(457), function() {
		z4.z9()
	}), new x(L(458), function() {
		z4.clear()
	}), new x(L(459), function() {
		aXw()
	})]), z4 = new z0(L(460)), aUq.yi.appendChild(z4.e)
}

function aT3() {
	var aTV, aTW, tb, xD;

	function aY2() {
		bA.aGm !== bm.buffer.data[12].value ? (bA.dr(), u.v(8, 1, new vY(30))) : u.v(1)
	}
	this.show = function() {
			aTV.show(), this.resize()
		}, this.ub = function() {
			aTV.ub()
		}, this.resize = function() {
			aTV.resize(), aTW.resize()
		}, this.a6K = function(eq) {
			2 === eq && aTV.yj[0].tv()
		}, aTV = new yd(L(461), [new x("⬅️ " + L(42), aY2), new x(L(462), function() {
			u.y(), bm.rz.zx(), u.v(2)
		})]), tb = [], (xD = new tL).tO(L(463)), xD.tP(L(464)), tb.push(xD),
		function(tb) {
			var xD = new tL,
				h = (xD.tO(L(449)), bA.data.aH3());
			xD.tV(new yZ({
				oW: h,
				value: bA.data.aH7(h)
			}, function(eP) {
				return bm.rz.q5(12, h[eP].split(":")[0]), !0
			})), tb.push(xD)
		}(tb),
		function(tb) {
			var xD = new tL,
				aY5 = (xD.tO(L(489)), []);
			xD.tY(new um([new x(L(448), function(e) {
				ba.aY6();
				for (var aC = 0; aC < aY5.length; aC++) aY5[aC].e.value = ba.aGE[aC];
				return bD.tC.yW(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aY7.length; aC++) {
				xD.tP(ba.aY7[aC]);
				for (var fz = 0; fz < 2; fz++) {
					var eP = 2 * aC + fz,
						uO = new uP({
							value: ba.aGE[eP],
							eP: -1
						});
					uO.e.aY8 = eP, aY5.push(uO), uO.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aY9(e.target.aY8, code)
					}), fz && (uO.e.style.marginLeft = "4%"), uO.e.style.width = "48%", xD.tY(uO)
				}
			}
			tb.push(xD)
		}(tb), (xD = new tL).tO(L(465)), bm.buffer.data[1].oW = [L(466), L(467), L(468), L(469)], xD.tV(new yZ(bm.buffer.data[1])), tb.push(xD), (xD = new tL).tO(L(470)), bm.buffer.data[9].oW = [L(467), L(471), L(472)], xD.tV(new yZ(bm.buffer.data[
			9])), tb.push(xD), (xD = new tL).tO(L(473)), bm.buffer.data[11].oW = [L(474), L(9), L(475)], xD.tV(new yZ(bm.buffer.data[11])), tb.push(xD), (xD = new tL).tO(L(476)), xD.tY(new ui(bm.buffer.data[2])), tb.push(xD), (xD = new tL).tO(L(
		477)), xD.tY(new ui(bm.buffer.data[7])), tb.push(xD), (xD = new tL).tO(L(478)), xD.tY(new ui(bm.buffer.data[8])), tb.push(xD), (xD = new tL).tO(L(479)), xD.tY(new uP(bm.buffer.data[5])), tb.push(xD), (xD = new tL).tO(L(480)), xD.tY(new ui(bm
			.buffer.data[13], L(481))), xD.tY(new ui(bm.buffer.data[14], L(482))), tb.push(xD), (xD = new tL).tO(L(483)), xD.tV(new yZ({
			oW: [L(484), L(485), L(486)],
			value: aa.aLW
		}, function(aC) {
			aa.aLW = aC
		})), tb.push(xD), (xD = new tL).tO(L(487)), xD.tY(new ui(bm.buffer.data[15])), xD.tP(L(488)), xD.tY(new uP(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.is(Math.floor(e.target.value), 0, 16)
		})), tb.push(xD), aTW = new tZ(aTV.yi, tb)
}

function aTK() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 !== aE.data.spawningType || bD.tm.a6j(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.spawningType && bD.tm.a6v(aUs.z7(), aE.data.spawningData, bV.aNX - 1)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(490), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL,
			oW = (xD.tO(L(321)), [L(346), L(358), L(324)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oW.splice(1, 1), 0 < value) && (value = 1);
		xD.tV(new yZ({
			oW: oW,
			value: value
		}, function(eP) {
			aUv(), aE.data.spawningType = eP, 0 === aE.data.gameMode && 1 === eP && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fd)), u.v(24)
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD = new tL;
		xD.tO("My Spawn"), xD.tY(new ui({
			value: aE.data.selectableSpawn
		}, L(491), function(value) {
			aE.data.selectableSpawn = value
		})), tb.push(xD)
	}(tb), function(tb) {
		var xD = new tL,
			aYB = (xD.tO("Seed"), new uP({
				eP: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xD.tY(aYB), xD.tY(new um([new x(L(346), function() {
			aYB.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tb.push(xD)
	}(tb), function(tb) {
		var xD;
		2 === aE.data.spawningType && ((xD = new tL).tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.spawningData, 2)), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aT2() {
	var aTV, aWx, aWy, ye;

	function aYC(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vY(16)) : u.v(2) : u.z.aWq(u.vX, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aTV.show(), this.resize(), this.el()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aWx.resize()
	}, this.el = function() {
		8 === ab.a5P() && (bg.aYH() ? aWy[2].tw === bE.qf && aWy[2].tx(0) : aWy[2].tw !== bE.qf && aWy[2].tx(bE.qf), aE.hp || aE.hq || !aN.t5(aE.fQ) ? aWy[1].tw !== bE.qf && aWy[1].tx(bE.qf) : aWy[1].tw === bE.qf && aWy[1].tx(0), aE.hp || aE
			.hq || !ax.iW(aE.fQ) ? aWy[0].tw !== bE.qf && aWy[0].tx(bE.qf) : aWy[0].tw === bE.qf && aWy[0].tx(0))
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aWy = [new x(L(492), function() {
		aYC(0)
	}), new x(L(382), function() {
		u.v(16)
	}), new x(L(429), function() {
		u.v(17)
	}), new x(L(493), function() {
		u.z.aVk()
	}, 0, 0, 1), new x(L(455), function() {
		u.v(3, 1)
	}), new x(L(494), function() {
		u.v(18)
	}), new x(L(445), function() {
		u.v(31)
	}), new x(L(495), function() {
		u.z.a99(2)
	}), new x(L(461), function() {
		aYC(1)
	}), new x("🔒 " + L(453), function() {
		u.v(32)
	}), new x(L(496), function() {
		var a7V, qJ;
		(a7V = []).push(["Wiki", (qJ = "https://territorial.io/") + "wiki/gold"]), a7V.push(["Team Games", qJ + "log/team"]), a7V.push(["Battle Royale Games", qJ + "log/br"]), a7V.push(["1v1 Games", qJ + "log/1v1"]), a7V.push([
			"Zombie Games", qJ + "log/zombies"
		]), a7V.push(["Transactions", qJ + "log/transactions"]), a7V.push(["Changelog", qJ + "changelog"]), 2 !== a1.id && a7V.push(["Android App", bN.aHK]), 1 !== a1.id && a7V.push(["iOS App", bN.a5L]), 0 === a1.id && a7V.push([
			"Patreon", bN.aUo
		]), a7V.push(["Terms", bN.aYI]), a7V.push(["Privacy", bN.aYJ]), u.v(4, 1, new w(L(496), bD.tC.a7U(a7V), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		})]))
	}), new x(L(497), function() {
		u.v(4, 1, new w(L(497), m.eA + "<br>" + b1.z.aTu("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(42),
				function() {
					u.v(1)
				})]))
	}), new x(L(498), function() {
		u.v(4, 1, new w(L(498), L(505) + "<br>" + L(506), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		}), new x(L(507), function() {
			a1.a2.a5F(), u.v(1)
		})]))
	}), new x("👁️ " + L(499), function() {
		a1.a2.a5G(), u.v(4, 1, new w(L(508), L(509) + " " + b1.z.aTu("/privacy"), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		})]))
	})], ye = [new x("⬅️ " + L(42), function() {
		u.z.aH0()
	})], 8 === ab.a5P() && (aWy.unshift(new x(L(369), function() {
		u.v(30)
	})), aWy.unshift(new x(L(502), function() {
		bg.aYH() && (u.y(), bh.a6N(), bi.dy = !0)
	}, 0, 1)), aWy.unshift(new x(L(503), function() {
		aE.hp || aE.hq || !aN.t5(aE.fQ) || (bB.i7.sI(), u.y(), aN.hr && aN.a6N())
	}, 0, 1)), aWy.unshift(new x(L(504), function() {
		aE.hp || aE.hq || !ax.iW(aE.fQ) || (bY.a9m(2), bB.i7.iS(), u.y(), aN.hr && aN.a6N())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eA && aWy.push(new x(L(500), function() {
		a1.a2.a5H()
	})), aTV = new yd(L(501), ye), aWx = new uB(aWy, aTV.yi)
}

function aTO() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.sResourcesType && bD.tm.a6v(aUs.z7(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(364), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(322), L(323), L(324)],
			value: aE.data.sResourcesType
		}, function(eP) {
			aUv(), 2 !== eP || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fd)), aE.data.sResourcesType = eP, u.v(28)
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD;
		1 === aE.data.sResourcesType && ((xD = new tL).tO("Value"), xD.tY(new uP({
			eP: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tb.push(xD))
	}(tb), function(tb) {
		var xD;
		2 === aE.data.sResourcesType && ((xD = new tL).tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.sResourcesData, 2)), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aTM() {
	var aUq, aUr, aUs, tb;

	function aUt() {
		aUv(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aTU()[19] = null, u.a5O()
	}

	function aUv() {
		2 === aE.data.tIncomeType && bD.tm.a6v(aUs.z7(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aUq.show(), this.resize()
	}, this.ub = function() {
		aUq.ub()
	}, this.resize = function() {
		aUq.resize(), aUr.resize()
	}, this.a6K = function(eq) {
		2 === eq && aUq.yj[0].tv()
	}, aUq = new yd(L(362), [new x("⬅️ " + L(42), aUt)]), aUr = new tZ(aUq.yi, (function(tb) {
		var xD = new tL;
		xD.tO(L(321)), xD.tV(new yZ({
			oW: [L(322), L(323), L(324)],
			value: aE.data.tIncomeType
		}, function(eP) {
			aUv(), 2 !== eP || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fd), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eP, u.v(26)
		})), tb.push(xD)
	}(tb = []), function(tb) {
		var xD;
		1 === aE.data.tIncomeType && ((xD = new tL).tO("Value"), xD.tY(new uP({
			eP: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tb.push(xD))
	}(tb), function(tb) {
		var xD;
		2 === aE.data.tIncomeType && ((xD = new tL).tO("Data"), (aUs = new z0(0, 1, 0, 1)).z6(bD.pg.a8Y(aE.data.tIncomeData, 4)), xD.tY(aUs), tb.push(xD))
	}(tb), tb))
}

function aTE() {
	var aTV, aTW, tb;
	this.show = function() {
		aTV.show(), this.resize()
	}, this.ub = function() {
		aTV.ub()
	}, this.resize = function() {
		aTV.resize(), aTW.resize()
	}, this.a6K = function(eq) {
		2 === eq && aTV.yj[0].tv()
	}, aTV = new yd(L(494), [new x("⬅️ " + L(42), function() {
		u.a5O()
	})]), aTW = new tZ(aTV.yi, ((tb = []).push(function() {
		function aU0() {
			aXu.button.textContent = L(195), aYM.e.readOnly = !1, aYN.e.readOnly = !1, aTz.tx(1), aTz.button.style.color = bE.qT
		}
		var xD = new tL,
			aYL = (xD.tT(b1.z.aTu("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xD.tO(L(510)), new uP({
				value: bm.buffer.data[105].value,
				eP: -1
			})),
			aYM = (aYL.e.readOnly = !0, xD.tY(aYL), xD.tO(L(407), "0.8em"), new uP(bm.buffer.data[148], 0, void 0, function(e) {
				aTy(bm.buffer.data[149].value, e.target.value)
			})),
			aYN = (xD.tY(aYM), xD.tO(L(411), "0.8em"), new uP(bm.buffer.data[149], 1, void 0, function(e) {
				aTy(e.target.value, bm.buffer.data[148].value)
			})),
			aXu = (xD.tY(aYN), new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aYM.e.readOnly = !0, aYN.e.readOnly = !0, aTz.tx(0), aTz.button.style.color = bE.rY, bm.rz.q5(149, aYN.e.value), aTy(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aU0(), !0
			})),
			aTz = (xD.tY(new um([aXu.button])), new x(L(14), function(e) {
				return aYM.e.readOnly && b1.z.em(0) && (bD.tC.yW(e), aU0(), b1.aU1.aU2({
					action: 0,
					pk: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			tQ = xD.tP(),
			aTy = (xD.tP(L(511)).style.fontWeight = "bold", function(g8, pc) {
				tQ.innerHTML = u.z.aU4(g8, bm.buffer.data[105].value, pc)
			});
		return xD.tY(new um([aTz.button])), aTy(bm.buffer.data[149].value, bm.buffer.data[148].value), xD
	}()), tb))
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
	var aDt, aYP, aYQ, aYR, aYO = !1;

	function aYS() {
		aYO = !0, aDt = -1, aYP = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aYP[aC] = !1;
		var a1d = Math.floor(1 + .02 * i.min);
		aYQ = new Array(4), (aYR = new Array(4))[1] = aYR[3] = aYQ[0] = aYQ[2] = 0, aYR[0] = aYQ[3] = -a1d, aYQ[1] = aYR[2] = a1d
	}

	function aYT() {
		if (-1 !== aDt)
			if (0 !== aE.a4E && aI.oN()) {
				for (var aYU = !1, aC = 3; 0 <= aC; aC--) aYP[aC] && (aYU = !0, jL += aYQ[aC], jM += aYR[aC], ag.a5m(aYQ[aC], aYR[aC]), aT.aDZ());
				aYU ? bi.dy = !0 : at.oD()
			} else at.oD()
	}
	this.a6I = function(eP) {
		0 !== aE.a4E && aI.oN() && (aYO || aYS(), aYP[eP] = !0, -1 === aDt) && (aDt = setInterval(aYT, 20), aYT())
	}, this.a6L = function(eP) {
		if (0 !== aE.a4E && (aYO || aYS(), aYP[eP] = !1, -1 !== aDt)) {
			for (var aYU = !1, aC = 3; 0 <= aC; aC--) aYU = aYU || aYP[aC];
			aYU || this.oD()
		}
	}, this.oD = function() {
		if (aYO && -1 !== aDt) {
			for (var aC = 3; 0 <= aC; aC--) aYP[aC] = !1;
			clearInterval(aDt), aDt = -1
		}
	}
}

function cq() {
	this.z = new aYV, this.nM = new aYW, this.rx = new aYX, this.aIO = new aYY, this.en = new aYZ, this.aU1 = new aYa, this.sb = new aYb, this.aWE = new aYc, this.aAz = new aYd, this.aYe = new aYf, this.aYg = new aYh, this.aYi = new aYj, this.aYk =
		new aYl, this.dr = function() {
			this.z.dr()
		}
}

function aYV() {
	var aYn, aYo;
	this.aLa = 4, this.aYm = null, this.a5X = 0, this.fE = 0;

	function aYx() {
		return 0 === aa.aLW ? m.eC ? 1 : 0 : aa.aLW - 1
	}

	function aZ0(oX, a5U, aYz) {
		aYo[oX].aYO = !0, aYt(oX), aYn[oX] = new aZ3, aYn[oX].dr(oX, a5U, aYz)
	}

	function aZ1(aC) {
		return aYo[aC].aYO && aYn[aC].aZ1()
	}

	function aYt(oX) {
		aYo[oX].eg = bi.eg, aYo[oX].aYq = !1
	}
	this.dr = function() {
		this.aYm = new Array(this.aLa), this.aYm[0] = "territorial.io", this.aYm[1] = "1.territorial.io", this.aYm[2] = "4.territorial.io", this.aYm[3] = "5.territorial.io", aYn = new Array(this.aLa), aYo = new Array(this.aLa);
		for (var aC = this.aLa - 1; 0 <= aC; aC--) aYo[aC] = {
			aYO: !1,
			eg: 0,
			aYq: !1
		};
		this.aLb(0, 0, 0)
	}, this.aYr = function(aC) {
		return aYn[aC]
	}, this.el = function() {
		for (var aC = this.aLa - 1; 0 <= aC; aC--) this.em(aC) && bi.eg > aYo[aC].eg + 15e3 && (b1.rx.aYs(aC, aYo[aC].aYq), aYt(aC));
		!this.em(0) && bi.eg > aYo[0].eg + 8e3 && (aYo[0].eg = bi.eg, this.aLb(0, 0, 0))
	}, this.aWB = function(id) {
		return this.aLb(0, id, 0) && this.aYu(0)
	}, this.aYv = function(aYw) {
		return aYw ? aa.aLX : aYx()
	}, this.a4g = function() {
		return aYx() ? "game.territorial.io" : "territorial.io"
	}, this.aTu = function(aYy) {
		aYy = this.a4g() + aYy;
		return "<a href='https://" + aYy + "' target='_blank'>" + aYy + "</a>"
	}, this.aLb = function(oX, a5U, aYw) {
		aYw = this.aYv(aYw);
		if (aYo[oX].aYO) {
			if (aYn[oX].aZ1()) return aYn[oX].aZ2(a5U), aYn[oX].em();
			aYn[oX].ub()
		}
		return aZ0(oX, a5U, aYw), !1
	}, this.aZ4 = function(oX, a5U) {
		console.log("Connection to Server " + oX), b1.en.aZ5(oX)
	}, this.aYu = function(aC) {
		return this.em(aC) && aYn[aC].aYu()
	}, this.aZ6 = function(aC) {
		aYn[aC].aZ6()
	}, this.em = function(aC) {
		return aYo[aC].aYO && aYn[aC].em()
	}, this.send = function(oX, aD) {
		0 !== oX && aYt(oX), aYn[oX].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a63 = function(oX) {
		8 === ab.a5P() && (aYo[oX].aYq = !0, b1.nM.aZ7 = !0)
	}, this.close = function(oX, aZ8) {
		aZ1(oX) && aYn[oX].close(aZ8)
	}, this.aZ9 = function(oX, aZ8) {
		p.a5b(aZ8), aZ1(oX) && aYn[oX].close(aZ8)
	}, this.a5c = function(aZ8) {
		for (var aC = this.aLa - 1; 0 <= aC; aC--) this.close(aC, aZ8)
	}, this.aZA = function(oX, aZ8) {
		for (var aC = this.aLa - 1; 0 <= aC; aC--) aC !== oX && this.close(aC, aZ8)
	}, this.a97 = function() {
		0 === this.a5X && (aE.lM || aE.hp) || this.close(this.a5X, 3246)
	}, this.aZB = function(oX, e) {
		aYn[oX].ub(), p.a5M(oX, e.code)
	}
}

function aYW() {
	this.aZ7 = !1, this.el = function() {
		bi.kz() % 250 != 249 || aE.hp || aE.hq || (b1.en.aZC(+(this.aZ7 && ah.ne[aE.fQ]), am.lY + bQ.z.ms), this.aZ7 = !1)
	}
}

function aYd() {
	this.aZE = function(oX, aD) {
		bK.dr(aD), 0 === bK.size ? b1.z.aZ9(oX, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sc(1) ? function(oX) {
			var aZI = bK.sc(6);
			0 === aZI ? function(oX) {
					if (0 === oX && 8 !== ab.a5P()) {
						u.z.aXY();
						for (var aZa = bK.sc(12), aZb = bK.sc(6), h = new Array(aZa), aC = 0; aC < aZa; aC++) h[aC] = bK.sc(aZb);
						aU.aDz(h)
					}
				}(oX) : 2 === aZI ? b1.aYe.aZK(oX) : 3 === aZI || 4 === aZI ? ay.dr() : 5 === aZI ? b1.aYg.aZL() : 9 === aZI ? b1.aYg.aZM(oX) : 10 === aZI ? b1.aYi.aZN() : 11 === aZI ? b1.aYg.aZO(oX) : 12 === aZI ? b1.aYi.aZP() :
				13 === aZI ? b1.aYk.aZQ() : 14 === aZI ? b1.aYk.aZR() : 15 === aZI ? b1.aYg.aZS() : 16 === aZI ? b1.aYe.aZT(oX) : 17 === aZI ? b1.aYe.aZU(oX) : 19 === aZI ? b1.aYe.aZV(oX) : 20 === aZI ? b1.aYg.aZW(oX) : 21 !== aZI &&
				22 !== aZI && (23 === aZI ? b1.aYg.aZX(oX) : 24 === aZI ? b1.aYe.aZY(oX) : 25 === aZI && b1.aYi.aZZ())
		} : function(oX) {
			if (8 !== ab.a5P() && !ay.aM2()) return;
			if (oX !== b1.z.a5X) b1.z.aZ9(oX, 3244);
			else if (0 === bK.sc(1)) bi.a4O.aZc(bK.aD);
			else {
				var aC, oX = bK.sc(2);
				if (0 === oX) {
					var sD, rx = bK.sc(9);
					0 !== ah.ne[rx] && 0 !== ah.ne[aE.fQ] && (sD = bK.sc(10), aO.sC(rx, aE.fQ, sD), ag.t3(rx, 1, sD))
				} else if (1 === oX) ! function() {
					var rx = bK.sc(9);
					0 !== ah.ne[rx] && 0 !== ah.ne[aE.fQ] && b6.aQQ(0, [rx], !0) && aO.sU(rx, 1)
				}();
				else if (2 === oX) ! function() {
					var rx = bK.sc(9),
						target = bK.sc(9);
					0 !== ah.ne[rx] && 0 !== ah.ne[target] && 0 !== ah.ne[aE.fQ] && b6.aQQ(1, [rx], !0) && (ag.t3(rx, 3, 96), ag.t3(target, 4, 96), aO.aB5(rx, target))
				}();
				else if (m.aA && !m.aB) {
					var fg = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fg = Math.min(bB.rt.se.length, 540), aC = 0; aC < fg; aC++) bG.aZi(32, bB.rt.se[aC]);
					b1.z.send(b1.z.a5X, bG.aD)
				}
			}
		})(oX), bi.aZH())
	}
}

function aYj() {
	this.aZN = function() {
		bm.z.zm(), bm.rz.q5(105, bI.f7.vZ(bI.f7.va(5))), bm.rz.q5(106, bI.f7.vZ(bI.f7.va(15))), bm.rz.q5(109, 0), bm.rz.q5(108, bm.buffer.data[109].value), bm.rz.q5(111, bm.buffer.data[109].value + 1), bm.rz.q5(107, 0), bm.rz.q5(110, "")
	}, this.aZZ = function() {
		var id = bK.sc(8),
			pc = bJ.a0I.a0Z(7);
		0 === id && (bm.z.zr(pc, bm.buffer.data[106].value), new t7(L(512, [pc])))
	}, this.aZP = function() {
		var data;
		bK.size < bG.aZj(29) ? b1.z.aZ9(0, 3254) : ((data = {
			vW: bK.sc(30),
			a01: bK.sc(16),
			a02: bK.sc(30),
			a03: bK.sc(30),
			a04: bK.sc(30),
			a05: bK.aZk(32),
			username: bJ.a0I.a0Z(5),
			a06: bJ.a0I.a0Z(3),
			a07: bJ.a0I.a0Z(3),
			a08: bK.aZk(32),
			a09: bK.aZk(32),
			a0A: bK.sc(30),
			a0B: bK.aZk(32),
			a0C: bK.aZk(32),
			a0D: bK.aZk(32),
			a0E: bK.aZk(32),
			aUJ: bK.aZk(32),
			aUK: bK.aZk(30),
			aUg: bK.aZk(32),
			aUh: bJ.a0I.a0Z(3),
			aUa: bK.aZk(2),
			aUc: bK.aZk(10),
			aUY: bJ.a0I.a0Z(8),
			aUb: bK.aZk(5),
			aTw: bK.sc(30),
			aUB: bK.sc(30),
			a4k: bK.aZk(32),
			aUO: bK.sc(3),
			aUN: bK.sc(8),
			aUH: bK.sc(30),
			aUI: bK.aZk(32),
			aUM: bK.sc(1),
			aUU: bJ.a0I.a0Z(6),
			aUP: bK.sc(1),
			aUQ: bK.sc(1),
			aUC: bK.sc(16),
			aUD: bK.sc(5),
			aUE: bK.sc(1),
			aZl: bK.sc(1),
			aUF: bK.sc(23),
			aU6: bK.sc(30),
			aUi: bK.sc(1),
			aUj: bK.sc(1)
		}).aUi && (data.aUk = bK.aZk(32), data.aUl = bK.sc(30), data.aUm = bK.sc(30), data.aUn = bK.sc(1)), data.aZl && (data.aUF = -data.aUF), 8 === u.vX && (25 === u.a5T().aWA ? (data.aTX = !0, u.z.aTB = data, u.a5T().aGz(25, !1)) : (
			data.aTX = !1, bm.rz.q5(160, +(data.aUi && data.aUn)), data.pk = bm.buffer.data[105].value, u.z.aT8 = data, bm.rz.a00(data), u.a5T().aGz(16, !0))))
	}
}

function aYl() {
	this.aZQ = function() {
		var aC;
		if (bK.size < bG.aZj(23)) b1.z.aZ9(0, 3259);
		else {
			var vo = bK.sc(6),
				fg = bK.sc(10),
				data = [];
			if (9 === vo || 10 === vo || 11 === vo || 13 === vo) {
				for (aC = 0; aC < fg; aC++) data.push([bK.sc(30), bJ.a0I.a0Z(5), bK.aZk(32), 0, bK.sc(30)]);
				8 === u.vX && u.a5T().aGz(21, !0, {
					vo: vo,
					data: data
				})
			} else if (12 === vo) {
				for (aC = 0; aC < fg; aC++) data.push([bK.sc(20), bK.sc(30), bK.sc(30), bK.aZk(32), bK.sc(30), bJ.a0I.a0Z(5), bJ.a0I.a0Z(5)]);
				8 === u.vX && u.a5T().aGz(21, !0, {
					vo: vo,
					data: data
				})
			} else {
				var ig = bK.sc(16);
				if (bK.aZm(39 + 16 * ig + fg * (0 === vo ? 111 : 1 === vo ? 101 : 2 === vo || 3 === vo ? 127 : 212))) {
					if (0 === vo)
						for (aC = 0; aC < fg; aC++) data.push([bK.sc(30), bJ.a0G.a0K(bK.sc(5)), bK.sc(16), bK.sc(30), bK.sc(30)]);
					else if (1 === vo)
						for (aC = 0; aC < fg; aC++) data.push([bK.sc(16), bJ.a0G.a0K(bK.sc(3)), bK.sc(16), bJ.a0G.a0K(bK.sc(5)), bK.sc(31), bK.sc(30)]);
					else if (2 === vo || 3 === vo)
						for (aC = 0; aC < fg; aC++) data.push([bK.sc(30), bJ.a0G.a0K(bK.sc(5)), bK.aZk(32), bK.sc(30), bK.sc(30)]);
					else
						for (aC = 0; aC < fg; aC++) data.push([bK.sc(20), bK.sc(30), bK.sc(30), bK.sc(30), bK.sc(30), bK.aZk(32), bK.sc(30), bJ.a0G.a0K(bK.sc(5)), bJ.a0G.a0K(bK.sc(5))]);
					8 === u.vX && u.a5T().aGz(21, !0, {
						vo: vo,
						data: data
					})
				} else b1.z.aZ9(0, 3260)
			}
		}
	}, this.aZR = function() {
		if (bK.size < bG.aZj(29)) b1.z.aZ9(0, 3265);
		else {
			var aZn = bK.sc(4),
				aZo = bK.sc(7),
				aZp = bK.sc(11);
			if (bK.aZm(29 + 16 * aZo + 16 * aZp + 11 * aZn)) {
				for (var data = [], aC = 0; aC < aZn; aC++) {
					for (var a4z = bJ.a0G.a0K(bK.sc(3)), aZq = bK.sc(8), aVK = [], fz = 0; fz < aZq; fz++) aVK.push(bK.sc(16));
					data.push({
						name: "[" + a4z + "]",
						aVK: aVK
					})
				}
				8 === u.vX && u.a5T().aGz(23, !0, data)
			} else b1.z.aZ9(0, 3266)
		}
	}
}

function aYf() {
	function aZu() {
		var id = bK.sc(3);
		return 0 === id ? {
			id: id,
			pk: bK.sc(30),
			pl: aZv(),
			s: bJ.a0I.a0Z(8)
		} : 1 === id ? {
			id: id,
			pk: bK.sc(30),
			pl: aZv(),
			aIv: bK.sc(3),
			value: bK.sc(30),
			target: bK.sc(30),
			pm: aZv()
		} : 2 === id ? {
			id: id,
			pk: bK.sc(30),
			pl: aZv(),
			aIv: bK.sc(3)
		} : 3 === id ? {
			id: id,
			pk: bK.sc(30),
			pl: aZv(),
			aIv: bK.sc(3),
			value: bK.sc(4),
			target: bK.sc(30),
			pm: aZv()
		} : 4 === id ? {
			id: id,
			pk: bK.sc(30),
			pl: aZv(),
			aIv: bK.sc(3),
			target: bK.sc(30),
			pm: aZv(),
			aIx: bK.sc(1)
		} : 5 === id ? {
			id: id,
			aIv: bK.sc(6)
		} : 6 === id ? {
			id: id,
			value: bK.sc(17)
		} : null
	}

	function aZv() {
		return bK.sc(1) ? bJ.a0I.a0Z(5) : null
	}
	this.aZK = function(oX) {
		if (oX !== b1.z.fE) b1.z.close(oX, 3239);
		else if (6 !== ab.a5P()) b1.z.close(oX, 3271);
		else {
			bq.dr(), bq.z.wK = bK.sc(10), bq.tb.aII();
			for (var playerCount = bK.sc(16), fz = 0; fz < playerCount; fz++) bq.ps.aHi(bK.sc(30), bJ.a0I.a0Z(5), bK.sc(4), bK.sc(30), bK.sc(7), bK.sc(16), bK.sc(18), bK.sc(11), bK.sc(12), bK.sc(6), bK.sc(13), bK.sc(1));
			u.v(29), bq.z.aJQ(!0)
		}
	}, this.aZT = function(oX) {
		if (oX !== b1.z.fE) b1.z.close(oX, 3239);
		else if (bq.fD) {
			bq.z.aJP[0] = bK.sc(20), bq.z.aJP[1] = bK.sc(20);
			for (var aZr = bK.sc(20), fz = 0; fz < aZr; fz++) {
				var id = bK.sc(3);
				0 === id ? bq.ps.aHi(bK.sc(30), bJ.a0I.a0Z(5), 0, 1234566, 127, 0, bK.sc(18), 0, bK.sc(12), 0, 0, 0) : 1 === id ? bq.ps.aI2(bK.sc(16), bK.sc(16), bK.sc(13), bK.sc(1)) : 2 === id ? bq.ps.aHy(bK.sc(16), bJ.a0I.a0Z(5)) : 3 === id ?
					bq.ps.aI0(bK.sc(16)) : 4 === id ? bq.ps.aHr(bK.sc(16), bK.sc(4), bK.sc(30), bK.sc(7), bK.sc(16), bK.sc(11), bK.sc(18)) : 5 === id ? bq.ps.aHt(bK.sc(16), bK.sc(1)) : 6 === id && bq.ps.aHs(bK.sc(16), bK.sc(6))
			}
			bq.z.wK = bK.sc(10);
			for (var aZs = bK.sc(10), aC = 0; aC < aZs; aC++) {
				var xi = bK.sc(13),
					aXT = bK.sc(10),
					aI6 = bK.sc(10),
					aHQ = bq.z.aHQ;
				if (aHQ.aI6 = aI6, aHQ.a5X = bK.sc(10), aHQ.aIk = bK.sc(10), aHQ.fM = bK.sc(6), aHQ.mapSeed = bK.sc(14), aHQ.wy = bK.sc(4), aHQ.xP = bK.sc(1), aHQ.spawningSeed = bK.sc(14), aHQ.a4h = bK.sc(30) - 1, aHQ.aI7 = null, 8 === aHQ.wy) {
					aHQ.aI7 = new Array(aI6);
					for (fz = 0; fz < aI6; fz++) aHQ.aI7[fz] = bK.sc(9)
				}
				xi = bq.ps.aI3(xi);
				if (bq.aHQ.dz(xi, aXT, aI6)) return;
				bq.ps.aI9(xi, aXT, aI6, aHQ.aI7)
			}
			var aZt = bK.sc(13);
			aZt && bq.ps.aIC(aZt), bq.tb.aII(), bq.z.aIY()
		} else b1.z.close(oX, 3251)
	}, this.aZY = function(oX) {
		oX === b1.z.fE && bq.fD && bq.tb.aIR(bK.sc(13), bK.sc(1))
	}, this.aZU = function(oX) {
		if (oX !== b1.z.fE) b1.z.close(oX, 3272);
		else if (bq.fD) {
			for (var py = bq.z.py, xx = (bq.z.pz = bK.sc(20), bK.sc(6)), aC = 0; aC < xx; aC++) {
				var aKy = aZu();
				bq.qB.aKx(aKy), bq.qB.aL3(aKy), py.push(aKy)
			}
			py.length > bq.z.q7 && py.splice(0, py.length - bq.z.q7), bq.z.aJX()
		} else b1.z.close(oX, 3273)
	}, this.aZV = function(oX) {
		var aKy;
		oX !== b1.z.fE ? b1.z.close(oX, 3276) : bq.fD ? (aKy = aZu(), bq.qB.aKx(aKy), bq.message.aIK(aKy)) : b1.z.close(oX, 3277)
	}
}

function aYh() {
	this.aZL = function() {
		for (var id = bK.sc(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sc(8), bK.sc(8), bK.sc(8)]);
		var es = bJ.a0I.a0Z(8);
		bX.eZ.ep({
			id: id,
			colors: colors,
			es: es
		})
	}, this.aZW = function(oX) {
		var aZw = bK.sc(3),
			fj = bK.sc(5),
			fj = bl.aZx.aZy(fj, bK.sc(30), bK.sc(30), bK.sc(30));
		b1.en.aZz(oX, fj, aZw, 0)
	}, this.aZM = function(oX) {
		this.aZW(oX), bm.rz.q5(183, bI.f7.vZ(bI.f7.va(15))), 0 === oX && 0 === bm.buffer.data[105].value.length ? b1.en.eo(0) : b1.aU1.aa0(oX), 4 === b1.z.aYr(oX).aa1() ? 6 === ab.a5P() && b1.aIO.aLc(oX) : 5 !== b1.z.aYr(oX).aa1() || 8 !== ab
			.a5P() && 10 !== ab.a5P() || b1.rx.aM0()
	}, this.aZO = function(oX) {
		var id = bK.sc(6);
		1 === id ? (bm.rz.q5(160, bK.sc(30)), b1.z.aZ6(oX), aU.aDv || b1.en.eo(1), bA.aGv(), 8 === u.vX && u.a5T().aWN()) : 21 === id ? 8 === u.vX && u.a5T().aGz(17) : 22 === id && (bm.rz.q5(106, bm.buffer.data[110].value), bm.rz.q5(110, ""),
			8 === u.vX) && u.a5T().aGz(15)
	}, this.aZS = function() {
		var fg = bK.sc(16),
			aa2 = bK.sc(16);
		if (bK.aZm(55 + 10 * fg + 16 * aa2)) {
			for (var h = [], aC = 0; aC < fg; aC++) h.push(bJ.a0G.a0K(bK.sc(10)));
			bA.aGy(h)
		} else b1.z.aZ9(0, 3270)
	}, this.aZX = function(oX) {
		for (var aZw = bK.sc(3), fj = bK.sc(5), aZw = {
				aZw: aZw,
				u9: bl.aZx.aZy(fj, bK.sc(30), bK.sc(30), bK.sc(30))
			}, fj = bK.aZk(32), aa3 = [], aC = 0; aC < 17; aC++) aa3.push(new Uint8Array(bK.sc(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aa3[aC], fg = h.length, iZ = 0; iZ < fg; iZ++) h[iZ] = bK.aZk(8);
		bx.show(aa3, fj, oX, aZw)
	}
}

function aYX() {
	this.aYs = function(oX, aYq) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aYq ? 1 : 0), bG.a9(3, 0 === aE.a4E ? bq.fD ? 6 : 0 : aE.hp ? 1 : aE.lM ? 7 : aE.lK < 7 ? 2 : 8 === aE.lK ? 4 : 9 === aE.lK ? 5 : 3), b1.z.send(oX, bG.aD)
	}, this.aM0 = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fE), bG.a9(10, ay.aIk), bG.a9(10, ay.aLt), bG.a9(10, m.eE), bG.a9(14, m.e3), b1.z.send(b1.z.a5X, bG.aD)
	}, this.ry = function(fS) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fS), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s0 = function(jK, kB) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jK), bG.a9(10, kB), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s4 = function(jK, s2) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jK), bG.a9(9, s2), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s6 = function(jK, s5) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jK), bG.a9(27, s5), b1.z.send(b1.z.a5X, bG.aD)
	}, this.s8 = function(jK, o2) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jK), bG.a9(16, o2), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sB = function(kB) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kB), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sF = function(eP) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eP), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sH = function(sG) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sG), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sJ = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sK = function(jK, fS, kB) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jK), bG.a9(10, kB), bG.a9(22, fS), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sS = function(aa4, aa5) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aa5), bG.a9(10, aa4), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sV = function(aAz) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAz), b1.z.send(b1.z.a5X, bG.aD)
	}, this.sZ = function(aa6, target) {
		var aC, fg = aa6.length;
		for (bG.a8(14 + 9 * fg), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fg; aC++) bG.a9(9, aa6[aC]);
		b1.z.send(b1.z.a5X, bG.aD)
	}
}

function aYa() {
	this.aa7 = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.en.aa8(), b1.z.send(0, bG.aD)
	}, this.aa0 = function(oX) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f7.a0W(bm.buffer.data[105].value, 5), bJ.f7.a0W(bm.buffer.data[106].value, 15), b1.z.send(oX, bG.aD)
	}, this.aWO = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f7.a0W(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aUW = function(a8A) {
		var fg = a8A.pc.length;
		bG.a8(21 + 16 * fg), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a8A.action), bG.a9(8, fg), bI.a0G.a0V(a8A.pc), b1.z.send(0, bG.aD)
	}, this.aXv = function(a05, colors, aaA, es) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a05, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fz = 0; fz < 3; fz++) bH.a9(8, colors[aC][fz]);
		a05 = bA.data.aH2(aaA.trim());
		bH.a9(8, -1 === a05 ? 255 : a05), bI.a0I.a3i(es.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aaB())
	}, this.aU7 = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f7.a0W(data.pk, 5), b1.z.send(0, bG.aD)
	}, this.aU2 = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f7.a0W(data.pk, 5), bG.aZi(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aYb() {
	this.sa = function() {
		for (var fg = aE.l2, a43 = bU.result.a43, lx = a43.length, a4s = (bG.a8(17 + 16 * fg + 33 * lx), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lx), bG.a9(1, +(2 === aE.a4B)), bG.a9(1, aE.a4X % 2), ah.a4s), aC = 0; aC < fg; aC++) bG.a9(16, a4s[
		aC]);
		for (var hU = ah.hU, aC = 0; aC < lx; aC++) {
			var hE = a43[aC];
			bG.a9(9, hE), bG.a9(24, hU[hE])
		}
		b1.z.send(b1.z.a5X, bG.aD)
	}
}

function aYc() {
	this.aWF = function(vo, vp, vq) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, vo), bG.a9(1, +(vp < 0)), bG.a9(1, +(vq < 0)), bG.a9(30, Math.abs(vp)), bG.a9(30, Math.abs(vq)), b1.z.send(0, bG.aD)
	}, this.aWG = function(vo, aWH, aWI) {
		bG.a8(18 + 16 * aWH.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, vo), b1.en.aaC(aWH), bG.a9(30, aWI), b1.z.send(0, bG.aD)
	}, this.aWL = function(vo, aWH, aWI) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, vo), bJ.f7.a0W(aWH, 5), bG.a9(30, aWI), b1.z.send(0, bG.aD)
	}, this.aWJ = function(aVJ, a4y) {
		for (var fg = a4y.length, ig = 0, aC = 0; aC < fg; aC++) ig += a4y[aC].length;
		for (bG.a8(21 + 3 * fg + 16 * ig), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aVJ), bG.a9(4, fg), bG.a9(7, ig), aC = 0; aC < fg; aC++) bG.a9(3, a4y[aC].length), bI.a0G.a0V(a4y[aC]);
		b1.z.send(0, bG.aD)
	}, this.aWK = function(aVJ, vp, vq) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aVJ), bG.a9(1, +(vp < 0)), bG.a9(1, +(vq < 0)), bG.a9(20, Math.abs(vp)), bG.a9(20, Math.abs(vq)), b1.z.send(0, bG.aD)
	}
}

function aYY() {
	this.aLc = function(oX) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eE), b1.en.aaC(username), bD.color.a7A(bm.z.zu()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fE = oX, b1.z.send(oX, bG.aD)
	}, this.aIP = function(aaD, a8A) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aaD), 2 === aaD ? bH.a9(30, a8A) : 4 === aaD ? (bH.a9(13, a8A.xi), bH.a9(1, a8A.xl)) : 3 === aaD ? bI.a0I.a3i(a8A, 8, bH) : 5 === aaD ? (bH.a9(3, a8A.id), bH.a9(3, a8A.value), bH.a9(30, a8A
			.pk)) : 6 === aaD && (bH.a9(2, a8A.wy), bH.a9(30, a8A.pk)), b1.z.send(b1.z.fE, bH.aaB())
	}
}

function aYZ() {
	this.aZ5 = function(oX) {
		var aaK;
		bG.a8(55 + bl.aaE.sc()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e3), bG.a9(4, a1.id), bG.a9(7, a1.eA), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aaK = bA.aH1(), bG.a9(8, aaK[0]), bG.a9(8, aaK[1]), bl.aaE
		.a3i(), b1.z.send(oX, bG.aD)
	}, this.aZz = function(oX, u9, aZw, aaG) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aZw), bG.a9(30, u9), bG.a9(30, aaG), b1.z.send(oX, bG.aD)
	}, this.fF = function(fA) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 6), bI.a0I.a3i(fA, 16, bH), b1.z.send(b1.z.fE, bH.aaB())
	}, this.eo = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.yD = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aGx = function(id, pc) {
		var fg = Math.min(pc.length, 63);
		bG.a8(19 + 16 * fg), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fg), bI.a0G.a0V(pc), b1.z.send(0, bG.aD)
	}, this.aaH = function(aXX, q9) {
		bG.a8(7 + 26 * q9.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q9.length; aC++) bG.a9(16, q9[aC][0]), bG.a9(10, q9[aC][1]);
		b1.z.send(aXX, bG.aD)
	}, this.aZC = function(aaI, aaJ) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aaI), bG.a9(12, aaJ), b1.z.send(b1.z.a5X, bG.aD)
	}, this.aaC = function(username) {
		bG.a9(5, username.length), bI.a0G.a0V(username)
	}, this.pI = function(pJ, pK, oX, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aZw), bG.a9(30, pow.u9), bG.aZi(32, pK), bG.a9(16, pJ), b1.z.send(oX, bG.aD)
	}
}

function aZ3() {
	var aaL, aaM, b, aaN = ["wss://", "/s50/", "/s51/", "/s52/"],
		aaO = 0;

	function aZ4() {
		b1.z.aZ4(aaL, aaM)
	}

	function aaR(e) {
		b1.aAz.aZE(aaL, new Uint8Array(e.data))
	}

	function aaS() {}

	function aZB(e) {
		b1.z.aZB(aaL, e)
	}
	this.dr = function(eP, a5U, aYz) {
		aaL = eP, aaM = a5U,
			function(aYz) {
				aYz = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e4 ? "ws://localhost:" + (7130 + aaL) + "/" : aYz ? aaN[0] + "game.territorial.io/x0" + aaL + "/" : aaN[0] + b1.z.aYm[aaL] + aaN[1 + m.e2];
				(b = new WebSocket(aYz)).binaryType = "arraybuffer", b.onopen = aZ4, b.onmessage = aaR, b.onclose = aZB, b.onerror = aaS
			}(aYz)
	}, this.aaQ = function() {
		return b.readyState === b.CONNECTING
	}, this.em = function() {
		return b.readyState === b.OPEN
	}, this.aYu = function() {
		return aaO
	}, this.aZ6 = function() {
		aaO = 1
	}, this.aZ1 = function() {
		return this.aaQ() || this.em()
	}, this.aZ2 = function(a5U) {
		aaM = a5U
	}, this.aa1 = function() {
		return aaM
	}, this.send = function(aD) {
		this.em() && b.send(aD)
	}, this.close = function(aZ8) {
		this.aZ1() && (this.ub(), b.close(aZ8))
	}, this.ub = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dT() {
	var gap, aaT = !1,
		wz = 0,
		j = 0,
		vc = 0,
		canvas = null,
		p4 = null,
		a6k = null;

	function aaX() {
		for (var aC = aE.a1S; 0 <= aC; aC--) a6k[aC] = 0;
		for (aC = am.lY - 1; 0 <= aC; aC--) a6k[bj.fe[am.ld[aC]]] += ah.hU[am.ld[aC]];
		aaT = !0
	}

	function aaV() {
		for (var aac, aaa = 0, fg = 0, eq = Math.floor(j / 2), eO = Math.floor(vc / 2), aab = 1.5 * Math.PI, aC = aE.a1S; 0 <= aC; aC--) fg += a6k[aC], 0 === a6k[aC] && aaa++;
		if (aaT = !1, p4.clearRect(0, 0, j, j), 0 < fg)
			if (aaa === aE.a1S) {
				for (aC = aE.a1S; 0 <= aC; aC--)
					if (0 < a6k[aC]) {
						! function(aC, eq, eO) {
							p4.fillStyle = bj.aag[bj.lP[aC]], p4.beginPath(), p4.arc(eq, eq, eO, 0, 2 * Math.PI), p4.fill()
						}(aC, eq, eO);
						break
					}!
				function(eq) {
					var fontSize = eq / 3;
					p4.font = bD.tC.tF(1, fontSize), p4.fillStyle = bE.qT, p4.fillText("100%", eq, eq + .1 * fontSize)
				}(eq)
			} else {
				for (aC = 0; aC <= aE.a1S; aC++) 0 < a6k[aC] && (aac = aab + 2 * Math.PI * a6k[aC] / fg, aaf(p4, bj.aag[bj.lP[aC]], eq, eO, aab, aac), function(eq, eO, aab, aac) {
					var g8 = (aac - aab) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eO * Math.min(g8, .37);
					fontSize < 8 || (aab = (aab + aac) / 2, aac = (__fx.settings.detailedTeamPercentage ? (100 * g8).toFixed(2) : Math.floor(100 * g8 + .5)) + "%", eO *= .525 - Math.max(.6 * (g8 - .7), 0), p4.font = bD.tC.tF(1, fontSize), p4
						.fillStyle = bE.qT, p4.fillText(aac, eq + Math.cos(aab) * eO, eq + Math.cos(aab + 1.5 * Math.PI) * eO))
				}(eq, eO, aab, aac), 0 !== aC && aai(p4, eq, eO, aab), aab = aac);
				aai(p4, eq, eO, 1.5 * Math.PI)
			} aaj(p4, eq, eO)
	}

	function aaf(il, color, eq, eO, aab, aac) {
		il.fillStyle = color, il.beginPath(), il.arc(eq, eq, eO, aab, aac), il.lineTo(eq, eq), il.fill()
	}

	function aai(il, eq, eO, aak) {
		il.beginPath(), il.moveTo(eq, eq), il.lineTo(eq + Math.cos(aak) * eO, eq + Math.cos(aak + 1.5 * Math.PI) * eO), il.stroke()
	}

	function aaj(il, eq, eO) {
		il.beginPath(), il.arc(eq, eq, eO, 0, 2 * Math.PI), il.stroke()
	}
	this.dr = function() {
		if (aE.ib) {
			wz = 0, a6k = new Uint32Array(aE.a1S + 1);
			for (var aC = aE.a1S; 0 <= aC; aC--) a6k[aC] = 0;
			for (aC = am.lY - 1; 0 <= aC; aC--) a6k[bj.fe[am.ld[aC]]] += 1;
			this.resize()
		} else a6k = p4 = canvas = null
	}, this.aCU = function() {
		return j
	}, this.resize = function() {
		aE.ib && (j = Math.floor(.95 * (a1.a2.it() && !aE.o8 ? .18 * i.min : .13 * i.iu)), j = (j *= 1 + (.5 + .2 * a1.a2.it()) * aE.o8) + j % 2, gap = Math.max(1, .015 * j), vc = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p4 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p4.strokeStyle = bE.qT, bD.tC.textAlign(p4, 1), bD.tC.textBaseline(p4, 1), aaV())
	}, this.lZ = function(aaW) {
		aaW && aaX();
		var eh, aaW = this.lb();
		return bj.lP[aaW] || (aaW = function() {
			for (var la = -1, aC = aE.a1S; 1 <= aC; aC--)(-1 === la || a6k[aC] > a6k[la]) && (la = aC);
			return la
		}(), eh = ah.hU[md[0]], -1 !== aaW && a6k[aaW] > eh) ? a6k[aaW] : eh
	}, this.a5A = function() {
		return wz = 31, this.el(), this.lb()
	}, this.lb = function() {
		for (var la = 0, aC = aE.a1S; 0 < aC; aC--) a6k[aC] > a6k[la] && (la = aC);
		return la
	}, this.l3 = function(aaZ) {
		for (var h9 = 0, ld = am.ld, fe = bj.fe, fg = am.lY, gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = ld[aC];
			fe[hE] === aaZ && (gK[h9++] = hE)
		}
		bR.gB[0] = h9
	}, this.lc = function(aaZ) {
		for (var h9 = 0, ld = am.ld, fe = bj.fe, fg = am.lY, gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = ld[aC];
			fe[hE] !== aaZ && (gK[h9++] = hE)
		}
		bR.gB[0] = h9
	}, this.a7h = function() {
		for (var h9 = 0, aC = aE.a1S; 0 <= aC; aC--) h9 += 0 < a6k[aC];
		return h9
	}, this.el = function() {
		aE.ib && 32 <= ++wz && (wz = 0, aaX())
	}, this.nR = function() {
		aE.ib && aaT && aaV()
	}, this.xT = function(il, h9, size) {
		var eq = size >> 1,
			eO = Math.floor(.4 * size),
			aab = 1.5 * Math.PI;
		il.clearRect(0, 0, size, size), il.lineWidth = .042 * size, il.strokeStyle = bE.qT;
		for (var aC = 0; aC < h9; aC++) {
			var aac = aab + 2 * Math.PI / h9;
			aaf(il, bj.aag[aC + 1], eq, eO, aab, aac), 0 !== aC && aai(il, eq, eO, aab), aab = aac
		}
		aai(il, eq, eO, 1.5 * Math.PI), aaj(il, eq, eO)
	}, this.yr = function() {
		aE.ib && (aE.o8 ? ys.drawImage(canvas, bf.gap, bf.gap) : ys.drawImage(canvas, bf.gap, aCT + 2 * bf.gap))
	}
}

function dk() {
	function aaq(fn, fg, fp, a3s, aDk, g6) {
		if (!(fp < 1 || aDk < fp))
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (a3s(fK)) return fK >> 2;
				fn += g6
			}
		return -1
	}

	function aau(fp, fg, fn, a3s, aao, g6) {
		if (!(fn < 1 || aao < fn)) {
			fg = Math.max(fg, 0);
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (a3s(fK)) return fK >> 2;
				fp += g6
			}
		}
		return -1
	}

	function aay(jB, jC, aal) {
		return -1 !== jC && (-1 === jB || bP.jD(jC, aal) < bP.jD(jB, aal)) ? jC : jB
	}
	this.i6 = function(aal) {
		return this.a4I(aal, function(fK) {
			return ad.fb(fK)
		})
	}, this.iC = function(aal) {
		return this.a4I(aal, function(fK) {
			return ad.aMi(fK, aE.fQ)
		})
	}, this.a4I = function(aal, a3s) {
		return function(aal, aam, a3s) {
			for (var hw = bP.fo(aal), hy = bP.fq(aal), aao = bV.fr - 2, aDk = bV.fs - 2, aap = -1, fj = 0; fj < aam; fj++) {
				var aDj = Math.max(hw - fj, 1),
					aRM = Math.max(hy - fj, 1),
					a23 = Math.min(hw + fj, aao),
					a22 = Math.min(hy + fj, aDk),
					jB = aaq(hw, a23 - hw, hy - fj, a3s, aDk, 1),
					jC = aaq(hw - 1, hw - aDj - 1, hy - fj, a3s, aDk, -1),
					a23 = aaq(hw, a23 - hw, hy + fj, a3s, aDk, 1),
					aDj = aaq(hw - 1, hw - aDj - 1, hy + fj, a3s, aDk, -1),
					aat = aau(hy, a22 - hy - 1, hw - fj, a3s, aao, 1),
					aav = aau(hy - 1, hy - aRM - 2, hw - fj, a3s, aao, -1),
					a22 = aau(hy, a22 - hy - 1, hw + fj, a3s, aao, 1),
					aRM = aau(hy - 1, hy - aRM - 2, hw + fj, a3s, aao, -1);
				if (aap = aay(aap, jB, aal), aap = aay(aap, jC, aal), aap = aay(aap, a23, aal), aap = aay(aap, aDj, aal), aap = aay(aap, aat, aal), aap = aay(aap, aav, aal), aap = aay(aap, a22, aal), 0 <= (aap = aay(aap, aRM, aal)) && fj *
					fj >= bP.jD(aap, aal)) return aap
			}
			return -1
		}(aal, bP.ir(), a3s)
	}
}

function dC() {
	function aaz(key, size) {
		var aXx;
		return "undefined" == typeof URLSearchParams || (aXx = window.location.search, "string" != typeof(aXx = new URLSearchParams(aXx).get(key))) || aXx.length < 1 ? null : bJ.f7.a0P(aXx, size)
	}
	this.dz = function() {
		if (0 !== a1.id) return !1;
		var a4h = aaz("r", 6);
		if (! function() {
				var value = aaz("account", 5);
				if (!value && !(value = aaz("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vX, new vY(1e3, {
					action: 0,
					pk: value,
					vW: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4h) return !1;
			this.aUp("r", a4h), u.v(3, 0, L(513)), bC.ab1(a4h)
		}
		return !0
	}, this.clear = function() {
		var a5K = new URL(window.location.href);
		a5K.search = "";
		try {
			return history.replaceState(null, "", a5K.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aUp = function(key, value) {
		if (0 === a1.id) try {
			var a5K = new URL(window.location.href),
				hE = a5K.searchParams;
			hE.set(key, value), a5K.search = hE.toString(), history.replaceState(null, "", a5K.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cr() {
	var ab3, h;
	this.dr = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g7(32768 * aC, 100);
		this.a8w(0)
	}, this.value = function(hE) {
		return h[hE]
	}, this.aQy = function() {
		return bO.g7(ab3 - 1, 2)
	}, this.a8w = function(aQq) {
		ab3 = 2 * aQq % 32768 + 1
	}, this.random = function() {
		return ab3 = 167 * ab3 % 32768
	}, this.kJ = function(nZ) {
		return bO.g7(nZ * this.random(), 32768)
	}, this.ku = function(hE) {
		return 0 !== hE && this.random() < this.value(hE)
	}, this.jf = function(fz, g0) {
		return fz + this.kJ(g0 - fz)
	}
}

function d8() {
	function abB(pc) {
		3 === u.vX && u.a5T().z6(pc)
	}
	this.so = new ab4, this.a96 = new ab5, this.aOS = new ab6, this.dr = function() {
		aE.hp || this.so.dr()
	}, this.el = function() {
		aE.hp || (this.so.el(), 3 !== u.vX) || bi.kz() % 15 != 5 && 2 !== aE.a4E || u.a5T().aXy()
	}, __fx.replay.restartReplay = () => this.aY1(), this.aY1 = function() {
		var ab8 = 0 !== aE.a4E,
			ab9 = aE.a8r;
		ab8 || ab.aLm(), aE.a8p.a9G(), aE.data.canvas = null, b1.z.close(b1.z.a5X, 3257), b1.z.a5X = 0, aE.data.isReplay = 1, aE.a8t(), ab8 && (aE.a8r = ab9)
	}, this.aY0 = function(pc) {
		var aC = pc.indexOf("=");
		return 0 <= aC ? pc.substring(aC + 1) : pc
	}, __fx.replayHistory.load = saved => {
		saved = bC.aY0(saved), bC.aOS.a0Z(saved) && bC.aY1()
	}, this.ab1 = function(id) {
		var abA = new XMLHttpRequest;
		abA.open("GET", "https://" + b1.z.a4g() + "/log/?r=" + id), abA.onload = function() {
			var pc = 200 === abA.status ? abA.responseText : "";
			abB(pc.length ? pc : L(514))
		}, abA.onerror = function() {
			abB(L(515))
		}, abA.send()
	}, this.aXz = function(pc) {
		return pc
	}
}

function ab4() {
	this.abC = null, this.abD = null, this.abE = null, this.abF = null, this.abG = null, this.abH = null, this.a95 = "";
	var abI = 0;
	this.dr = function() {
		this.abC = [], this.abD = [], this.abE = [], this.abF = [], this.abG = [0], this.abH = [0], abI = 0, this.a95 = ""
	}, this.sp = function(id, gP, gR, gT) {
		aE.hp || 2 === aE.a4E || (0 === this.abG[abI] && (this.abH[abI] ? (this.abG.push(1), this.abH.push(0), abI++) : this.abG[abI] = 1), this.abC.push(id), this.abD.push(gP), this.abE.push(void 0 === gR ? 0 : gR), this.abF.push(void 0 === gT ?
			0 : gT), this.abH[abI]++)
	}, this.el = function() {
		0 === this.abG[abI] ? this.abH[abI]++ : (this.abG.push(0), this.abH.push(0), abI++)
	}
}

function ab6() {
	var abJ = 0;

	function abN(pc, id) {
		console.log(pc), abJ || (id ? 1 === id ? aO.aAP = L(517) + ": " + pc : u.v(4, 3, new w(L(518), pc, 1)) : u.v(4, 3, new w("⚠️ " + L(516), pc, 1)))
	}
	this.a0Z = function(pc, abK) {
		var j3, q9;
		return abJ = abK, bJ.f7.a0S(bJ.f7.a0Q(bJ.f7.a0O(pc))), aO.aAP = "", !! function() {
			if (bK.size < 10) abN("File Too Small");
			else {
				var abP = bK.sc(12),
					s = (abP !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, abN(s = (s += "   Found: " + abP) + ("   Compatible at " + b1.z.a4g() + "/" + abP), 1)), bK.sc(12)),
					abQ = bK.sc(31);
				if (abQ !== bK.size) abN("Size Error: Stated Size " + abQ + " Actual Size " + bK.size);
				else if (function(k, abP) {
						for (var hE = bK.aD, fg = bK.size, aaJ = abP, aC = 3; aC < fg; aC++) aaJ = aaJ + hE[aC] & 4095;
						return aaJ === k || (abN("Hash Error: " + aaJ + " " + k + " " + fg), !1)
					}(s, abP)) return 1
			}
			return
		}() && (j3 = bK, (q9 = aE.data = new a8o).mapType = j3.sc(2), q9.mapProceduralIndex = j3.sc(8), q9.mapRealisticIndex = j3.sc(8), q9.mapSeed = j3.sc(14), q9.mapName = j3.abS(5), 2 === q9.mapType && j3.abT(), q9.passableWater = j3.sc(
			1), q9.passableMountains = j3.sc(1), q9.playerCount = j3.sc(10), q9.humanCount = j3.sc(10), q9.selectedPlayer = j3.sc(9), q9.gameMode = j3.sc(1), q9.playerMode = j3.sc(2), q9.battleRoyaleMode = j3.sc(2), q9.numberTeams = j3.sc(4),
			q9.isZombieMode = j3.sc(1), q9.isContest = j3.sc(1), q9.isReplay = j3.sc(1), q9.elo = j3.abU(2, 14, 2), q9.colorsType = j3.sc(1), q9.colorsPersonalized = j3.sc(1), q9.colorsData = j3.abU(10, 18, 512), q9.selectableColor = j3.sc(
			1), q9.teamPlayerCount = j3.abU(4, 10, 9), q9.neutralBots = j3.sc(1), q9.botDifficultyType = j3.sc(2), q9.botDifficultyValue = j3.sc(4), q9.botDifficultyTeam = j3.abU(4, 4, 9), q9.botDifficultyData = j3.abU(10, 4, 512), q9
			.spawningType = j3.sc(2), q9.spawningSeed = j3.sc(14), q9.spawningData = j3.abU(11, 12, 1024), q9.selectableSpawn = j3.sc(1), q9.playerNamesType = j3.sc(2), q9.playerNamesData = j3.abV(10, 5, 512), q9.selectableName = j3.sc(1), q9
			.aIncomeType = j3.sc(2), q9.aIncomeValue = j3.sc(8), q9.aIncomeData = j3.abU(10, 8, 512), q9.tIncomeType = j3.sc(2), q9.tIncomeValue = j3.sc(8), q9.tIncomeData = j3.abU(10, 8, 512), q9.iIncomeType = j3.sc(2), q9.iIncomeValue = j3
			.sc(8), q9.iIncomeData = j3.abU(10, 8, 512), q9.sResourcesType = j3.sc(2), q9.sResourcesValue = j3.sc(11), q9.sResourcesData = j3.abU(10, 11, 512), q9.a9E = j3.abU(10, 30, 0), !! function() {
				var j3 = bK,
					a0a = j3.sc(5),
					abW = j3.sc(30),
					abX = j3.sc(30);
				if (abW + abX > 8 * j3.size) return void abN("Corrupted File");
				return function(fg) {
						var aba = new Uint8Array(fg),
							abb = new Uint16Array(fg),
							abc = new Uint32Array(fg),
							abd = new Uint32Array(fg);
						bC.so.abC = aba, bC.so.abD = abb, bC.so.abE = abc, bC.so.abF = abd;
						for (var aC = 0; aC < fg; aC++) {
							var id = bK.sc(4);
							aba[aC] = id, abb[aC] = bK.sc(9), 0 === id ? abc[aC] = bK.sc(22) : 1 === id ? (abc[aC] = bK.sc(10), abd[aC] = bK.sc(10)) : 2 === id ? (abc[aC] = bK.sc(10), abd[aC] = bK.sc(9)) : 3 === id ? (abc[aC] = bK.sc(10),
								abd[aC] = bK.sc(27)) : 4 === id ? (abc[aC] = bK.sc(10), abd[aC] = bK.sc(16)) : 5 === id || 6 === id ? abc[aC] = bK.sc(10) : 7 === id ? abc[aC] = bK.sc(1) : 10 === id && (abc[aC] = bK.sc(20), abd[aC] = bK
								.sc(22))
						}
					}(abW),
					function(fg, a0a) {
						var abG = new Uint8Array(fg),
							abH = new Array(fg);
						abH.fill(0), bC.so.abG = abG, bC.so.abH = abH;
						for (var aC = 0; aC < fg; aC++) abG[aC] = bK.sc(1), abH[aC] = bK.sc(a0a)
					}(abX, a0a), 1
			}()) && (bK.eP < 8 * bK.size - 13 || bK.eP > 8 * bK.size ? (abN("Out Of Bounds Error: " + bK.eP + " " + 8 * bK.size), !1) : (bC.so.a95 = pc, 2 !== aE.data.mapType || (abN("Load base64 image...", 2), abK)))
	}, this.aOT = function(aNV, abO) {
		var a75 = document.createElement("canvas"),
			il = a75.getContext("2d");
		if (a75.width = aNV.width, a75.height = aNV.height, il.drawImage(aNV, 0, 0), aE.data.canvas = a75, abJ || abO) return aE.a4E ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aY1()
	}
}

function ab5() {
	this.a3i = function() {
		var a0a = function() {
				for (var abH = bC.so.abH, fg = abH.length, max = 0, aC = 0; aC < fg; aC++) max = Math.max(max, abH[aC]);
				return a0g(Math.max(max, 1))
			}(),
			j = (q9 = aE.data, (j = bH).dr(), j.a9(12, m.rVersion), j.eP += 43, j.a9(2, q9.mapType), j.a9(8, q9.mapProceduralIndex), j.a9(8, q9.mapRealisticIndex), j.a9(14, q9.mapSeed), j.abk(q9.mapName, 5), 2 === q9.mapType && j.abl(q9.canvas),
				j.a9(1, q9.passableWater), j.a9(1, q9.passableMountains), j.a9(10, q9.playerCount), j.a9(10, q9.humanCount), j.a9(9, q9.selectedPlayer), j.a9(1, q9.gameMode), j.a9(2, q9.playerMode), j.a9(2, q9.battleRoyaleMode), j.a9(4, q9
					.numberTeams), j.a9(1, q9.isZombieMode), j.a9(1, q9.isContest), j.a9(1, q9.isReplay), j.dx(q9.elo, 2, 14), j.a9(1, q9.colorsType), j.a9(1, q9.colorsPersonalized), j.dx(q9.colorsData, 10, 18), j.a9(1, q9.selectableColor), j.dx(
					q9.teamPlayerCount, 4, 10), j.a9(1, q9.neutralBots), j.a9(2, q9.botDifficultyType), j.a9(4, q9.botDifficultyValue), j.dx(q9.botDifficultyTeam, 4, 4), j.dx(q9.botDifficultyData, 10, 4), j.a9(2, q9.spawningType), j.a9(14, q9
					.spawningSeed), j.dx(q9.spawningData, 11, 12), j.a9(1, q9.selectableSpawn), j.a9(2, q9.playerNamesType), j.abm(q9.playerNamesData, 10, 5), j.a9(1, q9.selectableName), j.a9(2, q9.aIncomeType), j.a9(8, q9.aIncomeValue), j.dx(q9
					.aIncomeData, 10, 8), j.a9(2, q9.tIncomeType), j.a9(8, q9.tIncomeValue), j.dx(q9.tIncomeData, 10, 8), j.a9(2, q9.iIncomeType), j.a9(8, q9.iIncomeValue), j.dx(q9.iIncomeData, 10, 8), j.a9(2, q9.sResourcesType), j.a9(11, q9
					.sResourcesValue), j.dx(q9.sResourcesData, 10, 11), j.dx(q9.a9E, 10, 30), ! function(a0a) {
					var j = bH,
						abC = bC.so.abC,
						gP = bC.so.abD,
						gR = bC.so.abE,
						gT = bC.so.abF,
						fg = abC.length;
					j.a9(5, a0a), j.a9(30, fg), j.a9(30, bC.so.abH.length);
					for (var aC = 0; aC < fg; aC++) {
						var eq = abC[aC];
						j.a9(4, eq), j.a9(9, gP[aC]), 0 === eq ? j.a9(22, gR[aC]) : 1 === eq ? (j.a9(10, gR[aC]), j.a9(10, gT[aC])) : 2 === eq ? (j.a9(10, gR[aC]), j.a9(9, gT[aC])) : 3 === eq ? (j.a9(10, gR[aC]), j.a9(27, gT[aC])) : 4 === eq ? (j
							.a9(10, gR[aC]), j.a9(16, gT[aC])) : 5 === eq || 6 === eq ? j.a9(10, gR[aC]) : 7 === eq ? j.a9(1, gR[aC]) : 10 === eq && (j.a9(20, gR[aC]), j.a9(22, gT[aC]))
					}
				}(a0a), ! function(a0a) {
					for (var j = bH, abG = bC.so.abG, abH = bC.so.abH, fg = abG.length, aC = 0; aC < fg; aC++) j.a9(1, abG[aC]), j.a9(a0a, abH[aC])
				}(a0a), bH.eP),
			q9 = bO.g7(j - 1, 6) + 1,
			a0a = (bG.aZj(6 * q9) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eP = 24, j.a9(31, j.h.length), j.eP = 12, j.a9(12, function() {
					for (var h = bH.h, fg = h.length, aaJ = m.rVersion, aC = 3; aC < fg; aC++) aaJ = aaJ + h[aC] & 4095;
					return aaJ
				}())
			}(), bK.dr(bH.h), bI.f7.vZ(bI.f7.va(q9)));
		return bK.xy(), bH.dr(), a0a
	}
}

function cw() {
	var eq, c1 = !1,
		abo = !1,
		abp = -1e4,
		abq = -1,
		abr = 0;

	function resize(abw) {
		eq = 0, ac.vx() && (abu(abw) || c1) && (c1 = !1, bf.resize(), bZ.aGQ.resize(), aZ.dr(), bb.dr(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a4E ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDZ()) : (ab.aLo(), ab.aLp()), bi.dy = !0)
	}

	function abt(g8) {
		return g8 && 128 < g8 ? Math.floor(g8) : 128
	}

	function abu(abw) {
		var j, k, aby, vc, aCy;
		if (!(0 < i.vF)) return vc = abt(document.documentElement.clientWidth), aCy = abt(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vc, k = aCy, aby = 0 !== a1.id || j < k ?
			700 : 1200, aby = Math.min(aby / ((j + k) / 2), 1), aby = 0 === bm.buffer.data[1].value ? 2 * aby / 3 : Math.min(aby + (bm.buffer.data[1].value - 1) * (1 - aby) / 2, 1), i.l = (window.devicePixelRatio || 1) * aby, __fx.hoveringTooltip
			.canvasPixelScale = i.l, abw && !abo ? (abo = !0, u.removeChild(document.body, a5l)) : abo && (abo = !1, document.body.appendChild(a5l)), j = Math.floor(.5 + vc * i.l), k = Math.floor(.5 + aCy * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aG2(j, k), i.max = aAf(j, k), i.iu = bO.g7(j + k, 2), i.yo = j / k, a5l.width = j, a5l.height = k, a5l.style.width = vc + "px", a5l.style.height = aCy + "px", abq = bi.eg + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iu = 0, this.yo = 1, this.l = 1, this.vF = 0, this.ds = function() {
		this.j = abt(document.documentElement.clientWidth) + 2, this.k = abt(document.documentElement.clientHeight) + 2
	}, this.dr = function() {
		eq = 1, a5l = document.getElementById("canvasA"), 2 === a1.id && (a5l.style.webkitUserSelect = "none"), (ys = a5l.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, abu(0)
	}, this.el = function() {
		50 <= ++eq && resize(0), -1 === abq || bi.eg < abq || (abq = -1, 2e3 * ++abr >= bi.eg + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e1 = function(kH) {
		c1 = !0, resize(kH)
	}, this.a6Q = function() {
		abp + 1e3 > bi.eg || (abp = bi.eg, resize(0))
	}
}

function dh() {
	var ac0 = [];
	this.aKc = function(pk) {
		for (var eh = (new Date).getTime() - 36e5, aC = ac0.length - 1; 0 <= aC; aC--)
			if (ac0[aC].eh < eh) ac0.splice(aC, 1);
			else if (ac0[aC].pk === pk) return !0;
		return !1
	}, this.aKe = function(pk, aKd) {
		return !(this.aKc(pk) || !b1.z.em(0) || (b1.aU1.aU2({
			action: 6,
			pk: pk,
			value: aKd
		}), ac0.push({
			pk: pk,
			eh: (new Date).getTime()
		}), 0))
	}
}

function dQ() {
	this.aZx = new ac1, this.a56 = new ac2, this.aaE = new ac3
}

function ac3() {
	var ac4 = ac5(),
		ac6 = ac7(),
		ac8 = ac9();
	this.sc = function() {
		return 123
	}, this.a3i = function() {
		bJ.f7.a0W(bm.buffer.data[183].value, 15), bG.a9(14, ac4), bG.a9(7, ac6), bG.a9(12, ac8)
	}
}

function ac5() {
	for (var eq = document.createElement("canvas"), eq = (eq.width = 24, eq.height = 24, eq.getContext("2d", {
			alpha: !1
		})), fj = (eq.fillStyle = "rgb(0,0,0)", eq.fillRect(0, 0, 24, 24), eq.font = "22px system-ui", eq.textBaseline = "middle", eq.textAlign = "center", eq.fillStyle = "rgb(255,255,255)", eq.fillText("Q", 12, 12), eq.getImageData(0, 0, 24, 24)
			.data), fg = fj.length, lx = 0, aC = 0; aC < fg; aC += 4) lx += fj[aC];
	return 16383 & lx
}

function ac7() {
	var fj = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fj + .5) / 15))
}

function ac9() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function ac2() {
	this.a57 = function() {
		for (var hE, fg = am.lY, x0 = am.ld, a4s = ah.a4s, aCm = this.aNE(), aC = 0; aC < fg; aC++) hE = x0[aC], bD.h2.kP(hE) || (a4s[hE] = aCm);
		var st = ah.st,
			k5 = ah.k5,
			k6 = ah.k6,
			a4q = ah.a4q,
			fg = aE.l2;
		for (aC = 0; aC < fg; aC++)(0 === a4q[aC] || k6[aC] < 1 || 2 * st[aC] > 3 * (k5[aC] + k6[aC])) && (a4s[aC] = 0);
		var a54 = 0;
		for (aC = 0; aC < fg; aC++) a54 += 0 < a4s[aC];
		return a54
	}, this.aNE = function() {
		return Math.min(65535, bi.kz())
	}
}

function ac1() {
	function acD(h, g8, iZ) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g8 >> (aC + iZ) % 30 & 1)) % 256
	}
	this.el = function(acA, acB) {
		var h = new Uint8Array(256);
		return function(h, acA, acB) {
				var aC, acF = 3 + (4 + acA) % 32768,
					acG = 12 + acB % 32768,
					acH = 17 + ((acA & acB) + (acA | acB) + acA) % 32768;
				for (aC = 0; aC < 256; aC++) acF = 1 + acF * acG % acH, h[aC] = acF % 256
			}(h, acA, acB), acD(h, acA, 2), acD(h, acB, 7),
			function(h) {
				var aC, g8, eP = 0;
				for (aC = 0; aC < 3e4; aC++) g8 = h[eP], h[eP] = (g8 + aC + h[(eP + aC) % 256]) % 256, eP = (g8 + aC + eP + (g8 & eP)) % 256
			}(h),
			function(h) {
				var aC, aCy = 1,
					wI = 1;
				for (aC = 0; aC < 256; aC += 2) aCy = (1 + aCy) * (h[aC] + 1) % 1073741824, wI = (1 + wI) * (h[aC + 1] + 1) % 1073741824;
				return [aCy, wI]
			}(h)
	}, this.aZy = function(acI, acJ, acK, result) {
		for (var h9 = 1 << acI, aC = 0; aC < h9; aC++)
			if (this.acL(aC, acJ, acK) === result) return aC;
		return 0
	}, this.acL = function(acM, acJ, acK) {
		for (var a1b = acJ + acM, a1k = acK + acM, g8 = a1b + a1k & 2147483647, fz = 1; fz <= 16; fz++) g8 = (g8 = (g8 ^ g8 >> fz) >>> 1 + (3 & a1b)) * (7 + (1023 & (a1b | a1k))) & 1073741823, a1k >>= 1 + (1 & (a1b >>= 1 + (1 & (g8 += 65535 &
			a1k))));
		return g8 &= 1073741823
	}
}

function ct() {
	var acN, acO, iy, acP;
	this.dr = function() {
		var aC, fn, fp, aW5, acQ, j, k, p4, ii, a0q, g8, hE, fw, fz, acT;
		if (function() {
				if (iy = !0, acP = "rgb(" + bV.a0o[0] + "," + bV.a0o[1] + "," + bV.a0o[2] + ")", bV.aR2(bV.fM)) return 1;
				return iy = !1, 0
			}()) acO = null;
		else {
			for (acN = bO.g7(96, 4), acQ = 1 === bV.fM ? (aW5 = 0, 160) : (aW5 = 128, 32), acP = "rgb(" + aW5 + "," + aW5 + "," + aW5 + ")", acO = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (acO[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fr : acN, k = aC % 2 == 0 ? acN : bV.fs + 2 * acN, acO[aC].width = j, acO[aC].height = k, a0q = (ii = (p4 = acO[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fp = acN - 1; 0 <= fp; fp--)
						for (g8 = acQ + Math.floor((fp + 1) * (aW5 - acQ) / (acN + 1)), fn = j - 1; 0 <= fn; fn--) a0q[hE = 4 * ((0 === aC ? acN - fp - 1 : fp) * j + fn)] = g8, a0q[hE + 1] = g8, a0q[hE + 2] = g8, a0q[hE + 3] = 255;
				else {
					for (fn = acN - 1; 0 <= fn; fn--)
						for (g8 = acQ + Math.floor((fn + 1) * (aW5 - acQ) / (acN + 1)), fp = k - 1 - acN; acN <= fp; fp--) a0q[hE = 4 * (fp * j + (3 === aC ? acN - fn - 1 : fn))] = g8, a0q[hE + 1] = g8, a0q[hE + 2] = g8, a0q[hE + 3] = 255;
					for (fz = 1; 0 <= fz; fz--)
						for (fn = acN - 1; 0 <= fn; fn--)
							for (fp = acN - 1; 0 <= fp; fp--) fw = (Math.pow(fn * fn + fp * fp, .5) + 1) / (acN + 1), g8 = acQ + Math.floor((1 < fw ? 1 : fw) * (aW5 - acQ)), a0q[hE = 4 * ((0 === fz ? acN - fp - 1 : fp + fz * (k - acN)) * j + (
								1 === aC ? fn : acN - fn - 1))] = g8, a0q[hE + 1] = g8, a0q[hE + 2] = g8, a0q[hE + 3] = 255
				}
				p4.putImageData(ii, 0, 0)
			}
			acT = acQ, bV.a0j.fillStyle = "rgb(" + acT + "," + acT + "," + acT + ")", bV.a0j.fillRect(0, 0, bV.fr, 1), bV.a0j.fillRect(0, bV.fs - 1, bV.fr, 1), bV.a0j.fillRect(0, 0, 1, bV.fs), bV.a0j.fillRect(bV.fr - 1, 0, 1, bV.fs)
		}
	}, this.a2K = function() {
		var fz = iy ? 0 : -acN;
		aSl(fz, fz, bV.fr - 2 * fz, bV.fs - 2 * fz, bd.acU, bd.acV, bd.acW, bd.acX) || (ys.fillStyle = acP, ys.fillRect(0, 0, i.j, i.k))
	}, this.yr = function() {
		iy || (aSk(0, -acN, bV.fr, acN, bd.acU, bd.acV, bd.acW, bd.acX) && ys.drawImage(acO[0], bd.acY, bd.acZ - acN), aSk(bV.fr, -acN, acN, bV.fs + 2 * acN, bd.acU, bd.acV, bd.acW, bd.acX) && ys.drawImage(acO[1], bd.acY + bV.fr, bd.acZ - acN),
			aSk(0, bV.fs, bV.fr, acN, bd.acU, bd.acV, bd.acW, bd.acX) && ys.drawImage(acO[2], bd.acY, bd.acZ + bV.fs), aSk(-acN, -acN, acN, bV.fs + 2 * acN, bd.acU, bd.acV, bd.acW, bd.acX) && ys.drawImage(acO[3], bd.acY - acN, bd.acZ - acN))
	}
}

function dF() {
	this.aNC = new aca, this.a2N = new acb, this.z = new acc, this.jU = new acd, this.acT = new ace, this.mx = new acf, this.kq = new acg, this.lp = new ach, this.aci = new acj, this.ack = new acl, this.n8 = new acm, this.iH = new acn, this.mO =
		new aco, this.lr = new acp, this.iK = new acq, this.n1 = new acr, this.t1 = new acs, this.dr = function() {
			this.mO.dr(), this.a2N.dr(), this.z.dr(), this.jU.dr(), this.acT.dr(), this.ack.dr(), this.n1.dr()
		}, this.yr = function() {
			this.ack.yr(), this.a2N.yr()
		}
}

function acg() {
	this.el = function(player) {
		return !!bQ.n8.n9(player) && !(bQ.z.l6[player] >= Math.max(3 * ap.performance.mG, aF.lG[aF.iQ[player]]) || !bD.h2.nA(player, aF.lE[aF.iQ[player]], 32, 0)) && (aX.aFp() ? function(player) {
			var acv = bQ.lr.aFs(),
				fg = acv.length;
			if (0 === fg) return !1;
			acv = acv[az.kJ(fg)], fg = bQ.z.mv[acv];
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
			}(player, acv) && !!bQ.iK.t0(player, fg, 1) && (bD.h2.nC(player), bQ.z.nD(player), !0)
		}(player) : !!(ap.jt.el(player) || ap.ji.el(player) || ap.jk.el(player)) && (function(player) {
			bR.gI[1] = 4, bD.h2.nC(player), bQ.z.nD(player)
		}(player), !0))
	}
}

function acr() {
	var acy = 0,
		acz = null;
	this.dr = function() {
		null === acz && (acz = new Uint16Array(2 * bQ.z.lG)), acy = 0
	}, this.ep = function(ad0, n1) {
		var ad1 = acz;
		ad1[acy++] = ad0, ad1[acy++] = n1
	}, this.n2 = function(player, n0) {
		for (var ad1 = acz, fg = acy, aC = 0; aC < fg; aC += 2)
			if (ad1[aC] === n0 && bQ.lr.ad2(ad1[aC + 1]) && player === bQ.z.mw[bR.gI[2]] >> 3) return !0;
		return !1
	}, this.ad3 = function(ad4) {
		var mx = bQ.z.mt[ad4];
		if (!(mx < 64)) {
			for (var n0 = bQ.z.mv[ad4], ad1 = acz, fg = acy, aC = fg - 2; 0 <= aC; aC -= 2)
				if (ad1[aC] === n0) {
					{
						ad9 = void 0;
						var ad9 = ad1[aC + 1];
						bQ.lr.ad2(ad9) && bQ.n1.adH(bR.gI[2])
					}
					ad1[aC] = ad1[fg - 2], ad1[aC + 1] = ad1[fg - 1], fg -= 2
				} acy = fg
		}
	}, this.ad6 = function(ad7, ad8) {
		for (var ad9 = bQ.z.mv[ad7], n0 = -1, ad1 = acz, fg = acy, aC = 1; aC < fg; aC += 2)
			if (ad1[aC] === ad9) {
				n0 = ad1[aC - 1];
				break
			} if (-1 === n0) return !1;
		if (!bQ.lr.ad2(n0)) return !1;
		var ad4 = bR.gI[2],
			mN = bQ.z.mu[ad4];
		if (ad8 === mN[mN.length - 1]) bQ.z.mu[ad7] = bQ.mO.adA(bQ.z.mu[ad7], bQ.mO.mW(mN));
		else {
			var adB = bQ.lr.adC(mN, ad8);
			if (-1 === adB) return !1;
			var adD = bQ.z.n6[ad4];
			adB === adD ? (ad4 = bP.jS(bQ.z.n7[ad4]), bQ.z.mu[ad7] = bQ.mO.adF(bQ.z.mu[ad7], mN, adB, ad8, bP.jA(mN[adB], ad8) > bP.jA(mN[adB], ad4))) : bQ.z.mu[ad7] = bQ.mO.adF(bQ.z.mu[ad7], mN, adB, ad8, adD < adB)
		}
		return !0
	}, this.adH = function(adI) {
		var mN, lx = bQ.z,
			mx = lx.mt[adI];
		return mx % 64 != 5 && (mN = lx.mu[adI], lx.adJ[adI] = 65535 - lx.adJ[adI], lx.n6[adI] = mN.length - lx.n6[adI] - 2, lx.mu[adI] = bQ.mO.mW(mN), lx.mt[adI] = mx - mx % 64 + 5, !0)
	}
}

function acm() {
	this.n9 = function(player) {
		return !!aE.data.passableWater && bQ.z.ms !== bQ.z.lG && bQ.z.l6[player] !== bQ.z.adK && 0 !== ah.hN[player].length
	}, this.sw = function(aal) {
		var mx = bR.gI[1];
		return !(4 <= mx || !bQ.lr.adL(bP.fW(aal))) && ad.fb(bP.fW(bP.jW(aal, mx)))
	}
}

function aca() {
	this.aND = function(player) {
		for (var aCC = bQ.z.aCC, vp = player << 3, aC = vp + bQ.z.l6[player] - 1; vp <= aC; aC--) this.adM(aCC[aC])
	}, this.adM = function(adN) {
		var z = bQ.z,
			adO = z.ms - 1,
			adP = z.mw[adN],
			adQ = z.adR[adN],
			adS = z.n7[adN];
		z.ms = adO, z.mw[adN] = z.mw[adO], z.n7[adN] = z.n7[adO], z.adJ[adN] = z.adJ[adO], z.aAy[adN] = z.aAy[adO], z.adR[adN] = z.adR[adO], z.mv[adN] = z.mv[adO], z.mt[adN] = z.mt[adO], z.adT[adN] = z.adT[adO], z.mu[adN] = z.mu[adO], z.n6[adN] =
			z.n6[adO], z.aCC[z.mw[adN]] = adN,
			function(aak) {
				var player = aak >> 3,
					z = bQ.z,
					fg = z.l6[player] - 1,
					adW = (player << 3) + fg;
				z.l6[player] = fg, adW !== aak && (z.aCC[aak] = z.aCC[adW], z.mw[z.aCC[aak]] = aak)
			}(adP), bQ.jU.jU[bP.jT(z.n7[adN])][z.adR[adN]] = adN, adO = bP.jT(adS), adP = adQ, adO = bQ.jU.jU[adO], z = adO.pop(), adP !== adO.length && (adO[adP] = z, bQ.z.adR[z] = adP)
	}
}

function acb() {
	var adY, adZ = 8,
		ada = null;

	function adf(a0q, fS, eP) {
		fS *= 4;
		a0q[fS] = 255, a0q[1 + fS] = 255, a0q[2 + fS] = eP, a0q[3 + fS] = 255
	}

	function adh(il, acP) {
		var fn, fp, j4, fS, adi, adj, ie = adZ,
			ii = bD.tC.getImageData(il, ie, ie),
			a0q = ii.data,
			lx = (ie >> 1) - .5,
			adl = bD.tm.a6d(acP, .5);
		for (bD.tm.a6f(acP, adl, 300) || bD.tm.a6h(acP, 100), fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) adj = (ie - 1.5) * (ie - 1.5) / 4, a0q[fS = 4 * (fp * ie + fn)] = (adi = (j4 = (j4 = fn - lx) * j4 + (j4 = fp - lx) * j4) <= (ie - 4.5) * (ie - 4.5) / 4 ? adl : acP)[0], a0q[1 + fS] = adi[1], a0q[2 + fS] = adi[
				2], a0q[3 + fS] = adj < j4 ? 0 : 255;
		il.putImageData(ii, 0, 0)
	}
	this.dr = function() {
		var eP, ie, a75, il, ii, a0q;
		(adY = adY || new Array(aE.fd)).fill(null), eP = 255, ie = adZ + 4, a75 = bD.tC.a0f(ie, ie), il = bD.tC.getContext(a75, !0), ii = bD.tC.getImageData(il, ie, ie), adf(a0q = ii.data, ie + 1, eP), adf(a0q, ie + 2, eP), adf(a0q, 2 * ie + 1,
				eP), adf(a0q, 2 * ie - 3, eP), adf(a0q, 2 * ie - 2, eP), adf(a0q, 3 * ie - 2, eP), adf(a0q, ie * (ie - 3) + 1, eP), adf(a0q, ie * (ie - 2) + 1, eP), adf(a0q, ie * (ie - 2) + 2, eP), adf(a0q, ie * (ie - 2) - 2, eP), adf(a0q, ie * (
				ie - 1) - 3, eP), adf(a0q, ie * (ie - 1) - 2, eP), il.putImageData(ii, 0, 0), ada = a75,
			function() {
				if (aE.ib)
					for (var a75 = new Array(bj.lP.length), fg = aE.fd, add = adY, aFA = bj.aFA, aC = 0; aC < fg; aC++) {
						var a9f = aFA[aC];
						a75[a9f] || (a75[a9f] = function(a9f) {
							var a75 = bD.tC.a0f(adZ, adZ),
								il = bD.tC.getContext(a75, !0),
								h = bR.gF;
							return h.set(bj.aW6[a9f]), adh(il, h), a75
						}(a9f)), add[aC] = a75[a9f]
					}
			}()
	}, this.yr = function() {
		var aC, player, adm, aGa, iQ, j3, ado, adq, adr, n7 = bQ.z.n7,
			mw = bQ.z.mw,
			aAy = bQ.z.aAy,
			adT = bQ.z.adT,
			ads = adY,
			adt = aE.fQ,
			fg = bQ.z.ms,
			adu = i.j,
			adv = i.k,
			adw = bV.fr << 4,
			fV = iv,
			fK = fV / adZ,
			o5 = jL / fV,
			o6 = jM / fV,
			j4 = (adu + jL) / fV - o5,
			j7 = (adv + jM) / fV - o6,
			il = ys;
		for (il.imageSmoothingEnabled = fV < 9, bD.tC.textAlign(il, 1), bD.tC.textBaseline(il, 1), aC = 0; aC < fg; aC++) player = mw[aC] >> 3, iQ = aAy[aC], adm = .9 + .1 * Math.log10(iQ), aGa = (j3 = n7[aC]) % adw / 16 - adm, j3 = adv * (Math
			.floor(j3 / adw) / 16 - adm - o6) / j7, ado = -2 * (adr = fV * adm) * (1 + (adq = +(player === adt)) / 8), adq = adq * adr / 4, (adr = adu * (aGa - o5) / j4) < ado || j3 < ado || adu + adq < adr || adv + adq < j3 || (aGa = 2 *
			adm * fK, ado = adm * fV, null === (adq = ads[player]) && (ads[player] = adq = function(player) {
				var a75 = bD.tC.a0f(adZ, adZ);
				return adh(bD.tC.getContext(a75, !0), ad.aBn(player)), a75
			}(player)), player === adt && (il.setTransform(aGa, 0, 0, aGa, adr - 2 * aGa, j3 - 2 * aGa), il.drawImage(ada, 0, 0)), il.setTransform(aGa, 0, 0, aGa, adr, j3), il.drawImage(adq, 0, 0), (adm = Math.floor(function(iQ) {
				if (iQ < 1e3) return .42;
				if (iQ < 1e4) return .34;
				if (iQ < 1e6) return .26;
				if (iQ < 1e8) return .19;
				return .15
			}(iQ) * ado)) < 6) || (il.setTransform(1, 0, 0, 1, 0, 0), il.fillStyle = adT[aC] ? bE.r3 : bE.qT, il.font = bD.tC.tF(1, adm), il.fillText(bD.pg.a3X(iQ), adr + ado, j3 + ado + .1 * adm));
		il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function acl() {
	var adz;
	this.dr = function() {
		if (!adz) {
			adz = new Array(bj.ae1.length);
			for (var aC = 0; aC < adz.length; aC++) adz[aC] = bS.z.ae2(20, bj.ae1[aC])
		}
	}, this.yr = function() {
		var oP = iv;
		if (!(5 <= oP)) {
			var adu = i.j,
				adv = i.k,
				o5 = jL / oP,
				o6 = jM / oP,
				oI = (adu + jL) / oP,
				oJ = (adv + jM) / oP,
				hF = -20 * oP,
				ae3 = .5 * hF,
				adw = bV.fr << 4,
				fg = bQ.z.ms,
				n7 = bQ.z.n7,
				mw = bQ.z.mw,
				aFA = bj.aFA,
				a75 = adz,
				il = ys;
			3 < oP && (il.globalAlpha = .5 * (5 - oP));
			for (var aC = 0; aC < fg; aC++) {
				var j3 = n7[aC],
					fn = adu * (j3 % adw / 16 - o5) / (oI - o5) + ae3,
					j3 = adv * (Math.floor(j3 / adw) / 16 - o6) / (oJ - o6) + ae3;
				adu < fn || adv < j3 || fn < hF || j3 < hF || (il.setTransform(oP, 0, 0, oP, fn, j3), fn = a75[aFA[mw[aC] >> 3]], il.drawImage(fn, 0, 0))
			}
			il.globalAlpha = 1, il.setTransform(oP, 0, 0, oP, 0, 0)
		}
	}
}

function acp() {
	this.ae6 = function(player, id) {
		for (var ae7 = ah.hN[player], fg = ae7.length, aC = 0; aC < fg; aC++)
			if (bP.iw(ae7[aC], id)) return !0;
		return !1
	}, this.ae8 = function(player, fS) {
		for (var jC, ae9, fK, ae7 = ah.hN[player], fg = ae7.length, j = bV.fr, aeB = bP.fo(fS), aeC = bP.fq(fS), fm = -1, min = bV.fr * bV.fr + bV.fs * bV.fs, id = ad.fO(bP.fW(fS)), aC = 0; aC < fg; aC++)(ae9 = (ae9 = aeB - (jC = (fK = ae7[
			aC]) >> 2) % j) * ae9 + (ae9 = aeC - ~~((.5 + jC) / j)) * ae9) < min && bP.iw(fK, id) && (min = ae9, fm = jC);
		return fm
	}, this.ls = function(jB, jC) {
		for (var id = ad.fO(bP.fW(jC)), ix = bP.ip, fK = bP.fW(jB), aeD = -1, aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			ad.iy(fV) && ad.fO(fV) === id && (-1 === aeD || bP.jD(bP.fU(fV), jC) < bP.jD(aeD, jC)) && (aeD = bP.fU(fV))
		}
		return aeD
	}, this.mR = function(player, fS) {
		for (var ix = bP.ip, fK = bP.fW(fS), aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			if (ad.hG(fV) && ad.a2I(player, fV)) return !0
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
	}, this.adL = function(fK) {
		if (ad.iy(fK))
			for (var ix = bP.ip, aC = 0; aC < 4; aC++)
				if (ad.fb(fK + ix[aC])) return !0;
		return !1
	}, this.o4 = function(player, id) {
		for (var vp = player << 3, vq = vp + bQ.z.l6[player], mv = bQ.z.mv, aCC = bQ.z.aCC, aC = vp; aC < vq; aC++) {
			var aCD = aCC[aC];
			if (mv[aCD] === id) return aCD
		}
		return -1
	}, this.o9 = function(player) {
		return 0 === bQ.z.l6[player] ? -1 : bQ.z.aCC[player << 3]
	}, this.a9x = function(mH, mI) {
		var fg = bQ.z.ms;
		if (fg < 1) return -1;
		for (var n7 = bQ.z.n7, aeE = 80, aVa = -1, aC = 0; aC < fg; aC++) {
			var fw = bP.j0(mH, mI, n7[aC]);
			fw < aeE && (aeE = fw, aVa = aC)
		}
		return function(aC, mH, mI) {
			if (aC < 0) return;
			var aeL = bQ.z.n7[aC],
				aeM = bP.j6(aeL),
				aeL = bP.j9(aeL),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aAy[aC]));
			return aC = Math.max(aC, bP.jN(bD.tC.vu(.02, 1.7))), bO.aSs(bP.j5(mH), bP.j8(mI), aeM, aeL, aC)
		}(aVa, mH, mI) ? aVa : -1
	}, this.ad2 = function(o2) {
		for (var fg = bQ.z.ms, mv = bQ.z.mv, aC = 0; aC < fg; aC++)
			if (mv[aC] === o2) return bR.gI[2] = aC, !0;
		return !1
	}, this.aN9 = function(player) {
		for (var vp = player << 3, vq = vp + bQ.z.l6[player], aCC = bQ.z.aCC, aAy = bQ.z.aAy, iQ = 0, aC = vp; aC < vq; aC++) iQ += aAy[aCC[aC]];
		return iQ
	}, this.aeG = function(player, adI) {
		adI = bQ.z.mu[adI];
		return this.mR(player, adI[adI.length - 1])
	}, this.aeH = function(jB, jC, fw, aeI) {
		var jF = bP.fo(jB),
			jB = bP.fq(jB),
			jH = bP.fo(jC),
			jC = bP.fq(jC),
			jH = (fw = Math.max(fw, 1), jH - jF),
			jC = jC - jB,
			j4 = bO.g7(Math.abs(jH) * aeI, fw),
			aeI = bO.g7(Math.abs(jC) * aeI, fw);
		return bP.g3(jF + Math.sign(jH) * j4, jB + Math.sign(jC) * aeI)
	}, this.adC = function(mN, fS) {
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
	}, this.aFs = function() {
		for (var aeO = md[0], mw = bQ.z.mw, ms = bQ.z.ms, h = [], aC = 0; aC < ms; aC++) bD.h2.lg(aeO, mw[aC] >> 3) && h.push(aC);
		return h
	}, this.mP = function(player, mN) {
		for (var vp = player << 3, vq = vp + bQ.z.l6[player], aCC = bQ.z.aCC, mu = bQ.z.mu, i9 = mN[0], lf = mN[mN.length - 1], aC = vp; aC < vq; aC++) {
			var hE = mu[aCC[aC]];
			if (hE[0] === i9 && hE[hE.length - 1] === lf) return !0
		}
		return !1
	}
}

function acq() {
	function aeR(player, adI) {
		adI = bP.jS(bQ.z.n7[adI]), adI = ad.fO(bP.fW(adI));
		return !!bQ.lr.ae6(player, adI)
	}

	function aeP(player) {
		return bQ.n8.n9(player) && !bQ.mO.mU()
	}
	this.iL = function(player, fS) {
		return !!aeP(player) && -1 !== (fS = function(player, fS) {
			for (var fg = bQ.z.ms, n7 = bQ.z.n7, mw = bQ.z.mw, aeE = bP.ir(), aVa = -1, aC = 0; aC < fg; aC++) {
				var fw = bP.jA(fS, bP.jS(n7[aC]));
				fw < aeE && bD.h2.lg(player, mw[aC] >> 3) && (aeE = fw, aVa = aC)
			}
			return aVa
		}(player, fS)) && !!aeR(player, fS) && (bR.gI[3] = bQ.z.mv[fS], !0)
	}, this.s7 = function(player, o2) {
		return !!aeP(player) && !!bQ.lr.ad2(o2) && !!aeR(player, bR.gI[2])
	}, this.t0 = function(player, o2, aeS) {
		return !! function(player, o2, aeS) {
			if (aeP(player) && bQ.lr.ad2(o2)) {
				o2 = bR.gI[2];
				if (bD.h2.lg(player, bQ.z.mw[o2] >> 3)) {
					if (function(player, adI) {
							return bQ.lr.aeG(player, adI) && (bR.h[0] = bQ.mO.mW(bQ.z.mu[adI]), bR.gI[1] = 6, !0)
						}(player, o2)) return 1;
					var acx = bP.jS(bQ.z.n7[o2]),
						aeW = bQ.lr.ae8(player, acx);
					if (-1 !== aeW) {
						aeW = bP.jA(aeW, acx);
						if (!(aeS && 120 < aeW)) {
							aeS = function(adI, aeX, acx) {
								var mN = bQ.z.mu[adI],
									adI = bQ.z.n6[adI],
									aeZ = bP.jA(acx, mN[adI + 1]);
								if (aeX <= aeZ) return bQ.lr.aeH(acx, mN[adI + 1], aeZ, aeX);
								for (var fw = aeX - aeZ, fg = mN.length - 1, aC = adI + 1; aC < fg; aC++) {
									var aea = bP.jA(mN[aC], mN[aC + 1]);
									if (fw <= aea) return bQ.lr.aeH(mN[aC], mN[aC + 1], aea, fw);
									fw -= aea
								}
								return mN[fg]
							}(o2, aeW, acx);
							if (bQ.lp.sx(player, aeS, 1)) return bR.gI[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o2, aeS) && (player = bR.gI[2], bQ.z.mt[player] = 64 + bQ.z.mt[player] % 64, bQ.n1.ep(o2, bQ.z.nB), !0)
	}
}

function acf() {
	function aef(player, iQ, aed, acx) {
		var kB;
		if (ad.fX(aed)) kB = aE.fd;
		else {
			if ((kB = ad.fY(aed)) === player) return void bg.h6(player, iQ - bD.h2.h5(player, iQ), 12);
			if (!bw.fZ(player, kB)) return void bB.l4.sM(player, kB, iQ)
		}
		ae.kN(player, kB) || ae.kg(player) ? (ah.h8[player].push(acx << 2), ae.ep(player, iQ, kB), aG.k9(player, !0)) : bg.h6(player, iQ, 12)
	}
	this.el = function() {
		for (var mt = bQ.z.mt, n7 = bQ.z.n7, adJ = bQ.z.adJ, aC = bQ.z.ms - 1; 0 <= aC; aC--) 65535 === adJ[aC] && function(aC, acx, iY) {
			if (6 === iY) {
				if (bQ.n1.ad6(aC, acx)) return bQ.z.n6[aC]++, bQ.z.adJ[aC] = 0, 0
			} else {
				var player = bQ.z.mw[aC] >> 3,
					aC = bQ.z.aAy[aC];
				bg.aee(player), iY < 4 ? aef(player, aC, acx + bP.io[iY] << 2, acx) : 4 === iY ? function(player, iQ, acx) {
					var aC, fk, ix = bP.ip,
						fV = bP.fW(acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.fX(fk)) return aef(player, iQ, fk, acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk) && !ad.a2I(player, fk)) return aef(player, iQ, fk, acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk)) return aef(player, iQ, fk, acx)
				}(player, aC, acx) : 5 === iY && function(player, iQ, acx) {
					var aC, fk, ix = bP.ip,
						fV = bP.fW(acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk) && ad.a2I(player, fk)) return aef(player, iQ, fk, acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk)) return aef(player, iQ, fk, acx);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.fX(fk)) return aef(player, iQ, fk, acx)
				}(player, aC, acx)
			}
			return 1
		}(aC, bP.jS(n7[aC]), mt[aC] % 64) && (bQ.n1.ad3(aC), bQ.aNC.adM(aC))
	}, this.aec = function(player, fS, iY, o2, iQ) {
		if (!(5 <= iY)) {
			var adt = aE.fQ;
			if (bD.h2.ht(adt) && bw.fZ(player, adt) && player !== adt && 0 !== ah.hN[adt].length && bD.h2.a7k(player, 5)) {
				for (var aed, fu = !1, aC = 0; aC < 4; aC++)
					if (aed = fS + bP.io[aC] << 2, ad.fb(aed) && !ad.fX(aed) && ad.fY(aed) === adt) {
						fu = !0;
						break
					} fu && (aO.aB6(719, 0), iY = iQ < 25e3 ? L(519) + " (" + bD.pg.a3X(iQ) + ") ⛵" : L(520) + " (" + bD.pg.a3X(iQ) + ") 🚢", aO.a2i(180, iY, 719, player, bE.r2, bE.qQ, -1, !0, void 0, {
					g0: 1,
					o2: o2
				}))
			}
		}
	}
}

function acc() {
	this.lG = 512, this.adK = 8, this.ms = 0, this.nB = 0, this.mw = new Uint16Array(this.lG), this.n7 = new Uint32Array(this.lG), this.adJ = new Uint16Array(this.lG), this.aAy = new Uint32Array(this.lG), this.adR = new Uint16Array(this.lG), this
		.mv = new Uint16Array(this.lG), this.mt = new Uint8Array(this.lG), this.adT = new Uint8Array(this.lG), this.mu = new Array(this.lG), this.n6 = new Uint16Array(this.lG), this.l6 = new Uint8Array(aE.fd), this.aCC = new Uint16Array(this.adK * aE
			.fd), this.dr = function() {
			this.ms = 0, this.nB = 0, this.l6.fill(0), this.mu.fill(null)
		}, this.nD = function(player) {
			var iQ = bR.gD[0],
				mx = bR.gI[1],
				mN = bR.h[0],
				aei = this.nB,
				fg = this.ms,
				aej = bP.jR(mN[0]),
				aek = this.l6[player],
				ael = (player << 3) + aek;
			this.mw[fg] = ael, this.n7[fg] = aej, this.adJ[fg] = 0, iQ < 60 && (bD.h2.h3(player, 60 - iQ), iQ = 60), this.aAy[fg] = iQ, this.adR[fg] = bQ.jU.nD(fg, bP.jT(aej)), this.mv[fg] = aei, this.mt[fg] = mx, this.adT[fg] = 0, this.mu[fg] = mN,
				this.n6[fg] = 0, this.nB = (aei + 1) % 65536, this.l6[player] = aek + 1, this.aCC[ael] = fg, this.ms++, bQ.mx.aec(player, mN[mN.length - 1], mx, aei, iQ)
		}, this.el = function() {
			bQ.mx.el();
			for (var hE = aE.fQ, eh = bQ.lr.aN9(hE), uu = (! function(uu) {
					for (var aeq, n7 = uu.n7, aAy = uu.aAy, adT = uu.adT, adJ = uu.adJ, adR = uu.adR, mu = uu.mu, n6 = uu.n6, uu = uu.ms, adw = bV.fr << 4, aC = uu - 1; 0 <= aC; aC--) {
						var aer = n7[aC],
							mN = mu[aC],
							aes = n6[aC],
							aej = bP.jR(mN[aes]),
							aet = bP.jR(mN[aes + 1]),
							aeu = aej % adw,
							aej = ~~((aej + .5) / adw),
							aew = aet % adw,
							aex = ~~((aet + .5) / adw),
							aey = aew - aeu,
							aez = aex - aej,
							fj = Math.max(~~Math.sqrt(aey * aey + aez * aez + .5), 1),
							aO6 = aAy[aC],
							aO6 = (aO6 = adT[aC] ? 4e4 : 25e4 + Math.min(20 * aO6, 3e5) + Math.min(aO6 >> 3, 5e4), adJ[aC] + Math.max(~~((aO6 + .5) / fj), 1));
						65535 <= aO6 ? aes + 2 < mN.length ? (n6[aC] = aes + 1, n7[aC] = aeq = function(aC, af0, aeu, aev, aes, fj, mN, adw) {
							af0 = Math.min(af0 - 65535, 65535);
							var mN = bP.jR(mN[aes + 2]),
								aes = mN % adw - aeu,
								mN = ~~((mN + .5) / adw) - aev,
								af3 = Math.max(~~Math.sqrt(aes * aes + mN * mN + .5), 1);
							return af0 = Math.min(Math.floor((fj * af0 + .5) / af3), 65534), bQ.z.adJ[aC] = af0, aeu + bO.g7(af0 * aes, 65535) + adw * (aev + bO.g7(af0 * mN, 65535))
						}(aC, aO6, aew, aex, aes, fj, mN, adw)) : (n7[aC] = aeq = aet, adJ[aC] = 65535) : (adJ[aC] = aO6, n7[aC] = aeq = aeu + bO.g7(aO6 * aey, 65535) + adw * (aej + bO.g7(aO6 * aez, 65535))), adR[aC] = bQ.jU.af2(adR[aC],
							aer, aeq)
					}
				}(this), ! function(uu) {
					if (bi.kz() % 2 == 1) {
						var aC, iZ, lx, g0, eq, af4, a3B, af5, i9, o5, o6, aej, af6, aDe, af8, lf, fg = uu.ms,
							n7 = uu.n7,
							mw = uu.mw,
							aAy = uu.aAy,
							adT = uu.adT,
							jU = bQ.jU.jU,
							afA = jU.length,
							afB = bQ.jU.afB,
							adw = bV.fr << 4,
							afC = aE.ib,
							aaZ = bj.fe,
							hF = (fg - 1) * (bO.g7(bi.kz(), 2) % 2);
						for (aC = 0; aC < fg; aC++)
							for (iZ = Math.abs(aC - hF), aej = n7[iZ], lx = bP.jT(aej), i9 = mw[iZ] >> 3, o5 = aej % adw, o6 = ~~((aej + .5) / adw), af8 = aAy[iZ], g0 = 0; g0 < 9; g0++)
								if (!((af4 = lx + afB[g0]) < 0 || afA <= af4))
									for (af5 = jU[af4], a3B = af5.length, eq = 0; eq < a3B; eq++) af6 = af5[eq], lf = mw[af6] >> 3, i9 == lf || afC && aaZ[i9] === aaZ[lf] && aaZ[i9] || (lf = n7[af6], (aDe = o5 - lf % adw) * aDe + (aDe = o6 -
										~~((lf + .5) / adw)) * aDe < 14400 && (lf = aAy[af6], aDe = lf <= af8 ? Math.max(1, bO.g7(lf + bO.g7(af8 - lf, 10), 10)) : Math.max(1, bO.g7(af8, 10)), aAy[af6] = Math.max(lf - aDe, 0), adT[
										af6] = 4))
					}
				}(this), ! function(uu) {
					if (bi.kz() % 5 == 3)
						for (var aAy = uu.aAy, fg = uu.ms, aC = 0; aC < fg; aC++) {
							var iQ = aAy[aC];
							aAy[aC] = Math.max(iQ - Math.max(1, iQ >> 7), 0)
						}
				}(this), this), aAy = uu.aAy, adT = uu.adT, aC = uu.ms - 1; 0 <= aC; aC--) adT[aC] = adT[aC] >> 1, 0 === aAy[aC] && (bQ.n1.ad3(aC), bQ.aNC.adM(aC));
			bg.h6(hE, eh - bQ.lr.aN9(hE), 15)
		}
}

function acd() {
	this.afD = 32, this.fn = 0, this.fp = 0, this.jV = 0, this.afE = 0, this.afF = 4, this.jU = null, this.afB = new Int16Array(9), this.dr = function() {
		this.jV = 1 + bO.g7(bV.fr - 1, this.afD), this.afE = 1 + bO.g7(bV.fs - 1, this.afD), this.jU = new Array(this.jV * this.afE), bD.tm.a6c(this.jU);
		var fn, fp, afB = this.afB,
			j = this.jV;
		for (fn = -1; fn <= 1; fn++)
			for (fp = -1; fp <= 1; fp++) afB[3 * (1 + fp) + 1 + fn] = fp * j + fn
	}, this.nD = function(afH, aC) {
		return this.jU[aC].push(afH), this.jU[aC].length - 1
	}, this.af2 = function(afI, aej, aet) {
		var afJ, afK, aej = bP.jT(aej),
			aet = bP.jT(aet);
		return aej === aet ? afI : (afJ = this.jU[aej].pop(), this.jU[aej].length === afI ? this.nD(afJ, aet) : (afK = this.jU[aej][afI], this.jU[aej][afI] = afJ, bQ.z.adR[afJ] = afI, this.nD(afK, aet)))
	}
}

function ach() {
	this.lq = function(player, afL) {
		return -1 !== afL && !!bQ.lr.mS(player, afL) && this.sx(player, afL, 0)
	}, this.sx = function(player, afL, afM) {
		player = function(player, afL, afM) {
			var aeW = bQ.lr.ae8(player, afL);
			if (-1 === aeW) return -1;
			aeW = bQ.lr.ls(aeW, afL);
			if (-1 === aeW) return -1;
			var mL = bQ.mO.mT(aeW, afL);
			if (0 <= mL) return mL;
			if (bQ.mO.mU()) return -1;
			if (0 <= (mL = bQ.mO.mT(afL, aeW))) return bQ.mO.mV(bQ.mO.mW(bQ.mO.get(mL)));
			if (aeW === afL) return bQ.mO.mV(new Uint32Array([aeW, afL]));
			if (0 <= (mL = bQ.aci.sx(aeW, afL))) return mL;
			return afM ? function(afQ, player) {
				var gN = bR.gN,
					buffer = (gN.fill(0), [afQ]),
					iq = (gN[afQ] = 1, bP.iq),
					afR = -1,
					fg = buffer.length;
				for (; - 1 === afR && fg;) {
					for (var h = [], aC = 0; aC < fg; aC++)
						for (var fS = buffer[aC], a8W = gN[fS], fj = 0; fj < 8; fj++) {
							var a0R, a51, fm = fS + iq[fj],
								fK = 4 * fm;
							ad.iy(fK) ? (a0R = gN[fm], a51 = a8W + 5 + ((1 & fj) << 1), 0 === a0R ? (h.push(fm), gN[fm] = a51) : gN[fm] = Math.min(a51, a0R)) : -1 === afR && fj % 2 == 0 && ad.a2F(player, fK) && (afR = fS)
						}
					fg = (buffer = h).length
				}
				return -1 !== afR ? function(jB, afT) {
					var iq = bP.iq,
						afU = -1,
						iY = 0,
						na = [];
					for (; afT !== jB;)(iY = function(fS, iY) {
						var gN = bR.gN,
							iq = bP.iq,
							a8W = gN[fS];
						if (a8W - gN[fS + iq[iY]] != 5 + ((1 & iY) << 1))
							for (var fz = 0; fz < 8; fz++) {
								var fj = fz + iY + 6 & 7;
								if (a8W - gN[fS + iq[fj]] == 5 + ((1 & fj) << 1)) return fj
							}
						return iY
					}(afT, iY)) !== afU && (na.push(afT), afU = iY), afT += iq[iY];
					na.push(jB);
					var mL = bQ.mO.mT(na[0], jB);
					if (0 <= mL) return mL;
					return bQ.mO.mV(new Uint32Array(na))
				}(afQ, afR) : -1
			}(afL, player) : -1
		}(player, afL, afM);
		return -1 !== player && (bR.h[0] = bQ.mO.get(player), !0)
	}
}

function acj() {
	function afW(hw, jG, jI) {
		for (var kI = Math.min(jG, jI), oN = Math.max(jG, jI), fp = kI + 1; fp < oN; fp++)
			if (!ad.iy(bP.jO(hw, fp))) return;
		return 1
	}

	function afX(hy, jF, jH) {
		for (var kI = Math.min(jF, jH), oN = Math.max(jF, jH), fn = kI + 1; fn < oN; fn++)
			if (!ad.iy(bP.jO(fn, hy))) return;
		return 1
	}

	function afY(jF, jG, jH, jI, afO, afL) {
		for (var fg = Math.min(Math.abs(jH - jF), Math.abs(jI - jG)), j4 = Math.sign(jH - jF), j7 = Math.sign(jI - jG), aC = 0; aC < fg; aC++)
			if (!ad.iy(bP.jO(jF += j4, jG += j7))) return null;
		return jF === jH ? afW(jF, jG, jI) ? new Uint32Array([afO, bP.g3(jF, jG), afL]) : null : afX(jG, jF, jH) ? new Uint32Array([afO, bP.g3(jF, jG), afL]) : null
	}
	this.sx = function(afO, afL) {
		afO = function(afO, afL) {
			var jF = bP.fo(afO),
				jG = bP.fq(afO),
				jH = bP.fo(afL),
				jI = bP.fq(afL);
			if (jF === jH) {
				if (afW(jF, jG, jI)) return new Uint32Array([afO, afL])
			} else {
				if (jG !== jI) return afY(jF, jG, jH, jI, afO, afL) || afY(jH, jI, jF, jG, afO, afL);
				if (afX(jG, jF, jH)) return new Uint32Array([afO, afL])
			}
			return null
		}(afO, afL);
		return null === afO ? -1 : bQ.mO.mV(afO)
	}
}

function aco() {
	var afZ = [];
	this.dr = function() {
		afZ = []
	}, this.mU = function() {
		return 65536 === afZ.length
	}, this.mT = function(afO, afL) {
		for (var mO = afZ, fg = mO.length, aC = 0; aC < fg; aC++) {
			var hE = mO[aC];
			if (hE[0] === afO && hE[hE.length - 1] === afL) return aC
		}
		return -1
	}, this.mW = function(mN) {
		var afa = new Uint32Array(mN.length);
		return afa.set(mN), afa.reverse()
	}, this.adA = function(i9, lf) {
		var h9 = i9.length - 1,
			afb = new Uint32Array(h9 + lf.length);
		return afb.set(i9, 0), afb.set(lf, h9), afb
	}, this.adF = function(i9, lf, zv, fS, afc) {
		afc && (zv = (lf = this.mW(lf)).length - zv - 2);
		afc = lf.subarray(zv + 1 + (fS === lf[zv + 1])), fS = new Uint32Array(i9.length + afc.length);
		return fS.set(i9, 0), fS.set(afc, i9.length), fS
	}, this.mV = function(mN) {
		return afZ.push(mN), afZ.length - 1
	}, this.get = function(aC) {
		return afZ[aC]
	}, this.mQ = function() {
		return afZ
	}, this.afe = function(afO, afL) {
		return null
	}
}

function acs() {
	this.el = function(player, o2) {
		player = bQ.lr.o4(player, o2);
		return !(player < 0 || !bQ.n1.adH(player) || (bQ.n1.ad3(player), 0))
	}
}

function ace() {
	var a2q = 32,
		a2p = new Array(2);

	function a0f(eq) {
		var fn, fp, fS, j7, j4, ie = a2q,
			a75 = bD.tC.a0f(ie, ie),
			il = bD.tC.getContext(a75, !0),
			ii = bD.tC.getImageData(il, ie, ie),
			a0q = ii.data,
			lx = (ie >> 1) - .5,
			ly = Math.sqrt(lx * lx);
		for (a0q.fill(255), fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) j4 = fn - lx, j7 = fp - lx, fS = 4 * (fp * ie + fn), j4 = 714 * (ly - Math.sqrt(j4 * j4 + j7 * j7)) / ly, a0q[2 + fS] = eq, a0q[3 + fS] = 255 < j4 ? 0 : j4;
		return il.putImageData(ii, 0, 0), a75
	}
	this.aff = -1, this.dr = function() {
		this.aff = -1, a2p[0] || (a2p[0] = a0f(255), a2p[1] = a0f(0))
	}, this.afg = function(il, fK, fn, fp, eO, aC) {
		bD.h2.ht(aE.fQ) && (il.setTransform(fK *= 4 / 3 * .625, 0, 0, fK, fn - (eO *= 4 / 3), fp - eO), il.drawImage(a2p[+(bQ.z.mv[aC] === this.aff)], 0, 0))
	}
}

function acn() {
	function aaq(fn, fg, fp, afh, aDk, g6, player) {
		if (!(fp < 1 || aDk < fp))
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (bQ.lr.adL(fK) && !bD.tm.has(afh, ad.fO(fK)) && ad.a27(fK, player)) return fK >> 2;
				fn += g6
			}
		return -1
	}

	function aau(fp, fg, fn, afh, aao, g6, player) {
		if (!(fn < 1 || aao < fn)) {
			fg = Math.max(fg, 0);
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (bQ.lr.adL(fK) && !bD.tm.has(afh, ad.fO(fK)) && ad.a27(fK, player)) return fK >> 2;
				fp += g6
			}
		}
		return -1
	}

	function aay(jB, jC, aal) {
		return -1 !== jC && (-1 === jB || bP.jD(jC, aal) < bP.jD(jB, aal)) ? jC : jB
	}
	this.iI = function(player, aal) {
		if (bQ.n8.n9(player))
			for (var aam = bP.ir(), afh = [];;) {
				var afR = function(aal, aam, afh, player) {
					for (var hw = bP.fo(aal), hy = bP.fq(aal), aao = bV.fr - 2, aDk = bV.fs - 2, aap = -1, fj = 0; fj < aam; fj++) {
						var aDj = Math.max(hw - fj, 1),
							aRM = Math.max(hy - fj, 1),
							a23 = Math.min(hw + fj, aao),
							a22 = Math.min(hy + fj, aDk),
							jB = aaq(hw, a23 - hw, hy - fj, afh, aDk, 1, player),
							jC = aaq(hw - 1, hw - aDj - 1, hy - fj, afh, aDk, -1, player),
							a23 = aaq(hw, a23 - hw, hy + fj, afh, aDk, 1, player),
							aDj = aaq(hw - 1, hw - aDj - 1, hy + fj, afh, aDk, -1, player),
							aat = aau(hy, a22 - hy - 1, hw - fj, afh, aao, 1, player),
							aav = aau(hy - 1, hy - aRM - 2, hw - fj, afh, aao, -1, player),
							a22 = aau(hy, a22 - hy - 1, hw + fj, afh, aao, 1, player),
							aRM = aau(hy - 1, hy - aRM - 2, hw + fj, afh, aao, -1, player);
						if (aap = aay(aap, jB, aal), aap = aay(aap, jC, aal), aap = aay(aap, a23, aal), aap = aay(aap, aDj, aal), aap = aay(aap, aat, aal), aap = aay(aap, aav, aal), aap = aay(aap, a22, aal), 0 <= (aap = aay(aap, aRM, aal)) &&
							fj * fj >= bP.jD(aap, aal)) return aap
					}
					return -1
				}(aal, aam, afh, player);
				if (-1 === afR) break;
				var id = ad.fO(bP.fW(afR));
				if (bQ.lr.ae6(player, id)) return !! function(player, afR, aal) {
					for (var iY = bP.jY(afR, aal), aC = 0; aC < 4; aC++) {
						var fS = bP.jW(afR, iY);
						if (ad.aMi(bP.fW(fS), player)) return bR.gI[6] = iY, 1;
						iY = (iY + 1) % 4
					}
					return
				}(player, afR, aal) && (bR.gI[7] = afR, !0);
				afh.push(id)
			}
		return !1
	}
}

function du() {
	this.aY7 = [L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(529), L(530), L(531), L(532), L(533), L(534), L(535), L(536)];
	var afk = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aGE = new Array(afk.length), this.dr = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lx = h.length;
		if (function() {
				for (var fg = afk.length, aC = 0; aC < fg; aC++) ba.aGE[aC] = afk[aC]
			}(), !(lx > afk.length))
			for (var aC = 0; aC < lx; aC++) h[aC].length && (this.aGE[aC] = h[aC])
	}, this.aY9 = function(eP, code) {
		for (var aGE = this.aGE, afm = afk, pc = (aGE[eP] = code, ""), fg = aGE.length, afn = [], aC = 0; aC < fg; aC++) afn.push(aGE[aC] === afm[aC] ? "" : aGE[aC]);
		fg--;
		for (aC = 0; aC < fg; aC++) pc += afn[aC] + ";";
		bm.rz.q5(155, pc += afn[fg])
	}, this.aY6 = function() {
		bm.rz.q5(155, ""), this.dr()
	}, this.eq = function(code, eP) {
		return code === this.aGE[eP] || code === this.aGE[eP + 1]
	}
}

function di() {
	var afo = new Array(1),
		afp = new Array(1),
		afq = 20,
		ee = 0,
		afr = !1;

	function aft() {
		afq++, bt.play()
	}
	this.dr = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				afp[aC] = 0, afo[aC] = document.createElement("audio"), afo[aC].src = src, afo[aC].setAttribute("preload", "auto"), afo[aC].setAttribute("controls", "none"), afo[aC].style.display = "none", afo[aC].onpause = function() {
					afp[aC] = 1
				}, afo[aC].oncanplaythrough = function() {
					afp[aC] = 0 === afp[aC] ? 1 : afp[aC]
				}, document.body.appendChild(afo[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			afr = !0
		}
	}, this.xy = function() {
		if (afr) {
			afr = !1;
			for (var aC = 0; 0 <= aC; aC--) afo[aC].onpause = null, afo[aC].oncanplaythrough = null, u.removeChild(document.body, afo[aC]), afo[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (afr) {
			var eh = performance.now();
			if (ee + 66 < eh)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === afp[aC]) return ee = eh, afp[aC] = 2, void afo[aC].play();
			0 < afq && (afq--, setTimeout(aft, 66))
		}
	}
}

function ch() {
	this.aCk = function() {
		var afw;
		return !(am.lY < 3 || ah.hU[md[0]] >= aE.km >> 1) && (aE.ib ? 9 !== aE.lK && (afw = af.aOj(), !(2 * af.aOk(bk.lb()) >= afw)) : function() {
			if (8 === aE.lK) return !1;
			var afw = af.aOj();
			if (2 * ah.hi[md[0]] >= afw) return !1;
			return !0
		}())
	}
}

function cH() {
	this.dr = function() {
		if (0 === aE.data.sResourcesType) {
			for (var aek = aE.l2, hi = ah.hi, aC = 0; aC < aek; aC++) hi[aC] = 512;
			var ael = aE.a1L,
				lF = aF.lF,
				iQ = aF.iQ;
			for (aC = aek; aC < ael; aC++) hi[aC] = lF[iQ[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fg = aE.a1L, hi = ah.hi, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fg; aC++) hi[aC] = sResourcesValue
		} : function() {
			for (var fg = aE.a1L, hi = ah.hi, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fg; aC++) hi[aC] = sResourcesData[aC]
		})();
		bg.na[8] = ah.hi[aE.fQ]
	}
}

function dY() {
	var aJZ = 501,
		ag4 = (this.ag1 = new Uint32Array(aJZ), this.a7p = new Uint32Array(aJZ), this.aFt = new Uint16Array(aJZ), this.ag2 = 0, this.ag3 = 0, 1),
		yB = 0;

	function ag7(self) {
		self.max.fill(0)
	}

	function ag9(self, aC) {
		self.max[0] = Math.max(self.ag1[aC], self.max[0]), self.max[1] = Math.max(self.a7p[aC], self.max[1]), self.max[2] = Math.max(self.aFt[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.ag5 = 0, this.na = new Array(21), this.ag6 = null, this.ds = function() {
		this.ag6 = [L(537), L(538), L(539), L(540), L(541), L(542), L(543), L(544), L(362), L(363), L(545), L(546), L(547), L(548), "", L(549), L(550), L(551), L(320), L(552), L(553)]
	}, this.dr = function() {
		this.ag2 = 0, this.ag3 = 0, ag4 = 1, this.ag5 = 0, yB = 0, ag7(this), this.na.fill(0)
	}, this.aYH = function() {
		return 2 <= this.ag2 && !this.ag3
	}, this.aAv = function() {
		0 !== bi.kz() && (this.ag3 = 1, bh.iT) && bh.ub()
	}, this.su = function(player, jK) {
		bD.h2.a7j(player) && (this.na[0] += jK + 1, this.na[1]++, this.na[12] += bR.gD[1])
	}, this.sP = function(player, s2) {
		__fx.donationsTracker.logDonation(player, s2, bR.gD[0], aX.a9P());
		player === aE.fQ && (aO.sP(bR.gD[0], bR.gD[1], s2), this.na[12] += bR.gD[1], this.na[16] += bR.gD[0]), s2 === aE.fQ && (aO.aBA(bR.gD[0], player), this.na[10] += bR.gD[0])
	}, this.sy = function(player) {
		bD.h2.a7j(player) && (this.na[2]++, this.na[12] += bR.gD[1])
	}, this.t6 = function(player) {
		bD.h2.a7j(player) && (this.na[19]++, this.na[12] += bR.gD[1])
	}, this.aee = function(player) {
		bD.h2.a7j(player) && this.na[20]++
	}, this.h6 = function(player, a8W, eP) {
		bD.h2.a7j(player) && (this.na[eP] += a8W)
	}, this.el = function() {
		var self;
		this.ag5 || 0 < yB-- || ((self = this).ag1[self.ag2] = ah.hU[aE.fQ], self.a7p[self.ag2] = ah.hi[aE.fQ], self.aFt[self.ag2] = af.aFu(aE.fQ), ag9(self, self.ag2), self.ag2++, self.ag2 === aJZ && function(self) {
			ag7(self), ag9(self, 0), self.ag2 = 1 + bO.g7(aJZ, 2);
			for (var aC = 1; aC < self.ag2; aC++) self.ag1[aC] = self.ag1[2 * aC], self.a7p[aC] = self.a7p[2 * aC], self.aFt[aC] = self.aFt[2 * aC], ag9(self, aC);
			ag4 *= 2
		}(self), yB = ag4 - 1, bh.nR(), 0 === ah.ne[aE.fQ] && (self.ag5 = bi.kz()))
	}
}

function dZ() {
	this.j = 0, this.k = 0, this.vc = 0, this.vd = 0, this.agB = 0, this.agC = 0, this.aCy = 0, this.wI = 0;
	var agE = this.agD = 0;
	this.agF = 0, this.agG = 0, this.agH = 0, this.aCJ = 0, this.eP = 0, this.aFU = null, this.iT = !1, this.agI = -1, this.agJ = !1, this.agK = [0, 0], this.ds = function() {
		this.aFU = [L(554), L(128, 0, "Balance"), L(127, 0, "Interest"), L(555)]
	}, this.dr = function() {
		this.iT = !1, this.agI = -1, this.agJ = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fj = a1.a2.it() && i.j < i.k ? 1 : a1.a2.it() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fj * this.j), this.j -= a1.a2.it() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCJ = Math.floor(this.k / 150), this.aCJ = Math.max(this.aCJ, 1.5), this.vc = Math.floor(1 + .02 * this
			.j), this.vd = Math.floor(1 + .04 * this.j), this.aCy = this.vd, agE = Math.floor(.75 * this.aCy), this.wI = Math.floor(1 + .075 * this.j), this.agF = Math.floor(1 + .1125 * this.j), this.agG = Math.floor(this.j * (a1.a2.it() ? .03 :
				.029)), this.agG = Math.max(this.agG, 4), this.agH = Math.floor(.035 * this.j), this.agH = Math.max(this.agH, 4), this.agD = this.k - 2 * this.aCy - this.wI - this.agF, this.iT && this.agL()
	}, this.hu = function(mH, mI) {
		var a1O, a1N;
		return !!this.iT && (a1N = mH, a1O = mI, mH -= bO.g7(i.j - this.j, 2), mI -= bO.g7(i.k - this.k, 2), mH < 0 || mI < 0 || mH >= this.j || mI >= this.k || mH >= this.j - this.agF && mI < this.agF ? -1 !== aN.hu(a1N, a1O) || bF.hu(a1N,
			a1O) || this.ub() : mI < this.agF || (mI < this.k - this.wI ? (this.agJ = !0, this.agI = (mH - 2 * this.vc - this.agB) / this.agC, 3 !== this.eP && (bi.dy = !0)) : (a1N = (a1N = Math.floor(mH / (this.j / this.aFU.length))) < 0 ?
				0 : a1N >= this.aFU.length ? this.aFU.length - 1 : a1N) !== this.eP && (this.eP = a1N, this.agL(), bi.dy = !0)), !0)
	}, this.a5m = function(mH, mI) {
		return this.agK[0] = mH, this.agK[1] = mI, !(!this.iT || !this.agJ || (mH -= bO.g7(i.j - this.j, 2), mI = this.agI, this.agI = (mH - 2 * this.vc - this.agB) / this.agC, (0 <= this.agI && this.agI <= 1 || 0 <= mI && mI <= 1) && (bi.dy = !
			0), 0))
	}, this.a6B = function() {
		this.agJ && (this.agJ = !1)
	}, this.a6N = function() {
		this.iT ? this.ub() : this.show()
	}, this.show = function() {
		bg.aYH() && (this.iT = !0, this.agL())
	}, this.ub = function() {
		this.iT = !1, this.agI = -1, bi.dy = !0
	}, this.agL = function() {
		this.eP < 2 ? this.agB = aR.measureText(bD.pg.a3X(bg.max[this.eP]), bD.tC.tF(0, this.agG)) : 2 === this.eP && (this.agB = aR.measureText(bD.pg.a8P(6, 2), bD.tC.tF(0, this.agG))), this.agC = this.j - 2 * this.vc - this.agB - this.vd
	}, this.nR = function() {
		this.iT && this.agL()
	}, this.yr = function() {
		this.iT && this.aDF()
	}, this.aDF = function() {
		var fn = bO.g7(i.j - this.j, 2),
			fp = bO.g7(i.k - this.k, 2);
		ys.setTransform(1, 0, 0, 1, fn, fp), ys.fillStyle = bE.qQ, ys.fillRect(0, this.agF, this.j, this.k - this.agF), this.agM(), this.aWv(), ys.strokeRect(0, 0, this.j, this.k), bD.tC.textAlign(ys, 2), ys.font = bD.tC.tF(0, this.agG), 0 ===
			this.eP ? this.agN(bg.ag1, fn, fp) : 1 === this.eP ? this.agN(bg.a7p, fn, fp) : 2 === this.eP ? this.agO(fn, fp) : 3 === this.eP && (this.agP(fn, fp), this.agQ(fn, fp)), aN.aAF(Math.floor(fn + this.j - .725 * this.agF), Math.floor(
				fp + .275 * this.agF), Math.floor(.45 * this.agF)), ys.setTransform(1, 0, 0, 1, 0, 0)
	}, this.agM = function() {
		var aC, eh;
		for (ys.lineWidth = this.aCJ, bD.tC.textBaseline(ys, 1), bD.tC.textAlign(ys, 1), ys.strokeStyle = bE.qT, ys.font = bD.tC.tF(1, this.agH), eh = this.j / this.aFU.length, ys.fillStyle = bE.qp, ys.fillRect(this.eP * eh, this.k - this.wI, eh,
				this.wI), ys.fillStyle = bE.qT, ys.fillRect(0, this.k - this.wI - .5 * this.aCJ, this.j, this.aCJ), aC = 1; aC <= 3; aC++) ys.fillRect(aC * eh, this.k - this.wI, this.aCJ, this.wI);
		for (aC = this.aFU.length - 1; 0 <= aC; aC--) ys.fillText(bD.p4.a7J(this.aFU[aC], 0, .9 * eh), (aC + .5) * eh, this.k - .46 * this.wI)
	}, this.aWv = function() {
		ys.fillStyle = bE.rH, ys.fillRect(0, 0, this.j, this.agF), ys.fillStyle = bE.qT, ys.fillRect(0, this.agF - .5 * this.aCJ, this.j, this.aCJ), ys.font = bD.tC.tF(1, .39 * this.agF), ys.fillText(bD.p4.a7J(L(556), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.agF))
	}, this.agN = function(h, fn, fp) {
		var lx = bg.max[this.eP],
			a6e = (ys.setTransform(1, 0, 0, 1, fn + 2 * this.vc + this.agB, fp + this.aCy + this.agF), ys.lineWidth = 2, this.agD / Math.sqrt(lx));
		ys.beginPath(), ys.moveTo(this.agC, this.agD - a6e * Math.sqrt(h[bg.ag2 - 1]));
		for (var aC = bg.ag2 - 2; 0 <= aC; aC--) ys.lineTo(aC * this.agC / (bg.ag2 - 1), this.agD - a6e * Math.sqrt(h[aC]));
		ys.stroke();
		fn = this.aAF(h, a6e, .5);
		fn < .95 && ys.fillText(bD.pg.a3X(lx), -this.vc, 0), .05 < Math.abs(fn - .5) && ys.fillText(bD.pg.a3X(Math.floor(lx / 4)), -this.vc, Math.floor(this.agD / 2)), .05 < fn && ys.fillText("0", -this.vc, this.agD)
	}, this.agO = function(fn, fp) {
		ys.setTransform(1, 0, 0, 1, fn + 2 * this.vc + this.agB, fp + this.aCy + this.agF), ys.lineWidth = 2;
		var a6e = this.agD / Math.max(bg.max[this.eP], 1);
		ys.beginPath(), ys.moveTo(this.agC, this.agD - a6e * bg.aFt[bg.ag2 - 1]);
		for (var aC = bg.ag2 - 2; 0 <= aC; aC--) ys.lineTo(aC * this.agC / (bg.ag2 - 1), this.agD - a6e * bg.aFt[aC]);
		ys.stroke();
		fn = this.aAF(bg.aFt, a6e, 1), fp = bg.max[this.eP] / 100;
		fn < .95 && ys.fillText(bD.pg.a8P(fp, 2), -this.vc, 0), .05 < Math.abs(fn - .5) && ys.fillText(bD.pg.a8P(fp / 2, 2), -this.vc, Math.floor(this.agD / 2)), .05 < fn && ys.fillText(bD.pg.a8P(0, 2), -this.vc, this.agD)
	}, this.agP = function(fn, fp) {
		ys.setTransform(1, 0, 0, 1, fn + .34 * this.j, fp + 2 * agE + this.agF), bD.tC.textAlign(ys, 2);
		for (var aFC = this.k - 4 * agE - this.wI - this.agF, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) ys.fillText(bD.p4.a7J(bg.ag6[h[aC]], 0, .31 * this.j), 0, aC * aFC / 9);
		var g8 = bg.na;
		for (ys.setTransform(1, 0, 0, 1, fn + .39 * this.j, fp + 2 * agE + this.agF), bD.tC.textAlign(ys, 0), ys.fillText(bD.pg.a8P(100 * g8[0] / (1024 * Math.max(g8[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) ys.fillText(g8[h[aC]].toString(), 0,
			aC * aFC / 9);
		ys.fillText(bD.pg.a8P(100 * (1 - ah.hU[aE.fQ] / g8[7]), 0), 0, aFC)
	}, this.agQ = function(fn, fp) {
		ys.setTransform(1, 0, 0, 1, fn + .79 * this.j, fp + 2 * agE + this.agF), bD.tC.textAlign(ys, 2);
		var aC, aFC = this.k - 4 * agE - this.wI - this.agF;
		for (ys.fillStyle = bE.qk, aC = 2; 0 <= aC; aC--) ys.fillText(bD.p4.a7J(bg.ag6[aC + 8], 0, .31 * this.j), 0, aC * aFC / 9);
		ys.fillText(bD.p4.a7J(bg.ag6[18], 0, .31 * this.j), 0, 3 * aFC / 9), ys.fillStyle = bE.qj, ys.fillText(bD.p4.a7J(bg.ag6[11], 0, .31 * this.j), 0, 4 * aFC / 9), ys.fillStyle = bE.r4, ys.fillText(bD.p4.a7J(bg.ag6[13], 0, .31 * this.j), 0,
				5 * aFC / 9), ys.fillText(bD.p4.a7J(bg.ag6[15], 0, .31 * this.j), 0, 6 * aFC / 9), ys.fillText(bD.p4.a7J(bg.ag6[16], 0, .31 * this.j), 0, 7 * aFC / 9), ys.fillText(bD.p4.a7J(bg.ag6[12], 0, .31 * this.j), 0, 8 * aFC / 9), ys
			.fillStyle = bE.r3, ys.fillText(bD.p4.a7J(bg.ag6[17], 0, .31 * this.j), 0, aFC), ys.fillStyle = bE.qk;
		var g8 = bg.na,
			aKD = g8[8] + g8[9] + g8[10] + g8[18],
			aKD = bD.pg.a3X(aKD),
			aVf = ys.measureText(aKD).width,
			fn = (ys.setTransform(1, 0, 0, 1, fn + .83 * this.j + aVf, fp + 2 * agE + this.agF), ys.fillText(bD.pg.a3X(g8[8]), 0, 0), ys.fillText(bD.pg.a3X(g8[9]), 0, aFC / 9), ys.fillText(bD.pg.a3X(g8[10]), 0, 2 * aFC / 9), ys.fillText(bD.pg
				.a3X(g8[18]), 0, 3 * aFC / 9), ys.fillStyle = bE.qj, ys.fillText(aKD, 0, 4 * aFC / 9), ys.fillStyle = bE.r4, ys.fillText(bD.pg.a3X(g8[13]), 0, 5 * aFC / 9), ys.fillText(bD.pg.a3X(g8[15]), 0, 6 * aFC / 9), ys.fillText(bD.pg
				.a3X(g8[16]), 0, 7 * aFC / 9), ys.fillText(bD.pg.a3X(g8[12]), 0, 8 * aFC / 9), g8[12] + g8[13] + g8[15] + g8[16]);
		ys.fillStyle = bE.r3, ys.fillText(bD.pg.a3X(fn), 0, aFC), ys.fillStyle = bE.qT
	}, this.aAF = function(h, a6e, aDs) {
		var aC, e, gP;
		return this.agI < 0 || 1 < this.agI ? .25 : (aC = this.agI * (bg.ag2 - 1), gP = h[e = Math.floor(aC)], gP += (aC - e) * (h[e < bg.ag2 - 1 ? e + 1 : e] - gP), ys.strokeStyle = bE.qW, .04 < this.agI && this.agS(0, this.agD - a6e * Math.pow(
				gP, aDs), aC * this.agC / (bg.ag2 - 1), this.agD - a6e * Math.pow(gP, aDs)), .04 < gP / bg.max[this.eP] && this.agS(aC * this.agC / (bg.ag2 - 1), this.agD, aC * this.agC / (bg.ag2 - 1), this.agD - a6e * Math.pow(gP, aDs)), ys
			.fillStyle = bE.r6, ys.beginPath(), ys.arc(aC * this.agC / (bg.ag2 - 1), this.agD - a6e * Math.pow(gP, aDs), Math.max(2, .014 * this.k), 0, 2 * Math.PI), ys.fill(), h = this.agI * bi.aFv, h = 0 === ah.ne[aE.fQ] ? Math.floor(h * bg
				.ag5) : Math.floor(h * bi.kz()), ys.fillStyle = bE.qT, ys.fillText(1 === aDs ? bD.pg.a8P(gP / 100, 2) : bD.pg.a3X(Math.floor(gP)), -this.vc, this.agD - a6e * Math.pow(gP, aDs)), bD.tC.textAlign(ys, 1), ys.fillText(aX.aFi(h),
				aC * this.agC / (bg.ag2 - 1), this.agD + this.agG - (a1.a2.it() ? 2 : 0) - this.aCJ), bD.tC.textAlign(ys, 2), a6e * Math.pow(gP, aDs) / this.agD)
	}, this.agS = function(o5, o6, oI, oJ) {
		ys.beginPath(), ys.moveTo(o5, o6), ys.lineTo(oI, oJ), ys.stroke()
	}
}

function c5() {
	this.agT = "https://territorial.io/changelog", this.aYI = "https://territorial.io/terms", this.aYJ = "https://territorial.io/privacy", this.agU = "https://territorial.io/tutorial", this.agV = "https://territorial.io/players", this.agW =
		"https://territorial.io/clans", this.agX = "https://territorial.io/clan-results", this.aUo = "https://patreon.com/c/territorial", this.aHK = "https://play.google.com/store/apps/details?id=territorial.io", this.a5L =
		"https://apps.apple.com/app/id1581110913", this.aHL = "https://discord.gg/pthqvpTXmh", this.aHM = "https://www.instagram.com/davidtschacher/", this.a35 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dH() {
	this.z = new agY, this.a2N = new agZ, this.dr = function() {
		this.z.dr()
	}, this.el = function() {
		0 !== this.z.wz && this.z.wz--
	}
}

function agZ() {
	this.yr = function() {
		if (0 !== bS.z.wz && (ys.globalAlpha = Math.min(bS.z.wz / 580, 1), ys.drawImage(bS.z.agc, 1 + aT.a2L(), 1 + aT.a2M()), ys.globalAlpha = 1, aE.i5)) {
			for (var o5 = jL / iv, o6 = jM / iv, oI = (i.j + jL) / iv, oJ = (i.k + jM) / iv, hF = bS.z.agd * iv, age = bS.z.age, aC = aE.l2 - 1; 0 <= aC; aC--) ! function(aC, hF, o5, o6, oI, oJ, age) {
				var highlight;
				0 === ah.ne[aC] || 0 === ah.hU[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hF *= 2), oI = i.j * ((ah.ja[aC] + ah.jb[aC] + 1) / 2 - o5) / (oI - o5) - .5 * hF, o5 = i.k * ((ah.jc[
					aC] + ah.jd[aC] + 1) / 2 - o6) / (oJ - o6) - .5 * hF, oI > i.j) || o5 > i.k || oI < -hF || o5 < -hF || (highlight ? ys.setTransform(2 * iv, 0, 0, 2 * iv, oI, o5) : ys.setTransform(iv, 0, 0, iv, oI, o5), ys.drawImage(
					age[aE.ib ? bj.fe[aC] : 1], 0, 0))
			}(aC, hF, o5, o6, oI, oJ, age);
			ys.setTransform(iv, 0, 0, iv, 0, 0)
		}
	}
}

function agY() {
	this.agd = 28, this.wz = 0, this.agc = null;
	var agg = this.age = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function agk(ie, agl) {
		var fn, fp, fS, j4, a75 = bD.tC.a0f(ie, ie),
			il = bD.tC.getContext(a75, !0),
			ii = bD.tC.getImageData(il, ie, ie),
			a0q = ii.data,
			lx = (ie >> 1) - .5,
			agm = .5 + lx;
		for (agm *= agm, fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) j4 = (j4 = fn - lx) * j4 + (j4 = fp - lx) * j4, a0q[fS = 4 * (fp * ie + fn)] = agl[0], a0q[1 + fS] = agl[1], a0q[2 + fS] = agl[2], a0q[3 + fS] = (agm - j4) * agl[3] / agm;
		return il.putImageData(ii, 0, 0), a75
	}

	function afg(aC, il, a75, ie) {
		var highlight, fn, fp;
		0 !== ah.ne[aC] && 0 !== ah.hU[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ie *= 2), fn = ah.ja[aC] + ah.jb[aC] + 1 - ie - 2 >> 1, fp = ah.jc[aC] + ah.jd[aC] + 1 - ie - 2 >> 1, highlight ? il
			.drawImage(a75[aE.ib ? 9 === aE.lK && 5 === aF.iQ[aC] ? 3 : bj.fe[aC] : aC < aE.l2 ? 1 : 0], fn, fp, ie, ie) : il.drawImage(a75[aE.ib ? 9 === aE.lK && 5 === aF.iQ[aC] ? 3 : bj.fe[aC] : aC < aE.l2 ? 1 : 0], fn, fp))
	}
	this.dr = function() {
		var uu;
		this.wz = 700,
			function(uu) {
				var ie = uu.agd;
				if (uu.age = [], agg = [], aE.ib) {
					for (var aC = 0; aC <= aE.a1S; aC++) uu.age.push(agk(ie, bj.ae1[bj.lP[aC]])), agg.push(agk(ie >> 1, bj.ae1[bj.lP[aC]]));
					9 === aE.lK && agg.push(agk(ie, bj.ae1[1]))
				} else uu.age.push(agk(ie, bj.ae1[7])), uu.age.push(agk(ie, bj.ae1[4])), agg.push(agk(ie >> 1, bj.ae1[7]))
			}(this),
			function(uu, agq) {
				var aC, agc = uu.agc,
					il = bD.tC.getContext(agc, !0),
					fg = aE.fd,
					ie = uu.agd >> 1;
				il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0), agq && il.clearRect(0, 0, agc.width, agc.height);
				if (9 === aE.lK) {
					ie <<= 1;
					uu = b0.lT[5];
					for (aC = fg - uu; aC < fg; aC++) afg(aC, il, agg, ie);
					fg -= uu, ie >>= 1
				}
				for (aC = aE.l2; aC < fg; aC++) afg(aC, il, agg, ie)
			}(this, null !== (uu = this).agc && uu.agc.width === bV.fr - 2 && uu.agc.height === bV.fs - 2 || (uu.agc = bD.tC.a0f(bV.fr - 2, bV.fs - 2), !1)), aE.i5 || this.a8h()
	}, this.ae2 = agk, this.a8h = function() {
		for (var fg = aE.l2, ie = this.agd, age = this.age, il = bD.tC.getContext(this.agc, !0), aC = 0; aC < fg; aC++) afg(aC, il, age, ie)
	}
}

function dI() {
	function agt() {
		8 === aE.lK && 1 === aE.a4E && bU.a3s.a4D()
	}

	function ags(player) {
		aE.i5 ? (al.aN2(player), am.aQU(), aE.lM && aE.sq.el()) : b4.aHi(player)
	}
	this.sI = function(player) {
		aO.a4S(player, player === aE.fQ ? 21 : 22), ags(player), agt()
	}, this.sn = function(player) {
		1 === aE.a4E && 0 !== ah.ne[player] && 2 !== ah.a7f[player] && ags(player), aE.a4H--, aE.a4G--, aO.a4S(player, 4), bD.h2.hs(2) && aX.nQ(!0), agt()
	}
}

function dS() {
	this.aag = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aF9 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qT, "rgb(170,170,170)"
	], this.agu = [bE.qT, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qT, bE.qK], this.agv = [bE.qK, bE.qT, bE.qT, bE.qT, bE.qK, bE.qK, bE.qK, bE.qK, bE.qT];
	var aQe = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aPx = ["rgba(" + aQe[0] + ",", "rgba(" + aQe[1] + ",", "rgba(" + aQe[2] + ",", "rgba(" + aQe[3] + ",", "rgba(" + aQe[4] + ",", "rgba(" + aQe[5] + ",", "rgba(" + aQe[6] + ",", "rgba(" + aQe[7] + ",", "rgba(" + aQe[8] + ",", "rgba(" + aQe[9] +
			","
		], this.aPy = ["rgb(" + aQe[0] + ")", "rgb(" + aQe[1] + ")", "rgb(" + aQe[2] + ")", "rgb(" + aQe[3] + ")", "rgb(" + aQe[4] + ")", "rgb(" + aQe[5] + ")", "rgb(" + aQe[6] + ")", "rgb(" + aQe[7] + ")", "rgb(" + aQe[8] + ")", "rgb(" + aQe[9] +
			")"
		], this.a4b = null, this.ae1 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aW6 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lP = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fe = new Uint8Array(aE.fd), this.aFA = new Uint8Array(aE.fd), this.a1Y = new Uint16Array(aE.fd), this.a1Z = new Uint16Array(this.lP.length + 1), this.a1a = new Uint16Array(this.lP.length), this
		.ds = function() {
			this.a4b = [L(557), L(558), L(559), L(560), L(561), L(562), L(563), L(564), L(565)]
		}, this.dr = function() {
			if (this.fe.fill(0), this.aFA.fill(0), this.agw(), aE.ib) {
				if (9 === aE.lK) {
					for (var fe = bj.fe, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fe[aC] = 1;
					var fg = aE.fd;
					for (aC = aE.data.teamPlayerCount[7]; aC < fg; aC++) fe[aC] = 2;
					bj.lP[1] = 7, bj.lP[2] = 8
				} else aE.lM ? function() {
					var aW6 = bj.aW6,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l2 - 1; 0 <= aC; aC--) colorsData[aC] = az.kJ(262144);
					var ah7 = 0,
						fw = 768,
						aW5 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fj = 0, g0 = 0; g0 < 3; g0++) fj += Math.abs(aW6[aC][g0] - aW5[g0]);
							fj < fw && (ah7 = aC, fw = fj)
						} var ah8 = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) ah8[aC] = teamPlayerCount[aC];
					var lP = bj.lP,
						ah9 = new Uint8Array(9),
						h9 = (lP[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) ah8[aC] && (ah9[aC] = h9, lP[h9++] = aC);
					var kI = aE.l2,
						fe = bj.fe;
					ah8[ah7] ? (ah8[ah7]--, fe[0] = ah9[ah7]) : kI = 0;
					var eq = 0;
					for (aC = kI; aC < aE.a1L; aC++) {
						var iZ = lP[eq];
						if (ah8[iZ]) ah8[iZ]--, fe[aC] = ah9[iZ];
						else if (aC--, 9 <= ++eq) return console.log("error 325")
					}
				}() : this.el();
				! function() {
					for (var fg = aE.fd, a1Y = bj.a1Y, a1Z = bj.a1Z, a1a = bj.a1a, fe = bj.fe, lP = bj.lP, a1R = lP.length, buffer = new Array(a1R), aC = 0; aC < a1R; aC++) buffer[aC] = [];
					for (aC = 0; aC < fg; aC++) buffer[lP[fe[aC]]].push(aC);
					for (aC = 1; aC <= a1R; aC++) a1Z[aC] = a1Z[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a1R; aC++)
						for (var h9 = buffer[aC].length, lx = a1Z[aC], iZ = 0; iZ < h9; iZ++) a1Y[iZ + lx] = buffer[aC][iZ];
					var l2 = aE.l2;
					for (aC = 0; aC < a1R; aC++)
						for (h9 = buffer[aC].length, lx = a1Z[aC], iZ = 0; iZ < h9; iZ++)
							if (a1Y[iZ + lx] >= l2) {
								a1a[aC] = iZ;
								break
							}
				}(), ! function() {
					for (var fg = aE.fd, fe = bj.fe, aFA = bj.aFA, lP = bj.lP, aC = 0; aC < fg; aC++) aFA[aC] = lP[fe[aC]];
					9 === aE.lK && aFA.fill(1, fg - b0.lT[5])
				}()
			}
		}, this.agw = function() {
			for (var aC = this.lP.length - 1; 0 <= aC; aC--) this.lP[aC] = aC
		}, this.el = function() {
			var a3M = new Uint8Array(aE.l2),
				a3N = new Uint8Array(aE.l2),
				ah1 = new Uint16Array(8),
				ah2 = new Uint16Array(this.lP.length);
			this.ah3(a3M, a3N, ah1, 1), this.aMY(ah1), this.ah4(ah2, a3M, a3N), this.ah5(a3M, a3N, ah2), this.ah6()
		}, this.ah3 = function(a3M, a3N, ah8, ahA) {
			for (var g0, e, ahB, fg = this.lP.length - ahA, h = new Uint16Array(fg), aW6 = this.aW6, colorsData = aE.data.colorsData, aC = aE.l2 - 1; 0 <= aC; aC--) {
				for (g0 = fg; ahA <= g0; g0--) h[g0 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aW6[g0][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aW6[g0][1]) + Math.abs(4 * (63 & colorsData[aC]) - aW6[g0][2]);
				for (ahB = 768, g0 = fg - 1; 0 <= g0; g0--) h[e = (g0 + aC) % fg] < ahB && (ahB = h[e], a3M[aC] = e);
				for (ah8[a3M[aC]] += 4, ahB = 768, g0 = fg - 1; 0 <= g0; g0--) h[e = (g0 + aC) % fg] < ahB && e !== a3M[aC] && (ahB = h[e], a3N[aC] = e);
				ah8[a3N[aC]]++
			}
		}, this.aMY = function(ah8) {
			for (var g0, lz, fg = this.lP.length - 1, aC = fg; 0 <= aC; aC--) this.lP[aC] = aC;
			for (aC = fg - 1; 0 <= aC; aC--) ah8[aC]++;
			for (aC = 1; aC <= fg; aC++) {
				for (lz = 0, g0 = 1; g0 < fg; g0++) ah8[g0] > ah8[lz] && (lz = g0);
				ah8[lz] = 0, this.lP[aC] = lz + 1
			}
		}, this.ah4 = function(ah2, a3M, a3N) {
			var g0, a4z, eq, fj, e, oH, vt, ahC = this.lP.length - 1,
				u6 = new Uint16Array(ahC),
				ahD = [],
				ahE = 0,
				a4y = [],
				ahF = [];
			loop: for (var aC = 0; aC < aE.l2; aC++)
				if (null !== (a4z = bD.pg.pu(ah.a4x[aC]))) {
					for (g0 = a4y.length - 1; 0 <= g0; g0--)
						if (a4z === a4y[g0]) {
							ahF[g0].push(aC), ahE = Math.max(ahE, ahF[g0].length);
							continue loop
						} a4y.push(a4z), ahD.push(!1), ahF.push([aC]), ahE = Math.max(ahE, 1)
				}
			for (; 2 < aE.a1S && ahE > bO.g7(aE.l2, aE.a1S);) aE.a1S--, aE.lK--;
			for (g0 = a4y.length - 1; 0 <= g0; g0--) {
				for (fj = -1, eq = a4y.length - 1; 0 <= eq; eq--) !ahD[eq] && (-1 === fj || ahF[eq].length > ahF[fj].length) && (fj = eq);
				for (eq = ahC - 1; 0 <= eq; eq--) u6[eq] = 1;
				for (eq = ahF[fj].length - 1; 0 <= eq; eq--) u6[a3M[ahF[fj][eq]]] += 3, u6[a3N[ahF[fj][eq]]]++;
				for (aC = ahC - 1; 0 <= aC; aC--) {
					for (e = fj % ahC, eq = ahC - 1; 0 <= eq; eq--) u6[eq] > u6[e] && (e = eq);
					for (oH = -1, eq = aE.a1S; 0 < eq; eq--)
						if (this.lP[eq] === e + 1) {
							oH = eq;
							break
						} if (u6[e] = 0, -1 !== oH) {
						for (vt = 0, eq = aE.a1S; 0 < eq; eq--) ah2[oH] > ah2[eq] && vt++;
						if (vt !== aE.a1S - 1) {
							for (eq = ahF[fj].length - 1; 0 <= eq; eq--) ah2[oH]++, this.fe[ahF[fj][eq]] = oH;
							break
						}
					}
				}
				ahD[fj] = !0
			}
		}, this.ah5 = function(a3M, a3N, ah2) {
			for (var aC, j3, fg = this.lP.length - 1, border = bO.g7(aE.l2, aE.a1S), ahG = (0 < aE.l2 % aE.a1S && border++, new Uint8Array(1 + fg)), g0 = fg; 1 <= g0; g0--) ahG[this.lP[g0]] = g0;
			for (aC = 0; aC < aE.l2; aC++) j3 = ahG[a3M[aC] + 1], 0 === this.fe[aC] && j3 <= aE.a1S && ah2[j3] < border && (ah2[j3]++, this.fe[aC] = j3);
			for (aC = 0; aC < aE.l2; aC++) j3 = ahG[a3N[aC] + 1], 0 === this.fe[aC] && j3 <= aE.a1S && ah2[j3] < border && (ah2[j3]++, this.fe[aC] = j3);
			for (g0 = aE.a1S; 1 <= g0; g0--)
				for (aC = aE.l2 - 1; 0 <= aC && !(ah2[g0] >= border); aC--) 0 === this.fe[aC] && (ah2[g0]++, this.fe[aC] = g0)
		}, this.ah6 = function() {
			if (aE.a1S < 8) aE.a1S++, aE.lK++, aE.a1T = 1;
			else
				for (var aC = aE.l2; aC < aE.fd; aC++) this.fe[aC] = 1 + aC % aE.a1S
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
			for (var ahH = !1, ahI = !1, fj = 3; 0 <= fj; fj--) {
				var hE = hM[player][aC] + fi[fj];
				if (ad.aMi(hE, player)) continue loop;
				ahH = ahH || ad.iy(hE), ahI = ahI || ad.aMh(hE)
			}
			ahH ? hN[player].push(hM[player][aC]) : ahI ? g5[player].push(hM[player][aC]) : ad.a1u(hM[player][aC], player), hM[player][aC] = hM[player][fg - 1], hM[player].pop(), fg--
		}
	}, this.hK = function() {
		ah.hU[gb] -= gc
	}, this.hL = function(border) {
		for (var fg = border.length, aC = fg - 1; 0 <= aC; aC--) ad.a2F(gb, border[aC]) || (border[aC] = border[fg - 1], border.pop(), fg--)
	}, this.hO = function(border) {
		for (var fg = border.length, aC = fg - 1; 0 <= aC; aC--) !ad.a2F(gb, border[aC]) && ad.fb(border[aC]) && (border[aC] = border[fg - 1], border.pop(), fg--)
	}, this.hP = function(border) {
		for (var fj, hE, fg = border.length, fi = ad.fi, aC = fg - 1; 0 <= aC; aC--)
			for (fj = 3; 0 <= fj; fj--)
				if (hE = border[aC] + fi[fj], ad.aMi(hE, gb)) {
					ah.hM[gb].push(border[aC]), border[aC] = border[fg - 1], border.pop(), fg--;
					break
				}
	}, this.hQ = function() {
		for (var fj, hE, fi = ad.fi, aC = gc - 1; 0 <= aC; aC--)
			for (fj = 3; 0 <= fj; fj--) hE = ge[aC] + fi[fj], ad.a2I(gb, hE) && ad.aMo(hE) && (ah.hM[gb].push(hE), ad.hB(hE, gb))
	}, this.hR = function() {
		var fn, fp;
		loop: for (; ah.jc[gb] < ah.jd[gb];) {
			for (fn = ah.jb[gb]; fn >= ah.ja[gb]; fn--)
				if (ad.a2F(gb, 4 * (ah.jc[gb] * bV.fr + fn))) break loop;
			ah.jc[gb]++
		}
		loop: for (; ah.jc[gb] < ah.jd[gb];) {
			for (fn = ah.jb[gb]; fn >= ah.ja[gb]; fn--)
				if (ad.a2F(gb, 4 * (ah.jd[gb] * bV.fr + fn))) break loop;
			ah.jd[gb]--
		}
		loop: for (; ah.ja[gb] < ah.jb[gb];) {
			for (fp = ah.jd[gb]; fp >= ah.jc[gb]; fp--)
				if (ad.a2F(gb, 4 * (fp * bV.fr + ah.ja[gb]))) break loop;
			ah.ja[gb]++
		}
		loop: for (; ah.ja[gb] < ah.jb[gb];) {
			for (fp = ah.jd[gb]; fp >= ah.jc[gb]; fp--)
				if (ad.a2F(gb, 4 * (fp * bV.fr + ah.jb[gb]))) break loop;
			ah.jb[gb]--
		}
	}, this.fZ = function(player, kB) {
		return 0 === bj.fe[player] || bj.fe[player] !== bj.fe[kB]
	}, this.iD = function(player) {
		for (var aC, hF, fg = ah.hM[player].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < fg; aC++)
				if (ad.fX(ah.hM[player][aC] + hF)) return !0;
		return !1
	}, this.aMy = function(player) {
		for (var aC, hF, fg = ah.hM[player].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < fg; aC++)
				if (ad.kD(ah.hM[player][aC]) && ad.fX(ah.hM[player][aC] + hF)) return !0;
		return !1
	}, this.iG = function(a7l, a7m) {
		for (var aC, eh, hF, hE, aek = ah.hM[a7l].length, ael = ah.hM[a7m].length, fi = (ael < aek && (eh = a7l, a7l = a7m, a7m = eh, eh = aek, aek = ael, 0), ad.fi), fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < aek; aC++)
				if (hE = ah.hM[a7l][aC] + hF, ad.hG(hE) && ad.fY(hE) === a7m) return !0;
		return !1
	}, this.aMz = function(a7l, a7m) {
		for (var aC, hF, hE, aek = ah.hM[a7l].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < aek; aC++)
				if (ad.kD(ah.hM[a7l][aC]) && (hE = ah.hM[a7l][aC] + hF, ad.hG(hE)) && ad.fY(hE) === a7m) return !0;
		return !1
	}
}

function de() {
	this.sz = new ahJ
}

function ahJ() {
	this.iJ = function(player) {
		bD.h2.a7g(player) && aO.a2i(80, L(566), 637, 0, bE.rK, bE.qQ, -1, !1)
	}, this.iM = function(player) {
		bD.h2.a7g(player) && aO.a2i(80, L(567), 637, 0, bE.rK, bE.qQ, -1, !1)
	}
}

function ahK() {
	this.ahL = 0, this.el = function() {
		aP.el(), aa.el(), i.el(), b1.z.el(), ay.aM3(), bX.eZ.el(), bq.xB.el(), bi.dy && (bi.dy = !1, ab.yr())
	}
}

function ahM() {
	this.eg = bi.eg, this.eP = 0, this.ahL = 0, this.aM1 = 0, this.ahN = null, this.ahO = 7, this.ahP = 0, this.dr = function() {
		this.aM1 = 0, this.ahN = [], this.eP = 0, this.ahL = 0
	}, this.aZc = function(aD) {
		if (aE.i5) this.aFw(aD);
		else if (this.ahN.push(aD), 2 === aE.a4E) {
			for (var aC = 0; aC < this.ahN.length; aC++) bB.rt.el(this.ahN[aC]);
			this.ahN = []
		}
	}, this.aFw = function(aD) {
		2 !== aE.a4E && (bB.rt.el(aD), bC.el(), aX.aFw(this.aM1), this.aM1 === aE.a8n ? (aE.sq.el(), this.aM1 = 0, this.eP = 0, this.ahL = 0, this.eg = bi.eg) : (this.aM1++, ag.a8g(), ag.nQ(!0), be.render()))
	}, this.el = function() {
		i.el(), aE.i5 ? (bi.dy = aX.aFw(-1) || bi.dy, nS()) : (0 !== this.eP || bi.eg >= this.eg && (this.eg += bi.aFv * Math.floor(1 + (bi.eg - this.eg) / bi.aFv), 2 === aE.a4E ? nE() : this.ahQ(), this.eP++, 27 < bi.eg - this.ahP)) && this
		.ahR(), nN(), bi.dy && (bi.dy = !1, a2J()), this.ahP = bi.eg
	}, this.ahR = function() {
		bi.dy = !0, nP(), this.eP = 0
	}, this.ahQ = function() {
		var zf, aC;
		if (this.ahL !== 7 * this.aM1) nI(), be.render();
		else {
			zf = !1;
			loop: for (; this.ahS() && (zf = !0, nI(), 2 !== aE.a4E) && 0 < this.ahN.length;)
				for (aC = this.ahO - 2; 0 <= aC; aC--)
					if (nI(), 2 === aE.a4E) break loop;
			zf ? be.render() : (nE(), be.a8j())
		}
	}, this.ahS = function() {
		return 0 < this.ahN.length && (this.aM1++, bB.rt.el(this.ahN[0]), this.ahN.shift(), !0)
	}
}

function ahT() {
	var ahU, ahV, ahW, aM1, ahX, eP = 0,
		eg = bi.eg;

	function aha() {
		! function() {
			if (!aE.i5) return;
			if (aE.lM) return;
			if (2 !== aE.a4E)
				if (ahX % 7 != 0) ahX++;
				else if (aM1 === aE.a8n) {
				if (!ahd()) return;
				aX.aFw(aM1), aE.sq.el()
			} else {
				if (!ahd()) return;
				ahX++, aM1++, ag.a8g(), ag.nQ(!0)
			}
			return 1
		}() && ahd() && nI()
	}

	function ahb() {
		eP = 0, (aE.i5 ? (bi.dy = aX.aFw(aM1 - (ahX % 7 == 0 ? 0 : 1) + ahX % 7 / 7) || bi.dy, nS) : aN.hr || !bF.a9B ? nS : (bi.dy = !0, nP))()
	}

	function ahd() {
		var aC, fg, ahe = bC.so.abC,
			gP = bC.so.abD,
			gR = bC.so.abE,
			gT = bC.so.abF,
			ahf = bC.so.abG,
			ahg = bC.so.abH;
		if (!(ahU >= ahg.length)) {
			if (ahg = ahg[ahU], ahf[ahU]) {
				for (fg = ahV + ahg, aC = ahV; aC < fg; aC++) bB.rt.sd(ahe[aC], gP[aC], gR[aC], gT[aC]);
				ahV += ahg, ahU++
			} else ++ahW >= ahg && (ahU++, ahW = 0);
			return __fx.replay.tick++, 1
		}
		aO.a5Y("Replay file smaller than expected."), bF.a6O(!1), aE.a4E = 2
	}
	this.ahL = 0, this.dr = function() {
		ahX = aM1 = ahW = ahV = ahU = 0, __fx.replay.registerHooks({
			advance: () => aha(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.dy = !0
			},
			isEnded: () => 2 === aE.a4E,
			getTickInterval: () => bi.aFv
		})
	}, this.el = function() {
		var afA;
		i.el(), __fx.replay.frame() ? nE() : bF.aD9() < 1.7 ? 0 === eP ? bi.eg >= eg && (afA = bi.aFv / bF.aD9(), eg += afA * Math.floor(1 + (bi.eg - eg) / afA), 2 === aE.a4E || aN.hr || !bF.a9B ? nE() : (aha(), be.render()), eP++) : ahb() :
			function() {
				var afA;
				if (bi.eg >= eg)
					if (2 === aE.a4E || aN.hr || !bF.a9B) nE(), eg = bi.eg;
					else {
						for (afA = bi.aFv / bF.aD9(), 16 < (bi.eg - eg) / afA && (eg = bi.eg - 16 * afA); bi.eg >= eg && 2 !== aE.a4E;) eg += afA, aha();
						be.render()
					} ahb()
			}(), nN(), bi.dy && (bi.dy = !1, a2J())
	}, this.a4P = function() {
		bC.so.abH.length - ahU <= 2 || aO.a5Y("Replay file larger than expected.")
	}
}

function ahh() {
	var eP = 0,
		eg = bi.eg;
	this.ahL = 0, this.el = function() {
		i.el(), aE.i5 ? nS() : 0 === eP ? bi.eg >= eg && (eg += bi.aFv * Math.floor(1 + (bi.eg - eg) / bi.aFv), 2 === aE.a4E || aN.hr ? nE() : (nI(), be.render()), eP++) : ((aN.hr ? nS : (bi.dy = !0, nP))(), eP = 0), nN(), bi.dy && (bi.dy = !1,
			a2J())
	}
}

function da() {
	this.a4O = null, this.dy = !1, this.eg = 0, this.aFv = 56;
	var ahi = 0;

	function ahj() {
		bi.eg = ahi = performance.now(), bi.a4O.el(), window.requestAnimationFrame(ahj)
	}
	this.dr = function() {
		this.a98(), window.requestAnimationFrame(ahj), this.eg = performance.now()
	}, this.a90 = function() {
		aE.hp ? (this.a4O = new ahT, this.a4O.dr()) : aE.lM ? this.a4O = new ahh : (this.a4O = new ahM, this.a4O.dr())
	}, this.a98 = function() {
		this.a4O = new ahK, this.dy = !0
	}, this.el = function() {
		this.a4O.ahL++
	}, this.kz = function() {
		return this.a4O.ahL
	}, this.aZH = function() {
		var eh = performance.now();
		eh < ahi + 1e3 || (this.eg = eh, this.a4O.el())
	}
}

function d0() {
	var aLR = 0,
		ahk = !0;
	this.el = function() {
		var eh, aBb;
		bi.eg < aLR || (aLR = bi.eg + 3e3, aE.hp) || aE.lM || bD.h2.ht(aE.fQ) || (eh = new Date, aBb = eh.getUTCSeconds(), ahk ? aBb < 43 && (ahk = !1) : aBb < 43 || (aLR += 52e3, ahk = !0, aBb = (eh.getUTCMinutes() + 2) % 60, eh = aE.lK < 7 ?
			0 : 8 === aE.lK ? 2 : 9 === aE.lK ? 3 : 1, aP.aBQ(eh, aBb) && (aBb = eh, aBb = [L(568), L(569), L(570), L(571)][aBb], aO.aB1(aBb))))
	}
}

function cu() {
	var o5, o6, oI, oJ, ahm = 0,
		ahn = 0;

	function ahp() {
		return Math.pow(Math.pow(oI - o5, 2) + Math.pow(oJ - o6, 2), .5)
	}

	function aho(e) {
		o5 = i.l * e.touches[0].clientX, o6 = i.l * e.touches[0].clientY, oI = i.l * e.touches[1].clientX, oJ = i.l * e.touches[1].clientY
	}
	this.a5q = function(e) {
		return 1 < e.touches.length ? (ahn = bi.eg, ahm = 3, aho(e), aM.ub(), !0) : (ahm = 0, !1)
	}, this.a5r = function(e) {
		var aNt, j1, j2;
		return 0 !== aE.a4E && 1 < e.touches.length && (ahm = Math.max(ahm - 1, 0), aI.oN() && (aNt = ahp(), aho(e), e = ahp(), j1 = Math.floor((o5 + oI) / 2), j2 = Math.floor((o6 + oJ) / 2), aT.aDa(j1, j2, Math.max(.125, e) / Math.max(.125,
			aNt)), bi.dy = !0), !0)
	}, this.a6E = function() {
		var fn, fp;
		return !!(ahm && (ahm = 0, bi.eg < ahn + 500)) && (fn = (o5 + oI) / 2, fp = (o6 + oJ) / 2, aM.a68(fn, fp), aM.click(fn, fp, !0) && (bi.dy = !0), !0)
	}
}

function dB() {
	this.size = 0, this.eP = 0, this.aD = null, this.dr = function(aD) {
		this.eP = 0, this.aD = aD, this.size = aD.length
	}, this.xy = function() {
		this.aD = null
	}, this.sc = function(size) {
		for (var g8 = 0, aD = this.aD, oN = this.eP + size - 1, aC = this.eP; aC <= oN; aC++) g8 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oN - aC;
		return this.eP += size, this.eP > 8 * this.size && console.error("Unwrapper Overflow"), g8
	}, this.aZk = function(size) {
		var g0 = size >> 1;
		return (1 << g0) * this.sc(size - g0) + this.sc(g0)
	}, this.aZm = function(ahq) {
		return this.size === bG.aZj(ahq)
	}, this.abU = function(a17, ahr, ahs) {
		var h9 = this.sc(a17);
		if (!h9) return null;
		for (var a17 = Math.max(h9, ahs), h = new(ahr <= 8 ? Uint8Array : ahr <= 16 ? Uint16Array : Uint32Array)(a17), aC = 0; aC < h9; aC++) h[aC] = this.sc(ahr);
		ahs = h[h9 - 1];
		return ahs && h.fill(ahs, h9), h
	}, this.abV = function(a17, aht, ahs) {
		var h9 = this.sc(a17);
		if (!h9) return null;
		for (var a17 = Math.max(h9, ahs), h = new Array(a17), aC = 0; aC < h9; aC++) h[aC] = this.abS(aht);
		return h.fill(h[h9 - 1], h9), h
	}, this.abS = function(a17) {
		return bJ.a0G.a0K(this.sc(a17))
	}, this.abT = function() {
		var a3V = this.sc(30);
		if (!(6 * a3V > 8 * this.size - this.eP)) {
			var pc = bI.f7.vZ(bI.f7.va(a3V)),
				pc = bD.pg.a8b(pc, "_", "/");
			pc = bD.pg.a8b(pc, "-", "+");
			for (var ahu = "";
				(pc.length + ahu.length) % 4;) ahu += "=";
			pc = "data:image/png;base64," + pc + ahu;
			var aNV = new Image;
			aNV.onload = function() {
				bC.aOS.aOT(aNV), aNV.onload = null, aNV = null
			}, aNV.src = pc
		}
	}
}

function dU() {
	this.acY = 0, this.acZ = 0, this.acU = 0, this.acV = 0, this.acW = 0, this.acX = 0, this.aGd = [0, 0, 0, 0], this.oM = function() {
		this.acY = aT.a2L(), this.acZ = aT.a2M(), this.acU = -this.acY, this.acV = -this.acZ, this.acW = i.j / iv, this.acX = i.k / iv, this.aGd[0] = Math.floor(this.acU), this.aGd[1] = Math.floor(this.acV), this.aGd[2] = Math.floor(this.aGd[0] +
			this.acW + 1), this.aGd[3] = Math.floor(this.aGd[1] + this.acX + 1), be.aGb = !0
	}
}

function cv() {
	var aCF, nr;
	this.dr = function() {
		aCF = 1, nr = 0
	}, this.el = function() {
		0 < aCF && (nr = 0 === nr ? bi.eg + 16 : nr, aCF = (aCF -= .001 * (bi.eg - nr)) < 0 ? 0 : aCF, nr = bi.eg, bi.dy = !0)
	}, this.yr = function() {
		0 < aCF && (ys.fillStyle = "rgba(0,0,0," + aCF + ")", ys.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eP = 0, this.aD = null, this.dr = function(aD) {
		this.eP = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(ahq) {
		return this.dr(new Uint8Array(this.aZj(ahq))), this.aD
	}, this.xy = function() {
		this.aD = null
	}, this.a9 = function(size, aBd) {
		for (var aD = this.aD, oN = this.eP + size - 1, aC = this.eP; aC <= oN; aC++) aD[aC >> 3] |= (aBd >> oN - aC & 1) << 7 - (7 & aC);
		this.eP += size, this.eP > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aZi = function(size, aBd) {
		var g0 = size >> 1,
			fj = 1 << g0;
		this.a9(size - g0, bO.g7(aBd, fj)), this.a9(g0, aBd % fj)
	}, this.ahx = function(size) {
		for (var aD = this.aD, oN = this.eP + size, aC = this.eP; aC < oN; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aZj = function(ahq) {
		return ahq + 7 >> 3
	}, this.ahy = function(h, kI, oN, ahz) {
		for (var aC = kI; aC < oN; aC++) this.a9(ahz, h[aC])
	}
}

function dA() {
	this.dr = function() {
		this.h = [], this.eP = 0
	}, this.aaB = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(ai0, value) {
		for (var h = this.h, oN = this.eP + ai0 - 1, ai1 = 1 + (oN >> 3); h.length < ai1;) h.push(0);
		for (var aC = this.eP; aC <= oN; aC++) h[aC >> 3] |= (value >> oN - aC & 1) << 7 - (7 & aC);
		this.eP += ai0
	}, this.dx = function(h, a17, ahr) {
		var ai2 = bD.tm.a6z(h);
		this.a9(a17, ai2);
		for (var aC = 0; aC < ai2; aC++) this.a9(ahr, h[aC])
	}, this.abm = function(h, a17, aht) {
		var ai2 = bD.tm.a6z(h);
		this.a9(a17, ai2);
		for (var aC = 0; aC < ai2; aC++) this.abk(h[aC], aht)
	}, this.abk = function(pc, a17) {
		var fg = pc.length;
		this.a9(a17, fg);
		for (var aC = 0; aC < fg; aC++) this.a9(16, pc.charCodeAt(aC))
	}, this.abl = function(a75) {
		var ai3 = (a75 = a75.toDataURL()).split(",");
		if (ai3.length < 2) console.log("error 266");
		else {
			a75 = bD.pg.a8b(a75 = ai3[ai3.length - 1], "/", "_"), a75 = bD.pg.a8b(a75, "\\+", "-");
			var a75 = bD.pg.a8b(a75, "=", ""),
				a0T = bJ.f7.a0Q(a75),
				fg = a0T.length;
			this.a9(30, fg);
			for (var aC = 0; aC < fg; aC++) this.a9(6, a0T[aC])
		}
	}
}
a(), self.aiCommand746 = function(g8) {
	0 === g8 ? c0() : 1 !== g8 || !a1 || 1 !== a1.id || a1.eA < 14 || bM.g9()
}, setTimeout(c0, 1e4), window.onload = function() {
	c0()
};