var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, gH, gI, gJ, gK, gL, gM, gN, gO, gP, gQ, gR, gS, gT, ic,
	j5, j6, a9K, mN, kX, a2t, vw, zU, aDP, a64, a65, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "1em", "span", "0.5em", "email", "Data",
		" / ", "territorial.io", "pre", "password", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==",
		"click", "undefined", "middle", "break-word", "50%", "0.6em", "underline", "text", "scroll", "pointer", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange",
		"number", "nowrap", "mouseleave", "inline-block", "game.territorial.io", "focus", "fixed", "blur", "Space", "Redacted ", "Player ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "🔄 Reload", "⚠️ ", "wheel", "translate(-50%, -50%)", "top", "tls7", "system-ui", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank",
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
	this.du = 1759;
	this.rVersion = 25, this.dy = 0, this.di = function() {
		this.dz = 2;
		this.o = "2.16.40", this.e1 = "21 Aug 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e2 = 0 <= this.hostname.indexOf("github.io"), this.e3 =
			0 <= this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.e5 = (new Date).getTime() % 1048576, console.log("[" + this.hostname + "] " + this.aA + " " + this.e2 + " " + this.e3)
	}, this.n = 0
}

function e6() {
	var e7 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e8 = [100, 60, 30, 15, 6, 1],
		e9 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eA = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eC = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eD = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.eE = function(id, eF, eG) {
		eF = this.eH(eF);
		return +(e9[eF][id] > eG)
	}, this.eH = function(eF) {
		for (var aC = 0; aC < e8.length; aC++)
			if (e8[aC] <= eF) return aC;
		return e8.length
	}, this.eI = function(eF) {
		return e7[this.eH(eF)]
	}, this.eJ = function(id, eK) {
		return eA[id].replace(new RegExp("x", "g"), eK)
	}, this.eL = function(id, eK) {
		return eC[id].replace(new RegExp("x", "g"), eK)
	}, this.eM = function(id, eN) {
		return this.eD[5][id]
	}
}

function dJ() {
	this.eO = new eP, this.eQ = new eR, this.turnstile = new eS, this.di = function() {
		a1.a2.eT(), this.turnstile.di()
	}, this.eU = function() {
		return bm.eV.data[160].value
	}
}

function eP() {
	var eW = 12e3;
	this.show = function(eX) {
		return !eX && !bX.eU() && (0 === a1.id ? bX.eQ.show() : !(bi.eY < eW) && (eX = 1 === a1.id ? 72e4 : 108e4, eW = bi.eY + eX, 2 === m.dz) && a1.a2.ea(Math.floor(eX)))
	}
}

function eR() {
	var eb = null,
		eW = 2e4,
		ec = 0;
	this.ed = function() {
		bi.eY < eW || (eW = bi.eY + 1e4, 0 !== a1.id) || eb || bX.eU() || (b1.z.ee(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.ef.eg(5) : eW = bi.eY + 1e3)
	}, this.eh = function(ei) {
		eb = ei
	}, this.show = function() {
		return !(!eb || bi.eY < ec) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ec = bi.eY + 6e4, (new ej).show(eb.ek, eb.colors, eb.id), !(eb = null)))
	}
}

function eS() {
	var en, el = null,
		em = 0,
		eo = "",
		ep = 0,
		er = (this.eq = 0, null);

	function ex() {
		null !== er && null !== el && (em = 0, window.turnstile.remove(el), er.remove(), el = er = null)
	}

	function eu(f1) {
		return "" !== eo && ep + 1e3 * (300 - f1) > performance.now()
	}
	this.di = function() {
		var es;
		m.dy || !m.aA && !m.e2 ? (console.log("turnstile cannot be loaded"), this.eq = -1) : ((es = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", es.async = !0, es.onload =
			function() {
				bX.turnstile.eq = 1, console.log("turnstile onload"), bX.turnstile.et()
			}, es.onerror = function() {
				bX.turnstile.eq = -1, console.log("turnstile onerror")
			}, document.head.appendChild(es))
	}, this.et = function() {
		return !(1 !== this.eq || (window.turnstile ? em ? (console.log("turnstile error 246"), 1) : eu(30) || (eo = "", em = 1, en = performance.now(), (er = document.createElement("div")).style.position = "fixed", er.style.left = "0", er.style
			.top = "0", er.style.zIndex = "100", document.body.appendChild(er), console.log("turnstile render"), el = window.turnstile.render(er, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(ev) {
					console.log("turnstile success " + Math.floor(performance.now() - en)), eo = ev, ep = performance.now(), bX.turnstile.ew(), ex()
				},
				"expired-callback": function() {
					ex(), console.log("turnstile expired " + Math.floor(performance.now() - en))
				},
				"error-callback": function() {
					ex(), console.log("turnstile callback error " + Math.floor(performance.now() - en)), bX.turnstile.eq = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.ew = function() {
		eu(8) && bq.ey && b1.z.ee(b1.z.ez) && (console.log("sendTokenToLobby success"), b1.ef.f0(eo), eo = "")
	}
}

function ca() {
	this.f2 = new f3
}

function f3() {
	this.f4 = function(f5) {
		var f8;
		return bV.f6(bV.f7) && aE.data.passableMountains && (f8 = ad.f9(f5), this.fA(aE.fB, f8) || this.fC(aE.fB, f8)) && 0 !== (f8 = function(fX) {
			for (var fY = bP.fZ(fX), fa = bP.fb(fX), max = Math.max(bV.fc, bV.fd) - 2, fe = max * max, ff = !1, fg = 0, fh = 0; fh < max; fh++) {
				var fi, fD = function(fY, fa, fh) {
					for (var aC = 0; aC <= fh; aC++)
						for (var fk = -1; fk < 2; fk += 2)
							for (var fl = -1; fl < 2; fl += 2)
								for (var ei = 0; ei < 2; ei++) {
									var f5 = function(fY, fa) {
										if (bP.fn(fY, fa)) {
											fY = bP.fo(fY, fa), fa = bP.fH(fY);
											if (ad.fM(fa) && ad.fp(fa)) return fY
										}
										return 0
									}(fY + ei * fk * aC + (1 - ei) * fl * fh, fa + ei * fl * fh + (1 - ei) * fk * aC);
									if (f5) return f5
								}
					return 0
				}(fY, fa, fh);
				fD && (fi = bP.fj(fY, fa, fD)) < fe && (fg = fD, fe = fi, ff || (ff = !0, max = Math.floor(Math.sqrt(fi)) + 1))
			}
			return fg
		}(bP.fF(f5))) && (f5 = bP.fH(f8), ad.fI(f5) || (f5 = ad.fJ(f5)) !== aE.fB && bv.fK(f5, aE.fB)) ? f8 : 0
	}, this.fL = function(player, fD) {
		fD = bP.fH(fD);
		if (ad.fM(fD)) {
			if (ad.fI(fD)) bR.fN[0] = aE.fO;
			else if (ad.fJ(fD) !== bR.fN[0]) return !1;
			for (var fP = function(f5) {
					var fT = ad.fT,
						fP = [];
					loop: for (var fU = 3; 0 <= fU; fU--) {
						var fV = f5 + fT[fU];
						if (ad.fW(fV)) {
							for (var id = ad.f9(fV), aC = 0; aC < fP.length; aC++)
								if (id === fP[aC]) continue loop;
							bR.fS[fP.length] = fV, fP.push(id)
						}
					}
					return fP
				}(fD), fR = fP.length, aC = 0; aC < fR; aC++)
				if (this.fA(player, fP[aC]) || this.fC(player, fP[aC])) return bR.fS[0] = bR.fS[aC], !0
		}
		return !1
	}, this.fA = function(player, f8) {
		for (var fq = ah.fq[player], fR = fq.length, fr = Math.max(bO.fs(fR, 12), 1), fT = ad.fT, aC = 0; aC < fR; aC += fr)
			for (var fG = fq[aC], fU = 3; 0 <= fU; fU--) {
				var fV = fG + fT[fU];
				if (ad.fW(fV) && f8 === ad.f9(fV)) return !0
			}
		return !1
	}, this.fC = function(player, f8) {
		for (var fq = ah.fq[player], fR = fq.length, fT = ad.fT, aC = 0; aC < fR; aC++)
			for (var fG = fq[aC], fU = 3; 0 <= fU; fU--) {
				var fV = fG + fT[fU];
				if (ad.fW(fV) && f8 === ad.f9(fV)) return !0
			}
		return !1
	}
}

function dC() {
	this.h = new Array(4), this.fv = new Uint16Array(2), this.fw = new Uint16Array(2), this.fx = new Int32Array(2), this.fy = new Uint32Array(2), this.fz = new Uint32Array(2), this.g0 = new Uint8Array(4), this.g1 = new Uint8Array(4), this.fS =
		new Uint32Array(4), this.g2 = new Uint32Array(5), this.fN = new Uint32Array(8), this.g3 = new Uint32Array(8), this.g4 = new Uint16Array(16), this.g5 = new Uint16Array(512), this.g6 = new Uint16Array(512), this.g7 = new Uint16Array(512), this
		.g8 = new Uint16Array(0), this.di = function() {
			var fR = bV.fc * bV.fd;
			this.g8.length !== fR && (this.g8 = new Uint16Array(fR))
		}, this.g9 = function(h, gA) {
			return h[0] = gA, h
		}, this.gB = function(h, gA, gC) {
			return h[0] = gA, h[1] = gC, h
		}, this.gD = function(h, gA, gC, gE) {
			return h[0] = gA, h[1] = gC, h[2] = gE, h
		}, this.gF = function(h, gA, gC, gE, gG) {
			return h[0] = gA, h[1] = gC, h[2] = gE, h[3] = gG, h
		}
}

function gU() {
	gN = 0, gO = 2048, gP = new Uint32Array(4 * gO), gQ = 0, gR = new Uint32Array(gO), gS = new Uint8Array(bV.fc * bV.fd)
}

function gV(player) {
	gI = player, gT = !1, gW(), gX();
	for (var aC = ae.gY(gI) - 1; 0 <= aC; aC--) gH = aC, gZ();
	gT && ga()
}

function ga() {
	bv.gb(), bv.gc()
}

function gZ() {
	gM = ae.gd(gI, gH), gJ = ae.ge(gI, gH), gK = ae.gf(gI, gH), gg(), (0 !== gN && (gi(), gj()) ? gk : gh)()
}

function gj() {
	if (!((gL = bO.fs(gJ, gN)) > aE.gl)) {
		if (!gK) return !1;
		var gm = gN * (1 + aE.gl);
		gJ += bD.gn.go(gI, gm - gJ), gL = bO.fs(gJ, gN)
	}
	return !0
}

function gi() {
	for (var aC = gN - 1; 0 <= aC; aC--) gS[bO.fs(gP[aC], 4)] = 0
}

function gh() {
	1 === ae.gY(gI) && aG.gp(gI);
	var eZ = bD.gn.gq(gI, gJ);
	bg.gr(gI, gJ - eZ, 12), ae.gs(gI, gH)
}

function gW() {
	for (var player = gI, gt = ah.gt, fR = Math.min(gt[player].length, gO), gu = 0, gv = gR, aC = fR - 1; 0 <= aC; aC--) gv[gu++] = gt[player][aC];
	gQ = gu
}

function gX() {
	for (var aC = ah.gt[gI].length - 1; 0 <= aC; aC--) ad.fM(ah.gt[gI][aC]) && ad.gw(ah.gt[gI][aC], gI);
	ah.gt[gI] = []
}

function gg() {
	gN = 0, (gM === aE.fO ? gx : gy)()
}

function gy() {
	for (var gz, h0, aC, fT = ad.fT, fU = 3; 0 <= fU; fU--)
		for (aC = gQ - 1; 0 <= aC; aC--) gz = gR[aC] + fT[fU], h0 = bO.fs(gz, 4), 0 === gS[h0] && ad.h1(gz) && ad.fJ(gz) === gM && (gS[h0] = 1, gP[gN++] = gz)
}

function gx() {
	for (var gz, h0, aC, fT = ad.fT, fU = 3; 0 <= fU; fU--)
		for (aC = gQ - 1; 0 <= aC; aC--) gz = gR[aC] + fT[fU], h0 = bO.fs(gz, 4), 0 === gS[h0] && ad.fI(gz) && (gS[h0] = 1, gP[gN++] = gz)
}

function gk() {
	h2() ? (h3(), gM !== aE.fO && h4()) : gh()
}

function h4() {
	bv.h5(), bv.h6(ah.h7[gM]), bv.h6(ah.h8[gM]), bV.f6(bV.f7) && bv.h6(ah.fq[gM]), bv.h9(ah.gt[gM]), bv.hA(ah.h8[gM]), bv.hA(ah.fq[gM]), bv.hB(), bv.hC()
}

function h3() {
	gT = !0, ae.hD(gI, gH, gJ), ae.hE(gI, gH), ah.hF[gI] += gN, bv.hG(), hH()
}

function h2() {
	return (gM === aE.fO ? hI : hJ)()
}

function hJ() {
	var hK = gN * aE.gl,
		hL = hM(),
		hN = hO(),
		hL = hK + 2 * hL + hN,
		hQ = gL * gN;
	return hL < hQ ? (gJ -= hL, bg.gr(gI, hL, 13), hR(hL - hK, hN), !0) : gK && 0 === hN ? (gJ -= hQ, hQ += bD.gn.go(gI, hL - hQ + 1), bg.gr(gI, hQ, 13), hR(hQ - hK, 0), !0) : (gJ -= hQ, bg.gr(gI, hQ, 13), hR(hQ - hK, hN), !1)
}

function hR(hQ, hN) {
	if (0 < hN) {
		if (hQ <= hN) return bg.gr(gM, hQ, 13), void ae.hS(gM, gI, hN - hQ);
		ae.hS(gM, gI, 0), hQ -= hN
	}
	hQ = bO.fs(hQ, 2), hQ = Math.min(ah.hT[gM], hQ), bg.gr(gM, hQ, 13), ah.hT[gM] -= hQ
}

function hO() {
	return ae.hU(gM, gI)
}

function hM() {
	return bO.fs(gN * ah.hT[gM], 1 + bO.fs(10 * ah.hF[gM], 16))
}

function hI() {
	var hV = gN * aE.gl;
	return gJ -= hV, bg.gr(gI, hV, 13), !0
}

function hH() {
	for (var aC = gN - 1; 0 <= aC; aC--) ah.gt[gI].push(gP[aC]), ah.h7[gI].push(gP[aC]), ad.gw(gP[aC], gI)
}

function dH() {
	var hW = 0,
		hX = 0;
	this.hY = function(fY, fa) {
		hW = fY, hX = fa
	}, this.hZ = function(code) {
		var hg, hi, fD;
		aE.ha || aN.hb || (bD.gn.hc(0) || bD.gn.hc(1)) && bD.gn.hd(aE.fB) && (aS.he(hW, hX) ? aS.hf = !1 : aQ.he(hW, hX) || (hg = bP.hh(hW), hi = bP.hj(hX), fD = bP.fo(hg, hi), bP.hk(hg, hi) && (0 === code ? function(fD) {
			var ho, f5, fG;
			aE.hp ? -1 !== (ho = bu.hq(fD)) && bB.hr.hs(fD) : (f5 = bP.fH(fD), ad.fW(f5) ? (ho = an.f2.f4(f5)) && (fG = bP.fH(ho), fG = ad.fI(fG) ? aE.fO : ad.fJ(fG), bB.hr.hu(aS.hv(), ho, fG)) : (ho = bu.hw(fD)) < 0 || (f5 = bP
				.fH(ho), ad.fI(f5) ? bv.hx(aE.fB) ? bB.hr.hy(aS.hv(), aE.fO) : ae.gY(aE.fB) && b2.hz(aE.fO, aS.hv()) : (fG = ad.fJ(f5), bv.fK(fG, aE.fB) && (bv.i0(aE.fB, fG) ? bB.hr.hy(aS.hv(), fG) : ae.gY(aE.fB) && b2.hz(
					fG, aS.hv())))))
		}(fD) : 1 === code ? function(fD) {
			bQ.i1.i2(aE.fB, fD) && bB.hr.i3(aS.hv(), bR.g3[7])
		}(fD) : 2 === code && function(fD) {
			bQ.i4.i5(aE.fB, fD) && bB.hr.i6(aS.hv())
		}(fD))))
	}, this.i7 = function() {
		if (!aE.ha && !aN.hb && bD.gn.hc(1)) {
			var gz = aE.fB;
			if (bD.gn.hd(gz)) {
				var fR = ae.gY(gz);
				if (fR < 1) ! function() {
					var gz = aE.fB;
					if (bv.hx(gz)) bB.hr.hy(aS.hv(), aE.fO);
					else
						for (var fT = ad.fT, h7 = ah.h7, fR = h7[gz].length, iH = Math.floor(Math.random() * fR), aC = 0; aC < fR; aC++)
							for (var iI = 3; 0 <= iI; iI--) {
								var iJ = h7[gz][(aC + iH) % fR] + fT[iI];
								if (ad.h1(iJ)) {
									iJ = ad.fJ(iJ);
									if (iJ !== gz && (!aE.iL || bv.fK(gz, iJ))) return bB.hr.hy(aS.hv(), iJ)
								}
							}
				}();
				else {
					for (var i9 = 0, iA = ae.ge(gz, 0), aC = 1; aC < fR; aC++) {
						var iB = ae.ge(gz, aC);
						iB < iA && (iA = iB, i9 = aC)
					}
					bB.hr.hy(aS.hv(), ae.gd(gz, i9))
				}
			}
		}
	}, this.iC = function() {
		if (!aE.ha && !aN.hb && bD.gn.hd(aE.fB) && bD.gn.hc(1)) return ax.iD ? ax.iE(aE.fB) ? void bB.hr.iF(1) : void 0 : void(ax.iG(aE.fB) && bB.hr.iC())
	}
}

function iM(iN, size, iO, iP, font) {
	var aC, iS = .2,
		canvas = document.createElement("canvas"),
		iT = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iN, canvas.height = iN, iT.font = size + font, iT.textAlign = "center", iT.textBaseline = "middle", iT.fillStyle = "red", aC = 0; aC < iO.length; aC++) iT.fillText(iO[aC], .5 * iN, .5 * iN);
	return -1 < (canvas = function(iQ) {
		var aC, eF, fU = iQ.data;
		for (aC = fU.length - 4; 0 <= aC; aC -= 4)
			if (eF = fU[aC], iP <= eF) return Math.floor(aC / (4 * iN));
		return -1
	}(iT.getImageData(0, 0, iN, iN))) && (iS = (canvas - .5 * iN + .1 * size) / size), Math.max(iS, 0)
}

function dA() {
	this.iV = new Int16Array(4), this.iW = new Int16Array(4), this.iX = null, this.di = function() {
		var aC;
		for (this.iV[0] = -bV.fc, this.iV[1] = 1, this.iV[2] = bV.fc, this.iV[3] = -1, this.iX = new Int16Array([-bV.fc, 1 - bV.fc, 1, bV.fc + 1, bV.fc, bV.fc - 1, -1, -bV.fc - 1]), aC = 0; aC < 4; aC++) this.iW[aC] = 4 * this.iV[aC]
	}, this.iY = function() {
		return bO.iZ(Math.floor(.15 * (1 + .25 * a1.a2.ia()) * i.ib / ic), 4, 128)
	}, this.ie = function(f5, id) {
		for (var ig = this.iW, aC = 0; aC < 4; aC++) {
			var fG = f5 + ig[aC];
			if (ad.ih(fG) && ad.f9(fG) === id) return !0
		}
		return !1
	}, this.ii = function(player, f5) {
		return !ad.fI(f5) && player === ad.fJ(f5)
	}, this.fj = function(hg, hi, fD) {
		return (hg -= this.fZ(fD)) * hg + (hi -= this.fb(fD)) * hi
	}, this.ij = function(ik, il, im) {
		ik = this.ip(ik) - this.iq(im), il = this.is(il) - this.it(im);
		return Math.sqrt(ik * ik + il * il)
	}, this.iu = function(iv, iw) {
		var io = this.fZ(iv) - this.fZ(iw),
			iv = this.fb(iv) - this.fb(iw);
		return ~~Math.sqrt(io * io + iv * iv + .5)
	}, this.ix = function(iv, iw) {
		var io = this.fZ(iv) - this.fZ(iw),
			iv = this.fb(iv) - this.fb(iw);
		return io * io + iv * iv
	}, this.iy = function(iz, j0, j1, j2) {
		return (iz -= j1) * iz + (j0 -= j2) * j0
	}, this.j3 = function(gz, j4) {
		return bO.fs(j4 * ah.hT[gz], 1e3)
	}, this.ip = function(ik) {
		return 16 * (ik + j5) / ic
	}, this.is = function(il) {
		return 16 * (il + j6) / ic
	}, this.j7 = function(fU) {
		return 16 * fU / ic
	}, this.hh = function(ik) {
		return Math.floor((ik + j5) / ic)
	}, this.hj = function(il) {
		return Math.floor((il + j6) / ic)
	}, this.hk = function(hg, hi) {
		return 1 <= hg && 1 <= hi && hg < bV.fc - 1 && hi < bV.fd - 1
	}, this.fZ = function(fD) {
		return fD % bV.fc
	}, this.fb = function(fD) {
		return bO.fs(fD, bV.fc)
	}, this.fo = function(hg, hi) {
		return hi * bV.fc + hg
	}, this.j8 = function(hg, hi) {
		return 4 * this.fo(hg, hi)
	}, this.j9 = function(fD) {
		return this.fn(this.fZ(fD), this.fb(fD))
	}, this.fn = function(hg, hi) {
		return 0 < hg && hg < bV.fc - 1 && 0 < hi && hi < bV.fd - 1
	}, this.fH = function(fD) {
		return fD << 2
	}, this.fF = function(f5) {
		return f5 >> 2
	}, this.jA = function(fD) {
		return bV.fc * this.fb(fD) * 256 + (this.fZ(fD) << 4)
	}, this.jB = function(fD) {
		return this.jA(fD) + 8 + (bV.fc << 7)
	}, this.jC = function(im) {
		return bV.fc * (this.it(im) >> 4) + (this.iq(im) >> 4)
	}, this.jD = function(im) {
		im = this.jC(im);
		return (this.fZ(im) >> 5) + bQ.jE.jF * (this.fb(im) >> 5)
	}, this.iq = function(im) {
		return im % (bV.fc << 4)
	}, this.it = function(im) {
		return bO.fs(im, bV.fc << 4)
	}, this.jG = function(fD, iI) {
		return fD + this.iV[iI]
	}, this.jH = function(f5, iI) {
		return f5 + this.iW[iI]
	}, this.jI = function(iv, iw) {
		var io = this.fZ(iw) - this.fZ(iv),
			iw = this.fb(iw) - this.fb(iv);
		return Math.abs(io) >= Math.abs(iw) ? 1 + 2 * (io < 0) : 2 * (0 < iw)
	}, this.jJ = function(player) {
		return this.fo(ah.jK[player] + ah.jL[player] >> 1, ah.jM[player] + ah.jN[player] >> 1)
	}, this.jO = function(player) {
		return this.fo(az.jP(ah.jK[player], ah.jL[player]), az.jP(ah.jM[player], ah.jN[player]))
	}
}

function co() {
	this.jQ = new jR, this.jS = new jT, this.jU = new jV, this.performance = new jW, this.jX = new jY, this.jZ = new ja, this.jb = new jc, this.jd = new je, this.jf = new jg, this.di = function() {
		this.jQ.di(), this.jU.di(), this.performance.di(), this.jX.di(), this.jZ.di()
	}, this.ed = function() {
		this.performance.ed(), this.jQ.ed(), this.jU.jh()
	}
}

function jY() {
	var ji, jk = new Uint16Array(8);

	function js(size, player) {
		for (var aC = ah.gt[player].length - 1; size <= aC; aC--) ad.jy(ah.gt[player][aC], player)
	}
	this.di = function() {
		ji = 0
	}, this.jl = function(player, jm) {
		return bR.fN[1] = ah.gt[player].length, bR.fN[0] === aE.fO ? ap.jX.jn(player) : this.jo(player, bR.fN[0]), (0 !== bR.fN[1] || 0 !== ah.gt[player].length) && !(!jm && bR.fN[1] === ah.gt[player].length || (bR.fN[0] === aE.fO ? ah.jp[
			player]++ : ah.jq[player]++, 0))
	}, this.jr = function(player) {
		js(bR.fN[1], player), ae.eh(player, bR.fy[0], bR.fN[0]), aG.jt(player, !1)
	}, this.ju = function(player, jv, fR, iA) {
		var jw = bO.fs(12 * ah.hT[player], 1024);
		iA -= iA >= bO.fs(ah.hT[player], 2) ? jw : 0, js(fR, player), ae.eh(player, iA, jv), ah.hT[player] -= iA + jw, aG.jt(player, !1)
	}, this.jo = function(player, jv) {
		for (var iI, fT = ad.fT, aC = ah.h7[player].length - 1; 0 <= aC; aC--)
			if (ad.jx(ah.h7[player][aC]))
				for (iI = 3; 0 <= iI; iI--)
					if (ad.h1(ah.h7[player][aC] + fT[iI]) && ad.fJ(ah.h7[player][aC] + fT[iI]) === jv) {
						ah.gt[player].push(ah.h7[player][aC]);
						break
					}
	}, this.jn = function(player) {
		for (var fT = ad.fT, aC = ah.h7[player].length - 1; 0 <= aC; aC--)
			if (ad.jx(ah.h7[player][aC]))
				for (var iI = 3; 0 <= iI; iI--)
					if (ad.fI(ah.h7[player][aC] + fT[iI])) {
						ah.gt[player].push(ah.h7[player][aC]);
						break
					}
	}, this.jz = function(player, k0) {
		var aC, fk, iI, iK, fR = ah.h7[player].length,
			k1 = 256 <= fR ? 12 : 32 <= fR ? 6 : 1,
			k2 = fR - 1 - az.k3(k1),
			fT = ad.fT;
		ji = 0;
		loop: for (aC = k2; 0 <= aC; aC -= k1)
			for (iI = 3; 0 <= iI; iI--)
				if ((iK = ad.fI(ah.h7[player][aC] + fT[iI]) ? aE.fO : ad.fJ(ah.h7[player][aC] + fT[iI])) === aE.fO || ad.h1(ah.h7[player][aC] + fT[iI]) && iK !== player && (k0 || bv.fK(player, iK))) {
					for (fk = ji - 1; 0 <= fk; fk--)
						if (jk[fk] === iK) continue loop;
					if (jk[ji] = iK, 8 <= ++ji) return !0
				}
		return 0 < ji
	}, this.k4 = function(player, k0) {
		var aC, iI, iK, fT = ad.fT;
		for (ji = 0, aC = ah.h7[player].length - 1; 0 <= aC; aC--)
			for (iI = 3; 0 <= iI; iI--)
				if ((iK = ad.fI(ah.h7[player][aC] + fT[iI]) ? aE.fO : ad.fJ(ah.h7[player][aC] + fT[iI])) === aE.fO || ad.h1(ah.h7[player][aC] + fT[iI]) && iK !== player && (k0 || bv.fK(player, iK))) return jk[ji++] = iK, !0;
		return !1
	}, this.k5 = function() {
		for (var fl, aC = ji - 1; 0 <= aC; aC--)
			if (jk[aC] === aE.fO) {
				for (ji--, fl = aC; fl < ji; fl++) jk[fl] = jk[fl + 1];
				return !0
			} return !1
	}, this.k6 = function(player) {
		for (var fl, aC = ji - 1; 0 <= aC; aC--)
			if (ae.k7(player, jk[aC]))
				for (ji--, fl = aC; fl < ji; fl++) jk[fl] = jk[fl + 1];
		return 0 === ji
	}, this.k8 = function() {
		for (var aC = ji - 1; 0 <= aC; aC--)
			if (bD.gn.k9(jk[aC])) return !0;
		return !1
	}, this.kA = function() {
		for (var aC = ji - 1; 0 <= aC; aC--) bD.gn.k9(jk[aC]) || (jk[aC] = jk[--ji]);
		return 0 < ji
	}, this.kB = function(player) {
		for (var fl, kC = jk[0], kD = ah.hT[kC] + ae.hU(kC, player), aC = ji - 1; 1 <= aC; aC--)(fl = ah.hT[jk[aC]] + ae.hU(jk[aC], player)) < kD && (kC = jk[aC], kD = fl);
		return kC
	}, this.kE = function(player) {
		var k, kF = jk[0];
		if (1 !== ji)
			for (var kG = bO.fs(ah.jL[player] + ah.jK[player], 2), kH = bO.fs(ah.jN[player] + ah.jM[player], 2), fh = kI(kG - bO.fs(ah.jL[kF] + ah.jK[kF], 2)) + kI(kH - bO.fs(ah.jN[kF] + ah.jM[kF], 2)), aC = ji - 1; 1 <= aC; aC--)(k = kI(kG - bO
				.fs(ah.jL[jk[aC]] + ah.jK[jk[aC]], 2)) + kI(kH - bO.fs(ah.jN[jk[aC]] + ah.jM[jk[aC]], 2))) < fh && (fh = k, kF = jk[aC]);
		return kF
	}, this.kJ = function() {
		for (var kK = jk, kL = kK[0], hT = ah.hT, kM = hT[kL], aC = ji - 1; 1 <= aC; aC--) {
			var gz = kK[aC],
				fl = hT[gz];
			kM < fl && (kL = gz, kM = fl)
		}
		return kL
	}, this.kN = function() {
		return jk[az.k3(ji)]
	}
}

function ja() {
	function kd(player, jv, kT) {
		3 <= kT && 2142 < bi.kj() && (jv === aE.fO || ah.hT[jv] < bO.fs(ah.hT[player], 20)) && aF.kY(player, 20)
	}

	function kg(player, iA, jv, kT) {
		3 <= kT && kT < 6 && bO.fs(ah.hT[player], 8) > ah.hT[jv] && (iA = Math.max(bO.fs(11 * ah.hT[jv], 5), bO.fs(ah.hT[player], 10)));
		kT = ah.gt[player].length;
		ap.jX.jo(player, jv), ap.jX.ju(player, jv, kT, iA)
	}

	function kc(player, iA) {
		var jv = aE.fO,
			fR = ah.gt[player].length;
		ap.jX.jn(player), ah.gt[player].length !== fR && ap.jX.ju(player, jv, fR, iA)
	}
	this.kO = new Uint8Array(aE.fO), this.di = function() {
		this.kO.fill(0)
	}, this.kP = function(player, iA) {
		var kR, kT, kU, kV;
		ae.kQ(player) && (kR = af.kS(player), 3 <= (kT = aF.iA[player]) && kT < 6 && (iA = Math.max(ah.hT[player] - kR, iA)), kU = ah.h8[player].length, kV = ah.h7[player].length, 30 * ah.hF[player] > aE.kW && kX[player] < 10 && 100 * kV <= kU &&
			aF.kY(player, 10), aE.iL ? function(player, iA, kT, kR) {
				var jv;
				if (ap.jX.jz(player, !1) || ap.jX.k4(player, !1)) {
					if (!ap.jX.k6(player))
						if (ap.jX.k5()) kc(player, iA), kd(player, aE.fO, kT);
						else {
							if (az.ke(aF.kf[kT])) jv = ap.jX.kB(player);
							else {
								if (ap.jX.k8() && az.ke(aF.kh[kT]) && ap.jX.kA(), 6 === kT) return kg(player, iA, ap.jX.kN(), kT);
								jv = ap.jX.kE(player)
							}
							kg(player, iA, jv, kT), kd(player, jv, kT)
						}
				} else bQ.ka.ed(player) || ap.jb.ed(player) || ! function(player, iA, kT, kR) {
					var kO = ap.jZ.kO;
					kO[player] = 0;
					var kk = bj.fP[player];
					if (0 !== kk) {
						var kl = ah.hT[player],
							hF = ah.hF;
						if (player < aE.km && (iA = kl), !(kl < hF[player] || 5 === kT && kl < kR || 4 === kT && kl < bO.fs(kR, 2))) {
							bk.kn(kk);
							for (var fR = bR.fw[0], g5 = bR.g5, aC = az.k3(fR), fl = 0; fl < fR; fl++) {
								var ei = g5[(fl + aC) % fR];
								if (kO[ei]) return bB.ko.kp(player, ei, iA)
							}
							var kq = bQ.z.kq;
							for (fl = 0; fl < fR; fl++)
								if (ei = g5[(fl + aC) % fR], kq[ei] && ei !== player) return bB.ko.kp(player, ei, iA)
						}
					}
				}(player, iA, kT, kR)
			}(player, iA, kT, kR) : (!kV || kU && (kU < kV && !az.k3(10) || 100 * kV <= kU && az.k3(3) || !az.k3(8))) && bQ.ka.ed(player) || function(player, iA, kT) {
				ap.jX.jz(player, !0) || ap.jX.k4(player, !0) ? ap.jX.k6(player) || (ap.jX.k5() ? kc(player, iA) : az.ke(aF.kf[kT]) ? kg(player, iA, ap.jX.kB(player), kT) : 5 === kT ? kg(player, iA, ap.jX.kJ(), kT) : (ap.jX.k8() && az.ke(aF
					.kh[kT]) && ap.jX.kA(), kg(player, iA, 6 === kT ? ap.jX.kN() : ap.jX.kE(player), kT))) : ap.jb.ed(player)
			}(player, iA, kT))
	}
}

function c8() {
	var kr = new Uint8Array(aE.fO),
		ks = new Uint16Array(aE.fO),
		kt = new Uint16Array(aE.fO),
		ku = new Uint8Array(aE.fO),
		kv = (this.iA = new Uint8Array(aE.fO), new Uint16Array(aE.fO)),
		kw = new Uint16Array(aE.fO);

	function lB(aC) {
		kr[aC] = 1 + bO.fs(kv[aC] * az.random(), 10 * az.value(100))
	}
	this.kx = null, this.kh = [97, 94, 70, 40, 20, 0, 100], this.ky = [500, 450, 400, 300, 80, 50, 100], this.kf = [0, 0, 5, 25, 50, 100, 0], this.kz = [60, 74, 112, 200, 256, 512, 512], this.l0 = [1, 2, 3, 4, 6, 8, 1], this.l1 = [500, 450, 400, 300,
		80, 50, 100
	], this.l2 = [100, 150, 250, 400, 600, 1e3, 100], this.dj = function() {
		this.kx = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.di = function() {
		kr.fill(0), ks.fill(0), kt.fill(0), ku.fill(0), this.iA.fill(0), kv.fill(0), kw.fill(0);
		var l3 = aE.km;
		if (9 === aE.l4) this.l5();
		else if (aE.l6)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.l8 - 1; 0 <= aC; aC--) {
					var iJ = aC + l3;
					this.iA[iJ] = aE.data.botDifficultyData[iJ]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.l8 - 1; 0 <= aC; aC--) this.iA[iJ = aC + l3] = aE.data.botDifficultyTeam[bj.l9[bj.fP[iJ]]];
				else if (1 === aE.data.botDifficultyType) {
			var lA = this.kx.length;
			for (aC = aE.l8 - 1; 0 <= aC; aC--) this.iA[aC + l3] = aC % lA
		} else
			for (lA = aE.data.botDifficultyValue, aC = aE.l8 - 1; 0 <= aC; aC--) this.iA[aC + l3] = lA;
		else
			for (var l7 = 8 === aE.l4 ? 1 : 0, aC = aE.l8 - 1; 0 <= aC; aC--) this.iA[aC + l3] = l7;
		for (aC = 0; aC < l3; aC++) this.iA[aC] = 6;
		var fR = aE.fO;
		for (aC = 0; aC < fR; aC++) this.iA[aC] <= 2 ? (ku[aC] = 5, kv[aC] = kw[aC] = 1040, 0 === this.iA[aC] ? (ks[aC] = 980, kt[aC] = 980) : 1 === this.iA[aC] ? (ks[aC] = 980, kt[aC] = 920, kv[aC] = kw[aC] = 1100) : (ks[aC] = 825, kt[aC] =
			750)) : this.iA[aC] <= 4 ? (ku[aC] = 1 + az.k3(20), 3 === this.iA[aC] ? (ks[aC] = kt[aC] = 500, kv[aC] = kw[aC] = 1e3) : (kw[aC] = 250 + az.k3(1501), kv[aC] = 500 + az.k3(501), ks[aC] = 300 + az.k3(201), kt[aC] = 100 + az.k3(
			201))) : this.iA[aC] <= 5 ? (kv[aC] = 1e3, kw[aC] = 1e3, ku[aC] = 35 + az.k3(16), ks[aC] = 300 + az.k3(201), kt[aC] = 50 + az.k3(101)) : (kv[aC] = kw[aC] = 800, ku[aC] = 5, ks[aC] = 10, kt[aC] = 250), lB(aC)
	}, this.l5 = function() {
		for (var f5 = b0.lC, l3 = aE.km, aC = f5 - 1; 0 <= aC; aC--) this.iA[aC + l3] = 0;
		for (var fl = 0; fl < 6; fl++) {
			for (aC = f5 + b0.lD[fl] - 1; f5 <= aC; aC--) this.iA[aC + l3] = fl;
			f5 += b0.lD[fl]
		}
	}, this.kY = function(gz, value) {
		kr[gz] = Math.min(value, kr[gz])
	}, this.ed = function(gz) {
		0 == --kr[gz] && ! function(gz) {
			(function(gz) {
				kv[gz] !== kw[gz] && (kv[gz] += kv[gz] < kw[gz] ? 3 : -3);
				ks[gz] !== kt[gz] && (ks[gz] += ks[gz] < kt[gz] ? ku[gz] : -ku[gz], ks[gz] = (Math.abs(ks[gz] - kt[gz]) <= ku[gz] ? kt : ks)[gz]);
				kr[gz] = bO.fs(kv[gz], 10)
			})(gz), ap.jZ.kP(gz, bO.fs(ks[gz] * ah.hT[gz], 1e3))
		}(gz)
	}, this.lG = function(gz, gu) {
		kv[gz] = kw[gz] = gu
	}
}

function jV() {
	var lH = new Uint16Array(aE.fO);

	function lW(player, lU) {
		for (var fR = bR.fw[0], g4 = bR.g4, li = -1, lj = aE.fO, aC = 0; aC < fR; aC++) {
			var fh, gz = g4[aC];
			bv.fK(player, gz) && (fh = bP.ix(lU, bP.jJ(gz)), -1 === li || fh < li) && (li = fh, lj = gz)
		}
		return lj
	}

	function lY(lV, lU) {
		if (lV === aE.fO) return 0;
		var h8 = ah.h8[lV],
			lh = h8.length;
		if (0 === lh) return 0;
		for (var fR = Math.min(lh, 10), lj = 0, li = bP.ix(h8[lj] >> 2, lU), aC = 0; aC < fR; aC++) {
			var iJ = az.k3(lh),
				fh = bP.ix(h8[iJ] >> 2, lU);
			fh < li && (li = fh, lj = iJ)
		}
		return h8[lj] >> 2
	}

	function ld(player, lU, jv, ll) {
		var lm;
		(ll === aE.fO || (lm = bP.jJ(jv), ll = bP.jJ(ll), bP.ix(lU, lm) < bP.ix(lU, ll))) && (lH[player] = jv)
	}
	this.di = function() {
		lH.fill(aE.fO)
	}, this.jh = function() {
		if (bi.kj() % 109 == 9 && !(am.lI < 20) && aE.iL && !(bk.lJ() < bO.fs(8 * aE.kW, 10))) {
			var lK = bk.lL();
			if (bj.l9[lK]) {
				bk.lM(lK);
				var fR = bR.fw[0];
				if (0 !== fR)
					for (var h = bR.g5, lN = am.lN, lI = am.lI, lO = lH, iJ = az.k3(fR), aC = 0; aC < lI; aC++) {
						var ht = lN[aC],
							lP = h[iJ];
						bD.gn.lQ(ht, lP) && 512 === lO[ht] && (lO[ht] = lP, iJ = (iJ + 1) % fR)
					}
			}
		}
	}, this.ed = function(player) {
		var lU, lX, lV, lR = function(player) {
			var jv = lH[player];
			if (jv !== aE.fO) {
				if (bD.gn.lk(jv) && ah.h8[jv]) return jv;
				lH[player] = aE.fO
			}
			return aE.fO
		}(player);
		return function(player) {
			for (var lg = am.lN, lh = am.lI, fR = Math.min(lh, lh < 17 && 5 === az.k3(20) ? 1 : 16), h0 = az.k3(lh), g4 = bR.g4, h8 = ah.h8, gu = 0, aC = 0; aC < fR; aC++) {
				var gz = lg[(aC + h0) % lh];
				gz !== player && h8[gz].length && (g4[gu++] = gz)
			}
			bR.fw[0] = gu
		}(player), 0 !== bR.fw[0] && (0 < (lX = lY(lV = lW(player, lU = bP.jO(player)), lU)) && bQ.lZ.la(player, bQ.lb.lc(lX, lU)) ? (ld(player, lU, lV, lR), !0) : 0 < (lV = function(player, lU) {
			for (var fR = bR.fw[0], g4 = bR.g4, lO = lH, h0 = 0, aC = 0; aC < fR; aC++) {
				var gz = g4[aC],
					gz = lO[gz];
				gz !== aE.fO && bD.gn.lk(gz) && player !== gz && bv.fK(player, gz) && (g4[h0++] = gz)
			}
			return 0 !== (bR.fw[0] = h0) ? lY(lW(player, lU), lU) : 0
		}(player, lU)) && bQ.lZ.la(player, bQ.lb.lc(lV, lU)) ? (ld(player, lU, ad.fJ(lV << 2), lR), !0) : !!(0 < (lX = lY(lR, lU)) && bQ.lZ.la(player, bQ.lb.lc(lX, lU))))
	}
}

function jc() {
	function lq(player) {
		for (var fq = ah.fq[player], fR = fq.length, fr = Math.max(bO.fs(fR, 12), 1), fT = ad.fT, eF = az.k3(fR), aC = 0; aC < fR; aC += fr)
			for (var fG = fq[(aC + eF) % fR], fU = 3; 0 <= fU; fU--) {
				var fV = fG + fT[fU];
				if (ad.fW(fV)) return {
					f5: fV,
					id: ad.f9(fV),
					gz: player
				}
			}
		return null
	}

	function lv(player, lx) {
		var iA = bD.gn.ly(player, aF.l1[aF.iA[player]]);
		ah.gt[player].push(lx.f5), ae.eh(player, iA, lx.gz), aG.jt(player, !0)
	}
	this.ed = function(player) {
		return !!bV.f6(bV.f7) && !!aE.data.passableMountains && 0 !== ah.fq[player].length && function(player) {
			var lp = lq(player);
			if (null === lp) return !1;
			! function(player) {
				for (var lN = am.lN, lI = am.lI, fR = Math.min(lI, 12), h0 = az.k3(lI), g4 = bR.g4, fq = ah.fq, gu = 0, aC = 0; aC < fR; aC++) {
					var gz = lN[(aC + h0) % lI];
					gz !== player && fq[gz].length && bv.fK(player, gz) && (g4[gu++] = gz)
				}
				bR.fw[0] = gu
			}(player);
			var ls = function(f8) {
				for (var fR = bR.fw[0], g4 = bR.g4, aC = 0; aC < fR; aC++) {
					var lx = lq(g4[aC]);
					if (null !== lx && lx.id === f8) return lx
				}
				return null
			}(lp.id);
			return null !== ls ? (lv(player, ls), !0) : function(player, f8) {
				var fR = ap.jQ.lw;
				if (0 !== fR)
					for (var f5 = ap.jQ.eV[az.k3(fR)] << 2, fT = ad.fT, fU = az.k3(4);;) {
						if (f5 += fT[fU], ad.fW(f5)) {
							if (ad.f9(f5) === f8) return lv(player, {
								f5: f5,
								gz: aE.fO
							}), !0;
							break
						}
						if (!ad.fI(f5)) break
					}
				return !1
			}(player, lp.id)
		}(player)
	}
}

function jT() {
	this.ed = function(player) {
		return bQ.lZ.la(player, function(player) {
			var fR = ap.jQ.lw;
			if (0 === fR) return -1;
			for (var lh = Math.min(fR, ap.performance.m0 ? fR : 10), eV = ap.jQ.eV, k2 = bO.fs(az.random() * fR, az.value(100)), e = k2 + lh, m1 = az.jP(ah.jK[player], ah.jL[player]), m2 = az.jP(ah.jM[player], ah.jN[player]), lj = -1,
					fh = bP.iy(0, 0, bV.fc, bV.fd), aC = k2; aC < e; aC++) {
				var h0 = aC % fR,
					m3 = bP.fj(m1, m2, eV[h0]);
				m3 < fh && (fh = m3, lj = h0)
			}
			return -1 !== lj ? function(fD, m1, m2) {
				var hg = bP.fZ(fD),
					hi = bP.fb(fD),
					io = m1 - hg,
					ir = m2 - hi;
				Math.abs(io) >= Math.abs(ir) ? (ir = 0, io = Math.sign(io)) : (io = 0, ir = Math.sign(ir));
				io === ir && (io = 1);
				for (;;) {
					if (hg += io, hi += ir, !bP.fn(hg, hi)) break;
					if (fD = bP.fo(hg, hi), ad.ih(bP.fH(fD))) return fD
				}
				return -1
			}(eV[lj], m1, m2) : -1
		}(player))
	}
}

function je() {
	this.ed = function(player) {
		var m5 = function(player) {
			for (var m8 = bQ.m8.mA(), fR = m8.length, lh = Math.min(fR, 32), iJ = az.k3(fR), aC = 0; aC < lh; aC++) {
				var m5 = (aC + iJ) % fR,
					m7 = m8[m5],
					iv = m7[0],
					iw = m7[m7.length - 1];
				if (bQ.lb.mB(player, iv) && bQ.lb.mC(player, iw)) return m5;
				if (bQ.lb.mB(player, iw) && bQ.lb.mC(player, iv)) return 0 <= (m5 = bQ.m8.mD(iw, iv)) ? m5 : bQ.m8.mE() ? -1 : bQ.m8.mF(bQ.m8.mG(m7))
			}
			return -1
		}(player);
		return -1 !== m5 && (m5 = bQ.m8.get(m5), !bQ.lb.m9(player, m5)) && (bR.h[0] = m5, !0)
	}
}

function jW() {
	this.m0 = 0, this.di = function() {
		this.m0 = 0
	}, this.ed = function() {
		if (!this.m0 && bi.kj() % 30 == 7 && bD.gn.mJ(90) && (ap.performance.m0 = 1)) {
			if (aE.iL) {
				var lK = bk.lL();
				if (bj.l9[lK]) {
					bk.kn(lK);
					var h = bR.g5,
						fR = bR.fw[0];
					if (0 !== fR)
						for (var mM = Math.min(100 + 10 * (fR - 1), 400), aC = 0; aC < fR; aC++) aF.lG(h[aC], mM)
				}
			}
			aF.lG(mN[0], 100)
		}
	}
}

function jR() {
	var mO = 0,
		mP = 0,
		mQ = 300,
		mR = 300,
		mS = 0;
	this.lw = 0, this.eV = new Uint32Array(512), this.di = function() {
		mP = mO = 0, this.lw = 0, mS = 0
	}, this.ed = function() {
		if (function() {
				var fR = ap.jQ.lw;
				if (0 === fR) return 1;
				var eV = ap.jQ.eV;
				if (bi.kj() % 35 == 6) {
					for (var aC = fR - 1; 0 <= aC; aC--) ad.fI(eV[aC] << 2) || (fR--, eV[aC] = eV[fR]);
					ap.jQ.lw = fR
				}
				return fR < eV.length
			}())
			if (mQ <= mO) {
				var mW = ap.jQ.lw;
				if (mW) {
					if (bi.kj() % 350 != 1) return;
					if (mS !== mW) return void(mS = mW);
					if (!bD.gn.k9(mN[0])) return
				} else if (bi.kj() % 12 != 8) return;
				bD.gn.mX() || ap.jQ.di()
			} else {
				var aC, j = bV.fc,
					mY = j - 2,
					mW = mY * (bV.fd - 2),
					mZ = mQ,
					eV = ap.jQ.eV,
					lh = ap.jQ.lw,
					ma = eV.length,
					h0 = Math.min(mP + mZ * ((1 + 19 * ap.performance.m0) * mR), mW);
				for (aC = mP; aC < h0; aC += mZ) {
					var f5 = 4 * (aC % mY + (bO.fs(aC, mY) + 1) * j + 1);
					if (ad.fI(f5) && (eV[lh] = f5 >> 2, ++lh === ma)) {
						aC += mZ;
						break
					}
				}(mP = aC) >= mW && (mP = ++mO), ap.jQ.lw = lh
			}
	}
}

function jg() {
	this.ed = function() {
		if (bi.kj() % 51 == 45)
			for (var fR = bQ.z.mc, md = bQ.z.md, me = bQ.z.me, mf = bQ.z.mf, mg = bQ.z.mg, l2 = aF.l2, iA = aF.iA, aC = 0; aC < fR; aC++) {
				var m7, player, mk, mh = md[aC];
				mh % 64 == 6 || (m7 = me[aC], (player = bQ.lb.mi(m7[m7.length - 1])) < 0) || !bD.gn.lQ(player, mg[aC] >> 3) || az.k3(1e3) >= l2[iA[player]] || ! function(mo, m7) {
					for (var fR = m7.length - 1, mp = bQ.z.mq[mo], fh = 0, aC = mp + 1; aC < fR; aC++) fh += bP.iu(m7[aC], m7[aC + 1]);
					return (fh += bP.iu(bP.jC(bQ.z.mr[mo]), m7[mp + 1])) <= 60
				}(aC, m7) || (mk = mf[aC], 64 <= mh && bQ.ml.mm(player, mk)) || function(player, m7, mk, mo, mh) {
					bQ.ms.mt(player) && bD.gn.mu(player, aF.ky[aF.iA[player]], 32, 0) && (bQ.z.md[mo] = 64 + mh % 64, bQ.ml.eh(mk, bQ.z.mv), bR.h[0] = bQ.m8.mG(m7), bR.g3[1] = 6, bD.gn.mw(player), bQ.z.mx(player))
				}(player, m7, mk, aC, mh)
			}
	}
}

function my() {
	aO.ed(), ag.ed(), aX.mz(), b1.z.ed()
}

function n0() {
	b2.ed(), aH.ed(), ao.ed(), af.ed(), b5.ed(), aG.ed(), ap.ed(), bQ.z.ed(), am.n1(), aW.ed(), b0.ed(), bY.ed(), ag.ed(), ag.n2(), aX.ed(), bS.ed(), aV.ed(), aQ.ed(), b9.n3(), aO.ed(), b6.ed(), aS.ed(), ax.ed(), bg.ed(), bk.ed(), b1.z.ed(), b1.n4
		.ed(), u.ed(), bX.eQ.ed(), bC.ed(), bi.ed()
}

function n5() {
	aI.ed(), aY.ed(), aR.ed(), aw.ed(), bF.ed(), b8.ed(), b9.ed(), ay.n6()
}

function n7() {
	aW.n8(!1), aQ.n8(), aX.n8(!1), aV.n8(), aS.n8(), ax.n8(), ag.n8(!1), bk.n9()
}

function nA() {
	ag.n8(!1) && (bi.dq = !0), b1.z.ed()
}

function c9() {
	var nB, nC, nD;

	function nF(nH) {
		for (var aC = nB - 1; 0 <= aC; aC--) 0 === nD[nC[aC]] && ah.hF[nC[aC]] >= nH && gV(nC[aC])
	}

	function nE(player) {
		var eZ;
		64 === nD[player] ? nD[player] = 6 : (eZ = ah.hF[player], nD[player] = eZ < 1e3 ? 3 : eZ < 1e4 ? 2 : eZ < 6e4 ? 1 : 0)
	}
	this.di = function() {
		nB = 0, nC = new Uint16Array(aE.fO), nD = new Uint8Array(aE.fO)
	}, this.ed = function() {
		for (var aC = nB - 1; 0 <= aC; aC--) 64 === nD[nC[aC]] ? nE(nC[aC]) : 0 == nD[nC[aC]]-- && (nE(nC[aC]), gV(nC[aC]));
		16e4 <= ah.hF[mN[0]] && (nF(16e4), 3e5 <= ah.hF[mN[0]]) && nF(3e5), bD.gn.lk(aE.fB) && (bg.nI[7] = Math.max(ah.hF[aE.fB], bg.nI[7]))
	}, this.gp = function(player) {
		for (var fk, aC = nB - 1; 0 <= aC; aC--)
			if (player === nC[aC]) {
				for (nB--, fk = aC; fk < nB; fk++) nC[fk] = nC[fk + 1];
				return
			}
	}, this.jt = function(player, nJ) {
		for (var aC = nB - 1; 0 <= aC; aC--)
			if (player === nC[aC]) return;
		nC[nB++] = player, nD[player] = nJ ? 2 : 64
	}
}

function cA() {
	var size, ka;
	this.di = function() {
		size = aE.l8, ka = new Uint16Array(aE.fO);
		for (var km = aE.km, aC = aE.l8 - 1; 0 <= aC; aC--) ka[aC] = km + aC
	}, this.ed = function() {
		ap.jf.ed();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nM[ka[aC]]) {
				fk = void 0;
				var fk = aC;
				size--, ka[fk] = ka[size]
			} else aF.ed(ka[aC])
	}, this.nL = function(gz) {
		ka[size++] = gz
	}
}

function cB() {
	var nO, nP, nQ, nR, nS, nT, nU, nV, nW, nX, nY, nZ, na, nb = !1,
		nc = !1;

	function nd(ne) {
		nZ = bi.eY, nQ = nR = nP = 0, nS = (na = 33) / ne, nO = 1 / (ne / na / 4), nT = (i.j / 2 + j5) / ic, nU = (i.k / 2 + j6) / ic, nV = ic
	}

	function nl(aC) {
		var nn; - 1 !== aC && (aC = bP.jC(bQ.z.mr[aC]), nn = bP.fZ(aC) - 15, aC = bP.fb(aC) - 15, aI.nh(nn, aC, 29 + nn, 29 + aC))
	}

	function ny(eK) {
		Math.abs(Math.log(nY / nV)) < .125 && (nY = eK * nV)
	}

	function nx(nn, no, o0, o1) {
		nW = (nn + o0 + 1) / 2, nX = (no + o1 + 1) / 2;
		o0 = i.j / (o0 - nn + 1), nn = i.k / (o1 - no + 1);
		nY = .9 * (o0 < nn ? o0 : nn)
	}
	this.nf = function() {
		return nb
	}, this.ng = function() {
		nd(1), this.nh(0, 0, bV.fc - 1, bV.fd - 1), aE.hp || aE.ha || this.ni(aE.fB, 3e3, !0, .3)
	}, this.nj = function(player, nk) {
		nl(bQ.lb.nm(player, nk))
	}, this.ni = function(player, ne, np, zoom) {
		aE.nq || nb && !np && nc || (0 === ah.hF[player] ? nl(bQ.lb.nr(player)) : (aT.ns = !1, nc = np, nd(ne), function(player) {
			nW = (ah.jK[player] + ah.jL[player] + 1) / 2, nX = (ah.jM[player] + ah.jN[player] + 1) / 2
		}(player), function(zoom, player) {
			var io = ah.jL[player] - ah.jK[player] + 1,
				player = ah.jN[player] - ah.jM[player] + 1,
				fk = i.j / io,
				fl = i.k / player,
				fk = (nY = fk < fl ? fk : fl, 0 !== zoom ? zoom : io < 20 && player < 20 ? .5 : .9);
			nY *= fk, ny(7 / 8)
		}(zoom, player), nb = !0, at.nv()))
	}, this.nw = function(ne) {
		aE.ha || aE.nq || (aT.ns = !1, nc = !1, nd(ne), nx(0, 0, bV.fc - 1, bV.fd - 1), ny(7 / 8), nb = !0, at.nv())
	}, this.nh = function(nn, no, o0, o1) {
		nb = !1, nx(nn, no, o0, o1), ic = nY, aT.o2(nW, i.j / 2), aT.o3(nX, i.k / 2), bd.o4(), bi.dq = !0
	}, this.o5 = function() {
		return !(nb && nc || (nb = !1))
	}, this.ed = function() {
		var o8, o9, fU, oC;
		nb && (nP < .5 ? nR < nS && (nR += nS * nO, nQ = nP) : 1 - nQ < nP && (nR = (nR -= nS * nO) < nS * nO ? nS * nO : nR), nZ = nZ >= bi.eY ? bi.eY - 1 : nZ, fU = bi.eY - nZ, nP = 1e3 < fU || 1 < (nP += nR * fU / na) ? 1 : nP, nZ = bi.eY,
			fU = ic, o8 = j5, o9 = j6, fU = (ic = nV * Math.pow(nY / nV, nP)) / fU, oC = 1 - (nV * Math.pow(nY / nV, 1 - nP) - nV) / (nY - nV), aT.o2(nT + oC * (nW - nT), i.j / 2), aT.o3(nU + oC * (nX - nU), i.k / 2), ag.zoom(fU, (o8 * fU -
				j5) / (1 - fU), (o9 * fU - j6) / (1 - fU)), bd.o4(), 1 <= nP && (nb = !1, be.oD = !0), bi.dq = !0)
	}
}

function c3() {
	var ei = bD.color;
	this.oE = ei.oF(0, 0, 0), this.oG = ei.oH(0, 0, 0, .7), this.oI = ei.oH(0, 0, 0, .5), this.oJ = ei.oH(0, 0, 0, .85), this.oK = ei.oH(0, 0, 0, .75), this.oL = ei.oH(0, 0, 0, .6), this.oM = ei.oH(0, 0, 0, .35), this.oN = ei.oF(255, 255, 255), this
		.oO = ei.oH(255, 255, 255, .3), this.oP = ei.oH(255, 255, 255, .6), this.oQ = ei.oH(255, 255, 255, .4), this.oR = ei.oH(255, 255, 255, .25), this.oS = ei.oH(255, 255, 255, .85), this.oT = ei.oH(255, 255, 255, .75), this.oU = ei.oH(255, 255,
			255, .15), this.oV = ei.oH(255, 255, 255, .11), this.oW = ei.oF(128, 128, 128), this.oX = ei.oH(64, 64, 64, .75), this.oY = ei.oH(88, 88, 88, .83), this.oZ = ei.oH(60, 60, 60, .85), this.oa = ei.oH(80, 60, 60, .85), this.ob = ei.oF(170,
			170, 170), this.oc = ei.oF(200, 235, 245), this.od = ei.oF(30, 255, 30), this.oe = ei.oF(0, 200, 0), this.og = ei.oF(128, 255, 128), this.oh = ei.oH(10, 65, 10, .75), this.oi = ei.oH(0, 255, 0, .6), this.oj = ei.oH(0, 255, 0, .5), this
		.ok = ei.oH(0, 200, 0, .5), this.ol = ei.oH(0, 100, 0, .75), this.om = ei.oH(0, 60, 0, .8), this.on = ei.oH(0, 255, 0, .3), this.oo = ei.oH(0, 180, 0, .6), this.op = ei.oH(0, 120, 0, .85), this.oq = ei.oF(0, 120, 0), this.or = ei.oH(0, 70, 0,
			.85), this.os = ei.oF(190, 230, 190), this.ot = ei.oF(0, 255, 0), this.ou = ei.oF(255, 120, 120), this.ov = ei.oF(255, 160, 160), this.ow = ei.oF(255, 70, 70), this.ox = ei.oF(230, 0, 0), this.oy = ei.oH(220, 0, 0, .6), this.oz = ei.oH(
			255, 100, 100, .8), this.p0 = ei.oH(100, 0, 0, .85), this.p1 = ei.oH(60, 0, 0, .85), this.p2 = ei.oH(200, 0, 0, .6), this.p3 = ei.oH(120, 0, 0, .85), this.p4 = ei.oF(255, 70, 10), this.p5 = ei.oF(230, 190, 190), this.p6 = ei.oF(255, 0,
		0), this.p7 = ei.oF(255, 0, 255), this.p8 = ei.oH(60, 0, 60, .85), this.p9 = ei.oH(0, 60, 60, .85), this.pA = ei.oH(10, 60, 60, .9), this.pB = ei.oH(0, 96, 96, .75), this.pC = ei.oF(0, 255, 255), this.pD = ei.oF(160, 160, 255), this.pE = ei
		.oH(0, 40, 90, .75), this.pF = ei.oH(0, 0, 255, .6), this.pG = ei.oF(200, 200, 255), this.pH = ei.oH(50, 50, 255, .83), this.pI = ei.oH(20, 90, 150, .75), this.pJ = ei.oH(10, 10, 120, .75), this.pK = ei.oF(255, 120, 100), this.pL = ei.oH(255,
			255, 0, .5), this.pM = ei.oH(255, 255, 150, .2), this.pN = ei.oF(255, 255, 0), this.pO = ei.oF(255, 255, 200), this.pP = ei.oH(200, 200, 0, .6), this.pQ = ei.oH(140, 120, 0, .75), this.pR = ei.oH(180, 160, 40, .75), this.pS = ei.oH(70,
			50, 20, .85), this.pT = ei.oH(30, 30, 0, .85), this.pU = ei.oH(60, 60, 0, .85), this.pV = ei.oF(255, 255, 100), this.pW = ei.oF(255, 255, 140), this.pX = ei.oH(255, 140, 0, .75), this.pY = ei.oH(70, 40, 0, .85), this.pZ = ei.oF(255, 150,
			0), this.pa = ei.oH(255, 200, 80, .85), this.pb = ei.oH(0, 0, 0, 0), this.pc = ei.oH(255, 255, 255, 0), this.pd = ei.oH(254, 254, 254, 0)
}

function d3() {
	this.hr = new pe, this.gn = new pf, this.pg = new ph, this.pi = new pj, this.ko = new pk
}

function pe() {
	this.pl = 1, this.hs = function(fD) {
		aE.l6 ? bB.pg.hs(aE.fB, fD) : b1.pm.pn(fD)
	}, this.hy = function(j4, jv) {
		this.pl && (this.pl = 0, bm.po.pp(182, j4)), aE.l6 ? bB.pg.hy(aE.fB, j4, jv) : b1.pm.pq(j4, jv)
	}, this.pr = function(j4, ps) {
		aE.l6 ? bB.pg.pt(aE.fB, j4, ps) : b1.pm.pu(j4, ps)
	}, this.i3 = function(j4, fD) {
		fD = (fD << 3) + bR.g3[6];
		aE.l6 ? bB.pg.i3(aE.fB, j4, fD) : bQ.ms.mt(aE.fB) && b1.pm.pw(j4, fD)
	}, this.i6 = function(j4) {
		849 === j4 && (j4 = 850);
		var nk = bR.g3[3];
		aE.l6 ? bB.pg.i6(aE.fB, j4, nk) : bQ.i4.px(aE.fB, nk) && b1.pm.py(j4, nk)
	}, this.pz = function(nk) {
		aE.l6 ? bB.pg.pz(aE.fB, nk) : b1.pm.py(849, nk)
	}, this.q0 = function(jv) {
		aE.l6 ? bB.pg.q0(aE.fB, jv) : b1.pm.q1(jv)
	}, this.q2 = function(q3) {
		aE.l6 ? bB.pg.q4(aE.fB, q3) : b1.pm.q5(q3)
	}, this.iF = function(q6) {
		aE.l6 ? bB.pg.iF(aE.fB, q6) : b1.pm.q7(q6)
	}, this.q8 = function() {
		aE.l6 ? bB.pg.q8(aE.fB) : b1.pm.q9()
	}, this.iC = function() {
		aE.l6 ? bB.pg.iC(aE.fB) : b1.pm.q1(513)
	}, this.hu = function(j4, fD, jv) {
		aE.l6 ? bB.pg.hu(aE.fB, j4, fD, jv) : b1.pm.qA(j4, fD, jv)
	}
}

function pk() {
	this.kp = function(player, ps, iA) {
		bD.gn.qB(player, iA, ps) && (af.pr(player, ps), !bD.gn.k9(ps)) && ap.jZ.kO[ps] && ap.jZ.kO[ps]--
	}, this.qC = function(player, ps, iA) {
		bD.gn.qD(iA, ps) ? ao.eh(ps, bR.fy[0]) && (bt.qE(player, ps, bR.fy[0], 1), bD.gn.gq(ps, bR.fy[0]), bg.qF(player, ps), ag.qG(ps, bR.fy[0])) : bg.gr(player, iA, 12)
	}
}

function pf() {
	this.qH = function(q3, player) {
		aO.q2(aE.fB, player, q3), b1.pm.qI(q3, player)
	}, this.qJ = function(player) {
		aO.qK(player, 0), b1.pm.qL(player)
	}, this.qM = function(qN, player) {
		aO.qO(qN, player), b1.pm.qP(qN, player)
	}, this.qQ = function() {
		aE.l6 || aE.ha || b1.qR.qQ()
	}
}

function pj() {
	this.ed = function(aD) {
		var id, gA, o5;
		for (bK.di(aD), bK.eG += 2, o5 = 8 * bK.size; bK.eG + 8 <= o5;) id = bK.qS(4), gA = bK.qS(9), 0 === id ? this.qT(id, gA, bK.qS(22)) : 1 === id ? this.qT(id, gA, bK.qS(10), bK.qS(10)) : 2 === id ? this.qT(id, gA, bK.qS(10), bK.qS(9)) :
			3 === id ? this.qT(id, gA, bK.qS(10), bK.qS(27)) : 4 === id ? this.qT(id, gA, bK.qS(10), bK.qS(16)) : 5 === id || 6 === id ? this.qT(id, gA, bK.qS(10)) : 7 === id ? this.qT(id, gA, bK.qS(1)) : 10 === id ? this.qT(id, gA, bK.qS(20), bK
				.qS(22)) : this.qT(id, gA)
	}, this.qU = [], this.qV = function() {
		for (var qX = 0, qY = 0, qZ = 0, qa = 0, qb = 0, qc = 0, aC = 0; aC < 512; aC++) qX += ah.nM[aC], qY += ah.hF[aC], qZ += ah.hT[aC], qa += bQ.z.kq[aC];
		qb += bQ.z.mc, qc += am.lI, this.qU.push(qZ % 1073741824 * 4 + (qX + qY + qa + qb + qc) % 4)
	}, this.qT = function(id, gA, gC, gE) {
		0 === id ? bB.pg.hs(gA, gC) : 1 === id ? bB.pg.hy(gA, gC, gE) : 2 === id ? bB.pg.pt(gA, gC, gE) : 3 === id ? bB.pg.i3(gA, gC, gE) : 4 === id ? bB.pg.i6(gA, gC, gE) : 5 === id ? bB.pg.q0(gA, gC) : 6 === id ? bB.pg.q4(gA, gC) : 7 === id ?
			bB.pg.iF(gA, gC) : 8 === id ? bB.pg.q8(gA) : 9 === id ? bB.pg.qd(gA) : 10 === id && bB.pg.hu(gA, gC >> 10, gE, gC % 1024)
	}
}

function ph() {
	this.hs = function(player, fD) {
		bD.gn.hc(0) && bD.gn.hd(player) && bP.j9(fD) && (bC.qe.qf(0, player, fD), aE.qg.eh(player, fD))
	}, this.hy = function(player, j4, jv) {
		bD.gn.hc(1) && bD.gn.hd(player) && bD.gn.qh(player, jv) && bD.gn.mu(player, j4, 12, 0) && bD.gn.qi(player, jv) && ((jv = ae.k7(player, bR.fN[0])) || ae.kQ(player)) && (ah.qj[player]++, bC.qe.qf(1, player, j4, bR.fN[0]), ap.jX.jl(player,
			jv)) && (bD.gn.mw(player), bg.qk(player, j4), ap.jX.jr(player))
	}, this.pt = function(player, j4, ps) {
		bD.gn.hc(1) && bD.gn.hd(player) && aE.iL && bD.gn.qh(player, ps) && bD.gn.ql(player, ps) && bD.gn.qB(player, bD.gn.j3(player, j4), ps) && ao.eh(ps, bR.fy[0]) && (bC.qe.qf(2, player, j4, ps), af.pr(player, ps))
	}, this.i3 = function(player, j4, pv) {
		bR.g3[1] = 7 & pv;
		var fD = pv >> 3;
		bD.gn.hc(1) && bD.gn.hd(player) && bP.j9(fD) && bQ.ms.mt(player) && bQ.ms.qm(fD) && bD.gn.mu(player, j4, 32, 0) && bQ.lZ.qn(player, fD, 1) && (bg.qo(player), bC.qe.qf(3, player, j4, pv), bD.gn.mw(player), bo.qp.i3(player), bQ.z.mx(
			player))
	}, this.i6 = function(player, j4, nk) {
		849 === j4 ? this.pz(player, nk) : bD.gn.hc(1) && bD.gn.hd(player) && bD.gn.mu(player, j4, 32, 0) && bQ.i4.qq(player, nk) && (bg.qo(player), bC.qe.qf(4, player, j4, nk), bD.gn.mw(player), bo.qp.i6(player), bQ.z.mx(player))
	}, this.pz = function(player, nk) {
		bD.gn.hc(1) && bD.gn.hd(player) && bQ.qr.ed(player, nk) && bC.qe.qf(4, player, 849, nk)
	}, this.q0 = function(player, jv) {
		513 === jv ? this.iC(player) : bD.gn.hc(1) && bD.gn.hd(player) && (jv = Math.min(jv, aE.fO), ae.k7(player, jv)) && (bC.qe.qf(5, player, jv), ae.qs(player, jv))
	}, this.q4 = function(player, q3) {
		(bD.gn.hc(1) || bD.gn.hc(2)) && bD.gn.hd(player) && (q3 = bO.iZ(q3, 0, 1023), bC.qe.qf(6, player, q3), ag.qt(player, 0, q3))
	}, this.iF = function(player, q6) {
		ax.iE(player) && (bC.qe.qf(7, player, q6), ax.qu(player, q6))
	}, this.q8 = function(player) {
		(bD.gn.hc(0) || bD.gn.hc(1)) && bD.gn.hd(player) && aN.qv(player) && (bC.qe.qf(8, player), bT.q8(player))
	}, this.qd = function(player) {
		bC.qe.qf(9, player), bT.qd(player)
	}, this.iC = function(player) {
		ax.iG(player) && (bC.qe.qf(5, player, 513), ax.iC(player))
	}, this.hu = function(player, j4, fD, jv) {
		bD.gn.hc(1) && bD.gn.hd(player) && bD.gn.qh(player, jv) && bD.gn.qi(player, jv) && bP.j9(fD) && an.f2.fL(player, fD) && (ae.k7(player, bR.fN[0]) || ae.kQ(player)) && (bC.qe.qf(10, player, (j4 << 10) + bR.fN[0], fD), jv = bD.gn.ly(player,
			j4), ah.gt[player].push(bR.fS[0]), ae.eh(player, jv, bR.fN[0]), aG.jt(player, !0), bg.qw(player))
	}
}

function qx() {
	var qz;
	this.qy = [], this.qz = document.createElement("div"), this.r0 = function(r1, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = r1, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qz.appendChild(
			title), title
	}, this.r2 = function(r1, marginBottom) {
		var r3 = document.createElement("p");
		return r3.textContent = r1, r3.style.fontSize = "0.75em", r3.style.lineHeight = "1.2em", r3.style.marginBottom = marginBottom || "0", this.qz.appendChild(r3), r3
	}, this.r4 = function(r1) {
		var r5 = document.createElement("p");
		return r5.textContent = r1, r5.style.fontSize = "1em", r5.style.marginBottom = "0", r5.style.whiteSpace = "pre-wrap", r5.style.overflowWrap = "break-word", this.qz.appendChild(r5), r5
	}, this.r6 = function(r7, fontSize) {
		var qz = document.createElement("div");
		return qz.innerHTML = r7, qz.style.fontSize = fontSize || "1em", qz.style.lineHeight = "1.2em", this.qz.appendChild(qz), qz
	}, this.r8 = function(r9) {
		for (var rA = r9.rA, fR = rA.length, aC = 0; aC < fR; aC++) this.qz.appendChild(rA[aC])
	}, this.rB = function(rC) {
		return this.qy.push(rC), this.qz.appendChild(rC.e), rC
	}, this.resize = function() {
		for (var fR = this.qy.length, aC = 0; aC < fR; aC++) this.qy[aC].resize && this.qy[aC].resize()
	}, (qz = this.qz).style.position = "absolute", qz.style.height = "auto", qz.style.padding = "0.5em"
}

function rD(rE, rF) {
	var qz = document.createElement("div");

	function rN() {
		var aC, rO, k, h0, fU, rJ = i.l * qz.offsetWidth,
			rP = new Float64Array(function(rJ) {
				var j = .25 * bD.rK.rL(.6) * i.ib;
				return Math.max(Math.floor(rJ / j), 1)
			}(rJ)),
			rQ = bf.rQ,
			rR = (rJ - (rP.length + 1) * bf.gap) / (rP.length * i.l);
		for (rP.fill(rQ), aC = 0; aC < rF.length; aC++) rO = (fU = rF[aC].qz).style, k = bD.rS.min(rP), h0 = rP.indexOf(k), rO.top = bD.rK.rT(k), rO.left = bD.rK.rT(rQ + h0 * (rR + rQ)), rO.width = bD.rK.rT(rR), bD.rK.rU(fU, 5), rP[h0] += fU
			.offsetHeight + 3 * rQ;
		qz.style.height = bD.rK.rT(bD.rS.max(rP) - 2 * rQ)
	}
	this.rG = qz, this.rH = rF, this.resize = function() {
		var aC;
		for (aC = 0; aC < rF.length; aC++) rF[aC].resize();
		rN(), rN()
	}, qz.style.width = "100%", qz.style.maxWidth = "100%", rE.style.lineHeight = "1.5em", rE.style.overflowX = "hidden", rE.style.overflowY = "auto";
	for (var aC = 0; aC < rF.length; aC++) qz.appendChild(rF[aC].qz);
	rE.appendChild(qz)
}

function x(rV, rW, rX, rY, rZ) {
	var self, ra = document.createElement("button");

	function rh() {
		var rn;
		bM.rm() || (rn = bD.color.ro(rX), !1 !== rY && 0 < rn[0] && rn[0] < 255 && rn[0] === rn[1] && rn[0] === rn[2]) || (128 < rn[0] && 128 < rn[1] && 128 < rn[2] ? ra.style.backgroundColor = bD.color.rp(rX, -50) : ra.style.backgroundColor = bD
			.color.rp(rX, rn[3] && rn[3] < 120 ? 150 : 50))
	}

	function rg() {
		if (rY) {
			var rn = bD.color.ro(rX);
			if (rn[0] === rn[1] && rn[0] === rn[2]) return
		}
		rW && ((rn = rW(this)) ? 2 === rn && rh() : rr(this))
	}

	function rj() {
		this.style.backgroundColor = rX
	}

	function ri() {
		rr(this)
	}

	function rr(fU) {
		fU.style.backgroundColor = rX, fU.blur()
	}
	this.button = ra, this.rb = rW, this.rc = rX, this.rf = function(rk) {
		rk = 1.1 - Math.min(.01 * rV.length, .6) + .2 * rk;
		ra.style.fontSize = rk.toFixed(1) + "em"
	}, this.re = function(ei) {
		ei ? 1 === ei ? ei = bE.oZ : 2 === ei && (rY = 1, ei = bE.oZ) : (rY = 0, ei = bE.oJ), this.rc = rX = ei, ra.style.backgroundColor = ei
	}, self = this, ra.innerHTML = rV, ra.style.color = rZ ? bE.pN : bE.oN, ra.style.userSelect = "none", ra.style.outline = "none", ra.style.overflowWrap = "break-word", self.re(rX), ra.style.border = "none", ra.style.font = "inherit", self.rf(
		0), ra.style.padding = "0em 0.3em", ra.onclick = rg, ra.addEventListener("mouseover", rh), ra.addEventListener("mouseout", ri), ra.addEventListener("focus", rh), ra.addEventListener("blur", rj)
}

function rs(rt, rE) {
	var qz;
	this.resize = function() {
		for (var aC = 0; aC < rt.length; aC++) bD.rK.rU(rt[aC].button);
		qz.style.gap = qz.style.padding = bD.rK.rT(bf.rQ)
	}, (qz = document.createElement("div")).style.display = "grid", qz.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qz.style.overflowY = "auto", qz.style.gridAutoRows = "5.3em", qz.style.maxHeight = "100%";
	for (var aC = 0; aC < rt.length; aC++) rt[aC].rf(1), qz.appendChild(rt[aC].button);
	rE.appendChild(qz)
}

function rv(rw, rx, ry) {
	this.fY = 0, this.fa = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.rK.rL(ry || .5) * rw[1] * i.ib, i.k - 2 * bf.gap), this.j = Math.min(this.k * (rw[0] / rw[1]), i.j - 2 * bf.gap), this.k = rw[1] * this.j / rw[0], this.fY = bf.gap + rx[0] * (i.j - this.j - 2 * bf.gap), this.fa = bf
			.gap + rx[1] * (i.k - this.k - 2 * bf.gap)
	}, this.rz = function() {
		return this.fY + .5 * this.j
	}
}

function s0(s1, s2) {
	var sB, self, s3 = document.createElement("div"),
		s4 = document.createElement("div"),
		s5 = document.createElement("div"),
		s6 = null,
		sC = (this.s7 = new s8({
			value: "",
			eG: -1
		}, 0, s9, function(e) {
			e.target.value = bD.sJ.sK(e.target.value), s6.sI.textContent = 127 - e.target.value.length
		}), 0),
		sD = 1,
		sE = 0,
		sF = 1048575;

	function s9() {
		s1(), s6.sI.textContent = 127
	}

	function sT(sS, rC) {
		rC && (rC.sY = 1, sS.appendChild(bq.sZ.transform(rC)))
	}

	function sW(bx) {
		sD ? s3.scrollTop = s3.scrollHeight : bx && (s3.scrollTop = sE)
	}
	this.reset = function(sL) {
			sF = 1048575, s4.textContent = "", sL || this.n9()
		}, this.n9 = function() {
			var sM = bq.z.sN[0],
				sM = bq.z.sP[sM],
				sQ = sM.sQ,
				fR = sQ.length,
				k2 = 1048575 === sF ? 0 : fR - (sM.sR - sF + 1048575) % 1048575;
			if (sF = sM.sR, !(fR <= (k2 = Math.max(k2, 0)))) {
				for (var sS = document.createDocumentFragment(), aC = k2; aC < fR; aC++) sT(sS, bq.lb.sU(sQ[aC], bq.lb.sV(sQ[aC])));
				s4.appendChild(sS), sW()
			}
		}, this.sX = function(s) {
			var sS = document.createDocumentFragment();
			sT(sS, s), s4.appendChild(sS), sW()
		}, this.show = function(rE) {
			rE.appendChild(s3), rE.appendChild(s5), this.resize(rE)
		}, this.sa = function(rE) {
			u.removeChild(rE, s3), u.removeChild(rE, s5)
		}, this.resize = function(rE) {
			sC = rE ? rE.offsetHeight : sC;
			var rE = bD.rK.sc(.04, .75),
				sd = Math.max(rE, sC - rE),
				se = i.j / i.l,
				sf = .7 * se,
				sg = bD.rK.rT(sC - rE - sd),
				sd = (s5.style.height = bD.rK.rT(rE), s3.style.height = bD.rK.rT(sd), i.k > i.j || a1.a2.ia() ? (s5.style.top = sg, s3.style.top = bD.rK.rT(sC - sd), bD.rK.rU(s3, 8)) : (s3.style.top = sg, s5.style.top = bD.rK.rT(sC - rE), bD.rK.rU(
						s3, 2)), this.s7.e.style.width = bD.rK.rT(sf), this.s7.e.style.fontSize = sB.button.style.fontSize = bD.rK.rT(.5 * rE), bD.rK.rU(this.s7.e, 6), sB.button.style.left = bD.rK.rT(sf), sB.button.style.width = bD.rK.rT(se - sf),
					.385 * rE);
			a1.a2.ia() && (sd *= .8 - .12 * (i.j > i.k)), s4.style.marginLeft = s4.style.marginRight = bD.rK.rT(.5 * sd), s4.style.fontSize = bD.rK.rT(sd), sW(1)
		}, (self = this).s7.e.sG = 127, s3.style.position = "absolute", s3.style.left = "0", s3.style.width = "100%", s3.style.overflowX = "hidden", s3.style.overflowY = "auto", s3.style.font = "inherit", s3.style.backgroundColor = bE.oL, s3
		.addEventListener("scroll", function() {
			sE = s3.scrollTop, sD = sE < s3.scrollHeight - s3.clientHeight - 2 ? 0 : 1
		}), s4.style.font = "inherit", s5.style.position = "absolute", s5.style.left = "0", s5.style.width = "100%", self.s7.e.setAttribute("placeholder", L(13)), self.s7.e.style.position = "absolute", self.s7.e.style.top = "0", self.s7.e.style
		.left = "0", self.s7.e.style.height = "100%", self.s7.e.style.backgroundColor = bE.oI, self.s7.e.style.textAlign = "center", (sB = new x(L(14), s9)).button.top = "0", sB.button.style.position = "absolute", sB.button.style.height = "100%", sB
		.re(bE.pc), s6 = new sH("127", sB.button, 1, 1), s3.appendChild(s4), s5.appendChild(self.s7.e), s5.appendChild(sB.button)
}

function si(sj, rV, sk) {
	function click() {
		var value = 1 - sj.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + rV, void 0 !== sj.eG ? bm.po.pp(sj.eG, value) : sj.value = value, sk && sk(value)
	}
	var e;
	rV = rV || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sj.value ? "🟩 " : "⬜ ") + rV, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sl(rE, r7) {
	var qz = document.createElement("div");
	this.rG = qz, this.resize = function() {
		qz.style.padding = bD.rK.rT(bf.rQ), qz.style.lineHeight = bD.rK.rT(bD.rK.sc(.035))
	}, rE.style.overflowX = "hidden", rE.style.overflowY = "auto", qz.innerHTML = r7, rE.appendChild(qz)
}

function sm(sn) {
	var qz = document.createElement("div");
	this.e = qz, this.so = sn, this.resize = function() {
		for (var fR = sn.length, aC = 1; aC < fR; aC++) bD.rK.rU(sn[aC], 4)
	};
	var aC, fR = sn.length;
	for (qz.style.width = "100%", qz.style.height = "2.7em", qz.style.marginTop = "0.6em", qz.style.border = "inherit", aC = 0; aC < fR; aC++) sn[aC].style.verticalAlign = "top", sn[aC].style.width = (100 / fR).toFixed(2) + "%", sn[aC].style.height =
		"100%", sn[aC].style.fontSize = "0.75em", qz.appendChild(sn[aC])
}

function sp(sq, rX, sr) {
	this.qz = document.createElement("div"), this.rt = sq;
	var ss = 0;
	this.resize = function(rE, su) {
		var fR = sq.length;
		if (!sr)
			for (var aC = 1; aC < fR; aC++) bD.rK.rU(sq[aC].button, 4);
		for (var sv = 0, aC = 0; aC < fR; aC++) sv += sq[aC].button.offsetWidth;
		if (rE && (ss = rE.offsetWidth), su && sv < ss)
			for (aC = 0; aC < fR; aC++) sq[aC].button.style.width = (100 * sq[aC].button.offsetWidth / sv).toFixed(2) + "%";
		else
			for (aC = 0; aC < fR; aC++) sq[aC].button.style.width = "auto";
		su || this.resize(rE, 1)
	};
	var st = this;
	st.qz.style.height = st.qz.style.maxHeight = "100%";
	for (var aC = 0; aC < sq.length; aC++) sq[aC].re(rX), sq[aC].button.style.height = "100%", sq[aC].button.style.padding = "0.0em 0.9em", sq[aC].button.style.whiteSpace = "pre", st.qz.appendChild(sq[aC].button)
}

function sw() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.rK.rU(this.e, 8, bE.oW)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sx() {
	var t2, t3, sy = document.createElement("div"),
		sz = document.createElement("div"),
		t0 = 0,
		t1 = 0;
	this.show = function(fY, fa, r1, t4, t5, ei) {
			if (t0) {
				if (!t4) return;
				this.sa()
			}
			fY === fa && -1 === fY ? (fY = t2, fa = t3) : (t2 = fY, t3 = fa);
			var t6 = Math.floor(bD.rK.sc(.018)),
				t5 = (fY = Math.max(t6 + 2, fY), t5 || (t1 = t4), t0 = 1, i.j / i.l),
				t4 = (sy.style.whiteSpace = "pre", sy.textContent = r1, bD.rK.rU(sy, 5), sy.style.font = bD.rK.t8(0, bD.rK.sc(.015)), sy.style.padding = "0.3em 0.6em", sy.style.left = fY + "px", sy.style.top = "0px", document.body.appendChild(sy),
					fY + sy.offsetWidth - t5),
				r1 = (0 < t4 && (fY -= t4, fY = Math.max(t6 + 1, fY), sy.style.left = fY + "px", fY < t6 + 2) && (sy.style.whiteSpace = "pre-wrap"), sy.offsetHeight);
			sy.style.top = fa - r1 + t1 * bf.tA + "px", fY -= t6, sz.style.backgroundColor = bD.color.oF(ei >> 12 << 2, (ei >> 6 & 63) << 2, (63 & ei) << 2), sz.style.left = fY + "px", sz.style.top = sy.style.top, sz.style.width = t6 + "px", sz.style
				.height = r1 + "px", bD.rK.rU(sz, 4), bD.rK.rU(sz, 8), bD.rK.rU(sz, 2), document.body.appendChild(sz)
		}, this.sa = function(tB) {
			if (t0) {
				if (tB && t1) return 0;
				t0 = 0, u.removeChild(document.body, sy), u.removeChild(document.body, sz)
			}
			return 1
		}, sy.style.position = "absolute", sy.style.backgroundColor = bE.oJ, sy.style.color = bE.oN, sy.style.pointerEvents = "none", sy.style.zIndex = "5", sy.style.maxWidth = "100%", sz.style.position = "absolute", sz.style.color = bE.oN, sz.style
		.pointerEvents = "none", sz.style.zIndex = "5"
}

function s8(tC, type, tD, tE) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.tF++, e.value = tC.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.oN, e.style.backgroundColor = bE.oG, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.tG++
		}), e.addEventListener("blur", function() {
			i.tG--, -1 !== tC.eG && bm.po.pp(tC.eG, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== tC.eG && bm.po.pp(tC.eG, e.value), tD ? tD() : e.blur())
		}), tE && e.addEventListener("input", function(rC) {
			tE(rC)
		})
}

function tH(rE, data, tI) {
	var fR = data.tJ.length,
		tK = document.createElement("div"),
		tL = document.createElement("div"),
		tM = document.createElement("div"),
		tN = new Array(fR),
		rF = new Array(fR),
		tO = new Array(data.tP.length),
		tQ = bD.color.oH(70, 70, 0, .35);

	function rp() {
		this.style.backgroundColor = bD.color.rp(tQ, 160)
	}

	function tX() {
		this.style.backgroundColor = tQ
	}

	function rN() {
		var fk;
		for (rE.style.font = bD.rK.t8(0, bD.rK.tg(.026, .5, .03)), aC = 1; aC < tO.length; aC++) bD.rK.rU(tO[aC], 4);
		if (bD.rK.rU(tK, 2), fR) {
			for (var ht, th = tK.offsetWidth, ti = tM.offsetWidth, aC = 0; aC < tO.length; aC++) ht = .01 * data.tW[aC] * ti, tO[aC].style.width = (100 * ht / th).toFixed(2) + "%";
			var lh = data.tJ[0].length;
			for (aC = 0; aC < fR; aC++)
				for (bD.rK.rU(tN[aC], 2), fk = 1; fk < lh; fk++) bD.rK.rU(rF[aC][fk], 4);
			tL.tR && (tL.scrollTop = tL.tR)
		}
	}
	this.resize = function() {
			rN(), rN()
		}, rE.style.display = "flex", rE.style.flexDirection = "column", tL.style.overflowX = "hidden", tL.style.overflowY = "auto", tL.addEventListener("scroll", function() {
			this.tR = this.scrollTop, tI && tI.tS && (u.z.tT[tI.tS] = this.scrollTop)
		}),
		function() {
			var fU, aC, tJ = data.tJ,
				lh = fR ? tJ[0].length : 0;
			for (aC = 0; aC < fR; aC++) {
				tN[aC] = document.createElement("div"), tN[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.oH(130, 130, 130, .35) : bE.oM
				}(aC), tN[aC].style.width = "100%", tN[aC].style.display = "flex", rF[aC] = new Array(lh);
				for (var fk = 0; fk < lh; fk++) rF[aC][fk] = fU = document.createElement("div"), fU.style.display = "flex", fU.style.justifyContent = "center", fU.style.wordBreak = "break-all", fU.style.padding = "0.4em 0em", fU.style.width = data
					.tW[fk] + "%", fU.textContent = tJ[aC][fk].ft, 1 === tJ[aC][fk].eZ && (fU.name = "" + aC, fU.style.color = bE.pN, fU.style.backgroundColor = tQ, fU.addEventListener("mouseover", rp), fU.addEventListener("mouseout", tX), function(
						fU, tZ, ta) {
						2147483647 !== ta && fU.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, tZ), bK.di(bG.aD), this.style.backgroundColor = tQ, u.v(8, u.tb, new tc(25, {
								action: 0,
								tZ: bI.td.te(bI.td.tf(5)),
								ta: ta
							}))
						})
					}(fU, tJ[aC][fk].tZ, tJ[aC][fk].ta)), tN[aC].appendChild(fU)
			}
			for (tK.style.display = "flex", tK.style.backgroundColor = bD.color.oH(0, 120, 0, .35), aC = 0; aC < tO.length; aC++) tO[aC] = fU = document.createElement("div"), fU.style.display = "flex", fU.style.justifyContent = "center", fU.style
				.wordBreak = "break-all", fU.style.padding = "0.4em 0em", fU.style.width = data.tW[aC] + "%", fU.innerHTML = data.tP[aC], tK.appendChild(fU)
		}();
	for (var aC = 0; aC < fR; aC++) tM.appendChild(tN[aC]);
	tL.appendChild(tM), rE.appendChild(tK), rE.appendChild(tL), tI && tI.tS && (tL.tR = u.z.tT[tI.tS])
}

function tj() {
	var tn, tp, tk = document.createElement("div"),
		tl = document.createElement("div"),
		tm = document.createElement("div"),
		tM = document.createElement("div"),
		rt = [],
		eB = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		tq = [1, 2, 3, 0, 9, 10, 11, 13];

	function ts(aC) {
		u.v(8, 0, new tc(21, {
			tu: tq[aC],
			tv: 0,
			tw: 10
		}))
	}
	this.show = function() {
			this.pp(u.z.tx), document.body.appendChild(tk)
		}, this.sa = function() {
			u.removeChild(document.body, tk)
		}, this.pp = function(tx) {
			for (var ty = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < rt.length; aC++) {
				var j = tx[aC];
				tn[ty[aC]][1].sI.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, tz = bf.gap,
				k = bD.rK.u0(.085),
				j = Math.min(4 * k, i.j - 2 * tz),
				fR = rt.length;
			for (bD.rK.u1(tk, tz, i.k - tz - k, j, k), bD.rK.rU(tk), bD.rK.rU(tl, 6), aC = 0; aC < fR - 1; aC++) bD.rK.rU(rt[aC].button, 6);
			for (aC = 0; aC < fR; aC++) tn[aC][0].resize(), tn[aC][1].resize();
			for (rt[0].fY = 0, rt[0].button.style.left = bD.rK.rT(rt[0].fY), rt[0].button.style.width = bD.rK.u2(1.7 * k), aC = 1; aC < fR; aC++) rt[aC].fY = rt[aC - 1].fY + rt[aC - 1].button.offsetWidth, rt[aC].button.style.left = bD.rK.rT(rt[aC]
				.fY);
			if (!tp) {
				if (!ac.u3()) return;
				(tp = ac.get(14)).style.width = "24%", tp.style.position = "absolute", tl.appendChild(tp)
			}
			tp.style.left = bD.rK.rT(0), tp.style.top = "7%", tm.u4 && (tm.scrollLeft = tm.u4)
		}, tk.style.position = "absolute", tl.style.width = "25%", tl.style.height = "100%", tl.style.backgroundColor = bE.oJ, tm.style.position = "absolute", tm.style.width = "75%", tm.style.height = "100%", tm.style.backgroundColor = bE.oJ, tm
		.style.top = tm.style.right = bD.rK.rT(0), bD.rK.tr(tm), tM.style.height = tM.style.maxHeight = "100%", rt.push(new x("", function() {
			ts(0)
		}, bE.p8)), rt.push(new x("", function() {
			ts(1)
		}, bE.p9)), rt.push(new x("", function() {
			ts(2)
		}, bE.p1)), rt.push(new x("", function() {
			ts(3)
		}, bE.om)), rt.push(new x("", function() {
			ts(4)
		}, bE.pY)), rt.push(new x("", function() {
			ts(5)
		}, bE.pU)), rt.push(new x("", function() {
			ts(6)
		}, bE.pY)), rt.push(new x("", function() {
			ts(7)
		}, bE.oE)), tn = new Array(rt.length);
	for (var aC = 0; aC < rt.length; aC++) rt[aC].button.style.position = "absolute", tn[aC] = [new tt(eB[aC], rt[aC].button, .25, .45), new tt("", rt[aC].button, .53, .84, 1)], rt[aC].button.style.height = rt[aC].button.style.maxHeight = "100%", rt[
		aC].button.top = bD.rK.rT(0), tM.appendChild(rt[aC].button);
	tm.appendChild(tM), tk.appendChild(tl), tk.appendChild(tm)
}

function u5(u6, u7, u8, u9, s1, s2) {
	var uA = document.createElement("div"),
		uB = document.createElement("div"),
		uC = document.createElement("div"),
		uD = document.createElement("div"),
		uE = document.createElement("div"),
		uF = document.createElement("div"),
		uG = document.createElement("div"),
		uH = document.createElement("div"),
		uI = document.createElement("span"),
		uJ = document.createElement("div");
	this.uK = new s0(s1, s2), this.uL = new uM(s2), this.uN = [u6, u7, u8, u9], this.uR = function(uS) {
		uS = (uS / 10).toFixed(1) + "%";
		uH.style.width = uS, uI.innerHTML = uS
	}, this.uT = function() {
		this.uL.sa(uF), this.uK.show(uF)
	}, this.uU = function() {
		this.uK.sa(uF), this.uL.show(uF)
	}, this.uV = function() {
		return uB
	}, this.show = function() {
		document.body.appendChild(uA)
	}, this.sa = function() {
		u.removeChild(document.body, uA)
	}, this.resize = function(uW) {
		var uX = 1 - .4 * a1.a2.ia() * (i.j > 1.6 * i.k),
			uY = bD.rK.sc(.05 * uX),
			uZ = i.k > i.j,
			ua = bD.rK.sc(.06 * uX + .03 * uZ),
			ub = bD.rK.sc(.08 * uX + .03 * uZ),
			uc = bD.rK.sc(.04 + .02 * uZ),
			uZ = bD.rK.sc(.02 * uX + .01 * uZ),
			ue = bD.rK.sc(.025);
		uA.style.font = bD.rK.t8(0, ue), uE.style.font = bD.rK.t8(0, .9 * ue), uJ.style.font = bD.rK.t8(0, .9 * ue), uX < 1 && (ue = bD.rK.t8(0, uX * ue), uC.style.font = ue, uE.style.font = ue, uJ.style.font = ue, uG.style.font = ue, uD.style
				.font = ue), uB.style.height = bD.rK.rT(uY), uB.style.font = bD.rK.t8(0, .72 * uY), bD.rK.rU(uB, 2), uC.style.top = bD.rK.rT(uY), uC.style.height = bD.rK.rT(ub), bD.rK.rU(uC, 2), uD.style.font = bD.rK.t8(0, uX * bD.rK.sc(.02)), uD
			.style.top = bD.rK.rT(uY + ub), uD.style.height = bD.rK.rT(uc), bD.rK.rU(uD, 2), uE.style.top = bD.rK.rT(uY + ub + uc), uE.style.height = bD.rK.rT(ua), bD.rK.rU(uE, 2), uF.style.top = bD.rK.rT(uY + ub + uc + ua), uF.style.height = bD
			.rK.rT(i.k / i.l - uY - ub - 2 * ua - uc - uZ), uG.style.top = bD.rK.rT(i.k / i.l - ua - uZ), uG.style.height = bD.rK.rT(uZ), bD.rK.rU(uG, 8), uI.style.font = bD.rK.t8(0, .8 * uZ), uJ.style.top = bD.rK.rT(i.k / i.l - ua), uJ.style
			.height = bD.rK.rT(ua), bD.rK.rU(uJ, 8), u6.resize(uC), u7.resize(uC), u8.resize(uC), u9.resize(uC), uW ? this.uK.resize(uF) : this.uL.resize()
	};
	s1 = this;
	uA.style.position = "absolute", uA.style.top = "0", uA.style.left = "0", uA.style.width = "100%", uA.style.height = "100%", uA.style.backgroundColor = bE.oM, bM.rm() || (uA.style.backdropFilter = "blur(4px)", uA.style.webkitBackdropFilter =
		"blur(4px)"), uB.style.position = "absolute", uB.style.top = "0", uB.style.left = "0", uB.style.width = "100%", uB.style.display = "flex", uB.style.alignItems = "center";
	for (var h = [uC, uD, uE, uJ], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.rK.tr(h[aC]);
	uF.style.position = "absolute", uF.style.left = "0", uF.style.width = "100%", uF.style.font = "inherit", uG.style.position = "absolute", uG.style.left = "0", uG.style.width = "100%", uH.style.position = "absolute", uH.style.top = "0", uH.style
		.left = "0", uH.style.height = "100%", uH.style.width = "50%", uH.style.backgroundColor = bE.ok, uI.innerHTML = "", uI.style.position = "absolute", uI.style.top = "50%", uI.style.left = "50%", uI.style.transform = "translate(-50%, -50%)", uB
		.appendChild(function() {
			var uQ = document.createElement("h1");
			return uQ.textContent = L(24), uQ.style.margin = "0 auto 0.15em auto", uQ.style.fontFamily = "Arial Black, system-ui", uQ.style.fontSize = "inherit", uQ.style.fontWeight = "inherit", uQ
		}()), uC.appendChild(u6.qz), uD.appendChild(u7.qz), uE.appendChild(u8.qz), uG.appendChild(uH), uG.appendChild(uI), uJ.appendChild(u9.qz), uA.appendChild(uB), uA.appendChild(uC), uA.appendChild(uD), uA.appendChild(uE), uA.appendChild(uF), uA
		.appendChild(uG), uA.appendChild(uJ), s1.uL.show(uF)
}

function uM(s2) {
	var uA = document.createElement("div"),
		uF = document.createElement("div");
	this.n9 = function() {
			uF.textContent = "", bq.ug.uh && bq.ug.sa(1);
			for (var sS = document.createDocumentFragment(), ui = bq.z.sN[0], uj = bq.uj.uk[ui], ul = bq.uj.ul[ui], aC = 0; aC < uj.length; aC++) ! function(sS, rC, un, ui) {
				var sI = document.createElement("span");
				sI.textContent = (un ? "🟢 " : "⚪ ") + bq.lb.uo(rC, ui), sI.style.color = bq.lb.up(rC.uq), 11 === rC.uq && (sI.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				sI.style.cursor = "pointer", sI.style.margin = "0.2em 0.2em 0.2em 0.2em", sI.style.width = sI.style.maxWidth = 2 === ui ? "10em" : "9em", sI.style.height = sI.style.maxHeight = "1.4em", sI.style.whiteSpace = "nowrap", sI.style
					.overflow = "hidden", sI.style.textOverflow = "ellipsis", sI.style.font = "inherit", sI.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (un = __fx.utils.getDuplicateIpHighlightColor(rC, bq.uj.uk[ui],
						"aES")) && (sI.style.backgroundColor = un, sI.style.borderRadius = "0.3em");
				bq.lb.ur(rC) && (sI.style.textDecoration = "underline"), rC.us && (sI.style.textDecorationLine = "underline", sI.style.textDecorationStyle = "dotted");
				sI.onclick = function(e) {
					s2(e, rC)
				}, bM.rm() || (sI.onmouseover = function(e) {
					bq.ug.ut(e.target, rC, 1)
				}), sS.appendChild(sI)
			}(sS, uj[aC], aC < ul, ui);
			uF.appendChild(sS)
		}, this.show = function(rE) {
			rE.appendChild(uA)
		}, this.sa = function(rE) {
			u.removeChild(rE, uA)
		}, this.resize = function() {
			uF.style.fontSize = bD.rK.rT(bD.rK.sc(.02, .3))
		}, uA.style.top = "0", uA.style.left = "0", uA.style.width = uA.style.height = "100%", uA.style.overflowX = "hidden", uA.style.overflowY = "auto", uA.style.font = "inherit", uF.style.font = "inherit", uF.style.margin = "0.4em", uA
		.appendChild(uF)
}

function uu(uv) {
	var uA = document.createElement("div"),
		s5 = document.createElement("div"),
		uw = [];

	function rh() {
		bM.rm() || (this.style.backgroundColor = bD.color.rp(bE.oJ, 50))
	}

	function ri() {
		this.style.backgroundColor = bE.oJ
	}
	this.pp = function(uy, uz) {
			uw[2].textContent = uy + 1 + " / " + uz
		}, this.show = function(rC) {
			rC = bq.lb.sU(rC, bq.lb.sV(rC)), s5.appendChild(bq.sZ.transform(rC)), document.body.appendChild(uA)
		}, this.resize = function() {
			var k = bD.rK.sc(.03, .5);
			uA.style.width = 10 * k + "px", uA.style.font = bD.rK.t8(1, .75 * k), bD.rK.rU(uA, 4), s5.style.top = k + "px", s5.style.font = bD.rK.t8(0, .55 * k), bD.rK.rU(s5, 2), uA.style.height = k + s5.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.rK.rU(uw[aC], 6), uw[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) uw[aC].style.height = k + "px", bD.rK.rU(uw[aC], 2);
			uw[2].style.width = 4 * k + "px", uw[1].style.left = 2 * k + "px", uw[2].style.left = 4 * k + "px", uw[3].style.left = 8 * k + "px"
		}, this.v0 = function() {
			for (var aC = 0; aC < 4; aC++) uw[aC].onclick = null, uw[aC].onmouseover = null, uw[aC].onmouseout = null;
			u.removeChild(document.body, uA), uA = s5 = uw = null
		}, uA.style.position = "absolute", uA.style.color = bE.oN, uA.style.zIndex = "3", uA.style.right = "0", uA.style.top = "0", s5.style.position = "absolute", s5.style.height = "auto", s5.style.color = bE.oN, s5.style.backgroundColor = bE.oJ, s5
		.style.left = "0", s5.style.width = "100%", s5.style.overflowWrap = "break-word", uA.appendChild(s5);
	for (var aC = 0; aC < 4; aC++) uw[aC] = document.createElement("div"), uw[aC].style.position = "absolute", uw[aC].style.backgroundColor = bE.oJ, uw[aC].style.color = bE.oN, uw[aC].style.top = "0", uw[aC].style.display = "flex", uw[aC].style
		.justifyContent = "center", uw[aC].style.alignItems = "center", uw[aC].style.userSelect = "none", uw[aC].style.outline = "none", uw[aC].style.font = "inherit", 2 !== (uw[aC].ux = aC) && (uw[aC].onclick = uv, uw[aC].onmouseover = rh, uw[aC]
			.onmouseout = ri), uA.appendChild(uw[aC]);
	uw[0].textContent = "◀", uw[1].textContent = "▶", uw[3].textContent = "✖"
}

function v1(uv) {
	var sy = document.createElement("div");

	function rh() {
		bM.rm() || (sy.style.backgroundColor = bD.color.rp(bE.oJ, 50))
	}

	function ri() {
		sy.style.backgroundColor = bE.oJ
	}
	this.pp = function(uz) {
			sy.textContent = uz
		}, this.show = function() {
			document.body.appendChild(sy)
		}, this.resize = function() {
			var k = bD.rK.sc(.03, .5);
			sy.style.width = 2 * k + "px", sy.style.height = k + "px", sy.style.font = bD.rK.t8(1, .75 * k), bD.rK.rU(sy, 4), bD.rK.rU(sy, 2)
		}, this.v0 = function() {
			sy.onclick = null, sy.onmouseover = null, sy.onmouseout = null, u.removeChild(document.body, sy), sy = null
		}, sy.style.position = "absolute", ri(), sy.style.color = bE.oN, sy.style.zIndex = "3", sy.style.right = "0", sy.style.top = "0", sy.style.display = "flex", sy.style.justifyContent = "center", sy.style.alignItems = "center", sy.style
		.userSelect = "none", sy.style.outline = "none", sy.onclick = uv, sy.onmouseover = rh, sy.onmouseout = ri
}

function v2(sq) {
	var uA = document.createElement("div"),
		v3 = document.createElement("div"),
		t0 = (this.fY = 0, this.fa = 0);

	function v5() {
		bq.v6.sa()
	}
	this.rt = sq, this.show = function(fY, fa, v8) {
		if (t0) return [0, 0];
		t0 = 1, this.fY = fY, this.fa = fa,
			function(self, v8) {
				var j = bD.rK.sc(.16, .7),
					k = sq.length * j / 3,
					vA = i.j / i.l,
					vB = i.k / i.l,
					nz = Math.min(1, Math.min(vA / j, vB / k));
				j *= nz, k *= nz, v8 && (self.fY += bD.rK.sc(.03, .5)), self.fY = bO.iZ(self.fY, 0, vA - j), self.fa = bO.iZ(self.fa, 0, vB - k), v3.style.left = self.fY + "px", v3.style.top = self.fa + "px", v3.style.width = j + "px", v3.style
					.height = k + "px", v3.style.font = bD.rK.t8(0, .3 * k / sq.length), bD.rK.rU(v3, 5);
				for (var aC = 1; aC < sq.length; aC++) bD.rK.rU(sq[aC].button, 8)
			}(this, v8), document.body.appendChild(uA)
	}, this.sa = function() {
		t0 && (t0 = 0, uA.removeEventListener("click", v5), u.removeChild(document.body, uA))
	};
	for (var aC = 0; aC < sq.length; aC++) new sH("" + (1 + aC), sq[aC].button, 0, 1);
	uA.style.position = "fixed", uA.style.top = "0", uA.style.left = "0", uA.style.width = "100%", uA.style.height = "100%", uA.style.zIndex = "5", v3.style.position = "absolute",
		function() {
			for (var v7 = (100 / sq.length).toFixed(2) + "%", aC = 0; aC < sq.length; aC++) sq[aC].button.style.width = "100%", sq[aC].button.style.height = sq[aC].button.style.maxHeight = v7, sq[aC].button.style.padding = "0.0em 0.9em", v3
				.appendChild(sq[aC].button)
		}(), uA.appendChild(v3), uA.addEventListener("click", v5)
}

function ej() {
	var vC, vD, vE;

	function vL(aC) {
		return bD.color.oF(vD[aC][0], vD[aC][1], vD[aC][2])
	}

	function vR(fk, fl) {
		return bD.color.vb(vD[fk], vD[fl]), vL(fl)
	}

	function vJ() {
		vC && (vC.remove(), vC = null)
	}
	this.show = function(ek, colors, id) {
		0 <= (vE = id) && b1.z.ee(0) && b1.ef.vF(0, id), ek = (ek = (ek = (ek = (ek = (ek = (ek = (ek = (ek = (ek = (ek = (ek = ek.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			vD = colors, (vC = document.createElement("div")).style.position = "fixed", vC.style.top = "0", vC.style.left = "0", vC.style.width = "100%", vC.style.height = "100%", vC.style.backgroundColor = bD.color.oH(vD[0][0], vD[0][1], vD[0][
				2], .6), vC.style.zIndex = "6", vC.onclick = function(e) {
				e.target === vC && vJ()
			},
			function(ek) {
				var iN, vK = document.createElement("div");
				vK.style.position = "absolute", vK.style.display = "flex", vK.style.flexDirection = "column", vK.style.top = "50%", vK.style.left = "50%", vK.style.backgroundColor = vL(2), iN = a1.a2.ia() ? bD.rK.vM(i.min) : bD.rK.sc(.4);
				iN = Math.max(iN, 200), vK.style.width = bD.rK.rT(iN), vK.style.height = bD.rK.rT(iN), vK.style.transform = "translate(-50%, -50%)",
					function(vK, iN) {
						var vQ = document.createElement("div");
						vQ.style.flex = "0 0 10%", vQ.style.overflow = "hidden", vQ.style.backgroundColor = vL(1), vQ.style.color = vR(1, 7), vQ.style.font = bD.rK.t8(1, .05 * iN), vQ.style.display = "flex", vQ.style.alignItems = "center", vQ
							.style.justifyContent = "center", vQ.innerHTML = L(25), vK.appendChild(vQ)
					}(vK, iN),
					function(vK, ek, iN) {
						var vS = document.createElement("div");
						vS.style.flex = "0 0 70%", vS.style.overflowY = "auto", vS.style.overflowX = "hidden", vS.style.whiteSpace = "pre-wrap", vS.style.wordWrap = "break-word", vS.style.padding = bD.rK.rT(.02 * iN), vS.style.backgroundColor =
							vL(2), vS.style.color = vR(2, 8), vS.style.font = bD.rK.t8(0, .07 * iN), vS.innerHTML = ek, vS.innerHTML = "<style>a { color: inherit; }</style>" + vS.innerHTML, vK.appendChild(vS)
					}(vK, ek, iN),
					function(vK, iN) {
						var vT = document.createElement("div"),
							vU = (vT.style.display = "flex", vT.style.flexDirection = "row", vT.style.justifyContent = "space-between", vT.style.alignItems = "stretch", vT.style.backgroundColor = vL(3), vT.style.flex = "1", vT.style.padding = bD
								.rK.rT(.01 * iN), vT.style.gap = bD.rK.rT(.01 * iN), document.createElement("div")),
							vV = (vU.style.flex = "0 0 60%", vU.style.height = "100%", new x(L(26, 0, 0, 1), function() {
								vJ()
							}, vL(4), !1)),
							vV = (vV.button.style.width = "100%", vV.button.style.height = "100%", vV.button.style.color = vR(4, 9), vV.button.style.font = bD.rK.t8(1, .05 * iN), vU.appendChild(vV.button), document.createElement("div")),
							vX = (vV.style.flex = "0 0 15%", vV.style.height = "100%", vV.style.backgroundColor = vL(5), document.createElement("div")),
							vY = (vX.style.flex = "1", vX.style.height = "100%", new x(L(27), function(e) {
								return bD.rK.vZ(e), vE < 0 || b1.z.ee(0) && (b1.ef.vF(1, vE), vE = -1), !0
							}, vL(6), !1));
						vY.button.style.width = "100%", vY.button.style.height = "100%", vY.button.style.color = vR(6, 10), vY.button.style.font = bD.rK.t8(1, .035 * iN), vX.appendChild(vY.button), vT.appendChild(vU), vT.appendChild(vV), vT
							.appendChild(vX), vK.appendChild(vT)
					}(vK, iN), vC.appendChild(vK)
			}(ek), document.body.appendChild(vC)
	}
}

function vc(tC, vd) {
	this.rA = [];
	var ve = this.rA;

	function click() {
		for (var aC = 0; aC < ve.length; aC++) ve[aC].textContent = ve[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eG = parseInt(this.name);
		void 0 !== tC.eG && bm.po.pp(tC.eG, eG), vd && vd(eG)
	}
	for (var vf, fR = tC.tI.length, aC = 0; aC < fR; aC++)(vf = document.createElement("p")).textContent = "⚪ " + tC.tI[aC], vf.style.margin = "0", vf.name = "" + aC, vf.style.cursor = "pointer", vf.style.fontSize = "1em", vf.addEventListener(
		"click", click), ve.push(vf);
	ve[tC.value].textContent = ve[tC.value].textContent.replace("⚪", "🟢")
}

function vg(title, vh, vi) {
	var tk = document.createElement("div"),
		vj = document.createElement("div"),
		tM = document.createElement("div"),
		vk = document.createElement("div"),
		vl = document.createElement("div");
	this.vm = tM, this.vn = vh, this.show = function() {
			!1 !== vi ? document.body.appendChild(tk) : (document.body.appendChild(vj), document.body.appendChild(vk))
		}, this.sa = function() {
			!1 !== vi ? u.removeChild(document.body, tk) : (u.removeChild(document.body, vj), u.removeChild(document.body, vk))
		}, this.vr = function() {
			var sd = bD.rK.sc(.1),
				sb = bD.rK.sc(.08 + .04 * (i.vs < 1), .3);
			return {
				sd: sd,
				sb: sb,
				vt: i.k / i.l - sd - sb
			}
		}, this.resize = function(su) {
			var fR = vh.length,
				vu = this.vr(),
				sd = vu.sd,
				sb = vu.sb;
			for (vj.style.height = bD.rK.rT(sd), bD.rK.rU(vj, 2), vk.style.top = bD.rK.rT(i.k / i.l - sb), vk.style.height = bD.rK.rT(sb), bD.rK.rU(vk, 8), tM.style.top = bD.rK.rT(sd), tM.style.height = tM.style.maxHeight = bD.rK.rT(vu.vt), vj.style
				.font = bD.rK.t8(0, bD.rK.sc(.02, .15)), vk.style.font = bD.rK.t8(0, bD.rK.sc(.02, .7)), tM.style.font = bD.rK.t8(0, bD.rK.sc(.02, .35)), aC = 1; aC < fR; aC++) bD.rK.rU(vh[aC].button, 4);
			for (var sv = 0, aC = 0; aC < fR; aC++) sv += vh[aC].button.offsetWidth;
			if (su && sv < vk.offsetWidth)
				for (aC = 0; aC < fR; aC++) vh[aC].button.style.width = (100 * vh[aC].button.offsetWidth / sv).toFixed(2) + "%";
			else
				for (aC = 0; aC < fR; aC++) vh[aC].button.style.width = "auto";
			vk.u4 && (vk.scrollLeft = vk.u4), su || this.resize(!0)
		}, this.vv = function() {
			var vu = this.vr(),
				ei = i.l;
			vw.fillStyle = bE.oJ, vw.fillRect(0, ei * vu.sd, i.j, ei * vu.vt)
		}, tk.style.position = "absolute", tk.style.top = "0", tk.style.left = "0", tk.style.width = "100%", tk.style.height = "100%", vj.style.position = "absolute", vj.style.top = "0", vj.style.left = "0", vj.style.width = "100%", vj.style
		.display = "flex", vj.style.backgroundColor = bE.oJ, vk.style.position = "absolute", vk.style.left = "0", vk.style.width = "100%", bD.rK.tr(vk), vl.style.height = vl.style.maxHeight = "100%", tM.style.position = "absolute", tM.style.width =
		"100%", tM.style.backgroundColor = bE.oJ,
		function() {
			for (var aC = 0; aC < vh.length; aC++) vh[aC].button.style.height = "100%", vh[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < vh.length; aC++) vl.appendChild(vh[aC].button);
	vj.appendChild(function() {
		var vq = document.createElement("h1");
		return vq.textContent = title, vq.style.margin = "auto", vq.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", vq.style.fontFamily = "Arial Black, system-ui", vq
	}()), vk.appendChild(vl), !1 !== vi && (tk.appendChild(tM), tk.appendChild(vj), tk.appendChild(vk))
}

function sH(vx, vy, vz, w0) {
	var self;
	this.sI = document.createElement("span"), (self = this).sI.textContent = vx, self.sI.style.color = bE.oN, self.sI.style.position = "absolute", self.sI.style.font = "inherit", w0 ? self.sI.style.bottom = "0.06em" : self.sI.style.top = "0.12em",
		vz ? self.sI.style.left = "0.2em" : self.sI.style.right = "0.2em", self.sI.style.fontSize = "0.6em", self.sI.style.pointerEvents = "none", self.sI.style.whiteSpace = "pre", vy.style.position = "relative", vy.style.overflow = "hidden", vy
		.appendChild(self.sI)
}

function tt(vx, vy, w1, w2, w3) {
	var self;
	this.sI = document.createElement("span"), this.resize = function() {
			this.sI.style.fontSize = ((w2 - w1) * vy.offsetHeight).toFixed(1) + "px"
		}, (self = this).sI.textContent = vx, self.sI.style.color = bE.oN, self.sI.style.font = "inherit", self.sI.style.margin = "0.1em 0.6em", self.sI.style.pointerEvents = "none", w3 && (self.sI.style.fontWeight = "bold"), self.sI.style
		.whiteSpace = "nowrap", self.sI.style.display = "block", vy.appendChild(self.sI)
}

function w4(w5, w6, w7, w8) {
	var w9 = document.createElement("textarea"),
		wA = (this.e = w9, !0);

	function wF() {
		w9.select(), document.execCommand("copy")
	}
	this.resize = function() {
			w6 && bD.rK.rU(w9, 5)
		}, this.wB = function(ek) {
			w9.value = ek
		}, this.wC = function() {
			return w9.value
		}, this.wD = function() {
			w9.select()
		}, this.clear = function() {
			w9.value = ""
		}, this.wE = function() {
			wA && navigator.clipboard ? (w9.select(), navigator.clipboard.writeText(w9.value).catch(function() {
				wA = !1, wF()
			})) : wF()
		}, w9.setAttribute("id", "textArea" + u.z.tF++), w9.setAttribute("autocomplete", "off"), w5 && w9.setAttribute("placeholder", w5), w9.style.top = "0", w9.style.left = "0", w9.style.width = "100%", w9.style.height = "100%", w9.style
		.userSelect = "none", w9.style.outline = "none", w9.style.resize = "none", w9.style.border = "none", w9.style.color = bE.oN, w9.style.backgroundColor = bE.oG, w8 ? (w9.style.fontSize = "1em", w9.rows = 6, w9.style.padding = "0.25em") : (w9
			.style.padding = "0.45em", w9.style.fontSize = "1.2em"), w7 && w9.addEventListener("input", function(e) {
			w7(e)
		}), w9.addEventListener("focus", function() {
			i.tG++
		}), w9.addEventListener("blur", function() {
			i.tG--
		})
}

function dN() {
	this.rb = new wG, this.eV = new wH, this.po = new wI, this.z = new wJ, this.wK = new wL, this.di = function() {
		this.eV.di(), (new wM).di(), this.wK.di(), this.z.wN()
	}
}

function wH() {
	function wO(aC, type, wU, e1) {
		bm.eV.data.push({
			eG: aC,
			type: type || 0,
			value: wU || 0,
			wU: wU || 0,
			e1: e1 || 0
		})
	}

	function wP(aC, type, wU, e1) {
		bm.eV.data.push({
			eG: aC,
			type: type,
			value: wU || "",
			wU: wU || "",
			e1: e1 || 0
		})
	}

	function wQ(o5) {
		for (var aC = bm.eV.data.length; aC < o5; aC++) bm.eV.data.push(null)
	}
	this.data = [], this.di = function() {
		wO(0, 1, 0, 5), wO(1, 1, 1), wO(2, 0), wP(3, 2), wO(4, 1), wP(5, 2, "system-ui", 2), wO(6, 0), wO(7, 0, 0), wO(8, 0), wO(9, 1, 1), wO(10, 1), wO(11, 1, 1), wP(12, 2, navigator.language), wO(13), wO(14), wO(15, 0, 1), wO(16, 0, 4), wQ(
			100), wP(100, 2), wP(101, 2), wP(102, 2), wP(103, 2), wP(104, 2), wP(105, 2), wP(106, 2), wO(107), wO(108), wO(109), wP(110, 2), wO(111), wO(112), wO(113), wP(114, 2), wO(115), wP(116, 2), wO(117, 1), wP(118, 2, "", 2), wO(119, 1, 0,
				1), wP(120, 2), wO(121, 1, ~~(262144 * Math.random())), wP(122, 2, "Player " + Math.floor(1e3 * Math.random())), wO(123), wP(124), wO(125, 1), wP(126, 2), wO(127, 0, 1), wO(128), wO(129), wO(130), wO(131), wO(132), wP(133, 2), wO(
				134, 0, 5), wP(135, 2), wP(136, 2), wO(137), wO(138), wO(139), wO(140), wO(141), wO(142), wO(143), wO(144), wP(145, 2), wO(146), wO(147), wP(148, 2), wO(149), wO(150, 0, 1), wP(151, 2), wO(152, 0, 5), wO(153, 1), wO(154, 1), wP(
				155, 2), wP(156, 2), wO(157), wO(158), wO(159), wO(160), wP(161, 2), wO(162, 0, 1024), wP(163, 2, "0,0,0"), wP(164, 2, "100,100,100"), wP(165, 2, "30,30,30"), wP(166, 2, "70,70,70"), wP(167, 2, "100,100,100"), wP(168, 2,
				"85,85,85"), wP(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) wP(170 + aC, 2, "255,255,255");
		wP(174, 2), wP(175, 2), wO(176, 0, 200), wQ(180), wO(180, 0), wO(181, 0), wO(182, 0, 1023), wP(183, 2)
	}, this.pp = function(eG, value) {
		this.data[eG].value = value
	}, this.wR = function(eG, value) {
		this.pp(eG, value);
		var value = String(value),
			fR = value.length;
		5e4 < fR ? console.log("storage value too large: index " + eG + " size " + fR) : (bm.rb.save(eG, value), bm.rb.save(eG, String(this.data[eG].e1), !0))
	}, this.wS = function(eG) {
		return Number(this.data[eG].value)
	}, this.wT = function(eG) {
		return String(this.data[eG].value)
	}
}

function wL() {
	var wV = [];

	function wY(tZ) {
		wV.unshift(tZ), bm.po.pp(161, wV.join(";"))
	}

	function ex(tZ) {
		for (var wa = wV, fR = wa.length, aC = 0; aC < fR; aC++)
			if (wa[aC] === tZ) return wa.splice(aC, 1), bm.po.pp(161, wa.join(";")), 1
	}
	this.di = function() {
		var r1 = bm.eV.data[161].value;
		r1.length && (wV = r1.split(";"))
	}, this.get = function() {
		return wV
	}, __fx.followedAccounts.setSource(this.get), this.wW = function() {
		return {
			tI: __fx.followedAccounts.decorate(wV),
			value: 0
		}
	}, this.us = function(tZ) {
		return bD.rS.has(wV, tZ)
	}, this.wX = function(tZ) {
		return ex(tZ) ? 0 : (wY(tZ), 1)
	}, this.n9 = function(tZ) {
		ex(tZ) && wY(tZ)
	}, this.wZ = function(eG) {
		eG < wV.length && (wV.splice(eG, 1), bm.po.pp(161, wV.join(";")))
	}
}

function wG() {
	this.wb = function(eG, e1) {
		return Number(this.wc(eG, e1))
	}, this.wc = function(eG, e1) {
		var ft = null;
		return 0 === a1.id ? a1.wd && (ft = a1.wd.getItem((e1 ? "v" : "d") + eG)) : 1 === a1.id ? ft = a1.we.loadString((e1 ? 1e3 : 2e3) + eG) : 2 === a1.id && (ft = a1.wf[(e1 ? "v" : "d") + eG]), ft && 0 !== ft.length ? ft : null
	}, this.wg = function(fR, wh) {
		var h = [],
			wi = wh ? "e" : "l";
		if (0 === a1.id) {
			if (a1.wd)
				for (aC = 0; aC < fR; aC++) h.push(a1.wd.getItem(wi + aC))
		} else if (1 === a1.id)
			for (var wj = wh ? 5e3 : 3e3, aC = 0; aC < fR; aC++) h.push(a1.we.loadString(wj + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fR; aC++) h.push(a1.wf[wi + aC]);
		return h
	}, this.save = function(eG, value, e1) {
		var wk = (e1 ? "v" : "d") + eG;
		if (0 === a1.id) {
			if (a1.wd && bm.eV.data[140].value) try {
				a1.wd.setItem(wk, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.we.saveString((e1 ? 1e3 : 2e3) + eG, value) : 2 === a1.id && (a1.wf[wk] = value, a1.wl.postMessage(wk + " " + value))
	}, this.wm = function(h, wh) {
		var fR = h.length,
			wi = wh ? "e" : "l";
		if (0 === a1.id) {
			if (a1.wd && bm.eV.data[140].value) try {
				for (aC = 0; aC < fR; aC++) a1.wd.setItem(wi + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var wj = wh ? 5e3 : 3e3, aC = 0; aC < fR; aC++) a1.we.saveString(wj + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fR; aC++) a1.wf[wi + aC] = h[aC], a1.wl.postMessage(wi + aC + " " + h[aC])
	}
}

function wM() {
	this.di = function() {
		! function() {
			var data = bm.eV.data;
			0 === data[2].e1 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].wU = 1);
			0 === data[100].e1 && (data[100].value = data[100].wU = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.eV.data,
			fR = data.length;
		for (aC = 0; aC < fR; aC++) {
			var wp = bm.rb.wb(aC, !0);
			data[aC] && data[aC].e1 === wp && (null === (wp = bm.rb.wc(aC)) ? data[aC].value = data[aC].wU : 2 === data[aC].type ? data[aC].value = wp : (wp = Number(wp), isNaN(wp) ? data[aC].value = data[aC].wU : data[aC].value = wp))
		}
	}
}

function wJ() {
	function wu(h) {
		if (0 === h.length) bm.po.pp(116, "");
		else {
			for (var wx = h[0], aC = 1; aC < h.length; aC++) wx += ";" + h[aC];
			bm.po.pp(116, wx)
		}
	}
	this.wr = function() {
		bm.eV.data[110].value.length && (bm.eV.data[106].value = bm.eV.data[110], bm.po.pp(110, ""), this.ws())
	}, this.ws = function() {
		var h = bm.eV.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.eV.data[106].value), h.unshift(bm.eV.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var wt = [], aC = 0; aC < h.length; aC += 2) wt.push(h[aC]);
		wu(h), bm.eV.data[117].value = 0, bm.eV.data[117].tI = wt
	}, this.wv = function(eG) {
		bm.eV.data[117].tI.splice(eG, 1), bm.eV.data[117].value = Math.min(eG, bm.eV.data[117].tI.length - 1);
		var h = bm.eV.data[116].value.split(";");
		h.splice(2 * eG, 2), wu(h)
	}, this.ww = function(eG) {
		var h = bm.eV.data[116].value.split(";");
		return {
			tZ: h[2 * eG],
			password: h[2 * eG + 1]
		}
	}, this.wy = function() {
		var ft = bO.iZ(bm.eV.data[121].value, -1, 262143);
		return ft = -1 === ft ? ~~(262144 * Math.random()) : ft
	}, this.wN = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var wz, r1 = h[aC].trim();
			0 !== r1.length && (wz = 0 <= (wz = r1.indexOf("=")) ? r1.substring(0, wz) : r1, document.cookie = wz + "=;expires=0;path=/", document.cookie = wz + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wz +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function wI() {
	this.pp = function(eG, value) {
		2 !== bm.eV.data[eG].type && (value = Math.floor(value)), bm.eV.data[eG].value !== value && (bm.eV.wR(eG, value), 0 === eG ? (u.y(), bA.di(), u.v(2)) : 1 === eG ? i.dt(1) : 2 === eG ? i.dt(0) : 5 === eG && (bD.rK.x0(), i.dt(0)))
	}, this.x1 = function() {
		for (var data = bm.eV.data, aC = 0; aC < 100; aC++) data[aC] && bm.eV.wR(aC, data[aC].wU);
		bD.rK.x0(), i.dt(1)
	}, this.x2 = function() {
		for (var data = bm.eV.data, aC = 0; aC < data.length; aC++) data[aC] && bm.eV.pp(aC, data[aC].wU)
	}, this.x3 = function() {
		for (var fl = bm.eV, aC = 128; aC < 135; aC++) fl.wR(aC, fl.data[aC].wU)
	}, this.x4 = function(data) {
		bm.po.pp(109, data.ta), bm.po.pp(107, data.x5), bm.po.pp(108, data.x6), bm.po.pp(112, data.x7), bm.po.pp(111, data.x8), bm.po.pp(113, data.x9), bm.po.pp(135, data.xA), bm.po.pp(136, data.xB), bm.po.pp(137, data.xC), bm.po.pp(138, data
			.xD), bm.po.pp(139, data.xE), bm.po.pp(141, data.xF), bm.po.pp(142, data.xG), bm.po.pp(143, data.xH), bm.po.pp(144, data.xI)
	}
}

function c7() {
	this.td = new xJ, this.xK = new xL, this.xM = new xN, this.di = function() {
		this.td.di()
	}
}

function xL() {
	this.xO = function(size) {
		for (var xP = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(xP.qS(16)));
		return h.join("")
	}, this.xQ = function(r1) {
		return 20 < (r1 = r1.trim()).length ? r1.substring(0, 20) : r1
	}
}

function xJ() {
	var xR = new Uint8Array(78);
	this.di = function() {
		var aC;
		for (xR[50] = 37, aC = 0; aC < 10; aC++) xR[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) xR[aC + 20] = aC + 11, xR[aC + 52] = aC + 38
	}, this.xS = function(r1) {
		return r1.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.xT = function(r1, size) {
		if ((r1 = this.xS(r1)).length > size) return r1.substring(0, size);
		for (; r1.length < size;) r1 = "-" + r1;
		return r1
	}, this.xU = function(r1) {
		for (var xV = xR, fR = r1.length, h = new Uint8Array(fR), aC = 0; aC < fR; aC++) h[aC] = xV[r1.charCodeAt(aC) - 45];
		return h
	}, this.xW = function(xX) {
		bG.a8(6 * xX.length), this.xY(xX), bK.di(bG.aD)
	}, this.xY = function(xX) {
		for (var fR = xX.length, j = bG, aC = 0; aC < fR; aC++) j.a9(6, xX[aC])
	}, this.xZ = function(r1) {
		this.xY(this.xU(r1))
	}, this.xa = function(r1, size) {
		this.xY(this.xU(this.xT(r1, size)))
	}, this.xb = function(r1, size) {
		for (var h = this.xU(this.xT(r1, size)), ft = 0, nz = 1, aC = h.length - 1; 0 <= aC; aC--) ft += nz * h[aC], nz *= 64;
		return ft
	}
}

function xc() {
	var j, k, xd;

	function y3(ht, fU, y1, xi, xw) {
		fU = y2(ht, fU + 1 + 2 * xi & 3);
		! function(ht, lP) {
			return 1 < Math.abs(ht % j - lP % j) || 1 < Math.abs(y6(ht) - y6(lP))
		}(ht, fU) && 0 === xw[fU << 2] && (xw[fU << 2] = y1)
	}

	function y6(gz) {
		return Math.floor((gz + .5) / j) % k
	}

	function y2(gz, fU) {
		return gz + xd[fU]
	}
	this.xe = function(r1) {
		var aC, xf, fR, xg, xP = bK;
		for (bJ.td.xW(bJ.td.xU(r1)), bV.xj.xk[bV.f7].j = bV.fc = j = xP.qS(12), bV.xj.xk[bV.f7].k = bV.fd = k = xP.qS(12), xd = [-j, -1, j, 1], bV.xt = document.createElement("canvas"), bV.xt.width = bV.fc, bV.xt.height = bV.fd, bV.xp = bV.xt
			.getContext("2d", {
				alpha: !1
			}), bV.xq = bV.xu = null, bV.xq = bV.xp.getImageData(0, 0, bV.fc, bV.fd), bV.xu = bV.xq.data, bD.rS.xv(bV.xu), fR = xP.qS(12), xf = xP.qS(5), xg = xm(j * k - 1), aC = 0; aC < fR; aC++) ! function(lh, gz, xh, xi) {
			var aC, fU, xP = bK,
				xw = bV.xu,
				xx = gz,
				xy = gz,
				xz = 0,
				y0 = 1 + xh,
				y1 = 2 - xh;
			for (xw[gz << 2] = y0, aC = 0; aC < lh; aC++) fU = xP.qS(2), gz = y2(gz, fU), xw[gz << 2] === y0 ? xz % 2 == 1 && y3(xy, xz + 2 * xi + 3, y1, xi, xw) : xw[gz << 2] = y0, y3(gz, fU, y1, xi, xw), y3(xy, fU, y1, xi, xw), xy = gz,
				xz = fU;
			y2(gz, 0) === xx ? (y3(gz, 0, y1, xi, xw), y3(xx, 0, y1, xi, xw)) : y2(gz, 1) === xx && (y3(gz, 0, y1, xi, xw), y3(xx, 2, y1, xi, xw));
			0 === lh && (y3(xx, 0, y1, xi, xw), y3(xx, 2, y1, xi, xw))
		}(xP.qS(xf), xP.qS(xg), 1 === xP.qS(1), 1 === xP.qS(1));
		var fY, fa, iJ, y7, y8, y9, xw = bV.xu,
			yA = !0,
			yB = bV.xj.xk[bV.f7].yB,
			yC = bV.xj.xk[bV.f7].yC;
		for (fa = 0; fa < k; fa++)
			for (y7 = !0, y8 = yA, fY = y9 = 0; fY < j; fY++) iJ = 4 * fa * j + 4 * fY, y9 <= fY && 0 < xw[iJ] && (y8 = 2 === xw[iJ], y7) && (y7 = !1, y8 !== yA) ? (yA = y8, y9 = fY + 1, fY = -1) : (y8 ? (xw[iJ] = yC[0], xw[1 + iJ] = yC[1], xw[
				2 + iJ] = yC[2]) : (xw[iJ] = yB[0], xw[1 + iJ] = yB[1], xw[2 + iJ] = yB[2]), xw[3 + iJ] = 255);
		bV.xp.putImageData(bV.xq, 0, 0), bV.xr = !0, bV.xs.di(), bi.dq = !0
	}
}

function xN() {
	this.xe = function(yD) {
		for (var xP = bK, size = xP.qS(yD), yE = 7 + 9 * xP.qS(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(xP.qS(yE)));
		return h.join("")
	}
}

function cC() {
	var t2, t3, yF, yG, yH, yI, yJ, yK, yL, yM;

	function yO() {
		var yR = aE.yR;
		for (yL = yR; yL < aE.fO; yL++) yN();
		for (yL = aE.hp ? aE.km : 0; yL < yR; yL++) {
			if (!yS()) {
				for (var fl = aE.yW = yL; fl < yR; fl++) yL = fl, yN();
				return
			}
			yV(yI + t2 * yH + bO.fs(yH, 2), yJ + t3 * yH + bO.fs(yH, 2))
		}
	}

	function yy(player) {
		for (var jK = ah.jK, jM = ah.jM, jL = ah.jL, jN = ah.jN, fa = jM[player]; fa <= jN[player]; fa++)
			for (var fY = jK[player]; fY <= jL[player]; fY++) {
				var f5 = ad.yz(fY, fa);
				ad.h1(f5) && (ad.jx(f5) ? ad.gw(f5, player) : ad.z0(f5, player))
			}
	}

	function yx(h, tv, tw) {
		var eZ = h[tv];
		h[tv] = h[tw], h[tw] = eZ
	}

	function yS() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (t2 = bO.fs(yF * az.random(), az.value(100)), t3 = bO.fs(yG * az.random(), az.value(100)), z5()) return 1;
			return
		}() || function() {
			var io, ir, fk, yU, fl, yT;
			for (io = bO.fs(yF * az.random(), az.value(100)), ir = bO.fs(yG * az.random(), az.value(100)), fk = 40; 1 <= fk; fk--)
				for (yU = yG - fk; 0 <= yU; yU -= 40)
					for (t3 = (yU + ir) % yG, fl = 40; 1 <= fl; fl--)
						for (yT = yF - fl; 0 <= yT; yT -= 40)
							if (t2 = (yT + io) % yF, z5()) return 1;
			return
		}()
	}

	function z5() {
		for (var gz, z7, gap = bO.fs(yH - yK, 2), z8 = yJ + t3 * yH + gap, z9 = yI + t2 * yH + gap, z6 = z8 + yK - 1; z8 <= z6; z6--)
			for (z7 = z9 + yK - 1; z9 <= z7; z7--)
				if (gz = ad.yz(z7, z6), !ad.fM(gz) || ad.jx(gz)) return;
		return 1
	}

	function yV(yT, yU) {
		yN(), zA(yT - 2, yU - 2)
	}

	function yN() {
		ah.nM[yL] = 0, ah.hF[yL] = ah.yv[yL] = 0, ah.gt[yL] = [], ah.h7[yL] = [], ah.h8[yL] = [], ah.fq[yL] = [], ah.jK[yL] = ah.jM[yL] = ah.jL[yL] = ah.jN[yL] = 0
	}

	function zA(yT, yU) {
		var gz, aC, zB, zC;
		for (ah.nM[yL] = 1, ah.jK[yL] = yT + 10, ah.jM[yL] = yU + 10, ah.jN[yL] = ah.jL[yL] = 0, zB = yT; zB < yT + 4; zB++)
			for (zC = yU; zC < yU + 4; zC++)(yT < zB && zB < yT + 3 || yU < zC && zC < yU + 3) && (gz = ad.yz(zB, zC), ad.fM(gz)) && (ah.jK[yL] = Math.min(zB, ah.jK[yL]), ah.jL[yL] = Math.max(zB, ah.jL[yL]), ah.jM[yL] = Math.min(zC, ah.jM[yL]), ah
				.jN[yL] = Math.max(zC, ah.jN[yL]), yM[ah.hF[yL]] = gz, ah.hF[yL]++, ad.z0(gz, yL));
		for (ah.yv[yL] = ah.hF[yL], aC = ah.hF[yL] - 1; 0 <= aC; aC--) ad.zD(yM[aC], yL) ? (ad.gw(yM[aC], yL), ah.h7[yL].push(yM[aC])) : ad.zE(yM[aC]) ? (ad.gw(yM[aC], yL), ah.h8[yL].push(yM[aC])) : ad.zF(yM[aC]) && (ad.gw(yM[aC], yL), ah.fq[yL]
			.push(yM[aC]))
	}
	this.di = function() {
		if (yM = new Array(12), yK = 6, yH = 10, yF = bO.fs(bV.fc, yH), yG = bO.fs(bV.fd, yH), yI = bO.fs(bV.fc - yH * yF, 2), yJ = bO.fs(bV.fd - yH * yG, 2), aE.hp)
			for (var aC = 0; aC < aE.km; aC++) yL = aC, yN(), ah.nM[yL] = 1;
		(0 === aE.data.spawningType ? yO : 1 === aE.data.spawningType ? (yO(), function() {
			var yX = aE.yY;
			aE.yZ || yX++;
			if (!(yX < 3)) {
				for (var data = aE.data, k2 = (aE.hp ? aE.km : 0) + data.teamPlayerCount[0], o5 = aE.yW, ya = new Uint32Array(yX), yb = new Uint32Array(yX), yc = new Uint16Array(yX), yd = new Uint16Array(yX), fP = bj.fP, jK = ah.jK, jM =
						ah.jM, jL = ah.jL, jN = ah.jN, g6 = bR.g6, g7 = bR.g7, aC = k2; aC < o5; aC++) g6[aC] = jK[aC] + jL[aC] >> 1, g7[aC] = jM[aC] + jN[aC] >> 1;
				for (aC = k2; aC < o5; aC++) {
					var id = fP[aC];
					ya[id] += g6[aC], yb[id] += g7[aC]
				}
				var l9 = bj.l9;
				for (aC = 1; aC < yX; aC++) {
					var gu = Math.max(data.teamPlayerCount[l9[aC]], 1);
					yc[aC] = bO.fs(ya[aC], gu), yd[aC] = bO.fs(yb[aC], gu)
				}
				var ye = bj.ye,
					yf = bj.yf,
					yg = bj.yg,
					g5 = bR.g5;
				for (aC = 0; aC < 512; aC++) g5[aC] = aC;
				for (var eF = 0; eF < 2 + (4 <= yX); eF++)
					for (aC = k2; aC < o5; aC++) {
						for (var ht = aC, yh = g5[ht], yi = 1, fh = bO.yj(g6[yh] - yc[1], g7[yh] - yd[1]), fk = 2; fk < yX; fk++) {
							var yk = bO.yj(g6[yh] - yc[fk], g7[yh] - yd[fk]);
							yk < fh && (fh = yk, yi = fk)
						}
						var yl = fP[ht];
						if (yi !== yl) {
							if (2 === eF && 4 <= yX) {
								var ym = Math.max((yi + 1) % yX, 1),
									yn = bO.yj(g6[yh] - yc[ym], g7[yh] - yd[ym]);
								for (fk = 1; fk < yX; fk++) yk = bO.yj(g6[yh] - yc[fk], g7[yh] - yd[fk]), fh < yk && yk < yn && (yn = yk, ym = fk);
								ym !== yl && bO.yj(yc[yl] - yc[ym], yd[yl] - yd[ym]) < bO.yj(yc[yl] - yc[yi], yd[yl] - yd[yi]) && (yi = ym)
							}
							var yo = l9[yi],
								yp = yf[yo] + (aE.hp ? 0 : yg[yo]),
								lP = ye[yp],
								yq = g5[lP],
								yr = yf[yo + 1];
							fh = bO.yj(g6[yq] - yc[yl], g7[yq] - yd[yl]);
							for (var ei = yp + 1; ei < yr; ei++) {
								var ys = ye[ei],
									yt = g5[ys];
								(yk = bO.yj(g6[yt] - yc[yl], g7[yt] - yd[yl])) < fh && (fh = yk, lP = ys)
							}
							lP < k2 || o5 <= lP || (yq = g5[lP], ya[yl] += g6[yq] - g6[yh], yb[yl] += g7[yq] - g7[yh], ya[yi] += g6[yh] - g6[yq], yb[yi] += g7[yh] - g7[yq], gu = data.teamPlayerCount[l9[yl]], yc[yl] = bO.fs(ya[yl], gu),
								yd[yl] = bO.fs(yb[yl], gu), gu = data.teamPlayerCount[yo], yc[yi] = bO.fs(ya[yi], gu), yd[yi] = bO.fs(yb[yi], gu), g5[ht] = yq, g5[lP] = yh)
						}
					}! function() {
						for (var g5 = bR.g5, jK = ah.jK, jM = ah.jM, jL = ah.jL, jN = ah.jN, hF = ah.hF, yv = ah.yv, h7 = ah.h7, h8 = ah.h8, fq = ah.fq, aC = 0; aC < 512; aC++) {
							var yw = g5[aC];
							if (yw !== aC) {
								yx(jK, aC, yw), yx(jM, aC, yw), yx(jL, aC, yw), yx(jN, aC, yw), yx(hF, aC, yw), yx(yv, aC, yw), yx(h7, aC, yw), yx(h8, aC, yw), yx(fq, aC, yw), yy(aC), yy(yw), g5[aC] = aC;
								for (var k = yw, h0 = g5[k]; h0 !== aC;) h0 = g5[k = h0];
								g5[k] = yw
							}
						}
					}()
			}
		}) : function() {
			var yR = aE.yR;
			for (yL = yR; yL < aE.fO; yL++) yN();
			for (yL = aE.hp ? aE.km : 0; yL < yR; yL++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							yT = spawningData[2 * yL] + 1,
							spawningData = spawningData[2 * yL + 1] + 1;
						if (3 < yT && yT < bV.fc - 5 && 3 < spawningData && spawningData < bV.fd - 5 && ad.fM(ad.yz(yT, spawningData)) && function(yT, yU) {
								var gz, z7, z6;
								for (z6 = yU; yU - 6 < z6; z6--)
									for (z7 = yT; yT - 6 < z7; z7--)
										if (gz = ad.yz(z7, z6), ad.jx(gz)) return;
								return 1
							}(yT + 3, spawningData + 3)) return yV(yT + 1, spawningData + 1), 1;
						return
					}()) {
					if (!yS()) {
						for (var fl = aE.yW = yL; fl < yR; fl++) yL = fl, yN();
						return
					}
					var yT = yI + t2 * yH + bO.fs(yH, 2),
						yU = yJ + t3 * yH + bO.fs(yH, 2);
					yV(yT, yU)
				}
		})(), bg.nI[7] = ah.hF[aE.fB]
	}, this.zG = function(jv, zH, zI) {
		var aC, yT, yU, gz, t2, t3;
		for (yL = jv, aC = 0; aC < 20; aC++)
			for (yT = zH + aC; zH - aC <= yT; yT--)
				for (yU = zI + aC; zI - aC <= yU; yU--)
					if ((yT === zH + aC || yT === zH - aC || yU === zI + aC || yU === zI - aC) && 3 < yT && yT < bV.fc - 5 && 3 < yU && yU < bV.fd - 5 && ad.fM(ad.yz(yT, yU)) && function(yT, yU) {
							var gz, z7, z6;
							for (z6 = yU; yU - 6 < z6; z6--)
								for (z7 = yT; yT - 6 < z7; z7--)
									if (gz = ad.yz(z7, z6), ad.jx(gz) && !ad.zO(yL, gz)) return;
							return 1
						}(yT + 3, yU + 3)) {
						if (0 < ah.hF[yL]) {
							for (t3 = t2 = gz = void 0, t2 = ah.jL[yL]; t2 >= ah.jK[yL]; t2--)
								for (t3 = ah.jN[yL]; t3 >= ah.jM[yL]; t3--) gz = 4 * (t3 * bV.fc + t2), ad.zL(yL, gz) && (ad.zM(gz), ah.hF[yL]--);
							yN()
						}
						return zA(yT - 1, yU - 1), !0
					} return !1
	}, this.zN = function(jv) {
		yL = jv, yS() ? yV(yI + t2 * yH + bO.fs(yH, 2), yJ + t3 * yH + bO.fs(yH, 2)) : yN()
	}
}

function zP() {
	au.zQ(), vw.setTransform(ic, 0, 0, ic, 0, 0), vw.imageSmoothingEnabled = ic < 3, vw.drawImage(bV.xt, aT.zR(), aT.zS()), bS.zT.vv(), vw.drawImage(zU, aT.zR(), aT.zS()), au.vv(), bQ.vv(), ag.vv(), (aE.nq ? (bk.vv(), bF) : (aO.vv(), aW.vv(), aS
	.vv(), bF.vv(), ax.vv(), aX.vv(), aT.vv(), aR.vv(), bk.vv(), aV.vv(), aQ.vv(), aN.vv(), aM.vv(), aY.vv(), bh.vv(), aw)).vv(), u.vv()
}

function zV(zW, j, k) {
	zW.clearRect(0, 0, j, k), zW.fillStyle = bE.oK, zW.fillRect(0, 0, j, k)
}

function zX(zW, j, k, zY) {
	zW.fillStyle = bE.oN, zW.fillRect(0, 0, j, zY), zW.fillRect(0, 0, zY, k), zW.fillRect(j - zY, 0, zY, k), zW.fillRect(0, k - zY, j, zY)
}

function zZ(zW, fY, fa, iN, zY, gz, za) {
	zW.fillStyle = bE.oN;
	var gz = Math.floor(iN * gz),
		ti = (gz += (gz - zY) % 2, Math.floor((gz - zY) / 2)),
		iN = Math.floor((iN - gz) / 2);
	zW.fillRect(fY + iN, fa + iN + ti, gz, zY), za && zW.fillRect(fY + iN + ti, fa + iN, zY, gz)
}

function zc() {
	this.di = function() {
		8 === aE.l4 && aO.zd()
	}, this.ze = function(zf) {
		var elo = aE.data.elo,
			k1 = (elo[zf] - elo[1 - zf]) / 10,
			k1 = 8 / (1 + Math.pow(2, k1 / 32)),
			k1 = Math.floor(10 * k1 + .5),
			zh = elo[zf] + k1,
			zi = this.zj(zh),
			elo = this.zj(elo[1 - zf] - k1),
			k1 = (0 === zf ? aO.zl(zi, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.zl(elo, zi, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), zh * bO.sqrt(zh) >> 8),
			elo = ((1 + aE.zo) * k1 / 100).toFixed(2);
		zf === aE.fB ? aO.zp(640, L(28, [elo]), 40, 0, bE.oN, bE.oK, -1, !1) : aO.zp(640, L(29, [ah.zq[zf], elo]), 40, 0, bE.oN, bE.oK, -1, !1)
	}, this.zj = function(elo) {
		return 16e3 === (elo = bO.iZ(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ci() {
	this.sZ = new zr, this.xw = new zs
}

function zs() {
	this.iD = !1;
	this.zw = [], this.zx = 100;
	var nn, no, gap, iN, zt, zv, zy = 0,
		zz = new Array(9),
		a00 = [],
		a01 = [],
		a02 = 0,
		a03 = 0,
		a04 = 0,
		a05 = 0;

	function a0H() {
		zz.sort(function(fk, fl) {
			return fl.kr - fk.kr
		});
		for (var r1 = "" + zz[0].q3, aC = 1; aC < 9; aC++) r1 += "," + zz[aC].q3;
		for (aC = 0; aC < 9; aC++) r1 += "," + zz[aC].kr;
		bm.eV.wR(120, r1)
	}
	this.di = function() {
		for (var a06 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a06.length; aC++) {
			var color = 6 === a06[aC] ? bE.oo : bE.oL;
			this.zw.push(bD.canvas.a07(ac.get(3), a06[aC], color))
		}
		for (aC = 0; aC < ak.sZ.a08; aC++) a01.push(ak.sZ.a09 - ak.sZ.a08 + aC);
		for (aC = 0; aC < ak.sZ.a0A; aC++) a01.push(ak.sZ.a0B + aC);
		var a0C = ak.sZ.a0D(bN.a0C);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a0C.slice(), aC = 0; aC < a0C.length; aC++) a01.push(a0C[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					zz[q] = {
						q3: isNaN(qcode) ? 1015 + q : qcode,
						kr: 0
					}
				} else {
					var aC, h = bm.eV.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) zz[aC] = {
							q3: 1015 + aC,
							kr: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var ft = parseInt(h[aC]),
								ei = (ft = 0 <= ft && ft < ak.sZ.a09 ? ft : 0, parseInt(h[aC + 9]));
							ei = 0 <= ei && ei < 1e3 ? ei : 0, zz[aC] = {
								q3: ft,
								kr: ei
							}
						}
				}
		}()
	}, this.show = function(m1, m2, a0I) {
		var aC;
		if (a02 = m1, a03 = m2, zy = a0I || 0, this.iD = !0, a00 = [], 0 === zy)
			for (aC = 0; aC < 9; aC++) a00.push(zz[aC].q3);
		else {
			var fl = 49 * zy,
				a0I = fl - 49;
			for (a0I >= a01.length && (zy = 1, a0I = 0, fl = 49), aC = a0I = (fl = Math.min(fl, a01.length)) - 49; aC < fl; aC++) a00.push(a01[aC])
		}
		a00.push(1024);
		a0I = a00.length, iN = Math.floor((a1.a2.ia() ? .075 : .0468) * i.ib), gap = Math.floor(iN / 3), (a04 = 10 * (zt = iN + gap)) > i.j && (a04 = i.j, gap = (zt = a04 / 10) - (iN = 3 * zt / 4)), zv = bO.fs(a0I, 10) + !!(a0I % 10), (a05 = zv *
			zt) > i.k && (a05 = i.k, gap = (zt = a05 / zv) - (iN = 3 * zt / 4)), a0I = .5 * gap;
		nn = Math.min(Math.max(m1 - .5 * a04 + a0I, a0I), i.j - a04 + a0I), no = Math.min(Math.max(m2 - .5 * a05 + a0I, a0I), i.k - a05 + a0I)
	}, this.he = function(m1, m2, player) {
		if (!this.iD) return !1;
		if (this.a0K(m1, m2)) {
			m1 = bO.iZ(bO.fs(m1 - nn + .5 * gap, zt), 0, 9);
			if ((m1 += 10 * bO.iZ(bO.fs(m2 - no + .5 * gap, zt), 0, 9)) >= a00.length) return aM.sa(), !0;
			m2 = a00[m1];
			if (1024 === m2) return this.show(a02, a03, zy + 1), !0;
			! function(q3) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) zz[aC].kr = Math.floor(.99 * zz[aC].kr);
					for (aC = 0; aC < 9; aC++)
						if (q3 === zz[aC].q3) return zz[aC].kr = Math.min(zz[aC].kr + 30, 999), a0H();
					zz.splice(5, 0, {
						q3: q3,
						kr: Math.max(zz[4].kr, 30)
					}), zz.pop(), a0H()
				}
			}(m2), player === aE.fB ? bB.hr.q2(m2) : bB.gn.qH(m2, player)
		}
		return aM.sa(), !0
	}, this.a0K = function(m1, m2) {
		return !(m1 < nn - .5 * gap || m2 < no - .5 * gap || nn + a04 - .5 * gap <= m1 || no + a05 - .5 * gap <= m2)
	}, this.vv = function() {
		vw.fillStyle = bE.oK, vw.fillRect(nn - .5 * gap, no - .5 * gap, a04, a05);
		for (var iJ = .5 * bf.a0L, fR = (vw.lineWidth = bf.a0L, vw.strokeStyle = vw.fillStyle = bE.oN, vw.strokeRect(nn - .5 * gap + iJ, no - .5 * gap + iJ, a04 - 2 * iJ, a05 - 2 * iJ), vw.imageSmoothingEnabled = !0, a00.length), aC = 0; aC <
			fR; aC++) this.a0M(a00[aC], vw, nn + aC % 10 * zt, no + bO.fs(aC, 10) * zt, iN);
		vw.imageSmoothingEnabled = !1
	}, this.a0M = function(q3, iT, fY, fa, iN) {
		var f5;
		q3 >= 1024 - ak.sZ.a08 ? (f5 = iN / this.zx, iT.setTransform(f5, 0, 0, f5, fY, fa), iT.drawImage(this.zw[q3 - 1024 + ak.sZ.a08], 0, 0), iT.setTransform(1, 0, 0, 1, 0, 0)) : (bD.rK.textAlign(iT, 1), bD.rK.textBaseline(iT, 1), iT.font = bD
			.rK.t8(0, .89 * iN), iT.fillText(ak.sZ.a0N(q3), fY + .5 * iN, fa + (.35 - bD.rK.a0O + .56) * iN))
	}
}

function zr() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a08 = 13, this.a0A = this.emojis.length, this.a0B = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a0B, this.a09 = 1024, this.a0P = this.emojis.indexOf(
		"💀"), this.a0Q = this.a0P + 1, this.a0R = this.emojis.indexOf("🥇"), this.a0S = this.emojis.indexOf("😊"), this.a0N = function(ft) {
		return ft < this.a0B ? String.fromCharCode(55356, 56806 + bO.fs(ft, 26), 55356, 56806 + ft % 26) : this.emojis[Math.min(ft - this.a0B, this.a0A - 1)]
	}, this.a0D = function(r1) {
		for (var fR = r1.length - 2, h = [], aC = 0; aC < fR; aC++) {
			var a0T = r1.charCodeAt(aC) - 56806,
				a0U = r1.charCodeAt(aC + 2) - 56806;
			0 <= a0T && a0T < 26 && 0 <= a0U && a0U < 26 && (h.push(26 * a0T + a0U), aC += 3)
		}
		return h
	}, this.a0V = function(ft) {
		return ft < this.a0B
	}, this.a0W = function(ft) {
		return ft >= 1024 - this.a08
	}, this.a0X = function(ft) {
		return ft >= this.a0B && ft < this.a0B + this.a0Q
	}
}

function c6() {
	this.td = new a0Y, this.xK = new a0Z, this.xM = new a0a, this.di = function() {
		this.td.di()
	}
}

function a0Z() {
	this.xZ = function(r1) {
		for (var fR = r1.length, j = bG, aC = 0; aC < fR; aC++) j.a9(16, r1.charCodeAt(aC))
	}
}

function a0Y() {
	var a0b = new Uint8Array(64);
	this.di = function() {
		var aC;
		for (a0b[0] = 45, a0b[37] = 95, aC = 0; aC < 10; aC++) a0b[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a0b[aC + 11] = 65 + aC, a0b[aC + 38] = 97 + aC
	}, this.tf = function(a0c) {
		for (var xP = bK, xX = new Uint8Array(a0c), aC = 0; aC < a0c; aC++) xX[aC] = xP.qS(6);
		return xX
	}, this.te = function(xX) {
		for (var fR = xX.length, a0d = a0b, h = [], aC = 0; aC < fR; aC++) h.push(String.fromCharCode(a0d[xX[aC]]));
		return h.join("")
	}, this.a0e = function(value, a0f) {
		for (var a0d = a0b, h = [], aC = 0; aC < a0f; aC++) h.push(String.fromCharCode(a0d[value >> 6 * (a0f - 1 - aC) & 63]));
		return h.join("")
	}
}

function cE() {
	var a0g, a0h, a0i;
	a0g = [32, 65, 191, 913, 931], a0h = [64, 127, 688, 930, 1155], a0i = new Array(a0g.length + 1);
	for (var aC = 0; aC < a0i.length; aC++) {
		a0i[aC] = 0;
		for (var fk = aC - 1; 0 <= fk; fk--) a0i[aC] += a0h[fk] - a0g[fk]
	}

	function a0o(ei) {
		for (var aC = a0g.length - 1; 0 <= aC; aC--)
			if (ei >= a0g[aC] && ei < a0h[aC]) return aC;
		return -1
	}
	this.xQ = function(r1) {
		return 0 !== (r1 = r1.trim()).indexOf("Bot ") && 0 !== r1.indexOf("[Bot] ") && function(r1, a0l, a0m) {
			var fR = (r1 = r1.trim()).length;
			if (fR < a0l || a0m < fR) return !1;
			for (var ei, a0n = 0, aC = 0; aC < fR; aC++)
				if (ei = r1.charCodeAt(aC), a0n += 65 <= ei && ei <= 90 || 1040 <= ei && ei <= 1071 ? 1 : 0, -1 === a0o(ei)) return !1;
			if (3 < a0n && a0n > Math.floor(fR / 2)) return !1;
			return !0
		}(r1, 3, 20)
	}, this.a0p = function(r1) {
		for (var fR = (r1 = r1.trim()).length, h = [], aC = 0; aC < fR; aC++) {
			var ei, gz = a0o(ei = r1.charCodeAt(aC));
			h.push(a0i[gz] + ei - a0g[gz])
		}
		return h
	}, this.xe = function(h) {
		for (var ei, fl, r1 = "", fR = h.length, aC = 0; aC < fR; aC++)
			for (fl = 1; fl < a0i.length; fl++)
				if (h[aC] < a0i[fl]) {
					ei = a0g[fl - 1] + h[aC] - a0i[fl - 1], r1 += String.fromCharCode(ei);
					break
				} return r1
	}, this.a0q = function(r1) {
		for (var h = this.a0p(r1), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a0r = function(r1) {
		for (var h = new Array(Math.floor(r1.length / 3)), aC = 0; aC < r1.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(r1.substring(aC, aC + 3));
		return this.xe(h)
	}, this.a0s = function(r1) {
		for (var ft, h = [r1.length], aC = 0; aC < r1.length; aC++) h[aC] = r1.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < r1.length; aC++) aC === r1.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (ft = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(ft + (ft < 26 ? 65 : 71)), aC++);
		return result
	}, this.a0t = function(r1) {
		for (var ei, result = "", aC = 0; aC < r1.length; aC++) 48 <= (ei = r1.charCodeAt(aC)) && ei < 58 ? result += String.fromCharCode(ei) : 65 <= ei && ei < 75 ? result += "0" + (ei - 65).toString() : 75 <= ei && ei < 91 ? result += (ei - 65)
			.toString() : 97 <= ei && ei < 123 && (result += (ei - 71).toString());
		return result
	}, this.a0u = function(r1) {
		for (var fR = r1.length, h = [], aC = 0; aC < fR; aC++)(ei = r1.charCodeAt(aC)) < 58 ? h.push(r1[aC]) : (ei -= ei < 91 ? 65 : 71, h.push(String(bO.fs(ei, 10))), h.push(String(ei - 10 * bO.fs(ei, 10))));
		var fR = h.length - 2,
			ei = 0,
			xX = [];
		for (aC = 0; aC < fR; aC += 3) xX[ei++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return xX
	}, this.a0v = function() {
		for (var eF, a0w = "", aC = 0; aC < 6; aC++) eF = 48 + az.random() % 36, eF += 58 <= eF ? 39 : 0, a0w += String.fromCharCode(eF);
		return a0w
	}
}

function a0a() {
	this.a0p = function(r1, yD, a0x) {
		for (var a0y = [], fR = r1.length, max = 0, aC = 0; aC < fR; aC++) {
			var ft = r1.charCodeAt(aC);
			a0y.push(ft), max = Math.max(max, ft)
		}
		var yE = max < 128 ? 7 : 16;
		for (a0x.a9(yD, fR), a0x.a9(1, +(16 == yE)), aC = 0; aC < fR; aC++) a0x.a9(yE, a0y[aC])
	}
}

function dF() {
	this.a0z = new a10, this.result = new a11, this.a12 = new a13, this.a14 = new a15, this.a16 = new a17, this.a18 = new a19, this.di = function() {
		this.result.di()
	}
}

function a13() {
	this.a1A = function() {
		for (var fR = am.lI, a1B = am.lN, a1C = [], aC = 0; aC < fR; aC++) {
			var gz = a1B[aC];
			bD.gn.a1D(gz) && a1C.push(gz)
		}
		return a1C
	}, this.a1E = function() {
		if (0 === bj.l9[aE.a1F]) return this.a1G();
		bk.kn(aE.a1F);
		for (var a1C = [], fR = bR.fw[0], g5 = bR.g5, aC = 0; aC < fR; aC++) {
			var gz = g5[aC];
			bD.gn.a1D(gz) && a1C.push(gz)
		}
		return a1C
	}, this.a1G = function() {
		var gz = mN[0];
		return bD.gn.a1D(gz) ? [gz] : []
	}, this.a1H = function(a1C) {
		for (var fR = a1C.length, eZ = 0, hF = ah.hF, aC = 0; aC < fR; aC++) eZ += hF[a1C[aC]];
		return eZ
	}
}

function a10() {
	function a1J() {
		if (2 === aE.a1N) return 1;
		ax.a1O(), aE.a1N = 2, aE.a1P = aE.a1Q
	}

	function a1L() {
		bU.a16.a1R(), aY.show(1 === aE.a1S, !1, 2 === aE.a1S), bU.result.a1R(), bU.a18.ed(), bU.a14.ed(), bU.a14.a1T(), aO.a1U(!0), aO.a1V(247), aO.a1V(956), aO.a1V(957), aW.n8(!0), aX.n8(!0), ax.n8(), bF.a1W(), aE.ha && bi.a1X.a1Y(), bi.dq = !0, be
			.a1Z(), a1.a2.setState(0)
	}
	this.a1I = function() {
		a1J() || (aE.a1K = 2, a1L())
	}, this.a1M = function() {
		a1J() || (aE.a1K = 1, a1L())
	}
}

function a15() {
	this.ed = function() {
		var a1h;
		2 === aE.a1K ? (aO.a1a(0, 59), aI.nw(2700)) : aE.l4 < 7 ? (a1h = bj.l9[aE.a1F], a1h = bj.a1j[a1h], aR.a1k(L(30, [a1h]), 2, 1, 12), aO.zp(0, L(31, [a1h]), 40, 0, bE.oN, bE.oK, -1, !1), aI.nw(2700)) : 8 === aE.l4 ? (aE.a1S ? aO.a1a(aE.a1f,
			2) : aO.a1a(1 - aE.fB, 3), aE.a1g.ze(aE.a1f), aI.ni(aE.a1f, 2700, !1, 0)) : 9 === aE.l4 ? (aO.a1l(), aI.nw(2700)) : (aO.a1m(aE.a1f), aI.ni(aE.a1f, 2700, !1, 0))
	}, this.a1T = function() {
		var r1;
		aE.ha || aE.l6 || (r1 = b1.z.a1n(), aE.l4 < 7 ? r1 += "/log/team" : 8 === aE.l4 ? r1 += "/log/1v1" : 9 === aE.l4 ? r1 += "/log/zombies" : r1 += "/log/br", aO.zp(720, r1, 736, 0, bE.oN, bE.om, -1, !1))
	}
}

function a19() {
	function a1x() {
		var tz;
		return 8 === aE.l4 ? 0 : (tz = Math.floor(ah.a1y[aE.fB] / 50), (tz = Math.min(tz, 200)) / 100)
	}

	function a1p() {
		var tz = a1x();
		0 !== tz && aO.zp(440, L(32, [tz.toFixed(2)]), 40, 0, bE.og, bE.oK, -1, !1)
	}
	this.ed = function() {
		var a1q;
		0 === bU.result.a1o || 0 === bU.result.a1C.length || 8 === aE.l4 ? bD.gn.hd(aE.fB) && a1p() : (function(a1q) {
			7 !== aE.l4 && 10 !== aE.l4 && 9 !== aE.l4 || 0 !== aE.a1S && a1q && aO.zp(600, L(36, [a1q.toFixed(2)]), 40, 0, bE.oN, bE.oK, -1, !1)
		}(a1q = function() {
			aO.zp(520, L(33), 40, 0, bE.oN, bE.oK, -1, !1);
			for (var a1C = bU.result.a1C, fR = a1C.length, hF = ah.hF, h = [], aC = 0; aC < fR; aC++) {
				var gz = a1C[aC];
				h.push({
					gz: gz,
					eZ: hF[gz]
				})
			}
			h.sort((fk, fl) => fl.eZ - fk.eZ);
			var a1j = ah.zq,
				eZ = bU.result.a1z,
				tz = bU.result.a1o,
				r1 = "",
				a1q = 0;
			for (aC = 0; aC < fR; aC++) {
				var iB = h[aC].eZ * tz / (100 * eZ),
					a21 = a1j[h[aC].gz] + ": " + iB.toFixed(2) + "   ";
				h[aC].gz === aE.fB && (a1q = iB), 2 < aC && 4 !== fR ? 3 === aC && (r1 += "(" + L(34, [fR - 3]) + ")") : r1 += a21
			}
			aO.zp(560, bD.sJ.a22(r1), 40, 0, bE.og, bE.oK, -1, !1), a1q ? aO.zp(580, L(35, [a1q.toFixed(2) + " + " + a1x().toFixed(2)]), 40, 0, bE.og, bE.oK, -1, !1) : bD.gn.hd(aE.fB) && a1p();
			return a1q
		}()), 2 === aE.a1K || 7 <= aE.l4 || function(a1q) {
			var a1C = bU.result.a1C,
				fR = a1C.length,
				a23 = ah.a23,
				hF = ah.hF,
				a24 = [];
			loop: for (var aC = 0; aC < fR; aC++) {
				var gz = a1C[aC],
					a25 = bD.sJ.a26(a23[gz]);
				if (null !== a25) {
					for (var a27 = hF[gz], fl = a24.length - 1; 0 <= fl; fl--)
						if (a25 === a24[fl].name) {
							a24[fl].eZ += a27, a24[fl].h.push({
								gz: gz,
								eZ: a27
							});
							continue loop
						} a24.push({
						name: a25,
						eZ: a27,
						h: [{
							gz: gz,
							eZ: a27
						}]
					})
				}
			}
			if (0 !== a24.length) {
				a24.sort((fk, fl) => fl.eZ - fk.eZ);
				var h = a24[0].h,
					a28 = (h.sort((fk, fl) => fl.eZ - fk.eZ), "[" + a24[0].name + "]"),
					a29 = 512 * bU.result.a1o / 26214400,
					lh = (aO.zp(0, L(37, [a28, a29.toFixed(4)]), 40, 0, bE.oN, bE.oK, -1, !1), h.length),
					xV = a24[0].eZ,
					a2A = 1e4 * a29;
				for (aC = 0; aC < lh; aC++)
					if (h[aC].gz === aE.fB) {
						aO.zp(600, L(38, [(a2A * h[aC].eZ / (10 * xV)).toFixed(2)]), 40, 0, bE.oN, bE.oK, -1, !1), aO.zp(640, L(39, [(.2 * a1q).toFixed(2), a28]), 40, 0, bE.oN, bE.oK, -1, !1);
						break
					}
			}
		}(a1q))
	}, this.a1u = function() {
		var a1v, xx;
		aE.l6 || (a1v = ah, xx = aE.fB, 0 === a1v.a1w[xx]) || a1v.jq[xx] < 1 || 2 * a1v.qj[xx] > 3 * (a1v.jp[xx] + a1v.jq[xx]) || a1p()
	}
}

function a11() {
	this.di = function() {
		this.a2B = 0, this.a1C = [], this.a1z = 0, this.a1o = 0
	}, this.a1R = function() {
		var st;
		aE.l6 || (st = this, 2 === aE.a1K ? st.a1C = bU.a12.a1A() : aE.iL ? st.a1C = bU.a12.a1E() : st.a1C = bU.a12.a1G(), st.a2B = bl.a2D.a2E(), st.a1z = Math.max(1, bU.a12.a1H(st.a1C)), bB.gn.qQ(), 8 === aE.l4 ? bU.result.a1o = 0 : st.a1o =
			100 * bU.result.a2B * (1 + aE.zo))
	}
}

function a17() {
	this.a1R = function() {
		if (2 === aE.a1K) aE.a1S = 2;
		else {
			if (8 === aE.l4) bD.gn.k9(0) || 0 === ah.nM[0] ? aE.a1f = 1 : bD.gn.k9(1) || 0 === ah.nM[1] ? aE.a1f = 0 : aE.a1f = +(ah.hF[1] > ah.hF[0]);
			else {
				if (aE.iL) {
					var lK = bk.a2H();
					if (aE.a1F = lK, bj.l9[lK]) return void(aE.a1S = +(bj.fP[aE.fB] === lK))
				}
				aE.a1f = mN[0]
			}
			aE.a1S = +(aE.a1f === aE.fB)
		}
	}
}

function dK() {
	this.id = 0, this.e1 = 0, this.wd = null, this.we = null, this.wf = null, this.wl = null, this.a2 = new a2I, this.di = function() {
		var self, e1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e1 = Android.getVersion()) < 12 || (self.e1 = e1, self.id = 1, self.we = Android),
			function(self) {
				var e1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wf = mwIOSdataX, self.wl = window.webkit.messageHandlers.iosCommandA, e1 = self
					.wf.version, self.e1 = e1 ? Number(e1) : 0)
			}(this),
			function(self) {
				var wd;
				try {
					if (!(wd = window.localStorage)) return;
					wd.setItem("tls7", "1"), wd.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wd = wd
			}(this)
	}
}

function a2I() {
	this.a2M = function() {
		bm.po.x1(), bm.po.x2(), b1.z.close(0, 3255), 0 === a1.id ? a1.wd && a1.wd.clear() : 1 === a1.id ? a1.we.saveString(199, "") : 2 === a1.id && a1.wl.postMessage("clear")
	}, this.a2N = function() {
		2 === a1.id ? a1.wl.postMessage("showConsentForm") : 1 === a1.id && a1.we.setState(7)
	}, this.a2O = function() {
		this.setState(14)
	}, this.ia = function() {
		return 1 === bm.eV.wS(2)
	}, this.a2P = function() {
		bm.eV.wR(102, "")
	}, this.setState = function(a2Q) {
		1 === a1.id && 5 <= a1.e1 && a1.we.setState(a2Q)
	}, this.a3 = function() {
		var a2R;
		1 === a1.id && 7 <= a1.e1 ? a1.we.setState(5) : ((a2R = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a2R.toString())
	}, this.eT = function() {
		0 !== a1.id && (1 === a1.id ? a1.we.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e1 ? a1.wl.postMessage("prepare ad 2904813909") : a1.wl.postMessage("loadAds 2904813909")))
	}, this.ea = function(eZ) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e1 && (a1.we.presentAd(eZ), !0) : 2 === a1.id && 0 !== a1.e1 && (a1.wl.postMessage("showAd"), !0))
	}, this.ds = function() {
		2 === a1.id && a1.e1 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a2S + "' target='_blank'>" + bN
			.a2S + "</a>", !0, [new x("⬅️ " + L(40), function() {
				u.v(0)
			}, bE.p3)]))
	}
}

function dZ() {
	function a2V(e) {
		m6(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(40), function() {
				u.a2W()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.ol)]))
	}

	function a2h(e) {
		m6(e), u.v(4, 5, new w(L(41), a2d(e), !0))
	}

	function a2d(e) {
		var r1 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + r1 : 4527 === e ? "Player already in lobby" + r1 : 4577 === e ? "Your IP is banned." + r1 : 4530 === e ? "Lobby Timeout" + r1 : 4528 === e ?
			"Lobby Kick: Another login detected." + r1 : 4540 === e ? "You have been kicked." + r1 : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + r1 : 4555 === e ? "This Account is blocked." + r1 :
			4580 === e ? "More Gold needed" + r1 : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + r1 : 4591 === e ? "The algo determined you are a bot." + r1 : "Unknown error" + r1
	}

	function m6(e) {
		a2Y(e), u.z.a0()
	}

	function a2Y(e) {
		4540 === e && b1.z.a2k(e);
		var a2Q = ab.a2X();
		6 === a2Q ? b1.z.a2k(e) : bq.ey ? (u.y(), bq.v0(), b1.z.close(b1.z.ez, 3256)) : 8 === a2Q && aE.a2l(!0)
	}
	this.q = [], this.a2T = function(a2U, e) {
		if (this.q.push(e), 8 === u.tb && 0 === a2U)
			if (4211 === e) a2V(e);
			else {
				if (bq.ey && (4495 === e || 4480 === e) && b1.z.ez !== a2U) return void u.a2W();
				if (8 !== ab.a2X() && a2Y(), 4480 === e) return bm.po.x3(), void u.v(4, 0, new w(L(43), L(44), !0));
				var a2a = 0;
				u.a2b() && 10 === u.a2b().a2c && (a2a = u.a2b().a2c), u.v(4, a2a, new w(L(41), a2d(e), !0))
			}
		else {
			a2a = ab.a2X();
			if (6 === a2a) {
				if (4211 === e) return void a2V(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a2e(a2U)
			} else if (bq.ey) {
				if (a2U !== b1.z.ez) return
			} else {
				if (8 === a2a) return void(a2U !== b1.z.a2f || aE.l6 || 1 !== aE.a1N || aE.ha || aO.a2g(L(42, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}
			a2h(e)
		}
	}, this.a2i = function(e) {
		this.q.push(e), 8 === ab.a2X() ? aE.l6 || 1 !== aE.a1N || aO.a2g(L(42, [e])) : a2h(e)
	}, this.t = function() {
		this.q.push(3268), m6(3268)
	}, this.a2j = function() {
		a2V(4211)
	}
}

function d9() {
	var a2m, a2n, a2o = -15e3,
		a2p = !1;

	function he(e) {
		a39() || (a2p = !0, a3A(e, 1), b1.z.a3B(b1.z.a2f), a3C(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a2y(e) {
		a2o = bi.eY, a3A(e, 1), b1.z.a3B(b1.z.a2f), 0 < e.touches.length && (a2m = Math.floor(i.l * e.touches[0].clientX), a2n = Math.floor(i.l * e.touches[0].clientY), av.a2y(e) || a3C(a2m, a2n))
	}

	function a3C(fY, fa) {
		u.he(fY, fa), 0 === aE.a1N ? ab.he(fY, fa) : bF.a3D(fY, fa) || bh.he(fY, fa) || aY.he(fY, fa) || aM.a3E(fY, fa) || aQ.he(fY, fa) || 0 <= aN.he(fY, fa) || ax.he(fY, fa) || bM.a3F(fY, fa) || aM.a3G(fY, fa)
	}

	function a2u(e) {
		a39() || (a2p = !0, a3A(e, 1), a3H(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a2z(e) {
		a2o = bi.eY, a3A(e, 1), 0 < e.touches.length && (a2m = Math.floor(i.l * e.touches[0].clientX), a2n = Math.floor(i.l * e.touches[0].clientY), av.a2z(e) || a3H(a2m, a2n))
	}

	function a3H(fY, fa) {
		bM.rm() || (bM.hW = fY, bM.hX = fa), u.a2u(fY, fa), 0 === aE.a1N ? ab.a2u(fY, fa) : (bW.hY(fY, fa), bh.a2u(fY, fa) || (aN.a2u(fY, fa), aM.iD() ? aM.a2u(fY, fa) : aS.hf ? aS.a2u(fY) && (bi.dq = !0) : (aW.a2u(fY, fa), aT.ns && aT.a2u(fY, fa) &&
			(bi.dq = !0))))
	}

	function a2w(e) {
		a39() || (a3A(e, 1), a3I(), 0 === aE.a1N ? (ab.click(-1024, -1024), aU.reset()) : (aW.a3J(-1024, -1024), aN.a2u(-1024, -1024), aS.a3K(), aT.ns = !1))
	}

	function a2v(e) {
		a39() || (a3A(e, 1), a3L(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a2s && (bM.a2s = !1, e.preventDefault()))
	}

	function click(e) {
		a39() || a3A(e, 1)
	}

	function a30(e) {
		a2o = bi.eY, a3A(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a1N ? aT.ns = !1 : av.a3M() || (a3L(a2m, a2n, !1), bM.a2s && (bM.a2s = !1, e.preventDefault()))
	}

	function a31(e) {
		a2o = bi.eY, a3A(e, 1), a3L(a2m, a2n, !1), bM.a2s && (bM.a2s = !1, e.preventDefault())
	}

	function a32(e) {}

	function a33(e) {}

	function a34(e) {
		a39() || a3A(e, 0)
	}

	function a3L(fY, fa, a3N) {
		a3I(), 0 === aE.a1N ? ab.click(fY, fa) : (aW.a3J(fY, fa), bh.a3J(), aS.a3K(), aT.ns = !1, aM.click(fY, fa, a3N) ? bi.dq = !0 : aN.a2v(fY, fa))
	}

	function a3I() {
		u.a3I()
	}

	function a2x(e) {
		var fY, fa, deltaY;
		a39() || (a3A(e, 1), b1.z.a3B(b1.z.a2f), fY = Math.floor(i.l * e.clientX), fa = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a2x(fY, fa, deltaY), 0 === aE.a1N ? ab.a2x(fY, fa, deltaY) : aW.a2x(fY, fa,
			deltaY) || (aS.a3O(fY, fa) ? aS.a2x(deltaY) && (bi.dq = !0) : aT.a2x(fY, fa, deltaY)))
	}

	function a35(e) {
		a3A(e, 0)
	}

	function a3A(e, id) {
		0 === id && u.iD() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a2X() && e.preventDefault()
	}

	function a36(e) {
		if (__fx.keybindHandler(e.key)) return;
		a39() || 0 < i.tG || (e = e.code) && e.length && (ba.ei(e, 18) ? at.a3Q(3) : ba.ei(e, 22) ? at.a3Q(0) : ba.ei(e, 20) ? at.a3Q(1) : ba.ei(e, 24) ? at.a3Q(2) : ba.ei(e, 10) ? aS.a3R(31 / 32) : ba.ei(e, 8) ? aS.a3R(32 / 31) : ba.ei(e, 6) ? aS
			.a3R(7 / 8) : ba.ei(e, 4) ? aS.a3R(8 / 7) : ba.ei(e, 14) ? 0 !== aE.a1N && aT.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ei(e, 16) ? 0 !== aE.a1N && aT.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ei(e, 0) ?
			aE.a1N && bW.hZ(0) : ba.ei(e, 2) ? aE.a1N && bW.hZ(1) : ba.ei(e, 30) ? aE.a1N && bW.hZ(2) : ba.ei(e, 26) ? aE.a1N && bW.i7() : ba.ei(e, 28) && aE.a1N && bW.iC())
	}

	function a37(e) {
		if (!a39() && !(0 < i.tG || bi.eY < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a3S(1) || "Space" === code && u.a3S(0))) return bq.ey ? bq.v6.a3S(code) ? void 0 : void("Escape" === code && bM.fu()) : void(8 !== ab.a2X() && ab.a3S(e) ? bi.dq = !0 : "Escape" === code ?
				bM.fu() : ba.ei(code, 18) ? at.a3T(3) : ba.ei(code, 22) ? at.a3T(0) : ba.ei(code, 20) ? at.a3T(1) : ba.ei(code, 24) ? at.a3T(2) : ba.ei(code, 12) ? bF.a3U(!aE.nq) : "Space" === code && aE.a1N && (aN.hb && aN.a3V(), aE.ha) &&
				bF.a3W(!1))
		}
	}

	function a38() {
		"hidden" !== document.visibilityState && (bi.dq = !0)
	}

	function a39() {
		return a2o + 15e3 > bi.eY
	}

	function resize() {
		i.a3Y()
	}
	this.a2q = 0, this.a2r = "", this.a2s = !1, this.hW = 0, this.hX = 0, this.di = function() {
		a2t.addEventListener("mousedown", he, {
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
	}, this.a3F = function(fY, fa) {
		return !!bF.he(fY, fa) || !!(aW.he(fY, fa) || aT.he(fY, fa) || aS.he(fY, fa) || aO.he(fY, fa))
	}, this.a3X = a39, this.rm = function() {
		return !a2p || 0 < a2o
	}, this.fu = function() {
		if (!u.iD()) return 8 === ab.a2X() ? aE.nq ? void bF.a3U(!1) : bh.iD ? void bh.a3V() : void aN.a3V() : void(7 !== ab.a2X() && 6 === ab.a2X() && aa.a3Z());
		u.a3S(2)
	}
}

function c2() {
	this.rK = new a3a, this.rS = new a3b, this.gn = new a3c, this.sJ = new a3d, this.zW = new a3e, this.a3f = new a3g, this.canvas = new a3h, this.color = new a3i, this.a3j = new a3k, this.di = function() {
		this.rK.x0()
	}
}

function a3b() {
	this.xv = function(h) {
		h.fill(0)
	}, this.a3l = function(h) {
		for (var fR = h.length, aC = 0; aC < fR; aC++) h[aC] = []
	}, this.a3m = function(a0T, a3n) {
		for (var a0U = bR.g1, aC = 0; aC < 3; aC++) a0U[aC] = a3n * a0T[aC];
		return a0U
	}, this.a3o = function(a0T, a0U, a3p) {
		for (var k1 = 0, aC = 0; aC < 3; aC++) k1 += Math.abs(a0T[aC] - a0U[aC]);
		return a3p <= k1
	}, this.a3q = function(a0T, a3r) {
		for (var aC = 0; aC < 3; aC++) a0T[aC] = bO.iZ(a0T[aC] + a3r, 0, 255);
		return a0T
	}, this.a3s = function(h, tv, tw) {
		tw = tw || h.length - 1;
		for (var a3t = 0, aC = tv = tv || 0; aC <= tw; aC++) a3t += h[aC];
		return a3t
	}, this.a3u = function(h, a3v) {
		for (var aC, a3w, fR = h.length, a3x = [], fk = fR - 1; 0 <= fk; fk--) {
			for (aC = a3w = 0; aC < fR; aC++) a3v(h[aC]) < a3v(h[a3w]) && (a3w = aC);
			fR--, a3x.push(h[a3w]), h[a3w] = h[fR], h.pop()
		}
		return a3x
	}, this.min = function(h) {
		var aC, ft, fR = h.length;
		if (0 === fR) return 0;
		for (ft = h[0], aC = 1; aC < fR; aC++) ft = Math.min(ft, h[aC]);
		return ft
	}, this.max = function(h) {
		var fR = h.length;
		if (0 === fR) return 0;
		for (var ft = h[0], aC = 1; aC < fR; aC++) ft = Math.max(ft, h[aC]);
		return ft
	}, this.a3y = function(h, ft) {
		for (var fR = h.length, gu = 0, aC = 0; aC < fR; aC++) gu += h[aC] > ft;
		return gu
	}, this.a3z = function(a40, a41, min) {
		for (var fR = a41[0], aC = fR - 1; 0 <= aC; aC--) a40[aC] < min && (a40[aC] = a40[--fR]);
		a41[0] = fR
	}, this.a42 = function(h, fR, value) {
		for (var aC = 0; aC < fR; aC++) h[aC] -= value
	}, this.a43 = function(h) {
		for (var fR = h.length, aC = 0; aC < fR; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a44 = function(r1, h, a45) {
		h.fill(0);
		for (var tz = r1.split(","), fR = Math.min(tz.length, h.length), aC = 0; aC < fR; aC++) h[aC] = Math.min(parseInt(tz[aC]), a45)
	}, this.a46 = function(r1, h, sG) {
		h.fill("");
		for (var tz = r1.split('"'), fR = Math.min(tz.length, 2 * h.length), iJ = 0, aC = 1; aC < fR; aC += 2) h[iJ++] = tz[aC].slice(0, sG)
	}, this.a47 = function(h, gu) {
		if (0 === gu) h.fill(0);
		else {
			var a3t = this.a3s(h),
				fR = h.length;
			if (0 === a3t) h.fill(bO.fs(gu, fR));
			else
				for (var aC = 0; aC < fR; aC++) h[aC] = bO.fs(gu * h[aC], a3t);
			if (0 === (a3t = this.a3s(h))) h[1] = gu;
			else
				for (var iJ = 0; a3t++ < gu;) h[iJ = (iJ + 1) % fR] && h[iJ]++
		}
	}, this.a48 = function(h) {
		if (!h) return 0;
		var fR = h.length;
		if (0 === fR) return 0;
		for (var ft = h[fR - 1], aC = fR - 2; 0 <= aC; aC--)
			if (h[aC] !== ft) return aC + 2;
		return 1
	}, this.a49 = function(h) {
		for (var a3t = 0, aC = 0; aC < h.length; aC++) a3t += h[aC].length;
		return a3t
	}, this.a4A = function(a4B) {
		for (var h = [], aC = 0; aC < a4B.length; aC++) h = h.concat(a4B[aC]);
		return h
	}, this.has = function(h, ft) {
		for (var fR = h.length, aC = 0; aC < fR; aC++)
			if (h[aC] === ft) return !0;
		return !1
	}
}

function a3h() {
	this.a07 = function(a4C, eG, a4D) {
		var iN = a4C.height,
			a4E = bD.rK.xl(iN, iN),
			iT = bD.rK.getContext(a4E);
		return function(j, iT, a4D) {
			iT.fillStyle = a4D, iT.beginPath(), iT.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), iT.fill()
		}(iN, iT, a4D), iT.drawImage(a4C, -eG * iN, 0), a4E
	}, this.a4G = function(a4H) {
		var iT, iQ, iN = a4H.height;
		return a4H.width === iN && (iQ = (iT = bD.rK.getContext(a4H, !0)).getImageData(0, 0, iN, iN), bD.a3f.a4I(iQ.data, iN, iN, .9), iT.putImageData(iQ, 0, 0)), a4H
	}
}

function a3i() {
	this.a4J = function(ft) {
		return [ft >> 12 & 63, ft >> 6 & 63, 63 & ft]
	}, this.a4K = function(ft) {
		for (var h = this.a4J(ft), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a4L = function(ft) {
		ft = this.a4K(ft);
		return bD.color.oF(ft[0], ft[1], ft[2])
	}, this.a4M = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.oF = function(eF, tz, fl) {
		return "rgb(" + eF + "," + tz + "," + fl + ")"
	}, this.oH = function(eF, tz, fl, fk) {
		return "rgba(" + eF + "," + tz + "," + fl + "," + fk.toFixed(3) + ")"
	}, this.ro = function(ei) {
		for (var h = ei.split("(")[1].split(","), g0 = bR.g0, aC = 0; aC < 3; aC++) g0[aC] = parseInt(h[aC]);
		return 4 === h.length ? g0[3] = 255 * parseFloat(h[3].slice(0, -1)) : g0[3] = 255, g0
	}, this.rp = function(a4N, fU) {
		for (var h = a4N.slice(a4N.indexOf("(") + 1, a4N.indexOf(")")).split(","), g0 = bR.g0, aC = 0; aC < 3; aC++) g0[aC] = bO.iZ(parseInt(h[aC].trim(), 10) + fU, 0, 255);
		return 3 === h.length ? this.oF(g0[0], g0[1], g0[2]) : (a4N = parseFloat(h[3].trim()), this.oH(g0[0], g0[1], g0[2], a4N = 0 === a4N ? .3 : a4N))
	}, this.vb = function(a4O, a4P) {
		for (var k1 = 0, aC = 0; aC < 3; aC++) k1 += Math.abs(a4P[aC] - a4O[aC]);
		if (!(240 <= k1))
			for (aC = 0; aC < 3; aC++) a4P[aC] = a4O[aC] + (a4O[aC] < 128 ? 80 : -80)
	}, this.a4Q = function(h) {
		for (var r1 = "#", aC = 0; aC < 3; aC++) {
			var eF = h[aC].toString(16);
			r1 += 1 === eF.length ? "0" + eF : eF
		}
		return r1
	}, this.a4R = function(r1) {
		var eF, tz;
		return r1.length < 7 ? bE.oE : (eF = parseInt(r1.slice(1, 3), 16), tz = parseInt(r1.slice(3, 5), 16), r1 = parseInt(r1.slice(5, 7), 16), this.oF(eF, tz, r1))
	}
}

function a3e() {
	this.a4S = function(r1, font, maxWidth) {
		if (font && (vw.font = font), vw.measureText(r1).width <= maxWidth) return r1;
		for (var aC = r1.length - 1; 1 <= aC; aC--)
			if (r1 = r1.substring(0, aC), vw.measureText(r1 + "...").width <= maxWidth) return r1 + "...";
		return "..."
	}
}

function a3k() {
	var a4U = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a4V = function(eY) {
		var a4X, r1 = new Date(eY.getTime() - 6e4 * eY.getTimezoneOffset()).toUTCString();
		return r1.length < 12 || (r1 = r1.substring(5, r1.length), 0 === (eY = eY.getTimezoneOffset())) ? r1 : (a4X = (eY < 0 ? "+" : "-") + bO.fs(Math.abs(eY), 60), 0 == (eY = Math.abs(eY) % 60) ? r1 + a4X : r1 + a4X + ":" + (eY < 10 ? "0" :
			"") + eY)
	}, this.a4Y = function(eY) {
		var r1 = eY.toUTCString();
		return r1.length < 12 ? r1 : function(eY) {
			return a4U[eY.getUTCDay()]
		}(eY) + ", " + r1.substring(5, r1.length - 4)
	}
}

function a3a() {
	var a4a = null;
	this.a0O = 0, this.x0 = function() {
		var ft = bm.eV.data[5].value;
		a4a = "px " + ft, "system-ui" !== ft && (a4a += ", system-ui"), this.a0O = iM(32, 32, ["a", "b", "m"], 200, a4a)
	}, this.xl = function(j, k) {
		var ei = document.createElement("canvas");
		return ei.width = j, ei.height = k, ei
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(zW, j, k) {
		return zW.getImageData(0, 0, j, k)
	}, this.t8 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a4a : 1 === type ? "bold " + size + a4a : 2 === type ? "lighter " + size + a4a : 3 === type ? "italic " + size + a4a : 4 === type ? "oblique " + size + a4a : 5 === type ? "small-caps " +
			size + a4a : "small-caps bold " + size + a4a
	}, this.textAlign = function(iT, id) {
		iT.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(iT, id) {
		iT.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.rU = function(e, code, color) {
		color = this.rT(bf.tA) + " solid " + (color || bE.oN);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.u1 = function(e, fY, fa, j, k) {
		e = e.style;
		e.left = this.u2(fY), e.top = this.u2(fa), e.width = this.u2(j), e.height = this.u2(k)
	}, this.rL = function(ft) {
		return 1 + ft * a1.a2.ia()
	}, this.sc = function(nz, h0) {
		return nz * this.rL(void 0 === h0 ? .5 : h0) * i.ib / i.l
	}, this.u0 = function(nz, h0) {
		return nz * this.rL(void 0 === h0 ? .5 : h0) * i.ib
	}, this.tg = function(nz, h0, a4b) {
		return this.rL(h0) * Math.min(nz * i.ib, a4b * i.j) / i.l
	}, this.rT = function(ft) {
		return ft.toFixed(1) + "px"
	}, this.u2 = function(ft) {
		return this.vM(ft).toFixed(1) + "px"
	}, this.vM = function(ft) {
		return ft / i.l
	}, this.a4d = function(a4e) {
		for (var r1 = "<ul>", fR = a4e.length, aC = 0; aC < fR; aC++) r1 += "<li>" + a4e[aC][0] + ": <a href='" + a4e[aC][1] + "' target='_blank'>" + a4e[aC][0] + "</a></li>";
		return r1 += "</ul>"
	}, this.a4f = function(a4g) {
		return "<a href='" + a4g + "' target='_blank'>" + a4g + "</a>"
	}, this.a4h = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.vZ = function(e) {
		var eZ = e.textContent;
		bD.sJ.a4i(eZ, "✔") || (1 === eZ.length ? e.textContent = "✔" : e.textContent = eZ + " ✔", setTimeout(function() {
			e.textContent = eZ
		}, 500))
	}, this.measureText = function(r1) {
		return vw.measureText(r1).width
	}, this.tr = function(a4j) {
		a4j.style.overflowX = "auto", a4j.style.overflowY = "hidden", a4j.style.whiteSpace = "nowrap", a4j.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.u4 = this.scrollLeft, e.preventDefault())
		}), a4j.addEventListener("scroll", function() {
			this.u4 = this.scrollLeft
		})
	}
}

function a3c() {
	this.hc = function(a2Q) {
		return 0 === a2Q ? 1 === aE.a1N && aE.hp : 1 === a2Q ? 1 === aE.a1N && !aE.hp : 2 === aE.a1N
	}, this.hd = function(player) {
		return 0 !== ah.nM[player] && 2 !== ah.a4k[player]
	}, this.a4l = function(player) {
		return player === aE.fB && 2 !== ah.a4k[player]
	}, this.lQ = function(player, jv) {
		return player !== jv && (0 === bj.fP[player] || bj.fP[player] !== bj.fP[jv])
	}, this.mX = function() {
		return am.lI < 2 ? 0 : aE.iL ? 1 < bk.a4m() : ah.hF[mN[1]]
	}, this.a4n = function() {
		var lI = am.lI;
		if (0 !== lI) {
			if (!aE.iL) return !this.k9(mN[0]);
			for (var fP = bj.fP, lK = bk.lL(), lN = am.lN, aC = lI - 1; 0 <= aC; aC--) {
				var gz = lN[aC];
				if (fP[gz] === lK && !this.k9(gz)) return 1
			}
		}
		return 0
	}, this.a4o = function(player) {
		return player === aE.fB
	}, this.a4p = function(jv, nz) {
		return ah.hT[aE.fB] < nz * ah.hT[jv]
	}, this.k9 = function(player) {
		return player >= aE.km || 2 === ah.a4k[player]
	}, this.lk = function(player) {
		return 0 !== ah.nM[player]
	}, this.a1D = function(player) {
		return player < aE.km
	}, this.qh = function(a4q, a4r) {
		return a4q !== a4r
	}, this.gq = function(player, ft) {
		var min;
		return ft = this.a4s(player, ft), ah.hT[player] += ft, ah.a4t[player] && (min = Math.min(ah.a4t[player], ah.hT[player]), ah.a4t[player] -= min, ah.hT[player] -= min), ft
	}, this.a4s = function(player, ft) {
		var a4u = ah.hT[player];
		return ft = Math.min(ft, ah.hF[player] * aE.a4v - a4u), ft = Math.min(ft, aE.a4w - a4u), Math.max(ft, 0)
	}, this.mu = function(player, j4, a4x, a4y) {
		var a4u = ah.hT[player],
			j4 = bO.fs(a4u * (j4 + 1), 1024),
			a4x = bO.fs(a4x * a4u, 1024),
			j4 = Math.min(j4, a4u - a4x);
		return 10 === aE.l4 && (j4 = b5.a50(player, j4)), bR.fy[0] = j4, bR.fy[1] = a4x, a4y <= j4
	}, this.qB = function(player, pt, ps) {
		var player = ah.hT[player],
			a4z = bO.fs(64 * player, 1024);
		return pt = Math.min(pt, player - a4z), pt = this.a4s(ps, pt), bR.fy[0] = pt, bR.fy[1] = a4z, 1 <= pt
	}, this.a51 = function(player, pt, ps) {
		var player = ah.hT[player],
			a4z = bO.fs(64 * player, 1024);
		return pt = Math.min(pt, player - a4z), this.a4s(ps, pt)
	}, this.qD = function(pt, ps) {
		return pt = this.a4s(ps, pt), bR.fy[0] = pt, bR.fy[1] = 0, 1 <= pt
	}, this.j3 = function(player, a52) {
		return bO.fs(ah.hT[player] * (a52 + 1), 1024)
	}, this.a53 = function(player, a4x) {
		a4x = bO.fs(a4x * ah.hT[player], 1024);
		bR.fy[1] = a4x, ah.hT[player] -= a4x
	}, this.go = function(player, a54) {
		var gC, gE, fl = ah.hT[player];
		return a54 <= fl ? ah.hT[player] -= a54 : (ah.hT[player] = 0, gE = ah.a4t[player] + (gC = 5 * ((fl = a54 - fl) >> 2)), bg.gr(player, gC - fl, 12), gE <= aE.a55 ? ah.a4t[player] = gE : (ah.a4t[player] = aE.a55, bg.gr(player, gE - aE.a55,
			18))), a54
	}, this.ly = function(player, j4) {
		var hT = ah.hT,
			a4u = hT[player],
			j4 = bO.fs(a4u * (j4 + 1), 1024),
			a4z = Math.max(bO.fs(a4u, 10), 1e3);
		return (j4 = Math.min(j4, a4u - a4z)) < 0 ? (hT[player] = 0, a4z = Math.min(1e3, a4u + aE.a55 - ah.a4t[player]), bR.fy[1] = a4z, ah.a4t[player] += a4z - a4u, 0) : (bR.fy[1] = a4z, 10 === aE.l4 && (j4 = b5.a50(player, j4)), hT[player] -=
			a4z + j4, j4)
	}, this.mw = function(player) {
		ah.hT[player] -= bR.fy[0] + bR.fy[1]
	}, this.qi = function(player, jv) {
		return (jv = Math.min(jv, aE.fO)) < aE.fO && 0 === ah.nM[jv] && (jv = aE.fO), (bR.fN[0] = jv) === aE.fO || bv.fK(player, jv)
	}, this.ql = function(player, ps) {
		return 0 !== ah.nM[ps] && !bv.fK(player, ps)
	}, this.a56 = function(player, a57) {
		for (var gz, fR = am.lI, a58 = 0, a59 = mN, aC = 0; aC < fR; aC++)
			if (gz = a59[aC], !this.k9(gz)) {
				if (player === gz) return !0;
				if (++a58 > a57) return !1
			} return !1
	}, this.mJ = function(gz) {
		var a5A = aE.iL ? bk.lJ() : ah.hF[mN[0]];
		return a5A >= bO.fs(gz * aE.kW, 100)
	}, this.a5B = function(ft, min, max) {
		return Math.floor(bO.iZ(isNaN(ft) ? 0 : Number(ft), min, max))
	}
}

function a3g() {
	this.a5C = function(canvas, a5D, a5E) {
		var j = canvas.width,
			k = canvas.height,
			ei = bD.rK.xl(j, k),
			iT = bD.rK.getContext(ei, !0),
			canvas = (iT.drawImage(canvas, 0, 0), iT.getImageData(0, 0, j, k));
		return a5D(canvas.data, j, k, a5E), iT.putImageData(canvas, 0, 0), ei
	}, this.a5F = function(xw, j, k) {
		for (var fY = j - 1; 0 <= fY; fY--)
			for (var fa = k - 1; 0 <= fa; fa--) {
				var aC = 4 * (fY + fa * j);
				xw[3 + aC] = xw[aC], xw[aC] = xw[1 + aC] = xw[2 + aC] = 255
			}
	}, this.a5G = function(xw, j, k) {
		for (var fY = j - 1; 0 <= fY; fY--)
			for (var fa = k - 1; 0 <= fa; fa--) {
				var aC = 4 * (fY + fa * j);
				xw[1 + aC] > xw[2 + aC] + 10 && (xw[3 + aC] = xw[aC], xw[1 + aC] = xw[2 + aC])
			}
	}, this.a5H = function(xw, j, k, a5E) {
		for (var gap = Math.floor(Math.min(j, k) * a5E), fY = 0; fY < j; fY++)
			for (var aC, fa = 0; fa < k; fa++)(fY < gap || fa < gap || j - gap <= fY || k - gap <= fa) && (xw[3 + (aC = 4 * (fY + fa * j))] = 255 - 255 * (xw[1 + aC] - xw[aC]) / (255 - xw[aC]))
	}, this.a5I = function(xw, j, k, a5E) {
		for (var fY = j - 1; 0 <= fY; fY--)
			for (var fa = k - 1; 0 <= fa; fa--) {
				var aC = 4 * (fY + fa * j);
				xw[aC] = a5E[0], xw[1 + aC] = a5E[1], xw[2 + aC] = a5E[2]
			}
	}, this.a5J = function(xw, j, k, a5E) {
		for (var gap = Math.floor(j * a5E), fY = 0; fY < j; fY++)
			for (var aC, fa = 0; fa < k; fa++)(fY < gap || fa < gap || j - gap <= fY || k - gap <= fa) && (xw[aC = 4 * (fY + fa * j)] = xw[1 + aC] = xw[2 + aC] = 0)
	}, this.a5K = function(xw, j, k) {
		for (var fa, aC, fY = j - 1; 0 <= fY; fY--)
			for (fa = k - 1; 0 <= fa; fa--) 200 < xw[1 + (aC = 4 * (fY + fa * j))] && xw[1 + aC] - 20 > xw[aC] && xw[1 + aC] - 20 > xw[2 + aC] ? xw[aC] + xw[2 + aC] < 40 ? xw[3 + aC] = 0 : (xw[3 + aC] = xw[aC], xw[aC] = 255, xw[1 + aC] = 255, xw[
				2 + aC] = 255) : xw[aC] < 50 && xw[1 + aC] < 50 && xw[2 + aC] < 50 && (xw[aC] + xw[1 + aC] + xw[2 + aC] < 50 ? xw[3 + aC] = 180 : xw[3 + aC] = 180 + Math.floor(75 * (xw[aC] + xw[1 + aC] + xw[2 + aC] - 50) / 100))
	}, this.a5L = function(xw, j, k) {
		for (var fa, aC, fY = j - 1; 0 <= fY; fY--)
			for (fa = k - 1; 0 <= fa; fa--) xw[1 + (aC = 4 * (fY + fa * j))] > xw[aC] + 20 && xw[1 + aC] > xw[2 + aC] + 20 && xw[aC] + xw[2] < 40 && (xw[3 + aC] = 255 - xw[1 + aC], xw[aC] = xw[1 + aC] = xw[2 + aC] = xw[aC])
	}, this.a4I = function(xw, j, k, a5E) {
		for (var eF = j >> 1, fY = 0; fY < j; fY++)
			for (var fa = 0; fa < k; fa++) Math.sqrt((fY - eF) * (fY - eF) + (fa - eF) * (fa - eF)) > a5E * eF && (xw[4 * (fY + fa * j) + 3] = 0)
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
	this.sK = function(ek) {
		return ek.replace(a5N, function(match) {
			return a5M[match] || match
		})
	}, this.a0e = function(ft) {
		var aC, a5O, a5P, a5Q, a5R;
		if (ft < 0) return "-" + this.a0e(Math.abs(ft));
		if (ft < 1e3) return ft.toString();
		for (a5O = Math.floor(Math.log(ft + .5) / Math.log(10)) + 1, a5P = Math.floor((a5O - 1) / 3), a5R = (a5Q = ft.toString()).substring(a5O - 3, a5O), aC = 1; aC < a5P; aC++) a5R = a5Q.substring(a5O - 3 * (aC + 1), a5O - 3 * aC) + " " + a5R;
		return a5Q.substring(0, a5O - 3 * a5P) + " " + a5R
	}, this.a5S = function(gz, a5O) {
		return gz.toFixed(a5O) + "%"
	}, this.a5T = function(ft, a5U) {
		return ft.toFixed(bO.iZ(Math.floor((void 0 === a5U ? 3 : a5U) - Math.log10(Math.max(ft, 1))), 0, 8))
	}, this.a5V = function(ft, nz, a5O) {
		return (ft * nz).toFixed(a5O)
	}, this.a26 = function(username) {
		var fV, fG = username.indexOf("[");
		return !(fG < 0) && 1 < (fV = username.indexOf("]")) - fG && fV - fG <= 8 ? username.substring(fG + 1, fV).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a26;
	this.a5W = function(r1) {
		for (var fk = Math.floor(.5 * r1.length + .5), o5 = Math.floor(.5 * (fk - 1)), aC = 0; aC < o5; aC++)
			for (var fl = -1; fl < 2; fl += 2) {
				var ei = fk + fl * aC;
				if (" " === r1[ei]) return [this.a22(r1.substring(0, ei)), this.a5X(r1.substring(ei))]
			}
		return [r1.substring(0, fk), r1.substring(fk)]
	}, this.a5X = function(r1) {
		for (var fR = r1.length, aC = 0; aC < fR; aC++)
			if (" " !== r1[aC]) return r1.substring(aC);
		return r1
	}, this.a22 = function(r1) {
		for (var aC = r1.length - 1; 0 <= aC; aC--)
			if (" " !== r1[aC]) return r1.substring(0, aC + 1);
		return r1
	}, this.a5Y = function(r1, a5Z) {
		return r1.split("(")[0] + "(🧈 " + a5Z.toFixed(2) + ")"
	}, this.startsWith = function(r1, a5a) {
		return r1.substring(0, a5a.length) === a5a
	}, this.a4i = function(r1, a5a) {
		var fR = r1.length;
		return r1.substring(fR - a5a.length, fR) === a5a
	}, this.a5b = function(h, a5c, a5d) {
		var r1 = "",
			fR = h.length - 1;
		a5d = a5d || "";
		for (var aC = 0; aC < fR; aC++) r1 += a5d + h[aC] + a5d + ",", (aC + 1) % a5c == 0 && (r1 += "\n");
		return r1 += a5d + h[fR] + a5d
	}, this.a5e = function(r1, a0T, a0U) {
		return r1.replace(new RegExp(a0T, "g"), a0U)
	}
}

function a5f() {
	this.eh = function(player, fD) {
		aJ.zG(player, bP.fZ(fD), bP.fb(fD)) && (bi.dq = !0), aE.l6 && this.ed()
	}, this.ed = function() {
		aE.hp = !1;
		for (var aC = 0; aC < aE.km; aC++) 0 !== ah.nM[aC] && 0 === ah.hF[aC] && aJ.zN(aC);
		0 !== ah.nM[aE.fB] ? (bg.nI[7] = ah.hF[aE.fB], bg.nI[8] = ah.hT[aE.fB], aS.a5g(), aX.a5h(), aE.ha || aI.nh(ah.jK[aE.fB] - 5, ah.jM[aE.fB] - 5, ah.jL[aE.fB] + 5, ah.jN[aE.fB] + 5), aw.di()) : aY.show(!1, !1, !1, !0), aO.a5i(18), ag.a5j(),
			ag.n8(!0), bS.z.a5k(), aM.sa(), aE.qg = null, be.a5l = !0, be.a5m(), aE.l6 && a1.a2.setState(1)
	}
}

function c4() {
	this.fO = 512, this.a4w = 15e8, this.a5n = 1e9, this.a55 = 5e4, this.a5o = 512, this.gl = 2, this.fB = 0, this.km = 0, this.a1Q = 0, this.l8 = 0, this.a1P = 0, this.yR = 512, this.yW = 512, this.a4v = 150, this.l6 = !0, this.ha = 0, this.a1N = 0,
		this.kW = 0, this.nq = !1, this.hp = 0, this.a5p = 0, this.iL = !1, this.yY = 0, this.yZ = 0, this.l4 = 0, this.zo = 0, this.qg = null, this.a1g = new zc, this.a5q = 30, this.a1K = 0, this.a1S = 0, this.a1f = 0, this.a1F = 0, this.data =
		new a5r, this.a5s = new a5t, this.a5u = 0, this.a5v = "", this.a5w = function() {
			bR.di(), bU.di(), bt.clear(), this.a1Q = this.km = this.data.humanCount, this.l6 = 1 === this.a1Q, this.nq = !1, this.ha = this.data.isReplay, this.l4 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.zo = this.data.isContest, this.iL = this.l4 < 7 || 9 === this.l4, this.l4 = 10 === this.l4 && this.l6 ? 7 : this.l4, this.l4 = 8 === this.l4 && 2 !== this.km ? 7 : this.l4, b0.di(),
				this.yY = this.data.numberTeams, this.data.teamPlayerCount ? this.yZ = +(0 < this.data.teamPlayerCount[0]) : (this.yZ = 0, this.iL && this.l6 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.yY + 1), aE.a5s.a5x())), this.a5q = this.km <= 2 ? 30 : this.km <= 50 ? 40 : 50, this.a5p = this.hp = this.data.selectableSpawn, this.qg = this.hp ? new a5f : null, 1 === m.dz ? this.yR = this.km : this.yR = this.data
				.playerCount, this.yW = this.yR, this.l8 = this.yR - this.km, this.a1P = 0, this.fB = this.data.selectedPlayer, this.a1K = 0, this.a1S = 0, this.a1f = 0, this.a1F = 0, az.a5y(this.data.spawningSeed), af.di(), ah.di(), ao.di(), aj
				.a5z(), bB.pi.qU = [], bB.hr.pl = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.di(), this.a1N = 1, bg.di(), a60(), ad.dj(), aq.a61(), be.di(), ad
				.di(), au.di(), bP.di(), bQ.di(), ap.di(), bY.a62(), aF.di(), aj.a8(), aJ.di(), aK.di(), am.a63(), bC.di(), bk.di(), bS.di(), bh.di(), a64.putImageData(a65, 0, 0), aW.di(), aT.di(), aS.di(), bF.di(), ax.di(), aV.di(), aX.di(), aN
			.di(), aR.di(), aO.di(), aQ.di(), aM.di(), aY.di(), aG.di(), aH.di(), gU(), ae.di(), ag.di(), b5.di(), b6.di(), b2.di(), b8.di(), b9.di(), this.a1g.di(), bi.a62(), aI.ng(), 0 === ah.nM[aE.fB] && aY.show(!1, !0), ag.n8(!0), aw.di(), bi
				.dq = !0, this.ha || this.l6 && this.hp || a1.a2.setState(1), this.a5u = 0
		}, this.a2l = function(eX) {
			bC.qe.a67.length ? this.a5v = bC.qe.a67 : (this.a5v = bC.a68.a0p(), __fx.replayHistory.save(this.a5v)), b1.z.a69(), bt.clear(), this.a1N = 0, bi.a6A(), a1.a2.setState(0), ab.setState(0), bX.eO.show(eX), 2 === this.a5u ? u.z.a6B(0) : 1 ===
				this.a5u ? u.v(19) : u.v(5, 5)
		}, this.a6C = function() {
			return this.ha ? aN.hb || !bF.a6D : this.l6 && (aN.hb || this.hp)
		}, this.a6E = function() {
			return 1 === this.a1N && !this.hp
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
		bD.rS.a47(a6G.teamPlayerCount, a6G.playerCount), a6G.numberTeams = bD.rS.a3y(a6G.teamPlayerCount, 0), a6G.teamPlayerCount[0] && a6G.teamPlayerCount[7] && (a6G.teamPlayerCount[7] = 0, this.a5x())
	}, this.a6H = function() {
		var a6G = aE.data;
		a6G.mapType < 2 ? bV.a8(bV.a6I(a6G), a6G.mapSeed) : bV.a6J(a6G.canvas)
	}, this.a6K = function() {
		var a6G = aE.data;
		a6G.colorsData || (a6G.colorsData = new Uint32Array(1)), 0 === a6G.gameMode && (a6G.colorsData[0] = bm.z.wy()), a6G.selectableName && (a6G.playerNamesData || (a6G.playerNamesData = new Array(1)), a6G.playerNamesData[0] = bm.eV.data[122]
			.value), a6G.a6F = new Uint32Array(1), a6G.a6F[0] = bJ.td.xb(bm.eV.data[105].value, 5)
	}, this.a6L = function() {
		aE.data = new a5r
	}
}

function de() {
	var a6M = [];
	this.qE = function(player, ps, a6N, a6O) {
		player === aE.fB || ps === aE.fB || !a6O && bD.gn.k9(player) || bD.gn.k9(ps) || this.zp(ah.zq[player] + " supported " + ah.zq[ps] + " with " + bD.sJ.a0e(a6N) + " ressource" + (1 === a6N ? "." : "s."))
	}, this.zp = function(r1, q3) {
		r1 = {
			eY: aX.a6Q(),
			r1: r1,
			q3: q3
		};
		a6M.push(r1), 30 === u.tb && u.a2b().zp(r1)
	}, this.clear = function() {
		a6M = [];
		var tz = u.a6R(30);
		tz && tz.clear()
	}, this.a6S = function() {
		return a6M
	}
}

function dY() {
	this.a0L = 0, this.gap = 0, this.tA = 0, this.rQ = 0, this.di = function() {
		this.resize()
	}, this.resize = function() {
		this.a0L = .0022 * bD.rK.rL(.5) * i.ib, this.tA = this.a0L / i.l, this.gap = Math.max(Math.floor((a1.a2.ia() ? .0114 : .01296) * i.ib), 2), this.rQ = this.gap / i.l
	}
}

function dX() {
	this.a6T = function() {
		return a1.a2.ia() ? 2 : 1
	}
}

function cF() {
	var rt, fY, fa, a6U, a6V, a6W, eY, a6X, a6Y, a6Z, a6a, gap, zoom, qN, a6b;

	function a6p(m1, m2, f5) {
		ad.fM(f5) || -1 === (m1 = bQ.lb.a6y(m1, m2)) ? aO.a6x(f5) : aO.a6z(m1)
	}

	function a6l(a6X) {
		for (var aC = qN.length - 1; 0 <= aC; aC--)
			if (qN[aC] === a6X) return 1
	}

	function a6j(a6g) {
		var aC, fR;
		if (-1 !== a6g)
			for (fR = rt.length, aC = 0; aC < fR; aC++)
				if (rt[aC].iD && rt[aC].fY + 1 === a6g % 4 && rt[aC].fa + 1 === a6g >> 2) return aC;
		return -1
	}

	function a6h(m1, m2) {
		var tz = gap / 2;
		return m1 < fY - a6U - 3 * tz || fY + 3 * a6U + 5 * tz < m1 || m2 < fa - a6U - 3 * tz || fa + 2 * a6U + 3 * tz < m2 ? -1 : 4 * (m2 < fa - tz ? 0 : m2 < fa + a6U + tz ? 1 : 2) + (m1 < fY - tz ? 0 : m1 < fY + a6U + tz ? 1 : m1 < fY + 2 * a6U +
			3 * tz ? 2 : 3)
	}
	this.a6c = function() {
		var aC, fl, a6f = [bE.oo, bE.p2, bE.oL, bE.pP, bE.pF];
		for (rt = new Array(10), aC = 0; aC < 10; aC++) rt[aC] = {
			id: aC,
			iD: !1,
			lj: 0,
			canvas: [],
			fY: 0,
			fa: 0
		};
		for (rt[0].colors = [0, 1, 2, 3], rt[0].fY = 0, rt[0].fa = 0, rt[1].colors = [1, 4], rt[1].fY = 1, rt[1].fa = 0, rt[2].colors = [0, 1], rt[2].fY = -1, rt[2].fa = 0, rt[3].colors = [0], rt[3].fY = 0, rt[3].fa = 0, rt[4].colors = [0, 2],
			rt[4].fY = 1, rt[4].fa = 1, rt[5].colors = [3], rt[5].fY = 0, rt[5].fa = -1, rt[6].id = 20, rt[6].colors = [0], rt[6].fY = 1, rt[6].fa = -1, rt[7].id = 21, rt[7].colors = [0], rt[7].fY = 0, rt[7].fa = 1, rt[8].id = 16, rt[8]
			.colors = [0], rt[8].fY = 0, rt[8].fa = 0, rt[9].id = 10, rt[9].colors = [4], rt[9].fY = 2, rt[9].fa = 0, aC = 0; aC < 10; aC++)
			for (fl = 0; fl < rt[aC].colors.length; fl++) rt[aC].canvas.push(function(id, a4D) {
				if (id < 20) return bD.canvas.a07(ac.get(3), id, a4D);
				var a4D = ac.get(3).height,
					a4E = bD.rK.xl(a4D, a4D),
					iT = bD.rK.getContext(a4E);
				20 === id ? iT.drawImage(ac.get(18), 0, 0) : 21 === id && ak.xw.a0M(ak.sZ.a0B + ak.sZ.a0S, iT, 0, 0, a4D);
				return a4E
			}(rt[aC].id, a6f[rt[aC].colors[fl]]))
	}, this.a6e = function() {
		return rt
	}, this.di = function() {
		qN = [], fY = fa = eY = 0, a6V = a6W = -1e3, this.resize()
	}, this.resize = function() {
		a6U = Math.floor((a1.a2.ia() ? .075 : .0468) * i.ib), zoom = a6U / ac.get(3).height, gap = Math.floor(a6U / 3)
	}, this.a3E = function(m1, m2) {
		return !!this.iD() && (bi.dq = !0, !!ak.xw.he(m1, m2, a6Y) || (m1 = function(m1, m2) {
			a6W = a6V = -1e3;
			var a6i = a6j(a6h(m1, m2));
			if (-1 === a6i) return 0;
			if (1 !== rt[a6i].colors[rt[a6i].lj])
				if (5 === a6i) {
					if (! function() {
							var eZ = performance.now();
							a6b + 4e3 < eZ && (qN = []);
							a6b = eZ
						}(), a6l(a6X)) return 1;
					qN.push(a6X), 16 < qN.length && qN.shift()
				} else if (6 === a6i) {
				for (var aC = qN.length - 1; 0 <= aC; aC--) 0 === ah.nM[qN[aC]] && qN.splice(aC, 1);
				0 < qN.length && (b6.a6m(1, qN, !0) && bB.gn.qM(qN, a6X), qN = [])
			} else if (2 === a6i) ao.i5(a6X) && bB.hr.pr(aS.hv(), a6X);
			else if (3 === a6i) aE.hp && bB.hr.hs(a6Z);
			else if (0 === a6i)
				if (0 === rt[0].lj) {
					if (aE.a5p && aX.a6Q() < 350) return 1;
					bY.a6n(4), bB.hr.hy(aS.hv(), a6X)
				} else b2.hz(a6X, aS.hv());
			else if (1 === a6i) bB.hr.i3(aS.hv(), a6Z);
			else if (9 === a6i) bB.hr.i6(aS.hv());
			else {
				if (7 === a6i) return bY.a6n(0), ak.xw.show(m1, m2), 2;
				if (4 === a6i) b6.a6m(0, [a6X], !0) && bB.gn.qJ(a6X);
				else {
					if (8 !== a6i) return 0;
					bB.hr.hu(aS.hv(), a6a, a6X)
				}
			}
			return 1
		}(m1, m2), this.sa(), 2 === m1 && (ak.xw.iD = !0), 0 < m1))
	}, this.a3G = function(m1, m2) {
		this.iD() || (a6V = m1, a6W = m2, eY = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hh(mouseX),
			coordY = bP.hj(mouseY),
			point = bP.fH(bP.fo(coordX, coordY));
		bP.hk(coordX, coordY) && a6p(mouseX, mouseY, point)
	}, this.click = function(m1, m2, a3N) {
		var hg = bP.hh(m1),
			hi = bP.hj(m2),
			fD = bP.fo(hg, hi),
			f5 = bP.fH(fD),
			a6o = (a1.a2.ia() ? .025 : .0144) * i.ib,
			eZ = performance.now();
		return !(Math.abs(m1 - a6V) > a6o || Math.abs(m2 - a6W) > a6o || eY + 500 < eZ || (eY = eZ, bM.rm() && (bM.hW = m1, bM.hX = m2, b8.ed(1), b9.ed(1)), !bP.hk(hg, hi))) && (a3N ? (a6p(m1, m2, f5), !1) : aN.hb || this.iD() || !bD.gn.hd(aE
			.fB) || aE.ha ? (this.sa(), !1) : (aE.hp ? 0 <= (a6Z = bu.hq(fD)) && (rt[3].iD = !0) : 2 === aE.a1N ? ad.h1(f5) && (a6X = ad.fJ(f5), bD.gn.k9(a6X) || (rt[0].iD = !0, rt[0].lj = 1, rt[7].iD = !0)) : (bQ.i4.i5(aE.fB, fD) && (rt[0]
					.iD = !0, rt[0].lj = 1, rt[1].iD = !0, rt[1].lj = 0, rt[9].iD = !0, rt[9].lj = 0), bQ.i1.i2(aE.fB, fD) && (rt[0].iD = !0, rt[0].lj = 1, rt[1].iD = !0, rt[1].lj = 1, a6Z = bR.g3[7]), ad.fW(f5) ? (a6a = an.f2.f4(f5)) &&
				(a6o = bP.fH(a6a), rt[8].iD = !0, a6X = ad.fI(a6o) ? aE.fO : ad.fJ(a6o)) : (ad.zL(aE.fB, f5) && (a6Y = aE.fB, rt[0].iD = !0, rt[0].lj = 1, rt[7].iD = !0), -1 !== (eZ = bu.hw(fD)) && (ad.fI(eZ << 2) ? (a6X = aE.fO, bv.hx(aE
					.fB) ? (rt[0].iD = !0, rt[0].lj = 0) : ae.gY(aE.fB) && (rt[0].iD = !0, rt[0].lj = 3)) : (a6X = ad.fJ(eZ << 2), rt[0].lj = 1, rt[5].iD = function(a6X) {
					return !bD.gn.k9(a6X) && !a6l(a6X) && b6.a6m(1, [a6X], !1)
				}(a6X), rt[7].iD || bD.gn.k9(a6X) || (a6Y = a6X, rt[7].iD = !0), rt[4].iD = !bD.gn.k9(a6X) && !ag.a6t(a6X) && b6.a6m(0, [a6X], !1), rt[6].iD = function(a6X) {
					if (0 === qN.length) return !1;
					if (performance.now() > a6b + 4e3) return !(qN = []);
					return !a6l(a6X) && ! function(a6X) {
						var aC;
						if (aE.iL)
							for (aC = qN.length - 1; 0 <= aC; aC--)
								if (!bv.fK(a6X, qN[aC])) return 1;
						return
					}(a6X)
				}(a6X), bv.fK(a6X, aE.fB) ? (bv.i0(aE.fB, a6X) ? (rt[0].lj = 0, rt[0].iD = !0) : ae.gY(aE.fB) && (rt[0].lj = 3, rt[0].iD = !0), rt[0].iD = this.a6v()) : (rt[2].iD = !0, ao.i5(a6X) ? rt[2].lj = 0 : rt[2].lj = 1,
					rt[0].iD = !0))))), this.a6q(m1, m2)))
	}, this.a6q = function(m1, m2) {
		return fY = m1 - Math.floor(a6U / 2), fa = m2 - Math.floor(a6U / 2), !!this.iD()
	}, this.a2u = function(m1, m2) {
		return !!this.iD() && (ak.xw.iD ? !ak.xw.a0K(m1, m2) && (ak.xw.iD = !1, bi.dq = !0) : function(st, m1, m2) {
			m1 = a6h(m1, m2);
			if (0 <= a6j(m1)) return !1;
			if ((1 === m1 || 6 === m1) && 0 <= a6j(2)) return !1;
			if ((6 === m1 || 9 === m1) && 0 <= a6j(10)) return !1;
			return st.sa(), bi.dq = !0
		}(this, m1, m2))
	}, this.sa = function() {
		for (var aC = rt.length - 1; 0 <= aC; aC--) rt[aC].iD = !1, rt[aC].lj = 0;
		ak.xw.iD = !1
	}, this.iD = function() {
		return this.a6v() || ak.xw.iD
	}, this.a6v = function() {
		for (var fR = rt.length, aC = 0; aC < fR; aC++)
			if (rt[aC].iD) return !0;
		return !1
	}, this.vv = function() {
		if (this.iD())
			if (ak.xw.iD) ak.xw.vv();
			else {
				var aC, iT = vw,
					fl = rt,
					fR = fl.length,
					a73 = (a6U + gap) / zoom;
				for (iT.imageSmoothingEnabled = !0, iT.setTransform(zoom, 0, 0, zoom, fY, fa), aC = 0; aC < fR; aC++) fl[aC].iD && vw.drawImage(fl[aC].canvas[fl[aC].lj], fl[aC].fY * a73, fl[aC].fa * a73);
				iT.imageSmoothingEnabled = !1, iT.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cG() {
	var k, canvas, a74, a75, a76, a77 = -1;

	function a78() {
		var a79, zW = canvas.getContext("2d", {
			alpha: !0
		});
		zW.clearRect(0, 0, k, k), zW.fillStyle = bE.oJ, zW.fillRect(0, 0, k, k), 9 === a75 && (zW.fillStyle = bE.oO, zW.fillRect(0, 0, k, k)), zW.fillStyle = bE.oN, zW.fillRect(0, 0, k, 1), zW.fillRect(0, 0, 1, k), zW.fillRect(0, k - 1, k, 1), zW
			.fillRect(k - 1, 0, 1, k), a79 = .9 * k / ac.get(0).width, zW.imageSmoothingEnabled = !0, zW.setTransform(a79, 0, 0, a79, Math.floor((k - a79 * ac.get(0).width) / 2), Math.floor((k - a79 * ac.get(0).height) / 2)), zW.drawImage(ac.get(0),
				0, 0), zW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7C(m1, m2) {
		if (!aN.hb) return m1 <= k + bf.gap && m2 >= aS.fa ? 9 : -1;
		if (m1 <= 4 * k + bf.gap) {
			if (m2 >= aS.fa) return 0;
			if (m2 >= aS.fa - k - a76 * bf.gap) return 2
		} else if (m1 <= 7 * k + bf.gap && m2 >= aS.fa - k - a76 * bf.gap) return 1;
		return -1
	}
	this.hb = !1, this.di = function() {
		a75 = -1, this.hb = !1, a76 = a1.a2.ia() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a74 = bD.rK.t8(1, (a1.a2.ia() ? .5 : .45) * k), a78()
	}, this.a7A = function() {
		return !(1 !== aE.a1N || aE.hp || (aE.ha ? !bF.a6D : this.hb && aE.l6))
	}, this.a3V = function() {
		this.hb = !this.hb, this.hb ? (bF.a3U(!1), aE.ha && bF.a6D && bF.a3W(!0), this.a7B(), 9 === a75 && (a75 = 0)) : (a75 = -1, a78(), !aE.l6 || 1 !== aE.a1N || aE.hp || aE.ha || a1.a2.setState(1)), bi.dq = !0
	}, this.a7B = function() {
		(aE.l6 || aE.ha) && 1 === aE.a1N && (aW.n8(!0), aE.hp || setTimeout(function() {
			be.a1Z()
		}, 0), a1.a2.setState(0))
	}, this.he = function(m1, m2) {
		return 0 <= (a77 = a7C(m1, m2)) || !aN.hb || aE.l6 || aE.ha || bh.iD || aN.a3V(), a77
	}, this.a2u = function(m1, m2) {
		m1 = a7C(m1, m2);
		m1 !== a75 && (a75 = m1, this.hb || a78(), bi.dq = !0)
	}, this.a2v = function(m1, m2) {
		m1 = a7C(m1, m2);
		return -1 !== m1 && a77 === m1 && (this.hb ? aE.nq ? (0 <= m1 && bF.a3U(!1), !aE.ha) : (0 === m1 ? aE.a2l() : 1 === m1 ? this.a3V() : 2 === m1 && u.v(1, 0), !0) : 9 === m1 && (this.a3V(), !0))
	}, this.vv = function() {
		var j;
		this.hb ? (j = Math.floor(5.5 * k), vw.setTransform(1, 0, 0, 1, bf.gap, aS.fa), vw.fillStyle = bE.oJ, vw.fillRect(0, 0, j, k), 0 === a75 ? (vw.fillStyle = bE.oO, vw.fillRect(0, 0, 4 * k, k)) : 1 === a75 && (vw.fillStyle = bE.oO, vw
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), vw.fillStyle = bE.oN, vw.fillRect(0, 0, j, 1), vw.fillRect(0, 0, 1, k), vw.fillRect(4 * k, 0, 1, k), vw.fillRect(0, k - 1, j, 1), vw.fillRect(j - 1, 0, 1, k), vw.font = a74, bD.rK
			.textBaseline(vw, 1), bD.rK.textAlign(vw, 1), vw.fillText(L(45), 2 * k, .54 * k), j = .4 * k, aN.a7G(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fa + .3 * k, j), j = 1, vw.setTransform(1, 0, 0, 1, bf.gap, aS.fa - j * a76 * bf.gap - j *
				k), vw.fillStyle = bE.oJ, vw.fillRect(0, 0, 4 * k, k), a75 === j + 1 && (vw.fillStyle = bE.oO, vw.fillRect(0, 0, 4 * k, k)), vw.fillStyle = bE.oN, vw.fillRect(0, 0, 4 * k, 1), vw.fillRect(0, 0, 1, k), vw.fillRect(4 * k, 0, 1,
				k), vw.fillRect(0, k - 1, 4 * k, 1), vw.fillText(L(0 === j ? 45 : 46), 2 * k, .54 * k), vw.setTransform(1, 0, 0, 1, 0, 0)) : vw.drawImage(canvas, bf.gap, aS.fa)
	}, this.qv = function(player) {
		return 0 !== ah.nM[player] && 2 !== aE.a1N && !bD.gn.k9(player)
	}, this.a7G = function(fY, fa, fR) {
		vw.setTransform(1, 0, 0, 1, fY, fa), vw.lineWidth = bf.a0L, vw.strokeStyle = bE.oN, vw.beginPath(), vw.moveTo(0, 0), vw.lineTo(fR, fR), vw.moveTo(0, fR), vw.lineTo(fR, 0), vw.stroke()
	}
}

function cH() {
	var a7I, k, a7J, a7K, a7L, a7M, a7N, a7O, a7P;

	function zS() {
		return aS.a7h(aO.a7d()) ? ax.iD ? __fx.settings.keybindButtons ? aS.fa - 2 * aS.k - 3 * a7J : aS.fa - aS.k - 2 * a7J : __fx.settings.keybindButtons ? aS.fa - aS.k - 2 * a7J : aS.fa - a7J : bF.a7h(aO.a7g()) ? ax.iD ? bF.zS() - aS.k - 2 * a7J :
			bF.zS() - a7J : ax.iD ? i.k - aS.k - (bn.a6T() + 1) * a7J : i.k - bn.a6T() * bf.gap
	}

	function a7U(eZ, r1, id, gz, a7X, a7Y, lP, a7Z, a7a, a7b, a7l) {
		var aC, zW, a4E, rC, a7m = void 0 !== a7a,
			j = Math.floor(aR.measureText(r1, aO.a74) + 1.5 * a7K + (a7m ? k : 1.5 * a7K));
		if (bi.dq = !0, a7l || bt.zp(r1, a7a), j + 2 * a7J + aS.k > i.j && !a7m && 50 !== id && 20 < r1.length) a7U(eZ, (a7l = bD.sJ.a5W(r1))[0], id, gz, a7X, a7Y, lP, a7Z, a7a, a7b, !0), a7U(eZ, a7l[1], id, gz, a7X, a7Y, lP, a7Z, a7a, a7b, !0);
		else if (a7l = j + (50 === id ? a7L : 0), (a4E = document.createElement("canvas")).width = j, a4E.height = k, (zW = a4E.getContext("2d", {
				alpha: !0
			})).font = aO.a74, bD.rK.textBaseline(zW, 1), bD.rK.textAlign(zW, 0), zW.clearRect(0, 0, j, k), zW.fillStyle = a7Y, zW.fillRect(0, 0, j, k), zW.fillStyle = a7X, zW.fillText(r1, Math.floor(1.5 * a7K), Math.floor(k / 2)), a7m && (zW
				.imageSmoothingEnabled = !0, ak.xw.a0M(a7a, zW, j - k, 0, k)), 0 === (rC = {
				eY: eZ,
				r1: r1,
				id: id,
				player: gz,
				canvas: a4E,
				a7X: a7X,
				a7Y: a7Y,
				j: j,
				a7e: a7l,
				lP: lP,
				a7Z: a7Z,
				a7a: a7a,
				a7b: a7b
			}).eY || 0 < a7I.length && 0 < a7I[0].eY) a7I.unshift(rC);
		else {
			for (aC = 1; aC < a7I.length; aC++)
				if (0 < a7I[aC].eY) return void a7I.splice(aC, 0, rC);
			a7I.push(rC)
		}
	}

	function a7V(eF, tz, fl) {
		return "rgb(" + eF + "," + tz + "," + fl + ")"
	}

	function a7n(id, gu) {
		for (var fR = a7I.length, aC = 0; aC < fR; aC++) a7I[aC].id === id && gu-- <= 0 && (a7I.splice(aC, 1), aC--, fR--)
	}

	function a7o(id, player) {
		for (var ff = !1, aC = a7I.length - 1; 0 <= aC; aC--) a7I[aC].id !== id || player !== aE.fO && a7I[aC].player !== player || (a7I.splice(aC, 1), ff = !0);
		return ff
	}

	function a8A(r1) {
		a7U(340, r1, 6, 0, a7V(215, 245, 255), bE.oK, -1, !1)
	}
	this.a7Q = "", this.di = function() {
		var self;
		a7O = 0, a7N = a1.a2.ia() ? 7 : 12, a7M = {
				a1B: [0, 0, 0],
				a7R: [0, 0, 0],
				ne: [220, 180, 180],
				vu: [0, 0, 0],
				ei: [0, 0, 0]
			}, a7I = [], this.resize(), aE.hp && this.a1a(0, 18), bV.xj.xk[bV.f7].name.length && a8A(L(89, [bV.xj.xk[bV.f7].name])), bV.xj.xk[bV.f7].a8B && a8A(L(90, [bV.xj.xk[bV.f7].a8B])), a8A(L(91, [bV.fc - 2 + "x" + (bV.fd - 2)])), a8A(L(92,
				[bD.sJ.a0e(aq.a8C)])), aq.a8C !== aq.a8D && a8A(L(93, [bD.sJ.a0e(aq.a8D) + " (" + bD.sJ.a5S(100 * aq.a8D / aq.a8C, 1) + ")"])), 0 < aq.a8E && a8A(L(69, [bD.sJ.a0e(aq.a8E) + " (" + bD.sJ.a5S(100 * aq.a8E / aq.a8C, 1) + ")"])), 0 <
			aq.a8F && a8A(L(94, [bD.sJ.a0e(aq.a8F) + " (" + bD.sJ.a5S(100 * aq.a8F / aq.a8C, 1) + ")"])), 10 === aE.l4 && a7U(120, L(95), 6, 0, a7V(235, 255, 120), bE.oK, -1, !1), 0 !== (self = this).a7Q.length && (a7U(200, self.a7Q, 0, 0, bE.oN,
				bE.oK, -1, !1), self.a7Q = ""), aE.zo && a7U(340, L(47), 6, 0, a7V(255, 200, 0), bE.oK, -1, !1)
	}, this.resize = function() {
		var a7W, aC;
		if (k = (k = Math.floor((a1.a2.ia() ? .031 : .0249) * i.ib)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a74 = bD.rK.t8(1, this.fontSize), a7J = bf.gap, a7K = Math.floor(k / 5), 0 < a7I.length)
			for (a7W = a7I, a7I = [], aC = a7W.length - 1; 0 <= aC; aC--) a7U(a7W[aC].eY, a7W[aC].r1, a7W[aC].id, a7W[aC].player, a7W[aC].a7X, a7W[aC].a7Y, a7W[aC].lP, a7W[aC].a7Z, a7W[aC].a7a, a7W[aC].a7b, !0);
		this.a7c()
	}, this.a7c = function() {
		a7P = document.createElement("canvas");
		var r1 = L(48),
			zW = (a7L = aR.measureText(r1, this.a74) + 5 * a7K, a7P.height = k, a7P.width = a7L, a7P.getContext("2d", {
				alpha: !0
			}));
		zW.font = this.a74, bD.rK.textBaseline(zW, 1), bD.rK.textAlign(zW, 1), zW.clearRect(0, 0, a7L, k), zW.fillStyle = bE.ol, zW.fillRect(0, 0, a7L, k), zW.fillStyle = bE.oN, zW.fillText(r1, Math.floor(a7L / 2), Math.floor(k / 2))
	}, this.a7d = function() {
		var fR;
		return ax.iD ? ax.j : 0 === (fR = a7I.length) ? 0 : 1 === fR ? a7I[0].a7e : a7f(a7I[0].a7e, a7I[1].a7e)
	}, this.a7g = function() {
		var fR = a7I.length;
		return ax.iD ? fR ? a7f(ax.j, a7I[0].a7e) : ax.j : 0 === fR ? 0 : 1 === fR ? a7I[0].a7e : 2 === fR ? a7f(a7I[0].a7e, a7I[1].a7e) : a7f(a7f(a7I[0].a7e, a7I[1].a7e), a7I[2].a7e)
	}, this.he = function(fY, fa) {
		for (var nn, a7i, a7j = zS(), aC = a7I.length - 1; 0 <= aC; aC--)
			if ((a7i = a7j - (aC + 1) * k) <= fa && fa < a7i + k) return 50 === a7I[aC].id ? fY >= i.j - a7L - a7J - a7I[aC].j && (fY >= i.j - a7L - a7J ? bB.gn.qJ(a7I[aC].player) : aI.ni(a7I[aC].player, 800, !1, 0), !0) : fY >= i.j - a7I[aC].j -
				a7J && (736 === a7I[aC].id ? window.open("https://" + a7I[aC].r1, "_blank") : a7I[aC].a7Z && (a7I[aC].a7b && a7I[aC].a7b.fk ? (a7i = a7I[aC].a7b.fD, nn = bP.fZ(a7i) - 10, a7i = bP.fb(a7i) - 10, aI.nh(nn, a7i, 19 + nn, 19 +
					a7i)) : a7I[aC].a7b && a7I[aC].a7b.fl ? aI.nj(a7I[aC].player, a7I[aC].a7b.nk) : (aI.ni(a7I[aC].player, 800, !1, 0), 0 <= a7I[aC].lP && (nn = a7I[aC].lP, a7I[aC].lP = a7I[aC].player, a7I[aC].player = nn))), !0);
		return !1
	}, this.zp = function(eZ, r1, id, gz, a7X, a7Y, lP, a7Z, a7a, a7b) {
		a7U(eZ, r1, id, gz, a7X, a7Y, lP, a7Z, a7a, a7b)
	}, this.a7k = function(s) {
		a7U(300, s, 252, 0, bE.oN, bE.oK, -1, !1)
	}, this.a5i = function(id) {
		for (var aC = a7I.length - 1; 0 <= aC; aC--) a7I[aC].id === id && (a7I[aC].eY = 1)
	}, this.a1a = function(player, id) {
		0 === id ? (aR.eh(player, 0), a7n(423, 2), a7U(160, L(49, [ah.zq[player]]), 423, player, "rgb(10,220,10)", bE.oK, -1, !1)) : 1 === id ? (a7o(50, aE.fO), aR.eh(player, 1), a7U(360, L(50, [ah.zq[player]]), 0, player, bE.p4, bE.oK, -1, !0),
			aI.ni(player, 2700, !1, 0)) : 2 === id ? (aR.eh(player, 2), a7U(0, L(51), 0, player, "rgb(10,255,255)", bE.oK, -1, !0), aI.ni(player, 2700, !1, 0)) : 3 === id ? (aR.eh(player, 2), a7U(0, L(52, [ah.zq[player]]), 0, player, bE.oN,
			bE.oK, -1, !0), aI.ni(player, 2700, !1, 0)) : 4 === id ? this.a7p(1, player, player) : 5 === id ? bD.gn.k9(aE.fB) || (function(id, nH) {
			var aC, a7z = 0,
				fR = a7I.length;
			for (aC = 0; aC < fR; aC++)
				if (a7I[aC].id === id && nH <= ++a7z) return a7I.splice(aC, 1)
		}(1, 5), ag.a7r(player) && a7U(180, L(53, [ah.zq[player]]), 1, player, a7V(255, 200, 180), bE.oK, -1, !0), bD.gn.a4p(player, 10) && (a7n(573, 0), a7U(180, L(54, [ah.zq[player]]), 573, player, bE.p4, bE.oK, -1, !0))) : 18 === id ? a7U(
			255, L(55), 18, 0, bE.oN, bE.oK, -1, !1) : 21 === id ? a7U(220, L(56), id, 0, bE.oN, bE.oK, -1, !1) : 22 === id ? this.a7p(2, player, player) : 59 === id && a7U(0, L(57), id, 0, bE.pO, bE.oK, 0, !1)
	}, this.a2g = function(s) {
		a7U(200, L(58, [s]), 94, 0, bE.oN, bE.p0, -1, !1)
	}, this.a1m = function(a7s) {
		if (aE.fB === a7s && !aE.l6 && !aE.eh)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a7U(0, "Your Win Count is now " + __fx.wins.count, 3, a7s, bE.oN, bE.oK, -1, !0);
		ah.hF[a7s] && (aR.eh(a7s, 2), aE.km < 100 ? a7U(0, L(52, [ah.zq[a7s]]), 3, a7s, bE.oN, bE.oK, -1, !0) : a7U(0, L(59, [ah.zq[a7s]]), 3, a7s, bE.oN, bE.oK, -1, !0))
	}, this.a6x = function(f5) {
		var r1, a7u, a7t = "(" + bP.fZ(f5 >> 2) + ", " + bP.fb(f5 >> 2) + ")",
			a7Z = !1,
			player = 0;
		ad.fM(f5) ? ad.fI(f5) ? a7t = L(60, [a7t]) : (player = ad.fJ(f5), aE.ha && !1 === __fx.hoveringTooltip.active && (aE.fB = player), r1 = L(61, [bD.zW.a4S(ah.a23[player], bD.rK.t8(0, 10), 150)]) + "   ", r1 = (r1 += L(62, [bD.sJ.a0e(ah.hT[
				player])]) + "   ") + L(63, [bD.sJ.a0e(ah.hF[player])]) + "   ", aE.iL && (a7u = bj.a1j[bj.l9[bj.fP[player]]], r1 += L(64) + ": " + a7u + "   "), bD.gn.k9(player) && (r1 += L(65) + ": " + aF.kx[aF.iA[player]] + "   "), a7t =
			r1 = (r1 += L(66, [player]) + "   ") + L(67, [a7t]), a7Z = !0) : a7t = ad.fW(f5) ? L(68, [a7t]) + "   #" + ad.f9(f5) : L(69, [a7t]), a7n(55, 0), a7U(220, a7t, 55, player, bE.oN, bE.oK, -1, a7Z, void 0, void 0, !0)
	}, this.a6z = function(a7v) {
		var lh = bQ.z,
			player = lh.mg[a7v] >> 3,
			r1 = (bi.dq = !0, a7n(55, 0), L(70, [ah.zq[player]]) + "   ");
		a7U(220, r1 += L(62, [bD.sJ.a0e(lh.a7w[a7v])]), 55, player, bE.oN, bE.oK, -1, !0)
	}, this.q2 = function(pm, a7x, q3) {
		pm === aE.fB ? a7U(175, " " + L(71, [ah.zq[a7x]]) + ": ", 1001, a7x, a7V(200, 255, 210), bE.oK, -1, !0, q3) : this.a7y(pm, q3)
	}, this.a7y = function(pm, q3) {
		a7n(1e3, 0), a7U(175, ah.zq[pm] + ": ", 1e3, pm, bE.oN, "rgba(5,60,25,0.9)", -1, !0, q3)
	}, this.a1l = function() {
		var s;
		aE.a1S ? (s = L(72), aR.a1k(L(73), 2, 1, 12), a7U(0, s, 40, 0, "rgb(10,220,10)", bE.oK, -1, !1)) : (s = L(74), aR.a1k(L(75), 2, 0, 16), a7U(0, s, 41, 0, bE.oN, bE.oK, -1, !1))
	}, this.zd = function() {
		var gu = ah.zq,
			fU = aE.data;
		a7U(300, gu[0] + " [" + aE.a1g.zj(fU.elo[0]) + "] vs " + gu[1] + " [" + aE.a1g.zj(fU.elo[1]) + "]", 65, 0, bE.oE, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a80 = function(s) {
		a7U(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a81 = function(a82) {
		a7U(0, L(a82 ? 76 : 77), 247, 0, bE.pN, bE.oK, -1, !1)
	}, this.zl = function(zi, zk, a83) {
		var fU = aE.data,
			gu = ah.zq;
		a7U(0, gu[0] + ": " + aE.a1g.zj(fU.elo[0]) + " -> " + zi, 66, 0, bE.oN, a83[0], -1, !1), a7U(0, gu[1] + ": " + aE.a1g.zj(fU.elo[1]) + " -> " + zk, 66, 1, bE.oN, a83[1], -1, !1)
	}, this.qK = function(player, id) {
		0 === id ? a7o(50, player) ? (a7U(128, L(78, [ah.zq[player]]), 52, player, a7V(180, 255, 180), bE.oK, -1, !0), ag.qt(player, 2, 255)) : a7U(384, L(79, [ah.zq[player]]), 51, player, a7V(210, 210, 255), bE.oK, -1, !0) : a7o(51, player) ? (
			a7U(128, L(80, [ah.zq[player]]), 52, player, bE.oN, "rgba(60,120,10,0.9)", -1, !0), ag.qt(player, 2, 255)) : (a7U(384, L(81, [ah.zq[player]]), 50, player, bE.oN, "rgba(90,90,90,0.9)", -1, !0), ag.qt(player, 2, 96))
	}, this.qO = function(a1B, target) {
		var color = a7V(210, 255, 210);
		1 < a1B.length ? a7U(230, L(82, [a1B.length, ah.zq[target]]), 66, target, color, bE.oK, -1, !0) : a7U(230, L(83, [ah.zq[a1B[0]], ah.zq[target]]), 66, a1B[0], color, bE.oK, target, !0)
	}, this.a84 = function(player, target) {
		a7U(230, L(84, [ah.zq[player], ah.zq[target]]), 66, player, bE.oN, "rgba(75,65,5,0.9)", target, !0)
	}, this.a85 = function(id, gu) {
		a7n(id, gu)
	}, this.a1V = function(id, player) {
		a7o(id, void 0 === player ? aE.fO : player)
	}, this.a86 = function(id) {
		for (var aC = a7I.length - 1; 0 <= aC; aC--)
			if (a7I[aC].id === id) return a7I[aC];
		return null
	}, this.qF = function(a6N, a87, player) {
		2 !== ah.a4k[aE.fB] && a7U(200, 1 === a6N ? L(85, [ah.zq[player]]) : L(86, [bD.sJ.a0e(a6N), ah.zq[player]]), 30, player, "rgb(190,255,190)", bE.oK, -1, !0)
	}, this.a89 = function(a6N, player) {
		2 !== ah.a4k[aE.fB] && (a7n(31, 0), a6N = " (" + bD.sJ.a0e(a6N) + ") 💸", a7U(150, a6N = bD.gn.k9(player) ? L(87) + a6N : L(88, [ah.zq[player]]) + a6N, 31, player, bE.oE, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a1U = function(bx) {
		for (var ei = bi.kj(), aC = 2; 0 <= aC; aC--) 0 < a7M.vu[aC] && (bx || a7M.ei[aC] < ei - 220) && this.a8G(aC)
	}, this.a8G = function(id) {
		var r1, fR = a7M.vu[id],
			player = a7M.a1B[id];
		a7M.vu[id] = 0, 1 === fR ? (0 === id ? r1 = L(96, [ah.zq[player], ah.zq[a7M.a7R[0]]]) : 1 === id ? r1 = L(97, [ah.zq[player]]) : 2 === id ? r1 = L(98, [ah.zq[player]]) : 3 === id && (r1 = L(99, [ah.zq[player]])), a7n(7, 0), a7U(a7M.ne[
			id], r1, 7, a7M.a7R[id], bE.oN, bE.oK, -1, !0)) : (r1 = L(0 === id ? 100 : 1 === id ? 101 : 102, [fR]), a7n(7, 0), a7U(a7M.ne[id], r1, 7, player, bE.oN, bE.oK, -1, !1))
	}, this.a7p = function(id, ht, lP) {
		var ei = bi.kj(),
			fR = a7M.vu[id] + 1;
		a7M.vu[id]++, a7M.a1B[id] = ht, a7M.a7R[id] = lP, 1 === fR && (a7M.ei[id] = ei), (1 === fR && (aE.a1Q < 32 || 2 === aE.a1N) || 1 < fR && (a7M.ei[id] < ei - 140 || 2 === aE.a1N)) && this.a8G(id)
	}, this.ed = function() {
		b3.ed();
		for (var k1 = (k1 = a7I.length - a7N) <= 1 ? 1 : k1 * k1, aC = a7I.length - 1; 0 <= aC; aC--) 0 < a7I[aC].eY && (a7I[aC].eY -= k1, a7I[aC].eY <= 0) && (bi.dq = !0, a7I.splice(aC, 1));
		! function() {
			var gu, aC;
			if (128 !== a7O && !(++a7O < 128))
				for (gu = 5, aC = am.lI - 1; 0 <= aC; aC--) 1 === ah.a4k[am.lN[aC]] && 0 < gu-- && a7U(240, L(99, [ah.zq[am.lN[aC]]]), 1, am.lN[aC], bE.oE, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a1U(!1)
	}, this.vv = function() {
		for (var yU, fa = zS(), aC = a7I.length - 1; 0 <= aC; aC--) yU = fa - (aC + 1) * k, 50 === a7I[aC].id ? (vw.drawImage(a7I[aC].canvas, i.j - a7I[aC].j - a7L - a7J, yU), vw.drawImage(a7P, i.j - a7L - a7J, yU)) : vw.drawImage(a7I[aC].canvas,
			i.j - a7I[aC].j - a7J, yU)
	}, this.a8I = function(id, iA) {
		var a7t, a8J = bE.oX;
		0 === id ? a7t = L(103) : 1 === id ? (a7t = L(104), a8J = bE.pJ) : 2 === id ? a7t = L(105) : 3 === id ? a7t = L(106) : (a7t = bD.sJ.a0e(iA), a8J = 5 === id ? bE.pJ : bE.oK), a7n(74, 0), a7U(0, a7t, 74, 0, bE.oN, a8J, -1, !1, void 0,
			void 0, !0)
	}
}

function cI() {
	var a8L, a8M, vx = "",
		yF = 0,
		yG = 0,
		a8K = -1,
		eB = ["Team", "Zombie", "BR", "1v1"];

	function a8N() {
		for (var eZ = new Date, a8O = eZ.getUTCMinutes(), eZ = eZ.getUTCSeconds(), a8Q = [], a8R = 0, aC = 0; aC < 6; aC++) a8Q.push(a8R), a8Q.push(a8R + 2), a8Q.push(a8R + 5), a8Q.push(a8R + 7), a8R += 10;
		for (var fR = a8Q.length, aC = 1; aC < fR && !(a8O < a8Q[aC]); aC++);
		aC %= fR;
		eZ = (a8Q[0] = 60) * (a8Q[aC] - a8O) - eZ;
		return eZ !== a8K && (vx = eB[aC % 4] + " " + a8M + ": " + a8T(Math.floor(eZ / 60)) + ":" + a8T(eZ % 60), a8K = eZ, yF = aR.measureText(vx, a8L), yF += Math.floor(.4 * yG), 1)
	}

	function a8T(a8U) {
		return a8U < 10 ? "0" + a8U : String(a8U)
	}
	this.di = function() {
		a8M = L(107)
	}, this.resize = function() {
		yF = Math.floor((a1.a2.ia() ? .53 : .36) * i.ib), yG = Math.floor(.065 * yF), a8L = bD.rK.t8(1, Math.floor(.9 * yG)), a8K += 1e3, a8N()
	}, this.ed = function() {
		a8N() && (bi.dq = !0)
	}, this.vv = function(fa) {
		vw.lineWidth = 1 + Math.floor(yG / 15), vw.translate(i.j - yG, fa + yF), vw.rotate(-Math.PI / 2), vw.fillStyle = bE.oN, vw.fillRect(0, 0, yF, yG), vw.strokeStyle = bE.oE, vw.strokeRect(0, 0, yF, yG + 10), vw.fillStyle = bE.oE, vw.font =
			a8L, bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 1), vw.fillText(vx, Math.floor(yF / 2), Math.floor(.59 * yG)), vw.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cJ() {
	var a6M, a8V, a8W, yG, a8X, a8Y = 0,
		a8Z = 0;

	function a8b(aC) {
		var a8d = !0,
			a0T = bE.oN,
			j = (1 === a6M[aC].id ? a6M[aC].zW.fillStyle = bE.pH : a6M[aC].jv === aE.fO ? a6M[aC].zW.fillStyle = bE.oY : (ad.a8e(a6M[aC].jv), a6M[aC].zW.fillStyle = bD.color.oH(bR.g0[0], bR.g0[1], bR.g0[2], .87), 400 < bD.rS.a3s(bR.g0, 0, 2) && (
				a8d = !1, a0T = bE.oE)), a6M[aC].canvas.width),
			th = (a6M[aC].zW.clearRect(0, 0, j, yG), a6M[aC].zW.fillRect(0, 0, j, yG), a6M[aC].zW.fillStyle = a0T, ! function(zW, j, yG) {
				zW.fillRect(0, 0, j, 1), zW.fillRect(0, yG - 1, j, 1), zW.fillRect(0, 0, 1, yG), zW.fillRect(j - 1, 0, 1, yG)
			}(a6M[aC].zW, j, yG), a8V + 2 * yG < j && (a6M[aC].zW.fillRect(j - a8V - yG, 0, 1, yG), a6M[aC].zW.fillText(ah.zq[a6M[aC].jv], Math.floor((j - a8V) / 2), Math.floor(.57 * yG))), 0 !== a6M[aC].id ? 0 : yG);
		a6M[aC].zW.fillText(bD.sJ.a0e(a6M[aC].iA), Math.floor(j - a8V / 2 - th), Math.floor(.57 * yG)),
			function(aC, j, th, a8d) {
				a6M[aC].zW.fillStyle = a8d ? bE.oP : bE.oL;
				a8d = Math.floor(a8V * a6M[aC].iA / a6M[aC].a8k);
				a6M[aC].zW.fillRect(Math.floor(j - a8V - th), yG - a8X, a8d, a8X)
			}(aC, j, th, a8d), 0 === a6M[aC].id ? (a8h(aC, j, a8d, a0T), function(aC, j, a8d) {
				a6M[aC].zW.strokeStyle = a8d ? bE.og : bE.oq, a6M[aC].zW.fillRect(yG, 0, 1, yG);
				a8d = j - yG;
				a6M[aC].zW.beginPath(), a6M[aC].zW.moveTo(Math.floor(.3 * yG + a8d), Math.floor(yG / 2)), a6M[aC].zW.lineTo(Math.floor(yG - .3 * yG + 0 + a8d), Math.floor(yG / 2)), a6M[aC].zW.stroke(), a6M[aC].zW.beginPath(), a6M[aC].zW.moveTo(
					Math.floor(yG / 2 + a8d), Math.floor(.3 * yG)), a6M[aC].zW.lineTo(Math.floor(yG / 2 + a8d), Math.floor(yG - .3 * yG + 0)), a6M[aC].zW.stroke()
			}(aC, j, a8d)) : a8h(aC, 2 * yG, a8d, a0T)
	}

	function a8h(aC, j, a8d, a0T) {
		a6M[aC].zW.strokeStyle = a6M[aC].a8l ? bE.oW : a8d ? bE.ow : bE.ox, a6M[aC].zW.fillStyle = a0T, a6M[aC].zW.fillRect(j - yG, 0, 1, yG), a6M[aC].zW.lineWidth = Math.max(Math.floor(yG / 12), 3), a6M[aC].zW.lineCap = "round";
		a8d = .35;
		j = yG + 1, a6M[aC].zW.beginPath(), a6M[aC].zW.moveTo(Math.floor(j - a8d * yG + 0), Math.floor(a8d * yG)), a6M[aC].zW.lineTo(Math.floor(j - yG + a8d * yG), Math.floor(yG - a8d * yG + 0)), a6M[aC].zW.stroke(), a6M[aC].zW.beginPath(), a6M[aC]
			.zW.moveTo(Math.floor(j - yG + a8d * yG), Math.floor(a8d * yG)), a6M[aC].zW.lineTo(Math.floor(j - a8d * yG + 0), Math.floor(yG - a8d * yG + 0)), a6M[aC].zW.stroke()
	}

	function a8x(h, a8v) {
		for (var iA, aC = a8v - 1; 0 <= aC; aC--) iA = ae.ge(aE.fB, aC), h[aC].iA !== iA && (h[aC].iA = iA, h[aC].a8k = Math.max(iA, h[aC].a8k), h[aC].a8c = !0)
	}

	function a91(h, a8z) {
		for (var tv = aE.fB << 3, a7w = bQ.z.a7w, md = bQ.z.md, a93 = bQ.z.a93, aC = a8z - 1; 0 <= aC; aC--) {
			var a94 = a93[tv + aC],
				iA = a7w[a94];
			h[aC].iA !== iA ? (h[aC].iA = iA, h[aC].a8k = Math.max(iA, h[aC].a8k), h[aC].a8c = !0) : h[aC].a8l || md[a94] % 64 != 5 || (h[aC].a8l = !0, h[aC].a8c = !0)
		}
	}

	function a8a(a6P) {
		a6P.canvas = document.createElement("canvas"), bV.xp.font = a8W;
		var j = a8V;
		a6P.jv < aE.fO && 0 === a6P.id && (j += Math.floor(bV.xp.measureText(ah.zq[a6P.jv] + "000").width)), j += yG, 0 === a6P.id && (j += yG), a6P.canvas.width = j, a6P.canvas.height = yG, a6P.zW = a6P.canvas.getContext("2d", {
			alpha: !0
		}), a6P.zW.font = a8W, bD.rK.textBaseline(a6P.zW, 1), bD.rK.textAlign(a6P.zW, 1)
	}

	function a8r(aC) {
		return aV.a95() ? i.j - a6M[aC].canvas.width - bf.gap : aV.fY
	}

	function a8s(aC) {
		return Math.floor(2 * bf.gap + (aV.a95() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * yG))
	}
	this.di = function() {
		a8Y = a8Z = 0, a6M = [], this.resize()
	}, this.resize = function() {
		a8W = aO.a74, yG = aO.fontSize + 5, yG = Math.floor(1.25 * yG), a1.a2.ia() && (yG = Math.floor(1.25 * yG)), a8X = Math.floor(.15 * yG), bV.xp.font = a8W, a8V = Math.floor(bV.xp.measureText("02 000 000 0000").width);
		for (var aC = a6M.length - 1; 0 <= aC; aC--) a8a(a6M[aC]), a8b(aC)
	}, this.n8 = function() {
		for (var aC = a6M.length - 1; 0 <= aC; aC--) a6M[aC].a8c && (a6M[aC].a8c = !1, a8b(aC))
	}, this.he = function(m1, m2) {
		if (2 !== aE.a1N && 0 !== ah.nM[aE.fB] && !aE.ha && !bD.gn.k9(aE.fB))
			for (var a8m, a8n, a8o, a8p = a1.a2.ia() ? yG : 0, a8q = a1.a2.ia() ? Math.floor(.15 * yG) : 0, aC = a6M.length - 1; 0 <= aC; aC--)
				if (a8m = a8r(aC), a8n = a8s(aC), a8o = a6M[aC].canvas.width, a8n - a8q <= m2 && m2 <= a8n + yG + a8q) {
					if (a8m - a8p <= m1 && m1 <= a8m + yG + a8p) return a6M[aC].a8l || (a6M[aC].a8c = !0, a6M[aC].a8l = !0, 0 === a6M[aC].id ? bB.hr.q0(a6M[aC].jv) : bB.hr.pz(a6M[aC].jv)), !0;
					if (0 === a6M[aC].id && a8m + a8o - yG - a8p <= m1 && m1 <= a8m + a8o + a8p) return bY.a6n(3), bB.hr.hy(aS.hv(), a6M[aC].jv), !0
				} return !1
	}, this.ed = function() {
		var a40, a41, h, a8v;
		0 === ah.nM[aE.fB] || bD.gn.k9(aE.fB) && !aE.ha || (a40 = a6M.slice(0, a8Y), a41 = a6M.slice(a8Y, a8Y + a8Z), h = a40, a8v = ae.gY(aE.fB), function(h, a8v) {
			if (a8Y !== a8v) return 1;
			for (var aC = a8v - 1; 0 <= aC; aC--)
				if (h[aC].jv !== ae.gd(aE.fB, aC)) return 1;
			return
		}(h, a8v) ? a8x(h = function(h, a8v) {
			var aC, jv, fl, iA, a7W = [];
			loop: for (aC = 0; aC < a8v; aC++) {
				for (jv = ae.gd(aE.fB, aC), fl = 0; fl < h.length; fl++)
					if (h[fl].jv === jv) {
						a7W.push(h.splice(fl, 1)[0]);
						continue loop
					} iA = ae.ge(aE.fB, aC), a8a(iA = {
					jv: jv,
					iA: iA,
					a8k: iA,
					id: 0,
					a8c: !0,
					a8l: !1,
					canvas: null,
					zW: null
				}), a7W.push(iA)
			}
			return a7W
		}(h, a8v), a8v) : a8x(h, a8v), a40 = h, a41 = function(h) {
			var a8z = bQ.z.kq[aE.fB];
			return function(h, a8z) {
				if (a8Z !== a8z) return 1;
				for (var tv = aE.fB << 3, mf = bQ.z.mf, a93 = bQ.z.a93, aC = a8z - 1; 0 <= aC; aC--) {
					var a94 = a93[tv + aC];
					if (h[aC].jv !== mf[a94]) return 1
				}
				return
			}(h, a8z) ? a91(h = function(h, a8z) {
				var aC, jv, fl, a7W = [],
					tv = aE.fB << 3,
					mf = bQ.z.mf,
					a7w = bQ.z.a7w,
					a93 = bQ.z.a93;
				loop: for (aC = 0; aC < a8z; aC++) {
					var a94 = a93[tv + aC];
					for (jv = mf[a94], fl = 0; fl < h.length; fl++)
						if (h[fl].jv === jv) {
							a7W.push(h.splice(fl, 1)[0]);
							continue loop
						} a94 = a7w[a94], a8a(a94 = {
						jv: jv,
						iA: a94,
						a8k: a94,
						id: 1,
						a8c: !0,
						a8l: !1,
						canvas: null,
						zW: null
					}), a7W.push(a94)
				}
				return a7W
			}(h, a8z), a8z) : a91(h, a8z), h
		}(a41), a8Y = a40.length, a8Z = a41.length, a6M = a40.concat(a41))
	}, this.vv = function() {
		if (0 !== ah.nM[aE.fB] && (!bD.gn.k9(aE.fB) || aE.ha))
			for (var aC = a6M.length - 1; 0 <= aC; aC--) vw.drawImage(a6M[aC].canvas, a8r(aC), a8s(aC))
	}
}

function cK() {
	var a7I, kr, a96, a97, k, a74, fontSize, a98, a99, a9A, a9B, canvas, zW, nZ, a9C;

	function wC(aC) {
		return L(0 === aC ? 108 : 1 === aC ? 109 : 2 === aC ? 110 : 111)
	}

	function a9J() {
		aE.iL ? a9K + 4 * bf.gap + k + bk.a9L() > aS.fa ? vw.drawImage(canvas, 2 * bf.gap + bk.a9L(), a9K + 2 * bf.gap) : vw.drawImage(canvas, bf.gap, a9K + 3 * bf.gap + bk.a9L()) : vw.drawImage(canvas, bf.gap, a9K + 2 * bf.gap)
	}

	function a9D() {
		canvas.width = a7I[0].width + a9A, canvas.height = k + a9A, (zW = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a7I[0].width + a9A, k + a9A), zW.translate(Math.floor(a9A / 2), Math.floor(a9A / 2)), zW.lineWidth = a9A, zW.fillStyle = 1 === a7I[0].a9I ? bE.oS : bE.oK, a9M(), zW.fill(), zW.strokeStyle = 1 === a7I[0].a9I ? bE.oE :
			bE.oN, a9M(), zW.stroke(), bD.rK.textAlign(zW, 1), bD.rK.textBaseline(zW, 1), zW.fillStyle = 1 === a7I[0].a9I ? bE.oE : bE.oN, zW.font = a74[0], zW.fillText(wC(a7I[0].a9H), Math.floor(a7I[0].width / 2), Math.floor(.72 * a98[0] * k)), zW
			.font = a74[1], zW.fillText(a7I[0].r1, Math.floor(a7I[0].width / 2), Math.floor((a98[0] + .48 * a98[1]) * k))
	}

	function a9M() {
		zW.beginPath(), zW.moveTo(a9B, 0), zW.lineTo(a7I[0].width - a9B, 0), zW.lineTo(a7I[0].width, a9B), zW.lineTo(a7I[0].width, k - a9B), zW.lineTo(a7I[0].width - a9B, k), zW.lineTo(a9B, k), zW.lineTo(0, k - a9B), zW.lineTo(0, a9B), zW.closePath()
	}
	this.di = function() {
		kr = 4, a96 = a97 = nZ = 0, a7I = [], a74 = new Array(2), fontSize = new Array(2), (a98 = new Array(2))[0] = .3, a98[1] = .7, a99 = new Array(4), canvas = document.createElement("canvas"), a9C = bi.eY + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ia() ? .062 : .047) * i.ib), fontSize[0] = Math.floor(.85 * a98[0] * k), fontSize[1] = Math.floor(.85 * a98[1] * k), a74[0] = bD.rK.t8(1, fontSize[0]), a74[1] = bD.rK.t8(1, fontSize[1]), aC = a99.length -
			1; 0 <= aC; aC--) a99[aC] = this.measureText(wC(aC) + "000", a74[0]);
		if (a9A = Math.floor(1 + .05 * k), a9B = Math.floor(.2 * k), 0 < a7I.length) {
			for (aC = a7I.length - 1; 0 <= aC; aC--) j = this.measureText(a7I[aC].r1 + "00", a74[1]), a7I[aC].width = j < a99[aC] ? a99[aC] : j;
			a9D()
		}
	}, this.ed = function() {
		0 !== kr && (4 === kr ? bi.eY > a9C && (kr = 0, 1 === aE.a1N) && aR.a1k(bV.xj.xk[bV.f7].name, 3, 1, 9) : (1 === kr ? (0 === a96 && (a9D(), a96 = 1e-4), 1 <= (a96 += .002 * (bi.eY - nZ)) && (a97 = 0, kr = 2, a96 = 1), bi.dq = !0) : 2 ===
			kr ? ((a97 += (bi.eY - nZ) / 1e3) > a7I[0].ne || 1 < a97 && 1 < a7I.length) && (kr = 3) : 3 === kr && ((a96 -= .002 * (bi.eY - nZ)) <= 0 && (a96 = 0, a7I.shift(), kr = 0 < a7I.length ? 1 : 0), bi.dq = !0), nZ = bi.eY))
	}, this.measureText = function(r1, a74) {
		return vw.font = a74, Math.floor(vw.measureText(r1).width)
	}, this.eh = function(a9G, aC) {
		this.a1k(ah.zq[a9G], aC, 1, 0 === aC ? 3 : 7)
	}, this.a1k = function(r1, a9H, a9I, ne) {
		var j;
		r1.length && (j = (j = this.measureText(r1 + "00", a74[1])) < a99[a9H] ? a99[a9H] : j, a7I.push({
			r1: r1,
			width: j,
			a9H: a9H,
			a9I: a9I,
			ne: ne
		}), 0 === kr) && (a96 = 0, kr = 1, nZ = bi.eY)
	}, this.vv = function() {
		0 !== kr && 0 !== a96 && (a96 < 1 ? (vw.globalAlpha = a96, a9J(), vw.globalAlpha = 1) : a9J())
	}
}

function ct() {
	var k, canvas, zW, a9N, a9O, a9P, a9Q, a8c, a9R, a9S, a9T, a9U, a82 = !1,
		a4E = (this.iD = !1, this.j = 0, new Array(2)),
		a9V = 0;

	function n9() {
		var j = ax.j,
			lh = (a8c = !1, zV(zW, j, k), Math.floor(j / 2));
		1 === a9N ? (zW.fillStyle = bE.oi, zW.fillRect(lh, 0, lh, k)) : -1 === a9N && (zW.fillStyle = bE.oy, zW.fillRect(0, 0, lh, k)), zX(zW, j, k, 2);
		var lh = (lh = Math.floor(.25 * k)) < 2 ? 2 : lh,
			a8C = (zW.fillStyle = bE.oT, Math.floor((k - 4) * a9O[1] / a9P[1]));
		0 < a8C && zW.fillRect(2, k - 2 - a8C, lh, a8C), 0 < (a8C = Math.floor((k - 4) * a9O[0] / a9P[0])) && zW.fillRect(j - 2 - lh, k - 2 - a8C, lh, a8C);
		lh = (lh = Math.floor(k / 8)) < 2 ? 2 : lh, zZ(zW, Math.floor(.4 * k), 0, k, lh, .5, !1), zZ(zW, Math.floor(j - 1.4 * k), 0, k, lh, .5, !0), a8C = 1.1 * k / a4E[0].width;
		zW.imageSmoothingEnabled = !0, zW.setTransform(a8C, 0, 0, a8C, (j - a8C * a4E[0].width) / 2, -.05 * k), zW.drawImage(a4E[+a82], 0, 0), zW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9a() {
		a9U = -1, a82 = ai.a9b(), aO.a5i(257), aO.a81(a82), ax.iD = !0, a8c = !0, a9R = 360;
		for (var ft, eZ = 0, aC = am.lI - 1; 0 <= aC; aC--) bD.gn.k9(am.lN[aC]) || (eZ += ah.hF[am.lN[aC]]);
		a82 ? a9P[0] = Math.max(bO.fs(3 * eZ, 4), 1) : aE.iL ? (ft = 9 === aE.l4 ? 8 === bj.l9[bk.lL()] ? 80 : (ft = bO.fs(100 * bk.lJ(), aE.kW), bO.fs(bO.iZ(1550 - 11 * ft, 400, 1e3), 10)) : (ft = bO.fs(100 * bk.lJ(), aE.kW), bO.fs(bO.iZ(1600 - 12 *
			ft, 400, 1e3), 10)), ft = bO.fs(ft * eZ, 100), a9P[0] = Math.max(ft, 1)) : 8 === aE.l4 ? a9P[0] = Math.max(bO.fs(3 * eZ, 4), 1) : a9P[0] = Math.max(bO.fs(3 * eZ, 5), 1), a9P[1] = Math.max(eZ - a9P[0], 1)
	}

	function a9W() {
		a9T = bi.kj(), a8c = !0, a9R = a9N = 0, a9Q = [], ax.iD = !1, aO.a1V(247), a9O[0] = a9O[1] = 0, aO.a5i(673)
	}

	function zS() {
		return aS.a7h(aO.a7d()) ? __fx.settings.keybindButtons ? aS.fa - 2 * (k + bf.gap) : aS.fa - k - bf.gap : bF.a7h(aO.a7g()) ? bF.zS() - k - bf.gap : i.k - k - bn.a6T() * bf.gap
	}
	this.dj = function() {
		for (var aC = 0; aC < 2; aC++) a4E[aC] = bD.canvas.a07(ac.get(3), 8 - aC, bE.pb), a4E[aC] = bD.canvas.a4G(a4E[aC])
	}, this.di = function() {
		a9T = -1e4, a9S = a9V = 0, a9U = -1, this.iD = !1, a8c = a82 = !1, a9O = [a9N = a9R = 0, 0], a9P = [1, 1], a9Q = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, zW = canvas.getContext("2d", {
			alpha: !0
		}), n9()
	}, this.n8 = function() {
		a8c && n9()
	}, this.he = function(fY, fa) {
		return !!this.iD && !(fY < i.j - this.j - bf.gap || fa < zS() || (aE.ha || this.iE(aE.fB) && (aN.hb && aN.a3V(), bB.hr.iF(fY > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ed = function() {
		0 < a9S ? 0 === --a9S && a9W() : this.iD ? 180 == --a9R && 3 * a9O[0] < a9P[0] ? a9W() : a9O[0] >= a9P[0] ? a82 ? bU.a0z.a1I() : bU.a0z.a1M() : a9O[1] >= a9P[1] ? a9S = 4 : a9R <= 0 && a9W() : ! function() {
			var a9d = bi.kj();
			if (a9d % 40 == 14) {
				if (a9V) return !(a9d < a9V) && !(a9d < a9T + 535) && (a9V = a9d + 1071, bD.gn.a4n()) ? (a9a(), 1) : 0;
				(1 === am.lI || (aE.iL ? bk.lJ() : ah.hF[mN[0]]) >= bO.fs(96 * aE.kW, 100)) && (a9V = a9d + 535)
			}
			return
		}() && 0 <= a9U && (aO.zp(250, L(112, [ah.zq[a9U]]), 673, a9U, bE.oN, bE.oK, -1, !0), a9a())
	}, this.a1O = function() {
		this.iD && a9O[0] < a9P[0] && a9W()
	}, this.qu = function(player, a9e) {
		var a9f = L(a9e ? 113 : 114, [ah.zq[player]]),
			a9f = (aO.zp(450, a9f, 257, player, a9e ? bE.og : bE.ov, bE.oK, -1, !0), a9Q.push(player), a8c = !0, aE.l6 ? Math.max(a9P[0], a9P[1]) : ah.hF[player]),
			a9f = Math.max(a9f, 1);
		a9e ? a9O[0] += a9f : a9O[1] += a9f, player === aE.fB && (a9N = a9e ? 1 : -1)
	}, this.vv = function() {
		var fa;
		this.iD && (fa = zS(), vw.drawImage(canvas, i.j - this.j - bf.gap, fa))
	}, this.iG = function(player) {
		if (0 !== a9R) return !1;
		if (!bD.gn.hc(1)) return !1;
		if (!bD.gn.hd(player)) return !1;
		if (10 <= kX[player] && !bD.gn.a56(player, 9)) return !1;
		if (!aE.l6) {
			player = bi.kj();
			if (player < a9T + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iE = function(gz) {
		if (!bD.gn.hc(1)) return !1;
		if (!bD.gn.hd(gz)) return !1;
		if (!this.iD) return !1;
		for (var aC = a9Q.length - 1; 0 <= aC; aC--)
			if (a9Q[aC] === gz) return !1;
		return !0
	}, this.iC = function(player) {
		a9U = player
	}
}

function cL() {
	var j, fY, a9h, canvas, zW, iD, j4, a5Z, a74, a8c, a9i = 11 / 12;

	function a9k() {
		var a8j = Math.floor(j4 * (j - 2 * a9h)),
			a9n = 1 + Math.floor(.0625 * aS.k),
			a9o = 1 + Math.floor(.3 * aS.k),
			a9p = Math.floor(.55 * aS.k);
		zW.clearRect(0, 0, j, aS.k), zW.fillStyle = bE.oJ, zW.fillRect(0, 0, a9h, aS.k), zW.fillRect(a9h + a8j, 0, j - a9h - a8j, aS.k), zW.fillStyle = j4 < 1 / 3 ? "rgba(" + Math.floor(3 * j4 * 130) + ",130,0,0.85)" : j4 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (j4 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (j4 - 2 / 3) * 130) + ",0.85)", zW.fillRect(a9h, 0, a8j, aS.k), zW.fillStyle = bE.oN, zW.fillRect(0, 0, j, 1), zW.fillRect(0, aS.k - 1, j, 1), zW
			.fillRect(0, 0, 1, aS.k), zW.fillRect(a9h, 0, 1, aS.k), zW.fillRect(a9h + a8j, 0, 1, aS.k), zW.fillRect(j - a9h, 0, 1, aS.k), zW.fillRect(j - 1, 0, 1, aS.k), zW.fillRect(Math.floor(.25 * aS.k) + a9o, Math.floor((aS.k - a9n) / 2), aS.k -
				2 * a9o, a9n), zW.fillRect(Math.floor(j - 1.25 * aS.k) + a9o, Math.floor((aS.k - a9n) / 2), aS.k - 2 * a9o - a9o % 2, a9n), zW.fillRect(Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - a9n) / 2), a9o, a9n, aS.k - 2 * a9o - a9o % 2),
			a5Z = bD.gn.j3(aE.fB, aS.hv()), zW.fillText(bD.sJ.a0e(a5Z) + " (" + bD.sJ.a5S(100 * j4, +(j4 < .1)) + ")", Math.floor(.5 * j), a9p)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		j4 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a3R(arg1);

	function a9u(a3n) {
		return !(1 < a3n && 1 === j4 || (1 < a3n && a3n * j4 - j4 < 1 / 1024 ? a3n = (j4 + 1 / 1024) / j4 : a3n < 1 && j4 - a3n * j4 < 1 / 1024 && (a3n = (j4 - 1 / 1024) / j4), j4 = bO.iZ(j4 * a3n, 1 / 1024, 1), a9k(), 0))
	}

	function a9v(m1) {
		return j4 !== (j4 = bO.iZ((m1 - fY - a9h) / (j - 2 * a9h), 1 / 1024, 1)) && (a9k(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9k(), bi.dq = !0
	}, this.fa = 0, this.hf = !1, this.di = function() {
		iD = !aE.hp && !aE.ha, a8c = !1, j4 = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.eV.data[182].value + 1) / 1024, a5Z = 0, this.hf = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ia() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.ib), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ia() ? .65 : .389) * i.ib), j += 12 - j % 12, this.k = Math.floor(j / 12)), a9h = Math.floor(3 * this.k / 2), a74 =
			bD.rK.t8(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, vw), canvas.height = this.k, (zW = canvas.getContext("2d", {
				alpha: !0
			})).font = a74, bD.rK.textBaseline(zW, 1), bD.rK.textAlign(zW, 1), this.a9j(), a9k()
	}, this.a9j = function() {
		fY = a1.a2.ia() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fa = i.k - this.k - bn.a6T() * bf.gap
	}, this.n8 = function() {
		a8c && (a8c = !1, a9k())
	}, this.iD = function() {
		return !(!iD || aN.hb && fY < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a7h = function(a9q) {
		return !!this.iD() && fY + j > i.j - a9q - bf.gap
	}, this.a5g = function() {
		iD = !aE.ha
	}, this.a9W = function() {
		iD = !1
	}, this.hv = function() {
		return bO.iZ(Math.floor(1024 * j4 + .5) - 1, 0, 1023)
	}, this.a3O = function(m1, m2) {
		return this.iD() && fY < m1 && m1 < fY + j && m2 > this.fa
	}, this.he = function(m1, m2) {
		if (!this.iD()) return !1;
		if (!(__fx.settings.keybindButtons && m2 > this.fa - Math.floor(bf.gap / 4) - this.k && m2 < this.fa - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(m1 - fY))) {
			if (!aS.a3O(m1, m2)) return !1;
			aT.ns = !1, ! function(st, m1, m2) {
				if (function(m1, m2) {
						return fY < m1 && m1 < fY + a9h && m2 > aS.fa
					}(m1, m2)) return a9u(a9i);
				if (function(m1, m2) {
						return fY + j - a9h < m1 && m1 < fY + j && m2 > aS.fa
					}(m1, m2)) return a9u(1 / a9i);
				return st.hf = !0, a9v(m1)
			}(this, m1, m2) || (bi.dq = !0)
		}
		return !0
	}, this.a3R = function(nz) {
		0 !== aE.a1N && this.iD() && a9u(nz) && (bi.dq = !0)
	}, this.a2x = function(deltaY) {
		var nz;
		return !(0 === deltaY || !this.iD()) && a9u(nz = 0 < deltaY ? (nz = 400 / (400 + deltaY)) < a9i ? a9i : nz : 1 / a9i < (nz = (400 - deltaY) / 400) ? 1 / a9i : nz)
	}, this.a2u = function(m1) {
		return !!this.hf && a9v(m1)
	}, this.a3K = function() {
		this.hf = !1
	}, this.ed = function() {
		this.iD() && a5Z !== bD.gn.j3(aE.fB, this.hv()) && (a8c = !0)
	}, this.vv = function() {
		this.iD() && (vw.drawImage(canvas, fY, this.fa), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vw, fY, this.fa)
	}
}

function d5() {
	var canvas, zW, a9w, font, a9x = 0,
		a9y = !1,
		a9z = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aA0 = 5;

	function aA7() {
		if (a9y) {
			var aC, fR = a9z.length,
				a9p = Math.floor(.5 * a9w.k),
				k = fR * a9p,
				fY = Math.floor(Math.floor(a9w.fY) + .3 * a9w.j - .5),
				fa = Math.floor(Math.floor(a9w.fa) - k),
				j = Math.floor(.4 * a9w.j + 2.5);
			for (vw.fillStyle = bE.oJ, vw.fillRect(fY, fa, j, k), vw.fillStyle = bE.on, vw.fillRect(fY, fa + aA0 * a9p, j, a9p), vw.fillStyle = bE.oN, vw.fillRect(fY, fa, 2, k), vw.fillRect(fY, fa, j, 2), vw.fillRect(fY + j - 2, fa, 2, k), aC =
				1; aC < fR; aC++) vw.fillRect(fY, fa + aC * a9p, j, 2);
			for (vw.fillStyle = bE.oN, bD.rK.textAlign(vw, 1), bD.rK.textBaseline(vw, 1), vw.font = bD.rK.t8(0, .6 * a9p), fY += .5 * j, aC = 0; aC < fR; aC++) vw.fillText(aAF(aC), fY, fa + (aC + .6) * a9p)
		}
		vw.drawImage(canvas, Math.floor(a9w.fY), Math.floor(a9w.fa))
	}

	function n9(st) {
		var fY, nn, no, a9p;
		zW.clearRect(0, 0, Math.floor(a9w.j), Math.floor(a9w.k)), zW.fillStyle = bE.oJ, zW.fillRect(0, 0, Math.floor(a9w.j), Math.floor(a9w.k)), aE.nq && (zW.fillStyle = bE.on, zW.fillRect(0, 0, Math.floor(.3 * a9w.j), Math.floor(a9w.k))), zW
			.fillStyle = bE.oN, zW.fillText("Hide UI", .15 * a9w.j, .5 * a9w.k), zW.fillRect(Math.floor(.3 * a9w.j - .5), 0, 2, Math.floor(a9w.k)), fY = .5 * a9w.j, zW.fillText("Replay Speed", fY, .31 * a9w.k), zW.fillText(aAF(aA0), fY, .69 * a9w.k),
			zW.fillRect(Math.floor(.7 * a9w.j - .5), 0, 2, Math.floor(a9w.k)), st.a6D ? (fY = Math.floor(.02 * a9w.j), st = Math.floor(.025 * a9w.j), nn = Math.floor(.85 * a9w.j - fY - .5 * st), no = Math.floor(.25 * a9w.k), a9p = Math.floor(a9w.k) -
				2 * no, zW.fillRect(nn, no, fY, a9p), zW.fillRect(nn + fY + st, no, fY, a9p)) : function() {
				var j = Math.floor(.46 * a9w.k),
					k = Math.floor(.23 * a9w.k),
					fY = Math.floor(.85 * a9w.j - .5 * j + j / 12),
					fa = Math.floor(.5 * a9w.k - k);
				zW.beginPath(), zW.moveTo(fY, fa), zW.lineTo(fY + j, fa + k), zW.lineTo(fY, fa + (k << 1)), zW.fill()
			}(), zW.fillRect(0, 0, Math.floor(a9w.j), 2), zW.fillRect(0, 0, 2, Math.floor(a9w.k)), zW.fillRect(0, Math.floor(a9w.k) - 2, Math.floor(a9w.j), 2), zW.fillRect(Math.floor(a9w.j - 2), 0, 2, Math.floor(a9w.k))
	}

	function aAF(aC) {
		return 5 === aC ? "Normal" : "" + a9z[aC]
	}
	this.a6D = !1, this.di = function() {
		aE.ha && (aA0 = 5, this.a6D = !1, a9y = !1, a9w = new rv([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aA1 = function() {
		return a9z[aA0]
	}, this.zS = function() {
		return a9w.fa
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a6D,
		fxGetSpeedIndex: () => aA0,
		fxSetSpeedIndex: index => {
			aA0 = index, this.resize()
		},
		fxGetPanelTop: () => a9w && a9w.fa
	}, this.a7h = function(a9q) {
		return !!aE.ha && a9w.fY + a9w.j > i.j - a9q - bf.gap
	}, this.resize = function() {
		aE.ha && (a9w.resize(), a9w.fa -= (bn.a6T() - 1) * bf.gap, font = bD.rK.t8(0, .3 * a9w.k), (canvas = document.createElement("canvas")).width = Math.floor(a9w.j), canvas.height = Math.floor(a9w.k), (zW = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.rK.textAlign(zW, 1), bD.rK.textBaseline(zW, 1), n9(this))
	}, this.a3U = function(aA2) {
		0 === aE.a1N || u.iD() || aA2 !== aE.nq && (aE.nq = aA2, bk.resize(), bi.dq = !0, aE.ha) && (a9x = bi.eY + 2e3, n9(this))
	}, this.he = function(fY, fa) {
		if (!aE.ha) return !1;
		if (fY < a9w.fY || fa < a9w.fa || fY > a9w.fY + a9w.j) return a9y && function(st, fY, fa) {
			var fR = a9z.length,
				a9p = Math.floor(.5 * a9w.k),
				k = fR * a9p,
				nn = Math.floor(Math.floor(a9w.fY) + .3 * a9w.j - .5),
				k = Math.floor(Math.floor(a9w.fa) - k),
				j = Math.floor(.4 * a9w.j + 2.5);
			return a9y = !1, bi.dq = !0, fY < nn || nn + j < fY || fa < k || (aA0 = aA6(0, Math.floor((fa - k) / a9p), fR - 1), n9(st)), !0
		}(this, fY, fa);
		if ((fY -= a9w.fY) < .3 * a9w.j) a9y = !1, this.a3U(!aE.nq);
		else {
			if (fY < .7 * a9w.j) return a9y = !a9y, bi.dq = !0;
			this.a3W(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a3W(!0), this.a3W = function(aA4) {
		2 === aE.a1N ? (this.a3U(!1), u.v(3)) : (a9y = !1, this.a6D = !this.a6D, this.a6D ? (aN.hb && aN.a3V(), a1.a2.setState(1)) : aA4 || aN.a7B(), bi.dq = !0, n9(this))
	}, this.aA5 = function() {
		this.a6D = !1, aN.a7B(), bi.dq = !0, n9(this)
	}, this.a3D = function(fY, fa) {
		return !!aE.nq && (0 <= aN.he(fY, fa) || (aE.ha ? ((bi.eY > a9x || !this.he(fY, fa)) && aT.he(fY, fa), bi.dq = !0, a9x = bi.eY + 2e3) : aT.he(fY, fa)), !0)
	}, this.ed = function() {
		aE.ha && aE.nq && bi.eY > a9x - 1e3 && bi.eY < a9x && (bi.dq = !0)
	}, this.a1W = function() {
		aE.ha && (this.a6D = !1, bi.dq = !0, n9(this))
	}, this.vv = function() {
		if (aE.ha) {
			if (aE.nq) {
				if (bi.eY > a9x) return;
				if (bi.eY > a9x - 1e3) return vw.globalAlpha = aA6(0, (1e3 - (bi.eY - (a9x - 1e3))) / 1e3, 1), aA7(), void(vw.globalAlpha = 1)
			}
			aA7()
		}
	}
}

function cM() {
	var aAG, aAH, j, fY, fa, aAI, aAJ;
	this.di = function() {
		aAG = new Array(2), aAH = new Array(2), this.ns = !1, aAJ = aAI = j6 = j5 = 0, ic = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ia() ? .072 : .0502) * i.ib)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aAG[aC] = document.createElement("canvas"), aAG[aC].width = j, aAG[aC].height = j, aAH[aC] = aAG[aC].getContext("2d", {
			alpha: !0
		});
		this.a9j(),
			function() {
				for (var aAa = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aAH[aC].clearRect(0, 0, j, j), aAH[aC].fillStyle = bE.oG, aAH[aC].beginPath(), aAH[aC].arc(j / 2, j / 2, j / 2 - aAa, 0, 2 * Math.PI), aAH[aC].fill(), aAH[aC]
					.lineWidth = aAa, aAH[aC].fillStyle = bE.oN, aAH[aC].strokeStyle = bE.oN, aAH[aC].beginPath(), aAH[aC].arc(j / 2, j / 2, j / 2 - aAa, 0, 2 * Math.PI), aAH[aC].stroke(), zZ(aAH[aC], 0, 0, j, aAa, .3, 0 === aC)
			}()
	}, this.zR = function() {
		return -j5 / ic
	}, this.zS = function() {
		return -j6 / ic
	}, this.o2 = function(aAN, ik) {
		j5 = ic * aAN - ik
	}, this.o3 = function(aAO, il) {
		j6 = ic * aAO - il
	}, this.he = function(aAM, a7i) {
		return aE.nq || ! function(aAM, a7i) {
			return Math.pow(aAM - (fY + j / 2), 2) + Math.pow(a7i - (fa + j / 2), 2) < j * j / 4 || Math.pow(aAM - (fY + j / 2), 2) + Math.pow(a7i - (fa + 2 * j), 2) < j * j / 4
		}(aAM, a7i) || bm.eV.data[8].value ? (aI.o5() && (this.ns = !0, aAI = aAM, aAJ = a7i), !1) : a7i < fa + 1.25 * j ? this.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a2x(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a2u = function(aAM, a7i) {
		var aAP, aAQ, io, ir;
		return !aI.o5() || (aAP = j5, aAQ = j6, j5 += io = aAI - aAM, j6 += ir = aAJ - a7i, ag.a2u(io, ir), this.aAR(), aAI = aAM, aAJ = a7i, aAP !== j5) || aAQ !== j6
	}, this.a2x = function(m1, m2, deltaY) {
		var nz;
		if (aI.o5()) {
			if (0 < deltaY) nz = (nz = 500 / (500 + deltaY)) < .5 ? .5 : nz;
			else {
				if (!(deltaY < 0)) return !1;
				nz = 2 < (nz = (500 - deltaY) / 500) ? 2 : nz
			}
			this.aAS(m1, m2, nz), bi.dq = !0
		}
		return !0
	}, this.aAS = function(fY, fa, f5) {
		var a3n;
		f5 = a3n = (a3n = 1024 < (a3n = f5) * ic ? 1024 / ic : a3n) * ic < .125 ? .125 / ic : a3n, ag.zoom(f5, fY, fa),
			function(a3n, m1, m2) {
				ic *= a3n, j5 = (j5 + m1) * a3n - m1, j6 = (j6 + m2) * a3n - m2, aT.aAR()
			}(f5, fY, fa)
	}, this.aAR = function() {
		var aAV = i.j / 16,
			aAW = 0,
			aAX = i.k / 16,
			aAY = 0;
		j5 < -i.j + aAV && (aAW = -i.j + aAV - j5), j5 > ic * bV.fc - aAV && (aAW = ic * bV.fc - aAV - j5), j6 < -i.k + aAX && (aAY = -i.k + aAX - j6), j6 > ic * bV.fd - aAX && (aAY = ic * bV.fd - aAX - j6), j5 += aAW, j6 += aAY, bd.o4(), ag.aAZ(
			aAW, aAY)
	}, this.a9j = function() {
		fY = i.j - j - bf.gap, fa = Math.floor(i.k / 2 - 1.25 * j)
	}, this.vv = function() {
		bm.eV.data[8].value || (vw.drawImage(aAG[0], fY, fa), vw.drawImage(aAG[1], fY, Math.floor(fa + 3 * j / 2)))
	}
}

function cN() {
	var h, aAb, aAc, aAd, gap, aAe, aAf, aAg, aAh, aAi, a74, aAj, hW, aAk, a8j, aAl, aAm;

	function aAq() {
		aAd = Math.floor(.2 * (a1.a2.ia() ? .07 : .035) * i.ib), aAd = a7f(a1.a2.ia() ? 3 : 1, aAd);
		var aAt = i.j / (h.length + gap);
		aAd = aAd < aAt ? aAt : aAd, a8j = Math.floor((1 - gap) * aAd), aAb = 0, aAu()
	}

	function aAu() {
		aAb = (aAb = aAb < -20 ? -20 : aAb) > (h.length - 15) * aAd ? (h.length - 15) * aAd : aAb, aAf = Math.floor(aAb / aAd), aAg = (aAg = aAf + Math.floor(i.j / aAd)) > h.length - 1 ? h.length - 1 : aAg, aAf = (aAf = aAg < aAf ? aAg : aAf) < 0 ?
			0 : aAf;
		var lh = aAg;
		aAe = aAc / h[lh];
		for (var aC = aAg - 1; aAf <= aC; aC--) h[aC] > h[lh] && (lh = aC, aAe = aAc / Math.pow(h[aC], aAk))
	}

	function aAx(fY) {
		fY = Math.floor((aAb + i.j - fY - gap * aAd) / aAd);
		return (fY = fY < -1 ? -1 : -1 === fY ? 0 : fY > h.length - 1 ? -1 : fY) !== aAh && (aAh = fY, -1 === aAl && 0 === aAh && aU.aAn && (aAl = setInterval(aAy, 100)), 1)
	}

	function aAz(aC) {
		var aB1 = Math.floor(aAe * Math.pow(h[aC], aAk));
		vw.fillRect(aAb + i.j - (aC + 1) * aAd, i.k - aB1, a8j, aB1)
	}

	function aAy() {
		var gz;
		0 !== (aAh = 8 === ab.a2X() ? -1 : aAh) ? (aAm = (new Date).getTime(), clearInterval(aAl), aAl = -1) : (gz = h[1] / 864e3, -1 !== aAm && (gz += ((new Date).getTime() - aAm) * h[1] / 864e5, aAm = -1), 0 < gz && (h[0] += Math.floor(gz), bi
			.dq = !0))
	}
	this.aAn = !1, this.di = function() {
		aAm = aAl = -1, aAh = -(aAk = 1), this.aAo = !1, hW = 0, aAj = new Date, aAb = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aAc = Math.floor(.15 * i.k), aAi = (aAi = Math.floor((a1.a2.ia() ? .018 : .0137) * i.ib)) < 2 ? 2 : aAi, a74 = bD.rK.t8(1, aAi), aAq()
	}, this.aAr = function(aAs) {
		var aC;
		for (this.aAn = !0, aC = 0; aC < aAs.length; aC++) h.unshift(aAs[aC]);
		aAq(), bi.dq = !0
	}, this.aAv = function() {
		aAu()
	}, this.a2u = function(fY, fa) {
		fa > i.k - .6 * aAc ? this.aAo ? fY !== hW && (aAb += fY - hW, hW = fY, aAu(), aAx(fY), this.aAo = -1 !== aAh, bi.dq = !0) : aAx(fY) && (bi.dq = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aAh && (this.aAo = !1, aAh = -1, bi.dq = !0)
	}, this.a2x = function(fY, deltaY) {
		-1 !== aAh && (aAb += Math.floor(deltaY), aAu(), aAx(fY), bi.dq = !0)
	}, this.he = function(fY, fa) {
		this.a2u(fY, fa), -1 !== aAh && (hW = fY, this.aAo = !0)
	}, this.a3J = function() {
		-1 !== aAh && (this.aAo = !1)
	}, this.vv = function() {
		vw.fillStyle = bE.oQ;
		for (var aB2, month, eZ, ti, aB5, aB6, no, aB7, aB8, aC = aAg; aAf <= aC; aC--) aAz(aC);
		this.aAn && 0 === aAf && (vw.fillStyle = bE.oy, aAz(0)), -1 !== aAh && (vw.fillStyle = bE.oP, aAz(aAh)), -1 !== aAh && (vw.font = a74, bD.rK.textBaseline(vw, 2), (eZ = new Date).setTime(aAj.getTime() - 1e3 * aAh * 60 * 60 * 24), month =
			"month", aB2 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eZ), aB2 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eZ)), aB2 = aB2 + ", " + eZ.getUTCDate() + " " + month + " " + eZ.getFullYear(), month = 1 === h[aAh] ? L(115) : L(116), month = bD.sJ.a0e(h[aAh]) + " " + month, eZ = Math.floor(vw.measureText(aB2).width), ti = Math
			.floor(vw.measureText(month).width), aB5 = Math.floor(.5 * (eZ + aAi)), aB6 = (aB6 = aAb + i.j - (aAh + 1) * aAd) < aB5 ? aB5 : aB6 > i.j - aB5 ? i.j - aB5 : aB6, no = i.k - Math.floor(aAe * Math.pow(h[aAh], aAk)), aB7 = Math
			.floor(1.1 * aAi), aB8 = no > i.k - aB7 ? i.k - aB7 : no, vw.fillStyle = bE.oK, vw.fillRect(i.j - ti - aAi, aB8 - aB7, ti + aAi, aB7), vw.fillRect(aB6 - aB5, i.k - aB7, eZ + aAi, aB7), vw.fillStyle = bE.oN, bD.rK.textAlign(vw, 2),
			vw.fillText(month, Math.floor(i.j - .5 * aAi), aB8), bD.rK.textAlign(vw, 1), vw.fillText(aB2, aB6, i.k), vw.strokeStyle = bE.oR, vw.lineWidth = 1, vw.beginPath(), vw.moveTo(0, no), vw.lineTo(i.j, no), vw.closePath(), vw.stroke())
	}
}

function cO() {
	var a74, j, fa, aB9, aBA, aBB, canvas, zW, a8c, a4u, aBC, aBD, aBE, aBF;
	this.fY = 0, this.k = 0, this.di = function() {
		aBB = aE.a5o, aBD = "rgba(0,100,0,0.8)", aBE = "rgba(150,0,0,0.8)", a8c = aBC = !0, a4u = ah.hT[aE.fB], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ia() ? .305 : .24) * i.ib), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a74 = bD.rK.t8(1, Math.floor(.8 * this.k)), aBA = bD.rK.t8(1, Math.floor(.45 * this.k)), aBF = Math.floor(.5 * this.k), bV.xp
			.font = a74, fa = bf.gap, aB9 = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, zW = canvas.getContext("2d", {
				alpha: !0
			}), bD.rK.textBaseline(zW, 1), bD.rK.textAlign(zW, 1), this.aBG()
	}, this.a95 = function() {
		return a1.a2.ia() && i.j < 1.2 * i.k
	}, this.a9j = function() {
		this.a95() ? this.fY = i.j - j - bf.gap : this.fY = Math.floor(aW.aBH() + (i.j - aW.aBH() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.n8 = function() {
		a8c && (a8c = !1, this.aBG())
	}, this.aBG = function() {
		zW.font = a74, zW.clearRect(0, 0, j, this.k), zW.fillStyle = aBC ? aBD : aBE, zW.fillRect(0, 0, j, this.k), zW.fillStyle = bE.oP;
		var ei = this.aBI(),
			aBK = (this.aBJ(), zW.fillStyle = ah.hT[aE.fB] >= af.kS(aE.fB) ? bE.ov : bE.oN, bD.sJ.a0e(a4u)),
			aBK = (zW.fillText(aBK, Math.floor(j / 2), aBF), zW.measureText(aBK).width),
			aBL = (zW.font = aBA, zW.fillStyle = 9 === ei ? bE.pV : bE.oN, af.aBM),
			aBN = "+" + aBL,
			ti = zW.measureText(aBN).width,
			aBO = Math.floor(this.k / 12),
			aBK = .5 * (j + aBK) + aBO;
		(aBK + ti + aB9 <= j || 1e3 <= aBL && (aBN = "+" + Math.floor(aBL / 1e3) + "K", aBK + (ti = zW.measureText(aBN).width) + aB9 <= j)) && zW.fillText(aBN, Math.floor(aBK + .5 * ti), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && zW.fillText(9 - ei, Math.floor(2 * aB9 + aBO), Math.floor(.3 * this.k)), zW.fillStyle = bE.oN, zW.fillRect(0, 0, j, 1), zW.fillRect(0, 0, 1, this.k), zW.fillRect(0, this.k - 1, j, 1), zW.fillRect(j - 1, 0, 1,
				this.k)
	}, this.aBI = function() {
		var ei = bi.kj() % 100,
			yU = (ei = 9 - bO.fs(ei -= ei % 10, 10), Math.floor(ei * (this.k - aB9) / 9));
		return zW.fillRect(0, yU, aB9, this.k - yU), zW.fillRect(j - aB9, yU, aB9, this.k - yU), ei
	}, this.aBJ = function() {
		zW.fillRect(aB9, this.k - aB9, Math.floor((j - 2 * aB9) * ah.hT[aE.fB] / aBB), aB9)
	}, this.ed = function() {
		var gz = aE.fB;
		bD.gn.hd(gz) && (gz = ah.hT[gz] - ah.a4t[gz], a4u !== gz ? (aBB = a7f(gz, aBB), aBC = a4u < gz && 10 <= gz, a4u = gz, a8c = !0) : bi.kj() % 10 == 9 && (a8c = !0))
	}, this.vv = function() {
		0 === ah.nM[aE.fB] || aE.hp || 2 === ah.a4k[aE.fB] || vw.drawImage(canvas, this.fY, fa)
	}
}

function cP() {
	var aBP, aBQ, aBR, aBS, aBT, aBU, aBV, aBW, aBX, aBY, aBZ, aBa, aBb, aBc, aBd, aBe, aBf, aBg, aBh, aBi, aBj, aBk, position, aBl, aBm, aBn, aBo, aBp, aBq = 1,
		aBr = 1,
		aBs = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fB;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kX[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kX[aE.fB]);
	}

	function aBu() {
		aBV.clearRect(0, 0, aBP, a9K),
			aBV.fillStyle = aBp ? bE.pI : bE.pE,
			aBV.fillRect(0, 0, aBP, aBa),
			aBV.fillStyle = bE.oJ,
			aBV.fillRect(0, aBa, aBP, a9K - aBa);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kX[aE.fB]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBk = -1;
		if (__fx.leaderboardFilter.enabled && aBk >= __fx.leaderboardFilter.filteredLeaderboard.length) aBk = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aBw(ownClanIndex - position, bE.on);
			})() :
			(playerPos >= position && aBw(playerPos - position, bE.on),
				0 !== kX[aE.fB] && 0 === position && aBw(0, bE.pM))
		),
		-1 !== aBk && aBw(aBk, bE.oO),
			aBV.fillStyle = bE.oJ,
			//console.log("drawing", aBk),
			aBV.clearRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, __fx.leaderboardFilter.tabBarOffset);
		aBV.fillRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, __fx.leaderboardFilter.tabBarOffset);
		aBV.fillStyle = bE.oN,
			aBV.fillRect(0, aBa, aBP, 1),
			aBV.fillRect(0, a9K - __fx.leaderboardFilter.tabBarOffset, aBP, 1),
			__fx.leaderboardFilter.drawTabs(aBV, aBP, a9K - __fx.leaderboardFilter.tabBarOffset, bE.on),
			aBV.fillRect(0, 0, aBP, bf.a0L),
			aBV.fillRect(0, 0, bf.a0L, a9K),
			aBV.fillRect(aBP - bf.a0L, 0, bf.a0L, a9K),
			aBV.fillRect(0, a9K - bf.a0L, aBP, bf.a0L), aBV.font = aBQ, bD.rK.textBaseline(aBV, 1), bD.rK.textAlign(aBV, 1), aBV.fillText(aBs, Math.floor((aBP + aBa - 22) / 2), Math.floor(aBY + aBR / 2));
		__fx.playerList.drawButton(aBV, 12, 12, aBa - 22);
		var fk, h0 = playerPos < position + aBT - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h0 = 1;

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
					rivalsRestore.push([repId, ah.hF[repId], ah.zq[repId], ah.a4k[repId]]);
					ah.hF[repId] = rivalsEntry.territory;
					ah.zq[repId] = "[" + rivalsEntry.clan + "]";
					ah.a4k[repId] = 0;
				}
				for (aBV.font = aBS, bD.rK.textAlign(aBV, 0), fk = aBT - h0; 0 <= fk; fk--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fk + position];
					if (rivalsEntryLeft !== undefined)
						aBx(rivalsEntryLeft.representativeId), aBy(fk, fk + position, rivalsEntryLeft.representativeId);
				}
				for (bD.rK.textAlign(aBV, 2), fk = aBT - h0; 0 <= fk; fk--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fk + position];
					if (rivalsEntryRight !== undefined)
						aBx(rivalsEntryRight.representativeId), aBz(fk, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hF[entry[0]] = entry[1];
					ah.zq[entry[0]] = entry[2];
					ah.a4k[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aBT)
				position = (result.length > aBT ? result.length : aBT) - aBT;
			//if (position >= result.length) position = result.length - 1;
			for (aBV.font = aBS, bD.rK.textAlign(aBV, 0), fk = aBT - h0; 0 <= fk; fk--) {
				const pos = result[fk + position];
				if (pos !== undefined)
					aBx(mN[pos]), aBy(fk, pos, mN[pos]);
			}
			for (bD.rK.textAlign(aBV, 2), fk = aBT - h0; 0 <= fk; fk--) {
				const pos = result[fk + position];
				if (pos !== undefined)
					aBx(mN[pos]), aBz(fk, mN[pos]);
			}
		} else {
			for (aBV.font = aBS, bD.rK.textAlign(aBV, 0), fk = aBT - h0; 0 <= fk; fk--)
				aBx(mN[fk + position]), aBy(fk, fk + position, mN[fk + position]);
			for (bD.rK.textAlign(aBV, 2), fk = aBT - h0; 0 <= fk; fk--)
				aBx(mN[fk + position]), aBz(fk, mN[fk + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h0 && (aBx(aE.fB), bD.rK.textAlign(aBV, 0), aBy(aBT - 1, kX[aE.fB], aE.fB), bD.rK.textAlign(aBV, 2), aBz(aBT - 1, aE.fB)), 0 === position && (h0 = .7 * aBb / ac.get(4).height, aBV.setTransform(
			h0, 0, 0, h0, Math.floor(aBc + .58 * aBb + .5 * h0 * ac.get(4).width), Math.floor(aBY + aBR + .4 * aBb)), aBV.imageSmoothingEnabled = !0, aBV.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aBV.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBx(player) {
		aE.iL && (aBV.fillStyle = bj.aC1[bj.aC2[player]])
	}

	function aBw(aC, aC3) {
		aBV.fillStyle = aC3, aC = aBT - 1 < aC ? aBT - 1 : aC;
		aC3 = Math.floor((aC === aBT - 1 ? 2 : 0 === aC ? 1.15 : 1) * aBb), aC3 = aC === aBT - 2 ? Math.floor(aBa + 9.15 * aBb) - Math.floor(aBa + 8.15 * aBb) : aC3;
		aBV.fillRect(0, Math.floor(aBa + (aC + (0 === aC ? 0 : .15)) * aBb), aBP, aC3)
	}

	function aBy(wz, a58, aC) {
		aBV.fillText(aBg[a58], aBc, Math.floor(aBY + aBR + (wz + .5) * aBb)), 1 === ah.a4k[aC] && (aBV.font = "italic " + aBS);
		a58 = Math.floor(aBY + aBR + (wz + .5) * aBb);
		aBV.fillText(ah.zq[aC], aBd, a58), 0 !== ah.a4k[aC] && (aBV.font = aBS), aC < aE.km && 2 !== ah.a4k[aC] || aBV.fillRect(aBd, a58 + .35 * aBq, aBf[aC], Math.max(1, .1 * aBq))
	}

	function aBz(wz, aC) {
		aBV.fillText(ah.hF[aC], aBe, Math.floor(aBY + aBR + (wz + .5) * aBb))
	}
	this.di = function() {
		var aC;
		for (u.z.tT[0] = 0, aBo = aBn = aBl = 0, aBp = aBm = !1, aBk = -1, aBT = a1.a2.ia() ? 6 : 10, aBr = (position = 0) === (aBr = bm.eV.data[11].value) ? 10 : 1 === aBr ? 5 : 1, aBj = !1, aBh = new Uint16Array(aBT + 1), aBi = new Uint32Array(
				aBT + 1), aBX = aE.fO, mN = new Uint16Array(aBX), kX = new Uint16Array(aBX), aC = aBX - 1; 0 <= aC; aC--) mN[aC] = aC, kX[aC] = aC;
		this.resize(!0), aBf = new Uint16Array(aE.fO);
		var aBt = Math.floor(aBP - aBd - aBc - aBW);
		for (aBg = new Array(aE.fO), aBV.font = aBS, aC = aE.fO - 1; 0 <= aC; aC--) aBg[aC] = aC + 1 + ".", ah.zq[aC] = bD.zW.a4S(ah.a23[aC], aBS, aBt), aBf[aC] = Math.floor(aBV.measureText(ah.zq[aC]).width);
		aBu()
	}, this.resize = function(di) {
		if (a9K = a1.a2.ia() ? (aBP = Math.floor(.335 * i.ib), Math.floor(aBT * aBP / 8)) : (aBP = Math.floor(.27 * i.ib), Math.floor(aBT * aBP / 10)), aBP = Math.floor(.97 * aBP), (aBU = document.createElement("canvas")).width = aBP, aBU
			.height = a9K, aBV = aBU.getContext("2d", {
				alpha: !0
			}), aBY = .025 * aBP, aBR = .16 * aBP, aBZ = 0 * aBP, aBa = Math.floor(.45 * aBY + aBR), aBb = (a9K - aBR - 2 * aBY - aBZ) / aBT,
			aBU.height = a9K += aBb, __fx.leaderboardFilter.tabBarOffset = Math.floor(aBb * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a9K - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aBP,
			aBQ = bD.rK.t8(1, Math.floor(.55 * aBR)), aBq = Math.floor((a1.a2.ia() ? .67 : .72) * aBb), aBS = bD.rK.t8(0, aBq), aBV.font = aBS, aBc = Math.floor(.04 * aBP), aBd = Math.floor((a1.a2.ia() ? .195 : .18) * aBP), aBW = Math.floor(aBV
				.measureText("00920600").width), aBV.font = aBQ, aBe = aBP - aBc, !di) {
			aBV.font = aBS;
			for (var aC = aE.fO - 1; 0 <= aC; aC--) aBf[aC] = Math.floor(aBV.measureText(ah.zq[aC]).width);
			aBu()
		}
		aBs = bD.zW.a4S(L(117), aBQ, .96 * aBP)
	}, this.aBH = function() {
		return aBP
	}, this.n8 = function(bx, aBv) {
		(aBv || aBj && (bx || bi.kj() % aBr == 0)) && (aBj = !1, aBu())
	}, this.ed = function() {
		! function() {
			for (var fk = aBX - 1; 0 <= fk; fk--) 0 === ah.nM[mN[fk]] && ! function(fk) {
				var aCB = mN[fk];
				aBX--;
				for (var aC = fk; aC < aBX; aC++) mN[aC] = mN[aC + 1], kX[mN[aC]] = aC;
				mN[aBX] = aCB, kX[mN[aBX]] = aBX
			}(fk)
		}();
		for (var aC9, o5 = aBX - 1, fk = 0; fk < o5; fk++) ah.hF[mN[fk]] < ah.hF[mN[fk + 1]] && (aC9 = mN[fk], mN[fk] = mN[fk + 1], mN[fk + 1] = aC9, kX[mN[fk]] = fk, kX[mN[fk + 1]] = fk + 1);
		! function() {
			for (var eZ = aBj, h0 = (aBj = !0, kX[aE.fB] >= aBT - 1 ? aBT - 2 : aBT - 1), aC = h0; 0 <= aC; aC--)
				if (aBh[aC] !== mN[aC] || aBi[aC] !== ah.hF[mN[aC]]) return;
			(h0 != aBT - 2 || aBh[aBT] === kX[aE.fB] && aBi[aBT] === ah.hF[aE.fB]) && (aBj = eZ)
		}();
		for (var aC = aBT - 1; 0 <= aC; aC--) aBh[aC] = mN[aC], aBi[aC] = ah.hF[mN[aC]];
		aBh[aBT] = kX[aE.fB], aBi[aBT] = ah.hF[aE.fB];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.he = function(fY, fa) {
		if (a0K(fY, fa)) {
			if (__fx.utils.isPointInRectangle(fY, fa, bf.gap + 12, bf.gap + 12, aBa - 22, aBa - 22)) __fx.playerList.display(ah.a23);
			else {
				if (fa - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fY - bf.gap);
				fY = aCD(fa);
				0 <= fY ? (aBl = bi.eY, aBm = !0, aBn = aBo = fY, bM.a3X() && (fY = aA6(-1, aBo, aBT), aBk !== (fY = fY === aBT ? -1 : fY)) && (aBk = fY, aBu(), bi.dq = !0)) : (aBp && (aBp = !1, aBu(), bi.dq = !0), u.v(10, 0, new aCE({
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

	function aCD(fa) {
		return (fa -= bf.gap + aBa) < 0 ? Math.floor(fa / aBb) - 1 : fa < (aBT - 1) * aBb ? Math.floor(fa / aBb) : fa < a9K - aBa ? aBT - 1 : (fa -= a9K - aBa, aBT + Math.floor(fa / aBb))
	}

	function a0K(fY, fa) {
		return fY >= bf.gap && fY < bf.gap + aBP && fa >= bf.gap && fa < bf.gap + a9K
	}
	this.a2u = function(fY, fa) {
		var eZ, aCC;
		if (__fx.utils.isPointInRectangle(fY, fa, bf.gap + 12, bf.gap + 12, aBa - 22, aBa - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fY, fa, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fY - bf.gap)) return aCC = aCD(fa), fY = a0K(fY, fa), fa = !(!(aCC < 0 && fY) || bM.a3X()), aBm ? (eZ = position, (position = aA6(0, position += aBn - aCC, aE.fO - aBT)) !== eZ ? (aBp = fa,
			aCC = aA6(-1, aBn = aCC, aBT), aBk = aCC = aCC !== aBT && fY ? aCC : -1, aBu(), bi.dq = !0) : aBp !== fa && (aBp = fa, aBu(), bi.dq = !0), !0) : (aCC = (aCC = aA6(-1, aCC, aBT)) === aBT || !fY || bM.a3X() ? -1 : aCC, (aBk !==
			aCC || aBp !== fa) && (aBk = aCC, aBp = fa, aBu(), bi.dq = !0))
	}, this.a3J = function(fY, fa) {
		if (!aBm) return !1;
		aBm = !1;
		var aCC = aCD(fa);
		var isEmptySpace = false;
		return bM.a3X() && -1 !== aBk && (aBk = -1, aBu(), bi.dq = !0), bi.eY - aBl < 350 && aBo === aCC && -1 !== (aCC = (aCC = aA6(-1, aCC, aBT)) !== aBT && a0K(fY, fa) ? aCC : -1) && (fY = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aCC + position] === undefined, __fx.leaderboardFilter.rivalsData[aCC + position]?.representativeId ?? aE.fB) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mN[__fx.leaderboardFilter.filteredLeaderboard[aCC + position] ?? (isEmptySpace = true, kX[aE.fB])]) : mN[aCC + position]),
			aCC === aBT - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kX[aE.fB]) >=
			position + aBT - 1 && (fY = aE.fB), !isEmptySpace && aE.iL && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fY, ah.a23, aE.l6), 0 === ah.nM[fY] || isEmptySpace || aE.hp && !aE.l6 && !aE.ha &&
			fY !== aE.fB || aI.ni(fY, 800, !1, 0)), !0
	}, this.a2x = function(fY, fa, deltaY) {
		var aCI;
		return !(aBm || aE.nq || (aCI = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a0K(fY, fa)) || (fY = (fY = aA6(-1, aCD(fa), aBT)) === aBT || bM.a3X() ? -1 : fY, 0 < deltaY ? position < aE.fO - aBT && (position += Math.min(aE.fO - aBT -
			position, aCI), aBk = fY, aBu(), bi.dq = !0) : 0 < position && (position -= Math.min(position, aCI), aBk = fY, aBu(), bi.dq = !0), 0))
	}, this.vv = function() {
		vw.drawImage(aBU, bf.gap, bf.gap)
	}
}

function cQ() {
	var canvas, zW, fY, fa, aB1, aCJ, gap, aCK, fontSize, aCL, aCM, aCN, aCO, aCP, aCQ, aCR, aCS, aCT;

	function aCX() {
		zW.clearRect(0, 0, aX.j, aX.k), zW.fillStyle = bE.oK, zW.fillRect(0, 0, aX.j, aX.k), zW.fillStyle = bE.oi, f5 = 0 < aCR ? aCR : aCO[4] / 1e4, zW.fillRect(0, aX.k - aB1 - 1, Math.floor(f5 * aX.j), aB1), zW.fillStyle = bE.oN, zW.fillRect(0, 0,
			aX.j, 1), zW.fillRect(0, 0, 1, aX.k), zW.fillRect(aX.j - 1, 0, 1, aX.k), zW.fillRect(0, aX.k - 1, aX.j, 1), zW.fillRect(0, aX.k - aB1 - 1, aX.j, 1);
		for (var f5, aCZ, eZ = 0, aC = 0; aC < aCN.length; aC++) aCP[aC] ? (bD.rK.textAlign(zW, 0), aCZ = Math.floor((aCJ - aB1 + 2 * aCK) * (aC - eZ + 1) / (aCN.length + 1) - .7 * aCK), zW.fillText(aCN[aC], gap, aCZ), bD.rK.textAlign(zW, 2), 5 ===
			aC && 0 !== ah.nM[aE.fB] && ah.hT[aE.fB] >= af.kS(aE.fB) ? (zW.fillStyle = bE.pK, zW.fillText(aCV(aC), aX.j - gap, aCZ), zW.fillStyle = bE.oN) : zW.fillText(aCV(aC), aX.j - gap, aCZ)) : eZ++
	}

	function aCV(aC) {
		return aC < 3 ? aCO[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.sJ.a5S(aCO[aC] / 100, 2) : aC < 7 ? bD.sJ.a0e(aCO[aC]) : aC === 7 ? aX.aCa(aCO[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hF, aE.fB) : __fx.utils.getDensity(aE.fB)
	}

	function aCU() {
		ah.hF[aE.fB] !== aCO[6] && (aCO[6] = ah.hF[aE.fB], aCL++)
	}
	this.di = function() {
		aCR = aCS = 0, (aCM = new Array(8))[0] = L(118), aCM[1] = aE.l6 ? L(119) : L(120), aCM[2] = L(121), aCM[3] = L(122), aCM[4] = L(123), aCM[5] = L(124, 0, "Interest"), aCM[6] = L(125), aCM[7] = L(126),
			aCM.push("Max Troops", "Density"), // add aCM
			(aCN = new Array(aCM.length)).fill(""), (aCO = new Array(aCM.length))[0] = aE.l6 ? 0 : aE.km, aCO[1] = aE.l6 ? am.lI : aE.l8, aCO[2] = aE.a1P, aCO[3] = 0, aCO[4] = bO.fs(1e4 * ah.hF[0], Math.max(aE.kW, 1)), aCO[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.fs(700 * aE.data.iIncomeValue, 64) : bO.fs(700 * aE.data.iIncomeData[aE.fB], 64), aCO[6] = 0, aCU(), aCO[7] = 0, aCQ = aCV(6), (aCP = new Array(aCM.length)).fill(!0), aCT = 0, aCT =
			aE.l6 ? (aCP[0] = !1, aCP[2] = !1, aCP[3] = !1, 3) : (aCP[3] = !1, 1), aCL = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ia() ? .1646 : .126) * 1.25 * i.ib), this.k = Math.floor(1.18 * this.j), aB1 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aCK = .04 * this.j, aCJ = this.k, this.k -= Math.floor(aCT * (this.k -
			2 * aB1) / aCM.length), fontSize = Math.floor(.7 * (aCJ - aB1) / aCM.length);
		var a74 = bD.rK.t8(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a74, j) {
				for (var aC = 0; aC < aCN.length; aC++) aCN[aC] = bD.zW.a4S(aCM[aC], a74, j)
			}((zW = canvas.getContext("2d", {
				alpha: !0
			})).font = a74, .575 * this.j), bD.rK.textBaseline(zW, 1), zW.lineWidth = 1, this.a5h(), this.a9j(), aV.a9j(), aCX()
	}, this.a9j = function() {
		fY = i.j - this.j - bf.gap
	}, this.aCY = function() {
		fa = bf.gap
	}, this.a5h = function() {
		fa = bf.gap + (aV.a95() && 0 !== ah.nM[aE.fB] && !aE.hp ? aV.k + bf.gap : 0)
	}, this.n8 = function(bx) {
		(bx || 100 <= aCL) && (aCL = 0, aCX())
	}, this.a6Q = function() {
		return aCO[7]
	}, this.aCa = function(value) {
		var lh = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lh) / 1e3);
		return value < 10 ? lh + ":0" + value : lh + ":" + value
	}, this.ed = function() {
		var aCl, per;
		aCP[0] && aE.a1Q - aE.a1P !== aCO[0] && (aCO[0] = aE.a1Q - aE.a1P, aCL++), am.lI - aCO[0] !== aCO[1] && (aCO[1] = am.lI - aCO[0], aCL++), this.mz(), (aCl = af.aCm(aE.fB)) !== aCO[5] && (aCO[5] = aCl, aCL++), aCU(), aCO[7] += bi.aCn, aCl =
			aCV(7), aCQ !== aCl && (aCQ = aCl, aCL += 100), aCl = aE.iL ? bk.lJ() : ah.hF[mN[0]], per = bO.fs(1e4 * aCl, Math.max(aE.kW, 1)), aCO[3] = aCl, aCO[4] !== per && (aCL++, aCO[4] = per), 8 === aE.l4 && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gn.hd(aC)) return bU.a0z.a1M(), 1;
				return
			}() || aCO[3] < aE.kW || ! function() {
				for (var aC = am.lI - 1; 0 <= aC; aC--)
					if (0 < ah.gt[am.lN[aC]].length) return;
				return 1
			}() || bQ.lb.aCk().length || aE.iL && bk.lJ(1) < aE.kW || bU.a0z.a1M()
	}, this.mz = function() {
		aCP[2] && aE.a1P !== aCO[2] && (aCO[2] = aE.a1P, aCL += 2 === aE.a1N ? 100 : 1)
	}, this.aCh = function() {
		return aCO[3] === aE.kW
	}, this.aCo = function(aC) {
		var tz, aCp, eZ;
		return 2 !== aE.a1N && (aC % 2 == 1 && (aW.n8(1, 1), bi.dq = !0), aC === aE.a5q ? (aCR = 0, aCX(), !1) : (-1 !== aC || 0 !== aCS) && (aCp = aCR, aCR = aE.ha ? aC / aE.a5q : (eZ = performance.now(), 0 <= aC && (tz = eZ - 392 * aC, aCS =
			0 === aC || tz < aCS ? tz : aCS), 1 < (aCR = (eZ - aCS) / (392 * aE.a5q)) ? 1 : aCR), aCX(), aCR !== aCp))
	}, this.vv = function() {
		vw.drawImage(canvas, fY, fa)
	}
}

function cR() {
	var iD, aCq, j, k, a9p, aCr, aCs, a96, canvas, nZ, aCt;

	function zS() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.di = function() {
		aCt = iD = !1, a9p = .61, aCr = .07, aCs = .09, nZ = a96 = k = 0
	}, this.resize = function() {
		var zW, nn, ei, aCy, aCz, a79;
		iD && (j = aCu(j = a1.a2.ia() ? Math.floor(.69 * i.ib) : Math.floor(.5 * i.ib), a7f(i.j - 2 * bf.gap, 10)), j = aCu(j, Math.floor(3.57 * a7f(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, zW = canvas.getContext("2d", {
				alpha: !0
			}), nn = Math.floor(1 + k / 40), zW.clearRect(0, 0, j, k), zW.fillStyle = bE.oK, zW.fillRect(nn, nn, j - 2 * nn, k - 2 * nn), zW.lineJoin = "bevel", zW.lineWidth = 2 * nn, zW.strokeStyle = bE.oN, zW.strokeRect(nn, nn, j - 2 * nn,
				k - 2 * nn), zW.imageSmoothingEnabled = !1, ei = ac.get(aCq), aCy = ei.width, a79 = (1 === aCq ? .85 : 21 === aCq ? .666 : .9) * a9p * k / (aCz = ei.height), zW.setTransform(a79, 0, 0, a79, Math.floor((j - a79 * aCy) / 2),
				Math.floor((k - a79 * aCz) / 2)), zW.drawImage(ei, 0, 0), zW.setTransform(1, 0, 0, 1, Math.floor(j - aCs * k - aCr * k - nn), Math.floor(nn + aCr * k)),
			function(zW, fR) {
				zW.lineWidth = Math.floor(1 + k / 80), zW.strokeStyle = bE.oN, zW.beginPath(), zW.moveTo(0, 0), zW.lineTo(fR, fR), zW.moveTo(0, fR), zW.lineTo(fR, 0), zW.stroke()
			}(zW, Math.floor(aCs * k)), zW.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ft, aCw, a9b, aCx) {
		iD || aCx && aCt || (aCq = a9b ? 21 : ft ? 1 : 2, iD = aCt = !0, this.resize(), aM.sa(), aS.a9W(), nZ = bi.eY, a96 = aCw ? 1 : 0)
	}, this.ed = function() {
		!iD || 1 <= a96 || (a96 = 1 < (a96 += 5e-4 * (bi.eY - nZ)) ? 1 : a96, nZ = bi.eY, bi.dq = !0)
	}, this.he = function(fY, fa) {
		return !(!iD || a96 <= 0 || (fY -= Math.floor((i.j - j) / 2), fa -= zS(), fY < 0) || fa < 0 || j < fY || k < fa || (j - k / 3 < fY && fa < k / 3 && (iD = !1, bi.dq = !0), 0))
	}, this.vv = function() {
		!iD || a96 <= 0 || (vw.globalAlpha = a96, vw.drawImage(canvas, Math.floor((i.j - j) / 2), zS()), vw.globalAlpha = 1)
	}
}

function dS() {
	var aD1, aD2 = new Uint8Array(5),
		aD3 = new Uint8Array(5);
	this.aD4 = new aD5, this.di = function() {
		for (var ft = bm.eV.data[119].value, aC = 0; aC < aD2.length; aC++) aD2[aC] = (ft >> 2 * aC) % 4
	}, this.a62 = function() {
		aD1 = [L(127), "", L(128, [ba.aD6[28]]), L(129, [ba.aD6[26]]), L(130, [ba.aD6[0]])], this.aD4.di()
	}, this.ed = function() {
		this.aD4.ed()
	}, this.a6n = function(id) {
		1 < id && bM.rm() || ! function(eG) {
			if (3 === aD2[eG] || 1 === aD3[eG]) return;
			if (aD3[eG] = 1, !(Math.random() < .6)) {
				aD2[eG]++;
				for (var ft = 0, aC = 0; aC < aD2.length; aC++) ft += aD2[aC] << 2 * aC;
				bm.po.pp(119, ft)
			}
			return 1
		}(id) || aO.a7k(aD1[id])
	}
}

function aD5() {
	var aD8;
	this.di = function() {
		aD8 = !1
	}, this.ed = function() {
		var gz;
		if (function() {
				if (!aD8) {
					if (bi.kj() % 30 != 9) return;
					if (!bD.gn.mJ(90)) return;
					aD8 = !0
				}
				return 1
			}() && (! function() {
				var rC = aO.a86(956);
				if (rC) {
					if (bD.gn.lk(rC.player)) return 1;
					aO.a85(956, 0)
				}
				return
			}() && (-1 === (gz = (aE.iL ? function() {
				var id = bk.lL(),
					fR = am.lI;
				if (bj.l9[id])
					for (var a1B = am.lN, fP = bj.fP, aC = 0; aC < fR; aC++) {
						var gz = a1B[aC];
						if (fP[gz] !== id) return gz
					} else if (1 < fR) return mN[fR - 1];
				return -1
			} : function() {
				for (var aDG = am.lI, lg = am.lN, aDH = kX, aC = 0; aC < aDG; aC++) {
					var gz = lg[aC];
					if (0 !== aDH[gz]) return gz
				}
				return -1
			})()) ? ! function() {
				var rC = aO.a86(957);
				if (rC && rC.a7b) {
					if (ad.fI(rC.a7b.fD << 2)) return 1;
					aO.a85(957, 0)
				}
				return
			}() : (aO.zp(0, L(131, [ah.zq[gz]]), 956, gz, bE.oN, bE.oK, -1, !0), 0)))) {
			var fR = ap.jQ.lw;
			if (0 !== fR)
				for (var eV = ap.jQ.eV, aC = 0; aC < fR; aC++) {
					var fD = eV[aC];
					if (ad.fI(fD << 2)) return void aO.zp(0, L(132, [bP.fZ(fD), bP.fb(fD)]), 957, 0, bE.oN, bE.oK, -1, !0, void 0, {
						fk: 1,
						fD: fD
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
			aDL = bD.rK.rT(bf.tA),
			iN = bD.rK.rT(Math.max(bD.rK.sc(.012), 8));
		try {
			aDK.sheet.insertRule(a9x + "{width:" + iN + ";height:" + iN + ";}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-thumb{background-color:white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x +
				"-track{background:" + bE.oJ + ";}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-track:horizontal{border-top:" + aDL + " solid white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x +
				"-track:vertical{border-left:" + aDL + " solid white;}", aDK.sheet.cssRules.length), aDK.sheet.insertRule(a9x + "-button{display:none;}", aDK.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aDK.sheet.cssRules.length - 1; 0 <= aC; aC--) aDK.sheet.deleteRule(0)
		}
	}
}

function dR() {
	this.aDM = !1, this.oD = !1, this.a5l = !1, this.aDN = [0, 0, 0, 0], this.render = function() {
		var nn, no, o0, o1;
		this.a5l = this.a5l || this.oD, (this.oD || this.aDM && this.a5l) && (nn = bd.aDO[0], no = bd.aDO[1], o0 = bd.aDO[2], o1 = bd.aDO[3], nn = nn < this.aDN[0] ? this.aDN[0] : nn, no = no < this.aDN[1] ? this.aDN[1] : no, o0 = o0 > this.aDN[
				2] ? this.aDN[2] : o0, o1 = o1 > this.aDN[3] ? this.aDN[3] : o1, this.oD = !1, this.aDM = !1, nn === this.aDN[0] && no === this.aDN[1] && o0 === this.aDN[2] && o1 === this.aDN[3] ? this.a5m() : nn <= o0 && no <= o1 && a64
			.putImageData(a65, 0, 0, nn, no, o0 - nn + 1, o1 - no + 1))
	}, this.a5m = function() {
		this.a5l && this.aDN[2] >= this.aDN[0] && this.aDN[3] >= this.aDN[1] && a64.putImageData(a65, 0, 0, this.aDN[0], this.aDN[1], this.aDN[2] - this.aDN[0] + 1, this.aDN[3] - this.aDN[1] + 1), this.a5l = !1
	}, this.a1Z = function() {
		this.aDN[2] >= this.aDN[0] && this.aDN[3] >= this.aDN[1] && a64.putImageData(a65, 0, 0, this.aDN[0], this.aDN[1], this.aDN[2] - this.aDN[0] + 1, this.aDN[3] - this.aDN[1] + 1), this.a5l = !1
	}, this.di = function() {
		var fY, fa;
		this.aDM = !1, this.oD = !1, this.a5l = !1, this.aDN[0] = bV.fc, this.aDN[1] = bV.fd, this.aDN[2] = this.aDN[3] = 0;
		loop: for (fY = 1; fY < bV.fc - 1; fY++)
			for (fa = bV.fd - 2; 1 < fa; fa--)
				if (1 === aDP[ad.yz(fY, fa) + 2]) {
					this.aDN[0] = fY;
					break loop
				} loop: for (fa = 1; fa < bV.fd - 1; fa++)
			for (fY = bV.fc - 2; 1 < fY; fY--)
				if (1 === aDP[ad.yz(fY, fa) + 2]) {
					this.aDN[1] = fa;
					break loop
				} loop: for (fY = bV.fc - 2; 0 < fY; fY--)
			for (fa = bV.fd - 2; 1 < fa; fa--)
				if (1 === aDP[ad.yz(fY, fa) + 2]) {
					this.aDN[2] = fY;
					break loop
				} loop: for (fa = bV.fd - 2; 0 < fa; fa--)
			for (fY = bV.fc - 2; 1 < fY; fY--)
				if (1 === aDP[ad.yz(fY, fa) + 2]) {
					this.aDN[3] = fa;
					break loop
				}
	}
}

function L(value, aDQ, wU, aDR) {
	var r1 = "number" == typeof value ? bA.aDS[value] : value;
	if (wU && bA.aDT() && (r1 = wU), !aDQ) return aDR ? r1.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : r1;
	for (var fR = aDQ.length, aC = 0; aC < fR; aC++)
		for (var fk = 0; fk < 3; fk++) r1 = r1.replace("{" + (10 * fk + aC) + "}", aDQ[aC]);
	return r1
}

function c5() {
	this.data = new aDU;
	var aDV = (new aDW).L84,
		aDY = (this.aDS = aDV, !(this.aDX = "en"));
	this.di = function() {
		var r1, h;
		aDY = !1, ("en" === (r1 = bm.eV.data[12].value).split("-")[0].toLowerCase() ? (bA.aDS = aDV, bA.aDX = r1, 1) : bm.eV.data[12].value === bm.eV.data[145].value && 0 < bm.eV.data[146].value && (r1 = bm.eV.data[146].value, (h = bm.rb.wg(r1, !
			1)).length === r1) && !!bD.rS.a43(h) && function(h) {
			for (var fR = h.length, k = 0; k < fR; k++) h[k] = h[k].replace("&#39;", "'");
			var aDe = bm.rb.wg(fR, !0);
			if (fR !== aDe.length) return !1;
			if (!bD.rS.a43(aDe)) return !1;
			for (var lh = aDV.length, aAs = new Array(lh), aDf = lh === fR, gu = Math.min(fR, lh), aC = 0; aC < lh; aC++)
				if (aAs[aC] = aDV[aC], aC < fR && aDe[aC] === aAs[aC]) aAs[aC] = h[aC];
				else {
					aDf = !1;
					for (var fl = 0; fl < gu; fl++)
						if (aDe[fl] === aAs[aC]) {
							aAs[aC] = h[fl];
							break
						}
				} return bA.aDS = aAs, bA.aDX = bm.eV.data[12].value, aDf
		}(h)) || (aDY = !0)
	}, this.dk = function() {
		bj.dj(), aF.dj(), bh.dj(), bg.dj(), aP.di(), br = new e6
	}, this.aDT = function() {
		return this.aDS === aDV || !aDV.length
	}, this.aDg = function() {
		var aDh;
		return !!aDY && (aDY = !1, 0 !== aDV.length) && (aDh = bm.eV.data[12].value, b1.ef.aDi(0, aDh.slice(0, 20)), !0)
	}, this.aDj = function(h) {
		h.length !== aDV.length ? 8 === u.tb && u.a2b().aDk(30, 0, 1) : (this.aDS = h, this.aDX = bm.eV.data[12].value, bm.po.pp(145, this.aDX), bm.po.pp(146, h.length), bm.rb.wm(h, !1), bm.rb.wm(aDV, !0), 8 === u.tb ? u.a2b().aDk(30) : 0 === ab
			.a2X() && 5 === u.tb && u.z.aDl())
	}, this.aDm = function() {
		var wp, h = navigator.languages;
		return h && h.length ? (wp = Math.max(bA.data.aDn(h[0]), 0), 1 === h.length ? [wp, wp] : [wp, Math.max(bA.data.aDn(h[1]), 0)]) : [0, 0]
	}
}

function aDU() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDo = function() {
		for (var aDp = [], h = this.h, fR = h.length, aC = 0; aC < fR; aC++) aDp.push(h[aC]);
		var aDq = bm.eV.data[12].wU;
		for (aC = 0; aC < fR; aC++)
			if (aDp[aC] === aDq) {
				aDp.splice(aC, 1), fR--;
				break
			} aDp.sort(), fR++, aDp.unshift(aDq);
		try {
			if ("undefined" == typeof Intl) return aDp;
			for (aC = 0; aC < fR; aC++) {
				var r1 = new Intl.DisplayNames([aDp[aC]], {
					type: "language"
				}).of(aDp[aC]);
				r1 !== aDp[aC] && (aDp[aC] = aDp[aC] + ": " + r1)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDp
	}, this.aDs = function(aDt) {
		for (var r1 = bm.eV.data[12].value, fR = aDt.length, aC = 0; aC < fR; aC++)
			if (r1 === aDt[aC].split(":")[0]) return aC;
		return 0
	}, this.aDn = function(aDu) {
		if (aDu && !(aDu.length < 2)) {
			aDu = aDu.split("-")[0].toLowerCase();
			for (var h = this.h, fR = h.length, aC = 0; aC < fR; aC++)
				if (aDu === h[aC]) return aC
		}
		return -1
	}
}

function aDW() {
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

function dn() {
	var fY, fa, k, uY, aDv, aDw, aDx, aDy, aDz, j, a4g, aE0;
	this.iD = !1, this.di = function(r1, aE1) {
		if (1 === a1.id && 13 <= a1.e1 && a1.e1 < 18) return aE1 ? void(a4g = r1) : a4g !== r1 ? void 0 : void a1.we.saveString(200, r1);
		aE1 && (a4g = r1, (aE0 = document.createElement("a")).appendChild(document.createTextNode(a4g)), this.iD = !0, aE0.title = a4g, aE0.target = "_blank", aE0.href = a4g, aE0.style.textAlign = "center", aE0.style.color = bE.oN, aE0.style
			.position = "absolute", aE0.style.padding = "0px", aE0.style.margin = "0px", this.resize(), document.body.appendChild(aE0), bi.dq = !0)
	}, this.sa = function() {
		return !(!this.iD || (u.removeChild(document.body, aE0), this.iD = !1))
	}, this.he = function(ik, il) {
		return !!this.iD && ((ik < fY || il < fa || fY + j < ik || fa + k < il || fY + j - uY < ik && il < fa + uY) && (bi.dq = !0, this.iD = !1, u.removeChild(document.body, aE0)), !0)
	}, this.resize = function() {
		var a74, aE2;
		this.iD && (aDy = Math.floor(.8 * (a1.a2.ia() ? i.j > i.k ? .6 : .55 : .4) * i.ib), uY = Math.floor(.15 * aDy), aDv = Math.floor(.35 * uY), aDw = Math.floor(.5 * uY), aDx = Math.floor(2.5 * aDw), k = uY + aDv + 3 * aDw, a74 = bD.rK.t8(1,
			aDv / i.l), aDz = Math.floor(i.l * aR.measureText(a4g, a74)), aE2 = j = (aDy < aDz ? aDz : aDy) + 2 * aDx, j = Math.min(j, i.j - 2 * (a1.a2.ia() ? 2 : 1) * bf.gap), a74 = bD.rK.t8(1, j / aE2 * aDv / i.l), aDz = Math.floor(i
			.l * aR.measureText(a4g, a74)), fY = Math.floor((i.j - j) / 2), fa = Math.floor((i.k - k) / 2), aE0.style.font = a74, aE0.style.top = Math.floor((fa + 1.4 * aDw + uY) / i.l) + "px", aE0.style.left = Math.floor((fY + (j -
			aDz) / 2) / i.l) + "px")
	}, this.vv = function() {
		this.iD && (vw.fillStyle = bE.oK, vw.fillRect(fY, fa + uY, j, k - uY), vw.fillStyle = bE.pX, vw.fillRect(fY, fa, j, uY), vw.fillStyle = bE.oN, vw.lineWidth = bf.a0L, vw.strokeStyle = bE.oN, vw.strokeRect(fY, fa, j, k), vw.fillRect(fY,
			fa + uY, j, bf.a0L), vw.font = bD.rK.t8(1, .48 * uY), bD.rK.textAlign(vw, 1), bD.rK.textBaseline(vw, 1), vw.fillText(L(133), Math.floor(fY + (j - .5 * uY) / 2), Math.floor(fa + .55 * uY)), aN.a7G(Math.floor(fY + j - .8 * uY),
			Math.floor(fa + .25 * uY), Math.floor(.5 * uY)), vw.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dm() {
	var gap, aCM, fY = [0, 0, 0, 0, 0],
		fa = [0, 0, 0, 0, 0],
		nz = [1, 1, 1, 1, 1],
		ft = [!0, !0, !0, !1, !1],
		ei = (this.gE = [!0, !0, !0, !1, !1], null);
	this.aE3 = function(a4E, aE4) {
		ei = a4E, ft = aE4, aCM = [bN.aE5, bN.a2S, bN.aE6, bN.aE6, bN.aE7], this.di()
	}, this.di = function() {
		if (ac.u3()) {
			var aC, th = Math.floor((a1.a2.ia() ? .261 : .195) * i.ib),
				ti = Math.floor(.9 * th),
				a9p = Math.floor(.17 * ti);
			if (gap = a1.a2.ia() ? 2 * bf.gap : bf.gap, nz[0] = th / ei[0].width, nz[1] = ti / ei[1].width, nz[2] = a9p / ei[2].height, nz[3] = a9p / ei[3].height, nz[4] = a9p / ei[4].height, nz[2] *= 1.7, nz[3] *= 1.07, fY[0] = gap, fY[1] = gap,
				fY[2] = gap, fY[3] = gap, fY[4] = Math.floor(2 * gap + nz[3] * ei[3].width), fa[0] = gap, fa[1] = fa[0] + gap + nz[0] * ei[0].height, fa[2] = fa[1] + gap + nz[1] * ei[1].height, fa[3] = fa[2] + gap + nz[2] * ei[2].height, fa[4] =
				fa[3], !ft[0])
				for (aC = 0; aC < 5; aC++) fa[aC] -= nz[0] * ei[0].height + gap;
			if (!ft[1])
				for (aC = 2; aC < 5; aC++) fa[aC] -= nz[1] * ei[1].height + gap
		}
	}, this.iD = function() {
		return !(7 === ab.a2X() && a1.a2.ia())
	}, this.he = function(ik, il) {
		if (ei && this.iD())
			for (var aC = ft.length - 1; 0 <= aC; aC--)
				if (ft[aC] && this.gE[aC] && fY[aC] < ik && fa[aC] < il && ik < fY[aC] + nz[aC] * ei[aC].width && il < fa[aC] + nz[aC] * ei[aC].height) return u.v(9, u.tb, new aE8(L(134), bD.rK.a4f(aCM[aC]))), !0;
		return !1
	}, this.vv = function() {
		if (ei && this.iD()) {
			var aC;
			for (vw.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) ft[aC] && this.gE[aC] && (vw.setTransform(nz[aC], 0, 0, nz[aC], fY[aC], fa[aC]), vw.drawImage(ei[aC], 0, 0));
			vw.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dc() {
	this.aE9 = 0, this.aEA = null, this.uj = null, this.lb = null, this.z = null, this.v6 = null, this.ug = null, this.message = null, this.aEB = null, this.sZ = null, this.aEC = null, this.aED = new aEE, this.ey = 0, this.aAj = 0, this.di =
		function() {
			this.aAj = bi.eY, this.aE9 = bJ.td.xb(bm.eV.data[105].value, 5), this.uj = new aEF, this.lb = new aEG, this.z = new aEH, this.v6 = new aEI, this.ug = new aEJ, this.message = new aEK, this.aEB = new aEL, this.sZ = new aEM, this.aEC =
				new aEN, this.z.di(), bs.di(), this.ey = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.ew()
		}, this.v0 = function() {
			this.sZ && this.sZ.v0(), this.aEA = null, this.uj = null, this.lb = null, this.z = null, this.v6 = null, this.ug = null, this.message = null, this.aEB = null, this.sZ = null, this.aEC = null, this.ey = 0, bs.v0(), a1.a2.setState(0)
		}
}

function aEF() {
	function aEk(h, tv, tw) {
		var aEl = h[tv];
		h[tv] = h[tw], h[tw] = aEl
	}
	this.uk = [
		[],
		[],
		[],
		[]
	], this.ul = [0, 0, 0, 0], this.aEO = [], this.aEP = function(aEQ, tZ, username, uq, a58, aER, elo, color, x9, aES) {
		username = this.aEU(tZ, username, uq, a58, aER, elo, color, x9, aES);
		this.uk[aEQ].push(username), bq.aE9 === tZ && (bq.aEA = username), bq.aEC.aEV(tZ) && (username.us = 1), bq.z.aEW += 29 === u.tb && bq.z.sN[0] === aEQ && 1 === bq.z.sN[2]
	}, this.aEU = function(tZ, username, uq, a58, aER, elo, color, x9, aES) {
		return {
			tZ: tZ,
			username: __fx.nameFilter.filter(username),
			uq: uq,
			a58: a58,
			aER: aER,
			elo: elo,
			color: color,
			x9: x9,
			aES: aES
		}
	}, this.aEX = function(eG, aEQ, uq, a58, aER, elo, x9, color) {
		eG = this.uk[aEQ][eG];
		eG.uq = uq, eG.a58 = a58, eG.aER = aER, eG.elo = elo, eG.x9 = x9, eG.color = color, bq.z.aEW += 29 === u.tb && bq.z.sN[0] === aEQ && 1 === bq.z.sN[2]
	}, this.aEY = function(eG, aEQ, aEZ) {
		var eG = this.uk[aEQ][eG],
			aEa = eG.username,
			aEb = "Redacted " + bI.td.a0e(eG.tZ, 2);
		eG.username = aEZ ? "[" + bD.sJ.a26(aEa) + "] " + aEb : aEb, aEa.indexOf("Redacted") < 0 && (eG.aEc = aEa), bq.sZ.aEd(eG.tZ), bq.z.aEW += 29 === u.tb && bq.z.sN[0] === aEQ && 1 === bq.z.sN[2]
	}, this.aEe = function(eG, aEf, aEg) {
		var player = this.uk[aEf][eG];
		this.aEh(eG, aEf), this.uk[aEg].push(player), bq.z.aEW += 29 === u.tb && bq.z.sN[0] === aEg && 1 === bq.z.sN[2]
	}, this.aEh = function(eG, aEf) {
		var uj = this.uk[aEf];
		this.aEO.push(uj[eG]), 1e3 < this.aEO.length && this.aEO.shift(), eG >= this.ul[aEf] ? uj[eG] = uj[uj.length - 1] : (this.ul[aEf]--, 2 === aEf ? (uj.splice(this.ul[aEf] + 1, 0, uj[uj.length - 1]), uj.splice(eG, 1)) : (uj[eG] = uj[this.ul[
			aEf]], uj[this.ul[aEf]] = uj[uj.length - 1])), uj.pop(), bq.z.aEW += 29 === u.tb && bq.z.sN[0] === aEf && 1 === bq.z.sN[2]
	}, this.aEi = function(eG, sM) {
		bq.z.aEW += 29 === u.tb && bq.z.sN[0] === sM && 1 === bq.z.sN[2];
		var uj = this.uk[sM],
			rC = uj[eG];
		if (2 === sM)
			if (eG >= this.ul[sM]) {
				bq.aEC.join(rC);
				for (var aEj = this.ul[sM], elo = rC.elo; aEj && elo > uj[aEj - 1].elo;) aEj--;
				uj[eG] = uj[this.ul[sM]], uj.splice(this.ul[sM]++, 1), uj.splice(aEj, 0, rC)
			} else uj.splice(this.ul[sM]--, 0, rC), uj.splice(eG, 1);
		else eG >= this.ul[sM] ? (bq.aEC.join(rC), aEk(uj, this.ul[sM]++, eG)) : aEk(uj, --this.ul[sM], eG)
	}, this.aEm = function(tZ) {
		for (var uk = this.uk, fR = uk.length, aC = 0; aC < fR; aC++)
			for (var uj = uk[aC], lh = uj.length, fk = 0; fk < lh; fk++)
				if (tZ === uj[fk].tZ) return uj[fk];
		return null
	}
}

function aEN() {
	var aEn = [],
		aEo = [],
		aEp = 0;

	function aEq(h, a88, aEu, aEv) {
		var fR = h.length;
		if (0 === fR) return "";
		var r1 = "@" + h[0];
		if (1 === fR) return r1 + a88 + aEv;
		for (var aC = 1; aC < fR - 1; aC++) r1 += ", @" + h[aC];
		return r1 + " and @" + h[fR - 1] + aEu + aEv
	}
	this.di = function() {
		var r1 = aEq(aEo, " is", " are", " in the lobby.");
		r1.length && bq.message.aEr({
			id: 7,
			s: r1
		}), aEn = [], aEo = [], aEp = 0
	}, this.aEV = function(aEs) {
		return bq.aE9 !== aEs && (aEs = bI.td.a0e(aEs, 5), !!bm.wK.us(aEs)) && (aEo.push(aEs), !0)
	}, this.join = function(player) {
		bq.aE9 !== player.tZ && (player = bI.td.a0e(player.tZ, 5), bm.wK.us(player)) && aEn.push(player)
	}, this.aEt = function() {
		var a88, aEu;
		++aEp < 3 || (aEp = 0, a88 = aEq(aEo, "", "", " entered the lobby!"), (a88 = (aEu = aEq(aEn, "", "", " joined a game!")).length ? a88.length ? a88 + " " + aEu : aEu : a88).length && bq.message.aEr({
			id: 7,
			s: a88
		}), aEn = [], aEo = [])
	}
}

function aEE() {
	this.dr = function(eG) {
		if ((ul = bq.uj.ul[eG]) < 2) return !1;
		var sO = bq.z.sP[eG],
			aEw = 9 === sO.aEx ? 333 : 512,
			ul = Math.min(ul, aEw);
		8 === sO.aEx && (ul -= ul % 2);
		aEw = bq.uj.uk[eG].splice(0, ul), bq.uj.ul[eG] -= ul, ul = function(aEy) {
			if (bq.aEA)
				for (var fR = aEy.length, tZ = bq.aEA.tZ, aC = 0; aC < fR; aC++)
					if (aEy[aC].tZ === tZ) return aC;
			return -1
		}(aEw);
		return -1 === ul ? (bq.uj.aEO = bq.uj.aEO.concat(aEw), 1e3 < bq.uj.aEO.length && bq.uj.aEO.splice(0, bq.uj.aEO.length - 1e3), bq.z.aEW += 29 === u.tb && bq.z.sN[0] === eG && 1 === bq.z.sN[2], !1) : (8 === sO.aEx && (sO.aF1 = (sO.aF1 + (
			ul >> 1)) % 1024, eG = ul - ul % 2, ul %= 2, aEw = aEw.slice(eG, 2 + eG)), ay.di(sO, aEw, ul), !0)
	}, this.aF2 = function(sO, aEy, aEz) {
		var fU = aE.data = new a5r,
			aF6 = (fU.spawningSeed = sO.spawningSeed, sO.aEx < 7 ? (fU.gameMode = 1, fU.numberTeams = sO.aEx + 2) : 9 === sO.aEx ? (fU.gameMode = fU.isZombieMode = 1, fU.numberTeams = 2) : (fU.gameMode = 0, fU.battleRoyaleMode = 7 === sO.aEx ?
				0 : 10 === sO.aEx ? 1 : 2), fU.selectedPlayer = aEz, fU.isContest = sO.aF3, fU.mapType = bV.aF4(sO.f7) ? 0 : 1, bV.aF5(fU, sO.f7), fU.mapSeed = sO.mapSeed, fU.humanCount = aEy.length);
		fU.selectableSpawn = 1 === fU.gameMode || aF6 < 100, fU.colorsData = new Uint32Array(aF6), fU.playerNamesData = new Array(aF6), fU.a6F = new Uint32Array(aF6);
		for (var aC = 0; aC < aF6; aC++) fU.colorsData[aC] = aEy[aC].color, fU.playerNamesData[aC] = aEy[aC].username, fU.a6F[aC] = aEy[aC].tZ;
		if (2 === fU.battleRoyaleMode)
			for (fU.elo = new Uint16Array(aF6), aC = 0; aC < aF6; aC++) fU.elo[aC] = aEy[aC].elo;
		ab.setState(8), bV.a8(sO.f7, fU.mapSeed), aE.a5w(), aE.a5u = 2
	}
}

function aEG() {
	var e7 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aF7 = [bE.ob, bE.ob, bE.oc, bE.p6, bE.p7, bE.ot, bE.pC, bE.oc, bE.pZ, bE.pN, bE.pW, bE.oE],
		aF8 = [
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
		aF9 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aFN(sQ, tZ, aFP) {
		for (var fl = sQ.length - 1; 0 <= fl; fl--) {
			var rC = sQ[fl];
			0 === rC.id && rC.tZ === tZ && (rC.s = "[Redacted Message]", aFP) && (rC.aFQ = 1)
		}
	}
	this.sV = function(aFA) {
		var aFB, a27;
		return aFA.id < 5 && (aFB = "@" + bI.td.a0e(aFA.tZ, 5)), 0 === aFA.id ? aFB + ": " + aFA.s : 1 === aFA.id ? (a27 = "@" + bI.td.a0e(aFA.target, 5), 0 === aFA.aFC ? 32768 <= aFA.value ? aFB + " voted with " + (aFA.value - 32768 + 1) +
				" gold against " + a27 + " to weaken the latter's admin position. 📉" : aFB + " voted with " + (aFA.value + 1) + " gold for " + a27 + " to strengthen the latter's admin position. 💪" : 1 === aFA.aFC ? aFB + " sent " + Math.floor(
					aFA.value / 100) + " 🧈 gold to " + a27 + "." : aFB + " voted with " + (aFA.value / 10).toFixed(1) + " points for " + a27 + " to acknowledge the latter as clan leader. ✅") : 2 === aFA.id ? 0 === aFA.aFC ? aFB +
			" was 🔇 muted for 1 Hour." : 1 === aFA.aFC ? "The username of " + aFB + " was ✂️ redacted. Duration: 1 Day" : aFB + " 👢 was kicked." : 3 === aFA.id ? aFB + br.eJ(aFA.aFC, br.eD[aFA.aFC][aFA.value]) + "@" + bI.td.a0e(aFA.target, 5) +
			br.eL(aFA.aFC, br.eD[aFA.aFC][aFA.value]) : 4 === aFA.id ? aFB + br.eJ(5, br.eD[5][aFA.aFC]) + "@" + bI.td.a0e(aFA.target, 5) + br.eL(5, br.eD[5][aFA.aFC]) : 5 === aFA.id ? aF9[aFA.aFC] : 6 === aFA.id ? "You are about to mention " +
			aFA.value + " player" + (1 === aFA.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aFA.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aFA.id ? aFA.s : void 0
	}, this.sU = function(aFA, aFD) {
		return {
			aFA: aFA,
			s: aFD,
			aFE: 0,
			fontSize: 1,
			sY: 0,
			aFF: aFA.id ? bE.p5 : bE.oN
		}
	}, this.uo = function(player, sM) {
		return (2 === sM ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.up = function(uq) {
		return aF7[uq]
	}, this.aFG = function(uq, a58) {
		return uq < 3 || 7 === uq ? aF8[uq][0] : 4 === uq ? aF8[uq][a58 < 1 ? 0 : a58 < 10 ? 1 : 2] : aF8[uq][a58 < 10 ? 0 : 1]
	}, this.aFH = function(a58) {
		return 0 === a58
	}, this.aEm = function(sM, tZ) {
		for (var uk = bq.uj.uk, uj = uk[sM], fR = uj.length, aC = 0; aC < fR; aC++)
			if (tZ === uj[aC].tZ) return uj[aC];
		for (var fl = 0; fl < uk.length; fl++)
			if (sM !== fl)
				for (fR = (uj = uk[fl]).length, aC = 0; aC < fR; aC++)
					if (tZ === uj[aC].tZ) return uj[aC];
		return null
	}, this.ur = function(rC) {
		return !!bq.aEA && rC.tZ === bq.aEA.tZ
	}, this.aFI = function(uj, aFJ, aFK) {
		var a24 = [];
		loop: for (var aC = aFJ; aC < aFK; aC++) {
			var a25 = bD.sJ.a26(uj[aC].username);
			if (a25) {
				for (var fl = a24.length - 1; 0 <= fl; fl--)
					if (a25 === a24[fl].name) {
						a24[fl].gu++;
						continue loop
					} a24.push({
					name: a25,
					gu: 1
				})
			}
		}
		if (a24.sort(function(fk, fl) {
				return fl.gu - fk.gu
			}), 0 === a24.length) return "";
		for (var r1 = a24[0].name + ": " + a24[0].gu, aC = 1; aC < a24.length; aC++) r1 += "   " + a24[aC].name + ": " + a24[aC].gu;
		return r1
	}, this.aFL = function(uq, a58, aER) {
		return 0 === e7[uq].length ? "Rank: " + (a58 + 1) : e7[uq] + " Rank: " + (a58 + 1) + (3 !== uq && aER < 100 ? "   " + e7[3] + " Rank: " + (aER + 1) : "")
	}, this.aFM = function(tZ) {
		for (var sP = bq.z.sP, aC = 0; aC < sP.length; aC++) aFN(sP[aC].sQ, tZ);
		aFN(bq.message.aFO(), tZ, 1), bq.sZ.aFM(tZ)
	}
}

function aEJ() {
	var t0 = 0,
		aFR = 0,
		aFS = 0,
		aFT = null,
		aFU = null;

	function aFX(rC, aFY, aFZ) {
		var r1 = rC.username;
		return (r1 += "   " + bq.lb.aFL(rC.uq, rC.a58, rC.aER)) + function(rC) {
			rC = rC.x9;
			if (rC < 1e3) return "   Gold: " + rC;
			if ((rC %= 1024) < 1e3) return "   Gold: " + rC + "k";
			return "   Gold: " + (rC - 999) + "M"
		}(rC) + ("   IP: " + bI.td.a0e(rC.aES, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aFZ ? aFR : aFW(rC, aFY)])
	}

	function aFW(rC, aFY) {
		return aFR = aFY || bq.uj.aEm(rC.tZ) ? 1 : 0
	}
	this.uh = 0, this.aFV = function() {
		!t0 || aFR === aFW(aFU) && aFS === aFU.x9 || (aFS = aFU.x9, aFT.show(-1, -1, aFX(aFU, 0, 1), 1, 1, aFU.color))
	}, this.ut = function(e, rC, aFY) {
		var a9w = e.getBoundingClientRect();
		this.show(a9w.left, a9w.top, rC, 0, aFY), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.ug && bq.ug.sa(1)
		}), this.uh = aFY
	}, this.show = function(fY, fa, rC, t4, aFY) {
		aFT = aFT || new sx, aFS = (aFU = rC).x9, aFT.show(fY, fa, aFX(rC, aFY), t4, 0, aFU.color), t0 = 1
	}, this.sa = function(tB) {
		this.uh = 0, aFT && aFT.sa(tB) && (t0 = 0, aFU = null)
	}
}

function aEH() {
	function aFe() {
		u.a6R(29) && (bq.z.aEW && 1 === bq.z.sN[2] && u.a6R(29).aFh(), bq.z.aEW = 0, u.a6R(29).aFi(), u.a6R(29).aFj(), bq.ug.aFV())
	}
	this.sP = new Array(4), this.sN = [0, 0, 1, 0], this.aEW = 0, this.aFb = [0, 0], this.di = function() {
		for (var aC = 0; aC < this.sP.length; aC++) this.sP[aC] = new aFc;
		this.sN[0] = bm.eV.data[158].value, __fx.lobbyReminders.setRooms(this.sP), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aEr({
				id: 7,
				s: text
			})
		})
	}, this.aFd = function() {
		aFe(), bq.aEC.di(), __fx.lobbyReminders.check()
	}, this.aEt = function() {
		bq.aEC.aEt();
		for (var aC = 0; aC < bq.z.sP.length; aC++) {
			var sO = bq.z.sP[aC];
			0 === sO.uS ? sO.aFk = 0 : (sO.aFl = Math.max(sO.aFl - sO.aFk % 2, 0), sO.aFk++)
		}
		aFe(), __fx.lobbyReminders.check()
	}, this.aFm = function(sM) {
		this.sN[0] !== sM || this.sN[2] || u.a6R(29).aFn()
	}
}

function aEL() {
	var aFo = 0,
		aFp = "",
		aFq = 0,
		aFr = 0,
		aFs = 0;

	function aFu(aFD) {
		b1.aG5.aG6(3, aFD)
	}

	function aG3(gu) {
		aFo = 1, bq.message.aEr({
			id: 6,
			value: gu
		})
	}

	function aFx(s) {
		var aG9 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aG9)
	}
	this.a1R = function(s) {
		var aFt, h, aFz;
		if (aFo) return aFo = 0, "yes" === (aFt = s.toLowerCase()) || "y" === aFt ? void aFu(aFp) : void bq.message.aEr({
			id: 5,
			aFC: 7
		});
		!(s.indexOf("@") < 0) && (aFt = aFx(s)) ? (aFp = s, h = function(aFw) {
			for (var fR = aFw.length, aG7 = [0, 0, 0, 0], aC = 0; aC < fR; aC++)
				for (var j = aFw[aC], fk = 0; fk < 4; fk++) j === "@room" + (fk + 1) && (aG7[fk] = 1);
			if ((aFr = bD.rS.a3s(aG7)) % 4 == 0) return bD.rS.a4A(bq.uj.uk);
			for (fk = 0; fk < 4; fk++) aG7[fk] = aG7[fk] ? bq.uj.uk[fk] : [];
			return bD.rS.a4A(aG7)
		}(aFt), function(aFw, aFz, s) {
			if (!aFq) return;
			for (var fR = aFz.length, aC = 0; aC < fR; aC++) 2 === aFz[aC].id && (s = s.replace(aFw[aFz[aC].eG], "@" + aFz[aC].ft));
			return aFo = 1, aFu((aFp = s).slice(0, 126) + "|"), 1
		}(aFt, aFz = function(aFw) {
			for (var aFz = [], fR = (aFs = aFq = 0, aFw.length), aC = 0; aC < fR; aC++) {
				var j = aFw[aC],
					lh = j.length;
				bD.sJ.startsWith(j, "@[") ? lh <= 9 && bD.sJ.a4i(j, "]") && aFz.push({
					id: 0,
					ft: j.substring(2, lh - 1).toUpperCase()
				}) : 6 === lh ? bD.sJ.startsWith(j, "@room") || (aFs++, aFz.push({
					id: 1,
					ft: bJ.td.xb(j.substring(1), 5)
				})) : 1 < lh && lh < 5 && 0 <= (lh = bA.data.aDn(j.substring(1))) && (aFz.push({
					id: 2,
					ft: lh,
					eG: aC
				}), aFq = 1)
			}
			return aFz
		}(aFt), s) || (0 === aFz.length ? aFr || function(aFw) {
			for (var fR = aFw.length, aC = 0; aC < fR; aC++) {
				var j = aFw[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aFt) ? aG3(h.length) : aFu(s) : aFt.length === aFs ? aFu(s) : (function(h, aFz) {
			var lh = aFz.length;
			if (0 === lh) return;
			var fR = h.length;
			loop: for (var aC = fR - 1; 0 <= aC; aC--) {
				for (var fk = 0; fk < lh; fk++)
					if (0 === aFz[fk].id) {
						if (aFz[fk].ft === bD.sJ.a26(h[aC].username)) continue loop
					} else if (1 === aFz[fk].id && aFz[fk].ft === h[aC].tZ) continue loop;
				h[aC] = h[--fR], h.pop()
			}
		}(h, aFz), aG3(h.length)))) : aFu(s)
	}, this.aGA = function(s) {
		var aFw = aFx(s);
		if (aFw)
			for (var a6 = new RegExp("^[0-9]+$"), fR = aFw.length, aC = 0; aC < fR; aC++) {
				var j = aFw[aC].substring(1),
					lh = j.length;
				1 <= lh && lh <= 3 && a6.test(j) && (lh = parseInt(j, 10), !isNaN(lh)) && 0 <= lh && lh < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lh]))
			}
		return s
	}
}

function aEK() {
	var aGB, aGC = [],
		aGD = -1,
		aGE = 0,
		aGF = 0;

	function aGK() {
		aGE = bi.eY, (3 === this.ux ? aGJ : (aGD = (aGC.length + aGD + 2 * this.ux - 1) % aGC.length, aGI))()
	}

	function aGI() {
		0 !== aGC.length && (aGF = 0, aGB && aGB.v0(), (aGB = new uu(aGK)).pp(aGD, aGC.length), aGB.show(aGC[aGD]), bq.message.resize())
	}

	function aGJ() {
		aGF = 1, aGB && aGB.v0(), (aGB = new v1(aGI)).pp(aGC.length), aGB.show(), bq.message.resize()
	}
	this.aEr = function(aFA) {
		var rC;
		2 === aFA.id && 3 === aFA.aFC ? bq.lb.aFM(aFA.tZ) : (rC = bq.lb.sU(aFA, bq.lb.sV(aFA)), (5 !== aFA.id && 6 !== aFA.id || (u.a6R(29).aGG().sX(rC), 5 === aFA.id)) && (rC = bi.eY < aGE + 2e4, aGD !== aGC.length - 1 && rC || (aGD = aGC
			.length), __fx.pingFilter.isMuted(aFA, "s") || (aGC.push(aFA), bm.eV.data[14].value || 7 === aFA.id || bs.play(), aGB && (aGF && (bm.eV.data[13].value || rC) ? aGB.pp(aGC.length) : aGI()))))
	}, this.show = function() {
		aGJ()
	}, this.sa = function() {
		aGD = aGC.length - 1, aGB && aGB.v0(), aGB = null
	}, this.resize = function() {
		aGB && aGB.resize()
	}, this.aFO = function() {
		return aGC
	}
}

function aEI() {
	var aGL = null,
		aGM = null,
		aGN = 0,
		aGO = 0,
		aGP = null;

	function aGR() {
		0 !== aGM.uq && (bq.v6.sa(), u.v(8, 29, new tc(25, {
			action: 0,
			tZ: bI.td.a0e(aGM.tZ, 5),
			ta: 0
		}, 29)))
	}

	function aGT() {
		return !bq.aEA || bq.lb.ur(aGM) ? 1 : 0
	}

	function aGS() {
		var fY = aGL.fY,
			fa = aGL.fa,
			aGc = (bq.v6.sa(), aGT());
		aGL = new v2([new x(br.eD[5][0], function() {
			aGW(5, 0)
		}, aGc), new x(br.eD[5][1], function() {
			aGW(5, 1)
		}, aGc), new x(br.eD[5][2], function() {
			aGW(5, 2)
		}, aGc), new x(br.eD[5][3], function() {
			aGW(5, 3)
		}, aGc)]), aGV(fY, fa), aGO = aGN = 2
	}

	function aGU() {
		29 === u.tb && u.a2b().aEB(bI.td.a0e(aGM.tZ, 5))
	}

	function aGW(id, value) {
		5 === id && b1.aGd.aGe({
			action: 3,
			tZ: bI.td.a0e(aGM.tZ, 5),
			value: value
		})
	}

	function aGV(fY, fa, v8) {
		aGL.show(fY, fa, v8), bq.ug.show(aGL.fY, aGL.fa, aGM, 1)
	}
	this.aGQ = function(e, rC) {
		aGN = 1, aGM = rC, aGL = new v2([new x(L(135), aGR, 0 === rC.uq ? 1 : 0), new x(L(136), aGS, aGT()), new x(L(137), aGU, 0)]), aGV((aGP = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aGP.clientY, 1)
	}, this.a3S = function(code) {
		if (29 !== u.tb) return !1;
		if (!aGM) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.sa();
			else if (bD.sJ.startsWith(code, "Numpad") || bD.sJ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aGN) this.aGQ(aGP, aGM);
				else {
					if (!aGL) return !1;
					1 === aGN ? code <= 1 ? aGR() : 2 === code ? aGS() : (aGU(), this.sa()) : (aGW(aGO, bO.iZ(code - 1, 0, br.eD[aGO].length - 1)), this.sa())
				}
		}
		return !0
	}, this.sa = function() {
		aGN = 0, aGL && aGL.sa(), aGL = null, bq.ug.sa()
	}
}

function aFc() {
	this.uS = 0, this.f7 = 0, this.mapSeed = 0, this.aEx = 0, this.aGh = 0, this.aGi = 0, this.aGj = 0, this.aF3 = 0, this.aFl = 0, this.spawningSeed = 0, this.a2f = 0, this.aF1 = 0, this.sQ = [], this.sR = 1048575, this.aFk = 0, this.aGk = [{
		f7: 0,
		mapSeed: 0,
		aEx: 0,
		eY: 100,
		aF3: 0
	}, {
		f7: 1,
		mapSeed: 0,
		aEx: 1,
		eY: 200,
		aF3: 0
	}, {
		f7: 2,
		mapSeed: 0,
		aEx: 2,
		eY: 300,
		aF3: 0
	}, {
		f7: 3,
		mapSeed: 0,
		aEx: 3,
		eY: 400,
		aF3: 0
	}, {
		f7: 0,
		mapSeed: 0,
		aEx: 9,
		eY: 500,
		aF3: 0
	}, {
		f7: 1,
		mapSeed: 0,
		aEx: 10,
		eY: 600,
		aF3: 0
	}, {
		f7: 2,
		mapSeed: 0,
		aEx: 8,
		eY: 700,
		aF3: 0
	}, {
		f7: 3,
		mapSeed: 0,
		aEx: 3,
		eY: 800,
		aF3: 0
	}]
}

function aEM() {
	var aGl = [],
		tn = [],
		aGm = [];

	function aGo(rC) {
		for (var s = rC.s, aGn = [];;) {
			var ei = function aGq(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var r1 = s.substring(position + 1, position + 6);
				if (5 !== r1.length) return aGq(s, position + 1);
				if (bD.sJ.startsWith(r1, "room")) return aGq(s, position + 1);
				var aGx = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGx.test(r1)) return aGq(s, position + 1);
				aGx = s.substring(position + 6, position + 7);
				if (1 !== aGx.length) return position;
				r1 = new RegExp("^[ :!.]+$");
				if (!r1.test(aGx)) return aGq(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ei) {
				aGn.push(aGr(s, rC));
				break
			}
			0 === ei ? aGn.push(aGs(s.substring(1, 6), rC, ei)) : (aGn.push(aGr(s.substring(0, ei), rC)), aGn.push(aGs(s.substring(ei + 1, ei + 6), rC, ei))), s = s.substring(ei + 6)
		}
		return aGn
	}

	function aGs(r1, rC, ei) {
		var aET = function(r1) {
				var tZ = bJ.td.xb(r1, 5),
					aET = bq.uj.aEm(tZ);
				if (aET) {
					for (aGl.push(aET); 75 < aGl.length;) aGl.shift();
					return aET
				}
				for (var aEO = bq.uj.aEO, aC = aEO.length - 1; 0 <= aC; aC--)
					if (aET = aEO[aC], tZ === aET.tZ) return aGl.push(aET), aET;
				for (aC = aGl.length - 1; 0 <= aC; aC--)
					if (aET = aGl[aC], tZ === aET.tZ) return aGl.push(aET), aET;
				return bq.uj.aEU(tZ, r1, 1, 999999, 999999, 0, 0, 0, 0)
			}(r1),
			r1 = (0 === ei && 0 === rC.aFA.id && rC.sY && (rC.fontSize = bq.lb.aFG(aET.uq, aET.a58), rC.aFE = bq.lb.aFH(aET.a58)), document.createElement("span"));
		return r1.textContent = function(aET, rC, ei) {
				if (aET.aGv) return aET.aGv--, ei = 2 === rC.aFA.id || (3 === rC.aFA.id || 4 === rC.aFA.id) && 0 !== ei, aET.username + (ei ? " (" + aET.aEc + ")" : "");
				if (rC.aFA.aFQ) return "Redacted " + bI.td.a0e(aET.tZ, 2);
				return aET.username
			}(aET, rC, ei), r1.style.display = "inline-block", r1.style.color = bq.lb.up(aET.uq), 11 === aET.uq && (r1.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), r1.style.cursor =
			"pointer", r1.style.margin = "0", r1.style.font = "inherit", r1.style.minWidth = r1.style.minHeight = "1em", bq.lb.ur(aET) && (r1.style.textDecoration = "underline"), aET.us && (r1.style.textDecorationLine = "underline", r1.style
				.textDecorationStyle = "dotted"), bq.lb.aFH(aET.a58) && (r1.style.fontWeight = "bold"), r1.onclick = function(e) {
				bq.v6.aGQ(e, aET)
			}, bM.rm() || (r1.onmouseover = function(e) {
				bq.ug.ut(e.target, aET)
			}), tn.push(r1), r1
	}

	function aGr(s, rC) {
		var sI = document.createElement("span");
		return sI.textContent = s, sI.style.color = rC.aFF, sI.style.margin = "0", sI.style.font = "inherit", sI
	}

	function aH2(aET, aEb, tZ) {
		tZ !== aET.tZ || aET.aEc || (aET.aEc = aET.username, aET.username = aEb)
	}
	this.v0 = function() {
		for (var aC = 0; aC < tn.length; aC++) tn[aC].onclick = tn[aC].onmouseover = null;
		aGm = tn = null
	}, this.transform = function(rC) {
		for (var qz = document.createElement("div"), aGn = aGo(rC), aC = 0; aC < aGn.length; aC++) qz.appendChild(aGn[aC]);
		0 === rC.aFA.id && (qz.vx143 = rC.aFA, aGm.push(qz)), qz.style.margin = "0.6em 0.6em", rC.sY && (qz.style.marginLeft = qz.style.marginRight = "inherit"), qz.style.font = "inherit";
		var aGp = 0 < rC.aFA.id;
		return rC.aFE && (qz.style.fontWeight = "bold"), aGp && (qz.style.paddingLeft = "0.7em"), aGp && (qz.style.fontStyle = "italic"), qz.style.fontSize = rC.fontSize.toFixed(2) + "em", qz
	}, this.aH0 = function(aH1) {
		if (aH1 && (2 === aH1.id && 1 === aH1.aFC || 3 === aH1.id && 2 === aH1.aFC)) {
			var tZ = 3 === aH1.id ? aH1.target : aH1.tZ;
			if (!bq.uj.aEm(tZ)) {
				for (var aEb = "Redacted " + bI.td.a0e(tZ, 2), aEO = bq.uj.aEO, aC = aEO.length - 1; 0 <= aC; aC--) aH2(aEO[aC], aEb, tZ);
				for (aC = aGl.length - 1; 0 <= aC; aC--) aH2(aGl[aC], aEb, tZ)
			}
		}
	}, this.aEd = function(tZ) {
		for (var aH3 = aGm, aH4 = "@" + bI.td.a0e(tZ, 5), aC = aH3.length - 1; 0 <= aC; aC--) {
			var fU = aH3[aC];
			if (fU.vx143.tZ === tZ || 0 <= fU.vx143.s.indexOf(aH4)) {
				for (; fU.firstChild;) u.removeChild(fU, fU.firstChild);
				for (var aGn = aGo(bq.lb.sU(fU.vx143, bq.lb.sV(fU.vx143))), fk = 0; fk < aGn.length; fk++) fU.appendChild(aGn[fk]);
				aH3.splice(aC, 1)
			}
		}
	}, this.aFM = function(tZ) {
		for (var aH3 = aGm, aC = aH3.length - 1; 0 <= aC; aC--) {
			var fU = aH3[aC];
			if (fU.vx143.tZ === tZ) {
				for (; fU.firstChild;) u.removeChild(fU, fU.firstChild);
				fU.vx143.s = "[Redacted Message]";
				for (var aGn = aGo(bq.lb.sU(fU.vx143, bq.lb.sV(fU.vx143))), fk = 0; fk < aGn.length; fk++) fU.appendChild(aGn[fk]);
				aH3.splice(aC, 1)
			}
		}
	}
}

function cS() {
	var aH5, aH6, aH7;

	function aHC(aC) {
		var button = aZ.rt[aC],
			fY = button.fY,
			fa = button.fa,
			j = button.j,
			k = button.k;
		vw.fillStyle = button.aHA, vw.fillRect(fY, fa, j, k), aC === aH5 && (vw.fillStyle = aH7, vw.fillRect(fY, fa, j, k)), vw.lineWidth = bf.a0L, vw.strokeStyle = aH6, vw.strokeRect(fY, fa, j, k),
			function(button) {
				var fY = button.fY,
					fa = button.fa,
					j = button.j,
					k = button.k;
				bD.rK.textAlign(vw, 1), bD.rK.textBaseline(vw, 1), vw.font = button.font, vw.fillStyle = aH6, vw.fillText(button.aFD, Math.floor(fY + j / 2), Math.floor(fa + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fa = 0, this.gap = 0, this.di = function() {
		aH5 = -1, aH6 = bE.oN, aH7 = "rgba(255,255,255,0.16)", this.rt = new Array(7), this.k = Math.floor((a1.a2.ia() ? .123 : .093) * i.ib), this.j = Math.floor((a1.a2.ia() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aH8 = Math.floor(.26 * this.k),
			aH9 = bD.rK.t8(1, aH8);
		this.rt[0] = {
			fY: 0,
			fa: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aFD: "Multiplayer",
			font: aH9,
			aHA: "rgba(22,88,22,0.8)",
			fontSize: aH8
		}, aH8 = Math.floor(.18 * this.k), aH9 = bD.rK.t8(1, aH8), this.rt[1] = {
			fY: 0,
			fa: 0,
			j: this.j - this.rt[0].j - this.gap,
			k: this.k,
			aFD: "Single Player",
			font: aH9,
			aHA: "rgba(22,88,88,0.8)",
			fontSize: aH8
		}, this.rt[2] = {
			fY: 0,
			fa: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFD: "",
			font: this.rt[1].font,
			aHA: "rgba(100,0,0,0.8)",
			fontSize: this.rt[1].fontSize
		}, this.rt[3] = {
			fY: 0,
			fa: 0,
			j: this.j,
			k: this.k,
			aFD: "Back",
			font: this.rt[0].font,
			aHA: "rgba(0,0,0,0.8)",
			fontSize: this.rt[0].fontSize
		}, this.rt[4] = {
			fY: 0,
			fa: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aFD: "The game was updated!",
			font: this.rt[1].font,
			aHA: "rgba(100,0,0,0.8)",
			fontSize: this.rt[1].fontSize
		}, this.rt[5] = {
			fY: 0,
			fa: 0,
			j: this.rt[0].j,
			k: Math.floor(.8 * this.k),
			aFD: "Reload",
			font: this.rt[0].font,
			aHA: "rgba(0,100,0,0.8)",
			fontSize: this.rt[0].fontSize
		}, this.rt[6] = {
			fY: 0,
			fa: 0,
			j: this.rt[1].j,
			k: this.rt[5].k,
			aFD: "Back",
			font: this.rt[0].font,
			aHA: "rgba(0,0,0,0.8)",
			fontSize: this.rt[0].fontSize
		}, this.aAv()
	}, this.aAv = function() {
		this.fa = Math.floor(.54 * i.k), this.rt[0].fY = Math.floor(.5 * i.j - .5 * this.j), this.rt[1].fY = this.rt[0].fY + this.rt[0].j + this.gap, this.rt[2].fY = this.rt[3].fY = this.rt[0].fY, this.rt[4].fY = this.rt[5].fY = this.rt[0].fY,
			this.rt[6].fY = this.rt[1].fY, this.rt[0].fa = Math.floor(.54 * i.k), this.rt[1].fa = this.rt[0].fa, this.rt[2].fa = Math.floor((i.k - this.rt[2].k - this.rt[3].k - this.gap) / 2), this.rt[3].fa = this.rt[2].fa + this.rt[2].k + this
			.gap, this.rt[4].fa = Math.floor((i.k - this.rt[4].k - this.rt[5].k - this.gap) / 2), this.rt[5].fa = this.rt[6].fa = this.rt[4].fa + this.rt[4].k + this.gap
	}, this.aHB = function() {
		aHC(0), aHC(1)
	}, this.aHD = function() {
		aHC(2), aHC(3)
	}, this.aHE = function() {
		aHC(4), aHC(5), aHC(6)
	}, this.a2u = function(fY, fa, n8) {
		var aC = -1;
		return 0 === ab.a2X() ? aC = this.a3O(fY, fa, 0, 2) : 3 === ab.a2X() ? aC = this.a3O(fY, fa, 3, 1) : 5 === ab.a2X() && (aC = this.a3O(fY, fa, 5, 2)), aH5 !== aC && (aH5 = aC, n8) && (bi.dq = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a3O = function(fY, fa, aHF, size) {
		for (var aC = aHF; aC < aHF + size; aC++)
			if (fY >= this.rt[aC].fY && fa >= this.rt[aC].fa && fY <= this.rt[aC].fY + this.rt[aC].j && fa <= this.rt[aC].fa + this.rt[aC].k) return aC;
		return -1
	}
}

function cT() {
	var aHH, aHI, a8X, aHJ, aHK, aHL, aHM, aHN, aHO, a8W, aHP, aHQ, aHR, aHS = 1,
		aHT = 0,
		aHU = 0;

	function aHY(aHZ) {
		aHZ ? aHR = (aHR + 1) % b1.z.aHa : (b1.z.close(aHR, 3280), aHS ? aHS = 0 : (aHU = 1 - aHU, 0 === (aHT = (aHT + 1) % 2) && (aHR = (aHR + 1) % b1.z.aHa, b1.z.close(aHR, 3280)))), aHQ = bi.eY, aa.aHX = aHU, b1.z.aHb(aHR, 4, 1) && b1.aG5.aHc(aHR)
	}

	function aHd() {
		0 === aHR ? p.a2i(3249) : aHY()
	}

	function aHi(fa, aAd, uS) {
		var nn = Math.floor((i.j - aHJ) / 2) + aHM,
			o0 = nn + Math.floor(uS * (aHJ - 2 * aHM));
		vw.lineWidth = aAd, vw.beginPath(), vw.moveTo(nn, fa), vw.lineTo(o0, fa), vw.lineTo(Math.floor(nn - aHM + uS * aHJ), fa + a8X), vw.lineTo(nn - aHM, fa + a8X), vw.closePath()
	}
	this.aHV = 1, this.aHW = 0, this.aHX = 0, this.di = function() {
		bX.turnstile.et(), ab.setState(6), aHH = 0, aHI = 1, aHN = "rgba(0,220,120,0.4)", aHO = "rgba(0,0,0,0.8)", this.resize(), bi.dq = !0, aHS = 1, aHT = 0, aHR = this.aHV - 1, aHU = 0 === this.aHW ? m.e3 ? 1 : 0 : this.aHW - 1, aHY(1)
	}, this.resize = function() {
		aHJ = Math.floor((a1.a2.ia() ? .5 : .25) * i.ib), aHK = aHJ + 12, a8X = Math.floor(.125 * aHJ), aHM = 3 * a8X, aHL = Math.floor(.225 * aHJ), aHP = Math.floor(.3 * a8X), a8W = bD.rK.t8(0, aHP)
	}, this.a2e = function(a2U) {
		a2U === aHR && aHd()
	}, this.he = function(fY, fa) {
		var nn = Math.floor((i.j - aHK) / 2),
			no = Math.floor(.5 * (i.k - bf.gap - a8X - aHL)) + a8X + bf.gap;
		return nn < fY && fY < nn + aHK && no < fa && fa < no + aHL && (this.a3Z(), aZ.a2u(fY, fa, !1), !0)
	}, this.a3Z = function() {
		b1.z.a2k(3260), u.z.a0()
	}, this.ed = function() {
		6 === ab.a2X() && (bi.eY > aHQ + 12e3 && aHd(), 100 < (aHH += .07 * aHI * (aHH < 16 ? 5 + aHH : 84 < aHH ? 105 - aHH : 17)) ? (aHH = 100, aHI = -1) : aHH < 0 && (aHH = 0, aHI = 1), aHN = "rgba(0," + Math.floor(190 - 1.9 * aHH) + "," +
			Math.floor(120 - 1.2 * aHH) + "," + (.4 + .004 * aHH) + ")", aHO = "rgba(0," + Math.floor(1.9 * aHH) + "," + Math.floor(1.2 * aHH) + "," + (.8 - .004 * aHH) + ")", bi.dq = !0)
	}, this.vv = function() {
		var fY = Math.floor((i.j - aHK) / 2),
			fa = Math.floor(.5 * (i.k - bf.gap - a8X - aHL));
		! function(title, fa, aAd, uS) {
			vw.fillStyle = aHO, aHi(fa, aAd, 1), vw.fill(), vw.fillStyle = aHN, aHi(fa, aAd, uS), vw.fill(), vw.strokeStyle = bE.oN, aHi(fa, aAd, 1), vw.stroke(),
				function(aHk, fa) {
					bD.rK.textAlign(vw, 1), bD.rK.textBaseline(vw, 1), vw.font = a8W, vw.fillStyle = bE.oN, vw.fillText(aHk, Math.floor(.5 * i.j), Math.floor(fa + .58 * a8X))
				}(title, fa)
		}(L(138), fa, 3, aHH / 100),
		function(fY, fa, j, k, aFD) {
			vw.fillStyle = bE.oI, vw.fillRect(fY, fa, j, k), vw.lineWidth = 3, vw.strokeStyle = bE.oN, vw.strokeRect(fY, fa, j, k);
			var fR = Math.floor(.3 * k);
			bD.rK.textAlign(vw, 1), bD.rK.textBaseline(vw, 1), vw.font = bD.rK.t8(0, fR), vw.fillStyle = bE.oN, vw.fillText(aFD, Math.floor(fY + j / 2), Math.floor(fa + k / 2 + .1 * fR))
		}(fY, fa + a8X + bf.gap, aHK, aHL, L(40))
	}
}

function cU() {
	var a2Q = 0;
	this.di = function() {
		aZ.di(), a2Q = 0
	}, this.setState = function(aHl) {
		a2Q = aHl
	}, this.a2X = function() {
		return a2Q
	}, this.aHm = function() {
		this.setState(8), u.y()
	}, this.a3S = function(e) {
		if (!bV.xr) return !1;
		if (!(bi.eY < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHn()) return !0;
				if ("Enter" === e.key) {
					if (0 === a2Q) return !0;
					if (7 === a2Q) return !0
				}
			}
			return !1
		}
	}, this.aHo = function() {
		bc.resize()
	}, this.aHn = function() {
		return !!bc.sa()
	}, this.he = function(fY, fa) {
		!bV.xr || bc.he(fY, fa) || 6 === a2Q && aa.he(fY, fa) || bb.he(fY, fa) || aU.he(fY, fa)
	}, this.a2u = function(fY, fa) {
		!aU.aAo && aZ.a2u(fY, fa, !0) || aU.a2u(fY, fa)
	}, this.click = function(fY, fa) {
		aU.a3J()
	}, this.a2x = function(fY, fa, deltaY) {}, this.aHp = function() {
		aZ.aAv(), bi.dq = !0
	}, this.vv = function() {
		8 !== a2Q && 10 !== a2Q && (vw.imageSmoothingEnabled = !0, this.zQ(), 0 !== a2Q && (aU.vv(), aP.vv(), this.aHq(), bb.vv()), 0 !== a2Q && 6 === a2Q && aa.vv(), bc.vv(), u.vv())
	}, this.zQ = function() {
		var aHs, aHr;
		if (__fx.makeMainMenuTransparent) vw.clearRect(0, 0, i.j, i.k);
		else bV.xr ? (aHr = i.j / bV.fc, aHs = i.k / bV.fd, vw.setTransform(aHr = aHs < aHr ? aHr : aHs, 0, 0, aHr, Math.floor((i.j - aHr * bV.fc) / 2), Math.floor((i.k - aHr * bV.fd) / 2)), vw.drawImage(bV.xt, 0, 0), vw.setTransform(1, 0, 0, 1,
			0, 0), vw.fillStyle = bE.oI) : vw.fillStyle = bE.oE, vw.fillRect(0, 0, i.j, i.k)
	}, this.aHq = function() {
		var fa = Math.floor(.3 * i.k),
			canvas = ac.aHt("territorial.io"),
			iS = (iS = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : iS,
			fY = (vw.globalAlpha = .15, vw.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - iS * canvas.width))),
			fY = Math.floor(fY / iS),
			fa = Math.floor(fa - .5 * canvas.height * iS),
			fa = Math.floor(fa / iS);
		vw.setTransform(iS, 0, 0, iS, fY, fa), vw.drawImage(canvas, fY, fa), vw.setTransform(1, 0, 0, 1, 0, 0), vw.globalAlpha = 1, vw.imageSmoothingEnabled = !0
	}
}

function cu() {
	this.aF1 = 0;
	var aHv, aHw, aHx, aHy, aHz, aI0 = this.aHu = 0;

	function aI3() {
		aHy = aHz = null, aI0 = 0
	}
	this.di = function(sO, aEy, aEz) {
		u.y(), bq.v0(), ab.setState(10), aHy = sO, aHz = aEy, aI0 = aEz, this.aF1 = sO.aF1, this.aHu = aEz, aHv = 0, aHw = bi.eY + 4500, b1.z.a2f = sO.a2f, b1.z.ez === sO.a2f ? (console.log("direct pass"), aHx = 0) : (console.log("delayed pass"),
			b1.z.close(b1.z.ez, 3247), aHx = 2, b1.z.aHb(sO.a2f, 5, 2) && b1.pm.aI1()), vw.imageSmoothingEnabled = !0, ab.zQ();
		aEy = ac.aHt("loading"), aEz = (a1.a2.ia() ? .396 : .25) * i.ib / aEy.width;
		vw.setTransform(aEz, 0, 0, aEz, Math.floor((i.j - aEz * aEy.width) / 2), Math.floor((i.k - aEz * aEy.height) / 2)), vw.imageSmoothingEnabled = !1, vw.drawImage(aEy, 0, 0), vw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.n6 = function() {
		0 < aHx && bi.eY > aHw && (aHx--, aHw += 4500, 0 === bi.aI4) && 0 === bi.kj() && b1.z.aHb(b1.z.a2f, 5, 2)
	}, this.aI5 = function() {
		return 10 === ab.a2X() && (bq.aED.aF2(aHy, aHz, aI0), aI3(), !0)
	}, this.aI6 = function() {
		10 === ab.a2X() && 2 <= ++aHv && (bq.aED.aF2(aHy, aHz, aI0), aI3())
	}
}

function cV() {
	var aI8, canvas, a1j, aI9;

	function aIF(eG, name, aIG, r1) {
		a1j[eG] = name, canvas[eG] = new Image, canvas[eG].onload = function() {
			! function(eG, aIG) {
				var a5D, a5E = null;
				7 === aIG ? a5D = bD.a3f.a5G : 8 === aIG ? (a5D = bD.a3f.a5J, a5E = .1) : 3 === aIG ? (a5D = bD.a3f.a5H, a5E = .06) : 5 === aIG ? a5D = bD.a3f.a5K : 6 === aIG ? a5D = bD.a3f.a5F : 4 === aIG && (a5D = bD.a3f.a5L);
				canvas[eG] = bD.a3f.a5C(canvas[eG], a5D, a5E)
			}(eG, aIG), aII()
		}, canvas[eG].onerror = function(e) {
			console.error("Error loading image at index", eG, "Error:", e), aII()
		}, canvas[eG].src = "data:image/png;base64," + r1
	}

	function aII() {
		aI8--, aIC()
	}

	function aIC() {
		0 === aI8 && (aI8 = -1, aIE(), bi.dq = !0, canvas[7] = aI9, canvas[8] = aI9, canvas[9] = aI9, canvas[10] = aI9, 5 === u.tb) && u.a2b().aIK.resize()
	}

	function aIE() {
		aM.a6c(), bb.aE3([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.xw = new zs, ak.xw.di(), ax.dj()
	}
	this.di = function() {
		if (void 0 === canvas) {
			aI8 = 23, canvas = new Array(aI8), a1j = new Array(aI8), (aI9 = document.createElement("canvas")).width = 1;
			for (var aC = aI8 - (aI9.height = 1); 0 <= aC; aC--) canvas[aC] = aI9;
			aIE(), aIF(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aIF(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aIF(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aIF(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aIF(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aIF(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aIF(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(8,
					"googleplay", 3,
					"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"
					), aIF(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aIF(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aIF(14, "bestPlayer", 5,
					"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"
					), aIF(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aIF(16, "apple", 3,
					"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"
					), aIF(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aIF(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aIF(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aIF(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aIF(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aIF(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eG) {
		return canvas[eG]
	}, this.aHt = function(name) {
		for (var aC = a1j.length - 1; 0 <= aC; aC--)
			if (a1j[aC] === name) return canvas[aC];
		return aI9
	}, this.u3 = function() {
		return aI8 <= 0
	}, this.aIB = function() {
		aI8 = 0, aIC()
	}
}

function cW() {
	var aIL = [
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
		aIM = [
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
	this.aIN = null, this.aIO = null, this.aIP = null, this.aIQ = null, this.aIR = null, this.aIS = null, this.aIT = null, this.aIU = null, this.aIV = null, this.aIW = null;

	function aId(k2, o5) {
		for (var aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = k2; aC < o5; aC++) aIN[aC] = bO.fs(64 * az.random(), az.value(100)) << 2, aIO[aC] = bO.fs(64 * az.random(), az.value(100)) << 2, aIP[aC] = bO.fs(64 * az.random(), az.value(100)) << 2
	}

	function aIc(k2, o5) {
		for (var colorsData = aE.data.colorsData, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = k2; aC < o5; aC++) {
			var ft = colorsData[aC];
			aIN[aC] = 4 * (ft >> 12), aIO[aC] = 4 * (ft >> 6 & 63), aIP[aC] = 4 * (63 & ft)
		}
	}

	function aIu(f5, aIw) {
		aDP[f5] = 0, aDP[f5 + 1] = 0, aDP[f5 + 2] = aIw, aDP[f5 + 3] = 0, aIx(f5)
	}

	function aIx(f5) {
		var fY;
		be.oD || (fY = ad.zR(f5), f5 = ad.zS(f5), be.oD = fY >= bd.aDO[0] && fY <= bd.aDO[2] && f5 >= bd.aDO[1] && f5 <= bd.aDO[3])
	}
	this.fT = new Int32Array(4), this.aIa = new Int32Array(8), this.dj = function() {
		var fT = this.fT,
			fT = (fT[0] = -4 * bV.fc, fT[1] = 4, fT[2] = -fT[0], fT[3] = -fT[1], this.aIa);
		fT[0] = -4 * bV.fc - 4, fT[1] = -4 * bV.fc, fT[2] = -4 * bV.fc + 4, fT[3] = -4, fT[4] = 4, fT[5] = 4 * bV.fc - 4, fT[6] = 4 * bV.fc, fT[7] = 4 * bV.fc + 4
	}, this.di = function() {
		if (this.aIN ? (this.aIN.fill(0), this.aIO.fill(0), this.aIP.fill(0), this.aIQ.fill(0), this.aIR.fill(0), this.aIS.fill(0), this.aIT.fill(0), this.aIU.fill(0), this.aIV.fill(0), this.aIW.fill(0), this.a9m.fill(0)) : (this.aIN =
				new Uint8Array(aE.fO), this.aIO = new Uint8Array(aE.fO), this.aIP = new Uint8Array(aE.fO), this.aIQ = new Uint8Array(aE.fO), this.aIR = new Uint8Array(aE.fO), this.aIS = new Uint8Array(aE.fO), this.aIT = new Uint8Array(aE.fO),
				this.aIU = new Uint8Array(aE.fO), this.aIV = new Uint8Array(aE.fO), this.aIW = new Uint8Array(aE.fO), this.a9m = new Uint8Array(aE.fO)), aE.iL)
			for (var aC2 = bj.aC2, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = aE.fO - 1; 0 <= aC; aC--) {
				var ei = aC2[aC],
					lh = bO.fs((aIM[ei][3] + 1) * az.random(), az.value(100));
				aIN[aC] = aIL[ei][0] + lh * aIM[ei][0], aIO[aC] = aIL[ei][1] + lh * aIM[ei][1], aIP[aC] = aIL[ei][2] + lh * aIM[ei][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aIc(0, aE.km), aId(aE.km, aE.fO)) : aId(0, aE.fO) : aIc(0, aE.fO);
		! function() {
			var aC, fU, aIN = ad.aIN,
				aIO = ad.aIO,
				aIP = ad.aIP;
			for (aC = aE.fO - 1; 0 <= aC; aC--) fU = bO.fs(aIN[aC] + aIO[aC] + aIP[aC], 3), aIN[aC] += aIj(fU - aIN[aC], 2), aIO[aC] += aIj(fU - aIO[aC], 2), aIP[aC] += aIj(fU - aIP[aC], 2), aIN[aC] -= aIN[aC] % 4, aIO[aC] -= aIO[aC] % 4, aIP[
				aC] -= aIP[aC] % 4
		}(),
		function() {
			for (var fR = aE.fO, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aIQ = ad.aIQ, aC = 0; aC < fR; aC++) aIN[aC] += aC >> 7, aIO[aC] += aC >> 5 & 3, aIP[aC] += aC >> 3 & 3, aIQ[aC] = 7 & aC
		}(), this.aIg(),
			function() {
				for (var fR = aE.fO, aIR = ad.aIR, aIS = ad.aIS, aIT = ad.aIT, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = 0; aC < fR; aC++) {
					var eF = aIN[aC],
						tz = aIO[aC],
						fl = aIP[aC];
					60 <= eF + tz + fl ? (aIR[aC] = Math.max(eF - 40, 3 & eF), aIS[aC] = Math.max(tz - 40, 3 & tz), aIT[aC] = Math.max(fl - 40, 3 & fl)) : (aIR[aC] = eF + 40, aIS[aC] = tz + 40, aIT[aC] = fl + 40)
				}
			}(),
			function() {
				for (var fR = aE.fO, aIU = ad.aIU, aIV = ad.aIV, aIW = ad.aIW, aIN = ad.aIN, aIO = ad.aIO, aIP = ad.aIP, aC = 0; aC < fR; aC++) {
					var eF = aIN[aC],
						tz = aIO[aC],
						fl = aIP[aC];
					688 <= eF + tz + fl ? (aIU[aC] = eF - 88, aIV[aC] = tz - 88, aIW[aC] = fl - 88) : (aIU[aC] = Math.min(eF + 88, 252 + (3 & eF)), aIV[aC] = Math.min(tz + 88, 252 + (3 & tz)), aIW[aC] = Math.min(fl + 88, 252 + (3 & fl)))
				}
			}()
	}, this.a8e = function(player) {
		var h = bR.g0;
		return h[0] = this.aIN[player], h[1] = this.aIO[player], h[2] = this.aIP[player], h
	}, this.aIg = function() {
		for (var aC = aE.fO - 1; 0 <= aC; aC--) this.a9m[aC] = this.aIN[aC] + this.aIO[aC] + this.aIP[aC] < 280 ? 0 : 1
	}, this.zR = function(f5) {
		return bO.fs(f5, 4) % bV.fc
	}, this.zS = function(f5) {
		return bO.fs(f5, 4 * bV.fc)
	}, this.yz = function(fY, fa) {
		return Math.floor(4 * (fa * bV.fc + fY))
	}, this.zF = function(f5) {
		var fT = this.fT;
		return this.aIk(f5 + fT[0]) || this.aIk(f5 + fT[1]) || this.aIk(f5 + fT[2]) || this.aIk(f5 + fT[3])
	}, this.fp = function(f5) {
		var fT = this.fT;
		return this.fW(f5 + fT[0]) || this.fW(f5 + fT[1]) || this.fW(f5 + fT[2]) || this.fW(f5 + fT[3])
	}, this.zD = function(f5, player) {
		var fT = this.fT;
		return this.aIl(f5 + fT[0], player) || this.aIl(f5 + fT[1], player) || this.aIl(f5 + fT[2], player) || this.aIl(f5 + fT[3], player)
	}, this.aIm = function(aC, aIn, aIo, aIp) {
		this.aIN[aC] = aIn >> 16, this.aIO[aC] = aIn >> 8 & 255, this.aIP[aC] = 255 & aIn, this.aIR[aC] = aIo >> 16, this.aIS[aC] = aIo >> 8 & 255, this.aIT[aC] = 255 & aIo, this.aIU[aC] = aIp >> 16, this.aIV[aC] = aIp >> 8 & 255, this.aIW[aC] =
			255 & aIp
	}, this.aIq = function(aC) {
		return [(this.aIN[aC] << 16) + (this.aIO[aC] << 8) + this.aIP[aC], (this.aIR[aC] << 16) + (this.aIS[aC] << 8) + this.aIT[aC], (this.aIU[aC] << 16) + (this.aIV[aC] << 8) + this.aIW[aC]]
	}, this.h1 = function(f5) {
		return 208 <= aDP[f5 + 3]
	}, this.zL = function(player, f5) {
		return this.h1(f5) && this.zO(player, f5)
	}, this.zO = function(player, f5) {
		return player === this.fJ(f5)
	}, this.aIr = function(f5) {
		return 208 <= aDP[f5 + 3] && aDP[f5 + 3] < 224
	}, this.jx = function(f5) {
		return 224 <= aDP[f5 + 3] && aDP[f5 + 3] < 248
	}, this.aIs = function(f5) {
		return 248 <= aDP[f5 + 3]
	}, this.zE = function(f5) {
		for (var fT = this.fT, aC = 3; 0 <= aC; aC--)
			if (this.ih(f5 + fT[aC])) return !0;
		return !1
	}, this.fM = function(f5) {
		return this.h1(f5) || this.fI(f5)
	}, this.ih = function(f5) {
		return 0 === aDP[f5 + 3] && 2 === aDP[f5 + 2]
	}, this.fI = function(f5) {
		return 0 === aDP[f5 + 3] && 1 === aDP[f5 + 2]
	}, this.y4 = function(f5) {
		return 0 === aDP[f5 + 3] && 3 === aDP[f5 + 2]
	}, this.fW = function(f5) {
		return 0 === aDP[f5 + 3] && 5 === aDP[f5 + 2]
	}, this.aIk = function(f5) {
		return 0 === aDP[f5 + 3] && 3 <= aDP[f5 + 2]
	}, this.f9 = function(f5) {
		return (aDP[f5] >> 1 << 8) + aDP[f5 + 1]
	}, this.aIt = function(f5) {
		return 1 & aDP[f5]
	}, this.aIl = function(f5, player) {
		return this.fI(f5) || this.h1(f5) && player !== this.fJ(f5)
	}, this.fJ = function(f5) {
		return ((3 & aDP[f5]) << 7) + ((3 & aDP[f5 + 1]) << 5) + ((3 & aDP[f5 + 2]) << 3) + (7 & aDP[f5 + 3])
	}, this.zM = function(f5) {
		aIu(f5, 1)
	}, this.aIv = function(f5) {
		aIu(f5, 2)
	}, this.z0 = function(f5, player) {
		aDP[f5] = this.aIN[player], aDP[f5 + 1] = this.aIO[player], aDP[f5 + 2] = this.aIP[player], aDP[f5 + 3] = 208 + this.aIQ[player], aIx(f5)
	}, this.gw = function(f5, player) {
		aDP[f5] = this.aIR[player], aDP[f5 + 1] = this.aIS[player], aDP[f5 + 2] = this.aIT[player], aDP[f5 + 3] = 224 + this.aIQ[player], aIx(f5)
	}, this.jy = function(f5, player) {
		aDP[f5] = this.aIU[player], aDP[f5 + 1] = this.aIV[player], aDP[f5 + 2] = this.aIW[player], aDP[f5 + 3] = 248 + this.aIQ[player], aIx(f5)
	}
}

function cv() {
	var aIy = 0,
		aJ0 = new Uint16Array(64);

	function ex(a6g) {
		aIy -= 2;
		for (var aC = a6g; aC < aIy; aC += 2) aJ0[aC] = aJ0[aC + 2], aJ0[aC + 1] = aJ0[aC + 3]
	}
	this.di = function() {
		aIy = 0
	}, this.ed = function() {
		var aC, jv, j4;
		if (0 !== aIy)
			if (0 === ah.nM[aE.fB]) aIy = 0;
			else if (0 === ae.gY(aE.fB)) aIy = 0;
		else
			for (aC = aIy - 2; 0 <= aC; aC -= 2)(jv = aJ0[aC]) < aE.fO && 0 === ah.nM[jv] ? ex(aC) : (j4 = aJ0[aC + 1], (jv >= aE.fO && bv.aJ2(aE.fB) || jv < aE.fO && bv.aJ3(aE.fB, jv)) && (bB.hr.hy(j4, jv), ex(aC)))
	}, this.hz = function(jv, j4) {
		! function(jv, j4) {
			for (var aC = 0; aC < aIy; aC += 2)
				if (aJ0[aC] === jv) return aJ0[aC + 1] = Math.min(aJ0[aC + 1] + j4, 1023), 1;
			return
		}(jv, j4) && 64 !== aIy && (aJ0[aIy] = jv, aJ0[aIy + 1] = j4, aIy += 2)
	}
}

function cX() {
	function aJB(player) {
		var eZ;
		bD.gn.a4o(player) && (eZ = ah.hT[player] - ah.a4t[player] + ae.aJD(player), bg.gr(player, Math.abs(eZ), eZ < 0 ? 18 : 12)), ah.hT[player] = 0, ah.a4t[player] = 0
	}

	function aJK() {
		aY.show(!1, !1, !1, !0), aX.aCY(), bU.a18.a1u()
	}

	function aJ7(player, aJJ) {
		for (var aC = aJJ.length - 1; 0 <= aC; aC--) ae.aJM(aJJ[aC], player)
	}

	function aJA(player) {
		var jK = ah.jK,
			jL = ah.jL,
			jM = ah.jM,
			jN = ah.jN,
			fc = bV.fc;
		if (ah.hF[player]) {
			ah.hF[player] = 0;
			for (var nn = jK[player], no = jM[player], fY = jL[player]; nn <= fY; fY--)
				for (var fa = jN[player]; no <= fa; fa--) {
					var gz = 4 * (fa * fc + fY);
					ad.zL(player, gz) && ad.zM(gz)
				}
		}
		jL[player] = jN[player] = 0, jK[player] = jM[player] = Math.max(fc, bV.fd)
	}
	this.dr = function(gz) {
		var player, eZ = ah.hF[gz] + ah.yv[gz];
		bQ.z.kq[gz] ? eZ && (aJ7(player = gz, ae.aJ8(player)), ag.aJ9(player), aJA(player), aG.gp(player), ae.clear(player), aJB(player), function(player) {
			ah.yv[player] = 0, ah.gt[player] = [], ah.h7[player] = [], ah.h8[player] = [], ah.fq[player] = []
		}(player)) : !eZ && ah.gt[gz].length || this.aJ6(gz)
	}, this.aJ6 = function(player) {
		! function(player) {
			bD.gn.k9(player) || (ah.a1y[player] = bl.a2D.aJI(), aE.a1P++);
			var aJJ = ae.aJ8(player);
			0 === aJJ.length ? bD.gn.a4l(player) && aJK() : (aJ7(player, aJJ), function(player, aJJ) {
				var aJO = aJJ[function(aJJ) {
					var aC, eG = 0;
					for (aC = aJJ.length - 1; 1 <= aC; aC--) ah.hF[aJJ[aC]] > ah.hF[aJJ[eG]] && (eG = aC);
					return eG
				}(aJJ)];
				9 === aE.l4 && (1 === bj.fP[player] ? az.ke(8) && b0.aJP(aJO) : aF.iA[player] && (aO.a85(765, 0), aO.zp(280, L(139, [ah.zq[aJO], ah.zq[player]]), 765, aJO, bE.oE, bE.pa, -1, !0)));
				if (bD.gn.a4l(player)) aJK(), aO.a1a(aJO, 1);
				else {
					for (var aC = aJJ.length - 1; 0 <= aC; aC--)
						if (bD.gn.a4o(aJJ[aC]) && (bg.nI[4 - bD.gn.k9(player)]++, bD.gn.a4l(aJJ[aC]))) return aO.a1a(player, 0);
					bD.gn.k9(player) || aO.a7p(0, player, aJO)
				}
			}(player, aJJ))
		}(player), ag.aJ9(player), aJA(player), aJB(player),
			function(player) {
				ah.nM[player] = 0, ah.gt[player] = null, ah.h7[player] = null, ah.h8[player] = null, ah.fq[player] = null
			}(player), aG.gp(player), ae.clear(player), bQ.aJG.aJH(player)
	}
}

function d0() {
	var input;

	function aJQ(e) {
		(e = e.target.files) && 0 < e.length && b7.aJT(e[0])
	}

	function aJX(e) {
		var ei = new Image;
		ei.onload = aJY, ei.src = e.target.result
	}

	function aJY(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aJa = bm.eV.data[162].value,
			max = Math.min(bV.aJb, aJa),
			aJa = (max = a1.id || bM.rm() ? Math.min(1400, aJa) : max) / Math.max(j, k);
		if (aJa < 1 && (j = Math.floor(aJa * j + .125), k = Math.floor(aJa * k + .125)), max < j || max < k || j < 10 || k < 10) aJa = "Invalid Image Dimensions!", a1.we ? a1.we.showToast(aJa) : alert(aJa);
		else {
			for (var max = document.createElement("canvas"), aJa = (max.width = j, max.height = k, max.getContext("2d")), aJd = document.createElement("canvas"), aJe = (aJd.width = e.width, aJd.height = e.height, aJd.getContext("2d")), e = (aJe
					.drawImage(e, 0, 0), aJe.getImageData(0, 0, aJd.width, aJd.height)), aJe = aJa.createImageData(j, k), src = e.data, aJh = aJe.data, aAN = aJd.width / j, aAO = aJd.height / k, fa = 0; fa < k; fa++)
				for (var fY = 0; fY < j; fY++) {
					var aJi = Math.floor(fY * aAN),
						aJi = 4 * (Math.floor(fa * aAO) * aJd.width + aJi),
						aJl = 4 * (fa * j + fY);
					aJh[aJl] = src[aJi], aJh[1 + aJl] = src[1 + aJi], aJh[2 + aJl] = src[2 + aJi], aJh[3 + aJl] = 255
				}
			aJa.putImageData(aJe, 0, 0), 20 === u.tb && u.a2b().aJY(max)
		}
	}
	this.di = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aJQ
	}, this.v0 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aJR = function() {
		input.click()
	}, this.aJT = function(aJU) {
		var h = aJU.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aJX, h.readAsDataURL(aJU))
	}
}

function cy() {
	this.aJm = null, this.di = function() {
		10 !== aE.l4 ? this.aJm = null : this.aJm = new Uint32Array(aE.fO)
	}, this.ed = function() {
		10 === aE.l4 && this.lb()
	}, this.lb = function() {
		for (var gz, target, aCl, aJm = this.aJm, a1B = am.lN, a4u = ah.hT, aC = am.lI - 1; 0 <= aC; aC--)(gz = a1B[aC]) >= aE.km || (target = Math.max(bO.fs(a4u[gz], 4), 2048), aCl = Math.max(af.aCm(gz), 100), aJm[gz] += bO.fs(aCl * target,
			1e4), aJm[gz] > target && (aJm[gz] = target))
	}, this.a50 = function(player, iA) {
		return iA > this.aJm[player] ? (iA = this.aJm[player], this.aJm[player] = 0) : this.aJm[player] -= iA, iA
	}
}

function d1() {
	var aJn = -1,
		aJo = null,
		aJp = -1,
		vR = 4;

	function aJr() {
		aN.a7A() ? be.render() : be.a1Z()
	}

	function aJz(ei, fU) {
		var eF = ei >> 16,
			tz = ei >> 8 & 255,
			ei = 255 & ei,
			aK0 = 255 - fU,
			aK0 = (aK0 < eF && aK0 < tz && aK0 < ei && (fU = -fU), aJn >> 7),
			aK2 = aJn >> 5 & 3,
			aK3 = aJn >> 3 & 3;
		return (Math.max(Math.min(eF + fU, 252 + aK0), aK0) << 16) + (Math.max(Math.min(tz + fU, 252 + aK2), aK2) << 8) + Math.max(Math.min(ei + fU, 252 + aK3), aK3)
	}

	function aJq() {
		return -1 !== aJn && (ad.aIm(aJn, aJo[0], aJo[1], aJo[2]), aJw(aJn), aJn = -1)
	}

	function aJw(player) {
		bi.dq = !0;
		for (var jK = ah.jK[player], jM = ah.jM[player], jL = ah.jL[player], jN = ah.jN[player], fa = jM; fa <= jN; fa++)
			for (var fY = jK; fY <= jL; fY++) {
				var f5 = ad.yz(fY, fa);
				ad.zL(player, f5) && (ad.aIs(f5) ? ad.jy(f5, player) : ad.jx(f5) ? ad.gw(f5, player) : ad.z0(f5, player))
			}
	}
	this.di = function() {
		aJo = null, aJp = aJn = -1, vR = bO.iZ(Math.floor(bm.eV.data[16].value), 0, 16)
	}, this.ed = function(bx) {
		if (bm.eV.data[15].value && 0 !== vR && (bx || !bM.rm())) {
			var bx = bP.hh(bM.hW),
				hi = bP.hj(bM.hX);
			if (bP.hk(bx, hi)) {
				bx = bP.fo(bx, hi), hi = bP.fH(bx);
				if (aJp === hi)
					if (ad.h1(hi)) {
						if (aJn === ad.fJ(hi)) return
					} else if (-1 === aJn) return;
				! function(f5) {
					ad.h1(f5) ? (f5 = ad.fJ(f5)) !== aJn && (aJq(), function(player) {
						aJn = player, aJo = ad.aIq(player);
						var aJu = function() {
							var rC = aJo,
								aJx = vR << 2,
								aJy = aJx << 1;
							return [aJz(rC[0], aJx), aJz(rC[1], aJy), aJz(rC[2], aJy)]
						}();
						ad.aIm(player, aJu[0], aJu[1], aJu[2]), aJw(player)
					}(f5), aJr()) : aJq() && aJr()
				}(aJp = hi)
			} else aJq() && aJr()
		}
	}
}

function d2() {
	var vE = 0,
		aK4 = 0,
		aK5 = 0,
		aK6 = 0,
		aJp = -1;

	function aK9(f5) {
		if (aJp === f5) return !1;
		if (-1 === (aJp = f5)) vE = 0, aO.a8I(vE, 0);
		else {
			if (ad.h1(f5)) return aK5 = ad.fJ(f5), kl = ah.hT[aK5] - ah.a4t[aK5], (4 !== vE || kl !== aK4) && (vE = 4, aK4 = kl, aO.a8I(vE, kl), !0);
			if (ad.fI(f5)) return 3 !== vE && (vE = 3, aO.a8I(vE, 0), !0);
			if (ad.fW(f5)) return 2 !== vE && (vE = 2, aO.a8I(vE, 0), !0);
			var kl = bQ.lb.a6y(bM.hW, bM.hX);
			if (-1 === kl) return 1 !== vE && (vE = 1, aO.a8I(vE, 0), !0);
			f5 = bQ.z.a7w[kl];
			if (aK5 = bQ.z.mf[kl], aK6 = bQ.z.mg[kl] >> 3, 5 === vE && f5 === aK4) return !1;
			vE = 5, aK4 = f5, aO.a8I(vE, f5)
		}
		return !0
	}
	this.di = function() {
		aK6 = aK5 = aK4 = vE = 0, aJp = -1
	}, this.ed = function(bx) {
		var hi;
		!bx && bM.rm() || (bx = bP.hh(bM.hW), hi = bP.hj(bM.hX), bP.hk(bx, hi) ? (bx = bP.fo(bx, hi), aK9(bP.fH(bx))) : aK9(-1))
	}, this.n3 = function() {
		var aKB, kl, a6w, aKA;
		if (0 !== vE && 2 !== vE)
			if (bM.rm()) {
				if (1 !== vE && 3 !== vE) {
					if (4 === vE) return void(kl = ah.hT[aK5] - ah.a4t[aK5], aK4 === kl || (aK4 = kl, aO.a8I(vE, kl)));
					(a6w = bQ.lb.nm(aK6, aK5)) < 0 ? (vE = 1, aO.a8I(vE, 0)) : (aKA = bQ.z.a7w[a6w]) !== aK4 && (aK4 = aKA, aO.a8I(vE, aKA))
				}
			} else if (1 === vE) - 1 !== (a6w = bQ.lb.a6y(bM.hW, bM.hX)) && (vE = 5, aK4 = bQ.z.a7w[a6w], aO.a8I(vE, aK4));
		else if (3 === vE) ad.h1(aJp) && (vE = 4, aKB = ad.fJ(aJp), aK4 = ah.hT[aKB] - ah.a4t[aKB], aO.a8I(vE, aK4));
		else if (4 === vE) {
			if (ad.h1(aJp)) return void(aKB = ad.fJ(aJp), kl = ah.hT[aKB] - ah.a4t[aKB], aK4 === kl || (aK4 = kl, aO.a8I(vE, kl)));
			vE = 3, aO.a8I(vE, 0)
		} else - 1 === (a6w = bQ.lb.a6y(bM.hW, bM.hX)) ? (vE = 1, aO.a8I(vE, 0)) : (aKA = bQ.z.a7w[a6w]) !== aK4 && (aK4 = aKA, aO.a8I(vE, aKA))
	}
}

function db() {
	function aKD(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aKL, h.readAsText(e))
	}

	function aKL(e) {
		var aKO;
		aE.a1N || (e = JSON.parse(e.target.result), aKO = aE.data = new a5r, aKP(e, aKO, "mapType", 0, 2), aKP(e, aKO, "mapProceduralIndex", 0, 255), aKP(e, aKO, "mapRealisticIndex", 0, 255), aKP(e, aKO, "mapSeed", 0, 16383), function(aKN, aKO, h0,
				max) {
				aKN = aKN[h0];
				aKO[h0] = aKV(aKN) ? aKN.slice(0, max) : aKO[h0]
			}(e, aKO, "mapName", 20), function(aKN, aKO, h0) {
				var aJZ;
				2 === aKO.mapType && (!aKV(aKN = aKN[h0]) || aKN.length <= 20 ? aKO.mapType = 0 : ((aJZ = new Image).onload = function() {
					bC.aKW.aKX(aJZ, 1), aJZ.onload = null, aJZ = null
				}, aJZ.src = aKN))
			}(e, aKO, "canvas"), aKP(e, aKO, "passableWater", 0, 1), aKP(e, aKO, "passableMountains", 0, 1), aKP(e, aKO, "playerCount", 1, 512), aKP(e, aKO, "humanCount", 1, 1), aKP(e, aKO, "selectedPlayer", 0, 0), aKP(e, aKO, "gameMode", 0, 1),
			aKP(e, aKO, "playerMode", 0, 0), aKP(e, aKO, "battleRoyaleMode", 0, 0), aKP(e, aKO, "numberTeams", 0, 8), aKP(e, aKO, "isZombieMode", 0, 0), aKP(e, aKO, "isContest", 0, 0), aKP(e, aKO, "isReplay", 0, 0), aKS(e, aKO, "elo", 16, 2,
				16383), aKP(e, aKO, "colorsType", 0, 1), aKP(e, aKO, "colorsPersonalized", 0, 1), aKS(e, aKO, "colorsData", 32, 512, 262143), aKP(e, aKO, "selectableColor", 0, 1), aKS(e, aKO, "teamPlayerCount", 16, 9, 512), aKP(e, aKO,
				"neutralBots", 0, 1), aKP(e, aKO, "botDifficultyType", 0, 3), aKP(e, aKO, "botDifficultyValue", 0, 15), aKS(e, aKO, "botDifficultyTeam", 8, 9, 15), aKS(e, aKO, "botDifficultyData", 8, 512, 15), aKP(e, aKO, "spawningType", 0, 2),
			aKP(e, aKO, "spawningSeed", 0, 16383), aKS(e, aKO, "spawningData", 16, 1024, 4095), aKP(e, aKO, "selectableSpawn", 0, 1), aKP(e, aKO, "playerNamesType", 0, 2),
			function(aKN, aKO, h0, size, max) {
				var a40 = aKN[h0];
				if (Array.isArray(a40)) {
					for (var a41 = new Array(size), fR = Math.min(a40.length, size), aC = 0; aC < fR; aC++) a41[aC] = aKV(a40[aC]) ? a40[aC].slice(0, max) : "";
					a41.fill("", fR), aKO[h0] = a41
				}
			}(e, aKO, "playerNamesData", 512, 20), aKP(e, aKO, "selectableName", 0, 1), aKP(e, aKO, "aIncomeType", 0, 2), aKP(e, aKO, "aIncomeValue", 0, 255), aKS(e, aKO, "aIncomeData", 8, 512, 255), aKP(e, aKO, "tIncomeType", 0, 2), aKP(e, aKO,
				"tIncomeValue", 0, 255), aKS(e, aKO, "tIncomeData", 8, 512, 255), aKP(e, aKO, "iIncomeType", 0, 2), aKP(e, aKO, "iIncomeValue", 0, 255), aKS(e, aKO, "iIncomeData", 8, 512, 255), aKP(e, aKO, "sResourcesType", 0, 2), aKP(e, aKO,
				"sResourcesValue", 0, 2047), aKS(e, aKO, "sResourcesData", 16, 512, 2047), u.y(), u.z.tT[0] = 0, u.v(19))
	}

	function aKP(aKN, aKO, h0, min, max) {
		aKN = aKN[h0];
		aKO[h0] = "number" == typeof aKN && min <= aKN && aKN <= max ? Math.floor(aKN) : aKO[h0]
	}

	function aKV(r1) {
		return "string" == typeof r1
	}

	function aKS(aKN, aKO, h0, aKY, size, max) {
		var a40 = aKN[h0];
		if (Array.isArray(a40)) {
			for (var a41 = new(8 === aKY ? Uint8Array : 16 === aKY ? Uint16Array : Uint32Array)(size), fR = Math.min(a40.length, size), aC = 0; aC < fR; aC++) a41[aC] = bO.iZ(a40[aC], 0, max);
			aKO[h0] = a41
		}
	}
	this.aKC = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aKD, input.click()
	}, this.aKE = function() {
		for (var aKH, aE0, a6P = aE.data, keys = Object.keys(a6P), aKF = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a6P[key] instanceof Uint8Array || a6P[key] instanceof Uint16Array || a6P[key] instanceof Uint32Array ? aKF[key] = Array.from(a6P[key]) : aKF[key] = a6P[key]
		}
		aKF.canvas = 2 === aKF.mapType && aKF.canvas ? aKF.canvas.toDataURL() : null, aKH = aKF, aKH = JSON.stringify(aKH, null, 2), aKH = new Blob([aKH], {
			type: "application/json"
		}), (aE0 = document.createElement("a")).href = URL.createObjectURL(aKH), aE0.download = "tt_scenario.json", aE0.click()
	}
}

function cb() {
	var aKZ, aKa, size, jv, iA, aKb;

	function aKc(player) {
		return player < aE.km ? aKZ * player : aKZ * aE.km + aKa * (player - aE.km)
	}
	this.di = function() {
		aKZ = aE.km < 16 ? 12 : 8, aKa = 4;
		var fR = aKc(aE.fO);
		size = new Uint8Array(aE.fO), jv = new Uint16Array(fR), iA = new Uint32Array(fR), aKb = new Uint8Array(fR)
	}, this.qs = function(a9G, aKd) {
		var aKe = this.hU(a9G, aKd),
			aKd = (this.hS(a9G, aKd, 0), bD.gn.gq(a9G, aKe));
		bg.gr(a9G, aKe - aKd, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aJM = function(player, aKd) {
		var aKh, aKd = function(player, aKd) {
			var aC, lh = aKc(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (jv[lh + aC] === aKd) return aC;
			return size[player]
		}(player, aKd);
		aKd !== size[player] && (aKh = iA[aKc(player) + aKd], this.gs(player, aKd), this.eh(player, aKh, aE.fO))
	}, this.k7 = function(player, aKd) {
		for (var lh = aKc(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jv[lh + aC] === aKd) return !0;
		return !1
	}, this.kQ = function(player) {
		return player < aE.km ? size[player] < aKZ : size[player] < aKa
	}, this.gY = function(player) {
		return size[player]
	}, this.gd = function(player, aC) {
		return jv[aKc(player) + aC]
	}, this.ge = function(player, aC) {
		return iA[aKc(player) + aC]
	}, this.hU = function(player, aKd) {
		for (var lh = aKc(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jv[lh + aC] === aKd) return iA[lh + aC];
		return 0
	}, this.aJD = function(player) {
		for (var lh = aKc(player), ft = 0, aC = size[player] - 1; 0 <= aC; aC--) ft += iA[lh + aC];
		return ft
	}, this.hS = function(player, aKd, aKh) {
		for (var lh = aKc(player), aC = size[player] - 1; 0 <= aC; aC--) jv[lh + aC] === aKd && (iA[lh + aC] = aKh)
	}, this.hD = function(player, aC, aKh) {
		iA[aKc(player) + aC] = Math.max(aKh, 0)
	}, this.hE = function(player, aC) {
		aKb[aKc(player) + aC] = 0
	}, this.gf = function(player, aC) {
		return aKb[aKc(player) + aC]
	}, this.eh = function(player, aKh, aKd) {
		ap.jZ.kO[player] = ap.jZ.kO[aKd] = 8, bD.gn.a4o(aKd) && bg.nI[6 - bD.gn.k9(player)]++;
		for (var lh = aKc(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (jv[lh + aC] === aKd) return iA[lh + aC] += aKh, void(iA[lh + aC] = iA[lh + aC] > aE.a4w ? aE.a4w : iA[lh + aC]);
		jv[lh + size[player]] = aKd, iA[lh + size[player]] = aKh, aKb[lh + size[player]] = 1, size[player]++, aKd === aE.fB ? aO.a1a(player, 5) : player < aE.km && player === aE.fB && ag.a7r(aKd)
	}, this.gs = function(player, eG) {
		var fk, lh;
		if (0 !== size[player])
			for (lh = aKc(player), size[player]--, fk = eG; fk < size[player]; fk++) jv[lh + fk] = jv[lh + fk + 1], iA[lh + fk] = iA[lh + fk + 1], aKb[lh + fk] = aKb[lh + fk + 1]
	}, this.aJ8 = function(player) {
		for (var fk, lh, aJJ = [], aC = am.lI - 1; 0 <= aC; aC--)
			for (lh = aKc(am.lN[aC]), fk = size[am.lN[aC]] - 1; 0 <= fk; fk--)
				if (jv[lh + fk] === player) {
					aJJ.push(am.lN[aC]);
					break
				} return aJJ
	}
}

function cc() {
	var aKi;

	function aKk(player) {
		var eF, kR;
		return bD.gn.k9(player) && player < aE.km ? 0 : (eF = aKi[bO.fs((aE.fO - 1) * ah.hF[player], aE.kW)], bi.kj() < 1920 && (eF = Math.max(bO.fs(100 * (13440 - 6 * bi.kj()), 1920), eF)), kR = af.kS(player), ah.hT[player] > kR && (eF -= bO.fs(2 *
			eF * (ah.hT[player] - kR), kR)), Math.min(Math.max(eF, 0), 700))
	}

	function aKw(nz) {
		for (var hF = ah.hF, lN = am.lN, aC = am.lI - 1; 0 <= aC; aC--) {
			var gz = lN[aC];
			bD.gn.gq(gz, bO.fs(nz * hF[gz], 32))
		}
	}

	function aKt() {
		var xx = aE.fB;
		bR.fx[0] = ah.hT[xx] - ah.a4t[xx]
	}

	function aKv(eG) {
		var xx = aE.fB,
			xx = ah.hT[xx] - ah.a4t[xx] - bR.fx[0];
		af.aBM += xx, bg.nI[eG] += xx
	}
	this.aBM = 0, this.dp = function() {
		for (var fR = aE.fO, aC = (aKi = new Uint16Array(fR), 0); aC < fR; aC++) aKi[aC] = 100 + aKj(bO.fs(25600 * aC, fR - 4), 9)
	}, this.di = function() {
		(this.aBM = 0) === aE.data.iIncomeType ? this.aCm = aKk : 1 === aE.data.iIncomeType ? this.aCm = function(player) {
			return bO.fs(aE.data.iIncomeValue * aKk(player), 64)
		} : this.aCm = function(player) {
			return bO.fs(aE.data.iIncomeData[player] * aKk(player), 64)
		}
	}, this.ed = function() {
		if (bi.kj() % 10 == 9 && (af.aBM = 0, function() {
				aKt();
				for (var lN = am.lN, hT = ah.hT, aC = am.lI - 1; 0 <= aC; aC--) {
					var gz = lN[aC],
						aKu = bO.fs(af.aCm(gz) * hT[gz], 1e4);
					bD.gn.gq(gz, Math.max(aKu, 1))
				}
				aKv(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aKt(), 1 === aE.data.aIncomeType)
						for (var hF = ah.hF, lN = am.lN, nz = aE.data.aIncomeValue, aC = am.lI - 1; 0 <= aC; aC--) {
							var gz = lN[aC];
							bD.gn.gq(gz, bO.fs(nz * hF[gz], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hF = ah.hF, lN = am.lN, nz = aE.data.aIncomeData, aC = am.lI - 1; 0 <= aC; aC--) {
								var gz = lN[aC];
								bD.gn.gq(gz, bO.fs(nz[gz] * hF[gz], 128))
							}
						}();
					aKv(18)
				}
			}(), bi.kj() % 100 == 99)) {
			if (aKt(), 0 === aE.data.tIncomeType) aKw(32);
			else if (1 === aE.data.tIncomeType) aKw(aE.data.tIncomeValue);
			else
				for (var hF = ah.hF, lN = am.lN, nz = aE.data.tIncomeData, aC = am.lI - 1; 0 <= aC; aC--) {
					var gz = lN[aC];
					bD.gn.gq(gz, bO.fs(nz[gz] * hF[gz], 32))
				}
			aKv(8)
		}
	}, this.kS = function(player) {
		return Math.min(100 * ah.hF[player], aE.a5n)
	}, this.pr = function(player, ps) {
		bt.qE(player, ps, bR.fy[0], 0), bD.gn.gq(ps, bR.fy[0]), bg.qF(player, ps), ag.aKm(player, bR.fy[0] + bR.fy[1]), ag.qG(ps, bR.fy[0]), bD.gn.mw(player)
	}, this.aKn = function() {
		for (var fR = am.lI, a1B = am.lN, lh = 0, a4u = ah.hT, aC = 0; aC < fR; aC++) lh += a4u[a1B[aC]];
		return lh
	}, this.aKo = function(aKp) {
		for (var gz, fR = am.lI, a1B = am.lN, lh = 0, a4u = ah.hT, fP = bj.fP, aC = 0; aC < fR; aC++) fP[gz = a1B[aC]] === aKp && (lh += a4u[gz]);
		return lh
	}
}

function ce() {
	var aL0, aL1, aL2, aL3, aL4, aL5, aL6, aL7, aL8, aL9, aLA, aLB, aLC, aLD, aLE, aLF, aLG, aLH, aLJ, aLK, aDt, aLL, aLM, aLS, aLT, aLI = null,
		aLO = 0,
		aLP = !1,
		aLQ = new Float32Array(4),
		aLR = 0,
		aBr = 112,
		aLU = 0;

	function rN() {
		aL8 = Math.floor(+i.ib), aL9 = Math.floor(.5 * aL8), aLI.width = i.j, aLI.height = i.k, aLJ = aLI.getContext("2d", {
			alpha: !0
		}), bD.rK.textAlign(aLJ, 1), bD.rK.textBaseline(aLJ, 1), aLJ.imageSmoothingEnabled = !0
	}

	function aLV() {
		var aC, aLa;
		for (vw.font = bD.rK.t8(1, 100 * aLA), aLa = 80 / Math.floor(vw.measureText(bD.sJ.a0e(aE.a4w)).width), vw.font = bD.rK.t8(1, 100), aC = aE.fO - 1; 0 <= aC; aC--) aL7[aC] = 100 / Math.floor(vw.measureText(ah.zq[aC]).width), aL6[aC] = Math.min(
			aLa, aL7[aC])
	}

	function aLb(aC) {
		return !aLU || (aC = ah.hT[aC]) < 1e6 ? 1 : aC < 1e7 ? aLQ[0] : aLQ[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aLZ(iT) {
		aLP = !1, aLO = bi.eY, aLH = !1, aLG = 1, aLE = aLF = 0, iT.clearRect(0, 0, i.j, i.k);
		for (var aLh, aLi, aC, aLj, fontSize, aLk, nn = j5 / ic, no = j6 / ic, o0 = (i.j + j5) / ic, o1 = (i.k + j6) / ic, aLl = 0 !== ah.nM[aE.fB] && !bD.gn.k9(aE.fB), fk = am.lI - 1; 0 <= fk; fk--) aC = am.lN[fk], (fontSize = Math.floor(aLD * ic *
			aLb(aC) * aL6[aC] * aL4[aC])) < aLC || aL8 <= fontSize || aL2[aC] + aL4[aC] > nn && aL2[aC] < o0 && aL3[aC] + aL5[aC] > no && aL3[aC] < o1 && (aLh = Math.floor(i.j * (aL2[aC] + aL4[aC] / 2 - nn) / (o0 - nn)), aLi = Math.floor(i.k * (
			aL3[aC] + aL5[aC] / 2 - no) / (o1 - no) - .1 * fontSize), aLj = ad.a9m[aC], iT.font = bD.rK.t8(1 === ah.a4k[aC] ? 4 : 1, fontSize), iT.fillStyle = aLm(fontSize, aLj % 2), aLU ? aLn(iT, aC, fontSize, aLh, aLi, aLj) : aLo(aC,
			fontSize, aLh, aLi, iT), aLH = !0, 0 < aDt[aC] ? function(aLh, aLi, fontSize, aC, iT) {
			0 === kX[aC] ? ak.sZ.a0V(aLK[aC]) ? (function(aLh, aLi, fontSize, player, q3, iT) {
				for (var yU = aLi, iS = (iT.globalAlpha = aLw(fontSize), aLb(player) * (aLU ? aLR : aL7[player])), yT = aLh - .5 * fontSize / iS - .9 * fontSize, fl = 0; fl < 2; fl++) iT.fillText(ak.sZ.a0N(q3), yT, yU), yT = aLh +
					.5 * fontSize / iS + .9 * fontSize;
				iT.globalAlpha = 1
			}(aLh, aLi, fontSize, aC, aLK[aC], iT), aLq(aLh, aLi, fontSize, 0, 0, iT)) : ak.sZ.a0X(aLK[aC]) ? (aLz(aLh, aLi, fontSize, aLK[aC], 0, iT), aLq(aLh, aLi, fontSize, 0, 1, iT)) : (aLz(aLh, aLi, fontSize, aLK[aC], 1, iT), aLq(
				aLh, aLi, fontSize, 1, 0, iT)) : aLz(aLh, aLi, fontSize, aLK[aC], 0, iT)
		}(aLh, aLi, fontSize, aC, iT) : 0 === kX[aC] && aLq(aLh, aLi, fontSize, 0, 0, iT), aLl && (0 < aDt[aC + aE.fO] || 0 < aDt[aC + 2 * aE.fO] || 0 < aDt[aC + 3 * aE.fO] || 0 < aDt[aC + 4 * aE.fO]) && function(aLh, aLi, fontSize, aC, iT) {
			var ei, gu = -1;
			for (ei = 4; 1 <= ei; ei--) 0 < aDt[aC + ei * aE.fO] && gu++;
			for (ei = 1; ei < 5; ei++) 0 < aDt[aC + ei * aE.fO] && (! function(aLh, aLi, fontSize, ei, aC, aLu, eZ, iT) {
				var a4E;
				if (1 === ei) {
					aC = aLK[aC + aE.fO];
					if (!ak.sZ.a0W(aC)) return function(aLh, aLi, fontSize, q3, aLu, iT) {
						iT.globalAlpha = aLw(fontSize);
						aLh -= .534 * aLu * fontSize, aLu = aLi + 1.59 * fontSize;
						iT.font = bD.rK.t8(0, .785 * fontSize), iT.fillText(ak.sZ.a0N(q3), aLh, aLu), iT.globalAlpha = 1
					}(aLh, aLi, fontSize, aC, aLu, iT);
					a4E = ak.xw.zw[aC - 1024 + ak.sZ.a08]
				} else a4E = 2 === ei ? aM.a6e()[4].canvas[+(eZ < 255)] : (3 === ei ? aM.a6e()[5] : aM.a6e()[6]).canvas[0];
				aC = ak.xw.zx, eZ = .8 * fontSize / aC, ei = aLh - .5 * eZ * aC - .534 * aLu * fontSize, aLh = aLi + 1.4 * eZ * aC;
				iT.setTransform(eZ, 0, 0, eZ, ei, aLh), iT.globalAlpha = aLw(fontSize), iT.drawImage(a4E, 0, 0), iT.globalAlpha = 1, iT.setTransform(1, 0, 0, 1, 0, 0)
			}(aLh, aLi, fontSize, ei, aC, gu, aDt[aC + ei * aE.fO], iT), gu -= 2)
		}(aLh, aLi, fontSize, aC, iT), (aLk = aLA * fontSize) < aLC || (iT.font = bD.rK.t8(1, aLk), aLi += Math.floor(.78 * fontSize), aLU ? aLo(aC, aLk, aLh, aLi, iT) : aLn(iT, aC, aLk, aLh, aLi, aLj)))
	}

	function aLo(aC, fontSize, fY, fa, iT) {
		var ___id = aC;
		var showName = aC < aE.km || !__fx.settings.hideBotNames;
		if (showName) iT.fillText(ah.zq[aC], fY, fa), aC < aE.km && 2 !== ah.a4k[aC] || (aC = fontSize / aL7[aC], iT.fillRect(fY - .5 * aC, fa + bD.rK.a0O * fontSize, aC, Math.max(1, .1 * fontSize)));
		aLU && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iT.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iT.fillText(__fx.utils.getDensity(___id), fY, showName ? fa + fontSize : fa)
		);
	}

	function aLn(iT, aC, fontSize, aLh, aLi, aLj) {
		var a4t = ah.a4t[aC],
			aLt = bD.sJ.a0e(ah.hT[aC] - a4t);

		function drawDensity() {
			!aLU && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iT.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), iT.fillText(__fx.utils.getDensity(aC), aLh, aLi + fontSize))
		}
		a4t ? (a4t = iT.fillStyle, iT.fillStyle = aLm(fontSize, 2 + aLj % 2), iT.fillText(aLt, aLh, aLi), iT.fillStyle = a4t) : aLj >> 1 & 1 ? (iT.lineWidth = .05 * fontSize, iT.strokeStyle = aLm(fontSize, aLj % 2), iT.strokeText(aLt, aLh, aLi)) : (
			1 < aLj && (iT.lineWidth = .12 * fontSize, iT.strokeStyle = aLm(fontSize, aLj), iT.strokeText(aLt, aLh, aLi)), iT.fillText(aLt, aLh, aLi)), drawDensity()
	}

	function aLq(aLh, aLi, fontSize, aLu, aLv, iT) {
		var a79 = .95 * fontSize / aLM,
			aLh = aLh - .5 * a79 * aLL + .8 * aLu * fontSize,
			aLu = aLi - 1.76 * a79 * aLM - (.35 - bD.rK.a0O + .7) * aLv * fontSize;
		iT.setTransform(a79, 0, 0, a79, aLh, aLu), iT.globalAlpha = aLw(fontSize), iT.drawImage(ac.get(4), 0, 0), iT.globalAlpha = 1, iT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLz(aLh, aLi, fontSize, q3, aLu, iT) {
		var iN, yT, a79;
		iT.globalAlpha = aLw(fontSize), ak.sZ.a0W(q3) ? (iN = ak.xw.zx, iT.setTransform(a79 = 1.1 * fontSize / iN, 0, 0, a79, yT = aLh - .5 * a79 * iN - .8 * aLu * fontSize, a79 = aLi - 1.55 * a79 * iN), iT.drawImage(ak.xw.zw[q3 - 1024 + ak.sZ.a08],
			0, 0), iT.setTransform(1, 0, 0, 1, 0, 0)) : (yT = aLh - .8 * aLu * fontSize, a79 = aLi - (.35 - bD.rK.a0O + 1) * fontSize, iT.fillText(ak.sZ.a0N(q3), yT, a79)), iT.globalAlpha = 1
	}

	function aLm(fontSize, aLj) {
		return aL9 <= fontSize && fontSize < aL8 ? bj.aM1[aLj] + aLw(fontSize).toFixed(3) + ")" : bj.aM2[aLj]
	}

	function aLw(fontSize) {
		return aL9 <= fontSize && fontSize < aL8 ? 1 - (fontSize - aL9) / (aL8 - aL9) : 1
	}

	function aMB(iS, j) {
		return 1 + Math.floor(aLB * iS * j)
	}

	function aM8(aC) {
		for (var left = aL2[aC], fk = aL2[aC] - ah.jK[aC] - 1; 0 <= fk; fk--)
			if (!aMD(aC, --left, aL3[aC], aL5[aC])) {
				left++;
				break
			} var right = aL2[aC];
		for (fk = ah.jL[aC] - aL2[aC] - aL4[aC]; 0 <= fk; fk--)
			if (!aMD(aC, ++right + aL4[aC] - 1, aL3[aC], aL5[aC])) {
				right--;
				break
			} var fY = Math.floor((left + right) / 2),
			top = aL3[aC];
		for (fk = aL3[aC] - ah.jM[aC] - 1; 0 <= fk; fk--)
			if (!aME(aC, fY, --top, aL4[aC])) {
				top++;
				break
			} var bottom = aL3[aC];
		for (fk = ah.jN[aC] - aL3[aC] - aL5[aC]; 0 <= fk; fk--)
			if (!aME(aC, fY, ++bottom + aL5[aC] - 1, aL4[aC])) {
				bottom--;
				break
			} var fa = Math.floor((top + bottom) / 2);
		aM5(aC, fY, fa, aL4[aC], aL5[aC]) && (aL2[aC] = fY, aL3[aC] = fa)
	}

	function aM5(player, fY, fa, j, k) {
		fU = Math.floor(.2 * j);
		for (var fU, ei = fY + j - 1; fY <= ei; ei--)
			if (!aMD(player, ei, fa, k)) return;
		for (ei = fa + k - 1 - (fU = (fU = Math.floor(.25 * k)) < 1 ? 1 : fU); fa + fU <= ei; ei--)
			if (!aME(player, fY, ei, j)) return;
		return 1
	}

	function aMD(player, fY, fa, k) {
		return ad.zL(player, 4 * (fa * bV.fc + fY)) && ad.zL(player, 4 * ((fa + k - 1) * bV.fc + fY))
	}

	function aME(player, fY, fa, j) {
		return ad.zL(player, 4 * (fa * bV.fc + fY)) && ad.zL(player, 4 * (fa * bV.fc + fY + j - 1))
	}
	this.di = function() {
		if (aLU = bm.eV.data[7].value || 8 === aE.l4, aLH = !1, aLD = .88, aLA = .5, aLB = 1.8, aLC = 12 - 3 * bm.eV.data[9].value, aL1 = aL0 = 0, aL2 = new Uint16Array(aE.fO), aL3 = new Uint16Array(aE.fO), aL4 = new Uint16Array(aE.fO), aL5 =
			new Uint16Array(aE.fO), aL6 = new Float32Array(aE.fO), aL7 = new Float32Array(aE.fO), aLK = new Uint16Array(2 * aE.fO), aDt = new Uint8Array(5 * aE.fO), aLS = new Uint8Array(aE.fO), aLT = new Uint8Array(aE.fO), aLI = aLI || document
			.createElement("canvas"), rN(), aLF = aLE = 0, aLG = 1, aLU) {
			var aC, aLa;
			for (aLV(), vw.font = bD.rK.t8(1, 100), aLa = 100 / Math.floor(vw.measureText("900 000").width), aC = aE.fO - 1; 0 <= aC; aC--) aL6[aC] = Math.min(aLa, 2 * aL7[aC]);
			aLR = aLa, aLQ[0] = 100 / (aLa * Math.floor(vw.measureText("5 000 000").width)), aLQ[1] = 100 / (aLa * Math.floor(vw.measureText("50 000 000").width)), aLQ[2] = 100 / (aLa * Math.floor(vw.measureText("500 000 000").width)), aLQ[3] =
				100 / (aLa * Math.floor(vw.measureText("1 000 000 000").width))
		} else aLV();
		! function() {
			var aC;
			for (aC = aE.fO - 1; 0 <= aC; aC--) ah.hF[aC] < 12 ? (aL2[aC] = ah.jK[aC] + 1, aL3[aC] = ah.jM[aC] + 1, aL4[aC] = 1, aL5[aC] = 1) : (aL2[aC] = ah.jK[aC], aL3[aC] = ah.jM[aC] + 1, aL4[aC] = 4, aL5[aC] = 2);
			if (aE.hp)
				for (aC = 0; aC < aE.km; aC++) aL4[aC] = 0;
			aLL = ac.get(4).width, aLM = ac.get(4).height
		}()
	}, this.aKm = function(gz, a6N) {
		a6N > 18 * ah.hF[gz] ? (aLT[gz] = 6, ad.a9m[gz] = 2 + ad.a9m[gz] % 2) : (aLS[gz] = 4, (ad.a9m[gz] < 2 || 3 < ad.a9m[gz]) && (ad.a9m[gz] = 6 + ad.a9m[gz] % 2))
	}, this.qG = function(gz, a6N) {
		a6N > 6 * ah.hF[gz] ? (aLT[gz] = 6, ad.a9m[gz] = 4 + ad.a9m[gz] % 2) : (aLS[gz] = 4, (ad.a9m[gz] < 4 || 5 < ad.a9m[gz]) && (ad.a9m[gz] = 8 + ad.a9m[gz] % 2))
	}, this.resize = function() {
		rN(), aLZ(aLJ)
	}, this.a5j = function() {
		for (var aC = 0; aC < aE.km; aC++) ah.jL[aC] - ah.jK[aC] != 3 || ah.jN[aC] - ah.jM[aC] != 3 ? (aL2[aC] = ah.jK[aC] + (ah.jL[aC] !== ah.jK[aC] ? 1 : 0), aL3[aC] = ah.jM[aC], aL4[aC] = 1, aL5[aC] = 1) : (aL2[aC] = ah.jK[aC], aL3[aC] = ah
			.jM[aC] + 1, aL4[aC] = 4, aL5[aC] = 2)
	}, this.qt = function(player, eG, aLc) {
		! function(player, eG, aLc) {
			player += eG * aE.fO;
			0 === eG ? aLK[player] === aLc && 0 < aDt[player] ? aDt[player] = 0 : (aLK[player] = aLc, aDt[player] = ak.sZ.a0V(aLc) ? 255 : 64) : 1 === eG ? (aDt[player] = 64, aLK[player] = aLc) : aDt[player] = aLc
		}(player, eG, aLc), 2 === aE.a1N && this.n8(!0)
	}, this.vv = function() {
		aLH && (1 !== aLG ? (vw.imageSmoothingEnabled = !0, vw.setTransform(aLG, 0, 0, aLG, 0, 0), vw.drawImage(aLI, -aLE / aLG, -aLF / aLG), vw.setTransform(1, 0, 0, 1, 0, 0), vw.imageSmoothingEnabled = !1) : vw.drawImage(aLI, -aLE, -aLF))
	}, this.aAZ = function(io, ir) {
		aLE += io, aLF += ir
	}, this.a2u = function(io, ir) {
		ag.aAZ(io, ir)
	}, this.zoom = function(a3n, m1, m2) {
		aLG *= a3n, aLE = (aLE + m1) * a3n - m1, aLF = (aLF + m2) * a3n - m2
	}, this.aJ9 = function(player) {
		var jK = ah.jK[player],
			jL = ah.jL[player],
			jM = ah.jM[player],
			jN = ah.jN[player],
			iz = bP.hh(0),
			j0 = bP.hj(0),
			j1 = bP.hh(i.j),
			j2 = bP.hj(i.k);
		jK < j1 && iz < jL && jM < j2 && j0 < jN && (aL4[player] = 0, aLP = !0)
	}, this.n8 = function(bx) {
		return !(!aLP && !bx && bi.eY < aLO + (1 === aLG && 0 === aLE && 0 === aLF && (aE.a6C() || aE.hp || 2 === aE.a1N) ? 1e3 : aBr) || (aLZ(aLJ), 0))
	}, this.aLf = function(aC) {
		return aLb(aC) * aL6[aC]
	}, this.aLg = function(player) {
		return aL6[player]
	}, this.ed = function() {
		bi.kj() % 10 == 9 && (aLP = aLP || aE.a6E() && !aE.a6C()), !aE.a6C() && 4 <= ++aL1 && function() {
			var aC, fk, fl;
			for (aL1 = 0, fl = 4; 1 <= fl; fl--)
				for (fk = am.lI - 1; 0 <= fk; fk--) aC = am.lN[fk] + fl * aE.fO, 0 < aDt[aC] && aDt[aC] < 255 && aDt[aC]--;
			if (2 !== aE.a1N)
				for (fk = am.lI - 1; 0 <= fk; fk--) aC = am.lN[fk], 0 < aDt[aC] && aDt[aC] < 255 && aDt[aC]--
		}();
		var aC, fk, fR = Math.floor(.1 * am.lI);
		for (fR = (fR = fR < 8 ? 8 : fR) > am.lI ? am.lI : fR, aC = aL0 + fR - 1; aL0 <= aC; aC--) fk = aC % am.lI, ! function(aC) {
			var iS = aLb(aC) * aL6[aC];
			0 < aL4[aC] && aM5(aC, aL2[aC], aL3[aC], aL4[aC], aL5[aC]) ? ! function(aC) {
				for (var fY, fa, j, k, f5 = !1, fl = 0; fl < 8; fl++) {
					if (j = aL4[aC] + 2, k = aL5[aC] + 2, j > ah.jL[aC] - ah.jK[aC] + 1 || k > ah.jN[aC] - ah.jM[aC] + 1) return f5;
					if (fY = aL2[aC] - 1, fa = aL3[aC] - 1, !aM5(aC, fY, fa, j, k)) return f5;
					aL2[aC] = fY, aL3[aC] = fa, aL4[aC] = j, aL5[aC] = k, f5 = !0
				}
				return f5
			}(aC) && function(aC, iS) {
				for (var fY, fa, j, k, f5 = !1, aE2 = aL4[aC], nz = 1 + Math.floor(.02 * aE2), fl = 1; fl < 5; fl++) {
					if ((j = aE2 + fl * nz) > ah.jL[aC] - ah.jK[aC] + 1) return f5;
					if ((k = aMB(iS, j)) > ah.jN[aC] - ah.jM[aC] + 1) return f5;
					fY = ah.jK[aC] + Math.floor(Math.random() * (ah.jL[aC] - ah.jK[aC] + 2 - j)), fa = ah.jM[aC] + Math.floor(Math.random() * (ah.jN[aC] - ah.jM[aC] + 2 - k)), aM5(aC, fY, fa, j, k) && (aL2[aC] = fY, aL3[aC] = fa, aL4[
						aC] = j, aL5[aC] = k, f5 = !0)
				}
				return f5
			}(aC, iS) && aM8(aC) : ! function(aC, iS) {
				var k, fY = aL2[aC] + 1,
					fa = aL3[aC] + 1,
					j = aL4[aC] - 2;
				for (;;) {
					if (j < 1) {
						aL4[aC] = 0;
						break
					}
					if (k = aMB(iS, j), aM5(aC, fY, fa, j, k)) return aL2[aC] = fY, aL3[aC] = fa, aL4[aC] = j, aL5[aC] = k, 1;
					fY++, fa++, j -= 2
				}
				return
			}(aC, iS) ? function(aC, iS) {
				var fY, fa, j, k, fl, o5, k2 = ah.jL[aC] - ah.jK[aC] + 1,
					aMC = Math.floor(.02 * k2);
				for (o5 = -6 * (aMC = aMC < 1 ? 1 : aMC), fl = k2; o5 <= fl; fl -= aMC)
					if (k = aMB(iS, j = 0 < fl ? fl : 1), fY = ah.jK[aC] + Math.floor(Math.random() * (ah.jL[aC] - ah.jK[aC] + 2 - j)), fa = ah.jM[aC] + Math.floor(Math.random() * (ah.jN[aC] - ah.jM[aC] + 2 - k)), aM5(aC, fY, fa, j, k))
						return aL2[aC] = fY, aL3[aC] = fa, aL4[aC] = j, aL5[aC] = k
			}(aC, iS) : aM8(aC)
		}(am.lN[fk]);
		aL0 = (aL0 += fR) % am.lI
	}, this.n2 = function() {
		var aC, gz, a0T, a0U;
		if (bi.kj() % 4 == 1)
			for (aC = am.lI - 1; 0 <= aC; aC--) gz = am.lN[aC], ad.a9m[gz] < 2 || ((a0T = Math.max(aLS[gz] - 1, 0)) === (a0U = Math.max(aLT[gz] - 1, 0)) ? 0 === a0T && (ad.a9m[gz] %= 2) : 0 === a0U && ad.a9m[gz] < 6 && (ad.a9m[gz] += 4), aLS[
				gz] = a0T, aLT[gz] = a0U)
	}, this.a7r = function(player) {
		var aC = player + 2 * aE.fO,
			eZ = aDt[aC];
		return 0 < eZ && (aO.a1V(50, player), aDt[aC] = 0, 255 === eZ)
	}, this.a6t = function(player) {
		return 255 === aDt[player + 2 * aE.fO]
	}
}

function cg() {
	var aMF, aMG, aMH;
	this.di = function() {
		aMF =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aMG =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aMH = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a88 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEu = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aMF.length - 1; 0 <= aC; aC--)
			for (var fk = a88.length - 1; 0 <= fk; fk--) aMF[aC] = aMF[aC].replace(a88[fk], aEu[fk]);
		if (__fx.settings.realisticNames) aMF = realisticNames;
	}, this.a5z = function() {
		var fR = aE.km,
			zq = ah.zq,
			a23 = ah.a23,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fR)
			for (var aC = 0; aC < fR; aC++) zq[aC] = a23[aC] = "Player " + az.k3(1e3);
		else
			for (aC = 0; aC < fR; aC++) zq[aC] = a23[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.l4) {
			for (var eF = az.random(), aMN = aMH, aMO = aMG, iA = aF.iA, fR = aMN.length, lh = aE.data.teamPlayerCount[7], zq = ah.zq, a23 = ah.a23, aC = lh - 1; aC >= aE.km; aC--) zq[aC] = a23[aC] = aMN[(aC + eF) % fR];
			for (fR = aMO.length - 1, aC = lh; aC < aE.fO; aC++) zq[aC] = a23[aC] = aMO[iA[aC] ? fR : aC % fR]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fR = aE.fO, zq = ah.zq, a23 = ah.a23, playerNamesData = aE.data.playerNamesData, aC = aE.km; aC < fR; aC++) zq[aC] = a23[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var zq = ah.zq, a23 = ah.a23, aC = aE.km; aC < aE.fO; aC++) zq[aC] = a23[aC] = "Bot " + az.k3(1e3)
		} : function() {
			for (var aMP = aMF, fR = aMP.length, eF = az.random(), zq = ah.zq, a23 = ah.a23, aC = aE.km; aC < aE.fO; aC++) zq[aC] = a23[aC] = aMP[(aC + eF) % fR]
		})()
	}
}

function cz() {
	this.aMQ = [], this.aMR = [], this.di = function() {
		this.aMQ = [], this.aMR = []
	}, this.ed = function() {
		0 <= this.aMQ.length && this.aMS(this.aMQ), 0 <= this.aMR.length && this.aMS(this.aMR)
	}, this.aMS = function(h) {
		for (var fl = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eY--, h[aC].eY <= 0) {
				fl = aC;
				break
			} for (aC = fl; 0 <= aC; aC--) h.shift()
	}, this.a6m = function(id, a1B, aMT) {
		return this.fm(this.aMQ, id, a1B, aMT)
	}, this.aMU = function(id, a1B, aMT) {
		return this.fm(this.aMR, id, a1B, aMT)
	}, this.fm = function(h, id, a1B, aMT) {
		return ! function(h, id, a1B) {
			var aC, iJ;
			for (aC = a1B.length - 1; 0 <= aC; aC--)
				for (iJ = h.length - 1; 0 <= iJ; iJ--)
					if (h[iJ].player === a1B[aC] && id === h[iJ].id) return 1;
			return
		}(h, id, a1B) && (aMT && function(h, id, a1B) {
			var aC;
			for (aC = a1B.length - 1; 0 <= aC; aC--) h.push({
				player: a1B[aC],
				id: id,
				eY: 384
			})
		}(h, id, a1B), !0)
	}
}

function cf() {
	this.a23 = new Array(aE.fO), this.zq = new Array(aE.fO), this.a4k = new Uint8Array(aE.fO), this.nM = new Uint8Array(aE.fO), this.jK = new Uint16Array(aE.fO), this.jM = new Uint16Array(aE.fO), this.jL = new Uint16Array(aE.fO), this.jN =
		new Uint16Array(aE.fO), this.hF = new Uint32Array(aE.fO), this.yv = new Uint32Array(aE.fO), this.hT = new Uint32Array(aE.fO), this.gt = null, this.h7 = null, this.h8 = null, this.fq = null, this.qj = new Uint16Array(aE.fO), this.jp =
		new Uint16Array(aE.fO), this.jq = new Uint16Array(aE.fO), this.a1y = new Uint16Array(aE.fO), this.a1w = new Uint8Array(aE.fO), this.a4t = new Uint16Array(aE.fO), this.di = function() {
			this.a23.fill(""), this.zq.fill(""), this.a4k.fill(0), this.nM.fill(0), this.jK.fill(0), this.jM.fill(0), this.jL.fill(0), this.jN.fill(0), this.hF.fill(0), this.yv.fill(0), this.hT.fill(0), this.gt = new Array(aE.fO), this.h7 =
				new Array(aE.fO), this.h8 = new Array(aE.fO), this.fq = new Array(aE.fO), this.qj.fill(0), this.jp.fill(0), this.jq.fill(0), this.a1y.fill(0), this.a1w.fill(0), this.a4t.fill(0)
		}
}

function cx() {
	this.aEP = function(player) {
		aH.nL(player), aE.a1P++, ah.a4k[player] = 2, ah.a1y[player] = bl.a2D.aJI(), player === aE.fB && (aY.show(!1, !1), aX.aCY(), bU.a18.a1u()), ag.a7r(player)
	}
}

function cY() {
	this.lN = null, this.lI = 0, this.a63 = function() {
		for (this.lI = 0, aC = aE.fO - 1; 0 <= aC; aC--) 0 !== ah.nM[aC] && this.lI++;
		this.lN = new Uint16Array(this.lI);
		for (var fR = 0, aC = 0; aC < aE.fO; aC++) 0 !== ah.nM[aC] && (this.lN[fR++] = aC)
	}, this.n1 = function() {
		for (var hF = ah.hF, yv = ah.yv, a1w = ah.a1w, lN = am.lN, aC = am.lI - 1; 0 <= aC; aC--) {
			var gz = lN[aC],
				eZ = hF[gz],
				lh = yv[gz];
			eZ <= bO.fs(lh, 4) ? al.dr(gz) : lh <= eZ ? 250 <= (yv[gz] = eZ) && (a1w[gz] = 1) : yv[gz] = lh - Math.max(1, bO.fs(lh - eZ, 1e3))
		}
		this.aMY()
	}, this.aMY = function() {
		for (var nM = ah.nM, lg = this.lN, aDG = this.lI, aC = aDG - 1; 0 <= aC; aC--) 0 === nM[lg[aC]] && (lg[aC] = lg[--aDG]);
		this.lI = aDG
	}
}

function cZ() {
	var aMZ = new Uint16Array(aE.fO),
		aMa = 0;

	function aMe(a7x, aMc) {
		var ei = bi.kj();
		return 3213 <= ei ? 4 + bO.fs(100 * aMc, af.kS(a7x)) : (a7x = 1 + bO.fs(aE.kW, 300), ei < 357 ? 2 + bO.fs(100 * aMc, a7x) : ei < 714 ? 2 + bO.fs(100 * aMc, 4 * a7x) : ei < 1071 ? 2 + bO.fs(100 * aMc, 10 * a7x) : ei < 2142 ? 2 + bO.fs(100 *
			aMc, 30 * a7x) : 2 + bO.fs(100 * aMc, 100 * a7x))
	}

	function aMd(a7x) {
		return aE.l6 || 4284 <= bi.kj() || bD.gn.k9(a7x)
	}
	this.di = function() {
		aMZ.fill(0), aMa = 15
	}, this.i5 = function(ps) {
		var player = aE.fB;
		return !!bD.gn.ql(player, ps) && !(!bD.gn.qB(player, bD.gn.j3(player, aS.hv()), ps) || (player = ps, ps = bR.fy[0], !aMd(player) && aMZ[player] + aMe(player, ps) > aMa))
	}, this.eh = function(a7x, aMc) {
		if (!aMd(a7x)) {
			aMc = aMe(a7x, aMc);
			if (aMZ[a7x] + aMc > aMa) return !1;
			aMZ[a7x] += aMc
		}
		return !0
	}, this.ed = function() {
		bi.kj() % 100 == 99 && (bi.kj() < 1071 ? aMa += 4 : bi.kj() < 2142 ? aMa += 6 : bi.kj() < 3213 ? aMa += 8 : aMa += 10)
	}
}

function ch() {
	var aMf;
	this.lD = null, this.lC = 0, this.di = function() {
		aMf = [], 9 === aE.l4 && this.aMg()
	}, this.aMg = function() {
		this.lD = [0, 0, 0, 0, 0, 0];
		for (var aMh = [256, 227, 166, 148, 100, this.lC = 0, 0, 0], aMi = [0, 8, 24, 30, 46, 70, 256, 333], aMj = [0, 0, 3, 9, 17, 25, 256, 179], k = aE.km, aC = 1; aC < aMh.length; aC++)
			if (k <= aMi[aC]) {
				this.lC = aMh[aC - 1] - bO.fs((k - aMi[aC - 1]) * (aMh[aC - 1] - aMh[aC]), aMi[aC] - aMi[aC - 1]), this.lD[5] = aMj[aC - 1] - bO.fs((k - aMi[aC - 1]) * (aMj[aC - 1] - aMj[aC]), aMi[aC] - aMi[aC - 1]), this.lD[0] = aE.fO - k - this
					.lC - this.lD[5];
				break
			} aE.l8 = aE.fO - aE.km, aE.data.numberTeams = (0 < aE.km) + (0 < aE.l8), aE.data.playerCount = aE.yR = aE.km + aE.l8, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.km + this.lC, aE.l8 - this.lC]), aE.a5s.a5x()
	}, this.aJP = function(player) {
		aMf.push({
			player: player,
			gu: 14 + az.k3(20)
		})
	}, this.ed = function() {
		if (9 === aE.l4)
			for (var aC = aMf.length - 1; 0 <= aC; aC--) --aMf[aC].gu <= 0 && (ag.qt(aMf[aC].player, 0, ak.sZ.a0B + ak.sZ.a0P), aMf.splice(aC))
	}
}

function dG() {
	function aMz() {
		return {
			fc: bV.fc,
			fd: bV.fd,
			xt: bV.xt,
			xp: bV.xp,
			xq: bV.xq,
			xu: bV.xu,
			f7: bV.f7,
			mapSeed: bV.mapSeed,
			xr: bV.xr
		}
	}

	function aMr(aC) {
		return 1 !== aC && bV.aF4(aC) && aC !== bV.aN1()
	}
	this.aMl = 25, this.aMm = 13, this.aJb = 4096, this.fc = 0, this.fd = 0, this.xt = null, this.xp = null, this.xq = null, this.xu = null, this.f7 = 0, this.mapSeed = 0, this.xr = !1, this.xs = new aMn, this.xj = new aMo, this.a8F = new aMp, this
		.di = function() {
			this.xj.di()
		}, this.a8 = function(map, aMq) {
			((map %= this.aMl) !== this.f7 || aMr(this.f7) && aMq !== this.mapSeed) && (this.xr = !1, this.xs.aMs(), az.a5y(map), this.f7 = map, this.mapSeed = aMq, aMr(map) && (bV.xj.xk[map].aMt = aMq), this.aF4(this.f7) ? (map = bV.xj.xk[this.f7],
				this.fc = map.j, this.fd = map.k, az.a5y(map.aMt), ar.a8([this.fc, this.fd, map.nR, map.nO]), aMv(), aq.aMw(), ar.aMx()) : aMu())
		}, this.aMy = function(map, aMq) {
			var gA = aMz(),
				map = (this.a8(map, aMq), this.xs.aMs(), aMz());
			return aMq = gA, bV.fc = aMq.fc, bV.fd = aMq.fd, bV.xt = aMq.xt, bV.xp = aMq.xp, bV.xq = aMq.xq, bV.xu = aMq.xu, bV.f7 = aMq.f7, bV.mapSeed = aMq.mapSeed, bV.xr = aMq.xr, map
		}, this.a6J = function(canvas) {
			canvas && this.xt !== canvas && (this.fc = canvas.width, this.fd = canvas.height, this.xt = canvas, this.xp = this.xt.getContext("2d", {
				alpha: !1
			}), this.iQ = this.xp.getImageData(0, 0, this.fc, this.fd), this.xu = this.iQ.data, this.f7 = this.aN1(), this.mapSeed = 0, bV.xj.xk[this.f7].name = aE.data.mapName)
		}, this.f6 = function(aC) {
			return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aN1()
		}, this.aN2 = function(aC) {
			return 2 === aC || 7 === aC || 9 === aC || 20 === aC
		}, this.aN3 = function(aC) {
			return 1 === aC
		}, this.aN1 = function() {
			return this.aMl
		}, this.aF4 = function(aC) {
			return void 0 === this.xj.xk[aC].aN4
		}, this.a6I = function(rC) {
			return 0 === rC.mapType ? rC.mapProceduralIndex < 10 ? rC.mapProceduralIndex : 10 + rC.mapProceduralIndex : 1 === rC.mapType ? 10 <= rC.mapRealisticIndex ? 22 + rC.mapRealisticIndex - 10 : rC.mapRealisticIndex + 10 : void 0
		}, this.aF5 = function(rC, aN5) {
			0 === rC.mapType ? rC.mapProceduralIndex = aN5 < 10 ? aN5 : aN5 - 10 : 1 === rC.mapType && (rC.mapRealisticIndex = aN5 - (22 <= aN5 ? 12 : 10))
		}
}

function aMn() {
	function aNE() {
		bV.xs.ed()
	}

	function aNK(gz, aNJ) {
		0 < aNJ && (bV.xu[gz] += aNJ, bV.xu[gz + 1] += aNJ, bV.xu[gz + 2] += aNJ)
	}

	function ih(gz) {
		return bV.xu[gz + 2] > bV.xu[gz] && bV.xu[gz + 2] > bV.xu[gz + 1]
	}
	this.aAl = -1, this.a2Q = 0, this.aN6 = 0, this.aN7 = 8, this.aN8 = 32, this.aN9 = 8, this.aNA = 32, this.aNB = [0, 0], this.a9m = [0, 0, 0, 0], this.jE = null, this.aNC = !0, this.aND = !1, this.aMs = function() {
		-1 !== this.aAl && clearTimeout(this.aAl), this.aAl = -1, this.jE = null, ar.aMx()
	}, this.di = function() {
		7 === ab.a2X() || this.aND || (this.aNC = !0, this.a2Q = 0, this.aN6 = 1, this.aNB = [bV.xj.xk[bV.f7].yB[0], bV.xj.xk[bV.f7].yC[0]], this.a9m = [bV.xj.xk[bV.f7].aN4[3], bV.xj.xk[bV.f7].aN4[4], bV.xj.xk[bV.f7].aN4[5], bV.xj.xk[bV.f7].aN4[
			6]], this.aN7 = bV.xj.xk[bV.f7].aN4[7], this.aN8 = bV.xj.xk[bV.f7].aN4[8], this.aN9 = bV.xj.xk[bV.f7].aN4[9], this.aNA = bV.xj.xk[bV.f7].aN4[10], this.aNC ? this.aAl = setTimeout(aNE, 16) : this.ed())
	}, this.ed = function() {
		if (8 === ab.a2X() && aI.nf()) this.aAl = setTimeout(aNE, 16);
		else {
			if (0 === this.a2Q) {
				var aMt = az.aNF();
				if (az.a5y(bV.xj.xk[bV.f7].aN4[2]), ar.a8([bV.fc, bV.fd, bV.xj.xk[bV.f7].aN4[0], bV.xj.xk[bV.f7].aN4[1]]), az.a5y(aMt), this.jE = ar.aNG(), this.a2Q++, this.aNC) return void(this.aAl = setTimeout(aNE, 16))
			}
			for (var gz, fD, aMt = this.aNC ? 10 : 1e6, aMt = bV.fd - this.aN6 - 1 < aMt ? bV.fd - this.aN6 - 1 : aMt, z8 = this.aN6 + aMt, fa = this.aN6; fa < z8; fa++)
				for (var fY = 1; fY < bV.fc - 1; fY++) ih(gz = 4 * (fD = fY + fa * bV.fc)) ? this.aNH(gz, fD, 1) : (this.aNH(gz, fD, 0), function(fY, fa, gz) {
					return 1 < fY && ih(gz - 4) || fY < bV.fc - 2 && ih(gz + 4) || 1 < fa && ih(gz - 4 * bV.fc) || fa < bV.fd - 2 && ih(gz + 4 * bV.fc)
				}(fY, fa, gz) && this.aNI(fY, fa));
			this.aN6 = z8, this.aN6 >= bV.fd - 1 ? (bV.xp.putImageData(bV.xq, 0, 0, 1, 1, bV.fc - 2, bV.fd - 2), bi.dq = !0, this.aMs()) : this.aNC && (this.aAl = setTimeout(aNE, 16))
		}
	}, this.aNH = function(gz, fD, eG) {
		aNK(gz, Math.floor(this.aNB[eG] + this.a9m[eG] * this.jE[fD] / 1e4) - bV.xu[gz])
	}, this.aNL = function(gz, eF, aNM, eG, a9m) {
		aNK(gz, Math.floor(this.aNB[eG] + (1 - eF / aNM) * a9m) - bV.xu[gz])
	}, this.aNI = function(m1, m2) {
		for (var gz, eF, aNM, aAb = m1 - this.aN8, aNN = m2 - this.aN8, z9 = m1 + this.aN8, z8 = m2 + this.aN8, aAb = aAb < 1 ? 1 : aAb, z9 = z9 > bV.fc - 2 ? bV.fc - 2 : z9, z8 = z8 > bV.fd - 2 ? bV.fd - 2 : z8, fa = aNN < 1 ? 1 : aNN; fa <=
			z8; fa++)
			for (var fY = aAb; fY <= z9; fY++) ih(gz = 4 * (fY + fa * bV.fc)) ? (aNM = this.aN7 + (this.aN8 - this.aN7) * this.jE[fY + bV.fc * fa] / 1e4, Math.abs(m1 - fY) > aNM || Math.abs(m2 - fa) > aNM || aNM <= (eF = Math.sqrt((m1 - fY) * (
				m1 - fY) + (m2 - fa) * (m2 - fa))) || this.aNL(gz, eF, aNM, 1, this.a9m[3])) : (aNM = this.aN9 + (this.aNA - this.aN9) * this.jE[fY + bV.fc * fa] / 1e4, Math.abs(m1 - fY) > aNM || Math.abs(m2 - fa) > aNM || aNM <= (eF = Math
				.sqrt((m1 - fY) * (m1 - fY) + (m2 - fa) * (m2 - fa))) || this.aNL(gz, eF, aNM, 0, this.a9m[2]))
	}
}

function aMv() {
	var tI = aNO(bV.f7);
	tI && aNP(tI[0], tI[1], tI[2], tI[3], tI[4])
}

function aNO(f7) {
	return 2 === f7 ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === f7 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === f7 ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === f7 ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === f7 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aNP(aNQ, aNR, aNS, aNT, aNU) {
	for (var fY, fa, aJx, aJy, a3n, aNX, im = aNQ.length - 1, aNV = bV.fc + bV.fd, fR = (aNV *= aNV, aNS.length), aNW = Array(fR), aC = fR - 1; 0 <= aC; aC--) aNW[aC] = aNS[aC] * aNS[aC];
	var aNY = new Array(fR),
		aDq = new Array(fR),
		aNZ = new Array(fR),
		ft = ar.aNG();
	if (void 0 === aNU)
		for (aNU = new Array(fR), aC = fR - 1; 0 <= aC; aC--) aNU[aC] = 0;
	for (aC = 1; aC < fR; aC++) aNY[aC] = aNW[aC] - aNW[aC - 1], aDq[aC] = aNT[aC] - aNT[aC - 1], aNZ[aC] = aNU[aC] - aNU[aC - 1];
	for (fY = bV.fc - 1; 0 <= fY; fY--)
		for (fa = bV.fd - 1; 0 <= fa; fa--) {
			for (aJx = aNV, aC = im; 0 <= aC; aC--) aJx = (aJy = (fY - aNQ[aC]) * (fY - aNQ[aC]) + (fa - aNR[aC]) * (fa - aNR[aC])) < aJx ? aJy : aJx;
			for (a3n = aNT[fR - 1], aNX = aNU[fR - 1], aC = 1; aC < fR; aC++)
				if (aJx < aNW[aC]) {
					a3n = aNT[aC - 1] + aIj((aJx - aNW[aC - 1]) * aDq[aC], aNY[aC]), aNX = aNU[aC - 1] + aIj((aJx - aNW[aC - 1]) * aNZ[aC], aNY[aC]);
					break
				} aNa(bV.fc * fa + fY, a3n, aNX, ft)
		}
}

function aNa(eG, a3n, aNX, ft) {
	a3n < 500 ? ft[eG] = bO.fs(ft[eG] * a3n * 2, 1e3) : 500 < a3n && (ft[eG] += bO.fs(2 * (1e4 - ft[eG]) * (a3n - 500), 1e3)), ft[eG] += bO.fs(aNX * (10 * a3n - ft[eG]), 1e3)
}

function cj() {
	var aNb;

	function aNl(a4E, iS, fY, fa, globalAlpha) {
		bV.xp.save(), bV.xp.globalAlpha = globalAlpha, bV.xp.imageSmoothingEnabled = !1, bV.xp.scale(iS, iS), bV.xp.drawImage(a4E, Math.floor(fY * (bV.fc / iS - a4E.width)), Math.floor(fa * (bV.fd / iS - a4E.height))), bV.xp.restore()
	}
	this.a8C = 0, this.a8D = 0, this.a8E = 0, this.a8F = 0, this.di = function() {
		(aNb = new Array(bV.aMl))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eF: [220, 250, 255, 220],
			tz: [190, 220, 0, 0],
			fl: [170, 200, 0, 0]
		}, aNb[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eF: [25, 0, 100, 0, 25],
			tz: [25, 0, 0, 0, 25],
			fl: [25, 0, 0, 0, 25]
		}, aNb[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eF: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tz: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fl: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aNb[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eF: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tz: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fl: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aNb[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eF: [10, 10, 20, 10, 10, 170, 212],
			tz: [20, 20, 60, 100, 100, 110, 170],
			fl: [70, 70, 160, 30, 30, 60, 120]
		}, aNb[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eF: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tz: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fl: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aNb[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eF: [10, 10, 60, 255, 255, 200, 200],
			tz: [10, 10, 60, 255, 255, 200, 200],
			fl: [80, 80, 255, 255, 255, 200, 200]
		}, aNb[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tz: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fl: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aNb[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eF: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tz: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fl: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aNb[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eF: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tz: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fl: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aNb[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eF: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tz: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fl: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aNb[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eF: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tz: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fl: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aMw = function() {
		var aNk, aC, fk, gA, iQ = function() {
				var iQ;
				return bV.xt = document.createElement("canvas"), bV.xt.width = bV.fc, bV.xt.height = bV.fd, bV.xp = bV.xt.getContext("2d", {
					alpha: !1
				}), iQ = bV.xp.getImageData(0, 0, bV.fc, bV.fd), bV.xu = iQ.data, iQ
			}(),
			j = aNb[bV.f7].j,
			eF = aNb[bV.f7].eF,
			tz = aNb[bV.f7].tz,
			fl = aNb[bV.f7].fl,
			ft = ar.aNG(),
			fR = j.length - 2,
			aNf = new Array(1 + fR),
			aNg = new Array(1 + fR),
			aNh = new Array(1 + fR),
			aNi = new Array(1 + fR);
		for (fk = fR; 0 <= fk; fk--) aNf[fk] = j[fk + 1] - j[fk], aNg[fk] = eF[fk + 1] - eF[fk], aNh[fk] = tz[fk + 1] - tz[fk], aNi[fk] = fl[fk + 1] - fl[fk];
		for (aC = bV.fc * bV.fd - 1; 0 <= aC; aC--)
			for (fk = fR; 0 <= fk; fk--)
				if (ft[aC] >= j[fk]) {
					gA = ft[aC] - j[fk], bV.xu[4 * aC] = eF[fk] + aIj(aNg[fk] * gA, aNf[fk]), bV.xu[4 * aC + 1] = tz[fk] + aIj(aNh[fk] * gA, aNf[fk]), bV.xu[4 * aC + 2] = fl[fk] + aIj(aNi[fk] * gA, aNf[fk]), bV.xu[4 * aC + 3] = 255;
					break
				} bV.xp.putImageData(iQ, 0, 0), bV.aN3(bV.f7) && ac.u3() && bV.aN3(bV.f7) && (iQ = ac.aHt("arena"), aNk = ac.aHt("territorial.io"), aNl(iQ, 5, .5, .5, .1), aNl(aNk, 2, .5, .45, .1)), bV.xr = !0, bi.dq = !0
	}, this.a61 = function() {
		for (var gz, fY, fa, aNm, iH, gC, a8D = 0, j = bV.fc, k = bV.fd, gA = j * k * 4, aNn = aDP, aNo = bV.xu, aC = j - 1; 0 <= aC; aC--) aNn[(gz = aC << 2) + 2] = aNn[gA - gz - 2] = 3;
		for (gA = 4 * j, aC = k - 1; 0 <= aC; aC--) aNn[(gz = aC * gA) + 2] = aNn[gz + gA - 2] = 3;
		for (aNm = j - 1, iH = k - 1, fa = 1; fa < iH; fa++)
			for (gA = fa * j, fY = 1; fY < aNm; fY++) gC = 1 - (aNo[(gz = gA + fY << 2) + 2] > aNo[gz + 1] && aNo[gz + 2] > aNo[gz]), aNn[gz + 2] = 6 - 5 * gC, a8D += gC;
		this.a8C = (j - 2) * (k - 2), this.a8F = 0, bV.f6(bV.f7) && (bV.a8F.aNp(), bV.a8F.aNq(4, 5)), this.a8D = aE.kW = a8D - this.a8F, this.a8E = this.a8C - this.a8D - this.a8F, this.a8E && (bV.a8F.aNq(6, 2), bV.a8F.aNr())
	}
}

function aMu() {
	var r1;
	10 === bV.f7 ? r1 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.f7 ? r1 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.f7 ? r1 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.f7 ? r1 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.f7 ? r1 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.f7 ? r1 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.f7 ? r1 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.f7 ? r1 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.f7 ? r1 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.f7 ? r1 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.f7 ? r1 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.f7 ? r1 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.f7 && (r1 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new xc).xe(r1)
}

function aMo() {
	this.xk = null, this.aNs = null, this.aNt = null, this.di = function() {
		this.aNu = [L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), "Mare Nostrum"];
		var aNv = [120, 105, 92],
			cos = [12, 12, 60],
			aNw = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aNx = [140, 130, 120],
			aNy = [12, 12, 76],
			aNz = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aO0 = [130, 117, 106],
			aO1 = [12, 12, 68],
			aO2 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xk = new Array(bV.aMl + 1), this.xk[0] = {
			j: 230,
			k: 230,
			nR: 1e3,
			nO: 2e3,
			aMt: 173
		}, this.xk[1] = {
			j: 800,
			k: 800,
			nR: 100,
			nO: 50,
			aMt: 43
		}, this.xk[2] = {
			j: 512,
			k: 512,
			nR: 128,
			nO: 32,
			aMt: 0
		}, this.xk[3] = {
			j: 960,
			k: 960,
			nR: 60,
			nO: 8,
			aMt: 0
		}, this.xk[4] = {
			j: 900,
			k: 900,
			nR: 100,
			nO: 5,
			aMt: 0
		}, this.xk[5] = {
			j: 1e3,
			k: 1e3,
			nR: 100,
			nO: 40,
			aMt: 0
		}, this.xk[6] = {
			j: 1e3,
			k: 1e3,
			nR: 100,
			nO: 20,
			aMt: 0
		}, this.xk[7] = {
			j: 1024,
			k: 1024,
			nR: 128,
			nO: 32,
			aMt: 0
		}, this.xk[8] = {
			j: 820,
			k: 820,
			nR: 200,
			nO: 100,
			aMt: 0
		}, this.xk[9] = {
			j: 1024,
			k: 1024,
			nR: 128,
			nO: 32,
			aMt: 0
		}, this.xk[10] = {
			yB: aNx,
			yC: aNy,
			aN4: aNz
		}, this.xk[11] = {
			yB: aO0,
			yC: aO1,
			aN4: aO2
		}, this.xk[12] = {
			yB: aO0,
			yC: aO1,
			aN4: aO2
		}, this.xk[13] = {
			yB: aNv,
			yC: cos,
			aN4: aNw
		}, this.xk[14] = {
			yB: aNv,
			yC: cos,
			aN4: aNw
		}, this.xk[15] = {
			yB: aNx,
			yC: aNy,
			aN4: aNz
		}, this.xk[16] = {
			yB: aNx,
			yC: aNy,
			aN4: aNz
		}, this.xk[17] = {
			yB: aNv,
			yC: cos,
			aN4: aNw
		}, this.xk[18] = {
			yB: aO0,
			yC: aO1,
			aN4: aO2
		}, this.xk[19] = {
			yB: aNv,
			yC: cos,
			aN4: aNw
		}, this.xk[20] = {
			j: 1024,
			k: 1024,
			nR: 128,
			nO: 32,
			aMt: 0
		}, this.xk[21] = {
			j: 940,
			k: 940,
			nR: 80,
			nO: 8,
			aMt: 0
		}, this.xk[22] = {
			yB: aO0,
			yC: aO1,
			aN4: aO2
		}, this.xk[23] = {
			yB: aNx,
			yC: aNy,
			aN4: aNz
		}, this.xk[24] = {
			yB: [157, 136, 117],
			yC: [16, 13, 68],
			aN4: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a8B: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aMl; aC++) this.xk[aC].name = this.aNu[aC];
		this.xk[bV.aMl] = {
			name: ""
		}, this.aNs = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aNs[aC] = aC;
		for (this.aNs[10] = 20, this.aNs[11] = 21, this.aNt = new Uint8Array(bV.aMm), aC = 0; aC < 10; aC++) this.aNt[aC] = 10 + aC;
		this.aNt[10] = 22, this.aNt[11] = 23, this.aNt[12] = 24
	}
}

function aMp() {
	this.aNp = function() {
		for (var gz, fY, gA, aNn = aDP, aNo = bV.xu, j = bV.fc, aNm = j - 1, iH = bV.fd - 1, gu = 0, fa = 1; fa < iH; fa++)
			for (gA = fa * j, fY = 1; fY < aNm; fY++) aNo[gz = gA + fY << 2] === aNo[1 + gz] && aNo[gz] === aNo[2 + gz] && (gu++, aNn[2 + gz] = 4);
		aq.a8F = gu
	}, this.aNq = function(aO5, aO6) {
		for (var aNn = aDP, j = bV.fc, aNm = j - 1, iH = bV.fd - 1, id = 0, fa = 1; fa < iH; fa++)
			for (var gA = fa * j, fY = 1; fY < aNm; fY++) {
				var f5 = 2 + (gA + fY << 2);
				aNn[f5] === aO5 && (! function(f5, id, aO5, aO6) {
					var fR = 1,
						aNn = aDP,
						fT = ad.aIa,
						a40 = [f5],
						aO8 = id >> 8 << 1,
						aO9 = 255 & id;
					aNn[f5 - 2] = aO8, aNn[f5 - 1] = aO9, aNn[f5] = 5;
					for (; fR;) {
						for (var a41 = [], aC = 0; aC < fR; aC++)
							for (var fG = a40[aC], fU = 0; fU < 8; fU++) {
								var fV = fG + fT[fU];
								aNn[fV] === aO5 && (aNn[fV - 2] = aO8, aNn[fV - 1] = aO9, aNn[fV] = aO6, a41.push(fV))
							}
						fR = (a40 = a41).length
					}
				}(f5, id, aO5, aO6), id = (id + 1) % 32768)
			}
	}, this.aNr = function() {
		for (var aNn = aDP, j = bV.fc, aNm = j - 3, iH = bV.fd - 3, aOB = 12 * j, fa = 3; fa < iH; fa++)
			for (var gA = fa * j, fY = 3; fY < aNm; fY++) {
				var f5 = 2 + (gA + fY << 2);
				2 !== aNn[f5] || 2 === aNn[f5 - 12] && 2 === aNn[12 + f5] && 2 === aNn[f5 - aOB] && 2 === aNn[f5 + aOB] || (aNn[f5 - 2] = 1 | aNn[f5 - 2])
			}
	}
}

function a60() {
	(zU = void 0 === zU ? document.createElement("canvas") : zU).width = bV.fc, zU.height = bV.fd, a64 = zU.getContext("2d", {
		alpha: !0
	}), a65 = aDP = null, a65 = a64.getImageData(0, 0, bV.fc, bV.fd), aDP = a65.data, bD.rS.xv(aDP)
}

function ck() {
	var ft, j, k, max, aOC, nO, aOE, aOF, aOG, aOH, aOI, aOJ, aOK, aOL, aOD = 1e4;

	function aOS(aOR, nR, fR) {
		var aC;
		for (aOE[0] = aOR, aC = 1; aC < fR; aC++) aOE[aC] = aOE[aC - 1] + nR, nR = aOE[aC] >= aOD ? (aOE[aC] = aOD - 1, -nR) : aOE[aC] < 0 ? (aOE[aC] = 0, -nR) : (nR += 16384 <= az.random() ? nO : -nO) < -aOC ? -aOC : aOC < nR ? aOC : nR
	}

	function aOU(fY, fa, aOV, fR) {
		(aOV ? function(fY, fa, fR) {
			var aC;
			for (aC = 0; aC < fR; aC++) ft[fa * j + fY + aC] = aOE[aC]
		} : function(fY, fa, fR) {
			var aC;
			for (aC = 0; aC < fR; aC++) ft[fa * j + fY + aC * j] = aOE[aC]
		})(fY, fa, fR)
	}

	function aOY(value, fR) {
		var aC, aMC, f5, k1 = value - aOE[fR - 1];
		if (0 != k1) {
			for (aMC = 1 + bO.fs(Math.abs(k1), fR - 1), aMC = k1 < 0 ? -aMC : aMC, aOE[fR - 1] = value, f5 = (f5 = fR - 1 - bO.fs(Math.abs(k1), Math.abs(aMC))) < 1 ? 1 : fR - 2 < f5 ? fR - 2 : f5, aC = fR - 2; f5 <= aC; aC--) aOE[aC] += k1 - (fR -
				1 - aC) * aMC;
			(k1 < 0 ? function(fR) {
				var aC;
				for (aC = fR - 2; 1 <= aC; aC--) aOE[aC] < 0 && (aOE[aC] = -aOE[aC] - 1)
			} : function(fR) {
				var aC;
				for (aC = fR - 2; 1 <= aC; aC--) aOE[aC] >= aOD && (aOE[aC] = 2 * aOD - aOE[aC] - 1)
			})(fR)
		}
	}

	function aOb(a40, a41, fR) {
		for (var aC = 0; aC < fR; aC++) a40[aC] = a41[aC]
	}

	function aOc(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aOd(a6g, gap, iI) {
		aOF.push(a6g), aOG.push(gap), aOH.push(iI)
	}
	this.a8 = function(a5E) {
		! function(a5E) {
			var aC;
			for (j = a5E[0], k = a5E[1], aOC = a5E[2], nO = a5E[3], ft = new Int16Array(j * k), max = k < j ? j : k, aOE = new Int16Array(max), aOF = [], aOG = [], aOH = [], aOI = new Array(j), aOJ = new Array(k), aC = j - 1; 0 <= aC; aC--) aOI[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aOJ[aC] = !1;
			aOK = new Int16Array(j), aOL = new Int16Array(k)
		}(a5E),
		function(fR) {
			var aOR = az.random() % aOD,
				nR = az.random() % (2 * aOC + 1) - aOC;
			aOS(aOR, nR, fR)
		}(max), aOb(aOL, aOE, k), aOU(0, 0, !0, j);
		var fY, fa, a5E = ft[0],
			fR = max,
			nR = az.random() % (2 * aOC + 1) - aOC;
		for (aOS(a5E, nR, fR), aOb(aOK, aOE, j), aOU(0, 0, !1, k), aOc(aOK), aOc(aOL), aOS(ft[j - 1], aOK[j - 1], k), aOU(j - 1, 0, !1, k), aOS(ft[j * (k - 1)], aOL[k - 1], j), aOY(ft[j * k - 1], j), aOU(0, k - 1, !0, j), aOI[j - 1] = aOI[0] = !
			0, aOJ[k - 1] = aOJ[0] = !0, aOd(0, j, !0), aOd(0, k, !1), ! function() {
				var aOf, a6g;
				for (;;) {
					if (aOf = function() {
							var aC, aOf = aOF.length - 1;
							for (aC = aOf - 1; 0 <= aC; aC--) aOG[aC] > aOG[aOf] && (aOf = aC);
							return aOf
						}(), aOG[aOf] < 5) return;
					a6g = aOF[aOf] + bO.fs(aOG[aOf], 2), (aOH[aOf] ? function(fY) {
						var fR, aOi, aC, aHF = 0,
							aOj = 0;
						for (; aOj < k - 1;) {
							for (aC = aHF + 1; aC < k; aC++)
								if (aOJ[aC]) {
									aOj = aC;
									break
								} fR = aOj - aHF + 1, aOS(ft[fY + j * aHF], 0 === aHF ? aOK[fY] : aOE[aOi - 1] - aOE[aOi - 2], fR), aOY(ft[aOj * j + fY], fR), aOU(fY, aHF, !1, fR), aOi = fR, aHF = aOj
						}
						aOI[fY] = !0
					} : function(fa) {
						var fR, aOi, aC, aHF = 0,
							aOj = 0;
						for (; aOj < j - 1;) {
							for (aC = aHF + 1; aC < j; aC++)
								if (aOI[aC]) {
									aOj = aC;
									break
								} fR = aOj - aHF + 1, aOS(ft[fa * j + aHF], 0 === aHF ? aOL[fa] : aOE[aOi - 1] - aOE[aOi - 2], fR), aOY(ft[fa * j + aOj], fR), aOU(aHF, fa, !0, fR), aOi = fR, aHF = aOj
						}
						aOJ[fa] = !0
					})(a6g), aOd(a6g, aOF[aOf] + aOG[aOf] - a6g, aOH[aOf]), aOG[aOf] = a6g - aOF[aOf] + 1
				}
			}(), fY = 0; fY < j; fY++)
			if (!aOI[fY])
				for (fa = 0; fa < k; fa++) aOJ[fa] || ! function(fY, fa) {
					var value = ft[fa * j + fY - 1] + ft[(fa - 1) * j + fY],
						a8U = 2;
					aOI[fY + 1] && (a8U++, value += ft[fa * j + fY + 1]);
					aOJ[fa + 1] && (a8U++, value += ft[(fa + 1) * j + fY]);
					ft[fa * j + fY] = bO.fs(value, a8U)
				}(fY, fa)
	}, this.aNG = function() {
		return ft
	}, this.aMx = function() {
		ft = null
	}
}

function aIj(fk, fl) {
	return 0 <= fk ? bO.fs(fk, fl) : -bO.fs(-fk, fl)
}

function kI(ft) {
	return ft * ft
}

function a7f(fk, fl) {
	return fl < fk ? fk : fl
}

function aCu(fk, fl) {
	return fk < fl ? fk : fl
}

function aA6(fk, ft, fl) {
	return ft < fk ? fk : fl < ft ? fl : ft
}

function aOl(ft, fR) {
	for (var ei = bO.fs(ft + 1, 2), aC = 0; aC < fR; aC++) ei = bO.fs(ei + bO.fs(ft, ei), 2);
	return ei
}

function aKj(ft, fR) {
	return ft < 1 ? 0 : aOl(ft, fR)
}

function aOm(nn, no, th, a9p, o0, o1, ti, uQ) {
	return !(nn + th <= o0 || no + a9p <= o1 || o0 + ti <= nn || o1 + uQ <= no)
}

function aOn(nn, no, th, a9p, o0, o1, ti, uQ) {
	return nn <= o0 && no <= o1 && o0 + ti <= nn + th && o1 + uQ <= no + a9p
}

function xm(ft) {
	return Math.floor(!!ft * (1 + Math.log2(ft + .5)))
}

function c0() {
	this.fs = function(fk, fl) {
		return Math.floor((fk + .5) / fl)
	}, this.aOo = function(fk, fl) {
		return Math.floor(fk * (fl + .5))
	}, this.sqrt = function(ft) {
		return ~~Math.sqrt(ft + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iZ = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aOp = function(gA, gC, gE) {
		return Math.max(Math.min(gA, gC), gE)
	}, this.aOq = function(aOr, aOs, fY, fa) {
		fY -= aOr, aOr = fa - aOs, fa = 0;
		return 0 == fY ? fa = 0 <= aOr ? Math.PI : 0 : (fa = Math.atan(aOr / fY), fa += 0 < fY ? .5 * Math.PI : 1.5 * Math.PI), fa
	}, this.log2 = function(ft) {
		return Math.floor(!!ft * (1 + Math.log2(ft + .5)))
	}, this.log10 = function(ft) {
		return Math.floor(Math.log10(ft + .5))
	}, this.aOu = function(aOv, aOw, aOx, aOy, aOz) {
		return aOx - aOz < aOv && aOv < aOx + aOz && aOy - aOz < aOw && aOw < aOy + aOz
	}, this.yj = function(aAW, aAY) {
		return aAW * aAW + aAY * aAY
	}
}

function dI() {
	this.z = new aP0, this.tb = 0;
	var aP1 = new Array(32);

	function aP4() {
		for (var fR = aP1.length, aC = 0; aC < fR; aC++) aP1[aC] = null
	}
	this.di = function() {
		for (var aP2, aP3 = document.body.firstChild; aP3;) aP2 = aP3.nextSibling, !document.body.contains(aP3) || "DIV" !== aP3.tagName && "INPUT" !== aP3.tagName && "BUTTON" !== aP3.tagName || u.removeChild(document.body, aP3), aP3 = aP2
	}, this.v = function(eG, a2c, a5E) {
		void 0 === a2c && (a2c = this.tb), bi.dq = !0, 0 === eG && (0 === ab.a2X() ? eG = 5 : a1.a2.setState(13)), this.sa(), this.tb === eG && (a2c = aP1[eG].a2c, aP1[eG] = null), this.tb = eG;
		var lh = aP1[eG];
		if (!lh || 4 === eG || 7 === eG || 8 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 15 === eG || 18 === eG || 20 <= eG && eG <= 28 || 32 === eG || 33 === eG) {
			if (0 === eG) return void aP4();
			1 === eG ? lh = new aP5 : 2 === eG ? lh = new aP6 : 3 === eG ? lh = new aP7 : 4 === eG || 9 === eG || 10 === eG || 11 === eG || 13 === eG || 33 === eG ? lh = a5E : 5 === eG ? lh = new aP8 : 6 === eG ? lh = new aP9 : 7 === eG ? lh =
				new aPA(u.z.aPB) : 8 === eG ? lh = a5E : 12 === eG ? lh = new aPC : 14 === eG ? lh = new aPD : 15 === eG ? lh = new aPA(u.z.aPE) : 16 === eG ? lh = new aPF : 17 === eG ? lh = new aPG : 18 === eG ? lh = new aPH : 19 === eG ? lh =
				new aPI : 20 === eG ? lh = new aPJ : 21 === eG ? lh = new aPK : 22 === eG ? lh = new aPL : 23 === eG ? lh = new aPM : 24 === eG ? lh = new aPN : 25 === eG ? lh = new aPO : 26 === eG ? lh = new aPP : 27 === eG ? lh = new aPQ :
				28 === eG ? lh = new aPR : 29 === eG ? lh = new aPS : 30 === eG ? lh = new aPT : 31 === eG ? lh = new aPU : 32 === eG && (lh = new aPV), lh.a2c = a2c, aP1[eG] = lh
		}
		lh.show(a5E)
	}, this.a2W = function() {
		this.iD() && this.aPW(this.a2b().a2c)
	}, this.aPW = function(eG) {
		this.iD() && (aP1[eG] ? (this.sa(), bi.dq = !0, this.tb = eG, aP1[eG].show()) : this.v(eG))
	}, this.sa = function() {
		this.iD() && aP1[this.tb].sa()
	}, this.y = function() {
		this.iD() && (aP1[this.tb].sa(), aP4(), this.tb = 0, a1.a2.setState(13))
	}, this.vv = function() {
		var lh;
		this.iD() && (lh = aP1[this.tb]).vv && lh.vv()
	}, this.resize = function() {
		if (!this.iD()) return !1;
		aP1[this.tb].resize()
	}, this.he = function(fY, fa) {
		var lh;
		this.iD() && (lh = aP1[this.tb]).he && lh.he(fY, fa)
	}, this.a2u = function(fY, fa) {
		var lh;
		this.iD() && (lh = aP1[this.tb]).a2u && lh.a2u(fY, fa)
	}, this.a3I = function() {
		var lh;
		this.iD() && (lh = aP1[this.tb]).a3I && lh.a3I()
	}, this.a2x = function(m1, m2, deltaY) {
		var lh;
		this.iD() && (lh = aP1[this.tb]).a2x && lh.a2x(m1, m2, deltaY)
	}, this.a3S = function(code) {
		var lh;
		return !!this.iD() && ((lh = aP1[this.tb]).a3S && lh.a3S(code), !0)
	}, this.ed = function() {
		var lh;
		this.iD() && (lh = aP1[this.tb]) && lh.ed && lh.ed()
	}, this.iD = function() {
		return 0 < this.tb
	}, this.a2b = function() {
		return aP1[this.tb]
	}, this.a6R = function(eG) {
		return aP1[eG]
	}, this.aPX = function() {
		return aP1
	}, this.removeChild = function(vT, a4j) {
		try {
			vT.removeChild(a4j)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aPA(data) {
	var aPY, aPZ;

	function aPc(rF, aQL) {
		if (!data.aPa) {
			if (data.aQE) {
				if (aQL) return
			} else {
				if (!aQL) return;
				if (data.x9 < 1e4) return
			}
			var aQO, aPu = new qx,
				aQM = 1e5 <= data.x9,
				aQN = aPu.r0(aQL ? (aQM ? "⚠️ " : "") + L(255) : L(256)),
				aQQ = (aQM && (aQN.style.color = "yellow"), aQL ? aPu.r2(L(257, [bD.sJ.a5V(data.x9, .01, 0)])) : ((aQO = new s8({
					value: data.aQP,
					eG: -1
				})).e.readOnly = !0, aQO.e.type = "password", aPu.rB(aQO), aPu.rB(new sm([new x(L(191), function(e) {
					return e.textContent === L(191) ? (e.textContent = L(192), aQO.e.type = "text") : (e.textContent = L(191), aQO.e.type = "password"), !0
				}).button, new x(L(188), function(e) {
					return bD.rK.a4h(aQO.e), bD.rK.vZ(e), !0
				}).button]))), aPu.r6(L(aQL ? 256 : 258)).style.marginTop = "0.75em", new s8({
					value: "",
					eG: -1
				}, 0, 0)),
				aQS = (aQQ.e.type = "email", aQQ.e.autocomplete = "email", aQQ.e.name = "email", aQQ.e.inputMode = "email", aQQ.e.spellcheck = !1, aPu.rB(aQQ), aPu.rB(new sm([new x(L(259), function(e) {
					return b1.aGd.aQR({
						action: 3,
						r1: aQQ.e.value.trim().substring(0, 63)
					}), bD.rK.vZ(e), !0
				}).button])), aQL && aPu.r2(L(260)), aPu.r6(L(261)).style.marginTop = "0.75em", new s8({
					value: "",
					eG: -1
				}, 1));
			aPu.rB(aQS), aPu.rB(new sm([new x(L(262), function() {
				b1.aGd.aGe({
					action: 4,
					tZ: "",
					value: Math.floor(+aQS.e.value)
				}), u.v(8, u.a2b().a2c, new tc(18))
			}).button])), rF.push(aPu)
		}
	}
	this.show = function() {
		data.aPa && bL.aQl("account", data.tZ), aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(data.username, [new x("⬅️ " + L(40), function() {
		bL.clear(), u.a2W()
	}), new x(data.aPa ? "🔄 " + L(164) : L(165), function() {
		u.v(8, data.aPa ? u.a2b().a2c : void 0, new tc(25, {
			action: 0,
			tZ: data.tZ,
			ta: data.ta
		}))
	}, 0, 0, 1)]), aPZ = new rD(aPY.vm, function() {
		var rF = [];
		aPc(rF, 1), rF.push(function() {
				var aPu = new qx;
				aPu.r0(L(228)), data.aQE && (aPu.r6("✅ " + L(229)).style.marginBottom = "0.75em");
				var a27 = data.aQF;
				a27 < 1 ? (aPu.r6(L(230)), 0 === data.aQG ? aPu.r2(L(231)) : 1 === data.aQG ? aPu.r2(L(232)) : 2 === data.aQG ? aPu.r2(L(233)) : 3 === data.aQG ? aPu.r2(L(234)) : 4 === data.aQG ? aPu.r2(L(235)) : 5 === data.aQG ? aPu.r2(
					L(236)) : 6 === data.aQG ? aPu.r2(L(237)) : aPu.r2(L(238))) : (aPu.r6(L(239)), a27 = a27 < 2 ? L(240) : a27 < 61 ? 2 === a27 ? L(241) : L(242, [a27 - 1]) : a27 < 84 ? 61 === a27 ? L(243) : L(244, [a27 - 60]) :
					a27 < 255 ? 84 === a27 ? L(245) : L(246, [a27 - 83]) : L(247), aPu.r2(a27));
				{
					var r3, aPz;
					aPu.rB(new sw), data.aPa && (r3 = aPu.r2(), aPu.rB(new sm([new x(bm.wK.us(data.tZ) ? L(248) : L(249), function(e) {
						return bm.wK.wX(data.tZ) ? (e.textContent = L(248), aPz(1)) : (e.textContent = L(249), aPz(0)), !0
					}).button])), aPz = function(ft) {
						r3.textContent = ft ? L(250) : ""
					}, bm.wK.us(data.tZ) && aPz(1), aPu.rB(new sw))
				}
				var rO, s7 = new s8({
					value: data.username,
					eG: -1
				});
				s7.e.readOnly = !0, aPu.rB(s7), aPu.rB(new sm([new x(L(188), function(e) {
					return bD.rK.a4h(s7.e), bD.rK.vZ(e), !0
				}).button])), data.aPa || aPu.r2(L(251));
				(data.aQH || data.aQI || data.aQJ) && (aPu.rB(new sw), aPu.r2(L(252)), data.aQH && (aPu.r2("• Account Timeout").style.color = "orange"), data.aQI && ((rO = aPu.r2("• Muted")).style.color = "orange", rO.style.marginTop =
					"0.5em"), data.aQJ) && ((rO = aPu.r2("• Redacted")).style.color = "orange", rO.style.marginTop = "0.5em");
				data.aPa && (aPu.rB(new sw), aPu.r6(b1.z.aPv("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aPu.rB(new sm([new x(L(253), function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 0
					}), bD.rK.vZ(e), !0
				}, bE.p3).button])), aPu.rB(new sm([new x(L(254), function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 1
					}), bD.rK.vZ(e), !0
				}, bE.p3).button])), aPu.rB(new sm([new x("Cheater", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 2
					}), bD.rK.vZ(e), !0
				}, bE.p3).button])), aPu.rB(new sm([new x("False Reporter", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 3
					}), bD.rK.vZ(e), !0
				}, bE.p3).button])), a27 = "CRTOR" === (a27 = bm.eV.data[105].value) || "ADMIN" === a27) && (aPu.rB(new sm([new x("Block Account", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 4
					}), bD.rK.vZ(e), !0
				}, bE.p1).button])), aPu.rB(new sm([new x("Ban IP", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 5
					}), bD.rK.vZ(e), !0
				}, bE.p1).button])), aPu.rB(new sm([new x("Gold Seizure", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 6
					}), bD.rK.vZ(e), !0
				}, bE.p1).button])), aPu.rB(new sm([new x("Remove Punishments", function(e) {
					return b1.aGd.aGe({
						action: 3,
						tZ: data.tZ,
						value: 7
					}), bD.rK.vZ(e), !0
				}, bE.oq).button])));
				return aPu
			}()),
			function(rF) {
				var aPu, r3, aDf, aQU, aQ0, aQ2, aQ1;
				data.aPa || ((aPu = new qx).r0(L(263)), (r3 = aPu.r2(data.aQT.length + " / 160")).style.textAlign = "center", aDf = !0, (aQU = new w4(0, 1, function(e) {
					e = e.target.value.length;
					r3.textContent = e + " / 160", 160 < e ? aDf && (aDf = !1, aQ2.re(1)) : aDf || (aDf = !0, aQ2.re(0))
				})).e.rows = 6, aQU.e.style.fontSize = "1em", aQU.wB(data.aQT), aPu.rB(aQU), 0 !== data.aQV ? (aQ2 = new x(L(264), function() {
					if (!aDf) return !0;
					u.v(8, u.a2b().a2c, new tc(29, {
						action: 1,
						r1: aQU.wC().substring(0, 160)
					}))
				}, 0, 0, 1), aPu.rB(new sm([aQ2.button])), aPu.rB(new sm([new x(1 === data.aQV ? L(265) : L(266), function() {
					u.v(8, u.a2b().a2c, new tc(29, {
						action: 0,
						r1: ""
					}))
				}, 0, 0, 1).button])), aPu.r2(1 === data.aQV ? L(267, [data.aQW - 1]) : L(268, [data.aQW - 1])), aPu.r2(L(269, [data.aQX]))) : (aQ0 = new x(L(270), function() {
					if (!aQU.e.readOnly) return !0;
					u.v(8, u.a2b().a2c, new tc(29, {
						action: 1,
						r1: aQU.wC().substring(0, 160)
					}))
				}, 1), aQ2 = new x(L(185), function(e) {
					if (e.textContent === L(185)) {
						if (!aDf) return !0;
						e.textContent = L(186), aQU.e.readOnly = !0, aQ0.re(0), aQ0.button.style.color = bE.pN
					} else aQ1();
					return !0
				}), aPu.rB(new sm([aQ2.button])), aPu.r2(L(269, [data.aQX])), aQ1 = function() {
					aQ2.button.textContent = L(185), aQU.e.readOnly = !1, aQ0.re(1), aQ0.button.style.color = bE.oN
				}, aPu.rB(new sm([aQ0.button]))), rF.push(aPu))
			}(rF),
			function(rF) {
				var aPu;
				data.aPa && 0 !== data.aQV && ((aPu = new qx).r0(L(271)), aPu.r4(data.aQT), aPu.rB(new sm([new x(L(272, 0, "Report"), function(e) {
					return b1.z.ee(0) && (bD.rK.vZ(e), b1.aGd.aQY({
						action: 5,
						tZ: data.tZ
					})), !0
				}, 0, 0, 1).button])), rF.push(aPu))
			}(rF), rF.push(function() {
				var aPu = new qx,
					aPw = (aPu.r0(L(166)), aPu.r6(b1.z.aPv("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180)]),
					eF = data.aPx;
				return aPu.r6(L(181) + bD.sJ.a5V(data.x9, .01, 2) + "<br>" + L(182) + (eF + 1) + " / " + data.x8 + "<br>" + L(183) + aPw[function(eF, x9) {
					if (eF < 10) return 0;
					if (eF < 30) return 1;
					if (eF < 60) return 2;
					if (3e4 <= (x9 = bO.fs(x9, 100))) return 3;
					if (12e3 <= x9) return 4;
					if (7e3 <= x9) return 5;
					if (3e3 <= x9) return 6;
					if (1e3 <= x9) return 7;
					if (500 <= x9) return 8;
					if (200 <= x9) return 9;
					if (70 <= x9) return 10;
					if (20 <= x9) return 11;
					if (3 <= x9) return 12;
					return 13
				}(eF, data.x9)]), aPu
			}()), data.aPa && rF.push(function() {
				var aPu = new qx,
					s7 = (aPu.r0(L(184)), aPu.r6(b1.z.aPv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new s8({
						value: bm.eV.data[147].value,
						eG: -1
					}, 1, void 0, function(e) {
						bm.po.pp(147, aPz(e.target.value))
					})),
					aQ0 = (aPu.rB(s7), new x(L(14), function(e) {
						return s7.e.readOnly && b1.z.ee(0) && (bD.rK.vZ(e), aQ1(), b1.aGd.aGe({
							action: 0,
							tZ: data.tZ,
							value: parseInt(bm.eV.data[147].value, 10)
						})), !0
					}, 1)),
					aQ2 = new x(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), s7.e.readOnly = !0, aQ0.re(0), aQ0.button.style.color = bE.pN, bm.po.pp(147, s7.e.value), aPz(bm.eV.data[147].value)) : aQ1(), !0
					}),
					r3 = (aPu.rB(new sm([aQ2.button])), aPu.r2()),
					aPz = function(ft) {
						r3.innerHTML = u.z.aQ3(ft, bm.eV.data[105].value, data.tZ)
					},
					aQ1 = function() {
						aQ2.button.textContent = L(185), s7.e.readOnly = !1, aQ0.re(1), aQ0.button.style.color = bE.oN
					};
				return aPz(bm.eV.data[147].value), aPu.rB(new sm([aQ0.button])), aPu
			}());
		rF.push(function() {
			var aPu = new qx,
				s7 = (aPu.r0(L(187)), new s8({
					value: data.tZ,
					eG: -1
				})),
				aQ4 = (s7.e.readOnly = !0, aPu.rB(s7), aPu.rB(new sm([new x(L(188), function(e) {
					return bD.rK.a4h(s7.e), bD.rK.vZ(e), !0
				}).button])), aPu.rB(new sw), new s8({
					value: data.tZ,
					eG: -1
				}));
			return aPu.rB(aQ4), aPu.rB(new sm([new x(L(189), function(e) {
				u.v(8, u.a2b().a2c, new tc(25, {
					action: 0,
					tZ: aQ4.e.value,
					ta: 0
				}))
			}).button])), aPu
		}()), data.aPa || (rF.push(function() {
			var aPu = new qx,
				aQ5 = (aPu.r0(L(190)), new s8(bm.eV.data[106]));
			return aQ5.e.readOnly = !0, aQ5.e.type = "password", aPu.rB(aQ5), aPu.rB(new sm([new x(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aQ5.e.type = "text") : (e.textContent = L(191), aQ5.e.type = "password"), !0
			}).button, new x(L(188), function(e) {
				return bD.rK.a4h(aQ5.e), bD.rK.vZ(e), !0
			}).button])), aPu.rB(new sm([new x(L(193), function() {
				u.v(8, u.a2b().a2c, new tc(15))
			}).button])), aPu.r0(L(194), "0.8em"), aPu.r2(L(195)), aPu.r2(L(196)), aPu.r2(L(197)), aPu
		}()), rF.push(function() {
			var aPu = new qx;
			return aPu.r0(L(198)), aPu.rB(new sm([new x(L(199), function() {
				u.v(6, u.a2b().a2c)
			}).button])), aPu.rB(new sm([new x(L(200), function() {
				bm.po.pp(105, ""), u.v(8, u.a2b().a2c, new tc(18))
			}).button])), aPu.rB(new sm([new x(L(201) + bm.eV.data[105].value, function() {
				u.v(4, 0, new w(L(202), L(203), !0, [new x("⬅️ " + L(40), function() {
					u.v(7, u.a6R(7).a2c)
				})]))
			}, bE.p3).button])), aPu
		}()), rF.push(function() {
			function aQ7(eG) {
				aQ6[0].re(0 === eG ? bE.oZ : bE.ol), aQ6[1].re(0 === eG ? bE.oZ : bE.p3)
			}
			var r9, aQ6, aPu = new qx;
			aPu.r0(L(207)), aPu.r2(L(208)), bm.z.ws();
			return aQ6 = [new x(L(209), function() {
				var eG = Math.min(bm.eV.data[117].value, r9.rA.length - 1);
				eG < 1 || (eG = bm.z.ww(eG), bm.po.pp(105, eG.tZ), bm.po.pp(106, eG.password), u.v(8, u.a2b().a2c, new tc(18)))
			}, bE.oZ, 1), new x(L(206), function() {
				var eG = Math.min(bm.eV.data[117].value, r9.rA.length - 1);
				if (!(eG < 1)) {
					r9.rA[eG].remove(), r9.rA.splice(eG, 1);
					for (var aC = eG; aC < r9.rA.length; aC++) r9.rA[aC].name = "" + aC;
					bm.z.wv(eG), eG = bm.eV.data[117].value, r9.rA[eG].textContent = r9.rA[eG].textContent.replace("⚪", "🟢"), aQ7(eG)
				}
			}, bE.oZ, 1)], r9 = new vc(bm.eV.data[117], aQ7), aQ7(0), r9.rA[0].style.marginTop = "0.5em", aPu.r8(r9), aPu.rB(new sm([aQ6[0].button])), aPu.rB(new sm([aQ6[1].button])), aPu
		}()));
		return rF.push(function() {
				var aPu = new qx,
					aPw = (aPu.r0(L(213)), [L(214), L(215), L(216), L(217)]),
					eF = data.aQ8;
				return aPu.r6(L(218) + (data.a1q / 100).toFixed(2) + "<br>" + L(182) + (eF + 1) + " / " + data.x8 + "<br>" + L(183) + aPw[eF < 10 ? 0 : eF < 50 ? 1 : eF < 200 ? 2 : 3]), aPu
			}()), rF.push(function() {
				var aPu = new qx;
				return aPu.r0(L(210)), aPu.r6(L(211) + bD.sJ.a5V(data.x5, .1, 1) + "<br>" + L(182) + (data.x6 + 1) + " / " + data.x8 + "<br>" + L(212) + data.x7), aPu
			}()),
			function(rF) {
				var aPu = new qx,
					aQZ = data.xC,
					aQa = (aPu.r0(L(273)), aPu.r6(L(274, [data.xA.length ? "[" + data.xA + "]" : "-"])), aPu.r6(L(275, [bD.sJ.a5V(aQZ, .01, 2)])), aPu.r6(L(276, [data.xE + 1 + " / " + data.x8])), data.xF),
					aQb = (aPu.r6(L(277, [bD.sJ.a5V(aQa, .1, 1)])), data.xH);
				aPu.r6(L(278, [aQb])), aPu.r6(L(279, [bD.sJ.a5V(aQa / Math.max(aQb, 1), .1, 2)])), aQZ = data.xD, aPu.r0(L(280), "0.8em"), aPu.r6(L(274, [data.xB.length ? "[" + data.xB + "]" : "-"])), aPu.r6(L(275, [bD.sJ.a5V(aQZ, .01, 2)])),
					aQa = data.xG, aPu.r6(L(277, [bD.sJ.a5V(aQa, .1, 1)])), aQb = data.xI, aPu.r6(L(278, [aQb])), aPu.r6(L(279, [bD.sJ.a5V(aQa / Math.max(aQb, 1), .1, 2)])), aPu.r6(b1.z.aPv("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					rF.push(aPu)
			}(rF),
			function(rF) {
				var aPu = new qx;
				aPu.r0(L(281)), aPu.r6(L(218) + (data.aQc / 10).toFixed(1) + "<br>" + L(183) + (data.aQd.length ? L(282, [data.aQd]) : L(283))), data.aPa && aPu.rB(new sm([new x(L(284), function(e) {
					return b1.z.ee(0) && (bD.rK.vZ(e), b1.aGd.aQY({
						action: 4,
						tZ: data.tZ
					})), !0
				}, 0, 0, 1).button]));
				aPu.r6(b1.z.aPv("/wiki/clans"), "0.75em").style.marginTop = "0.8em", rF.push(aPu)
			}(rF), rF.push(function() {
				var aPu = new qx;
				if (aPu.r0(L(225)), aPu.r6(L(226) + data.aQB + "<br>" + L(182) + (data.aQC + 1) + " / " + data.x8 + "<br>" + L(183) + br.eI(data.aQC)), data.aPa) {
					var s7 = new s8({
							value: bm.eV.data[157].value,
							eG: -1
						}, 1, void 0, function(e) {
							bm.po.pp(157, aPz(e.target.value))
						}),
						aQ2 = (s7.e.style.marginTop = "0.6em", aPu.rB(s7), new x(L(185), function(e) {
							return e.textContent === L(185) ? (e.textContent = L(186), s7.e.readOnly = !0, aQD[0].re(0), aQD[1].re(0), aQD[0].button.style.color = bE.pN, aQD[1].button.style.color = bE.pN, aPz(bm.eV.data[157]
								.value)) : aQ1(), !0
						})),
						aQD = (aPu.rB(new sm([aQ2.button])), [new x("−", function(e) {
							return s7.e.readOnly && b1.z.ee(0) && (bD.rK.vZ(e), aQ1(), b1.aGd.aGe({
								action: 2,
								tZ: data.tZ,
								value: bO.iZ(parseInt(bm.eV.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new x("+", function(e) {
							return s7.e.readOnly && b1.z.ee(0) && (bD.rK.vZ(e), aQ1(), b1.aGd.aGe({
								action: 1,
								tZ: data.tZ,
								value: bO.iZ(parseInt(bm.eV.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						r3 = aPu.r2(),
						aPz = function(ft) {
							return ft = bD.gn.a5B(ft, 3, 32767), r3.textContent = L(227, [ft - 1, ft, bm.eV.data[105].value]), ft
						};
					aPu.rB(new sm([aQD[0].button, aQD[1].button]));
					for (var aC = 0; aC < 2; aC++) aQD[aC].button.style.fontSize = "1.6em";
					var aQ1 = function() {
						aQ2.button.textContent = L(185), s7.e.readOnly = !1, aQD[0].re(1), aQD[1].re(1), aQD[0].button.style.color = bE.oN, aQD[1].button.style.color = bE.oN
					};
					aPz(bm.eV.data[157].value)
				}
				return aPu
			}()),
			function(rF) {
				var aPu, a4g;
				data.aPa && !data.aQe || (0 === a1.id || data.aPa || data.aQe) && ((aPu = new qx).r0("Patreon"), !data.aPa && data.aQf ? aPu.rB(new sm([new x(L(191), function() {
					b1.aGd.aQY({
						action: 7,
						tZ: data.tZ
					}), data.aQf = 0, u.v(7)
				}).button])) : data.aQe ? (aPu.r6(L(285, [(data.aQg / 100).toFixed(2)]) + "<br>" + L(286, [1 + data.aQh + " / " + data.aQi]) + "<br>" + L(287, [data.aQj ? L(288) : L(289)])), data.aPa || aPu.rB(new sm([new x(L(290),
					function() {
						b1.aGd.aQY({
							action: 8,
							tZ: data.tZ
						}), data.aQe = 0, bm.po.pp(160, 0), u.v(7)
					}).button]))) : (aPu.r6(L(291), "0.75em").style.marginBottom = "0.3em", aPu.r6("  • " + L(292), "0.75em").style.whiteSpace = "pre", aPu.r6("  • " + L(293), "0.75em").style.whiteSpace = "pre", aPu.r6("  • " + L(
						294), "0.75em").style.whiteSpace = "pre", aPu.r6(L(295), "0.75em").style.marginTop = "1.0em", aPu.r6(L(296), "0.75em").style.marginTop = "1.0em", aPu.r6("<a href='" + bN.aQk +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a4g = "https://www.patreon.com/oauth2/authorize?state=" + data.tZ +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a1n() + "/", aPu.r6(L(297), "0.75em").style.marginTop = "1.0em", aPu.r6("<a href='" +
						a4g + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aPa || (aPu.rB(new sw), aPu.rB(new sm([new x(L(192), function() {
						b1.aGd.aQY({
							action: 6,
							tZ: data.tZ
						}), data.aQf = 1, u.v(7)
					}).button])), aPu.r6(L(298), "0.75em").style.marginTop = "0.75em")), rF.push(aPu))
			}(rF), rF.push(function() {
				var aPu = new qx,
					aPw = (aPu.r0(L(219)), [L(220), L(221), L(222), L(223), "Scout", L(224)]),
					eF = data.aQ9;
				return aPu.r6(L(218) + (data.aQA / 100).toFixed(2) + "<br>" + L(182) + (eF + 1) + " / " + data.x8 + "<br>" + L(183) + aPw[eF < 3 ? 0 : eF < 20 ? 1 : eF < 100 ? 2 : eF < 500 ? 3 : eF < 2e3 ? 4 : 5]), aPu.r6(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", aPu
			}()),
			function(rF) {
				var aPu, r9, aQ6, eG, aQ7;
				data.aPa || bm.wK.get().length && ((aPu = new qx).r0(L(204)), eG = 0, aQ7 = function() {
					var aDK = bm.wK.get().length;
					aQ6[0].re(eG === aDK ? bE.oZ : bE.ol), aQ6[1].re(eG === aDK ? bE.oZ : bE.p3)
				}, aQ6 = [new x(L(205), function() {
					u.v(8, void 0, new tc(25, {
						action: 0,
						tZ: bm.wK.get()[eG],
						ta: 0
					}))
				}, bE.oZ, 1), new x(L(206), function() {
					bm.wK.wZ(eG), r9.rA[eG].remove(), r9.rA.splice(eG, 1);
					for (var aC = eG; aC < r9.rA.length; aC++) r9.rA[aC].name = "" + aC;
					bm.wK.get().length && (eG = Math.max(eG - 1, 0), r9.rA[eG].textContent = r9.rA[eG].textContent.replace("⚪", "🟢")), aQ7()
				}, bE.oZ, 1)], aQ7(), (r9 = new vc(bm.wK.wW(), function(aC) {
					eG = aC, aQ7()
				})).rA[0].style.marginTop = "0.5em", aPu.r8(r9), aPu.rB(new sm([aQ6[0].button])), aPu.rB(new sm([aQ6[1].button])), rF.push(aPu))
			}(rF), aPc(rF, 0), rF
	}())
}

function aPL() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.aIncomeType ? (bD.rS.a44(aQo.wC(), aE.data.aIncomeData, 255), bD.rS.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(299), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(301), L(302), L(303)],
			value: aE.data.aIncomeType
		}, function(eG) {
			aQr(), 2 !== eG || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fO)), aE.data.aIncomeType = eG, u.v(22)
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu;
		1 === aE.data.aIncomeType && ((aPu = new qx).r0("Value"), aPu.rB(new s8({
			eG: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iZ(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), rF.push(aPu))
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.aIncomeType && ((aPu = new qx).r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.aIncomeData, 4)), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aPO() {
	var aQm, aQn, aQo;

	function aQp() {
		aQr(), 3 !== aE.data.botDifficultyType || bD.rS.a3s(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		3 === aE.data.botDifficultyType && bD.rS.a44(aQo.wC(), aE.data.botDifficultyData, aF.kx.length - 1)
	}

	function aQw(rF, eG) {
		var aPu = new qx,
			value = (aPu.r0(eG < 0 ? L(65) : L(64) + " " + bj.a1j[eG % 9]), 0 <= eG && (aPu.r6(L(306) + ": " + aE.data.teamPlayerCount[eG]).style.marginBottom = "1em"), eG < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eG]);
		aPu.r8(new vc({
			tI: aF.kx,
			value: value
		}, function(iJ) {
			eG < 0 ? aE.data.botDifficultyValue = iJ : aE.data.botDifficultyTeam[eG] = iJ
		})), rF.push(aPu)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(65), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, function() {
		var rF = [];
		if (function(rF) {
				var aPu = new qx,
					tI = (aPu.r0(L(300)), [L(302), L(304), L(305), L(303)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), tI.splice(2, 1));
				aPu.r8(new vc({
					tI: tI,
					value: value
				}, function(eG) {
					aQr(), aE.data.botDifficultyType = eG, 0 === aE.data.gameMode && 2 === eG && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fO)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), rF.push(aPu)
			}(rF), 0 === aE.data.botDifficultyType) aQw(rF, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aQw(rF, aC);
		else 3 === aE.data.botDifficultyType && ! function(rF) {
			var aPu = new qx;
			aPu.r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.botDifficultyData, 8)), aPu.rB(aQo), rF.push(aPu)
		}(rF);
		return rF
	}())
}

function aQx(data) {
	var aPY, aQy, aQz, aR0, aR1, aR2, aR3, colors, aR4, aR5, aR6 = 0,
		aR7 = 0,
		aR8 = !1,
		aR9 = !1,
		aRA = [1, 5, 60, 240, 1440, 10080, 43200];

	function aRe(m1, m2) {
		! function(m1, m2) {
			return aQy < m1 && m1 < aQy + aR0 && aQz < m2 && m2 < aQz + aR1
		}(aR6 = m1, aR7 = m2) ? (aR8 && (bi.dq = !0), aR8 = !1) : (aR8 = !0, bi.dq = !0)
	}
	this.show = function() {
		aR9 = bm.eV.data[127].value, aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize();
		var ei = i.l,
			vu = aPY.vr(),
			aRJ = ei * vu.vt,
			ei = ei * vu.sd;
		aR2 = bD.rK.u0(.06), aR3 = bD.rK.u0(.04), aQy = bD.rK.u0(.06), aQz = ei + aR2, aR0 = i.j - aQy - aR3, aR1 = aRJ + ei - aQz - aR3
	}, this.vv = function() {
		aPY.vv(),
			function() {
				var aC, aRG, gu, fY, fk, h = data.data,
					aRN = 1,
					aRO = .125,
					aRP = aR9 ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aRG = h[aC].aRG, gu = aRG.length, aRN = Math.max(gu, aRN), fk = 0; fk < gu; fk++) aRO = Math.max(aRG[fk], aRO), aRP = Math.min(aRG[fk], aRP);
				var no = aQz + aR1,
					zI = aR1 / (aRO - aRP),
					zH = 1 / (aRN - 1);
				for (vw.lineWidth = bf.a0L, aC = 0; aC < h.length; aC++) {
					for (aRG = h[aC].aRG, gu = aRG.length, fY = aQy, vw.beginPath(), vw.moveTo(fY + aR0, no - zI * (aRG[gu - 1] - aRP)), fk = gu - 2; 0 <= fk; fk--) vw.lineTo(fY + zH * fk * aR0, no - zI * (aRG[fk] - aRP));
					vw.strokeStyle = colors[aC], vw.stroke()
				}(function(aRP, aRO, no, zI) {
					vw.font = bD.rK.t8(0, .25 * aQy), bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 2), vw.fillStyle = colors[0];
					for (var fY = .92 * aQy, aC = 0; aC < 3; aC++) {
						var ft = aRP + aC * (aRO - aRP) / 2;
						vw.fillText((ft / 1e3).toFixed(3), fY, no - zI * (ft - aRP))
					}
				})(aRP, aRO, no, zI),
				function(aRN) {
					var fa = aQz + aR1 + .15 * aR3;
					vw.font = bD.rK.t8(0, Math.min(.4 * aR3, .028 * i.j)), bD.rK.textBaseline(vw, 0), bD.rK.textAlign(vw, 2), vw.fillStyle = colors[0], vw.fillText(bD.a3j.a4Y(aR4), aQy + aR0, fa), bD.rK.textAlign(vw, 0), vw.fillText(bD.a3j.a4Y(
						new Date(aR5.getTime() - 6e4 * (aRN - 1) * aRA[data.aRF])), aQy, fa)
				}(aRN),
				function(aRN, aRP, aRO) {
					if (aR8 && !(aRN < 2)) {
						for (var a9x, eG = (aR6 - aQy) / aR0 * (aRN - 1), aRS = Math.floor(eG), aRT = Math.floor(1 + eG), aRU = eG - aRS, aRV = 1e5, aRW = -1, aRX = -1, aRY = aRO - (aRO - aRP) * (aR7 - aQz) / aR1, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aDq, aRG = h[aC].aRG;
							aRG.length <= aRT || (aRG = aRG[aRS] + aRU * (aRG[aRT] - aRG[aRS]), (aDq = Math.abs(aRY - aRG)) < aRV && (aRV = aDq, aRW = aC, aRX = aRG))
						} - 1 !== aRW && (aRO = aQz + aR1 - (aRX - aRP) / (aRO - aRP) * aR1, vw.lineWidth = .5 * bf.a0L, vw.strokeStyle = colors[aRW], vw.beginPath(), vw.moveTo(aQy, aRO), vw.lineTo(aR6, aRO), vw.lineTo(aR6, aQz + aR1), vw
							.stroke(), vw.beginPath(), vw.arc(aR6, aRO, .1 * aQy, 0, 2 * Math.PI), vw.fillStyle = colors[aRW], vw.fill(), aRP = aQz + aR1 + .15 * aR3, bD.rK.textAlign(vw, 1), a9x = aRN - 2 < eG ? (a9x = aR5.getTime() - 6e4 *
								aRA[data.aRF], new Date(a9x + (eG - (aRN - 2)) * (aR4.getTime() - a9x))) : new Date(aR5.getTime() - 6e4 * (aRN - eG - 1) * aRA[data.aRF]), aRN = bD.a3j.a4Y(a9x), eG = bD.rK.measureText(aRN), a9x = bO.iZ(aR6,
								aQy + .5 * eG, aQy + aR0 - .5 * eG), vw.fillStyle = bD.color.oF(70, 50, 20), vw.fillRect(a9x - .52 * eG, aQz + aR1, 1.04 * eG, .55 * aR3), vw.fillStyle = colors[0], vw.fillText(aRN, a9x, aRP), vw.font = bD.rK
							.t8(0, .25 * aQy), bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 2), a9x = .92 * aQy, aRN = (aRX / 1e3).toFixed(3), eG = bD.rK.measureText(aRN), aRP = a9x - 1.04 * eG, vw.fillStyle = bD.color.oF(70, 50, 20), vw
							.fillRect(aRP, aRO - .1625 * aQy, aQy - aRP, .275 * aQy), vw.fillStyle = colors[aRW], vw.fillText(aRN, a9x, aRO))
					}
				}(aRN, aRP, aRO)
			}(), vw.lineWidth = bf.a0L, vw.strokeStyle = bE.oN, vw.beginPath(), vw.moveTo(aQy, aQz), vw.lineTo(aQy, aQz + aR1), vw.lineTo(aQy + aR0, aQz + aR1), vw.stroke();
		var aC, fontSize = .5 * aR2,
			h = (vw.font = bD.rK.t8(0, fontSize), bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 0), data.data),
			fR = h.length,
			fa = aQz - .5 * aR2,
			r1 = "";
		for (aC = 0; aC < fR; aC++) r1 += h[aC].name + "  ";
		r1 = r1.trim();
		var aRb = bD.rK.measureText(r1),
			fY = .5 * (i.j - aRb);
		for (aRb > i.j && (fY = 0, vw.font = bD.rK.t8(0, i.j / aRb * fontSize)), aC = 0; aC < fR; aC++) vw.fillStyle = colors[aC], vw.fillText(h[aC].name, fY, fa), fY += bD.rK.measureText(h[aC].name + "  ")
	}, this.he = function(m1, m2) {
		aRe(m1, m2)
	}, this.a2u = function(m1, m2) {
		aRe(m1, m2)
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	};
	var aC, eZ, a4W, iJ, fU = data.data,
		fR = fU.length,
		max = 1;
	for (aC = 0; aC < fR; aC++) max = Math.max(max, fU[aC].aRG.length);
	for (aC = 0; aC < fR; aC++)
		for (; fU[aC].aRG.length < max;) fU[aC].aRG.unshift(0);
	eZ = new Date, a4W = 6e4 * eZ.getTimezoneOffset(), iJ = eZ.getTime() - a4W, aR4 = new Date(iJ), 6 === data.aRF ? function(eZ, a4W) {
		var aRI = eZ.getUTCFullYear(),
			eZ = eZ.getUTCMonth() + 1;
		aR5 = eZ < 12 ? new Date(Date.UTC(aRI, eZ) - a4W) : new Date(Date.UTC(aRI + 1, 0) - a4W)
	}(eZ, a4W) : (a4W = 6e4 * aRA[data.aRF], aR5 = data.aRF <= 4 ? new Date(iJ + a4W - eZ.getTime() % a4W) : new Date(iJ + a4W - (eZ.getTime() + 2592e5) % a4W)), iJ = bD.color, colors = [bE.oN, iJ.oF(255, 0, 0), iJ.oF(0, 200, 0), iJ.oF(80, 80,
		255), iJ.oF(255, 255, 0), iJ.oF(255, 0, 255), iJ.oF(0, 255, 255), iJ.oF(255, 140, 0), iJ.oF(128, 128, 128), iJ.oF(0, 255, 140)], aPY = new vg(L(307) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aRF] + ", " + bD.a3j.a4V(aR4), [
		new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(308), function() {
			u.v(14)
		})
	], !1)
}

function aPD() {
	var aPY, aPZ, rF, aRf = -1;
	this.show = function() {
		aPY.show(), this.resize(), aRf = bm.eV.data[125].value
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(309), [new x("⬅️ " + L(40), function() {
		aRf !== bm.eV.data[125].value ? u.z.aRg() : u.aPW(13)
	})]), aPZ = new rD(aPY.vm, ((rF = []).push(function() {
		var aPu = new qx,
			aQ2 = (aPu.r0(L(310)), aPu.r2(L(311)), new x(L(312), function() {
				bm.po.pp(130, 0), u.z.aRg()
			}, 0, 0, 1)),
			s7 = new s8(bm.eV.data[126], 0, function() {
				aQ2.button.click()
			});
		return aPu.rB(s7), s7.e.placeholder = "a,b,c", s7.e.style.marginTop = "0.5em", aPu.rB(new sm([aQ2.button])), aPu
	}()), rF.push(function() {
		var aPu = new qx,
			aQ2 = new x(L(312), function() {
				bm.po.pp(130, 1), u.z.aRg()
			}, 0, 0, 1),
			aRl = new s8(bm.eV.data[129], 1, function() {
				aRl.e.focus()
			}),
			aRm = new s8(bm.eV.data[128], 1, function() {
				aQ2.button.click()
			});
		return aPu.r0(L(313)), aPu.rB(aRm), aRm.e.style.marginBottom = "0.5em", aPu.r0(L(314)), aPu.rB(aRl), aPu.rB(new sm([aQ2.button])), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		return aPu.r0(L(315)), bm.eV.data[125].tI = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aPu.r8(new vc(bm.eV.data[125])), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		return aPu.r0(L(316)), aPu.rB(new si(bm.eV.data[127], L(317))), aPu
	}()), rF))
}

function aPC() {
	var aPY, aRn, aR0, aRo, aRp, aRq, colors = [0, 0, 0],
		aRr = -1;

	function aRu(aC) {
		var aRv = aRn.fa + aC * (bf.gap + aRq);
		vw.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", vw.fillRect(aRo, aRv, colors[aC] * aRp, aRq), vw.strokeStyle = bE.oN, vw.strokeRect(aRo, aRv, aRp,
			aRq), vw.fillStyle = bE.oN, vw.font = bD.rK.t8(0, .32 * aRq), bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 0), vw.fillText(L(0 === aC ? 320 : 1 === aC ? 321 : 322) + aRs(aC), aRo + bf.gap, aRv + .53 * aRq)
	}

	function aRs(aC, aRw) {
		return aRw = aRw || 256, bO.iZ(Math.floor(aRw * colors[aC]), 0, aRw - 1)
	}

	function a3O(m1, m2) {
		return !(m1 < aRo || m2 < aRn.fa || m1 > aRn.fY + aRn.j || m2 > aRn.fa + aRn.k)
	}
	this.show = function() {
		var ft = bm.eV.data[121].value;
		colors[0] = (ft >> 12) / 63, colors[1] = (ft >> 6 & 63) / 63, colors[2] = (63 & ft) / 63, aPY.show(), this.resize()
	}, this.sa = function() {
		bm.po.pp(121, (aRs(0, 64) << 12) + (aRs(1, 64) << 6) + aRs(2, 64)), aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aRn.resize();
		var ei = i.l,
			vu = aPY.vr(),
			aRt = (aRn.fa = Math.max(aRn.fa, ei * vu.sd + bf.gap), ei * vu.vt - 2 * bf.gap);
		aRn.k = Math.min(aRn.k, aRt), aRn.j = 2 * aRn.k, aRn.fa = ei * vu.sd + .5 * (ei * vu.vt - aRn.k), aRn.fY = .5 * (i.j - aRn.j), aR0 = .25 * aRn.j, aRo = aRn.fY + aR0 + bf.gap, aRp = aRn.j - aR0 - bf.gap, aRq = (aRn.k - 2 * bf.gap) / 3
	}, this.vv = function() {
		var eF, tz, fl;
		aPY.vv(), vw.lineWidth = bf.a0L, eF = aRs(0), tz = aRs(1), fl = aRs(2), vw.fillStyle = "rgb(" + eF + "," + tz + "," + fl + ")", vw.fillRect(aRn.fY, aRn.fa, aR0, aRn.k), vw.strokeStyle = bE.oN, vw.strokeRect(aRn.fY, aRn.fa, aR0, aRn.k), vw
			.fillStyle = eF + tz + fl < 306 && tz < 150 ? bE.oN : bE.oE, bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 1), vw.font = bD.rK.t8(0, .1 * aRn.k), vw.rotate(-Math.PI / 2), vw.fillText(L(319), -aRn.fa - .5 * aRn.k, aRn.fY + .5 * aR0),
			vw.setTransform(1, 0, 0, 1, 0, 0), aRu(0), aRu(1), aRu(2)
	}, this.he = function(m1, m2) {
		a3O(m1, m2) && (aRr = bO.iZ(Math.floor((m2 - aRn.fa) / (aRq + .75 * bf.gap)), 0, 2), colors[aRr] = bO.iZ((m1 - aRo) / aRp, 0, 1), bi.dq = !0)
	}, this.a2u = function(m1) {
		-1 !== aRr && (colors[aRr] = bO.iZ((m1 - aRo) / aRp, 0, 1), bi.dq = !0)
	}, this.a2x = function(m1, m2, deltaY) {
		a3O(m1, m2) && (m1 = bO.iZ(Math.floor((m2 - aRn.fa) / (aRq + .75 * bf.gap)), 0, 2), colors[m1] = bO.iZ(colors[m1] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.dq = !0)
	}, this.a3I = function() {
		0 <= aRr && (aRr = -1, bi.dq = !0)
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(318), [new x("⬅️ " + L(40), function() {
		u.z.aDl()
	})], !1), aRn = new rv([.5, .25], [.5, .5], 1)
}

function aPK() {
	var aQm, aQn, aQo, rt;

	function aQp() {
		aQr(), u.aPX()[19] = null, u.a2W()
	}

	function aRx() {
		aQr(), u.v(21)
	}

	function aQr() {
		1 === aE.data.gameMode ? aE.a5s.a5x() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.rS.a44(aQo.wC(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, rt = [new x("⬅️ " + L(40), aQp)], 1 === aE.data.gameMode && rt.push(new x(L(323), aRx, 1, 1)), aQm = new vg(L(324), rt), aQn = new rD(aQm.vm, (rt = [], 0 === aE.data.gameMode ? (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(325), L(303)],
			value: aE.data.colorsType
		}, function(eG) {
			aQr(), aE.data.colorsType = eG, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fO || (aE.data.colorsData = new Uint32Array(aE.fO)), u.v(21)
		})), rF.push(aPu)
	}(rt), 1 === aE.data.colorsType && function(rF) {
		var aPu = new qx;
		aPu.r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.colorsData, 1)), aPu.rB(aQo), rF.push(aPu)
	}(rt)) : (aE.a5s.a5x(), rt.push(function() {
		var aPu = new qx;
		aPu.r0(L(306));
		for (var aC = 0; aC < bj.a1j.length; aC++) {
			var iJ = (aC + 1) % bj.a1j.length,
				e = aPu.r6((0 == iJ ? "" : "Team ") + bj.a1j[iJ]);
			aC && (e.style.marginTop = "0.5em"), aPu.rB(new s8({
				eG: -1,
				value: aE.data.teamPlayerCount[iJ]
			}, 1, 0, function(e) {
				aQm.vn[1].re(0);
				var playerCount = bO.iZ(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aS0] = playerCount
			})).e.aS0 = iJ
		}
		return aPu
	}()), function(rF) {
		for (var aPu = new qx, tI = (aPu.r0(L(326)), []), aC = 0; aC < bj.a1j.length; aC++) {
			var iJ = (aC + 1) % bj.a1j.length;
			tI.push(bj.a1j[iJ])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		aPu.r8(new vc({
			tI: tI,
			value: (aE.data.colorsData[0] % 16 + bj.a1j.length - 1) % bj.a1j.length
		}, function(eG) {
			var eG = (eG + 1) % bj.a1j.length,
				aS1 = bj.aS2[eG],
				aS1 = (aS1[0] >> 2 << 12) + (aS1[1] >> 2 << 6) + (aS1[2] >> 2);
			aE.data.colorsData[0] = aS1 - (15 & aS1) + eG
		})), rF.push(aPu)
	}(rt)), rt))
}

function tc(id, a5E, aS3) {
	var aPY, aS4;

	function aS9() {
		aS4.rG.innerHTML += "<br>" + L(329)
	}

	function aSI() {
		var fl = 1;
		u.v(4, 1, new w(L(330), L(331), !1, [new x("🔄 Reload", function() {
			fl && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fl = 0
		}, bE.ol)]))
	}

	function aS8() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.di(bG.aD), bm.po.pp(110, bI.td.te(bI.td.tf(15))), b1.aGd.aSK()
	}
	this.aS5 = !0, this.aS6 = id, this.show = function() {
		aPY.show(), this.resize(), 15 === id ? (b1.z.aS7(id) ? aS8 : aS9)() : 16 === id ? b1.z.aS7(id) ? b1.ef.eg(2) : aS9() : 17 === id ? b1.z.aS7(id) ? b1.ef.eg(3) : aS9() : 18 === id ? (b1.z.close(0, 3253), b1.z.aHb(0, id, 0), aS9()) : 21 ===
			id ? b1.z.aS7(id) ? b1.aSA.aSB(a5E.tu, a5E.tv, a5E.tw) : aS9() : 22 === id ? b1.z.aS7(id) ? b1.aSA.aSC(a5E.tu, a5E.aSD, a5E.aSE) : aS9() : 23 === id ? b1.z.aS7(id) ? b1.aSA.aSF(a5E.aRF, a5E.a24) : aS9() : 24 === id ? b1.z.aS7(id) ? b1
			.aSA.aSG(a5E.aRF, a5E.tv, a5E.tw) : aS9() : 25 === id ? b1.z.aS7(id) ? b1.aGd.aQY(a5E) : aS9() : 28 === id ? b1.z.aS7(id) ? b1.aSA.aSH(a5E.tu, a5E.aSD, a5E.aSE) : aS9() : 29 === id ? b1.z.aS7(id) ? b1.aGd.aQR(a5E) : aS9() : 30 ===
			id && (b1.z.aS7(id) ? bA.aDg() || aSI() : aS9())
	}, this.aSJ = function() {
		15 === id ? aS8() : 16 === id ? b1.ef.eg(2) : 17 === id ? b1.ef.eg(3) : 18 === id ? u.v(8, this.a2c, new tc(16)) : 21 === id ? b1.aSA.aSB(a5E.tu, a5E.tv, a5E.tw) : 22 === id ? b1.aSA.aSC(a5E.tu, a5E.aSD, a5E.aSE) : 23 === id ? b1.aSA.aSF(
			a5E.aRF, a5E.a24) : 24 === id ? b1.aSA.aSG(a5E.aRF, a5E.tv, a5E.tw) : 25 === id ? b1.aGd.aQY(a5E) : 28 === id ? b1.aSA.aSH(a5E.tu, a5E.aSD, a5E.aSE) : 29 === id ? b1.aGd.aQR(a5E) : 30 === id ? bA.aDg() || aSI() : 1e3 === id && (
			this.aS6 = id = 25, b1.aGd.aQY(a5E))
	}, this.aDk = function(code, bx, data) {
		!bx && code !== id || (15 === code || 16 === code ? u.v(7, this.a2c) : 17 === code ? (b1.z.close(0, 3252), bm.z.wv(0), bm.eV.data[117].tI && 0 < bm.eV.data[117].tI.length ? (bx = bm.z.ww(0), bm.po.pp(105, bx.tZ), bm.po.pp(106, bx
			.password), u.v(8, this.a2c, new tc(16))) : (bm.po.pp(105, ""), u.z.aDl())) : 21 === code ? u.v(10, this.a2c, new aCE(data)) : 23 === code ? u.v(13, this.a2c, new aQx({
			data: data,
			aRF: a5E.aRF
		})) : 25 === code ? (u.z.aPE.tZ = a5E.tZ, bm.wK.n9(a5E.tZ), u.v(15, this.a2c)) : 30 === code && (data ? u.v(1) : aSI()))
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aS4.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(327), [new x("⬅️ " + L(40), function() {
		aS3 ? u.v(29) : u.z.aDl()
	})]), aS4 = new sl(aPY.vm, L(328))
}

function aPI() {
	var aQm, aQn, rF;

	function aSN() {
		var gu;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a5s.a5x()), gu = bD.rS.a3y(aE.data.teamPlayerCount, 0), aE.data.numberTeams = gu) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aQp() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aSP(), aE.data.canvas = null, u.v(5, 5)
	}

	function aSP() {
		bC.qe.di(), bm.po.pp(156, bC.a68.a0p())
	}

	function aSL() {
		aE.data.isReplay = 0, aSP(), aE.a5s.a6K(), ab.aHm(), aE.a5s.a6H(), aE.data.canvas = 2 === aE.data.mapType ? bV.xt : null, aE.a5w(), aE.a5u = 1
	}

	function aSb() {
		aSN();
		for (var h = [aSS(), aST(), aSU()], aC = 3; aC < 6; aC++) u.removeChild(aQn.rG, aQn.rH[aC].qz), aQn.rH[aC] = h[aC - 3], aQn.rG.appendChild(aQn.rH[aC].qz);
		aQn.resize()
	}

	function aSS() {
		var aSc, aPu = new qx;
		return aPu.r0(L(324)), aSc = 0 === aE.data.gameMode ? [L(325), L(303)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), aPu.r6(aSc), aPu.rB(new sm([new x(L(335), function() {
			u.v(21)
		}).button])), aPu
	}

	function aST() {
		var aPu = new qx,
			h = (aPu.r0(L(65)), [L(302) + ": " + aF.kx[aE.data.botDifficultyValue], L(304), L(305), L(303)]);
		return aPu.r6(h[aE.data.botDifficultyType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(25)
		}).button])), aPu
	}

	function aSU() {
		var aPu = new qx,
			h = (aPu.r0("Spawning"), [L(325), L(337), L(303)]);
		return aPu.r6(h[aE.data.spawningType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(24)
		}).button])), aPu
	}
	this.show = function() {
		aQm.show(), this.resize(), aQm.vm.scrollTop = u.z.tT[0]
	}, this.sa = function() {
		u.z.tT[0] = aQm.vm.scrollTop, aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg("🔧 " + L(332), [new x("⬅️ " + L(40), aQp), new x(L(333), aSL)]), aSN(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.xt : 1 === aE.data.mapType ? aE.data.canvas = bV.aMy(bV.a6I(aE.data), 0).xt : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aMy(bV.a6I(aE.data), aE.data.mapSeed).xt)), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx,
			a4E = (aPu.r0(L(334)), aE.data.canvas);
		a4E.style.width = "100%", aPu.rB({
			e: a4E
		}), aPu.rB(new sm([new x(L(335), function() {
			u.v(20)
		}).button])), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu = new qx;
		aPu.r0(L(306)), aPu.rB(new s8({
			eG: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.iZ(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.rS.a3y(aE.data.teamPlayerCount, 0), aE.a5s.a5x(), bD.rS.a3y(aE.data.teamPlayerCount, 0) !== e) && aSb()
		})), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx;
		aPu.r0(L(336)), aPu.r8(new vc({
			tI: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eG) {
			aE.data.gameMode !== eG && (1 === (aE.data.gameMode = eG) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aSb())
		})), rF.push(aPu)
	}(rF), rF.push(aSS()), rF.push(aST()), rF.push(aSU()), function(rF) {
		var aPu = new qx,
			h = (aPu.r0(L(338)), [L(339), L(340), L(303)]);
		aPu.r6(h[aE.data.playerNamesType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(23)
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx,
			h = (aPu.r0(L(299)), [L(301), L(302) + ": " + aE.data.aIncomeValue, L(303)]);
		aPu.r6(h[aE.data.aIncomeType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(22)
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx,
			h = (aPu.r0(L(341)), [L(301), L(302) + ": " + aE.data.tIncomeValue, L(303)]);
		aPu.r6(h[aE.data.tIncomeType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(26)
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx,
			h = (aPu.r0(L(342)), [L(301), L(302) + ": " + aE.data.iIncomeValue, L(303)]);
		aPu.r6(h[aE.data.iIncomeType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(27)
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx,
			h = (aPu.r0(L(343)), [L(301), L(302) + ": " + aE.data.sResourcesValue, L(303)]);
		aPu.r6(h[aE.data.sResourcesType]), aPu.rB(new sm([new x(L(335), function() {
			u.v(28)
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx;
		aPu.r0(L(344)), aPu.rB(new sm([new x(L(345), function() {
			u.y(), aE.a5s.a6L(), u.z.tT[0] = 0, u.v(19)
		}).button])), aPu.rB(new sm([new x(L(346), function() {
			bp.aKC()
		}).button])), aPu.rB(new sm([new x(L(347), function() {
			return bp.aKE(), !0
		}).button])), rF.push(aPu)
	}(rF), rF))
}

function aPT() {
	var aQm, sD = !0;

	function sT(sS, a6P) {
		var qz = document.createElement("div"),
			aSe = document.createElement("span"),
			aSf = document.createElement("span");
		aSe.textContent = aX.aCa(a6P.eY) + ":", aSe.style.color = bE.oc, aSe.style.paddingRight = "0.4em", aSe.style.display = "table-cell", aSe.style.width = "6ch", aSe.style.textAlign = "end", qz.appendChild(aSe), aSf.textContent = a6P.r1, qz
			.appendChild(aSf), qz.style.display = "table", a6P.q3 && function(qz, q3) {
				{
					var aJZ;
					q3 >= 1024 - ak.sZ.a08 ? ((aJZ = document.createElement("img")).src = ak.xw.zw[q3 - 1024 + ak.sZ.a08].toDataURL(), aJZ.style.width = "1.5em", aJZ.style.height = "1.5em", aJZ.style.verticalAlign = "middle", qz.appendChild(aJZ)) : (
						(aJZ = document.createElement("span")).textContent = ak.sZ.a0N(q3), aJZ.style.display = "inline-block", aJZ.style.fontSize = "1.5em", aJZ.style.lineHeight = "1em", aJZ.style.verticalAlign = "middle", qz.appendChild(aJZ))
				}
			}(qz, a6P.q3), sS.appendChild(qz)
	}

	function sW() {
		sD && (aQm.vm.scrollTop = aQm.vm.scrollHeight)
	}
	this.clear = function() {
		aQm.vm.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a7I = bt.a6S(), fR = a7I.length, sS = document.createDocumentFragment(), aC = 0; aC < fR; aC++) sT(sS, a7I[aC]);
		aQm.vm.appendChild(sS), sW(), aQm.show(), this.resize(), sD = !0, sW()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQm.vm.style.padding = "0.4em " + bD.rK.rT(bf.rQ)
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, this.zp = function(a6P) {
		var sS = document.createDocumentFragment();
		sT(sS, a6P), aQm.vm.appendChild(sS), sW()
	}, (aQm = new vg(L(348), [new x("⬅️ " + L(40), function() {
		u.aPW(1)
	})])).vm.style.overflowY = "auto", aQm.vm.addEventListener("scroll", function() {
		sD = aQm.vm.scrollTop >= aQm.vm.scrollHeight - aQm.vm.clientHeight - 2
	})
}

function aPQ() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.iIncomeType && bD.rS.a44(aQo.wC(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(342), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(301), L(302), L(303)],
			value: aE.data.iIncomeType
		}, function(eG) {
			aQr(), 2 !== eG || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fO), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eG, u.v(27)
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu;
		1 === aE.data.iIncomeType && ((aPu = new qx).r0("Value"), aPu.rB(new s8({
			eG: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iZ(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), rF.push(aPu))
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.iIncomeType && ((aPu = new qx).r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.iIncomeData, 4)), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aP8() {
	var aSh, aSi, aRn, s7, aSj, t3 = 0;
	this.aIK = new tj, aRn = new rv([.45, .27], [.5, .5], 2 / 3), aSi = [new x("⚔️<br>" + L(349), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aSk(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.or), new x("🗡️<br>" + L(332), function() {
			aSk(1)
		}, bE.p9), new x("🔑<br>" + L(350), function() {
			aSk(2)
		}, bE.pS), new x("☰<br>" + L(351), function() {
			aSk(3)
		}, bE.oa), new x("", function() {
			u.v(12)
		}, bE.oJ, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], s7 = new s8(bm.eV.data[122]);
	for (var aC = 0; aC < aSi.length; aC++) aSi[aC].button.style.position = "absolute";

	function aSk(eG) {
		a1.a2.setState(10), ac.u3() || ac.aIB(), 0 === eG ? u.z.a6B(1) : 1 === eG ? (bC.aKW.xe(bm.eV.data[156].value, 1) || aE.a5s.a6L(), u.v(19)) : 2 === eG ? 0 !== a1.id || bm.eV.data[140].value ? u.v(8, u.tb, new tc(16)) : u.z.aSl(u.tb, 16) :
			3 === eG && u.v(1)
	}
	s7.e.style.position = "absolute", s7.e.style.textAlign = "center", s7.e.placeholder = L(352), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aIK.show(), aSi[4].re(bD.color.a4L(bm.eV.data[121].value)), this.resize(), document.body.appendChild(s7.e);
		for (var aC = 0; aC < aSi.length; aC++) document.body.appendChild(aSi[aC].button);
		1 !== a1.id || a1.e1 < 5 || (aSj && bi.eY > aSj + 144e5 ? a1.we.setState(14) : aSj = bi.eY)
	}, this.sa = function() {
		this.aIK.sa(), u.removeChild(document.body, s7.e);
		for (var aC = 0; aC < aSi.length; aC++) u.removeChild(document.body, aSi[aC].button)
	}, this.resize = function() {
		this.aIK.resize(), this.aIK.resize(), aRn.resize();
		var gap = .5 * bf.gap,
			uY = 10 / 99 * .84 * aRn.j,
			aSo = .16 * aRn.k,
			aAV = .19 * aRn.j,
			fY = aRn.fY + aAV,
			uY = aRn.fa + uY + 3 * gap,
			j = .5 * (aRn.j - gap) - aAV,
			aAV = aRn.j - 2 * aAV - aSo - gap,
			aAV = (bD.rK.u1(s7.e, fY, uY, aAV, aSo), bD.rK.u1(aSi[4].button, fY + aAV + gap, uY, aSo, aSo), t3 = uY, .5 * (aRn.fa + aRn.k - (uY += aSo + gap) - gap));
		bD.rK.u1(aSi[0].button, fY, uY, j, aAV), bD.rK.u1(aSi[1].button, fY + j + gap, uY, j, aAV), bD.rK.u1(aSi[2].button, fY, uY + aAV + gap, j, aAV), bD.rK.u1(aSi[3].button, fY + j + gap, uY + aAV + gap, j, aAV);
		bD.rK.u1(aSi[5].button, fY, uY + aAV * 2 + gap * 2, j * 2 + gap, aAV / 3);
		bD.rK.u1(aSi[6].button, fY, uY + aAV * 2.33 + gap * 3, j * 2 + gap, aAV / 3);
		for (var aC = 0; aC < aSi.length; aC++) aSi[aC].button.style.font = bD.rK.t8(0, bD.rK.vM(.065 * aRn.k)), bD.rK.rU(aSi[aC].button, 5);
		s7.e.style.font = bD.rK.t8(0, bD.rK.vM(.08 * aRn.k)), bD.rK.rU(s7.e, 5)
	}, this.vv = function() {
		if (ab.aHq(), aU.vv(), fR = Math.floor((a1.a2.ia() ? .018 : .0137) * i.ib), vw.font = bD.rK.t8(0, Math.max(5, fR)), bD.rK.textBaseline(vw, 0), bD.rK.textAlign(vw, 2), vw.fillStyle = bE.oN, vw.fillText(m.e1, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = vw.measureText(text).width, fR = Math.max(5, fR), vw.textAlign = "left", vw.textBaseline = "middle", vw.fillText(text, vw.canvas.width - textLength - fR / 2, 2 * fR), aP.vv(t3), bb.vv(), ac.u3()) {
			vw.imageSmoothingEnabled = !1;
			var text = ac.aHt("territorial.io"),
				textLength = .84 * aRn.j / text.width;
			vw.setTransform(textLength, 0, 0, textLength, aRn.fY + .08 * aRn.j, aRn.fa), aSh = aSh || bD.a3f.a5C(text, bD.a3f.a5I, [0, 0, 0]);
			for (var fY = -1; fY <= 1; fY += 2)
				for (var fa = -1; fa <= 1; fa += 2) vw.drawImage(aSh, fY, fa);
			vw.drawImage(text, 0, 0), vw.imageSmoothingEnabled = !0;
			var fR = ac.aHt("logo"),
				aSr = .6666 * textLength * text.height / fR.height,
				o0 = .5 * i.j,
				o1 = aRn.fa + .5 * textLength * text.height - .5 * aSr * fR.height;
			vw.setTransform(aSr, 0, 0, aSr, o0 - .6 * textLength * text.width, o1), vw.drawImage(fR, 0, 0), vw.setTransform(aSr, 0, 0, aSr, o0 + .6 * textLength * text.width - aSr * fR.width, o1), vw.drawImage(fR, 0, 0), vw.setTransform(1, 0, 0,
				1, 0, 0), vw.imageSmoothingEnabled = !0
		}
	}
}

function aPF() {
	var aPY, aSs, aSt, vh;

	function aSu(aC) {
		u.v(8, u.tb, new tc(21, {
			tu: aC,
			tv: 0,
			tw: 10
		}))
	}
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aSs.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aSt = [new x(L(353), function() {
		aSu(1)
	}, 0, 0, 1), new x(L(354), function() {
		aSu(2)
	}, 0, 0, 1), new x(L(355), function() {
		aSu(3)
	}, 0, 0, 1), new x(L(356), function() {
		aSu(0)
	}, 0, 0, 1), new x(L(357), function() {
		aSu(9)
	}, 0, 0, 1), new x(L(358), function() {
		aSu(10)
	}, 0, 0, 1), new x(L(359), function() {
		aSu(11)
	}, 0, 0, 1), new x(L(360), function() {
		aSu(13)
	}, 0, 0, 1)], vh = [new x("⬅️ " + L(40), function() {
		u.a2W()
	})], aPY = new vg(L(361), vh), aSs = new rs(aSt, aPY.vm)
}

function aE8(title, r7, aSv) {
	var aPY, aS4;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aS4.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aSv = aSv || [new x("⬅️ " + L(40), function() {
		u.a2W()
	}, bE.p3)], aPY = new vg(title, aSv), aS4 = new sl(aPY.vm, r7), bD.rK.textAlign(aPY.vm.style, 1)
}

function aCE(data) {
	var aPY, aSw;

	function aT5(fR) {
		return fR < 60 ? 1 === fR ? fR + " Second" : fR + " Seconds" : fR < 3600 ? 1 === (fR = Math.floor(fR / 60)) ? fR + " Minute" : fR + " Minutes" : fR < 172800 ? 1 === (fR = Math.floor(fR / 3600)) ? fR + " Hour" : fR + " Hours" : (fR = Math
			.floor(fR / 172800)) + " Days"
	}

	function aSy(k1) {
		var fR = data.data.length;
		if (fR) {
			for (var tv, max = min = parseInt(data.data[0][0]), aC = 1; aC < fR; aC++) var aG8 = parseInt(data.data[aC][0]),
				min = Math.min(aG8, min),
				max = Math.max(aG8, max);
			tv = k1 < 0 ? min + k1 : max + 1, u.v(8, u.a2b().a2c, new tc(21, {
				tu: data.tu,
				tv: tv,
				tw: tv + Math.abs(k1)
			}))
		}
	}
	if (this.show = function() {
			aPY.show(), this.resize()
		}, this.sa = function() {
			aPY.sa()
		}, this.resize = function() {
			aPY.resize(), aSw.resize()
		}, this.a3S = function(ei) {
			2 === ei && aPY.vn[0].rb()
		}, data.aCF) {
		aPY = new vg(L(119), [new x("⬅️ " + L(40), function() {
			u.a2W()
		})]);
		var fU = {
				tJ: [],
				tP: [L(374), L(375), L(376) + " ↗"],
				tW: [12, 50, 38]
			},
			a6F = aE.data.a6F;
		if (a6F) {
			for (var fR = a6F.length, tJ = fU.tJ, zq = ah.zq, aC = 0; aC < fR; aC++) tJ.push([{
				ft: aC + 1 + ".",
				eZ: 0
			}, {
				ft: zq[aC],
				eZ: 0
			}, {
				ft: bI.td.a0e(a6F[aC], 5),
				eZ: 1,
				tZ: a6F[aC],
				ta: 0
			}]);
			aSw = new tH(aPY.vm, fU, {
				tS: 1
			})
		} else aSw = new tH(aPY.vm, fU)
	} else {
		var fU = data.data.length ? 0 : 1,
			aSv = [new x("⬅️ " + L(40), function() {
				u.a2W()
			}), new x(L(362), function() {
				aSy(-10)
			}, fU, 0, 1), new x(L(363), function() {
				aSy(10)
			}, fU, 0, 1), new x(L(308), function() {
				u.v(11, 10, new aSz({
					tu: data.tu
				}))
			})],
			tP = [L(364), L(365), L(366), L(367), L(368), L(369), L(370), L(371), L(372), L(373), L(358), L(359), "Audit Log", L(360)];
		aPY = new vg(tP[data.tu], aSv), ! function() {
			var aC, fU = {
					tJ: []
				},
				tJ = fU.tJ,
				aT1 = data.data,
				fR = aT1.length;
			fR && 0 === aT1[0][0] && 0 <= (eG = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.tu]) && (u.z.tx[eG] = aT1[0][1]);
			var nz = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.tu],
				a5O = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.tu],
				eG = [
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
			if (fU.tP = eG[data.tu], fU.tW = [
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
				][data.tu], 0 === data.tu || 2 === data.tu || 3 === data.tu || 9 === data.tu || 10 === data.tu || 11 === data.tu || 13 === data.tu)
				for (aC = 0; aC < fR; aC++) tJ.push([{
					ft: aT1[aC][0] + 1 + ".",
					eZ: 0
				}, {
					ft: aT1[aC][1],
					eZ: 1,
					tZ: aT1[aC][4],
					ta: aT1[aC][3]
				}, {
					ft: (nz * aT1[aC][2]).toFixed(a5O),
					eZ: 0
				}]);
			else if (12 === data.tu)
				for (aC = 0; aC < fR; aC++) {
					var aT4 = aT1[aC][3];
					tJ.push([{
						ft: "" + aT1[aC][0],
						eZ: 0
					}, {
						ft: aT5(aT1[aC][4]),
						eZ: 0
					}, {
						ft: aT1[aC][5],
						eZ: 1,
						tZ: aT1[aC][1],
						ta: 0
					}, {
						ft: aT1[aC][6],
						eZ: 1,
						tZ: aT1[aC][2],
						ta: 0
					}, {
						ft: br.eM(aT4, bI.td.a0e(aT1[aC][1], 5)),
						eZ: 0
					}])
				} else if (1 === data.tu)
					for (aC = 0; aC < fR; aC++) tJ.push([{
						ft: aT1[aC][0] + 1 + ".",
						eZ: 0
					}, {
						ft: aT1[aC][1],
						eZ: 0
					}, {
						ft: (nz * aT1[aC][2]).toFixed(a5O),
						eZ: 0
					}, {
						ft: aT1[aC][3],
						eZ: 1,
						tZ: aT1[aC][5],
						ta: aT1[aC][4]
					}]);
				else if (4 === data.tu || 5 === data.tu || 6 === data.tu || 7 === data.tu || 8 === data.tu)
				for (aC = 0; aC < fR; aC++) {
					var aT6 = aT1[aC][5];
					4 === data.tu || 8 === data.tu ? "100%" === (aT6 = (aT6 % 64 * 100 / (aT6 >> 6)).toFixed(0) + "%") && (4 === data.tu ? aT6 += " (" + L(395) + ")" : aT6 += " (" + L(396) + ")") : 5 === data.tu ? 32768 <= aT6 && (aT6 = -(aT6 -
						32768)) : aT6 = (nz * aT6).toFixed(a5O), tJ.push([{
						ft: "" + aT1[aC][0],
						eZ: 0
					}, {
						ft: aT5(aT1[aC][6]),
						eZ: 0
					}, {
						ft: aT1[aC][7],
						eZ: 1,
						tZ: aT1[aC][1],
						ta: aT1[aC][2]
					}, {
						ft: aT1[aC][8],
						eZ: 1,
						tZ: aT1[aC][3],
						ta: aT1[aC][4]
					}, {
						ft: "" + aT6,
						eZ: 0
					}])
				}
			aSw = new tH(aPY.vm, fU)
		}()
	}
}

function aSz(a5E) {
	var aPY, aPZ, rF;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(397), [new x("⬅️ " + L(40), function() {
		u.aPW(10)
	})]), aPZ = new rD(aPY.vm, ((rF = []).push(function() {
		var aQ2, aPu = new qx,
			aRl = new s8(bm.eV.data[132], 1, function() {
				aQ2.button.click()
			}),
			aRm = new s8(bm.eV.data[131], 1, function() {
				aRl.e.focus()
			});
		aPu.r0(L(313)), aPu.rB(aRm), aRm.e.style.marginBottom = "0.8em", aPu.r0(L(314)), aPu.rB(aRl);
		return aQ2 = new x(L(312), function() {
			tv = Math.floor(aRm.e.value), tw = Math.floor(aRl.e.value);
			var tw, tv = {
				a3w: Math.min(tv, tw),
				aOf: Math.max(tv, tw)
			};
			u.v(8, u.a6R(10).a2c, new tc(21, {
				tu: a5E.tu,
				tv: tv.a3w,
				tw: tv.aOf
			}))
		}, 0, 0, 1), aPu.rB(new sm([aQ2.button])), aPu
	}()), rF.push(function() {
		var aQ2, aPu = new qx,
			aRl = new s8(bm.eV.data[134], 1, function() {
				aQ2.button.click()
			}),
			aRm = new s8(bm.eV.data[133], 0, function() {
				aRl.e.focus()
			});
		return aPu.r0(1 === a5E.tu ? L(398) : L(399)), aPu.rB(aRm), aRm.e.style.marginBottom = "0.8em", aPu.r0(L(400)), aPu.rB(aRl), aQ2 = new x(L(312), function() {
			var aSD = aRm.e.value.slice(0, 20),
				aSE = Math.abs(Math.floor(aRl.e.value));
			u.v(8, u.a6R(10).a2c, new tc(22, {
				tu: a5E.tu,
				aSD: aSD,
				aSE: aSE
			}))
		}, 0, 0, 1), aPu.rB(new sm([aQ2.button])), aPu
	}()), rF.push(function() {
		var aQ2, aPu = new qx,
			aRl = new s8(bm.eV.data[152], 1, function() {
				aQ2.button.click()
			}),
			aRm = new s8(bm.eV.data[151], 0, function() {
				aRl.e.focus()
			});
		return aPu.r0(L(401)), aPu.rB(aRm), aRm.e.style.marginBottom = "0.8em", aPu.r0(L(400)), aPu.rB(aRl), aQ2 = new x(L(312), function() {
			var aSD = aRm.e.value.slice(0, 5),
				aSE = Math.abs(Math.floor(aRl.e.value));
			u.v(8, u.a6R(10).a2c, new tc(28, {
				tu: a5E.tu,
				aSD: aSD,
				aSE: aSE
			}))
		}, 0, 0, 1), aPu.rB(new sm([aQ2.button])), aPu
	}()), rF))
}

function aPS() {
	var aTA, u7, aTD, u6, u9, aTB = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aTC = new Array(4),
		aTE = new Array(2),
		aTF = [L(64), L(357), L(402), L(403)];

	function aFu() {
		var aFD;
		!bq.ey || (aFD = aTA.uK.s7.e.value.trim().slice(0, 127)).length < 1 || (aTA.uK.s7.e.value = "", bq.aEB.a1R(aFD))
	}

	function aTI(aTK) {
		bq.z.sN[3] = 1 - bq.z.sN[3], aTJ(3, 1, bq.z.sN[3]), aTK && b1.aG5.aG6(4), bq.z.sN[3] && bm.po.pp(158, bq.z.sN[0])
	}

	function aTG(fk, fl) {
		bq.z.sN[fk] !== fl && (0 === fk && bq.z.sN[3] && aTI(0), aTJ(fk, bq.z.sN[fk], 0), aTJ(fk, fl, 1), bq.z.sN[fk] = fl, 0 === fk ? (b1.aG5.aG6(2, fl), bq.z.sN[2] ? (aTA.uL.n9(), aTA.uK.reset(1)) : aTA.uK.reset(0), u.a2b().aFj(), u.a2b().aFi()) :
			2 === fk && (0 === fl ? (b1.aG5.aG6(0), aTA.uK.n9(), aTA.uT()) : (b1.aG5.aG6(1), aTA.uL.n9(), aTA.uU())))
	}

	function aTJ(fk, fl, color) {
		aTA.uN[fk].rt[fl].re(color ? bE.on : bE.pc)
	}

	function aTN(f7) {
		return bV.xj.aNu[f7]
	}

	function aTO(aEx) {
		return aEx < 7 ? "   " + (aEx + 2) + " Teams" : 10 === aEx ? "   No Full-Sending" : ""
	}

	function aTP(aFl, aTW) {
		return aTW ? aFl <= 90 && 60 < aFl ? "   Contest" : "" : aFl <= 60 ? "   Contest" : ""
	}
	this.aGG = function() {
		return aTA.uK
	}, this.aEB = function(tZ) {
		aTG(2, 0);
		var r1 = aTA.uK.s7.e.value,
			tZ = "@" + tZ + " ";
		r1.length && !bD.sJ.a4i(r1, " ") && (tZ = " " + tZ), aTA.uK.s7.e.value = r1 += tZ, aTA.uK.s7.e.focus()
	}, this.aFh = function() {
		aTA.uL.n9()
	}, this.aFj = function() {
		var aTM = bq.z.sN[0],
			aTM = bq.z.sP[aTM],
			fl = (bV.a8(aTM.f7, aTM.mapSeed), u7.rt),
			a88 = aTN(aTM.f7, aTM.mapSeed) + aTO(aTM.aEx) + aTP(aTM.aFl),
			aTM = L(406) + "   " + aTN(aTM.aGh, aTM.aGi) + aTO(aTM.aGj) + aTP(aTM.aFl, 1);
		fl[0].button.textContent === a88 && fl[1].button.textContent === aTM || (fl[0].button.textContent = a88, fl[1].button.textContent = aTM, u7.resize())
	}, this.aFi = function() {
		var aTM = bq.z.sN[0],
			sO = bq.z.sP[aTM];
		aTA.uR(sO.uS);
		for (var ft, a8O, aC = 0; aC < bq.uj.uk.length; aC++) aTB[0][aC].sI.textContent = bq.uj.uk[aC].length, aTB[1][aC].sI.textContent = (ft = bq.z.sP[aC].aFl, a8O = void 0, ((a8O = bO.fs(ft, 60)) < 10 ? "0" : "") + a8O + ":" + ((ft %= 60) <
			10 ? "0" : "") + ft);
		var sO = bq.uj.uk[aTM],
			aTR = sO.length,
			aTS = bq.uj.ul[aTM];
		aTB[2][1].sI.textContent = "" + aTR, aTB[3][1].sI.textContent = "" + aTS;
		for (aC = 0; aC < 4; aC++) {
			var aTT = bq.z.sP[aC];
			aTC[aC] ? 0 === aTT.uS && (aTC[aC].sI.textContent = bV.xj.aNu[aTT.f7]) : aTC[aC] = new sH(bV.xj.aNu[aTT.f7], u6.rt[aC].button, 1, 1), bD.sJ.startsWith(aTF[aC], "🏆 ") ? aTT.aF3 || (aTF[aC] = aTF[aC].substring(3), u6.rt[aC].button
				.textContent = aTF[aC], u6.rt[aC].button.appendChild(aTB[1][aC].sI), u6.rt[aC].button.appendChild(aTB[0][aC].sI), u6.rt[aC].button.appendChild(aTC[aC].sI)) : aTT.aF3 && (aTF[aC] = "🏆 " + aTF[aC], u6.rt[aC].button
				.textContent = aTF[aC], u6.rt[aC].button.appendChild(aTB[1][aC].sI), u6.rt[aC].button.appendChild(aTB[0][aC].sI), u6.rt[aC].button.appendChild(aTC[aC].sI))
		}
		var aTU = "",
			aTV = "";
		0 === aTM && (aTU = bq.lb.aFI(sO, 0, aTR), aTV = bq.lb.aFI(sO, 0, aTS)), aTD[0].sI.textContent = aTU, aTD[1].sI.textContent = aTV, aTE[1].sI.textContent = "MP: " + bq.z.aFb[0] + "   SP: " + bq.z.aFb[1] + "   Lobby: " + bD.rS.a49(bq.uj.uk)
	}, this.aFn = function() {
		aTA.uK.n9()
	}, this.show = function() {
		bq.z.aEW++, aTA.show(), this.resize(), bq.message.show()
	}, this.sa = function() {
		aTA.sa(), bq.v6.sa(), bq.ug.sa(), bq.message.sa()
	}, this.resize = function() {
		aTA.resize(1 - bq.z.sN[2]), bq.message.resize()
	}, this.a3S = function(ei) {
		2 === ei ? bq.z.sN[3] ? aTI(1) : aTA.uN[3].rt[0].rb() : ei < 2 && aTI(1)
	}, u6 = new sp([new x(aTF[0], function() {
		return aTG(0, 0), 2
	}), new x(aTF[1], function() {
		return aTG(0, 1), 2
	}), new x(aTF[2], function() {
		return aTG(0, 2), 2
	}), new x(aTF[3], function() {
		return aTG(0, 3), 2
	})], bE.pc), u7 = new sp([new x("", 0, 2), new x("", 0, 2)], bE.pd, 1);
	var aTH = new sp([new x(L(404), function() {
		return aTG(2, 0), 2
	}), new x(L(119), function() {
		return aTG(2, 1), 2
	})], bE.pc);
	u9 = new sp([new x(L(26, 0, 0, 1), function() {
		u.y(), bq.v0(), b1.z.a2k(3240), u.v(5, 5)
	}), new x(L(405), function() {
		return aTI(1), 2
	})], bE.pc), aTA = new u5(u6, u7, aTH, u9, aFu, bq.v6.aGQ);
	for (var aC = 0; aC < 4; aC++) aTB[0][aC] = new sH("0", u6.rt[aC].button), aTB[1][aC] = new sH("0", u6.rt[aC].button, 1);
	aTB[2][1] = new sH("0", aTH.rt[1].button), aTB[3][1] = new sH("0", u9.rt[1].button), (aTD = [new sH("", aTH.rt[1].button, 1, 1), new sH("", u9.rt[1].button, 1, 1)])[0].sI.style.bottom = "0em", aTD[1].sI.style.bottom = "0em", aTJ(0, bq.z.sN[0],
		1), aTJ(2, bq.z.sN[2], 1), (aTE = [new sH(L(306), aTA.uV(), 1, 0), new sH("", aTA.uV(), 1, 1)])[0].sI.style.fontSize = "0.4em", aTE[1].sI.style.fontSize = "0.4em"
}

function aP9() {
	var aPY, aPZ, rF;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(407), [new x("⬅️ " + L(40), function() {
		u.v(7, u.a6R(7).a2c)
	}), new x(L(209), function() {
		bm.po.pp(105, bJ.td.xT(aPZ.rH[0].qy[0].e.value, 5)), bm.po.pp(106, bJ.td.xT(aPZ.rH[1].qy[0].e.value, 15)), u.v(8, u.a6R(7).a2c, new tc(18))
	})]), aPZ = new rD(aPY.vm, ((rF = []).push(function() {
		var aPu = new qx;
		return aPu.r0(L(187)), aPu.rB(new s8({
			value: "",
			eG: -1
		})), aPu
	}()), rF.push(function() {
		var aPu = new qx,
			aQ5 = (aPu.r0(L(190)), new s8({
				value: "",
				eG: -1
			}));
		return aQ5.e.type = "password", aPu.rB(aQ5), aPu.rB(new sm([new x(L(191), function(e) {
			return e.textContent === L(191) ? (e.textContent = L(192), aQ5.e.type = "text") : (e.textContent = L(191), aQ5.e.type = "password"), !0
		}).button])), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		return aPu.r0(L(194)), aPu.r2(L(408)), aPu.r2(L(409)), aPu.r2(L(410)), aPu
	}()), rF))
}

function aPG() {
	var aPY, aSs, aSt, vh;

	function aSu(aC) {
		u.v(8, u.tb, new tc(21, {
			tu: aC,
			tv: 0,
			tw: 10
		}))
	}
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aSs.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aSt = [new x(L(369), function() {
		aSu(5)
	}, 0, 0, 1), new x(L(370), function() {
		aSu(6)
	}, 0, 0, 1), new x(L(371), function() {
		aSu(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aSu(12)
	}, 0, 0, 1)], vh = [new x("⬅️ " + L(40), function() {
		u.a2W()
	})], aPY = new vg(L(411), vh), aSs = new rs(aSt, aPY.vm)
}

function aP0() {
	this.eV = {}, this.tx = new Array(8), this.aPE = null, this.aPB = null, this.tF = 0, this.tT = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a6B = function(aTZ) {
		-1 === bX.turnstile.eq ? p.a2j() : (aTZ && (aa.aHV = aTZ), u.y(), aa.di())
	}, this.aDl = function() {
		u.v(0 === ab.a2X() ? 5 : 0)
	}, this.aRg = function() {
		if (1 === bm.eV.data[130].value) u.v(8, u.a2b().a2c, new tc(24, {
			aRF: bm.eV.data[125].value,
			tv: bm.eV.data[128].value,
			tw: bm.eV.data[129].value
		}));
		else {
			for (var h = (h = bm.eV.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a2b().a2c, new tc(23, {
				aRF: bm.eV.data[125].value,
				a24: h
			}))
		}
	}, this.aSl = function(a2c, target) {
		u.v(4, a2c, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aPv(
				"/privacy"), !1, [new x("⬅️ " + L(40), function() {
				u.v(a2c)
			}), new x("✅ Accept", function() {
				bm.po.pp(140, 1), 0 === target ? u.v(2, a2c) : u.v(8, a2c, new tc(target))
			})]))
	}, this.aTa = function() {
		for (var aC = 0; aC < 8; aC++) this.tx[aC] = bJ.xK.xO(bK.qS(5));
		this.tx[1] = "[" + this.tx[1] + "]", 5 === u.tb && (u.a2b().aIK.pp(this.tx), u.a2b().resize())
	}, this.aQ3 = function(ft, pm, a7x) {
		ft = bD.gn.a5B(ft, 1, 1e6);
		pm = L(412, [pm]);
		return (pm += "<br>") + L(413, [a7x]) + "<br>" + L(414, [ft + "–" + (ft + 2)]) + "<br>" + L(415, [ft])
	}
}

function aPJ() {
	var aQm, aQn, aTb, rF;

	function aQp() {
		b7.v0(), u.aPX()[19] = null, u.a2W()
	}

	function aTi() {
		aTl(), aTj()
	}

	function aTl() {
		aTb.qz.lastChild && u.removeChild(aTb.qz, aTb.qz.lastChild)
	}

	function aTj() {
		var aTm = bV.a6I(aE.data);
		aE.data.canvas = bV.aMy(aTm, aE.data.mapSeed).xt, aTk()
	}

	function aTk() {
		var a4E = aE.data.canvas;
		a4E.style.width = "100%", aTb.qz.appendChild(a4E)
	}
	this.aJY = function(a4E) {
		aE.data.canvas && aTl(), aE.data.canvas = a4E, aTk()
	}, this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(334), [new x("⬅️ " + L(40), aQp)]), 2 === aE.data.mapType && b7.di(), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(416), L(417), L(418)],
			value: aE.data.mapType
		}, function(eG) {
			2 === (aE.data.mapType = eG) ? (b7.di(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.v0()), u.v(20)
		})), 2 <= aE.data.mapType && (aPu.rB(new sw), aPu.rB(new si({
			value: aE.data.passableWater
		}, L(419), function(value) {
			aE.data.passableWater = value
		})), aPu.rB(new si({
			value: aE.data.passableMountains
		}, L(420), function(value) {
			aE.data.passableMountains = value
		})));
		rF.push(aPu)
	}(rF = []), function(rF) {
		if (0 === aE.data.mapType) {
			for (var aPu = new qx, tI = (aPu.r0(L(334)), []), aC = 0; aC < bV.xj.aNs.length; aC++) tI.push(bV.xj.xk[bV.xj.aNs[aC]].name);
			aPu.r8(new vc({
				tI: tI,
				value: aE.data.mapProceduralIndex
			}, function(eG) {
				aE.data.mapProceduralIndex = eG, aTi()
			})), rF.push(aPu)
		}
	}(rF), function(rF) {
		if (1 === aE.data.mapType) {
			for (var aPu = new qx, tI = (aPu.r0(L(334)), []), aC = 0; aC < bV.xj.aNt.length; aC++) tI.push(bV.xj.xk[bV.xj.aNt[aC]].name);
			aPu.r8(new vc({
				tI: tI,
				value: aE.data.mapRealisticIndex
			}, function(eG) {
				aE.data.mapRealisticIndex = eG, aTi()
			})), rF.push(aPu)
		}
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.mapType && ((aPu = new qx).r0(L(421)), aPu.rB(new s8(bm.eV.data[162], 1)), aPu.r0(L(422), "0.8em"), aPu.rB(new sm([new x(L(423), function() {
			return b7.aJR(), !0
		}).button])), rF.push(aPu))
	}(rF), function(rF) {
		var aPu, s7;
		2 === aE.data.mapType && ((aPu = new qx).r0(L(424)), s7 = new s8({
			eG: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aPu.rB(s7), rF.push(aPu))
	}(rF), function(rF) {
		var aPu, s7, aQ2;
		0 === aE.data.mapType && ((aPu = new qx).r0("Seed"), s7 = new s8({
			eG: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aTi())
		}), aQ2 = new x(L(325), function(e) {
			var aMt = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aMt) return s7.e.value = aE.data.mapSeed = aMt, aTi(), !0
		}), aPu.rB(s7), aPu.rB(new sm([aQ2.button])), rF.push(aPu))
	}(rF), function(rF) {
		(aTb = new qx).r0(L(425)), 2 !== aE.data.mapType ? aTj() : aE.data.canvas && aTk();
		rF.push(aTb)
	}(rF), rF))
}

function w(title, r7, aTn, aSv) {
	var aPY, aS4;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aS4.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aSv = aSv || [new x("⬅️ " + L(40), function() {
		u.a2W()
	})], aPY = new vg(title, aSv), aS4 = new sl(aPY.vm, r7), aTn && bD.rK.textAlign(aPY.vm.style, 1)
}

function aPM() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 === aE.data.playerNamesType && 1 === bD.rS.a3s(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.playerNamesType && bD.rS.a46(aQo.wC(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(338), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(339), L(340), L(303)],
			value: aE.data.playerNamesType
		}, function(eG) {
			aQr(), aE.data.playerNamesType = eG, u.v(23)
		})), aPu.rB(new sw), aPu.rB(new si({
			value: aE.data.selectableName
		}, L(426), function(value) {
			aE.data.selectableName = value
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu;
		2 === aE.data.playerNamesType && ((aPu = new qx).r0("Data"), aQo = new w4(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fO || (aE.data.playerNamesData = new Array(aE.fO), aE.data.playerNamesData
			.fill("")), aQo.wB(bD.sJ.a5b(aE.data.playerNamesData, 1, '"')), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aPU() {
	var aQm, aQn, rF;

	function aTt() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.eV.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fk = 0; fk < 3; fk++) fk < h.length && (colors[aC][fk] = Number(h[fk]))
		}
		return colors
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(427), [new x("⬅️ " + L(40), function() {
		u.a2W()
	})]), aQn = new rD(aQm.vm, ((rF = []).push(function() {
		var aPu = new qx;
		return aPu.r0(L(428)), aPu.r6(b1.z.aPv("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aPu.r6("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aPu
	}()), rF.push(function() {
		var aPu = new qx,
			ek = (aPu.r0(L(429)), bm.eV.data[174].value),
			r3 = aPu.r2(ek.length + " / 180"),
			aQU = (r3.style.textAlign = "center", new w4(0, 1, function(e) {
				var e = e.target.value,
					gu = e.length;
				r3.textContent = gu + " / 180", gu <= 180 && bm.po.pp(174, e)
			}));
		return aQU.e.rows = 6, aQU.e.style.fontSize = "1em", aQU.wB(ek), aPu.rB(aQU), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		aPu.r0(L(324));
		for (var aC = 0; aC < 11; aC++) {
			var im = aPu.rB(new s8(bm.eV.data[163 + aC]));
			aC && (im.e.style.marginTop = "0.6em")
		}
		return aPu.rB(new sm([new x(L(430), function() {
			for (var data = bm.eV.data, aC = 163; aC < 174; aC++) data[aC] && bm.eV.wR(aC, data[aC].wU);
			u.a2W(), u.aPX()[31] = null, u.v(31)
		}).button])), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		return aPu.r0("Targeting"), aPu.r6(L(431)), aPu.rB(new s8(bm.eV.data[175], 0, 0)), aPu
	}()), rF.push(function() {
		var aPu = new qx;
		return aPu.r0(L(425)), aPu.rB(new sm([new x(L(191), function() {
			(new ej).show(bm.eV.data[174].value, aTt(), -1)
		}).button])), aPu
	}()), rF.push(function() {
		var aPu = new qx,
			aTu = (aPu.r0(L(432)), aPu.r6(L(433)), new s8(bm.eV.data[176], 1, 0)),
			aTv = (aPu.rB(aTu), new x(L(434), function(e) {
				return aTw.button.textContent === L(186) && b1.z.ee(0) && (bD.rK.vZ(e), aQ1(), b1.aGd.aTx(bm.eV.data[176].value, aTt(), bm.eV.data[175].value, bm.eV.data[174].value)), !0
			}, 1)),
			aQ1 = function() {
				aTw.button.textContent = L(185), aTv.re(1), aTv.button.style.color = bE.oN
			},
			aTw = new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aTv.re(0), aTv.button.style.color = bE.pN) : aQ1(), !0
			});
		return aPu.rB(new sm([aTw.button, aTv.button])), aPu
	}()), rF))
}

function aPV() {
	var aPY, aPZ, rF;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg("🔒 " + L(435), [new x("⬅️ " + L(40), function() {
		u.a2W()
	})]), aPZ = new rD(aPY.vm, ((rF = []).push(function() {
		var aPu = new qx,
			s7 = (aPu.r6(b1.z.aPv("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", aPu.r0(L(187)), new s8({
				value: "",
				eG: -1
			})),
			aQQ = (aPu.rB(s7), aPu.r0(L(256), "0.8em"), new s8({
				value: "",
				eG: -1
			}, 0, 0)),
			aQ0 = (aQQ.e.type = "email", aQQ.e.autocomplete = "email", aQQ.e.name = "email", aQQ.e.inputMode = "email", aQQ.e.spellcheck = !1, aPu.rB(aQQ), new x(L(436), function(e) {
				return bD.rK.vZ(e), b1.aGd.aQR({
					action: 4,
					r1: s7.e.value.trim() + aQQ.e.value.trim().substring(0, 63)
				}), !0
			}));
		return aPu.rB(new sm([aQ0.button])), aPu
	}()), rF))
}

function aP7() {
	var aQm, w9;

	function aTz() {
		u.y();
		var r1 = bC.aU3(w9.wC());
		(aE.a1N && 0 < r1.length && r1 === bC.qe.a67 || bC.aKW.xe(r1)) && bC.aU4()
	}
	this.show = function(aU0) {
		this.aU1(aU0), aQm.show(), this.resize()
	}, this.aU1 = function(aU0) {
		0 === aE.a1N ? aU0 ? w9.wB(aU0) : aE.a5v.length && w9.wB(aE.a5v) : (aE.ha || (bC.qe.a67 = bC.a68.a0p()), w9.wB(bC.aU2(bC.qe.a67)))
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), w9.resize()
	}, this.a3S = function(ei) {
		2 === ei ? aQm.vn[0].rb() : aTz()
	}, aQm = new vg(L(437), [new x("⬅️ " + L(40), function() {
		u.aPW(1)
	}), new x(L(438), function() {
		w9.wD()
	}), new x(L(439), function() {
		w9.wE()
	}), new x(L(440), function() {
		w9.clear()
	}), new x(L(441), function() {
		aTz()
	})]), w9 = new w4(L(442)), aQm.vm.appendChild(w9.e)
}

function aP6() {
	var aPY, aPZ, rF, aPu;

	function aU5() {
		bA.aDX !== bm.eV.data[12].value ? (bA.di(), u.v(8, 1, new tc(30))) : u.v(1)
	}
	this.show = function() {
			aPY.show(), this.resize()
		}, this.sa = function() {
			aPY.sa()
		}, this.resize = function() {
			aPY.resize(), aPZ.resize()
		}, this.a3S = function(ei) {
			2 === ei && aPY.vn[0].rb()
		}, aPY = new vg(L(443), [new x("⬅️ " + L(40), aU5), new x(L(444), function() {
			u.y(), bm.po.x1(), u.v(2)
		})]), rF = [], (aPu = new qx).r0(L(445)), aPu.r2(L(446)), rF.push(aPu),
		function(rF) {
			var aPu = new qx,
				h = (aPu.r0(L(431)), bA.data.aDo());
			aPu.r8(new vc({
				tI: h,
				value: bA.data.aDs(h)
			}, function(eG) {
				return bm.po.pp(12, h[eG].split(":")[0]), !0
			})), rF.push(aPu)
		}(rF),
		function(rF) {
			var aPu = new qx,
				aU8 = (aPu.r0(L(471)), []);
			aPu.rB(new sm([new x(L(430), function(e) {
				ba.aU9();
				for (var aC = 0; aC < aU8.length; aC++) aU8[aC].e.value = ba.aD6[aC];
				return bD.rK.vZ(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aUA.length; aC++) {
				aPu.r2(ba.aUA[aC]);
				for (var fk = 0; fk < 2; fk++) {
					var eG = 2 * aC + fk,
						s7 = new s8({
							value: ba.aD6[eG],
							eG: -1
						});
					s7.e.aUB = eG, aU8.push(s7), s7.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aUC(e.target.aUB, code)
					}), fk && (s7.e.style.marginLeft = "4%"), s7.e.style.width = "48%", aPu.rB(s7)
				}
			}
			rF.push(aPu)
		}(rF), (aPu = new qx).r0(L(447)), bm.eV.data[1].tI = [L(448), L(449), L(450), L(451)], aPu.r8(new vc(bm.eV.data[1])), rF.push(aPu), (aPu = new qx).r0(L(452)), bm.eV.data[9].tI = [L(449), L(453), L(454)], aPu.r8(new vc(bm.eV.data[9])), rF
		.push(aPu), (aPu = new qx).r0(L(455)), bm.eV.data[11].tI = [L(456), L(9), L(457)], aPu.r8(new vc(bm.eV.data[11])), rF.push(aPu), (aPu = new qx).r0(L(458)), aPu.rB(new si(bm.eV.data[2])), rF.push(aPu), (aPu = new qx).r0(L(459)), aPu.rB(new si(
			bm.eV.data[7])), rF.push(aPu), (aPu = new qx).r0(L(460)), aPu.rB(new si(bm.eV.data[8])), rF.push(aPu), (aPu = new qx).r0(L(461)), aPu.rB(new s8(bm.eV.data[5])), rF.push(aPu), (aPu = new qx).r0(L(462)), aPu.rB(new si(bm.eV.data[13], L(
			463))), aPu.rB(new si(bm.eV.data[14], L(464))), rF.push(aPu), (aPu = new qx).r0(L(465)), aPu.r8(new vc({
			tI: [L(466), L(467), L(468)],
			value: aa.aHW
		}, function(aC) {
			aa.aHW = aC
		})), rF.push(aPu), (aPu = new qx).r0(L(469)), aPu.rB(new si(bm.eV.data[15])), aPu.r2(L(470)), aPu.rB(new s8(bm.eV.data[16], 1, 0, function(e) {
			e.target.value = bO.iZ(Math.floor(e.target.value), 0, 16)
		})), rF.push(aPu), aPZ = new rD(aPY.vm, rF)
}

function aPN() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 !== aE.data.spawningType || bD.rS.a3s(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.spawningType && bD.rS.a44(aQo.wC(), aE.data.spawningData, bV.aJb - 1)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(472), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx,
			tI = (aPu.r0(L(300)), [L(325), L(337), L(303)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (tI.splice(1, 1), 0 < value) && (value = 1);
		aPu.r8(new vc({
			tI: tI,
			value: value
		}, function(eG) {
			aQr(), aE.data.spawningType = eG, 0 === aE.data.gameMode && 1 === eG && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fO)), u.v(24)
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu = new qx;
		aPu.r0("My Spawn"), aPu.rB(new si({
			value: aE.data.selectableSpawn
		}, L(473), function(value) {
			aE.data.selectableSpawn = value
		})), rF.push(aPu)
	}(rF), function(rF) {
		var aPu = new qx,
			aUE = (aPu.r0("Seed"), new s8({
				eG: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		aPu.rB(aUE), aPu.rB(new sm([new x(L(325), function() {
			aUE.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), rF.push(aPu)
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.spawningType && ((aPu = new qx).r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.spawningData, 2)), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aP5() {
	var aPY, aSs, aSt, vh;

	function aUF(id) {
		0 !== a1.id || bm.eV.data[140].value ? 0 === id ? u.v(8, 1, new tc(16)) : u.v(2) : u.z.aSl(u.tb, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aPY.show(), this.resize(), this.ed()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aSs.resize()
	}, this.ed = function() {
		8 === ab.a2X() && (2 <= bg.aUK ? aSt[2].rc === bE.oZ && aSt[2].re(0) : aSt[2].rc !== bE.oZ && aSt[2].re(bE.oZ), !aE.ha && aN.qv(aE.fB) ? aSt[1].rc === bE.oZ && aSt[1].re(0) : aSt[1].rc !== bE.oZ && aSt[1].re(bE.oZ), !aE.ha && ax.iG(aE
			.fB) ? aSt[0].rc === bE.oZ && aSt[0].re(0) : aSt[0].rc !== bE.oZ && aSt[0].re(bE.oZ))
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aSt = [new x(L(474), function() {
		aUF(0)
	}), new x(L(361), function() {
		u.v(16)
	}), new x(L(411), function() {
		u.v(17)
	}), new x(L(475), function() {
		u.z.aRg()
	}, 0, 0, 1), new x(L(437), function() {
		u.v(3, 1)
	}), new x(L(476), function() {
		u.v(18)
	}), new x(L(427), function() {
		u.v(31)
	}), new x(L(477), function() {
		u.z.a6B(2)
	}), new x(L(443), function() {
		aUF(1)
	}), new x("🔒 " + L(435), function() {
		u.v(32)
	}), new x(L(478), function() {
		var a4e, rO;
		(a4e = []).push(["Wiki", (rO = "https://territorial.io/") + "wiki/gold"]), a4e.push(["Team Games", rO + "log/team"]), a4e.push(["Battle Royale Games", rO + "log/br"]), a4e.push(["1v1 Games", rO + "log/1v1"]), a4e.push([
			"Zombie Games", rO + "log/zombies"
		]), a4e.push(["Transactions", rO + "log/transactions"]), a4e.push(["Changelog", rO + "changelog"]), 2 !== a1.id && a4e.push(["Android App", bN.aE5]), 1 !== a1.id && a4e.push(["iOS App", bN.a2S]), 0 === a1.id && a4e.push([
			"Patreon", bN.aQk
		]), a4e.push(["Terms", bN.aUL]), a4e.push(["Privacy", bN.aUM]), u.v(4, 1, new w(L(478), bD.rK.a4d(a4e), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	}), new x(L(479), function() {
		u.v(4, 1, new w(L(479), m.e1 + "<br>" + b1.z.aPv("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(40),
				function() {
					u.v(1)
				})]))
	}), new x(L(480), function() {
		u.v(4, 1, new w(L(480), L(487) + "<br>" + L(488), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(489), function() {
			a1.a2.a2M(), u.v(1)
		})]))
	}), new x("👁️ " + L(481), function() {
		a1.a2.a2N(), u.v(4, 1, new w(L(490), L(491) + " " + b1.z.aPv("/privacy"), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	})], vh = [new x("⬅️ " + L(40), function() {
		u.z.aDl()
	})], 8 === ab.a2X() && (aSt.unshift(new x(L(348), function() {
		u.v(30)
	})), aSt.unshift(new x(L(484), function() {
		2 <= bg.aUK && (u.y(), bh.a3V(), bi.dq = !0)
	}, 0, 1)), aSt.unshift(new x(L(485), function() {
		!aE.ha && aN.qv(aE.fB) && (bB.hr.q8(), u.y(), aN.hb) && aN.a3V()
	}, 0, 1)), aSt.unshift(new x(L(486), function() {
		!aE.ha && ax.iG(aE.fB) && (bY.a6n(2), bB.hr.iC(), u.y(), aN.hb) && aN.a3V()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e1 && aSt.push(new x(L(482), function() {
		a1.a2.a2O()
	})), aPY = new vg(L(483), vh), aSs = new rs(aSt, aPY.vm)
}

function aPR() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.sResourcesType && bD.rS.a44(aQo.wC(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(343), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(301), L(302), L(303)],
			value: aE.data.sResourcesType
		}, function(eG) {
			aQr(), 2 !== eG || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fO)), aE.data.sResourcesType = eG, u.v(28)
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu;
		1 === aE.data.sResourcesType && ((aPu = new qx).r0("Value"), aPu.rB(new s8({
			eG: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.iZ(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), rF.push(aPu))
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.sResourcesType && ((aPu = new qx).r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.sResourcesData, 2)), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aPP() {
	var aQm, aQn, aQo, rF;

	function aQp() {
		aQr(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aPX()[19] = null, u.a2W()
	}

	function aQr() {
		2 === aE.data.tIncomeType && bD.rS.a44(aQo.wC(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aQm.show(), this.resize()
	}, this.sa = function() {
		aQm.sa()
	}, this.resize = function() {
		aQm.resize(), aQn.resize()
	}, this.a3S = function(ei) {
		2 === ei && aQm.vn[0].rb()
	}, aQm = new vg(L(341), [new x("⬅️ " + L(40), aQp)]), aQn = new rD(aQm.vm, (function(rF) {
		var aPu = new qx;
		aPu.r0(L(300)), aPu.r8(new vc({
			tI: [L(301), L(302), L(303)],
			value: aE.data.tIncomeType
		}, function(eG) {
			aQr(), 2 !== eG || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fO), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eG, u.v(26)
		})), rF.push(aPu)
	}(rF = []), function(rF) {
		var aPu;
		1 === aE.data.tIncomeType && ((aPu = new qx).r0("Value"), aPu.rB(new s8({
			eG: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iZ(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), rF.push(aPu))
	}(rF), function(rF) {
		var aPu;
		2 === aE.data.tIncomeType && ((aPu = new qx).r0("Data"), (aQo = new w4(0, 1, 0, 1)).wB(bD.sJ.a5b(aE.data.tIncomeData, 4)), aPu.rB(aQo), rF.push(aPu))
	}(rF), rF))
}

function aPH() {
	var aPY, aPZ, rF;
	this.show = function() {
		aPY.show(), this.resize()
	}, this.sa = function() {
		aPY.sa()
	}, this.resize = function() {
		aPY.resize(), aPZ.resize()
	}, this.a3S = function(ei) {
		2 === ei && aPY.vn[0].rb()
	}, aPY = new vg(L(476), [new x("⬅️ " + L(40), function() {
		u.a2W()
	})]), aPZ = new rD(aPY.vm, ((rF = []).push(function() {
		function aQ1() {
			aTw.button.textContent = L(185), aUP.e.readOnly = !1, aUQ.e.readOnly = !1, aQ0.re(1), aQ0.button.style.color = bE.oN
		}
		var aPu = new qx,
			aUO = (aPu.r6(b1.z.aPv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aPu.r0(L(492)), new s8({
				value: bm.eV.data[105].value,
				eG: -1
			})),
			aUP = (aUO.e.readOnly = !0, aPu.rB(aUO), aPu.r0(L(387), "0.8em"), new s8(bm.eV.data[148], 0, void 0, function(e) {
				aPz(bm.eV.data[149].value, e.target.value)
			})),
			aUQ = (aPu.rB(aUP), aPu.r0(L(391), "0.8em"), new s8(bm.eV.data[149], 1, void 0, function(e) {
				aPz(e.target.value, bm.eV.data[148].value)
			})),
			aTw = (aPu.rB(aUQ), new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aUP.e.readOnly = !0, aUQ.e.readOnly = !0, aQ0.re(0), aQ0.button.style.color = bE.pN, bm.po.pp(149, aUQ.e.value), aPz(bm.eV.data[149].value, bm.eV.data[
					148].value)) : aQ1(), !0
			})),
			aQ0 = (aPu.rB(new sm([aTw.button])), new x(L(14), function(e) {
				return aUP.e.readOnly && b1.z.ee(0) && (bD.rK.vZ(e), aQ1(), b1.aGd.aGe({
					action: 0,
					tZ: bm.eV.data[148].value,
					value: parseInt(bm.eV.data[149].value, 10)
				})), !0
			}, 1)),
			r3 = aPu.r2(),
			aPz = (aPu.r2(L(493)).style.fontWeight = "bold", function(ft, r1) {
				r3.innerHTML = u.z.aQ3(ft, bm.eV.data[105].value, r1)
			});
		return aPu.rB(new sm([aQ0.button])), aPz(bm.eV.data[149].value, bm.eV.data[148].value), aPu
	}()), rF))
}

function bz() {
	"function" != typeof Math.log2 && (Math.log2 = function(fY) {
		return Math.log(fY) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fY) {
		return Math.log(fY) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fY) {
		return 0 < fY ? 1 : fY < 0 ? -1 : 0
	})
}

function cl() {
	var aAl, aUS, aUT, aUU, aUR = !1;

	function aUV() {
		aUR = !0, aAl = -1, aUS = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aUS[aC] = !1;
		var yj = Math.floor(1 + .02 * i.min);
		aUT = new Array(4), (aUU = new Array(4))[1] = aUU[3] = aUT[0] = aUT[2] = 0, aUU[0] = aUT[3] = -yj, aUT[1] = aUU[2] = yj
	}

	function aUW() {
		if (-1 !== aAl)
			if (0 !== aE.a1N && aI.o5()) {
				for (var aUX = !1, aC = 3; 0 <= aC; aC--) aUS[aC] && (aUX = !0, j5 += aUT[aC], j6 += aUU[aC], ag.a2u(aUT[aC], aUU[aC]), aT.aAR());
				aUX ? bi.dq = !0 : at.nv()
			} else at.nv()
	}
	this.a3Q = function(eG) {
		0 !== aE.a1N && aI.o5() && (aUR || aUV(), aUS[eG] = !0, -1 === aAl) && (aAl = setInterval(aUW, 20), aUW())
	}, this.a3T = function(eG) {
		if (0 !== aE.a1N && (aUR || aUV(), aUS[eG] = !1, -1 !== aAl)) {
			for (var aUX = !1, aC = 3; 0 <= aC; aC--) aUX = aUX || aUS[aC];
			aUX || this.nv()
		}
	}, this.nv = function() {
		if (aUR && -1 !== aAl) {
			for (var aC = 3; 0 <= aC; aC--) aUS[aC] = !1;
			clearInterval(aAl), aAl = -1
		}
	}
}

function cm() {
	this.z = new aUY, this.n4 = new aUZ, this.pm = new aUa, this.aG5 = new aUb, this.ef = new aUc, this.aGd = new aUd, this.qR = new aUe, this.aSA = new aUf, this.a7x = new aUg, this.aUh = new aUi, this.aUj = new aUk, this.aUl = new aUm, this.aUn =
		new aUo, this.di = function() {
			this.z.di()
		}
}

function aUY() {
	var aUq, aUr;
	this.aHa = 3, this.aUp = null, this.a2f = 0, this.ez = 0;

	function aV0() {
		return 0 === aa.aHW ? m.e3 ? 1 : 0 : aa.aHW - 1
	}

	function aV3(a2U, a2c, aV2) {
		aUr[a2U].aUR = !0, aUw(a2U), aUq[a2U] = new aV6, aUq[a2U].di(a2U, a2c, aV2)
	}

	function aV4(aC) {
		return aUr[aC].aUR && aUq[aC].aV4()
	}

	function aUw(a2U) {
		aUr[a2U].eY = bi.eY, aUr[a2U].aUt = !1
	}
	this.di = function() {
		this.aUp = new Array(this.aHa), this.aUp[0] = "territorial.io", this.aUp[1] = "1.territorial.io", this.aUp[2] = "2.territorial.io", aUq = new Array(this.aHa), aUr = new Array(this.aHa);
		for (var aC = this.aHa - 1; 0 <= aC; aC--) aUr[aC] = {
			aUR: !1,
			eY: 0,
			aUt: !1
		};
		this.aHb(0, 0, 0)
	}, this.aUu = function(aC) {
		return aUq[aC]
	}, this.ed = function() {
		for (var aC = this.aHa - 1; 0 <= aC; aC--) this.ee(aC) && bi.eY > aUr[aC].eY + 15e3 && (b1.pm.aUv(aC, aUr[aC].aUt), aUw(aC));
		!this.ee(0) && bi.eY > aUr[0].eY + 8e3 && (aUr[0].eY = bi.eY, this.aHb(0, 0, 0))
	}, this.aS7 = function(id) {
		return this.aHb(0, id, 0) && this.aUx(0)
	}, this.aUy = function(aUz) {
		return aUz ? aa.aHX : aV0()
	}, this.a1n = function() {
		return aV0() ? "game.territorial.io" : "territorial.io"
	}, this.aPv = function(aV1) {
		aV1 = this.a1n() + aV1;
		return "<a href='https://" + aV1 + "' target='_blank'>" + aV1 + "</a>"
	}, this.aHb = function(a2U, a2c, aUz) {
		aUz = this.aUy(aUz);
		if (aUr[a2U].aUR) {
			if (aUq[a2U].aV4()) return aUq[a2U].aV5(a2c), aUq[a2U].ee();
			aUq[a2U].sa()
		}
		return aV3(a2U, a2c, aUz), !1
	}, this.aV7 = function(a2U, a2c) {
		console.log("Connection to Server " + a2U), b1.ef.aV8(a2U)
	}, this.aUx = function(aC) {
		return this.ee(aC) && aUq[aC].aUx()
	}, this.aV9 = function(aC) {
		aUq[aC].aV9()
	}, this.ee = function(aC) {
		return aUr[aC].aUR && aUq[aC].ee()
	}, this.send = function(a2U, aD) {
		0 !== a2U && aUw(a2U), aUq[a2U].send(aD)
	}, this.a3B = function(a2U) {
		8 === ab.a2X() && (aUr[a2U].aUt = !0, b1.n4.aVA = !0)
	}, this.close = function(a2U, aVB) {
		aV4(a2U) && aUq[a2U].close(aVB)
	}, this.aVC = function(a2U, aVB) {
		p.a2i(aVB), aV4(a2U) && aUq[a2U].close(aVB)
	}, this.a2k = function(aVB) {
		for (var aC = this.aHa - 1; 0 <= aC; aC--) this.close(aC, aVB)
	}, this.aVD = function(a2U, aVB) {
		for (var aC = this.aHa - 1; 0 <= aC; aC--) aC !== a2U && this.close(aC, aVB)
	}, this.a69 = function() {
		0 === this.a2f && (aE.l6 || aE.ha) || this.close(this.a2f, 3246)
	}, this.aVE = function(a2U, e) {
		aUq[a2U].sa(), p.a2T(a2U, e.code)
	}
}

function aUZ() {
	this.aVA = !1, this.ed = function() {
		bi.kj() % 250 != 249 || aE.ha || (b1.ef.aVF(+(this.aVA && ah.nM[aE.fB]), am.lI + bQ.z.mc), this.aVA = !1)
	}
}

function aUg() {
	this.aVH = function(a2U, aD) {
		bK.di(aD), 0 === bK.size ? b1.z.aVC(a2U, 3205) : ((0 === bK.qS(1) ? function(a2U) {
			var aVL = bK.qS(6);
			0 === aVL ? function(a2U) {
					if (0 === a2U && 8 !== ab.a2X()) {
						u.z.aTa();
						for (var aVa = bK.qS(12), aVb = bK.qS(6), h = new Array(aVa), aC = 0; aC < aVa; aC++) h[aC] = bK.qS(aVb);
						aU.aAr(h)
					}
				}(a2U) : 2 === aVL ? b1.aUh.aVN(a2U) : 3 === aVL || 4 === aVL ? ay.di() : 5 === aVL ? b1.aUj.aVO() : 9 === aVL ? b1.aUj.aVP(a2U) : 10 === aVL ? b1.aUl.aVQ() : 11 === aVL ? b1.aUj.aVR(a2U) : 12 === aVL ? b1.aUl.aVS() :
				13 === aVL ? b1.aUn.aVT() : 14 === aVL ? b1.aUn.aVU() : 15 === aVL ? b1.aUj.aVV() : 16 === aVL ? b1.aUh.aVW(a2U) : 17 === aVL ? b1.aUh.aVX(a2U) : 19 === aVL ? b1.aUh.aVY(a2U) : 20 === aVL && b1.aUj.aVZ(a2U)
		} : function(a2U) {
			if (8 !== ab.a2X() && !ay.aI5()) return;
			if (a2U !== b1.z.a2f) b1.z.aVC(a2U, 3244);
			else if (0 === bK.qS(1)) bi.a1X.aVc(bK.aD);
			else {
				var aC, a2U = bK.qS(2);
				if (0 === a2U) {
					var q3, pm = bK.qS(9);
					0 !== ah.nM[pm] && 0 !== ah.nM[aE.fB] && (q3 = bK.qS(10), aO.q2(pm, aE.fB, q3), ag.qt(pm, 1, q3))
				} else if (1 === a2U) ! function() {
					var pm = bK.qS(9);
					0 !== ah.nM[pm] && 0 !== ah.nM[aE.fB] && b6.aMU(0, [pm], !0) && aO.qK(pm, 1)
				}();
				else if (2 === a2U) ! function() {
					var pm = bK.qS(9),
						target = bK.qS(9);
					0 !== ah.nM[pm] && 0 !== ah.nM[target] && 0 !== ah.nM[aE.fB] && b6.aMU(1, [pm], !0) && (ag.qt(pm, 3, 96), ag.qt(target, 4, 96), aO.a84(pm, target))
				}();
				else if (m.aA && !m.aB) {
					var fR = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fR = Math.min(bB.pi.qU.length, 540), aC = 0; aC < fR; aC++) bG.aVi(32, bB.pi.qU[aC]);
					b1.z.send(b1.z.a2f, bG.aD)
				}
			}
		})(a2U), bi.aVK())
	}
}

function aUm() {
	this.aVQ = function() {
		bm.z.wr(), bm.po.pp(105, bI.td.te(bI.td.tf(5))), bm.po.pp(106, bI.td.te(bI.td.tf(15))), bm.po.pp(109, 0), bm.po.pp(108, bm.eV.data[109].value), bm.po.pp(111, bm.eV.data[109].value + 1), bm.po.pp(107, 0), bm.po.pp(110, "")
	}, this.aVS = function() {
		var data;
		bK.size < bG.aVj(29) ? b1.z.aVC(0, 3254) : ((data = {
			ta: bK.qS(30),
			x5: bK.qS(16),
			x6: bK.qS(30),
			x7: bK.qS(30),
			x8: bK.qS(30),
			x9: bK.aVk(32),
			username: bJ.xM.xe(5),
			xA: bJ.xM.xe(3),
			xB: bJ.xM.xe(3),
			xC: bK.aVk(32),
			xD: bK.aVk(32),
			xE: bK.qS(30),
			xF: bK.aVk(32),
			xG: bK.aVk(32),
			xH: bK.aVk(32),
			xI: bK.aVk(32),
			aQB: bK.aVk(32),
			aQC: bK.aVk(30),
			aQc: bK.aVk(32),
			aQd: bJ.xM.xe(3),
			aQV: bK.aVk(2),
			aQX: bK.aVk(10),
			aQT: bJ.xM.xe(8),
			aQW: bK.aVk(5),
			aPx: bK.qS(30),
			aQ8: bK.qS(30),
			a1q: bK.aVk(32),
			aQG: bK.qS(3),
			aQF: bK.qS(8),
			aQ9: bK.qS(30),
			aQA: bK.aVk(32),
			aQE: bK.qS(1),
			aQP: bJ.xM.xe(6),
			aQH: bK.qS(1),
			aQI: bK.qS(1),
			aQJ: bK.qS(1),
			aQe: bK.qS(1),
			aQf: bK.qS(1)
		}).aQe && (data.aQg = bK.aVk(32), data.aQh = bK.qS(30), data.aQi = bK.qS(30), data.aQj = bK.qS(1)), 8 === u.tb && (25 === u.a2b().aS6 ? (data.aPa = !0, u.z.aPE = data, u.a2b().aDk(25, !1)) : (data.aPa = !1, bm.po.pp(160, +(data
			.aQe && data.aQj)), data.tZ = bm.eV.data[105].value, u.z.aPB = data, bm.po.x4(data), u.a2b().aDk(16, !0))))
	}
}

function aUo() {
	this.aVT = function() {
		var aC;
		if (bK.size < bG.aVj(23)) b1.z.aVC(0, 3259);
		else {
			var tu = bK.qS(6),
				fR = bK.qS(10),
				data = [];
			if (9 === tu || 10 === tu || 11 === tu || 13 === tu) {
				for (aC = 0; aC < fR; aC++) data.push([bK.qS(30), bJ.xM.xe(5), bK.aVk(32), 0, bK.qS(30)]);
				8 === u.tb && u.a2b().aDk(21, !0, {
					tu: tu,
					data: data
				})
			} else if (12 === tu) {
				for (aC = 0; aC < fR; aC++) data.push([bK.qS(20), bK.qS(30), bK.qS(30), bK.aVk(32), bK.qS(30), bJ.xM.xe(5), bJ.xM.xe(5)]);
				8 === u.tb && u.a2b().aDk(21, !0, {
					tu: tu,
					data: data
				})
			} else {
				var iO = bK.qS(16);
				if (bK.aVl(39 + 16 * iO + fR * (0 === tu ? 111 : 1 === tu ? 101 : 2 === tu || 3 === tu ? 127 : 212))) {
					if (0 === tu)
						for (aC = 0; aC < fR; aC++) data.push([bK.qS(30), bJ.xK.xO(bK.qS(5)), bK.qS(16), bK.qS(30), bK.qS(30)]);
					else if (1 === tu)
						for (aC = 0; aC < fR; aC++) data.push([bK.qS(16), bJ.xK.xO(bK.qS(3)), bK.qS(16), bJ.xK.xO(bK.qS(5)), bK.qS(31), bK.qS(30)]);
					else if (2 === tu || 3 === tu)
						for (aC = 0; aC < fR; aC++) data.push([bK.qS(30), bJ.xK.xO(bK.qS(5)), bK.aVk(32), bK.qS(30), bK.qS(30)]);
					else
						for (aC = 0; aC < fR; aC++) data.push([bK.qS(20), bK.qS(30), bK.qS(30), bK.qS(30), bK.qS(30), bK.aVk(32), bK.qS(30), bJ.xK.xO(bK.qS(5)), bJ.xK.xO(bK.qS(5))]);
					8 === u.tb && u.a2b().aDk(21, !0, {
						tu: tu,
						data: data
					})
				} else b1.z.aVC(0, 3260)
			}
		}
	}, this.aVU = function() {
		if (bK.size < bG.aVj(29)) b1.z.aVC(0, 3265);
		else {
			var aVm = bK.qS(4),
				aVn = bK.qS(7),
				aVo = bK.qS(11);
			if (bK.aVl(29 + 16 * aVn + 16 * aVo + 11 * aVm)) {
				for (var data = [], aC = 0; aC < aVm; aC++) {
					for (var a25 = bJ.xK.xO(bK.qS(3)), aVp = bK.qS(8), aRG = [], fk = 0; fk < aVp; fk++) aRG.push(bK.qS(16));
					data.push({
						name: "[" + a25 + "]",
						aRG: aRG
					})
				}
				8 === u.tb && u.a2b().aDk(23, !0, data)
			} else b1.z.aVC(0, 3266)
		}
	}
}

function aUi() {
	function aVr() {
		var id = bK.qS(3);
		return 0 === id ? {
			id: id,
			tZ: bK.qS(30),
			s: bq.aEB.aGA(bJ.xM.xe(7))
		} : 1 === id ? {
			id: id,
			tZ: bK.qS(30),
			aFC: bK.qS(3),
			value: bK.qS(30),
			target: bK.qS(30)
		} : 2 === id ? {
			id: id,
			tZ: bK.qS(30),
			aFC: bK.qS(3)
		} : 3 === id ? {
			id: id,
			tZ: bK.qS(30),
			aFC: bK.qS(3),
			value: bK.qS(4),
			target: bK.qS(30)
		} : 4 === id ? {
			id: id,
			tZ: bK.qS(30),
			aFC: bK.qS(3),
			target: bK.qS(30)
		} : 5 === id ? {
			id: id,
			aFC: bK.qS(6)
		} : 6 === id ? {
			id: id,
			value: bK.qS(17)
		} : null
	}
	this.aVN = function(a2U) {
		if (a2U !== b1.z.ez) b1.z.close(a2U, 3239);
		else if (6 !== ab.a2X()) b1.z.close(a2U, 3271);
		else {
			bq.di();
			for (var aC = 0; aC < 4; aC++) {
				var sO = bq.z.sP[aC],
					playerCount = (sO.uS = bK.qS(10), sO.f7 = bK.qS(6), sO.mapSeed = bK.qS(14), sO.aEx = bK.qS(4), sO.aGh = bK.qS(6), sO.aGi = bK.qS(14), sO.aGj = bK.qS(4), sO.aF3 = bK.qS(1), sO.aFl = bK.qS(12), sO.spawningSeed = bK.qS(14), bK
						.qS(16));
				bq.uj.ul[aC] = bK.qS(16);
				for (var fk = 0; fk < playerCount; fk++) bq.uj.aEP(aC, bK.qS(30), bJ.xM.xe(5), bK.qS(4), bK.qS(30), bK.qS(7), bK.qS(16), bK.qS(18), bK.qS(11), bK.qS(12))
			}
			u.v(29), bq.z.aFd(!0)
		}
	}, this.aVW = function(a2U) {
		if (a2U !== b1.z.ez) b1.z.close(a2U, 3239);
		else if (bq.ey) {
			bq.z.aFb[0] = bK.qS(20), bq.z.aFb[1] = bK.qS(20);
			for (var aVq = bK.qS(16), fk = 0; fk < aVq; fk++) {
				var id = bK.qS(3);
				0 === id ? bq.uj.aEP(bK.qS(2), bK.qS(30), bJ.xM.xe(5), 0, 1234566, 127, 0, bK.qS(18), 0, bK.qS(12)) : 1 === id ? bq.uj.aEi(bK.qS(16), bK.qS(2)) : 2 === id ? bq.uj.aEe(bK.qS(16), bK.qS(2), bK.qS(2)) : 3 === id ? bq.uj.aEh(bK.qS(
					16), bK.qS(2)) : 4 === id ? bq.uj.aEX(bK.qS(16), bK.qS(2), bK.qS(4), bK.qS(30), bK.qS(7), bK.qS(16), bK.qS(11), bK.qS(18)) : 5 === id && bq.uj.aEY(bK.qS(16), bK.qS(2), bK.qS(1))
			}
			for (var aC = 0; aC < 4; aC++) {
				var sO = bq.z.sP[aC];
				if (sO.uS = bK.qS(10), sO.aGh = bK.qS(6), sO.aGi = bK.qS(14), sO.aGj = bK.qS(4), 0 === sO.uS) {
					if (sO.a2f = bK.qS(10), sO.aF1 = bK.qS(10), bq.aED.dr(aC)) return;
					sO.f7 = bK.qS(6), sO.mapSeed = bK.qS(14), sO.aEx = bK.qS(4), sO.aF3 = bK.qS(1), sO.aFl = bK.qS(12), sO.spawningSeed = bK.qS(14), sO.aGk.push(sO.aGk[0]), sO.aGk.shift()
				}
			}
			bq.z.aEt()
		} else b1.z.close(a2U, 3251)
	}, this.aVX = function(a2U) {
		if (a2U !== b1.z.ez) b1.z.close(a2U, 3272);
		else if (bq.ey) {
			for (var sM = bK.qS(4), sO = bq.z.sP[sM], sQ = sO.sQ, uz = (sO.sR = bK.qS(20), bK.qS(6)), aC = 0; aC < uz; aC++) {
				var aH1 = aVr();
				bq.sZ.aH0(aH1), sQ.push(aH1)
			}
			bq.z.aFm(sM)
		} else b1.z.close(a2U, 3273)
	}, this.aVY = function(a2U) {
		a2U !== b1.z.ez ? b1.z.close(a2U, 3276) : bq.ey ? bq.message.aEr(aVr()) : b1.z.close(a2U, 3277)
	}
}

function aUk() {
	this.aVO = function() {
		for (var id = bK.qS(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.qS(8), bK.qS(8), bK.qS(8)]);
		var ek = bJ.xM.xe(8);
		bX.eQ.eh({
			id: id,
			colors: colors,
			ek: ek
		})
	}, this.aVZ = function(a2U) {
		var aVs = bK.qS(3),
			fU = bK.qS(5),
			fU = bl.aVt.aVu(fU, bK.qS(30), bK.qS(30), bK.qS(30));
		b1.ef.aVv(a2U, fU, aVs, 0)
	}, this.aVP = function(a2U) {
		this.aVZ(a2U), bm.po.pp(183, bI.td.te(bI.td.tf(15))), 0 === a2U && 0 === bm.eV.data[105].value.length ? b1.ef.eg(0) : b1.aGd.aVw(a2U), 4 === b1.z.aUu(a2U).aVx() ? 6 === ab.a2X() && b1.aG5.aHc(a2U) : 5 !== b1.z.aUu(a2U).aVx() || 8 !== ab
			.a2X() && 10 !== ab.a2X() || b1.pm.aI1()
	}, this.aVR = function(a2U) {
		var id = bK.qS(6);
		1 === id ? (bm.po.pp(160, bK.qS(30)), b1.z.aV9(a2U), aU.aAn || b1.ef.eg(1), bA.aDg(), 8 === u.tb && u.a2b().aSJ()) : 21 === id ? 8 === u.tb && u.a2b().aDk(17) : 22 === id && (bm.po.pp(106, bm.eV.data[110].value), bm.po.pp(110, ""), 8 ===
			u.tb) && u.a2b().aDk(15)
	}, this.aVV = function() {
		var fR = bK.qS(16),
			aVy = bK.qS(16);
		if (bK.aVl(55 + 10 * fR + 16 * aVy)) {
			for (var h = [], aC = 0; aC < fR; aC++) h.push(bJ.xK.xO(bK.qS(10)));
			bA.aDj(h)
		} else b1.z.aVC(0, 3270)
	}
}

function aUa() {
	this.aUv = function(a2U, aUt) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aUt ? 1 : 0), bG.a9(3, 0 === aE.a1N ? bq.ey ? 6 : 0 : aE.ha ? 1 : aE.l6 ? 7 : aE.l4 < 7 ? 2 : 8 === aE.l4 ? 4 : 9 === aE.l4 ? 5 : 3), b1.z.send(a2U, bG.aD)
	}, this.aI1 = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.ez), bG.a9(10, ay.aF1), bG.a9(9, ay.aHu), bG.a9(10, m.e5), bG.a9(14, m.du), b1.z.send(b1.z.a2f, bG.aD)
	}, this.pn = function(fD) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fD), b1.z.send(b1.z.a2f, bG.aD)
	}, this.pq = function(j4, jv) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, j4), bG.a9(10, jv), b1.z.send(b1.z.a2f, bG.aD)
	}, this.pu = function(j4, ps) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, j4), bG.a9(9, ps), b1.z.send(b1.z.a2f, bG.aD)
	}, this.pw = function(j4, pv) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, j4), bG.a9(27, pv), b1.z.send(b1.z.a2f, bG.aD)
	}, this.py = function(j4, nk) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, j4), bG.a9(16, nk), b1.z.send(b1.z.a2f, bG.aD)
	}, this.q1 = function(jv) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, jv), b1.z.send(b1.z.a2f, bG.aD)
	}, this.q5 = function(eG) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eG), b1.z.send(b1.z.a2f, bG.aD)
	}, this.q7 = function(q6) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, q6), b1.z.send(b1.z.a2f, bG.aD)
	}, this.q9 = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a2f, bG.aD)
	}, this.qA = function(j4, fD, jv) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, j4), bG.a9(10, jv), bG.a9(22, fD), b1.z.send(b1.z.a2f, bG.aD)
	}, this.qI = function(aVz, aW0) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aW0), bG.a9(10, aVz), b1.z.send(b1.z.a2f, bG.aD)
	}, this.qL = function(a7x) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a7x), b1.z.send(b1.z.a2f, bG.aD)
	}, this.qP = function(aW1, target) {
		var aC, fR = aW1.length;
		for (bG.a8(14 + 9 * fR), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fR; aC++) bG.a9(9, aW1[aC]);
		b1.z.send(b1.z.a2f, bG.aD)
	}
}

function aUd() {
	this.aW2 = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.ef.aW3(), b1.z.send(0, bG.aD)
	}, this.aVw = function(a2U) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.td.xa(bm.eV.data[105].value, 5), bJ.td.xa(bm.eV.data[106].value, 15), b1.z.send(a2U, bG.aD)
	}, this.aSK = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.td.xa(bm.eV.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aQR = function(a5E) {
		var fR = a5E.r1.length;
		bG.a8(21 + 16 * fR), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a5E.action), bG.a9(8, fR), bI.xK.xZ(a5E.r1), b1.z.send(0, bG.aD)
	}, this.aTx = function(x9, colors, aW5, ek) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(x9, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fk = 0; fk < 3; fk++) bH.a9(8, colors[aC][fk]);
		x9 = bA.data.aDn(aW5.trim());
		bH.a9(8, -1 === x9 ? 255 : x9), bI.xM.a0p(ek.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aW6())
	}, this.aQY = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.td.xa(data.tZ, 5), b1.z.send(0, bG.aD)
	}, this.aGe = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.td.xa(data.tZ, 5), bG.aVi(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aUe() {
	this.qQ = function() {
		for (var fR = aE.km, a1C = bU.result.a1C, lh = a1C.length, a1y = (bG.a8(17 + 16 * fR + 33 * lh), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lh), bG.a9(1, +(2 === aE.a1K)), bG.a9(1, aE.a1f % 2), ah.a1y), aC = 0; aC < fR; aC++) bG.a9(16, a1y[
		aC]);
		for (var hF = ah.hF, aC = 0; aC < lh; aC++) {
			var gz = a1C[aC];
			bG.a9(9, gz), bG.a9(24, hF[gz])
		}
		b1.z.send(b1.z.a2f, bG.aD)
	}
}

function aUf() {
	this.aSB = function(tu, tv, tw) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, tu), bG.a9(1, +(tv < 0)), bG.a9(1, +(tw < 0)), bG.a9(30, Math.abs(tv)), bG.a9(30, Math.abs(tw)), b1.z.send(0, bG.aD)
	}, this.aSC = function(tu, aSD, aSE) {
		bG.a8(18 + 16 * aSD.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, tu), b1.ef.aW7(aSD), bG.a9(30, aSE), b1.z.send(0, bG.aD)
	}, this.aSH = function(tu, aSD, aSE) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, tu), bJ.td.xa(aSD, 5), bG.a9(30, aSE), b1.z.send(0, bG.aD)
	}, this.aSF = function(aRF, a24) {
		for (var fR = a24.length, iO = 0, aC = 0; aC < fR; aC++) iO += a24[aC].length;
		for (bG.a8(21 + 3 * fR + 16 * iO), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aRF), bG.a9(4, fR), bG.a9(7, iO), aC = 0; aC < fR; aC++) bG.a9(3, a24[aC].length), bI.xK.xZ(a24[aC]);
		b1.z.send(0, bG.aD)
	}, this.aSG = function(aRF, tv, tw) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aRF), bG.a9(1, +(tv < 0)), bG.a9(1, +(tw < 0)), bG.a9(20, Math.abs(tv)), bG.a9(20, Math.abs(tw)), b1.z.send(0, bG.aD)
	}
}

function aUb() {
	this.aHc = function(a2U) {
		var username = bm.eV.data[122].value.slice(0, 20),
			username = (bG.a8(24 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e5), bG.a9(2, bm.eV.data[158].value), b1.ef.aW7(username), bD.color.a4J(bm.z.wy()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.ez = a2U, b1.z.send(a2U, bG.aD)
	}, this.aG6 = function(aW8, a5E) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aW8), 2 === aW8 ? bH.a9(2, a5E) : 3 === aW8 ? bI.xM.a0p(a5E, 7, bH) : 5 === aW8 && (bH.a9(3, a5E.id), bH.a9(3, a5E.value), bH.a9(30, a5E.tZ)), b1.z.send(b1.z.ez, bH.aW6())
	}
}

function aUc() {
	this.aV8 = function(a2U) {
		var aWF;
		bG.a8(55 + bl.aW9.qS()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.du), bG.a9(4, a1.id), bG.a9(7, a1.e1), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aWF = bA.aDm(), bG.a9(8, aWF[0]), bG.a9(8, aWF[1]), bl.aW9
		.a0p(), b1.z.send(a2U, bG.aD)
	}, this.aVv = function(a2U, rq, aVs, aWB) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aVs), bG.a9(30, rq), bG.a9(30, aWB), b1.z.send(a2U, bG.aD)
	}, this.f0 = function(ev) {
		bH.di(), bH.a9(1, 0), bH.a9(6, 6), bI.xM.a0p(ev, 16, bH), b1.z.send(b1.z.ez, bH.aW6())
	}, this.eg = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.vF = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aDi = function(id, r1) {
		var fR = Math.min(r1.length, 63);
		bG.a8(19 + 16 * fR), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fR), bI.xK.xZ(r1), b1.z.send(0, bG.aD)
	}, this.aWC = function(aTZ, rC) {
		bG.a8(7 + 26 * rC.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < rC.length; aC++) bG.a9(16, rC[aC][0]), bG.a9(10, rC[aC][1]);
		b1.z.send(aTZ, bG.aD)
	}, this.aVF = function(aWD, aWE) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aWD), bG.a9(12, aWE), b1.z.send(b1.z.a2f, bG.aD)
	}, this.aW7 = function(username) {
		bG.a9(5, username.length), bI.xK.xZ(username)
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
	this.di = function(eG, a2c, aV2) {
		aWG = eG, aWH = a2c,
			function(aV2) {
				aV2 = m.dy ? "ws://localhost:" + (7130 + aWG) + "/" : aV2 ? aWI[0] + "game.territorial.io/x0" + aWG + "/" : aWI[0] + b1.z.aUp[aWG] + aWI[1 + m.dz];
				(b = new WebSocket(aV2)).binaryType = "arraybuffer", b.onopen = aV7, b.onmessage = aWM, b.onclose = aVE, b.onerror = aWN
			}(aV2)
	}, this.aWL = function() {
		return b.readyState === b.CONNECTING
	}, this.ee = function() {
		return b.readyState === b.OPEN
	}, this.aUx = function() {
		return aWJ
	}, this.aV9 = function() {
		aWJ = 1
	}, this.aV4 = function() {
		return this.aWL() || this.ee()
	}, this.aV5 = function(a2c) {
		aWH = a2c
	}, this.aVx = function() {
		return aWH
	}, this.send = function(aD) {
		this.ee() && b.send(aD)
	}, this.close = function(aVB) {
		this.aV4() && (this.sa(), b.close(aVB))
	}, this.sa = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dP() {
	var gap, aWO = !1,
		aWP = 0,
		j = 0,
		th = 0,
		canvas = null,
		zW = null,
		a3t = null;

	function aWT() {
		for (var aC = aE.yY; 0 <= aC; aC--) a3t[aC] = 0;
		for (aC = am.lI - 1; 0 <= aC; aC--) a3t[bj.fP[am.lN[aC]]] += ah.hF[am.lN[aC]];
		aWO = !0
	}

	function aWR() {
		for (var aWY, aWW = 0, fR = 0, ei = Math.floor(j / 2), eF = Math.floor(th / 2), aWX = 1.5 * Math.PI, aC = aE.yY; 0 <= aC; aC--) fR += a3t[aC], 0 === a3t[aC] && aWW++;
		if (aWO = !1, zW.clearRect(0, 0, j, j), 0 < fR)
			if (aWW === aE.yY) {
				for (aC = aE.yY; 0 <= aC; aC--)
					if (0 < a3t[aC]) {
						! function(aC, ei, eF) {
							zW.fillStyle = bj.aWf[bj.l9[aC]], zW.beginPath(), zW.arc(ei, ei, eF, 0, 2 * Math.PI), zW.fill()
						}(aC, ei, eF);
						break
					}!
				function(ei) {
					var fontSize = ei / 3;
					zW.font = bD.rK.t8(1, fontSize), zW.fillStyle = bE.oN, zW.fillText("100%", ei, ei + .1 * fontSize)
				}(ei)
			} else {
				for (aC = 0; aC <= aE.yY; aC++) 0 < a3t[aC] && (! function(aC, ei, eF, aWX, aWY) {
					zW.fillStyle = bj.aWf[bj.l9[aC]], zW.beginPath(), zW.arc(ei, ei, eF, aWX, aWY), zW.lineTo(ei, ei), zW.fill()
				}(aC, ei, eF, aWX, aWY = aWX + 2 * Math.PI * a3t[aC] / fR), function(ei, eF, aWX, aWY) {
					var ft = (aWY - aWX) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eF * Math.min(ft, .37);
					fontSize < 8 || (aWX = (aWX + aWY) / 2, aWY = (__fx.settings.detailedTeamPercentage ? (100 * ft).toFixed(2) : Math.floor(100 * ft + .5)) + "%", eF *= .525 - Math.max(.6 * (ft - .7), 0), zW.font = bD.rK.t8(1, fontSize), zW
						.fillStyle = bE.oN, zW.fillText(aWY, ei + Math.cos(aWX) * eF, ei + Math.cos(aWX + 1.5 * Math.PI) * eF))
				}(ei, eF, aWX, aWY), 0 !== aC && aWd(ei, eF, aWX), aWX = aWY);
				aWd(ei, eF, 1.5 * Math.PI)
			}!
		function(ei, eF) {
			zW.beginPath(), zW.arc(ei, ei, eF, 0, 2 * Math.PI), zW.stroke()
		}(ei, eF)
	}

	function aWd(ei, eF, aWg) {
		zW.beginPath(), zW.moveTo(ei, ei), zW.lineTo(ei + Math.cos(aWg) * eF, ei + Math.cos(aWg + 1.5 * Math.PI) * eF), zW.stroke()
	}
	this.di = function() {
		if (aE.iL) {
			aWP = 0, a3t = new Uint32Array(aE.yY + 1);
			for (var aC = aE.yY; 0 <= aC; aC--) a3t[aC] = 0;
			for (aC = am.lI - 1; 0 <= aC; aC--) a3t[bj.fP[am.lN[aC]]] += 1;
			this.resize()
		} else a3t = zW = canvas = null
	}, this.a9L = function() {
		return j
	}, this.resize = function() {
		aE.iL && (j = Math.floor(.95 * (a1.a2.ia() && !aE.nq ? .18 * i.min : .13 * i.ib)), j = (j *= 1 + (.5 + .2 * a1.a2.ia()) * aE.nq) + j % 2, gap = Math.max(1, .015 * j), th = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (zW = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, zW.strokeStyle = bE.oN, bD.rK.textAlign(zW, 1), bD.rK.textBaseline(zW, 1), aWR())
	}, this.lJ = function(aWS) {
		aWS && aWT();
		var eZ, aWS = this.lL();
		return bj.l9[aWS] || (aWS = function() {
			for (var lK = -1, aC = aE.yY; 1 <= aC; aC--)(-1 === lK || a3t[aC] > a3t[lK]) && (lK = aC);
			return lK
		}(), eZ = ah.hF[mN[0]], -1 !== aWS && a3t[aWS] > eZ) ? a3t[aWS] : eZ
	}, this.a2H = function() {
		return aWP = 31, this.ed(), this.lL()
	}, this.lL = function() {
		for (var lK = 0, aC = aE.yY; 0 < aC; aC--) a3t[aC] > a3t[lK] && (lK = aC);
		return lK
	}, this.kn = function(aWV) {
		for (var gu = 0, lN = am.lN, fP = bj.fP, fR = am.lI, g5 = bR.g5, aC = 0; aC < fR; aC++) {
			var gz = lN[aC];
			fP[gz] === aWV && (g5[gu++] = gz)
		}
		bR.fw[0] = gu
	}, this.lM = function(aWV) {
		for (var gu = 0, lN = am.lN, fP = bj.fP, fR = am.lI, g5 = bR.g5, aC = 0; aC < fR; aC++) {
			var gz = lN[aC];
			fP[gz] !== aWV && (g5[gu++] = gz)
		}
		bR.fw[0] = gu
	}, this.a4m = function() {
		for (var gu = 0, aC = aE.yY; 0 <= aC; aC--) gu += 0 < a3t[aC];
		return gu
	}, this.ed = function() {
		aE.iL && 32 <= ++aWP && (aWP = 0, aWT())
	}, this.n9 = function() {
		aE.iL && aWO && aWR()
	}, this.vv = function() {
		aE.iL && (aE.nq ? vw.drawImage(canvas, bf.gap, bf.gap) : vw.drawImage(canvas, bf.gap, a9K + 2 * bf.gap))
	}
}

function df() {
	function aWm(fY, fR, fa, a0z, aAc, fr) {
		if (!(fa < 1 || aAc < fa))
			for (var aC = 0; aC <= fR; aC++) {
				var f5 = bP.j8(fY, fa);
				if (a0z(f5)) return f5 >> 2;
				fY += fr
			}
		return -1
	}

	function aWq(fa, fR, fY, a0z, aWk, fr) {
		if (!(fY < 1 || aWk < fY)) {
			fR = Math.max(fR, 0);
			for (var aC = 0; aC <= fR; aC++) {
				var f5 = bP.j8(fY, fa);
				if (a0z(f5)) return f5 >> 2;
				fa += fr
			}
		}
		return -1
	}

	function aWu(iv, iw, aWh) {
		return -1 !== iw && (-1 === iv || bP.ix(iw, aWh) < bP.ix(iv, aWh)) ? iw : iv
	}
	this.hq = function(aWh) {
		return this.a1R(aWh, function(f5) {
			return ad.fM(f5)
		})
	}, this.hw = function(aWh) {
		return this.a1R(aWh, function(f5) {
			return ad.aIl(f5, aE.fB)
		})
	}, this.a1R = function(aWh, a0z) {
		return function(aWh, aWi, a0z) {
			for (var hg = bP.fZ(aWh), hi = bP.fb(aWh), aWk = bV.fc - 2, aAc = bV.fd - 2, aWl = -1, fU = 0; fU < aWi; fU++) {
				var aAb = Math.max(hg - fU, 1),
					aNN = Math.max(hi - fU, 1),
					z9 = Math.min(hg + fU, aWk),
					z8 = Math.min(hi + fU, aAc),
					iv = aWm(hg, z9 - hg, hi - fU, a0z, aAc, 1),
					iw = aWm(hg - 1, hg - aAb - 1, hi - fU, a0z, aAc, -1),
					z9 = aWm(hg, z9 - hg, hi + fU, a0z, aAc, 1),
					aAb = aWm(hg - 1, hg - aAb - 1, hi + fU, a0z, aAc, -1),
					aWp = aWq(hi, z8 - hi - 1, hg - fU, a0z, aWk, 1),
					aWr = aWq(hi - 1, hi - aNN - 2, hg - fU, a0z, aWk, -1),
					z8 = aWq(hi, z8 - hi - 1, hg + fU, a0z, aWk, 1),
					aNN = aWq(hi - 1, hi - aNN - 2, hg + fU, a0z, aWk, -1);
				if (aWl = aWu(aWl, iv, aWh), aWl = aWu(aWl, iw, aWh), aWl = aWu(aWl, z9, aWh), aWl = aWu(aWl, aAb, aWh), aWl = aWu(aWl, aWp, aWh), aWl = aWu(aWl, aWr, aWh), aWl = aWu(aWl, z8, aWh), 0 <= (aWl = aWu(aWl, aNN, aWh)) && fU *
					fU >= bP.ix(aWl, aWh)) return aWl
			}
			return -1
		}(aWh, bP.iY(), a0z)
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
				return bL.clear(), u.v(8, u.tb, new tc(1e3, {
					action: 0,
					tZ: value,
					ta: 0
				})), 1
			}()) {
			var value = aWw("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			u.v(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a2R = new URL(window.location.href);
		a2R.search = "";
		try {
			return history.replaceState(null, "", a2R.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aQl = function(key, value) {
		if (0 === a1.id) try {
			var a2R = new URL(window.location.href),
				gz = a2R.searchParams;
			gz.set(key, value), a2R.search = gz.toString(), history.replaceState(null, "", a2R.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cn() {
	var aWy, h;
	this.di = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.fs(32768 * aC, 100);
		this.a5y(0)
	}, this.value = function(gz) {
		return h[gz]
	}, this.aNF = function() {
		return bO.fs(aWy - 1, 2)
	}, this.a5y = function(aMt) {
		aWy = 2 * aMt % 32768 + 1
	}, this.random = function() {
		return aWy = 167 * aWy % 32768
	}, this.k3 = function(nH) {
		return bO.fs(nH * this.random(), 32768)
	}, this.ke = function(gz) {
		return 0 !== gz && this.random() < this.value(gz)
	}, this.jP = function(fk, fl) {
		return fk + this.k3(fl - fk)
	}
}

function d4() {
	this.qe = new aWz, this.a68 = new aX0, this.aKW = new aX1, this.di = function() {
		aE.ha || this.qe.di()
	}, this.ed = function() {
		aE.ha || (this.qe.ed(), 3 !== u.tb) || bi.kj() % 15 != 5 && 2 !== aE.a1N || u.a2b().aU1()
	}, __fx.replay.restartReplay = () => this.aU4(), this.aU4 = function() {
		var aX3 = 0 !== aE.a1N,
			aX4 = aE.a5u;
		aX3 || ab.aHm(), aE.a5s.a6H(), aE.data.canvas = null, b1.z.close(b1.z.a2f, 3257), b1.z.a2f = 0, aE.data.isReplay = 1, aE.a5w(), aX3 && (aE.a5u = aX4)
	}, this.aU3 = function(r1) {
		var aC = r1.indexOf("=");
		return 0 <= aC ? r1.substring(aC + 1) : r1
	}, this.aU2 = function(r1) {
		return r1
	}, __fx.replayHistory.load = saved => {
		saved = bC.aU3(saved), bC.aKW.xe(saved) && bC.aU4()
	}
}

function aWz() {
	this.aX5 = null, this.aX6 = null, this.aX7 = null, this.aX8 = null, this.aX9 = null, this.aXA = null, this.a67 = "";
	var aXB = 0;
	this.di = function() {
		this.aX5 = [], this.aX6 = [], this.aX7 = [], this.aX8 = [], this.aX9 = [0], this.aXA = [0], aXB = 0, this.a67 = ""
	}, this.qf = function(id, gA, gC, gE) {
		aE.ha || 2 === aE.a1N || (0 === this.aX9[aXB] && (this.aXA[aXB] ? (this.aX9.push(1), this.aXA.push(0), aXB++) : this.aX9[aXB] = 1), this.aX5.push(id), this.aX6.push(gA), this.aX7.push(void 0 === gC ? 0 : gC), this.aX8.push(void 0 === gE ?
			0 : gE), this.aXA[aXB]++)
	}, this.ed = function() {
		0 === this.aX9[aXB] ? this.aXA[aXB]++ : (this.aX9.push(0), this.aXA.push(0), aXB++)
	}
}

function aX1() {
	var aXC = 0;

	function aXG(r1, id) {
		console.log(r1), aXC || (id ? 1 === id ? aO.a7Q = L(495) + ": " + r1 : u.v(4, 3, new w(L(496), r1, 1)) : u.v(4, 3, new w("⚠️ " + L(494), r1, 1)))
	}
	this.xe = function(r1, aXD) {
		var im, rC;
		return aXC = aXD, bJ.td.xW(bJ.td.xU(bJ.td.xS(r1))), aO.a7Q = "", !! function() {
			if (bK.size < 10) aXG("File Too Small");
			else {
				var aXI = bK.qS(12),
					s = (aXI !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aXG(s = (s += "   Found: " + aXI) + ("   Compatible at " + b1.z.a1n() + "/" + aXI), 1)), bK.qS(12)),
					aXJ = bK.qS(31);
				if (aXJ !== bK.size) aXG("Size Error: Stated Size " + aXJ + " Actual Size " + bK.size);
				else if (function(k, aXI) {
						for (var gz = bK.aD, fR = bK.size, aWE = aXI, aC = 3; aC < fR; aC++) aWE = aWE + gz[aC] & 4095;
						return aWE === k || (aXG("Hash Error: " + aWE + " " + k + " " + fR), !1)
					}(s, aXI)) return 1
			}
			return
		}() && (im = bK, (rC = aE.data = new a5r).mapType = im.qS(2), rC.mapProceduralIndex = im.qS(8), rC.mapRealisticIndex = im.qS(8), rC.mapSeed = im.qS(14), rC.mapName = im.aXL(5), 2 === rC.mapType && im.aXM(), rC.passableWater = im.qS(
			1), rC.passableMountains = im.qS(1), rC.playerCount = im.qS(10), rC.humanCount = im.qS(10), rC.selectedPlayer = im.qS(9), rC.gameMode = im.qS(1), rC.playerMode = im.qS(2), rC.battleRoyaleMode = im.qS(2), rC.numberTeams = im.qS(4),
			rC.isZombieMode = im.qS(1), rC.isContest = im.qS(1), rC.isReplay = im.qS(1), rC.elo = im.aXN(2, 14, 2), rC.colorsType = im.qS(1), rC.colorsPersonalized = im.qS(1), rC.colorsData = im.aXN(10, 18, 512), rC.selectableColor = im.qS(
			1), rC.teamPlayerCount = im.aXN(4, 10, 9), rC.neutralBots = im.qS(1), rC.botDifficultyType = im.qS(2), rC.botDifficultyValue = im.qS(4), rC.botDifficultyTeam = im.aXN(4, 4, 9), rC.botDifficultyData = im.aXN(10, 4, 512), rC
			.spawningType = im.qS(2), rC.spawningSeed = im.qS(14), rC.spawningData = im.aXN(11, 12, 1024), rC.selectableSpawn = im.qS(1), rC.playerNamesType = im.qS(2), rC.playerNamesData = im.aXO(10, 5, 512), rC.selectableName = im.qS(1), rC
			.aIncomeType = im.qS(2), rC.aIncomeValue = im.qS(8), rC.aIncomeData = im.aXN(10, 8, 512), rC.tIncomeType = im.qS(2), rC.tIncomeValue = im.qS(8), rC.tIncomeData = im.aXN(10, 8, 512), rC.iIncomeType = im.qS(2), rC.iIncomeValue = im
			.qS(8), rC.iIncomeData = im.aXN(10, 8, 512), rC.sResourcesType = im.qS(2), rC.sResourcesValue = im.qS(11), rC.sResourcesData = im.aXN(10, 11, 512), rC.a6F = im.aXN(10, 30, 0), !! function() {
				var im = bK,
					xf = im.qS(5),
					aXP = im.qS(30),
					aXQ = im.qS(30);
				if (aXP + aXQ > 8 * im.size) return void aXG("Corrupted File");
				return function(fR) {
						var aXT = new Uint8Array(fR),
							aXU = new Uint16Array(fR),
							aXV = new Uint32Array(fR),
							aXW = new Uint32Array(fR);
						bC.qe.aX5 = aXT, bC.qe.aX6 = aXU, bC.qe.aX7 = aXV, bC.qe.aX8 = aXW;
						for (var aC = 0; aC < fR; aC++) {
							var id = bK.qS(4);
							aXT[aC] = id, aXU[aC] = bK.qS(9), 0 === id ? aXV[aC] = bK.qS(22) : 1 === id ? (aXV[aC] = bK.qS(10), aXW[aC] = bK.qS(10)) : 2 === id ? (aXV[aC] = bK.qS(10), aXW[aC] = bK.qS(9)) : 3 === id ? (aXV[aC] = bK.qS(10),
								aXW[aC] = bK.qS(27)) : 4 === id ? (aXV[aC] = bK.qS(10), aXW[aC] = bK.qS(16)) : 5 === id || 6 === id ? aXV[aC] = bK.qS(10) : 7 === id ? aXV[aC] = bK.qS(1) : 10 === id && (aXV[aC] = bK.qS(20), aXW[aC] = bK
								.qS(22))
						}
					}(aXP),
					function(fR, xf) {
						var aX9 = new Uint8Array(fR),
							aXA = new Array(fR);
						aXA.fill(0), bC.qe.aX9 = aX9, bC.qe.aXA = aXA;
						for (var aC = 0; aC < fR; aC++) aX9[aC] = bK.qS(1), aXA[aC] = bK.qS(xf)
					}(aXQ, xf), 1
			}()) && (bK.eG < 8 * bK.size - 13 || bK.eG > 8 * bK.size ? (aXG("Out Of Bounds Error: " + bK.eG + " " + 8 * bK.size), !1) : (bC.qe.a67 = r1, 2 !== aE.data.mapType || (aXG("Load base64 image...", 2), aXD)))
	}, this.aKX = function(aJZ, aXH) {
		var a4E = document.createElement("canvas"),
			iT = a4E.getContext("2d");
		if (a4E.width = aJZ.width, a4E.height = aJZ.height, iT.drawImage(aJZ, 0, 0), aE.data.canvas = a4E, aXC || aXH) return aE.a1N ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aU4()
	}
}

function aX0() {
	this.a0p = function() {
		var xf = function() {
				for (var aXA = bC.qe.aXA, fR = aXA.length, max = 0, aC = 0; aC < fR; aC++) max = Math.max(max, aXA[aC]);
				return xm(Math.max(max, 1))
			}(),
			j = (rC = aE.data, (j = bH).di(), j.a9(12, m.rVersion), j.eG += 43, j.a9(2, rC.mapType), j.a9(8, rC.mapProceduralIndex), j.a9(8, rC.mapRealisticIndex), j.a9(14, rC.mapSeed), j.aXd(rC.mapName, 5), 2 === rC.mapType && j.aXe(rC.canvas),
				j.a9(1, rC.passableWater), j.a9(1, rC.passableMountains), j.a9(10, rC.playerCount), j.a9(10, rC.humanCount), j.a9(9, rC.selectedPlayer), j.a9(1, rC.gameMode), j.a9(2, rC.playerMode), j.a9(2, rC.battleRoyaleMode), j.a9(4, rC
					.numberTeams), j.a9(1, rC.isZombieMode), j.a9(1, rC.isContest), j.a9(1, rC.isReplay), j.dp(rC.elo, 2, 14), j.a9(1, rC.colorsType), j.a9(1, rC.colorsPersonalized), j.dp(rC.colorsData, 10, 18), j.a9(1, rC.selectableColor), j.dp(
					rC.teamPlayerCount, 4, 10), j.a9(1, rC.neutralBots), j.a9(2, rC.botDifficultyType), j.a9(4, rC.botDifficultyValue), j.dp(rC.botDifficultyTeam, 4, 4), j.dp(rC.botDifficultyData, 10, 4), j.a9(2, rC.spawningType), j.a9(14, rC
					.spawningSeed), j.dp(rC.spawningData, 11, 12), j.a9(1, rC.selectableSpawn), j.a9(2, rC.playerNamesType), j.aXf(rC.playerNamesData, 10, 5), j.a9(1, rC.selectableName), j.a9(2, rC.aIncomeType), j.a9(8, rC.aIncomeValue), j.dp(rC
					.aIncomeData, 10, 8), j.a9(2, rC.tIncomeType), j.a9(8, rC.tIncomeValue), j.dp(rC.tIncomeData, 10, 8), j.a9(2, rC.iIncomeType), j.a9(8, rC.iIncomeValue), j.dp(rC.iIncomeData, 10, 8), j.a9(2, rC.sResourcesType), j.a9(11, rC
					.sResourcesValue), j.dp(rC.sResourcesData, 10, 11), j.dp(rC.a6F, 10, 30), ! function(xf) {
					var j = bH,
						aX5 = bC.qe.aX5,
						gA = bC.qe.aX6,
						gC = bC.qe.aX7,
						gE = bC.qe.aX8,
						fR = aX5.length;
					j.a9(5, xf), j.a9(30, fR), j.a9(30, bC.qe.aXA.length);
					for (var aC = 0; aC < fR; aC++) {
						var ei = aX5[aC];
						j.a9(4, ei), j.a9(9, gA[aC]), 0 === ei ? j.a9(22, gC[aC]) : 1 === ei ? (j.a9(10, gC[aC]), j.a9(10, gE[aC])) : 2 === ei ? (j.a9(10, gC[aC]), j.a9(9, gE[aC])) : 3 === ei ? (j.a9(10, gC[aC]), j.a9(27, gE[aC])) : 4 === ei ? (j
							.a9(10, gC[aC]), j.a9(16, gE[aC])) : 5 === ei || 6 === ei ? j.a9(10, gC[aC]) : 7 === ei ? j.a9(1, gC[aC]) : 10 === ei && (j.a9(20, gC[aC]), j.a9(22, gE[aC]))
					}
				}(xf), ! function(xf) {
					for (var j = bH, aX9 = bC.qe.aX9, aXA = bC.qe.aXA, fR = aX9.length, aC = 0; aC < fR; aC++) j.a9(1, aX9[aC]), j.a9(xf, aXA[aC])
				}(xf), bH.eG),
			rC = bO.fs(j - 1, 6) + 1,
			xf = (bG.aVj(6 * rC) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eG = 24, j.a9(31, j.h.length), j.eG = 12, j.a9(12, function() {
					for (var h = bH.h, fR = h.length, aWE = m.rVersion, aC = 3; aC < fR; aC++) aWE = aWE + h[aC] & 4095;
					return aWE
				}())
			}(), bK.di(bH.h), bI.td.te(bI.td.tf(rC)));
		return bK.v0(), bH.di(), xf
	}
}

function cs() {
	var ei, bx = !1,
		aXh = !1,
		aXi = -1e4,
		aXj = -1,
		aXk = 0;

	function resize(aXo) {
		ei = 0, ac.u3() && (aXm(aXo) || bx) && (bx = !1, bf.resize(), bZ.aDI.resize(), aZ.di(), bb.di(), aa.resize(), aU.resize(), aP.resize(), u.resize(), 1 <= aE.a1N ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(), aO.resize(),
			aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aAR()) : (ab.aHo(), ab.aHp()), bi.dq = !0)
	}

	function aXl(ft) {
		return ft && 128 < ft ? Math.floor(ft) : 128
	}

	function aXm(aXo) {
		var j, k, aXq, th, a9p;
		if (!(0 < i.tG)) return th = aXl(document.documentElement.clientWidth), a9p = aXl(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = th, k = a9p, aXq = 0 !== a1.id || j < k ?
			700 : 1200, aXq = Math.min(aXq / ((j + k) / 2), 1), aXq = 0 === bm.eV.data[1].value ? 2 * aXq / 3 : Math.min(aXq + (bm.eV.data[1].value - 1) * (1 - aXq) / 2, 1), i.l = (window.devicePixelRatio || 1) * aXq, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aXo && !aXh ? (aXh = !0, u.removeChild(document.body, a2t)) : aXh && (aXh = !1, document.body.appendChild(a2t)), j = Math.floor(.5 + th * i.l), k = Math.floor(.5 + a9p * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aCu(j, k), i.max = a7f(j, k), i.ib = bO.fs(j + k, 2), i.vs = j / k, a2t.width = j, a2t.height = k, a2t.style.width = th + "px", a2t.style.height = a9p + "px", aXj = bi.eY + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.ib = 0, this.vs = 1, this.l = 1, this.tG = 0, this.dj = function() {
		this.j = aXl(document.documentElement.clientWidth) + 2, this.k = aXl(document.documentElement.clientHeight) + 2
	}, this.di = function() {
		ei = 1, a2t = document.getElementById("canvasA"), 2 === a1.id && (a2t.style.webkitUserSelect = "none"), (vw = a2t.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aXm(0)
	}, this.ed = function() {
		50 <= ++ei && resize(0), -1 === aXj || bi.eY < aXj || (aXj = -1, 2e3 * ++aXk >= bi.eY + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dt = function(k1) {
		bx = !0, resize(k1)
	}, this.a3Y = function() {
		aXi + 1e3 > bi.eY || (aXi = bi.eY, resize(0))
	}
}

function dM() {
	this.aVt = new aXs, this.a2D = new aXt, this.aW9 = new aXu
}

function aXu() {
	var aXv = aXw(),
		aXx = aXy(),
		aXz = aY0();
	this.qS = function() {
		return 123
	}, this.a0p = function() {
		bJ.td.xa(bm.eV.data[183].value, 15), bG.a9(14, aXv), bG.a9(7, aXx), bG.a9(12, aXz)
	}
}

function aXw() {
	for (var ei = document.createElement("canvas"), ei = (ei.width = 24, ei.height = 24, ei.getContext("2d", {
			alpha: !1
		})), fU = (ei.fillStyle = "rgb(0,0,0)", ei.fillRect(0, 0, 24, 24), ei.font = "22px system-ui", ei.textBaseline = "middle", ei.textAlign = "center", ei.fillStyle = "rgb(255,255,255)", ei.fillText("Q", 12, 12), ei.getImageData(0, 0, 24, 24)
			.data), fR = fU.length, lh = 0, aC = 0; aC < fR; aC += 4) lh += fU[aC];
	return 16383 & lh
}

function aXy() {
	var fU = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fU + .5) / 15))
}

function aY0() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aXt() {
	this.a2E = function() {
		for (var gz, fR = am.lI, a1B = am.lN, a1y = ah.a1y, a9d = this.aJI(), aC = 0; aC < fR; aC++) gz = a1B[aC], bD.gn.k9(gz) || (a1y[gz] = a9d);
		var qj = ah.qj,
			jp = ah.jp,
			jq = ah.jq,
			a1w = ah.a1w,
			fR = aE.km;
		for (aC = 0; aC < fR; aC++)(0 === a1w[aC] || jq[aC] < 1 || 2 * qj[aC] > 3 * (jp[aC] + jq[aC])) && (a1y[aC] = 0);
		var a2B = 0;
		for (aC = 0; aC < fR; aC++) a2B += 0 < a1y[aC];
		return a2B
	}, this.aJI = function() {
		return Math.min(65535, bi.kj())
	}
}

function aXs() {
	function aY4(h, ft, iJ) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (ft >> (aC + iJ) % 30 & 1)) % 256
	}
	this.ed = function(aY1, aY2) {
		var h = new Uint8Array(256);
		return function(h, aY1, aY2) {
				var aC, aY6 = 3 + (4 + aY1) % 32768,
					aY7 = 12 + aY2 % 32768,
					aY8 = 17 + ((aY1 & aY2) + (aY1 | aY2) + aY1) % 32768;
				for (aC = 0; aC < 256; aC++) aY6 = 1 + aY6 * aY7 % aY8, h[aC] = aY6 % 256
			}(h, aY1, aY2), aY4(h, aY1, 2), aY4(h, aY2, 7),
			function(h) {
				var aC, ft, eG = 0;
				for (aC = 0; aC < 3e4; aC++) ft = h[eG], h[eG] = (ft + aC + h[(eG + aC) % 256]) % 256, eG = (ft + aC + eG + (ft & eG)) % 256
			}(h),
			function(h) {
				var aC, a9p = 1,
					uQ = 1;
				for (aC = 0; aC < 256; aC += 2) a9p = (1 + a9p) * (h[aC] + 1) % 1073741824, uQ = (1 + uQ) * (h[aC + 1] + 1) % 1073741824;
				return [a9p, uQ]
			}(h)
	}, this.aVu = function(aY9, aYA, aYB, result) {
		for (var gu = 1 << aY9, aC = 0; aC < gu; aC++)
			if (this.aYC(aC, aYA, aYB) === result) return aC;
		return 0
	}, this.aYC = function(aYD, aYA, aYB) {
		for (var yh = aYA + aYD, yq = aYB + aYD, ft = yh + yq & 2147483647, fk = 1; fk <= 16; fk++) ft = (ft = (ft ^ ft >> fk) >>> 1 + (3 & yh)) * (7 + (1023 & (yh | yq))) & 1073741823, yq >>= 1 + (1 & (yh >>= 1 + (1 & (ft += 65535 & yq))));
		return ft &= 1073741823
	}
}

function cp() {
	var aYE, aYF, ih, aYG;
	this.di = function() {
		var aC, fY, fa, aS1, aYH, j, k, zW, iQ, xw, ft, gz, fh, fk, aYK;
		if (function() {
				if (ih = !0, aYG = "rgb(" + bV.xu[0] + "," + bV.xu[1] + "," + bV.xu[2] + ")", bV.aN2(bV.f7)) return 1;
				return ih = !1, 0
			}()) aYF = null;
		else {
			for (aYE = bO.fs(96, 4), aYH = 1 === bV.f7 ? (aS1 = 0, 160) : (aS1 = 128, 32), aYG = "rgb(" + aS1 + "," + aS1 + "," + aS1 + ")", aYF = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aYF[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fc : aYE, k = aC % 2 == 0 ? aYE : bV.fd + 2 * aYE, aYF[aC].width = j, aYF[aC].height = k, xw = (iQ = (zW = aYF[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fa = aYE - 1; 0 <= fa; fa--)
						for (ft = aYH + Math.floor((fa + 1) * (aS1 - aYH) / (aYE + 1)), fY = j - 1; 0 <= fY; fY--) xw[gz = 4 * ((0 === aC ? aYE - fa - 1 : fa) * j + fY)] = ft, xw[gz + 1] = ft, xw[gz + 2] = ft, xw[gz + 3] = 255;
				else {
					for (fY = aYE - 1; 0 <= fY; fY--)
						for (ft = aYH + Math.floor((fY + 1) * (aS1 - aYH) / (aYE + 1)), fa = k - 1 - aYE; aYE <= fa; fa--) xw[gz = 4 * (fa * j + (3 === aC ? aYE - fY - 1 : fY))] = ft, xw[gz + 1] = ft, xw[gz + 2] = ft, xw[gz + 3] = 255;
					for (fk = 1; 0 <= fk; fk--)
						for (fY = aYE - 1; 0 <= fY; fY--)
							for (fa = aYE - 1; 0 <= fa; fa--) fh = (Math.pow(fY * fY + fa * fa, .5) + 1) / (aYE + 1), ft = aYH + Math.floor((1 < fh ? 1 : fh) * (aS1 - aYH)), xw[gz = 4 * ((0 === fk ? aYE - fa - 1 : fa + fk * (k - aYE)) * j + (
								1 === aC ? fY : aYE - fY - 1))] = ft, xw[gz + 1] = ft, xw[gz + 2] = ft, xw[gz + 3] = 255
				}
				zW.putImageData(iQ, 0, 0)
			}
			aYK = aYH, bV.xp.fillStyle = "rgb(" + aYK + "," + aYK + "," + aYK + ")", bV.xp.fillRect(0, 0, bV.fc, 1), bV.xp.fillRect(0, bV.fd - 1, bV.fc, 1), bV.xp.fillRect(0, 0, 1, bV.fd), bV.xp.fillRect(bV.fc - 1, 0, 1, bV.fd)
		}
	}, this.zQ = function() {
		var fk = ih ? 0 : -aYE;
		aOn(fk, fk, bV.fc - 2 * fk, bV.fd - 2 * fk, bd.aYL, bd.aYM, bd.aYN, bd.aYO) || (vw.fillStyle = aYG, vw.fillRect(0, 0, i.j, i.k))
	}, this.vv = function() {
		ih || (aOm(0, -aYE, bV.fc, aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vw.drawImage(aYF[0], bd.aYP, bd.aYQ - aYE), aOm(bV.fc, -aYE, aYE, bV.fd + 2 * aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vw.drawImage(aYF[1], bd.aYP + bV.fc, bd.aYQ - aYE),
			aOm(0, bV.fd, bV.fc, aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vw.drawImage(aYF[2], bd.aYP, bd.aYQ + bV.fd), aOm(-aYE, -aYE, aYE, bV.fd + 2 * aYE, bd.aYL, bd.aYM, bd.aYN, bd.aYO) && vw.drawImage(aYF[3], bd.aYP - aYE, bd.aYQ - aYE))
	}
}

function dB() {
	this.aJG = new aYR, this.zT = new aYS, this.z = new aYT, this.jE = new aYU, this.aYK = new aYV, this.mh = new aYW, this.ka = new aYX, this.lZ = new aYY, this.aYZ = new aYa, this.aYb = new aYc, this.ms = new aYd, this.i1 = new aYe, this.m8 =
		new aYf, this.lb = new aYg, this.i4 = new aYh, this.ml = new aYi, this.qr = new aYj, this.di = function() {
			this.m8.di(), this.zT.di(), this.z.di(), this.jE.di(), this.aYK.di(), this.aYb.di(), this.ml.di()
		}, this.vv = function() {
			this.aYb.vv(), this.zT.vv()
		}
}

function aYX() {
	this.ed = function(player) {
		return !!bQ.ms.mt(player) && !(bQ.z.kq[player] >= Math.max(3 * ap.performance.m0, aF.l0[aF.iA[player]]) || !bD.gn.mu(player, aF.ky[aF.iA[player]], 32, 0)) && (aX.aCh() ? function(player) {
			var aYm = bQ.lb.aCk(),
				fR = aYm.length;
			if (0 === fR) return !1;
			aYm = aYm[az.k3(fR)], fR = bQ.z.mf[aYm];
			if (bQ.ml.mm(player, fR)) return !1;
			return !! function(player, mo) {
				var mo = bP.jC(bQ.z.mr[mo]),
					hg = bP.fZ(mo),
					mo = bP.fb(mo),
					nn = ah.jK[player],
					no = ah.jM[player],
					o0 = ah.jL[player],
					player = ah.jN[player],
					o0 = Math.max(hg - o0, nn - hg),
					nn = Math.max(mo - player, no - mo);
				return o0 < 100 && nn < 100
			}(player, aYm) && !!bQ.i4.qq(player, fR, 1) && (bD.gn.mw(player), bQ.z.mx(player), !0)
		}(player) : !!(ap.jd.ed(player) || ap.jS.ed(player) || ap.jU.ed(player)) && (function(player) {
			bR.g3[1] = 4, bD.gn.mw(player), bQ.z.mx(player)
		}(player), !0))
	}
}

function aYi() {
	var aYp = 0,
		aYq = null;
	this.di = function() {
		null === aYq && (aYq = new Uint16Array(2 * bQ.z.l0)), aYp = 0
	}, this.eh = function(aYr, ml) {
		var aYs = aYq;
		aYs[aYp++] = aYr, aYs[aYp++] = ml
	}, this.mm = function(player, mk) {
		for (var aYs = aYq, fR = aYp, aC = 0; aC < fR; aC += 2)
			if (aYs[aC] === mk && bQ.lb.aYt(aYs[aC + 1]) && player === bQ.z.mg[bR.g3[2]] >> 3) return !0;
		return !1
	}, this.aYu = function(aYv) {
		var mh = bQ.z.md[aYv];
		if (!(mh < 64)) {
			for (var mk = bQ.z.mf[aYv], aYs = aYq, fR = aYp, aC = fR - 2; 0 <= aC; aC -= 2)
				if (aYs[aC] === mk) {
					{
						aZ0 = void 0;
						var aZ0 = aYs[aC + 1];
						bQ.lb.aYt(aZ0) && bQ.ml.aZ8(bR.g3[2])
					}
					aYs[aC] = aYs[fR - 2], aYs[aC + 1] = aYs[fR - 1], fR -= 2
				} aYp = fR
		}
	}, this.aYx = function(aYy, aYz) {
		for (var aZ0 = bQ.z.mf[aYy], mk = -1, aYs = aYq, fR = aYp, aC = 1; aC < fR; aC += 2)
			if (aYs[aC] === aZ0) {
				mk = aYs[aC - 1];
				break
			} if (-1 === mk) return !1;
		if (!bQ.lb.aYt(mk)) return !1;
		var aYv = bR.g3[2],
			m7 = bQ.z.me[aYv];
		if (aYz === m7[m7.length - 1]) bQ.z.me[aYy] = bQ.m8.aZ1(bQ.z.me[aYy], bQ.m8.mG(m7));
		else {
			var aZ2 = bQ.lb.aZ3(m7, aYz);
			if (-1 === aZ2) return !1;
			var aZ4 = bQ.z.mq[aYv];
			aZ2 === aZ4 ? (aYv = bP.jC(bQ.z.mr[aYv]), bQ.z.me[aYy] = bQ.m8.aZ6(bQ.z.me[aYy], m7, aZ2, aYz, bP.iu(m7[aZ2], aYz) > bP.iu(m7[aZ2], aYv))) : bQ.z.me[aYy] = bQ.m8.aZ6(bQ.z.me[aYy], m7, aZ2, aYz, aZ4 < aZ2)
		}
		return !0
	}, this.aZ8 = function(aZ9) {
		var m7, lh = bQ.z,
			mh = lh.md[aZ9];
		return mh % 64 != 5 && (m7 = lh.me[aZ9], lh.aZA[aZ9] = 65535 - lh.aZA[aZ9], lh.mq[aZ9] = m7.length - lh.mq[aZ9] - 2, lh.me[aZ9] = bQ.m8.mG(m7), lh.md[aZ9] = mh - mh % 64 + 5, !0)
	}
}

function aYd() {
	this.mt = function(player) {
		return !!aE.data.passableWater && bQ.z.mc !== bQ.z.l0 && bQ.z.kq[player] !== bQ.z.aZB && 0 !== ah.h8[player].length
	}, this.qm = function(aWh) {
		var mh = bR.g3[1];
		return !(4 <= mh || !bQ.lb.aZC(bP.fH(aWh))) && ad.fM(bP.fH(bP.jG(aWh, mh)))
	}
}

function aYR() {
	this.aJH = function(player) {
		for (var a93 = bQ.z.a93, tv = player << 3, aC = tv + bQ.z.kq[player] - 1; tv <= aC; aC--) this.aZD(a93[aC])
	}, this.aZD = function(aZE) {
		var z = bQ.z,
			aZF = z.mc - 1,
			aZG = z.mg[aZE],
			aZH = z.aZI[aZE],
			aZJ = z.mr[aZE];
		z.mc = aZF, z.mg[aZE] = z.mg[aZF], z.mr[aZE] = z.mr[aZF], z.aZA[aZE] = z.aZA[aZF], z.a7w[aZE] = z.a7w[aZF], z.aZI[aZE] = z.aZI[aZF], z.mf[aZE] = z.mf[aZF], z.md[aZE] = z.md[aZF], z.aZK[aZE] = z.aZK[aZF], z.me[aZE] = z.me[aZF], z.mq[aZE] =
			z.mq[aZF], z.a93[z.mg[aZE]] = aZE,
			function(aWg) {
				var player = aWg >> 3,
					z = bQ.z,
					fR = z.kq[player] - 1,
					aZN = (player << 3) + fR;
				z.kq[player] = fR, aZN !== aWg && (z.a93[aWg] = z.a93[aZN], z.mg[z.a93[aWg]] = aWg)
			}(aZG), bQ.jE.jE[bP.jD(z.mr[aZE])][z.aZI[aZE]] = aZE, aZF = bP.jD(aZJ), aZG = aZH, aZF = bQ.jE.jE[aZF], z = aZF.pop(), aZG !== aZF.length && (aZF[aZG] = z, bQ.z.aZI[z] = aZG)
	}
}

function aYS() {
	var aZP, aZQ = 8,
		aZR = null;

	function aZW(xw, fD, eG) {
		fD *= 4;
		xw[fD] = 255, xw[1 + fD] = 255, xw[2 + fD] = eG, xw[3 + fD] = 255
	}

	function aZY(iT, aYG) {
		var fY, fa, io, fD, aZZ, aZa, iN = aZQ,
			iQ = bD.rK.getImageData(iT, iN, iN),
			xw = iQ.data,
			lh = (iN >> 1) - .5,
			aZc = bD.rS.a3m(aYG, .5);
		for (bD.rS.a3o(aYG, aZc, 300) || bD.rS.a3q(aYG, 100), fa = 0; fa < iN; fa++)
			for (fY = 0; fY < iN; fY++) aZa = (iN - 1.5) * (iN - 1.5) / 4, xw[fD = 4 * (fa * iN + fY)] = (aZZ = (io = (io = fY - lh) * io + (io = fa - lh) * io) <= (iN - 4.5) * (iN - 4.5) / 4 ? aZc : aYG)[0], xw[1 + fD] = aZZ[1], xw[2 + fD] = aZZ[2],
				xw[3 + fD] = aZa < io ? 0 : 255;
		iT.putImageData(iQ, 0, 0)
	}
	this.di = function() {
		var eG, iN, a4E, iT, iQ, xw;
		(aZP = aZP || new Array(aE.fO)).fill(null), eG = 255, iN = aZQ + 4, a4E = bD.rK.xl(iN, iN), iT = bD.rK.getContext(a4E, !0), iQ = bD.rK.getImageData(iT, iN, iN), aZW(xw = iQ.data, iN + 1, eG), aZW(xw, iN + 2, eG), aZW(xw, 2 * iN + 1, eG),
			aZW(xw, 2 * iN - 3, eG), aZW(xw, 2 * iN - 2, eG), aZW(xw, 3 * iN - 2, eG), aZW(xw, iN * (iN - 3) + 1, eG), aZW(xw, iN * (iN - 2) + 1, eG), aZW(xw, iN * (iN - 2) + 2, eG), aZW(xw, iN * (iN - 2) - 2, eG), aZW(xw, iN * (iN - 1) - 3, eG),
			aZW(xw, iN * (iN - 1) - 2, eG), iT.putImageData(iQ, 0, 0), aZR = a4E,
			function() {
				if (aE.iL)
					for (var a4E = new Array(bj.l9.length), fR = aE.fO, aZU = aZP, aC2 = bj.aC2, aC = 0; aC < fR; aC++) {
						var a6g = aC2[aC];
						a4E[a6g] || (a4E[a6g] = function(a6g) {
							var a4E = bD.rK.xl(aZQ, aZQ),
								iT = bD.rK.getContext(a4E, !0),
								h = bR.g0;
							return h.set(bj.aS2[a6g]), aZY(iT, h), a4E
						}(a6g)), aZU[aC] = a4E[a6g]
					}
			}()
	}, this.vv = function() {
		var aC, player, aZd, aOv, iA, im, aZf, aZh, aZi, mr = bQ.z.mr,
			mg = bQ.z.mg,
			a7w = bQ.z.a7w,
			aZK = bQ.z.aZK,
			aZj = aZP,
			aZk = aE.fB,
			fR = bQ.z.mc,
			aZl = i.j,
			aZm = i.k,
			aZn = bV.fc << 4,
			fG = ic,
			f5 = fG / aZQ,
			nn = j5 / fG,
			no = j6 / fG,
			io = (aZl + j5) / fG - nn,
			ir = (aZm + j6) / fG - no,
			iT = vw;
		for (iT.imageSmoothingEnabled = fG < 9, bD.rK.textAlign(iT, 1), bD.rK.textBaseline(iT, 1), aC = 0; aC < fR; aC++) player = mg[aC] >> 3, iA = a7w[aC], aZd = .9 + .1 * Math.log10(iA), aOv = (im = mr[aC]) % aZn / 16 - aZd, im = aZm * (Math
			.floor(im / aZn) / 16 - aZd - no) / ir, aZf = -2 * (aZi = fG * aZd) * (1 + (aZh = +(player === aZk)) / 8), aZh = aZh * aZi / 4, (aZi = aZl * (aOv - nn) / io) < aZf || im < aZf || aZl + aZh < aZi || aZm + aZh < im || (aOv = 2 *
			aZd * f5, aZf = aZd * fG, null === (aZh = aZj[player]) && (aZj[player] = aZh = function(player) {
				var a4E = bD.rK.xl(aZQ, aZQ);
				return aZY(bD.rK.getContext(a4E, !0), ad.a8e(player)), a4E
			}(player)), player === aZk && (iT.setTransform(aOv, 0, 0, aOv, aZi - 2 * aOv, im - 2 * aOv), iT.drawImage(aZR, 0, 0)), iT.setTransform(aOv, 0, 0, aOv, aZi, im), iT.drawImage(aZh, 0, 0), (aZd = Math.floor(function(iA) {
				if (iA < 1e3) return .42;
				if (iA < 1e4) return .34;
				if (iA < 1e6) return .26;
				if (iA < 1e8) return .19;
				return .15
			}(iA) * aZf)) < 6) || (iT.setTransform(1, 0, 0, 1, 0, 0), iT.fillStyle = aZK[aC] ? bE.ow : bE.oN, iT.font = bD.rK.t8(1, aZd), iT.fillText(bD.sJ.a0e(iA), aZi + aZf, im + aZf + .1 * aZd));
		iT.imageSmoothingEnabled = !1, iT.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aYc() {
	var aZq;
	this.di = function() {
		if (!aZq) {
			aZq = new Array(bj.aZs.length);
			for (var aC = 0; aC < aZq.length; aC++) aZq[aC] = bS.z.aZt(20, bj.aZs[aC])
		}
	}, this.vv = function() {
		var o7 = ic;
		if (!(5 <= o7)) {
			var aZl = i.j,
				aZm = i.k,
				nn = j5 / o7,
				no = j6 / o7,
				o0 = (aZl + j5) / o7,
				o1 = (aZm + j6) / o7,
				h0 = -20 * o7,
				aZu = .5 * h0,
				aZn = bV.fc << 4,
				fR = bQ.z.mc,
				mr = bQ.z.mr,
				mg = bQ.z.mg,
				aC2 = bj.aC2,
				a4E = aZq,
				iT = vw;
			3 < o7 && (iT.globalAlpha = .5 * (5 - o7));
			for (var aC = 0; aC < fR; aC++) {
				var im = mr[aC],
					fY = aZl * (im % aZn / 16 - nn) / (o0 - nn) + aZu,
					im = aZm * (Math.floor(im / aZn) / 16 - no) / (o1 - no) + aZu;
				aZl < fY || aZm < im || fY < h0 || im < h0 || (iT.setTransform(o7, 0, 0, o7, fY, im), fY = a4E[aC2[mg[aC] >> 3]], iT.drawImage(fY, 0, 0))
			}
			iT.globalAlpha = 1, iT.setTransform(o7, 0, 0, o7, 0, 0)
		}
	}
}

function aYg() {
	this.aZx = function(player, id) {
		for (var aZy = ah.h8[player], fR = aZy.length, aC = 0; aC < fR; aC++)
			if (bP.ie(aZy[aC], id)) return !0;
		return !1
	}, this.aZz = function(player, fD) {
		for (var iw, aa0, f5, aZy = ah.h8[player], fR = aZy.length, j = bV.fc, aa2 = bP.fZ(fD), aa3 = bP.fb(fD), fX = -1, min = bV.fc * bV.fc + bV.fd * bV.fd, id = ad.f9(bP.fH(fD)), aC = 0; aC < fR; aC++)(aa0 = (aa0 = aa2 - (iw = (f5 = aZy[
			aC]) >> 2) % j) * aa0 + (aa0 = aa3 - ~~((.5 + iw) / j)) * aa0) < min && bP.ie(f5, id) && (min = aa0, fX = iw);
		return fX
	}, this.lc = function(iv, iw) {
		for (var id = ad.f9(bP.fH(iw)), ig = bP.iW, f5 = bP.fH(iv), aa4 = -1, aC = 0; aC < 4; aC++) {
			var fG = f5 + ig[aC];
			ad.ih(fG) && ad.f9(fG) === id && (-1 === aa4 || bP.ix(bP.fF(fG), iw) < bP.ix(aa4, iw)) && (aa4 = bP.fF(fG))
		}
		return aa4
	}, this.mB = function(player, fD) {
		for (var ig = bP.iW, f5 = bP.fH(fD), aC = 0; aC < 4; aC++) {
			var fG = f5 + ig[aC];
			if (ad.h1(fG) && ad.zO(player, fG)) return !0
		}
		return !1
	}, this.mC = function(player, fD) {
		for (var ig = bP.iW, f5 = bP.fH(fD), aC = 0; aC < 4; aC++) {
			var fG = f5 + ig[aC];
			if (ad.fI(fG)) return !0;
			if (ad.h1(fG)) {
				fG = ad.fJ(fG);
				if (player !== fG && bv.fK(player, fG)) return !0
			}
		}
		return !1
	}, this.mi = function(fD) {
		for (var ig = bP.iW, f5 = bP.fH(fD), aC = 0; aC < 4; aC++) {
			var fG = f5 + ig[aC];
			if (ad.h1(fG)) {
				fG = ad.fJ(fG);
				if (bD.gn.k9(fG)) return fG
			}
		}
		return -1
	}, this.aZC = function(f5) {
		if (ad.ih(f5))
			for (var ig = bP.iW, aC = 0; aC < 4; aC++)
				if (ad.fM(f5 + ig[aC])) return !0;
		return !1
	}, this.nm = function(player, id) {
		for (var tv = player << 3, tw = tv + bQ.z.kq[player], mf = bQ.z.mf, a93 = bQ.z.a93, aC = tv; aC < tw; aC++) {
			var a94 = a93[aC];
			if (mf[a94] === id) return a94
		}
		return -1
	}, this.nr = function(player) {
		return 0 === bQ.z.kq[player] ? -1 : bQ.z.a93[player << 3]
	}, this.a6y = function(m1, m2) {
		var fR = bQ.z.mc;
		if (fR < 1) return -1;
		for (var mr = bQ.z.mr, aa5 = 80, aRW = -1, aC = 0; aC < fR; aC++) {
			var fh = bP.ij(m1, m2, mr[aC]);
			fh < aa5 && (aa5 = fh, aRW = aC)
		}
		return function(aC, m1, m2) {
			if (aC < 0) return;
			var aaC = bQ.z.mr[aC],
				aaD = bP.iq(aaC),
				aaC = bP.it(aaC),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a7w[aC]));
			return aC = Math.max(aC, bP.j7(bD.rK.u0(.02, 1.7))), bO.aOu(bP.ip(m1), bP.is(m2), aaD, aaC, aC)
		}(aRW, m1, m2) ? aRW : -1
	}, this.aYt = function(nk) {
		for (var fR = bQ.z.mc, mf = bQ.z.mf, aC = 0; aC < fR; aC++)
			if (mf[aC] === nk) return bR.g3[2] = aC, !0;
		return !1
	}, this.aJD = function(player) {
		for (var tv = player << 3, tw = tv + bQ.z.kq[player], a93 = bQ.z.a93, a7w = bQ.z.a7w, iA = 0, aC = tv; aC < tw; aC++) iA += a7w[a93[aC]];
		return iA
	}, this.aa7 = function(player, aZ9) {
		aZ9 = bQ.z.me[aZ9];
		return this.mB(player, aZ9[aZ9.length - 1])
	}, this.aa8 = function(iv, iw, fh, aa9) {
		var iz = bP.fZ(iv),
			iv = bP.fb(iv),
			j1 = bP.fZ(iw),
			iw = bP.fb(iw),
			j1 = (fh = Math.max(fh, 1), j1 - iz),
			iw = iw - iv,
			io = bO.fs(Math.abs(j1) * aa9, fh),
			aa9 = bO.fs(Math.abs(iw) * aa9, fh);
		return bP.fo(iz + Math.sign(j1) * io, iv + Math.sign(iw) * aa9)
	}, this.aZ3 = function(m7, fD) {
		for (var fR = m7.length - 1, fY = bP.fZ(fD), fa = bP.fb(fD), aC = 0; aC < fR; aC++) {
			var iv = m7[aC],
				iw = m7[aC + 1],
				nn = bP.fZ(iv),
				iv = bP.fb(iv),
				o0 = bP.fZ(iw),
				iw = bP.fb(iw);
			if (!(fY !== nn && fY !== o0 && Math.sign(fY - nn) === Math.sign(fY - o0) || fa !== iv && fa !== iw && Math.sign(fa - iv) === Math.sign(fa - iw))) {
				if (nn === o0 || iv === iw) return aC;
				if (Math.abs(fY - nn) === Math.abs(fa - iv) && Math.abs(fY - o0) === Math.abs(fa - iw)) return aC
			}
		}
		return -1
	}, this.aCk = function() {
		for (var aaF = mN[0], mg = bQ.z.mg, mc = bQ.z.mc, h = [], aC = 0; aC < mc; aC++) bD.gn.lQ(aaF, mg[aC] >> 3) && h.push(aC);
		return h
	}, this.m9 = function(player, m7) {
		for (var tv = player << 3, tw = tv + bQ.z.kq[player], a93 = bQ.z.a93, me = bQ.z.me, ht = m7[0], lP = m7[m7.length - 1], aC = tv; aC < tw; aC++) {
			var gz = me[a93[aC]];
			if (gz[0] === ht && gz[gz.length - 1] === lP) return !0
		}
		return !1
	}
}

function aYh() {
	function aaI(player, aZ9) {
		aZ9 = bP.jC(bQ.z.mr[aZ9]), aZ9 = ad.f9(bP.fH(aZ9));
		return !!bQ.lb.aZx(player, aZ9)
	}

	function aaG(player) {
		return bQ.ms.mt(player) && !bQ.m8.mE()
	}
	this.i5 = function(player, fD) {
		return !!aaG(player) && -1 !== (fD = function(player, fD) {
			for (var fR = bQ.z.mc, mr = bQ.z.mr, mg = bQ.z.mg, aa5 = bP.iY(), aRW = -1, aC = 0; aC < fR; aC++) {
				var fh = bP.iu(fD, bP.jC(mr[aC]));
				fh < aa5 && bD.gn.lQ(player, mg[aC] >> 3) && (aa5 = fh, aRW = aC)
			}
			return aRW
		}(player, fD)) && !!aaI(player, fD) && (bR.g3[3] = bQ.z.mf[fD], !0)
	}, this.px = function(player, nk) {
		return !!aaG(player) && !!bQ.lb.aYt(nk) && !!aaI(player, bR.g3[2])
	}, this.qq = function(player, nk, aaJ) {
		return !! function(player, nk, aaJ) {
			if (aaG(player) && bQ.lb.aYt(nk)) {
				nk = bR.g3[2];
				if (bD.gn.lQ(player, bQ.z.mg[nk] >> 3)) {
					if (function(player, aZ9) {
							return bQ.lb.aa7(player, aZ9) && (bR.h[0] = bQ.m8.mG(bQ.z.me[aZ9]), bR.g3[1] = 6, !0)
						}(player, nk)) return 1;
					var aYo = bP.jC(bQ.z.mr[nk]),
						aaN = bQ.lb.aZz(player, aYo);
					if (-1 !== aaN) {
						aaN = bP.iu(aaN, aYo);
						if (!(aaJ && 120 < aaN)) {
							aaJ = function(aZ9, aaO, aYo) {
								var m7 = bQ.z.me[aZ9],
									aZ9 = bQ.z.mq[aZ9],
									aaQ = bP.iu(aYo, m7[aZ9 + 1]);
								if (aaO <= aaQ) return bQ.lb.aa8(aYo, m7[aZ9 + 1], aaQ, aaO);
								for (var fh = aaO - aaQ, fR = m7.length - 1, aC = aZ9 + 1; aC < fR; aC++) {
									var aaR = bP.iu(m7[aC], m7[aC + 1]);
									if (fh <= aaR) return bQ.lb.aa8(m7[aC], m7[aC + 1], aaR, fh);
									fh -= aaR
								}
								return m7[fR]
							}(nk, aaN, aYo);
							if (bQ.lZ.qn(player, aaJ, 1)) return bR.g3[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nk, aaJ) && (player = bR.g3[2], bQ.z.md[player] = 64 + bQ.z.md[player] % 64, bQ.ml.eh(nk, bQ.z.mv), !0)
	}
}

function aYW() {
	function aaW(player, iA, aaU, aYo) {
		var jv;
		if (ad.fI(aaU)) jv = aE.fO;
		else {
			if ((jv = ad.fJ(aaU)) === player) return void bg.gr(player, iA - bD.gn.gq(player, iA), 12);
			if (!bv.fK(player, jv)) return void bB.ko.qC(player, jv, iA)
		}
		ae.k7(player, jv) || ae.kQ(player) ? (ah.gt[player].push(aYo << 2), ae.eh(player, iA, jv), aG.jt(player, !0)) : bg.gr(player, iA, 12)
	}
	this.ed = function() {
		for (var md = bQ.z.md, mr = bQ.z.mr, aZA = bQ.z.aZA, aC = bQ.z.mc - 1; 0 <= aC; aC--) 65535 === aZA[aC] && function(aC, aYo, iI) {
			if (6 === iI) {
				if (bQ.ml.aYx(aC, aYo)) return bQ.z.mq[aC]++, bQ.z.aZA[aC] = 0, 0
			} else {
				var player = bQ.z.mg[aC] >> 3,
					aC = bQ.z.a7w[aC];
				bg.aaV(player), iI < 4 ? aaW(player, aC, aYo + bP.iV[iI] << 2, aYo) : 4 === iI ? function(player, iA, aYo) {
					var aC, fV, ig = bP.iW,
						fG = bP.fH(aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.fI(fV)) return aaW(player, iA, fV, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.h1(fV) && !ad.zO(player, fV)) return aaW(player, iA, fV, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.h1(fV)) return aaW(player, iA, fV, aYo)
				}(player, aC, aYo) : 5 === iI && function(player, iA, aYo) {
					var aC, fV, ig = bP.iW,
						fG = bP.fH(aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.h1(fV) && ad.zO(player, fV)) return aaW(player, iA, fV, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.h1(fV)) return aaW(player, iA, fV, aYo);
					for (aC = 0; aC < 4; aC++)
						if (fV = fG + ig[aC], ad.fI(fV)) return aaW(player, iA, fV, aYo)
				}(player, aC, aYo)
			}
			return 1
		}(aC, bP.jC(mr[aC]), md[aC] % 64) && (bQ.ml.aYu(aC), bQ.aJG.aZD(aC))
	}, this.aaT = function(player, fD, iI, nk, iA) {
		if (!(5 <= iI)) {
			var aZk = aE.fB;
			if (bD.gn.hd(aZk) && bv.fK(player, aZk) && player !== aZk && 0 !== ah.h8[aZk].length && bD.gn.a4p(player, 5)) {
				for (var aaU, ff = !1, aC = 0; aC < 4; aC++)
					if (aaU = fD + bP.iV[aC] << 2, ad.fM(aaU) && !ad.fI(aaU) && ad.fJ(aaU) === aZk) {
						ff = !0;
						break
					} ff && (aO.a85(719, 0), iI = iA < 25e3 ? L(497) + " (" + bD.sJ.a0e(iA) + ") ⛵" : L(498) + " (" + bD.sJ.a0e(iA) + ") 🚢", aO.zp(180, iI, 719, player, bE.ov, bE.oK, -1, !0, void 0, {
					fl: 1,
					nk: nk
				}))
			}
		}
	}
}

function aYT() {
	this.l0 = 512, this.aZB = 8, this.mc = 0, this.mv = 0, this.mg = new Uint16Array(this.l0), this.mr = new Uint32Array(this.l0), this.aZA = new Uint16Array(this.l0), this.a7w = new Uint32Array(this.l0), this.aZI = new Uint16Array(this.l0), this
		.mf = new Uint16Array(this.l0), this.md = new Uint8Array(this.l0), this.aZK = new Uint8Array(this.l0), this.me = new Array(this.l0), this.mq = new Uint16Array(this.l0), this.kq = new Uint8Array(aE.fO), this.a93 = new Uint16Array(this.aZB * aE
			.fO), this.di = function() {
			this.mc = 0, this.mv = 0, this.kq.fill(0), this.me.fill(null)
		}, this.mx = function(player) {
			var iA = bR.fy[0],
				mh = bR.g3[1],
				m7 = bR.h[0],
				aaZ = this.mv,
				fR = this.mc,
				aaa = bP.jB(m7[0]),
				aab = this.kq[player],
				aac = (player << 3) + aab;
			this.mg[fR] = aac, this.mr[fR] = aaa, this.aZA[fR] = 0, iA < 60 && (bD.gn.go(player, 60 - iA), iA = 60), this.a7w[fR] = iA, this.aZI[fR] = bQ.jE.mx(fR, bP.jD(aaa)), this.mf[fR] = aaZ, this.md[fR] = mh, this.aZK[fR] = 0, this.me[fR] = m7,
				this.mq[fR] = 0, this.mv = (aaZ + 1) % 65536, this.kq[player] = aab + 1, this.a93[aac] = fR, this.mc++, bQ.mh.aaT(player, m7[m7.length - 1], mh, aaZ, iA)
		}, this.ed = function() {
			bQ.mh.ed();
			for (var gz = aE.fB, eZ = bQ.lb.aJD(gz), st = (! function(st) {
					for (var aah, mr = st.mr, a7w = st.a7w, aZK = st.aZK, aZA = st.aZA, aZI = st.aZI, me = st.me, mq = st.mq, st = st.mc, aZn = bV.fc << 4, aC = st - 1; 0 <= aC; aC--) {
						var aai = mr[aC],
							m7 = me[aC],
							aaj = mq[aC],
							aaa = bP.jB(m7[aaj]),
							aak = bP.jB(m7[aaj + 1]),
							aal = aaa % aZn,
							aaa = ~~((aaa + .5) / aZn),
							aan = aak % aZn,
							aao = ~~((aak + .5) / aZn),
							aap = aan - aal,
							aaq = aao - aaa,
							fU = Math.max(~~Math.sqrt(aap * aap + aaq * aaq + .5), 1),
							aKA = a7w[aC],
							aKA = (aKA = aZK[aC] ? 4e4 : 25e4 + Math.min(20 * aKA, 3e5) + Math.min(aKA >> 3, 5e4), aZA[aC] + Math.max(~~((aKA + .5) / fU), 1));
						65535 <= aKA ? aaj + 2 < m7.length ? (mq[aC] = aaj + 1, mr[aC] = aah = function(aC, aar, aal, aam, aaj, fU, m7, aZn) {
							aar = Math.min(aar - 65535, 65535);
							var m7 = bP.jB(m7[aaj + 2]),
								aaj = m7 % aZn - aal,
								m7 = ~~((m7 + .5) / aZn) - aam,
								aau = Math.max(~~Math.sqrt(aaj * aaj + m7 * m7 + .5), 1);
							return aar = Math.min(Math.floor((fU * aar + .5) / aau), 65534), bQ.z.aZA[aC] = aar, aal + bO.fs(aar * aaj, 65535) + aZn * (aam + bO.fs(aar * m7, 65535))
						}(aC, aKA, aan, aao, aaj, fU, m7, aZn)) : (mr[aC] = aah = aak, aZA[aC] = 65535) : (aZA[aC] = aKA, mr[aC] = aah = aal + bO.fs(aKA * aap, 65535) + aZn * (aaa + bO.fs(aKA * aaq, 65535))), aZI[aC] = bQ.jE.aat(aZI[aC],
							aai, aah)
					}
				}(this), ! function(st) {
					if (bi.kj() % 2 == 1) {
						var aC, iJ, lh, fl, ei, aav, a0I, aaw, ht, nn, no, aaa, aax, aAW, aaz, lP, fR = st.mc,
							mr = st.mr,
							mg = st.mg,
							a7w = st.a7w,
							aZK = st.aZK,
							jE = bQ.jE.jE,
							ab1 = jE.length,
							ab2 = bQ.jE.ab2,
							aZn = bV.fc << 4,
							ab3 = aE.iL,
							aWV = bj.fP,
							h0 = (fR - 1) * (bO.fs(bi.kj(), 2) % 2);
						for (aC = 0; aC < fR; aC++)
							for (iJ = Math.abs(aC - h0), aaa = mr[iJ], lh = bP.jD(aaa), ht = mg[iJ] >> 3, nn = aaa % aZn, no = ~~((aaa + .5) / aZn), aaz = a7w[iJ], fl = 0; fl < 9; fl++)
								if (!((aav = lh + ab2[fl]) < 0 || ab1 <= aav))
									for (aaw = jE[aav], a0I = aaw.length, ei = 0; ei < a0I; ei++) aax = aaw[ei], lP = mg[aax] >> 3, ht == lP || ab3 && aWV[ht] === aWV[lP] && aWV[ht] || (lP = mr[aax], (aAW = nn - lP % aZn) * aAW + (aAW = no -
										~~((lP + .5) / aZn)) * aAW < 14400 && (lP = a7w[aax], aAW = lP <= aaz ? Math.max(1, bO.fs(lP + bO.fs(aaz - lP, 10), 10)) : Math.max(1, bO.fs(aaz, 10)), a7w[aax] = Math.max(lP - aAW, 0), aZK[
										aax] = 4))
					}
				}(this), ! function(st) {
					if (bi.kj() % 5 == 3)
						for (var a7w = st.a7w, fR = st.mc, aC = 0; aC < fR; aC++) {
							var iA = a7w[aC];
							a7w[aC] = Math.max(iA - Math.max(1, iA >> 7), 0)
						}
				}(this), this), a7w = st.a7w, aZK = st.aZK, aC = st.mc - 1; 0 <= aC; aC--) aZK[aC] = aZK[aC] >> 1, 0 === a7w[aC] && (bQ.ml.aYu(aC), bQ.aJG.aZD(aC));
			bg.gr(gz, eZ - bQ.lb.aJD(gz), 15)
		}
}

function aYU() {
	this.ab4 = 32, this.fY = 0, this.fa = 0, this.jF = 0, this.ab5 = 0, this.ab6 = 4, this.jE = null, this.ab2 = new Int16Array(9), this.di = function() {
		this.jF = 1 + bO.fs(bV.fc - 1, this.ab4), this.ab5 = 1 + bO.fs(bV.fd - 1, this.ab4), this.jE = new Array(this.jF * this.ab5), bD.rS.a3l(this.jE);
		var fY, fa, ab2 = this.ab2,
			j = this.jF;
		for (fY = -1; fY <= 1; fY++)
			for (fa = -1; fa <= 1; fa++) ab2[3 * (1 + fa) + 1 + fY] = fa * j + fY
	}, this.mx = function(ab8, aC) {
		return this.jE[aC].push(ab8), this.jE[aC].length - 1
	}, this.aat = function(ab9, aaa, aak) {
		var abA, abB, aaa = bP.jD(aaa),
			aak = bP.jD(aak);
		return aaa === aak ? ab9 : (abA = this.jE[aaa].pop(), this.jE[aaa].length === ab9 ? this.mx(abA, aak) : (abB = this.jE[aaa][ab9], this.jE[aaa][ab9] = abA, bQ.z.aZI[abA] = ab9, this.mx(abB, aak)))
	}
}

function aYY() {
	this.la = function(player, abC) {
		return -1 !== abC && !!bQ.lb.mC(player, abC) && this.qn(player, abC, 0)
	}, this.qn = function(player, abC, abD) {
		player = function(player, abC, abD) {
			var aaN = bQ.lb.aZz(player, abC);
			if (-1 === aaN) return -1;
			aaN = bQ.lb.lc(aaN, abC);
			if (-1 === aaN) return -1;
			var m5 = bQ.m8.mD(aaN, abC);
			if (0 <= m5) return m5;
			if (bQ.m8.mE()) return -1;
			if (0 <= (m5 = bQ.m8.mD(abC, aaN))) return bQ.m8.mF(bQ.m8.mG(bQ.m8.get(m5)));
			if (aaN === abC) return bQ.m8.mF(new Uint32Array([aaN, abC]));
			if (0 <= (m5 = bQ.aYZ.qn(aaN, abC))) return m5;
			return abD ? function(abH, player) {
				var g8 = bR.g8,
					eV = (g8.fill(0), [abH]),
					iX = (g8[abH] = 1, bP.iX),
					abI = -1,
					fR = eV.length;
				for (; - 1 === abI && fR;) {
					for (var h = [], aC = 0; aC < fR; aC++)
						for (var fD = eV[aC], a5Z = g8[fD], fU = 0; fU < 8; fU++) {
							var xV, a28, fX = fD + iX[fU],
								f5 = 4 * fX;
							ad.ih(f5) ? (xV = g8[fX], a28 = a5Z + 5 + ((1 & fU) << 1), 0 === xV ? (h.push(fX), g8[fX] = a28) : g8[fX] = Math.min(a28, xV)) : -1 === abI && fU % 2 == 0 && ad.zL(player, f5) && (abI = fD)
						}
					fR = (eV = h).length
				}
				return -1 !== abI ? function(iv, abK) {
					var iX = bP.iX,
						abL = -1,
						iI = 0,
						nI = [];
					for (; abK !== iv;)(iI = function(fD, iI) {
						var g8 = bR.g8,
							iX = bP.iX,
							a5Z = g8[fD];
						if (a5Z - g8[fD + iX[iI]] != 5 + ((1 & iI) << 1))
							for (var fk = 0; fk < 8; fk++) {
								var fU = fk + iI + 6 & 7;
								if (a5Z - g8[fD + iX[fU]] == 5 + ((1 & fU) << 1)) return fU
							}
						return iI
					}(abK, iI)) !== abL && (nI.push(abK), abL = iI), abK += iX[iI];
					nI.push(iv);
					var m5 = bQ.m8.mD(nI[0], iv);
					if (0 <= m5) return m5;
					return bQ.m8.mF(new Uint32Array(nI))
				}(abH, abI) : -1
			}(abC, player) : -1
		}(player, abC, abD);
		return -1 !== player && (bR.h[0] = bQ.m8.get(player), !0)
	}
}

function aYa() {
	function abN(hg, j0, j2) {
		for (var k2 = Math.min(j0, j2), o5 = Math.max(j0, j2), fa = k2 + 1; fa < o5; fa++)
			if (!ad.ih(bP.j8(hg, fa))) return;
		return 1
	}

	function abO(hi, iz, j1) {
		for (var k2 = Math.min(iz, j1), o5 = Math.max(iz, j1), fY = k2 + 1; fY < o5; fY++)
			if (!ad.ih(bP.j8(fY, hi))) return;
		return 1
	}

	function abP(iz, j0, j1, j2, abF, abC) {
		for (var fR = Math.min(Math.abs(j1 - iz), Math.abs(j2 - j0)), io = Math.sign(j1 - iz), ir = Math.sign(j2 - j0), aC = 0; aC < fR; aC++)
			if (!ad.ih(bP.j8(iz += io, j0 += ir))) return null;
		return iz === j1 ? abN(iz, j0, j2) ? new Uint32Array([abF, bP.fo(iz, j0), abC]) : null : abO(j0, iz, j1) ? new Uint32Array([abF, bP.fo(iz, j0), abC]) : null
	}
	this.qn = function(abF, abC) {
		abF = function(abF, abC) {
			var iz = bP.fZ(abF),
				j0 = bP.fb(abF),
				j1 = bP.fZ(abC),
				j2 = bP.fb(abC);
			if (iz === j1) {
				if (abN(iz, j0, j2)) return new Uint32Array([abF, abC])
			} else {
				if (j0 !== j2) return abP(iz, j0, j1, j2, abF, abC) || abP(j1, j2, iz, j0, abF, abC);
				if (abO(j0, iz, j1)) return new Uint32Array([abF, abC])
			}
			return null
		}(abF, abC);
		return null === abF ? -1 : bQ.m8.mF(abF)
	}
}

function aYf() {
	var abQ = [];
	this.di = function() {
		abQ = []
	}, this.mE = function() {
		return 65536 === abQ.length
	}, this.mD = function(abF, abC) {
		for (var m8 = abQ, fR = m8.length, aC = 0; aC < fR; aC++) {
			var gz = m8[aC];
			if (gz[0] === abF && gz[gz.length - 1] === abC) return aC
		}
		return -1
	}, this.mG = function(m7) {
		var abR = new Uint32Array(m7.length);
		return abR.set(m7), abR.reverse()
	}, this.aZ1 = function(ht, lP) {
		var gu = ht.length - 1,
			abS = new Uint32Array(gu + lP.length);
		return abS.set(ht, 0), abS.set(lP, gu), abS
	}, this.aZ6 = function(ht, lP, wz, fD, abT) {
		abT && (wz = (lP = this.mG(lP)).length - wz - 2);
		abT = lP.subarray(wz + 1 + (fD === lP[wz + 1])), fD = new Uint32Array(ht.length + abT.length);
		return fD.set(ht, 0), fD.set(abT, ht.length), fD
	}, this.mF = function(m7) {
		return abQ.push(m7), abQ.length - 1
	}, this.get = function(aC) {
		return abQ[aC]
	}, this.mA = function() {
		return abQ
	}, this.abV = function(abF, abC) {
		return null
	}
}

function aYj() {
	this.ed = function(player, nk) {
		player = bQ.lb.nm(player, nk);
		return !(player < 0 || !bQ.ml.aZ8(player) || (bQ.ml.aYu(player), 0))
	}
}

function aYV() {
	var zx = 32,
		zw = new Array(2);

	function xl(ei) {
		var fY, fa, fD, ir, io, iN = zx,
			a4E = bD.rK.xl(iN, iN),
			iT = bD.rK.getContext(a4E, !0),
			iQ = bD.rK.getImageData(iT, iN, iN),
			xw = iQ.data,
			lh = (iN >> 1) - .5,
			li = Math.sqrt(lh * lh);
		for (xw.fill(255), fa = 0; fa < iN; fa++)
			for (fY = 0; fY < iN; fY++) io = fY - lh, ir = fa - lh, fD = 4 * (fa * iN + fY), io = 714 * (li - Math.sqrt(io * io + ir * ir)) / li, xw[2 + fD] = ei, xw[3 + fD] = 255 < io ? 0 : io;
		return iT.putImageData(iQ, 0, 0), a4E
	}
	this.abW = -1, this.di = function() {
		this.abW = -1, zw[0] || (zw[0] = xl(255), zw[1] = xl(0))
	}, this.abX = function(iT, f5, fY, fa, eF, aC) {
		bD.gn.hd(aE.fB) && (iT.setTransform(f5 *= 4 / 3 * .625, 0, 0, f5, fY - (eF *= 4 / 3), fa - eF), iT.drawImage(zw[+(bQ.z.mf[aC] === this.abW)], 0, 0))
	}
}

function aYe() {
	function aWm(fY, fR, fa, abY, aAc, fr, player) {
		if (!(fa < 1 || aAc < fa))
			for (var aC = 0; aC <= fR; aC++) {
				var f5 = bP.j8(fY, fa);
				if (bQ.lb.aZC(f5) && !bD.rS.has(abY, ad.f9(f5)) && ad.zD(f5, player)) return f5 >> 2;
				fY += fr
			}
		return -1
	}

	function aWq(fa, fR, fY, abY, aWk, fr, player) {
		if (!(fY < 1 || aWk < fY)) {
			fR = Math.max(fR, 0);
			for (var aC = 0; aC <= fR; aC++) {
				var f5 = bP.j8(fY, fa);
				if (bQ.lb.aZC(f5) && !bD.rS.has(abY, ad.f9(f5)) && ad.zD(f5, player)) return f5 >> 2;
				fa += fr
			}
		}
		return -1
	}

	function aWu(iv, iw, aWh) {
		return -1 !== iw && (-1 === iv || bP.ix(iw, aWh) < bP.ix(iv, aWh)) ? iw : iv
	}
	this.i2 = function(player, aWh) {
		if (bQ.ms.mt(player))
			for (var aWi = bP.iY(), abY = [];;) {
				var abI = function(aWh, aWi, abY, player) {
					for (var hg = bP.fZ(aWh), hi = bP.fb(aWh), aWk = bV.fc - 2, aAc = bV.fd - 2, aWl = -1, fU = 0; fU < aWi; fU++) {
						var aAb = Math.max(hg - fU, 1),
							aNN = Math.max(hi - fU, 1),
							z9 = Math.min(hg + fU, aWk),
							z8 = Math.min(hi + fU, aAc),
							iv = aWm(hg, z9 - hg, hi - fU, abY, aAc, 1, player),
							iw = aWm(hg - 1, hg - aAb - 1, hi - fU, abY, aAc, -1, player),
							z9 = aWm(hg, z9 - hg, hi + fU, abY, aAc, 1, player),
							aAb = aWm(hg - 1, hg - aAb - 1, hi + fU, abY, aAc, -1, player),
							aWp = aWq(hi, z8 - hi - 1, hg - fU, abY, aWk, 1, player),
							aWr = aWq(hi - 1, hi - aNN - 2, hg - fU, abY, aWk, -1, player),
							z8 = aWq(hi, z8 - hi - 1, hg + fU, abY, aWk, 1, player),
							aNN = aWq(hi - 1, hi - aNN - 2, hg + fU, abY, aWk, -1, player);
						if (aWl = aWu(aWl, iv, aWh), aWl = aWu(aWl, iw, aWh), aWl = aWu(aWl, z9, aWh), aWl = aWu(aWl, aAb, aWh), aWl = aWu(aWl, aWp, aWh), aWl = aWu(aWl, aWr, aWh), aWl = aWu(aWl, z8, aWh), 0 <= (aWl = aWu(aWl, aNN, aWh)) &&
							fU * fU >= bP.ix(aWl, aWh)) return aWl
					}
					return -1
				}(aWh, aWi, abY, player);
				if (-1 === abI) break;
				var id = ad.f9(bP.fH(abI));
				if (bQ.lb.aZx(player, id)) return !! function(player, abI, aWh) {
					for (var iI = bP.jI(abI, aWh), aC = 0; aC < 4; aC++) {
						var fD = bP.jG(abI, iI);
						if (ad.aIl(bP.fH(fD), player)) return bR.g3[6] = iI, 1;
						iI = (iI + 1) % 4
					}
					return
				}(player, abI, aWh) && (bR.g3[7] = abI, !0);
				abY.push(id)
			}
		return !1
	}
}

function dl() {
	this.aUA = [L(499), L(500), L(501), L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514)];
	var abb = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aD6 = new Array(abb.length), this.di = function() {
		var h = bm.eV.data[155].value.split(";"),
			lh = h.length;
		if (function() {
				for (var fR = abb.length, aC = 0; aC < fR; aC++) ba.aD6[aC] = abb[aC]
			}(), !(lh > abb.length))
			for (var aC = 0; aC < lh; aC++) h[aC].length && (this.aD6[aC] = h[aC])
	}, this.aUC = function(eG, code) {
		for (var aD6 = this.aD6, abd = abb, r1 = (aD6[eG] = code, ""), fR = aD6.length, abe = [], aC = 0; aC < fR; aC++) abe.push(aD6[aC] === abd[aC] ? "" : aD6[aC]);
		fR--;
		for (aC = 0; aC < fR; aC++) r1 += abe[aC] + ";";
		bm.po.pp(155, r1 += abe[fR])
	}, this.aU9 = function() {
		bm.po.pp(155, ""), this.di()
	}, this.ei = function(code, eG) {
		return code === this.aD6[eG] || code === this.aD6[eG + 1]
	}
}

function dd() {
	var abf = new Array(1),
		abg = new Array(1),
		abh = 20,
		eW = 0,
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
	}, this.v0 = function() {
		if (abi) {
			abi = !1;
			for (var aC = 0; 0 <= aC; aC--) abf[aC].onpause = null, abf[aC].oncanplaythrough = null, u.removeChild(document.body, abf[aC]), abf[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (abi) {
			var eZ = performance.now();
			if (eW + 66 < eZ)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === abg[aC]) return eW = eZ, abg[aC] = 2, void abf[aC].play();
			0 < abh && (abh--, setTimeout(abk, 66))
		}
	}
}

function cd() {
	this.a9b = function() {
		var abn;
		return !(am.lI < 3 || ah.hF[mN[0]] >= aE.kW >> 1) && (aE.iL ? 9 !== aE.l4 && (abn = af.aKn(), !(2 * af.aKo(bk.lL()) >= abn)) : function() {
			if (8 === aE.l4) return !1;
			var abn = af.aKn();
			if (2 * ah.hT[mN[0]] >= abn) return !1;
			return !0
		}())
	}
}

function cD() {
	this.di = function() {
		if (0 === aE.data.sResourcesType) {
			for (var aab = aE.km, hT = ah.hT, aC = 0; aC < aab; aC++) hT[aC] = 512;
			var aac = aE.yR,
				kz = aF.kz,
				iA = aF.iA;
			for (aC = aab; aC < aac; aC++) hT[aC] = kz[iA[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fR = aE.yR, hT = ah.hT, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fR; aC++) hT[aC] = sResourcesValue
		} : function() {
			for (var fR = aE.yR, hT = ah.hT, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fR; aC++) hT[aC] = sResourcesData[aC]
		})();
		bg.nI[8] = ah.hT[aE.fB]
	}
}

function dU() {
	var aIz = 501,
		abu = (this.abt = new Uint32Array(aIz), this.a4u = new Uint32Array(aIz), this.aCl = new Uint16Array(aIz), this.aUK = 0, 1),
		vD = 0;

	function abx(self) {
		self.max.fill(0)
	}

	function abz(self, aC) {
		self.max[0] = Math.max(self.abt[aC], self.max[0]), self.max[1] = Math.max(self.a4u[aC], self.max[1]), self.max[2] = Math.max(self.aCl[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.abv = 0, this.nI = new Array(21), this.abw = null, this.dj = function() {
		this.abw = [L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(341), L(342), L(523), L(524), L(525), L(526), "", L(527), L(528), L(529), L(299), L(530), L(531)]
	}, this.di = function() {
		this.aUK = 0, abu = 1, this.abv = 0, vD = 0, abx(this), this.nI.fill(0)
	}, this.qk = function(player, j4) {
		bD.gn.a4o(player) && (this.nI[0] += j4 + 1, this.nI[1]++, this.nI[12] += bR.fy[1])
	}, this.qF = function(player, ps) {
		__fx.donationsTracker.logDonation(player, ps, bR.fy[0], aX.a6Q());
		player === aE.fB && (aO.qF(bR.fy[0], bR.fy[1], ps), this.nI[12] += bR.fy[1], this.nI[16] += bR.fy[0]), ps === aE.fB && (aO.a89(bR.fy[0], player), this.nI[10] += bR.fy[0])
	}, this.qo = function(player) {
		bD.gn.a4o(player) && (this.nI[2]++, this.nI[12] += bR.fy[1])
	}, this.qw = function(player) {
		bD.gn.a4o(player) && (this.nI[19]++, this.nI[12] += bR.fy[1])
	}, this.aaV = function(player) {
		bD.gn.a4o(player) && this.nI[20]++
	}, this.gr = function(player, a5Z, eG) {
		bD.gn.a4o(player) && (this.nI[eG] += a5Z)
	}, this.ed = function() {
		var self;
		this.abv || 0 < vD-- || ((self = this).abt[self.aUK] = ah.hF[aE.fB], self.a4u[self.aUK] = ah.hT[aE.fB], self.aCl[self.aUK] = af.aCm(aE.fB), abz(self, self.aUK), self.aUK++, self.aUK === aIz && function(self) {
			abx(self), abz(self, 0), self.aUK = 1 + bO.fs(aIz, 2);
			for (var aC = 1; aC < self.aUK; aC++) self.abt[aC] = self.abt[2 * aC], self.a4u[aC] = self.a4u[2 * aC], self.aCl[aC] = self.aCl[2 * aC], abz(self, aC);
			abu *= 2
		}(self), vD = abu - 1, bh.n9(), 0 === ah.nM[aE.fB] && (self.abv = bi.kj()))
	}
}

function dV() {
	this.j = 0, this.k = 0, this.th = 0, this.ti = 0, this.ac1 = 0, this.ac2 = 0, this.a9p = 0, this.uQ = 0;
	var ac4 = this.ac3 = 0;
	this.ac5 = 0, this.ac6 = 0, this.ac7 = 0, this.a9A = 0, this.eG = 0, this.aCM = null, this.iD = !1, this.ac8 = -1, this.ac9 = !1, this.acA = [0, 0], this.dj = function() {
		this.aCM = [L(532), L(125, 0, "Balance"), L(124, 0, "Interest"), L(533)]
	}, this.di = function() {
		this.iD = !1, this.ac8 = -1, this.ac9 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fU = a1.a2.ia() && i.j < i.k ? 1 : a1.a2.ia() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fU * this.j), this.j -= a1.a2.ia() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.a9A = Math.floor(this.k / 150), this.a9A = Math.max(this.a9A, 1.5), this.th = Math.floor(1 + .02 * this
			.j), this.ti = Math.floor(1 + .04 * this.j), this.a9p = this.ti, ac4 = Math.floor(.75 * this.a9p), this.uQ = Math.floor(1 + .075 * this.j), this.ac5 = Math.floor(1 + .1125 * this.j), this.ac6 = Math.floor(this.j * (a1.a2.ia() ? .03 :
				.029)), this.ac6 = Math.max(this.ac6, 4), this.ac7 = Math.floor(.035 * this.j), this.ac7 = Math.max(this.ac7, 4), this.ac3 = this.k - 2 * this.a9p - this.uQ - this.ac5, this.iD && this.acB()
	}, this.he = function(m1, m2) {
		var yU, yT;
		return !!this.iD && (yT = m1, yU = m2, m1 -= bO.fs(i.j - this.j, 2), m2 -= bO.fs(i.k - this.k, 2), m1 < 0 || m2 < 0 || m1 >= this.j || m2 >= this.k || m1 >= this.j - this.ac5 && m2 < this.ac5 ? -1 !== aN.he(yT, yU) || bF.he(yT, yU) ||
			this.sa() : m2 < this.ac5 || (m2 < this.k - this.uQ ? (this.ac9 = !0, this.ac8 = (m1 - 2 * this.th - this.ac1) / this.ac2, 3 !== this.eG && (bi.dq = !0)) : (yT = (yT = Math.floor(m1 / (this.j / this.aCM.length))) < 0 ? 0 : yT >=
				this.aCM.length ? this.aCM.length - 1 : yT) !== this.eG && (this.eG = yT, this.acB(), bi.dq = !0)), !0)
	}, this.a2u = function(m1, m2) {
		return this.acA[0] = m1, this.acA[1] = m2, !(!this.iD || !this.ac9 || (m1 -= bO.fs(i.j - this.j, 2), m2 = this.ac8, this.ac8 = (m1 - 2 * this.th - this.ac1) / this.ac2, (0 <= this.ac8 && this.ac8 <= 1 || 0 <= m2 && m2 <= 1) && (bi.dq = !
			0), 0))
	}, this.a3J = function() {
		this.ac9 && (this.ac9 = !1)
	}, this.a3V = function() {
		this.iD ? this.sa() : this.show()
	}, this.show = function() {
		bg.aUK < 2 || (this.iD = !0, this.acB())
	}, this.sa = function() {
		this.iD = !1, this.ac8 = -1, bi.dq = !0
	}, this.acB = function() {
		this.eG < 2 ? this.ac1 = aR.measureText(bD.sJ.a0e(bg.max[this.eG]), bD.rK.t8(0, this.ac6)) : 2 === this.eG && (this.ac1 = aR.measureText(bD.sJ.a5S(6, 2), bD.rK.t8(0, this.ac6))), this.ac2 = this.j - 2 * this.th - this.ac1 - this.ti
	}, this.n9 = function() {
		this.iD && this.acB()
	}, this.vv = function() {
		this.iD && this.aA7()
	}, this.aA7 = function() {
		var fY = bO.fs(i.j - this.j, 2),
			fa = bO.fs(i.k - this.k, 2);
		vw.setTransform(1, 0, 0, 1, fY, fa), vw.fillStyle = bE.oK, vw.fillRect(0, this.ac5, this.j, this.k - this.ac5), this.acC(), this.aSq(), vw.strokeRect(0, 0, this.j, this.k), bD.rK.textAlign(vw, 2), vw.font = bD.rK.t8(0, this.ac6), 0 ===
			this.eG ? this.acD(bg.abt, fY, fa) : 1 === this.eG ? this.acD(bg.a4u, fY, fa) : 2 === this.eG ? this.acE(fY, fa) : 3 === this.eG && (this.acF(fY, fa), this.acG(fY, fa)), aN.a7G(Math.floor(fY + this.j - .725 * this.ac5), Math.floor(
				fa + .275 * this.ac5), Math.floor(.45 * this.ac5)), vw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.acC = function() {
		var aC, eZ;
		for (vw.lineWidth = this.a9A, bD.rK.textBaseline(vw, 1), bD.rK.textAlign(vw, 1), vw.strokeStyle = bE.oN, vw.font = bD.rK.t8(1, this.ac7), eZ = this.j / this.aCM.length, vw.fillStyle = bE.ok, vw.fillRect(this.eG * eZ, this.k - this.uQ, eZ,
				this.uQ), vw.fillStyle = bE.oN, vw.fillRect(0, this.k - this.uQ - .5 * this.a9A, this.j, this.a9A), aC = 1; aC <= 3; aC++) vw.fillRect(aC * eZ, this.k - this.uQ, this.a9A, this.uQ);
		for (aC = this.aCM.length - 1; 0 <= aC; aC--) vw.fillText(bD.zW.a4S(this.aCM[aC], 0, .9 * eZ), (aC + .5) * eZ, this.k - .46 * this.uQ)
	}, this.aSq = function() {
		vw.fillStyle = bE.pA, vw.fillRect(0, 0, this.j, this.ac5), vw.fillStyle = bE.oN, vw.fillRect(0, this.ac5 - .5 * this.a9A, this.j, this.a9A), vw.font = bD.rK.t8(1, .39 * this.ac5), vw.fillText(bD.zW.a4S(L(534), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.ac5))
	}, this.acD = function(h, fY, fa) {
		var lh = bg.max[this.eG],
			a3n = (vw.setTransform(1, 0, 0, 1, fY + 2 * this.th + this.ac1, fa + this.a9p + this.ac5), vw.lineWidth = 2, this.ac3 / Math.sqrt(lh));
		vw.beginPath(), vw.moveTo(this.ac2, this.ac3 - a3n * Math.sqrt(h[bg.aUK - 1]));
		for (var aC = bg.aUK - 2; 0 <= aC; aC--) vw.lineTo(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.sqrt(h[aC]));
		vw.stroke();
		fY = this.a7G(h, a3n, .5);
		fY < .95 && vw.fillText(bD.sJ.a0e(lh), -this.th, 0), .05 < Math.abs(fY - .5) && vw.fillText(bD.sJ.a0e(Math.floor(lh / 4)), -this.th, Math.floor(this.ac3 / 2)), .05 < fY && vw.fillText("0", -this.th, this.ac3)
	}, this.acE = function(fY, fa) {
		vw.setTransform(1, 0, 0, 1, fY + 2 * this.th + this.ac1, fa + this.a9p + this.ac5), vw.lineWidth = 2;
		var a3n = this.ac3 / Math.max(bg.max[this.eG], 1);
		vw.beginPath(), vw.moveTo(this.ac2, this.ac3 - a3n * bg.aCl[bg.aUK - 1]);
		for (var aC = bg.aUK - 2; 0 <= aC; aC--) vw.lineTo(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * bg.aCl[aC]);
		vw.stroke();
		fY = this.a7G(bg.aCl, a3n, 1), fa = bg.max[this.eG] / 100;
		fY < .95 && vw.fillText(bD.sJ.a5S(fa, 2), -this.th, 0), .05 < Math.abs(fY - .5) && vw.fillText(bD.sJ.a5S(fa / 2, 2), -this.th, Math.floor(this.ac3 / 2)), .05 < fY && vw.fillText(bD.sJ.a5S(0, 2), -this.th, this.ac3)
	}, this.acF = function(fY, fa) {
		vw.setTransform(1, 0, 0, 1, fY + .34 * this.j, fa + 2 * ac4 + this.ac5), bD.rK.textAlign(vw, 2);
		for (var aC4 = this.k - 4 * ac4 - this.uQ - this.ac5, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) vw.fillText(bD.zW.a4S(bg.abw[h[aC]], 0, .31 * this.j), 0, aC * aC4 / 9);
		var ft = bg.nI;
		for (vw.setTransform(1, 0, 0, 1, fY + .39 * this.j, fa + 2 * ac4 + this.ac5), bD.rK.textAlign(vw, 0), vw.fillText(bD.sJ.a5S(100 * ft[0] / (1024 * Math.max(ft[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) vw.fillText(ft[h[aC]].toString(), 0,
			aC * aC4 / 9);
		vw.fillText(bD.sJ.a5S(100 * (1 - ah.hF[aE.fB] / ft[7]), 0), 0, aC4)
	}, this.acG = function(fY, fa) {
		vw.setTransform(1, 0, 0, 1, fY + .79 * this.j, fa + 2 * ac4 + this.ac5), bD.rK.textAlign(vw, 2);
		var aC, aC4 = this.k - 4 * ac4 - this.uQ - this.ac5;
		for (vw.fillStyle = bE.oe, aC = 2; 0 <= aC; aC--) vw.fillText(bD.zW.a4S(bg.abw[aC + 8], 0, .31 * this.j), 0, aC * aC4 / 9);
		vw.fillText(bD.zW.a4S(bg.abw[18], 0, .31 * this.j), 0, 3 * aC4 / 9), vw.fillStyle = bE.od, vw.fillText(bD.zW.a4S(bg.abw[11], 0, .31 * this.j), 0, 4 * aC4 / 9), vw.fillStyle = bE.ox, vw.fillText(bD.zW.a4S(bg.abw[13], 0, .31 * this.j), 0,
				5 * aC4 / 9), vw.fillText(bD.zW.a4S(bg.abw[15], 0, .31 * this.j), 0, 6 * aC4 / 9), vw.fillText(bD.zW.a4S(bg.abw[16], 0, .31 * this.j), 0, 7 * aC4 / 9), vw.fillText(bD.zW.a4S(bg.abw[12], 0, .31 * this.j), 0, 8 * aC4 / 9), vw
			.fillStyle = bE.ow, vw.fillText(bD.zW.a4S(bg.abw[17], 0, .31 * this.j), 0, aC4), vw.fillStyle = bE.oe;
		var ft = bg.nI,
			aG8 = ft[8] + ft[9] + ft[10] + ft[18],
			aG8 = bD.sJ.a0e(aG8),
			aRb = vw.measureText(aG8).width,
			fY = (vw.setTransform(1, 0, 0, 1, fY + .83 * this.j + aRb, fa + 2 * ac4 + this.ac5), vw.fillText(bD.sJ.a0e(ft[8]), 0, 0), vw.fillText(bD.sJ.a0e(ft[9]), 0, aC4 / 9), vw.fillText(bD.sJ.a0e(ft[10]), 0, 2 * aC4 / 9), vw.fillText(bD.sJ
				.a0e(ft[18]), 0, 3 * aC4 / 9), vw.fillStyle = bE.od, vw.fillText(aG8, 0, 4 * aC4 / 9), vw.fillStyle = bE.ox, vw.fillText(bD.sJ.a0e(ft[13]), 0, 5 * aC4 / 9), vw.fillText(bD.sJ.a0e(ft[15]), 0, 6 * aC4 / 9), vw.fillText(bD.sJ
				.a0e(ft[16]), 0, 7 * aC4 / 9), vw.fillText(bD.sJ.a0e(ft[12]), 0, 8 * aC4 / 9), ft[12] + ft[13] + ft[15] + ft[16]);
		vw.fillStyle = bE.ow, vw.fillText(bD.sJ.a0e(fY), 0, aC4), vw.fillStyle = bE.oN
	}, this.a7G = function(h, a3n, aAk) {
		var aC, e, gA;
		return this.ac8 < 0 || 1 < this.ac8 ? .25 : (aC = this.ac8 * (bg.aUK - 1), gA = h[e = Math.floor(aC)], gA += (aC - e) * (h[e < bg.aUK - 1 ? e + 1 : e] - gA), vw.strokeStyle = bE.oQ, .04 < this.ac8 && this.acI(0, this.ac3 - a3n * Math.pow(
				gA, aAk), aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gA, aAk)), .04 < gA / bg.max[this.eG] && this.acI(aC * this.ac2 / (bg.aUK - 1), this.ac3, aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gA, aAk)), vw
			.fillStyle = bE.oz, vw.beginPath(), vw.arc(aC * this.ac2 / (bg.aUK - 1), this.ac3 - a3n * Math.pow(gA, aAk), Math.max(2, .014 * this.k), 0, 2 * Math.PI), vw.fill(), h = this.ac8 * bi.aCn, h = 0 === ah.nM[aE.fB] ? Math.floor(h * bg
				.abv) : Math.floor(h * bi.kj()), vw.fillStyle = bE.oN, vw.fillText(1 === aAk ? bD.sJ.a5S(gA / 100, 2) : bD.sJ.a0e(Math.floor(gA)), -this.th, this.ac3 - a3n * Math.pow(gA, aAk)), bD.rK.textAlign(vw, 1), vw.fillText(aX.aCa(h),
				aC * this.ac2 / (bg.aUK - 1), this.ac3 + this.ac6 - (a1.a2.ia() ? 2 : 0) - this.a9A), bD.rK.textAlign(vw, 2), a3n * Math.pow(gA, aAk) / this.ac3)
	}, this.acI = function(nn, no, o0, o1) {
		vw.beginPath(), vw.moveTo(nn, no), vw.lineTo(o0, o1), vw.stroke()
	}
}

function c1() {
	this.acJ = "https://territorial.io/changelog", this.aUL = "https://territorial.io/terms", this.aUM = "https://territorial.io/privacy", this.acK = "https://territorial.io/tutorial", this.acL = "https://territorial.io/players", this.acM =
		"https://territorial.io/clans", this.acN = "https://territorial.io/clan-results", this.aQk = "https://patreon.com/c/territorial", this.aE5 = "https://play.google.com/store/apps/details?id=territorial.io", this.a2S =
		"https://apps.apple.com/app/id1581110913", this.aE6 = "https://discord.gg/pthqvpTXmh", this.aE7 = "https://www.instagram.com/davidtschacher/", this.a0C =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dD() {
	this.z = new acO, this.zT = new acP, this.di = function() {
		this.z.di()
	}, this.ed = function() {
		0 !== this.z.aWP && this.z.aWP--
	}
}

function acP() {
	this.vv = function() {
		if (0 !== bS.z.aWP && (vw.globalAlpha = Math.min(bS.z.aWP / 580, 1), vw.drawImage(bS.z.acS, 1 + aT.zR(), 1 + aT.zS()), vw.globalAlpha = 1, aE.hp)) {
			for (var nn = j5 / ic, no = j6 / ic, o0 = (i.j + j5) / ic, o1 = (i.k + j6) / ic, h0 = bS.z.acT * ic, acU = bS.z.acU, aC = aE.km - 1; 0 <= aC; aC--) ! function(aC, h0, nn, no, o0, o1, acU) {
				var highlight;
				0 === ah.nM[aC] || 0 === ah.hF[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h0 *= 2), o0 = i.j * ((ah.jK[aC] + ah.jL[aC] + 1) / 2 - nn) / (o0 - nn) - .5 * h0, nn = i.k * ((ah.jM[
					aC] + ah.jN[aC] + 1) / 2 - no) / (o1 - no) - .5 * h0, o0 > i.j) || nn > i.k || o0 < -h0 || nn < -h0 || (highlight ? vw.setTransform(2 * ic, 0, 0, 2 * ic, o0, nn) : vw.setTransform(ic, 0, 0, ic, o0, nn), vw.drawImage(
					acU[aE.iL ? bj.fP[aC] : 1], 0, 0))
			}(aC, h0, nn, no, o0, o1, acU);
			vw.setTransform(ic, 0, 0, ic, 0, 0)
		}
	}
}

function acO() {
	this.acT = 28, this.aWP = 0, this.acS = null;
	var acW = this.acU = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aca(iN, acb) {
		var fY, fa, fD, io, a4E = bD.rK.xl(iN, iN),
			iT = bD.rK.getContext(a4E, !0),
			iQ = bD.rK.getImageData(iT, iN, iN),
			xw = iQ.data,
			lh = (iN >> 1) - .5,
			acc = .5 + lh;
		for (acc *= acc, fa = 0; fa < iN; fa++)
			for (fY = 0; fY < iN; fY++) io = (io = fY - lh) * io + (io = fa - lh) * io, xw[fD = 4 * (fa * iN + fY)] = acb[0], xw[1 + fD] = acb[1], xw[2 + fD] = acb[2], xw[3 + fD] = (acc - io) * acb[3] / acc;
		return iT.putImageData(iQ, 0, 0), a4E
	}

	function abX(aC, iT, a4E, iN) {
		var highlight, fY, fa;
		0 !== ah.nM[aC] && 0 !== ah.hF[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iN *= 2), fY = ah.jK[aC] + ah.jL[aC] + 1 - iN - 2 >> 1, fa = ah.jM[aC] + ah.jN[aC] + 1 - iN - 2 >> 1, highlight ? iT
			.drawImage(a4E[aE.iL ? 9 === aE.l4 && 5 === aF.iA[aC] ? 3 : bj.fP[aC] : aC < aE.km ? 1 : 0], fY, fa, iN, iN) : iT.drawImage(a4E[aE.iL ? 9 === aE.l4 && 5 === aF.iA[aC] ? 3 : bj.fP[aC] : aC < aE.km ? 1 : 0], fY, fa))
	}
	this.di = function() {
		var st;
		this.aWP = 700,
			function(st) {
				var iN = st.acT;
				if (st.acU = [], acW = [], aE.iL) {
					for (var aC = 0; aC <= aE.yY; aC++) st.acU.push(aca(iN, bj.aZs[bj.l9[aC]])), acW.push(aca(iN >> 1, bj.aZs[bj.l9[aC]]));
					9 === aE.l4 && acW.push(aca(iN, bj.aZs[1]))
				} else st.acU.push(aca(iN, bj.aZs[7])), st.acU.push(aca(iN, bj.aZs[4])), acW.push(aca(iN >> 1, bj.aZs[7]))
			}(this),
			function(st, acg) {
				var aC, acS = st.acS,
					iT = bD.rK.getContext(acS, !0),
					fR = aE.fO,
					iN = st.acT >> 1;
				iT.imageSmoothingEnabled = !1, iT.setTransform(1, 0, 0, 1, 0, 0), acg && iT.clearRect(0, 0, acS.width, acS.height);
				if (9 === aE.l4) {
					iN <<= 1;
					st = b0.lD[5];
					for (aC = fR - st; aC < fR; aC++) abX(aC, iT, acW, iN);
					fR -= st, iN >>= 1
				}
				for (aC = aE.km; aC < fR; aC++) abX(aC, iT, acW, iN)
			}(this, null !== (st = this).acS && st.acS.width === bV.fc - 2 && st.acS.height === bV.fd - 2 || (st.acS = bD.rK.xl(bV.fc - 2, bV.fd - 2), !1)), aE.hp || this.a5k()
	}, this.aZt = aca, this.a5k = function() {
		for (var fR = aE.km, iN = this.acT, acU = this.acU, iT = bD.rK.getContext(this.acS, !0), aC = 0; aC < fR; aC++) abX(aC, iT, acU, iN)
	}
}

function dE() {
	function acj() {
		8 === aE.l4 && 1 === aE.a1N && bU.a0z.a1M()
	}

	function aci(player) {
		aE.hp ? (al.aJ6(player), am.aMY(), aE.l6 && aE.qg.ed()) : b4.aEP(player)
	}
	this.q8 = function(player) {
		aO.a1a(player, player === aE.fB ? 21 : 22), aci(player), acj()
	}, this.qd = function(player) {
		1 === aE.a1N && 0 !== ah.nM[player] && 2 !== ah.a4k[player] && aci(player), aE.a1Q--, aE.a1P--, aO.a1a(player, 4), bD.gn.hc(2) && aX.n8(!0), acj()
	}
}

function dO() {
	this.aWf = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aC1 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.oN, "rgb(170,170,170)"
	], this.ack = [bE.oN, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.oN, bE.oE], this.acl = [bE.oE, bE.oN, bE.oN, bE.oN, bE.oE, bE.oE, bE.oE, bE.oE, bE.oN];
	var aMi = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aM1 = ["rgba(" + aMi[0] + ",", "rgba(" + aMi[1] + ",", "rgba(" + aMi[2] + ",", "rgba(" + aMi[3] + ",", "rgba(" + aMi[4] + ",", "rgba(" + aMi[5] + ",", "rgba(" + aMi[6] + ",", "rgba(" + aMi[7] + ",", "rgba(" + aMi[8] + ",", "rgba(" + aMi[9] +
			","
		], this.aM2 = ["rgb(" + aMi[0] + ")", "rgb(" + aMi[1] + ")", "rgb(" + aMi[2] + ")", "rgb(" + aMi[3] + ")", "rgb(" + aMi[4] + ")", "rgb(" + aMi[5] + ")", "rgb(" + aMi[6] + ")", "rgb(" + aMi[7] + ")", "rgb(" + aMi[8] + ")", "rgb(" + aMi[9] +
			")"
		], this.a1j = null, this.aZs = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aS2 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.l9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fP = new Uint8Array(aE.fO), this.aC2 = new Uint8Array(aE.fO), this.ye = new Uint16Array(aE.fO), this.yf = new Uint16Array(this.l9.length + 1), this.yg = new Uint16Array(this.l9.length), this.dj =
		function() {
			this.a1j = [L(535), L(536), L(537), L(538), L(539), L(540), L(541), L(542), L(543)]
		}, this.di = function() {
			if (this.fP.fill(0), this.aC2.fill(0), this.acm(), aE.iL) {
				if (9 === aE.l4) {
					for (var fP = bj.fP, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fP[aC] = 1;
					var fR = aE.fO;
					for (aC = aE.data.teamPlayerCount[7]; aC < fR; aC++) fP[aC] = 2;
					bj.l9[1] = 7, bj.l9[2] = 8
				} else aE.l6 ? function() {
					var aS2 = bj.aS2,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.km - 1; 0 <= aC; aC--) colorsData[aC] = az.k3(262144);
					var acx = 0,
						fh = 768,
						aS1 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fU = 0, fl = 0; fl < 3; fl++) fU += Math.abs(aS2[aC][fl] - aS1[fl]);
							fU < fh && (acx = aC, fh = fU)
						} var acy = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) acy[aC] = teamPlayerCount[aC];
					var l9 = bj.l9,
						acz = new Uint8Array(9),
						gu = (l9[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) acy[aC] && (acz[aC] = gu, l9[gu++] = aC);
					var k2 = aE.km,
						fP = bj.fP;
					acy[acx] ? (acy[acx]--, fP[0] = acz[acx]) : k2 = 0;
					var ei = 0;
					for (aC = k2; aC < aE.yR; aC++) {
						var iJ = l9[ei];
						if (acy[iJ]) acy[iJ]--, fP[aC] = acz[iJ];
						else if (aC--, 9 <= ++ei) return console.log("error 325")
					}
				}() : this.ed();
				! function() {
					for (var fR = aE.fO, ye = bj.ye, yf = bj.yf, yg = bj.yg, fP = bj.fP, l9 = bj.l9, yX = l9.length, eV = new Array(yX), aC = 0; aC < yX; aC++) eV[aC] = [];
					for (aC = 0; aC < fR; aC++) eV[l9[fP[aC]]].push(aC);
					for (aC = 1; aC <= yX; aC++) yf[aC] = yf[aC - 1] + eV[aC - 1].length;
					for (aC = 0; aC < yX; aC++)
						for (var gu = eV[aC].length, lh = yf[aC], iJ = 0; iJ < gu; iJ++) ye[iJ + lh] = eV[aC][iJ];
					var km = aE.km;
					for (aC = 0; aC < yX; aC++)
						for (gu = eV[aC].length, lh = yf[aC], iJ = 0; iJ < gu; iJ++)
							if (ye[iJ + lh] >= km) {
								yg[aC] = iJ;
								break
							}
				}(), ! function() {
					for (var fR = aE.fO, fP = bj.fP, aC2 = bj.aC2, l9 = bj.l9, aC = 0; aC < fR; aC++) aC2[aC] = l9[fP[aC]];
					9 === aE.l4 && aC2.fill(1, fR - b0.lD[5])
				}()
			}
		}, this.acm = function() {
			for (var aC = this.l9.length - 1; 0 <= aC; aC--) this.l9[aC] = aC
		}, this.ed = function() {
			var a0T = new Uint8Array(aE.km),
				a0U = new Uint8Array(aE.km),
				acr = new Uint16Array(8),
				acs = new Uint16Array(this.l9.length);
			this.act(a0T, a0U, acr, 1), this.aIb(acr), this.acu(acs, a0T, a0U), this.acv(a0T, a0U, acs), this.acw()
		}, this.act = function(a0T, a0U, acy, ad0) {
			for (var fl, e, ad1, fR = this.l9.length - ad0, h = new Uint16Array(fR), aS2 = this.aS2, colorsData = aE.data.colorsData, aC = aE.km - 1; 0 <= aC; aC--) {
				for (fl = fR; ad0 <= fl; fl--) h[fl - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aS2[fl][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aS2[fl][1]) + Math.abs(4 * (63 & colorsData[aC]) - aS2[fl][2]);
				for (ad1 = 768, fl = fR - 1; 0 <= fl; fl--) h[e = (fl + aC) % fR] < ad1 && (ad1 = h[e], a0T[aC] = e);
				for (acy[a0T[aC]] += 4, ad1 = 768, fl = fR - 1; 0 <= fl; fl--) h[e = (fl + aC) % fR] < ad1 && e !== a0T[aC] && (ad1 = h[e], a0U[aC] = e);
				acy[a0U[aC]]++
			}
		}, this.aIb = function(acy) {
			for (var fl, lj, fR = this.l9.length - 1, aC = fR; 0 <= aC; aC--) this.l9[aC] = aC;
			for (aC = fR - 1; 0 <= aC; aC--) acy[aC]++;
			for (aC = 1; aC <= fR; aC++) {
				for (lj = 0, fl = 1; fl < fR; fl++) acy[fl] > acy[lj] && (lj = fl);
				acy[lj] = 0, this.l9[aC] = lj + 1
			}
		}, this.acu = function(acs, a0T, a0U) {
			var fl, a25, ei, fU, e, nz, tz, ad2 = this.l9.length - 1,
				rn = new Uint16Array(ad2),
				ad3 = [],
				ad4 = 0,
				a24 = [],
				ad5 = [];
			loop: for (var aC = 0; aC < aE.km; aC++)
				if (null !== (a25 = bD.sJ.a26(ah.a23[aC]))) {
					for (fl = a24.length - 1; 0 <= fl; fl--)
						if (a25 === a24[fl]) {
							ad5[fl].push(aC), ad4 = Math.max(ad4, ad5[fl].length);
							continue loop
						} a24.push(a25), ad3.push(!1), ad5.push([aC]), ad4 = Math.max(ad4, 1)
				}
			for (; 2 < aE.yY && ad4 > bO.fs(aE.km, aE.yY);) aE.yY--, aE.l4--;
			for (fl = a24.length - 1; 0 <= fl; fl--) {
				for (fU = -1, ei = a24.length - 1; 0 <= ei; ei--) !ad3[ei] && (-1 === fU || ad5[ei].length > ad5[fU].length) && (fU = ei);
				for (ei = ad2 - 1; 0 <= ei; ei--) rn[ei] = 1;
				for (ei = ad5[fU].length - 1; 0 <= ei; ei--) rn[a0T[ad5[fU][ei]]] += 3, rn[a0U[ad5[fU][ei]]]++;
				for (aC = ad2 - 1; 0 <= aC; aC--) {
					for (e = fU % ad2, ei = ad2 - 1; 0 <= ei; ei--) rn[ei] > rn[e] && (e = ei);
					for (nz = -1, ei = aE.yY; 0 < ei; ei--)
						if (this.l9[ei] === e + 1) {
							nz = ei;
							break
						} if (rn[e] = 0, -1 !== nz) {
						for (tz = 0, ei = aE.yY; 0 < ei; ei--) acs[nz] > acs[ei] && tz++;
						if (tz !== aE.yY - 1) {
							for (ei = ad5[fU].length - 1; 0 <= ei; ei--) acs[nz]++, this.fP[ad5[fU][ei]] = nz;
							break
						}
					}
				}
				ad3[fU] = !0
			}
		}, this.acv = function(a0T, a0U, acs) {
			for (var aC, im, fR = this.l9.length - 1, border = bO.fs(aE.km, aE.yY), ad6 = (0 < aE.km % aE.yY && border++, new Uint8Array(1 + fR)), fl = fR; 1 <= fl; fl--) ad6[this.l9[fl]] = fl;
			for (aC = 0; aC < aE.km; aC++) im = ad6[a0T[aC] + 1], 0 === this.fP[aC] && im <= aE.yY && acs[im] < border && (acs[im]++, this.fP[aC] = im);
			for (aC = 0; aC < aE.km; aC++) im = ad6[a0U[aC] + 1], 0 === this.fP[aC] && im <= aE.yY && acs[im] < border && (acs[im]++, this.fP[aC] = im);
			for (fl = aE.yY; 1 <= fl; fl--)
				for (aC = aE.km - 1; 0 <= aC && !(acs[fl] >= border); aC--) 0 === this.fP[aC] && (acs[fl]++, this.fP[aC] = fl)
		}, this.acw = function() {
			if (aE.yY < 8) aE.yY++, aE.l4++, aE.yZ = 1;
			else
				for (var aC = aE.km; aC < aE.fO; aC++) this.fP[aC] = 1 + aC % aE.yY
		}
}

function dg() {
	this.hG = function() {
		for (var fY, fa, aC = gN - 1; 0 <= aC; aC--) fY = bO.fs(gP[aC], 4) % bV.fc, fa = bO.fs(gP[aC], 4 * bV.fc), ah.jK[gI] = Math.min(fY, ah.jK[gI]), ah.jM[gI] = Math.min(fa, ah.jM[gI]), ah.jL[gI] = Math.max(fY, ah.jL[gI]), ah.jN[gI] = Math
			.max(fa, ah.jN[gI])
	}, this.gb = function() {
		var fU, gz, aC, fR = ah.gt[gI].length,
			fT = ad.fT;
		loop: for (aC = fR - 1; 0 <= aC; aC--) {
			for (fU = 3; 0 <= fU; fU--)
				if (gz = ah.gt[gI][aC] + fT[fU], ad.fI(gz) || ad.h1(gz) && ad.fJ(gz) !== gI) {
					ad.jy(ah.gt[gI][aC], gI);
					continue loop
				} ah.gt[gI][aC] = ah.gt[gI][fR - 1], ah.gt[gI].pop(), fR--
		}
	}, this.gc = function() {
		var player = gI,
			h7 = ah.h7,
			h8 = ah.h8,
			fq = ah.fq,
			fR = h7[player].length,
			fT = ad.fT;
		loop: for (var aC = fR - 1; 0 <= aC; aC--) {
			for (var ad7 = !1, ad8 = !1, fU = 3; 0 <= fU; fU--) {
				var gz = h7[player][aC] + fT[fU];
				if (ad.aIl(gz, player)) continue loop;
				ad7 = ad7 || ad.ih(gz), ad8 = ad8 || ad.aIk(gz)
			}
			ad7 ? h8[player].push(h7[player][aC]) : ad8 ? fq[player].push(h7[player][aC]) : ad.z0(h7[player][aC], player), h7[player][aC] = h7[player][fR - 1], h7[player].pop(), fR--
		}
	}, this.h5 = function() {
		ah.hF[gM] -= gN
	}, this.h6 = function(border) {
		for (var fR = border.length, aC = fR - 1; 0 <= aC; aC--) ad.zL(gM, border[aC]) || (border[aC] = border[fR - 1], border.pop(), fR--)
	}, this.h9 = function(border) {
		for (var fR = border.length, aC = fR - 1; 0 <= aC; aC--) !ad.zL(gM, border[aC]) && ad.fM(border[aC]) && (border[aC] = border[fR - 1], border.pop(), fR--)
	}, this.hA = function(border) {
		for (var fU, gz, fR = border.length, fT = ad.fT, aC = fR - 1; 0 <= aC; aC--)
			for (fU = 3; 0 <= fU; fU--)
				if (gz = border[aC] + fT[fU], ad.aIl(gz, gM)) {
					ah.h7[gM].push(border[aC]), border[aC] = border[fR - 1], border.pop(), fR--;
					break
				}
	}, this.hB = function() {
		for (var fU, gz, fT = ad.fT, aC = gN - 1; 0 <= aC; aC--)
			for (fU = 3; 0 <= fU; fU--) gz = gP[aC] + fT[fU], ad.zO(gM, gz) && ad.aIr(gz) && (ah.h7[gM].push(gz), ad.gw(gz, gM))
	}, this.hC = function() {
		var fY, fa;
		loop: for (; ah.jM[gM] < ah.jN[gM];) {
			for (fY = ah.jL[gM]; fY >= ah.jK[gM]; fY--)
				if (ad.zL(gM, 4 * (ah.jM[gM] * bV.fc + fY))) break loop;
			ah.jM[gM]++
		}
		loop: for (; ah.jM[gM] < ah.jN[gM];) {
			for (fY = ah.jL[gM]; fY >= ah.jK[gM]; fY--)
				if (ad.zL(gM, 4 * (ah.jN[gM] * bV.fc + fY))) break loop;
			ah.jN[gM]--
		}
		loop: for (; ah.jK[gM] < ah.jL[gM];) {
			for (fa = ah.jN[gM]; fa >= ah.jM[gM]; fa--)
				if (ad.zL(gM, 4 * (fa * bV.fc + ah.jK[gM]))) break loop;
			ah.jK[gM]++
		}
		loop: for (; ah.jK[gM] < ah.jL[gM];) {
			for (fa = ah.jN[gM]; fa >= ah.jM[gM]; fa--)
				if (ad.zL(gM, 4 * (fa * bV.fc + ah.jL[gM]))) break loop;
			ah.jL[gM]--
		}
	}, this.fK = function(player, jv) {
		return 0 === bj.fP[player] || bj.fP[player] !== bj.fP[jv]
	}, this.hx = function(player) {
		for (var aC, h0, fR = ah.h7[player].length, fT = ad.fT, fU = 3; 0 <= fU; fU--)
			for (h0 = fT[fU], aC = 0; aC < fR; aC++)
				if (ad.fI(ah.h7[player][aC] + h0)) return !0;
		return !1
	}, this.aJ2 = function(player) {
		for (var aC, h0, fR = ah.h7[player].length, fT = ad.fT, fU = 3; 0 <= fU; fU--)
			for (h0 = fT[fU], aC = 0; aC < fR; aC++)
				if (ad.jx(ah.h7[player][aC]) && ad.fI(ah.h7[player][aC] + h0)) return !0;
		return !1
	}, this.i0 = function(a4q, a4r) {
		for (var aC, eZ, h0, gz, aab = ah.h7[a4q].length, aac = ah.h7[a4r].length, fT = (aac < aab && (eZ = a4q, a4q = a4r, a4r = eZ, eZ = aab, aab = aac, 0), ad.fT), fU = 3; 0 <= fU; fU--)
			for (h0 = fT[fU], aC = 0; aC < aab; aC++)
				if (gz = ah.h7[a4q][aC] + h0, ad.h1(gz) && ad.fJ(gz) === a4r) return !0;
		return !1
	}, this.aJ3 = function(a4q, a4r) {
		for (var aC, h0, gz, aab = ah.h7[a4q].length, fT = ad.fT, fU = 3; 0 <= fU; fU--)
			for (h0 = fT[fU], aC = 0; aC < aab; aC++)
				if (ad.jx(ah.h7[a4q][aC]) && (gz = ah.h7[a4q][aC] + h0, ad.h1(gz)) && ad.fJ(gz) === a4r) return !0;
		return !1
	}
}

function da() {
	this.qp = new ad9
}

function ad9() {
	this.i3 = function(player) {
		bD.gn.a4l(player) && aO.zp(80, L(544), 637, 0, bE.pD, bE.oK, -1, !1)
	}, this.i6 = function(player) {
		bD.gn.a4l(player) && aO.zp(80, L(545), 637, 0, bE.pD, bE.oK, -1, !1)
	}
}

function adA() {
	this.adB = 0, this.ed = function() {
		aP.ed(), aa.ed(), i.ed(), b1.z.ed(), ay.aI6(), bX.eQ.ed(), bi.dq && (bi.dq = !1, ab.vv())
	}
}

function adC() {
	this.eY = bi.eY, this.eG = 0, this.adB = 0, this.aI4 = 0, this.adD = null, this.adE = 7, this.adF = 0, this.di = function() {
		this.aI4 = 0, this.adD = [], this.eG = 0, this.adB = 0
	}, this.aVc = function(aD) {
		if (aE.hp) this.aCo(aD);
		else if (this.adD.push(aD), 2 === aE.a1N) {
			for (var aC = 0; aC < this.adD.length; aC++) bB.pi.ed(this.adD[aC]);
			this.adD = []
		}
	}, this.aCo = function(aD) {
		2 !== aE.a1N && (bB.pi.ed(aD), bC.ed(), aX.aCo(this.aI4), this.aI4 === aE.a5q ? (aE.qg.ed(), this.aI4 = 0, this.eG = 0, this.adB = 0, this.eY = bi.eY) : (this.aI4++, ag.a5j(), ag.n8(!0), be.render()))
	}, this.ed = function() {
		i.ed(), aE.hp ? (bi.dq = aX.aCo(-1) || bi.dq, nA()) : (0 !== this.eG || bi.eY >= this.eY && (this.eY += bi.aCn * Math.floor(1 + (bi.eY - this.eY) / bi.aCn), 2 === aE.a1N ? my() : this.adG(), this.eG++, 27 < bi.eY - this.adF)) && this
		.adH(), n5(), bi.dq && (bi.dq = !1, zP()), this.adF = bi.eY
	}, this.adH = function() {
		bi.dq = !0, n7(), this.eG = 0
	}, this.adG = function() {
		var wk, aC;
		if (this.adB !== 7 * this.aI4) n0(), be.render();
		else {
			wk = !1;
			loop: for (; this.adI() && (wk = !0, n0(), 2 !== aE.a1N) && 0 < this.adD.length;)
				for (aC = this.adE - 2; 0 <= aC; aC--)
					if (n0(), 2 === aE.a1N) break loop;
			wk ? be.render() : (my(), be.a5m())
		}
	}, this.adI = function() {
		return 0 < this.adD.length && (this.aI4++, bB.pi.ed(this.adD[0]), this.adD.shift(), !0)
	}
}

function adJ() {
	var adK, adL, adM, aI4, adN, eG = 0,
		eY = bi.eY;

	function adQ() {
		! function() {
			if (!aE.hp) return;
			if (aE.l6) return;
			if (2 !== aE.a1N)
				if (adN % 7 != 0) adN++;
				else if (aI4 === aE.a5q) {
				if (!adT()) return;
				aX.aCo(aI4), aE.qg.ed()
			} else {
				if (!adT()) return;
				adN++, aI4++, ag.a5j(), ag.n8(!0)
			}
			return 1
		}() && adT() && n0()
	}

	function adR() {
		eG = 0, (aE.hp ? (bi.dq = aX.aCo(aI4 - (adN % 7 == 0 ? 0 : 1) + adN % 7 / 7) || bi.dq, nA) : aN.hb || !bF.a6D ? nA : (bi.dq = !0, n7))()
	}

	function adT() {
		var aC, fR, adU = bC.qe.aX5,
			gA = bC.qe.aX6,
			gC = bC.qe.aX7,
			gE = bC.qe.aX8,
			adV = bC.qe.aX9,
			adW = bC.qe.aXA;
		if (!(adK >= adW.length)) {
			if (adW = adW[adK], adV[adK]) {
				for (fR = adL + adW, aC = adL; aC < fR; aC++) bB.pi.qT(adU[aC], gA[aC], gC[aC], gE[aC]);
				adL += adW, adK++
			} else ++adM >= adW && (adK++, adM = 0);
			return __fx.replay.tick++, 1
		}
		aO.a2g("Replay file smaller than expected."), bF.a3W(!1), aE.a1N = 2
	}
	this.adB = 0, this.di = function() {
		adN = aI4 = adM = adL = adK = 0, __fx.replay.registerHooks({
			advance: () => adQ(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.dq = !0
			},
			isEnded: () => 2 === aE.a1N,
			getTickInterval: () => bi.aCn
		})
	}, this.ed = function() {
		var ab1;
		i.ed(), __fx.replay.frame() ? my() : bF.aA1() < 1.7 ? 0 === eG ? bi.eY >= eY && (ab1 = bi.aCn / bF.aA1(), eY += ab1 * Math.floor(1 + (bi.eY - eY) / ab1), 2 === aE.a1N || aN.hb || !bF.a6D ? my() : (adQ(), be.render()), eG++) : adR() :
			function() {
				var ab1;
				if (bi.eY >= eY)
					if (2 === aE.a1N || aN.hb || !bF.a6D) my(), eY = bi.eY;
					else {
						for (ab1 = bi.aCn / bF.aA1(), 16 < (bi.eY - eY) / ab1 && (eY = bi.eY - 16 * ab1); bi.eY >= eY && 2 !== aE.a1N;) eY += ab1, adQ();
						be.render()
					} adR()
			}(), n5(), bi.dq && (bi.dq = !1, zP())
	}, this.a1Y = function() {
		bC.qe.aXA.length - adK <= 2 || aO.a2g("Replay file larger than expected.")
	}
}

function adX() {
	var eG = 0,
		eY = bi.eY;
	this.adB = 0, this.ed = function() {
		i.ed(), aE.hp ? nA() : 0 === eG ? bi.eY >= eY && (eY += bi.aCn * Math.floor(1 + (bi.eY - eY) / bi.aCn), 2 === aE.a1N || aN.hb ? my() : (n0(), be.render()), eG++) : ((aN.hb ? nA : (bi.dq = !0, n7))(), eG = 0), n5(), bi.dq && (bi.dq = !1,
			zP())
	}
}

function dW() {
	this.a1X = null, this.dq = !1, this.eY = 0, this.aCn = 56;
	var adY = 0;

	function adZ() {
		bi.eY = adY = performance.now(), bi.a1X.ed(), window.requestAnimationFrame(adZ)
	}
	this.di = function() {
		this.a6A(), window.requestAnimationFrame(adZ), this.eY = performance.now()
	}, this.a62 = function() {
		aE.ha ? (this.a1X = new adJ, this.a1X.di()) : aE.l6 ? this.a1X = new adX : (this.a1X = new adC, this.a1X.di())
	}, this.a6A = function() {
		this.a1X = new adA, this.dq = !0
	}, this.ed = function() {
		this.a1X.adB++
	}, this.kj = function() {
		return this.a1X.adB
	}, this.aVK = function() {
		var eZ = performance.now();
		eZ < adY + 1e3 || (this.eY = eZ, this.a1X.ed())
	}
}

function cw() {
	var aHQ = 0,
		ada = !0;

	function adb(id) {
		id = [L(546), L(547), L(548), L(549)][id];
		aO.a80(id)
	}
	this.ed = function() {
		var eZ, a8P;
		bi.eY < aHQ || (aHQ = bi.eY + 3e3, aE.ha) || aE.l6 || bD.gn.hd(aE.fB) || (eZ = new Date, a8P = eZ.getUTCSeconds(), ada ? a8P < 43 && (ada = !1) : a8P < 43 || (aHQ += 52e3, ada = !0, (a8P = (eZ.getUTCMinutes() + 2) % 60) % 10 == 0 ? aE
			.l4 < 7 && adb(0) : a8P % 10 == 5 ? 7 !== aE.l4 && 10 !== aE.l4 || adb(1) : a8P % 10 == 7 ? 8 === aE.l4 && adb(2) : a8P % 10 == 2 && 9 === aE.l4 && adb(3)))
	}
}

function cq() {
	var nn, no, o0, o1, adc = 0,
		add = 0;

	function adf() {
		return Math.pow(Math.pow(o0 - nn, 2) + Math.pow(o1 - no, 2), .5)
	}

	function ade(e) {
		nn = i.l * e.touches[0].clientX, no = i.l * e.touches[0].clientY, o0 = i.l * e.touches[1].clientX, o1 = i.l * e.touches[1].clientY
	}
	this.a2y = function(e) {
		return 1 < e.touches.length ? (add = bi.eY, adc = 3, ade(e), aM.sa(), !0) : (adc = 0, !1)
	}, this.a2z = function(e) {
		var aJx, ik, il;
		return 0 !== aE.a1N && 1 < e.touches.length && (adc = Math.max(adc - 1, 0), aI.o5() && (aJx = adf(), ade(e), e = adf(), ik = Math.floor((nn + o0) / 2), il = Math.floor((no + o1) / 2), aT.aAS(ik, il, Math.max(.125, e) / Math.max(.125,
			aJx)), bi.dq = !0), !0)
	}, this.a3M = function() {
		var fY, fa;
		return !!(adc && (adc = 0, bi.eY < add + 500)) && (fY = (nn + o0) / 2, fa = (no + o1) / 2, aM.a3G(fY, fa), aM.click(fY, fa, !0) && (bi.dq = !0), !0)
	}
}

function d7() {
	this.size = 0, this.eG = 0, this.aD = null, this.di = function(aD) {
		this.eG = 0, this.aD = aD, this.size = aD.length
	}, this.v0 = function() {
		this.aD = null
	}, this.qS = function(size) {
		for (var ft = 0, aD = this.aD, o5 = this.eG + size - 1, aC = this.eG; aC <= o5; aC++) ft |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << o5 - aC;
		return this.eG += size, this.eG > 8 * this.size && console.error("Unwrapper Overflow"), ft
	}, this.aVk = function(size) {
		var fl = size >> 1;
		return (1 << fl) * this.qS(size - fl) + this.qS(fl)
	}, this.aVl = function(adg) {
		return this.size === bG.aVj(adg)
	}, this.aXN = function(yD, adh, adi) {
		var gu = this.qS(yD);
		if (!gu) return null;
		for (var yD = Math.max(gu, adi), h = new(adh <= 8 ? Uint8Array : adh <= 16 ? Uint16Array : Uint32Array)(yD), aC = 0; aC < gu; aC++) h[aC] = this.qS(adh);
		adi = h[gu - 1];
		return adi && h.fill(adi, gu), h
	}, this.aXO = function(yD, adj, adi) {
		var gu = this.qS(yD);
		if (!gu) return null;
		for (var yD = Math.max(gu, adi), h = new Array(yD), aC = 0; aC < gu; aC++) h[aC] = this.aXL(adj);
		return h.fill(h[gu - 1], gu), h
	}, this.aXL = function(yD) {
		return bJ.xK.xO(this.qS(yD))
	}, this.aXM = function() {
		var r1 = bI.td.te(bI.td.tf(this.qS(30))),
			r1 = bD.sJ.a5e(r1, "_", "/");
		r1 = bD.sJ.a5e(r1, "-", "+");
		for (var adk = "";
			(r1.length + adk.length) % 4;) adk += "=";
		r1 = "data:image/png;base64," + r1 + adk;
		var aJZ = new Image;
		aJZ.onload = function() {
			bC.aKW.aKX(aJZ), aJZ.onload = null, aJZ = null
		}, aJZ.src = r1
	}
}

function dQ() {
	this.aYP = 0, this.aYQ = 0, this.aYL = 0, this.aYM = 0, this.aYN = 0, this.aYO = 0, this.aDO = [0, 0, 0, 0], this.o4 = function() {
		this.aYP = aT.zR(), this.aYQ = aT.zS(), this.aYL = -this.aYP, this.aYM = -this.aYQ, this.aYN = i.j / ic, this.aYO = i.k / ic, this.aDO[0] = Math.floor(this.aYL), this.aDO[1] = Math.floor(this.aYM), this.aDO[2] = Math.floor(this.aDO[0] +
			this.aYN + 1), this.aDO[3] = Math.floor(this.aDO[1] + this.aYO + 1), be.aDM = !0
	}
}

function cr() {
	var a96, nZ;
	this.di = function() {
		a96 = 1, nZ = 0
	}, this.ed = function() {
		0 < a96 && (nZ = 0 === nZ ? bi.eY + 16 : nZ, a96 = (a96 -= .001 * (bi.eY - nZ)) < 0 ? 0 : a96, nZ = bi.eY, bi.dq = !0)
	}, this.vv = function() {
		0 < a96 && (vw.fillStyle = "rgba(0,0,0," + a96 + ")", vw.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eG = 0, this.aD = null, this.di = function(aD) {
		this.eG = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(adg) {
		return this.di(new Uint8Array(this.aVj(adg))), this.aD
	}, this.v0 = function() {
		this.aD = null
	}, this.a9 = function(size, a8U) {
		for (var aD = this.aD, o5 = this.eG + size - 1, aC = this.eG; aC <= o5; aC++) aD[aC >> 3] |= (a8U >> o5 - aC & 1) << 7 - (7 & aC);
		this.eG += size, this.eG > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aVi = function(size, a8U) {
		var fl = size >> 1,
			fU = 1 << fl;
		this.a9(size - fl, bO.fs(a8U, fU)), this.a9(fl, a8U % fU)
	}, this.adn = function(size) {
		for (var aD = this.aD, o5 = this.eG + size, aC = this.eG; aC < o5; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aVj = function(adg) {
		return adg + 7 >> 3
	}, this.ado = function(h, k2, o5, adp) {
		for (var aC = k2; aC < o5; aC++) this.a9(adp, h[aC])
	}
}

function d6() {
	this.di = function() {
		this.h = [], this.eG = 0
	}, this.aW6 = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(adq, value) {
		for (var h = this.h, o5 = this.eG + adq - 1, adr = 1 + (o5 >> 3); h.length < adr;) h.push(0);
		for (var aC = this.eG; aC <= o5; aC++) h[aC >> 3] |= (value >> o5 - aC & 1) << 7 - (7 & aC);
		this.eG += adq
	}, this.dp = function(h, yD, adh) {
		var ads = bD.rS.a48(h);
		this.a9(yD, ads);
		for (var aC = 0; aC < ads; aC++) this.a9(adh, h[aC])
	}, this.aXf = function(h, yD, adj) {
		var ads = bD.rS.a48(h);
		this.a9(yD, ads);
		for (var aC = 0; aC < ads; aC++) this.aXd(h[aC], adj)
	}, this.aXd = function(r1, yD) {
		var fR = r1.length;
		this.a9(yD, fR);
		for (var aC = 0; aC < fR; aC++) this.a9(16, r1.charCodeAt(aC))
	}, this.aXe = function(a4E) {
		var adt = (a4E = a4E.toDataURL()).split(",");
		if (adt.length < 2) console.log("error 266");
		else {
			a4E = bD.sJ.a5e(a4E = adt[adt.length - 1], "/", "_"), a4E = bD.sJ.a5e(a4E, "\\+", "-");
			var a4E = bD.sJ.a5e(a4E, "=", ""),
				xX = bJ.td.xU(a4E),
				fR = xX.length;
			this.a9(30, fR);
			for (var aC = 0; aC < fR; aC++) this.a9(6, xX[aC])
		}
	}
}
a(), self.aiCommand746 = function(ft) {
	0 === ft ? bw() : 1 !== ft || !a1 || 1 !== a1.id || a1.e1 < 14 || bM.fu()
}, setTimeout(bw, 1e4), window.onload = function() {
	bw()
};