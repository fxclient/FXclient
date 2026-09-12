var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, gI, gJ, gK, gL, gM, gN, gO, gP, gQ, gR, gS, gT, gU,
	ie, j6, j7, aA4, mO, kY, a3g, wm, a0J, aE9, a6p, a6q, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "span", "1em", "0.5em", "email",
		"Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave", "keydown",
		"inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Player ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
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
	this.dw = 1761;
	this.rVersion = 25, this.e0 = 0, this.dk = function() {
		this.e1 = 2;
		this.o = "2.16.48", this.e3 = "12 Sep 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e4 = 0 <= this.hostname.indexOf("github.io"), this.e5 =
			0 <= this.hostname.indexOf("game.territorial.io"), this.aB = function() {
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
		return !eY && !bX.eW() && (0 === a1.id ? bX.eS.show() : !(bi.eZ < eX) && (eY = 1 === a1.id ? 72e4 : 108e4, eX = bi.eZ + eY, 2 === m.e1) && a1.a2.eb(Math.floor(eY)))
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
	var eo, em = null,
		en = 0,
		ep = "",
		eq = 0,
		es = (this.er = 0, null);

	function ey() {
		null !== es && null !== em && (en = 0, window.turnstile.remove(em), es.remove(), em = es = null)
	}

	function ev(f2) {
		return "" !== ep && eq + 1e3 * (300 - f2) > performance.now()
	}
	this.dk = function() {
		var et;
		m.e0 || !m.aA && !m.e4 ? (console.log("turnstile cannot be loaded"), this.er = -1) : ((et = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", et.async = !0, et.onload =
			function() {
				bX.turnstile.er = 1, console.log("turnstile onload"), bX.turnstile.eu()
			}, et.onerror = function() {
				bX.turnstile.er = -1, console.log("turnstile onerror")
			}, document.head.appendChild(et))
	}, this.eu = function() {
		return !(1 !== this.er || (window.turnstile ? en ? (console.log("turnstile error 246"), 1) : ev(30) || (ep = "", en = 1, eo = performance.now(), (es = document.createElement("div")).style.position = "fixed", es.style.left = "0", es.style
			.top = "0", es.style.zIndex = "100", document.body.appendChild(es), console.log("turnstile render"), em = window.turnstile.render(es, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(ew) {
					console.log("turnstile success " + Math.floor(performance.now() - eo)), ep = ew, eq = performance.now(), bX.turnstile.ex(), ey()
				},
				"expired-callback": function() {
					ey(), console.log("turnstile expired " + Math.floor(performance.now() - eo))
				},
				"error-callback": function() {
					ey(), console.log("turnstile callback error " + Math.floor(performance.now() - eo)), bX.turnstile.er = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		ey()
	}, this.ex = function() {
		ev(8) && bq.ez && b1.z.ef(b1.z.f0) && (console.log("sendTokenToLobby success"), b1.eg.f1(ep), ep = "")
	}
}

function cb() {
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

function dD() {
	this.h = new Array(4), this.fw = new Uint16Array(2), this.fx = new Uint16Array(2), this.fy = new Int32Array(2), this.fz = new Uint32Array(2), this.g0 = new Uint32Array(2), this.g1 = new Uint8Array(4), this.g2 = new Uint8Array(4), this.fT =
		new Uint32Array(4), this.g3 = new Uint32Array(5), this.fO = new Uint32Array(8), this.g4 = new Uint32Array(8), this.g5 = new Uint16Array(16), this.g6 = new Uint16Array(512), this.g7 = new Uint16Array(512), this.g8 = new Uint16Array(512), this
		.g9 = new Uint16Array(0), this.dk = function() {
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

function dI() {
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
		var aC, eH, fV = iR.data;
		for (aC = fV.length - 4; 0 <= aC; aC -= 4)
			if (eH = fV[aC], iQ <= eH) return Math.floor(aC / (4 * iO));
		return -1
	}(iU.getImageData(0, 0, iO, iO))) && (iT = (canvas - .5 * iO + .1 * size) / size), Math.max(iT, 0)
}

function dB() {
	this.iW = new Int16Array(4), this.iX = new Int16Array(4), this.iY = null, this.dk = function() {
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

function cp() {
	this.jR = new jS, this.jT = new jU, this.jV = new jW, this.performance = new jX, this.jY = new jZ, this.ja = new jb, this.jc = new jd, this.je = new jf, this.jg = new jh, this.dk = function() {
		this.jR.dk(), this.jV.dk(), this.performance.dk(), this.jY.dk(), this.ja.dk()
	}, this.ee = function() {
		this.performance.ee(), this.jR.ee(), this.jV.ji()
	}
}

function jZ() {
	var jj, jl = new Uint16Array(8);

	function jt(size, player) {
		for (var aC = ah.gu[player].length - 1; size <= aC; aC--) ad.jz(ah.gu[player][aC], player)
	}
	this.dk = function() {
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
	this.kP = new Uint8Array(aE.fP), this.dk = function() {
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

function c9() {
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
	], this.l3 = [100, 150, 250, 400, 600, 1e3, 100], this.dl = function() {
		this.ky = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dk = function() {
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
	this.dk = function() {
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
		for (var fr = ah.fr[player], fS = fr.length, fs = Math.max(bO.ft(fS, 12), 1), fU = ad.fU, eH = az.k4(fS), aC = 0; aC < fS; aC += fs)
			for (var fH = fr[(aC + eH) % fS], fV = 3; 0 <= fV; fV--) {
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
					for (var f6 = ap.jR.buffer[az.k4(fS)] << 2, fU = ad.fU, fV = az.k4(4);;) {
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
			for (var li = Math.min(fS, ap.performance.m1 ? fS : 10), buffer = ap.jR.buffer, k3 = bO.ft(az.random() * fS, az.value(100)), e = k3 + li, m2 = az.jQ(ah.jL[player], ah.jM[player]), m3 = az.jQ(ah.jN[player], ah.jO[player]),
					lk = -1, fi = bP.iz(0, 0, bV.fd, bV.fe), aC = k3; aC < e; aC++) {
				var h1 = aC % fS,
					m4 = bP.fk(m2, m3, buffer[h1]);
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
			}(buffer[lk], m2, m3) : -1
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
	this.m1 = 0, this.dk = function() {
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
	this.lx = 0, this.buffer = new Uint32Array(512), this.dk = function() {
		mQ = mP = 0, this.lx = 0, mT = 0
	}, this.ee = function() {
		if (function() {
				var fS = ap.jR.lx;
				if (0 === fS) return 1;
				var buffer = ap.jR.buffer;
				if (bi.kk() % 35 == 6) {
					for (var aC = fS - 1; 0 <= aC; aC--) ad.fJ(buffer[aC] << 2) || (fS--, buffer[aC] = buffer[fS]);
					ap.jR.lx = fS
				}
				return fS < buffer.length
			}())
			if (mR <= mP) {
				var mX = ap.jR.lx;
				if (mX) {
					if (bi.kk() % 350 != 1) return;
					if (mT !== mX) return void(mT = mX);
					if (!bD.go.kA(mO[0])) return
				} else if (bi.kk() % 12 != 8) return;
				bD.go.mY() || ap.jR.dk()
			} else {
				var aC, j = bV.fd,
					mZ = j - 2,
					mX = mZ * (bV.fe - 2),
					ma = mR,
					buffer = ap.jR.buffer,
					li = ap.jR.lx,
					mb = buffer.length,
					h1 = Math.min(mQ + ma * ((1 + 19 * ap.performance.m1) * mS), mX);
				for (aC = mQ; aC < h1; aC += ma) {
					var f6 = 4 * (aC % mZ + (bO.ft(aC, mZ) + 1) * j + 1);
					if (ad.fJ(f6) && (buffer[li] = f6 >> 2, ++li === mb)) {
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
		.ee(), u.ee(), bX.eS.ee(), bC.ee(), bi.ee()
}

function n6() {
	aI.ee(), aY.ee(), aR.ee(), aw.ee(), bF.ee(), b8.ee(), b9.ee(), ay.n7()
}

function n8() {
	aW.n9(!1), aQ.n9(), aX.n9(!1), aV.n9(), aS.n9(), ax.n9(), ag.n9(!1), bk.nA()
}

function nB() {
	ag.n9(!1) && (bi.ds = !0), b1.z.ee()
}

function cA() {
	var nC, nD, nE;

	function nG(nI) {
		for (var aC = nC - 1; 0 <= aC; aC--) 0 === nE[nD[aC]] && ah.hG[nD[aC]] >= nI && gW(nD[aC])
	}

	function nF(player) {
		var ea;
		64 === nE[player] ? nE[player] = 6 : (ea = ah.hG[player], nE[player] = ea < 1e3 ? 3 : ea < 1e4 ? 2 : ea < 6e4 ? 1 : 0)
	}
	this.dk = function() {
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

function cB() {
	var size, kb;
	this.dk = function() {
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

function cC() {
	var nP, nQ, nR, nS, nT, nU, nV, nW, nX, nY, nZ, na, nb, nc = !1,
		nd = !1;

	function ne(nf) {
		na = bi.eZ, nR = nS = nQ = 0, nT = (nb = 33) / nf, nP = 1 / (nf / nb / 4), nU = (i.j / 2 + j6) / ie, nV = (i.k / 2 + j7) / ie, nW = ie
	}

	function nm(aC) {
		var no; - 1 !== aC && (aC = bP.jD(bQ.z.ms[aC]), no = bP.fa(aC) - 15, aC = bP.fc(aC) - 15, aI.ni(no, aC, 29 + no, 29 + aC))
	}

	function nz(eM) {
		Math.abs(Math.log(nZ / nW)) < .125 && (nZ = eM * nW)
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
		nc = !1, ny(no, np, o1, o2), ie = nZ, aT.o3(nX, i.j / 2), aT.o4(nY, i.k / 2), bd.o5(), bi.ds = !0
	}, this.o6 = function() {
		return !(nc && nd || (nc = !1))
	}, this.ee = function() {
		var o9, oA, fV, oD;
		nc && (nQ < .5 ? nS < nT && (nS += nT * nP, nR = nQ) : 1 - nR < nQ && (nS = (nS -= nT * nP) < nT * nP ? nT * nP : nS), na = na >= bi.eZ ? bi.eZ - 1 : na, fV = bi.eZ - na, nQ = 1e3 < fV || 1 < (nQ += nS * fV / nb) ? 1 : nQ, na = bi.eZ,
			fV = ie, o9 = j6, oA = j7, fV = (ie = nW * Math.pow(nZ / nW, nQ)) / fV, oD = 1 - (nW * Math.pow(nZ / nW, 1 - nQ) - nW) / (nZ - nW), aT.o3(nU + oD * (nX - nU), i.j / 2), aT.o4(nV + oD * (nY - nV), i.k / 2), ag.zoom(fV, (o9 * fV -
				j6) / (1 - fV), (oA * fV - j7) / (1 - fV)), bd.o5(), 1 <= nQ && (nc = !1, be.oE = !0), bi.ds = !0)
	}
}

function di(oF) {
	this.oG = -1, this.pow = -1;
	var oH = oF || {},
		oI = this,
		oJ = null,
		oK = null,
		oL = null,
		oM = null,
		oN = null,
		oO = [],
		oP = 0,
		oQ = null,
		oR = null,
		oS = null,
		oT = !1,
		oU = null,
		oX = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function oY(oZ, oa, className) {
		oZ = document.createElement(oZ);
		return className && (oZ.className = className), oa && oa.appendChild(oZ), oZ
	}

	function oc(el, oa, action) {
		oa = oY("button", oa);
		return oa.type = "button", oa.textContent = el, oa.addEventListener("click", action), oa
	}

	function od(oa) {
		oa = oY("canvas", oa);
		return oa.width = oa.height = 128, oa
	}

	function ol(canvas, om) {
		for (var canvas = canvas.getContext("2d"), data = (oR || (oR = canvas.createImageData(128, 128), oS = new Uint32Array(oR.data.buffer)), om), og = oS, oh = 0, position = 0, color = 0; position < 16384; oh += 6, color ^= 1) {
			for (var eI = oh >> 3, o6 = position + ((data[eI] << 8 | data[1 + eI]) >> 10 - (7 & oh) & 63), ok = color ? oX : 4294967295, aC = position; aC < o6; aC++) og[aC] = ok;
			position = o6
		}
		canvas.putImageData(oR, 0, 0)
	}

	function oo() {
		if (oJ) {
			oJ.setAttribute("aria-busy", String(oT)), oN.disabled = oT, oM.disabled = oT || !oP;
			for (var aC = 0; aC < oO.length; aC++) oO[aC].disabled = oT, oO[aC].setAttribute("aria-pressed", String(Boolean(oP & 1 << aC)))
		}
	}

	function oq(event) {
		var os, or;
		"Escape" === event.key && (event.preventDefault(), oI.close()), "Tab" === event.key && oJ && (os = (or = oJ.querySelectorAll("button:not(:disabled)"))[0], or = or[or.length - 1], event.shiftKey && document.activeElement === os ? (event
			.preventDefault(), or.focus()) : event.shiftKey || document.activeElement !== or || (event.preventDefault(), os.focus()))
	}

	function ou() {
		oU = document.activeElement, (oJ = oY("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oJ.setAttribute("aria-modal", "true"), oJ.setAttribute("aria-label", "Select all images matching the reference");
		oY("style", oJ).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .4);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var ov = oY("div", oJ, "captcha-reference-row");
		oY("span", ov, "captcha-reference-label").textContent = "Find:", (oL = od(ov)).className = "captcha-reference", oL.setAttribute("aria-label", "Reference image"), oK = oY("div", oJ, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) oO.push(function(eI) {
			var button = oc("", oK, function() {
				oT || (oP ^= 1 << eI, oo())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eI + 1)), button.setAttribute("aria-pressed", "false"), od(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var ov = oY("div", oJ, "captcha-actions"),
			oy = oc("Close", ov, function() {
				oI.close()
			});
		oN = oc("Reload", ov, oz), oM = oc("Verify", ov, p0), oJ.addEventListener("keydown", oq), oI.resize(), oo(), oy.focus()
	}

	function oz() {
		oT || (oI.close(), b1.eg.p1(0, 0, bw.oG, bw.pow))
	}

	function p0() {
		var p2, p3;
		!oT && oP && (p2 = oP, p3 = oQ, oI.close(), b1.eg.p1(p2, p3, bw.oG, bw.pow))
	}
	this.show = function(p4, p3, oG, pow) {
		this.oG = oG, this.pow = pow, oQ = p3, oJ || ou(), ol(oL, p4[0]);
		for (var iK = 0; iK < 16; iK++) ol(oO[iK].firstChild, p4[iK + 1]);
		oP = 0, oT = !1, oo(), "function" == typeof oH.p5 && oH.p5()
	}, this.resize = function() {
		var size;
		oJ && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oJ.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oJ) {
			for (var p6 = oJ.querySelectorAll("canvas"), aC = 0; aC < p6.length; aC++) p6[aC].width = p6[aC].height = 0;
			oJ.remove(), oJ = oK = oL = oM = oN = null, oR = oS = oQ = null, oP = 0, oT = !(oO = []), oU && document.body.contains(oU) && oU.focus(), oU = null, "function" == typeof oH.p7 && oH.p7()
		}
	}
}

function c4() {
	var ej = bD.color;
	this.p8 = ej.p9(0, 0, 0), this.pA = ej.pB(0, 0, 0, .7), this.pC = ej.pB(0, 0, 0, .5), this.pD = ej.pB(0, 0, 0, .85), this.pE = ej.pB(0, 0, 0, .75), this.pF = ej.pB(0, 0, 0, .6), this.pG = ej.pB(0, 0, 0, .35), this.pH = ej.p9(255, 255, 255), this
		.pI = ej.pB(255, 255, 255, .3), this.pJ = ej.pB(255, 255, 255, .6), this.pK = ej.pB(255, 255, 255, .4), this.pL = ej.pB(255, 255, 255, .25), this.pM = ej.pB(255, 255, 255, .85), this.pN = ej.pB(255, 255, 255, .75), this.pO = ej.pB(255, 255,
			255, .15), this.pP = ej.pB(255, 255, 255, .11), this.pQ = ej.p9(128, 128, 128), this.pR = ej.pB(64, 64, 64, .75), this.pS = ej.pB(88, 88, 88, .83), this.pT = ej.pB(60, 60, 60, .85), this.pU = ej.pB(80, 60, 60, .85), this.pV = ej.p9(170,
			170, 170), this.pW = ej.p9(200, 235, 245), this.pX = ej.p9(30, 255, 30), this.pY = ej.p9(0, 200, 0), this.pZ = ej.p9(128, 255, 128), this.pa = ej.pB(10, 65, 10, .75), this.pb = ej.pB(0, 255, 0, .6), this.pc = ej.pB(0, 255, 0, .5), this
		.pd = ej.pB(0, 200, 0, .5), this.pe = ej.pB(0, 100, 0, .75), this.pf = ej.pB(0, 60, 0, .8), this.pg = ej.pB(0, 255, 0, .3), this.ph = ej.pB(0, 180, 0, .6), this.pi = ej.pB(0, 120, 0, .85), this.pj = ej.p9(0, 120, 0), this.pk = ej.pB(0, 70, 0,
			.85), this.pl = ej.p9(190, 230, 190), this.pm = ej.p9(0, 255, 0), this.pn = ej.p9(255, 120, 120), this.po = ej.p9(255, 160, 160), this.pp = ej.p9(255, 70, 70), this.pq = ej.p9(230, 0, 0), this.pr = ej.pB(220, 0, 0, .6), this.ps = ej.pB(
			255, 100, 100, .8), this.pt = ej.pB(100, 0, 0, .85), this.pu = ej.pB(60, 0, 0, .85), this.pv = ej.pB(200, 0, 0, .6), this.pw = ej.pB(120, 0, 0, .85), this.px = ej.p9(255, 70, 10), this.py = ej.p9(230, 190, 190), this.pz = ej.p9(255, 0,
		0), this.q0 = ej.p9(255, 0, 255), this.q1 = ej.pB(60, 0, 60, .85), this.q2 = ej.pB(0, 60, 60, .85), this.q3 = ej.pB(10, 60, 60, .9), this.q4 = ej.pB(0, 96, 96, .75), this.q5 = ej.p9(0, 255, 255), this.q6 = ej.p9(160, 160, 255), this.q7 = ej
		.pB(0, 40, 90, .75), this.q8 = ej.pB(0, 0, 255, .6), this.q9 = ej.p9(200, 200, 255), this.qA = ej.pB(50, 50, 255, .83), this.qB = ej.pB(20, 90, 150, .75), this.qC = ej.pB(10, 10, 120, .75), this.qD = ej.p9(255, 120, 100), this.qE = ej.pB(255,
			255, 0, .5), this.qF = ej.pB(255, 255, 150, .2), this.qG = ej.p9(255, 255, 0), this.qH = ej.p9(255, 255, 200), this.qI = ej.pB(200, 200, 0, .6), this.qJ = ej.pB(140, 120, 0, .75), this.qK = ej.pB(180, 160, 40, .75), this.qL = ej.pB(70,
			50, 20, .85), this.qM = ej.pB(30, 30, 0, .85), this.qN = ej.pB(60, 60, 0, .85), this.qO = ej.p9(255, 255, 100), this.qP = ej.p9(255, 255, 140), this.qQ = ej.pB(255, 140, 0, .75), this.qR = ej.pB(70, 40, 0, .85), this.qS = ej.p9(255, 150,
			0), this.qT = ej.pB(255, 200, 80, .85), this.qU = ej.pB(0, 0, 0, 0), this.qV = ej.pB(255, 255, 255, 0), this.qW = ej.pB(254, 254, 254, 0)
}

function d4() {
	this.hs = new qX, this.go = new qY, this.qZ = new qa, this.qb = new qc, this.kp = new qd
}

function qX() {
	this.qe = 1, this.ht = function(fE) {
		aE.l7 ? bB.qZ.ht(aE.fC, fE) : b1.qf.qg(fE)
	}, this.hz = function(j5, jw) {
		this.qe && (this.qe = 0, bm.qh.qi(182, j5)), aE.l7 ? bB.qZ.hz(aE.fC, j5, jw) : b1.qf.qj(j5, jw)
	}, this.qk = function(j5, ql) {
		aE.l7 ? bB.qZ.qm(aE.fC, j5, ql) : b1.qf.qn(j5, ql)
	}, this.i4 = function(j5, fE) {
		fE = (fE << 3) + bR.g4[6];
		aE.l7 ? bB.qZ.i4(aE.fC, j5, fE) : bQ.mt.mu(aE.fC) && b1.qf.qp(j5, fE)
	}, this.i7 = function(j5) {
		849 === j5 && (j5 = 850);
		var nl = bR.g4[3];
		aE.l7 ? bB.qZ.i7(aE.fC, j5, nl) : bQ.i5.qq(aE.fC, nl) && b1.qf.qr(j5, nl)
	}, this.qs = function(nl) {
		aE.l7 ? bB.qZ.qs(aE.fC, nl) : b1.qf.qr(849, nl)
	}, this.qt = function(jw) {
		aE.l7 ? bB.qZ.qt(aE.fC, jw) : b1.qf.qu(jw)
	}, this.qv = function(qw) {
		aE.l7 ? bB.qZ.qx(aE.fC, qw) : b1.qf.qy(qw)
	}, this.iG = function(qz) {
		aE.l7 ? bB.qZ.iG(aE.fC, qz) : b1.qf.r0(qz)
	}, this.r1 = function() {
		aE.l7 ? bB.qZ.r1(aE.fC) : b1.qf.r2()
	}, this.iD = function() {
		aE.l7 ? bB.qZ.iD(aE.fC) : b1.qf.qu(513)
	}, this.hv = function(j5, fE, jw) {
		aE.l7 ? bB.qZ.hv(aE.fC, j5, fE, jw) : b1.qf.r3(j5, fE, jw)
	}
}

function qd() {
	this.kq = function(player, ql, iB) {
		bD.go.r4(player, iB, ql) && (af.qk(player, ql), !bD.go.kA(ql)) && ap.ja.kP[ql] && ap.ja.kP[ql]--
	}, this.r5 = function(player, ql, iB) {
		bD.go.r6(iB, ql) ? ao.ei(ql, bR.fz[0]) && (bt.r7(player, ql, bR.fz[0], 1), bD.go.gr(ql, bR.fz[0]), bg.r8(player, ql), ag.r9(ql, bR.fz[0])) : bg.gs(player, iB, 12)
	}
}

function qY() {
	this.rA = function(qw, player) {
		aO.qv(aE.fC, player, qw), b1.qf.rB(qw, player)
	}, this.rC = function(player) {
		aO.rD(player, 0), b1.qf.rE(player)
	}, this.rF = function(rG, player) {
		aO.rH(rG, player), b1.qf.rI(rG, player)
	}, this.rJ = function() {
		aE.l7 || aE.hb || b1.rK.rJ()
	}
}

function qc() {
	this.ee = function(aD) {
		var id, gB, o6;
		for (bK.dk(aD), bK.eI += 2, o6 = 8 * bK.size; bK.eI + 8 <= o6;) id = bK.rL(4), gB = bK.rL(9), 0 === id ? this.rM(id, gB, bK.rL(22)) : 1 === id ? this.rM(id, gB, bK.rL(10), bK.rL(10)) : 2 === id ? this.rM(id, gB, bK.rL(10), bK.rL(9)) :
			3 === id ? this.rM(id, gB, bK.rL(10), bK.rL(27)) : 4 === id ? this.rM(id, gB, bK.rL(10), bK.rL(16)) : 5 === id || 6 === id ? this.rM(id, gB, bK.rL(10)) : 7 === id ? this.rM(id, gB, bK.rL(1)) : 10 === id ? this.rM(id, gB, bK.rL(20), bK
				.rL(22)) : this.rM(id, gB)
	}, this.rN = [], this.rO = function() {
		for (var rQ = 0, rR = 0, rS = 0, rT = 0, rU = 0, rV = 0, aC = 0; aC < 512; aC++) rQ += ah.nN[aC], rR += ah.hG[aC], rS += ah.hU[aC], rT += bQ.z.kr[aC];
		rU += bQ.z.md, rV += am.lJ, this.rN.push(rS % 1073741824 * 4 + (rQ + rR + rT + rU + rV) % 4)
	}, this.rM = function(id, gB, gD, gF) {
		0 === id ? bB.qZ.ht(gB, gD) : 1 === id ? bB.qZ.hz(gB, gD, gF) : 2 === id ? bB.qZ.qm(gB, gD, gF) : 3 === id ? bB.qZ.i4(gB, gD, gF) : 4 === id ? bB.qZ.i7(gB, gD, gF) : 5 === id ? bB.qZ.qt(gB, gD) : 6 === id ? bB.qZ.qx(gB, gD) : 7 === id ?
			bB.qZ.iG(gB, gD) : 8 === id ? bB.qZ.r1(gB) : 9 === id ? bB.qZ.rW(gB) : 10 === id && bB.qZ.hv(gB, gD >> 10, gF, gD % 1024)
	}
}

function qa() {
	this.ht = function(player, fE) {
		bD.go.hd(0) && bD.go.he(player) && bP.jA(fE) && (bC.rX.rY(0, player, fE), aE.rZ.ei(player, fE))
	}, this.hz = function(player, j5, jw) {
		bD.go.hd(1) && bD.go.he(player) && bD.go.ra(player, jw) && bD.go.mv(player, j5, 12, 0) && bD.go.rb(player, jw) && ((jw = ae.k8(player, bR.fO[0])) || ae.kR(player)) && (ah.rc[player]++, bC.rX.rY(1, player, j5, bR.fO[0]), ap.jY.jm(player,
			jw)) && (bD.go.mx(player), bg.rd(player, j5), ap.jY.js(player))
	}, this.qm = function(player, j5, ql) {
		bD.go.hd(1) && bD.go.he(player) && aE.iM && bD.go.ra(player, ql) && bD.go.re(player, ql) && bD.go.r4(player, bD.go.j4(player, j5), ql) && ao.ei(ql, bR.fz[0]) && (bC.rX.rY(2, player, j5, ql), af.qk(player, ql))
	}, this.i4 = function(player, j5, qo) {
		bR.g4[1] = 7 & qo;
		var fE = qo >> 3;
		bD.go.hd(1) && bD.go.he(player) && bP.jA(fE) && bQ.mt.mu(player) && bQ.mt.rf(fE) && bD.go.mv(player, j5, 32, 0) && bQ.la.rg(player, fE, 1) && (bg.rh(player), bC.rX.rY(3, player, j5, qo), bD.go.mx(player), bo.ri.i4(player), bQ.z.my(
			player))
	}, this.i7 = function(player, j5, nl) {
		849 === j5 ? this.qs(player, nl) : bD.go.hd(1) && bD.go.he(player) && bD.go.mv(player, j5, 32, 0) && bQ.i5.rj(player, nl) && (bg.rh(player), bC.rX.rY(4, player, j5, nl), bD.go.mx(player), bo.ri.i7(player), bQ.z.my(player))
	}, this.qs = function(player, nl) {
		bD.go.hd(1) && bD.go.he(player) && bQ.rk.ee(player, nl) && bC.rX.rY(4, player, 849, nl)
	}, this.qt = function(player, jw) {
		513 === jw ? this.iD(player) : bD.go.hd(1) && bD.go.he(player) && (jw = Math.min(jw, aE.fP), ae.k8(player, jw)) && (bC.rX.rY(5, player, jw), ae.rl(player, jw))
	}, this.qx = function(player, qw) {
		(bD.go.hd(1) || bD.go.hd(2)) && bD.go.he(player) && (qw = bO.ia(qw, 0, 1023), bC.rX.rY(6, player, qw), ag.rm(player, 0, qw))
	}, this.iG = function(player, qz) {
		ax.iF(player) && (bC.rX.rY(7, player, qz), ax.rn(player, qz))
	}, this.r1 = function(player) {
		(bD.go.hd(0) || bD.go.hd(1)) && bD.go.he(player) && aN.ro(player) && (bC.rX.rY(8, player), bT.r1(player))
	}, this.rW = function(player) {
		bC.rX.rY(9, player), bT.rW(player)
	}, this.iD = function(player) {
		ax.iH(player) && (bC.rX.rY(5, player, 513), ax.iD(player))
	}, this.hv = function(player, j5, fE, jw) {
		bD.go.hd(1) && bD.go.he(player) && bD.go.ra(player, jw) && bD.go.rb(player, jw) && bP.jA(fE) && an.f3.fM(player, fE) && (ae.k8(player, bR.fO[0]) || ae.kR(player)) && (bC.rX.rY(10, player, (j5 << 10) + bR.fO[0], fE), jw = bD.go.lz(player,
			j5), ah.gu[player].push(bR.fT[0]), ae.ei(player, jw, bR.fO[0]), aG.ju(player, !0), bg.rp(player))
	}
}

function rq() {
	var rs;
	this.rr = [], this.rs = document.createElement("div"), this.rt = function(ru, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ru, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.rs.appendChild(
			title), title
	}, this.rv = function(ru, marginBottom) {
		var rw = document.createElement("p");
		return rw.textContent = ru, rw.style.fontSize = "0.75em", rw.style.lineHeight = "1.2em", rw.style.marginBottom = marginBottom || "0", this.rs.appendChild(rw), rw
	}, this.rx = function(ru) {
		var ry = document.createElement("p");
		return ry.textContent = ru, ry.style.fontSize = "1em", ry.style.marginBottom = "0", ry.style.whiteSpace = "pre-wrap", ry.style.overflowWrap = "break-word", this.rs.appendChild(ry), ry
	}, this.rz = function(s0, fontSize) {
		var rs = document.createElement("div");
		return rs.innerHTML = s0, rs.style.fontSize = fontSize || "1em", rs.style.lineHeight = "1.2em", this.rs.appendChild(rs), rs
	}, this.s1 = function(s2) {
		for (var s3 = s2.s3, fS = s3.length, aC = 0; aC < fS; aC++) this.rs.appendChild(s3[aC])
	}, this.s4 = function(s5) {
		return this.rr.push(s5), this.rs.appendChild(s5.e), s5
	}, this.resize = function() {
		for (var fS = this.rr.length, aC = 0; aC < fS; aC++) this.rr[aC].resize && this.rr[aC].resize()
	}, (rs = this.rs).style.position = "absolute", rs.style.height = "auto", rs.style.padding = "0.5em"
}

function s6(s7, s8) {
	var rs = document.createElement("div");

	function sG() {
		var aC, sH, k, h1, fV, sC = i.l * rs.offsetWidth,
			sI = new Float64Array(function(sC) {
				var j = .25 * bD.sD.sE(.6) * i.ic;
				return Math.max(Math.floor(sC / j), 1)
			}(sC)),
			sJ = bf.sJ,
			sK = (sC - (sI.length + 1) * bf.gap) / (sI.length * i.l);
		for (sI.fill(sJ), aC = 0; aC < s8.length; aC++) sH = (fV = s8[aC].rs).style, k = bD.sL.min(sI), h1 = sI.indexOf(k), sH.top = bD.sD.sM(k), sH.left = bD.sD.sM(sJ + h1 * (sK + sJ)), sH.width = bD.sD.sM(sK), bD.sD.sN(fV, 5), sI[h1] += fV
			.offsetHeight + 3 * sJ;
		rs.style.height = bD.sD.sM(bD.sL.max(sI) - 2 * sJ)
	}
	this.s9 = rs, this.sA = s8, this.resize = function() {
		var aC;
		for (aC = 0; aC < s8.length; aC++) s8[aC].resize();
		sG(), sG()
	}, rs.style.width = "100%", rs.style.maxWidth = "100%", s7.style.lineHeight = "1.5em", s7.style.overflowX = "hidden", s7.style.overflowY = "auto";
	for (var aC = 0; aC < s8.length; aC++) rs.appendChild(s8[aC].rs);
	s7.appendChild(rs)
}

function x(sO, sP, sQ, sR, sS) {
	var self, sT = document.createElement("button");

	function sa() {
		var sg;
		bM.sf() || (sg = bD.color.sh(sQ), !1 !== sR && 0 < sg[0] && sg[0] < 255 && sg[0] === sg[1] && sg[0] === sg[2]) || (128 < sg[0] && 128 < sg[1] && 128 < sg[2] ? sT.style.backgroundColor = bD.color.si(sQ, -50) : sT.style.backgroundColor = bD
			.color.si(sQ, sg[3] && sg[3] < 120 ? 150 : 50))
	}

	function sZ() {
		if (sR) {
			var sg = bD.color.sh(sQ);
			if (sg[0] === sg[1] && sg[0] === sg[2]) return
		}
		sP && ((sg = sP(this)) ? 2 === sg && sa() : sk(this))
	}

	function sc() {
		this.style.backgroundColor = sQ
	}

	function sb() {
		sk(this)
	}

	function sk(fV) {
		fV.style.backgroundColor = sQ, fV.blur()
	}
	this.button = sT, this.sU = sP, this.sV = sQ, this.sY = function(sd) {
		sd = 1.1 - Math.min(.01 * sO.length, .6) + .2 * sd;
		sT.style.fontSize = sd.toFixed(1) + "em"
	}, this.sX = function(ej) {
		ej ? 1 === ej ? ej = bE.pT : 2 === ej && (sR = 1, ej = bE.pT) : (sR = 0, ej = bE.pD), this.sV = sQ = ej, sT.style.backgroundColor = ej
	}, self = this, sT.innerHTML = sO, sT.style.color = sS ? bE.qG : bE.pH, sT.style.userSelect = "none", sT.style.outline = "none", sT.style.overflowWrap = "break-word", self.sX(sQ), sT.style.border = "none", sT.style.font = "inherit", self.sY(
		0), sT.style.padding = "0em 0.3em", sT.onclick = sZ, sT.addEventListener("mouseover", sa), sT.addEventListener("mouseout", sb), sT.addEventListener("focus", sa), sT.addEventListener("blur", sc)
}

function sl(or, s7) {
	var rs;
	this.resize = function() {
		for (var aC = 0; aC < or.length; aC++) bD.sD.sN(or[aC].button);
		rs.style.gap = rs.style.padding = bD.sD.sM(bf.sJ)
	}, (rs = document.createElement("div")).style.display = "grid", rs.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", rs.style.overflowY = "auto", rs.style.gridAutoRows = "5.3em", rs.style.maxHeight = "100%";
	for (var aC = 0; aC < or.length; aC++) or[aC].sY(1), rs.appendChild(or[aC].button);
	s7.appendChild(rs)
}

function sn(so, sp, sq) {
	this.fZ = 0, this.fb = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sD.sE(sq || .5) * so[1] * i.ic, i.k - 2 * bf.gap), this.j = Math.min(this.k * (so[0] / so[1]), i.j - 2 * bf.gap), this.k = so[1] * this.j / so[0], this.fZ = bf.gap + sp[0] * (i.j - this.j - 2 * bf.gap), this.fb = bf
			.gap + sp[1] * (i.k - this.k - 2 * bf.gap)
	}, this.sr = function() {
		return this.fZ + .5 * this.j
	}
}

function ss(st, su) {
	var t3, self, sv = document.createElement("div"),
		sw = document.createElement("div"),
		sx = document.createElement("div"),
		sy = null,
		t4 = (this.sz = new t0({
			value: "",
			eI: -1
		}, 0, t1, function(e) {
			e.target.value = bD.tB.tC(e.target.value), sy.tA.textContent = 127 - e.target.value.length
		}), 0),
		t5 = 1,
		t6 = 0,
		t7 = 1048575;

	function t1() {
		st(), sy.tA.textContent = 127
	}

	function tL(tK, s5) {
		s5 && (s5.tQ = 1, tK.appendChild(bq.tR.transform(s5)))
	}

	function tO(by) {
		t5 ? sv.scrollTop = sv.scrollHeight : by && (sv.scrollTop = t6)
	}
	this.reset = function(tD) {
			t7 = 1048575, sw.textContent = "", tD || this.nA()
		}, this.nA = function() {
			var tE = bq.z.tF[0],
				tE = bq.z.tH[tE],
				tI = tE.tI,
				fS = tI.length,
				k3 = 1048575 === t7 ? 0 : fS - (tE.tJ - t7 + 1048575) % 1048575;
			if (t7 = tE.tJ, !(fS <= (k3 = Math.max(k3, 0)))) {
				for (var tK = document.createDocumentFragment(), aC = k3; aC < fS; aC++) tL(tK, bq.lc.tM(tI[aC], bq.lc.tN(tI[aC])));
				sw.appendChild(tK), tO()
			}
		}, this.tP = function(s) {
			var tK = document.createDocumentFragment();
			tL(tK, s), sw.appendChild(tK), tO()
		}, this.show = function(s7) {
			s7.appendChild(sv), s7.appendChild(sx), this.resize(s7)
		}, this.tS = function(s7) {
			u.removeChild(s7, sv), u.removeChild(s7, sx)
		}, this.resize = function(s7) {
			t4 = s7 ? s7.offsetHeight : t4;
			var s7 = bD.sD.tU(.04, .75),
				tV = Math.max(s7, t4 - s7),
				tW = i.j / i.l,
				tX = .7 * tW,
				tY = bD.sD.sM(t4 - s7 - tV),
				tV = (sx.style.height = bD.sD.sM(s7), sv.style.height = bD.sD.sM(tV), i.k > i.j || a1.a2.ib() ? (sx.style.top = tY, sv.style.top = bD.sD.sM(t4 - tV), bD.sD.sN(sv, 8)) : (sv.style.top = tY, sx.style.top = bD.sD.sM(t4 - s7), bD.sD.sN(
						sv, 2)), this.sz.e.style.width = bD.sD.sM(tX), this.sz.e.style.fontSize = t3.button.style.fontSize = bD.sD.sM(.5 * s7), bD.sD.sN(this.sz.e, 6), t3.button.style.left = bD.sD.sM(tX), t3.button.style.width = bD.sD.sM(tW - tX),
					.385 * s7);
			a1.a2.ib() && (tV *= .8 - .12 * (i.j > i.k)), sw.style.marginLeft = sw.style.marginRight = bD.sD.sM(.5 * tV), sw.style.fontSize = bD.sD.sM(tV), tO(1)
		}, (self = this).sz.e.t8 = 127, sv.style.position = "absolute", sv.style.left = "0", sv.style.width = "100%", sv.style.overflowX = "hidden", sv.style.overflowY = "auto", sv.style.font = "inherit", sv.style.backgroundColor = bE.pF, sv
		.addEventListener("scroll", function() {
			t6 = sv.scrollTop, t5 = t6 < sv.scrollHeight - sv.clientHeight - 2 ? 0 : 1
		}), sw.style.font = "inherit", sx.style.position = "absolute", sx.style.left = "0", sx.style.width = "100%", self.sz.e.setAttribute("placeholder", L(13)), self.sz.e.style.position = "absolute", self.sz.e.style.top = "0", self.sz.e.style
		.left = "0", self.sz.e.style.height = "100%", self.sz.e.style.backgroundColor = bE.pC, self.sz.e.style.textAlign = "center", (t3 = new x(L(14), t1)).button.top = "0", t3.button.style.position = "absolute", t3.button.style.height = "100%", t3
		.sX(bE.qV), sy = new t9("127", t3.button, 1, 1), sv.appendChild(sw), sx.appendChild(self.sz.e), sx.appendChild(t3.button)
}

function ta(tb, sO, tc) {
	function click() {
		var value = 1 - tb.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sO, void 0 !== tb.eI ? bm.qh.qi(tb.eI, value) : tb.value = value, tc && tc(value)
	}
	var e;
	sO = sO || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (tb.value ? "🟩 " : "⬜ ") + sO, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function td(s7, s0) {
	var rs = document.createElement("div");
	this.s9 = rs, this.resize = function() {
		rs.style.padding = bD.sD.sM(bf.sJ), rs.style.lineHeight = bD.sD.sM(bD.sD.tU(.035))
	}, s7.style.overflowX = "hidden", s7.style.overflowY = "auto", rs.innerHTML = s0, s7.appendChild(rs)
}

function te(tf) {
	var rs = document.createElement("div");
	this.e = rs, this.tg = tf, this.resize = function() {
		for (var fS = tf.length, aC = 1; aC < fS; aC++) bD.sD.sN(tf[aC], 4)
	};
	var aC, fS = tf.length;
	for (rs.style.width = "100%", rs.style.height = "2.7em", rs.style.marginTop = "0.6em", rs.style.border = "inherit", aC = 0; aC < fS; aC++) tf[aC].style.verticalAlign = "top", tf[aC].style.width = (100 / fS).toFixed(2) + "%", tf[aC].style.height =
		"100%", tf[aC].style.fontSize = "0.75em", rs.appendChild(tf[aC])
}

function th(ti, sQ, tj) {
	this.rs = document.createElement("div"), this.or = ti;
	var tk = 0;
	this.resize = function(s7, tm) {
		var fS = ti.length;
		if (!tj)
			for (var aC = 1; aC < fS; aC++) bD.sD.sN(ti[aC].button, 4);
		for (var tn = 0, aC = 0; aC < fS; aC++) tn += ti[aC].button.offsetWidth;
		if (s7 && (tk = s7.offsetWidth), tm && tn < tk)
			for (aC = 0; aC < fS; aC++) ti[aC].button.style.width = (100 * ti[aC].button.offsetWidth / tn).toFixed(2) + "%";
		else
			for (aC = 0; aC < fS; aC++) ti[aC].button.style.width = "auto";
		tm || this.resize(s7, 1)
	};
	var tl = this;
	tl.rs.style.height = tl.rs.style.maxHeight = "100%";
	for (var aC = 0; aC < ti.length; aC++) ti[aC].sX(sQ), ti[aC].button.style.height = "100%", ti[aC].button.style.padding = "0.0em 0.9em", ti[aC].button.style.whiteSpace = "pre", tl.rs.appendChild(ti[aC].button)
}

function tp() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sD.sN(this.e, 8, bE.pQ)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function tq() {
	var tv, tw, tr = document.createElement("div"),
		ts = document.createElement("div"),
		tt = 0,
		tu = 0;
	this.show = function(fZ, fb, ru, tx, ty, ej) {
			if (tt) {
				if (!tx) return;
				this.tS()
			}
			fZ === fb && -1 === fZ ? (fZ = tv, fb = tw) : (tv = fZ, tw = fb);
			var tz = Math.floor(bD.sD.tU(.018)),
				ty = (fZ = Math.max(tz + 2, fZ), ty || (tu = tx), tt = 1, i.j / i.l),
				tx = (tr.style.whiteSpace = "pre", tr.textContent = ru, bD.sD.sN(tr, 5), tr.style.font = bD.sD.u1(0, bD.sD.tU(.015)), tr.style.padding = "0.3em 0.6em", tr.style.left = fZ + "px", tr.style.top = "0px", document.body.appendChild(tr),
					fZ + tr.offsetWidth - ty),
				ru = (0 < tx && (fZ -= tx, fZ = Math.max(tz + 1, fZ), tr.style.left = fZ + "px", fZ < tz + 2) && (tr.style.whiteSpace = "pre-wrap"), tr.offsetHeight);
			tr.style.top = fb - ru + tu * bf.u3 + "px", fZ -= tz, ts.style.backgroundColor = bD.color.p9(ej >> 12 << 2, (ej >> 6 & 63) << 2, (63 & ej) << 2), ts.style.left = fZ + "px", ts.style.top = tr.style.top, ts.style.width = tz + "px", ts.style
				.height = ru + "px", bD.sD.sN(ts, 4), bD.sD.sN(ts, 8), bD.sD.sN(ts, 2), document.body.appendChild(ts)
		}, this.tS = function(u4) {
			if (tt) {
				if (u4 && tu) return 0;
				tt = 0, u.removeChild(document.body, tr), u.removeChild(document.body, ts)
			}
			return 1
		}, tr.style.position = "absolute", tr.style.backgroundColor = bE.pD, tr.style.color = bE.pH, tr.style.pointerEvents = "none", tr.style.zIndex = "5", tr.style.maxWidth = "100%", ts.style.position = "absolute", ts.style.color = bE.pH, ts.style
		.pointerEvents = "none", ts.style.zIndex = "5"
}

function t0(u5, type, u6, u7) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.u8++, e.value = u5.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pH, e.style.backgroundColor = bE.pA, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.u9++
		}), e.addEventListener("blur", function() {
			i.u9--, -1 !== u5.eI && bm.qh.qi(u5.eI, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== u5.eI && bm.qh.qi(u5.eI, e.value), u6 ? u6() : e.blur())
		}), u7 && e.addEventListener("input", function(s5) {
			u7(s5)
		})
}

function uA(s7, data, oF) {
	var fS = data.uB.length,
		uC = document.createElement("div"),
		uD = document.createElement("div"),
		uE = document.createElement("div"),
		uF = new Array(fS),
		s8 = new Array(fS),
		uG = new Array(data.uH.length),
		uI = bD.color.pB(70, 70, 0, .35);

	function si() {
		this.style.backgroundColor = bD.color.si(uI, 160)
	}

	function uP() {
		this.style.backgroundColor = uI
	}

	function sG() {
		var fl;
		for (s7.style.font = bD.sD.u1(0, bD.sD.uY(.026, .5, .03)), aC = 1; aC < uG.length; aC++) bD.sD.sN(uG[aC], 4);
		if (bD.sD.sN(uC, 2), fS) {
			for (var hu, uZ = uC.offsetWidth, ua = uE.offsetWidth, aC = 0; aC < uG.length; aC++) hu = .01 * data.uO[aC] * ua, uG[aC].style.width = (100 * hu / uZ).toFixed(2) + "%";
			var li = data.uB[0].length;
			for (aC = 0; aC < fS; aC++)
				for (bD.sD.sN(uF[aC], 2), fl = 1; fl < li; fl++) bD.sD.sN(s8[aC][fl], 4);
			uD.uJ && (uD.scrollTop = uD.uJ)
		}
	}
	this.resize = function() {
			sG(), sG()
		}, s7.style.display = "flex", s7.style.flexDirection = "column", uD.style.overflowX = "hidden", uD.style.overflowY = "auto", uD.addEventListener("scroll", function() {
			this.uJ = this.scrollTop, oF && oF.uK && (u.z.uL[oF.uK] = this.scrollTop)
		}),
		function() {
			var fV, aC, uB = data.uB,
				li = fS ? uB[0].length : 0;
			for (aC = 0; aC < fS; aC++) {
				uF[aC] = document.createElement("div"), uF[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pB(130, 130, 130, .35) : bE.pG
				}(aC), uF[aC].style.width = "100%", uF[aC].style.display = "flex", s8[aC] = new Array(li);
				for (var fl = 0; fl < li; fl++) s8[aC][fl] = fV = document.createElement("div"), fV.style.display = "flex", fV.style.justifyContent = "center", fV.style.wordBreak = "break-all", fV.style.padding = "0.4em 0em", fV.style.width = data
					.uO[fl] + "%", fV.textContent = uB[aC][fl].fu, 1 === uB[aC][fl].ea && (fV.name = "" + aC, fV.style.color = bE.qG, fV.style.backgroundColor = uI, fV.addEventListener("mouseover", si), fV.addEventListener("mouseout", uP), function(
						fV, uR, uS) {
						2147483647 !== uS && fV.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, uR), bK.dk(bG.aD), this.style.backgroundColor = uI, u.v(8, u.uT, new uU(25, {
								action: 0,
								uR: bI.uV.uW(bI.uV.uX(5)),
								uS: uS
							}))
						})
					}(fV, uB[aC][fl].uR, uB[aC][fl].uS)), uF[aC].appendChild(fV)
			}
			for (uC.style.display = "flex", uC.style.backgroundColor = bD.color.pB(0, 120, 0, .35), aC = 0; aC < uG.length; aC++) uG[aC] = fV = document.createElement("div"), fV.style.display = "flex", fV.style.justifyContent = "center", fV.style
				.wordBreak = "break-all", fV.style.padding = "0.4em 0em", fV.style.width = data.uO[aC] + "%", fV.innerHTML = data.uH[aC], uC.appendChild(fV)
		}();
	for (var aC = 0; aC < fS; aC++) uE.appendChild(uF[aC]);
	uD.appendChild(uE), s7.appendChild(uC), s7.appendChild(uD), oF && oF.uK && (uD.uJ = u.z.uL[oF.uK])
}

function ub() {
	var uf, ug, uc = document.createElement("div"),
		ud = document.createElement("div"),
		ue = document.createElement("div"),
		uE = document.createElement("div"),
		or = [],
		eD = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		uh = [1, 2, 3, 0, 9, 10, 11, 13];

	function uj(aC) {
		u.v(8, 0, new uU(21, {
			ul: uh[aC],
			um: 0,
			un: 10
		}))
	}
	this.show = function() {
			this.qi(u.z.uo), document.body.appendChild(uc)
		}, this.tS = function() {
			u.removeChild(document.body, uc)
		}, this.qi = function(uo) {
			for (var up = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < or.length; aC++) {
				var j = uo[aC];
				uf[up[aC]][1].tA.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, uq = bf.gap,
				k = bD.sD.ur(.085),
				j = Math.min(4 * k, i.j - 2 * uq),
				fS = or.length;
			for (bD.sD.us(uc, uq, i.k - uq - k, j, k), bD.sD.sN(uc), bD.sD.sN(ud, 6), aC = 0; aC < fS - 1; aC++) bD.sD.sN(or[aC].button, 6);
			for (aC = 0; aC < fS; aC++) uf[aC][0].resize(), uf[aC][1].resize();
			for (or[0].fZ = 0, or[0].button.style.left = bD.sD.sM(or[0].fZ), or[0].button.style.width = bD.sD.ut(1.7 * k), aC = 1; aC < fS; aC++) or[aC].fZ = or[aC - 1].fZ + or[aC - 1].button.offsetWidth, or[aC].button.style.left = bD.sD.sM(or[aC]
				.fZ);
			if (!ug) {
				if (!ac.uu()) return;
				(ug = ac.get(14)).style.width = "24%", ug.style.position = "absolute", ud.appendChild(ug)
			}
			ug.style.left = bD.sD.sM(0), ug.style.top = "7%", ue.uv && (ue.scrollLeft = ue.uv)
		}, uc.style.position = "absolute", ud.style.width = "25%", ud.style.height = "100%", ud.style.backgroundColor = bE.pD, ue.style.position = "absolute", ue.style.width = "75%", ue.style.height = "100%", ue.style.backgroundColor = bE.pD, ue
		.style.top = ue.style.right = bD.sD.sM(0), bD.sD.ui(ue), uE.style.height = uE.style.maxHeight = "100%", or.push(new x("", function() {
			uj(0)
		}, bE.q1)), or.push(new x("", function() {
			uj(1)
		}, bE.q2)), or.push(new x("", function() {
			uj(2)
		}, bE.pu)), or.push(new x("", function() {
			uj(3)
		}, bE.pf)), or.push(new x("", function() {
			uj(4)
		}, bE.qR)), or.push(new x("", function() {
			uj(5)
		}, bE.qN)), or.push(new x("", function() {
			uj(6)
		}, bE.qR)), or.push(new x("", function() {
			uj(7)
		}, bE.p8)), uf = new Array(or.length);
	for (var aC = 0; aC < or.length; aC++) or[aC].button.style.position = "absolute", uf[aC] = [new uk(eD[aC], or[aC].button, .25, .45), new uk("", or[aC].button, .53, .84, 1)], or[aC].button.style.height = or[aC].button.style.maxHeight = "100%", or[
		aC].button.top = bD.sD.sM(0), uE.appendChild(or[aC].button);
	ue.appendChild(uE), uc.appendChild(ud), uc.appendChild(ue)
}

function uw(ux, uy, uz, v0, st, su) {
	var v1 = document.createElement("div"),
		v2 = document.createElement("div"),
		v3 = document.createElement("div"),
		v4 = document.createElement("div"),
		v5 = document.createElement("div"),
		v6 = document.createElement("div"),
		v7 = document.createElement("div"),
		v8 = document.createElement("div"),
		v9 = document.createElement("span"),
		vA = document.createElement("div");
	this.vB = new ss(st, su), this.vC = new vD(su), this.vE = [ux, uy, uz, v0], this.vI = function(vJ) {
		vJ = (vJ / 10).toFixed(1) + "%";
		v8.style.width = vJ, v9.innerHTML = vJ
	}, this.vK = function() {
		this.vC.tS(v6), this.vB.show(v6)
	}, this.vL = function() {
		this.vB.tS(v6), this.vC.show(v6)
	}, this.vM = function() {
		return v2
	}, this.show = function() {
		document.body.appendChild(v1)
	}, this.tS = function() {
		u.removeChild(document.body, v1)
	}, this.resize = function(vN) {
		var vO = 1 - .4 * a1.a2.ib() * (i.j > 1.6 * i.k),
			vP = bD.sD.tU(.05 * vO),
			vQ = i.k > i.j,
			vR = bD.sD.tU(.06 * vO + .03 * vQ),
			vS = bD.sD.tU(.08 * vO + .03 * vQ),
			vT = bD.sD.tU(.04 + .02 * vQ),
			vQ = bD.sD.tU(.02 * vO + .01 * vQ),
			vV = bD.sD.tU(.025);
		v1.style.font = bD.sD.u1(0, vV), v5.style.font = bD.sD.u1(0, .9 * vV), vA.style.font = bD.sD.u1(0, .9 * vV), vO < 1 && (vV = bD.sD.u1(0, vO * vV), v3.style.font = vV, v5.style.font = vV, vA.style.font = vV, v7.style.font = vV, v4.style
				.font = vV), v2.style.height = bD.sD.sM(vP), v2.style.font = bD.sD.u1(0, .72 * vP), bD.sD.sN(v2, 2), v3.style.top = bD.sD.sM(vP), v3.style.height = bD.sD.sM(vS), bD.sD.sN(v3, 2), v4.style.font = bD.sD.u1(0, vO * bD.sD.tU(.02)), v4
			.style.top = bD.sD.sM(vP + vS), v4.style.height = bD.sD.sM(vT), bD.sD.sN(v4, 2), v5.style.top = bD.sD.sM(vP + vS + vT), v5.style.height = bD.sD.sM(vR), bD.sD.sN(v5, 2), v6.style.top = bD.sD.sM(vP + vS + vT + vR), v6.style.height = bD
			.sD.sM(i.k / i.l - vP - vS - 2 * vR - vT - vQ), v7.style.top = bD.sD.sM(i.k / i.l - vR - vQ), v7.style.height = bD.sD.sM(vQ), bD.sD.sN(v7, 8), v9.style.font = bD.sD.u1(0, .8 * vQ), vA.style.top = bD.sD.sM(i.k / i.l - vR), vA.style
			.height = bD.sD.sM(vR), bD.sD.sN(vA, 8), ux.resize(v3), uy.resize(v3), uz.resize(v3), v0.resize(v3), vN ? this.vB.resize(v6) : this.vC.resize()
	};
	st = this;
	v1.style.position = "absolute", v1.style.top = "0", v1.style.left = "0", v1.style.width = "100%", v1.style.height = "100%", v1.style.backgroundColor = bE.pG, bM.sf() || (v1.style.backdropFilter = "blur(4px)", v1.style.webkitBackdropFilter =
		"blur(4px)"), v2.style.position = "absolute", v2.style.top = "0", v2.style.left = "0", v2.style.width = "100%", v2.style.display = "flex", v2.style.alignItems = "center";
	for (var h = [v3, v4, v5, vA], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sD.ui(h[aC]);
	v6.style.position = "absolute", v6.style.left = "0", v6.style.width = "100%", v6.style.font = "inherit", v7.style.position = "absolute", v7.style.left = "0", v7.style.width = "100%", v8.style.position = "absolute", v8.style.top = "0", v8.style
		.left = "0", v8.style.height = "100%", v8.style.width = "50%", v8.style.backgroundColor = bE.pd, v9.innerHTML = "", v9.style.position = "absolute", v9.style.top = "50%", v9.style.left = "50%", v9.style.transform = "translate(-50%, -50%)", v2
		.appendChild(function() {
			var vH = document.createElement("h1");
			return vH.textContent = L(24), vH.style.margin = "0 auto 0.15em auto", vH.style.fontFamily = "Arial Black, system-ui", vH.style.fontSize = "inherit", vH.style.fontWeight = "inherit", vH
		}()), v3.appendChild(ux.rs), v4.appendChild(uy.rs), v5.appendChild(uz.rs), v7.appendChild(v8), v7.appendChild(v9), vA.appendChild(v0.rs), v1.appendChild(v2), v1.appendChild(v3), v1.appendChild(v4), v1.appendChild(v5), v1.appendChild(v6), v1
		.appendChild(v7), v1.appendChild(vA), st.vC.show(v6)
}

function vD(su) {
	var v1 = document.createElement("div"),
		v6 = document.createElement("div");
	this.nA = function() {
			v6.textContent = "", bq.vX.vY && bq.vX.tS(1);
			for (var tK = document.createDocumentFragment(), vZ = bq.z.tF[0], va = bq.va.vb[vZ], vc = bq.va.vc[vZ], aC = 0; aC < va.length; aC++) ! function(tK, s5, ve, vZ) {
				var tA = document.createElement("span");
				tA.textContent = (ve ? "🟢 " : "⚪ ") + bq.lc.vf(s5, vZ), tA.style.color = bq.lc.vg(s5.vh), 11 === s5.vh && (tA.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				tA.style.cursor = "pointer", tA.style.margin = "0.2em 0.2em 0.2em 0.2em", tA.style.width = tA.style.maxWidth = 2 === vZ ? "10em" : "9em", tA.style.height = tA.style.maxHeight = "1.4em", tA.style.whiteSpace = "nowrap", tA.style
					.overflow = "hidden", tA.style.textOverflow = "ellipsis", tA.style.font = "inherit", tA.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (ve = __fx.utils.getDuplicateIpHighlightColor(s5, bq.va.vb[vZ],
						"aFC")) && (tA.style.backgroundColor = ve, tA.style.borderRadius = "0.3em");
				bq.lc.vi(s5) && (tA.style.textDecoration = "underline"), s5.vj && (tA.style.textDecorationLine = "underline", tA.style.textDecorationStyle = "dotted");
				tA.onclick = function(e) {
					su(e, s5)
				}, bM.sf() || (tA.onmouseover = function(e) {
					bq.vX.vk(e.target, s5, 1)
				}), tK.appendChild(tA)
			}(tK, va[aC], aC < vc, vZ);
			v6.appendChild(tK)
		}, this.show = function(s7) {
			s7.appendChild(v1)
		}, this.tS = function(s7) {
			u.removeChild(s7, v1)
		}, this.resize = function() {
			v6.style.fontSize = bD.sD.sM(bD.sD.tU(.02, .3))
		}, v1.style.top = "0", v1.style.left = "0", v1.style.width = v1.style.height = "100%", v1.style.overflowX = "hidden", v1.style.overflowY = "auto", v1.style.font = "inherit", v6.style.font = "inherit", v6.style.margin = "0.4em", v1
		.appendChild(v6)
}

function vl(vm) {
	var v1 = document.createElement("div"),
		sx = document.createElement("div"),
		vn = [];

	function sa() {
		bM.sf() || (this.style.backgroundColor = bD.color.si(bE.pD, 50))
	}

	function sb() {
		this.style.backgroundColor = bE.pD
	}
	this.qi = function(vp, vq) {
			vn[2].textContent = vp + 1 + " / " + vq
		}, this.show = function(s5) {
			s5 = bq.lc.tM(s5, bq.lc.tN(s5)), sx.appendChild(bq.tR.transform(s5)), document.body.appendChild(v1)
		}, this.resize = function() {
			var k = bD.sD.tU(.03, .5);
			v1.style.width = 10 * k + "px", v1.style.font = bD.sD.u1(1, .75 * k), bD.sD.sN(v1, 4), sx.style.top = k + "px", sx.style.font = bD.sD.u1(0, .55 * k), bD.sD.sN(sx, 2), v1.style.height = k + sx.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sD.sN(vn[aC], 6), vn[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) vn[aC].style.height = k + "px", bD.sD.sN(vn[aC], 2);
			vn[2].style.width = 4 * k + "px", vn[1].style.left = 2 * k + "px", vn[2].style.left = 4 * k + "px", vn[3].style.left = 8 * k + "px"
		}, this.vr = function() {
			for (var aC = 0; aC < 4; aC++) vn[aC].onclick = null, vn[aC].onmouseover = null, vn[aC].onmouseout = null;
			u.removeChild(document.body, v1), v1 = sx = vn = null
		}, v1.style.position = "absolute", v1.style.color = bE.pH, v1.style.zIndex = "3", v1.style.right = "0", v1.style.top = "0", sx.style.position = "absolute", sx.style.height = "auto", sx.style.color = bE.pH, sx.style.backgroundColor = bE.pD, sx
		.style.left = "0", sx.style.width = "100%", sx.style.overflowWrap = "break-word", v1.appendChild(sx);
	for (var aC = 0; aC < 4; aC++) vn[aC] = document.createElement("div"), vn[aC].style.position = "absolute", vn[aC].style.backgroundColor = bE.pD, vn[aC].style.color = bE.pH, vn[aC].style.top = "0", vn[aC].style.display = "flex", vn[aC].style
		.justifyContent = "center", vn[aC].style.alignItems = "center", vn[aC].style.userSelect = "none", vn[aC].style.outline = "none", vn[aC].style.font = "inherit", 2 !== (vn[aC].vo = aC) && (vn[aC].onclick = vm, vn[aC].onmouseover = sa, vn[aC]
			.onmouseout = sb), v1.appendChild(vn[aC]);
	vn[0].textContent = "◀", vn[1].textContent = "▶", vn[3].textContent = "✖"
}

function vs(vm) {
	var tr = document.createElement("div");

	function sa() {
		bM.sf() || (tr.style.backgroundColor = bD.color.si(bE.pD, 50))
	}

	function sb() {
		tr.style.backgroundColor = bE.pD
	}
	this.qi = function(vq) {
			tr.textContent = vq
		}, this.show = function() {
			document.body.appendChild(tr)
		}, this.resize = function() {
			var k = bD.sD.tU(.03, .5);
			tr.style.width = 2 * k + "px", tr.style.height = k + "px", tr.style.font = bD.sD.u1(1, .75 * k), bD.sD.sN(tr, 4), bD.sD.sN(tr, 2)
		}, this.vr = function() {
			tr.onclick = null, tr.onmouseover = null, tr.onmouseout = null, u.removeChild(document.body, tr), tr = null
		}, tr.style.position = "absolute", sb(), tr.style.color = bE.pH, tr.style.zIndex = "3", tr.style.right = "0", tr.style.top = "0", tr.style.display = "flex", tr.style.justifyContent = "center", tr.style.alignItems = "center", tr.style
		.userSelect = "none", tr.style.outline = "none", tr.onclick = vm, tr.onmouseover = sa, tr.onmouseout = sb
}

function vt(ti) {
	var v1 = document.createElement("div"),
		vu = document.createElement("div"),
		tt = (this.fZ = 0, this.fb = 0);

	function vw() {
		bq.vx.tS()
	}
	this.or = ti, this.show = function(fZ, fb, vz) {
		if (tt) return [0, 0];
		tt = 1, this.fZ = fZ, this.fb = fb,
			function(self, vz) {
				var j = bD.sD.tU(.16, .7),
					k = ti.length * j / 3,
					w1 = i.j / i.l,
					w2 = i.k / i.l,
					o0 = Math.min(1, Math.min(w1 / j, w2 / k));
				j *= o0, k *= o0, vz && (self.fZ += bD.sD.tU(.03, .5)), self.fZ = bO.ia(self.fZ, 0, w1 - j), self.fb = bO.ia(self.fb, 0, w2 - k), vu.style.left = self.fZ + "px", vu.style.top = self.fb + "px", vu.style.width = j + "px", vu.style
					.height = k + "px", vu.style.font = bD.sD.u1(0, .3 * k / ti.length), bD.sD.sN(vu, 5);
				for (var aC = 1; aC < ti.length; aC++) bD.sD.sN(ti[aC].button, 8)
			}(this, vz), document.body.appendChild(v1)
	}, this.tS = function() {
		tt && (tt = 0, v1.removeEventListener("click", vw), u.removeChild(document.body, v1))
	};
	for (var aC = 0; aC < ti.length; aC++) new t9("" + (1 + aC), ti[aC].button, 0, 1);
	v1.style.position = "fixed", v1.style.top = "0", v1.style.left = "0", v1.style.width = "100%", v1.style.height = "100%", v1.style.zIndex = "5", vu.style.position = "absolute",
		function() {
			for (var vy = (100 / ti.length).toFixed(2) + "%", aC = 0; aC < ti.length; aC++) ti[aC].button.style.width = "100%", ti[aC].button.style.height = ti[aC].button.style.maxHeight = vy, ti[aC].button.style.padding = "0.0em 0.9em", vu
				.appendChild(ti[aC].button)
		}(), v1.appendChild(vu), v1.addEventListener("click", vw)
}

function ek() {
	var w3, w4, w5;

	function wC(aC) {
		return bD.color.p9(w4[aC][0], w4[aC][1], w4[aC][2])
	}

	function wI(fl, fm) {
		return bD.color.wR(w4[fl], w4[fm]), wC(fm)
	}

	function wA() {
		w3 && (w3.remove(), w3 = null)
	}
	this.show = function(el, colors, id) {
		0 <= (w5 = id) && b1.z.ef(0) && b1.eg.w6(0, id), el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = el.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			w4 = colors, (w3 = document.createElement("div")).style.position = "fixed", w3.style.top = "0", w3.style.left = "0", w3.style.width = "100%", w3.style.height = "100%", w3.style.backgroundColor = bD.color.pB(w4[0][0], w4[0][1], w4[0][
				2], .6), w3.style.zIndex = "6", w3.onclick = function(e) {
				e.target === w3 && wA()
			},
			function(el) {
				var iO, wB = document.createElement("div");
				wB.style.position = "absolute", wB.style.display = "flex", wB.style.flexDirection = "column", wB.style.top = "50%", wB.style.left = "50%", wB.style.backgroundColor = wC(2), iO = a1.a2.ib() ? bD.sD.wD(i.min) : bD.sD.tU(.4);
				iO = Math.max(iO, 200), wB.style.width = bD.sD.sM(iO), wB.style.height = bD.sD.sM(iO), wB.style.transform = "translate(-50%, -50%)",
					function(wB, iO) {
						var wH = document.createElement("div");
						wH.style.flex = "0 0 10%", wH.style.overflow = "hidden", wH.style.backgroundColor = wC(1), wH.style.color = wI(1, 7), wH.style.font = bD.sD.u1(1, .05 * iO), wH.style.display = "flex", wH.style.alignItems = "center", wH
							.style.justifyContent = "center", wH.innerHTML = L(25), wB.appendChild(wH)
					}(wB, iO),
					function(wB, el, iO) {
						var wJ = document.createElement("div");
						wJ.style.flex = "0 0 70%", wJ.style.overflowY = "auto", wJ.style.overflowX = "hidden", wJ.style.whiteSpace = "pre-wrap", wJ.style.wordWrap = "break-word", wJ.style.padding = bD.sD.sM(.02 * iO), wJ.style.backgroundColor =
							wC(2), wJ.style.color = wI(2, 8), wJ.style.font = bD.sD.u1(0, .07 * iO), wJ.innerHTML = el, wJ.innerHTML = "<style>a { color: inherit; }</style>" + wJ.innerHTML, wB.appendChild(wJ)
					}(wB, el, iO),
					function(wB, iO) {
						var oa = document.createElement("div"),
							wK = (oa.style.display = "flex", oa.style.flexDirection = "row", oa.style.justifyContent = "space-between", oa.style.alignItems = "stretch", oa.style.backgroundColor = wC(3), oa.style.flex = "1", oa.style.padding = bD
								.sD.sM(.01 * iO), oa.style.gap = bD.sD.sM(.01 * iO), document.createElement("div")),
							wL = (wK.style.flex = "0 0 60%", wK.style.height = "100%", new x(L(26, 0, 0, 1), function() {
								wA()
							}, wC(4), !1)),
							wL = (wL.button.style.width = "100%", wL.button.style.height = "100%", wL.button.style.color = wI(4, 9), wL.button.style.font = bD.sD.u1(1, .05 * iO), wK.appendChild(wL.button), document.createElement("div")),
							wN = (wL.style.flex = "0 0 15%", wL.style.height = "100%", wL.style.backgroundColor = wC(5), document.createElement("div")),
							wO = (wN.style.flex = "1", wN.style.height = "100%", new x(L(27), function(e) {
								return bD.sD.wP(e), w5 < 0 || b1.z.ef(0) && (b1.eg.w6(1, w5), w5 = -1), !0
							}, wC(6), !1));
						wO.button.style.width = "100%", wO.button.style.height = "100%", wO.button.style.color = wI(6, 10), wO.button.style.font = bD.sD.u1(1, .035 * iO), wN.appendChild(wO.button), oa.appendChild(wK), oa.appendChild(wL), oa
							.appendChild(wN), wB.appendChild(oa)
					}(wB, iO), w3.appendChild(wB)
			}(el), document.body.appendChild(w3)
	}
}

function wS(u5, wT) {
	this.s3 = [];
	var wU = this.s3;

	function click() {
		for (var aC = 0; aC < wU.length; aC++) wU[aC].textContent = wU[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eI = parseInt(this.name);
		void 0 !== u5.eI && bm.qh.qi(u5.eI, eI), wT && wT(eI)
	}
	for (var wV, fS = u5.oF.length, aC = 0; aC < fS; aC++)(wV = document.createElement("p")).textContent = "⚪ " + u5.oF[aC], wV.style.margin = "0", wV.name = "" + aC, wV.style.cursor = "pointer", wV.style.fontSize = "1em", wV.addEventListener(
		"click", click), wU.push(wV);
	wU[u5.value].textContent = wU[u5.value].textContent.replace("⚪", "🟢")
}

function wW(title, wX, wY) {
	var uc = document.createElement("div"),
		wZ = document.createElement("div"),
		uE = document.createElement("div"),
		wa = document.createElement("div"),
		wb = document.createElement("div");
	this.wc = uE, this.wd = wX, this.show = function() {
			!1 !== wY ? document.body.appendChild(uc) : (document.body.appendChild(wZ), document.body.appendChild(wa))
		}, this.tS = function() {
			!1 !== wY ? u.removeChild(document.body, uc) : (u.removeChild(document.body, wZ), u.removeChild(document.body, wa))
		}, this.wh = function() {
			var tV = bD.sD.tU(.1),
				tT = bD.sD.tU(.08 + .04 * (i.wi < 1), .3);
			return {
				tV: tV,
				tT: tT,
				wj: i.k / i.l - tV - tT
			}
		}, this.resize = function(tm) {
			var fS = wX.length,
				wk = this.wh(),
				tV = wk.tV,
				tT = wk.tT;
			for (wZ.style.height = bD.sD.sM(tV), bD.sD.sN(wZ, 2), wa.style.top = bD.sD.sM(i.k / i.l - tT), wa.style.height = bD.sD.sM(tT), bD.sD.sN(wa, 8), uE.style.top = bD.sD.sM(tV), uE.style.height = uE.style.maxHeight = bD.sD.sM(wk.wj), wZ.style
				.font = bD.sD.u1(0, bD.sD.tU(.02, .15)), wa.style.font = bD.sD.u1(0, bD.sD.tU(.02, .7)), uE.style.font = bD.sD.u1(0, bD.sD.tU(.02, .35)), aC = 1; aC < fS; aC++) bD.sD.sN(wX[aC].button, 4);
			for (var tn = 0, aC = 0; aC < fS; aC++) tn += wX[aC].button.offsetWidth;
			if (tm && tn < wa.offsetWidth)
				for (aC = 0; aC < fS; aC++) wX[aC].button.style.width = (100 * wX[aC].button.offsetWidth / tn).toFixed(2) + "%";
			else
				for (aC = 0; aC < fS; aC++) wX[aC].button.style.width = "auto";
			wa.uv && (wa.scrollLeft = wa.uv), tm || this.resize(!0)
		}, this.wl = function() {
			var wk = this.wh(),
				ej = i.l;
			wm.fillStyle = bE.pD, wm.fillRect(0, ej * wk.tV, i.j, ej * wk.wj)
		}, uc.style.position = "absolute", uc.style.top = "0", uc.style.left = "0", uc.style.width = "100%", uc.style.height = "100%", wZ.style.position = "absolute", wZ.style.top = "0", wZ.style.left = "0", wZ.style.width = "100%", wZ.style
		.display = "flex", wZ.style.backgroundColor = bE.pD, wa.style.position = "absolute", wa.style.left = "0", wa.style.width = "100%", bD.sD.ui(wa), wb.style.height = wb.style.maxHeight = "100%", uE.style.position = "absolute", uE.style.width =
		"100%", uE.style.backgroundColor = bE.pD,
		function() {
			for (var aC = 0; aC < wX.length; aC++) wX[aC].button.style.height = "100%", wX[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < wX.length; aC++) wb.appendChild(wX[aC].button);
	wZ.appendChild(function() {
		var wg = document.createElement("h1");
		return wg.textContent = title, wg.style.margin = "auto", wg.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", wg.style.fontFamily = "Arial Black, system-ui", wg
	}()), wa.appendChild(wb), !1 !== wY && (uc.appendChild(uE), uc.appendChild(wZ), uc.appendChild(wa))
}

function t9(wn, wo, wp, wq) {
	var self;
	this.tA = document.createElement("span"), (self = this).tA.textContent = wn, self.tA.style.color = bE.pH, self.tA.style.position = "absolute", self.tA.style.font = "inherit", wq ? self.tA.style.bottom = "0.06em" : self.tA.style.top = "0.12em",
		wp ? self.tA.style.left = "0.2em" : self.tA.style.right = "0.2em", self.tA.style.fontSize = "0.6em", self.tA.style.pointerEvents = "none", self.tA.style.whiteSpace = "pre", wo.style.position = "relative", wo.style.overflow = "hidden", wo
		.appendChild(self.tA)
}

function uk(wn, wo, wr, ws, wt) {
	var self;
	this.tA = document.createElement("span"), this.resize = function() {
			this.tA.style.fontSize = ((ws - wr) * wo.offsetHeight).toFixed(1) + "px"
		}, (self = this).tA.textContent = wn, self.tA.style.color = bE.pH, self.tA.style.font = "inherit", self.tA.style.margin = "0.1em 0.6em", self.tA.style.pointerEvents = "none", wt && (self.tA.style.fontWeight = "bold"), self.tA.style
		.whiteSpace = "nowrap", self.tA.style.display = "block", wo.appendChild(self.tA)
}

function wu(wv, ww, wx, oH) {
	var wy = document.createElement("textarea"),
		wz = (this.e = wy, !0);

	function x4() {
		wy.select(), document.execCommand("copy")
	}
	this.resize = function() {
			ww && bD.sD.sN(wy, 5)
		}, this.x0 = function(el) {
			wy.value = el
		}, this.x1 = function() {
			return wy.value
		}, this.x2 = function() {
			wy.select()
		}, this.clear = function() {
			wy.value = ""
		}, this.x3 = function() {
			wz && navigator.clipboard ? (wy.select(), navigator.clipboard.writeText(wy.value).catch(function() {
				wz = !1, x4()
			})) : x4()
		}, wy.setAttribute("id", "textArea" + u.z.u8++), wy.setAttribute("autocomplete", "off"), wv && wy.setAttribute("placeholder", wv), wy.style.top = "0", wy.style.left = "0", wy.style.width = "100%", wy.style.height = "100%", wy.style
		.userSelect = "none", wy.style.outline = "none", wy.style.resize = "none", wy.style.border = "none", wy.style.color = bE.pH, wy.style.backgroundColor = bE.pA, oH ? (wy.style.fontSize = "1em", wy.rows = 6, wy.style.padding = "0.25em") : (wy
			.style.padding = "0.45em", wy.style.fontSize = "1.2em"), wx && wy.addEventListener("input", function(e) {
			wx(e)
		}), wy.addEventListener("focus", function() {
			i.u9++
		}), wy.addEventListener("blur", function() {
			i.u9--
		})
}

function dO() {
	this.sU = new x5, this.buffer = new x6, this.qh = new x7, this.z = new x8, this.x9 = new xA, this.dk = function() {
		this.buffer.dk(), (new xB).dk(), this.x9.dk(), this.z.xC()
	}
}

function x6() {
	function xD(aC, type, xJ, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type || 0,
			value: xJ || 0,
			xJ: xJ || 0,
			e3: e3 || 0
		})
	}

	function xE(aC, type, xJ, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type,
			value: xJ || "",
			xJ: xJ || "",
			e3: e3 || 0
		})
	}

	function xF(o6) {
		for (var aC = bm.buffer.data.length; aC < o6; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dk = function() {
		xD(0, 1, 0, 5), xD(1, 1, 1), xD(2, 0), xE(3, 2), xD(4, 1), xE(5, 2, "system-ui", 2), xD(6, 0), xD(7, 0, 0), xD(8, 0), xD(9, 1, 1), xD(10, 1), xD(11, 1, 1), xE(12, 2, navigator.language), xD(13), xD(14), xD(15, 0, 1), xD(16, 0, 4), xF(
			100), xE(100, 2), xE(101, 2), xE(102, 2), xE(103, 2), xE(104, 2), xE(105, 2), xE(106, 2), xD(107), xD(108), xD(109), xE(110, 2), xD(111), xD(112), xD(113), xE(114, 2), xD(115), xE(116, 2), xD(117, 1), xE(118, 2, "", 2), xD(119, 1, 0,
				1), xE(120, 2), xD(121, 1, ~~(262144 * Math.random())), xE(122, 2, "Player " + Math.floor(1e3 * Math.random())), xD(123), xE(124), xD(125, 1), xE(126, 2), xD(127, 0, 1), xD(128), xD(129), xD(130), xD(131), xD(132), xE(133, 2), xD(
				134, 0, 5), xE(135, 2), xE(136, 2), xD(137), xD(138), xD(139), xD(140), xD(141), xD(142), xD(143), xD(144), xE(145, 2), xD(146), xD(147), xE(148, 2), xD(149), xD(150, 0, 1), xE(151, 2), xD(152, 0, 5), xD(153, 1), xD(154, 1), xE(
				155, 2), xE(156, 2), xD(157), xD(158), xD(159), xD(160), xE(161, 2), xD(162, 0, 1024), xE(163, 2, "0,0,0"), xE(164, 2, "100,100,100"), xE(165, 2, "30,30,30"), xE(166, 2, "70,70,70"), xE(167, 2, "100,100,100"), xE(168, 2,
				"85,85,85"), xE(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) xE(170 + aC, 2, "255,255,255");
		xE(174, 2), xE(175, 2), xD(176, 0, 200), xF(180), xD(180, 0), xD(181, 0), xD(182, 0, 1023), xE(183, 2)
	}, this.qi = function(eI, value) {
		this.data[eI].value = value
	}, this.xG = function(eI, value) {
		this.qi(eI, value);
		var value = String(value),
			fS = value.length;
		5e4 < fS ? console.log("storage value too large: index " + eI + " size " + fS) : (bm.sU.save(eI, value), bm.sU.save(eI, String(this.data[eI].e3), !0))
	}, this.xH = function(eI) {
		return Number(this.data[eI].value)
	}, this.xI = function(eI) {
		return String(this.data[eI].value)
	}
}

function xA() {
	var xK = [];

	function xN(uR) {
		xK.unshift(uR), bm.qh.qi(161, xK.join(";"))
	}

	function ey(uR) {
		for (var xP = xK, fS = xP.length, aC = 0; aC < fS; aC++)
			if (xP[aC] === uR) return xP.splice(aC, 1), bm.qh.qi(161, xP.join(";")), 1
	}
	this.dk = function() {
		var ru = bm.buffer.data[161].value;
		ru.length && (xK = ru.split(";"))
	}, this.get = function() {
		return xK
	}, __fx.followedAccounts.setSource(this.get), this.xL = function() {
		return {
			oF: __fx.followedAccounts.decorate(xK),
			value: 0
		}
	}, this.vj = function(uR) {
		return bD.sL.has(xK, uR)
	}, this.xM = function(uR) {
		return ey(uR) ? 0 : (xN(uR), 1)
	}, this.nA = function(uR) {
		ey(uR) && xN(uR)
	}, this.xO = function(eI) {
		eI < xK.length && (xK.splice(eI, 1), bm.qh.qi(161, xK.join(";")))
	}
}

function x5() {
	this.xQ = function(eI, e3) {
		return Number(this.xR(eI, e3))
	}, this.xR = function(eI, e3) {
		var fu = null;
		return 0 === a1.id ? a1.xS && (fu = a1.xS.getItem((e3 ? "v" : "d") + eI)) : 1 === a1.id ? fu = a1.xT.loadString((e3 ? 1e3 : 2e3) + eI) : 2 === a1.id && (fu = a1.xU[(e3 ? "v" : "d") + eI]), fu && 0 !== fu.length ? fu : null
	}, this.xV = function(fS, xW) {
		var h = [],
			xX = xW ? "e" : "l";
		if (0 === a1.id) {
			if (a1.xS)
				for (aC = 0; aC < fS; aC++) h.push(a1.xS.getItem(xX + aC))
		} else if (1 === a1.id)
			for (var xY = xW ? 5e3 : 3e3, aC = 0; aC < fS; aC++) h.push(a1.xT.loadString(xY + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fS; aC++) h.push(a1.xU[xX + aC]);
		return h
	}, this.save = function(eI, value, e3) {
		var xZ = (e3 ? "v" : "d") + eI;
		if (0 === a1.id) {
			if (a1.xS && bm.buffer.data[140].value) try {
				a1.xS.setItem(xZ, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.xT.saveString((e3 ? 1e3 : 2e3) + eI, value) : 2 === a1.id && (a1.xU[xZ] = value, a1.xa.postMessage(xZ + " " + value))
	}, this.xb = function(h, xW) {
		var fS = h.length,
			xX = xW ? "e" : "l";
		if (0 === a1.id) {
			if (a1.xS && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fS; aC++) a1.xS.setItem(xX + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var xY = xW ? 5e3 : 3e3, aC = 0; aC < fS; aC++) a1.xT.saveString(xY + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fS; aC++) a1.xU[xX + aC] = h[aC], a1.xa.postMessage(xX + aC + " " + h[aC])
	}
}

function xB() {
	this.dk = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e3 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].xJ = 1);
			0 === data[100].e3 && (data[100].value = data[100].xJ = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fS = data.length;
		for (aC = 0; aC < fS; aC++) {
			var xe = bm.sU.xQ(aC, !0);
			data[aC] && data[aC].e3 === xe && (null === (xe = bm.sU.xR(aC)) ? data[aC].value = data[aC].xJ : 2 === data[aC].type ? data[aC].value = xe : (xe = Number(xe), isNaN(xe) ? data[aC].value = data[aC].xJ : data[aC].value = xe))
		}
	}
}

function x8() {
	function xj(h) {
		if (0 === h.length) bm.qh.qi(116, "");
		else {
			for (var xm = h[0], aC = 1; aC < h.length; aC++) xm += ";" + h[aC];
			bm.qh.qi(116, xm)
		}
	}
	this.xg = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110], bm.qh.qi(110, ""), this.xh())
	}, this.xh = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var xi = [], aC = 0; aC < h.length; aC += 2) xi.push(h[aC]);
		xj(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oF = xi
	}, this.xk = function(eI) {
		bm.buffer.data[117].oF.splice(eI, 1), bm.buffer.data[117].value = Math.min(eI, bm.buffer.data[117].oF.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eI, 2), xj(h)
	}, this.xl = function(eI) {
		var h = bm.buffer.data[116].value.split(";");
		return {
			uR: h[2 * eI],
			password: h[2 * eI + 1]
		}
	}, this.xn = function() {
		var fu = bO.ia(bm.buffer.data[121].value, -1, 262143);
		return fu = -1 === fu ? ~~(262144 * Math.random()) : fu
	}, this.xC = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var xo, ru = h[aC].trim();
			0 !== ru.length && (xo = 0 <= (xo = ru.indexOf("=")) ? ru.substring(0, xo) : ru, document.cookie = xo + "=;expires=0;path=/", document.cookie = xo + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = xo +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function x7() {
	this.qi = function(eI, value) {
		2 !== bm.buffer.data[eI].type && (value = Math.floor(value)), bm.buffer.data[eI].value !== value && (bm.buffer.xG(eI, value), 0 === eI ? (u.y(), bA.dk(), u.v(2)) : 1 === eI ? i.dv(1) : 2 === eI ? i.dv(0) : 5 === eI && (bD.sD.xp(), i.dv(
			0)))
	}, this.xq = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.xG(aC, data[aC].xJ);
		bD.sD.xp(), i.dv(1)
	}, this.xr = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.qi(aC, data[aC].xJ)
	}, this.xs = function() {
		for (var fm = bm.buffer, aC = 128; aC < 135; aC++) fm.xG(aC, fm.data[aC].xJ)
	}, this.xt = function(data) {
		bm.qh.qi(109, data.uS), bm.qh.qi(107, data.xu), bm.qh.qi(108, data.xv), bm.qh.qi(112, data.xw), bm.qh.qi(111, data.xx), bm.qh.qi(113, data.xy), bm.qh.qi(135, data.xz), bm.qh.qi(136, data.y0), bm.qh.qi(137, data.y1), bm.qh.qi(138, data
			.y2), bm.qh.qi(139, data.y3), bm.qh.qi(141, data.y4), bm.qh.qi(142, data.y5), bm.qh.qi(143, data.y6), bm.qh.qi(144, data.y7)
	}
}

function c8() {
	this.uV = new y8, this.y9 = new yA, this.yB = new yC, this.dk = function() {
		this.uV.dk()
	}
}

function yA() {
	this.yD = function(size) {
		for (var yE = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(yE.rL(16)));
		return h.join("")
	}, this.yF = function(ru) {
		return 20 < (ru = ru.trim()).length ? ru.substring(0, 20) : ru
	}
}

function y8() {
	var yG = new Uint8Array(78);
	this.dk = function() {
		var aC;
		for (yG[50] = 37, aC = 0; aC < 10; aC++) yG[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) yG[aC + 20] = aC + 11, yG[aC + 52] = aC + 38
	}, this.yH = function(ru) {
		return ru.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.yI = function(ru, size) {
		if ((ru = this.yH(ru)).length > size) return ru.substring(0, size);
		for (; ru.length < size;) ru = "-" + ru;
		return ru
	}, this.yJ = function(ru) {
		for (var yK = yG, fS = ru.length, h = new Uint8Array(fS), aC = 0; aC < fS; aC++) h[aC] = yK[ru.charCodeAt(aC) - 45];
		return h
	}, this.yL = function(yM) {
		bG.a8(6 * yM.length), this.yN(yM), bK.dk(bG.aD)
	}, this.yN = function(yM) {
		for (var fS = yM.length, j = bG, aC = 0; aC < fS; aC++) j.a9(6, yM[aC])
	}, this.yO = function(ru) {
		this.yN(this.yJ(ru))
	}, this.yP = function(ru, size) {
		this.yN(this.yJ(this.yI(ru, size)))
	}, this.yQ = function(ru, size) {
		for (var h = this.yJ(this.yI(ru, size)), fu = 0, o0 = 1, aC = h.length - 1; 0 <= aC; aC--) fu += o0 * h[aC], o0 *= 64;
		return fu
	}
}

function yR() {
	var j, k, yS;

	function ys(hu, fV, yq, yX, yl) {
		fV = yr(hu, fV + 1 + 2 * yX & 3);
		! function(hu, lQ) {
			return 1 < Math.abs(hu % j - lQ % j) || 1 < Math.abs(yv(hu) - yv(lQ))
		}(hu, fV) && 0 === yl[fV << 2] && (yl[fV << 2] = yq)
	}

	function yv(h0) {
		return Math.floor((h0 + .5) / j) % k
	}

	function yr(h0, fV) {
		return h0 + yS[fV]
	}
	this.yT = function(ru) {
		var aC, yU, fS, yV, yE = bK;
		for (bJ.uV.yL(bJ.uV.yJ(ru)), bV.yY.yZ[bV.f8].j = bV.fd = j = yE.rL(12), bV.yY.yZ[bV.f8].k = bV.fe = k = yE.rL(12), yS = [-j, -1, j, 1], bV.yi = document.createElement("canvas"), bV.yi.width = bV.fd, bV.yi.height = bV.fe, bV.ye = bV.yi
			.getContext("2d", {
				alpha: !1
			}), bV.yf = bV.yj = null, bV.yf = bV.ye.getImageData(0, 0, bV.fd, bV.fe), bV.yj = bV.yf.data, bD.sL.yk(bV.yj), fS = yE.rL(12), yU = yE.rL(5), yV = yb(j * k - 1), aC = 0; aC < fS; aC++) ! function(li, h0, yW, yX) {
			var aC, fV, yE = bK,
				yl = bV.yj,
				ym = h0,
				yn = h0,
				yo = 0,
				yp = 1 + yW,
				yq = 2 - yW;
			for (yl[h0 << 2] = yp, aC = 0; aC < li; aC++) fV = yE.rL(2), h0 = yr(h0, fV), yl[h0 << 2] === yp ? yo % 2 == 1 && ys(yn, yo + 2 * yX + 3, yq, yX, yl) : yl[h0 << 2] = yp, ys(h0, fV, yq, yX, yl), ys(yn, fV, yq, yX, yl), yn = h0,
				yo = fV;
			yr(h0, 0) === ym ? (ys(h0, 0, yq, yX, yl), ys(ym, 0, yq, yX, yl)) : yr(h0, 1) === ym && (ys(h0, 0, yq, yX, yl), ys(ym, 2, yq, yX, yl));
			0 === li && (ys(ym, 0, yq, yX, yl), ys(ym, 2, yq, yX, yl))
		}(yE.rL(yU), yE.rL(yV), 1 === yE.rL(1), 1 === yE.rL(1));
		var fZ, fb, iK, yw, yx, yy, yl = bV.yj,
			yz = !0,
			z0 = bV.yY.yZ[bV.f8].z0,
			z1 = bV.yY.yZ[bV.f8].z1;
		for (fb = 0; fb < k; fb++)
			for (yw = !0, yx = yz, fZ = yy = 0; fZ < j; fZ++) iK = 4 * fb * j + 4 * fZ, yy <= fZ && 0 < yl[iK] && (yx = 2 === yl[iK], yw) && (yw = !1, yx !== yz) ? (yz = yx, yy = fZ + 1, fZ = -1) : (yx ? (yl[iK] = z1[0], yl[1 + iK] = z1[1], yl[
				2 + iK] = z1[2]) : (yl[iK] = z0[0], yl[1 + iK] = z0[1], yl[2 + iK] = z0[2]), yl[3 + iK] = 255);
		bV.ye.putImageData(bV.yf, 0, 0), bV.yg = !0, bV.yh.dk(), bi.ds = !0
	}
}

function yC() {
	this.yT = function(z2) {
		for (var yE = bK, size = yE.rL(z2), z3 = 7 + 9 * yE.rL(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(yE.rL(z3)));
		return h.join("")
	}
}

function cD() {
	var tv, tw, z4, z5, z6, z7, z8, z9, zA, zB;

	function zD() {
		var zG = aE.zG;
		for (zA = zG; zA < aE.fP; zA++) zC();
		for (zA = aE.hq ? aE.kn : 0; zA < zG; zA++) {
			if (!zH()) {
				for (var fm = aE.zL = zA; fm < zG; fm++) zA = fm, zC();
				return
			}
			zK(z7 + tv * z6 + bO.ft(z6, 2), z8 + tw * z6 + bO.ft(z6, 2))
		}
	}

	function zn(player) {
		for (var jL = ah.jL, jN = ah.jN, jM = ah.jM, jO = ah.jO, fb = jN[player]; fb <= jO[player]; fb++)
			for (var fZ = jL[player]; fZ <= jM[player]; fZ++) {
				var f6 = ad.zo(fZ, fb);
				ad.h2(f6) && (ad.jy(f6) ? ad.gx(f6, player) : ad.zp(f6, player))
			}
	}

	function zm(h, um, un) {
		var ea = h[um];
		h[um] = h[un], h[un] = ea
	}

	function zH() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (tv = bO.ft(z4 * az.random(), az.value(100)), tw = bO.ft(z5 * az.random(), az.value(100)), zu()) return 1;
			return
		}() || function() {
			var ip, is, fl, zJ, fm, zI;
			for (ip = bO.ft(z4 * az.random(), az.value(100)), is = bO.ft(z5 * az.random(), az.value(100)), fl = 40; 1 <= fl; fl--)
				for (zJ = z5 - fl; 0 <= zJ; zJ -= 40)
					for (tw = (zJ + is) % z5, fm = 40; 1 <= fm; fm--)
						for (zI = z4 - fm; 0 <= zI; zI -= 40)
							if (tv = (zI + ip) % z4, zu()) return 1;
			return
		}()
	}

	function zu() {
		for (var h0, zw, gap = bO.ft(z6 - z9, 2), zx = z8 + tw * z6 + gap, zy = z7 + tv * z6 + gap, zv = zx + z9 - 1; zx <= zv; zv--)
			for (zw = zy + z9 - 1; zy <= zw; zw--)
				if (h0 = ad.zo(zw, zv), !ad.fN(h0) || ad.jy(h0)) return;
		return 1
	}

	function zK(zI, zJ) {
		zC(), zz(zI - 2, zJ - 2)
	}

	function zC() {
		ah.nN[zA] = 0, ah.hG[zA] = ah.zk[zA] = 0, ah.gu[zA] = [], ah.h8[zA] = [], ah.h9[zA] = [], ah.fr[zA] = [], ah.jL[zA] = ah.jN[zA] = ah.jM[zA] = ah.jO[zA] = 0
	}

	function zz(zI, zJ) {
		var h0, aC, a00, a01;
		for (ah.nN[zA] = 1, ah.jL[zA] = zI + 10, ah.jN[zA] = zJ + 10, ah.jO[zA] = ah.jM[zA] = 0, a00 = zI; a00 < zI + 4; a00++)
			for (a01 = zJ; a01 < zJ + 4; a01++)(zI < a00 && a00 < zI + 3 || zJ < a01 && a01 < zJ + 3) && (h0 = ad.zo(a00, a01), ad.fN(h0)) && (ah.jL[zA] = Math.min(a00, ah.jL[zA]), ah.jM[zA] = Math.max(a00, ah.jM[zA]), ah.jN[zA] = Math.min(a01, ah
				.jN[zA]), ah.jO[zA] = Math.max(a01, ah.jO[zA]), zB[ah.hG[zA]] = h0, ah.hG[zA]++, ad.zp(h0, zA));
		for (ah.zk[zA] = ah.hG[zA], aC = ah.hG[zA] - 1; 0 <= aC; aC--) ad.a02(zB[aC], zA) ? (ad.gx(zB[aC], zA), ah.h8[zA].push(zB[aC])) : ad.a03(zB[aC]) ? (ad.gx(zB[aC], zA), ah.h9[zA].push(zB[aC])) : ad.a04(zB[aC]) && (ad.gx(zB[aC], zA), ah.fr[zA]
			.push(zB[aC]))
	}
	this.dk = function() {
		if (zB = new Array(12), z9 = 6, z6 = 10, z4 = bO.ft(bV.fd, z6), z5 = bO.ft(bV.fe, z6), z7 = bO.ft(bV.fd - z6 * z4, 2), z8 = bO.ft(bV.fe - z6 * z5, 2), aE.hq)
			for (var aC = 0; aC < aE.kn; aC++) zA = aC, zC(), ah.nN[zA] = 1;
		(0 === aE.data.spawningType ? zD : 1 === aE.data.spawningType ? (zD(), function() {
			var zM = aE.zN;
			aE.zO || zM++;
			if (!(zM < 3)) {
				for (var data = aE.data, k3 = (aE.hq ? aE.kn : 0) + data.teamPlayerCount[0], o6 = aE.zL, zP = new Uint32Array(zM), zQ = new Uint32Array(zM), zR = new Uint16Array(zM), zS = new Uint16Array(zM), fQ = bj.fQ, jL = ah.jL, jN =
						ah.jN, jM = ah.jM, jO = ah.jO, g7 = bR.g7, g8 = bR.g8, aC = k3; aC < o6; aC++) g7[aC] = jL[aC] + jM[aC] >> 1, g8[aC] = jN[aC] + jO[aC] >> 1;
				for (aC = k3; aC < o6; aC++) {
					var id = fQ[aC];
					zP[id] += g7[aC], zQ[id] += g8[aC]
				}
				var lA = bj.lA;
				for (aC = 1; aC < zM; aC++) {
					var gv = Math.max(data.teamPlayerCount[lA[aC]], 1);
					zR[aC] = bO.ft(zP[aC], gv), zS[aC] = bO.ft(zQ[aC], gv)
				}
				var zT = bj.zT,
					zU = bj.zU,
					zV = bj.zV,
					g6 = bR.g6;
				for (aC = 0; aC < 512; aC++) g6[aC] = aC;
				for (var eH = 0; eH < 2 + (4 <= zM); eH++)
					for (aC = k3; aC < o6; aC++) {
						for (var hu = aC, zW = g6[hu], zX = 1, fi = bO.zY(g7[zW] - zR[1], g8[zW] - zS[1]), fl = 2; fl < zM; fl++) {
							var zZ = bO.zY(g7[zW] - zR[fl], g8[zW] - zS[fl]);
							zZ < fi && (fi = zZ, zX = fl)
						}
						var za = fQ[hu];
						if (zX !== za) {
							if (2 === eH && 4 <= zM) {
								var zb = Math.max((zX + 1) % zM, 1),
									zc = bO.zY(g7[zW] - zR[zb], g8[zW] - zS[zb]);
								for (fl = 1; fl < zM; fl++) zZ = bO.zY(g7[zW] - zR[fl], g8[zW] - zS[fl]), fi < zZ && zZ < zc && (zc = zZ, zb = fl);
								zb !== za && bO.zY(zR[za] - zR[zb], zS[za] - zS[zb]) < bO.zY(zR[za] - zR[zX], zS[za] - zS[zX]) && (zX = zb)
							}
							var zd = lA[zX],
								ze = zU[zd] + (aE.hq ? 0 : zV[zd]),
								lQ = zT[ze],
								zf = g6[lQ],
								zg = zU[zd + 1];
							fi = bO.zY(g7[zf] - zR[za], g8[zf] - zS[za]);
							for (var ej = ze + 1; ej < zg; ej++) {
								var zh = zT[ej],
									zi = g6[zh];
								(zZ = bO.zY(g7[zi] - zR[za], g8[zi] - zS[za])) < fi && (fi = zZ, lQ = zh)
							}
							lQ < k3 || o6 <= lQ || (zf = g6[lQ], zP[za] += g7[zf] - g7[zW], zQ[za] += g8[zf] - g8[zW], zP[zX] += g7[zW] - g7[zf], zQ[zX] += g8[zW] - g8[zf], gv = data.teamPlayerCount[lA[za]], zR[za] = bO.ft(zP[za], gv),
								zS[za] = bO.ft(zQ[za], gv), gv = data.teamPlayerCount[zd], zR[zX] = bO.ft(zP[zX], gv), zS[zX] = bO.ft(zQ[zX], gv), g6[hu] = zf, g6[lQ] = zW)
						}
					}! function() {
						for (var g6 = bR.g6, jL = ah.jL, jN = ah.jN, jM = ah.jM, jO = ah.jO, hG = ah.hG, zk = ah.zk, h8 = ah.h8, h9 = ah.h9, fr = ah.fr, aC = 0; aC < 512; aC++) {
							var zl = g6[aC];
							if (zl !== aC) {
								zm(jL, aC, zl), zm(jN, aC, zl), zm(jM, aC, zl), zm(jO, aC, zl), zm(hG, aC, zl), zm(zk, aC, zl), zm(h8, aC, zl), zm(h9, aC, zl), zm(fr, aC, zl), zn(aC), zn(zl), g6[aC] = aC;
								for (var k = zl, h1 = g6[k]; h1 !== aC;) h1 = g6[k = h1];
								g6[k] = zl
							}
						}
					}()
			}
		}) : function() {
			var zG = aE.zG;
			for (zA = zG; zA < aE.fP; zA++) zC();
			for (zA = aE.hq ? aE.kn : 0; zA < zG; zA++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							zI = spawningData[2 * zA] + 1,
							spawningData = spawningData[2 * zA + 1] + 1;
						if (3 < zI && zI < bV.fd - 5 && 3 < spawningData && spawningData < bV.fe - 5 && ad.fN(ad.zo(zI, spawningData)) && function(zI, zJ) {
								var h0, zw, zv;
								for (zv = zJ; zJ - 6 < zv; zv--)
									for (zw = zI; zI - 6 < zw; zw--)
										if (h0 = ad.zo(zw, zv), ad.jy(h0)) return;
								return 1
							}(zI + 3, spawningData + 3)) return zK(zI + 1, spawningData + 1), 1;
						return
					}()) {
					if (!zH()) {
						for (var fm = aE.zL = zA; fm < zG; fm++) zA = fm, zC();
						return
					}
					var zI = z7 + tv * z6 + bO.ft(z6, 2),
						zJ = z8 + tw * z6 + bO.ft(z6, 2);
					zK(zI, zJ)
				}
		})(), bg.nJ[7] = ah.hG[aE.fC]
	}, this.a05 = function(jw, a06, a07) {
		var aC, zI, zJ, h0, tv, tw;
		for (zA = jw, aC = 0; aC < 20; aC++)
			for (zI = a06 + aC; a06 - aC <= zI; zI--)
				for (zJ = a07 + aC; a07 - aC <= zJ; zJ--)
					if ((zI === a06 + aC || zI === a06 - aC || zJ === a07 + aC || zJ === a07 - aC) && 3 < zI && zI < bV.fd - 5 && 3 < zJ && zJ < bV.fe - 5 && ad.fN(ad.zo(zI, zJ)) && function(zI, zJ) {
							var h0, zw, zv;
							for (zv = zJ; zJ - 6 < zv; zv--)
								for (zw = zI; zI - 6 < zw; zw--)
									if (h0 = ad.zo(zw, zv), ad.jy(h0) && !ad.a0D(zA, h0)) return;
							return 1
						}(zI + 3, zJ + 3)) {
						if (0 < ah.hG[zA]) {
							for (tw = tv = h0 = void 0, tv = ah.jM[zA]; tv >= ah.jL[zA]; tv--)
								for (tw = ah.jO[zA]; tw >= ah.jN[zA]; tw--) h0 = 4 * (tw * bV.fd + tv), ad.a0A(zA, h0) && (ad.a0B(h0), ah.hG[zA]--);
							zC()
						}
						return zz(zI - 1, zJ - 1), !0
					} return !1
	}, this.a0C = function(jw) {
		zA = jw, zH() ? zK(z7 + tv * z6 + bO.ft(z6, 2), z8 + tw * z6 + bO.ft(z6, 2)) : zC()
	}
}

function a0E() {
	au.a0F(), wm.setTransform(ie, 0, 0, ie, 0, 0), wm.imageSmoothingEnabled = ie < 3, wm.drawImage(bV.yi, aT.a0G(), aT.a0H()), bS.a0I.wl(), wm.drawImage(a0J, aT.a0G(), aT.a0H()), au.wl(), bQ.wl(), ag.wl(), (aE.nr ? (bk.wl(), bF) : (aO.wl(), aW.wl(),
		aS.wl(), bF.wl(), ax.wl(), aX.wl(), aT.wl(), aR.wl(), bk.wl(), aV.wl(), aQ.wl(), aN.wl(), aM.wl(), aY.wl(), bh.wl(), aw)).wl(), u.wl()
}

function a0K(on, j, k) {
	on.clearRect(0, 0, j, k), on.fillStyle = bE.pE, on.fillRect(0, 0, j, k)
}

function a0L(on, j, k, a0M) {
	on.fillStyle = bE.pH, on.fillRect(0, 0, j, a0M), on.fillRect(0, 0, a0M, k), on.fillRect(j - a0M, 0, a0M, k), on.fillRect(0, k - a0M, j, a0M)
}

function a0N(on, fZ, fb, iO, a0M, h0, a0O) {
	on.fillStyle = bE.pH;
	var h0 = Math.floor(iO * h0),
		ua = (h0 += (h0 - a0M) % 2, Math.floor((h0 - a0M) / 2)),
		iO = Math.floor((iO - h0) / 2);
	on.fillRect(fZ + iO, fb + iO + ua, h0, a0M), a0O && on.fillRect(fZ + iO + ua, fb + iO, a0M, h0)
}

function a0Q() {
	this.dk = function() {
		8 === aE.l5 && aO.a0R()
	}, this.a0S = function(a0T) {
		var elo = aE.data.elo,
			k2 = (elo[a0T] - elo[1 - a0T]) / 10,
			k2 = 8 / (1 + Math.pow(2, k2 / 32)),
			k2 = Math.floor(10 * k2 + .5),
			a0V = elo[a0T] + k2,
			a0W = this.a0X(a0V),
			elo = this.a0X(elo[1 - a0T] - k2),
			k2 = (0 === a0T ? aO.a0Z(a0W, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a0Z(elo, a0W, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a0V * bO.sqrt(a0V) >> 8),
			elo = ((1 + aE.a0c) * k2 / 100).toFixed(2);
		a0T === aE.fC ? aO.a0d(640, L(28, [elo]), 40, 0, bE.pH, bE.pE, -1, !1) : aO.a0d(640, L(29, [ah.a0e[a0T], elo]), 40, 0, bE.pH, bE.pE, -1, !1)
	}, this.a0X = function(elo) {
		return 16e3 === (elo = bO.ia(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cj() {
	this.tR = new a0f, this.yl = new a0g
}

function a0g() {
	this.iE = !1;
	this.a0k = [], this.a0l = 100;
	var no, np, gap, iO, a0h, a0j, a0m = 0,
		a0n = new Array(9),
		a0o = [],
		a0p = [],
		a0q = 0,
		a0r = 0,
		a0s = 0,
		a0t = 0;

	function a15() {
		a0n.sort(function(fl, fm) {
			return fm.ks - fl.ks
		});
		for (var ru = "" + a0n[0].qw, aC = 1; aC < 9; aC++) ru += "," + a0n[aC].qw;
		for (aC = 0; aC < 9; aC++) ru += "," + a0n[aC].ks;
		bm.buffer.xG(120, ru)
	}
	this.dk = function() {
		for (var a0u = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a0u.length; aC++) {
			var color = 6 === a0u[aC] ? bE.ph : bE.pF;
			this.a0k.push(bD.canvas.a0v(ac.get(3), a0u[aC], color))
		}
		for (aC = 0; aC < ak.tR.a0w; aC++) a0p.push(ak.tR.a0x - ak.tR.a0w + aC);
		for (aC = 0; aC < ak.tR.a0y; aC++) a0p.push(ak.tR.a0z + aC);
		var a10 = ak.tR.a11(bN.a10);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a10.slice(), aC = 0; aC < a10.length; aC++) a0p.push(a10[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a0n[q] = {
						qw: isNaN(qcode) ? 1015 + q : qcode,
						ks: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a0n[aC] = {
							qw: 1015 + aC,
							ks: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var fu = parseInt(h[aC]),
								ej = (fu = 0 <= fu && fu < ak.tR.a0x ? fu : 0, parseInt(h[aC + 9]));
							ej = 0 <= ej && ej < 1e3 ? ej : 0, a0n[aC] = {
								qw: fu,
								ks: ej
							}
						}
				}
		}()
	}, this.show = function(m2, m3, a16) {
		var aC;
		if (a0q = m2, a0r = m3, a0m = a16 || 0, this.iE = !0, a0o = [], 0 === a0m)
			for (aC = 0; aC < 9; aC++) a0o.push(a0n[aC].qw);
		else {
			var fm = 49 * a0m,
				a16 = fm - 49;
			for (a16 >= a0p.length && (a0m = 1, a16 = 0, fm = 49), aC = a16 = (fm = Math.min(fm, a0p.length)) - 49; aC < fm; aC++) a0o.push(a0p[aC])
		}
		a0o.push(1024);
		a16 = a0o.length, iO = Math.floor((a1.a2.ib() ? .075 : .0468) * i.ic), gap = Math.floor(iO / 3), (a0s = 10 * (a0h = iO + gap)) > i.j && (a0s = i.j, gap = (a0h = a0s / 10) - (iO = 3 * a0h / 4)), a0j = bO.ft(a16, 10) + !!(a16 % 10), (a0t =
			a0j * a0h) > i.k && (a0t = i.k, gap = (a0h = a0t / a0j) - (iO = 3 * a0h / 4)), a16 = .5 * gap;
		no = Math.min(Math.max(m2 - .5 * a0s + a16, a16), i.j - a0s + a16), np = Math.min(Math.max(m3 - .5 * a0t + a16, a16), i.k - a0t + a16)
	}, this.hf = function(m2, m3, player) {
		if (!this.iE) return !1;
		if (this.a18(m2, m3)) {
			m2 = bO.ia(bO.ft(m2 - no + .5 * gap, a0h), 0, 9);
			if ((m2 += 10 * bO.ia(bO.ft(m3 - np + .5 * gap, a0h), 0, 9)) >= a0o.length) return aM.tS(), !0;
			m3 = a0o[m2];
			if (1024 === m3) return this.show(a0q, a0r, a0m + 1), !0;
			! function(qw) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a0n[aC].ks = Math.floor(.99 * a0n[aC].ks);
					for (aC = 0; aC < 9; aC++)
						if (qw === a0n[aC].qw) return a0n[aC].ks = Math.min(a0n[aC].ks + 30, 999), a15();
					a0n.splice(5, 0, {
						qw: qw,
						ks: Math.max(a0n[4].ks, 30)
					}), a0n.pop(), a15()
				}
			}(m3), player === aE.fC ? bB.hs.qv(m3) : bB.go.rA(m3, player)
		}
		return aM.tS(), !0
	}, this.a18 = function(m2, m3) {
		return !(m2 < no - .5 * gap || m3 < np - .5 * gap || no + a0s - .5 * gap <= m2 || np + a0t - .5 * gap <= m3)
	}, this.wl = function() {
		wm.fillStyle = bE.pE, wm.fillRect(no - .5 * gap, np - .5 * gap, a0s, a0t);
		for (var iK = .5 * bf.a19, fS = (wm.lineWidth = bf.a19, wm.strokeStyle = wm.fillStyle = bE.pH, wm.strokeRect(no - .5 * gap + iK, np - .5 * gap + iK, a0s - 2 * iK, a0t - 2 * iK), wm.imageSmoothingEnabled = !0, a0o.length), aC = 0; aC <
			fS; aC++) this.a1A(a0o[aC], wm, no + aC % 10 * a0h, np + bO.ft(aC, 10) * a0h, iO);
		wm.imageSmoothingEnabled = !1
	}, this.a1A = function(qw, iU, fZ, fb, iO) {
		var f6;
		qw >= 1024 - ak.tR.a0w ? (f6 = iO / this.a0l, iU.setTransform(f6, 0, 0, f6, fZ, fb), iU.drawImage(this.a0k[qw - 1024 + ak.tR.a0w], 0, 0), iU.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sD.textAlign(iU, 1), bD.sD.textBaseline(iU, 1), iU.font =
			bD.sD.u1(0, .89 * iO), iU.fillText(ak.tR.a1B(qw), fZ + .5 * iO, fb + (.35 - bD.sD.a1C + .56) * iO))
	}
}

function a0f() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a0w = 13, this.a0y = this.emojis.length, this.a0z = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a0z, this.a0x = 1024, this.a1D = this.emojis.indexOf(
		"💀"), this.a1E = this.a1D + 1, this.a1F = this.emojis.indexOf("🥇"), this.a1G = this.emojis.indexOf("😊"), this.a1B = function(fu) {
		return fu < this.a0z ? String.fromCharCode(55356, 56806 + bO.ft(fu, 26), 55356, 56806 + fu % 26) : this.emojis[Math.min(fu - this.a0z, this.a0y - 1)]
	}, this.a11 = function(ru) {
		for (var fS = ru.length - 2, h = [], aC = 0; aC < fS; aC++) {
			var a1H = ru.charCodeAt(aC) - 56806,
				a1I = ru.charCodeAt(aC + 2) - 56806;
			0 <= a1H && a1H < 26 && 0 <= a1I && a1I < 26 && (h.push(26 * a1H + a1I), aC += 3)
		}
		return h
	}, this.a1J = function(fu) {
		return fu < this.a0z
	}, this.a1K = function(fu) {
		return fu >= 1024 - this.a0w
	}, this.a1L = function(fu) {
		return fu >= this.a0z && fu < this.a0z + this.a1E
	}
}

function c7() {
	this.uV = new a1M, this.y9 = new a1N, this.yB = new a1O, this.dk = function() {
		this.uV.dk()
	}
}

function a1N() {
	this.yO = function(ru) {
		for (var fS = ru.length, j = bG, aC = 0; aC < fS; aC++) j.a9(16, ru.charCodeAt(aC))
	}
}

function a1M() {
	var a1P = new Uint8Array(64);
	this.dk = function() {
		var aC;
		for (a1P[0] = 45, a1P[37] = 95, aC = 0; aC < 10; aC++) a1P[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a1P[aC + 11] = 65 + aC, a1P[aC + 38] = 97 + aC
	}, this.uX = function(a1Q) {
		for (var yE = bK, yM = new Uint8Array(a1Q), aC = 0; aC < a1Q; aC++) yM[aC] = yE.rL(6);
		return yM
	}, this.uW = function(yM) {
		for (var fS = yM.length, a1R = a1P, h = [], aC = 0; aC < fS; aC++) h.push(String.fromCharCode(a1R[yM[aC]]));
		return h.join("")
	}, this.a1S = function(value, a1T) {
		for (var a1R = a1P, h = [], aC = 0; aC < a1T; aC++) h.push(String.fromCharCode(a1R[value >> 6 * (a1T - 1 - aC) & 63]));
		return h.join("")
	}
}

function cF() {
	var a1U, a1V, a1W;
	a1U = [32, 65, 191, 913, 931], a1V = [64, 127, 688, 930, 1155], a1W = new Array(a1U.length + 1);
	for (var aC = 0; aC < a1W.length; aC++) {
		a1W[aC] = 0;
		for (var fl = aC - 1; 0 <= fl; fl--) a1W[aC] += a1V[fl] - a1U[fl]
	}

	function a1c(ej) {
		for (var aC = a1U.length - 1; 0 <= aC; aC--)
			if (ej >= a1U[aC] && ej < a1V[aC]) return aC;
		return -1
	}
	this.yF = function(ru) {
		return 0 !== (ru = ru.trim()).indexOf("Bot ") && 0 !== ru.indexOf("[Bot] ") && function(ru, a1Z, a1a) {
			var fS = (ru = ru.trim()).length;
			if (fS < a1Z || a1a < fS) return !1;
			for (var ej, a1b = 0, aC = 0; aC < fS; aC++)
				if (ej = ru.charCodeAt(aC), a1b += 65 <= ej && ej <= 90 || 1040 <= ej && ej <= 1071 ? 1 : 0, -1 === a1c(ej)) return !1;
			if (3 < a1b && a1b > Math.floor(fS / 2)) return !1;
			return !0
		}(ru, 3, 20)
	}, this.a1d = function(ru) {
		for (var fS = (ru = ru.trim()).length, h = [], aC = 0; aC < fS; aC++) {
			var ej, h0 = a1c(ej = ru.charCodeAt(aC));
			h.push(a1W[h0] + ej - a1U[h0])
		}
		return h
	}, this.yT = function(h) {
		for (var ej, fm, ru = "", fS = h.length, aC = 0; aC < fS; aC++)
			for (fm = 1; fm < a1W.length; fm++)
				if (h[aC] < a1W[fm]) {
					ej = a1U[fm - 1] + h[aC] - a1W[fm - 1], ru += String.fromCharCode(ej);
					break
				} return ru
	}, this.a1e = function(ru) {
		for (var h = this.a1d(ru), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a1f = function(ru) {
		for (var h = new Array(Math.floor(ru.length / 3)), aC = 0; aC < ru.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(ru.substring(aC, aC + 3));
		return this.yT(h)
	}, this.a1g = function(ru) {
		for (var fu, h = [ru.length], aC = 0; aC < ru.length; aC++) h[aC] = ru.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < ru.length; aC++) aC === ru.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (fu = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(fu + (fu < 26 ? 65 : 71)), aC++);
		return result
	}, this.a1h = function(ru) {
		for (var ej, result = "", aC = 0; aC < ru.length; aC++) 48 <= (ej = ru.charCodeAt(aC)) && ej < 58 ? result += String.fromCharCode(ej) : 65 <= ej && ej < 75 ? result += "0" + (ej - 65).toString() : 75 <= ej && ej < 91 ? result += (ej - 65)
			.toString() : 97 <= ej && ej < 123 && (result += (ej - 71).toString());
		return result
	}, this.a1i = function(ru) {
		for (var fS = ru.length, h = [], aC = 0; aC < fS; aC++)(ej = ru.charCodeAt(aC)) < 58 ? h.push(ru[aC]) : (ej -= ej < 91 ? 65 : 71, h.push(String(bO.ft(ej, 10))), h.push(String(ej - 10 * bO.ft(ej, 10))));
		var fS = h.length - 2,
			ej = 0,
			yM = [];
		for (aC = 0; aC < fS; aC += 3) yM[ej++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return yM
	}, this.a1j = function() {
		for (var eH, a1k = "", aC = 0; aC < 6; aC++) eH = 48 + az.random() % 36, eH += 58 <= eH ? 39 : 0, a1k += String.fromCharCode(eH);
		return a1k
	}
}

function a1O() {
	this.a1d = function(ru, z2, a1l) {
		for (var a1m = [], fS = ru.length, max = 0, aC = 0; aC < fS; aC++) {
			var fu = ru.charCodeAt(aC);
			a1m.push(fu), max = Math.max(max, fu)
		}
		var z3 = max < 128 ? 7 : 16;
		for (a1l.a9(z2, fS), a1l.a9(1, +(16 == z3)), aC = 0; aC < fS; aC++) a1l.a9(z3, a1m[aC])
	}
}

function dG() {
	this.a1n = new a1o, this.result = new a1p, this.a1q = new a1r, this.a1s = new a1t, this.a1u = new a1v, this.a1w = new a1x, this.dk = function() {
		this.result.dk()
	}
}

function a1r() {
	this.a1y = function() {
		for (var fS = am.lJ, a1z = am.lO, a20 = [], aC = 0; aC < fS; aC++) {
			var h0 = a1z[aC];
			bD.go.a21(h0) && a20.push(h0)
		}
		return a20
	}, this.a22 = function() {
		if (0 === bj.lA[aE.a23]) return this.a24();
		bk.ko(aE.a23);
		for (var a20 = [], fS = bR.fx[0], g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = g6[aC];
			bD.go.a21(h0) && a20.push(h0)
		}
		return a20
	}, this.a24 = function() {
		var h0 = mO[0];
		return bD.go.a21(h0) ? [h0] : []
	}, this.a25 = function(a20) {
		for (var fS = a20.length, ea = 0, hG = ah.hG, aC = 0; aC < fS; aC++) ea += hG[a20[aC]];
		return ea
	}
}

function a1o() {
	function a27() {
		if (2 === aE.a2B) return 1;
		ax.a2C(), aE.a2B = 2, aE.a2D = aE.a2E
	}

	function a29() {
		bU.a1u.a2F(), aY.show(1 === aE.a2G, !1, 2 === aE.a2G), bU.result.a2F(), bU.a1w.ee(), bU.a1s.ee(), bU.a1s.a2H(), aO.a2I(!0), aO.a2J(247), aO.a2J(956), aO.a2J(957), aW.n9(!0), aX.n9(!0), ax.n9(), bF.a2K(), aE.hb && bi.a2L.a2M(), bi.ds = !0, be
			.a2N(), a1.a2.setState(0)
	}
	this.a26 = function() {
		a27() || (aE.a28 = 2, a29())
	}, this.a2A = function() {
		a27() || (aE.a28 = 1, a29())
	}
}

function a1t() {
	this.ee = function() {
		var a2V;
		2 === aE.a28 ? (aO.a2O(0, 59), aI.nx(2700)) : aE.l5 < 7 ? (a2V = bj.lA[aE.a23], a2V = bj.a2X[a2V], aR.a2Y(L(30, [a2V]), 2, 1, 12), aO.a0d(0, L(31, [a2V]), 40, 0, bE.pH, bE.pE, -1, !1), aI.nx(2700)) : 8 === aE.l5 ? (aE.a2G ? aO.a2O(aE.a2T,
			2) : aO.a2O(1 - aE.fC, 3), aE.a2U.a0S(aE.a2T), aI.nj(aE.a2T, 2700, !1, 0)) : 9 === aE.l5 ? (aO.a2Z(), aI.nx(2700)) : (aO.a2a(aE.a2T), aI.nj(aE.a2T, 2700, !1, 0))
	}, this.a2H = function() {
		var ru;
		aE.hb || aE.l7 || (ru = b1.z.a2b(), aE.l5 < 7 ? ru += "/log/team" : 8 === aE.l5 ? ru += "/log/1v1" : 9 === aE.l5 ? ru += "/log/zombies" : ru += "/log/br", aO.a0d(720, ru, 736, 0, bE.pH, bE.pf, -1, !1))
	}
}

function a1x() {
	function a2l() {
		var uq;
		return 8 === aE.l5 ? 0 : (uq = Math.floor(ah.a2m[aE.fC] / 50), (uq = Math.min(uq, 200)) / 100)
	}

	function a2d() {
		var uq = a2l();
		0 !== uq && aO.a0d(440, L(32, [uq.toFixed(2)]), 40, 0, bE.pZ, bE.pE, -1, !1)
	}
	this.ee = function() {
		var a2e;
		0 === bU.result.a2c || 0 === bU.result.a20.length || 8 === aE.l5 ? bD.go.he(aE.fC) && a2d() : (function(a2e) {
			7 !== aE.l5 && 10 !== aE.l5 && 9 !== aE.l5 || 0 !== aE.a2G && a2e && aO.a0d(600, L(36, [a2e.toFixed(2)]), 40, 0, bE.pH, bE.pE, -1, !1)
		}(a2e = function() {
			aO.a0d(520, L(33), 40, 0, bE.pH, bE.pE, -1, !1);
			for (var a20 = bU.result.a20, fS = a20.length, hG = ah.hG, h = [], aC = 0; aC < fS; aC++) {
				var h0 = a20[aC];
				h.push({
					h0: h0,
					ea: hG[h0]
				})
			}
			h.sort((fl, fm) => fm.ea - fl.ea);
			var a2X = ah.a0e,
				ea = bU.result.a2n,
				uq = bU.result.a2c,
				ru = "",
				a2e = 0;
			for (aC = 0; aC < fS; aC++) {
				var iC = h[aC].ea * uq / (100 * ea),
					a2p = a2X[h[aC].h0] + ": " + iC.toFixed(2) + "   ";
				h[aC].h0 === aE.fC && (a2e = iC), 2 < aC && 4 !== fS ? 3 === aC && (ru += "(" + L(34, [fS - 3]) + ")") : ru += a2p
			}
			aO.a0d(560, bD.tB.a2q(ru), 40, 0, bE.pZ, bE.pE, -1, !1), a2e ? aO.a0d(580, L(35, [a2e.toFixed(2) + " + " + a2l().toFixed(2)]), 40, 0, bE.pZ, bE.pE, -1, !1) : bD.go.he(aE.fC) && a2d();
			return a2e
		}()), 2 === aE.a28 || 7 <= aE.l5 || function(a2e) {
			var a20 = bU.result.a20,
				fS = a20.length,
				a2r = ah.a2r,
				hG = ah.hG,
				a2s = [];
			loop: for (var aC = 0; aC < fS; aC++) {
				var h0 = a20[aC],
					a2t = bD.tB.a2u(a2r[h0]);
				if (null !== a2t) {
					for (var a2v = hG[h0], fm = a2s.length - 1; 0 <= fm; fm--)
						if (a2t === a2s[fm].name) {
							a2s[fm].ea += a2v, a2s[fm].h.push({
								h0: h0,
								ea: a2v
							});
							continue loop
						} a2s.push({
						name: a2t,
						ea: a2v,
						h: [{
							h0: h0,
							ea: a2v
						}]
					})
				}
			}
			if (0 !== a2s.length) {
				a2s.sort((fl, fm) => fm.ea - fl.ea);
				var h = a2s[0].h,
					a2w = (h.sort((fl, fm) => fm.ea - fl.ea), "[" + a2s[0].name + "]"),
					a2x = 512 * bU.result.a2c / 26214400,
					li = (aO.a0d(0, L(37, [a2w, a2x.toFixed(4)]), 40, 0, bE.pH, bE.pE, -1, !1), h.length),
					yK = a2s[0].ea,
					a2y = 1e4 * a2x;
				for (aC = 0; aC < li; aC++)
					if (h[aC].h0 === aE.fC) {
						aO.a0d(600, L(38, [(a2y * h[aC].ea / (10 * yK)).toFixed(2)]), 40, 0, bE.pH, bE.pE, -1, !1), aO.a0d(640, L(39, [(.2 * a2e).toFixed(2), a2w]), 40, 0, bE.pH, bE.pE, -1, !1);
						break
					}
			}
		}(a2e))
	}, this.a2i = function() {
		var a2j, ym;
		aE.l7 || (a2j = ah, ym = aE.fC, 0 === a2j.a2k[ym]) || a2j.jr[ym] < 1 || 2 * a2j.rc[ym] > 3 * (a2j.jq[ym] + a2j.jr[ym]) || a2d()
	}
}

function a1p() {
	this.dk = function() {
		this.a2z = 0, this.a20 = [], this.a2n = 0, this.a2c = 0
	}, this.a2F = function() {
		var tl;
		aE.l7 || (tl = this, 2 === aE.a28 ? tl.a20 = bU.a1q.a1y() : aE.iM ? tl.a20 = bU.a1q.a22() : tl.a20 = bU.a1q.a24(), tl.a2z = bl.a31.a32(), tl.a2n = Math.max(1, bU.a1q.a25(tl.a20)), bB.go.rJ(), 8 === aE.l5 ? bU.result.a2c = 0 : tl.a2c =
			100 * bU.result.a2z * (1 + aE.a0c))
	}
}

function a1v() {
	this.a2F = function() {
		if (2 === aE.a28) aE.a2G = 2;
		else {
			if (8 === aE.l5) bD.go.kA(0) || 0 === ah.nN[0] ? aE.a2T = 1 : bD.go.kA(1) || 0 === ah.nN[1] ? aE.a2T = 0 : aE.a2T = +(ah.hG[1] > ah.hG[0]);
			else {
				if (aE.iM) {
					var lL = bk.a35();
					if (aE.a23 = lL, bj.lA[lL]) return void(aE.a2G = +(bj.fQ[aE.fC] === lL))
				}
				aE.a2T = mO[0]
			}
			aE.a2G = +(aE.a2T === aE.fC)
		}
	}
}

function dL() {
	this.id = 0, this.e3 = 0, this.xS = null, this.xT = null, this.xU = null, this.xa = null, this.a2 = new a36, this.dk = function() {
		var self, e3;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e3 = Android.getVersion()) < 12 || (self.e3 = e3, self.id = 1, self.xT = Android),
			function(self) {
				var e3;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.xU = mwIOSdataX, self.xa = window.webkit.messageHandlers.iosCommandA, e3 = self
					.xU.version, self.e3 = e3 ? Number(e3) : 0)
			}(this),
			function(self) {
				var xS;
				try {
					if (!(xS = window.localStorage)) return;
					xS.setItem("tls7", "1"), xS.removeItem("tls7")
				} catch (error) {
					return
				}
				self.xS = xS
			}(this)
	}
}

function a36() {
	this.a3A = function() {
		bm.qh.xq(), bm.qh.xr(), b1.z.close(0, 3255), 0 === a1.id ? a1.xS && a1.xS.clear() : 1 === a1.id ? a1.xT.saveString(199, "") : 2 === a1.id && a1.xa.postMessage("clear")
	}, this.a3B = function() {
		2 === a1.id ? a1.xa.postMessage("showConsentForm") : 1 === a1.id && a1.xT.setState(7)
	}, this.a3C = function() {
		this.setState(14)
	}, this.ib = function() {
		return 1 === bm.buffer.xH(2)
	}, this.a3D = function() {
		bm.buffer.xG(102, "")
	}, this.setState = function(a3E) {
		1 === a1.id && 5 <= a1.e3 && a1.xT.setState(a3E)
	}, this.a3 = function() {
		var a3F;
		1 === a1.id && 7 <= a1.e3 ? a1.xT.setState(5) : 2 === a1.id ? a1.xa.postMessage("reload 0") : ((a3F = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a3F.toString())
	}, this.eV = function() {
		0 !== a1.id && (1 === a1.id ? a1.xT.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e3 ? a1.xa.postMessage("prepare ad 2904813909") : a1.xa.postMessage("loadAds 2904813909")))
	}, this.eb = function(ea) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e3 && (a1.xT.presentAd(ea), !0) : 2 === a1.id && 0 !== a1.e3 && (a1.xa.postMessage("showAd"), !0))
	}, this.du = function() {
		2 === a1.id && a1.e3 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a3G + "' target='_blank'>" + bN
			.a3G + "</a>", !0, [new x("⬅️ " + L(40), function() {
				u.v(0)
			}, bE.pw)]))
	}
}

function da() {
	function a3I(e) {
		m7(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(40), function() {
				u.a3J()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.pe)]))
	}

	function a3V(e) {
		m7(e), u.v(4, 5, new w(L(41), a3Q(e), !0))
	}

	function a3Q(e) {
		var ru = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + ru : 4527 === e ? "Player already in lobby" + ru : 4577 === e ? "Your IP is banned." + ru : 4530 === e ? "Lobby Timeout" + ru : 4528 === e ?
			"Lobby Kick: Another login detected." + ru : 4540 === e ? "You have been kicked." + ru : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + ru : 4555 === e ? "This Account is blocked." + ru :
			4580 === e ? "More Gold needed" + ru : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + ru : 4591 === e ? "The algo determined you are a bot." + ru : "Unknown error" + ru
	}

	function m7(e) {
		a3L(e), u.z.a0()
	}

	function a3L(e) {
		4540 === e && b1.z.a3X(e);
		var a3E = ab.a3K();
		bw.close(), 6 === a3E ? b1.z.a3X(e) : bq.ez ? (u.y(), bq.vr(), b1.z.close(b1.z.f0, 3256)) : 8 === a3E && aE.a3Y(!0)
	}
	this.q = [], this.a3H = function(oG, e) {
		if (this.q.push(e), 8 === u.uT && 0 === oG)
			if (4211 === e) a3I(e);
			else {
				if (bq.ez && (4495 === e || 4480 === e) && b1.z.f0 !== oG) return void u.a3J();
				if (8 !== ab.a3K() && a3L(), 4480 === e) return bm.qh.xs(), void u.v(4, 0, new w(L(43), L(44), !0));
				var a3N = 0;
				u.a3O() && 10 === u.a3O().a3P && (a3N = u.a3O().a3P), u.v(4, a3N, new w(L(41), a3Q(e), !0))
			}
		else {
			a3N = ab.a3K();
			if (6 === a3N) {
				if (4211 === e) return void a3I(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a3R(oG)
			} else if (bq.ez) {
				if (oG !== b1.z.f0) return
			} else {
				if (8 === a3N) return void(oG !== b1.z.a3S || aE.l7 || 1 !== aE.a2B || aE.hb || aO.a3T(L(42, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				m7(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(40), function() {
					u.a3J()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.pe)]))
			} : a3V)(e)
		}
	}, this.a3W = function(e) {
		this.q.push(e), 8 === ab.a3K() ? aE.l7 || 1 !== aE.a2B || aO.a3T(L(42, [e])) : a3V(e)
	}, this.t = function() {
		this.q.push(3268), m7(3268)
	}
}

function dA() {
	var a3Z, a3a, a3b = -15e3,
		a3c = !1;

	function hf(e) {
		a3w() || (a3c = !0, a3x(e, 1), b1.z.a3y(b1.z.a3S), a3z(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a3l(e) {
		a3b = bi.eZ, a3x(e, 1), b1.z.a3y(b1.z.a3S), 0 < e.touches.length && (a3Z = Math.floor(i.l * e.touches[0].clientX), a3a = Math.floor(i.l * e.touches[0].clientY), av.a3l(e) || a3z(a3Z, a3a))
	}

	function a3z(fZ, fb) {
		u.hf(fZ, fb), 0 === aE.a2B ? ab.hf(fZ, fb) : bF.a40(fZ, fb) || bh.hf(fZ, fb) || aY.hf(fZ, fb) || aM.a41(fZ, fb) || aQ.hf(fZ, fb) || 0 <= aN.hf(fZ, fb) || ax.hf(fZ, fb) || bM.a42(fZ, fb) || aM.a43(fZ, fb)
	}

	function a3h(e) {
		a3w() || (a3c = !0, a3x(e, 1), a44(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a3m(e) {
		a3b = bi.eZ, a3x(e, 1), 0 < e.touches.length && (a3Z = Math.floor(i.l * e.touches[0].clientX), a3a = Math.floor(i.l * e.touches[0].clientY), av.a3m(e) || a44(a3Z, a3a))
	}

	function a44(fZ, fb) {
		bM.sf() || (bM.hX = fZ, bM.hY = fb), u.a3h(fZ, fb), 0 === aE.a2B ? ab.a3h(fZ, fb) : (bW.hZ(fZ, fb), bh.a3h(fZ, fb) || (aN.a3h(fZ, fb), aM.iE() ? aM.a3h(fZ, fb) : aS.hg ? aS.a3h(fZ) && (bi.ds = !0) : (aW.a3h(fZ, fb), aT.nt && aT.a3h(fZ, fb) &&
			(bi.ds = !0))))
	}

	function a3j(e) {
		a3w() || (a3x(e, 1), a45(), 0 === aE.a2B ? (ab.click(-1024, -1024), aU.reset()) : (aW.a46(-1024, -1024), aN.a3h(-1024, -1024), aS.a47(), aT.nt = !1))
	}

	function a3i(e) {
		a3w() || (a3x(e, 1), a48(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a3f && (bM.a3f = !1, e.preventDefault()))
	}

	function click(e) {
		a3w() || a3x(e, 1)
	}

	function a3n(e) {
		a3b = bi.eZ, a3x(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a2B ? aT.nt = !1 : av.a49() || (a48(a3Z, a3a, !1), bM.a3f && (bM.a3f = !1, e.preventDefault()))
	}

	function a3o(e) {
		a3b = bi.eZ, a3x(e, 1), a48(a3Z, a3a, !1), bM.a3f && (bM.a3f = !1, e.preventDefault())
	}

	function a3p(e) {}

	function a3q(e) {}

	function a3r(e) {
		a3w() || a3x(e, 0)
	}

	function a48(fZ, fb, a4A) {
		a45(), 0 === aE.a2B ? ab.click(fZ, fb) : (aW.a46(fZ, fb), bh.a46(), aS.a47(), aT.nt = !1, aM.click(fZ, fb, a4A) ? bi.ds = !0 : aN.a3i(fZ, fb))
	}

	function a45() {
		u.a45()
	}

	function a3k(e) {
		var fZ, fb, deltaY;
		a3w() || (a3x(e, 1), b1.z.a3y(b1.z.a3S), fZ = Math.floor(i.l * e.clientX), fb = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a3k(fZ, fb, deltaY), 0 === aE.a2B ? ab.a3k(fZ, fb, deltaY) : aW.a3k(fZ, fb,
			deltaY) || (aS.a4B(fZ, fb) ? aS.a3k(deltaY) && (bi.ds = !0) : aT.a3k(fZ, fb, deltaY)))
	}

	function a3s(e) {
		a3x(e, 0)
	}

	function a3x(e, id) {
		0 === id && u.iE() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a3K() && e.preventDefault()
	}

	function a3t(e) {
		if (__fx.keybindHandler(e.key)) return;
		a3w() || 0 < i.u9 || (e = e.code) && e.length && (ba.ej(e, 18) ? at.a4D(3) : ba.ej(e, 22) ? at.a4D(0) : ba.ej(e, 20) ? at.a4D(1) : ba.ej(e, 24) ? at.a4D(2) : ba.ej(e, 10) ? aS.a4E(31 / 32) : ba.ej(e, 8) ? aS.a4E(32 / 31) : ba.ej(e, 6) ? aS
			.a4E(7 / 8) : ba.ej(e, 4) ? aS.a4E(8 / 7) : ba.ej(e, 14) ? 0 !== aE.a2B && aT.a3k(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ej(e, 16) ? 0 !== aE.a2B && aT.a3k(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ej(e, 0) ?
			aE.a2B && bW.ha(0) : ba.ej(e, 2) ? aE.a2B && bW.ha(1) : ba.ej(e, 30) ? aE.a2B && bW.ha(2) : ba.ej(e, 26) ? aE.a2B && bW.i8() : ba.ej(e, 28) && aE.a2B && bW.iD())
	}

	function a3u(e) {
		if (!a3w() && !(0 < i.u9 || bi.eZ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a4F(1) || "Space" === code && u.a4F(0))) return bq.ez ? bq.vx.a4F(code) ? void 0 : void("Escape" === code && bM.fv()) : void(8 !== ab.a3K() && ab.a4F(e) ? bi.ds = !0 : "Escape" === code ?
				bM.fv() : ba.ej(code, 18) ? at.a4G(3) : ba.ej(code, 22) ? at.a4G(0) : ba.ej(code, 20) ? at.a4G(1) : ba.ej(code, 24) ? at.a4G(2) : ba.ej(code, 12) ? bF.a4H(!aE.nr) : "Space" === code && aE.a2B && (aN.hc && aN.a4I(), aE.hb) &&
				bF.a4J(!1))
		}
	}

	function a3v() {
		"hidden" !== document.visibilityState && (bi.ds = !0)
	}

	function a3w() {
		return a3b + 15e3 > bi.eZ
	}

	function resize() {
		i.a4L()
	}
	this.a3d = 0, this.a3e = "", this.a3f = !1, this.hX = 0, this.hY = 0, this.dk = function() {
		a3g.addEventListener("mousedown", hf, {
			passive: !1
		}), a3g.addEventListener("mousemove", a3h, {
			passive: !1
		}), a3g.addEventListener("mouseup", a3i, {
			passive: !1
		}), a3g.addEventListener("click", click, {
			passive: !1
		}), a3g.addEventListener("mouseleave", a3j, {
			passive: !1
		}), a3g.addEventListener("wheel", a3k, {
			passive: !1
		}), a3g.addEventListener("touchstart", a3l, {
			passive: !1
		}), a3g.addEventListener("touchmove", a3m, {
			passive: !1
		}), a3g.addEventListener("touchend", a3n, {
			passive: !1
		}), a3g.addEventListener("touchcancel", a3o, {
			passive: !1
		}), a3g.addEventListener("dragover", a3p), a3g.addEventListener("drop", a3q), a3g.addEventListener("dblclick", a3r), document.addEventListener("contextmenu", a3s), document.addEventListener("keydown", a3t), document.addEventListener(
			"keyup", a3u), document.addEventListener("visibilitychange", a3v), window.addEventListener("resize", resize)
	}, this.a42 = function(fZ, fb) {
		return !!bF.hf(fZ, fb) || !!(aW.hf(fZ, fb) || aT.hf(fZ, fb) || aS.hf(fZ, fb) || aO.hf(fZ, fb))
	}, this.a4K = a3w, this.sf = function() {
		return !a3c || 0 < a3b
	}, this.fv = function() {
		if (!u.iE()) return 8 === ab.a3K() ? aE.nr ? void bF.a4H(!1) : bh.iE ? void bh.a4I() : void aN.a4I() : void(7 !== ab.a3K() && 6 === ab.a3K() && aa.a4M());
		u.a4F(2)
	}
}

function c3() {
	this.sD = new a4N, this.sL = new a4O, this.go = new a4P, this.tB = new a4Q, this.on = new a4R, this.ok = new a4S, this.canvas = new a4T, this.color = new a4U, this.a4V = new a4W, this.dk = function() {
		this.sD.xp()
	}
}

function a4O() {
	this.yk = function(h) {
		h.fill(0)
	}, this.a4X = function(h) {
		for (var fS = h.length, aC = 0; aC < fS; aC++) h[aC] = []
	}, this.a4Y = function(a1H, a4Z) {
		for (var a1I = bR.g2, aC = 0; aC < 3; aC++) a1I[aC] = a4Z * a1H[aC];
		return a1I
	}, this.a4a = function(a1H, a1I, a4b) {
		for (var k2 = 0, aC = 0; aC < 3; aC++) k2 += Math.abs(a1H[aC] - a1I[aC]);
		return a4b <= k2
	}, this.a4c = function(a1H, a4d) {
		for (var aC = 0; aC < 3; aC++) a1H[aC] = bO.ia(a1H[aC] + a4d, 0, 255);
		return a1H
	}, this.a4e = function(h, um, un) {
		un = un || h.length - 1;
		for (var a4f = 0, aC = um = um || 0; aC <= un; aC++) a4f += h[aC];
		return a4f
	}, this.a4g = function(h, a4h) {
		for (var aC, a4i, fS = h.length, a4j = [], fl = fS - 1; 0 <= fl; fl--) {
			for (aC = a4i = 0; aC < fS; aC++) a4h(h[aC]) < a4h(h[a4i]) && (a4i = aC);
			fS--, a4j.push(h[a4i]), h[a4i] = h[fS], h.pop()
		}
		return a4j
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
	}, this.a4k = function(h, fu) {
		for (var fS = h.length, gv = 0, aC = 0; aC < fS; aC++) gv += h[aC] > fu;
		return gv
	}, this.a4l = function(a4m, a4n, min) {
		for (var fS = a4n[0], aC = fS - 1; 0 <= aC; aC--) a4m[aC] < min && (a4m[aC] = a4m[--fS]);
		a4n[0] = fS
	}, this.a4o = function(h, fS, value) {
		for (var aC = 0; aC < fS; aC++) h[aC] -= value
	}, this.a4p = function(h) {
		for (var fS = h.length, aC = 0; aC < fS; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a4q = function(ru, h, a4r) {
		h.fill(0);
		for (var uq = ru.split(","), fS = Math.min(uq.length, h.length), aC = 0; aC < fS; aC++) h[aC] = Math.min(parseInt(uq[aC]), a4r)
	}, this.a4s = function(ru, h, t8) {
		h.fill("");
		for (var uq = ru.split('"'), fS = Math.min(uq.length, 2 * h.length), iK = 0, aC = 1; aC < fS; aC += 2) h[iK++] = uq[aC].slice(0, t8)
	}, this.a4t = function(h, gv) {
		if (0 === gv) h.fill(0);
		else {
			var a4f = this.a4e(h),
				fS = h.length;
			if (0 === a4f) h.fill(bO.ft(gv, fS));
			else
				for (var aC = 0; aC < fS; aC++) h[aC] = bO.ft(gv * h[aC], a4f);
			if (0 === (a4f = this.a4e(h))) h[1] = gv;
			else
				for (var iK = 0; a4f++ < gv;) h[iK = (iK + 1) % fS] && h[iK]++
		}
	}, this.a4u = function(h) {
		if (!h) return 0;
		var fS = h.length;
		if (0 === fS) return 0;
		for (var fu = h[fS - 1], aC = fS - 2; 0 <= aC; aC--)
			if (h[aC] !== fu) return aC + 2;
		return 1
	}, this.a4v = function(h) {
		for (var a4f = 0, aC = 0; aC < h.length; aC++) a4f += h[aC].length;
		return a4f
	}, this.a4w = function(a4x) {
		for (var h = [], aC = 0; aC < a4x.length; aC++) h = h.concat(a4x[aC]);
		return h
	}, this.has = function(h, fu) {
		for (var fS = h.length, aC = 0; aC < fS; aC++)
			if (h[aC] === fu) return !0;
		return !1
	}
}

function a4T() {
	this.a0v = function(a4y, eI, a4z) {
		var iO = a4y.height,
			a50 = bD.sD.ya(iO, iO),
			iU = bD.sD.getContext(a50);
		return function(j, iU, a4z) {
			iU.fillStyle = a4z, iU.beginPath(), iU.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), iU.fill()
		}(iO, iU, a4z), iU.drawImage(a4y, -eI * iO, 0), a50
	}, this.a52 = function(a53) {
		var iU, iR, iO = a53.height;
		return a53.width === iO && (iR = (iU = bD.sD.getContext(a53, !0)).getImageData(0, 0, iO, iO), bD.ok.a54(iR.data, iO, iO, .9), iU.putImageData(iR, 0, 0)), a53
	}
}

function a4U() {
	this.a55 = function(fu) {
		return [fu >> 12 & 63, fu >> 6 & 63, 63 & fu]
	}, this.a56 = function(fu) {
		for (var h = this.a55(fu), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a57 = function(fu) {
		fu = this.a56(fu);
		return bD.color.p9(fu[0], fu[1], fu[2])
	}, this.a58 = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.p9 = function(eH, uq, fm) {
		return "rgb(" + eH + "," + uq + "," + fm + ")"
	}, this.pB = function(eH, uq, fm, fl) {
		return "rgba(" + eH + "," + uq + "," + fm + "," + fl.toFixed(3) + ")"
	}, this.sh = function(ej) {
		for (var h = ej.split("(")[1].split(","), g1 = bR.g1, aC = 0; aC < 3; aC++) g1[aC] = parseInt(h[aC]);
		return 4 === h.length ? g1[3] = 255 * parseFloat(h[3].slice(0, -1)) : g1[3] = 255, g1
	}, this.si = function(a59, fV) {
		for (var h = a59.slice(a59.indexOf("(") + 1, a59.indexOf(")")).split(","), g1 = bR.g1, aC = 0; aC < 3; aC++) g1[aC] = bO.ia(parseInt(h[aC].trim(), 10) + fV, 0, 255);
		return 3 === h.length ? this.p9(g1[0], g1[1], g1[2]) : (a59 = parseFloat(h[3].trim()), this.pB(g1[0], g1[1], g1[2], a59 = 0 === a59 ? .3 : a59))
	}, this.wR = function(a5A, a5B) {
		for (var k2 = 0, aC = 0; aC < 3; aC++) k2 += Math.abs(a5B[aC] - a5A[aC]);
		if (!(240 <= k2))
			for (aC = 0; aC < 3; aC++) a5B[aC] = a5A[aC] + (a5A[aC] < 128 ? 80 : -80)
	}, this.a5C = function(h) {
		for (var ru = "#", aC = 0; aC < 3; aC++) {
			var eH = h[aC].toString(16);
			ru += 1 === eH.length ? "0" + eH : eH
		}
		return ru
	}, this.a5D = function(ru) {
		var eH, uq;
		return ru.length < 7 ? bE.p8 : (eH = parseInt(ru.slice(1, 3), 16), uq = parseInt(ru.slice(3, 5), 16), ru = parseInt(ru.slice(5, 7), 16), this.p9(eH, uq, ru))
	}
}

function a4R() {
	this.a5E = function(ru, font, maxWidth) {
		if (font && (wm.font = font), wm.measureText(ru).width <= maxWidth) return ru;
		for (var aC = ru.length - 1; 1 <= aC; aC--)
			if (ru = ru.substring(0, aC), wm.measureText(ru + "...").width <= maxWidth) return ru + "...";
		return "..."
	}
}

function a4W() {
	var a5G = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a5H = function(eZ) {
		var a5J, ru = new Date(eZ.getTime() - 6e4 * eZ.getTimezoneOffset()).toUTCString();
		return ru.length < 12 || (ru = ru.substring(5, ru.length), 0 === (eZ = eZ.getTimezoneOffset())) ? ru : (a5J = (eZ < 0 ? "+" : "-") + bO.ft(Math.abs(eZ), 60), 0 == (eZ = Math.abs(eZ) % 60) ? ru + a5J : ru + a5J + ":" + (eZ < 10 ? "0" :
			"") + eZ)
	}, this.a5K = function(eZ) {
		var ru = eZ.toUTCString();
		return ru.length < 12 ? ru : function(eZ) {
			return a5G[eZ.getUTCDay()]
		}(eZ) + ", " + ru.substring(5, ru.length - 4)
	}
}

function a4N() {
	var a5M = null;
	this.a1C = 0, this.xp = function() {
		var fu = bm.buffer.data[5].value;
		a5M = "px " + fu, "system-ui" !== fu && (a5M += ", system-ui"), this.a1C = iN(32, 32, ["a", "b", "m"], 200, a5M)
	}, this.ya = function(j, k) {
		var ej = document.createElement("canvas");
		return ej.width = j, ej.height = k, ej
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(on, j, k) {
		return on.getImageData(0, 0, j, k)
	}, this.u1 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a5M : 1 === type ? "bold " + size + a5M : 2 === type ? "lighter " + size + a5M : 3 === type ? "italic " + size + a5M : 4 === type ? "oblique " + size + a5M : 5 === type ? "small-caps " +
			size + a5M : "small-caps bold " + size + a5M
	}, this.textAlign = function(iU, id) {
		iU.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iU, id) {
		iU.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.sN = function(e, code, color) {
		color = this.sM(bf.u3) + " solid " + (color || bE.pH);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.us = function(e, fZ, fb, j, k) {
		e = e.style;
		e.left = this.ut(fZ), e.top = this.ut(fb), e.width = this.ut(j), e.height = this.ut(k)
	}, this.sE = function(fu) {
		return 1 + fu * a1.a2.ib()
	}, this.tU = function(o0, h1) {
		return o0 * this.sE(void 0 === h1 ? .5 : h1) * i.ic / i.l
	}, this.ur = function(o0, h1) {
		return o0 * this.sE(void 0 === h1 ? .5 : h1) * i.ic
	}, this.uY = function(o0, h1, a5N) {
		return this.sE(h1) * Math.min(o0 * i.ic, a5N * i.j) / i.l
	}, this.sM = function(fu) {
		return fu.toFixed(1) + "px"
	}, this.ut = function(fu) {
		return this.wD(fu).toFixed(1) + "px"
	}, this.wD = function(fu) {
		return fu / i.l
	}, this.a5P = function(a5Q) {
		for (var ru = "<ul>", fS = a5Q.length, aC = 0; aC < fS; aC++) ru += "<li>" + a5Q[aC][0] + ": <a href='" + a5Q[aC][1] + "' target='_blank'>" + a5Q[aC][0] + "</a></li>";
		return ru += "</ul>"
	}, this.a5R = function(a5S) {
		return "<a href='" + a5S + "' target='_blank'>" + a5S + "</a>"
	}, this.a5T = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.wP = function(e) {
		var ea = e.textContent;
		bD.tB.a5U(ea, "✔") || (1 === ea.length ? e.textContent = "✔" : e.textContent = ea + " ✔", setTimeout(function() {
			e.textContent = ea
		}, 500))
	}, this.measureText = function(ru) {
		return wm.measureText(ru).width
	}, this.ui = function(ob) {
		ob.style.overflowX = "auto", ob.style.overflowY = "hidden", ob.style.whiteSpace = "nowrap", ob.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.uv = this.scrollLeft, e.preventDefault())
		}), ob.addEventListener("scroll", function() {
			this.uv = this.scrollLeft
		})
	}
}

function a4P() {
	this.hd = function(a3E) {
		return 0 === a3E ? 1 === aE.a2B && aE.hq : 1 === a3E ? 1 === aE.a2B && !aE.hq : 2 === aE.a2B
	}, this.he = function(player) {
		return 0 !== ah.nN[player] && 2 !== ah.a5V[player]
	}, this.a5W = function(player) {
		return player === aE.fC && 2 !== ah.a5V[player]
	}, this.lR = function(player, jw) {
		return player !== jw && (0 === bj.fQ[player] || bj.fQ[player] !== bj.fQ[jw])
	}, this.mY = function() {
		return am.lJ < 2 ? 0 : aE.iM ? 1 < bk.a5X() : ah.hG[mO[1]]
	}, this.a5Y = function() {
		var lJ = am.lJ;
		if (0 !== lJ) {
			if (!aE.iM) return !this.kA(mO[0]);
			for (var fQ = bj.fQ, lL = bk.lM(), lO = am.lO, aC = lJ - 1; 0 <= aC; aC--) {
				var h0 = lO[aC];
				if (fQ[h0] === lL && !this.kA(h0)) return 1
			}
		}
		return 0
	}, this.a5Z = function(player) {
		return player === aE.fC
	}, this.a5a = function(jw, o0) {
		return ah.hU[aE.fC] < o0 * ah.hU[jw]
	}, this.kA = function(player) {
		return player >= aE.kn || 2 === ah.a5V[player]
	}, this.ll = function(player) {
		return 0 !== ah.nN[player]
	}, this.a21 = function(player) {
		return player < aE.kn
	}, this.ra = function(a5b, a5c) {
		return a5b !== a5c
	}, this.gr = function(player, fu) {
		var min;
		return fu = this.a5d(player, fu), ah.hU[player] += fu, ah.a5e[player] && (min = Math.min(ah.a5e[player], ah.hU[player]), ah.a5e[player] -= min, ah.hU[player] -= min), fu
	}, this.a5d = function(player, fu) {
		var a5f = ah.hU[player];
		return fu = Math.min(fu, ah.hG[player] * aE.a5g - a5f), fu = Math.min(fu, aE.a5h - a5f), Math.max(fu, 0)
	}, this.mv = function(player, j5, a5i, a5j) {
		var a5f = ah.hU[player],
			j5 = bO.ft(a5f * (j5 + 1), 1024),
			a5i = bO.ft(a5i * a5f, 1024),
			j5 = Math.min(j5, a5f - a5i);
		return 10 === aE.l5 && (j5 = b5.a5l(player, j5)), bR.fz[0] = j5, bR.fz[1] = a5i, a5j <= j5
	}, this.r4 = function(player, qm, ql) {
		var player = ah.hU[player],
			a5k = bO.ft(64 * player, 1024);
		return qm = Math.min(qm, player - a5k), qm = this.a5d(ql, qm), bR.fz[0] = qm, bR.fz[1] = a5k, 1 <= qm
	}, this.a5m = function(player, qm, ql) {
		var player = ah.hU[player],
			a5k = bO.ft(64 * player, 1024);
		return qm = Math.min(qm, player - a5k), this.a5d(ql, qm)
	}, this.r6 = function(qm, ql) {
		return qm = this.a5d(ql, qm), bR.fz[0] = qm, bR.fz[1] = 0, 1 <= qm
	}, this.j4 = function(player, a5n) {
		return bO.ft(ah.hU[player] * (a5n + 1), 1024)
	}, this.a5o = function(player, a5i) {
		a5i = bO.ft(a5i * ah.hU[player], 1024);
		bR.fz[1] = a5i, ah.hU[player] -= a5i
	}, this.gp = function(player, a5p) {
		var gD, gF, fm = ah.hU[player];
		return a5p <= fm ? ah.hU[player] -= a5p : (ah.hU[player] = 0, gF = ah.a5e[player] + (gD = 5 * ((fm = a5p - fm) >> 2)), bg.gs(player, gD - fm, 12), gF <= aE.a5q ? ah.a5e[player] = gF : (ah.a5e[player] = aE.a5q, bg.gs(player, gF - aE.a5q,
			18))), a5p
	}, this.lz = function(player, j5) {
		var hU = ah.hU,
			a5f = hU[player],
			j5 = bO.ft(a5f * (j5 + 1), 1024),
			a5k = Math.max(bO.ft(a5f, 10), 1e3);
		return (j5 = Math.min(j5, a5f - a5k)) < 0 ? (hU[player] = 0, a5k = Math.min(1e3, a5f + aE.a5q - ah.a5e[player]), bR.fz[1] = a5k, ah.a5e[player] += a5k - a5f, 0) : (bR.fz[1] = a5k, 10 === aE.l5 && (j5 = b5.a5l(player, j5)), hU[player] -=
			a5k + j5, j5)
	}, this.mx = function(player) {
		ah.hU[player] -= bR.fz[0] + bR.fz[1]
	}, this.rb = function(player, jw) {
		return (jw = Math.min(jw, aE.fP)) < aE.fP && 0 === ah.nN[jw] && (jw = aE.fP), (bR.fO[0] = jw) === aE.fP || bv.fL(player, jw)
	}, this.re = function(player, ql) {
		return 0 !== ah.nN[ql] && !bv.fL(player, ql)
	}, this.a5r = function(player, a5s) {
		for (var h0, fS = am.lJ, a5t = 0, a5u = mO, aC = 0; aC < fS; aC++)
			if (h0 = a5u[aC], !this.kA(h0)) {
				if (player === h0) return !0;
				if (++a5t > a5s) return !1
			} return !1
	}, this.mK = function(h0) {
		var a5v = aE.iM ? bk.lK() : ah.hG[mO[0]];
		return a5v >= bO.ft(h0 * aE.kX, 100)
	}, this.a5w = function(fu, min, max) {
		return Math.floor(bO.ia(isNaN(fu) ? 0 : Number(fu), min, max))
	}
}

function a4S() {
	this.a5x = function(canvas, a5y, a5z) {
		var j = canvas.width,
			k = canvas.height,
			ej = bD.sD.ya(j, k),
			iU = bD.sD.getContext(ej, !0),
			canvas = (iU.drawImage(canvas, 0, 0), iU.getImageData(0, 0, j, k));
		return a5y(canvas.data, j, k, a5z), iU.putImageData(canvas, 0, 0), ej
	}, this.a60 = function(yl, j, k) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				yl[3 + aC] = yl[aC], yl[aC] = yl[1 + aC] = yl[2 + aC] = 255
			}
	}, this.a61 = function(yl, j, k) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				yl[1 + aC] > yl[2 + aC] + 10 && (yl[3 + aC] = yl[aC], yl[1 + aC] = yl[2 + aC])
			}
	}, this.a62 = function(yl, j, k, a5z) {
		for (var gap = Math.floor(Math.min(j, k) * a5z), fZ = 0; fZ < j; fZ++)
			for (var aC, fb = 0; fb < k; fb++)(fZ < gap || fb < gap || j - gap <= fZ || k - gap <= fb) && (yl[3 + (aC = 4 * (fZ + fb * j))] = 255 - 255 * (yl[1 + aC] - yl[aC]) / (255 - yl[aC]))
	}, this.a63 = function(yl, j, k, a5z) {
		for (var fZ = j - 1; 0 <= fZ; fZ--)
			for (var fb = k - 1; 0 <= fb; fb--) {
				var aC = 4 * (fZ + fb * j);
				yl[aC] = a5z[0], yl[1 + aC] = a5z[1], yl[2 + aC] = a5z[2]
			}
	}, this.a64 = function(yl, j, k, a5z) {
		for (var gap = Math.floor(j * a5z), fZ = 0; fZ < j; fZ++)
			for (var aC, fb = 0; fb < k; fb++)(fZ < gap || fb < gap || j - gap <= fZ || k - gap <= fb) && (yl[aC = 4 * (fZ + fb * j)] = yl[1 + aC] = yl[2 + aC] = 0)
	}, this.a65 = function(yl, j, k) {
		for (var fb, aC, fZ = j - 1; 0 <= fZ; fZ--)
			for (fb = k - 1; 0 <= fb; fb--) 200 < yl[1 + (aC = 4 * (fZ + fb * j))] && yl[1 + aC] - 20 > yl[aC] && yl[1 + aC] - 20 > yl[2 + aC] ? yl[aC] + yl[2 + aC] < 40 ? yl[3 + aC] = 0 : (yl[3 + aC] = yl[aC], yl[aC] = 255, yl[1 + aC] = 255, yl[
				2 + aC] = 255) : yl[aC] < 50 && yl[1 + aC] < 50 && yl[2 + aC] < 50 && (yl[aC] + yl[1 + aC] + yl[2 + aC] < 50 ? yl[3 + aC] = 180 : yl[3 + aC] = 180 + Math.floor(75 * (yl[aC] + yl[1 + aC] + yl[2 + aC] - 50) / 100))
	}, this.a66 = function(yl, j, k) {
		for (var fb, aC, fZ = j - 1; 0 <= fZ; fZ--)
			for (fb = k - 1; 0 <= fb; fb--) yl[1 + (aC = 4 * (fZ + fb * j))] > yl[aC] + 20 && yl[1 + aC] > yl[2 + aC] + 20 && yl[aC] + yl[2] < 40 && (yl[3 + aC] = 255 - yl[1 + aC], yl[aC] = yl[1 + aC] = yl[2 + aC] = yl[aC])
	}, this.a54 = function(yl, j, k, a5z) {
		for (var eH = j >> 1, fZ = 0; fZ < j; fZ++)
			for (var fb = 0; fb < k; fb++) Math.sqrt((fZ - eH) * (fZ - eH) + (fb - eH) * (fb - eH)) > a5z * eH && (yl[4 * (fZ + fb * j) + 3] = 0)
	}
}

function a4Q() {
	var a67 = {
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
		a68 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.tC = function(el) {
		return el.replace(a68, function(match) {
			return a67[match] || match
		})
	}, this.a1S = function(fu) {
		var aC, a69, a6A, a6B, a6C;
		if (fu < 0) return "-" + this.a1S(Math.abs(fu));
		if (fu < 1e3) return fu.toString();
		for (a69 = Math.floor(Math.log(fu + .5) / Math.log(10)) + 1, a6A = Math.floor((a69 - 1) / 3), a6C = (a6B = fu.toString()).substring(a69 - 3, a69), aC = 1; aC < a6A; aC++) a6C = a6B.substring(a69 - 3 * (aC + 1), a69 - 3 * aC) + " " + a6C;
		return a6B.substring(0, a69 - 3 * a6A) + " " + a6C
	}, this.a6D = function(h0, a69) {
		return h0.toFixed(a69) + "%"
	}, this.a6E = function(fu, a6F) {
		return fu.toFixed(bO.ia(Math.floor((void 0 === a6F ? 3 : a6F) - Math.log10(Math.max(fu, 1))), 0, 8))
	}, this.a6G = function(fu, o0, a69) {
		return (fu * o0).toFixed(a69)
	}, this.a2u = function(username) {
		var fW, fH = username.indexOf("[");
		return !(fH < 0) && 1 < (fW = username.indexOf("]")) - fH && fW - fH <= 8 ? username.substring(fH + 1, fW).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a2u;
	this.a6H = function(ru) {
		for (var fl = Math.floor(.5 * ru.length + .5), o6 = Math.floor(.5 * (fl - 1)), aC = 0; aC < o6; aC++)
			for (var fm = -1; fm < 2; fm += 2) {
				var ej = fl + fm * aC;
				if (" " === ru[ej]) return [this.a2q(ru.substring(0, ej)), this.a6I(ru.substring(ej))]
			}
		return [ru.substring(0, fl), ru.substring(fl)]
	}, this.a6I = function(ru) {
		for (var fS = ru.length, aC = 0; aC < fS; aC++)
			if (" " !== ru[aC]) return ru.substring(aC);
		return ru
	}, this.a2q = function(ru) {
		for (var aC = ru.length - 1; 0 <= aC; aC--)
			if (" " !== ru[aC]) return ru.substring(0, aC + 1);
		return ru
	}, this.a6J = function(ru, a6K) {
		return ru.split("(")[0] + "(🧈 " + a6K.toFixed(2) + ")"
	}, this.startsWith = function(ru, a6L) {
		return ru.substring(0, a6L.length) === a6L
	}, this.a5U = function(ru, a6L) {
		var fS = ru.length;
		return ru.substring(fS - a6L.length, fS) === a6L
	}, this.a6M = function(h, a6N, a6O) {
		var ru = "",
			fS = h.length - 1;
		a6O = a6O || "";
		for (var aC = 0; aC < fS; aC++) ru += a6O + h[aC] + a6O + ",", (aC + 1) % a6N == 0 && (ru += "\n");
		return ru += a6O + h[fS] + a6O
	}, this.a6P = function(ru, a1H, a1I) {
		return ru.replace(new RegExp(a1H, "g"), a1I)
	}
}

function a6Q() {
	this.ei = function(player, fE) {
		aJ.a05(player, bP.fa(fE), bP.fc(fE)) && (bi.ds = !0), aE.l7 && this.ee()
	}, this.ee = function() {
		aE.hq = !1;
		for (var aC = 0; aC < aE.kn; aC++) 0 !== ah.nN[aC] && 0 === ah.hG[aC] && aJ.a0C(aC);
		0 !== ah.nN[aE.fC] ? (bg.nJ[7] = ah.hG[aE.fC], bg.nJ[8] = ah.hU[aE.fC], aS.a6R(), aX.a6S(), aE.hb || aI.ni(ah.jL[aE.fC] - 5, ah.jN[aE.fC] - 5, ah.jM[aE.fC] + 5, ah.jO[aE.fC] + 5), aw.dk()) : aY.show(!1, !1, !1, !0), aO.a6T(18), ag.a6U(),
			ag.n9(!0), bS.z.a6V(), aM.tS(), aE.rZ = null, be.a6W = !0, be.a6X(), aE.l7 && a1.a2.setState(1)
	}
}

function c5() {
	this.fP = 512, this.a5h = 15e8, this.a6Y = 1e9, this.a5q = 5e4, this.a6Z = 512, this.gm = 2, this.fC = 0, this.kn = 0, this.a2E = 0, this.l9 = 0, this.a2D = 0, this.zG = 512, this.zL = 512, this.a5g = 150, this.l7 = !0, this.hb = 0, this.a2B = 0,
		this.kX = 0, this.nr = !1, this.hq = 0, this.a6a = 0, this.iM = !1, this.zN = 0, this.zO = 0, this.l5 = 0, this.a0c = 0, this.rZ = null, this.a2U = new a0Q, this.a6b = 30, this.a28 = 0, this.a2G = 0, this.a2T = 0, this.a23 = 0, this.data =
		new a6c, this.a6d = new a6e, this.a6f = 0, this.a6g = "", this.a6h = function() {
			bR.dk(), bU.dk(), bt.clear(), this.a2E = this.kn = this.data.humanCount, this.l7 = 1 === this.a2E, this.nr = !1, this.hb = this.data.isReplay, this.l5 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.a0c = this.data.isContest, this.iM = this.l5 < 7 || 9 === this.l5, this.l5 = 10 === this.l5 && this.l7 ? 7 : this.l5, this.l5 = 8 === this.l5 && 2 !== this.kn ? 7 : this.l5, b0.dk(),
				this.zN = this.data.numberTeams, this.data.teamPlayerCount ? this.zO = +(0 < this.data.teamPlayerCount[0]) : (this.zO = 0, this.iM && this.l7 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.zN + 1), aE.a6d.a6i())), this.a6b = this.kn <= 2 ? 30 : this.kn <= 50 ? 40 : 50, this.a6a = this.hq = this.data.selectableSpawn, this.rZ = this.hq ? new a6Q : null, 1 === m.e1 ? this.zG = this.kn : this.zG = this.data
				.playerCount, this.zL = this.zG, this.l9 = this.zG - this.kn, this.a2D = 0, this.fC = this.data.selectedPlayer, this.a28 = 0, this.a2G = 0, this.a2T = 0, this.a23 = 0, az.a6j(this.data.spawningSeed), af.dk(), ah.dk(), ao.dk(), aj
				.a6k(), bB.qb.rN = [], bB.hs.qe = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dk(), this.a2B = 1, bg.dk(), a6l(), ad.dl(), aq.a6m(), be.dk(), ad
				.dk(), au.dk(), bP.dk(), bQ.dk(), ap.dk(), bY.a6n(), aF.dk(), aj.a8(), aJ.dk(), aK.dk(), am.a6o(), bC.dk(), bk.dk(), bS.dk(), bh.dk(), a6p.putImageData(a6q, 0, 0), aW.dk(), aT.dk(), aS.dk(), bF.dk(), ax.dk(), aV.dk(), aX.dk(), aN
			.dk(), aR.dk(), aO.dk(), aQ.dk(), aM.dk(), aY.dk(), aG.dk(), aH.dk(), gV(), ae.dk(), ag.dk(), b5.dk(), b6.dk(), b2.dk(), b8.dk(), b9.dk(), this.a2U.dk(), bi.a6n(), aI.nh(), 0 === ah.nN[aE.fC] && aY.show(!1, !0), ag.n9(!0), aw.dk(), bi
				.ds = !0, this.hb || this.l7 && this.hq || a1.a2.setState(1), this.a6f = 0
		}, this.a3Y = function(eY) {
			bC.rX.a6s.length ? this.a6g = bC.rX.a6s : (this.a6g = bC.a6t.a1d(), __fx.replayHistory.save(this.a6g)), b1.z.a6u(), bt.clear(), this.a2B = 0, bi.a6v(), a1.a2.setState(0), ab.setState(0), bX.eQ.show(eY), 2 === this.a6f ? u.z.a6w(0) : 1 ===
				this.a6f ? u.v(19) : u.v(5, 5)
		}, this.a6x = function() {
			return this.hb ? aN.hc || !bF.a6y : this.l7 && (aN.hc || this.hq)
		}, this.a6z = function() {
			return 1 === this.a2B && !this.hq
		}
}

function a6c() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a70 = null
}

function a6e() {
	this.a6i = function() {
		var a71 = aE.data;
		bD.sL.a4t(a71.teamPlayerCount, a71.playerCount), a71.numberTeams = bD.sL.a4k(a71.teamPlayerCount, 0), a71.teamPlayerCount[0] && a71.teamPlayerCount[7] && (a71.teamPlayerCount[7] = 0, this.a6i())
	}, this.a72 = function() {
		var a71 = aE.data;
		a71.mapType < 2 ? bV.a8(bV.a73(a71), a71.mapSeed) : bV.a74(a71.canvas)
	}, this.a75 = function() {
		var a71 = aE.data;
		a71.colorsData || (a71.colorsData = new Uint32Array(1)), 0 === a71.gameMode && (a71.colorsData[0] = bm.z.xn()), a71.selectableName && (a71.playerNamesData || (a71.playerNamesData = new Array(1)), a71.playerNamesData[0] = bm.buffer.data[
			122].value), a71.a70 = new Uint32Array(1), a71.a70[0] = bJ.uV.yQ(bm.buffer.data[105].value, 5)
	}, this.a76 = function() {
		aE.data = new a6c
	}
}

function df() {
	var a77 = [];
	this.r7 = function(player, ql, a78, a79) {
		player === aE.fC || ql === aE.fC || !a79 && bD.go.kA(player) || bD.go.kA(ql) || this.a0d(ah.a0e[player] + " supported " + ah.a0e[ql] + " with " + bD.tB.a1S(a78) + " ressource" + (1 === a78 ? "." : "s."))
	}, this.a0d = function(ru, qw) {
		ru = {
			eZ: aX.a7B(),
			ru: ru,
			qw: qw
		};
		a77.push(ru), 30 === u.uT && u.a3O().a0d(ru)
	}, this.clear = function() {
		a77 = [];
		var uq = u.a7C(30);
		uq && uq.clear()
	}, this.a7D = function() {
		return a77
	}
}

function dZ() {
	this.a19 = 0, this.gap = 0, this.u3 = 0, this.sJ = 0, this.dk = function() {
		this.resize()
	}, this.resize = function() {
		this.a19 = .0022 * bD.sD.sE(.5) * i.ic, this.u3 = this.a19 / i.l, this.gap = Math.max(Math.floor((a1.a2.ib() ? .0114 : .01296) * i.ic), 2), this.sJ = this.gap / i.l
	}
}

function dY() {
	this.a7E = function() {
		return a1.a2.ib() ? 2 : 1
	}
}

function cG() {
	var or, fZ, fb, a7F, a7G, a7H, eZ, a7I, a7J, a7K, a7L, gap, zoom, rG, a7M;

	function a7a(m2, m3, f6) {
		ad.fN(f6) || -1 === (m2 = bQ.lc.a7j(m2, m3)) ? aO.a7i(f6) : aO.a7k(m2)
	}

	function a7W(a7I) {
		for (var aC = rG.length - 1; 0 <= aC; aC--)
			if (rG[aC] === a7I) return 1
	}

	function a7U(a7R) {
		var aC, fS;
		if (-1 !== a7R)
			for (fS = or.length, aC = 0; aC < fS; aC++)
				if (or[aC].iE && or[aC].fZ + 1 === a7R % 4 && or[aC].fb + 1 === a7R >> 2) return aC;
		return -1
	}

	function a7S(m2, m3) {
		var uq = gap / 2;
		return m2 < fZ - a7F - 3 * uq || fZ + 3 * a7F + 5 * uq < m2 || m3 < fb - a7F - 3 * uq || fb + 2 * a7F + 3 * uq < m3 ? -1 : 4 * (m3 < fb - uq ? 0 : m3 < fb + a7F + uq ? 1 : 2) + (m2 < fZ - uq ? 0 : m2 < fZ + a7F + uq ? 1 : m2 < fZ + 2 * a7F +
			3 * uq ? 2 : 3)
	}
	this.a7N = function() {
		var aC, fm, a7Q = [bE.ph, bE.pv, bE.pF, bE.qI, bE.q8];
		for (or = new Array(10), aC = 0; aC < 10; aC++) or[aC] = {
			id: aC,
			iE: !1,
			lk: 0,
			canvas: [],
			fZ: 0,
			fb: 0
		};
		for (or[0].colors = [0, 1, 2, 3], or[0].fZ = 0, or[0].fb = 0, or[1].colors = [1, 4], or[1].fZ = 1, or[1].fb = 0, or[2].colors = [0, 1], or[2].fZ = -1, or[2].fb = 0, or[3].colors = [0], or[3].fZ = 0, or[3].fb = 0, or[4].colors = [0, 2],
			or[4].fZ = 1, or[4].fb = 1, or[5].colors = [3], or[5].fZ = 0, or[5].fb = -1, or[6].id = 20, or[6].colors = [0], or[6].fZ = 1, or[6].fb = -1, or[7].id = 21, or[7].colors = [0], or[7].fZ = 0, or[7].fb = 1, or[8].id = 16, or[8]
			.colors = [0], or[8].fZ = 0, or[8].fb = 0, or[9].id = 10, or[9].colors = [4], or[9].fZ = 2, or[9].fb = 0, aC = 0; aC < 10; aC++)
			for (fm = 0; fm < or[aC].colors.length; fm++) or[aC].canvas.push(function(id, a4z) {
				if (id < 20) return bD.canvas.a0v(ac.get(3), id, a4z);
				var a4z = ac.get(3).height,
					a50 = bD.sD.ya(a4z, a4z),
					iU = bD.sD.getContext(a50);
				20 === id ? iU.drawImage(ac.get(18), 0, 0) : 21 === id && ak.yl.a1A(ak.tR.a0z + ak.tR.a1G, iU, 0, 0, a4z);
				return a50
			}(or[aC].id, a7Q[or[aC].colors[fm]]))
	}, this.a7P = function() {
		return or
	}, this.dk = function() {
		rG = [], fZ = fb = eZ = 0, a7G = a7H = -1e3, this.resize()
	}, this.resize = function() {
		a7F = Math.floor((a1.a2.ib() ? .075 : .0468) * i.ic), zoom = a7F / ac.get(3).height, gap = Math.floor(a7F / 3)
	}, this.a41 = function(m2, m3) {
		return !!this.iE() && (bi.ds = !0, !!ak.yl.hf(m2, m3, a7J) || (m2 = function(m2, m3) {
			a7H = a7G = -1e3;
			var a7T = a7U(a7S(m2, m3));
			if (-1 === a7T) return 0;
			if (1 !== or[a7T].colors[or[a7T].lk])
				if (5 === a7T) {
					if (! function() {
							var ea = performance.now();
							a7M + 4e3 < ea && (rG = []);
							a7M = ea
						}(), a7W(a7I)) return 1;
					rG.push(a7I), 16 < rG.length && rG.shift()
				} else if (6 === a7T) {
				for (var aC = rG.length - 1; 0 <= aC; aC--) 0 === ah.nN[rG[aC]] && rG.splice(aC, 1);
				0 < rG.length && (b6.a7X(1, rG, !0) && bB.go.rF(rG, a7I), rG = [])
			} else if (2 === a7T) ao.i6(a7I) && bB.hs.qk(aS.hw(), a7I);
			else if (3 === a7T) aE.hq && bB.hs.ht(a7K);
			else if (0 === a7T)
				if (0 === or[0].lk) {
					if (aE.a6a && aX.a7B() < 350) return 1;
					bY.a7Y(4), bB.hs.hz(aS.hw(), a7I)
				} else b2.i0(a7I, aS.hw());
			else if (1 === a7T) bB.hs.i4(aS.hw(), a7K);
			else if (9 === a7T) bB.hs.i7(aS.hw());
			else {
				if (7 === a7T) return bY.a7Y(0), ak.yl.show(m2, m3), 2;
				if (4 === a7T) b6.a7X(0, [a7I], !0) && bB.go.rC(a7I);
				else {
					if (8 !== a7T) return 0;
					bB.hs.hv(aS.hw(), a7L, a7I)
				}
			}
			return 1
		}(m2, m3), this.tS(), 2 === m2 && (ak.yl.iE = !0), 0 < m2))
	}, this.a43 = function(m2, m3) {
		this.iE() || (a7G = m2, a7H = m3, eZ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hi(mouseX),
			coordY = bP.hk(mouseY),
			point = bP.fI(bP.fp(coordX, coordY));
		bP.hl(coordX, coordY) && a7a(mouseX, mouseY, point)
	}, this.click = function(m2, m3, a4A) {
		var hh = bP.hi(m2),
			hj = bP.hk(m3),
			fE = bP.fp(hh, hj),
			f6 = bP.fI(fE),
			a7Z = (a1.a2.ib() ? .025 : .0144) * i.ic,
			ea = performance.now();
		return !(Math.abs(m2 - a7G) > a7Z || Math.abs(m3 - a7H) > a7Z || eZ + 500 < ea || (eZ = ea, bM.sf() && (bM.hX = m2, bM.hY = m3, b8.ee(1), b9.ee(1)), !bP.hl(hh, hj))) && (a4A ? (a7a(m2, m3, f6), !1) : aN.hc || this.iE() || !bD.go.he(aE
			.fC) || aE.hb ? (this.tS(), !1) : (aE.hq ? 0 <= (a7K = bu.hr(fE)) && (or[3].iE = !0) : 2 === aE.a2B ? ad.h2(f6) && (a7I = ad.fK(f6), bD.go.kA(a7I) || (or[0].iE = !0, or[0].lk = 1, or[7].iE = !0)) : (bQ.i5.i6(aE.fC, fE) && (or[0]
					.iE = !0, or[0].lk = 1, or[1].iE = !0, or[1].lk = 0, or[9].iE = !0, or[9].lk = 0), bQ.i2.i3(aE.fC, fE) && (or[0].iE = !0, or[0].lk = 1, or[1].iE = !0, or[1].lk = 1, a7K = bR.g4[7]), ad.fX(f6) ? (a7L = an.f3.f5(f6)) &&
				(a7Z = bP.fI(a7L), or[8].iE = !0, a7I = ad.fJ(a7Z) ? aE.fP : ad.fK(a7Z)) : (ad.a0A(aE.fC, f6) && (a7J = aE.fC, or[0].iE = !0, or[0].lk = 1, or[7].iE = !0), -1 !== (ea = bu.hx(fE)) && (ad.fJ(ea << 2) ? (a7I = aE.fP, bv.hy(
					aE.fC) ? (or[0].iE = !0, or[0].lk = 0) : ae.gZ(aE.fC) && (or[0].iE = !0, or[0].lk = 3)) : (a7I = ad.fK(ea << 2), or[0].lk = 1, or[5].iE = function(a7I) {
					return !bD.go.kA(a7I) && !a7W(a7I) && b6.a7X(1, [a7I], !1)
				}(a7I), or[7].iE || bD.go.kA(a7I) || (a7J = a7I, or[7].iE = !0), or[4].iE = !bD.go.kA(a7I) && !ag.a7e(a7I) && b6.a7X(0, [a7I], !1), or[6].iE = function(a7I) {
					if (0 === rG.length) return !1;
					if (performance.now() > a7M + 4e3) return !(rG = []);
					return !a7W(a7I) && ! function(a7I) {
						var aC;
						if (aE.iM)
							for (aC = rG.length - 1; 0 <= aC; aC--)
								if (!bv.fL(a7I, rG[aC])) return 1;
						return
					}(a7I)
				}(a7I), bv.fL(a7I, aE.fC) ? (bv.i1(aE.fC, a7I) ? (or[0].lk = 0, or[0].iE = !0) : ae.gZ(aE.fC) && (or[0].lk = 3, or[0].iE = !0), or[0].iE = this.a7g()) : (or[2].iE = !0, ao.i6(a7I) ? or[2].lk = 0 : or[2].lk = 1,
					or[0].iE = !0))))), this.a7b(m2, m3)))
	}, this.a7b = function(m2, m3) {
		return fZ = m2 - Math.floor(a7F / 2), fb = m3 - Math.floor(a7F / 2), !!this.iE()
	}, this.a3h = function(m2, m3) {
		return !!this.iE() && (ak.yl.iE ? !ak.yl.a18(m2, m3) && (ak.yl.iE = !1, bi.ds = !0) : function(tl, m2, m3) {
			m2 = a7S(m2, m3);
			if (0 <= a7U(m2)) return !1;
			if ((1 === m2 || 6 === m2) && 0 <= a7U(2)) return !1;
			if ((6 === m2 || 9 === m2) && 0 <= a7U(10)) return !1;
			return tl.tS(), bi.ds = !0
		}(this, m2, m3))
	}, this.tS = function() {
		for (var aC = or.length - 1; 0 <= aC; aC--) or[aC].iE = !1, or[aC].lk = 0;
		ak.yl.iE = !1
	}, this.iE = function() {
		return this.a7g() || ak.yl.iE
	}, this.a7g = function() {
		for (var fS = or.length, aC = 0; aC < fS; aC++)
			if (or[aC].iE) return !0;
		return !1
	}, this.wl = function() {
		if (this.iE())
			if (ak.yl.iE) ak.yl.wl();
			else {
				var aC, iU = wm,
					fm = or,
					fS = fm.length,
					a7o = (a7F + gap) / zoom;
				for (iU.imageSmoothingEnabled = !0, iU.setTransform(zoom, 0, 0, zoom, fZ, fb), aC = 0; aC < fS; aC++) fm[aC].iE && wm.drawImage(fm[aC].canvas[fm[aC].lk], fm[aC].fZ * a7o, fm[aC].fb * a7o);
				iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cH() {
	var k, canvas, a7p, a7q, a7r, a7s = -1;

	function a7t() {
		var a7u, on = canvas.getContext("2d", {
			alpha: !0
		});
		on.clearRect(0, 0, k, k), on.fillStyle = bE.pD, on.fillRect(0, 0, k, k), 9 === a7q && (on.fillStyle = bE.pI, on.fillRect(0, 0, k, k)), on.fillStyle = bE.pH, on.fillRect(0, 0, k, 1), on.fillRect(0, 0, 1, k), on.fillRect(0, k - 1, k, 1), on
			.fillRect(k - 1, 0, 1, k), a7u = .9 * k / ac.get(0).width, on.imageSmoothingEnabled = !0, on.setTransform(a7u, 0, 0, a7u, Math.floor((k - a7u * ac.get(0).width) / 2), Math.floor((k - a7u * ac.get(0).height) / 2)), on.drawImage(ac.get(0),
				0, 0), on.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7x(m2, m3) {
		if (!aN.hc) return m2 <= k + bf.gap && m3 >= aS.fb ? 9 : -1;
		if (m2 <= 4 * k + bf.gap) {
			if (m3 >= aS.fb) return 0;
			if (m3 >= aS.fb - k - a7r * bf.gap) return 2
		} else if (m2 <= 7 * k + bf.gap && m3 >= aS.fb - k - a7r * bf.gap) return 1;
		return -1
	}
	this.hc = !1, this.dk = function() {
		a7q = -1, this.hc = !1, a7r = a1.a2.ib() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a7p = bD.sD.u1(1, (a1.a2.ib() ? .5 : .45) * k), a7t()
	}, this.a7v = function() {
		return !(1 !== aE.a2B || aE.hq || (aE.hb ? !bF.a6y : this.hc && aE.l7))
	}, this.a4I = function() {
		this.hc = !this.hc, this.hc ? (bF.a4H(!1), aE.hb && bF.a6y && bF.a4J(!0), this.a7w(), 9 === a7q && (a7q = 0)) : (a7q = -1, a7t(), !aE.l7 || 1 !== aE.a2B || aE.hq || aE.hb || a1.a2.setState(1)), bi.ds = !0
	}, this.a7w = function() {
		(aE.l7 || aE.hb) && 1 === aE.a2B && (aW.n9(!0), aE.hq || setTimeout(function() {
			be.a2N()
		}, 0), a1.a2.setState(0))
	}, this.hf = function(m2, m3) {
		return 0 <= (a7s = a7x(m2, m3)) || !aN.hc || aE.l7 || aE.hb || bh.iE || aN.a4I(), a7s
	}, this.a3h = function(m2, m3) {
		m2 = a7x(m2, m3);
		m2 !== a7q && (a7q = m2, this.hc || a7t(), bi.ds = !0)
	}, this.a3i = function(m2, m3) {
		m2 = a7x(m2, m3);
		return -1 !== m2 && a7s === m2 && (this.hc ? aE.nr ? (0 <= m2 && bF.a4H(!1), !aE.hb) : (0 === m2 ? aE.a3Y() : 1 === m2 ? this.a4I() : 2 === m2 && u.v(1, 0), !0) : 9 === m2 && (this.a4I(), !0))
	}, this.wl = function() {
		var j;
		this.hc ? (j = Math.floor(5.5 * k), wm.setTransform(1, 0, 0, 1, bf.gap, aS.fb), wm.fillStyle = bE.pD, wm.fillRect(0, 0, j, k), 0 === a7q ? (wm.fillStyle = bE.pI, wm.fillRect(0, 0, 4 * k, k)) : 1 === a7q && (wm.fillStyle = bE.pI, wm
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), wm.fillStyle = bE.pH, wm.fillRect(0, 0, j, 1), wm.fillRect(0, 0, 1, k), wm.fillRect(4 * k, 0, 1, k), wm.fillRect(0, k - 1, j, 1), wm.fillRect(j - 1, 0, 1, k), wm.font = a7p, bD.sD
			.textBaseline(wm, 1), bD.sD.textAlign(wm, 1), wm.fillText(L(45), 2 * k, .54 * k), j = .4 * k, aN.a81(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fb + .3 * k, j), j = 1, wm.setTransform(1, 0, 0, 1, bf.gap, aS.fb - j * a7r * bf.gap - j *
				k), wm.fillStyle = bE.pD, wm.fillRect(0, 0, 4 * k, k), a7q === j + 1 && (wm.fillStyle = bE.pI, wm.fillRect(0, 0, 4 * k, k)), wm.fillStyle = bE.pH, wm.fillRect(0, 0, 4 * k, 1), wm.fillRect(0, 0, 1, k), wm.fillRect(4 * k, 0, 1,
				k), wm.fillRect(0, k - 1, 4 * k, 1), wm.fillText(L(0 === j ? 45 : 46), 2 * k, .54 * k), wm.setTransform(1, 0, 0, 1, 0, 0)) : wm.drawImage(canvas, bf.gap, aS.fb)
	}, this.ro = function(player) {
		return 0 !== ah.nN[player] && 2 !== aE.a2B && !bD.go.kA(player)
	}, this.a81 = function(fZ, fb, fS) {
		wm.setTransform(1, 0, 0, 1, fZ, fb), wm.lineWidth = bf.a19, wm.strokeStyle = bE.pH, wm.beginPath(), wm.moveTo(0, 0), wm.lineTo(fS, fS), wm.moveTo(0, fS), wm.lineTo(fS, 0), wm.stroke()
	}
}

function cI() {
	var a83, k, a84, a85, a86, a87, a88, a89, a8A;

	function a0H() {
		return aS.a8S(aO.a8O()) ? ax.iE ? __fx.settings.keybindButtons ? aS.fb - 2 * aS.k - 3 * a84 : aS.fb - aS.k - 2 * a84 : __fx.settings.keybindButtons ? aS.fb - aS.k - 2 * a84 : aS.fb - a84 : bF.a8S(aO.a8R()) ? ax.iE ? bF.a0H() - aS.k - 2 *
			a84 : bF.a0H() - a84 : ax.iE ? i.k - aS.k - (bn.a7E() + 1) * a84 : i.k - bn.a7E() * bf.gap
	}

	function a8F(ea, ru, id, h0, a8I, a8J, lQ, a8K, a8L, a8M, a8W) {
		var aC, on, a50, s5, a8X = void 0 !== a8L,
			j = Math.floor(aR.measureText(ru, aO.a7p) + 1.5 * a85 + (a8X ? k : 1.5 * a85));
		if (bi.ds = !0, a8W || bt.a0d(ru, a8L), j + 2 * a84 + aS.k > i.j && !a8X && 50 !== id && 20 < ru.length) a8F(ea, (a8W = bD.tB.a6H(ru))[0], id, h0, a8I, a8J, lQ, a8K, a8L, a8M, !0), a8F(ea, a8W[1], id, h0, a8I, a8J, lQ, a8K, a8L, a8M, !0);
		else if (a8W = j + (50 === id ? a86 : 0), (a50 = document.createElement("canvas")).width = j, a50.height = k, (on = a50.getContext("2d", {
				alpha: !0
			})).font = aO.a7p, bD.sD.textBaseline(on, 1), bD.sD.textAlign(on, 0), on.clearRect(0, 0, j, k), on.fillStyle = a8J, on.fillRect(0, 0, j, k), on.fillStyle = a8I, on.fillText(ru, Math.floor(1.5 * a85), Math.floor(k / 2)), a8X && (on
				.imageSmoothingEnabled = !0, ak.yl.a1A(a8L, on, j - k, 0, k)), 0 === (s5 = {
				eZ: ea,
				ru: ru,
				id: id,
				player: h0,
				canvas: a50,
				a8I: a8I,
				a8J: a8J,
				j: j,
				a8P: a8W,
				lQ: lQ,
				a8K: a8K,
				a8L: a8L,
				a8M: a8M
			}).eZ || 0 < a83.length && 0 < a83[0].eZ) a83.unshift(s5);
		else {
			for (aC = 1; aC < a83.length; aC++)
				if (0 < a83[aC].eZ) return void a83.splice(aC, 0, s5);
			a83.push(s5)
		}
	}

	function a8G(eH, uq, fm) {
		return "rgb(" + eH + "," + uq + "," + fm + ")"
	}

	function a8Y(id, gv) {
		for (var fS = a83.length, aC = 0; aC < fS; aC++) a83[aC].id === id && gv-- <= 0 && (a83.splice(aC, 1), aC--, fS--)
	}

	function a8Z(id, player) {
		for (var fg = !1, aC = a83.length - 1; 0 <= aC; aC--) a83[aC].id !== id || player !== aE.fP && a83[aC].player !== player || (a83.splice(aC, 1), fg = !0);
		return fg
	}

	function a8u(ru) {
		a8F(340, ru, 6, 0, a8G(215, 245, 255), bE.pE, -1, !1)
	}
	this.a8B = "", this.dk = function() {
		var self;
		a89 = 0, a88 = a1.a2.ib() ? 7 : 12, a87 = {
				a1z: [0, 0, 0],
				a8C: [0, 0, 0],
				nf: [220, 180, 180],
				wk: [0, 0, 0],
				ej: [0, 0, 0]
			}, a83 = [], this.resize(), aE.hq && this.a2O(0, 18), bV.yY.yZ[bV.f8].name.length && a8u(L(89, [bV.yY.yZ[bV.f8].name])), bV.yY.yZ[bV.f8].a8v && a8u(L(90, [bV.yY.yZ[bV.f8].a8v])), a8u(L(91, [bV.fd - 2 + "x" + (bV.fe - 2)])), a8u(L(92,
				[bD.tB.a1S(aq.a8w)])), aq.a8w !== aq.a8x && a8u(L(93, [bD.tB.a1S(aq.a8x) + " (" + bD.tB.a6D(100 * aq.a8x / aq.a8w, 1) + ")"])), 0 < aq.a8y && a8u(L(69, [bD.tB.a1S(aq.a8y) + " (" + bD.tB.a6D(100 * aq.a8y / aq.a8w, 1) + ")"])), 0 <
			aq.a8z && a8u(L(94, [bD.tB.a1S(aq.a8z) + " (" + bD.tB.a6D(100 * aq.a8z / aq.a8w, 1) + ")"])), 10 === aE.l5 && a8F(120, L(95), 6, 0, a8G(235, 255, 120), bE.pE, -1, !1), 0 !== (self = this).a8B.length && (a8F(200, self.a8B, 0, 0, bE.pH,
				bE.pE, -1, !1), self.a8B = ""), aE.a0c && a8F(340, L(47), 6, 0, a8G(255, 200, 0), bE.pE, -1, !1)
	}, this.resize = function() {
		var a8H, aC;
		if (k = (k = Math.floor((a1.a2.ib() ? .031 : .0249) * i.ic)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a7p = bD.sD.u1(1, this.fontSize), a84 = bf.gap, a85 = Math.floor(k / 5), 0 < a83.length)
			for (a8H = a83, a83 = [], aC = a8H.length - 1; 0 <= aC; aC--) a8F(a8H[aC].eZ, a8H[aC].ru, a8H[aC].id, a8H[aC].player, a8H[aC].a8I, a8H[aC].a8J, a8H[aC].lQ, a8H[aC].a8K, a8H[aC].a8L, a8H[aC].a8M, !0);
		this.a8N()
	}, this.a8N = function() {
		a8A = document.createElement("canvas");
		var ru = L(48),
			on = (a86 = aR.measureText(ru, this.a7p) + 5 * a85, a8A.height = k, a8A.width = a86, a8A.getContext("2d", {
				alpha: !0
			}));
		on.font = this.a7p, bD.sD.textBaseline(on, 1), bD.sD.textAlign(on, 1), on.clearRect(0, 0, a86, k), on.fillStyle = bE.pe, on.fillRect(0, 0, a86, k), on.fillStyle = bE.pH, on.fillText(ru, Math.floor(a86 / 2), Math.floor(k / 2))
	}, this.a8O = function() {
		var fS;
		return ax.iE ? ax.j : 0 === (fS = a83.length) ? 0 : 1 === fS ? a83[0].a8P : a8Q(a83[0].a8P, a83[1].a8P)
	}, this.a8R = function() {
		var fS = a83.length;
		return ax.iE ? fS ? a8Q(ax.j, a83[0].a8P) : ax.j : 0 === fS ? 0 : 1 === fS ? a83[0].a8P : 2 === fS ? a8Q(a83[0].a8P, a83[1].a8P) : a8Q(a8Q(a83[0].a8P, a83[1].a8P), a83[2].a8P)
	}, this.hf = function(fZ, fb) {
		for (var no, a8T, a8U = a0H(), aC = a83.length - 1; 0 <= aC; aC--)
			if ((a8T = a8U - (aC + 1) * k) <= fb && fb < a8T + k) return 50 === a83[aC].id ? fZ >= i.j - a86 - a84 - a83[aC].j && (fZ >= i.j - a86 - a84 ? bB.go.rC(a83[aC].player) : aI.nj(a83[aC].player, 800, !1, 0), !0) : fZ >= i.j - a83[aC].j -
				a84 && (736 === a83[aC].id ? window.open("https://" + a83[aC].ru, "_blank") : a83[aC].a8K && (a83[aC].a8M && a83[aC].a8M.fl ? (a8T = a83[aC].a8M.fE, no = bP.fa(a8T) - 10, a8T = bP.fc(a8T) - 10, aI.ni(no, a8T, 19 + no, 19 +
					a8T)) : a83[aC].a8M && a83[aC].a8M.fm ? aI.nk(a83[aC].player, a83[aC].a8M.nl) : (aI.nj(a83[aC].player, 800, !1, 0), 0 <= a83[aC].lQ && (no = a83[aC].lQ, a83[aC].lQ = a83[aC].player, a83[aC].player = no))), !0);
		return !1
	}, this.a0d = function(ea, ru, id, h0, a8I, a8J, lQ, a8K, a8L, a8M) {
		a8F(ea, ru, id, h0, a8I, a8J, lQ, a8K, a8L, a8M)
	}, this.a8V = function(s) {
		a8F(300, s, 252, 0, bE.pH, bE.pE, -1, !1)
	}, this.a6T = function(id) {
		for (var aC = a83.length - 1; 0 <= aC; aC--) a83[aC].id === id && (a83[aC].eZ = 1)
	}, this.a2O = function(player, id) {
		0 === id ? (aR.ei(player, 0), a8Y(423, 2), a8F(160, L(49, [ah.a0e[player]]), 423, player, "rgb(10,220,10)", bE.pE, -1, !1)) : 1 === id ? (a8Z(50, aE.fP), aR.ei(player, 1), a8F(360, L(50, [ah.a0e[player]]), 0, player, bE.px, bE.pE, -1, !
				0), aI.nj(player, 2700, !1, 0)) : 2 === id ? (aR.ei(player, 2), a8F(0, L(51), 0, player, "rgb(10,255,255)", bE.pE, -1, !0), aI.nj(player, 2700, !1, 0)) : 3 === id ? (aR.ei(player, 2), a8F(0, L(52, [ah.a0e[player]]), 0, player, bE
				.pH, bE.pE, -1, !0), aI.nj(player, 2700, !1, 0)) : 4 === id ? this.a8a(1, player, player) : 5 === id ? bD.go.kA(aE.fC) || (function(id, nI) {
				var aC, oj = 0,
					fS = a83.length;
				for (aC = 0; aC < fS; aC++)
					if (a83[aC].id === id && nI <= ++oj) return a83.splice(aC, 1)
			}(1, 5), ag.a8c(player) && a8F(180, L(53, [ah.a0e[player]]), 1, player, a8G(255, 200, 180), bE.pE, -1, !0), bD.go.a5a(player, 10) && (a8Y(573, 0), a8F(180, L(54, [ah.a0e[player]]), 573, player, bE.px, bE.pE, -1, !0))) : 18 === id ?
			a8F(255, L(55), 18, 0, bE.pH, bE.pE, -1, !1) : 21 === id ? a8F(220, L(56), id, 0, bE.pH, bE.pE, -1, !1) : 22 === id ? this.a8a(2, player, player) : 59 === id && a8F(0, L(57), id, 0, bE.qH, bE.pE, 0, !1)
	}, this.a3T = function(s) {
		a8F(200, L(58, [s]), 94, 0, bE.pH, bE.pt, -1, !1)
	}, this.a2a = function(a8d) {
		if (aE.fC === a8d && !aE.l7 && !aE.hb)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a8F(0, "Your Win Count is now " + __fx.wins.count, 3, a8d, bE.pH, bE.pE, -1, !0);
		ah.hG[a8d] && (aR.ei(a8d, 2), aE.kn < 100 ? a8F(0, L(52, [ah.a0e[a8d]]), 3, a8d, bE.pH, bE.pE, -1, !0) : a8F(0, L(59, [ah.a0e[a8d]]), 3, a8d, bE.pH, bE.pE, -1, !0))
	}, this.a7i = function(f6) {
		var ru, a8f, a8e = "(" + bP.fa(f6 >> 2) + ", " + bP.fc(f6 >> 2) + ")",
			a8K = !1,
			player = 0;
		ad.fN(f6) ? ad.fJ(f6) ? a8e = L(60, [a8e]) : (player = ad.fK(f6), aE.hb && !1 === __fx.hoveringTooltip.active && (aE.fC = player), ru = L(61, [bD.on.a5E(ah.a2r[player], bD.sD.u1(0, 10), 150)]) + "   ", ru = (ru += L(62, [bD.tB.a1S(ah.hU[
				player])]) + "   ") + L(63, [bD.tB.a1S(ah.hG[player])]) + "   ", aE.iM && (a8f = bj.a2X[bj.lA[bj.fQ[player]]], ru += L(64) + ": " + a8f + "   "), bD.go.kA(player) && (ru += L(65) + ": " + aF.ky[aF.iB[player]] + "   "), a8e =
			ru = (ru += L(66, [player]) + "   ") + L(67, [a8e]), a8K = !0) : a8e = ad.fX(f6) ? L(68, [a8e]) + "   #" + ad.fA(f6) : L(69, [a8e]), a8Y(55, 0), a8F(220, a8e, 55, player, bE.pH, bE.pE, -1, a8K, void 0, void 0, !0)
	}, this.a7k = function(a8g) {
		var li = bQ.z,
			player = li.mh[a8g] >> 3,
			ru = (bi.ds = !0, a8Y(55, 0), L(70, [ah.a0e[player]]) + "   ");
		a8F(220, ru += L(62, [bD.tB.a1S(li.a8h[a8g])]), 55, player, bE.pH, bE.pE, -1, !0)
	}, this.qv = function(qf, a8i, qw) {
		qf === aE.fC ? a8F(175, " " + L(71, [ah.a0e[a8i]]) + ": ", 1001, a8i, a8G(200, 255, 210), bE.pE, -1, !0, qw) : this.a8j(qf, qw)
	}, this.a8j = function(qf, qw) {
		a8Y(1e3, 0), a8F(175, ah.a0e[qf] + ": ", 1e3, qf, bE.pH, "rgba(5,60,25,0.9)", -1, !0, qw)
	}, this.a2Z = function() {
		var s;
		aE.a2G ? (s = L(72), aR.a2Y(L(73), 2, 1, 12), a8F(0, s, 40, 0, "rgb(10,220,10)", bE.pE, -1, !1)) : (s = L(74), aR.a2Y(L(75), 2, 0, 16), a8F(0, s, 41, 0, bE.pH, bE.pE, -1, !1))
	}, this.a0R = function() {
		var gv = ah.a0e,
			fV = aE.data;
		a8F(300, gv[0] + " [" + aE.a2U.a0X(fV.elo[0]) + "] vs " + gv[1] + " [" + aE.a2U.a0X(fV.elo[1]) + "]", 65, 0, bE.p8, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a8k = function(s) {
		a8F(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a8l = function(a8m) {
		a8F(0, L(a8m ? 76 : 77), 247, 0, bE.qG, bE.pE, -1, !1)
	}, this.a0Z = function(a0W, a0Y, a8n) {
		var fV = aE.data,
			gv = ah.a0e;
		a8F(0, gv[0] + ": " + aE.a2U.a0X(fV.elo[0]) + " -> " + a0W, 66, 0, bE.pH, a8n[0], -1, !1), a8F(0, gv[1] + ": " + aE.a2U.a0X(fV.elo[1]) + " -> " + a0Y, 66, 1, bE.pH, a8n[1], -1, !1)
	}, this.rD = function(player, id) {
		0 === id ? a8Z(50, player) ? (a8F(128, L(78, [ah.a0e[player]]), 52, player, a8G(180, 255, 180), bE.pE, -1, !0), ag.rm(player, 2, 255)) : a8F(384, L(79, [ah.a0e[player]]), 51, player, a8G(210, 210, 255), bE.pE, -1, !0) : a8Z(51, player) ?
			(a8F(128, L(80, [ah.a0e[player]]), 52, player, bE.pH, "rgba(60,120,10,0.9)", -1, !0), ag.rm(player, 2, 255)) : (a8F(384, L(81, [ah.a0e[player]]), 50, player, bE.pH, "rgba(90,90,90,0.9)", -1, !0), ag.rm(player, 2, 96))
	}, this.rH = function(a1z, target) {
		var color = a8G(210, 255, 210);
		1 < a1z.length ? a8F(230, L(82, [a1z.length, ah.a0e[target]]), 66, target, color, bE.pE, -1, !0) : a8F(230, L(83, [ah.a0e[a1z[0]], ah.a0e[target]]), 66, a1z[0], color, bE.pE, target, !0)
	}, this.a8o = function(player, target) {
		a8F(230, L(84, [ah.a0e[player], ah.a0e[target]]), 66, player, bE.pH, "rgba(75,65,5,0.9)", target, !0)
	}, this.a8p = function(id, gv) {
		a8Y(id, gv)
	}, this.a2J = function(id, player) {
		a8Z(id, void 0 === player ? aE.fP : player)
	}, this.a8q = function(id) {
		for (var aC = a83.length - 1; 0 <= aC; aC--)
			if (a83[aC].id === id) return a83[aC];
		return null
	}, this.r8 = function(a78, a8r, player) {
		2 !== ah.a5V[aE.fC] && a8F(200, 1 === a78 ? L(85, [ah.a0e[player]]) : L(86, [bD.tB.a1S(a78), ah.a0e[player]]), 30, player, "rgb(190,255,190)", bE.pE, -1, !0)
	}, this.a8t = function(a78, player) {
		2 !== ah.a5V[aE.fC] && (a8Y(31, 0), a78 = " (" + bD.tB.a1S(a78) + ") 💸", a8F(150, a78 = bD.go.kA(player) ? L(87) + a78 : L(88, [ah.a0e[player]]) + a78, 31, player, bE.p8, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a2I = function(by) {
		for (var ej = bi.kk(), aC = 2; 0 <= aC; aC--) 0 < a87.wk[aC] && (by || a87.ej[aC] < ej - 220) && this.a90(aC)
	}, this.a90 = function(id) {
		var ru, fS = a87.wk[id],
			player = a87.a1z[id];
		a87.wk[id] = 0, 1 === fS ? (0 === id ? ru = L(96, [ah.a0e[player], ah.a0e[a87.a8C[0]]]) : 1 === id ? ru = L(97, [ah.a0e[player]]) : 2 === id ? ru = L(98, [ah.a0e[player]]) : 3 === id && (ru = L(99, [ah.a0e[player]])), a8Y(7, 0), a8F(a87
			.nf[id], ru, 7, a87.a8C[id], bE.pH, bE.pE, -1, !0)) : (ru = L(0 === id ? 100 : 1 === id ? 101 : 102, [fS]), a8Y(7, 0), a8F(a87.nf[id], ru, 7, player, bE.pH, bE.pE, -1, !1))
	}, this.a8a = function(id, hu, lQ) {
		var ej = bi.kk(),
			fS = a87.wk[id] + 1;
		a87.wk[id]++, a87.a1z[id] = hu, a87.a8C[id] = lQ, 1 === fS && (a87.ej[id] = ej), (1 === fS && (aE.a2E < 32 || 2 === aE.a2B) || 1 < fS && (a87.ej[id] < ej - 140 || 2 === aE.a2B)) && this.a90(id)
	}, this.ee = function() {
		b3.ee();
		for (var k2 = (k2 = a83.length - a88) <= 1 ? 1 : k2 * k2, aC = a83.length - 1; 0 <= aC; aC--) 0 < a83[aC].eZ && (a83[aC].eZ -= k2, a83[aC].eZ <= 0) && (bi.ds = !0, a83.splice(aC, 1));
		! function() {
			var gv, aC;
			if (128 !== a89 && !(++a89 < 128))
				for (gv = 5, aC = am.lJ - 1; 0 <= aC; aC--) 1 === ah.a5V[am.lO[aC]] && 0 < gv-- && a8F(240, L(99, [ah.a0e[am.lO[aC]]]), 1, am.lO[aC], bE.p8, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a2I(!1)
	}, this.wl = function() {
		for (var zJ, fb = a0H(), aC = a83.length - 1; 0 <= aC; aC--) zJ = fb - (aC + 1) * k, 50 === a83[aC].id ? (wm.drawImage(a83[aC].canvas, i.j - a83[aC].j - a86 - a84, zJ), wm.drawImage(a8A, i.j - a86 - a84, zJ)) : wm.drawImage(a83[aC]
			.canvas, i.j - a83[aC].j - a84, zJ)
	}, this.a92 = function(id, iB) {
		var a8e, a93 = bE.pR;
		0 === id ? a8e = L(103) : 1 === id ? (a8e = L(104), a93 = bE.qC) : 2 === id ? a8e = L(105) : 3 === id ? a8e = L(106) : (a8e = bD.tB.a1S(iB), a93 = 5 === id ? bE.qC : bE.pE), a8Y(74, 0), a8F(0, a8e, 74, 0, bE.pH, a93, -1, !1, void 0,
			void 0, !0)
	}
}

function cJ() {
	var a95, a96, wn = "",
		z4 = 0,
		z5 = 0,
		a94 = -1,
		eD = ["Team", "Zombie", "BR", "1v1"];

	function a97() {
		for (var ea = new Date, a98 = ea.getUTCMinutes(), ea = ea.getUTCSeconds(), a9A = [], a9B = 0, aC = 0; aC < 6; aC++) a9A.push(a9B), a9A.push(a9B + 2), a9A.push(a9B + 5), a9A.push(a9B + 7), a9B += 10;
		for (var fS = a9A.length, aC = 1; aC < fS && !(a98 < a9A[aC]); aC++);
		aC %= fS;
		ea = (a9A[0] = 60) * (a9A[aC] - a98) - ea;
		return ea !== a94 && (wn = eD[aC % 4] + " " + a96 + ": " + a9D(Math.floor(ea / 60)) + ":" + a9D(ea % 60), a94 = ea, z4 = aR.measureText(wn, a95), z4 += Math.floor(.4 * z5), 1)
	}

	function a9D(a9E) {
		return a9E < 10 ? "0" + a9E : String(a9E)
	}
	this.dk = function() {
		a96 = L(107)
	}, this.resize = function() {
		z4 = Math.floor((a1.a2.ib() ? .53 : .36) * i.ic), z5 = Math.floor(.065 * z4), a95 = bD.sD.u1(1, Math.floor(.9 * z5)), a94 += 1e3, a97()
	}, this.ee = function() {
		a97() && (bi.ds = !0)
	}, this.wl = function(fb) {
		wm.lineWidth = 1 + Math.floor(z5 / 15), wm.translate(i.j - z5, fb + z4), wm.rotate(-Math.PI / 2), wm.fillStyle = bE.pH, wm.fillRect(0, 0, z4, z5), wm.strokeStyle = bE.p8, wm.strokeRect(0, 0, z4, z5 + 10), wm.fillStyle = bE.p8, wm.font =
			a95, bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 1), wm.fillText(wn, Math.floor(z4 / 2), Math.floor(.59 * z5)), wm.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cK() {
	var a77, a9F, a9G, z5, a9H, a9I = 0,
		a9J = 0;

	function a9L(aC) {
		var a9N = !0,
			a1H = bE.pH,
			j = (1 === a77[aC].id ? a77[aC].on.fillStyle = bE.qA : a77[aC].jw === aE.fP ? a77[aC].on.fillStyle = bE.pS : (ad.a9O(a77[aC].jw), a77[aC].on.fillStyle = bD.color.pB(bR.g1[0], bR.g1[1], bR.g1[2], .87), 400 < bD.sL.a4e(bR.g1, 0, 2) && (
				a9N = !1, a1H = bE.p8)), a77[aC].canvas.width),
			uZ = (a77[aC].on.clearRect(0, 0, j, z5), a77[aC].on.fillRect(0, 0, j, z5), a77[aC].on.fillStyle = a1H, ! function(on, j, z5) {
				on.fillRect(0, 0, j, 1), on.fillRect(0, z5 - 1, j, 1), on.fillRect(0, 0, 1, z5), on.fillRect(j - 1, 0, 1, z5)
			}(a77[aC].on, j, z5), a9F + 2 * z5 < j && (a77[aC].on.fillRect(j - a9F - z5, 0, 1, z5), a77[aC].on.fillText(ah.a0e[a77[aC].jw], Math.floor((j - a9F) / 2), Math.floor(.57 * z5))), 0 !== a77[aC].id ? 0 : z5);
		a77[aC].on.fillText(bD.tB.a1S(a77[aC].iB), Math.floor(j - a9F / 2 - uZ), Math.floor(.57 * z5)),
			function(aC, j, uZ, a9N) {
				a77[aC].on.fillStyle = a9N ? bE.pJ : bE.pF;
				a9N = Math.floor(a9F * a77[aC].iB / a77[aC].a9U);
				a77[aC].on.fillRect(Math.floor(j - a9F - uZ), z5 - a9H, a9N, a9H)
			}(aC, j, uZ, a9N), 0 === a77[aC].id ? (a9R(aC, j, a9N, a1H), function(aC, j, a9N) {
				a77[aC].on.strokeStyle = a9N ? bE.pZ : bE.pj, a77[aC].on.fillRect(z5, 0, 1, z5);
				a9N = j - z5;
				a77[aC].on.beginPath(), a77[aC].on.moveTo(Math.floor(.3 * z5 + a9N), Math.floor(z5 / 2)), a77[aC].on.lineTo(Math.floor(z5 - .3 * z5 + 0 + a9N), Math.floor(z5 / 2)), a77[aC].on.stroke(), a77[aC].on.beginPath(), a77[aC].on.moveTo(
					Math.floor(z5 / 2 + a9N), Math.floor(.3 * z5)), a77[aC].on.lineTo(Math.floor(z5 / 2 + a9N), Math.floor(z5 - .3 * z5 + 0)), a77[aC].on.stroke()
			}(aC, j, a9N)) : a9R(aC, 2 * z5, a9N, a1H)
	}

	function a9R(aC, j, a9N, a1H) {
		a77[aC].on.strokeStyle = a77[aC].a9V ? bE.pQ : a9N ? bE.pp : bE.pq, a77[aC].on.fillStyle = a1H, a77[aC].on.fillRect(j - z5, 0, 1, z5), a77[aC].on.lineWidth = Math.max(Math.floor(z5 / 12), 3), a77[aC].on.lineCap = "round";
		a9N = .35;
		j = z5 + 1, a77[aC].on.beginPath(), a77[aC].on.moveTo(Math.floor(j - a9N * z5 + 0), Math.floor(a9N * z5)), a77[aC].on.lineTo(Math.floor(j - z5 + a9N * z5), Math.floor(z5 - a9N * z5 + 0)), a77[aC].on.stroke(), a77[aC].on.beginPath(), a77[aC]
			.on.moveTo(Math.floor(j - z5 + a9N * z5), Math.floor(a9N * z5)), a77[aC].on.lineTo(Math.floor(j - a9N * z5 + 0), Math.floor(z5 - a9N * z5 + 0)), a77[aC].on.stroke()
	}

	function a9h(h, a9f) {
		for (var iB, aC = a9f - 1; 0 <= aC; aC--) iB = ae.gf(aE.fC, aC), h[aC].iB !== iB && (h[aC].iB = iB, h[aC].a9U = Math.max(iB, h[aC].a9U), h[aC].a9M = !0)
	}

	function a9l(h, a9j) {
		for (var um = aE.fC << 3, a8h = bQ.z.a8h, me = bQ.z.me, a9n = bQ.z.a9n, aC = a9j - 1; 0 <= aC; aC--) {
			var a9o = a9n[um + aC],
				iB = a8h[a9o];
			h[aC].iB !== iB ? (h[aC].iB = iB, h[aC].a9U = Math.max(iB, h[aC].a9U), h[aC].a9M = !0) : h[aC].a9V || me[a9o] % 64 != 5 || (h[aC].a9V = !0, h[aC].a9M = !0)
		}
	}

	function a9K(a7A) {
		a7A.canvas = document.createElement("canvas"), bV.ye.font = a9G;
		var j = a9F;
		a7A.jw < aE.fP && 0 === a7A.id && (j += Math.floor(bV.ye.measureText(ah.a0e[a7A.jw] + "000").width)), j += z5, 0 === a7A.id && (j += z5), a7A.canvas.width = j, a7A.canvas.height = z5, a7A.on = a7A.canvas.getContext("2d", {
			alpha: !0
		}), a7A.on.font = a9G, bD.sD.textBaseline(a7A.on, 1), bD.sD.textAlign(a7A.on, 1)
	}

	function a9b(aC) {
		return aV.a9p() ? i.j - a77[aC].canvas.width - bf.gap : aV.fZ
	}

	function a9c(aC) {
		return Math.floor(2 * bf.gap + (aV.a9p() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * z5))
	}
	this.dk = function() {
		a9I = a9J = 0, a77 = [], this.resize()
	}, this.resize = function() {
		a9G = aO.a7p, z5 = aO.fontSize + 5, z5 = Math.floor(1.25 * z5), a1.a2.ib() && (z5 = Math.floor(1.25 * z5)), a9H = Math.floor(.15 * z5), bV.ye.font = a9G, a9F = Math.floor(bV.ye.measureText("02 000 000 0000").width);
		for (var aC = a77.length - 1; 0 <= aC; aC--) a9K(a77[aC]), a9L(aC)
	}, this.n9 = function() {
		for (var aC = a77.length - 1; 0 <= aC; aC--) a77[aC].a9M && (a77[aC].a9M = !1, a9L(aC))
	}, this.hf = function(m2, m3) {
		if (2 !== aE.a2B && 0 !== ah.nN[aE.fC] && !aE.hb && !bD.go.kA(aE.fC))
			for (var a9W, a9X, a9Y, a9Z = a1.a2.ib() ? z5 : 0, a9a = a1.a2.ib() ? Math.floor(.15 * z5) : 0, aC = a77.length - 1; 0 <= aC; aC--)
				if (a9W = a9b(aC), a9X = a9c(aC), a9Y = a77[aC].canvas.width, a9X - a9a <= m3 && m3 <= a9X + z5 + a9a) {
					if (a9W - a9Z <= m2 && m2 <= a9W + z5 + a9Z) return a77[aC].a9V || (a77[aC].a9M = !0, a77[aC].a9V = !0, 0 === a77[aC].id ? bB.hs.qt(a77[aC].jw) : bB.hs.qs(a77[aC].jw)), !0;
					if (0 === a77[aC].id && a9W + a9Y - z5 - a9Z <= m2 && m2 <= a9W + a9Y + a9Z) return bY.a7Y(3), bB.hs.hz(aS.hw(), a77[aC].jw), !0
				} return !1
	}, this.ee = function() {
		var a4m, a4n, h, a9f;
		0 === ah.nN[aE.fC] || bD.go.kA(aE.fC) && !aE.hb || (a4m = a77.slice(0, a9I), a4n = a77.slice(a9I, a9I + a9J), h = a4m, a9f = ae.gZ(aE.fC), function(h, a9f) {
			if (a9I !== a9f) return 1;
			for (var aC = a9f - 1; 0 <= aC; aC--)
				if (h[aC].jw !== ae.ge(aE.fC, aC)) return 1;
			return
		}(h, a9f) ? a9h(h = function(h, a9f) {
			var aC, jw, fm, iB, a8H = [];
			loop: for (aC = 0; aC < a9f; aC++) {
				for (jw = ae.ge(aE.fC, aC), fm = 0; fm < h.length; fm++)
					if (h[fm].jw === jw) {
						a8H.push(h.splice(fm, 1)[0]);
						continue loop
					} iB = ae.gf(aE.fC, aC), a9K(iB = {
					jw: jw,
					iB: iB,
					a9U: iB,
					id: 0,
					a9M: !0,
					a9V: !1,
					canvas: null,
					on: null
				}), a8H.push(iB)
			}
			return a8H
		}(h, a9f), a9f) : a9h(h, a9f), a4m = h, a4n = function(h) {
			var a9j = bQ.z.kr[aE.fC];
			return function(h, a9j) {
				if (a9J !== a9j) return 1;
				for (var um = aE.fC << 3, mg = bQ.z.mg, a9n = bQ.z.a9n, aC = a9j - 1; 0 <= aC; aC--) {
					var a9o = a9n[um + aC];
					if (h[aC].jw !== mg[a9o]) return 1
				}
				return
			}(h, a9j) ? a9l(h = function(h, a9j) {
				var aC, jw, fm, a8H = [],
					um = aE.fC << 3,
					mg = bQ.z.mg,
					a8h = bQ.z.a8h,
					a9n = bQ.z.a9n;
				loop: for (aC = 0; aC < a9j; aC++) {
					var a9o = a9n[um + aC];
					for (jw = mg[a9o], fm = 0; fm < h.length; fm++)
						if (h[fm].jw === jw) {
							a8H.push(h.splice(fm, 1)[0]);
							continue loop
						} a9o = a8h[a9o], a9K(a9o = {
						jw: jw,
						iB: a9o,
						a9U: a9o,
						id: 1,
						a9M: !0,
						a9V: !1,
						canvas: null,
						on: null
					}), a8H.push(a9o)
				}
				return a8H
			}(h, a9j), a9j) : a9l(h, a9j), h
		}(a4n), a9I = a4m.length, a9J = a4n.length, a77 = a4m.concat(a4n))
	}, this.wl = function() {
		if (0 !== ah.nN[aE.fC] && (!bD.go.kA(aE.fC) || aE.hb))
			for (var aC = a77.length - 1; 0 <= aC; aC--) wm.drawImage(a77[aC].canvas, a9b(aC), a9c(aC))
	}
}

function cL() {
	var a83, ks, a9q, a9r, k, a7p, fontSize, a9s, a9t, a9u, a9v, canvas, on, na, a9w;

	function x1(aC) {
		return L(0 === aC ? 108 : 1 === aC ? 109 : 2 === aC ? 110 : 111)
	}

	function aA3() {
		aE.iM ? aA4 + 4 * bf.gap + k + bk.aA5() > aS.fb ? wm.drawImage(canvas, 2 * bf.gap + bk.aA5(), aA4 + 2 * bf.gap) : wm.drawImage(canvas, bf.gap, aA4 + 3 * bf.gap + bk.aA5()) : wm.drawImage(canvas, bf.gap, aA4 + 2 * bf.gap)
	}

	function a9x() {
		canvas.width = a83[0].width + a9u, canvas.height = k + a9u, (on = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a83[0].width + a9u, k + a9u), on.translate(Math.floor(a9u / 2), Math.floor(a9u / 2)), on.lineWidth = a9u, on.fillStyle = 1 === a83[0].aA2 ? bE.pM : bE.pE, aA6(), on.fill(), on.strokeStyle = 1 === a83[0].aA2 ? bE.p8 :
			bE.pH, aA6(), on.stroke(), bD.sD.textAlign(on, 1), bD.sD.textBaseline(on, 1), on.fillStyle = 1 === a83[0].aA2 ? bE.p8 : bE.pH, on.font = a7p[0], on.fillText(x1(a83[0].aA1), Math.floor(a83[0].width / 2), Math.floor(.72 * a9s[0] * k)), on
			.font = a7p[1], on.fillText(a83[0].ru, Math.floor(a83[0].width / 2), Math.floor((a9s[0] + .48 * a9s[1]) * k))
	}

	function aA6() {
		on.beginPath(), on.moveTo(a9v, 0), on.lineTo(a83[0].width - a9v, 0), on.lineTo(a83[0].width, a9v), on.lineTo(a83[0].width, k - a9v), on.lineTo(a83[0].width - a9v, k), on.lineTo(a9v, k), on.lineTo(0, k - a9v), on.lineTo(0, a9v), on.closePath()
	}
	this.dk = function() {
		ks = 4, a9q = a9r = na = 0, a83 = [], a7p = new Array(2), fontSize = new Array(2), (a9s = new Array(2))[0] = .3, a9s[1] = .7, a9t = new Array(4), canvas = document.createElement("canvas"), a9w = bi.eZ + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ib() ? .062 : .047) * i.ic), fontSize[0] = Math.floor(.85 * a9s[0] * k), fontSize[1] = Math.floor(.85 * a9s[1] * k), a7p[0] = bD.sD.u1(1, fontSize[0]), a7p[1] = bD.sD.u1(1, fontSize[1]), aC = a9t.length -
			1; 0 <= aC; aC--) a9t[aC] = this.measureText(x1(aC) + "000", a7p[0]);
		if (a9u = Math.floor(1 + .05 * k), a9v = Math.floor(.2 * k), 0 < a83.length) {
			for (aC = a83.length - 1; 0 <= aC; aC--) j = this.measureText(a83[aC].ru + "00", a7p[1]), a83[aC].width = j < a9t[aC] ? a9t[aC] : j;
			a9x()
		}
	}, this.ee = function() {
		0 !== ks && (4 === ks ? bi.eZ > a9w && (ks = 0, 1 === aE.a2B) && aR.a2Y(bV.yY.yZ[bV.f8].name, 3, 1, 9) : (1 === ks ? (0 === a9q && (a9x(), a9q = 1e-4), 1 <= (a9q += .002 * (bi.eZ - na)) && (a9r = 0, ks = 2, a9q = 1), bi.ds = !0) : 2 ===
			ks ? ((a9r += (bi.eZ - na) / 1e3) > a83[0].nf || 1 < a9r && 1 < a83.length) && (ks = 3) : 3 === ks && ((a9q -= .002 * (bi.eZ - na)) <= 0 && (a9q = 0, a83.shift(), ks = 0 < a83.length ? 1 : 0), bi.ds = !0), na = bi.eZ))
	}, this.measureText = function(ru, a7p) {
		return wm.font = a7p, Math.floor(wm.measureText(ru).width)
	}, this.ei = function(aA0, aC) {
		this.a2Y(ah.a0e[aA0], aC, 1, 0 === aC ? 3 : 7)
	}, this.a2Y = function(ru, aA1, aA2, nf) {
		var j;
		ru.length && (j = (j = this.measureText(ru + "00", a7p[1])) < a9t[aA1] ? a9t[aA1] : j, a83.push({
			ru: ru,
			width: j,
			aA1: aA1,
			aA2: aA2,
			nf: nf
		}), 0 === ks) && (a9q = 0, ks = 1, na = bi.eZ)
	}, this.wl = function() {
		0 !== ks && 0 !== a9q && (a9q < 1 ? (wm.globalAlpha = a9q, aA3(), wm.globalAlpha = 1) : aA3())
	}
}

function cu() {
	var k, canvas, on, aA7, aA8, aA9, aAA, a9M, aAB, aAC, aAD, aAE, a8m = !1,
		a50 = (this.iE = !1, this.j = 0, new Array(2)),
		aAF = 0;

	function nA() {
		var j = ax.j,
			li = (a9M = !1, a0K(on, j, k), Math.floor(j / 2));
		1 === aA7 ? (on.fillStyle = bE.pb, on.fillRect(li, 0, li, k)) : -1 === aA7 && (on.fillStyle = bE.pr, on.fillRect(0, 0, li, k)), a0L(on, j, k, 2);
		var li = (li = Math.floor(.25 * k)) < 2 ? 2 : li,
			a8w = (on.fillStyle = bE.pN, Math.floor((k - 4) * aA8[1] / aA9[1]));
		0 < a8w && on.fillRect(2, k - 2 - a8w, li, a8w), 0 < (a8w = Math.floor((k - 4) * aA8[0] / aA9[0])) && on.fillRect(j - 2 - li, k - 2 - a8w, li, a8w);
		li = (li = Math.floor(k / 8)) < 2 ? 2 : li, a0N(on, Math.floor(.4 * k), 0, k, li, .5, !1), a0N(on, Math.floor(j - 1.4 * k), 0, k, li, .5, !0), a8w = 1.1 * k / a50[0].width;
		on.imageSmoothingEnabled = !0, on.setTransform(a8w, 0, 0, a8w, (j - a8w * a50[0].width) / 2, -.05 * k), on.drawImage(a50[+a8m], 0, 0), on.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAK() {
		aAE = -1, a8m = ai.aAL(), aO.a6T(257), aO.a8l(a8m), ax.iE = !0, a9M = !0, aAB = 360;
		for (var fu, ea = 0, aC = am.lJ - 1; 0 <= aC; aC--) bD.go.kA(am.lO[aC]) || (ea += ah.hG[am.lO[aC]]);
		a8m ? aA9[0] = Math.max(bO.ft(3 * ea, 4), 1) : aE.iM ? (fu = 9 === aE.l5 ? 8 === bj.lA[bk.lM()] ? 80 : (fu = bO.ft(100 * bk.lK(), aE.kX), bO.ft(bO.ia(1550 - 11 * fu, 400, 1e3), 10)) : (fu = bO.ft(100 * bk.lK(), aE.kX), bO.ft(bO.ia(1600 - 12 *
			fu, 400, 1e3), 10)), fu = bO.ft(fu * ea, 100), aA9[0] = Math.max(fu, 1)) : 8 === aE.l5 ? aA9[0] = Math.max(bO.ft(3 * ea, 4), 1) : aA9[0] = Math.max(bO.ft(3 * ea, 5), 1), aA9[1] = Math.max(ea - aA9[0], 1)
	}

	function aAG() {
		aAD = bi.kk(), a9M = !0, aAB = aA7 = 0, aAA = [], ax.iE = !1, aO.a2J(247), aA8[0] = aA8[1] = 0, aO.a6T(673)
	}

	function a0H() {
		return aS.a8S(aO.a8O()) ? __fx.settings.keybindButtons ? aS.fb - 2 * (k + bf.gap) : aS.fb - k - bf.gap : bF.a8S(aO.a8R()) ? bF.a0H() - k - bf.gap : i.k - k - bn.a7E() * bf.gap
	}
	this.dl = function() {
		for (var aC = 0; aC < 2; aC++) a50[aC] = bD.canvas.a0v(ac.get(3), 8 - aC, bE.qU), a50[aC] = bD.canvas.a52(a50[aC])
	}, this.dk = function() {
		aAD = -1e4, aAC = aAF = 0, aAE = -1, this.iE = !1, a9M = a8m = !1, aA8 = [aA7 = aAB = 0, 0], aA9 = [1, 1], aAA = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, on = canvas.getContext("2d", {
			alpha: !0
		}), nA()
	}, this.n9 = function() {
		a9M && nA()
	}, this.hf = function(fZ, fb) {
		return !!this.iE && !(fZ < i.j - this.j - bf.gap || fb < a0H() || (aE.hb || this.iF(aE.fC) && (aN.hc && aN.a4I(), bB.hs.iG(fZ > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ee = function() {
		0 < aAC ? 0 === --aAC && aAG() : this.iE ? 180 == --aAB && 3 * aA8[0] < aA9[0] ? aAG() : aA8[0] >= aA9[0] ? a8m ? bU.a1n.a26() : bU.a1n.a2A() : aA8[1] >= aA9[1] ? aAC = 4 : aAB <= 0 && aAG() : ! function() {
			var aAN = bi.kk();
			if (aAN % 40 == 14) {
				if (aAF) return !(aAN < aAF) && !(aAN < aAD + 535) && (aAF = aAN + 1071, bD.go.a5Y()) ? (aAK(), 1) : 0;
				(1 === am.lJ || (aE.iM ? bk.lK() : ah.hG[mO[0]]) >= bO.ft(96 * aE.kX, 100)) && (aAF = aAN + 535)
			}
			return
		}() && 0 <= aAE && (aO.a0d(250, L(112, [ah.a0e[aAE]]), 673, aAE, bE.pH, bE.pE, -1, !0), aAK())
	}, this.a2C = function() {
		this.iE && aA8[0] < aA9[0] && aAG()
	}, this.rn = function(player, aAO) {
		var aAP = L(aAO ? 113 : 114, [ah.a0e[player]]),
			aAP = (aO.a0d(450, aAP, 257, player, aAO ? bE.pZ : bE.po, bE.pE, -1, !0), aAA.push(player), a9M = !0, aE.l7 ? Math.max(aA9[0], aA9[1]) : ah.hG[player]),
			aAP = Math.max(aAP, 1);
		aAO ? aA8[0] += aAP : aA8[1] += aAP, player === aE.fC && (aA7 = aAO ? 1 : -1)
	}, this.wl = function() {
		var fb;
		this.iE && (fb = a0H(), wm.drawImage(canvas, i.j - this.j - bf.gap, fb))
	}, this.iH = function(player) {
		if (0 !== aAB) return !1;
		if (!bD.go.hd(1)) return !1;
		if (!bD.go.he(player)) return !1;
		if (10 <= kY[player] && !bD.go.a5r(player, 9)) return !1;
		if (!aE.l7) {
			player = bi.kk();
			if (player < aAD + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iF = function(h0) {
		if (!bD.go.hd(1)) return !1;
		if (!bD.go.he(h0)) return !1;
		if (!this.iE) return !1;
		for (var aC = aAA.length - 1; 0 <= aC; aC--)
			if (aAA[aC] === h0) return !1;
		return !0
	}, this.iD = function(player) {
		aAE = player
	}
}

function cM() {
	var j, fZ, aAR, canvas, on, iE, j5, a6K, a7p, a9M, aAS = 11 / 12;

	function aAU() {
		var a9T = Math.floor(j5 * (j - 2 * aAR)),
			aAX = 1 + Math.floor(.0625 * aS.k),
			aAY = 1 + Math.floor(.3 * aS.k),
			aAZ = Math.floor(.55 * aS.k);
		on.clearRect(0, 0, j, aS.k), on.fillStyle = bE.pD, on.fillRect(0, 0, aAR, aS.k), on.fillRect(aAR + a9T, 0, j - aAR - a9T, aS.k), on.fillStyle = j5 < 1 / 3 ? "rgba(" + Math.floor(3 * j5 * 130) + ",130,0,0.85)" : j5 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (j5 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (j5 - 2 / 3) * 130) + ",0.85)", on.fillRect(aAR, 0, a9T, aS.k), on.fillStyle = bE.pH, on.fillRect(0, 0, j, 1), on.fillRect(0, aS.k - 1, j, 1), on
			.fillRect(0, 0, 1, aS.k), on.fillRect(aAR, 0, 1, aS.k), on.fillRect(aAR + a9T, 0, 1, aS.k), on.fillRect(j - aAR, 0, 1, aS.k), on.fillRect(j - 1, 0, 1, aS.k), on.fillRect(Math.floor(.25 * aS.k) + aAY, Math.floor((aS.k - aAX) / 2), aS.k -
				2 * aAY, aAX), on.fillRect(Math.floor(j - 1.25 * aS.k) + aAY, Math.floor((aS.k - aAX) / 2), aS.k - 2 * aAY - aAY % 2, aAX), on.fillRect(Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aAX) / 2), aAY, aAX, aS.k - 2 * aAY - aAY % 2),
			a6K = bD.go.j4(aE.fC, aS.hw()), on.fillText(bD.tB.a1S(a6K) + " (" + bD.tB.a6D(100 * j5, +(j5 < .1)) + ")", Math.floor(.5 * j), aAZ)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		j5 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a4E(arg1);

	function aAe(a4Z) {
		return !(1 < a4Z && 1 === j5 || (1 < a4Z && a4Z * j5 - j5 < 1 / 1024 ? a4Z = (j5 + 1 / 1024) / j5 : a4Z < 1 && j5 - a4Z * j5 < 1 / 1024 && (a4Z = (j5 - 1 / 1024) / j5), j5 = bO.ia(j5 * a4Z, 1 / 1024, 1), aAU(), 0))
	}

	function aAf(m2) {
		return j5 !== (j5 = bO.ia((m2 - fZ - aAR) / (j - 2 * aAR), 1 / 1024, 1)) && (aAU(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aAU(), bi.ds = !0
	}, this.fb = 0, this.hg = !1, this.dk = function() {
		iE = !aE.hq && !aE.hb, a9M = !1, j5 = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a6K = 0, this.hg = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ib() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.ic), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ib() ? .65 : .389) * i.ic), j += 12 - j % 12, this.k = Math.floor(j / 12)), aAR = Math.floor(3 * this.k / 2), a7p =
			bD.sD.u1(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, wm), canvas.height = this.k, (on = canvas.getContext("2d", {
				alpha: !0
			})).font = a7p, bD.sD.textBaseline(on, 1), bD.sD.textAlign(on, 1), this.aAT(), aAU()
	}, this.aAT = function() {
		fZ = a1.a2.ib() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fb = i.k - this.k - bn.a7E() * bf.gap
	}, this.n9 = function() {
		a9M && (a9M = !1, aAU())
	}, this.iE = function() {
		return !(!iE || aN.hc && fZ < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a8S = function(aAa) {
		return !!this.iE() && fZ + j > i.j - aAa - bf.gap
	}, this.a6R = function() {
		iE = !aE.hb
	}, this.aAG = function() {
		iE = !1
	}, this.hw = function() {
		return bO.ia(Math.floor(1024 * j5 + .5) - 1, 0, 1023)
	}, this.a4B = function(m2, m3) {
		return this.iE() && fZ < m2 && m2 < fZ + j && m3 > this.fb
	}, this.hf = function(m2, m3) {
		if (!this.iE()) return !1;
		if (!(__fx.settings.keybindButtons && m3 > this.fb - Math.floor(bf.gap / 4) - this.k && m3 < this.fb - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(m2 - fZ))) {
			if (!aS.a4B(m2, m3)) return !1;
			aT.nt = !1, ! function(tl, m2, m3) {
				if (function(m2, m3) {
						return fZ < m2 && m2 < fZ + aAR && m3 > aS.fb
					}(m2, m3)) return aAe(aAS);
				if (function(m2, m3) {
						return fZ + j - aAR < m2 && m2 < fZ + j && m3 > aS.fb
					}(m2, m3)) return aAe(1 / aAS);
				return tl.hg = !0, aAf(m2)
			}(this, m2, m3) || (bi.ds = !0)
		}
		return !0
	}, this.a4E = function(o0) {
		0 !== aE.a2B && this.iE() && aAe(o0) && (bi.ds = !0)
	}, this.a3k = function(deltaY) {
		var o0;
		return !(0 === deltaY || !this.iE()) && aAe(o0 = 0 < deltaY ? (o0 = 400 / (400 + deltaY)) < aAS ? aAS : o0 : 1 / aAS < (o0 = (400 - deltaY) / 400) ? 1 / aAS : o0)
	}, this.a3h = function(m2) {
		return !!this.hg && aAf(m2)
	}, this.a47 = function() {
		this.hg = !1
	}, this.ee = function() {
		this.iE() && a6K !== bD.go.j4(aE.fC, this.hw()) && (a9M = !0)
	}, this.wl = function() {
		this.iE() && (wm.drawImage(canvas, fZ, this.fb), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(wm, fZ, this.fb)
	}
}

function d6() {
	var canvas, on, aAg, font, aAh = 0,
		aAi = !1,
		aAj = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aAk = 5;

	function aAr() {
		if (aAi) {
			var aC, fS = aAj.length,
				aAZ = Math.floor(.5 * aAg.k),
				k = fS * aAZ,
				fZ = Math.floor(Math.floor(aAg.fZ) + .3 * aAg.j - .5),
				fb = Math.floor(Math.floor(aAg.fb) - k),
				j = Math.floor(.4 * aAg.j + 2.5);
			for (wm.fillStyle = bE.pD, wm.fillRect(fZ, fb, j, k), wm.fillStyle = bE.pg, wm.fillRect(fZ, fb + aAk * aAZ, j, aAZ), wm.fillStyle = bE.pH, wm.fillRect(fZ, fb, 2, k), wm.fillRect(fZ, fb, j, 2), wm.fillRect(fZ + j - 2, fb, 2, k), aC =
				1; aC < fS; aC++) wm.fillRect(fZ, fb + aC * aAZ, j, 2);
			for (wm.fillStyle = bE.pH, bD.sD.textAlign(wm, 1), bD.sD.textBaseline(wm, 1), wm.font = bD.sD.u1(0, .6 * aAZ), fZ += .5 * j, aC = 0; aC < fS; aC++) wm.fillText(aAz(aC), fZ, fb + (aC + .6) * aAZ)
		}
		wm.drawImage(canvas, Math.floor(aAg.fZ), Math.floor(aAg.fb))
	}

	function nA(tl) {
		var fZ, no, np, aAZ;
		on.clearRect(0, 0, Math.floor(aAg.j), Math.floor(aAg.k)), on.fillStyle = bE.pD, on.fillRect(0, 0, Math.floor(aAg.j), Math.floor(aAg.k)), aE.nr && (on.fillStyle = bE.pg, on.fillRect(0, 0, Math.floor(.3 * aAg.j), Math.floor(aAg.k))), on
			.fillStyle = bE.pH, on.fillText("Hide UI", .15 * aAg.j, .5 * aAg.k), on.fillRect(Math.floor(.3 * aAg.j - .5), 0, 2, Math.floor(aAg.k)), fZ = .5 * aAg.j, on.fillText("Replay Speed", fZ, .31 * aAg.k), on.fillText(aAz(aAk), fZ, .69 * aAg.k),
			on.fillRect(Math.floor(.7 * aAg.j - .5), 0, 2, Math.floor(aAg.k)), tl.a6y ? (fZ = Math.floor(.02 * aAg.j), tl = Math.floor(.025 * aAg.j), no = Math.floor(.85 * aAg.j - fZ - .5 * tl), np = Math.floor(.25 * aAg.k), aAZ = Math.floor(aAg.k) -
				2 * np, on.fillRect(no, np, fZ, aAZ), on.fillRect(no + fZ + tl, np, fZ, aAZ)) : function() {
				var j = Math.floor(.46 * aAg.k),
					k = Math.floor(.23 * aAg.k),
					fZ = Math.floor(.85 * aAg.j - .5 * j + j / 12),
					fb = Math.floor(.5 * aAg.k - k);
				on.beginPath(), on.moveTo(fZ, fb), on.lineTo(fZ + j, fb + k), on.lineTo(fZ, fb + (k << 1)), on.fill()
			}(), on.fillRect(0, 0, Math.floor(aAg.j), 2), on.fillRect(0, 0, 2, Math.floor(aAg.k)), on.fillRect(0, Math.floor(aAg.k) - 2, Math.floor(aAg.j), 2), on.fillRect(Math.floor(aAg.j - 2), 0, 2, Math.floor(aAg.k))
	}

	function aAz(aC) {
		return 5 === aC ? "Normal" : "" + aAj[aC]
	}
	this.a6y = !1, this.dk = function() {
		aE.hb && (aAk = 5, this.a6y = !1, aAi = !1, aAg = new sn([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aAl = function() {
		return aAj[aAk]
	}, this.a0H = function() {
		return aAg.fb
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a6y,
		fxGetSpeedIndex: () => aAk,
		fxSetSpeedIndex: index => {
			aAk = index, this.resize()
		},
		fxGetPanelTop: () => aAg && aAg.fb
	}, this.a8S = function(aAa) {
		return !!aE.hb && aAg.fZ + aAg.j > i.j - aAa - bf.gap
	}, this.resize = function() {
		aE.hb && (aAg.resize(), aAg.fb -= (bn.a7E() - 1) * bf.gap, font = bD.sD.u1(0, .3 * aAg.k), (canvas = document.createElement("canvas")).width = Math.floor(aAg.j), canvas.height = Math.floor(aAg.k), (on = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sD.textAlign(on, 1), bD.sD.textBaseline(on, 1), nA(this))
	}, this.a4H = function(aAm) {
		0 === aE.a2B || u.iE() || aAm !== aE.nr && (aE.nr = aAm, bk.resize(), bi.ds = !0, aE.hb) && (aAh = bi.eZ + 2e3, nA(this))
	}, this.hf = function(fZ, fb) {
		if (!aE.hb) return !1;
		if (fZ < aAg.fZ || fb < aAg.fb || fZ > aAg.fZ + aAg.j) return aAi && function(tl, fZ, fb) {
			var fS = aAj.length,
				aAZ = Math.floor(.5 * aAg.k),
				k = fS * aAZ,
				no = Math.floor(Math.floor(aAg.fZ) + .3 * aAg.j - .5),
				k = Math.floor(Math.floor(aAg.fb) - k),
				j = Math.floor(.4 * aAg.j + 2.5);
			return aAi = !1, bi.ds = !0, fZ < no || no + j < fZ || fb < k || (aAk = aAq(0, Math.floor((fb - k) / aAZ), fS - 1), nA(tl)), !0
		}(this, fZ, fb);
		if ((fZ -= aAg.fZ) < .3 * aAg.j) aAi = !1, this.a4H(!aE.nr);
		else {
			if (fZ < .7 * aAg.j) return aAi = !aAi, bi.ds = !0;
			this.a4J(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a4J(!0), this.a4J = function(aAo) {
		2 === aE.a2B ? (this.a4H(!1), u.v(3)) : (aAi = !1, this.a6y = !this.a6y, this.a6y ? (aN.hc && aN.a4I(), a1.a2.setState(1)) : aAo || aN.a7w(), bi.ds = !0, nA(this))
	}, this.aAp = function() {
		this.a6y = !1, aN.a7w(), bi.ds = !0, nA(this)
	}, this.a40 = function(fZ, fb) {
		return !!aE.nr && (0 <= aN.hf(fZ, fb) || (aE.hb ? ((bi.eZ > aAh || !this.hf(fZ, fb)) && aT.hf(fZ, fb), bi.ds = !0, aAh = bi.eZ + 2e3) : aT.hf(fZ, fb)), !0)
	}, this.ee = function() {
		aE.hb && aE.nr && bi.eZ > aAh - 1e3 && bi.eZ < aAh && (bi.ds = !0)
	}, this.a2K = function() {
		aE.hb && (this.a6y = !1, bi.ds = !0, nA(this))
	}, this.wl = function() {
		if (aE.hb) {
			if (aE.nr) {
				if (bi.eZ > aAh) return;
				if (bi.eZ > aAh - 1e3) return wm.globalAlpha = aAq(0, (1e3 - (bi.eZ - (aAh - 1e3))) / 1e3, 1), aAr(), void(wm.globalAlpha = 1)
			}
			aAr()
		}
	}
}

function cN() {
	var aB0, aB1, j, fZ, fb, aB2, aB3;
	this.dk = function() {
		aB0 = new Array(2), aB1 = new Array(2), this.nt = !1, aB3 = aB2 = j7 = j6 = 0, ie = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ib() ? .072 : .0502) * i.ic)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aB0[aC] = document.createElement("canvas"), aB0[aC].width = j, aB0[aC].height = j, aB1[aC] = aB0[aC].getContext("2d", {
			alpha: !0
		});
		this.aAT(),
			function() {
				for (var aBK = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aB1[aC].clearRect(0, 0, j, j), aB1[aC].fillStyle = bE.pA, aB1[aC].beginPath(), aB1[aC].arc(j / 2, j / 2, j / 2 - aBK, 0, 2 * Math.PI), aB1[aC].fill(), aB1[aC]
					.lineWidth = aBK, aB1[aC].fillStyle = bE.pH, aB1[aC].strokeStyle = bE.pH, aB1[aC].beginPath(), aB1[aC].arc(j / 2, j / 2, j / 2 - aBK, 0, 2 * Math.PI), aB1[aC].stroke(), a0N(aB1[aC], 0, 0, j, aBK, .3, 0 === aC)
			}()
	}, this.a0G = function() {
		return -j6 / ie
	}, this.a0H = function() {
		return -j7 / ie
	}, this.o3 = function(aB7, il) {
		j6 = ie * aB7 - il
	}, this.o4 = function(aB8, im) {
		j7 = ie * aB8 - im
	}, this.hf = function(aB6, a8T) {
		return aE.nr || ! function(aB6, a8T) {
			return Math.pow(aB6 - (fZ + j / 2), 2) + Math.pow(a8T - (fb + j / 2), 2) < j * j / 4 || Math.pow(aB6 - (fZ + j / 2), 2) + Math.pow(a8T - (fb + 2 * j), 2) < j * j / 4
		}(aB6, a8T) || bm.buffer.data[8].value ? (aI.o6() && (this.nt = !0, aB2 = aB6, aB3 = a8T), !1) : a8T < fb + 1.25 * j ? this.a3k(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a3k(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a3h = function(aB6, a8T) {
		var aB9, aBA, ip, is;
		return !aI.o6() || (aB9 = j6, aBA = j7, j6 += ip = aB2 - aB6, j7 += is = aB3 - a8T, ag.a3h(ip, is), this.aBB(), aB2 = aB6, aB3 = a8T, aB9 !== j6) || aBA !== j7
	}, this.a3k = function(m2, m3, deltaY) {
		var o0;
		if (aI.o6()) {
			if (0 < deltaY) o0 = (o0 = 500 / (500 + deltaY)) < .5 ? .5 : o0;
			else {
				if (!(deltaY < 0)) return !1;
				o0 = 2 < (o0 = (500 - deltaY) / 500) ? 2 : o0
			}
			this.aBC(m2, m3, o0), bi.ds = !0
		}
		return !0
	}, this.aBC = function(fZ, fb, f6) {
		var a4Z;
		f6 = a4Z = (a4Z = 1024 < (a4Z = f6) * ie ? 1024 / ie : a4Z) * ie < .125 ? .125 / ie : a4Z, ag.zoom(f6, fZ, fb),
			function(a4Z, m2, m3) {
				ie *= a4Z, j6 = (j6 + m2) * a4Z - m2, j7 = (j7 + m3) * a4Z - m3, aT.aBB()
			}(f6, fZ, fb)
	}, this.aBB = function() {
		var aBF = i.j / 16,
			aBG = 0,
			aBH = i.k / 16,
			aBI = 0;
		j6 < -i.j + aBF && (aBG = -i.j + aBF - j6), j6 > ie * bV.fd - aBF && (aBG = ie * bV.fd - aBF - j6), j7 < -i.k + aBH && (aBI = -i.k + aBH - j7), j7 > ie * bV.fe - aBH && (aBI = ie * bV.fe - aBH - j7), j6 += aBG, j7 += aBI, bd.o5(), ag.aBJ(
			aBG, aBI)
	}, this.aAT = function() {
		fZ = i.j - j - bf.gap, fb = Math.floor(i.k / 2 - 1.25 * j)
	}, this.wl = function() {
		bm.buffer.data[8].value || (wm.drawImage(aB0[0], fZ, fb), wm.drawImage(aB0[1], fZ, Math.floor(fb + 3 * j / 2)))
	}
}

function cO() {
	var h, aBL, aBM, aBN, gap, aBO, aBP, aBQ, aBR, aBS, a7p, aBT, hX, aBU, a9T, aBV, aBW;

	function aBa() {
		aBN = Math.floor(.2 * (a1.a2.ib() ? .07 : .035) * i.ic), aBN = a8Q(a1.a2.ib() ? 3 : 1, aBN);
		var aBd = i.j / (h.length + gap);
		aBN = aBN < aBd ? aBd : aBN, a9T = Math.floor((1 - gap) * aBN), aBL = 0, aBe()
	}

	function aBe() {
		aBL = (aBL = aBL < -20 ? -20 : aBL) > (h.length - 15) * aBN ? (h.length - 15) * aBN : aBL, aBP = Math.floor(aBL / aBN), aBQ = (aBQ = aBP + Math.floor(i.j / aBN)) > h.length - 1 ? h.length - 1 : aBQ, aBP = (aBP = aBQ < aBP ? aBQ : aBP) < 0 ?
			0 : aBP;
		var li = aBQ;
		aBO = aBM / h[li];
		for (var aC = aBQ - 1; aBP <= aC; aC--) h[aC] > h[li] && (li = aC, aBO = aBM / Math.pow(h[aC], aBU))
	}

	function aBh(fZ) {
		fZ = Math.floor((aBL + i.j - fZ - gap * aBN) / aBN);
		return (fZ = fZ < -1 ? -1 : -1 === fZ ? 0 : fZ > h.length - 1 ? -1 : fZ) !== aBR && (aBR = fZ, -1 === aBV && 0 === aBR && aU.aBX && (aBV = setInterval(aBi, 100)), 1)
	}

	function aBj(aC) {
		var aBl = Math.floor(aBO * Math.pow(h[aC], aBU));
		wm.fillRect(aBL + i.j - (aC + 1) * aBN, i.k - aBl, a9T, aBl)
	}

	function aBi() {
		var h0;
		0 !== (aBR = 8 === ab.a3K() ? -1 : aBR) ? (aBW = (new Date).getTime(), clearInterval(aBV), aBV = -1) : (h0 = h[1] / 864e3, -1 !== aBW && (h0 += ((new Date).getTime() - aBW) * h[1] / 864e5, aBW = -1), 0 < h0 && (h[0] += Math.floor(h0), bi
			.ds = !0))
	}
	this.aBX = !1, this.dk = function() {
		aBW = aBV = -1, aBR = -(aBU = 1), this.aBY = !1, hX = 0, aBT = new Date, aBL = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aBM = Math.floor(.15 * i.k), aBS = (aBS = Math.floor((a1.a2.ib() ? .018 : .0137) * i.ic)) < 2 ? 2 : aBS, a7p = bD.sD.u1(1, aBS), aBa()
	}, this.aBb = function(aBc) {
		var aC;
		for (this.aBX = !0, aC = 0; aC < aBc.length; aC++) h.unshift(aBc[aC]);
		aBa(), bi.ds = !0
	}, this.aBf = function() {
		aBe()
	}, this.a3h = function(fZ, fb) {
		fb > i.k - .6 * aBM ? this.aBY ? fZ !== hX && (aBL += fZ - hX, hX = fZ, aBe(), aBh(fZ), this.aBY = -1 !== aBR, bi.ds = !0) : aBh(fZ) && (bi.ds = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aBR && (this.aBY = !1, aBR = -1, bi.ds = !0)
	}, this.a3k = function(fZ, deltaY) {
		-1 !== aBR && (aBL += Math.floor(deltaY), aBe(), aBh(fZ), bi.ds = !0)
	}, this.hf = function(fZ, fb) {
		this.a3h(fZ, fb), -1 !== aBR && (hX = fZ, this.aBY = !0)
	}, this.a46 = function() {
		-1 !== aBR && (this.aBY = !1)
	}, this.wl = function() {
		wm.fillStyle = bE.pK;
		for (var aBm, month, ea, ua, aBp, aBq, np, aBr, aBs, aC = aBQ; aBP <= aC; aC--) aBj(aC);
		this.aBX && 0 === aBP && (wm.fillStyle = bE.pr, aBj(0)), -1 !== aBR && (wm.fillStyle = bE.pJ, aBj(aBR)), -1 !== aBR && (wm.font = a7p, bD.sD.textBaseline(wm, 2), (ea = new Date).setTime(aBT.getTime() - 1e3 * aBR * 60 * 60 * 24), month =
			"month", aBm = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ea), aBm = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ea)), aBm = aBm + ", " + ea.getUTCDate() + " " + month + " " + ea.getFullYear(), month = 1 === h[aBR] ? L(115) : L(116), month = bD.tB.a1S(h[aBR]) + " " + month, ea = Math.floor(wm.measureText(aBm).width), ua = Math
			.floor(wm.measureText(month).width), aBp = Math.floor(.5 * (ea + aBS)), aBq = (aBq = aBL + i.j - (aBR + 1) * aBN) < aBp ? aBp : aBq > i.j - aBp ? i.j - aBp : aBq, np = i.k - Math.floor(aBO * Math.pow(h[aBR], aBU)), aBr = Math
			.floor(1.1 * aBS), aBs = np > i.k - aBr ? i.k - aBr : np, wm.fillStyle = bE.pE, wm.fillRect(i.j - ua - aBS, aBs - aBr, ua + aBS, aBr), wm.fillRect(aBq - aBp, i.k - aBr, ea + aBS, aBr), wm.fillStyle = bE.pH, bD.sD.textAlign(wm, 2),
			wm.fillText(month, Math.floor(i.j - .5 * aBS), aBs), bD.sD.textAlign(wm, 1), wm.fillText(aBm, aBq, i.k), wm.strokeStyle = bE.pL, wm.lineWidth = 1, wm.beginPath(), wm.moveTo(0, np), wm.lineTo(i.j, np), wm.closePath(), wm.stroke())
	}
}

function cP() {
	var a7p, j, fb, aBt, aBu, aBv, canvas, on, a9M, a5f, aBw, aBx, aBy, aBz;
	this.fZ = 0, this.k = 0, this.dk = function() {
		aBv = aE.a6Z, aBx = "rgba(0,100,0,0.8)", aBy = "rgba(150,0,0,0.8)", a9M = aBw = !0, a5f = ah.hU[aE.fC], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ib() ? .305 : .24) * i.ic), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a7p = bD.sD.u1(1, Math.floor(.8 * this.k)), aBu = bD.sD.u1(1, Math.floor(.45 * this.k)), aBz = Math.floor(.5 * this.k), bV.ye
			.font = a7p, fb = bf.gap, aBt = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, on = canvas.getContext("2d", {
				alpha: !0
			}), bD.sD.textBaseline(on, 1), bD.sD.textAlign(on, 1), this.aC0()
	}, this.a9p = function() {
		return a1.a2.ib() && i.j < 1.2 * i.k
	}, this.aAT = function() {
		this.a9p() ? this.fZ = i.j - j - bf.gap : this.fZ = Math.floor(aW.aC1() + (i.j - aW.aC1() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.n9 = function() {
		a9M && (a9M = !1, this.aC0())
	}, this.aC0 = function() {
		on.font = a7p, on.clearRect(0, 0, j, this.k), on.fillStyle = aBw ? aBx : aBy, on.fillRect(0, 0, j, this.k), on.fillStyle = bE.pJ;
		var ej = this.aC2(),
			aC4 = (this.aC3(), on.fillStyle = ah.hU[aE.fC] >= af.kT(aE.fC) ? bE.po : bE.pH, bD.tB.a1S(a5f)),
			aC4 = (on.fillText(aC4, Math.floor(j / 2), aBz), on.measureText(aC4).width),
			aC5 = (on.font = aBu, on.fillStyle = 9 === ej ? bE.qO : bE.pH, af.aC6),
			aC7 = "+" + aC5,
			ua = on.measureText(aC7).width,
			aC8 = Math.floor(this.k / 12),
			aC4 = .5 * (j + aC4) + aC8;
		(aC4 + ua + aBt <= j || 1e3 <= aC5 && (aC7 = "+" + Math.floor(aC5 / 1e3) + "K", aC4 + (ua = on.measureText(aC7).width) + aBt <= j)) && on.fillText(aC7, Math.floor(aC4 + .5 * ua), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && on.fillText(9 - ej, Math.floor(2 * aBt + aC8), Math.floor(.3 * this.k)), on.fillStyle = bE.pH, on.fillRect(0, 0, j, 1), on.fillRect(0, 0, 1, this.k), on.fillRect(0, this.k - 1, j, 1), on.fillRect(j - 1, 0, 1,
				this.k)
	}, this.aC2 = function() {
		var ej = bi.kk() % 100,
			zJ = (ej = 9 - bO.ft(ej -= ej % 10, 10), Math.floor(ej * (this.k - aBt) / 9));
		return on.fillRect(0, zJ, aBt, this.k - zJ), on.fillRect(j - aBt, zJ, aBt, this.k - zJ), ej
	}, this.aC3 = function() {
		on.fillRect(aBt, this.k - aBt, Math.floor((j - 2 * aBt) * ah.hU[aE.fC] / aBv), aBt)
	}, this.ee = function() {
		var h0 = aE.fC;
		bD.go.he(h0) && (h0 = ah.hU[h0] - ah.a5e[h0], a5f !== h0 ? (aBv = a8Q(h0, aBv), aBw = a5f < h0 && 10 <= h0, a5f = h0, a9M = !0) : bi.kk() % 10 == 9 && (a9M = !0))
	}, this.wl = function() {
		0 === ah.nN[aE.fC] || aE.hq || 2 === ah.a5V[aE.fC] || wm.drawImage(canvas, this.fZ, fb)
	}
}

function cQ() {
	var aC9, aCA, aCB, aCC, aCD, aCE, aCF, aCG, aCH, aCI, aCJ, aCK, aCL, aCM, aCN, aCO, aCP, aCQ, aCR, aCS, aCT, aCU, position, aCV, aCW, aCX, aCY, aCZ, aCa = 1,
		aCb = 1,
		aCc = "";
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

	function aCe() {
		aCF.clearRect(0, 0, aC9, aA4),
			aCF.fillStyle = aCZ ? bE.qB : bE.q7,
			aCF.fillRect(0, 0, aC9, aCK),
			aCF.fillStyle = bE.pD,
			aCF.fillRect(0, aCK, aC9, aA4 - aCK);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kY[aE.fC]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aCU = -1;
		if (__fx.leaderboardFilter.enabled && aCU >= __fx.leaderboardFilter.filteredLeaderboard.length) aCU = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aCg(ownClanIndex - position, bE.pg);
			})() :
			(playerPos >= position && aCg(playerPos - position, bE.pg),
				0 !== kY[aE.fC] && 0 === position && aCg(0, bE.qF))
		),
		-1 !== aCU && aCg(aCU, bE.pI),
			aCF.fillStyle = bE.pD,
			//console.log("drawing", aCU),
			aCF.clearRect(0, aA4 - __fx.leaderboardFilter.tabBarOffset, aC9, __fx.leaderboardFilter.tabBarOffset);
		aCF.fillRect(0, aA4 - __fx.leaderboardFilter.tabBarOffset, aC9, __fx.leaderboardFilter.tabBarOffset);
		aCF.fillStyle = bE.pH,
			aCF.fillRect(0, aCK, aC9, 1),
			aCF.fillRect(0, aA4 - __fx.leaderboardFilter.tabBarOffset, aC9, 1),
			__fx.leaderboardFilter.drawTabs(aCF, aC9, aA4 - __fx.leaderboardFilter.tabBarOffset, bE.pg),
			aCF.fillRect(0, 0, aC9, bf.a19),
			aCF.fillRect(0, 0, bf.a19, aA4),
			aCF.fillRect(aC9 - bf.a19, 0, bf.a19, aA4),
			aCF.fillRect(0, aA4 - bf.a19, aC9, bf.a19), aCF.font = aCA, bD.sD.textBaseline(aCF, 1), bD.sD.textAlign(aCF, 1), aCF.fillText(aCc, Math.floor((aC9 + aCK - 22) / 2), Math.floor(aCI + aCB / 2));
		__fx.playerList.drawButton(aCF, 12, 12, aCK - 22);
		var fl, h1 = playerPos < position + aCD - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h1 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aCD)
				position = (rivalsCount > aCD ? rivalsCount : aCD) - aCD;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aCD; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hG[repId], ah.a0e[repId], ah.a5V[repId]]);
					ah.hG[repId] = rivalsEntry.territory;
					ah.a0e[repId] = "[" + rivalsEntry.clan + "]";
					ah.a5V[repId] = 0;
				}
				for (aCF.font = aCC, bD.sD.textAlign(aCF, 0), fl = aCD - h1; 0 <= fl; fl--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fl + position];
					if (rivalsEntryLeft !== undefined)
						aCh(rivalsEntryLeft.representativeId), aCi(fl, fl + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sD.textAlign(aCF, 2), fl = aCD - h1; 0 <= fl; fl--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fl + position];
					if (rivalsEntryRight !== undefined)
						aCh(rivalsEntryRight.representativeId), aCj(fl, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hG[entry[0]] = entry[1];
					ah.a0e[entry[0]] = entry[2];
					ah.a5V[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aCD)
				position = (result.length > aCD ? result.length : aCD) - aCD;
			//if (position >= result.length) position = result.length - 1;
			for (aCF.font = aCC, bD.sD.textAlign(aCF, 0), fl = aCD - h1; 0 <= fl; fl--) {
				const pos = result[fl + position];
				if (pos !== undefined)
					aCh(mO[pos]), aCi(fl, pos, mO[pos]);
			}
			for (bD.sD.textAlign(aCF, 2), fl = aCD - h1; 0 <= fl; fl--) {
				const pos = result[fl + position];
				if (pos !== undefined)
					aCh(mO[pos]), aCj(fl, mO[pos]);
			}
		} else {
			for (aCF.font = aCC, bD.sD.textAlign(aCF, 0), fl = aCD - h1; 0 <= fl; fl--)
				aCh(mO[fl + position]), aCi(fl, fl + position, mO[fl + position]);
			for (bD.sD.textAlign(aCF, 2), fl = aCD - h1; 0 <= fl; fl--)
				aCh(mO[fl + position]), aCj(fl, mO[fl + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h1 && (aCh(aE.fC), bD.sD.textAlign(aCF, 0), aCi(aCD - 1, kY[aE.fC], aE.fC), bD.sD.textAlign(aCF, 2), aCj(aCD - 1, aE.fC)), 0 === position && (h1 = .7 * aCL / ac.get(4).height, aCF.setTransform(
			h1, 0, 0, h1, Math.floor(aCM + .58 * aCL + .5 * h1 * ac.get(4).width), Math.floor(aCI + aCB + .4 * aCL)), aCF.imageSmoothingEnabled = !0, aCF.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aCF.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aCh(player) {
		aE.iM && (aCF.fillStyle = bj.aCl[bj.aCm[player]])
	}

	function aCg(aC, aCn) {
		aCF.fillStyle = aCn, aC = aCD - 1 < aC ? aCD - 1 : aC;
		aCn = Math.floor((aC === aCD - 1 ? 2 : 0 === aC ? 1.15 : 1) * aCL), aCn = aC === aCD - 2 ? Math.floor(aCK + 9.15 * aCL) - Math.floor(aCK + 8.15 * aCL) : aCn;
		aCF.fillRect(0, Math.floor(aCK + (aC + (0 === aC ? 0 : .15)) * aCL), aC9, aCn)
	}

	function aCi(xo, a5t, aC) {
		aCF.fillText(aCQ[a5t], aCM, Math.floor(aCI + aCB + (xo + .5) * aCL)), 1 === ah.a5V[aC] && (aCF.font = "italic " + aCC);
		a5t = Math.floor(aCI + aCB + (xo + .5) * aCL);
		aCF.fillText(ah.a0e[aC], aCN, a5t), 0 !== ah.a5V[aC] && (aCF.font = aCC), aC < aE.kn && 2 !== ah.a5V[aC] || aCF.fillRect(aCN, a5t + .35 * aCa, aCP[aC], Math.max(1, .1 * aCa))
	}

	function aCj(xo, aC) {
		aCF.fillText(ah.hG[aC], aCO, Math.floor(aCI + aCB + (xo + .5) * aCL))
	}
	this.dk = function() {
		var aC;
		for (u.z.uL[0] = 0, aCY = aCX = aCV = 0, aCZ = aCW = !1, aCU = -1, aCD = a1.a2.ib() ? 6 : 10, aCb = (position = 0) === (aCb = bm.buffer.data[11].value) ? 10 : 1 === aCb ? 5 : 1, aCT = !1, aCR = new Uint16Array(aCD + 1), aCS =
			new Uint32Array(aCD + 1), aCH = aE.fP, mO = new Uint16Array(aCH), kY = new Uint16Array(aCH), aC = aCH - 1; 0 <= aC; aC--) mO[aC] = aC, kY[aC] = aC;
		this.resize(!0), aCP = new Uint16Array(aE.fP);
		var aCd = Math.floor(aC9 - aCN - aCM - aCG);
		for (aCQ = new Array(aE.fP), aCF.font = aCC, aC = aE.fP - 1; 0 <= aC; aC--) aCQ[aC] = aC + 1 + ".", ah.a0e[aC] = bD.on.a5E(ah.a2r[aC], aCC, aCd), aCP[aC] = Math.floor(aCF.measureText(ah.a0e[aC]).width);
		aCe()
	}, this.resize = function(dk) {
		if (aA4 = a1.a2.ib() ? (aC9 = Math.floor(.335 * i.ic), Math.floor(aCD * aC9 / 8)) : (aC9 = Math.floor(.27 * i.ic), Math.floor(aCD * aC9 / 10)), aC9 = Math.floor(.97 * aC9), (aCE = document.createElement("canvas")).width = aC9, aCE
			.height = aA4, aCF = aCE.getContext("2d", {
				alpha: !0
			}), aCI = .025 * aC9, aCB = .16 * aC9, aCJ = 0 * aC9, aCK = Math.floor(.45 * aCI + aCB), aCL = (aA4 - aCB - 2 * aCI - aCJ) / aCD,
			aCE.height = aA4 += aCL, __fx.leaderboardFilter.tabBarOffset = Math.floor(aCL * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aA4 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aC9,
			aCA = bD.sD.u1(1, Math.floor(.55 * aCB)), aCa = Math.floor((a1.a2.ib() ? .67 : .72) * aCL), aCC = bD.sD.u1(0, aCa), aCF.font = aCC, aCM = Math.floor(.04 * aC9), aCN = Math.floor((a1.a2.ib() ? .195 : .18) * aC9), aCG = Math.floor(aCF
				.measureText("00920600").width), aCF.font = aCA, aCO = aC9 - aCM, !dk) {
			aCF.font = aCC;
			for (var aC = aE.fP - 1; 0 <= aC; aC--) aCP[aC] = Math.floor(aCF.measureText(ah.a0e[aC]).width);
			aCe()
		}
		aCc = bD.on.a5E(L(117), aCA, .96 * aC9)
	}, this.aC1 = function() {
		return aC9
	}, this.n9 = function(by, aCf) {
		(aCf || aCT && (by || bi.kk() % aCb == 0)) && (aCT = !1, aCe())
	}, this.ee = function() {
		! function() {
			for (var fl = aCH - 1; 0 <= fl; fl--) 0 === ah.nN[mO[fl]] && ! function(fl) {
				var aCv = mO[fl];
				aCH--;
				for (var aC = fl; aC < aCH; aC++) mO[aC] = mO[aC + 1], kY[mO[aC]] = aC;
				mO[aCH] = aCv, kY[mO[aCH]] = aCH
			}(fl)
		}();
		for (var aCt, o6 = aCH - 1, fl = 0; fl < o6; fl++) ah.hG[mO[fl]] < ah.hG[mO[fl + 1]] && (aCt = mO[fl], mO[fl] = mO[fl + 1], mO[fl + 1] = aCt, kY[mO[fl]] = fl, kY[mO[fl + 1]] = fl + 1);
		! function() {
			for (var ea = aCT, h1 = (aCT = !0, kY[aE.fC] >= aCD - 1 ? aCD - 2 : aCD - 1), aC = h1; 0 <= aC; aC--)
				if (aCR[aC] !== mO[aC] || aCS[aC] !== ah.hG[mO[aC]]) return;
			(h1 != aCD - 2 || aCR[aCD] === kY[aE.fC] && aCS[aCD] === ah.hG[aE.fC]) && (aCT = ea)
		}();
		for (var aC = aCD - 1; 0 <= aC; aC--) aCR[aC] = mO[aC], aCS[aC] = ah.hG[mO[aC]];
		aCR[aCD] = kY[aE.fC], aCS[aCD] = ah.hG[aE.fC];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hf = function(fZ, fb) {
		if (a18(fZ, fb)) {
			if (__fx.utils.isPointInRectangle(fZ, fb, bf.gap + 12, bf.gap + 12, aCK - 22, aCK - 22)) __fx.playerList.display(ah.a2r);
			else {
				if (fb - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fZ - bf.gap);
				fZ = aCx(fb);
				0 <= fZ ? (aCV = bi.eZ, aCW = !0, aCX = aCY = fZ, bM.a4K() && (fZ = aAq(-1, aCY, aCD), aCU !== (fZ = fZ === aCD ? -1 : fZ)) && (aCU = fZ, aCe(), bi.ds = !0)) : (aCZ && (aCZ = !1, aCe(), bi.ds = !0), u.v(10, 0, new aCy({
					aCz: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aCe(), bi.ds = !0
	};

	function aCx(fb) {
		return (fb -= bf.gap + aCK) < 0 ? Math.floor(fb / aCL) - 1 : fb < (aCD - 1) * aCL ? Math.floor(fb / aCL) : fb < aA4 - aCK ? aCD - 1 : (fb -= aA4 - aCK, aCD + Math.floor(fb / aCL))
	}

	function a18(fZ, fb) {
		return fZ >= bf.gap && fZ < bf.gap + aC9 && fb >= bf.gap && fb < bf.gap + aA4
	}
	this.a3h = function(fZ, fb) {
		var ea, aCw;
		if (__fx.utils.isPointInRectangle(fZ, fb, bf.gap + 12, bf.gap + 12, aCK - 22, aCK - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fZ, fb, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fZ - bf.gap)) return aCw = aCx(fb), fZ = a18(fZ, fb), fb = !(!(aCw < 0 && fZ) || bM.a4K()), aCW ? (ea = position, (position = aAq(0, position += aCX - aCw, aE.fP - aCD)) !== ea ? (aCZ = fb,
			aCw = aAq(-1, aCX = aCw, aCD), aCU = aCw = aCw !== aCD && fZ ? aCw : -1, aCe(), bi.ds = !0) : aCZ !== fb && (aCZ = fb, aCe(), bi.ds = !0), !0) : (aCw = (aCw = aAq(-1, aCw, aCD)) === aCD || !fZ || bM.a4K() ? -1 : aCw, (aCU !==
			aCw || aCZ !== fb) && (aCU = aCw, aCZ = fb, aCe(), bi.ds = !0))
	}, this.a46 = function(fZ, fb) {
		if (!aCW) return !1;
		aCW = !1;
		var aCw = aCx(fb);
		var isEmptySpace = false;
		return bM.a4K() && -1 !== aCU && (aCU = -1, aCe(), bi.ds = !0), bi.eZ - aCV < 350 && aCY === aCw && -1 !== (aCw = (aCw = aAq(-1, aCw, aCD)) !== aCD && a18(fZ, fb) ? aCw : -1) && (fZ = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aCw + position] === undefined, __fx.leaderboardFilter.rivalsData[aCw + position]?.representativeId ?? aE.fC) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mO[__fx.leaderboardFilter.filteredLeaderboard[aCw + position] ?? (isEmptySpace = true, kY[aE.fC])]) : mO[aCw + position]),
			aCw === aCD - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kY[aE.fC]) >=
			position + aCD - 1 && (fZ = aE.fC), !isEmptySpace && aE.iM && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fZ, ah.a2r, aE.l7), 0 === ah.nN[fZ] || isEmptySpace || aE.hq && !aE.l7 && !aE.hb &&
			fZ !== aE.fC || aI.nj(fZ, 800, !1, 0)), !0
	}, this.a3k = function(fZ, fb, deltaY) {
		var aD2;
		return !(aCW || aE.nr || (aD2 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a18(fZ, fb)) || (fZ = (fZ = aAq(-1, aCx(fb), aCD)) === aCD || bM.a4K() ? -1 : fZ, 0 < deltaY ? position < aE.fP - aCD && (position += Math.min(aE.fP - aCD -
			position, aD2), aCU = fZ, aCe(), bi.ds = !0) : 0 < position && (position -= Math.min(position, aD2), aCU = fZ, aCe(), bi.ds = !0), 0))
	}, this.wl = function() {
		wm.drawImage(aCE, bf.gap, bf.gap)
	}
}

function cR() {
	var canvas, on, fZ, fb, aBl, aD3, gap, aD4, fontSize, aD5, aD6, aD7, aD8, aD9, aDA, aDB, aDC, aDD;

	function aDH() {
		on.clearRect(0, 0, aX.j, aX.k), on.fillStyle = bE.pE, on.fillRect(0, 0, aX.j, aX.k), on.fillStyle = bE.pb, f6 = 0 < aDB ? aDB : aD8[4] / 1e4, on.fillRect(0, aX.k - aBl - 1, Math.floor(f6 * aX.j), aBl), on.fillStyle = bE.pH, on.fillRect(0, 0,
			aX.j, 1), on.fillRect(0, 0, 1, aX.k), on.fillRect(aX.j - 1, 0, 1, aX.k), on.fillRect(0, aX.k - 1, aX.j, 1), on.fillRect(0, aX.k - aBl - 1, aX.j, 1);
		for (var f6, aDJ, ea = 0, aC = 0; aC < aD7.length; aC++) aD9[aC] ? (bD.sD.textAlign(on, 0), aDJ = Math.floor((aD3 - aBl + 2 * aD4) * (aC - ea + 1) / (aD7.length + 1) - .7 * aD4), on.fillText(aD7[aC], gap, aDJ), bD.sD.textAlign(on, 2), 5 ===
			aC && 0 !== ah.nN[aE.fC] && ah.hU[aE.fC] >= af.kT(aE.fC) ? (on.fillStyle = bE.qD, on.fillText(aDF(aC), aX.j - gap, aDJ), on.fillStyle = bE.pH) : on.fillText(aDF(aC), aX.j - gap, aDJ)) : ea++
	}

	function aDF(aC) {
		return aC < 3 ? aD8[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tB.a6D(aD8[aC] / 100, 2) : aC < 7 ? bD.tB.a1S(aD8[aC]) : aC === 7 ? aX.aDK(aD8[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hG, aE.fC) : __fx.utils.getDensity(aE.fC)
	}

	function aDE() {
		ah.hG[aE.fC] !== aD8[6] && (aD8[6] = ah.hG[aE.fC], aD5++)
	}
	this.dk = function() {
		aDB = aDC = 0, (aD6 = new Array(8))[0] = L(118), aD6[1] = aE.l7 ? L(119) : L(120), aD6[2] = L(121), aD6[3] = L(122), aD6[4] = L(123), aD6[5] = L(124, 0, "Interest"), aD6[6] = L(125), aD6[7] = L(126),
			aD6.push("Max Troops", "Density"), // add aD6
			(aD7 = new Array(aD6.length)).fill(""), (aD8 = new Array(aD6.length))[0] = aE.l7 ? 0 : aE.kn, aD8[1] = aE.l7 ? am.lJ : aE.l9, aD8[2] = aE.a2D, aD8[3] = 0, aD8[4] = bO.ft(1e4 * ah.hG[0], Math.max(aE.kX, 1)), aD8[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.ft(700 * aE.data.iIncomeValue, 64) : bO.ft(700 * aE.data.iIncomeData[aE.fC], 64), aD8[6] = 0, aDE(), aD8[7] = 0, aDA = aDF(6), (aD9 = new Array(aD6.length)).fill(!0), aDD = 0, aDD =
			aE.l7 ? (aD9[0] = !1, aD9[2] = !1, aD9[3] = !1, 3) : (aD9[3] = !1, 1), aD5 = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ib() ? .1646 : .126) * 1.25 * i.ic), this.k = Math.floor(1.18 * this.j), aBl = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aD4 = .04 * this.j, aD3 = this.k, this.k -= Math.floor(aDD * (this.k -
			2 * aBl) / aD6.length), fontSize = Math.floor(.7 * (aD3 - aBl) / aD6.length);
		var a7p = bD.sD.u1(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a7p, j) {
				for (var aC = 0; aC < aD7.length; aC++) aD7[aC] = bD.on.a5E(aD6[aC], a7p, j)
			}((on = canvas.getContext("2d", {
				alpha: !0
			})).font = a7p, .575 * this.j), bD.sD.textBaseline(on, 1), on.lineWidth = 1, this.a6S(), this.aAT(), aV.aAT(), aDH()
	}, this.aAT = function() {
		fZ = i.j - this.j - bf.gap
	}, this.aDI = function() {
		fb = bf.gap
	}, this.a6S = function() {
		fb = bf.gap + (aV.a9p() && 0 !== ah.nN[aE.fC] && !aE.hq ? aV.k + bf.gap : 0)
	}, this.n9 = function(by) {
		(by || 100 <= aD5) && (aD5 = 0, aDH())
	}, this.a7B = function() {
		return aD8[7]
	}, this.aDK = function(value) {
		var li = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * li) / 1e3);
		return value < 10 ? li + ":0" + value : li + ":" + value
	}, this.ee = function() {
		var aDV, per;
		aD9[0] && aE.a2E - aE.a2D !== aD8[0] && (aD8[0] = aE.a2E - aE.a2D, aD5++), am.lJ - aD8[0] !== aD8[1] && (aD8[1] = am.lJ - aD8[0], aD5++), this.n0(), (aDV = af.aDW(aE.fC)) !== aD8[5] && (aD8[5] = aDV, aD5++), aDE(), aD8[7] += bi.aDX, aDV =
			aDF(7), aDA !== aDV && (aDA = aDV, aD5 += 100), aDV = aE.iM ? bk.lK() : ah.hG[mO[0]], per = bO.ft(1e4 * aDV, Math.max(aE.kX, 1)), aD8[3] = aDV, aD8[4] !== per && (aD5++, aD8[4] = per), 8 === aE.l5 && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.go.he(aC)) return bU.a1n.a2A(), 1;
				return
			}() || aD8[3] < aE.kX || ! function() {
				for (var aC = am.lJ - 1; 0 <= aC; aC--)
					if (0 < ah.gu[am.lO[aC]].length) return;
				return 1
			}() || bQ.lc.aDU().length || aE.iM && bk.lK(1) < aE.kX || bU.a1n.a2A()
	}, this.n0 = function() {
		aD9[2] && aE.a2D !== aD8[2] && (aD8[2] = aE.a2D, aD5 += 2 === aE.a2B ? 100 : 1)
	}, this.aDR = function() {
		return aD8[3] === aE.kX
	}, this.aDY = function(aC) {
		var uq, aDZ, ea;
		return 2 !== aE.a2B && (aC % 2 == 1 && (aW.n9(1, 1), bi.ds = !0), aC === aE.a6b ? (aDB = 0, aDH(), !1) : (-1 !== aC || 0 !== aDC) && (aDZ = aDB, aDB = aE.hb ? aC / aE.a6b : (ea = performance.now(), 0 <= aC && (uq = ea - 392 * aC, aDC =
			0 === aC || uq < aDC ? uq : aDC), 1 < (aDB = (ea - aDC) / (392 * aE.a6b)) ? 1 : aDB), aDH(), aDB !== aDZ))
	}, this.wl = function() {
		wm.drawImage(canvas, fZ, fb)
	}
}

function cS() {
	var iE, aDa, j, k, aAZ, aDb, aDc, a9q, canvas, na, aDd;

	function a0H() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dk = function() {
		aDd = iE = !1, aAZ = .61, aDb = .07, aDc = .09, na = a9q = k = 0
	}, this.resize = function() {
		var on, no, ej, aDi, aDj, a7u;
		iE && (j = aDe(j = a1.a2.ib() ? Math.floor(.69 * i.ic) : Math.floor(.5 * i.ic), a8Q(i.j - 2 * bf.gap, 10)), j = aDe(j, Math.floor(3.57 * a8Q(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, on = canvas.getContext("2d", {
				alpha: !0
			}), no = Math.floor(1 + k / 40), on.clearRect(0, 0, j, k), on.fillStyle = bE.pE, on.fillRect(no, no, j - 2 * no, k - 2 * no), on.lineJoin = "bevel", on.lineWidth = 2 * no, on.strokeStyle = bE.pH, on.strokeRect(no, no, j - 2 * no,
				k - 2 * no), on.imageSmoothingEnabled = !1, ej = ac.get(aDa), aDi = ej.width, a7u = (1 === aDa ? .85 : 21 === aDa ? .666 : .9) * aAZ * k / (aDj = ej.height), on.setTransform(a7u, 0, 0, a7u, Math.floor((j - a7u * aDi) / 2),
				Math.floor((k - a7u * aDj) / 2)), on.drawImage(ej, 0, 0), on.setTransform(1, 0, 0, 1, Math.floor(j - aDc * k - aDb * k - no), Math.floor(no + aDb * k)),
			function(on, fS) {
				on.lineWidth = Math.floor(1 + k / 80), on.strokeStyle = bE.pH, on.beginPath(), on.moveTo(0, 0), on.lineTo(fS, fS), on.moveTo(0, fS), on.lineTo(fS, 0), on.stroke()
			}(on, Math.floor(aDc * k)), on.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fu, aDg, aAL, aDh) {
		iE || aDh && aDd || (aDa = aAL ? 21 : fu ? 1 : 2, iE = aDd = !0, this.resize(), aM.tS(), aS.aAG(), na = bi.eZ, a9q = aDg ? 1 : 0)
	}, this.ee = function() {
		!iE || 1 <= a9q || (a9q = 1 < (a9q += 5e-4 * (bi.eZ - na)) ? 1 : a9q, na = bi.eZ, bi.ds = !0)
	}, this.hf = function(fZ, fb) {
		return !(!iE || a9q <= 0 || (fZ -= Math.floor((i.j - j) / 2), fb -= a0H(), fZ < 0) || fb < 0 || j < fZ || k < fb || (j - k / 3 < fZ && fb < k / 3 && (iE = !1, bi.ds = !0), 0))
	}, this.wl = function() {
		!iE || a9q <= 0 || (wm.globalAlpha = a9q, wm.drawImage(canvas, Math.floor((i.j - j) / 2), a0H()), wm.globalAlpha = 1)
	}
}

function dT() {
	var aDl, aDm = new Uint8Array(5),
		aDn = new Uint8Array(5);
	this.aDo = new aDp, this.dk = function() {
		for (var fu = bm.buffer.data[119].value, aC = 0; aC < aDm.length; aC++) aDm[aC] = (fu >> 2 * aC) % 4
	}, this.a6n = function() {
		aDl = [L(127), "", L(128, [ba.aDq[28]]), L(129, [ba.aDq[26]]), L(130, [ba.aDq[0]])], this.aDo.dk()
	}, this.ee = function() {
		this.aDo.ee()
	}, this.a7Y = function(id) {
		1 < id && bM.sf() || ! function(eI) {
			if (3 === aDm[eI] || 1 === aDn[eI]) return;
			if (aDn[eI] = 1, !(Math.random() < .6)) {
				aDm[eI]++;
				for (var fu = 0, aC = 0; aC < aDm.length; aC++) fu += aDm[aC] << 2 * aC;
				bm.qh.qi(119, fu)
			}
			return 1
		}(id) || aO.a8V(aDl[id])
	}
}

function aDp() {
	var aDs;
	this.dk = function() {
		aDs = !1
	}, this.ee = function() {
		var h0;
		if (function() {
				if (!aDs) {
					if (bi.kk() % 30 != 9) return;
					if (!bD.go.mK(90)) return;
					aDs = !0
				}
				return 1
			}() && (! function() {
				var s5 = aO.a8q(956);
				if (s5) {
					if (bD.go.ll(s5.player)) return 1;
					aO.a8p(956, 0)
				}
				return
			}() && (-1 === (h0 = (aE.iM ? function() {
				var id = bk.lM(),
					fS = am.lJ;
				if (bj.lA[id])
					for (var a1z = am.lO, fQ = bj.fQ, aC = 0; aC < fS; aC++) {
						var h0 = a1z[aC];
						if (fQ[h0] !== id) return h0
					} else if (1 < fS) return mO[fS - 1];
				return -1
			} : function() {
				for (var aE0 = am.lJ, lh = am.lO, aE1 = kY, aC = 0; aC < aE0; aC++) {
					var h0 = lh[aC];
					if (0 !== aE1[h0]) return h0
				}
				return -1
			})()) ? ! function() {
				var s5 = aO.a8q(957);
				if (s5 && s5.a8M) {
					if (ad.fJ(s5.a8M.fE << 2)) return 1;
					aO.a8p(957, 0)
				}
				return
			}() : (aO.a0d(0, L(131, [ah.a0e[h0]]), 956, h0, bE.pH, bE.pE, -1, !0), 0)))) {
			var fS = ap.jR.lx;
			if (0 !== fS)
				for (var buffer = ap.jR.buffer, aC = 0; aC < fS; aC++) {
					var fE = buffer[aC];
					if (ad.fJ(fE << 2)) return void aO.a0d(0, L(132, [bP.fa(fE), bP.fc(fE)]), 957, 0, bE.pH, bE.pE, -1, !0, void 0, {
						fl: 1,
						fE: fE
					})
				}
		}
	}
}

function dU() {
	this.aE2 = new aE3, this.dk = function() {
		this.aE2.resize()
	}
}

function aE3() {
	this.resize = function() {
		var aC, aE4 = document.head.querySelector("style#ss");
		if (aE4)
			for (aC = aE4.sheet.cssRules.length - 1; 0 <= aC; aC--) aE4.sheet.deleteRule(0);
		else(aE4 = document.createElement("style")).id = "ss", document.head.appendChild(aE4);
		var aAh = "::-webkit-scrollbar",
			aE5 = bD.sD.sM(bf.u3),
			iO = bD.sD.sM(Math.max(bD.sD.tU(.012), 8));
		try {
			aE4.sheet.insertRule(aAh + "{width:" + iO + ";height:" + iO + ";}", aE4.sheet.cssRules.length), aE4.sheet.insertRule(aAh + "-thumb{background-color:white;}", aE4.sheet.cssRules.length), aE4.sheet.insertRule(aAh +
				"-track{background:" + bE.pD + ";}", aE4.sheet.cssRules.length), aE4.sheet.insertRule(aAh + "-track:horizontal{border-top:" + aE5 + " solid white;}", aE4.sheet.cssRules.length), aE4.sheet.insertRule(aAh +
				"-track:vertical{border-left:" + aE5 + " solid white;}", aE4.sheet.cssRules.length), aE4.sheet.insertRule(aAh + "-button{display:none;}", aE4.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aE4.sheet.cssRules.length - 1; 0 <= aC; aC--) aE4.sheet.deleteRule(0)
		}
	}
}

function dS() {
	this.aE6 = !1, this.oE = !1, this.a6W = !1, this.aE7 = [0, 0, 0, 0], this.render = function() {
		var no, np, o1, o2;
		this.a6W = this.a6W || this.oE, (this.oE || this.aE6 && this.a6W) && (no = bd.aE8[0], np = bd.aE8[1], o1 = bd.aE8[2], o2 = bd.aE8[3], no = no < this.aE7[0] ? this.aE7[0] : no, np = np < this.aE7[1] ? this.aE7[1] : np, o1 = o1 > this.aE7[
				2] ? this.aE7[2] : o1, o2 = o2 > this.aE7[3] ? this.aE7[3] : o2, this.oE = !1, this.aE6 = !1, no === this.aE7[0] && np === this.aE7[1] && o1 === this.aE7[2] && o2 === this.aE7[3] ? this.a6X() : no <= o1 && np <= o2 && a6p
			.putImageData(a6q, 0, 0, no, np, o1 - no + 1, o2 - np + 1))
	}, this.a6X = function() {
		this.a6W && this.aE7[2] >= this.aE7[0] && this.aE7[3] >= this.aE7[1] && a6p.putImageData(a6q, 0, 0, this.aE7[0], this.aE7[1], this.aE7[2] - this.aE7[0] + 1, this.aE7[3] - this.aE7[1] + 1), this.a6W = !1
	}, this.a2N = function() {
		this.aE7[2] >= this.aE7[0] && this.aE7[3] >= this.aE7[1] && a6p.putImageData(a6q, 0, 0, this.aE7[0], this.aE7[1], this.aE7[2] - this.aE7[0] + 1, this.aE7[3] - this.aE7[1] + 1), this.a6W = !1
	}, this.dk = function() {
		var fZ, fb;
		this.aE6 = !1, this.oE = !1, this.a6W = !1, this.aE7[0] = bV.fd, this.aE7[1] = bV.fe, this.aE7[2] = this.aE7[3] = 0;
		loop: for (fZ = 1; fZ < bV.fd - 1; fZ++)
			for (fb = bV.fe - 2; 1 < fb; fb--)
				if (1 === aE9[ad.zo(fZ, fb) + 2]) {
					this.aE7[0] = fZ;
					break loop
				} loop: for (fb = 1; fb < bV.fe - 1; fb++)
			for (fZ = bV.fd - 2; 1 < fZ; fZ--)
				if (1 === aE9[ad.zo(fZ, fb) + 2]) {
					this.aE7[1] = fb;
					break loop
				} loop: for (fZ = bV.fd - 2; 0 < fZ; fZ--)
			for (fb = bV.fe - 2; 1 < fb; fb--)
				if (1 === aE9[ad.zo(fZ, fb) + 2]) {
					this.aE7[2] = fZ;
					break loop
				} loop: for (fb = bV.fe - 2; 0 < fb; fb--)
			for (fZ = bV.fd - 2; 1 < fZ; fZ--)
				if (1 === aE9[ad.zo(fZ, fb) + 2]) {
					this.aE7[3] = fb;
					break loop
				}
	}
}

function L(value, aEA, xJ, aEB) {
	var ru = "number" == typeof value ? bA.aEC[value] : value;
	if (xJ && bA.aED() && (ru = xJ), !aEA) return aEB ? ru.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : ru;
	for (var fS = aEA.length, aC = 0; aC < fS; aC++)
		for (var fl = 0; fl < 3; fl++) ru = ru.replace("{" + (10 * fl + aC) + "}", aEA[aC]);
	return ru
}

function c6() {
	this.data = new aEE;
	var aEF = (new aEG).L84,
		aEI = (this.aEC = aEF, !(this.aEH = "en"));
	this.dk = function() {
		var ru, h;
		aEI = !1, ("en" === (ru = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aEC = aEF, bA.aEH = ru, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (ru = bm.buffer.data[146].value,
			(h = bm.sU.xV(ru, !1)).length === ru) && !!bD.sL.a4p(h) && function(h) {
			for (var fS = h.length, k = 0; k < fS; k++) h[k] = h[k].replace("&#39;", "'");
			var aEO = bm.sU.xV(fS, !0);
			if (fS !== aEO.length) return !1;
			if (!bD.sL.a4p(aEO)) return !1;
			for (var li = aEF.length, aBc = new Array(li), aEP = li === fS, gv = Math.min(fS, li), aC = 0; aC < li; aC++)
				if (aBc[aC] = aEF[aC], aC < fS && aEO[aC] === aBc[aC]) aBc[aC] = h[aC];
				else {
					aEP = !1;
					for (var fm = 0; fm < gv; fm++)
						if (aEO[fm] === aBc[aC]) {
							aBc[aC] = h[fm];
							break
						}
				} return bA.aEC = aBc, bA.aEH = bm.buffer.data[12].value, aEP
		}(h)) || (aEI = !0)
	}, this.dm = function() {
		bj.dl(), aF.dl(), bh.dl(), bg.dl(), aP.dk(), br = new e8
	}, this.aED = function() {
		return this.aEC === aEF || !aEF.length
	}, this.aEQ = function() {
		var aER;
		return !!aEI && (aEI = !1, 0 !== aEF.length) && (aER = bm.buffer.data[12].value, b1.eg.aES(0, aER.slice(0, 20)), !0)
	}, this.aET = function(h) {
		h.length !== aEF.length ? 8 === u.uT && u.a3O().aEU(30, 0, 1) : (this.aEC = h, this.aEH = bm.buffer.data[12].value, bm.qh.qi(145, this.aEH), bm.qh.qi(146, h.length), bm.sU.xb(h, !1), bm.sU.xb(aEF, !0), 8 === u.uT ? u.a3O().aEU(30) : 0 ===
			ab.a3K() && 5 === u.uT && u.z.aEV())
	}, this.aEW = function() {
		var xe, h = navigator.languages;
		return h && h.length ? (xe = Math.max(bA.data.aEX(h[0]), 0), 1 === h.length ? [xe, xe] : [xe, Math.max(bA.data.aEX(h[1]), 0)]) : [0, 0]
	}
}

function aEE() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aEY = function() {
		for (var aEZ = [], h = this.h, fS = h.length, aC = 0; aC < fS; aC++) aEZ.push(h[aC]);
		var aEa = bm.buffer.data[12].xJ;
		for (aC = 0; aC < fS; aC++)
			if (aEZ[aC] === aEa) {
				aEZ.splice(aC, 1), fS--;
				break
			} aEZ.sort(), fS++, aEZ.unshift(aEa);
		try {
			if ("undefined" == typeof Intl) return aEZ;
			for (aC = 0; aC < fS; aC++) {
				var ru = new Intl.DisplayNames([aEZ[aC]], {
					type: "language"
				}).of(aEZ[aC]);
				ru !== aEZ[aC] && (aEZ[aC] = aEZ[aC] + ": " + ru)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aEZ
	}, this.aEc = function(aEd) {
		for (var ru = bm.buffer.data[12].value, fS = aEd.length, aC = 0; aC < fS; aC++)
			if (ru === aEd[aC].split(":")[0]) return aC;
		return 0
	}, this.aEX = function(aEe) {
		if (aEe && !(aEe.length < 2)) {
			aEe = aEe.split("-")[0].toLowerCase();
			for (var h = this.h, fS = h.length, aC = 0; aC < fS; aC++)
				if (aEe === h[aC]) return aC
		}
		return -1
	}
}

function aEG() {
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
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified",
		"🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}",
		"Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:",
		"Once you have joined, connect your account:", "If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count",
		"Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!",
		"National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "My Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "Zombie Players",
		"🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players",
		"Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted",
		"Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Game", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}",
		"Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links",
		"Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings",
		"🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High",
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection",
		"Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version",
		"🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!"
	]
}

function dq() {
	var fZ, fb, k, vP, aEf, aEg, aEh, aEi, aEj, j, a5S, aEk;
	this.iE = !1, this.dk = function(ru, aEl) {
		if (1 === a1.id && 13 <= a1.e3 && a1.e3 < 18) return aEl ? void(a5S = ru) : a5S !== ru ? void 0 : void a1.xT.saveString(200, ru);
		aEl && (a5S = ru, (aEk = document.createElement("a")).appendChild(document.createTextNode(a5S)), this.iE = !0, aEk.title = a5S, aEk.target = "_blank", aEk.href = a5S, aEk.style.textAlign = "center", aEk.style.color = bE.pH, aEk.style
			.position = "absolute", aEk.style.padding = "0px", aEk.style.margin = "0px", this.resize(), document.body.appendChild(aEk), bi.ds = !0)
	}, this.tS = function() {
		return !(!this.iE || (u.removeChild(document.body, aEk), this.iE = !1))
	}, this.hf = function(il, im) {
		return !!this.iE && ((il < fZ || im < fb || fZ + j < il || fb + k < im || fZ + j - vP < il && im < fb + vP) && (bi.ds = !0, this.iE = !1, u.removeChild(document.body, aEk)), !0)
	}, this.resize = function() {
		var a7p, aEm;
		this.iE && (aEi = Math.floor(.8 * (a1.a2.ib() ? i.j > i.k ? .6 : .55 : .4) * i.ic), vP = Math.floor(.15 * aEi), aEf = Math.floor(.35 * vP), aEg = Math.floor(.5 * vP), aEh = Math.floor(2.5 * aEg), k = vP + aEf + 3 * aEg, a7p = bD.sD.u1(1,
			aEf / i.l), aEj = Math.floor(i.l * aR.measureText(a5S, a7p)), aEm = j = (aEi < aEj ? aEj : aEi) + 2 * aEh, j = Math.min(j, i.j - 2 * (a1.a2.ib() ? 2 : 1) * bf.gap), a7p = bD.sD.u1(1, j / aEm * aEf / i.l), aEj = Math.floor(i
			.l * aR.measureText(a5S, a7p)), fZ = Math.floor((i.j - j) / 2), fb = Math.floor((i.k - k) / 2), aEk.style.font = a7p, aEk.style.top = Math.floor((fb + 1.4 * aEg + vP) / i.l) + "px", aEk.style.left = Math.floor((fZ + (j -
			aEj) / 2) / i.l) + "px")
	}, this.wl = function() {
		this.iE && (wm.fillStyle = bE.pE, wm.fillRect(fZ, fb + vP, j, k - vP), wm.fillStyle = bE.qQ, wm.fillRect(fZ, fb, j, vP), wm.fillStyle = bE.pH, wm.lineWidth = bf.a19, wm.strokeStyle = bE.pH, wm.strokeRect(fZ, fb, j, k), wm.fillRect(fZ,
			fb + vP, j, bf.a19), wm.font = bD.sD.u1(1, .48 * vP), bD.sD.textAlign(wm, 1), bD.sD.textBaseline(wm, 1), wm.fillText(L(133), Math.floor(fZ + (j - .5 * vP) / 2), Math.floor(fb + .55 * vP)), aN.a81(Math.floor(fZ + j - .8 * vP),
			Math.floor(fb + .25 * vP), Math.floor(.5 * vP)), wm.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dp() {
	var gap, aD6, fZ = [0, 0, 0, 0, 0],
		fb = [0, 0, 0, 0, 0],
		o0 = [1, 1, 1, 1, 1],
		fu = [!0, !0, !0, !1, !1],
		ej = (this.gF = [!0, !0, !0, !1, !1], null);
	this.aEn = function(a50, aEo) {
		ej = a50, fu = aEo, aD6 = [bN.aEp, bN.a3G, bN.aEq, bN.aEq, bN.aEr], this.dk()
	}, this.dk = function() {
		if (ac.uu()) {
			var aC, uZ = Math.floor((a1.a2.ib() ? .261 : .195) * i.ic),
				ua = Math.floor(.9 * uZ),
				aAZ = Math.floor(.17 * ua);
			if (gap = a1.a2.ib() ? 2 * bf.gap : bf.gap, o0[0] = uZ / ej[0].width, o0[1] = ua / ej[1].width, o0[2] = aAZ / ej[2].height, o0[3] = aAZ / ej[3].height, o0[4] = aAZ / ej[4].height, o0[2] *= 1.7, o0[3] *= 1.07, fZ[0] = gap, fZ[1] = gap,
				fZ[2] = gap, fZ[3] = gap, fZ[4] = Math.floor(2 * gap + o0[3] * ej[3].width), fb[0] = gap, fb[1] = fb[0] + gap + o0[0] * ej[0].height, fb[2] = fb[1] + gap + o0[1] * ej[1].height, fb[3] = fb[2] + gap + o0[2] * ej[2].height, fb[4] =
				fb[3], !fu[0])
				for (aC = 0; aC < 5; aC++) fb[aC] -= o0[0] * ej[0].height + gap;
			if (!fu[1])
				for (aC = 2; aC < 5; aC++) fb[aC] -= o0[1] * ej[1].height + gap
		}
	}, this.iE = function() {
		return !(7 === ab.a3K() && a1.a2.ib())
	}, this.hf = function(il, im) {
		if (ej && this.iE())
			for (var aC = fu.length - 1; 0 <= aC; aC--)
				if (fu[aC] && this.gF[aC] && fZ[aC] < il && fb[aC] < im && il < fZ[aC] + o0[aC] * ej[aC].width && im < fb[aC] + o0[aC] * ej[aC].height) return u.v(9, u.uT, new aEs(L(134), bD.sD.a5R(aD6[aC]))), !0;
		return !1
	}, this.wl = function() {
		if (ej && this.iE()) {
			var aC;
			for (wm.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) fu[aC] && this.gF[aC] && (wm.setTransform(o0[aC], 0, 0, o0[aC], fZ[aC], fb[aC]), wm.drawImage(ej[aC], 0, 0));
			wm.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dd() {
	this.aEt = 0, this.aEu = null, this.va = null, this.lc = null, this.z = null, this.vx = null, this.vX = null, this.message = null, this.aEv = null, this.tR = null, this.aEw = null, this.aEx = new aEy, this.ez = 0, this.aBT = 0, this.dk =
		function() {
			this.aBT = bi.eZ, this.aEt = bJ.uV.yQ(bm.buffer.data[105].value, 5), this.va = new aEz, this.lc = new aF0, this.z = new aF1, this.vx = new aF2, this.vX = new aF3, this.message = new aF4, this.aEv = new aF5, this.tR = new aF6, this.aEw =
				new aF7, this.z.dk(), bs.dk(), this.ez = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.ex()
		}, this.vr = function() {
			this.tR && this.tR.vr(), this.aEu = null, this.va = null, this.lc = null, this.z = null, this.vx = null, this.vX = null, this.message = null, this.aEv = null, this.tR = null, this.aEw = null, this.ez = 0, bs.vr(), a1.a2.setState(0)
		}
}

function aEz() {
	function aFU(h, um, un) {
		var aFV = h[um];
		h[um] = h[un], h[un] = aFV
	}
	this.vb = [
		[],
		[],
		[],
		[]
	], this.vc = [0, 0, 0, 0], this.aF8 = [], this.aF9 = function(aFA, uR, username, vh, a5t, aFB, elo, color, xy, aFC) {
		username = this.aFE(uR, username, vh, a5t, aFB, elo, color, xy, aFC);
		this.vb[aFA].push(username), bq.aEt === uR && (bq.aEu = username), bq.aEw.aFF(uR) && (username.vj = 1), bq.z.aFG += 29 === u.uT && bq.z.tF[0] === aFA && 1 === bq.z.tF[2]
	}, this.aFE = function(uR, username, vh, a5t, aFB, elo, color, xy, aFC) {
		return {
			uR: uR,
			username: __fx.nameFilter.filter(username),
			vh: vh,
			a5t: a5t,
			aFB: aFB,
			elo: elo,
			color: color,
			xy: xy,
			aFC: aFC
		}
	}, this.aFH = function(eI, aFA, vh, a5t, aFB, elo, xy, color) {
		eI = this.vb[aFA][eI];
		eI.vh = vh, eI.a5t = a5t, eI.aFB = aFB, eI.elo = elo, eI.xy = xy, eI.color = color, bq.z.aFG += 29 === u.uT && bq.z.tF[0] === aFA && 1 === bq.z.tF[2]
	}, this.aFI = function(eI, aFA, aFJ) {
		var eI = this.vb[aFA][eI],
			aFK = eI.username,
			aFL = "Redacted " + bI.uV.a1S(eI.uR, 2);
		eI.username = aFJ ? "[" + bD.tB.a2u(aFK) + "] " + aFL : aFL, aFK.indexOf("Redacted") < 0 && (eI.aFM = aFK), bq.tR.aFN(eI.uR), bq.z.aFG += 29 === u.uT && bq.z.tF[0] === aFA && 1 === bq.z.tF[2]
	}, this.aFO = function(eI, aFP, aFQ) {
		var player = this.vb[aFP][eI];
		this.aFR(eI, aFP), this.vb[aFQ].push(player), bq.z.aFG += 29 === u.uT && bq.z.tF[0] === aFQ && 1 === bq.z.tF[2]
	}, this.aFR = function(eI, aFP) {
		var va = this.vb[aFP];
		this.aF8.push(va[eI]), 1e3 < this.aF8.length && this.aF8.shift(), eI >= this.vc[aFP] ? va[eI] = va[va.length - 1] : (this.vc[aFP]--, 2 === aFP ? (va.splice(this.vc[aFP] + 1, 0, va[va.length - 1]), va.splice(eI, 1)) : (va[eI] = va[this.vc[
			aFP]], va[this.vc[aFP]] = va[va.length - 1])), va.pop(), bq.z.aFG += 29 === u.uT && bq.z.tF[0] === aFP && 1 === bq.z.tF[2]
	}, this.aFS = function(eI, tE) {
		bq.z.aFG += 29 === u.uT && bq.z.tF[0] === tE && 1 === bq.z.tF[2];
		var va = this.vb[tE],
			s5 = va[eI];
		if (2 === tE)
			if (eI >= this.vc[tE]) {
				bq.aEw.join(s5);
				for (var aFT = this.vc[tE], elo = s5.elo; aFT && elo > va[aFT - 1].elo;) aFT--;
				va[eI] = va[this.vc[tE]], va.splice(this.vc[tE]++, 1), va.splice(aFT, 0, s5)
			} else va.splice(this.vc[tE]--, 0, s5), va.splice(eI, 1);
		else eI >= this.vc[tE] ? (bq.aEw.join(s5), aFU(va, this.vc[tE]++, eI)) : aFU(va, --this.vc[tE], eI)
	}, this.aFW = function(uR) {
		for (var vb = this.vb, fS = vb.length, aC = 0; aC < fS; aC++)
			for (var va = vb[aC], li = va.length, fl = 0; fl < li; fl++)
				if (uR === va[fl].uR) return va[fl];
		return null
	}
}

function aF7() {
	var aFX = [],
		aFY = [],
		aFZ = 0;

	function aFa(h, a8s, aFe, aFf) {
		var fS = h.length;
		if (0 === fS) return "";
		var ru = "@" + h[0];
		if (1 === fS) return ru + a8s + aFf;
		for (var aC = 1; aC < fS - 1; aC++) ru += ", @" + h[aC];
		return ru + " and @" + h[fS - 1] + aFe + aFf
	}
	this.dk = function() {
		var ru = aFa(aFY, " is", " are", " in the lobby.");
		ru.length && bq.message.aFb({
			id: 7,
			s: ru
		}), aFX = [], aFY = [], aFZ = 0
	}, this.aFF = function(aFc) {
		return bq.aEt !== aFc && (aFc = bI.uV.a1S(aFc, 5), !!bm.x9.vj(aFc)) && (aFY.push(aFc), !0)
	}, this.join = function(player) {
		bq.aEt !== player.uR && (player = bI.uV.a1S(player.uR, 5), bm.x9.vj(player)) && aFX.push(player)
	}, this.aFd = function() {
		var a8s, aFe;
		++aFZ < 3 || (aFZ = 0, a8s = aFa(aFY, "", "", " entered the lobby!"), (a8s = (aFe = aFa(aFX, "", "", " joined a game!")).length ? a8s.length ? a8s + " " + aFe : aFe : a8s).length && bq.message.aFb({
			id: 7,
			s: a8s
		}), aFX = [], aFY = [])
	}
}

function aEy() {
	this.dt = function(eI) {
		if ((vc = bq.va.vc[eI]) < 2) return !1;
		var tG = bq.z.tH[eI],
			aFg = 9 === tG.aFh ? 333 : 512,
			vc = Math.min(vc, aFg);
		8 === tG.aFh && (vc -= vc % 2);
		aFg = bq.va.vb[eI].splice(0, vc), bq.va.vc[eI] -= vc, vc = function(aFi) {
			if (bq.aEu)
				for (var fS = aFi.length, uR = bq.aEu.uR, aC = 0; aC < fS; aC++)
					if (aFi[aC].uR === uR) return aC;
			return -1
		}(aFg);
		return -1 === vc ? (bq.va.aF8 = bq.va.aF8.concat(aFg), 1e3 < bq.va.aF8.length && bq.va.aF8.splice(0, bq.va.aF8.length - 1e3), bq.z.aFG += 29 === u.uT && bq.z.tF[0] === eI && 1 === bq.z.tF[2], !1) : (8 === tG.aFh && (tG.aFl = (tG.aFl + (
			vc >> 1)) % 1024, eI = vc - vc % 2, vc %= 2, aFg = aFg.slice(eI, 2 + eI)), ay.dk(tG, aFg, vc), !0)
	}, this.aFm = function(tG, aFi, aFj) {
		var fV = aE.data = new a6c,
			aFq = (fV.spawningSeed = tG.spawningSeed, tG.aFh < 7 ? (fV.gameMode = 1, fV.numberTeams = tG.aFh + 2) : 9 === tG.aFh ? (fV.gameMode = fV.isZombieMode = 1, fV.numberTeams = 2) : (fV.gameMode = 0, fV.battleRoyaleMode = 7 === tG.aFh ?
				0 : 10 === tG.aFh ? 1 : 2), fV.selectedPlayer = aFj, fV.isContest = tG.aFn, fV.mapType = bV.aFo(tG.f8) ? 0 : 1, bV.aFp(fV, tG.f8), fV.mapSeed = tG.mapSeed, fV.humanCount = aFi.length);
		fV.selectableSpawn = 1 === fV.gameMode || aFq < 100, fV.colorsData = new Uint32Array(aFq), fV.playerNamesData = new Array(aFq), fV.a70 = new Uint32Array(aFq);
		for (var aC = 0; aC < aFq; aC++) fV.colorsData[aC] = aFi[aC].color, fV.playerNamesData[aC] = aFi[aC].username, fV.a70[aC] = aFi[aC].uR;
		if (2 === fV.battleRoyaleMode)
			for (fV.elo = new Uint16Array(aFq), aC = 0; aC < aFq; aC++) fV.elo[aC] = aFi[aC].elo;
		bw.close(), bX.turnstile.close(), ab.setState(8), bV.a8(tG.f8, fV.mapSeed), aE.a6h(), aE.a6f = 2
	}
}

function aF0() {
	var e9 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aFr = [bE.pV, bE.pV, bE.pW, bE.pz, bE.q0, bE.pm, bE.q5, bE.pW, bE.qS, bE.qG, bE.qP, bE.p8],
		aFs = [
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
		aFt = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aG7(tI, uR, aG9) {
		for (var fm = tI.length - 1; 0 <= fm; fm--) {
			var s5 = tI[fm];
			0 === s5.id && s5.uR === uR && (s5.s = "[Redacted Message]", aG9) && (s5.aGA = 1)
		}
	}
	this.tN = function(aFu) {
		var aFv, a2v;
		return aFu.id < 5 && (aFv = "@" + bI.uV.a1S(aFu.uR, 5)), 0 === aFu.id ? aFv + ": " + aFu.s : 1 === aFu.id ? (a2v = "@" + bI.uV.a1S(aFu.target, 5), 0 === aFu.aFw ? 32768 <= aFu.value ? aFv + " voted with " + (aFu.value - 32768 + 1) +
				" gold against " + a2v + " to weaken the latter's admin position. 📉" : aFv + " voted with " + (aFu.value + 1) + " gold for " + a2v + " to strengthen the latter's admin position. 💪" : 1 === aFu.aFw ? aFv + " sent " + Math.floor(
					aFu.value / 100) + " 🧈 gold to " + a2v + "." : aFv + " voted with " + (aFu.value / 10).toFixed(1) + " points for " + a2v + " to acknowledge the latter as clan leader. ✅") : 2 === aFu.id ? 0 === aFu.aFw ? aFv +
			" was 🔇 muted for 1 Hour." : 1 === aFu.aFw ? "The username of " + aFv + " was ✂️ redacted. Duration: 1 Day" : aFv + " 👢 was kicked." : 3 === aFu.id ? aFv + br.eL(aFu.aFw, br.eF[aFu.aFw][aFu.value]) + "@" + bI.uV.a1S(aFu.target, 5) +
			br.eN(aFu.aFw, br.eF[aFu.aFw][aFu.value]) : 4 === aFu.id ? aFv + br.eL(5, br.eF[5][aFu.aFw]) + "@" + bI.uV.a1S(aFu.target, 5) + br.eN(5, br.eF[5][aFu.aFw]) : 5 === aFu.id ? aFt[aFu.aFw] : 6 === aFu.id ? "You are about to mention " +
			aFu.value + " player" + (1 === aFu.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aFu.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aFu.id ? aFu.s : void 0
	}, this.tM = function(aFu, aFx) {
		return {
			aFu: aFu,
			s: aFx,
			aFy: 0,
			fontSize: 1,
			tQ: 0,
			aFz: aFu.id ? bE.py : bE.pH
		}
	}, this.vf = function(player, tE) {
		return (2 === tE ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.vg = function(vh) {
		return aFr[vh]
	}, this.aG0 = function(vh, a5t) {
		return vh < 3 || 7 === vh ? aFs[vh][0] : 4 === vh ? aFs[vh][a5t < 1 ? 0 : a5t < 10 ? 1 : 2] : aFs[vh][a5t < 10 ? 0 : 1]
	}, this.aG1 = function(a5t) {
		return 0 === a5t
	}, this.aFW = function(tE, uR) {
		for (var vb = bq.va.vb, va = vb[tE], fS = va.length, aC = 0; aC < fS; aC++)
			if (uR === va[aC].uR) return va[aC];
		for (var fm = 0; fm < vb.length; fm++)
			if (tE !== fm)
				for (fS = (va = vb[fm]).length, aC = 0; aC < fS; aC++)
					if (uR === va[aC].uR) return va[aC];
		return null
	}, this.vi = function(s5) {
		return !!bq.aEu && s5.uR === bq.aEu.uR
	}, this.aG2 = function(va, aG3, aG4) {
		var a2s = [];
		loop: for (var aC = aG3; aC < aG4; aC++) {
			var a2t = bD.tB.a2u(va[aC].username);
			if (a2t) {
				for (var fm = a2s.length - 1; 0 <= fm; fm--)
					if (a2t === a2s[fm].name) {
						a2s[fm].gv++;
						continue loop
					} a2s.push({
					name: a2t,
					gv: 1
				})
			}
		}
		if (a2s.sort(function(fl, fm) {
				return fm.gv - fl.gv
			}), 0 === a2s.length) return "";
		for (var ru = a2s[0].name + ": " + a2s[0].gv, aC = 1; aC < a2s.length; aC++) ru += "   " + a2s[aC].name + ": " + a2s[aC].gv;
		return ru
	}, this.aG5 = function(vh, a5t, aFB) {
		return 0 === e9[vh].length ? "Rank: " + (a5t + 1) : e9[vh] + " Rank: " + (a5t + 1) + (3 !== vh && aFB < 100 ? "   " + e9[3] + " Rank: " + (aFB + 1) : "")
	}, this.aG6 = function(uR) {
		for (var tH = bq.z.tH, aC = 0; aC < tH.length; aC++) aG7(tH[aC].tI, uR);
		aG7(bq.message.aG8(), uR, 1), bq.tR.aG6(uR)
	}
}

function aF3() {
	var tt = 0,
		aGB = 0,
		aGC = 0,
		aGD = null,
		aGE = null;

	function aGH(s5, aGI, aGJ) {
		var ru = s5.username;
		return (ru += "   " + bq.lc.aG5(s5.vh, s5.a5t, s5.aFB)) + function(s5) {
			s5 = s5.xy;
			if (s5 < 1e3) return "   Gold: " + s5;
			if ((s5 %= 1024) < 1e3) return "   Gold: " + s5 + "k";
			return "   Gold: " + (s5 - 999) + "M"
		}(s5) + ("   IP: " + bI.uV.a1S(s5.aFC, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aGJ ? aGB : aGG(s5, aGI)])
	}

	function aGG(s5, aGI) {
		return aGB = aGI || bq.va.aFW(s5.uR) ? 1 : 0
	}
	this.vY = 0, this.aGF = function() {
		!tt || aGB === aGG(aGE) && aGC === aGE.xy || (aGC = aGE.xy, aGD.show(-1, -1, aGH(aGE, 0, 1), 1, 1, aGE.color))
	}, this.vk = function(e, s5, aGI) {
		var aAg = e.getBoundingClientRect();
		this.show(aAg.left, aAg.top, s5, 0, aGI), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.vX && bq.vX.tS(1)
		}), this.vY = aGI
	}, this.show = function(fZ, fb, s5, tx, aGI) {
		aGD = aGD || new tq, aGC = (aGE = s5).xy, aGD.show(fZ, fb, aGH(s5, aGI), tx, 0, aGE.color), tt = 1
	}, this.tS = function(u4) {
		this.vY = 0, aGD && aGD.tS(u4) && (tt = 0, aGE = null)
	}
}

function aF1() {
	function aGO() {
		u.a7C(29) && (bq.z.aFG && 1 === bq.z.tF[2] && u.a7C(29).aGR(), bq.z.aFG = 0, u.a7C(29).aGS(), u.a7C(29).aGT(), bq.vX.aGF())
	}
	this.tH = new Array(4), this.tF = [0, 0, 1, 0], this.aFG = 0, this.aGL = [0, 0], this.dk = function() {
		for (var aC = 0; aC < this.tH.length; aC++) this.tH[aC] = new aGM;
		this.tF[0] = bm.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.tH), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aFb({
				id: 7,
				s: text
			})
		})
	}, this.aGN = function() {
		aGO(), bq.aEw.dk(), __fx.lobbyReminders.check()
	}, this.aFd = function() {
		bq.aEw.aFd();
		for (var aC = 0; aC < bq.z.tH.length; aC++) {
			var tG = bq.z.tH[aC];
			0 === tG.vJ ? tG.aGU = 0 : (tG.aGV = Math.max(tG.aGV - tG.aGU % 2, 0), tG.aGU++)
		}
		aGO(), __fx.lobbyReminders.check()
	}, this.aGW = function(tE) {
		this.tF[0] !== tE || this.tF[2] || u.a7C(29).aGX()
	}
}

function aF5() {
	var aGY = 0,
		aGZ = "",
		aGa = 0,
		aGb = 0,
		aGc = 0;

	function aGe(aFx) {
		b1.aGp.aGq(3, aFx)
	}

	function aGn(gv) {
		aGY = 1, bq.message.aFb({
			id: 6,
			value: gv
		})
	}

	function aGh(s) {
		var aGt = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aGt)
	}
	this.a2F = function(s) {
		var aGd, h, aGj;
		if (aGY) return aGY = 0, "yes" === (aGd = s.toLowerCase()) || "y" === aGd ? void aGe(aGZ) : void bq.message.aFb({
			id: 5,
			aFw: 7
		});
		!(s.indexOf("@") < 0) && (aGd = aGh(s)) ? (aGZ = s, h = function(aGg) {
			for (var fS = aGg.length, aGr = [0, 0, 0, 0], aC = 0; aC < fS; aC++)
				for (var j = aGg[aC], fl = 0; fl < 4; fl++) j === "@room" + (fl + 1) && (aGr[fl] = 1);
			if ((aGb = bD.sL.a4e(aGr)) % 4 == 0) return bD.sL.a4w(bq.va.vb);
			for (fl = 0; fl < 4; fl++) aGr[fl] = aGr[fl] ? bq.va.vb[fl] : [];
			return bD.sL.a4w(aGr)
		}(aGd), function(aGg, aGj, s) {
			if (!aGa) return;
			for (var fS = aGj.length, aC = 0; aC < fS; aC++) 2 === aGj[aC].id && (s = s.replace(aGg[aGj[aC].eI], "@" + aGj[aC].fu));
			return aGY = 1, aGe((aGZ = s).slice(0, 126) + "|"), 1
		}(aGd, aGj = function(aGg) {
			for (var aGj = [], fS = (aGc = aGa = 0, aGg.length), aC = 0; aC < fS; aC++) {
				var j = aGg[aC],
					li = j.length;
				bD.tB.startsWith(j, "@[") ? li <= 9 && bD.tB.a5U(j, "]") && aGj.push({
					id: 0,
					fu: j.substring(2, li - 1).toUpperCase()
				}) : 6 === li ? bD.tB.startsWith(j, "@room") || (aGc++, aGj.push({
					id: 1,
					fu: bJ.uV.yQ(j.substring(1), 5)
				})) : 1 < li && li < 5 && 0 <= (li = bA.data.aEX(j.substring(1))) && (aGj.push({
					id: 2,
					fu: li,
					eI: aC
				}), aGa = 1)
			}
			return aGj
		}(aGd), s) || (0 === aGj.length ? aGb || function(aGg) {
			for (var fS = aGg.length, aC = 0; aC < fS; aC++) {
				var j = aGg[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aGd) ? aGn(h.length) : aGe(s) : aGd.length === aGc ? aGe(s) : (function(h, aGj) {
			var li = aGj.length;
			if (0 === li) return;
			var fS = h.length;
			loop: for (var aC = fS - 1; 0 <= aC; aC--) {
				for (var fl = 0; fl < li; fl++)
					if (0 === aGj[fl].id) {
						if (aGj[fl].fu === bD.tB.a2u(h[aC].username)) continue loop
					} else if (1 === aGj[fl].id && aGj[fl].fu === h[aC].uR) continue loop;
				h[aC] = h[--fS], h.pop()
			}
		}(h, aGj), aGn(h.length)))) : aGe(s)
	}, this.aGu = function(s) {
		var aGg = aGh(s);
		if (aGg)
			for (var a6 = new RegExp("^[0-9]+$"), fS = aGg.length, aC = 0; aC < fS; aC++) {
				var j = aGg[aC].substring(1),
					li = j.length;
				1 <= li && li <= 3 && a6.test(j) && (li = parseInt(j, 10), !isNaN(li)) && 0 <= li && li < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[li]))
			}
		return s
	}
}

function aF4() {
	var aGv, aGw = [],
		aGx = -1,
		aGy = 0,
		aGz = 0;

	function aH4() {
		aGy = bi.eZ, (3 === this.vo ? aH3 : (aGx = (aGw.length + aGx + 2 * this.vo - 1) % aGw.length, aH2))()
	}

	function aH2() {
		0 !== aGw.length && (aGz = 0, aGv && aGv.vr(), (aGv = new vl(aH4)).qi(aGx, aGw.length), aGv.show(aGw[aGx]), bq.message.resize())
	}

	function aH3() {
		aGz = 1, aGv && aGv.vr(), (aGv = new vs(aH2)).qi(aGw.length), aGv.show(), bq.message.resize()
	}
	this.aFb = function(aFu) {
		var s5;
		2 === aFu.id && 3 === aFu.aFw ? bq.lc.aG6(aFu.uR) : (s5 = bq.lc.tM(aFu, bq.lc.tN(aFu)), (5 !== aFu.id && 6 !== aFu.id || (u.a7C(29).aH0().tP(s5), 5 === aFu.id)) && (s5 = bi.eZ < aGy + 2e4, aGx !== aGw.length - 1 && s5 || (aGx = aGw
			.length), __fx.pingFilter.isMuted(aFu, "s") || (aGw.push(aFu), bm.buffer.data[14].value || 7 === aFu.id || bs.play(), aGv && (aGz && (bm.buffer.data[13].value || s5) ? aGv.qi(aGw.length) : aH2()))))
	}, this.show = function() {
		aH3()
	}, this.tS = function() {
		aGx = aGw.length - 1, aGv && aGv.vr(), aGv = null
	}, this.resize = function() {
		aGv && aGv.resize()
	}, this.aG8 = function() {
		return aGw
	}
}

function aF2() {
	var aH5 = null,
		aH6 = null,
		aH7 = 0,
		aH8 = 0,
		aH9 = null;

	function aHB() {
		0 !== aH6.vh && (bq.vx.tS(), u.v(8, 29, new uU(25, {
			action: 0,
			uR: bI.uV.a1S(aH6.uR, 5),
			uS: 0
		}, 29)))
	}

	function aHD() {
		return !bq.aEu || bq.lc.vi(aH6) ? 1 : 0
	}

	function aHC() {
		var fZ = aH5.fZ,
			fb = aH5.fb,
			aHM = (bq.vx.tS(), aHD());
		aH5 = new vt([new x(br.eF[5][0], function() {
			aHG(5, 0)
		}, aHM), new x(br.eF[5][1], function() {
			aHG(5, 1)
		}, aHM), new x(br.eF[5][2], function() {
			aHG(5, 2)
		}, aHM), new x(br.eF[5][3], function() {
			aHG(5, 3)
		}, aHM)]), aHF(fZ, fb), aH8 = aH7 = 2
	}

	function aHE() {
		29 === u.uT && u.a3O().aEv(bI.uV.a1S(aH6.uR, 5))
	}

	function aHG(id, value) {
		5 === id && b1.aHN.aHO({
			action: 3,
			uR: bI.uV.a1S(aH6.uR, 5),
			value: value
		})
	}

	function aHF(fZ, fb, vz) {
		aH5.show(fZ, fb, vz), bq.vX.show(aH5.fZ, aH5.fb, aH6, 1)
	}
	this.aHA = function(e, s5) {
		aH7 = 1, aH6 = s5, aH5 = new vt([new x(L(135), aHB, 0 === s5.vh ? 1 : 0), new x(L(136), aHC, aHD()), new x(L(137), aHE, 0)]), aHF((aH9 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aH9.clientY, 1)
	}, this.a4F = function(code) {
		if (29 !== u.uT) return !1;
		if (!aH6) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.tS();
			else if (bD.tB.startsWith(code, "Numpad") || bD.tB.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aH7) this.aHA(aH9, aH6);
				else {
					if (!aH5) return !1;
					1 === aH7 ? code <= 1 ? aHB() : 2 === code ? aHC() : (aHE(), this.tS()) : (aHG(aH8, bO.ia(code - 1, 0, br.eF[aH8].length - 1)), this.tS())
				}
		}
		return !0
	}, this.tS = function() {
		aH7 = 0, aH5 && aH5.tS(), aH5 = null, bq.vX.tS()
	}
}

function aGM() {
	this.vJ = 0, this.f8 = 0, this.mapSeed = 0, this.aFh = 0, this.aHR = 0, this.aHS = 0, this.aHT = 0, this.aFn = 0, this.aGV = 0, this.spawningSeed = 0, this.a3S = 0, this.aFl = 0, this.tI = [], this.tJ = 1048575, this.aGU = 0, this.aHU = [{
		f8: 0,
		mapSeed: 0,
		aFh: 0,
		eZ: 100,
		aFn: 0
	}, {
		f8: 1,
		mapSeed: 0,
		aFh: 1,
		eZ: 200,
		aFn: 0
	}, {
		f8: 2,
		mapSeed: 0,
		aFh: 2,
		eZ: 300,
		aFn: 0
	}, {
		f8: 3,
		mapSeed: 0,
		aFh: 3,
		eZ: 400,
		aFn: 0
	}, {
		f8: 0,
		mapSeed: 0,
		aFh: 9,
		eZ: 500,
		aFn: 0
	}, {
		f8: 1,
		mapSeed: 0,
		aFh: 10,
		eZ: 600,
		aFn: 0
	}, {
		f8: 2,
		mapSeed: 0,
		aFh: 8,
		eZ: 700,
		aFn: 0
	}, {
		f8: 3,
		mapSeed: 0,
		aFh: 3,
		eZ: 800,
		aFn: 0
	}]
}

function aF6() {
	var aHV = [],
		uf = [],
		aHW = [];

	function aHY(s5) {
		for (var s = s5.s, aHX = [];;) {
			var ej = function aHa(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var ru = s.substring(position + 1, position + 6);
				if (5 !== ru.length) return aHa(s, position + 1);
				if (bD.tB.startsWith(ru, "room")) return aHa(s, position + 1);
				var aHh = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aHh.test(ru)) return aHa(s, position + 1);
				aHh = s.substring(position + 6, position + 7);
				if (1 !== aHh.length) return position;
				ru = new RegExp("^[ :!.]+$");
				if (!ru.test(aHh)) return aHa(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ej) {
				aHX.push(aHb(s, s5));
				break
			}
			0 === ej ? aHX.push(aHc(s.substring(1, 6), s5, ej)) : (aHX.push(aHb(s.substring(0, ej), s5)), aHX.push(aHc(s.substring(ej + 1, ej + 6), s5, ej))), s = s.substring(ej + 6)
		}
		return aHX
	}

	function aHc(ru, s5, ej) {
		var aFD = function(ru) {
				var uR = bJ.uV.yQ(ru, 5),
					aFD = bq.va.aFW(uR);
				if (aFD) {
					for (aHV.push(aFD); 75 < aHV.length;) aHV.shift();
					return aFD
				}
				for (var aF8 = bq.va.aF8, aC = aF8.length - 1; 0 <= aC; aC--)
					if (aFD = aF8[aC], uR === aFD.uR) return aHV.push(aFD), aFD;
				for (aC = aHV.length - 1; 0 <= aC; aC--)
					if (aFD = aHV[aC], uR === aFD.uR) return aHV.push(aFD), aFD;
				return bq.va.aFE(uR, ru, 1, 999999, 999999, 0, 0, 0, 0)
			}(ru),
			ru = (0 === ej && 0 === s5.aFu.id && s5.tQ && (s5.fontSize = bq.lc.aG0(aFD.vh, aFD.a5t), s5.aFy = bq.lc.aG1(aFD.a5t)), document.createElement("span"));
		return ru.textContent = function(aFD, s5, ej) {
				if (aFD.aHf) return aFD.aHf--, ej = 2 === s5.aFu.id || (3 === s5.aFu.id || 4 === s5.aFu.id) && 0 !== ej, aFD.username + (ej ? " (" + aFD.aFM + ")" : "");
				if (s5.aFu.aGA) return "Redacted " + bI.uV.a1S(aFD.uR, 2);
				return aFD.username
			}(aFD, s5, ej), ru.style.display = "inline-block", ru.style.color = bq.lc.vg(aFD.vh), 11 === aFD.vh && (ru.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), ru.style.cursor =
			"pointer", ru.style.margin = "0", ru.style.font = "inherit", ru.style.minWidth = ru.style.minHeight = "1em", bq.lc.vi(aFD) && (ru.style.textDecoration = "underline"), aFD.vj && (ru.style.textDecorationLine = "underline", ru.style
				.textDecorationStyle = "dotted"), bq.lc.aG1(aFD.a5t) && (ru.style.fontWeight = "bold"), ru.onclick = function(e) {
				bq.vx.aHA(e, aFD)
			}, bM.sf() || (ru.onmouseover = function(e) {
				bq.vX.vk(e.target, aFD)
			}), uf.push(ru), ru
	}

	function aHb(s, s5) {
		var tA = document.createElement("span");
		return tA.textContent = s, tA.style.color = s5.aFz, tA.style.margin = "0", tA.style.font = "inherit", tA
	}

	function aHm(aFD, aFL, uR) {
		uR !== aFD.uR || aFD.aFM || (aFD.aFM = aFD.username, aFD.username = aFL)
	}
	this.vr = function() {
		for (var aC = 0; aC < uf.length; aC++) uf[aC].onclick = uf[aC].onmouseover = null;
		aHW = uf = null
	}, this.transform = function(s5) {
		for (var rs = document.createElement("div"), aHX = aHY(s5), aC = 0; aC < aHX.length; aC++) rs.appendChild(aHX[aC]);
		0 === s5.aFu.id && (rs.vx143 = s5.aFu, aHW.push(rs)), rs.style.margin = "0.6em 0.6em", s5.tQ && (rs.style.marginLeft = rs.style.marginRight = "inherit"), rs.style.font = "inherit";
		var aHZ = 0 < s5.aFu.id;
		return s5.aFy && (rs.style.fontWeight = "bold"), aHZ && (rs.style.paddingLeft = "0.7em"), aHZ && (rs.style.fontStyle = "italic"), rs.style.fontSize = s5.fontSize.toFixed(2) + "em", rs
	}, this.aHk = function(aHl) {
		if (aHl && (2 === aHl.id && 1 === aHl.aFw || 3 === aHl.id && 2 === aHl.aFw)) {
			var uR = 3 === aHl.id ? aHl.target : aHl.uR;
			if (!bq.va.aFW(uR)) {
				for (var aFL = "Redacted " + bI.uV.a1S(uR, 2), aF8 = bq.va.aF8, aC = aF8.length - 1; 0 <= aC; aC--) aHm(aF8[aC], aFL, uR);
				for (aC = aHV.length - 1; 0 <= aC; aC--) aHm(aHV[aC], aFL, uR)
			}
		}
	}, this.aFN = function(uR) {
		for (var aHn = aHW, aHo = "@" + bI.uV.a1S(uR, 5), aC = aHn.length - 1; 0 <= aC; aC--) {
			var fV = aHn[aC];
			if (fV.vx143.uR === uR || 0 <= fV.vx143.s.indexOf(aHo)) {
				for (; fV.firstChild;) u.removeChild(fV, fV.firstChild);
				for (var aHX = aHY(bq.lc.tM(fV.vx143, bq.lc.tN(fV.vx143))), fl = 0; fl < aHX.length; fl++) fV.appendChild(aHX[fl]);
				aHn.splice(aC, 1)
			}
		}
	}, this.aG6 = function(uR) {
		for (var aHn = aHW, aC = aHn.length - 1; 0 <= aC; aC--) {
			var fV = aHn[aC];
			if (fV.vx143.uR === uR) {
				for (; fV.firstChild;) u.removeChild(fV, fV.firstChild);
				fV.vx143.s = "[Redacted Message]";
				for (var aHX = aHY(bq.lc.tM(fV.vx143, bq.lc.tN(fV.vx143))), fl = 0; fl < aHX.length; fl++) fV.appendChild(aHX[fl]);
				aHn.splice(aC, 1)
			}
		}
	}
}

function cT() {
	var aHp, aHq, aHr;

	function aHw(aC) {
		var button = aZ.or[aC],
			fZ = button.fZ,
			fb = button.fb,
			j = button.j,
			k = button.k;
		wm.fillStyle = button.aHu, wm.fillRect(fZ, fb, j, k), aC === aHp && (wm.fillStyle = aHr, wm.fillRect(fZ, fb, j, k)), wm.lineWidth = bf.a19, wm.strokeStyle = aHq, wm.strokeRect(fZ, fb, j, k),
			function(button) {
				var fZ = button.fZ,
					fb = button.fb,
					j = button.j,
					k = button.k;
				bD.sD.textAlign(wm, 1), bD.sD.textBaseline(wm, 1), wm.font = button.font, wm.fillStyle = aHq, wm.fillText(button.aFx, Math.floor(fZ + j / 2), Math.floor(fb + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fb = 0, this.gap = 0, this.dk = function() {
		aHp = -1, aHq = bE.pH, aHr = "rgba(255,255,255,0.16)", this.or = new Array(7), this.k = Math.floor((a1.a2.ib() ? .123 : .093) * i.ic), this.j = Math.floor((a1.a2.ib() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aHs = Math.floor(.26 * this.k),
			aHt = bD.sD.u1(1, aHs);
		this.or[0] = {
			fZ: 0,
			fb: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aFx: "Multiplayer",
			font: aHt,
			aHu: "rgba(22,88,22,0.8)",
			fontSize: aHs
		}, aHs = Math.floor(.18 * this.k), aHt = bD.sD.u1(1, aHs), this.or[1] = {
			fZ: 0,
			fb: 0,
			j: this.j - this.or[0].j - this.gap,
			k: this.k,
			aFx: "Single Player",
			font: aHt,
			aHu: "rgba(22,88,88,0.8)",
			fontSize: aHs
		}, this.or[2] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFx: "",
			font: this.or[1].font,
			aHu: "rgba(100,0,0,0.8)",
			fontSize: this.or[1].fontSize
		}, this.or[3] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: this.k,
			aFx: "Back",
			font: this.or[0].font,
			aHu: "rgba(0,0,0,0.8)",
			fontSize: this.or[0].fontSize
		}, this.or[4] = {
			fZ: 0,
			fb: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFx: "The game was updated!",
			font: this.or[1].font,
			aHu: "rgba(100,0,0,0.8)",
			fontSize: this.or[1].fontSize
		}, this.or[5] = {
			fZ: 0,
			fb: 0,
			j: this.or[0].j,
			k: Math.floor(.8 * this.k),
			aFx: "Reload",
			font: this.or[0].font,
			aHu: "rgba(0,100,0,0.8)",
			fontSize: this.or[0].fontSize
		}, this.or[6] = {
			fZ: 0,
			fb: 0,
			j: this.or[1].j,
			k: this.or[5].k,
			aFx: "Back",
			font: this.or[0].font,
			aHu: "rgba(0,0,0,0.8)",
			fontSize: this.or[0].fontSize
		}, this.aBf()
	}, this.aBf = function() {
		this.fb = Math.floor(.54 * i.k), this.or[0].fZ = Math.floor(.5 * i.j - .5 * this.j), this.or[1].fZ = this.or[0].fZ + this.or[0].j + this.gap, this.or[2].fZ = this.or[3].fZ = this.or[0].fZ, this.or[4].fZ = this.or[5].fZ = this.or[0].fZ,
			this.or[6].fZ = this.or[1].fZ, this.or[0].fb = Math.floor(.54 * i.k), this.or[1].fb = this.or[0].fb, this.or[2].fb = Math.floor((i.k - this.or[2].k - this.or[3].k - this.gap) / 2), this.or[3].fb = this.or[2].fb + this.or[2].k + this
			.gap, this.or[4].fb = Math.floor((i.k - this.or[4].k - this.or[5].k - this.gap) / 2), this.or[5].fb = this.or[6].fb = this.or[4].fb + this.or[4].k + this.gap
	}, this.aHv = function() {
		aHw(0), aHw(1)
	}, this.aHx = function() {
		aHw(2), aHw(3)
	}, this.aHy = function() {
		aHw(4), aHw(5), aHw(6)
	}, this.a3h = function(fZ, fb, n9) {
		var aC = -1;
		return 0 === ab.a3K() ? aC = this.a4B(fZ, fb, 0, 2) : 3 === ab.a3K() ? aC = this.a4B(fZ, fb, 3, 1) : 5 === ab.a3K() && (aC = this.a4B(fZ, fb, 5, 2)), aHp !== aC && (aHp = aC, n9) && (bi.ds = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a4B = function(fZ, fb, aHz, size) {
		for (var aC = aHz; aC < aHz + size; aC++)
			if (fZ >= this.or[aC].fZ && fb >= this.or[aC].fb && fZ <= this.or[aC].fZ + this.or[aC].j && fb <= this.or[aC].fb + this.or[aC].k) return aC;
		return -1
	}
}

function cU() {
	var aI1, aI2, a9H, aI3, aI4, aI5, aI6, aI7, aI8, a9G, aI9, aIA, aIB, aIC = 1,
		aID = 0,
		aIE = 0;

	function aII(aIJ) {
		aIJ ? aIB = (aIB + 1) % b1.z.aIK : (b1.z.close(aIB, 3280), aIC ? aIC = 0 : (aIE = 1 - aIE, 0 === (aID = (aID + 1) % 2) && (aIB = (aIB + 1) % b1.z.aIK, b1.z.close(aIB, 3280)))), aIA = bi.eZ, aa.aIH = aIE, b1.z.aIL(aIB, 4, 1) && b1.aGp.aIM(aIB)
	}

	function aIN() {
		0 === aIB ? p.a3W(3249) : aII()
	}

	function aIS(fb, aBN, vJ) {
		var no = Math.floor((i.j - aI3) / 2) + aI6,
			o1 = no + Math.floor(vJ * (aI3 - 2 * aI6));
		wm.lineWidth = aBN, wm.beginPath(), wm.moveTo(no, fb), wm.lineTo(o1, fb), wm.lineTo(Math.floor(no - aI6 + vJ * aI3), fb + a9H), wm.lineTo(no - aI6, fb + a9H), wm.closePath()
	}
	this.aIF = 1, this.aIG = 0, this.aIH = 0, this.dk = function() {
		bX.turnstile.eu(), ab.setState(6), aI1 = 0, aI2 = 1, aI7 = "rgba(0,220,120,0.4)", aI8 = "rgba(0,0,0,0.8)", this.resize(), bi.ds = !0, aIC = 1, aID = 0, aIB = this.aIF - 1, aIE = 0 === this.aIG ? m.e5 ? 1 : 0 : this.aIG - 1, aII(1)
	}, this.resize = function() {
		aI3 = Math.floor((a1.a2.ib() ? .5 : .25) * i.ic), aI4 = aI3 + 12, a9H = Math.floor(.125 * aI3), aI6 = 3 * a9H, aI5 = Math.floor(.225 * aI3), aI9 = Math.floor(.3 * a9H), a9G = bD.sD.u1(0, aI9)
	}, this.a3R = function(oG) {
		oG === aIB && aIN()
	}, this.hf = function(fZ, fb) {
		var no = Math.floor((i.j - aI4) / 2),
			np = Math.floor(.5 * (i.k - bf.gap - a9H - aI5)) + a9H + bf.gap;
		return no < fZ && fZ < no + aI4 && np < fb && fb < np + aI5 && (this.a4M(), aZ.a3h(fZ, fb, !1), !0)
	}, this.a4M = function() {
		b1.z.a3X(3260), u.z.a0()
	}, this.ee = function() {
		6 === ab.a3K() && (bi.eZ > aIA + 12e3 && aIN(), 100 < (aI1 += .07 * aI2 * (aI1 < 16 ? 5 + aI1 : 84 < aI1 ? 105 - aI1 : 17)) ? (aI1 = 100, aI2 = -1) : aI1 < 0 && (aI1 = 0, aI2 = 1), aI7 = "rgba(0," + Math.floor(190 - 1.9 * aI1) + "," +
			Math.floor(120 - 1.2 * aI1) + "," + (.4 + .004 * aI1) + ")", aI8 = "rgba(0," + Math.floor(1.9 * aI1) + "," + Math.floor(1.2 * aI1) + "," + (.8 - .004 * aI1) + ")", bi.ds = !0)
	}, this.wl = function() {
		var fZ = Math.floor((i.j - aI4) / 2),
			fb = Math.floor(.5 * (i.k - bf.gap - a9H - aI5));
		! function(title, fb, aBN, vJ) {
			wm.fillStyle = aI8, aIS(fb, aBN, 1), wm.fill(), wm.fillStyle = aI7, aIS(fb, aBN, vJ), wm.fill(), wm.strokeStyle = bE.pH, aIS(fb, aBN, 1), wm.stroke(),
				function(aIU, fb) {
					bD.sD.textAlign(wm, 1), bD.sD.textBaseline(wm, 1), wm.font = a9G, wm.fillStyle = bE.pH, wm.fillText(aIU, Math.floor(.5 * i.j), Math.floor(fb + .58 * a9H))
				}(title, fb)
		}(L(138), fb, 3, aI1 / 100),
		function(fZ, fb, j, k, aFx) {
			wm.fillStyle = bE.pC, wm.fillRect(fZ, fb, j, k), wm.lineWidth = 3, wm.strokeStyle = bE.pH, wm.strokeRect(fZ, fb, j, k);
			var fS = Math.floor(.3 * k);
			bD.sD.textAlign(wm, 1), bD.sD.textBaseline(wm, 1), wm.font = bD.sD.u1(0, fS), wm.fillStyle = bE.pH, wm.fillText(aFx, Math.floor(fZ + j / 2), Math.floor(fb + k / 2 + .1 * fS))
		}(fZ, fb + a9H + bf.gap, aI4, aI5, L(40))
	}
}

function cV() {
	var a3E = 0;
	this.dk = function() {
		aZ.dk(), a3E = 0
	}, this.setState = function(aIV) {
		a3E = aIV
	}, this.a3K = function() {
		return a3E
	}, this.aIW = function() {
		this.setState(8), u.y()
	}, this.a4F = function(e) {
		if (!bV.yg) return !1;
		if (!(bi.eZ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aIX()) return !0;
				if ("Enter" === e.key) {
					if (0 === a3E) return !0;
					if (7 === a3E) return !0
				}
			}
			return !1
		}
	}, this.aIY = function() {
		bc.resize()
	}, this.aIX = function() {
		return !!bc.tS()
	}, this.hf = function(fZ, fb) {
		!bV.yg || bc.hf(fZ, fb) || 6 === a3E && aa.hf(fZ, fb) || bb.hf(fZ, fb) || aU.hf(fZ, fb)
	}, this.a3h = function(fZ, fb) {
		!aU.aBY && aZ.a3h(fZ, fb, !0) || aU.a3h(fZ, fb)
	}, this.click = function(fZ, fb) {
		aU.a46()
	}, this.a3k = function(fZ, fb, deltaY) {}, this.aIZ = function() {
		aZ.aBf(), bi.ds = !0
	}, this.wl = function() {
		8 !== a3E && 10 !== a3E && (wm.imageSmoothingEnabled = !0, this.a0F(), 0 !== a3E && (aU.wl(), aP.wl(), this.aIa(), bb.wl()), 0 !== a3E && 6 === a3E && aa.wl(), bc.wl(), u.wl())
	}, this.a0F = function() {
		var aIc, aIb;
		if (__fx.makeMainMenuTransparent) wm.clearRect(0, 0, i.j, i.k);
		else bV.yg ? (aIb = i.j / bV.fd, aIc = i.k / bV.fe, wm.setTransform(aIb = aIc < aIb ? aIb : aIc, 0, 0, aIb, Math.floor((i.j - aIb * bV.fd) / 2), Math.floor((i.k - aIb * bV.fe) / 2)), wm.drawImage(bV.yi, 0, 0), wm.setTransform(1, 0, 0, 1,
			0, 0), wm.fillStyle = bE.pC) : wm.fillStyle = bE.p8, wm.fillRect(0, 0, i.j, i.k)
	}, this.aIa = function() {
		var fb = Math.floor(.3 * i.k),
			canvas = ac.aId("territorial.io"),
			iT = (iT = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : iT,
			fZ = (wm.globalAlpha = .15, wm.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - iT * canvas.width))),
			fZ = Math.floor(fZ / iT),
			fb = Math.floor(fb - .5 * canvas.height * iT),
			fb = Math.floor(fb / iT);
		wm.setTransform(iT, 0, 0, iT, fZ, fb), wm.drawImage(canvas, fZ, fb), wm.setTransform(1, 0, 0, 1, 0, 0), wm.globalAlpha = 1, wm.imageSmoothingEnabled = !0
	}
}

function cv() {
	this.aFl = 0;
	var aIf, aIg, aIh, aIi, aIj, aIk = this.aIe = 0;

	function aIm() {
		aIi = aIj = null, aIk = 0
	}
	this.dk = function(tG, aFi, aFj) {
		u.y(), bq.vr(), ab.setState(10), aIi = tG, aIj = aFi, aIk = aFj, this.aFl = tG.aFl, this.aIe = aFj, aIf = 0, aIg = bi.eZ + 4500, b1.z.a3S = tG.a3S, b1.z.f0 === tG.a3S ? (console.log("direct pass"), aIh = 0) : (console.log("delayed pass"),
			b1.z.close(b1.z.f0, 3247), aIh = 2, b1.z.aIL(tG.a3S, 5, 2) && b1.qf.aIl()), wm.imageSmoothingEnabled = !0, ab.a0F();
		aFi = ac.aId("loading"), aFj = (a1.a2.ib() ? .396 : .25) * i.ic / aFi.width;
		wm.setTransform(aFj, 0, 0, aFj, Math.floor((i.j - aFj * aFi.width) / 2), Math.floor((i.k - aFj * aFi.height) / 2)), wm.imageSmoothingEnabled = !1, wm.drawImage(aFi, 0, 0), wm.setTransform(1, 0, 0, 1, 0, 0)
	}, this.n7 = function() {
		0 < aIh && bi.eZ > aIg && (aIh--, aIg += 4500, 0 === bi.aIn) && 0 === bi.kk() && b1.z.aIL(b1.z.a3S, 5, 2)
	}, this.aIo = function() {
		return 10 === ab.a3K() && (bq.aEx.aFm(aIi, aIj, aIk), aIm(), !0)
	}, this.aIp = function() {
		10 === ab.a3K() && 2 <= ++aIf && (bq.aEx.aFm(aIi, aIj, aIk), aIm())
	}
}

function cW() {
	var aIr, canvas, a2X, aIs;

	function aIy(eI, name, aIz, ru) {
		a2X[eI] = name, canvas[eI] = new Image, canvas[eI].onload = function() {
			! function(eI, aIz) {
				var a5y, a5z = null;
				7 === aIz ? a5y = bD.ok.a61 : 8 === aIz ? (a5y = bD.ok.a64, a5z = .1) : 3 === aIz ? (a5y = bD.ok.a62, a5z = .06) : 5 === aIz ? a5y = bD.ok.a65 : 6 === aIz ? a5y = bD.ok.a60 : 4 === aIz && (a5y = bD.ok.a66);
				canvas[eI] = bD.ok.a5x(canvas[eI], a5y, a5z)
			}(eI, aIz), aJ1()
		}, canvas[eI].onerror = function(e) {
			console.error("Error loading image at index", eI, "Error:", e), aJ1()
		}, canvas[eI].src = "data:image/png;base64," + ru
	}

	function aJ1() {
		aIr--, aIv()
	}

	function aIv() {
		0 === aIr && (aIr = -1, aIx(), bi.ds = !0, canvas[7] = aIs, canvas[8] = aIs, canvas[9] = aIs, canvas[10] = aIs, 5 === u.uT) && u.a3O().aJ3.resize()
	}

	function aIx() {
		aM.a7N(), bb.aEn([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.yl = new a0g, ak.yl.dk(), ax.dl()
	}
	this.dk = function() {
		if (void 0 === canvas) {
			aIr = 23, canvas = new Array(aIr), a2X = new Array(aIr), (aIs = document.createElement("canvas")).width = 1;
			for (var aC = aIr - (aIs.height = 1); 0 <= aC; aC--) canvas[aC] = aIs;
			aIx(), aIy(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aIy(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aIy(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aIy(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aIy(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aIy(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aIy(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(8,
					"googleplay", 3,
					"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"
					), aIy(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aIy(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIy(14, "bestPlayer", 5,
					"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"
					), aIy(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aIy(16, "apple", 3,
					"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"
					), aIy(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aIy(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aIy(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aIy(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aIy(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aIy(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eI) {
		return canvas[eI]
	}, this.aId = function(name) {
		for (var aC = a2X.length - 1; 0 <= aC; aC--)
			if (a2X[aC] === name) return canvas[aC];
		return aIs
	}, this.uu = function() {
		return aIr <= 0
	}, this.aIu = function() {
		aIr = 0, aIv()
	}
}

function cX() {
	var aJ4 = [
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
		aJ5 = [
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
	this.aJ6 = null, this.aJ7 = null, this.aJ8 = null, this.aJ9 = null, this.aJA = null, this.aJB = null, this.aJC = null, this.aJD = null, this.aJE = null, this.aJF = null;

	function aJM(k3, o6) {
		for (var aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aC = k3; aC < o6; aC++) aJ6[aC] = bO.ft(64 * az.random(), az.value(100)) << 2, aJ7[aC] = bO.ft(64 * az.random(), az.value(100)) << 2, aJ8[aC] = bO.ft(64 * az.random(), az.value(100)) << 2
	}

	function aJL(k3, o6) {
		for (var colorsData = aE.data.colorsData, aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aC = k3; aC < o6; aC++) {
			var fu = colorsData[aC];
			aJ6[aC] = 4 * (fu >> 12), aJ7[aC] = 4 * (fu >> 6 & 63), aJ8[aC] = 4 * (63 & fu)
		}
	}

	function aJd(f6, aJf) {
		aE9[f6] = 0, aE9[f6 + 1] = 0, aE9[f6 + 2] = aJf, aE9[f6 + 3] = 0, aJg(f6)
	}

	function aJg(f6) {
		var fZ;
		be.oE || (fZ = ad.a0G(f6), f6 = ad.a0H(f6), be.oE = fZ >= bd.aE8[0] && fZ <= bd.aE8[2] && f6 >= bd.aE8[1] && f6 <= bd.aE8[3])
	}
	this.fU = new Int32Array(4), this.aJJ = new Int32Array(8), this.dl = function() {
		var fU = this.fU,
			fU = (fU[0] = -4 * bV.fd, fU[1] = 4, fU[2] = -fU[0], fU[3] = -fU[1], this.aJJ);
		fU[0] = -4 * bV.fd - 4, fU[1] = -4 * bV.fd, fU[2] = -4 * bV.fd + 4, fU[3] = -4, fU[4] = 4, fU[5] = 4 * bV.fd - 4, fU[6] = 4 * bV.fd, fU[7] = 4 * bV.fd + 4
	}, this.dk = function() {
		if (this.aJ6 ? (this.aJ6.fill(0), this.aJ7.fill(0), this.aJ8.fill(0), this.aJ9.fill(0), this.aJA.fill(0), this.aJB.fill(0), this.aJC.fill(0), this.aJD.fill(0), this.aJE.fill(0), this.aJF.fill(0), this.aAW.fill(0)) : (this.aJ6 =
				new Uint8Array(aE.fP), this.aJ7 = new Uint8Array(aE.fP), this.aJ8 = new Uint8Array(aE.fP), this.aJ9 = new Uint8Array(aE.fP), this.aJA = new Uint8Array(aE.fP), this.aJB = new Uint8Array(aE.fP), this.aJC = new Uint8Array(aE.fP),
				this.aJD = new Uint8Array(aE.fP), this.aJE = new Uint8Array(aE.fP), this.aJF = new Uint8Array(aE.fP), this.aAW = new Uint8Array(aE.fP)), aE.iM)
			for (var aCm = bj.aCm, aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aC = aE.fP - 1; 0 <= aC; aC--) {
				var ej = aCm[aC],
					li = bO.ft((aJ5[ej][3] + 1) * az.random(), az.value(100));
				aJ6[aC] = aJ4[ej][0] + li * aJ5[ej][0], aJ7[aC] = aJ4[ej][1] + li * aJ5[ej][1], aJ8[aC] = aJ4[ej][2] + li * aJ5[ej][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aJL(0, aE.kn), aJM(aE.kn, aE.fP)) : aJM(0, aE.fP) : aJL(0, aE.fP);
		! function() {
			var aC, fV, aJ6 = ad.aJ6,
				aJ7 = ad.aJ7,
				aJ8 = ad.aJ8;
			for (aC = aE.fP - 1; 0 <= aC; aC--) fV = bO.ft(aJ6[aC] + aJ7[aC] + aJ8[aC], 3), aJ6[aC] += aJS(fV - aJ6[aC], 2), aJ7[aC] += aJS(fV - aJ7[aC], 2), aJ8[aC] += aJS(fV - aJ8[aC], 2), aJ6[aC] -= aJ6[aC] % 4, aJ7[aC] -= aJ7[aC] % 4, aJ8[
				aC] -= aJ8[aC] % 4
		}(),
		function() {
			for (var fS = aE.fP, aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aJ9 = ad.aJ9, aC = 0; aC < fS; aC++) aJ6[aC] += aC >> 7, aJ7[aC] += aC >> 5 & 3, aJ8[aC] += aC >> 3 & 3, aJ9[aC] = 7 & aC
		}(), this.aJP(),
			function() {
				for (var fS = aE.fP, aJA = ad.aJA, aJB = ad.aJB, aJC = ad.aJC, aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aC = 0; aC < fS; aC++) {
					var eH = aJ6[aC],
						uq = aJ7[aC],
						fm = aJ8[aC];
					60 <= eH + uq + fm ? (aJA[aC] = Math.max(eH - 40, 3 & eH), aJB[aC] = Math.max(uq - 40, 3 & uq), aJC[aC] = Math.max(fm - 40, 3 & fm)) : (aJA[aC] = eH + 40, aJB[aC] = uq + 40, aJC[aC] = fm + 40)
				}
			}(),
			function() {
				for (var fS = aE.fP, aJD = ad.aJD, aJE = ad.aJE, aJF = ad.aJF, aJ6 = ad.aJ6, aJ7 = ad.aJ7, aJ8 = ad.aJ8, aC = 0; aC < fS; aC++) {
					var eH = aJ6[aC],
						uq = aJ7[aC],
						fm = aJ8[aC];
					688 <= eH + uq + fm ? (aJD[aC] = eH - 88, aJE[aC] = uq - 88, aJF[aC] = fm - 88) : (aJD[aC] = Math.min(eH + 88, 252 + (3 & eH)), aJE[aC] = Math.min(uq + 88, 252 + (3 & uq)), aJF[aC] = Math.min(fm + 88, 252 + (3 & fm)))
				}
			}()
	}, this.a9O = function(player) {
		var h = bR.g1;
		return h[0] = this.aJ6[player], h[1] = this.aJ7[player], h[2] = this.aJ8[player], h
	}, this.aJP = function() {
		for (var aC = aE.fP - 1; 0 <= aC; aC--) this.aAW[aC] = this.aJ6[aC] + this.aJ7[aC] + this.aJ8[aC] < 280 ? 0 : 1
	}, this.a0G = function(f6) {
		return bO.ft(f6, 4) % bV.fd
	}, this.a0H = function(f6) {
		return bO.ft(f6, 4 * bV.fd)
	}, this.zo = function(fZ, fb) {
		return Math.floor(4 * (fb * bV.fd + fZ))
	}, this.a04 = function(f6) {
		var fU = this.fU;
		return this.aJT(f6 + fU[0]) || this.aJT(f6 + fU[1]) || this.aJT(f6 + fU[2]) || this.aJT(f6 + fU[3])
	}, this.fq = function(f6) {
		var fU = this.fU;
		return this.fX(f6 + fU[0]) || this.fX(f6 + fU[1]) || this.fX(f6 + fU[2]) || this.fX(f6 + fU[3])
	}, this.a02 = function(f6, player) {
		var fU = this.fU;
		return this.aJU(f6 + fU[0], player) || this.aJU(f6 + fU[1], player) || this.aJU(f6 + fU[2], player) || this.aJU(f6 + fU[3], player)
	}, this.aJV = function(aC, aJW, aJX, aJY) {
		this.aJ6[aC] = aJW >> 16, this.aJ7[aC] = aJW >> 8 & 255, this.aJ8[aC] = 255 & aJW, this.aJA[aC] = aJX >> 16, this.aJB[aC] = aJX >> 8 & 255, this.aJC[aC] = 255 & aJX, this.aJD[aC] = aJY >> 16, this.aJE[aC] = aJY >> 8 & 255, this.aJF[aC] =
			255 & aJY
	}, this.aJZ = function(aC) {
		return [(this.aJ6[aC] << 16) + (this.aJ7[aC] << 8) + this.aJ8[aC], (this.aJA[aC] << 16) + (this.aJB[aC] << 8) + this.aJC[aC], (this.aJD[aC] << 16) + (this.aJE[aC] << 8) + this.aJF[aC]]
	}, this.h2 = function(f6) {
		return 208 <= aE9[f6 + 3]
	}, this.a0A = function(player, f6) {
		return this.h2(f6) && this.a0D(player, f6)
	}, this.a0D = function(player, f6) {
		return player === this.fK(f6)
	}, this.aJa = function(f6) {
		return 208 <= aE9[f6 + 3] && aE9[f6 + 3] < 224
	}, this.jy = function(f6) {
		return 224 <= aE9[f6 + 3] && aE9[f6 + 3] < 248
	}, this.aJb = function(f6) {
		return 248 <= aE9[f6 + 3]
	}, this.a03 = function(f6) {
		for (var fU = this.fU, aC = 3; 0 <= aC; aC--)
			if (this.ii(f6 + fU[aC])) return !0;
		return !1
	}, this.fN = function(f6) {
		return this.h2(f6) || this.fJ(f6)
	}, this.ii = function(f6) {
		return 0 === aE9[f6 + 3] && 2 === aE9[f6 + 2]
	}, this.fJ = function(f6) {
		return 0 === aE9[f6 + 3] && 1 === aE9[f6 + 2]
	}, this.yt = function(f6) {
		return 0 === aE9[f6 + 3] && 3 === aE9[f6 + 2]
	}, this.fX = function(f6) {
		return 0 === aE9[f6 + 3] && 5 === aE9[f6 + 2]
	}, this.aJT = function(f6) {
		return 0 === aE9[f6 + 3] && 3 <= aE9[f6 + 2]
	}, this.fA = function(f6) {
		return (aE9[f6] >> 1 << 8) + aE9[f6 + 1]
	}, this.aJc = function(f6) {
		return 1 & aE9[f6]
	}, this.aJU = function(f6, player) {
		return this.fJ(f6) || this.h2(f6) && player !== this.fK(f6)
	}, this.fK = function(f6) {
		return ((3 & aE9[f6]) << 7) + ((3 & aE9[f6 + 1]) << 5) + ((3 & aE9[f6 + 2]) << 3) + (7 & aE9[f6 + 3])
	}, this.a0B = function(f6) {
		aJd(f6, 1)
	}, this.aJe = function(f6) {
		aJd(f6, 2)
	}, this.zp = function(f6, player) {
		aE9[f6] = this.aJ6[player], aE9[f6 + 1] = this.aJ7[player], aE9[f6 + 2] = this.aJ8[player], aE9[f6 + 3] = 208 + this.aJ9[player], aJg(f6)
	}, this.gx = function(f6, player) {
		aE9[f6] = this.aJA[player], aE9[f6 + 1] = this.aJB[player], aE9[f6 + 2] = this.aJC[player], aE9[f6 + 3] = 224 + this.aJ9[player], aJg(f6)
	}, this.jz = function(f6, player) {
		aE9[f6] = this.aJD[player], aE9[f6 + 1] = this.aJE[player], aE9[f6 + 2] = this.aJF[player], aE9[f6 + 3] = 248 + this.aJ9[player], aJg(f6)
	}
}

function cw() {
	var aJh = 0,
		aJj = new Uint16Array(64);

	function ey(a7R) {
		aJh -= 2;
		for (var aC = a7R; aC < aJh; aC += 2) aJj[aC] = aJj[aC + 2], aJj[aC + 1] = aJj[aC + 3]
	}
	this.dk = function() {
		aJh = 0
	}, this.ee = function() {
		var aC, jw, j5;
		if (0 !== aJh)
			if (0 === ah.nN[aE.fC]) aJh = 0;
			else if (0 === ae.gZ(aE.fC)) aJh = 0;
		else
			for (aC = aJh - 2; 0 <= aC; aC -= 2)(jw = aJj[aC]) < aE.fP && 0 === ah.nN[jw] ? ey(aC) : (j5 = aJj[aC + 1], (jw >= aE.fP && bv.aJl(aE.fC) || jw < aE.fP && bv.aJm(aE.fC, jw)) && (bB.hs.hz(j5, jw), ey(aC)))
	}, this.i0 = function(jw, j5) {
		! function(jw, j5) {
			for (var aC = 0; aC < aJh; aC += 2)
				if (aJj[aC] === jw) return aJj[aC + 1] = Math.min(aJj[aC + 1] + j5, 1023), 1;
			return
		}(jw, j5) && 64 !== aJh && (aJj[aJh] = jw, aJj[aJh + 1] = j5, aJh += 2)
	}
}

function cY() {
	function aJu(player) {
		var ea;
		bD.go.a5Z(player) && (ea = ah.hU[player] - ah.a5e[player] + ae.aJw(player), bg.gs(player, Math.abs(ea), ea < 0 ? 18 : 12)), ah.hU[player] = 0, ah.a5e[player] = 0
	}

	function aK3() {
		aY.show(!1, !1, !1, !0), aX.aDI(), bU.a1w.a2i()
	}

	function aJq(player, aK2) {
		for (var aC = aK2.length - 1; 0 <= aC; aC--) ae.aK5(aK2[aC], player)
	}

	function aJt(player) {
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
					ad.a0A(player, h0) && ad.a0B(h0)
				}
		}
		jM[player] = jO[player] = 0, jL[player] = jN[player] = Math.max(fd, bV.fe)
	}
	this.dt = function(h0) {
		var player, ea = ah.hG[h0] + ah.zk[h0];
		bQ.z.kr[h0] ? ea && (aJq(player = h0, ae.aJr(player)), ag.aJs(player), aJt(player), aG.gq(player), ae.clear(player), aJu(player), function(player) {
			ah.zk[player] = 0, ah.gu[player] = [], ah.h8[player] = [], ah.h9[player] = [], ah.fr[player] = []
		}(player)) : !ea && ah.gu[h0].length || this.aJp(h0)
	}, this.aJp = function(player) {
		! function(player) {
			bD.go.kA(player) || (ah.a2m[player] = bl.a31.aK1(), aE.a2D++);
			var aK2 = ae.aJr(player);
			0 === aK2.length ? bD.go.a5W(player) && aK3() : (aJq(player, aK2), function(player, aK2) {
				var aK7 = aK2[function(aK2) {
					var aC, eI = 0;
					for (aC = aK2.length - 1; 1 <= aC; aC--) ah.hG[aK2[aC]] > ah.hG[aK2[eI]] && (eI = aC);
					return eI
				}(aK2)];
				9 === aE.l5 && (1 === bj.fQ[player] ? az.kf(8) && b0.aK8(aK7) : aF.iB[player] && (aO.a8p(765, 0), aO.a0d(280, L(139, [ah.a0e[aK7], ah.a0e[player]]), 765, aK7, bE.p8, bE.qT, -1, !0)));
				if (bD.go.a5W(player)) aK3(), aO.a2O(aK7, 1);
				else {
					for (var aC = aK2.length - 1; 0 <= aC; aC--)
						if (bD.go.a5Z(aK2[aC]) && (bg.nJ[4 - bD.go.kA(player)]++, bD.go.a5W(aK2[aC]))) return aO.a2O(player, 0);
					bD.go.kA(player) || aO.a8a(0, player, aK7)
				}
			}(player, aK2))
		}(player), ag.aJs(player), aJt(player), aJu(player),
			function(player) {
				ah.nN[player] = 0, ah.gu[player] = null, ah.h8[player] = null, ah.h9[player] = null, ah.fr[player] = null
			}(player), aG.gq(player), ae.clear(player), bQ.aJz.aK0(player)
	}
}

function d1() {
	var input;

	function aK9(e) {
		(e = e.target.files) && 0 < e.length && b7.aKC(e[0])
	}

	function aKG(e) {
		var ej = new Image;
		ej.onload = aKH, ej.src = e.target.result
	}

	function aKH(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aKJ = bm.buffer.data[162].value,
			max = Math.min(bV.aKK, aKJ),
			aKJ = (max = a1.id || bM.sf() ? Math.min(1400, aKJ) : max) / Math.max(j, k);
		if (aKJ < 1 && (j = Math.floor(aKJ * j + .125), k = Math.floor(aKJ * k + .125)), max < j || max < k || j < 10 || k < 10) aKJ = "Invalid Image Dimensions!", a1.xT ? a1.xT.showToast(aKJ) : alert(aKJ);
		else {
			for (var max = document.createElement("canvas"), aKJ = (max.width = j, max.height = k, max.getContext("2d")), aKM = document.createElement("canvas"), aKN = (aKM.width = e.width, aKM.height = e.height, aKM.getContext("2d")), e = (aKN
					.drawImage(e, 0, 0), aKN.getImageData(0, 0, aKM.width, aKM.height)), aKN = aKJ.createImageData(j, k), src = e.data, aKQ = aKN.data, aB7 = aKM.width / j, aB8 = aKM.height / k, fb = 0; fb < k; fb++)
				for (var fZ = 0; fZ < j; fZ++) {
					var aKR = Math.floor(fZ * aB7),
						aKR = 4 * (Math.floor(fb * aB8) * aKM.width + aKR),
						aKU = 4 * (fb * j + fZ);
					aKQ[aKU] = src[aKR], aKQ[1 + aKU] = src[1 + aKR], aKQ[2 + aKU] = src[2 + aKR], aKQ[3 + aKU] = 255
				}
			aKJ.putImageData(aKN, 0, 0), 20 === u.uT && u.a3O().aKH(max)
		}
	}
	this.dk = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aK9
	}, this.vr = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aKA = function() {
		input.click()
	}, this.aKC = function(aKD) {
		var h = aKD.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aKG, h.readAsDataURL(aKD))
	}
}

function cz() {
	this.aKV = null, this.dk = function() {
		10 !== aE.l5 ? this.aKV = null : this.aKV = new Uint32Array(aE.fP)
	}, this.ee = function() {
		10 === aE.l5 && this.lc()
	}, this.lc = function() {
		for (var h0, target, aDV, aKV = this.aKV, a1z = am.lO, a5f = ah.hU, aC = am.lJ - 1; 0 <= aC; aC--)(h0 = a1z[aC]) >= aE.kn || (target = Math.max(bO.ft(a5f[h0], 4), 2048), aDV = Math.max(af.aDW(h0), 100), aKV[h0] += bO.ft(aDV * target,
			1e4), aKV[h0] > target && (aKV[h0] = target))
	}, this.a5l = function(player, iB) {
		return iB > this.aKV[player] ? (iB = this.aKV[player], this.aKV[player] = 0) : this.aKV[player] -= iB, iB
	}
}

function d2() {
	var aKW = -1,
		aKX = null,
		aKY = -1,
		wI = 4;

	function aKa() {
		aN.a7v() ? be.render() : be.a2N()
	}

	function aKi(ej, fV) {
		var eH = ej >> 16,
			uq = ej >> 8 & 255,
			ej = 255 & ej,
			aKj = 255 - fV,
			aKj = (aKj < eH && aKj < uq && aKj < ej && (fV = -fV), aKW >> 7),
			aKl = aKW >> 5 & 3,
			aKm = aKW >> 3 & 3;
		return (Math.max(Math.min(eH + fV, 252 + aKj), aKj) << 16) + (Math.max(Math.min(uq + fV, 252 + aKl), aKl) << 8) + Math.max(Math.min(ej + fV, 252 + aKm), aKm)
	}

	function aKZ() {
		return -1 !== aKW && (ad.aJV(aKW, aKX[0], aKX[1], aKX[2]), aKf(aKW), aKW = -1)
	}

	function aKf(player) {
		bi.ds = !0;
		for (var jL = ah.jL[player], jN = ah.jN[player], jM = ah.jM[player], jO = ah.jO[player], fb = jN; fb <= jO; fb++)
			for (var fZ = jL; fZ <= jM; fZ++) {
				var f6 = ad.zo(fZ, fb);
				ad.a0A(player, f6) && (ad.aJb(f6) ? ad.jz(f6, player) : ad.jy(f6) ? ad.gx(f6, player) : ad.zp(f6, player))
			}
	}
	this.dk = function() {
		aKX = null, aKY = aKW = -1, wI = bO.ia(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ee = function(by) {
		if (bm.buffer.data[15].value && 0 !== wI && (by || !bM.sf())) {
			var by = bP.hi(bM.hX),
				hj = bP.hk(bM.hY);
			if (bP.hl(by, hj)) {
				by = bP.fp(by, hj), hj = bP.fI(by);
				if (aKY === hj)
					if (ad.h2(hj)) {
						if (aKW === ad.fK(hj)) return
					} else if (-1 === aKW) return;
				! function(f6) {
					ad.h2(f6) ? (f6 = ad.fK(f6)) !== aKW && (aKZ(), function(player) {
						aKW = player, aKX = ad.aJZ(player);
						var aKd = function() {
							var s5 = aKX,
								aKg = wI << 2,
								aKh = aKg << 1;
							return [aKi(s5[0], aKg), aKi(s5[1], aKh), aKi(s5[2], aKh)]
						}();
						ad.aJV(player, aKd[0], aKd[1], aKd[2]), aKf(player)
					}(f6), aKa()) : aKZ() && aKa()
				}(aKY = hj)
			} else aKZ() && aKa()
		}
	}
}

function d3() {
	var w5 = 0,
		aKn = 0,
		aKo = 0,
		aKp = 0,
		aKY = -1;

	function aKs(f6) {
		if (aKY === f6) return !1;
		if (-1 === (aKY = f6)) w5 = 0, aO.a92(w5, 0);
		else {
			if (ad.h2(f6)) return aKo = ad.fK(f6), km = ah.hU[aKo] - ah.a5e[aKo], (4 !== w5 || km !== aKn) && (w5 = 4, aKn = km, aO.a92(w5, km), !0);
			if (ad.fJ(f6)) return 3 !== w5 && (w5 = 3, aO.a92(w5, 0), !0);
			if (ad.fX(f6)) return 2 !== w5 && (w5 = 2, aO.a92(w5, 0), !0);
			var km = bQ.lc.a7j(bM.hX, bM.hY);
			if (-1 === km) return 1 !== w5 && (w5 = 1, aO.a92(w5, 0), !0);
			f6 = bQ.z.a8h[km];
			if (aKo = bQ.z.mg[km], aKp = bQ.z.mh[km] >> 3, 5 === w5 && f6 === aKn) return !1;
			w5 = 5, aKn = f6, aO.a92(w5, f6)
		}
		return !0
	}
	this.dk = function() {
		aKp = aKo = aKn = w5 = 0, aKY = -1
	}, this.ee = function(by) {
		var hj;
		!by && bM.sf() || (by = bP.hi(bM.hX), hj = bP.hk(bM.hY), bP.hl(by, hj) ? (by = bP.fp(by, hj), aKs(bP.fI(by))) : aKs(-1))
	}, this.n4 = function() {
		var aKu, km, a7h, aKt;
		if (0 !== w5 && 2 !== w5)
			if (bM.sf()) {
				if (1 !== w5 && 3 !== w5) {
					if (4 === w5) return void(km = ah.hU[aKo] - ah.a5e[aKo], aKn === km || (aKn = km, aO.a92(w5, km)));
					(a7h = bQ.lc.nn(aKp, aKo)) < 0 ? (w5 = 1, aO.a92(w5, 0)) : (aKt = bQ.z.a8h[a7h]) !== aKn && (aKn = aKt, aO.a92(w5, aKt))
				}
			} else if (1 === w5) - 1 !== (a7h = bQ.lc.a7j(bM.hX, bM.hY)) && (w5 = 5, aKn = bQ.z.a8h[a7h], aO.a92(w5, aKn));
		else if (3 === w5) ad.h2(aKY) && (w5 = 4, aKu = ad.fK(aKY), aKn = ah.hU[aKu] - ah.a5e[aKu], aO.a92(w5, aKn));
		else if (4 === w5) {
			if (ad.h2(aKY)) return void(aKu = ad.fK(aKY), km = ah.hU[aKu] - ah.a5e[aKu], aKn === km || (aKn = km, aO.a92(w5, km)));
			w5 = 3, aO.a92(w5, 0)
		} else - 1 === (a7h = bQ.lc.a7j(bM.hX, bM.hY)) ? (w5 = 1, aO.a92(w5, 0)) : (aKt = bQ.z.a8h[a7h]) !== aKn && (aKn = aKt, aO.a92(w5, aKt))
	}
}

function dc() {
	function aKw(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aL4, h.readAsText(e))
	}

	function aL4(e) {
		var aL7;
		aE.a2B || (e = JSON.parse(e.target.result), aL7 = aE.data = new a6c, aL8(e, aL7, "mapType", 0, 2), aL8(e, aL7, "mapProceduralIndex", 0, 255), aL8(e, aL7, "mapRealisticIndex", 0, 255), aL8(e, aL7, "mapSeed", 0, 16383), function(aL6, aL7, h1,
				max) {
				aL6 = aL6[h1];
				aL7[h1] = aLE(aL6) ? aL6.slice(0, max) : aL7[h1]
			}(e, aL7, "mapName", 20), function(aL6, aL7, h1) {
				var aKI;
				2 === aL7.mapType && (!aLE(aL6 = aL6[h1]) || aL6.length <= 20 ? aL7.mapType = 0 : ((aKI = new Image).onload = function() {
					bC.aLF.aLG(aKI, 1), aKI.onload = null, aKI = null
				}, aKI.src = aL6))
			}(e, aL7, "canvas"), aL8(e, aL7, "passableWater", 0, 1), aL8(e, aL7, "passableMountains", 0, 1), aL8(e, aL7, "playerCount", 1, 512), aL8(e, aL7, "humanCount", 1, 1), aL8(e, aL7, "selectedPlayer", 0, 0), aL8(e, aL7, "gameMode", 0, 1),
			aL8(e, aL7, "playerMode", 0, 0), aL8(e, aL7, "battleRoyaleMode", 0, 0), aL8(e, aL7, "numberTeams", 0, 8), aL8(e, aL7, "isZombieMode", 0, 0), aL8(e, aL7, "isContest", 0, 0), aL8(e, aL7, "isReplay", 0, 0), aLB(e, aL7, "elo", 16, 2,
				16383), aL8(e, aL7, "colorsType", 0, 1), aL8(e, aL7, "colorsPersonalized", 0, 1), aLB(e, aL7, "colorsData", 32, 512, 262143), aL8(e, aL7, "selectableColor", 0, 1), aLB(e, aL7, "teamPlayerCount", 16, 9, 512), aL8(e, aL7,
				"neutralBots", 0, 1), aL8(e, aL7, "botDifficultyType", 0, 3), aL8(e, aL7, "botDifficultyValue", 0, 15), aLB(e, aL7, "botDifficultyTeam", 8, 9, 15), aLB(e, aL7, "botDifficultyData", 8, 512, 15), aL8(e, aL7, "spawningType", 0, 2),
			aL8(e, aL7, "spawningSeed", 0, 16383), aLB(e, aL7, "spawningData", 16, 1024, 4095), aL8(e, aL7, "selectableSpawn", 0, 1), aL8(e, aL7, "playerNamesType", 0, 2),
			function(aL6, aL7, h1, size, max) {
				var a4m = aL6[h1];
				if (Array.isArray(a4m)) {
					for (var a4n = new Array(size), fS = Math.min(a4m.length, size), aC = 0; aC < fS; aC++) a4n[aC] = aLE(a4m[aC]) ? a4m[aC].slice(0, max) : "";
					a4n.fill("", fS), aL7[h1] = a4n
				}
			}(e, aL7, "playerNamesData", 512, 20), aL8(e, aL7, "selectableName", 0, 1), aL8(e, aL7, "aIncomeType", 0, 2), aL8(e, aL7, "aIncomeValue", 0, 255), aLB(e, aL7, "aIncomeData", 8, 512, 255), aL8(e, aL7, "tIncomeType", 0, 2), aL8(e, aL7,
				"tIncomeValue", 0, 255), aLB(e, aL7, "tIncomeData", 8, 512, 255), aL8(e, aL7, "iIncomeType", 0, 2), aL8(e, aL7, "iIncomeValue", 0, 255), aLB(e, aL7, "iIncomeData", 8, 512, 255), aL8(e, aL7, "sResourcesType", 0, 2), aL8(e, aL7,
				"sResourcesValue", 0, 2047), aLB(e, aL7, "sResourcesData", 16, 512, 2047), u.y(), u.z.uL[0] = 0, u.v(19))
	}

	function aL8(aL6, aL7, h1, min, max) {
		aL6 = aL6[h1];
		aL7[h1] = "number" == typeof aL6 && min <= aL6 && aL6 <= max ? Math.floor(aL6) : aL7[h1]
	}

	function aLE(ru) {
		return "string" == typeof ru
	}

	function aLB(aL6, aL7, h1, aLH, size, max) {
		var a4m = aL6[h1];
		if (Array.isArray(a4m)) {
			for (var a4n = new(8 === aLH ? Uint8Array : 16 === aLH ? Uint16Array : Uint32Array)(size), fS = Math.min(a4m.length, size), aC = 0; aC < fS; aC++) a4n[aC] = bO.ia(a4m[aC], 0, max);
			aL7[h1] = a4n
		}
	}
	this.aKv = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aKw, input.click()
	}, this.aKx = function() {
		for (var aL0, aEk, a7A = aE.data, keys = Object.keys(a7A), aKy = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a7A[key] instanceof Uint8Array || a7A[key] instanceof Uint16Array || a7A[key] instanceof Uint32Array ? aKy[key] = Array.from(a7A[key]) : aKy[key] = a7A[key]
		}
		aKy.canvas = 2 === aKy.mapType && aKy.canvas ? aKy.canvas.toDataURL() : null, aL0 = aKy, aL0 = JSON.stringify(aL0, null, 2), aL0 = new Blob([aL0], {
			type: "application/json"
		}), (aEk = document.createElement("a")).href = URL.createObjectURL(aL0), aEk.download = "tt_scenario.json", aEk.click()
	}
}

function cc() {
	var aLI, aLJ, size, jw, iB, aLK;

	function aLL(player) {
		return player < aE.kn ? aLI * player : aLI * aE.kn + aLJ * (player - aE.kn)
	}
	this.dk = function() {
		aLI = aE.kn < 16 ? 12 : 8, aLJ = 4;
		var fS = aLL(aE.fP);
		size = new Uint8Array(aE.fP), jw = new Uint16Array(fS), iB = new Uint32Array(fS), aLK = new Uint8Array(fS)
	}, this.rl = function(aA0, aLM) {
		var aLN = this.hV(aA0, aLM),
			aLM = (this.hT(aA0, aLM, 0), bD.go.gr(aA0, aLN));
		bg.gs(aA0, aLN - aLM, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aK5 = function(player, aLM) {
		var aLQ, aLM = function(player, aLM) {
			var aC, li = aLL(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (jw[li + aC] === aLM) return aC;
			return size[player]
		}(player, aLM);
		aLM !== size[player] && (aLQ = iB[aLL(player) + aLM], this.gt(player, aLM), this.ei(player, aLQ, aE.fP))
	}, this.k8 = function(player, aLM) {
		for (var li = aLL(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aLM) return !0;
		return !1
	}, this.kR = function(player) {
		return player < aE.kn ? size[player] < aLI : size[player] < aLJ
	}, this.gZ = function(player) {
		return size[player]
	}, this.ge = function(player, aC) {
		return jw[aLL(player) + aC]
	}, this.gf = function(player, aC) {
		return iB[aLL(player) + aC]
	}, this.hV = function(player, aLM) {
		for (var li = aLL(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aLM) return iB[li + aC];
		return 0
	}, this.aJw = function(player) {
		for (var li = aLL(player), fu = 0, aC = size[player] - 1; 0 <= aC; aC--) fu += iB[li + aC];
		return fu
	}, this.hT = function(player, aLM, aLQ) {
		for (var li = aLL(player), aC = size[player] - 1; 0 <= aC; aC--) jw[li + aC] === aLM && (iB[li + aC] = aLQ)
	}, this.hE = function(player, aC, aLQ) {
		iB[aLL(player) + aC] = Math.max(aLQ, 0)
	}, this.hF = function(player, aC) {
		aLK[aLL(player) + aC] = 0
	}, this.gg = function(player, aC) {
		return aLK[aLL(player) + aC]
	}, this.ei = function(player, aLQ, aLM) {
		ap.ja.kP[player] = ap.ja.kP[aLM] = 8, bD.go.a5Z(aLM) && bg.nJ[6 - bD.go.kA(player)]++;
		for (var li = aLL(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jw[li + aC] === aLM) return iB[li + aC] += aLQ, void(iB[li + aC] = iB[li + aC] > aE.a5h ? aE.a5h : iB[li + aC]);
		jw[li + size[player]] = aLM, iB[li + size[player]] = aLQ, aLK[li + size[player]] = 1, size[player]++, aLM === aE.fC ? aO.a2O(player, 5) : player < aE.kn && player === aE.fC && ag.a8c(aLM)
	}, this.gt = function(player, eI) {
		var fl, li;
		if (0 !== size[player])
			for (li = aLL(player), size[player]--, fl = eI; fl < size[player]; fl++) jw[li + fl] = jw[li + fl + 1], iB[li + fl] = iB[li + fl + 1], aLK[li + fl] = aLK[li + fl + 1]
	}, this.aJr = function(player) {
		for (var fl, li, aK2 = [], aC = am.lJ - 1; 0 <= aC; aC--)
			for (li = aLL(am.lO[aC]), fl = size[am.lO[aC]] - 1; 0 <= fl; fl--)
				if (jw[li + fl] === player) {
					aK2.push(am.lO[aC]);
					break
				} return aK2
	}
}

function cd() {
	var aLR;

	function aLT(player) {
		var eH, kS;
		return bD.go.kA(player) && player < aE.kn ? 0 : (eH = aLR[bO.ft((aE.fP - 1) * ah.hG[player], aE.kX)], bi.kk() < 1920 && (eH = Math.max(bO.ft(100 * (13440 - 6 * bi.kk()), 1920), eH)), kS = af.kT(player), ah.hU[player] > kS && (eH -= bO.ft(2 *
			eH * (ah.hU[player] - kS), kS)), Math.min(Math.max(eH, 0), 700))
	}

	function aLf(o0) {
		for (var hG = ah.hG, lO = am.lO, aC = am.lJ - 1; 0 <= aC; aC--) {
			var h0 = lO[aC];
			bD.go.gr(h0, bO.ft(o0 * hG[h0], 32))
		}
	}

	function aLc() {
		var ym = aE.fC;
		bR.fy[0] = ah.hU[ym] - ah.a5e[ym]
	}

	function aLe(eI) {
		var ym = aE.fC,
			ym = ah.hU[ym] - ah.a5e[ym] - bR.fy[0];
		af.aC6 += ym, bg.nJ[eI] += ym
	}
	this.aC6 = 0, this.dr = function() {
		for (var fS = aE.fP, aC = (aLR = new Uint16Array(fS), 0); aC < fS; aC++) aLR[aC] = 100 + aLS(bO.ft(25600 * aC, fS - 4), 9)
	}, this.dk = function() {
		(this.aC6 = 0) === aE.data.iIncomeType ? this.aDW = aLT : 1 === aE.data.iIncomeType ? this.aDW = function(player) {
			return bO.ft(aE.data.iIncomeValue * aLT(player), 64)
		} : this.aDW = function(player) {
			return bO.ft(aE.data.iIncomeData[player] * aLT(player), 64)
		}
	}, this.ee = function() {
		if (bi.kk() % 10 == 9 && (af.aC6 = 0, function() {
				aLc();
				for (var lO = am.lO, hU = ah.hU, aC = am.lJ - 1; 0 <= aC; aC--) {
					var h0 = lO[aC],
						aLd = bO.ft(af.aDW(h0) * hU[h0], 1e4);
					bD.go.gr(h0, Math.max(aLd, 1))
				}
				aLe(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aLc(), 1 === aE.data.aIncomeType)
						for (var hG = ah.hG, lO = am.lO, o0 = aE.data.aIncomeValue, aC = am.lJ - 1; 0 <= aC; aC--) {
							var h0 = lO[aC];
							bD.go.gr(h0, bO.ft(o0 * hG[h0], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hG = ah.hG, lO = am.lO, o0 = aE.data.aIncomeData, aC = am.lJ - 1; 0 <= aC; aC--) {
								var h0 = lO[aC];
								bD.go.gr(h0, bO.ft(o0[h0] * hG[h0], 128))
							}
						}();
					aLe(18)
				}
			}(), bi.kk() % 100 == 99)) {
			if (aLc(), 0 === aE.data.tIncomeType) aLf(32);
			else if (1 === aE.data.tIncomeType) aLf(aE.data.tIncomeValue);
			else
				for (var hG = ah.hG, lO = am.lO, o0 = aE.data.tIncomeData, aC = am.lJ - 1; 0 <= aC; aC--) {
					var h0 = lO[aC];
					bD.go.gr(h0, bO.ft(o0[h0] * hG[h0], 32))
				}
			aLe(8)
		}
	}, this.kT = function(player) {
		return Math.min(100 * ah.hG[player], aE.a6Y)
	}, this.qk = function(player, ql) {
		bt.r7(player, ql, bR.fz[0], 0), bD.go.gr(ql, bR.fz[0]), bg.r8(player, ql), ag.aLV(player, bR.fz[0] + bR.fz[1]), ag.r9(ql, bR.fz[0]), bD.go.mx(player)
	}, this.aLW = function() {
		for (var fS = am.lJ, a1z = am.lO, li = 0, a5f = ah.hU, aC = 0; aC < fS; aC++) li += a5f[a1z[aC]];
		return li
	}, this.aLX = function(aLY) {
		for (var h0, fS = am.lJ, a1z = am.lO, li = 0, a5f = ah.hU, fQ = bj.fQ, aC = 0; aC < fS; aC++) fQ[h0 = a1z[aC]] === aLY && (li += a5f[h0]);
		return li
	}
}

function cf() {
	var aLj, aLk, aLl, aLm, aLn, aLo, aLp, aLq, aLr, aLs, aLt, aLu, aLv, aLw, aLx, aLy, aLz, aM0, aM2, aM3, aEd, aM4, aM5, aMB, aMC, aM1 = null,
		aM7 = 0,
		aM8 = !1,
		aM9 = new Float32Array(4),
		aMA = 0,
		aCb = 112,
		aMD = 0;

	function sG() {
		aLr = Math.floor(+i.ic), aLs = Math.floor(.5 * aLr), aM1.width = i.j, aM1.height = i.k, aM2 = aM1.getContext("2d", {
			alpha: !0
		}), bD.sD.textAlign(aM2, 1), bD.sD.textBaseline(aM2, 1), aM2.imageSmoothingEnabled = !0
	}

	function aME() {
		var aC, aMJ;
		for (wm.font = bD.sD.u1(1, 100 * aLt), aMJ = 80 / Math.floor(wm.measureText(bD.tB.a1S(aE.a5h)).width), wm.font = bD.sD.u1(1, 100), aC = aE.fP - 1; 0 <= aC; aC--) aLq[aC] = 100 / Math.floor(wm.measureText(ah.a0e[aC]).width), aLp[aC] = Math
			.min(aMJ, aLq[aC])
	}

	function aMK(aC) {
		return !aMD || (aC = ah.hU[aC]) < 1e6 ? 1 : aC < 1e7 ? aM9[0] : aM9[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aMI(iU) {
		aM8 = !1, aM7 = bi.eZ, aM0 = !1, aLz = 1, aLx = aLy = 0, iU.clearRect(0, 0, i.j, i.k);
		for (var aMQ, aMR, aC, aMS, fontSize, aMT, no = j6 / ie, np = j7 / ie, o1 = (i.j + j6) / ie, o2 = (i.k + j7) / ie, aMU = 0 !== ah.nN[aE.fC] && !bD.go.kA(aE.fC), fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl], (fontSize = Math.floor(aLw * ie *
			aMK(aC) * aLp[aC] * aLn[aC])) < aLv || aLr <= fontSize || aLl[aC] + aLn[aC] > no && aLl[aC] < o1 && aLm[aC] + aLo[aC] > np && aLm[aC] < o2 && (aMQ = Math.floor(i.j * (aLl[aC] + aLn[aC] / 2 - no) / (o1 - no)), aMR = Math.floor(i.k * (
			aLm[aC] + aLo[aC] / 2 - np) / (o2 - np) - .1 * fontSize), aMS = ad.aAW[aC], iU.font = bD.sD.u1(1 === ah.a5V[aC] ? 4 : 1, fontSize), iU.fillStyle = aMV(fontSize, aMS % 2), aMD ? aMW(iU, aC, fontSize, aMQ, aMR, aMS) : aMX(aC,
			fontSize, aMQ, aMR, iU), aM0 = !0, 0 < aEd[aC] ? function(aMQ, aMR, fontSize, aC, iU) {
			0 === kY[aC] ? ak.tR.a1J(aM3[aC]) ? (function(aMQ, aMR, fontSize, player, qw, iU) {
				for (var zJ = aMR, iT = (iU.globalAlpha = aMf(fontSize), aMK(player) * (aMD ? aMA : aLq[player])), zI = aMQ - .5 * fontSize / iT - .9 * fontSize, fm = 0; fm < 2; fm++) iU.fillText(ak.tR.a1B(qw), zI, zJ), zI = aMQ +
					.5 * fontSize / iT + .9 * fontSize;
				iU.globalAlpha = 1
			}(aMQ, aMR, fontSize, aC, aM3[aC], iU), aMZ(aMQ, aMR, fontSize, 0, 0, iU)) : ak.tR.a1L(aM3[aC]) ? (aMi(aMQ, aMR, fontSize, aM3[aC], 0, iU), aMZ(aMQ, aMR, fontSize, 0, 1, iU)) : (aMi(aMQ, aMR, fontSize, aM3[aC], 1, iU), aMZ(
				aMQ, aMR, fontSize, 1, 0, iU)) : aMi(aMQ, aMR, fontSize, aM3[aC], 0, iU)
		}(aMQ, aMR, fontSize, aC, iU) : 0 === kY[aC] && aMZ(aMQ, aMR, fontSize, 0, 0, iU), aMU && (0 < aEd[aC + aE.fP] || 0 < aEd[aC + 2 * aE.fP] || 0 < aEd[aC + 3 * aE.fP] || 0 < aEd[aC + 4 * aE.fP]) && function(aMQ, aMR, fontSize, aC, iU) {
			var ej, gv = -1;
			for (ej = 4; 1 <= ej; ej--) 0 < aEd[aC + ej * aE.fP] && gv++;
			for (ej = 1; ej < 5; ej++) 0 < aEd[aC + ej * aE.fP] && (! function(aMQ, aMR, fontSize, ej, aC, aMd, ea, iU) {
				var a50;
				if (1 === ej) {
					aC = aM3[aC + aE.fP];
					if (!ak.tR.a1K(aC)) return function(aMQ, aMR, fontSize, qw, aMd, iU) {
						iU.globalAlpha = aMf(fontSize);
						aMQ -= .534 * aMd * fontSize, aMd = aMR + 1.59 * fontSize;
						iU.font = bD.sD.u1(0, .785 * fontSize), iU.fillText(ak.tR.a1B(qw), aMQ, aMd), iU.globalAlpha = 1
					}(aMQ, aMR, fontSize, aC, aMd, iU);
					a50 = ak.yl.a0k[aC - 1024 + ak.tR.a0w]
				} else a50 = 2 === ej ? aM.a7P()[4].canvas[+(ea < 255)] : (3 === ej ? aM.a7P()[5] : aM.a7P()[6]).canvas[0];
				aC = ak.yl.a0l, ea = .8 * fontSize / aC, ej = aMQ - .5 * ea * aC - .534 * aMd * fontSize, aMQ = aMR + 1.4 * ea * aC;
				iU.setTransform(ea, 0, 0, ea, ej, aMQ), iU.globalAlpha = aMf(fontSize), iU.drawImage(a50, 0, 0), iU.globalAlpha = 1, iU.setTransform(1, 0, 0, 1, 0, 0)
			}(aMQ, aMR, fontSize, ej, aC, gv, aEd[aC + ej * aE.fP], iU), gv -= 2)
		}(aMQ, aMR, fontSize, aC, iU), (aMT = aLt * fontSize) < aLv || (iU.font = bD.sD.u1(1, aMT), aMR += Math.floor(.78 * fontSize), aMD ? aMX(aC, aMT, aMQ, aMR, iU) : aMW(iU, aC, aMT, aMQ, aMR, aMS)))
	}

	function aMX(aC, fontSize, fZ, fb, iU) {
		var ___id = aC;
		var showName = aC < aE.kn || !__fx.settings.hideBotNames;
		if (showName) iU.fillText(ah.a0e[aC], fZ, fb), aC < aE.kn && 2 !== ah.a5V[aC] || (aC = fontSize / aLq[aC], iU.fillRect(fZ - .5 * aC, fb + bD.sD.a1C * fontSize, aC, Math.max(1, .1 * fontSize)));
		aMD && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iU.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iU.fillText(__fx.utils.getDensity(___id), fZ, showName ? fb + fontSize : fb)
		);
	}

	function aMW(iU, aC, fontSize, aMQ, aMR, aMS) {
		var a5e = ah.a5e[aC],
			aMc = bD.tB.a1S(ah.hU[aC] - a5e);

		function drawDensity() {
			!aMD && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iU.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), iU.fillText(__fx.utils.getDensity(aC), aMQ, aMR + fontSize))
		}
		a5e ? (a5e = iU.fillStyle, iU.fillStyle = aMV(fontSize, 2 + aMS % 2), iU.fillText(aMc, aMQ, aMR), iU.fillStyle = a5e) : aMS >> 1 & 1 ? (iU.lineWidth = .05 * fontSize, iU.strokeStyle = aMV(fontSize, aMS % 2), iU.strokeText(aMc, aMQ, aMR)) : (
			1 < aMS && (iU.lineWidth = .12 * fontSize, iU.strokeStyle = aMV(fontSize, aMS), iU.strokeText(aMc, aMQ, aMR)), iU.fillText(aMc, aMQ, aMR)), drawDensity()
	}

	function aMZ(aMQ, aMR, fontSize, aMd, aMe, iU) {
		var a7u = .95 * fontSize / aM5,
			aMQ = aMQ - .5 * a7u * aM4 + .8 * aMd * fontSize,
			aMd = aMR - 1.76 * a7u * aM5 - (.35 - bD.sD.a1C + .7) * aMe * fontSize;
		iU.setTransform(a7u, 0, 0, a7u, aMQ, aMd), iU.globalAlpha = aMf(fontSize), iU.drawImage(ac.get(4), 0, 0), iU.globalAlpha = 1, iU.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aMi(aMQ, aMR, fontSize, qw, aMd, iU) {
		var iO, zI, a7u;
		iU.globalAlpha = aMf(fontSize), ak.tR.a1K(qw) ? (iO = ak.yl.a0l, iU.setTransform(a7u = 1.1 * fontSize / iO, 0, 0, a7u, zI = aMQ - .5 * a7u * iO - .8 * aMd * fontSize, a7u = aMR - 1.55 * a7u * iO), iU.drawImage(ak.yl.a0k[qw - 1024 + ak.tR
			.a0w], 0, 0), iU.setTransform(1, 0, 0, 1, 0, 0)) : (zI = aMQ - .8 * aMd * fontSize, a7u = aMR - (.35 - bD.sD.a1C + 1) * fontSize, iU.fillText(ak.tR.a1B(qw), zI, a7u)), iU.globalAlpha = 1
	}

	function aMV(fontSize, aMS) {
		return aLs <= fontSize && fontSize < aLr ? bj.aMk[aMS] + aMf(fontSize).toFixed(3) + ")" : bj.aMl[aMS]
	}

	function aMf(fontSize) {
		return aLs <= fontSize && fontSize < aLr ? 1 - (fontSize - aLs) / (aLr - aLs) : 1
	}

	function aMu(iT, j) {
		return 1 + Math.floor(aLu * iT * j)
	}

	function aMr(aC) {
		for (var left = aLl[aC], fl = aLl[aC] - ah.jL[aC] - 1; 0 <= fl; fl--)
			if (!aMw(aC, --left, aLm[aC], aLo[aC])) {
				left++;
				break
			} var right = aLl[aC];
		for (fl = ah.jM[aC] - aLl[aC] - aLn[aC]; 0 <= fl; fl--)
			if (!aMw(aC, ++right + aLn[aC] - 1, aLm[aC], aLo[aC])) {
				right--;
				break
			} var fZ = Math.floor((left + right) / 2),
			top = aLm[aC];
		for (fl = aLm[aC] - ah.jN[aC] - 1; 0 <= fl; fl--)
			if (!aMx(aC, fZ, --top, aLn[aC])) {
				top++;
				break
			} var bottom = aLm[aC];
		for (fl = ah.jO[aC] - aLm[aC] - aLo[aC]; 0 <= fl; fl--)
			if (!aMx(aC, fZ, ++bottom + aLo[aC] - 1, aLn[aC])) {
				bottom--;
				break
			} var fb = Math.floor((top + bottom) / 2);
		aMo(aC, fZ, fb, aLn[aC], aLo[aC]) && (aLl[aC] = fZ, aLm[aC] = fb)
	}

	function aMo(player, fZ, fb, j, k) {
		fV = Math.floor(.2 * j);
		for (var fV, ej = fZ + j - 1; fZ <= ej; ej--)
			if (!aMw(player, ej, fb, k)) return;
		for (ej = fb + k - 1 - (fV = (fV = Math.floor(.25 * k)) < 1 ? 1 : fV); fb + fV <= ej; ej--)
			if (!aMx(player, fZ, ej, j)) return;
		return 1
	}

	function aMw(player, fZ, fb, k) {
		return ad.a0A(player, 4 * (fb * bV.fd + fZ)) && ad.a0A(player, 4 * ((fb + k - 1) * bV.fd + fZ))
	}

	function aMx(player, fZ, fb, j) {
		return ad.a0A(player, 4 * (fb * bV.fd + fZ)) && ad.a0A(player, 4 * (fb * bV.fd + fZ + j - 1))
	}
	this.dk = function() {
		if (aMD = bm.buffer.data[7].value || 8 === aE.l5, aM0 = !1, aLw = .88, aLt = .5, aLu = 1.8, aLv = 12 - 3 * bm.buffer.data[9].value, aLk = aLj = 0, aLl = new Uint16Array(aE.fP), aLm = new Uint16Array(aE.fP), aLn = new Uint16Array(aE.fP),
			aLo = new Uint16Array(aE.fP), aLp = new Float32Array(aE.fP), aLq = new Float32Array(aE.fP), aM3 = new Uint16Array(2 * aE.fP), aEd = new Uint8Array(5 * aE.fP), aMB = new Uint8Array(aE.fP), aMC = new Uint8Array(aE.fP), aM1 = aM1 ||
			document.createElement("canvas"), sG(), aLy = aLx = 0, aLz = 1, aMD) {
			var aC, aMJ;
			for (aME(), wm.font = bD.sD.u1(1, 100), aMJ = 100 / Math.floor(wm.measureText("900 000").width), aC = aE.fP - 1; 0 <= aC; aC--) aLp[aC] = Math.min(aMJ, 2 * aLq[aC]);
			aMA = aMJ, aM9[0] = 100 / (aMJ * Math.floor(wm.measureText("5 000 000").width)), aM9[1] = 100 / (aMJ * Math.floor(wm.measureText("50 000 000").width)), aM9[2] = 100 / (aMJ * Math.floor(wm.measureText("500 000 000").width)), aM9[3] =
				100 / (aMJ * Math.floor(wm.measureText("1 000 000 000").width))
		} else aME();
		! function() {
			var aC;
			for (aC = aE.fP - 1; 0 <= aC; aC--) ah.hG[aC] < 12 ? (aLl[aC] = ah.jL[aC] + 1, aLm[aC] = ah.jN[aC] + 1, aLn[aC] = 1, aLo[aC] = 1) : (aLl[aC] = ah.jL[aC], aLm[aC] = ah.jN[aC] + 1, aLn[aC] = 4, aLo[aC] = 2);
			if (aE.hq)
				for (aC = 0; aC < aE.kn; aC++) aLn[aC] = 0;
			aM4 = ac.get(4).width, aM5 = ac.get(4).height
		}()
	}, this.aLV = function(h0, a78) {
		a78 > 18 * ah.hG[h0] ? (aMC[h0] = 6, ad.aAW[h0] = 2 + ad.aAW[h0] % 2) : (aMB[h0] = 4, (ad.aAW[h0] < 2 || 3 < ad.aAW[h0]) && (ad.aAW[h0] = 6 + ad.aAW[h0] % 2))
	}, this.r9 = function(h0, a78) {
		a78 > 6 * ah.hG[h0] ? (aMC[h0] = 6, ad.aAW[h0] = 4 + ad.aAW[h0] % 2) : (aMB[h0] = 4, (ad.aAW[h0] < 4 || 5 < ad.aAW[h0]) && (ad.aAW[h0] = 8 + ad.aAW[h0] % 2))
	}, this.resize = function() {
		sG(), aMI(aM2)
	}, this.a6U = function() {
		for (var aC = 0; aC < aE.kn; aC++) ah.jM[aC] - ah.jL[aC] != 3 || ah.jO[aC] - ah.jN[aC] != 3 ? (aLl[aC] = ah.jL[aC] + (ah.jM[aC] !== ah.jL[aC] ? 1 : 0), aLm[aC] = ah.jN[aC], aLn[aC] = 1, aLo[aC] = 1) : (aLl[aC] = ah.jL[aC], aLm[aC] = ah
			.jN[aC] + 1, aLn[aC] = 4, aLo[aC] = 2)
	}, this.rm = function(player, eI, aML) {
		! function(player, eI, aML) {
			player += eI * aE.fP;
			0 === eI ? aM3[player] === aML && 0 < aEd[player] ? aEd[player] = 0 : (aM3[player] = aML, aEd[player] = ak.tR.a1J(aML) ? 255 : 64) : 1 === eI ? (aEd[player] = 64, aM3[player] = aML) : aEd[player] = aML
		}(player, eI, aML), 2 === aE.a2B && this.n9(!0)
	}, this.wl = function() {
		aM0 && (1 !== aLz ? (wm.imageSmoothingEnabled = !0, wm.setTransform(aLz, 0, 0, aLz, 0, 0), wm.drawImage(aM1, -aLx / aLz, -aLy / aLz), wm.setTransform(1, 0, 0, 1, 0, 0), wm.imageSmoothingEnabled = !1) : wm.drawImage(aM1, -aLx, -aLy))
	}, this.aBJ = function(ip, is) {
		aLx += ip, aLy += is
	}, this.a3h = function(ip, is) {
		ag.aBJ(ip, is)
	}, this.zoom = function(a4Z, m2, m3) {
		aLz *= a4Z, aLx = (aLx + m2) * a4Z - m2, aLy = (aLy + m3) * a4Z - m3
	}, this.aJs = function(player) {
		var jL = ah.jL[player],
			jM = ah.jM[player],
			jN = ah.jN[player],
			jO = ah.jO[player],
			j0 = bP.hi(0),
			j1 = bP.hk(0),
			j2 = bP.hi(i.j),
			j3 = bP.hk(i.k);
		jL < j2 && j0 < jM && jN < j3 && j1 < jO && (aLn[player] = 0, aM8 = !0)
	}, this.n9 = function(by) {
		return !(!aM8 && !by && bi.eZ < aM7 + (1 === aLz && 0 === aLx && 0 === aLy && (aE.a6x() || aE.hq || 2 === aE.a2B) ? 1e3 : aCb) || (aMI(aM2), 0))
	}, this.aMO = function(aC) {
		return aMK(aC) * aLp[aC]
	}, this.aMP = function(player) {
		return aLp[player]
	}, this.ee = function() {
		bi.kk() % 10 == 9 && (aM8 = aM8 || aE.a6z() && !aE.a6x()), !aE.a6x() && 4 <= ++aLk && function() {
			var aC, fl, fm;
			for (aLk = 0, fm = 4; 1 <= fm; fm--)
				for (fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl] + fm * aE.fP, 0 < aEd[aC] && aEd[aC] < 255 && aEd[aC]--;
			if (2 !== aE.a2B)
				for (fl = am.lJ - 1; 0 <= fl; fl--) aC = am.lO[fl], 0 < aEd[aC] && aEd[aC] < 255 && aEd[aC]--
		}();
		var aC, fl, fS = Math.floor(.1 * am.lJ);
		for (fS = (fS = fS < 8 ? 8 : fS) > am.lJ ? am.lJ : fS, aC = aLj + fS - 1; aLj <= aC; aC--) fl = aC % am.lJ, ! function(aC) {
			var iT = aMK(aC) * aLp[aC];
			0 < aLn[aC] && aMo(aC, aLl[aC], aLm[aC], aLn[aC], aLo[aC]) ? ! function(aC) {
				for (var fZ, fb, j, k, f6 = !1, fm = 0; fm < 8; fm++) {
					if (j = aLn[aC] + 2, k = aLo[aC] + 2, j > ah.jM[aC] - ah.jL[aC] + 1 || k > ah.jO[aC] - ah.jN[aC] + 1) return f6;
					if (fZ = aLl[aC] - 1, fb = aLm[aC] - 1, !aMo(aC, fZ, fb, j, k)) return f6;
					aLl[aC] = fZ, aLm[aC] = fb, aLn[aC] = j, aLo[aC] = k, f6 = !0
				}
				return f6
			}(aC) && function(aC, iT) {
				for (var fZ, fb, j, k, f6 = !1, aEm = aLn[aC], o0 = 1 + Math.floor(.02 * aEm), fm = 1; fm < 5; fm++) {
					if ((j = aEm + fm * o0) > ah.jM[aC] - ah.jL[aC] + 1) return f6;
					if ((k = aMu(iT, j)) > ah.jO[aC] - ah.jN[aC] + 1) return f6;
					fZ = ah.jL[aC] + Math.floor(Math.random() * (ah.jM[aC] - ah.jL[aC] + 2 - j)), fb = ah.jN[aC] + Math.floor(Math.random() * (ah.jO[aC] - ah.jN[aC] + 2 - k)), aMo(aC, fZ, fb, j, k) && (aLl[aC] = fZ, aLm[aC] = fb, aLn[
						aC] = j, aLo[aC] = k, f6 = !0)
				}
				return f6
			}(aC, iT) && aMr(aC) : ! function(aC, iT) {
				var k, fZ = aLl[aC] + 1,
					fb = aLm[aC] + 1,
					j = aLn[aC] - 2;
				for (;;) {
					if (j < 1) {
						aLn[aC] = 0;
						break
					}
					if (k = aMu(iT, j), aMo(aC, fZ, fb, j, k)) return aLl[aC] = fZ, aLm[aC] = fb, aLn[aC] = j, aLo[aC] = k, 1;
					fZ++, fb++, j -= 2
				}
				return
			}(aC, iT) ? function(aC, iT) {
				var fZ, fb, j, k, fm, o6, k3 = ah.jM[aC] - ah.jL[aC] + 1,
					aMv = Math.floor(.02 * k3);
				for (o6 = -6 * (aMv = aMv < 1 ? 1 : aMv), fm = k3; o6 <= fm; fm -= aMv)
					if (k = aMu(iT, j = 0 < fm ? fm : 1), fZ = ah.jL[aC] + Math.floor(Math.random() * (ah.jM[aC] - ah.jL[aC] + 2 - j)), fb = ah.jN[aC] + Math.floor(Math.random() * (ah.jO[aC] - ah.jN[aC] + 2 - k)), aMo(aC, fZ, fb, j, k))
						return aLl[aC] = fZ, aLm[aC] = fb, aLn[aC] = j, aLo[aC] = k
			}(aC, iT) : aMr(aC)
		}(am.lO[fl]);
		aLj = (aLj += fS) % am.lJ
	}, this.n3 = function() {
		var aC, h0, a1H, a1I;
		if (bi.kk() % 4 == 1)
			for (aC = am.lJ - 1; 0 <= aC; aC--) h0 = am.lO[aC], ad.aAW[h0] < 2 || ((a1H = Math.max(aMB[h0] - 1, 0)) === (a1I = Math.max(aMC[h0] - 1, 0)) ? 0 === a1H && (ad.aAW[h0] %= 2) : 0 === a1I && ad.aAW[h0] < 6 && (ad.aAW[h0] += 4), aMB[
				h0] = a1H, aMC[h0] = a1I)
	}, this.a8c = function(player) {
		var aC = player + 2 * aE.fP,
			ea = aEd[aC];
		return 0 < ea && (aO.a2J(50, player), aEd[aC] = 0, 255 === ea)
	}, this.a7e = function(player) {
		return 255 === aEd[player + 2 * aE.fP]
	}
}

function ch() {
	var aMy, aMz, aN0;
	this.dk = function() {
		aMy =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aMz =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aN0 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a8s = ["K ", " Y", "E ", " Z", " z", " s", "S "], aFe = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aMy.length - 1; 0 <= aC; aC--)
			for (var fl = a8s.length - 1; 0 <= fl; fl--) aMy[aC] = aMy[aC].replace(a8s[fl], aFe[fl]);
		if (__fx.settings.realisticNames) aMy = realisticNames;
	}, this.a6k = function() {
		var fS = aE.kn,
			a0e = ah.a0e,
			a2r = ah.a2r,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fS)
			for (var aC = 0; aC < fS; aC++) a0e[aC] = a2r[aC] = "Player " + az.k4(1e3);
		else
			for (aC = 0; aC < fS; aC++) a0e[aC] = a2r[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.l5) {
			for (var eH = az.random(), aN6 = aN0, aN7 = aMz, iB = aF.iB, fS = aN6.length, li = aE.data.teamPlayerCount[7], a0e = ah.a0e, a2r = ah.a2r, aC = li - 1; aC >= aE.kn; aC--) a0e[aC] = a2r[aC] = aN6[(aC + eH) % fS];
			for (fS = aN7.length - 1, aC = li; aC < aE.fP; aC++) a0e[aC] = a2r[aC] = aN7[iB[aC] ? fS : aC % fS]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fS = aE.fP, a0e = ah.a0e, a2r = ah.a2r, playerNamesData = aE.data.playerNamesData, aC = aE.kn; aC < fS; aC++) a0e[aC] = a2r[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a0e = ah.a0e, a2r = ah.a2r, aC = aE.kn; aC < aE.fP; aC++) a0e[aC] = a2r[aC] = "Bot " + az.k4(1e3)
		} : function() {
			for (var aN8 = aMy, fS = aN8.length, eH = az.random(), a0e = ah.a0e, a2r = ah.a2r, aC = aE.kn; aC < aE.fP; aC++) a0e[aC] = a2r[aC] = aN8[(aC + eH) % fS]
		})()
	}
}

function d0() {
	this.aN9 = [], this.aNA = [], this.dk = function() {
		this.aN9 = [], this.aNA = []
	}, this.ee = function() {
		0 <= this.aN9.length && this.aNB(this.aN9), 0 <= this.aNA.length && this.aNB(this.aNA)
	}, this.aNB = function(h) {
		for (var fm = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eZ--, h[aC].eZ <= 0) {
				fm = aC;
				break
			} for (aC = fm; 0 <= aC; aC--) h.shift()
	}, this.a7X = function(id, a1z, aNC) {
		return this.fn(this.aN9, id, a1z, aNC)
	}, this.aND = function(id, a1z, aNC) {
		return this.fn(this.aNA, id, a1z, aNC)
	}, this.fn = function(h, id, a1z, aNC) {
		return ! function(h, id, a1z) {
			var aC, iK;
			for (aC = a1z.length - 1; 0 <= aC; aC--)
				for (iK = h.length - 1; 0 <= iK; iK--)
					if (h[iK].player === a1z[aC] && id === h[iK].id) return 1;
			return
		}(h, id, a1z) && (aNC && function(h, id, a1z) {
			var aC;
			for (aC = a1z.length - 1; 0 <= aC; aC--) h.push({
				player: a1z[aC],
				id: id,
				eZ: 384
			})
		}(h, id, a1z), !0)
	}
}

function cg() {
	this.a2r = new Array(aE.fP), this.a0e = new Array(aE.fP), this.a5V = new Uint8Array(aE.fP), this.nN = new Uint8Array(aE.fP), this.jL = new Uint16Array(aE.fP), this.jN = new Uint16Array(aE.fP), this.jM = new Uint16Array(aE.fP), this.jO =
		new Uint16Array(aE.fP), this.hG = new Uint32Array(aE.fP), this.zk = new Uint32Array(aE.fP), this.hU = new Uint32Array(aE.fP), this.gu = null, this.h8 = null, this.h9 = null, this.fr = null, this.rc = new Uint16Array(aE.fP), this.jq =
		new Uint16Array(aE.fP), this.jr = new Uint16Array(aE.fP), this.a2m = new Uint16Array(aE.fP), this.a2k = new Uint8Array(aE.fP), this.a5e = new Uint16Array(aE.fP), this.dk = function() {
			this.a2r.fill(""), this.a0e.fill(""), this.a5V.fill(0), this.nN.fill(0), this.jL.fill(0), this.jN.fill(0), this.jM.fill(0), this.jO.fill(0), this.hG.fill(0), this.zk.fill(0), this.hU.fill(0), this.gu = new Array(aE.fP), this.h8 =
				new Array(aE.fP), this.h9 = new Array(aE.fP), this.fr = new Array(aE.fP), this.rc.fill(0), this.jq.fill(0), this.jr.fill(0), this.a2m.fill(0), this.a2k.fill(0), this.a5e.fill(0)
		}
}

function cy() {
	this.aF9 = function(player) {
		aH.nM(player), aE.a2D++, ah.a5V[player] = 2, ah.a2m[player] = bl.a31.aK1(), player === aE.fC && (aY.show(!1, !1), aX.aDI(), bU.a1w.a2i()), ag.a8c(player)
	}
}

function cZ() {
	this.lO = null, this.lJ = 0, this.a6o = function() {
		for (this.lJ = 0, aC = aE.fP - 1; 0 <= aC; aC--) 0 !== ah.nN[aC] && this.lJ++;
		this.lO = new Uint16Array(this.lJ);
		for (var fS = 0, aC = 0; aC < aE.fP; aC++) 0 !== ah.nN[aC] && (this.lO[fS++] = aC)
	}, this.n2 = function() {
		for (var hG = ah.hG, zk = ah.zk, a2k = ah.a2k, lO = am.lO, aC = am.lJ - 1; 0 <= aC; aC--) {
			var h0 = lO[aC],
				ea = hG[h0],
				li = zk[h0];
			ea <= bO.ft(li, 4) ? al.dt(h0) : li <= ea ? 250 <= (zk[h0] = ea) && (a2k[h0] = 1) : zk[h0] = li - Math.max(1, bO.ft(li - ea, 1e3))
		}
		this.aNH()
	}, this.aNH = function() {
		for (var nN = ah.nN, lh = this.lO, aE0 = this.lJ, aC = aE0 - 1; 0 <= aC; aC--) 0 === nN[lh[aC]] && (lh[aC] = lh[--aE0]);
		this.lJ = aE0
	}
}

function ca() {
	var aNI = new Uint16Array(aE.fP),
		aNJ = 0;

	function aNN(a8i, aNL) {
		var ej = bi.kk();
		return 3213 <= ej ? 4 + bO.ft(100 * aNL, af.kT(a8i)) : (a8i = 1 + bO.ft(aE.kX, 300), ej < 357 ? 2 + bO.ft(100 * aNL, a8i) : ej < 714 ? 2 + bO.ft(100 * aNL, 4 * a8i) : ej < 1071 ? 2 + bO.ft(100 * aNL, 10 * a8i) : ej < 2142 ? 2 + bO.ft(100 *
			aNL, 30 * a8i) : 2 + bO.ft(100 * aNL, 100 * a8i))
	}

	function aNM(a8i) {
		return aE.l7 || 4284 <= bi.kk() || bD.go.kA(a8i)
	}
	this.dk = function() {
		aNI.fill(0), aNJ = 15
	}, this.i6 = function(ql) {
		var player = aE.fC;
		return !!bD.go.re(player, ql) && !(!bD.go.r4(player, bD.go.j4(player, aS.hw()), ql) || (player = ql, ql = bR.fz[0], !aNM(player) && aNI[player] + aNN(player, ql) > aNJ))
	}, this.ei = function(a8i, aNL) {
		if (!aNM(a8i)) {
			aNL = aNN(a8i, aNL);
			if (aNI[a8i] + aNL > aNJ) return !1;
			aNI[a8i] += aNL
		}
		return !0
	}, this.ee = function() {
		bi.kk() % 100 == 99 && (bi.kk() < 1071 ? aNJ += 4 : bi.kk() < 2142 ? aNJ += 6 : bi.kk() < 3213 ? aNJ += 8 : aNJ += 10)
	}
}

function ci() {
	var aNO;
	this.lE = null, this.lD = 0, this.dk = function() {
		aNO = [], 9 === aE.l5 && this.aNP()
	}, this.aNP = function() {
		this.lE = [0, 0, 0, 0, 0, 0];
		for (var aNQ = [256, 227, 166, 148, 100, this.lD = 0, 0, 0], aNR = [0, 8, 24, 30, 46, 70, 256, 333], aNS = [0, 0, 3, 9, 17, 25, 256, 179], k = aE.kn, aC = 1; aC < aNQ.length; aC++)
			if (k <= aNR[aC]) {
				this.lD = aNQ[aC - 1] - bO.ft((k - aNR[aC - 1]) * (aNQ[aC - 1] - aNQ[aC]), aNR[aC] - aNR[aC - 1]), this.lE[5] = aNS[aC - 1] - bO.ft((k - aNR[aC - 1]) * (aNS[aC - 1] - aNS[aC]), aNR[aC] - aNR[aC - 1]), this.lE[0] = aE.fP - k - this
					.lD - this.lE[5];
				break
			} aE.l9 = aE.fP - aE.kn, aE.data.numberTeams = (0 < aE.kn) + (0 < aE.l9), aE.data.playerCount = aE.zG = aE.kn + aE.l9, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.kn + this.lD, aE.l9 - this.lD]), aE.a6d.a6i()
	}, this.aK8 = function(player) {
		aNO.push({
			player: player,
			gv: 14 + az.k4(20)
		})
	}, this.ee = function() {
		if (9 === aE.l5)
			for (var aC = aNO.length - 1; 0 <= aC; aC--) --aNO[aC].gv <= 0 && (ag.rm(aNO[aC].player, 0, ak.tR.a0z + ak.tR.a1D), aNO.splice(aC))
	}
}

function dH() {
	function aNi() {
		return {
			fd: bV.fd,
			fe: bV.fe,
			yi: bV.yi,
			ye: bV.ye,
			yf: bV.yf,
			yj: bV.yj,
			f8: bV.f8,
			mapSeed: bV.mapSeed,
			yg: bV.yg
		}
	}

	function aNa(aC) {
		return 1 !== aC && bV.aFo(aC) && aC !== bV.aNk()
	}
	this.aNU = 25, this.aNV = 13, this.aKK = 4096, this.fd = 0, this.fe = 0, this.yi = null, this.ye = null, this.yf = null, this.yj = null, this.f8 = 0, this.mapSeed = 0, this.yg = !1, this.yh = new aNW, this.yY = new aNX, this.a8z = new aNY, this
		.dk = function() {
			this.yY.dk()
		}, this.a8 = function(map, aNZ) {
			((map %= this.aNU) !== this.f8 || aNa(this.f8) && aNZ !== this.mapSeed) && (this.yg = !1, this.yh.aNb(), az.a6j(map), this.f8 = map, this.mapSeed = aNZ, aNa(map) && (bV.yY.yZ[map].aNc = aNZ), this.aFo(this.f8) ? (map = bV.yY.yZ[this.f8],
				this.fd = map.j, this.fe = map.k, az.a6j(map.aNc), ar.a8([this.fd, this.fe, map.nS, map.nP]), aNe(), aq.aNf(), ar.aNg()) : aNd())
		}, this.aNh = function(map, aNZ) {
			var gB = aNi(),
				map = (this.a8(map, aNZ), this.yh.aNb(), aNi());
			return aNZ = gB, bV.fd = aNZ.fd, bV.fe = aNZ.fe, bV.yi = aNZ.yi, bV.ye = aNZ.ye, bV.yf = aNZ.yf, bV.yj = aNZ.yj, bV.f8 = aNZ.f8, bV.mapSeed = aNZ.mapSeed, bV.yg = aNZ.yg, map
		}, this.a74 = function(canvas) {
			canvas && this.yi !== canvas && (this.fd = canvas.width, this.fe = canvas.height, this.yi = canvas, this.ye = this.yi.getContext("2d", {
				alpha: !1
			}), this.iR = this.ye.getImageData(0, 0, this.fd, this.fe), this.yj = this.iR.data, this.f8 = this.aNk(), this.mapSeed = 0, bV.yY.yZ[this.f8].name = aE.data.mapName)
		}, this.f7 = function(aC) {
			return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aNk()
		}, this.aNl = function(aC) {
			return 2 === aC || 7 === aC || 9 === aC || 20 === aC
		}, this.aNm = function(aC) {
			return 1 === aC
		}, this.aNk = function() {
			return this.aNU
		}, this.aFo = function(aC) {
			return void 0 === this.yY.yZ[aC].aNn
		}, this.a73 = function(s5) {
			return 0 === s5.mapType ? s5.mapProceduralIndex < 10 ? s5.mapProceduralIndex : 10 + s5.mapProceduralIndex : 1 === s5.mapType ? 10 <= s5.mapRealisticIndex ? 22 + s5.mapRealisticIndex - 10 : s5.mapRealisticIndex + 10 : void 0
		}, this.aFp = function(s5, aNo) {
			0 === s5.mapType ? s5.mapProceduralIndex = aNo < 10 ? aNo : aNo - 10 : 1 === s5.mapType && (s5.mapRealisticIndex = aNo - (22 <= aNo ? 12 : 10))
		}
}

function aNW() {
	function aNx() {
		bV.yh.ee()
	}

	function aO3(h0, aO2) {
		0 < aO2 && (bV.yj[h0] += aO2, bV.yj[h0 + 1] += aO2, bV.yj[h0 + 2] += aO2)
	}

	function ii(h0) {
		return bV.yj[h0 + 2] > bV.yj[h0] && bV.yj[h0 + 2] > bV.yj[h0 + 1]
	}
	this.aBV = -1, this.a3E = 0, this.aNp = 0, this.aNq = 8, this.aNr = 32, this.aNs = 8, this.aNt = 32, this.aNu = [0, 0], this.aAW = [0, 0, 0, 0], this.jF = null, this.aNv = !0, this.aNw = !1, this.aNb = function() {
		-1 !== this.aBV && clearTimeout(this.aBV), this.aBV = -1, this.jF = null, ar.aNg()
	}, this.dk = function() {
		7 === ab.a3K() || this.aNw || (this.aNv = !0, this.a3E = 0, this.aNp = 1, this.aNu = [bV.yY.yZ[bV.f8].z0[0], bV.yY.yZ[bV.f8].z1[0]], this.aAW = [bV.yY.yZ[bV.f8].aNn[3], bV.yY.yZ[bV.f8].aNn[4], bV.yY.yZ[bV.f8].aNn[5], bV.yY.yZ[bV.f8].aNn[
			6]], this.aNq = bV.yY.yZ[bV.f8].aNn[7], this.aNr = bV.yY.yZ[bV.f8].aNn[8], this.aNs = bV.yY.yZ[bV.f8].aNn[9], this.aNt = bV.yY.yZ[bV.f8].aNn[10], this.aNv ? this.aBV = setTimeout(aNx, 16) : this.ee())
	}, this.ee = function() {
		if (8 === ab.a3K() && aI.ng()) this.aBV = setTimeout(aNx, 16);
		else {
			if (0 === this.a3E) {
				var aNc = az.aNy();
				if (az.a6j(bV.yY.yZ[bV.f8].aNn[2]), ar.a8([bV.fd, bV.fe, bV.yY.yZ[bV.f8].aNn[0], bV.yY.yZ[bV.f8].aNn[1]]), az.a6j(aNc), this.jF = ar.aNz(), this.a3E++, this.aNv) return void(this.aBV = setTimeout(aNx, 16))
			}
			for (var h0, fE, aNc = this.aNv ? 10 : 1e6, aNc = bV.fe - this.aNp - 1 < aNc ? bV.fe - this.aNp - 1 : aNc, zx = this.aNp + aNc, fb = this.aNp; fb < zx; fb++)
				for (var fZ = 1; fZ < bV.fd - 1; fZ++) ii(h0 = 4 * (fE = fZ + fb * bV.fd)) ? this.aO0(h0, fE, 1) : (this.aO0(h0, fE, 0), function(fZ, fb, h0) {
					return 1 < fZ && ii(h0 - 4) || fZ < bV.fd - 2 && ii(h0 + 4) || 1 < fb && ii(h0 - 4 * bV.fd) || fb < bV.fe - 2 && ii(h0 + 4 * bV.fd)
				}(fZ, fb, h0) && this.aO1(fZ, fb));
			this.aNp = zx, this.aNp >= bV.fe - 1 ? (bV.ye.putImageData(bV.yf, 0, 0, 1, 1, bV.fd - 2, bV.fe - 2), bi.ds = !0, this.aNb()) : this.aNv && (this.aBV = setTimeout(aNx, 16))
		}
	}, this.aO0 = function(h0, fE, eI) {
		aO3(h0, Math.floor(this.aNu[eI] + this.aAW[eI] * this.jF[fE] / 1e4) - bV.yj[h0])
	}, this.aO4 = function(h0, eH, aO5, eI, aAW) {
		aO3(h0, Math.floor(this.aNu[eI] + (1 - eH / aO5) * aAW) - bV.yj[h0])
	}, this.aO1 = function(m2, m3) {
		for (var h0, eH, aO5, aBL = m2 - this.aNr, aO6 = m3 - this.aNr, zy = m2 + this.aNr, zx = m3 + this.aNr, aBL = aBL < 1 ? 1 : aBL, zy = zy > bV.fd - 2 ? bV.fd - 2 : zy, zx = zx > bV.fe - 2 ? bV.fe - 2 : zx, fb = aO6 < 1 ? 1 : aO6; fb <=
			zx; fb++)
			for (var fZ = aBL; fZ <= zy; fZ++) ii(h0 = 4 * (fZ + fb * bV.fd)) ? (aO5 = this.aNq + (this.aNr - this.aNq) * this.jF[fZ + bV.fd * fb] / 1e4, Math.abs(m2 - fZ) > aO5 || Math.abs(m3 - fb) > aO5 || aO5 <= (eH = Math.sqrt((m2 - fZ) * (
				m2 - fZ) + (m3 - fb) * (m3 - fb))) || this.aO4(h0, eH, aO5, 1, this.aAW[3])) : (aO5 = this.aNs + (this.aNt - this.aNs) * this.jF[fZ + bV.fd * fb] / 1e4, Math.abs(m2 - fZ) > aO5 || Math.abs(m3 - fb) > aO5 || aO5 <= (eH = Math
				.sqrt((m2 - fZ) * (m2 - fZ) + (m3 - fb) * (m3 - fb))) || this.aO4(h0, eH, aO5, 0, this.aAW[2]))
	}
}

function aNe() {
	var oF = aO7(bV.f8);
	oF && aO8(oF[0], oF[1], oF[2], oF[3], oF[4])
}

function aO7(f8) {
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

function aO8(aO9, aOA, aOB, aOC, aOD) {
	for (var fZ, fb, aKg, aKh, a4Z, aOG, io = aO9.length - 1, aOE = bV.fd + bV.fe, fS = (aOE *= aOE, aOB.length), aOF = Array(fS), aC = fS - 1; 0 <= aC; aC--) aOF[aC] = aOB[aC] * aOB[aC];
	var aOH = new Array(fS),
		aEa = new Array(fS),
		aOI = new Array(fS),
		fu = ar.aNz();
	if (void 0 === aOD)
		for (aOD = new Array(fS), aC = fS - 1; 0 <= aC; aC--) aOD[aC] = 0;
	for (aC = 1; aC < fS; aC++) aOH[aC] = aOF[aC] - aOF[aC - 1], aEa[aC] = aOC[aC] - aOC[aC - 1], aOI[aC] = aOD[aC] - aOD[aC - 1];
	for (fZ = bV.fd - 1; 0 <= fZ; fZ--)
		for (fb = bV.fe - 1; 0 <= fb; fb--) {
			for (aKg = aOE, aC = io; 0 <= aC; aC--) aKg = (aKh = (fZ - aO9[aC]) * (fZ - aO9[aC]) + (fb - aOA[aC]) * (fb - aOA[aC])) < aKg ? aKh : aKg;
			for (a4Z = aOC[fS - 1], aOG = aOD[fS - 1], aC = 1; aC < fS; aC++)
				if (aKg < aOF[aC]) {
					a4Z = aOC[aC - 1] + aJS((aKg - aOF[aC - 1]) * aEa[aC], aOH[aC]), aOG = aOD[aC - 1] + aJS((aKg - aOF[aC - 1]) * aOI[aC], aOH[aC]);
					break
				} aOJ(bV.fd * fb + fZ, a4Z, aOG, fu)
		}
}

function aOJ(eI, a4Z, aOG, fu) {
	a4Z < 500 ? fu[eI] = bO.ft(fu[eI] * a4Z * 2, 1e3) : 500 < a4Z && (fu[eI] += bO.ft(2 * (1e4 - fu[eI]) * (a4Z - 500), 1e3)), fu[eI] += bO.ft(aOG * (10 * a4Z - fu[eI]), 1e3)
}

function ck() {
	var aOK;

	function aOU(a50, iT, fZ, fb, globalAlpha) {
		bV.ye.save(), bV.ye.globalAlpha = globalAlpha, bV.ye.imageSmoothingEnabled = !1, bV.ye.scale(iT, iT), bV.ye.drawImage(a50, Math.floor(fZ * (bV.fd / iT - a50.width)), Math.floor(fb * (bV.fe / iT - a50.height))), bV.ye.restore()
	}
	this.a8w = 0, this.a8x = 0, this.a8y = 0, this.a8z = 0, this.dk = function() {
		(aOK = new Array(bV.aNU))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eH: [220, 250, 255, 220],
			uq: [190, 220, 0, 0],
			fm: [170, 200, 0, 0]
		}, aOK[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eH: [25, 0, 100, 0, 25],
			uq: [25, 0, 0, 0, 25],
			fm: [25, 0, 0, 0, 25]
		}, aOK[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eH: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			uq: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fm: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aOK[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eH: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			uq: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fm: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aOK[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eH: [10, 10, 20, 10, 10, 170, 212],
			uq: [20, 20, 60, 100, 100, 110, 170],
			fm: [70, 70, 160, 30, 30, 60, 120]
		}, aOK[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eH: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			uq: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aOK[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eH: [10, 10, 60, 255, 255, 200, 200],
			uq: [10, 10, 60, 255, 255, 200, 200],
			fm: [80, 80, 255, 255, 255, 200, 200]
		}, aOK[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			uq: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aOK[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eH: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			uq: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aOK[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			uq: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aOK[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eH: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			uq: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fm: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aOK[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eH: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			uq: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fm: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aNf = function() {
		var aOT, aC, fl, gB, iR = function() {
				var iR;
				return bV.yi = document.createElement("canvas"), bV.yi.width = bV.fd, bV.yi.height = bV.fe, bV.ye = bV.yi.getContext("2d", {
					alpha: !1
				}), iR = bV.ye.getImageData(0, 0, bV.fd, bV.fe), bV.yj = iR.data, iR
			}(),
			j = aOK[bV.f8].j,
			eH = aOK[bV.f8].eH,
			uq = aOK[bV.f8].uq,
			fm = aOK[bV.f8].fm,
			fu = ar.aNz(),
			fS = j.length - 2,
			aOO = new Array(1 + fS),
			aOP = new Array(1 + fS),
			aOQ = new Array(1 + fS),
			aOR = new Array(1 + fS);
		for (fl = fS; 0 <= fl; fl--) aOO[fl] = j[fl + 1] - j[fl], aOP[fl] = eH[fl + 1] - eH[fl], aOQ[fl] = uq[fl + 1] - uq[fl], aOR[fl] = fm[fl + 1] - fm[fl];
		for (aC = bV.fd * bV.fe - 1; 0 <= aC; aC--)
			for (fl = fS; 0 <= fl; fl--)
				if (fu[aC] >= j[fl]) {
					gB = fu[aC] - j[fl], bV.yj[4 * aC] = eH[fl] + aJS(aOP[fl] * gB, aOO[fl]), bV.yj[4 * aC + 1] = uq[fl] + aJS(aOQ[fl] * gB, aOO[fl]), bV.yj[4 * aC + 2] = fm[fl] + aJS(aOR[fl] * gB, aOO[fl]), bV.yj[4 * aC + 3] = 255;
					break
				} bV.ye.putImageData(iR, 0, 0), bV.aNm(bV.f8) && ac.uu() && bV.aNm(bV.f8) && (iR = ac.aId("arena"), aOT = ac.aId("territorial.io"), aOU(iR, 5, .5, .5, .1), aOU(aOT, 2, .5, .45, .1)), bV.yg = !0, bi.ds = !0
	}, this.a6m = function() {
		for (var h0, fZ, fb, aOV, iI, gD, a8x = 0, j = bV.fd, k = bV.fe, gB = j * k * 4, aOW = aE9, aOX = bV.yj, aC = j - 1; 0 <= aC; aC--) aOW[(h0 = aC << 2) + 2] = aOW[gB - h0 - 2] = 3;
		for (gB = 4 * j, aC = k - 1; 0 <= aC; aC--) aOW[(h0 = aC * gB) + 2] = aOW[h0 + gB - 2] = 3;
		for (aOV = j - 1, iI = k - 1, fb = 1; fb < iI; fb++)
			for (gB = fb * j, fZ = 1; fZ < aOV; fZ++) gD = 1 - (aOX[(h0 = gB + fZ << 2) + 2] > aOX[h0 + 1] && aOX[h0 + 2] > aOX[h0]), aOW[h0 + 2] = 6 - 5 * gD, a8x += gD;
		this.a8w = (j - 2) * (k - 2), this.a8z = 0, bV.f7(bV.f8) && (bV.a8z.aOY(), bV.a8z.aOZ(4, 5)), this.a8x = aE.kX = a8x - this.a8z, this.a8y = this.a8w - this.a8x - this.a8z, this.a8y && (bV.a8z.aOZ(6, 2), bV.a8z.aOa())
	}
}

function aNd() {
	var ru;
	10 === bV.f8 ? ru =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.f8 ? ru =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.f8 ? ru =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.f8 ? ru =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.f8 ? ru =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.f8 ? ru =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.f8 ? ru =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.f8 ? ru =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.f8 ? ru =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.f8 ? ru =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.f8 ? ru =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.f8 ? ru =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.f8 && (ru =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new yR).yT(ru)
}

function aNX() {
	this.yZ = null, this.aOb = null, this.aOc = null, this.dk = function() {
		this.aOd = [L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), "Mare Nostrum"];
		var aOe = [120, 105, 92],
			cos = [12, 12, 60],
			aOf = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aOg = [140, 130, 120],
			aOh = [12, 12, 76],
			aOi = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aOj = [130, 117, 106],
			aOk = [12, 12, 68],
			aOl = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.yZ = new Array(bV.aNU + 1), this.yZ[0] = {
			j: 230,
			k: 230,
			nS: 1e3,
			nP: 2e3,
			aNc: 173
		}, this.yZ[1] = {
			j: 800,
			k: 800,
			nS: 100,
			nP: 50,
			aNc: 43
		}, this.yZ[2] = {
			j: 512,
			k: 512,
			nS: 128,
			nP: 32,
			aNc: 0
		}, this.yZ[3] = {
			j: 960,
			k: 960,
			nS: 60,
			nP: 8,
			aNc: 0
		}, this.yZ[4] = {
			j: 900,
			k: 900,
			nS: 100,
			nP: 5,
			aNc: 0
		}, this.yZ[5] = {
			j: 1e3,
			k: 1e3,
			nS: 100,
			nP: 40,
			aNc: 0
		}, this.yZ[6] = {
			j: 1e3,
			k: 1e3,
			nS: 100,
			nP: 20,
			aNc: 0
		}, this.yZ[7] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aNc: 0
		}, this.yZ[8] = {
			j: 820,
			k: 820,
			nS: 200,
			nP: 100,
			aNc: 0
		}, this.yZ[9] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aNc: 0
		}, this.yZ[10] = {
			z0: aOg,
			z1: aOh,
			aNn: aOi
		}, this.yZ[11] = {
			z0: aOj,
			z1: aOk,
			aNn: aOl
		}, this.yZ[12] = {
			z0: aOj,
			z1: aOk,
			aNn: aOl
		}, this.yZ[13] = {
			z0: aOe,
			z1: cos,
			aNn: aOf
		}, this.yZ[14] = {
			z0: aOe,
			z1: cos,
			aNn: aOf
		}, this.yZ[15] = {
			z0: aOg,
			z1: aOh,
			aNn: aOi
		}, this.yZ[16] = {
			z0: aOg,
			z1: aOh,
			aNn: aOi
		}, this.yZ[17] = {
			z0: aOe,
			z1: cos,
			aNn: aOf
		}, this.yZ[18] = {
			z0: aOj,
			z1: aOk,
			aNn: aOl
		}, this.yZ[19] = {
			z0: aOe,
			z1: cos,
			aNn: aOf
		}, this.yZ[20] = {
			j: 1024,
			k: 1024,
			nS: 128,
			nP: 32,
			aNc: 0
		}, this.yZ[21] = {
			j: 940,
			k: 940,
			nS: 80,
			nP: 8,
			aNc: 0
		}, this.yZ[22] = {
			z0: aOj,
			z1: aOk,
			aNn: aOl
		}, this.yZ[23] = {
			z0: aOg,
			z1: aOh,
			aNn: aOi
		}, this.yZ[24] = {
			z0: [157, 136, 117],
			z1: [16, 13, 68],
			aNn: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8v: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aNU; aC++) this.yZ[aC].name = this.aOd[aC];
		this.yZ[bV.aNU] = {
			name: ""
		}, this.aOb = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aOb[aC] = aC;
		for (this.aOb[10] = 20, this.aOb[11] = 21, this.aOc = new Uint8Array(bV.aNV), aC = 0; aC < 10; aC++) this.aOc[aC] = 10 + aC;
		this.aOc[10] = 22, this.aOc[11] = 23, this.aOc[12] = 24
	}
}

function aNY() {
	this.aOY = function() {
		for (var h0, fZ, gB, aOW = aE9, aOX = bV.yj, j = bV.fd, aOV = j - 1, iI = bV.fe - 1, gv = 0, fb = 1; fb < iI; fb++)
			for (gB = fb * j, fZ = 1; fZ < aOV; fZ++) aOX[h0 = gB + fZ << 2] === aOX[1 + h0] && aOX[h0] === aOX[2 + h0] && (gv++, aOW[2 + h0] = 4);
		aq.a8z = gv
	}, this.aOZ = function(aOo, aOp) {
		for (var aOW = aE9, j = bV.fd, aOV = j - 1, iI = bV.fe - 1, id = 0, fb = 1; fb < iI; fb++)
			for (var gB = fb * j, fZ = 1; fZ < aOV; fZ++) {
				var f6 = 2 + (gB + fZ << 2);
				aOW[f6] === aOo && (! function(f6, id, aOo, aOp) {
					var fS = 1,
						aOW = aE9,
						fU = ad.aJJ,
						a4m = [f6],
						aOr = id >> 8 << 1,
						aOs = 255 & id;
					aOW[f6 - 2] = aOr, aOW[f6 - 1] = aOs, aOW[f6] = 5;
					for (; fS;) {
						for (var a4n = [], aC = 0; aC < fS; aC++)
							for (var fH = a4m[aC], fV = 0; fV < 8; fV++) {
								var fW = fH + fU[fV];
								aOW[fW] === aOo && (aOW[fW - 2] = aOr, aOW[fW - 1] = aOs, aOW[fW] = aOp, a4n.push(fW))
							}
						fS = (a4m = a4n).length
					}
				}(f6, id, aOo, aOp), id = (id + 1) % 32768)
			}
	}, this.aOa = function() {
		for (var aOW = aE9, j = bV.fd, aOV = j - 3, iI = bV.fe - 3, aOu = 12 * j, fb = 3; fb < iI; fb++)
			for (var gB = fb * j, fZ = 3; fZ < aOV; fZ++) {
				var f6 = 2 + (gB + fZ << 2);
				2 !== aOW[f6] || 2 === aOW[f6 - 12] && 2 === aOW[12 + f6] && 2 === aOW[f6 - aOu] && 2 === aOW[f6 + aOu] || (aOW[f6 - 2] = 1 | aOW[f6 - 2])
			}
	}
}

function a6l() {
	(a0J = void 0 === a0J ? document.createElement("canvas") : a0J).width = bV.fd, a0J.height = bV.fe, a6p = a0J.getContext("2d", {
		alpha: !0
	}), a6q = aE9 = null, a6q = a6p.getImageData(0, 0, bV.fd, bV.fe), aE9 = a6q.data, bD.sL.yk(aE9)
}

function cl() {
	var fu, j, k, max, aOv, nP, aOx, aOy, aOz, aP0, aP1, aP2, aP3, aP4, aOw = 1e4;

	function aPB(aPA, nS, fS) {
		var aC;
		for (aOx[0] = aPA, aC = 1; aC < fS; aC++) aOx[aC] = aOx[aC - 1] + nS, nS = aOx[aC] >= aOw ? (aOx[aC] = aOw - 1, -nS) : aOx[aC] < 0 ? (aOx[aC] = 0, -nS) : (nS += 16384 <= az.random() ? nP : -nP) < -aOv ? -aOv : aOv < nS ? aOv : nS
	}

	function aPD(fZ, fb, aPE, fS) {
		(aPE ? function(fZ, fb, fS) {
			var aC;
			for (aC = 0; aC < fS; aC++) fu[fb * j + fZ + aC] = aOx[aC]
		} : function(fZ, fb, fS) {
			var aC;
			for (aC = 0; aC < fS; aC++) fu[fb * j + fZ + aC * j] = aOx[aC]
		})(fZ, fb, fS)
	}

	function aPH(value, fS) {
		var aC, aMv, f6, k2 = value - aOx[fS - 1];
		if (0 != k2) {
			for (aMv = 1 + bO.ft(Math.abs(k2), fS - 1), aMv = k2 < 0 ? -aMv : aMv, aOx[fS - 1] = value, f6 = (f6 = fS - 1 - bO.ft(Math.abs(k2), Math.abs(aMv))) < 1 ? 1 : fS - 2 < f6 ? fS - 2 : f6, aC = fS - 2; f6 <= aC; aC--) aOx[aC] += k2 - (fS -
				1 - aC) * aMv;
			(k2 < 0 ? function(fS) {
				var aC;
				for (aC = fS - 2; 1 <= aC; aC--) aOx[aC] < 0 && (aOx[aC] = -aOx[aC] - 1)
			} : function(fS) {
				var aC;
				for (aC = fS - 2; 1 <= aC; aC--) aOx[aC] >= aOw && (aOx[aC] = 2 * aOw - aOx[aC] - 1)
			})(fS)
		}
	}

	function aPK(a4m, a4n, fS) {
		for (var aC = 0; aC < fS; aC++) a4m[aC] = a4n[aC]
	}

	function aPL(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aPM(a7R, gap, iJ) {
		aOy.push(a7R), aOz.push(gap), aP0.push(iJ)
	}
	this.a8 = function(a5z) {
		! function(a5z) {
			var aC;
			for (j = a5z[0], k = a5z[1], aOv = a5z[2], nP = a5z[3], fu = new Int16Array(j * k), max = k < j ? j : k, aOx = new Int16Array(max), aOy = [], aOz = [], aP0 = [], aP1 = new Array(j), aP2 = new Array(k), aC = j - 1; 0 <= aC; aC--) aP1[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aP2[aC] = !1;
			aP3 = new Int16Array(j), aP4 = new Int16Array(k)
		}(a5z),
		function(fS) {
			var aPA = az.random() % aOw,
				nS = az.random() % (2 * aOv + 1) - aOv;
			aPB(aPA, nS, fS)
		}(max), aPK(aP4, aOx, k), aPD(0, 0, !0, j);
		var fZ, fb, a5z = fu[0],
			fS = max,
			nS = az.random() % (2 * aOv + 1) - aOv;
		for (aPB(a5z, nS, fS), aPK(aP3, aOx, j), aPD(0, 0, !1, k), aPL(aP3), aPL(aP4), aPB(fu[j - 1], aP3[j - 1], k), aPD(j - 1, 0, !1, k), aPB(fu[j * (k - 1)], aP4[k - 1], j), aPH(fu[j * k - 1], j), aPD(0, k - 1, !0, j), aP1[j - 1] = aP1[0] = !
			0, aP2[k - 1] = aP2[0] = !0, aPM(0, j, !0), aPM(0, k, !1), ! function() {
				var aPO, a7R;
				for (;;) {
					if (aPO = function() {
							var aC, aPO = aOy.length - 1;
							for (aC = aPO - 1; 0 <= aC; aC--) aOz[aC] > aOz[aPO] && (aPO = aC);
							return aPO
						}(), aOz[aPO] < 5) return;
					a7R = aOy[aPO] + bO.ft(aOz[aPO], 2), (aP0[aPO] ? function(fZ) {
						var fS, aPR, aC, aHz = 0,
							aPS = 0;
						for (; aPS < k - 1;) {
							for (aC = aHz + 1; aC < k; aC++)
								if (aP2[aC]) {
									aPS = aC;
									break
								} fS = aPS - aHz + 1, aPB(fu[fZ + j * aHz], 0 === aHz ? aP3[fZ] : aOx[aPR - 1] - aOx[aPR - 2], fS), aPH(fu[aPS * j + fZ], fS), aPD(fZ, aHz, !1, fS), aPR = fS, aHz = aPS
						}
						aP1[fZ] = !0
					} : function(fb) {
						var fS, aPR, aC, aHz = 0,
							aPS = 0;
						for (; aPS < j - 1;) {
							for (aC = aHz + 1; aC < j; aC++)
								if (aP1[aC]) {
									aPS = aC;
									break
								} fS = aPS - aHz + 1, aPB(fu[fb * j + aHz], 0 === aHz ? aP4[fb] : aOx[aPR - 1] - aOx[aPR - 2], fS), aPH(fu[fb * j + aPS], fS), aPD(aHz, fb, !0, fS), aPR = fS, aHz = aPS
						}
						aP2[fb] = !0
					})(a7R), aPM(a7R, aOy[aPO] + aOz[aPO] - a7R, aP0[aPO]), aOz[aPO] = a7R - aOy[aPO] + 1
				}
			}(), fZ = 0; fZ < j; fZ++)
			if (!aP1[fZ])
				for (fb = 0; fb < k; fb++) aP2[fb] || ! function(fZ, fb) {
					var value = fu[fb * j + fZ - 1] + fu[(fb - 1) * j + fZ],
						a9E = 2;
					aP1[fZ + 1] && (a9E++, value += fu[fb * j + fZ + 1]);
					aP2[fb + 1] && (a9E++, value += fu[(fb + 1) * j + fZ]);
					fu[fb * j + fZ] = bO.ft(value, a9E)
				}(fZ, fb)
	}, this.aNz = function() {
		return fu
	}, this.aNg = function() {
		fu = null
	}
}

function aJS(fl, fm) {
	return 0 <= fl ? bO.ft(fl, fm) : -bO.ft(-fl, fm)
}

function kJ(fu) {
	return fu * fu
}

function a8Q(fl, fm) {
	return fm < fl ? fl : fm
}

function aDe(fl, fm) {
	return fl < fm ? fl : fm
}

function aAq(fl, fu, fm) {
	return fu < fl ? fl : fm < fu ? fm : fu
}

function aPU(fu, fS) {
	for (var ej = bO.ft(fu + 1, 2), aC = 0; aC < fS; aC++) ej = bO.ft(ej + bO.ft(fu, ej), 2);
	return ej
}

function aLS(fu, fS) {
	return fu < 1 ? 0 : aPU(fu, fS)
}

function aPV(no, np, uZ, aAZ, o1, o2, ua, vH) {
	return !(no + uZ <= o1 || np + aAZ <= o2 || o1 + ua <= no || o2 + vH <= np)
}

function aPW(no, np, uZ, aAZ, o1, o2, ua, vH) {
	return no <= o1 && np <= o2 && o1 + ua <= no + uZ && o2 + vH <= np + aAZ
}

function yb(fu) {
	return Math.floor(!!fu * (1 + Math.log2(fu + .5)))
}

function c1() {
	this.ft = function(fl, fm) {
		return Math.floor((fl + .5) / fm)
	}, this.aPX = function(fl, fm) {
		return Math.floor(fl * (fm + .5))
	}, this.sqrt = function(fu) {
		return ~~Math.sqrt(fu + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ia = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aPY = function(gB, gD, gF) {
		return Math.max(Math.min(gB, gD), gF)
	}, this.aPZ = function(aPa, aPb, fZ, fb) {
		fZ -= aPa, aPa = fb - aPb, fb = 0;
		return 0 == fZ ? fb = 0 <= aPa ? Math.PI : 0 : (fb = Math.atan(aPa / fZ), fb += 0 < fZ ? .5 * Math.PI : 1.5 * Math.PI), fb
	}, this.log2 = function(fu) {
		return Math.floor(!!fu * (1 + Math.log2(fu + .5)))
	}, this.log10 = function(fu) {
		return Math.floor(Math.log10(fu + .5))
	}, this.aPd = function(aPe, aPf, aPg, aPh, aPi) {
		return aPg - aPi < aPe && aPe < aPg + aPi && aPh - aPi < aPf && aPf < aPh + aPi
	}, this.zY = function(aBG, aBI) {
		return aBG * aBG + aBI * aBI
	}
}

function dJ() {
	this.z = new aPj, this.uT = 0;
	var aPk = new Array(32);

	function aPn() {
		for (var fS = aPk.length, aC = 0; aC < fS; aC++) aPk[aC] = null
	}
	this.dk = function() {
		for (var aPl, aPm = document.body.firstChild; aPm;) aPl = aPm.nextSibling, !document.body.contains(aPm) || "DIV" !== aPm.tagName && "INPUT" !== aPm.tagName && "BUTTON" !== aPm.tagName || u.removeChild(document.body, aPm), aPm = aPl
	}, this.v = function(eI, a3P, a5z) {
		void 0 === a3P && (a3P = this.uT), bi.ds = !0, 0 === eI && (0 === ab.a3K() ? eI = 5 : a1.a2.setState(13)), this.tS(), this.uT === eI && (a3P = aPk[eI].a3P, aPk[eI] = null), this.uT = eI;
		var li = aPk[eI];
		if (!li || 4 === eI || 7 === eI || 8 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 15 === eI || 18 === eI || 20 <= eI && eI <= 28 || 32 === eI || 33 === eI) {
			if (0 === eI) return void aPn();
			1 === eI ? li = new aPo : 2 === eI ? li = new aPp : 3 === eI ? li = new aPq : 4 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 33 === eI ? li = a5z : 5 === eI ? li = new aPr : 6 === eI ? li = new aPs : 7 === eI ? li =
				new aPt(u.z.aPu) : 8 === eI ? li = a5z : 12 === eI ? li = new aPv : 14 === eI ? li = new aPw : 15 === eI ? li = new aPt(u.z.aPx) : 16 === eI ? li = new aPy : 17 === eI ? li = new aPz : 18 === eI ? li = new aQ0 : 19 === eI ? li =
				new aQ1 : 20 === eI ? li = new aQ2 : 21 === eI ? li = new aQ3 : 22 === eI ? li = new aQ4 : 23 === eI ? li = new aQ5 : 24 === eI ? li = new aQ6 : 25 === eI ? li = new aQ7 : 26 === eI ? li = new aQ8 : 27 === eI ? li = new aQ9 :
				28 === eI ? li = new aQA : 29 === eI ? li = new aQB : 30 === eI ? li = new aQC : 31 === eI ? li = new aQD : 32 === eI && (li = new aQE), li.a3P = a3P, aPk[eI] = li
		}
		li.show(a5z)
	}, this.a3J = function() {
		this.iE() && this.aQF(this.a3O().a3P)
	}, this.aQF = function(eI) {
		this.iE() && (aPk[eI] ? (this.tS(), bi.ds = !0, this.uT = eI, aPk[eI].show()) : this.v(eI))
	}, this.tS = function() {
		this.iE() && aPk[this.uT].tS()
	}, this.y = function() {
		this.iE() && (aPk[this.uT].tS(), aPn(), this.uT = 0, a1.a2.setState(13))
	}, this.wl = function() {
		var li;
		this.iE() && (li = aPk[this.uT]).wl && li.wl()
	}, this.resize = function() {
		if (!this.iE()) return !1;
		aPk[this.uT].resize()
	}, this.hf = function(fZ, fb) {
		var li;
		this.iE() && (li = aPk[this.uT]).hf && li.hf(fZ, fb)
	}, this.a3h = function(fZ, fb) {
		var li;
		this.iE() && (li = aPk[this.uT]).a3h && li.a3h(fZ, fb)
	}, this.a45 = function() {
		var li;
		this.iE() && (li = aPk[this.uT]).a45 && li.a45()
	}, this.a3k = function(m2, m3, deltaY) {
		var li;
		this.iE() && (li = aPk[this.uT]).a3k && li.a3k(m2, m3, deltaY)
	}, this.a4F = function(code) {
		var li;
		return !!this.iE() && ((li = aPk[this.uT]).a4F && li.a4F(code), !0)
	}, this.ee = function() {
		var li;
		this.iE() && (li = aPk[this.uT]) && li.ee && li.ee()
	}, this.iE = function() {
		return 0 < this.uT
	}, this.a3O = function() {
		return aPk[this.uT]
	}, this.a7C = function(eI) {
		return aPk[eI]
	}, this.aQG = function() {
		return aPk
	}, this.removeChild = function(oa, ob) {
		try {
			oa.removeChild(ob)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aPt(data) {
	var aQH, aQI;

	function aQL(s8, aR4) {
		if (!data.aQJ) {
			if (data.aQx) {
				if (aR4) return
			} else {
				if (!aR4) return;
				if (data.xy < 1e4) return
			}
			var aR7, aQd = new rq,
				aR5 = 1e5 <= data.xy,
				aR6 = aQd.rt(aR4 ? (aR5 ? "⚠️ " : "") + L(255) : L(256)),
				aR9 = (aR5 && (aR6.style.color = "yellow"), aR4 ? aQd.rv(L(257, [bD.tB.a6G(data.xy, .01, 0)])) : ((aR7 = new t0({
					value: data.aR8,
					eI: -1
				})).e.readOnly = !0, aR7.e.type = "password", aQd.s4(aR7), aQd.s4(new te([new x(L(191), function(e) {
					return e.textContent === L(191) ? (e.textContent = L(192), aR7.e.type = "text") : (e.textContent = L(191), aR7.e.type = "password"), !0
				}).button, new x(L(188), function(e) {
					return bD.sD.a5T(aR7.e), bD.sD.wP(e), !0
				}).button]))), aQd.rz(L(aR4 ? 256 : 258)).style.marginTop = "0.75em", new t0({
					value: "",
					eI: -1
				}, 0, 0)),
				aRB = (aR9.e.type = "email", aR9.e.autocomplete = "email", aR9.e.name = "email", aR9.e.inputMode = "email", aR9.e.spellcheck = !1, aQd.s4(aR9), aQd.s4(new te([new x(L(259), function(e) {
					return b1.aHN.aRA({
						action: 3,
						ru: aR9.e.value.trim().substring(0, 63)
					}), bD.sD.wP(e), !0
				}).button])), aR4 && aQd.rv(L(260)), aQd.rz(L(261)).style.marginTop = "0.75em", new t0({
					value: "",
					eI: -1
				}, 1));
			aQd.s4(aRB), aQd.s4(new te([new x(L(262), function() {
				b1.aHN.aHO({
					action: 4,
					uR: "",
					value: Math.floor(+aRB.e.value)
				}), u.v(8, u.a3O().a3P, new uU(18))
			}).button])), s8.push(aQd)
		}
	}
	this.show = function() {
		data.aQJ && bL.aRU("account", data.uR), aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(data.username, [new x("⬅️ " + L(40), function() {
		bL.clear(), u.a3J()
	}), new x(data.aQJ ? "🔄 " + L(164) : L(165), function() {
		u.v(8, data.aQJ ? u.a3O().a3P : void 0, new uU(25, {
			action: 0,
			uR: data.uR,
			uS: data.uS
		}))
	}, 0, 0, 1)]), aQI = new s6(aQH.wc, function() {
		var s8 = [];
		aQL(s8, 1), s8.push(function() {
				var aQd = new rq;
				aQd.rt(L(228)), data.aQx && (aQd.rz("✅ " + L(229)).style.marginBottom = "0.75em");
				var a2v = data.aQy;
				a2v < 1 ? (aQd.rz(L(230)), 0 === data.aQz ? aQd.rv(L(231)) : 1 === data.aQz ? aQd.rv(L(232)) : 2 === data.aQz ? aQd.rv(L(233)) : 3 === data.aQz ? aQd.rv(L(234)) : 4 === data.aQz ? aQd.rv(L(235)) : 5 === data.aQz ? aQd.rv(
					L(236)) : 6 === data.aQz ? aQd.rv(L(237)) : aQd.rv(L(238))) : (aQd.rz(L(239)), a2v = a2v < 2 ? L(240) : a2v < 61 ? 2 === a2v ? L(241) : L(242, [a2v - 1]) : a2v < 84 ? 61 === a2v ? L(243) : L(244, [a2v - 60]) :
					a2v < 255 ? 84 === a2v ? L(245) : L(246, [a2v - 83]) : L(247), aQd.rv(a2v));
				{
					var rw, aQi;
					aQd.s4(new tp), data.aQJ && (rw = aQd.rv(), aQd.s4(new te([new x(bm.x9.vj(data.uR) ? L(248) : L(249), function(e) {
						return bm.x9.xM(data.uR) ? (e.textContent = L(248), aQi(1)) : (e.textContent = L(249), aQi(0)), !0
					}).button])), aQi = function(fu) {
						rw.textContent = fu ? L(250) : ""
					}, bm.x9.vj(data.uR) && aQi(1), aQd.s4(new tp))
				}
				var sH, sz = new t0({
					value: data.username,
					eI: -1
				});
				sz.e.readOnly = !0, aQd.s4(sz), aQd.s4(new te([new x(L(188), function(e) {
					return bD.sD.a5T(sz.e), bD.sD.wP(e), !0
				}).button])), data.aQJ || aQd.rv(L(251));
				(data.aR0 || data.aR1 || data.aR2) && (aQd.s4(new tp), aQd.rv(L(252)), data.aR0 && (aQd.rv("• Account Timeout").style.color = "orange"), data.aR1 && ((sH = aQd.rv("• Muted")).style.color = "orange", sH.style.marginTop =
					"0.5em"), data.aR2) && ((sH = aQd.rv("• Redacted")).style.color = "orange", sH.style.marginTop = "0.5em");
				data.aQJ && (aQd.s4(new tp), aQd.rz(b1.z.aQe("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aQd.s4(new te([new x(L(253), function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 0
					}), bD.sD.wP(e), !0
				}, bE.pw).button])), aQd.s4(new te([new x(L(254), function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 1
					}), bD.sD.wP(e), !0
				}, bE.pw).button])), aQd.s4(new te([new x("Cheater", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 2
					}), bD.sD.wP(e), !0
				}, bE.pw).button])), aQd.s4(new te([new x("False Reporter", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 3
					}), bD.sD.wP(e), !0
				}, bE.pw).button])), a2v = "CRTOR" === (a2v = bm.buffer.data[105].value) || "ADMIN" === a2v) && (aQd.s4(new te([new x("Block Account", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 4
					}), bD.sD.wP(e), !0
				}, bE.pu).button])), aQd.s4(new te([new x("Ban IP", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 5
					}), bD.sD.wP(e), !0
				}, bE.pu).button])), aQd.s4(new te([new x("Gold Seizure", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 6
					}), bD.sD.wP(e), !0
				}, bE.pu).button])), aQd.s4(new te([new x("Remove Punishments", function(e) {
					return b1.aHN.aHO({
						action: 3,
						uR: data.uR,
						value: 7
					}), bD.sD.wP(e), !0
				}, bE.pj).button])));
				return aQd
			}()),
			function(s8) {
				var aQd, rw, aEP, aRD, aQj, aQl, aQk;
				data.aQJ || ((aQd = new rq).rt(L(263)), (rw = aQd.rv(data.aRC.length + " / 160")).style.textAlign = "center", aEP = !0, (aRD = new wu(0, 1, function(e) {
					e = e.target.value.length;
					rw.textContent = e + " / 160", 160 < e ? aEP && (aEP = !1, aQl.sX(1)) : aEP || (aEP = !0, aQl.sX(0))
				})).e.rows = 6, aRD.e.style.fontSize = "1em", aRD.x0(data.aRC), aQd.s4(aRD), 0 !== data.aRE ? (aQl = new x(L(264), function() {
					if (!aEP) return !0;
					u.v(8, u.a3O().a3P, new uU(29, {
						action: 1,
						ru: aRD.x1().substring(0, 160)
					}))
				}, 0, 0, 1), aQd.s4(new te([aQl.button])), aQd.s4(new te([new x(1 === data.aRE ? L(265) : L(266), function() {
					u.v(8, u.a3O().a3P, new uU(29, {
						action: 0,
						ru: ""
					}))
				}, 0, 0, 1).button])), aQd.rv(1 === data.aRE ? L(267, [data.aRF - 1]) : L(268, [data.aRF - 1])), aQd.rv(L(269, [data.aRG]))) : (aQj = new x(L(270), function() {
					if (!aRD.e.readOnly) return !0;
					u.v(8, u.a3O().a3P, new uU(29, {
						action: 1,
						ru: aRD.x1().substring(0, 160)
					}))
				}, 1), aQl = new x(L(185), function(e) {
					if (e.textContent === L(185)) {
						if (!aEP) return !0;
						e.textContent = L(186), aRD.e.readOnly = !0, aQj.sX(0), aQj.button.style.color = bE.qG
					} else aQk();
					return !0
				}), aQd.s4(new te([aQl.button])), aQd.rv(L(269, [data.aRG])), aQk = function() {
					aQl.button.textContent = L(185), aRD.e.readOnly = !1, aQj.sX(1), aQj.button.style.color = bE.pH
				}, aQd.s4(new te([aQj.button]))), s8.push(aQd))
			}(s8),
			function(s8) {
				var aQd;
				data.aQJ && 0 !== data.aRE && ((aQd = new rq).rt(L(271)), aQd.rx(data.aRC), aQd.s4(new te([new x(L(272, 0, "Report"), function(e) {
					return b1.z.ef(0) && (bD.sD.wP(e), b1.aHN.aRH({
						action: 5,
						uR: data.uR
					})), !0
				}, 0, 0, 1).button])), s8.push(aQd))
			}(s8), s8.push(function() {
				var aQd = new rq,
					aQf = (aQd.rt(L(166)), aQd.rz(b1.z.aQe("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180)]),
					eH = data.aQg;
				return aQd.rz(L(181) + bD.tB.a6G(data.xy, .01, 2) + "<br>" + L(182) + (eH + 1) + " / " + data.xx + "<br>" + L(183) + aQf[function(eH, xy) {
					if (eH < 10) return 0;
					if (eH < 30) return 1;
					if (eH < 60) return 2;
					if (3e4 <= (xy = bO.ft(xy, 100))) return 3;
					if (12e3 <= xy) return 4;
					if (7e3 <= xy) return 5;
					if (3e3 <= xy) return 6;
					if (1e3 <= xy) return 7;
					if (500 <= xy) return 8;
					if (200 <= xy) return 9;
					if (70 <= xy) return 10;
					if (20 <= xy) return 11;
					if (3 <= xy) return 12;
					return 13
				}(eH, data.xy)]), aQd
			}()), data.aQJ && s8.push(function() {
				var aQd = new rq,
					sz = (aQd.rt(L(184)), aQd.rz(b1.z.aQe("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new t0({
						value: bm.buffer.data[147].value,
						eI: -1
					}, 1, void 0, function(e) {
						bm.qh.qi(147, aQi(e.target.value))
					})),
					aQj = (aQd.s4(sz), new x(L(14), function(e) {
						return sz.e.readOnly && b1.z.ef(0) && (bD.sD.wP(e), aQk(), b1.aHN.aHO({
							action: 0,
							uR: data.uR,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aQl = new x(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), sz.e.readOnly = !0, aQj.sX(0), aQj.button.style.color = bE.qG, bm.qh.qi(147, sz.e.value), aQi(bm.buffer.data[147].value)) : aQk(), !0
					}),
					rw = (aQd.s4(new te([aQl.button])), aQd.rv()),
					aQi = function(fu) {
						rw.innerHTML = u.z.aQm(fu, bm.buffer.data[105].value, data.uR)
					},
					aQk = function() {
						aQl.button.textContent = L(185), sz.e.readOnly = !1, aQj.sX(1), aQj.button.style.color = bE.pH
					};
				return aQi(bm.buffer.data[147].value), aQd.s4(new te([aQj.button])), aQd
			}());
		s8.push(function() {
			var aQd = new rq,
				sz = (aQd.rt(L(187)), new t0({
					value: data.uR,
					eI: -1
				})),
				aQn = (sz.e.readOnly = !0, aQd.s4(sz), aQd.s4(new te([new x(L(188), function(e) {
					return bD.sD.a5T(sz.e), bD.sD.wP(e), !0
				}).button])), aQd.s4(new tp), new t0({
					value: data.uR,
					eI: -1
				}));
			return aQd.s4(aQn), aQd.s4(new te([new x(L(189), function(e) {
				u.v(8, u.a3O().a3P, new uU(25, {
					action: 0,
					uR: aQn.e.value,
					uS: 0
				}))
			}).button])), aQd
		}()), data.aQJ || (s8.push(function() {
			var aQd = new rq,
				aQo = (aQd.rt(L(190)), new t0(bm.buffer.data[106]));
			return aQo.e.readOnly = !0, aQo.e.type = "password", aQd.s4(aQo), aQd.s4(new te([new x(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aQo.e.type = "text") : (e.textContent = L(191), aQo.e.type = "password"), !0
			}).button, new x(L(188), function(e) {
				return bD.sD.a5T(aQo.e), bD.sD.wP(e), !0
			}).button])), aQd.s4(new te([new x(L(193), function() {
				u.v(8, u.a3O().a3P, new uU(15))
			}).button])), aQd.rt(L(194), "0.8em"), aQd.rv(L(195)), aQd.rv(L(196)), aQd.rv(L(197)), aQd
		}()), s8.push(function() {
			var aQd = new rq;
			return aQd.rt(L(198)), aQd.s4(new te([new x(L(199), function() {
				u.v(6, u.a3O().a3P)
			}).button])), aQd.s4(new te([new x(L(200), function() {
				bm.qh.qi(105, ""), u.v(8, u.a3O().a3P, new uU(18))
			}).button])), aQd.s4(new te([new x(L(201) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(202), L(203), !0, [new x("⬅️ " + L(40), function() {
					u.v(7, u.a7C(7).a3P)
				})]))
			}, bE.pw).button])), aQd
		}()), s8.push(function() {
			function aQq(eI) {
				aQp[0].sX(0 === eI ? bE.pT : bE.pe), aQp[1].sX(0 === eI ? bE.pT : bE.pw)
			}
			var s2, aQp, aQd = new rq;
			aQd.rt(L(207)), aQd.rv(L(208)), bm.z.xh();
			return aQp = [new x(L(209), function() {
				var eI = Math.min(bm.buffer.data[117].value, s2.s3.length - 1);
				eI < 1 || (eI = bm.z.xl(eI), bm.qh.qi(105, eI.uR), bm.qh.qi(106, eI.password), u.v(8, u.a3O().a3P, new uU(18)))
			}, bE.pT, 1), new x(L(206), function() {
				var eI = Math.min(bm.buffer.data[117].value, s2.s3.length - 1);
				if (!(eI < 1)) {
					s2.s3[eI].remove(), s2.s3.splice(eI, 1);
					for (var aC = eI; aC < s2.s3.length; aC++) s2.s3[aC].name = "" + aC;
					bm.z.xk(eI), eI = bm.buffer.data[117].value, s2.s3[eI].textContent = s2.s3[eI].textContent.replace("⚪", "🟢"), aQq(eI)
				}
			}, bE.pT, 1)], s2 = new wS(bm.buffer.data[117], aQq), aQq(0), s2.s3[0].style.marginTop = "0.5em", aQd.s1(s2), aQd.s4(new te([aQp[0].button])), aQd.s4(new te([aQp[1].button])), aQd
		}()));
		return s8.push(function() {
				var aQd = new rq,
					aQf = (aQd.rt(L(213)), [L(214), L(215), L(216), L(217)]),
					eH = data.aQr;
				return aQd.rz(L(218) + (data.a2e / 100).toFixed(2) + "<br>" + L(182) + (eH + 1) + " / " + data.xx + "<br>" + L(183) + aQf[eH < 10 ? 0 : eH < 50 ? 1 : eH < 200 ? 2 : 3]), aQd
			}()), s8.push(function() {
				var aQd = new rq;
				return aQd.rt(L(210)), aQd.rz(L(211) + bD.tB.a6G(data.xu, .1, 1) + "<br>" + L(182) + (data.xv + 1) + " / " + data.xx + "<br>" + L(212) + data.xw), aQd
			}()),
			function(s8) {
				var aQd = new rq,
					aRI = data.y1,
					aRJ = (aQd.rt(L(273)), aQd.rz(L(274, [data.xz.length ? "[" + data.xz + "]" : "-"])), aQd.rz(L(275, [bD.tB.a6G(aRI, .01, 2)])), aQd.rz(L(276, [data.y3 + 1 + " / " + data.xx])), data.y4),
					aRK = (aQd.rz(L(277, [bD.tB.a6G(aRJ, .1, 1)])), data.y6);
				aQd.rz(L(278, [aRK])), aQd.rz(L(279, [bD.tB.a6G(aRJ / Math.max(aRK, 1), .1, 2)])), aRI = data.y2, aQd.rt(L(280), "0.8em"), aQd.rz(L(274, [data.y0.length ? "[" + data.y0 + "]" : "-"])), aQd.rz(L(275, [bD.tB.a6G(aRI, .01, 2)])),
					aRJ = data.y5, aQd.rz(L(277, [bD.tB.a6G(aRJ, .1, 1)])), aRK = data.y7, aQd.rz(L(278, [aRK])), aQd.rz(L(279, [bD.tB.a6G(aRJ / Math.max(aRK, 1), .1, 2)])), aQd.rz(b1.z.aQe("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					s8.push(aQd)
			}(s8),
			function(s8) {
				var aQd = new rq;
				aQd.rt(L(281)), aQd.rz(L(218) + (data.aRL / 10).toFixed(1) + "<br>" + L(183) + (data.aRM.length ? L(282, [data.aRM]) : L(283))), data.aQJ && aQd.s4(new te([new x(L(284), function(e) {
					return b1.z.ef(0) && (bD.sD.wP(e), b1.aHN.aRH({
						action: 4,
						uR: data.uR
					})), !0
				}, 0, 0, 1).button]));
				aQd.rz(b1.z.aQe("/wiki/clans"), "0.75em").style.marginTop = "0.8em", s8.push(aQd)
			}(s8), s8.push(function() {
				var aQd = new rq;
				if (aQd.rt(L(225)), aQd.rz(L(226) + data.aQu + "<br>" + L(182) + (data.aQv + 1) + " / " + data.xx + "<br>" + L(183) + br.eK(data.aQv)), data.aQJ) {
					var sz = new t0({
							value: bm.buffer.data[157].value,
							eI: -1
						}, 1, void 0, function(e) {
							bm.qh.qi(157, aQi(e.target.value))
						}),
						aQl = (sz.e.style.marginTop = "0.6em", aQd.s4(sz), new x(L(185), function(e) {
							return e.textContent === L(185) ? (e.textContent = L(186), sz.e.readOnly = !0, aQw[0].sX(0), aQw[1].sX(0), aQw[0].button.style.color = bE.qG, aQw[1].button.style.color = bE.qG, aQi(bm.buffer.data[157]
								.value)) : aQk(), !0
						})),
						aQw = (aQd.s4(new te([aQl.button])), [new x("−", function(e) {
							return sz.e.readOnly && b1.z.ef(0) && (bD.sD.wP(e), aQk(), b1.aHN.aHO({
								action: 2,
								uR: data.uR,
								value: bO.ia(parseInt(bm.buffer.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new x("+", function(e) {
							return sz.e.readOnly && b1.z.ef(0) && (bD.sD.wP(e), aQk(), b1.aHN.aHO({
								action: 1,
								uR: data.uR,
								value: bO.ia(parseInt(bm.buffer.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						rw = aQd.rv(),
						aQi = function(fu) {
							return fu = bD.go.a5w(fu, 3, 32767), rw.textContent = L(227, [fu - 1, fu, bm.buffer.data[105].value]), fu
						};
					aQd.s4(new te([aQw[0].button, aQw[1].button]));
					for (var aC = 0; aC < 2; aC++) aQw[aC].button.style.fontSize = "1.6em";
					var aQk = function() {
						aQl.button.textContent = L(185), sz.e.readOnly = !1, aQw[0].sX(1), aQw[1].sX(1), aQw[0].button.style.color = bE.pH, aQw[1].button.style.color = bE.pH
					};
					aQi(bm.buffer.data[157].value)
				}
				return aQd
			}()),
			function(s8) {
				var aQd, a5S;
				data.aQJ && !data.aRN || (0 === a1.id || data.aQJ || data.aRN) && ((aQd = new rq).rt("Patreon"), !data.aQJ && data.aRO ? aQd.s4(new te([new x(L(191), function() {
					b1.aHN.aRH({
						action: 7,
						uR: data.uR
					}), data.aRO = 0, u.v(7)
				}).button])) : data.aRN ? (aQd.rz(L(285, [(data.aRP / 100).toFixed(2)]) + "<br>" + L(286, [1 + data.aRQ + " / " + data.aRR]) + "<br>" + L(287, [data.aRS ? L(288) : L(289)])), data.aQJ || aQd.s4(new te([new x(L(290),
					function() {
						b1.aHN.aRH({
							action: 8,
							uR: data.uR
						}), data.aRN = 0, bm.qh.qi(160, 0), u.v(7)
					}).button]))) : (aQd.rz(L(291), "0.75em").style.marginBottom = "0.3em", aQd.rz("  • " + L(292), "0.75em").style.whiteSpace = "pre", aQd.rz("  • " + L(293), "0.75em").style.whiteSpace = "pre", aQd.rz("  • " + L(
						294), "0.75em").style.whiteSpace = "pre", aQd.rz(L(295), "0.75em").style.marginTop = "1.0em", aQd.rz(L(296), "0.75em").style.marginTop = "1.0em", aQd.rz("<a href='" + bN.aRT +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a5S = "https://www.patreon.com/oauth2/authorize?state=" + data.uR +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a2b() + "/", aQd.rz(L(297), "0.75em").style.marginTop = "1.0em", aQd.rz("<a href='" +
						a5S + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aQJ || (aQd.s4(new tp), aQd.s4(new te([new x(L(192), function() {
						b1.aHN.aRH({
							action: 6,
							uR: data.uR
						}), data.aRO = 1, u.v(7)
					}).button])), aQd.rz(L(298), "0.75em").style.marginTop = "0.75em")), s8.push(aQd))
			}(s8), s8.push(function() {
				var aQd = new rq,
					aQf = (aQd.rt(L(219)), [L(220), L(221), L(222), L(223), "Scout", L(224)]),
					eH = data.aQs;
				return aQd.rz(L(218) + (data.aQt / 100).toFixed(2) + "<br>" + L(182) + (eH + 1) + " / " + data.xx + "<br>" + L(183) + aQf[eH < 3 ? 0 : eH < 20 ? 1 : eH < 100 ? 2 : eH < 500 ? 3 : eH < 2e3 ? 4 : 5]), aQd.rz(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", aQd
			}()),
			function(s8) {
				var aQd, s2, aQp, eI, aQq;
				data.aQJ || bm.x9.get().length && ((aQd = new rq).rt(L(204)), eI = 0, aQq = function() {
					var aE4 = bm.x9.get().length;
					aQp[0].sX(eI === aE4 ? bE.pT : bE.pe), aQp[1].sX(eI === aE4 ? bE.pT : bE.pw)
				}, aQp = [new x(L(205), function() {
					u.v(8, void 0, new uU(25, {
						action: 0,
						uR: bm.x9.get()[eI],
						uS: 0
					}))
				}, bE.pT, 1), new x(L(206), function() {
					bm.x9.xO(eI), s2.s3[eI].remove(), s2.s3.splice(eI, 1);
					for (var aC = eI; aC < s2.s3.length; aC++) s2.s3[aC].name = "" + aC;
					bm.x9.get().length && (eI = Math.max(eI - 1, 0), s2.s3[eI].textContent = s2.s3[eI].textContent.replace("⚪", "🟢")), aQq()
				}, bE.pT, 1)], aQq(), (s2 = new wS(bm.x9.xL(), function(aC) {
					eI = aC, aQq()
				})).s3[0].style.marginTop = "0.5em", aQd.s1(s2), aQd.s4(new te([aQp[0].button])), aQd.s4(new te([aQp[1].button])), s8.push(aQd))
			}(s8), aQL(s8, 0), s8
	}())
}

function aQ4() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.aIncomeType ? (bD.sL.a4q(aRX.x1(), aE.data.aIncomeData, 255), bD.sL.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(299), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(301), L(302), L(303)],
			value: aE.data.aIncomeType
		}, function(eI) {
			aRa(), 2 !== eI || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fP)), aE.data.aIncomeType = eI, u.v(22)
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd;
		1 === aE.data.aIncomeType && ((aQd = new rq).rt("Value"), aQd.s4(new t0({
			eI: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), s8.push(aQd))
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.aIncomeType && ((aQd = new rq).rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.aIncomeData, 4)), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aQ7() {
	var aRV, aRW, aRX;

	function aRY() {
		aRa(), 3 !== aE.data.botDifficultyType || bD.sL.a4e(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		3 === aE.data.botDifficultyType && bD.sL.a4q(aRX.x1(), aE.data.botDifficultyData, aF.ky.length - 1)
	}

	function aRf(s8, eI) {
		var aQd = new rq,
			value = (aQd.rt(eI < 0 ? L(65) : L(64) + " " + bj.a2X[eI % 9]), 0 <= eI && (aQd.rz(L(306) + ": " + aE.data.teamPlayerCount[eI]).style.marginBottom = "1em"), eI < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eI]);
		aQd.s1(new wS({
			oF: aF.ky,
			value: value
		}, function(iK) {
			eI < 0 ? aE.data.botDifficultyValue = iK : aE.data.botDifficultyTeam[eI] = iK
		})), s8.push(aQd)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(65), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, function() {
		var s8 = [];
		if (function(s8) {
				var aQd = new rq,
					oF = (aQd.rt(L(300)), [L(302), L(304), L(305), L(303)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oF.splice(2, 1));
				aQd.s1(new wS({
					oF: oF,
					value: value
				}, function(eI) {
					aRa(), aE.data.botDifficultyType = eI, 0 === aE.data.gameMode && 2 === eI && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fP)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), s8.push(aQd)
			}(s8), 0 === aE.data.botDifficultyType) aRf(s8, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aRf(s8, aC);
		else 3 === aE.data.botDifficultyType && ! function(s8) {
			var aQd = new rq;
			aQd.rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.botDifficultyData, 8)), aQd.s4(aRX), s8.push(aQd)
		}(s8);
		return s8
	}())
}

function aRg(data) {
	var aQH, aRh, aRi, aRj, aRk, aRl, aRm, colors, aRn, aRo, aRp = 0,
		aRq = 0,
		aRr = !1,
		aRs = !1,
		aRt = [1, 5, 60, 240, 1440, 10080, 43200];

	function aSN(m2, m3) {
		! function(m2, m3) {
			return aRh < m2 && m2 < aRh + aRj && aRi < m3 && m3 < aRi + aRk
		}(aRp = m2, aRq = m3) ? (aRr && (bi.ds = !0), aRr = !1) : (aRr = !0, bi.ds = !0)
	}
	this.show = function() {
		aRs = bm.buffer.data[127].value, aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize();
		var ej = i.l,
			wk = aQH.wh(),
			aS2 = ej * wk.wj,
			ej = ej * wk.tV;
		aRl = bD.sD.ur(.06), aRm = bD.sD.ur(.04), aRh = bD.sD.ur(.06), aRi = ej + aRl, aRj = i.j - aRh - aRm, aRk = aS2 + ej - aRi - aRm
	}, this.wl = function() {
		aQH.wl(),
			function() {
				var aC, aRz, gv, fZ, fl, h = data.data,
					aS6 = 1,
					aS7 = .125,
					aS8 = aRs ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aRz = h[aC].aRz, gv = aRz.length, aS6 = Math.max(gv, aS6), fl = 0; fl < gv; fl++) aS7 = Math.max(aRz[fl], aS7), aS8 = Math.min(aRz[fl], aS8);
				var np = aRi + aRk,
					a07 = aRk / (aS7 - aS8),
					a06 = 1 / (aS6 - 1);
				for (wm.lineWidth = bf.a19, aC = 0; aC < h.length; aC++) {
					for (aRz = h[aC].aRz, gv = aRz.length, fZ = aRh, wm.beginPath(), wm.moveTo(fZ + aRj, np - a07 * (aRz[gv - 1] - aS8)), fl = gv - 2; 0 <= fl; fl--) wm.lineTo(fZ + a06 * fl * aRj, np - a07 * (aRz[fl] - aS8));
					wm.strokeStyle = colors[aC], wm.stroke()
				}(function(aS8, aS7, np, a07) {
					wm.font = bD.sD.u1(0, .25 * aRh), bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 2), wm.fillStyle = colors[0];
					for (var fZ = .92 * aRh, aC = 0; aC < 3; aC++) {
						var fu = aS8 + aC * (aS7 - aS8) / 2;
						wm.fillText((fu / 1e3).toFixed(3), fZ, np - a07 * (fu - aS8))
					}
				})(aS8, aS7, np, a07),
				function(aS6) {
					var fb = aRi + aRk + .15 * aRm;
					wm.font = bD.sD.u1(0, Math.min(.4 * aRm, .028 * i.j)), bD.sD.textBaseline(wm, 0), bD.sD.textAlign(wm, 2), wm.fillStyle = colors[0], wm.fillText(bD.a4V.a5K(aRn), aRh + aRj, fb), bD.sD.textAlign(wm, 0), wm.fillText(bD.a4V.a5K(
						new Date(aRo.getTime() - 6e4 * (aS6 - 1) * aRt[data.aRy])), aRh, fb)
				}(aS6),
				function(aS6, aS8, aS7) {
					if (aRr && !(aS6 < 2)) {
						for (var aAh, eI = (aRp - aRh) / aRj * (aS6 - 1), aSB = Math.floor(eI), aSC = Math.floor(1 + eI), aSD = eI - aSB, aSE = 1e5, aSF = -1, aSG = -1, aSH = aS7 - (aS7 - aS8) * (aRq - aRi) / aRk, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aEa, aRz = h[aC].aRz;
							aRz.length <= aSC || (aRz = aRz[aSB] + aSD * (aRz[aSC] - aRz[aSB]), (aEa = Math.abs(aSH - aRz)) < aSE && (aSE = aEa, aSF = aC, aSG = aRz))
						} - 1 !== aSF && (aS7 = aRi + aRk - (aSG - aS8) / (aS7 - aS8) * aRk, wm.lineWidth = .5 * bf.a19, wm.strokeStyle = colors[aSF], wm.beginPath(), wm.moveTo(aRh, aS7), wm.lineTo(aRp, aS7), wm.lineTo(aRp, aRi + aRk), wm
							.stroke(), wm.beginPath(), wm.arc(aRp, aS7, .1 * aRh, 0, 2 * Math.PI), wm.fillStyle = colors[aSF], wm.fill(), aS8 = aRi + aRk + .15 * aRm, bD.sD.textAlign(wm, 1), aAh = aS6 - 2 < eI ? (aAh = aRo.getTime() - 6e4 *
								aRt[data.aRy], new Date(aAh + (eI - (aS6 - 2)) * (aRn.getTime() - aAh))) : new Date(aRo.getTime() - 6e4 * (aS6 - eI - 1) * aRt[data.aRy]), aS6 = bD.a4V.a5K(aAh), eI = bD.sD.measureText(aS6), aAh = bO.ia(aRp,
								aRh + .5 * eI, aRh + aRj - .5 * eI), wm.fillStyle = bD.color.p9(70, 50, 20), wm.fillRect(aAh - .52 * eI, aRi + aRk, 1.04 * eI, .55 * aRm), wm.fillStyle = colors[0], wm.fillText(aS6, aAh, aS8), wm.font = bD.sD
							.u1(0, .25 * aRh), bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 2), aAh = .92 * aRh, aS6 = (aSG / 1e3).toFixed(3), eI = bD.sD.measureText(aS6), aS8 = aAh - 1.04 * eI, wm.fillStyle = bD.color.p9(70, 50, 20), wm
							.fillRect(aS8, aS7 - .1625 * aRh, aRh - aS8, .275 * aRh), wm.fillStyle = colors[aSF], wm.fillText(aS6, aAh, aS7))
					}
				}(aS6, aS8, aS7)
			}(), wm.lineWidth = bf.a19, wm.strokeStyle = bE.pH, wm.beginPath(), wm.moveTo(aRh, aRi), wm.lineTo(aRh, aRi + aRk), wm.lineTo(aRh + aRj, aRi + aRk), wm.stroke();
		var aC, fontSize = .5 * aRl,
			h = (wm.font = bD.sD.u1(0, fontSize), bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 0), data.data),
			fS = h.length,
			fb = aRi - .5 * aRl,
			ru = "";
		for (aC = 0; aC < fS; aC++) ru += h[aC].name + "  ";
		ru = ru.trim();
		var aSK = bD.sD.measureText(ru),
			fZ = .5 * (i.j - aSK);
		for (aSK > i.j && (fZ = 0, wm.font = bD.sD.u1(0, i.j / aSK * fontSize)), aC = 0; aC < fS; aC++) wm.fillStyle = colors[aC], wm.fillText(h[aC].name, fZ, fb), fZ += bD.sD.measureText(h[aC].name + "  ")
	}, this.hf = function(m2, m3) {
		aSN(m2, m3)
	}, this.a3h = function(m2, m3) {
		aSN(m2, m3)
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	};
	var aC, ea, a5I, iK, fV = data.data,
		fS = fV.length,
		max = 1;
	for (aC = 0; aC < fS; aC++) max = Math.max(max, fV[aC].aRz.length);
	for (aC = 0; aC < fS; aC++)
		for (; fV[aC].aRz.length < max;) fV[aC].aRz.unshift(0);
	ea = new Date, a5I = 6e4 * ea.getTimezoneOffset(), iK = ea.getTime() - a5I, aRn = new Date(iK), 6 === data.aRy ? function(ea, a5I) {
		var aS1 = ea.getUTCFullYear(),
			ea = ea.getUTCMonth() + 1;
		aRo = ea < 12 ? new Date(Date.UTC(aS1, ea) - a5I) : new Date(Date.UTC(aS1 + 1, 0) - a5I)
	}(ea, a5I) : (a5I = 6e4 * aRt[data.aRy], aRo = data.aRy <= 4 ? new Date(iK + a5I - ea.getTime() % a5I) : new Date(iK + a5I - (ea.getTime() + 2592e5) % a5I)), iK = bD.color, colors = [bE.pH, iK.p9(255, 0, 0), iK.p9(0, 200, 0), iK.p9(80, 80,
		255), iK.p9(255, 255, 0), iK.p9(255, 0, 255), iK.p9(0, 255, 255), iK.p9(255, 140, 0), iK.p9(128, 128, 128), iK.p9(0, 255, 140)], aQH = new wW(L(307) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aRy] + ", " + bD.a4V.a5H(aRn), [
		new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(308), function() {
			u.v(14)
		})
	], !1)
}

function aPw() {
	var aQH, aQI, s8, aSO = -1;
	this.show = function() {
		aQH.show(), this.resize(), aSO = bm.buffer.data[125].value
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(309), [new x("⬅️ " + L(40), function() {
		aSO !== bm.buffer.data[125].value ? u.z.aSP() : u.aQF(13)
	})]), aQI = new s6(aQH.wc, ((s8 = []).push(function() {
		var aQd = new rq,
			aQl = (aQd.rt(L(310)), aQd.rv(L(311)), new x(L(312), function() {
				bm.qh.qi(130, 0), u.z.aSP()
			}, 0, 0, 1)),
			sz = new t0(bm.buffer.data[126], 0, function() {
				aQl.button.click()
			});
		return aQd.s4(sz), sz.e.placeholder = "a,b,c", sz.e.style.marginTop = "0.5em", aQd.s4(new te([aQl.button])), aQd
	}()), s8.push(function() {
		var aQd = new rq,
			aQl = new x(L(312), function() {
				bm.qh.qi(130, 1), u.z.aSP()
			}, 0, 0, 1),
			aSU = new t0(bm.buffer.data[129], 1, function() {
				aSU.e.focus()
			}),
			aSV = new t0(bm.buffer.data[128], 1, function() {
				aQl.button.click()
			});
		return aQd.rt(L(313)), aQd.s4(aSV), aSV.e.style.marginBottom = "0.5em", aQd.rt(L(314)), aQd.s4(aSU), aQd.s4(new te([aQl.button])), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		return aQd.rt(L(315)), bm.buffer.data[125].oF = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aQd.s1(new wS(bm.buffer.data[125])), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		return aQd.rt(L(316)), aQd.s4(new ta(bm.buffer.data[127], L(317))), aQd
	}()), s8))
}

function aPv() {
	var aQH, aSW, aRj, aSX, aSY, aSZ, colors = [0, 0, 0],
		aSa = -1;

	function aSd(aC) {
		var aSe = aSW.fb + aC * (bf.gap + aSZ);
		wm.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", wm.fillRect(aSX, aSe, colors[aC] * aSY, aSZ), wm.strokeStyle = bE.pH, wm.strokeRect(aSX, aSe, aSY,
			aSZ), wm.fillStyle = bE.pH, wm.font = bD.sD.u1(0, .32 * aSZ), bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 0), wm.fillText(L(0 === aC ? 320 : 1 === aC ? 321 : 322) + aSb(aC), aSX + bf.gap, aSe + .53 * aSZ)
	}

	function aSb(aC, aSf) {
		return aSf = aSf || 256, bO.ia(Math.floor(aSf * colors[aC]), 0, aSf - 1)
	}

	function a4B(m2, m3) {
		return !(m2 < aSX || m3 < aSW.fb || m2 > aSW.fZ + aSW.j || m3 > aSW.fb + aSW.k)
	}
	this.show = function() {
		var fu = bm.buffer.data[121].value;
		colors[0] = (fu >> 12) / 63, colors[1] = (fu >> 6 & 63) / 63, colors[2] = (63 & fu) / 63, aQH.show(), this.resize()
	}, this.tS = function() {
		bm.qh.qi(121, (aSb(0, 64) << 12) + (aSb(1, 64) << 6) + aSb(2, 64)), aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aSW.resize();
		var ej = i.l,
			wk = aQH.wh(),
			aSc = (aSW.fb = Math.max(aSW.fb, ej * wk.tV + bf.gap), ej * wk.wj - 2 * bf.gap);
		aSW.k = Math.min(aSW.k, aSc), aSW.j = 2 * aSW.k, aSW.fb = ej * wk.tV + .5 * (ej * wk.wj - aSW.k), aSW.fZ = .5 * (i.j - aSW.j), aRj = .25 * aSW.j, aSX = aSW.fZ + aRj + bf.gap, aSY = aSW.j - aRj - bf.gap, aSZ = (aSW.k - 2 * bf.gap) / 3
	}, this.wl = function() {
		var eH, uq, fm;
		aQH.wl(), wm.lineWidth = bf.a19, eH = aSb(0), uq = aSb(1), fm = aSb(2), wm.fillStyle = "rgb(" + eH + "," + uq + "," + fm + ")", wm.fillRect(aSW.fZ, aSW.fb, aRj, aSW.k), wm.strokeStyle = bE.pH, wm.strokeRect(aSW.fZ, aSW.fb, aRj, aSW.k), wm
			.fillStyle = eH + uq + fm < 306 && uq < 150 ? bE.pH : bE.p8, bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 1), wm.font = bD.sD.u1(0, .1 * aSW.k), wm.rotate(-Math.PI / 2), wm.fillText(L(319), -aSW.fb - .5 * aSW.k, aSW.fZ + .5 * aRj),
			wm.setTransform(1, 0, 0, 1, 0, 0), aSd(0), aSd(1), aSd(2)
	}, this.hf = function(m2, m3) {
		a4B(m2, m3) && (aSa = bO.ia(Math.floor((m3 - aSW.fb) / (aSZ + .75 * bf.gap)), 0, 2), colors[aSa] = bO.ia((m2 - aSX) / aSY, 0, 1), bi.ds = !0)
	}, this.a3h = function(m2) {
		-1 !== aSa && (colors[aSa] = bO.ia((m2 - aSX) / aSY, 0, 1), bi.ds = !0)
	}, this.a3k = function(m2, m3, deltaY) {
		a4B(m2, m3) && (m2 = bO.ia(Math.floor((m3 - aSW.fb) / (aSZ + .75 * bf.gap)), 0, 2), colors[m2] = bO.ia(colors[m2] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.ds = !0)
	}, this.a45 = function() {
		0 <= aSa && (aSa = -1, bi.ds = !0)
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(318), [new x("⬅️ " + L(40), function() {
		u.z.aEV()
	})], !1), aSW = new sn([.5, .25], [.5, .5], 1)
}

function aQ3() {
	var aRV, aRW, aRX, or;

	function aRY() {
		aRa(), u.aQG()[19] = null, u.a3J()
	}

	function aSg() {
		aRa(), u.v(21)
	}

	function aRa() {
		1 === aE.data.gameMode ? aE.a6d.a6i() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sL.a4q(aRX.x1(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, or = [new x("⬅️ " + L(40), aRY)], 1 === aE.data.gameMode && or.push(new x(L(323), aSg, 1, 1)), aRV = new wW(L(324), or), aRW = new s6(aRV.wc, (or = [], 0 === aE.data.gameMode ? (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(325), L(303)],
			value: aE.data.colorsType
		}, function(eI) {
			aRa(), aE.data.colorsType = eI, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fP || (aE.data.colorsData = new Uint32Array(aE.fP)), u.v(21)
		})), s8.push(aQd)
	}(or), 1 === aE.data.colorsType && function(s8) {
		var aQd = new rq;
		aQd.rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.colorsData, 1)), aQd.s4(aRX), s8.push(aQd)
	}(or)) : (aE.a6d.a6i(), or.push(function() {
		var aQd = new rq;
		aQd.rt(L(306));
		for (var aC = 0; aC < bj.a2X.length; aC++) {
			var iK = (aC + 1) % bj.a2X.length,
				e = aQd.rz((0 == iK ? "" : "Team ") + bj.a2X[iK]);
			aC && (e.style.marginTop = "0.5em"), aQd.s4(new t0({
				eI: -1,
				value: aE.data.teamPlayerCount[iK]
			}, 1, 0, function(e) {
				aRV.wd[1].sX(0);
				var playerCount = bO.ia(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aSj] = playerCount
			})).e.aSj = iK
		}
		return aQd
	}()), function(s8) {
		for (var aQd = new rq, oF = (aQd.rt(L(326)), []), aC = 0; aC < bj.a2X.length; aC++) {
			var iK = (aC + 1) % bj.a2X.length;
			oF.push(bj.a2X[iK])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		aQd.s1(new wS({
			oF: oF,
			value: (aE.data.colorsData[0] % 16 + bj.a2X.length - 1) % bj.a2X.length
		}, function(eI) {
			var eI = (eI + 1) % bj.a2X.length,
				aSk = bj.aSl[eI],
				aSk = (aSk[0] >> 2 << 12) + (aSk[1] >> 2 << 6) + (aSk[2] >> 2);
			aE.data.colorsData[0] = aSk - (15 & aSk) + eI
		})), s8.push(aQd)
	}(or)), or))
}

function uU(id, a5z, aSm) {
	var aQH, aSn;

	function aSs() {
		aSn.s9.innerHTML += "<br>" + L(329)
	}

	function aT1() {
		var fm = 1;
		u.v(4, 1, new w(L(330), L(331), !1, [new x("🔄 Reload", function() {
			fm && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fm = 0
		}, bE.pe)]))
	}

	function aSr() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dk(bG.aD), bm.qh.qi(110, bI.uV.uW(bI.uV.uX(15))), b1.aHN.aT3()
	}
	this.aSo = !0, this.aSp = id, this.show = function() {
		aQH.show(), this.resize(), 15 === id ? (b1.z.aSq(id) ? aSr : aSs)() : 16 === id ? b1.z.aSq(id) ? b1.eg.eh(2) : aSs() : 17 === id ? b1.z.aSq(id) ? b1.eg.eh(3) : aSs() : 18 === id ? (b1.z.close(0, 3253), b1.z.aIL(0, id, 0), aSs()) : 21 ===
			id ? b1.z.aSq(id) ? b1.aSt.aSu(a5z.ul, a5z.um, a5z.un) : aSs() : 22 === id ? b1.z.aSq(id) ? b1.aSt.aSv(a5z.ul, a5z.aSw, a5z.aSx) : aSs() : 23 === id ? b1.z.aSq(id) ? b1.aSt.aSy(a5z.aRy, a5z.a2s) : aSs() : 24 === id ? b1.z.aSq(id) ? b1
			.aSt.aSz(a5z.aRy, a5z.um, a5z.un) : aSs() : 25 === id ? b1.z.aSq(id) ? b1.aHN.aRH(a5z) : aSs() : 28 === id ? b1.z.aSq(id) ? b1.aSt.aT0(a5z.ul, a5z.aSw, a5z.aSx) : aSs() : 29 === id ? b1.z.aSq(id) ? b1.aHN.aRA(a5z) : aSs() : 30 ===
			id && (b1.z.aSq(id) ? bA.aEQ() || aT1() : aSs())
	}, this.aT2 = function() {
		15 === id ? aSr() : 16 === id ? b1.eg.eh(2) : 17 === id ? b1.eg.eh(3) : 18 === id ? u.v(8, this.a3P, new uU(16)) : 21 === id ? b1.aSt.aSu(a5z.ul, a5z.um, a5z.un) : 22 === id ? b1.aSt.aSv(a5z.ul, a5z.aSw, a5z.aSx) : 23 === id ? b1.aSt.aSy(
			a5z.aRy, a5z.a2s) : 24 === id ? b1.aSt.aSz(a5z.aRy, a5z.um, a5z.un) : 25 === id ? b1.aHN.aRH(a5z) : 28 === id ? b1.aSt.aT0(a5z.ul, a5z.aSw, a5z.aSx) : 29 === id ? b1.aHN.aRA(a5z) : 30 === id ? bA.aEQ() || aT1() : 1e3 === id && (
			this.aSp = id = 25, b1.aHN.aRH(a5z))
	}, this.aEU = function(code, by, data) {
		!by && code !== id || (15 === code || 16 === code ? u.v(7, this.a3P) : 17 === code ? (b1.z.close(0, 3252), bm.z.xk(0), bm.buffer.data[117].oF && 0 < bm.buffer.data[117].oF.length ? (by = bm.z.xl(0), bm.qh.qi(105, by.uR), bm.qh.qi(106, by
			.password), u.v(8, this.a3P, new uU(16))) : (bm.qh.qi(105, ""), u.z.aEV())) : 21 === code ? u.v(10, this.a3P, new aCy(data)) : 23 === code ? u.v(13, this.a3P, new aRg({
			data: data,
			aRy: a5z.aRy
		})) : 25 === code ? (u.z.aPx.uR = a5z.uR, bm.x9.nA(a5z.uR), u.v(15, this.a3P)) : 30 === code && (data ? u.v(1) : aT1()))
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aSn.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(327), [new x("⬅️ " + L(40), function() {
		aSm ? u.v(29) : u.z.aEV()
	})]), aSn = new td(aQH.wc, L(328))
}

function aQ1() {
	var aRV, aRW, s8;

	function aT6() {
		var gv;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a6d.a6i()), gv = bD.sL.a4k(aE.data.teamPlayerCount, 0), aE.data.numberTeams = gv) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aRY() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aT8(), aE.data.canvas = null, u.v(5, 5)
	}

	function aT8() {
		bC.rX.dk(), bm.qh.qi(156, bC.a6t.a1d())
	}

	function aT4() {
		aE.data.isReplay = 0, aT8(), aE.a6d.a75(), ab.aIW(), aE.a6d.a72(), aE.data.canvas = 2 === aE.data.mapType ? bV.yi : null, aE.a6h(), aE.a6f = 1
	}

	function aTK() {
		aT6();
		for (var h = [aTB(), aTC(), aTD()], aC = 3; aC < 6; aC++) u.removeChild(aRW.s9, aRW.sA[aC].rs), aRW.sA[aC] = h[aC - 3], aRW.s9.appendChild(aRW.sA[aC].rs);
		aRW.resize()
	}

	function aTB() {
		var aTL, aQd = new rq;
		return aQd.rt(L(324)), aTL = 0 === aE.data.gameMode ? [L(325), L(303)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), aQd.rz(aTL), aQd.s4(new te([new x(L(335), function() {
			u.v(21)
		}).button])), aQd
	}

	function aTC() {
		var aQd = new rq,
			h = (aQd.rt(L(65)), [L(302) + ": " + aF.ky[aE.data.botDifficultyValue], L(304), L(305), L(303)]);
		return aQd.rz(h[aE.data.botDifficultyType]), aQd.s4(new te([new x(L(335), function() {
			u.v(25)
		}).button])), aQd
	}

	function aTD() {
		var aQd = new rq,
			h = (aQd.rt("Spawning"), [L(325), L(337), L(303)]);
		return aQd.rz(h[aE.data.spawningType]), aQd.s4(new te([new x(L(335), function() {
			u.v(24)
		}).button])), aQd
	}
	this.show = function() {
		aRV.show(), this.resize(), aRV.wc.scrollTop = u.z.uL[0]
	}, this.tS = function() {
		u.z.uL[0] = aRV.wc.scrollTop, aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW("🔧 " + L(332), [new x("⬅️ " + L(40), aRY), new x(L(333), aT4)]), aT6(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.yi : 1 === aE.data.mapType ? aE.data.canvas = bV.aNh(bV.a73(aE.data), 0).yi : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aNh(bV.a73(aE.data), aE.data.mapSeed).yi)), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq,
			a50 = (aQd.rt(L(334)), aE.data.canvas);
		a50.style.width = "100%", aQd.s4({
			e: a50
		}), aQd.s4(new te([new x(L(335), function() {
			u.v(20)
		}).button])), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd = new rq;
		aQd.rt(L(306)), aQd.s4(new t0({
			eI: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.ia(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sL.a4k(aE.data.teamPlayerCount, 0), aE.a6d.a6i(), bD.sL.a4k(aE.data.teamPlayerCount, 0) !== e) && aTK()
		})), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq;
		aQd.rt(L(336)), aQd.s1(new wS({
			oF: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eI) {
			aE.data.gameMode !== eI && (1 === (aE.data.gameMode = eI) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aTK())
		})), s8.push(aQd)
	}(s8), s8.push(aTB()), s8.push(aTC()), s8.push(aTD()), function(s8) {
		var aQd = new rq,
			h = (aQd.rt(L(338)), [L(339), L(340), L(303)]);
		aQd.rz(h[aE.data.playerNamesType]), aQd.s4(new te([new x(L(335), function() {
			u.v(23)
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq,
			h = (aQd.rt(L(299)), [L(301), L(302) + ": " + aE.data.aIncomeValue, L(303)]);
		aQd.rz(h[aE.data.aIncomeType]), aQd.s4(new te([new x(L(335), function() {
			u.v(22)
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq,
			h = (aQd.rt(L(341)), [L(301), L(302) + ": " + aE.data.tIncomeValue, L(303)]);
		aQd.rz(h[aE.data.tIncomeType]), aQd.s4(new te([new x(L(335), function() {
			u.v(26)
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq,
			h = (aQd.rt(L(342)), [L(301), L(302) + ": " + aE.data.iIncomeValue, L(303)]);
		aQd.rz(h[aE.data.iIncomeType]), aQd.s4(new te([new x(L(335), function() {
			u.v(27)
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq,
			h = (aQd.rt(L(343)), [L(301), L(302) + ": " + aE.data.sResourcesValue, L(303)]);
		aQd.rz(h[aE.data.sResourcesType]), aQd.s4(new te([new x(L(335), function() {
			u.v(28)
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq;
		aQd.rt(L(344)), aQd.s4(new te([new x(L(345), function() {
			u.y(), aE.a6d.a76(), u.z.uL[0] = 0, u.v(19)
		}).button])), aQd.s4(new te([new x(L(346), function() {
			bp.aKv()
		}).button])), aQd.s4(new te([new x(L(347), function() {
			return bp.aKx(), !0
		}).button])), s8.push(aQd)
	}(s8), s8))
}

function aQC() {
	var aRV, t5 = !0;

	function tL(tK, a7A) {
		var rs = document.createElement("div"),
			aTN = document.createElement("span"),
			aTO = document.createElement("span");
		aTN.textContent = aX.aDK(a7A.eZ) + ":", aTN.style.color = bE.pW, aTN.style.paddingRight = "0.4em", aTN.style.display = "table-cell", aTN.style.width = "6ch", aTN.style.textAlign = "end", rs.appendChild(aTN), aTO.textContent = a7A.ru, rs
			.appendChild(aTO), rs.style.display = "table", a7A.qw && function(rs, qw) {
				{
					var aKI;
					qw >= 1024 - ak.tR.a0w ? ((aKI = document.createElement("img")).src = ak.yl.a0k[qw - 1024 + ak.tR.a0w].toDataURL(), aKI.style.width = "1.5em", aKI.style.height = "1.5em", aKI.style.verticalAlign = "middle", rs.appendChild(aKI)) :
						((aKI = document.createElement("span")).textContent = ak.tR.a1B(qw), aKI.style.display = "inline-block", aKI.style.fontSize = "1.5em", aKI.style.lineHeight = "1em", aKI.style.verticalAlign = "middle", rs.appendChild(aKI))
				}
			}(rs, a7A.qw), tK.appendChild(rs)
	}

	function tO() {
		t5 && (aRV.wc.scrollTop = aRV.wc.scrollHeight)
	}
	this.clear = function() {
		aRV.wc.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a83 = bt.a7D(), fS = a83.length, tK = document.createDocumentFragment(), aC = 0; aC < fS; aC++) tL(tK, a83[aC]);
		aRV.wc.appendChild(tK), tO(), aRV.show(), this.resize(), t5 = !0, tO()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRV.wc.style.padding = "0.4em " + bD.sD.sM(bf.sJ)
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, this.a0d = function(a7A) {
		var tK = document.createDocumentFragment();
		tL(tK, a7A), aRV.wc.appendChild(tK), tO()
	}, (aRV = new wW(L(348), [new x("⬅️ " + L(40), function() {
		u.aQF(1)
	})])).wc.style.overflowY = "auto", aRV.wc.addEventListener("scroll", function() {
		t5 = aRV.wc.scrollTop >= aRV.wc.scrollHeight - aRV.wc.clientHeight - 2
	})
}

function aQ9() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.iIncomeType && bD.sL.a4q(aRX.x1(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(342), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(301), L(302), L(303)],
			value: aE.data.iIncomeType
		}, function(eI) {
			aRa(), 2 !== eI || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fP), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eI, u.v(27)
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd;
		1 === aE.data.iIncomeType && ((aQd = new rq).rt("Value"), aQd.s4(new t0({
			eI: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), s8.push(aQd))
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.iIncomeType && ((aQd = new rq).rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.iIncomeData, 4)), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aPr() {
	var aTQ, aTR, aSW, sz, aTS, tw = 0;
	this.aJ3 = new ub, aSW = new sn([.45, .27], [.5, .5], 2 / 3), aTR = [new x("⚔️<br>" + L(349), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aTT(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.pk), new x("🗡️<br>" + L(332), function() {
			aTT(1)
		}, bE.q2), new x("🔑<br>" + L(350), function() {
			aTT(2)
		}, bE.qL), new x("☰<br>" + L(351), function() {
			aTT(3)
		}, bE.pU), new x("", function() {
			u.v(12)
		}, bE.pD, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], sz = new t0(bm.buffer.data[122]);
	for (var aC = 0; aC < aTR.length; aC++) aTR[aC].button.style.position = "absolute";

	function aTT(eI) {
		a1.a2.setState(10), ac.uu() || ac.aIu(), 0 === eI ? u.z.a6w(1) : 1 === eI ? (bC.aLF.yT(bm.buffer.data[156].value, 1) || aE.a6d.a76(), u.v(19)) : 2 === eI ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.uT, new uU(16)) : u.z.aTU(u.uT,
			16) : 3 === eI && u.v(1)
	}
	sz.e.style.position = "absolute", sz.e.style.textAlign = "center", sz.e.placeholder = L(352), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aJ3.show(), aTR[4].sX(bD.color.a57(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(sz.e);
		for (var aC = 0; aC < aTR.length; aC++) document.body.appendChild(aTR[aC].button);
		1 !== a1.id || a1.e3 < 5 || (aTS && bi.eZ > aTS + 144e5 ? a1.xT.setState(14) : aTS = bi.eZ)
	}, this.tS = function() {
		this.aJ3.tS(), u.removeChild(document.body, sz.e);
		for (var aC = 0; aC < aTR.length; aC++) u.removeChild(document.body, aTR[aC].button)
	}, this.resize = function() {
		this.aJ3.resize(), this.aJ3.resize(), aSW.resize();
		var gap = .5 * bf.gap,
			vP = 10 / 99 * .84 * aSW.j,
			aTX = .16 * aSW.k,
			aBF = .19 * aSW.j,
			fZ = aSW.fZ + aBF,
			vP = aSW.fb + vP + 3 * gap,
			j = .5 * (aSW.j - gap) - aBF,
			aBF = aSW.j - 2 * aBF - aTX - gap,
			aBF = (bD.sD.us(sz.e, fZ, vP, aBF, aTX), bD.sD.us(aTR[4].button, fZ + aBF + gap, vP, aTX, aTX), tw = vP, .5 * (aSW.fb + aSW.k - (vP += aTX + gap) - gap));
		bD.sD.us(aTR[0].button, fZ, vP, j, aBF), bD.sD.us(aTR[1].button, fZ + j + gap, vP, j, aBF), bD.sD.us(aTR[2].button, fZ, vP + aBF + gap, j, aBF), bD.sD.us(aTR[3].button, fZ + j + gap, vP + aBF + gap, j, aBF);
		bD.sD.us(aTR[5].button, fZ, vP + aBF * 2 + gap * 2, j * 2 + gap, aBF / 3);
		bD.sD.us(aTR[6].button, fZ, vP + aBF * 2.33 + gap * 3, j * 2 + gap, aBF / 3);
		for (var aC = 0; aC < aTR.length; aC++) aTR[aC].button.style.font = bD.sD.u1(0, bD.sD.wD(.065 * aSW.k)), bD.sD.sN(aTR[aC].button, 5);
		sz.e.style.font = bD.sD.u1(0, bD.sD.wD(.08 * aSW.k)), bD.sD.sN(sz.e, 5)
	}, this.wl = function() {
		if (ab.aIa(), aU.wl(), fS = Math.floor((a1.a2.ib() ? .018 : .0137) * i.ic), wm.font = bD.sD.u1(0, Math.max(5, fS)), bD.sD.textBaseline(wm, 0), bD.sD.textAlign(wm, 2), wm.fillStyle = bE.pH, wm.fillText(m.e3, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = wm.measureText(text).width, fS = Math.max(5, fS), wm.textAlign = "left", wm.textBaseline = "middle", wm.fillText(text, wm.canvas.width - textLength - fS / 2, 2 * fS), aP.wl(tw), bb.wl(), ac.uu()) {
			wm.imageSmoothingEnabled = !1;
			var text = ac.aId("territorial.io"),
				textLength = .84 * aSW.j / text.width;
			wm.setTransform(textLength, 0, 0, textLength, aSW.fZ + .08 * aSW.j, aSW.fb), aTQ = aTQ || bD.ok.a5x(text, bD.ok.a63, [0, 0, 0]);
			for (var fZ = -1; fZ <= 1; fZ += 2)
				for (var fb = -1; fb <= 1; fb += 2) wm.drawImage(aTQ, fZ, fb);
			wm.drawImage(text, 0, 0), wm.imageSmoothingEnabled = !0;
			var fS = ac.aId("logo"),
				aTa = .6666 * textLength * text.height / fS.height,
				o1 = .5 * i.j,
				o2 = aSW.fb + .5 * textLength * text.height - .5 * aTa * fS.height;
			wm.setTransform(aTa, 0, 0, aTa, o1 - .6 * textLength * text.width, o2), wm.drawImage(fS, 0, 0), wm.setTransform(aTa, 0, 0, aTa, o1 + .6 * textLength * text.width - aTa * fS.width, o2), wm.drawImage(fS, 0, 0), wm.setTransform(1, 0, 0,
				1, 0, 0), wm.imageSmoothingEnabled = !0
		}
	}
}

function aPy() {
	var aQH, aTb, aTc, wX;

	function aTd(aC) {
		u.v(8, u.uT, new uU(21, {
			ul: aC,
			um: 0,
			un: 10
		}))
	}
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aTb.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aTc = [new x(L(353), function() {
		aTd(1)
	}, 0, 0, 1), new x(L(354), function() {
		aTd(2)
	}, 0, 0, 1), new x(L(355), function() {
		aTd(3)
	}, 0, 0, 1), new x(L(356), function() {
		aTd(0)
	}, 0, 0, 1), new x(L(357), function() {
		aTd(9)
	}, 0, 0, 1), new x(L(358), function() {
		aTd(10)
	}, 0, 0, 1), new x(L(359), function() {
		aTd(11)
	}, 0, 0, 1), new x(L(360), function() {
		aTd(13)
	}, 0, 0, 1)], wX = [new x("⬅️ " + L(40), function() {
		u.a3J()
	})], aQH = new wW(L(361), wX), aTb = new sl(aTc, aQH.wc)
}

function aEs(title, s0, aTe) {
	var aQH, aSn;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aSn.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aTe = aTe || [new x("⬅️ " + L(40), function() {
		u.a3J()
	}, bE.pw)], aQH = new wW(title, aTe), aSn = new td(aQH.wc, s0), bD.sD.textAlign(aQH.wc.style, 1)
}

function aCy(data) {
	var aQH, aTf;

	function aTo(fS) {
		return fS < 60 ? 1 === fS ? fS + " Second" : fS + " Seconds" : fS < 3600 ? 1 === (fS = Math.floor(fS / 60)) ? fS + " Minute" : fS + " Minutes" : fS < 172800 ? 1 === (fS = Math.floor(fS / 3600)) ? fS + " Hour" : fS + " Hours" : (fS = Math
			.floor(fS / 172800)) + " Days"
	}

	function aTh(k2) {
		var fS = data.data.length;
		if (fS) {
			for (var um, max = min = parseInt(data.data[0][0]), aC = 1; aC < fS; aC++) var aGs = parseInt(data.data[aC][0]),
				min = Math.min(aGs, min),
				max = Math.max(aGs, max);
			um = k2 < 0 ? min + k2 : max + 1, u.v(8, u.a3O().a3P, new uU(21, {
				ul: data.ul,
				um: um,
				un: um + Math.abs(k2)
			}))
		}
	}
	if (this.show = function() {
			aQH.show(), this.resize()
		}, this.tS = function() {
			aQH.tS()
		}, this.resize = function() {
			aQH.resize(), aTf.resize()
		}, this.a4F = function(ej) {
			2 === ej && aQH.wd[0].sU()
		}, data.aCz) {
		aQH = new wW(L(119), [new x("⬅️ " + L(40), function() {
			u.a3J()
		})]);
		var fV = {
				uB: [],
				uH: [L(374), L(375), L(376) + " ↗"],
				uO: [12, 50, 38]
			},
			a70 = aE.data.a70;
		if (a70) {
			for (var fS = a70.length, uB = fV.uB, a0e = ah.a0e, aC = 0; aC < fS; aC++) uB.push([{
				fu: aC + 1 + ".",
				ea: 0
			}, {
				fu: a0e[aC],
				ea: 0
			}, {
				fu: bI.uV.a1S(a70[aC], 5),
				ea: 1,
				uR: a70[aC],
				uS: 0
			}]);
			aTf = new uA(aQH.wc, fV, {
				uK: 1
			})
		} else aTf = new uA(aQH.wc, fV)
	} else {
		var fV = data.data.length ? 0 : 1,
			aTe = [new x("⬅️ " + L(40), function() {
				u.a3J()
			}), new x(L(362), function() {
				aTh(-10)
			}, fV, 0, 1), new x(L(363), function() {
				aTh(10)
			}, fV, 0, 1), new x(L(308), function() {
				u.v(11, 10, new aTi({
					ul: data.ul
				}))
			})],
			uH = [L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373), L(358), L(359), "Audit Log", L(360)];
		aQH = new wW(uH[data.ul], aTe), ! function() {
			var aC, fV = {
					uB: []
				},
				uB = fV.uB,
				aTk = data.data,
				fS = aTk.length;
			fS && 0 === aTk[0][0] && 0 <= (eI = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.ul]) && (u.z.uo[eI] = aTk[0][1]);
			var o0 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.ul],
				a69 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.ul],
				eI = [
					[L(377), L(378) + " ↗", L(379)],
					[L(377), L(380), L(381), L(382) + " ↗"],
					[L(377), L(378) + " ↗", L(381)],
					[L(377), L(378) + " ↗", L(381)],
					[L(374), L(383), L(384) + " ↗", L(385) + " ↗", L(123)],
					[L(374), L(383), L(386) + " ↗", L(387) + " ↗", L(388)],
					[L(374), L(383), L(389) + " ↗", L(390) + " ↗", L(391)],
					[L(374), L(383), L(386) + " ↗", L(387) + " ↗", L(392)],
					[L(374), L(383), L(384) + " ↗", L(385) + " ↗", L(123)],
					[L(377), L(378) + " ↗", L(381)],
					[L(377), L(378) + " ↗", L(393)],
					[L(377), L(378) + " ↗", L(381)],
					[L(374), L(383), L(384) + " ↗", L(385) + " ↗", L(394)],
					[L(377), L(378) + " ↗", L(381)]
				];
			if (fV.uH = eI[data.ul], fV.uO = [
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
				][data.ul], 0 === data.ul || 2 === data.ul || 3 === data.ul || 9 === data.ul || 10 === data.ul || 11 === data.ul || 13 === data.ul)
				for (aC = 0; aC < fS; aC++) uB.push([{
					fu: aTk[aC][0] + 1 + ".",
					ea: 0
				}, {
					fu: aTk[aC][1],
					ea: 1,
					uR: aTk[aC][4],
					uS: aTk[aC][3]
				}, {
					fu: (o0 * aTk[aC][2]).toFixed(a69),
					ea: 0
				}]);
			else if (12 === data.ul)
				for (aC = 0; aC < fS; aC++) {
					var aTn = aTk[aC][3];
					uB.push([{
						fu: "" + aTk[aC][0],
						ea: 0
					}, {
						fu: aTo(aTk[aC][4]),
						ea: 0
					}, {
						fu: aTk[aC][5],
						ea: 1,
						uR: aTk[aC][1],
						uS: 0
					}, {
						fu: aTk[aC][6],
						ea: 1,
						uR: aTk[aC][2],
						uS: 0
					}, {
						fu: br.eO(aTn, bI.uV.a1S(aTk[aC][1], 5)),
						ea: 0
					}])
				} else if (1 === data.ul)
					for (aC = 0; aC < fS; aC++) uB.push([{
						fu: aTk[aC][0] + 1 + ".",
						ea: 0
					}, {
						fu: aTk[aC][1],
						ea: 0
					}, {
						fu: (o0 * aTk[aC][2]).toFixed(a69),
						ea: 0
					}, {
						fu: aTk[aC][3],
						ea: 1,
						uR: aTk[aC][5],
						uS: aTk[aC][4]
					}]);
				else if (4 === data.ul || 5 === data.ul || 6 === data.ul || 7 === data.ul || 8 === data.ul)
				for (aC = 0; aC < fS; aC++) {
					var aTp = aTk[aC][5];
					4 === data.ul || 8 === data.ul ? "100%" === (aTp = (aTp % 64 * 100 / (aTp >> 6)).toFixed(0) + "%") && (4 === data.ul ? aTp += " (" + L(395) + ")" : aTp += " (" + L(396) + ")") : 5 === data.ul ? 32768 <= aTp && (aTp = -(aTp -
						32768)) : aTp = (o0 * aTp).toFixed(a69), uB.push([{
						fu: "" + aTk[aC][0],
						ea: 0
					}, {
						fu: aTo(aTk[aC][6]),
						ea: 0
					}, {
						fu: aTk[aC][7],
						ea: 1,
						uR: aTk[aC][1],
						uS: aTk[aC][2]
					}, {
						fu: aTk[aC][8],
						ea: 1,
						uR: aTk[aC][3],
						uS: aTk[aC][4]
					}, {
						fu: "" + aTp,
						ea: 0
					}])
				}
			aTf = new uA(aQH.wc, fV)
		}()
	}
}

function aTi(a5z) {
	var aQH, aQI, s8;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(397), [new x("⬅️ " + L(40), function() {
		u.aQF(10)
	})]), aQI = new s6(aQH.wc, ((s8 = []).push(function() {
		var aQl, aQd = new rq,
			aSU = new t0(bm.buffer.data[132], 1, function() {
				aQl.button.click()
			}),
			aSV = new t0(bm.buffer.data[131], 1, function() {
				aSU.e.focus()
			});
		aQd.rt(L(313)), aQd.s4(aSV), aSV.e.style.marginBottom = "0.8em", aQd.rt(L(314)), aQd.s4(aSU);
		return aQl = new x(L(312), function() {
			um = Math.floor(aSV.e.value), un = Math.floor(aSU.e.value);
			var un, um = {
				a4i: Math.min(um, un),
				aPO: Math.max(um, un)
			};
			u.v(8, u.a7C(10).a3P, new uU(21, {
				ul: a5z.ul,
				um: um.a4i,
				un: um.aPO
			}))
		}, 0, 0, 1), aQd.s4(new te([aQl.button])), aQd
	}()), s8.push(function() {
		var aQl, aQd = new rq,
			aSU = new t0(bm.buffer.data[134], 1, function() {
				aQl.button.click()
			}),
			aSV = new t0(bm.buffer.data[133], 0, function() {
				aSU.e.focus()
			});
		return aQd.rt(1 === a5z.ul ? L(398) : L(399)), aQd.s4(aSV), aSV.e.style.marginBottom = "0.8em", aQd.rt(L(400)), aQd.s4(aSU), aQl = new x(L(312), function() {
			var aSw = aSV.e.value.slice(0, 20),
				aSx = Math.abs(Math.floor(aSU.e.value));
			u.v(8, u.a7C(10).a3P, new uU(22, {
				ul: a5z.ul,
				aSw: aSw,
				aSx: aSx
			}))
		}, 0, 0, 1), aQd.s4(new te([aQl.button])), aQd
	}()), s8.push(function() {
		var aQl, aQd = new rq,
			aSU = new t0(bm.buffer.data[152], 1, function() {
				aQl.button.click()
			}),
			aSV = new t0(bm.buffer.data[151], 0, function() {
				aSU.e.focus()
			});
		return aQd.rt(L(401)), aQd.s4(aSV), aSV.e.style.marginBottom = "0.8em", aQd.rt(L(400)), aQd.s4(aSU), aQl = new x(L(312), function() {
			var aSw = aSV.e.value.slice(0, 5),
				aSx = Math.abs(Math.floor(aSU.e.value));
			u.v(8, u.a7C(10).a3P, new uU(28, {
				ul: a5z.ul,
				aSw: aSw,
				aSx: aSx
			}))
		}, 0, 0, 1), aQd.s4(new te([aQl.button])), aQd
	}()), s8))
}

function aQB() {
	var aTt, uy, aTw, ux, v0, aTu = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aTv = new Array(4),
		aTx = new Array(2),
		aTy = [L(64), L(357), L(402), L(403)];

	function aGe() {
		var aFx;
		!bq.ez || (aFx = aTt.vB.sz.e.value.trim().slice(0, 127)).length < 1 || (aTt.vB.sz.e.value = "", bq.aEv.a2F(aFx))
	}

	function aU1(aU3) {
		bq.z.tF[3] = 1 - bq.z.tF[3], aU2(3, 1, bq.z.tF[3]), aU3 && b1.aGp.aGq(4), bq.z.tF[3] && bm.qh.qi(158, bq.z.tF[0])
	}

	function aTz(fl, fm) {
		bq.z.tF[fl] !== fm && (0 === fl && bq.z.tF[3] && aU1(0), aU2(fl, bq.z.tF[fl], 0), aU2(fl, fm, 1), bq.z.tF[fl] = fm, 0 === fl ? (b1.aGp.aGq(2, fm), bq.z.tF[2] ? (aTt.vC.nA(), aTt.vB.reset(1)) : aTt.vB.reset(0), u.a3O().aGT(), u.a3O().aGS()) :
			2 === fl && (0 === fm ? (b1.aGp.aGq(0), aTt.vB.nA(), aTt.vK()) : (b1.aGp.aGq(1), aTt.vC.nA(), aTt.vL())))
	}

	function aU2(fl, fm, color) {
		aTt.vE[fl].or[fm].sX(color ? bE.pg : bE.qV)
	}

	function aU6(f8) {
		return bV.yY.aOd[f8]
	}

	function aU7(aFh) {
		return aFh < 7 ? "   " + (aFh + 2) + " Teams" : 10 === aFh ? "   No Full-Sending" : ""
	}

	function aU8(aGV, aUF) {
		return aUF ? aGV <= 90 && 60 < aGV ? "   Contest" : "" : aGV <= 60 ? "   Contest" : ""
	}
	this.aH0 = function() {
		return aTt.vB
	}, this.aEv = function(uR) {
		aTz(2, 0);
		var ru = aTt.vB.sz.e.value,
			uR = "@" + uR + " ";
		ru.length && !bD.tB.a5U(ru, " ") && (uR = " " + uR), aTt.vB.sz.e.value = ru += uR, aTt.vB.sz.e.focus()
	}, this.aGR = function() {
		aTt.vC.nA()
	}, this.aGT = function() {
		var aU5 = bq.z.tF[0],
			aU5 = bq.z.tH[aU5],
			fm = (bV.a8(aU5.f8, aU5.mapSeed), uy.or),
			a8s = aU6(aU5.f8, aU5.mapSeed) + aU7(aU5.aFh) + aU8(aU5.aGV),
			aU5 = L(406) + "   " + aU6(aU5.aHR, aU5.aHS) + aU7(aU5.aHT) + aU8(aU5.aGV, 1);
		fm[0].button.textContent === a8s && fm[1].button.textContent === aU5 || (fm[0].button.textContent = a8s, fm[1].button.textContent = aU5, uy.resize())
	}, this.aGS = function() {
		var aU5 = bq.z.tF[0],
			tG = bq.z.tH[aU5];
		aTt.vI(tG.vJ);
		for (var fu, a98, aC = 0; aC < bq.va.vb.length; aC++) aTu[0][aC].tA.textContent = bq.va.vb[aC].length, aTu[1][aC].tA.textContent = (fu = bq.z.tH[aC].aGV, a98 = void 0, ((a98 = bO.ft(fu, 60)) < 10 ? "0" : "") + a98 + ":" + ((fu %= 60) <
			10 ? "0" : "") + fu);
		var tG = bq.va.vb[aU5],
			aUA = tG.length,
			aUB = bq.va.vc[aU5];
		aTu[2][1].tA.textContent = "" + aUA, aTu[3][1].tA.textContent = "" + aUB;
		for (aC = 0; aC < 4; aC++) {
			var aUC = bq.z.tH[aC];
			aTv[aC] ? 0 === aUC.vJ && (aTv[aC].tA.textContent = bV.yY.aOd[aUC.f8]) : aTv[aC] = new t9(bV.yY.aOd[aUC.f8], ux.or[aC].button, 1, 1), bD.tB.startsWith(aTy[aC], "🏆 ") ? aUC.aFn || (aTy[aC] = aTy[aC].substring(3), ux.or[aC].button
				.textContent = aTy[aC], ux.or[aC].button.appendChild(aTu[1][aC].tA), ux.or[aC].button.appendChild(aTu[0][aC].tA), ux.or[aC].button.appendChild(aTv[aC].tA)) : aUC.aFn && (aTy[aC] = "🏆 " + aTy[aC], ux.or[aC].button
				.textContent = aTy[aC], ux.or[aC].button.appendChild(aTu[1][aC].tA), ux.or[aC].button.appendChild(aTu[0][aC].tA), ux.or[aC].button.appendChild(aTv[aC].tA))
		}
		var aUD = "",
			aUE = "";
		0 === aU5 && (aUD = bq.lc.aG2(tG, 0, aUA), aUE = bq.lc.aG2(tG, 0, aUB)), aTw[0].tA.textContent = aUD, aTw[1].tA.textContent = aUE, aTx[1].tA.textContent = "MP: " + bq.z.aGL[0] + "   SP: " + bq.z.aGL[1] + "   Lobby: " + bD.sL.a4v(bq.va.vb)
	}, this.aGX = function() {
		aTt.vB.nA()
	}, this.show = function() {
		bq.z.aFG++, aTt.show(), this.resize(), bq.message.show()
	}, this.tS = function() {
		aTt.tS(), bq.vx.tS(), bq.vX.tS(), bq.message.tS()
	}, this.resize = function() {
		aTt.resize(1 - bq.z.tF[2]), bq.message.resize()
	}, this.a4F = function(ej) {
		2 === ej ? bq.z.tF[3] ? aU1(1) : aTt.vE[3].or[0].sU() : ej < 2 && aU1(1)
	}, ux = new th([new x(aTy[0], function() {
		return aTz(0, 0), 2
	}), new x(aTy[1], function() {
		return aTz(0, 1), 2
	}), new x(aTy[2], function() {
		return aTz(0, 2), 2
	}), new x(aTy[3], function() {
		return aTz(0, 3), 2
	})], bE.qV), uy = new th([new x("", 0, 2), new x("", 0, 2)], bE.qW, 1);
	var aU0 = new th([new x(L(404), function() {
		return aTz(2, 0), 2
	}), new x(L(119), function() {
		return aTz(2, 1), 2
	})], bE.qV);
	v0 = new th([new x(L(26, 0, 0, 1), function() {
		u.y(), bq.vr(), b1.z.a3X(3240), u.v(5, 5)
	}), new x(L(405), function() {
		return aU1(1), 2
	})], bE.qV), aTt = new uw(ux, uy, aU0, v0, aGe, bq.vx.aHA);
	for (var aC = 0; aC < 4; aC++) aTu[0][aC] = new t9("0", ux.or[aC].button), aTu[1][aC] = new t9("0", ux.or[aC].button, 1);
	aTu[2][1] = new t9("0", aU0.or[1].button), aTu[3][1] = new t9("0", v0.or[1].button), (aTw = [new t9("", aU0.or[1].button, 1, 1), new t9("", v0.or[1].button, 1, 1)])[0].tA.style.bottom = "0em", aTw[1].tA.style.bottom = "0em", aU2(0, bq.z.tF[0],
		1), aU2(2, bq.z.tF[2], 1), (aTx = [new t9(L(306), aTt.vM(), 1, 0), new t9("", aTt.vM(), 1, 1)])[0].tA.style.fontSize = "0.4em", aTx[1].tA.style.fontSize = "0.4em"
}

function aPs() {
	var aQH, aQI, s8;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(407), [new x("⬅️ " + L(40), function() {
		u.v(7, u.a7C(7).a3P)
	}), new x(L(209), function() {
		bm.qh.qi(105, bJ.uV.yI(aQI.sA[0].rr[0].e.value, 5)), bm.qh.qi(106, bJ.uV.yI(aQI.sA[1].rr[0].e.value, 15)), u.v(8, u.a7C(7).a3P, new uU(18))
	})]), aQI = new s6(aQH.wc, ((s8 = []).push(function() {
		var aQd = new rq;
		return aQd.rt(L(187)), aQd.s4(new t0({
			value: "",
			eI: -1
		})), aQd
	}()), s8.push(function() {
		var aQd = new rq,
			aQo = (aQd.rt(L(190)), new t0({
				value: "",
				eI: -1
			}));
		return aQo.e.type = "password", aQd.s4(aQo), aQd.s4(new te([new x(L(191), function(e) {
			return e.textContent === L(191) ? (e.textContent = L(192), aQo.e.type = "text") : (e.textContent = L(191), aQo.e.type = "password"), !0
		}).button])), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		return aQd.rt(L(194)), aQd.rv(L(408)), aQd.rv(L(409)), aQd.rv(L(410)), aQd
	}()), s8))
}

function aPz() {
	var aQH, aTb, aTc, wX;

	function aTd(aC) {
		u.v(8, u.uT, new uU(21, {
			ul: aC,
			um: 0,
			un: 10
		}))
	}
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aTb.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aTc = [new x(L(369), function() {
		aTd(5)
	}, 0, 0, 1), new x(L(370), function() {
		aTd(6)
	}, 0, 0, 1), new x(L(371), function() {
		aTd(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aTd(12)
	}, 0, 0, 1)], wX = [new x("⬅️ " + L(40), function() {
		u.a3J()
	})], aQH = new wW(L(411), wX), aTb = new sl(aTc, aQH.wc)
}

function aPj() {
	this.buffer = {}, this.uo = new Array(8), this.aPx = null, this.aPu = null, this.u8 = 0, this.uL = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a6w = function(aUI) {
		aUI && (aa.aIF = aUI), u.y(), aa.dk()
	}, this.aEV = function() {
		u.v(0 === ab.a3K() ? 5 : 0)
	}, this.aSP = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a3O().a3P, new uU(24, {
			aRy: bm.buffer.data[125].value,
			um: bm.buffer.data[128].value,
			un: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a3O().a3P, new uU(23, {
				aRy: bm.buffer.data[125].value,
				a2s: h
			}))
		}
	}, this.aTU = function(a3P, target) {
		u.v(4, a3P, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aQe(
				"/privacy"), !1, [new x("⬅️ " + L(40), function() {
				u.v(a3P)
			}), new x("✅ Accept", function() {
				bm.qh.qi(140, 1), 0 === target ? u.v(2, a3P) : u.v(8, a3P, new uU(target))
			})]))
	}, this.aUJ = function() {
		for (var aC = 0; aC < 8; aC++) this.uo[aC] = bJ.y9.yD(bK.rL(5));
		this.uo[1] = "[" + this.uo[1] + "]", 5 === u.uT && (u.a3O().aJ3.qi(this.uo), u.a3O().resize())
	}, this.aQm = function(fu, qf, a8i) {
		fu = bD.go.a5w(fu, 1, 1e6);
		qf = L(412, [qf]);
		return (qf += "<br>") + L(413, [a8i]) + "<br>" + L(414, [fu + "–" + (fu + 2)]) + "<br>" + L(415, [fu])
	}
}

function aQ2() {
	var aRV, aRW, aUK, s8;

	function aRY() {
		b7.vr(), u.aQG()[19] = null, u.a3J()
	}

	function aUR() {
		aUU(), aUS()
	}

	function aUU() {
		aUK.rs.lastChild && u.removeChild(aUK.rs, aUK.rs.lastChild)
	}

	function aUS() {
		var aUV = bV.a73(aE.data);
		aE.data.canvas = bV.aNh(aUV, aE.data.mapSeed).yi, aUT()
	}

	function aUT() {
		var a50 = aE.data.canvas;
		a50.style.width = "100%", aUK.rs.appendChild(a50)
	}
	this.aKH = function(a50) {
		aE.data.canvas && aUU(), aE.data.canvas = a50, aUT()
	}, this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(334), [new x("⬅️ " + L(40), aRY)]), 2 === aE.data.mapType && b7.dk(), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(416), L(417), L(418)],
			value: aE.data.mapType
		}, function(eI) {
			2 === (aE.data.mapType = eI) ? (b7.dk(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.vr()), u.v(20)
		})), 2 <= aE.data.mapType && (aQd.s4(new tp), aQd.s4(new ta({
			value: aE.data.passableWater
		}, L(419), function(value) {
			aE.data.passableWater = value
		})), aQd.s4(new ta({
			value: aE.data.passableMountains
		}, L(420), function(value) {
			aE.data.passableMountains = value
		})));
		s8.push(aQd)
	}(s8 = []), function(s8) {
		if (0 === aE.data.mapType) {
			for (var aQd = new rq, oF = (aQd.rt(L(334)), []), aC = 0; aC < bV.yY.aOb.length; aC++) oF.push(bV.yY.yZ[bV.yY.aOb[aC]].name);
			aQd.s1(new wS({
				oF: oF,
				value: aE.data.mapProceduralIndex
			}, function(eI) {
				aE.data.mapProceduralIndex = eI, aUR()
			})), s8.push(aQd)
		}
	}(s8), function(s8) {
		if (1 === aE.data.mapType) {
			for (var aQd = new rq, oF = (aQd.rt(L(334)), []), aC = 0; aC < bV.yY.aOc.length; aC++) oF.push(bV.yY.yZ[bV.yY.aOc[aC]].name);
			aQd.s1(new wS({
				oF: oF,
				value: aE.data.mapRealisticIndex
			}, function(eI) {
				aE.data.mapRealisticIndex = eI, aUR()
			})), s8.push(aQd)
		}
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.mapType && ((aQd = new rq).rt(L(421)), aQd.s4(new t0(bm.buffer.data[162], 1)), aQd.rt(L(422), "0.8em"), aQd.s4(new te([new x(L(423), function() {
			return b7.aKA(), !0
		}).button])), s8.push(aQd))
	}(s8), function(s8) {
		var aQd, sz;
		2 === aE.data.mapType && ((aQd = new rq).rt(L(424)), sz = new t0({
			eI: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aQd.s4(sz), s8.push(aQd))
	}(s8), function(s8) {
		var aQd, sz, aQl;
		0 === aE.data.mapType && ((aQd = new rq).rt("Seed"), sz = new t0({
			eI: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aUR())
		}), aQl = new x(L(325), function(e) {
			var aNc = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aNc) return sz.e.value = aE.data.mapSeed = aNc, aUR(), !0
		}), aQd.s4(sz), aQd.s4(new te([aQl.button])), s8.push(aQd))
	}(s8), function(s8) {
		(aUK = new rq).rt(L(425)), 2 !== aE.data.mapType ? aUS() : aE.data.canvas && aUT();
		s8.push(aUK)
	}(s8), s8))
}

function w(title, s0, aUW, aTe) {
	var aQH, aSn;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aSn.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aTe = aTe || [new x("⬅️ " + L(40), function() {
		u.a3J()
	})], aQH = new wW(title, aTe), aSn = new td(aQH.wc, s0), aUW && bD.sD.textAlign(aQH.wc.style, 1)
}

function aQ5() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 === aE.data.playerNamesType && 1 === bD.sL.a4e(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.playerNamesType && bD.sL.a4s(aRX.x1(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(338), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(339), L(340), L(303)],
			value: aE.data.playerNamesType
		}, function(eI) {
			aRa(), aE.data.playerNamesType = eI, u.v(23)
		})), aQd.s4(new tp), aQd.s4(new ta({
			value: aE.data.selectableName
		}, L(426), function(value) {
			aE.data.selectableName = value
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd;
		2 === aE.data.playerNamesType && ((aQd = new rq).rt("Data"), aRX = new wu(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fP || (aE.data.playerNamesData = new Array(aE.fP), aE.data.playerNamesData
			.fill("")), aRX.x0(bD.tB.a6M(aE.data.playerNamesData, 1, '"')), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aQD() {
	var aRV, aRW, s8;

	function aUc() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fl = 0; fl < 3; fl++) fl < h.length && (colors[aC][fl] = Number(h[fl]))
		}
		return colors
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(427), [new x("⬅️ " + L(40), function() {
		u.a3J()
	})]), aRW = new s6(aRV.wc, ((s8 = []).push(function() {
		var aQd = new rq;
		return aQd.rt(L(428)), aQd.rz(b1.z.aQe("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aQd.rz("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aQd
	}()), s8.push(function() {
		var aQd = new rq,
			el = (aQd.rt(L(429)), bm.buffer.data[174].value),
			rw = aQd.rv(el.length + " / 180"),
			aRD = (rw.style.textAlign = "center", new wu(0, 1, function(e) {
				var e = e.target.value,
					gv = e.length;
				rw.textContent = gv + " / 180", gv <= 180 && bm.qh.qi(174, e)
			}));
		return aRD.e.rows = 6, aRD.e.style.fontSize = "1em", aRD.x0(el), aQd.s4(aRD), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		aQd.rt(L(324));
		for (var aC = 0; aC < 11; aC++) {
			var io = aQd.s4(new t0(bm.buffer.data[163 + aC]));
			aC && (io.e.style.marginTop = "0.6em")
		}
		return aQd.s4(new te([new x(L(430), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.xG(aC, data[aC].xJ);
			u.a3J(), u.aQG()[31] = null, u.v(31)
		}).button])), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		return aQd.rt("Targeting"), aQd.rz(L(431)), aQd.s4(new t0(bm.buffer.data[175], 0, 0)), aQd
	}()), s8.push(function() {
		var aQd = new rq;
		return aQd.rt(L(425)), aQd.s4(new te([new x(L(191), function() {
			(new ek).show(bm.buffer.data[174].value, aUc(), -1)
		}).button])), aQd
	}()), s8.push(function() {
		var aQd = new rq,
			aUd = (aQd.rt(L(432)), aQd.rz(L(433)), new t0(bm.buffer.data[176], 1, 0)),
			aUe = (aQd.s4(aUd), new x(L(434), function(e) {
				return aUf.button.textContent === L(186) && b1.z.ef(0) && (bD.sD.wP(e), aQk(), b1.aHN.aUg(bm.buffer.data[176].value, aUc(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aQk = function() {
				aUf.button.textContent = L(185), aUe.sX(1), aUe.button.style.color = bE.pH
			},
			aUf = new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aUe.sX(0), aUe.button.style.color = bE.qG) : aQk(), !0
			});
		return aQd.s4(new te([aUf.button, aUe.button])), aQd
	}()), s8))
}

function aQE() {
	var aQH, aQI, s8;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW("🔒 " + L(435), [new x("⬅️ " + L(40), function() {
		u.a3J()
	})]), aQI = new s6(aQH.wc, ((s8 = []).push(function() {
		var aQd = new rq,
			sz = (aQd.rz(b1.z.aQe("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", aQd.rt(L(187)), new t0({
				value: "",
				eI: -1
			})),
			aR9 = (aQd.s4(sz), aQd.rt(L(256), "0.8em"), new t0({
				value: "",
				eI: -1
			}, 0, 0)),
			aQj = (aR9.e.type = "email", aR9.e.autocomplete = "email", aR9.e.name = "email", aR9.e.inputMode = "email", aR9.e.spellcheck = !1, aQd.s4(aR9), new x(L(436), function(e) {
				return bD.sD.wP(e), b1.aHN.aRA({
					action: 4,
					ru: sz.e.value.trim() + aR9.e.value.trim().substring(0, 63)
				}), !0
			}));
		return aQd.s4(new te([aQj.button])), aQd
	}()), s8))
}

function aPq() {
	var aRV, wy;

	function aUi() {
		u.y();
		var ru = bC.aUm(wy.x1());
		(aE.a2B && 0 < ru.length && ru === bC.rX.a6s || bC.aLF.yT(ru)) && bC.aUn()
	}
	this.show = function(aUj) {
		this.aUk(aUj), aRV.show(), this.resize()
	}, this.aUk = function(aUj) {
		0 === aE.a2B ? aUj ? wy.x0(aUj) : aE.a6g.length && wy.x0(aE.a6g) : (aE.hb || (bC.rX.a6s = bC.a6t.a1d()), wy.x0(bC.aUl(bC.rX.a6s)))
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), wy.resize()
	}, this.a4F = function(ej) {
		2 === ej ? aRV.wd[0].sU() : aUi()
	}, aRV = new wW(L(437), [new x("⬅️ " + L(40), function() {
		u.aQF(1)
	}), new x(L(438), function() {
		wy.x2()
	}), new x(L(439), function() {
		wy.x3()
	}), new x(L(440), function() {
		wy.clear()
	}), new x(L(441), function() {
		aUi()
	})]), wy = new wu(L(442)), aRV.wc.appendChild(wy.e)
}

function aPp() {
	var aQH, aQI, s8, aQd;

	function aUo() {
		bA.aEH !== bm.buffer.data[12].value ? (bA.dk(), u.v(8, 1, new uU(30))) : u.v(1)
	}
	this.show = function() {
			aQH.show(), this.resize()
		}, this.tS = function() {
			aQH.tS()
		}, this.resize = function() {
			aQH.resize(), aQI.resize()
		}, this.a4F = function(ej) {
			2 === ej && aQH.wd[0].sU()
		}, aQH = new wW(L(443), [new x("⬅️ " + L(40), aUo), new x(L(444), function() {
			u.y(), bm.qh.xq(), u.v(2)
		})]), s8 = [], (aQd = new rq).rt(L(445)), aQd.rv(L(446)), s8.push(aQd),
		function(s8) {
			var aQd = new rq,
				h = (aQd.rt(L(431)), bA.data.aEY());
			aQd.s1(new wS({
				oF: h,
				value: bA.data.aEc(h)
			}, function(eI) {
				return bm.qh.qi(12, h[eI].split(":")[0]), !0
			})), s8.push(aQd)
		}(s8),
		function(s8) {
			var aQd = new rq,
				aUr = (aQd.rt(L(471)), []);
			aQd.s4(new te([new x(L(430), function(e) {
				ba.aUs();
				for (var aC = 0; aC < aUr.length; aC++) aUr[aC].e.value = ba.aDq[aC];
				return bD.sD.wP(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aUt.length; aC++) {
				aQd.rv(ba.aUt[aC]);
				for (var fl = 0; fl < 2; fl++) {
					var eI = 2 * aC + fl,
						sz = new t0({
							value: ba.aDq[eI],
							eI: -1
						});
					sz.e.aUu = eI, aUr.push(sz), sz.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aUv(e.target.aUu, code)
					}), fl && (sz.e.style.marginLeft = "4%"), sz.e.style.width = "48%", aQd.s4(sz)
				}
			}
			s8.push(aQd)
		}(s8), (aQd = new rq).rt(L(447)), bm.buffer.data[1].oF = [L(448), L(449), L(450), L(451)], aQd.s1(new wS(bm.buffer.data[1])), s8.push(aQd), (aQd = new rq).rt(L(452)), bm.buffer.data[9].oF = [L(449), L(453), L(454)], aQd.s1(new wS(bm.buffer
			.data[9])), s8.push(aQd), (aQd = new rq).rt(L(455)), bm.buffer.data[11].oF = [L(456), L(9), L(457)], aQd.s1(new wS(bm.buffer.data[11])), s8.push(aQd), (aQd = new rq).rt(L(458)), aQd.s4(new ta(bm.buffer.data[2])), s8.push(aQd), (aQd =
			new rq).rt(L(459)), aQd.s4(new ta(bm.buffer.data[7])), s8.push(aQd), (aQd = new rq).rt(L(460)), aQd.s4(new ta(bm.buffer.data[8])), s8.push(aQd), (aQd = new rq).rt(L(461)), aQd.s4(new t0(bm.buffer.data[5])), s8.push(aQd), (aQd = new rq)
		.rt(L(462)), aQd.s4(new ta(bm.buffer.data[13], L(463))), aQd.s4(new ta(bm.buffer.data[14], L(464))), s8.push(aQd), (aQd = new rq).rt(L(465)), aQd.s1(new wS({
			oF: [L(466), L(467), L(468)],
			value: aa.aIG
		}, function(aC) {
			aa.aIG = aC
		})), s8.push(aQd), (aQd = new rq).rt(L(469)), aQd.s4(new ta(bm.buffer.data[15])), aQd.rv(L(470)), aQd.s4(new t0(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.ia(Math.floor(e.target.value), 0, 16)
		})), s8.push(aQd), aQI = new s6(aQH.wc, s8)
}

function aQ6() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 !== aE.data.spawningType || bD.sL.a4e(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.spawningType && bD.sL.a4q(aRX.x1(), aE.data.spawningData, bV.aKK - 1)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(472), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq,
			oF = (aQd.rt(L(300)), [L(325), L(337), L(303)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oF.splice(1, 1), 0 < value) && (value = 1);
		aQd.s1(new wS({
			oF: oF,
			value: value
		}, function(eI) {
			aRa(), aE.data.spawningType = eI, 0 === aE.data.gameMode && 1 === eI && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fP)), u.v(24)
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd = new rq;
		aQd.rt("My Spawn"), aQd.s4(new ta({
			value: aE.data.selectableSpawn
		}, L(473), function(value) {
			aE.data.selectableSpawn = value
		})), s8.push(aQd)
	}(s8), function(s8) {
		var aQd = new rq,
			aUx = (aQd.rt("Seed"), new t0({
				eI: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		aQd.s4(aUx), aQd.s4(new te([new x(L(325), function() {
			aUx.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), s8.push(aQd)
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.spawningType && ((aQd = new rq).rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.spawningData, 2)), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aPo() {
	var aQH, aTb, aTc, wX;

	function aUy(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new uU(16)) : u.v(2) : u.z.aTU(u.uT, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aQH.show(), this.resize(), this.ee()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aTb.resize()
	}, this.ee = function() {
		8 === ab.a3K() && (2 <= bg.aV3 ? aTc[2].sV === bE.pT && aTc[2].sX(0) : aTc[2].sV !== bE.pT && aTc[2].sX(bE.pT), !aE.hb && aN.ro(aE.fC) ? aTc[1].sV === bE.pT && aTc[1].sX(0) : aTc[1].sV !== bE.pT && aTc[1].sX(bE.pT), !aE.hb && ax.iH(aE
			.fC) ? aTc[0].sV === bE.pT && aTc[0].sX(0) : aTc[0].sV !== bE.pT && aTc[0].sX(bE.pT))
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aTc = [new x(L(474), function() {
		aUy(0)
	}), new x(L(361), function() {
		u.v(16)
	}), new x(L(411), function() {
		u.v(17)
	}), new x(L(475), function() {
		u.z.aSP()
	}, 0, 0, 1), new x(L(437), function() {
		u.v(3, 1)
	}), new x(L(476), function() {
		u.v(18)
	}), new x(L(427), function() {
		u.v(31)
	}), new x(L(477), function() {
		u.z.a6w(2)
	}), new x(L(443), function() {
		aUy(1)
	}), new x("🔒 " + L(435), function() {
		u.v(32)
	}), new x(L(478), function() {
		var a5Q, sH;
		(a5Q = []).push(["Wiki", (sH = "https://territorial.io/") + "wiki/gold"]), a5Q.push(["Team Games", sH + "log/team"]), a5Q.push(["Battle Royale Games", sH + "log/br"]), a5Q.push(["1v1 Games", sH + "log/1v1"]), a5Q.push([
			"Zombie Games", sH + "log/zombies"
		]), a5Q.push(["Transactions", sH + "log/transactions"]), a5Q.push(["Changelog", sH + "changelog"]), 2 !== a1.id && a5Q.push(["Android App", bN.aEp]), 1 !== a1.id && a5Q.push(["iOS App", bN.a3G]), 0 === a1.id && a5Q.push([
			"Patreon", bN.aRT
		]), a5Q.push(["Terms", bN.aV4]), a5Q.push(["Privacy", bN.aV5]), u.v(4, 1, new w(L(478), bD.sD.a5P(a5Q), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	}), new x(L(479), function() {
		u.v(4, 1, new w(L(479), m.e3 + "<br>" + b1.z.aQe("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(40),
				function() {
					u.v(1)
				})]))
	}), new x(L(480), function() {
		u.v(4, 1, new w(L(480), L(487) + "<br>" + L(488), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(489), function() {
			a1.a2.a3A(), u.v(1)
		})]))
	}), new x("👁️ " + L(481), function() {
		a1.a2.a3B(), u.v(4, 1, new w(L(490), L(491) + " " + b1.z.aQe("/privacy"), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	})], wX = [new x("⬅️ " + L(40), function() {
		u.z.aEV()
	})], 8 === ab.a3K() && (aTc.unshift(new x(L(348), function() {
		u.v(30)
	})), aTc.unshift(new x(L(484), function() {
		2 <= bg.aV3 && (u.y(), bh.a4I(), bi.ds = !0)
	}, 0, 1)), aTc.unshift(new x(L(485), function() {
		!aE.hb && aN.ro(aE.fC) && (bB.hs.r1(), u.y(), aN.hc) && aN.a4I()
	}, 0, 1)), aTc.unshift(new x(L(486), function() {
		!aE.hb && ax.iH(aE.fC) && (bY.a7Y(2), bB.hs.iD(), u.y(), aN.hc) && aN.a4I()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e3 && aTc.push(new x(L(482), function() {
		a1.a2.a3C()
	})), aQH = new wW(L(483), wX), aTb = new sl(aTc, aQH.wc)
}

function aQA() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.sResourcesType && bD.sL.a4q(aRX.x1(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(343), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(301), L(302), L(303)],
			value: aE.data.sResourcesType
		}, function(eI) {
			aRa(), 2 !== eI || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fP)), aE.data.sResourcesType = eI, u.v(28)
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd;
		1 === aE.data.sResourcesType && ((aQd = new rq).rt("Value"), aQd.s4(new t0({
			eI: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), s8.push(aQd))
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.sResourcesType && ((aQd = new rq).rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.sResourcesData, 2)), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aQ8() {
	var aRV, aRW, aRX, s8;

	function aRY() {
		aRa(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aQG()[19] = null, u.a3J()
	}

	function aRa() {
		2 === aE.data.tIncomeType && bD.sL.a4q(aRX.x1(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aRV.show(), this.resize()
	}, this.tS = function() {
		aRV.tS()
	}, this.resize = function() {
		aRV.resize(), aRW.resize()
	}, this.a4F = function(ej) {
		2 === ej && aRV.wd[0].sU()
	}, aRV = new wW(L(341), [new x("⬅️ " + L(40), aRY)]), aRW = new s6(aRV.wc, (function(s8) {
		var aQd = new rq;
		aQd.rt(L(300)), aQd.s1(new wS({
			oF: [L(301), L(302), L(303)],
			value: aE.data.tIncomeType
		}, function(eI) {
			aRa(), 2 !== eI || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fP), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eI, u.v(26)
		})), s8.push(aQd)
	}(s8 = []), function(s8) {
		var aQd;
		1 === aE.data.tIncomeType && ((aQd = new rq).rt("Value"), aQd.s4(new t0({
			eI: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ia(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), s8.push(aQd))
	}(s8), function(s8) {
		var aQd;
		2 === aE.data.tIncomeType && ((aQd = new rq).rt("Data"), (aRX = new wu(0, 1, 0, 1)).x0(bD.tB.a6M(aE.data.tIncomeData, 4)), aQd.s4(aRX), s8.push(aQd))
	}(s8), s8))
}

function aQ0() {
	var aQH, aQI, s8;
	this.show = function() {
		aQH.show(), this.resize()
	}, this.tS = function() {
		aQH.tS()
	}, this.resize = function() {
		aQH.resize(), aQI.resize()
	}, this.a4F = function(ej) {
		2 === ej && aQH.wd[0].sU()
	}, aQH = new wW(L(476), [new x("⬅️ " + L(40), function() {
		u.a3J()
	})]), aQI = new s6(aQH.wc, ((s8 = []).push(function() {
		function aQk() {
			aUf.button.textContent = L(185), aV8.e.readOnly = !1, aV9.e.readOnly = !1, aQj.sX(1), aQj.button.style.color = bE.pH
		}
		var aQd = new rq,
			aV7 = (aQd.rz(b1.z.aQe("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aQd.rt(L(492)), new t0({
				value: bm.buffer.data[105].value,
				eI: -1
			})),
			aV8 = (aV7.e.readOnly = !0, aQd.s4(aV7), aQd.rt(L(387), "0.8em"), new t0(bm.buffer.data[148], 0, void 0, function(e) {
				aQi(bm.buffer.data[149].value, e.target.value)
			})),
			aV9 = (aQd.s4(aV8), aQd.rt(L(391), "0.8em"), new t0(bm.buffer.data[149], 1, void 0, function(e) {
				aQi(e.target.value, bm.buffer.data[148].value)
			})),
			aUf = (aQd.s4(aV9), new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aV8.e.readOnly = !0, aV9.e.readOnly = !0, aQj.sX(0), aQj.button.style.color = bE.qG, bm.qh.qi(149, aV9.e.value), aQi(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aQk(), !0
			})),
			aQj = (aQd.s4(new te([aUf.button])), new x(L(14), function(e) {
				return aV8.e.readOnly && b1.z.ef(0) && (bD.sD.wP(e), aQk(), b1.aHN.aHO({
					action: 0,
					uR: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			rw = aQd.rv(),
			aQi = (aQd.rv(L(493)).style.fontWeight = "bold", function(fu, ru) {
				rw.innerHTML = u.z.aQm(fu, bm.buffer.data[105].value, ru)
			});
		return aQd.s4(new te([aQj.button])), aQi(bm.buffer.data[149].value, bm.buffer.data[148].value), aQd
	}()), s8))
}

function c0() {
	"function" != typeof Math.log2 && (Math.log2 = function(fZ) {
		return Math.log(fZ) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fZ) {
		return Math.log(fZ) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fZ) {
		return 0 < fZ ? 1 : fZ < 0 ? -1 : 0
	})
}

function cm() {
	var aBV, aVB, aVC, aVD, aVA = !1;

	function aVE() {
		aVA = !0, aBV = -1, aVB = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aVB[aC] = !1;
		var zY = Math.floor(1 + .02 * i.min);
		aVC = new Array(4), (aVD = new Array(4))[1] = aVD[3] = aVC[0] = aVC[2] = 0, aVD[0] = aVC[3] = -zY, aVC[1] = aVD[2] = zY
	}

	function aVF() {
		if (-1 !== aBV)
			if (0 !== aE.a2B && aI.o6()) {
				for (var aVG = !1, aC = 3; 0 <= aC; aC--) aVB[aC] && (aVG = !0, j6 += aVC[aC], j7 += aVD[aC], ag.a3h(aVC[aC], aVD[aC]), aT.aBB());
				aVG ? bi.ds = !0 : at.nw()
			} else at.nw()
	}
	this.a4D = function(eI) {
		0 !== aE.a2B && aI.o6() && (aVA || aVE(), aVB[eI] = !0, -1 === aBV) && (aBV = setInterval(aVF, 20), aVF())
	}, this.a4G = function(eI) {
		if (0 !== aE.a2B && (aVA || aVE(), aVB[eI] = !1, -1 !== aBV)) {
			for (var aVG = !1, aC = 3; 0 <= aC; aC--) aVG = aVG || aVB[aC];
			aVG || this.nw()
		}
	}, this.nw = function() {
		if (aVA && -1 !== aBV) {
			for (var aC = 3; 0 <= aC; aC--) aVB[aC] = !1;
			clearInterval(aBV), aBV = -1
		}
	}
}

function cn() {
	this.z = new aVH, this.n5 = new aVI, this.qf = new aVJ, this.aGp = new aVK, this.eg = new aVL, this.aHN = new aVM, this.rK = new aVN, this.aSt = new aVO, this.a8i = new aVP, this.aVQ = new aVR, this.aVS = new aVT, this.aVU = new aVV, this.aVW =
		new aVX, this.dk = function() {
			this.z.dk()
		}
}

function aVH() {
	var aVZ, aVa;
	this.aIK = 3, this.aVY = null, this.a3S = 0, this.f0 = 0;

	function aVj() {
		return 0 === aa.aIG ? m.e5 ? 1 : 0 : aa.aIG - 1
	}

	function aVm(oG, a3P, aVl) {
		aVa[oG].aVA = !0, aVf(oG), aVZ[oG] = new aVp, aVZ[oG].dk(oG, a3P, aVl)
	}

	function aVn(aC) {
		return aVa[aC].aVA && aVZ[aC].aVn()
	}

	function aVf(oG) {
		aVa[oG].eZ = bi.eZ, aVa[oG].aVc = !1
	}
	this.dk = function() {
		this.aVY = new Array(this.aIK), this.aVY[0] = "territorial.io", this.aVY[1] = "1.territorial.io", this.aVY[2] = "2.territorial.io", aVZ = new Array(this.aIK), aVa = new Array(this.aIK);
		for (var aC = this.aIK - 1; 0 <= aC; aC--) aVa[aC] = {
			aVA: !1,
			eZ: 0,
			aVc: !1
		};
		this.aIL(0, 0, 0)
	}, this.aVd = function(aC) {
		return aVZ[aC]
	}, this.ee = function() {
		for (var aC = this.aIK - 1; 0 <= aC; aC--) this.ef(aC) && bi.eZ > aVa[aC].eZ + 15e3 && (b1.qf.aVe(aC, aVa[aC].aVc), aVf(aC));
		!this.ef(0) && bi.eZ > aVa[0].eZ + 8e3 && (aVa[0].eZ = bi.eZ, this.aIL(0, 0, 0))
	}, this.aSq = function(id) {
		return this.aIL(0, id, 0) && this.aVg(0)
	}, this.aVh = function(aVi) {
		return aVi ? aa.aIH : aVj()
	}, this.a2b = function() {
		return aVj() ? "game.territorial.io" : "territorial.io"
	}, this.aQe = function(aVk) {
		aVk = this.a2b() + aVk;
		return "<a href='https://" + aVk + "' target='_blank'>" + aVk + "</a>"
	}, this.aIL = function(oG, a3P, aVi) {
		aVi = this.aVh(aVi);
		if (aVa[oG].aVA) {
			if (aVZ[oG].aVn()) return aVZ[oG].aVo(a3P), aVZ[oG].ef();
			aVZ[oG].tS()
		}
		return aVm(oG, a3P, aVi), !1
	}, this.aVq = function(oG, a3P) {
		console.log("Connection to Server " + oG), b1.eg.aVr(oG)
	}, this.aVg = function(aC) {
		return this.ef(aC) && aVZ[aC].aVg()
	}, this.aVs = function(aC) {
		aVZ[aC].aVs()
	}, this.ef = function(aC) {
		return aVa[aC].aVA && aVZ[aC].ef()
	}, this.send = function(oG, aD) {
		0 !== oG && aVf(oG), aVZ[oG].send(aD)
	}, this.a3y = function(oG) {
		8 === ab.a3K() && (aVa[oG].aVc = !0, b1.n5.aVt = !0)
	}, this.close = function(oG, aVu) {
		aVn(oG) && aVZ[oG].close(aVu)
	}, this.aVv = function(oG, aVu) {
		p.a3W(aVu), aVn(oG) && aVZ[oG].close(aVu)
	}, this.a3X = function(aVu) {
		for (var aC = this.aIK - 1; 0 <= aC; aC--) this.close(aC, aVu)
	}, this.aVw = function(oG, aVu) {
		for (var aC = this.aIK - 1; 0 <= aC; aC--) aC !== oG && this.close(aC, aVu)
	}, this.a6u = function() {
		0 === this.a3S && (aE.l7 || aE.hb) || this.close(this.a3S, 3246)
	}, this.aVx = function(oG, e) {
		aVZ[oG].tS(), p.a3H(oG, e.code)
	}
}

function aVI() {
	this.aVt = !1, this.ee = function() {
		bi.kk() % 250 != 249 || aE.hb || (b1.eg.aVy(+(this.aVt && ah.nN[aE.fC]), am.lJ + bQ.z.md), this.aVt = !1)
	}
}

function aVP() {
	this.aW0 = function(oG, aD) {
		bK.dk(aD), 0 === bK.size ? b1.z.aVv(oG, 3205) : ((0 === bK.rL(1) ? function(oG) {
			var aW4 = bK.rL(6);
			0 === aW4 ? function(oG) {
					if (0 === oG && 8 !== ab.a3K()) {
						u.z.aUJ();
						for (var aWK = bK.rL(12), aWL = bK.rL(6), h = new Array(aWK), aC = 0; aC < aWK; aC++) h[aC] = bK.rL(aWL);
						aU.aBb(h)
					}
				}(oG) : 2 === aW4 ? b1.aVQ.aW6(oG) : 3 === aW4 || 4 === aW4 ? ay.dk() : 5 === aW4 ? b1.aVS.aW7() : 9 === aW4 ? b1.aVS.aW8(oG) : 10 === aW4 ? b1.aVU.aW9() : 11 === aW4 ? b1.aVS.aWA(oG) : 12 === aW4 ? b1.aVU.aWB() :
				13 === aW4 ? b1.aVW.aWC() : 14 === aW4 ? b1.aVW.aWD() : 15 === aW4 ? b1.aVS.aWE() : 16 === aW4 ? b1.aVQ.aWF(oG) : 17 === aW4 ? b1.aVQ.aWG(oG) : 19 === aW4 ? b1.aVQ.aWH(oG) : 20 === aW4 ? b1.aVS.aWI(oG) : 21 !== aW4 &&
				22 !== aW4 && 23 === aW4 && b1.aVS.aWJ(oG)
		} : function(oG) {
			if (8 !== ab.a3K() && !ay.aIo()) return;
			if (oG !== b1.z.a3S) b1.z.aVv(oG, 3244);
			else if (0 === bK.rL(1)) bi.a2L.aWM(bK.aD);
			else {
				var aC, oG = bK.rL(2);
				if (0 === oG) {
					var qw, qf = bK.rL(9);
					0 !== ah.nN[qf] && 0 !== ah.nN[aE.fC] && (qw = bK.rL(10), aO.qv(qf, aE.fC, qw), ag.rm(qf, 1, qw))
				} else if (1 === oG) ! function() {
					var qf = bK.rL(9);
					0 !== ah.nN[qf] && 0 !== ah.nN[aE.fC] && b6.aND(0, [qf], !0) && aO.rD(qf, 1)
				}();
				else if (2 === oG) ! function() {
					var qf = bK.rL(9),
						target = bK.rL(9);
					0 !== ah.nN[qf] && 0 !== ah.nN[target] && 0 !== ah.nN[aE.fC] && b6.aND(1, [qf], !0) && (ag.rm(qf, 3, 96), ag.rm(target, 4, 96), aO.a8o(qf, target))
				}();
				else if (m.aA && !m.aB) {
					var fS = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fS = Math.min(bB.qb.rN.length, 540), aC = 0; aC < fS; aC++) bG.aWS(32, bB.qb.rN[aC]);
					b1.z.send(b1.z.a3S, bG.aD)
				}
			}
		})(oG), bi.aW3())
	}
}

function aVV() {
	this.aW9 = function() {
		bm.z.xg(), bm.qh.qi(105, bI.uV.uW(bI.uV.uX(5))), bm.qh.qi(106, bI.uV.uW(bI.uV.uX(15))), bm.qh.qi(109, 0), bm.qh.qi(108, bm.buffer.data[109].value), bm.qh.qi(111, bm.buffer.data[109].value + 1), bm.qh.qi(107, 0), bm.qh.qi(110, "")
	}, this.aWB = function() {
		var data;
		bK.size < bG.aWT(29) ? b1.z.aVv(0, 3254) : ((data = {
			uS: bK.rL(30),
			xu: bK.rL(16),
			xv: bK.rL(30),
			xw: bK.rL(30),
			xx: bK.rL(30),
			xy: bK.aWU(32),
			username: bJ.yB.yT(5),
			xz: bJ.yB.yT(3),
			y0: bJ.yB.yT(3),
			y1: bK.aWU(32),
			y2: bK.aWU(32),
			y3: bK.rL(30),
			y4: bK.aWU(32),
			y5: bK.aWU(32),
			y6: bK.aWU(32),
			y7: bK.aWU(32),
			aQu: bK.aWU(32),
			aQv: bK.aWU(30),
			aRL: bK.aWU(32),
			aRM: bJ.yB.yT(3),
			aRE: bK.aWU(2),
			aRG: bK.aWU(10),
			aRC: bJ.yB.yT(8),
			aRF: bK.aWU(5),
			aQg: bK.rL(30),
			aQr: bK.rL(30),
			a2e: bK.aWU(32),
			aQz: bK.rL(3),
			aQy: bK.rL(8),
			aQs: bK.rL(30),
			aQt: bK.aWU(32),
			aQx: bK.rL(1),
			aR8: bJ.yB.yT(6),
			aR0: bK.rL(1),
			aR1: bK.rL(1),
			aR2: bK.rL(1),
			aRN: bK.rL(1),
			aRO: bK.rL(1)
		}).aRN && (data.aRP = bK.aWU(32), data.aRQ = bK.rL(30), data.aRR = bK.rL(30), data.aRS = bK.rL(1)), 8 === u.uT && (25 === u.a3O().aSp ? (data.aQJ = !0, u.z.aPx = data, u.a3O().aEU(25, !1)) : (data.aQJ = !1, bm.qh.qi(160, +(data
			.aRN && data.aRS)), data.uR = bm.buffer.data[105].value, u.z.aPu = data, bm.qh.xt(data), u.a3O().aEU(16, !0))))
	}
}

function aVX() {
	this.aWC = function() {
		var aC;
		if (bK.size < bG.aWT(23)) b1.z.aVv(0, 3259);
		else {
			var ul = bK.rL(6),
				fS = bK.rL(10),
				data = [];
			if (9 === ul || 10 === ul || 11 === ul || 13 === ul) {
				for (aC = 0; aC < fS; aC++) data.push([bK.rL(30), bJ.yB.yT(5), bK.aWU(32), 0, bK.rL(30)]);
				8 === u.uT && u.a3O().aEU(21, !0, {
					ul: ul,
					data: data
				})
			} else if (12 === ul) {
				for (aC = 0; aC < fS; aC++) data.push([bK.rL(20), bK.rL(30), bK.rL(30), bK.aWU(32), bK.rL(30), bJ.yB.yT(5), bJ.yB.yT(5)]);
				8 === u.uT && u.a3O().aEU(21, !0, {
					ul: ul,
					data: data
				})
			} else {
				var iP = bK.rL(16);
				if (bK.aWV(39 + 16 * iP + fS * (0 === ul ? 111 : 1 === ul ? 101 : 2 === ul || 3 === ul ? 127 : 212))) {
					if (0 === ul)
						for (aC = 0; aC < fS; aC++) data.push([bK.rL(30), bJ.y9.yD(bK.rL(5)), bK.rL(16), bK.rL(30), bK.rL(30)]);
					else if (1 === ul)
						for (aC = 0; aC < fS; aC++) data.push([bK.rL(16), bJ.y9.yD(bK.rL(3)), bK.rL(16), bJ.y9.yD(bK.rL(5)), bK.rL(31), bK.rL(30)]);
					else if (2 === ul || 3 === ul)
						for (aC = 0; aC < fS; aC++) data.push([bK.rL(30), bJ.y9.yD(bK.rL(5)), bK.aWU(32), bK.rL(30), bK.rL(30)]);
					else
						for (aC = 0; aC < fS; aC++) data.push([bK.rL(20), bK.rL(30), bK.rL(30), bK.rL(30), bK.rL(30), bK.aWU(32), bK.rL(30), bJ.y9.yD(bK.rL(5)), bJ.y9.yD(bK.rL(5))]);
					8 === u.uT && u.a3O().aEU(21, !0, {
						ul: ul,
						data: data
					})
				} else b1.z.aVv(0, 3260)
			}
		}
	}, this.aWD = function() {
		if (bK.size < bG.aWT(29)) b1.z.aVv(0, 3265);
		else {
			var aWW = bK.rL(4),
				aWX = bK.rL(7),
				aWY = bK.rL(11);
			if (bK.aWV(29 + 16 * aWX + 16 * aWY + 11 * aWW)) {
				for (var data = [], aC = 0; aC < aWW; aC++) {
					for (var a2t = bJ.y9.yD(bK.rL(3)), aWZ = bK.rL(8), aRz = [], fl = 0; fl < aWZ; fl++) aRz.push(bK.rL(16));
					data.push({
						name: "[" + a2t + "]",
						aRz: aRz
					})
				}
				8 === u.uT && u.a3O().aEU(23, !0, data)
			} else b1.z.aVv(0, 3266)
		}
	}
}

function aVR() {
	function aWb() {
		var id = bK.rL(3);
		return 0 === id ? {
			id: id,
			uR: bK.rL(30),
			s: bq.aEv.aGu(bJ.yB.yT(7))
		} : 1 === id ? {
			id: id,
			uR: bK.rL(30),
			aFw: bK.rL(3),
			value: bK.rL(30),
			target: bK.rL(30)
		} : 2 === id ? {
			id: id,
			uR: bK.rL(30),
			aFw: bK.rL(3)
		} : 3 === id ? {
			id: id,
			uR: bK.rL(30),
			aFw: bK.rL(3),
			value: bK.rL(4),
			target: bK.rL(30)
		} : 4 === id ? {
			id: id,
			uR: bK.rL(30),
			aFw: bK.rL(3),
			target: bK.rL(30)
		} : 5 === id ? {
			id: id,
			aFw: bK.rL(6)
		} : 6 === id ? {
			id: id,
			value: bK.rL(17)
		} : null
	}
	this.aW6 = function(oG) {
		if (oG !== b1.z.f0) b1.z.close(oG, 3239);
		else if (6 !== ab.a3K()) b1.z.close(oG, 3271);
		else {
			bq.dk();
			for (var aC = 0; aC < 4; aC++) {
				var tG = bq.z.tH[aC],
					playerCount = (tG.vJ = bK.rL(10), tG.f8 = bK.rL(6), tG.mapSeed = bK.rL(14), tG.aFh = bK.rL(4), tG.aHR = bK.rL(6), tG.aHS = bK.rL(14), tG.aHT = bK.rL(4), tG.aFn = bK.rL(1), tG.aGV = bK.rL(12), tG.spawningSeed = bK.rL(14), bK
						.rL(16));
				bq.va.vc[aC] = bK.rL(16);
				for (var fl = 0; fl < playerCount; fl++) bq.va.aF9(aC, bK.rL(30), bJ.yB.yT(5), bK.rL(4), bK.rL(30), bK.rL(7), bK.rL(16), bK.rL(18), bK.rL(11), bK.rL(12))
			}
			u.v(29), bq.z.aGN(!0)
		}
	}, this.aWF = function(oG) {
		if (oG !== b1.z.f0) b1.z.close(oG, 3239);
		else if (bq.ez) {
			bq.z.aGL[0] = bK.rL(20), bq.z.aGL[1] = bK.rL(20);
			for (var aWa = bK.rL(16), fl = 0; fl < aWa; fl++) {
				var id = bK.rL(3);
				0 === id ? bq.va.aF9(bK.rL(2), bK.rL(30), bJ.yB.yT(5), 0, 1234566, 127, 0, bK.rL(18), 0, bK.rL(12)) : 1 === id ? bq.va.aFS(bK.rL(16), bK.rL(2)) : 2 === id ? bq.va.aFO(bK.rL(16), bK.rL(2), bK.rL(2)) : 3 === id ? bq.va.aFR(bK.rL(
					16), bK.rL(2)) : 4 === id ? bq.va.aFH(bK.rL(16), bK.rL(2), bK.rL(4), bK.rL(30), bK.rL(7), bK.rL(16), bK.rL(11), bK.rL(18)) : 5 === id && bq.va.aFI(bK.rL(16), bK.rL(2), bK.rL(1))
			}
			for (var aC = 0; aC < 4; aC++) {
				var tG = bq.z.tH[aC];
				if (tG.vJ = bK.rL(10), tG.aHR = bK.rL(6), tG.aHS = bK.rL(14), tG.aHT = bK.rL(4), 0 === tG.vJ) {
					if (tG.a3S = bK.rL(10), tG.aFl = bK.rL(10), bq.aEx.dt(aC)) return;
					tG.f8 = bK.rL(6), tG.mapSeed = bK.rL(14), tG.aFh = bK.rL(4), tG.aFn = bK.rL(1), tG.aGV = bK.rL(12), tG.spawningSeed = bK.rL(14), tG.aHU.push(tG.aHU[0]), tG.aHU.shift()
				}
			}
			bq.z.aFd()
		} else b1.z.close(oG, 3251)
	}, this.aWG = function(oG) {
		if (oG !== b1.z.f0) b1.z.close(oG, 3272);
		else if (bq.ez) {
			for (var tE = bK.rL(4), tG = bq.z.tH[tE], tI = tG.tI, vq = (tG.tJ = bK.rL(20), bK.rL(6)), aC = 0; aC < vq; aC++) {
				var aHl = aWb();
				bq.tR.aHk(aHl), tI.push(aHl)
			}
			bq.z.aGW(tE)
		} else b1.z.close(oG, 3273)
	}, this.aWH = function(oG) {
		oG !== b1.z.f0 ? b1.z.close(oG, 3276) : bq.ez ? bq.message.aFb(aWb()) : b1.z.close(oG, 3277)
	}
}

function aVT() {
	this.aW7 = function() {
		for (var id = bK.rL(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.rL(8), bK.rL(8), bK.rL(8)]);
		var el = bJ.yB.yT(8);
		bX.eS.ei({
			id: id,
			colors: colors,
			el: el
		})
	}, this.aWI = function(oG) {
		var aWc = bK.rL(3),
			fV = bK.rL(5),
			fV = bl.aWd.aWe(fV, bK.rL(30), bK.rL(30), bK.rL(30));
		b1.eg.aWf(oG, fV, aWc, 0)
	}, this.aW8 = function(oG) {
		this.aWI(oG), bm.qh.qi(183, bI.uV.uW(bI.uV.uX(15))), 0 === oG && 0 === bm.buffer.data[105].value.length ? b1.eg.eh(0) : b1.aHN.aWg(oG), 4 === b1.z.aVd(oG).aWh() ? 6 === ab.a3K() && b1.aGp.aIM(oG) : 5 !== b1.z.aVd(oG).aWh() || 8 !== ab
			.a3K() && 10 !== ab.a3K() || b1.qf.aIl()
	}, this.aWA = function(oG) {
		var id = bK.rL(6);
		1 === id ? (bm.qh.qi(160, bK.rL(30)), b1.z.aVs(oG), aU.aBX || b1.eg.eh(1), bA.aEQ(), 8 === u.uT && u.a3O().aT2()) : 21 === id ? 8 === u.uT && u.a3O().aEU(17) : 22 === id && (bm.qh.qi(106, bm.buffer.data[110].value), bm.qh.qi(110, ""),
			8 === u.uT) && u.a3O().aEU(15)
	}, this.aWE = function() {
		var fS = bK.rL(16),
			aWi = bK.rL(16);
		if (bK.aWV(55 + 10 * fS + 16 * aWi)) {
			for (var h = [], aC = 0; aC < fS; aC++) h.push(bJ.y9.yD(bK.rL(10)));
			bA.aET(h)
		} else b1.z.aVv(0, 3270)
	}, this.aWJ = function(oG) {
		for (var aWc = bK.rL(3), fV = bK.rL(5), aWc = {
				aWc: aWc,
				sj: bl.aWd.aWe(fV, bK.rL(30), bK.rL(30), bK.rL(30))
			}, fV = bK.aWU(32), aWj = [], aC = 0; aC < 17; aC++) aWj.push(new Uint8Array(bK.rL(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aWj[aC], fS = h.length, iK = 0; iK < fS; iK++) h[iK] = bK.aWU(8);
		bw.show(aWj, fV, oG, aWc)
	}
}

function aVJ() {
	this.aVe = function(oG, aVc) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aVc ? 1 : 0), bG.a9(3, 0 === aE.a2B ? bq.ez ? 6 : 0 : aE.hb ? 1 : aE.l7 ? 7 : aE.l5 < 7 ? 2 : 8 === aE.l5 ? 4 : 9 === aE.l5 ? 5 : 3), b1.z.send(oG, bG.aD)
	}, this.aIl = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f0), bG.a9(10, ay.aFl), bG.a9(9, ay.aIe), bG.a9(10, m.e7), bG.a9(14, m.dw), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qg = function(fE) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fE), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qj = function(j5, jw) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, j5), bG.a9(10, jw), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qn = function(j5, ql) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, j5), bG.a9(9, ql), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qp = function(j5, qo) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, j5), bG.a9(27, qo), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qr = function(j5, nl) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, j5), bG.a9(16, nl), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qu = function(jw) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, jw), b1.z.send(b1.z.a3S, bG.aD)
	}, this.qy = function(eI) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eI), b1.z.send(b1.z.a3S, bG.aD)
	}, this.r0 = function(qz) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, qz), b1.z.send(b1.z.a3S, bG.aD)
	}, this.r2 = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a3S, bG.aD)
	}, this.r3 = function(j5, fE, jw) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, j5), bG.a9(10, jw), bG.a9(22, fE), b1.z.send(b1.z.a3S, bG.aD)
	}, this.rB = function(aWk, aWl) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aWl), bG.a9(10, aWk), b1.z.send(b1.z.a3S, bG.aD)
	}, this.rE = function(a8i) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a8i), b1.z.send(b1.z.a3S, bG.aD)
	}, this.rI = function(aWm, target) {
		var aC, fS = aWm.length;
		for (bG.a8(14 + 9 * fS), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fS; aC++) bG.a9(9, aWm[aC]);
		b1.z.send(b1.z.a3S, bG.aD)
	}
}

function aVM() {
	this.aWn = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eg.aWo(), b1.z.send(0, bG.aD)
	}, this.aWg = function(oG) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.uV.yP(bm.buffer.data[105].value, 5), bJ.uV.yP(bm.buffer.data[106].value, 15), b1.z.send(oG, bG.aD)
	}, this.aT3 = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.uV.yP(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aRA = function(a5z) {
		var fS = a5z.ru.length;
		bG.a8(21 + 16 * fS), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a5z.action), bG.a9(8, fS), bI.y9.yO(a5z.ru), b1.z.send(0, bG.aD)
	}, this.aUg = function(xy, colors, aWq, el) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(xy, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fl = 0; fl < 3; fl++) bH.a9(8, colors[aC][fl]);
		xy = bA.data.aEX(aWq.trim());
		bH.a9(8, -1 === xy ? 255 : xy), bI.yB.a1d(el.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aWr())
	}, this.aRH = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.uV.yP(data.uR, 5), b1.z.send(0, bG.aD)
	}, this.aHO = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.uV.yP(data.uR, 5), bG.aWS(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aVN() {
	this.rJ = function() {
		for (var fS = aE.kn, a20 = bU.result.a20, li = a20.length, a2m = (bG.a8(17 + 16 * fS + 33 * li), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, li), bG.a9(1, +(2 === aE.a28)), bG.a9(1, aE.a2T % 2), ah.a2m), aC = 0; aC < fS; aC++) bG.a9(16, a2m[
		aC]);
		for (var hG = ah.hG, aC = 0; aC < li; aC++) {
			var h0 = a20[aC];
			bG.a9(9, h0), bG.a9(24, hG[h0])
		}
		b1.z.send(b1.z.a3S, bG.aD)
	}
}

function aVO() {
	this.aSu = function(ul, um, un) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, ul), bG.a9(1, +(um < 0)), bG.a9(1, +(un < 0)), bG.a9(30, Math.abs(um)), bG.a9(30, Math.abs(un)), b1.z.send(0, bG.aD)
	}, this.aSv = function(ul, aSw, aSx) {
		bG.a8(18 + 16 * aSw.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, ul), b1.eg.aWs(aSw), bG.a9(30, aSx), b1.z.send(0, bG.aD)
	}, this.aT0 = function(ul, aSw, aSx) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, ul), bJ.uV.yP(aSw, 5), bG.a9(30, aSx), b1.z.send(0, bG.aD)
	}, this.aSy = function(aRy, a2s) {
		for (var fS = a2s.length, iP = 0, aC = 0; aC < fS; aC++) iP += a2s[aC].length;
		for (bG.a8(21 + 3 * fS + 16 * iP), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aRy), bG.a9(4, fS), bG.a9(7, iP), aC = 0; aC < fS; aC++) bG.a9(3, a2s[aC].length), bI.y9.yO(a2s[aC]);
		b1.z.send(0, bG.aD)
	}, this.aSz = function(aRy, um, un) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aRy), bG.a9(1, +(um < 0)), bG.a9(1, +(un < 0)), bG.a9(20, Math.abs(um)), bG.a9(20, Math.abs(un)), b1.z.send(0, bG.aD)
	}
}

function aVK() {
	this.aIM = function(oG) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(24 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e7), bG.a9(2, bm.buffer.data[158].value), b1.eg.aWs(username), bD.color.a55(bm.z.xn()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f0 = oG, b1.z.send(oG, bG.aD)
	}, this.aGq = function(aWt, a5z) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aWt), 2 === aWt ? bH.a9(2, a5z) : 3 === aWt ? bI.yB.a1d(a5z, 7, bH) : 5 === aWt && (bH.a9(3, a5z.id), bH.a9(3, a5z.value), bH.a9(30, a5z.uR)), b1.z.send(b1.z.f0, bH.aWr())
	}
}

function aVL() {
	this.aVr = function(oG) {
		var aX0;
		bG.a8(55 + bl.aWu.rL()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dw), bG.a9(4, a1.id), bG.a9(7, a1.e3), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aX0 = bA.aEW(), bG.a9(8, aX0[0]), bG.a9(8, aX0[1]), bl.aWu
		.a1d(), b1.z.send(oG, bG.aD)
	}, this.aWf = function(oG, sj, aWc, aWw) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aWc), bG.a9(30, sj), bG.a9(30, aWw), b1.z.send(oG, bG.aD)
	}, this.f1 = function(ew) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 6), bI.yB.a1d(ew, 16, bH), b1.z.send(b1.z.f0, bH.aWr())
	}, this.eh = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.w6 = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aES = function(id, ru) {
		var fS = Math.min(ru.length, 63);
		bG.a8(19 + 16 * fS), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fS), bI.y9.yO(ru), b1.z.send(0, bG.aD)
	}, this.aWx = function(aUI, s5) {
		bG.a8(7 + 26 * s5.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < s5.length; aC++) bG.a9(16, s5[aC][0]), bG.a9(10, s5[aC][1]);
		b1.z.send(aUI, bG.aD)
	}, this.aVy = function(aWy, aWz) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aWy), bG.a9(12, aWz), b1.z.send(b1.z.a3S, bG.aD)
	}, this.aWs = function(username) {
		bG.a9(5, username.length), bI.y9.yO(username)
	}, this.p1 = function(p2, p3, oG, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aWc), bG.a9(30, pow.sj), bG.aWS(32, p3), bG.a9(16, p2), b1.z.send(oG, bG.aD)
	}
}

function aVp() {
	var aX1, aX2, b, aX3 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aX4 = 0;

	function aVq() {
		b1.z.aVq(aX1, aX2)
	}

	function aX7(e) {
		b1.a8i.aW0(aX1, new Uint8Array(e.data))
	}

	function aX8() {}

	function aVx(e) {
		b1.z.aVx(aX1, e)
	}
	this.dk = function(eI, a3P, aVl) {
		aX1 = eI, aX2 = a3P,
			function(aVl) {
				aVl = m.e0 ? "ws://localhost:" + (7130 + aX1) + "/" : aVl ? aX3[0] + "game.territorial.io/x0" + aX1 + "/" : aX3[0] + b1.z.aVY[aX1] + aX3[1 + m.e1];
				(b = new WebSocket(aVl)).binaryType = "arraybuffer", b.onopen = aVq, b.onmessage = aX7, b.onclose = aVx, b.onerror = aX8
			}(aVl)
	}, this.aX6 = function() {
		return b.readyState === b.CONNECTING
	}, this.ef = function() {
		return b.readyState === b.OPEN
	}, this.aVg = function() {
		return aX4
	}, this.aVs = function() {
		aX4 = 1
	}, this.aVn = function() {
		return this.aX6() || this.ef()
	}, this.aVo = function(a3P) {
		aX2 = a3P
	}, this.aWh = function() {
		return aX2
	}, this.send = function(aD) {
		this.ef() && b.send(aD)
	}, this.close = function(aVu) {
		this.aVn() && (this.tS(), b.close(aVu))
	}, this.tS = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dQ() {
	var gap, aX9 = !1,
		aXA = 0,
		j = 0,
		uZ = 0,
		canvas = null,
		on = null,
		a4f = null;

	function aXE() {
		for (var aC = aE.zN; 0 <= aC; aC--) a4f[aC] = 0;
		for (aC = am.lJ - 1; 0 <= aC; aC--) a4f[bj.fQ[am.lO[aC]]] += ah.hG[am.lO[aC]];
		aX9 = !0
	}

	function aXC() {
		for (var aXJ, aXH = 0, fS = 0, ej = Math.floor(j / 2), eH = Math.floor(uZ / 2), aXI = 1.5 * Math.PI, aC = aE.zN; 0 <= aC; aC--) fS += a4f[aC], 0 === a4f[aC] && aXH++;
		if (aX9 = !1, on.clearRect(0, 0, j, j), 0 < fS)
			if (aXH === aE.zN) {
				for (aC = aE.zN; 0 <= aC; aC--)
					if (0 < a4f[aC]) {
						! function(aC, ej, eH) {
							on.fillStyle = bj.aXQ[bj.lA[aC]], on.beginPath(), on.arc(ej, ej, eH, 0, 2 * Math.PI), on.fill()
						}(aC, ej, eH);
						break
					}!
				function(ej) {
					var fontSize = ej / 3;
					on.font = bD.sD.u1(1, fontSize), on.fillStyle = bE.pH, on.fillText("100%", ej, ej + .1 * fontSize)
				}(ej)
			} else {
				for (aC = 0; aC <= aE.zN; aC++) 0 < a4f[aC] && (! function(aC, ej, eH, aXI, aXJ) {
					on.fillStyle = bj.aXQ[bj.lA[aC]], on.beginPath(), on.arc(ej, ej, eH, aXI, aXJ), on.lineTo(ej, ej), on.fill()
				}(aC, ej, eH, aXI, aXJ = aXI + 2 * Math.PI * a4f[aC] / fS), function(ej, eH, aXI, aXJ) {
					var fu = (aXJ - aXI) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eH * Math.min(fu, .37);
					fontSize < 8 || (aXI = (aXI + aXJ) / 2, aXJ = (__fx.settings.detailedTeamPercentage ? (100 * fu).toFixed(2) : Math.floor(100 * fu + .5)) + "%", eH *= .525 - Math.max(.6 * (fu - .7), 0), on.font = bD.sD.u1(1, fontSize), on
						.fillStyle = bE.pH, on.fillText(aXJ, ej + Math.cos(aXI) * eH, ej + Math.cos(aXI + 1.5 * Math.PI) * eH))
				}(ej, eH, aXI, aXJ), 0 !== aC && aXO(ej, eH, aXI), aXI = aXJ);
				aXO(ej, eH, 1.5 * Math.PI)
			}!
		function(ej, eH) {
			on.beginPath(), on.arc(ej, ej, eH, 0, 2 * Math.PI), on.stroke()
		}(ej, eH)
	}

	function aXO(ej, eH, aXR) {
		on.beginPath(), on.moveTo(ej, ej), on.lineTo(ej + Math.cos(aXR) * eH, ej + Math.cos(aXR + 1.5 * Math.PI) * eH), on.stroke()
	}
	this.dk = function() {
		if (aE.iM) {
			aXA = 0, a4f = new Uint32Array(aE.zN + 1);
			for (var aC = aE.zN; 0 <= aC; aC--) a4f[aC] = 0;
			for (aC = am.lJ - 1; 0 <= aC; aC--) a4f[bj.fQ[am.lO[aC]]] += 1;
			this.resize()
		} else a4f = on = canvas = null
	}, this.aA5 = function() {
		return j
	}, this.resize = function() {
		aE.iM && (j = Math.floor(.95 * (a1.a2.ib() && !aE.nr ? .18 * i.min : .13 * i.ic)), j = (j *= 1 + (.5 + .2 * a1.a2.ib()) * aE.nr) + j % 2, gap = Math.max(1, .015 * j), uZ = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (on = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, on.strokeStyle = bE.pH, bD.sD.textAlign(on, 1), bD.sD.textBaseline(on, 1), aXC())
	}, this.lK = function(aXD) {
		aXD && aXE();
		var ea, aXD = this.lM();
		return bj.lA[aXD] || (aXD = function() {
			for (var lL = -1, aC = aE.zN; 1 <= aC; aC--)(-1 === lL || a4f[aC] > a4f[lL]) && (lL = aC);
			return lL
		}(), ea = ah.hG[mO[0]], -1 !== aXD && a4f[aXD] > ea) ? a4f[aXD] : ea
	}, this.a35 = function() {
		return aXA = 31, this.ee(), this.lM()
	}, this.lM = function() {
		for (var lL = 0, aC = aE.zN; 0 < aC; aC--) a4f[aC] > a4f[lL] && (lL = aC);
		return lL
	}, this.ko = function(aXG) {
		for (var gv = 0, lO = am.lO, fQ = bj.fQ, fS = am.lJ, g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = lO[aC];
			fQ[h0] === aXG && (g6[gv++] = h0)
		}
		bR.fx[0] = gv
	}, this.lN = function(aXG) {
		for (var gv = 0, lO = am.lO, fQ = bj.fQ, fS = am.lJ, g6 = bR.g6, aC = 0; aC < fS; aC++) {
			var h0 = lO[aC];
			fQ[h0] !== aXG && (g6[gv++] = h0)
		}
		bR.fx[0] = gv
	}, this.a5X = function() {
		for (var gv = 0, aC = aE.zN; 0 <= aC; aC--) gv += 0 < a4f[aC];
		return gv
	}, this.ee = function() {
		aE.iM && 32 <= ++aXA && (aXA = 0, aXE())
	}, this.nA = function() {
		aE.iM && aX9 && aXC()
	}, this.wl = function() {
		aE.iM && (aE.nr ? wm.drawImage(canvas, bf.gap, bf.gap) : wm.drawImage(canvas, bf.gap, aA4 + 2 * bf.gap))
	}
}

function dg() {
	function aXX(fZ, fS, fb, a1n, aBM, fs) {
		if (!(fb < 1 || aBM < fb))
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (a1n(f6)) return f6 >> 2;
				fZ += fs
			}
		return -1
	}

	function aXb(fb, fS, fZ, a1n, aXV, fs) {
		if (!(fZ < 1 || aXV < fZ)) {
			fS = Math.max(fS, 0);
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (a1n(f6)) return f6 >> 2;
				fb += fs
			}
		}
		return -1
	}

	function aXf(iw, ix, aXS) {
		return -1 !== ix && (-1 === iw || bP.iy(ix, aXS) < bP.iy(iw, aXS)) ? ix : iw
	}
	this.hr = function(aXS) {
		return this.a2F(aXS, function(f6) {
			return ad.fN(f6)
		})
	}, this.hx = function(aXS) {
		return this.a2F(aXS, function(f6) {
			return ad.aJU(f6, aE.fC)
		})
	}, this.a2F = function(aXS, a1n) {
		return function(aXS, aXT, a1n) {
			for (var hh = bP.fa(aXS), hj = bP.fc(aXS), aXV = bV.fd - 2, aBM = bV.fe - 2, aXW = -1, fV = 0; fV < aXT; fV++) {
				var aBL = Math.max(hh - fV, 1),
					aO6 = Math.max(hj - fV, 1),
					zy = Math.min(hh + fV, aXV),
					zx = Math.min(hj + fV, aBM),
					iw = aXX(hh, zy - hh, hj - fV, a1n, aBM, 1),
					ix = aXX(hh - 1, hh - aBL - 1, hj - fV, a1n, aBM, -1),
					zy = aXX(hh, zy - hh, hj + fV, a1n, aBM, 1),
					aBL = aXX(hh - 1, hh - aBL - 1, hj + fV, a1n, aBM, -1),
					aXa = aXb(hj, zx - hj - 1, hh - fV, a1n, aXV, 1),
					aXc = aXb(hj - 1, hj - aO6 - 2, hh - fV, a1n, aXV, -1),
					zx = aXb(hj, zx - hj - 1, hh + fV, a1n, aXV, 1),
					aO6 = aXb(hj - 1, hj - aO6 - 2, hh + fV, a1n, aXV, -1);
				if (aXW = aXf(aXW, iw, aXS), aXW = aXf(aXW, ix, aXS), aXW = aXf(aXW, zy, aXS), aXW = aXf(aXW, aBL, aXS), aXW = aXf(aXW, aXa, aXS), aXW = aXf(aXW, aXc, aXS), aXW = aXf(aXW, zx, aXS), 0 <= (aXW = aXf(aXW, aO6, aXS)) && fV *
					fV >= bP.iy(aXW, aXS)) return aXW
			}
			return -1
		}(aXS, bP.iZ(), a1n)
	}
}

function d9() {
	function aXh(key) {
		var aUj;
		return "undefined" == typeof URLSearchParams || (aUj = window.location.search, "string" != typeof(aUj = new URLSearchParams(aUj).get(key))) || aUj.length < 1 ? null : aUj
	}
	this.dt = function() {
		if (0 !== a1.id) return !1;
		if (! function() {
				var value = aXh("account");
				if (!value && !(value = aXh("a"))) return void bL.clear();
				return bL.clear(), u.v(8, u.uT, new uU(1e3, {
					action: 0,
					uR: value,
					uS: 0
				})), 1
			}()) {
			var value = aXh("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			u.v(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a3F = new URL(window.location.href);
		a3F.search = "";
		try {
			return history.replaceState(null, "", a3F.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aRU = function(key, value) {
		if (0 === a1.id) try {
			var a3F = new URL(window.location.href),
				h0 = a3F.searchParams;
			h0.set(key, value), a3F.search = h0.toString(), history.replaceState(null, "", a3F.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function co() {
	var aXj, h;
	this.dk = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.ft(32768 * aC, 100);
		this.a6j(0)
	}, this.value = function(h0) {
		return h[h0]
	}, this.aNy = function() {
		return bO.ft(aXj - 1, 2)
	}, this.a6j = function(aNc) {
		aXj = 2 * aNc % 32768 + 1
	}, this.random = function() {
		return aXj = 167 * aXj % 32768
	}, this.k4 = function(nI) {
		return bO.ft(nI * this.random(), 32768)
	}, this.kf = function(h0) {
		return 0 !== h0 && this.random() < this.value(h0)
	}, this.jQ = function(fl, fm) {
		return fl + this.k4(fm - fl)
	}
}

function d5() {
	this.rX = new aXk, this.a6t = new aXl, this.aLF = new aXm, this.dk = function() {
		aE.hb || this.rX.dk()
	}, this.ee = function() {
		aE.hb || (this.rX.ee(), 3 !== u.uT) || bi.kk() % 15 != 5 && 2 !== aE.a2B || u.a3O().aUk()
	}, __fx.replay.restartReplay = () => this.aUn(), this.aUn = function() {
		var aXo = 0 !== aE.a2B,
			aXp = aE.a6f;
		aXo || ab.aIW(), aE.a6d.a72(), aE.data.canvas = null, b1.z.close(b1.z.a3S, 3257), b1.z.a3S = 0, aE.data.isReplay = 1, aE.a6h(), aXo && (aE.a6f = aXp)
	}, this.aUm = function(ru) {
		var aC = ru.indexOf("=");
		return 0 <= aC ? ru.substring(aC + 1) : ru
	}, this.aUl = function(ru) {
		return ru
	}, __fx.replayHistory.load = saved => {
		saved = bC.aUm(saved), bC.aLF.yT(saved) && bC.aUn()
	}
}

function aXk() {
	this.aXq = null, this.aXr = null, this.aXs = null, this.aXt = null, this.aXu = null, this.aXv = null, this.a6s = "";
	var aXw = 0;
	this.dk = function() {
		this.aXq = [], this.aXr = [], this.aXs = [], this.aXt = [], this.aXu = [0], this.aXv = [0], aXw = 0, this.a6s = ""
	}, this.rY = function(id, gB, gD, gF) {
		aE.hb || 2 === aE.a2B || (0 === this.aXu[aXw] && (this.aXv[aXw] ? (this.aXu.push(1), this.aXv.push(0), aXw++) : this.aXu[aXw] = 1), this.aXq.push(id), this.aXr.push(gB), this.aXs.push(void 0 === gD ? 0 : gD), this.aXt.push(void 0 === gF ?
			0 : gF), this.aXv[aXw]++)
	}, this.ee = function() {
		0 === this.aXu[aXw] ? this.aXv[aXw]++ : (this.aXu.push(0), this.aXv.push(0), aXw++)
	}
}

function aXm() {
	var aXx = 0;

	function aY1(ru, id) {
		console.log(ru), aXx || (id ? 1 === id ? aO.a8B = L(495) + ": " + ru : u.v(4, 3, new w(L(496), ru, 1)) : u.v(4, 3, new w("⚠️ " + L(494), ru, 1)))
	}
	this.yT = function(ru, aXy) {
		var io, s5;
		return aXx = aXy, bJ.uV.yL(bJ.uV.yJ(bJ.uV.yH(ru))), aO.a8B = "", !! function() {
			if (bK.size < 10) aY1("File Too Small");
			else {
				var aY3 = bK.rL(12),
					s = (aY3 !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aY1(s = (s += "   Found: " + aY3) + ("   Compatible at " + b1.z.a2b() + "/" + aY3), 1)), bK.rL(12)),
					aY4 = bK.rL(31);
				if (aY4 !== bK.size) aY1("Size Error: Stated Size " + aY4 + " Actual Size " + bK.size);
				else if (function(k, aY3) {
						for (var h0 = bK.aD, fS = bK.size, aWz = aY3, aC = 3; aC < fS; aC++) aWz = aWz + h0[aC] & 4095;
						return aWz === k || (aY1("Hash Error: " + aWz + " " + k + " " + fS), !1)
					}(s, aY3)) return 1
			}
			return
		}() && (io = bK, (s5 = aE.data = new a6c).mapType = io.rL(2), s5.mapProceduralIndex = io.rL(8), s5.mapRealisticIndex = io.rL(8), s5.mapSeed = io.rL(14), s5.mapName = io.aY6(5), 2 === s5.mapType && io.aY7(), s5.passableWater = io.rL(
			1), s5.passableMountains = io.rL(1), s5.playerCount = io.rL(10), s5.humanCount = io.rL(10), s5.selectedPlayer = io.rL(9), s5.gameMode = io.rL(1), s5.playerMode = io.rL(2), s5.battleRoyaleMode = io.rL(2), s5.numberTeams = io.rL(4),
			s5.isZombieMode = io.rL(1), s5.isContest = io.rL(1), s5.isReplay = io.rL(1), s5.elo = io.aY8(2, 14, 2), s5.colorsType = io.rL(1), s5.colorsPersonalized = io.rL(1), s5.colorsData = io.aY8(10, 18, 512), s5.selectableColor = io.rL(
			1), s5.teamPlayerCount = io.aY8(4, 10, 9), s5.neutralBots = io.rL(1), s5.botDifficultyType = io.rL(2), s5.botDifficultyValue = io.rL(4), s5.botDifficultyTeam = io.aY8(4, 4, 9), s5.botDifficultyData = io.aY8(10, 4, 512), s5
			.spawningType = io.rL(2), s5.spawningSeed = io.rL(14), s5.spawningData = io.aY8(11, 12, 1024), s5.selectableSpawn = io.rL(1), s5.playerNamesType = io.rL(2), s5.playerNamesData = io.aY9(10, 5, 512), s5.selectableName = io.rL(1), s5
			.aIncomeType = io.rL(2), s5.aIncomeValue = io.rL(8), s5.aIncomeData = io.aY8(10, 8, 512), s5.tIncomeType = io.rL(2), s5.tIncomeValue = io.rL(8), s5.tIncomeData = io.aY8(10, 8, 512), s5.iIncomeType = io.rL(2), s5.iIncomeValue = io
			.rL(8), s5.iIncomeData = io.aY8(10, 8, 512), s5.sResourcesType = io.rL(2), s5.sResourcesValue = io.rL(11), s5.sResourcesData = io.aY8(10, 11, 512), s5.a70 = io.aY8(10, 30, 0), !! function() {
				var io = bK,
					yU = io.rL(5),
					aYA = io.rL(30),
					aYB = io.rL(30);
				if (aYA + aYB > 8 * io.size) return void aY1("Corrupted File");
				return function(fS) {
						var aYE = new Uint8Array(fS),
							aYF = new Uint16Array(fS),
							aYG = new Uint32Array(fS),
							aYH = new Uint32Array(fS);
						bC.rX.aXq = aYE, bC.rX.aXr = aYF, bC.rX.aXs = aYG, bC.rX.aXt = aYH;
						for (var aC = 0; aC < fS; aC++) {
							var id = bK.rL(4);
							aYE[aC] = id, aYF[aC] = bK.rL(9), 0 === id ? aYG[aC] = bK.rL(22) : 1 === id ? (aYG[aC] = bK.rL(10), aYH[aC] = bK.rL(10)) : 2 === id ? (aYG[aC] = bK.rL(10), aYH[aC] = bK.rL(9)) : 3 === id ? (aYG[aC] = bK.rL(10),
								aYH[aC] = bK.rL(27)) : 4 === id ? (aYG[aC] = bK.rL(10), aYH[aC] = bK.rL(16)) : 5 === id || 6 === id ? aYG[aC] = bK.rL(10) : 7 === id ? aYG[aC] = bK.rL(1) : 10 === id && (aYG[aC] = bK.rL(20), aYH[aC] = bK
								.rL(22))
						}
					}(aYA),
					function(fS, yU) {
						var aXu = new Uint8Array(fS),
							aXv = new Array(fS);
						aXv.fill(0), bC.rX.aXu = aXu, bC.rX.aXv = aXv;
						for (var aC = 0; aC < fS; aC++) aXu[aC] = bK.rL(1), aXv[aC] = bK.rL(yU)
					}(aYB, yU), 1
			}()) && (bK.eI < 8 * bK.size - 13 || bK.eI > 8 * bK.size ? (aY1("Out Of Bounds Error: " + bK.eI + " " + 8 * bK.size), !1) : (bC.rX.a6s = ru, 2 !== aE.data.mapType || (aY1("Load base64 image...", 2), aXy)))
	}, this.aLG = function(aKI, aY2) {
		var a50 = document.createElement("canvas"),
			iU = a50.getContext("2d");
		if (a50.width = aKI.width, a50.height = aKI.height, iU.drawImage(aKI, 0, 0), aE.data.canvas = a50, aXx || aY2) return aE.a2B ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aUn()
	}
}

function aXl() {
	this.a1d = function() {
		var yU = function() {
				for (var aXv = bC.rX.aXv, fS = aXv.length, max = 0, aC = 0; aC < fS; aC++) max = Math.max(max, aXv[aC]);
				return yb(Math.max(max, 1))
			}(),
			j = (s5 = aE.data, (j = bH).dk(), j.a9(12, m.rVersion), j.eI += 43, j.a9(2, s5.mapType), j.a9(8, s5.mapProceduralIndex), j.a9(8, s5.mapRealisticIndex), j.a9(14, s5.mapSeed), j.aYO(s5.mapName, 5), 2 === s5.mapType && j.aYP(s5.canvas),
				j.a9(1, s5.passableWater), j.a9(1, s5.passableMountains), j.a9(10, s5.playerCount), j.a9(10, s5.humanCount), j.a9(9, s5.selectedPlayer), j.a9(1, s5.gameMode), j.a9(2, s5.playerMode), j.a9(2, s5.battleRoyaleMode), j.a9(4, s5
					.numberTeams), j.a9(1, s5.isZombieMode), j.a9(1, s5.isContest), j.a9(1, s5.isReplay), j.dr(s5.elo, 2, 14), j.a9(1, s5.colorsType), j.a9(1, s5.colorsPersonalized), j.dr(s5.colorsData, 10, 18), j.a9(1, s5.selectableColor), j.dr(
					s5.teamPlayerCount, 4, 10), j.a9(1, s5.neutralBots), j.a9(2, s5.botDifficultyType), j.a9(4, s5.botDifficultyValue), j.dr(s5.botDifficultyTeam, 4, 4), j.dr(s5.botDifficultyData, 10, 4), j.a9(2, s5.spawningType), j.a9(14, s5
					.spawningSeed), j.dr(s5.spawningData, 11, 12), j.a9(1, s5.selectableSpawn), j.a9(2, s5.playerNamesType), j.aYQ(s5.playerNamesData, 10, 5), j.a9(1, s5.selectableName), j.a9(2, s5.aIncomeType), j.a9(8, s5.aIncomeValue), j.dr(s5
					.aIncomeData, 10, 8), j.a9(2, s5.tIncomeType), j.a9(8, s5.tIncomeValue), j.dr(s5.tIncomeData, 10, 8), j.a9(2, s5.iIncomeType), j.a9(8, s5.iIncomeValue), j.dr(s5.iIncomeData, 10, 8), j.a9(2, s5.sResourcesType), j.a9(11, s5
					.sResourcesValue), j.dr(s5.sResourcesData, 10, 11), j.dr(s5.a70, 10, 30), ! function(yU) {
					var j = bH,
						aXq = bC.rX.aXq,
						gB = bC.rX.aXr,
						gD = bC.rX.aXs,
						gF = bC.rX.aXt,
						fS = aXq.length;
					j.a9(5, yU), j.a9(30, fS), j.a9(30, bC.rX.aXv.length);
					for (var aC = 0; aC < fS; aC++) {
						var ej = aXq[aC];
						j.a9(4, ej), j.a9(9, gB[aC]), 0 === ej ? j.a9(22, gD[aC]) : 1 === ej ? (j.a9(10, gD[aC]), j.a9(10, gF[aC])) : 2 === ej ? (j.a9(10, gD[aC]), j.a9(9, gF[aC])) : 3 === ej ? (j.a9(10, gD[aC]), j.a9(27, gF[aC])) : 4 === ej ? (j
							.a9(10, gD[aC]), j.a9(16, gF[aC])) : 5 === ej || 6 === ej ? j.a9(10, gD[aC]) : 7 === ej ? j.a9(1, gD[aC]) : 10 === ej && (j.a9(20, gD[aC]), j.a9(22, gF[aC]))
					}
				}(yU), ! function(yU) {
					for (var j = bH, aXu = bC.rX.aXu, aXv = bC.rX.aXv, fS = aXu.length, aC = 0; aC < fS; aC++) j.a9(1, aXu[aC]), j.a9(yU, aXv[aC])
				}(yU), bH.eI),
			s5 = bO.ft(j - 1, 6) + 1,
			yU = (bG.aWT(6 * s5) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eI = 24, j.a9(31, j.h.length), j.eI = 12, j.a9(12, function() {
					for (var h = bH.h, fS = h.length, aWz = m.rVersion, aC = 3; aC < fS; aC++) aWz = aWz + h[aC] & 4095;
					return aWz
				}())
			}(), bK.dk(bH.h), bI.uV.uW(bI.uV.uX(s5)));
		return bK.vr(), bH.dk(), yU
	}
}

function ct() {
	var ej, by = !1,
		aYS = !1,
		aYT = -1e4,
		aYU = -1,
		aYV = 0;

	function resize(aYZ) {
		ej = 0, ac.uu() && (aYX(aYZ) || by) && (by = !1, bf.resize(), bZ.aE2.resize(), aZ.dk(), bb.dk(), aa.resize(), aU.resize(), aP.resize(), bw.resize(), u.resize(), 1 <= aE.a2B ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aBB()) : (ab.aIY(), ab.aIZ()), bi.ds = !0)
	}

	function aYW(fu) {
		return fu && 128 < fu ? Math.floor(fu) : 128
	}

	function aYX(aYZ) {
		var j, k, aYb, uZ, aAZ;
		if (!(0 < i.u9)) return uZ = aYW(document.documentElement.clientWidth), aAZ = aYW(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = uZ, k = aAZ, aYb = 0 !== a1.id || j < k ?
			700 : 1200, aYb = Math.min(aYb / ((j + k) / 2), 1), aYb = 0 === bm.buffer.data[1].value ? 2 * aYb / 3 : Math.min(aYb + (bm.buffer.data[1].value - 1) * (1 - aYb) / 2, 1), i.l = (window.devicePixelRatio || 1) * aYb, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aYZ && !aYS ? (aYS = !0, u.removeChild(document.body, a3g)) : aYS && (aYS = !1, document.body.appendChild(a3g)), j = Math.floor(.5 + uZ * i.l), k = Math.floor(.5 + aAZ * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aDe(j, k), i.max = a8Q(j, k), i.ic = bO.ft(j + k, 2), i.wi = j / k, a3g.width = j, a3g.height = k, a3g.style.width = uZ + "px", a3g.style.height = aAZ + "px", aYU = bi.eZ + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.ic = 0, this.wi = 1, this.l = 1, this.u9 = 0, this.dl = function() {
		this.j = aYW(document.documentElement.clientWidth) + 2, this.k = aYW(document.documentElement.clientHeight) + 2
	}, this.dk = function() {
		ej = 1, a3g = document.getElementById("canvasA"), 2 === a1.id && (a3g.style.webkitUserSelect = "none"), (wm = a3g.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aYX(0)
	}, this.ee = function() {
		50 <= ++ej && resize(0), -1 === aYU || bi.eZ < aYU || (aYU = -1, 2e3 * ++aYV >= bi.eZ + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dv = function(k2) {
		by = !0, resize(k2)
	}, this.a4L = function() {
		aYT + 1e3 > bi.eZ || (aYT = bi.eZ, resize(0))
	}
}

function dN() {
	this.aWd = new aYd, this.a31 = new aYe, this.aWu = new aYf
}

function aYf() {
	var aYg = aYh(),
		aYi = aYj(),
		aYk = aYl();
	this.rL = function() {
		return 123
	}, this.a1d = function() {
		bJ.uV.yP(bm.buffer.data[183].value, 15), bG.a9(14, aYg), bG.a9(7, aYi), bG.a9(12, aYk)
	}
}

function aYh() {
	for (var ej = document.createElement("canvas"), ej = (ej.width = 24, ej.height = 24, ej.getContext("2d", {
			alpha: !1
		})), fV = (ej.fillStyle = "rgb(0,0,0)", ej.fillRect(0, 0, 24, 24), ej.font = "22px system-ui", ej.textBaseline = "middle", ej.textAlign = "center", ej.fillStyle = "rgb(255,255,255)", ej.fillText("Q", 12, 12), ej.getImageData(0, 0, 24, 24)
			.data), fS = fV.length, li = 0, aC = 0; aC < fS; aC += 4) li += fV[aC];
	return 16383 & li
}

function aYj() {
	var fV = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fV + .5) / 15))
}

function aYl() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aYe() {
	this.a32 = function() {
		for (var h0, fS = am.lJ, a1z = am.lO, a2m = ah.a2m, aAN = this.aK1(), aC = 0; aC < fS; aC++) h0 = a1z[aC], bD.go.kA(h0) || (a2m[h0] = aAN);
		var rc = ah.rc,
			jq = ah.jq,
			jr = ah.jr,
			a2k = ah.a2k,
			fS = aE.kn;
		for (aC = 0; aC < fS; aC++)(0 === a2k[aC] || jr[aC] < 1 || 2 * rc[aC] > 3 * (jq[aC] + jr[aC])) && (a2m[aC] = 0);
		var a2z = 0;
		for (aC = 0; aC < fS; aC++) a2z += 0 < a2m[aC];
		return a2z
	}, this.aK1 = function() {
		return Math.min(65535, bi.kk())
	}
}

function aYd() {
	function aYp(h, fu, iK) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (fu >> (aC + iK) % 30 & 1)) % 256
	}
	this.ee = function(aYm, aYn) {
		var h = new Uint8Array(256);
		return function(h, aYm, aYn) {
				var aC, aYr = 3 + (4 + aYm) % 32768,
					aYs = 12 + aYn % 32768,
					aYt = 17 + ((aYm & aYn) + (aYm | aYn) + aYm) % 32768;
				for (aC = 0; aC < 256; aC++) aYr = 1 + aYr * aYs % aYt, h[aC] = aYr % 256
			}(h, aYm, aYn), aYp(h, aYm, 2), aYp(h, aYn, 7),
			function(h) {
				var aC, fu, eI = 0;
				for (aC = 0; aC < 3e4; aC++) fu = h[eI], h[eI] = (fu + aC + h[(eI + aC) % 256]) % 256, eI = (fu + aC + eI + (fu & eI)) % 256
			}(h),
			function(h) {
				var aC, aAZ = 1,
					vH = 1;
				for (aC = 0; aC < 256; aC += 2) aAZ = (1 + aAZ) * (h[aC] + 1) % 1073741824, vH = (1 + vH) * (h[aC + 1] + 1) % 1073741824;
				return [aAZ, vH]
			}(h)
	}, this.aWe = function(aYu, aYv, aYw, result) {
		for (var gv = 1 << aYu, aC = 0; aC < gv; aC++)
			if (this.aYx(aC, aYv, aYw) === result) return aC;
		return 0
	}, this.aYx = function(aYy, aYv, aYw) {
		for (var zW = aYv + aYy, zf = aYw + aYy, fu = zW + zf & 2147483647, fl = 1; fl <= 16; fl++) fu = (fu = (fu ^ fu >> fl) >>> 1 + (3 & zW)) * (7 + (1023 & (zW | zf))) & 1073741823, zf >>= 1 + (1 & (zW >>= 1 + (1 & (fu += 65535 & zf))));
		return fu &= 1073741823
	}
}

function cq() {
	var aYz, aZ0, ii, aZ1;
	this.dk = function() {
		var aC, fZ, fb, aSk, aZ2, j, k, on, iR, yl, fu, h0, fi, fl, aZ5;
		if (function() {
				if (ii = !0, aZ1 = "rgb(" + bV.yj[0] + "," + bV.yj[1] + "," + bV.yj[2] + ")", bV.aNl(bV.f8)) return 1;
				return ii = !1, 0
			}()) aZ0 = null;
		else {
			for (aYz = bO.ft(96, 4), aZ2 = 1 === bV.f8 ? (aSk = 0, 160) : (aSk = 128, 32), aZ1 = "rgb(" + aSk + "," + aSk + "," + aSk + ")", aZ0 = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aZ0[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fd : aYz, k = aC % 2 == 0 ? aYz : bV.fe + 2 * aYz, aZ0[aC].width = j, aZ0[aC].height = k, yl = (iR = (on = aZ0[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fb = aYz - 1; 0 <= fb; fb--)
						for (fu = aZ2 + Math.floor((fb + 1) * (aSk - aZ2) / (aYz + 1)), fZ = j - 1; 0 <= fZ; fZ--) yl[h0 = 4 * ((0 === aC ? aYz - fb - 1 : fb) * j + fZ)] = fu, yl[h0 + 1] = fu, yl[h0 + 2] = fu, yl[h0 + 3] = 255;
				else {
					for (fZ = aYz - 1; 0 <= fZ; fZ--)
						for (fu = aZ2 + Math.floor((fZ + 1) * (aSk - aZ2) / (aYz + 1)), fb = k - 1 - aYz; aYz <= fb; fb--) yl[h0 = 4 * (fb * j + (3 === aC ? aYz - fZ - 1 : fZ))] = fu, yl[h0 + 1] = fu, yl[h0 + 2] = fu, yl[h0 + 3] = 255;
					for (fl = 1; 0 <= fl; fl--)
						for (fZ = aYz - 1; 0 <= fZ; fZ--)
							for (fb = aYz - 1; 0 <= fb; fb--) fi = (Math.pow(fZ * fZ + fb * fb, .5) + 1) / (aYz + 1), fu = aZ2 + Math.floor((1 < fi ? 1 : fi) * (aSk - aZ2)), yl[h0 = 4 * ((0 === fl ? aYz - fb - 1 : fb + fl * (k - aYz)) * j + (
								1 === aC ? fZ : aYz - fZ - 1))] = fu, yl[h0 + 1] = fu, yl[h0 + 2] = fu, yl[h0 + 3] = 255
				}
				on.putImageData(iR, 0, 0)
			}
			aZ5 = aZ2, bV.ye.fillStyle = "rgb(" + aZ5 + "," + aZ5 + "," + aZ5 + ")", bV.ye.fillRect(0, 0, bV.fd, 1), bV.ye.fillRect(0, bV.fe - 1, bV.fd, 1), bV.ye.fillRect(0, 0, 1, bV.fe), bV.ye.fillRect(bV.fd - 1, 0, 1, bV.fe)
		}
	}, this.a0F = function() {
		var fl = ii ? 0 : -aYz;
		aPW(fl, fl, bV.fd - 2 * fl, bV.fe - 2 * fl, bd.aZ6, bd.aZ7, bd.aZ8, bd.aZ9) || (wm.fillStyle = aZ1, wm.fillRect(0, 0, i.j, i.k))
	}, this.wl = function() {
		ii || (aPV(0, -aYz, bV.fd, aYz, bd.aZ6, bd.aZ7, bd.aZ8, bd.aZ9) && wm.drawImage(aZ0[0], bd.aZA, bd.aZB - aYz), aPV(bV.fd, -aYz, aYz, bV.fe + 2 * aYz, bd.aZ6, bd.aZ7, bd.aZ8, bd.aZ9) && wm.drawImage(aZ0[1], bd.aZA + bV.fd, bd.aZB - aYz),
			aPV(0, bV.fe, bV.fd, aYz, bd.aZ6, bd.aZ7, bd.aZ8, bd.aZ9) && wm.drawImage(aZ0[2], bd.aZA, bd.aZB + bV.fe), aPV(-aYz, -aYz, aYz, bV.fe + 2 * aYz, bd.aZ6, bd.aZ7, bd.aZ8, bd.aZ9) && wm.drawImage(aZ0[3], bd.aZA - aYz, bd.aZB - aYz))
	}
}

function dC() {
	this.aJz = new aZC, this.a0I = new aZD, this.z = new aZE, this.jF = new aZF, this.aZ5 = new aZG, this.mi = new aZH, this.kb = new aZI, this.la = new aZJ, this.aZK = new aZL, this.aZM = new aZN, this.mt = new aZO, this.i2 = new aZP, this.m9 =
		new aZQ, this.lc = new aZR, this.i5 = new aZS, this.mm = new aZT, this.rk = new aZU, this.dk = function() {
			this.m9.dk(), this.a0I.dk(), this.z.dk(), this.jF.dk(), this.aZ5.dk(), this.aZM.dk(), this.mm.dk()
		}, this.wl = function() {
			this.aZM.wl(), this.a0I.wl()
		}
}

function aZI() {
	this.ee = function(player) {
		return !!bQ.mt.mu(player) && !(bQ.z.kr[player] >= Math.max(3 * ap.performance.m1, aF.l1[aF.iB[player]]) || !bD.go.mv(player, aF.kz[aF.iB[player]], 32, 0)) && (aX.aDR() ? function(player) {
			var aZX = bQ.lc.aDU(),
				fS = aZX.length;
			if (0 === fS) return !1;
			aZX = aZX[az.k4(fS)], fS = bQ.z.mg[aZX];
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
			}(player, aZX) && !!bQ.i5.rj(player, fS, 1) && (bD.go.mx(player), bQ.z.my(player), !0)
		}(player) : !!(ap.je.ee(player) || ap.jT.ee(player) || ap.jV.ee(player)) && (function(player) {
			bR.g4[1] = 4, bD.go.mx(player), bQ.z.my(player)
		}(player), !0))
	}
}

function aZT() {
	var aZa = 0,
		aZb = null;
	this.dk = function() {
		null === aZb && (aZb = new Uint16Array(2 * bQ.z.l1)), aZa = 0
	}, this.ei = function(aZc, mm) {
		var aZd = aZb;
		aZd[aZa++] = aZc, aZd[aZa++] = mm
	}, this.mn = function(player, ml) {
		for (var aZd = aZb, fS = aZa, aC = 0; aC < fS; aC += 2)
			if (aZd[aC] === ml && bQ.lc.aZe(aZd[aC + 1]) && player === bQ.z.mh[bR.g4[2]] >> 3) return !0;
		return !1
	}, this.aZf = function(aZg) {
		var mi = bQ.z.me[aZg];
		if (!(mi < 64)) {
			for (var ml = bQ.z.mg[aZg], aZd = aZb, fS = aZa, aC = fS - 2; 0 <= aC; aC -= 2)
				if (aZd[aC] === ml) {
					{
						aZl = void 0;
						var aZl = aZd[aC + 1];
						bQ.lc.aZe(aZl) && bQ.mm.aZt(bR.g4[2])
					}
					aZd[aC] = aZd[fS - 2], aZd[aC + 1] = aZd[fS - 1], fS -= 2
				} aZa = fS
		}
	}, this.aZi = function(aZj, aZk) {
		for (var aZl = bQ.z.mg[aZj], ml = -1, aZd = aZb, fS = aZa, aC = 1; aC < fS; aC += 2)
			if (aZd[aC] === aZl) {
				ml = aZd[aC - 1];
				break
			} if (-1 === ml) return !1;
		if (!bQ.lc.aZe(ml)) return !1;
		var aZg = bR.g4[2],
			m8 = bQ.z.mf[aZg];
		if (aZk === m8[m8.length - 1]) bQ.z.mf[aZj] = bQ.m9.aZm(bQ.z.mf[aZj], bQ.m9.mH(m8));
		else {
			var aZn = bQ.lc.aZo(m8, aZk);
			if (-1 === aZn) return !1;
			var aZp = bQ.z.mr[aZg];
			aZn === aZp ? (aZg = bP.jD(bQ.z.ms[aZg]), bQ.z.mf[aZj] = bQ.m9.aZr(bQ.z.mf[aZj], m8, aZn, aZk, bP.iv(m8[aZn], aZk) > bP.iv(m8[aZn], aZg))) : bQ.z.mf[aZj] = bQ.m9.aZr(bQ.z.mf[aZj], m8, aZn, aZk, aZp < aZn)
		}
		return !0
	}, this.aZt = function(aZu) {
		var m8, li = bQ.z,
			mi = li.me[aZu];
		return mi % 64 != 5 && (m8 = li.mf[aZu], li.aZv[aZu] = 65535 - li.aZv[aZu], li.mr[aZu] = m8.length - li.mr[aZu] - 2, li.mf[aZu] = bQ.m9.mH(m8), li.me[aZu] = mi - mi % 64 + 5, !0)
	}
}

function aZO() {
	this.mu = function(player) {
		return !!aE.data.passableWater && bQ.z.md !== bQ.z.l1 && bQ.z.kr[player] !== bQ.z.aZw && 0 !== ah.h9[player].length
	}, this.rf = function(aXS) {
		var mi = bR.g4[1];
		return !(4 <= mi || !bQ.lc.aZx(bP.fI(aXS))) && ad.fN(bP.fI(bP.jH(aXS, mi)))
	}
}

function aZC() {
	this.aK0 = function(player) {
		for (var a9n = bQ.z.a9n, um = player << 3, aC = um + bQ.z.kr[player] - 1; um <= aC; aC--) this.aZy(a9n[aC])
	}, this.aZy = function(aZz) {
		var z = bQ.z,
			aa0 = z.md - 1,
			aa1 = z.mh[aZz],
			aa2 = z.aa3[aZz],
			aa4 = z.ms[aZz];
		z.md = aa0, z.mh[aZz] = z.mh[aa0], z.ms[aZz] = z.ms[aa0], z.aZv[aZz] = z.aZv[aa0], z.a8h[aZz] = z.a8h[aa0], z.aa3[aZz] = z.aa3[aa0], z.mg[aZz] = z.mg[aa0], z.me[aZz] = z.me[aa0], z.aa5[aZz] = z.aa5[aa0], z.mf[aZz] = z.mf[aa0], z.mr[aZz] =
			z.mr[aa0], z.a9n[z.mh[aZz]] = aZz,
			function(aXR) {
				var player = aXR >> 3,
					z = bQ.z,
					fS = z.kr[player] - 1,
					aa8 = (player << 3) + fS;
				z.kr[player] = fS, aa8 !== aXR && (z.a9n[aXR] = z.a9n[aa8], z.mh[z.a9n[aXR]] = aXR)
			}(aa1), bQ.jF.jF[bP.jE(z.ms[aZz])][z.aa3[aZz]] = aZz, aa0 = bP.jE(aa4), aa1 = aa2, aa0 = bQ.jF.jF[aa0], z = aa0.pop(), aa1 !== aa0.length && (aa0[aa1] = z, bQ.z.aa3[z] = aa1)
	}
}

function aZD() {
	var aaA, aaB = 8,
		aaC = null;

	function aaH(yl, fE, eI) {
		fE *= 4;
		yl[fE] = 255, yl[1 + fE] = 255, yl[2 + fE] = eI, yl[3 + fE] = 255
	}

	function aaJ(iU, aZ1) {
		var fZ, fb, ip, fE, aaK, aaL, iO = aaB,
			iR = bD.sD.getImageData(iU, iO, iO),
			yl = iR.data,
			li = (iO >> 1) - .5,
			aaN = bD.sL.a4Y(aZ1, .5);
		for (bD.sL.a4a(aZ1, aaN, 300) || bD.sL.a4c(aZ1, 100), fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) aaL = (iO - 1.5) * (iO - 1.5) / 4, yl[fE = 4 * (fb * iO + fZ)] = (aaK = (ip = (ip = fZ - li) * ip + (ip = fb - li) * ip) <= (iO - 4.5) * (iO - 4.5) / 4 ? aaN : aZ1)[0], yl[1 + fE] = aaK[1], yl[2 + fE] = aaK[2],
				yl[3 + fE] = aaL < ip ? 0 : 255;
		iU.putImageData(iR, 0, 0)
	}
	this.dk = function() {
		var eI, iO, a50, iU, iR, yl;
		(aaA = aaA || new Array(aE.fP)).fill(null), eI = 255, iO = aaB + 4, a50 = bD.sD.ya(iO, iO), iU = bD.sD.getContext(a50, !0), iR = bD.sD.getImageData(iU, iO, iO), aaH(yl = iR.data, iO + 1, eI), aaH(yl, iO + 2, eI), aaH(yl, 2 * iO + 1, eI),
			aaH(yl, 2 * iO - 3, eI), aaH(yl, 2 * iO - 2, eI), aaH(yl, 3 * iO - 2, eI), aaH(yl, iO * (iO - 3) + 1, eI), aaH(yl, iO * (iO - 2) + 1, eI), aaH(yl, iO * (iO - 2) + 2, eI), aaH(yl, iO * (iO - 2) - 2, eI), aaH(yl, iO * (iO - 1) - 3, eI),
			aaH(yl, iO * (iO - 1) - 2, eI), iU.putImageData(iR, 0, 0), aaC = a50,
			function() {
				if (aE.iM)
					for (var a50 = new Array(bj.lA.length), fS = aE.fP, aaF = aaA, aCm = bj.aCm, aC = 0; aC < fS; aC++) {
						var a7R = aCm[aC];
						a50[a7R] || (a50[a7R] = function(a7R) {
							var a50 = bD.sD.ya(aaB, aaB),
								iU = bD.sD.getContext(a50, !0),
								h = bR.g1;
							return h.set(bj.aSl[a7R]), aaJ(iU, h), a50
						}(a7R)), aaF[aC] = a50[a7R]
					}
			}()
	}, this.wl = function() {
		var aC, player, aaO, aPe, iB, io, aaQ, aaS, aaT, ms = bQ.z.ms,
			mh = bQ.z.mh,
			a8h = bQ.z.a8h,
			aa5 = bQ.z.aa5,
			aaU = aaA,
			aaV = aE.fC,
			fS = bQ.z.md,
			aaW = i.j,
			aaX = i.k,
			aaY = bV.fd << 4,
			fH = ie,
			f6 = fH / aaB,
			no = j6 / fH,
			np = j7 / fH,
			ip = (aaW + j6) / fH - no,
			is = (aaX + j7) / fH - np,
			iU = wm;
		for (iU.imageSmoothingEnabled = fH < 9, bD.sD.textAlign(iU, 1), bD.sD.textBaseline(iU, 1), aC = 0; aC < fS; aC++) player = mh[aC] >> 3, iB = a8h[aC], aaO = .9 + .1 * Math.log10(iB), aPe = (io = ms[aC]) % aaY / 16 - aaO, io = aaX * (Math
			.floor(io / aaY) / 16 - aaO - np) / is, aaQ = -2 * (aaT = fH * aaO) * (1 + (aaS = +(player === aaV)) / 8), aaS = aaS * aaT / 4, (aaT = aaW * (aPe - no) / ip) < aaQ || io < aaQ || aaW + aaS < aaT || aaX + aaS < io || (aPe = 2 *
			aaO * f6, aaQ = aaO * fH, null === (aaS = aaU[player]) && (aaU[player] = aaS = function(player) {
				var a50 = bD.sD.ya(aaB, aaB);
				return aaJ(bD.sD.getContext(a50, !0), ad.a9O(player)), a50
			}(player)), player === aaV && (iU.setTransform(aPe, 0, 0, aPe, aaT - 2 * aPe, io - 2 * aPe), iU.drawImage(aaC, 0, 0)), iU.setTransform(aPe, 0, 0, aPe, aaT, io), iU.drawImage(aaS, 0, 0), (aaO = Math.floor(function(iB) {
				if (iB < 1e3) return .42;
				if (iB < 1e4) return .34;
				if (iB < 1e6) return .26;
				if (iB < 1e8) return .19;
				return .15
			}(iB) * aaQ)) < 6) || (iU.setTransform(1, 0, 0, 1, 0, 0), iU.fillStyle = aa5[aC] ? bE.pp : bE.pH, iU.font = bD.sD.u1(1, aaO), iU.fillText(bD.tB.a1S(iB), aaT + aaQ, io + aaQ + .1 * aaO));
		iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aZN() {
	var aab;
	this.dk = function() {
		if (!aab) {
			aab = new Array(bj.aad.length);
			for (var aC = 0; aC < aab.length; aC++) aab[aC] = bS.z.aae(20, bj.aad[aC])
		}
	}, this.wl = function() {
		var o8 = ie;
		if (!(5 <= o8)) {
			var aaW = i.j,
				aaX = i.k,
				no = j6 / o8,
				np = j7 / o8,
				o1 = (aaW + j6) / o8,
				o2 = (aaX + j7) / o8,
				h1 = -20 * o8,
				aaf = .5 * h1,
				aaY = bV.fd << 4,
				fS = bQ.z.md,
				ms = bQ.z.ms,
				mh = bQ.z.mh,
				aCm = bj.aCm,
				a50 = aab,
				iU = wm;
			3 < o8 && (iU.globalAlpha = .5 * (5 - o8));
			for (var aC = 0; aC < fS; aC++) {
				var io = ms[aC],
					fZ = aaW * (io % aaY / 16 - no) / (o1 - no) + aaf,
					io = aaX * (Math.floor(io / aaY) / 16 - np) / (o2 - np) + aaf;
				aaW < fZ || aaX < io || fZ < h1 || io < h1 || (iU.setTransform(o8, 0, 0, o8, fZ, io), fZ = a50[aCm[mh[aC] >> 3]], iU.drawImage(fZ, 0, 0))
			}
			iU.globalAlpha = 1, iU.setTransform(o8, 0, 0, o8, 0, 0)
		}
	}
}

function aZR() {
	this.aai = function(player, id) {
		for (var aaj = ah.h9[player], fS = aaj.length, aC = 0; aC < fS; aC++)
			if (bP.ig(aaj[aC], id)) return !0;
		return !1
	}, this.aak = function(player, fE) {
		for (var ix, aal, f6, aaj = ah.h9[player], fS = aaj.length, j = bV.fd, aan = bP.fa(fE), aao = bP.fc(fE), fY = -1, min = bV.fd * bV.fd + bV.fe * bV.fe, id = ad.fA(bP.fI(fE)), aC = 0; aC < fS; aC++)(aal = (aal = aan - (ix = (f6 = aaj[
			aC]) >> 2) % j) * aal + (aal = aao - ~~((.5 + ix) / j)) * aal) < min && bP.ig(f6, id) && (min = aal, fY = ix);
		return fY
	}, this.ld = function(iw, ix) {
		for (var id = ad.fA(bP.fI(ix)), ih = bP.iX, f6 = bP.fI(iw), aap = -1, aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			ad.ii(fH) && ad.fA(fH) === id && (-1 === aap || bP.iy(bP.fG(fH), ix) < bP.iy(aap, ix)) && (aap = bP.fG(fH))
		}
		return aap
	}, this.mC = function(player, fE) {
		for (var ih = bP.iX, f6 = bP.fI(fE), aC = 0; aC < 4; aC++) {
			var fH = f6 + ih[aC];
			if (ad.h2(fH) && ad.a0D(player, fH)) return !0
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
	}, this.aZx = function(f6) {
		if (ad.ii(f6))
			for (var ih = bP.iX, aC = 0; aC < 4; aC++)
				if (ad.fN(f6 + ih[aC])) return !0;
		return !1
	}, this.nn = function(player, id) {
		for (var um = player << 3, un = um + bQ.z.kr[player], mg = bQ.z.mg, a9n = bQ.z.a9n, aC = um; aC < un; aC++) {
			var a9o = a9n[aC];
			if (mg[a9o] === id) return a9o
		}
		return -1
	}, this.ns = function(player) {
		return 0 === bQ.z.kr[player] ? -1 : bQ.z.a9n[player << 3]
	}, this.a7j = function(m2, m3) {
		var fS = bQ.z.md;
		if (fS < 1) return -1;
		for (var ms = bQ.z.ms, aaq = 80, aSF = -1, aC = 0; aC < fS; aC++) {
			var fi = bP.ik(m2, m3, ms[aC]);
			fi < aaq && (aaq = fi, aSF = aC)
		}
		return function(aC, m2, m3) {
			if (aC < 0) return;
			var aax = bQ.z.ms[aC],
				aay = bP.ir(aax),
				aax = bP.iu(aax),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a8h[aC]));
			return aC = Math.max(aC, bP.j8(bD.sD.ur(.02, 1.7))), bO.aPd(bP.iq(m2), bP.it(m3), aay, aax, aC)
		}(aSF, m2, m3) ? aSF : -1
	}, this.aZe = function(nl) {
		for (var fS = bQ.z.md, mg = bQ.z.mg, aC = 0; aC < fS; aC++)
			if (mg[aC] === nl) return bR.g4[2] = aC, !0;
		return !1
	}, this.aJw = function(player) {
		for (var um = player << 3, un = um + bQ.z.kr[player], a9n = bQ.z.a9n, a8h = bQ.z.a8h, iB = 0, aC = um; aC < un; aC++) iB += a8h[a9n[aC]];
		return iB
	}, this.aas = function(player, aZu) {
		aZu = bQ.z.mf[aZu];
		return this.mC(player, aZu[aZu.length - 1])
	}, this.aat = function(iw, ix, fi, aau) {
		var j0 = bP.fa(iw),
			iw = bP.fc(iw),
			j2 = bP.fa(ix),
			ix = bP.fc(ix),
			j2 = (fi = Math.max(fi, 1), j2 - j0),
			ix = ix - iw,
			ip = bO.ft(Math.abs(j2) * aau, fi),
			aau = bO.ft(Math.abs(ix) * aau, fi);
		return bP.fp(j0 + Math.sign(j2) * ip, iw + Math.sign(ix) * aau)
	}, this.aZo = function(m8, fE) {
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
	}, this.aDU = function() {
		for (var ab0 = mO[0], mh = bQ.z.mh, md = bQ.z.md, h = [], aC = 0; aC < md; aC++) bD.go.lR(ab0, mh[aC] >> 3) && h.push(aC);
		return h
	}, this.mA = function(player, m8) {
		for (var um = player << 3, un = um + bQ.z.kr[player], a9n = bQ.z.a9n, mf = bQ.z.mf, hu = m8[0], lQ = m8[m8.length - 1], aC = um; aC < un; aC++) {
			var h0 = mf[a9n[aC]];
			if (h0[0] === hu && h0[h0.length - 1] === lQ) return !0
		}
		return !1
	}
}

function aZS() {
	function ab3(player, aZu) {
		aZu = bP.jD(bQ.z.ms[aZu]), aZu = ad.fA(bP.fI(aZu));
		return !!bQ.lc.aai(player, aZu)
	}

	function ab1(player) {
		return bQ.mt.mu(player) && !bQ.m9.mF()
	}
	this.i6 = function(player, fE) {
		return !!ab1(player) && -1 !== (fE = function(player, fE) {
			for (var fS = bQ.z.md, ms = bQ.z.ms, mh = bQ.z.mh, aaq = bP.iZ(), aSF = -1, aC = 0; aC < fS; aC++) {
				var fi = bP.iv(fE, bP.jD(ms[aC]));
				fi < aaq && bD.go.lR(player, mh[aC] >> 3) && (aaq = fi, aSF = aC)
			}
			return aSF
		}(player, fE)) && !!ab3(player, fE) && (bR.g4[3] = bQ.z.mg[fE], !0)
	}, this.qq = function(player, nl) {
		return !!ab1(player) && !!bQ.lc.aZe(nl) && !!ab3(player, bR.g4[2])
	}, this.rj = function(player, nl, ab4) {
		return !! function(player, nl, ab4) {
			if (ab1(player) && bQ.lc.aZe(nl)) {
				nl = bR.g4[2];
				if (bD.go.lR(player, bQ.z.mh[nl] >> 3)) {
					if (function(player, aZu) {
							return bQ.lc.aas(player, aZu) && (bR.h[0] = bQ.m9.mH(bQ.z.mf[aZu]), bR.g4[1] = 6, !0)
						}(player, nl)) return 1;
					var aZZ = bP.jD(bQ.z.ms[nl]),
						ab8 = bQ.lc.aak(player, aZZ);
					if (-1 !== ab8) {
						ab8 = bP.iv(ab8, aZZ);
						if (!(ab4 && 120 < ab8)) {
							ab4 = function(aZu, ab9, aZZ) {
								var m8 = bQ.z.mf[aZu],
									aZu = bQ.z.mr[aZu],
									abB = bP.iv(aZZ, m8[aZu + 1]);
								if (ab9 <= abB) return bQ.lc.aat(aZZ, m8[aZu + 1], abB, ab9);
								for (var fi = ab9 - abB, fS = m8.length - 1, aC = aZu + 1; aC < fS; aC++) {
									var abC = bP.iv(m8[aC], m8[aC + 1]);
									if (fi <= abC) return bQ.lc.aat(m8[aC], m8[aC + 1], abC, fi);
									fi -= abC
								}
								return m8[fS]
							}(nl, ab8, aZZ);
							if (bQ.la.rg(player, ab4, 1)) return bR.g4[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nl, ab4) && (player = bR.g4[2], bQ.z.me[player] = 64 + bQ.z.me[player] % 64, bQ.mm.ei(nl, bQ.z.mw), !0)
	}
}

function aZH() {
	function abH(player, iB, abF, aZZ) {
		var jw;
		if (ad.fJ(abF)) jw = aE.fP;
		else {
			if ((jw = ad.fK(abF)) === player) return void bg.gs(player, iB - bD.go.gr(player, iB), 12);
			if (!bv.fL(player, jw)) return void bB.kp.r5(player, jw, iB)
		}
		ae.k8(player, jw) || ae.kR(player) ? (ah.gu[player].push(aZZ << 2), ae.ei(player, iB, jw), aG.ju(player, !0)) : bg.gs(player, iB, 12)
	}
	this.ee = function() {
		for (var me = bQ.z.me, ms = bQ.z.ms, aZv = bQ.z.aZv, aC = bQ.z.md - 1; 0 <= aC; aC--) 65535 === aZv[aC] && function(aC, aZZ, iJ) {
			if (6 === iJ) {
				if (bQ.mm.aZi(aC, aZZ)) return bQ.z.mr[aC]++, bQ.z.aZv[aC] = 0, 0
			} else {
				var player = bQ.z.mh[aC] >> 3,
					aC = bQ.z.a8h[aC];
				bg.abG(player), iJ < 4 ? abH(player, aC, aZZ + bP.iW[iJ] << 2, aZZ) : 4 === iJ ? function(player, iB, aZZ) {
					var aC, fW, ih = bP.iX,
						fH = bP.fI(aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.fJ(fW)) return abH(player, iB, fW, aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW) && !ad.a0D(player, fW)) return abH(player, iB, fW, aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW)) return abH(player, iB, fW, aZZ)
				}(player, aC, aZZ) : 5 === iJ && function(player, iB, aZZ) {
					var aC, fW, ih = bP.iX,
						fH = bP.fI(aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW) && ad.a0D(player, fW)) return abH(player, iB, fW, aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.h2(fW)) return abH(player, iB, fW, aZZ);
					for (aC = 0; aC < 4; aC++)
						if (fW = fH + ih[aC], ad.fJ(fW)) return abH(player, iB, fW, aZZ)
				}(player, aC, aZZ)
			}
			return 1
		}(aC, bP.jD(ms[aC]), me[aC] % 64) && (bQ.mm.aZf(aC), bQ.aJz.aZy(aC))
	}, this.abE = function(player, fE, iJ, nl, iB) {
		if (!(5 <= iJ)) {
			var aaV = aE.fC;
			if (bD.go.he(aaV) && bv.fL(player, aaV) && player !== aaV && 0 !== ah.h9[aaV].length && bD.go.a5a(player, 5)) {
				for (var abF, fg = !1, aC = 0; aC < 4; aC++)
					if (abF = fE + bP.iW[aC] << 2, ad.fN(abF) && !ad.fJ(abF) && ad.fK(abF) === aaV) {
						fg = !0;
						break
					} fg && (aO.a8p(719, 0), iJ = iB < 25e3 ? L(497) + " (" + bD.tB.a1S(iB) + ") ⛵" : L(498) + " (" + bD.tB.a1S(iB) + ") 🚢", aO.a0d(180, iJ, 719, player, bE.po, bE.pE, -1, !0, void 0, {
					fm: 1,
					nl: nl
				}))
			}
		}
	}
}

function aZE() {
	this.l1 = 512, this.aZw = 8, this.md = 0, this.mw = 0, this.mh = new Uint16Array(this.l1), this.ms = new Uint32Array(this.l1), this.aZv = new Uint16Array(this.l1), this.a8h = new Uint32Array(this.l1), this.aa3 = new Uint16Array(this.l1), this
		.mg = new Uint16Array(this.l1), this.me = new Uint8Array(this.l1), this.aa5 = new Uint8Array(this.l1), this.mf = new Array(this.l1), this.mr = new Uint16Array(this.l1), this.kr = new Uint8Array(aE.fP), this.a9n = new Uint16Array(this.aZw * aE
			.fP), this.dk = function() {
			this.md = 0, this.mw = 0, this.kr.fill(0), this.mf.fill(null)
		}, this.my = function(player) {
			var iB = bR.fz[0],
				mi = bR.g4[1],
				m8 = bR.h[0],
				abK = this.mw,
				fS = this.md,
				abL = bP.jC(m8[0]),
				abM = this.kr[player],
				abN = (player << 3) + abM;
			this.mh[fS] = abN, this.ms[fS] = abL, this.aZv[fS] = 0, iB < 60 && (bD.go.gp(player, 60 - iB), iB = 60), this.a8h[fS] = iB, this.aa3[fS] = bQ.jF.my(fS, bP.jE(abL)), this.mg[fS] = abK, this.me[fS] = mi, this.aa5[fS] = 0, this.mf[fS] = m8,
				this.mr[fS] = 0, this.mw = (abK + 1) % 65536, this.kr[player] = abM + 1, this.a9n[abN] = fS, this.md++, bQ.mi.abE(player, m8[m8.length - 1], mi, abK, iB)
		}, this.ee = function() {
			bQ.mi.ee();
			for (var h0 = aE.fC, ea = bQ.lc.aJw(h0), tl = (! function(tl) {
					for (var abS, ms = tl.ms, a8h = tl.a8h, aa5 = tl.aa5, aZv = tl.aZv, aa3 = tl.aa3, mf = tl.mf, mr = tl.mr, tl = tl.md, aaY = bV.fd << 4, aC = tl - 1; 0 <= aC; aC--) {
						var abT = ms[aC],
							m8 = mf[aC],
							abU = mr[aC],
							abL = bP.jC(m8[abU]),
							abV = bP.jC(m8[abU + 1]),
							abW = abL % aaY,
							abL = ~~((abL + .5) / aaY),
							abY = abV % aaY,
							abZ = ~~((abV + .5) / aaY),
							aba = abY - abW,
							abb = abZ - abL,
							fV = Math.max(~~Math.sqrt(aba * aba + abb * abb + .5), 1),
							aKt = a8h[aC],
							aKt = (aKt = aa5[aC] ? 4e4 : 25e4 + Math.min(20 * aKt, 3e5) + Math.min(aKt >> 3, 5e4), aZv[aC] + Math.max(~~((aKt + .5) / fV), 1));
						65535 <= aKt ? abU + 2 < m8.length ? (mr[aC] = abU + 1, ms[aC] = abS = function(aC, abc, abW, abX, abU, fV, m8, aaY) {
							abc = Math.min(abc - 65535, 65535);
							var m8 = bP.jC(m8[abU + 2]),
								abU = m8 % aaY - abW,
								m8 = ~~((m8 + .5) / aaY) - abX,
								abf = Math.max(~~Math.sqrt(abU * abU + m8 * m8 + .5), 1);
							return abc = Math.min(Math.floor((fV * abc + .5) / abf), 65534), bQ.z.aZv[aC] = abc, abW + bO.ft(abc * abU, 65535) + aaY * (abX + bO.ft(abc * m8, 65535))
						}(aC, aKt, abY, abZ, abU, fV, m8, aaY)) : (ms[aC] = abS = abV, aZv[aC] = 65535) : (aZv[aC] = aKt, ms[aC] = abS = abW + bO.ft(aKt * aba, 65535) + aaY * (abL + bO.ft(aKt * abb, 65535))), aa3[aC] = bQ.jF.abe(aa3[aC],
							abT, abS)
					}
				}(this), ! function(tl) {
					if (bi.kk() % 2 == 1) {
						var aC, iK, li, fm, ej, abg, a16, abh, hu, no, np, abL, abi, aBG, abk, lQ, fS = tl.md,
							ms = tl.ms,
							mh = tl.mh,
							a8h = tl.a8h,
							aa5 = tl.aa5,
							jF = bQ.jF.jF,
							abm = jF.length,
							abn = bQ.jF.abn,
							aaY = bV.fd << 4,
							abo = aE.iM,
							aXG = bj.fQ,
							h1 = (fS - 1) * (bO.ft(bi.kk(), 2) % 2);
						for (aC = 0; aC < fS; aC++)
							for (iK = Math.abs(aC - h1), abL = ms[iK], li = bP.jE(abL), hu = mh[iK] >> 3, no = abL % aaY, np = ~~((abL + .5) / aaY), abk = a8h[iK], fm = 0; fm < 9; fm++)
								if (!((abg = li + abn[fm]) < 0 || abm <= abg))
									for (abh = jF[abg], a16 = abh.length, ej = 0; ej < a16; ej++) abi = abh[ej], lQ = mh[abi] >> 3, hu == lQ || abo && aXG[hu] === aXG[lQ] && aXG[hu] || (lQ = ms[abi], (aBG = no - lQ % aaY) * aBG + (aBG = np -
										~~((lQ + .5) / aaY)) * aBG < 14400 && (lQ = a8h[abi], aBG = lQ <= abk ? Math.max(1, bO.ft(lQ + bO.ft(abk - lQ, 10), 10)) : Math.max(1, bO.ft(abk, 10)), a8h[abi] = Math.max(lQ - aBG, 0), aa5[
										abi] = 4))
					}
				}(this), ! function(tl) {
					if (bi.kk() % 5 == 3)
						for (var a8h = tl.a8h, fS = tl.md, aC = 0; aC < fS; aC++) {
							var iB = a8h[aC];
							a8h[aC] = Math.max(iB - Math.max(1, iB >> 7), 0)
						}
				}(this), this), a8h = tl.a8h, aa5 = tl.aa5, aC = tl.md - 1; 0 <= aC; aC--) aa5[aC] = aa5[aC] >> 1, 0 === a8h[aC] && (bQ.mm.aZf(aC), bQ.aJz.aZy(aC));
			bg.gs(h0, ea - bQ.lc.aJw(h0), 15)
		}
}

function aZF() {
	this.abp = 32, this.fZ = 0, this.fb = 0, this.jG = 0, this.abq = 0, this.abr = 4, this.jF = null, this.abn = new Int16Array(9), this.dk = function() {
		this.jG = 1 + bO.ft(bV.fd - 1, this.abp), this.abq = 1 + bO.ft(bV.fe - 1, this.abp), this.jF = new Array(this.jG * this.abq), bD.sL.a4X(this.jF);
		var fZ, fb, abn = this.abn,
			j = this.jG;
		for (fZ = -1; fZ <= 1; fZ++)
			for (fb = -1; fb <= 1; fb++) abn[3 * (1 + fb) + 1 + fZ] = fb * j + fZ
	}, this.my = function(abu, aC) {
		return this.jF[aC].push(abu), this.jF[aC].length - 1
	}, this.abe = function(abv, abL, abV) {
		var abw, abx, abL = bP.jE(abL),
			abV = bP.jE(abV);
		return abL === abV ? abv : (abw = this.jF[abL].pop(), this.jF[abL].length === abv ? this.my(abw, abV) : (abx = this.jF[abL][abv], this.jF[abL][abv] = abw, bQ.z.aa3[abw] = abv, this.my(abx, abV)))
	}
}

function aZJ() {
	this.lb = function(player, aby) {
		return -1 !== aby && !!bQ.lc.mD(player, aby) && this.rg(player, aby, 0)
	}, this.rg = function(player, aby, abz) {
		player = function(player, aby, abz) {
			var ab8 = bQ.lc.aak(player, aby);
			if (-1 === ab8) return -1;
			ab8 = bQ.lc.ld(ab8, aby);
			if (-1 === ab8) return -1;
			var m6 = bQ.m9.mE(ab8, aby);
			if (0 <= m6) return m6;
			if (bQ.m9.mF()) return -1;
			if (0 <= (m6 = bQ.m9.mE(aby, ab8))) return bQ.m9.mG(bQ.m9.mH(bQ.m9.get(m6)));
			if (ab8 === aby) return bQ.m9.mG(new Uint32Array([ab8, aby]));
			if (0 <= (m6 = bQ.aZK.rg(ab8, aby))) return m6;
			return abz ? function(ac3, player) {
				var g9 = bR.g9,
					buffer = (g9.fill(0), [ac3]),
					iY = (g9[ac3] = 1, bP.iY),
					ac4 = -1,
					fS = buffer.length;
				for (; - 1 === ac4 && fS;) {
					for (var h = [], aC = 0; aC < fS; aC++)
						for (var fE = buffer[aC], a6K = g9[fE], fV = 0; fV < 8; fV++) {
							var yK, a2w, fY = fE + iY[fV],
								f6 = 4 * fY;
							ad.ii(f6) ? (yK = g9[fY], a2w = a6K + 5 + ((1 & fV) << 1), 0 === yK ? (h.push(fY), g9[fY] = a2w) : g9[fY] = Math.min(a2w, yK)) : -1 === ac4 && fV % 2 == 0 && ad.a0A(player, f6) && (ac4 = fE)
						}
					fS = (buffer = h).length
				}
				return -1 !== ac4 ? function(iw, ac6) {
					var iY = bP.iY,
						ac7 = -1,
						iJ = 0,
						nJ = [];
					for (; ac6 !== iw;)(iJ = function(fE, iJ) {
						var g9 = bR.g9,
							iY = bP.iY,
							a6K = g9[fE];
						if (a6K - g9[fE + iY[iJ]] != 5 + ((1 & iJ) << 1))
							for (var fl = 0; fl < 8; fl++) {
								var fV = fl + iJ + 6 & 7;
								if (a6K - g9[fE + iY[fV]] == 5 + ((1 & fV) << 1)) return fV
							}
						return iJ
					}(ac6, iJ)) !== ac7 && (nJ.push(ac6), ac7 = iJ), ac6 += iY[iJ];
					nJ.push(iw);
					var m6 = bQ.m9.mE(nJ[0], iw);
					if (0 <= m6) return m6;
					return bQ.m9.mG(new Uint32Array(nJ))
				}(ac3, ac4) : -1
			}(aby, player) : -1
		}(player, aby, abz);
		return -1 !== player && (bR.h[0] = bQ.m9.get(player), !0)
	}
}

function aZL() {
	function ac9(hh, j1, j3) {
		for (var k3 = Math.min(j1, j3), o6 = Math.max(j1, j3), fb = k3 + 1; fb < o6; fb++)
			if (!ad.ii(bP.j9(hh, fb))) return;
		return 1
	}

	function acA(hj, j0, j2) {
		for (var k3 = Math.min(j0, j2), o6 = Math.max(j0, j2), fZ = k3 + 1; fZ < o6; fZ++)
			if (!ad.ii(bP.j9(fZ, hj))) return;
		return 1
	}

	function acB(j0, j1, j2, j3, ac1, aby) {
		for (var fS = Math.min(Math.abs(j2 - j0), Math.abs(j3 - j1)), ip = Math.sign(j2 - j0), is = Math.sign(j3 - j1), aC = 0; aC < fS; aC++)
			if (!ad.ii(bP.j9(j0 += ip, j1 += is))) return null;
		return j0 === j2 ? ac9(j0, j1, j3) ? new Uint32Array([ac1, bP.fp(j0, j1), aby]) : null : acA(j1, j0, j2) ? new Uint32Array([ac1, bP.fp(j0, j1), aby]) : null
	}
	this.rg = function(ac1, aby) {
		ac1 = function(ac1, aby) {
			var j0 = bP.fa(ac1),
				j1 = bP.fc(ac1),
				j2 = bP.fa(aby),
				j3 = bP.fc(aby);
			if (j0 === j2) {
				if (ac9(j0, j1, j3)) return new Uint32Array([ac1, aby])
			} else {
				if (j1 !== j3) return acB(j0, j1, j2, j3, ac1, aby) || acB(j2, j3, j0, j1, ac1, aby);
				if (acA(j1, j0, j2)) return new Uint32Array([ac1, aby])
			}
			return null
		}(ac1, aby);
		return null === ac1 ? -1 : bQ.m9.mG(ac1)
	}
}

function aZQ() {
	var acC = [];
	this.dk = function() {
		acC = []
	}, this.mF = function() {
		return 65536 === acC.length
	}, this.mE = function(ac1, aby) {
		for (var m9 = acC, fS = m9.length, aC = 0; aC < fS; aC++) {
			var h0 = m9[aC];
			if (h0[0] === ac1 && h0[h0.length - 1] === aby) return aC
		}
		return -1
	}, this.mH = function(m8) {
		var acD = new Uint32Array(m8.length);
		return acD.set(m8), acD.reverse()
	}, this.aZm = function(hu, lQ) {
		var gv = hu.length - 1,
			acE = new Uint32Array(gv + lQ.length);
		return acE.set(hu, 0), acE.set(lQ, gv), acE
	}, this.aZr = function(hu, lQ, xo, fE, acF) {
		acF && (xo = (lQ = this.mH(lQ)).length - xo - 2);
		acF = lQ.subarray(xo + 1 + (fE === lQ[xo + 1])), fE = new Uint32Array(hu.length + acF.length);
		return fE.set(hu, 0), fE.set(acF, hu.length), fE
	}, this.mG = function(m8) {
		return acC.push(m8), acC.length - 1
	}, this.get = function(aC) {
		return acC[aC]
	}, this.mB = function() {
		return acC
	}, this.acH = function(ac1, aby) {
		return null
	}
}

function aZU() {
	this.ee = function(player, nl) {
		player = bQ.lc.nn(player, nl);
		return !(player < 0 || !bQ.mm.aZt(player) || (bQ.mm.aZf(player), 0))
	}
}

function aZG() {
	var a0l = 32,
		a0k = new Array(2);

	function ya(ej) {
		var fZ, fb, fE, is, ip, iO = a0l,
			a50 = bD.sD.ya(iO, iO),
			iU = bD.sD.getContext(a50, !0),
			iR = bD.sD.getImageData(iU, iO, iO),
			yl = iR.data,
			li = (iO >> 1) - .5,
			lj = Math.sqrt(li * li);
		for (yl.fill(255), fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) ip = fZ - li, is = fb - li, fE = 4 * (fb * iO + fZ), ip = 714 * (lj - Math.sqrt(ip * ip + is * is)) / lj, yl[2 + fE] = ej, yl[3 + fE] = 255 < ip ? 0 : ip;
		return iU.putImageData(iR, 0, 0), a50
	}
	this.acI = -1, this.dk = function() {
		this.acI = -1, a0k[0] || (a0k[0] = ya(255), a0k[1] = ya(0))
	}, this.acJ = function(iU, f6, fZ, fb, eH, aC) {
		bD.go.he(aE.fC) && (iU.setTransform(f6 *= 4 / 3 * .625, 0, 0, f6, fZ - (eH *= 4 / 3), fb - eH), iU.drawImage(a0k[+(bQ.z.mg[aC] === this.acI)], 0, 0))
	}
}

function aZP() {
	function aXX(fZ, fS, fb, acK, aBM, fs, player) {
		if (!(fb < 1 || aBM < fb))
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (bQ.lc.aZx(f6) && !bD.sL.has(acK, ad.fA(f6)) && ad.a02(f6, player)) return f6 >> 2;
				fZ += fs
			}
		return -1
	}

	function aXb(fb, fS, fZ, acK, aXV, fs, player) {
		if (!(fZ < 1 || aXV < fZ)) {
			fS = Math.max(fS, 0);
			for (var aC = 0; aC <= fS; aC++) {
				var f6 = bP.j9(fZ, fb);
				if (bQ.lc.aZx(f6) && !bD.sL.has(acK, ad.fA(f6)) && ad.a02(f6, player)) return f6 >> 2;
				fb += fs
			}
		}
		return -1
	}

	function aXf(iw, ix, aXS) {
		return -1 !== ix && (-1 === iw || bP.iy(ix, aXS) < bP.iy(iw, aXS)) ? ix : iw
	}
	this.i3 = function(player, aXS) {
		if (bQ.mt.mu(player))
			for (var aXT = bP.iZ(), acK = [];;) {
				var ac4 = function(aXS, aXT, acK, player) {
					for (var hh = bP.fa(aXS), hj = bP.fc(aXS), aXV = bV.fd - 2, aBM = bV.fe - 2, aXW = -1, fV = 0; fV < aXT; fV++) {
						var aBL = Math.max(hh - fV, 1),
							aO6 = Math.max(hj - fV, 1),
							zy = Math.min(hh + fV, aXV),
							zx = Math.min(hj + fV, aBM),
							iw = aXX(hh, zy - hh, hj - fV, acK, aBM, 1, player),
							ix = aXX(hh - 1, hh - aBL - 1, hj - fV, acK, aBM, -1, player),
							zy = aXX(hh, zy - hh, hj + fV, acK, aBM, 1, player),
							aBL = aXX(hh - 1, hh - aBL - 1, hj + fV, acK, aBM, -1, player),
							aXa = aXb(hj, zx - hj - 1, hh - fV, acK, aXV, 1, player),
							aXc = aXb(hj - 1, hj - aO6 - 2, hh - fV, acK, aXV, -1, player),
							zx = aXb(hj, zx - hj - 1, hh + fV, acK, aXV, 1, player),
							aO6 = aXb(hj - 1, hj - aO6 - 2, hh + fV, acK, aXV, -1, player);
						if (aXW = aXf(aXW, iw, aXS), aXW = aXf(aXW, ix, aXS), aXW = aXf(aXW, zy, aXS), aXW = aXf(aXW, aBL, aXS), aXW = aXf(aXW, aXa, aXS), aXW = aXf(aXW, aXc, aXS), aXW = aXf(aXW, zx, aXS), 0 <= (aXW = aXf(aXW, aO6, aXS)) &&
							fV * fV >= bP.iy(aXW, aXS)) return aXW
					}
					return -1
				}(aXS, aXT, acK, player);
				if (-1 === ac4) break;
				var id = ad.fA(bP.fI(ac4));
				if (bQ.lc.aai(player, id)) return !! function(player, ac4, aXS) {
					for (var iJ = bP.jJ(ac4, aXS), aC = 0; aC < 4; aC++) {
						var fE = bP.jH(ac4, iJ);
						if (ad.aJU(bP.fI(fE), player)) return bR.g4[6] = iJ, 1;
						iJ = (iJ + 1) % 4
					}
					return
				}(player, ac4, aXS) && (bR.g4[7] = ac4, !0);
				acK.push(id)
			}
		return !1
	}
}

function dn() {
	this.aUt = [L(499), L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514)];
	var acN = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aDq = new Array(acN.length), this.dk = function() {
		var h = bm.buffer.data[155].value.split(";"),
			li = h.length;
		if (function() {
				for (var fS = acN.length, aC = 0; aC < fS; aC++) ba.aDq[aC] = acN[aC]
			}(), !(li > acN.length))
			for (var aC = 0; aC < li; aC++) h[aC].length && (this.aDq[aC] = h[aC])
	}, this.aUv = function(eI, code) {
		for (var aDq = this.aDq, acP = acN, ru = (aDq[eI] = code, ""), fS = aDq.length, acQ = [], aC = 0; aC < fS; aC++) acQ.push(aDq[aC] === acP[aC] ? "" : aDq[aC]);
		fS--;
		for (aC = 0; aC < fS; aC++) ru += acQ[aC] + ";";
		bm.qh.qi(155, ru += acQ[fS])
	}, this.aUs = function() {
		bm.qh.qi(155, ""), this.dk()
	}, this.ej = function(code, eI) {
		return code === this.aDq[eI] || code === this.aDq[eI + 1]
	}
}

function de() {
	var acR = new Array(1),
		acS = new Array(1),
		acT = 20,
		eX = 0,
		acU = !1;

	function acW() {
		acT++, bs.play()
	}
	this.dk = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				acS[aC] = 0, acR[aC] = document.createElement("audio"), acR[aC].src = src, acR[aC].setAttribute("preload", "auto"), acR[aC].setAttribute("controls", "none"), acR[aC].style.display = "none", acR[aC].onpause = function() {
					acS[aC] = 1
				}, acR[aC].oncanplaythrough = function() {
					acS[aC] = 0 === acS[aC] ? 1 : acS[aC]
				}, document.body.appendChild(acR[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			acU = !0
		}
	}, this.vr = function() {
		if (acU) {
			acU = !1;
			for (var aC = 0; 0 <= aC; aC--) acR[aC].onpause = null, acR[aC].oncanplaythrough = null, u.removeChild(document.body, acR[aC]), acR[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (acU) {
			var ea = performance.now();
			if (eX + 66 < ea)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === acS[aC]) return eX = ea, acS[aC] = 2, void acR[aC].play();
			0 < acT && (acT--, setTimeout(acW, 66))
		}
	}
}

function ce() {
	this.aAL = function() {
		var acZ;
		return !(am.lJ < 3 || ah.hG[mO[0]] >= aE.kX >> 1) && (aE.iM ? 9 !== aE.l5 && (acZ = af.aLW(), !(2 * af.aLX(bk.lM()) >= acZ)) : function() {
			if (8 === aE.l5) return !1;
			var acZ = af.aLW();
			if (2 * ah.hU[mO[0]] >= acZ) return !1;
			return !0
		}())
	}
}

function cE() {
	this.dk = function() {
		if (0 === aE.data.sResourcesType) {
			for (var abM = aE.kn, hU = ah.hU, aC = 0; aC < abM; aC++) hU[aC] = 512;
			var abN = aE.zG,
				l0 = aF.l0,
				iB = aF.iB;
			for (aC = abM; aC < abN; aC++) hU[aC] = l0[iB[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fS = aE.zG, hU = ah.hU, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fS; aC++) hU[aC] = sResourcesValue
		} : function() {
			for (var fS = aE.zG, hU = ah.hU, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fS; aC++) hU[aC] = sResourcesData[aC]
		})();
		bg.nJ[8] = ah.hU[aE.fC]
	}
}

function dV() {
	var aJi = 501,
		acf = (this.ace = new Uint32Array(aJi), this.a5f = new Uint32Array(aJi), this.aDV = new Uint16Array(aJi), this.aV3 = 0, 1),
		w4 = 0;

	function aci(self) {
		self.max.fill(0)
	}

	function ack(self, aC) {
		self.max[0] = Math.max(self.ace[aC], self.max[0]), self.max[1] = Math.max(self.a5f[aC], self.max[1]), self.max[2] = Math.max(self.aDV[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.acg = 0, this.nJ = new Array(21), this.ach = null, this.dl = function() {
		this.ach = [L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(341), L(342), L(523), L(524), L(525), L(526), "", L(527), L(528), L(529), L(299), L(530), L(531)]
	}, this.dk = function() {
		this.aV3 = 0, acf = 1, this.acg = 0, w4 = 0, aci(this), this.nJ.fill(0)
	}, this.rd = function(player, j5) {
		bD.go.a5Z(player) && (this.nJ[0] += j5 + 1, this.nJ[1]++, this.nJ[12] += bR.fz[1])
	}, this.r8 = function(player, ql) {
		__fx.donationsTracker.logDonation(player, ql, bR.fz[0], aX.a7B());
		player === aE.fC && (aO.r8(bR.fz[0], bR.fz[1], ql), this.nJ[12] += bR.fz[1], this.nJ[16] += bR.fz[0]), ql === aE.fC && (aO.a8t(bR.fz[0], player), this.nJ[10] += bR.fz[0])
	}, this.rh = function(player) {
		bD.go.a5Z(player) && (this.nJ[2]++, this.nJ[12] += bR.fz[1])
	}, this.rp = function(player) {
		bD.go.a5Z(player) && (this.nJ[19]++, this.nJ[12] += bR.fz[1])
	}, this.abG = function(player) {
		bD.go.a5Z(player) && this.nJ[20]++
	}, this.gs = function(player, a6K, eI) {
		bD.go.a5Z(player) && (this.nJ[eI] += a6K)
	}, this.ee = function() {
		var self;
		this.acg || 0 < w4-- || ((self = this).ace[self.aV3] = ah.hG[aE.fC], self.a5f[self.aV3] = ah.hU[aE.fC], self.aDV[self.aV3] = af.aDW(aE.fC), ack(self, self.aV3), self.aV3++, self.aV3 === aJi && function(self) {
			aci(self), ack(self, 0), self.aV3 = 1 + bO.ft(aJi, 2);
			for (var aC = 1; aC < self.aV3; aC++) self.ace[aC] = self.ace[2 * aC], self.a5f[aC] = self.a5f[2 * aC], self.aDV[aC] = self.aDV[2 * aC], ack(self, aC);
			acf *= 2
		}(self), w4 = acf - 1, bh.nA(), 0 === ah.nN[aE.fC] && (self.acg = bi.kk()))
	}
}

function dW() {
	this.j = 0, this.k = 0, this.uZ = 0, this.ua = 0, this.acm = 0, this.acn = 0, this.aAZ = 0, this.vH = 0;
	var acp = this.aco = 0;
	this.acq = 0, this.acr = 0, this.acs = 0, this.a9u = 0, this.eI = 0, this.aD6 = null, this.iE = !1, this.act = -1, this.acu = !1, this.acv = [0, 0], this.dl = function() {
		this.aD6 = [L(532), L(125, 0, "Balance"), L(124, 0, "Interest"), L(533)]
	}, this.dk = function() {
		this.iE = !1, this.act = -1, this.acu = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fV = a1.a2.ib() && i.j < i.k ? 1 : a1.a2.ib() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fV * this.j), this.j -= a1.a2.ib() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.a9u = Math.floor(this.k / 150), this.a9u = Math.max(this.a9u, 1.5), this.uZ = Math.floor(1 + .02 * this
			.j), this.ua = Math.floor(1 + .04 * this.j), this.aAZ = this.ua, acp = Math.floor(.75 * this.aAZ), this.vH = Math.floor(1 + .075 * this.j), this.acq = Math.floor(1 + .1125 * this.j), this.acr = Math.floor(this.j * (a1.a2.ib() ? .03 :
				.029)), this.acr = Math.max(this.acr, 4), this.acs = Math.floor(.035 * this.j), this.acs = Math.max(this.acs, 4), this.aco = this.k - 2 * this.aAZ - this.vH - this.acq, this.iE && this.acw()
	}, this.hf = function(m2, m3) {
		var zJ, zI;
		return !!this.iE && (zI = m2, zJ = m3, m2 -= bO.ft(i.j - this.j, 2), m3 -= bO.ft(i.k - this.k, 2), m2 < 0 || m3 < 0 || m2 >= this.j || m3 >= this.k || m2 >= this.j - this.acq && m3 < this.acq ? -1 !== aN.hf(zI, zJ) || bF.hf(zI, zJ) ||
			this.tS() : m3 < this.acq || (m3 < this.k - this.vH ? (this.acu = !0, this.act = (m2 - 2 * this.uZ - this.acm) / this.acn, 3 !== this.eI && (bi.ds = !0)) : (zI = (zI = Math.floor(m2 / (this.j / this.aD6.length))) < 0 ? 0 : zI >=
				this.aD6.length ? this.aD6.length - 1 : zI) !== this.eI && (this.eI = zI, this.acw(), bi.ds = !0)), !0)
	}, this.a3h = function(m2, m3) {
		return this.acv[0] = m2, this.acv[1] = m3, !(!this.iE || !this.acu || (m2 -= bO.ft(i.j - this.j, 2), m3 = this.act, this.act = (m2 - 2 * this.uZ - this.acm) / this.acn, (0 <= this.act && this.act <= 1 || 0 <= m3 && m3 <= 1) && (bi.ds = !
			0), 0))
	}, this.a46 = function() {
		this.acu && (this.acu = !1)
	}, this.a4I = function() {
		this.iE ? this.tS() : this.show()
	}, this.show = function() {
		bg.aV3 < 2 || (this.iE = !0, this.acw())
	}, this.tS = function() {
		this.iE = !1, this.act = -1, bi.ds = !0
	}, this.acw = function() {
		this.eI < 2 ? this.acm = aR.measureText(bD.tB.a1S(bg.max[this.eI]), bD.sD.u1(0, this.acr)) : 2 === this.eI && (this.acm = aR.measureText(bD.tB.a6D(6, 2), bD.sD.u1(0, this.acr))), this.acn = this.j - 2 * this.uZ - this.acm - this.ua
	}, this.nA = function() {
		this.iE && this.acw()
	}, this.wl = function() {
		this.iE && this.aAr()
	}, this.aAr = function() {
		var fZ = bO.ft(i.j - this.j, 2),
			fb = bO.ft(i.k - this.k, 2);
		wm.setTransform(1, 0, 0, 1, fZ, fb), wm.fillStyle = bE.pE, wm.fillRect(0, this.acq, this.j, this.k - this.acq), this.acx(), this.aTZ(), wm.strokeRect(0, 0, this.j, this.k), bD.sD.textAlign(wm, 2), wm.font = bD.sD.u1(0, this.acr), 0 ===
			this.eI ? this.acy(bg.ace, fZ, fb) : 1 === this.eI ? this.acy(bg.a5f, fZ, fb) : 2 === this.eI ? this.acz(fZ, fb) : 3 === this.eI && (this.ad0(fZ, fb), this.ad1(fZ, fb)), aN.a81(Math.floor(fZ + this.j - .725 * this.acq), Math.floor(
				fb + .275 * this.acq), Math.floor(.45 * this.acq)), wm.setTransform(1, 0, 0, 1, 0, 0)
	}, this.acx = function() {
		var aC, ea;
		for (wm.lineWidth = this.a9u, bD.sD.textBaseline(wm, 1), bD.sD.textAlign(wm, 1), wm.strokeStyle = bE.pH, wm.font = bD.sD.u1(1, this.acs), ea = this.j / this.aD6.length, wm.fillStyle = bE.pd, wm.fillRect(this.eI * ea, this.k - this.vH, ea,
				this.vH), wm.fillStyle = bE.pH, wm.fillRect(0, this.k - this.vH - .5 * this.a9u, this.j, this.a9u), aC = 1; aC <= 3; aC++) wm.fillRect(aC * ea, this.k - this.vH, this.a9u, this.vH);
		for (aC = this.aD6.length - 1; 0 <= aC; aC--) wm.fillText(bD.on.a5E(this.aD6[aC], 0, .9 * ea), (aC + .5) * ea, this.k - .46 * this.vH)
	}, this.aTZ = function() {
		wm.fillStyle = bE.q3, wm.fillRect(0, 0, this.j, this.acq), wm.fillStyle = bE.pH, wm.fillRect(0, this.acq - .5 * this.a9u, this.j, this.a9u), wm.font = bD.sD.u1(1, .39 * this.acq), wm.fillText(bD.on.a5E(L(534), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.acq))
	}, this.acy = function(h, fZ, fb) {
		var li = bg.max[this.eI],
			a4Z = (wm.setTransform(1, 0, 0, 1, fZ + 2 * this.uZ + this.acm, fb + this.aAZ + this.acq), wm.lineWidth = 2, this.aco / Math.sqrt(li));
		wm.beginPath(), wm.moveTo(this.acn, this.aco - a4Z * Math.sqrt(h[bg.aV3 - 1]));
		for (var aC = bg.aV3 - 2; 0 <= aC; aC--) wm.lineTo(aC * this.acn / (bg.aV3 - 1), this.aco - a4Z * Math.sqrt(h[aC]));
		wm.stroke();
		fZ = this.a81(h, a4Z, .5);
		fZ < .95 && wm.fillText(bD.tB.a1S(li), -this.uZ, 0), .05 < Math.abs(fZ - .5) && wm.fillText(bD.tB.a1S(Math.floor(li / 4)), -this.uZ, Math.floor(this.aco / 2)), .05 < fZ && wm.fillText("0", -this.uZ, this.aco)
	}, this.acz = function(fZ, fb) {
		wm.setTransform(1, 0, 0, 1, fZ + 2 * this.uZ + this.acm, fb + this.aAZ + this.acq), wm.lineWidth = 2;
		var a4Z = this.aco / Math.max(bg.max[this.eI], 1);
		wm.beginPath(), wm.moveTo(this.acn, this.aco - a4Z * bg.aDV[bg.aV3 - 1]);
		for (var aC = bg.aV3 - 2; 0 <= aC; aC--) wm.lineTo(aC * this.acn / (bg.aV3 - 1), this.aco - a4Z * bg.aDV[aC]);
		wm.stroke();
		fZ = this.a81(bg.aDV, a4Z, 1), fb = bg.max[this.eI] / 100;
		fZ < .95 && wm.fillText(bD.tB.a6D(fb, 2), -this.uZ, 0), .05 < Math.abs(fZ - .5) && wm.fillText(bD.tB.a6D(fb / 2, 2), -this.uZ, Math.floor(this.aco / 2)), .05 < fZ && wm.fillText(bD.tB.a6D(0, 2), -this.uZ, this.aco)
	}, this.ad0 = function(fZ, fb) {
		wm.setTransform(1, 0, 0, 1, fZ + .34 * this.j, fb + 2 * acp + this.acq), bD.sD.textAlign(wm, 2);
		for (var aCo = this.k - 4 * acp - this.vH - this.acq, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) wm.fillText(bD.on.a5E(bg.ach[h[aC]], 0, .31 * this.j), 0, aC * aCo / 9);
		var fu = bg.nJ;
		for (wm.setTransform(1, 0, 0, 1, fZ + .39 * this.j, fb + 2 * acp + this.acq), bD.sD.textAlign(wm, 0), wm.fillText(bD.tB.a6D(100 * fu[0] / (1024 * Math.max(fu[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) wm.fillText(fu[h[aC]].toString(), 0,
			aC * aCo / 9);
		wm.fillText(bD.tB.a6D(100 * (1 - ah.hG[aE.fC] / fu[7]), 0), 0, aCo)
	}, this.ad1 = function(fZ, fb) {
		wm.setTransform(1, 0, 0, 1, fZ + .79 * this.j, fb + 2 * acp + this.acq), bD.sD.textAlign(wm, 2);
		var aC, aCo = this.k - 4 * acp - this.vH - this.acq;
		for (wm.fillStyle = bE.pY, aC = 2; 0 <= aC; aC--) wm.fillText(bD.on.a5E(bg.ach[aC + 8], 0, .31 * this.j), 0, aC * aCo / 9);
		wm.fillText(bD.on.a5E(bg.ach[18], 0, .31 * this.j), 0, 3 * aCo / 9), wm.fillStyle = bE.pX, wm.fillText(bD.on.a5E(bg.ach[11], 0, .31 * this.j), 0, 4 * aCo / 9), wm.fillStyle = bE.pq, wm.fillText(bD.on.a5E(bg.ach[13], 0, .31 * this.j), 0,
				5 * aCo / 9), wm.fillText(bD.on.a5E(bg.ach[15], 0, .31 * this.j), 0, 6 * aCo / 9), wm.fillText(bD.on.a5E(bg.ach[16], 0, .31 * this.j), 0, 7 * aCo / 9), wm.fillText(bD.on.a5E(bg.ach[12], 0, .31 * this.j), 0, 8 * aCo / 9), wm
			.fillStyle = bE.pp, wm.fillText(bD.on.a5E(bg.ach[17], 0, .31 * this.j), 0, aCo), wm.fillStyle = bE.pY;
		var fu = bg.nJ,
			aGs = fu[8] + fu[9] + fu[10] + fu[18],
			aGs = bD.tB.a1S(aGs),
			aSK = wm.measureText(aGs).width,
			fZ = (wm.setTransform(1, 0, 0, 1, fZ + .83 * this.j + aSK, fb + 2 * acp + this.acq), wm.fillText(bD.tB.a1S(fu[8]), 0, 0), wm.fillText(bD.tB.a1S(fu[9]), 0, aCo / 9), wm.fillText(bD.tB.a1S(fu[10]), 0, 2 * aCo / 9), wm.fillText(bD.tB
				.a1S(fu[18]), 0, 3 * aCo / 9), wm.fillStyle = bE.pX, wm.fillText(aGs, 0, 4 * aCo / 9), wm.fillStyle = bE.pq, wm.fillText(bD.tB.a1S(fu[13]), 0, 5 * aCo / 9), wm.fillText(bD.tB.a1S(fu[15]), 0, 6 * aCo / 9), wm.fillText(bD.tB
				.a1S(fu[16]), 0, 7 * aCo / 9), wm.fillText(bD.tB.a1S(fu[12]), 0, 8 * aCo / 9), fu[12] + fu[13] + fu[15] + fu[16]);
		wm.fillStyle = bE.pp, wm.fillText(bD.tB.a1S(fZ), 0, aCo), wm.fillStyle = bE.pH
	}, this.a81 = function(h, a4Z, aBU) {
		var aC, e, gB;
		return this.act < 0 || 1 < this.act ? .25 : (aC = this.act * (bg.aV3 - 1), gB = h[e = Math.floor(aC)], gB += (aC - e) * (h[e < bg.aV3 - 1 ? e + 1 : e] - gB), wm.strokeStyle = bE.pK, .04 < this.act && this.ad3(0, this.aco - a4Z * Math.pow(
				gB, aBU), aC * this.acn / (bg.aV3 - 1), this.aco - a4Z * Math.pow(gB, aBU)), .04 < gB / bg.max[this.eI] && this.ad3(aC * this.acn / (bg.aV3 - 1), this.aco, aC * this.acn / (bg.aV3 - 1), this.aco - a4Z * Math.pow(gB, aBU)), wm
			.fillStyle = bE.ps, wm.beginPath(), wm.arc(aC * this.acn / (bg.aV3 - 1), this.aco - a4Z * Math.pow(gB, aBU), Math.max(2, .014 * this.k), 0, 2 * Math.PI), wm.fill(), h = this.act * bi.aDX, h = 0 === ah.nN[aE.fC] ? Math.floor(h * bg
				.acg) : Math.floor(h * bi.kk()), wm.fillStyle = bE.pH, wm.fillText(1 === aBU ? bD.tB.a6D(gB / 100, 2) : bD.tB.a1S(Math.floor(gB)), -this.uZ, this.aco - a4Z * Math.pow(gB, aBU)), bD.sD.textAlign(wm, 1), wm.fillText(aX.aDK(h),
				aC * this.acn / (bg.aV3 - 1), this.aco + this.acr - (a1.a2.ib() ? 2 : 0) - this.a9u), bD.sD.textAlign(wm, 2), a4Z * Math.pow(gB, aBU) / this.aco)
	}, this.ad3 = function(no, np, o1, o2) {
		wm.beginPath(), wm.moveTo(no, np), wm.lineTo(o1, o2), wm.stroke()
	}
}

function c2() {
	this.ad4 = "https://territorial.io/changelog", this.aV4 = "https://territorial.io/terms", this.aV5 = "https://territorial.io/privacy", this.ad5 = "https://territorial.io/tutorial", this.ad6 = "https://territorial.io/players", this.ad7 =
		"https://territorial.io/clans", this.ad8 = "https://territorial.io/clan-results", this.aRT = "https://patreon.com/c/territorial", this.aEp = "https://play.google.com/store/apps/details?id=territorial.io", this.a3G =
		"https://apps.apple.com/app/id1581110913", this.aEq = "https://discord.gg/pthqvpTXmh", this.aEr = "https://www.instagram.com/davidtschacher/", this.a10 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dE() {
	this.z = new ad9, this.a0I = new adA, this.dk = function() {
		this.z.dk()
	}, this.ee = function() {
		0 !== this.z.aXA && this.z.aXA--
	}
}

function adA() {
	this.wl = function() {
		if (0 !== bS.z.aXA && (wm.globalAlpha = Math.min(bS.z.aXA / 580, 1), wm.drawImage(bS.z.adD, 1 + aT.a0G(), 1 + aT.a0H()), wm.globalAlpha = 1, aE.hq)) {
			for (var no = j6 / ie, np = j7 / ie, o1 = (i.j + j6) / ie, o2 = (i.k + j7) / ie, h1 = bS.z.adE * ie, adF = bS.z.adF, aC = aE.kn - 1; 0 <= aC; aC--) ! function(aC, h1, no, np, o1, o2, adF) {
				var highlight;
				0 === ah.nN[aC] || 0 === ah.hG[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h1 *= 2), o1 = i.j * ((ah.jL[aC] + ah.jM[aC] + 1) / 2 - no) / (o1 - no) - .5 * h1, no = i.k * ((ah.jN[
					aC] + ah.jO[aC] + 1) / 2 - np) / (o2 - np) - .5 * h1, o1 > i.j) || no > i.k || o1 < -h1 || no < -h1 || (highlight ? wm.setTransform(2 * ie, 0, 0, 2 * ie, o1, no) : wm.setTransform(ie, 0, 0, ie, o1, no), wm.drawImage(
					adF[aE.iM ? bj.fQ[aC] : 1], 0, 0))
			}(aC, h1, no, np, o1, o2, adF);
			wm.setTransform(ie, 0, 0, ie, 0, 0)
		}
	}
}

function ad9() {
	this.adE = 28, this.aXA = 0, this.adD = null;
	var adH = this.adF = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function adL(iO, adM) {
		var fZ, fb, fE, ip, a50 = bD.sD.ya(iO, iO),
			iU = bD.sD.getContext(a50, !0),
			iR = bD.sD.getImageData(iU, iO, iO),
			yl = iR.data,
			li = (iO >> 1) - .5,
			adN = .5 + li;
		for (adN *= adN, fb = 0; fb < iO; fb++)
			for (fZ = 0; fZ < iO; fZ++) ip = (ip = fZ - li) * ip + (ip = fb - li) * ip, yl[fE = 4 * (fb * iO + fZ)] = adM[0], yl[1 + fE] = adM[1], yl[2 + fE] = adM[2], yl[3 + fE] = (adN - ip) * adM[3] / adN;
		return iU.putImageData(iR, 0, 0), a50
	}

	function acJ(aC, iU, a50, iO) {
		var highlight, fZ, fb;
		0 !== ah.nN[aC] && 0 !== ah.hG[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iO *= 2), fZ = ah.jL[aC] + ah.jM[aC] + 1 - iO - 2 >> 1, fb = ah.jN[aC] + ah.jO[aC] + 1 - iO - 2 >> 1, highlight ? iU
			.drawImage(a50[aE.iM ? 9 === aE.l5 && 5 === aF.iB[aC] ? 3 : bj.fQ[aC] : aC < aE.kn ? 1 : 0], fZ, fb, iO, iO) : iU.drawImage(a50[aE.iM ? 9 === aE.l5 && 5 === aF.iB[aC] ? 3 : bj.fQ[aC] : aC < aE.kn ? 1 : 0], fZ, fb))
	}
	this.dk = function() {
		var tl;
		this.aXA = 700,
			function(tl) {
				var iO = tl.adE;
				if (tl.adF = [], adH = [], aE.iM) {
					for (var aC = 0; aC <= aE.zN; aC++) tl.adF.push(adL(iO, bj.aad[bj.lA[aC]])), adH.push(adL(iO >> 1, bj.aad[bj.lA[aC]]));
					9 === aE.l5 && adH.push(adL(iO, bj.aad[1]))
				} else tl.adF.push(adL(iO, bj.aad[7])), tl.adF.push(adL(iO, bj.aad[4])), adH.push(adL(iO >> 1, bj.aad[7]))
			}(this),
			function(tl, adR) {
				var aC, adD = tl.adD,
					iU = bD.sD.getContext(adD, !0),
					fS = aE.fP,
					iO = tl.adE >> 1;
				iU.imageSmoothingEnabled = !1, iU.setTransform(1, 0, 0, 1, 0, 0), adR && iU.clearRect(0, 0, adD.width, adD.height);
				if (9 === aE.l5) {
					iO <<= 1;
					tl = b0.lE[5];
					for (aC = fS - tl; aC < fS; aC++) acJ(aC, iU, adH, iO);
					fS -= tl, iO >>= 1
				}
				for (aC = aE.kn; aC < fS; aC++) acJ(aC, iU, adH, iO)
			}(this, null !== (tl = this).adD && tl.adD.width === bV.fd - 2 && tl.adD.height === bV.fe - 2 || (tl.adD = bD.sD.ya(bV.fd - 2, bV.fe - 2), !1)), aE.hq || this.a6V()
	}, this.aae = adL, this.a6V = function() {
		for (var fS = aE.kn, iO = this.adE, adF = this.adF, iU = bD.sD.getContext(this.adD, !0), aC = 0; aC < fS; aC++) acJ(aC, iU, adF, iO)
	}
}

function dF() {
	function adU() {
		8 === aE.l5 && 1 === aE.a2B && bU.a1n.a2A()
	}

	function adT(player) {
		aE.hq ? (al.aJp(player), am.aNH(), aE.l7 && aE.rZ.ee()) : b4.aF9(player)
	}
	this.r1 = function(player) {
		aO.a2O(player, player === aE.fC ? 21 : 22), adT(player), adU()
	}, this.rW = function(player) {
		1 === aE.a2B && 0 !== ah.nN[player] && 2 !== ah.a5V[player] && adT(player), aE.a2E--, aE.a2D--, aO.a2O(player, 4), bD.go.hd(2) && aX.n9(!0), adU()
	}
}

function dP() {
	this.aXQ = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aCl = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pH, "rgb(170,170,170)"
	], this.adV = [bE.pH, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pH, bE.p8], this.adW = [bE.p8, bE.pH, bE.pH, bE.pH, bE.p8, bE.p8, bE.p8, bE.p8, bE.pH];
	var aNR = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aMk = ["rgba(" + aNR[0] + ",", "rgba(" + aNR[1] + ",", "rgba(" + aNR[2] + ",", "rgba(" + aNR[3] + ",", "rgba(" + aNR[4] + ",", "rgba(" + aNR[5] + ",", "rgba(" + aNR[6] + ",", "rgba(" + aNR[7] + ",", "rgba(" + aNR[8] + ",", "rgba(" + aNR[9] +
			","
		], this.aMl = ["rgb(" + aNR[0] + ")", "rgb(" + aNR[1] + ")", "rgb(" + aNR[2] + ")", "rgb(" + aNR[3] + ")", "rgb(" + aNR[4] + ")", "rgb(" + aNR[5] + ")", "rgb(" + aNR[6] + ")", "rgb(" + aNR[7] + ")", "rgb(" + aNR[8] + ")", "rgb(" + aNR[9] +
			")"
		], this.a2X = null, this.aad = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aSl = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lA = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fQ = new Uint8Array(aE.fP), this.aCm = new Uint8Array(aE.fP), this.zT = new Uint16Array(aE.fP), this.zU = new Uint16Array(this.lA.length + 1), this.zV = new Uint16Array(this.lA.length), this.dl =
		function() {
			this.a2X = [L(535), L(536), L(537), L(538), L(539), L(540), L(541), L(542), L(543)]
		}, this.dk = function() {
			if (this.fQ.fill(0), this.aCm.fill(0), this.adX(), aE.iM) {
				if (9 === aE.l5) {
					for (var fQ = bj.fQ, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fQ[aC] = 1;
					var fS = aE.fP;
					for (aC = aE.data.teamPlayerCount[7]; aC < fS; aC++) fQ[aC] = 2;
					bj.lA[1] = 7, bj.lA[2] = 8
				} else aE.l7 ? function() {
					var aSl = bj.aSl,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.kn - 1; 0 <= aC; aC--) colorsData[aC] = az.k4(262144);
					var adi = 0,
						fi = 768,
						aSk = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fV = 0, fm = 0; fm < 3; fm++) fV += Math.abs(aSl[aC][fm] - aSk[fm]);
							fV < fi && (adi = aC, fi = fV)
						} var adj = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) adj[aC] = teamPlayerCount[aC];
					var lA = bj.lA,
						adk = new Uint8Array(9),
						gv = (lA[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) adj[aC] && (adk[aC] = gv, lA[gv++] = aC);
					var k3 = aE.kn,
						fQ = bj.fQ;
					adj[adi] ? (adj[adi]--, fQ[0] = adk[adi]) : k3 = 0;
					var ej = 0;
					for (aC = k3; aC < aE.zG; aC++) {
						var iK = lA[ej];
						if (adj[iK]) adj[iK]--, fQ[aC] = adk[iK];
						else if (aC--, 9 <= ++ej) return console.log("error 325")
					}
				}() : this.ee();
				! function() {
					for (var fS = aE.fP, zT = bj.zT, zU = bj.zU, zV = bj.zV, fQ = bj.fQ, lA = bj.lA, zM = lA.length, buffer = new Array(zM), aC = 0; aC < zM; aC++) buffer[aC] = [];
					for (aC = 0; aC < fS; aC++) buffer[lA[fQ[aC]]].push(aC);
					for (aC = 1; aC <= zM; aC++) zU[aC] = zU[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < zM; aC++)
						for (var gv = buffer[aC].length, li = zU[aC], iK = 0; iK < gv; iK++) zT[iK + li] = buffer[aC][iK];
					var kn = aE.kn;
					for (aC = 0; aC < zM; aC++)
						for (gv = buffer[aC].length, li = zU[aC], iK = 0; iK < gv; iK++)
							if (zT[iK + li] >= kn) {
								zV[aC] = iK;
								break
							}
				}(), ! function() {
					for (var fS = aE.fP, fQ = bj.fQ, aCm = bj.aCm, lA = bj.lA, aC = 0; aC < fS; aC++) aCm[aC] = lA[fQ[aC]];
					9 === aE.l5 && aCm.fill(1, fS - b0.lE[5])
				}()
			}
		}, this.adX = function() {
			for (var aC = this.lA.length - 1; 0 <= aC; aC--) this.lA[aC] = aC
		}, this.ee = function() {
			var a1H = new Uint8Array(aE.kn),
				a1I = new Uint8Array(aE.kn),
				adc = new Uint16Array(8),
				add = new Uint16Array(this.lA.length);
			this.ade(a1H, a1I, adc, 1), this.aJK(adc), this.adf(add, a1H, a1I), this.adg(a1H, a1I, add), this.adh()
		}, this.ade = function(a1H, a1I, adj, adl) {
			for (var fm, e, adm, fS = this.lA.length - adl, h = new Uint16Array(fS), aSl = this.aSl, colorsData = aE.data.colorsData, aC = aE.kn - 1; 0 <= aC; aC--) {
				for (fm = fS; adl <= fm; fm--) h[fm - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aSl[fm][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aSl[fm][1]) + Math.abs(4 * (63 & colorsData[aC]) - aSl[fm][2]);
				for (adm = 768, fm = fS - 1; 0 <= fm; fm--) h[e = (fm + aC) % fS] < adm && (adm = h[e], a1H[aC] = e);
				for (adj[a1H[aC]] += 4, adm = 768, fm = fS - 1; 0 <= fm; fm--) h[e = (fm + aC) % fS] < adm && e !== a1H[aC] && (adm = h[e], a1I[aC] = e);
				adj[a1I[aC]]++
			}
		}, this.aJK = function(adj) {
			for (var fm, lk, fS = this.lA.length - 1, aC = fS; 0 <= aC; aC--) this.lA[aC] = aC;
			for (aC = fS - 1; 0 <= aC; aC--) adj[aC]++;
			for (aC = 1; aC <= fS; aC++) {
				for (lk = 0, fm = 1; fm < fS; fm++) adj[fm] > adj[lk] && (lk = fm);
				adj[lk] = 0, this.lA[aC] = lk + 1
			}
		}, this.adf = function(add, a1H, a1I) {
			var fm, a2t, ej, fV, e, o0, uq, adn = this.lA.length - 1,
				sg = new Uint16Array(adn),
				ado = [],
				adp = 0,
				a2s = [],
				adq = [];
			loop: for (var aC = 0; aC < aE.kn; aC++)
				if (null !== (a2t = bD.tB.a2u(ah.a2r[aC]))) {
					for (fm = a2s.length - 1; 0 <= fm; fm--)
						if (a2t === a2s[fm]) {
							adq[fm].push(aC), adp = Math.max(adp, adq[fm].length);
							continue loop
						} a2s.push(a2t), ado.push(!1), adq.push([aC]), adp = Math.max(adp, 1)
				}
			for (; 2 < aE.zN && adp > bO.ft(aE.kn, aE.zN);) aE.zN--, aE.l5--;
			for (fm = a2s.length - 1; 0 <= fm; fm--) {
				for (fV = -1, ej = a2s.length - 1; 0 <= ej; ej--) !ado[ej] && (-1 === fV || adq[ej].length > adq[fV].length) && (fV = ej);
				for (ej = adn - 1; 0 <= ej; ej--) sg[ej] = 1;
				for (ej = adq[fV].length - 1; 0 <= ej; ej--) sg[a1H[adq[fV][ej]]] += 3, sg[a1I[adq[fV][ej]]]++;
				for (aC = adn - 1; 0 <= aC; aC--) {
					for (e = fV % adn, ej = adn - 1; 0 <= ej; ej--) sg[ej] > sg[e] && (e = ej);
					for (o0 = -1, ej = aE.zN; 0 < ej; ej--)
						if (this.lA[ej] === e + 1) {
							o0 = ej;
							break
						} if (sg[e] = 0, -1 !== o0) {
						for (uq = 0, ej = aE.zN; 0 < ej; ej--) add[o0] > add[ej] && uq++;
						if (uq !== aE.zN - 1) {
							for (ej = adq[fV].length - 1; 0 <= ej; ej--) add[o0]++, this.fQ[adq[fV][ej]] = o0;
							break
						}
					}
				}
				ado[fV] = !0
			}
		}, this.adg = function(a1H, a1I, add) {
			for (var aC, io, fS = this.lA.length - 1, border = bO.ft(aE.kn, aE.zN), adr = (0 < aE.kn % aE.zN && border++, new Uint8Array(1 + fS)), fm = fS; 1 <= fm; fm--) adr[this.lA[fm]] = fm;
			for (aC = 0; aC < aE.kn; aC++) io = adr[a1H[aC] + 1], 0 === this.fQ[aC] && io <= aE.zN && add[io] < border && (add[io]++, this.fQ[aC] = io);
			for (aC = 0; aC < aE.kn; aC++) io = adr[a1I[aC] + 1], 0 === this.fQ[aC] && io <= aE.zN && add[io] < border && (add[io]++, this.fQ[aC] = io);
			for (fm = aE.zN; 1 <= fm; fm--)
				for (aC = aE.kn - 1; 0 <= aC && !(add[fm] >= border); aC--) 0 === this.fQ[aC] && (add[fm]++, this.fQ[aC] = fm)
		}, this.adh = function() {
			if (aE.zN < 8) aE.zN++, aE.l5++, aE.zO = 1;
			else
				for (var aC = aE.kn; aC < aE.fP; aC++) this.fQ[aC] = 1 + aC % aE.zN
		}
}

function dh() {
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
			for (var ads = !1, adt = !1, fV = 3; 0 <= fV; fV--) {
				var h0 = h8[player][aC] + fU[fV];
				if (ad.aJU(h0, player)) continue loop;
				ads = ads || ad.ii(h0), adt = adt || ad.aJT(h0)
			}
			ads ? h9[player].push(h8[player][aC]) : adt ? fr[player].push(h8[player][aC]) : ad.zp(h8[player][aC], player), h8[player][aC] = h8[player][fS - 1], h8[player].pop(), fS--
		}
	}, this.h6 = function() {
		ah.hG[gN] -= gO
	}, this.h7 = function(border) {
		for (var fS = border.length, aC = fS - 1; 0 <= aC; aC--) ad.a0A(gN, border[aC]) || (border[aC] = border[fS - 1], border.pop(), fS--)
	}, this.hA = function(border) {
		for (var fS = border.length, aC = fS - 1; 0 <= aC; aC--) !ad.a0A(gN, border[aC]) && ad.fN(border[aC]) && (border[aC] = border[fS - 1], border.pop(), fS--)
	}, this.hB = function(border) {
		for (var fV, h0, fS = border.length, fU = ad.fU, aC = fS - 1; 0 <= aC; aC--)
			for (fV = 3; 0 <= fV; fV--)
				if (h0 = border[aC] + fU[fV], ad.aJU(h0, gN)) {
					ah.h8[gN].push(border[aC]), border[aC] = border[fS - 1], border.pop(), fS--;
					break
				}
	}, this.hC = function() {
		for (var fV, h0, fU = ad.fU, aC = gO - 1; 0 <= aC; aC--)
			for (fV = 3; 0 <= fV; fV--) h0 = gQ[aC] + fU[fV], ad.a0D(gN, h0) && ad.aJa(h0) && (ah.h8[gN].push(h0), ad.gx(h0, gN))
	}, this.hD = function() {
		var fZ, fb;
		loop: for (; ah.jN[gN] < ah.jO[gN];) {
			for (fZ = ah.jM[gN]; fZ >= ah.jL[gN]; fZ--)
				if (ad.a0A(gN, 4 * (ah.jN[gN] * bV.fd + fZ))) break loop;
			ah.jN[gN]++
		}
		loop: for (; ah.jN[gN] < ah.jO[gN];) {
			for (fZ = ah.jM[gN]; fZ >= ah.jL[gN]; fZ--)
				if (ad.a0A(gN, 4 * (ah.jO[gN] * bV.fd + fZ))) break loop;
			ah.jO[gN]--
		}
		loop: for (; ah.jL[gN] < ah.jM[gN];) {
			for (fb = ah.jO[gN]; fb >= ah.jN[gN]; fb--)
				if (ad.a0A(gN, 4 * (fb * bV.fd + ah.jL[gN]))) break loop;
			ah.jL[gN]++
		}
		loop: for (; ah.jL[gN] < ah.jM[gN];) {
			for (fb = ah.jO[gN]; fb >= ah.jN[gN]; fb--)
				if (ad.a0A(gN, 4 * (fb * bV.fd + ah.jM[gN]))) break loop;
			ah.jM[gN]--
		}
	}, this.fL = function(player, jw) {
		return 0 === bj.fQ[player] || bj.fQ[player] !== bj.fQ[jw]
	}, this.hy = function(player) {
		for (var aC, h1, fS = ah.h8[player].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < fS; aC++)
				if (ad.fJ(ah.h8[player][aC] + h1)) return !0;
		return !1
	}, this.aJl = function(player) {
		for (var aC, h1, fS = ah.h8[player].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < fS; aC++)
				if (ad.jy(ah.h8[player][aC]) && ad.fJ(ah.h8[player][aC] + h1)) return !0;
		return !1
	}, this.i1 = function(a5b, a5c) {
		for (var aC, ea, h1, h0, abM = ah.h8[a5b].length, abN = ah.h8[a5c].length, fU = (abN < abM && (ea = a5b, a5b = a5c, a5c = ea, ea = abM, abM = abN, 0), ad.fU), fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < abM; aC++)
				if (h0 = ah.h8[a5b][aC] + h1, ad.h2(h0) && ad.fK(h0) === a5c) return !0;
		return !1
	}, this.aJm = function(a5b, a5c) {
		for (var aC, h1, h0, abM = ah.h8[a5b].length, fU = ad.fU, fV = 3; 0 <= fV; fV--)
			for (h1 = fU[fV], aC = 0; aC < abM; aC++)
				if (ad.jy(ah.h8[a5b][aC]) && (h0 = ah.h8[a5b][aC] + h1, ad.h2(h0)) && ad.fK(h0) === a5c) return !0;
		return !1
	}
}

function db() {
	this.ri = new adu
}

function adu() {
	this.i4 = function(player) {
		bD.go.a5W(player) && aO.a0d(80, L(544), 637, 0, bE.q6, bE.pE, -1, !1)
	}, this.i7 = function(player) {
		bD.go.a5W(player) && aO.a0d(80, L(545), 637, 0, bE.q6, bE.pE, -1, !1)
	}
}

function adv() {
	this.adw = 0, this.ee = function() {
		aP.ee(), aa.ee(), i.ee(), b1.z.ee(), ay.aIp(), bX.eS.ee(), bi.ds && (bi.ds = !1, ab.wl())
	}
}

function adx() {
	this.eZ = bi.eZ, this.eI = 0, this.adw = 0, this.aIn = 0, this.ady = null, this.adz = 7, this.ae0 = 0, this.dk = function() {
		this.aIn = 0, this.ady = [], this.eI = 0, this.adw = 0
	}, this.aWM = function(aD) {
		if (aE.hq) this.aDY(aD);
		else if (this.ady.push(aD), 2 === aE.a2B) {
			for (var aC = 0; aC < this.ady.length; aC++) bB.qb.ee(this.ady[aC]);
			this.ady = []
		}
	}, this.aDY = function(aD) {
		2 !== aE.a2B && (bB.qb.ee(aD), bC.ee(), aX.aDY(this.aIn), this.aIn === aE.a6b ? (aE.rZ.ee(), this.aIn = 0, this.eI = 0, this.adw = 0, this.eZ = bi.eZ) : (this.aIn++, ag.a6U(), ag.n9(!0), be.render()))
	}, this.ee = function() {
		i.ee(), aE.hq ? (bi.ds = aX.aDY(-1) || bi.ds, nB()) : (0 !== this.eI || bi.eZ >= this.eZ && (this.eZ += bi.aDX * Math.floor(1 + (bi.eZ - this.eZ) / bi.aDX), 2 === aE.a2B ? mz() : this.ae1(), this.eI++, 27 < bi.eZ - this.ae0)) && this
		.ae2(), n6(), bi.ds && (bi.ds = !1, a0E()), this.ae0 = bi.eZ
	}, this.ae2 = function() {
		bi.ds = !0, n8(), this.eI = 0
	}, this.ae1 = function() {
		var xZ, aC;
		if (this.adw !== 7 * this.aIn) n1(), be.render();
		else {
			xZ = !1;
			loop: for (; this.ae3() && (xZ = !0, n1(), 2 !== aE.a2B) && 0 < this.ady.length;)
				for (aC = this.adz - 2; 0 <= aC; aC--)
					if (n1(), 2 === aE.a2B) break loop;
			xZ ? be.render() : (mz(), be.a6X())
		}
	}, this.ae3 = function() {
		return 0 < this.ady.length && (this.aIn++, bB.qb.ee(this.ady[0]), this.ady.shift(), !0)
	}
}

function ae4() {
	var ae5, ae6, ae7, aIn, ae8, eI = 0,
		eZ = bi.eZ;

	function aeB() {
		! function() {
			if (!aE.hq) return;
			if (aE.l7) return;
			if (2 !== aE.a2B)
				if (ae8 % 7 != 0) ae8++;
				else if (aIn === aE.a6b) {
				if (!aeE()) return;
				aX.aDY(aIn), aE.rZ.ee()
			} else {
				if (!aeE()) return;
				ae8++, aIn++, ag.a6U(), ag.n9(!0)
			}
			return 1
		}() && aeE() && n1()
	}

	function aeC() {
		eI = 0, (aE.hq ? (bi.ds = aX.aDY(aIn - (ae8 % 7 == 0 ? 0 : 1) + ae8 % 7 / 7) || bi.ds, nB) : aN.hc || !bF.a6y ? nB : (bi.ds = !0, n8))()
	}

	function aeE() {
		var aC, fS, aeF = bC.rX.aXq,
			gB = bC.rX.aXr,
			gD = bC.rX.aXs,
			gF = bC.rX.aXt,
			aeG = bC.rX.aXu,
			aeH = bC.rX.aXv;
		if (!(ae5 >= aeH.length)) {
			if (aeH = aeH[ae5], aeG[ae5]) {
				for (fS = ae6 + aeH, aC = ae6; aC < fS; aC++) bB.qb.rM(aeF[aC], gB[aC], gD[aC], gF[aC]);
				ae6 += aeH, ae5++
			} else ++ae7 >= aeH && (ae5++, ae7 = 0);
			return __fx.replay.tick++, 1
		}
		aO.a3T("Replay file smaller than expected."), bF.a4J(!1), aE.a2B = 2
	}
	this.adw = 0, this.dk = function() {
		ae8 = aIn = ae7 = ae6 = ae5 = 0, __fx.replay.registerHooks({
			advance: () => aeB(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.ds = !0
			},
			isEnded: () => 2 === aE.a2B,
			getTickInterval: () => bi.aDX
		})
	}, this.ee = function() {
		var abm;
		i.ee(), __fx.replay.frame() ? mz() : bF.aAl() < 1.7 ? 0 === eI ? bi.eZ >= eZ && (abm = bi.aDX / bF.aAl(), eZ += abm * Math.floor(1 + (bi.eZ - eZ) / abm), 2 === aE.a2B || aN.hc || !bF.a6y ? mz() : (aeB(), be.render()), eI++) : aeC() :
			function() {
				var abm;
				if (bi.eZ >= eZ)
					if (2 === aE.a2B || aN.hc || !bF.a6y) mz(), eZ = bi.eZ;
					else {
						for (abm = bi.aDX / bF.aAl(), 16 < (bi.eZ - eZ) / abm && (eZ = bi.eZ - 16 * abm); bi.eZ >= eZ && 2 !== aE.a2B;) eZ += abm, aeB();
						be.render()
					} aeC()
			}(), n6(), bi.ds && (bi.ds = !1, a0E())
	}, this.a2M = function() {
		bC.rX.aXv.length - ae5 <= 2 || aO.a3T("Replay file larger than expected.")
	}
}

function aeI() {
	var eI = 0,
		eZ = bi.eZ;
	this.adw = 0, this.ee = function() {
		i.ee(), aE.hq ? nB() : 0 === eI ? bi.eZ >= eZ && (eZ += bi.aDX * Math.floor(1 + (bi.eZ - eZ) / bi.aDX), 2 === aE.a2B || aN.hc ? mz() : (n1(), be.render()), eI++) : ((aN.hc ? nB : (bi.ds = !0, n8))(), eI = 0), n6(), bi.ds && (bi.ds = !1,
			a0E())
	}
}

function dX() {
	this.a2L = null, this.ds = !1, this.eZ = 0, this.aDX = 56;
	var aeJ = 0;

	function aeK() {
		bi.eZ = aeJ = performance.now(), bi.a2L.ee(), window.requestAnimationFrame(aeK)
	}
	this.dk = function() {
		this.a6v(), window.requestAnimationFrame(aeK), this.eZ = performance.now()
	}, this.a6n = function() {
		aE.hb ? (this.a2L = new ae4, this.a2L.dk()) : aE.l7 ? this.a2L = new aeI : (this.a2L = new adx, this.a2L.dk())
	}, this.a6v = function() {
		this.a2L = new adv, this.ds = !0
	}, this.ee = function() {
		this.a2L.adw++
	}, this.kk = function() {
		return this.a2L.adw
	}, this.aW3 = function() {
		var ea = performance.now();
		ea < aeJ + 1e3 || (this.eZ = ea, this.a2L.ee())
	}
}

function cx() {
	var aIA = 0,
		aeL = !0;

	function aeM(id) {
		id = [L(546), L(547), L(548), L(549)][id];
		aO.a8k(id)
	}
	this.ee = function() {
		var ea, a99;
		bi.eZ < aIA || (aIA = bi.eZ + 3e3, aE.hb) || aE.l7 || bD.go.he(aE.fC) || (ea = new Date, a99 = ea.getUTCSeconds(), aeL ? a99 < 43 && (aeL = !1) : a99 < 43 || (aIA += 52e3, aeL = !0, (a99 = (ea.getUTCMinutes() + 2) % 60) % 10 == 0 ? aE
			.l5 < 7 && aeM(0) : a99 % 10 == 5 ? 7 !== aE.l5 && 10 !== aE.l5 || aeM(1) : a99 % 10 == 7 ? 8 === aE.l5 && aeM(2) : a99 % 10 == 2 && 9 === aE.l5 && aeM(3)))
	}
}

function cr() {
	var no, np, o1, o2, aeN = 0,
		aeO = 0;

	function aeQ() {
		return Math.pow(Math.pow(o1 - no, 2) + Math.pow(o2 - np, 2), .5)
	}

	function aeP(e) {
		no = i.l * e.touches[0].clientX, np = i.l * e.touches[0].clientY, o1 = i.l * e.touches[1].clientX, o2 = i.l * e.touches[1].clientY
	}
	this.a3l = function(e) {
		return 1 < e.touches.length ? (aeO = bi.eZ, aeN = 3, aeP(e), aM.tS(), !0) : (aeN = 0, !1)
	}, this.a3m = function(e) {
		var aKg, il, im;
		return 0 !== aE.a2B && 1 < e.touches.length && (aeN = Math.max(aeN - 1, 0), aI.o6() && (aKg = aeQ(), aeP(e), e = aeQ(), il = Math.floor((no + o1) / 2), im = Math.floor((np + o2) / 2), aT.aBC(il, im, Math.max(.125, e) / Math.max(.125,
			aKg)), bi.ds = !0), !0)
	}, this.a49 = function() {
		var fZ, fb;
		return !!(aeN && (aeN = 0, bi.eZ < aeO + 500)) && (fZ = (no + o1) / 2, fb = (np + o2) / 2, aM.a43(fZ, fb), aM.click(fZ, fb, !0) && (bi.ds = !0), !0)
	}
}

function d8() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.vr = function() {
		this.aD = null
	}, this.rL = function(size) {
		for (var fu = 0, aD = this.aD, o6 = this.eI + size - 1, aC = this.eI; aC <= o6; aC++) fu |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << o6 - aC;
		return this.eI += size, this.eI > 8 * this.size && console.error("Unwrapper Overflow"), fu
	}, this.aWU = function(size) {
		var fm = size >> 1;
		return (1 << fm) * this.rL(size - fm) + this.rL(fm)
	}, this.aWV = function(aeR) {
		return this.size === bG.aWT(aeR)
	}, this.aY8 = function(z2, aeS, aeT) {
		var gv = this.rL(z2);
		if (!gv) return null;
		for (var z2 = Math.max(gv, aeT), h = new(aeS <= 8 ? Uint8Array : aeS <= 16 ? Uint16Array : Uint32Array)(z2), aC = 0; aC < gv; aC++) h[aC] = this.rL(aeS);
		aeT = h[gv - 1];
		return aeT && h.fill(aeT, gv), h
	}, this.aY9 = function(z2, aeU, aeT) {
		var gv = this.rL(z2);
		if (!gv) return null;
		for (var z2 = Math.max(gv, aeT), h = new Array(z2), aC = 0; aC < gv; aC++) h[aC] = this.aY6(aeU);
		return h.fill(h[gv - 1], gv), h
	}, this.aY6 = function(z2) {
		return bJ.y9.yD(this.rL(z2))
	}, this.aY7 = function() {
		var ru = bI.uV.uW(bI.uV.uX(this.rL(30))),
			ru = bD.tB.a6P(ru, "_", "/");
		ru = bD.tB.a6P(ru, "-", "+");
		for (var aeV = "";
			(ru.length + aeV.length) % 4;) aeV += "=";
		ru = "data:image/png;base64," + ru + aeV;
		var aKI = new Image;
		aKI.onload = function() {
			bC.aLF.aLG(aKI), aKI.onload = null, aKI = null
		}, aKI.src = ru
	}
}

function dR() {
	this.aZA = 0, this.aZB = 0, this.aZ6 = 0, this.aZ7 = 0, this.aZ8 = 0, this.aZ9 = 0, this.aE8 = [0, 0, 0, 0], this.o5 = function() {
		this.aZA = aT.a0G(), this.aZB = aT.a0H(), this.aZ6 = -this.aZA, this.aZ7 = -this.aZB, this.aZ8 = i.j / ie, this.aZ9 = i.k / ie, this.aE8[0] = Math.floor(this.aZ6), this.aE8[1] = Math.floor(this.aZ7), this.aE8[2] = Math.floor(this.aE8[0] +
			this.aZ8 + 1), this.aE8[3] = Math.floor(this.aE8[1] + this.aZ9 + 1), be.aE6 = !0
	}
}

function cs() {
	var a9q, na;
	this.dk = function() {
		a9q = 1, na = 0
	}, this.ee = function() {
		0 < a9q && (na = 0 === na ? bi.eZ + 16 : na, a9q = (a9q -= .001 * (bi.eZ - na)) < 0 ? 0 : a9q, na = bi.eZ, bi.ds = !0)
	}, this.wl = function() {
		0 < a9q && (wm.fillStyle = "rgba(0,0,0," + a9q + ")", wm.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(aeR) {
		return this.dk(new Uint8Array(this.aWT(aeR))), this.aD
	}, this.vr = function() {
		this.aD = null
	}, this.a9 = function(size, a9E) {
		for (var aD = this.aD, o6 = this.eI + size - 1, aC = this.eI; aC <= o6; aC++) aD[aC >> 3] |= (a9E >> o6 - aC & 1) << 7 - (7 & aC);
		this.eI += size, this.eI > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aWS = function(size, a9E) {
		var fm = size >> 1,
			fV = 1 << fm;
		this.a9(size - fm, bO.ft(a9E, fV)), this.a9(fm, a9E % fV)
	}, this.aeY = function(size) {
		for (var aD = this.aD, o6 = this.eI + size, aC = this.eI; aC < o6; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aWT = function(aeR) {
		return aeR + 7 >> 3
	}, this.aeZ = function(h, k3, o6, aea) {
		for (var aC = k3; aC < o6; aC++) this.a9(aea, h[aC])
	}
}

function d7() {
	this.dk = function() {
		this.h = [], this.eI = 0
	}, this.aWr = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(aeb, value) {
		for (var h = this.h, o6 = this.eI + aeb - 1, aec = 1 + (o6 >> 3); h.length < aec;) h.push(0);
		for (var aC = this.eI; aC <= o6; aC++) h[aC >> 3] |= (value >> o6 - aC & 1) << 7 - (7 & aC);
		this.eI += aeb
	}, this.dr = function(h, z2, aeS) {
		var aed = bD.sL.a4u(h);
		this.a9(z2, aed);
		for (var aC = 0; aC < aed; aC++) this.a9(aeS, h[aC])
	}, this.aYQ = function(h, z2, aeU) {
		var aed = bD.sL.a4u(h);
		this.a9(z2, aed);
		for (var aC = 0; aC < aed; aC++) this.aYO(h[aC], aeU)
	}, this.aYO = function(ru, z2) {
		var fS = ru.length;
		this.a9(z2, fS);
		for (var aC = 0; aC < fS; aC++) this.a9(16, ru.charCodeAt(aC))
	}, this.aYP = function(a50) {
		var aee = (a50 = a50.toDataURL()).split(",");
		if (aee.length < 2) console.log("error 266");
		else {
			a50 = bD.tB.a6P(a50 = aee[aee.length - 1], "/", "_"), a50 = bD.tB.a6P(a50, "\\+", "-");
			var a50 = bD.tB.a6P(a50, "=", ""),
				yM = bJ.uV.yJ(a50),
				fS = yM.length;
			this.a9(30, fS);
			for (var aC = 0; aC < fS; aC++) this.a9(6, yM[aC])
		}
	}
}
a(), self.aiCommand746 = function(fu) {
	0 === fu ? bx() : 1 !== fu || !a1 || 1 !== a1.id || a1.e3 < 14 || bM.fv()
}, setTimeout(bx, 1e4), window.onload = function() {
	bx()
};