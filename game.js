var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, gI, gJ, gK, gL, gM, gN, gO, gP, gQ, gR, gS, gT, gU, ie,
	j6, j7, a9K, mO, kY, a2t, vx, zV, aDO, a64, a65, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span", "0.5em", "email", "Data",
		" / ", "territorial.io", "pre", "password", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==",
		"click", "undefined", "middle", "break-word", "50%", "0.6em", "underline", "text", "scroll", "pointer", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange",
		"number", "nowrap", "mouseleave", "inline-block", "game.territorial.io", "focus", "fixed", "blur", "Space", "Redacted ", "Player ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "🔄 Reload", "⚠️ ", "wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "block", "arena", "account", "accept", "_blank",
		"[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "@room",
		"255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", "-1px 1px 0 lightgray,",
		"-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
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
			return 0 === f || e.lineno < 2 ? void console.log("Error: External Code") : (window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + f, __fx.reportError(e, c), alert("Error:\n" + e.filename + " " + e.lineno +
				" " + e.colno + " " + e.message))
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		r()
	})
}

function bw(bx) {
	m && !bx || (bz(), bO = new c0, bN = new c1, bD = new c2, bE = new c3, aE = new c4, bA = new c5, bI = new c6, bJ = new c7, aF = new c8, aG = new c9, aH = new cA, aI = new cB, aJ = new cC, aK = new cD, aL = new cE, aM = new cF, aN = new cG, aO =
		new cH, aP = new cI, aQ = new cJ, aR = new cK, aS = new cL, aT = new cM, aU = new cN, aV = new cO, aW = new cP, aX = new cQ, aY = new cR, aZ = new cS, aa = new cT, ab = new cU, ac = new cV, ad = new cW, al = new cX, am = new cY, ao =
		new cZ, an = new ca, ae = new cb, af = new cc, ai = new cd, ag = new ce, ah = new cf, aj = new cg, b0 = new ch, ak = new ci, aq = new cj, ar = new ck, at = new cl, b1 = new cm, az = new cn, ap = new co, au = new cp, av = new cq, aw =
		new cr, i = new cs, ax = new ct, ay = new cu, b2 = new cv, b3 = new cw, b4 = new cx, b5 = new cy, b6 = new cz, b7 = new d0, b8 = new d1, b9 = new d2, bB = new d3, bC = new d4, bF = new d5, bG = new a7, bH = new d6, bK = new d7, bL =
		new d8, bM = new d9, bP = new dA, bQ = new dB, bR = new dC, bS = new dD, bT = new dE, bU = new dF, bV = new dG, bW = new dH, u = new dI, bX = new dJ, a1 = new dK, m = new dL, bl = new dM, bm = new dN, bj = new dO, bk = new dP, bd =
		new dQ, be = new dR, bY = new dS, bZ = new dT, bg = new dU, bh = new dV, bi = new dW, bn = new dX, bf = new dY, p = new dZ, bo = new da, bp = new db, bq = new dc, bs = new dd, bt = new de, bu = new df, bv = new dg, m.di(), a1.di(), i
	.dj(), bm.di(), bA.di(), bA.dk(), (ba = new dl).di(), bD.di(), bY.di(), b1.di(), bI.di(), bJ.di(), bV.di(), u.di(), bb = new dm, i.di(), bi.di(), bf.di(), bZ.di(), bc = new dn, az.di(), af.dp(), bX.di(), aq.di(), ab.di(), aU.di(), aj.di(), bM
		.di(), ac.di(), bi.dq = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.dr() || a1.a2.ds(), i.dt(), m.n = 1)
}

function dL() {
	this.du = 1758;
	this.rVersion = 25, this.dy = 0, this.di = function() {
		this.dz = 2;
		this.o = "2.16.27", this.e1 = "12 Aug 2026 [" + this.o + "]";
		var e2 = window.location.hostname.toLowerCase();
		this.aA = 0 <= e2.indexOf("territorial.io"), this.e3 = 0 <= e2.indexOf("github.io"), this.e4 = 0 <= e2.indexOf("game.territorial.io"), this.aB = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.e6 = (new Date).getTime() % 1048576
	}, this.n = 0
}

function e7() {
	var e8 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e9 = [100, 60, 30, 15, 6, 1],
		eA = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eB = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eD = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eE = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.eF = function(id, eG, eH) {
		eG = this.eI(eG);
		return +(eA[eG][id] > eH)
	}, this.eI = function(eG) {
		for (var aC = 0; aC < e9.length; aC++)
			if (e9[aC] <= eG) return aC;
		return e9.length
	}, this.eJ = function(eG) {
		return e8[this.eI(eG)]
	}, this.eK = function(id, eL) {
		return eB[id].replace(new RegExp("x", "g"), eL)
	}, this.eM = function(id, eL) {
		return eD[id].replace(new RegExp("x", "g"), eL)
	}, this.eN = function(id, eO) {
		return this.eE[5][id]
	}
}

function dJ() {
	this.eP = new eQ, this.eR = new eS, this.turnstile = new eT, this.di = function() {
		a1.a2.eU(), this.turnstile.di()
	}, this.eV = function() {
		return bm.eW.data[160].value
	}
}

function eQ() {
	var eX = 12e3;
	this.show = function(eY) {
		return !eY && !bX.eV() && (0 === a1.id ? bX.eR.show() : !(bi.eZ < eX) && (eY = 1 === a1.id ? 72e4 : 108e4, eX = bi.eZ + eY, 2 === m.dz) && a1.a2.eb(Math.floor(eY)))
	}
}

function eS() {
	var ec = null,
		eX = 2e4,
		ed = 0;
	this.ee = function() {
		bi.eZ < eX || (eX = bi.eZ + 1e4, 0 !== a1.id) || ec || bX.eV() || (b1.z.ef(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.eg.eh(5) : eX = bi.eZ + 1e3)
	}, this.ei = function(ej) {
		ec = ej
	}, this.show = function() {
		return !(!ec || bi.eZ < ed) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ed = bi.eZ + 6e4, (new ek).show(ec.el, ec.colors, ec.id), !(ec = null)))
	}
}

function eT() {
	var eo, em = null,
		en = 0,
		ep = "",
		eq = 0,
		er = 0,
		es = null;

	function ey() {
		null !== es && null !== em && (en = 0, window.turnstile.remove(em), es.remove(), em = es = null)
	}

	function ev(f2) {
		return "" !== ep && eq + 1e3 * (300 - f2) > performance.now()
	}
	this.di = function() {
		var et;
		m.dy || !m.aA && !m.e3 || 0 < a1.id || ((et = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", et.async = !0, et.onload = function() {
			er = 1, console.log("turnstile onload"), bX.turnstile.eu()
		}, document.head.appendChild(et))
	}, this.eu = function() {
		return !(!er || (window.turnstile ? en ? (console.log("turnstile error 246"), 1) : ev(30) || (ep = "", en = 1, eo = performance.now(), (es = document.createElement("div")).style.position = "fixed", es.style.left = "0%", es.style.top =
			"0%", es.style.zIndex = "100", es.style.display = "block", es.style.visibility = "visible", es.style.opacity = "1", es.style.width = "300px", es.style.height = "100px", document.body.appendChild(es), console.log(
				"turnstile render"), em = window.turnstile.render(es, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(ew) {
					console.log("turnstile success " + Math.floor(performance.now() - eo)), ep = ew, eq = performance.now(), bX.turnstile.ex(), ey()
				},
				"timeout-callback": function() {
					console.log("turnstile TIMEOUT")
				},
				"unsupported-callback": function() {
					console.log("UNSUPPORTED")
				},
				"before-interactive-callback": function() {
					console.log("BEFORE INTERACTIVE")
				},
				"expired-callback": function() {
					ey(), console.log("turnstile expired " + Math.floor(performance.now() - eo))
				},
				"error-callback": function() {
					ey(), console.log("turnstile error " + Math.floor(performance.now() - eo))
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.ex = function() {
		console.log("sendTokenToLobby 0"), ev(8) && (console.log("sendTokenToLobby 1"), bq.ez) && (console.log("sendTokenToLobby 2"), b1.z.ef(b1.z.f0)) && (console.log("sendTokenToLobby success"), b1.eg.f1(ep), ep = "")
	}
}

function ca() {
	this.f3 = new f4
}

function f4() {
	this.f5 = function(f6) {
		var f9;
		return bV.f7(bV.f8) && aE.data.passableMountains && (f9 = ad.fA(f6), this.fB(aE.fC, f9) || this.fD(aE.fC, f9)) && 0 !== (f9 = function(fY) {
			for (var fZ = bP.fa(fY), fb = bP.fc(fY), max = Math.max(bV.fd, bV.fe) - 2, ff = max * max, fg = !1, fh = 0, fi = 0; fi < max; fi++) {
				var fj, fE = function(fZ, fb, fi) {
					for (var aC = 0; aC <= fi; aC++)
						for (var fl = -1; fl < 2; fl += 2)
							for (var fm = -1; fm < 2; fm += 2)
								for (var ej = 0; ej < 2; ej++) {
									var f6 = function(fZ, fb) {
										if (bP.fo(fZ, fb)) {
											fZ = bP.fp(fZ, fb), fb = bP.fI(fZ);
											if (ad.fN(fb) && ad.fq(fb)) return fZ
										}
										return 0
									}(fZ + ej * fl * aC + (1 - ej) * fm * fi, fb + ej * fm * fi + (1 - ej) * fl * aC);
									if (f6) return f6
								}
					return 0
				}(fZ, fb, fi);
				fE && (fj = bP.fk(fZ, fb, fE)) < ff && (fh = fE, ff = fj, fg || (fg = !0, max = Math.floor(Math.sqrt(fj)) + 1))
			}
			return fh
		}(bP.fG(f6))) && (f6 = bP.fI(f9), ad.fJ(f6) || (f6 = ad.fK(f6)) !== aE.fC && bv.fL(f6, aE.fC)) ? f9 : 0
	}, this.fM = function(player, fE) {
		fE = bP.fI(fE);
		if (ad.fN(fE)) {
			if (ad.fJ(fE)) bR.fO[0] = aE.fP;
			else if (ad.fK(fE) !== bR.fO[0]) return !1;
			for (var fQ = function(f6) {
					var fU = ad.fU,
						fQ = [];
					loop: for (var fV = 3; 0 <= fV; fV--) {
						var fW = f6 + fU[fV];
						if (ad.fX(fW)) {
							for (var id = ad.fA(fW), aC = 0; aC < fQ.length; aC++)
								if (id === fQ[aC]) continue loop;
							bR.fT[fQ.length] = fW, fQ.push(id)
						}
					}
					return fQ
				}(fE), fS = fQ.length, aC = 0; aC < fS; aC++)
				if (this.fB(player, fQ[aC]) || this.fD(player, fQ[aC])) return bR.fT[0] = bR.fT[aC], !0
		}
		return !1
	}, this.fB = function(player, f9) {
		for (var fr = ah.fr[player], fS = fr.length, fs = Math.max(bO.ft(fS, 12), 1), fU = ad.fU, aC = 0; aC < fS; aC += fs)
			for (var fH = fr[aC], fV = 3; 0 <= fV; fV--) {
				var fW = fH + fU[fV];
				if (ad.fX(fW) && f9 === ad.fA(fW)) return !0
			}
		return !1
	}, this.fD = function(player, f9) {
		for (var fr = ah.fr[player], fS = fr.length, fU = ad.fU, aC = 0; aC < fS; aC++)
			for (var fH = fr[aC], fV = 3; 0 <= fV; fV--) {
				var fW = fH + fU[fV];
				if (ad.fX(fW) && f9 === ad.fA(fW)) return !0
			}
		return !1
	}
}

function dC() {
	this.h = new Array(4), this.fw = new Uint16Array(2), this.fx = new Uint16Array(2), this.fy = new Int32Array(2), this.fz = new Uint32Array(2), this.g0 = new Uint32Array(2), this.g1 = new Uint8Array(4), this.g2 = new Uint8Array(4), this.fT =
		new Uint32Array(4), this.g3 = new Uint32Array(5), this.fO = new Uint32Array(8), this.g4 = new Uint32Array(8), this.g5 = new Uint16Array(16), this.g6 = new Uint16Array(512), this.g7 = new Uint16Array(512), this.g8 = new Uint16Array(512), this
		.g9 = new Uint16Array(0), this.di = function() {
			var fS = bV.fd * bV.fe;
			this.g9.length !== fS && (this.g9 = new Uint16Array(fS))
		}, this.gA = function(h, gB) {
			return h[0] = gB, h
		}, this.gC = function(h, gB, gD) {
			return h[0] = gB, h[1] = gD, h
		}, this.gE = function(h, gB, gD, gF) {
			return h[0] = gB, h[1] = gD, h[2] = gF, h
		}, this.gG = function(h, gB, gD, gF, gH) {
			return h[0] = gB, h[1] = gD, h[2] = gF, h[3] = gH, h
		}
}

function gV() {
	gO = 0, gP = 2048, gQ = new Uint32Array(4 * gP), gR = 0, gS = new Uint32Array(gP), gT = new Uint8Array(bV.fd * bV.fe)
}

function gW(player) {
	gJ = player, gU = !1, gX(), gY();
	for (var aC = ae.gZ(gJ) - 1; 0 <= aC; aC--) gI = aC, ga();
	gU && gb()
}

function gb() {
	bv.gc(), bv.gd()
}

function ga() {
	gN = ae.ge(gJ, gI), gK = ae.gf(gJ, gI), gL = ae.gg(gJ, gI), gh(), (0 !== gO && (gj(), gk()) ? gl : gi)()
}

function gk() {
	if (!((gM = bO.ft(gK, gO)) > aE.gm)) {
		if (!gL) return !1;
		var gn = gO * (1 + aE.gm);
		gK += bD.go.gp(gJ, gn - gK), gM = bO.ft(gK, gO)
	}
	return !0
}

function gj() {
	for (var aC = gO - 1; 0 <= aC; aC--) gT[bO.ft(gQ[aC], 4)] = 0
}

function gi() {
	1 === ae.gZ(gJ) && aG.gq(gJ);
	var ea = bD.go.gr(gJ, gK);
	bg.gs(gJ, gK - ea, 12), ae.gt(gJ, gI)
}

function gX() {
	for (var player = gJ, gu = ah.gu, fS = Math.min(gu[player].length, gP), gv = 0, gw = gS, aC = fS - 1; 0 <= aC; aC--) gw[gv++] = gu[player][aC];
	gR = gv
}

function gY() {
	for (var aC = ah.gu[gJ].length - 1; 0 <= aC; aC--) ad.fN(ah.gu[gJ][aC]) && ad.gx(ah.gu[gJ][aC], gJ);
	ah.gu[gJ] = []
}

function gh() {
	gO = 0, (gN === aE.fP ? gy : gz)()
}

function gz() {
	for (var h0, h1, aC, fU = ad.fU, fV = 3; 0 <= fV; fV--)
		for (aC = gR - 1; 0 <= aC; aC--) h0 = gS[aC] + fU[fV], h1 = bO.ft(h0, 4), 0 === gT[h1] && ad.h2(h0) && ad.fK(h0) === gN && (gT[h1] = 1, gQ[gO++] = h0)
}

function gy() {
	for (var h0, h1, aC, fU = ad.fU, fV = 3; 0 <= fV; fV--)
		for (aC = gR - 1; 0 <= aC; aC--) h0 = gS[aC] + fU[fV], h1 = bO.ft(h0, 4), 0 === gT[h1] && ad.fJ(h0) && (gT[h1] = 1, gQ[gO++] = h0)
}

function gl() {
	h3() ? (h4(), gN !== aE.fP && h5()) : gi()
}

function h5() {
	bv.h6(), bv.h7(ah.h8[gN]), bv.h7(ah.h9[gN]), bV.f7(bV.f8) && bv.h7(ah.fr[gN]), bv.hA(ah.gu[gN]), bv.hB(ah.h9[gN]), bv.hB(ah.fr[gN]), bv.hC(), bv.hD()
}

function h4() {
	gU = !0, ae.hE(gJ, gI, gK), ae.hF(gJ, gI), ah.hG[gJ] += gO, bv.hH(), hI()
}

function h3() {
	return (gN === aE.fP ? hJ : hK)()
}

function hK() {
	var hL = gO * aE.gm,
		hM = hN(),
		hO = hP(),
		hM = hL + 2 * hM + hO,
		hR = gM * gO;
	return hM < hR ? (gK -= hM, bg.gs(gJ, hM, 13), hS(hM - hL, hO), !0) : gL && 0 === hO ? (gK -= hR, hR += bD.go.gp(gJ, hM - hR + 1), bg.gs(gJ, hR, 13), hS(hR - hL, 0), !0) : (gK -= hR, bg.gs(gJ, hR, 13), hS(hR - hL, hO), !1)
}

function hS(hR, hO) {
	if (0 < hO) {
		if (hR <= hO) return bg.gs(gN, hR, 13), void ae.hT(gN, gJ, hO - hR);
		ae.hT(gN, gJ, 0), hR -= hO
	}
	hR = bO.ft(hR, 2), hR = Math.min(ah.hU[gN], hR), bg.gs(gN, hR, 13), ah.hU[gN] -= hR
}

function hP() {
	return ae.hV(gN, gJ)
}

function hN() {
	return bO.ft(gO * ah.hU[gN], 1 + bO.ft(10 * ah.hG[gN], 16))
}

function hJ() {
	var hW = gO * aE.gm;
	return gK -= hW, bg.gs(gJ, hW, 13), !0
}

function hI() {
	for (var aC = gO - 1; 0 <= aC; aC--) ah.gu[gJ].push(gQ[aC]), ah.h8[gJ].push(gQ[aC]), ad.gx(gQ[aC], gJ)
}

function dH() {
	var hX = 0,
		hY = 0;
	this.hZ = function(fZ, fb) {
		hX = fZ, hY = fb
	}, this.ha = function(code) {
		var hh, hj, fE;
		aE.hb || aN.hc || (bD.go.hd(0) || bD.go.hd(1)) && bD.go.he(aE.fC) && (aS.hf(hX, hY) ? aS.hg = !1 : aQ.hf(hX, hY) || (hh = bP.hi(hX), hj = bP.hk(hY), fE = bP.fp(hh, hj), bP.hl(hh, hj) && (0 === code ? function(fE) {
			var hp, f6, fH;
			aE.hq ? -1 !== (hp = bu.hr(fE)) && bB.hs.ht(fE) : (f6 = bP.fI(fE), ad.fX(f6) ? (hp = an.f3.f5(f6)) && (fH = bP.fI(hp), fH = ad.fJ(fH) ? aE.fP : ad.fK(fH), bB.hs.hv(aS.hw(), hp, fH)) : (hp = bu.hx(fE)) < 0 || (f6 = bP
				.fI(hp), ad.fJ(f6) ? bv.hy(aE.fC) ? bB.hs.hz(aS.hw(), aE.fP) : ae.gZ(aE.fC) && b2.i0(aE.fP, aS.hw()) : (fH = ad.fK(f6), bv.fL(fH, aE.fC) && (bv.i1(aE.fC, fH) ? bB.hs.hz(aS.hw(), fH) : ae.gZ(aE.fC) && b2.i0(
					fH, aS.hw())))))
		}(fE) : 1 === code ? function(fE) {
			bQ.i2.i3(aE.fC, fE) && bB.hs.i4(aS.hw(), bR.g4[7])
		}(fE) : 2 === code && function(fE) {
			bQ.i5.i6(aE.fC, fE) && bB.hs.i7(aS.hw())
		}(fE))))
	}, this.i8 = function() {
		if (!aE.hb && !aN.hc && bD.go.hd(1)) {
			var h0 = aE.fC;
			if (bD.go.he(h0)) {
				var fS = ae.gZ(h0);
				if (fS < 1) ! function() {
					var h0 = aE.fC;
					if (bv.hy(h0)) bB.hs.hz(aS.hw(), aE.fP);
					else
						for (var fU = ad.fU, h8 = ah.h8, fS = h8[h0].length, iI = Math.floor(Math.random() * fS), aC = 0; aC < fS; aC++)
							for (var iJ = 3; 0 <= iJ; iJ--) {
								var iK = h8[h0][(aC + iI) % fS] + fU[iJ];
								if (ad.h2(iK)) {
									iK = ad.fK(iK);
									if (iK !== h0 && (!aE.iM || bv.fL(h0, iK))) return bB.hs.hz(aS.hw(), iK)
								}
							}
				}();
				else {
					for (var iA = 0, iB = ae.gf(h0, 0), aC = 1; aC < fS; aC++) {
						var iC = ae.gf(h0, aC);
						iC < iB && (iB = iC, iA = aC)
					}
					bB.hs.hz(aS.hw(), ae.ge(h0, iA))
				}
			}
		}
	}, this.iD = function() {
		if (!aE.hb && !aN.hc && bD.go.he(aE.fC) && bD.go.hd(1)) return ax.iE ? ax.iF(aE.fC) ? void bB.hs.iG(1) : void 0 : void(ax.iH(aE.fC) && bB.hs.iD())
	}
}

function iN(iO, size, iP, iQ, font) {
	var aC, iT = .2,
		canvas = document.createElement("canvas"),
		iU = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iO, canvas.height = iO, iU.font = size + font, iU.textAlign = "center", iU.textBaseline = "middle", iU.fillStyle = "red", aC = 0; aC < iP.length; aC++) iU.fillText(iP[aC], .5 * iO, .5 * iO);
	return -1 < (canvas = function(iR) {
		var aC, eG, fV = iR.data;
		for (aC = fV.length - 4; 0 <= aC; aC -= 4)
			if (eG = fV[aC], iQ <= eG) return Math.floor(aC / (4 * iO));
		return -1
	}(iU.getImageData(0, 0, iO, iO))) && (iT = (canvas - .5 * iO + .1 * size) / size), Math.max(iT, 0)
}

function dA() {
	this.iW = new Int16Array(4), this.iX = new Int16Array(4), this.iY = null, this.di = function() {
		var aC;
		for (this.iW[0] = -bV.fd, this.iW[1] = 1, this.iW[2] = bV.fd, this.iW[3] = -1, this.iY = new Int16Array([-bV.fd, 1 - bV.fd, 1, bV.fd + 1, bV.fd, bV.fd - 1, -1, -bV.fd - 1]), aC = 0; aC < 4; aC++) this.iX[aC] = 4 * this.iW[aC]
	}, this.iZ = function() {
		return bO.ia(Math.floor(.15 * (1 + .25 * a1.a2.ib()) * i.ic / ie), 4, 128)
	}, this.ig = function(f6, id) {
		for (var ih = this.iX, aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			if (ad.ii(fH) && ad.fA(fH) === id) return !0
		}
		return !1
	}, this.ij = function(player, f6) {
		return !ad.fJ(f6) && player === ad.fK(f6)
	}, this.fk = function(hh, hj, fE) {
		return (hh -= this.fa(fE)) * hh + (hj -= this.fc(fE)) * hj
	}, this.ik = function(il, im, io) {
		il = this.iq(il) - this.ir(io), im = this.it(im) - this.iu(io);
		return Math.sqrt(il * il + im * im)
	}, this.iv = function(iw, ix) {
		var ip = this.fa(iw) - this.fa(ix),
			iw = this.fc(iw) - this.fc(ix);
		return ~~Math.sqrt(ip * ip + iw * iw + .5)
	}, this.iy = function(iw, ix) {
		var ip = this.fa(iw) - this.fa(ix),
			iw = this.fc(iw) - this.fc(ix);
		return ip * ip + iw * iw
	}, this.iz = function(j0, j1, j2, j3) {
		return (j0 -= j2) * j0 + (j1 -= j3) * j1
	}, this.j4 = function(h0, j5) {
		return bO.ft(j5 * ah.hU[h0], 1e3)
	}, this.iq = function(il) {
		return 16 * (il + j6) / ie
	}, this.it = function(im) {
		return 16 * (im + j7) / ie
	}, this.j8 = function(fV) {
		return 16 * fV / ie
	}, this.hi = function(il) {
		return Math.floor((il + j6) / ie)
	}, this.hk = function(im) {
		return Math.floor((im + j7) / ie)
	}, this.hl = function(hh, hj) {
		return 1 <= hh && 1 <= hj && hh < bV.fd - 1 && hj < bV.fe - 1
	}, this.fa = function(fE) {
		return fE % bV.fd
	}, this.fc = function(fE) {
		return bO.ft(fE, bV.fd)
	}, this.fp = function(hh, hj) {
		return hj * bV.fd + hh
	}, this.j9 = function(hh, hj) {
		return 4 * this.fp(hh, hj)
	}, this.jA = function(fE) {
		return this.fo(this.fa(fE), this.fc(fE))
	}, this.fo = function(hh, hj) {
		return 0 < hh && hh < bV.fd - 1 && 0 < hj && hj < bV.fe - 1
	}, this.fI = function(fE) {
		return fE << 2
	}, this.fG = function(f6) {
		return f6 >> 2
	}, this.jB = function(fE) {
		return bV.fd * this.fc(fE) * 256 + (this.fa(fE) << 4)
	}, this.jC = function(fE) {
		return this.jB(fE) + 8 + (bV.fd << 7)
	}, this.jD = function(io) {
		return bV.fd * (this.iu(io) >> 4) + (this.ir(io) >> 4)
	}, this.jE = function(io) {
		io = this.jD(io);
		return (this.fa(io) >> 5) + bQ.jF.jG * (this.fc(io) >> 5)
	}, this.ir = function(io) {
		return io % (bV.fd << 4)
	}, this.iu = function(io) {
		return bO.ft(io, bV.fd << 4)
	}, this.jH = function(fE, iJ) {
		return fE + this.iW[iJ]
	}, this.jI = function(f6, iJ) {
		return f6 + this.iX[iJ]
	}, this.jJ = function(iw, ix) {
		var ip = this.fa(ix) - this.fa(iw),
			ix = this.fc(ix) - this.fc(iw);
		return Math.abs(ip) >= Math.abs(ix) ? 1 + 2 * (ip < 0) : 2 * (0 < ix)
	}, this.jK = function(player) {
		return this.fp(ah.jL[player] + ah.jM[player] >> 1, ah.jN[player] + ah.jO[player] >> 1)
	}, this.jP = function(player) {
		return this.fp(az.jQ(ah.jL[player], ah.jM[player]), az.jQ(ah.jN[player], ah.jO[player]))
	}
}

function co() {
	this.jR = new jS, this.jT = new jU, this.jV = new jW, this.performance = new jX, this.jY = new jZ, this.ja = new jb, this.jc = new jd, this.je = new jf, this.jg = new jh, this.di = function() {
		this.jR.di(), this.jV.di(), this.performance.di(), this.jY.di(), this.ja.di()
	}, this.ee = function() {
		this.performance.ee(), this.jR.ee(), this.jV.ji()
	}
}

function jZ() {
	var jj, jl = new Uint16Array(8);

	function jt(size, player) {
		for (var aC = ah.gu[player].length - 1; size <= aC; aC--) ad.jz(ah.gu[player][aC], player)
	}
	this.di = function() {
		jj = 0
	}, this.jm = function(player, jn) {
		return bR.fO[1] = ah.gu[player].length, bR.fO[0] === aE.fP ? ap.jY.jo(player) : this.jp(player, bR.fO[0]), (0 !== bR.fO[1] || 0 !== ah.gu[player].length) && !(!jn && bR.fO[1] === ah.gu[player].length || (bR.fO[0] === aE.fP ? ah.jq[
			player]++ : ah.jr[player]++, 0))
	}, this.js = function(player) {
		jt(bR.fO[1], player), ae.ei(player, bR.fz[0], bR.fO[0]), aG.ju(player, !1)
	}, this.jv = function(player, jw, fS, iB) {
		var jx = bO.ft(12 * ah.hU[player], 1024);
		iB -= iB >= bO.ft(ah.hU[player], 2) ? jx : 0, jt(fS, player), ae.ei(player, iB, jw), ah.hU[player] -= iB + jx, aG.ju(player, !1)
	}, this.jp = function(player, jw) {
		for (var iJ, fU = ad.fU, aC = ah.h8[player].length - 1; 0 <= aC; aC--)
			if (ad.jy(ah.h8[player][aC]))
				for (iJ = 3; 0 <= iJ; iJ--)
					if (ad.h2(ah.h8[player][aC] + fU[iJ]) && ad.fK(ah.h8[player][aC] + fU[iJ]) === jw) {
						ah.gu[player].push(ah.h8[player][aC]);
						break
					}
	}, this.jo = function(player) {
		for (var fU = ad.fU, aC = ah.h8[player].length - 1; 0 <= aC; aC--)
			if (ad.jy(ah.h8[player][aC]))
				for (var iJ = 3; 0 <= iJ; iJ--)
					if (ad.fJ(ah.h8[player][aC] + fU[iJ])) {
						ah.gu[player].push(ah.h8[player][aC]);
						break
					}
	}, this.k0 = function(player, k1) {
		var aC, fl, iJ, iL, fS = ah.h8[player].length,
			k2 = 256 <= fS ? 12 : 32 <= fS ? 6 : 1,
			k3 = fS - 1 - az.k4(k2),
			fU = ad.fU;
		jj = 0;
		loop: for (aC = k3; 0 <= aC; aC -= k2)
			for (iJ = 3; 0 <= iJ; iJ--)
				if ((iL = ad.fJ(ah.h8[player][aC] + fU[iJ]) ? aE.fP : ad.fK(ah.h8[player][aC] + fU[iJ])) === aE.fP || ad.h2(ah.h8[player][aC] + fU[iJ]) && iL !== player && (k1 || bv.fL(player, iL))) {
					for (fl = jj - 1; 0 <= fl; fl--)
						if (jl[fl] === iL) continue loop;
					if (jl[jj] = iL, 8 <= ++jj) return !0
				}
		return 0 < jj
	}, this.k5 = function(player, k1) {
		var aC, iJ, iL, fU = ad.fU;
		for (jj = 0, aC = ah.h8[player].length - 1; 0 <= aC; aC--)
			for (iJ = 3; 0 <= iJ; iJ--)
				if ((iL = ad.fJ(ah.h8[player][aC] + fU[iJ]) ? aE.fP : ad.fK(ah.h8[player][aC] + fU[iJ])) === aE.fP || ad.h2(ah.h8[player][aC] + fU[iJ]) && iL !== player && (k1 || bv.fL(player, iL))) return jl[jj++] = iL, !0;
		return !1
	}, this.k6 = function() {
		for (var fm, aC = jj - 1; 0 <= aC; aC--)
			if (jl[aC] === aE.fP) {
				for (jj--, fm = aC; fm < jj; fm++) jl[fm] = jl[fm + 1];
				return !0
			} return !1
	}, this.k7 = function(player) {
		for (var fm, aC = jj - 1; 0 <= aC; aC--)
			if (ae.k8(player, jl[aC]))
				for (jj--, fm = aC; fm < jj; fm++) jl[fm] = jl[fm + 1];
		return 0 === jj
	}, this.k9 = function() {
		for (var aC = jj - 1; 0 <= aC; aC--)
			if (bD.go.kA(jl[aC])) return !0;
		return !1
	}, this.kB = function() {
		for (var aC = jj - 1; 0 <= aC; aC--) bD.go.kA(jl[aC]) || (jl[aC] = jl[--jj]);
		return 0 < jj
	}, this.kC = function(player) {
		for (var fm, kD = jl[0], kE = ah.hU[kD] + ae.hV(kD, player), aC = jj - 1; 1 <= aC; aC--)(fm = ah.hU[jl[aC]] + ae.hV(jl[aC], player)) < kE && (kD = jl[aC], kE = fm);
		return kD
	}, this.kF = function(player) {
		var k, kG = jl[0];
		if (1 !== jj)
			for (var kH = bO.ft(ah.jM[player] + ah.jL[player], 2), kI = bO.ft(ah.jO[player] + ah.jN[player], 2), fi = kJ(kH - bO.ft(ah.jM[kG] + ah.jL[kG], 2)) + kJ(kI - bO.ft(ah.jO[kG] + ah.jN[kG], 2)), aC = jj - 1; 1 <= aC; aC--)(k = kJ(kH - bO
				.ft(ah.jM[jl[aC]] + ah.jL[jl[aC]], 2)) + kJ(kI - bO.ft(ah.jO[jl[aC]] + ah.jN[jl[aC]], 2))) < fi && (fi = k, kG = jl[aC]);
		return kG
	}, this.kK = function() {
		for (var kL = jl, kM = kL[0], hU = ah.hU, kN = hU[kM], aC = jj - 1; 1 <= aC; aC--) {
			var h0 = kL[aC],
				fm = hU[h0];
			kN < fm && (kM = h0, kN = fm)
		}
		return kM
	}, this.kO = function() {
		return jl[az.k4(jj)]
	}
}

function jb() {
	function ke(player, jw, kU) {
		3 <= kU && 2142 < bi.kk() && (jw === aE.fP || ah.hU[jw] < bO.ft(ah.hU[player], 20)) && aF.kZ(player, 20)
	}

	function kh(player, iB, jw, kU) {
		3 <= kU && kU < 6 && bO.ft(ah.hU[player], 8) > ah.hU[jw] && (iB = Math.max(bO.ft(11 * ah.hU[jw], 5), bO.ft(ah.hU[player], 10)));
		kU = ah.gu[player].length;
		ap.jY.jp(player, jw), ap.jY.jv(player, jw, kU, iB)
	}

	function kd(player, iB) {
		var jw = aE.fP,
			fS = ah.gu[player].length;
		ap.jY.jo(player), ah.gu[player].length !== fS && ap.jY.jv(player, jw, fS, iB)
	}
	this.kP = new Uint8Array(aE.fP), this.di = function() {
		this.kP.fill(0)
	}, this.kQ = function(player, iB) {
		var kS, kU, kV, kW;
		ae.kR(player) && (kS = af.kT(player), 3 <= (kU = aF.iB[player]) && kU < 6 && (iB = Math.max(ah.hU[player] - kS, iB)), kV = ah.h9[player].length, kW = ah.h8[player].length, 30 * ah.hG[player] > aE.kX && kY[player] < 10 && 100 * kW <= kV &&
			aF.kZ(player, 10), aE.iM ? function(player, iB, kU, kS) {
				var jw;
				if (ap.jY.k0(player, !1) || ap.jY.k5(player, !1)) {
					if (!ap.jY.k7(player))
						if (ap.jY.k6()) kd(player, iB), ke(player, aE.fP, kU);
						else {
							if (az.kf(aF.kg[kU])) jw = ap.jY.kC(player);
							else {
								if (ap.jY.k9() && az.kf(aF.ki[kU]) && ap.jY.kB(), 6 === kU) return kh(player, iB, ap.jY.kO(), kU);
								jw = ap.jY.kF(player)
							}
							kh(player, iB, jw, kU), ke(player, jw, kU)
						}
				} else bQ.kb.ee(player) || ap.jc.ee(player) || ! function(player, iB, kU, kS) {
					var kP = ap.ja.kP;
					kP[player] = 0;
					var kl = bj.fQ[player];
					if (0 !== kl) {
						var km = ah.hU[player],
							hG = ah.hG;
						if (player < aE.kn && (iB = km), !(km < hG[player] || 5 === kU && km < kS || 4 === kU && km < bO.ft(kS, 2))) {
							bk.ko(kl);
							for (var fS = bR.fx[0], g6 = bR.g6, aC = az.k4(fS), fm = 0; fm < fS; fm++) {
								var ej = g6[(fm + aC) % fS];
								if (kP[ej]) return bB.kp.kq(player, ej, iB)
							}
							var kr = bQ.z.kr;
							for (fm = 0; fm < fS; fm++)
								if (ej = g6[(fm + aC) % fS], kr[ej] && ej !== player) return bB.kp.kq(player, ej, iB)
						}
					}
				}(player, iB, kU, kS)
			}(player, iB, kU, kS) : (!kW || kV && (kV < kW && !az.k4(10) || 100 * kW <= kV && az.k4(3) || !az.k4(8))) && bQ.kb.ee(player) || function(player, iB, kU) {
				ap.jY.k0(player, !0) || ap.jY.k5(player, !0) ? ap.jY.k7(player) || (ap.jY.k6() ? kd(player, iB) : az.kf(aF.kg[kU]) ? kh(player, iB, ap.jY.kC(player), kU) : 5 === kU ? kh(player, iB, ap.jY.kK(), kU) : (ap.jY.k9() && az.kf(aF
					.ki[kU]) && ap.jY.kB(), kh(player, iB, 6 === kU ? ap.jY.kO() : ap.jY.kF(player), kU))) : ap.jc.ee(player)
			}(player, iB, kU))
	}
}

function c8() {
	var ks = new Uint8Array(aE.fP),
		kt = new Uint16Array(aE.fP),
		ku = new Uint16Array(aE.fP),
		kv = new Uint8Array(aE.fP),
		kw = (this.iB = new Uint8Array(aE.fP), new Uint16Array(aE.fP)),
		kx = new Uint16Array(aE.fP);

	function lC(aC) {
		ks[aC] = 1 + bO.ft(kw[aC] * az.random(), 10 * az.value(100))
	}
	this.ky = null, this.ki = [97, 94, 70, 40, 20, 0, 100], this.kz = [500, 450, 400, 300, 80, 50, 100], this.kg = [0, 0, 5, 25, 50, 100, 0], this.l0 = [60, 74, 112, 200, 256, 512, 512], this.l1 = [1, 2, 3, 4, 6, 8, 1], this.l2 = [500, 450, 400, 300,
		80, 50, 100
	], this.l3 = [100, 150, 250, 400, 600, 1e3, 100], this.dj = function() {
		this.ky = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.di = function() {
		ks.fill(0), kt.fill(0), ku.fill(0), kv.fill(0), this.iB.fill(0), kw.fill(0), kx.fill(0);
		var l4 = aE.kn;
		if (9 === aE.l5) this.l6();
		else if (aE.l7)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.l9 - 1; 0 <= aC; aC--) {
					var iK = aC + l4;
					this.iB[iK] = aE.data.botDifficultyData[iK]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.l9 - 1; 0 <= aC; aC--) this.iB[iK = aC + l4] = aE.data.botDifficultyTeam[bj.lA[bj.fQ[iK]]];
				else if (1 === aE.data.botDifficultyType) {
			var lB = this.ky.length;
			for (aC = aE.l9 - 1; 0 <= aC; aC--) this.iB[aC + l4] = aC % lB
		} else
			for (lB = aE.data.botDifficultyValue, aC = aE.l9 - 1; 0 <= aC; aC--) this.iB[aC + l4] = lB;
		else
			for (var l8 = 8 === aE.l5 ? 1 : 0, aC = aE.l9 - 1; 0 <= aC; aC--) this.iB[aC + l4] = l8;
		for (aC = 0; aC < l4; aC++) this.iB[aC] = 6;
		var fS = aE.fP;
		for (aC = 0; aC < fS; aC++) this.iB[aC] <= 2 ? (kv[aC] = 5, kw[aC] = kx[aC] = 1040, 0 === this.iB[aC] ? (kt[aC] = 980, ku[aC] = 980) : 1 === this.iB[aC] ? (kt[aC] = 980, ku[aC] = 920, kw[aC] = kx[aC] = 1100) : (kt[aC] = 825, ku[aC] =
			750)) : this.iB[aC] <= 4 ? (kv[aC] = 1 + az.k4(20), 3 === this.iB[aC] ? (kt[aC] = ku[aC] = 500, kw[aC] = kx[aC] = 1e3) : (kx[aC] = 250 + az.k4(1501), kw[aC] = 500 + az.k4(501), kt[aC] = 300 + az.k4(201), ku[aC] = 100 + az.k4(
			201))) : this.iB[aC] <= 5 ? (kw[aC] = 1e3, kx[aC] = 1e3, kv[aC] = 35 + az.k4(16), kt[aC] = 300 + az.k4(201), ku[aC] = 50 + az.k4(101)) : (kw[aC] = kx[aC] = 800, kv[aC] = 5, kt[aC] = 10, ku[aC] = 250), lC(aC)
	}, this.l6 = function() {
		for (var f6 = b0.lD, l4 = aE.kn, aC = f6 - 1; 0 <= aC; aC--) this.iB[aC + l4] = 0;
		for (var fm = 0; fm < 6; fm++) {
			for (aC = f6 + b0.lE[fm] - 1; f6 <= aC; aC--) this.iB[aC + l4] = fm;
			f6 += b0.lE[fm]
		}
	}, this.kZ = function(h0, value) {
		ks[h0] = Math.min(value, ks[h0])
	}, this.ee = function(h0) {
		0 == --ks[h0] && ! function(h0) {
			(function(h0) {
				kw[h0] !== kx[h0] && (kw[h0] += kw[h0] < kx[h0] ? 3 : -3);
				kt[h0] !== ku[h0] && (kt[h0] += kt[h0] < ku[h0] ? kv[h0] : -kv[h0], kt[h0] = (Math.abs(kt[h0] - ku[h0]) <= kv[h0] ? ku : kt)[h0]);
				ks[h0] = bO.ft(kw[h0], 10)
			})(h0), ap.ja.kQ(h0, bO.ft(kt[h0] * ah.hU[h0], 1e3))
		}(h0)
	}, this.lH = function(h0, gv) {
		kw[h0] = kx[h0] = gv
	}
}

function jW() {
	var lI = new Uint16Array(aE.fP);

	function lX(player, lV) {
		for (var fS = bR.fx[0], g5 = bR.g5, lj = -1, lk = aE.fP, aC = 0; aC < fS; aC++) {
			var fi, h0 = g5[aC];
			bv.fL(player, h0) && (fi = bP.iy(lV, bP.jK(h0)), -1 === lj || fi < lj) && (lj = fi, lk = h0)
		}
		return lk
	}

	function lZ(lW, lV) {
		if (lW === aE.fP) return 0;
		var h9 = ah.h9[lW],
			li = h9.length;
		if (0 === li) return 0;
		for (var fS = Math.min(li, 10), lk = 0, lj = bP.iy(h9[lk] >> 2, lV), aC = 0; aC < fS; aC++) {
			var iK = az.k4(li),
				fi = bP.iy(h9[iK] >> 2, lV);
			fi < lj && (lj = fi, lk = iK)
		}
		return h9[lk] >> 2
	}

	function le(player, lV, jw, lm) {
		var ln;
		(lm === aE.fP || (ln = bP.jK(jw), lm = bP.jK(lm), bP.iy(lV, ln) < bP.iy(lV, lm))) && (lI[player] = jw)
	}
	this.di = function() {
		lI.fill(aE.fP)
	}, this.ji = function() {
		if (bi.kk() % 109 == 9 && !(am.lJ < 20) && aE.iM && !(bk.lK() < bO.ft(8 * aE.kX, 10))) {
			var lL = bk.lM();
			if (bj.lA[lL]) {
				bk.lN(lL);
				var fS = bR.fx[0];
				if (0 !== fS)
					for (var h = bR.g6, lO = am.lO, lJ = am.lJ, lP = lI, iK = az.k4(fS), aC = 0; aC < lJ; aC++) {
						var hu = lO[aC],
							lQ = h[iK];
						bD.go.lR(hu, lQ) && 512 === lP[hu] && (lP[hu] = lQ, iK = (iK + 1) % fS)
					}
			}
		}
	}, this.ee = function(player) {
		var lV, lY, lW, lS = function(player) {
			var jw = lI[player];
			if (jw !== aE.fP) {
				if (bD.go.ll(jw) && ah.h9[jw]) return jw;
				lI[player] = aE.fP
			}
			return aE.fP
		}(player);
		return function(player) {
			for (var lh = am.lO, li = am.lJ, fS = Math.min(li, li < 17 && 5 === az.k4(20) ? 1 : 16), h1 = az.k4(li), g5 = bR.g5, h9 = ah.h9, gv = 0, aC = 0; aC < fS; aC++) {
				var h0 = lh[(aC + h1) % li];
				h0 !== player && h9[h0].length && (g5[gv++] = h0)
			}
			bR.fx[0] = gv
		}(player), 0 !== bR.fx[0] && (0 < (lY = lZ(lW = lX(player, lV = bP.jP(player)), lV)) && bQ.la.lb(player, bQ.lc.ld(lY, lV)) ? (le(player, lV, lW, lS), !0) : 0 < (lW = function(player, lV) {
			for (var fS = bR.fx[0], g5 = bR.g5, lP = lI, h1 = 0, aC = 0; aC < fS; aC++) {
				var h0 = g5[aC],
					h0 = lP[h0];
				h0 !== aE.fP && bD.go.ll(h0) && player !== h0 && bv.fL(player, h0) && (g5[h1++] = h0)
			}
			return 0 !== (bR.fx[0] = h1) ? lZ(lX(player, lV), lV) : 0
		}(player, lV)) && bQ.la.lb(player, bQ.lc.ld(lW, lV)) ? (le(player, lV, ad.fK(lW << 2), lS), !0) : !!(0 < (lY = lZ(lS, lV)) && bQ.la.lb(player, bQ.lc.ld(lY, lV))))
	}
}

function jd() {
	function lr(player) {
		for (var fr = ah.fr[player], fS = fr.length, fs = Math.max(bO.ft(fS, 12), 1), fU = ad.fU, eG = az.k4(fS), aC = 0; aC < fS; aC += fs)
			for (var fH = fr[(aC + eG) % fS], fV = 3; 0 <= fV; fV--) {
				var fW = fH + fU[fV];
				if (ad.fX(fW)) return {
					f6: fW,
					id: ad.fA(fW),
					h0: player
				}
			}
		return null
	}

	function lw(player, ly) {
		var iB = bD.go.lz(player, aF.l2[aF.iB[player]]);
		ah.gu[player].push(ly.f6), ae.ei(player, iB, ly.h0), aG.ju(player, !0)
	}
	this.ee = function(player) {
		return !!bV.f7(bV.f8) && !!aE.data.passableMountains && 0 !== ah.fr[player].length && function(player) {
			var lq = lr(player);
			if (null === lq) return !1;
			! function(player) {
				for (var lO = am.lO, lJ = am.lJ, fS = Math.min(lJ, 12), h1 = az.k4(lJ), g5 = bR.g5, fr = ah.fr, gv = 0, aC = 0; aC < fS; aC++) {
					var h0 = lO[(aC + h1) % lJ];
					h0 !== player && fr[h0].length && bv.fL(player, h0) && (g5[gv++] = h0)
				}
				bR.fx[0] = gv
			}(player);
			var lt = function(f9) {
				for (var fS = bR.fx[0], g5 = bR.g5, aC = 0; aC < fS; aC++) {
					var ly = lr(g5[aC]);
					if (null !== ly && ly.id === f9) return ly
				}
				return null
			}(lq.id);
			return null !== lt ? (lw(player, lt), !0) : function(player, f9) {
				var fS = ap.jR.lx;
				if (0 !== fS)
					for (var f6 = ap.jR.eW[az.k4(fS)] << 2, fU = ad.fU, fV = az.k4(4);;) {
						if (f6 += fU[fV], ad.fX(f6)) {
							if (ad.fA(f6) === f9) return lw(player, {
								f6: f6,
								h0: aE.fP
							}), !0;
							break
						}
						if (!ad.fJ(f6)) break
					}
				return !1
			}(player, lq.id)
		}(player)
	}
}

function jU() {
	this.ee = function(player) {
		return bQ.la.lb(player, function(player) {
			var fS = ap.jR.lx;
			if (0 === fS) return -1;
			for (var li = Math.min(fS, ap.performance.m1 ? fS : 10), eW = ap.jR.eW, k3 = bO.ft(az.random() * fS, az.value(100)), e = k3 + li, m2 = az.jQ(ah.jL[player], ah.jM[player]), m3 = az.jQ(ah.jN[player], ah.jO[player]), lk = -1,
					fi = bP.iz(0, 0, bV.fd, bV.fe), aC = k3; aC < e; aC++) {
				var h1 = aC % fS,
					m4 = bP.fk(m2, m3, eW[h1]);
				m4 < fi && (fi = m4, lk = h1)
			}
			return -1 !== lk ? function(fE, m2, m3) {
				var hh = bP.fa(fE),
					hj = bP.fc(fE),
					ip = m2 - hh,
					is = m3 - hj;
				Math.abs(ip) >= Math.abs(is) ? (is = 0, ip = Math.sign(ip)) : (ip = 0, is = Math.sign(is));
				ip === is && (ip = 1);
				for (;;) {
					if (hh += ip, hj += is, !bP.fo(hh, hj)) break;
					if (fE = bP.fp(hh, hj), ad.ii(bP.fI(fE))) return fE
				}
				return -1
			}(eW[lk], m2, m3) : -1
		}(player))
	}
}

function jf() {
	this.ee = function(player) {
		var m6 = function(player) {
			for (var m9 = bQ.m9.mB(), fS = m9.length, li = Math.min(fS, 32), iK = az.k4(fS), aC = 0; aC < li; aC++) {
				var m6 = (aC + iK) % fS,
					m8 = m9[m6],
					iw = m8[0],
					ix = m8[m8.length - 1];
				if (bQ.lc.mC(player, iw) && bQ.lc.mD(player, ix)) return m6;
				if (bQ.lc.mC(player, ix) && bQ.lc.mD(player, iw)) return 0 <= (m6 = bQ.m9.mE(ix, iw)) ? m6 : bQ.m9.mF() ? -1 : bQ.m9.mG(bQ.m9.mH(m8))
			}
			return -1
		}(player);
		return -1 !== m6 && (m6 = bQ.m9.get(m6), !bQ.lc.mA(player, m6)) && (bR.h[0] = m6, !0)
	}
}

function jX() {
	this.m1 = 0, this.di = function() {
		this.m1 = 0
	}, this.ee = function() {
		if (!this.m1 && bi.kk() % 30 == 7 && bD.go.mK(90) && (ap.performance.m1 = 1)) {
			if (aE.iM) {
				var lL = bk.lM();
				if (bj.lA[lL]) {
					bk.ko(lL);
					var h = bR.g6,
						fS = bR.fx[0];
					if (0 !== fS)
						for (var mN = Math.min(100 + 10 * (fS - 1), 400), aC = 0; aC < fS; aC++) aF.lH(h[aC], mN)
				}
			}
			aF.lH(mO[0], 100)
		}
	}
}

function jS() {
	var mP = 0,
		mQ = 0,
		mR = 300,
		mS = 300,
		mT = 0;
	this.lx = 0, this.eW = new Uint32Array(512), this.di = function() {
		mQ = mP = 0, this.lx = 0, mT = 0
	}, this.ee = function() {
		if (function() {
				var fS = ap.jR.lx;
				if (0 === fS) return 1;
				var eW = ap.jR.eW;
				if (bi.kk() % 35 == 6) {
					for (var aC = fS - 1; 0 <= aC; aC--) ad.fJ(eW[aC] << 2) || (fS--, eW[aC] = eW[fS]);
					ap.jR.lx = fS
				}
				return fS < eW.length
			}())
			if (mR <= mP) {
				var mX = ap.jR.lx;
				if (mX) {
					if (bi.kk() % 350 != 1) return;
					if (mT !== mX) return void(mT = mX);
					if (!bD.go.kA(mO[0])) return
				} else if (bi.kk() % 12 != 8) return;
				bD.go.mY() || ap.jR.di()
			} else {
				var aC, j = bV.fd,
					mZ = j - 2,
					mX = mZ * (bV.fe - 2),
					ma = mR,
					eW = ap.jR.eW,
					li = ap.jR.lx,
					mb = eW.length,
					h1 = Math.min(mQ + ma * ((1 + 19 * ap.performance.m1) * mS), mX);
				for (aC = mQ; aC < h1; aC += ma) {
					var f6 = 4 * (aC % mZ + (bO.ft(aC, mZ) + 1) * j + 1);
					if (ad.fJ(f6) && (eW[li] = f6 >> 2, ++li === mb)) {
						aC += ma;
						break
					}
				}(mQ = aC) >= mX && (mQ = ++mP), ap.jR.lx = li
			}
	}
}

function jh() {
	this.ee = function() {
		if (bi.kk() % 51 == 45)
			for (var fS = bQ.z.md, me = bQ.z.me, mf = bQ.z.mf, mg = bQ.z.mg, mh = bQ.z.mh, l3 = aF.l3, iB = aF.iB, aC = 0; aC < fS; aC++) {
				var m8, player, ml, mi = me[aC];
				mi % 64 == 6 || (m8 = mf[aC], (player = bQ.lc.mj(m8[m8.length - 1])) < 0) || !bD.go.lR(player, mh[aC] >> 3) || az.k4(1e3) >= l3[iB[player]] || ! function(mp, m8) {
					for (var fS = m8.length - 1, mq = bQ.z.mr[mp], fi = 0, aC = mq + 1; aC < fS; aC++) fi += bP.iv(m8[aC], m8[aC + 1]);
					return (fi += bP.iv(bP.jD(bQ.z.ms[mp]), m8[mq + 1])) <= 60
				}(aC, m8) || (ml = mg[aC], 64 <= mi && bQ.mm.mn(player, ml)) || function(player, m8, ml, mp, mi) {
					bQ.mt.mu(player) && bD.go.mv(player, aF.kz[aF.iB[player]], 32, 0) && (bQ.z.me[mp] = 64 + mi % 64, bQ.mm.ei(ml, bQ.z.mw), bR.h[0] = bQ.m9.mH(m8), bR.g4[1] = 6, bD.go.mx(player), bQ.z.my(player))
				}(player, m8, ml, aC, mi)
			}
	}
}

function mz() {
	aO.ee(), ag.ee(), aX.n0(), b1.z.ee()
}

function n1() {
	b2.ee(), aH.ee(), ao.ee(), af.ee(), b5.ee(), aG.ee(), ap.ee(), bQ.z.ee(), am.n2(), aW.ee(), b0.ee(), bY.ee(), ag.ee(), ag.n3(), aX.ee(), bS.ee(), aV.ee(), aQ.ee(), b9.n4(), aO.ee(), b6.ee(), aS.ee(), ax.ee(), bg.ee(), bk.ee(), b1.z.ee(), b1.n5
		.ee(), u.ee(), bX.eR.ee(), bC.ee(), bi.ee()
}

function n6() {
	aI.ee(), aY.ee(), aR.ee(), aw.ee(), bF.ee(), b8.ee(), b9.ee(), ay.n7()
}

function n8() {
	aW.n9(!1), aQ.n9(), aX.n9(!1), aV.n9(), aS.n9(), ax.n9(), ag.n9(!1), bk.nA()
}

function nB() {
	ag.n9(!1) && (bi.dq = !0), b1.z.ee()
}

function c9() {
	var nC, nD, nE;

	function nG(nI) {
		for (var aC = nC - 1; 0 <= aC; aC--) 0 === nE[nD[aC]] && ah.hG[nD[aC]] >= nI && gW(nD[aC])
	}

	function nF(player) {
		var ea;
		64 === nE[player] ? nE[player] = 6 : (ea = ah.hG[player], nE[player] = ea < 1e3 ? 3 : ea < 1e4 ? 2 : ea < 6e4 ? 1 : 0)
	}
	this.di = function() {
		nC = 0, nD = new Uint16Array(aE.fP), nE = new Uint8Array(aE.fP)
	}, this.ee = function() {
		for (var aC = nC - 1; 0 <= aC; aC--) 64 === nE[nD[aC]] ? nF(nD[aC]) : 0 == nE[nD[aC]]-- && (nF(nD[aC]), gW(nD[aC]));
		16e4 <= ah.hG[mO[0]] && (nG(16e4), 3e5 <= ah.hG[mO[0]]) && nG(3e5), bD.go.ll(aE.fC) && (bg.nJ[7] = Math.max(ah.hG[aE.fC], bg.nJ[7]))
	}, this.gq = function(player) {
		for (var fl, aC = nC - 1; 0 <= aC; aC--)
			if (player === nD[aC]) {
				for (nC--, fl = aC; fl < nC; fl++) nD[fl] = nD[fl + 1];
				return
			}
	}, this.ju = function(player, nK) {
		for (var aC = nC - 1; 0 <= aC; aC--)
			if (player === nD[aC]) return;
		nD[nC++] = player, nE[player] = nK ? 2 : 64
	}
}

function cA() {
	var size, kb;
	this.di = function() {
		size = aE.l9, kb = new Uint16Array(aE.fP);
		for (var kn = aE.kn, aC = aE.l9 - 1; 0 <= aC; aC--) kb[aC] = kn + aC
	}, this.ee = function() {
		ap.jg.ee();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nN[kb[aC]]) {
				fl = void 0;
				var fl = aC;
				size--, kb[fl] = kb[size]
			} else aF.ee(kb[aC])
	}, this.nM = function(h0) {
		kb[size++] = h0
	}
}

function cB() {
	var nP, nQ, nR, nS, nT, nU, nV, nW, nX, nY, nZ, na, nb, nc = !1,
		nd = !1;

	function ne(nf) {
		na = bi.eZ, nR = nS = nQ = 0, nT = (nb = 33) / nf, nP = 1 / (nf / nb / 4), nU = (i.j / 2 + j6) / ie, nV = (i.k / 2 + j7) / ie, nW = ie
	}

	function nm(aC) {
		var no; - 1 !== aC && (aC = bP.jD(bQ.z.ms[aC]), no = bP.fa(aC) - 15, aC = bP.fc(aC) - 15, aI.ni(no, aC, 29 + no, 29 + aC))
	}

	function nz(eL) {
		Math.abs(Math.log(nZ / nW)) < .125 && (nZ = eL * nW)
	}

	function ny(no, np, o1, o2) {
		nX = (no + o1 + 1) / 2, nY = (np + o2 + 1) / 2;
		o1 = i.j / (o1 - no + 1), no = i.k / (o2 - np + 1);
		nZ = .9 * (o1 < no ? o1 : no)
	}
	this.ng = function() {
		return nc
	}, this.nh = function() {
		ne(1), this.ni(0, 0, bV.fd - 1, bV.fe - 1), aE.hq || aE.hb || this.nj(aE.fC, 3e3, !0, .3)
	}, this.nk = function(player, nl) {
		nm(bQ.lc.nn(player, nl))
	}, this.nj = function(player, nf, nq, zoom) {
		aE.nr || nc && !nq && nd || (0 === ah.hG[player] ? nm(bQ.lc.ns(player)) : (aT.nt = !1, nd = nq, ne(nf), function(player) {
			nX = (ah.jL[player] + ah.jM[player] + 1) / 2, nY = (ah.jN[player] + ah.jO[player] + 1) / 2
		}(player), function(zoom, player) {
			var ip = ah.jM[player] - ah.jL[player] + 1,
				player = ah.jO[player] - ah.jN[player] + 1,
				fl = i.j / ip,
				fm = i.k / player,
				fl = (nZ = fl < fm ? fl : fm, 0 !== zoom ? zoom : ip < 20 && player < 20 ? .5 : .9);
			nZ *= fl, nz(7 / 8)
		}(zoom, player), nc = !0, at.nw()))
	}, this.nx = function(nf) {
		aE.hb || aE.nr || (aT.nt = !1, nd = !1, ne(nf), ny(0, 0, bV.fd - 1, bV.fe - 1), nz(7 / 8), nc = !0, at.nw())
	}, this.ni = function(no, np, o1, o2) {
		nc = !1, ny(no, np, o1, o2), ie = nZ, aT.o3(nX, i.j / 2), aT.o4(nY, i.k / 2), bd.o5(), bi.dq = !0
	}, this.o6 = function() {
		return !(nc && nd || (nc = !1))
	}, this.ee = function() {
		var o9, oA, fV, oD;
		nc && (nQ < .5 ? nS < nT && (nS += nT * nP, nR = nQ) : 1 - nR < nQ && (nS = (nS -= nT * nP) < nT * nP ? nT * nP : nS), na = na >= bi.eZ ? bi.eZ - 1 : na, fV = bi.eZ - na, nQ = 1e3 < fV || 1 < (nQ += nS * fV / nb) ? 1 : nQ, na = bi.eZ,
			fV = ie, o9 = j6, oA = j7, fV = (ie = nW * Math.pow(nZ / nW, nQ)) / fV, oD = 1 - (nW * Math.pow(nZ / nW, 1 - nQ) - nW) / (nZ - nW), aT.o3(nU + oD * (nX - nU), i.j / 2), aT.o4(nV + oD * (nY - nV), i.k / 2), ag.zoom(fV, (o9 * fV -
				j6) / (1 - fV), (oA * fV - j7) / (1 - fV)), bd.o5(), 1 <= nQ && (nc = !1, be.oE = !0), bi.dq = !0)
	}
}

function c3() {
	var ej = bD.color;
	this.oF = ej.oG(0, 0, 0), this.oH = ej.oI(0, 0, 0, .7), this.oJ = ej.oI(0, 0, 0, .5), this.oK = ej.oI(0, 0, 0, .85), this.oL = ej.oI(0, 0, 0, .75), this.oM = ej.oI(0, 0, 0, .6), this.oN = ej.oI(0, 0, 0, .35), this.oO = ej.oG(255, 255, 255), this
		.oP = ej.oI(255, 255, 255, .3), this.oQ = ej.oI(255, 255, 255, .6), this.oR = ej.oI(255, 255, 255, .4), this.oS = ej.oI(255, 255, 255, .25), this.oT = ej.oI(255, 255, 255, .85), this.oU = ej.oI(255, 255, 255, .75), this.oV = ej.oI(255, 255,
			255, .15), this.oW = ej.oI(255, 255, 255, .11), this.oX = ej.oG(128, 128, 128), this.oY = ej.oI(64, 64, 64, .75), this.oZ = ej.oI(88, 88, 88, .83), this.oa = ej.oI(60, 60, 60, .85), this.ob = ej.oI(80, 60, 60, .85), this.oc = ej.oG(170,
			170, 170), this.od = ej.oG(200, 235, 245), this.oe = ej.oG(30, 255, 30), this.og = ej.oG(0, 200, 0), this.oh = ej.oG(128, 255, 128), this.oi = ej.oI(10, 65, 10, .75), this.oj = ej.oI(0, 255, 0, .6), this.ok = ej.oI(0, 255, 0, .5), this
		.ol = ej.oI(0, 200, 0, .5), this.om = ej.oI(0, 100, 0, .75), this.on = ej.oI(0, 60, 0, .8), this.oo = ej.oI(0, 255, 0, .3), this.op = ej.oI(0, 180, 0, .6), this.oq = ej.oI(0, 120, 0, .85), this.or = ej.oG(0, 120, 0), this.os = ej.oI(0, 70, 0,
			.85), this.ot = ej.oG(190, 230, 190), this.ou = ej.oG(0, 255, 0), this.ov = ej.oG(255, 120, 120), this.ow = ej.oG(255, 160, 160), this.ox = ej.oG(255, 70, 70), this.oy = ej.oG(230, 0, 0), this.oz = ej.oI(220, 0, 0, .6), this.p0 = ej.oI(
			255, 100, 100, .8), this.p1 = ej.oI(100, 0, 0, .85), this.p2 = ej.oI(60, 0, 0, .85), this.p3 = ej.oI(200, 0, 0, .6), this.p4 = ej.oI(120, 0, 0, .85), this.p5 = ej.oG(255, 70, 10), this.p6 = ej.oG(230, 190, 190), this.p7 = ej.oG(255, 0,
		0), this.p8 = ej.oG(255, 0, 255), this.p9 = ej.oI(60, 0, 60, .85), this.pA = ej.oI(0, 60, 60, .85), this.pB = ej.oI(10, 60, 60, .9), this.pC = ej.oI(0, 96, 96, .75), this.pD = ej.oG(0, 255, 255), this.pE = ej.oG(160, 160, 255), this.pF = ej
		.oI(0, 40, 90, .75), this.pG = ej.oI(0, 0, 255, .6), this.pH = ej.oG(200, 200, 255), this.pI = ej.oI(50, 50, 255, .83), this.pJ = ej.oI(20, 90, 150, .75), this.pK = ej.oI(10, 10, 120, .75), this.pL = ej.oG(255, 120, 100), this.pM = ej.oI(255,
			255, 0, .5), this.pN = ej.oI(255, 255, 150, .2), this.pO = ej.oG(255, 255, 0), this.pP = ej.oG(255, 255, 200), this.pQ = ej.oI(200, 200, 0, .6), this.pR = ej.oI(140, 120, 0, .75), this.pS = ej.oI(180, 160, 40, .75), this.pT = ej.oI(70,
			50, 20, .85), this.pU = ej.oI(30, 30, 0, .85), this.pV = ej.oI(60, 60, 0, .85), this.pW = ej.oG(255, 255, 100), this.pX = ej.oG(255, 255, 140), this.pY = ej.oI(255, 140, 0, .75), this.pZ = ej.oI(70, 40, 0, .85), this.pa = ej.oG(255, 150,
			0), this.pb = ej.oI(255, 200, 80, .85), this.pc = ej.oI(0, 0, 0, 0), this.pd = ej.oI(255, 255, 255, 0), this.pe = ej.oI(254, 254, 254, 0)
}

function d3() {
	this.hs = new pf, this.go = new pg, this.ph = new pi, this.pj = new pk, this.kp = new pl
}

function pf() {
	this.pm = 1, this.ht = function(fE) {
		aE.l7 ? bB.ph.ht(aE.fC, fE) : b1.pn.po(fE)
	}, this.hz = function(j5, jw) {
		this.pm && (this.pm = 0, bm.pp.pq(182, j5)), aE.l7 ? bB.ph.hz(aE.fC, j5, jw) : b1.pn.pr(j5, jw)
	}, this.ps = function(j5, pt) {
		aE.l7 ? bB.ph.pu(aE.fC, j5, pt) : b1.pn.pv(j5, pt)
	}, this.i4 = function(j5, fE) {
		fE = (fE << 3) + bR.g4[6];
		aE.l7 ? bB.ph.i4(aE.fC, j5, fE) : bQ.mt.mu(aE.fC) && b1.pn.px(j5, fE)
	}, this.i7 = function(j5) {
		849 === j5 && (j5 = 850);
		var nl = bR.g4[3];
		aE.l7 ? bB.ph.i7(aE.fC, j5, nl) : bQ.i5.py(aE.fC, nl) && b1.pn.pz(j5, nl)
	}, this.q0 = function(nl) {
		aE.l7 ? bB.ph.q0(aE.fC, nl) : b1.pn.pz(849, nl)
	}, this.q1 = function(jw) {
		aE.l7 ? bB.ph.q1(aE.fC, jw) : b1.pn.q2(jw)
	}, this.q3 = function(q4) {
		aE.l7 ? bB.ph.q5(aE.fC, q4) : b1.pn.q6(q4)
	}, this.iG = function(q7) {
		aE.l7 ? bB.ph.iG(aE.fC, q7) : b1.pn.q8(q7)
	}, this.q9 = function() {
		aE.l7 ? bB.ph.q9(aE.fC) : b1.pn.qA()
	}, this.iD = function() {
		aE.l7 ? bB.ph.iD(aE.fC) : b1.pn.q2(513)
	}, this.hv = function(j5, fE, jw) {
		aE.l7 ? bB.ph.hv(aE.fC, j5, fE, jw) : b1.pn.qB(j5, fE, jw)
	}
}

function pl() {
	this.kq = function(player, pt, iB) {
		bD.go.qC(player, iB, pt) && (af.ps(player, pt), !bD.go.kA(pt)) && ap.ja.kP[pt] && ap.ja.kP[pt]--
	}, this.qD = function(player, pt, iB) {
		bD.go.qE(iB, pt) ? ao.ei(pt, bR.fz[0]) && (bt.qF(player, pt, bR.fz[0], 1), bD.go.gr(pt, bR.fz[0]), bg.qG(player, pt), ag.qH(pt, bR.fz[0])) : bg.gs(player, iB, 12)
	}
}

function pg() {
	this.qI = function(q4, player) {
		aO.q3(aE.fC, player, q4), b1.pn.qJ(q4, player)
	}, this.qK = function(player) {
		aO.qL(player, 0), b1.pn.qM(player)
	}, this.qN = function(qO, player) {
		aO.qP(qO, player), b1.pn.qQ(qO, player)
	}, this.qR = function() {
		aE.l7 || aE.hb || b1.qS.qR()
	}
}

function pk() {
	this.ee = function(aD) {
		var id, gB, o6;
		for (bK.di(aD), bK.eH += 2, o6 = 8 * bK.size; bK.eH + 8 <= o6;) id = bK.qT(4), gB = bK.qT(9), 0 === id ? this.qU(id, gB, bK.qT(22)) : 1 === id ? this.qU(id, gB, bK.qT(10), bK.qT(10)) : 2 === id ? this.qU(id, gB, bK.qT(10), bK.qT(9)) :
			3 === id ? this.qU(id, gB, bK.qT(10), bK.qT(27)) : 4 === id ? this.qU(id, gB, bK.qT(10), bK.qT(16)) : 5 === id || 6 === id ? this.qU(id, gB, bK.qT(10)) : 7 === id ? this.qU(id, gB, bK.qT(1)) : 10 === id ? this.qU(id, gB, bK.qT(20), bK
				.qT(22)) : this.qU(id, gB)
	}, this.qV = [], this.qW = function() {
		for (var qY = 0, qZ = 0, qa = 0, qb = 0, qc = 0, qd = 0, aC = 0; aC < 512; aC++) qY += ah.nN[aC], qZ += ah.hG[aC], qa += ah.hU[aC], qb += bQ.z.kr[aC];
		qc += bQ.z.md, qd += am.lJ, this.qV.push(qa % 1073741824 * 4 + (qY + qZ + qb + qc + qd) % 4)
	}, this.qU = function(id, gB, gD, gF) {
		0 === id ? bB.ph.ht(gB, gD) : 1 === id ? bB.ph.hz(gB, gD, gF) : 2 === id ? bB.ph.pu(gB, gD, gF) : 3 === id ? bB.ph.i4(gB, gD, gF) : 4 === id ? bB.ph.i7(gB, gD, gF) : 5 === id ? bB.ph.q1(gB, gD) : 6 === id ? bB.ph.q5(gB, gD) : 7 === id ?
			bB.ph.iG(gB, gD) : 8 === id ? bB.ph.q9(gB) : 9 === id ? bB.ph.qe(gB) : 10 === id && bB.ph.hv(gB, gD >> 10, gF, gD % 1024)
	}
}

function pi() {
	this.ht = function(player, fE) {
		bD.go.hd(0) && bD.go.he(player) && bP.jA(fE) && (bC.qf.qg(0, player, fE), aE.qh.ei(player, fE))
	}, this.hz = function(player, j5, jw) {
		bD.go.hd(1) && bD.go.he(player) && bD.go.qi(player, jw) && bD.go.mv(player, j5, 12, 0) && bD.go.qj(player, jw) && ((jw = ae.k8(player, bR.fO[0])) || ae.kR(player)) && (ah.qk[player]++, bC.qf.qg(1, player, j5, bR.fO[0]), ap.jY.jm(player,
			jw)) && (bD.go.mx(player), bg.ql(player, j5), ap.jY.js(player))
	}, this.pu = function(player, j5, pt) {
		bD.go.hd(1) && bD.go.he(player) && aE.iM && bD.go.qi(player, pt) && bD.go.qm(player, pt) && bD.go.qC(player, bD.go.j4(player, j5), pt) && ao.ei(pt, bR.fz[0]) && (bC.qf.qg(2, player, j5, pt), af.ps(player, pt))
	}, this.i4 = function(player, j5, pw) {
		bR.g4[1] = 7 & pw;
		var fE = pw >> 3;
		bD.go.hd(1) && bD.go.he(player) && bP.jA(fE) && bQ.mt.mu(player) && bQ.mt.qn(fE) && bD.go.mv(player, j5, 32, 0) && bQ.la.qo(player, fE, 1) && (bg.qp(player), bC.qf.qg(3, player, j5, pw), bD.go.mx(player), bo.qq.i4(player), bQ.z.my(
			player))
	}, this.i7 = function(player, j5, nl) {
		849 === j5 ? this.q0(player, nl) : bD.go.hd(1) && bD.go.he(player) && bD.go.mv(player, j5, 32, 0) && bQ.i5.qr(player, nl) && (bg.qp(player), bC.qf.qg(4, player, j5, nl), bD.go.mx(player), bo.qq.i7(player), bQ.z.my(player))
	}, this.q0 = function(player, nl) {
		bD.go.hd(1) && bD.go.he(player) && bQ.qs.ee(player, nl) && bC.qf.qg(4, player, 849, nl)
	}, this.q1 = function(player, jw) {
		513 === jw ? this.iD(player) : bD.go.hd(1) && bD.go.he(player) && (jw = Math.min(jw, aE.fP), ae.k8(player, jw)) && (bC.qf.qg(5, player, jw), ae.qt(player, jw))
	}, this.q5 = function(player, q4) {
		(bD.go.hd(1) || bD.go.hd(2)) && bD.go.he(player) && (q4 = bO.ia(q4, 0, 1023), bC.qf.qg(6, player, q4), ag.qu(player, 0, q4))
	}, this.iG = function(player, q7) {
		ax.iF(player) && (bC.qf.qg(7, player, q7), ax.qv(player, q7))
	}, this.q9 = function(player) {
		(bD.go.hd(0) || bD.go.hd(1)) && bD.go.he(player) && aN.qw(player) && (bC.qf.qg(8, player), bT.q9(player))
	}, this.qe = function(player) {
		bC.qf.qg(9, player), bT.qe(player)
	}, this.iD = function(player) {
		ax.iH(player) && (bC.qf.qg(5, player, 513), ax.iD(player))
	}, this.hv = function(player, j5, fE, jw) {
		bD.go.hd(1) && bD.go.he(player) && bD.go.qi(player, jw) && bD.go.qj(player, jw) && bP.jA(fE) && an.f3.fM(player, fE) && (ae.k8(player, bR.fO[0]) || ae.kR(player)) && (bC.qf.qg(10, player, (j5 << 10) + bR.fO[0], fE), jw = bD.go.lz(player,
			j5), ah.gu[player].push(bR.fT[0]), ae.ei(player, jw, bR.fO[0]), aG.ju(player, !0), bg.qx(player))
	}
}

function qy() {
	var r0;
	this.qz = [], this.r0 = document.createElement("div"), this.r1 = function(r2, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = r2, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.r0.appendChild(
			title), title
	}, this.r3 = function(r2, marginBottom) {
		var r4 = document.createElement("p");
		return r4.textContent = r2, r4.style.fontSize = "0.75em", r4.style.lineHeight = "1.2em", r4.style.marginBottom = marginBottom || "0", this.r0.appendChild(r4), r4
	}, this.r5 = function(r2) {
		var r6 = document.createElement("p");
		return r6.textContent = r2, r6.style.fontSize = "1em", r6.style.marginBottom = "0", r6.style.whiteSpace = "pre-wrap", r6.style.overflowWrap = "break-word", this.r0.appendChild(r6), r6
	}, this.r7 = function(r8, fontSize) {
		var r0 = document.createElement("div");
		return r0.innerHTML = r8, r0.style.fontSize = fontSize || "1em", r0.style.lineHeight = "1.2em", this.r0.appendChild(r0), r0
	}, this.r9 = function(rA) {
		for (var rB = rA.rB, fS = rB.length, aC = 0; aC < fS; aC++) this.r0.appendChild(rB[aC])
	}, this.rC = function(rD) {
		return this.qz.push(rD), this.r0.appendChild(rD.e), rD
	}, this.resize = function() {
		for (var fS = this.qz.length, aC = 0; aC < fS; aC++) this.qz[aC].resize && this.qz[aC].resize()
	}, (r0 = this.r0).style.position = "absolute", r0.style.height = "auto", r0.style.padding = "0.5em"
}

function rE(rF, rG) {
	var r0 = document.createElement("div");

	function rO() {
		var aC, rP, k, h1, fV, rK = i.l * r0.offsetWidth,
			rQ = new Float64Array(function(rK) {
				var j = .25 * bD.rL.rM(.6) * i.ic;
				return Math.max(Math.floor(rK / j), 1)
			}(rK)),
			rR = bf.rR,
			rS = (rK - (rQ.length + 1) * bf.gap) / (rQ.length * i.l);
		for (rQ.fill(rR), aC = 0; aC < rG.length; aC++) rP = (fV = rG[aC].r0).style, k = bD.rT.min(rQ), h1 = rQ.indexOf(k), rP.top = bD.rL.rU(k), rP.left = bD.rL.rU(rR + h1 * (rS + rR)), rP.width = bD.rL.rU(rS), bD.rL.rV(fV, 5), rQ[h1] += fV
			.offsetHeight + 3 * rR;
		r0.style.height = bD.rL.rU(bD.rT.max(rQ) - 2 * rR)
	}
	this.rH = r0, this.rI = rG, this.resize = function() {
		var aC;
		for (aC = 0; aC < rG.length; aC++) rG[aC].resize();
		rO(), rO()
	}, r0.style.width = "100%", r0.style.maxWidth = "100%", rF.style.lineHeight = "1.5em", rF.style.overflowX = "hidden", rF.style.overflowY = "auto";
	for (var aC = 0; aC < rG.length; aC++) r0.appendChild(rG[aC].r0);
	rF.appendChild(r0)
}

function x(rW, rX, rY, rZ, ra) {
	var self, rb = document.createElement("button");

	function ri() {
		var ro;
		bM.rn() || (ro = bD.color.rp(rY), !1 !== rZ && 0 < ro[0] && ro[0] < 255 && ro[0] === ro[1] && ro[0] === ro[2]) || (128 < ro[0] && 128 < ro[1] && 128 < ro[2] ? rb.style.backgroundColor = bD.color.rq(rY, -50) : rb.style.backgroundColor = bD
			.color.rq(rY, ro[3] && ro[3] < 120 ? 150 : 50))
	}

	function rh() {
		if (rZ) {
			var ro = bD.color.rp(rY);
			if (ro[0] === ro[1] && ro[0] === ro[2]) return
		}
		rX && ((ro = rX(this)) ? 2 === ro && ri() : rs(this))
	}

	function rk() {
		this.style.backgroundColor = rY
	}

	function rj() {
		rs(this)
	}

	function rs(fV) {
		fV.style.backgroundColor = rY, fV.blur()
	}
	this.button = rb, this.rc = rX, this.rd = rY, this.rg = function(rl) {
		rl = 1.1 - Math.min(.01 * rW.length, .6) + .2 * rl;
		rb.style.fontSize = rl.toFixed(1) + "em"
	}, this.rf = function(ej) {
		ej ? 1 === ej ? ej = bE.oa : 2 === ej && (rZ = 1, ej = bE.oa) : (rZ = 0, ej = bE.oK), this.rd = rY = ej, rb.style.backgroundColor = ej
	}, self = this, rb.innerHTML = rW, rb.style.color = ra ? bE.pO : bE.oO, rb.style.userSelect = "none", rb.style.outline = "none", rb.style.overflowWrap = "break-word", self.rf(rY), rb.style.border = "none", rb.style.font = "inherit", self.rg(
		0), rb.style.padding = "0em 0.3em", rb.onclick = rh, rb.addEventListener("mouseover", ri), rb.addEventListener("mouseout", rj), rb.addEventListener("focus", ri), rb.addEventListener("blur", rk)
}

function rt(ru, rF) {
	var r0;
	this.resize = function() {
		for (var aC = 0; aC < ru.length; aC++) bD.rL.rV(ru[aC].button);
		r0.style.gap = r0.style.padding = bD.rL.rU(bf.rR)
	}, (r0 = document.createElement("div")).style.display = "grid", r0.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", r0.style.overflowY = "auto", r0.style.gridAutoRows = "5.3em", r0.style.maxHeight = "100%";
	for (var aC = 0; aC < ru.length; aC++) ru[aC].rg(1), r0.appendChild(ru[aC].button);
	rF.appendChild(r0)
}

function rw(rx, ry, rz) {
	this.fZ = 0, this.fb = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.rL.rM(rz || .5) * rx[1] * i.ic, i.k - 2 * bf.gap), this.j = Math.min(this.k * (rx[0] / rx[1]), i.j - 2 * bf.gap), this.k = rx[1] * this.j / rx[0], this.fZ = bf.gap + ry[0] * (i.j - this.j - 2 * bf.gap), this.fb = bf
			.gap + ry[1] * (i.k - this.k - 2 * bf.gap)
	}, this.s0 = function() {
		return this.fZ + .5 * this.j
	}
}

function s1(s2, s3) {
	var sC, self, s4 = document.createElement("div"),
		s5 = document.createElement("div"),
		s6 = document.createElement("div"),
		s7 = null,
		sD = (this.s8 = new s9({
			value: "",
			eH: -1
		}, 0, sA, function(e) {
			e.target.value = bD.sK.sL(e.target.value), s7.sJ.textContent = 127 - e.target.value.length
		}), 0),
		sE = 1,
		sF = 0,
		sG = 1048575;

	function sA() {
		s2(), s7.sJ.textContent = 127
	}

	function sU(sT, rD) {
		rD && (rD.sZ = 1, sT.appendChild(bq.sa.transform(rD)))
	}

	function sX(bx) {
		sE ? s4.scrollTop = s4.scrollHeight : bx && (s4.scrollTop = sF)
	}
	this.reset = function(sM) {
			sG = 1048575, s5.textContent = "", sM || this.nA()
		}, this.nA = function() {
			var sN = bq.z.sO[0],
				sN = bq.z.sQ[sN],
				sR = sN.sR,
				fS = sR.length,
				k3 = 1048575 === sG ? 0 : fS - (sN.sS - sG + 1048575) % 1048575;
			if (sG = sN.sS, !(fS <= (k3 = Math.max(k3, 0)))) {
				for (var sT = document.createDocumentFragment(), aC = k3; aC < fS; aC++) sU(sT, bq.lc.sV(sR[aC], bq.lc.sW(sR[aC])));
				s5.appendChild(sT), sX()
			}
		}, this.sY = function(s) {
			var sT = document.createDocumentFragment();
			sU(sT, s), s5.appendChild(sT), sX()
		}, this.show = function(rF) {
			rF.appendChild(s4), rF.appendChild(s6), this.resize(rF)
		}, this.sb = function(rF) {
			u.removeChild(rF, s4), u.removeChild(rF, s6)
		}, this.resize = function(rF) {
			sD = rF ? rF.offsetHeight : sD;
			var rF = bD.rL.sd(.04, .75),
				se = Math.max(rF, sD - rF),
				sf = i.j / i.l,
				sg = .7 * sf,
				sh = bD.rL.rU(sD - rF - se),
				se = (s6.style.height = bD.rL.rU(rF), s4.style.height = bD.rL.rU(se), i.k > i.j || a1.a2.ib() ? (s6.style.top = sh, s4.style.top = bD.rL.rU(sD - se), bD.rL.rV(s4, 8)) : (s4.style.top = sh, s6.style.top = bD.rL.rU(sD - rF), bD.rL.rV(
						s4, 2)), this.s8.e.style.width = bD.rL.rU(sg), this.s8.e.style.fontSize = sC.button.style.fontSize = bD.rL.rU(.5 * rF), bD.rL.rV(this.s8.e, 6), sC.button.style.left = bD.rL.rU(sg), sC.button.style.width = bD.rL.rU(sf - sg),
					.385 * rF);
			a1.a2.ib() && (se *= .8 - .12 * (i.j > i.k)), s5.style.marginLeft = s5.style.marginRight = bD.rL.rU(.5 * se), s5.style.fontSize = bD.rL.rU(se), sX(1)
		}, (self = this).s8.e.sH = 127, s4.style.position = "absolute", s4.style.left = "0", s4.style.width = "100%", s4.style.overflowX = "hidden", s4.style.overflowY = "auto", s4.style.font = "inherit", s4.style.backgroundColor = bE.oM, s4
		.addEventListener("scroll", function() {
			sF = s4.scrollTop, sE = sF < s4.scrollHeight - s4.clientHeight - 2 ? 0 : 1
		}), s5.style.font = "inherit", s6.style.position = "absolute", s6.style.left = "0", s6.style.width = "100%", self.s8.e.setAttribute("placeholder", L(13)), self.s8.e.style.position = "absolute", self.s8.e.style.top = "0", self.s8.e.style
		.left = "0", self.s8.e.style.height = "100%", self.s8.e.style.backgroundColor = bE.oJ, self.s8.e.style.textAlign = "center", (sC = new x(L(14), sA)).button.top = "0", sC.button.style.position = "absolute", sC.button.style.height = "100%", sC
		.rf(bE.pd), s7 = new sI("127", sC.button, 1, 1), s4.appendChild(s5), s6.appendChild(self.s8.e), s6.appendChild(sC.button)
}

function sj(sk, rW, sl) {
	function click() {
		var value = 1 - sk.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + rW, void 0 !== sk.eH ? bm.pp.pq(sk.eH, value) : sk.value = value, sl && sl(value)
	}
	var e;
	rW = rW || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sk.value ? "🟩 " : "⬜ ") + rW, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sm(rF, r8) {
	var r0 = document.createElement("div");
	this.rH = r0, this.resize = function() {
		r0.style.padding = bD.rL.rU(bf.rR), r0.style.lineHeight = bD.rL.rU(bD.rL.sd(.035))
	}, rF.style.overflowX = "hidden", rF.style.overflowY = "auto", r0.innerHTML = r8, rF.appendChild(r0)
}

function sn(so) {
	var r0 = document.createElement("div");
	this.e = r0, this.sp = so, this.resize = function() {
		for (var fS = so.length, aC = 1; aC < fS; aC++) bD.rL.rV(so[aC], 4)
	};
	var aC, fS = so.length;
	for (r0.style.width = "100%", r0.style.height = "2.7em", r0.style.marginTop = "0.6em", r0.style.border = "inherit", aC = 0; aC < fS; aC++) so[aC].style.verticalAlign = "top", so[aC].style.width = (100 / fS).toFixed(2) + "%", so[aC].style.height =
		"100%", so[aC].style.fontSize = "0.75em", r0.appendChild(so[aC])
}

function sq(sr, rY, ss) {
	this.r0 = document.createElement("div"), this.ru = sr;
	var st = 0;
	this.resize = function(rF, sv) {
		var fS = sr.length;
		if (!ss)
			for (var aC = 1; aC < fS; aC++) bD.rL.rV(sr[aC].button, 4);
		for (var sw = 0, aC = 0; aC < fS; aC++) sw += sr[aC].button.offsetWidth;
		if (rF && (st = rF.offsetWidth), sv && sw < st)
			for (aC = 0; aC < fS; aC++) sr[aC].button.style.width = (100 * sr[aC].button.offsetWidth / sw).toFixed(2) + "%";
		else
			for (aC = 0; aC < fS; aC++) sr[aC].button.style.width = "auto";
		sv || this.resize(rF, 1)
	};
	var su = this;
	su.r0.style.height = su.r0.style.maxHeight = "100%";
	for (var aC = 0; aC < sr.length; aC++) sr[aC].rf(rY), sr[aC].button.style.height = "100%", sr[aC].button.style.padding = "0.0em 0.9em", sr[aC].button.style.whiteSpace = "pre", su.r0.appendChild(sr[aC].button)
}

function sx() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.rL.rV(this.e, 8, bE.oX)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sy() {
	var t3, t4, sz = document.createElement("div"),
		t0 = document.createElement("div"),
		t1 = 0,
		t2 = 0;
	this.show = function(fZ, fb, r2, t5, t6, ej) {
			if (t1) {
				if (!t5) return;
				this.sb()
			}
			fZ === fb && -1 === fZ ? (fZ = t3, fb = t4) : (t3 = fZ, t4 = fb);
			var t7 = Math.floor(bD.rL.sd(.018)),
				t6 = (fZ = Math.max(t7 + 2, fZ), t6 || (t2 = t5), t1 = 1, i.j / i.l),
				t5 = (sz.style.whiteSpace = "pre", sz.textContent = r2, bD.rL.rV(sz, 5), sz.style.font = bD.rL.t9(0, bD.rL.sd(.015)), sz.style.padding = "0.3em 0.6em", sz.style.left = fZ + "px", sz.style.top = "0px", document.body.appendChild(sz),
					fZ + sz.offsetWidth - t6),
				r2 = (0 < t5 && (fZ -= t5, fZ = Math.max(t7 + 1, fZ), sz.style.left = fZ + "px", fZ < t7 + 2) && (sz.style.whiteSpace = "pre-wrap"), sz.offsetHeight);
			sz.style.top = fb - r2 + t2 * bf.tB + "px", fZ -= t7, t0.style.backgroundColor = bD.color.oG(ej >> 12 << 2, (ej >> 6 & 63) << 2, (63 & ej) << 2), t0.style.left = fZ + "px", t0.style.top = sz.style.top, t0.style.width = t7 + "px", t0.style
				.height = r2 + "px", bD.rL.rV(t0, 4), bD.rL.rV(t0, 8), bD.rL.rV(t0, 2), document.body.appendChild(t0)
		}, this.sb = function(tC) {
			if (t1) {
				if (tC && t2) return 0;
				t1 = 0, u.removeChild(document.body, sz), u.removeChild(document.body, t0)
			}
			return 1
		}, sz.style.position = "absolute", sz.style.backgroundColor = bE.oK, sz.style.color = bE.oO, sz.style.pointerEvents = "none", sz.style.zIndex = "5", sz.style.maxWidth = "100%", t0.style.position = "absolute", t0.style.color = bE.oO, t0.style
		.pointerEvents = "none", t0.style.zIndex = "5"
}

function s9(tD, type, tE, tF) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.tG++, e.value = tD.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.oO, e.style.backgroundColor = bE.oH, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.tH++
		}), e.addEventListener("blur", function() {
			i.tH--, -1 !== tD.eH && bm.pp.pq(tD.eH, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== tD.eH && bm.pp.pq(tD.eH, e.value), tE ? tE() : e.blur())
		}), tF && e.addEventListener("input", function(rD) {
			tF(rD)
		})
}

function tI(rF, data, tJ) {
	var fS = data.tK.length,
		tL = document.createElement("div"),
		tM = document.createElement("div"),
		tN = document.createElement("div"),
		tO = new Array(fS),
		rG = new Array(fS),
		tP = new Array(data.tQ.length),
		tR = bD.color.oI(70, 70, 0, .35);

	function rq() {
		this.style.backgroundColor = bD.color.rq(tR, 160)
	}

	function tY() {
		this.style.backgroundColor = tR
	}

	function rO() {
		var fl;
		for (rF.style.font = bD.rL.t9(0, bD.rL.th(.026, .5, .03)), aC = 1; aC < tP.length; aC++) bD.rL.rV(tP[aC], 4);
		if (bD.rL.rV(tL, 2), fS) {
			for (var hu, ti = tL.offsetWidth, tj = tN.offsetWidth, aC = 0; aC < tP.length; aC++) hu = .01 * data.tX[aC] * tj, tP[aC].style.width = (100 * hu / ti).toFixed(2) + "%";
			var li = data.tK[0].length;
			for (aC = 0; aC < fS; aC++)
				for (bD.rL.rV(tO[aC], 2), fl = 1; fl < li; fl++) bD.rL.rV(rG[aC][fl], 4);
			tM.tS && (tM.scrollTop = tM.tS)
		}
	}
	this.resize = function() {
			rO(), rO()
		}, rF.style.display = "flex", rF.style.flexDirection = "column", tM.style.overflowX = "hidden", tM.style.overflowY = "auto", tM.addEventListener("scroll", function() {
			this.tS = this.scrollTop, tJ && tJ.tT && (u.z.tU[tJ.tT] = this.scrollTop)
		}),
		function() {
			var fV, aC, tK = data.tK,
				li = fS ? tK[0].length : 0;
			for (aC = 0; aC < fS; aC++) {
				tO[aC] = document.createElement("div"), tO[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.oI(130, 130, 130, .35) : bE.oN
				}(aC), tO[aC].style.width = "100%", tO[aC].style.display = "flex", rG[aC] = new Array(li);
				for (var fl = 0; fl < li; fl++) rG[aC][fl] = fV = document.createElement("div"), fV.style.display = "flex", fV.style.justifyContent = "center", fV.style.wordBreak = "break-all", fV.style.padding = "0.4em 0em", fV.style.width = data
					.tX[fl] + "%", fV.innerHTML = tK[aC][fl].fu, 1 === tK[aC][fl].ea && (fV.name = "" + aC, fV.style.color = bE.pO, fV.style.backgroundColor = tR, fV.addEventListener("mouseover", rq), fV.addEventListener("mouseout", tY), function(fV,
						ta, tb) {
						2147483647 !== tb && fV.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, ta), bK.di(bG.aD), this.style.backgroundColor = tR, u.v(8, u.tc, new td(25, {
								action: 0,
								ta: bI.te.tf(bI.te.tg(5)),
								tb: tb
							}))
						})
					}(fV, tK[aC][fl].ta, tK[aC][fl].tb)), tO[aC].appendChild(fV)
			}
			for (tL.style.display = "flex", tL.style.backgroundColor = bD.color.oI(0, 120, 0, .35), aC = 0; aC < tP.length; aC++) tP[aC] = fV = document.createElement("div"), fV.style.display = "flex", fV.style.justifyContent = "center", fV.style
				.wordBreak = "break-all", fV.style.padding = "0.4em 0em", fV.style.width = data.tX[aC] + "%", fV.innerHTML = data.tQ[aC], tL.appendChild(fV)
		}();
	for (var aC = 0; aC < fS; aC++) tN.appendChild(tO[aC]);
	tM.appendChild(tN), rF.appendChild(tL), rF.appendChild(tM), tJ && tJ.tT && (tM.tS = u.z.tU[tJ.tT])
}

function tk() {
	var tp, tq, tl = document.createElement("div"),
		tm = document.createElement("div"),
		tn = document.createElement("div"),
		tN = document.createElement("div"),
		ru = [],
		eC = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		tr = [1, 2, 3, 0, 9, 10, 11, 13];

	function tt(aC) {
		u.v(8, 0, new td(21, {
			tv: tr[aC],
			tw: 0,
			tx: 10
		}))
	}
	this.show = function() {
			this.pq(u.z.ty), document.body.appendChild(tl)
		}, this.sb = function() {
			u.removeChild(document.body, tl)
		}, this.pq = function(ty) {
			for (var tz = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < ru.length; aC++) {
				var j = ty[aC];
				tp[tz[aC]][1].sJ.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, u0 = bf.gap,
				k = bD.rL.u1(.085),
				j = Math.min(4 * k, i.j - 2 * u0),
				fS = ru.length;
			for (bD.rL.u2(tl, u0, i.k - u0 - k, j, k), bD.rL.rV(tl), bD.rL.rV(tm, 6), aC = 0; aC < fS - 1; aC++) bD.rL.rV(ru[aC].button, 6);
			for (aC = 0; aC < fS; aC++) tp[aC][0].resize(), tp[aC][1].resize();
			for (ru[0].fZ = 0, ru[0].button.style.left = bD.rL.rU(ru[0].fZ), ru[0].button.style.width = bD.rL.u3(1.7 * k), aC = 1; aC < fS; aC++) ru[aC].fZ = ru[aC - 1].fZ + ru[aC - 1].button.offsetWidth, ru[aC].button.style.left = bD.rL.rU(ru[aC]
				.fZ);
			if (!tq) {
				if (!ac.u4()) return;
				(tq = ac.get(14)).style.width = "24%", tq.style.position = "absolute", tm.appendChild(tq)
			}
			tq.style.left = bD.rL.rU(0), tq.style.top = "7%", tn.u5 && (tn.scrollLeft = tn.u5)
		}, tl.style.position = "absolute", tm.style.width = "25%", tm.style.height = "100%", tm.style.backgroundColor = bE.oK, tn.style.position = "absolute", tn.style.width = "75%", tn.style.height = "100%", tn.style.backgroundColor = bE.oK, tn
		.style.top = tn.style.right = bD.rL.rU(0), bD.rL.ts(tn), tN.style.height = tN.style.maxHeight = "100%", ru.push(new x("", function() {
			tt(0)
		}, bE.p9)), ru.push(new x("", function() {
			tt(1)
		}, bE.pA)), ru.push(new x("", function() {
			tt(2)
		}, bE.p2)), ru.push(new x("", function() {
			tt(3)
		}, bE.on)), ru.push(new x("", function() {
			tt(4)
		}, bE.pZ)), ru.push(new x("", function() {
			tt(5)
		}, bE.pV)), ru.push(new x("", function() {
			tt(6)
		}, bE.pZ)), ru.push(new x("", function() {
			tt(7)
		}, bE.oF)), tp = new Array(ru.length);
	for (var aC = 0; aC < ru.length; aC++) ru[aC].button.style.position = "absolute", tp[aC] = [new tu(eC[aC], ru[aC].button, .25, .45), new tu("", ru[aC].button, .53, .84, 1)], ru[aC].button.style.height = ru[aC].button.style.maxHeight = "100%", ru[
		aC].button.top = bD.rL.rU(0), tN.appendChild(ru[aC].button);
	tn.appendChild(tN), tl.appendChild(tm), tl.appendChild(tn)
}

function u6(u7, u8, u9, uA, s2, s3) {
	var uB = document.createElement("div"),
		uC = document.createElement("div"),
		uD = document.createElement("div"),
		uE = document.createElement("div"),
		uF = document.createElement("div"),
		uG = document.createElement("div"),
		uH = document.createElement("div"),
		uI = document.createElement("div"),
		uJ = document.createElement("span"),
		uK = document.createElement("div");
	this.uL = new s1(s2, s3), this.uM = new uN(s3), this.uO = [u7, u8, u9, uA], this.uS = function(uT) {
		uT = (uT / 10).toFixed(1) + "%";
		uI.style.width = uT, uJ.innerHTML = uT
	}, this.uU = function() {
		this.uM.sb(uG), this.uL.show(uG)
	}, this.uV = function() {
		this.uL.sb(uG), this.uM.show(uG)
	}, this.uW = function() {
		return uC
	}, this.show = function() {
		document.body.appendChild(uB)
	}, this.sb = function() {
		u.removeChild(document.body, uB)
	}, this.resize = function(uX) {
		var uY = 1 - .4 * a1.a2.ib() * (i.j > 1.6 * i.k),
			uZ = bD.rL.sd(.05 * uY),
			ua = i.k > i.j,
			ub = bD.rL.sd(.06 * uY + .03 * ua),
			uc = bD.rL.sd(.08 * uY + .03 * ua),
			ud = bD.rL.sd(.04 + .02 * ua),
			ua = bD.rL.sd(.02 * uY + .01 * ua),
			uf = bD.rL.sd(.025);
		uB.style.font = bD.rL.t9(0, uf), uF.style.font = bD.rL.t9(0, .9 * uf), uK.style.font = bD.rL.t9(0, .9 * uf), uY < 1 && (uf = bD.rL.t9(0, uY * uf), uD.style.font = uf, uF.style.font = uf, uK.style.font = uf, uH.style.font = uf, uE.style
				.font = uf), uC.style.height = bD.rL.rU(uZ), uC.style.font = bD.rL.t9(0, .72 * uZ), bD.rL.rV(uC, 2), uD.style.top = bD.rL.rU(uZ), uD.style.height = bD.rL.rU(uc), bD.rL.rV(uD, 2), uE.style.font = bD.rL.t9(0, uY * bD.rL.sd(.02)), uE
			.style.top = bD.rL.rU(uZ + uc), uE.style.height = bD.rL.rU(ud), bD.rL.rV(uE, 2), uF.style.top = bD.rL.rU(uZ + uc + ud), uF.style.height = bD.rL.rU(ub), bD.rL.rV(uF, 2), uG.style.top = bD.rL.rU(uZ + uc + ud + ub), uG.style.height = bD
			.rL.rU(i.k / i.l - uZ - uc - 2 * ub - ud - ua), uH.style.top = bD.rL.rU(i.k / i.l - ub - ua), uH.style.height = bD.rL.rU(ua), bD.rL.rV(uH, 8), uJ.style.font = bD.rL.t9(0, .8 * ua), uK.style.top = bD.rL.rU(i.k / i.l - ub), uK.style
			.height = bD.rL.rU(ub), bD.rL.rV(uK, 8), u7.resize(uD), u8.resize(uD), u9.resize(uD), uA.resize(uD), uX ? this.uL.resize(uG) : this.uM.resize()
	};
	s2 = this;
	uB.style.position = "absolute", uB.style.top = "0", uB.style.left = "0", uB.style.width = "100%", uB.style.height = "100%", uB.style.backgroundColor = bE.oN, bM.rn() || (uB.style.backdropFilter = "blur(4px)", uB.style.webkitBackdropFilter =
		"blur(4px)"), uC.style.position = "absolute", uC.style.top = "0", uC.style.left = "0", uC.style.width = "100%", uC.style.display = "flex", uC.style.alignItems = "center";
	for (var h = [uD, uE, uF, uK], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.rL.ts(h[aC]);
	uG.style.position = "absolute", uG.style.left = "0", uG.style.width = "100%", uG.style.font = "inherit", uH.style.position = "absolute", uH.style.left = "0", uH.style.width = "100%", uI.style.position = "absolute", uI.style.top = "0", uI.style
		.left = "0", uI.style.height = "100%", uI.style.width = "50%", uI.style.backgroundColor = bE.ol, uJ.innerHTML = "", uJ.style.position = "absolute", uJ.style.top = "50%", uJ.style.left = "50%", uJ.style.transform = "translate(-50%, -50%)", uC
		.appendChild(function() {
			var uR = document.createElement("h1");
			return uR.textContent = L(24), uR.style.margin = "0 auto 0.15em auto", uR.style.fontFamily = "Arial Black, system-ui", uR.style.fontSize = "inherit", uR.style.fontWeight = "inherit", uR
		}()), uD.appendChild(u7.r0), uE.appendChild(u8.r0), uF.appendChild(u9.r0), uH.appendChild(uI), uH.appendChild(uJ), uK.appendChild(uA.r0), uB.appendChild(uC), uB.appendChild(uD), uB.appendChild(uE), uB.appendChild(uF), uB.appendChild(uG), uB
		.appendChild(uH), uB.appendChild(uK), s2.uM.show(uG)
}

function uN(s3) {
	var uB = document.createElement("div"),
		uG = document.createElement("div");
	this.nA = function() {
			uG.textContent = "", bq.uh.ui && bq.uh.sb(1);
			for (var sT = document.createDocumentFragment(), uj = bq.z.sO[0], uk = bq.uk.ul[uj], um = bq.uk.um[uj], aC = 0; aC < uk.length; aC++) ! function(sT, rD, uo, uj) {
				var sJ = document.createElement("span");
				sJ.textContent = (uo ? "🟢 " : "⚪ ") + bq.lc.up(rD, uj), sJ.style.color = bq.lc.uq(rD.ur), 11 === rD.ur && (sJ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				sJ.style.cursor = "pointer", sJ.style.margin = "0.2em 0.2em 0.2em 0.2em", sJ.style.width = sJ.style.maxWidth = 2 === uj ? "10em" : "9em", sJ.style.height = sJ.style.maxHeight = "1.4em", sJ.style.whiteSpace = "nowrap", sJ.style
					.overflow = "hidden", sJ.style.textOverflow = "ellipsis", sJ.style.font = "inherit", sJ.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (uo = __fx.utils.getDuplicateIpHighlightColor(rD, bq.uk.ul,
					"aER")) && (sJ.style.backgroundColor = uo, sJ.style.borderRadius = "0.3em");
				bq.lc.us(rD) && (sJ.style.textDecoration = "underline"), rD.ut && (sJ.style.textDecorationLine = "underline", sJ.style.textDecorationStyle = "dotted");
				sJ.onclick = function(e) {
					s3(e, rD)
				}, bM.rn() || (sJ.onmouseover = function(e) {
					bq.uh.uu(e.target, rD, 1)
				}), sT.appendChild(sJ)
			}(sT, uk[aC], aC < um, uj);
			uG.appendChild(sT)
		}, this.show = function(rF) {
			rF.appendChild(uB)
		}, this.sb = function(rF) {
			u.removeChild(rF, uB)
		}, this.resize = function() {
			uG.style.fontSize = bD.rL.rU(bD.rL.sd(.02, .3))
		}, uB.style.top = "0", uB.style.left = "0", uB.style.width = uB.style.height = "100%", uB.style.overflowX = "hidden", uB.style.overflowY = "auto", uB.style.font = "inherit", uG.style.font = "inherit", uG.style.margin = "0.4em", uB
		.appendChild(uG)
}

function uv(uw) {
	var uB = document.createElement("div"),
		s6 = document.createElement("div"),
		ux = [];

	function ri() {
		bM.rn() || (this.style.backgroundColor = bD.color.rq(bE.oK, 50))
	}

	function rj() {
		this.style.backgroundColor = bE.oK
	}
	this.pq = function(uz, v0) {
			ux[2].textContent = uz + 1 + " / " + v0
		}, this.show = function(rD) {
			rD = bq.lc.sV(rD, bq.lc.sW(rD)), s6.appendChild(bq.sa.transform(rD)), document.body.appendChild(uB)
		}, this.resize = function() {
			var k = bD.rL.sd(.03, .5);
			uB.style.width = 10 * k + "px", uB.style.font = bD.rL.t9(1, .75 * k), bD.rL.rV(uB, 4), s6.style.top = k + "px", s6.style.font = bD.rL.t9(0, .55 * k), bD.rL.rV(s6, 2), uB.style.height = k + s6.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.rL.rV(ux[aC], 6), ux[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) ux[aC].style.height = k + "px", bD.rL.rV(ux[aC], 2);
			ux[2].style.width = 4 * k + "px", ux[1].style.left = 2 * k + "px", ux[2].style.left = 4 * k + "px", ux[3].style.left = 8 * k + "px"
		}, this.v1 = function() {
			for (var aC = 0; aC < 4; aC++) ux[aC].onclick = null, ux[aC].onmouseover = null, ux[aC].onmouseout = null;
			u.removeChild(document.body, uB), uB = s6 = ux = null
		}, uB.style.position = "absolute", uB.style.color = bE.oO, uB.style.zIndex = "3", uB.style.right = "0", uB.style.top = "0", s6.style.position = "absolute", s6.style.height = "auto", s6.style.color = bE.oO, s6.style.backgroundColor = bE.oK, s6
		.style.left = "0", s6.style.width = "100%", s6.style.overflowWrap = "break-word", uB.appendChild(s6);
	for (var aC = 0; aC < 4; aC++) ux[aC] = document.createElement("div"), ux[aC].style.position = "absolute", ux[aC].style.backgroundColor = bE.oK, ux[aC].style.color = bE.oO, ux[aC].style.top = "0", ux[aC].style.display = "flex", ux[aC].style
		.justifyContent = "center", ux[aC].style.alignItems = "center", ux[aC].style.userSelect = "none", ux[aC].style.outline = "none", ux[aC].style.font = "inherit", 2 !== (ux[aC].uy = aC) && (ux[aC].onclick = uw, ux[aC].onmouseover = ri, ux[aC]
			.onmouseout = rj), uB.appendChild(ux[aC]);
	ux[0].textContent = "◀", ux[1].textContent = "▶", ux[3].textContent = "✖"
}

function v2(uw) {
	var sz = document.createElement("div");

	function ri() {
		bM.rn() || (sz.style.backgroundColor = bD.color.rq(bE.oK, 50))
	}

	function rj() {
		sz.style.backgroundColor = bE.oK
	}
	this.pq = function(v0) {
			sz.textContent = v0
		}, this.show = function() {
			document.body.appendChild(sz)
		}, this.resize = function() {
			var k = bD.rL.sd(.03, .5);
			sz.style.width = 2 * k + "px", sz.style.height = k + "px", sz.style.font = bD.rL.t9(1, .75 * k), bD.rL.rV(sz, 4), bD.rL.rV(sz, 2)
		}, this.v1 = function() {
			sz.onclick = null, sz.onmouseover = null, sz.onmouseout = null, u.removeChild(document.body, sz), sz = null
		}, sz.style.position = "absolute", rj(), sz.style.color = bE.oO, sz.style.zIndex = "3", sz.style.right = "0", sz.style.top = "0", sz.style.display = "flex", sz.style.justifyContent = "center", sz.style.alignItems = "center", sz.style
		.userSelect = "none", sz.style.outline = "none", sz.onclick = uw, sz.onmouseover = ri, sz.onmouseout = rj
}

function v3(sr) {
	var uB = document.createElement("div"),
		v4 = document.createElement("div"),
		t1 = (this.fZ = 0, this.fb = 0);

	function v6() {
		bq.v7.sb()
	}
	this.ru = sr, this.show = function(fZ, fb, v9) {
		if (t1) return [0, 0];
		t1 = 1, this.fZ = fZ, this.fb = fb,
			function(self, v9) {
				var j = bD.rL.sd(.16, .7),
					k = sr.length * j / 3,
					vB = i.j / i.l,
					vC = i.k / i.l,
					o0 = Math.min(1, Math.min(vB / j, vC / k));
				j *= o0, k *= o0, v9 && (self.fZ += bD.rL.sd(.03, .5)), self.fZ = bO.ia(self.fZ, 0, vB - j), self.fb = bO.ia(self.fb, 0, vC - k), v4.style.left = self.fZ + "px", v4.style.top = self.fb + "px", v4.style.width = j + "px", v4.style
					.height = k + "px", v4.style.font = bD.rL.t9(0, .3 * k / sr.length), bD.rL.rV(v4, 5);
				for (var aC = 1; aC < sr.length; aC++) bD.rL.rV(sr[aC].button, 8)
			}(this, v9), document.body.appendChild(uB)
	}, this.sb = function() {
		t1 && (t1 = 0, uB.removeEventListener("click", v6), u.removeChild(document.body, uB))
	};
	for (var aC = 0; aC < sr.length; aC++) new sI("" + (1 + aC), sr[aC].button, 0, 1);
	uB.style.position = "fixed", uB.style.top = "0", uB.style.left = "0", uB.style.width = "100%", uB.style.height = "100%", uB.style.zIndex = "5", v4.style.position = "absolute",
		function() {
			for (var v8 = (100 / sr.length).toFixed(2) + "%", aC = 0; aC < sr.length; aC++) sr[aC].button.style.width = "100%", sr[aC].button.style.height = sr[aC].button.style.maxHeight = v8, sr[aC].button.style.padding = "0.0em 0.9em", v4
				.appendChild(sr[aC].button)
		}(), uB.appendChild(v4), uB.addEventListener("click", v6)
}

function ek() {
	var vD, vE, vF;

	function vM(aC) {
		return bD.color.oG(vE[aC][0], vE[aC][1], vE[aC][2])
	}

	function vS(fl, fm) {
		return bD.color.vc(vE[fl], vE[fm]), vM(fm)
	}

	function vK() {
		vD && (vD.remove(), vD = null)
	}
	this.show = function(el, colors, id) {
		0 <= (vF = id) && b1.z.ef(0) && b1.eg.vG(0, id), el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = el.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			vE = colors, (vD = document.createElement("div")).style.position = "fixed", vD.style.top = "0", vD.style.left = "0", vD.style.width = "100%", vD.style.height = "100%", vD.style.backgroundColor = bD.color.oI(vE[0][0], vE[0][1], vE[0][
				2], .6), vD.style.zIndex = "6", vD.onclick = function(e) {
				e.target === vD && vK()
			},
			function(el) {
				var iO, vL = document.createElement("div");
				vL.style.position = "absolute", vL.style.display = "flex", vL.style.flexDirection = "column", vL.style.top = "50%", vL.style.left = "50%", vL.style.backgroundColor = vM(2), iO = a1.a2.ib() ? bD.rL.vN(i.min) : bD.rL.sd(.4);
				iO = Math.max(iO, 200), vL.style.width = bD.rL.rU(iO), vL.style.height = bD.rL.rU(iO), vL.style.transform = "translate(-50%, -50%)",
					function(vL, iO) {
						var vR = document.createElement("div");
						vR.style.flex = "0 0 10%", vR.style.overflow = "hidden", vR.style.backgroundColor = vM(1), vR.style.color = vS(1, 7), vR.style.font = bD.rL.t9(1, .05 * iO), vR.style.display = "flex", vR.style.alignItems = "center", vR
							.style.justifyContent = "center", vR.innerHTML = L(25), vL.appendChild(vR)
					}(vL, iO),
					function(vL, el, iO) {
						var vT = document.createElement("div");
						vT.style.flex = "0 0 70%", vT.style.overflowY = "auto", vT.style.overflowX = "hidden", vT.style.whiteSpace = "pre-wrap", vT.style.wordWrap = "break-word", vT.style.padding = bD.rL.rU(.02 * iO), vT.style.backgroundColor =
							vM(2), vT.style.color = vS(2, 8), vT.style.font = bD.rL.t9(0, .07 * iO), vT.innerHTML = el, vT.innerHTML = "<style>a { color: inherit; }</style>" + vT.innerHTML, vL.appendChild(vT)
					}(vL, el, iO),
					function(vL, iO) {
						var vU = document.createElement("div"),
							vV = (vU.style.display = "flex", vU.style.flexDirection = "row", vU.style.justifyContent = "space-between", vU.style.alignItems = "stretch", vU.style.backgroundColor = vM(3), vU.style.flex = "1", vU.style.padding = bD
								.rL.rU(.01 * iO), vU.style.gap = bD.rL.rU(.01 * iO), document.createElement("div")),
							vW = (vV.style.flex = "0 0 60%", vV.style.height = "100%", new x(L(26, 0, 0, 1), function() {
								vK()
							}, vM(4), !1)),
							vW = (vW.button.style.width = "100%", vW.button.style.height = "100%", vW.button.style.color = vS(4, 9), vW.button.style.font = bD.rL.t9(1, .05 * iO), vV.appendChild(vW.button), document.createElement("div")),
							vY = (vW.style.flex = "0 0 15%", vW.style.height = "100%", vW.style.backgroundColor = vM(5), document.createElement("div")),
							vZ = (vY.style.flex = "1", vY.style.height = "100%", new x(L(27), function(e) {
								return bD.rL.va(e), vF < 0 || b1.z.ef(0) && (b1.eg.vG(1, vF), vF = -1), !0
							}, vM(6), !1));
						vZ.button.style.width = "100%", vZ.button.style.height = "100%", vZ.button.style.color = vS(6, 10), vZ.button.style.font = bD.rL.t9(1, .035 * iO), vY.appendChild(vZ.button), vU.appendChild(vV), vU.appendChild(vW), vU
							.appendChild(vY), vL.appendChild(vU)
					}(vL, iO), vD.appendChild(vL)
			}(el), document.body.appendChild(vD)
	}
}

function vd(tD, ve) {
	this.rB = [];
	var vf = this.rB;

	function click() {
		for (var aC = 0; aC < vf.length; aC++) vf[aC].textContent = vf[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eH = parseInt(this.name);
		void 0 !== tD.eH && bm.pp.pq(tD.eH, eH), ve && ve(eH)
	}
	for (var vg, fS = tD.tJ.length, aC = 0; aC < fS; aC++)(vg = document.createElement("p")).textContent = "⚪ " + tD.tJ[aC], vg.style.margin = "0", vg.name = "" + aC, vg.style.cursor = "pointer", vg.style.fontSize = "1em", vg.addEventListener(
		"click", click), vf.push(vg);
	vf[tD.value].textContent = vf[tD.value].textContent.replace("⚪", "🟢")
}

function vh(title, vi, vj) {
	var tl = document.createElement("div"),
		vk = document.createElement("div"),
		tN = document.createElement("div"),
		vl = document.createElement("div"),
		vm = document.createElement("div");
	this.vn = tN, this.vo = vi, this.show = function() {
			!1 !== vj ? document.body.appendChild(tl) : (document.body.appendChild(vk), document.body.appendChild(vl))
		}, this.sb = function() {
			!1 !== vj ? u.removeChild(document.body, tl) : (u.removeChild(document.body, vk), u.removeChild(document.body, vl))
		}, this.vs = function() {
			var se = bD.rL.sd(.1),
				sc = bD.rL.sd(.08 + .04 * (i.vt < 1), .3);
			return {
				se: se,
				sc: sc,
				vu: i.k / i.l - se - sc
			}
		}, this.resize = function(sv) {
			var fS = vi.length,
				vv = this.vs(),
				se = vv.se,
				sc = vv.sc;
			for (vk.style.height = bD.rL.rU(se), bD.rL.rV(vk, 2), vl.style.top = bD.rL.rU(i.k / i.l - sc), vl.style.height = bD.rL.rU(sc), bD.rL.rV(vl, 8), tN.style.top = bD.rL.rU(se), tN.style.height = tN.style.maxHeight = bD.rL.rU(vv.vu), vk.style
				.font = bD.rL.t9(0, bD.rL.sd(.02, .15)), vl.style.font = bD.rL.t9(0, bD.rL.sd(.02, .7)), tN.style.font = bD.rL.t9(0, bD.rL.sd(.02, .35)), aC = 1; aC < fS; aC++) bD.rL.rV(vi[aC].button, 4);
			for (var sw = 0, aC = 0; aC < fS; aC++) sw += vi[aC].button.offsetWidth;
			if (sv && sw < vl.offsetWidth)
				for (aC = 0; aC < fS; aC++) vi[aC].button.style.width = (100 * vi[aC].button.offsetWidth / sw).toFixed(2) + "%";
			else
				for (aC = 0; aC < fS; aC++) vi[aC].button.style.width = "auto";
			vl.u5 && (vl.scrollLeft = vl.u5), sv || this.resize(!0)
		}, this.vw = function() {
			var vv = this.vs(),
				ej = i.l;
			vx.fillStyle = bE.oK, vx.fillRect(0, ej * vv.se, i.j, ej * vv.vu)
		}, tl.style.position = "absolute", tl.style.top = "0", tl.style.left = "0", tl.style.width = "100%", tl.style.height = "100%", vk.style.position = "absolute", vk.style.top = "0", vk.style.left = "0", vk.style.width = "100%", vk.style
		.display = "flex", vk.style.backgroundColor = bE.oK, vl.style.position = "absolute", vl.style.left = "0", vl.style.width = "100%", bD.rL.ts(vl), vm.style.height = vm.style.maxHeight = "100%", tN.style.position = "absolute", tN.style.width =
		"100%", tN.style.backgroundColor = bE.oK,
		function() {
			for (var aC = 0; aC < vi.length; aC++) vi[aC].button.style.height = "100%", vi[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < vi.length; aC++) vm.appendChild(vi[aC].button);
	vk.appendChild(function() {
		var vr = document.createElement("h1");
		return vr.textContent = title, vr.style.margin = "auto", vr.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", vr.style.fontFamily = "Arial Black, system-ui", vr
	}()), vl.appendChild(vm), !1 !== vj && (tl.appendChild(tN), tl.appendChild(vk), tl.appendChild(vl))
}

function sI(vy, vz, w0, w1) {
	var self;
	this.sJ = document.createElement("span"), (self = this).sJ.textContent = vy, self.sJ.style.color = bE.oO, self.sJ.style.position = "absolute", self.sJ.style.font = "inherit", w1 ? self.sJ.style.bottom = "0.06em" : self.sJ.style.top = "0.12em",
		w0 ? self.sJ.style.left = "0.2em" : self.sJ.style.right = "0.2em", self.sJ.style.fontSize = "0.6em", self.sJ.style.pointerEvents = "none", self.sJ.style.whiteSpace = "pre", vz.style.position = "relative", vz.style.overflow = "hidden", vz
		.appendChild(self.sJ)
}

function tu(vy, vz, w2, w3, w4) {
	var self;
	this.sJ = document.createElement("span"), this.resize = function() {
			this.sJ.style.fontSize = ((w3 - w2) * vz.offsetHeight).toFixed(1) + "px"
		}, (self = this).sJ.textContent = vy, self.sJ.style.color = bE.oO, self.sJ.style.font = "inherit", self.sJ.style.margin = "0.1em 0.6em", self.sJ.style.pointerEvents = "none", w4 && (self.sJ.style.fontWeight = "bold"), self.sJ.style
		.whiteSpace = "nowrap", self.sJ.style.display = "block", vz.appendChild(self.sJ)
}

function w5(w6, w7, w8, w9) {
	var wA = document.createElement("textarea"),
		wB = (this.e = wA, !0);

	function wG() {
		wA.select(), document.execCommand("copy")
	}
	this.resize = function() {
			w7 && bD.rL.rV(wA, 5)
		}, this.wC = function(el) {
			wA.value = el
		}, this.wD = function() {
			return wA.value
		}, this.wE = function() {
			wA.select()
		}, this.clear = function() {
			wA.value = ""
		}, this.wF = function() {
			wB && navigator.clipboard ? (wA.select(), navigator.clipboard.writeText(wA.value).catch(function() {
				wB = !1, wG()
			})) : wG()
		}, wA.setAttribute("id", "textArea" + u.z.tG++), wA.setAttribute("autocomplete", "off"), w6 && wA.setAttribute("placeholder", w6), wA.style.top = "0", wA.style.left = "0", wA.style.width = "100%", wA.style.height = "100%", wA.style
		.userSelect = "none", wA.style.outline = "none", wA.style.resize = "none", wA.style.border = "none", wA.style.color = bE.oO, wA.style.backgroundColor = bE.oH, w9 ? (wA.style.fontSize = "1em", wA.rows = 6, wA.style.padding = "0.25em") : (wA
			.style.padding = "0.45em", wA.style.fontSize = "1.2em"), w8 && wA.addEventListener("input", function(e) {
			w8(e)
		}), wA.addEventListener("focus", function() {
			i.tH++
		}), wA.addEventListener("blur", function() {
			i.tH--
		})
}

function dN() {
	this.rc = new wH, this.eW = new wI, this.pp = new wJ, this.z = new wK, this.wL = new wM, this.di = function() {
		this.eW.di(), (new wN).di(), this.wL.di(), this.z.wO()
	}
}

function wI() {
	function wP(aC, type, wV, e1) {
		bm.eW.data.push({
			eH: aC,
			type: type || 0,
			value: wV || 0,
			wV: wV || 0,
			e1: e1 || 0
		})
	}

	function wQ(aC, type, wV, e1) {
		bm.eW.data.push({
			eH: aC,
			type: type,
			value: wV || "",
			wV: wV || "",
			e1: e1 || 0
		})
	}

	function wR(o6) {
		for (var aC = bm.eW.data.length; aC < o6; aC++) bm.eW.data.push(null)
	}
	this.data = [], this.di = function() {
		wP(0, 1, 0, 5), wP(1, 1, 1), wP(2, 0), wQ(3, 2), wP(4, 1), wQ(5, 2, "system-ui", 2), wP(6, 0), wP(7, 0, 0), wP(8, 0), wP(9, 1, 1), wP(10, 1), wP(11, 1, 1), wQ(12, 2, navigator.language), wP(13), wP(14), wP(15, 0, 1), wP(16, 0, 4), wR(
			100), wQ(100, 2), wQ(101, 2), wQ(102, 2), wQ(103, 2), wQ(104, 2), wQ(105, 2), wQ(106, 2), wP(107), wP(108), wP(109), wQ(110, 2), wP(111), wP(112), wP(113), wQ(114, 2), wP(115), wQ(116, 2), wP(117, 1), wQ(118, 2, "", 2), wP(119, 1, 0,
				1), wQ(120, 2), wP(121, 1, ~~(262144 * Math.random())), wQ(122, 2, "Player " + Math.floor(1e3 * Math.random())), wP(123), wQ(124), wP(125, 1), wQ(126, 2), wP(127, 0, 1), wP(128), wP(129), wP(130), wP(131), wP(132), wQ(133, 2), wP(
				134, 0, 5), wQ(135, 2), wQ(136, 2), wP(137), wP(138), wP(139), wP(140), wP(141), wP(142), wP(143), wP(144), wQ(145, 2), wP(146), wP(147), wQ(148, 2), wP(149), wP(150, 0, 1), wQ(151, 2), wP(152, 0, 5), wP(153, 1), wP(154, 1), wQ(
				155, 2), wQ(156, 2), wP(157), wP(158), wP(159), wP(160), wQ(161, 2), wP(162, 0, 1024), wQ(163, 2, "0,0,0"), wQ(164, 2, "100,100,100"), wQ(165, 2, "30,30,30"), wQ(166, 2, "70,70,70"), wQ(167, 2, "100,100,100"), wQ(168, 2,
				"85,85,85"), wQ(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) wQ(170 + aC, 2, "255,255,255");
		wQ(174, 2), wQ(175, 2), wP(176, 0, 200), wR(180), wP(180, 0), wP(181, 0), wP(182, 0, 1023), wQ(183, 2)
	}, this.pq = function(eH, value) {
		this.data[eH].value = value
	}, this.wS = function(eH, value) {
		this.pq(eH, value);
		var value = String(value),
			fS = value.length;
		5e4 < fS ? console.log("storage value too large: index " + eH + " size " + fS) : (bm.rc.save(eH, value), bm.rc.save(eH, String(this.data[eH].e1), !0))
	}, this.wT = function(eH) {
		return Number(this.data[eH].value)
	}, this.wU = function(eH) {
		return String(this.data[eH].value)
	}
}

function wM() {
	var wW = [];

	function wZ(ta) {
		wW.unshift(ta), bm.pp.pq(161, wW.join(";"))
	}

	function ey(ta) {
		for (var wb = wW, fS = wb.length, aC = 0; aC < fS; aC++)
			if (wb[aC] === ta) return wb.splice(aC, 1), bm.pp.pq(161, wb.join(";")), 1
	}
	this.di = function() {
		var r2 = bm.eW.data[161].value;
		r2.length && (wW = r2.split(";"))
	}, this.get = function() {
		return wW
	}, __fx.followedAccounts.setSource(this.get), this.wX = function() {
		return {
			tJ: __fx.followedAccounts.decorate(wW),
			value: 0
		}
	}, this.ut = function(ta) {
		return bD.rT.has(wW, ta)
	}, this.wY = function(ta) {
		return ey(ta) ? 0 : (wZ(ta), 1)
	}, this.nA = function(ta) {
		ey(ta) && wZ(ta)
	}, this.wa = function(eH) {
		eH < wW.length && (wW.splice(eH, 1), bm.pp.pq(161, wW.join(";")))
	}
}

function wH() {
	this.wc = function(eH, e1) {
		return Number(this.wd(eH, e1))
	}, this.wd = function(eH, e1) {
		var fu = null;
		return 0 === a1.id ? a1.we && (fu = a1.we.getItem((e1 ? "v" : "d") + eH)) : 1 === a1.id ? fu = a1.wf.loadString((e1 ? 1e3 : 2e3) + eH) : 2 === a1.id && (fu = a1.wg[(e1 ? "v" : "d") + eH]), fu && 0 !== fu.length ? fu : null
	}, this.wh = function(fS, wi) {
		var h = [],
			wj = wi ? "e" : "l";
		if (0 === a1.id) {
			if (a1.we)
				for (aC = 0; aC < fS; aC++) h.push(a1.we.getItem(wj + aC))
		} else if (1 === a1.id)
			for (var wk = wi ? 5e3 : 3e3, aC = 0; aC < fS; aC++) h.push(a1.wf.loadString(wk + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fS; aC++) h.push(a1.wg[wj + aC]);
		return h
	}, this.save = function(eH, value, e1) {
		var wl = (e1 ? "v" : "d") + eH;
		if (0 === a1.id) {
			if (a1.we && bm.eW.data[140].value) try {
				a1.we.setItem(wl, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.wf.saveString((e1 ? 1e3 : 2e3) + eH, value) : 2 === a1.id && (a1.wg[wl] = value, a1.wm.postMessage(wl + " " + value))
	}, this.wn = function(h, wi) {
		var fS = h.length,
			wj = wi ? "e" : "l";
		if (0 === a1.id) {
			if (a1.we && bm.eW.data[140].value) try {
				for (aC = 0; aC < fS; aC++) a1.we.setItem(wj + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var wk = wi ? 5e3 : 3e3, aC = 0; aC < fS; aC++) a1.wf.saveString(wk + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fS; aC++) a1.wg[wj + aC] = h[aC], a1.wm.postMessage(wj + aC + " " + h[aC])
	}
}

function wN() {
	this.di = function() {
		! function() {
			var data = bm.eW.data;
			0 === data[2].e1 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].wV = 1);
			0 === data[100].e1 && (data[100].value = data[100].wV = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.eW.data,
			fS = data.length;
		for (aC = 0; aC < fS; aC++) {
			var wq = bm.rc.wc(aC, !0);
			data[aC] && data[aC].e1 === wq && (null === (wq = bm.rc.wd(aC)) ? data[aC].value = data[aC].wV : 2 === data[aC].type ? data[aC].value = wq : (wq = Number(wq), isNaN(wq) ? data[aC].value = data[aC].wV : data[aC].value = wq))
		}
	}
}

function wK() {
	function wv(h) {
		if (0 === h.length) bm.pp.pq(116, "");
		else {
			for (var wy = h[0], aC = 1; aC < h.length; aC++) wy += ";" + h[aC];
			bm.pp.pq(116, wy)
		}
	}
	this.ws = function() {
		bm.eW.data[110].value.length && (bm.eW.data[106].value = bm.eW.data[110], bm.pp.pq(110, ""), this.wt())
	}, this.wt = function() {
		var h = bm.eW.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.eW.data[106].value), h.unshift(bm.eW.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var wu = [], aC = 0; aC < h.length; aC += 2) wu.push(h[aC]);
		wv(h), bm.eW.data[117].value = 0, bm.eW.data[117].tJ = wu
	}, this.ww = function(eH) {
		bm.eW.data[117].tJ.splice(eH, 1), bm.eW.data[117].value = Math.min(eH, bm.eW.data[117].tJ.length - 1);
		var h = bm.eW.data[116].value.split(";");
		h.splice(2 * eH, 2), wv(h)
	}, this.wx = function(eH) {
		var h = bm.eW.data[116].value.split(";");
		return {
			ta: h[2 * eH],
			password: h[2 * eH + 1]
		}
	}, this.wz = function() {
		var fu = bO.ia(bm.eW.data[121].value, -1, 262143);
		return fu = -1 === fu ? ~~(262144 * Math.random()) : fu
	}, this.wO = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var x0, r2 = h[aC].trim();
			0 !== r2.length && (x0 = 0 <= (x0 = r2.indexOf("=")) ? r2.substring(0, x0) : r2, document.cookie = x0 + "=;expires=0;path=/", document.cookie = x0 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = x0 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function wJ() {
	this.pq = function(eH, value) {
		2 !== bm.eW.data[eH].type && (value = Math.floor(value)), bm.eW.data[eH].value !== value && (bm.eW.wS(eH, value), 0 === eH ? (u.y(), bA.di(), u.v(2)) : 1 === eH ? i.dt(1) : 2 === eH ? i.dt(0) : 5 === eH && (bD.rL.x1(), i.dt(0)))
	}, this.x2 = function() {
		for (var data = bm.eW.data, aC = 0; aC < 100; aC++) data[aC] && bm.eW.wS(aC, data[aC].wV);
		bD.rL.x1(), i.dt(1)
	}, this.x3 = function() {
		for (var data = bm.eW.data, aC = 0; aC < data.length; aC++) data[aC] && bm.eW.pq(aC, data[aC].wV)
	}, this.x4 = function() {
		for (var fm = bm.eW, aC = 128; aC < 135; aC++) fm.wS(aC, fm.data[aC].wV)
	}, this.x5 = function(data) {
		bm.pp.pq(109, data.tb), bm.pp.pq(107, data.x6), bm.pp.pq(108, data.x7), bm.pp.pq(112, data.x8), bm.pp.pq(111, data.x9), bm.pp.pq(113, data.xA), bm.pp.pq(135, data.xB), bm.pp.pq(136, data.xC), bm.pp.pq(137, data.xD), bm.pp.pq(138, data
			.xE), bm.pp.pq(139, data.xF), bm.pp.pq(141, data.xG), bm.pp.pq(142, data.xH), bm.pp.pq(143, data.xI), bm.pp.pq(144, data.xJ)
	}
}

function c7() {
	this.te = new xK, this.xL = new xM, this.xN = new xO, this.di = function() {
		this.te.di()
	}
}

function xM() {
	this.xP = function(size) {
		for (var xQ = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(xQ.qT(16)));
		return h.join("")
	}, this.xR = function(r2) {
		return 20 < (r2 = r2.trim()).length ? r2.substring(0, 20) : r2
	}
}

function xK() {
	var xS = new Uint8Array(78);
	this.di = function() {
		var aC;
		for (xS[50] = 37, aC = 0; aC < 10; aC++) xS[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) xS[aC + 20] = aC + 11, xS[aC + 52] = aC + 38
	}, this.xT = function(r2) {
		return r2.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.xU = function(r2, size) {
		if ((r2 = this.xT(r2)).length > size) return r2.substring(0, size);
		for (; r2.length < size;) r2 = "-" + r2;
		return r2
	}, this.xV = function(r2) {
		for (var xW = xS, fS = r2.length, h = new Uint8Array(fS), aC = 0; aC < fS; aC++) h[aC] = xW[r2.charCodeAt(aC) - 45];
		return h
	}, this.xX = function(xY) {
		bG.a8(6 * xY.length), this.xZ(xY), bK.di(bG.aD)
	}, this.xZ = function(xY) {
		for (var fS = xY.length, j = bG, aC = 0; aC < fS; aC++) j.a9(6, xY[aC])
	}, this.xa = function(r2) {
		this.xZ(this.xV(r2))
	}, this.xb = function(r2, size) {
		this.xZ(this.xV(this.xU(r2, size)))
	}, this.xc = function(r2, size) {
		for (var h = this.xV(this.xU(r2, size)), fu = 0, o0 = 1, aC = h.length - 1; 0 <= aC; aC--) fu += o0 * h[aC], o0 *= 64;
		return fu
	}
}

function xd() {
	var j, k, xe;

	function y4(hu, fV, y2, xj, xx) {
		fV = y3(hu, fV + 1 + 2 * xj & 3);
		! function(hu, lQ) {
			return 1 < Math.abs(hu % j - lQ % j) || 1 < Math.abs(y7(hu) - y7(lQ))
		}(hu, fV) && 0 === xx[fV << 2] && (xx[fV << 2] = y2)
	}

	function y7(h0) {
		return Math.floor((h0 + .5) / j) % k
	}

	function y3(h0, fV) {
		return h0 + xe[fV]
	}
	this.xf = function(r2) {
		var aC, xg, fS, xh, xQ = bK;
		for (bJ.te.xX(bJ.te.xV(r2)), bV.xk.xl[bV.f8].j = bV.fd = j = xQ.qT(12), bV.xk.xl[bV.f8].k = bV.fe = k = xQ.qT(12), xe = [-j, -1, j, 1], bV.xu = document.createElement("canvas"), bV.xu.width = bV.fd, bV.xu.height = bV.fe, bV.xq = bV.xu
			.getContext("2d", {
				alpha: !1
			}), bV.xr = bV.xv = null, bV.xr = bV.xq.getImageData(0, 0, bV.fd, bV.fe), bV.xv = bV.xr.data, bD.rT.xw(bV.xv), fS = xQ.qT(12), xg = xQ.qT(5), xh = xn(j * k - 1), aC = 0; aC < fS; aC++) ! function(li, h0, xi, xj) {
			var aC, fV, xQ = bK,
				xx = bV.xv,
				xy = h0,
				xz = h0,
				y0 = 0,
				y1 = 1 + xi,
				y2 = 2 - xi;
			for (xx[h0 << 2] = y1, aC = 0; aC < li; aC++) fV = xQ.qT(2), h0 = y3(h0, fV), xx[h0 << 2] === y1 ? y0 % 2 == 1 && y4(xz, y0 + 2 * xj + 3, y2, xj, xx) : xx[h0 << 2] = y1, y4(h0, fV, y2, xj, xx), y4(xz, fV, y2, xj, xx), xz = h0,
				y0 = fV;
			y3(h0, 0) === xy ? (y4(h0, 0, y2, xj, xx), y4(xy, 0, y2, xj, xx)) : y3(h0, 1) === xy && (y4(h0, 0, y2, xj, xx), y4(xy, 2, y2, xj, xx));
			0 === li && (y4(xy, 0, y2, xj, xx), y4(xy, 2, y2, xj, xx))
		}(xQ.qT(xg), xQ.qT(xh), 1 === xQ.qT(1), 1 === xQ.qT(1));
		var fZ, fb, iK, y8, y9, yA, xx = bV.xv,
			yB = !0,
			yC = bV.xk.xl[bV.f8].yC,
			yD = bV.xk.xl[bV.f8].yD;
		for (fb = 0; fb < k; fb++)
			for (y8 = !0, y9 = yB, fZ = yA = 0; fZ < j; fZ++) iK = 4 * fb * j + 4 * fZ, yA <= fZ && 0 < xx[iK] && (y9 = 2 === xx[iK], y8) && (y8 = !1, y9 !== yB) ? (yB = y9, yA = fZ + 1, fZ = -1) : (y9 ? (xx[iK] = yD[0], xx[1 + iK] = yD[1], xx[
				2 + iK] = yD[2]) : (xx[iK] = yC[0], xx[1 + iK] = yC[1], xx[2 + iK] = yC[2]), xx[3 + iK] = 255);
		bV.xq.putImageData(bV.xr, 0, 0), bV.xs = !0, bV.xt.di(), bi.dq = !0
	}
}

function xO() {
	this.xf = function(yE) {
		for (var xQ = bK, size = xQ.qT(yE), yF = 7 + 9 * xQ.qT(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(xQ.qT(yF)));
		return h.join("")
	}
}

function cC() {
	var t3, t4, yG, yH, yI, yJ, yK, yL, yM, yN;

	function yP() {
		var yS = aE.yS;
		for (yM = yS; yM < aE.fP; yM++) yO();
		for (yM = aE.hq ? aE.kn : 0; yM < yS; yM++) {
			if (!yT()) {
				for (var fm = aE.yX = yM; fm < yS; fm++) yM = fm, yO();
				return
			}
			yW(yJ + t3 * yI + bO.ft(yI, 2), yK + t4 * yI + bO.ft(yI, 2))
		}
	}

	function yz(player) {
		for (var jL = ah.jL, jN = ah.jN, jM = ah.jM, jO = ah.jO, fb = jN[player]; fb <= jO[player]; fb++)
			for (var fZ = jL[player]; fZ <= jM[player]; fZ++) {
				var f6 = ad.z0(fZ, fb);
				ad.h2(f6) && (ad.jy(f6) ? ad.gx(f6, player) : ad.z1(f6, player))
			}
	}

	function yy(h, tw, tx) {
		var ea = h[tw];
		h[tw] = h[tx], h[tx] = ea
	}

	function yT() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (t3 = bO.ft(yG * az.random(), az.value(100)), t4 = bO.ft(yH * az.random(), az.value(100)), z6()) return 1;
			return
		}() || function() {
			var ip, is, fl, yV, fm, yU;
			for (ip = bO.ft(yG * az.random(), az.value(100)), is = bO.ft(yH * az.random(), az.value(100)), fl = 40; 1 <= fl; fl--)
				for (yV = yH - fl; 0 <= yV; yV -= 40)
					for (t4 = (yV + is) % yH, fm = 40; 1 <= fm; fm--)
						for (yU = yG - fm; 0 <= yU; yU -= 40)
							if (t3 = (yU + ip) % yG, z6()) return 1;
			return
		}()
	}

	function z6() {
		for (var h0, z8, gap = bO.ft(yI - yL, 2), z9 = yK + t4 * yI + gap, zA = yJ + t3 * yI + gap, z7 = z9 + yL - 1; z9 <= z7; z7--)
			for (z8 = zA + yL - 1; zA <= z8; z8--)
				if (h0 = ad.z0(z8, z7), !ad.fN(h0) || ad.jy(h0)) return;
		return 1
	}

	function yW(yU, yV) {
		yO(), zB(yU - 2, yV - 2)
	}

	function yO() {
		ah.nN[yM] = 0, ah.hG[yM] = ah.yw[yM] = 0, ah.gu[yM] = [], ah.h8[yM] = [], ah.h9[yM] = [], ah.fr[yM] = [], ah.jL[yM] = ah.jN[yM] = ah.jM[yM] = ah.jO[yM] = 0
	}

	function zB(yU, yV) {
		var h0, aC, zC, zD;
		for (ah.nN[yM] = 1, ah.jL[yM] = yU + 10, ah.jN[yM] = yV + 10, ah.jO[yM] = ah.jM[yM] = 0, zC = yU; zC < yU + 4; zC++)
			for (zD = yV; zD < yV + 4; zD++)(yU < zC && zC < yU + 3 || yV < zD && zD < yV + 3) && (h0 = ad.z0(zC, zD), ad.fN(h0)) && (ah.jL[yM] = Math.min(zC, ah.jL[yM]), ah.jM[yM] = Math.max(zC, ah.jM[yM]), ah.jN[yM] = Math.min(zD, ah.jN[yM]), ah
				.jO[yM] = Math.max(zD, ah.jO[yM]), yN[ah.hG[yM]] = h0, ah.hG[yM]++, ad.z1(h0, yM));
		for (ah.yw[yM] = ah.hG[yM], aC = ah.hG[yM] - 1; 0 <= aC; aC--) ad.zE(yN[aC], yM) ? (ad.gx(yN[aC], yM), ah.h8[yM].push(yN[aC])) : ad.zF(yN[aC]) ? (ad.gx(yN[aC], yM), ah.h9[yM].push(yN[aC])) : ad.zG(yN[aC]) && (ad.gx(yN[aC], yM), ah.fr[yM]
			.push(yN[aC]))
	}
	this.di = function() {
		if (yN = new Array(12), yL = 6, yI = 10, yG = bO.ft(bV.fd, yI), yH = bO.ft(bV.fe, yI), yJ = bO.ft(bV.fd - yI * yG, 2), yK = bO.ft(bV.fe - yI * yH, 2), aE.hq)
			for (var aC = 0; aC < aE.kn; aC++) yM = aC, yO(), ah.nN[yM] = 1;
		(0 === aE.data.spawningType ? yP : 1 === aE.data.spawningType ? (yP(), function() {
			var yY = aE.yZ;
			aE.ya || yY++;
			if (!(yY < 3)) {
				for (var data = aE.data, k3 = (aE.hq ? aE.kn : 0) + data.teamPlayerCount[0], o6 = aE.yX, yb = new Uint32Array(yY), yc = new Uint32Array(yY), yd = new Uint16Array(yY), ye = new Uint16Array(yY), fQ = bj.fQ, jL = ah.jL, jN =
						ah.jN, jM = ah.jM, jO = ah.jO, g7 = bR.g7, g8 = bR.g8, aC = k3; aC < o6; aC++) g7[aC] = jL[aC] + jM[aC] >> 1, g8[aC] = jN[aC] + jO[aC] >> 1;
				for (aC = k3; aC < o6; aC++) {
					var id = fQ[aC];
					yb[id] += g7[aC], yc[id] += g8[aC]
				}
				var lA = bj.lA;
				for (aC = 1; aC < yY; aC++) {
					var gv = Math.max(data.teamPlayerCount[lA[aC]], 1);
					yd[aC] = bO.ft(yb[aC], gv), ye[aC] = bO.ft(yc[aC], gv)
				}
				var yf = bj.yf,
					yg = bj.yg,
					yh = bj.yh,
					g6 = bR.g6;
				for (aC = 0; aC < 512; aC++) g6[aC] = aC;
				for (var eG = 0; eG < 2 + (4 <= yY); eG++)
					for (aC = k3; aC < o6; aC++) {
						for (var hu = aC, yi = g6[hu], yj = 1, fi = bO.yk(g7[yi] - yd[1], g8[yi] - ye[1]), fl = 2; fl < yY; fl++) {
							var yl = bO.yk(g7[yi] - yd[fl], g8[yi] - ye[fl]);
							yl < fi && (fi = yl, yj = fl)
						}
						var ym = fQ[hu];
						if (yj !== ym) {
							if (2 === eG && 4 <= yY) {
								var yn = Math.max((yj + 1) % yY, 1),
									yo = bO.yk(g7[yi] - yd[yn], g8[yi] - ye[yn]);
								for (fl = 1; fl < yY; fl++) yl = bO.yk(g7[yi] - yd[fl], g8[yi] - ye[fl]), fi < yl && yl < yo && (yo = yl, yn = fl);
								yn !== ym && bO.yk(yd[ym] - yd[yn], ye[ym] - ye[yn]) < bO.yk(yd[ym] - yd[yj], ye[ym] - ye[yj]) && (yj = yn)
							}
							var yp = lA[yj],
								yq = yg[yp] + (aE.hq ? 0 : yh[yp]),
								lQ = yf[yq],
								yr = g6[lQ],
								ys = yg[yp + 1];
							fi = bO.yk(g7[yr] - yd[ym], g8[yr] - ye[ym]);
							for (var ej = yq + 1; ej < ys; ej++) {
								var yt = yf[ej],
									yu = g6[yt];
								(yl = bO.yk(g7[yu] - yd[ym], g8[yu] - ye[ym])) < fi && (fi = yl, lQ = yt)
							}
							lQ < k3 || o6 <= lQ || (yr = g6[lQ], yb[ym] += g7[yr] - g7[yi], yc[ym] += g8[yr] - g8[yi], yb[yj] += g7[yi] - g7[yr], yc[yj] += g8[yi] - g8[yr], gv = data.teamPlayerCount[lA[ym]], yd[ym] = bO.ft(yb[ym], gv),
								ye[ym] = bO.ft(yc[ym], gv), gv = data.teamPlayerCount[yp], yd[yj] = bO.ft(yb[yj], gv), ye[yj] = bO.ft(yc[yj], gv), g6[hu] = yr, g6[lQ] = yi)
						}
					}! function() {
						for (var g6 = bR.g6, jL = ah.jL, jN = ah.jN, jM = ah.jM, jO = ah.jO, hG = ah.hG, yw = ah.yw, h8 = ah.h8, h9 = ah.h9, fr = ah.fr, aC = 0; aC < 512; aC++) {
							var yx = g6[aC];
							if (yx !== aC) {
								yy(jL, aC, yx), yy(jN, aC, yx), yy(jM, aC, yx), yy(jO, aC, yx), yy(hG, aC, yx), yy(yw, aC, yx), yy(h8, aC, yx), yy(h9, aC, yx), yy(fr, aC, yx), yz(aC), yz(yx), g6[aC] = aC;
								for (var k = yx, h1 = g6[k]; h1 !== aC;) h1 = g6[k = h1];
								g6[k] = yx
							}
						}
					}()
			}
		}) : function() {
			var yS = aE.yS;
			for (yM = yS; yM < aE.fP; yM++) yO();
			for (yM = aE.hq ? aE.kn : 0; yM < yS; yM++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							yU = spawningData[2 * yM] + 1,
							spawningData = spawningData[2 * yM + 1] + 1;
						if (3 < yU && yU < bV.fd - 5 && 3 < spawningData && spawningData < bV.fe - 5 && ad.fN(ad.z0(yU, spawningData)) && function(yU, yV) {
								var h0, z8, z7;
								for (z7 = yV; yV - 6 < z7; z7--)
									for (z8 = yU; yU - 6 < z8; z8--)
										if (h0 = ad.z0(z8, z7), ad.jy(h0)) return;
								return 1
							}(yU + 3, spawningData + 3)) return yW(yU + 1, spawningData + 1), 1;
						return
					}()) {
					if (!yT()) {
						for (var fm = aE.yX = yM; fm < yS; fm++) yM = fm, yO();
						return
					}
					var yU = yJ + t3 * yI + bO.ft(yI, 2),
						yV = yK + t4 * yI + bO.ft(yI, 2);
					yW(yU, yV)
				}
		})(), bg.nJ[7] = ah.hG[aE.fC]
	}, this.zH = function(jw, zI, zJ) {
		var aC, yU, yV, h0, t3, t4;
		for (yM = jw, aC = 0; aC < 20; aC++)
			for (yU = zI + aC; zI - aC <= yU; yU--)
				for (yV = zJ + aC; zJ - aC <= yV; yV--)
					if ((yU === zI + aC || yU === zI - aC || yV === zJ + aC || yV === zJ - aC) && 3 < yU && yU < bV.fd - 5 && 3 < yV && yV < bV.fe - 5 && ad.fN(ad.z0(yU, yV)) && function(yU, yV) {
							var h0, z8, z7;
							for (z7 = yV; yV - 6 < z7; z7--)
								for (z8 = yU; yU - 6 < z8; z8--)
									if (h0 = ad.z0(z8, z7), ad.jy(h0) && !ad.zP(yM, h0)) return;
							return 1
						}(yU + 3, yV + 3)) {
						if (0 < ah.hG[yM]) {
							for (t4 = t3 = h0 = void 0, t3 = ah.jM[yM]; t3 >= ah.jL[yM]; t3--)
								for (t4 = ah.jO[yM]; t4 >= ah.jN[yM]; t4--) h0 = 4 * (t4 * bV.fd + t3), ad.zM(yM, h0) && (ad.zN(h0), ah.hG[yM]--);
							yO()
						}
						return zB(yU - 1, yV - 1), !0
					} return !1
	}, this.zO = function(jw) {
		yM = jw, yT() ? yW(yJ + t3 * yI + bO.ft(yI, 2), yK + t4 * yI + bO.ft(yI, 2)) : yO()
	}
}

function zQ() {
	au.zR(), vx.setTransform(ie, 0, 0, ie, 0, 0), vx.imageSmoothingEnabled = ie < 3, vx.drawImage(bV.xu, aT.zS(), aT.zT()), bS.zU.vw(), vx.drawImage(zV, aT.zS(), aT.zT()), au.vw(), bQ.vw(), ag.vw(), (aE.nr ? (bk.vw(), bF) : (aO.vw(), aW.vw(), aS
	.vw(), bF.vw(), ax.vw(), aX.vw(), aT.vw(), aR.vw(), bk.vw(), aV.vw(), aQ.vw(), aN.vw(), aM.vw(), aY.vw(), bh.vw(), aw)).vw(), u.vw()
}

function zW(zX, j, k) {
	zX.clearRect(0, 0, j, k), zX.fillStyle = bE.oL, zX.fillRect(0, 0, j, k)
}

function zY(zX, j, k, zZ) {
	zX.fillStyle = bE.oO, zX.fillRect(0, 0, j, zZ), zX.fillRect(0, 0, zZ, k), zX.fillRect(j - zZ, 0, zZ, k), zX.fillRect(0, k - zZ, j, zZ)
}

function za(zX, fZ, fb, iO, zZ, h0, zb) {
	zX.fillStyle = bE.oO;
	var h0 = Math.floor(iO * h0),
		tj = (h0 += (h0 - zZ) % 2, Math.floor((h0 - zZ) / 2)),
		iO = Math.floor((iO - h0) / 2);
	zX.fillRect(fZ + iO, fb + iO + tj, h0, zZ), zb && zX.fillRect(fZ + iO + tj, fb + iO, zZ, h0)
}

function zd() {
	this.di = function() {
		8 === aE.l5 && aO.ze()
	}, this.zf = function(zg) {
		var elo = aE.data.elo,
			k2 = (elo[zg] - elo[1 - zg]) / 10,
			k2 = 8 / (1 + Math.pow(2, k2 / 32)),
			k2 = Math.floor(10 * k2 + .5),
			zi = elo[zg] + k2,
			zj = this.zk(zi),
			elo = this.zk(elo[1 - zg] - k2),
			k2 = (0 === zg ? aO.zm(zj, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.zm(elo, zj, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zi * bO.sqrt(zi) >> 8),
			elo = ((1 + aE.zp) * k2 / 100).toFixed(2);
		zg === aE.fC ? aO.zq(640, L(28, [elo]), 40, 0, bE.oO, bE.oL, -1, !1) : aO.zq(640, L(29, [ah.zr[zg], elo]), 40, 0, bE.oO, bE.oL, -1, !1)
	}, this.zk = function(elo) {
		return 16e3 === (elo = bO.ia(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ci() {
	this.sa = new zs, this.xx = new zt
}

function zt() {
	this.iE = !1;
	this.zx = [], this.zy = 100;
	var no, np, gap, iO, zu, zw, zz = 0,
		a00 = new Array(9),
		a01 = [],
		a02 = [],
		a03 = 0,
		a04 = 0,
		a05 = 0,
		a06 = 0;

	function a0I() {
		a00.sort(function(fl, fm) {
			return fm.ks - fl.ks
		});
		for (var r2 = "" + a00[0].q4, aC = 1; aC < 9; aC++) r2 += "," + a00[aC].q4;
		for (aC = 0; aC < 9; aC++) r2 += "," + a00[aC].ks;
		bm.eW.wS(120, r2)
	}
	this.di = function() {
		for (var a07 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a07.length; aC++) {
			var color = 6 === a07[aC] ? bE.op : bE.oM;
			this.zx.push(bD.canvas.a08(ac.get(3), a07[aC], color))
		}
		for (aC = 0; aC < ak.sa.a09; aC++) a02.push(ak.sa.a0A - ak.sa.a09 + aC);
		for (aC = 0; aC < ak.sa.a0B; aC++) a02.push(ak.sa.a0C + aC);
		var a0D = ak.sa.a0E(bN.a0D);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a0D.slice(), aC = 0; aC < a0D.length; aC++) a02.push(a0D[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a00[q] = {
						q4: isNaN(qcode) ? 1015 + q : qcode,
						ks: 0
					}
				} else {
					var aC, h = bm.eW.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a00[aC] = {
							q4: 1015 + aC,
							ks: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var fu = parseInt(h[aC]),
								ej = (fu = 0 <= fu && fu < ak.sa.a0A ? fu : 0, parseInt(h[aC + 9]));
							ej = 0 <= ej && ej < 1e3 ? ej : 0, a00[aC] = {
								q4: fu,
								ks: ej
							}
						}
				}
		}()
	}, this.show = function(m2, m3, a0J) {
		var aC;
		if (a03 = m2, a04 = m3, zz = a0J || 0, this.iE = !0, a01 = [], 0 === zz)
			for (aC = 0; aC < 9; aC++) a01.push(a00[aC].q4);
		else {
			var fm = 49 * zz,
				a0J = fm - 49;
			for (a0J >= a02.length && (zz = 1, a0J = 0, fm = 49), aC = a0J = (fm = Math.min(fm, a02.length)) - 49; aC < fm; aC++) a01.push(a02[aC])
		}
		a01.push(1024);
		a0J = a01.length, iO = Math.floor((a1.a2.ib() ? .075 : .0468) * i.ic), gap = Math.floor(iO / 3), (a05 = 10 * (zu = iO + gap)) > i.j && (a05 = i.j, gap = (zu = a05 / 10) - (iO = 3 * zu / 4)), zw = bO.ft(a0J, 10) + !!(a0J % 10), (a06 = zw *
			zu) > i.k && (a06 = i.k, gap = (zu = a06 / zw) - (iO = 3 * zu / 4)), a0J = .5 * gap;
		no = Math.min(Math.max(m2 - .5 * a05 + a0J, a0J), i.j - a05 + a0J), np = Math.min(Math.max(m3 - .5 * a06 + a0J, a0J), i.k - a06 + a0J)
	}, this.hf = function(m2, m3, player) {
		if (!this.iE) return !1;
		if (this.a0L(m2, m3)) {
			m2 = bO.ia(bO.ft(m2 - no + .5 * gap, zu), 0, 9);
			if ((m2 += 10 * bO.ia(bO.ft(m3 - np + .5 * gap, zu), 0, 9)) >= a01.length) return aM.sb(), !0;
			m3 = a01[m2];
			if (1024 === m3) return this.show(a03, a04, zz + 1), !0;
			! function(q4) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a00[aC].ks = Math.floor(.99 * a00[aC].ks);
					for (aC = 0; aC < 9; aC++)
						if (q4 === a00[aC].q4) return a00[aC].ks = Math.min(a00[aC].ks + 30, 999), a0I();
					a00.splice(5, 0, {
						q4: q4,
						ks: Math.max(a00[4].ks, 30)
					}), a00.pop(), a0I()
				}
			}(m3), player === aE.fC ? bB.hs.q3(m3) : bB.go.qI(m3, player)
		}
		return aM.sb(), !0
	}, this.a0L = function(m2, m3) {
		return !(m2 < no - .5 * gap || m3 < np - .5 * gap || no + a05 - .5 * gap <= m2 || np + a06 - .5 * gap <= m3)
	}, this.vw = function() {
		vx.fillStyle = bE.oL, vx.fillRect(no - .5 * gap, np - .5 * gap, a05, a06);
		for (var iK = .5 * bf.a0M, fS = (vx.lineWidth = bf.a0M, vx.strokeStyle = vx.fillStyle = bE.oO, vx.strokeRect(no - .5 * gap + iK, np - .5 * gap + iK, a05 - 2 * iK, a06 - 2 * iK), vx.imageSmoothingEnabled = !0, a01.length), aC = 0; aC <
			fS; aC++) this.a0N(a01[aC], vx, no + aC % 10 * zu, np + bO.ft(aC, 10) * zu, iO);
		vx.imageSmoothingEnabled = !1
	}, this.a0N = function(q4, iU, fZ, fb, iO) {
		var f6;
		q4 >= 1024 - ak.sa.a09 ? (f6 = iO / this.zy, iU.setTransform(f6, 0, 0, f6, fZ, fb), iU.drawImage(this.zx[q4 - 1024 + ak.sa.a09], 0, 0), iU.setTransform(1, 0, 0, 1, 0, 0)) : (bD.rL.textAlign(iU, 1), bD.rL.textBaseline(iU, 1), iU.font = bD
			.rL.t9(0, .89 * iO), iU.fillText(ak.sa.a0O(q4), fZ + .5 * iO, fb + (.35 - bD.rL.a0P + .56) * iO))
	}
}

function zs() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a09 = 13, this.a0B = this.emojis.length, this.a0C = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a0C, this.a0A = 1024, this.a0Q = this.emojis.indexOf(
		"💀"), this.a0R = this.a0Q + 1, this.a0S = this.emojis.indexOf("🥇"), this.a0T = this.emojis.indexOf("😊"), this.a0O = function(fu) {
		return fu < this.a0C ? String.fromCharCode(55356, 56806 + bO.ft(fu, 26), 55356, 56806 + fu % 26) : this.emojis[Math.min(fu - this.a0C, this.a0B - 1)]
	}, this.a0E = function(r2) {
		for (var fS = r2.length - 2, h = [], aC = 0; aC < fS; aC++) {
			var a0U = r2.charCodeAt(aC) - 56806,
				a0V = r2.charCodeAt(aC + 2) - 56806;
			0 <= a0U && a0U < 26 && 0 <= a0V && a0V < 26 && (h.push(26 * a0U + a0V), aC += 3)
		}
		return h
	}, this.a0W = function(fu) {
		return fu < this.a0C
	}, this.a0X = function(fu) {
		return fu >= 1024 - this.a09
	}, this.a0Y = function(fu) {
		return fu >= this.a0C && fu < this.a0C + this.a0R
	}
}

function c6() {
	this.te = new a0Z, this.xL = new a0a, this.xN = new a0b, this.di = function() {
		this.te.di()
	}
}

function a0a() {
	this.xa = function(r2) {
		for (var fS = r2.length, j = bG, aC = 0; aC < fS; aC++) j.a9(16, r2.charCodeAt(aC))
	}
}

function a0Z() {
	var a0c = new Uint8Array(64);
	this.di = function() {
		var aC;
		for (a0c[0] = 45, a0c[37] = 95, aC = 0; aC < 10; aC++) a0c[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a0c[aC + 11] = 65 + aC, a0c[aC + 38] = 97 + aC
	}, this.tg = function(a0d) {
		for (var xQ = bK, xY = new Uint8Array(a0d), aC = 0; aC < a0d; aC++) xY[aC] = xQ.qT(6);
		return xY
	}, this.tf = function(xY) {
		for (var fS = xY.length, a0e = a0c, h = [], aC = 0; aC < fS; aC++) h.push(String.fromCharCode(a0e[xY[aC]]));
		return h.join("")
	}, this.a0f = function(value, a0g) {
		for (var a0e = a0c, h = [], aC = 0; aC < a0g; aC++) h.push(String.fromCharCode(a0e[value >> 6 * (a0g - 1 - aC) & 63]));
		return h.join("")
	}
}

function cE() {
	var a0h, a0i, a0j;
	a0h = [32, 65, 191, 913, 931], a0i = [64, 127, 688, 930, 1155], a0j = new Array(a0h.length + 1);
	for (var aC = 0; aC < a0j.length; aC++) {
		a0j[aC] = 0;
		for (var fl = aC - 1; 0 <= fl; fl--) a0j[aC] += a0i[fl] - a0h[fl]
	}

	function a0p(ej) {
		for (var aC = a0h.length - 1; 0 <= aC; aC--)
			if (ej >= a0h[aC] && ej < a0i[aC]) return aC;
		return -1
	}
	this.xR = function(r2) {
		return 0 !== (r2 = r2.trim()).indexOf("Bot ") && 0 !== r2.indexOf("[Bot] ") && function(r2, a0m, a0n) {
			var fS = (r2 = r2.trim()).length;
			if (fS < a0m || a0n < fS) return !1;
			for (var ej, a0o = 0, aC = 0; aC < fS; aC++)
				if (ej = r2.charCodeAt(aC), a0o += 65 <= ej && ej <= 90 || 1040 <= ej && ej <= 1071 ? 1 : 0, -1 === a0p(ej)) return !1;
			if (3 < a0o && a0o > Math.floor(fS / 2)) return !1;
			return !0
		}(r2, 3, 20)
	}, this.a0q = function(r2) {
		for (var fS = (r2 = r2.trim()).length, h = [], aC = 0; aC < fS; aC++) {
			var ej, h0 = a0p(ej = r2.charCodeAt(aC));
			h.push(a0j[h0] + ej - a0h[h0])
		}
		return h
	}, this.xf = function(h) {
		for (var ej, fm, r2 = "", fS = h.length, aC = 0; aC < fS; aC++)
			for (fm = 1; fm < a0j.length; fm++)
				if (h[aC] < a0j[fm]) {
					ej = a0h[fm - 1] + h[aC] - a0j[fm - 1], r2 += String.fromCharCode(ej);
					break
				} return r2
	}, this.a0r = function(r2) {
		for (var h = this.a0q(r2), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a0s = function(r2) {
		for (var h = new Array(Math.floor(r2.length / 3)), aC = 0; aC < r2.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(r2.substring(aC, aC + 3));
		return this.xf(h)
	}, this.a0t = function(r2) {
		for (var fu, h = [r2.length], aC = 0; aC < r2.length; aC++) h[aC] = r2.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < r2.length; aC++) aC === r2.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (fu = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(fu + (fu < 26 ? 65 : 71)), aC++);
		return result
	}, this.a0u = function(r2) {
		for (var ej, result = "", aC = 0; aC < r2.length; aC++) 48 <= (ej = r2.charCodeAt(aC)) && ej < 58 ? result += String.fromCharCode(ej) : 65 <= ej && ej < 75 ? result += "0" + (ej - 65).toString() : 75 <= ej && ej < 91 ? result += (ej - 65)
			.toString() : 97 <= ej && ej < 123 && (result += (ej - 71).toString());
		return result
	}, this.a0v = function(r2) {
		for (var fS = r2.length, h = [], aC = 0; aC < fS; aC++)(ej = r2.charCodeAt(aC)) < 58 ? h.push(r2[aC]) : (ej -= ej < 91 ? 65 : 71, h.push(String(bO.ft(ej, 10))), h.push(String(ej - 10 * bO.ft(ej, 10))));
		var fS = h.length - 2,
			ej = 0,
			xY = [];
		for (aC = 0; aC < fS; aC += 3) xY[ej++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return xY
	}, this.a0w = function() {
		for (var eG, a0x = "", aC = 0; aC < 6; aC++) eG = 48 + az.random() % 36, eG += 58 <= eG ? 39 : 0, a0x += String.fromCharCode(eG);
		return a0x
	}
}

function a0b() {
	this.a0q = function(r2, yE, a0y) {
		for (var a0z = [], fS = r2.length, max = 0, aC = 0; aC < fS; aC++) {
			var fu = r2.charCodeAt(aC);
			a0z.push(fu), max = Math.max(max, fu)
		}
		var yF = max < 128 ? 7 : 16;
		for (a0y.a9(yE, fS), a0y.a9(1, +(16 == yF)), aC = 0; aC < fS; aC++) a0y.a9(yF, a0z[aC])
	}
}

function dF() {
	this.a10 = new a11, this.result = new a12, this.a13 = new a14, this.a15 = new a16, this.a17 = new a18, this.a19 = new a1A, this.di = function() {
		this.result.di()
	}
}

function a14() {
	this.a1B = function() {
		for (var fS = am.lJ, a1C = am.lO, a1D = [], aC = 0; aC < fS; aC++) {
			var h0 = a1C[aC];
			bD.go.a1E(h0) && a1D.push(h0)
		}
		return a1D
	}, this.a1F = function() {
		if (0 === bj.lA[aE.a1G]) return this.a1H();
		bk.ko(aE.a1G);
		for (var a1D = [], fS = bR.fx[0], g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = g6[aC];
			bD.go.a1E(h0) && a1D.push(h0)
		}
		return a1D
	}, this.a1H = function() {
		var h0 = mO[0];
		return bD.go.a1E(h0) ? [h0] : []
	}, this.a1I = function(a1D) {
		for (var fS = a1D.length, ea = 0, hG = ah.hG, aC = 0; aC < fS; aC++) ea += hG[a1D[aC]];
		return ea
	}
}

function a11() {
	function a1K() {
		if (2 === aE.a1O) return 1;
		ax.a1P(), aE.a1O = 2, aE.a1Q = aE.a1R
	}

	function a1M() {
		bU.a17.a1S(), aY.show(1 === aE.a1T, !1, 2 === aE.a1T), bU.result.a1S(), bU.a19.ee(), bU.a15.ee(), bU.a15.a1U(), aO.a1V(!0), aO.a1W(247), aO.a1W(956), aO.a1W(957), aW.n9(!0), aX.n9(!0), ax.n9(), bF.a1X(), aE.hb && bi.a1Y.a1Z(), bi.dq = !0, be
			.a1a(), a1.a2.setState(0)
	}
	this.a1J = function() {
		a1K() || (aE.a1L = 2, a1M())
	}, this.a1N = function() {
		a1K() || (aE.a1L = 1, a1M())
	}
}

function a16() {
	this.ee = function() {
		var a1i;
		2 === aE.a1L ? (aO.a1b(0, 59), aI.nx(2700)) : aE.l5 < 7 ? (a1i = bj.lA[aE.a1G], a1i = bj.a1k[a1i], aR.a1l(L(30, [a1i]), 2, 1, 12), aO.zq(0, L(31, [a1i]), 40, 0, bE.oO, bE.oL, -1, !1), aI.nx(2700)) : 8 === aE.l5 ? (aE.a1T ? aO.a1b(aE.a1g,
			2) : aO.a1b(1 - aE.fC, 3), aE.a1h.zf(aE.a1g), aI.nj(aE.a1g, 2700, !1, 0)) : 9 === aE.l5 ? (aO.a1m(), aI.nx(2700)) : (aO.a1n(aE.a1g), aI.nj(aE.a1g, 2700, !1, 0))
	}, this.a1U = function() {
		var r2;
		aE.hb || aE.l7 || (r2 = b1.z.a1o(), aE.l5 < 7 ? r2 += "/log/team" : 8 === aE.l5 ? r2 += "/log/1v1" : 9 === aE.l5 ? r2 += "/log/zombies" : r2 += "/log/br", aO.zq(720, r2, 736, 0, bE.oO, bE.on, -1, !1))
	}
}

function a1A() {
	function a1y() {
		var u0;
		return 8 === aE.l5 ? 0 : (u0 = Math.floor(ah.a1z[aE.fC] / 50), (u0 = Math.min(u0, 200)) / 100)
	}

	function a1q() {
		var u0 = a1y();
		0 !== u0 && aO.zq(440, L(32, [u0.toFixed(2)]), 40, 0, bE.oh, bE.oL, -1, !1)
	}
	this.ee = function() {
		var a1r;
		0 === bU.result.a1p || 0 === bU.result.a1D.length || 8 === aE.l5 ? bD.go.he(aE.fC) && a1q() : (function(a1r) {
			7 !== aE.l5 && 10 !== aE.l5 && 9 !== aE.l5 || 0 !== aE.a1T && a1r && aO.zq(600, L(36, [a1r.toFixed(2)]), 40, 0, bE.oO, bE.oL, -1, !1)
		}(a1r = function() {
			aO.zq(520, L(33), 40, 0, bE.oO, bE.oL, -1, !1);
			for (var a1D = bU.result.a1D, fS = a1D.length, hG = ah.hG, h = [], aC = 0; aC < fS; aC++) {
				var h0 = a1D[aC];
				h.push({
					h0: h0,
					ea: hG[h0]
				})
			}
			h.sort((fl, fm) => fm.ea - fl.ea);
			var a1k = ah.zr,
				ea = bU.result.a20,
				u0 = bU.result.a1p,
				r2 = "",
				a1r = 0;
			for (aC = 0; aC < fS; aC++) {
				var iC = h[aC].ea * u0 / (100 * ea),
					a22 = a1k[h[aC].h0] + ": " + iC.toFixed(2) + "   ";
				h[aC].h0 === aE.fC && (a1r = iC), 2 < aC && 4 !== fS ? 3 === aC && (r2 += "(" + L(34, [fS - 3]) + ")") : r2 += a22
			}
			aO.zq(560, bD.sK.a23(r2), 40, 0, bE.oh, bE.oL, -1, !1), a1r ? aO.zq(580, L(35, [a1r.toFixed(2) + " + " + a1y().toFixed(2)]), 40, 0, bE.oh, bE.oL, -1, !1) : bD.go.he(aE.fC) && a1q();
			return a1r
		}()), 2 === aE.a1L || 7 <= aE.l5 || function(a1r) {
			var a1D = bU.result.a1D,
				fS = a1D.length,
				a24 = ah.a24,
				hG = ah.hG,
				a25 = [];
			loop: for (var aC = 0; aC < fS; aC++) {
				var h0 = a1D[aC],
					a26 = bD.sK.a27(a24[h0]);
				if (null !== a26) {
					for (var a28 = hG[h0], fm = a25.length - 1; 0 <= fm; fm--)
						if (a26 === a25[fm].name) {
							a25[fm].ea += a28, a25[fm].h.push({
								h0: h0,
								ea: a28
							});
							continue loop
						} a25.push({
						name: a26,
						ea: a28,
						h: [{
							h0: h0,
							ea: a28
						}]
					})
				}
			}
			if (0 !== a25.length) {
				a25.sort((fl, fm) => fm.ea - fl.ea);
				var h = a25[0].h,
					a29 = (h.sort((fl, fm) => fm.ea - fl.ea), "[" + a25[0].name + "]"),
					a2A = 512 * bU.result.a1p / 26214400,
					li = (aO.zq(0, L(37, [a29, a2A.toFixed(4)]), 40, 0, bE.oO, bE.oL, -1, !1), h.length),
					xW = a25[0].ea,
					a2B = 1e4 * a2A;
				for (aC = 0; aC < li; aC++)
					if (h[aC].h0 === aE.fC) {
						aO.zq(600, L(38, [(a2B * h[aC].ea / (10 * xW)).toFixed(2)]), 40, 0, bE.oO, bE.oL, -1, !1), aO.zq(640, L(39, [(.2 * a1r).toFixed(2), a29]), 40, 0, bE.oO, bE.oL, -1, !1);
						break
					}
			}
		}(a1r))
	}, this.a1v = function() {
		var a1w, xy;
		aE.l7 || (a1w = ah, xy = aE.fC, 0 === a1w.a1x[xy]) || a1w.jr[xy] < 1 || 2 * a1w.qk[xy] > 3 * (a1w.jq[xy] + a1w.jr[xy]) || a1q()
	}
}

function a12() {
	this.di = function() {
		this.a2C = 0, this.a1D = [], this.a20 = 0, this.a1p = 0
	}, this.a1S = function() {
		var su;
		aE.l7 || (su = this, 2 === aE.a1L ? su.a1D = bU.a13.a1B() : aE.iM ? su.a1D = bU.a13.a1F() : su.a1D = bU.a13.a1H(), su.a2C = bl.a2E.a2F(), su.a20 = Math.max(1, bU.a13.a1I(su.a1D)), bB.go.qR(), 8 === aE.l5 ? bU.result.a1p = 0 : su.a1p =
			100 * bU.result.a2C * (1 + aE.zp))
	}
}

function a18() {
	this.a1S = function() {
		if (2 === aE.a1L) aE.a1T = 2;
		else {
			if (8 === aE.l5) bD.go.kA(0) || 0 === ah.nN[0] ? aE.a1g = 1 : bD.go.kA(1) || 0 === ah.nN[1] ? aE.a1g = 0 : aE.a1g = +(ah.hG[1] > ah.hG[0]);
			else {
				if (aE.iM) {
					var lL = bk.a2I();
					if (aE.a1G = lL, bj.lA[lL]) return void(aE.a1T = +(bj.fQ[aE.fC] === lL))
				}
				aE.a1g = mO[0]
			}
			aE.a1T = +(aE.a1g === aE.fC)
		}
	}
}

function dK() {
	this.id = 0, this.e1 = 0, this.we = null, this.wf = null, this.wg = null, this.wm = null, this.a2 = new a2J, this.di = function() {
		var self, e1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e1 = Android.getVersion()) < 12 || (self.e1 = e1, self.id = 1, self.wf = Android),
			function(self) {
				var e1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wg = mwIOSdataX, self.wm = window.webkit.messageHandlers.iosCommandA, e1 = self
					.wg.version, self.e1 = e1 ? Number(e1) : 0)
			}(this),
			function(self) {
				var we;
				try {
					if (!(we = window.localStorage)) return;
					we.setItem("tls7", "1"), we.removeItem("tls7")
				} catch (error) {
					return
				}
				self.we = we
			}(this)
	}
}

function a2J() {
	this.a2N = function() {
		bm.pp.x2(), bm.pp.x3(), b1.z.close(0, 3255), 0 === a1.id ? a1.we && a1.we.clear() : 1 === a1.id ? a1.wf.saveString(199, "") : 2 === a1.id && a1.wm.postMessage("clear")
	}, this.a2O = function() {
		2 === a1.id ? a1.wm.postMessage("showConsentForm") : 1 === a1.id && a1.wf.setState(7)
	}, this.a2P = function() {
		this.setState(14)
	}, this.ib = function() {
		return 1 === bm.eW.wT(2)
	}, this.a2Q = function() {
		bm.eW.wS(102, "")
	}, this.setState = function(a2R) {
		1 === a1.id && 5 <= a1.e1 && a1.wf.setState(a2R)
	}, this.a3 = function() {
		var a2S;
		1 === a1.id && 7 <= a1.e1 ? a1.wf.setState(5) : ((a2S = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2S.toString())
	}, this.eU = function() {
		0 !== a1.id && (1 === a1.id ? a1.wf.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e1 ? a1.wm.postMessage("prepare ad 2904813909") : a1.wm.postMessage("loadAds 2904813909")))
	}, this.eb = function(ea) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e1 && (a1.wf.presentAd(ea), !0) : 2 === a1.id && 0 !== a1.e1 && (a1.wm.postMessage("showAd"), !0))
	}, this.ds = function() {
		2 === a1.id && a1.e1 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a2T + "' target='_blank'>" + bN
			.a2T + "</a>", !0, [new x("⬅️ " + L(40), function() {
				u.v(0)
			}, bE.p4)]))
	}
}

function dZ() {
	function a2W(e) {
		m7(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(40), function() {
				u.a2X()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.om)]))
	}

	function a2i(e) {
		m7(e), u.v(4, 5, new w(L(41), a2e(e), !0))
	}

	function a2e(e) {
		var r2 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + r2 : 4527 === e ? "Player already in lobby" + r2 : 4577 === e ? "Your IP is banned." + r2 : 4530 === e ? "Lobby Timeout" + r2 : 4528 === e ?
			"Lobby Kick: Another login detected." + r2 : 4540 === e ? "You have been kicked." + r2 : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + r2 : 4555 === e ? "This Account is blocked." + r2 :
			4580 === e ? "More Gold needed" + r2 : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + r2 : 4591 === e ? "The algo determined you are a bot." + r2 : "Unknown error" + r2
	}

	function m7(e) {
		a2Z(e), u.z.a0()
	}

	function a2Z(e) {
		4540 === e && b1.z.a2k(e);
		var a2R = ab.a2Y();
		6 === a2R ? b1.z.a2k(e) : bq.ez ? (u.y(), bq.v1(), b1.z.close(b1.z.f0, 3256)) : 8 === a2R && aE.a2l(!0)
	}
	this.q = [], this.a2U = function(a2V, e) {
		if (this.q.push(e), 8 === u.tc && 0 === a2V)
			if (4211 === e) a2W(e);
			else {
				if (bq.ez && (4495 === e || 4480 === e) && b1.z.f0 !== a2V) return void u.a2X();
				if (8 !== ab.a2Y() && a2Z(), 4480 === e) return bm.pp.x4(), void u.v(4, 0, new w(L(43), L(44), !0));
				var a2b = 0;
				u.a2c() && 10 === u.a2c().a2d && (a2b = u.a2c().a2d), u.v(4, a2b, new w(L(41), a2e(e), !0))
			}
		else {
			a2b = ab.a2Y();
			if (6 === a2b) {
				if (4211 === e) return void a2W(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a2f(a2V)
			} else if (bq.ez) {
				if (a2V !== b1.z.f0) return
			} else {
				if (8 === a2b) return void(a2V !== b1.z.a2g || aE.l7 || 1 !== aE.a1O || aE.hb || aO.a2h(L(42, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}
			a2i(e)
		}
	}, this.a2j = function(e) {
		this.q.push(e), 8 === ab.a2Y() ? aE.l7 || 1 !== aE.a1O || aO.a2h(L(42, [e])) : a2i(e)
	}, this.t = function() {
		this.q.push(3268), m7(3268)
	}
}

function d9() {
	var a2m, a2n, a2o = -15e3,
		a2p = !1;

	function hf(e) {
		a39() || (a2p = !0, a3A(e, 1), b1.z.a3B(b1.z.a2g), a3C(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a2y(e) {
		a2o = bi.eZ, a3A(e, 1), b1.z.a3B(b1.z.a2g), 0 < e.touches.length && (a2m = Math.floor(i.l * e.touches[0].clientX), a2n = Math.floor(i.l * e.touches[0].clientY), av.a2y(e) || a3C(a2m, a2n))
	}

	function a3C(fZ, fb) {
		u.hf(fZ, fb), 0 === aE.a1O ? ab.hf(fZ, fb) : bF.a3D(fZ, fb) || bh.hf(fZ, fb) || aY.hf(fZ, fb) || aM.a3E(fZ, fb) || aQ.hf(fZ, fb) || 0 <= aN.hf(fZ, fb) || ax.hf(fZ, fb) || bM.a3F(fZ, fb) || aM.a3G(fZ, fb)
	}

	function a2u(e) {
		a39() || (a2p = !0, a3A(e, 1), a3H(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a2z(e) {
		a2o = bi.eZ, a3A(e, 1), 0 < e.touches.length && (a2m = Math.floor(i.l * e.touches[0].clientX), a2n = Math.floor(i.l * e.touches[0].clientY), av.a2z(e) || a3H(a2m, a2n))
	}

	function a3H(fZ, fb) {
		bM.rn() || (bM.hX = fZ, bM.hY = fb), u.a2u(fZ, fb), 0 === aE.a1O ? ab.a2u(fZ, fb) : (bW.hZ(fZ, fb), bh.a2u(fZ, fb) || (aN.a2u(fZ, fb), aM.iE() ? aM.a2u(fZ, fb) : aS.hg ? aS.a2u(fZ) && (bi.dq = !0) : (aW.a2u(fZ, fb), aT.nt && aT.a2u(fZ, fb) &&
			(bi.dq = !0))))
	}

	function a2w(e) {
		a39() || (a3A(e, 1), a3I(), 0 === aE.a1O ? (ab.click(-1024, -1024), aU.reset()) : (aW.a3J(-1024, -1024), aN.a2u(-1024, -1024), aS.a3K(), aT.nt = !1))
	}

	function a2v(e) {
		a39() || (a3A(e, 1), a3L(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a2s && (bM.a2s = !1, e.preventDefault()))
	}

	function click(e) {
		a39() || a3A(e, 1)
	}

	function a30(e) {
		a2o = bi.eZ, a3A(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a1O ? aT.nt = !1 : av.a3M() || (a3L(a2m, a2n, !1), bM.a2s && (bM.a2s = !1, e.preventDefault()))
	}

	function a31(e) {
		a2o = bi.eZ, a3A(e, 1), a3L(a2m, a2n, !1), bM.a2s && (bM.a2s = !1, e.preventDefault())
	}

	function a32(e) {}

	function a33(e) {}

	function a34(e) {
		a39() || a3A(e, 0)
	}

	function a3L(fZ, fb, a3N) {
		a3I(), 0 === aE.a1O ? ab.click(fZ, fb) : (aW.a3J(fZ, fb), bh.a3J(), aS.a3K(), aT.nt = !1, aM.click(fZ, fb, a3N) ? bi.dq = !0 : aN.a2v(fZ, fb))
	}

	function a3I() {
		u.a3I()
	}

	function a2x(e) {
		var fZ, fb, deltaY;
		a39() || (a3A(e, 1), b1.z.a3B(b1.z.a2g), fZ = Math.floor(i.l * e.clientX), fb = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a2x(fZ, fb, deltaY), 0 === aE.a1O ? ab.a2x(fZ, fb, deltaY) : aW.a2x(fZ, fb,
			deltaY) || (aS.a3O(fZ, fb) ? aS.a2x(deltaY) && (bi.dq = !0) : aT.a2x(fZ, fb, deltaY)))
	}

	function a35(e) {
		a3A(e, 0)
	}

	function a3A(e, id) {
		0 === id && u.iE() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a2Y() && e.preventDefault()
	}

	function a36(e) {
		if (__fx.keybindHandler(e.key)) return;
		a39() || 0 < i.tH || (e = e.code) && e.length && (ba.ej(e, 18) ? at.a3Q(3) : ba.ej(e, 22) ? at.a3Q(0) : ba.ej(e, 20) ? at.a3Q(1) : ba.ej(e, 24) ? at.a3Q(2) : ba.ej(e, 10) ? aS.a3R(31 / 32) : ba.ej(e, 8) ? aS.a3R(32 / 31) : ba.ej(e, 6) ? aS
			.a3R(7 / 8) : ba.ej(e, 4) ? aS.a3R(8 / 7) : ba.ej(e, 14) ? 0 !== aE.a1O && aT.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ej(e, 16) ? 0 !== aE.a1O && aT.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ej(e, 0) ?
			aE.a1O && bW.ha(0) : ba.ej(e, 2) ? aE.a1O && bW.ha(1) : ba.ej(e, 30) ? aE.a1O && bW.ha(2) : ba.ej(e, 26) ? aE.a1O && bW.i8() : ba.ej(e, 28) && aE.a1O && bW.iD())
	}

	function a37(e) {
		if (!a39() && !(0 < i.tH || bi.eZ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a3S(1) || "Space" === code && u.a3S(0))) return bq.ez ? bq.v7.a3S(code) ? void 0 : void("Escape" === code && bM.fv()) : void(8 !== ab.a2Y() && ab.a3S(e) ? bi.dq = !0 : "Escape" === code ?
				bM.fv() : ba.ej(code, 18) ? at.a3T(3) : ba.ej(code, 22) ? at.a3T(0) : ba.ej(code, 20) ? at.a3T(1) : ba.ej(code, 24) ? at.a3T(2) : ba.ej(code, 12) ? bF.a3U(!aE.nr) : "Space" === code && aE.a1O && (aN.hc && aN.a3V(), aE.hb) &&
				bF.a3W(!1))
		}
	}

	function a38() {
		"hidden" !== document.visibilityState && (bi.dq = !0)
	}

	function a39() {
		return a2o + 15e3 > bi.eZ
	}

	function resize() {
		i.a3Y()
	}
	this.a2q = 0, this.a2r = "", this.a2s = !1, this.hX = 0, this.hY = 0, this.di = function() {
		a2t.addEventListener("mousedown", hf, {
			passive: !1
		}), a2t.addEventListener("mousemove", a2u, {
			passive: !1
		}), a2t.addEventListener("mouseup", a2v, {
			passive: !1
		}), a2t.addEventListener("click", click, {
			passive: !1
		}), a2t.addEventListener("mouseleave", a2w, {
			passive: !1
		}), a2t.addEventListener("wheel", a2x, {
			passive: !1
		}), a2t.addEventListener("touchstart", a2y, {
			passive: !1
		}), a2t.addEventListener("touchmove", a2z, {
			passive: !1
		}), a2t.addEventListener("touchend", a30, {
			passive: !1
		}), a2t.addEventListener("touchcancel", a31, {
			passive: !1
		}), a2t.addEventListener("dragover", a32), a2t.addEventListener("drop", a33), a2t.addEventListener("dblclick", a34), document.addEventListener("contextmenu", a35), document.addEventListener("keydown", a36), document.addEventListener(
			"keyup", a37), document.addEventListener("visibilitychange", a38), window.addEventListener("resize", resize)
	}, this.a3F = function(fZ, fb) {
		return !!bF.hf(fZ, fb) || !!(aW.hf(fZ, fb) || aT.hf(fZ, fb) || aS.hf(fZ, fb) || aO.hf(fZ, fb))
	}, this.a3X = a39, this.rn = function() {
		return !a2p || 0 < a2o
	}, this.fv = function() {
		if (!u.iE()) return 8 === ab.a2Y() ? aE.nr ? void bF.a3U(!1) : bh.iE ? void bh.a3V() : void aN.a3V() : void(7 !== ab.a2Y() && 6 === ab.a2Y() && aa.a3Z());
		u.a3S(2)
	}
}

function c2() {
	this.rL = new a3a, this.rT = new a3b, this.go = new a3c, this.sK = new a3d, this.zX = new a3e, this.a3f = new a3g, this.canvas = new a3h, this.color = new a3i, this.a3j = new a3k, this.di = function() {
		this.rL.x1()
	}
}

function a3b() {
	this.xw = function(h) {
		h.fill(0)
	}, this.a3l = function(h) {
		for (var fS = h.length, aC = 0; aC < fS; aC++) h[aC] = []
	}, this.a3m = function(a0U, a3n) {
		for (var a0V = bR.g2, aC = 0; aC < 3; aC++) a0V[aC] = a3n * a0U[aC];
		return a0V
	}, this.a3o = function(a0U, a0V, a3p) {
		for (var k2 = 0, aC = 0; aC < 3; aC++) k2 += Math.abs(a0U[aC] - a0V[aC]);
		return a3p <= k2
	}, this.a3q = function(a0U, a3r) {
		for (var aC = 0; aC < 3; aC++) a0U[aC] = bO.ia(a0U[aC] + a3r, 0, 255);
		return a0U
	}, this.a3s = function(h, tw, tx) {
		tx = tx || h.length - 1;
		for (var a3t = 0, aC = tw = tw || 0; aC <= tx; aC++) a3t += h[aC];
		return a3t
	}, this.a3u = function(h, a3v) {
		for (var aC, a3w, fS = h.length, a3x = [], fl = fS - 1; 0 <= fl; fl--) {
			for (aC = a3w = 0; aC < fS; aC++) a3v(h[aC]) < a3v(h[a3w]) && (a3w = aC);
			fS--, a3x.push(h[a3w]), h[a3w] = h[fS], h.pop()
		}
		return a3x
	}, this.min = function(h) {
		var aC, fu, fS = h.length;
		if (0 === fS) return 0;
		for (fu = h[0], aC = 1; aC < fS; aC++) fu = Math.min(fu, h[aC]);
		return fu
	}, this.max = function(h) {
		var fS = h.length;
		if (0 === fS) return 0;
		for (var fu = h[0], aC = 1; aC < fS; aC++) fu = Math.max(fu, h[aC]);
		return fu
	}, this.a3y = function(h, fu) {
		for (var fS = h.length, gv = 0, aC = 0; aC < fS; aC++) gv += h[aC] > fu;
		return gv
	}, this.a3z = function(a40, a41, min) {
		for (var fS = a41[0], aC = fS - 1; 0 <= aC; aC--) a40[aC] < min && (a40[aC] = a40[--fS]);
		a41[0] = fS
	}, this.a42 = function(h, fS, value) {
		for (var aC = 0; aC < fS; aC++) h[aC] -= value
	}, this.a43 = function(h) {
		for (var fS = h.length, aC = 0; aC < fS; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a44 = function(r2, h, a45) {
		h.fill(0);
		for (var u0 = r2.split(","), fS = Math.min(u0.length, h.length), aC = 0; aC < fS; aC++) h[aC] = Math.min(parseInt(u0[aC]), a45)
	}, this.a46 = function(r2, h, sH) {
		h.fill("");
		for (var u0 = r2.split('"'), fS = Math.min(u0.length, 2 * h.length), iK = 0, aC = 1; aC < fS; aC += 2) h[iK++] = u0[aC].slice(0, sH)
	}, this.a47 = function(h, gv) {
		if (0 === gv) h.fill(0);
		else {
			var a3t = this.a3s(h),
				fS = h.length;
			if (0 === a3t) h.fill(bO.ft(gv, fS));
			else
				for (var aC = 0; aC < fS; aC++) h[aC] = bO.ft(gv * h[aC], a3t);
			if (0 === (a3t = this.a3s(h))) h[1] = gv;
			else
				for (var iK = 0; a3t++ < gv;) h[iK = (iK + 1) % fS] && h[iK]++
		}
	}, this.a48 = function(h) {
		if (!h) return 0;
		var fS = h.length;
		if (0 === fS) return 0;
		for (var fu = h[fS - 1], aC = fS - 2; 0 <= aC; aC--)
			if (h[aC] !== fu) return aC + 2;
		return 1
	}, this.a49 = function(h) {
		for (var a3t = 0, aC = 0; aC < h.length; aC++) a3t += h[aC].length;
		return a3t
	}, this.a4A = function(a4B) {
		for (var h = [], aC = 0; aC < a4B.length; aC++) h = h.concat(a4B[aC]);
		return h
	}, this.has = function(h, fu) {
		for (var fS = h.length, aC = 0; aC < fS; aC++)
			if (h[aC] === fu) return !0;
		return !1
	}
}

function a3h() {
	this.a08 = function(a4C, eH, a4D) {
		var iO = a4C.height,
			a4E = bD.rL.xm(iO, iO),
			iU = bD.rL.getContext(a4E);
		return function(j, iU, a4D) {
			iU.fillStyle = a4D, iU.beginPath(), iU.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), iU.fill()
		}(iO, iU, a4D), iU.drawImage(a4C, -eH * iO, 0), a4E
	}, this.a4G = function(a4H) {
		var iU, iR, iO = a4H.height;
		return a4H.width === iO && (iR = (iU = bD.rL.getContext(a4H, !0)).getImageData(0, 0, iO, iO), bD.a3f.a4I(iR.data, iO, iO, .9), iU.putImageData(iR, 0, 0)), a4H
	}
}

function a3i() {
	this.a4J = function(fu) {
		return [fu >> 12 & 63, fu >> 6 & 63, 63 & fu]
	}, this.a4K = function(fu) {
		for (var h = this.a4J(fu), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a4L = function(fu) {
		fu = this.a4K(fu);
		return bD.color.oG(fu[0], fu[1], fu[2])
	}, this.a4M = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.oG = function(eG, u0, fm) {
		return "rgb(" + eG + "," + u0 + "," + fm + ")"
	}, this.oI = function(eG, u0, fm, fl) {
		return "rgba(" + eG + "," + u0 + "," + fm + "," + fl.toFixed(3) + ")"
	}, this.rp = function(ej) {
		for (var h = ej.split("(")[1].split(","), g1 = bR.g1, aC = 0; aC < 3; aC++) g1[aC] = parseInt(h[aC]);
		return 4 === h.length ? g1[3] = 255 * parseFloat(h[3].slice(0, -1)) : g1[3] = 255, g1
	}, this.rq = function(a4N, fV) {
		for (var h = a4N.slice(a4N.indexOf("(") + 1, a4N.indexOf(")")).split(","), g1 = bR.g1, aC = 0; aC < 3; aC++) g1[aC] = bO.ia(parseInt(h[aC].trim(), 10) + fV, 0, 255);
		return 3 === h.length ? this.oG(g1[0], g1[1], g1[2]) : (a4N = parseFloat(h[3].trim()), this.oI(g1[0], g1[1], g1[2], a4N = 0 === a4N ? .3 : a4N))
	}, this.vc = function(a4O, a4P) {
		for (var k2 = 0, aC = 0; aC < 3; aC++) k2 += Math.abs(a4P[aC] - a4O[aC]);
		if (!(240 <= k2))
			for (aC = 0; aC < 3; aC++) a4P[aC] = a4O[aC] + (a4O[aC] < 128 ? 80 : -80)
	}, this.a4Q = function(h) {
		for (var r2 = "#", aC = 0; aC < 3; aC++) {
			var eG = h[aC].toString(16);
			r2 += 1 === eG.length ? "0" + eG : eG
		}
		return r2
	}, this.a4R = function(r2) {
		var eG, u0;
		return r2.length < 7 ? bE.oF : (eG = parseInt(r2.slice(1, 3), 16), u0 = parseInt(r2.slice(3, 5), 16), r2 = parseInt(r2.slice(5, 7), 16), this.oG(eG, u0, r2))
	}
}

function a3e() {
	this.a4S = function(r2, font, maxWidth) {
		if (font && (vx.font = font), vx.measureText(r2).width <= maxWidth) return r2;
		for (var aC = r2.length - 1; 1 <= aC; aC--)
			if (r2 = r2.substring(0, aC), vx.measureText(r2 + "...").width <= maxWidth) return r2 + "...";
		return "..."
	}
}

function a3k() {
	var a4U = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4V = function(eZ) {
		var a4X, r2 = new Date(eZ.getTime() - 6e4 * eZ.getTimezoneOffset()).toUTCString();
		return r2.length < 12 || (r2 = r2.substring(5, r2.length), 0 === (eZ = eZ.getTimezoneOffset())) ? r2 : (a4X = (eZ < 0 ? "+" : "-") + bO.ft(Math.abs(eZ), 60), 0 == (eZ = Math.abs(eZ) % 60) ? r2 + a4X : r2 + a4X + ":" + (eZ < 10 ? "0" :
			"") + eZ)
	}, this.a4Y = function(eZ) {
		var r2 = eZ.toUTCString();
		return r2.length < 12 ? r2 : function(eZ) {
			return a4U[eZ.getUTCDay()]
		}(eZ) + ", " + r2.substring(5, r2.length - 4)
	}
}

function a3a() {
	var a4a = null;
	this.a0P = 0, this.x1 = function() {
		var fu = bm.eW.data[5].value;
		a4a = "px " + fu, "system-ui" !== fu && (a4a += ", system-ui"), this.a0P = iN(32, 32, ["a", "b", "m"], 200, a4a)
	}, this.xm = function(j, k) {
		var ej = document.createElement("canvas");
		return ej.width = j, ej.height = k, ej
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zX, j, k) {
		return zX.getImageData(0, 0, j, k)
	}, this.t9 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4a : 1 === type ? "bold " + size + a4a : 2 === type ? "lighter " + size + a4a : 3 === type ? "italic " + size + a4a : 4 === type ? "oblique " + size + a4a : 5 === type ? "small-caps " +
			size + a4a : "small-caps bold " + size + a4a
	}, this.textAlign = function(iU, id) {
		iU.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iU, id) {
		iU.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.rV = function(e, code, color) {
		color = this.rU(bf.tB) + " solid " + (color || bE.oO);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.u2 = function(e, fZ, fb, j, k) {
		e = e.style;
		e.left = this.u3(fZ), e.top = this.u3(fb), e.width = this.u3(j), e.height = this.u3(k)
	}, this.rM = function(fu) {
		return 1 + fu * a1.a2.ib()
	}, this.sd = function(o0, h1) {
		return o0 * this.rM(void 0 === h1 ? .5 : h1) * i.ic / i.l
	}, this.u1 = function(o0, h1) {
		return o0 * this.rM(void 0 === h1 ? .5 : h1) * i.ic
	}, this.th = function(o0, h1, a4b) {
		return this.rM(h1) * Math.min(o0 * i.ic, a4b * i.j) / i.l
	}, this.rU = function(fu) {
		return fu.toFixed(1) + "px"
	}, this.u3 = function(fu) {
		return this.vN(fu).toFixed(1) + "px"
	}, this.vN = function(fu) {
		return fu / i.l
	}, this.a4d = function(a4e) {
		for (var r2 = "<ul>", fS = a4e.length, aC = 0; aC < fS; aC++) r2 += "<li>" + a4e[aC][0] + ": <a href='" + a4e[aC][1] + "' target='_blank'>" + a4e[aC][0] + "</a></li>";
		return r2 += "</ul>"
	}, this.a4f = function(a4g) {
		return "<a href='" + a4g + "' target='_blank'>" + a4g + "</a>"
	}, this.a4h = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.va = function(e) {
		var ea = e.textContent;
		bD.sK.a4i(ea, "✔") || (1 === ea.length ? e.textContent = "✔" : e.textContent = ea + " ✔", setTimeout(function() {
			e.textContent = ea
		}, 500))
	}, this.measureText = function(r2) {
		return vx.measureText(r2).width
	}, this.ts = function(a4j) {
		a4j.style.overflowX = "auto", a4j.style.overflowY = "hidden", a4j.style.whiteSpace = "nowrap", a4j.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.u5 = this.scrollLeft, e.preventDefault())
		}), a4j.addEventListener("scroll", function() {
			this.u5 = this.scrollLeft
		})
	}
}

function a3c() {
	this.hd = function(a2R) {
		return 0 === a2R ? 1 === aE.a1O && aE.hq : 1 === a2R ? 1 === aE.a1O && !aE.hq : 2 === aE.a1O
	}, this.he = function(player) {
		return 0 !== ah.nN[player] && 2 !== ah.a4k[player]
	}, this.a4l = function(player) {
		return player === aE.fC && 2 !== ah.a4k[player]
	}, this.lR = function(player, jw) {
		return player !== jw && (0 === bj.fQ[player] || bj.fQ[player] !== bj.fQ[jw])
	}, this.mY = function() {
		return am.lJ < 2 ? 0 : aE.iM ? 1 < bk.a4m() : ah.hG[mO[1]]
	}, this.a4n = function() {
		var lJ = am.lJ;
		if (0 !== lJ) {
			if (!aE.iM) return !this.kA(mO[0]);
			for (var fQ = bj.fQ, lL = bk.lM(), lO = am.lO, aC = lJ - 1; 0 <= aC; aC--) {
				var h0 = lO[aC];
				if (fQ[h0] === lL && !this.kA(h0)) return 1
			}
		}
		return 0
	}, this.a4o = function(player) {
		return player === aE.fC
	}, this.a4p = function(jw, o0) {
		return ah.hU[aE.fC] < o0 * ah.hU[jw]
	}, this.kA = function(player) {
		return player >= aE.kn || 2 === ah.a4k[player]
	}, this.ll = function(player) {
		return 0 !== ah.nN[player]
	}, this.a1E = function(player) {
		return player < aE.kn
	}, this.qi = function(a4q, a4r) {
		return a4q !== a4r
	}, this.gr = function(player, fu) {
		var min;
		return fu = this.a4s(player, fu), ah.hU[player] += fu, ah.a4t[player] && (min = Math.min(ah.a4t[player], ah.hU[player]), ah.a4t[player] -= min, ah.hU[player] -= min), fu
	}, this.a4s = function(player, fu) {
		var a4u = ah.hU[player];
		return fu = Math.min(fu, ah.hG[player] * aE.a4v - a4u), fu = Math.min(fu, aE.a4w - a4u), Math.max(fu, 0)
	}, this.mv = function(player, j5, a4x, a4y) {
		var a4u = ah.hU[player],
			j5 = bO.ft(a4u * (j5 + 1), 1024),
			a4x = bO.ft(a4x * a4u, 1024),
			j5 = Math.min(j5, a4u - a4x);
		return 10 === aE.l5 && (j5 = b5.a50(player, j5)), bR.fz[0] = j5, bR.fz[1] = a4x, a4y <= j5
	}, this.qC = function(player, pu, pt) {
		var player = ah.hU[player],
			a4z = bO.ft(64 * player, 1024);
		return pu = Math.min(pu, player - a4z), pu = this.a4s(pt, pu), bR.fz[0] = pu, bR.fz[1] = a4z, 1 <= pu
	}, this.a51 = function(player, pu, pt) {
		var player = ah.hU[player],
			a4z = bO.ft(64 * player, 1024);
		return pu = Math.min(pu, player - a4z), this.a4s(pt, pu)
	}, this.qE = function(pu, pt) {
		return pu = this.a4s(pt, pu), bR.fz[0] = pu, bR.fz[1] = 0, 1 <= pu
	}, this.j4 = function(player, a52) {
		return bO.ft(ah.hU[player] * (a52 + 1), 1024)
	}, this.a53 = function(player, a4x) {
		a4x = bO.ft(a4x * ah.hU[player], 1024);
		bR.fz[1] = a4x, ah.hU[player] -= a4x
	}, this.gp = function(player, a54) {
		var gD, gF, fm = ah.hU[player];
		return a54 <= fm ? ah.hU[player] -= a54 : (ah.hU[player] = 0, gF = ah.a4t[player] + (gD = 5 * ((fm = a54 - fm) >> 2)), bg.gs(player, gD - fm, 12), gF <= aE.a55 ? ah.a4t[player] = gF : (ah.a4t[player] = aE.a55, bg.gs(player, gF - aE.a55,
			18))), a54
	}, this.lz = function(player, j5) {
		var hU = ah.hU,
			a4u = hU[player],
			j5 = bO.ft(a4u * (j5 + 1), 1024),
			a4z = Math.max(bO.ft(a4u, 10), 1e3);
		return (j5 = Math.min(j5, a4u - a4z)) < 0 ? (hU[player] = 0, a4z = Math.min(1e3, a4u + aE.a55 - ah.a4t[player]), bR.fz[1] = a4z, ah.a4t[player] += a4z - a4u, 0) : (bR.fz[1] = a4z, 10 === aE.l5 && (j5 = b5.a50(player, j5)), hU[player] -=
			a4z + j5, j5)
	}, this.mx = function(player) {
		ah.hU[player] -= bR.fz[0] + bR.fz[1]
	}, this.qj = function(player, jw) {
		return (jw = Math.min(jw, aE.fP)) < aE.fP && 0 === ah.nN[jw] && (jw = aE.fP), (bR.fO[0] = jw) === aE.fP || bv.fL(player, jw)
	}, this.qm = function(player, pt) {
		return 0 !== ah.nN[pt] && !bv.fL(player, pt)
	}, this.a56 = function(player, a57) {
		for (var h0, fS = am.lJ, a58 = 0, a59 = mO, aC = 0; aC < fS; aC++)
			if (h0 = a59[aC], !this.kA(h0)) {
				if (player === h0) return !0;
				if (++a58 > a57) return !1
			} return !1
	}, this.mK = function(h0) {
		var a5A = aE.iM ? bk.lK() : ah.hG[mO[0]];
		return a5A >= bO.ft(h0 * aE.kX, 100)
	}, this.a5B = function(fu, min, max) {
		return Math.floor(bO.ia(isNaN(fu) ? 0 : Number(fu), min, max))
	}
}

function a3g() {
	this.a5C = function(canvas, a5D, a5E) {
		var j = canvas.width,
			k = canvas.height,
			ej = bD.rL.xm(j, k),
			iU = bD.rL.getContext(ej, !0),
			canvas = (iU.drawImage(canvas, 0, 0), iU.getImageData(0, 0, j, k));
		return a5D(canvas.data, j, k, a5E), iU.putImageData(canvas, 0, 0), ej
	}, this.a5F = function(xx, j, k) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				xx[3 + aC] = xx[aC], xx[aC] = xx[1 + aC] = xx[2 + aC] = 255
			}
	}, this.a5G = function(xx, j, k) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				xx[1 + aC] > xx[2 + aC] + 10 && (xx[3 + aC] = xx[aC], xx[1 + aC] = xx[2 + aC])
			}
	}, this.a5H = function(xx, j, k, a5E) {
		for (var gap = Math.floor(Math.min(j, k) * a5E), fZ = 0; fZ < j; fZ++)
			for (var aC, fb = 0; fb < k; fb++)(fZ < gap || fb < gap || j - gap <= fZ || k - gap <= fb) && (xx[3 + (aC = 4 * (fZ + fb * j))] = 255 - 255 * (xx[1 + aC] - xx[aC]) / (255 - xx[aC]))
	}, this.a5I = function(xx, j, k, a5E) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				xx[aC] = a5E[0], xx[1 + aC] = a5E[1], xx[2 + aC] = a5E[2]
			}
	}, this.a5J = function(xx, j, k, a5E) {
		for (var gap = Math.floor(j * a5E), fZ = 0; fZ < j; fZ++)
			for (var aC, fb = 0; fb < k; fb++)(fZ < gap || fb < gap || j - gap <= fZ || k - gap <= fb) && (xx[aC = 4 * (fZ + fb * j)] = xx[1 + aC] = xx[2 + aC] = 0)
	}, this.a5K = function(xx, j, k) {
		for (var fb, aC, fZ = j - 1; 0 <= fZ; fZ--)
			for (fb = k - 1; 0 <= fb; fb--) 200 < xx[1 + (aC = 4 * (fZ + fb * j))] && xx[1 + aC] - 20 > xx[aC] && xx[1 + aC] - 20 > xx[2 + aC] ? xx[aC] + xx[2 + aC] < 40 ? xx[3 + aC] = 0 : (xx[3 + aC] = xx[aC], xx[aC] = 255, xx[1 + aC] = 255, xx[
				2 + aC] = 255) : xx[aC] < 50 && xx[1 + aC] < 50 && xx[2 + aC] < 50 && (xx[aC] + xx[1 + aC] + xx[2 + aC] < 50 ? xx[3 + aC] = 180 : xx[3 + aC] = 180 + Math.floor(75 * (xx[aC] + xx[1 + aC] + xx[2 + aC] - 50) / 100))
	}, this.a5L = function(xx, j, k) {
		for (var fb, aC, fZ = j - 1; 0 <= fZ; fZ--)
			for (fb = k - 1; 0 <= fb; fb--) xx[1 + (aC = 4 * (fZ + fb * j))] > xx[aC] + 20 && xx[1 + aC] > xx[2 + aC] + 20 && xx[aC] + xx[2] < 40 && (xx[3 + aC] = 255 - xx[1 + aC], xx[aC] = xx[1 + aC] = xx[2 + aC] = xx[aC])
	}, this.a4I = function(xx, j, k, a5E) {
		for (var eG = j >> 1, fZ = 0; fZ < j; fZ++)
			for (var fb = 0; fb < k; fb++) Math.sqrt((fZ - eG) * (fZ - eG) + (fb - eG) * (fb - eG)) > a5E * eG && (xx[4 * (fZ + fb * j) + 3] = 0)
	}
}

function a3d() {
	var a5M = {
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
		a5N = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.sL = function(el) {
		return el.replace(a5N, function(match) {
			return a5M[match] || match
		})
	}, this.a0f = function(fu) {
		var aC, a5O, a5P, a5Q, a5R;
		if (fu < 0) return "-" + this.a0f(Math.abs(fu));
		if (fu < 1e3) return fu.toString();
		for (a5O = Math.floor(Math.log(fu + .5) / Math.log(10)) + 1, a5P = Math.floor((a5O - 1) / 3), a5R = (a5Q = fu.toString()).substring(a5O - 3, a5O), aC = 1; aC < a5P; aC++) a5R = a5Q.substring(a5O - 3 * (aC + 1), a5O - 3 * aC) + " " + a5R;
		return a5Q.substring(0, a5O - 3 * a5P) + " " + a5R
	}, this.a5S = function(h0, a5O) {
		return h0.toFixed(a5O) + "%"
	}, this.a5T = function(fu, a5U) {
		return fu.toFixed(bO.ia(Math.floor((void 0 === a5U ? 3 : a5U) - Math.log10(Math.max(fu, 1))), 0, 8))
	}, this.a5V = function(fu, o0, a5O) {
		return (fu * o0).toFixed(a5O)
	}, this.a27 = function(username) {
		var fW, fH = username.indexOf("[");
		return !(fH < 0) && 1 < (fW = username.indexOf("]")) - fH && fW - fH <= 8 ? username.substring(fH + 1, fW).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a27;
	this.a5W = function(r2) {
		for (var fl = Math.floor(.5 * r2.length + .5), o6 = Math.floor(.5 * (fl - 1)), aC = 0; aC < o6; aC++)
			for (var fm = -1; fm < 2; fm += 2) {
				var ej = fl + fm * aC;
				if (" " === r2[ej]) return [this.a23(r2.substring(0, ej)), this.a5X(r2.substring(ej))]
			}
		return [r2.substring(0, fl), r2.substring(fl)]
	}, this.a5X = function(r2) {
		for (var fS = r2.length, aC = 0; aC < fS; aC++)
			if (" " !== r2[aC]) return r2.substring(aC);
		return r2
	}, this.a23 = function(r2) {
		for (var aC = r2.length - 1; 0 <= aC; aC--)
			if (" " !== r2[aC]) return r2.substring(0, aC + 1);
		return r2
	}, this.a5Y = function(r2, a5Z) {
		return r2.split("(")[0] + "(🧈 " + a5Z.toFixed(2) + ")"
	}, this.startsWith = function(r2, a5a) {
		return r2.substring(0, a5a.length) === a5a
	}, this.a4i = function(r2, a5a) {
		var fS = r2.length;
		return r2.substring(fS - a5a.length, fS) === a5a
	}, this.a5b = function(h, a5c, a5d) {
		var r2 = "",
			fS = h.length - 1;
		a5d = a5d || "";
		for (var aC = 0; aC < fS; aC++) r2 += a5d + h[aC] + a5d + ",", (aC + 1) % a5c == 0 && (r2 += "\n");
		return r2 += a5d + h[fS] + a5d
	}, this.a5e = function(r2, a0U, a0V) {
		return r2.replace(new RegExp(a0U, "g"), a0V)
	}
}

function a5f() {
	this.ei = function(player, fE) {
		aJ.zH(player, bP.fa(fE), bP.fc(fE)) && (bi.dq = !0), aE.l7 && this.ee()
	}, this.ee = function() {
		aE.hq = !1;
		for (var aC = 0; aC < aE.kn; aC++) 0 !== ah.nN[aC] && 0 === ah.hG[aC] && aJ.zO(aC);
		0 !== ah.nN[aE.fC] ? (bg.nJ[7] = ah.hG[aE.fC], bg.nJ[8] = ah.hU[aE.fC], aS.a5g(), aX.a5h(), aE.hb || aI.ni(ah.jL[aE.fC] - 5, ah.jN[aE.fC] - 5, ah.jM[aE.fC] + 5, ah.jO[aE.fC] + 5), aw.di()) : aY.show(!1, !1, !1, !0), aO.a5i(18), ag.a5j(),
			ag.n9(!0), bS.z.a5k(), aM.sb(), aE.qh = null, be.a5l = !0, be.a5m(), aE.l7 && a1.a2.setState(1)
	}
}

function c4() {
	this.fP = 512, this.a4w = 15e8, this.a5n = 1e9, this.a55 = 5e4, this.a5o = 512, this.gm = 2, this.fC = 0, this.kn = 0, this.a1R = 0, this.l9 = 0, this.a1Q = 0, this.yS = 512, this.yX = 512, this.a4v = 150, this.l7 = !0, this.hb = 0, this.a1O = 0,
		this.kX = 0, this.nr = !1, this.hq = 0, this.a5p = 0, this.iM = !1, this.yZ = 0, this.ya = 0, this.l5 = 0, this.zp = 0, this.qh = null, this.a1h = new zd, this.a5q = 30, this.a1L = 0, this.a1T = 0, this.a1g = 0, this.a1G = 0, this.data =
		new a5r, this.a5s = new a5t, this.a5u = 0, this.a5v = "", this.a5w = function() {
			bR.di(), bU.di(), bt.clear(), this.a1R = this.kn = this.data.humanCount, this.l7 = 1 === this.a1R, this.nr = !1, this.hb = this.data.isReplay, this.l5 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zp = this.data.isContest, this.iM = this.l5 < 7 || 9 === this.l5, this.l5 = 10 === this.l5 && this.l7 ? 7 : this.l5, this.l5 = 8 === this.l5 && 2 !== this.kn ? 7 : this.l5, b0.di(),
				this.yZ = this.data.numberTeams, this.data.teamPlayerCount ? this.ya = +(0 < this.data.teamPlayerCount[0]) : (this.ya = 0, this.iM && this.l7 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yZ + 1), aE.a5s.a5x())), this.a5q = this.kn <= 2 ? 30 : this.kn <= 50 ? 40 : 50, this.a5p = this.hq = this.data.selectableSpawn, this.qh = this.hq ? new a5f : null, 1 === m.dz ? this.yS = this.kn : this.yS = this.data
				.playerCount, this.yX = this.yS, this.l9 = this.yS - this.kn, this.a1Q = 0, this.fC = this.data.selectedPlayer, this.a1L = 0, this.a1T = 0, this.a1g = 0, this.a1G = 0, az.a5y(this.data.spawningSeed), af.di(), ah.di(), ao.di(), aj
				.a5z(), bB.pj.qV = [], bB.hs.pm = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.di(), this.a1O = 1, bg.di(), a60(), ad.dj(), aq.a61(), be.di(), ad
				.di(), au.di(), bP.di(), bQ.di(), ap.di(), bY.a62(), aF.di(), aj.a8(), aJ.di(), aK.di(), am.a63(), bC.di(), bk.di(), bS.di(), bh.di(), a64.putImageData(a65, 0, 0), aW.di(), aT.di(), aS.di(), bF.di(), ax.di(), aV.di(), aX.di(), aN
			.di(), aR.di(), aO.di(), aQ.di(), aM.di(), aY.di(), aG.di(), aH.di(), gV(), ae.di(), ag.di(), b5.di(), b6.di(), b2.di(), b8.di(), b9.di(), this.a1h.di(), bi.a62(), aI.nh(), 0 === ah.nN[aE.fC] && aY.show(!1, !0), ag.n9(!0), aw.di(), bi
				.dq = !0, this.hb || this.l7 && this.hq || a1.a2.setState(1), this.a5u = 0
		}, this.a2l = function(eY) {
			bC.qf.a67.length ? this.a5v = bC.qf.a67 : (this.a5v = bC.a68.a0q(), __fx.replayHistory.save(this.a5v)), b1.z.a69(), bt.clear(), this.a1O = 0, bi.a6A(), a1.a2.setState(0), ab.setState(0), bX.eP.show(eY), 2 === this.a5u ? u.z.a6B(0) : 1 ===
				this.a5u ? u.v(19) : u.v(5, 5)
		}, this.a6C = function() {
			return this.hb ? aN.hc || !bF.a6D : this.l7 && (aN.hc || this.hq)
		}, this.a6E = function() {
			return 1 === this.a1O && !this.hq
		}
}

function a5r() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a6F = null
}

function a5t() {
	this.a5x = function() {
		var a6G = aE.data;
		bD.rT.a47(a6G.teamPlayerCount, a6G.playerCount), a6G.numberTeams = bD.rT.a3y(a6G.teamPlayerCount, 0), a6G.teamPlayerCount[0] && a6G.teamPlayerCount[7] && (a6G.teamPlayerCount[7] = 0, this.a5x())
	}, this.a6H = function() {
		var a6G = aE.data;
		a6G.mapType < 2 ? bV.a8(bV.a6I(a6G), a6G.mapSeed) : bV.a6J(a6G.canvas)
	}, this.a6K = function() {
		var a6G = aE.data;
		a6G.colorsData || (a6G.colorsData = new Uint32Array(1)), 0 === a6G.gameMode && (a6G.colorsData[0] = bm.z.wz()), a6G.selectableName && (a6G.playerNamesData || (a6G.playerNamesData = new Array(1)), a6G.playerNamesData[0] = bm.eW.data[122]
			.value), a6G.a6F = new Uint32Array(1), a6G.a6F[0] = bJ.te.xc(bm.eW.data[105].value, 5)
	}, this.a6L = function() {
		aE.data = new a5r
	}
}

function de() {
	var a6M = [];
	this.qF = function(player, pt, a6N, a6O) {
		player === aE.fC || pt === aE.fC || !a6O && bD.go.kA(player) || bD.go.kA(pt) || this.zq(ah.zr[player] + " supported " + ah.zr[pt] + " with " + bD.sK.a0f(a6N) + " ressource" + (1 === a6N ? "." : "s."))
	}, this.zq = function(r2, q4) {
		r2 = {
			eZ: aX.a6Q(),
			r2: r2,
			q4: q4
		};
		a6M.push(r2), 30 === u.tc && u.a2c().zq(r2)
	}, this.clear = function() {
		a6M = [];
		var u0 = u.a6R(30);
		u0 && u0.clear()
	}, this.a6S = function() {
		return a6M
	}
}

function dY() {
	this.a0M = 0, this.gap = 0, this.tB = 0, this.rR = 0, this.di = function() {
		this.resize()
	}, this.resize = function() {
		this.a0M = .0022 * bD.rL.rM(.5) * i.ic, this.tB = this.a0M / i.l, this.gap = Math.max(Math.floor((a1.a2.ib() ? .0114 : .01296) * i.ic), 2), this.rR = this.gap / i.l
	}
}

function dX() {
	this.a6T = function() {
		return a1.a2.ib() ? 2 : 1
	}
}

function cF() {
	var ru, fZ, fb, a6U, a6V, a6W, eZ, a6X, a6Y, a6Z, a6a, gap, zoom, qO, a6b;

	function a6p(m2, m3, f6) {
		ad.fN(f6) || -1 === (m2 = bQ.lc.a6y(m2, m3)) ? aO.a6x(f6) : aO.a6z(m2)
	}

	function a6l(a6X) {
		for (var aC = qO.length - 1; 0 <= aC; aC--)
			if (qO[aC] === a6X) return 1
	}

	function a6j(a6g) {
		var aC, fS;
		if (-1 !== a6g)
			for (fS = ru.length, aC = 0; aC < fS; aC++)
				if (ru[aC].iE && ru[aC].fZ + 1 === a6g % 4 && ru[aC].fb + 1 === a6g >> 2) return aC;
		return -1
	}

	function a6h(m2, m3) {
		var u0 = gap / 2;
		return m2 < fZ - a6U - 3 * u0 || fZ + 3 * a6U + 5 * u0 < m2 || m3 < fb - a6U - 3 * u0 || fb + 2 * a6U + 3 * u0 < m3 ? -1 : 4 * (m3 < fb - u0 ? 0 : m3 < fb + a6U + u0 ? 1 : 2) + (m2 < fZ - u0 ? 0 : m2 < fZ + a6U + u0 ? 1 : m2 < fZ + 2 * a6U +
			3 * u0 ? 2 : 3)
	}
	this.a6c = function() {
		var aC, fm, a6f = [bE.op, bE.p3, bE.oM, bE.pQ, bE.pG];
		for (ru = new Array(10), aC = 0; aC < 10; aC++) ru[aC] = {
			id: aC,
			iE: !1,
			lk: 0,
			canvas: [],
			fZ: 0,
			fb: 0
		};
		for (ru[0].colors = [0, 1, 2, 3], ru[0].fZ = 0, ru[0].fb = 0, ru[1].colors = [1, 4], ru[1].fZ = 1, ru[1].fb = 0, ru[2].colors = [0, 1], ru[2].fZ = -1, ru[2].fb = 0, ru[3].colors = [0], ru[3].fZ = 0, ru[3].fb = 0, ru[4].colors = [0, 2],
			ru[4].fZ = 1, ru[4].fb = 1, ru[5].colors = [3], ru[5].fZ = 0, ru[5].fb = -1, ru[6].id = 20, ru[6].colors = [0], ru[6].fZ = 1, ru[6].fb = -1, ru[7].id = 21, ru[7].colors = [0], ru[7].fZ = 0, ru[7].fb = 1, ru[8].id = 16, ru[8]
			.colors = [0], ru[8].fZ = 0, ru[8].fb = 0, ru[9].id = 10, ru[9].colors = [4], ru[9].fZ = 2, ru[9].fb = 0, aC = 0; aC < 10; aC++)
			for (fm = 0; fm < ru[aC].colors.length; fm++) ru[aC].canvas.push(function(id, a4D) {
				if (id < 20) return bD.canvas.a08(ac.get(3), id, a4D);
				var a4D = ac.get(3).height,
					a4E = bD.rL.xm(a4D, a4D),
					iU = bD.rL.getContext(a4E);
				20 === id ? iU.drawImage(ac.get(18), 0, 0) : 21 === id && ak.xx.a0N(ak.sa.a0C + ak.sa.a0T, iU, 0, 0, a4D);
				return a4E
			}(ru[aC].id, a6f[ru[aC].colors[fm]]))
	}, this.a6e = function() {
		return ru
	}, this.di = function() {
		qO = [], fZ = fb = eZ = 0, a6V = a6W = -1e3, this.resize()
	}, this.resize = function() {
		a6U = Math.floor((a1.a2.ib() ? .075 : .0468) * i.ic), zoom = a6U / ac.get(3).height, gap = Math.floor(a6U / 3)
	}, this.a3E = function(m2, m3) {
		return !!this.iE() && (bi.dq = !0, !!ak.xx.hf(m2, m3, a6Y) || (m2 = function(m2, m3) {
			a6W = a6V = -1e3;
			var a6i = a6j(a6h(m2, m3));
			if (-1 === a6i) return 0;
			if (1 !== ru[a6i].colors[ru[a6i].lk])
				if (5 === a6i) {
					if (! function() {
							var ea = performance.now();
							a6b + 4e3 < ea && (qO = []);
							a6b = ea
						}(), a6l(a6X)) return 1;
					qO.push(a6X), 16 < qO.length && qO.shift()
				} else if (6 === a6i) {
				for (var aC = qO.length - 1; 0 <= aC; aC--) 0 === ah.nN[qO[aC]] && qO.splice(aC, 1);
				0 < qO.length && (b6.a6m(1, qO, !0) && bB.go.qN(qO, a6X), qO = [])
			} else if (2 === a6i) ao.i6(a6X) && bB.hs.ps(aS.hw(), a6X);
			else if (3 === a6i) aE.hq && bB.hs.ht(a6Z);
			else if (0 === a6i)
				if (0 === ru[0].lk) {
					if (aE.a5p && aX.a6Q() < 350) return 1;
					bY.a6n(4), bB.hs.hz(aS.hw(), a6X)
				} else b2.i0(a6X, aS.hw());
			else if (1 === a6i) bB.hs.i4(aS.hw(), a6Z);
			else if (9 === a6i) bB.hs.i7(aS.hw());
			else {
				if (7 === a6i) return bY.a6n(0), ak.xx.show(m2, m3), 2;
				if (4 === a6i) b6.a6m(0, [a6X], !0) && bB.go.qK(a6X);
				else {
					if (8 !== a6i) return 0;
					bB.hs.hv(aS.hw(), a6a, a6X)
				}
			}
			return 1
		}(m2, m3), this.sb(), 2 === m2 && (ak.xx.iE = !0), 0 < m2))
	}, this.a3G = function(m2, m3) {
		this.iE() || (a6V = m2, a6W = m3, eZ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hi(mouseX),
			coordY = bP.hk(mouseY),
			point = bP.fI(bP.fp(coordX, coordY));
		bP.hl(coordX, coordY) && a6p(mouseX, mouseY, point)
	}, this.click = function(m2, m3, a3N) {
		var hh = bP.hi(m2),
			hj = bP.hk(m3),
			fE = bP.fp(hh, hj),
			f6 = bP.fI(fE),
			a6o = (a1.a2.ib() ? .025 : .0144) * i.ic,
			ea = performance.now();
		return !(Math.abs(m2 - a6V) > a6o || Math.abs(m3 - a6W) > a6o || eZ + 500 < ea || (eZ = ea, bM.rn() && (bM.hX = m2, bM.hY = m3, b8.ee(1), b9.ee(1)), !bP.hl(hh, hj))) && (a3N ? (a6p(m2, m3, f6), !1) : aN.hc || this.iE() || !bD.go.he(aE
			.fC) || aE.hb ? (this.sb(), !1) : (aE.hq ? 0 <= (a6Z = bu.hr(fE)) && (ru[3].iE = !0) : 2 === aE.a1O ? ad.h2(f6) && (a6X = ad.fK(f6), bD.go.kA(a6X) || (ru[0].iE = !0, ru[0].lk = 1, ru[7].iE = !0)) : (bQ.i5.i6(aE.fC, fE) && (ru[0]
					.iE = !0, ru[0].lk = 1, ru[1].iE = !0, ru[1].lk = 0, ru[9].iE = !0, ru[9].lk = 0), bQ.i2.i3(aE.fC, fE) && (ru[0].iE = !0, ru[0].lk = 1, ru[1].iE = !0, ru[1].lk = 1, a6Z = bR.g4[7]), ad.fX(f6) ? (a6a = an.f3.f5(f6)) &&
				(a6o = bP.fI(a6a), ru[8].iE = !0, a6X = ad.fJ(a6o) ? aE.fP : ad.fK(a6o)) : (ad.zM(aE.fC, f6) && (a6Y = aE.fC, ru[0].iE = !0, ru[0].lk = 1, ru[7].iE = !0), -1 !== (ea = bu.hx(fE)) && (ad.fJ(ea << 2) ? (a6X = aE.fP, bv.hy(aE
					.fC) ? (ru[0].iE = !0, ru[0].lk = 0) : ae.gZ(aE.fC) && (ru[0].iE = !0, ru[0].lk = 3)) : (a6X = ad.fK(ea << 2), ru[0].lk = 1, ru[5].iE = function(a6X) {
					return !bD.go.kA(a6X) && !a6l(a6X) && b6.a6m(1, [a6X], !1)
				}(a6X), ru[7].iE || bD.go.kA(a6X) || (a6Y = a6X, ru[7].iE = !0), ru[4].iE = !bD.go.kA(a6X) && !ag.a6t(a6X) && b6.a6m(0, [a6X], !1), ru[6].iE = function(a6X) {
					if (0 === qO.length) return !1;
					if (performance.now() > a6b + 4e3) return !(qO = []);
					return !a6l(a6X) && ! function(a6X) {
						var aC;
						if (aE.iM)
							for (aC = qO.length - 1; 0 <= aC; aC--)
								if (!bv.fL(a6X, qO[aC])) return 1;
						return
					}(a6X)
				}(a6X), bv.fL(a6X, aE.fC) ? (bv.i1(aE.fC, a6X) ? (ru[0].lk = 0, ru[0].iE = !0) : ae.gZ(aE.fC) && (ru[0].lk = 3, ru[0].iE = !0), ru[0].iE = this.a6v()) : (ru[2].iE = !0, ao.i6(a6X) ? ru[2].lk = 0 : ru[2].lk = 1,
					ru[0].iE = !0))))), this.a6q(m2, m3)))
	}, this.a6q = function(m2, m3) {
		return fZ = m2 - Math.floor(a6U / 2), fb = m3 - Math.floor(a6U / 2), !!this.iE()
	}, this.a2u = function(m2, m3) {
		return !!this.iE() && (ak.xx.iE ? !ak.xx.a0L(m2, m3) && (ak.xx.iE = !1, bi.dq = !0) : function(su, m2, m3) {
			m2 = a6h(m2, m3);
			if (0 <= a6j(m2)) return !1;
			if ((1 === m2 || 6 === m2) && 0 <= a6j(2)) return !1;
			if ((6 === m2 || 9 === m2) && 0 <= a6j(10)) return !1;
			return su.sb(), bi.dq = !0
		}(this, m2, m3))
	}, this.sb = function() {
		for (var aC = ru.length - 1; 0 <= aC; aC--) ru[aC].iE = !1, ru[aC].lk = 0;
		ak.xx.iE = !1
	}, this.iE = function() {
		return this.a6v() || ak.xx.iE
	}, this.a6v = function() {
		for (var fS = ru.length, aC = 0; aC < fS; aC++)
			if (ru[aC].iE) return !0;
		return !1
	}, this.vw = function() {
		if (this.iE())
			if (ak.xx.iE) ak.xx.vw();
			else {
				var aC, iU = vx,
					fm = ru,
					fS = fm.length,
					a73 = (a6U + gap) / zoom;
				for (iU.imageSmoothingEnabled = !0, iU.setTransform(zoom, 0, 0, zoom, fZ, fb), aC = 0; aC < fS; aC++) fm[aC].iE && vx.drawImage(fm[aC].canvas[fm[aC].lk], fm[aC].fZ * a73, fm[aC].fb * a73);
				iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cG() {
	var k, canvas, a74, a75, a76, a77 = -1;

	function a78() {
		var a79, zX = canvas.getContext("2d", {
			alpha: !0
		});
		zX.clearRect(0, 0, k, k), zX.fillStyle = bE.oK, zX.fillRect(0, 0, k, k), 9 === a75 && (zX.fillStyle = bE.oP, zX.fillRect(0, 0, k, k)), zX.fillStyle = bE.oO, zX.fillRect(0, 0, k, 1), zX.fillRect(0, 0, 1, k), zX.fillRect(0, k - 1, k, 1), zX
			.fillRect(k - 1, 0, 1, k), a79 = .9 * k / ac.get(0).width, zX.imageSmoothingEnabled = !0, zX.setTransform(a79, 0, 0, a79, Math.floor((k - a79 * ac.get(0).width) / 2), Math.floor((k - a79 * ac.get(0).height) / 2)), zX.drawImage(ac.get(0),
				0, 0), zX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7C(m2, m3) {
		if (!aN.hc) return m2 <= k + bf.gap && m3 >= aS.fb ? 9 : -1;
		if (m2 <= 4 * k + bf.gap) {
			if (m3 >= aS.fb) return 0;
			if (m3 >= aS.fb - k - a76 * bf.gap) return 2
		} else if (m2 <= 7 * k + bf.gap && m3 >= aS.fb - k - a76 * bf.gap) return 1;
		return -1
	}
	this.hc = !1, this.di = function() {
		a75 = -1, this.hc = !1, a76 = a1.a2.ib() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a74 = bD.rL.t9(1, (a1.a2.ib() ? .5 : .45) * k), a78()
	}, this.a7A = function() {
		return !(1 !== aE.a1O || aE.hq || (aE.hb ? !bF.a6D : this.hc && aE.l7))
	}, this.a3V = function() {
		this.hc = !this.hc, this.hc ? (bF.a3U(!1), aE.hb && bF.a6D && bF.a3W(!0), this.a7B(), 9 === a75 && (a75 = 0)) : (a75 = -1, a78(), !aE.l7 || 1 !== aE.a1O || aE.hq || aE.hb || a1.a2.setState(1)), bi.dq = !0
	}, this.a7B = function() {
		(aE.l7 || aE.hb) && 1 === aE.a1O && (aW.n9(!0), aE.hq || setTimeout(function() {
			be.a1a()
		}, 0), a1.a2.setState(0))
	}, this.hf = function(m2, m3) {
		return 0 <= (a77 = a7C(m2, m3)) || !aN.hc || aE.l7 || aE.hb || bh.iE || aN.a3V(), a77
	}, this.a2u = function(m2, m3) {
		m2 = a7C(m2, m3);
		m2 !== a75 && (a75 = m2, this.hc || a78(), bi.dq = !0)
	}, this.a2v = function(m2, m3) {
		m2 = a7C(m2, m3);
		return -1 !== m2 && a77 === m2 && (this.hc ? aE.nr ? (0 <= m2 && bF.a3U(!1), !aE.hb) : (0 === m2 ? aE.a2l() : 1 === m2 ? this.a3V() : 2 === m2 && u.v(1, 0), !0) : 9 === m2 && (this.a3V(), !0))
	}, this.vw = function() {
		var j;
		this.hc ? (j = Math.floor(5.5 * k), vx.setTransform(1, 0, 0, 1, bf.gap, aS.fb), vx.fillStyle = bE.oK, vx.fillRect(0, 0, j, k), 0 === a75 ? (vx.fillStyle = bE.oP, vx.fillRect(0, 0, 4 * k, k)) : 1 === a75 && (vx.fillStyle = bE.oP, vx
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), vx.fillStyle = bE.oO, vx.fillRect(0, 0, j, 1), vx.fillRect(0, 0, 1, k), vx.fillRect(4 * k, 0, 1, k), vx.fillRect(0, k - 1, j, 1), vx.fillRect(j - 1, 0, 1, k), vx.font = a74, bD.rL
			.textBaseline(vx, 1), bD.rL.textAlign(vx, 1), vx.fillText(L(45), 2 * k, .54 * k), j = .4 * k, aN.a7G(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fb + .3 * k, j), j = 1, vx.setTransform(1, 0, 0, 1, bf.gap, aS.fb - j * a76 * bf.gap - j *
				k), vx.fillStyle = bE.oK, vx.fillRect(0, 0, 4 * k, k), a75 === j + 1 && (vx.fillStyle = bE.oP, vx.fillRect(0, 0, 4 * k, k)), vx.fillStyle = bE.oO, vx.fillRect(0, 0, 4 * k, 1), vx.fillRect(0, 0, 1, k), vx.fillRect(4 * k, 0, 1,
				k), vx.fillRect(0, k - 1, 4 * k, 1), vx.fillText(L(0 === j ? 45 : 46), 2 * k, .54 * k), vx.setTransform(1, 0, 0, 1, 0, 0)) : vx.drawImage(canvas, bf.gap, aS.fb)
	}, this.qw = function(player) {
		return 0 !== ah.nN[player] && 2 !== aE.a1O && !bD.go.kA(player)
	}, this.a7G = function(fZ, fb, fS) {
		vx.setTransform(1, 0, 0, 1, fZ, fb), vx.lineWidth = bf.a0M, vx.strokeStyle = bE.oO, vx.beginPath(), vx.moveTo(0, 0), vx.lineTo(fS, fS), vx.moveTo(0, fS), vx.lineTo(fS, 0), vx.stroke()
	}
}

function cH() {
	var a7I, k, a7J, a7K, a7L, a7M, a7N, a7O, a7P;

	function zT() {
		return aS.a7h(aO.a7d()) ? ax.iE ? __fx.settings.keybindButtons ? aS.fb - 2 * aS.k - 3 * a7J : aS.fb - aS.k - 2 * a7J : __fx.settings.keybindButtons ? aS.fb - aS.k - 2 * a7J : aS.fb - a7J : bF.a7h(aO.a7g()) ? ax.iE ? bF.zT() - aS.k - 2 * a7J :
			bF.zT() - a7J : ax.iE ? i.k - aS.k - (bn.a6T() + 1) * a7J : i.k - bn.a6T() * bf.gap
	}

	function a7U(ea, r2, id, h0, a7X, a7Y, lQ, a7Z, a7a, a7b, a7l) {
		var aC, zX, a4E, rD, a7m = void 0 !== a7a,
			j = Math.floor(aR.measureText(r2, aO.a74) + 1.5 * a7K + (a7m ? k : 1.5 * a7K));
		if (bi.dq = !0, a7l || bt.zq(r2, a7a), j + 2 * a7J + aS.k > i.j && !a7m && 50 !== id && 20 < r2.length) a7U(ea, (a7l = bD.sK.a5W(r2))[0], id, h0, a7X, a7Y, lQ, a7Z, a7a, a7b, !0), a7U(ea, a7l[1], id, h0, a7X, a7Y, lQ, a7Z, a7a, a7b, !0);
		else if (a7l = j + (50 === id ? a7L : 0), (a4E = document.createElement("canvas")).width = j, a4E.height = k, (zX = a4E.getContext("2d", {
				alpha: !0
			})).font = aO.a74, bD.rL.textBaseline(zX, 1), bD.rL.textAlign(zX, 0), zX.clearRect(0, 0, j, k), zX.fillStyle = a7Y, zX.fillRect(0, 0, j, k), zX.fillStyle = a7X, zX.fillText(r2, Math.floor(1.5 * a7K), Math.floor(k / 2)), a7m && (zX
				.imageSmoothingEnabled = !0, ak.xx.a0N(a7a, zX, j - k, 0, k)), 0 === (rD = {
				eZ: ea,
				r2: r2,
				id: id,
				player: h0,
				canvas: a4E,
				a7X: a7X,
				a7Y: a7Y,
				j: j,
				a7e: a7l,
				lQ: lQ,
				a7Z: a7Z,
				a7a: a7a,
				a7b: a7b
			}).eZ || 0 < a7I.length && 0 < a7I[0].eZ) a7I.unshift(rD);
		else {
			for (aC = 1; aC < a7I.length; aC++)
				if (0 < a7I[aC].eZ) return void a7I.splice(aC, 0, rD);
			a7I.push(rD)
		}
	}

	function a7V(eG, u0, fm) {
		return "rgb(" + eG + "," + u0 + "," + fm + ")"
	}

	function a7n(id, gv) {
		for (var fS = a7I.length, aC = 0; aC < fS; aC++) a7I[aC].id === id && gv-- <= 0 && (a7I.splice(aC, 1), aC--, fS--)
	}

	function a7o(id, player) {
		for (var fg = !1, aC = a7I.length - 1; 0 <= aC; aC--) a7I[aC].id !== id || player !== aE.fP && a7I[aC].player !== player || (a7I.splice(aC, 1), fg = !0);
		return fg
	}

	function a8A(r2) {
		a7U(340, r2, 6, 0, a7V(215, 245, 255), bE.oL, -1, !1)
	}
	this.a7Q = "", this.di = function() {
		var self;
		a7O = 0, a7N = a1.a2.ib() ? 7 : 12, a7M = {
				a1C: [0, 0, 0],
				a7R: [0, 0, 0],
				nf: [220, 180, 180],
				vv: [0, 0, 0],
				ej: [0, 0, 0]
			}, a7I = [], this.resize(), aE.hq && this.a1b(0, 18), bV.xk.xl[bV.f8].name.length && a8A(L(89, [bV.xk.xl[bV.f8].name])), bV.xk.xl[bV.f8].a8B && a8A(L(90, [bV.xk.xl[bV.f8].a8B])), a8A(L(91, [bV.fd - 2 + "x" + (bV.fe - 2)])), a8A(L(92,
				[bD.sK.a0f(aq.a8C)])), aq.a8C !== aq.a8D && a8A(L(93, [bD.sK.a0f(aq.a8D) + " (" + bD.sK.a5S(100 * aq.a8D / aq.a8C, 1) + ")"])), 0 < aq.a8E && a8A(L(69, [bD.sK.a0f(aq.a8E) + " (" + bD.sK.a5S(100 * aq.a8E / aq.a8C, 1) + ")"])), 0 <
			aq.a8F && a8A(L(94, [bD.sK.a0f(aq.a8F) + " (" + bD.sK.a5S(100 * aq.a8F / aq.a8C, 1) + ")"])), 10 === aE.l5 && a7U(120, L(95), 6, 0, a7V(235, 255, 120), bE.oL, -1, !1), 0 !== (self = this).a7Q.length && (a7U(200, self.a7Q, 0, 0, bE.oO,
				bE.oL, -1, !1), self.a7Q = ""), aE.zp && a7U(340, L(47), 6, 0, a7V(255, 200, 0), bE.oL, -1, !1)
	}, this.resize = function() {
		var a7W, aC;
		if (k = (k = Math.floor((a1.a2.ib() ? .031 : .0249) * i.ic)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a74 = bD.rL.t9(1, this.fontSize), a7J = bf.gap, a7K = Math.floor(k / 5), 0 < a7I.length)
			for (a7W = a7I, a7I = [], aC = a7W.length - 1; 0 <= aC; aC--) a7U(a7W[aC].eZ, a7W[aC].r2, a7W[aC].id, a7W[aC].player, a7W[aC].a7X, a7W[aC].a7Y, a7W[aC].lQ, a7W[aC].a7Z, a7W[aC].a7a, a7W[aC].a7b, !0);
		this.a7c()
	}, this.a7c = function() {
		a7P = document.createElement("canvas");
		var r2 = L(48),
			zX = (a7L = aR.measureText(r2, this.a74) + 5 * a7K, a7P.height = k, a7P.width = a7L, a7P.getContext("2d", {
				alpha: !0
			}));
		zX.font = this.a74, bD.rL.textBaseline(zX, 1), bD.rL.textAlign(zX, 1), zX.clearRect(0, 0, a7L, k), zX.fillStyle = bE.om, zX.fillRect(0, 0, a7L, k), zX.fillStyle = bE.oO, zX.fillText(r2, Math.floor(a7L / 2), Math.floor(k / 2))
	}, this.a7d = function() {
		var fS;
		return ax.iE ? ax.j : 0 === (fS = a7I.length) ? 0 : 1 === fS ? a7I[0].a7e : a7f(a7I[0].a7e, a7I[1].a7e)
	}, this.a7g = function() {
		var fS = a7I.length;
		return ax.iE ? fS ? a7f(ax.j, a7I[0].a7e) : ax.j : 0 === fS ? 0 : 1 === fS ? a7I[0].a7e : 2 === fS ? a7f(a7I[0].a7e, a7I[1].a7e) : a7f(a7f(a7I[0].a7e, a7I[1].a7e), a7I[2].a7e)
	}, this.hf = function(fZ, fb) {
		for (var no, a7i, a7j = zT(), aC = a7I.length - 1; 0 <= aC; aC--)
			if ((a7i = a7j - (aC + 1) * k) <= fb && fb < a7i + k) return 50 === a7I[aC].id ? fZ >= i.j - a7L - a7J - a7I[aC].j && (fZ >= i.j - a7L - a7J ? bB.go.qK(a7I[aC].player) : aI.nj(a7I[aC].player, 800, !1, 0), !0) : fZ >= i.j - a7I[aC].j -
				a7J && (736 === a7I[aC].id ? window.open("https://" + a7I[aC].r2, "_blank") : a7I[aC].a7Z && (a7I[aC].a7b && a7I[aC].a7b.fl ? (a7i = a7I[aC].a7b.fE, no = bP.fa(a7i) - 10, a7i = bP.fc(a7i) - 10, aI.ni(no, a7i, 19 + no, 19 +
					a7i)) : a7I[aC].a7b && a7I[aC].a7b.fm ? aI.nk(a7I[aC].player, a7I[aC].a7b.nl) : (aI.nj(a7I[aC].player, 800, !1, 0), 0 <= a7I[aC].lQ && (no = a7I[aC].lQ, a7I[aC].lQ = a7I[aC].player, a7I[aC].player = no))), !0);
		return !1
	}, this.zq = function(ea, r2, id, h0, a7X, a7Y, lQ, a7Z, a7a, a7b) {
		a7U(ea, r2, id, h0, a7X, a7Y, lQ, a7Z, a7a, a7b)
	}, this.a7k = function(s) {
		a7U(300, s, 252, 0, bE.oO, bE.oL, -1, !1)
	}, this.a5i = function(id) {
		for (var aC = a7I.length - 1; 0 <= aC; aC--) a7I[aC].id === id && (a7I[aC].eZ = 1)
	}, this.a1b = function(player, id) {
		0 === id ? (aR.ei(player, 0), a7n(423, 2), a7U(160, L(49, [ah.zr[player]]), 423, player, "rgb(10,220,10)", bE.oL, -1, !1)) : 1 === id ? (a7o(50, aE.fP), aR.ei(player, 1), a7U(360, L(50, [ah.zr[player]]), 0, player, bE.p5, bE.oL, -1, !0),
			aI.nj(player, 2700, !1, 0)) : 2 === id ? (aR.ei(player, 2), a7U(0, L(51), 0, player, "rgb(10,255,255)", bE.oL, -1, !0), aI.nj(player, 2700, !1, 0)) : 3 === id ? (aR.ei(player, 2), a7U(0, L(52, [ah.zr[player]]), 0, player, bE.oO,
			bE.oL, -1, !0), aI.nj(player, 2700, !1, 0)) : 4 === id ? this.a7p(1, player, player) : 5 === id ? bD.go.kA(aE.fC) || (function(id, nI) {
			var aC, a7z = 0,
				fS = a7I.length;
			for (aC = 0; aC < fS; aC++)
				if (a7I[aC].id === id && nI <= ++a7z) return a7I.splice(aC, 1)
		}(1, 5), ag.a7r(player) && a7U(180, L(53, [ah.zr[player]]), 1, player, a7V(255, 200, 180), bE.oL, -1, !0), bD.go.a4p(player, 10) && (a7n(573, 0), a7U(180, L(54, [ah.zr[player]]), 573, player, bE.p5, bE.oL, -1, !0))) : 18 === id ? a7U(
			255, L(55), 18, 0, bE.oO, bE.oL, -1, !1) : 21 === id ? a7U(220, L(56), id, 0, bE.oO, bE.oL, -1, !1) : 22 === id ? this.a7p(2, player, player) : 59 === id && a7U(0, L(57), id, 0, bE.pP, bE.oL, 0, !1)
	}, this.a2h = function(s) {
		a7U(200, L(58, [s]), 94, 0, bE.oO, bE.p1, -1, !1)
	}, this.a1n = function(a7s) {
		if (aE.fC === a7s && !aE.l7 && !aE.hb)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a7U(0, "Your Win Count is now " + __fx.wins.count, 3, a7s, bE.oO, bE.oL, -1, !0);
		ah.hG[a7s] && (aR.ei(a7s, 2), aE.kn < 100 ? a7U(0, L(52, [ah.zr[a7s]]), 3, a7s, bE.oO, bE.oL, -1, !0) : a7U(0, L(59, [ah.zr[a7s]]), 3, a7s, bE.oO, bE.oL, -1, !0))
	}, this.a6x = function(f6) {
		var r2, a7u, a7t = "(" + bP.fa(f6 >> 2) + ", " + bP.fc(f6 >> 2) + ")",
			a7Z = !1,
			player = 0;
		ad.fN(f6) ? ad.fJ(f6) ? a7t = L(60, [a7t]) : (player = ad.fK(f6), aE.hb && !1 === __fx.hoveringTooltip.active && (aE.fC = player), r2 = L(61, [bD.zX.a4S(ah.a24[player], bD.rL.t9(0, 10), 150)]) + "   ", r2 = (r2 += L(62, [bD.sK.a0f(ah.hU[
				player])]) + "   ") + L(63, [bD.sK.a0f(ah.hG[player])]) + "   ", aE.iM && (a7u = bj.a1k[bj.lA[bj.fQ[player]]], r2 += L(64) + ": " + a7u + "   "), bD.go.kA(player) && (r2 += L(65) + ": " + aF.ky[aF.iB[player]] + "   "), a7t =
			r2 = (r2 += L(66, [player]) + "   ") + L(67, [a7t]), a7Z = !0) : a7t = ad.fX(f6) ? L(68, [a7t]) + "   #" + ad.fA(f6) : L(69, [a7t]), a7n(55, 0), a7U(220, a7t, 55, player, bE.oO, bE.oL, -1, a7Z, void 0, void 0, !0)
	}, this.a6z = function(a7v) {
		var li = bQ.z,
			player = li.mh[a7v] >> 3,
			r2 = (bi.dq = !0, a7n(55, 0), L(70, [ah.zr[player]]) + "   ");
		a7U(220, r2 += L(62, [bD.sK.a0f(li.a7w[a7v])]), 55, player, bE.oO, bE.oL, -1, !0)
	}, this.q3 = function(pn, a7x, q4) {
		pn === aE.fC ? a7U(175, " " + L(71, [ah.zr[a7x]]) + ": ", 1001, a7x, a7V(200, 255, 210), bE.oL, -1, !0, q4) : this.a7y(pn, q4)
	}, this.a7y = function(pn, q4) {
		a7n(1e3, 0), a7U(175, ah.zr[pn] + ": ", 1e3, pn, bE.oO, "rgba(5,60,25,0.9)", -1, !0, q4)
	}, this.a1m = function() {
		var s;
		aE.a1T ? (s = L(72), aR.a1l(L(73), 2, 1, 12), a7U(0, s, 40, 0, "rgb(10,220,10)", bE.oL, -1, !1)) : (s = L(74), aR.a1l(L(75), 2, 0, 16), a7U(0, s, 41, 0, bE.oO, bE.oL, -1, !1))
	}, this.ze = function() {
		var gv = ah.zr,
			fV = aE.data;
		a7U(300, gv[0] + " [" + aE.a1h.zk(fV.elo[0]) + "] vs " + gv[1] + " [" + aE.a1h.zk(fV.elo[1]) + "]", 65, 0, bE.oF, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a80 = function(s) {
		a7U(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a81 = function(a82) {
		a7U(0, L(a82 ? 76 : 77), 247, 0, bE.pO, bE.oL, -1, !1)
	}, this.zm = function(zj, zl, a83) {
		var fV = aE.data,
			gv = ah.zr;
		a7U(0, gv[0] + ": " + aE.a1h.zk(fV.elo[0]) + " -> " + zj, 66, 0, bE.oO, a83[0], -1, !1), a7U(0, gv[1] + ": " + aE.a1h.zk(fV.elo[1]) + " -> " + zl, 66, 1, bE.oO, a83[1], -1, !1)
	}, this.qL = function(player, id) {
		0 === id ? a7o(50, player) ? (a7U(128, L(78, [ah.zr[player]]), 52, player, a7V(180, 255, 180), bE.oL, -1, !0), ag.qu(player, 2, 255)) : a7U(384, L(79, [ah.zr[player]]), 51, player, a7V(210, 210, 255), bE.oL, -1, !0) : a7o(51, player) ? (
			a7U(128, L(80, [ah.zr[player]]), 52, player, bE.oO, "rgba(60,120,10,0.9)", -1, !0), ag.qu(player, 2, 255)) : (a7U(384, L(81, [ah.zr[player]]), 50, player, bE.oO, "rgba(90,90,90,0.9)", -1, !0), ag.qu(player, 2, 96))
	}, this.qP = function(a1C, target) {
		var color = a7V(210, 255, 210);
		1 < a1C.length ? a7U(230, L(82, [a1C.length, ah.zr[target]]), 66, target, color, bE.oL, -1, !0) : a7U(230, L(83, [ah.zr[a1C[0]], ah.zr[target]]), 66, a1C[0], color, bE.oL, target, !0)
	}, this.a84 = function(player, target) {
		a7U(230, L(84, [ah.zr[player], ah.zr[target]]), 66, player, bE.oO, "rgba(75,65,5,0.9)", target, !0)
	}, this.a85 = function(id, gv) {
		a7n(id, gv)
	}, this.a1W = function(id, player) {
		a7o(id, void 0 === player ? aE.fP : player)
	}, this.a86 = function(id) {
		for (var aC = a7I.length - 1; 0 <= aC; aC--)
			if (a7I[aC].id === id) return a7I[aC];
		return null
	}, this.qG = function(a6N, a87, player) {
		2 !== ah.a4k[aE.fC] && a7U(200, 1 === a6N ? L(85, [ah.zr[player]]) : L(86, [bD.sK.a0f(a6N), ah.zr[player]]), 30, player, "rgb(190,255,190)", bE.oL, -1, !0)
	}, this.a89 = function(a6N, player) {
		2 !== ah.a4k[aE.fC] && (a7n(31, 0), a6N = " (" + bD.sK.a0f(a6N) + ") 💸", a7U(150, a6N = bD.go.kA(player) ? L(87) + a6N : L(88, [ah.zr[player]]) + a6N, 31, player, bE.oF, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1V = function(bx) {
		for (var ej = bi.kk(), aC = 2; 0 <= aC; aC--) 0 < a7M.vv[aC] && (bx || a7M.ej[aC] < ej - 220) && this.a8G(aC)
	}, this.a8G = function(id) {
		var r2, fS = a7M.vv[id],
			player = a7M.a1C[id];
		a7M.vv[id] = 0, 1 === fS ? (0 === id ? r2 = L(96, [ah.zr[player], ah.zr[a7M.a7R[0]]]) : 1 === id ? r2 = L(97, [ah.zr[player]]) : 2 === id ? r2 = L(98, [ah.zr[player]]) : 3 === id && (r2 = L(99, [ah.zr[player]])), a7n(7, 0), a7U(a7M.nf[
			id], r2, 7, a7M.a7R[id], bE.oO, bE.oL, -1, !0)) : (r2 = L(0 === id ? 100 : 1 === id ? 101 : 102, [fS]), a7n(7, 0), a7U(a7M.nf[id], r2, 7, player, bE.oO, bE.oL, -1, !1))
	}, this.a7p = function(id, hu, lQ) {
		var ej = bi.kk(),
			fS = a7M.vv[id] + 1;
		a7M.vv[id]++, a7M.a1C[id] = hu, a7M.a7R[id] = lQ, 1 === fS && (a7M.ej[id] = ej), (1 === fS && (aE.a1R < 32 || 2 === aE.a1O) || 1 < fS && (a7M.ej[id] < ej - 140 || 2 === aE.a1O)) && this.a8G(id)
	}, this.ee = function() {
		b3.ee();
		for (var k2 = (k2 = a7I.length - a7N) <= 1 ? 1 : k2 * k2, aC = a7I.length - 1; 0 <= aC; aC--) 0 < a7I[aC].eZ && (a7I[aC].eZ -= k2, a7I[aC].eZ <= 0) && (bi.dq = !0, a7I.splice(aC, 1));
		! function() {
			var gv, aC;
			if (128 !== a7O && !(++a7O < 128))
				for (gv = 5, aC = am.lJ - 1; 0 <= aC; aC--) 1 === ah.a4k[am.lO[aC]] && 0 < gv-- && a7U(240, L(99, [ah.zr[am.lO[aC]]]), 1, am.lO[aC], bE.oF, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1V(!1)
	}, this.vw = function() {
		for (var yV, fb = zT(), aC = a7I.length - 1; 0 <= aC; aC--) yV = fb - (aC + 1) * k, 50 === a7I[aC].id ? (vx.drawImage(a7I[aC].canvas, i.j - a7I[aC].j - a7L - a7J, yV), vx.drawImage(a7P, i.j - a7L - a7J, yV)) : vx.drawImage(a7I[aC].canvas,
			i.j - a7I[aC].j - a7J, yV)
	}, this.a8I = function(id, iB) {
		var a7t, a8J = bE.oY;
		0 === id ? a7t = L(103) : 1 === id ? (a7t = L(104), a8J = bE.pK) : 2 === id ? a7t = L(105) : 3 === id ? a7t = L(106) : (a7t = bD.sK.a0f(iB), a8J = 5 === id ? bE.pK : bE.oL), a7n(74, 0), a7U(0, a7t, 74, 0, bE.oO, a8J, -1, !1, void 0,
			void 0, !0)
	}
}

function cI() {
	var a8L, a8M, vy = "",
		yG = 0,
		yH = 0,
		a8K = -1,
		eC = ["Team", "Zombie", "BR", "1v1"];

	function a8N() {
		for (var ea = new Date, a8O = ea.getUTCMinutes(), ea = ea.getUTCSeconds(), a8Q = [], a8R = 0, aC = 0; aC < 6; aC++) a8Q.push(a8R), a8Q.push(a8R + 2), a8Q.push(a8R + 5), a8Q.push(a8R + 7), a8R += 10;
		for (var fS = a8Q.length, aC = 1; aC < fS && !(a8O < a8Q[aC]); aC++);
		aC %= fS;
		ea = (a8Q[0] = 60) * (a8Q[aC] - a8O) - ea;
		return ea !== a8K && (vy = eC[aC % 4] + " " + a8M + ": " + a8T(Math.floor(ea / 60)) + ":" + a8T(ea % 60), a8K = ea, yG = aR.measureText(vy, a8L), yG += Math.floor(.4 * yH), 1)
	}

	function a8T(a8U) {
		return a8U < 10 ? "0" + a8U : String(a8U)
	}
	this.di = function() {
		a8M = L(107)
	}, this.resize = function() {
		yG = Math.floor((a1.a2.ib() ? .53 : .36) * i.ic), yH = Math.floor(.065 * yG), a8L = bD.rL.t9(1, Math.floor(.9 * yH)), a8K += 1e3, a8N()
	}, this.ee = function() {
		a8N() && (bi.dq = !0)
	}, this.vw = function(fb) {
		vx.lineWidth = 1 + Math.floor(yH / 15), vx.translate(i.j - yH, fb + yG), vx.rotate(-Math.PI / 2), vx.fillStyle = bE.oO, vx.fillRect(0, 0, yG, yH), vx.strokeStyle = bE.oF, vx.strokeRect(0, 0, yG, yH + 10), vx.fillStyle = bE.oF, vx.font =
			a8L, bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 1), vx.fillText(vy, Math.floor(yG / 2), Math.floor(.59 * yH)), vx.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cJ() {
	var a6M, a8V, a8W, yH, a8X, a8Y = 0,
		a8Z = 0;

	function a8b(aC) {
		var a8d = !0,
			a0U = bE.oO,
			j = (1 === a6M[aC].id ? a6M[aC].zX.fillStyle = bE.pI : a6M[aC].jw === aE.fP ? a6M[aC].zX.fillStyle = bE.oZ : (ad.a8e(a6M[aC].jw), a6M[aC].zX.fillStyle = bD.color.oI(bR.g1[0], bR.g1[1], bR.g1[2], .87), 400 < bD.rT.a3s(bR.g1, 0, 2) && (
				a8d = !1, a0U = bE.oF)), a6M[aC].canvas.width),
			ti = (a6M[aC].zX.clearRect(0, 0, j, yH), a6M[aC].zX.fillRect(0, 0, j, yH), a6M[aC].zX.fillStyle = a0U, ! function(zX, j, yH) {
				zX.fillRect(0, 0, j, 1), zX.fillRect(0, yH - 1, j, 1), zX.fillRect(0, 0, 1, yH), zX.fillRect(j - 1, 0, 1, yH)
			}(a6M[aC].zX, j, yH), a8V + 2 * yH < j && (a6M[aC].zX.fillRect(j - a8V - yH, 0, 1, yH), a6M[aC].zX.fillText(ah.zr[a6M[aC].jw], Math.floor((j - a8V) / 2), Math.floor(.57 * yH))), 0 !== a6M[aC].id ? 0 : yH);
		a6M[aC].zX.fillText(bD.sK.a0f(a6M[aC].iB), Math.floor(j - a8V / 2 - ti), Math.floor(.57 * yH)),
			function(aC, j, ti, a8d) {
				a6M[aC].zX.fillStyle = a8d ? bE.oQ : bE.oM;
				a8d = Math.floor(a8V * a6M[aC].iB / a6M[aC].a8k);
				a6M[aC].zX.fillRect(Math.floor(j - a8V - ti), yH - a8X, a8d, a8X)
			}(aC, j, ti, a8d), 0 === a6M[aC].id ? (a8h(aC, j, a8d, a0U), function(aC, j, a8d) {
				a6M[aC].zX.strokeStyle = a8d ? bE.oh : bE.or, a6M[aC].zX.fillRect(yH, 0, 1, yH);
				a8d = j - yH;
				a6M[aC].zX.beginPath(), a6M[aC].zX.moveTo(Math.floor(.3 * yH + a8d), Math.floor(yH / 2)), a6M[aC].zX.lineTo(Math.floor(yH - .3 * yH + 0 + a8d), Math.floor(yH / 2)), a6M[aC].zX.stroke(), a6M[aC].zX.beginPath(), a6M[aC].zX.moveTo(
					Math.floor(yH / 2 + a8d), Math.floor(.3 * yH)), a6M[aC].zX.lineTo(Math.floor(yH / 2 + a8d), Math.floor(yH - .3 * yH + 0)), a6M[aC].zX.stroke()
			}(aC, j, a8d)) : a8h(aC, 2 * yH, a8d, a0U)
	}

	function a8h(aC, j, a8d, a0U) {
		a6M[aC].zX.strokeStyle = a6M[aC].a8l ? bE.oX : a8d ? bE.ox : bE.oy, a6M[aC].zX.fillStyle = a0U, a6M[aC].zX.fillRect(j - yH, 0, 1, yH), a6M[aC].zX.lineWidth = Math.max(Math.floor(yH / 12), 3), a6M[aC].zX.lineCap = "round";
		a8d = .35;
		j = yH + 1, a6M[aC].zX.beginPath(), a6M[aC].zX.moveTo(Math.floor(j - a8d * yH + 0), Math.floor(a8d * yH)), a6M[aC].zX.lineTo(Math.floor(j - yH + a8d * yH), Math.floor(yH - a8d * yH + 0)), a6M[aC].zX.stroke(), a6M[aC].zX.beginPath(), a6M[aC]
			.zX.moveTo(Math.floor(j - yH + a8d * yH), Math.floor(a8d * yH)), a6M[aC].zX.lineTo(Math.floor(j - a8d * yH + 0), Math.floor(yH - a8d * yH + 0)), a6M[aC].zX.stroke()
	}

	function a8x(h, a8v) {
		for (var iB, aC = a8v - 1; 0 <= aC; aC--) iB = ae.gf(aE.fC, aC), h[aC].iB !== iB && (h[aC].iB = iB, h[aC].a8k = Math.max(iB, h[aC].a8k), h[aC].a8c = !0)
	}

	function a91(h, a8z) {
		for (var tw = aE.fC << 3, a7w = bQ.z.a7w, me = bQ.z.me, a93 = bQ.z.a93, aC = a8z - 1; 0 <= aC; aC--) {
			var a94 = a93[tw + aC],
				iB = a7w[a94];
			h[aC].iB !== iB ? (h[aC].iB = iB, h[aC].a8k = Math.max(iB, h[aC].a8k), h[aC].a8c = !0) : h[aC].a8l || me[a94] % 64 != 5 || (h[aC].a8l = !0, h[aC].a8c = !0)
		}
	}

	function a8a(a6P) {
		a6P.canvas = document.createElement("canvas"), bV.xq.font = a8W;
		var j = a8V;
		a6P.jw < aE.fP && 0 === a6P.id && (j += Math.floor(bV.xq.measureText(ah.zr[a6P.jw] + "000").width)), j += yH, 0 === a6P.id && (j += yH), a6P.canvas.width = j, a6P.canvas.height = yH, a6P.zX = a6P.canvas.getContext("2d", {
			alpha: !0
		}), a6P.zX.font = a8W, bD.rL.textBaseline(a6P.zX, 1), bD.rL.textAlign(a6P.zX, 1)
	}

	function a8r(aC) {
		return aV.a95() ? i.j - a6M[aC].canvas.width - bf.gap : aV.fZ
	}

	function a8s(aC) {
		return Math.floor(2 * bf.gap + (aV.a95() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * yH))
	}
	this.di = function() {
		a8Y = a8Z = 0, a6M = [], this.resize()
	}, this.resize = function() {
		a8W = aO.a74, yH = aO.fontSize + 5, yH = Math.floor(1.25 * yH), a1.a2.ib() && (yH = Math.floor(1.25 * yH)), a8X = Math.floor(.15 * yH), bV.xq.font = a8W, a8V = Math.floor(bV.xq.measureText("02 000 000 0000").width);
		for (var aC = a6M.length - 1; 0 <= aC; aC--) a8a(a6M[aC]), a8b(aC)
	}, this.n9 = function() {
		for (var aC = a6M.length - 1; 0 <= aC; aC--) a6M[aC].a8c && (a6M[aC].a8c = !1, a8b(aC))
	}, this.hf = function(m2, m3) {
		if (2 !== aE.a1O && 0 !== ah.nN[aE.fC] && !aE.hb && !bD.go.kA(aE.fC))
			for (var a8m, a8n, a8o, a8p = a1.a2.ib() ? yH : 0, a8q = a1.a2.ib() ? Math.floor(.15 * yH) : 0, aC = a6M.length - 1; 0 <= aC; aC--)
				if (a8m = a8r(aC), a8n = a8s(aC), a8o = a6M[aC].canvas.width, a8n - a8q <= m3 && m3 <= a8n + yH + a8q) {
					if (a8m - a8p <= m2 && m2 <= a8m + yH + a8p) return a6M[aC].a8l || (a6M[aC].a8c = !0, a6M[aC].a8l = !0, 0 === a6M[aC].id ? bB.hs.q1(a6M[aC].jw) : bB.hs.q0(a6M[aC].jw)), !0;
					if (0 === a6M[aC].id && a8m + a8o - yH - a8p <= m2 && m2 <= a8m + a8o + a8p) return bY.a6n(3), bB.hs.hz(aS.hw(), a6M[aC].jw), !0
				} return !1
	}, this.ee = function() {
		var a40, a41, h, a8v;
		0 === ah.nN[aE.fC] || bD.go.kA(aE.fC) && !aE.hb || (a40 = a6M.slice(0, a8Y), a41 = a6M.slice(a8Y, a8Y + a8Z), h = a40, a8v = ae.gZ(aE.fC), function(h, a8v) {
			if (a8Y !== a8v) return 1;
			for (var aC = a8v - 1; 0 <= aC; aC--)
				if (h[aC].jw !== ae.ge(aE.fC, aC)) return 1;
			return
		}(h, a8v) ? a8x(h = function(h, a8v) {
			var aC, jw, fm, iB, a7W = [];
			loop: for (aC = 0; aC < a8v; aC++) {
				for (jw = ae.ge(aE.fC, aC), fm = 0; fm < h.length; fm++)
					if (h[fm].jw === jw) {
						a7W.push(h.splice(fm, 1)[0]);
						continue loop
					} iB = ae.gf(aE.fC, aC), a8a(iB = {
					jw: jw,
					iB: iB,
					a8k: iB,
					id: 0,
					a8c: !0,
					a8l: !1,
					canvas: null,
					zX: null
				}), a7W.push(iB)
			}
			return a7W
		}(h, a8v), a8v) : a8x(h, a8v), a40 = h, a41 = function(h) {
			var a8z = bQ.z.kr[aE.fC];
			return function(h, a8z) {
				if (a8Z !== a8z) return 1;
				for (var tw = aE.fC << 3, mg = bQ.z.mg, a93 = bQ.z.a93, aC = a8z - 1; 0 <= aC; aC--) {
					var a94 = a93[tw + aC];
					if (h[aC].jw !== mg[a94]) return 1
				}
				return
			}(h, a8z) ? a91(h = function(h, a8z) {
				var aC, jw, fm, a7W = [],
					tw = aE.fC << 3,
					mg = bQ.z.mg,
					a7w = bQ.z.a7w,
					a93 = bQ.z.a93;
				loop: for (aC = 0; aC < a8z; aC++) {
					var a94 = a93[tw + aC];
					for (jw = mg[a94], fm = 0; fm < h.length; fm++)
						if (h[fm].jw === jw) {
							a7W.push(h.splice(fm, 1)[0]);
							continue loop
						} a94 = a7w[a94], a8a(a94 = {
						jw: jw,
						iB: a94,
						a8k: a94,
						id: 1,
						a8c: !0,
						a8l: !1,
						canvas: null,
						zX: null
					}), a7W.push(a94)
				}
				return a7W
			}(h, a8z), a8z) : a91(h, a8z), h
		}(a41), a8Y = a40.length, a8Z = a41.length, a6M = a40.concat(a41))
	}, this.vw = function() {
		if (0 !== ah.nN[aE.fC] && (!bD.go.kA(aE.fC) || aE.hb))
			for (var aC = a6M.length - 1; 0 <= aC; aC--) vx.drawImage(a6M[aC].canvas, a8r(aC), a8s(aC))
	}
}

function cK() {
	var a7I, ks, a96, a97, k, a74, fontSize, a98, a99, a9A, a9B, canvas, zX, na, a9C;

	function wD(aC) {
		return L(0 === aC ? 108 : 1 === aC ? 109 : 2 === aC ? 110 : 111)
	}

	function a9J() {
		aE.iM ? a9K + 4 * bf.gap + k + bk.a9L() > aS.fb ? vx.drawImage(canvas, 2 * bf.gap + bk.a9L(), a9K + 2 * bf.gap) : vx.drawImage(canvas, bf.gap, a9K + 3 * bf.gap + bk.a9L()) : vx.drawImage(canvas, bf.gap, a9K + 2 * bf.gap)
	}

	function a9D() {
		canvas.width = a7I[0].width + a9A, canvas.height = k + a9A, (zX = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a7I[0].width + a9A, k + a9A), zX.translate(Math.floor(a9A / 2), Math.floor(a9A / 2)), zX.lineWidth = a9A, zX.fillStyle = 1 === a7I[0].a9I ? bE.oT : bE.oL, a9M(), zX.fill(), zX.strokeStyle = 1 === a7I[0].a9I ? bE.oF :
			bE.oO, a9M(), zX.stroke(), bD.rL.textAlign(zX, 1), bD.rL.textBaseline(zX, 1), zX.fillStyle = 1 === a7I[0].a9I ? bE.oF : bE.oO, zX.font = a74[0], zX.fillText(wD(a7I[0].a9H), Math.floor(a7I[0].width / 2), Math.floor(.72 * a98[0] * k)), zX
			.font = a74[1], zX.fillText(a7I[0].r2, Math.floor(a7I[0].width / 2), Math.floor((a98[0] + .48 * a98[1]) * k))
	}

	function a9M() {
		zX.beginPath(), zX.moveTo(a9B, 0), zX.lineTo(a7I[0].width - a9B, 0), zX.lineTo(a7I[0].width, a9B), zX.lineTo(a7I[0].width, k - a9B), zX.lineTo(a7I[0].width - a9B, k), zX.lineTo(a9B, k), zX.lineTo(0, k - a9B), zX.lineTo(0, a9B), zX.closePath()
	}
	this.di = function() {
		ks = 4, a96 = a97 = na = 0, a7I = [], a74 = new Array(2), fontSize = new Array(2), (a98 = new Array(2))[0] = .3, a98[1] = .7, a99 = new Array(4), canvas = document.createElement("canvas"), a9C = bi.eZ + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ib() ? .062 : .047) * i.ic), fontSize[0] = Math.floor(.85 * a98[0] * k), fontSize[1] = Math.floor(.85 * a98[1] * k), a74[0] = bD.rL.t9(1, fontSize[0]), a74[1] = bD.rL.t9(1, fontSize[1]), aC = a99.length -
			1; 0 <= aC; aC--) a99[aC] = this.measureText(wD(aC) + "000", a74[0]);
		if (a9A = Math.floor(1 + .05 * k), a9B = Math.floor(.2 * k), 0 < a7I.length) {
			for (aC = a7I.length - 1; 0 <= aC; aC--) j = this.measureText(a7I[aC].r2 + "00", a74[1]), a7I[aC].width = j < a99[aC] ? a99[aC] : j;
			a9D()
		}
	}, this.ee = function() {
		0 !== ks && (4 === ks ? bi.eZ > a9C && (ks = 0, 1 === aE.a1O) && aR.a1l(bV.xk.xl[bV.f8].name, 3, 1, 9) : (1 === ks ? (0 === a96 && (a9D(), a96 = 1e-4), 1 <= (a96 += .002 * (bi.eZ - na)) && (a97 = 0, ks = 2, a96 = 1), bi.dq = !0) : 2 ===
			ks ? ((a97 += (bi.eZ - na) / 1e3) > a7I[0].nf || 1 < a97 && 1 < a7I.length) && (ks = 3) : 3 === ks && ((a96 -= .002 * (bi.eZ - na)) <= 0 && (a96 = 0, a7I.shift(), ks = 0 < a7I.length ? 1 : 0), bi.dq = !0), na = bi.eZ))
	}, this.measureText = function(r2, a74) {
		return vx.font = a74, Math.floor(vx.measureText(r2).width)
	}, this.ei = function(a9G, aC) {
		this.a1l(ah.zr[a9G], aC, 1, 0 === aC ? 3 : 7)
	}, this.a1l = function(r2, a9H, a9I, nf) {
		var j;
		r2.length && (j = (j = this.measureText(r2 + "00", a74[1])) < a99[a9H] ? a99[a9H] : j, a7I.push({
			r2: r2,
			width: j,
			a9H: a9H,
			a9I: a9I,
			nf: nf
		}), 0 === ks) && (a96 = 0, ks = 1, na = bi.eZ)
	}, this.vw = function() {
		0 !== ks && 0 !== a96 && (a96 < 1 ? (vx.globalAlpha = a96, a9J(), vx.globalAlpha = 1) : a9J())
	}
}

function ct() {
	var k, canvas, zX, a9N, a9O, a9P, a9Q, a8c, a9R, a9S, a9T, a9U, a82 = !1,
		a4E = (this.iE = !1, this.j = 0, new Array(2)),
		a9V = 0;

	function nA() {
		var j = ax.j,
			li = (a8c = !1, zW(zX, j, k), Math.floor(j / 2));
		1 === a9N ? (zX.fillStyle = bE.oj, zX.fillRect(li, 0, li, k)) : -1 === a9N && (zX.fillStyle = bE.oz, zX.fillRect(0, 0, li, k)), zY(zX, j, k, 2);
		var li = (li = Math.floor(.25 * k)) < 2 ? 2 : li,
			a8C = (zX.fillStyle = bE.oU, Math.floor((k - 4) * a9O[1] / a9P[1]));
		0 < a8C && zX.fillRect(2, k - 2 - a8C, li, a8C), 0 < (a8C = Math.floor((k - 4) * a9O[0] / a9P[0])) && zX.fillRect(j - 2 - li, k - 2 - a8C, li, a8C);
		li = (li = Math.floor(k / 8)) < 2 ? 2 : li, za(zX, Math.floor(.4 * k), 0, k, li, .5, !1), za(zX, Math.floor(j - 1.4 * k), 0, k, li, .5, !0), a8C = 1.1 * k / a4E[0].width;
		zX.imageSmoothingEnabled = !0, zX.setTransform(a8C, 0, 0, a8C, (j - a8C * a4E[0].width) / 2, -.05 * k), zX.drawImage(a4E[+a82], 0, 0), zX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9a() {
		a9U = -1, a82 = ai.a9b(), aO.a5i(257), aO.a81(a82), ax.iE = !0, a8c = !0, a9R = 360;
		for (var fu, ea = 0, aC = am.lJ - 1; 0 <= aC; aC--) bD.go.kA(am.lO[aC]) || (ea += ah.hG[am.lO[aC]]);
		a82 ? a9P[0] = Math.max(bO.ft(3 * ea, 4), 1) : aE.iM ? (fu = 9 === aE.l5 ? 8 === bj.lA[bk.lM()] ? 80 : (fu = bO.ft(100 * bk.lK(), aE.kX), bO.ft(bO.ia(1550 - 11 * fu, 400, 1e3), 10)) : (fu = bO.ft(100 * bk.lK(), aE.kX), bO.ft(bO.ia(1600 - 12 *
			fu, 400, 1e3), 10)), fu = bO.ft(fu * ea, 100), a9P[0] = Math.max(fu, 1)) : 8 === aE.l5 ? a9P[0] = Math.max(bO.ft(3 * ea, 4), 1) : a9P[0] = Math.max(bO.ft(3 * ea, 5), 1), a9P[1] = Math.max(ea - a9P[0], 1)
	}

	function a9W() {
		a9T = bi.kk(), a8c = !0, a9R = a9N = 0, a9Q = [], ax.iE = !1, aO.a1W(247), a9O[0] = a9O[1] = 0, aO.a5i(673)
	}

	function zT() {
		return aS.a7h(aO.a7d()) ? __fx.settings.keybindButtons ? aS.fb - 2 * (k + bf.gap) : aS.fb - k - bf.gap : bF.a7h(aO.a7g()) ? bF.zT() - k - bf.gap : i.k - k - bn.a6T() * bf.gap
	}
	this.dj = function() {
		for (var aC = 0; aC < 2; aC++) a4E[aC] = bD.canvas.a08(ac.get(3), 8 - aC, bE.pc), a4E[aC] = bD.canvas.a4G(a4E[aC])
	}, this.di = function() {
		a9T = -1e4, a9S = a9V = 0, a9U = -1, this.iE = !1, a8c = a82 = !1, a9O = [a9N = a9R = 0, 0], a9P = [1, 1], a9Q = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, zX = canvas.getContext("2d", {
			alpha: !0
		}), nA()
	}, this.n9 = function() {
		a8c && nA()
	}, this.hf = function(fZ, fb) {
		return !!this.iE && !(fZ < i.j - this.j - bf.gap || fb < zT() || (aE.hb || this.iF(aE.fC) && (aN.hc && aN.a3V(), bB.hs.iG(fZ > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ee = function() {
		0 < a9S ? 0 === --a9S && a9W() : this.iE ? 180 == --a9R && 3 * a9O[0] < a9P[0] ? a9W() : a9O[0] >= a9P[0] ? a82 ? bU.a10.a1J() : bU.a10.a1N() : a9O[1] >= a9P[1] ? a9S = 4 : a9R <= 0 && a9W() : ! function() {
			var a9d = bi.kk();
			if (a9d % 40 == 14) {
				if (a9V) return !(a9d < a9V) && !(a9d < a9T + 535) && (a9V = a9d + 1071, bD.go.a4n()) ? (a9a(), 1) : 0;
				(1 === am.lJ || (aE.iM ? bk.lK() : ah.hG[mO[0]]) >= bO.ft(96 * aE.kX, 100)) && (a9V = a9d + 535)
			}
			return
		}() && 0 <= a9U && (aO.zq(250, L(112, [ah.zr[a9U]]), 673, a9U, bE.oO, bE.oL, -1, !0), a9a())
	}, this.a1P = function() {
		this.iE && a9O[0] < a9P[0] && a9W()
	}, this.qv = function(player, a9e) {
		var a9f = L(a9e ? 113 : 114, [ah.zr[player]]),
			a9f = (aO.zq(450, a9f, 257, player, a9e ? bE.oh : bE.ow, bE.oL, -1, !0), a9Q.push(player), a8c = !0, aE.l7 ? Math.max(a9P[0], a9P[1]) : ah.hG[player]),
			a9f = Math.max(a9f, 1);
		a9e ? a9O[0] += a9f : a9O[1] += a9f, player === aE.fC && (a9N = a9e ? 1 : -1)
	}, this.vw = function() {
		var fb;
		this.iE && (fb = zT(), vx.drawImage(canvas, i.j - this.j - bf.gap, fb))
	}, this.iH = function(player) {
		if (0 !== a9R) return !1;
		if (!bD.go.hd(1)) return !1;
		if (!bD.go.he(player)) return !1;
		if (10 <= kY[player] && !bD.go.a56(player, 9)) return !1;
		if (!aE.l7) {
			player = bi.kk();
			if (player < a9T + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iF = function(h0) {
		if (!bD.go.hd(1)) return !1;
		if (!bD.go.he(h0)) return !1;
		if (!this.iE) return !1;
		for (var aC = a9Q.length - 1; 0 <= aC; aC--)
			if (a9Q[aC] === h0) return !1;
		return !0
	}, this.iD = function(player) {
		a9U = player
	}
}

function cL() {
	var j, fZ, a9h, canvas, zX, iE, j5, a5Z, a74, a8c, a9i = 11 / 12;

	function a9k() {
		var a8j = Math.floor(j5 * (j - 2 * a9h)),
			a9n = 1 + Math.floor(.0625 * aS.k),
			a9o = 1 + Math.floor(.3 * aS.k),
			a9p = Math.floor(.55 * aS.k);
		zX.clearRect(0, 0, j, aS.k), zX.fillStyle = bE.oK, zX.fillRect(0, 0, a9h, aS.k), zX.fillRect(a9h + a8j, 0, j - a9h - a8j, aS.k), zX.fillStyle = j5 < 1 / 3 ? "rgba(" + Math.floor(3 * j5 * 130) + ",130,0,0.85)" : j5 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (j5 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (j5 - 2 / 3) * 130) + ",0.85)", zX.fillRect(a9h, 0, a8j, aS.k), zX.fillStyle = bE.oO, zX.fillRect(0, 0, j, 1), zX.fillRect(0, aS.k - 1, j, 1), zX
			.fillRect(0, 0, 1, aS.k), zX.fillRect(a9h, 0, 1, aS.k), zX.fillRect(a9h + a8j, 0, 1, aS.k), zX.fillRect(j - a9h, 0, 1, aS.k), zX.fillRect(j - 1, 0, 1, aS.k), zX.fillRect(Math.floor(.25 * aS.k) + a9o, Math.floor((aS.k - a9n) / 2), aS.k -
				2 * a9o, a9n), zX.fillRect(Math.floor(j - 1.25 * aS.k) + a9o, Math.floor((aS.k - a9n) / 2), aS.k - 2 * a9o - a9o % 2, a9n), zX.fillRect(Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - a9n) / 2), a9o, a9n, aS.k - 2 * a9o - a9o % 2),
			a5Z = bD.go.j4(aE.fC, aS.hw()), zX.fillText(bD.sK.a0f(a5Z) + " (" + bD.sK.a5S(100 * j5, +(j5 < .1)) + ")", Math.floor(.5 * j), a9p)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		j5 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a3R(arg1);

	function a9u(a3n) {
		return !(1 < a3n && 1 === j5 || (1 < a3n && a3n * j5 - j5 < 1 / 1024 ? a3n = (j5 + 1 / 1024) / j5 : a3n < 1 && j5 - a3n * j5 < 1 / 1024 && (a3n = (j5 - 1 / 1024) / j5), j5 = bO.ia(j5 * a3n, 1 / 1024, 1), a9k(), 0))
	}

	function a9v(m2) {
		return j5 !== (j5 = bO.ia((m2 - fZ - a9h) / (j - 2 * a9h), 1 / 1024, 1)) && (a9k(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9k(), bi.dq = !0
	}, this.fb = 0, this.hg = !1, this.di = function() {
		iE = !aE.hq && !aE.hb, a8c = !1, j5 = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.eW.data[182].value + 1) / 1024, a5Z = 0, this.hg = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ib() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.ic), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ib() ? .65 : .389) * i.ic), j += 12 - j % 12, this.k = Math.floor(j / 12)), a9h = Math.floor(3 * this.k / 2), a74 =
			bD.rL.t9(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, vx), canvas.height = this.k, (zX = canvas.getContext("2d", {
				alpha: !0
			})).font = a74, bD.rL.textBaseline(zX, 1), bD.rL.textAlign(zX, 1), this.a9j(), a9k()
	}, this.a9j = function() {
		fZ = a1.a2.ib() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fb = i.k - this.k - bn.a6T() * bf.gap
	}, this.n9 = function() {
		a8c && (a8c = !1, a9k())
	}, this.iE = function() {
		return !(!iE || aN.hc && fZ < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a7h = function(a9q) {
		return !!this.iE() && fZ + j > i.j - a9q - bf.gap
	}, this.a5g = function() {
		iE = !aE.hb
	}, this.a9W = function() {
		iE = !1
	}, this.hw = function() {
		return bO.ia(Math.floor(1024 * j5 + .5) - 1, 0, 1023)
	}, this.a3O = function(m2, m3) {
		return this.iE() && fZ < m2 && m2 < fZ + j && m3 > this.fb
	}, this.hf = function(m2, m3) {
		if (!this.iE()) return !1;
		if (!(__fx.settings.keybindButtons && m3 > this.fb - Math.floor(bf.gap / 4) - this.k && m3 < this.fb - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(m2 - fZ))) {
			if (!aS.a3O(m2, m3)) return !1;
			aT.nt = !1, ! function(su, m2, m3) {
				if (function(m2, m3) {
						return fZ < m2 && m2 < fZ + a9h && m3 > aS.fb
					}(m2, m3)) return a9u(a9i);
				if (function(m2, m3) {
						return fZ + j - a9h < m2 && m2 < fZ + j && m3 > aS.fb
					}(m2, m3)) return a9u(1 / a9i);
				return su.hg = !0, a9v(m2)
			}(this, m2, m3) || (bi.dq = !0)
		}
		return !0
	}, this.a3R = function(o0) {
		0 !== aE.a1O && this.iE() && a9u(o0) && (bi.dq = !0)
	}, this.a2x = function(deltaY) {
		var o0;
		return !(0 === deltaY || !this.iE()) && a9u(o0 = 0 < deltaY ? (o0 = 400 / (400 + deltaY)) < a9i ? a9i : o0 : 1 / a9i < (o0 = (400 - deltaY) / 400) ? 1 / a9i : o0)
	}, this.a2u = function(m2) {
		return !!this.hg && a9v(m2)
	}, this.a3K = function() {
		this.hg = !1
	}, this.ee = function() {
		this.iE() && a5Z !== bD.go.j4(aE.fC, this.hw()) && (a8c = !0)
	}, this.vw = function() {
		this.iE() && (vx.drawImage(canvas, fZ, this.fb), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vx, fZ, this.fb)
	}
}

function d5() {
	var canvas, zX, a9w, font, a9x = 0,
		a9y = !1,
		a9z = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aA0 = 5;

	function aA7() {
		if (a9y) {
			var aC, fS = a9z.length,
				a9p = Math.floor(.5 * a9w.k),
				k = fS * a9p,
				fZ = Math.floor(Math.floor(a9w.fZ) + .3 * a9w.j - .5),
				fb = Math.floor(Math.floor(a9w.fb) - k),
				j = Math.floor(.4 * a9w.j + 2.5);
			for (vx.fillStyle = bE.oK, vx.fillRect(fZ, fb, j, k), vx.fillStyle = bE.oo, vx.fillRect(fZ, fb + aA0 * a9p, j, a9p), vx.fillStyle = bE.oO, vx.fillRect(fZ, fb, 2, k), vx.fillRect(fZ, fb, j, 2), vx.fillRect(fZ + j - 2, fb, 2, k), aC =
				1; aC < fS; aC++) vx.fillRect(fZ, fb + aC * a9p, j, 2);
			for (vx.fillStyle = bE.oO, bD.rL.textAlign(vx, 1), bD.rL.textBaseline(vx, 1), vx.font = bD.rL.t9(0, .6 * a9p), fZ += .5 * j, aC = 0; aC < fS; aC++) vx.fillText(aAF(aC), fZ, fb + (aC + .6) * a9p)
		}
		vx.drawImage(canvas, Math.floor(a9w.fZ), Math.floor(a9w.fb))
	}

	function nA(su) {
		var fZ, no, np, a9p;
		zX.clearRect(0, 0, Math.floor(a9w.j), Math.floor(a9w.k)), zX.fillStyle = bE.oK, zX.fillRect(0, 0, Math.floor(a9w.j), Math.floor(a9w.k)), aE.nr && (zX.fillStyle = bE.oo, zX.fillRect(0, 0, Math.floor(.3 * a9w.j), Math.floor(a9w.k))), zX
			.fillStyle = bE.oO, zX.fillText("Hide UI", .15 * a9w.j, .5 * a9w.k), zX.fillRect(Math.floor(.3 * a9w.j - .5), 0, 2, Math.floor(a9w.k)), fZ = .5 * a9w.j, zX.fillText("Replay Speed", fZ, .31 * a9w.k), zX.fillText(aAF(aA0), fZ, .69 * a9w.k),
			zX.fillRect(Math.floor(.7 * a9w.j - .5), 0, 2, Math.floor(a9w.k)), su.a6D ? (fZ = Math.floor(.02 * a9w.j), su = Math.floor(.025 * a9w.j), no = Math.floor(.85 * a9w.j - fZ - .5 * su), np = Math.floor(.25 * a9w.k), a9p = Math.floor(a9w.k) -
				2 * np, zX.fillRect(no, np, fZ, a9p), zX.fillRect(no + fZ + su, np, fZ, a9p)) : function() {
				var j = Math.floor(.46 * a9w.k),
					k = Math.floor(.23 * a9w.k),
					fZ = Math.floor(.85 * a9w.j - .5 * j + j / 12),
					fb = Math.floor(.5 * a9w.k - k);
				zX.beginPath(), zX.moveTo(fZ, fb), zX.lineTo(fZ + j, fb + k), zX.lineTo(fZ, fb + (k << 1)), zX.fill()
			}(), zX.fillRect(0, 0, Math.floor(a9w.j), 2), zX.fillRect(0, 0, 2, Math.floor(a9w.k)), zX.fillRect(0, Math.floor(a9w.k) - 2, Math.floor(a9w.j), 2), zX.fillRect(Math.floor(a9w.j - 2), 0, 2, Math.floor(a9w.k))
	}

	function aAF(aC) {
		return 5 === aC ? "Normal" : "" + a9z[aC]
	}
	this.a6D = !1, this.di = function() {
		aE.hb && (aA0 = 5, this.a6D = !1, a9y = !1, a9w = new rw([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aA1 = function() {
		return a9z[aA0]
	}, this.zT = function() {
		return a9w.fb
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a6D,
		fxGetSpeedIndex: () => aA0,
		fxSetSpeedIndex: index => {
			aA0 = index, this.resize()
		},
		fxGetPanelTop: () => a9w && a9w.fb
	}, this.a7h = function(a9q) {
		return !!aE.hb && a9w.fZ + a9w.j > i.j - a9q - bf.gap
	}, this.resize = function() {
		aE.hb && (a9w.resize(), a9w.fb -= (bn.a6T() - 1) * bf.gap, font = bD.rL.t9(0, .3 * a9w.k), (canvas = document.createElement("canvas")).width = Math.floor(a9w.j), canvas.height = Math.floor(a9w.k), (zX = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.rL.textAlign(zX, 1), bD.rL.textBaseline(zX, 1), nA(this))
	}, this.a3U = function(aA2) {
		0 === aE.a1O || u.iE() || aA2 !== aE.nr && (aE.nr = aA2, bk.resize(), bi.dq = !0, aE.hb) && (a9x = bi.eZ + 2e3, nA(this))
	}, this.hf = function(fZ, fb) {
		if (!aE.hb) return !1;
		if (fZ < a9w.fZ || fb < a9w.fb || fZ > a9w.fZ + a9w.j) return a9y && function(su, fZ, fb) {
			var fS = a9z.length,
				a9p = Math.floor(.5 * a9w.k),
				k = fS * a9p,
				no = Math.floor(Math.floor(a9w.fZ) + .3 * a9w.j - .5),
				k = Math.floor(Math.floor(a9w.fb) - k),
				j = Math.floor(.4 * a9w.j + 2.5);
			return a9y = !1, bi.dq = !0, fZ < no || no + j < fZ || fb < k || (aA0 = aA6(0, Math.floor((fb - k) / a9p), fS - 1), nA(su)), !0
		}(this, fZ, fb);
		if ((fZ -= a9w.fZ) < .3 * a9w.j) a9y = !1, this.a3U(!aE.nr);
		else {
			if (fZ < .7 * a9w.j) return a9y = !a9y, bi.dq = !0;
			this.a3W(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a3W(!0), this.a3W = function(aA4) {
		2 === aE.a1O ? (this.a3U(!1), u.v(3)) : (a9y = !1, this.a6D = !this.a6D, this.a6D ? (aN.hc && aN.a3V(), a1.a2.setState(1)) : aA4 || aN.a7B(), bi.dq = !0, nA(this))
	}, this.aA5 = function() {
		this.a6D = !1, aN.a7B(), bi.dq = !0, nA(this)
	}, this.a3D = function(fZ, fb) {
		return !!aE.nr && (0 <= aN.hf(fZ, fb) || (aE.hb ? ((bi.eZ > a9x || !this.hf(fZ, fb)) && aT.hf(fZ, fb), bi.dq = !0, a9x = bi.eZ + 2e3) : aT.hf(fZ, fb)), !0)
	}, this.ee = function() {
		aE.hb && aE.nr && bi.eZ > a9x - 1e3 && bi.eZ < a9x && (bi.dq = !0)
	}, this.a1X = function() {
		aE.hb && (this.a6D = !1, bi.dq = !0, nA(this))
	}, this.vw = function() {
		if (aE.hb) {
			if (aE.nr) {
				if (bi.eZ > a9x) return;
				if (bi.eZ > a9x - 1e3) return vx.globalAlpha = aA6(0, (1e3 - (bi.eZ - (a9x - 1e3))) / 1e3, 1), aA7(), void(vx.globalAlpha = 1)
			}
			aA7()
		}
	}
}

function cM() {
	var aAG, aAH, j, fZ, fb, aAI, aAJ;
	this.di = function() {
		aAG = new Array(2), aAH = new Array(2), this.nt = !1, aAJ = aAI = j7 = j6 = 0, ie = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ib() ? .072 : .0502) * i.ic)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aAG[aC] = document.createElement("canvas"), aAG[aC].width = j, aAG[aC].height = j, aAH[aC] = aAG[aC].getContext("2d", {
			alpha: !0
		});
		this.a9j(),
			function() {
				for (var aAa = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aAH[aC].clearRect(0, 0, j, j), aAH[aC].fillStyle = bE.oH, aAH[aC].beginPath(), aAH[aC].arc(j / 2, j / 2, j / 2 - aAa, 0, 2 * Math.PI), aAH[aC].fill(), aAH[aC]
					.lineWidth = aAa, aAH[aC].fillStyle = bE.oO, aAH[aC].strokeStyle = bE.oO, aAH[aC].beginPath(), aAH[aC].arc(j / 2, j / 2, j / 2 - aAa, 0, 2 * Math.PI), aAH[aC].stroke(), za(aAH[aC], 0, 0, j, aAa, .3, 0 === aC)
			}()
	}, this.zS = function() {
		return -j6 / ie
	}, this.zT = function() {
		return -j7 / ie
	}, this.o3 = function(aAN, il) {
		j6 = ie * aAN - il
	}, this.o4 = function(aAO, im) {
		j7 = ie * aAO - im
	}, this.hf = function(aAM, a7i) {
		return aE.nr || ! function(aAM, a7i) {
			return Math.pow(aAM - (fZ + j / 2), 2) + Math.pow(a7i - (fb + j / 2), 2) < j * j / 4 || Math.pow(aAM - (fZ + j / 2), 2) + Math.pow(a7i - (fb + 2 * j), 2) < j * j / 4
		}(aAM, a7i) || bm.eW.data[8].value ? (aI.o6() && (this.nt = !0, aAI = aAM, aAJ = a7i), !1) : a7i < fb + 1.25 * j ? this.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a2u = function(aAM, a7i) {
		var aAP, aAQ, ip, is;
		return !aI.o6() || (aAP = j6, aAQ = j7, j6 += ip = aAI - aAM, j7 += is = aAJ - a7i, ag.a2u(ip, is), this.aAR(), aAI = aAM, aAJ = a7i, aAP !== j6) || aAQ !== j7
	}, this.a2x = function(m2, m3, deltaY) {
		var o0;
		if (aI.o6()) {
			if (0 < deltaY) o0 = (o0 = 500 / (500 + deltaY)) < .5 ? .5 : o0;
			else {
				if (!(deltaY < 0)) return !1;
				o0 = 2 < (o0 = (500 - deltaY) / 500) ? 2 : o0
			}
			this.aAS(m2, m3, o0), bi.dq = !0
		}
		return !0
	}, this.aAS = function(fZ, fb, f6) {
		var a3n;
		f6 = a3n = (a3n = 1024 < (a3n = f6) * ie ? 1024 / ie : a3n) * ie < .125 ? .125 / ie : a3n, ag.zoom(f6, fZ, fb),
			function(a3n, m2, m3) {
				ie *= a3n, j6 = (j6 + m2) * a3n - m2, j7 = (j7 + m3) * a3n - m3, aT.aAR()
			}(f6, fZ, fb)
	}, this.aAR = function() {
		var aAV = i.j / 16,
			aAW = 0,
			aAX = i.k / 16,
			aAY = 0;
		j6 < -i.j + aAV && (aAW = -i.j + aAV - j6), j6 > ie * bV.fd - aAV && (aAW = ie * bV.fd - aAV - j6), j7 < -i.k + aAX && (aAY = -i.k + aAX - j7), j7 > ie * bV.fe - aAX && (aAY = ie * bV.fe - aAX - j7), j6 += aAW, j7 += aAY, bd.o5(), ag.aAZ(
			aAW, aAY)
	}, this.a9j = function() {
		fZ = i.j - j - bf.gap, fb = Math.floor(i.k / 2 - 1.25 * j)
	}, this.vw = function() {
		bm.eW.data[8].value || (vx.drawImage(aAG[0], fZ, fb), vx.drawImage(aAG[1], fZ, Math.floor(fb + 3 * j / 2)))
	}
}

function cN() {
	var h, aAb, aAc, aAd, gap, aAe, aAf, aAg, aAh, aAi, a74, aAj, hX, aAk, a8j, aAl, aAm;

	function aAq() {
		aAd = Math.floor(.2 * (a1.a2.ib() ? .07 : .035) * i.ic), aAd = a7f(a1.a2.ib() ? 3 : 1, aAd);
		var aAt = i.j / (h.length + gap);
		aAd = aAd < aAt ? aAt : aAd, a8j = Math.floor((1 - gap) * aAd), aAb = 0, aAu()
	}

	function aAu() {
		aAb = (aAb = aAb < -20 ? -20 : aAb) > (h.length - 15) * aAd ? (h.length - 15) * aAd : aAb, aAf = Math.floor(aAb / aAd), aAg = (aAg = aAf + Math.floor(i.j / aAd)) > h.length - 1 ? h.length - 1 : aAg, aAf = (aAf = aAg < aAf ? aAg : aAf) < 0 ?
			0 : aAf;
		var li = aAg;
		aAe = aAc / h[li];
		for (var aC = aAg - 1; aAf <= aC; aC--) h[aC] > h[li] && (li = aC, aAe = aAc / Math.pow(h[aC], aAk))
	}

	function aAx(fZ) {
		fZ = Math.floor((aAb + i.j - fZ - gap * aAd) / aAd);
		return (fZ = fZ < -1 ? -1 : -1 === fZ ? 0 : fZ > h.length - 1 ? -1 : fZ) !== aAh && (aAh = fZ, -1 === aAl && 0 === aAh && aU.aAn && (aAl = setInterval(aAy, 100)), 1)
	}

	function aAz(aC) {
		var aB1 = Math.floor(aAe * Math.pow(h[aC], aAk));
		vx.fillRect(aAb + i.j - (aC + 1) * aAd, i.k - aB1, a8j, aB1)
	}

	function aAy() {
		var h0;
		0 !== (aAh = 8 === ab.a2Y() ? -1 : aAh) ? (aAm = (new Date).getTime(), clearInterval(aAl), aAl = -1) : (h0 = h[1] / 864e3, -1 !== aAm && (h0 += ((new Date).getTime() - aAm) * h[1] / 864e5, aAm = -1), 0 < h0 && (h[0] += Math.floor(h0), bi
			.dq = !0))
	}
	this.aAn = !1, this.di = function() {
		aAm = aAl = -1, aAh = -(aAk = 1), this.aAo = !1, hX = 0, aAj = new Date, aAb = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAc = Math.floor(.15 * i.k), aAi = (aAi = Math.floor((a1.a2.ib() ? .018 : .0137) * i.ic)) < 2 ? 2 : aAi, a74 = bD.rL.t9(1, aAi), aAq()
	}, this.aAr = function(aAs) {
		var aC;
		for (this.aAn = !0, aC = 0; aC < aAs.length; aC++) h.unshift(aAs[aC]);
		aAq(), bi.dq = !0
	}, this.aAv = function() {
		aAu()
	}, this.a2u = function(fZ, fb) {
		fb > i.k - .6 * aAc ? this.aAo ? fZ !== hX && (aAb += fZ - hX, hX = fZ, aAu(), aAx(fZ), this.aAo = -1 !== aAh, bi.dq = !0) : aAx(fZ) && (bi.dq = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aAh && (this.aAo = !1, aAh = -1, bi.dq = !0)
	}, this.a2x = function(fZ, deltaY) {
		-1 !== aAh && (aAb += Math.floor(deltaY), aAu(), aAx(fZ), bi.dq = !0)
	}, this.hf = function(fZ, fb) {
		this.a2u(fZ, fb), -1 !== aAh && (hX = fZ, this.aAo = !0)
	}, this.a3J = function() {
		-1 !== aAh && (this.aAo = !1)
	}, this.vw = function() {
		vx.fillStyle = bE.oR;
		for (var aB2, month, ea, tj, aB5, aB6, np, aB7, aB8, aC = aAg; aAf <= aC; aC--) aAz(aC);
		this.aAn && 0 === aAf && (vx.fillStyle = bE.oz, aAz(0)), -1 !== aAh && (vx.fillStyle = bE.oQ, aAz(aAh)), -1 !== aAh && (vx.font = a74, bD.rL.textBaseline(vx, 2), (ea = new Date).setTime(aAj.getTime() - 1e3 * aAh * 60 * 60 * 24), month =
			"month", aB2 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ea), aB2 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ea)), aB2 = aB2 + ", " + ea.getUTCDate() + " " + month + " " + ea.getFullYear(), month = 1 === h[aAh] ? L(115) : L(116), month = bD.sK.a0f(h[aAh]) + " " + month, ea = Math.floor(vx.measureText(aB2).width), tj = Math
			.floor(vx.measureText(month).width), aB5 = Math.floor(.5 * (ea + aAi)), aB6 = (aB6 = aAb + i.j - (aAh + 1) * aAd) < aB5 ? aB5 : aB6 > i.j - aB5 ? i.j - aB5 : aB6, np = i.k - Math.floor(aAe * Math.pow(h[aAh], aAk)), aB7 = Math
			.floor(1.1 * aAi), aB8 = np > i.k - aB7 ? i.k - aB7 : np, vx.fillStyle = bE.oL, vx.fillRect(i.j - tj - aAi, aB8 - aB7, tj + aAi, aB7), vx.fillRect(aB6 - aB5, i.k - aB7, ea + aAi, aB7), vx.fillStyle = bE.oO, bD.rL.textAlign(vx, 2),
			vx.fillText(month, Math.floor(i.j - .5 * aAi), aB8), bD.rL.textAlign(vx, 1), vx.fillText(aB2, aB6, i.k), vx.strokeStyle = bE.oS, vx.lineWidth = 1, vx.beginPath(), vx.moveTo(0, np), vx.lineTo(i.j, np), vx.closePath(), vx.stroke())
	}
}

function cO() {
	var a74, j, fb, aB9, aBA, aBB, canvas, zX, a8c, a4u, aBC, aBD, aBE, aBF;
	this.fZ = 0, this.k = 0, this.di = function() {
		aBB = aE.a5o, aBD = "rgba(0,100,0,0.8)", aBE = "rgba(150,0,0,0.8)", a8c = aBC = !0, a4u = ah.hU[aE.fC], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ib() ? .305 : .24) * i.ic), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a74 = bD.rL.t9(1, Math.floor(.8 * this.k)), aBA = bD.rL.t9(1, Math.floor(.45 * this.k)), aBF = Math.floor(.5 * this.k), bV.xq
			.font = a74, fb = bf.gap, aB9 = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, zX = canvas.getContext("2d", {
				alpha: !0
			}), bD.rL.textBaseline(zX, 1), bD.rL.textAlign(zX, 1), this.aBG()
	}, this.a95 = function() {
		return a1.a2.ib() && i.j < 1.2 * i.k
	}, this.a9j = function() {
		this.a95() ? this.fZ = i.j - j - bf.gap : this.fZ = Math.floor(aW.aBH() + (i.j - aW.aBH() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.n9 = function() {
		a8c && (a8c = !1, this.aBG())
	}, this.aBG = function() {
		zX.font = a74, zX.clearRect(0, 0, j, this.k), zX.fillStyle = aBC ? aBD : aBE, zX.fillRect(0, 0, j, this.k), zX.fillStyle = bE.oQ;
		var ej = this.aBI(),
			aBK = (this.aBJ(), zX.fillStyle = ah.hU[aE.fC] >= af.kT(aE.fC) ? bE.ow : bE.oO, bD.sK.a0f(a4u)),
			aBK = (zX.fillText(aBK, Math.floor(j / 2), aBF), zX.measureText(aBK).width),
			aBL = (zX.font = aBA, zX.fillStyle = 9 === ej ? bE.pW : bE.oO, af.aBM),
			aBN = "+" + aBL,
			tj = zX.measureText(aBN).width,
			aBO = Math.floor(this.k / 12),
			aBK = .5 * (j + aBK) + aBO;
		(aBK + tj + aB9 <= j || 1e3 <= aBL && (aBN = "+" + Math.floor(aBL / 1e3) + "K", aBK + (tj = zX.measureText(aBN).width) + aB9 <= j)) && zX.fillText(aBN, Math.floor(aBK + .5 * tj), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && zX.fillText(9 - ej, Math.floor(2 * aB9 + aBO), Math.floor(.3 * this.k)), zX.fillStyle = bE.oO, zX.fillRect(0, 0, j, 1), zX.fillRect(0, 0, 1, this.k), zX.fillRect(0, this.k - 1, j, 1), zX.fillRect(j - 1, 0, 1,
				this.k)
	}, this.aBI = function() {
		var ej = bi.kk() % 100,
			yV = (ej = 9 - bO.ft(ej -= ej % 10, 10), Math.floor(ej * (this.k - aB9) / 9));
		return zX.fillRect(0, yV, aB9, this.k - yV), zX.fillRect(j - aB9, yV, aB9, this.k - yV), ej
	}, this.aBJ = function() {
		zX.fillRect(aB9, this.k - aB9, Math.floor((j - 2 * aB9) * ah.hU[aE.fC] / aBB), aB9)
	}, this.ee = function() {
		var h0 = aE.fC;
		bD.go.he(h0) && (h0 = ah.hU[h0] - ah.a4t[h0], a4u !== h0 ? (aBB = a7f(h0, aBB), aBC = a4u < h0 && 10 <= h0, a4u = h0, a8c = !0) : bi.kk() % 10 == 9 && (a8c = !0))
	}, this.vw = function() {
		0 === ah.nN[aE.fC] || aE.hq || 2 === ah.a4k[aE.fC] || vx.drawImage(canvas, this.fZ, fb)
	}
}

function cP() {
	var aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBW, aBX, aBY, aBZ, aBa, aBb, aBc, aBd, aBe, aBf, aBg, aBh, aBi, aBj, aBk, position, aBl, aBm, aBn, aBo, aBp, aBq = 1,
		aBr = 1,
		aBs = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fC;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kY[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kY[aE.fC]);
	}

	function aBu() {
		aBV.clearRect(0, 0, aBP, a9K),
			aBV.fillStyle = aBp ? bE.pJ : bE.pF,
			aBV.fillRect(0, 0, aBP, aBa),
			aBV.fillStyle = bE.oK,
			aBV.fillRect(0, aBa, aBP, a9K - aBa);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kY[aE.fC]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBk = -1;
		if (__fx.leaderboardFilter.enabled && aBk >= __fx.leaderboardFilter.filteredLeaderboard.length) aBk = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aBw(ownClanIndex - position, bE.oo);
			})() :
			(playerPos >= position && aBw(playerPos - position, bE.oo),
				0 !== kY[aE.fC] && 0 === position && aBw(0, bE.pN))
		),
		-1 !== aBk && aBw(aBk, bE.oP),
			aBV.fillStyle = bE.oK,
			//console.log("drawing", aBk),
			aBV.clearRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, __fx.leaderboardFilter.tabBarOffset);
		aBV.fillRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, __fx.leaderboardFilter.tabBarOffset);
		aBV.fillStyle = bE.oO,
			aBV.fillRect(0, aBa, aBP, 1),
			aBV.fillRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, 1),
			__fx.leaderboardFilter.drawTabs(aBV, aBP, a9K - __fx.leaderboardFilter.tabBarOffset, bE.oo),
			aBV.fillRect(0, 0, aBP, bf.a0M),
			aBV.fillRect(0, 0, bf.a0M, a9K),
			aBV.fillRect(aBP - bf.a0M, 0, bf.a0M, a9K),
			aBV.fillRect(0, a9K - bf.a0M, aBP, bf.a0M), aBV.font = aBQ, bD.rL.textBaseline(aBV, 1), bD.rL.textAlign(aBV, 1), aBV.fillText(aBs, Math.floor((aBP + aBa - 22) / 2), Math.floor(aBY + aBR / 2));
		__fx.playerList.drawButton(aBV, 12, 12, aBa - 22);
		var fl, h1 = playerPos < position + aBT - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h1 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aBT)
				position = (rivalsCount > aBT ? rivalsCount : aBT) - aBT;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aBT; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hG[repId], ah.zr[repId], ah.a4k[repId]]);
					ah.hG[repId] = rivalsEntry.territory;
					ah.zr[repId] = "[" + rivalsEntry.clan + "]";
					ah.a4k[repId] = 0;
				}
				for (aBV.font = aBS, bD.rL.textAlign(aBV, 0), fl = aBT - h1; 0 <= fl; fl--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fl + position];
					if (rivalsEntryLeft !== undefined)
						aBx(rivalsEntryLeft.representativeId), aBy(fl, fl + position, rivalsEntryLeft.representativeId);
				}
				for (bD.rL.textAlign(aBV, 2), fl = aBT - h1; 0 <= fl; fl--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fl + position];
					if (rivalsEntryRight !== undefined)
						aBx(rivalsEntryRight.representativeId), aBz(fl, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hG[entry[0]] = entry[1];
					ah.zr[entry[0]] = entry[2];
					ah.a4k[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aBT)
				position = (result.length > aBT ? result.length : aBT) - aBT;
			//if (position >= result.length) position = result.length - 1;
			for (aBV.font = aBS, bD.rL.textAlign(aBV, 0), fl = aBT - h1; 0 <= fl; fl--) {
				const pos = result[fl + position];
				if (pos !== undefined)
					aBx(mO[pos]), aBy(fl, pos, mO[pos]);
			}
			for (bD.rL.textAlign(aBV, 2), fl = aBT - h1; 0 <= fl; fl--) {
				const pos = result[fl + position];
				if (pos !== undefined)
					aBx(mO[pos]), aBz(fl, mO[pos]);
			}
		} else {
			for (aBV.font = aBS, bD.rL.textAlign(aBV, 0), fl = aBT - h1; 0 <= fl; fl--)
				aBx(mO[fl + position]), aBy(fl, fl + position, mO[fl + position]);
			for (bD.rL.textAlign(aBV, 2), fl = aBT - h1; 0 <= fl; fl--)
				aBx(mO[fl + position]), aBz(fl, mO[fl + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h1 && (aBx(aE.fC), bD.rL.textAlign(aBV, 0), aBy(aBT - 1, kY[aE.fC], aE.fC), bD.rL.textAlign(aBV, 2), aBz(aBT - 1, aE.fC)), 0 === position && (h1 = .7 * aBb / ac.get(4).height, aBV.setTransform(
			h1, 0, 0, h1, Math.floor(aBc + .58 * aBb + .5 * h1 * ac.get(4).width), Math.floor(aBY + aBR + .4 * aBb)), aBV.imageSmoothingEnabled = !0, aBV.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aBV.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBx(player) {
		aE.iM && (aBV.fillStyle = bj.aC1[bj.aC2[player]])
	}

	function aBw(aC, aC3) {
		aBV.fillStyle = aC3, aC = aBT - 1 < aC ? aBT - 1 : aC;
		aC3 = Math.floor((aC === aBT - 1 ? 2 : 0 === aC ? 1.15 : 1) * aBb), aC3 = aC === aBT - 2 ? Math.floor(aBa + 9.15 * aBb) - Math.floor(aBa + 8.15 * aBb) : aC3;
		aBV.fillRect(0, Math.floor(aBa + (aC + (0 === aC ? 0 : .15)) * aBb), aBP, aC3)
	}

	function aBy(x0, a58, aC) {
		aBV.fillText(aBg[a58], aBc, Math.floor(aBY + aBR + (x0 + .5) * aBb)), 1 === ah.a4k[aC] && (aBV.font = "italic " + aBS);
		a58 = Math.floor(aBY + aBR + (x0 + .5) * aBb);
		aBV.fillText(ah.zr[aC], aBd, a58), 0 !== ah.a4k[aC] && (aBV.font = aBS), aC < aE.kn && 2 !== ah.a4k[aC] || aBV.fillRect(aBd, a58 + .35 * aBq, aBf[aC], Math.max(1, .1 * aBq))
	}

	function aBz(x0, aC) {
		aBV.fillText(ah.hG[aC], aBe, Math.floor(aBY + aBR + (x0 + .5) * aBb))
	}
	this.di = function() {
		var aC;
		for (u.z.tU[0] = 0, aBo = aBn = aBl = 0, aBp = aBm = !1, aBk = -1, aBT = a1.a2.ib() ? 6 : 10, aBr = (position = 0) === (aBr = bm.eW.data[11].value) ? 10 : 1 === aBr ? 5 : 1, aBj = !1, aBh = new Uint16Array(aBT + 1), aBi = new Uint32Array(
				aBT + 1), aBX = aE.fP, mO = new Uint16Array(aBX), kY = new Uint16Array(aBX), aC = aBX - 1; 0 <= aC; aC--) mO[aC] = aC, kY[aC] = aC;
		this.resize(!0), aBf = new Uint16Array(aE.fP);
		var aBt = Math.floor(aBP - aBd - aBc - aBW);
		for (aBg = new Array(aE.fP), aBV.font = aBS, aC = aE.fP - 1; 0 <= aC; aC--) aBg[aC] = aC + 1 + ".", ah.zr[aC] = bD.zX.a4S(ah.a24[aC], aBS, aBt), aBf[aC] = Math.floor(aBV.measureText(ah.zr[aC]).width);
		aBu()
	}, this.resize = function(di) {
		if (a9K = a1.a2.ib() ? (aBP = Math.floor(.335 * i.ic), Math.floor(aBT * aBP / 8)) : (aBP = Math.floor(.27 * i.ic), Math.floor(aBT * aBP / 10)), aBP = Math.floor(.97 * aBP), (aBU = document.createElement("canvas")).width = aBP, aBU
			.height = a9K, aBV = aBU.getContext("2d", {
				alpha: !0
			}), aBY = .025 * aBP, aBR = .16 * aBP, aBZ = 0 * aBP, aBa = Math.floor(.45 * aBY + aBR), aBb = (a9K - aBR - 2 * aBY - aBZ) / aBT,
			aBU.height = a9K += aBb, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBb * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a9K - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aBP,
			aBQ = bD.rL.t9(1, Math.floor(.55 * aBR)), aBq = Math.floor((a1.a2.ib() ? .67 : .72) * aBb), aBS = bD.rL.t9(0, aBq), aBV.font = aBS, aBc = Math.floor(.04 * aBP), aBd = Math.floor((a1.a2.ib() ? .195 : .18) * aBP), aBW = Math.floor(aBV
				.measureText("00920600").width), aBV.font = aBQ, aBe = aBP - aBc, !di) {
			aBV.font = aBS;
			for (var aC = aE.fP - 1; 0 <= aC; aC--) aBf[aC] = Math.floor(aBV.measureText(ah.zr[aC]).width);
			aBu()
		}
		aBs = bD.zX.a4S(L(117), aBQ, .96 * aBP)
	}, this.aBH = function() {
		return aBP
	}, this.n9 = function(bx, aBv) {
		(aBv || aBj && (bx || bi.kk() % aBr == 0)) && (aBj = !1, aBu())
	}, this.ee = function() {
		! function() {
			for (var fl = aBX - 1; 0 <= fl; fl--) 0 === ah.nN[mO[fl]] && ! function(fl) {
				var aCB = mO[fl];
				aBX--;
				for (var aC = fl; aC < aBX; aC++) mO[aC] = mO[aC + 1], kY[mO[aC]] = aC;
				mO[aBX] = aCB, kY[mO[aBX]] = aBX
			}(fl)
		}();
		for (var aC9, o6 = aBX - 1, fl = 0; fl < o6; fl++) ah.hG[mO[fl]] < ah.hG[mO[fl + 1]] && (aC9 = mO[fl], mO[fl] = mO[fl + 1], mO[fl + 1] = aC9, kY[mO[fl]] = fl, kY[mO[fl + 1]] = fl + 1);
		! function() {
			for (var ea = aBj, h1 = (aBj = !0, kY[aE.fC] >= aBT - 1 ? aBT - 2 : aBT - 1), aC = h1; 0 <= aC; aC--)
				if (aBh[aC] !== mO[aC] || aBi[aC] !== ah.hG[mO[aC]]) return;
			(h1 != aBT - 2 || aBh[aBT] === kY[aE.fC] && aBi[aBT] === ah.hG[aE.fC]) && (aBj = ea)
		}();
		for (var aC = aBT - 1; 0 <= aC; aC--) aBh[aC] = mO[aC], aBi[aC] = ah.hG[mO[aC]];
		aBh[aBT] = kY[aE.fC], aBi[aBT] = ah.hG[aE.fC];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hf = function(fZ, fb) {
		if (a0L(fZ, fb)) {
			if (__fx.utils.isPointInRectangle(fZ, fb, bf.gap + 12, bf.gap + 12, aBa - 22, aBa - 22)) __fx.playerList.display(ah.a24);
			else {
				if (fb - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fZ - bf.gap);
				fZ = aCD(fb);
				0 <= fZ ? (aBl = bi.eZ, aBm = !0, aBn = aBo = fZ, bM.a3X() && (fZ = aA6(-1, aBo, aBT), aBk !== (fZ = fZ === aBT ? -1 : fZ)) && (aBk = fZ, aBu(), bi.dq = !0)) : (aBp && (aBp = !1, aBu(), bi.dq = !0), u.v(10, 0, new aCE({
					aCF: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBu(), bi.dq = !0
	};

	function aCD(fb) {
		return (fb -= bf.gap + aBa) < 0 ? Math.floor(fb / aBb) - 1 : fb < (aBT - 1) * aBb ? Math.floor(fb / aBb) : fb < a9K - aBa ? aBT - 1 : (fb -= a9K - aBa, aBT + Math.floor(fb / aBb))
	}

	function a0L(fZ, fb) {
		return fZ >= bf.gap && fZ < bf.gap + aBP && fb >= bf.gap && fb < bf.gap + a9K
	}
	this.a2u = function(fZ, fb) {
		var ea, aCC;
		if (__fx.utils.isPointInRectangle(fZ, fb, bf.gap + 12, bf.gap + 12, aBa - 22, aBa - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fZ, fb, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fZ - bf.gap)) return aCC = aCD(fb), fZ = a0L(fZ, fb), fb = !(!(aCC < 0 && fZ) || bM.a3X()), aBm ? (ea = position, (position = aA6(0, position += aBn - aCC, aE.fP - aBT)) !== ea ? (aBp = fb,
			aCC = aA6(-1, aBn = aCC, aBT), aBk = aCC = aCC !== aBT && fZ ? aCC : -1, aBu(), bi.dq = !0) : aBp !== fb && (aBp = fb, aBu(), bi.dq = !0), !0) : (aCC = (aCC = aA6(-1, aCC, aBT)) === aBT || !fZ || bM.a3X() ? -1 : aCC, (aBk !==
			aCC || aBp !== fb) && (aBk = aCC, aBp = fb, aBu(), bi.dq = !0))
	}, this.a3J = function(fZ, fb) {
		if (!aBm) return !1;
		aBm = !1;
		var aCC = aCD(fb);
		var isEmptySpace = false;
		return bM.a3X() && -1 !== aBk && (aBk = -1, aBu(), bi.dq = !0), bi.eZ - aBl < 350 && aBo === aCC && -1 !== (aCC = (aCC = aA6(-1, aCC, aBT)) !== aBT && a0L(fZ, fb) ? aCC : -1) && (fZ = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aCC + position] === undefined, __fx.leaderboardFilter.rivalsData[aCC + position]?.representativeId ?? aE.fC) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mO[__fx.leaderboardFilter.filteredLeaderboard[aCC + position] ?? (isEmptySpace = true, kY[aE.fC])]) : mO[aCC + position]),
			aCC === aBT - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kY[aE.fC]) >=
			position + aBT - 1 && (fZ = aE.fC), !isEmptySpace && aE.iM && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fZ, ah.a24, aE.l7), 0 === ah.nN[fZ] || isEmptySpace || aE.hq && !aE.l7 && !aE.hb &&
			fZ !== aE.fC || aI.nj(fZ, 800, !1, 0)), !0
	}, this.a2x = function(fZ, fb, deltaY) {
		var aCI;
		return !(aBm || aE.nr || (aCI = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a0L(fZ, fb)) || (fZ = (fZ = aA6(-1, aCD(fb), aBT)) === aBT || bM.a3X() ? -1 : fZ, 0 < deltaY ? position < aE.fP - aBT && (position += Math.min(aE.fP - aBT -
			position, aCI), aBk = fZ, aBu(), bi.dq = !0) : 0 < position && (position -= Math.min(position, aCI), aBk = fZ, aBu(), bi.dq = !0), 0))
	}, this.vw = function() {
		vx.drawImage(aBU, bf.gap, bf.gap)
	}
}

function cQ() {
	var canvas, zX, fZ, fb, aB1, aCJ, gap, aCK, fontSize, aCL, aCM, aCN, aCO, aCP, aCQ, aCR, aCS, aCT;

	function aCX() {
		zX.clearRect(0, 0, aX.j, aX.k), zX.fillStyle = bE.oL, zX.fillRect(0, 0, aX.j, aX.k), zX.fillStyle = bE.oj, f6 = 0 < aCR ? aCR : aCO[4] / 1e4, zX.fillRect(0, aX.k - aB1 - 1, Math.floor(f6 * aX.j), aB1), zX.fillStyle = bE.oO, zX.fillRect(0, 0,
			aX.j, 1), zX.fillRect(0, 0, 1, aX.k), zX.fillRect(aX.j - 1, 0, 1, aX.k), zX.fillRect(0, aX.k - 1, aX.j, 1), zX.fillRect(0, aX.k - aB1 - 1, aX.j, 1);
		for (var f6, aCZ, ea = 0, aC = 0; aC < aCN.length; aC++) aCP[aC] ? (bD.rL.textAlign(zX, 0), aCZ = Math.floor((aCJ - aB1 + 2 * aCK) * (aC - ea + 1) / (aCN.length + 1) - .7 * aCK), zX.fillText(aCN[aC], gap, aCZ), bD.rL.textAlign(zX, 2), 5 ===
			aC && 0 !== ah.nN[aE.fC] && ah.hU[aE.fC] >= af.kT(aE.fC) ? (zX.fillStyle = bE.pL, zX.fillText(aCV(aC), aX.j - gap, aCZ), zX.fillStyle = bE.oO) : zX.fillText(aCV(aC), aX.j - gap, aCZ)) : ea++
	}

	function aCV(aC) {
		return aC < 3 ? aCO[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.sK.a5S(aCO[aC] / 100, 2) : aC < 7 ? bD.sK.a0f(aCO[aC]) : aC === 7 ? aX.aCa(aCO[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hG, aE.fC) : __fx.utils.getDensity(aE.fC)
	}

	function aCU() {
		ah.hG[aE.fC] !== aCO[6] && (aCO[6] = ah.hG[aE.fC], aCL++)
	}
	this.di = function() {
		aCR = aCS = 0, (aCM = new Array(8))[0] = L(118), aCM[1] = aE.l7 ? L(119) : L(120), aCM[2] = L(121), aCM[3] = L(122), aCM[4] = L(123), aCM[5] = L(124, 0, "Interest"), aCM[6] = L(125), aCM[7] = L(126),
			aCM.push("Max Troops", "Density"), // add aCM
			(aCN = new Array(aCM.length)).fill(""), (aCO = new Array(aCM.length))[0] = aE.l7 ? 0 : aE.kn, aCO[1] = aE.l7 ? am.lJ : aE.l9, aCO[2] = aE.a1Q, aCO[3] = 0, aCO[4] = bO.ft(1e4 * ah.hG[0], Math.max(aE.kX, 1)), aCO[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.ft(700 * aE.data.iIncomeValue, 64) : bO.ft(700 * aE.data.iIncomeData[aE.fC], 64), aCO[6] = 0, aCU(), aCO[7] = 0, aCQ = aCV(6), (aCP = new Array(aCM.length)).fill(!0), aCT = 0, aCT =
			aE.l7 ? (aCP[0] = !1, aCP[2] = !1, aCP[3] = !1, 3) : (aCP[3] = !1, 1), aCL = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ib() ? .1646 : .126) * 1.25 * i.ic), this.k = Math.floor(1.18 * this.j), aB1 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aCK = .04 * this.j, aCJ = this.k, this.k -= Math.floor(aCT * (this.k -
			2 * aB1) / aCM.length), fontSize = Math.floor(.7 * (aCJ - aB1) / aCM.length);
		var a74 = bD.rL.t9(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a74, j) {
				for (var aC = 0; aC < aCN.length; aC++) aCN[aC] = bD.zX.a4S(aCM[aC], a74, j)
			}((zX = canvas.getContext("2d", {
				alpha: !0
			})).font = a74, .575 * this.j), bD.rL.textBaseline(zX, 1), zX.lineWidth = 1, this.a5h(), this.a9j(), aV.a9j(), aCX()
	}, this.a9j = function() {
		fZ = i.j - this.j - bf.gap
	}, this.aCY = function() {
		fb = bf.gap
	}, this.a5h = function() {
		fb = bf.gap + (aV.a95() && 0 !== ah.nN[aE.fC] && !aE.hq ? aV.k + bf.gap : 0)
	}, this.n9 = function(bx) {
		(bx || 100 <= aCL) && (aCL = 0, aCX())
	}, this.a6Q = function() {
		return aCO[7]
	}, this.aCa = function(value) {
		var li = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * li) / 1e3);
		return value < 10 ? li + ":0" + value : li + ":" + value
	}, this.ee = function() {
		var aCl, per;
		aCP[0] && aE.a1R - aE.a1Q !== aCO[0] && (aCO[0] = aE.a1R - aE.a1Q, aCL++), am.lJ - aCO[0] !== aCO[1] && (aCO[1] = am.lJ - aCO[0], aCL++), this.n0(), (aCl = af.aCm(aE.fC)) !== aCO[5] && (aCO[5] = aCl, aCL++), aCU(), aCO[7] += bi.aCn, aCl =
			aCV(7), aCQ !== aCl && (aCQ = aCl, aCL += 100), aCl = aE.iM ? bk.lK() : ah.hG[mO[0]], per = bO.ft(1e4 * aCl, Math.max(aE.kX, 1)), aCO[3] = aCl, aCO[4] !== per && (aCL++, aCO[4] = per), 8 === aE.l5 && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.go.he(aC)) return bU.a10.a1N(), 1;
				return
			}() || aCO[3] < aE.kX || ! function() {
				for (var aC = am.lJ - 1; 0 <= aC; aC--)
					if (0 < ah.gu[am.lO[aC]].length) return;
				return 1
			}() || bQ.lc.aCk().length || aE.iM && bk.lK(1) < aE.kX || bU.a10.a1N()
	}, this.n0 = function() {
		aCP[2] && aE.a1Q !== aCO[2] && (aCO[2] = aE.a1Q, aCL += 2 === aE.a1O ? 100 : 1)
	}, this.aCh = function() {
		return aCO[3] === aE.kX
	}, this.aCo = function(aC) {
		var u0, aCp, ea;
		return 2 !== aE.a1O && (aC % 2 == 1 && (aW.n9(1, 1), bi.dq = !0), aC === aE.a5q ? (aCR = 0, aCX(), !1) : (-1 !== aC || 0 !== aCS) && (aCp = aCR, aCR = aE.hb ? aC / aE.a5q : (ea = performance.now(), 0 <= aC && (u0 = ea - 392 * aC, aCS =
			0 === aC || u0 < aCS ? u0 : aCS), 1 < (aCR = (ea - aCS) / (392 * aE.a5q)) ? 1 : aCR), aCX(), aCR !== aCp))
	}, this.vw = function() {
		vx.drawImage(canvas, fZ, fb)
	}
}

function cR() {
	var iE, aCq, j, k, a9p, aCr, aCs, a96, canvas, na, aCt;

	function zT() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.di = function() {
		aCt = iE = !1, a9p = .61, aCr = .07, aCs = .09, na = a96 = k = 0
	}, this.resize = function() {
		var zX, no, ej, aCy, aCz, a79;
		iE && (j = aCu(j = a1.a2.ib() ? Math.floor(.69 * i.ic) : Math.floor(.5 * i.ic), a7f(i.j - 2 * bf.gap, 10)), j = aCu(j, Math.floor(3.57 * a7f(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, zX = canvas.getContext("2d", {
				alpha: !0
			}), no = Math.floor(1 + k / 40), zX.clearRect(0, 0, j, k), zX.fillStyle = bE.oL, zX.fillRect(no, no, j - 2 * no, k - 2 * no), zX.lineJoin = "bevel", zX.lineWidth = 2 * no, zX.strokeStyle = bE.oO, zX.strokeRect(no, no, j - 2 * no,
				k - 2 * no), zX.imageSmoothingEnabled = !1, ej = ac.get(aCq), aCy = ej.width, a79 = (1 === aCq ? .85 : 21 === aCq ? .666 : .9) * a9p * k / (aCz = ej.height), zX.setTransform(a79, 0, 0, a79, Math.floor((j - a79 * aCy) / 2),
				Math.floor((k - a79 * aCz) / 2)), zX.drawImage(ej, 0, 0), zX.setTransform(1, 0, 0, 1, Math.floor(j - aCs * k - aCr * k - no), Math.floor(no + aCr * k)),
			function(zX, fS) {
				zX.lineWidth = Math.floor(1 + k / 80), zX.strokeStyle = bE.oO, zX.beginPath(), zX.moveTo(0, 0), zX.lineTo(fS, fS), zX.moveTo(0, fS), zX.lineTo(fS, 0), zX.stroke()
			}(zX, Math.floor(aCs * k)), zX.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fu, aCw, a9b, aCx) {
		iE || aCx && aCt || (aCq = a9b ? 21 : fu ? 1 : 2, iE = aCt = !0, this.resize(), aM.sb(), aS.a9W(), na = bi.eZ, a96 = aCw ? 1 : 0)
	}, this.ee = function() {
		!iE || 1 <= a96 || (a96 = 1 < (a96 += 5e-4 * (bi.eZ - na)) ? 1 : a96, na = bi.eZ, bi.dq = !0)
	}, this.hf = function(fZ, fb) {
		return !(!iE || a96 <= 0 || (fZ -= Math.floor((i.j - j) / 2), fb -= zT(), fZ < 0) || fb < 0 || j < fZ || k < fb || (j - k / 3 < fZ && fb < k / 3 && (iE = !1, bi.dq = !0), 0))
	}, this.vw = function() {
		!iE || a96 <= 0 || (vx.globalAlpha = a96, vx.drawImage(canvas, Math.floor((i.j - j) / 2), zT()), vx.globalAlpha = 1)
	}
}

function dS() {
	var aD1, aD2 = new Uint8Array(5),
		aD3 = new Uint8Array(5);
	this.aD4 = new aD5, this.di = function() {
		for (var fu = bm.eW.data[119].value, aC = 0; aC < aD2.length; aC++) aD2[aC] = (fu >> 2 * aC) % 4
	}, this.a62 = function() {
		aD1 = [L(127), "", L(128, [ba.aD6[28]]), L(129, [ba.aD6[26]]), L(130, [ba.aD6[0]])], this.aD4.di()
	}, this.ee = function() {
		this.aD4.ee()
	}, this.a6n = function(id) {
		1 < id && bM.rn() || ! function(eH) {
			if (3 === aD2[eH] || 1 === aD3[eH]) return;
			if (aD3[eH] = 1, !(Math.random() < .6)) {
				aD2[eH]++;
				for (var fu = 0, aC = 0; aC < aD2.length; aC++) fu += aD2[aC] << 2 * aC;
				bm.pp.pq(119, fu)
			}
			return 1
		}(id) || aO.a7k(aD1[id])
	}
}

function aD5() {
	var aD8;
	this.di = function() {
		aD8 = !1
	}, this.ee = function() {
		var h0;
		if (function() {
				if (!aD8) {
					if (bi.kk() % 30 != 9) return;
					if (!bD.go.mK(90)) return;
					aD8 = !0
				}
				return 1
			}() && (! function() {
				var rD = aO.a86(956);
				if (rD) {
					if (bD.go.ll(rD.player)) return 1;
					aO.a85(956, 0)
				}
				return
			}() && (-1 === (h0 = (aE.iM ? function() {
				var id = bk.lM(),
					fS = am.lJ;
				if (bj.lA[id])
					for (var a1C = am.lO, fQ = bj.fQ, aC = 0; aC < fS; aC++) {
						var h0 = a1C[aC];
						if (fQ[h0] !== id) return h0
					} else if (1 < fS) return mO[fS - 1];
				return -1
			} : function() {
				for (var aDG = am.lJ, lh = am.lO, aDH = kY, aC = 0; aC < aDG; aC++) {
					var h0 = lh[aC];
					if (0 !== aDH[h0]) return h0
				}
				return -1
			})()) ? ! function() {
				var rD = aO.a86(957);
				if (rD && rD.a7b) {
					if (ad.fJ(rD.a7b.fE << 2)) return 1;
					aO.a85(957, 0)
				}
				return
			}() : (aO.zq(0, L(131, [ah.zr[h0]]), 956, h0, bE.oO, bE.oL, -1, !0), 0)))) {
			var fS = ap.jR.lx;
			if (0 !== fS)
				for (var eW = ap.jR.eW, aC = 0; aC < fS; aC++) {
					var fE = eW[aC];
					if (ad.fJ(fE << 2)) return void aO.zq(0, L(132, [bP.fa(fE), bP.fc(fE)]), 957, 0, bE.oO, bE.oL, -1, !0, void 0, {
						fl: 1,
						fE: fE
					})
				}
		}
	}
}

function dT() {
	this.aDI = new aDJ, this.di = function() {
		this.aDI.resize()
	}
}

function aDJ() {
	this.resize = function() {
		var aC, aDK = document.head.querySelector("style#ss");
		if (aDK)
			for (aC = aDK.sheet.cssRules.length - 1; 0 <= aC; aC--) aDK.sheet.deleteRule(0);
		else(aDK = document.createElement("style")).id = "ss", document.head.appendChild(aDK);
		var a9x = "::-webkit-scrollbar",
			e2 = bD.rL.rU(bf.tB),
			iO = bD.rL.rU(Math.max(bD.rL.sd(.012), 8));
		try {
			aDK.sheet.insertRule(a9x + "{width:" + iO + ";height:" + iO + ";}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-thumb{background-color:white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x +
				"-track{background:" + bE.oK + ";}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-track:horizontal{border-top:" + e2 + " solid white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x +
				"-track:vertical{border-left:" + e2 + " solid white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-button{display:none;}", aDK.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aDK.sheet.cssRules.length - 1; 0 <= aC; aC--) aDK.sheet.deleteRule(0)
		}
	}
}

function dR() {
	this.aDL = !1, this.oE = !1, this.a5l = !1, this.aDM = [0, 0, 0, 0], this.render = function() {
		var no, np, o1, o2;
		this.a5l = this.a5l || this.oE, (this.oE || this.aDL && this.a5l) && (no = bd.aDN[0], np = bd.aDN[1], o1 = bd.aDN[2], o2 = bd.aDN[3], no = no < this.aDM[0] ? this.aDM[0] : no, np = np < this.aDM[1] ? this.aDM[1] : np, o1 = o1 > this.aDM[
				2] ? this.aDM[2] : o1, o2 = o2 > this.aDM[3] ? this.aDM[3] : o2, this.oE = !1, this.aDL = !1, no === this.aDM[0] && np === this.aDM[1] && o1 === this.aDM[2] && o2 === this.aDM[3] ? this.a5m() : no <= o1 && np <= o2 && a64
			.putImageData(a65, 0, 0, no, np, o1 - no + 1, o2 - np + 1))
	}, this.a5m = function() {
		this.a5l && this.aDM[2] >= this.aDM[0] && this.aDM[3] >= this.aDM[1] && a64.putImageData(a65, 0, 0, this.aDM[0], this.aDM[1], this.aDM[2] - this.aDM[0] + 1, this.aDM[3] - this.aDM[1] + 1), this.a5l = !1
	}, this.a1a = function() {
		this.aDM[2] >= this.aDM[0] && this.aDM[3] >= this.aDM[1] && a64.putImageData(a65, 0, 0, this.aDM[0], this.aDM[1], this.aDM[2] - this.aDM[0] + 1, this.aDM[3] - this.aDM[1] + 1), this.a5l = !1
	}, this.di = function() {
		var fZ, fb;
		this.aDL = !1, this.oE = !1, this.a5l = !1, this.aDM[0] = bV.fd, this.aDM[1] = bV.fe, this.aDM[2] = this.aDM[3] = 0;
		loop: for (fZ = 1; fZ < bV.fd - 1; fZ++)
			for (fb = bV.fe - 2; 1 < fb; fb--)
				if (1 === aDO[ad.z0(fZ, fb) + 2]) {
					this.aDM[0] = fZ;
					break loop
				} loop: for (fb = 1; fb < bV.fe - 1; fb++)
			for (fZ = bV.fd - 2; 1 < fZ; fZ--)
				if (1 === aDO[ad.z0(fZ, fb) + 2]) {
					this.aDM[1] = fb;
					break loop
				} loop: for (fZ = bV.fd - 2; 0 < fZ; fZ--)
			for (fb = bV.fe - 2; 1 < fb; fb--)
				if (1 === aDO[ad.z0(fZ, fb) + 2]) {
					this.aDM[2] = fZ;
					break loop
				} loop: for (fb = bV.fe - 2; 0 < fb; fb--)
			for (fZ = bV.fd - 2; 1 < fZ; fZ--)
				if (1 === aDO[ad.z0(fZ, fb) + 2]) {
					this.aDM[3] = fb;
					break loop
				}
	}
}

function L(value, aDP, wV, aDQ) {
	var r2 = "number" == typeof value ? bA.aDR[value] : value;
	if (wV && bA.aDS() && (r2 = wV), !aDP) return aDQ ? r2.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : r2;
	for (var fS = aDP.length, aC = 0; aC < fS; aC++)
		for (var fl = 0; fl < 3; fl++) r2 = r2.replace("{" + (10 * fl + aC) + "}", aDP[aC]);
	return r2
}

function c5() {
	this.data = new aDT;
	var aDU = (new aDV).L84,
		aDX = (this.aDR = aDU, !(this.aDW = "en"));
	this.di = function() {
		var r2, h;
		aDX = !1, ("en" === (r2 = bm.eW.data[12].value).split("-")[0].toLowerCase() ? (bA.aDR = aDU, bA.aDW = r2, 1) : bm.eW.data[12].value === bm.eW.data[145].value && 0 < bm.eW.data[146].value && (r2 = bm.eW.data[146].value, (h = bm.rc.wh(r2, !
			1)).length === r2) && !!bD.rT.a43(h) && function(h) {
			for (var fS = h.length, k = 0; k < fS; k++) h[k] = h[k].replace("&#39;", "'");
			var aDd = bm.rc.wh(fS, !0);
			if (fS !== aDd.length) return !1;
			if (!bD.rT.a43(aDd)) return !1;
			for (var li = aDU.length, aAs = new Array(li), aDe = li === fS, gv = Math.min(fS, li), aC = 0; aC < li; aC++)
				if (aAs[aC] = aDU[aC], aC < fS && aDd[aC] === aAs[aC]) aAs[aC] = h[aC];
				else {
					aDe = !1;
					for (var fm = 0; fm < gv; fm++)
						if (aDd[fm] === aAs[aC]) {
							aAs[aC] = h[fm];
							break
						}
				} return bA.aDR = aAs, bA.aDW = bm.eW.data[12].value, aDe
		}(h)) || (aDX = !0)
	}, this.dk = function() {
		bj.dj(), aF.dj(), bh.dj(), bg.dj(), aP.di(), br = new e7
	}, this.aDS = function() {
		return this.aDR === aDU || !aDU.length
	}, this.aDf = function() {
		var aDg;
		return !!aDX && (aDX = !1, 0 !== aDU.length) && (aDg = bm.eW.data[12].value, b1.eg.aDh(0, aDg.slice(0, 20)), !0)
	}, this.aDi = function(h) {
		h.length !== aDU.length ? 8 === u.tc && u.a2c().aDj(30, 0, 1) : (this.aDR = h, this.aDW = bm.eW.data[12].value, bm.pp.pq(145, this.aDW), bm.pp.pq(146, h.length), bm.rc.wn(h, !1), bm.rc.wn(aDU, !0), 8 === u.tc ? u.a2c().aDj(30) : 0 === ab
			.a2Y() && 5 === u.tc && u.z.aDk())
	}, this.aDl = function() {
		var wq, h = navigator.languages;
		return h && h.length ? (wq = Math.max(bA.data.aDm(h[0]), 0), 1 === h.length ? [wq, wq] : [wq, Math.max(bA.data.aDm(h[1]), 0)]) : [0, 0]
	}
}

function aDT() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDn = function() {
		for (var aDo = [], h = this.h, fS = h.length, aC = 0; aC < fS; aC++) aDo.push(h[aC]);
		var aDp = bm.eW.data[12].wV;
		for (aC = 0; aC < fS; aC++)
			if (aDo[aC] === aDp) {
				aDo.splice(aC, 1), fS--;
				break
			} aDo.sort(), fS++, aDo.unshift(aDp);
		try {
			if ("undefined" == typeof Intl) return aDo;
			for (aC = 0; aC < fS; aC++) {
				var r2 = new Intl.DisplayNames([aDo[aC]], {
					type: "language"
				}).of(aDo[aC]);
				r2 !== aDo[aC] && (aDo[aC] = aDo[aC] + ": " + r2)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDo
	}, this.aDr = function(aDs) {
		for (var r2 = bm.eW.data[12].value, fS = aDs.length, aC = 0; aC < fS; aC++)
			if (r2 === aDs[aC].split(":")[0]) return aC;
		return 0
	}, this.aDm = function(aDt) {
		if (aDt && !(aDt.length < 2)) {
			aDt = aDt.split("-")[0].toLowerCase();
			for (var h = this.h, fS = h.length, aC = 0; aC < fS; aC++)
				if (aDt === h[aC]) return aC
		}
		return -1
	}
}

function aDV() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention",
		"Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant",
		"Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Search", "Password", "Show", "Hide",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ",
		"You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.",
		"Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.",
		"Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.",
		"Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.",
		"Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).",
		"The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}",
		"Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard",
		"Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options",
		"Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "My Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income",
		"Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale",
		"Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain",
		"Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Game", "Login",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name",
		"📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!"
	]
}

function dn() {
	var fZ, fb, k, uZ, aDu, aDv, aDw, aDx, aDy, j, a4g, aDz;
	this.iE = !1, this.di = function(r2, aE0) {
		if (1 === a1.id && 13 <= a1.e1 && a1.e1 < 18) return aE0 ? void(a4g = r2) : a4g !== r2 ? void 0 : void a1.wf.saveString(200, r2);
		aE0 && (a4g = r2, (aDz = document.createElement("a")).appendChild(document.createTextNode(a4g)), this.iE = !0, aDz.title = a4g, aDz.target = "_blank", aDz.href = a4g, aDz.style.textAlign = "center", aDz.style.color = bE.oO, aDz.style
			.position = "absolute", aDz.style.padding = "0px", aDz.style.margin = "0px", this.resize(), document.body.appendChild(aDz), bi.dq = !0)
	}, this.sb = function() {
		return !(!this.iE || (u.removeChild(document.body, aDz), this.iE = !1))
	}, this.hf = function(il, im) {
		return !!this.iE && ((il < fZ || im < fb || fZ + j < il || fb + k < im || fZ + j - uZ < il && im < fb + uZ) && (bi.dq = !0, this.iE = !1, u.removeChild(document.body, aDz)), !0)
	}, this.resize = function() {
		var a74, aE1;
		this.iE && (aDx = Math.floor(.8 * (a1.a2.ib() ? i.j > i.k ? .6 : .55 : .4) * i.ic), uZ = Math.floor(.15 * aDx), aDu = Math.floor(.35 * uZ), aDv = Math.floor(.5 * uZ), aDw = Math.floor(2.5 * aDv), k = uZ + aDu + 3 * aDv, a74 = bD.rL.t9(1,
			aDu / i.l), aDy = Math.floor(i.l * aR.measureText(a4g, a74)), aE1 = j = (aDx < aDy ? aDy : aDx) + 2 * aDw, j = Math.min(j, i.j - 2 * (a1.a2.ib() ? 2 : 1) * bf.gap), a74 = bD.rL.t9(1, j / aE1 * aDu / i.l), aDy = Math.floor(i
			.l * aR.measureText(a4g, a74)), fZ = Math.floor((i.j - j) / 2), fb = Math.floor((i.k - k) / 2), aDz.style.font = a74, aDz.style.top = Math.floor((fb + 1.4 * aDv + uZ) / i.l) + "px", aDz.style.left = Math.floor((fZ + (j -
			aDy) / 2) / i.l) + "px")
	}, this.vw = function() {
		this.iE && (vx.fillStyle = bE.oL, vx.fillRect(fZ, fb + uZ, j, k - uZ), vx.fillStyle = bE.pY, vx.fillRect(fZ, fb, j, uZ), vx.fillStyle = bE.oO, vx.lineWidth = bf.a0M, vx.strokeStyle = bE.oO, vx.strokeRect(fZ, fb, j, k), vx.fillRect(fZ,
			fb + uZ, j, bf.a0M), vx.font = bD.rL.t9(1, .48 * uZ), bD.rL.textAlign(vx, 1), bD.rL.textBaseline(vx, 1), vx.fillText(L(133), Math.floor(fZ + (j - .5 * uZ) / 2), Math.floor(fb + .55 * uZ)), aN.a7G(Math.floor(fZ + j - .8 * uZ),
			Math.floor(fb + .25 * uZ), Math.floor(.5 * uZ)), vx.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dm() {
	var gap, aCM, fZ = [0, 0, 0, 0, 0],
		fb = [0, 0, 0, 0, 0],
		o0 = [1, 1, 1, 1, 1],
		fu = [!0, !0, !0, !1, !1],
		ej = (this.gF = [!0, !0, !0, !1, !1], null);
	this.aE2 = function(a4E, aE3) {
		ej = a4E, fu = aE3, aCM = [bN.aE4, bN.a2T, bN.aE5, bN.aE5, bN.aE6], this.di()
	}, this.di = function() {
		if (ac.u4()) {
			var aC, ti = Math.floor((a1.a2.ib() ? .261 : .195) * i.ic),
				tj = Math.floor(.9 * ti),
				a9p = Math.floor(.17 * tj);
			if (gap = a1.a2.ib() ? 2 * bf.gap : bf.gap, o0[0] = ti / ej[0].width, o0[1] = tj / ej[1].width, o0[2] = a9p / ej[2].height, o0[3] = a9p / ej[3].height, o0[4] = a9p / ej[4].height, o0[2] *= 1.7, o0[3] *= 1.07, fZ[0] = gap, fZ[1] = gap,
				fZ[2] = gap, fZ[3] = gap, fZ[4] = Math.floor(2 * gap + o0[3] * ej[3].width), fb[0] = gap, fb[1] = fb[0] + gap + o0[0] * ej[0].height, fb[2] = fb[1] + gap + o0[1] * ej[1].height, fb[3] = fb[2] + gap + o0[2] * ej[2].height, fb[4] =
				fb[3], !fu[0])
				for (aC = 0; aC < 5; aC++) fb[aC] -= o0[0] * ej[0].height + gap;
			if (!fu[1])
				for (aC = 2; aC < 5; aC++) fb[aC] -= o0[1] * ej[1].height + gap
		}
	}, this.iE = function() {
		return !(7 === ab.a2Y() && a1.a2.ib())
	}, this.hf = function(il, im) {
		if (ej && this.iE())
			for (var aC = fu.length - 1; 0 <= aC; aC--)
				if (fu[aC] && this.gF[aC] && fZ[aC] < il && fb[aC] < im && il < fZ[aC] + o0[aC] * ej[aC].width && im < fb[aC] + o0[aC] * ej[aC].height) return u.v(9, u.tc, new aE7(L(134), bD.rL.a4f(aCM[aC]))), !0;
		return !1
	}, this.vw = function() {
		if (ej && this.iE()) {
			var aC;
			for (vx.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) fu[aC] && this.gF[aC] && (vx.setTransform(o0[aC], 0, 0, o0[aC], fZ[aC], fb[aC]), vx.drawImage(ej[aC], 0, 0));
			vx.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dc() {
	this.aE8 = 0, this.aE9 = null, this.uk = null, this.lc = null, this.z = null, this.v7 = null, this.uh = null, this.message = null, this.aEA = null, this.sa = null, this.aEB = null, this.aEC = new aED, this.ez = 0, this.aAj = 0, this.di =
		function() {
			this.aAj = bi.eZ, this.aE8 = bJ.te.xc(bm.eW.data[105].value, 5), this.uk = new aEE, this.lc = new aEF, this.z = new aEG, this.v7 = new aEH, this.uh = new aEI, this.message = new aEJ, this.aEA = new aEK, this.sa = new aEL, this.aEB =
				new aEM, this.z.di(), bs.di(), this.ez = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.ex()
		}, this.v1 = function() {
			this.sa && this.sa.v1(), this.aE9 = null, this.uk = null, this.lc = null, this.z = null, this.v7 = null, this.uh = null, this.message = null, this.aEA = null, this.sa = null, this.aEB = null, this.ez = 0, bs.v1(), a1.a2.setState(0)
		}
}

function aEE() {
	function aEj(h, tw, tx) {
		var aEk = h[tw];
		h[tw] = h[tx], h[tx] = aEk
	}
	this.ul = [
		[],
		[],
		[],
		[]
	], this.um = [0, 0, 0, 0], this.aEN = [], this.aEO = function(aEP, ta, username, ur, a58, aEQ, elo, color, xA, aER) {
		username = this.aET(ta, username, ur, a58, aEQ, elo, color, xA, aER);
		this.ul[aEP].push(username), bq.aE8 === ta && (bq.aE9 = username), bq.aEB.aEU(ta) && (username.ut = 1), bq.z.aEV += 29 === u.tc && bq.z.sO[0] === aEP && 1 === bq.z.sO[2]
	}, this.aET = function(ta, username, ur, a58, aEQ, elo, color, xA, aER) {
		return {
			ta: ta,
			username: __fx.nameFilter.filter(username),
			ur: ur,
			a58: a58,
			aEQ: aEQ,
			elo: elo,
			color: color,
			xA: xA,
			aER: aER
		}
	}, this.aEW = function(eH, aEP, ur, a58, aEQ, elo, xA, color) {
		eH = this.ul[aEP][eH];
		eH.ur = ur, eH.a58 = a58, eH.aEQ = aEQ, eH.elo = elo, eH.xA = xA, eH.color = color, bq.z.aEV += 29 === u.tc && bq.z.sO[0] === aEP && 1 === bq.z.sO[2]
	}, this.aEX = function(eH, aEP, aEY) {
		var eH = this.ul[aEP][eH],
			aEZ = eH.username,
			aEa = "Redacted " + bI.te.a0f(eH.ta, 2);
		eH.username = aEY ? "[" + bD.sK.a27(aEZ) + "] " + aEa : aEa, aEZ.indexOf("Redacted") < 0 && (eH.aEb = aEZ), bq.sa.aEc(eH.ta), bq.z.aEV += 29 === u.tc && bq.z.sO[0] === aEP && 1 === bq.z.sO[2]
	}, this.aEd = function(eH, aEe, aEf) {
		var player = this.ul[aEe][eH];
		this.aEg(eH, aEe), this.ul[aEf].push(player), bq.z.aEV += 29 === u.tc && bq.z.sO[0] === aEf && 1 === bq.z.sO[2]
	}, this.aEg = function(eH, aEe) {
		var uk = this.ul[aEe];
		this.aEN.push(uk[eH]), 1e3 < this.aEN.length && this.aEN.shift(), eH >= this.um[aEe] ? uk[eH] = uk[uk.length - 1] : (this.um[aEe]--, 2 === aEe ? (uk.splice(this.um[aEe] + 1, 0, uk[uk.length - 1]), uk.splice(eH, 1)) : (uk[eH] = uk[this.um[
			aEe]], uk[this.um[aEe]] = uk[uk.length - 1])), uk.pop(), bq.z.aEV += 29 === u.tc && bq.z.sO[0] === aEe && 1 === bq.z.sO[2]
	}, this.aEh = function(eH, sN) {
		bq.z.aEV += 29 === u.tc && bq.z.sO[0] === sN && 1 === bq.z.sO[2];
		var uk = this.ul[sN],
			rD = uk[eH];
		if (2 === sN)
			if (eH >= this.um[sN]) {
				bq.aEB.join(rD);
				for (var aEi = this.um[sN], elo = rD.elo; aEi && elo > uk[aEi - 1].elo;) aEi--;
				uk[eH] = uk[this.um[sN]], uk.splice(this.um[sN]++, 1), uk.splice(aEi, 0, rD)
			} else uk.splice(this.um[sN]--, 0, rD), uk.splice(eH, 1);
		else eH >= this.um[sN] ? (bq.aEB.join(rD), aEj(uk, this.um[sN]++, eH)) : aEj(uk, --this.um[sN], eH)
	}, this.aEl = function(ta) {
		for (var ul = this.ul, fS = ul.length, aC = 0; aC < fS; aC++)
			for (var uk = ul[aC], li = uk.length, fl = 0; fl < li; fl++)
				if (ta === uk[fl].ta) return uk[fl];
		return null
	}
}

function aEM() {
	var aEm = [],
		aEn = [],
		aEo = 0;

	function aEp(h, a88, aEt, aEu) {
		var fS = h.length;
		if (0 === fS) return "";
		var r2 = "@" + h[0];
		if (1 === fS) return r2 + a88 + aEu;
		for (var aC = 1; aC < fS - 1; aC++) r2 += ", @" + h[aC];
		return r2 + " and @" + h[fS - 1] + aEt + aEu
	}
	this.di = function() {
		var r2 = aEp(aEn, " is", " are", " in the lobby.");
		r2.length && bq.message.aEq({
			id: 7,
			s: r2
		}), aEm = [], aEn = [], aEo = 0
	}, this.aEU = function(aEr) {
		return bq.aE8 !== aEr && (aEr = bI.te.a0f(aEr, 5), !!bm.wL.ut(aEr)) && (aEn.push(aEr), !0)
	}, this.join = function(player) {
		bq.aE8 !== player.ta && (player = bI.te.a0f(player.ta, 5), bm.wL.ut(player)) && aEm.push(player)
	}, this.aEs = function() {
		var a88, aEt;
		++aEo < 3 || (aEo = 0, a88 = aEp(aEn, "", "", " entered the lobby!"), (a88 = (aEt = aEp(aEm, "", "", " joined a game!")).length ? a88.length ? a88 + " " + aEt : aEt : a88).length && bq.message.aEq({
			id: 7,
			s: a88
		}), aEm = [], aEn = [])
	}
}

function aED() {
	this.dr = function(eH) {
		if ((um = bq.uk.um[eH]) < 2) return !1;
		var sP = bq.z.sQ[eH],
			aEv = 9 === sP.aEw ? 333 : 512,
			um = Math.min(um, aEv);
		8 === sP.aEw && (um -= um % 2);
		aEv = bq.uk.ul[eH].splice(0, um), bq.uk.um[eH] -= um, um = function(aEx) {
			if (bq.aE9)
				for (var fS = aEx.length, ta = bq.aE9.ta, aC = 0; aC < fS; aC++)
					if (aEx[aC].ta === ta) return aC;
			return -1
		}(aEv);
		return -1 === um ? (bq.uk.aEN = bq.uk.aEN.concat(aEv), 1e3 < bq.uk.aEN.length && bq.uk.aEN.splice(0, bq.uk.aEN.length - 1e3), bq.z.aEV += 29 === u.tc && bq.z.sO[0] === eH && 1 === bq.z.sO[2], !1) : (8 === sP.aEw && (sP.aF0 = (sP.aF0 + (
			um >> 1)) % 1024, eH = um - um % 2, um %= 2, aEv = aEv.slice(eH, 2 + eH)), ay.di(sP, aEv, um), !0)
	}, this.aF1 = function(sP, aEx, aEy) {
		var fV = aE.data = new a5r,
			aF5 = (fV.spawningSeed = sP.spawningSeed, sP.aEw < 7 ? (fV.gameMode = 1, fV.numberTeams = sP.aEw + 2) : 9 === sP.aEw ? (fV.gameMode = fV.isZombieMode = 1, fV.numberTeams = 2) : (fV.gameMode = 0, fV.battleRoyaleMode = 7 === sP.aEw ?
				0 : 10 === sP.aEw ? 1 : 2), fV.selectedPlayer = aEy, fV.isContest = sP.aF2, fV.mapType = bV.aF3(sP.f8) ? 0 : 1, bV.aF4(fV, sP.f8), fV.mapSeed = sP.mapSeed, fV.humanCount = aEx.length);
		fV.selectableSpawn = 1 === fV.gameMode || aF5 < 100, fV.colorsData = new Uint32Array(aF5), fV.playerNamesData = new Array(aF5), fV.a6F = new Uint32Array(aF5);
		for (var aC = 0; aC < aF5; aC++) fV.colorsData[aC] = aEx[aC].color, fV.playerNamesData[aC] = aEx[aC].username, fV.a6F[aC] = aEx[aC].ta;
		if (2 === fV.battleRoyaleMode)
			for (fV.elo = new Uint16Array(aF5), aC = 0; aC < aF5; aC++) fV.elo[aC] = aEx[aC].elo;
		ab.setState(8), bV.a8(sP.f8, fV.mapSeed), aE.a5w(), aE.a5u = 2
	}
}

function aEF() {
	var e8 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aF6 = [bE.oc, bE.oc, bE.od, bE.p7, bE.p8, bE.ou, bE.pD, bE.od, bE.pa, bE.pO, bE.pX, bE.oF],
		aF7 = [
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
		aF8 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aFM(sR, ta, aFO) {
		for (var fm = sR.length - 1; 0 <= fm; fm--) {
			var rD = sR[fm];
			0 === rD.id && rD.ta === ta && (rD.s = "[Redacted Message]", aFO) && (rD.aFP = 1)
		}
	}
	this.sW = function(aF9) {
		var aFA, a28;
		return aF9.id < 5 && (aFA = "@" + bI.te.a0f(aF9.ta, 5)), 0 === aF9.id ? aFA + ": " + aF9.s : 1 === aF9.id ? (a28 = "@" + bI.te.a0f(aF9.target, 5), 0 === aF9.aFB ? 32768 <= aF9.value ? aFA + " voted with " + (aF9.value - 32768 + 1) +
				" gold against " + a28 + " to weaken the latter's admin position. 📉" : aFA + " voted with " + (aF9.value + 1) + " gold for " + a28 + " to strengthen the latter's admin position. 💪" : 1 === aF9.aFB ? aFA + " sent " + Math.floor(
					aF9.value / 100) + " 🧈 gold to " + a28 + "." : aFA + " voted with " + (aF9.value / 10).toFixed(1) + " points for " + a28 + " to acknowledge the latter as clan leader. ✅") : 2 === aF9.id ? 0 === aF9.aFB ? aFA +
			" was 🔇 muted for 1 Hour." : 1 === aF9.aFB ? "The username of " + aFA + " was ✂️ redacted. Duration: 1 Day" : aFA + " 👢 was kicked." : 3 === aF9.id ? aFA + br.eK(aF9.aFB, br.eE[aF9.aFB][aF9.value]) + "@" + bI.te.a0f(aF9.target, 5) +
			br.eM(aF9.aFB, br.eE[aF9.aFB][aF9.value]) : 4 === aF9.id ? aFA + br.eK(5, br.eE[5][aF9.aFB]) + "@" + bI.te.a0f(aF9.target, 5) + br.eM(5, br.eE[5][aF9.aFB]) : 5 === aF9.id ? aF8[aF9.aFB] : 6 === aF9.id ? "You are about to mention " +
			aF9.value + " player" + (1 === aF9.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aF9.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aF9.id ? aF9.s : void 0
	}, this.sV = function(aF9, aFC) {
		return {
			aF9: aF9,
			s: aFC,
			aFD: 0,
			fontSize: 1,
			sZ: 0,
			aFE: aF9.id ? bE.p6 : bE.oO
		}
	}, this.up = function(player, sN) {
		return (2 === sN ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uq = function(ur) {
		return aF6[ur]
	}, this.aFF = function(ur, a58) {
		return ur < 3 || 7 === ur ? aF7[ur][0] : 4 === ur ? aF7[ur][a58 < 1 ? 0 : a58 < 10 ? 1 : 2] : aF7[ur][a58 < 10 ? 0 : 1]
	}, this.aFG = function(a58) {
		return 0 === a58
	}, this.aEl = function(sN, ta) {
		for (var ul = bq.uk.ul, uk = ul[sN], fS = uk.length, aC = 0; aC < fS; aC++)
			if (ta === uk[aC].ta) return uk[aC];
		for (var fm = 0; fm < ul.length; fm++)
			if (sN !== fm)
				for (fS = (uk = ul[fm]).length, aC = 0; aC < fS; aC++)
					if (ta === uk[aC].ta) return uk[aC];
		return null
	}, this.us = function(rD) {
		return !!bq.aE9 && rD.ta === bq.aE9.ta
	}, this.aFH = function(uk, aFI, aFJ) {
		var a25 = [];
		loop: for (var aC = aFI; aC < aFJ; aC++) {
			var a26 = bD.sK.a27(uk[aC].username);
			if (a26) {
				for (var fm = a25.length - 1; 0 <= fm; fm--)
					if (a26 === a25[fm].name) {
						a25[fm].gv++;
						continue loop
					} a25.push({
					name: a26,
					gv: 1
				})
			}
		}
		if (a25.sort(function(fl, fm) {
				return fm.gv - fl.gv
			}), 0 === a25.length) return "";
		for (var r2 = a25[0].name + ": " + a25[0].gv, aC = 1; aC < a25.length; aC++) r2 += "   " + a25[aC].name + ": " + a25[aC].gv;
		return r2
	}, this.aFK = function(ur, a58, aEQ) {
		return 0 === e8[ur].length ? "Rank: " + (a58 + 1) : e8[ur] + " Rank: " + (a58 + 1) + (3 !== ur && aEQ < 100 ? "   " + e8[3] + " Rank: " + (aEQ + 1) : "")
	}, this.aFL = function(ta) {
		for (var sQ = bq.z.sQ, aC = 0; aC < sQ.length; aC++) aFM(sQ[aC].sR, ta);
		aFM(bq.message.aFN(), ta, 1), bq.sa.aFL(ta)
	}
}

function aEI() {
	var t1 = 0,
		aFQ = 0,
		aFR = 0,
		aFS = null,
		aFT = null;

	function aFW(rD, aFX, aFY) {
		var r2 = rD.username;
		return (r2 += "   " + bq.lc.aFK(rD.ur, rD.a58, rD.aEQ)) + function(rD) {
			rD = rD.xA;
			if (rD < 1e3) return "   Gold: " + rD;
			if ((rD %= 1024) < 1e3) return "   Gold: " + rD + "k";
			return "   Gold: " + (rD - 999) + "M"
		}(rD) + ("   IP: " + bI.te.a0f(rD.aER, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFY ? aFQ : aFV(rD, aFX)])
	}

	function aFV(rD, aFX) {
		return aFQ = aFX || bq.uk.aEl(rD.ta) ? 1 : 0
	}
	this.ui = 0, this.aFU = function() {
		!t1 || aFQ === aFV(aFT) && aFR === aFT.xA || (aFR = aFT.xA, aFS.show(-1, -1, aFW(aFT, 0, 1), 1, 1, aFT.color))
	}, this.uu = function(e, rD, aFX) {
		var a9w = e.getBoundingClientRect();
		this.show(a9w.left, a9w.top, rD, 0, aFX), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.uh && bq.uh.sb(1)
		}), this.ui = aFX
	}, this.show = function(fZ, fb, rD, t5, aFX) {
		aFS = aFS || new sy, aFR = (aFT = rD).xA, aFS.show(fZ, fb, aFW(rD, aFX), t5, 0, aFT.color), t1 = 1
	}, this.sb = function(tC) {
		this.ui = 0, aFS && aFS.sb(tC) && (t1 = 0, aFT = null)
	}
}

function aEG() {
	function aFd() {
		u.a6R(29) && (bq.z.aEV && 1 === bq.z.sO[2] && u.a6R(29).aFg(), bq.z.aEV = 0, u.a6R(29).aFh(), u.a6R(29).aFi(), bq.uh.aFU())
	}
	this.sQ = new Array(4), this.sO = [0, 0, 1, 0], this.aEV = 0, this.aFa = [0, 0], this.di = function() {
		for (var aC = 0; aC < this.sQ.length; aC++) this.sQ[aC] = new aFb;
		this.sO[0] = bm.eW.data[158].value, __fx.lobbyReminders.setRooms(this.sQ), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aEq({
				id: 7,
				s: text
			})
		})
	}, this.aFc = function() {
		aFd(), bq.aEB.di(), __fx.lobbyReminders.check()
	}, this.aEs = function() {
		bq.aEB.aEs();
		for (var aC = 0; aC < bq.z.sQ.length; aC++) {
			var sP = bq.z.sQ[aC];
			0 === sP.uT ? sP.aFj = 0 : (sP.aFk = Math.max(sP.aFk - sP.aFj % 2, 0), sP.aFj++)
		}
		aFd(), __fx.lobbyReminders.check()
	}, this.aFl = function(sN) {
		this.sO[0] !== sN || this.sO[2] || u.a6R(29).aFm()
	}
}

function aEK() {
	var aFn = 0,
		aFo = "",
		aFp = 0,
		aFq = 0,
		aFr = 0;

	function aFt(aFC) {
		b1.aG4.aG5(3, aFC)
	}

	function aG2(gv) {
		aFn = 1, bq.message.aEq({
			id: 6,
			value: gv
		})
	}

	function aFw(s) {
		var aG8 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aG8)
	}
	this.a1S = function(s) {
		var aFs, h, aFy;
		if (aFn) return aFn = 0, "yes" === (aFs = s.toLowerCase()) || "y" === aFs ? void aFt(aFo) : void bq.message.aEq({
			id: 5,
			aFB: 7
		});
		!(s.indexOf("@") < 0) && (aFs = aFw(s)) ? (aFo = s, h = function(aFv) {
			for (var fS = aFv.length, aG6 = [0, 0, 0, 0], aC = 0; aC < fS; aC++)
				for (var j = aFv[aC], fl = 0; fl < 4; fl++) j === "@room" + (fl + 1) && (aG6[fl] = 1);
			if ((aFq = bD.rT.a3s(aG6)) % 4 == 0) return bD.rT.a4A(bq.uk.ul);
			for (fl = 0; fl < 4; fl++) aG6[fl] = aG6[fl] ? bq.uk.ul[fl] : [];
			return bD.rT.a4A(aG6)
		}(aFs), function(aFv, aFy, s) {
			if (!aFp) return;
			for (var fS = aFy.length, aC = 0; aC < fS; aC++) 2 === aFy[aC].id && (s = s.replace(aFv[aFy[aC].eH], "@" + aFy[aC].fu));
			return aFn = 1, aFt((aFo = s).slice(0, 126) + "|"), 1
		}(aFs, aFy = function(aFv) {
			for (var aFy = [], fS = (aFr = aFp = 0, aFv.length), aC = 0; aC < fS; aC++) {
				var j = aFv[aC],
					li = j.length;
				bD.sK.startsWith(j, "@[") ? li <= 9 && bD.sK.a4i(j, "]") && aFy.push({
					id: 0,
					fu: j.substring(2, li - 1).toUpperCase()
				}) : 6 === li ? bD.sK.startsWith(j, "@room") || (aFr++, aFy.push({
					id: 1,
					fu: bJ.te.xc(j.substring(1), 5)
				})) : 1 < li && li < 5 && 0 <= (li = bA.data.aDm(j.substring(1))) && (aFy.push({
					id: 2,
					fu: li,
					eH: aC
				}), aFp = 1)
			}
			return aFy
		}(aFs), s) || (0 === aFy.length ? aFq || function(aFv) {
			for (var fS = aFv.length, aC = 0; aC < fS; aC++) {
				var j = aFv[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aFs) ? aG2(h.length) : aFt(s) : aFs.length === aFr ? aFt(s) : (function(h, aFy) {
			var li = aFy.length;
			if (0 === li) return;
			var fS = h.length;
			loop: for (var aC = fS - 1; 0 <= aC; aC--) {
				for (var fl = 0; fl < li; fl++)
					if (0 === aFy[fl].id) {
						if (aFy[fl].fu === bD.sK.a27(h[aC].username)) continue loop
					} else if (1 === aFy[fl].id && aFy[fl].fu === h[aC].ta) continue loop;
				h[aC] = h[--fS], h.pop()
			}
		}(h, aFy), aG2(h.length)))) : aFt(s)
	}, this.aG9 = function(s) {
		var aFv = aFw(s);
		if (aFv)
			for (var a6 = new RegExp("^[0-9]+$"), fS = aFv.length, aC = 0; aC < fS; aC++) {
				var j = aFv[aC].substring(1),
					li = j.length;
				1 <= li && li <= 3 && a6.test(j) && (li = parseInt(j, 10), !isNaN(li)) && 0 <= li && li < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[li]))
			}
		return s
	}
}

function aEJ() {
	var aGA, aGB = [],
		aGC = -1,
		aGD = 0,
		aGE = 0;

	function aGJ() {
		aGD = bi.eZ, (3 === this.uy ? aGI : (aGC = (aGB.length + aGC + 2 * this.uy - 1) % aGB.length, aGH))()
	}

	function aGH() {
		0 !== aGB.length && (aGE = 0, aGA && aGA.v1(), (aGA = new uv(aGJ)).pq(aGC, aGB.length), aGA.show(aGB[aGC]), bq.message.resize())
	}

	function aGI() {
		aGE = 1, aGA && aGA.v1(), (aGA = new v2(aGH)).pq(aGB.length), aGA.show(), bq.message.resize()
	}
	this.aEq = function(aF9) {
		var rD;
		2 === aF9.id && 3 === aF9.aFB ? bq.lc.aFL(aF9.ta) : (rD = bq.lc.sV(aF9, bq.lc.sW(aF9)), (5 !== aF9.id && 6 !== aF9.id || (u.a6R(29).aGF().sY(rD), 5 === aF9.id)) && (rD = bi.eZ < aGD + 2e4, aGC !== aGB.length - 1 && rD || (aGC = aGB
			.length), __fx.pingFilter.isMuted(aF9, "s") || (aGB.push(aF9), bm.eW.data[14].value || 7 === aF9.id || bs.play(), aGA && (aGE && (bm.eW.data[13].value || rD) ? aGA.pq(aGB.length) : aGH()))))
	}, this.show = function() {
		aGI()
	}, this.sb = function() {
		aGC = aGB.length - 1, aGA && aGA.v1(), aGA = null
	}, this.resize = function() {
		aGA && aGA.resize()
	}, this.aFN = function() {
		return aGB
	}
}

function aEH() {
	var aGK = null,
		aGL = null,
		aGM = 0,
		aGN = 0,
		aGO = null;

	function aGQ() {
		0 !== aGL.ur && (bq.v7.sb(), u.v(8, 29, new td(25, {
			action: 0,
			ta: bI.te.a0f(aGL.ta, 5),
			tb: 0
		}, 29)))
	}

	function aGS() {
		return !bq.aE9 || bq.lc.us(aGL) ? 1 : 0
	}

	function aGR() {
		var fZ = aGK.fZ,
			fb = aGK.fb,
			aGb = (bq.v7.sb(), aGS());
		aGK = new v3([new x(br.eE[5][0], function() {
			aGV(5, 0)
		}, aGb), new x(br.eE[5][1], function() {
			aGV(5, 1)
		}, aGb), new x(br.eE[5][2], function() {
			aGV(5, 2)
		}, aGb), new x(br.eE[5][3], function() {
			aGV(5, 3)
		}, aGb)]), aGU(fZ, fb), aGN = aGM = 2
	}

	function aGT() {
		29 === u.tc && u.a2c().aEA(bI.te.a0f(aGL.ta, 5))
	}

	function aGV(id, value) {
		5 === id && b1.aGc.aGd({
			action: 3,
			ta: bI.te.a0f(aGL.ta, 5),
			value: value
		})
	}

	function aGU(fZ, fb, v9) {
		aGK.show(fZ, fb, v9), bq.uh.show(aGK.fZ, aGK.fb, aGL, 1)
	}
	this.aGP = function(e, rD) {
		aGM = 1, aGL = rD, aGK = new v3([new x(L(135), aGQ, 0 === rD.ur ? 1 : 0), new x(L(136), aGR, aGS()), new x(L(137), aGT, 0)]), aGU((aGO = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aGO.clientY, 1)
	}, this.a3S = function(code) {
		if (29 !== u.tc) return !1;
		if (!aGL) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sb();
			else if (bD.sK.startsWith(code, "Numpad") || bD.sK.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aGM) this.aGP(aGO, aGL);
				else {
					if (!aGK) return !1;
					1 === aGM ? code <= 1 ? aGQ() : 2 === code ? aGR() : (aGT(), this.sb()) : (aGV(aGN, bO.ia(code - 1, 0, br.eE[aGN].length - 1)), this.sb())
				}
		}
		return !0
	}, this.sb = function() {
		aGM = 0, aGK && aGK.sb(), aGK = null, bq.uh.sb()
	}
}

function aFb() {
	this.uT = 0, this.f8 = 0, this.mapSeed = 0, this.aEw = 0, this.aGg = 0, this.aGh = 0, this.aGi = 0, this.aF2 = 0, this.aFk = 0, this.spawningSeed = 0, this.a2g = 0, this.aF0 = 0, this.sR = [], this.sS = 1048575, this.aFj = 0, this.aGj = [{
		f8: 0,
		mapSeed: 0,
		aEw: 0,
		eZ: 100,
		aF2: 0
	}, {
		f8: 1,
		mapSeed: 0,
		aEw: 1,
		eZ: 200,
		aF2: 0
	}, {
		f8: 2,
		mapSeed: 0,
		aEw: 2,
		eZ: 300,
		aF2: 0
	}, {
		f8: 3,
		mapSeed: 0,
		aEw: 3,
		eZ: 400,
		aF2: 0
	}, {
		f8: 0,
		mapSeed: 0,
		aEw: 9,
		eZ: 500,
		aF2: 0
	}, {
		f8: 1,
		mapSeed: 0,
		aEw: 10,
		eZ: 600,
		aF2: 0
	}, {
		f8: 2,
		mapSeed: 0,
		aEw: 8,
		eZ: 700,
		aF2: 0
	}, {
		f8: 3,
		mapSeed: 0,
		aEw: 3,
		eZ: 800,
		aF2: 0
	}]
}

function aEL() {
	var aGk = [],
		tp = [],
		aGl = [];

	function aGn(rD) {
		for (var s = rD.s, aGm = [];;) {
			var ej = function aGp(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var r2 = s.substring(position + 1, position + 6);
				if (5 !== r2.length) return aGp(s, position + 1);
				if (bD.sK.startsWith(r2, "room")) return aGp(s, position + 1);
				var aGw = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGw.test(r2)) return aGp(s, position + 1);
				aGw = s.substring(position + 6, position + 7);
				if (1 !== aGw.length) return position;
				r2 = new RegExp("^[ :!.]+$");
				if (!r2.test(aGw)) return aGp(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ej) {
				aGm.push(aGq(s, rD));
				break
			}
			0 === ej ? aGm.push(aGr(s.substring(1, 6), rD, ej)) : (aGm.push(aGq(s.substring(0, ej), rD)), aGm.push(aGr(s.substring(ej + 1, ej + 6), rD, ej))), s = s.substring(ej + 6)
		}
		return aGm
	}

	function aGr(r2, rD, ej) {
		var aES = function(r2) {
				var ta = bJ.te.xc(r2, 5),
					aES = bq.uk.aEl(ta);
				if (aES) {
					for (aGk.push(aES); 75 < aGk.length;) aGk.shift();
					return aES
				}
				for (var aEN = bq.uk.aEN, aC = aEN.length - 1; 0 <= aC; aC--)
					if (aES = aEN[aC], ta === aES.ta) return aGk.push(aES), aES;
				for (aC = aGk.length - 1; 0 <= aC; aC--)
					if (aES = aGk[aC], ta === aES.ta) return aGk.push(aES), aES;
				return bq.uk.aET(ta, r2, 1, 999999, 999999, 0, 0, 0, 0)
			}(r2),
			r2 = (0 === ej && 0 === rD.aF9.id && rD.sZ && (rD.fontSize = bq.lc.aFF(aES.ur, aES.a58), rD.aFD = bq.lc.aFG(aES.a58)), document.createElement("span"));
		return r2.textContent = function(aES, rD, ej) {
				if (aES.aGu) return aES.aGu--, ej = 2 === rD.aF9.id || (3 === rD.aF9.id || 4 === rD.aF9.id) && 0 !== ej, aES.username + (ej ? " (" + aES.aEb + ")" : "");
				if (rD.aF9.aFP) return "Redacted " + bI.te.a0f(aES.ta, 2);
				return aES.username
			}(aES, rD, ej), r2.style.display = "inline-block", r2.style.color = bq.lc.uq(aES.ur), 11 === aES.ur && (r2.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), r2.style.cursor =
			"pointer", r2.style.margin = "0", r2.style.font = "inherit", r2.style.minWidth = r2.style.minHeight = "1em", bq.lc.us(aES) && (r2.style.textDecoration = "underline"), aES.ut && (r2.style.textDecorationLine = "underline", r2.style
				.textDecorationStyle = "dotted"), bq.lc.aFG(aES.a58) && (r2.style.fontWeight = "bold"), r2.onclick = function(e) {
				bq.v7.aGP(e, aES)
			}, bM.rn() || (r2.onmouseover = function(e) {
				bq.uh.uu(e.target, aES)
			}), tp.push(r2), r2
	}

	function aGq(s, rD) {
		var sJ = document.createElement("span");
		return sJ.textContent = s, sJ.style.color = rD.aFE, sJ.style.margin = "0", sJ.style.font = "inherit", sJ
	}

	function aH1(aES, aEa, ta) {
		ta !== aES.ta || aES.aEb || (aES.aEb = aES.username, aES.username = aEa)
	}
	this.v1 = function() {
		for (var aC = 0; aC < tp.length; aC++) tp[aC].onclick = tp[aC].onmouseover = null;
		aGl = tp = null
	}, this.transform = function(rD) {
		for (var r0 = document.createElement("div"), aGm = aGn(rD), aC = 0; aC < aGm.length; aC++) r0.appendChild(aGm[aC]);
		0 === rD.aF9.id && (r0.vx143 = rD.aF9, aGl.push(r0)), r0.style.margin = "0.6em 0.6em", rD.sZ && (r0.style.marginLeft = r0.style.marginRight = "inherit"), r0.style.font = "inherit";
		var aGo = 0 < rD.aF9.id;
		return rD.aFD && (r0.style.fontWeight = "bold"), aGo && (r0.style.paddingLeft = "0.7em"), aGo && (r0.style.fontStyle = "italic"), r0.style.fontSize = rD.fontSize.toFixed(2) + "em", r0
	}, this.aGz = function(aH0) {
		if (aH0 && (2 === aH0.id && 1 === aH0.aFB || 3 === aH0.id && 2 === aH0.aFB)) {
			var ta = 3 === aH0.id ? aH0.target : aH0.ta;
			if (!bq.uk.aEl(ta)) {
				for (var aEa = "Redacted " + bI.te.a0f(ta, 2), aEN = bq.uk.aEN, aC = aEN.length - 1; 0 <= aC; aC--) aH1(aEN[aC], aEa, ta);
				for (aC = aGk.length - 1; 0 <= aC; aC--) aH1(aGk[aC], aEa, ta)
			}
		}
	}, this.aEc = function(ta) {
		for (var aH2 = aGl, aH3 = "@" + bI.te.a0f(ta, 5), aC = aH2.length - 1; 0 <= aC; aC--) {
			var fV = aH2[aC];
			if (fV.vx143.ta === ta || 0 <= fV.vx143.s.indexOf(aH3)) {
				for (; fV.firstChild;) u.removeChild(fV, fV.firstChild);
				for (var aGm = aGn(bq.lc.sV(fV.vx143, bq.lc.sW(fV.vx143))), fl = 0; fl < aGm.length; fl++) fV.appendChild(aGm[fl]);
				aH2.splice(aC, 1)
			}
		}
	}, this.aFL = function(ta) {
		for (var aH2 = aGl, aC = aH2.length - 1; 0 <= aC; aC--) {
			var fV = aH2[aC];
			if (fV.vx143.ta === ta) {
				for (; fV.firstChild;) u.removeChild(fV, fV.firstChild);
				fV.vx143.s = "[Redacted Message]";
				for (var aGm = aGn(bq.lc.sV(fV.vx143, bq.lc.sW(fV.vx143))), fl = 0; fl < aGm.length; fl++) fV.appendChild(aGm[fl]);
				aH2.splice(aC, 1)
			}
		}
	}
}

function cS() {
	var aH4, aH5, aH6;

	function aHB(aC) {
		var button = aZ.ru[aC],
			fZ = button.fZ,
			fb = button.fb,
			j = button.j,
			k = button.k;
		vx.fillStyle = button.aH9, vx.fillRect(fZ, fb, j, k), aC === aH4 && (vx.fillStyle = aH6, vx.fillRect(fZ, fb, j, k)), vx.lineWidth = bf.a0M, vx.strokeStyle = aH5, vx.strokeRect(fZ, fb, j, k),
			function(button) {
				var fZ = button.fZ,
					fb = button.fb,
					j = button.j,
					k = button.k;
				bD.rL.textAlign(vx, 1), bD.rL.textBaseline(vx, 1), vx.font = button.font, vx.fillStyle = aH5, vx.fillText(button.aFC, Math.floor(fZ + j / 2), Math.floor(fb + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fb = 0, this.gap = 0, this.di = function() {
		aH4 = -1, aH5 = bE.oO, aH6 = "rgba(255,255,255,0.16)", this.ru = new Array(7), this.k = Math.floor((a1.a2.ib() ? .123 : .093) * i.ic), this.j = Math.floor((a1.a2.ib() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aH7 = Math.floor(.26 * this.k),
			aH8 = bD.rL.t9(1, aH7);
		this.ru[0] = {
			fZ: 0,
			fb: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aFC: "Multiplayer",
			font: aH8,
			aH9: "rgba(22,88,22,0.8)",
			fontSize: aH7
		}, aH7 = Math.floor(.18 * this.k), aH8 = bD.rL.t9(1, aH7), this.ru[1] = {
			fZ: 0,
			fb: 0,
			j: this.j - this.ru[0].j - this.gap,
			k: this.k,
			aFC: "Single Player",
			font: aH8,
			aH9: "rgba(22,88,88,0.8)",
			fontSize: aH7
		}, this.ru[2] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFC: "",
			font: this.ru[1].font,
			aH9: "rgba(100,0,0,0.8)",
			fontSize: this.ru[1].fontSize
		}, this.ru[3] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: this.k,
			aFC: "Back",
			font: this.ru[0].font,
			aH9: "rgba(0,0,0,0.8)",
			fontSize: this.ru[0].fontSize
		}, this.ru[4] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFC: "The game was updated!",
			font: this.ru[1].font,
			aH9: "rgba(100,0,0,0.8)",
			fontSize: this.ru[1].fontSize
		}, this.ru[5] = {
			fZ: 0,
			fb: 0,
			j: this.ru[0].j,
			k: Math.floor(.8 * this.k),
			aFC: "Reload",
			font: this.ru[0].font,
			aH9: "rgba(0,100,0,0.8)",
			fontSize: this.ru[0].fontSize
		}, this.ru[6] = {
			fZ: 0,
			fb: 0,
			j: this.ru[1].j,
			k: this.ru[5].k,
			aFC: "Back",
			font: this.ru[0].font,
			aH9: "rgba(0,0,0,0.8)",
			fontSize: this.ru[0].fontSize
		}, this.aAv()
	}, this.aAv = function() {
		this.fb = Math.floor(.54 * i.k), this.ru[0].fZ = Math.floor(.5 * i.j - .5 * this.j), this.ru[1].fZ = this.ru[0].fZ + this.ru[0].j + this.gap, this.ru[2].fZ = this.ru[3].fZ = this.ru[0].fZ, this.ru[4].fZ = this.ru[5].fZ = this.ru[0].fZ,
			this.ru[6].fZ = this.ru[1].fZ, this.ru[0].fb = Math.floor(.54 * i.k), this.ru[1].fb = this.ru[0].fb, this.ru[2].fb = Math.floor((i.k - this.ru[2].k - this.ru[3].k - this.gap) / 2), this.ru[3].fb = this.ru[2].fb + this.ru[2].k + this
			.gap, this.ru[4].fb = Math.floor((i.k - this.ru[4].k - this.ru[5].k - this.gap) / 2), this.ru[5].fb = this.ru[6].fb = this.ru[4].fb + this.ru[4].k + this.gap
	}, this.aHA = function() {
		aHB(0), aHB(1)
	}, this.aHC = function() {
		aHB(2), aHB(3)
	}, this.aHD = function() {
		aHB(4), aHB(5), aHB(6)
	}, this.a2u = function(fZ, fb, n9) {
		var aC = -1;
		return 0 === ab.a2Y() ? aC = this.a3O(fZ, fb, 0, 2) : 3 === ab.a2Y() ? aC = this.a3O(fZ, fb, 3, 1) : 5 === ab.a2Y() && (aC = this.a3O(fZ, fb, 5, 2)), aH4 !== aC && (aH4 = aC, n9) && (bi.dq = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a3O = function(fZ, fb, aHE, size) {
		for (var aC = aHE; aC < aHE + size; aC++)
			if (fZ >= this.ru[aC].fZ && fb >= this.ru[aC].fb && fZ <= this.ru[aC].fZ + this.ru[aC].j && fb <= this.ru[aC].fb + this.ru[aC].k) return aC;
		return -1
	}
}

function cT() {
	var aHG, aHH, a8X, aHI, aHJ, aHK, aHL, aHM, aHN, a8W, aHO, aHP, aHQ, aHR = 1,
		aHS = 0,
		aHT = 0;

	function aHX(aHY) {
		aHY ? aHQ = (aHQ + 1) % b1.z.aHZ : (b1.z.close(aHQ, 3280), aHR ? aHR = 0 : (aHT = 1 - aHT, 0 === (aHS = (aHS + 1) % 2) && (aHQ = (aHQ + 1) % b1.z.aHZ, b1.z.close(aHQ, 3280)))), aHP = bi.eZ, aa.aHW = aHT, b1.z.aHa(aHQ, 4, 1) && b1.aG4.aHb(aHQ)
	}

	function aHc() {
		0 === aHQ ? p.a2j(3249) : aHX()
	}

	function aHh(fb, aAd, uT) {
		var no = Math.floor((i.j - aHI) / 2) + aHL,
			o1 = no + Math.floor(uT * (aHI - 2 * aHL));
		vx.lineWidth = aAd, vx.beginPath(), vx.moveTo(no, fb), vx.lineTo(o1, fb), vx.lineTo(Math.floor(no - aHL + uT * aHI), fb + a8X), vx.lineTo(no - aHL, fb + a8X), vx.closePath()
	}
	this.aHU = 1, this.aHV = 0, this.aHW = 0, this.di = function() {
		bX.turnstile.eu(), ab.setState(6), aHG = 0, aHH = 1, aHM = "rgba(0,220,120,0.4)", aHN = "rgba(0,0,0,0.8)", this.resize(), bi.dq = !0, aHR = 1, aHS = 0, aHQ = this.aHU - 1, aHT = 0 === this.aHV ? m.e4 ? 1 : 0 : this.aHV - 1, aHX(1)
	}, this.resize = function() {
		aHI = Math.floor((a1.a2.ib() ? .5 : .25) * i.ic), aHJ = aHI + 12, a8X = Math.floor(.125 * aHI), aHL = 3 * a8X, aHK = Math.floor(.225 * aHI), aHO = Math.floor(.3 * a8X), a8W = bD.rL.t9(0, aHO)
	}, this.a2f = function(a2V) {
		a2V === aHQ && aHc()
	}, this.hf = function(fZ, fb) {
		var no = Math.floor((i.j - aHJ) / 2),
			np = Math.floor(.5 * (i.k - bf.gap - a8X - aHK)) + a8X + bf.gap;
		return no < fZ && fZ < no + aHJ && np < fb && fb < np + aHK && (this.a3Z(), aZ.a2u(fZ, fb, !1), !0)
	}, this.a3Z = function() {
		b1.z.a2k(3260), u.z.a0()
	}, this.ee = function() {
		6 === ab.a2Y() && (bi.eZ > aHP + 12e3 && aHc(), 100 < (aHG += .07 * aHH * (aHG < 16 ? 5 + aHG : 84 < aHG ? 105 - aHG : 17)) ? (aHG = 100, aHH = -1) : aHG < 0 && (aHG = 0, aHH = 1), aHM = "rgba(0," + Math.floor(190 - 1.9 * aHG) + "," +
			Math.floor(120 - 1.2 * aHG) + "," + (.4 + .004 * aHG) + ")", aHN = "rgba(0," + Math.floor(1.9 * aHG) + "," + Math.floor(1.2 * aHG) + "," + (.8 - .004 * aHG) + ")", bi.dq = !0)
	}, this.vw = function() {
		var fZ = Math.floor((i.j - aHJ) / 2),
			fb = Math.floor(.5 * (i.k - bf.gap - a8X - aHK));
		! function(title, fb, aAd, uT) {
			vx.fillStyle = aHN, aHh(fb, aAd, 1), vx.fill(), vx.fillStyle = aHM, aHh(fb, aAd, uT), vx.fill(), vx.strokeStyle = bE.oO, aHh(fb, aAd, 1), vx.stroke(),
				function(aHj, fb) {
					bD.rL.textAlign(vx, 1), bD.rL.textBaseline(vx, 1), vx.font = a8W, vx.fillStyle = bE.oO, vx.fillText(aHj, Math.floor(.5 * i.j), Math.floor(fb + .58 * a8X))
				}(title, fb)
		}(L(138), fb, 3, aHG / 100),
		function(fZ, fb, j, k, aFC) {
			vx.fillStyle = bE.oJ, vx.fillRect(fZ, fb, j, k), vx.lineWidth = 3, vx.strokeStyle = bE.oO, vx.strokeRect(fZ, fb, j, k);
			var fS = Math.floor(.3 * k);
			bD.rL.textAlign(vx, 1), bD.rL.textBaseline(vx, 1), vx.font = bD.rL.t9(0, fS), vx.fillStyle = bE.oO, vx.fillText(aFC, Math.floor(fZ + j / 2), Math.floor(fb + k / 2 + .1 * fS))
		}(fZ, fb + a8X + bf.gap, aHJ, aHK, L(40))
	}
}

function cU() {
	var a2R = 0;
	this.di = function() {
		aZ.di(), a2R = 0
	}, this.setState = function(aHk) {
		a2R = aHk
	}, this.a2Y = function() {
		return a2R
	}, this.aHl = function() {
		this.setState(8), u.y()
	}, this.a3S = function(e) {
		if (!bV.xs) return !1;
		if (!(bi.eZ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHm()) return !0;
				if ("Enter" === e.key) {
					if (0 === a2R) return !0;
					if (7 === a2R) return !0
				}
			}
			return !1
		}
	}, this.aHn = function() {
		bc.resize()
	}, this.aHm = function() {
		return !!bc.sb()
	}, this.hf = function(fZ, fb) {
		!bV.xs || bc.hf(fZ, fb) || 6 === a2R && aa.hf(fZ, fb) || bb.hf(fZ, fb) || aU.hf(fZ, fb)
	}, this.a2u = function(fZ, fb) {
		!aU.aAo && aZ.a2u(fZ, fb, !0) || aU.a2u(fZ, fb)
	}, this.click = function(fZ, fb) {
		aU.a3J()
	}, this.a2x = function(fZ, fb, deltaY) {}, this.aHo = function() {
		aZ.aAv(), bi.dq = !0
	}, this.vw = function() {
		8 !== a2R && 10 !== a2R && (vx.imageSmoothingEnabled = !0, this.zR(), 0 !== a2R && (aU.vw(), aP.vw(), this.aHp(), bb.vw()), 0 !== a2R && 6 === a2R && aa.vw(), bc.vw(), u.vw())
	}, this.zR = function() {
		var aHr, aHq;
		if (__fx.makeMainMenuTransparent) vx.clearRect(0, 0, i.j, i.k);
		else bV.xs ? (aHq = i.j / bV.fd, aHr = i.k / bV.fe, vx.setTransform(aHq = aHr < aHq ? aHq : aHr, 0, 0, aHq, Math.floor((i.j - aHq * bV.fd) / 2), Math.floor((i.k - aHq * bV.fe) / 2)), vx.drawImage(bV.xu, 0, 0), vx.setTransform(1, 0, 0, 1,
			0, 0), vx.fillStyle = bE.oJ) : vx.fillStyle = bE.oF, vx.fillRect(0, 0, i.j, i.k)
	}, this.aHp = function() {
		var fb = Math.floor(.3 * i.k),
			canvas = ac.aHs("territorial.io"),
			iT = (iT = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : iT,
			fZ = (vx.globalAlpha = .15, vx.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - iT * canvas.width))),
			fZ = Math.floor(fZ / iT),
			fb = Math.floor(fb - .5 * canvas.height * iT),
			fb = Math.floor(fb / iT);
		vx.setTransform(iT, 0, 0, iT, fZ, fb), vx.drawImage(canvas, fZ, fb), vx.setTransform(1, 0, 0, 1, 0, 0), vx.globalAlpha = 1, vx.imageSmoothingEnabled = !0
	}
}

function cu() {
	this.aF0 = 0;
	var aHu, aHv, aHw, aHx, aHy, aHz = this.aHt = 0;

	function aI2() {
		aHx = aHy = null, aHz = 0
	}
	this.di = function(sP, aEx, aEy) {
		u.y(), bq.v1(), ab.setState(10), aHx = sP, aHy = aEx, aHz = aEy, this.aF0 = sP.aF0, this.aHt = aEy, aHu = 0, aHv = bi.eZ + 4500, b1.z.a2g = sP.a2g, b1.z.f0 === sP.a2g ? (console.log("direct pass"), aHw = 0) : (console.log("delayed pass"),
			b1.z.close(b1.z.f0, 3247), aHw = 2, b1.z.aHa(sP.a2g, 5, 2) && b1.pn.aI0()), vx.imageSmoothingEnabled = !0, ab.zR();
		aEx = ac.aHs("loading"), aEy = (a1.a2.ib() ? .396 : .25) * i.ic / aEx.width;
		vx.setTransform(aEy, 0, 0, aEy, Math.floor((i.j - aEy * aEx.width) / 2), Math.floor((i.k - aEy * aEx.height) / 2)), vx.imageSmoothingEnabled = !1, vx.drawImage(aEx, 0, 0), vx.setTransform(1, 0, 0, 1, 0, 0)
	}, this.n7 = function() {
		0 < aHw && bi.eZ > aHv && (aHw--, aHv += 4500, 0 === bi.aI3) && 0 === bi.kk() && b1.z.aHa(b1.z.a2g, 5, 2)
	}, this.aI4 = function() {
		return 10 === ab.a2Y() && (bq.aEC.aF1(aHx, aHy, aHz), aI2(), !0)
	}, this.aI5 = function() {
		10 === ab.a2Y() && 2 <= ++aHu && (bq.aEC.aF1(aHx, aHy, aHz), aI2())
	}
}

function cV() {
	var aI7, canvas, a1k, aI8;

	function aIE(eH, name, aIF, r2) {
		a1k[eH] = name, canvas[eH] = new Image, canvas[eH].onload = function() {
			! function(eH, aIF) {
				var a5D, a5E = null;
				7 === aIF ? a5D = bD.a3f.a5G : 8 === aIF ? (a5D = bD.a3f.a5J, a5E = .1) : 3 === aIF ? (a5D = bD.a3f.a5H, a5E = .06) : 5 === aIF ? a5D = bD.a3f.a5K : 6 === aIF ? a5D = bD.a3f.a5F : 4 === aIF && (a5D = bD.a3f.a5L);
				canvas[eH] = bD.a3f.a5C(canvas[eH], a5D, a5E)
			}(eH, aIF), aIH()
		}, canvas[eH].onerror = function(e) {
			console.error("Error loading image at index", eH, "Error:", e), aIH()
		}, canvas[eH].src = "data:image/png;base64," + r2
	}

	function aIH() {
		aI7--, aIB()
	}

	function aIB() {
		0 === aI7 && (aI7 = -1, aID(), bi.dq = !0, canvas[7] = aI8, canvas[8] = aI8, canvas[9] = aI8, canvas[10] = aI8, 5 === u.tc) && u.a2c().aIJ.resize()
	}

	function aID() {
		aM.a6c(), bb.aE2([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.xx = new zt, ak.xx.di(), ax.dj()
	}
	this.di = function() {
		if (void 0 === canvas) {
			aI7 = 23, canvas = new Array(aI7), a1k = new Array(aI7), (aI8 = document.createElement("canvas")).width = 1;
			for (var aC = aI7 - (aI8.height = 1); 0 <= aC; aC--) canvas[aC] = aI8;
			aID(), aIE(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aIE(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aIE(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(3, "orders", 6,
					"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"
					), aIE(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aIE(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aIE(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aIE(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(8,
					"googleplay", 3,
					"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"
					), aIE(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aIE(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIE(14, "bestPlayer", 5,
					"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"
					), aIE(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aIE(16, "apple", 3,
					"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"
					), aIE(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aIE(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aIE(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aIE(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aIE(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aIE(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eH) {
		return canvas[eH]
	}, this.aHs = function(name) {
		for (var aC = a1k.length - 1; 0 <= aC; aC--)
			if (a1k[aC] === name) return canvas[aC];
		return aI8
	}, this.u4 = function() {
		return aI7 <= 0
	}, this.aIA = function() {
		aI7 = 0, aIB()
	}
}

function cW() {
	var aIK = [
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
		aIL = [
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
	this.aIM = null, this.aIN = null, this.aIO = null, this.aIP = null, this.aIQ = null, this.aIR = null, this.aIS = null, this.aIT = null, this.aIU = null, this.aIV = null;

	function aIc(k3, o6) {
		for (var aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aC = k3; aC < o6; aC++) aIM[aC] = bO.ft(64 * az.random(), az.value(100)) << 2, aIN[aC] = bO.ft(64 * az.random(), az.value(100)) << 2, aIO[aC] = bO.ft(64 * az.random(), az.value(100)) << 2
	}

	function aIb(k3, o6) {
		for (var colorsData = aE.data.colorsData, aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aC = k3; aC < o6; aC++) {
			var fu = colorsData[aC];
			aIM[aC] = 4 * (fu >> 12), aIN[aC] = 4 * (fu >> 6 & 63), aIO[aC] = 4 * (63 & fu)
		}
	}

	function aIt(f6, aIv) {
		aDO[f6] = 0, aDO[f6 + 1] = 0, aDO[f6 + 2] = aIv, aDO[f6 + 3] = 0, aIw(f6)
	}

	function aIw(f6) {
		var fZ;
		be.oE || (fZ = ad.zS(f6), f6 = ad.zT(f6), be.oE = fZ >= bd.aDN[0] && fZ <= bd.aDN[2] && f6 >= bd.aDN[1] && f6 <= bd.aDN[3])
	}
	this.fU = new Int32Array(4), this.aIZ = new Int32Array(8), this.dj = function() {
		var fU = this.fU,
			fU = (fU[0] = -4 * bV.fd, fU[1] = 4, fU[2] = -fU[0], fU[3] = -fU[1], this.aIZ);
		fU[0] = -4 * bV.fd - 4, fU[1] = -4 * bV.fd, fU[2] = -4 * bV.fd + 4, fU[3] = -4, fU[4] = 4, fU[5] = 4 * bV.fd - 4, fU[6] = 4 * bV.fd, fU[7] = 4 * bV.fd + 4
	}, this.di = function() {
		if (this.aIM ? (this.aIM.fill(0), this.aIN.fill(0), this.aIO.fill(0), this.aIP.fill(0), this.aIQ.fill(0), this.aIR.fill(0), this.aIS.fill(0), this.aIT.fill(0), this.aIU.fill(0), this.aIV.fill(0), this.a9m.fill(0)) : (this.aIM =
				new Uint8Array(aE.fP), this.aIN = new Uint8Array(aE.fP), this.aIO = new Uint8Array(aE.fP), this.aIP = new Uint8Array(aE.fP), this.aIQ = new Uint8Array(aE.fP), this.aIR = new Uint8Array(aE.fP), this.aIS = new Uint8Array(aE.fP),
				this.aIT = new Uint8Array(aE.fP), this.aIU = new Uint8Array(aE.fP), this.aIV = new Uint8Array(aE.fP), this.a9m = new Uint8Array(aE.fP)), aE.iM)
			for (var aC2 = bj.aC2, aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aC = aE.fP - 1; 0 <= aC; aC--) {
				var ej = aC2[aC],
					li = bO.ft((aIL[ej][3] + 1) * az.random(), az.value(100));
				aIM[aC] = aIK[ej][0] + li * aIL[ej][0], aIN[aC] = aIK[ej][1] + li * aIL[ej][1], aIO[aC] = aIK[ej][2] + li * aIL[ej][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aIb(0, aE.kn), aIc(aE.kn, aE.fP)) : aIc(0, aE.fP) : aIb(0, aE.fP);
		! function() {
			var aC, fV, aIM = ad.aIM,
				aIN = ad.aIN,
				aIO = ad.aIO;
			for (aC = aE.fP - 1; 0 <= aC; aC--) fV = bO.ft(aIM[aC] + aIN[aC] + aIO[aC], 3), aIM[aC] += aIi(fV - aIM[aC], 2), aIN[aC] += aIi(fV - aIN[aC], 2), aIO[aC] += aIi(fV - aIO[aC], 2), aIM[aC] -= aIM[aC] % 4, aIN[aC] -= aIN[aC] % 4, aIO[
				aC] -= aIO[aC] % 4
		}(),
		function() {
			for (var fS = aE.fP, aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = 0; aC < fS; aC++) aIM[aC] += aC >> 7, aIN[aC] += aC >> 5 & 3, aIO[aC] += aC >> 3 & 3, aIP[aC] = 7 & aC
		}(), this.aIf(),
			function() {
				for (var fS = aE.fP, aIQ = ad.aIQ, aIR = ad.aIR, aIS = ad.aIS, aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aC = 0; aC < fS; aC++) {
					var eG = aIM[aC],
						u0 = aIN[aC],
						fm = aIO[aC];
					60 <= eG + u0 + fm ? (aIQ[aC] = Math.max(eG - 40, 3 & eG), aIR[aC] = Math.max(u0 - 40, 3 & u0), aIS[aC] = Math.max(fm - 40, 3 & fm)) : (aIQ[aC] = eG + 40, aIR[aC] = u0 + 40, aIS[aC] = fm + 40)
				}
			}(),
			function() {
				for (var fS = aE.fP, aIT = ad.aIT, aIU = ad.aIU, aIV = ad.aIV, aIM = ad.aIM, aIN = ad.aIN, aIO = ad.aIO, aC = 0; aC < fS; aC++) {
					var eG = aIM[aC],
						u0 = aIN[aC],
						fm = aIO[aC];
					688 <= eG + u0 + fm ? (aIT[aC] = eG - 88, aIU[aC] = u0 - 88, aIV[aC] = fm - 88) : (aIT[aC] = Math.min(eG + 88, 252 + (3 & eG)), aIU[aC] = Math.min(u0 + 88, 252 + (3 & u0)), aIV[aC] = Math.min(fm + 88, 252 + (3 & fm)))
				}
			}()
	}, this.a8e = function(player) {
		var h = bR.g1;
		return h[0] = this.aIM[player], h[1] = this.aIN[player], h[2] = this.aIO[player], h
	}, this.aIf = function() {
		for (var aC = aE.fP - 1; 0 <= aC; aC--) this.a9m[aC] = this.aIM[aC] + this.aIN[aC] + this.aIO[aC] < 280 ? 0 : 1
	}, this.zS = function(f6) {
		return bO.ft(f6, 4) % bV.fd
	}, this.zT = function(f6) {
		return bO.ft(f6, 4 * bV.fd)
	}, this.z0 = function(fZ, fb) {
		return Math.floor(4 * (fb * bV.fd + fZ))
	}, this.zG = function(f6) {
		var fU = this.fU;
		return this.aIj(f6 + fU[0]) || this.aIj(f6 + fU[1]) || this.aIj(f6 + fU[2]) || this.aIj(f6 + fU[3])
	}, this.fq = function(f6) {
		var fU = this.fU;
		return this.fX(f6 + fU[0]) || this.fX(f6 + fU[1]) || this.fX(f6 + fU[2]) || this.fX(f6 + fU[3])
	}, this.zE = function(f6, player) {
		var fU = this.fU;
		return this.aIk(f6 + fU[0], player) || this.aIk(f6 + fU[1], player) || this.aIk(f6 + fU[2], player) || this.aIk(f6 + fU[3], player)
	}, this.aIl = function(aC, aIm, aIn, aIo) {
		this.aIM[aC] = aIm >> 16, this.aIN[aC] = aIm >> 8 & 255, this.aIO[aC] = 255 & aIm, this.aIQ[aC] = aIn >> 16, this.aIR[aC] = aIn >> 8 & 255, this.aIS[aC] = 255 & aIn, this.aIT[aC] = aIo >> 16, this.aIU[aC] = aIo >> 8 & 255, this.aIV[aC] =
			255 & aIo
	}, this.aIp = function(aC) {
		return [(this.aIM[aC] << 16) + (this.aIN[aC] << 8) + this.aIO[aC], (this.aIQ[aC] << 16) + (this.aIR[aC] << 8) + this.aIS[aC], (this.aIT[aC] << 16) + (this.aIU[aC] << 8) + this.aIV[aC]]
	}, this.h2 = function(f6) {
		return 208 <= aDO[f6 + 3]
	}, this.zM = function(player, f6) {
		return this.h2(f6) && this.zP(player, f6)
	}, this.zP = function(player, f6) {
		return player === this.fK(f6)
	}, this.aIq = function(f6) {
		return 208 <= aDO[f6 + 3] && aDO[f6 + 3] < 224
	}, this.jy = function(f6) {
		return 224 <= aDO[f6 + 3] && aDO[f6 + 3] < 248
	}, this.aIr = function(f6) {
		return 248 <= aDO[f6 + 3]
	}, this.zF = function(f6) {
		for (var fU = this.fU, aC = 3; 0 <= aC; aC--)
			if (this.ii(f6 + fU[aC])) return !0;
		return !1
	}, this.fN = function(f6) {
		return this.h2(f6) || this.fJ(f6)
	}, this.ii = function(f6) {
		return 0 === aDO[f6 + 3] && 2 === aDO[f6 + 2]
	}, this.fJ = function(f6) {
		return 0 === aDO[f6 + 3] && 1 === aDO[f6 + 2]
	}, this.y5 = function(f6) {
		return 0 === aDO[f6 + 3] && 3 === aDO[f6 + 2]
	}, this.fX = function(f6) {
		return 0 === aDO[f6 + 3] && 5 === aDO[f6 + 2]
	}, this.aIj = function(f6) {
		return 0 === aDO[f6 + 3] && 3 <= aDO[f6 + 2]
	}, this.fA = function(f6) {
		return (aDO[f6] >> 1 << 8) + aDO[f6 + 1]
	}, this.aIs = function(f6) {
		return 1 & aDO[f6]
	}, this.aIk = function(f6, player) {
		return this.fJ(f6) || this.h2(f6) && player !== this.fK(f6)
	}, this.fK = function(f6) {
		return ((3 & aDO[f6]) << 7) + ((3 & aDO[f6 + 1]) << 5) + ((3 & aDO[f6 + 2]) << 3) + (7 & aDO[f6 + 3])
	}, this.zN = function(f6) {
		aIt(f6, 1)
	}, this.aIu = function(f6) {
		aIt(f6, 2)
	}, this.z1 = function(f6, player) {
		aDO[f6] = this.aIM[player], aDO[f6 + 1] = this.aIN[player], aDO[f6 + 2] = this.aIO[player], aDO[f6 + 3] = 208 + this.aIP[player], aIw(f6)
	}, this.gx = function(f6, player) {
		aDO[f6] = this.aIQ[player], aDO[f6 + 1] = this.aIR[player], aDO[f6 + 2] = this.aIS[player], aDO[f6 + 3] = 224 + this.aIP[player], aIw(f6)
	}, this.jz = function(f6, player) {
		aDO[f6] = this.aIT[player], aDO[f6 + 1] = this.aIU[player], aDO[f6 + 2] = this.aIV[player], aDO[f6 + 3] = 248 + this.aIP[player], aIw(f6)
	}
}

function cv() {
	var aIx = 0,
		aIz = new Uint16Array(64);

	function ey(a6g) {
		aIx -= 2;
		for (var aC = a6g; aC < aIx; aC += 2) aIz[aC] = aIz[aC + 2], aIz[aC + 1] = aIz[aC + 3]
	}
	this.di = function() {
		aIx = 0
	}, this.ee = function() {
		var aC, jw, j5;
		if (0 !== aIx)
			if (0 === ah.nN[aE.fC]) aIx = 0;
			else if (0 === ae.gZ(aE.fC)) aIx = 0;
		else
			for (aC = aIx - 2; 0 <= aC; aC -= 2)(jw = aIz[aC]) < aE.fP && 0 === ah.nN[jw] ? ey(aC) : (j5 = aIz[aC + 1], (jw >= aE.fP && bv.aJ1(aE.fC) || jw < aE.fP && bv.aJ2(aE.fC, jw)) && (bB.hs.hz(j5, jw), ey(aC)))
	}, this.i0 = function(jw, j5) {
		! function(jw, j5) {
			for (var aC = 0; aC < aIx; aC += 2)
				if (aIz[aC] === jw) return aIz[aC + 1] = Math.min(aIz[aC + 1] + j5, 1023), 1;
			return
		}(jw, j5) && 64 !== aIx && (aIz[aIx] = jw, aIz[aIx + 1] = j5, aIx += 2)
	}
}

function cX() {
	function aJA(player) {
		var ea;
		bD.go.a4o(player) && (ea = ah.hU[player] - ah.a4t[player] + ae.aJC(player), bg.gs(player, Math.abs(ea), ea < 0 ? 18 : 12)), ah.hU[player] = 0, ah.a4t[player] = 0
	}

	function aJJ() {
		aY.show(!1, !1, !1, !0), aX.aCY(), bU.a19.a1v()
	}

	function aJ6(player, aJI) {
		for (var aC = aJI.length - 1; 0 <= aC; aC--) ae.aJL(aJI[aC], player)
	}

	function aJ9(player) {
		var jL = ah.jL,
			jM = ah.jM,
			jN = ah.jN,
			jO = ah.jO,
			fd = bV.fd;
		if (ah.hG[player]) {
			ah.hG[player] = 0;
			for (var no = jL[player], np = jN[player], fZ = jM[player]; no <= fZ; fZ--)
				for (var fb = jO[player]; np <= fb; fb--) {
					var h0 = 4 * (fb * fd + fZ);
					ad.zM(player, h0) && ad.zN(h0)
				}
		}
		jM[player] = jO[player] = 0, jL[player] = jN[player] = Math.max(fd, bV.fe)
	}
	this.dr = function(h0) {
		var player, ea = ah.hG[h0] + ah.yw[h0];
		bQ.z.kr[h0] ? ea && (aJ6(player = h0, ae.aJ7(player)), ag.aJ8(player), aJ9(player), aG.gq(player), ae.clear(player), aJA(player), function(player) {
			ah.yw[player] = 0, ah.gu[player] = [], ah.h8[player] = [], ah.h9[player] = [], ah.fr[player] = []
		}(player)) : !ea && ah.gu[h0].length || this.aJ5(h0)
	}, this.aJ5 = function(player) {
		! function(player) {
			bD.go.kA(player) || (ah.a1z[player] = bl.a2E.aJH(), aE.a1Q++);
			var aJI = ae.aJ7(player);
			0 === aJI.length ? bD.go.a4l(player) && aJJ() : (aJ6(player, aJI), function(player, aJI) {
				var aJN = aJI[function(aJI) {
					var aC, eH = 0;
					for (aC = aJI.length - 1; 1 <= aC; aC--) ah.hG[aJI[aC]] > ah.hG[aJI[eH]] && (eH = aC);
					return eH
				}(aJI)];
				9 === aE.l5 && (1 === bj.fQ[player] ? az.kf(8) && b0.aJO(aJN) : aF.iB[player] && (aO.a85(765, 0), aO.zq(280, L(139, [ah.zr[aJN], ah.zr[player]]), 765, aJN, bE.oF, bE.pb, -1, !0)));
				if (bD.go.a4l(player)) aJJ(), aO.a1b(aJN, 1);
				else {
					for (var aC = aJI.length - 1; 0 <= aC; aC--)
						if (bD.go.a4o(aJI[aC]) && (bg.nJ[4 - bD.go.kA(player)]++, bD.go.a4l(aJI[aC]))) return aO.a1b(player, 0);
					bD.go.kA(player) || aO.a7p(0, player, aJN)
				}
			}(player, aJI))
		}(player), ag.aJ8(player), aJ9(player), aJA(player),
			function(player) {
				ah.nN[player] = 0, ah.gu[player] = null, ah.h8[player] = null, ah.h9[player] = null, ah.fr[player] = null
			}(player), aG.gq(player), ae.clear(player), bQ.aJF.aJG(player)
	}
}

function d0() {
	var input;

	function aJP(e) {
		(e = e.target.files) && 0 < e.length && b7.aJS(e[0])
	}

	function aJW(e) {
		var ej = new Image;
		ej.onload = aJX, ej.src = e.target.result
	}

	function aJX(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aJZ = bm.eW.data[162].value,
			max = Math.min(bV.aJa, aJZ),
			aJZ = (max = a1.id || bM.rn() ? Math.min(1400, aJZ) : max) / Math.max(j, k);
		if (aJZ < 1 && (j = Math.floor(aJZ * j + .125), k = Math.floor(aJZ * k + .125)), max < j || max < k || j < 10 || k < 10) aJZ = "Invalid Image Dimensions!", a1.wf ? a1.wf.showToast(aJZ) : alert(aJZ);
		else {
			for (var max = document.createElement("canvas"), aJZ = (max.width = j, max.height = k, max.getContext("2d")), aJc = document.createElement("canvas"), aJd = (aJc.width = e.width, aJc.height = e.height, aJc.getContext("2d")), e = (aJd
					.drawImage(e, 0, 0), aJd.getImageData(0, 0, aJc.width, aJc.height)), aJd = aJZ.createImageData(j, k), src = e.data, aJg = aJd.data, aAN = aJc.width / j, aAO = aJc.height / k, fb = 0; fb < k; fb++)
				for (var fZ = 0; fZ < j; fZ++) {
					var aJh = Math.floor(fZ * aAN),
						aJh = 4 * (Math.floor(fb * aAO) * aJc.width + aJh),
						aJk = 4 * (fb * j + fZ);
					aJg[aJk] = src[aJh], aJg[1 + aJk] = src[1 + aJh], aJg[2 + aJk] = src[2 + aJh], aJg[3 + aJk] = 255
				}
			aJZ.putImageData(aJd, 0, 0), 20 === u.tc && u.a2c().aJX(max)
		}
	}
	this.di = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJP
	}, this.v1 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJQ = function() {
		input.click()
	}, this.aJS = function(aJT) {
		var h = aJT.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aJW, h.readAsDataURL(aJT))
	}
}

function cy() {
	this.aJl = null, this.di = function() {
		10 !== aE.l5 ? this.aJl = null : this.aJl = new Uint32Array(aE.fP)
	}, this.ee = function() {
		10 === aE.l5 && this.lc()
	}, this.lc = function() {
		for (var h0, target, aCl, aJl = this.aJl, a1C = am.lO, a4u = ah.hU, aC = am.lJ - 1; 0 <= aC; aC--)(h0 = a1C[aC]) >= aE.kn || (target = Math.max(bO.ft(a4u[h0], 4), 2048), aCl = Math.max(af.aCm(h0), 100), aJl[h0] += bO.ft(aCl * target,
			1e4), aJl[h0] > target && (aJl[h0] = target))
	}, this.a50 = function(player, iB) {
		return iB > this.aJl[player] ? (iB = this.aJl[player], this.aJl[player] = 0) : this.aJl[player] -= iB, iB
	}
}

function d1() {
	var aJm = -1,
		aJn = null,
		aJo = -1,
		vS = 4;

	function aJq() {
		aN.a7A() ? be.render() : be.a1a()
	}

	function aJy(ej, fV) {
		var eG = ej >> 16,
			u0 = ej >> 8 & 255,
			ej = 255 & ej,
			aJz = 255 - fV,
			aJz = (aJz < eG && aJz < u0 && aJz < ej && (fV = -fV), aJm >> 7),
			aK1 = aJm >> 5 & 3,
			aK2 = aJm >> 3 & 3;
		return (Math.max(Math.min(eG + fV, 252 + aJz), aJz) << 16) + (Math.max(Math.min(u0 + fV, 252 + aK1), aK1) << 8) + Math.max(Math.min(ej + fV, 252 + aK2), aK2)
	}

	function aJp() {
		return -1 !== aJm && (ad.aIl(aJm, aJn[0], aJn[1], aJn[2]), aJv(aJm), aJm = -1)
	}

	function aJv(player) {
		bi.dq = !0;
		for (var jL = ah.jL[player], jN = ah.jN[player], jM = ah.jM[player], jO = ah.jO[player], fb = jN; fb <= jO; fb++)
			for (var fZ = jL; fZ <= jM; fZ++) {
				var f6 = ad.z0(fZ, fb);
				ad.zM(player, f6) && (ad.aIr(f6) ? ad.jz(f6, player) : ad.jy(f6) ? ad.gx(f6, player) : ad.z1(f6, player))
			}
	}
	this.di = function() {
		aJn = null, aJo = aJm = -1, vS = bO.ia(Math.floor(bm.eW.data[16].value), 0, 16)
	}, this.ee = function(bx) {
		if (bm.eW.data[15].value && 0 !== vS && (bx || !bM.rn())) {
			var bx = bP.hi(bM.hX),
				hj = bP.hk(bM.hY);
			if (bP.hl(bx, hj)) {
				bx = bP.fp(bx, hj), hj = bP.fI(bx);
				if (aJo === hj)
					if (ad.h2(hj)) {
						if (aJm === ad.fK(hj)) return
					} else if (-1 === aJm) return;
				! function(f6) {
					ad.h2(f6) ? (f6 = ad.fK(f6)) !== aJm && (aJp(), function(player) {
						aJm = player, aJn = ad.aIp(player);
						var aJt = function() {
							var rD = aJn,
								aJw = vS << 2,
								aJx = aJw << 1;
							return [aJy(rD[0], aJw), aJy(rD[1], aJx), aJy(rD[2], aJx)]
						}();
						ad.aIl(player, aJt[0], aJt[1], aJt[2]), aJv(player)
					}(f6), aJq()) : aJp() && aJq()
				}(aJo = hj)
			} else aJp() && aJq()
		}
	}
}

function d2() {
	var vF = 0,
		aK3 = 0,
		aK4 = 0,
		aK5 = 0,
		aJo = -1;

	function aK8(f6) {
		if (aJo === f6) return !1;
		if (-1 === (aJo = f6)) vF = 0, aO.a8I(vF, 0);
		else {
			if (ad.h2(f6)) return aK4 = ad.fK(f6), km = ah.hU[aK4] - ah.a4t[aK4], (4 !== vF || km !== aK3) && (vF = 4, aK3 = km, aO.a8I(vF, km), !0);
			if (ad.fJ(f6)) return 3 !== vF && (vF = 3, aO.a8I(vF, 0), !0);
			if (ad.fX(f6)) return 2 !== vF && (vF = 2, aO.a8I(vF, 0), !0);
			var km = bQ.lc.a6y(bM.hX, bM.hY);
			if (-1 === km) return 1 !== vF && (vF = 1, aO.a8I(vF, 0), !0);
			f6 = bQ.z.a7w[km];
			if (aK4 = bQ.z.mg[km], aK5 = bQ.z.mh[km] >> 3, 5 === vF && f6 === aK3) return !1;
			vF = 5, aK3 = f6, aO.a8I(vF, f6)
		}
		return !0
	}
	this.di = function() {
		aK5 = aK4 = aK3 = vF = 0, aJo = -1
	}, this.ee = function(bx) {
		var hj;
		!bx && bM.rn() || (bx = bP.hi(bM.hX), hj = bP.hk(bM.hY), bP.hl(bx, hj) ? (bx = bP.fp(bx, hj), aK8(bP.fI(bx))) : aK8(-1))
	}, this.n4 = function() {
		var aKA, km, a6w, aK9;
		if (0 !== vF && 2 !== vF)
			if (bM.rn()) {
				if (1 !== vF && 3 !== vF) {
					if (4 === vF) return void(km = ah.hU[aK4] - ah.a4t[aK4], aK3 === km || (aK3 = km, aO.a8I(vF, km)));
					(a6w = bQ.lc.nn(aK5, aK4)) < 0 ? (vF = 1, aO.a8I(vF, 0)) : (aK9 = bQ.z.a7w[a6w]) !== aK3 && (aK3 = aK9, aO.a8I(vF, aK9))
				}
			} else if (1 === vF) - 1 !== (a6w = bQ.lc.a6y(bM.hX, bM.hY)) && (vF = 5, aK3 = bQ.z.a7w[a6w], aO.a8I(vF, aK3));
		else if (3 === vF) ad.h2(aJo) && (vF = 4, aKA = ad.fK(aJo), aK3 = ah.hU[aKA] - ah.a4t[aKA], aO.a8I(vF, aK3));
		else if (4 === vF) {
			if (ad.h2(aJo)) return void(aKA = ad.fK(aJo), km = ah.hU[aKA] - ah.a4t[aKA], aK3 === km || (aK3 = km, aO.a8I(vF, km)));
			vF = 3, aO.a8I(vF, 0)
		} else - 1 === (a6w = bQ.lc.a6y(bM.hX, bM.hY)) ? (vF = 1, aO.a8I(vF, 0)) : (aK9 = bQ.z.a7w[a6w]) !== aK3 && (aK3 = aK9, aO.a8I(vF, aK9))
	}
}

function db() {
	function aKC(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aKK, h.readAsText(e))
	}

	function aKK(e) {
		var aKN;
		aE.a1O || (e = JSON.parse(e.target.result), aKN = aE.data = new a5r, aKO(e, aKN, "mapType", 0, 2), aKO(e, aKN, "mapProceduralIndex", 0, 255), aKO(e, aKN, "mapRealisticIndex", 0, 255), aKO(e, aKN, "mapSeed", 0, 16383), function(aKM, aKN, h1,
				max) {
				aKM = aKM[h1];
				aKN[h1] = aKU(aKM) ? aKM.slice(0, max) : aKN[h1]
			}(e, aKN, "mapName", 20), function(aKM, aKN, h1) {
				var aJY;
				2 === aKN.mapType && (!aKU(aKM = aKM[h1]) || aKM.length <= 20 ? aKN.mapType = 0 : ((aJY = new Image).onload = function() {
					bC.aKV.aKW(aJY, 1), aJY.onload = null, aJY = null
				}, aJY.src = aKM))
			}(e, aKN, "canvas"), aKO(e, aKN, "passableWater", 0, 1), aKO(e, aKN, "passableMountains", 0, 1), aKO(e, aKN, "playerCount", 1, 512), aKO(e, aKN, "humanCount", 1, 1), aKO(e, aKN, "selectedPlayer", 0, 0), aKO(e, aKN, "gameMode", 0, 1),
			aKO(e, aKN, "playerMode", 0, 0), aKO(e, aKN, "battleRoyaleMode", 0, 0), aKO(e, aKN, "numberTeams", 0, 8), aKO(e, aKN, "isZombieMode", 0, 0), aKO(e, aKN, "isContest", 0, 0), aKO(e, aKN, "isReplay", 0, 0), aKR(e, aKN, "elo", 16, 2,
				16383), aKO(e, aKN, "colorsType", 0, 1), aKO(e, aKN, "colorsPersonalized", 0, 1), aKR(e, aKN, "colorsData", 32, 512, 262143), aKO(e, aKN, "selectableColor", 0, 1), aKR(e, aKN, "teamPlayerCount", 16, 9, 512), aKO(e, aKN,
				"neutralBots", 0, 1), aKO(e, aKN, "botDifficultyType", 0, 3), aKO(e, aKN, "botDifficultyValue", 0, 15), aKR(e, aKN, "botDifficultyTeam", 8, 9, 15), aKR(e, aKN, "botDifficultyData", 8, 512, 15), aKO(e, aKN, "spawningType", 0, 2),
			aKO(e, aKN, "spawningSeed", 0, 16383), aKR(e, aKN, "spawningData", 16, 1024, 4095), aKO(e, aKN, "selectableSpawn", 0, 1), aKO(e, aKN, "playerNamesType", 0, 2),
			function(aKM, aKN, h1, size, max) {
				var a40 = aKM[h1];
				if (Array.isArray(a40)) {
					for (var a41 = new Array(size), fS = Math.min(a40.length, size), aC = 0; aC < fS; aC++) a41[aC] = aKU(a40[aC]) ? a40[aC].slice(0, max) : "";
					a41.fill("", fS), aKN[h1] = a41
				}
			}(e, aKN, "playerNamesData", 512, 20), aKO(e, aKN, "selectableName", 0, 1), aKO(e, aKN, "aIncomeType", 0, 2), aKO(e, aKN, "aIncomeValue", 0, 255), aKR(e, aKN, "aIncomeData", 8, 512, 255), aKO(e, aKN, "tIncomeType", 0, 2), aKO(e, aKN,
				"tIncomeValue", 0, 255), aKR(e, aKN, "tIncomeData", 8, 512, 255), aKO(e, aKN, "iIncomeType", 0, 2), aKO(e, aKN, "iIncomeValue", 0, 255), aKR(e, aKN, "iIncomeData", 8, 512, 255), aKO(e, aKN, "sResourcesType", 0, 2), aKO(e, aKN,
				"sResourcesValue", 0, 2047), aKR(e, aKN, "sResourcesData", 16, 512, 2047), u.y(), u.z.tU[0] = 0, u.v(19))
	}

	function aKO(aKM, aKN, h1, min, max) {
		aKM = aKM[h1];
		aKN[h1] = "number" == typeof aKM && min <= aKM && aKM <= max ? Math.floor(aKM) : aKN[h1]
	}

	function aKU(r2) {
		return "string" == typeof r2
	}

	function aKR(aKM, aKN, h1, aKX, size, max) {
		var a40 = aKM[h1];
		if (Array.isArray(a40)) {
			for (var a41 = new(8 === aKX ? Uint8Array : 16 === aKX ? Uint16Array : Uint32Array)(size), fS = Math.min(a40.length, size), aC = 0; aC < fS; aC++) a41[aC] = bO.ia(a40[aC], 0, max);
			aKN[h1] = a41
		}
	}
	this.aKB = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aKC, input.click()
	}, this.aKD = function() {
		for (var aKG, aDz, a6P = aE.data, keys = Object.keys(a6P), aKE = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a6P[key] instanceof Uint8Array || a6P[key] instanceof Uint16Array || a6P[key] instanceof Uint32Array ? aKE[key] = Array.from(a6P[key]) : aKE[key] = a6P[key]
		}
		aKE.canvas = 2 === aKE.mapType && aKE.canvas ? aKE.canvas.toDataURL() : null, aKG = aKE, aKG = JSON.stringify(aKG, null, 2), aKG = new Blob([aKG], {
			type: "application/json"
		}), (aDz = document.createElement("a")).href = URL.createObjectURL(aKG), aDz.download = "tt_scenario.json", aDz.click()
	}
}

function cb() {
	var aKY, aKZ, size, jw, iB, aKa;

	function aKb(player) {
		return player < aE.kn ? aKY * player : aKY * aE.kn + aKZ * (player - aE.kn)
	}
	this.di = function() {
		aKY = aE.kn < 16 ? 12 : 8, aKZ = 4;
		var fS = aKb(aE.fP);
		size = new Uint8Array(aE.fP), jw = new Uint16Array(fS), iB = new Uint32Array(fS), aKa = new Uint8Array(fS)
	}, this.qt = function(a9G, aKc) {
		var aKd = this.hV(a9G, aKc),
			aKc = (this.hT(a9G, aKc, 0), bD.go.gr(a9G, aKd));
		bg.gs(a9G, aKd - aKc, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJL = function(player, aKc) {
		var aKg, aKc = function(player, aKc) {
			var aC, li = aKb(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (jw[li + aC] === aKc) return aC;
			return size[player]
		}(player, aKc);
		aKc !== size[player] && (aKg = iB[aKb(player) + aKc], this.gt(player, aKc), this.ei(player, aKg, aE.fP))
	}, this.k8 = function(player, aKc) {
		for (var li = aKb(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aKc) return !0;
		return !1
	}, this.kR = function(player) {
		return player < aE.kn ? size[player] < aKY : size[player] < aKZ
	}, this.gZ = function(player) {
		return size[player]
	}, this.ge = function(player, aC) {
		return jw[aKb(player) + aC]
	}, this.gf = function(player, aC) {
		return iB[aKb(player) + aC]
	}, this.hV = function(player, aKc) {
		for (var li = aKb(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aKc) return iB[li + aC];
		return 0
	}, this.aJC = function(player) {
		for (var li = aKb(player), fu = 0, aC = size[player] - 1; 0 <= aC; aC--) fu += iB[li + aC];
		return fu
	}, this.hT = function(player, aKc, aKg) {
		for (var li = aKb(player), aC = size[player] - 1; 0 <= aC; aC--) jw[li + aC] === aKc && (iB[li + aC] = aKg)
	}, this.hE = function(player, aC, aKg) {
		iB[aKb(player) + aC] = Math.max(aKg, 0)
	}, this.hF = function(player, aC) {
		aKa[aKb(player) + aC] = 0
	}, this.gg = function(player, aC) {
		return aKa[aKb(player) + aC]
	}, this.ei = function(player, aKg, aKc) {
		ap.ja.kP[player] = ap.ja.kP[aKc] = 8, bD.go.a4o(aKc) && bg.nJ[6 - bD.go.kA(player)]++;
		for (var li = aKb(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aKc) return iB[li + aC] += aKg, void(iB[li + aC] = iB[li + aC] > aE.a4w ? aE.a4w : iB[li + aC]);
		jw[li + size[player]] = aKc, iB[li + size[player]] = aKg, aKa[li + size[player]] = 1, size[player]++, aKc === aE.fC ? aO.a1b(player, 5) : player < aE.kn && player === aE.fC && ag.a7r(aKc)
	}, this.gt = function(player, eH) {
		var fl, li;
		if (0 !== size[player])
			for (li = aKb(player), size[player]--, fl = eH; fl < size[player]; fl++) jw[li + fl] = jw[li + fl + 1], iB[li + fl] = iB[li + fl + 1], aKa[li + fl] = aKa[li + fl + 1]
	}, this.aJ7 = function(player) {
		for (var fl, li, aJI = [], aC = am.lJ - 1; 0 <= aC; aC--)
			for (li = aKb(am.lO[aC]), fl = size[am.lO[aC]] - 1; 0 <= fl; fl--)
				if (jw[li + fl] === player) {
					aJI.push(am.lO[aC]);
					break
				} return aJI
	}
}

function cc() {
	var aKh;

	function aKj(player) {
		var eG, kS;
		return bD.go.kA(player) && player < aE.kn ? 0 : (eG = aKh[bO.ft((aE.fP - 1) * ah.hG[player], aE.kX)], bi.kk() < 1920 && (eG = Math.max(bO.ft(100 * (13440 - 6 * bi.kk()), 1920), eG)), kS = af.kT(player), ah.hU[player] > kS && (eG -= bO.ft(2 *
			eG * (ah.hU[player] - kS), kS)), Math.min(Math.max(eG, 0), 700))
	}

	function aKv(o0) {
		for (var hG = ah.hG, lO = am.lO, aC = am.lJ - 1; 0 <= aC; aC--) {
			var h0 = lO[aC];
			bD.go.gr(h0, bO.ft(o0 * hG[h0], 32))
		}
	}

	function aKs() {
		var xy = aE.fC;
		bR.fy[0] = ah.hU[xy] - ah.a4t[xy]
	}

	function aKu(eH) {
		var xy = aE.fC,
			xy = ah.hU[xy] - ah.a4t[xy] - bR.fy[0];
		af.aBM += xy, bg.nJ[eH] += xy
	}
	this.aBM = 0, this.dp = function() {
		for (var fS = aE.fP, aC = (aKh = new Uint16Array(fS), 0); aC < fS; aC++) aKh[aC] = 100 + aKi(bO.ft(25600 * aC, fS - 4), 9)
	}, this.di = function() {
		(this.aBM = 0) === aE.data.iIncomeType ? this.aCm = aKj : 1 === aE.data.iIncomeType ? this.aCm = function(player) {
			return bO.ft(aE.data.iIncomeValue * aKj(player), 64)
		} : this.aCm = function(player) {
			return bO.ft(aE.data.iIncomeData[player] * aKj(player), 64)
		}
	}, this.ee = function() {
		if (bi.kk() % 10 == 9 && (af.aBM = 0, function() {
				aKs();
				for (var lO = am.lO, hU = ah.hU, aC = am.lJ - 1; 0 <= aC; aC--) {
					var h0 = lO[aC],
						aKt = bO.ft(af.aCm(h0) * hU[h0], 1e4);
					bD.go.gr(h0, Math.max(aKt, 1))
				}
				aKu(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aKs(), 1 === aE.data.aIncomeType)
						for (var hG = ah.hG, lO = am.lO, o0 = aE.data.aIncomeValue, aC = am.lJ - 1; 0 <= aC; aC--) {
							var h0 = lO[aC];
							bD.go.gr(h0, bO.ft(o0 * hG[h0], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hG = ah.hG, lO = am.lO, o0 = aE.data.aIncomeData, aC = am.lJ - 1; 0 <= aC; aC--) {
								var h0 = lO[aC];
								bD.go.gr(h0, bO.ft(o0[h0] * hG[h0], 128))
							}
						}();
					aKu(18)
				}
			}(), bi.kk() % 100 == 99)) {
			if (aKs(), 0 === aE.data.tIncomeType) aKv(32);
			else if (1 === aE.data.tIncomeType) aKv(aE.data.tIncomeValue);
			else
				for (var hG = ah.hG, lO = am.lO, o0 = aE.data.tIncomeData, aC = am.lJ - 1; 0 <= aC; aC--) {
					var h0 = lO[aC];
					bD.go.gr(h0, bO.ft(o0[h0] * hG[h0], 32))
				}
			aKu(8)
		}
	}, this.kT = function(player) {
		return Math.min(100 * ah.hG[player], aE.a5n)
	}, this.ps = function(player, pt) {
		bt.qF(player, pt, bR.fz[0], 0), bD.go.gr(pt, bR.fz[0]), bg.qG(player, pt), ag.aKl(player, bR.fz[0] + bR.fz[1]), ag.qH(pt, bR.fz[0]), bD.go.mx(player)
	}, this.aKm = function() {
		for (var fS = am.lJ, a1C = am.lO, li = 0, a4u = ah.hU, aC = 0; aC < fS; aC++) li += a4u[a1C[aC]];
		return li
	}, this.aKn = function(aKo) {
		for (var h0, fS = am.lJ, a1C = am.lO, li = 0, a4u = ah.hU, fQ = bj.fQ, aC = 0; aC < fS; aC++) fQ[h0 = a1C[aC]] === aKo && (li += a4u[h0]);
		return li
	}
}

function ce() {
	var aKz, aL0, aL1, aL2, aL3, aL4, aL5, aL6, aL7, aL8, aL9, aLA, aLB, aLC, aLD, aLE, aLF, aLG, aLI, aLJ, aDs, aLK, aLL, aLR, aLS, aLH = null,
		aLN = 0,
		aLO = !1,
		aLP = new Float32Array(4),
		aLQ = 0,
		aBr = 112,
		aLT = 0;

	function rO() {
		aL7 = Math.floor(+i.ic), aL8 = Math.floor(.5 * aL7), aLH.width = i.j, aLH.height = i.k, aLI = aLH.getContext("2d", {
			alpha: !0
		}), bD.rL.textAlign(aLI, 1), bD.rL.textBaseline(aLI, 1), aLI.imageSmoothingEnabled = !0
	}

	function aLU() {
		var aC, aLZ;
		for (vx.font = bD.rL.t9(1, 100 * aL9), aLZ = 80 / Math.floor(vx.measureText(bD.sK.a0f(aE.a4w)).width), vx.font = bD.rL.t9(1, 100), aC = aE.fP - 1; 0 <= aC; aC--) aL6[aC] = 100 / Math.floor(vx.measureText(ah.zr[aC]).width), aL5[aC] = Math.min(
			aLZ, aL6[aC])
	}

	function aLa(aC) {
		return !aLT || (aC = ah.hU[aC]) < 1e6 ? 1 : aC < 1e7 ? aLP[0] : aLP[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aLY(iU) {
		aLO = !1, aLN = bi.eZ, aLG = !1, aLF = 1, aLD = aLE = 0, iU.clearRect(0, 0, i.j, i.k);
		for (var aLg, aLh, aC, aLi, fontSize, aLj, no = j6 / ie, np = j7 / ie, o1 = (i.j + j6) / ie, o2 = (i.k + j7) / ie, aLk = 0 !== ah.nN[aE.fC] && !bD.go.kA(aE.fC), fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl], (fontSize = Math.floor(aLC * ie *
			aLa(aC) * aL5[aC] * aL3[aC])) < aLB || aL7 <= fontSize || aL1[aC] + aL3[aC] > no && aL1[aC] < o1 && aL2[aC] + aL4[aC] > np && aL2[aC] < o2 && (aLg = Math.floor(i.j * (aL1[aC] + aL3[aC] / 2 - no) / (o1 - no)), aLh = Math.floor(i.k * (
			aL2[aC] + aL4[aC] / 2 - np) / (o2 - np) - .1 * fontSize), aLi = ad.a9m[aC], iU.font = bD.rL.t9(1 === ah.a4k[aC] ? 4 : 1, fontSize), iU.fillStyle = aLl(fontSize, aLi % 2), aLT ? aLm(iU, aC, fontSize, aLg, aLh, aLi) : aLn(aC,
			fontSize, aLg, aLh, iU), aLG = !0, 0 < aDs[aC] ? function(aLg, aLh, fontSize, aC, iU) {
			0 === kY[aC] ? ak.sa.a0W(aLJ[aC]) ? (function(aLg, aLh, fontSize, player, q4, iU) {
				for (var yV = aLh, iT = (iU.globalAlpha = aLv(fontSize), aLa(player) * (aLT ? aLQ : aL6[player])), yU = aLg - .5 * fontSize / iT - .9 * fontSize, fm = 0; fm < 2; fm++) iU.fillText(ak.sa.a0O(q4), yU, yV), yU = aLg +
					.5 * fontSize / iT + .9 * fontSize;
				iU.globalAlpha = 1
			}(aLg, aLh, fontSize, aC, aLJ[aC], iU), aLp(aLg, aLh, fontSize, 0, 0, iU)) : ak.sa.a0Y(aLJ[aC]) ? (aLy(aLg, aLh, fontSize, aLJ[aC], 0, iU), aLp(aLg, aLh, fontSize, 0, 1, iU)) : (aLy(aLg, aLh, fontSize, aLJ[aC], 1, iU), aLp(
				aLg, aLh, fontSize, 1, 0, iU)) : aLy(aLg, aLh, fontSize, aLJ[aC], 0, iU)
		}(aLg, aLh, fontSize, aC, iU) : 0 === kY[aC] && aLp(aLg, aLh, fontSize, 0, 0, iU), aLk && (0 < aDs[aC + aE.fP] || 0 < aDs[aC + 2 * aE.fP] || 0 < aDs[aC + 3 * aE.fP] || 0 < aDs[aC + 4 * aE.fP]) && function(aLg, aLh, fontSize, aC, iU) {
			var ej, gv = -1;
			for (ej = 4; 1 <= ej; ej--) 0 < aDs[aC + ej * aE.fP] && gv++;
			for (ej = 1; ej < 5; ej++) 0 < aDs[aC + ej * aE.fP] && (! function(aLg, aLh, fontSize, ej, aC, aLt, ea, iU) {
				var a4E;
				if (1 === ej) {
					aC = aLJ[aC + aE.fP];
					if (!ak.sa.a0X(aC)) return function(aLg, aLh, fontSize, q4, aLt, iU) {
						iU.globalAlpha = aLv(fontSize);
						aLg -= .534 * aLt * fontSize, aLt = aLh + 1.59 * fontSize;
						iU.font = bD.rL.t9(0, .785 * fontSize), iU.fillText(ak.sa.a0O(q4), aLg, aLt), iU.globalAlpha = 1
					}(aLg, aLh, fontSize, aC, aLt, iU);
					a4E = ak.xx.zx[aC - 1024 + ak.sa.a09]
				} else a4E = 2 === ej ? aM.a6e()[4].canvas[+(ea < 255)] : (3 === ej ? aM.a6e()[5] : aM.a6e()[6]).canvas[0];
				aC = ak.xx.zy, ea = .8 * fontSize / aC, ej = aLg - .5 * ea * aC - .534 * aLt * fontSize, aLg = aLh + 1.4 * ea * aC;
				iU.setTransform(ea, 0, 0, ea, ej, aLg), iU.globalAlpha = aLv(fontSize), iU.drawImage(a4E, 0, 0), iU.globalAlpha = 1, iU.setTransform(1, 0, 0, 1, 0, 0)
			}(aLg, aLh, fontSize, ej, aC, gv, aDs[aC + ej * aE.fP], iU), gv -= 2)
		}(aLg, aLh, fontSize, aC, iU), (aLj = aL9 * fontSize) < aLB || (iU.font = bD.rL.t9(1, aLj), aLh += Math.floor(.78 * fontSize), aLT ? aLn(aC, aLj, aLg, aLh, iU) : aLm(iU, aC, aLj, aLg, aLh, aLi)))
	}

	function aLn(aC, fontSize, fZ, fb, iU) {
		var ___id = aC;
		var showName = aC < aE.kn || !__fx.settings.hideBotNames;
		if (showName) iU.fillText(ah.zr[aC], fZ, fb), aC < aE.kn && 2 !== ah.a4k[aC] || (aC = fontSize / aL6[aC], iU.fillRect(fZ - .5 * aC, fb + bD.rL.a0P * fontSize, aC, Math.max(1, .1 * fontSize)));
		aLT && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iU.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iU.fillText(__fx.utils.getDensity(___id), fZ, showName ? fb + fontSize : fb)
		);
	}

	function aLm(iU, aC, fontSize, aLg, aLh, aLi) {
		var a4t = ah.a4t[aC],
			aLs = bD.sK.a0f(ah.hU[aC] - a4t);

		function drawDensity() {
			!aLT && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iU.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), iU.fillText(__fx.utils.getDensity(aC), aLg, aLh + fontSize))
		}
		a4t ? (a4t = iU.fillStyle, iU.fillStyle = aLl(fontSize, 2 + aLi % 2), iU.fillText(aLs, aLg, aLh), iU.fillStyle = a4t) : aLi >> 1 & 1 ? (iU.lineWidth = .05 * fontSize, iU.strokeStyle = aLl(fontSize, aLi % 2), iU.strokeText(aLs, aLg, aLh)) : (
			1 < aLi && (iU.lineWidth = .12 * fontSize, iU.strokeStyle = aLl(fontSize, aLi), iU.strokeText(aLs, aLg, aLh)), iU.fillText(aLs, aLg, aLh)), drawDensity()
	}

	function aLp(aLg, aLh, fontSize, aLt, aLu, iU) {
		var a79 = .95 * fontSize / aLL,
			aLg = aLg - .5 * a79 * aLK + .8 * aLt * fontSize,
			aLt = aLh - 1.76 * a79 * aLL - (.35 - bD.rL.a0P + .7) * aLu * fontSize;
		iU.setTransform(a79, 0, 0, a79, aLg, aLt), iU.globalAlpha = aLv(fontSize), iU.drawImage(ac.get(4), 0, 0), iU.globalAlpha = 1, iU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLy(aLg, aLh, fontSize, q4, aLt, iU) {
		var iO, yU, a79;
		iU.globalAlpha = aLv(fontSize), ak.sa.a0X(q4) ? (iO = ak.xx.zy, iU.setTransform(a79 = 1.1 * fontSize / iO, 0, 0, a79, yU = aLg - .5 * a79 * iO - .8 * aLt * fontSize, a79 = aLh - 1.55 * a79 * iO), iU.drawImage(ak.xx.zx[q4 - 1024 + ak.sa.a09],
			0, 0), iU.setTransform(1, 0, 0, 1, 0, 0)) : (yU = aLg - .8 * aLt * fontSize, a79 = aLh - (.35 - bD.rL.a0P + 1) * fontSize, iU.fillText(ak.sa.a0O(q4), yU, a79)), iU.globalAlpha = 1
	}

	function aLl(fontSize, aLi) {
		return aL8 <= fontSize && fontSize < aL7 ? bj.aM0[aLi] + aLv(fontSize).toFixed(3) + ")" : bj.aM1[aLi]
	}

	function aLv(fontSize) {
		return aL8 <= fontSize && fontSize < aL7 ? 1 - (fontSize - aL8) / (aL7 - aL8) : 1
	}

	function aMA(iT, j) {
		return 1 + Math.floor(aLA * iT * j)
	}

	function aM7(aC) {
		for (var left = aL1[aC], fl = aL1[aC] - ah.jL[aC] - 1; 0 <= fl; fl--)
			if (!aMC(aC, --left, aL2[aC], aL4[aC])) {
				left++;
				break
			} var right = aL1[aC];
		for (fl = ah.jM[aC] - aL1[aC] - aL3[aC]; 0 <= fl; fl--)
			if (!aMC(aC, ++right + aL3[aC] - 1, aL2[aC], aL4[aC])) {
				right--;
				break
			} var fZ = Math.floor((left + right) / 2),
			top = aL2[aC];
		for (fl = aL2[aC] - ah.jN[aC] - 1; 0 <= fl; fl--)
			if (!aMD(aC, fZ, --top, aL3[aC])) {
				top++;
				break
			} var bottom = aL2[aC];
		for (fl = ah.jO[aC] - aL2[aC] - aL4[aC]; 0 <= fl; fl--)
			if (!aMD(aC, fZ, ++bottom + aL4[aC] - 1, aL3[aC])) {
				bottom--;
				break
			} var fb = Math.floor((top + bottom) / 2);
		aM4(aC, fZ, fb, aL3[aC], aL4[aC]) && (aL1[aC] = fZ, aL2[aC] = fb)
	}

	function aM4(player, fZ, fb, j, k) {
		fV = Math.floor(.2 * j);
		for (var fV, ej = fZ + j - 1; fZ <= ej; ej--)
			if (!aMC(player, ej, fb, k)) return;
		for (ej = fb + k - 1 - (fV = (fV = Math.floor(.25 * k)) < 1 ? 1 : fV); fb + fV <= ej; ej--)
			if (!aMD(player, fZ, ej, j)) return;
		return 1
	}

	function aMC(player, fZ, fb, k) {
		return ad.zM(player, 4 * (fb * bV.fd + fZ)) && ad.zM(player, 4 * ((fb + k - 1) * bV.fd + fZ))
	}

	function aMD(player, fZ, fb, j) {
		return ad.zM(player, 4 * (fb * bV.fd + fZ)) && ad.zM(player, 4 * (fb * bV.fd + fZ + j - 1))
	}
	this.di = function() {
		if (aLT = bm.eW.data[7].value || 8 === aE.l5, aLG = !1, aLC = .88, aL9 = .5, aLA = 1.8, aLB = 12 - 3 * bm.eW.data[9].value, aL0 = aKz = 0, aL1 = new Uint16Array(aE.fP), aL2 = new Uint16Array(aE.fP), aL3 = new Uint16Array(aE.fP), aL4 =
			new Uint16Array(aE.fP), aL5 = new Float32Array(aE.fP), aL6 = new Float32Array(aE.fP), aLJ = new Uint16Array(2 * aE.fP), aDs = new Uint8Array(5 * aE.fP), aLR = new Uint8Array(aE.fP), aLS = new Uint8Array(aE.fP), aLH = aLH || document
			.createElement("canvas"), rO(), aLE = aLD = 0, aLF = 1, aLT) {
			var aC, aLZ;
			for (aLU(), vx.font = bD.rL.t9(1, 100), aLZ = 100 / Math.floor(vx.measureText("900 000").width), aC = aE.fP - 1; 0 <= aC; aC--) aL5[aC] = Math.min(aLZ, 2 * aL6[aC]);
			aLQ = aLZ, aLP[0] = 100 / (aLZ * Math.floor(vx.measureText("5 000 000").width)), aLP[1] = 100 / (aLZ * Math.floor(vx.measureText("50 000 000").width)), aLP[2] = 100 / (aLZ * Math.floor(vx.measureText("500 000 000").width)), aLP[3] =
				100 / (aLZ * Math.floor(vx.measureText("1 000 000 000").width))
		} else aLU();
		! function() {
			var aC;
			for (aC = aE.fP - 1; 0 <= aC; aC--) ah.hG[aC] < 12 ? (aL1[aC] = ah.jL[aC] + 1, aL2[aC] = ah.jN[aC] + 1, aL3[aC] = 1, aL4[aC] = 1) : (aL1[aC] = ah.jL[aC], aL2[aC] = ah.jN[aC] + 1, aL3[aC] = 4, aL4[aC] = 2);
			if (aE.hq)
				for (aC = 0; aC < aE.kn; aC++) aL3[aC] = 0;
			aLK = ac.get(4).width, aLL = ac.get(4).height
		}()
	}, this.aKl = function(h0, a6N) {
		a6N > 18 * ah.hG[h0] ? (aLS[h0] = 6, ad.a9m[h0] = 2 + ad.a9m[h0] % 2) : (aLR[h0] = 4, (ad.a9m[h0] < 2 || 3 < ad.a9m[h0]) && (ad.a9m[h0] = 6 + ad.a9m[h0] % 2))
	}, this.qH = function(h0, a6N) {
		a6N > 6 * ah.hG[h0] ? (aLS[h0] = 6, ad.a9m[h0] = 4 + ad.a9m[h0] % 2) : (aLR[h0] = 4, (ad.a9m[h0] < 4 || 5 < ad.a9m[h0]) && (ad.a9m[h0] = 8 + ad.a9m[h0] % 2))
	}, this.resize = function() {
		rO(), aLY(aLI)
	}, this.a5j = function() {
		for (var aC = 0; aC < aE.kn; aC++) ah.jM[aC] - ah.jL[aC] != 3 || ah.jO[aC] - ah.jN[aC] != 3 ? (aL1[aC] = ah.jL[aC] + (ah.jM[aC] !== ah.jL[aC] ? 1 : 0), aL2[aC] = ah.jN[aC], aL3[aC] = 1, aL4[aC] = 1) : (aL1[aC] = ah.jL[aC], aL2[aC] = ah
			.jN[aC] + 1, aL3[aC] = 4, aL4[aC] = 2)
	}, this.qu = function(player, eH, aLb) {
		! function(player, eH, aLb) {
			player += eH * aE.fP;
			0 === eH ? aLJ[player] === aLb && 0 < aDs[player] ? aDs[player] = 0 : (aLJ[player] = aLb, aDs[player] = ak.sa.a0W(aLb) ? 255 : 64) : 1 === eH ? (aDs[player] = 64, aLJ[player] = aLb) : aDs[player] = aLb
		}(player, eH, aLb), 2 === aE.a1O && this.n9(!0)
	}, this.vw = function() {
		aLG && (1 !== aLF ? (vx.imageSmoothingEnabled = !0, vx.setTransform(aLF, 0, 0, aLF, 0, 0), vx.drawImage(aLH, -aLD / aLF, -aLE / aLF), vx.setTransform(1, 0, 0, 1, 0, 0), vx.imageSmoothingEnabled = !1) : vx.drawImage(aLH, -aLD, -aLE))
	}, this.aAZ = function(ip, is) {
		aLD += ip, aLE += is
	}, this.a2u = function(ip, is) {
		ag.aAZ(ip, is)
	}, this.zoom = function(a3n, m2, m3) {
		aLF *= a3n, aLD = (aLD + m2) * a3n - m2, aLE = (aLE + m3) * a3n - m3
	}, this.aJ8 = function(player) {
		var jL = ah.jL[player],
			jM = ah.jM[player],
			jN = ah.jN[player],
			jO = ah.jO[player],
			j0 = bP.hi(0),
			j1 = bP.hk(0),
			j2 = bP.hi(i.j),
			j3 = bP.hk(i.k);
		jL < j2 && j0 < jM && jN < j3 && j1 < jO && (aL3[player] = 0, aLO = !0)
	}, this.n9 = function(bx) {
		return !(!aLO && !bx && bi.eZ < aLN + (1 === aLF && 0 === aLD && 0 === aLE && (aE.a6C() || aE.hq || 2 === aE.a1O) ? 1e3 : aBr) || (aLY(aLI), 0))
	}, this.aLe = function(aC) {
		return aLa(aC) * aL5[aC]
	}, this.aLf = function(player) {
		return aL5[player]
	}, this.ee = function() {
		bi.kk() % 10 == 9 && (aLO = aLO || aE.a6E() && !aE.a6C()), !aE.a6C() && 4 <= ++aL0 && function() {
			var aC, fl, fm;
			for (aL0 = 0, fm = 4; 1 <= fm; fm--)
				for (fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl] + fm * aE.fP, 0 < aDs[aC] && aDs[aC] < 255 && aDs[aC]--;
			if (2 !== aE.a1O)
				for (fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl], 0 < aDs[aC] && aDs[aC] < 255 && aDs[aC]--
		}();
		var aC, fl, fS = Math.floor(.1 * am.lJ);
		for (fS = (fS = fS < 8 ? 8 : fS) > am.lJ ? am.lJ : fS, aC = aKz + fS - 1; aKz <= aC; aC--) fl = aC % am.lJ, ! function(aC) {
			var iT = aLa(aC) * aL5[aC];
			0 < aL3[aC] && aM4(aC, aL1[aC], aL2[aC], aL3[aC], aL4[aC]) ? ! function(aC) {
				for (var fZ, fb, j, k, f6 = !1, fm = 0; fm < 8; fm++) {
					if (j = aL3[aC] + 2, k = aL4[aC] + 2, j > ah.jM[aC] - ah.jL[aC] + 1 || k > ah.jO[aC] - ah.jN[aC] + 1) return f6;
					if (fZ = aL1[aC] - 1, fb = aL2[aC] - 1, !aM4(aC, fZ, fb, j, k)) return f6;
					aL1[aC] = fZ, aL2[aC] = fb, aL3[aC] = j, aL4[aC] = k, f6 = !0
				}
				return f6
			}(aC) && function(aC, iT) {
				for (var fZ, fb, j, k, f6 = !1, aE1 = aL3[aC], o0 = 1 + Math.floor(.02 * aE1), fm = 1; fm < 5; fm++) {
					if ((j = aE1 + fm * o0) > ah.jM[aC] - ah.jL[aC] + 1) return f6;
					if ((k = aMA(iT, j)) > ah.jO[aC] - ah.jN[aC] + 1) return f6;
					fZ = ah.jL[aC] + Math.floor(Math.random() * (ah.jM[aC] - ah.jL[aC] + 2 - j)), fb = ah.jN[aC] + Math.floor(Math.random() * (ah.jO[aC] - ah.jN[aC] + 2 - k)), aM4(aC, fZ, fb, j, k) && (aL1[aC] = fZ, aL2[aC] = fb, aL3[
						aC] = j, aL4[aC] = k, f6 = !0)
				}
				return f6
			}(aC, iT) && aM7(aC) : ! function(aC, iT) {
				var k, fZ = aL1[aC] + 1,
					fb = aL2[aC] + 1,
					j = aL3[aC] - 2;
				for (;;) {
					if (j < 1) {
						aL3[aC] = 0;
						break
					}
					if (k = aMA(iT, j), aM4(aC, fZ, fb, j, k)) return aL1[aC] = fZ, aL2[aC] = fb, aL3[aC] = j, aL4[aC] = k, 1;
					fZ++, fb++, j -= 2
				}
				return
			}(aC, iT) ? function(aC, iT) {
				var fZ, fb, j, k, fm, o6, k3 = ah.jM[aC] - ah.jL[aC] + 1,
					aMB = Math.floor(.02 * k3);
				for (o6 = -6 * (aMB = aMB < 1 ? 1 : aMB), fm = k3; o6 <= fm; fm -= aMB)
					if (k = aMA(iT, j = 0 < fm ? fm : 1), fZ = ah.jL[aC] + Math.floor(Math.random() * (ah.jM[aC] - ah.jL[aC] + 2 - j)), fb = ah.jN[aC] + Math.floor(Math.random() * (ah.jO[aC] - ah.jN[aC] + 2 - k)), aM4(aC, fZ, fb, j, k))
						return aL1[aC] = fZ, aL2[aC] = fb, aL3[aC] = j, aL4[aC] = k
			}(aC, iT) : aM7(aC)
		}(am.lO[fl]);
		aKz = (aKz += fS) % am.lJ
	}, this.n3 = function() {
		var aC, h0, a0U, a0V;
		if (bi.kk() % 4 == 1)
			for (aC = am.lJ - 1; 0 <= aC; aC--) h0 = am.lO[aC], ad.a9m[h0] < 2 || ((a0U = Math.max(aLR[h0] - 1, 0)) === (a0V = Math.max(aLS[h0] - 1, 0)) ? 0 === a0U && (ad.a9m[h0] %= 2) : 0 === a0V && ad.a9m[h0] < 6 && (ad.a9m[h0] += 4), aLR[
				h0] = a0U, aLS[h0] = a0V)
	}, this.a7r = function(player) {
		var aC = player + 2 * aE.fP,
			ea = aDs[aC];
		return 0 < ea && (aO.a1W(50, player), aDs[aC] = 0, 255 === ea)
	}, this.a6t = function(player) {
		return 255 === aDs[player + 2 * aE.fP]
	}
}

function cg() {
	var aME, aMF, aMG;
	this.di = function() {
		aME =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aMF =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aMG = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a88 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEt = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aME.length - 1; 0 <= aC; aC--)
			for (var fl = a88.length - 1; 0 <= fl; fl--) aME[aC] = aME[aC].replace(a88[fl], aEt[fl]);
		if (__fx.settings.realisticNames) aME = realisticNames;
	}, this.a5z = function() {
		var fS = aE.kn,
			zr = ah.zr,
			a24 = ah.a24,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fS)
			for (var aC = 0; aC < fS; aC++) zr[aC] = a24[aC] = "Player " + az.k4(1e3);
		else
			for (aC = 0; aC < fS; aC++) zr[aC] = a24[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.l5) {
			for (var eG = az.random(), aMM = aMG, aMN = aMF, iB = aF.iB, fS = aMM.length, li = aE.data.teamPlayerCount[7], zr = ah.zr, a24 = ah.a24, aC = li - 1; aC >= aE.kn; aC--) zr[aC] = a24[aC] = aMM[(aC + eG) % fS];
			for (fS = aMN.length - 1, aC = li; aC < aE.fP; aC++) zr[aC] = a24[aC] = aMN[iB[aC] ? fS : aC % fS]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fS = aE.fP, zr = ah.zr, a24 = ah.a24, playerNamesData = aE.data.playerNamesData, aC = aE.kn; aC < fS; aC++) zr[aC] = a24[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var zr = ah.zr, a24 = ah.a24, aC = aE.kn; aC < aE.fP; aC++) zr[aC] = a24[aC] = "Bot " + az.k4(1e3)
		} : function() {
			for (var aMO = aME, fS = aMO.length, eG = az.random(), zr = ah.zr, a24 = ah.a24, aC = aE.kn; aC < aE.fP; aC++) zr[aC] = a24[aC] = aMO[(aC + eG) % fS]
		})()
	}
}

function cz() {
	this.aMP = [], this.aMQ = [], this.di = function() {
		this.aMP = [], this.aMQ = []
	}, this.ee = function() {
		0 <= this.aMP.length && this.aMR(this.aMP), 0 <= this.aMQ.length && this.aMR(this.aMQ)
	}, this.aMR = function(h) {
		for (var fm = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eZ--, h[aC].eZ <= 0) {
				fm = aC;
				break
			} for (aC = fm; 0 <= aC; aC--) h.shift()
	}, this.a6m = function(id, a1C, aMS) {
		return this.fn(this.aMP, id, a1C, aMS)
	}, this.aMT = function(id, a1C, aMS) {
		return this.fn(this.aMQ, id, a1C, aMS)
	}, this.fn = function(h, id, a1C, aMS) {
		return ! function(h, id, a1C) {
			var aC, iK;
			for (aC = a1C.length - 1; 0 <= aC; aC--)
				for (iK = h.length - 1; 0 <= iK; iK--)
					if (h[iK].player === a1C[aC] && id === h[iK].id) return 1;
			return
		}(h, id, a1C) && (aMS && function(h, id, a1C) {
			var aC;
			for (aC = a1C.length - 1; 0 <= aC; aC--) h.push({
				player: a1C[aC],
				id: id,
				eZ: 384
			})
		}(h, id, a1C), !0)
	}
}

function cf() {
	this.a24 = new Array(aE.fP), this.zr = new Array(aE.fP), this.a4k = new Uint8Array(aE.fP), this.nN = new Uint8Array(aE.fP), this.jL = new Uint16Array(aE.fP), this.jN = new Uint16Array(aE.fP), this.jM = new Uint16Array(aE.fP), this.jO =
		new Uint16Array(aE.fP), this.hG = new Uint32Array(aE.fP), this.yw = new Uint32Array(aE.fP), this.hU = new Uint32Array(aE.fP), this.gu = null, this.h8 = null, this.h9 = null, this.fr = null, this.qk = new Uint16Array(aE.fP), this.jq =
		new Uint16Array(aE.fP), this.jr = new Uint16Array(aE.fP), this.a1z = new Uint16Array(aE.fP), this.a1x = new Uint8Array(aE.fP), this.a4t = new Uint16Array(aE.fP), this.di = function() {
			this.a24.fill(""), this.zr.fill(""), this.a4k.fill(0), this.nN.fill(0), this.jL.fill(0), this.jN.fill(0), this.jM.fill(0), this.jO.fill(0), this.hG.fill(0), this.yw.fill(0), this.hU.fill(0), this.gu = new Array(aE.fP), this.h8 =
				new Array(aE.fP), this.h9 = new Array(aE.fP), this.fr = new Array(aE.fP), this.qk.fill(0), this.jq.fill(0), this.jr.fill(0), this.a1z.fill(0), this.a1x.fill(0), this.a4t.fill(0)
		}
}

function cx() {
	this.aEO = function(player) {
		aH.nM(player), aE.a1Q++, ah.a4k[player] = 2, ah.a1z[player] = bl.a2E.aJH(), player === aE.fC && (aY.show(!1, !1), aX.aCY(), bU.a19.a1v()), ag.a7r(player)
	}
}

function cY() {
	this.lO = null, this.lJ = 0, this.a63 = function() {
		for (this.lJ = 0, aC = aE.fP - 1; 0 <= aC; aC--) 0 !== ah.nN[aC] && this.lJ++;
		this.lO = new Uint16Array(this.lJ);
		for (var fS = 0, aC = 0; aC < aE.fP; aC++) 0 !== ah.nN[aC] && (this.lO[fS++] = aC)
	}, this.n2 = function() {
		for (var hG = ah.hG, yw = ah.yw, a1x = ah.a1x, lO = am.lO, aC = am.lJ - 1; 0 <= aC; aC--) {
			var h0 = lO[aC],
				ea = hG[h0],
				li = yw[h0];
			ea <= bO.ft(li, 4) ? al.dr(h0) : li <= ea ? 250 <= (yw[h0] = ea) && (a1x[h0] = 1) : yw[h0] = li - Math.max(1, bO.ft(li - ea, 1e3))
		}
		this.aMX()
	}, this.aMX = function() {
		for (var nN = ah.nN, lh = this.lO, aDG = this.lJ, aC = aDG - 1; 0 <= aC; aC--) 0 === nN[lh[aC]] && (lh[aC] = lh[--aDG]);
		this.lJ = aDG
	}
}

function cZ() {
	var aMY = new Uint16Array(aE.fP),
		aMZ = 0;

	function aMd(a7x, aMb) {
		var ej = bi.kk();
		return 3213 <= ej ? 4 + bO.ft(100 * aMb, af.kT(a7x)) : (a7x = 1 + bO.ft(aE.kX, 300), ej < 357 ? 2 + bO.ft(100 * aMb, a7x) : ej < 714 ? 2 + bO.ft(100 * aMb, 4 * a7x) : ej < 1071 ? 2 + bO.ft(100 * aMb, 10 * a7x) : ej < 2142 ? 2 + bO.ft(100 *
			aMb, 30 * a7x) : 2 + bO.ft(100 * aMb, 100 * a7x))
	}

	function aMc(a7x) {
		return aE.l7 || 4284 <= bi.kk() || bD.go.kA(a7x)
	}
	this.di = function() {
		aMY.fill(0), aMZ = 15
	}, this.i6 = function(pt) {
		var player = aE.fC;
		return !!bD.go.qm(player, pt) && !(!bD.go.qC(player, bD.go.j4(player, aS.hw()), pt) || (player = pt, pt = bR.fz[0], !aMc(player) && aMY[player] + aMd(player, pt) > aMZ))
	}, this.ei = function(a7x, aMb) {
		if (!aMc(a7x)) {
			aMb = aMd(a7x, aMb);
			if (aMY[a7x] + aMb > aMZ) return !1;
			aMY[a7x] += aMb
		}
		return !0
	}, this.ee = function() {
		bi.kk() % 100 == 99 && (bi.kk() < 1071 ? aMZ += 4 : bi.kk() < 2142 ? aMZ += 6 : bi.kk() < 3213 ? aMZ += 8 : aMZ += 10)
	}
}

function ch() {
	var aMe;
	this.lE = null, this.lD = 0, this.di = function() {
		aMe = [], 9 === aE.l5 && this.aMf()
	}, this.aMf = function() {
		this.lE = [0, 0, 0, 0, 0, 0];
		for (var aMg = [256, 227, 166, 148, 100, this.lD = 0, 0, 0], aMh = [0, 8, 24, 30, 46, 70, 256, 333], aMi = [0, 0, 3, 9, 17, 25, 256, 179], k = aE.kn, aC = 1; aC < aMg.length; aC++)
			if (k <= aMh[aC]) {
				this.lD = aMg[aC - 1] - bO.ft((k - aMh[aC - 1]) * (aMg[aC - 1] - aMg[aC]), aMh[aC] - aMh[aC - 1]), this.lE[5] = aMi[aC - 1] - bO.ft((k - aMh[aC - 1]) * (aMi[aC - 1] - aMi[aC]), aMh[aC] - aMh[aC - 1]), this.lE[0] = aE.fP - k - this
					.lD - this.lE[5];
				break
			} aE.l9 = aE.fP - aE.kn, aE.data.numberTeams = (0 < aE.kn) + (0 < aE.l9), aE.data.playerCount = aE.yS = aE.kn + aE.l9, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.kn + this.lD, aE.l9 - this.lD]), aE.a5s.a5x()
	}, this.aJO = function(player) {
		aMe.push({
			player: player,
			gv: 14 + az.k4(20)
		})
	}, this.ee = function() {
		if (9 === aE.l5)
			for (var aC = aMe.length - 1; 0 <= aC; aC--) --aMe[aC].gv <= 0 && (ag.qu(aMe[aC].player, 0, ak.sa.a0C + ak.sa.a0Q), aMe.splice(aC))
	}
}

function dG() {
	function aMy() {
		return {
			fd: bV.fd,
			fe: bV.fe,
			xu: bV.xu,
			xq: bV.xq,
			xr: bV.xr,
			xv: bV.xv,
			f8: bV.f8,
			mapSeed: bV.mapSeed,
			xs: bV.xs
		}
	}

	function aMq(aC) {
		return 1 !== aC && bV.aF3(aC) && aC !== bV.aN0()
	}
	this.aMk = 25, this.aMl = 13, this.aJa = 4096, this.fd = 0, this.fe = 0, this.xu = null, this.xq = null, this.xr = null, this.xv = null, this.f8 = 0, this.mapSeed = 0, this.xs = !1, this.xt = new aMm, this.xk = new aMn, this.a8F = new aMo, this
		.di = function() {
			this.xk.di()
		}, this.a8 = function(map, aMp) {
			((map %= this.aMk) !== this.f8 || aMq(this.f8) && aMp !== this.mapSeed) && (this.xs = !1, this.xt.aMr(), az.a5y(map), this.f8 = map, this.mapSeed = aMp, aMq(map) && (bV.xk.xl[map].aMs = aMp), this.aF3(this.f8) ? (map = bV.xk.xl[this.f8],
				this.fd = map.j, this.fe = map.k, az.a5y(map.aMs), ar.a8([this.fd, this.fe, map.nS, map.nP]), aMu(), aq.aMv(), ar.aMw()) : aMt())
		}, this.aMx = function(map, aMp) {
			var gB = aMy(),
				map = (this.a8(map, aMp), this.xt.aMr(), aMy());
			return aMp = gB, bV.fd = aMp.fd, bV.fe = aMp.fe, bV.xu = aMp.xu, bV.xq = aMp.xq, bV.xr = aMp.xr, bV.xv = aMp.xv, bV.f8 = aMp.f8, bV.mapSeed = aMp.mapSeed, bV.xs = aMp.xs, map
		}, this.a6J = function(canvas) {
			canvas && this.xu !== canvas && (this.fd = canvas.width, this.fe = canvas.height, this.xu = canvas, this.xq = this.xu.getContext("2d", {
				alpha: !1
			}), this.iR = this.xq.getImageData(0, 0, this.fd, this.fe), this.xv = this.iR.data, this.f8 = this.aN0(), this.mapSeed = 0, bV.xk.xl[this.f8].name = aE.data.mapName)
		}, this.f7 = function(aC) {
			return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aN0()
		}, this.aN1 = function(aC) {
			return 2 === aC || 7 === aC || 9 === aC || 20 === aC
		}, this.aN2 = function(aC) {
			return 1 === aC
		}, this.aN0 = function() {
			return this.aMk
		}, this.aF3 = function(aC) {
			return void 0 === this.xk.xl[aC].aN3
		}, this.a6I = function(rD) {
			return 0 === rD.mapType ? rD.mapProceduralIndex < 10 ? rD.mapProceduralIndex : 10 + rD.mapProceduralIndex : 1 === rD.mapType ? 10 <= rD.mapRealisticIndex ? 22 + rD.mapRealisticIndex - 10 : rD.mapRealisticIndex + 10 : void 0
		}, this.aF4 = function(rD, aN4) {
			0 === rD.mapType ? rD.mapProceduralIndex = aN4 < 10 ? aN4 : aN4 - 10 : 1 === rD.mapType && (rD.mapRealisticIndex = aN4 - (22 <= aN4 ? 12 : 10))
		}
}

function aMm() {
	function aND() {
		bV.xt.ee()
	}

	function aNJ(h0, aNI) {
		0 < aNI && (bV.xv[h0] += aNI, bV.xv[h0 + 1] += aNI, bV.xv[h0 + 2] += aNI)
	}

	function ii(h0) {
		return bV.xv[h0 + 2] > bV.xv[h0] && bV.xv[h0 + 2] > bV.xv[h0 + 1]
	}
	this.aAl = -1, this.a2R = 0, this.aN5 = 0, this.aN6 = 8, this.aN7 = 32, this.aN8 = 8, this.aN9 = 32, this.aNA = [0, 0], this.a9m = [0, 0, 0, 0], this.jF = null, this.aNB = !0, this.aNC = !1, this.aMr = function() {
		-1 !== this.aAl && clearTimeout(this.aAl), this.aAl = -1, this.jF = null, ar.aMw()
	}, this.di = function() {
		7 === ab.a2Y() || this.aNC || (this.aNB = !0, this.a2R = 0, this.aN5 = 1, this.aNA = [bV.xk.xl[bV.f8].yC[0], bV.xk.xl[bV.f8].yD[0]], this.a9m = [bV.xk.xl[bV.f8].aN3[3], bV.xk.xl[bV.f8].aN3[4], bV.xk.xl[bV.f8].aN3[5], bV.xk.xl[bV.f8].aN3[
			6]], this.aN6 = bV.xk.xl[bV.f8].aN3[7], this.aN7 = bV.xk.xl[bV.f8].aN3[8], this.aN8 = bV.xk.xl[bV.f8].aN3[9], this.aN9 = bV.xk.xl[bV.f8].aN3[10], this.aNB ? this.aAl = setTimeout(aND, 16) : this.ee())
	}, this.ee = function() {
		if (8 === ab.a2Y() && aI.ng()) this.aAl = setTimeout(aND, 16);
		else {
			if (0 === this.a2R) {
				var aMs = az.aNE();
				if (az.a5y(bV.xk.xl[bV.f8].aN3[2]), ar.a8([bV.fd, bV.fe, bV.xk.xl[bV.f8].aN3[0], bV.xk.xl[bV.f8].aN3[1]]), az.a5y(aMs), this.jF = ar.aNF(), this.a2R++, this.aNB) return void(this.aAl = setTimeout(aND, 16))
			}
			for (var h0, fE, aMs = this.aNB ? 10 : 1e6, aMs = bV.fe - this.aN5 - 1 < aMs ? bV.fe - this.aN5 - 1 : aMs, z9 = this.aN5 + aMs, fb = this.aN5; fb < z9; fb++)
				for (var fZ = 1; fZ < bV.fd - 1; fZ++) ii(h0 = 4 * (fE = fZ + fb * bV.fd)) ? this.aNG(h0, fE, 1) : (this.aNG(h0, fE, 0), function(fZ, fb, h0) {
					return 1 < fZ && ii(h0 - 4) || fZ < bV.fd - 2 && ii(h0 + 4) || 1 < fb && ii(h0 - 4 * bV.fd) || fb < bV.fe - 2 && ii(h0 + 4 * bV.fd)
				}(fZ, fb, h0) && this.aNH(fZ, fb));
			this.aN5 = z9, this.aN5 >= bV.fe - 1 ? (bV.xq.putImageData(bV.xr, 0, 0, 1, 1, bV.fd - 2, bV.fe - 2), bi.dq = !0, this.aMr()) : this.aNB && (this.aAl = setTimeout(aND, 16))
		}
	}, this.aNG = function(h0, fE, eH) {
		aNJ(h0, Math.floor(this.aNA[eH] + this.a9m[eH] * this.jF[fE] / 1e4) - bV.xv[h0])
	}, this.aNK = function(h0, eG, aNL, eH, a9m) {
		aNJ(h0, Math.floor(this.aNA[eH] + (1 - eG / aNL) * a9m) - bV.xv[h0])
	}, this.aNH = function(m2, m3) {
		for (var h0, eG, aNL, aAb = m2 - this.aN7, aNM = m3 - this.aN7, zA = m2 + this.aN7, z9 = m3 + this.aN7, aAb = aAb < 1 ? 1 : aAb, zA = zA > bV.fd - 2 ? bV.fd - 2 : zA, z9 = z9 > bV.fe - 2 ? bV.fe - 2 : z9, fb = aNM < 1 ? 1 : aNM; fb <=
			z9; fb++)
			for (var fZ = aAb; fZ <= zA; fZ++) ii(h0 = 4 * (fZ + fb * bV.fd)) ? (aNL = this.aN6 + (this.aN7 - this.aN6) * this.jF[fZ + bV.fd * fb] / 1e4, Math.abs(m2 - fZ) > aNL || Math.abs(m3 - fb) > aNL || aNL <= (eG = Math.sqrt((m2 - fZ) * (
				m2 - fZ) + (m3 - fb) * (m3 - fb))) || this.aNK(h0, eG, aNL, 1, this.a9m[3])) : (aNL = this.aN8 + (this.aN9 - this.aN8) * this.jF[fZ + bV.fd * fb] / 1e4, Math.abs(m2 - fZ) > aNL || Math.abs(m3 - fb) > aNL || aNL <= (eG = Math
				.sqrt((m2 - fZ) * (m2 - fZ) + (m3 - fb) * (m3 - fb))) || this.aNK(h0, eG, aNL, 0, this.a9m[2]))
	}
}

function aMu() {
	var tJ = aNN(bV.f8);
	tJ && aNO(tJ[0], tJ[1], tJ[2], tJ[3], tJ[4])
}

function aNN(f8) {
	return 2 === f8 ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === f8 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === f8 ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === f8 ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === f8 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aNO(aNP, aNQ, aNR, aNS, aNT) {
	for (var fZ, fb, aJw, aJx, a3n, aNW, io = aNP.length - 1, aNU = bV.fd + bV.fe, fS = (aNU *= aNU, aNR.length), aNV = Array(fS), aC = fS - 1; 0 <= aC; aC--) aNV[aC] = aNR[aC] * aNR[aC];
	var aNX = new Array(fS),
		aDp = new Array(fS),
		aNY = new Array(fS),
		fu = ar.aNF();
	if (void 0 === aNT)
		for (aNT = new Array(fS), aC = fS - 1; 0 <= aC; aC--) aNT[aC] = 0;
	for (aC = 1; aC < fS; aC++) aNX[aC] = aNV[aC] - aNV[aC - 1], aDp[aC] = aNS[aC] - aNS[aC - 1], aNY[aC] = aNT[aC] - aNT[aC - 1];
	for (fZ = bV.fd - 1; 0 <= fZ; fZ--)
		for (fb = bV.fe - 1; 0 <= fb; fb--) {
			for (aJw = aNU, aC = io; 0 <= aC; aC--) aJw = (aJx = (fZ - aNP[aC]) * (fZ - aNP[aC]) + (fb - aNQ[aC]) * (fb - aNQ[aC])) < aJw ? aJx : aJw;
			for (a3n = aNS[fS - 1], aNW = aNT[fS - 1], aC = 1; aC < fS; aC++)
				if (aJw < aNV[aC]) {
					a3n = aNS[aC - 1] + aIi((aJw - aNV[aC - 1]) * aDp[aC], aNX[aC]), aNW = aNT[aC - 1] + aIi((aJw - aNV[aC - 1]) * aNY[aC], aNX[aC]);
					break
				} aNZ(bV.fd * fb + fZ, a3n, aNW, fu)
		}
}

function aNZ(eH, a3n, aNW, fu) {
	a3n < 500 ? fu[eH] = bO.ft(fu[eH] * a3n * 2, 1e3) : 500 < a3n && (fu[eH] += bO.ft(2 * (1e4 - fu[eH]) * (a3n - 500), 1e3)), fu[eH] += bO.ft(aNW * (10 * a3n - fu[eH]), 1e3)
}

function cj() {
	var aNa;

	function aNk(a4E, iT, fZ, fb, globalAlpha) {
		bV.xq.save(), bV.xq.globalAlpha = globalAlpha, bV.xq.imageSmoothingEnabled = !1, bV.xq.scale(iT, iT), bV.xq.drawImage(a4E, Math.floor(fZ * (bV.fd / iT - a4E.width)), Math.floor(fb * (bV.fe / iT - a4E.height))), bV.xq.restore()
	}
	this.a8C = 0, this.a8D = 0, this.a8E = 0, this.a8F = 0, this.di = function() {
		(aNa = new Array(bV.aMk))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eG: [220, 250, 255, 220],
			u0: [190, 220, 0, 0],
			fm: [170, 200, 0, 0]
		}, aNa[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eG: [25, 0, 100, 0, 25],
			u0: [25, 0, 0, 0, 25],
			fm: [25, 0, 0, 0, 25]
		}, aNa[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eG: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			u0: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fm: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aNa[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eG: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			u0: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fm: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aNa[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eG: [10, 10, 20, 10, 10, 170, 212],
			u0: [20, 20, 60, 100, 100, 110, 170],
			fm: [70, 70, 160, 30, 30, 60, 120]
		}, aNa[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eG: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			u0: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aNa[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eG: [10, 10, 60, 255, 255, 200, 200],
			u0: [10, 10, 60, 255, 255, 200, 200],
			fm: [80, 80, 255, 255, 255, 200, 200]
		}, aNa[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eG: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			u0: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aNa[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eG: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			u0: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aNa[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eG: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			u0: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aNa[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eG: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			u0: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fm: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aNa[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eG: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			u0: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fm: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMv = function() {
		var aNj, aC, fl, gB, iR = function() {
				var iR;
				return bV.xu = document.createElement("canvas"), bV.xu.width = bV.fd, bV.xu.height = bV.fe, bV.xq = bV.xu.getContext("2d", {
					alpha: !1
				}), iR = bV.xq.getImageData(0, 0, bV.fd, bV.fe), bV.xv = iR.data, iR
			}(),
			j = aNa[bV.f8].j,
			eG = aNa[bV.f8].eG,
			u0 = aNa[bV.f8].u0,
			fm = aNa[bV.f8].fm,
			fu = ar.aNF(),
			fS = j.length - 2,
			aNe = new Array(1 + fS),
			aNf = new Array(1 + fS),
			aNg = new Array(1 + fS),
			aNh = new Array(1 + fS);
		for (fl = fS; 0 <= fl; fl--) aNe[fl] = j[fl + 1] - j[fl], aNf[fl] = eG[fl + 1] - eG[fl], aNg[fl] = u0[fl + 1] - u0[fl], aNh[fl] = fm[fl + 1] - fm[fl];
		for (aC = bV.fd * bV.fe - 1; 0 <= aC; aC--)
			for (fl = fS; 0 <= fl; fl--)
				if (fu[aC] >= j[fl]) {
					gB = fu[aC] - j[fl], bV.xv[4 * aC] = eG[fl] + aIi(aNf[fl] * gB, aNe[fl]), bV.xv[4 * aC + 1] = u0[fl] + aIi(aNg[fl] * gB, aNe[fl]), bV.xv[4 * aC + 2] = fm[fl] + aIi(aNh[fl] * gB, aNe[fl]), bV.xv[4 * aC + 3] = 255;
					break
				} bV.xq.putImageData(iR, 0, 0), bV.aN2(bV.f8) && ac.u4() && bV.aN2(bV.f8) && (iR = ac.aHs("arena"), aNj = ac.aHs("territorial.io"), aNk(iR, 5, .5, .5, .1), aNk(aNj, 2, .5, .45, .1)), bV.xs = !0, bi.dq = !0
	}, this.a61 = function() {
		for (var h0, fZ, fb, aNl, iI, gD, a8D = 0, j = bV.fd, k = bV.fe, gB = j * k * 4, aNm = aDO, aNn = bV.xv, aC = j - 1; 0 <= aC; aC--) aNm[(h0 = aC << 2) + 2] = aNm[gB - h0 - 2] = 3;
		for (gB = 4 * j, aC = k - 1; 0 <= aC; aC--) aNm[(h0 = aC * gB) + 2] = aNm[h0 + gB - 2] = 3;
		for (aNl = j - 1, iI = k - 1, fb = 1; fb < iI; fb++)
			for (gB = fb * j, fZ = 1; fZ < aNl; fZ++) gD = 1 - (aNn[(h0 = gB + fZ << 2) + 2] > aNn[h0 + 1] && aNn[h0 + 2] > aNn[h0]), aNm[h0 + 2] = 6 - 5 * gD, a8D += gD;
		this.a8C = (j - 2) * (k - 2), this.a8F = 0, bV.f7(bV.f8) && (bV.a8F.aNo(), bV.a8F.aNp(4, 5)), this.a8D = aE.kX = a8D - this.a8F, this.a8E = this.a8C - this.a8D - this.a8F, this.a8E && (bV.a8F.aNp(6, 2), bV.a8F.aNq())
	}
}

function aMt() {
	var r2;
	10 === bV.f8 ? r2 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.f8 ? r2 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.f8 ? r2 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.f8 ? r2 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.f8 ? r2 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.f8 ? r2 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.f8 ? r2 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.f8 ? r2 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.f8 ? r2 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.f8 ? r2 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.f8 ? r2 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.f8 ? r2 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.f8 && (r2 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xd).xf(r2)
}

function aMn() {
	this.xl = null, this.aNr = null, this.aNs = null, this.di = function() {
		this.aNt = [L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), "Mare Nostrum"];
		var aNu = [120, 105, 92],
			cos = [12, 12, 60],
			aNv = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aNw = [140, 130, 120],
			aNx = [12, 12, 76],
			aNy = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aNz = [130, 117, 106],
			aO0 = [12, 12, 68],
			aO1 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xl = new Array(bV.aMk + 1), this.xl[0] = {
			j: 230,
			k: 230,
			nS: 1e3,
			nP: 2e3,
			aMs: 173
		}, this.xl[1] = {
			j: 800,
			k: 800,
			nS: 100,
			nP: 50,
			aMs: 43
		}, this.xl[2] = {
			j: 512,
			k: 512,
			nS: 128,
			nP: 32,
			aMs: 0
		}, this.xl[3] = {
			j: 960,
			k: 960,
			nS: 60,
			nP: 8,
			aMs: 0
		}, this.xl[4] = {
			j: 900,
			k: 900,
			nS: 100,
			nP: 5,
			aMs: 0
		}, this.xl[5] = {
			j: 1e3,
			k: 1e3,
			nS: 100,
			nP: 40,
			aMs: 0
		}, this.xl[6] = {
			j: 1e3,
			k: 1e3,
			nS: 100,
			nP: 20,
			aMs: 0
		}, this.xl[7] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aMs: 0
		}, this.xl[8] = {
			j: 820,
			k: 820,
			nS: 200,
			nP: 100,
			aMs: 0
		}, this.xl[9] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aMs: 0
		}, this.xl[10] = {
			yC: aNw,
			yD: aNx,
			aN3: aNy
		}, this.xl[11] = {
			yC: aNz,
			yD: aO0,
			aN3: aO1
		}, this.xl[12] = {
			yC: aNz,
			yD: aO0,
			aN3: aO1
		}, this.xl[13] = {
			yC: aNu,
			yD: cos,
			aN3: aNv
		}, this.xl[14] = {
			yC: aNu,
			yD: cos,
			aN3: aNv
		}, this.xl[15] = {
			yC: aNw,
			yD: aNx,
			aN3: aNy
		}, this.xl[16] = {
			yC: aNw,
			yD: aNx,
			aN3: aNy
		}, this.xl[17] = {
			yC: aNu,
			yD: cos,
			aN3: aNv
		}, this.xl[18] = {
			yC: aNz,
			yD: aO0,
			aN3: aO1
		}, this.xl[19] = {
			yC: aNu,
			yD: cos,
			aN3: aNv
		}, this.xl[20] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aMs: 0
		}, this.xl[21] = {
			j: 940,
			k: 940,
			nS: 80,
			nP: 8,
			aMs: 0
		}, this.xl[22] = {
			yC: aNz,
			yD: aO0,
			aN3: aO1
		}, this.xl[23] = {
			yC: aNw,
			yD: aNx,
			aN3: aNy
		}, this.xl[24] = {
			yC: [157, 136, 117],
			yD: [16, 13, 68],
			aN3: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8B: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aMk; aC++) this.xl[aC].name = this.aNt[aC];
		this.xl[bV.aMk] = {
			name: ""
		}, this.aNr = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aNr[aC] = aC;
		for (this.aNr[10] = 20, this.aNr[11] = 21, this.aNs = new Uint8Array(bV.aMl), aC = 0; aC < 10; aC++) this.aNs[aC] = 10 + aC;
		this.aNs[10] = 22, this.aNs[11] = 23, this.aNs[12] = 24
	}
}

function aMo() {
	this.aNo = function() {
		for (var h0, fZ, gB, aNm = aDO, aNn = bV.xv, j = bV.fd, aNl = j - 1, iI = bV.fe - 1, gv = 0, fb = 1; fb < iI; fb++)
			for (gB = fb * j, fZ = 1; fZ < aNl; fZ++) aNn[h0 = gB + fZ << 2] === aNn[1 + h0] && aNn[h0] === aNn[2 + h0] && (gv++, aNm[2 + h0] = 4);
		aq.a8F = gv
	}, this.aNp = function(aO4, aO5) {
		for (var aNm = aDO, j = bV.fd, aNl = j - 1, iI = bV.fe - 1, id = 0, fb = 1; fb < iI; fb++)
			for (var gB = fb * j, fZ = 1; fZ < aNl; fZ++) {
				var f6 = 2 + (gB + fZ << 2);
				aNm[f6] === aO4 && (! function(f6, id, aO4, aO5) {
					var fS = 1,
						aNm = aDO,
						fU = ad.aIZ,
						a40 = [f6],
						aO7 = id >> 8 << 1,
						aO8 = 255 & id;
					aNm[f6 - 2] = aO7, aNm[f6 - 1] = aO8, aNm[f6] = 5;
					for (; fS;) {
						for (var a41 = [], aC = 0; aC < fS; aC++)
							for (var fH = a40[aC], fV = 0; fV < 8; fV++) {
								var fW = fH + fU[fV];
								aNm[fW] === aO4 && (aNm[fW - 2] = aO7, aNm[fW - 1] = aO8, aNm[fW] = aO5, a41.push(fW))
							}
						fS = (a40 = a41).length
					}
				}(f6, id, aO4, aO5), id = (id + 1) % 32768)
			}
	}, this.aNq = function() {
		for (var aNm = aDO, j = bV.fd, aNl = j - 3, iI = bV.fe - 3, aOA = 12 * j, fb = 3; fb < iI; fb++)
			for (var gB = fb * j, fZ = 3; fZ < aNl; fZ++) {
				var f6 = 2 + (gB + fZ << 2);
				2 !== aNm[f6] || 2 === aNm[f6 - 12] && 2 === aNm[12 + f6] && 2 === aNm[f6 - aOA] && 2 === aNm[f6 + aOA] || (aNm[f6 - 2] = 1 | aNm[f6 - 2])
			}
	}
}

function a60() {
	(zV = void 0 === zV ? document.createElement("canvas") : zV).width = bV.fd, zV.height = bV.fe, a64 = zV.getContext("2d", {
		alpha: !0
	}), a65 = aDO = null, a65 = a64.getImageData(0, 0, bV.fd, bV.fe), aDO = a65.data, bD.rT.xw(aDO)
}

function ck() {
	var fu, j, k, max, aOB, nP, aOD, aOE, aOF, aOG, aOH, aOI, aOJ, aOK, aOC = 1e4;

	function aOR(aOQ, nS, fS) {
		var aC;
		for (aOD[0] = aOQ, aC = 1; aC < fS; aC++) aOD[aC] = aOD[aC - 1] + nS, nS = aOD[aC] >= aOC ? (aOD[aC] = aOC - 1, -nS) : aOD[aC] < 0 ? (aOD[aC] = 0, -nS) : (nS += 16384 <= az.random() ? nP : -nP) < -aOB ? -aOB : aOB < nS ? aOB : nS
	}

	function aOT(fZ, fb, aOU, fS) {
		(aOU ? function(fZ, fb, fS) {
			var aC;
			for (aC = 0; aC < fS; aC++) fu[fb * j + fZ + aC] = aOD[aC]
		} : function(fZ, fb, fS) {
			var aC;
			for (aC = 0; aC < fS; aC++) fu[fb * j + fZ + aC * j] = aOD[aC]
		})(fZ, fb, fS)
	}

	function aOX(value, fS) {
		var aC, aMB, f6, k2 = value - aOD[fS - 1];
		if (0 != k2) {
			for (aMB = 1 + bO.ft(Math.abs(k2), fS - 1), aMB = k2 < 0 ? -aMB : aMB, aOD[fS - 1] = value, f6 = (f6 = fS - 1 - bO.ft(Math.abs(k2), Math.abs(aMB))) < 1 ? 1 : fS - 2 < f6 ? fS - 2 : f6, aC = fS - 2; f6 <= aC; aC--) aOD[aC] += k2 - (fS -
				1 - aC) * aMB;
			(k2 < 0 ? function(fS) {
				var aC;
				for (aC = fS - 2; 1 <= aC; aC--) aOD[aC] < 0 && (aOD[aC] = -aOD[aC] - 1)
			} : function(fS) {
				var aC;
				for (aC = fS - 2; 1 <= aC; aC--) aOD[aC] >= aOC && (aOD[aC] = 2 * aOC - aOD[aC] - 1)
			})(fS)
		}
	}

	function aOa(a40, a41, fS) {
		for (var aC = 0; aC < fS; aC++) a40[aC] = a41[aC]
	}

	function aOb(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aOc(a6g, gap, iJ) {
		aOE.push(a6g), aOF.push(gap), aOG.push(iJ)
	}
	this.a8 = function(a5E) {
		! function(a5E) {
			var aC;
			for (j = a5E[0], k = a5E[1], aOB = a5E[2], nP = a5E[3], fu = new Int16Array(j * k), max = k < j ? j : k, aOD = new Int16Array(max), aOE = [], aOF = [], aOG = [], aOH = new Array(j), aOI = new Array(k), aC = j - 1; 0 <= aC; aC--) aOH[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aOI[aC] = !1;
			aOJ = new Int16Array(j), aOK = new Int16Array(k)
		}(a5E),
		function(fS) {
			var aOQ = az.random() % aOC,
				nS = az.random() % (2 * aOB + 1) - aOB;
			aOR(aOQ, nS, fS)
		}(max), aOa(aOK, aOD, k), aOT(0, 0, !0, j);
		var fZ, fb, a5E = fu[0],
			fS = max,
			nS = az.random() % (2 * aOB + 1) - aOB;
		for (aOR(a5E, nS, fS), aOa(aOJ, aOD, j), aOT(0, 0, !1, k), aOb(aOJ), aOb(aOK), aOR(fu[j - 1], aOJ[j - 1], k), aOT(j - 1, 0, !1, k), aOR(fu[j * (k - 1)], aOK[k - 1], j), aOX(fu[j * k - 1], j), aOT(0, k - 1, !0, j), aOH[j - 1] = aOH[0] = !
			0, aOI[k - 1] = aOI[0] = !0, aOc(0, j, !0), aOc(0, k, !1), ! function() {
				var aOe, a6g;
				for (;;) {
					if (aOe = function() {
							var aC, aOe = aOE.length - 1;
							for (aC = aOe - 1; 0 <= aC; aC--) aOF[aC] > aOF[aOe] && (aOe = aC);
							return aOe
						}(), aOF[aOe] < 5) return;
					a6g = aOE[aOe] + bO.ft(aOF[aOe], 2), (aOG[aOe] ? function(fZ) {
						var fS, aOh, aC, aHE = 0,
							aOi = 0;
						for (; aOi < k - 1;) {
							for (aC = aHE + 1; aC < k; aC++)
								if (aOI[aC]) {
									aOi = aC;
									break
								} fS = aOi - aHE + 1, aOR(fu[fZ + j * aHE], 0 === aHE ? aOJ[fZ] : aOD[aOh - 1] - aOD[aOh - 2], fS), aOX(fu[aOi * j + fZ], fS), aOT(fZ, aHE, !1, fS), aOh = fS, aHE = aOi
						}
						aOH[fZ] = !0
					} : function(fb) {
						var fS, aOh, aC, aHE = 0,
							aOi = 0;
						for (; aOi < j - 1;) {
							for (aC = aHE + 1; aC < j; aC++)
								if (aOH[aC]) {
									aOi = aC;
									break
								} fS = aOi - aHE + 1, aOR(fu[fb * j + aHE], 0 === aHE ? aOK[fb] : aOD[aOh - 1] - aOD[aOh - 2], fS), aOX(fu[fb * j + aOi], fS), aOT(aHE, fb, !0, fS), aOh = fS, aHE = aOi
						}
						aOI[fb] = !0
					})(a6g), aOc(a6g, aOE[aOe] + aOF[aOe] - a6g, aOG[aOe]), aOF[aOe] = a6g - aOE[aOe] + 1
				}
			}(), fZ = 0; fZ < j; fZ++)
			if (!aOH[fZ])
				for (fb = 0; fb < k; fb++) aOI[fb] || ! function(fZ, fb) {
					var value = fu[fb * j + fZ - 1] + fu[(fb - 1) * j + fZ],
						a8U = 2;
					aOH[fZ + 1] && (a8U++, value += fu[fb * j + fZ + 1]);
					aOI[fb + 1] && (a8U++, value += fu[(fb + 1) * j + fZ]);
					fu[fb * j + fZ] = bO.ft(value, a8U)
				}(fZ, fb)
	}, this.aNF = function() {
		return fu
	}, this.aMw = function() {
		fu = null
	}
}

function aIi(fl, fm) {
	return 0 <= fl ? bO.ft(fl, fm) : -bO.ft(-fl, fm)
}

function kJ(fu) {
	return fu * fu
}

function a7f(fl, fm) {
	return fm < fl ? fl : fm
}

function aCu(fl, fm) {
	return fl < fm ? fl : fm
}

function aA6(fl, fu, fm) {
	return fu < fl ? fl : fm < fu ? fm : fu
}

function aOk(fu, fS) {
	for (var ej = bO.ft(fu + 1, 2), aC = 0; aC < fS; aC++) ej = bO.ft(ej + bO.ft(fu, ej), 2);
	return ej
}

function aKi(fu, fS) {
	return fu < 1 ? 0 : aOk(fu, fS)
}

function aOl(no, np, ti, a9p, o1, o2, tj, uR) {
	return !(no + ti <= o1 || np + a9p <= o2 || o1 + tj <= no || o2 + uR <= np)
}

function aOm(no, np, ti, a9p, o1, o2, tj, uR) {
	return no <= o1 && np <= o2 && o1 + tj <= no + ti && o2 + uR <= np + a9p
}

function xn(fu) {
	return Math.floor(!!fu * (1 + Math.log2(fu + .5)))
}

function c0() {
	this.ft = function(fl, fm) {
		return Math.floor((fl + .5) / fm)
	}, this.aOn = function(fl, fm) {
		return Math.floor(fl * (fm + .5))
	}, this.sqrt = function(fu) {
		return ~~Math.sqrt(fu + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ia = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aOo = function(gB, gD, gF) {
		return Math.max(Math.min(gB, gD), gF)
	}, this.aOp = function(aOq, aOr, fZ, fb) {
		fZ -= aOq, aOq = fb - aOr, fb = 0;
		return 0 == fZ ? fb = 0 <= aOq ? Math.PI : 0 : (fb = Math.atan(aOq / fZ), fb += 0 < fZ ? .5 * Math.PI : 1.5 * Math.PI), fb
	}, this.log2 = function(fu) {
		return Math.floor(!!fu * (1 + Math.log2(fu + .5)))
	}, this.log10 = function(fu) {
		return Math.floor(Math.log10(fu + .5))
	}, this.aOt = function(aOu, aOv, aOw, aOx, aOy) {
		return aOw - aOy < aOu && aOu < aOw + aOy && aOx - aOy < aOv && aOv < aOx + aOy
	}, this.yk = function(aAW, aAY) {
		return aAW * aAW + aAY * aAY
	}
}

function dI() {
	this.z = new aOz, this.tc = 0;
	var aP0 = new Array(32);

	function aP3() {
		for (var fS = aP0.length, aC = 0; aC < fS; aC++) aP0[aC] = null
	}
	this.di = function() {
		for (var aP1, aP2 = document.body.firstChild; aP2;) aP1 = aP2.nextSibling, !document.body.contains(aP2) || "DIV" !== aP2.tagName && "INPUT" !== aP2.tagName && "BUTTON" !== aP2.tagName || u.removeChild(document.body, aP2), aP2 = aP1
	}, this.v = function(eH, a2d, a5E) {
		void 0 === a2d && (a2d = this.tc), bi.dq = !0, 0 === eH && (0 === ab.a2Y() ? eH = 5 : a1.a2.setState(13)), this.sb(), this.tc === eH && (a2d = aP0[eH].a2d, aP0[eH] = null), this.tc = eH;
		var li = aP0[eH];
		if (!li || 4 === eH || 7 === eH || 8 === eH || 9 === eH || 10 === eH || 11 === eH || 13 === eH || 15 === eH || 18 === eH || 20 <= eH && eH <= 28 || 32 === eH || 33 === eH) {
			if (0 === eH) return void aP3();
			1 === eH ? li = new aP4 : 2 === eH ? li = new aP5 : 3 === eH ? li = new aP6 : 4 === eH || 9 === eH || 10 === eH || 11 === eH || 13 === eH || 33 === eH ? li = a5E : 5 === eH ? li = new aP7 : 6 === eH ? li = new aP8 : 7 === eH ? li =
				new aP9(u.z.aPA) : 8 === eH ? li = a5E : 12 === eH ? li = new aPB : 14 === eH ? li = new aPC : 15 === eH ? li = new aP9(u.z.aPD) : 16 === eH ? li = new aPE : 17 === eH ? li = new aPF : 18 === eH ? li = new aPG : 19 === eH ? li =
				new aPH : 20 === eH ? li = new aPI : 21 === eH ? li = new aPJ : 22 === eH ? li = new aPK : 23 === eH ? li = new aPL : 24 === eH ? li = new aPM : 25 === eH ? li = new aPN : 26 === eH ? li = new aPO : 27 === eH ? li = new aPP :
				28 === eH ? li = new aPQ : 29 === eH ? li = new aPR : 30 === eH ? li = new aPS : 31 === eH ? li = new aPT : 32 === eH && (li = new aPU), li.a2d = a2d, aP0[eH] = li
		}
		li.show(a5E)
	}, this.a2X = function() {
		this.iE() && this.aPV(this.a2c().a2d)
	}, this.aPV = function(eH) {
		this.iE() && (aP0[eH] ? (this.sb(), bi.dq = !0, this.tc = eH, aP0[eH].show()) : this.v(eH))
	}, this.sb = function() {
		this.iE() && aP0[this.tc].sb()
	}, this.y = function() {
		this.iE() && (aP0[this.tc].sb(), aP3(), this.tc = 0, a1.a2.setState(13))
	}, this.vw = function() {
		var li;
		this.iE() && (li = aP0[this.tc]).vw && li.vw()
	}, this.resize = function() {
		if (!this.iE()) return !1;
		aP0[this.tc].resize()
	}, this.hf = function(fZ, fb) {
		var li;
		this.iE() && (li = aP0[this.tc]).hf && li.hf(fZ, fb)
	}, this.a2u = function(fZ, fb) {
		var li;
		this.iE() && (li = aP0[this.tc]).a2u && li.a2u(fZ, fb)
	}, this.a3I = function() {
		var li;
		this.iE() && (li = aP0[this.tc]).a3I && li.a3I()
	}, this.a2x = function(m2, m3, deltaY) {
		var li;
		this.iE() && (li = aP0[this.tc]).a2x && li.a2x(m2, m3, deltaY)
	}, this.a3S = function(code) {
		var li;
		return !!this.iE() && ((li = aP0[this.tc]).a3S && li.a3S(code), !0)
	}, this.ee = function() {
		var li;
		this.iE() && (li = aP0[this.tc]) && li.ee && li.ee()
	}, this.iE = function() {
		return 0 < this.tc
	}, this.a2c = function() {
		return aP0[this.tc]
	}, this.a6R = function(eH) {
		return aP0[eH]
	}, this.aPW = function() {
		return aP0
	}, this.removeChild = function(vU, a4j) {
		try {
			vU.removeChild(a4j)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aP9(data) {
	var aPX, aPY;

	function aPb(rG, aQK) {
		if (!data.aPZ) {
			if (data.aQD) {
				if (aQK) return
			} else {
				if (!aQK) return;
				if (data.xA < 1e4) return
			}
			var aQN, aPt = new qy,
				aQL = 1e5 <= data.xA,
				aQM = aPt.r1(aQK ? (aQL ? "⚠️ " : "") + L(256) : L(257)),
				aQP = (aQL && (aQM.style.color = "yellow"), aQK ? aPt.r3(L(258, [bD.sK.a5V(data.xA, .01, 0)])) : ((aQN = new s9({
					value: data.aQO,
					eH: -1
				})).e.readOnly = !0, aQN.e.type = "password", aPt.rC(aQN), aPt.rC(new sn([new x(L(191), function(e) {
					return e.textContent === L(191) ? (e.textContent = L(192), aQN.e.type = "text") : (e.textContent = L(191), aQN.e.type = "password"), !0
				}).button, new x(L(188), function(e) {
					return bD.rL.a4h(aQN.e), bD.rL.va(e), !0
				}).button]))), aPt.r7(L(aQK ? 257 : 259)).style.marginTop = "0.75em", new s9({
					value: "",
					eH: -1
				}, 0, 0)),
				aQR = (aQP.e.type = "email", aQP.e.autocomplete = "email", aQP.e.name = "email", aQP.e.inputMode = "email", aQP.e.spellcheck = !1, aPt.rC(aQP), aPt.rC(new sn([new x(L(260), function(e) {
					return b1.aGc.aQQ({
						action: 3,
						r2: aQP.e.value.trim().substring(0, 63)
					}), bD.rL.va(e), !0
				}).button])), aQK && aPt.r3(L(261)), aPt.r7(L(262)).style.marginTop = "0.75em", new s9({
					value: "",
					eH: -1
				}, 1));
			aPt.rC(aQR), aPt.rC(new sn([new x(L(263), function() {
				b1.aGc.aGd({
					action: 4,
					ta: "",
					value: Math.floor(+aQR.e.value)
				}), u.v(8, u.a2c().a2d, new td(18))
			}).button])), rG.push(aPt)
		}
	}
	this.show = function() {
		data.aPZ && bL.aQk("account", data.ta), aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(data.username, [new x("⬅️ " + L(40), function() {
		bL.clear(), u.a2X()
	}), new x(data.aPZ ? "🔄 " + L(164) : L(165), function() {
		u.v(8, data.aPZ ? u.a2c().a2d : void 0, new td(25, {
			action: 0,
			ta: data.ta,
			tb: data.tb
		}))
	}, 0, 0, 1)]), aPY = new rE(aPX.vn, function() {
		var rG = [];
		aPb(rG, 1), rG.push(function() {
				var aPt = new qy;
				aPt.r1(L(229)), data.aQD && (aPt.r7("✅ " + L(230)).style.marginBottom = "0.75em");
				var a28 = data.aQE;
				a28 < 1 ? (aPt.r7(L(231)), 0 === data.aQF ? aPt.r3(L(232)) : 1 === data.aQF ? aPt.r3(L(233)) : 2 === data.aQF ? aPt.r3(L(234)) : 3 === data.aQF ? aPt.r3(L(235)) : 4 === data.aQF ? aPt.r3(L(236)) : 5 === data.aQF ? aPt.r3(
					L(237)) : 6 === data.aQF ? aPt.r3(L(238)) : aPt.r3(L(239))) : (aPt.r7(L(240)), a28 = a28 < 2 ? L(241) : a28 < 61 ? 2 === a28 ? L(242) : L(243, [a28 - 1]) : a28 < 84 ? 61 === a28 ? L(244) : L(245, [a28 - 60]) :
					a28 < 255 ? 84 === a28 ? L(246) : L(247, [a28 - 83]) : L(248), aPt.r3(a28));
				{
					var r4, aPy;
					aPt.rC(new sx), data.aPZ && (r4 = aPt.r3(), aPt.rC(new sn([new x(bm.wL.ut(data.ta) ? L(249) : L(250), function(e) {
						return bm.wL.wY(data.ta) ? (e.textContent = L(249), aPy(1)) : (e.textContent = L(250), aPy(0)), !0
					}).button])), aPy = function(fu) {
						r4.textContent = fu ? L(251) : ""
					}, bm.wL.ut(data.ta) && aPy(1), aPt.rC(new sx))
				}
				var rP, s8 = new s9({
					value: data.username,
					eH: -1
				});
				s8.e.readOnly = !0, aPt.rC(s8), aPt.rC(new sn([new x(L(188), function(e) {
					return bD.rL.a4h(s8.e), bD.rL.va(e), !0
				}).button])), data.aPZ || aPt.r3(L(252));
				(data.aQG || data.aQH || data.aQI) && (aPt.rC(new sx), aPt.r3(L(253)), data.aQG && (aPt.r3("• Account Timeout").style.color = "orange"), data.aQH && ((rP = aPt.r3("• Muted")).style.color = "orange", rP.style.marginTop =
					"0.5em"), data.aQI) && ((rP = aPt.r3("• Redacted")).style.color = "orange", rP.style.marginTop = "0.5em");
				data.aPZ && (aPt.rC(new sx), aPt.r7(b1.z.aPu("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aPt.rC(new sn([new x(L(254), function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 0
					}), bD.rL.va(e), !0
				}, bE.p4).button])), aPt.rC(new sn([new x(L(255), function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 1
					}), bD.rL.va(e), !0
				}, bE.p4).button])), aPt.rC(new sn([new x("Cheater", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 2
					}), bD.rL.va(e), !0
				}, bE.p4).button])), aPt.rC(new sn([new x("False Reporter", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 3
					}), bD.rL.va(e), !0
				}, bE.p4).button])), a28 = "CRTOR" === (a28 = bm.eW.data[105].value) || "ADMIN" === a28) && (aPt.rC(new sn([new x("Block Account", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 4
					}), bD.rL.va(e), !0
				}, bE.p2).button])), aPt.rC(new sn([new x("Ban IP", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 5
					}), bD.rL.va(e), !0
				}, bE.p2).button])), aPt.rC(new sn([new x("Gold Seizure", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 6
					}), bD.rL.va(e), !0
				}, bE.p2).button])), aPt.rC(new sn([new x("Remove Punishments", function(e) {
					return b1.aGc.aGd({
						action: 3,
						ta: data.ta,
						value: 7
					}), bD.rL.va(e), !0
				}, bE.or).button])));
				return aPt
			}()),
			function(rG) {
				var aPt, r4, aDe, aQT, aPz, aQ1, aQ0;
				data.aPZ || ((aPt = new qy).r1(L(264)), (r4 = aPt.r3(data.aQS.length + " / 160")).style.textAlign = "center", aDe = !0, (aQT = new w5(0, 1, function(e) {
					e = e.target.value.length;
					r4.textContent = e + " / 160", 160 < e ? aDe && (aDe = !1, aQ1.rf(1)) : aDe || (aDe = !0, aQ1.rf(0))
				})).e.rows = 6, aQT.e.style.fontSize = "1em", aQT.wC(data.aQS), aPt.rC(aQT), 0 !== data.aQU ? (aQ1 = new x(L(265), function() {
					if (!aDe) return !0;
					u.v(8, u.a2c().a2d, new td(29, {
						action: 1,
						r2: aQT.wD().substring(0, 160)
					}))
				}, 0, 0, 1), aPt.rC(new sn([aQ1.button])), aPt.rC(new sn([new x(1 === data.aQU ? L(266) : L(267), function() {
					u.v(8, u.a2c().a2d, new td(29, {
						action: 0,
						r2: ""
					}))
				}, 0, 0, 1).button])), aPt.r3(1 === data.aQU ? L(268, [data.aQV - 1]) : L(269, [data.aQV - 1])), aPt.r3(L(270, [data.aQW]))) : (aPz = new x(L(271), function() {
					if (!aQT.e.readOnly) return !0;
					u.v(8, u.a2c().a2d, new td(29, {
						action: 1,
						r2: aQT.wD().substring(0, 160)
					}))
				}, 1), aQ1 = new x(L(185), function(e) {
					if (e.textContent === L(185)) {
						if (!aDe) return !0;
						e.textContent = L(186), aQT.e.readOnly = !0, aPz.rf(0), aPz.button.style.color = bE.pO
					} else aQ0();
					return !0
				}), aPt.rC(new sn([aQ1.button])), aPt.r3(L(270, [data.aQW])), aQ0 = function() {
					aQ1.button.textContent = L(185), aQT.e.readOnly = !1, aPz.rf(1), aPz.button.style.color = bE.oO
				}, aPt.rC(new sn([aPz.button]))), rG.push(aPt))
			}(rG),
			function(rG) {
				var aPt;
				data.aPZ && 0 !== data.aQU && ((aPt = new qy).r1(L(272)), aPt.r5(data.aQS), aPt.rC(new sn([new x(L(273, 0, "Report"), function(e) {
					return b1.z.ef(0) && (bD.rL.va(e), b1.aGc.aQX({
						action: 5,
						ta: data.ta
					})), !0
				}, 0, 0, 1).button])), rG.push(aPt))
			}(rG), rG.push(function() {
				var aPt = new qy,
					aPv = (aPt.r1(L(166)), aPt.r7(b1.z.aPu("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180)]),
					eG = data.aPw;
				return aPt.r7(L(181) + bD.sK.a5V(data.xA, .01, 2) + "<br>" + L(182) + (eG + 1) + " / " + data.x9 + "<br>" + L(183) + aPv[function(eG, xA) {
					if (eG < 10) return 0;
					if (eG < 30) return 1;
					if (eG < 60) return 2;
					if (3e4 <= (xA = bO.ft(xA, 100))) return 3;
					if (12e3 <= xA) return 4;
					if (7e3 <= xA) return 5;
					if (3e3 <= xA) return 6;
					if (1e3 <= xA) return 7;
					if (500 <= xA) return 8;
					if (200 <= xA) return 9;
					if (70 <= xA) return 10;
					if (20 <= xA) return 11;
					if (3 <= xA) return 12;
					return 13
				}(eG, data.xA)]), aPt
			}()), data.aPZ && rG.push(function() {
				var aPt = new qy,
					s8 = (aPt.r1(L(184)), aPt.r7(b1.z.aPu("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new s9({
						value: bm.eW.data[147].value,
						eH: -1
					}, 1, void 0, function(e) {
						bm.pp.pq(147, aPy(e.target.value))
					})),
					aPz = (aPt.rC(s8), new x(L(14), function(e) {
						return s8.e.readOnly && b1.z.ef(0) && (bD.rL.va(e), aQ0(), b1.aGc.aGd({
							action: 0,
							ta: data.ta,
							value: parseInt(bm.eW.data[147].value, 10)
						})), !0
					}, 1)),
					aQ1 = new x(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), s8.e.readOnly = !0, aPz.rf(0), aPz.button.style.color = bE.pO, bm.pp.pq(147, s8.e.value), aPy(bm.eW.data[147].value)) : aQ0(), !0
					}),
					r4 = (aPt.rC(new sn([aQ1.button])), aPt.r3()),
					aPy = function(fu) {
						r4.innerHTML = u.z.aQ2(fu, bm.eW.data[105].value, data.ta)
					},
					aQ0 = function() {
						aQ1.button.textContent = L(185), s8.e.readOnly = !1, aPz.rf(1), aPz.button.style.color = bE.oO
					};
				return aPy(bm.eW.data[147].value), aPt.rC(new sn([aPz.button])), aPt
			}());
		rG.push(function() {
			var aPt = new qy,
				s8 = (aPt.r1(L(187)), new s9({
					value: data.ta,
					eH: -1
				})),
				aQ3 = (s8.e.readOnly = !0, aPt.rC(s8), aPt.rC(new sn([new x(L(188), function(e) {
					return bD.rL.a4h(s8.e), bD.rL.va(e), !0
				}).button])), aPt.rC(new sx), new s9({
					value: data.ta,
					eH: -1
				}));
			return aPt.rC(aQ3), aPt.rC(new sn([new x(L(189), function(e) {
				u.v(8, u.a2c().a2d, new td(25, {
					action: 0,
					ta: aQ3.e.value,
					tb: 0
				}))
			}).button])), aPt
		}()), data.aPZ || (rG.push(function() {
			var aPt = new qy,
				aQ4 = (aPt.r1(L(190)), new s9(bm.eW.data[106]));
			return aQ4.e.readOnly = !0, aQ4.e.type = "password", aPt.rC(aQ4), aPt.rC(new sn([new x(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aQ4.e.type = "text") : (e.textContent = L(191), aQ4.e.type = "password"), !0
			}).button, new x(L(188), function(e) {
				return bD.rL.a4h(aQ4.e), bD.rL.va(e), !0
			}).button])), aPt.rC(new sn([new x(L(193), function() {
				u.v(8, u.a2c().a2d, new td(15))
			}).button])), aPt.r1(L(194), "0.8em"), aPt.r3(L(195)), aPt.r3(L(196)), aPt.r3(L(197)), aPt
		}()), rG.push(function() {
			var aPt = new qy;
			return aPt.r1(L(198)), aPt.rC(new sn([new x(L(199), function() {
				u.v(6, u.a2c().a2d)
			}).button])), aPt.rC(new sn([new x(L(200), function() {
				bm.pp.pq(105, ""), u.v(8, u.a2c().a2d, new td(18))
			}).button])), aPt.rC(new sn([new x(L(201) + bm.eW.data[105].value, function() {
				u.v(4, 0, new w(L(202), L(203), !0, [new x("⬅️ " + L(40), function() {
					u.v(7, u.a6R(7).a2d)
				})]))
			}, bE.p4).button])), aPt
		}()), rG.push(function() {
			function aQ6(eH) {
				aQ5[0].rf(0 === eH ? bE.oa : bE.om), aQ5[1].rf(0 === eH ? bE.oa : bE.p4), aQ5[2].rf(eH === rA.rB.length - 1 || eH < 5 ? bE.oa : bE.p4)
			}
			var rA, aQ5, aPt = new qy;
			aPt.r1(L(208)), aPt.r3(L(209)), bm.z.wt();
			return aQ5 = [new x(L(210), function() {
				var eH = Math.min(bm.eW.data[117].value, rA.rB.length - 1);
				eH < 1 || (eH = bm.z.wx(eH), bm.pp.pq(105, eH.ta), bm.pp.pq(106, eH.password), u.v(8, u.a2c().a2d, new td(18)))
			}, bE.oa, 1), new x(L(206), function() {
				var eH = Math.min(bm.eW.data[117].value, rA.rB.length - 1);
				if (!(eH < 1)) {
					rA.rB[eH].remove(), rA.rB.splice(eH, 1);
					for (var aC = eH; aC < rA.rB.length; aC++) rA.rB[aC].name = "" + aC;
					bm.z.ww(eH), eH = bm.eW.data[117].value, rA.rB[eH].textContent = rA.rB[eH].textContent.replace("⚪", "🟢"), aQ6(eH)
				}
			}, bE.oa, 1), new x(L(207), function() {
				var eH = Math.min(bm.eW.data[117].value, rA.rB.length - 1);
				if (eH !== rA.rB.length - 1) {
					for (var aC = rA.rB.length - 1; eH < aC; aC--) rA.rB[aC].remove(), rA.rB.splice(aC, 1), bm.z.ww(aC);
					aQ6(eH)
				}
			}, bE.oa, 1)], rA = new vd(bm.eW.data[117], aQ6), aQ6(0), rA.rB[0].style.marginTop = "0.5em", aPt.r9(rA), aPt.rC(new sn([aQ5[0].button])), aPt.rC(new sn([aQ5[1].button])), aPt.rC(new sn([aQ5[2].button])), aPt
		}()));
		return rG.push(function() {
				var aPt = new qy,
					aPv = (aPt.r1(L(214)), [L(215), L(216), L(217), L(218)]),
					eG = data.aQ7;
				return aPt.r7(L(219) + (data.a1r / 100).toFixed(2) + "<br>" + L(182) + (eG + 1) + " / " + data.x9 + "<br>" + L(183) + aPv[eG < 10 ? 0 : eG < 50 ? 1 : eG < 200 ? 2 : 3]), aPt
			}()), rG.push(function() {
				var aPt = new qy;
				return aPt.r1(L(211)), aPt.r7(L(212) + bD.sK.a5V(data.x6, .1, 1) + "<br>" + L(182) + (data.x7 + 1) + " / " + data.x9 + "<br>" + L(213) + data.x8), aPt
			}()),
			function(rG) {
				var aPt = new qy,
					aQY = data.xD,
					aQZ = (aPt.r1(L(274)), aPt.r7(L(275, [data.xB.length ? "[" + data.xB + "]" : "-"])), aPt.r7(L(276, [bD.sK.a5V(aQY, .01, 2)])), aPt.r7(L(277, [data.xF + 1 + " / " + data.x9])), data.xG),
					aQa = (aPt.r7(L(278, [bD.sK.a5V(aQZ, .1, 1)])), data.xI);
				aPt.r7(L(279, [aQa])), aPt.r7(L(280, [bD.sK.a5V(aQZ / Math.max(aQa, 1), .1, 2)])), aQY = data.xE, aPt.r1(L(281), "0.8em"), aPt.r7(L(275, [data.xC.length ? "[" + data.xC + "]" : "-"])), aPt.r7(L(276, [bD.sK.a5V(aQY, .01, 2)])),
					aQZ = data.xH, aPt.r7(L(278, [bD.sK.a5V(aQZ, .1, 1)])), aQa = data.xJ, aPt.r7(L(279, [aQa])), aPt.r7(L(280, [bD.sK.a5V(aQZ / Math.max(aQa, 1), .1, 2)])), aPt.r7(b1.z.aPu("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					rG.push(aPt)
			}(rG),
			function(rG) {
				var aPt = new qy;
				aPt.r1(L(282)), aPt.r7(L(219) + (data.aQb / 10).toFixed(1) + "<br>" + L(183) + (data.aQc.length ? L(283, [data.aQc]) : L(284))), data.aPZ && aPt.rC(new sn([new x(L(285), function(e) {
					return b1.z.ef(0) && (bD.rL.va(e), b1.aGc.aQX({
						action: 4,
						ta: data.ta
					})), !0
				}, 0, 0, 1).button]));
				aPt.r7(b1.z.aPu("/wiki/clans"), "0.75em").style.marginTop = "0.8em", rG.push(aPt)
			}(rG), rG.push(function() {
				var aPt = new qy;
				if (aPt.r1(L(226)), aPt.r7(L(227) + data.aQA + "<br>" + L(182) + (data.aQB + 1) + " / " + data.x9 + "<br>" + L(183) + br.eJ(data.aQB)), data.aPZ) {
					var s8 = new s9({
							value: bm.eW.data[157].value,
							eH: -1
						}, 1, void 0, function(e) {
							bm.pp.pq(157, aPy(e.target.value))
						}),
						aQ1 = (s8.e.style.marginTop = "0.6em", aPt.rC(s8), new x(L(185), function(e) {
							return e.textContent === L(185) ? (e.textContent = L(186), s8.e.readOnly = !0, aQC[0].rf(0), aQC[1].rf(0), aQC[0].button.style.color = bE.pO, aQC[1].button.style.color = bE.pO, aPy(bm.eW.data[157]
								.value)) : aQ0(), !0
						})),
						aQC = (aPt.rC(new sn([aQ1.button])), [new x("−", function(e) {
							return s8.e.readOnly && b1.z.ef(0) && (bD.rL.va(e), aQ0(), b1.aGc.aGd({
								action: 2,
								ta: data.ta,
								value: bO.ia(parseInt(bm.eW.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new x("+", function(e) {
							return s8.e.readOnly && b1.z.ef(0) && (bD.rL.va(e), aQ0(), b1.aGc.aGd({
								action: 1,
								ta: data.ta,
								value: bO.ia(parseInt(bm.eW.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						r4 = aPt.r3(),
						aPy = function(fu) {
							return fu = bD.go.a5B(fu, 3, 32767), r4.textContent = L(228, [fu - 1, fu, bm.eW.data[105].value]), fu
						};
					aPt.rC(new sn([aQC[0].button, aQC[1].button]));
					for (var aC = 0; aC < 2; aC++) aQC[aC].button.style.fontSize = "1.6em";
					var aQ0 = function() {
						aQ1.button.textContent = L(185), s8.e.readOnly = !1, aQC[0].rf(1), aQC[1].rf(1), aQC[0].button.style.color = bE.oO, aQC[1].button.style.color = bE.oO
					};
					aPy(bm.eW.data[157].value)
				}
				return aPt
			}()),
			function(rG) {
				var aPt, a4g;
				data.aPZ && !data.aQd || (0 === a1.id || data.aPZ || data.aQd) && ((aPt = new qy).r1("Patreon"), !data.aPZ && data.aQe ? aPt.rC(new sn([new x(L(191), function() {
					b1.aGc.aQX({
						action: 7,
						ta: data.ta
					}), data.aQe = 0, u.v(7)
				}).button])) : data.aQd ? (aPt.r7(L(286, [(data.aQf / 100).toFixed(2)]) + "<br>" + L(287, [1 + data.aQg + " / " + data.aQh]) + "<br>" + L(288, [data.aQi ? L(289) : L(290)])), data.aPZ || aPt.rC(new sn([new x(L(291),
					function() {
						b1.aGc.aQX({
							action: 8,
							ta: data.ta
						}), data.aQd = 0, bm.pp.pq(160, 0), u.v(7)
					}).button]))) : (aPt.r7(L(292), "0.75em").style.marginBottom = "0.3em", aPt.r7("  • " + L(293), "0.75em").style.whiteSpace = "pre", aPt.r7("  • " + L(294), "0.75em").style.whiteSpace = "pre", aPt.r7("  • " + L(
						295), "0.75em").style.whiteSpace = "pre", aPt.r7(L(296), "0.75em").style.marginTop = "1.0em", aPt.r7(L(297), "0.75em").style.marginTop = "1.0em", aPt.r7("<a href='" + bN.aQj +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4g = "https://www.patreon.com/oauth2/authorize?state=" + data.ta +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a1o() + "/", aPt.r7(L(298), "0.75em").style.marginTop = "1.0em", aPt.r7("<a href='" +
						a4g + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPZ || (aPt.rC(new sx), aPt.rC(new sn([new x(L(192), function() {
						b1.aGc.aQX({
							action: 6,
							ta: data.ta
						}), data.aQe = 1, u.v(7)
					}).button])), aPt.r7(L(299), "0.75em").style.marginTop = "0.75em")), rG.push(aPt))
			}(rG), rG.push(function() {
				var aPt = new qy,
					aPv = (aPt.r1(L(220)), [L(221), L(222), L(223), L(224), "Scout", L(225)]),
					eG = data.aQ8;
				return aPt.r7(L(219) + (data.aQ9 / 100).toFixed(2) + "<br>" + L(182) + (eG + 1) + " / " + data.x9 + "<br>" + L(183) + aPv[eG < 3 ? 0 : eG < 20 ? 1 : eG < 100 ? 2 : eG < 500 ? 3 : eG < 2e3 ? 4 : 5]), aPt.r7(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", aPt
			}()),
			function(rG) {
				var aPt, rA, aQ5, eH, aQ6;
				data.aPZ || bm.wL.get().length && ((aPt = new qy).r1(L(204)), eH = 0, aQ6 = function() {
					var aDK = bm.wL.get().length;
					aQ5[0].rf(eH === aDK ? bE.oa : bE.om), aQ5[1].rf(eH === aDK ? bE.oa : bE.p4), aQ5[2].rf(eH === aDK || aDK - 1 <= eH || eH < 5 ? bE.oa : bE.p4)
				}, aQ5 = [new x(L(205), function() {
					u.v(8, void 0, new td(25, {
						action: 0,
						ta: bm.wL.get()[eH],
						tb: 0
					}))
				}, bE.oa, 1), new x(L(206), function() {
					bm.wL.wa(eH), rA.rB[eH].remove(), rA.rB.splice(eH, 1);
					for (var aC = eH; aC < rA.rB.length; aC++) rA.rB[aC].name = "" + aC;
					bm.wL.get().length && (eH = Math.max(eH - 1, 0), rA.rB[eH].textContent = rA.rB[eH].textContent.replace("⚪", "🟢")), aQ6()
				}, bE.oa, 1), new x(L(207), function() {
					for (var iK = rA.rB.length - 1; eH < iK; iK--) bm.wL.wa(iK), rA.rB[iK].remove(), rA.rB.splice(iK, 1);
					aQ6()
				}, bE.oa, 1)], aQ6(), (rA = new vd(bm.wL.wX(), function(aC) {
					eH = aC, aQ6()
				})).rB[0].style.marginTop = "0.5em", aPt.r9(rA), aPt.rC(new sn([aQ5[0].button])), aPt.rC(new sn([aQ5[1].button])), aPt.rC(new sn([aQ5[2].button])), rG.push(aPt))
			}(rG), aPb(rG, 0), rG
	}())
}

function aPK() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.aIncomeType ? (bD.rT.a44(aQn.wD(), aE.data.aIncomeData, 255), bD.rT.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(300), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(302), L(303), L(304)],
			value: aE.data.aIncomeType
		}, function(eH) {
			aQq(), 2 !== eH || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fP)), aE.data.aIncomeType = eH, u.v(22)
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt;
		1 === aE.data.aIncomeType && ((aPt = new qy).r1("Value"), aPt.rC(new s9({
			eH: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), rG.push(aPt))
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.aIncomeType && ((aPt = new qy).r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.aIncomeData, 4)), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aPN() {
	var aQl, aQm, aQn;

	function aQo() {
		aQq(), 3 !== aE.data.botDifficultyType || bD.rT.a3s(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		3 === aE.data.botDifficultyType && bD.rT.a44(aQn.wD(), aE.data.botDifficultyData, aF.ky.length - 1)
	}

	function aQv(rG, eH) {
		var aPt = new qy,
			value = (aPt.r1(eH < 0 ? L(65) : L(64) + " " + bj.a1k[eH % 9]), 0 <= eH && (aPt.r7(L(307) + ": " + aE.data.teamPlayerCount[eH]).style.marginBottom = "1em"), eH < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eH]);
		aPt.r9(new vd({
			tJ: aF.ky,
			value: value
		}, function(iK) {
			eH < 0 ? aE.data.botDifficultyValue = iK : aE.data.botDifficultyTeam[eH] = iK
		})), rG.push(aPt)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(65), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, function() {
		var rG = [];
		if (function(rG) {
				var aPt = new qy,
					tJ = (aPt.r1(L(301)), [L(303), L(305), L(306), L(304)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), tJ.splice(2, 1));
				aPt.r9(new vd({
					tJ: tJ,
					value: value
				}, function(eH) {
					aQq(), aE.data.botDifficultyType = eH, 0 === aE.data.gameMode && 2 === eH && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fP)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), rG.push(aPt)
			}(rG), 0 === aE.data.botDifficultyType) aQv(rG, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aQv(rG, aC);
		else 3 === aE.data.botDifficultyType && ! function(rG) {
			var aPt = new qy;
			aPt.r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.botDifficultyData, 8)), aPt.rC(aQn), rG.push(aPt)
		}(rG);
		return rG
	}())
}

function aQw(data) {
	var aPX, aQx, aQy, aQz, aR0, aR1, aR2, colors, aR3, aR4, aR5 = 0,
		aR6 = 0,
		aR7 = !1,
		aR8 = !1,
		aR9 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aRd(m2, m3) {
		! function(m2, m3) {
			return aQx < m2 && m2 < aQx + aQz && aQy < m3 && m3 < aQy + aR0
		}(aR5 = m2, aR6 = m3) ? (aR7 && (bi.dq = !0), aR7 = !1) : (aR7 = !0, bi.dq = !0)
	}
	this.show = function() {
		aR8 = bm.eW.data[127].value, aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize();
		var ej = i.l,
			vv = aPX.vs(),
			aRI = ej * vv.vu,
			ej = ej * vv.se;
		aR1 = bD.rL.u1(.06), aR2 = bD.rL.u1(.04), aQx = bD.rL.u1(.06), aQy = ej + aR1, aQz = i.j - aQx - aR2, aR0 = aRI + ej - aQy - aR2
	}, this.vw = function() {
		aPX.vw(),
			function() {
				var aC, aRF, gv, fZ, fl, h = data.data,
					aRM = 1,
					aRN = .125,
					aRO = aR8 ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aRF = h[aC].aRF, gv = aRF.length, aRM = Math.max(gv, aRM), fl = 0; fl < gv; fl++) aRN = Math.max(aRF[fl], aRN), aRO = Math.min(aRF[fl], aRO);
				var np = aQy + aR0,
					zJ = aR0 / (aRN - aRO),
					zI = 1 / (aRM - 1);
				for (vx.lineWidth = bf.a0M, aC = 0; aC < h.length; aC++) {
					for (aRF = h[aC].aRF, gv = aRF.length, fZ = aQx, vx.beginPath(), vx.moveTo(fZ + aQz, np - zJ * (aRF[gv - 1] - aRO)), fl = gv - 2; 0 <= fl; fl--) vx.lineTo(fZ + zI * fl * aQz, np - zJ * (aRF[fl] - aRO));
					vx.strokeStyle = colors[aC], vx.stroke()
				}(function(aRO, aRN, np, zJ) {
					vx.font = bD.rL.t9(0, .25 * aQx), bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 2), vx.fillStyle = colors[0];
					for (var fZ = .92 * aQx, aC = 0; aC < 3; aC++) {
						var fu = aRO + aC * (aRN - aRO) / 2;
						vx.fillText((fu / 1e3).toFixed(3), fZ, np - zJ * (fu - aRO))
					}
				})(aRO, aRN, np, zJ),
				function(aRM) {
					var fb = aQy + aR0 + .15 * aR2;
					vx.font = bD.rL.t9(0, Math.min(.4 * aR2, .028 * i.j)), bD.rL.textBaseline(vx, 0), bD.rL.textAlign(vx, 2), vx.fillStyle = colors[0], vx.fillText(bD.a3j.a4Y(aR3), aQx + aQz, fb), bD.rL.textAlign(vx, 0), vx.fillText(bD.a3j.a4Y(
						new Date(aR4.getTime() - 6e4 * (aRM - 1) * aR9[data.aRE])), aQx, fb)
				}(aRM),
				function(aRM, aRO, aRN) {
					if (aR7 && !(aRM < 2)) {
						for (var a9x, eH = (aR5 - aQx) / aQz * (aRM - 1), aRR = Math.floor(eH), aRS = Math.floor(1 + eH), aRT = eH - aRR, aRU = 1e5, aRV = -1, aRW = -1, aRX = aRN - (aRN - aRO) * (aR6 - aQy) / aR0, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aDp, aRF = h[aC].aRF;
							aRF.length <= aRS || (aRF = aRF[aRR] + aRT * (aRF[aRS] - aRF[aRR]), (aDp = Math.abs(aRX - aRF)) < aRU && (aRU = aDp, aRV = aC, aRW = aRF))
						} - 1 !== aRV && (aRN = aQy + aR0 - (aRW - aRO) / (aRN - aRO) * aR0, vx.lineWidth = .5 * bf.a0M, vx.strokeStyle = colors[aRV], vx.beginPath(), vx.moveTo(aQx, aRN), vx.lineTo(aR5, aRN), vx.lineTo(aR5, aQy + aR0), vx
							.stroke(), vx.beginPath(), vx.arc(aR5, aRN, .1 * aQx, 0, 2 * Math.PI), vx.fillStyle = colors[aRV], vx.fill(), aRO = aQy + aR0 + .15 * aR2, bD.rL.textAlign(vx, 1), a9x = aRM - 2 < eH ? (a9x = aR4.getTime() - 6e4 *
								aR9[data.aRE], new Date(a9x + (eH - (aRM - 2)) * (aR3.getTime() - a9x))) : new Date(aR4.getTime() - 6e4 * (aRM - eH - 1) * aR9[data.aRE]), aRM = bD.a3j.a4Y(a9x), eH = bD.rL.measureText(aRM), a9x = bO.ia(aR5,
								aQx + .5 * eH, aQx + aQz - .5 * eH), vx.fillStyle = bD.color.oG(70, 50, 20), vx.fillRect(a9x - .52 * eH, aQy + aR0, 1.04 * eH, .55 * aR2), vx.fillStyle = colors[0], vx.fillText(aRM, a9x, aRO), vx.font = bD.rL
							.t9(0, .25 * aQx), bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 2), a9x = .92 * aQx, aRM = (aRW / 1e3).toFixed(3), eH = bD.rL.measureText(aRM), aRO = a9x - 1.04 * eH, vx.fillStyle = bD.color.oG(70, 50, 20), vx
							.fillRect(aRO, aRN - .1625 * aQx, aQx - aRO, .275 * aQx), vx.fillStyle = colors[aRV], vx.fillText(aRM, a9x, aRN))
					}
				}(aRM, aRO, aRN)
			}(), vx.lineWidth = bf.a0M, vx.strokeStyle = bE.oO, vx.beginPath(), vx.moveTo(aQx, aQy), vx.lineTo(aQx, aQy + aR0), vx.lineTo(aQx + aQz, aQy + aR0), vx.stroke();
		var aC, fontSize = .5 * aR1,
			h = (vx.font = bD.rL.t9(0, fontSize), bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 0), data.data),
			fS = h.length,
			fb = aQy - .5 * aR1,
			r2 = "";
		for (aC = 0; aC < fS; aC++) r2 += h[aC].name + "  ";
		r2 = r2.trim();
		var aRa = bD.rL.measureText(r2),
			fZ = .5 * (i.j - aRa);
		for (aRa > i.j && (fZ = 0, vx.font = bD.rL.t9(0, i.j / aRa * fontSize)), aC = 0; aC < fS; aC++) vx.fillStyle = colors[aC], vx.fillText(h[aC].name, fZ, fb), fZ += bD.rL.measureText(h[aC].name + "  ")
	}, this.hf = function(m2, m3) {
		aRd(m2, m3)
	}, this.a2u = function(m2, m3) {
		aRd(m2, m3)
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	};
	var aC, ea, a4W, iK, fV = data.data,
		fS = fV.length,
		max = 1;
	for (aC = 0; aC < fS; aC++) max = Math.max(max, fV[aC].aRF.length);
	for (aC = 0; aC < fS; aC++)
		for (; fV[aC].aRF.length < max;) fV[aC].aRF.unshift(0);
	ea = new Date, a4W = 6e4 * ea.getTimezoneOffset(), iK = ea.getTime() - a4W, aR3 = new Date(iK), 6 === data.aRE ? function(ea, a4W) {
		var aRH = ea.getUTCFullYear(),
			ea = ea.getUTCMonth() + 1;
		aR4 = ea < 12 ? new Date(Date.UTC(aRH, ea) - a4W) : new Date(Date.UTC(aRH + 1, 0) - a4W)
	}(ea, a4W) : (a4W = 6e4 * aR9[data.aRE], aR4 = data.aRE <= 4 ? new Date(iK + a4W - ea.getTime() % a4W) : new Date(iK + a4W - (ea.getTime() + 2592e5) % a4W)), iK = bD.color, colors = [bE.oO, iK.oG(255, 0, 0), iK.oG(0, 200, 0), iK.oG(80, 80,
		255), iK.oG(255, 255, 0), iK.oG(255, 0, 255), iK.oG(0, 255, 255), iK.oG(255, 140, 0), iK.oG(128, 128, 128), iK.oG(0, 255, 140)], aPX = new vh(L(308) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aRE] + ", " + bD.a3j.a4V(aR3), [
		new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(309), function() {
			u.v(14)
		})
	], !1)
}

function aPC() {
	var aPX, aPY, rG, aRe = -1;
	this.show = function() {
		aPX.show(), this.resize(), aRe = bm.eW.data[125].value
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(310), [new x("⬅️ " + L(40), function() {
		aRe !== bm.eW.data[125].value ? u.z.aRf() : u.aPV(13)
	})]), aPY = new rE(aPX.vn, ((rG = []).push(function() {
		var aPt = new qy,
			aQ1 = (aPt.r1(L(311)), aPt.r3(L(312)), new x(L(313), function() {
				bm.pp.pq(130, 0), u.z.aRf()
			}, 0, 0, 1)),
			s8 = new s9(bm.eW.data[126], 0, function() {
				aQ1.button.click()
			});
		return aPt.rC(s8), s8.e.placeholder = "a,b,c", s8.e.style.marginTop = "0.5em", aPt.rC(new sn([aQ1.button])), aPt
	}()), rG.push(function() {
		var aPt = new qy,
			aQ1 = new x(L(313), function() {
				bm.pp.pq(130, 1), u.z.aRf()
			}, 0, 0, 1),
			aRk = new s9(bm.eW.data[129], 1, function() {
				aRk.e.focus()
			}),
			aRl = new s9(bm.eW.data[128], 1, function() {
				aQ1.button.click()
			});
		return aPt.r1(L(314)), aPt.rC(aRl), aRl.e.style.marginBottom = "0.5em", aPt.r1(L(315)), aPt.rC(aRk), aPt.rC(new sn([aQ1.button])), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		return aPt.r1(L(316)), bm.eW.data[125].tJ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aPt.r9(new vd(bm.eW.data[125])), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		return aPt.r1(L(317)), aPt.rC(new sj(bm.eW.data[127], L(318))), aPt
	}()), rG))
}

function aPB() {
	var aPX, aRm, aQz, aRn, aRo, aRp, colors = [0, 0, 0],
		aRq = -1;

	function aRt(aC) {
		var aRu = aRm.fb + aC * (bf.gap + aRp);
		vx.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", vx.fillRect(aRn, aRu, colors[aC] * aRo, aRp), vx.strokeStyle = bE.oO, vx.strokeRect(aRn, aRu, aRo,
			aRp), vx.fillStyle = bE.oO, vx.font = bD.rL.t9(0, .32 * aRp), bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 0), vx.fillText(L(0 === aC ? 321 : 1 === aC ? 322 : 323) + aRr(aC), aRn + bf.gap, aRu + .53 * aRp)
	}

	function aRr(aC, aRv) {
		return aRv = aRv || 256, bO.ia(Math.floor(aRv * colors[aC]), 0, aRv - 1)
	}

	function a3O(m2, m3) {
		return !(m2 < aRn || m3 < aRm.fb || m2 > aRm.fZ + aRm.j || m3 > aRm.fb + aRm.k)
	}
	this.show = function() {
		var fu = bm.eW.data[121].value;
		colors[0] = (fu >> 12) / 63, colors[1] = (fu >> 6 & 63) / 63, colors[2] = (63 & fu) / 63, aPX.show(), this.resize()
	}, this.sb = function() {
		bm.pp.pq(121, (aRr(0, 64) << 12) + (aRr(1, 64) << 6) + aRr(2, 64)), aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aRm.resize();
		var ej = i.l,
			vv = aPX.vs(),
			aRs = (aRm.fb = Math.max(aRm.fb, ej * vv.se + bf.gap), ej * vv.vu - 2 * bf.gap);
		aRm.k = Math.min(aRm.k, aRs), aRm.j = 2 * aRm.k, aRm.fb = ej * vv.se + .5 * (ej * vv.vu - aRm.k), aRm.fZ = .5 * (i.j - aRm.j), aQz = .25 * aRm.j, aRn = aRm.fZ + aQz + bf.gap, aRo = aRm.j - aQz - bf.gap, aRp = (aRm.k - 2 * bf.gap) / 3
	}, this.vw = function() {
		var eG, u0, fm;
		aPX.vw(), vx.lineWidth = bf.a0M, eG = aRr(0), u0 = aRr(1), fm = aRr(2), vx.fillStyle = "rgb(" + eG + "," + u0 + "," + fm + ")", vx.fillRect(aRm.fZ, aRm.fb, aQz, aRm.k), vx.strokeStyle = bE.oO, vx.strokeRect(aRm.fZ, aRm.fb, aQz, aRm.k), vx
			.fillStyle = eG + u0 + fm < 306 && u0 < 150 ? bE.oO : bE.oF, bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 1), vx.font = bD.rL.t9(0, .1 * aRm.k), vx.rotate(-Math.PI / 2), vx.fillText(L(320), -aRm.fb - .5 * aRm.k, aRm.fZ + .5 * aQz),
			vx.setTransform(1, 0, 0, 1, 0, 0), aRt(0), aRt(1), aRt(2)
	}, this.hf = function(m2, m3) {
		a3O(m2, m3) && (aRq = bO.ia(Math.floor((m3 - aRm.fb) / (aRp + .75 * bf.gap)), 0, 2), colors[aRq] = bO.ia((m2 - aRn) / aRo, 0, 1), bi.dq = !0)
	}, this.a2u = function(m2) {
		-1 !== aRq && (colors[aRq] = bO.ia((m2 - aRn) / aRo, 0, 1), bi.dq = !0)
	}, this.a2x = function(m2, m3, deltaY) {
		a3O(m2, m3) && (m2 = bO.ia(Math.floor((m3 - aRm.fb) / (aRp + .75 * bf.gap)), 0, 2), colors[m2] = bO.ia(colors[m2] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.dq = !0)
	}, this.a3I = function() {
		0 <= aRq && (aRq = -1, bi.dq = !0)
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(319), [new x("⬅️ " + L(40), function() {
		u.z.aDk()
	})], !1), aRm = new rw([.5, .25], [.5, .5], 1)
}

function aPJ() {
	var aQl, aQm, aQn, ru;

	function aQo() {
		aQq(), u.aPW()[19] = null, u.a2X()
	}

	function aRw() {
		aQq(), u.v(21)
	}

	function aQq() {
		1 === aE.data.gameMode ? aE.a5s.a5x() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.rT.a44(aQn.wD(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, ru = [new x("⬅️ " + L(40), aQo)], 1 === aE.data.gameMode && ru.push(new x(L(324), aRw, 1, 1)), aQl = new vh(L(325), ru), aQm = new rE(aQl.vn, (ru = [], 0 === aE.data.gameMode ? (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(326), L(304)],
			value: aE.data.colorsType
		}, function(eH) {
			aQq(), aE.data.colorsType = eH, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fP || (aE.data.colorsData = new Uint32Array(aE.fP)), u.v(21)
		})), rG.push(aPt)
	}(ru), 1 === aE.data.colorsType && function(rG) {
		var aPt = new qy;
		aPt.r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.colorsData, 1)), aPt.rC(aQn), rG.push(aPt)
	}(ru)) : (aE.a5s.a5x(), ru.push(function() {
		var aPt = new qy;
		aPt.r1(L(307));
		for (var aC = 0; aC < bj.a1k.length; aC++) {
			var iK = (aC + 1) % bj.a1k.length,
				e = aPt.r7((0 == iK ? "" : "Team ") + bj.a1k[iK]);
			aC && (e.style.marginTop = "0.5em"), aPt.rC(new s9({
				eH: -1,
				value: aE.data.teamPlayerCount[iK]
			}, 1, 0, function(e) {
				aQl.vo[1].rf(0);
				var playerCount = bO.ia(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aRz] = playerCount
			})).e.aRz = iK
		}
		return aPt
	}()), function(rG) {
		for (var aPt = new qy, tJ = (aPt.r1(L(327)), []), aC = 0; aC < bj.a1k.length; aC++) {
			var iK = (aC + 1) % bj.a1k.length;
			tJ.push(bj.a1k[iK])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		aPt.r9(new vd({
			tJ: tJ,
			value: (aE.data.colorsData[0] % 16 + bj.a1k.length - 1) % bj.a1k.length
		}, function(eH) {
			var eH = (eH + 1) % bj.a1k.length,
				aS0 = bj.aS1[eH],
				aS0 = (aS0[0] >> 2 << 12) + (aS0[1] >> 2 << 6) + (aS0[2] >> 2);
			aE.data.colorsData[0] = aS0 - (15 & aS0) + eH
		})), rG.push(aPt)
	}(ru)), ru))
}

function td(id, a5E, aS2) {
	var aPX, aS3;

	function aS8() {
		aS3.rH.innerHTML += "<br>" + L(330)
	}

	function aSH() {
		var fm = 1;
		u.v(4, 1, new w(L(331), L(332), !1, [new x("🔄 Reload", function() {
			fm && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fm = 0
		}, bE.om)]))
	}

	function aS7() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.di(bG.aD), bm.pp.pq(110, bI.te.tf(bI.te.tg(15))), b1.aGc.aSJ()
	}
	this.aS4 = !0, this.aS5 = id, this.show = function() {
		aPX.show(), this.resize(), 15 === id ? (b1.z.aS6(id) ? aS7 : aS8)() : 16 === id ? b1.z.aS6(id) ? b1.eg.eh(2) : aS8() : 17 === id ? b1.z.aS6(id) ? b1.eg.eh(3) : aS8() : 18 === id ? (b1.z.close(0, 3253), b1.z.aHa(0, id, 0), aS8()) : 21 ===
			id ? b1.z.aS6(id) ? b1.aS9.aSA(a5E.tv, a5E.tw, a5E.tx) : aS8() : 22 === id ? b1.z.aS6(id) ? b1.aS9.aSB(a5E.tv, a5E.aSC, a5E.aSD) : aS8() : 23 === id ? b1.z.aS6(id) ? b1.aS9.aSE(a5E.aRE, a5E.a25) : aS8() : 24 === id ? b1.z.aS6(id) ? b1
			.aS9.aSF(a5E.aRE, a5E.tw, a5E.tx) : aS8() : 25 === id ? b1.z.aS6(id) ? b1.aGc.aQX(a5E) : aS8() : 28 === id ? b1.z.aS6(id) ? b1.aS9.aSG(a5E.tv, a5E.aSC, a5E.aSD) : aS8() : 29 === id ? b1.z.aS6(id) ? b1.aGc.aQQ(a5E) : aS8() : 30 ===
			id && (b1.z.aS6(id) ? bA.aDf() || aSH() : aS8())
	}, this.aSI = function() {
		15 === id ? aS7() : 16 === id ? b1.eg.eh(2) : 17 === id ? b1.eg.eh(3) : 18 === id ? u.v(8, this.a2d, new td(16)) : 21 === id ? b1.aS9.aSA(a5E.tv, a5E.tw, a5E.tx) : 22 === id ? b1.aS9.aSB(a5E.tv, a5E.aSC, a5E.aSD) : 23 === id ? b1.aS9.aSE(
			a5E.aRE, a5E.a25) : 24 === id ? b1.aS9.aSF(a5E.aRE, a5E.tw, a5E.tx) : 25 === id ? b1.aGc.aQX(a5E) : 28 === id ? b1.aS9.aSG(a5E.tv, a5E.aSC, a5E.aSD) : 29 === id ? b1.aGc.aQQ(a5E) : 30 === id ? bA.aDf() || aSH() : 1e3 === id && (
			this.aS5 = id = 25, b1.aGc.aQX(a5E))
	}, this.aDj = function(code, bx, data) {
		!bx && code !== id || (15 === code || 16 === code ? u.v(7, this.a2d) : 17 === code ? (b1.z.close(0, 3252), bm.z.ww(0), bm.eW.data[117].tJ && 0 < bm.eW.data[117].tJ.length ? (bx = bm.z.wx(0), bm.pp.pq(105, bx.ta), bm.pp.pq(106, bx
			.password), u.v(8, this.a2d, new td(16))) : (bm.pp.pq(105, ""), u.z.aDk())) : 21 === code ? u.v(10, this.a2d, new aCE(data)) : 23 === code ? u.v(13, this.a2d, new aQw({
			data: data,
			aRE: a5E.aRE
		})) : 25 === code ? (u.z.aPD.ta = a5E.ta, bm.wL.nA(a5E.ta), u.v(15, this.a2d)) : 30 === code && (data ? u.v(1) : aSH()))
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aS3.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(328), [new x("⬅️ " + L(40), function() {
		aS2 ? u.v(29) : u.z.aDk()
	})]), aS3 = new sm(aPX.vn, L(329))
}

function aPH() {
	var aQl, aQm, rG;

	function aSM() {
		var gv;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a5s.a5x()), gv = bD.rT.a3y(aE.data.teamPlayerCount, 0), aE.data.numberTeams = gv) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aQo() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aSO(), aE.data.canvas = null, u.v(5, 5)
	}

	function aSO() {
		bC.qf.di(), bm.pp.pq(156, bC.a68.a0q())
	}

	function aSK() {
		aE.data.isReplay = 0, aSO(), aE.a5s.a6K(), ab.aHl(), aE.a5s.a6H(), aE.data.canvas = 2 === aE.data.mapType ? bV.xu : null, aE.a5w(), aE.a5u = 1
	}

	function aSa() {
		aSM();
		for (var h = [aSR(), aSS(), aST()], aC = 3; aC < 6; aC++) u.removeChild(aQm.rH, aQm.rI[aC].r0), aQm.rI[aC] = h[aC - 3], aQm.rH.appendChild(aQm.rI[aC].r0);
		aQm.resize()
	}

	function aSR() {
		var aSb, aPt = new qy;
		return aPt.r1(L(325)), aSb = 0 === aE.data.gameMode ? [L(326), L(304)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), aPt.r7(aSb), aPt.rC(new sn([new x(L(336), function() {
			u.v(21)
		}).button])), aPt
	}

	function aSS() {
		var aPt = new qy,
			h = (aPt.r1(L(65)), [L(303) + ": " + aF.ky[aE.data.botDifficultyValue], L(305), L(306), L(304)]);
		return aPt.r7(h[aE.data.botDifficultyType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(25)
		}).button])), aPt
	}

	function aST() {
		var aPt = new qy,
			h = (aPt.r1("Spawning"), [L(326), L(338), L(304)]);
		return aPt.r7(h[aE.data.spawningType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(24)
		}).button])), aPt
	}
	this.show = function() {
		aQl.show(), this.resize(), aQl.vn.scrollTop = u.z.tU[0]
	}, this.sb = function() {
		u.z.tU[0] = aQl.vn.scrollTop, aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh("🔧 " + L(333), [new x("⬅️ " + L(40), aQo), new x(L(334), aSK)]), aSM(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.xu : 1 === aE.data.mapType ? aE.data.canvas = bV.aMx(bV.a6I(aE.data), 0).xu : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aMx(bV.a6I(aE.data), aE.data.mapSeed).xu)), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy,
			a4E = (aPt.r1(L(335)), aE.data.canvas);
		a4E.style.width = "100%", aPt.rC({
			e: a4E
		}), aPt.rC(new sn([new x(L(336), function() {
			u.v(20)
		}).button])), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt = new qy;
		aPt.r1(L(307)), aPt.rC(new s9({
			eH: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.ia(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.rT.a3y(aE.data.teamPlayerCount, 0), aE.a5s.a5x(), bD.rT.a3y(aE.data.teamPlayerCount, 0) !== e) && aSa()
		})), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy;
		aPt.r1(L(337)), aPt.r9(new vd({
			tJ: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eH) {
			aE.data.gameMode !== eH && (1 === (aE.data.gameMode = eH) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aSa())
		})), rG.push(aPt)
	}(rG), rG.push(aSR()), rG.push(aSS()), rG.push(aST()), function(rG) {
		var aPt = new qy,
			h = (aPt.r1(L(339)), [L(340), L(341), L(304)]);
		aPt.r7(h[aE.data.playerNamesType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(23)
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy,
			h = (aPt.r1(L(300)), [L(302), L(303) + ": " + aE.data.aIncomeValue, L(304)]);
		aPt.r7(h[aE.data.aIncomeType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(22)
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy,
			h = (aPt.r1(L(342)), [L(302), L(303) + ": " + aE.data.tIncomeValue, L(304)]);
		aPt.r7(h[aE.data.tIncomeType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(26)
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy,
			h = (aPt.r1(L(343)), [L(302), L(303) + ": " + aE.data.iIncomeValue, L(304)]);
		aPt.r7(h[aE.data.iIncomeType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(27)
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy,
			h = (aPt.r1(L(344)), [L(302), L(303) + ": " + aE.data.sResourcesValue, L(304)]);
		aPt.r7(h[aE.data.sResourcesType]), aPt.rC(new sn([new x(L(336), function() {
			u.v(28)
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy;
		aPt.r1(L(345)), aPt.rC(new sn([new x(L(346), function() {
			u.y(), aE.a5s.a6L(), u.z.tU[0] = 0, u.v(19)
		}).button])), aPt.rC(new sn([new x(L(347), function() {
			bp.aKB()
		}).button])), aPt.rC(new sn([new x(L(348), function() {
			return bp.aKD(), !0
		}).button])), rG.push(aPt)
	}(rG), rG))
}

function aPS() {
	var aQl, sE = !0;

	function sU(sT, a6P) {
		var r0 = document.createElement("div"),
			aSd = document.createElement("span"),
			aSe = document.createElement("span");
		aSd.textContent = aX.aCa(a6P.eZ) + ":", aSd.style.color = bE.od, aSd.style.paddingRight = "0.4em", aSd.style.display = "table-cell", aSd.style.width = "6ch", aSd.style.textAlign = "end", r0.appendChild(aSd), aSe.textContent = a6P.r2, r0
			.appendChild(aSe), r0.style.display = "table", a6P.q4 && function(r0, q4) {
				{
					var aJY;
					q4 >= 1024 - ak.sa.a09 ? ((aJY = document.createElement("img")).src = ak.xx.zx[q4 - 1024 + ak.sa.a09].toDataURL(), aJY.style.width = "1.5em", aJY.style.height = "1.5em", aJY.style.verticalAlign = "middle", r0.appendChild(aJY)) : (
						(aJY = document.createElement("span")).textContent = ak.sa.a0O(q4), aJY.style.display = "inline-block", aJY.style.fontSize = "1.5em", aJY.style.lineHeight = "1em", aJY.style.verticalAlign = "middle", r0.appendChild(aJY))
				}
			}(r0, a6P.q4), sT.appendChild(r0)
	}

	function sX() {
		sE && (aQl.vn.scrollTop = aQl.vn.scrollHeight)
	}
	this.clear = function() {
		aQl.vn.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a7I = bt.a6S(), fS = a7I.length, sT = document.createDocumentFragment(), aC = 0; aC < fS; aC++) sU(sT, a7I[aC]);
		aQl.vn.appendChild(sT), sX(), aQl.show(), this.resize(), sE = !0, sX()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQl.vn.style.padding = "0.4em " + bD.rL.rU(bf.rR)
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, this.zq = function(a6P) {
		var sT = document.createDocumentFragment();
		sU(sT, a6P), aQl.vn.appendChild(sT), sX()
	}, (aQl = new vh(L(349), [new x("⬅️ " + L(40), function() {
		u.aPV(1)
	})])).vn.style.overflowY = "auto", aQl.vn.addEventListener("scroll", function() {
		sE = aQl.vn.scrollTop >= aQl.vn.scrollHeight - aQl.vn.clientHeight - 2
	})
}

function aPP() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.iIncomeType && bD.rT.a44(aQn.wD(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(343), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(302), L(303), L(304)],
			value: aE.data.iIncomeType
		}, function(eH) {
			aQq(), 2 !== eH || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fP), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eH, u.v(27)
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt;
		1 === aE.data.iIncomeType && ((aPt = new qy).r1("Value"), aPt.rC(new s9({
			eH: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), rG.push(aPt))
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.iIncomeType && ((aPt = new qy).r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.iIncomeData, 4)), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aP7() {
	var aSg, aSh, aRm, s8, aSi, t4 = 0;
	this.aIJ = new tk, aRm = new rw([.45, .27], [.5, .5], 2 / 3), aSh = [new x("⚔️<br>" + L(350), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aSj(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.os), new x("🗡️<br>" + L(333), function() {
			aSj(1)
		}, bE.pA), new x("🔑<br>" + L(351), function() {
			aSj(2)
		}, bE.pT), new x("☰<br>" + L(352), function() {
			aSj(3)
		}, bE.ob), new x("", function() {
			u.v(12)
		}, bE.oK, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], s8 = new s9(bm.eW.data[122]);
	for (var aC = 0; aC < aSh.length; aC++) aSh[aC].button.style.position = "absolute";

	function aSj(eH) {
		a1.a2.setState(10), ac.u4() || ac.aIA(), 0 === eH ? u.z.a6B(1) : 1 === eH ? (bC.aKV.xf(bm.eW.data[156].value, 1) || aE.a5s.a6L(), u.v(19)) : 2 === eH ? 0 !== a1.id || bm.eW.data[140].value ? u.v(8, u.tc, new td(16)) : u.z.aSk(u.tc, 16) :
			3 === eH && u.v(1)
	}
	s8.e.style.position = "absolute", s8.e.style.textAlign = "center", s8.e.placeholder = L(353), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aIJ.show(), aSh[4].rf(bD.color.a4L(bm.eW.data[121].value)), this.resize(), document.body.appendChild(s8.e);
		for (var aC = 0; aC < aSh.length; aC++) document.body.appendChild(aSh[aC].button);
		1 !== a1.id || a1.e1 < 5 || (aSi && bi.eZ > aSi + 144e5 ? a1.wf.setState(14) : aSi = bi.eZ)
	}, this.sb = function() {
		this.aIJ.sb(), u.removeChild(document.body, s8.e);
		for (var aC = 0; aC < aSh.length; aC++) u.removeChild(document.body, aSh[aC].button)
	}, this.resize = function() {
		this.aIJ.resize(), this.aIJ.resize(), aRm.resize();
		var gap = .5 * bf.gap,
			uZ = 10 / 99 * .84 * aRm.j,
			aSn = .16 * aRm.k,
			aAV = .19 * aRm.j,
			fZ = aRm.fZ + aAV,
			uZ = aRm.fb + uZ + 3 * gap,
			j = .5 * (aRm.j - gap) - aAV,
			aAV = aRm.j - 2 * aAV - aSn - gap,
			aAV = (bD.rL.u2(s8.e, fZ, uZ, aAV, aSn), bD.rL.u2(aSh[4].button, fZ + aAV + gap, uZ, aSn, aSn), t4 = uZ, .5 * (aRm.fb + aRm.k - (uZ += aSn + gap) - gap));
		bD.rL.u2(aSh[0].button, fZ, uZ, j, aAV), bD.rL.u2(aSh[1].button, fZ + j + gap, uZ, j, aAV), bD.rL.u2(aSh[2].button, fZ, uZ + aAV + gap, j, aAV), bD.rL.u2(aSh[3].button, fZ + j + gap, uZ + aAV + gap, j, aAV);
		bD.rL.u2(aSh[5].button, fZ, uZ + aAV * 2 + gap * 2, j * 2 + gap, aAV / 3);
		bD.rL.u2(aSh[6].button, fZ, uZ + aAV * 2.33 + gap * 3, j * 2 + gap, aAV / 3);
		for (var aC = 0; aC < aSh.length; aC++) aSh[aC].button.style.font = bD.rL.t9(0, bD.rL.vN(.065 * aRm.k)), bD.rL.rV(aSh[aC].button, 5);
		s8.e.style.font = bD.rL.t9(0, bD.rL.vN(.08 * aRm.k)), bD.rL.rV(s8.e, 5)
	}, this.vw = function() {
		if (ab.aHp(), aU.vw(), fS = Math.floor((a1.a2.ib() ? .018 : .0137) * i.ic), vx.font = bD.rL.t9(0, Math.max(5, fS)), bD.rL.textBaseline(vx, 0), bD.rL.textAlign(vx, 2), vx.fillStyle = bE.oO, vx.fillText(m.e1, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = vx.measureText(text).width, fS = Math.max(5, fS), vx.textAlign = "left", vx.textBaseline = "middle", vx.fillText(text, vx.canvas.width - textLength - fS / 2, 2 * fS), aP.vw(t4), bb.vw(), ac.u4()) {
			vx.imageSmoothingEnabled = !1;
			var text = ac.aHs("territorial.io"),
				textLength = .84 * aRm.j / text.width;
			vx.setTransform(textLength, 0, 0, textLength, aRm.fZ + .08 * aRm.j, aRm.fb), aSg = aSg || bD.a3f.a5C(text, bD.a3f.a5I, [0, 0, 0]);
			for (var fZ = -1; fZ <= 1; fZ += 2)
				for (var fb = -1; fb <= 1; fb += 2) vx.drawImage(aSg, fZ, fb);
			vx.drawImage(text, 0, 0), vx.imageSmoothingEnabled = !0;
			var fS = ac.aHs("logo"),
				aSq = .6666 * textLength * text.height / fS.height,
				o1 = .5 * i.j,
				o2 = aRm.fb + .5 * textLength * text.height - .5 * aSq * fS.height;
			vx.setTransform(aSq, 0, 0, aSq, o1 - .6 * textLength * text.width, o2), vx.drawImage(fS, 0, 0), vx.setTransform(aSq, 0, 0, aSq, o1 + .6 * textLength * text.width - aSq * fS.width, o2), vx.drawImage(fS, 0, 0), vx.setTransform(1, 0, 0,
				1, 0, 0), vx.imageSmoothingEnabled = !0
		}
	}
}

function aPE() {
	var aPX, aSr, aSs, vi;

	function aSt(aC) {
		u.v(8, u.tc, new td(21, {
			tv: aC,
			tw: 0,
			tx: 10
		}))
	}
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aSr.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aSs = [new x(L(354), function() {
		aSt(1)
	}, 0, 0, 1), new x(L(355), function() {
		aSt(2)
	}, 0, 0, 1), new x(L(356), function() {
		aSt(3)
	}, 0, 0, 1), new x(L(357), function() {
		aSt(0)
	}, 0, 0, 1), new x(L(358), function() {
		aSt(9)
	}, 0, 0, 1), new x(L(359), function() {
		aSt(10)
	}, 0, 0, 1), new x(L(360), function() {
		aSt(11)
	}, 0, 0, 1), new x(L(361), function() {
		aSt(13)
	}, 0, 0, 1)], vi = [new x("⬅️ " + L(40), function() {
		u.a2X()
	})], aPX = new vh(L(362), vi), aSr = new rt(aSs, aPX.vn)
}

function aE7(title, r8, aSu) {
	var aPX, aS3;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aS3.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aSu = aSu || [new x("⬅️ " + L(40), function() {
		u.a2X()
	}, bE.p4)], aPX = new vh(title, aSu), aS3 = new sm(aPX.vn, r8), bD.rL.textAlign(aPX.vn.style, 1)
}

function aCE(data) {
	var aPX, aSv;

	function aT4(fS) {
		return fS < 60 ? 1 === fS ? fS + " Second" : fS + " Seconds" : fS < 3600 ? 1 === (fS = Math.floor(fS / 60)) ? fS + " Minute" : fS + " Minutes" : fS < 172800 ? 1 === (fS = Math.floor(fS / 3600)) ? fS + " Hour" : fS + " Hours" : (fS = Math
			.floor(fS / 172800)) + " Days"
	}

	function aSx(k2) {
		var fS = data.data.length;
		if (fS) {
			for (var tw, max = min = parseInt(data.data[0][0]), aC = 1; aC < fS; aC++) var aG7 = parseInt(data.data[aC][0]),
				min = Math.min(aG7, min),
				max = Math.max(aG7, max);
			tw = k2 < 0 ? min + k2 : max + 1, u.v(8, u.a2c().a2d, new td(21, {
				tv: data.tv,
				tw: tw,
				tx: tw + Math.abs(k2)
			}))
		}
	}
	if (this.show = function() {
			aPX.show(), this.resize()
		}, this.sb = function() {
			aPX.sb()
		}, this.resize = function() {
			aPX.resize(), aSv.resize()
		}, this.a3S = function(ej) {
			2 === ej && aPX.vo[0].rc()
		}, data.aCF) {
		aPX = new vh(L(119), [new x("⬅️ " + L(40), function() {
			u.a2X()
		})]);
		var fV = {
				tK: [],
				tQ: [L(375), L(376), L(377) + " ↗"],
				tX: [12, 50, 38]
			},
			a6F = aE.data.a6F;
		if (a6F) {
			for (var fS = a6F.length, tK = fV.tK, zr = ah.zr, aC = 0; aC < fS; aC++) tK.push([{
				fu: aC + 1 + ".",
				ea: 0
			}, {
				fu: zr[aC],
				ea: 0
			}, {
				fu: bI.te.a0f(a6F[aC], 5),
				ea: 1,
				ta: a6F[aC],
				tb: 0
			}]);
			aSv = new tI(aPX.vn, fV, {
				tT: 1
			})
		} else aSv = new tI(aPX.vn, fV)
	} else {
		var fV = data.data.length ? 0 : 1,
			aSu = [new x("⬅️ " + L(40), function() {
				u.a2X()
			}), new x(L(363), function() {
				aSx(-10)
			}, fV, 0, 1), new x(L(364), function() {
				aSx(10)
			}, fV, 0, 1), new x(L(309), function() {
				u.v(11, 10, new aSy({
					tv: data.tv
				}))
			})],
			tQ = [L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373), L(374), L(359), L(360), "Audit Log", L(361)];
		aPX = new vh(tQ[data.tv], aSu), ! function() {
			var aC, fV = {
					tK: []
				},
				tK = fV.tK,
				aT0 = data.data,
				fS = aT0.length;
			fS && 0 === aT0[0][0] && 0 <= (eH = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.tv]) && (u.z.ty[eH] = aT0[0][1]);
			var o0 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.tv],
				a5O = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.tv],
				eH = [
					[L(378), L(379) + " ↗", L(380)],
					[L(378), L(381), L(382), L(383) + " ↗"],
					[L(378), L(379) + " ↗", L(382)],
					[L(378), L(379) + " ↗", L(382)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(123)],
					[L(375), L(384), L(387) + " ↗", L(388) + " ↗", L(389)],
					[L(375), L(384), L(390) + " ↗", L(391) + " ↗", L(392)],
					[L(375), L(384), L(387) + " ↗", L(388) + " ↗", L(393)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(123)],
					[L(378), L(379) + " ↗", L(382)],
					[L(378), L(379) + " ↗", L(394)],
					[L(378), L(379) + " ↗", L(382)],
					[L(375), L(384), L(385) + " ↗", L(386) + " ↗", L(395)],
					[L(378), L(379) + " ↗", L(382)]
				];
			if (fV.tQ = eH[data.tv], fV.tX = [
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
				][data.tv], 0 === data.tv || 2 === data.tv || 3 === data.tv || 9 === data.tv || 10 === data.tv || 11 === data.tv || 13 === data.tv)
				for (aC = 0; aC < fS; aC++) tK.push([{
					fu: aT0[aC][0] + 1 + ".",
					ea: 0
				}, {
					fu: aT0[aC][1],
					ea: 1,
					ta: aT0[aC][4],
					tb: aT0[aC][3]
				}, {
					fu: (o0 * aT0[aC][2]).toFixed(a5O),
					ea: 0
				}]);
			else if (12 === data.tv)
				for (aC = 0; aC < fS; aC++) {
					var aT3 = aT0[aC][3];
					tK.push([{
						fu: "" + aT0[aC][0],
						ea: 0
					}, {
						fu: aT4(aT0[aC][4]),
						ea: 0
					}, {
						fu: aT0[aC][5],
						ea: 1,
						ta: aT0[aC][1],
						tb: 0
					}, {
						fu: aT0[aC][6],
						ea: 1,
						ta: aT0[aC][2],
						tb: 0
					}, {
						fu: br.eN(aT3, bI.te.a0f(aT0[aC][1], 5)),
						ea: 0
					}])
				} else if (1 === data.tv)
					for (aC = 0; aC < fS; aC++) tK.push([{
						fu: aT0[aC][0] + 1 + ".",
						ea: 0
					}, {
						fu: aT0[aC][1],
						ea: 0
					}, {
						fu: (o0 * aT0[aC][2]).toFixed(a5O),
						ea: 0
					}, {
						fu: aT0[aC][3],
						ea: 1,
						ta: aT0[aC][5],
						tb: aT0[aC][4]
					}]);
				else if (4 === data.tv || 5 === data.tv || 6 === data.tv || 7 === data.tv || 8 === data.tv)
				for (aC = 0; aC < fS; aC++) {
					var aT5 = aT0[aC][5];
					4 === data.tv || 8 === data.tv ? "100%" === (aT5 = (aT5 % 64 * 100 / (aT5 >> 6)).toFixed(0) + "%") && (4 === data.tv ? aT5 += " (" + L(396) + ")" : aT5 += " (" + L(397) + ")") : 5 === data.tv ? 32768 <= aT5 && (aT5 = -(aT5 -
						32768)) : aT5 = (o0 * aT5).toFixed(a5O), tK.push([{
						fu: "" + aT0[aC][0],
						ea: 0
					}, {
						fu: aT4(aT0[aC][6]),
						ea: 0
					}, {
						fu: aT0[aC][7],
						ea: 1,
						ta: aT0[aC][1],
						tb: aT0[aC][2]
					}, {
						fu: aT0[aC][8],
						ea: 1,
						ta: aT0[aC][3],
						tb: aT0[aC][4]
					}, {
						fu: "" + aT5,
						ea: 0
					}])
				}
			aSv = new tI(aPX.vn, fV)
		}()
	}
}

function aSy(a5E) {
	var aPX, aPY, rG;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(398), [new x("⬅️ " + L(40), function() {
		u.aPV(10)
	})]), aPY = new rE(aPX.vn, ((rG = []).push(function() {
		var aQ1, aPt = new qy,
			aRk = new s9(bm.eW.data[132], 1, function() {
				aQ1.button.click()
			}),
			aRl = new s9(bm.eW.data[131], 1, function() {
				aRk.e.focus()
			});
		aPt.r1(L(314)), aPt.rC(aRl), aRl.e.style.marginBottom = "0.8em", aPt.r1(L(315)), aPt.rC(aRk);
		return aQ1 = new x(L(313), function() {
			tw = Math.floor(aRl.e.value), tx = Math.floor(aRk.e.value);
			var tx, tw = {
				a3w: Math.min(tw, tx),
				aOe: Math.max(tw, tx)
			};
			u.v(8, u.a6R(10).a2d, new td(21, {
				tv: a5E.tv,
				tw: tw.a3w,
				tx: tw.aOe
			}))
		}, 0, 0, 1), aPt.rC(new sn([aQ1.button])), aPt
	}()), rG.push(function() {
		var aQ1, aPt = new qy,
			aRk = new s9(bm.eW.data[134], 1, function() {
				aQ1.button.click()
			}),
			aRl = new s9(bm.eW.data[133], 0, function() {
				aRk.e.focus()
			});
		return aPt.r1(1 === a5E.tv ? L(399) : L(400)), aPt.rC(aRl), aRl.e.style.marginBottom = "0.8em", aPt.r1(L(401)), aPt.rC(aRk), aQ1 = new x(L(313), function() {
			var aSC = aRl.e.value.slice(0, 20),
				aSD = Math.abs(Math.floor(aRk.e.value));
			u.v(8, u.a6R(10).a2d, new td(22, {
				tv: a5E.tv,
				aSC: aSC,
				aSD: aSD
			}))
		}, 0, 0, 1), aPt.rC(new sn([aQ1.button])), aPt
	}()), rG.push(function() {
		var aQ1, aPt = new qy,
			aRk = new s9(bm.eW.data[152], 1, function() {
				aQ1.button.click()
			}),
			aRl = new s9(bm.eW.data[151], 0, function() {
				aRk.e.focus()
			});
		return aPt.r1(L(402)), aPt.rC(aRl), aRl.e.style.marginBottom = "0.8em", aPt.r1(L(401)), aPt.rC(aRk), aQ1 = new x(L(313), function() {
			var aSC = aRl.e.value.slice(0, 5),
				aSD = Math.abs(Math.floor(aRk.e.value));
			u.v(8, u.a6R(10).a2d, new td(28, {
				tv: a5E.tv,
				aSC: aSC,
				aSD: aSD
			}))
		}, 0, 0, 1), aPt.rC(new sn([aQ1.button])), aPt
	}()), rG))
}

function aPR() {
	var aT9, u8, aTC, u7, uA, aTA = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aTB = new Array(4),
		aTD = new Array(2),
		aTE = [L(64), L(358), L(403), L(404)];

	function aFt() {
		var aFC;
		!bq.ez || (aFC = aT9.uL.s8.e.value.trim().slice(0, 127)).length < 1 || (aT9.uL.s8.e.value = "", bq.aEA.a1S(aFC))
	}

	function aTH(aTJ) {
		bq.z.sO[3] = 1 - bq.z.sO[3], aTI(3, 1, bq.z.sO[3]), aTJ && b1.aG4.aG5(4), bq.z.sO[3] && bm.pp.pq(158, bq.z.sO[0])
	}

	function aTF(fl, fm) {
		bq.z.sO[fl] !== fm && (0 === fl && bq.z.sO[3] && aTH(0), aTI(fl, bq.z.sO[fl], 0), aTI(fl, fm, 1), bq.z.sO[fl] = fm, 0 === fl ? (b1.aG4.aG5(2, fm), bq.z.sO[2] ? (aT9.uM.nA(), aT9.uL.reset(1)) : aT9.uL.reset(0), u.a2c().aFi(), u.a2c().aFh()) :
			2 === fl && (0 === fm ? (b1.aG4.aG5(0), aT9.uL.nA(), aT9.uU()) : (b1.aG4.aG5(1), aT9.uM.nA(), aT9.uV())))
	}

	function aTI(fl, fm, color) {
		aT9.uO[fl].ru[fm].rf(color ? bE.oo : bE.pd)
	}

	function aTM(f8) {
		return bV.xk.aNt[f8]
	}

	function aTN(aEw) {
		return aEw < 7 ? "   " + (aEw + 2) + " Teams" : 10 === aEw ? "   No Full-Sending" : ""
	}

	function aTO(aFk, aTV) {
		return aTV ? aFk <= 90 && 60 < aFk ? "   Contest" : "" : aFk <= 60 ? "   Contest" : ""
	}
	this.aGF = function() {
		return aT9.uL
	}, this.aEA = function(ta) {
		aTF(2, 0);
		var r2 = aT9.uL.s8.e.value,
			ta = "@" + ta + " ";
		r2.length && !bD.sK.a4i(r2, " ") && (ta = " " + ta), aT9.uL.s8.e.value = r2 += ta, aT9.uL.s8.e.focus()
	}, this.aFg = function() {
		aT9.uM.nA()
	}, this.aFi = function() {
		var aTL = bq.z.sO[0],
			aTL = bq.z.sQ[aTL],
			fm = (bV.a8(aTL.f8, aTL.mapSeed), u8.ru),
			a88 = aTM(aTL.f8, aTL.mapSeed) + aTN(aTL.aEw) + aTO(aTL.aFk),
			aTL = L(407) + "   " + aTM(aTL.aGg, aTL.aGh) + aTN(aTL.aGi) + aTO(aTL.aFk, 1);
		fm[0].button.textContent === a88 && fm[1].button.textContent === aTL || (fm[0].button.textContent = a88, fm[1].button.textContent = aTL, u8.resize())
	}, this.aFh = function() {
		var aTL = bq.z.sO[0],
			sP = bq.z.sQ[aTL];
		aT9.uS(sP.uT);
		for (var fu, a8O, aC = 0; aC < bq.uk.ul.length; aC++) aTA[0][aC].sJ.textContent = bq.uk.ul[aC].length, aTA[1][aC].sJ.textContent = (fu = bq.z.sQ[aC].aFk, a8O = void 0, ((a8O = bO.ft(fu, 60)) < 10 ? "0" : "") + a8O + ":" + ((fu %= 60) <
			10 ? "0" : "") + fu);
		var sP = bq.uk.ul[aTL],
			aTQ = sP.length,
			aTR = bq.uk.um[aTL];
		aTA[2][1].sJ.textContent = "" + aTQ, aTA[3][1].sJ.textContent = "" + aTR;
		for (aC = 0; aC < 4; aC++) {
			var aTS = bq.z.sQ[aC];
			aTB[aC] ? 0 === aTS.uT && (aTB[aC].sJ.textContent = bV.xk.aNt[aTS.f8]) : aTB[aC] = new sI(bV.xk.aNt[aTS.f8], u7.ru[aC].button, 1, 1), bD.sK.startsWith(aTE[aC], "🏆 ") ? aTS.aF2 || (aTE[aC] = aTE[aC].substring(3), u7.ru[aC].button
				.textContent = aTE[aC], u7.ru[aC].button.appendChild(aTA[1][aC].sJ), u7.ru[aC].button.appendChild(aTA[0][aC].sJ), u7.ru[aC].button.appendChild(aTB[aC].sJ)) : aTS.aF2 && (aTE[aC] = "🏆 " + aTE[aC], u7.ru[aC].button
				.textContent = aTE[aC], u7.ru[aC].button.appendChild(aTA[1][aC].sJ), u7.ru[aC].button.appendChild(aTA[0][aC].sJ), u7.ru[aC].button.appendChild(aTB[aC].sJ))
		}
		var aTT = "",
			aTU = "";
		0 === aTL && (aTT = bq.lc.aFH(sP, 0, aTQ), aTU = bq.lc.aFH(sP, 0, aTR)), aTC[0].sJ.textContent = aTT, aTC[1].sJ.textContent = aTU, aTD[1].sJ.textContent = "MP: " + bq.z.aFa[0] + "   SP: " + bq.z.aFa[1] + "   Lobby: " + bD.rT.a49(bq.uk.ul)
	}, this.aFm = function() {
		aT9.uL.nA()
	}, this.show = function() {
		bq.z.aEV++, aT9.show(), this.resize(), bq.message.show()
	}, this.sb = function() {
		aT9.sb(), bq.v7.sb(), bq.uh.sb(), bq.message.sb()
	}, this.resize = function() {
		aT9.resize(1 - bq.z.sO[2]), bq.message.resize()
	}, this.a3S = function(ej) {
		2 === ej ? bq.z.sO[3] ? aTH(1) : aT9.uO[3].ru[0].rc() : ej < 2 && aTH(1)
	}, u7 = new sq([new x(aTE[0], function() {
		return aTF(0, 0), 2
	}), new x(aTE[1], function() {
		return aTF(0, 1), 2
	}), new x(aTE[2], function() {
		return aTF(0, 2), 2
	}), new x(aTE[3], function() {
		return aTF(0, 3), 2
	})], bE.pd), u8 = new sq([new x("", 0, 2), new x("", 0, 2)], bE.pe, 1);
	var aTG = new sq([new x(L(405), function() {
		return aTF(2, 0), 2
	}), new x(L(119), function() {
		return aTF(2, 1), 2
	})], bE.pd);
	uA = new sq([new x(L(26, 0, 0, 1), function() {
		u.y(), bq.v1(), b1.z.a2k(3240), u.v(5, 5)
	}), new x(L(406), function() {
		return aTH(1), 2
	})], bE.pd), aT9 = new u6(u7, u8, aTG, uA, aFt, bq.v7.aGP);
	for (var aC = 0; aC < 4; aC++) aTA[0][aC] = new sI("0", u7.ru[aC].button), aTA[1][aC] = new sI("0", u7.ru[aC].button, 1);
	aTA[2][1] = new sI("0", aTG.ru[1].button), aTA[3][1] = new sI("0", uA.ru[1].button), (aTC = [new sI("", aTG.ru[1].button, 1, 1), new sI("", uA.ru[1].button, 1, 1)])[0].sJ.style.bottom = "0em", aTC[1].sJ.style.bottom = "0em", aTI(0, bq.z.sO[0],
		1), aTI(2, bq.z.sO[2], 1), (aTD = [new sI(L(307), aT9.uW(), 1, 0), new sI("", aT9.uW(), 1, 1)])[0].sJ.style.fontSize = "0.4em", aTD[1].sJ.style.fontSize = "0.4em"
}

function aP8() {
	var aPX, aPY, rG;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(408), [new x("⬅️ " + L(40), function() {
		u.v(7, u.a6R(7).a2d)
	}), new x(L(210), function() {
		bm.pp.pq(105, bJ.te.xU(aPY.rI[0].qz[0].e.value, 5)), bm.pp.pq(106, bJ.te.xU(aPY.rI[1].qz[0].e.value, 15)), u.v(8, u.a6R(7).a2d, new td(18))
	})]), aPY = new rE(aPX.vn, ((rG = []).push(function() {
		var aPt = new qy;
		return aPt.r1(L(187)), aPt.rC(new s9({
			value: "",
			eH: -1
		})), aPt
	}()), rG.push(function() {
		var aPt = new qy,
			aQ4 = (aPt.r1(L(190)), new s9({
				value: "",
				eH: -1
			}));
		return aQ4.e.type = "password", aPt.rC(aQ4), aPt.rC(new sn([new x(L(191), function(e) {
			return e.textContent === L(191) ? (e.textContent = L(192), aQ4.e.type = "text") : (e.textContent = L(191), aQ4.e.type = "password"), !0
		}).button])), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		return aPt.r1(L(194)), aPt.r3(L(409)), aPt.r3(L(410)), aPt.r3(L(411)), aPt
	}()), rG))
}

function aPF() {
	var aPX, aSr, aSs, vi;

	function aSt(aC) {
		u.v(8, u.tc, new td(21, {
			tv: aC,
			tw: 0,
			tx: 10
		}))
	}
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aSr.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aSs = [new x(L(370), function() {
		aSt(5)
	}, 0, 0, 1), new x(L(371), function() {
		aSt(6)
	}, 0, 0, 1), new x(L(372), function() {
		aSt(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aSt(12)
	}, 0, 0, 1)], vi = [new x("⬅️ " + L(40), function() {
		u.a2X()
	})], aPX = new vh(L(412), vi), aSr = new rt(aSs, aPX.vn)
}

function aOz() {
	this.eW = {}, this.ty = new Array(8), this.aPD = null, this.aPA = null, this.tG = 0, this.tU = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a6B = function(aTY) {
		aTY && (aa.aHU = aTY), u.y(), aa.di()
	}, this.aDk = function() {
		u.v(0 === ab.a2Y() ? 5 : 0)
	}, this.aRf = function() {
		if (1 === bm.eW.data[130].value) u.v(8, u.a2c().a2d, new td(24, {
			aRE: bm.eW.data[125].value,
			tw: bm.eW.data[128].value,
			tx: bm.eW.data[129].value
		}));
		else {
			for (var h = (h = bm.eW.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a2c().a2d, new td(23, {
				aRE: bm.eW.data[125].value,
				a25: h
			}))
		}
	}, this.aSk = function(a2d, target) {
		u.v(4, a2d, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aPu(
				"/privacy"), !1, [new x("⬅️ " + L(40), function() {
				u.v(a2d)
			}), new x("✅ Accept", function() {
				bm.pp.pq(140, 1), 0 === target ? u.v(2, a2d) : u.v(8, a2d, new td(target))
			})]))
	}, this.aTZ = function() {
		for (var aC = 0; aC < 8; aC++) this.ty[aC] = bJ.xL.xP(bK.qT(5));
		this.ty[1] = "[" + this.ty[1] + "]", 5 === u.tc && (u.a2c().aIJ.pq(this.ty), u.a2c().resize())
	}, this.aQ2 = function(fu, pn, a7x) {
		fu = bD.go.a5B(fu, 1, 1e6);
		var aTa = Math.max(1, 1 + Math.floor(.01 * (fu - 100))),
			pn = L(413, [pn]);
		return (pn += "<br>") + L(414, [a7x]) + "<br>" + L(415, [aTa < 20 ? fu + aTa + "–" + (fu + 20) : fu + aTa]) + "<br>" + L(416, [fu])
	}
}

function aPI() {
	var aQl, aQm, aTb, rG;

	function aQo() {
		b7.v1(), u.aPW()[19] = null, u.a2X()
	}

	function aTi() {
		aTl(), aTj()
	}

	function aTl() {
		aTb.r0.lastChild && u.removeChild(aTb.r0, aTb.r0.lastChild)
	}

	function aTj() {
		var aTm = bV.a6I(aE.data);
		aE.data.canvas = bV.aMx(aTm, aE.data.mapSeed).xu, aTk()
	}

	function aTk() {
		var a4E = aE.data.canvas;
		a4E.style.width = "100%", aTb.r0.appendChild(a4E)
	}
	this.aJX = function(a4E) {
		aE.data.canvas && aTl(), aE.data.canvas = a4E, aTk()
	}, this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(335), [new x("⬅️ " + L(40), aQo)]), 2 === aE.data.mapType && b7.di(), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(417), L(418), L(419)],
			value: aE.data.mapType
		}, function(eH) {
			2 === (aE.data.mapType = eH) ? (b7.di(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.v1()), u.v(20)
		})), 2 <= aE.data.mapType && (aPt.rC(new sx), aPt.rC(new sj({
			value: aE.data.passableWater
		}, L(420), function(value) {
			aE.data.passableWater = value
		})), aPt.rC(new sj({
			value: aE.data.passableMountains
		}, L(421), function(value) {
			aE.data.passableMountains = value
		})));
		rG.push(aPt)
	}(rG = []), function(rG) {
		if (0 === aE.data.mapType) {
			for (var aPt = new qy, tJ = (aPt.r1(L(335)), []), aC = 0; aC < bV.xk.aNr.length; aC++) tJ.push(bV.xk.xl[bV.xk.aNr[aC]].name);
			aPt.r9(new vd({
				tJ: tJ,
				value: aE.data.mapProceduralIndex
			}, function(eH) {
				aE.data.mapProceduralIndex = eH, aTi()
			})), rG.push(aPt)
		}
	}(rG), function(rG) {
		if (1 === aE.data.mapType) {
			for (var aPt = new qy, tJ = (aPt.r1(L(335)), []), aC = 0; aC < bV.xk.aNs.length; aC++) tJ.push(bV.xk.xl[bV.xk.aNs[aC]].name);
			aPt.r9(new vd({
				tJ: tJ,
				value: aE.data.mapRealisticIndex
			}, function(eH) {
				aE.data.mapRealisticIndex = eH, aTi()
			})), rG.push(aPt)
		}
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.mapType && ((aPt = new qy).r1(L(422)), aPt.rC(new s9(bm.eW.data[162], 1)), aPt.r1(L(423), "0.8em"), aPt.rC(new sn([new x(L(424), function() {
			return b7.aJQ(), !0
		}).button])), rG.push(aPt))
	}(rG), function(rG) {
		var aPt, s8;
		2 === aE.data.mapType && ((aPt = new qy).r1(L(425)), s8 = new s9({
			eH: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aPt.rC(s8), rG.push(aPt))
	}(rG), function(rG) {
		var aPt, s8, aQ1;
		0 === aE.data.mapType && ((aPt = new qy).r1("Seed"), s8 = new s9({
			eH: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aTi())
		}), aQ1 = new x(L(326), function(e) {
			var aMs = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aMs) return s8.e.value = aE.data.mapSeed = aMs, aTi(), !0
		}), aPt.rC(s8), aPt.rC(new sn([aQ1.button])), rG.push(aPt))
	}(rG), function(rG) {
		(aTb = new qy).r1(L(426)), 2 !== aE.data.mapType ? aTj() : aE.data.canvas && aTk();
		rG.push(aTb)
	}(rG), rG))
}

function w(title, r8, aTn, aSu) {
	var aPX, aS3;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aS3.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aSu = aSu || [new x("⬅️ " + L(40), function() {
		u.a2X()
	})], aPX = new vh(title, aSu), aS3 = new sm(aPX.vn, r8), aTn && bD.rL.textAlign(aPX.vn.style, 1)
}

function aPL() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 === aE.data.playerNamesType && 1 === bD.rT.a3s(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.playerNamesType && bD.rT.a46(aQn.wD(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(339), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(340), L(341), L(304)],
			value: aE.data.playerNamesType
		}, function(eH) {
			aQq(), aE.data.playerNamesType = eH, u.v(23)
		})), aPt.rC(new sx), aPt.rC(new sj({
			value: aE.data.selectableName
		}, L(427), function(value) {
			aE.data.selectableName = value
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt;
		2 === aE.data.playerNamesType && ((aPt = new qy).r1("Data"), aQn = new w5(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fP || (aE.data.playerNamesData = new Array(aE.fP), aE.data.playerNamesData
			.fill("")), aQn.wC(bD.sK.a5b(aE.data.playerNamesData, 1, '"')), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aPT() {
	var aQl, aQm, rG;

	function aTt() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.eW.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fl = 0; fl < 3; fl++) fl < h.length && (colors[aC][fl] = Number(h[fl]))
		}
		return colors
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(428), [new x("⬅️ " + L(40), function() {
		u.a2X()
	})]), aQm = new rE(aQl.vn, ((rG = []).push(function() {
		var aPt = new qy;
		return aPt.r1(L(429)), aPt.r7(b1.z.aPu("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aPt.r7("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aPt
	}()), rG.push(function() {
		var aPt = new qy,
			el = (aPt.r1(L(430)), bm.eW.data[174].value),
			r4 = aPt.r3(el.length + " / 180"),
			aQT = (r4.style.textAlign = "center", new w5(0, 1, function(e) {
				var e = e.target.value,
					gv = e.length;
				r4.textContent = gv + " / 180", gv <= 180 && bm.pp.pq(174, e)
			}));
		return aQT.e.rows = 6, aQT.e.style.fontSize = "1em", aQT.wC(el), aPt.rC(aQT), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		aPt.r1(L(325));
		for (var aC = 0; aC < 11; aC++) {
			var io = aPt.rC(new s9(bm.eW.data[163 + aC]));
			aC && (io.e.style.marginTop = "0.6em")
		}
		return aPt.rC(new sn([new x(L(431), function() {
			for (var data = bm.eW.data, aC = 163; aC < 174; aC++) data[aC] && bm.eW.wS(aC, data[aC].wV);
			u.a2X(), u.aPW()[31] = null, u.v(31)
		}).button])), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		return aPt.r1("Targeting"), aPt.r7(L(432)), aPt.rC(new s9(bm.eW.data[175], 0, 0)), aPt
	}()), rG.push(function() {
		var aPt = new qy;
		return aPt.r1(L(426)), aPt.rC(new sn([new x(L(191), function() {
			(new ek).show(bm.eW.data[174].value, aTt(), -1)
		}).button])), aPt
	}()), rG.push(function() {
		var aPt = new qy,
			aTu = (aPt.r1(L(433)), aPt.r7(L(434)), new s9(bm.eW.data[176], 1, 0)),
			aTv = (aPt.rC(aTu), new x(L(435), function(e) {
				return aTw.button.textContent === L(186) && b1.z.ef(0) && (bD.rL.va(e), aQ0(), b1.aGc.aTx(bm.eW.data[176].value, aTt(), bm.eW.data[175].value, bm.eW.data[174].value)), !0
			}, 1)),
			aQ0 = function() {
				aTw.button.textContent = L(185), aTv.rf(1), aTv.button.style.color = bE.oO
			},
			aTw = new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aTv.rf(0), aTv.button.style.color = bE.pO) : aQ0(), !0
			});
		return aPt.rC(new sn([aTw.button, aTv.button])), aPt
	}()), rG))
}

function aPU() {
	var aPX, aPY, rG;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh("🔒 " + L(436), [new x("⬅️ " + L(40), function() {
		u.a2X()
	})]), aPY = new rE(aPX.vn, ((rG = []).push(function() {
		var aPt = new qy,
			s8 = (aPt.r7(b1.z.aPu("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", aPt.r1(L(187)), new s9({
				value: "",
				eH: -1
			})),
			aQP = (aPt.rC(s8), aPt.r1(L(257), "0.8em"), new s9({
				value: "",
				eH: -1
			}, 0, 0)),
			aPz = (aQP.e.type = "email", aQP.e.autocomplete = "email", aQP.e.name = "email", aQP.e.inputMode = "email", aQP.e.spellcheck = !1, aPt.rC(aQP), new x(L(437), function(e) {
				return bD.rL.va(e), b1.aGc.aQQ({
					action: 4,
					r2: s8.e.value.trim() + aQP.e.value.trim().substring(0, 63)
				}), !0
			}));
		return aPt.rC(new sn([aPz.button])), aPt
	}()), rG))
}

function aP6() {
	var aQl, wA;

	function aTz() {
		u.y();
		var r2 = bC.aU3(wA.wD());
		(aE.a1O && 0 < r2.length && r2 === bC.qf.a67 || bC.aKV.xf(r2)) && bC.aU4()
	}
	this.show = function(aU0) {
		this.aU1(aU0), aQl.show(), this.resize()
	}, this.aU1 = function(aU0) {
		0 === aE.a1O ? aU0 ? wA.wC(aU0) : aE.a5v.length && wA.wC(aE.a5v) : (aE.hb || (bC.qf.a67 = bC.a68.a0q()), wA.wC(bC.aU2(bC.qf.a67)))
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), wA.resize()
	}, this.a3S = function(ej) {
		2 === ej ? aQl.vo[0].rc() : aTz()
	}, aQl = new vh(L(438), [new x("⬅️ " + L(40), function() {
		u.aPV(1)
	}), new x(L(439), function() {
		wA.wE()
	}), new x(L(440), function() {
		wA.wF()
	}), new x(L(441), function() {
		wA.clear()
	}), new x(L(442), function() {
		aTz()
	})]), wA = new w5(L(443)), aQl.vn.appendChild(wA.e)
}

function aP5() {
	var aPX, aPY, rG, aPt;

	function aU5() {
		bA.aDW !== bm.eW.data[12].value ? (bA.di(), u.v(8, 1, new td(30))) : u.v(1)
	}
	this.show = function() {
			aPX.show(), this.resize()
		}, this.sb = function() {
			aPX.sb()
		}, this.resize = function() {
			aPX.resize(), aPY.resize()
		}, this.a3S = function(ej) {
			2 === ej && aPX.vo[0].rc()
		}, aPX = new vh(L(444), [new x("⬅️ " + L(40), aU5), new x(L(445), function() {
			u.y(), bm.pp.x2(), u.v(2)
		})]), rG = [], (aPt = new qy).r1(L(446)), aPt.r3(L(447)), rG.push(aPt),
		function(rG) {
			var aPt = new qy,
				h = (aPt.r1(L(432)), bA.data.aDn());
			aPt.r9(new vd({
				tJ: h,
				value: bA.data.aDr(h)
			}, function(eH) {
				return bm.pp.pq(12, h[eH].split(":")[0]), !0
			})), rG.push(aPt)
		}(rG),
		function(rG) {
			var aPt = new qy,
				aU8 = (aPt.r1(L(472)), []);
			aPt.rC(new sn([new x(L(431), function(e) {
				ba.aU9();
				for (var aC = 0; aC < aU8.length; aC++) aU8[aC].e.value = ba.aD6[aC];
				return bD.rL.va(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aUA.length; aC++) {
				aPt.r3(ba.aUA[aC]);
				for (var fl = 0; fl < 2; fl++) {
					var eH = 2 * aC + fl,
						s8 = new s9({
							value: ba.aD6[eH],
							eH: -1
						});
					s8.e.aUB = eH, aU8.push(s8), s8.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aUC(e.target.aUB, code)
					}), fl && (s8.e.style.marginLeft = "4%"), s8.e.style.width = "48%", aPt.rC(s8)
				}
			}
			rG.push(aPt)
		}(rG), (aPt = new qy).r1(L(448)), bm.eW.data[1].tJ = [L(449), L(450), L(451), L(452)], aPt.r9(new vd(bm.eW.data[1])), rG.push(aPt), (aPt = new qy).r1(L(453)), bm.eW.data[9].tJ = [L(450), L(454), L(455)], aPt.r9(new vd(bm.eW.data[9])), rG
		.push(aPt), (aPt = new qy).r1(L(456)), bm.eW.data[11].tJ = [L(457), L(9), L(458)], aPt.r9(new vd(bm.eW.data[11])), rG.push(aPt), (aPt = new qy).r1(L(459)), aPt.rC(new sj(bm.eW.data[2])), rG.push(aPt), (aPt = new qy).r1(L(460)), aPt.rC(new sj(
			bm.eW.data[7])), rG.push(aPt), (aPt = new qy).r1(L(461)), aPt.rC(new sj(bm.eW.data[8])), rG.push(aPt), (aPt = new qy).r1(L(462)), aPt.rC(new s9(bm.eW.data[5])), rG.push(aPt), (aPt = new qy).r1(L(463)), aPt.rC(new sj(bm.eW.data[13], L(
			464))), aPt.rC(new sj(bm.eW.data[14], L(465))), rG.push(aPt), (aPt = new qy).r1(L(466)), aPt.r9(new vd({
			tJ: [L(467), L(468), L(469)],
			value: aa.aHV
		}, function(aC) {
			aa.aHV = aC
		})), rG.push(aPt), (aPt = new qy).r1(L(470)), aPt.rC(new sj(bm.eW.data[15])), aPt.r3(L(471)), aPt.rC(new s9(bm.eW.data[16], 1, 0, function(e) {
			e.target.value = bO.ia(Math.floor(e.target.value), 0, 16)
		})), rG.push(aPt), aPY = new rE(aPX.vn, rG)
}

function aPM() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 !== aE.data.spawningType || bD.rT.a3s(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.spawningType && bD.rT.a44(aQn.wD(), aE.data.spawningData, bV.aJa - 1)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(473), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy,
			tJ = (aPt.r1(L(301)), [L(326), L(338), L(304)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (tJ.splice(1, 1), 0 < value) && (value = 1);
		aPt.r9(new vd({
			tJ: tJ,
			value: value
		}, function(eH) {
			aQq(), aE.data.spawningType = eH, 0 === aE.data.gameMode && 1 === eH && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fP)), u.v(24)
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt = new qy;
		aPt.r1("My Spawn"), aPt.rC(new sj({
			value: aE.data.selectableSpawn
		}, L(474), function(value) {
			aE.data.selectableSpawn = value
		})), rG.push(aPt)
	}(rG), function(rG) {
		var aPt = new qy,
			aUE = (aPt.r1("Seed"), new s9({
				eH: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		aPt.rC(aUE), aPt.rC(new sn([new x(L(326), function() {
			aUE.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), rG.push(aPt)
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.spawningType && ((aPt = new qy).r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.spawningData, 2)), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aP4() {
	var aPX, aSr, aSs, vi;

	function aUF(id) {
		0 !== a1.id || bm.eW.data[140].value ? 0 === id ? u.v(8, 1, new td(16)) : u.v(2) : u.z.aSk(u.tc, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aPX.show(), this.resize(), this.ee()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aSr.resize()
	}, this.ee = function() {
		8 === ab.a2Y() && (2 <= bg.aUK ? aSs[2].rd === bE.oa && aSs[2].rf(0) : aSs[2].rd !== bE.oa && aSs[2].rf(bE.oa), !aE.hb && aN.qw(aE.fC) ? aSs[1].rd === bE.oa && aSs[1].rf(0) : aSs[1].rd !== bE.oa && aSs[1].rf(bE.oa), !aE.hb && ax.iH(aE
			.fC) ? aSs[0].rd === bE.oa && aSs[0].rf(0) : aSs[0].rd !== bE.oa && aSs[0].rf(bE.oa))
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aSs = [new x(L(475), function() {
		aUF(0)
	}), new x(L(362), function() {
		u.v(16)
	}), new x(L(412), function() {
		u.v(17)
	}), new x(L(476), function() {
		u.z.aRf()
	}, 0, 0, 1), new x(L(438), function() {
		u.v(3, 1)
	}), new x(L(477), function() {
		u.v(18)
	}), new x(L(428), function() {
		u.v(31)
	}), new x(L(478), function() {
		u.z.a6B(2)
	}), new x(L(444), function() {
		aUF(1)
	}), new x("🔒 " + L(436), function() {
		u.v(32)
	}), new x(L(479), function() {
		var a4e, rP;
		(a4e = []).push(["Wiki", (rP = "https://territorial.io/") + "wiki/gold"]), a4e.push(["Team Games", rP + "log/team"]), a4e.push(["Battle Royale Games", rP + "log/br"]), a4e.push(["1v1 Games", rP + "log/1v1"]), a4e.push([
				"Zombie Games", rP + "log/zombies"
			]), a4e.push(["Changelog", rP + "changelog"]), 2 !== a1.id && a4e.push(["Android App", bN.aE4]), 1 !== a1.id && a4e.push(["iOS App", bN.a2T]), 0 === a1.id && a4e.push(["Patreon", bN.aQj]), a4e.push(["Terms", bN.aUL]), a4e
			.push(["Privacy", bN.aUM]), u.v(4, 1, new w(L(479), bD.rL.a4d(a4e), !1, [new x("⬅️ " + L(40), function() {
				u.v(1)
			})]))
	}), new x(L(480), function() {
		u.v(4, 1, new w(L(480), m.e1 + "<br>" + b1.z.aPu("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(40),
				function() {
					u.v(1)
				})]))
	}), new x(L(481), function() {
		u.v(4, 1, new w(L(481), L(488) + "<br>" + L(489), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(490), function() {
			a1.a2.a2N(), u.v(1)
		})]))
	}), new x("👁️ " + L(482), function() {
		a1.a2.a2O(), u.v(4, 1, new w(L(491), L(492) + " " + b1.z.aPu("/privacy"), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	})], vi = [new x("⬅️ " + L(40), function() {
		u.z.aDk()
	})], 8 === ab.a2Y() && (aSs.unshift(new x(L(349), function() {
		u.v(30)
	})), aSs.unshift(new x(L(485), function() {
		2 <= bg.aUK && (u.y(), bh.a3V(), bi.dq = !0)
	}, 0, 1)), aSs.unshift(new x(L(486), function() {
		!aE.hb && aN.qw(aE.fC) && (bB.hs.q9(), u.y(), aN.hc) && aN.a3V()
	}, 0, 1)), aSs.unshift(new x(L(487), function() {
		!aE.hb && ax.iH(aE.fC) && (bY.a6n(2), bB.hs.iD(), u.y(), aN.hc) && aN.a3V()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e1 && aSs.push(new x(L(483), function() {
		a1.a2.a2P()
	})), aPX = new vh(L(484), vi), aSr = new rt(aSs, aPX.vn)
}

function aPQ() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.sResourcesType && bD.rT.a44(aQn.wD(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(344), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(302), L(303), L(304)],
			value: aE.data.sResourcesType
		}, function(eH) {
			aQq(), 2 !== eH || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fP)), aE.data.sResourcesType = eH, u.v(28)
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt;
		1 === aE.data.sResourcesType && ((aPt = new qy).r1("Value"), aPt.rC(new s9({
			eH: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), rG.push(aPt))
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.sResourcesType && ((aPt = new qy).r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.sResourcesData, 2)), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aPO() {
	var aQl, aQm, aQn, rG;

	function aQo() {
		aQq(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aPW()[19] = null, u.a2X()
	}

	function aQq() {
		2 === aE.data.tIncomeType && bD.rT.a44(aQn.wD(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aQl.show(), this.resize()
	}, this.sb = function() {
		aQl.sb()
	}, this.resize = function() {
		aQl.resize(), aQm.resize()
	}, this.a3S = function(ej) {
		2 === ej && aQl.vo[0].rc()
	}, aQl = new vh(L(342), [new x("⬅️ " + L(40), aQo)]), aQm = new rE(aQl.vn, (function(rG) {
		var aPt = new qy;
		aPt.r1(L(301)), aPt.r9(new vd({
			tJ: [L(302), L(303), L(304)],
			value: aE.data.tIncomeType
		}, function(eH) {
			aQq(), 2 !== eH || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fP), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eH, u.v(26)
		})), rG.push(aPt)
	}(rG = []), function(rG) {
		var aPt;
		1 === aE.data.tIncomeType && ((aPt = new qy).r1("Value"), aPt.rC(new s9({
			eH: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), rG.push(aPt))
	}(rG), function(rG) {
		var aPt;
		2 === aE.data.tIncomeType && ((aPt = new qy).r1("Data"), (aQn = new w5(0, 1, 0, 1)).wC(bD.sK.a5b(aE.data.tIncomeData, 4)), aPt.rC(aQn), rG.push(aPt))
	}(rG), rG))
}

function aPG() {
	var aPX, aPY, rG;
	this.show = function() {
		aPX.show(), this.resize()
	}, this.sb = function() {
		aPX.sb()
	}, this.resize = function() {
		aPX.resize(), aPY.resize()
	}, this.a3S = function(ej) {
		2 === ej && aPX.vo[0].rc()
	}, aPX = new vh(L(477), [new x("⬅️ " + L(40), function() {
		u.a2X()
	})]), aPY = new rE(aPX.vn, ((rG = []).push(function() {
		function aQ0() {
			aTw.button.textContent = L(185), aUP.e.readOnly = !1, aUQ.e.readOnly = !1, aPz.rf(1), aPz.button.style.color = bE.oO
		}
		var aPt = new qy,
			aUO = (aPt.r7(b1.z.aPu("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aPt.r1(L(493)), new s9({
				value: bm.eW.data[105].value,
				eH: -1
			})),
			aUP = (aUO.e.readOnly = !0, aPt.rC(aUO), aPt.r1(L(388), "0.8em"), new s9(bm.eW.data[148], 0, void 0, function(e) {
				aPy(bm.eW.data[149].value, e.target.value)
			})),
			aUQ = (aPt.rC(aUP), aPt.r1(L(392), "0.8em"), new s9(bm.eW.data[149], 1, void 0, function(e) {
				aPy(e.target.value, bm.eW.data[148].value)
			})),
			aTw = (aPt.rC(aUQ), new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aUP.e.readOnly = !0, aUQ.e.readOnly = !0, aPz.rf(0), aPz.button.style.color = bE.pO, bm.pp.pq(149, aUQ.e.value), aPy(bm.eW.data[149].value, bm.eW.data[
					148].value)) : aQ0(), !0
			})),
			aPz = (aPt.rC(new sn([aTw.button])), new x(L(14), function(e) {
				return aUP.e.readOnly && b1.z.ef(0) && (bD.rL.va(e), aQ0(), b1.aGc.aGd({
					action: 0,
					ta: bm.eW.data[148].value,
					value: parseInt(bm.eW.data[149].value, 10)
				})), !0
			}, 1)),
			r4 = aPt.r3(),
			aPy = (aPt.r3(L(494)).style.fontWeight = "bold", function(fu, r2) {
				r4.innerHTML = u.z.aQ2(fu, bm.eW.data[105].value, r2)
			});
		return aPt.rC(new sn([aPz.button])), aPy(bm.eW.data[149].value, bm.eW.data[148].value), aPt
	}()), rG))
}

function bz() {
	"function" != typeof Math.log2 && (Math.log2 = function(fZ) {
		return Math.log(fZ) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fZ) {
		return Math.log(fZ) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fZ) {
		return 0 < fZ ? 1 : fZ < 0 ? -1 : 0
	})
}

function cl() {
	var aAl, aUS, aUT, aUU, aUR = !1;

	function aUV() {
		aUR = !0, aAl = -1, aUS = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aUS[aC] = !1;
		var yk = Math.floor(1 + .02 * i.min);
		aUT = new Array(4), (aUU = new Array(4))[1] = aUU[3] = aUT[0] = aUT[2] = 0, aUU[0] = aUT[3] = -yk, aUT[1] = aUU[2] = yk
	}

	function aUW() {
		if (-1 !== aAl)
			if (0 !== aE.a1O && aI.o6()) {
				for (var aUX = !1, aC = 3; 0 <= aC; aC--) aUS[aC] && (aUX = !0, j6 += aUT[aC], j7 += aUU[aC], ag.a2u(aUT[aC], aUU[aC]), aT.aAR());
				aUX ? bi.dq = !0 : at.nw()
			} else at.nw()
	}
	this.a3Q = function(eH) {
		0 !== aE.a1O && aI.o6() && (aUR || aUV(), aUS[eH] = !0, -1 === aAl) && (aAl = setInterval(aUW, 20), aUW())
	}, this.a3T = function(eH) {
		if (0 !== aE.a1O && (aUR || aUV(), aUS[eH] = !1, -1 !== aAl)) {
			for (var aUX = !1, aC = 3; 0 <= aC; aC--) aUX = aUX || aUS[aC];
			aUX || this.nw()
		}
	}, this.nw = function() {
		if (aUR && -1 !== aAl) {
			for (var aC = 3; 0 <= aC; aC--) aUS[aC] = !1;
			clearInterval(aAl), aAl = -1
		}
	}
}

function cm() {
	this.z = new aUY, this.n5 = new aUZ, this.pn = new aUa, this.aG4 = new aUb, this.eg = new aUc, this.aGc = new aUd, this.qS = new aUe, this.aS9 = new aUf, this.a7x = new aUg, this.aUh = new aUi, this.aUj = new aUk, this.aUl = new aUm, this.aUn =
		new aUo, this.di = function() {
			this.z.di()
		}
}

function aUY() {
	var aUq, aUr;
	this.aHZ = 3, this.aUp = null, this.a2g = 0, this.f0 = 0;

	function aV0() {
		return 0 === aa.aHV ? m.e4 ? 1 : 0 : aa.aHV - 1
	}

	function aV3(a2V, a2d, aV2) {
		aUr[a2V].aUR = !0, aUw(a2V), aUq[a2V] = new aV6, aUq[a2V].di(a2V, a2d, aV2)
	}

	function aV4(aC) {
		return aUr[aC].aUR && aUq[aC].aV4()
	}

	function aUw(a2V) {
		aUr[a2V].eZ = bi.eZ, aUr[a2V].aUt = !1
	}
	this.di = function() {
		this.aUp = new Array(this.aHZ), this.aUp[0] = "territorial.io", this.aUp[1] = "1.territorial.io", this.aUp[2] = "2.territorial.io", aUq = new Array(this.aHZ), aUr = new Array(this.aHZ);
		for (var aC = this.aHZ - 1; 0 <= aC; aC--) aUr[aC] = {
			aUR: !1,
			eZ: 0,
			aUt: !1
		};
		this.aHa(0, 0, 0)
	}, this.aUu = function(aC) {
		return aUq[aC]
	}, this.ee = function() {
		for (var aC = this.aHZ - 1; 0 <= aC; aC--) this.ef(aC) && bi.eZ > aUr[aC].eZ + 15e3 && (b1.pn.aUv(aC, aUr[aC].aUt), aUw(aC));
		!this.ef(0) && bi.eZ > aUr[0].eZ + 8e3 && (aUr[0].eZ = bi.eZ, this.aHa(0, 0, 0))
	}, this.aS6 = function(id) {
		return this.aHa(0, id, 0) && this.aUx(0)
	}, this.aUy = function(aUz) {
		return aUz ? aa.aHW : aV0()
	}, this.a1o = function() {
		return aV0() ? "game.territorial.io" : "territorial.io"
	}, this.aPu = function(aV1) {
		aV1 = this.a1o() + aV1;
		return "<a href='https://" + aV1 + "' target='_blank'>" + aV1 + "</a>"
	}, this.aHa = function(a2V, a2d, aUz) {
		aUz = this.aUy(aUz);
		if (aUr[a2V].aUR) {
			if (aUq[a2V].aV4()) return aUq[a2V].aV5(a2d), aUq[a2V].ef();
			aUq[a2V].sb()
		}
		return aV3(a2V, a2d, aUz), !1
	}, this.aV7 = function(a2V, a2d) {
		console.log("Connection to Server " + a2V), b1.eg.aV8(a2V)
	}, this.aUx = function(aC) {
		return this.ef(aC) && aUq[aC].aUx()
	}, this.aV9 = function(aC) {
		aUq[aC].aV9()
	}, this.ef = function(aC) {
		return aUr[aC].aUR && aUq[aC].ef()
	}, this.send = function(a2V, aD) {
		0 !== a2V && aUw(a2V), aUq[a2V].send(aD)
	}, this.a3B = function(a2V) {
		8 === ab.a2Y() && (aUr[a2V].aUt = !0, b1.n5.aVA = !0)
	}, this.close = function(a2V, aVB) {
		aV4(a2V) && aUq[a2V].close(aVB)
	}, this.aVC = function(a2V, aVB) {
		p.a2j(aVB), aV4(a2V) && aUq[a2V].close(aVB)
	}, this.a2k = function(aVB) {
		for (var aC = this.aHZ - 1; 0 <= aC; aC--) this.close(aC, aVB)
	}, this.aVD = function(a2V, aVB) {
		for (var aC = this.aHZ - 1; 0 <= aC; aC--) aC !== a2V && this.close(aC, aVB)
	}, this.a69 = function() {
		0 === this.a2g && (aE.l7 || aE.hb) || this.close(this.a2g, 3246)
	}, this.aVE = function(a2V, e) {
		aUq[a2V].sb(), p.a2U(a2V, e.code)
	}
}

function aUZ() {
	this.aVA = !1, this.ee = function() {
		bi.kk() % 250 != 249 || aE.hb || (b1.eg.aVF(+(this.aVA && ah.nN[aE.fC]), am.lJ + bQ.z.md), this.aVA = !1)
	}
}

function aUg() {
	this.aVH = function(a2V, aD) {
		bK.di(aD), 0 === bK.size ? b1.z.aVC(a2V, 3205) : ((0 === bK.qT(1) ? function(a2V) {
			var aVL = bK.qT(6);
			0 === aVL ? function(a2V) {
					if (0 === a2V && 8 !== ab.a2Y()) {
						u.z.aTZ();
						for (var aVa = bK.qT(12), aVb = bK.qT(6), h = new Array(aVa), aC = 0; aC < aVa; aC++) h[aC] = bK.qT(aVb);
						aU.aAr(h)
					}
				}(a2V) : 2 === aVL ? b1.aUh.aVN(a2V) : 3 === aVL || 4 === aVL ? ay.di() : 5 === aVL ? b1.aUj.aVO() : 9 === aVL ? b1.aUj.aVP(a2V) : 10 === aVL ? b1.aUl.aVQ() : 11 === aVL ? b1.aUj.aVR(a2V) : 12 === aVL ? b1.aUl.aVS() :
				13 === aVL ? b1.aUn.aVT() : 14 === aVL ? b1.aUn.aVU() : 15 === aVL ? b1.aUj.aVV() : 16 === aVL ? b1.aUh.aVW(a2V) : 17 === aVL ? b1.aUh.aVX(a2V) : 19 === aVL ? b1.aUh.aVY(a2V) : 20 === aVL && b1.aUj.aVZ(a2V)
		} : function(a2V) {
			if (8 !== ab.a2Y() && !ay.aI4()) return;
			if (a2V !== b1.z.a2g) b1.z.aVC(a2V, 3244);
			else if (0 === bK.qT(1)) bi.a1Y.aVc(bK.aD);
			else {
				var aC, a2V = bK.qT(2);
				if (0 === a2V) {
					var q4, pn = bK.qT(9);
					0 !== ah.nN[pn] && 0 !== ah.nN[aE.fC] && (q4 = bK.qT(10), aO.q3(pn, aE.fC, q4), ag.qu(pn, 1, q4))
				} else if (1 === a2V) ! function() {
					var pn = bK.qT(9);
					0 !== ah.nN[pn] && 0 !== ah.nN[aE.fC] && b6.aMT(0, [pn], !0) && aO.qL(pn, 1)
				}();
				else if (2 === a2V) ! function() {
					var pn = bK.qT(9),
						target = bK.qT(9);
					0 !== ah.nN[pn] && 0 !== ah.nN[target] && 0 !== ah.nN[aE.fC] && b6.aMT(1, [pn], !0) && (ag.qu(pn, 3, 96), ag.qu(target, 4, 96), aO.a84(pn, target))
				}();
				else if (m.aA && !m.aB) {
					var fS = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fS = Math.min(bB.pj.qV.length, 540), aC = 0; aC < fS; aC++) bG.aVi(32, bB.pj.qV[aC]);
					b1.z.send(b1.z.a2g, bG.aD)
				}
			}
		})(a2V), bi.aVK())
	}
}

function aUm() {
	this.aVQ = function() {
		bm.z.ws(), bm.pp.pq(105, bI.te.tf(bI.te.tg(5))), bm.pp.pq(106, bI.te.tf(bI.te.tg(15))), bm.pp.pq(109, 0), bm.pp.pq(108, bm.eW.data[109].value), bm.pp.pq(111, bm.eW.data[109].value + 1), bm.pp.pq(107, 0), bm.pp.pq(110, "")
	}, this.aVS = function() {
		var data;
		bK.size < bG.aVj(29) ? b1.z.aVC(0, 3254) : ((data = {
			tb: bK.qT(30),
			x6: bK.qT(16),
			x7: bK.qT(30),
			x8: bK.qT(30),
			x9: bK.qT(30),
			xA: bK.aVk(32),
			username: bJ.xN.xf(5),
			xB: bJ.xN.xf(3),
			xC: bJ.xN.xf(3),
			xD: bK.aVk(32),
			xE: bK.aVk(32),
			xF: bK.qT(30),
			xG: bK.aVk(32),
			xH: bK.aVk(32),
			xI: bK.aVk(32),
			xJ: bK.aVk(32),
			aQA: bK.aVk(32),
			aQB: bK.aVk(30),
			aQb: bK.aVk(32),
			aQc: bJ.xN.xf(3),
			aQU: bK.aVk(2),
			aQW: bK.aVk(10),
			aQS: bJ.xN.xf(8),
			aQV: bK.aVk(5),
			aPw: bK.qT(30),
			aQ7: bK.qT(30),
			a1r: bK.aVk(32),
			aQF: bK.qT(3),
			aQE: bK.qT(8),
			aQ8: bK.qT(30),
			aQ9: bK.aVk(32),
			aQD: bK.qT(1),
			aQO: bJ.xN.xf(6),
			aQG: bK.qT(1),
			aQH: bK.qT(1),
			aQI: bK.qT(1),
			aQd: bK.qT(1),
			aQe: bK.qT(1)
		}).aQd && (data.aQf = bK.aVk(32), data.aQg = bK.qT(30), data.aQh = bK.qT(30), data.aQi = bK.qT(1)), 8 === u.tc && (25 === u.a2c().aS5 ? (data.aPZ = !0, u.z.aPD = data, u.a2c().aDj(25, !1)) : (data.aPZ = !1, bm.pp.pq(160, +(data
			.aQd && data.aQi)), data.ta = bm.eW.data[105].value, u.z.aPA = data, bm.pp.x5(data), u.a2c().aDj(16, !0))))
	}
}

function aUo() {
	this.aVT = function() {
		var aC;
		if (bK.size < bG.aVj(23)) b1.z.aVC(0, 3259);
		else {
			var tv = bK.qT(6),
				fS = bK.qT(10),
				data = [];
			if (9 === tv || 10 === tv || 11 === tv || 13 === tv) {
				for (aC = 0; aC < fS; aC++) data.push([bK.qT(30), bJ.xN.xf(5), bK.aVk(32), 0, bK.qT(30)]);
				8 === u.tc && u.a2c().aDj(21, !0, {
					tv: tv,
					data: data
				})
			} else if (12 === tv) {
				for (aC = 0; aC < fS; aC++) data.push([bK.qT(20), bK.qT(30), bK.qT(30), bK.aVk(32), bK.qT(30), bJ.xN.xf(5), bJ.xN.xf(5)]);
				8 === u.tc && u.a2c().aDj(21, !0, {
					tv: tv,
					data: data
				})
			} else {
				var iP = bK.qT(16);
				if (bK.aVl(39 + 16 * iP + fS * (0 === tv ? 111 : 1 === tv ? 101 : 2 === tv || 3 === tv ? 127 : 212))) {
					if (0 === tv)
						for (aC = 0; aC < fS; aC++) data.push([bK.qT(30), bJ.xL.xP(bK.qT(5)), bK.qT(16), bK.qT(30), bK.qT(30)]);
					else if (1 === tv)
						for (aC = 0; aC < fS; aC++) data.push([bK.qT(16), bJ.xL.xP(bK.qT(3)), bK.qT(16), bJ.xL.xP(bK.qT(5)), bK.qT(31), bK.qT(30)]);
					else if (2 === tv || 3 === tv)
						for (aC = 0; aC < fS; aC++) data.push([bK.qT(30), bJ.xL.xP(bK.qT(5)), bK.aVk(32), bK.qT(30), bK.qT(30)]);
					else
						for (aC = 0; aC < fS; aC++) data.push([bK.qT(20), bK.qT(30), bK.qT(30), bK.qT(30), bK.qT(30), bK.aVk(32), bK.qT(30), bJ.xL.xP(bK.qT(5)), bJ.xL.xP(bK.qT(5))]);
					8 === u.tc && u.a2c().aDj(21, !0, {
						tv: tv,
						data: data
					})
				} else b1.z.aVC(0, 3260)
			}
		}
	}, this.aVU = function() {
		if (bK.size < bG.aVj(29)) b1.z.aVC(0, 3265);
		else {
			var aVm = bK.qT(4),
				aVn = bK.qT(7),
				aVo = bK.qT(11);
			if (bK.aVl(29 + 16 * aVn + 16 * aVo + 11 * aVm)) {
				for (var data = [], aC = 0; aC < aVm; aC++) {
					for (var a26 = bJ.xL.xP(bK.qT(3)), aVp = bK.qT(8), aRF = [], fl = 0; fl < aVp; fl++) aRF.push(bK.qT(16));
					data.push({
						name: "[" + a26 + "]",
						aRF: aRF
					})
				}
				8 === u.tc && u.a2c().aDj(23, !0, data)
			} else b1.z.aVC(0, 3266)
		}
	}
}

function aUi() {
	function aVr() {
		var id = bK.qT(3);
		return 0 === id ? {
			id: id,
			ta: bK.qT(30),
			s: bq.aEA.aG9(bJ.xN.xf(7))
		} : 1 === id ? {
			id: id,
			ta: bK.qT(30),
			aFB: bK.qT(3),
			value: bK.qT(30),
			target: bK.qT(30)
		} : 2 === id ? {
			id: id,
			ta: bK.qT(30),
			aFB: bK.qT(3)
		} : 3 === id ? {
			id: id,
			ta: bK.qT(30),
			aFB: bK.qT(3),
			value: bK.qT(4),
			target: bK.qT(30)
		} : 4 === id ? {
			id: id,
			ta: bK.qT(30),
			aFB: bK.qT(3),
			target: bK.qT(30)
		} : 5 === id ? {
			id: id,
			aFB: bK.qT(6)
		} : 6 === id ? {
			id: id,
			value: bK.qT(17)
		} : null
	}
	this.aVN = function(a2V) {
		if (a2V !== b1.z.f0) b1.z.close(a2V, 3239);
		else if (6 !== ab.a2Y()) b1.z.close(a2V, 3271);
		else {
			bq.di();
			for (var aC = 0; aC < 4; aC++) {
				var sP = bq.z.sQ[aC],
					playerCount = (sP.uT = bK.qT(10), sP.f8 = bK.qT(6), sP.mapSeed = bK.qT(14), sP.aEw = bK.qT(4), sP.aGg = bK.qT(6), sP.aGh = bK.qT(14), sP.aGi = bK.qT(4), sP.aF2 = bK.qT(1), sP.aFk = bK.qT(12), sP.spawningSeed = bK.qT(14), bK
						.qT(16));
				bq.uk.um[aC] = bK.qT(16);
				for (var fl = 0; fl < playerCount; fl++) bq.uk.aEO(aC, bK.qT(30), bJ.xN.xf(5), bK.qT(4), bK.qT(30), bK.qT(7), bK.qT(16), bK.qT(18), bK.qT(11), bK.qT(12))
			}
			u.v(29), bq.z.aFc(!0)
		}
	}, this.aVW = function(a2V) {
		if (a2V !== b1.z.f0) b1.z.close(a2V, 3239);
		else if (bq.ez) {
			bq.z.aFa[0] = bK.qT(20), bq.z.aFa[1] = bK.qT(20);
			for (var aVq = bK.qT(16), fl = 0; fl < aVq; fl++) {
				var id = bK.qT(3);
				0 === id ? bq.uk.aEO(bK.qT(2), bK.qT(30), bJ.xN.xf(5), 0, 1234566, 127, 0, bK.qT(18), 0, bK.qT(12)) : 1 === id ? bq.uk.aEh(bK.qT(16), bK.qT(2)) : 2 === id ? bq.uk.aEd(bK.qT(16), bK.qT(2), bK.qT(2)) : 3 === id ? bq.uk.aEg(bK.qT(
					16), bK.qT(2)) : 4 === id ? bq.uk.aEW(bK.qT(16), bK.qT(2), bK.qT(4), bK.qT(30), bK.qT(7), bK.qT(16), bK.qT(11), bK.qT(18)) : 5 === id && bq.uk.aEX(bK.qT(16), bK.qT(2), bK.qT(1))
			}
			for (var aC = 0; aC < 4; aC++) {
				var sP = bq.z.sQ[aC];
				if (sP.uT = bK.qT(10), sP.aGg = bK.qT(6), sP.aGh = bK.qT(14), sP.aGi = bK.qT(4), 0 === sP.uT) {
					if (sP.a2g = bK.qT(10), sP.aF0 = bK.qT(10), bq.aEC.dr(aC)) return;
					sP.f8 = bK.qT(6), sP.mapSeed = bK.qT(14), sP.aEw = bK.qT(4), sP.aF2 = bK.qT(1), sP.aFk = bK.qT(12), sP.spawningSeed = bK.qT(14), sP.aGj.push(sP.aGj[0]), sP.aGj.shift()
				}
			}
			bq.z.aEs()
		} else b1.z.close(a2V, 3251)
	}, this.aVX = function(a2V) {
		if (a2V !== b1.z.f0) b1.z.close(a2V, 3272);
		else if (bq.ez) {
			for (var sN = bK.qT(4), sP = bq.z.sQ[sN], sR = sP.sR, v0 = (sP.sS = bK.qT(20), bK.qT(6)), aC = 0; aC < v0; aC++) {
				var aH0 = aVr();
				bq.sa.aGz(aH0), sR.push(aH0)
			}
			bq.z.aFl(sN)
		} else b1.z.close(a2V, 3273)
	}, this.aVY = function(a2V) {
		a2V !== b1.z.f0 ? b1.z.close(a2V, 3276) : bq.ez ? bq.message.aEq(aVr()) : b1.z.close(a2V, 3277)
	}
}

function aUk() {
	this.aVO = function() {
		for (var id = bK.qT(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.qT(8), bK.qT(8), bK.qT(8)]);
		var el = bJ.xN.xf(8);
		bX.eR.ei({
			id: id,
			colors: colors,
			el: el
		})
	}, this.aVZ = function(a2V) {
		var aVs = bK.qT(3),
			fV = bK.qT(5),
			fV = bl.aVt.aVu(fV, bK.qT(30), bK.qT(30), bK.qT(30));
		b1.eg.aVv(a2V, fV, aVs, 0)
	}, this.aVP = function(a2V) {
		this.aVZ(a2V), bm.pp.pq(183, bI.te.tf(bI.te.tg(15))), 0 === a2V && 0 === bm.eW.data[105].value.length ? b1.eg.eh(0) : b1.aGc.aVw(a2V), 4 === b1.z.aUu(a2V).aVx() ? 6 === ab.a2Y() && b1.aG4.aHb(a2V) : 5 !== b1.z.aUu(a2V).aVx() || 8 !== ab
			.a2Y() && 10 !== ab.a2Y() || b1.pn.aI0()
	}, this.aVR = function(a2V) {
		var id = bK.qT(6);
		1 === id ? (bm.pp.pq(160, bK.qT(30)), b1.z.aV9(a2V), aU.aAn || b1.eg.eh(1), bA.aDf(), 8 === u.tc && u.a2c().aSI()) : 21 === id ? 8 === u.tc && u.a2c().aDj(17) : 22 === id && (bm.pp.pq(106, bm.eW.data[110].value), bm.pp.pq(110, ""), 8 ===
			u.tc) && u.a2c().aDj(15)
	}, this.aVV = function() {
		var fS = bK.qT(16),
			aVy = bK.qT(16);
		if (bK.aVl(55 + 10 * fS + 16 * aVy)) {
			for (var h = [], aC = 0; aC < fS; aC++) h.push(bJ.xL.xP(bK.qT(10)));
			bA.aDi(h)
		} else b1.z.aVC(0, 3270)
	}
}

function aUa() {
	this.aUv = function(a2V, aUt) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aUt ? 1 : 0), bG.a9(3, 0 === aE.a1O ? bq.ez ? 6 : 0 : aE.hb ? 1 : aE.l7 ? 7 : aE.l5 < 7 ? 2 : 8 === aE.l5 ? 4 : 9 === aE.l5 ? 5 : 3), b1.z.send(a2V, bG.aD)
	}, this.aI0 = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f0), bG.a9(10, ay.aF0), bG.a9(9, ay.aHt), bG.a9(10, m.e6), bG.a9(14, m.du), b1.z.send(b1.z.a2g, bG.aD)
	}, this.po = function(fE) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fE), b1.z.send(b1.z.a2g, bG.aD)
	}, this.pr = function(j5, jw) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, j5), bG.a9(10, jw), b1.z.send(b1.z.a2g, bG.aD)
	}, this.pv = function(j5, pt) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, j5), bG.a9(9, pt), b1.z.send(b1.z.a2g, bG.aD)
	}, this.px = function(j5, pw) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, j5), bG.a9(27, pw), b1.z.send(b1.z.a2g, bG.aD)
	}, this.pz = function(j5, nl) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, j5), bG.a9(16, nl), b1.z.send(b1.z.a2g, bG.aD)
	}, this.q2 = function(jw) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, jw), b1.z.send(b1.z.a2g, bG.aD)
	}, this.q6 = function(eH) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eH), b1.z.send(b1.z.a2g, bG.aD)
	}, this.q8 = function(q7) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, q7), b1.z.send(b1.z.a2g, bG.aD)
	}, this.qA = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a2g, bG.aD)
	}, this.qB = function(j5, fE, jw) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, j5), bG.a9(10, jw), bG.a9(22, fE), b1.z.send(b1.z.a2g, bG.aD)
	}, this.qJ = function(aVz, aW0) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aW0), bG.a9(10, aVz), b1.z.send(b1.z.a2g, bG.aD)
	}, this.qM = function(a7x) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a7x), b1.z.send(b1.z.a2g, bG.aD)
	}, this.qQ = function(aW1, target) {
		var aC, fS = aW1.length;
		for (bG.a8(14 + 9 * fS), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fS; aC++) bG.a9(9, aW1[aC]);
		b1.z.send(b1.z.a2g, bG.aD)
	}
}

function aUd() {
	this.aW2 = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eg.aW3(), b1.z.send(0, bG.aD)
	}, this.aVw = function(a2V) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.te.xb(bm.eW.data[105].value, 5), bJ.te.xb(bm.eW.data[106].value, 15), b1.z.send(a2V, bG.aD)
	}, this.aSJ = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.te.xb(bm.eW.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aQQ = function(a5E) {
		var fS = a5E.r2.length;
		bG.a8(21 + 16 * fS), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a5E.action), bG.a9(8, fS), bI.xL.xa(a5E.r2), b1.z.send(0, bG.aD)
	}, this.aTx = function(xA, colors, aW5, el) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(xA, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fl = 0; fl < 3; fl++) bH.a9(8, colors[aC][fl]);
		xA = bA.data.aDm(aW5.trim());
		bH.a9(8, -1 === xA ? 255 : xA), bI.xN.a0q(el.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aW6())
	}, this.aQX = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.te.xb(data.ta, 5), b1.z.send(0, bG.aD)
	}, this.aGd = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.te.xb(data.ta, 5), bG.aVi(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aUe() {
	this.qR = function() {
		for (var fS = aE.kn, a1D = bU.result.a1D, li = a1D.length, a1z = (bG.a8(17 + 16 * fS + 33 * li), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, li), bG.a9(1, +(2 === aE.a1L)), bG.a9(1, aE.a1g % 2), ah.a1z), aC = 0; aC < fS; aC++) bG.a9(16, a1z[
		aC]);
		for (var hG = ah.hG, aC = 0; aC < li; aC++) {
			var h0 = a1D[aC];
			bG.a9(9, h0), bG.a9(24, hG[h0])
		}
		b1.z.send(b1.z.a2g, bG.aD)
	}
}

function aUf() {
	this.aSA = function(tv, tw, tx) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, tv), bG.a9(1, +(tw < 0)), bG.a9(1, +(tx < 0)), bG.a9(30, Math.abs(tw)), bG.a9(30, Math.abs(tx)), b1.z.send(0, bG.aD)
	}, this.aSB = function(tv, aSC, aSD) {
		bG.a8(18 + 16 * aSC.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, tv), b1.eg.aW7(aSC), bG.a9(30, aSD), b1.z.send(0, bG.aD)
	}, this.aSG = function(tv, aSC, aSD) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, tv), bJ.te.xb(aSC, 5), bG.a9(30, aSD), b1.z.send(0, bG.aD)
	}, this.aSE = function(aRE, a25) {
		for (var fS = a25.length, iP = 0, aC = 0; aC < fS; aC++) iP += a25[aC].length;
		for (bG.a8(21 + 3 * fS + 16 * iP), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aRE), bG.a9(4, fS), bG.a9(7, iP), aC = 0; aC < fS; aC++) bG.a9(3, a25[aC].length), bI.xL.xa(a25[aC]);
		b1.z.send(0, bG.aD)
	}, this.aSF = function(aRE, tw, tx) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aRE), bG.a9(1, +(tw < 0)), bG.a9(1, +(tx < 0)), bG.a9(20, Math.abs(tw)), bG.a9(20, Math.abs(tx)), b1.z.send(0, bG.aD)
	}
}

function aUb() {
	this.aHb = function(a2V) {
		var username = bm.eW.data[122].value.slice(0, 20),
			username = (bG.a8(24 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e6), bG.a9(2, bm.eW.data[158].value), b1.eg.aW7(username), bD.color.a4J(bm.z.wz()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f0 = a2V, b1.z.send(a2V, bG.aD)
	}, this.aG5 = function(aW8, a5E) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aW8), 2 === aW8 ? bH.a9(2, a5E) : 3 === aW8 ? bI.xN.a0q(a5E, 7, bH) : 5 === aW8 && (bH.a9(3, a5E.id), bH.a9(3, a5E.value), bH.a9(30, a5E.ta)), b1.z.send(b1.z.f0, bH.aW6())
	}
}

function aUc() {
	this.aV8 = function(a2V) {
		var aWF;
		bG.a8(55 + bl.aW9.qT()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.du), bG.a9(4, a1.id), bG.a9(7, a1.e1), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aWF = bA.aDl(), bG.a9(8, aWF[0]), bG.a9(8, aWF[1]), bl.aW9
		.a0q(), b1.z.send(a2V, bG.aD)
	}, this.aVv = function(a2V, rr, aVs, aWB) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aVs), bG.a9(30, rr), bG.a9(30, aWB), b1.z.send(a2V, bG.aD)
	}, this.f1 = function(ew) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 6), bI.xN.a0q(ew, 16, bH), b1.z.send(b1.z.f0, bH.aW6())
	}, this.eh = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.vG = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aDh = function(id, r2) {
		var fS = Math.min(r2.length, 63);
		bG.a8(19 + 16 * fS), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fS), bI.xL.xa(r2), b1.z.send(0, bG.aD)
	}, this.aWC = function(aTY, rD) {
		bG.a8(7 + 26 * rD.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < rD.length; aC++) bG.a9(16, rD[aC][0]), bG.a9(10, rD[aC][1]);
		b1.z.send(aTY, bG.aD)
	}, this.aVF = function(aWD, aWE) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aWD), bG.a9(12, aWE), b1.z.send(b1.z.a2g, bG.aD)
	}, this.aW7 = function(username) {
		bG.a9(5, username.length), bI.xL.xa(username)
	}
}

function aV6() {
	var aWG, aWH, b, aWI = ["wss://", "/s50/", "/s51/", "/s52/"],
		aWJ = 0;

	function aV7() {
		b1.z.aV7(aWG, aWH)
	}

	function aWM(e) {
		b1.a7x.aVH(aWG, new Uint8Array(e.data))
	}

	function aWN() {}

	function aVE(e) {
		b1.z.aVE(aWG, e)
	}
	this.di = function(eH, a2d, aV2) {
		aWG = eH, aWH = a2d,
			function(aV2) {
				aV2 = m.dy ? "ws://localhost:" + (7130 + aWG) + "/" : aV2 ? aWI[0] + "game.territorial.io/x0" + aWG + "/" : aWI[0] + b1.z.aUp[aWG] + aWI[1 + m.dz];
				(b = new WebSocket(aV2)).binaryType = "arraybuffer", b.onopen = aV7, b.onmessage = aWM, b.onclose = aVE, b.onerror = aWN
			}(aV2)
	}, this.aWL = function() {
		return b.readyState === b.CONNECTING
	}, this.ef = function() {
		return b.readyState === b.OPEN
	}, this.aUx = function() {
		return aWJ
	}, this.aV9 = function() {
		aWJ = 1
	}, this.aV4 = function() {
		return this.aWL() || this.ef()
	}, this.aV5 = function(a2d) {
		aWH = a2d
	}, this.aVx = function() {
		return aWH
	}, this.send = function(aD) {
		this.ef() && b.send(aD)
	}, this.close = function(aVB) {
		this.aV4() && (this.sb(), b.close(aVB))
	}, this.sb = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dP() {
	var gap, aWO = !1,
		aWP = 0,
		j = 0,
		ti = 0,
		canvas = null,
		zX = null,
		a3t = null;

	function aWT() {
		for (var aC = aE.yZ; 0 <= aC; aC--) a3t[aC] = 0;
		for (aC = am.lJ - 1; 0 <= aC; aC--) a3t[bj.fQ[am.lO[aC]]] += ah.hG[am.lO[aC]];
		aWO = !0
	}

	function aWR() {
		for (var aWY, aWW = 0, fS = 0, ej = Math.floor(j / 2), eG = Math.floor(ti / 2), aWX = 1.5 * Math.PI, aC = aE.yZ; 0 <= aC; aC--) fS += a3t[aC], 0 === a3t[aC] && aWW++;
		if (aWO = !1, zX.clearRect(0, 0, j, j), 0 < fS)
			if (aWW === aE.yZ) {
				for (aC = aE.yZ; 0 <= aC; aC--)
					if (0 < a3t[aC]) {
						! function(aC, ej, eG) {
							zX.fillStyle = bj.aWf[bj.lA[aC]], zX.beginPath(), zX.arc(ej, ej, eG, 0, 2 * Math.PI), zX.fill()
						}(aC, ej, eG);
						break
					}!
				function(ej) {
					var fontSize = ej / 3;
					zX.font = bD.rL.t9(1, fontSize), zX.fillStyle = bE.oO, zX.fillText("100%", ej, ej + .1 * fontSize)
				}(ej)
			} else {
				for (aC = 0; aC <= aE.yZ; aC++) 0 < a3t[aC] && (! function(aC, ej, eG, aWX, aWY) {
					zX.fillStyle = bj.aWf[bj.lA[aC]], zX.beginPath(), zX.arc(ej, ej, eG, aWX, aWY), zX.lineTo(ej, ej), zX.fill()
				}(aC, ej, eG, aWX, aWY = aWX + 2 * Math.PI * a3t[aC] / fS), function(ej, eG, aWX, aWY) {
					var fu = (aWY - aWX) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eG * Math.min(fu, .37);
					fontSize < 8 || (aWX = (aWX + aWY) / 2, aWY = (__fx.settings.detailedTeamPercentage ? (100 * fu).toFixed(2) : Math.floor(100 * fu + .5)) + "%", eG *= .525 - Math.max(.6 * (fu - .7), 0), zX.font = bD.rL.t9(1, fontSize), zX
						.fillStyle = bE.oO, zX.fillText(aWY, ej + Math.cos(aWX) * eG, ej + Math.cos(aWX + 1.5 * Math.PI) * eG))
				}(ej, eG, aWX, aWY), 0 !== aC && aWd(ej, eG, aWX), aWX = aWY);
				aWd(ej, eG, 1.5 * Math.PI)
			}!
		function(ej, eG) {
			zX.beginPath(), zX.arc(ej, ej, eG, 0, 2 * Math.PI), zX.stroke()
		}(ej, eG)
	}

	function aWd(ej, eG, aWg) {
		zX.beginPath(), zX.moveTo(ej, ej), zX.lineTo(ej + Math.cos(aWg) * eG, ej + Math.cos(aWg + 1.5 * Math.PI) * eG), zX.stroke()
	}
	this.di = function() {
		if (aE.iM) {
			aWP = 0, a3t = new Uint32Array(aE.yZ + 1);
			for (var aC = aE.yZ; 0 <= aC; aC--) a3t[aC] = 0;
			for (aC = am.lJ - 1; 0 <= aC; aC--) a3t[bj.fQ[am.lO[aC]]] += 1;
			this.resize()
		} else a3t = zX = canvas = null
	}, this.a9L = function() {
		return j
	}, this.resize = function() {
		aE.iM && (j = Math.floor(.95 * (a1.a2.ib() && !aE.nr ? .18 * i.min : .13 * i.ic)), j = (j *= 1 + (.5 + .2 * a1.a2.ib()) * aE.nr) + j % 2, gap = Math.max(1, .015 * j), ti = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (zX = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zX.strokeStyle = bE.oO, bD.rL.textAlign(zX, 1), bD.rL.textBaseline(zX, 1), aWR())
	}, this.lK = function(aWS) {
		aWS && aWT();
		var ea, aWS = this.lM();
		return bj.lA[aWS] || (aWS = function() {
			for (var lL = -1, aC = aE.yZ; 1 <= aC; aC--)(-1 === lL || a3t[aC] > a3t[lL]) && (lL = aC);
			return lL
		}(), ea = ah.hG[mO[0]], -1 !== aWS && a3t[aWS] > ea) ? a3t[aWS] : ea
	}, this.a2I = function() {
		return aWP = 31, this.ee(), this.lM()
	}, this.lM = function() {
		for (var lL = 0, aC = aE.yZ; 0 < aC; aC--) a3t[aC] > a3t[lL] && (lL = aC);
		return lL
	}, this.ko = function(aWV) {
		for (var gv = 0, lO = am.lO, fQ = bj.fQ, fS = am.lJ, g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = lO[aC];
			fQ[h0] === aWV && (g6[gv++] = h0)
		}
		bR.fx[0] = gv
	}, this.lN = function(aWV) {
		for (var gv = 0, lO = am.lO, fQ = bj.fQ, fS = am.lJ, g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = lO[aC];
			fQ[h0] !== aWV && (g6[gv++] = h0)
		}
		bR.fx[0] = gv
	}, this.a4m = function() {
		for (var gv = 0, aC = aE.yZ; 0 <= aC; aC--) gv += 0 < a3t[aC];
		return gv
	}, this.ee = function() {
		aE.iM && 32 <= ++aWP && (aWP = 0, aWT())
	}, this.nA = function() {
		aE.iM && aWO && aWR()
	}, this.vw = function() {
		aE.iM && (aE.nr ? vx.drawImage(canvas, bf.gap, bf.gap) : vx.drawImage(canvas, bf.gap, a9K + 2 * bf.gap))
	}
}

function df() {
	function aWm(fZ, fS, fb, a10, aAc, fs) {
		if (!(fb < 1 || aAc < fb))
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (a10(f6)) return f6 >> 2;
				fZ += fs
			}
		return -1
	}

	function aWq(fb, fS, fZ, a10, aWk, fs) {
		if (!(fZ < 1 || aWk < fZ)) {
			fS = Math.max(fS, 0);
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (a10(f6)) return f6 >> 2;
				fb += fs
			}
		}
		return -1
	}

	function aWu(iw, ix, aWh) {
		return -1 !== ix && (-1 === iw || bP.iy(ix, aWh) < bP.iy(iw, aWh)) ? ix : iw
	}
	this.hr = function(aWh) {
		return this.a1S(aWh, function(f6) {
			return ad.fN(f6)
		})
	}, this.hx = function(aWh) {
		return this.a1S(aWh, function(f6) {
			return ad.aIk(f6, aE.fC)
		})
	}, this.a1S = function(aWh, a10) {
		return function(aWh, aWi, a10) {
			for (var hh = bP.fa(aWh), hj = bP.fc(aWh), aWk = bV.fd - 2, aAc = bV.fe - 2, aWl = -1, fV = 0; fV < aWi; fV++) {
				var aAb = Math.max(hh - fV, 1),
					aNM = Math.max(hj - fV, 1),
					zA = Math.min(hh + fV, aWk),
					z9 = Math.min(hj + fV, aAc),
					iw = aWm(hh, zA - hh, hj - fV, a10, aAc, 1),
					ix = aWm(hh - 1, hh - aAb - 1, hj - fV, a10, aAc, -1),
					zA = aWm(hh, zA - hh, hj + fV, a10, aAc, 1),
					aAb = aWm(hh - 1, hh - aAb - 1, hj + fV, a10, aAc, -1),
					aWp = aWq(hj, z9 - hj - 1, hh - fV, a10, aWk, 1),
					aWr = aWq(hj - 1, hj - aNM - 2, hh - fV, a10, aWk, -1),
					z9 = aWq(hj, z9 - hj - 1, hh + fV, a10, aWk, 1),
					aNM = aWq(hj - 1, hj - aNM - 2, hh + fV, a10, aWk, -1);
				if (aWl = aWu(aWl, iw, aWh), aWl = aWu(aWl, ix, aWh), aWl = aWu(aWl, zA, aWh), aWl = aWu(aWl, aAb, aWh), aWl = aWu(aWl, aWp, aWh), aWl = aWu(aWl, aWr, aWh), aWl = aWu(aWl, z9, aWh), 0 <= (aWl = aWu(aWl, aNM, aWh)) && fV *
					fV >= bP.iy(aWl, aWh)) return aWl
			}
			return -1
		}(aWh, bP.iZ(), a10)
	}
}

function d8() {
	function aWw(key) {
		var aU0;
		return "undefined" == typeof URLSearchParams || (aU0 = window.location.search, "string" != typeof(aU0 = new URLSearchParams(aU0).get(key))) || aU0.length < 1 ? null : aU0
	}
	this.dr = function() {
		if (0 !== a1.id) return !1;
		if (! function() {
				var value = aWw("account");
				if (!value && !(value = aWw("a"))) return void bL.clear();
				return bL.clear(), u.v(8, u.tc, new td(1e3, {
					action: 0,
					ta: value,
					tb: 0
				})), 1
			}()) {
			var value = aWw("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			u.v(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a2S = new URL(window.location.href);
		a2S.search = "";
		try {
			return history.replaceState(null, "", a2S.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aQk = function(key, value) {
		if (0 === a1.id) try {
			var a2S = new URL(window.location.href),
				h0 = a2S.searchParams;
			h0.set(key, value), a2S.search = h0.toString(), history.replaceState(null, "", a2S.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cn() {
	var aWy, h;
	this.di = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.ft(32768 * aC, 100);
		this.a5y(0)
	}, this.value = function(h0) {
		return h[h0]
	}, this.aNE = function() {
		return bO.ft(aWy - 1, 2)
	}, this.a5y = function(aMs) {
		aWy = 2 * aMs % 32768 + 1
	}, this.random = function() {
		return aWy = 167 * aWy % 32768
	}, this.k4 = function(nI) {
		return bO.ft(nI * this.random(), 32768)
	}, this.kf = function(h0) {
		return 0 !== h0 && this.random() < this.value(h0)
	}, this.jQ = function(fl, fm) {
		return fl + this.k4(fm - fl)
	}
}

function d4() {
	this.qf = new aWz, this.a68 = new aX0, this.aKV = new aX1, this.di = function() {
		aE.hb || this.qf.di()
	}, this.ee = function() {
		aE.hb || (this.qf.ee(), 3 !== u.tc) || bi.kk() % 15 != 5 && 2 !== aE.a1O || u.a2c().aU1()
	}, __fx.replay.restartReplay = () => this.aU4(), this.aU4 = function() {
		var aX3 = 0 !== aE.a1O,
			aX4 = aE.a5u;
		aX3 || ab.aHl(), aE.a5s.a6H(), aE.data.canvas = null, b1.z.close(b1.z.a2g, 3257), b1.z.a2g = 0, aE.data.isReplay = 1, aE.a5w(), aX3 && (aE.a5u = aX4)
	}, this.aU3 = function(r2) {
		var aC = r2.indexOf("=");
		return 0 <= aC ? r2.substring(aC + 1) : r2
	}, this.aU2 = function(r2) {
		return r2
	}, __fx.replayHistory.load = saved => {
		saved = bC.aU3(saved), bC.aKV.xf(saved) && bC.aU4()
	}
}

function aWz() {
	this.aX5 = null, this.aX6 = null, this.aX7 = null, this.aX8 = null, this.aX9 = null, this.aXA = null, this.a67 = "";
	var aXB = 0;
	this.di = function() {
		this.aX5 = [], this.aX6 = [], this.aX7 = [], this.aX8 = [], this.aX9 = [0], this.aXA = [0], aXB = 0, this.a67 = ""
	}, this.qg = function(id, gB, gD, gF) {
		aE.hb || 2 === aE.a1O || (0 === this.aX9[aXB] && (this.aXA[aXB] ? (this.aX9.push(1), this.aXA.push(0), aXB++) : this.aX9[aXB] = 1), this.aX5.push(id), this.aX6.push(gB), this.aX7.push(void 0 === gD ? 0 : gD), this.aX8.push(void 0 === gF ?
			0 : gF), this.aXA[aXB]++)
	}, this.ee = function() {
		0 === this.aX9[aXB] ? this.aXA[aXB]++ : (this.aX9.push(0), this.aXA.push(0), aXB++)
	}
}

function aX1() {
	var aXC = 0;

	function aXG(r2, id) {
		aXC || (id ? 1 === id ? aO.a7Q = L(496) + ": " + r2 : u.v(4, 3, new w(L(497), r2, 1)) : u.v(4, 3, new w("⚠️ " + L(495), r2, 1)))
	}
	this.xf = function(r2, aXD) {
		var io, rD;
		return aXC = aXD, bJ.te.xX(bJ.te.xV(bJ.te.xT(r2))), aO.a7Q = "", !! function() {
			if (bK.size < 10) aXG("File Too Small");
			else {
				var aXI = bK.qT(12),
					s = (aXI !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aXG(s = (s += "   Found: " + aXI) + ("   Compatible at " + b1.z.a1o() + "/" + aXI), 1)), bK.qT(12)),
					aXJ = bK.qT(31);
				if (aXJ !== bK.size) aXG("Size Error: " + aXJ + " " + bK.size);
				else if (function(k, aXI) {
						for (var h0 = bK.aD, fS = bK.size, aWE = aXI, aC = 3; aC < fS; aC++) aWE = aWE + h0[aC] & 4095;
						return aWE === k || (aXG("Hash Error: " + aWE + " " + k + " " + fS), !1)
					}(s, aXI)) return 1
			}
			return
		}() && (io = bK, (rD = aE.data = new a5r).mapType = io.qT(2), rD.mapProceduralIndex = io.qT(8), rD.mapRealisticIndex = io.qT(8), rD.mapSeed = io.qT(14), rD.mapName = io.aXL(5), 2 === rD.mapType && io.aXM(), rD.passableWater = io.qT(
			1), rD.passableMountains = io.qT(1), rD.playerCount = io.qT(10), rD.humanCount = io.qT(10), rD.selectedPlayer = io.qT(9), rD.gameMode = io.qT(1), rD.playerMode = io.qT(2), rD.battleRoyaleMode = io.qT(2), rD.numberTeams = io.qT(4),
			rD.isZombieMode = io.qT(1), rD.isContest = io.qT(1), rD.isReplay = io.qT(1), rD.elo = io.aXN(2, 14, 2), rD.colorsType = io.qT(1), rD.colorsPersonalized = io.qT(1), rD.colorsData = io.aXN(10, 18, 512), rD.selectableColor = io.qT(
			1), rD.teamPlayerCount = io.aXN(4, 10, 9), rD.neutralBots = io.qT(1), rD.botDifficultyType = io.qT(2), rD.botDifficultyValue = io.qT(4), rD.botDifficultyTeam = io.aXN(4, 4, 9), rD.botDifficultyData = io.aXN(10, 4, 512), rD
			.spawningType = io.qT(2), rD.spawningSeed = io.qT(14), rD.spawningData = io.aXN(11, 12, 1024), rD.selectableSpawn = io.qT(1), rD.playerNamesType = io.qT(2), rD.playerNamesData = io.aXO(10, 5, 512), rD.selectableName = io.qT(1), rD
			.aIncomeType = io.qT(2), rD.aIncomeValue = io.qT(8), rD.aIncomeData = io.aXN(10, 8, 512), rD.tIncomeType = io.qT(2), rD.tIncomeValue = io.qT(8), rD.tIncomeData = io.aXN(10, 8, 512), rD.iIncomeType = io.qT(2), rD.iIncomeValue = io
			.qT(8), rD.iIncomeData = io.aXN(10, 8, 512), rD.sResourcesType = io.qT(2), rD.sResourcesValue = io.qT(11), rD.sResourcesData = io.aXN(10, 11, 512), rD.a6F = io.aXN(10, 30, 0), !! function() {
				var io = bK,
					xg = io.qT(5),
					aXP = io.qT(30),
					aXQ = io.qT(30);
				if (aXP + aXQ > 8 * io.size) return void aXG("Corrupted File");
				return function(fS) {
						var aXT = new Uint8Array(fS),
							aXU = new Uint16Array(fS),
							aXV = new Uint32Array(fS),
							aXW = new Uint32Array(fS);
						bC.qf.aX5 = aXT, bC.qf.aX6 = aXU, bC.qf.aX7 = aXV, bC.qf.aX8 = aXW;
						for (var aC = 0; aC < fS; aC++) {
							var id = bK.qT(4);
							aXT[aC] = id, aXU[aC] = bK.qT(9), 0 === id ? aXV[aC] = bK.qT(22) : 1 === id ? (aXV[aC] = bK.qT(10), aXW[aC] = bK.qT(10)) : 2 === id ? (aXV[aC] = bK.qT(10), aXW[aC] = bK.qT(9)) : 3 === id ? (aXV[aC] = bK.qT(10),
								aXW[aC] = bK.qT(27)) : 4 === id ? (aXV[aC] = bK.qT(10), aXW[aC] = bK.qT(16)) : 5 === id || 6 === id ? aXV[aC] = bK.qT(10) : 7 === id ? aXV[aC] = bK.qT(1) : 10 === id && (aXV[aC] = bK.qT(20), aXW[aC] = bK
								.qT(22))
						}
					}(aXP),
					function(fS, xg) {
						var aX9 = new Uint8Array(fS),
							aXA = new Array(fS);
						aXA.fill(0), bC.qf.aX9 = aX9, bC.qf.aXA = aXA;
						for (var aC = 0; aC < fS; aC++) aX9[aC] = bK.qT(1), aXA[aC] = bK.qT(xg)
					}(aXQ, xg), 1
			}()) && (bK.eH < 8 * bK.size - 13 || bK.eH > 8 * bK.size ? (aXG("Out Of Bounds Error: " + bK.eH + " " + 8 * bK.size), !1) : (bC.qf.a67 = r2, 2 !== aE.data.mapType || (aXG("Load base64 image...", 2), aXD)))
	}, this.aKW = function(aJY, aXH) {
		var a4E = document.createElement("canvas"),
			iU = a4E.getContext("2d");
		if (a4E.width = aJY.width, a4E.height = aJY.height, iU.drawImage(aJY, 0, 0), aE.data.canvas = a4E, aXC || aXH) return aE.a1O ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aU4()
	}
}

function aX0() {
	this.a0q = function() {
		var xg = function() {
				for (var aXA = bC.qf.aXA, fS = aXA.length, max = 0, aC = 0; aC < fS; aC++) max = Math.max(max, aXA[aC]);
				return xn(Math.max(max, 1))
			}(),
			j = (rD = aE.data, (j = bH).di(), j.a9(12, m.rVersion), j.eH += 43, j.a9(2, rD.mapType), j.a9(8, rD.mapProceduralIndex), j.a9(8, rD.mapRealisticIndex), j.a9(14, rD.mapSeed), j.aXd(rD.mapName, 5), 2 === rD.mapType && j.aXe(rD.canvas),
				j.a9(1, rD.passableWater), j.a9(1, rD.passableMountains), j.a9(10, rD.playerCount), j.a9(10, rD.humanCount), j.a9(9, rD.selectedPlayer), j.a9(1, rD.gameMode), j.a9(2, rD.playerMode), j.a9(2, rD.battleRoyaleMode), j.a9(4, rD
					.numberTeams), j.a9(1, rD.isZombieMode), j.a9(1, rD.isContest), j.a9(1, rD.isReplay), j.dp(rD.elo, 2, 14), j.a9(1, rD.colorsType), j.a9(1, rD.colorsPersonalized), j.dp(rD.colorsData, 10, 18), j.a9(1, rD.selectableColor), j.dp(
					rD.teamPlayerCount, 4, 10), j.a9(1, rD.neutralBots), j.a9(2, rD.botDifficultyType), j.a9(4, rD.botDifficultyValue), j.dp(rD.botDifficultyTeam, 4, 4), j.dp(rD.botDifficultyData, 10, 4), j.a9(2, rD.spawningType), j.a9(14, rD
					.spawningSeed), j.dp(rD.spawningData, 11, 12), j.a9(1, rD.selectableSpawn), j.a9(2, rD.playerNamesType), j.aXf(rD.playerNamesData, 10, 5), j.a9(1, rD.selectableName), j.a9(2, rD.aIncomeType), j.a9(8, rD.aIncomeValue), j.dp(rD
					.aIncomeData, 10, 8), j.a9(2, rD.tIncomeType), j.a9(8, rD.tIncomeValue), j.dp(rD.tIncomeData, 10, 8), j.a9(2, rD.iIncomeType), j.a9(8, rD.iIncomeValue), j.dp(rD.iIncomeData, 10, 8), j.a9(2, rD.sResourcesType), j.a9(11, rD
					.sResourcesValue), j.dp(rD.sResourcesData, 10, 11), j.dp(rD.a6F, 10, 30), ! function(xg) {
					var j = bH,
						aX5 = bC.qf.aX5,
						gB = bC.qf.aX6,
						gD = bC.qf.aX7,
						gF = bC.qf.aX8,
						fS = aX5.length;
					j.a9(5, xg), j.a9(30, fS), j.a9(30, bC.qf.aXA.length);
					for (var aC = 0; aC < fS; aC++) {
						var ej = aX5[aC];
						j.a9(4, ej), j.a9(9, gB[aC]), 0 === ej ? j.a9(22, gD[aC]) : 1 === ej ? (j.a9(10, gD[aC]), j.a9(10, gF[aC])) : 2 === ej ? (j.a9(10, gD[aC]), j.a9(9, gF[aC])) : 3 === ej ? (j.a9(10, gD[aC]), j.a9(27, gF[aC])) : 4 === ej ? (j
							.a9(10, gD[aC]), j.a9(16, gF[aC])) : 5 === ej || 6 === ej ? j.a9(10, gD[aC]) : 7 === ej ? j.a9(1, gD[aC]) : 10 === ej && (j.a9(20, gD[aC]), j.a9(22, gF[aC]))
					}
				}(xg), ! function(xg) {
					for (var j = bH, aX9 = bC.qf.aX9, aXA = bC.qf.aXA, fS = aX9.length, aC = 0; aC < fS; aC++) j.a9(1, aX9[aC]), j.a9(xg, aXA[aC])
				}(xg), bH.eH),
			rD = bO.ft(j - 1, 6) + 1,
			xg = (bG.aVj(6 * rD) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eH = 24, j.a9(31, j.h.length), j.eH = 12, j.a9(12, function() {
					for (var h = bH.h, fS = h.length, aWE = m.rVersion, aC = 3; aC < fS; aC++) aWE = aWE + h[aC] & 4095;
					return aWE
				}())
			}(), bK.di(bH.h), bI.te.tf(bI.te.tg(rD)));
		return bK.v1(), bH.di(), xg
	}
}

function cs() {
	var ej, bx = !1,
		aXh = !1,
		aXi = -1e4,
		aXj = -1,
		aXk = 0;

	function resize(aXo) {
		ej = 0, ac.u4() && (aXm(aXo) || bx) && (bx = !1, bf.resize(), bZ.aDI.resize(), aZ.di(), bb.di(), aa.resize(), aU.resize(), aP.resize(), u.resize(), 1 <= aE.a1O ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(), aO.resize(),
			aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aAR()) : (ab.aHn(), ab.aHo()), bi.dq = !0)
	}

	function aXl(fu) {
		return fu && 128 < fu ? Math.floor(fu) : 128
	}

	function aXm(aXo) {
		var j, k, aXq, ti, a9p;
		if (!(0 < i.tH)) return ti = aXl(document.documentElement.clientWidth), a9p = aXl(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = ti, k = a9p, aXq = 0 !== a1.id || j < k ?
			700 : 1200, aXq = Math.min(aXq / ((j + k) / 2), 1), aXq = 0 === bm.eW.data[1].value ? 2 * aXq / 3 : Math.min(aXq + (bm.eW.data[1].value - 1) * (1 - aXq) / 2, 1), i.l = (window.devicePixelRatio || 1) * aXq, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aXo && !aXh ? (aXh = !0, u.removeChild(document.body, a2t)) : aXh && (aXh = !1, document.body.appendChild(a2t)), j = Math.floor(.5 + ti * i.l), k = Math.floor(.5 + a9p * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aCu(j, k), i.max = a7f(j, k), i.ic = bO.ft(j + k, 2), i.vt = j / k, a2t.width = j, a2t.height = k, a2t.style.width = ti + "px", a2t.style.height = a9p + "px", aXj = bi.eZ + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.ic = 0, this.vt = 1, this.l = 1, this.tH = 0, this.dj = function() {
		this.j = aXl(document.documentElement.clientWidth) + 2, this.k = aXl(document.documentElement.clientHeight) + 2
	}, this.di = function() {
		ej = 1, a2t = document.getElementById("canvasA"), 2 === a1.id && (a2t.style.webkitUserSelect = "none"), (vx = a2t.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aXm(0)
	}, this.ee = function() {
		50 <= ++ej && resize(0), -1 === aXj || bi.eZ < aXj || (aXj = -1, 2e3 * ++aXk >= bi.eZ + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dt = function(k2) {
		bx = !0, resize(k2)
	}, this.a3Y = function() {
		aXi + 1e3 > bi.eZ || (aXi = bi.eZ, resize(0))
	}
}

function dM() {
	this.aVt = new aXs, this.a2E = new aXt, this.aW9 = new aXu
}

function aXu() {
	var aXv = aXw(),
		aXx = aXy(),
		aXz = aY0();
	this.qT = function() {
		return 123
	}, this.a0q = function() {
		bJ.te.xb(bm.eW.data[183].value, 15), bG.a9(14, aXv), bG.a9(7, aXx), bG.a9(12, aXz)
	}
}

function aXw() {
	for (var ej = document.createElement("canvas"), ej = (ej.width = 24, ej.height = 24, ej.getContext("2d", {
			alpha: !1
		})), fV = (ej.fillStyle = "rgb(0,0,0)", ej.fillRect(0, 0, 24, 24), ej.font = "22px system-ui", ej.textBaseline = "middle", ej.textAlign = "center", ej.fillStyle = "rgb(255,255,255)", ej.fillText("Q", 12, 12), ej.getImageData(0, 0, 24, 24)
			.data), fS = fV.length, li = 0, aC = 0; aC < fS; aC += 4) li += fV[aC];
	return 16383 & li
}

function aXy() {
	var fV = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fV + .5) / 15))
}

function aY0() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aXt() {
	this.a2F = function() {
		for (var h0, fS = am.lJ, a1C = am.lO, a1z = ah.a1z, a9d = this.aJH(), aC = 0; aC < fS; aC++) h0 = a1C[aC], bD.go.kA(h0) || (a1z[h0] = a9d);
		var qk = ah.qk,
			jq = ah.jq,
			jr = ah.jr,
			a1x = ah.a1x,
			fS = aE.kn;
		for (aC = 0; aC < fS; aC++)(0 === a1x[aC] || jr[aC] < 1 || 2 * qk[aC] > 3 * (jq[aC] + jr[aC])) && (a1z[aC] = 0);
		var a2C = 0;
		for (aC = 0; aC < fS; aC++) a2C += 0 < a1z[aC];
		return a2C
	}, this.aJH = function() {
		return Math.min(65535, bi.kk())
	}
}

function aXs() {
	function aY4(h, fu, iK) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (fu >> (aC + iK) % 30 & 1)) % 256
	}
	this.ee = function(aY1, aY2) {
		var h = new Uint8Array(256);
		return function(h, aY1, aY2) {
				var aC, aY6 = 3 + (4 + aY1) % 32768,
					aY7 = 12 + aY2 % 32768,
					aY8 = 17 + ((aY1 & aY2) + (aY1 | aY2) + aY1) % 32768;
				for (aC = 0; aC < 256; aC++) aY6 = 1 + aY6 * aY7 % aY8, h[aC] = aY6 % 256
			}(h, aY1, aY2), aY4(h, aY1, 2), aY4(h, aY2, 7),
			function(h) {
				var aC, fu, eH = 0;
				for (aC = 0; aC < 3e4; aC++) fu = h[eH], h[eH] = (fu + aC + h[(eH + aC) % 256]) % 256, eH = (fu + aC + eH + (fu & eH)) % 256
			}(h),
			function(h) {
				var aC, a9p = 1,
					uR = 1;
				for (aC = 0; aC < 256; aC += 2) a9p = (1 + a9p) * (h[aC] + 1) % 1073741824, uR = (1 + uR) * (h[aC + 1] + 1) % 1073741824;
				return [a9p, uR]
			}(h)
	}, this.aVu = function(aY9, aYA, aYB, result) {
		for (var gv = 1 << aY9, aC = 0; aC < gv; aC++)
			if (this.aYC(aC, aYA, aYB) === result) return aC;
		return 0
	}, this.aYC = function(aYD, aYA, aYB) {
		for (var yi = aYA + aYD, yr = aYB + aYD, fu = yi + yr & 2147483647, fl = 1; fl <= 16; fl++) fu = (fu = (fu ^ fu >> fl) >>> 1 + (3 & yi)) * (7 + (1023 & (yi | yr))) & 1073741823, yr >>= 1 + (1 & (yi >>= 1 + (1 & (fu += 65535 & yr))));
		return fu &= 1073741823
	}
}

function cp() {
	var aYE, aYF, ii, aYG;
	this.di = function() {
		var aC, fZ, fb, aS0, aYH, j, k, zX, iR, xx, fu, h0, fi, fl, aYK;
		if (function() {
				if (ii = !0, aYG = "rgb(" + bV.xv[0] + "," + bV.xv[1] + "," + bV.xv[2] + ")", bV.aN1(bV.f8)) return 1;
				return ii = !1, 0
			}()) aYF = null;
		else {
			for (aYE = bO.ft(96, 4), aYH = 1 === bV.f8 ? (aS0 = 0, 160) : (aS0 = 128, 32), aYG = "rgb(" + aS0 + "," + aS0 + "," + aS0 + ")", aYF = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aYF[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fd : aYE, k = aC % 2 == 0 ? aYE : bV.fe + 2 * aYE, aYF[aC].width = j, aYF[aC].height = k, xx = (iR = (zX = aYF[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fb = aYE - 1; 0 <= fb; fb--)
						for (fu = aYH + Math.floor((fb + 1) * (aS0 - aYH) / (aYE + 1)), fZ = j - 1; 0 <= fZ; fZ--) xx[h0 = 4 * ((0 === aC ? aYE - fb - 1 : fb) * j + fZ)] = fu, xx[h0 + 1] = fu, xx[h0 + 2] = fu, xx[h0 + 3] = 255;
				else {
					for (fZ = aYE - 1; 0 <= fZ; fZ--)
						for (fu = aYH + Math.floor((fZ + 1) * (aS0 - aYH) / (aYE + 1)), fb = k - 1 - aYE; aYE <= fb; fb--) xx[h0 = 4 * (fb * j + (3 === aC ? aYE - fZ - 1 : fZ))] = fu, xx[h0 + 1] = fu, xx[h0 + 2] = fu, xx[h0 + 3] = 255;
					for (fl = 1; 0 <= fl; fl--)
						for (fZ = aYE - 1; 0 <= fZ; fZ--)
							for (fb = aYE - 1; 0 <= fb; fb--) fi = (Math.pow(fZ * fZ + fb * fb, .5) + 1) / (aYE + 1), fu = aYH + Math.floor((1 < fi ? 1 : fi) * (aS0 - aYH)), xx[h0 = 4 * ((0 === fl ? aYE - fb - 1 : fb + fl * (k - aYE)) * j + (
								1 === aC ? fZ : aYE - fZ - 1))] = fu, xx[h0 + 1] = fu, xx[h0 + 2] = fu, xx[h0 + 3] = 255
				}
				zX.putImageData(iR, 0, 0)
			}
			aYK = aYH, bV.xq.fillStyle = "rgb(" + aYK + "," + aYK + "," + aYK + ")", bV.xq.fillRect(0, 0, bV.fd, 1), bV.xq.fillRect(0, bV.fe - 1, bV.fd, 1), bV.xq.fillRect(0, 0, 1, bV.fe), bV.xq.fillRect(bV.fd - 1, 0, 1, bV.fe)
		}
	}, this.zR = function() {
		var fl = ii ? 0 : -aYE;
		aOm(fl, fl, bV.fd - 2 * fl, bV.fe - 2 * fl, bd.aYL, bd.aYM, bd.aYN, bd.aYO) || (vx.fillStyle = aYG, vx.fillRect(0, 0, i.j, i.k))
	}, this.vw = function() {
		ii || (aOl(0, -aYE, bV.fd, aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vx.drawImage(aYF[0], bd.aYP, bd.aYQ - aYE), aOl(bV.fd, -aYE, aYE, bV.fe + 2 * aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vx.drawImage(aYF[1], bd.aYP + bV.fd, bd.aYQ - aYE),
			aOl(0, bV.fe, bV.fd, aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vx.drawImage(aYF[2], bd.aYP, bd.aYQ + bV.fe), aOl(-aYE, -aYE, aYE, bV.fe + 2 * aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vx.drawImage(aYF[3], bd.aYP - aYE, bd.aYQ - aYE))
	}
}

function dB() {
	this.aJF = new aYR, this.zU = new aYS, this.z = new aYT, this.jF = new aYU, this.aYK = new aYV, this.mi = new aYW, this.kb = new aYX, this.la = new aYY, this.aYZ = new aYa, this.aYb = new aYc, this.mt = new aYd, this.i2 = new aYe, this.m9 =
		new aYf, this.lc = new aYg, this.i5 = new aYh, this.mm = new aYi, this.qs = new aYj, this.di = function() {
			this.m9.di(), this.zU.di(), this.z.di(), this.jF.di(), this.aYK.di(), this.aYb.di(), this.mm.di()
		}, this.vw = function() {
			this.aYb.vw(), this.zU.vw()
		}
}

function aYX() {
	this.ee = function(player) {
		return !!bQ.mt.mu(player) && !(bQ.z.kr[player] >= Math.max(3 * ap.performance.m1, aF.l1[aF.iB[player]]) || !bD.go.mv(player, aF.kz[aF.iB[player]], 32, 0)) && (aX.aCh() ? function(player) {
			var aYm = bQ.lc.aCk(),
				fS = aYm.length;
			if (0 === fS) return !1;
			aYm = aYm[az.k4(fS)], fS = bQ.z.mg[aYm];
			if (bQ.mm.mn(player, fS)) return !1;
			return !! function(player, mp) {
				var mp = bP.jD(bQ.z.ms[mp]),
					hh = bP.fa(mp),
					mp = bP.fc(mp),
					no = ah.jL[player],
					np = ah.jN[player],
					o1 = ah.jM[player],
					player = ah.jO[player],
					o1 = Math.max(hh - o1, no - hh),
					no = Math.max(mp - player, np - mp);
				return o1 < 100 && no < 100
			}(player, aYm) && !!bQ.i5.qr(player, fS, 1) && (bD.go.mx(player), bQ.z.my(player), !0)
		}(player) : !!(ap.je.ee(player) || ap.jT.ee(player) || ap.jV.ee(player)) && (function(player) {
			bR.g4[1] = 4, bD.go.mx(player), bQ.z.my(player)
		}(player), !0))
	}
}

function aYi() {
	var aYp = 0,
		aYq = null;
	this.di = function() {
		null === aYq && (aYq = new Uint16Array(2 * bQ.z.l1)), aYp = 0
	}, this.ei = function(aYr, mm) {
		var aYs = aYq;
		aYs[aYp++] = aYr, aYs[aYp++] = mm
	}, this.mn = function(player, ml) {
		for (var aYs = aYq, fS = aYp, aC = 0; aC < fS; aC += 2)
			if (aYs[aC] === ml && bQ.lc.aYt(aYs[aC + 1]) && player === bQ.z.mh[bR.g4[2]] >> 3) return !0;
		return !1
	}, this.aYu = function(aYv) {
		var mi = bQ.z.me[aYv];
		if (!(mi < 64)) {
			for (var ml = bQ.z.mg[aYv], aYs = aYq, fS = aYp, aC = fS - 2; 0 <= aC; aC -= 2)
				if (aYs[aC] === ml) {
					{
						aZ0 = void 0;
						var aZ0 = aYs[aC + 1];
						bQ.lc.aYt(aZ0) && bQ.mm.aZ8(bR.g4[2])
					}
					aYs[aC] = aYs[fS - 2], aYs[aC + 1] = aYs[fS - 1], fS -= 2
				} aYp = fS
		}
	}, this.aYx = function(aYy, aYz) {
		for (var aZ0 = bQ.z.mg[aYy], ml = -1, aYs = aYq, fS = aYp, aC = 1; aC < fS; aC += 2)
			if (aYs[aC] === aZ0) {
				ml = aYs[aC - 1];
				break
			} if (-1 === ml) return !1;
		if (!bQ.lc.aYt(ml)) return !1;
		var aYv = bR.g4[2],
			m8 = bQ.z.mf[aYv];
		if (aYz === m8[m8.length - 1]) bQ.z.mf[aYy] = bQ.m9.aZ1(bQ.z.mf[aYy], bQ.m9.mH(m8));
		else {
			var aZ2 = bQ.lc.aZ3(m8, aYz);
			if (-1 === aZ2) return !1;
			var aZ4 = bQ.z.mr[aYv];
			aZ2 === aZ4 ? (aYv = bP.jD(bQ.z.ms[aYv]), bQ.z.mf[aYy] = bQ.m9.aZ6(bQ.z.mf[aYy], m8, aZ2, aYz, bP.iv(m8[aZ2], aYz) > bP.iv(m8[aZ2], aYv))) : bQ.z.mf[aYy] = bQ.m9.aZ6(bQ.z.mf[aYy], m8, aZ2, aYz, aZ4 < aZ2)
		}
		return !0
	}, this.aZ8 = function(aZ9) {
		var m8, li = bQ.z,
			mi = li.me[aZ9];
		return mi % 64 != 5 && (m8 = li.mf[aZ9], li.aZA[aZ9] = 65535 - li.aZA[aZ9], li.mr[aZ9] = m8.length - li.mr[aZ9] - 2, li.mf[aZ9] = bQ.m9.mH(m8), li.me[aZ9] = mi - mi % 64 + 5, !0)
	}
}

function aYd() {
	this.mu = function(player) {
		return !!aE.data.passableWater && bQ.z.md !== bQ.z.l1 && bQ.z.kr[player] !== bQ.z.aZB && 0 !== ah.h9[player].length
	}, this.qn = function(aWh) {
		var mi = bR.g4[1];
		return !(4 <= mi || !bQ.lc.aZC(bP.fI(aWh))) && ad.fN(bP.fI(bP.jH(aWh, mi)))
	}
}

function aYR() {
	this.aJG = function(player) {
		for (var a93 = bQ.z.a93, tw = player << 3, aC = tw + bQ.z.kr[player] - 1; tw <= aC; aC--) this.aZD(a93[aC])
	}, this.aZD = function(aZE) {
		var z = bQ.z,
			aZF = z.md - 1,
			aZG = z.mh[aZE],
			aZH = z.aZI[aZE],
			aZJ = z.ms[aZE];
		z.md = aZF, z.mh[aZE] = z.mh[aZF], z.ms[aZE] = z.ms[aZF], z.aZA[aZE] = z.aZA[aZF], z.a7w[aZE] = z.a7w[aZF], z.aZI[aZE] = z.aZI[aZF], z.mg[aZE] = z.mg[aZF], z.me[aZE] = z.me[aZF], z.aZK[aZE] = z.aZK[aZF], z.mf[aZE] = z.mf[aZF], z.mr[aZE] =
			z.mr[aZF], z.a93[z.mh[aZE]] = aZE,
			function(aWg) {
				var player = aWg >> 3,
					z = bQ.z,
					fS = z.kr[player] - 1,
					aZN = (player << 3) + fS;
				z.kr[player] = fS, aZN !== aWg && (z.a93[aWg] = z.a93[aZN], z.mh[z.a93[aWg]] = aWg)
			}(aZG), bQ.jF.jF[bP.jE(z.ms[aZE])][z.aZI[aZE]] = aZE, aZF = bP.jE(aZJ), aZG = aZH, aZF = bQ.jF.jF[aZF], z = aZF.pop(), aZG !== aZF.length && (aZF[aZG] = z, bQ.z.aZI[z] = aZG)
	}
}

function aYS() {
	var aZP, aZQ = 8,
		aZR = null;

	function aZW(xx, fE, eH) {
		fE *= 4;
		xx[fE] = 255, xx[1 + fE] = 255, xx[2 + fE] = eH, xx[3 + fE] = 255
	}

	function aZY(iU, aYG) {
		var fZ, fb, ip, fE, aZZ, aZa, iO = aZQ,
			iR = bD.rL.getImageData(iU, iO, iO),
			xx = iR.data,
			li = (iO >> 1) - .5,
			aZc = bD.rT.a3m(aYG, .5);
		for (bD.rT.a3o(aYG, aZc, 300) || bD.rT.a3q(aYG, 100), fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) aZa = (iO - 1.5) * (iO - 1.5) / 4, xx[fE = 4 * (fb * iO + fZ)] = (aZZ = (ip = (ip = fZ - li) * ip + (ip = fb - li) * ip) <= (iO - 4.5) * (iO - 4.5) / 4 ? aZc : aYG)[0], xx[1 + fE] = aZZ[1], xx[2 + fE] = aZZ[2],
				xx[3 + fE] = aZa < ip ? 0 : 255;
		iU.putImageData(iR, 0, 0)
	}
	this.di = function() {
		var eH, iO, a4E, iU, iR, xx;
		(aZP = aZP || new Array(aE.fP)).fill(null), eH = 255, iO = aZQ + 4, a4E = bD.rL.xm(iO, iO), iU = bD.rL.getContext(a4E, !0), iR = bD.rL.getImageData(iU, iO, iO), aZW(xx = iR.data, iO + 1, eH), aZW(xx, iO + 2, eH), aZW(xx, 2 * iO + 1, eH),
			aZW(xx, 2 * iO - 3, eH), aZW(xx, 2 * iO - 2, eH), aZW(xx, 3 * iO - 2, eH), aZW(xx, iO * (iO - 3) + 1, eH), aZW(xx, iO * (iO - 2) + 1, eH), aZW(xx, iO * (iO - 2) + 2, eH), aZW(xx, iO * (iO - 2) - 2, eH), aZW(xx, iO * (iO - 1) - 3, eH),
			aZW(xx, iO * (iO - 1) - 2, eH), iU.putImageData(iR, 0, 0), aZR = a4E,
			function() {
				if (aE.iM)
					for (var a4E = new Array(bj.lA.length), fS = aE.fP, aZU = aZP, aC2 = bj.aC2, aC = 0; aC < fS; aC++) {
						var a6g = aC2[aC];
						a4E[a6g] || (a4E[a6g] = function(a6g) {
							var a4E = bD.rL.xm(aZQ, aZQ),
								iU = bD.rL.getContext(a4E, !0),
								h = bR.g1;
							return h.set(bj.aS1[a6g]), aZY(iU, h), a4E
						}(a6g)), aZU[aC] = a4E[a6g]
					}
			}()
	}, this.vw = function() {
		var aC, player, aZd, aOu, iB, io, aZf, aZh, aZi, ms = bQ.z.ms,
			mh = bQ.z.mh,
			a7w = bQ.z.a7w,
			aZK = bQ.z.aZK,
			aZj = aZP,
			aZk = aE.fC,
			fS = bQ.z.md,
			aZl = i.j,
			aZm = i.k,
			aZn = bV.fd << 4,
			fH = ie,
			f6 = fH / aZQ,
			no = j6 / fH,
			np = j7 / fH,
			ip = (aZl + j6) / fH - no,
			is = (aZm + j7) / fH - np,
			iU = vx;
		for (iU.imageSmoothingEnabled = fH < 9, bD.rL.textAlign(iU, 1), bD.rL.textBaseline(iU, 1), aC = 0; aC < fS; aC++) player = mh[aC] >> 3, iB = a7w[aC], aZd = .9 + .1 * Math.log10(iB), aOu = (io = ms[aC]) % aZn / 16 - aZd, io = aZm * (Math
			.floor(io / aZn) / 16 - aZd - np) / is, aZf = -2 * (aZi = fH * aZd) * (1 + (aZh = +(player === aZk)) / 8), aZh = aZh * aZi / 4, (aZi = aZl * (aOu - no) / ip) < aZf || io < aZf || aZl + aZh < aZi || aZm + aZh < io || (aOu = 2 *
			aZd * f6, aZf = aZd * fH, null === (aZh = aZj[player]) && (aZj[player] = aZh = function(player) {
				var a4E = bD.rL.xm(aZQ, aZQ);
				return aZY(bD.rL.getContext(a4E, !0), ad.a8e(player)), a4E
			}(player)), player === aZk && (iU.setTransform(aOu, 0, 0, aOu, aZi - 2 * aOu, io - 2 * aOu), iU.drawImage(aZR, 0, 0)), iU.setTransform(aOu, 0, 0, aOu, aZi, io), iU.drawImage(aZh, 0, 0), (aZd = Math.floor(function(iB) {
				if (iB < 1e3) return .42;
				if (iB < 1e4) return .34;
				if (iB < 1e6) return .26;
				if (iB < 1e8) return .19;
				return .15
			}(iB) * aZf)) < 6) || (iU.setTransform(1, 0, 0, 1, 0, 0), iU.fillStyle = aZK[aC] ? bE.ox : bE.oO, iU.font = bD.rL.t9(1, aZd), iU.fillText(bD.sK.a0f(iB), aZi + aZf, io + aZf + .1 * aZd));
		iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aYc() {
	var aZq;
	this.di = function() {
		if (!aZq) {
			aZq = new Array(bj.aZs.length);
			for (var aC = 0; aC < aZq.length; aC++) aZq[aC] = bS.z.aZt(20, bj.aZs[aC])
		}
	}, this.vw = function() {
		var o8 = ie;
		if (!(5 <= o8)) {
			var aZl = i.j,
				aZm = i.k,
				no = j6 / o8,
				np = j7 / o8,
				o1 = (aZl + j6) / o8,
				o2 = (aZm + j7) / o8,
				h1 = -20 * o8,
				aZu = .5 * h1,
				aZn = bV.fd << 4,
				fS = bQ.z.md,
				ms = bQ.z.ms,
				mh = bQ.z.mh,
				aC2 = bj.aC2,
				a4E = aZq,
				iU = vx;
			3 < o8 && (iU.globalAlpha = .5 * (5 - o8));
			for (var aC = 0; aC < fS; aC++) {
				var io = ms[aC],
					fZ = aZl * (io % aZn / 16 - no) / (o1 - no) + aZu,
					io = aZm * (Math.floor(io / aZn) / 16 - np) / (o2 - np) + aZu;
				aZl < fZ || aZm < io || fZ < h1 || io < h1 || (iU.setTransform(o8, 0, 0, o8, fZ, io), fZ = a4E[aC2[mh[aC] >> 3]], iU.drawImage(fZ, 0, 0))
			}
			iU.globalAlpha = 1, iU.setTransform(o8, 0, 0, o8, 0, 0)
		}
	}
}

function aYg() {
	this.aZx = function(player, id) {
		for (var aZy = ah.h9[player], fS = aZy.length, aC = 0; aC < fS; aC++)
			if (bP.ig(aZy[aC], id)) return !0;
		return !1
	}, this.aZz = function(player, fE) {
		for (var ix, aa0, f6, aZy = ah.h9[player], fS = aZy.length, j = bV.fd, aa2 = bP.fa(fE), aa3 = bP.fc(fE), fY = -1, min = bV.fd * bV.fd + bV.fe * bV.fe, id = ad.fA(bP.fI(fE)), aC = 0; aC < fS; aC++)(aa0 = (aa0 = aa2 - (ix = (f6 = aZy[
			aC]) >> 2) % j) * aa0 + (aa0 = aa3 - ~~((.5 + ix) / j)) * aa0) < min && bP.ig(f6, id) && (min = aa0, fY = ix);
		return fY
	}, this.ld = function(iw, ix) {
		for (var id = ad.fA(bP.fI(ix)), ih = bP.iX, f6 = bP.fI(iw), aa4 = -1, aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			ad.ii(fH) && ad.fA(fH) === id && (-1 === aa4 || bP.iy(bP.fG(fH), ix) < bP.iy(aa4, ix)) && (aa4 = bP.fG(fH))
		}
		return aa4
	}, this.mC = function(player, fE) {
		for (var ih = bP.iX, f6 = bP.fI(fE), aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			if (ad.h2(fH) && ad.zP(player, fH)) return !0
		}
		return !1
	}, this.mD = function(player, fE) {
		for (var ih = bP.iX, f6 = bP.fI(fE), aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			if (ad.fJ(fH)) return !0;
			if (ad.h2(fH)) {
				fH = ad.fK(fH);
				if (player !== fH && bv.fL(player, fH)) return !0
			}
		}
		return !1
	}, this.mj = function(fE) {
		for (var ih = bP.iX, f6 = bP.fI(fE), aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			if (ad.h2(fH)) {
				fH = ad.fK(fH);
				if (bD.go.kA(fH)) return fH
			}
		}
		return -1
	}, this.aZC = function(f6) {
		if (ad.ii(f6))
			for (var ih = bP.iX, aC = 0; aC < 4; aC++)
				if (ad.fN(f6 + ih[aC])) return !0;
		return !1
	}, this.nn = function(player, id) {
		for (var tw = player << 3, tx = tw + bQ.z.kr[player], mg = bQ.z.mg, a93 = bQ.z.a93, aC = tw; aC < tx; aC++) {
			var a94 = a93[aC];
			if (mg[a94] === id) return a94
		}
		return -1
	}, this.ns = function(player) {
		return 0 === bQ.z.kr[player] ? -1 : bQ.z.a93[player << 3]
	}, this.a6y = function(m2, m3) {
		var fS = bQ.z.md;
		if (fS < 1) return -1;
		for (var ms = bQ.z.ms, aa5 = 80, aRV = -1, aC = 0; aC < fS; aC++) {
			var fi = bP.ik(m2, m3, ms[aC]);
			fi < aa5 && (aa5 = fi, aRV = aC)
		}
		return function(aC, m2, m3) {
			if (aC < 0) return;
			var aaC = bQ.z.ms[aC],
				aaD = bP.ir(aaC),
				aaC = bP.iu(aaC),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a7w[aC]));
			return aC = Math.max(aC, bP.j8(bD.rL.u1(.02, 1.7))), bO.aOt(bP.iq(m2), bP.it(m3), aaD, aaC, aC)
		}(aRV, m2, m3) ? aRV : -1
	}, this.aYt = function(nl) {
		for (var fS = bQ.z.md, mg = bQ.z.mg, aC = 0; aC < fS; aC++)
			if (mg[aC] === nl) return bR.g4[2] = aC, !0;
		return !1
	}, this.aJC = function(player) {
		for (var tw = player << 3, tx = tw + bQ.z.kr[player], a93 = bQ.z.a93, a7w = bQ.z.a7w, iB = 0, aC = tw; aC < tx; aC++) iB += a7w[a93[aC]];
		return iB
	}, this.aa7 = function(player, aZ9) {
		aZ9 = bQ.z.mf[aZ9];
		return this.mC(player, aZ9[aZ9.length - 1])
	}, this.aa8 = function(iw, ix, fi, aa9) {
		var j0 = bP.fa(iw),
			iw = bP.fc(iw),
			j2 = bP.fa(ix),
			ix = bP.fc(ix),
			j2 = (fi = Math.max(fi, 1), j2 - j0),
			ix = ix - iw,
			ip = bO.ft(Math.abs(j2) * aa9, fi),
			aa9 = bO.ft(Math.abs(ix) * aa9, fi);
		return bP.fp(j0 + Math.sign(j2) * ip, iw + Math.sign(ix) * aa9)
	}, this.aZ3 = function(m8, fE) {
		for (var fS = m8.length - 1, fZ = bP.fa(fE), fb = bP.fc(fE), aC = 0; aC < fS; aC++) {
			var iw = m8[aC],
				ix = m8[aC + 1],
				no = bP.fa(iw),
				iw = bP.fc(iw),
				o1 = bP.fa(ix),
				ix = bP.fc(ix);
			if (!(fZ !== no && fZ !== o1 && Math.sign(fZ - no) === Math.sign(fZ - o1) || fb !== iw && fb !== ix && Math.sign(fb - iw) === Math.sign(fb - ix))) {
				if (no === o1 || iw === ix) return aC;
				if (Math.abs(fZ - no) === Math.abs(fb - iw) && Math.abs(fZ - o1) === Math.abs(fb - ix)) return aC
			}
		}
		return -1
	}, this.aCk = function() {
		for (var aaF = mO[0], mh = bQ.z.mh, md = bQ.z.md, h = [], aC = 0; aC < md; aC++) bD.go.lR(aaF, mh[aC] >> 3) && h.push(aC);
		return h
	}, this.mA = function(player, m8) {
		for (var tw = player << 3, tx = tw + bQ.z.kr[player], a93 = bQ.z.a93, mf = bQ.z.mf, hu = m8[0], lQ = m8[m8.length - 1], aC = tw; aC < tx; aC++) {
			var h0 = mf[a93[aC]];
			if (h0[0] === hu && h0[h0.length - 1] === lQ) return !0
		}
		return !1
	}
}

function aYh() {
	function aaI(player, aZ9) {
		aZ9 = bP.jD(bQ.z.ms[aZ9]), aZ9 = ad.fA(bP.fI(aZ9));
		return !!bQ.lc.aZx(player, aZ9)
	}

	function aaG(player) {
		return bQ.mt.mu(player) && !bQ.m9.mF()
	}
	this.i6 = function(player, fE) {
		return !!aaG(player) && -1 !== (fE = function(player, fE) {
			for (var fS = bQ.z.md, ms = bQ.z.ms, mh = bQ.z.mh, aa5 = bP.iZ(), aRV = -1, aC = 0; aC < fS; aC++) {
				var fi = bP.iv(fE, bP.jD(ms[aC]));
				fi < aa5 && bD.go.lR(player, mh[aC] >> 3) && (aa5 = fi, aRV = aC)
			}
			return aRV
		}(player, fE)) && !!aaI(player, fE) && (bR.g4[3] = bQ.z.mg[fE], !0)
	}, this.py = function(player, nl) {
		return !!aaG(player) && !!bQ.lc.aYt(nl) && !!aaI(player, bR.g4[2])
	}, this.qr = function(player, nl, aaJ) {
		return !! function(player, nl, aaJ) {
			if (aaG(player) && bQ.lc.aYt(nl)) {
				nl = bR.g4[2];
				if (bD.go.lR(player, bQ.z.mh[nl] >> 3)) {
					if (function(player, aZ9) {
							return bQ.lc.aa7(player, aZ9) && (bR.h[0] = bQ.m9.mH(bQ.z.mf[aZ9]), bR.g4[1] = 6, !0)
						}(player, nl)) return 1;
					var aYo = bP.jD(bQ.z.ms[nl]),
						aaN = bQ.lc.aZz(player, aYo);
					if (-1 !== aaN) {
						aaN = bP.iv(aaN, aYo);
						if (!(aaJ && 120 < aaN)) {
							aaJ = function(aZ9, aaO, aYo) {
								var m8 = bQ.z.mf[aZ9],
									aZ9 = bQ.z.mr[aZ9],
									aaQ = bP.iv(aYo, m8[aZ9 + 1]);
								if (aaO <= aaQ) return bQ.lc.aa8(aYo, m8[aZ9 + 1], aaQ, aaO);
								for (var fi = aaO - aaQ, fS = m8.length - 1, aC = aZ9 + 1; aC < fS; aC++) {
									var aaR = bP.iv(m8[aC], m8[aC + 1]);
									if (fi <= aaR) return bQ.lc.aa8(m8[aC], m8[aC + 1], aaR, fi);
									fi -= aaR
								}
								return m8[fS]
							}(nl, aaN, aYo);
							if (bQ.la.qo(player, aaJ, 1)) return bR.g4[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nl, aaJ) && (player = bR.g4[2], bQ.z.me[player] = 64 + bQ.z.me[player] % 64, bQ.mm.ei(nl, bQ.z.mw), !0)
	}
}

function aYW() {
	function aaW(player, iB, aaU, aYo) {
		var jw;
		if (ad.fJ(aaU)) jw = aE.fP;
		else {
			if ((jw = ad.fK(aaU)) === player) return void bg.gs(player, iB - bD.go.gr(player, iB), 12);
			if (!bv.fL(player, jw)) return void bB.kp.qD(player, jw, iB)
		}
		ae.k8(player, jw) || ae.kR(player) ? (ah.gu[player].push(aYo << 2), ae.ei(player, iB, jw), aG.ju(player, !0)) : bg.gs(player, iB, 12)
	}
	this.ee = function() {
		for (var me = bQ.z.me, ms = bQ.z.ms, aZA = bQ.z.aZA, aC = bQ.z.md - 1; 0 <= aC; aC--) 65535 === aZA[aC] && function(aC, aYo, iJ) {
			if (6 === iJ) {
				if (bQ.mm.aYx(aC, aYo)) return bQ.z.mr[aC]++, bQ.z.aZA[aC] = 0, 0
			} else {
				var player = bQ.z.mh[aC] >> 3,
					aC = bQ.z.a7w[aC];
				bg.aaV(player), iJ < 4 ? aaW(player, aC, aYo + bP.iW[iJ] << 2, aYo) : 4 === iJ ? function(player, iB, aYo) {
					var aC, fW, ih = bP.iX,
						fH = bP.fI(aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.fJ(fW)) return aaW(player, iB, fW, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW) && !ad.zP(player, fW)) return aaW(player, iB, fW, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW)) return aaW(player, iB, fW, aYo)
				}(player, aC, aYo) : 5 === iJ && function(player, iB, aYo) {
					var aC, fW, ih = bP.iX,
						fH = bP.fI(aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW) && ad.zP(player, fW)) return aaW(player, iB, fW, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW)) return aaW(player, iB, fW, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.fJ(fW)) return aaW(player, iB, fW, aYo)
				}(player, aC, aYo)
			}
			return 1
		}(aC, bP.jD(ms[aC]), me[aC] % 64) && (bQ.mm.aYu(aC), bQ.aJF.aZD(aC))
	}, this.aaT = function(player, fE, iJ, nl, iB) {
		if (!(5 <= iJ)) {
			var aZk = aE.fC;
			if (bD.go.he(aZk) && bv.fL(player, aZk) && player !== aZk && 0 !== ah.h9[aZk].length && bD.go.a4p(player, 5)) {
				for (var aaU, fg = !1, aC = 0; aC < 4; aC++)
					if (aaU = fE + bP.iW[aC] << 2, ad.fN(aaU) && !ad.fJ(aaU) && ad.fK(aaU) === aZk) {
						fg = !0;
						break
					} fg && (aO.a85(719, 0), iJ = iB < 25e3 ? L(498) + " (" + bD.sK.a0f(iB) + ") ⛵" : L(499) + " (" + bD.sK.a0f(iB) + ") 🚢", aO.zq(180, iJ, 719, player, bE.ow, bE.oL, -1, !0, void 0, {
					fm: 1,
					nl: nl
				}))
			}
		}
	}
}

function aYT() {
	this.l1 = 512, this.aZB = 8, this.md = 0, this.mw = 0, this.mh = new Uint16Array(this.l1), this.ms = new Uint32Array(this.l1), this.aZA = new Uint16Array(this.l1), this.a7w = new Uint32Array(this.l1), this.aZI = new Uint16Array(this.l1), this
		.mg = new Uint16Array(this.l1), this.me = new Uint8Array(this.l1), this.aZK = new Uint8Array(this.l1), this.mf = new Array(this.l1), this.mr = new Uint16Array(this.l1), this.kr = new Uint8Array(aE.fP), this.a93 = new Uint16Array(this.aZB * aE
			.fP), this.di = function() {
			this.md = 0, this.mw = 0, this.kr.fill(0), this.mf.fill(null)
		}, this.my = function(player) {
			var iB = bR.fz[0],
				mi = bR.g4[1],
				m8 = bR.h[0],
				aaZ = this.mw,
				fS = this.md,
				aaa = bP.jC(m8[0]),
				aab = this.kr[player],
				aac = (player << 3) + aab;
			this.mh[fS] = aac, this.ms[fS] = aaa, this.aZA[fS] = 0, iB < 60 && (bD.go.gp(player, 60 - iB), iB = 60), this.a7w[fS] = iB, this.aZI[fS] = bQ.jF.my(fS, bP.jE(aaa)), this.mg[fS] = aaZ, this.me[fS] = mi, this.aZK[fS] = 0, this.mf[fS] = m8,
				this.mr[fS] = 0, this.mw = (aaZ + 1) % 65536, this.kr[player] = aab + 1, this.a93[aac] = fS, this.md++, bQ.mi.aaT(player, m8[m8.length - 1], mi, aaZ, iB)
		}, this.ee = function() {
			bQ.mi.ee();
			for (var h0 = aE.fC, ea = bQ.lc.aJC(h0), su = (! function(su) {
					for (var aah, ms = su.ms, a7w = su.a7w, aZK = su.aZK, aZA = su.aZA, aZI = su.aZI, mf = su.mf, mr = su.mr, su = su.md, aZn = bV.fd << 4, aC = su - 1; 0 <= aC; aC--) {
						var aai = ms[aC],
							m8 = mf[aC],
							aaj = mr[aC],
							aaa = bP.jC(m8[aaj]),
							aak = bP.jC(m8[aaj + 1]),
							aal = aaa % aZn,
							aaa = ~~((aaa + .5) / aZn),
							aan = aak % aZn,
							aao = ~~((aak + .5) / aZn),
							aap = aan - aal,
							aaq = aao - aaa,
							fV = Math.max(~~Math.sqrt(aap * aap + aaq * aaq + .5), 1),
							aK9 = a7w[aC],
							aK9 = (aK9 = aZK[aC] ? 4e4 : 25e4 + Math.min(20 * aK9, 3e5) + Math.min(aK9 >> 3, 5e4), aZA[aC] + Math.max(~~((aK9 + .5) / fV), 1));
						65535 <= aK9 ? aaj + 2 < m8.length ? (mr[aC] = aaj + 1, ms[aC] = aah = function(aC, aar, aal, aam, aaj, fV, m8, aZn) {
							aar = Math.min(aar - 65535, 65535);
							var m8 = bP.jC(m8[aaj + 2]),
								aaj = m8 % aZn - aal,
								m8 = ~~((m8 + .5) / aZn) - aam,
								aau = Math.max(~~Math.sqrt(aaj * aaj + m8 * m8 + .5), 1);
							return aar = Math.min(Math.floor((fV * aar + .5) / aau), 65534), bQ.z.aZA[aC] = aar, aal + bO.ft(aar * aaj, 65535) + aZn * (aam + bO.ft(aar * m8, 65535))
						}(aC, aK9, aan, aao, aaj, fV, m8, aZn)) : (ms[aC] = aah = aak, aZA[aC] = 65535) : (aZA[aC] = aK9, ms[aC] = aah = aal + bO.ft(aK9 * aap, 65535) + aZn * (aaa + bO.ft(aK9 * aaq, 65535))), aZI[aC] = bQ.jF.aat(aZI[aC],
							aai, aah)
					}
				}(this), ! function(su) {
					if (bi.kk() % 2 == 1) {
						var aC, iK, li, fm, ej, aav, a0J, aaw, hu, no, np, aaa, aax, aAW, aaz, lQ, fS = su.md,
							ms = su.ms,
							mh = su.mh,
							a7w = su.a7w,
							aZK = su.aZK,
							jF = bQ.jF.jF,
							ab1 = jF.length,
							ab2 = bQ.jF.ab2,
							aZn = bV.fd << 4,
							ab3 = aE.iM,
							aWV = bj.fQ,
							h1 = (fS - 1) * (bO.ft(bi.kk(), 2) % 2);
						for (aC = 0; aC < fS; aC++)
							for (iK = Math.abs(aC - h1), aaa = ms[iK], li = bP.jE(aaa), hu = mh[iK] >> 3, no = aaa % aZn, np = ~~((aaa + .5) / aZn), aaz = a7w[iK], fm = 0; fm < 9; fm++)
								if (!((aav = li + ab2[fm]) < 0 || ab1 <= aav))
									for (aaw = jF[aav], a0J = aaw.length, ej = 0; ej < a0J; ej++) aax = aaw[ej], lQ = mh[aax] >> 3, hu == lQ || ab3 && aWV[hu] === aWV[lQ] && aWV[hu] || (lQ = ms[aax], (aAW = no - lQ % aZn) * aAW + (aAW = np -
										~~((lQ + .5) / aZn)) * aAW < 14400 && (lQ = a7w[aax], aAW = lQ <= aaz ? Math.max(1, bO.ft(lQ + bO.ft(aaz - lQ, 10), 10)) : Math.max(1, bO.ft(aaz, 10)), a7w[aax] = Math.max(lQ - aAW, 0), aZK[
										aax] = 4))
					}
				}(this), ! function(su) {
					if (bi.kk() % 5 == 3)
						for (var a7w = su.a7w, fS = su.md, aC = 0; aC < fS; aC++) {
							var iB = a7w[aC];
							a7w[aC] = Math.max(iB - Math.max(1, iB >> 7), 0)
						}
				}(this), this), a7w = su.a7w, aZK = su.aZK, aC = su.md - 1; 0 <= aC; aC--) aZK[aC] = aZK[aC] >> 1, 0 === a7w[aC] && (bQ.mm.aYu(aC), bQ.aJF.aZD(aC));
			bg.gs(h0, ea - bQ.lc.aJC(h0), 15)
		}
}

function aYU() {
	this.ab4 = 32, this.fZ = 0, this.fb = 0, this.jG = 0, this.ab5 = 0, this.ab6 = 4, this.jF = null, this.ab2 = new Int16Array(9), this.di = function() {
		this.jG = 1 + bO.ft(bV.fd - 1, this.ab4), this.ab5 = 1 + bO.ft(bV.fe - 1, this.ab4), this.jF = new Array(this.jG * this.ab5), bD.rT.a3l(this.jF);
		var fZ, fb, ab2 = this.ab2,
			j = this.jG;
		for (fZ = -1; fZ <= 1; fZ++)
			for (fb = -1; fb <= 1; fb++) ab2[3 * (1 + fb) + 1 + fZ] = fb * j + fZ
	}, this.my = function(ab8, aC) {
		return this.jF[aC].push(ab8), this.jF[aC].length - 1
	}, this.aat = function(ab9, aaa, aak) {
		var abA, abB, aaa = bP.jE(aaa),
			aak = bP.jE(aak);
		return aaa === aak ? ab9 : (abA = this.jF[aaa].pop(), this.jF[aaa].length === ab9 ? this.my(abA, aak) : (abB = this.jF[aaa][ab9], this.jF[aaa][ab9] = abA, bQ.z.aZI[abA] = ab9, this.my(abB, aak)))
	}
}

function aYY() {
	this.lb = function(player, abC) {
		return -1 !== abC && !!bQ.lc.mD(player, abC) && this.qo(player, abC, 0)
	}, this.qo = function(player, abC, abD) {
		player = function(player, abC, abD) {
			var aaN = bQ.lc.aZz(player, abC);
			if (-1 === aaN) return -1;
			aaN = bQ.lc.ld(aaN, abC);
			if (-1 === aaN) return -1;
			var m6 = bQ.m9.mE(aaN, abC);
			if (0 <= m6) return m6;
			if (bQ.m9.mF()) return -1;
			if (0 <= (m6 = bQ.m9.mE(abC, aaN))) return bQ.m9.mG(bQ.m9.mH(bQ.m9.get(m6)));
			if (aaN === abC) return bQ.m9.mG(new Uint32Array([aaN, abC]));
			if (0 <= (m6 = bQ.aYZ.qo(aaN, abC))) return m6;
			return abD ? function(abH, player) {
				var g9 = bR.g9,
					eW = (g9.fill(0), [abH]),
					iY = (g9[abH] = 1, bP.iY),
					abI = -1,
					fS = eW.length;
				for (; - 1 === abI && fS;) {
					for (var h = [], aC = 0; aC < fS; aC++)
						for (var fE = eW[aC], a5Z = g9[fE], fV = 0; fV < 8; fV++) {
							var xW, a29, fY = fE + iY[fV],
								f6 = 4 * fY;
							ad.ii(f6) ? (xW = g9[fY], a29 = a5Z + 5 + ((1 & fV) << 1), 0 === xW ? (h.push(fY), g9[fY] = a29) : g9[fY] = Math.min(a29, xW)) : -1 === abI && fV % 2 == 0 && ad.zM(player, f6) && (abI = fE)
						}
					fS = (eW = h).length
				}
				return -1 !== abI ? function(iw, abK) {
					var iY = bP.iY,
						abL = -1,
						iJ = 0,
						nJ = [];
					for (; abK !== iw;)(iJ = function(fE, iJ) {
						var g9 = bR.g9,
							iY = bP.iY,
							a5Z = g9[fE];
						if (a5Z - g9[fE + iY[iJ]] != 5 + ((1 & iJ) << 1))
							for (var fl = 0; fl < 8; fl++) {
								var fV = fl + iJ + 6 & 7;
								if (a5Z - g9[fE + iY[fV]] == 5 + ((1 & fV) << 1)) return fV
							}
						return iJ
					}(abK, iJ)) !== abL && (nJ.push(abK), abL = iJ), abK += iY[iJ];
					nJ.push(iw);
					var m6 = bQ.m9.mE(nJ[0], iw);
					if (0 <= m6) return m6;
					return bQ.m9.mG(new Uint32Array(nJ))
				}(abH, abI) : -1
			}(abC, player) : -1
		}(player, abC, abD);
		return -1 !== player && (bR.h[0] = bQ.m9.get(player), !0)
	}
}

function aYa() {
	function abN(hh, j1, j3) {
		for (var k3 = Math.min(j1, j3), o6 = Math.max(j1, j3), fb = k3 + 1; fb < o6; fb++)
			if (!ad.ii(bP.j9(hh, fb))) return;
		return 1
	}

	function abO(hj, j0, j2) {
		for (var k3 = Math.min(j0, j2), o6 = Math.max(j0, j2), fZ = k3 + 1; fZ < o6; fZ++)
			if (!ad.ii(bP.j9(fZ, hj))) return;
		return 1
	}

	function abP(j0, j1, j2, j3, abF, abC) {
		for (var fS = Math.min(Math.abs(j2 - j0), Math.abs(j3 - j1)), ip = Math.sign(j2 - j0), is = Math.sign(j3 - j1), aC = 0; aC < fS; aC++)
			if (!ad.ii(bP.j9(j0 += ip, j1 += is))) return null;
		return j0 === j2 ? abN(j0, j1, j3) ? new Uint32Array([abF, bP.fp(j0, j1), abC]) : null : abO(j1, j0, j2) ? new Uint32Array([abF, bP.fp(j0, j1), abC]) : null
	}
	this.qo = function(abF, abC) {
		abF = function(abF, abC) {
			var j0 = bP.fa(abF),
				j1 = bP.fc(abF),
				j2 = bP.fa(abC),
				j3 = bP.fc(abC);
			if (j0 === j2) {
				if (abN(j0, j1, j3)) return new Uint32Array([abF, abC])
			} else {
				if (j1 !== j3) return abP(j0, j1, j2, j3, abF, abC) || abP(j2, j3, j0, j1, abF, abC);
				if (abO(j1, j0, j2)) return new Uint32Array([abF, abC])
			}
			return null
		}(abF, abC);
		return null === abF ? -1 : bQ.m9.mG(abF)
	}
}

function aYf() {
	var abQ = [];
	this.di = function() {
		abQ = []
	}, this.mF = function() {
		return 65536 === abQ.length
	}, this.mE = function(abF, abC) {
		for (var m9 = abQ, fS = m9.length, aC = 0; aC < fS; aC++) {
			var h0 = m9[aC];
			if (h0[0] === abF && h0[h0.length - 1] === abC) return aC
		}
		return -1
	}, this.mH = function(m8) {
		var abR = new Uint32Array(m8.length);
		return abR.set(m8), abR.reverse()
	}, this.aZ1 = function(hu, lQ) {
		var gv = hu.length - 1,
			abS = new Uint32Array(gv + lQ.length);
		return abS.set(hu, 0), abS.set(lQ, gv), abS
	}, this.aZ6 = function(hu, lQ, x0, fE, abT) {
		abT && (x0 = (lQ = this.mH(lQ)).length - x0 - 2);
		abT = lQ.subarray(x0 + 1 + (fE === lQ[x0 + 1])), fE = new Uint32Array(hu.length + abT.length);
		return fE.set(hu, 0), fE.set(abT, hu.length), fE
	}, this.mG = function(m8) {
		return abQ.push(m8), abQ.length - 1
	}, this.get = function(aC) {
		return abQ[aC]
	}, this.mB = function() {
		return abQ
	}, this.abV = function(abF, abC) {
		return null
	}
}

function aYj() {
	this.ee = function(player, nl) {
		player = bQ.lc.nn(player, nl);
		return !(player < 0 || !bQ.mm.aZ8(player) || (bQ.mm.aYu(player), 0))
	}
}

function aYV() {
	var zy = 32,
		zx = new Array(2);

	function xm(ej) {
		var fZ, fb, fE, is, ip, iO = zy,
			a4E = bD.rL.xm(iO, iO),
			iU = bD.rL.getContext(a4E, !0),
			iR = bD.rL.getImageData(iU, iO, iO),
			xx = iR.data,
			li = (iO >> 1) - .5,
			lj = Math.sqrt(li * li);
		for (xx.fill(255), fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) ip = fZ - li, is = fb - li, fE = 4 * (fb * iO + fZ), ip = 714 * (lj - Math.sqrt(ip * ip + is * is)) / lj, xx[2 + fE] = ej, xx[3 + fE] = 255 < ip ? 0 : ip;
		return iU.putImageData(iR, 0, 0), a4E
	}
	this.abW = -1, this.di = function() {
		this.abW = -1, zx[0] || (zx[0] = xm(255), zx[1] = xm(0))
	}, this.abX = function(iU, f6, fZ, fb, eG, aC) {
		bD.go.he(aE.fC) && (iU.setTransform(f6 *= 4 / 3 * .625, 0, 0, f6, fZ - (eG *= 4 / 3), fb - eG), iU.drawImage(zx[+(bQ.z.mg[aC] === this.abW)], 0, 0))
	}
}

function aYe() {
	function aWm(fZ, fS, fb, abY, aAc, fs, player) {
		if (!(fb < 1 || aAc < fb))
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (bQ.lc.aZC(f6) && !bD.rT.has(abY, ad.fA(f6)) && ad.zE(f6, player)) return f6 >> 2;
				fZ += fs
			}
		return -1
	}

	function aWq(fb, fS, fZ, abY, aWk, fs, player) {
		if (!(fZ < 1 || aWk < fZ)) {
			fS = Math.max(fS, 0);
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (bQ.lc.aZC(f6) && !bD.rT.has(abY, ad.fA(f6)) && ad.zE(f6, player)) return f6 >> 2;
				fb += fs
			}
		}
		return -1
	}

	function aWu(iw, ix, aWh) {
		return -1 !== ix && (-1 === iw || bP.iy(ix, aWh) < bP.iy(iw, aWh)) ? ix : iw
	}
	this.i3 = function(player, aWh) {
		if (bQ.mt.mu(player))
			for (var aWi = bP.iZ(), abY = [];;) {
				var abI = function(aWh, aWi, abY, player) {
					for (var hh = bP.fa(aWh), hj = bP.fc(aWh), aWk = bV.fd - 2, aAc = bV.fe - 2, aWl = -1, fV = 0; fV < aWi; fV++) {
						var aAb = Math.max(hh - fV, 1),
							aNM = Math.max(hj - fV, 1),
							zA = Math.min(hh + fV, aWk),
							z9 = Math.min(hj + fV, aAc),
							iw = aWm(hh, zA - hh, hj - fV, abY, aAc, 1, player),
							ix = aWm(hh - 1, hh - aAb - 1, hj - fV, abY, aAc, -1, player),
							zA = aWm(hh, zA - hh, hj + fV, abY, aAc, 1, player),
							aAb = aWm(hh - 1, hh - aAb - 1, hj + fV, abY, aAc, -1, player),
							aWp = aWq(hj, z9 - hj - 1, hh - fV, abY, aWk, 1, player),
							aWr = aWq(hj - 1, hj - aNM - 2, hh - fV, abY, aWk, -1, player),
							z9 = aWq(hj, z9 - hj - 1, hh + fV, abY, aWk, 1, player),
							aNM = aWq(hj - 1, hj - aNM - 2, hh + fV, abY, aWk, -1, player);
						if (aWl = aWu(aWl, iw, aWh), aWl = aWu(aWl, ix, aWh), aWl = aWu(aWl, zA, aWh), aWl = aWu(aWl, aAb, aWh), aWl = aWu(aWl, aWp, aWh), aWl = aWu(aWl, aWr, aWh), aWl = aWu(aWl, z9, aWh), 0 <= (aWl = aWu(aWl, aNM, aWh)) &&
							fV * fV >= bP.iy(aWl, aWh)) return aWl
					}
					return -1
				}(aWh, aWi, abY, player);
				if (-1 === abI) break;
				var id = ad.fA(bP.fI(abI));
				if (bQ.lc.aZx(player, id)) return !! function(player, abI, aWh) {
					for (var iJ = bP.jJ(abI, aWh), aC = 0; aC < 4; aC++) {
						var fE = bP.jH(abI, iJ);
						if (ad.aIk(bP.fI(fE), player)) return bR.g4[6] = iJ, 1;
						iJ = (iJ + 1) % 4
					}
					return
				}(player, abI, aWh) && (bR.g4[7] = abI, !0);
				abY.push(id)
			}
		return !1
	}
}

function dl() {
	this.aUA = [L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514), L(515)];
	var abb = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aD6 = new Array(abb.length), this.di = function() {
		var h = bm.eW.data[155].value.split(";"),
			li = h.length;
		if (function() {
				for (var fS = abb.length, aC = 0; aC < fS; aC++) ba.aD6[aC] = abb[aC]
			}(), !(li > abb.length))
			for (var aC = 0; aC < li; aC++) h[aC].length && (this.aD6[aC] = h[aC])
	}, this.aUC = function(eH, code) {
		for (var aD6 = this.aD6, abd = abb, r2 = (aD6[eH] = code, ""), fS = aD6.length, abe = [], aC = 0; aC < fS; aC++) abe.push(aD6[aC] === abd[aC] ? "" : aD6[aC]);
		fS--;
		for (aC = 0; aC < fS; aC++) r2 += abe[aC] + ";";
		bm.pp.pq(155, r2 += abe[fS])
	}, this.aU9 = function() {
		bm.pp.pq(155, ""), this.di()
	}, this.ej = function(code, eH) {
		return code === this.aD6[eH] || code === this.aD6[eH + 1]
	}
}

function dd() {
	var abf = new Array(1),
		abg = new Array(1),
		abh = 20,
		eX = 0,
		abi = !1;

	function abk() {
		abh++, bs.play()
	}
	this.di = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				abg[aC] = 0, abf[aC] = document.createElement("audio"), abf[aC].src = src, abf[aC].setAttribute("preload", "auto"), abf[aC].setAttribute("controls", "none"), abf[aC].style.display = "none", abf[aC].onpause = function() {
					abg[aC] = 1
				}, abf[aC].oncanplaythrough = function() {
					abg[aC] = 0 === abg[aC] ? 1 : abg[aC]
				}, document.body.appendChild(abf[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			abi = !0
		}
	}, this.v1 = function() {
		if (abi) {
			abi = !1;
			for (var aC = 0; 0 <= aC; aC--) abf[aC].onpause = null, abf[aC].oncanplaythrough = null, u.removeChild(document.body, abf[aC]), abf[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (abi) {
			var ea = performance.now();
			if (eX + 66 < ea)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === abg[aC]) return eX = ea, abg[aC] = 2, void abf[aC].play();
			0 < abh && (abh--, setTimeout(abk, 66))
		}
	}
}

function cd() {
	this.a9b = function() {
		var abn;
		return !(am.lJ < 3 || ah.hG[mO[0]] >= aE.kX >> 1) && (aE.iM ? 9 !== aE.l5 && (abn = af.aKm(), !(2 * af.aKn(bk.lM()) >= abn)) : function() {
			if (8 === aE.l5) return !1;
			var abn = af.aKm();
			if (2 * ah.hU[mO[0]] >= abn) return !1;
			return !0
		}())
	}
}

function cD() {
	this.di = function() {
		if (0 === aE.data.sResourcesType) {
			for (var aab = aE.kn, hU = ah.hU, aC = 0; aC < aab; aC++) hU[aC] = 512;
			var aac = aE.yS,
				l0 = aF.l0,
				iB = aF.iB;
			for (aC = aab; aC < aac; aC++) hU[aC] = l0[iB[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fS = aE.yS, hU = ah.hU, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fS; aC++) hU[aC] = sResourcesValue
		} : function() {
			for (var fS = aE.yS, hU = ah.hU, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fS; aC++) hU[aC] = sResourcesData[aC]
		})();
		bg.nJ[8] = ah.hU[aE.fC]
	}
}

function dU() {
	var aIy = 501,
		abu = (this.abt = new Uint32Array(aIy), this.a4u = new Uint32Array(aIy), this.aCl = new Uint16Array(aIy), this.aUK = 0, 1),
		vE = 0;

	function abx(self) {
		self.max.fill(0)
	}

	function abz(self, aC) {
		self.max[0] = Math.max(self.abt[aC], self.max[0]), self.max[1] = Math.max(self.a4u[aC], self.max[1]), self.max[2] = Math.max(self.aCl[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.abv = 0, this.nJ = new Array(21), this.abw = null, this.dj = function() {
		this.abw = [L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523), L(342), L(343), L(524), L(525), L(526), L(527), "", L(528), L(529), L(530), L(300), L(531), L(532)]
	}, this.di = function() {
		this.aUK = 0, abu = 1, this.abv = 0, vE = 0, abx(this), this.nJ.fill(0)
	}, this.ql = function(player, j5) {
		bD.go.a4o(player) && (this.nJ[0] += j5 + 1, this.nJ[1]++, this.nJ[12] += bR.fz[1])
	}, this.qG = function(player, pt) {
		__fx.donationsTracker.logDonation(player, pt, bR.fz[0], aX.a6Q());
		player === aE.fC && (aO.qG(bR.fz[0], bR.fz[1], pt), this.nJ[12] += bR.fz[1], this.nJ[16] += bR.fz[0]), pt === aE.fC && (aO.a89(bR.fz[0], player), this.nJ[10] += bR.fz[0])
	}, this.qp = function(player) {
		bD.go.a4o(player) && (this.nJ[2]++, this.nJ[12] += bR.fz[1])
	}, this.qx = function(player) {
		bD.go.a4o(player) && (this.nJ[19]++, this.nJ[12] += bR.fz[1])
	}, this.aaV = function(player) {
		bD.go.a4o(player) && this.nJ[20]++
	}, this.gs = function(player, a5Z, eH) {
		bD.go.a4o(player) && (this.nJ[eH] += a5Z)
	}, this.ee = function() {
		var self;
		this.abv || 0 < vE-- || ((self = this).abt[self.aUK] = ah.hG[aE.fC], self.a4u[self.aUK] = ah.hU[aE.fC], self.aCl[self.aUK] = af.aCm(aE.fC), abz(self, self.aUK), self.aUK++, self.aUK === aIy && function(self) {
			abx(self), abz(self, 0), self.aUK = 1 + bO.ft(aIy, 2);
			for (var aC = 1; aC < self.aUK; aC++) self.abt[aC] = self.abt[2 * aC], self.a4u[aC] = self.a4u[2 * aC], self.aCl[aC] = self.aCl[2 * aC], abz(self, aC);
			abu *= 2
		}(self), vE = abu - 1, bh.nA(), 0 === ah.nN[aE.fC] && (self.abv = bi.kk()))
	}
}

function dV() {
	this.j = 0, this.k = 0, this.ti = 0, this.tj = 0, this.ac1 = 0, this.ac2 = 0, this.a9p = 0, this.uR = 0;
	var ac4 = this.ac3 = 0;
	this.ac5 = 0, this.ac6 = 0, this.ac7 = 0, this.a9A = 0, this.eH = 0, this.aCM = null, this.iE = !1, this.ac8 = -1, this.ac9 = !1, this.acA = [0, 0], this.dj = function() {
		this.aCM = [L(533), L(125, 0, "Balance"), L(124, 0, "Interest"), L(534)]
	}, this.di = function() {
		this.iE = !1, this.ac8 = -1, this.ac9 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fV = a1.a2.ib() && i.j < i.k ? 1 : a1.a2.ib() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fV * this.j), this.j -= a1.a2.ib() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.a9A = Math.floor(this.k / 150), this.a9A = Math.max(this.a9A, 1.5), this.ti = Math.floor(1 + .02 * this
			.j), this.tj = Math.floor(1 + .04 * this.j), this.a9p = this.tj, ac4 = Math.floor(.75 * this.a9p), this.uR = Math.floor(1 + .075 * this.j), this.ac5 = Math.floor(1 + .1125 * this.j), this.ac6 = Math.floor(this.j * (a1.a2.ib() ? .03 :
				.029)), this.ac6 = Math.max(this.ac6, 4), this.ac7 = Math.floor(.035 * this.j), this.ac7 = Math.max(this.ac7, 4), this.ac3 = this.k - 2 * this.a9p - this.uR - this.ac5, this.iE && this.acB()
	}, this.hf = function(m2, m3) {
		var yV, yU;
		return !!this.iE && (yU = m2, yV = m3, m2 -= bO.ft(i.j - this.j, 2), m3 -= bO.ft(i.k - this.k, 2), m2 < 0 || m3 < 0 || m2 >= this.j || m3 >= this.k || m2 >= this.j - this.ac5 && m3 < this.ac5 ? -1 !== aN.hf(yU, yV) || bF.hf(yU, yV) ||
			this.sb() : m3 < this.ac5 || (m3 < this.k - this.uR ? (this.ac9 = !0, this.ac8 = (m2 - 2 * this.ti - this.ac1) / this.ac2, 3 !== this.eH && (bi.dq = !0)) : (yU = (yU = Math.floor(m2 / (this.j / this.aCM.length))) < 0 ? 0 : yU >=
				this.aCM.length ? this.aCM.length - 1 : yU) !== this.eH && (this.eH = yU, this.acB(), bi.dq = !0)), !0)
	}, this.a2u = function(m2, m3) {
		return this.acA[0] = m2, this.acA[1] = m3, !(!this.iE || !this.ac9 || (m2 -= bO.ft(i.j - this.j, 2), m3 = this.ac8, this.ac8 = (m2 - 2 * this.ti - this.ac1) / this.ac2, (0 <= this.ac8 && this.ac8 <= 1 || 0 <= m3 && m3 <= 1) && (bi.dq = !
			0), 0))
	}, this.a3J = function() {
		this.ac9 && (this.ac9 = !1)
	}, this.a3V = function() {
		this.iE ? this.sb() : this.show()
	}, this.show = function() {
		bg.aUK < 2 || (this.iE = !0, this.acB())
	}, this.sb = function() {
		this.iE = !1, this.ac8 = -1, bi.dq = !0
	}, this.acB = function() {
		this.eH < 2 ? this.ac1 = aR.measureText(bD.sK.a0f(bg.max[this.eH]), bD.rL.t9(0, this.ac6)) : 2 === this.eH && (this.ac1 = aR.measureText(bD.sK.a5S(6, 2), bD.rL.t9(0, this.ac6))), this.ac2 = this.j - 2 * this.ti - this.ac1 - this.tj
	}, this.nA = function() {
		this.iE && this.acB()
	}, this.vw = function() {
		this.iE && this.aA7()
	}, this.aA7 = function() {
		var fZ = bO.ft(i.j - this.j, 2),
			fb = bO.ft(i.k - this.k, 2);
		vx.setTransform(1, 0, 0, 1, fZ, fb), vx.fillStyle = bE.oL, vx.fillRect(0, this.ac5, this.j, this.k - this.ac5), this.acC(), this.aSp(), vx.strokeRect(0, 0, this.j, this.k), bD.rL.textAlign(vx, 2), vx.font = bD.rL.t9(0, this.ac6), 0 ===
			this.eH ? this.acD(bg.abt, fZ, fb) : 1 === this.eH ? this.acD(bg.a4u, fZ, fb) : 2 === this.eH ? this.acE(fZ, fb) : 3 === this.eH && (this.acF(fZ, fb), this.acG(fZ, fb)), aN.a7G(Math.floor(fZ + this.j - .725 * this.ac5), Math.floor(
				fb + .275 * this.ac5), Math.floor(.45 * this.ac5)), vx.setTransform(1, 0, 0, 1, 0, 0)
	}, this.acC = function() {
		var aC, ea;
		for (vx.lineWidth = this.a9A, bD.rL.textBaseline(vx, 1), bD.rL.textAlign(vx, 1), vx.strokeStyle = bE.oO, vx.font = bD.rL.t9(1, this.ac7), ea = this.j / this.aCM.length, vx.fillStyle = bE.ol, vx.fillRect(this.eH * ea, this.k - this.uR, ea,
				this.uR), vx.fillStyle = bE.oO, vx.fillRect(0, this.k - this.uR - .5 * this.a9A, this.j, this.a9A), aC = 1; aC <= 3; aC++) vx.fillRect(aC * ea, this.k - this.uR, this.a9A, this.uR);
		for (aC = this.aCM.length - 1; 0 <= aC; aC--) vx.fillText(bD.zX.a4S(this.aCM[aC], 0, .9 * ea), (aC + .5) * ea, this.k - .46 * this.uR)
	}, this.aSp = function() {
		vx.fillStyle = bE.pB, vx.fillRect(0, 0, this.j, this.ac5), vx.fillStyle = bE.oO, vx.fillRect(0, this.ac5 - .5 * this.a9A, this.j, this.a9A), vx.font = bD.rL.t9(1, .39 * this.ac5), vx.fillText(bD.zX.a4S(L(535), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.ac5))
	}, this.acD = function(h, fZ, fb) {
		var li = bg.max[this.eH],
			a3n = (vx.setTransform(1, 0, 0, 1, fZ + 2 * this.ti + this.ac1, fb + this.a9p + this.ac5), vx.lineWidth = 2, this.ac3 / Math.sqrt(li));
		vx.beginPath(), vx.moveTo(this.ac2, this.ac3 - a3n * Math.sqrt(h[bg.aUK - 1]));
		for (var aC = bg.aUK - 2; 0 <= aC; aC--) vx.lineTo(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.sqrt(h[aC]));
		vx.stroke();
		fZ = this.a7G(h, a3n, .5);
		fZ < .95 && vx.fillText(bD.sK.a0f(li), -this.ti, 0), .05 < Math.abs(fZ - .5) && vx.fillText(bD.sK.a0f(Math.floor(li / 4)), -this.ti, Math.floor(this.ac3 / 2)), .05 < fZ && vx.fillText("0", -this.ti, this.ac3)
	}, this.acE = function(fZ, fb) {
		vx.setTransform(1, 0, 0, 1, fZ + 2 * this.ti + this.ac1, fb + this.a9p + this.ac5), vx.lineWidth = 2;
		var a3n = this.ac3 / Math.max(bg.max[this.eH], 1);
		vx.beginPath(), vx.moveTo(this.ac2, this.ac3 - a3n * bg.aCl[bg.aUK - 1]);
		for (var aC = bg.aUK - 2; 0 <= aC; aC--) vx.lineTo(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * bg.aCl[aC]);
		vx.stroke();
		fZ = this.a7G(bg.aCl, a3n, 1), fb = bg.max[this.eH] / 100;
		fZ < .95 && vx.fillText(bD.sK.a5S(fb, 2), -this.ti, 0), .05 < Math.abs(fZ - .5) && vx.fillText(bD.sK.a5S(fb / 2, 2), -this.ti, Math.floor(this.ac3 / 2)), .05 < fZ && vx.fillText(bD.sK.a5S(0, 2), -this.ti, this.ac3)
	}, this.acF = function(fZ, fb) {
		vx.setTransform(1, 0, 0, 1, fZ + .34 * this.j, fb + 2 * ac4 + this.ac5), bD.rL.textAlign(vx, 2);
		for (var aC4 = this.k - 4 * ac4 - this.uR - this.ac5, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) vx.fillText(bD.zX.a4S(bg.abw[h[aC]], 0, .31 * this.j), 0, aC * aC4 / 9);
		var fu = bg.nJ;
		for (vx.setTransform(1, 0, 0, 1, fZ + .39 * this.j, fb + 2 * ac4 + this.ac5), bD.rL.textAlign(vx, 0), vx.fillText(bD.sK.a5S(100 * fu[0] / (1024 * Math.max(fu[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) vx.fillText(fu[h[aC]].toString(), 0,
			aC * aC4 / 9);
		vx.fillText(bD.sK.a5S(100 * (1 - ah.hG[aE.fC] / fu[7]), 0), 0, aC4)
	}, this.acG = function(fZ, fb) {
		vx.setTransform(1, 0, 0, 1, fZ + .79 * this.j, fb + 2 * ac4 + this.ac5), bD.rL.textAlign(vx, 2);
		var aC, aC4 = this.k - 4 * ac4 - this.uR - this.ac5;
		for (vx.fillStyle = bE.og, aC = 2; 0 <= aC; aC--) vx.fillText(bD.zX.a4S(bg.abw[aC + 8], 0, .31 * this.j), 0, aC * aC4 / 9);
		vx.fillText(bD.zX.a4S(bg.abw[18], 0, .31 * this.j), 0, 3 * aC4 / 9), vx.fillStyle = bE.oe, vx.fillText(bD.zX.a4S(bg.abw[11], 0, .31 * this.j), 0, 4 * aC4 / 9), vx.fillStyle = bE.oy, vx.fillText(bD.zX.a4S(bg.abw[13], 0, .31 * this.j), 0,
				5 * aC4 / 9), vx.fillText(bD.zX.a4S(bg.abw[15], 0, .31 * this.j), 0, 6 * aC4 / 9), vx.fillText(bD.zX.a4S(bg.abw[16], 0, .31 * this.j), 0, 7 * aC4 / 9), vx.fillText(bD.zX.a4S(bg.abw[12], 0, .31 * this.j), 0, 8 * aC4 / 9), vx
			.fillStyle = bE.ox, vx.fillText(bD.zX.a4S(bg.abw[17], 0, .31 * this.j), 0, aC4), vx.fillStyle = bE.og;
		var fu = bg.nJ,
			aG7 = fu[8] + fu[9] + fu[10] + fu[18],
			aG7 = bD.sK.a0f(aG7),
			aRa = vx.measureText(aG7).width,
			fZ = (vx.setTransform(1, 0, 0, 1, fZ + .83 * this.j + aRa, fb + 2 * ac4 + this.ac5), vx.fillText(bD.sK.a0f(fu[8]), 0, 0), vx.fillText(bD.sK.a0f(fu[9]), 0, aC4 / 9), vx.fillText(bD.sK.a0f(fu[10]), 0, 2 * aC4 / 9), vx.fillText(bD.sK
				.a0f(fu[18]), 0, 3 * aC4 / 9), vx.fillStyle = bE.oe, vx.fillText(aG7, 0, 4 * aC4 / 9), vx.fillStyle = bE.oy, vx.fillText(bD.sK.a0f(fu[13]), 0, 5 * aC4 / 9), vx.fillText(bD.sK.a0f(fu[15]), 0, 6 * aC4 / 9), vx.fillText(bD.sK
				.a0f(fu[16]), 0, 7 * aC4 / 9), vx.fillText(bD.sK.a0f(fu[12]), 0, 8 * aC4 / 9), fu[12] + fu[13] + fu[15] + fu[16]);
		vx.fillStyle = bE.ox, vx.fillText(bD.sK.a0f(fZ), 0, aC4), vx.fillStyle = bE.oO
	}, this.a7G = function(h, a3n, aAk) {
		var aC, e, gB;
		return this.ac8 < 0 || 1 < this.ac8 ? .25 : (aC = this.ac8 * (bg.aUK - 1), gB = h[e = Math.floor(aC)], gB += (aC - e) * (h[e < bg.aUK - 1 ? e + 1 : e] - gB), vx.strokeStyle = bE.oR, .04 < this.ac8 && this.acI(0, this.ac3 - a3n * Math.pow(
				gB, aAk), aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gB, aAk)), .04 < gB / bg.max[this.eH] && this.acI(aC * this.ac2 / (bg.aUK - 1), this.ac3, aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gB, aAk)), vx
			.fillStyle = bE.p0, vx.beginPath(), vx.arc(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gB, aAk), Math.max(2, .014 * this.k), 0, 2 * Math.PI), vx.fill(), h = this.ac8 * bi.aCn, h = 0 === ah.nN[aE.fC] ? Math.floor(h * bg
				.abv) : Math.floor(h * bi.kk()), vx.fillStyle = bE.oO, vx.fillText(1 === aAk ? bD.sK.a5S(gB / 100, 2) : bD.sK.a0f(Math.floor(gB)), -this.ti, this.ac3 - a3n * Math.pow(gB, aAk)), bD.rL.textAlign(vx, 1), vx.fillText(aX.aCa(h),
				aC * this.ac2 / (bg.aUK - 1), this.ac3 + this.ac6 - (a1.a2.ib() ? 2 : 0) - this.a9A), bD.rL.textAlign(vx, 2), a3n * Math.pow(gB, aAk) / this.ac3)
	}, this.acI = function(no, np, o1, o2) {
		vx.beginPath(), vx.moveTo(no, np), vx.lineTo(o1, o2), vx.stroke()
	}
}

function c1() {
	this.acJ = "https://territorial.io/changelog", this.aUL = "https://territorial.io/terms", this.aUM = "https://territorial.io/privacy", this.acK = "https://territorial.io/tutorial", this.acL = "https://territorial.io/players", this.acM =
		"https://territorial.io/clans", this.acN = "https://territorial.io/clan-results", this.aQj = "https://patreon.com/c/territorial", this.aE4 = "https://play.google.com/store/apps/details?id=territorial.io", this.a2T =
		"https://apps.apple.com/app/id1581110913", this.aE5 = "https://discord.gg/pthqvpTXmh", this.aE6 = "https://www.instagram.com/davidtschacher/", this.a0D =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dD() {
	this.z = new acO, this.zU = new acP, this.di = function() {
		this.z.di()
	}, this.ee = function() {
		0 !== this.z.aWP && this.z.aWP--
	}
}

function acP() {
	this.vw = function() {
		if (0 !== bS.z.aWP && (vx.globalAlpha = Math.min(bS.z.aWP / 580, 1), vx.drawImage(bS.z.acS, 1 + aT.zS(), 1 + aT.zT()), vx.globalAlpha = 1, aE.hq)) {
			for (var no = j6 / ie, np = j7 / ie, o1 = (i.j + j6) / ie, o2 = (i.k + j7) / ie, h1 = bS.z.acT * ie, acU = bS.z.acU, aC = aE.kn - 1; 0 <= aC; aC--) ! function(aC, h1, no, np, o1, o2, acU) {
				var highlight;
				0 === ah.nN[aC] || 0 === ah.hG[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h1 *= 2), o1 = i.j * ((ah.jL[aC] + ah.jM[aC] + 1) / 2 - no) / (o1 - no) - .5 * h1, no = i.k * ((ah.jN[
					aC] + ah.jO[aC] + 1) / 2 - np) / (o2 - np) - .5 * h1, o1 > i.j) || no > i.k || o1 < -h1 || no < -h1 || (highlight ? vx.setTransform(2 * ie, 0, 0, 2 * ie, o1, no) : vx.setTransform(ie, 0, 0, ie, o1, no), vx.drawImage(
					acU[aE.iM ? bj.fQ[aC] : 1], 0, 0))
			}(aC, h1, no, np, o1, o2, acU);
			vx.setTransform(ie, 0, 0, ie, 0, 0)
		}
	}
}

function acO() {
	this.acT = 28, this.aWP = 0, this.acS = null;
	var acW = this.acU = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aca(iO, acb) {
		var fZ, fb, fE, ip, a4E = bD.rL.xm(iO, iO),
			iU = bD.rL.getContext(a4E, !0),
			iR = bD.rL.getImageData(iU, iO, iO),
			xx = iR.data,
			li = (iO >> 1) - .5,
			acc = .5 + li;
		for (acc *= acc, fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) ip = (ip = fZ - li) * ip + (ip = fb - li) * ip, xx[fE = 4 * (fb * iO + fZ)] = acb[0], xx[1 + fE] = acb[1], xx[2 + fE] = acb[2], xx[3 + fE] = (acc - ip) * acb[3] / acc;
		return iU.putImageData(iR, 0, 0), a4E
	}

	function abX(aC, iU, a4E, iO) {
		var highlight, fZ, fb;
		0 !== ah.nN[aC] && 0 !== ah.hG[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iO *= 2), fZ = ah.jL[aC] + ah.jM[aC] + 1 - iO - 2 >> 1, fb = ah.jN[aC] + ah.jO[aC] + 1 - iO - 2 >> 1, highlight ? iU
			.drawImage(a4E[aE.iM ? 9 === aE.l5 && 5 === aF.iB[aC] ? 3 : bj.fQ[aC] : aC < aE.kn ? 1 : 0], fZ, fb, iO, iO) : iU.drawImage(a4E[aE.iM ? 9 === aE.l5 && 5 === aF.iB[aC] ? 3 : bj.fQ[aC] : aC < aE.kn ? 1 : 0], fZ, fb))
	}
	this.di = function() {
		var su;
		this.aWP = 700,
			function(su) {
				var iO = su.acT;
				if (su.acU = [], acW = [], aE.iM) {
					for (var aC = 0; aC <= aE.yZ; aC++) su.acU.push(aca(iO, bj.aZs[bj.lA[aC]])), acW.push(aca(iO >> 1, bj.aZs[bj.lA[aC]]));
					9 === aE.l5 && acW.push(aca(iO, bj.aZs[1]))
				} else su.acU.push(aca(iO, bj.aZs[7])), su.acU.push(aca(iO, bj.aZs[4])), acW.push(aca(iO >> 1, bj.aZs[7]))
			}(this),
			function(su, acg) {
				var aC, acS = su.acS,
					iU = bD.rL.getContext(acS, !0),
					fS = aE.fP,
					iO = su.acT >> 1;
				iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0), acg && iU.clearRect(0, 0, acS.width, acS.height);
				if (9 === aE.l5) {
					iO <<= 1;
					su = b0.lE[5];
					for (aC = fS - su; aC < fS; aC++) abX(aC, iU, acW, iO);
					fS -= su, iO >>= 1
				}
				for (aC = aE.kn; aC < fS; aC++) abX(aC, iU, acW, iO)
			}(this, null !== (su = this).acS && su.acS.width === bV.fd - 2 && su.acS.height === bV.fe - 2 || (su.acS = bD.rL.xm(bV.fd - 2, bV.fe - 2), !1)), aE.hq || this.a5k()
	}, this.aZt = aca, this.a5k = function() {
		for (var fS = aE.kn, iO = this.acT, acU = this.acU, iU = bD.rL.getContext(this.acS, !0), aC = 0; aC < fS; aC++) abX(aC, iU, acU, iO)
	}
}

function dE() {
	function acj() {
		8 === aE.l5 && 1 === aE.a1O && bU.a10.a1N()
	}

	function aci(player) {
		aE.hq ? (al.aJ5(player), am.aMX(), aE.l7 && aE.qh.ee()) : b4.aEO(player)
	}
	this.q9 = function(player) {
		aO.a1b(player, player === aE.fC ? 21 : 22), aci(player), acj()
	}, this.qe = function(player) {
		1 === aE.a1O && 0 !== ah.nN[player] && 2 !== ah.a4k[player] && aci(player), aE.a1R--, aE.a1Q--, aO.a1b(player, 4), bD.go.hd(2) && aX.n9(!0), acj()
	}
}

function dO() {
	this.aWf = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aC1 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.oO, "rgb(170,170,170)"
	], this.ack = [bE.oO, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.oO, bE.oF], this.acl = [bE.oF, bE.oO, bE.oO, bE.oO, bE.oF, bE.oF, bE.oF, bE.oF, bE.oO];
	var aMh = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aM0 = ["rgba(" + aMh[0] + ",", "rgba(" + aMh[1] + ",", "rgba(" + aMh[2] + ",", "rgba(" + aMh[3] + ",", "rgba(" + aMh[4] + ",", "rgba(" + aMh[5] + ",", "rgba(" + aMh[6] + ",", "rgba(" + aMh[7] + ",", "rgba(" + aMh[8] + ",", "rgba(" + aMh[9] +
			","
		], this.aM1 = ["rgb(" + aMh[0] + ")", "rgb(" + aMh[1] + ")", "rgb(" + aMh[2] + ")", "rgb(" + aMh[3] + ")", "rgb(" + aMh[4] + ")", "rgb(" + aMh[5] + ")", "rgb(" + aMh[6] + ")", "rgb(" + aMh[7] + ")", "rgb(" + aMh[8] + ")", "rgb(" + aMh[9] +
			")"
		], this.a1k = null, this.aZs = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aS1 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lA = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fQ = new Uint8Array(aE.fP), this.aC2 = new Uint8Array(aE.fP), this.yf = new Uint16Array(aE.fP), this.yg = new Uint16Array(this.lA.length + 1), this.yh = new Uint16Array(this.lA.length), this.dj =
		function() {
			this.a1k = [L(536), L(537), L(538), L(539), L(540), L(541), L(542), L(543), L(544)]
		}, this.di = function() {
			if (this.fQ.fill(0), this.aC2.fill(0), this.acm(), aE.iM) {
				if (9 === aE.l5) {
					for (var fQ = bj.fQ, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fQ[aC] = 1;
					var fS = aE.fP;
					for (aC = aE.data.teamPlayerCount[7]; aC < fS; aC++) fQ[aC] = 2;
					bj.lA[1] = 7, bj.lA[2] = 8
				} else aE.l7 ? function() {
					var aS1 = bj.aS1,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.kn - 1; 0 <= aC; aC--) colorsData[aC] = az.k4(262144);
					var acx = 0,
						fi = 768,
						aS0 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fV = 0, fm = 0; fm < 3; fm++) fV += Math.abs(aS1[aC][fm] - aS0[fm]);
							fV < fi && (acx = aC, fi = fV)
						} var acy = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) acy[aC] = teamPlayerCount[aC];
					var lA = bj.lA,
						acz = new Uint8Array(9),
						gv = (lA[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) acy[aC] && (acz[aC] = gv, lA[gv++] = aC);
					var k3 = aE.kn,
						fQ = bj.fQ;
					acy[acx] ? (acy[acx]--, fQ[0] = acz[acx]) : k3 = 0;
					var ej = 0;
					for (aC = k3; aC < aE.yS; aC++) {
						var iK = lA[ej];
						if (acy[iK]) acy[iK]--, fQ[aC] = acz[iK];
						else if (aC--, 9 <= ++ej) return console.log("error 325")
					}
				}() : this.ee();
				! function() {
					for (var fS = aE.fP, yf = bj.yf, yg = bj.yg, yh = bj.yh, fQ = bj.fQ, lA = bj.lA, yY = lA.length, eW = new Array(yY), aC = 0; aC < yY; aC++) eW[aC] = [];
					for (aC = 0; aC < fS; aC++) eW[lA[fQ[aC]]].push(aC);
					for (aC = 1; aC <= yY; aC++) yg[aC] = yg[aC - 1] + eW[aC - 1].length;
					for (aC = 0; aC < yY; aC++)
						for (var gv = eW[aC].length, li = yg[aC], iK = 0; iK < gv; iK++) yf[iK + li] = eW[aC][iK];
					var kn = aE.kn;
					for (aC = 0; aC < yY; aC++)
						for (gv = eW[aC].length, li = yg[aC], iK = 0; iK < gv; iK++)
							if (yf[iK + li] >= kn) {
								yh[aC] = iK;
								break
							}
				}(), ! function() {
					for (var fS = aE.fP, fQ = bj.fQ, aC2 = bj.aC2, lA = bj.lA, aC = 0; aC < fS; aC++) aC2[aC] = lA[fQ[aC]];
					9 === aE.l5 && aC2.fill(1, fS - b0.lE[5])
				}()
			}
		}, this.acm = function() {
			for (var aC = this.lA.length - 1; 0 <= aC; aC--) this.lA[aC] = aC
		}, this.ee = function() {
			var a0U = new Uint8Array(aE.kn),
				a0V = new Uint8Array(aE.kn),
				acr = new Uint16Array(8),
				acs = new Uint16Array(this.lA.length);
			this.act(a0U, a0V, acr, 1), this.aIa(acr), this.acu(acs, a0U, a0V), this.acv(a0U, a0V, acs), this.acw()
		}, this.act = function(a0U, a0V, acy, ad0) {
			for (var fm, e, ad1, fS = this.lA.length - ad0, h = new Uint16Array(fS), aS1 = this.aS1, colorsData = aE.data.colorsData, aC = aE.kn - 1; 0 <= aC; aC--) {
				for (fm = fS; ad0 <= fm; fm--) h[fm - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aS1[fm][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aS1[fm][1]) + Math.abs(4 * (63 & colorsData[aC]) - aS1[fm][2]);
				for (ad1 = 768, fm = fS - 1; 0 <= fm; fm--) h[e = (fm + aC) % fS] < ad1 && (ad1 = h[e], a0U[aC] = e);
				for (acy[a0U[aC]] += 4, ad1 = 768, fm = fS - 1; 0 <= fm; fm--) h[e = (fm + aC) % fS] < ad1 && e !== a0U[aC] && (ad1 = h[e], a0V[aC] = e);
				acy[a0V[aC]]++
			}
		}, this.aIa = function(acy) {
			for (var fm, lk, fS = this.lA.length - 1, aC = fS; 0 <= aC; aC--) this.lA[aC] = aC;
			for (aC = fS - 1; 0 <= aC; aC--) acy[aC]++;
			for (aC = 1; aC <= fS; aC++) {
				for (lk = 0, fm = 1; fm < fS; fm++) acy[fm] > acy[lk] && (lk = fm);
				acy[lk] = 0, this.lA[aC] = lk + 1
			}
		}, this.acu = function(acs, a0U, a0V) {
			var fm, a26, ej, fV, e, o0, u0, ad2 = this.lA.length - 1,
				ro = new Uint16Array(ad2),
				ad3 = [],
				ad4 = 0,
				a25 = [],
				ad5 = [];
			loop: for (var aC = 0; aC < aE.kn; aC++)
				if (null !== (a26 = bD.sK.a27(ah.a24[aC]))) {
					for (fm = a25.length - 1; 0 <= fm; fm--)
						if (a26 === a25[fm]) {
							ad5[fm].push(aC), ad4 = Math.max(ad4, ad5[fm].length);
							continue loop
						} a25.push(a26), ad3.push(!1), ad5.push([aC]), ad4 = Math.max(ad4, 1)
				}
			for (; 2 < aE.yZ && ad4 > bO.ft(aE.kn, aE.yZ);) aE.yZ--, aE.l5--;
			for (fm = a25.length - 1; 0 <= fm; fm--) {
				for (fV = -1, ej = a25.length - 1; 0 <= ej; ej--) !ad3[ej] && (-1 === fV || ad5[ej].length > ad5[fV].length) && (fV = ej);
				for (ej = ad2 - 1; 0 <= ej; ej--) ro[ej] = 1;
				for (ej = ad5[fV].length - 1; 0 <= ej; ej--) ro[a0U[ad5[fV][ej]]] += 3, ro[a0V[ad5[fV][ej]]]++;
				for (aC = ad2 - 1; 0 <= aC; aC--) {
					for (e = fV % ad2, ej = ad2 - 1; 0 <= ej; ej--) ro[ej] > ro[e] && (e = ej);
					for (o0 = -1, ej = aE.yZ; 0 < ej; ej--)
						if (this.lA[ej] === e + 1) {
							o0 = ej;
							break
						} if (ro[e] = 0, -1 !== o0) {
						for (u0 = 0, ej = aE.yZ; 0 < ej; ej--) acs[o0] > acs[ej] && u0++;
						if (u0 !== aE.yZ - 1) {
							for (ej = ad5[fV].length - 1; 0 <= ej; ej--) acs[o0]++, this.fQ[ad5[fV][ej]] = o0;
							break
						}
					}
				}
				ad3[fV] = !0
			}
		}, this.acv = function(a0U, a0V, acs) {
			for (var aC, io, fS = this.lA.length - 1, border = bO.ft(aE.kn, aE.yZ), ad6 = (0 < aE.kn % aE.yZ && border++, new Uint8Array(1 + fS)), fm = fS; 1 <= fm; fm--) ad6[this.lA[fm]] = fm;
			for (aC = 0; aC < aE.kn; aC++) io = ad6[a0U[aC] + 1], 0 === this.fQ[aC] && io <= aE.yZ && acs[io] < border && (acs[io]++, this.fQ[aC] = io);
			for (aC = 0; aC < aE.kn; aC++) io = ad6[a0V[aC] + 1], 0 === this.fQ[aC] && io <= aE.yZ && acs[io] < border && (acs[io]++, this.fQ[aC] = io);
			for (fm = aE.yZ; 1 <= fm; fm--)
				for (aC = aE.kn - 1; 0 <= aC && !(acs[fm] >= border); aC--) 0 === this.fQ[aC] && (acs[fm]++, this.fQ[aC] = fm)
		}, this.acw = function() {
			if (aE.yZ < 8) aE.yZ++, aE.l5++, aE.ya = 1;
			else
				for (var aC = aE.kn; aC < aE.fP; aC++) this.fQ[aC] = 1 + aC % aE.yZ
		}
}

function dg() {
	this.hH = function() {
		for (var fZ, fb, aC = gO - 1; 0 <= aC; aC--) fZ = bO.ft(gQ[aC], 4) % bV.fd, fb = bO.ft(gQ[aC], 4 * bV.fd), ah.jL[gJ] = Math.min(fZ, ah.jL[gJ]), ah.jN[gJ] = Math.min(fb, ah.jN[gJ]), ah.jM[gJ] = Math.max(fZ, ah.jM[gJ]), ah.jO[gJ] = Math
			.max(fb, ah.jO[gJ])
	}, this.gc = function() {
		var fV, h0, aC, fS = ah.gu[gJ].length,
			fU = ad.fU;
		loop: for (aC = fS - 1; 0 <= aC; aC--) {
			for (fV = 3; 0 <= fV; fV--)
				if (h0 = ah.gu[gJ][aC] + fU[fV], ad.fJ(h0) || ad.h2(h0) && ad.fK(h0) !== gJ) {
					ad.jz(ah.gu[gJ][aC], gJ);
					continue loop
				} ah.gu[gJ][aC] = ah.gu[gJ][fS - 1], ah.gu[gJ].pop(), fS--
		}
	}, this.gd = function() {
		var player = gJ,
			h8 = ah.h8,
			h9 = ah.h9,
			fr = ah.fr,
			fS = h8[player].length,
			fU = ad.fU;
		loop: for (var aC = fS - 1; 0 <= aC; aC--) {
			for (var ad7 = !1, ad8 = !1, fV = 3; 0 <= fV; fV--) {
				var h0 = h8[player][aC] + fU[fV];
				if (ad.aIk(h0, player)) continue loop;
				ad7 = ad7 || ad.ii(h0), ad8 = ad8 || ad.aIj(h0)
			}
			ad7 ? h9[player].push(h8[player][aC]) : ad8 ? fr[player].push(h8[player][aC]) : ad.z1(h8[player][aC], player), h8[player][aC] = h8[player][fS - 1], h8[player].pop(), fS--
		}
	}, this.h6 = function() {
		ah.hG[gN] -= gO
	}, this.h7 = function(border) {
		for (var fS = border.length, aC = fS - 1; 0 <= aC; aC--) ad.zM(gN, border[aC]) || (border[aC] = border[fS - 1], border.pop(), fS--)
	}, this.hA = function(border) {
		for (var fS = border.length, aC = fS - 1; 0 <= aC; aC--) !ad.zM(gN, border[aC]) && ad.fN(border[aC]) && (border[aC] = border[fS - 1], border.pop(), fS--)
	}, this.hB = function(border) {
		for (var fV, h0, fS = border.length, fU = ad.fU, aC = fS - 1; 0 <= aC; aC--)
			for (fV = 3; 0 <= fV; fV--)
				if (h0 = border[aC] + fU[fV], ad.aIk(h0, gN)) {
					ah.h8[gN].push(border[aC]), border[aC] = border[fS - 1], border.pop(), fS--;
					break
				}
	}, this.hC = function() {
		for (var fV, h0, fU = ad.fU, aC = gO - 1; 0 <= aC; aC--)
			for (fV = 3; 0 <= fV; fV--) h0 = gQ[aC] + fU[fV], ad.zP(gN, h0) && ad.aIq(h0) && (ah.h8[gN].push(h0), ad.gx(h0, gN))
	}, this.hD = function() {
		var fZ, fb;
		loop: for (; ah.jN[gN] < ah.jO[gN];) {
			for (fZ = ah.jM[gN]; fZ >= ah.jL[gN]; fZ--)
				if (ad.zM(gN, 4 * (ah.jN[gN] * bV.fd + fZ))) break loop;
			ah.jN[gN]++
		}
		loop: for (; ah.jN[gN] < ah.jO[gN];) {
			for (fZ = ah.jM[gN]; fZ >= ah.jL[gN]; fZ--)
				if (ad.zM(gN, 4 * (ah.jO[gN] * bV.fd + fZ))) break loop;
			ah.jO[gN]--
		}
		loop: for (; ah.jL[gN] < ah.jM[gN];) {
			for (fb = ah.jO[gN]; fb >= ah.jN[gN]; fb--)
				if (ad.zM(gN, 4 * (fb * bV.fd + ah.jL[gN]))) break loop;
			ah.jL[gN]++
		}
		loop: for (; ah.jL[gN] < ah.jM[gN];) {
			for (fb = ah.jO[gN]; fb >= ah.jN[gN]; fb--)
				if (ad.zM(gN, 4 * (fb * bV.fd + ah.jM[gN]))) break loop;
			ah.jM[gN]--
		}
	}, this.fL = function(player, jw) {
		return 0 === bj.fQ[player] || bj.fQ[player] !== bj.fQ[jw]
	}, this.hy = function(player) {
		for (var aC, h1, fS = ah.h8[player].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < fS; aC++)
				if (ad.fJ(ah.h8[player][aC] + h1)) return !0;
		return !1
	}, this.aJ1 = function(player) {
		for (var aC, h1, fS = ah.h8[player].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < fS; aC++)
				if (ad.jy(ah.h8[player][aC]) && ad.fJ(ah.h8[player][aC] + h1)) return !0;
		return !1
	}, this.i1 = function(a4q, a4r) {
		for (var aC, ea, h1, h0, aab = ah.h8[a4q].length, aac = ah.h8[a4r].length, fU = (aac < aab && (ea = a4q, a4q = a4r, a4r = ea, ea = aab, aab = aac, 0), ad.fU), fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < aab; aC++)
				if (h0 = ah.h8[a4q][aC] + h1, ad.h2(h0) && ad.fK(h0) === a4r) return !0;
		return !1
	}, this.aJ2 = function(a4q, a4r) {
		for (var aC, h1, h0, aab = ah.h8[a4q].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < aab; aC++)
				if (ad.jy(ah.h8[a4q][aC]) && (h0 = ah.h8[a4q][aC] + h1, ad.h2(h0)) && ad.fK(h0) === a4r) return !0;
		return !1
	}
}

function da() {
	this.qq = new ad9
}

function ad9() {
	this.i4 = function(player) {
		bD.go.a4l(player) && aO.zq(80, L(545), 637, 0, bE.pE, bE.oL, -1, !1)
	}, this.i7 = function(player) {
		bD.go.a4l(player) && aO.zq(80, L(546), 637, 0, bE.pE, bE.oL, -1, !1)
	}
}

function adA() {
	this.adB = 0, this.ee = function() {
		aP.ee(), aa.ee(), i.ee(), b1.z.ee(), ay.aI5(), bX.eR.ee(), bi.dq && (bi.dq = !1, ab.vw())
	}
}

function adC() {
	this.eZ = bi.eZ, this.eH = 0, this.adB = 0, this.aI3 = 0, this.adD = null, this.adE = 7, this.adF = 0, this.di = function() {
		this.aI3 = 0, this.adD = [], this.eH = 0, this.adB = 0
	}, this.aVc = function(aD) {
		if (aE.hq) this.aCo(aD);
		else if (this.adD.push(aD), 2 === aE.a1O) {
			for (var aC = 0; aC < this.adD.length; aC++) bB.pj.ee(this.adD[aC]);
			this.adD = []
		}
	}, this.aCo = function(aD) {
		2 !== aE.a1O && (bB.pj.ee(aD), bC.ee(), aX.aCo(this.aI3), this.aI3 === aE.a5q ? (aE.qh.ee(), this.aI3 = 0, this.eH = 0, this.adB = 0, this.eZ = bi.eZ) : (this.aI3++, ag.a5j(), ag.n9(!0), be.render()))
	}, this.ee = function() {
		i.ee(), aE.hq ? (bi.dq = aX.aCo(-1) || bi.dq, nB()) : (0 !== this.eH || bi.eZ >= this.eZ && (this.eZ += bi.aCn * Math.floor(1 + (bi.eZ - this.eZ) / bi.aCn), 2 === aE.a1O ? mz() : this.adG(), this.eH++, 27 < bi.eZ - this.adF)) && this
		.adH(), n6(), bi.dq && (bi.dq = !1, zQ()), this.adF = bi.eZ
	}, this.adH = function() {
		bi.dq = !0, n8(), this.eH = 0
	}, this.adG = function() {
		var wl, aC;
		if (this.adB !== 7 * this.aI3) n1(), be.render();
		else {
			wl = !1;
			loop: for (; this.adI() && (wl = !0, n1(), 2 !== aE.a1O) && 0 < this.adD.length;)
				for (aC = this.adE - 2; 0 <= aC; aC--)
					if (n1(), 2 === aE.a1O) break loop;
			wl ? be.render() : (mz(), be.a5m())
		}
	}, this.adI = function() {
		return 0 < this.adD.length && (this.aI3++, bB.pj.ee(this.adD[0]), this.adD.shift(), !0)
	}
}

function adJ() {
	var adK, adL, adM, aI3, adN, eH = 0,
		eZ = bi.eZ;

	function adQ() {
		! function() {
			if (!aE.hq) return;
			if (aE.l7) return;
			if (2 !== aE.a1O)
				if (adN % 7 != 0) adN++;
				else if (aI3 === aE.a5q) {
				if (!adT()) return;
				aX.aCo(aI3), aE.qh.ee()
			} else {
				if (!adT()) return;
				adN++, aI3++, ag.a5j(), ag.n9(!0)
			}
			return 1
		}() && adT() && n1()
	}

	function adR() {
		eH = 0, (aE.hq ? (bi.dq = aX.aCo(aI3 - (adN % 7 == 0 ? 0 : 1) + adN % 7 / 7) || bi.dq, nB) : aN.hc || !bF.a6D ? nB : (bi.dq = !0, n8))()
	}

	function adT() {
		var aC, fS, adU = bC.qf.aX5,
			gB = bC.qf.aX6,
			gD = bC.qf.aX7,
			gF = bC.qf.aX8,
			adV = bC.qf.aX9,
			adW = bC.qf.aXA;
		if (!(adK >= adW.length)) {
			if (adW = adW[adK], adV[adK]) {
				for (fS = adL + adW, aC = adL; aC < fS; aC++) bB.pj.qU(adU[aC], gB[aC], gD[aC], gF[aC]);
				adL += adW, adK++
			} else ++adM >= adW && (adK++, adM = 0);
			return __fx.replay.tick++, 1
		}
		aO.a2h("Replay file smaller than expected."), bF.a3W(!1), aE.a1O = 2
	}
	this.adB = 0, this.di = function() {
		adN = aI3 = adM = adL = adK = 0, __fx.replay.registerHooks({
			advance: () => adQ(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.dq = !0
			},
			isEnded: () => 2 === aE.a1O,
			getTickInterval: () => bi.aCn
		})
	}, this.ee = function() {
		var ab1;
		i.ee(), __fx.replay.frame() ? mz() : bF.aA1() < 1.7 ? 0 === eH ? bi.eZ >= eZ && (ab1 = bi.aCn / bF.aA1(), eZ += ab1 * Math.floor(1 + (bi.eZ - eZ) / ab1), 2 === aE.a1O || aN.hc || !bF.a6D ? mz() : (adQ(), be.render()), eH++) : adR() :
			function() {
				var ab1;
				if (bi.eZ >= eZ)
					if (2 === aE.a1O || aN.hc || !bF.a6D) mz(), eZ = bi.eZ;
					else {
						for (ab1 = bi.aCn / bF.aA1(), 16 < (bi.eZ - eZ) / ab1 && (eZ = bi.eZ - 16 * ab1); bi.eZ >= eZ && 2 !== aE.a1O;) eZ += ab1, adQ();
						be.render()
					} adR()
			}(), n6(), bi.dq && (bi.dq = !1, zQ())
	}, this.a1Z = function() {
		bC.qf.aXA.length - adK <= 2 || aO.a2h("Replay file larger than expected.")
	}
}

function adX() {
	var eH = 0,
		eZ = bi.eZ;
	this.adB = 0, this.ee = function() {
		i.ee(), aE.hq ? nB() : 0 === eH ? bi.eZ >= eZ && (eZ += bi.aCn * Math.floor(1 + (bi.eZ - eZ) / bi.aCn), 2 === aE.a1O || aN.hc ? mz() : (n1(), be.render()), eH++) : ((aN.hc ? nB : (bi.dq = !0, n8))(), eH = 0), n6(), bi.dq && (bi.dq = !1,
			zQ())
	}
}

function dW() {
	this.a1Y = null, this.dq = !1, this.eZ = 0, this.aCn = 56;
	var adY = 0;

	function adZ() {
		bi.eZ = adY = performance.now(), bi.a1Y.ee(), window.requestAnimationFrame(adZ)
	}
	this.di = function() {
		this.a6A(), window.requestAnimationFrame(adZ), this.eZ = performance.now()
	}, this.a62 = function() {
		aE.hb ? (this.a1Y = new adJ, this.a1Y.di()) : aE.l7 ? this.a1Y = new adX : (this.a1Y = new adC, this.a1Y.di())
	}, this.a6A = function() {
		this.a1Y = new adA, this.dq = !0
	}, this.ee = function() {
		this.a1Y.adB++
	}, this.kk = function() {
		return this.a1Y.adB
	}, this.aVK = function() {
		var ea = performance.now();
		ea < adY + 1e3 || (this.eZ = ea, this.a1Y.ee())
	}
}

function cw() {
	var aHP = 0,
		ada = !0;

	function adb(id) {
		id = [L(547), L(548), L(549), L(550)][id];
		aO.a80(id)
	}
	this.ee = function() {
		var ea, a8P;
		bi.eZ < aHP || (aHP = bi.eZ + 3e3, aE.hb) || aE.l7 || bD.go.he(aE.fC) || (ea = new Date, a8P = ea.getUTCSeconds(), ada ? a8P < 43 && (ada = !1) : a8P < 43 || (aHP += 52e3, ada = !0, (a8P = (ea.getUTCMinutes() + 2) % 60) % 10 == 0 ? aE
			.l5 < 7 && adb(0) : a8P % 10 == 5 ? 7 !== aE.l5 && 10 !== aE.l5 || adb(1) : a8P % 10 == 7 ? 8 === aE.l5 && adb(2) : a8P % 10 == 2 && 9 === aE.l5 && adb(3)))
	}
}

function cq() {
	var no, np, o1, o2, adc = 0,
		add = 0;

	function adf() {
		return Math.pow(Math.pow(o1 - no, 2) + Math.pow(o2 - np, 2), .5)
	}

	function ade(e) {
		no = i.l * e.touches[0].clientX, np = i.l * e.touches[0].clientY, o1 = i.l * e.touches[1].clientX, o2 = i.l * e.touches[1].clientY
	}
	this.a2y = function(e) {
		return 1 < e.touches.length ? (add = bi.eZ, adc = 3, ade(e), aM.sb(), !0) : (adc = 0, !1)
	}, this.a2z = function(e) {
		var aJw, il, im;
		return 0 !== aE.a1O && 1 < e.touches.length && (adc = Math.max(adc - 1, 0), aI.o6() && (aJw = adf(), ade(e), e = adf(), il = Math.floor((no + o1) / 2), im = Math.floor((np + o2) / 2), aT.aAS(il, im, Math.max(.125, e) / Math.max(.125,
			aJw)), bi.dq = !0), !0)
	}, this.a3M = function() {
		var fZ, fb;
		return !!(adc && (adc = 0, bi.eZ < add + 500)) && (fZ = (no + o1) / 2, fb = (np + o2) / 2, aM.a3G(fZ, fb), aM.click(fZ, fb, !0) && (bi.dq = !0), !0)
	}
}

function d7() {
	this.size = 0, this.eH = 0, this.aD = null, this.di = function(aD) {
		this.eH = 0, this.aD = aD, this.size = aD.length
	}, this.v1 = function() {
		this.aD = null
	}, this.qT = function(size) {
		for (var fu = 0, aD = this.aD, o6 = this.eH + size - 1, aC = this.eH; aC <= o6; aC++) fu |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << o6 - aC;
		return this.eH += size, this.eH > 8 * this.size && console.error("Unwrapper Overflow"), fu
	}, this.aVk = function(size) {
		var fm = size >> 1;
		return (1 << fm) * this.qT(size - fm) + this.qT(fm)
	}, this.aVl = function(adg) {
		return this.size === bG.aVj(adg)
	}, this.aXN = function(yE, adh, adi) {
		var gv = this.qT(yE);
		if (!gv) return null;
		for (var yE = Math.max(gv, adi), h = new(adh <= 8 ? Uint8Array : adh <= 16 ? Uint16Array : Uint32Array)(yE), aC = 0; aC < gv; aC++) h[aC] = this.qT(adh);
		adi = h[gv - 1];
		return adi && h.fill(adi, gv), h
	}, this.aXO = function(yE, adj, adi) {
		var gv = this.qT(yE);
		if (!gv) return null;
		for (var yE = Math.max(gv, adi), h = new Array(yE), aC = 0; aC < gv; aC++) h[aC] = this.aXL(adj);
		return h.fill(h[gv - 1], gv), h
	}, this.aXL = function(yE) {
		return bJ.xL.xP(this.qT(yE))
	}, this.aXM = function() {
		var r2 = bI.te.tf(bI.te.tg(this.qT(30))),
			r2 = bD.sK.a5e(r2, "_", "/");
		r2 = bD.sK.a5e(r2, "-", "+");
		for (var adk = "";
			(r2.length + adk.length) % 4;) adk += "=";
		r2 = "data:image/png;base64," + r2 + adk;
		var aJY = new Image;
		aJY.onload = function() {
			bC.aKV.aKW(aJY), aJY.onload = null, aJY = null
		}, aJY.src = r2
	}
}

function dQ() {
	this.aYP = 0, this.aYQ = 0, this.aYL = 0, this.aYM = 0, this.aYN = 0, this.aYO = 0, this.aDN = [0, 0, 0, 0], this.o5 = function() {
		this.aYP = aT.zS(), this.aYQ = aT.zT(), this.aYL = -this.aYP, this.aYM = -this.aYQ, this.aYN = i.j / ie, this.aYO = i.k / ie, this.aDN[0] = Math.floor(this.aYL), this.aDN[1] = Math.floor(this.aYM), this.aDN[2] = Math.floor(this.aDN[0] +
			this.aYN + 1), this.aDN[3] = Math.floor(this.aDN[1] + this.aYO + 1), be.aDL = !0
	}
}

function cr() {
	var a96, na;
	this.di = function() {
		a96 = 1, na = 0
	}, this.ee = function() {
		0 < a96 && (na = 0 === na ? bi.eZ + 16 : na, a96 = (a96 -= .001 * (bi.eZ - na)) < 0 ? 0 : a96, na = bi.eZ, bi.dq = !0)
	}, this.vw = function() {
		0 < a96 && (vx.fillStyle = "rgba(0,0,0," + a96 + ")", vx.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eH = 0, this.aD = null, this.di = function(aD) {
		this.eH = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(adg) {
		return this.di(new Uint8Array(this.aVj(adg))), this.aD
	}, this.v1 = function() {
		this.aD = null
	}, this.a9 = function(size, a8U) {
		for (var aD = this.aD, o6 = this.eH + size - 1, aC = this.eH; aC <= o6; aC++) aD[aC >> 3] |= (a8U >> o6 - aC & 1) << 7 - (7 & aC);
		this.eH += size, this.eH > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aVi = function(size, a8U) {
		var fm = size >> 1,
			fV = 1 << fm;
		this.a9(size - fm, bO.ft(a8U, fV)), this.a9(fm, a8U % fV)
	}, this.adn = function(size) {
		for (var aD = this.aD, o6 = this.eH + size, aC = this.eH; aC < o6; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aVj = function(adg) {
		return adg + 7 >> 3
	}, this.ado = function(h, k3, o6, adp) {
		for (var aC = k3; aC < o6; aC++) this.a9(adp, h[aC])
	}
}

function d6() {
	this.di = function() {
		this.h = [], this.eH = 0
	}, this.aW6 = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(adq, value) {
		for (var h = this.h, o6 = this.eH + adq - 1, adr = 1 + (o6 >> 3); h.length < adr;) h.push(0);
		for (var aC = this.eH; aC <= o6; aC++) h[aC >> 3] |= (value >> o6 - aC & 1) << 7 - (7 & aC);
		this.eH += adq
	}, this.dp = function(h, yE, adh) {
		var ads = bD.rT.a48(h);
		this.a9(yE, ads);
		for (var aC = 0; aC < ads; aC++) this.a9(adh, h[aC])
	}, this.aXf = function(h, yE, adj) {
		var ads = bD.rT.a48(h);
		this.a9(yE, ads);
		for (var aC = 0; aC < ads; aC++) this.aXd(h[aC], adj)
	}, this.aXd = function(r2, yE) {
		var fS = r2.length;
		this.a9(yE, fS);
		for (var aC = 0; aC < fS; aC++) this.a9(16, r2.charCodeAt(aC))
	}, this.aXe = function(a4E) {
		var adt = (a4E = a4E.toDataURL()).split(",");
		if (adt.length < 2) console.log("error 266");
		else {
			a4E = bD.sK.a5e(a4E = adt[adt.length - 1], "/", "_"), a4E = bD.sK.a5e(a4E, "\\+", "-");
			var a4E = bD.sK.a5e(a4E, "=", ""),
				xY = bJ.te.xV(a4E),
				fS = xY.length;
			this.a9(30, fS);
			for (var aC = 0; aC < fS; aC++) this.a9(6, xY[aC])
		}
	}
}
a(), self.aiCommand746 = function(fu) {
	0 === fu ? bw() : 1 !== fu || !a1 || 1 !== a1.id || a1.e1 < 14 || bM.fv()
}, setTimeout(bw, 1e4), window.onload = function() {
	bw()
};