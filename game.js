var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, c0, gY, gZ, ga, gb, gc, gd, ge, gf, gg,
	gh, gi, gj, gk, ix, jN, jO, aCe, mf, kp, a5w, z2, a2Z, aGp, a9D, a9E, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em", "50%",
		"0.5em", "email", "click", "Data", " / ", "territorial.io", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "undefined", "pointer", "middle", "fixed", "break-word",
		"bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "function", "button", "Value", "Enter", "20%", "1.5em", "0.0em 0.9em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)",
		"string", "round", "rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseover", "mouseout", "mouseleave", "left", "keydown", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Redacted ", "Battle Royale",
		"<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", " voted with ", "  • ", "   Gold: ", "✅ OK", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui", "style", "right",
		"rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "repeat(", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mousemove", "long", "logo", "loading", "italic ",
		"https://territorial.io/", "https://", "grid", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "block", "battleRoyale", "aria-pressed", "arena", "account",
		"accept", "_blank", "^[0-9]+$", "[Redacted Message]", "Seed", "Report", "Reload", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1px 1px 0 lightgray",
		"1px -1px 0 lightgray,", "1.3em", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)",
		", 1fr)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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

function c1(c2) {
	m && !c2 || (c4(), bO = new c5, bN = new c6, bD = new c7, bE = new c8, aE = new c9, bA = new cA, bI = new cB, bJ = new cC, aF = new cD, aG = new cE, aH = new cF, aI = new cG, aJ = new cH, aK = new cI, aL = new cJ, aM = new cK, aN = new cL, aO =
		new cM, aP = new cN, aQ = new cO, aR = new cP, aS = new cQ, aT = new cR, aU = new cS, aV = new cT, aW = new cU, aX = new cV, aY = new cW, aZ = new cX, aa = new cY, ab = new cZ, ac = new ca, ad = new cb, al = new cc, am = new cd, ao =
		new ce, an = new cf, ae = new cg, af = new ch, ai = new ci, ag = new cj, ah = new ck, aj = new cl, b0 = new cm, ak = new cn, aq = new co, ar = new cp, at = new cq, b1 = new cr, az = new cs, ap = new ct, au = new cu, av = new cv, aw =
		new cw, i = new cx, ax = new cy, ay = new cz, b2 = new d0, b3 = new d1, b4 = new d2, b5 = new d3, b6 = new d4, b7 = new d5, b8 = new d6, b9 = new d7, bB = new d8, bC = new d9, bF = new dA, bG = new a7, bH = new dB, bK = new dC, bL =
		new dD, bM = new dE, bP = new dF, bQ = new dG, bR = new dH, bS = new dI, bT = new dJ, bU = new dK, bV = new dL, bW = new dM, u = new dN, bX = new dO, a1 = new dP, m = new dQ, bl = new dR, bm = new dS, bj = new dT, bk = new dU, bd =
		new dV, be = new dW, bY = new dX, bZ = new dY, bg = new dZ, bh = new da, bi = new db, bn = new dc, bf = new dd, p = new de, bo = new df, bp = new dg, bq = new dh, bs = new di, bt = new dj, bu = new dk, bv = new dl, bw = new dm, bx =
		new dn, by = new dp, bz = new dq, c0 = new dr, m.dt(), a1.dt(), i.du(), bm.dt(), bA.dt(), bA.dv(), (ba = new dw).dt(), bD.dt(), bY.dt(), b1.dt(), bI.dt(), bJ.dt(), bV.dt(), u.dt(), bb = new dx, i.dt(), bi.dt(), bf.dt(), bZ.dt(), bc =
		new dy, az.dt(), af.dz(), bX.dt(), aq.dt(), ab.dt(), aU.dt(), aj.dt(), bM.dt(), ac.dt(), bi.e0 = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.e1() || a1.a2.e2(), i.e3(), m.n = 1)
}

function dQ() {
	this.e4 = 2, this.e5 = 1773, this.e6 = 0;
	this.rVersion = 26, this.eA = "14 Nov 2026", this.eB = 0, this.dt = function() {
		this.o = "2.17.12", this.eA = this.eA + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eD = 0 <= this.hostname.indexOf("github.io"), this.eE = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eG = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.eD)
	}, this.n = 0
}

function eH() {
	var eI = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eJ = [100, 60, 30, 15, 6, 1],
		eK = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eL = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eN = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eO = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eP = function(id, eQ, eR) {
		eQ = this.eS(eQ);
		return +(eK[eQ][id] > eR)
	}, this.eS = function(eQ) {
		for (var aC = 0; aC < eJ.length; aC++)
			if (eJ[aC] <= eQ) return aC;
		return eJ.length
	}, this.eT = function(eQ) {
		return eI[this.eS(eQ)]
	}, this.eU = function(id, eV) {
		return eL[id].replace(new RegExp("x", "g"), eV)
	}, this.eW = function(id, eV) {
		return eN[id].replace(new RegExp("x", "g"), eV)
	}, this.eX = function(id, eY) {
		return this.eO[5][id]
	}
}

function dO() {
	this.eZ = new ea, this.eb = new ec, this.turnstile = new ed, this.dt = function() {
		a1.a2.ee(), this.turnstile.dt()
	}, this.ef = function() {
		return bm.buffer.data[160].value
	}
}

function ea() {
	var eg = 12e3;
	this.show = function(eh) {
		return !eh && !bX.ef() && (0 === a1.id ? bX.eb.show() : !(bi.ei < eg) && (eh = 1 === a1.id ? 72e4 : 108e4, eg = bi.ei + eh, 2 === m.e4) && a1.a2.ek(Math.floor(eh)))
	}
}

function ec() {
	var el = null,
		eg = 2e4,
		em = 0;
	this.en = function() {
		bi.ei < eg || (eg = bi.ei + 1e4, 0 !== a1.id) || el || bX.ef() || (b1.z.eo(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.ep.eq(5) : eg = bi.ei + 1e3)
	}, this.er = function(es) {
		el = es
	}, this.show = function() {
		return !(!el || bi.ei < em) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (em = bi.ei + 6e4, (new et).show(el.eu, el.colors, el.id), !(el = null)))
	}
}

function ed() {
	this.ev = 0;
	var ey, ew = null,
		ex = 0,
		ez = "",
		f0 = 0,
		f1 = null,
		f2 = -1,
		f3 = -1,
		f4 = 0;

	function fE() {
		if (null !== f1 && null !== ew) {
			ex = 0;
			try {
				window.turnstile.remove(ew), f1.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			ew = f1 = null
		}
	}

	function f8(fI) {
		return "" !== ez && f0 + 1e3 * (300 - fI) > performance.now()
	}
	this.dt = function() {
		var f6;
		m.e6 || !m.aA && !m.eD ? (console.log("turnstile cannot be loaded"), this.ev = -1) : ((f6 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f6.async = !0, f6.onload =
			function() {
				bX.turnstile.ev = 1, console.log("turnstile onload"), bX.turnstile.f7()
			}, f6.onerror = function() {
				bX.turnstile.ev = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f6))
	}, this.f7 = function() {
		var ej;
		return !(1 !== this.ev || (window.turnstile ? ex ? (console.log("turnstile error 246"), 1) : f8(30) || (ej = performance.now()) < f4 && f2 === bJ.f9.fA(bm.buffer.data[105].value, 5) && f3 === aa.fB || (ez = "", ex = 1, ey = ej, (f1 =
			document.createElement("div")).style.position = "fixed", f1.style.left = "0", f1.style.top = "0", f1.style.zIndex = "100", document.body.appendChild(f1), console.log("turnstile render"), ew = window.turnstile.render(
			f1, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(fC) {
					console.log("turnstile success " + Math.floor(performance.now() - ey)), ez = fC, f0 = performance.now(), bX.turnstile.fD(), fE()
				},
				"expired-callback": function() {
					fE(), console.log("turnstile expired " + Math.floor(performance.now() - ey))
				},
				"error-callback": function() {
					fE(), console.log("turnstile callback error " + Math.floor(performance.now() - ey)), bX.turnstile.ev = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		fE()
	}, this.fD = function() {
		f8(8) && bq.fF && b1.z.eo(b1.z.fG) && (f4 = performance.now() + 36e5 - 1e4, f2 = bJ.f9.fA(bm.buffer.data[105].value, 5), f3 = aa.fB, b1.ep.fH(ez), ez = "", console.log("sendTokenToLobby success"))
	}
}

function cf() {
	this.fJ = new fK
}

function fK() {
	this.fL = function(fM) {
		var fP;
		return bV.fN(bV.fO) && aE.data.passableMountains && (fP = ad.fQ(fM), this.fR(aE.fS, fP) || this.fT(aE.fS, fP)) && 0 !== (fP = function(fo) {
			for (var fp = bP.fq(fo), fr = bP.fs(fo), max = Math.max(bV.ft, bV.fu) - 2, fv = max * max, fw = !1, fx = 0, fy = 0; fy < max; fy++) {
				var fz, fU = function(fp, fr, fy) {
					for (var aC = 0; aC <= fy; aC++)
						for (var g1 = -1; g1 < 2; g1 += 2)
							for (var g2 = -1; g2 < 2; g2 += 2)
								for (var es = 0; es < 2; es++) {
									var fM = function(fp, fr) {
										if (bP.g4(fp, fr)) {
											fp = bP.g5(fp, fr), fr = bP.fY(fp);
											if (ad.fd(fr) && ad.g6(fr)) return fp
										}
										return 0
									}(fp + es * g1 * aC + (1 - es) * g2 * fy, fr + es * g2 * fy + (1 - es) * g1 * aC);
									if (fM) return fM
								}
					return 0
				}(fp, fr, fy);
				fU && (fz = bP.g0(fp, fr, fU)) < fv && (fx = fU, fv = fz, fw || (fw = !0, max = Math.floor(Math.sqrt(fz)) + 1))
			}
			return fx
		}(bP.fW(fM))) && (fM = bP.fY(fP), ad.fZ(fM) || (fM = ad.fa(fM)) !== aE.fS && bw.fb(fM, aE.fS)) ? fP : 0
	}, this.fc = function(player, fU) {
		fU = bP.fY(fU);
		if (ad.fd(fU)) {
			if (ad.fZ(fU)) bR.fe[0] = aE.ff;
			else if (ad.fa(fU) !== bR.fe[0]) return !1;
			for (var fg = function(fM) {
					var fk = ad.fk,
						fg = [];
					loop: for (var fl = 3; 0 <= fl; fl--) {
						var fm = fM + fk[fl];
						if (ad.fn(fm)) {
							for (var id = ad.fQ(fm), aC = 0; aC < fg.length; aC++)
								if (id === fg[aC]) continue loop;
							bR.fj[fg.length] = fm, fg.push(id)
						}
					}
					return fg
				}(fU), fi = fg.length, aC = 0; aC < fi; aC++)
				if (this.fR(player, fg[aC]) || this.fT(player, fg[aC])) return bR.fj[0] = bR.fj[aC], !0
		}
		return !1
	}, this.fR = function(player, fP) {
		for (var g7 = ah.g7[player], fi = g7.length, g8 = Math.max(bO.g9(fi, 12), 1), fk = ad.fk, aC = 0; aC < fi; aC += g8)
			for (var fX = g7[aC], fl = 3; 0 <= fl; fl--) {
				var fm = fX + fk[fl];
				if (ad.fn(fm) && fP === ad.fQ(fm)) return !0
			}
		return !1
	}, this.fT = function(player, fP) {
		for (var g7 = ah.g7[player], fi = g7.length, fk = ad.fk, aC = 0; aC < fi; aC++)
			for (var fX = g7[aC], fl = 3; 0 <= fl; fl--) {
				var fm = fX + fk[fl];
				if (ad.fn(fm) && fP === ad.fQ(fm)) return !0
			}
		return !1
	}
}

function dH() {
	this.h = new Array(4), this.gC = new Uint16Array(2), this.gD = new Uint16Array(2), this.gE = new Int32Array(2), this.gF = new Uint32Array(2), this.gG = new Uint32Array(2), this.gH = new Uint8Array(4), this.gI = new Uint8Array(4), this.fj =
		new Uint32Array(4), this.gJ = new Uint32Array(5), this.fe = new Uint32Array(8), this.gK = new Uint32Array(8), this.gL = new Uint16Array(16), this.gM = new Uint16Array(512), this.gN = new Uint16Array(512), this.gO = new Uint16Array(512), this
		.gP = new Uint16Array(0), this.dt = function() {
			var fi = bV.ft * bV.fu;
			this.gP.length !== fi && (this.gP = new Uint16Array(fi))
		}, this.gQ = function(h, gR) {
			return h[0] = gR, h
		}, this.gS = function(h, gR, gT) {
			return h[0] = gR, h[1] = gT, h
		}, this.gU = function(h, gR, gT, gV) {
			return h[0] = gR, h[1] = gT, h[2] = gV, h
		}, this.gW = function(h, gR, gT, gV, gX) {
			return h[0] = gR, h[1] = gT, h[2] = gV, h[3] = gX, h
		}
}

function gl() {
	ge = 0, gf = 2048, gg = new Uint32Array(4 * gf), gh = 0, gi = new Uint32Array(gf), gj = new Uint8Array(bV.ft * bV.fu)
}

function gm(player) {
	gZ = player, gk = !1, gn(), go();
	for (var aC = ae.gp(gZ) - 1; 0 <= aC; aC--) gY = aC, gq();
	gk && gr()
}

function gr() {
	bw.gs(), bw.gt()
}

function gq() {
	gd = ae.gu(gZ, gY), ga = ae.gv(gZ, gY), gb = ae.gw(gZ, gY), gx(), (0 !== ge && (gz(), h0()) ? h1 : gy)()
}

function h0() {
	if (!((gc = bO.g9(ga, ge)) > aE.h2)) {
		if (!gb) return !1;
		var h3 = ge * (1 + aE.h2);
		ga += bD.h4.h5(gZ, h3 - ga), gc = bO.g9(ga, ge)
	}
	return !0
}

function gz() {
	for (var aC = ge - 1; 0 <= aC; aC--) gj[bO.g9(gg[aC], 4)] = 0
}

function gy() {
	1 === ae.gp(gZ) && aG.h6(gZ);
	var ej = bD.h4.h7(gZ, ga);
	bg.h8(gZ, ga - ej, 12), ae.h9(gZ, gY)
}

function gn() {
	for (var player = gZ, hA = ah.hA, fi = Math.min(hA[player].length, gf), hB = 0, hC = gi, aC = fi - 1; 0 <= aC; aC--) hC[hB++] = hA[player][aC];
	gh = hB
}

function go() {
	for (var aC = ah.hA[gZ].length - 1; 0 <= aC; aC--) ad.fd(ah.hA[gZ][aC]) && ad.hD(ah.hA[gZ][aC], gZ);
	ah.hA[gZ] = []
}

function gx() {
	ge = 0, (gd === aE.ff ? hE : hF)()
}

function hF() {
	for (var hG, hH, aC, fk = ad.fk, fl = 3; 0 <= fl; fl--)
		for (aC = gh - 1; 0 <= aC; aC--) hG = gi[aC] + fk[fl], hH = bO.g9(hG, 4), 0 === gj[hH] && ad.hI(hG) && ad.fa(hG) === gd && (gj[hH] = 1, gg[ge++] = hG)
}

function hE() {
	for (var hG, hH, aC, fk = ad.fk, fl = 3; 0 <= fl; fl--)
		for (aC = gh - 1; 0 <= aC; aC--) hG = gi[aC] + fk[fl], hH = bO.g9(hG, 4), 0 === gj[hH] && ad.fZ(hG) && (gj[hH] = 1, gg[ge++] = hG)
}

function h1() {
	hJ() ? (hK(), gd !== aE.ff && hL()) : gy()
}

function hL() {
	bw.hM(), bw.hN(ah.hO[gd]), bw.hN(ah.hP[gd]), bV.fN(bV.fO) && bw.hN(ah.g7[gd]), bw.hQ(ah.hA[gd]), bw.hR(ah.hP[gd]), bw.hR(ah.g7[gd]), bw.hS(), bw.hT()
}

function hK() {
	gk = !0, ae.hU(gZ, gY, ga), ae.hV(gZ, gY), ah.hW[gZ] += ge, bw.hX(), hY()
}

function hJ() {
	return (gd === aE.ff ? hZ : ha)()
}

function ha() {
	var hb = ge * aE.h2,
		hc = hd(),
		he = hf(),
		hc = hb + 2 * hc + he,
		hh = gc * ge;
	return hc < hh ? (ga -= hc, bg.h8(gZ, hc, 13), hi(hc - hb, he), !0) : gb && 0 === he ? (ga -= hh, hh += bD.h4.h5(gZ, hc - hh + 1), bg.h8(gZ, hh, 13), hi(hh - hb, 0), !0) : (ga -= hh, bg.h8(gZ, hh, 13), hi(hh - hb, he), !1)
}

function hi(hh, he) {
	if (0 < he) {
		if (hh <= he) return bg.h8(gd, hh, 13), void ae.hj(gd, gZ, he - hh);
		ae.hj(gd, gZ, 0), hh -= he
	}
	hh = bO.g9(hh, 2), hh = Math.min(ah.hk[gd], hh), bg.h8(gd, hh, 13), ah.hk[gd] -= hh
}

function hf() {
	return ae.hl(gd, gZ)
}

function hd() {
	return bO.g9(ge * ah.hk[gd], 1 + bO.g9(10 * ah.hW[gd], 16))
}

function hZ() {
	var hm = ge * aE.h2;
	return ga -= hm, bg.h8(gZ, hm, 13), !0
}

function hY() {
	for (var aC = ge - 1; 0 <= aC; aC--) ah.hA[gZ].push(gg[aC]), ah.hO[gZ].push(gg[aC]), ad.hD(gg[aC], gZ)
}

function dM() {
	var hn = 0,
		ho = 0;
	this.hp = function(fp, fr) {
		hn = fp, ho = fr
	}, this.hq = function(code) {
		var hy, i0, fU;
		aE.hr || aE.hs || aN.ht || (bD.h4.hu(0) || bD.h4.hu(1)) && bD.h4.hv(aE.fS) && (aS.hw(hn, ho) ? aS.hx = !1 : aQ.hw(hn, ho) || (hy = bP.hz(hn), i0 = bP.i1(ho), fU = bP.g5(hy, i0), bP.i2(hy, i0) && (0 === code ? function(fU) {
			var i6, fM, fX;
			aE.i7 ? -1 !== (i6 = bv.i8(fU)) && bB.i9.iA(fU) : (fM = bP.fY(fU), ad.fn(fM) ? (i6 = an.fJ.fL(fM)) && (fX = bP.fY(i6), fX = ad.fZ(fX) ? aE.ff : ad.fa(fX), bB.i9.iC(aS.iD(), i6, fX)) : (i6 = bv.iE(fU)) < 0 || (fM = bP
				.fY(i6), ad.fZ(fM) ? bw.iF(aE.fS) ? bB.i9.iG(aS.iD(), aE.ff) : ae.gp(aE.fS) && b2.iH(aE.ff, aS.iD()) : (fX = ad.fa(fM), bw.fb(fX, aE.fS) && (bw.iI(aE.fS, fX) ? bB.i9.iG(aS.iD(), fX) : ae.gp(aE.fS) && b2.iH(
					fX, aS.iD())))))
		}(fU) : 1 === code ? function(fU) {
			bQ.iJ.iK(aE.fS, fU) && bB.i9.iL(aS.iD(), bR.gK[7])
		}(fU) : 2 === code && function(fU) {
			bQ.iM.iN(aE.fS, fU) && bB.i9.iO(aS.iD())
		}(fU))))
	}, this.iP = function() {
		if (!(aE.hr || aE.hs || aN.ht) && bD.h4.hu(1)) {
			var hG = aE.fS;
			if (bD.h4.hv(hG)) {
				var fi = ae.gp(hG);
				if (fi < 1) ! function() {
					var hG = aE.fS;
					if (bw.iF(hG)) bB.i9.iG(aS.iD(), aE.ff);
					else
						for (var fk = ad.fk, hO = ah.hO, fi = hO[hG].length, iZ = Math.floor(Math.random() * fi), aC = 0; aC < fi; aC++)
							for (var ia = 3; 0 <= ia; ia--) {
								var ib = hO[hG][(aC + iZ) % fi] + fk[ia];
								if (ad.hI(ib)) {
									ib = ad.fa(ib);
									if (ib !== hG && (!aE.ie || bw.fb(hG, ib))) return bB.i9.iG(aS.iD(), ib)
								}
							}
				}();
				else {
					for (var iR = 0, iS = ae.gv(hG, 0), aC = 1; aC < fi; aC++) {
						var iT = ae.gv(hG, aC);
						iT < iS && (iS = iT, iR = aC)
					}
					bB.i9.iG(aS.iD(), ae.gu(hG, iR))
				}
			}
		}
	}, this.iU = function() {
		if (!(aE.hr || aE.hs || aN.ht) && bD.h4.hv(aE.fS) && bD.h4.hu(1)) return ax.iV ? ax.iW(aE.fS) ? void bB.i9.iX(1) : void 0 : void(ax.iY(aE.fS) && bB.i9.iU())
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
		var aC, eQ, fl = ik.data;
		for (aC = fl.length - 4; 0 <= aC; aC -= 4)
			if (eQ = fl[aC], ij <= eQ) return Math.floor(aC / (4 * ih));
		return -1
	}(io.getImageData(0, 0, ih, ih))) && (im = (canvas - .5 * ih + .1 * size) / size), Math.max(im, 0)
}

function dF() {
	this.iq = new Int16Array(4), this.ir = new Int16Array(4), this.is = null, this.dt = function() {
		var aC;
		for (this.iq[0] = -bV.ft, this.iq[1] = 1, this.iq[2] = bV.ft, this.iq[3] = -1, this.is = new Int16Array([-bV.ft, 1 - bV.ft, 1, bV.ft + 1, bV.ft, bV.ft - 1, -1, -bV.ft - 1]), aC = 0; aC < 4; aC++) this.ir[aC] = 4 * this.iq[aC]
	}, this.it = function() {
		return bO.iu(Math.floor(.15 * (1 + .25 * a1.a2.iv()) * i.iw / ix), 4, 128)
	}, this.iy = function(fM, id) {
		for (var iz = this.ir, aC = 0; aC < 4; aC++) {
			var fX = fM + iz[aC];
			if (ad.j0(fX) && ad.fQ(fX) === id) return !0
		}
		return !1
	}, this.j1 = function(player, fM) {
		return !ad.fZ(fM) && player === ad.fa(fM)
	}, this.g0 = function(hy, i0, fU) {
		return (hy -= this.fq(fU)) * hy + (i0 -= this.fs(fU)) * i0
	}, this.j2 = function(j3, j4, j5) {
		j3 = this.j7(j3) - this.j8(j5), j4 = this.jA(j4) - this.jB(j5);
		return Math.sqrt(j3 * j3 + j4 * j4)
	}, this.jC = function(jD, jE) {
		var j6 = this.fq(jD) - this.fq(jE),
			jD = this.fs(jD) - this.fs(jE);
		return ~~Math.sqrt(j6 * j6 + jD * jD + .5)
	}, this.jF = function(jD, jE) {
		var j6 = this.fq(jD) - this.fq(jE),
			jD = this.fs(jD) - this.fs(jE);
		return j6 * j6 + jD * jD
	}, this.jG = function(jH, jI, jJ, jK) {
		return (jH -= jJ) * jH + (jI -= jK) * jI
	}, this.jL = function(hG, jM) {
		return bO.g9(jM * ah.hk[hG], 1e3)
	}, this.j7 = function(j3) {
		return 16 * (j3 + jN) / ix
	}, this.jA = function(j4) {
		return 16 * (j4 + jO) / ix
	}, this.jP = function(fl) {
		return 16 * fl / ix
	}, this.hz = function(j3) {
		return Math.floor((j3 + jN) / ix)
	}, this.i1 = function(j4) {
		return Math.floor((j4 + jO) / ix)
	}, this.i2 = function(hy, i0) {
		return 1 <= hy && 1 <= i0 && hy < bV.ft - 1 && i0 < bV.fu - 1
	}, this.fq = function(fU) {
		return fU % bV.ft
	}, this.fs = function(fU) {
		return bO.g9(fU, bV.ft)
	}, this.g5 = function(hy, i0) {
		return i0 * bV.ft + hy
	}, this.jQ = function(hy, i0) {
		return 4 * this.g5(hy, i0)
	}, this.jR = function(fU) {
		return this.g4(this.fq(fU), this.fs(fU))
	}, this.g4 = function(hy, i0) {
		return 0 < hy && hy < bV.ft - 1 && 0 < i0 && i0 < bV.fu - 1
	}, this.fY = function(fU) {
		return fU << 2
	}, this.fW = function(fM) {
		return fM >> 2
	}, this.jS = function(fU) {
		return bV.ft * this.fs(fU) * 256 + (this.fq(fU) << 4)
	}, this.jT = function(fU) {
		return this.jS(fU) + 8 + (bV.ft << 7)
	}, this.jU = function(j5) {
		return bV.ft * (this.jB(j5) >> 4) + (this.j8(j5) >> 4)
	}, this.jV = function(j5) {
		j5 = this.jU(j5);
		return (this.fq(j5) >> 5) + bQ.jW.jX * (this.fs(j5) >> 5)
	}, this.j8 = function(j5) {
		return j5 % (bV.ft << 4)
	}, this.jB = function(j5) {
		return bO.g9(j5, bV.ft << 4)
	}, this.jY = function(fU, ia) {
		return fU + this.iq[ia]
	}, this.jZ = function(fM, ia) {
		return fM + this.ir[ia]
	}, this.ja = function(jD, jE) {
		var j6 = this.fq(jE) - this.fq(jD),
			jE = this.fs(jE) - this.fs(jD);
		return Math.abs(j6) >= Math.abs(jE) ? 1 + 2 * (j6 < 0) : 2 * (0 < jE)
	}, this.jb = function(player) {
		return this.g5(ah.jc[player] + ah.jd[player] >> 1, ah.je[player] + ah.jf[player] >> 1)
	}, this.jg = function(player) {
		return this.g5(az.jh(ah.jc[player], ah.jd[player]), az.jh(ah.je[player], ah.jf[player]))
	}
}

function ct() {
	this.ji = new jj, this.jk = new jl, this.jm = new jn, this.performance = new jo, this.jp = new jq, this.jr = new js, this.jt = new ju, this.jv = new jw, this.jx = new jy, this.dt = function() {
		this.ji.dt(), this.jm.dt(), this.performance.dt(), this.jp.dt(), this.jr.dt()
	}, this.en = function() {
		this.performance.en(), this.ji.en(), this.jm.jz()
	}
}

function jq() {
	var k0, k2 = new Uint16Array(8);

	function kA(size, player) {
		for (var aC = ah.hA[player].length - 1; size <= aC; aC--) ad.kG(ah.hA[player][aC], player)
	}
	this.dt = function() {
		k0 = 0
	}, this.k3 = function(player, k4) {
		return bR.fe[1] = ah.hA[player].length, bR.fe[0] === aE.ff ? ap.jp.k5(player) : this.k6(player, bR.fe[0]), (0 !== bR.fe[1] || 0 !== ah.hA[player].length) && !(!k4 && bR.fe[1] === ah.hA[player].length || (bR.fe[0] === aE.ff ? ah.k7[
			player]++ : ah.k8[player]++, 0))
	}, this.k9 = function(player) {
		kA(bR.fe[1], player), ae.er(player, bR.gF[0], bR.fe[0]), aG.kB(player, !1)
	}, this.kC = function(player, kD, fi, iS) {
		var kE = bO.g9(12 * ah.hk[player], 1024);
		iS -= iS >= bO.g9(ah.hk[player], 2) ? kE : 0, kA(fi, player), ae.er(player, iS, kD), ah.hk[player] -= iS + kE, aG.kB(player, !1)
	}, this.k6 = function(player, kD) {
		for (var ia, fk = ad.fk, aC = ah.hO[player].length - 1; 0 <= aC; aC--)
			if (ad.kF(ah.hO[player][aC]))
				for (ia = 3; 0 <= ia; ia--)
					if (ad.hI(ah.hO[player][aC] + fk[ia]) && ad.fa(ah.hO[player][aC] + fk[ia]) === kD) {
						ah.hA[player].push(ah.hO[player][aC]);
						break
					}
	}, this.k5 = function(player) {
		for (var fk = ad.fk, aC = ah.hO[player].length - 1; 0 <= aC; aC--)
			if (ad.kF(ah.hO[player][aC]))
				for (var ia = 3; 0 <= ia; ia--)
					if (ad.fZ(ah.hO[player][aC] + fk[ia])) {
						ah.hA[player].push(ah.hO[player][aC]);
						break
					}
	}, this.kH = function(player, kI) {
		var aC, g1, ia, ic, fi = ah.hO[player].length,
			kJ = 256 <= fi ? 12 : 32 <= fi ? 6 : 1,
			kK = fi - 1 - az.kL(kJ),
			fk = ad.fk;
		k0 = 0;
		loop: for (aC = kK; 0 <= aC; aC -= kJ)
			for (ia = 3; 0 <= ia; ia--)
				if ((ic = ad.fZ(ah.hO[player][aC] + fk[ia]) ? aE.ff : ad.fa(ah.hO[player][aC] + fk[ia])) === aE.ff || ad.hI(ah.hO[player][aC] + fk[ia]) && ic !== player && (kI || bw.fb(player, ic))) {
					for (g1 = k0 - 1; 0 <= g1; g1--)
						if (k2[g1] === ic) continue loop;
					if (k2[k0] = ic, 8 <= ++k0) return !0
				}
		return 0 < k0
	}, this.kM = function(player, kI) {
		var aC, ia, ic, fk = ad.fk;
		for (k0 = 0, aC = ah.hO[player].length - 1; 0 <= aC; aC--)
			for (ia = 3; 0 <= ia; ia--)
				if ((ic = ad.fZ(ah.hO[player][aC] + fk[ia]) ? aE.ff : ad.fa(ah.hO[player][aC] + fk[ia])) === aE.ff || ad.hI(ah.hO[player][aC] + fk[ia]) && ic !== player && (kI || bw.fb(player, ic))) return k2[k0++] = ic, !0;
		return !1
	}, this.kN = function() {
		for (var g2, aC = k0 - 1; 0 <= aC; aC--)
			if (k2[aC] === aE.ff) {
				for (k0--, g2 = aC; g2 < k0; g2++) k2[g2] = k2[g2 + 1];
				return !0
			} return !1
	}, this.kO = function(player) {
		for (var g2, aC = k0 - 1; 0 <= aC; aC--)
			if (ae.kP(player, k2[aC]))
				for (k0--, g2 = aC; g2 < k0; g2++) k2[g2] = k2[g2 + 1];
		return 0 === k0
	}, this.kQ = function() {
		for (var aC = k0 - 1; 0 <= aC; aC--)
			if (bD.h4.kR(k2[aC])) return !0;
		return !1
	}, this.kS = function() {
		for (var aC = k0 - 1; 0 <= aC; aC--) bD.h4.kR(k2[aC]) || (k2[aC] = k2[--k0]);
		return 0 < k0
	}, this.kT = function(player) {
		for (var g2, kU = k2[0], kV = ah.hk[kU] + ae.hl(kU, player), aC = k0 - 1; 1 <= aC; aC--)(g2 = ah.hk[k2[aC]] + ae.hl(k2[aC], player)) < kV && (kU = k2[aC], kV = g2);
		return kU
	}, this.kW = function(player) {
		var k, kX = k2[0];
		if (1 !== k0)
			for (var kY = bO.g9(ah.jd[player] + ah.jc[player], 2), kZ = bO.g9(ah.jf[player] + ah.je[player], 2), fy = ka(kY - bO.g9(ah.jd[kX] + ah.jc[kX], 2)) + ka(kZ - bO.g9(ah.jf[kX] + ah.je[kX], 2)), aC = k0 - 1; 1 <= aC; aC--)(k = ka(kY - bO
				.g9(ah.jd[k2[aC]] + ah.jc[k2[aC]], 2)) + ka(kZ - bO.g9(ah.jf[k2[aC]] + ah.je[k2[aC]], 2))) < fy && (fy = k, kX = k2[aC]);
		return kX
	}, this.kb = function() {
		for (var kc = k2, kd = kc[0], hk = ah.hk, ke = hk[kd], aC = k0 - 1; 1 <= aC; aC--) {
			var hG = kc[aC],
				g2 = hk[hG];
			ke < g2 && (kd = hG, ke = g2)
		}
		return kd
	}, this.kf = function() {
		return k2[az.kL(k0)]
	}
}

function js() {
	function kv(player, kD, kl) {
		3 <= kl && 2142 < bi.l1() && (kD === aE.ff || ah.hk[kD] < bO.g9(ah.hk[player], 20)) && aF.kq(player, 20)
	}

	function ky(player, iS, kD, kl) {
		3 <= kl && kl < 6 && bO.g9(ah.hk[player], 8) > ah.hk[kD] && (iS = Math.max(bO.g9(11 * ah.hk[kD], 5), bO.g9(ah.hk[player], 10)));
		kl = ah.hA[player].length;
		ap.jp.k6(player, kD), ap.jp.kC(player, kD, kl, iS)
	}

	function ku(player, iS) {
		var kD = aE.ff,
			fi = ah.hA[player].length;
		ap.jp.k5(player), ah.hA[player].length !== fi && ap.jp.kC(player, kD, fi, iS)
	}
	this.kg = new Uint8Array(aE.ff), this.dt = function() {
		this.kg.fill(0)
	}, this.kh = function(player, iS) {
		var kj, kl, km, kn;
		ae.ki(player) && (kj = af.kk(player), 3 <= (kl = aF.iS[player]) && kl < 6 && (iS = Math.max(ah.hk[player] - kj, iS)), km = ah.hP[player].length, kn = ah.hO[player].length, 30 * ah.hW[player] > aE.ko && kp[player] < 10 && 100 * kn <= km &&
			aF.kq(player, 10), aE.ie ? function(player, iS, kl, kj) {
				var kD;
				if (ap.jp.kH(player, !1) || ap.jp.kM(player, !1)) {
					if (!ap.jp.kO(player))
						if (ap.jp.kN()) ku(player, iS), kv(player, aE.ff, kl);
						else {
							if (az.kw(aF.kx[kl])) kD = ap.jp.kT(player);
							else {
								if (ap.jp.kQ() && az.kw(aF.kz[kl]) && ap.jp.kS(), 6 === kl) return ky(player, iS, ap.jp.kf(), kl);
								kD = ap.jp.kW(player)
							}
							ky(player, iS, kD, kl), kv(player, kD, kl)
						}
				} else bQ.ks.en(player) || ap.jt.en(player) || ! function(player, iS, kl, kj) {
					var kg = ap.jr.kg;
					kg[player] = 0;
					var l2 = bj.fg[player];
					if (0 !== l2) {
						var l3 = ah.hk[player],
							hW = ah.hW;
						if (player < aE.l4 && (iS = l3), !(l3 < hW[player] || 5 === kl && l3 < kj || 4 === kl && l3 < bO.g9(kj, 2))) {
							bk.l5(l2);
							for (var fi = bR.gD[0], gM = bR.gM, aC = az.kL(fi), g2 = 0; g2 < fi; g2++) {
								var es = gM[(g2 + aC) % fi];
								if (kg[es]) return bB.l6.l7(player, es, iS)
							}
							var l8 = bQ.z.l8;
							for (g2 = 0; g2 < fi; g2++)
								if (es = gM[(g2 + aC) % fi], l8[es] && es !== player) return bB.l6.l7(player, es, iS)
						}
					}
				}(player, iS, kl, kj)
			}(player, iS, kl, kj) : (!kn || km && (km < kn && !az.kL(10) || 100 * kn <= km && az.kL(3) || !az.kL(8))) && bQ.ks.en(player) || function(player, iS, kl) {
				ap.jp.kH(player, !0) || ap.jp.kM(player, !0) ? ap.jp.kO(player) || (ap.jp.kN() ? ku(player, iS) : az.kw(aF.kx[kl]) ? ky(player, iS, ap.jp.kT(player), kl) : 5 === kl ? ky(player, iS, ap.jp.kb(), kl) : (ap.jp.kQ() && az.kw(aF
					.kz[kl]) && ap.jp.kS(), ky(player, iS, 6 === kl ? ap.jp.kf() : ap.jp.kW(player), kl))) : ap.jt.en(player)
			}(player, iS, kl))
	}
}

function cD() {
	var l9 = new Uint8Array(aE.ff),
		lA = new Uint16Array(aE.ff),
		lB = new Uint16Array(aE.ff),
		lC = new Uint8Array(aE.ff),
		lD = (this.iS = new Uint8Array(aE.ff), new Uint16Array(aE.ff)),
		lE = new Uint16Array(aE.ff);

	function lT(aC) {
		l9[aC] = 1 + bO.g9(lD[aC] * az.random(), 10 * az.value(100))
	}
	this.lF = null, this.kz = [97, 94, 70, 40, 20, 0, 100], this.lG = [500, 450, 400, 300, 80, 50, 100], this.kx = [0, 0, 5, 25, 50, 100, 0], this.lH = [60, 74, 112, 200, 256, 512, 512], this.lI = [1, 2, 3, 4, 6, 8, 1], this.lJ = [500, 450, 400, 300,
		80, 50, 100
	], this.lK = [100, 150, 250, 400, 600, 1e3, 100], this.du = function() {
		this.lF = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dt = function() {
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
					for (aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[ib = aC + lL] = aE.data.botDifficultyTeam[bj.lR[bj.fg[ib]]];
				else if (1 === aE.data.botDifficultyType) {
			var lS = this.lF.length;
			for (aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = aC % lS
		} else
			for (lS = aE.data.botDifficultyValue, aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = lS;
		else
			for (var lP = 8 === aE.lM ? 1 : 0, aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = lP;
		for (aC = 0; aC < lL; aC++) this.iS[aC] = 6;
		var fi = aE.ff;
		for (aC = 0; aC < fi; aC++) this.iS[aC] <= 2 ? (lC[aC] = 5, lD[aC] = lE[aC] = 1040, 0 === this.iS[aC] ? (lA[aC] = 980, lB[aC] = 980) : 1 === this.iS[aC] ? (lA[aC] = 980, lB[aC] = 920, lD[aC] = lE[aC] = 1100) : (lA[aC] = 825, lB[aC] =
			750)) : this.iS[aC] <= 4 ? (lC[aC] = 1 + az.kL(20), 3 === this.iS[aC] ? (lA[aC] = lB[aC] = 500, lD[aC] = lE[aC] = 1e3) : (lE[aC] = 250 + az.kL(1501), lD[aC] = 500 + az.kL(501), lA[aC] = 300 + az.kL(201), lB[aC] = 100 + az.kL(
			201))) : this.iS[aC] <= 5 ? (lD[aC] = 1e3, lE[aC] = 1e3, lC[aC] = 35 + az.kL(16), lA[aC] = 300 + az.kL(201), lB[aC] = 50 + az.kL(101)) : (lD[aC] = lE[aC] = 800, lC[aC] = 5, lA[aC] = 10, lB[aC] = 250), lT(aC)
	}, this.lN = function() {
		for (var fM = b0.lU, lL = aE.l4, aC = fM - 1; 0 <= aC; aC--) this.iS[aC + lL] = 0;
		for (var g2 = 0; g2 < 6; g2++) {
			for (aC = fM + b0.lV[g2] - 1; fM <= aC; aC--) this.iS[aC + lL] = g2;
			fM += b0.lV[g2]
		}
	}, this.kq = function(hG, value) {
		l9[hG] = Math.min(value, l9[hG])
	}, this.en = function(hG) {
		0 == --l9[hG] && ! function(hG) {
			(function(hG) {
				lD[hG] !== lE[hG] && (lD[hG] += lD[hG] < lE[hG] ? 3 : -3);
				lA[hG] !== lB[hG] && (lA[hG] += lA[hG] < lB[hG] ? lC[hG] : -lC[hG], lA[hG] = (Math.abs(lA[hG] - lB[hG]) <= lC[hG] ? lB : lA)[hG]);
				l9[hG] = bO.g9(lD[hG], 10)
			})(hG), ap.jr.kh(hG, bO.g9(lA[hG] * ah.hk[hG], 1e3))
		}(hG)
	}, this.lY = function(hG, hB) {
		lD[hG] = lE[hG] = hB
	}
}

function jn() {
	var lZ = new Uint16Array(aE.ff);

	function lo(player, lm) {
		for (var fi = bR.gD[0], gL = bR.gL, m0 = -1, m1 = aE.ff, aC = 0; aC < fi; aC++) {
			var fy, hG = gL[aC];
			bw.fb(player, hG) && (fy = bP.jF(lm, bP.jb(hG)), -1 === m0 || fy < m0) && (m0 = fy, m1 = hG)
		}
		return m1
	}

	function lq(ln, lm) {
		if (ln === aE.ff) return 0;
		var hP = ah.hP[ln],
			lz = hP.length;
		if (0 === lz) return 0;
		for (var fi = Math.min(lz, 10), m1 = 0, m0 = bP.jF(hP[m1] >> 2, lm), aC = 0; aC < fi; aC++) {
			var ib = az.kL(lz),
				fy = bP.jF(hP[ib] >> 2, lm);
			fy < m0 && (m0 = fy, m1 = ib)
		}
		return hP[m1] >> 2
	}

	function lv(player, lm, kD, m3) {
		var m4;
		(m3 === aE.ff || (m4 = bP.jb(kD), m3 = bP.jb(m3), bP.jF(lm, m4) < bP.jF(lm, m3))) && (lZ[player] = kD)
	}
	this.dt = function() {
		lZ.fill(aE.ff)
	}, this.jz = function() {
		if (bi.l1() % 109 == 9 && !(am.la < 20) && aE.ie && !(bk.lb() < bO.g9(8 * aE.ko, 10))) {
			var lc = bk.ld();
			if (bj.lR[lc]) {
				bk.le(lc);
				var fi = bR.gD[0];
				if (0 !== fi)
					for (var h = bR.gM, lf = am.lf, la = am.la, lg = lZ, ib = az.kL(fi), aC = 0; aC < la; aC++) {
						var iB = lf[aC],
							lh = h[ib];
						bD.h4.li(iB, lh) && 512 === lg[iB] && (lg[iB] = lh, ib = (ib + 1) % fi)
					}
			}
		}
	}, this.en = function(player) {
		var lm, lp, ln, lj = function(player) {
			var kD = lZ[player];
			if (kD !== aE.ff) {
				if (bD.h4.m2(kD) && ah.hP[kD]) return kD;
				lZ[player] = aE.ff
			}
			return aE.ff
		}(player);
		return function(player) {
			for (var ly = am.lf, lz = am.la, fi = Math.min(lz, lz < 17 && 5 === az.kL(20) ? 1 : 16), hH = az.kL(lz), gL = bR.gL, hP = ah.hP, hB = 0, aC = 0; aC < fi; aC++) {
				var hG = ly[(aC + hH) % lz];
				hG !== player && hP[hG].length && (gL[hB++] = hG)
			}
			bR.gD[0] = hB
		}(player), 0 !== bR.gD[0] && (0 < (lp = lq(ln = lo(player, lm = bP.jg(player)), lm)) && bQ.lr.ls(player, bQ.lt.lu(lp, lm)) ? (lv(player, lm, ln, lj), !0) : 0 < (ln = function(player, lm) {
			for (var fi = bR.gD[0], gL = bR.gL, lg = lZ, hH = 0, aC = 0; aC < fi; aC++) {
				var hG = gL[aC],
					hG = lg[hG];
				hG !== aE.ff && bD.h4.m2(hG) && player !== hG && bw.fb(player, hG) && (gL[hH++] = hG)
			}
			return 0 !== (bR.gD[0] = hH) ? lq(lo(player, lm), lm) : 0
		}(player, lm)) && bQ.lr.ls(player, bQ.lt.lu(ln, lm)) ? (lv(player, lm, ad.fa(ln << 2), lj), !0) : !!(0 < (lp = lq(lj, lm)) && bQ.lr.ls(player, bQ.lt.lu(lp, lm))))
	}
}

function ju() {
	function m8(player) {
		for (var g7 = ah.g7[player], fi = g7.length, g8 = Math.max(bO.g9(fi, 12), 1), fk = ad.fk, eQ = az.kL(fi), aC = 0; aC < fi; aC += g8)
			for (var fX = g7[(aC + eQ) % fi], fl = 3; 0 <= fl; fl--) {
				var fm = fX + fk[fl];
				if (ad.fn(fm)) return {
					fM: fm,
					id: ad.fQ(fm),
					hG: player
				}
			}
		return null
	}

	function mD(player, mF) {
		var iS = bD.h4.mG(player, aF.lJ[aF.iS[player]]);
		ah.hA[player].push(mF.fM), ae.er(player, iS, mF.hG), aG.kB(player, !0)
	}
	this.en = function(player) {
		return !!bV.fN(bV.fO) && !!aE.data.passableMountains && 0 !== ah.g7[player].length && function(player) {
			var m7 = m8(player);
			if (null === m7) return !1;
			! function(player) {
				for (var lf = am.lf, la = am.la, fi = Math.min(la, 12), hH = az.kL(la), gL = bR.gL, g7 = ah.g7, hB = 0, aC = 0; aC < fi; aC++) {
					var hG = lf[(aC + hH) % la];
					hG !== player && g7[hG].length && bw.fb(player, hG) && (gL[hB++] = hG)
				}
				bR.gD[0] = hB
			}(player);
			var mA = function(fP) {
				for (var fi = bR.gD[0], gL = bR.gL, aC = 0; aC < fi; aC++) {
					var mF = m8(gL[aC]);
					if (null !== mF && mF.id === fP) return mF
				}
				return null
			}(m7.id);
			return null !== mA ? (mD(player, mA), !0) : function(player, fP) {
				var fi = ap.ji.mE;
				if (0 !== fi)
					for (var fM = ap.ji.buffer[az.kL(fi)] << 2, fk = ad.fk, fl = az.kL(4);;) {
						if (fM += fk[fl], ad.fn(fM)) {
							if (ad.fQ(fM) === fP) return mD(player, {
								fM: fM,
								hG: aE.ff
							}), !0;
							break
						}
						if (!ad.fZ(fM)) break
					}
				return !1
			}(player, m7.id)
		}(player)
	}
}

function jl() {
	this.en = function(player) {
		return bQ.lr.ls(player, function(player) {
			var fi = ap.ji.mE;
			if (0 === fi) return -1;
			for (var lz = Math.min(fi, ap.performance.mI ? fi : 10), buffer = ap.ji.buffer, kK = bO.g9(az.random() * fi, az.value(100)), e = kK + lz, mJ = az.jh(ah.jc[player], ah.jd[player]), mK = az.jh(ah.je[player], ah.jf[player]),
					m1 = -1, fy = bP.jG(0, 0, bV.ft, bV.fu), aC = kK; aC < e; aC++) {
				var hH = aC % fi,
					mL = bP.g0(mJ, mK, buffer[hH]);
				mL < fy && (fy = mL, m1 = hH)
			}
			return -1 !== m1 ? function(fU, mJ, mK) {
				var hy = bP.fq(fU),
					i0 = bP.fs(fU),
					j6 = mJ - hy,
					j9 = mK - i0;
				Math.abs(j6) >= Math.abs(j9) ? (j9 = 0, j6 = Math.sign(j6)) : (j6 = 0, j9 = Math.sign(j9));
				j6 === j9 && (j6 = 1);
				for (;;) {
					if (hy += j6, i0 += j9, !bP.g4(hy, i0)) break;
					if (fU = bP.g5(hy, i0), ad.j0(bP.fY(fU))) return fU
				}
				return -1
			}(buffer[m1], mJ, mK) : -1
		}(player))
	}
}

function jw() {
	this.en = function(player) {
		var mN = function(player) {
			for (var mQ = bQ.mQ.mS(), fi = mQ.length, lz = Math.min(fi, 32), ib = az.kL(fi), aC = 0; aC < lz; aC++) {
				var mN = (aC + ib) % fi,
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
	this.mI = 0, this.dt = function() {
		this.mI = 0
	}, this.en = function() {
		if (!this.mI && bi.l1() % 30 == 7 && bD.h4.mb(90) && (ap.performance.mI = 1)) {
			if (aE.ie) {
				var lc = bk.ld();
				if (bj.lR[lc]) {
					bk.l5(lc);
					var h = bR.gM,
						fi = bR.gD[0];
					if (0 !== fi)
						for (var me = Math.min(100 + 10 * (fi - 1), 400), aC = 0; aC < fi; aC++) aF.lY(h[aC], me)
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
	this.mE = 0, this.buffer = new Uint32Array(512), this.dt = function() {
		mh = mg = 0, this.mE = 0, mk = 0
	}, this.en = function() {
		if (function() {
				var fi = ap.ji.mE;
				if (0 === fi) return 1;
				var buffer = ap.ji.buffer;
				if (bi.l1() % 35 == 6) {
					for (var aC = fi - 1; 0 <= aC; aC--) ad.fZ(buffer[aC] << 2) || (fi--, buffer[aC] = buffer[fi]);
					ap.ji.mE = fi
				}
				return fi < buffer.length
			}())
			if (mi <= mg) {
				var mo = ap.ji.mE;
				if (mo) {
					if (bi.l1() % 350 != 1) return;
					if (mk !== mo) return void(mk = mo);
					if (!bD.h4.kR(mf[0])) return
				} else if (bi.l1() % 12 != 8) return;
				bD.h4.mp() || ap.ji.dt()
			} else {
				var aC, j = bV.ft,
					mq = j - 2,
					mo = mq * (bV.fu - 2),
					mr = mi,
					buffer = ap.ji.buffer,
					lz = ap.ji.mE,
					ms = buffer.length,
					hH = Math.min(mh + mr * ((1 + 19 * ap.performance.mI) * mj), mo);
				for (aC = mh; aC < hH; aC += mr) {
					var fM = 4 * (aC % mq + (bO.g9(aC, mq) + 1) * j + 1);
					if (ad.fZ(fM) && (buffer[lz] = fM >> 2, ++lz === ms)) {
						aC += mr;
						break
					}
				}(mh = aC) >= mo && (mh = ++mg), ap.ji.mE = lz
			}
	}
}

function jy() {
	this.en = function() {
		if (bi.l1() % 51 == 45)
			for (var fi = bQ.z.mu, mv = bQ.z.mv, mw = bQ.z.mw, mx = bQ.z.mx, my = bQ.z.my, lK = aF.lK, iS = aF.iS, aC = 0; aC < fi; aC++) {
				var mP, player, n2, mz = mv[aC];
				mz % 64 == 6 || (mP = mw[aC], (player = bQ.lt.n0(mP[mP.length - 1])) < 0) || !bD.h4.li(player, my[aC] >> 3) || az.kL(1e3) >= lK[iS[player]] || ! function(n6, mP) {
					for (var fi = mP.length - 1, n7 = bQ.z.n8[n6], fy = 0, aC = n7 + 1; aC < fi; aC++) fy += bP.jC(mP[aC], mP[aC + 1]);
					return (fy += bP.jC(bP.jU(bQ.z.n9[n6]), mP[n7 + 1])) <= 60
				}(aC, mP) || (n2 = mx[aC], 64 <= mz && bQ.n3.n4(player, n2)) || function(player, mP, n2, n6, mz) {
					bQ.nA.nB(player) && bD.h4.nC(player, aF.lG[aF.iS[player]], 32, 0) && (bQ.z.mv[n6] = 64 + mz % 64, bQ.n3.er(n2, bQ.z.nD), bR.h[0] = bQ.mQ.mY(mP), bR.gK[1] = 6, bD.h4.nE(player), bQ.z.nF(player))
				}(player, mP, n2, aC, mz)
			}
	}
}

function nG() {
	bU.nH.nI(), aO.en(), ag.en(), aX.nJ(), b1.z.en()
}

function nK() {
	b2.en(), aH.en(), ao.en(), af.en(), b5.en(), aG.en(), ap.en(), bQ.z.en(), am.nL(), aW.en(), b0.en(), bY.en(), ag.en(), ag.nM(), aX.en(), bS.en(), aV.en(), aQ.en(), b9.nN(), aO.en(), b6.en(), aS.en(), ax.en(), bg.en(), bk.en(), b1.z.en(), b1.nO
		.en(), u.en(), bX.eb.en(), bC.en(), bi.en()
}

function nP() {
	aI.en(), aY.en(), aR.en(), aw.en(), bF.en(), b8.en(), b9.en(), ay.nQ()
}

function nR() {
	aW.nS(!1), aQ.nS(), aX.nS(!1), aV.nS(), aS.nS(), ax.nS(), ag.nS(!1), bk.nT()
}

function nU() {
	ag.nS(!1) && (bi.e0 = !0), b1.z.en()
}

function cE() {
	var nV, nW, nX;

	function nZ(nb) {
		for (var aC = nV - 1; 0 <= aC; aC--) 0 === nX[nW[aC]] && ah.hW[nW[aC]] >= nb && gm(nW[aC])
	}

	function nY(player) {
		var ej;
		64 === nX[player] ? nX[player] = 6 : (ej = ah.hW[player], nX[player] = ej < 1e3 ? 3 : ej < 1e4 ? 2 : ej < 6e4 ? 1 : 0)
	}
	this.dt = function() {
		nV = 0, nW = new Uint16Array(aE.ff), nX = new Uint8Array(aE.ff)
	}, this.en = function() {
		for (var aC = nV - 1; 0 <= aC; aC--) 64 === nX[nW[aC]] ? nY(nW[aC]) : 0 == nX[nW[aC]]-- && (nY(nW[aC]), gm(nW[aC]));
		16e4 <= ah.hW[mf[0]] && (nZ(16e4), 3e5 <= ah.hW[mf[0]]) && nZ(3e5), bD.h4.m2(aE.fS) && (bg.nc[7] = Math.max(ah.hW[aE.fS], bg.nc[7]))
	}, this.h6 = function(player) {
		for (var g1, aC = nV - 1; 0 <= aC; aC--)
			if (player === nW[aC]) {
				for (nV--, g1 = aC; g1 < nV; g1++) nW[g1] = nW[g1 + 1];
				return
			}
	}, this.kB = function(player, nd) {
		for (var aC = nV - 1; 0 <= aC; aC--)
			if (player === nW[aC]) return;
		nW[nV++] = player, nX[player] = nd ? 2 : 64
	}
}

function cF() {
	var size, ks;
	this.dt = function() {
		size = aE.lQ, ks = new Uint16Array(aE.ff);
		for (var l4 = aE.l4, aC = aE.lQ - 1; 0 <= aC; aC--) ks[aC] = l4 + aC
	}, this.en = function() {
		ap.jx.en();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.ng[ks[aC]]) {
				g1 = void 0;
				var g1 = aC;
				size--, ks[g1] = ks[size]
			} else aF.en(ks[aC])
	}, this.nf = function(hG) {
		ks[size++] = hG
	}
}

function cG() {
	var ni, nj, nk, nl, nm, nn, no, np, nq, nr, ns, nt, nu, nv = !1,
		nw = !1;

	function nx(ny) {
		nt = bi.ei, nk = nl = nj = 0, nm = (nu = 33) / ny, ni = 1 / (ny / nu / 4), nn = (i.j / 2 + jN) / ix, no = (i.k / 2 + jO) / ix, np = ix
	}

	function o5(aC) {
		var o7; - 1 !== aC && (aC = bP.jU(bQ.z.n9[aC]), o7 = bP.fq(aC) - 15, aC = bP.fs(aC) - 15, aI.o1(o7, aC, 29 + o7, 29 + aC))
	}

	function oI(eV) {
		Math.abs(Math.log(ns / np)) < .125 && (ns = eV * np)
	}

	function oH(o7, o8, oK, oL) {
		nq = (o7 + oK + 1) / 2, nr = (o8 + oL + 1) / 2;
		oK = i.j / (oK - o7 + 1), o7 = i.k / (oL - o8 + 1);
		ns = .9 * (oK < o7 ? oK : o7)
	}
	this.nz = function() {
		return nv
	}, this.o0 = function() {
		nx(1), this.o1(0, 0, bV.ft - 1, bV.fu - 1), aE.i7 || aE.hr || aE.hs || this.o2(aE.fS, 3e3, !0, .3)
	}, this.o3 = function(player, o4) {
		o5(bQ.lt.o6(player, o4))
	}, this.o2 = function(player, ny, o9, zoom) {
		aE.oA || nv && !o9 && nw || (0 === ah.hW[player] ? o5(bQ.lt.oB(player)) : (aT.oC = !1, nw = o9, nx(ny), function(player) {
			nq = (ah.jc[player] + ah.jd[player] + 1) / 2, nr = (ah.je[player] + ah.jf[player] + 1) / 2
		}(player), function(zoom, player) {
			var j6 = ah.jd[player] - ah.jc[player] + 1,
				player = ah.jf[player] - ah.je[player] + 1,
				g1 = i.j / j6,
				g2 = i.k / player,
				g1 = (ns = g1 < g2 ? g1 : g2, 0 !== zoom ? zoom : j6 < 20 && player < 20 ? .5 : .9);
			ns *= g1, oI(7 / 8)
		}(zoom, player), nv = !0, at.oF()))
	}, this.oG = function(ny) {
		aE.hr || aE.oA || (aT.oC = !1, nw = !1, nx(ny), oH(0, 0, bV.ft - 1, bV.fu - 1), oI(7 / 8), nv = !0, at.oF())
	}, this.o1 = function(o7, o8, oK, oL) {
		nv = !1, oH(o7, o8, oK, oL), ix = ns, aT.oM(nq, i.j / 2), aT.oN(nr, i.k / 2), bd.oO(), bi.e0 = !0
	}, this.oP = function() {
		return !(nv && nw || (nv = !1))
	}, this.en = function() {
		var oS, oT, fl, oW;
		nv && (nj < .5 ? nl < nm && (nl += nm * ni, nk = nj) : 1 - nk < nj && (nl = (nl -= nm * ni) < nm * ni ? nm * ni : nl), nt = nt >= bi.ei ? bi.ei - 1 : nt, fl = bi.ei - nt, nj = 1e3 < fl || 1 < (nj += nl * fl / nu) ? 1 : nj, nt = bi.ei,
			fl = ix, oS = jN, oT = jO, fl = (ix = np * Math.pow(ns / np, nj)) / fl, oW = 1 - (np * Math.pow(ns / np, 1 - nj) - np) / (ns - np), aT.oM(nn + oW * (nq - nn), i.j / 2), aT.oN(no + oW * (nr - no), i.k / 2), ag.zoom(fl, (oS * fl -
				jN) / (1 - fl), (oT * fl - jO) / (1 - fl)), bd.oO(), 1 <= nj && (nv = !1, be.oX = !0), bi.e0 = !0)
	}
}

function dn() {
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

	function ox(eu, ow, action) {
		ow = ou("button", ow);
		return ow.type = "button", ow.textContent = eu, ow.addEventListener("click", action), ow
	}

	function oy(ow) {
		ow = ou("canvas", ow);
		return ow.width = 128, ow.height = 128, ow
	}

	function or(canvas, data) {
		canvas = canvas.getContext("2d");
		oi || (oi = canvas.createImageData(128, 128), oj = new Uint32Array(oi.data.buffer)),
			function(data, p0) {
				for (var fi = data.length, p1 = 0, position = 0, color = 0; position < 16384;) {
					var eR = p1 >> 3;
					if (fi <= eR) break;
					for (var eR = data[eR] << 8 | (1 + eR < fi ? data[1 + eR] : 0), oP = Math.min(16384, position + (eR >> 10 - (7 & p1) & 63)), p3 = color ? om : on, aC = position; aC < oP; aC++) p0[aC] = p3;
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
		ol.close(), b1.ep.pH(0, 0, ol.oY, ol.pow)
	}

	function pG() {
		var pI, op;
		og && (pI = og, op = oh, ol.close(), b1.ep.pH(pI, op, ol.oY, ol.pow))
	}
	this.show = function(oo, op, oY, pow) {
		this.oY = oY, this.pow = pow, oh = op, oZ || function() {
			ok = document.activeElement, (oZ = ou("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oZ.setAttribute("aria-modal", "true"), oZ.setAttribute("aria-label", L(14)), ou("style", oZ).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var pB = ou("div", oZ, "captcha-reference-row");
			ou("span", pB, "captcha-reference-label").textContent = L(15), (ob = oy(pB)).className = "captcha-reference", ob.setAttribute("aria-label", L(16)), oa = ou("div", oZ, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) oe.push(function(eR) {
				var e = ox("", oa, function() {
					og ^= 1 << eR, os()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eR + 1])), e.setAttribute("aria-pressed", "false"), oy(e).setAttribute("aria-hidden", "true"), e
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

function dq() {
	this.nH = new pJ, this.pK = new pL, this.pM = new pN, this.dt = function(pO, pP) {
		this.pK.dt(pO, pP), this.nH.dt(pP), this.pM.dt()
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
	this.dt = function() {
		pQ = 0, pR = [], pS = [], pT = ""
	}, this.pU = function() {
		return pQ
	}, this.pV = function(pW) {
		pQ = 1 - pQ, pT = "", pR = [], pS = [], this.pX(pW), bz.nH.reset()
	}, this.pX = function(pW) {
		if (pQ && bq.fF) {
			var h = bq.pY.pZ(pW),
				pW = h.join(" ");
			if (pW !== pT) {
				pT = pW, pR = [], pS = [];
				for (var aC = 0; aC < h.length; aC++) bD.pa.startsWith(h[aC], "@[") ? pS.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pR.push(bJ.f9.fA(h[aC].substring(1), 5));
				bz.nH.reset()
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
				} else if (pd(bJ.f9.fA(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pJ() {
	var pp = null,
		pq = 1048575;

	function py() {
		var hB = pp.childNodes.length - bq.z.q1;
		if (!(hB <= 0)) {
			for (var aC = 0; aC < hB; aC++) pp.removeChild(pp.firstChild);
			bz.pK.q2()
		}
	}

	function pv(pu, q3) {
		q3 && (q3.q4 = 1, pu.appendChild(bq.q5.transform(q3)))
	}
	this.dt = function(pP) {
		pp = pP, pq = 1048575
	}, this.reset = function(pr) {
		pq = 1048575, pp.textContent = "", pr || this.nT()
	}, this.nT = function() {
		var ps = bq.z.ps,
			pt = bq.z.pt,
			fi = ps.length,
			kK = 1048575 === pq ? 0 : fi - (pt - pq + 1048575) % 1048575;
		if (pq = pt, !(fi <= (kK = Math.max(kK, 0)))) {
			for (var pu = document.createDocumentFragment(), aC = kK; aC < fi; aC++) bz.pM.pb(ps[aC]) && pv(pu, bq.lt.pw(ps[aC], bq.lt.px(ps[aC])));
			pp.appendChild(pu), py(), bz.pK.pz()
		}
	}, this.q0 = function(s) {
		var pu = document.createDocumentFragment();
		pv(pu, s), pp.appendChild(pu), py(), bz.pK.pz()
	}
}

function pL() {
	var q6 = null,
		pp = null,
		q7 = 1,
		q8 = null,
		q9 = 0;

	function qB() {
		q8 && q8.parentNode === pp || (q8 = pp.firstChild, q9 = 0), q8 && (q6.scrollTop = q8.offsetTop + q9)
	}
	this.dt = function(pO, pP) {
		pp = pP, q7 = 1, q8 = null, q9 = 0, (q6 = pO).addEventListener("scroll", function() {
			if (q6.scrollTop < q6.scrollHeight - q6.clientHeight - 2) {
				q7 = 0;
				for (var qC = pp.childNodes, qD = q6.scrollTop, aC = 0; aC < qC.length; aC++)
					if (qC[aC].offsetTop + qC[aC].offsetHeight > qD) return void(q8 = qC[aC], q9 = qD - qC[aC].offsetTop);
				q8 = null
			} else q7 = 1
		})
	}, this.q2 = function() {
		q7 || qB()
	}, this.pz = function(c2) {
		q7 ? q6.scrollTop = q6.scrollHeight : c2 && qB()
	}
}

function c8() {
	var es = bD.color;
	this.qE = es.qF(0, 0, 0), this.qG = es.qH(0, 0, 0, .7), this.qI = es.qH(0, 0, 0, .5), this.qJ = es.qH(0, 0, 0, .85), this.qK = es.qH(0, 0, 0, .75), this.qL = es.qH(0, 0, 0, .6), this.qM = es.qH(0, 0, 0, .35), this.qN = es.qF(255, 255, 255), this
		.qO = es.qH(255, 255, 255, .3), this.qP = es.qH(255, 255, 255, .6), this.qQ = es.qH(255, 255, 255, .4), this.qR = es.qH(255, 255, 255, .25), this.qS = es.qH(255, 255, 255, .85), this.qT = es.qH(255, 255, 255, .75), this.qU = es.qH(255, 255,
			255, .15), this.qV = es.qH(255, 255, 255, .11), this.qW = es.qF(128, 128, 128), this.qX = es.qH(64, 64, 64, .75), this.qY = es.qH(88, 88, 88, .83), this.qZ = es.qH(60, 60, 60, .85), this.qa = es.qH(80, 60, 60, .85), this.qb = es.qF(170,
			170, 170), this.qc = es.qF(200, 235, 245), this.qd = es.qF(30, 255, 30), this.qe = es.qF(0, 200, 0), this.qf = es.qF(128, 255, 128), this.qg = es.qH(10, 65, 10, .75), this.qh = es.qH(0, 255, 0, .6), this.qi = es.qH(0, 255, 0, .5), this
		.qj = es.qH(0, 200, 0, .5), this.qk = es.qH(0, 100, 0, .75), this.ql = es.qH(0, 60, 0, .8), this.qm = es.qH(0, 255, 0, .3), this.qn = es.qH(0, 180, 0, .6), this.qo = es.qH(0, 120, 0, .85), this.qp = es.qF(0, 120, 0), this.qq = es.qH(0, 70, 0,
			.85), this.qr = es.qF(190, 230, 190), this.qs = es.qF(0, 255, 0), this.qt = es.qH(10, 120, 10, .9), this.qu = es.qF(200, 255, 200), this.qv = es.qF(255, 120, 120), this.qw = es.qF(255, 160, 160), this.qx = es.qF(255, 70, 70), this.qy = es
		.qF(230, 0, 0), this.qz = es.qH(220, 0, 0, .6), this.r0 = es.qH(255, 100, 100, .8), this.r1 = es.qH(100, 0, 0, .85), this.r2 = es.qH(60, 0, 0, .85), this.r3 = es.qH(200, 0, 0, .6), this.r4 = es.qH(120, 0, 0, .85), this.r5 = es.qF(255, 70,
		10), this.r6 = es.qF(230, 190, 190), this.r7 = es.qF(255, 0, 0), this.r8 = es.qF(255, 0, 255), this.r9 = es.qH(60, 0, 60, .85), this.rA = es.qH(0, 60, 60, .85), this.rB = es.qH(10, 60, 60, .9), this.rC = es.qH(0, 96, 96, .75), this.rD = es
		.qF(0, 255, 255), this.rE = es.qF(160, 160, 255), this.rF = es.qH(0, 40, 90, .75), this.rG = es.qH(0, 0, 255, .6), this.rH = es.qF(200, 200, 255), this.rI = es.qH(50, 50, 255, .83), this.rJ = es.qH(20, 90, 150, .75), this.rK = es.qH(10, 10,
			120, .75), this.rL = es.qH(10, 60, 160, .9), this.rM = es.qF(200, 220, 255), this.rN = es.qH(0, 120, 255, .35), this.rO = es.qF(70, 150, 255), this.rP = es.qF(255, 120, 100), this.rQ = es.qH(255, 255, 0, .5), this.rR = es.qH(255, 255,
			150, .2), this.rS = es.qF(255, 255, 0), this.rT = es.qF(255, 255, 200), this.rU = es.qH(200, 200, 0, .6), this.rV = es.qH(140, 120, 0, .75), this.rW = es.qH(180, 160, 40, .75), this.rX = es.qH(70, 50, 20, .85), this.rY = es.qH(30, 30, 0,
			.85), this.rZ = es.qH(60, 60, 0, .85), this.ra = es.qF(255, 255, 100), this.rb = es.qF(255, 255, 140), this.rc = es.qH(255, 140, 0, .75), this.rd = es.qH(70, 40, 0, .85), this.re = es.qF(255, 150, 0), this.rf = es.qH(255, 200, 80, .85),
		this.rg = es.qH(0, 0, 0, 0), this.rh = es.qH(255, 255, 255, 0), this.ri = es.qH(254, 254, 254, 0)
}

function d8() {
	this.i9 = new rj, this.h4 = new rk, this.rl = new rm, this.rn = new ro, this.l6 = new rp
}

function rj() {
	this.rq = 1, this.iA = function(fU) {
		aE.hs || (aE.lO ? bB.rl.iA(aE.fS, fU) : b1.rr.rs(fU))
	}, this.iG = function(jM, kD) {
		aE.hs || (this.rq && (this.rq = 0, bm.rt.pz(182, jM)), aE.lO ? bB.rl.iG(aE.fS, jM, kD) : b1.rr.ru(jM, kD))
	}, this.rv = function(jM, rw) {
		aE.hs || (aE.lO ? bB.rl.rx(aE.fS, jM, rw) : b1.rr.ry(jM, rw))
	}, this.iL = function(jM, fU) {
		aE.hs || (fU = (fU << 3) + bR.gK[6], aE.lO ? bB.rl.iL(aE.fS, jM, fU) : bQ.nA.nB(aE.fS) && b1.rr.s0(jM, fU))
	}, this.iO = function(jM) {
		var o4;
		aE.hs || (849 === jM && (jM = 850), o4 = bR.gK[3], aE.lO ? bB.rl.iO(aE.fS, jM, o4) : bQ.iM.s1(aE.fS, o4) && b1.rr.s2(jM, o4))
	}, this.s3 = function(o4) {
		aE.hs || (aE.lO ? bB.rl.s3(aE.fS, o4) : b1.rr.s2(849, o4))
	}, this.s4 = function(kD) {
		aE.hs || (aE.lO ? bB.rl.s4(aE.fS, kD) : b1.rr.s5(kD))
	}, this.s6 = function(s7) {
		aE.hs || (aE.lO ? bB.rl.s8(aE.fS, s7) : b1.rr.s9(s7))
	}, this.iX = function(sA) {
		aE.hs || (aE.lO ? bB.rl.iX(aE.fS, sA) : b1.rr.sB(sA))
	}, this.sC = function() {
		aE.hs || (aE.lO ? bB.rl.sC(aE.fS) : b1.rr.sD())
	}, this.iU = function() {
		aE.hs || (aE.lO ? bB.rl.iU(aE.fS) : b1.rr.s5(513))
	}, this.iC = function(jM, fU, kD) {
		aE.hs || (aE.lO ? bB.rl.iC(aE.fS, jM, fU, kD) : b1.rr.sE(jM, fU, kD))
	}
}

function rp() {
	this.l7 = function(player, rw, iS) {
		bD.h4.sF(player, iS, rw) && (af.rv(player, rw), !bD.h4.kR(rw)) && ap.jr.kg[rw] && ap.jr.kg[rw]--
	}, this.sG = function(player, rw, iS) {
		bD.h4.sH(iS, rw) ? ao.er(rw, bR.gF[0]) && (bu.sI(player, rw, bR.gF[0], 1), bD.h4.h7(rw, bR.gF[0]), bg.sJ(player, rw), ag.sK(rw, bR.gF[0])) : bg.h8(player, iS, 12)
	}
}

function rk() {
	this.sL = function(s7, player) {
		aE.hs || (aO.s6(aE.fS, player, s7), b1.rr.sM(s7, player))
	}, this.sN = function(player) {
		aE.hs || (aO.sO(player, 0), b1.rr.sP(player))
	}, this.sQ = function(sR, player) {
		aE.hs || (aO.sS(sR, player), b1.rr.sT(sR, player))
	}, this.sU = function() {
		aE.lO || aE.hr || aE.hs || b1.sV.sU()
	}
}

function ro() {
	this.en = function(aD) {
		var id, gR, oP;
		for (bK.dt(aD), bK.eR += 2, oP = 8 * bK.size; bK.eR + 8 <= oP;) id = bK.sW(4), gR = bK.sW(9), 0 === id ? this.sX(id, gR, bK.sW(22)) : 1 === id ? this.sX(id, gR, bK.sW(10), bK.sW(10)) : 2 === id ? this.sX(id, gR, bK.sW(10), bK.sW(9)) :
			3 === id ? this.sX(id, gR, bK.sW(10), bK.sW(27)) : 4 === id ? this.sX(id, gR, bK.sW(10), bK.sW(16)) : 5 === id || 6 === id ? this.sX(id, gR, bK.sW(10)) : 7 === id ? this.sX(id, gR, bK.sW(1)) : 10 === id ? this.sX(id, gR, bK.sW(20), bK
				.sW(22)) : this.sX(id, gR)
	}, this.sY = [], this.sZ = function() {
		for (var sb = 0, sc = 0, sd = 0, se = 0, sf = 0, sg = 0, aC = 0; aC < 512; aC++) sb += ah.ng[aC], sc += ah.hW[aC], sd += ah.hk[aC], se += bQ.z.l8[aC];
		sf += bQ.z.mu, sg += am.la, this.sY.push(sd % 1073741824 * 4 + (sb + sc + se + sf + sg) % 4)
	}, this.sX = function(id, gR, gT, gV) {
		0 === id ? bB.rl.iA(gR, gT) : 1 === id ? bB.rl.iG(gR, gT, gV) : 2 === id ? bB.rl.rx(gR, gT, gV) : 3 === id ? bB.rl.iL(gR, gT, gV) : 4 === id ? bB.rl.iO(gR, gT, gV) : 5 === id ? bB.rl.s4(gR, gT) : 6 === id ? bB.rl.s8(gR, gT) : 7 === id ?
			bB.rl.iX(gR, gT) : 8 === id ? bB.rl.sC(gR) : 9 === id ? bB.rl.sh(gR) : 10 === id && bB.rl.iC(gR, gT >> 10, gV, gT % 1024)
	}
}

function rm() {
	this.iA = function(player, fU) {
		bD.h4.hu(0) && bD.h4.hv(player) && bP.jR(fU) && (bC.si.sj(0, player, fU), aE.sk.er(player, fU))
	}, this.iG = function(player, jM, kD) {
		bD.h4.hu(1) && bD.h4.hv(player) && bD.h4.sl(player, kD) && bD.h4.nC(player, jM, 12, 0) && bD.h4.sm(player, kD) && ((kD = ae.kP(player, bR.fe[0])) || ae.ki(player)) && (ah.sn[player]++, bC.si.sj(1, player, jM, bR.fe[0]), ap.jp.k3(player,
			kD)) && (bD.h4.nE(player), bg.so(player, jM), ap.jp.k9(player))
	}, this.rx = function(player, jM, rw) {
		bD.h4.hu(1) && bD.h4.hv(player) && aE.ie && bD.h4.sl(player, rw) && bD.h4.sp(player, rw) && bD.h4.sF(player, bD.h4.jL(player, jM), rw) && ao.er(rw, bR.gF[0]) && (bC.si.sj(2, player, jM, rw), af.rv(player, rw))
	}, this.iL = function(player, jM, rz) {
		bR.gK[1] = 7 & rz;
		var fU = rz >> 3;
		bD.h4.hu(1) && bD.h4.hv(player) && bP.jR(fU) && bQ.nA.nB(player) && bQ.nA.sq(fU) && bD.h4.nC(player, jM, 32, 0) && bQ.lr.sr(player, fU, 1) && (bg.ss(player), bC.si.sj(3, player, jM, rz), bD.h4.nE(player), bo.st.iL(player), bQ.z.nF(
			player))
	}, this.iO = function(player, jM, o4) {
		849 === jM ? this.s3(player, o4) : bD.h4.hu(1) && bD.h4.hv(player) && bD.h4.nC(player, jM, 32, 0) && bQ.iM.su(player, o4) && (bg.ss(player), bC.si.sj(4, player, jM, o4), bD.h4.nE(player), bo.st.iO(player), bQ.z.nF(player))
	}, this.s3 = function(player, o4) {
		bD.h4.hu(1) && bD.h4.hv(player) && bQ.sv.en(player, o4) && bC.si.sj(4, player, 849, o4)
	}, this.s4 = function(player, kD) {
		513 === kD ? this.iU(player) : bD.h4.hu(1) && bD.h4.hv(player) && (kD = Math.min(kD, aE.ff), ae.kP(player, kD)) && (bC.si.sj(5, player, kD), ae.sw(player, kD))
	}, this.s8 = function(player, s7) {
		(bD.h4.hu(1) || bD.h4.hu(2)) && bD.h4.hv(player) && (s7 = bO.iu(s7, 0, 1023), bC.si.sj(6, player, s7), ag.sx(player, 0, s7))
	}, this.iX = function(player, sA) {
		ax.iW(player) && (bC.si.sj(7, player, sA), ax.sy(player, sA))
	}, this.sC = function(player) {
		(bD.h4.hu(0) || bD.h4.hu(1)) && bD.h4.hv(player) && aN.sz(player) && (bC.si.sj(8, player), bT.sC(player))
	}, this.sh = function(player) {
		bC.si.sj(9, player), bT.sh(player)
	}, this.iU = function(player) {
		ax.iY(player) && (bC.si.sj(5, player, 513), ax.iU(player))
	}, this.iC = function(player, jM, fU, kD) {
		bD.h4.hu(1) && bD.h4.hv(player) && bD.h4.sl(player, kD) && bD.h4.sm(player, kD) && bP.jR(fU) && an.fJ.fc(player, fU) && (ae.kP(player, bR.fe[0]) || ae.ki(player)) && (bC.si.sj(10, player, (jM << 10) + bR.fe[0], fU), kD = bD.h4.mG(player,
			jM), ah.hA[player].push(bR.fj[0]), ae.er(player, kD, bR.fe[0]), aG.kB(player, !0), bg.t0(player))
	}
}

function t1(pW) {
	var k, t2 = new t3,
		t4 = document.createElement("div");

	function tC() {
		t4.style.opacity = "0", setTimeout(tE, t2.tA)
	}

	function tE() {
		u.removeChild(document.body, t4), t2 = t4 = null
	}
	k = bD.t6.t7(t2.t8, .5), t4.textContent = pW, t4.style.position = "fixed", t4.style.zIndex = t2.zIndex, t4.style.left = "50%", t4.style.top = .5 * k + "px", t4.style.transform = "translateX(-50%)", t4.style.maxWidth = "90%", t4.style.boxSizing =
		"border-box", t4.style.padding = .3 * k + "px " + .6 * k + "px", t4.style.backgroundColor = bE.qJ, t4.style.color = bE.qN, t4.style.font = bD.t6.t9(0, .6 * k), t4.style.textAlign = "center", t4.style.userSelect = "none", t4.style
		.pointerEvents = "none", t4.style.transition = "opacity " + t2.tA + "ms", bD.t6.tB(t4), document.body.appendChild(t4), setTimeout(tC, t2.tD)
}

function t3() {
	this.tD = 5e3, this.tA = 600, this.zIndex = "1000", this.t8 = .03
}

function tF() {
	var tH;
	this.tG = [], this.tH = document.createElement("div"), this.tI = function(pW, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pW, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tH.appendChild(
			title), title
	}, this.tJ = function(pW, marginBottom) {
		var tK = document.createElement("p");
		return tK.textContent = pW, tK.style.fontSize = "0.75em", tK.style.lineHeight = "1.2em", tK.style.marginBottom = marginBottom || "0", this.tH.appendChild(tK), tK
	}, this.tL = function(pW) {
		var tM = document.createElement("p");
		return tM.textContent = pW, tM.style.fontSize = "1em", tM.style.marginBottom = "0", tM.style.whiteSpace = "pre-wrap", tM.style.overflowWrap = "break-word", this.tH.appendChild(tM), tM
	}, this.tN = function(tO, fontSize) {
		var tH = document.createElement("div");
		return tH.innerHTML = tO, tH.style.fontSize = fontSize || "1em", tH.style.lineHeight = "1.2em", this.tH.appendChild(tH), tH
	}, this.tP = function(tQ) {
		for (var tR = tQ.tR, fi = tR.length, aC = 0; aC < fi; aC++) this.tH.appendChild(tR[aC])
	}, this.tS = function(q3) {
		return this.tG.push(q3), this.tH.appendChild(q3.e), q3
	}, this.resize = function() {
		for (var fi = this.tG.length, aC = 0; aC < fi; aC++) this.tG[aC].resize && this.tG[aC].resize()
	}, (tH = this.tH).style.position = "absolute", tH.style.height = "auto", tH.style.padding = "0.5em"
}

function tT(tU, tV) {
	var tH = document.createElement("div");

	function tc() {
		var aC, qD, k, hH, fl, tZ = i.l * tH.offsetWidth,
			td = new Float64Array(function(tZ) {
				var j = .25 * bD.t6.ta(.6) * i.iw;
				return Math.max(Math.floor(tZ / j), 1)
			}(tZ)),
			te = bf.te,
			tf = (tZ - (td.length + 1) * bf.gap) / (td.length * i.l);
		for (td.fill(te), aC = 0; aC < tV.length; aC++) qD = (fl = tV[aC].tH).style, k = bD.tg.min(td), hH = td.indexOf(k), qD.top = bD.t6.th(k), qD.left = bD.t6.th(te + hH * (tf + te)), qD.width = bD.t6.th(tf), bD.t6.tB(fl, 5), td[hH] += fl
			.offsetHeight + 3 * te;
		tH.style.height = bD.t6.th(bD.tg.max(td) - 2 * te)
	}
	this.tW = tH, this.tX = tV, this.resize = function() {
		var aC;
		for (aC = 0; aC < tV.length; aC++) tV[aC].resize();
		tc(), tc()
	}, tH.style.width = "100%", tH.style.maxWidth = "100%", tU.style.lineHeight = "1.5em", tU.style.overflowX = "hidden", tU.style.overflowY = "auto";
	for (var aC = 0; aC < tV.length; aC++) tH.appendChild(tV[aC].tH);
	tU.appendChild(tH)
}

function x(ti, tj, tk, tl, tm) {
	var self, tn = document.createElement("button"),
		tr = (this.button = tn, this.tp = tj, this.tq = tk, 0);

	function tv() {
		var u1;
		bM.u0() || (tr = 1, u1 = bD.color.u2(tk), !1 !== tl && 0 < u1[0] && u1[0] < 255 && u1[0] === u1[1] && u1[0] === u1[2]) || (128 < u1[0] && 128 < u1[1] && 128 < u1[2] ? tn.style.backgroundColor = bD.color.u3(tk, -50) : tn.style
			.backgroundColor = bD.color.u3(tk, u1[3] && u1[3] < 120 ? 150 : 50))
	}

	function tu() {
		if (tl) {
			var u1 = bD.color.u2(tk);
			if (u1[0] === u1[1] && u1[0] === u1[2]) return
		}
		tj && ((u1 = tj(this)) ? 2 === u1 && tv() : u5(this))
	}

	function tx() {
		tr = 0, this.style.backgroundColor = tk
	}

	function tw() {
		u5(this)
	}

	function u5(fl) {
		tr = 0, fl.style.backgroundColor = tk, fl.blur()
	}
	this.tt = function(ty) {
		ty = 1.1 - Math.min(.01 * ti.length, .6) + .2 * ty;
		tn.style.fontSize = ty.toFixed(1) + "em"
	}, this.ts = function(es) {
		es ? 1 === es ? es = bE.qZ : 2 === es && (tl = 1, es = bE.qZ) : (tl = 0, es = bE.qJ), this.tq = tk = es, tn.style.backgroundColor = es, tr && tv()
	}, self = this, tn.innerHTML = ti, tn.style.color = tm ? bE.rS : bE.qN, tn.style.userSelect = "none", tn.style.outline = "none", tn.style.overflowWrap = "break-word", self.ts(tk), tn.style.border = "none", tn.style.font = "inherit", self.tt(
		0), tn.style.padding = "0em 0.3em", tn.onclick = tu, tn.addEventListener("mouseover", tv), tn.addEventListener("mouseout", tw), tn.addEventListener("focus", tv), tn.addEventListener("blur", tx)
}

function u6(p7, tU) {
	var tH;
	this.resize = function() {
		for (var aC = 0; aC < p7.length; aC++) bD.t6.tB(p7[aC].button);
		tH.style.gap = tH.style.padding = bD.t6.th(bf.te)
	}, (tH = document.createElement("div")).style.display = "grid", tH.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tH.style.overflowY = "auto", tH.style.gridAutoRows = "5.3em", tH.style.maxHeight = "100%";
	for (var aC = 0; aC < p7.length; aC++) p7[aC].tt(1), tH.appendChild(p7[aC].button);
	tU.appendChild(tH)
}

function u8(u9, uA, uB) {
	this.fp = 0, this.fr = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.t6.ta(uB || .5) * u9[1] * i.iw, i.k - 2 * bf.gap), this.j = Math.min(this.k * (u9[0] / u9[1]), i.j - 2 * bf.gap), this.k = u9[1] * this.j / u9[0], this.fp = bf.gap + uA[0] * (i.j - this.j - 2 * bf.gap), this.fr = bf
			.gap + uA[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uC = function() {
		return this.fp + .5 * this.j
	}
}

function uD(uE, uF) {
	var uN, uO, self, q6 = document.createElement("div"),
		uG = document.createElement("div"),
		uH = document.createElement("div"),
		uI = null,
		uP = (this.uJ = new uK({
			value: "",
			eR: -1
		}, 0, uL, function(e) {
			e.target.value = bD.pa.uV(e.target.value), uI.uU.textContent = 255 - e.target.value.length, bz.pM.pX(e.target.value)
		}), new uQ(0)),
		uR = 0;

	function uL() {
		uE()
	}
	this.uT = function() {
			uI.uU.textContent = 255 - this.uJ.e.value.length, bz.pM.pX(this.uJ.e.value)
		}, this.show = function(tU) {
			tU.appendChild(q6), tU.appendChild(uH), this.resize(tU)
		}, this.uW = function(tU) {
			u.removeChild(tU, q6), u.removeChild(tU, uH)
		}, this.resize = function(tU) {
			uR = tU ? tU.offsetHeight : uR;
			var tU = bD.t6.t7(.04, .75),
				uY = Math.max(tU, uR - tU),
				uZ = i.j / i.l,
				ua = .7 * uZ,
				ub = bD.t6.th(uR - tU - uY),
				uY = (uH.style.height = bD.t6.th(tU), q6.style.height = bD.t6.th(uY), i.k > i.j || a1.a2.iv() ? (uH.style.top = ub, q6.style.top = bD.t6.th(uR - uY), bD.t6.tB(q6, 8)) : (q6.style.top = ub, uH.style.top = bD.t6.th(uR - tU), bD.t6.tB(
						q6, 2)), uO.button.style.width = bD.t6.th(tU), uP.resize(.6 * tU), this.uJ.e.style.left = bD.t6.th(tU), this.uJ.e.style.width = bD.t6.th(ua - tU), this.uJ.e.style.fontSize = uN.button.style.fontSize = bD.t6.th(.5 * tU), bD.t6
					.tB(this.uJ.e, 6), uN.button.style.left = bD.t6.th(ua), uN.button.style.width = bD.t6.th(uZ - ua), .385 * tU);
			a1.a2.iv() && (uY *= .8 - .12 * (i.j > i.k)), uG.style.marginLeft = uG.style.marginRight = bD.t6.th(.5 * uY), uG.style.fontSize = bD.t6.th(uY), bz.pK.pz(1)
		}, (self = this).uJ.e.maxLength = 255, q6.style.position = "absolute", q6.style.left = "0", q6.style.width = "100%", q6.style.overflowX = "hidden", q6.style.overflowY = "auto", q6.style.font = "inherit", q6.style.backgroundColor = bE.qL, uG
		.style.font = "inherit", uH.style.position = "absolute", uH.style.left = "0", uH.style.width = "100%", self.uJ.e.setAttribute("placeholder", L(20)), self.uJ.e.style.position = "absolute", self.uJ.e.style.top = "0", self.uJ.e.style.height =
		"100%", self.uJ.e.style.backgroundColor = bE.qI, self.uJ.e.style.textAlign = "center", (uN = new x(L(21), uL)).button.top = "0", uN.button.style.position = "absolute", uN.button.style.height = "100%", uN.ts(bE.rh), uI = new uS("255", uN
			.button, 1, 1), (uO = new x("", function() {
			return bz.pM.pV(self.uJ.e.value), uO.ts(bz.pM.pU() ? bE.qm : bE.rh), 0
		})).button.style.position = "absolute", uO.button.style.top = "0", uO.button.style.left = "0", uO.button.style.height = "100%", uO.button.style.padding = "0", uO.ts(bE.rh), uP.canvas.style.display = "block", uP.canvas.style.margin = "auto",
		uO.button.appendChild(uP.canvas), q6.appendChild(uG), uH.appendChild(uO.button), uH.appendChild(self.uJ.e), uH.appendChild(uN.button), bz.dt(q6, uG)
}

function ud(ue, ti, uf) {
	function click() {
		var value = 1 - ue.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + ti, void 0 !== ue.eR ? bm.rt.pz(ue.eR, value) : ue.value = value, uf && uf(value)
	}
	var e;
	ti = ti || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (ue.value ? "🟩 " : "⬜ ") + ti, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ug(tU, tO) {
	var tH = document.createElement("div");
	this.tW = tH, this.resize = function() {
		tH.style.padding = bD.t6.th(bf.te), tH.style.lineHeight = bD.t6.th(bD.t6.t7(.035))
	}, tU.style.overflowX = "hidden", tU.style.overflowY = "auto", tH.innerHTML = tO, tU.appendChild(tH)
}

function uh(ui) {
	var tH = document.createElement("div");
	this.e = tH, this.uj = ui, this.resize = function() {
		for (var fi = ui.length, aC = 1; aC < fi; aC++) bD.t6.tB(ui[aC], 4)
	};
	var aC, fi = ui.length;
	for (tH.style.width = "100%", tH.style.height = "2.7em", tH.style.marginTop = "0.6em", tH.style.border = "inherit", aC = 0; aC < fi; aC++) ui[aC].style.verticalAlign = "top", ui[aC].style.width = (100 / fi).toFixed(2) + "%", ui[aC].style.height =
		"100%", ui[aC].style.fontSize = "0.75em", tH.appendChild(ui[aC])
}

function uk(ul, tk, um, un) {
	this.tH = document.createElement("div"), this.p7 = ul;
	var uo = 0;
	this.resize = function(tU, uq) {
		var fi = ul.length;
		if (!um)
			for (var aC = 1; aC < fi; aC++) bD.t6.tB(ul[aC].button, 4);
		if (un)
			for (aC = 0; aC < fi; aC++) ul[aC].button.style.width = un[aC] + "%";
		else {
			for (var ur = 0, aC = 0; aC < fi; aC++) ur += ul[aC].button.offsetWidth;
			if (tU && (uo = tU.offsetWidth), uq && ur < uo)
				for (aC = 0; aC < fi; aC++) ul[aC].button.style.width = (100 * ul[aC].button.offsetWidth / ur).toFixed(2) + "%";
			else
				for (aC = 0; aC < fi; aC++) ul[aC].button.style.width = "auto";
			uq || this.resize(tU, 1)
		}
	};
	var up = this;
	up.tH.style.height = up.tH.style.maxHeight = "100%";
	for (var aC = 0; aC < ul.length; aC++) ul[aC].ts(tk), ul[aC].button.style.height = "100%", ul[aC].button.style.padding = "0.0em 0.9em", ul[aC].button.style.whiteSpace = "pre", up.tH.appendChild(ul[aC].button)
}

function dp() {
	var us = 2e3,
		ut = 2,
		t4 = document.createElement("div"),
		uu = 0,
		uv = "",
		uw = 0,
		ux = 0,
		uy = 0;

	function v1(v0) {
		clearTimeout(uy), uw = v0.clientX, ux = v0.clientY, uy = setTimeout(v3, us)
	}

	function v2(v0) {
		var j6;
		!uv || (j6 = v0.clientX - uw) * j6 + (j6 = v0.clientY - ux) * j6 < ut * ut || (fE(), v1(v0))
	}

	function v3() {
		var j, gap, v4, k;
		uv && !bM.u0() && (t4.textContent = uv, t4.style.font = bD.t6.t9(0, bD.t6.t7(.014)), t4.style.maxWidth = bD.t6.t7(.3) + "px", bD.t6.tB(t4, 5), uu = 1, document.body.appendChild(t4), j = t4.offsetWidth, k = t4.offsetHeight, gap = bD.t6.t7(
			.012), v4 = i.j / i.l, (k = ux - k - gap) < 0 && (k = ux + 2 * gap), t4.style.left = bO.iu(uw - j / 2, 0, Math.max(0, v4 - j)) + "px", t4.style.top = k + "px")
	}

	function fE() {
		uu && (uu = 0, u.removeChild(document.body, t4))
	}
	this.uz = function(e, pW) {
		e.addEventListener("mouseover", function(v0) {
			uv = pW, v1(v0)
		}), e.addEventListener("mousemove", v2), e.addEventListener("mouseout", by.uW), e.addEventListener("click", by.uW)
	}, this.uW = function() {
		clearTimeout(uy), uv = "", fE()
	}, t4.style.position = "fixed", t4.style.backgroundColor = bE.qJ, t4.style.color = bE.qN, t4.style.pointerEvents = "none", t4.style.zIndex = "6", t4.style.padding = "0.2em 0.5em"
}

function v5() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.t6.tB(this.e, 8, bE.qW)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function v6() {
	var uw, ux, t4 = document.createElement("div"),
		v7 = document.createElement("div"),
		uu = 0,
		v8 = 0;
	this.show = function(fp, fr, pW, v9, vA, es) {
			if (uu) {
				if (!v9) return;
				this.uW()
			}
			fp === fr && -1 === fp ? (fp = uw, fr = ux) : (uw = fp, ux = fr);
			var vB = Math.floor(bD.t6.t7(.018)),
				vA = (fp = Math.max(vB + 2, fp), vA || (v8 = v9), uu = 1, i.j / i.l),
				v9 = (t4.style.whiteSpace = "pre", t4.textContent = pW, bD.t6.tB(t4, 5), t4.style.font = bD.t6.t9(0, bD.t6.t7(.015)), t4.style.padding = "0.3em 0.6em", t4.style.left = fp + "px", t4.style.top = "0px", document.body.appendChild(t4),
					fp + t4.offsetWidth - vA),
				pW = (0 < v9 && (fp -= v9, fp = Math.max(vB + 1, fp), t4.style.left = fp + "px", fp < vB + 2) && (t4.style.whiteSpace = "pre-wrap"), t4.offsetHeight);
			t4.style.top = fr - pW + v8 * bf.vE + "px", fp -= vB, v7.style.backgroundColor = bD.color.qF(es >> 12 << 2, (es >> 6 & 63) << 2, (63 & es) << 2), v7.style.left = fp + "px", v7.style.top = t4.style.top, v7.style.width = vB + "px", v7.style
				.height = pW + "px", bD.t6.tB(v7, 4), bD.t6.tB(v7, 8), bD.t6.tB(v7, 2), document.body.appendChild(v7)
		}, this.uW = function(vF) {
			if (uu) {
				if (vF && v8) return 0;
				uu = 0, u.removeChild(document.body, t4), u.removeChild(document.body, v7)
			}
			return 1
		}, t4.style.position = "absolute", t4.style.backgroundColor = bE.qJ, t4.style.color = bE.qN, t4.style.pointerEvents = "none", t4.style.zIndex = "5", t4.style.maxWidth = "100%", v7.style.position = "absolute", v7.style.color = bE.qN, v7.style
		.pointerEvents = "none", v7.style.zIndex = "5"
}

function uK(vG, type, vH, vI) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vJ++, e.value = vG.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qN, e.style.backgroundColor = bE.qG, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vK++
		}), e.addEventListener("blur", function() {
			i.vK--, -1 !== vG.eR && bm.rt.pz(vG.eR, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vG.eR && bm.rt.pz(vG.eR, e.value), vH ? vH() : e.blur())
		}), vI && e.addEventListener("input", function(q3) {
			vI(q3)
		})
}

function vL(tU, data, vM) {
	var fi = data.vN.length,
		vO = document.createElement("div"),
		vP = document.createElement("div"),
		pP = document.createElement("div"),
		vQ = new Array(fi),
		tV = new Array(fi),
		vR = new Array(data.vS.length),
		vT = bD.color.qH(70, 70, 0, .35);

	function u3() {
		this.style.backgroundColor = bD.color.u3(vT, 160)
	}

	function va() {
		this.style.backgroundColor = vT
	}

	function tc() {
		var g1;
		for (tU.style.font = bD.t6.t9(0, bD.t6.vh(.026, .5, .03)), aC = 1; aC < vR.length; aC++) bD.t6.tB(vR[aC], 4);
		if (bD.t6.tB(vO, 2), fi) {
			for (var iB, vi = vO.offsetWidth, vj = pP.offsetWidth, aC = 0; aC < vR.length; aC++) iB = .01 * data.vZ[aC] * vj, vR[aC].style.width = (100 * iB / vi).toFixed(2) + "%";
			var lz = data.vN[0].length;
			for (aC = 0; aC < fi; aC++)
				for (bD.t6.tB(vQ[aC], 2), g1 = 1; g1 < lz; g1++) bD.t6.tB(tV[aC][g1], 4);
			vP.vU && (vP.scrollTop = vP.vU)
		}
	}
	this.resize = function() {
			tc(), tc()
		}, tU.style.display = "flex", tU.style.flexDirection = "column", vP.style.overflowX = "hidden", vP.style.overflowY = "auto", vP.addEventListener("scroll", function() {
			this.vU = this.scrollTop, vM && vM.vV && (u.z.vW[vM.vV] = this.scrollTop)
		}),
		function() {
			var fl, aC, vN = data.vN,
				lz = fi ? vN[0].length : 0;
			for (aC = 0; aC < fi; aC++) {
				vQ[aC] = document.createElement("div"), vQ[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qH(130, 130, 130, .35) : bE.qM
				}(aC), vQ[aC].style.width = "100%", vQ[aC].style.display = "flex", tV[aC] = new Array(lz);
				for (var g1 = 0; g1 < lz; g1++) tV[aC][g1] = fl = document.createElement("div"), fl.style.display = "flex", fl.style.justifyContent = "center", fl.style.wordBreak = "break-all", fl.style.padding = "0.4em 0em", fl.style.width = data
					.vZ[g1] + "%", fl.textContent = vN[aC][g1].gA, 1 === vN[aC][g1].ej && (fl.name = "" + aC, fl.style.color = bE.rS, fl.style.backgroundColor = vT, fl.addEventListener("mouseover", u3), fl.addEventListener("mouseout", va), function(
						fl, pe, vc) {
						2147483647 !== vc && fl.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pe), bK.dt(bG.aD), this.style.backgroundColor = vT, u.v(8, u.vd, new ve(25, {
								action: 0,
								pe: bI.f9.vf(bI.f9.vg(5)),
								vc: vc
							}))
						})
					}(fl, vN[aC][g1].pe, vN[aC][g1].vc)), vQ[aC].appendChild(fl)
			}
			for (vO.style.display = "flex", vO.style.backgroundColor = bD.color.qH(0, 120, 0, .35), aC = 0; aC < vR.length; aC++) vR[aC] = fl = document.createElement("div"), fl.style.display = "flex", fl.style.justifyContent = "center", fl.style
				.wordBreak = "break-all", fl.style.padding = "0.4em 0em", fl.style.width = data.vZ[aC] + "%", fl.innerHTML = data.vS[aC], vO.appendChild(fl)
		}();
	for (var aC = 0; aC < fi; aC++) pP.appendChild(vQ[aC]);
	vP.appendChild(pP), tU.appendChild(vO), tU.appendChild(vP), vM && vM.vV && (vP.vU = u.z.vW[vM.vV])
}

function vk() {
	var vo, vp, vl = document.createElement("div"),
		vm = document.createElement("div"),
		vn = document.createElement("div"),
		pP = document.createElement("div"),
		p7 = [],
		eM = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		vq = [1, 2, 3, 0, 9, 10, 11, 13];

	function vs(aC) {
		u.v(8, 0, new ve(21, {
			vu: vq[aC],
			vv: 0,
			vw: 10
		}))
	}
	this.show = function() {
			this.pz(u.z.vx), document.body.appendChild(vl)
		}, this.uW = function() {
			u.removeChild(document.body, vl)
		}, this.pz = function(vx) {
			for (var vy = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p7.length; aC++) {
				var j = vx[aC];
				vo[vy[aC]][1].uU.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, vz = bf.gap,
				k = bD.t6.w0(.085),
				j = Math.min(4 * k, i.j - 2 * vz),
				fi = p7.length;
			for (bD.t6.w1(vl, vz, i.k - vz - k, j, k), bD.t6.tB(vl), bD.t6.tB(vm, 6), aC = 0; aC < fi - 1; aC++) bD.t6.tB(p7[aC].button, 6);
			for (aC = 0; aC < fi; aC++) vo[aC][0].resize(), vo[aC][1].resize();
			for (p7[0].fp = 0, p7[0].button.style.left = bD.t6.th(p7[0].fp), p7[0].button.style.width = bD.t6.w2(1.7 * k), aC = 1; aC < fi; aC++) p7[aC].fp = p7[aC - 1].fp + p7[aC - 1].button.offsetWidth, p7[aC].button.style.left = bD.t6.th(p7[aC]
				.fp);
			if (!vp) {
				if (!ac.w3()) return;
				(vp = ac.get(14)).style.width = "24%", vp.style.position = "absolute", vm.appendChild(vp)
			}
			vp.style.left = bD.t6.th(0), vp.style.top = "7%", vn.w4 && (vn.scrollLeft = vn.w4)
		}, vl.style.position = "absolute", vm.style.width = "25%", vm.style.height = "100%", vm.style.backgroundColor = bE.qJ, vn.style.position = "absolute", vn.style.width = "75%", vn.style.height = "100%", vn.style.backgroundColor = bE.qJ, vn
		.style.top = vn.style.right = bD.t6.th(0), bD.t6.vr(vn), pP.style.height = pP.style.maxHeight = "100%", p7.push(new x("", function() {
			vs(0)
		}, bE.r9)), p7.push(new x("", function() {
			vs(1)
		}, bE.rA)), p7.push(new x("", function() {
			vs(2)
		}, bE.r2)), p7.push(new x("", function() {
			vs(3)
		}, bE.ql)), p7.push(new x("", function() {
			vs(4)
		}, bE.rd)), p7.push(new x("", function() {
			vs(5)
		}, bE.rZ)), p7.push(new x("", function() {
			vs(6)
		}, bE.rd)), p7.push(new x("", function() {
			vs(7)
		}, bE.qE)), vo = new Array(p7.length);
	for (var aC = 0; aC < p7.length; aC++) p7[aC].button.style.position = "absolute", vo[aC] = [new vt(eM[aC], p7[aC].button, .25, .45), new vt("", p7[aC].button, .53, .84, 1)], p7[aC].button.style.height = p7[aC].button.style.maxHeight = "100%", p7[
		aC].button.top = bD.t6.th(0), pP.appendChild(p7[aC].button);
	vn.appendChild(pP), vl.appendChild(vm), vl.appendChild(vn)
}

function w5(w6, w7, uE, uF, w8) {
	var w9 = document.createElement("div"),
		wA = document.createElement("div"),
		wB = document.createElement("div"),
		pp = document.createElement("div"),
		wC = document.createElement("div"),
		wD = document.createElement("div"),
		wE = document.createElement("span"),
		wF = document.createElement("div"),
		wL = (this.wG = new uD(uE, uF), this.wH = new wI(uF), this.wJ = new wK(w8), 2);
	this.wP = function(wQ) {
		wQ = (wQ / 10).toFixed(1) + "%";
		wD.style.width = wQ, wE.innerHTML = wQ
	}, this.wR = function(wS) {
		(0 === wL ? this.wG : 1 === wL ? this.wH : this.wJ).uW(pp), (0 === (wL = wS) ? this.wG : 1 === wS ? this.wH : this.wJ).show(pp)
	}, this.wT = function() {
		return wA
	}, this.show = function() {
		document.body.appendChild(w9)
	}, this.uW = function() {
		u.removeChild(document.body, w9)
	}, this.resize = function() {
		var wU = 1 - .4 * a1.a2.iv() * (i.j > 1.6 * i.k),
			wV = bD.t6.t7(.05 * wU),
			wW = 1.3 * wV,
			wX = i.k > i.j,
			wY = bD.t6.t7(.06 * wU + .03 * wX),
			wX = bD.t6.t7(.02 * wU + .01 * wX),
			wa = bD.t6.t7(.025);
		w9.style.font = bD.t6.t9(0, wa), wB.style.font = bD.t6.t9(0, .9 * wa), wF.style.font = bD.t6.t9(0, .9 * wa), wU < 1 && (wU = bD.t6.t9(0, wU * wa), wB.style.font = wU, wF.style.font = wU, wC.style.font = wU), wA.style.height = bD.t6.th(
			wW), wA.style.font = bD.t6.t9(0, .72 * wV), bD.t6.tB(wA, 2), wB.style.top = bD.t6.th(wW), wB.style.height = bD.t6.th(wY), bD.t6.tB(wB, 2), pp.style.top = bD.t6.th(wW + wY), pp.style.height = bD.t6.th(i.k / i.l - wW - 2 * wY - wX), wC
			.style.top = bD.t6.th(i.k / i.l - wY - wX), wC.style.height = bD.t6.th(wX), bD.t6.tB(wC, 8), wE.style.font = bD.t6.t9(0, .8 * wX), wF.style.top = bD.t6.th(i.k / i.l - wY), wF.style.height = bD.t6.th(wY), bD.t6.tB(wF, 8), w6.resize(
			w9), w7.resize(w9), 0 === wL ? this.wG.resize(pp) : (1 === wL ? this.wH : this.wJ).resize()
	};
	uE = this;
	w9.style.position = "absolute", w9.style.top = "0", w9.style.left = "0", w9.style.width = "100%", w9.style.height = "100%", w9.style.backgroundColor = bE.qM, bM.u0() || (w9.style.backdropFilter = "blur(4px)", w9.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (w9.style.display = "none"), wA.style.position = "absolute", wA.style.top = "0", wA.style.left = "0", wA.style.width = "100%", wA.style.display = "flex", wA.style.alignItems = "center", wA.translate = !1;
	for (var h = [wB, wF], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.t6.vr(h[aC]);
	pp.style.position = "absolute", pp.style.left = "0", pp.style.width = "100%", pp.style.font = "inherit", wC.style.position = "absolute", wC.style.left = "0", wC.style.width = "100%", wD.style.position = "absolute", wD.style.top = "0", wD.style
		.left = "0", wD.style.height = "100%", wD.style.width = "50%", wD.style.backgroundColor = bE.qj, wE.innerHTML = "", wE.style.position = "absolute", wE.style.top = "50%", wE.style.left = "50%", wE.style.transform = "translate(-50%, -50%)", wE
		.translate = !1, wA.appendChild(function() {
			var wO = document.createElement("h1");
			return wO.textContent = L(31), wO.style.margin = "0 auto 0.55em auto", wO.style.fontFamily = "Arial Black, system-ui", wO.style.fontSize = "inherit", wO.style.fontWeight = "inherit", wO
		}()), wB.appendChild(w6.tH), wC.appendChild(wD), wC.appendChild(wE), wF.appendChild(w7.tH), w9.appendChild(wA), w9.appendChild(wB), w9.appendChild(pp), w9.appendChild(wC), w9.appendChild(wF), w9.className = "fx-lobby", pp.className =
		"fx-panel", wC.className = "fx-progress", uE.wJ.show(pp)
}

function wK(w8) {
	var w9 = document.createElement("div"),
		wc = [],
		wd = 96,
		we = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function wu(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wi(button, x8) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.left = "0", tH.style.width = "100%", tH.style.height = "20%", tH.style.pointerEvents = "none", tH.style.backgroundColor = bE.qG, x8 ? tH.style.top = "0" : tH.style.bottom = "0", button
			.appendChild(tH), tH
	}

	function wl(x9, xA) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.top = "0", tH.style.width = "20%", tH.style.height = "100%", xA ? tH.style.left = "0" : tH.style.right = "0", x9.appendChild(tH), tH
	}

	function ww(xB) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, wu(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", xB.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wp(x9, left, right, width) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.top = "50%", tH.style.transform = "translateY(-50%)", tH.style.left = left, tH.style.right = right, tH.style.width = width, tH.style.textAlign = "left", x9.appendChild(tH), {
			tH: tH,
			x3: xE(tH, 1.9),
			ws: xE(tH, 1)
		}
	}

	function xE(ow, fontSize) {
		var tH = document.createElement("div");
		return tH.style.fontSize = fontSize + "em", tH.style.lineHeight = "1.1", tH.style.whiteSpace = "nowrap", tH.style.overflow = "hidden", tH.style.textOverflow = "ellipsis", tH.style.textShadow = "0 0 0.25em black", ow.appendChild(tH), tH
	}

	function xF(e, pW) {
		e.textContent !== pW && (e.textContent = pW)
	}

	function xG(q3) {
		q3.canvas && (bq.xH.xb(q3.canvas), q3.canvas = null), q3.x2 = ""
	}
	this.nT = function() {
		var tV = bq.tV.tV,
			fi = tV.length;
		if (fi !== wc.length) {
			for (var aC = 0; aC < wc.length; aC++) xG(wc[aC]);
			for (w9.textContent = "", wc = new Array(fi), aC = 0; aC < fi; aC++) wc[aC] = function(eR) {
				var button = document.createElement("button"),
					wh = (button.style.position = "absolute", button.style.backgroundColor = bE.qM, button.style.color = bE.qN, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.t6.wg(button, function() {
							w8(eR, 0)
						}, function() {
							w8(eR, 1)
						}), bD.t6.tB(button), wi(button, 1)),
					wj = wi(button, 0),
					wk = wl(wh, 0),
					wm = wl(wj, 1),
					wn = wl(wj, 0),
					wo = wp(wh, "3%", "", "74%"),
					wq = wp(wj, "20%", "", "30%"),
					wr = wp(wj, "", "20%", "30%"),
					wt = (wr.tH.style.textAlign = "right", wq.ws.textContent = "Starts in", document.createElement("canvas"));
				return wt.width = wt.height = wd, wu(wt), wk.appendChild(wt), (button = {
					button: button,
					wh: wh,
					wj: wj,
					wv: ww(wm),
					wx: ww(wn),
					wy: 0,
					isContest: 0,
					wz: null,
					wk: wk,
					wt: wt,
					x0: wt.getContext("2d", {
						alpha: !0
					}),
					x1: -1,
					canvas: null,
					x2: "",
					map: wo.x3,
					x4: wo.ws,
					x5: wq.x3,
					x6: wr.x3,
					x7: wr.ws,
					ht: -1
				}).map.translate = !1, button.x4.translate = !1, button.x5.translate = !1, wq.ws.translate = !1, button
			}(aC), w9.appendChild(wc[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fi; aC++) wc[aC].x2 !== bq.xH.xI(tV[aC].fO, tV[aC].mapSeed) && xG(wc[aC]);
		for (aC = 0; aC < fi; aC++) {
			var xJ = tV[aC],
				q3 = wc[aC],
				ht = xJ.id === bq.tV.xK ? 1 + bq.tV.xL : 0,
				hB = bq.tV.xM(xJ);
			xF(q3.map, bV.xN.xO[xJ.fO]), xF(q3.x4, bq.tV.xP(xJ.x4)), xF(q3.x5, bq.tV.xQ(xJ.xR)), xF(q3.x6, hB + (bq.tV.xS(xJ) ? "/" + xJ.nb : "")), xF(q3.x7, L(1 === hB ? 32 : 33)), q3.ht !== ht && (q3.ht = ht, q3.wh.style.backgroundColor = q3.wj
				.style.backgroundColor = [bE.qG, bE.qt, bE.rL][ht], bD.t6.tB(q3.button, 5, [bE.qN, bE.qu, bE.rM][ht]), q3.button.classList.toggle("fx-line", !ht)), ! function(q3) {
				!q3.wy && ac.w3() && (q3.wy = 1, q3.wv.drawImage(ac.xD("clock"), 0, 0), q3.wx.drawImage(ac.xD("userIcon"), 0, 0))
			}(q3), ! function(q3, x4) {
				q3.x1 === x4 || 7 <= x4 && !ac.w3() || ((q3.x1 = x4) < 7 ? bk.xZ(q3.x0, x4 + 2, wd) : (q3.x0.clearRect(0, 0, wd, wd), q3.x0.drawImage(ac.xD(we[x4 - 7]), 0, 0, wd, wd)))
			}(q3, xJ.x4), ! function(q3, isContest) {
				q3.isContest === isContest || isContest && !ac.w3() || ((q3.isContest = isContest) ? (q3.wz || (q3.wz = function(q3) {
					var xY = ac.xD("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xY.width, canvas.height = xY.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xY, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q3.button.insertBefore(canvas, q3.wh), canvas
				}(q3)), q3.wz.hidden = !1) : q3.wz.hidden = !0)
			}(q3, xJ.xV), ! function(q3, xJ) {
				var canvas;
				q3.canvas || (canvas = bq.xH.xa(xJ.fO, xJ.mapSeed)) && (q3.canvas = canvas, q3.x2 = bq.xH.xI(xJ.fO, xJ.mapSeed), wu(canvas), q3.button.insertBefore(canvas, q3.button.firstChild))
			}(q3, xJ)
		}
	}, this.resize = function() {
		var fi = wc.length,
			j = w9.offsetWidth,
			k = w9.offsetHeight;
		if (0 !== fi && 0 !== j && 0 !== k) {
			for (var gap = bD.t6.t7(.012), xc = 0, xd = 1, es = 1; es <= fi; es++) {
				var rows = bO.g9(fi + es - 1, es),
					rows = Math.min((j - (es + 1) * gap) / es, (k - (rows + 1) * gap) / rows);
				xc < rows && (xc = rows, xd = es)
			}
			for (var xe = bO.g9(fi + xd - 1, xd), o7 = (j - xd * xc - (xd - 1) * gap) / 2, o8 = (k - xe * xc - (xe - 1) * gap) / 2, aC = 0; aC < fi; aC++) {
				var qD = wc[aC].button.style;
				qD.left = bD.t6.th(o7 + aC % xd * (xc + gap)), qD.top = bD.t6.th(o8 + bO.g9(aC, xd) * (xc + gap)), qD.width = qD.height = bD.t6.th(xc), qD.fontSize = bD.t6.th(.05 * xc)
			}
		}
	}, this.show = function(tU) {
		tU.appendChild(w9), this.nT(), this.resize()
	}, this.uW = function(tU) {
		u.removeChild(tU, w9)
	}, w9.style.position = "absolute", w9.style.top = "0", w9.style.left = "0", w9.style.width = w9.style.height = "100%", w9.style.overflow = "hidden", w9.style.font = "inherit"
}

function wI(uF) {
	var uU, xB, w9 = document.createElement("div"),
		pp = document.createElement("div"),
		xf = null,
		xg = null;
	this.nT = function() {
			pp.textContent = "", bq.xj.xk && bq.xj.uW(1);
			for (var pu = document.createDocumentFragment(), x6 = bq.pm.xl, tV = bq.tV.tV, xm = 0, aC = 0; aC < tV.length; aC++) xm = xm || 8 === tV[aC].x4;
			for (xf.style.width = xf.style.maxWidth = xm ? "11.3em" : "10.3em", aC = 0; aC < x6.length; aC++) {
				var eR = bq.tV.xn(x6[aC].xo);
				! function(pu, q3, eR, xq) {
					var uU = xf.cloneNode(!0),
						xB = uU.firstChild;
					xB.style.backgroundColor = 0 <= eR && q3.xr ? bE.rO : xg[eR < 0 ? 15 : Math.min(eR, 14)], 0 <= eR && (xB.textContent = "" + (eR + 1));
					uU.lastChild.textContent = bq.lt.xs(q3, xq), uU.style.color = bq.lt.xt(q3.xu), 11 === q3.xu && (uU.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (xB = __fx.utils.getDuplicateIpHighlightColor(q3, bq.pm.xl, "aHv")) && (uU.style.backgroundColor = xB, uU.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eR = __fx.utils.getSameClanHighlightColor(q3, bq.pk, "username")) && (uU.style.backgroundColor ? uU.style.boxShadow = "inset 0 0 0 2px " + eR : uU.style.backgroundColor = eR, uU.style
						.borderRadius = "0.3em");
					bq.lt.xv(q3) && (uU.style.textDecoration = "underline"), q3.xw && (uU.style.textDecorationLine = "underline", uU.style.textDecorationStyle = "dotted");
					uU.onclick = function(e) {
						uF(e, q3)
					}, bM.u0() || (uU.onmouseover = function(e) {
						bq.xj.xx(uU, q3, 1)
					}), pu.appendChild(uU)
				}(pu, x6[aC], eR, 0 <= eR && 8 === tV[eR].x4)
			}
			pp.appendChild(pu), pp.classList.toggle("fx-wide", !!xm)
		}, this.show = function(tU) {
			tU.appendChild(w9)
		}, this.uW = function(tU) {
			u.removeChild(tU, w9)
		}, this.resize = function() {
			pp.style.fontSize = bD.t6.th(bD.t6.t7(.02, .3))
		}, w9.style.top = "0", w9.style.left = "0", w9.style.width = w9.style.height = "100%", w9.style.overflowX = "hidden", w9.style.overflowY = "auto", w9.style.font = "inherit", pp.style.font = "inherit", pp.style.margin = "0.4em", w9
		.appendChild(pp), w9.className = "fx-players-scroll", pp.className = "fx-players", (uU = document.createElement("span")).style.cursor = "pointer", uU.style.margin = "0.2em 0.2em 0.2em 0.2em", uU.style.height = uU.style.maxHeight = "1.4em", uU
		.style.whiteSpace = "nowrap", uU.style.overflow = "hidden", uU.style.textOverflow = "ellipsis", uU.style.font = "inherit", uU.style.display = "inline-block", (xB = document.createElement("span")).style.display = "inline-block", xB.style
		.width = xB.style.height = xB.style.lineHeight = "1.3em", xB.style.marginRight = "0.4em", xB.style.fontSize = "0.8em", xB.style.fontWeight = "bold", xB.style.textAlign = "center", xB.style.color = bE.qE, xB.style.textShadow = "none", xB.style
		.textDecoration = "none", xB.style.pointerEvents = "none", xB.translate = !1, uU.appendChild(xB), uU.appendChild(document.createTextNode("")), xf = uU, xg = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function xy(xz) {
	var w9 = document.createElement("div"),
		uH = document.createElement("div"),
		y0 = [];

	function tv() {
		bM.u0() || (this.style.backgroundColor = bD.color.u3(bE.qJ, 50))
	}

	function tw() {
		this.style.backgroundColor = bE.qJ
	}
	this.pz = function(y2, y3) {
			y0[2].textContent = y2 + 1 + " / " + y3
		}, this.show = function(q3) {
			q3 = bq.lt.pw(q3, bq.lt.px(q3)), uH.appendChild(bq.q5.transform(q3)), document.body.appendChild(w9)
		}, this.resize = function() {
			var k = bD.t6.t7(.03, .5);
			w9.style.width = 10 * k + "px", w9.style.font = bD.t6.t9(1, .75 * k), bD.t6.tB(w9, 4), uH.style.top = k + "px", uH.style.font = bD.t6.t9(0, .55 * k), bD.t6.tB(uH, 2), w9.style.height = k + uH.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.t6.tB(y0[aC], 6), y0[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) y0[aC].style.height = k + "px", bD.t6.tB(y0[aC], 2);
			y0[2].style.width = 4 * k + "px", y0[1].style.left = 2 * k + "px", y0[2].style.left = 4 * k + "px", y0[3].style.left = 8 * k + "px"
		}, this.y4 = function() {
			for (var aC = 0; aC < 4; aC++) y0[aC].onclick = null, y0[aC].onmouseover = null, y0[aC].onmouseout = null;
			u.removeChild(document.body, w9), w9 = uH = y0 = null
		}, w9.style.position = "absolute", w9.style.color = bE.qN, w9.style.zIndex = "3", w9.style.right = "0", w9.style.top = "0", uH.style.position = "absolute", uH.style.height = "auto", uH.style.color = bE.qN, uH.style.backgroundColor = bE.qJ, uH
		.style.left = "0", uH.style.width = "100%", uH.style.overflowWrap = "break-word", w9.appendChild(uH);
	for (var aC = 0; aC < 4; aC++) y0[aC] = document.createElement("div"), y0[aC].style.position = "absolute", y0[aC].style.backgroundColor = bE.qJ, y0[aC].style.color = bE.qN, y0[aC].style.top = "0", y0[aC].style.display = "flex", y0[aC].style
		.justifyContent = "center", y0[aC].style.alignItems = "center", y0[aC].style.userSelect = "none", y0[aC].style.outline = "none", y0[aC].style.font = "inherit", 2 !== (y0[aC].y1 = aC) && (y0[aC].onclick = xz, y0[aC].onmouseover = tv, y0[aC]
			.onmouseout = tw), w9.appendChild(y0[aC]);
	y0[0].textContent = "◀", y0[1].textContent = "▶", y0[3].textContent = "✖"
}

function y5(xz) {
	var t4 = document.createElement("div");

	function tv() {
		bM.u0() || (t4.style.backgroundColor = bD.color.u3(bE.qJ, 50))
	}

	function tw() {
		t4.style.backgroundColor = bE.qJ
	}
	this.pz = function(y3) {
			t4.textContent = y3
		}, this.show = function() {
			document.body.appendChild(t4)
		}, this.resize = function() {
			var k = bD.t6.t7(.03, .5);
			t4.style.width = 2 * k + "px", t4.style.height = k + "px", t4.style.font = bD.t6.t9(1, .75 * k), bD.t6.tB(t4, 4), bD.t6.tB(t4, 2)
		}, this.y4 = function() {
			t4.onclick = null, t4.onmouseover = null, t4.onmouseout = null, u.removeChild(document.body, t4), t4 = null
		}, t4.style.position = "absolute", tw(), t4.style.color = bE.qN, t4.style.zIndex = "3", t4.style.right = "0", t4.style.top = "0", t4.style.display = "flex", t4.style.justifyContent = "center", t4.style.alignItems = "center", t4.style
		.userSelect = "none", t4.style.outline = "none", t4.onclick = xz, t4.onmouseover = tv, t4.onmouseout = tw
}

function y6(ul, y7) {
	var w9 = document.createElement("div"),
		y8 = document.createElement("div"),
		y9 = (y7 = y7 || 1, Math.floor((ul.length + y7 - 1) / y7)),
		yA = [],
		yB = [],
		uu = (this.fp = 0, this.fr = 0);

	function yE() {
		bq.yF.uW()
	}
	this.p7 = ul, this.show = function(fp, fr, yI) {
			if (uu) return [0, 0];
			uu = 1, this.fp = fp, this.fr = fr,
				function(self, yI) {
					var j = bD.t6.t7(.16, .7),
						k = y9 * j / 3,
						v4 = (j *= y7, i.j / i.l),
						yK = i.k / i.l,
						oJ = Math.min(1, Math.min(v4 / j, yK / k));
					j *= oJ, k *= oJ, yI && (self.fp += bD.t6.t7(.03, .5)), self.fp = bO.iu(self.fp, 0, v4 - j), self.fr = bO.iu(self.fr, 0, yK - k), y8.style.left = self.fp + "px", y8.style.top = self.fr + "px", y8.style.width = j + "px", y8.style
						.height = k + "px", y8.style.font = bD.t6.t9(0, .3 * k / y9), bD.t6.tB(y8, 5);
					for (var aC = 1; aC < yA.length; aC++) yB[aC][0] && bD.t6.tB(yA[aC], 8), yB[aC][1] && bD.t6.tB(yA[aC], 4)
				}(this, yI), document.body.appendChild(w9)
		}, this.uW = function() {
			uu && (uu = 0, w9.removeEventListener("click", yE), u.removeChild(document.body, w9))
		},
		function() {
			var aC, fi = ul.length;
			for (aC = 0; aC < fi; aC++) yA.push(ul[aC].button);
			for (aC = fi; 1 < y7 && aC < y9 * y7; aC++) {
				var e = document.createElement("div");
				e.style.backgroundColor = bE.qJ, yA.push(e)
			}
			for (aC = 0; aC < yA.length; aC++) yB.push([aC % y9, Math.floor(aC / y9)])
		}();
	for (var aC = 0; aC < ul.length; aC++) new uS("" + (1 + aC), ul[aC].button, 0, 1);
	w9.style.position = "fixed", w9.style.top = "0", w9.style.left = "0", w9.style.width = "100%", w9.style.height = "100%", w9.style.zIndex = "5", y8.style.position = "absolute",
		function() {
			if (1 < y7) ! function() {
				y8.style.display = "grid", y8.style.gridTemplateColumns = "repeat(" + y7 + ", 1fr)", y8.style.gridTemplateRows = "repeat(" + y9 + ", 1fr)";
				for (var aC = 0; aC < yA.length; aC++) {
					var qD = yA[aC].style;
					qD.width = qD.height = qD.maxHeight = "100%", qD.padding = "0.0em 0.9em", qD.gridRow = "" + (yB[aC][0] + 1), qD.gridColumn = "" + (yB[aC][1] + 1), y8.appendChild(yA[aC])
				}
			}();
			else
				for (var yH = (100 / ul.length).toFixed(2) + "%", aC = 0; aC < ul.length; aC++) ul[aC].button.style.width = "100%", ul[aC].button.style.height = ul[aC].button.style.maxHeight = yH, ul[aC].button.style.padding = "0.0em 0.9em", y8
					.appendChild(ul[aC].button)
		}(), w9.appendChild(y8), w9.addEventListener("click", yE)
}

function et() {
	var yL, yM, yN;

	function yT(aC) {
		return bD.color.qF(yM[aC][0], yM[aC][1], yM[aC][2])
	}

	function yZ(g1, g2) {
		return bD.color.yi(yM[g1], yM[g2]), yT(g2)
	}

	function yR() {
		yL && (yL.remove(), yL = null)
	}
	this.show = function(eu, colors, id) {
		0 <= (yN = id) && b1.z.eo(0) && b1.ep.yO(0, id), eu = (eu = (eu = (eu = (eu = (eu = (eu = (eu = (eu = (eu = (eu = (eu = eu.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yM = colors, (yL = document.createElement("div")).style.position = "fixed", yL.style.top = "0", yL.style.left = "0", yL.style.width = "100%", yL.style.height = "100%", yL.style.backgroundColor = bD.color.qH(yM[0][0], yM[0][1], yM[0][
				2], .6), yL.style.zIndex = "6", yL.onclick = function(e) {
				e.target === yL && yR()
			},
			function(eu) {
				var ih, yS = document.createElement("div");
				yS.style.position = "absolute", yS.style.display = "flex", yS.style.flexDirection = "column", yS.style.top = "50%", yS.style.left = "50%", yS.style.backgroundColor = yT(2), ih = a1.a2.iv() ? bD.t6.yU(i.min) : bD.t6.t7(.4);
				ih = Math.max(ih, 200), yS.style.width = bD.t6.th(ih), yS.style.height = bD.t6.th(ih), yS.style.transform = "translate(-50%, -50%)",
					function(yS, ih) {
						var yY = document.createElement("div");
						yY.style.flex = "0 0 10%", yY.style.overflow = "hidden", yY.style.backgroundColor = yT(1), yY.style.color = yZ(1, 7), yY.style.font = bD.t6.t9(1, .05 * ih), yY.style.display = "flex", yY.style.alignItems = "center", yY
							.style.justifyContent = "center", yY.innerHTML = L(34), yS.appendChild(yY)
					}(yS, ih),
					function(yS, eu, ih) {
						var ya = document.createElement("div");
						ya.style.flex = "0 0 70%", ya.style.overflowY = "auto", ya.style.overflowX = "hidden", ya.style.whiteSpace = "pre-wrap", ya.style.wordWrap = "break-word", ya.style.padding = bD.t6.th(.02 * ih), ya.style.backgroundColor =
							yT(2), ya.style.color = yZ(2, 8), ya.style.font = bD.t6.t9(0, .07 * ih), ya.innerHTML = eu, ya.innerHTML = "<style>a { color: inherit; }</style>" + ya.innerHTML, yS.appendChild(ya)
					}(yS, eu, ih),
					function(yS, ih) {
						var ow = document.createElement("div"),
							yb = (ow.style.display = "flex", ow.style.flexDirection = "row", ow.style.justifyContent = "space-between", ow.style.alignItems = "stretch", ow.style.backgroundColor = yT(3), ow.style.flex = "1", ow.style.padding = bD
								.t6.th(.01 * ih), ow.style.gap = bD.t6.th(.01 * ih), document.createElement("div")),
							yc = (yb.style.flex = "0 0 60%", yb.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yR()
							}, yT(4), !1)),
							yc = (yc.button.style.width = "100%", yc.button.style.height = "100%", yc.button.style.color = yZ(4, 9), yc.button.style.font = bD.t6.t9(1, .05 * ih), yb.appendChild(yc.button), document.createElement("div")),
							ye = (yc.style.flex = "0 0 15%", yc.style.height = "100%", yc.style.backgroundColor = yT(5), document.createElement("div")),
							yf = (ye.style.flex = "1", ye.style.height = "100%", new x(L(36), function(e) {
								return bD.t6.yg(e), yN < 0 || b1.z.eo(0) && (b1.ep.yO(1, yN), yN = -1), !0
							}, yT(6), !1));
						yf.button.style.width = "100%", yf.button.style.height = "100%", yf.button.style.color = yZ(6, 10), yf.button.style.font = bD.t6.t9(1, .035 * ih), ye.appendChild(yf.button), ow.appendChild(yb), ow.appendChild(yc), ow
							.appendChild(ye), yS.appendChild(ow)
					}(yS, ih), yL.appendChild(yS)
			}(eu), document.body.appendChild(yL)
	}
}

function yj(vG, yk) {
	this.tR = [];
	var yl = this.tR;

	function click() {
		for (var aC = 0; aC < yl.length; aC++) yl[aC].textContent = yl[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eR = parseInt(this.name);
		void 0 !== vG.eR && bm.rt.pz(vG.eR, eR), yk && yk(eR)
	}
	for (var ym, fi = vG.vM.length, aC = 0; aC < fi; aC++)(ym = document.createElement("p")).textContent = "⚪ " + vG.vM[aC], ym.style.margin = "0", ym.name = "" + aC, ym.style.cursor = "pointer", ym.style.fontSize = "1em", ym.addEventListener(
		"click", click), yl.push(ym);
	yl[vG.value].textContent = yl[vG.value].textContent.replace("⚪", "🟢")
}

function yn(title, yo, yp) {
	var vl = document.createElement("div"),
		pO = document.createElement("div"),
		pP = document.createElement("div"),
		yq = document.createElement("div"),
		yr = document.createElement("div");
	this.ys = pP, this.yt = yo, vl.className = "fx-page", this.show = function() {
			!1 !== yp ? document.body.appendChild(vl) : (document.body.appendChild(pO), document.body.appendChild(yq))
		}, this.uW = function() {
			!1 !== yp ? u.removeChild(document.body, vl) : (u.removeChild(document.body, pO), u.removeChild(document.body, yq))
		}, this.yx = function() {
			var uY = bD.t6.t7(.1),
				uX = bD.t6.t7(.08 + .04 * (i.yy < 1), .3);
			return {
				uY: uY,
				uX: uX,
				yz: i.k / i.l - uY - uX
			}
		}, this.resize = function(uq) {
			var fi = yo.length,
				z0 = this.yx(),
				uY = z0.uY,
				uX = z0.uX;
			for (pO.style.height = bD.t6.th(uY), bD.t6.tB(pO, 2), yq.style.top = bD.t6.th(i.k / i.l - uX), yq.style.height = bD.t6.th(uX), bD.t6.tB(yq, 8), pP.style.top = bD.t6.th(uY), pP.style.height = pP.style.maxHeight = bD.t6.th(z0.yz), pO.style
				.font = bD.t6.t9(0, bD.t6.t7(.02, .15)), yq.style.font = bD.t6.t9(0, bD.t6.t7(.02, .7)), pP.style.font = bD.t6.t9(0, bD.t6.t7(.02, .35)), aC = 1; aC < fi; aC++) bD.t6.tB(yo[aC].button, 4);
			for (var ur = 0, aC = 0; aC < fi; aC++) ur += yo[aC].button.offsetWidth;
			if (uq && ur < yq.offsetWidth)
				for (aC = 0; aC < fi; aC++) yo[aC].button.style.width = (100 * yo[aC].button.offsetWidth / ur).toFixed(2) + "%";
			else
				for (aC = 0; aC < fi; aC++) yo[aC].button.style.width = "auto";
			yq.w4 && (yq.scrollLeft = yq.w4), uq || this.resize(!0)
		}, this.z1 = function() {
			var z0 = this.yx(),
				es = i.l;
			z2.fillStyle = bE.qJ, z2.fillRect(0, es * z0.uY, i.j, es * z0.yz)
		}, vl.style.position = "absolute", vl.style.top = "0", vl.style.left = "0", vl.style.width = "100%", vl.style.height = "100%", pO.style.position = "absolute", pO.style.top = "0", pO.style.left = "0", pO.style.width = "100%", pO.style
		.display = "flex", pO.style.backgroundColor = bE.qJ, yq.style.position = "absolute", yq.style.left = "0", yq.style.width = "100%", bD.t6.vr(yq), yr.style.height = yr.style.maxHeight = "100%", pP.style.position = "absolute", pP.style.width =
		"100%", pP.style.backgroundColor = bE.qJ,
		function() {
			for (var aC = 0; aC < yo.length; aC++) yo[aC].button.style.height = "100%", yo[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < yo.length; aC++) yr.appendChild(yo[aC].button);
	pO.appendChild(function() {
		var yw = document.createElement("h1");
		return yw.textContent = title, yw.style.margin = "auto", yw.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", yw.style.fontFamily = "Arial Black, system-ui", yw
	}()), yq.appendChild(yr), !1 !== yp && (vl.appendChild(pP), vl.appendChild(pO), vl.appendChild(yq))
}

function uS(z3, z4, z5, z6) {
	var self;
	this.uU = document.createElement("span"), (self = this).uU.textContent = z3, self.uU.style.color = bE.qN, self.uU.style.position = "absolute", self.uU.style.font = "inherit", z6 ? self.uU.style.bottom = "0.06em" : self.uU.style.top = "0.12em",
		z5 ? self.uU.style.left = "0.2em" : self.uU.style.right = "0.2em", self.uU.style.fontSize = "0.6em", self.uU.style.pointerEvents = "none", self.uU.style.whiteSpace = "pre", z4.style.position = "relative", z4.style.overflow = "hidden", z4
		.appendChild(self.uU)
}

function vt(z3, z4, z7, z8, z9) {
	var self;
	this.uU = document.createElement("span"), this.resize = function() {
			this.uU.style.fontSize = ((z8 - z7) * z4.offsetHeight).toFixed(1) + "px"
		}, (self = this).uU.textContent = z3, self.uU.style.color = bE.qN, self.uU.style.font = "inherit", self.uU.style.margin = "0.1em 0.6em", self.uU.style.pointerEvents = "none", z9 && (self.uU.style.fontWeight = "bold"), self.uU.style
		.whiteSpace = "nowrap", self.uU.style.display = "block", z4.appendChild(self.uU)
}

function zA(zB, zC, zD, zE) {
	var zF = document.createElement("textarea"),
		zG = (this.e = zF, !0);

	function zL() {
		zF.select(), document.execCommand("copy")
	}
	this.resize = function() {
			zC && bD.t6.tB(zF, 5)
		}, this.zH = function(eu) {
			zF.value = eu
		}, this.zI = function() {
			return zF.value
		}, this.zJ = function() {
			zF.select()
		}, this.clear = function() {
			zF.value = ""
		}, this.zK = function() {
			zG && navigator.clipboard ? (zF.select(), navigator.clipboard.writeText(zF.value).catch(function() {
				zG = !1, zL()
			})) : zL()
		}, zF.setAttribute("id", "textArea" + u.z.vJ++), zF.setAttribute("autocomplete", "off"), zB && zF.setAttribute("placeholder", zB), zF.style.top = "0", zF.style.left = "0", zF.style.width = "100%", zF.style.height = "100%", zF.style
		.userSelect = "none", zF.style.outline = "none", zF.style.resize = "none", zF.style.border = "none", zF.style.color = bE.qN, zF.style.backgroundColor = bE.qG, zE ? (zF.style.fontSize = "1em", zF.rows = 6, zF.style.padding = "0.25em") : (zF
			.style.padding = "0.45em", zF.style.fontSize = "1.2em"), zD && zF.addEventListener("input", function(e) {
			zD(e)
		}), zF.addEventListener("focus", function() {
			i.vK++
		}), zF.addEventListener("blur", function() {
			i.vK--
		})
}

function dS() {
	this.tp = new zM, this.buffer = new zN, this.rt = new zO, this.z = new zP, this.zQ = new zR, this.dt = function() {
		this.buffer.dt(), (new zS).dt(), this.zQ.dt(), this.z.zT(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1, bm
			.buffer.data[2].value = bm.buffer.data[2].xP = 0)
	}
}

function zN() {
	function zU(aC, type, za, eA) {
		bm.buffer.data.push({
			eR: aC,
			type: type || 0,
			value: za || 0,
			za: za || 0,
			eA: eA || 0
		})
	}

	function zV(aC, type, za, eA) {
		bm.buffer.data.push({
			eR: aC,
			type: type,
			value: za || "",
			za: za || "",
			eA: eA || 0
		})
	}

	function zW(oP) {
		for (var aC = bm.buffer.data.length; aC < oP; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dt = function() {
		zU(0, 1, 0, 5), zU(1, 1, 1), zU(2, 0), zV(3, 2), zU(4, 1), zV(5, 2, "system-ui", 2), zU(6, 0), zU(7, 0, 0), zU(8, 0), zU(9, 1, 1), zU(10, 1), zU(11, 1, 1), zV(12, 2, navigator.language), zU(13), zU(14), zU(15, 0, 1), zU(16, 0, 3), zW(
			100), zV(100, 2), zV(101, 2), zV(102, 2), zV(103, 2), zV(104, 2), zV(105, 2), zV(106, 2), zU(107), zU(108), zU(109), zV(110, 2), zU(111), zU(112), zU(113), zV(114, 2), zU(115), zV(116, 2), zU(117, 1), zV(118, 2, "", 2), zU(119, 1, 0,
				1), zV(120, 2), zU(121, 1, ~~(262144 * Math.random())), zV(122, 2, "Player " + Math.floor(1e3 * Math.random())), zU(123), zV(124), zU(125, 1), zV(126, 2), zU(127, 0, 1), zU(128), zU(129), zU(130), zU(131), zU(132), zV(133, 2), zU(
				134, 0, 5), zV(135, 2), zV(136, 2), zU(137), zU(138), zU(139), zU(140), zU(141), zU(142), zU(143), zU(144), zV(145, 2), zU(146), zU(147), zV(148, 2), zU(149), zU(150, 0, 1), zV(151, 2), zU(152, 0, 5), zU(153, 1), zU(154, 1), zV(
				155, 2), zV(156, 2), zU(157), zU(158), zU(159), zU(160), zV(161, 2), zU(162, 0, 1024), zV(163, 2, "0,0,0"), zV(164, 2, "100,100,100"), zV(165, 2, "30,30,30"), zV(166, 2, "70,70,70"), zV(167, 2, "100,100,100"), zV(168, 2,
				"85,85,85"), zV(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zV(170 + aC, 2, "255,255,255");
		zV(174, 2), zV(175, 2), zU(176, 0, 200), zW(180), zU(180, 0), zU(181, 0), zU(182, 0, 1023), zV(183, 2), zU(184, 0, 100), zV(185, 2)
	}, this.pz = function(eR, value) {
		this.data[eR].value = value
	}, this.zX = function(eR, value) {
		this.pz(eR, value);
		var value = String(value),
			fi = value.length;
		5e4 < fi ? console.log("storage value too large: index " + eR + " size " + fi) : (bm.tp.save(eR, value), bm.tp.save(eR, String(this.data[eR].eA), !0))
	}, this.zY = function(eR) {
		return Number(this.data[eR].value)
	}, this.zZ = function(eR) {
		return String(this.data[eR].value)
	}
}

function zR() {
	var zb = [];

	function ze(pe) {
		zb.unshift(pe), bm.rt.pz(161, zb.join(";"))
	}

	function fE(pe) {
		for (var zg = zb, fi = zg.length, aC = 0; aC < fi; aC++)
			if (zg[aC] === pe) return zg.splice(aC, 1), bm.rt.pz(161, zg.join(";")), 1
	}
	this.dt = function() {
		var pW = bm.buffer.data[161].value;
		pW.length && (zb = pW.split(";"))
	}, this.get = function() {
		return zb
	}, this.zc = function() {
		return {
			vM: zb,
			value: 0
		}
	}, this.xw = function(pe) {
		return bD.tg.has(zb, pe)
	}, this.zd = function(pe) {
		return fE(pe) ? 0 : (ze(pe), 1)
	}, this.nT = function(pe) {
		fE(pe) && ze(pe)
	}, this.zf = function(eR) {
		eR < zb.length && (zb.splice(eR, 1), bm.rt.pz(161, zb.join(";")))
	}
}

function zM() {
	this.zh = function(eR, eA) {
		return Number(this.zi(eR, eA))
	}, this.zi = function(eR, eA) {
		var gA = null;
		return 0 === a1.id ? a1.zj && (gA = a1.zj.getItem((eA ? "v" : "d") + eR)) : 1 === a1.id ? gA = a1.zk.loadString((eA ? 1e3 : 2e3) + eR) : 2 === a1.id && (gA = a1.zl[(eA ? "v" : "d") + eR]), gA && 0 !== gA.length ? gA : null
	}, this.zm = function(fi, zn) {
		var h = [],
			zo = zn ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zj)
				for (aC = 0; aC < fi; aC++) h.push(a1.zj.getItem(zo + aC))
		} else if (1 === a1.id)
			for (var zp = zn ? 5e3 : 3e3, aC = 0; aC < fi; aC++) h.push(a1.zk.loadString(zp + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fi; aC++) h.push(a1.zl[zo + aC]);
		return h
	}, this.save = function(eR, value, eA) {
		var zq = (eA ? "v" : "d") + eR;
		if (0 === a1.id) {
			if (a1.zj && bm.buffer.data[140].value) try {
				a1.zj.setItem(zq, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zk.saveString((eA ? 1e3 : 2e3) + eR, value) : 2 === a1.id && (a1.zl[zq] = value, a1.zr.postMessage(zq + " " + value))
	}, this.zs = function(h, zn) {
		var fi = h.length,
			zo = zn ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zj && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fi; aC++) a1.zj.setItem(zo + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var zp = zn ? 5e3 : 3e3, aC = 0; aC < fi; aC++) a1.zk.saveString(zp + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fi; aC++) a1.zl[zo + aC] = h[aC], a1.zr.postMessage(zo + aC + " " + h[aC])
	}
}

function zS() {
	this.dt = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eA && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].za = 1);
			0 === data[100].eA && (data[100].value = data[100].za = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fi = data.length;
		for (aC = 0; aC < fi; aC++) {
			var zv = bm.tp.zh(aC, !0);
			data[aC] && data[aC].eA === zv && (null === (zv = bm.tp.zi(aC)) ? data[aC].value = data[aC].za : 2 === data[aC].type ? data[aC].value = zv : (zv = Number(zv), isNaN(zv) ? data[aC].value = data[aC].za : data[aC].value = zv))
		}
	}
}

function zP() {
	function a00(h) {
		if (0 === h.length) bm.rt.pz(116, "");
		else {
			for (var a04 = h[0], aC = 1; aC < h.length; aC++) a04 += ";" + h[aC];
			bm.rt.pz(116, a04)
		}
	}
	this.zx = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rt.pz(110, ""), this.zy())
	}, this.zy = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var zz = [], aC = 0; aC < h.length; aC += 2) zz.push(h[aC]);
		a00(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vM = zz
	}, this.a01 = function(eR) {
		bm.buffer.data[117].vM.splice(eR, 1), bm.buffer.data[117].value = Math.min(eR, bm.buffer.data[117].vM.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eR, 2), a00(h)
	}, this.a02 = function(pe, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pe) return h[aC + 1] = password, void a00(h);
		h.push(pe, password), a00(h)
	}, this.a03 = function(eR) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eR + 1) ? null : {
			pe: h[2 * eR],
			password: h[2 * eR + 1]
		}
	}, this.a05 = function() {
		var gA = bO.iu(bm.buffer.data[121].value, -1, 262143);
		return gA = -1 === gA ? ~~(262144 * Math.random()) : gA
	}, this.zT = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var a06, pW = h[aC].trim();
			0 !== pW.length && (a06 = 0 <= (a06 = pW.indexOf("=")) ? pW.substring(0, a06) : pW, document.cookie = a06 + "=;expires=0;path=/", document.cookie = a06 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a06 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function zO() {
	this.pz = function(eR, value) {
		2 !== bm.buffer.data[eR].type && (value = Math.floor(value)), bm.buffer.data[eR].value !== value && (bm.buffer.zX(eR, value), 0 === eR ? (u.y(), bA.dt(), u.v(2)) : 1 === eR ? i.e3(1) : 2 === eR ? i.e3(0) : 5 === eR && (bD.t6.a07(), i.e3(
			0)))
	}, this.a08 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zX(aC, data[aC].za);
		bD.t6.a07(), i.e3(1)
	}, this.a09 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.pz(aC, data[aC].za)
	}, this.a0A = function() {
		for (var g2 = bm.buffer, aC = 128; aC < 135; aC++) g2.zX(aC, g2.data[aC].za)
	}, this.a0B = function(data) {
		bm.rt.pz(109, data.vc), bm.rt.pz(107, data.a0C), bm.rt.pz(108, data.a0D), bm.rt.pz(112, data.a0E), bm.rt.pz(111, data.a0F), bm.rt.pz(113, data.a0G), bm.rt.pz(135, data.a0H), bm.rt.pz(136, data.a0I), bm.rt.pz(137, data.a0J), bm.rt.pz(138,
			data.a0K), bm.rt.pz(139, data.a0L), bm.rt.pz(141, data.a0M), bm.rt.pz(142, data.a0N), bm.rt.pz(143, data.a0O), bm.rt.pz(144, data.a0P)
	}
}

function cC() {
	this.f9 = new a0Q, this.a0R = new a0S, this.a0T = new a0U, this.dt = function() {
		this.f9.dt()
	}
}

function a0S() {
	this.a0V = function(size) {
		for (var a0W = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0W.sW(16)));
		return h.join("")
	}, this.a0X = function(pW) {
		return 20 < (pW = pW.trim()).length ? pW.substring(0, 20) : pW
	}
}

function a0Q() {
	var a0Y = new Uint8Array(78);
	this.dt = function() {
		var aC;
		for (a0Y[50] = 37, aC = 0; aC < 10; aC++) a0Y[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0Y[aC + 20] = aC + 11, a0Y[aC + 52] = aC + 38
	}, this.a0Z = function(pW) {
		return pW || (console.log("validateString error: " + pW), pW = ""), pW.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0a = function(pW, size) {
		if ((pW = this.a0Z(pW)).length > size) return pW.substring(0, size);
		for (; pW.length < size;) pW = "-" + pW;
		return pW
	}, this.a0b = function(pW) {
		for (var a0c = a0Y, fi = pW.length, h = new Uint8Array(fi), aC = 0; aC < fi; aC++) h[aC] = a0c[pW.charCodeAt(aC) - 45];
		return h
	}, this.a0d = function(a0e) {
		bG.a8(6 * a0e.length), this.a0f(a0e), bK.dt(bG.aD)
	}, this.a0f = function(a0e) {
		for (var fi = a0e.length, j = bG, aC = 0; aC < fi; aC++) j.a9(6, a0e[aC])
	}, this.a0g = function(pW) {
		this.a0f(this.a0b(pW))
	}, this.a0h = function(pW, size) {
		this.a0f(this.a0b(this.a0a(pW, size)))
	}, this.fA = function(pW, size) {
		for (var h = this.a0b(this.a0a(pW, size)), gA = 0, oJ = 1, aC = h.length - 1; 0 <= aC; aC--) gA += oJ * h[aC], oJ *= 64;
		return gA
	}
}

function a0i() {
	var j, k, a0j;

	function a18(iB, fl, a16, a0o, a11) {
		fl = a17(iB, fl + 1 + 2 * a0o & 3);
		! function(iB, lh) {
			return 1 < Math.abs(iB % j - lh % j) || 1 < Math.abs(a1B(iB) - a1B(lh))
		}(iB, fl) && 0 === a11[fl << 2] && (a11[fl << 2] = a16)
	}

	function a1B(hG) {
		return Math.floor((hG + .5) / j) % k
	}

	function a17(hG, fl) {
		return hG + a0j[fl]
	}
	this.a0k = function(pW) {
		var aC, a0l, fi, a0m, a0W = bK;
		for (bJ.f9.a0d(bJ.f9.a0b(pW)), bV.xN.a0p[bV.fO].j = bV.ft = j = a0W.sW(12), bV.xN.a0p[bV.fO].k = bV.fu = k = a0W.sW(12), a0j = [-j, -1, j, 1], bV.a0y = document.createElement("canvas"), bV.a0y.width = bV.ft, bV.a0y.height = bV.fu, bV
			.a0u = bV.a0y.getContext("2d", {
				alpha: !1
			}), bV.a0v = bV.a0z = null, bV.a0v = bV.a0u.getImageData(0, 0, bV.ft, bV.fu), bV.a0z = bV.a0v.data, bD.tg.a10(bV.a0z), fi = a0W.sW(12), a0l = a0W.sW(5), a0m = a0r(j * k - 1), aC = 0; aC < fi; aC++) ! function(lz, hG, a0n, a0o) {
			var aC, fl, a0W = bK,
				a11 = bV.a0z,
				a12 = hG,
				a13 = hG,
				a14 = 0,
				a15 = 1 + a0n,
				a16 = 2 - a0n;
			for (a11[hG << 2] = a15, aC = 0; aC < lz; aC++) fl = a0W.sW(2), hG = a17(hG, fl), a11[hG << 2] === a15 ? a14 % 2 == 1 && a18(a13, a14 + 2 * a0o + 3, a16, a0o, a11) : a11[hG << 2] = a15, a18(hG, fl, a16, a0o, a11), a18(a13, fl,
				a16, a0o, a11), a13 = hG, a14 = fl;
			a17(hG, 0) === a12 ? (a18(hG, 0, a16, a0o, a11), a18(a12, 0, a16, a0o, a11)) : a17(hG, 1) === a12 && (a18(hG, 0, a16, a0o, a11), a18(a12, 2, a16, a0o, a11));
			0 === lz && (a18(a12, 0, a16, a0o, a11), a18(a12, 2, a16, a0o, a11))
		}(a0W.sW(a0l), a0W.sW(a0m), 1 === a0W.sW(1), 1 === a0W.sW(1));
		var fp, fr, ib, a1C, a1D, a1E, a11 = bV.a0z,
			a1F = !0,
			a1G = bV.xN.a0p[bV.fO].a1G,
			a1H = bV.xN.a0p[bV.fO].a1H;
		for (fr = 0; fr < k; fr++)
			for (a1C = !0, a1D = a1F, fp = a1E = 0; fp < j; fp++) ib = 4 * fr * j + 4 * fp, a1E <= fp && 0 < a11[ib] && (a1D = 2 === a11[ib], a1C) && (a1C = !1, a1D !== a1F) ? (a1F = a1D, a1E = fp + 1, fp = -1) : (a1D ? (a11[ib] = a1H[0], a11[1 +
				ib] = a1H[1], a11[2 + ib] = a1H[2]) : (a11[ib] = a1G[0], a11[1 + ib] = a1G[1], a11[2 + ib] = a1G[2]), a11[3 + ib] = 255);
		bV.a0u.putImageData(bV.a0v, 0, 0), bV.a0w = !0, bV.a0x.dt(), bi.e0 = !0
	}
}

function a0U() {
	this.a0k = function(a1I) {
		for (var a0W = bK, size = a0W.sW(a1I), a1J = 7 + 9 * a0W.sW(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0W.sW(a1J)));
		return h.join("")
	}
}

function cH() {
	var uw, ux, a1K, a1L, a1M, a1N, a1O, a1P, a1Q, a1R;

	function a1T() {
		var a1W = aE.a1W;
		for (a1Q = a1W; a1Q < aE.ff; a1Q++) a1S();
		for (a1Q = aE.i7 ? aE.l4 : 0; a1Q < a1W; a1Q++) {
			if (!a1X()) {
				for (var g2 = aE.a1b = a1Q; g2 < a1W; g2++) a1Q = g2, a1S();
				return
			}
			a1a(a1N + uw * a1M + bO.g9(a1M, 2), a1O + ux * a1M + bO.g9(a1M, 2))
		}
	}

	function a23(player) {
		for (var jc = ah.jc, je = ah.je, jd = ah.jd, jf = ah.jf, fr = je[player]; fr <= jf[player]; fr++)
			for (var fp = jc[player]; fp <= jd[player]; fp++) {
				var fM = ad.a24(fp, fr);
				ad.hI(fM) && (ad.kF(fM) ? ad.hD(fM, player) : ad.a25(fM, player))
			}
	}

	function a22(h, vv, vw) {
		var ej = h[vv];
		h[vv] = h[vw], h[vw] = ej
	}

	function a1X() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (uw = bO.g9(a1K * az.random(), az.value(100)), ux = bO.g9(a1L * az.random(), az.value(100)), a2A()) return 1;
			return
		}() || function() {
			var j6, j9, g1, a1Z, g2, a1Y;
			for (j6 = bO.g9(a1K * az.random(), az.value(100)), j9 = bO.g9(a1L * az.random(), az.value(100)), g1 = 40; 1 <= g1; g1--)
				for (a1Z = a1L - g1; 0 <= a1Z; a1Z -= 40)
					for (ux = (a1Z + j9) % a1L, g2 = 40; 1 <= g2; g2--)
						for (a1Y = a1K - g2; 0 <= a1Y; a1Y -= 40)
							if (uw = (a1Y + j6) % a1K, a2A()) return 1;
			return
		}()
	}

	function a2A() {
		for (var hG, a2C, gap = bO.g9(a1M - a1P, 2), a2D = a1O + ux * a1M + gap, a2E = a1N + uw * a1M + gap, a2B = a2D + a1P - 1; a2D <= a2B; a2B--)
			for (a2C = a2E + a1P - 1; a2E <= a2C; a2C--)
				if (hG = ad.a24(a2C, a2B), !ad.fd(hG) || ad.kF(hG)) return;
		return 1
	}

	function a1a(a1Y, a1Z) {
		a1S(), a2F(a1Y - 2, a1Z - 2)
	}

	function a1S() {
		ah.ng[a1Q] = 0, ah.hW[a1Q] = ah.a20[a1Q] = 0, ah.hA[a1Q] = [], ah.hO[a1Q] = [], ah.hP[a1Q] = [], ah.g7[a1Q] = [], ah.jc[a1Q] = ah.je[a1Q] = ah.jd[a1Q] = ah.jf[a1Q] = 0
	}

	function a2F(a1Y, a1Z) {
		var hG, aC, a2G, a2H;
		for (ah.ng[a1Q] = 1, ah.jc[a1Q] = a1Y + 10, ah.je[a1Q] = a1Z + 10, ah.jf[a1Q] = ah.jd[a1Q] = 0, a2G = a1Y; a2G < a1Y + 4; a2G++)
			for (a2H = a1Z; a2H < a1Z + 4; a2H++)(a1Y < a2G && a2G < a1Y + 3 || a1Z < a2H && a2H < a1Z + 3) && (hG = ad.a24(a2G, a2H), ad.fd(hG)) && (ah.jc[a1Q] = Math.min(a2G, ah.jc[a1Q]), ah.jd[a1Q] = Math.max(a2G, ah.jd[a1Q]), ah.je[a1Q] = Math
				.min(a2H, ah.je[a1Q]), ah.jf[a1Q] = Math.max(a2H, ah.jf[a1Q]), a1R[ah.hW[a1Q]] = hG, ah.hW[a1Q]++, ad.a25(hG, a1Q));
		for (ah.a20[a1Q] = ah.hW[a1Q], aC = ah.hW[a1Q] - 1; 0 <= aC; aC--) ad.a2I(a1R[aC], a1Q) ? (ad.hD(a1R[aC], a1Q), ah.hO[a1Q].push(a1R[aC])) : ad.a2J(a1R[aC]) ? (ad.hD(a1R[aC], a1Q), ah.hP[a1Q].push(a1R[aC])) : ad.a2K(a1R[aC]) && (ad.hD(a1R[aC],
			a1Q), ah.g7[a1Q].push(a1R[aC]))
	}
	this.dt = function() {
		if (a1R = new Array(12), a1P = 6, a1M = 10, a1K = bO.g9(bV.ft, a1M), a1L = bO.g9(bV.fu, a1M), a1N = bO.g9(bV.ft - a1M * a1K, 2), a1O = bO.g9(bV.fu - a1M * a1L, 2), aE.i7)
			for (var aC = 0; aC < aE.l4; aC++) a1Q = aC, a1S(), ah.ng[a1Q] = 1;
		(0 === aE.data.spawningType ? a1T : 1 === aE.data.spawningType ? (a1T(), function() {
			var a1c = aE.a1d;
			aE.a1e || a1c++;
			if (!(a1c < 3)) {
				for (var data = aE.data, kK = (aE.i7 ? aE.l4 : 0) + data.teamPlayerCount[0], oP = aE.a1b, a1f = new Uint32Array(a1c), a1g = new Uint32Array(a1c), a1h = new Uint16Array(a1c), a1i = new Uint16Array(a1c), fg = bj.fg, jc = ah
						.jc, je = ah.je, jd = ah.jd, jf = ah.jf, gN = bR.gN, gO = bR.gO, aC = kK; aC < oP; aC++) gN[aC] = jc[aC] + jd[aC] >> 1, gO[aC] = je[aC] + jf[aC] >> 1;
				for (aC = kK; aC < oP; aC++) {
					var id = fg[aC];
					a1f[id] += gN[aC], a1g[id] += gO[aC]
				}
				var lR = bj.lR;
				for (aC = 1; aC < a1c; aC++) {
					var hB = Math.max(data.teamPlayerCount[lR[aC]], 1);
					a1h[aC] = bO.g9(a1f[aC], hB), a1i[aC] = bO.g9(a1g[aC], hB)
				}
				var a1j = bj.a1j,
					a1k = bj.a1k,
					a1l = bj.a1l,
					gM = bR.gM;
				for (aC = 0; aC < 512; aC++) gM[aC] = aC;
				for (var eQ = 0; eQ < 2 + (4 <= a1c); eQ++)
					for (aC = kK; aC < oP; aC++) {
						for (var iB = aC, a1m = gM[iB], a1n = 1, fy = bO.a1o(gN[a1m] - a1h[1], gO[a1m] - a1i[1]), g1 = 2; g1 < a1c; g1++) {
							var a1p = bO.a1o(gN[a1m] - a1h[g1], gO[a1m] - a1i[g1]);
							a1p < fy && (fy = a1p, a1n = g1)
						}
						var a1q = fg[iB];
						if (a1n !== a1q) {
							if (2 === eQ && 4 <= a1c) {
								var a1r = Math.max((a1n + 1) % a1c, 1),
									a1s = bO.a1o(gN[a1m] - a1h[a1r], gO[a1m] - a1i[a1r]);
								for (g1 = 1; g1 < a1c; g1++) a1p = bO.a1o(gN[a1m] - a1h[g1], gO[a1m] - a1i[g1]), fy < a1p && a1p < a1s && (a1s = a1p, a1r = g1);
								a1r !== a1q && bO.a1o(a1h[a1q] - a1h[a1r], a1i[a1q] - a1i[a1r]) < bO.a1o(a1h[a1q] - a1h[a1n], a1i[a1q] - a1i[a1n]) && (a1n = a1r)
							}
							var a1t = lR[a1n],
								a1u = a1k[a1t] + (aE.i7 ? 0 : a1l[a1t]),
								lh = a1j[a1u],
								a1v = gM[lh],
								a1w = a1k[a1t + 1];
							fy = bO.a1o(gN[a1v] - a1h[a1q], gO[a1v] - a1i[a1q]);
							for (var es = a1u + 1; es < a1w; es++) {
								var a1x = a1j[es],
									a1y = gM[a1x];
								(a1p = bO.a1o(gN[a1y] - a1h[a1q], gO[a1y] - a1i[a1q])) < fy && (fy = a1p, lh = a1x)
							}
							lh < kK || oP <= lh || (a1v = gM[lh], a1f[a1q] += gN[a1v] - gN[a1m], a1g[a1q] += gO[a1v] - gO[a1m], a1f[a1n] += gN[a1m] - gN[a1v], a1g[a1n] += gO[a1m] - gO[a1v], hB = data.teamPlayerCount[lR[a1q]], a1h[a1q] =
								bO.g9(a1f[a1q], hB), a1i[a1q] = bO.g9(a1g[a1q], hB), hB = data.teamPlayerCount[a1t], a1h[a1n] = bO.g9(a1f[a1n], hB), a1i[a1n] = bO.g9(a1g[a1n], hB), gM[iB] = a1v, gM[lh] = a1m)
						}
					}! function() {
						for (var gM = bR.gM, jc = ah.jc, je = ah.je, jd = ah.jd, jf = ah.jf, hW = ah.hW, a20 = ah.a20, hO = ah.hO, hP = ah.hP, g7 = ah.g7, aC = 0; aC < 512; aC++) {
							var a21 = gM[aC];
							if (a21 !== aC) {
								a22(jc, aC, a21), a22(je, aC, a21), a22(jd, aC, a21), a22(jf, aC, a21), a22(hW, aC, a21), a22(a20, aC, a21), a22(hO, aC, a21), a22(hP, aC, a21), a22(g7, aC, a21), a23(aC), a23(a21), gM[aC] = aC;
								for (var k = a21, hH = gM[k]; hH !== aC;) hH = gM[k = hH];
								gM[k] = a21
							}
						}
					}()
			}
		}) : function() {
			var a1W = aE.a1W;
			for (a1Q = a1W; a1Q < aE.ff; a1Q++) a1S();
			for (a1Q = aE.i7 ? aE.l4 : 0; a1Q < a1W; a1Q++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a1Y = spawningData[2 * a1Q] + 1,
							spawningData = spawningData[2 * a1Q + 1] + 1;
						if (3 < a1Y && a1Y < bV.ft - 5 && 3 < spawningData && spawningData < bV.fu - 5 && ad.fd(ad.a24(a1Y, spawningData)) && function(a1Y, a1Z) {
								var hG, a2C, a2B;
								for (a2B = a1Z; a1Z - 6 < a2B; a2B--)
									for (a2C = a1Y; a1Y - 6 < a2C; a2C--)
										if (hG = ad.a24(a2C, a2B), ad.kF(hG)) return;
								return 1
							}(a1Y + 3, spawningData + 3)) return a1a(a1Y + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a1X()) {
						for (var g2 = aE.a1b = a1Q; g2 < a1W; g2++) a1Q = g2, a1S();
						return
					}
					var a1Y = a1N + uw * a1M + bO.g9(a1M, 2),
						a1Z = a1O + ux * a1M + bO.g9(a1M, 2);
					a1a(a1Y, a1Z)
				}
		})(), bg.nc[7] = ah.hW[aE.fS]
	}, this.a2L = function(kD, a2M, a2N) {
		var aC, a1Y, a1Z, hG, uw, ux;
		for (a1Q = kD, aC = 0; aC < 20; aC++)
			for (a1Y = a2M + aC; a2M - aC <= a1Y; a1Y--)
				for (a1Z = a2N + aC; a2N - aC <= a1Z; a1Z--)
					if ((a1Y === a2M + aC || a1Y === a2M - aC || a1Z === a2N + aC || a1Z === a2N - aC) && 3 < a1Y && a1Y < bV.ft - 5 && 3 < a1Z && a1Z < bV.fu - 5 && ad.fd(ad.a24(a1Y, a1Z)) && function(a1Y, a1Z) {
							var hG, a2C, a2B;
							for (a2B = a1Z; a1Z - 6 < a2B; a2B--)
								for (a2C = a1Y; a1Y - 6 < a2C; a2C--)
									if (hG = ad.a24(a2C, a2B), ad.kF(hG) && !ad.a2T(a1Q, hG)) return;
							return 1
						}(a1Y + 3, a1Z + 3)) {
						if (0 < ah.hW[a1Q]) {
							for (ux = uw = hG = void 0, uw = ah.jd[a1Q]; uw >= ah.jc[a1Q]; uw--)
								for (ux = ah.jf[a1Q]; ux >= ah.je[a1Q]; ux--) hG = 4 * (ux * bV.ft + uw), ad.a2Q(a1Q, hG) && (ad.a2R(hG), ah.hW[a1Q]--);
							a1S()
						}
						return a2F(a1Y - 1, a1Z - 1), !0
					} return !1
	}, this.a2S = function(kD) {
		a1Q = kD, a1X() ? a1a(a1N + uw * a1M + bO.g9(a1M, 2), a1O + ux * a1M + bO.g9(a1M, 2)) : a1S()
	}
}

function a2U() {
	au.a2V(), z2.setTransform(ix, 0, 0, ix, 0, 0), z2.imageSmoothingEnabled = ix < 3, z2.drawImage(bV.a0y, aT.a2W(), aT.a2X()), bS.a2Y.z1(), z2.drawImage(a2Z, aT.a2W(), aT.a2X()), au.z1(), bQ.z1(), ag.z1(), (aE.oA ? (bk.z1(), bF) : (aO.z1(), aW.z1(),
		aS.z1(), bF.z1(), ax.z1(), aX.z1(), aT.z1(), aR.z1(), bk.z1(), aV.z1(), aQ.z1(), aN.z1(), aM.z1(), aY.z1(), bh.z1(), aw)).z1(), u.z1()
}

function a2a(p4, j, k) {
	p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qK, p4.fillRect(0, 0, j, k)
}

function a2b(p4, j, k, a2c) {
	p4.fillStyle = bE.qN, p4.fillRect(0, 0, j, a2c), p4.fillRect(0, 0, a2c, k), p4.fillRect(j - a2c, 0, a2c, k), p4.fillRect(0, k - a2c, j, a2c)
}

function a2d(p4, fp, fr, ih, a2c, hG, a2e) {
	p4.fillStyle = bE.qN;
	var hG = Math.floor(ih * hG),
		vj = (hG += (hG - a2c) % 2, Math.floor((hG - a2c) / 2)),
		ih = Math.floor((ih - hG) / 2);
	p4.fillRect(fp + ih, fr + ih + vj, hG, a2c), a2e && p4.fillRect(fp + ih + vj, fr + ih, a2c, hG)
}

function a2g() {
	this.dt = function() {
		8 === aE.lM && aO.a2h()
	}, this.a2i = function(a2j) {
		var elo = aE.data.elo,
			kJ = (elo[a2j] - elo[1 - a2j]) / 10,
			kJ = 8 / (1 + Math.pow(2, kJ / 32)),
			kJ = Math.floor(10 * kJ + .5),
			a2l = elo[a2j] + kJ,
			a2m = this.a2n(a2l),
			elo = this.a2n(elo[1 - a2j] - kJ),
			kJ = (0 === a2j ? aO.a2p(a2m, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2p(elo, a2m, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2l * bO.sqrt(a2l) >> 8),
			elo = ((1 + aE.a2s) * kJ / 100).toFixed(2);
		a2j !== aE.fS || aE.hs ? aO.a2t(640, L(38, [ah.a2u[a2j], elo]), 40, 0, bE.qN, bE.qK, -1, !1) : aO.a2t(640, L(37, [elo]), 40, 0, bE.qN, bE.qK, -1, !1)
	}, this.a2n = function(elo) {
		return 16e3 === (elo = bO.iu(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cn() {
	this.q5 = new a2v, this.a11 = new a2w
}

function a2w() {
	this.iV = !1;
	this.a30 = [], this.a31 = 100;
	var o7, o8, gap, ih, a2x, a2z, a32 = 0,
		a33 = new Array(9),
		a34 = [],
		a35 = [],
		a36 = 0,
		a37 = 0,
		a38 = 0,
		a39 = 0;

	function a3L() {
		a33.sort(function(g1, g2) {
			return g2.l9 - g1.l9
		});
		for (var pW = "" + a33[0].s7, aC = 1; aC < 9; aC++) pW += "," + a33[aC].s7;
		for (aC = 0; aC < 9; aC++) pW += "," + a33[aC].l9;
		bm.buffer.zX(120, pW)
	}
	this.dt = function() {
		for (var a3A = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a3A.length; aC++) {
			var color = 6 === a3A[aC] ? bE.qn : bE.qL;
			this.a30.push(bD.canvas.a3B(ac.get(3), a3A[aC], color))
		}
		for (aC = 0; aC < ak.q5.a3C; aC++) a35.push(ak.q5.a3D - ak.q5.a3C + aC);
		for (aC = 0; aC < ak.q5.a3E; aC++) a35.push(ak.q5.a3F + aC);
		var a3G = ak.q5.a3H(bN.a3G);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a3G.slice(), aC = 0; aC < a3G.length; aC++) a35.push(a3G[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a33[q] = {
						s7: isNaN(qcode) ? 1015 + q : qcode,
						l9: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a33[aC] = {
							s7: 1015 + aC,
							l9: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var gA = parseInt(h[aC]),
								es = (gA = 0 <= gA && gA < ak.q5.a3D ? gA : 0, parseInt(h[aC + 9]));
							es = 0 <= es && es < 1e3 ? es : 0, a33[aC] = {
								s7: gA,
								l9: es
							}
						}
				}
		}()
	}, this.show = function(mJ, mK, a3M) {
		var aC;
		if (a36 = mJ, a37 = mK, a32 = a3M || 0, this.iV = !0, a34 = [], 0 === a32)
			for (aC = 0; aC < 9; aC++) a34.push(a33[aC].s7);
		else {
			var g2 = 49 * a32,
				a3M = g2 - 49;
			for (a3M >= a35.length && (a32 = 1, a3M = 0, g2 = 49), aC = a3M = (g2 = Math.min(g2, a35.length)) - 49; aC < g2; aC++) a34.push(a35[aC])
		}
		a34.push(1024);
		a3M = a34.length, ih = Math.floor((a1.a2.iv() ? .075 : .0468) * i.iw), gap = Math.floor(ih / 3), (a38 = 10 * (a2x = ih + gap)) > i.j && (a38 = i.j, gap = (a2x = a38 / 10) - (ih = 3 * a2x / 4)), a2z = bO.g9(a3M, 10) + !!(a3M % 10), (a39 =
			a2z * a2x) > i.k && (a39 = i.k, gap = (a2x = a39 / a2z) - (ih = 3 * a2x / 4)), a3M = .5 * gap;
		o7 = Math.min(Math.max(mJ - .5 * a38 + a3M, a3M), i.j - a38 + a3M), o8 = Math.min(Math.max(mK - .5 * a39 + a3M, a3M), i.k - a39 + a3M)
	}, this.hw = function(mJ, mK, player) {
		if (!this.iV) return !1;
		if (this.a3O(mJ, mK)) {
			mJ = bO.iu(bO.g9(mJ - o7 + .5 * gap, a2x), 0, 9);
			if ((mJ += 10 * bO.iu(bO.g9(mK - o8 + .5 * gap, a2x), 0, 9)) >= a34.length) return aM.uW(), !0;
			mK = a34[mJ];
			if (1024 === mK) return this.show(a36, a37, a32 + 1), !0;
			! function(s7) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a33[aC].l9 = Math.floor(.99 * a33[aC].l9);
					for (aC = 0; aC < 9; aC++)
						if (s7 === a33[aC].s7) return a33[aC].l9 = Math.min(a33[aC].l9 + 30, 999), a3L();
					a33.splice(5, 0, {
						s7: s7,
						l9: Math.max(a33[4].l9, 30)
					}), a33.pop(), a3L()
				}
			}(mK), player === aE.fS ? bB.i9.s6(mK) : bB.h4.sL(mK, player)
		}
		return aM.uW(), !0
	}, this.a3O = function(mJ, mK) {
		return !(mJ < o7 - .5 * gap || mK < o8 - .5 * gap || o7 + a38 - .5 * gap <= mJ || o8 + a39 - .5 * gap <= mK)
	}, this.z1 = function() {
		z2.fillStyle = bE.qK, z2.fillRect(o7 - .5 * gap, o8 - .5 * gap, a38, a39);
		for (var ib = .5 * bf.a3P, fi = (z2.lineWidth = bf.a3P, z2.strokeStyle = z2.fillStyle = bE.qN, z2.strokeRect(o7 - .5 * gap + ib, o8 - .5 * gap + ib, a38 - 2 * ib, a39 - 2 * ib), z2.imageSmoothingEnabled = !0, a34.length), aC = 0; aC <
			fi; aC++) this.a3Q(a34[aC], z2, o7 + aC % 10 * a2x, o8 + bO.g9(aC, 10) * a2x, ih);
		z2.imageSmoothingEnabled = !1
	}, this.a3Q = function(s7, io, fp, fr, ih) {
		var fM;
		s7 >= 1024 - ak.q5.a3C ? (fM = ih / this.a31, io.setTransform(fM, 0, 0, fM, fp, fr), io.drawImage(this.a30[s7 - 1024 + ak.q5.a3C], 0, 0), io.setTransform(1, 0, 0, 1, 0, 0)) : (bD.t6.textAlign(io, 1), bD.t6.textBaseline(io, 1), io.font =
			bD.t6.t9(0, .89 * ih), io.fillText(ak.q5.a3R(s7), fp + .5 * ih, fr + (.35 - bD.t6.a3S + .56) * ih))
	}
}

function a2v() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a3C = 13, this.a3E = this.emojis.length, this.a3F = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a3F, this.a3D = 1024, this.a3T = this.emojis.indexOf(
		"💀"), this.a3U = this.a3T + 1, this.a3V = this.emojis.indexOf("🥇"), this.a3W = this.emojis.indexOf("😊"), this.a3R = function(gA) {
		return gA < this.a3F ? String.fromCharCode(55356, 56806 + bO.g9(gA, 26), 55356, 56806 + gA % 26) : this.emojis[Math.min(gA - this.a3F, this.a3E - 1)]
	}, this.a3H = function(pW) {
		for (var fi = pW.length - 2, h = [], aC = 0; aC < fi; aC++) {
			var a3X = pW.charCodeAt(aC) - 56806,
				a3Y = pW.charCodeAt(aC + 2) - 56806;
			0 <= a3X && a3X < 26 && 0 <= a3Y && a3Y < 26 && (h.push(26 * a3X + a3Y), aC += 3)
		}
		return h
	}, this.a3Z = function(gA) {
		return gA < this.a3F
	}, this.a3a = function(gA) {
		return gA >= 1024 - this.a3C
	}, this.a3b = function(gA) {
		return gA >= this.a3F && gA < this.a3F + this.a3U
	}
}

function cB() {
	this.f9 = new a3c, this.a0R = new a3d, this.a0T = new a3e, this.dt = function() {
		this.f9.dt()
	}
}

function a3d() {
	this.a0g = function(pW) {
		for (var fi = pW.length, j = bG, aC = 0; aC < fi; aC++) j.a9(16, pW.charCodeAt(aC))
	}
}

function a3c() {
	var a3f = new Uint8Array(64);
	this.dt = function() {
		var aC;
		for (a3f[0] = 45, a3f[37] = 95, aC = 0; aC < 10; aC++) a3f[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3f[aC + 11] = 65 + aC, a3f[aC + 38] = 97 + aC
	}, this.vg = function(a3g) {
		for (var a0W = bK, a0e = new Uint8Array(a3g), aC = 0; aC < a3g; aC++) a0e[aC] = a0W.sW(6);
		return a0e
	}, this.vf = function(a0e) {
		for (var fi = a0e.length, a3h = a3f, h = [], aC = 0; aC < fi; aC++) h.push(String.fromCharCode(a3h[a0e[aC]]));
		return h.join("")
	}, this.a3i = function(value, a3j) {
		for (var a3h = a3f, h = [], aC = 0; aC < a3j; aC++) h.push(String.fromCharCode(a3h[value >> 6 * (a3j - 1 - aC) & 63]));
		return h.join("")
	}
}

function cJ() {
	var a3k, a3l, a3m;
	a3k = [32, 65, 191, 913, 931], a3l = [64, 127, 688, 930, 1155], a3m = new Array(a3k.length + 1);
	for (var aC = 0; aC < a3m.length; aC++) {
		a3m[aC] = 0;
		for (var g1 = aC - 1; 0 <= g1; g1--) a3m[aC] += a3l[g1] - a3k[g1]
	}

	function a3s(es) {
		for (var aC = a3k.length - 1; 0 <= aC; aC--)
			if (es >= a3k[aC] && es < a3l[aC]) return aC;
		return -1
	}
	this.a0X = function(pW) {
		return 0 !== (pW = pW.trim()).indexOf("Bot ") && 0 !== pW.indexOf("[Bot] ") && function(pW, a3p, a3q) {
			var fi = (pW = pW.trim()).length;
			if (fi < a3p || a3q < fi) return !1;
			for (var es, a3r = 0, aC = 0; aC < fi; aC++)
				if (es = pW.charCodeAt(aC), a3r += 65 <= es && es <= 90 || 1040 <= es && es <= 1071 ? 1 : 0, -1 === a3s(es)) return !1;
			if (3 < a3r && a3r > Math.floor(fi / 2)) return !1;
			return !0
		}(pW, 3, 20)
	}, this.a3t = function(pW) {
		for (var fi = (pW = pW.trim()).length, h = [], aC = 0; aC < fi; aC++) {
			var es, hG = a3s(es = pW.charCodeAt(aC));
			h.push(a3m[hG] + es - a3k[hG])
		}
		return h
	}, this.a0k = function(h) {
		for (var es, g2, pW = "", fi = h.length, aC = 0; aC < fi; aC++)
			for (g2 = 1; g2 < a3m.length; g2++)
				if (h[aC] < a3m[g2]) {
					es = a3k[g2 - 1] + h[aC] - a3m[g2 - 1], pW += String.fromCharCode(es);
					break
				} return pW
	}, this.a3u = function(pW) {
		for (var h = this.a3t(pW), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3v = function(pW) {
		for (var h = new Array(Math.floor(pW.length / 3)), aC = 0; aC < pW.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pW.substring(aC, aC + 3));
		return this.a0k(h)
	}, this.a3w = function(pW) {
		for (var gA, h = [pW.length], aC = 0; aC < pW.length; aC++) h[aC] = pW.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pW.length; aC++) aC === pW.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (gA = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(gA + (gA < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3x = function(pW) {
		for (var es, result = "", aC = 0; aC < pW.length; aC++) 48 <= (es = pW.charCodeAt(aC)) && es < 58 ? result += String.fromCharCode(es) : 65 <= es && es < 75 ? result += "0" + (es - 65).toString() : 75 <= es && es < 91 ? result += (es - 65)
			.toString() : 97 <= es && es < 123 && (result += (es - 71).toString());
		return result
	}, this.a3y = function(pW) {
		for (var fi = pW.length, h = [], aC = 0; aC < fi; aC++)(es = pW.charCodeAt(aC)) < 58 ? h.push(pW[aC]) : (es -= es < 91 ? 65 : 71, h.push(String(bO.g9(es, 10))), h.push(String(es - 10 * bO.g9(es, 10))));
		var fi = h.length - 2,
			es = 0,
			a0e = [];
		for (aC = 0; aC < fi; aC += 3) a0e[es++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0e
	}, this.a3z = function() {
		for (var eQ, a40 = "", aC = 0; aC < 6; aC++) eQ = 48 + az.random() % 36, eQ += 58 <= eQ ? 39 : 0, a40 += String.fromCharCode(eQ);
		return a40
	}
}

function a3e() {
	this.a3t = function(pW, a1I, a41) {
		for (var a42 = [], fi = pW.length, max = 0, aC = 0; aC < fi; aC++) {
			var gA = pW.charCodeAt(aC);
			a42.push(gA), max = Math.max(max, gA)
		}
		var a1J = max < 128 ? 7 : 16;
		for (a41.a9(a1I, fi), a41.a9(1, +(16 == a1J)), aC = 0; aC < fi; aC++) a41.a9(a1J, a42[aC])
	}
}

function dK() {
	this.a43 = new a44, this.result = new a45, this.a46 = new a47, this.nH = new a48, this.a49 = new a4A, this.a4B = new a4C, this.dt = function() {
		this.result.dt()
	}
}

function a47() {
	this.a4D = function() {
		for (var fi = am.la, x6 = am.lf, a4E = [], aC = 0; aC < fi; aC++) {
			var hG = x6[aC];
			bD.h4.a4F(hG) && a4E.push(hG)
		}
		return a4E
	}, this.a4G = function() {
		if (0 === bj.lR[aE.a4H]) return this.a4I();
		bk.l5(aE.a4H);
		for (var a4E = [], fi = bR.gD[0], gM = bR.gM, aC = 0; aC < fi; aC++) {
			var hG = gM[aC];
			bD.h4.a4F(hG) && a4E.push(hG)
		}
		return a4E
	}, this.a4I = function() {
		var hG = mf[0];
		return bD.h4.a4F(hG) ? [hG] : []
	}, this.a4J = function(a4E) {
		for (var fi = a4E.length, ej = 0, hW = ah.hW, aC = 0; aC < fi; aC++) ej += hW[a4E[aC]];
		return ej
	}
}

function a44() {
	function a4L() {
		if (2 === aE.a4P) return 1;
		ax.a4Q(), aE.a4P = 2, aE.a4R = aE.a4S
	}

	function a4N() {
		bU.a49.a4T(), aY.show(1 === aE.a4U, !1, 2 === aE.a4U), bU.result.a4T(), bU.a4B.en(), bU.nH.en(), bU.nH.a4V(), aO.a4W(!0), aO.a4X(247), aO.a4X(956), aO.a4X(957), aW.nS(!0), aX.nS(!0), ax.nS(), bF.a4Y(), aE.hr && bi.a4Z.a4a(), bi.e0 = !0, be
			.a4b(), a1.a2.setState(0)
	}
	this.a4K = function() {
		a4L() || (aE.a4M = 2, a4N())
	}, this.a4O = function() {
		a4L() || (aE.a4M = 1, a4N())
	}
}

function a48() {
	var a4c = 0;
	this.en = function() {
		var a4k;
		2 === aE.a4M ? (aO.a4d(0, 59), aI.oG(2700)) : aE.lM < 7 ? (a4k = bj.lR[aE.a4H], a4k = bj.a4m[a4k], aR.a4n(L(39, [a4k]), 2, 1, 12), aO.a2t(0, L(40, [a4k]), 40, 0, bE.qN, bE.qK, -1, !1), aI.oG(2700)) : 8 === aE.lM ? (aE.hs ? aO.a4d(aE.a4i,
			3) : aE.a4U ? aO.a4d(aE.a4i, 2) : aO.a4d(1 - aE.fS, 3), aE.a4j.a2i(aE.a4i), aI.o2(aE.a4i, 2700, !1, 0)) : 9 === aE.lM ? (aO.a4o(), aI.oG(2700)) : (aO.a4p(aE.a4i), aI.o2(aE.a4i, 2700, !1, 0))
	}, this.a4V = function() {
		a4c = 0, aE.hr || aE.lO || (a4c = 54)
	}, this.nI = function() {
		var pW;
		0 !== a4c && 0 === --a4c && (pW = b1.z.a4r(), aE.lM < 7 ? pW += "/log/team" : 8 === aE.lM ? pW += "/log/1v1" : 9 === aE.lM ? pW += "/log/zombies" : pW += "/log/br", aO.a2t(720, pW, 736, 0, bE.qN, bE.ql, -1, !1), aE.a4s < 0 || (pW = b1.z
			.a4r() + "/log/?r=" + bI.f9.a3i(aE.a4s, 6), aO.a2t(1071, pW, 736, 0, bE.qN, bE.ql, -1, !1)))
	}
}

function a4C() {
	function a52() {
		var vz;
		return 8 === aE.lM ? 0 : (vz = Math.floor(ah.a53[aE.fS] / 50), (vz = Math.min(vz, 200)) / 100)
	}

	function a4u() {
		var vz = a52();
		0 === vz || aE.hs || aO.a2t(440, L(41, [vz.toFixed(2)]), 40, 0, bE.qf, bE.qK, -1, !1)
	}
	this.en = function() {
		var a4v;
		0 === bU.result.a4t || 0 === bU.result.a4E.length || 8 === aE.lM ? bD.h4.hv(aE.fS) && a4u() : (function(a4v) {
			7 !== aE.lM && 10 !== aE.lM && 9 !== aE.lM || 0 !== aE.a4U && a4v && (9 === aE.lM ? aO.a2t(600, L(45, [100 * (1 + aE.a2s)]), 40, 0, bE.qN, bE.qK, -1, !1) : aO.a2t(600, L(45, [a4v.toFixed(2)]), 40, 0, bE.qN, bE.qK, -1, !1))
		}(a4v = function() {
			aO.a2t(520, L(42), 40, 0, bE.qN, bE.qK, -1, !1);
			for (var a4E = bU.result.a4E, fi = a4E.length, hW = ah.hW, h = [], aC = 0; aC < fi; aC++) {
				var hG = a4E[aC];
				h.push({
					hG: hG,
					ej: hW[hG]
				})
			}
			h.sort((g1, g2) => g2.ej - g1.ej);
			var a4m = ah.a2u,
				ej = bU.result.a54,
				vz = bU.result.a4t,
				pW = "",
				a4v = 0;
			for (aC = 0; aC < fi; aC++) {
				var iT = h[aC].ej * vz / (100 * ej),
					a56 = a4m[h[aC].hG] + ": " + iT.toFixed(2) + "   ";
				h[aC].hG !== aE.fS || aE.hs || (a4v = iT, 9 === aE.lM && 0 !== aC && (a4v = 0)), 2 < aC && 4 !== fi ? 3 === aC && (pW += "(" + L(43, [fi - 3]) + ")") : pW += a56
			}
			aO.a2t(560, bD.pa.a57(pW), 40, 0, bE.qf, bE.qK, -1, !1), a4v ? aO.a2t(580, L(44, [a4v.toFixed(2) + " + " + a52().toFixed(2)]), 40, 0, bE.qf, bE.qK, -1, !1) : bD.h4.hv(aE.fS) && a4u();
			return a4v
		}()), 2 === aE.a4M || 7 <= aE.lM || function(a4v) {
			var a4E = bU.result.a4E,
				fi = a4E.length,
				a58 = ah.a58,
				hW = ah.hW,
				a59 = [];
			loop: for (var aC = 0; aC < fi; aC++) {
				var hG = a4E[aC],
					a5A = bD.pa.po(a58[hG]);
				if (null !== a5A) {
					for (var a5B = hW[hG], g2 = a59.length - 1; 0 <= g2; g2--)
						if (a5A === a59[g2].name) {
							a59[g2].ej += a5B, a59[g2].h.push({
								hG: hG,
								ej: a5B
							});
							continue loop
						} a59.push({
						name: a5A,
						ej: a5B,
						h: [{
							hG: hG,
							ej: a5B
						}]
					})
				}
			}
			if (0 !== a59.length) {
				a59.sort((g1, g2) => g2.ej - g1.ej);
				var h = a59[0].h,
					a5C = (h.sort((g1, g2) => g2.ej - g1.ej), "[" + a59[0].name + "]"),
					a5D = 512 * bU.result.a4t / 26214400,
					lz = (aO.a2t(0, L(46, [a5C, a5D.toFixed(4)]), 40, 0, bE.qN, bE.qK, -1, !1), h.length),
					a0c = a59[0].ej,
					a5E = 1e4 * a5D;
				for (aC = 0; aC < lz; aC++)
					if (h[aC].hG === aE.fS && !aE.hs) {
						aO.a2t(600, L(47, [(a5E * h[aC].ej / (10 * a0c)).toFixed(2)]), 40, 0, bE.qN, bE.qK, -1, !1), aO.a2t(640, L(48, [(.2 * a4v).toFixed(2), a5C]), 40, 0, bE.qN, bE.qK, -1, !1);
						break
					}
			}
		}(a4v))
	}, this.a4z = function() {
		var a50, a12;
		aE.lO || (a50 = ah, a12 = aE.fS, 0 === a50.a51[a12]) || a50.k8[a12] < 1 || 2 * a50.sn[a12] > 3 * (a50.k7[a12] + a50.k8[a12]) || a4u()
	}
}

function a45() {
	this.dt = function() {
		this.a5F = 0, this.a4E = [], this.a54 = 0, this.a4t = 0
	}, this.a4T = function() {
		var up;
		aE.lO || (up = this, 2 === aE.a4M ? up.a4E = bU.a46.a4D() : aE.ie ? up.a4E = bU.a46.a4G() : up.a4E = bU.a46.a4I(), up.a5F = bl.a5H.a5I(), up.a54 = Math.max(1, bU.a46.a4J(up.a4E)), bB.h4.sU(), 8 === aE.lM ? bU.result.a4t = 0 : up.a4t =
			100 * bU.result.a5F * (1 + aE.a2s))
	}
}

function a4A() {
	this.a4T = function() {
		if (2 === aE.a4M) aE.a4U = 2;
		else {
			if (8 === aE.lM) bD.h4.kR(0) || 0 === ah.ng[0] ? aE.a4i = 1 : bD.h4.kR(1) || 0 === ah.ng[1] ? aE.a4i = 0 : aE.a4i = +(ah.hW[1] > ah.hW[0]);
			else {
				if (aE.ie) {
					var lc = bk.a5L();
					if (aE.a4H = lc, bj.lR[lc]) return void(aE.a4U = +(bj.fg[aE.fS] === lc))
				}
				aE.a4i = mf[0]
			}
			aE.a4U = +(aE.a4i === aE.fS)
		}
	}
}

function dP() {
	this.id = 0, this.eA = 0, this.zj = null, this.zk = null, this.zl = null, this.zr = null, this.a2 = new a5M, this.dt = function() {
		var self, eA;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eA = Android.getVersion()) < 12 || (self.eA = eA, self.id = 1, self.zk = Android),
			function(self) {
				var eA;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zl = mwIOSdataX, self.zr = window.webkit.messageHandlers.iosCommandA, eA = self
					.zl.version, self.eA = eA ? Number(eA) : 0)
			}(this),
			function(self) {
				var zj;
				try {
					if (!(zj = window.localStorage)) return;
					zj.setItem("tls7", "1"), zj.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zj = zj
			}(this)
	}
}

function a5M() {
	this.a5Q = function() {
		bm.rt.a08(), bm.rt.a09(), b1.z.close(0, 3255), 0 === a1.id ? a1.zj && a1.zj.clear() : 1 === a1.id ? a1.zk.saveString(199, "") : 2 === a1.id && a1.zr.postMessage("clear")
	}, this.a5R = function() {
		2 === a1.id ? a1.zr.postMessage("showConsentForm") : 1 === a1.id && a1.zk.setState(7)
	}, this.a5S = function() {
		this.setState(14)
	}, this.iv = function() {
		return 1 === bm.buffer.zY(2)
	}, this.a5T = function() {
		bm.buffer.zX(102, "")
	}, this.setState = function(a5U) {
		1 === a1.id && 5 <= a1.eA && a1.zk.setState(a5U)
	}, this.a3 = function() {
		var a5V;
		1 === a1.id && 7 <= a1.eA ? a1.zk.setState(5) : 2 === a1.id ? a1.zr.postMessage("reload 0") : ((a5V = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a5V.toString())
	}, this.ee = function() {
		0 !== a1.id && (1 === a1.id ? a1.zk.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eA ? a1.zr.postMessage("prepare ad 2904813909") : a1.zr.postMessage("loadAds 2904813909")))
	}, this.ek = function(ej) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eA && (a1.zk.presentAd(ej), !0) : 2 === a1.id && 0 !== a1.eA && (a1.zr.postMessage("showAd"), !0))
	}, this.e2 = function() {
		2 === a1.id && a1.eA < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a5W + "' target='_blank'>" + bN
			.a5W + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.r4)]))
	}
}

function de() {
	function a5Y(e) {
		mO(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a5Z()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qk)]))
	}

	function a5l(e) {
		mO(e), u.v(4, 5, new w(L(50), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a5g(e), !0))
	}

	function a5g(e) {
		var pW = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pW : 4527 === e ? "Player already in lobby" + pW : 4577 === e ? "Your IP is banned." + pW : 4530 === e ? "Lobby Timeout" + pW : 4528 === e ?
			"Lobby Kick: Another login detected." + pW : 4540 === e ? "You have been kicked." + pW : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pW : 4555 === e ? "This Account is blocked." + pW :
			4580 === e ? "More Gold needed" + pW : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pW : 4591 === e ? "The algo determined you are a bot." + pW : "Unknown error" + pW
	}

	function mO(e) {
		a5b(e), u.z.a0()
	}

	function a5b(e) {
		4540 === e && b1.z.a5n(e);
		var a5U = ab.a5a();
		bx.close(), 6 === a5U ? b1.z.a5n(e) : bq.fF ? (u.y(), bq.y4(), b1.z.close(b1.z.fG, 3256)) : 8 === a5U && aE.a5o(!0)
	}
	this.q = [], this.a5X = function(oY, e) {
		if (1 === oY && __fx.customLobby.isActive() && 6 !== ab.a5a() && __fx.customLobby.setActive(!1), console.log("socket close index " + oY + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.a03(0)) && (console.log("Reset to: " +
				data.pe), bm.rt.pz(105, data.pe), bm.rt.pz(106, data.password)), 8 === u.vd && 0 === oY)
			if (4211 === e) a5Y(e);
			else {
				if (bq.fF && (4495 === e || 4480 === e) && b1.z.fG !== oY) return void u.a5Z();
				if (8 !== ab.a5a() && a5b(), 4480 === e) return bm.rt.a0A(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a5e() && 10 === u.a5e().a5f && (data = u.a5e().a5f), u.v(4, data, new w(L(50), a5g(e), !0))
			}
		else {
			data = ab.a5a();
			if (6 === data) {
				if (4211 === e) return void a5Y(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5h(oY)
			} else if (bq.fF) {
				if (oY !== b1.z.fG) return
			} else {
				if (8 === data) return void(oY !== b1.z.a5i || aE.lO || 1 !== aE.a4P || aE.hr || aO.a5j(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mO(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a5Z()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qk)]))
			} : a5l)(e)
		}
	}, this.a5m = function(e) {
		this.q.push(e), 8 === ab.a5a() ? aE.lO || 1 !== aE.a4P || aO.a5j(L(51, [e])) : a5l(e)
	}, this.t = function() {
		this.q.push(3268), mO(3268)
	}
}

function dE() {
	var a5p, a5q, a5r = -15e3,
		a5s = !1;

	function hw(e) {
		a6C() || (a5s = !0, a6D(e, 1), b1.z.a6E(b1.z.a5i), a6F(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a61(e) {
		a5r = bi.ei, a6D(e, 1), b1.z.a6E(b1.z.a5i), 0 < e.touches.length && (a5p = Math.floor(i.l * e.touches[0].clientX), a5q = Math.floor(i.l * e.touches[0].clientY), av.a61(e) || a6F(a5p, a5q))
	}

	function a6F(fp, fr) {
		u.hw(fp, fr), 0 === aE.a4P ? ab.hw(fp, fr) : bF.a6G(fp, fr) || bh.hw(fp, fr) || aY.hw(fp, fr) || aM.a6H(fp, fr) || aQ.hw(fp, fr) || 0 <= aN.hw(fp, fr) || ax.hw(fp, fr) || bM.a6I(fp, fr) || aM.a6J(fp, fr)
	}

	function a5x(e) {
		a6C() || (a5s = !0, a6D(e, 1), a6K(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a62(e) {
		a5r = bi.ei, a6D(e, 1), 0 < e.touches.length && (a5p = Math.floor(i.l * e.touches[0].clientX), a5q = Math.floor(i.l * e.touches[0].clientY), av.a62(e) || a6K(a5p, a5q))
	}

	function a6K(fp, fr) {
		bM.u0() || (bM.hn = fp, bM.ho = fr), u.a5x(fp, fr), 0 === aE.a4P ? ab.a5x(fp, fr) : (bW.hp(fp, fr), bh.a5x(fp, fr) || (aN.a5x(fp, fr), aM.iV() ? aM.a5x(fp, fr) : aS.hx ? aS.a5x(fp) && (bi.e0 = !0) : (aW.a5x(fp, fr), aT.oC && aT.a5x(fp, fr) &&
			(bi.e0 = !0))))
	}

	function a5z(e) {
		a6C() || (a6D(e, 1), a6L(), 0 === aE.a4P ? (ab.click(-1024, -1024), aU.reset()) : (aW.a6M(-1024, -1024), aN.a5x(-1024, -1024), aS.a6N(), aT.oC = !1))
	}

	function a5y(e) {
		a6C() || (a6D(e, 1), a6O(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5v && (bM.a5v = !1, e.preventDefault()))
	}

	function click(e) {
		a6C() || a6D(e, 1)
	}

	function a63(e) {
		a5r = bi.ei, a6D(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a4P ? aT.oC = !1 : av.a6P() || (a6O(a5p, a5q, !1), bM.a5v && (bM.a5v = !1, e.preventDefault()))
	}

	function a64(e) {
		a5r = bi.ei, a6D(e, 1), a6O(a5p, a5q, !1), bM.a5v && (bM.a5v = !1, e.preventDefault())
	}

	function a65(e) {}

	function a66(e) {}

	function a67(e) {
		a6C() || a6D(e, 0)
	}

	function a6O(fp, fr, a6Q) {
		a6L(), 0 === aE.a4P ? ab.click(fp, fr) : (aW.a6M(fp, fr), bh.a6M(), aS.a6N(), aT.oC = !1, aM.click(fp, fr, a6Q) ? bi.e0 = !0 : aN.a5y(fp, fr))
	}

	function a6L() {
		u.a6L()
	}

	function a60(e) {
		var fp, fr, deltaY;
		a6C() || (a6D(e, 1), b1.z.a6E(b1.z.a5i), fp = Math.floor(i.l * e.clientX), fr = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a60(fp, fr, deltaY), 0 === aE.a4P ? ab.a60(fp, fr, deltaY) : aW.a60(fp, fr,
			deltaY) || (aS.a6R(fp, fr) ? aS.a60(deltaY) && (bi.e0 = !0) : aT.a60(fp, fr, deltaY)))
	}

	function a68(e) {
		a6D(e, 0)
	}

	function a6D(e, id) {
		0 === id && u.iV() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a5a() && e.preventDefault()
	}

	function a69(e) {
		if (__fx.keybindHandler(e.key)) return;
		a6C() || 0 < i.vK || (e = e.code) && e.length && (ba.es(e, 18) ? at.a6T(3) : ba.es(e, 22) ? at.a6T(0) : ba.es(e, 20) ? at.a6T(1) : ba.es(e, 24) ? at.a6T(2) : ba.es(e, 10) ? aS.a6U(31 / 32) : ba.es(e, 8) ? aS.a6U(32 / 31) : ba.es(e, 6) ? aS
			.a6U(7 / 8) : ba.es(e, 4) ? aS.a6U(8 / 7) : ba.es(e, 14) ? 0 !== aE.a4P && aT.a60(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.es(e, 16) ? 0 !== aE.a4P && aT.a60(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.es(e, 0) ?
			aE.a4P && bW.hq(0) : ba.es(e, 2) ? aE.a4P && bW.hq(1) : ba.es(e, 30) ? aE.a4P && bW.hq(2) : ba.es(e, 26) ? aE.a4P && bW.iP() : ba.es(e, 28) && aE.a4P && bW.iU())
	}

	function a6A(e) {
		if (!a6C() && !(0 < i.vK || bi.ei < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a6V(1) || "Space" === code && u.a6V(0))) return bq.fF ? bq.yF.a6V(code) ? void 0 : void("Escape" === code && bM.gB()) : void(8 !== ab.a5a() && ab.a6V(e) ? bi.e0 = !0 : "Escape" === code ?
				bM.gB() : ba.es(code, 18) ? at.a6W(3) : ba.es(code, 22) ? at.a6W(0) : ba.es(code, 20) ? at.a6W(1) : ba.es(code, 24) ? at.a6W(2) : ba.es(code, 12) ? bF.a6X(!aE.oA) : "Space" === code && aE.a4P && (aN.ht && aN.a6Y(), aE.hr) &&
				bF.a6Z(!1))
		}
	}

	function a6B() {
		"hidden" !== document.visibilityState && (bi.e0 = !0)
	}

	function a6C() {
		return a5r + 15e3 > bi.ei
	}

	function resize() {
		i.a6b()
	}
	this.a5t = 0, this.a5u = "", this.a5v = !1, this.hn = 0, this.ho = 0, this.dt = function() {
		a5w.addEventListener("mousedown", hw, {
			passive: !1
		}), a5w.addEventListener("mousemove", a5x, {
			passive: !1
		}), a5w.addEventListener("mouseup", a5y, {
			passive: !1
		}), a5w.addEventListener("click", click, {
			passive: !1
		}), a5w.addEventListener("mouseleave", a5z, {
			passive: !1
		}), a5w.addEventListener("wheel", a60, {
			passive: !1
		}), a5w.addEventListener("touchstart", a61, {
			passive: !1
		}), a5w.addEventListener("touchmove", a62, {
			passive: !1
		}), a5w.addEventListener("touchend", a63, {
			passive: !1
		}), a5w.addEventListener("touchcancel", a64, {
			passive: !1
		}), a5w.addEventListener("dragover", a65), a5w.addEventListener("drop", a66), a5w.addEventListener("dblclick", a67), document.addEventListener("contextmenu", a68), document.addEventListener("keydown", a69), document.addEventListener(
			"keyup", a6A), document.addEventListener("visibilitychange", a6B), window.addEventListener("resize", resize)
	}, this.a6I = function(fp, fr) {
		return !!bF.hw(fp, fr) || !!(aW.hw(fp, fr) || aT.hw(fp, fr) || aS.hw(fp, fr) || aO.hw(fp, fr))
	}, this.a6a = a6C, this.u0 = function() {
		return !a5s || 0 < a5r
	}, this.gB = function() {
		if (!u.iV()) return 8 === ab.a5a() ? aE.oA ? void bF.a6X(!1) : bh.iV ? void bh.a6Y() : void aN.a6Y() : void(7 !== ab.a5a() && 6 === ab.a5a() && aa.a6c());
		u.a6V(2)
	}
}

function c7() {
	this.t6 = new a6d, this.tg = new a6e, this.h4 = new a6f, this.pa = new a6g, this.p4 = new a6h, this.p3 = new a6i, this.canvas = new a6j, this.color = new a6k, this.a6l = new a6m, this.dt = function() {
		this.t6.a07()
	}
}

function a6e() {
	this.a10 = function(h) {
		h.fill(0)
	}, this.a6n = function(h) {
		for (var fi = h.length, aC = 0; aC < fi; aC++) h[aC] = []
	}, this.a6o = function(a3X, a6p) {
		for (var a3Y = bR.gI, aC = 0; aC < 3; aC++) a3Y[aC] = a6p * a3X[aC];
		return a3Y
	}, this.a6q = function(a3X, a3Y, a6r) {
		for (var kJ = 0, aC = 0; aC < 3; aC++) kJ += Math.abs(a3X[aC] - a3Y[aC]);
		return a6r <= kJ
	}, this.a6s = function(a3X, a6t) {
		for (var aC = 0; aC < 3; aC++) a3X[aC] = bO.iu(a3X[aC] + a6t, 0, 255);
		return a3X
	}, this.a6u = function(h, vv, vw) {
		vw = vw || h.length - 1;
		for (var a6v = 0, aC = vv = vv || 0; aC <= vw; aC++) a6v += h[aC];
		return a6v
	}, this.a6w = function(h, a6x) {
		for (var aC, a6y, fi = h.length, a6z = [], g1 = fi - 1; 0 <= g1; g1--) {
			for (aC = a6y = 0; aC < fi; aC++) a6x(h[aC]) < a6x(h[a6y]) && (a6y = aC);
			fi--, a6z.push(h[a6y]), h[a6y] = h[fi], h.pop()
		}
		return a6z
	}, this.min = function(h) {
		var aC, gA, fi = h.length;
		if (0 === fi) return 0;
		for (gA = h[0], aC = 1; aC < fi; aC++) gA = Math.min(gA, h[aC]);
		return gA
	}, this.max = function(h) {
		var fi = h.length;
		if (0 === fi) return 0;
		for (var gA = h[0], aC = 1; aC < fi; aC++) gA = Math.max(gA, h[aC]);
		return gA
	}, this.a70 = function(h, gA) {
		for (var fi = h.length, hB = 0, aC = 0; aC < fi; aC++) hB += h[aC] > gA;
		return hB
	}, this.a71 = function(a72, a73, min) {
		for (var fi = a73[0], aC = fi - 1; 0 <= aC; aC--) a72[aC] < min && (a72[aC] = a72[--fi]);
		a73[0] = fi
	}, this.a74 = function(h, fi, value) {
		for (var aC = 0; aC < fi; aC++) h[aC] -= value
	}, this.a75 = function(h) {
		for (var fi = h.length, aC = 0; aC < fi; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a76 = function(pW, h, a77) {
		h.fill(0);
		for (var vz = pW.split(","), fi = Math.min(vz.length, h.length), aC = 0; aC < fi; aC++) h[aC] = Math.min(parseInt(vz[aC]), a77)
	}, this.a78 = function(pW, h, maxLength) {
		h.fill("");
		for (var vz = pW.split('"'), fi = Math.min(vz.length, 2 * h.length), ib = 0, aC = 1; aC < fi; aC += 2) h[ib++] = vz[aC].slice(0, maxLength)
	}, this.a79 = function(h, hB) {
		if (0 === hB) h.fill(0);
		else {
			var a6v = this.a6u(h),
				fi = h.length;
			if (0 === a6v) h.fill(bO.g9(hB, fi));
			else
				for (var aC = 0; aC < fi; aC++) h[aC] = bO.g9(hB * h[aC], a6v);
			if (0 === (a6v = this.a6u(h))) h[1] = hB;
			else
				for (var ib = 0; a6v++ < hB;) h[ib = (ib + 1) % fi] && h[ib]++
		}
	}, this.a7A = function(h) {
		if (!h) return 0;
		var fi = h.length;
		if (0 === fi) return 0;
		for (var gA = h[fi - 1], aC = fi - 2; 0 <= aC; aC--)
			if (h[aC] !== gA) return aC + 2;
		return 1
	}, this.a7B = function(h) {
		for (var a6v = 0, aC = 0; aC < h.length; aC++) a6v += h[aC].length;
		return a6v
	}, this.a7C = function(a7D) {
		for (var h = [], aC = 0; aC < a7D.length; aC++) h = h.concat(a7D[aC]);
		return h
	}, this.has = function(h, gA) {
		for (var fi = h.length, aC = 0; aC < fi; aC++)
			if (h[aC] === gA) return !0;
		return !1
	}
}

function a6j() {
	this.a3B = function(a7E, eR, a7F) {
		var ih = a7E.height,
			a7G = bD.t6.a0q(ih, ih),
			io = bD.t6.getContext(a7G);
		return function(j, io, a7F) {
			io.fillStyle = a7F, io.beginPath(), io.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), io.fill()
		}(ih, io, a7F), io.drawImage(a7E, -eR * ih, 0), a7G
	}, this.a7I = function(a7J) {
		var io, ik, ih = a7J.height;
		return a7J.width === ih && (ik = (io = bD.t6.getContext(a7J, !0)).getImageData(0, 0, ih, ih), bD.p3.a7K(ik.data, ih, ih, .9), io.putImageData(ik, 0, 0)), a7J
	}
}

function a6k() {
	this.a7L = function(gA) {
		return [gA >> 12 & 63, gA >> 6 & 63, 63 & gA]
	}, this.a7M = function(gA) {
		for (var h = this.a7L(gA), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a7N = function(gA) {
		gA = this.a7M(gA);
		return bD.color.qF(gA[0], gA[1], gA[2])
	}, this.a7O = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qF = function(eQ, vz, g2) {
		return "rgb(" + eQ + "," + vz + "," + g2 + ")"
	}, this.qH = function(eQ, vz, g2, g1) {
		return "rgba(" + eQ + "," + vz + "," + g2 + "," + g1.toFixed(3) + ")"
	}, this.u2 = function(es) {
		for (var h = es.split("(")[1].split(","), gH = bR.gH, aC = 0; aC < 3; aC++) gH[aC] = parseInt(h[aC]);
		return 4 === h.length ? gH[3] = 255 * parseFloat(h[3].slice(0, -1)) : gH[3] = 255, gH
	}, this.u3 = function(a7P, fl) {
		for (var h = a7P.slice(a7P.indexOf("(") + 1, a7P.indexOf(")")).split(","), gH = bR.gH, aC = 0; aC < 3; aC++) gH[aC] = bO.iu(parseInt(h[aC].trim(), 10) + fl, 0, 255);
		return 3 === h.length ? this.qF(gH[0], gH[1], gH[2]) : (a7P = parseFloat(h[3].trim()), this.qH(gH[0], gH[1], gH[2], a7P = 0 === a7P ? .3 : a7P))
	}, this.yi = function(a7Q, a7R) {
		for (var kJ = 0, aC = 0; aC < 3; aC++) kJ += Math.abs(a7R[aC] - a7Q[aC]);
		if (!(240 <= kJ))
			for (aC = 0; aC < 3; aC++) a7R[aC] = a7Q[aC] + (a7Q[aC] < 128 ? 80 : -80)
	}, this.a7S = function(h) {
		for (var pW = "#", aC = 0; aC < 3; aC++) {
			var eQ = h[aC].toString(16);
			pW += 1 === eQ.length ? "0" + eQ : eQ
		}
		return pW
	}, this.a7T = function(pW) {
		var eQ, vz;
		return pW.length < 7 ? bE.qE : (eQ = parseInt(pW.slice(1, 3), 16), vz = parseInt(pW.slice(3, 5), 16), pW = parseInt(pW.slice(5, 7), 16), this.qF(eQ, vz, pW))
	}
}

function a6h() {
	this.a7U = function(pW, font, maxWidth) {
		if (font && (z2.font = font), z2.measureText(pW).width <= maxWidth) return pW;
		for (var aC = pW.length - 1; 1 <= aC; aC--)
			if (pW = pW.substring(0, aC), z2.measureText(pW + "...").width <= maxWidth) return pW + "...";
		return "..."
	}
}

function a6m() {
	var a7W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7X = function(ei) {
		var a7Z, pW = new Date(ei.getTime() - 6e4 * ei.getTimezoneOffset()).toUTCString();
		return pW.length < 12 || (pW = pW.substring(5, pW.length), 0 === (ei = ei.getTimezoneOffset())) ? pW : (a7Z = (ei < 0 ? "+" : "-") + bO.g9(Math.abs(ei), 60), 0 == (ei = Math.abs(ei) % 60) ? pW + a7Z : pW + a7Z + ":" + (ei < 10 ? "0" :
			"") + ei)
	}, this.a7a = function(ei) {
		var pW = ei.toUTCString();
		return pW.length < 12 ? pW : function(ei) {
			return a7W[ei.getUTCDay()]
		}(ei) + ", " + pW.substring(5, pW.length - 4)
	}
}

function a6d() {
	var a7c = null,
		a7m = (this.a3S = 0, this.a07 = function() {
			var gA = bm.buffer.data[5].value;
			a7c = "px " + gA, "system-ui" !== gA && (a7c += ", system-ui"), this.a3S = ig(32, 32, ["a", "b", "m"], 200, a7c)
		}, this.a0q = function(j, k) {
			var es = document.createElement("canvas");
			return es.width = j, es.height = k, es
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(p4, j, k) {
			return p4.getImageData(0, 0, j, k)
		}, this.t9 = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7c : 1 === type ? "bold " + size + a7c : 2 === type ? "lighter " + size + a7c : 3 === type ? "italic " + size + a7c : 4 === type ? "oblique " + size + a7c : 5 === type ?
				"small-caps " + size + a7c : "small-caps bold " + size + a7c
		}, this.textAlign = function(io, id) {
			io.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(io, id) {
			io.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tB = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.th(bf.vE) + " solid " + (color || bE.qN);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.w1 = function(e, fp, fr, j, k) {
			e = e.style;
			e.left = this.w2(fp), e.top = this.w2(fr), e.width = this.w2(j), e.height = this.w2(k)
		}, this.ta = function(gA) {
			return 1 + gA * a1.a2.iv()
		}, this.t7 = function(oJ, hH) {
			return oJ * this.ta(void 0 === hH ? .5 : hH) * i.iw / i.l
		}, this.w0 = function(oJ, hH) {
			return oJ * this.ta(void 0 === hH ? .5 : hH) * i.iw
		}, this.vh = function(oJ, hH, a7d) {
			return this.ta(hH) * Math.min(oJ * i.iw, a7d * i.j) / i.l
		}, this.th = function(gA) {
			return gA.toFixed(1) + "px"
		}, this.w2 = function(gA) {
			return this.yU(gA).toFixed(1) + "px"
		}, this.yU = function(gA) {
			return gA / i.l
		}, this.a7f = function(a7g) {
			for (var pW = "<ul>", fi = a7g.length, aC = 0; aC < fi; aC++) pW += "<li>" + a7g[aC][0] + ": <a href='" + a7g[aC][1] + "' target='_blank'>" + a7g[aC][0] + "</a></li>";
			return pW += "</ul>"
		}, this.a7h = function(a7i) {
			return "<a href='" + a7i + "' target='_blank'>" + a7i + "</a>"
		}, this.a7j = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.yg = function(e) {
			var ej = e.textContent;
			bD.pa.a7k(ej, "✔") || (1 === ej.length ? e.textContent = "✔" : e.textContent = ej + " ✔", setTimeout(function() {
				e.textContent = ej
			}, 500))
		}, this.measureText = function(pW) {
			return z2.measureText(pW).width
		}, this.vr = function(a7l) {
			a7l.style.overflowX = "auto", a7l.style.overflowY = "hidden", a7l.style.whiteSpace = "nowrap", a7l.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.w4 = this.scrollLeft, e.preventDefault())
			}), a7l.addEventListener("scroll", function() {
				this.w4 = this.scrollLeft
			})
		}, -1e4);

	function a7p(a7o) {
		performance.now() - a7m < 600 || (a7m = performance.now(), a7o())
	}
	this.wg = function(e, a7n, a7o) {
		a7n && (e.onclick = function() {
			performance.now() - a7m < 600 || a7n()
		}), e.addEventListener("contextmenu", function(v0) {
			v0.preventDefault(), a7p(a7o)
		}), e.addEventListener("touchstart", function(v0) {
			2 === v0.touches.length && (v0.preventDefault(), a7p(a7o))
		}, {
			passive: !1
		})
	}
}

function a6f() {
	this.hu = function(a5U) {
		return 0 === a5U ? 1 === aE.a4P && aE.i7 : 1 === a5U ? 1 === aE.a4P && !aE.i7 : 2 === aE.a4P
	}, this.hv = function(player) {
		return 0 !== ah.ng[player] && 2 !== ah.a7q[player]
	}, this.a7r = function(player) {
		return player === aE.fS && 2 !== ah.a7q[player]
	}, this.li = function(player, kD) {
		return player !== kD && (0 === bj.fg[player] || bj.fg[player] !== bj.fg[kD])
	}, this.mp = function() {
		return am.la < 2 ? 0 : aE.ie ? 1 < bk.a7s() : ah.hW[mf[1]]
	}, this.a7t = function() {
		var la = am.la;
		if (0 !== la) {
			if (!aE.ie) return !this.kR(mf[0]);
			for (var fg = bj.fg, lc = bk.ld(), lf = am.lf, aC = la - 1; 0 <= aC; aC--) {
				var hG = lf[aC];
				if (fg[hG] === lc && !this.kR(hG)) return 1
			}
		}
		return 0
	}, this.a7u = function(player) {
		return player === aE.fS
	}, this.a7v = function(kD, oJ) {
		return ah.hk[aE.fS] < oJ * ah.hk[kD]
	}, this.kR = function(player) {
		return player >= aE.l4 || 2 === ah.a7q[player]
	}, this.m2 = function(player) {
		return 0 !== ah.ng[player]
	}, this.a4F = function(player) {
		return player < aE.l4
	}, this.sl = function(a7w, a7x) {
		return a7w !== a7x
	}, this.h7 = function(player, gA) {
		var min;
		return gA = this.a7y(player, gA), ah.hk[player] += gA, ah.a7z[player] && (min = Math.min(ah.a7z[player], ah.hk[player]), ah.a7z[player] -= min, ah.hk[player] -= min), gA
	}, this.a7y = function(player, gA) {
		var a80 = ah.hk[player];
		return gA = Math.min(gA, ah.hW[player] * aE.a81 - a80), gA = Math.min(gA, aE.a82 - a80), Math.max(gA, 0)
	}, this.nC = function(player, jM, a83, a84) {
		var a80 = ah.hk[player],
			jM = bO.g9(a80 * (jM + 1), 1024),
			a83 = bO.g9(a83 * a80, 1024),
			jM = Math.min(jM, a80 - a83);
		return jM = b5.a86(player, jM), bR.gF[0] = jM, bR.gF[1] = a83, a84 <= jM
	}, this.sF = function(player, rx, rw) {
		var player = ah.hk[player],
			a85 = bO.g9(64 * player, 1024);
		return rx = Math.min(rx, player - a85), rx = this.a7y(rw, rx), bR.gF[0] = rx, bR.gF[1] = a85, 1 <= rx
	}, this.a87 = function(player, rx, rw) {
		var player = ah.hk[player],
			a85 = bO.g9(64 * player, 1024);
		return rx = Math.min(rx, player - a85), this.a7y(rw, rx)
	}, this.sH = function(rx, rw) {
		return rx = this.a7y(rw, rx), bR.gF[0] = rx, bR.gF[1] = 0, 1 <= rx
	}, this.jL = function(player, a88) {
		return bO.g9(ah.hk[player] * (a88 + 1), 1024)
	}, this.a89 = function(player, a83) {
		a83 = bO.g9(a83 * ah.hk[player], 1024);
		bR.gF[1] = a83, ah.hk[player] -= a83
	}, this.h5 = function(player, a8A) {
		var gT, gV, g2 = ah.hk[player];
		return a8A <= g2 ? ah.hk[player] -= a8A : (ah.hk[player] = 0, gV = ah.a7z[player] + (gT = 5 * ((g2 = a8A - g2) >> 2)), bg.h8(player, gT - g2, 12), gV <= aE.a8B ? ah.a7z[player] = gV : (ah.a7z[player] = aE.a8B, bg.h8(player, gV - aE.a8B,
			18))), a8A
	}, this.mG = function(player, jM) {
		var hk = ah.hk,
			a80 = hk[player],
			jM = bO.g9(a80 * (jM + 1), 1024),
			a85 = Math.max(bO.g9(a80, 10), 1e3);
		return (jM = Math.min(jM, a80 - a85)) < 0 ? (hk[player] = 0, a85 = Math.min(1e3, a80 + aE.a8B - ah.a7z[player]), bR.gF[1] = a85, ah.a7z[player] += a85 - a80, 0) : (bR.gF[1] = a85, jM = b5.a86(player, jM), hk[player] -= a85 + jM, b5.a8C(
			player, jM), jM)
	}, this.nE = function(player) {
		var iS = bR.gF[0];
		ah.hk[player] -= iS + bR.gF[1], b5.a8C(player, iS)
	}, this.sm = function(player, kD) {
		return (kD = Math.min(kD, aE.ff)) < aE.ff && 0 === ah.ng[kD] && (kD = aE.ff), (bR.fe[0] = kD) === aE.ff || bw.fb(player, kD)
	}, this.sp = function(player, rw) {
		return 0 !== ah.ng[rw] && !bw.fb(player, rw)
	}, this.a8D = function(player, a8E) {
		for (var hG, fi = am.la, a8F = 0, a8G = mf, aC = 0; aC < fi; aC++)
			if (hG = a8G[aC], !this.kR(hG)) {
				if (player === hG) return !0;
				if (++a8F > a8E) return !1
			} return !1
	}, this.mb = function(hG) {
		var a8H = aE.ie ? bk.lb() : ah.hW[mf[0]];
		return a8H >= bO.g9(hG * aE.ko, 100)
	}, this.a8I = function(gA, min, max) {
		return Math.floor(bO.iu(isNaN(gA) ? 0 : Number(gA), min, max))
	}
}

function a6i() {
	this.a8J = function(canvas, a8K, a8L) {
		var j = canvas.width,
			k = canvas.height,
			es = bD.t6.a0q(j, k),
			io = bD.t6.getContext(es, !0),
			canvas = (io.drawImage(canvas, 0, 0), io.getImageData(0, 0, j, k));
		return a8K(canvas.data, j, k, a8L), io.putImageData(canvas, 0, 0), es
	}, this.a8M = function(a11, j, k) {
		for (var fp = j - 1; 0 <= fp; fp--)
			for (var fr = k - 1; 0 <= fr; fr--) {
				var aC = 4 * (fp + fr * j);
				a11[3 + aC] = a11[aC], a11[aC] = a11[1 + aC] = a11[2 + aC] = 255
			}
	}, this.a8N = function(a11, j, k) {
		for (var fp = j - 1; 0 <= fp; fp--)
			for (var fr = k - 1; 0 <= fr; fr--) {
				var aC = 4 * (fp + fr * j);
				a11[1 + aC] > a11[2 + aC] + 10 && (a11[3 + aC] = a11[aC], a11[1 + aC] = a11[2 + aC])
			}
	}, this.a8O = function(a11, j, k) {
		for (var fp = j - 1; 0 <= fp; fp--)
			for (var fr = k - 1; 0 <= fr; fr--) {
				var g1, gA, aC = 4 * (fp + fr * j);
				a11[1 + aC] > a11[2 + aC] + 10 && (gA = 0 < (g1 = 255 - a11[1 + aC] + a11[2 + aC]) ? Math.min(255, Math.round(255 * a11[2 + aC] / g1)) : 0, a11[aC] = a11[1 + aC] = a11[2 + aC] = gA, a11[3 + aC] = g1)
			}
	}, this.a8P = function(a11, j, k, a8L) {
		for (var gap = Math.floor(Math.min(j, k) * a8L), fp = 0; fp < j; fp++)
			for (var aC, fr = 0; fr < k; fr++)(fp < gap || fr < gap || j - gap <= fp || k - gap <= fr) && (a11[3 + (aC = 4 * (fp + fr * j))] = 255 - 255 * (a11[1 + aC] - a11[aC]) / (255 - a11[aC]))
	}, this.a8Q = function(a11, j, k, a8L) {
		for (var fp = j - 1; 0 <= fp; fp--)
			for (var fr = k - 1; 0 <= fr; fr--) {
				var aC = 4 * (fp + fr * j);
				a11[aC] = a8L[0], a11[1 + aC] = a8L[1], a11[2 + aC] = a8L[2]
			}
	}, this.a8R = function(a11, j, k, a8L) {
		for (var gap = Math.floor(j * a8L), fp = 0; fp < j; fp++)
			for (var aC, fr = 0; fr < k; fr++)(fp < gap || fr < gap || j - gap <= fp || k - gap <= fr) && (a11[aC = 4 * (fp + fr * j)] = a11[1 + aC] = a11[2 + aC] = 0)
	}, this.a8S = function(a11, j, k) {
		for (var fr, aC, fp = j - 1; 0 <= fp; fp--)
			for (fr = k - 1; 0 <= fr; fr--) 200 < a11[1 + (aC = 4 * (fp + fr * j))] && a11[1 + aC] - 20 > a11[aC] && a11[1 + aC] - 20 > a11[2 + aC] ? a11[aC] + a11[2 + aC] < 40 ? a11[3 + aC] = 0 : (a11[3 + aC] = a11[aC], a11[aC] = 255, a11[1 +
				aC] = 255, a11[2 + aC] = 255) : a11[aC] < 50 && a11[1 + aC] < 50 && a11[2 + aC] < 50 && (a11[aC] + a11[1 + aC] + a11[2 + aC] < 50 ? a11[3 + aC] = 180 : a11[3 + aC] = 180 + Math.floor(75 * (a11[aC] + a11[1 + aC] + a11[2 + aC] -
				50) / 100))
	}, this.a8T = function(a11, j, k) {
		for (var fr, aC, fp = j - 1; 0 <= fp; fp--)
			for (fr = k - 1; 0 <= fr; fr--) a11[1 + (aC = 4 * (fp + fr * j))] > a11[aC] + 20 && a11[1 + aC] > a11[2 + aC] + 20 && a11[aC] + a11[2] < 40 && (a11[3 + aC] = 255 - a11[1 + aC], a11[aC] = a11[1 + aC] = a11[2 + aC] = a11[aC])
	}, this.a7K = function(a11, j, k, a8L) {
		for (var eQ = j >> 1, fp = 0; fp < j; fp++)
			for (var fr = 0; fr < k; fr++) Math.sqrt((fp - eQ) * (fp - eQ) + (fr - eQ) * (fr - eQ)) > a8L * eQ && (a11[4 * (fp + fr * j) + 3] = 0)
	}
}

function a6g() {
	var a8U = {
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
		a8V = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uV = function(eu) {
		return eu.replace(a8V, function(match) {
			return a8U[match] || match
		})
	}, this.a3i = function(gA) {
		var aC, a8W, a8X, a8Y, a8Z;
		if (gA < 0) return "-" + this.a3i(Math.abs(gA));
		if (gA < 1e3) return gA.toString();
		for (a8W = Math.floor(Math.log(gA + .5) / Math.log(10)) + 1, a8X = Math.floor((a8W - 1) / 3), a8Z = (a8Y = gA.toString()).substring(a8W - 3, a8W), aC = 1; aC < a8X; aC++) a8Z = a8Y.substring(a8W - 3 * (aC + 1), a8W - 3 * aC) + " " + a8Z;
		return a8Y.substring(0, a8W - 3 * a8X) + " " + a8Z
	}, this.a8a = function(hG, a8W) {
		return hG.toFixed(a8W) + "%"
	}, this.a8b = function(gA, a8c) {
		return gA.toFixed(bO.iu(Math.floor((void 0 === a8c ? 3 : a8c) - Math.log10(Math.max(gA, 1))), 0, 8))
	}, this.a8d = function(gA, oJ, a8W) {
		return (gA * oJ).toFixed(a8W)
	}, this.po = function(username) {
		var fm, fX = username.indexOf("[");
		return !(fX < 0) && 1 < (fm = username.indexOf("]")) - fX && fm - fX <= 8 ? username.substring(fX + 1, fm).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.po;
	this.a8e = function(pW) {
		for (var g1 = Math.floor(.5 * pW.length + .5), oP = Math.floor(.5 * (g1 - 1)), aC = 0; aC < oP; aC++)
			for (var g2 = -1; g2 < 2; g2 += 2) {
				var es = g1 + g2 * aC;
				if (" " === pW[es]) return [this.a57(pW.substring(0, es)), this.a8f(pW.substring(es))]
			}
		return [pW.substring(0, g1), pW.substring(g1)]
	}, this.a8f = function(pW) {
		for (var fi = pW.length, aC = 0; aC < fi; aC++)
			if (" " !== pW[aC]) return pW.substring(aC);
		return pW
	}, this.a57 = function(pW) {
		for (var aC = pW.length - 1; 0 <= aC; aC--)
			if (" " !== pW[aC]) return pW.substring(0, aC + 1);
		return pW
	}, this.a8g = function(pW, a8h) {
		return pW.split("(")[0] + "(🧈 " + a8h.toFixed(2) + ")"
	}, this.startsWith = function(pW, a8i) {
		return pW.substring(0, a8i.length) === a8i
	}, this.a7k = function(pW, a8i) {
		var fi = pW.length;
		return pW.substring(fi - a8i.length, fi) === a8i
	}, this.a8j = function(h, a8k, a8l) {
		var pW = "",
			fi = h.length - 1;
		a8l = a8l || "";
		for (var aC = 0; aC < fi; aC++) pW += a8l + h[aC] + a8l + ",", (aC + 1) % a8k == 0 && (pW += "\n");
		return pW += a8l + h[fi] + a8l
	}, this.a8m = function(pW, a3X, a3Y) {
		return pW.replace(new RegExp(a3X, "g"), a3Y)
	}
}

function a8n() {
	this.er = function(player, fU) {
		aJ.a2L(player, bP.fq(fU), bP.fs(fU)) && (bi.e0 = !0), aE.lO && this.en()
	}, this.en = function() {
		aE.i7 = !1;
		for (var aC = 0; aC < aE.l4; aC++) 0 !== ah.ng[aC] && 0 === ah.hW[aC] && aJ.a2S(aC);
		0 !== ah.ng[aE.fS] ? (bg.nc[7] = ah.hW[aE.fS], bg.nc[8] = ah.hk[aE.fS], aS.a8o(), aX.a8p(), aE.hr || aE.hs || aI.o1(ah.jc[aE.fS] - 5, ah.je[aE.fS] - 5, ah.jd[aE.fS] + 5, ah.jf[aE.fS] + 5), aw.dt()) : aY.show(!1, !1, !1, !0), aO.a8q(18),
			ag.a8r(), ag.nS(!0), bS.z.a8s(), aM.uW(), aE.sk = null, be.a8t = !0, be.a8u(), aE.lO && a1.a2.setState(1)
	}
}

function c9() {
	this.ff = 512, this.a82 = 15e8, this.a8v = 1e9, this.a8B = 5e4, this.a8w = 512, this.h2 = 2, this.fS = 0, this.l4 = 0, this.a4S = 0, this.lQ = 0, this.a4R = 0, this.a1W = 512, this.a1b = 512, this.a81 = 150, this.lO = !0, this.hr = 0, this.hs =
		0, this.a4P = 0, this.ko = 0, this.oA = !1, this.i7 = 0, this.a8x = 0, this.ie = !1, this.a1d = 0, this.a1e = 0, this.lM = 0, this.a2s = 0, this.sk = null, this.a4j = new a2g, this.a8y = 30, this.a4M = 0, this.a4U = 0, this.a4i = 0, this
		.a4H = 0, this.data = new a8z, this.a90 = new a91, this.a92 = 0, this.a93 = "", this.a4s = -1, this.a94 = function() {
			this.a4s = -1, bX.turnstile.close(), bR.dt(), bU.dt(), bu.clear(), this.a4S = this.l4 = this.data.humanCount, this.lO = 1 === this.a4S && !__fx.customLobby.isActive(), this.oA = !1, this.hr = this.data.isReplay, this.hs = this.data.a95,
				this.lM = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2s = this.data.isContest, this.ie = this.lM < 7 || 9 === this.lM, this.lM = 10 === this.lM &&
				this.lO ? 7 : this.lM, this.lM = 8 === this.lM && 2 !== this.l4 ? 7 : this.lM, b0.dt(), this.a1d = this.data.numberTeams, this.data.teamPlayerCount ? this.a1e = +(0 < this.data.teamPlayerCount[0]) : (this.a1e = 0, this.ie && this
					.lO && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1d + 1), aE.a90.a96())), this.a8y = this.l4 <= 2 ? 30 : this.l4 <= 50 ? 40 : 50, this.a8x = this.i7 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.sk = this.i7 ? new a8n : null, this.a1W = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l4) : 1 === m.e4 ? this.a1W = this.l4 : this.a1W = this.data.playerCount,
				this.a1b = this.a1W, this.lQ = this.a1W - this.l4, this.a4R = 0, this.fS = this.data.selectedPlayer, this.a4M = 0, this.a4U = 0, this.a4i = 0, this.a4H = 0, az.a97(this.data.spawningSeed), af.dt(), ah.dt(), ao.dt(), aj.a98(), bB.rn
				.sY = [], bB.i9.rq = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dt(), this.a4P = 1, bg.dt(), a99(), ad.du(), aq.a9A(), be.dt(), ad.dt(), au.dt(),
				bP.dt(), bQ.dt(), ap.dt(), bY.a9B(), aF.dt(), aj.a8(), aJ.dt(), aK.dt(), am.a9C(), bC.dt(), bk.dt(), bS.dt(), bh.dt(), a9D.putImageData(a9E, 0, 0), aW.dt(), aT.dt(), aS.dt(), bF.dt(), ax.dt(), aV.dt(), aX.dt(), aN.dt(), aR.dt(), aO
				.dt(), aQ.dt(), aM.dt(), aY.dt(), aG.dt(), aH.dt(), gl(), ae.dt(), ag.dt(), b5.dt(), b6.dt(), b2.dt(), b8.dt(), b9.dt(), this.a4j.dt(), bi.a9B(), aI.o0(), 0 === ah.ng[aE.fS] && aY.show(!1, !0), ag.nS(!0), aw.dt(), bi.e0 = !0, this
				.hr || this.lO && this.i7 || a1.a2.setState(1), this.a92 = 0
		}, this.a5o = function(eh) {
			bC.si.a9G.length ? this.a93 = bC.si.a9G : this.a93 = bC.a9H.a3t(), __fx.replayHistory.save(this.a93), !1 === __fx.customLobby.isActive() && b1.z.a9I(), bu.clear(), this.a4P = 0, bi.a9J(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eZ.show(eh), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a92 ? u.z.a9K(0) : 1 === this.a92 ? u.v(19) : u.v(5, 5)
		}, this.a9L = function() {
			return this.hr ? aN.ht || !bF.a9M : this.lO && (aN.ht || this.i7)
		}, this.a9N = function() {
			return 1 === this.a4P && !this.i7
		}
}

function a8z() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a95 = 0, this.a9O = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a9P = null
}

function a91() {
	this.a96 = function() {
		var a9Q = aE.data;
		bD.tg.a79(a9Q.teamPlayerCount, a9Q.playerCount), a9Q.numberTeams = bD.tg.a70(a9Q.teamPlayerCount, 0), a9Q.teamPlayerCount[0] && a9Q.teamPlayerCount[7] && (a9Q.teamPlayerCount[7] = 0, this.a96())
	}, this.a9R = function() {
		var a9Q = aE.data;
		a9Q.mapType < 2 ? bV.a8(bV.a9S(a9Q), a9Q.mapSeed) : bV.a9T(a9Q.canvas)
	}, this.a9U = function() {
		var a9Q = aE.data;
		a9Q.colorsData || (a9Q.colorsData = new Uint32Array(1)), 0 === a9Q.gameMode && (a9Q.colorsData[0] = bm.z.a05()), a9Q.selectableName && (a9Q.playerNamesData || (a9Q.playerNamesData = new Array(1)), a9Q.playerNamesData[0] = bm.buffer.data[
			122].value), a9Q.a9P = new Uint32Array(1), a9Q.a9P[0] = bJ.f9.fA(bm.buffer.data[105].value, 5)
	}, this.a9V = function() {
		aE.data = new a8z
	}
}

function dk() {
	var a9W = [];
	this.sI = function(player, rw, a9X, a9Y) {
		player === aE.fS || rw === aE.fS || !a9Y && bD.h4.kR(player) || bD.h4.kR(rw) || this.a2t(ah.a2u[player] + " supported " + ah.a2u[rw] + " with " + bD.pa.a3i(a9X) + " ressource" + (1 === a9X ? "." : "s."))
	}, this.a2t = function(pW, s7) {
		pW = {
			ei: aX.a9a(),
			pW: pW,
			s7: s7
		};
		a9W.push(pW), 30 === u.vd && u.a5e().a2t(pW)
	}, this.clear = function() {
		a9W = [];
		var vz = u.a9b(30);
		vz && vz.clear()
	}, this.a9c = function() {
		return a9W
	}
}

function dd() {
	this.a3P = 0, this.gap = 0, this.vE = 0, this.te = 0, this.dt = function() {
		this.resize()
	}, this.resize = function() {
		this.a3P = .0022 * bD.t6.ta(.5) * i.iw, this.vE = this.a3P / i.l, this.gap = Math.max(Math.floor((a1.a2.iv() ? .0114 : .01296) * i.iw), 2), this.te = this.gap / i.l
	}
}

function dc() {
	this.a9d = function() {
		return a1.a2.iv() ? 2 : 1
	}
}

function cK() {
	var p7, fp, fr, a9e, a9f, a9g, ei, a9h, a9i, a9j, a9k, gap, zoom, sR, a9l;

	function a9z(mJ, mK, fM) {
		ad.fd(fM) || -1 === (mJ = bQ.lt.aA8(mJ, mK)) ? aO.aA7(fM) : aO.aA9(mJ)
	}

	function a9v(a9h) {
		for (var aC = sR.length - 1; 0 <= aC; aC--)
			if (sR[aC] === a9h) return 1
	}

	function a9t(a9q) {
		var aC, fi;
		if (-1 !== a9q)
			for (fi = p7.length, aC = 0; aC < fi; aC++)
				if (p7[aC].iV && p7[aC].fp + 1 === a9q % 4 && p7[aC].fr + 1 === a9q >> 2) return aC;
		return -1
	}

	function a9r(mJ, mK) {
		var vz = gap / 2;
		return mJ < fp - a9e - 3 * vz || fp + 3 * a9e + 5 * vz < mJ || mK < fr - a9e - 3 * vz || fr + 2 * a9e + 3 * vz < mK ? -1 : 4 * (mK < fr - vz ? 0 : mK < fr + a9e + vz ? 1 : 2) + (mJ < fp - vz ? 0 : mJ < fp + a9e + vz ? 1 : mJ < fp + 2 * a9e +
			3 * vz ? 2 : 3)
	}
	this.a9m = function() {
		var aC, g2, a9p = [bE.qn, bE.r3, bE.qL, bE.rU, bE.rG];
		for (p7 = new Array(10), aC = 0; aC < 10; aC++) p7[aC] = {
			id: aC,
			iV: !1,
			m1: 0,
			canvas: [],
			fp: 0,
			fr: 0
		};
		for (p7[0].colors = [0, 1, 2, 3], p7[0].fp = 0, p7[0].fr = 0, p7[1].colors = [1, 4], p7[1].fp = 1, p7[1].fr = 0, p7[2].colors = [0, 1], p7[2].fp = -1, p7[2].fr = 0, p7[3].colors = [0], p7[3].fp = 0, p7[3].fr = 0, p7[4].colors = [0, 2],
			p7[4].fp = 1, p7[4].fr = 1, p7[5].colors = [3], p7[5].fp = 0, p7[5].fr = -1, p7[6].id = 20, p7[6].colors = [0], p7[6].fp = 1, p7[6].fr = -1, p7[7].id = 21, p7[7].colors = [0], p7[7].fp = 0, p7[7].fr = 1, p7[8].id = 16, p7[8]
			.colors = [0], p7[8].fp = 0, p7[8].fr = 0, p7[9].id = 10, p7[9].colors = [4], p7[9].fp = 2, p7[9].fr = 0, aC = 0; aC < 10; aC++)
			for (g2 = 0; g2 < p7[aC].colors.length; g2++) p7[aC].canvas.push(function(id, a7F) {
				if (id < 20) return bD.canvas.a3B(ac.get(3), id, a7F);
				var a7F = ac.get(3).height,
					a7G = bD.t6.a0q(a7F, a7F),
					io = bD.t6.getContext(a7G);
				20 === id ? io.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a11.a3Q(ak.q5.a3F + ak.q5.a3W, io, 0, 0, a7F);
				return a7G
			}(p7[aC].id, a9p[p7[aC].colors[g2]]))
	}, this.a9o = function() {
		return p7
	}, this.dt = function() {
		sR = [], fp = fr = ei = 0, a9f = a9g = -1e3, this.resize()
	}, this.resize = function() {
		a9e = Math.floor((a1.a2.iv() ? .075 : .0468) * i.iw), zoom = a9e / ac.get(3).height, gap = Math.floor(a9e / 3)
	}, this.a6H = function(mJ, mK) {
		return !!this.iV() && (bi.e0 = !0, !!ak.a11.hw(mJ, mK, a9i) || (mJ = function(mJ, mK) {
			a9g = a9f = -1e3;
			var a9s = a9t(a9r(mJ, mK));
			if (-1 === a9s) return 0;
			if (1 !== p7[a9s].colors[p7[a9s].m1])
				if (5 === a9s) {
					if (! function() {
							var ej = performance.now();
							a9l + 4e3 < ej && (sR = []);
							a9l = ej
						}(), a9v(a9h)) return 1;
					sR.push(a9h), 16 < sR.length && sR.shift()
				} else if (6 === a9s) {
				for (var aC = sR.length - 1; 0 <= aC; aC--) 0 === ah.ng[sR[aC]] && sR.splice(aC, 1);
				0 < sR.length && (b6.a9w(1, sR, !0) && bB.h4.sQ(sR, a9h), sR = [])
			} else if (2 === a9s) ao.iN(a9h) && bB.i9.rv(aS.iD(), a9h);
			else if (3 === a9s) aE.i7 && bB.i9.iA(a9j);
			else if (0 === a9s)
				if (0 === p7[0].m1) {
					if (aE.a8x && aX.a9a() < 350) return 1;
					bY.a9x(4), bB.i9.iG(aS.iD(), a9h)
				} else b2.iH(a9h, aS.iD());
			else if (1 === a9s) bB.i9.iL(aS.iD(), a9j);
			else if (9 === a9s) bB.i9.iO(aS.iD());
			else {
				if (7 === a9s) return bY.a9x(0), ak.a11.show(mJ, mK), 2;
				if (4 === a9s) b6.a9w(0, [a9h], !0) && bB.h4.sN(a9h);
				else {
					if (8 !== a9s) return 0;
					bB.i9.iC(aS.iD(), a9k, a9h)
				}
			}
			return 1
		}(mJ, mK), this.uW(), 2 === mJ && (ak.a11.iV = !0), 0 < mJ))
	}, this.a6J = function(mJ, mK) {
		this.iV() || (a9f = mJ, a9g = mK, ei = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hz(mouseX),
			coordY = bP.i1(mouseY),
			point = bP.fY(bP.g5(coordX, coordY));
		bP.i2(coordX, coordY) && a9z(mouseX, mouseY, point)
	}, this.click = function(mJ, mK, a6Q) {
		var hy = bP.hz(mJ),
			i0 = bP.i1(mK),
			fU = bP.g5(hy, i0),
			fM = bP.fY(fU),
			a9y = (a1.a2.iv() ? .025 : .0144) * i.iw,
			ej = performance.now();
		return !(Math.abs(mJ - a9f) > a9y || Math.abs(mK - a9g) > a9y || ei + 500 < ej || (ei = ej, bM.u0() && (bM.hn = mJ, bM.ho = mK, b8.en(1), b9.en(1)), !bP.i2(hy, i0))) && (a6Q ? (a9z(mJ, mK, fM), !1) : aN.ht || this.iV() || !bD.h4.hv(aE
			.fS) || aE.hr || aE.hs ? (this.uW(), !1) : (aE.i7 ? 0 <= (a9j = bv.i8(fU)) && (p7[3].iV = !0) : 2 === aE.a4P ? ad.hI(fM) && (a9h = ad.fa(fM), bD.h4.kR(a9h) || (p7[0].iV = !0, p7[0].m1 = 1, p7[7].iV = !0)) : (bQ.iM.iN(aE.fS, fU) &&
				(p7[0].iV = !0, p7[0].m1 = 1, p7[1].iV = !0, p7[1].m1 = 0, p7[9].iV = !0, p7[9].m1 = 0), bQ.iJ.iK(aE.fS, fU) && (p7[0].iV = !0, p7[0].m1 = 1, p7[1].iV = !0, p7[1].m1 = 1, a9j = bR.gK[7]), ad.fn(fM) ? (a9k = an.fJ.fL(
				fM)) && (a9y = bP.fY(a9k), p7[8].iV = !0, a9h = ad.fZ(a9y) ? aE.ff : ad.fa(a9y)) : (ad.a2Q(aE.fS, fM) && (a9i = aE.fS, p7[0].iV = !0, p7[0].m1 = 1, p7[7].iV = !0), -1 !== (ej = bv.iE(fU)) && (ad.fZ(ej << 2) ? (a9h = aE.ff,
					bw.iF(aE.fS) ? (p7[0].iV = !0, p7[0].m1 = 0) : ae.gp(aE.fS) && (p7[0].iV = !0, p7[0].m1 = 3)) : (a9h = ad.fa(ej << 2), p7[0].m1 = 1, p7[5].iV = function(a9h) {
					return !bD.h4.kR(a9h) && !a9v(a9h) && b6.a9w(1, [a9h], !1)
				}(a9h), p7[7].iV || bD.h4.kR(a9h) || (a9i = a9h, p7[7].iV = !0), p7[4].iV = !bD.h4.kR(a9h) && !ag.aA3(a9h) && b6.a9w(0, [a9h], !1), p7[6].iV = function(a9h) {
					if (0 === sR.length) return !1;
					if (performance.now() > a9l + 4e3) return !(sR = []);
					return !a9v(a9h) && ! function(a9h) {
						var aC;
						if (aE.ie)
							for (aC = sR.length - 1; 0 <= aC; aC--)
								if (!bw.fb(a9h, sR[aC])) return 1;
						return
					}(a9h)
				}(a9h), bw.fb(a9h, aE.fS) ? (bw.iI(aE.fS, a9h) ? (p7[0].m1 = 0, p7[0].iV = !0) : ae.gp(aE.fS) && (p7[0].m1 = 3, p7[0].iV = !0), p7[0].iV = this.aA5()) : (p7[2].iV = !0, ao.iN(a9h) ? p7[2].m1 = 0 : p7[2].m1 = 1,
					p7[0].iV = !0))))), this.aA0(mJ, mK)))
	}, this.aA0 = function(mJ, mK) {
		return fp = mJ - Math.floor(a9e / 2), fr = mK - Math.floor(a9e / 2), !!this.iV()
	}, this.a5x = function(mJ, mK) {
		return !!this.iV() && (ak.a11.iV ? !ak.a11.a3O(mJ, mK) && (ak.a11.iV = !1, bi.e0 = !0) : function(up, mJ, mK) {
			mJ = a9r(mJ, mK);
			if (0 <= a9t(mJ)) return !1;
			if ((1 === mJ || 6 === mJ) && 0 <= a9t(2)) return !1;
			if ((6 === mJ || 9 === mJ) && 0 <= a9t(10)) return !1;
			return up.uW(), bi.e0 = !0
		}(this, mJ, mK))
	}, this.uW = function() {
		for (var aC = p7.length - 1; 0 <= aC; aC--) p7[aC].iV = !1, p7[aC].m1 = 0;
		ak.a11.iV = !1
	}, this.iV = function() {
		return this.aA5() || ak.a11.iV
	}, this.aA5 = function() {
		for (var fi = p7.length, aC = 0; aC < fi; aC++)
			if (p7[aC].iV) return !0;
		return !1
	}, this.z1 = function() {
		if (this.iV())
			if (ak.a11.iV) ak.a11.z1();
			else {
				var aC, io = z2,
					g2 = p7,
					fi = g2.length,
					aAD = (a9e + gap) / zoom;
				for (io.imageSmoothingEnabled = !0, io.setTransform(zoom, 0, 0, zoom, fp, fr), aC = 0; aC < fi; aC++) g2[aC].iV && z2.drawImage(g2[aC].canvas[g2[aC].m1], g2[aC].fp * aAD, g2[aC].fr * aAD);
				io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cL() {
	var k, canvas, aAE, aAF, aAG, aAH = -1;

	function aAI() {
		var aAJ, p4 = canvas.getContext("2d", {
			alpha: !0
		});
		p4.clearRect(0, 0, k, k), p4.fillStyle = bE.qJ, p4.fillRect(0, 0, k, k), 9 === aAF && (p4.fillStyle = bE.qO, p4.fillRect(0, 0, k, k)), p4.fillStyle = bE.qN, __fx.utils.smoothFrame(p4, k, k) || (p4.fillRect(0, 0, k, 1), p4.fillRect(0, 0, 1,
			k), p4.fillRect(0, k - 1, k, 1), p4.fillRect(k - 1, 0, 1, k)), aAJ = .9 * k / ac.get(0).width, p4.imageSmoothingEnabled = !0, p4.setTransform(aAJ, 0, 0, aAJ, Math.floor((k - aAJ * ac.get(0).width) / 2), Math.floor((k - aAJ * ac.get(0)
			.height) / 2)), p4.drawImage(ac.get(0), 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAM(mJ, mK) {
		if (!aN.ht) return mJ <= k + bf.gap && mK >= aS.fr ? 9 : -1;
		if (mJ <= 4 * k + bf.gap) {
			if (mK >= aS.fr) return 0;
			if (mK >= aS.fr - k - aAG * bf.gap) return 2
		} else if (mJ <= 7 * k + bf.gap && mK >= aS.fr - k - aAG * bf.gap) return 1;
		return -1
	}
	this.ht = !1, this.dt = function() {
		aAF = -1, this.ht = !1, aAG = a1.a2.iv() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, aAE = bD.t6.t9(1, (a1.a2.iv() ? .5 : .45) * k), aAI()
	}, this.aAK = function() {
		return !(1 !== aE.a4P || aE.i7 || (aE.hr ? !bF.a9M : this.ht && aE.lO))
	}, this.a6Y = function() {
		this.ht = !this.ht, this.ht ? (bF.a6X(!1), aE.hr && bF.a9M && bF.a6Z(!0), this.aAL(), 9 === aAF && (aAF = 0)) : (aAF = -1, aAI(), !aE.lO || 1 !== aE.a4P || aE.i7 || aE.hr || a1.a2.setState(1)), bi.e0 = !0
	}, this.aAL = function() {
		(aE.lO || aE.hr) && 1 === aE.a4P && (aW.nS(!0), aE.i7 || setTimeout(function() {
			be.a4b()
		}, 0), a1.a2.setState(0))
	}, this.hw = function(mJ, mK) {
		return 0 <= (aAH = aAM(mJ, mK)) || !aN.ht || aE.lO || aE.hr || bh.iV || aN.a6Y(), aAH
	}, this.a5x = function(mJ, mK) {
		mJ = aAM(mJ, mK);
		mJ !== aAF && (aAF = mJ, this.ht || aAI(), bi.e0 = !0)
	}, this.a5y = function(mJ, mK) {
		mJ = aAM(mJ, mK);
		return -1 !== mJ && aAH === mJ && (this.ht ? aE.oA ? (0 <= mJ && bF.a6X(!1), !aE.hr) : (0 === mJ ? aE.a5o() : 1 === mJ ? this.a6Y() : 2 === mJ && u.v(1, 0), !0) : 9 === mJ && (this.a6Y(), !0))
	}, this.z1 = function() {
		var j;
		this.ht ? (j = Math.floor(5.5 * k), z2.setTransform(1, 0, 0, 1, bf.gap, aS.fr), z2.fillStyle = bE.qJ, z2.fillRect(0, 0, j, k), 0 === aAF ? (z2.fillStyle = bE.qO, z2.fillRect(0, 0, 4 * k, k)) : 1 === aAF && (z2.fillStyle = bE.qO, z2
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), z2.fillStyle = bE.qN, z2.fillRect(0, 0, j, 1), z2.fillRect(0, 0, 1, k), z2.fillRect(4 * k, 0, 1, k), z2.fillRect(0, k - 1, j, 1), z2.fillRect(j - 1, 0, 1, k), z2.font = aAE, bD.t6
			.textBaseline(z2, 1), bD.t6.textAlign(z2, 1), z2.fillText(L(54), 2 * k, .54 * k), j = .4 * k, aN.aAQ(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fr + .3 * k, j), j = 1, z2.setTransform(1, 0, 0, 1, bf.gap, aS.fr - j * aAG * bf.gap - j *
				k), z2.fillStyle = bE.qJ, z2.fillRect(0, 0, 4 * k, k), aAF === j + 1 && (z2.fillStyle = bE.qO, z2.fillRect(0, 0, 4 * k, k)), z2.fillStyle = bE.qN, z2.fillRect(0, 0, 4 * k, 1), z2.fillRect(0, 0, 1, k), z2.fillRect(4 * k, 0, 1,
				k), z2.fillRect(0, k - 1, 4 * k, 1), z2.fillText(L(0 === j ? 54 : 55), 2 * k, .54 * k), z2.setTransform(1, 0, 0, 1, 0, 0)) : z2.drawImage(canvas, bf.gap, aS.fr)
	}, this.sz = function(player) {
		return 0 !== ah.ng[player] && 2 !== aE.a4P && !bD.h4.kR(player)
	}, this.aAQ = function(fp, fr, fi) {
		z2.setTransform(1, 0, 0, 1, fp, fr), z2.lineWidth = bf.a3P, z2.strokeStyle = bE.qN, z2.beginPath(), z2.moveTo(0, 0), z2.lineTo(fi, fi), z2.moveTo(0, fi), z2.lineTo(fi, 0), z2.stroke()
	}
}

function cM() {
	var aAS, k, aAT, aAU, aAV, aAW, aAX, aAY, aAZ;

	function a2X() {
		return aS.aAs(aO.aAo()) ? ax.iV ? __fx.settings.keybindButtons ? aS.fr - 2 * aS.k - 3 * aAT : aS.fr - aS.k - 2 * aAT : __fx.settings.keybindButtons ? aS.fr - aS.k - 2 * aAT : aS.fr - aAT : bF.aAs(aO.aAr()) ? ax.iV ? bF.a2X() - aS.k - 2 *
			aAT : bF.a2X() - aAT : ax.iV ? i.k - aS.k - (bn.a9d() + 1) * aAT : i.k - bn.a9d() * bf.gap
	}

	function aAe(ej, pW, id, hG, aAi, aAj, lh, aAk, aAl, aAm, aAx) {
		var aC, p4, a7G, q3, aAy = void 0 !== aAl,
			j = Math.floor(aR.measureText(pW, aO.aAE) + 1.5 * aAU + (aAy ? k : 1.5 * aAU));
		if (bi.e0 = !0, aAx || bu.a2t(pW, aAl), j + 2 * aAT + aS.k > i.j && !aAy && 50 !== id && 20 < pW.length) aAe(ej, (aAx = bD.pa.a8e(pW))[0], id, hG, aAi, aAj, lh, aAk, aAl, aAm, !0), aAe(ej, aAx[1], id, hG, aAi, aAj, lh, aAk, aAl, aAm, !0);
		else if (aAx = j + (50 === id ? aAV : 0), (a7G = document.createElement("canvas")).width = j, a7G.height = k, (p4 = a7G.getContext("2d", {
				alpha: !0
			})).font = aO.aAE, bD.t6.textBaseline(p4, 1), bD.t6.textAlign(p4, 0), p4.clearRect(0, 0, j, k), p4.fillStyle = aAj, p4.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p4, j, k, 0), p4.fillStyle = aAi, p4.fillText(pW, Math.floor(1.5 * aAU),
				Math.floor(k / 2)), aAy && (p4.imageSmoothingEnabled = !0, ak.a11.a3Q(aAl, p4, j - k, 0, k)), 0 === (q3 = {
				ei: ej,
				pW: pW,
				id: id,
				player: hG,
				canvas: a7G,
				aAi: aAi,
				aAj: aAj,
				j: j,
				aAp: aAx,
				lh: lh,
				aAk: aAk,
				aAl: aAl,
				aAm: aAm
			}).ei || 0 < aAS.length && 0 < aAS[0].ei) aAS.unshift(q3);
		else {
			for (aC = 1; aC < aAS.length; aC++)
				if (0 < aAS[aC].ei) return void aAS.splice(aC, 0, q3);
			aAS.push(q3)
		}
	}

	function aAf(eQ, vz, g2) {
		return "rgb(" + eQ + "," + vz + "," + g2 + ")"
	}

	function aAz(id, hB) {
		for (var fi = aAS.length, aC = 0; aC < fi; aC++) aAS[aC].id === id && hB-- <= 0 && (aAS.splice(aC, 1), aC--, fi--)
	}

	function aB0(id, player) {
		for (var fw = !1, aC = aAS.length - 1; 0 <= aC; aC--) aAS[aC].id !== id || player !== aE.ff && aAS[aC].player !== player || (aAS.splice(aC, 1), fw = !0);
		return fw
	}

	function aBN(pW) {
		aAe(340, pW, 6, 0, aAf(215, 245, 255), bE.qK, -1, !1)
	}
	this.aAa = "", this.dt = function() {
		var self;
		aAY = 0, aAX = a1.a2.iv() ? 7 : 12, aAW = {
				x6: [0, 0, 0],
				aAb: [0, 0, 0],
				ny: [220, 180, 180],
				z0: [0, 0, 0],
				es: [0, 0, 0]
			}, aAS = [], this.resize(), aE.i7 && this.a4d(0, 18), bV.xN.a0p[bV.fO].name.length && aBN(L(100, [bV.xN.a0p[bV.fO].name])), bV.xN.a0p[bV.fO].aBO && aBN(L(101, [bV.xN.a0p[bV.fO].aBO])), aBN(L(102, [bV.ft - 2 + "x" + (bV.fu - 2)])),
			aBN(L(103, [bD.pa.a3i(aq.aBP)])), aq.aBP !== aq.aBQ && aBN(L(104, [bD.pa.a3i(aq.aBQ) + " (" + bD.pa.a8a(100 * aq.aBQ / aq.aBP, 1) + ")"])), 0 < aq.aBR && aBN(L(80, [bD.pa.a3i(aq.aBR) + " (" + bD.pa.a8a(100 * aq.aBR / aq.aBP, 1) +
				")"])), 0 < aq.aBS && aBN(L(105, [bD.pa.a3i(aq.aBS) + " (" + bD.pa.a8a(100 * aq.aBS / aq.aBP, 1) + ")"])), 10 === aE.lM && aAe(120, L(106), 6, 0, aAf(235, 255, 120), bE.qK, -1, !1), 0 !== (self = this).aAa.length && (aAe(200, self
				.aAa, 0, 0, bE.qN, bE.qK, -1, !1), self.aAa = ""), aE.a2s && aAe(340, L(56), 6, 0, aAf(255, 200, 0), bE.qK, -1, !1), (self = aE.data.a9O) && aAe(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qN, bE.qK, -1, !1)
	}, this.resize = function() {
		var aAh, aC;
		if (k = (k = Math.floor((a1.a2.iv() ? .031 : .0249) * i.iw)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.aAE = bD.t6.t9(1, this.fontSize), aAT = bf.gap, aAU = Math.floor(k / 5), 0 < aAS.length)
			for (aAh = aAS, aAS = [], aC = aAh.length - 1; 0 <= aC; aC--) aAe(aAh[aC].ei, aAh[aC].pW, aAh[aC].id, aAh[aC].player, aAh[aC].aAi, aAh[aC].aAj, aAh[aC].lh, aAh[aC].aAk, aAh[aC].aAl, aAh[aC].aAm, !0);
		this.aAn()
	}, this.aAn = function() {
		aAZ = document.createElement("canvas");
		var pW = L(57),
			p4 = (aAV = aR.measureText(pW, this.aAE) + 5 * aAU, aAZ.height = k, aAZ.width = aAV, aAZ.getContext("2d", {
				alpha: !0
			}));
		p4.font = this.aAE, bD.t6.textBaseline(p4, 1), bD.t6.textAlign(p4, 1), p4.clearRect(0, 0, aAV, k), p4.fillStyle = bE.qk, p4.fillRect(0, 0, aAV, k), p4.fillStyle = bE.qN, p4.fillText(pW, Math.floor(aAV / 2), Math.floor(k / 2))
	}, this.aAo = function() {
		var fi;
		return ax.iV ? ax.j : 0 === (fi = aAS.length) ? 0 : 1 === fi ? aAS[0].aAp : aAq(aAS[0].aAp, aAS[1].aAp)
	}, this.aAr = function() {
		var fi = aAS.length;
		return ax.iV ? fi ? aAq(ax.j, aAS[0].aAp) : ax.j : 0 === fi ? 0 : 1 === fi ? aAS[0].aAp : 2 === fi ? aAq(aAS[0].aAp, aAS[1].aAp) : aAq(aAq(aAS[0].aAp, aAS[1].aAp), aAS[2].aAp)
	}, this.hw = function(fp, fr) {
		for (var o7, aAt, aAu = a2X(), aC = aAS.length - 1; 0 <= aC; aC--)
			if ((aAt = aAu - (aC + 1) * k) <= fr && fr < aAt + k) return 50 === aAS[aC].id ? fp >= i.j - aAV - aAT - aAS[aC].j && (fp >= i.j - aAV - aAT ? bB.h4.sN(aAS[aC].player) : aI.o2(aAS[aC].player, 800, !1, 0), !0) : fp >= i.j - aAS[aC].j -
				aAT && (736 === aAS[aC].id ? (aAt = "https://" + aAS[aC].pW, window.open(aAt, "_blank"), aT.oC = !1) : aAS[aC].aAk && (aAS[aC].aAm && aAS[aC].aAm.g1 ? (aAt = aAS[aC].aAm.fU, o7 = bP.fq(aAt) - 10, aAt = bP.fs(aAt) - 10, aI.o1(
					o7, aAt, 19 + o7, 19 + aAt)) : aAS[aC].aAm && aAS[aC].aAm.g2 ? aI.o3(aAS[aC].player, aAS[aC].aAm.o4) : (aI.o2(aAS[aC].player, 800, !1, 0), 0 <= aAS[aC].lh && (o7 = aAS[aC].lh, aAS[aC].lh = aAS[aC].player, aAS[aC]
					.player = o7))), !0);
		return !1
	}, this.a2t = function(ej, pW, id, hG, aAi, aAj, lh, aAk, aAl, aAm) {
		aAe(ej, pW, id, hG, aAi, aAj, lh, aAk, aAl, aAm)
	}, this.aAw = function(s) {
		aAe(300, s, 252, 0, bE.qN, bE.qK, -1, !1)
	}, this.a8q = function(id) {
		for (var aC = aAS.length - 1; 0 <= aC; aC--) aAS[aC].id === id && (aAS[aC].ei = 1)
	}, this.a4d = function(player, id) {
		0 === id ? (aR.er(player, 0), aAz(423, 2), aAe(160, L(60, [ah.a2u[player]]), 423, player, "rgb(10,220,10)", bE.qK, -1, !1)) : 1 === id ? (aB0(50, aE.ff), aR.er(player, 1), aAe(360, L(61, [ah.a2u[player]]), 0, player, bE.r5, bE.qK, -1, !
				0), aI.o2(player, 2700, !1, 0)) : 2 === id ? (aR.er(player, 2), aAe(0, L(62), 0, player, "rgb(10,255,255)", bE.qK, -1, !0), aI.o2(player, 2700, !1, 0)) : 3 === id ? (aR.er(player, 2), aAe(0, L(63, [ah.a2u[player]]), 0, player, bE
				.qN, bE.qK, -1, !0), aI.o2(player, 2700, !1, 0)) : 4 === id ? this.aB1(1, player, player) : 5 === id ? bD.h4.kR(aE.fS) || (function(id, nb) {
				var aC, aBC = 0,
					fi = aAS.length;
				for (aC = 0; aC < fi; aC++)
					if (aAS[aC].id === id && nb <= ++aBC) return aAS.splice(aC, 1)
			}(1, 5), ag.aB3(player) && aAe(180, L(64, [ah.a2u[player]]), 1, player, aAf(255, 200, 180), bE.qK, -1, !0), bD.h4.a7v(player, 10) && (aAz(573, 0), aAe(180, L(65, [ah.a2u[player]]), 573, player, bE.r5, bE.qK, -1, !0))) : 18 === id ?
			aAe(255, L(66), 18, 0, bE.qN, bE.qK, -1, !1) : 21 === id ? aAe(220, L(67), id, 0, bE.qN, bE.qK, -1, !1) : 22 === id ? this.aB1(2, player, player) : 59 === id && aAe(0, L(68), id, 0, bE.rT, bE.qK, 0, !1)
	}, this.a5j = function(s) {
		aAe(200, L(69, [s]), 94, 0, bE.qN, bE.r1, -1, !1)
	}, this.a4p = function(aB4) {
		if (aE.fS === aB4 && !aE.lO && !aE.hr)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAe(0, "Your Win Count is now " + __fx.wins.count, 3, aB4, bE.qN, bE.qK, -1, !0);
		ah.hW[aB4] && (aR.er(aB4, 2), aE.l4 < 100 ? aAe(0, L(63, [ah.a2u[aB4]]), 3, aB4, bE.qN, bE.qK, -1, !0) : aAe(0, L(70, [ah.a2u[aB4]]), 3, aB4, bE.qN, bE.qK, -1, !0))
	}, this.aA7 = function(fM) {
		var pW, aB7, aB5 = "(" + bP.fq(fM >> 2) + ", " + bP.fs(fM >> 2) + ")",
			aAk = !1,
			player = 0;
		ad.fd(fM) ? ad.fZ(fM) ? aB5 = L(71, [aB5]) : (player = ad.fa(fM), (aE.hr || aE.hs) && !1 === __fx.hoveringTooltip.active && player !== aE.fS && (aE.fS = player, bg.aB6()), pW = L(72, [bD.p4.a7U(ah.a58[player], bD.t6.t9(0, 10), 150)]) +
			"   ", pW = (pW += L(73, [bD.pa.a3i(ah.hk[player])]) + "   ") + L(74, [bD.pa.a3i(ah.hW[player])]) + "   ", aE.ie && (aB7 = bj.a4m[bj.lR[bj.fg[player]]], pW += L(75) + ": " + aB7 + "   "), bD.h4.kR(player) && (pW += L(76) + ": " +
				aF.lF[aF.iS[player]] + "   "), aB5 = pW = (pW += L(77, [player]) + "   ") + L(78, [aB5]), aAk = !0) : aB5 = ad.fn(fM) ? L(79, [aB5]) + "   #" + ad.fQ(fM) : L(80, [aB5]), aAz(55, 0), aAe(220, aB5, 55, player, bE.qN, bE.qK, -1,
			aAk, void 0, void 0, !0)
	}, this.aA9 = function(aB8) {
		var lz = bQ.z,
			player = lz.my[aB8] >> 3,
			pW = (bi.e0 = !0, aAz(55, 0), L(81, [ah.a2u[player]]) + "   ");
		aAe(220, pW += L(73, [bD.pa.a3i(lz.aB9[aB8])]), 55, player, bE.qN, bE.qK, -1, !0)
	}, this.s6 = function(rr, aBA, s7) {
		rr === aE.fS ? aAe(175, " " + L(82, [ah.a2u[aBA]]) + ": ", 1001, aBA, aAf(200, 255, 210), bE.qK, -1, !0, s7) : this.aBB(rr, s7)
	}, this.aBB = function(rr, s7) {
		aAz(1e3, 0), aAe(175, ah.a2u[rr] + ": ", 1e3, rr, bE.qN, "rgba(5,60,25,0.9)", -1, !0, s7)
	}, this.a4o = function() {
		var s;
		aE.a4U ? (s = L(83), aR.a4n(L(84), 2, 1, 12), aAe(0, s, 40, 0, "rgb(10,220,10)", bE.qK, -1, !1)) : (s = L(85), aR.a4n(L(86), 2, 0, 16), aAe(0, s, 41, 0, bE.qN, bE.qK, -1, !1))
	}, this.a2h = function() {
		var hB = ah.a2u,
			fl = aE.data;
		aAe(300, hB[0] + " [" + aE.a4j.a2n(fl.elo[0]) + "] vs " + hB[1] + " [" + aE.a4j.a2n(fl.elo[1]) + "]", 65, 0, bE.qE, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aBD = function(s) {
		aAe(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aBE = function(aBF) {
		aAe(0, L(aBF ? 87 : 88), 247, 0, bE.rS, bE.qK, -1, !1)
	}, this.a2p = function(a2m, a2o, aBG) {
		var fl = aE.data,
			hB = ah.a2u;
		aAe(0, hB[0] + ": " + aE.a4j.a2n(fl.elo[0]) + " -> " + a2m, 66, 0, bE.qN, aBG[0], -1, !1), aAe(0, hB[1] + ": " + aE.a4j.a2n(fl.elo[1]) + " -> " + a2o, 66, 1, bE.qN, aBG[1], -1, !1)
	}, this.sO = function(player, id) {
		0 === id ? aB0(50, player) ? (aAe(128, L(89, [ah.a2u[player]]), 52, player, aAf(180, 255, 180), bE.qK, -1, !0), ag.sx(player, 2, 255)) : aAe(384, L(90, [ah.a2u[player]]), 51, player, aAf(210, 210, 255), bE.qK, -1, !0) : aB0(51, player) ?
			(aAe(128, L(91, [ah.a2u[player]]), 52, player, bE.qN, "rgba(60,120,10,0.9)", -1, !0), ag.sx(player, 2, 255)) : (aAe(384, L(92, [ah.a2u[player]]), 50, player, bE.qN, "rgba(90,90,90,0.9)", -1, !0), ag.sx(player, 2, 96))
	}, this.sS = function(x6, target) {
		var color = aAf(210, 255, 210);
		1 < x6.length ? aAe(230, L(93, [x6.length, ah.a2u[target]]), 66, target, color, bE.qK, -1, !0) : aAe(230, L(94, [ah.a2u[x6[0]], ah.a2u[target]]), 66, x6[0], color, bE.qK, target, !0)
	}, this.aBH = function(player, target) {
		aAe(230, L(95, [ah.a2u[player], ah.a2u[target]]), 66, player, bE.qN, "rgba(75,65,5,0.9)", target, !0)
	}, this.aBI = function(id, hB) {
		aAz(id, hB)
	}, this.a4X = function(id, player) {
		aB0(id, void 0 === player ? aE.ff : player)
	}, this.aBJ = function(id) {
		for (var aC = aAS.length - 1; 0 <= aC; aC--)
			if (aAS[aC].id === id) return aAS[aC];
		return null
	}, this.sJ = function(a9X, aBK, player) {
		2 !== ah.a7q[aE.fS] && aAe(200, 1 === a9X ? L(96, [ah.a2u[player]]) : L(97, [bD.pa.a3i(a9X), ah.a2u[player]]), 30, player, "rgb(190,255,190)", bE.qK, -1, !0)
	}, this.aBM = function(a9X, player) {
		2 !== ah.a7q[aE.fS] && (aAz(31, 0), a9X = " (" + bD.pa.a3i(a9X) + ") 💸", aAe(150, a9X = bD.h4.kR(player) ? L(98) + a9X : L(99, [ah.a2u[player]]) + a9X, 31, player, bE.qE, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a4W = function(c2) {
		for (var es = bi.l1(), aC = 2; 0 <= aC; aC--) 0 < aAW.z0[aC] && (c2 || aAW.es[aC] < es - 220) && this.aBT(aC)
	}, this.aBT = function(id) {
		var pW, fi = aAW.z0[id],
			player = aAW.x6[id];
		aAW.z0[id] = 0, 1 === fi ? (0 === id ? pW = L(107, [ah.a2u[player], ah.a2u[aAW.aAb[0]]]) : 1 === id ? pW = L(108, [ah.a2u[player]]) : 2 === id ? pW = L(109, [ah.a2u[player]]) : 3 === id && (pW = L(110, [ah.a2u[player]])), aAz(7, 0), aAe(
			aAW.ny[id], pW, 7, aAW.aAb[id], bE.qN, bE.qK, -1, !0)) : (pW = L(0 === id ? 111 : 1 === id ? 112 : 113, [fi]), aAz(7, 0), aAe(aAW.ny[id], pW, 7, player, bE.qN, bE.qK, -1, !1))
	}, this.aB1 = function(id, iB, lh) {
		var es = bi.l1(),
			fi = aAW.z0[id] + 1;
		aAW.z0[id]++, aAW.x6[id] = iB, aAW.aAb[id] = lh, 1 === fi && (aAW.es[id] = es), (1 === fi && (aE.a4S < 32 || 2 === aE.a4P) || 1 < fi && (aAW.es[id] < es - 140 || 2 === aE.a4P)) && this.aBT(id)
	}, this.en = function() {
		b3.en();
		for (var kJ = (kJ = aAS.length - aAX) <= 1 ? 1 : kJ * kJ, aC = aAS.length - 1; 0 <= aC; aC--) 0 < aAS[aC].ei && (aAS[aC].ei -= kJ, aAS[aC].ei <= 0) && (bi.e0 = !0, aAS.splice(aC, 1));
		! function() {
			var hB, aC;
			if (128 !== aAY && !(++aAY < 128))
				for (hB = 5, aC = am.la - 1; 0 <= aC; aC--) 1 === ah.a7q[am.lf[aC]] && 0 < hB-- && aAe(240, L(110, [ah.a2u[am.lf[aC]]]), 1, am.lf[aC], bE.qE, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a4W(!1)
	}, this.z1 = function() {
		for (var a1Z, fr = a2X(), aC = aAS.length - 1; 0 <= aC; aC--) a1Z = fr - (aC + 1) * k, 50 === aAS[aC].id ? (z2.drawImage(aAS[aC].canvas, i.j - aAS[aC].j - aAV - aAT, a1Z), z2.drawImage(aAZ, i.j - aAV - aAT, a1Z)) : z2.drawImage(aAS[aC]
			.canvas, i.j - aAS[aC].j - aAT, a1Z)
	}, this.aBV = function(id, iS) {
		var aB5, aBW = bE.qX;
		0 === id ? aB5 = L(114) : 1 === id ? (aB5 = L(115), aBW = bE.rK) : 2 === id ? aB5 = L(116) : 3 === id ? aB5 = L(117) : (aB5 = bD.pa.a3i(iS), aBW = 5 === id ? bE.rK : bE.qK), aAz(74, 0), aAe(0, aB5, 74, 0, bE.qN, aBW, -1, !1, void 0,
			void 0, !0)
	}
}

function cN() {
	var aBY, uv, z3 = "",
		a1K = 0,
		a1L = 0,
		aBX = -1,
		eM = ["Team", "BR", "1v1", "Zombie"],
		aBZ = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBa = 10;

	function aBe() {
		for (var aBf = aBg(), aBh = -1, aBc = 0, aC = 0; aC < aBZ.length; aC++) {
			var fl = aBi(aC, aBf);
			0 <= fl && (aBh < 0 || fl < aBh) && (aBh = fl, aBc = aC)
		}
		if (!(aBh < 0)) return aBh !== aBX && (z3 = eM[aBc] + " " + uv + ": " + aBj(aBh), aBX = aBh, a1K = aR.measureText(z3, aBY), a1K += Math.floor(.4 * a1L), 1);
		z3 = ""
	}

	function aBg() {
		var ej = new Date;
		return 60 * ej.getUTCMinutes() + ej.getUTCSeconds()
	}

	function aBi(aBc, aBf) {
		for (var aBl = aBZ[aBc], gA = -1, g1 = 0; g1 < aBl.length; g1++) {
			var fl = (fl = 60 * aBl[g1] + aBa - aBf) <= 0 ? 3600 + fl : fl;
			(gA < 0 || fl < gA) && (gA = fl)
		}
		return gA
	}

	function aBj(aBm) {
		return aBn(Math.floor(aBm / 60)) + ":" + aBn(aBm % 60)
	}

	function aBn(aBo) {
		return aBo < 10 ? "0" + aBo : String(aBo)
	}
	this.aBb = function(aBc, aBd) {
		return 0 <= aBZ[aBc].indexOf(aBd)
	}, this.dt = function() {
		uv = L(118)
	}, this.resize = function() {
		a1K = Math.floor((a1.a2.iv() ? .53 : .36) * i.iw), a1L = Math.floor(.065 * a1K), aBY = bD.t6.t9(1, Math.floor(.9 * a1L)), aBX += 1e3, aBe()
	}, this.en = function() {
		aBe() && (bi.e0 = !0)
	}, this.aBk = function(vv, vw) {
		for (var aBf = aBg(), pW = "", aC = vv; aC < Math.min(vw, aBZ.length); aC++) {
			var fl = aBi(aC, aBf);
			0 <= fl && (pW += (pW ? "   " : "") + eM[aC] + ": " + aBj(fl))
		}
		return pW
	}, this.z1 = function(fr) {
		z3 && (z2.lineWidth = 1 + Math.floor(a1L / 15), z2.translate(i.j - a1L, fr + a1K), z2.rotate(-Math.PI / 2), z2.fillStyle = bE.qN, z2.fillRect(0, 0, a1K, a1L), z2.strokeStyle = bE.qE, z2.strokeRect(0, 0, a1K, a1L + 10), z2.fillStyle = bE
			.qE, z2.font = aBY, bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 1), z2.fillText(z3, Math.floor(a1K / 2), Math.floor(.59 * a1L)), z2.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cO() {
	var a9W, aBp, aBq, a1L, aBr, aBs = 0,
		aBt = 0;

	function aBv(aC) {
		var aBx = !0,
			a3X = bE.qN,
			j = (1 === a9W[aC].id ? a9W[aC].p4.fillStyle = bE.rI : a9W[aC].kD === aE.ff ? a9W[aC].p4.fillStyle = bE.qY : (ad.aBy(a9W[aC].kD), a9W[aC].p4.fillStyle = bD.color.qH(bR.gH[0], bR.gH[1], bR.gH[2], .87), 400 < bD.tg.a6u(bR.gH, 0, 2) && (
				aBx = !1, a3X = bE.qE)), a9W[aC].canvas.width),
			vi = (a9W[aC].p4.clearRect(0, 0, j, a1L), a9W[aC].p4.fillRect(0, 0, j, a1L), a9W[aC].p4.fillStyle = a3X, ! function(p4, j, a1L) {
				p4.fillRect(0, 0, j, 1), p4.fillRect(0, a1L - 1, j, 1), p4.fillRect(0, 0, 1, a1L), p4.fillRect(j - 1, 0, 1, a1L)
			}(a9W[aC].p4, j, a1L), aBp + 2 * a1L < j && (a9W[aC].p4.fillRect(j - aBp - a1L, 0, 1, a1L), a9W[aC].p4.fillText(ah.a2u[a9W[aC].kD], Math.floor((j - aBp) / 2), Math.floor(.57 * a1L))), 0 !== a9W[aC].id ? 0 : a1L);
		a9W[aC].p4.fillText(bD.pa.a3i(a9W[aC].iS), Math.floor(j - aBp / 2 - vi), Math.floor(.57 * a1L)),
			function(aC, j, vi, aBx) {
				a9W[aC].p4.fillStyle = aBx ? bE.qP : bE.qL;
				aBx = Math.floor(aBp * a9W[aC].iS / a9W[aC].aC4);
				a9W[aC].p4.fillRect(Math.floor(j - aBp - vi), a1L - aBr, aBx, aBr)
			}(aC, j, vi, aBx), 0 === a9W[aC].id ? (aC1(aC, j, aBx, a3X), function(aC, j, aBx) {
				a9W[aC].p4.strokeStyle = aBx ? bE.qf : bE.qp, a9W[aC].p4.fillRect(a1L, 0, 1, a1L);
				aBx = j - a1L;
				a9W[aC].p4.beginPath(), a9W[aC].p4.moveTo(Math.floor(.3 * a1L + aBx), Math.floor(a1L / 2)), a9W[aC].p4.lineTo(Math.floor(a1L - .3 * a1L + 0 + aBx), Math.floor(a1L / 2)), a9W[aC].p4.stroke(), a9W[aC].p4.beginPath(), a9W[aC].p4
					.moveTo(Math.floor(a1L / 2 + aBx), Math.floor(.3 * a1L)), a9W[aC].p4.lineTo(Math.floor(a1L / 2 + aBx), Math.floor(a1L - .3 * a1L + 0)), a9W[aC].p4.stroke()
			}(aC, j, aBx)) : aC1(aC, 2 * a1L, aBx, a3X)
	}

	function aC1(aC, j, aBx, a3X) {
		a9W[aC].p4.strokeStyle = a9W[aC].aC5 ? bE.qW : aBx ? bE.qx : bE.qy, a9W[aC].p4.fillStyle = a3X, a9W[aC].p4.fillRect(j - a1L, 0, 1, a1L), a9W[aC].p4.lineWidth = Math.max(Math.floor(a1L / 12), 3), a9W[aC].p4.lineCap = "round";
		aBx = .35;
		j = a1L + 1, a9W[aC].p4.beginPath(), a9W[aC].p4.moveTo(Math.floor(j - aBx * a1L + 0), Math.floor(aBx * a1L)), a9W[aC].p4.lineTo(Math.floor(j - a1L + aBx * a1L), Math.floor(a1L - aBx * a1L + 0)), a9W[aC].p4.stroke(), a9W[aC].p4.beginPath(),
			a9W[aC].p4.moveTo(Math.floor(j - a1L + aBx * a1L), Math.floor(aBx * a1L)), a9W[aC].p4.lineTo(Math.floor(j - aBx * a1L + 0), Math.floor(a1L - aBx * a1L + 0)), a9W[aC].p4.stroke()
	}

	function aCH(h, aCF) {
		for (var iS, aC = aCF - 1; 0 <= aC; aC--) iS = ae.gv(aE.fS, aC), h[aC].iS !== iS && (h[aC].iS = iS, h[aC].aC4 = Math.max(iS, h[aC].aC4), h[aC].aBw = !0)
	}

	function aCL(h, aCJ) {
		for (var vv = aE.fS << 3, aB9 = bQ.z.aB9, mv = bQ.z.mv, aCN = bQ.z.aCN, aC = aCJ - 1; 0 <= aC; aC--) {
			var aCO = aCN[vv + aC],
				iS = aB9[aCO];
			h[aC].iS !== iS ? (h[aC].iS = iS, h[aC].aC4 = Math.max(iS, h[aC].aC4), h[aC].aBw = !0) : h[aC].aC5 || mv[aCO] % 64 != 5 || (h[aC].aC5 = !0, h[aC].aBw = !0)
		}
	}

	function aBu(a9Z) {
		a9Z.canvas = document.createElement("canvas"), bV.a0u.font = aBq;
		var j = aBp;
		a9Z.kD < aE.ff && 0 === a9Z.id && (j += Math.floor(bV.a0u.measureText(ah.a2u[a9Z.kD] + "000").width)), j += a1L, 0 === a9Z.id && (j += a1L), a9Z.canvas.width = j, a9Z.canvas.height = a1L, a9Z.p4 = a9Z.canvas.getContext("2d", {
			alpha: !0
		}), a9Z.p4.font = aBq, bD.t6.textBaseline(a9Z.p4, 1), bD.t6.textAlign(a9Z.p4, 1)
	}

	function aCB(aC) {
		return aV.aCP() ? i.j - a9W[aC].canvas.width - bf.gap : aV.fp
	}

	function aCC(aC) {
		return Math.floor(2 * bf.gap + (aV.aCP() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a1L))
	}
	this.dt = function() {
		aBs = aBt = 0, a9W = [], this.resize()
	}, this.resize = function() {
		aBq = aO.aAE, a1L = aO.fontSize + 5, a1L = Math.floor(1.25 * a1L), a1.a2.iv() && (a1L = Math.floor(1.25 * a1L)), aBr = Math.floor(.15 * a1L), bV.a0u.font = aBq, aBp = Math.floor(bV.a0u.measureText("02 000 000 0000").width);
		for (var aC = a9W.length - 1; 0 <= aC; aC--) aBu(a9W[aC]), aBv(aC)
	}, this.nS = function() {
		for (var aC = a9W.length - 1; 0 <= aC; aC--) a9W[aC].aBw && (a9W[aC].aBw = !1, aBv(aC))
	}, this.hw = function(mJ, mK) {
		if (!(2 === aE.a4P || 0 === ah.ng[aE.fS] || aE.hr || aE.hs || bD.h4.kR(aE.fS)))
			for (var aC6, aC7, aC8, aC9 = a1.a2.iv() ? a1L : 0, aCA = a1.a2.iv() ? Math.floor(.15 * a1L) : 0, aC = a9W.length - 1; 0 <= aC; aC--)
				if (aC6 = aCB(aC), aC7 = aCC(aC), aC8 = a9W[aC].canvas.width, aC7 - aCA <= mK && mK <= aC7 + a1L + aCA) {
					if (aC6 - aC9 <= mJ && mJ <= aC6 + a1L + aC9) return a9W[aC].aC5 || (a9W[aC].aBw = !0, a9W[aC].aC5 = !0, 0 === a9W[aC].id ? bB.i9.s4(a9W[aC].kD) : bB.i9.s3(a9W[aC].kD)), !0;
					if (0 === a9W[aC].id && aC6 + aC8 - a1L - aC9 <= mJ && mJ <= aC6 + aC8 + aC9) return bY.a9x(3), bB.i9.iG(aS.iD(), a9W[aC].kD), !0
				} return !1
	}, this.en = function() {
		var a72, a73, h, aCF;
		0 === ah.ng[aE.fS] || bD.h4.kR(aE.fS) && !aE.hr && !aE.hs || (a72 = a9W.slice(0, aBs), a73 = a9W.slice(aBs, aBs + aBt), h = a72, aCF = ae.gp(aE.fS), function(h, aCF) {
			if (aBs !== aCF) return 1;
			for (var aC = aCF - 1; 0 <= aC; aC--)
				if (h[aC].kD !== ae.gu(aE.fS, aC)) return 1;
			return
		}(h, aCF) ? aCH(h = function(h, aCF) {
			var aC, kD, g2, iS, aAh = [];
			loop: for (aC = 0; aC < aCF; aC++) {
				for (kD = ae.gu(aE.fS, aC), g2 = 0; g2 < h.length; g2++)
					if (h[g2].kD === kD) {
						aAh.push(h.splice(g2, 1)[0]);
						continue loop
					} iS = ae.gv(aE.fS, aC), aBu(iS = {
					kD: kD,
					iS: iS,
					aC4: iS,
					id: 0,
					aBw: !0,
					aC5: !1,
					canvas: null,
					p4: null
				}), aAh.push(iS)
			}
			return aAh
		}(h, aCF), aCF) : aCH(h, aCF), a72 = h, a73 = function(h) {
			var aCJ = bQ.z.l8[aE.fS];
			return function(h, aCJ) {
				if (aBt !== aCJ) return 1;
				for (var vv = aE.fS << 3, mx = bQ.z.mx, aCN = bQ.z.aCN, aC = aCJ - 1; 0 <= aC; aC--) {
					var aCO = aCN[vv + aC];
					if (h[aC].kD !== mx[aCO]) return 1
				}
				return
			}(h, aCJ) ? aCL(h = function(h, aCJ) {
				var aC, kD, g2, aAh = [],
					vv = aE.fS << 3,
					mx = bQ.z.mx,
					aB9 = bQ.z.aB9,
					aCN = bQ.z.aCN;
				loop: for (aC = 0; aC < aCJ; aC++) {
					var aCO = aCN[vv + aC];
					for (kD = mx[aCO], g2 = 0; g2 < h.length; g2++)
						if (h[g2].kD === kD) {
							aAh.push(h.splice(g2, 1)[0]);
							continue loop
						} aCO = aB9[aCO], aBu(aCO = {
						kD: kD,
						iS: aCO,
						aC4: aCO,
						id: 1,
						aBw: !0,
						aC5: !1,
						canvas: null,
						p4: null
					}), aAh.push(aCO)
				}
				return aAh
			}(h, aCJ), aCJ) : aCL(h, aCJ), h
		}(a73), aBs = a72.length, aBt = a73.length, a9W = a72.concat(a73))
	}, this.z1 = function() {
		if (0 !== ah.ng[aE.fS] && (!bD.h4.kR(aE.fS) || aE.hr || aE.hs))
			for (var aC = a9W.length - 1; 0 <= aC; aC--) z2.drawImage(a9W[aC].canvas, aCB(aC), aCC(aC))
	}
}

function cP() {
	var aAS, l9, aCQ, aCR, k, aAE, fontSize, aCS, aCT, aCU, aCV, canvas, p4, nt, aCW;

	function zI(aC) {
		return L(0 === aC ? 119 : 1 === aC ? 120 : 2 === aC ? 121 : 122)
	}

	function aCd() {
		aE.ie ? aCe + 4 * bf.gap + k + bk.aCf() > aS.fr ? z2.drawImage(canvas, 2 * bf.gap + bk.aCf(), aCe + 2 * bf.gap) : z2.drawImage(canvas, bf.gap, aCe + 3 * bf.gap + bk.aCf()) : z2.drawImage(canvas, bf.gap, aCe + 2 * bf.gap)
	}

	function aCX() {
		canvas.width = aAS[0].width + aCU, canvas.height = k + aCU, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aAS[0].width + aCU, k + aCU), p4.translate(Math.floor(aCU / 2), Math.floor(aCU / 2)), p4.lineWidth = aCU, p4.fillStyle = 1 === aAS[0].aCc ? bE.qS : bE.qK, aCg(), p4.fill(), p4.strokeStyle = 1 === aAS[0].aCc ? bE.qE :
			bE.qN, aCg(), p4.stroke(), bD.t6.textAlign(p4, 1), bD.t6.textBaseline(p4, 1), p4.fillStyle = 1 === aAS[0].aCc ? bE.qE : bE.qN, p4.font = aAE[0], p4.fillText(zI(aAS[0].aCb), Math.floor(aAS[0].width / 2), Math.floor(.72 * aCS[0] * k)), p4
			.font = aAE[1], p4.fillText(aAS[0].pW, Math.floor(aAS[0].width / 2), Math.floor((aCS[0] + .48 * aCS[1]) * k))
	}

	function aCg() {
		if (__fx.settings.smoothUI && p4.roundRect) return p4.beginPath(), p4.roundRect(0, 0, aAS[0].width, k, .15 * k);
		p4.beginPath(), p4.moveTo(aCV, 0), p4.lineTo(aAS[0].width - aCV, 0), p4.lineTo(aAS[0].width, aCV), p4.lineTo(aAS[0].width, k - aCV), p4.lineTo(aAS[0].width - aCV, k), p4.lineTo(aCV, k), p4.lineTo(0, k - aCV), p4.lineTo(0, aCV), p4.closePath()
	}
	this.dt = function() {
		l9 = 4, aCQ = aCR = nt = 0, aAS = [], aAE = new Array(2), fontSize = new Array(2), (aCS = new Array(2))[0] = .3, aCS[1] = .7, aCT = new Array(4), canvas = document.createElement("canvas"), aCW = bi.ei + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.iv() ? .062 : .047) * i.iw), fontSize[0] = Math.floor(.85 * aCS[0] * k), fontSize[1] = Math.floor(.85 * aCS[1] * k), aAE[0] = bD.t6.t9(1, fontSize[0]), aAE[1] = bD.t6.t9(1, fontSize[1]), aC = aCT.length -
			1; 0 <= aC; aC--) aCT[aC] = this.measureText(zI(aC) + "000", aAE[0]);
		if (aCU = Math.floor(1 + .05 * k), aCV = Math.floor(.2 * k), 0 < aAS.length) {
			for (aC = aAS.length - 1; 0 <= aC; aC--) j = this.measureText(aAS[aC].pW + "00", aAE[1]), aAS[aC].width = j < aCT[aC] ? aCT[aC] : j;
			aCX()
		}
	}, this.en = function() {
		0 !== l9 && (4 === l9 ? bi.ei > aCW && (l9 = 0, 1 === aE.a4P) && aR.a4n(bV.xN.a0p[bV.fO].name, 3, 1, 9) : (1 === l9 ? (0 === aCQ && (aCX(), aCQ = 1e-4), 1 <= (aCQ += .002 * (bi.ei - nt)) && (aCR = 0, l9 = 2, aCQ = 1), bi.e0 = !0) : 2 ===
			l9 ? ((aCR += (bi.ei - nt) / 1e3) > aAS[0].ny || 1 < aCR && 1 < aAS.length) && (l9 = 3) : 3 === l9 && ((aCQ -= .002 * (bi.ei - nt)) <= 0 && (aCQ = 0, aAS.shift(), l9 = 0 < aAS.length ? 1 : 0), bi.e0 = !0), nt = bi.ei))
	}, this.measureText = function(pW, aAE) {
		return z2.font = aAE, Math.floor(z2.measureText(pW).width)
	}, this.er = function(aCa, aC) {
		this.a4n(ah.a2u[aCa], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4n = function(pW, aCb, aCc, ny) {
		var j;
		pW.length && (j = (j = this.measureText(pW + "00", aAE[1])) < aCT[aCb] ? aCT[aCb] : j, aAS.push({
			pW: pW,
			width: j,
			aCb: aCb,
			aCc: aCc,
			ny: ny
		}), 0 === l9) && (aCQ = 0, l9 = 1, nt = bi.ei)
	}, this.z1 = function() {
		0 !== l9 && 0 !== aCQ && (aCQ < 1 ? (z2.globalAlpha = aCQ, aCd(), z2.globalAlpha = 1) : aCd())
	}
}

function cy() {
	var k, canvas, p4, aCh, aCi, aCj, aCk, aBw, aCl, aCm, aCn, aCo, aBF = !1,
		a7G = (this.iV = !1, this.j = 0, new Array(2)),
		aCp = 0;

	function nT() {
		var j = ax.j,
			lz = (aBw = !1, a2a(p4, j, k), Math.floor(j / 2));
		1 === aCh ? (p4.fillStyle = bE.qh, p4.fillRect(lz, 0, lz, k)) : -1 === aCh && (p4.fillStyle = bE.qz, p4.fillRect(0, 0, lz, k)), a2b(p4, j, k, 2);
		var lz = (lz = Math.floor(.25 * k)) < 2 ? 2 : lz,
			aBP = (p4.fillStyle = bE.qT, Math.floor((k - 4) * aCi[1] / aCj[1]));
		0 < aBP && p4.fillRect(2, k - 2 - aBP, lz, aBP), 0 < (aBP = Math.floor((k - 4) * aCi[0] / aCj[0])) && p4.fillRect(j - 2 - lz, k - 2 - aBP, lz, aBP);
		lz = (lz = Math.floor(k / 8)) < 2 ? 2 : lz, a2d(p4, Math.floor(.4 * k), 0, k, lz, .5, !1), a2d(p4, Math.floor(j - 1.4 * k), 0, k, lz, .5, !0), aBP = 1.1 * k / a7G[0].width;
		p4.imageSmoothingEnabled = !0, p4.setTransform(aBP, 0, 0, aBP, (j - aBP * a7G[0].width) / 2, -.05 * k), p4.drawImage(a7G[+aBF], 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCu() {
		aCo = -1, aBF = ai.aCv(), aO.a8q(257), aO.aBE(aBF), ax.iV = !0, aBw = !0, aCl = 360;
		for (var gA, ej = 0, aC = am.la - 1; 0 <= aC; aC--) bD.h4.kR(am.lf[aC]) || (ej += ah.hW[am.lf[aC]]);
		aBF ? aCj[0] = Math.max(bO.g9(3 * ej, 4), 1) : aE.ie ? (gA = 9 === aE.lM ? 8 === bj.lR[bk.ld()] ? 80 : (gA = bO.g9(100 * bk.lb(), aE.ko), bO.g9(bO.iu(1550 - 11 * gA, 400, 1e3), 10)) : (gA = bO.g9(100 * bk.lb(), aE.ko), bO.g9(bO.iu(1600 - 12 *
			gA, 400, 1e3), 10)), gA = bO.g9(gA * ej, 100), aCj[0] = Math.max(gA, 1)) : 8 === aE.lM ? aCj[0] = Math.max(bO.g9(3 * ej, 4), 1) : aCj[0] = Math.max(bO.g9(3 * ej, 5), 1), aCj[1] = Math.max(ej - aCj[0], 1)
	}

	function aCq() {
		aCn = bi.l1(), aBw = !0, aCl = aCh = 0, aCk = [], ax.iV = !1, aO.a4X(247), aCi[0] = aCi[1] = 0, aO.a8q(673)
	}

	function a2X() {
		return aS.aAs(aO.aAo()) ? __fx.settings.keybindButtons ? aS.fr - 2 * (k + bf.gap) : aS.fr - k - bf.gap : bF.aAs(aO.aAr()) ? bF.a2X() - k - bf.gap : i.k - k - bn.a9d() * bf.gap
	}
	this.du = function() {
		for (var aC = 0; aC < 2; aC++) a7G[aC] = bD.canvas.a3B(ac.get(3), 8 - aC, bE.rg), a7G[aC] = bD.canvas.a7I(a7G[aC])
	}, this.dt = function() {
		aCn = -1e4, aCm = aCp = 0, aCo = -1, this.iV = !1, aBw = aBF = !1, aCi = [aCh = aCl = 0, 0], aCj = [1, 1], aCk = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p4 = canvas.getContext("2d", {
			alpha: !0
		}), nT()
	}, this.nS = function() {
		aBw && nT()
	}, this.hw = function(fp, fr) {
		return !!this.iV && !(fp < i.j - this.j - bf.gap || fr < a2X() || (aE.hr || aE.hs || this.iW(aE.fS) && (aN.ht && aN.a6Y(), bB.i9.iX(fp > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.en = function() {
		0 < aCm ? 0 === --aCm && aCq() : this.iV ? 180 == --aCl && 3 * aCi[0] < aCj[0] ? aCq() : aCi[0] >= aCj[0] ? aBF ? bU.a43.a4K() : bU.a43.a4O() : aCi[1] >= aCj[1] ? aCm = 4 : aCl <= 0 && aCq() : ! function() {
			var aCx = bi.l1();
			if (aCx % 40 == 14) {
				if (aCp) return !(aCx < aCp) && !(aCx < aCn + 535) && (aCp = aCx + 1071, bD.h4.a7t()) ? (aCu(), 1) : 0;
				(1 === am.la || (aE.ie ? bk.lb() : ah.hW[mf[0]]) >= bO.g9(96 * aE.ko, 100)) && (aCp = aCx + 535)
			}
			return
		}() && 0 <= aCo && (aO.a2t(250, L(123, [ah.a2u[aCo]]), 673, aCo, bE.qN, bE.qK, -1, !0), aCu())
	}, this.a4Q = function() {
		this.iV && aCi[0] < aCj[0] && aCq()
	}, this.sy = function(player, aCy) {
		var aCz = L(aCy ? 124 : 125, [ah.a2u[player]]),
			aCz = (aO.a2t(450, aCz, 257, player, aCy ? bE.qf : bE.qw, bE.qK, -1, !0), aCk.push(player), aBw = !0, aE.lO ? Math.max(aCj[0], aCj[1]) : ah.hW[player]),
			aCz = Math.max(aCz, 1);
		aCy ? aCi[0] += aCz : aCi[1] += aCz, player === aE.fS && (aCh = aCy ? 1 : -1)
	}, this.z1 = function() {
		var fr;
		this.iV && (fr = a2X(), z2.drawImage(canvas, i.j - this.j - bf.gap, fr))
	}, this.iY = function(player) {
		if (0 !== aCl) return !1;
		if (!bD.h4.hu(1)) return !1;
		if (!bD.h4.hv(player)) return !1;
		if (10 <= kp[player] && !bD.h4.a8D(player, 9)) return !1;
		if (!(aE.lO || m.e6 && m.eB)) {
			player = bi.l1();
			if (player < aCn + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iW = function(hG) {
		if (!bD.h4.hu(1)) return !1;
		if (!bD.h4.hv(hG)) return !1;
		if (!this.iV) return !1;
		for (var aC = aCk.length - 1; 0 <= aC; aC--)
			if (aCk[aC] === hG) return !1;
		return !0
	}, this.iU = function(player) {
		aCo = player
	}
}

function cQ() {
	var j, fp, aD1, canvas, p4, iV, jM, a8h, aAE, aBw, aD2 = 11 / 12;

	function aD4() {
		var aC3 = Math.floor(jM * (j - 2 * aD1)),
			aD7 = 1 + Math.floor(.0625 * aS.k),
			aD8 = 1 + Math.floor(.3 * aS.k),
			aD9 = Math.floor(.55 * aS.k),
			rounded = (p4.clearRect(0, 0, j, aS.k), p4.fillStyle = bE.qJ, p4.fillRect(0, 0, aD1, aS.k), p4.fillRect(aD1 + aC3, 0, j - aD1 - aC3, aS.k), p4.fillStyle = jM < 1 / 3 ? "rgba(" + Math.floor(3 * jM * 130) + ",130,0,0.85)" : jM < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jM - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jM - 2 / 3) * 130) + ",0.85)", p4.fillRect(aD1, 0, aC3, aS.k), p4.fillStyle = bE.qN, p4.fillStyle = __fx.utils.lineColor(bE.qN),
				__fx.utils.smoothFrame(p4, j, aS.k));
		rounded || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, aS.k - 1, j, 1), p4.fillRect(0, 0, 1, aS.k)), p4.fillRect(aD1, 0, 1, aS.k), p4.fillRect(aD1 + aC3, 0, 1, aS.k), p4.fillRect(j - aD1, 0, 1, aS.k), rounded || p4.fillRect(j - 1, 0, 1, aS.k),
			p4.fillStyle = bE.qN, p4.fillRect(Math.floor(.25 * aS.k) + aD8, Math.floor((aS.k - aD7) / 2), aS.k - 2 * aD8, aD7), p4.fillRect(Math.floor(j - 1.25 * aS.k) + aD8, Math.floor((aS.k - aD7) / 2), aS.k - 2 * aD8 - aD8 % 2, aD7), p4.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aD7) / 2), aD8, aD7, aS.k - 2 * aD8 - aD8 % 2), a8h = bD.h4.jL(aE.fS, aS.iD()), p4.fillText(bD.pa.a3i(a8h) + " (" + bD.pa.a8a(100 * jM, +(jM < .1)) + ")", Math.floor(.5 * j), aD9)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jM = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a6U(arg1);

	function aDE(a6p) {
		return !(1 < a6p && 1 === jM || (1 < a6p && a6p * jM - jM < 1 / 1024 ? a6p = (jM + 1 / 1024) / jM : a6p < 1 && jM - a6p * jM < 1 / 1024 && (a6p = (jM - 1 / 1024) / jM), jM = bO.iu(jM * a6p, 1 / 1024, 1), aD4(), 0))
	}

	function aDF(mJ) {
		return jM !== (jM = bO.iu((mJ - fp - aD1) / (j - 2 * aD1), 1 / 1024, 1)) && (aD4(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aD4(), bi.e0 = !0
	}, this.fr = 0, this.hx = !1, this.dt = function() {
		iV = !aE.i7 && !aE.hr && !aE.hs, aBw = !1, jM = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8h = 0, this.hx = !1, this.resize()
	}, this.resize = function() {
		a1.a2.iv() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iw), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.iv() ? .65 : .389) * i.iw), j += 12 - j % 12, this.k = Math.floor(j / 12)), aD1 = Math.floor(3 * this.k / 2), aAE =
			bD.t6.t9(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, z2), canvas.height = this.k, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = aAE, bD.t6.textBaseline(p4, 1), bD.t6.textAlign(p4, 1), this.aD3(), aD4()
	}, this.aD3 = function() {
		fp = a1.a2.iv() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fr = i.k - this.k - bn.a9d() * bf.gap
	}, this.nS = function() {
		aBw && (aBw = !1, aD4())
	}, this.iV = function() {
		return !(!iV || aN.ht && fp < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAs = function(aDA) {
		return !!this.iV() && fp + j > i.j - aDA - bf.gap
	}, this.a8o = function() {
		iV = !aE.hr && !aE.hs
	}, this.aCq = function() {
		iV = !1
	}, this.iD = function() {
		return bO.iu(Math.floor(1024 * jM + .5) - 1, 0, 1023)
	}, this.a6R = function(mJ, mK) {
		return this.iV() && fp < mJ && mJ < fp + j && mK > this.fr
	}, this.hw = function(mJ, mK) {
		if (!this.iV()) return !1;
		if (!(__fx.settings.keybindButtons && mK > this.fr - Math.floor(bf.gap / 4) - this.k && mK < this.fr - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mJ - fp))) {
			if (!aS.a6R(mJ, mK)) return !1;
			aT.oC = !1, ! function(up, mJ, mK) {
				if (function(mJ, mK) {
						return fp < mJ && mJ < fp + aD1 && mK > aS.fr
					}(mJ, mK)) return aDE(aD2);
				if (function(mJ, mK) {
						return fp + j - aD1 < mJ && mJ < fp + j && mK > aS.fr
					}(mJ, mK)) return aDE(1 / aD2);
				return up.hx = !0, aDF(mJ)
			}(this, mJ, mK) || (bi.e0 = !0)
		}
		return !0
	}, this.a6U = function(oJ) {
		0 !== aE.a4P && this.iV() && aDE(oJ) && (bi.e0 = !0)
	}, this.a60 = function(deltaY) {
		var oJ;
		return !(0 === deltaY || !this.iV()) && aDE(oJ = 0 < deltaY ? (oJ = 400 / (400 + deltaY)) < aD2 ? aD2 : oJ : 1 / aD2 < (oJ = (400 - deltaY) / 400) ? 1 / aD2 : oJ)
	}, this.a5x = function(mJ) {
		return !!this.hx && aDF(mJ)
	}, this.a6N = function() {
		this.hx = !1
	}, this.en = function() {
		this.iV() && a8h !== bD.h4.jL(aE.fS, this.iD()) && (aBw = !0)
	}, this.z1 = function() {
		this.iV() && (z2.drawImage(canvas, fp, this.fr), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(z2, fp, this.fr)
	}
}

function dA() {
	var canvas, p4, rect, font, aDG = 0,
		aDH = !1,
		aDI = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aDJ = 5;

	function aDQ() {
		if (aDH) {
			var aC, fi = aDI.length,
				aD9 = Math.floor(.5 * rect.k),
				k = fi * aD9,
				fp = Math.floor(Math.floor(rect.fp) + .3 * rect.j - .5),
				fr = Math.floor(Math.floor(rect.fr) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (z2.fillStyle = bE.qJ, z2.fillRect(fp, fr, j, k), z2.fillStyle = bE.qm, z2.fillRect(fp, fr + aDJ * aD9, j, aD9), z2.fillStyle = bE.qN, z2.fillRect(fp, fr, 2, k), z2.fillRect(fp, fr, j, 2), z2.fillRect(fp + j - 2, fr, 2, k), aC =
				1; aC < fi; aC++) z2.fillRect(fp, fr + aC * aD9, j, 2);
			for (z2.fillStyle = bE.qN, bD.t6.textAlign(z2, 1), bD.t6.textBaseline(z2, 1), z2.font = bD.t6.t9(0, .6 * aD9), fp += .5 * j, aC = 0; aC < fi; aC++) z2.fillText(aDY(aC), fp, fr + (aC + .6) * aD9)
		}
		z2.drawImage(canvas, Math.floor(rect.fp), Math.floor(rect.fr))
	}

	function nT(up) {
		var fp, o7, o8, aD9;
		p4.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p4.fillStyle = bE.qJ, p4.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.oA && (p4.fillStyle = bE.qm, p4.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p4
			.fillStyle = bE.qN, p4.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p4.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fp = .5 * rect.j, p4.fillText("Replay Speed", fp, .31 * rect.k), p4.fillText(aDY(aDJ), fp, .69 *
				rect.k), p4.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), up.a9M ? (fp = Math.floor(.02 * rect.j), up = Math.floor(.025 * rect.j), o7 = Math.floor(.85 * rect.j - fp - .5 * up), o8 = Math.floor(.25 * rect.k), aD9 =
				Math.floor(rect.k) - 2 * o8, p4.fillRect(o7, o8, fp, aD9), p4.fillRect(o7 + fp + up, o8, fp, aD9)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fp = Math.floor(.85 * rect.j - .5 * j + j / 12),
					fr = Math.floor(.5 * rect.k - k);
				p4.beginPath(), p4.moveTo(fp, fr), p4.lineTo(fp + j, fr + k), p4.lineTo(fp, fr + (k << 1)), p4.fill()
			}(), p4.fillRect(0, 0, Math.floor(rect.j), 2), p4.fillRect(0, 0, 2, Math.floor(rect.k)), p4.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p4.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aDY(aC) {
		return 5 === aC ? "Normal" : "" + aDI[aC]
	}
	this.a9M = !1, this.dt = function() {
		aE.hr && (aDJ = 5, this.a9M = !1, aDH = !1, rect = new u8([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aDK = function() {
		return aDI[aDJ]
	}, this.a2X = function() {
		return rect.fr
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a9M,
		fxGetSpeedIndex: () => aDJ,
		fxSetSpeedIndex: index => {
			aDJ = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.fr
	}, this.aAs = function(aDA) {
		return !!aE.hr && rect.fp + rect.j > i.j - aDA - bf.gap
	}, this.resize = function() {
		aE.hr && (rect.resize(), rect.fr -= (bn.a9d() - 1) * bf.gap, font = bD.t6.t9(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.t6.textAlign(p4, 1), bD.t6.textBaseline(p4, 1), nT(this))
	}, this.a6X = function(aDL) {
		0 === aE.a4P || u.iV() || aDL !== aE.oA && (aE.oA = aDL, bk.resize(), bi.e0 = !0, aE.hr) && (aDG = bi.ei + 2e3, nT(this))
	}, this.hw = function(fp, fr) {
		if (!aE.hr) return !1;
		if (fp < rect.fp || fr < rect.fr || fp > rect.fp + rect.j) return aDH && function(up, fp, fr) {
			var fi = aDI.length,
				aD9 = Math.floor(.5 * rect.k),
				k = fi * aD9,
				o7 = Math.floor(Math.floor(rect.fp) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.fr) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aDH = !1, bi.e0 = !0, fp < o7 || o7 + j < fp || fr < k || (aDJ = aDP(0, Math.floor((fr - k) / aD9), fi - 1), nT(up)), !0
		}(this, fp, fr);
		if ((fp -= rect.fp) < .3 * rect.j) aDH = !1, this.a6X(!aE.oA);
		else {
			if (fp < .7 * rect.j) return aDH = !aDH, bi.e0 = !0;
			this.a6Z(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a6Z(!0), this.a6Z = function(aDN) {
		2 === aE.a4P ? (this.a6X(!1), u.v(3)) : (aDH = !1, this.a9M = !this.a9M, this.a9M ? (aN.ht && aN.a6Y(), a1.a2.setState(1)) : aDN || aN.aAL(), bi.e0 = !0, nT(this))
	}, this.aDO = function() {
		this.a9M = !1, aN.aAL(), bi.e0 = !0, nT(this)
	}, this.a6G = function(fp, fr) {
		return !!aE.oA && (0 <= aN.hw(fp, fr) || (aE.hr ? ((bi.ei > aDG || !this.hw(fp, fr)) && aT.hw(fp, fr), bi.e0 = !0, aDG = bi.ei + 2e3) : aT.hw(fp, fr)), !0)
	}, this.en = function() {
		aE.hr && aE.oA && bi.ei > aDG - 1e3 && bi.ei < aDG && (bi.e0 = !0)
	}, this.a4Y = function() {
		aE.hr && (this.a9M = !1, bi.e0 = !0, nT(this))
	}, this.z1 = function() {
		if (aE.hr) {
			if (aE.oA) {
				if (bi.ei > aDG) return;
				if (bi.ei > aDG - 1e3) return z2.globalAlpha = aDP(0, (1e3 - (bi.ei - (aDG - 1e3))) / 1e3, 1), aDQ(), void(z2.globalAlpha = 1)
			}
			aDQ()
		}
	}
}

function cR() {
	var aDZ, aDa, j, fp, fr, aDb, aDc;
	this.dt = function() {
		aDZ = new Array(2), aDa = new Array(2), this.oC = !1, aDc = aDb = jO = jN = 0, ix = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.iv() ? .072 : .0502) * i.iw)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aDZ[aC] = document.createElement("canvas"), aDZ[aC].width = j, aDZ[aC].height = j, aDa[aC] = aDZ[aC].getContext("2d", {
			alpha: !0
		});
		this.aD3(),
			function() {
				for (var aDt = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aDa[aC].clearRect(0, 0, j, j), aDa[aC].fillStyle = bE.qG, aDa[aC].beginPath(), aDa[aC].arc(j / 2, j / 2, j / 2 - aDt, 0, 2 * Math.PI), aDa[aC].fill(), aDa[aC]
					.lineWidth = aDt, aDa[aC].fillStyle = bE.qN, aDa[aC].strokeStyle = bE.qN, aDa[aC].strokeStyle = __fx.utils.lineColor(bE.qN), aDa[aC].beginPath(), aDa[aC].arc(j / 2, j / 2, j / 2 - aDt, 0, 2 * Math.PI), aDa[aC].stroke(), a2d(
						aDa[aC], 0, 0, j, aDt, .3, 0 === aC)
			}()
	}, this.a2W = function() {
		return -jN / ix
	}, this.a2X = function() {
		return -jO / ix
	}, this.oM = function(aDg, j3) {
		jN = ix * aDg - j3
	}, this.oN = function(aDh, j4) {
		jO = ix * aDh - j4
	}, this.hw = function(aDf, aAt) {
		return aE.oA || ! function(aDf, aAt) {
			return Math.pow(aDf - (fp + j / 2), 2) + Math.pow(aAt - (fr + j / 2), 2) < j * j / 4 || Math.pow(aDf - (fp + j / 2), 2) + Math.pow(aAt - (fr + 2 * j), 2) < j * j / 4
		}(aDf, aAt) || bm.buffer.data[8].value ? (aI.oP() && (this.oC = !0, aDb = aDf, aDc = aAt), !1) : aAt < fr + 1.25 * j ? this.a60(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a60(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5x = function(aDf, aAt) {
		var aDi, aDj, j6, j9;
		return !aI.oP() || (aDi = jN, aDj = jO, jN += j6 = aDb - aDf, jO += j9 = aDc - aAt, ag.a5x(j6, j9), this.aDk(), aDb = aDf, aDc = aAt, aDi !== jN) || aDj !== jO
	}, this.a60 = function(mJ, mK, deltaY) {
		var oJ;
		if (aI.oP()) {
			if (0 < deltaY) oJ = (oJ = 500 / (500 + deltaY)) < .5 ? .5 : oJ;
			else {
				if (!(deltaY < 0)) return !1;
				oJ = 2 < (oJ = (500 - deltaY) / 500) ? 2 : oJ
			}
			this.aDl(mJ, mK, oJ), bi.e0 = !0
		}
		return !0
	}, this.aDl = function(fp, fr, fM) {
		var a6p;
		fM = a6p = (a6p = 1024 < (a6p = fM) * ix ? 1024 / ix : a6p) * ix < .125 ? .125 / ix : a6p, ag.zoom(fM, fp, fr),
			function(a6p, mJ, mK) {
				ix *= a6p, jN = (jN + mJ) * a6p - mJ, jO = (jO + mK) * a6p - mK, aT.aDk()
			}(fM, fp, fr)
	}, this.aDk = function() {
		var aDo = i.j / 16,
			aDp = 0,
			aDq = i.k / 16,
			aDr = 0;
		jN < -i.j + aDo && (aDp = -i.j + aDo - jN), jN > ix * bV.ft - aDo && (aDp = ix * bV.ft - aDo - jN), jO < -i.k + aDq && (aDr = -i.k + aDq - jO), jO > ix * bV.fu - aDq && (aDr = ix * bV.fu - aDq - jO), jN += aDp, jO += aDr, bd.oO(), ag.aDs(
			aDp, aDr)
	}, this.aD3 = function() {
		fp = i.j - j - bf.gap, fr = Math.floor(i.k / 2 - 1.25 * j)
	}, this.z1 = function() {
		bm.buffer.data[8].value || (z2.drawImage(aDZ[0], fp, fr), z2.drawImage(aDZ[1], fp, Math.floor(fr + 3 * j / 2)))
	}
}

function cS() {
	var h, aDu, aDv, aDw, gap, aDx, aDy, aDz, aE0, aE1, aAE, aE2, hn, aE3, aC3, aE4, aE5;

	function aE9() {
		aDw = Math.floor(.2 * (a1.a2.iv() ? .07 : .035) * i.iw), aDw = aAq(a1.a2.iv() ? 3 : 1, aDw);
		var aEC = i.j / (h.length + gap);
		aDw = aDw < aEC ? aEC : aDw, aC3 = Math.floor((1 - gap) * aDw), aDu = 0, aED()
	}

	function aED() {
		aDu = (aDu = aDu < -20 ? -20 : aDu) > (h.length - 15) * aDw ? (h.length - 15) * aDw : aDu, aDy = Math.floor(aDu / aDw), aDz = (aDz = aDy + Math.floor(i.j / aDw)) > h.length - 1 ? h.length - 1 : aDz, aDy = (aDy = aDz < aDy ? aDz : aDy) < 0 ?
			0 : aDy;
		var lz = aDz;
		aDx = aDv / h[lz];
		for (var aC = aDz - 1; aDy <= aC; aC--) h[aC] > h[lz] && (lz = aC, aDx = aDv / Math.pow(h[aC], aE3))
	}

	function aEG(fp) {
		fp = Math.floor((aDu + i.j - fp - gap * aDw) / aDw);
		return (fp = fp < -1 ? -1 : -1 === fp ? 0 : fp > h.length - 1 ? -1 : fp) !== aE0 && (aE0 = fp, -1 === aE4 && 0 === aE0 && aU.aE6 && (aE4 = setInterval(aEH, 100)), 1)
	}

	function aEI(aC) {
		var aEK = Math.floor(aDx * Math.pow(h[aC], aE3));
		z2.fillRect(aDu + i.j - (aC + 1) * aDw, i.k - aEK, aC3, aEK)
	}

	function aEH() {
		var hG;
		0 !== (aE0 = 8 === ab.a5a() ? -1 : aE0) ? (aE5 = (new Date).getTime(), clearInterval(aE4), aE4 = -1) : (hG = h[1] / 864e3, -1 !== aE5 && (hG += ((new Date).getTime() - aE5) * h[1] / 864e5, aE5 = -1), 0 < hG && (h[0] += Math.floor(hG), bi
			.e0 = !0))
	}
	this.aE6 = !1, this.dt = function() {
		aE5 = aE4 = -1, aE0 = -(aE3 = 1), this.aE7 = !1, hn = 0, aE2 = new Date, aDu = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDv = Math.floor(.15 * i.k), aE1 = (aE1 = Math.floor((a1.a2.iv() ? .018 : .0137) * i.iw)) < 2 ? 2 : aE1, aAE = bD.t6.t9(1, aE1), aE9()
	}, this.aEA = function(aEB) {
		var aC;
		for (this.aE6 = !0, aC = 0; aC < aEB.length; aC++) h.unshift(aEB[aC]);
		aE9(), bi.e0 = !0
	}, this.aEE = function() {
		aED()
	}, this.a5x = function(fp, fr) {
		fr > i.k - .6 * aDv ? this.aE7 ? fp !== hn && (aDu += fp - hn, hn = fp, aED(), aEG(fp), this.aE7 = -1 !== aE0, bi.e0 = !0) : aEG(fp) && (bi.e0 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aE0 && (this.aE7 = !1, aE0 = -1, bi.e0 = !0)
	}, this.a60 = function(fp, deltaY) {
		-1 !== aE0 && (aDu += Math.floor(deltaY), aED(), aEG(fp), bi.e0 = !0)
	}, this.hw = function(fp, fr) {
		this.a5x(fp, fr), -1 !== aE0 && (hn = fp, this.aE7 = !0)
	}, this.a6M = function() {
		-1 !== aE0 && (this.aE7 = !1)
	}, this.z1 = function() {
		z2.fillStyle = bE.qQ;
		for (var aEL, month, ej, vj, aEO, aEP, o8, aEQ, aER, aC = aDz; aDy <= aC; aC--) aEI(aC);
		this.aE6 && 0 === aDy && (z2.fillStyle = bE.qz, aEI(0)), -1 !== aE0 && (z2.fillStyle = bE.qP, aEI(aE0)), -1 !== aE0 && (z2.font = aAE, bD.t6.textBaseline(z2, 2), (ej = new Date).setTime(aE2.getTime() - 1e3 * aE0 * 60 * 60 * 24), month =
			"month", aEL = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ej), aEL = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ej)), aEL = aEL + ", " + ej.getUTCDate() + " " + month + " " + ej.getFullYear(), month = 1 === h[aE0] ? L(126) : L(127), month = bD.pa.a3i(h[aE0]) + " " + month, ej = Math.floor(z2.measureText(aEL).width), vj = Math
			.floor(z2.measureText(month).width), aEO = Math.floor(.5 * (ej + aE1)), aEP = (aEP = aDu + i.j - (aE0 + 1) * aDw) < aEO ? aEO : aEP > i.j - aEO ? i.j - aEO : aEP, o8 = i.k - Math.floor(aDx * Math.pow(h[aE0], aE3)), aEQ = Math
			.floor(1.1 * aE1), aER = o8 > i.k - aEQ ? i.k - aEQ : o8, z2.fillStyle = bE.qK, z2.fillRect(i.j - vj - aE1, aER - aEQ, vj + aE1, aEQ), z2.fillRect(aEP - aEO, i.k - aEQ, ej + aE1, aEQ), z2.fillStyle = bE.qN, bD.t6.textAlign(z2, 2),
			z2.fillText(month, Math.floor(i.j - .5 * aE1), aER), bD.t6.textAlign(z2, 1), z2.fillText(aEL, aEP, i.k), z2.strokeStyle = bE.qR, z2.lineWidth = 1, z2.beginPath(), z2.moveTo(0, o8), z2.lineTo(i.j, o8), z2.closePath(), z2.stroke())
	}
}

function cT() {
	var aAE, j, fr, aES, aET, aEU, canvas, p4, aBw, a80, aEV, aEW, aEX, aEY;
	this.fp = 0, this.k = 0, this.dt = function() {
		aEU = aE.a8w, aEW = "rgba(0,100,0,0.8)", aEX = "rgba(150,0,0,0.8)", aBw = aEV = !0, a80 = ah.hk[aE.fS], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.iv() ? .305 : .24) * i.iw), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), aAE = bD.t6.t9(1, Math.floor(.8 * this.k)), aET = bD.t6.t9(1, Math.floor(.45 * this.k)), aEY = Math.floor(.5 * this.k), bV
			.a0u.font = aAE, fr = bf.gap, aES = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), bD.t6.textBaseline(p4, 1), bD.t6.textAlign(p4, 1), this.aEZ()
	}, this.aCP = function() {
		return a1.a2.iv() && i.j < 1.2 * i.k
	}, this.aD3 = function() {
		this.aCP() ? this.fp = i.j - j - bf.gap : this.fp = Math.floor(aW.aEa() + (i.j - aW.aEa() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nS = function() {
		aBw && (aBw = !1, this.aEZ())
	}, this.aEZ = function() {
		p4.font = aAE, p4.clearRect(0, 0, j, this.k), p4.fillStyle = aEV ? aEW : aEX, p4.fillRect(0, 0, j, this.k), p4.fillStyle = bE.qP;
		var es = this.aEb(),
			aEd = (this.aEc(), p4.fillStyle = ah.hk[aE.fS] >= af.kk(aE.fS) ? bE.qw : bE.qN, bD.pa.a3i(a80)),
			aEd = (p4.fillText(aEd, Math.floor(j / 2), aEY), p4.measureText(aEd).width),
			aEe = (p4.font = aET, p4.fillStyle = 9 === es ? bE.ra : bE.qN, af.aEf),
			aEg = "+" + aEe,
			vj = p4.measureText(aEg).width,
			aEh = Math.floor(this.k / 12),
			aEd = .5 * (j + aEd) + aEh;
		(aEd + vj + aES <= j || 1e3 <= aEe && (aEg = "+" + Math.floor(aEe / 1e3) + "K", aEd + (vj = p4.measureText(aEg).width) + aES <= j)) && p4.fillText(aEg, Math.floor(aEd + .5 * vj), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p4.fillText(9 - es, Math.floor(2 * aES + aEh), Math.floor(.3 * this.k)), p4.fillStyle = bE.qN, __fx.utils.smoothFrame(p4, j, this.k) || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, 0, 1, this.k), p4.fillRect(0, this
				.k - 1, j, 1), p4.fillRect(j - 1, 0, 1, this.k))
	}, this.aEb = function() {
		var es = bi.l1() % 100,
			a1Z = (es = 9 - bO.g9(es -= es % 10, 10), Math.floor(es * (this.k - aES) / 9));
		return p4.fillRect(0, a1Z, aES, this.k - a1Z), p4.fillRect(j - aES, a1Z, aES, this.k - a1Z), es
	}, this.aEc = function() {
		p4.fillRect(aES, this.k - aES, Math.floor((j - 2 * aES) * ah.hk[aE.fS] / aEU), aES)
	}, this.en = function() {
		var hG = aE.fS;
		bD.h4.hv(hG) && (hG = ah.hk[hG] - ah.a7z[hG], a80 !== hG ? (aEU = aAq(hG, aEU), aEV = a80 < hG && 10 <= hG, a80 = hG, aBw = !0) : bi.l1() % 10 == 9 && (aBw = !0))
	}, this.z1 = function() {
		0 === ah.ng[aE.fS] || aE.i7 || 2 === ah.a7q[aE.fS] || z2.drawImage(canvas, this.fp, fr)
	}
}

function cU() {
	var aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEq, aEr, aEs, aEt, aEu, aEv, aEw, aEx, aEy, aEz, aF0, aF1, aF2, aF3, position, aF4, aF5, aF6, aF7, aF8, aF9 = 1,
		aFA = 1,
		aFB = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fS;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kp[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kp[aE.fS]);
	}

	function aFD() {
		aEo.clearRect(0, 0, aEi, aCe),
			aEo.fillStyle = aF8 ? bE.rJ : bE.rF,
			aEo.fillRect(0, 0, aEi, aEt),
			aEo.fillStyle = bE.qJ,
			aEo.fillRect(0, aEt, aEi, aCe - aEt);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEm)
				position = (rivalsCount > aEm ? rivalsCount : aEm) - aEm;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kp[aE.fS]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aF3 = -1;
		if (__fx.leaderboardFilter.enabled && aF3 >= __fx.leaderboardFilter.filteredLeaderboard.length) aF3 = -1;
		if (__fx.leaderboardFilter.showingRivals && aF3 + position >= __fx.leaderboardFilter.rivalsData.length) aF3 = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEm) aFF(ownClanIndex - position, bE.qm);
			})() :
			(playerPos >= position && aFF(playerPos - position, bE.qm),
				0 !== kp[aE.fS] && 0 === position && aFF(0, bE.rR))
		),
		-1 !== aF3 && aFF(aF3, bE.qO),
			aEo.fillStyle = bE.qJ,
			//console.log("drawing", aF3),
			aEo.clearRect(0, aCe - __fx.leaderboardFilter.tabBarOffset, aEi, __fx.leaderboardFilter.tabBarOffset);
		aEo.fillRect(0, aCe - __fx.leaderboardFilter.tabBarOffset, aEi, __fx.leaderboardFilter.tabBarOffset);
		aEo.fillStyle = __fx.utils.lineColor(bE.qN),
			aEo.fillRect(0, aEt, aEi, 1),
			aEo.fillRect(0, aCe - __fx.leaderboardFilter.tabBarOffset, aEi, 1),
			__fx.leaderboardFilter.drawTabs(aEo, aEi, aCe - __fx.leaderboardFilter.tabBarOffset, bE.qm),
			__fx.utils.smoothFrame(aEo, aEi, aCe, bf.a3P) || (
				aEo.fillRect(0, 0, aEi, bf.a3P),
				aEo.fillRect(0, 0, bf.a3P, aCe),
				aEo.fillRect(aEi - bf.a3P, 0, bf.a3P, aCe),
				aEo.fillRect(0, aCe - bf.a3P, aEi, bf.a3P)),
			aEo.fillStyle = bE.qN, aEo.font = aEj, bD.t6.textBaseline(aEo, 1), bD.t6.textAlign(aEo, 1), aEo.fillText(aFB, Math.floor((aEi + aEt - 22) / 2), Math.floor(aEr + aEk / 2));
		__fx.playerList.drawButton(aEo, 12, 12, aEt - 22);
		var g1, hH = playerPos < position + aEm - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hH = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEm; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hW[repId], ah.a2u[repId], ah.a7q[repId]]);
					ah.hW[repId] = rivalsEntry.territory;
					ah.a2u[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7q[repId] = 0;
				}
				for (aEo.font = aEl, bD.t6.textAlign(aEo, 0), g1 = aEm - hH; 0 <= g1; g1--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[g1 + position];
					if (rivalsEntryLeft !== undefined)
						aFG(rivalsEntryLeft.representativeId), aFH(g1, g1 + position, rivalsEntryLeft.representativeId);
				}
				for (bD.t6.textAlign(aEo, 2), g1 = aEm - hH; 0 <= g1; g1--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[g1 + position];
					if (rivalsEntryRight !== undefined)
						aFG(rivalsEntryRight.representativeId), aFI(g1, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hW[entry[0]] = entry[1];
					ah.a2u[entry[0]] = entry[2];
					ah.a7q[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEm)
				position = (result.length > aEm ? result.length : aEm) - aEm;
			//if (position >= result.length) position = result.length - 1;
			for (aEo.font = aEl, bD.t6.textAlign(aEo, 0), g1 = aEm - hH; 0 <= g1; g1--) {
				const pos = result[g1 + position];
				if (pos !== undefined)
					aFG(mf[pos]), aFH(g1, pos, mf[pos]);
			}
			for (bD.t6.textAlign(aEo, 2), g1 = aEm - hH; 0 <= g1; g1--) {
				const pos = result[g1 + position];
				if (pos !== undefined)
					aFG(mf[pos]), aFI(g1, mf[pos]);
			}
		} else {
			for (aEo.font = aEl, bD.t6.textAlign(aEo, 0), g1 = aEm - hH; 0 <= g1; g1--)
				aFG(mf[g1 + position]), aFH(g1, g1 + position, mf[g1 + position]);
			for (bD.t6.textAlign(aEo, 2), g1 = aEm - hH; 0 <= g1; g1--)
				aFG(mf[g1 + position]), aFI(g1, mf[g1 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hH && (aFG(aE.fS), bD.t6.textAlign(aEo, 0), aFH(aEm - 1, kp[aE.fS], aE.fS), bD.t6.textAlign(aEo, 2), aFI(aEm - 1, aE.fS)), 0 === position && (hH = .7 * aEu / ac.get(4).height, aEo.setTransform(
			hH, 0, 0, hH, Math.floor(aEv + .58 * aEu + .5 * hH * ac.get(4).width), Math.floor(aEr + aEk + .4 * aEu)), aEo.imageSmoothingEnabled = !0, aEo.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEo.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aFG(player) {
		aE.ie && (aEo.fillStyle = bj.aFK[bj.aFL[player]])
	}

	function aFF(aC, aFM) {
		aEo.fillStyle = aFM, aC = aEm - 1 < aC ? aEm - 1 : aC;
		aFM = Math.floor((aC === aEm - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEu), aFM = aC === aEm - 2 ? Math.floor(aEt + 9.15 * aEu) - Math.floor(aEt + 8.15 * aEu) : aFM;
		aEo.fillRect(0, Math.floor(aEt + (aC + (0 === aC ? 0 : .15)) * aEu), aEi, aFM)
	}

	function aFH(a06, a8F, aC) {
		aEo.fillText(aEz[a8F], aEv, Math.floor(aEr + aEk + (a06 + .5) * aEu)), 1 === ah.a7q[aC] && (aEo.font = "italic " + aEl);
		a8F = Math.floor(aEr + aEk + (a06 + .5) * aEu);
		aEo.fillText(ah.a2u[aC], aEw, a8F), 0 !== ah.a7q[aC] && (aEo.font = aEl), aC < aE.l4 && 2 !== ah.a7q[aC] || aEo.fillRect(aEw, a8F + .35 * aF9, aEy[aC], Math.max(1, .1 * aF9))
	}

	function aFI(a06, aC) {
		aEo.fillText(ah.hW[aC], aEx, Math.floor(aEr + aEk + (a06 + .5) * aEu))
	}
	this.dt = function() {
		var aC;
		for (u.z.vW[0] = 0, aF7 = aF6 = aF4 = 0, aF8 = aF5 = !1, aF3 = -1, aEm = a1.a2.iv() ? 6 : 10, aFA = (position = 0) === (aFA = bm.buffer.data[11].value) ? 10 : 1 === aFA ? 5 : 1, aF2 = !1, aF0 = new Uint16Array(aEm + 1), aF1 =
			new Uint32Array(aEm + 1), aEq = aE.ff, mf = new Uint16Array(aEq), kp = new Uint16Array(aEq), aC = aEq - 1; 0 <= aC; aC--) mf[aC] = aC, kp[aC] = aC;
		this.resize(!0), aEy = new Uint16Array(aE.ff);
		var aFC = Math.floor(aEi - aEw - aEv - aEp);
		for (aEz = new Array(aE.ff), aEo.font = aEl, aC = aE.ff - 1; 0 <= aC; aC--) aEz[aC] = aC + 1 + ".", ah.a2u[aC] = bD.p4.a7U(ah.a58[aC], aEl, aFC), aEy[aC] = Math.floor(aEo.measureText(ah.a2u[aC]).width);
		aFD()
	}, this.resize = function(dt) {
		if (aCe = a1.a2.iv() ? (aEi = Math.floor(.335 * i.iw), Math.floor(aEm * aEi / 8)) : (aEi = Math.floor(.27 * i.iw), Math.floor(aEm * aEi / 10)), aEi = Math.floor(.97 * aEi), (aEn = document.createElement("canvas")).width = aEi, aEn
			.height = aCe, aEo = aEn.getContext("2d", {
				alpha: !0
			}), aEr = .025 * aEi, aEk = .16 * aEi, aEs = 0 * aEi, aEt = Math.floor(.45 * aEr + aEk), aEu = (aCe - aEk - 2 * aEr - aEs) / aEm,
			aEn.height = aCe += aEu, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEu * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCe - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEi,
			aEj = bD.t6.t9(1, Math.floor(.55 * aEk)), aF9 = Math.floor((a1.a2.iv() ? .67 : .72) * aEu), aEl = bD.t6.t9(0, aF9), aEo.font = aEl, aEv = Math.floor(.04 * aEi), aEw = Math.floor((a1.a2.iv() ? .195 : .18) * aEi), aEp = Math.floor(aEo
				.measureText("00920600").width), aEo.font = aEj, aEx = aEi - aEv, !dt) {
			aEo.font = aEl;
			for (var aC = aE.ff - 1; 0 <= aC; aC--) aEy[aC] = Math.floor(aEo.measureText(ah.a2u[aC]).width);
			aFD()
		}
		aFB = bD.p4.a7U(L(128), aEj, .96 * aEi)
	}, this.aEa = function() {
		return aEi
	}, this.nS = function(c2, aFE) {
		(aFE || aF2 && (c2 || bi.l1() % aFA == 0)) && (aF2 = !1, aFD())
	}, this.en = function() {
		! function() {
			for (var g1 = aEq - 1; 0 <= g1; g1--) 0 === ah.ng[mf[g1]] && ! function(g1) {
				var aFU = mf[g1];
				aEq--;
				for (var aC = g1; aC < aEq; aC++) mf[aC] = mf[aC + 1], kp[mf[aC]] = aC;
				mf[aEq] = aFU, kp[mf[aEq]] = aEq
			}(g1)
		}();
		for (var aFS, oP = aEq - 1, g1 = 0; g1 < oP; g1++) ah.hW[mf[g1]] < ah.hW[mf[g1 + 1]] && (aFS = mf[g1], mf[g1] = mf[g1 + 1], mf[g1 + 1] = aFS, kp[mf[g1]] = g1, kp[mf[g1 + 1]] = g1 + 1);
		! function() {
			for (var ej = aF2, hH = (aF2 = !0, kp[aE.fS] >= aEm - 1 ? aEm - 2 : aEm - 1), aC = hH; 0 <= aC; aC--)
				if (aF0[aC] !== mf[aC] || aF1[aC] !== ah.hW[mf[aC]]) return;
			(hH != aEm - 2 || aF0[aEm] === kp[aE.fS] && aF1[aEm] === ah.hW[aE.fS]) && (aF2 = ej)
		}();
		for (var aC = aEm - 1; 0 <= aC; aC--) aF0[aC] = mf[aC], aF1[aC] = ah.hW[mf[aC]];
		aF0[aEm] = kp[aE.fS], aF1[aEm] = ah.hW[aE.fS];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hw = function(fp, fr) {
		if (a3O(fp, fr)) {
			if (__fx.utils.isPointInRectangle(fp, fr, bf.gap + 12, bf.gap + 12, aEt - 22, aEt - 22)) __fx.playerList.display(ah.a58);
			else {
				if (fr - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fp - bf.gap);
				fp = aFW(fr);
				0 <= fp ? (aF4 = bi.ei, aF5 = !0, aF6 = aF7 = fp, bM.a6a() && (fp = aDP(-1, aF7, aEm), aF3 !== (fp = fp === aEm ? -1 : fp)) && (aF3 = fp, aFD(), bi.e0 = !0)) : (aF8 && (aF8 = !1, aFD(), bi.e0 = !0), u.v(10, 0, new aFX({
					aFY: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aFD(), bi.e0 = !0
	};

	function aFW(fr) {
		return (fr -= bf.gap + aEt) < 0 ? Math.floor(fr / aEu) - 1 : fr < (aEm - 1) * aEu ? Math.floor(fr / aEu) : fr < aCe - aEt ? aEm - 1 : (fr -= aCe - aEt, aEm + Math.floor(fr / aEu))
	}

	function a3O(fp, fr) {
		return fp >= bf.gap && fp < bf.gap + aEi && fr >= bf.gap && fr < bf.gap + aCe
	}
	this.a5x = function(fp, fr) {
		var ej, aFV;
		if (__fx.utils.isPointInRectangle(fp, fr, bf.gap + 12, bf.gap + 12, aEt - 22, aEt - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fp, fr, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fp - bf.gap)) return aFV = aFW(fr), fp = a3O(fp, fr), fr = !(!(aFV < 0 && fp) || bM.a6a()), aF5 ? (ej = position, (position = aDP(0, position += aF6 - aFV, aE.ff - aEm)) !== ej ? (aF8 = fr,
			aFV = aDP(-1, aF6 = aFV, aEm), aF3 = aFV = aFV !== aEm && fp ? aFV : -1, aFD(), bi.e0 = !0) : aF8 !== fr && (aF8 = fr, aFD(), bi.e0 = !0), !0) : (aFV = (aFV = aDP(-1, aFV, aEm)) === aEm || !fp || bM.a6a() ? -1 : aFV, (aF3 !==
			aFV || aF8 !== fr) && (aF3 = aFV, aF8 = fr, aFD(), bi.e0 = !0))
	}, this.a6M = function(fp, fr) {
		if (!aF5) return !1;
		aF5 = !1;
		var aFV = aFW(fr);
		var isEmptySpace = false;
		return bM.a6a() && -1 !== aF3 && (aF3 = -1, aFD(), bi.e0 = !0), bi.ei - aF4 < 350 && aF7 === aFV && -1 !== (aFV = (aFV = aDP(-1, aFV, aEm)) !== aEm && a3O(fp, fr) ? aFV : -1) && (fp = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aFV + position] === undefined, __fx.leaderboardFilter.rivalsData[aFV + position]?.representativeId ?? aE.fS) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mf[__fx.leaderboardFilter.filteredLeaderboard[aFV + position] ?? (isEmptySpace = true, kp[aE.fS])]) : mf[aFV + position]),
			aFV === aEm - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kp[aE.fS]) >=
			position + aEm - 1 && (fp = aE.fS), !isEmptySpace && aE.ie && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fp, ah.a58, aE.lO), 0 === ah.ng[fp] || isEmptySpace || aE.i7 && !aE.lO && !aE.hr && !aE
			.hs && fp !== aE.fS || aI.o2(fp, 800, !1, 0)), !0
	}, this.a60 = function(fp, fr, deltaY) {
		var aFb;
		return !(aF5 || aE.oA || (aFb = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a3O(fp, fr)) || (fp = (fp = aDP(-1, aFW(fr), aEm)) === aEm || bM.a6a() ? -1 : fp, 0 < deltaY ? position < aE.ff - aEm && (position += Math.min(aE.ff - aEm -
			position, aFb), aF3 = fp, aFD(), bi.e0 = !0) : 0 < position && (position -= Math.min(position, aFb), aF3 = fp, aFD(), bi.e0 = !0), 0))
	}, this.z1 = function() {
		z2.drawImage(aEn, bf.gap, bf.gap)
	}
}

function cV() {
	var canvas, p4, fp, fr, aEK, aFc, gap, aFd, fontSize, aFe, aFf, aFg, aFh, aFi, aFj, aFk, aFl, aFm;

	function aFq() {
		p4.clearRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qK, p4.fillRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qh, fM = 0 < aFk ? aFk : aFh[4] / 1e4, p4.fillRect(0, aX.k - aEK - 1, Math.floor(fM * aX.j), aEK), p4.fillStyle = bE.qN, p4.fillStyle =
			__fx.utils.lineColor(bE.qN), __fx.utils.smoothFrame(p4, aX.j, aX.k) || (p4.fillRect(0, 0, aX.j, 1), p4.fillRect(0, 0, 1, aX.k), p4.fillRect(aX.j - 1, 0, 1, aX.k), p4.fillRect(0, aX.k - 1, aX.j, 1)), p4.fillRect(0, aX.k - aEK - 1, aX.j,
			1), p4.fillStyle = bE.qN;
		for (var fM, aFs, ej = 0, aC = 0; aC < aFg.length; aC++) aFi[aC] ? (bD.t6.textAlign(p4, 0), aFs = Math.floor((aFc - aEK + 2 * aFd) * (aC - ej + 1) / (aFg.length + 1) - .7 * aFd), p4.fillText(aFg[aC], gap, aFs), bD.t6.textAlign(p4, 2), 5 ===
			aC && 0 !== ah.ng[aE.fS] && ah.hk[aE.fS] >= af.kk(aE.fS) ? (p4.fillStyle = bE.rP, p4.fillText(aFo(aC), aX.j - gap, aFs), p4.fillStyle = bE.qN) : p4.fillText(aFo(aC), aX.j - gap, aFs)) : ej++
	}

	function aFo(aC) {
		return aC < 3 ? aFh[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pa.a8a(aFh[aC] / 100, 2) : aC < 7 ? bD.pa.a3i(aFh[aC]) : aC === 7 ? aX.aFt(aFh[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hW, aE.fS) : __fx.utils.getDensity(aE.fS)
	}

	function aFn() {
		ah.hW[aE.fS] !== aFh[6] && (aFh[6] = ah.hW[aE.fS], aFe++)
	}
	this.dt = function() {
		aFk = aFl = 0, (aFf = new Array(8))[0] = L(129), aFf[1] = aE.lO ? L(33) : L(130), aFf[2] = L(131), aFf[3] = L(132), aFf[4] = L(133), aFf[5] = L(134, 0, "Interest"), aFf[6] = L(135), aFf[7] = L(136),
			aFf.push("Max Troops", "Density"), // add aFf
			(aFg = new Array(aFf.length)).fill(""), (aFh = new Array(aFf.length))[0] = aE.lO ? 0 : aE.l4, aFh[1] = aE.lO ? am.la : aE.lQ, aFh[2] = aE.a4R, aFh[3] = 0, aFh[4] = bO.g9(1e4 * ah.hW[0], Math.max(aE.ko, 1)), aFh[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g9(700 * aE.data.iIncomeValue, 64) : bO.g9(700 * aE.data.iIncomeData[aE.fS], 64), aFh[6] = 0, aFn(), aFh[7] = 0, aFj = aFo(6), (aFi = new Array(aFf.length)).fill(!0), aFm = 0, aFm =
			aE.lO ? (aFi[0] = !1, aFi[2] = !1, aFi[3] = !1, 3) : (aFi[3] = !1, 1), aFe = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.iv() ? .1646 : .126) * 1.25 * i.iw), this.k = Math.floor(1.18 * this.j), aEK = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aFd = .04 * this.j, aFc = this.k, this.k -= Math.floor(aFm * (this.k -
			2 * aEK) / aFf.length), fontSize = Math.floor(.7 * (aFc - aEK) / aFf.length);
		var aAE = bD.t6.t9(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(aAE, j) {
				for (var aC = 0; aC < aFg.length; aC++) aFg[aC] = bD.p4.a7U(aFf[aC], aAE, j)
			}((p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = aAE, .575 * this.j), bD.t6.textBaseline(p4, 1), p4.lineWidth = 1, this.a8p(), this.aD3(), aV.aD3(), aFq()
	}, this.aD3 = function() {
		fp = i.j - this.j - bf.gap
	}, this.aFr = function() {
		fr = bf.gap
	}, this.a8p = function() {
		fr = bf.gap + (aV.aCP() && 0 !== ah.ng[aE.fS] && !aE.i7 ? aV.k + bf.gap : 0)
	}, this.nS = function(c2) {
		(c2 || 100 <= aFe) && (aFe = 0, aFq())
	}, this.a9a = function() {
		return aFh[7]
	}, this.aFt = function(value) {
		var lz = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lz) / 1e3);
		return value < 10 ? lz + ":0" + value : lz + ":" + value
	}, this.en = function() {
		var aG4, per;
		aFi[0] && aE.a4S - aE.a4R !== aFh[0] && (aFh[0] = aE.a4S - aE.a4R, aFe++), am.la - aFh[0] !== aFh[1] && (aFh[1] = am.la - aFh[0], aFe++), this.nJ(), (aG4 = af.aG5(aE.fS)) !== aFh[5] && (aFh[5] = aG4, aFe++), aFn(), aFh[7] += bi.aG6, aG4 =
			aFo(7), aFj !== aG4 && (aFj = aG4, aFe += 100), aG4 = aE.ie ? bk.lb() : ah.hW[mf[0]], per = bO.g9(1e4 * aG4, Math.max(aE.ko, 1)), aFh[3] = aG4, aFh[4] !== per && (aFe++, aFh[4] = per), 8 === aE.lM && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h4.hv(aC)) return bU.a43.a4O(), 1;
				return
			}() || aFh[3] < aE.ko || ! function() {
				for (var aC = am.la - 1; 0 <= aC; aC--)
					if (0 < ah.hA[am.lf[aC]].length) return;
				return 1
			}() || bQ.lt.aG3().length || aE.ie && bk.lb(1) < aE.ko || bU.a43.a4O()
	}, this.nJ = function() {
		aFi[2] && aE.a4R !== aFh[2] && (aFh[2] = aE.a4R, aFe += 2 === aE.a4P ? 100 : 1)
	}, this.aG0 = function() {
		return aFh[3] === aE.ko
	}, this.aG7 = function(aC) {
		var vz, aG8, ej;
		return 2 !== aE.a4P && (aC % 2 == 1 && (aW.nS(1, 1), bi.e0 = !0), aC === aE.a8y ? (aFk = 0, aFq(), !1) : (-1 !== aC || 0 !== aFl) && (aG8 = aFk, aFk = aE.hr ? aC / aE.a8y : (ej = performance.now(), 0 <= aC && (vz = ej - 392 * aC, aFl =
			0 === aC || vz < aFl ? vz : aFl), 1 < (aFk = (ej - aFl) / (392 * aE.a8y)) ? 1 : aFk), aFq(), aFk !== aG8))
	}, this.z1 = function() {
		z2.drawImage(canvas, fp, fr)
	}
}

function cW() {
	var iV, aG9, j, k, aD9, aGA, aGB, aCQ, canvas, nt, aGC;

	function a2X() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dt = function() {
		aGC = iV = !1, aD9 = .61, aGA = .07, aGB = .09, nt = aCQ = k = 0
	}, this.resize = function() {
		var p4, o7, es, aGH, aGI, aAJ;
		iV && (j = aGD(j = a1.a2.iv() ? Math.floor(.69 * i.iw) : Math.floor(.5 * i.iw), aAq(i.j - 2 * bf.gap, 10)), j = aGD(j, Math.floor(3.57 * aAq(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), o7 = Math.floor(1 + k / 40), p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qK, p4.fillRect(o7, o7, j - 2 * o7, k - 2 * o7), p4.lineJoin = "bevel", p4.lineWidth = 2 * o7, p4.strokeStyle = bE.qN, p4.strokeRect(o7, o7, j - 2 * o7,
				k - 2 * o7), p4.imageSmoothingEnabled = !1, es = ac.get(aG9), aGH = es.width, aAJ = (1 === aG9 ? .85 : 21 === aG9 ? .666 : .9) * aD9 * k / (aGI = es.height), p4.setTransform(aAJ, 0, 0, aAJ, Math.floor((j - aAJ * aGH) / 2),
				Math.floor((k - aAJ * aGI) / 2)), p4.drawImage(es, 0, 0), p4.setTransform(1, 0, 0, 1, Math.floor(j - aGB * k - aGA * k - o7), Math.floor(o7 + aGA * k)),
			function(p4, fi) {
				p4.lineWidth = Math.floor(1 + k / 80), p4.strokeStyle = bE.qN, p4.beginPath(), p4.moveTo(0, 0), p4.lineTo(fi, fi), p4.moveTo(0, fi), p4.lineTo(fi, 0), p4.stroke()
			}(p4, Math.floor(aGB * k)), p4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gA, aGF, aCv, aGG) {
		iV || aE.hs || aGG && aGC || (aG9 = aCv ? 21 : gA ? 1 : 2, iV = aGC = !0, this.resize(), aM.uW(), aS.aCq(), nt = bi.ei, aCQ = aGF ? 1 : 0)
	}, this.en = function() {
		!iV || 1 <= aCQ || (aCQ = 1 < (aCQ += 5e-4 * (bi.ei - nt)) ? 1 : aCQ, nt = bi.ei, bi.e0 = !0)
	}, this.hw = function(fp, fr) {
		return !(!iV || aCQ <= 0 || (fp -= Math.floor((i.j - j) / 2), fr -= a2X(), fp < 0) || fr < 0 || j < fp || k < fr || (j - k / 3 < fp && fr < k / 3 && (iV = !1, bi.e0 = !0), 0))
	}, this.z1 = function() {
		!iV || aCQ <= 0 || (z2.globalAlpha = aCQ, z2.drawImage(canvas, Math.floor((i.j - j) / 2), a2X()), z2.globalAlpha = 1)
	}
}

function dX() {
	var aGK, aGL = new Uint8Array(5),
		aGM = new Uint8Array(5);
	this.aGN = new aGO, this.dt = function() {
		for (var gA = bm.buffer.data[119].value, aC = 0; aC < aGL.length; aC++) aGL[aC] = (gA >> 2 * aC) % 4
	}, this.a9B = function() {
		aGK = [L(137), "", L(138, [ba.aGP[28]]), L(139, [ba.aGP[26]]), L(140, [ba.aGP[0]])], this.aGN.dt()
	}, this.en = function() {
		this.aGN.en()
	}, this.a9x = function(id) {
		1 < id && bM.u0() || ! function(eR) {
			if (3 === aGL[eR] || 1 === aGM[eR]) return;
			if (aGM[eR] = 1, !(Math.random() < .6)) {
				aGL[eR]++;
				for (var gA = 0, aC = 0; aC < aGL.length; aC++) gA += aGL[aC] << 2 * aC;
				bm.rt.pz(119, gA)
			}
			return 1
		}(id) || aO.aAw(aGK[id])
	}
}

function aGO() {
	var aGR;
	this.dt = function() {
		aGR = !1
	}, this.en = function() {
		var hG;
		if (function() {
				if (!aGR) {
					if (bi.l1() % 30 != 9) return;
					if (!bD.h4.mb(90)) return;
					aGR = !0
				}
				return 1
			}() && (! function() {
				var q3 = aO.aBJ(956);
				if (q3) {
					if (bD.h4.m2(q3.player)) return 1;
					aO.aBI(956, 0)
				}
				return
			}() && (-1 === (hG = (aE.ie ? function() {
				var id = bk.ld(),
					fi = am.la;
				if (bj.lR[id])
					for (var x6 = am.lf, fg = bj.fg, aC = 0; aC < fi; aC++) {
						var hG = x6[aC];
						if (fg[hG] !== id) return hG
					} else if (1 < fi) return mf[fi - 1];
				return -1
			} : function() {
				for (var aGZ = am.la, ly = am.lf, aGa = kp, aC = 0; aC < aGZ; aC++) {
					var hG = ly[aC];
					if (0 !== aGa[hG]) return hG
				}
				return -1
			})()) ? ! function() {
				var q3 = aO.aBJ(957);
				if (q3 && q3.aAm) {
					if (ad.fZ(q3.aAm.fU << 2)) return 1;
					aO.aBI(957, 0)
				}
				return
			}() : (aO.a2t(0, L(141, [ah.a2u[hG]]), 956, hG, bE.qN, bE.qK, -1, !0), 0)))) {
			var fi = ap.ji.mE;
			if (0 !== fi)
				for (var buffer = ap.ji.buffer, aC = 0; aC < fi; aC++) {
					var fU = buffer[aC];
					if (ad.fZ(fU << 2)) return void aO.a2t(0, L(142, [bP.fq(fU), bP.fs(fU)]), 957, 0, bE.qN, bE.qK, -1, !0, void 0, {
						g1: 1,
						fU: fU
					})
				}
		}
	}
}

function dY() {
	this.aGb = new aGc, this.dt = function() {
		this.aGb.resize()
	}
}

function aGc() {
	this.resize = function() {
		var aC, aGd = document.head.querySelector("style#ss");
		if (aGd)
			for (aC = aGd.sheet.cssRules.length - 1; 0 <= aC; aC--) aGd.sheet.deleteRule(0);
		else(aGd = document.createElement("style")).id = "ss", document.head.appendChild(aGd);
		var aDG = "::-webkit-scrollbar",
			aGe = bD.t6.th(bf.vE),
			ih = bD.t6.th(Math.max(bD.t6.t7(.012), 8));
		try {
			aGd.sheet.insertRule(aDG + "{width:" + ih + ";height:" + ih + ";}", aGd.sheet.cssRules.length), aGd.sheet.insertRule(aDG + "-thumb{background-color:white;}", aGd.sheet.cssRules.length), aGd.sheet.insertRule(aDG +
				"-track{background:" + bE.qJ + ";}", aGd.sheet.cssRules.length), aGd.sheet.insertRule(aDG + "-track:horizontal{border-top:" + aGe + " solid white;}", aGd.sheet.cssRules.length), aGd.sheet.insertRule(aDG +
				"-track:vertical{border-left:" + aGe + " solid white;}", aGd.sheet.cssRules.length), aGd.sheet.insertRule(aDG + "-button{display:none;}", aGd.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aGd.sheet.cssRules.length - 1; 0 <= aC; aC--) aGd.sheet.deleteRule(0)
		}
	}
}

function dr() {
	this.data = new aGf, this.aGg = new aGh
}

function aGf() {
	var aGi = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGi[id]
	}
}

function uQ(id) {
	this.canvas = document.createElement("canvas");
	var aGj = this.canvas.getContext("2d"),
		aGk = 0;
	this.resize = function(size) {
		var aGl = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.t6.th(size), aGl !== aGk && (aGk = aGl, this.canvas.width = this.canvas.height = aGl, c0.aGg.z1(aGj, c0.data.get(id), aGl))
	}
}

function aGh() {
	this.z1 = function(io, h, size) {
		var id, pW, oJ = size / 100,
			fi = h.length,
			aC = 0;
		for (io.clearRect(0, 0, size, size), io.lineJoin = "round", io.lineCap = "round"; aC < fi;)
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

function dW() {
	this.aGm = !1, this.oX = !1, this.a8t = !1, this.aGn = [0, 0, 0, 0], this.render = function() {
		var o7, o8, oK, oL;
		this.a8t = this.a8t || this.oX, (this.oX || this.aGm && this.a8t) && (o7 = bd.aGo[0], o8 = bd.aGo[1], oK = bd.aGo[2], oL = bd.aGo[3], o7 = o7 < this.aGn[0] ? this.aGn[0] : o7, o8 = o8 < this.aGn[1] ? this.aGn[1] : o8, oK = oK > this.aGn[
				2] ? this.aGn[2] : oK, oL = oL > this.aGn[3] ? this.aGn[3] : oL, this.oX = !1, this.aGm = !1, o7 === this.aGn[0] && o8 === this.aGn[1] && oK === this.aGn[2] && oL === this.aGn[3] ? this.a8u() : o7 <= oK && o8 <= oL && a9D
			.putImageData(a9E, 0, 0, o7, o8, oK - o7 + 1, oL - o8 + 1))
	}, this.a8u = function() {
		this.a8t && this.aGn[2] >= this.aGn[0] && this.aGn[3] >= this.aGn[1] && a9D.putImageData(a9E, 0, 0, this.aGn[0], this.aGn[1], this.aGn[2] - this.aGn[0] + 1, this.aGn[3] - this.aGn[1] + 1), this.a8t = !1
	}, this.a4b = function() {
		this.aGn[2] >= this.aGn[0] && this.aGn[3] >= this.aGn[1] && a9D.putImageData(a9E, 0, 0, this.aGn[0], this.aGn[1], this.aGn[2] - this.aGn[0] + 1, this.aGn[3] - this.aGn[1] + 1), this.a8t = !1
	}, this.dt = function() {
		var fp, fr;
		this.aGm = !1, this.oX = !1, this.a8t = !1, this.aGn[0] = bV.ft, this.aGn[1] = bV.fu, this.aGn[2] = this.aGn[3] = 0;
		loop: for (fp = 1; fp < bV.ft - 1; fp++)
			for (fr = bV.fu - 2; 1 < fr; fr--)
				if (1 === aGp[ad.a24(fp, fr) + 2]) {
					this.aGn[0] = fp;
					break loop
				} loop: for (fr = 1; fr < bV.fu - 1; fr++)
			for (fp = bV.ft - 2; 1 < fp; fp--)
				if (1 === aGp[ad.a24(fp, fr) + 2]) {
					this.aGn[1] = fr;
					break loop
				} loop: for (fp = bV.ft - 2; 0 < fp; fp--)
			for (fr = bV.fu - 2; 1 < fr; fr--)
				if (1 === aGp[ad.a24(fp, fr) + 2]) {
					this.aGn[2] = fp;
					break loop
				} loop: for (fr = bV.fu - 2; 0 < fr; fr--)
			for (fp = bV.ft - 2; 1 < fp; fp--)
				if (1 === aGp[ad.a24(fp, fr) + 2]) {
					this.aGn[3] = fr;
					break loop
				}
	}
}

function L(value, aGq, za, aGr) {
	var pW = "number" == typeof value ? bA.aGs[value] : value;
	if (za && bA.aGt() && (pW = za), !aGq) return aGr ? pW.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pW;
	for (var fi = aGq.length, aC = 0; aC < fi; aC++)
		for (var g1 = 0; g1 < 3; g1++) pW = pW.replace("{" + (10 * g1 + aC) + "}", aGq[aC]);
	return pW
}

function cA() {
	this.data = new aGu;
	var aGv = (new aGw).L84,
		aGy = (this.aGs = aGv, !(this.aGx = "en"));
	this.dt = function() {
		var pW, h;
		aGy = !1, ("en" === (pW = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGs = aGv, bA.aGx = pW, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pW = bm.buffer.data[146].value,
			(h = bm.tp.zm(pW, !1)).length === pW) && !!bD.tg.a75(h) && function(h) {
			for (var fi = h.length, k = 0; k < fi; k++) h[k] = h[k].replace("&#39;", "'");
			var aH4 = bm.tp.zm(fi, !0);
			if (fi !== aH4.length) return !1;
			if (!bD.tg.a75(aH4)) return !1;
			for (var lz = aGv.length, aEB = new Array(lz), aH5 = lz === fi, hB = Math.min(fi, lz), aC = 0; aC < lz; aC++)
				if (aEB[aC] = aGv[aC], aC < fi && aH4[aC] === aEB[aC]) aEB[aC] = h[aC];
				else {
					aH5 = !1;
					for (var g2 = 0; g2 < hB; g2++)
						if (aH4[g2] === aEB[aC]) {
							aEB[aC] = h[g2];
							break
						}
				} return bA.aGs = aEB, bA.aGx = bm.buffer.data[12].value, aH5
		}(h)) || (aGy = !0)
	}, this.dv = function() {
		bj.du(), aF.du(), bh.du(), bg.du(), aP.dt(), br = new eH
	}, this.aGt = function() {
		return this.aGs === aGv || !aGv.length
	}, this.aH6 = function() {
		var aH7;
		return !!aGy && (aGy = !1, 0 !== aGv.length) && (aH7 = bm.buffer.data[12].value, b1.ep.aH8(0, aH7.slice(0, 20)), !0)
	}, this.aH9 = function(h) {
		h.length !== aGv.length ? 8 === u.vd && u.a5e().aHA(30, 0, 1) : (this.aGs = h, this.aGx = bm.buffer.data[12].value, bm.rt.pz(145, this.aGx), bm.rt.pz(146, h.length), bm.tp.zs(h, !1), bm.tp.zs(aGv, !0), 8 === u.vd ? u.a5e().aHA(30) : 0 ===
			ab.a5a() && 5 === u.vd && u.z.aHB())
	}, this.aHC = function() {
		var zv, h = navigator.languages;
		return h && h.length ? (zv = Math.max(bA.data.aHD(h[0]), 0), 1 === h.length ? [zv, zv] : [zv, Math.max(bA.data.aHD(h[1]), 0)]) : [0, 0]
	}
}

function aGu() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aHE = function() {
		for (var aHF = [], h = this.h, fi = h.length, aC = 0; aC < fi; aC++) aHF.push(h[aC]);
		var aHG = bm.buffer.data[12].za;
		for (aC = 0; aC < fi; aC++)
			if (aHF[aC] === aHG) {
				aHF.splice(aC, 1), fi--;
				break
			} aHF.sort(), fi++, aHF.unshift(aHG);
		try {
			if ("undefined" == typeof Intl) return aHF;
			for (aC = 0; aC < fi; aC++) {
				var pW = new Intl.DisplayNames([aHF[aC]], {
					type: "language"
				}).of(aHF[aC]);
				pW !== aHF[aC] && (aHF[aC] = aHF[aC] + ": " + pW)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aHF
	}, this.aHI = function(aHJ) {
		for (var pW = bm.buffer.data[12].value, fi = aHJ.length, aC = 0; aC < fi; aC++)
			if (pW === aHJ[aC].split(":")[0]) return aC;
		return 0
	}, this.aHD = function(aHK) {
		if (aHK && !(aHK.length < 2)) {
			aHK = aHK.split("-")[0].toLowerCase();
			for (var h = this.h, fi = h.length, aC = 0; aC < fi; aC++)
				if (aHK === h[aC]) return aC
		}
		return -1
	}
}

function aGw() {
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
		"South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant",
		"Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer",
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

function dy() {
	var fp, fr, k, wW, aHL, aHM, aHN, aHO, aHP, j, a7i, aHQ;
	this.iV = !1, this.dt = function(pW, aHR) {
		if (1 === a1.id && 13 <= a1.eA && a1.eA < 18) return aHR ? void(a7i = pW) : a7i !== pW ? void 0 : void a1.zk.saveString(200, pW);
		aHR && (a7i = pW, (aHQ = document.createElement("a")).appendChild(document.createTextNode(a7i)), this.iV = !0, aHQ.title = a7i, aHQ.target = "_blank", aHQ.href = a7i, aHQ.style.textAlign = "center", aHQ.style.color = bE.qN, aHQ.style
			.position = "absolute", aHQ.style.padding = "0px", aHQ.style.margin = "0px", this.resize(), document.body.appendChild(aHQ), bi.e0 = !0)
	}, this.uW = function() {
		return !(!this.iV || (u.removeChild(document.body, aHQ), this.iV = !1))
	}, this.hw = function(j3, j4) {
		return !!this.iV && ((j3 < fp || j4 < fr || fp + j < j3 || fr + k < j4 || fp + j - wW < j3 && j4 < fr + wW) && (bi.e0 = !0, this.iV = !1, u.removeChild(document.body, aHQ)), !0)
	}, this.resize = function() {
		var aAE, aHS;
		this.iV && (aHO = Math.floor(.8 * (a1.a2.iv() ? i.j > i.k ? .6 : .55 : .4) * i.iw), wW = Math.floor(.15 * aHO), aHL = Math.floor(.35 * wW), aHM = Math.floor(.5 * wW), aHN = Math.floor(2.5 * aHM), k = wW + aHL + 3 * aHM, aAE = bD.t6.t9(1,
			aHL / i.l), aHP = Math.floor(i.l * aR.measureText(a7i, aAE)), aHS = j = (aHO < aHP ? aHP : aHO) + 2 * aHN, j = Math.min(j, i.j - 2 * (a1.a2.iv() ? 2 : 1) * bf.gap), aAE = bD.t6.t9(1, j / aHS * aHL / i.l), aHP = Math.floor(i
			.l * aR.measureText(a7i, aAE)), fp = Math.floor((i.j - j) / 2), fr = Math.floor((i.k - k) / 2), aHQ.style.font = aAE, aHQ.style.top = Math.floor((fr + 1.4 * aHM + wW) / i.l) + "px", aHQ.style.left = Math.floor((fp + (j -
			aHP) / 2) / i.l) + "px")
	}, this.z1 = function() {
		this.iV && (z2.fillStyle = bE.qK, z2.fillRect(fp, fr + wW, j, k - wW), z2.fillStyle = bE.rc, z2.fillRect(fp, fr, j, wW), z2.fillStyle = bE.qN, z2.lineWidth = bf.a3P, z2.strokeStyle = bE.qN, z2.strokeRect(fp, fr, j, k), z2.fillRect(fp,
			fr + wW, j, bf.a3P), z2.font = bD.t6.t9(1, .48 * wW), bD.t6.textAlign(z2, 1), bD.t6.textBaseline(z2, 1), z2.fillText(L(143), Math.floor(fp + (j - .5 * wW) / 2), Math.floor(fr + .55 * wW)), aN.aAQ(Math.floor(fp + j - .8 * wW),
			Math.floor(fr + .25 * wW), Math.floor(.5 * wW)), z2.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dx() {
	var gap, aFf, fp = [0, 0, 0, 0, 0],
		fr = [0, 0, 0, 0, 0],
		oJ = [1, 1, 1, 1, 1],
		gA = [!0, !0, !0, !1, !1],
		es = (this.gV = [!0, !0, !0, !1, !1], null);
	this.aHT = function(a7G, aHU) {
		es = a7G, gA = aHU, aFf = [bN.aHV, bN.a5W, bN.aHW, bN.aHW, bN.aHX], this.dt()
	}, this.dt = function() {
		if (ac.w3()) {
			var aC, vi = Math.floor((a1.a2.iv() ? .261 : .195) * i.iw),
				vj = Math.floor(.9 * vi),
				aD9 = Math.floor(.17 * vj);
			if (gap = a1.a2.iv() ? 2 * bf.gap : bf.gap, oJ[0] = vi / es[0].width, oJ[1] = vj / es[1].width, oJ[2] = aD9 / es[2].height, oJ[3] = aD9 / es[3].height, oJ[4] = aD9 / es[4].height, oJ[2] *= 1.7, oJ[3] *= 1.07, fp[0] = gap, fp[1] = gap,
				fp[2] = gap, fp[3] = gap, fp[4] = Math.floor(2 * gap + oJ[3] * es[3].width), fr[0] = gap, fr[1] = fr[0] + gap + oJ[0] * es[0].height, fr[2] = fr[1] + gap + oJ[1] * es[1].height, fr[3] = fr[2] + gap + oJ[2] * es[2].height, fr[4] =
				fr[3], !gA[0])
				for (aC = 0; aC < 5; aC++) fr[aC] -= oJ[0] * es[0].height + gap;
			if (!gA[1])
				for (aC = 2; aC < 5; aC++) fr[aC] -= oJ[1] * es[1].height + gap
		}
	}, this.iV = function() {
		return !(7 === ab.a5a() && a1.a2.iv())
	}, this.hw = function(j3, j4) {
		if (es && this.iV())
			for (var aC = gA.length - 1; 0 <= aC; aC--)
				if (gA[aC] && this.gV[aC] && fp[aC] < j3 && fr[aC] < j4 && j3 < fp[aC] + oJ[aC] * es[aC].width && j4 < fr[aC] + oJ[aC] * es[aC].height) return u.v(9, u.vd, new aHY(L(144), bD.t6.a7h(aFf[aC]))), !0;
		return !1
	}, this.z1 = function() {
		if (es && this.iV()) {
			var aC;
			for (z2.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) gA[aC] && this.gV[aC] && (z2.setTransform(oJ[aC], 0, 0, oJ[aC], fp[aC], fr[aC]), z2.drawImage(es[aC], 0, 0));
			z2.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dh() {
	this.aHZ = 0, this.pk = null, this.pm = null, this.tV = null, this.lt = null, this.z = null, this.yF = null, this.xj = null, this.message = null, this.pY = null, this.q5 = null, this.aHa = null, this.aHb = new aHc, this.xH = new aHd, this.fF = 0,
		this.aE2 = 0, this.dt = function() {
			this.aE2 = bi.ei, this.aHZ = bJ.f9.fA(bm.buffer.data[105].value, 5), this.pm = new aHe, this.tV = new aHf, this.lt = new aHg, this.z = new aHh, this.yF = new aHi, this.xj = new aHj, this.message = new aHk, this.pY = new aHl, this.q5 =
				new aHm, this.aHa = new aHn, bt.dt(), this.fF = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fD()
		}, this.y4 = function() {
			this.xH.aHo(), this.q5 && this.q5.y4(), this.pk = null, this.pm = null, this.tV = null, this.lt = null, this.z = null, this.yF = null, this.xj = null, this.message = null, this.pY = null, this.q5 = null, this.aHa = null, this.fF = 0, bt
				.y4(), a1.a2.setState(0)
		}
}

function aHe() {
	function aHq() {
		bq.z.aHr += 29 === u.vd && 1 === bq.z.aHs
	}

	function aIM(self, kK, hB) {
		for (var h = self.x6.splice(kK, hB), aC = 0; aC < h.length; aC++) aIC(self, h[aC]);
		aHq()
	}

	function aIC(self, hG) {
		var self = self.xl,
			p9 = self.pop();
		p9 !== hG && ((self[hG.aHy] = p9).aHy = hG.aHy)
	}
	this.x6 = [], this.xl = [], this.aHp = [], this.aHt = function(pe, username, xu, a8F, aHu, elo, color, a0G, aHv, code, xo, xr) {
		username = this.aHx(pe, username, xu, a8F, aHu, elo, color, a0G, aHv, code);
		username.xo = xo, username.xr = xr, this.x6.push(username), username.aHy = this.xl.length, this.xl.push(username), bq.aHZ === pe && (bq.pk = username), bq.aHa.aHz(pe) && (username.xw = 1), bq.q5.aI0(pe), aHq()
	}, this.aHx = function(pe, username, xu, a8F, aHu, elo, color, a0G, aHv, code) {
		return {
			pe: pe,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f9.a3i(pe, 2),
			aI1: __fx.nameFilter.filter(username),
			xu: xu,
			a8F: a8F,
			aHu: aHu,
			elo: elo,
			color: color,
			a0G: a0G,
			aHv: aHv
		}
	}, this.aI2 = function(eR, xu, a8F, aHu, elo, a0G, color) {
		eR = this.x6[eR];
		eR.xu = xu, eR.a8F = a8F, eR.aHu = aHu, eR.elo = elo, eR.a0G = a0G, eR.color = color, bq.q5.aI0(eR.pe), aHq()
	}, this.aI3 = function(eR, code) {
		eR = this.x6[eR];
		1 === code && (eR.username = eR.aI1), bq.q5.aI0(eR.pe), aHq()
	}, this.aI4 = function(eR, aI5) {
		var eR = this.x6[eR],
			aI6 = eR.username,
			aDL = eR.username !== eR.aI1,
			aI7 = "Redacted " + bI.f9.a3i(eR.pe, 2);
		eR.aI1 = aI5 ? "[" + bD.pa.po(eR.aI1) + "] " + aI7 : aI7, aDL || (eR.username = eR.aI1), aI6.indexOf("Redacted") < 0 && (eR.aI8 = aI6), bq.q5.aI0(eR.pe), aHq()
	}, this.aI9 = function(eR, username) {
		var eR = this.x6[eR],
			aDL = eR.username !== eR.aI1;
		eR.aI1 = username, aDL || (eR.username = username), eR.pe === bq.aHZ && bq.lt.aIA(username), bq.q5.aI0(eR.pe), aHq()
	}, this.aIB = function(eR) {
		eR = this.x6.splice(eR, 1)[0];
		aIC(this, eR), this.aHp.push(eR), 1e3 < this.aHp.length && this.aHp.shift(), aHq()
	}, this.aID = function(eR, target, xo, xr) {
		var x6 = this.x6,
			eR = x6.splice(eR, 1)[0];
		x6.splice(target, 0, eR), !eR.xo && xo && bq.aHa.join(eR), eR.xo = xo, eR.xr = xr, aHq()
	}, this.aIE = function(xo) {
		for (var x6 = this.x6, fi = x6.length, aC = 0; aC < fi; aC++)
			if (x6[aC].xo === xo) return aC;
		return fi
	}, this.aIF = function(kK) {
		for (var x6 = this.x6, fi = x6.length, xo = kK < fi ? x6[kK].xo : 0, aC = kK; aC < fi && x6[aC].xo === xo && !x6[aC].xr;) aC++;
		return aC
	}, this.aIG = function(kK, aIH, aII) {
		for (var aIJ = this.aIF(kK), h = [], aC = 0; aC < aIH; aC++) aII && 511 === aII[aC] || h.push(this.x6[aIJ + aC]);
		return h
	}, this.aIK = function(kK, hB, aIH, aII) {
		for (var aIL = this.aIG(kK, aIH, aII), aC = aIL.length - 1; 0 <= aC; aC--) aIM(this, this.x6.indexOf(aIL[aC], kK), 1);
		aIM(this, kK, hB)
	}, this.aIN = function(xo) {
		for (var x6 = this.x6, aIO = 0; aIO < x6.length && x6[aIO].xo === xo;) aIO++;
		for (var left = x6.splice(0, aIO), aC = 0; aC < aIO; aC++) left[aC].xo = 0, left[aC].xr = 0, x6.push(left[aC]);
		aHq()
	}, this.pn = function(pe) {
		for (var x6 = this.x6, lz = x6.length, g1 = 0; g1 < lz; g1++)
			if (pe === x6[g1].pe) return x6[g1];
		return null
	}
}

function aHf() {
	this.tV = [], this.xK = 0, this.xL = 0, this.aIP = 0;
	var aIR = this.aIQ = 0,
		aIS = 0;
	this.aIT = function() {
		for (var self, fi = bK.sW(4), tV = new Array(fi), aC = 0; aC < fi; aC++) tV[aC] = {
			id: bK.sW(13),
			xR: bK.sW(12),
			hB: bK.sW(16),
			aIH: bK.sW(16),
			nb: bK.sW(10),
			fO: bK.sW(6),
			mapSeed: bK.sW(14),
			x4: bK.sW(4),
			xV: bK.sW(1)
		};
		this.tV = tV, __fx.lobbyReminders.setRooms(this.tV), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aIV({
				id: 7,
				s: text
			})
		}), !(self = this).xK || 0 <= self.xn(self.xK) || (self.xK = 0, self.xL = 0, bq.message.aIV({
			id: 7,
			s: L(145)
		}))
	}, this.xn = function(id) {
		for (var tV = this.tV, aC = tV.length - 1; 0 <= aC; aC--)
			if (tV[aC].id === id) return aC;
		return -1
	}, this.aIW = function() {
		return 1 === aIR
	}, this.aIX = function(id) {
		return 0 < id && 0 < this.tV.length && this.tV[0].id === id
	}, this.aIY = function() {
		return this.aIX(this.xK)
	}, this.click = function(eR, xr) {
		eR = this.tV[eR];
		xr = xr ? 1 : 0, eR && (eR.id === this.xK && xr === this.xL ? this.select(0, 0) : this.select(eR.id, xr))
	}, this.select = function(id, xr) {
		this.xK = id, this.xL = id ? xr : 0, this.aIP = this.aIQ = 0, aIR = 1, aIS++, b1.aIZ.aIa(4, {
			xo: id,
			xr: this.xL
		}), u.a9b(29).aIb()
	}, this.aIc = function(id, xr) {
		0 === (aIS = Math.max(aIS - 1, 0)) && (this.xK = id, this.xL = xr)
	}, this.zQ = function(pe, x4) {
		this.aIP = x4 ? pe : 0, this.aIQ = x4, aIR = 1, b1.aIZ.aIa(6, {
			x4: x4,
			pe: pe
		})
	}, this.aId = function(pe, x4) {
		return this.aIQ === x4 && this.aIP === pe
	}, this.xM = function(xJ) {
		return xJ.hB - xJ.aIH
	}, this.xP = function(x4) {
		return x4 < 7 ? x4 + 2 + " Teams" : 7 === x4 ? "Battle Royale" : 8 === x4 ? "1v1" : 9 === x4 ? "Zombie" : "No Full-Sending"
	}, this.xS = function(xJ) {
		return xJ.nb < (9 === xJ.x4 ? 333 : 512)
	}, this.xQ = function(xR) {
		var aBm = xR % 60;
		return bO.g9(xR, 60) + ":" + (aBm < 10 ? "0" : "") + aBm
	}
}

function aHn() {
	var aIe = [],
		aIf = [],
		aIg = 0;

	function aIh(h, aBL, aIk, aIl) {
		var fi = h.length;
		if (0 === fi) return "";
		var pW = "@" + h[0];
		if (1 === fi) return pW + aBL + aIl;
		for (var aC = 1; aC < fi - 1; aC++) pW += ", @" + h[aC];
		return pW + " and @" + h[fi - 1] + aIk + aIl
	}
	this.dt = function() {
		var pW = aIh(aIf, " is", " are", " in the lobby.");
		pW.length && bq.message.aIV({
			id: 7,
			s: pW
		}), aIe = [], aIf = [], aIg = 0
	}, this.aHz = function(aIi) {
		return bq.aHZ !== aIi && (aIi = bI.f9.a3i(aIi, 5), !!bm.zQ.xw(aIi)) && (aIf.push(aIi), !0)
	}, this.join = function(player) {
		bq.aHZ !== player.pe && (player = bI.f9.a3i(player.pe, 5), bm.zQ.xw(player)) && aIe.push(player)
	}, this.aIj = function() {
		var aBL, aIk;
		++aIg < 3 || (aIg = 0, aBL = aIh(aIf, "", "", " entered the lobby!"), (aBL = (aIk = aIh(aIe, "", "", " joined a game!")).length ? aBL.length ? aBL + " " + aIk : aIk : aBL).length && bq.message.aIV({
			id: 7,
			s: aBL
		}), aIe = [], aIf = [])
	}
}

function aHc() {
	this.e1 = function(kK, aIm, aIH) {
		var pm, aHb = bq.z.aHb,
			aIn = bq.pm.x6.slice(kK, kK + aIm),
			kK = bq.pm.aIG(kK, aIH, aHb.aII),
			aIH = function(aIn) {
				if (__fx.customLobby.isActive()) return bq.pk ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pk && bq.tV.aIW())
					for (var fi = aIn.length, pe = bq.pk.pe, aC = 0; aC < fi; aC++)
						if (aIn[aC].pe === pe) return aC;
				return -1
			}(aIn.concat(kK));
		if (-1 === aIH) return (pm = bq.pm).aHp = pm.aHp.concat(aIn, kK), 1e3 < bq.pm.aHp.length && bq.pm.aHp.splice(0, bq.pm.aHp.length - 1e3), bq.z.aHr += 29 === u.vd && 1 === bq.z.aHs, !1;
		if (aHb.a95 = aIm <= aIH ? 1 : 0, aHb.a9O = kK.length, 8 === aHb.x4) {
			for (var aIr = function(aII) {
					for (var h = [], aC = 0; aC < aII.length; aC++) 511 !== aII[aC] && h.push(aII[aC]);
					return h
				}(aHb.aII), ib = aIH - aIm, aIt = aHb.a95 ? aIr[ib] : aIH >> 1, aIu = 0, aC = aHb.a9O = 0; aC < aIr.length; aC++) aIr[aC] === aIt && (aIu += aC < ib ? 1 : 0, aHb.a9O++);
			aHb.aIv = (aHb.aIv + aIt) % 1024, 0 <= aHb.a4s && (aHb.a4s += aIt), aIH = aHb.a95 ? 2 + aIu : aIH % 2, aIn = aIn.slice(2 * aIt, 2 * aIt + 2)
		}
		return aHb.aIw = aHb.a95 ? function(aIn) {
			var tV = bq.tV;
			if (tV.aIQ)
				for (var aC = 0; aC < aIn.length; aC++)
					if (aIn[aC].pe === tV.aIP) return aC;
			return 0
		}(aIn) : 0, ay.dt(aHb, aIn, aIH), !0
	}, this.aIy = function(aHb, aIn, aIp) {
		var fl = aE.data = new a8z,
			aJ1 = (fl.spawningSeed = aHb.spawningSeed, aHb.x4 < 7 ? (fl.gameMode = 1, fl.numberTeams = aHb.x4 + 2) : 9 === aHb.x4 ? (fl.gameMode = fl.isZombieMode = 1, fl.numberTeams = 2) : (fl.gameMode = 0, fl.battleRoyaleMode = 7 === aHb.x4 ?
					0 : 10 === aHb.x4 ? 1 : 2), fl.selectedPlayer = aHb.a95 ? aHb.aIw : aIp, fl.a95 = aHb.a95, fl.a9O = aHb.a9O, fl.isContest = aHb.xV, fl.mapType = bV.aIz(aHb.fO) ? 0 : 1, bV.aJ0(fl, aHb.fO), fl.mapSeed = aHb.mapSeed, fl
				.humanCount = aIn.length);
		fl.selectableSpawn = 1 === fl.gameMode || aJ1 < 100, fl.colorsData = new Uint32Array(aJ1), fl.playerNamesData = new Array(aJ1), fl.a9P = new Uint32Array(aJ1);
		for (var aC = 0; aC < aJ1; aC++) fl.colorsData[aC] = aIn[aC].color, fl.playerNamesData[aC] = aIn[aC].username, fl.a9P[aC] = aIn[aC].pe;
		if (2 === fl.battleRoyaleMode)
			for (fl.elo = new Uint16Array(aJ1), aC = 0; aC < aJ1; aC++) fl.elo[aC] = aIn[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aHb.fO, fl.mapSeed), aE.a94(), aE.a4s = aHb.a4s, aE.a92 = 2
	}
}

function aHg() {
	var eI = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aJ2 = [bE.qb, bE.qb, bE.qc, bE.r7, bE.r8, bE.qs, bE.rD, bE.qc, bE.re, bE.rS, bE.rb, bE.qE],
		aJ3 = [
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
		aJ4 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aJJ(ps, pe, aJL) {
		for (var g2 = ps.length - 1; 0 <= g2; g2--) {
			var q3 = ps[g2];
			0 === q3.id && q3.pe === pe && (q3.s = "[Redacted Message]", aJL) && (q3.aJM = 1)
		}
	}
	this.px = function(pc) {
		var aJ5, a5B;
		return pc.id < 5 && (aJ5 = "@" + bI.f9.a3i(pc.pe, 5)), 0 === pc.id ? aJ5 + ": " + pc.s : 1 === pc.id ? (a5B = "@" + bI.f9.a3i(pc.target, 5), 0 === pc.aJ6 ? 32768 <= pc.value ? aJ5 + " voted with " + (pc.value - 32768 + 1) +
				" gold against " + a5B + " to weaken the latter's admin position. 📉" : aJ5 + " voted with " + (pc.value + 1) + " gold for " + a5B + " to strengthen the latter's admin position. 💪" : 1 === pc.aJ6 ? aJ5 + " sent " + Math.floor(pc
					.value / 100) + " 🧈 gold to " + a5B + "." : aJ5 + " voted with " + (pc.value / 10).toFixed(1) + " points for " + a5B + " to acknowledge the latter as clan leader. ✅") : 2 === pc.id ? 0 === pc.aJ6 ? aJ5 +
			" was 🔇 muted for 1 Hour." : 1 === pc.aJ6 ? "The username of " + aJ5 + " was ✂️ redacted. Duration: 1 Day" : aJ5 + " 👢 was kicked." : 3 === pc.id ? aJ5 + br.eU(pc.aJ6, br.eO[pc.aJ6][pc.value]) + "@" + bI.f9.a3i(pc.target, 5) + br
			.eW(pc.aJ6, br.eO[pc.aJ6][pc.value]) : 4 === pc.id ? (a5B = "@" + bI.f9.a3i(pc.target, 5), 1 === pc.aJ6 ? "✅ " + aJ5 + " vouched for " + a5B + "." + (pc.aJ8 ? " ⚖️ The punishment of " + a5B + " was refunded." : "") : "🚩 " + aJ5 +
				" reported " + a5B + "." + (pc.aJ8 ? " ⚖️ " + a5B + " was punished." : "")) : 5 === pc.id ? aJ4[pc.aJ6] : 6 === pc.id ? "You are about to mention " + pc.value + " player" + (1 === pc.value ? "" : "s") +
			". This action will cost " + (Math.max(pc.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pc.id ? pc.s : void 0
	}, this.pw = function(pc, aJ9) {
		return {
			pc: pc,
			s: aJ9,
			aJA: 0,
			fontSize: 4 === pc.id ? .8 : 1,
			q4: 0,
			aJB: pc.id ? bE.r6 : bE.qN
		}
	}, this.xs = function(player, xq) {
		return (xq ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xt = function(xu) {
		return aJ2[xu]
	}, this.aJC = function(xu, a8F) {
		return xu < 3 || 7 === xu ? aJ3[xu][0] : 4 === xu ? aJ3[xu][a8F < 1 ? 0 : a8F < 10 ? 1 : 2] : aJ3[xu][a8F < 10 ? 0 : 1]
	}, this.aJD = function(a8F) {
		return 0 === a8F
	}, this.xv = function(q3) {
		return !!bq.pk && q3.pe === bq.pk.pe
	}, this.aJE = function(pm, aJF, aJG) {
		var a59 = [];
		loop: for (var aC = aJF; aC < aJG; aC++) {
			var a5A = bD.pa.po(pm[aC].username);
			if (a5A) {
				for (var g2 = a59.length - 1; 0 <= g2; g2--)
					if (a5A === a59[g2].name) {
						a59[g2].hB++;
						continue loop
					} a59.push({
					name: a5A,
					hB: 1
				})
			}
		}
		if (a59.sort(function(g1, g2) {
				return g2.hB - g1.hB
			}), 0 === a59.length) return "";
		for (var pW = a59[0].name + ": " + a59[0].hB, aC = 1; aC < a59.length; aC++) pW += "   " + a59[aC].name + ": " + a59[aC].hB;
		return pW
	}, this.aJH = function(xu, a8F, aHu) {
		return 0 === eI[xu].length ? "Rank: " + (a8F + 1) : eI[xu] + " Rank: " + (a8F + 1) + (3 !== xu && aHu < 100 ? "   " + eI[3] + " Rank: " + (aHu + 1) : "")
	}, this.aJI = function(pe) {
		aJJ(bq.z.ps, pe), aJJ(bq.message.aJK(), pe, 1), bq.q5.aJI(pe)
	}, this.aIA = function(username) {
		var username = this.aJN(username);
		username && (username = "[" + username + "] " + function(username) {
			var fX = username.indexOf("["),
				fm = username.indexOf("]", fX);
			for (; 0 <= fX && fX < fm;) username = username.substring(0, fX) + username.substring(fm + 1), fX = username.indexOf("["), fm = username.indexOf("]", fX);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rt.pz(122, username.trim().slice(0, 20)))
	}, this.aJN = function(username) {
		var fX = username.indexOf("["),
			fm = username.indexOf("]");
		return !(fX < 0 || fm - fX <= 1 || 8 < fm - fX) && (username = username.substring(fX + 1, fm).trim()).length ? username : null
	}
}

function aHj() {
	var uu = 0,
		aJQ = 0,
		aJR = 0,
		aJS = null,
		aJT = null;

	function aJW(q3, aJX, aJY) {
		var pW = q3.username;
		return (pW += "   " + bq.lt.aJH(q3.xu, q3.a8F, q3.aHu)) + function(q3) {
			q3 = q3.a0G;
			if (q3 < 1e3) return "   Gold: " + q3;
			if ((q3 %= 1024) < 1e3) return "   Gold: " + q3 + "k";
			return "   Gold: " + (q3 - 999) + "M"
		}(q3) + ("   IP: " + bI.f9.a3i(q3.aHv, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJY ? aJQ : aJV(q3, aJX)])
	}

	function aJV(q3, aJX) {
		return aJQ = aJX || bq.pm.pn(q3.pe) ? 1 : 0
	}
	this.xk = 0, this.aJU = function() {
		!uu || aJQ === aJV(aJT) && aJR === aJT.a0G || (aJR = aJT.a0G, aJS.show(-1, -1, aJW(aJT, 0, 1), 1, 1, aJT.color))
	}, this.xx = function(e, q3, aJX) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q3, 0, aJX), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xj && bq.xj.uW(1)
		}), this.xk = aJX
	}, this.show = function(fp, fr, q3, v9, aJX) {
		aJS = aJS || new v6, aJR = (aJT = q3).a0G, aJS.show(fp, fr, aJW(q3, aJX), v9, 0, aJT.color), uu = 1
	}, this.uW = function(vF) {
		this.xk = 0, aJS && aJS.uW(vF) && (uu = 0, aJT = null)
	}
}

function aHh() {
	function aJc() {
		var fO, mapSeed;
		u.a9b(29) && (bq.z.aHr && 1 === bq.z.aHs && u.a9b(29).aJe(), bq.z.aHr = 0, u.a9b(29).aJf(), fO = bV.fO, mapSeed = bV.mapSeed, u.a9b(29).aJg(), fO === bV.fO && mapSeed === bV.mapSeed || bq.xH.aJh(), bq.xj.aJU())
	}
	this.wQ = 0, this.aHs = 2, this.aHb = {
		fO: 0,
		mapSeed: 0,
		x4: 0,
		xV: 0,
		spawningSeed: 0,
		a4s: -1,
		a5i: 0,
		aIv: 0,
		aIH: 0,
		aII: null,
		a9O: 0,
		a95: 0,
		aIw: 0
	}, this.ps = [], this.q1 = 300, this.pt = 1048575, this.aHr = 0, this.aJa = [0, 0], this.aJb = function() {
		aJc(), bq.aHa.dt(), __fx.lobbyReminders.check()
	}, this.aIj = function() {
		bq.aHa.aIj(), aJc(), __fx.lobbyReminders.check()
	}, this.aJi = function() {
		0 === this.aHs && u.a9b(29).aJj()
	}
}

function aHd() {
	var aJk = 256,
		aJl = 18,
		aJm = [],
		aJp = 0;

	function ze(key, aJr, fp, fr, xc) {
		var canvas = document.createElement("canvas"),
			p4 = (canvas.width = canvas.height = aJk, canvas.getContext("2d", {
				alpha: !1
			})),
			p4 = (p4.imageSmoothingEnabled = !0, p4.drawImage(aJr, fp, fr, xc, xc, 0, 0, aJk, aJk), {
				key: key,
				canvas: canvas,
				iV: 0
			});
		return aJm.push(p4), aJm.length > aJl && function(aJx) {
			for (var fi = aJm.length, aC = 0; aC < fi; aC++) {
				var hG = aJm[aC];
				if (!hG.iV && hG !== aJx) return hG.canvas.width = hG.canvas.height = 0, aJm.splice(aC, 1)
			}
		}(p4), p4
	}
	this.xI = function(fO, mapSeed) {
		return fO + "_" + (bV.aJq(fO) ? mapSeed : 0)
	}, this.xa = function(fO, mapSeed) {
		for (var key = this.xI(fO, mapSeed), aJr = null, aC = aJm.length - 1; 0 <= aC; aC--) {
			var hG = aJm[aC];
			if (hG.key === key) {
				if (!hG.iV) return hG.iV = 1, aJm.splice(aC, 1), aJm.push(hG), hG.canvas;
				aJr = hG
			}
		}
		return aJr ? ((fO = ze(key, aJr.canvas, 0, 0, aJk)).iV = 1, fO.canvas) : null
	}, this.xb = function(canvas) {
		for (var aC = aJm.length - 1; 0 <= aC; aC--)
			if (aJm[aC].canvas === canvas) {
				aJm[aC].iV = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHo = function() {
		for (var aC = aJm.length - 1; 0 <= aC; aC--) this.xb(aJm[aC].canvas)
	}, this.en = function() {
		if (bq.fF && !(bi.ei < aJp)) {
			for (var self, fO, mapSeed, ej, tV = bq.tV.tV, fi = tV.length, aC = 0; aC < fi; aC++)
				if (! function(key) {
						for (var aC = aJm.length - 1; 0 <= aC; aC--)
							if (aJm[aC].key === key) return 1;
						return
					}(this.xI(tV[aC].fO, tV[aC].mapSeed))) return self = this, fO = tV[aC].fO, mapSeed = tV[aC].mapSeed, ej = void 0, ej = performance.now(),
					function(self, fO, mapSeed) {
						var aJr = bV.aJv(fO, mapSeed),
							xc = Math.min(aJr.width, aJr.height);
						ze(self.xI(fO, mapSeed), aJr, aJr.width - xc >> 1, aJr.height - xc >> 1, xc), aJr !== bV.a0y && (aJr.width = aJr.height = 0)
					}(self, fO, mapSeed), u.a9b(29).aIb(), self = performance.now(), void(aJp = self + Math.max(Math.min(self - ej, 500), 200));
			aJp = bi.ei + 200
		}
	}, this.aJh = function() {
		aJp = performance.now() + 200
	}
}

function aHl() {
	var aJy = 0,
		aJz = "",
		aK0 = 0,
		aK1 = 0,
		aK2 = "";

	function aK5(aJ9) {
		b1.aIZ.aIa(3, aJ9)
	}

	function aK4(s) {
		s = bq.pY.pZ(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aKG(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aK8(s) {
		var aKM = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aKM)
	}
	this.a4T = function(s) {
		var h, aK9, aK3;
		if (aJy) return aJy = 0, "yes" === (aK3 = s.toLowerCase()) || "y" === aK3 ? (aK2 = aK4(aJz), void aK5(aJz)) : (aK2 = "", void bq.message.aIV({
			id: 5,
			aJ6: 7
		}));
		aK2 = aK4(s), !(s.indexOf("@") < 0) && (aK3 = aK8(s)) ? (aJz = s, h = bq.pm.x6.slice(), function(aK7, aK9, s) {
			if (!aK0) return;
			for (var fi = aK9.length, aC = 0; aC < fi; aC++) 2 === aK9[aC].id && (s = s.replace(aK7[aK9[aC].eR], "@" + aK9[aC].gA));
			return aJy = 1, aK5((aJz = s).slice(0, 126) + "|"), 1
		}(aK3, aK9 = function(aK7) {
			for (var aK9 = [], fi = (aK1 = aK0 = 0, aK7.length), aC = 0; aC < fi; aC++) {
				var j = aK7[aC],
					lz = j.length;
				bD.pa.startsWith(j, "@[") ? lz <= 9 && bD.pa.a7k(j, "]") && aK9.push({
					id: 0,
					gA: j.substring(2, lz - 1).toUpperCase()
				}) : 6 === lz && (aK1++, aK9.push({
					id: 1,
					gA: bJ.f9.fA(j.substring(1), 5)
				}))
			}
			return aK9
		}(aK3), s) || (0 === aK9.length || aK3.length === aK1 ? aK5(s) : (function(h, aK9) {
			var lz = aK9.length;
			if (0 === lz) return;
			var fi = h.length;
			loop: for (var aC = fi - 1; 0 <= aC; aC--) {
				for (var g1 = 0; g1 < lz; g1++)
					if (0 === aK9[g1].id) {
						if (aK9[g1].gA === bD.pa.po(h[aC].username)) continue loop
					} else if (1 === aK9[g1].id && aK9[g1].gA === h[aC].pe) continue loop;
				h[aC] = h[--fi], h.pop()
			}
		}(h, aK9), aK3 = h.length, aK2 = "", aJy = 1, bq.message.aIV({
			id: 6,
			value: aK3
		})))) : aK5(s)
	}, this.aKE = function() {
		return aJy
	}, this.aKF = function() {
		return aK2
	}, this.pZ = function(s) {
		var aK7 = aK8(s),
			h = [];
		if (aK7)
			for (var aC = 0; aC < aK7.length; aC++) aKG(aK7[aC]) && h.indexOf(aK7[aC]) < 0 && h.push(aK7[aC]);
		return h
	}, this.aKH = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var a06 = e.selectionStart;
		if (a06 !== e.selectionEnd) return 0;
		var pW = e.value.substring(0, a06),
			lz = pW.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!lz || !aKG(lz[0].substring(0, lz[0].length - 1))) return 0;
		event.preventDefault();
		event = a06 - lz[0].length;
		return e.value = pW.substring(0, event) + e.value.substring(a06), e.setSelectionRange(event, event), 1
	}, this.aKI = function(s) {
		s = aK8(s);
		return s ? function(aK7) {
			for (var fi = aK7.length, aC = 0; aC < fi; aC++) {
				var j = aK7[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aK7) {
			for (var aKL = new RegExp("^[0-9]"), a8W = new RegExp("^[0-9]+$"), aC = 0; aC < aK7.length; aC++) {
				var j = aK7[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aKL.test(j) && !a8W.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aKN = function(s) {
		var aK7 = aK8(s);
		if (aK7)
			for (var a6 = new RegExp("^[0-9]+$"), fi = aK7.length, aC = 0; aC < fi; aC++) {
				var j = aK7[aC].substring(1),
					lz = j.length;
				1 <= lz && lz <= 3 && a6.test(j) && (lz = parseInt(j, 10), !isNaN(lz)) && 0 <= lz && lz < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lz]))
			}
		return s
	}
}

function aHk() {
	var aKP, aKQ = [],
		aKR = -1,
		aKS = 0,
		aKT = 0;

	function aKX() {
		aKS = bi.ei, (3 === this.y1 ? aKW : (aKR = (aKQ.length + aKR + 2 * this.y1 - 1) % aKQ.length, aKV))()
	}

	function aKV() {
		0 !== aKQ.length && (aKT = 0, aKP && aKP.y4(), (aKP = new xy(aKX)).pz(aKR, aKQ.length), aKP.show(aKQ[aKR]), bq.message.resize())
	}

	function aKW() {
		aKT = 1, aKP && aKP.y4(), (aKP = new y5(aKV)).pz(aKQ.length), aKP.show(), bq.message.resize()
	}
	this.aIV = function(pc) {
		var q3;
		2 === pc.id && 3 === pc.aJ6 ? bq.lt.aJI(pc.pe) : (q3 = bq.lt.pw(pc, bq.lt.px(pc)), (5 !== pc.id && 6 !== pc.id || (bz.nH.q0(q3), 5 === pc.id)) && (q3 = bi.ei < aKS + 2e4, aKR !== aKQ.length - 1 && q3 || (aKR = aKQ.length), __fx.pingFilter
			.isMuted(pc, "s") || (aKQ.push(pc), bm.buffer.data[14].value || 7 === pc.id || bt.play(), aKP && (aKT && (bm.buffer.data[13].value || q3) ? aKP.pz(aKQ.length) : aKV()))))
	}, this.show = function() {
		aKW()
	}, this.uW = function() {
		aKR = aKQ.length - 1, aKP && aKP.y4(), aKP = null
	}, this.resize = function() {
		aKP && aKP.resize()
	}, this.aJK = function() {
		return aKQ
	}
}

function aHi() {
	var aKY = null,
		aKZ = null,
		aKa = 0,
		aKb = null;

	function aKi(title, aKv, tp, backgroundColor) {
		title = new x(title, tp, backgroundColor);
		return by.uz(title.button, aKv), title
	}

	function aKh() {
		return bI.f9.a3i(aKZ.pe, 5)
	}

	function aKt() {
		return +(0 === aKZ.xu || bq.lt.xv(aKZ))
	}

	function aKs() {
		aKt() || (aKZ.xw = bm.zQ.zd(aKh()), bq.z.aHr += 1 === bq.z.aHs, bq.yF.uW())
	}

	function aKj() {
		0 !== aKZ.xu && (bq.yF.uW(), u.v(8, 29, new ve(25, {
			action: 0,
			pe: bI.f9.a3i(aKZ.pe, 5),
			vc: 0
		}, 29)))
	}

	function aKp() {
		return !bq.pk || bq.lt.xv(aKZ) ? 1 : 0
	}

	function aKl() {
		return aKp() ? 1 : +bs.aKx(bI.f9.a3i(aKZ.pe, 5))
	}

	function aKk(aKy) {
		aKl() || (bs.aKz(bI.f9.a3i(aKZ.pe, 5), aKy), bq.yF.uW())
	}

	function aKn() {
		var fp, fr;
		aKl() || (fp = aKY.fp, fr = aKY.fr, bq.yF.uW(), aKY = new y6([aKi(L(168), L(169), function() {
			aKk(0)
		}, 0), aKi(L(170), L(171), function() {
			bq.yF.uW()
		}, 0)], 2), aKu(fp, fr), aKa = 2)
	}

	function aKe(x4) {
		return bq.tV.aId(aKZ.pe, x4)
	}

	function aKo(x4) {
		aKp() || (bq.tV.zQ(aKZ.pe, aKe(x4) ? 0 : x4), bq.yF.uW())
	}

	function aKr() {
		var ov;
		return !aKp() && (ov = bD.pa.po(aKZ.username)) ? +(ov === bD.pa.po(bq.pk.aI1)) : 1
	}

	function aKq() {
		aKr() || (b1.aIZ.aIa(2, aKZ.pe), bq.yF.uW())
	}

	function aKm() {
		29 === u.vd && u.a5e().pY(bI.f9.a3i(aKZ.pe, 5))
	}

	function aKu(fp, fr, yI) {
		aKY.show(fp, fr, yI), bq.xj.show(aKY.fp, aKY.fr, aKZ, 1)
	}
	this.aKc = function(e, q3) {
		aKZ = q3;
		var aKd = aKe(aKa = 1),
			aKf = aKe(2),
			aKg = bm.zQ.xw(aKh());
		aKY = new y6([aKi(L(146), L(147), aKj, 0 === q3.xu ? 1 : 0), aKi(L(148), L(149), function() {
			aKk(1)
		}, aKl()), aKi(L(150), L(151), aKm, 0), aKi(L(152), L(153), aKn, aKl()), aKi(L(aKd ? 154 : 155), L(aKd ? 156 : 157), function() {
			aKo(1)
		}, aKp()), aKi(L(aKf ? 158 : 159), L(aKf ? 160 : 161), function() {
			aKo(2)
		}, aKp()), aKi(L(162), L(163), aKq, aKr()), aKi(L(aKg ? 164 : 165), L(aKg ? 166 : 167), aKs, aKt())], 2), aKu((aKb = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aKb.clientY, 1)
	}, this.a6V = function(code) {
		if (29 !== u.vd) return !1;
		if (!aKZ) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.uW();
			else if (bD.pa.startsWith(code, "Numpad") || bD.pa.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKa) this.aKc(aKb, aKZ);
				else {
					if (!aKY) return !1;
					2 === aKa ? 1 === code ? aKk(0) : this.uW() : code <= 1 ? aKj() : 2 === code ? aKk(1) : 3 === code ? (aKm(), this.uW()) : 4 === code ? aKn() : code <= 6 ? aKo(5 === code ? 1 : 2) : (7 === code ? aKq : aKs)()
				}
		}
		return !0
	}, this.uW = function() {
		aKa = 0, aKY && aKY.uW(), aKY = null, bq.xj.uW(), by.uW()
	}
}

function aHm() {
	var aL0 = [],
		vo = [],
		aL1 = [],
		aL2 = {},
		aL3 = {};

	function aL5(q3) {
		for (var s = q3.s, aL4 = [];;) {
			var es = function aL7(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pW = s.substring(position + 1, position + 6);
				if (5 !== pW.length) return aL7(s, position + 1);
				var aLL = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aLL.test(pW)) return aL7(s, position + 1);
				aLL = s.substring(position + 6, position + 7);
				if (1 !== aLL.length) return position;
				pW = new RegExp("^[ :!.]+$");
				if (!pW.test(aLL)) return aL7(s, position + 1);
				return position
			}(s, 0);
			if (-1 === es) {
				aL4.push(aL8(s, q3));
				break
			}
			0 === es ? aL4.push(aL9(s.substring(1, 6), q3, es)) : (aL4.push(aL8(s.substring(0, es), q3)), aL4.push(aL9(s.substring(es + 1, es + 6), q3, es))), s = s.substring(es + 6)
		}
		return aL4
	}

	function aL9(pW, q3, es) {
		var pW = aLA(pW),
			uU = (0 === es && 0 === q3.pc.id && q3.q4 && (q3.fontSize = bq.lt.aJC(pW.xu, pW.a8F), q3.aJA = bq.lt.aJD(pW.a8F)), document.createElement("span"));
		return uU.style.display = "inline-block", uU.style.cursor = "pointer", uU.style.margin = "0", uU.style.font = "inherit", uU.style.minWidth = uU.style.minHeight = "1em", uU.aLB = {
			q3: q3,
			es: es
		}, aLC(uU, pW), vo.push(uU), (aL2[pW.pe] || (aL2[pW.pe] = [])).push(uU), uU
	}

	function aLC(uU, aHw) {
		var q3 = uU.aLB.q3;
		uU.textContent = function(aHw, q3, es) {
				if (aHw.aLE) return aHw.aLE--, es = 2 === q3.pc.id || (3 === q3.pc.id || 4 === q3.pc.id) && 0 !== es, aHw.username + (es ? " (" + aHw.aI8 + ")" : "");
				if (q3.pc.aJM) return "Redacted " + bI.f9.a3i(aHw.pe, 2);
				return aHw.username
			}(aHw, q3, uU.aLB.es), uU.style.color = bq.lt.xt(aHw.xu), uU.style.textShadow = 11 !== aHw.xu ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uU.style.textDecoration = bq.lt.xv(aHw) ?
			"underline" : "none", aHw.xw && (uU.style.textDecorationLine = "underline", uU.style.textDecorationStyle = "dotted"), uU.style.fontWeight = bq.lt.aJD(aHw.a8F) ? "bold" : "inherit", uU.onclick = function(e) {
				bq.yF.aKc(e, aHw)
			}, bM.u0() || (uU.onmouseover = function(e) {
				bq.xj.xx(e.target, aHw)
			})
	}

	function aL8(s, q3) {
		var uU = document.createElement("span");
		return uU.textContent = s, uU.style.color = q3.aJB, uU.style.margin = "0", uU.style.font = "inherit", uU
	}

	function aLA(pW) {
		var pe = bJ.f9.fA(pW, 5),
			aHw = bq.pm.pn(pe);
		if (aHw) {
			for (aL0.push(aHw); 75 < aL0.length;) aL0.shift();
			return aHw
		}
		for (var aHp = bq.pm.aHp, aC = aHp.length - 1; 0 <= aC; aC--)
			if (pe === (aHw = aHp[aC]).pe) return aL0.push(aHw), aHw;
		for (aC = aL0.length - 1; 0 <= aC; aC--)
			if (pe === (aHw = aL0[aC]).pe) return aL0.push(aHw), aHw;
		return aLG(pe, null)
	}

	function aLG(pe, name) {
		return aL3[pe] || (aL3[pe] = bq.pm.aHx(pe, name || "Player " + bI.f9.a3i(pe, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aLK(pe, name) {
		var aHw;
		name && !bq.pm.pn(pe) && ((aHw = function(pe) {
			for (var aHp = bq.pm.aHp, aC = aHp.length - 1; 0 <= aC; aC--)
				if (pe === aHp[aC].pe) return aHp[aC];
			for (aC = aL0.length - 1; 0 <= aC; aC--)
				if (pe === aL0[aC].pe) return aL0[aC];
			return aL3[pe] || null
		}(pe)) ? aHw.username !== name && (aHw.username = aHw.aI1 = name, bq.q5.aI0(pe)) : aLG(pe, name))
	}

	function aLP(aHw, aI7, pe) {
		pe === aHw.pe && (aHw.aI8 || (aHw.aI8 = aHw.username), aHw.username = aHw.aI1 = aI7)
	}
	this.y4 = function() {
		for (var aC = 0; aC < vo.length; aC++) vo[aC].onclick = vo[aC].onmouseover = null;
		aL3 = aL2 = aL1 = vo = null
	}, this.transform = function(q3) {
		for (var tH = document.createElement("div"), aL4 = aL5(q3), aC = 0; aC < aL4.length; aC++) tH.appendChild(aL4[aC]);
		0 === q3.pc.id && (tH.vx143 = q3.pc, aL1.push(tH)), tH.style.margin = "0.6em 0.6em", q3.q4 && (tH.style.marginLeft = tH.style.marginRight = "inherit"), tH.style.font = "inherit";
		var aL6 = 0 < q3.pc.id;
		return q3.aJA && (tH.style.fontWeight = "bold"), aL6 && (tH.style.paddingLeft = "0.7em"), aL6 && (tH.style.fontStyle = "italic"), tH.style.fontSize = q3.fontSize.toFixed(2) + "em", tH
	}, this.aI0 = function(pe) {
		var h = aL2 && aL2[pe];
		if (h)
			for (var aHw = aLA(bI.f9.a3i(pe, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aLC(h[aC], aHw) : h.splice(aC, 1)
	}, this.aLI = function(aLJ) {
		!aLJ || 4 < aLJ.id || (aLK(aLJ.pe, aLJ.pf), aLJ.pg && aLK(aLJ.target, aLJ.pg))
	}, this.aLO = function(aLJ) {
		if (aLJ && (2 === aLJ.id && 1 === aLJ.aJ6 || 3 === aLJ.id && 2 === aLJ.aJ6)) {
			var pe = 3 === aLJ.id ? aLJ.target : aLJ.pe;
			if (!bq.pm.pn(pe)) {
				for (var aI7 = (3 === aLJ.id ? aLJ.pg : aLJ.pf) || "Redacted " + bI.f9.a3i(pe, 2), aHp = bq.pm.aHp, aC = aHp.length - 1; 0 <= aC; aC--) aLP(aHp[aC], aI7, pe);
				for (aC = aL0.length - 1; 0 <= aC; aC--) aLP(aL0[aC], aI7, pe);
				aL3[pe] && aLP(aL3[pe], aI7, pe), this.aI0(pe)
			}
		}
	}, this.aJI = function(pe) {
		for (var aLQ = aL1, aC = aLQ.length - 1; 0 <= aC; aC--) {
			var fl = aLQ[aC];
			if (fl.vx143.pe === pe) {
				for (; fl.firstChild;) u.removeChild(fl, fl.firstChild);
				fl.vx143.s = "[Redacted Message]";
				for (var aL4 = aL5(bq.lt.pw(fl.vx143, bq.lt.px(fl.vx143))), g1 = 0; g1 < aL4.length; g1++) fl.appendChild(aL4[g1]);
				aLQ.splice(aC, 1)
			}
		}
	}
}

function cX() {
	var aLR, aLS, aLT;

	function aLY(aC) {
		var button = aZ.p7[aC],
			fp = button.fp,
			fr = button.fr,
			j = button.j,
			k = button.k;
		z2.fillStyle = button.aLW, z2.fillRect(fp, fr, j, k), aC === aLR && (z2.fillStyle = aLT, z2.fillRect(fp, fr, j, k)), z2.lineWidth = bf.a3P, z2.strokeStyle = aLS, z2.strokeRect(fp, fr, j, k),
			function(button) {
				var fp = button.fp,
					fr = button.fr,
					j = button.j,
					k = button.k;
				bD.t6.textAlign(z2, 1), bD.t6.textBaseline(z2, 1), z2.font = button.font, z2.fillStyle = aLS, z2.fillText(button.aJ9, Math.floor(fp + j / 2), Math.floor(fr + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fr = 0, this.gap = 0, this.dt = function() {
		aLR = -1, aLS = bE.qN, aLT = "rgba(255,255,255,0.16)", this.p7 = new Array(7), this.k = Math.floor((a1.a2.iv() ? .123 : .093) * i.iw), this.j = Math.floor((a1.a2.iv() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aLU = Math.floor(.26 * this.k),
			aLV = bD.t6.t9(1, aLU);
		this.p7[0] = {
			fp: 0,
			fr: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aJ9: "Multiplayer",
			font: aLV,
			aLW: "rgba(22,88,22,0.8)",
			fontSize: aLU
		}, aLU = Math.floor(.18 * this.k), aLV = bD.t6.t9(1, aLU), this.p7[1] = {
			fp: 0,
			fr: 0,
			j: this.j - this.p7[0].j - this.gap,
			k: this.k,
			aJ9: "Single Player",
			font: aLV,
			aLW: "rgba(22,88,88,0.8)",
			fontSize: aLU
		}, this.p7[2] = {
			fp: 0,
			fr: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJ9: "",
			font: this.p7[1].font,
			aLW: "rgba(100,0,0,0.8)",
			fontSize: this.p7[1].fontSize
		}, this.p7[3] = {
			fp: 0,
			fr: 0,
			j: this.j,
			k: this.k,
			aJ9: "Back",
			font: this.p7[0].font,
			aLW: "rgba(0,0,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.p7[4] = {
			fp: 0,
			fr: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJ9: "The game was updated!",
			font: this.p7[1].font,
			aLW: "rgba(100,0,0,0.8)",
			fontSize: this.p7[1].fontSize
		}, this.p7[5] = {
			fp: 0,
			fr: 0,
			j: this.p7[0].j,
			k: Math.floor(.8 * this.k),
			aJ9: "Reload",
			font: this.p7[0].font,
			aLW: "rgba(0,100,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.p7[6] = {
			fp: 0,
			fr: 0,
			j: this.p7[1].j,
			k: this.p7[5].k,
			aJ9: "Back",
			font: this.p7[0].font,
			aLW: "rgba(0,0,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.aEE()
	}, this.aEE = function() {
		this.fr = Math.floor(.54 * i.k), this.p7[0].fp = Math.floor(.5 * i.j - .5 * this.j), this.p7[1].fp = this.p7[0].fp + this.p7[0].j + this.gap, this.p7[2].fp = this.p7[3].fp = this.p7[0].fp, this.p7[4].fp = this.p7[5].fp = this.p7[0].fp,
			this.p7[6].fp = this.p7[1].fp, this.p7[0].fr = Math.floor(.54 * i.k), this.p7[1].fr = this.p7[0].fr, this.p7[2].fr = Math.floor((i.k - this.p7[2].k - this.p7[3].k - this.gap) / 2), this.p7[3].fr = this.p7[2].fr + this.p7[2].k + this
			.gap, this.p7[4].fr = Math.floor((i.k - this.p7[4].k - this.p7[5].k - this.gap) / 2), this.p7[5].fr = this.p7[6].fr = this.p7[4].fr + this.p7[4].k + this.gap
	}, this.aLX = function() {
		aLY(0), aLY(1)
	}, this.aLZ = function() {
		aLY(2), aLY(3)
	}, this.aLa = function() {
		aLY(4), aLY(5), aLY(6)
	}, this.a5x = function(fp, fr, nS) {
		var aC = -1;
		return 0 === ab.a5a() ? aC = this.a6R(fp, fr, 0, 2) : 3 === ab.a5a() ? aC = this.a6R(fp, fr, 3, 1) : 5 === ab.a5a() && (aC = this.a6R(fp, fr, 5, 2)), aLR !== aC && (aLR = aC, nS) && (bi.e0 = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a6R = function(fp, fr, aLb, size) {
		for (var aC = aLb; aC < aLb + size; aC++)
			if (fp >= this.p7[aC].fp && fr >= this.p7[aC].fr && fp <= this.p7[aC].fp + this.p7[aC].j && fr <= this.p7[aC].fr + this.p7[aC].k) return aC;
		return -1
	}
}

function cY() {
	var aLd, aLe, aBr, aLf, aLg, aLh, aLi, aLj, aLk, aBq, aLl, aLm, aLn, aLo = 1,
		aLq = 0;

	function aLt(aLu) {
		aLu ? aLn = (aLn + 1) % b1.z.aLv : (b1.z.close(aLn, 3280), aLo ? aLo = 0 : (aLn = (aLn + 1) % b1.z.aLv, b1.z.close(aLn, 3280))), aLm = bi.ei, aa.aLs = aLq, b1.z.aLw(aLn, 4, 1) && b1.aIZ.aLx(aLn)
	}

	function aLy() {
		if (0 !== aLn) return 1 === aLn && __fx.customLobby.isActive() ? (p.a5m(3249), __fx.customLobby.setActive(!1)) : void aLt();
		p.a5m(3249)
	}

	function aM3(fr, aDw, wQ) {
		var o7 = Math.floor((i.j - aLf) / 2) + aLi,
			oK = o7 + Math.floor(wQ * (aLf - 2 * aLi));
		z2.lineWidth = aDw, z2.beginPath(), z2.moveTo(o7, fr), z2.lineTo(oK, fr), z2.lineTo(Math.floor(o7 - aLi + wQ * aLf), fr + aBr), z2.lineTo(o7 - aLi, fr + aBr), z2.closePath()
	}
	this.fB = 1, this.aLr = 0, this.aLs = 0, this.dt = function() {
		bX.turnstile.f7(), ab.setState(6), aLd = 0, aLe = 1, aLj = "rgba(0,220,120,0.4)", aLk = "rgba(0,0,0,0.8)", this.resize(), bi.e0 = !0, aLo = 1, aLn = this.fB - 1, aLq = 0, aLt(1)
	}, this.resize = function() {
		aLf = Math.floor((a1.a2.iv() ? .5 : .25) * i.iw), aLg = aLf + 12, aBr = Math.floor(.125 * aLf), aLi = 3 * aBr, aLh = Math.floor(.225 * aLf), aLl = Math.floor(.3 * aBr), aBq = bD.t6.t9(0, aLl)
	}, this.a5h = function(oY) {
		oY === aLn && aLy()
	}, this.hw = function(fp, fr) {
		var o7 = Math.floor((i.j - aLg) / 2),
			o8 = Math.floor(.5 * (i.k - bf.gap - aBr - aLh)) + aBr + bf.gap;
		return o7 < fp && fp < o7 + aLg && o8 < fr && fr < o8 + aLh && (this.a6c(), aZ.a5x(fp, fr, !1), !0)
	}, this.a6c = function() {
		b1.z.a5n(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.en = function() {
		6 === ab.a5a() && (bi.ei > aLm + 12e3 && aLy(), 100 < (aLd += .07 * aLe * (aLd < 16 ? 5 + aLd : 84 < aLd ? 105 - aLd : 17)) ? (aLd = 100, aLe = -1) : aLd < 0 && (aLd = 0, aLe = 1), aLj = "rgba(0," + Math.floor(190 - 1.9 * aLd) + "," +
			Math.floor(120 - 1.2 * aLd) + "," + (.4 + .004 * aLd) + ")", aLk = "rgba(0," + Math.floor(1.9 * aLd) + "," + Math.floor(1.2 * aLd) + "," + (.8 - .004 * aLd) + ")", bi.e0 = !0)
	}, this.z1 = function() {
		var fp = Math.floor((i.j - aLg) / 2),
			fr = Math.floor(.5 * (i.k - bf.gap - aBr - aLh));
		! function(title, fr, aDw, wQ) {
			z2.fillStyle = aLk, aM3(fr, aDw, 1), z2.fill(), z2.fillStyle = aLj, aM3(fr, aDw, wQ), z2.fill(), z2.strokeStyle = bE.qN, __fx.settings.smoothUI && (z2.strokeStyle = "rgba(255, 255, 255, 0.3)", z2.lineJoin = "round"), aM3(fr, aDw, 1),
				z2.stroke(), z2.lineJoin = "miter",
				function(aM5, fr) {
					bD.t6.textAlign(z2, 1), bD.t6.textBaseline(z2, 1), z2.font = aBq, z2.fillStyle = bE.qN, z2.fillText(aM5, Math.floor(.5 * i.j), Math.floor(fr + .58 * aBr))
				}(title, fr)
		}(L(172), fr, 3, aLd / 100),
		function(fp, fr, j, k, aJ9) {
			z2.fillStyle = bE.qI, z2.beginPath(), __fx.settings.smoothUI && z2.roundRect ? z2.roundRect(fp, fr, j, k, .1 * k) : z2.rect(fp, fr, j, k), z2.fill(), z2.lineWidth = 3, z2.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qN, z2.stroke();
			var fi = Math.floor(.3 * k);
			bD.t6.textAlign(z2, 1), bD.t6.textBaseline(z2, 1), z2.font = bD.t6.t9(0, fi), z2.fillStyle = bE.qN, z2.fillText(aJ9, Math.floor(fp + j / 2), Math.floor(fr + k / 2 + .1 * fi))
		}(fp, fr + aBr + bf.gap, aLg, aLh, L(49))
	}
}

function cZ() {
	var a5U = 0;
	this.dt = function() {
		aZ.dt(), a5U = 0
	}, this.setState = function(aM6) {
		a5U = aM6
	}, this.a5a = function() {
		return a5U
	}, this.aM7 = function() {
		this.setState(8), u.y()
	}, this.a6V = function(e) {
		if (!bV.a0w) return !1;
		if (!(bi.ei < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aM8()) return !0;
				if ("Enter" === e.key) {
					if (0 === a5U) return !0;
					if (7 === a5U) return !0
				}
			}
			return !1
		}
	}, this.aM9 = function() {
		bc.resize()
	}, this.aM8 = function() {
		return !!bc.uW()
	}, this.hw = function(fp, fr) {
		!bV.a0w || bc.hw(fp, fr) || 6 === a5U && aa.hw(fp, fr) || bb.hw(fp, fr) || aU.hw(fp, fr)
	}, this.a5x = function(fp, fr) {
		!aU.aE7 && aZ.a5x(fp, fr, !0) || aU.a5x(fp, fr)
	}, this.click = function(fp, fr) {
		aU.a6M()
	}, this.a60 = function(fp, fr, deltaY) {}, this.aMA = function() {
		aZ.aEE(), bi.e0 = !0
	}, this.z1 = function() {
		8 !== a5U && 10 !== a5U && (z2.imageSmoothingEnabled = !0, this.a2V(), 0 !== a5U && (aU.z1(), aP.z1(), this.aMB(), bb.z1()), 0 !== a5U && 6 === a5U && aa.z1(), bc.z1(), u.z1())
	}, this.a2V = function() {
		var aMD, aMC;
		if (__fx.makeMainMenuTransparent) z2.clearRect(0, 0, i.j, i.k);
		else bV.a0w ? (aMC = i.j / bV.ft, aMD = i.k / bV.fu, z2.setTransform(aMC = aMD < aMC ? aMC : aMD, 0, 0, aMC, Math.floor((i.j - aMC * bV.ft) / 2), Math.floor((i.k - aMC * bV.fu) / 2)), z2.drawImage(bV.a0y, 0, 0), z2.setTransform(1, 0, 0,
			1, 0, 0), z2.fillStyle = bE.qI) : z2.fillStyle = bE.qE, z2.fillRect(0, 0, i.j, i.k)
	}, this.aMB = function() {
		var fr = Math.floor(.3 * i.k),
			canvas = ac.xD("territorial.io"),
			im = (im = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : im,
			fp = (z2.globalAlpha = .15, z2.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - im * canvas.width))),
			fp = Math.floor(fp / im),
			fr = Math.floor(fr - .5 * canvas.height * im),
			fr = Math.floor(fr / im);
		z2.setTransform(im, 0, 0, im, fp, fr), z2.drawImage(canvas, fp, fr), z2.setTransform(1, 0, 0, 1, 0, 0), z2.globalAlpha = 1, z2.imageSmoothingEnabled = !0
	}
}

function cz() {
	this.aIv = 0;
	var aMF, aMG, aMH, aMI, aMJ, aMK = this.aME = 0;

	function tE() {
		aMI = aMJ = null, aMK = 0
	}
	this.dt = function(aHb, aIn, aIp) {
		u.y(), bq.y4(), ab.setState(10), aMI = aHb, aMJ = aIn, aMK = aIp, this.aIv = aHb.aIv, this.aME = aIp, aMF = 0, aMG = bi.ei + 4500, b1.z.a5i = aHb.a5i, 1 === aIn.length ? (b1.z.close(b1.z.fG, 3281), aMH = 0) : b1.z.fG === aHb.a5i ? (
			console.log("direct pass"), aMH = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fG, 3247), aMH = 2, b1.z.aLw(aHb.a5i, 5, 2) && b1.rr.aML()), z2.imageSmoothingEnabled = !0, ab.a2V();
		aIp = ac.xD("loading"), aIn = (a1.a2.iv() ? .396 : .25) * i.iw / aIp.width;
		z2.setTransform(aIn, 0, 0, aIn, Math.floor((i.j - aIn * aIp.width) / 2), Math.floor((i.k - aIn * aIp.height) / 2)), z2.imageSmoothingEnabled = !1, z2.drawImage(aIp, 0, 0), z2.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nQ = function() {
		0 < aMH && bi.ei > aMG && (aMH--, aMG += 4500, 0 === bi.aMM) && 0 === bi.l1() && b1.z.aLw(b1.z.a5i, 5, 2)
	}, this.aMN = function() {
		return 10 === ab.a5a() && (bq.aHb.aIy(aMI, aMJ, aMK), tE(), !0)
	}, this.aMO = function() {
		10 === ab.a5a() && 2 <= ++aMF && (bq.aHb.aIy(aMI, aMJ, aMK), tE())
	}
}

function ca() {
	var aMQ, canvas, a4m, aMR;

	function aMX(eR, name, aMY, pW) {
		a4m[eR] = name, canvas[eR] = new Image, canvas[eR].onload = function() {
			! function(eR, aMY) {
				var a8K, a8L = null;
				7 === aMY ? a8K = bD.p3.a8N : 9 === aMY ? a8K = bD.p3.a8O : 8 === aMY ? (a8K = bD.p3.a8R, a8L = .1) : 3 === aMY ? (a8K = bD.p3.a8P, a8L = .06) : 5 === aMY ? a8K = bD.p3.a8S : 6 === aMY ? a8K = bD.p3.a8M : 4 === aMY && (a8K = bD.p3
					.a8T);
				canvas[eR] = bD.p3.a8J(canvas[eR], a8K, a8L)
			}(eR, aMY), aMa()
		}, canvas[eR].onerror = function(e) {
			console.error("Error loading image at index", eR, "Error:", e), aMa()
		}, canvas[eR].src = "data:image/png;base64," + pW
	}

	function aMa() {
		aMQ--, aMU()
	}

	function aMU() {
		0 === aMQ && (aMQ = -1, aMW(), bi.e0 = !0, canvas[7] = aMR, canvas[8] = aMR, canvas[9] = aMR, canvas[10] = aMR, 5 === u.vd) && u.a5e().aMc.resize()
	}

	function aMW() {
		aM.a9m(), bb.aHT([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a11 = new a2w, ak.a11.dt(), ax.du()
	}
	this.dt = function() {
		if (void 0 === canvas) {
			aMQ = 29, canvas = new Array(aMQ), a4m = new Array(aMQ), (aMR = document.createElement("canvas")).width = 1;
			for (var aC = aMQ - (aMR.height = 1); 0 <= aC; aC--) canvas[aC] = aMR;
			aMW(), aMX(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aMX(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aMX(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(3, "orders", 6,
					"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"
					), aMX(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aMX(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aMX(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAGe4AAAMACAYAAAD286EDAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAR6vSURBVHic7N1/3Nbz/f//x3me1XmqJM6ypNGSSoW0LHqXt99qZWIzovIrkzWbUjrrLCEpP5f1A40RxjDDQjVhWCsLsWGitbSMt19LnxA5z77/7LvLZqrzPOvseRzn63r9r+NynudxO/44jo7zvLyO570gIjYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGREYeoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANieDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aMX(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(8,
					"googleplay", 3,
					"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"
					), aMX(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aMX(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMX(14, "bestPlayer", 5,
					"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"
					), aMX(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aMX(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aMX(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aMX(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aMX(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aMX(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aMX(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aMX(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aMX(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aMX(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aMX(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aMX(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aMX(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aMX(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eR) {
		return canvas[eR]
	}, this.xD = function(name) {
		for (var aC = a4m.length - 1; 0 <= aC; aC--)
			if (a4m[aC] === name) return canvas[aC];
		return aMR
	}, this.w3 = function() {
		return aMQ <= 0
	}, this.aMT = function() {
		aMQ = 0, aMU()
	}
}

function cb() {
	var aMd = [
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
		aMe = [
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
	this.aMf = null, this.aMg = null, this.aMh = null, this.aMi = null, this.aMj = null, this.aMk = null, this.aMl = null, this.aMm = null, this.aMn = null, this.aMo = null;

	function aMv(kK, oP) {
		for (var aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aC = kK; aC < oP; aC++) aMf[aC] = bO.g9(64 * az.random(), az.value(100)) << 2, aMg[aC] = bO.g9(64 * az.random(), az.value(100)) << 2, aMh[aC] = bO.g9(64 * az.random(), az.value(100)) << 2
	}

	function aMu(kK, oP) {
		for (var colorsData = aE.data.colorsData, aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aC = kK; aC < oP; aC++) {
			var gA = colorsData[aC];
			aMf[aC] = 4 * (gA >> 12), aMg[aC] = 4 * (gA >> 6 & 63), aMh[aC] = 4 * (63 & gA)
		}
	}

	function aNC(fM, aNE) {
		aGp[fM] = 0, aGp[fM + 1] = 0, aGp[fM + 2] = aNE, aGp[fM + 3] = 0, aNF(fM)
	}

	function aNF(fM) {
		var fp;
		be.oX || (fp = ad.a2W(fM), fM = ad.a2X(fM), be.oX = fp >= bd.aGo[0] && fp <= bd.aGo[2] && fM >= bd.aGo[1] && fM <= bd.aGo[3])
	}
	this.fk = new Int32Array(4), this.aMs = new Int32Array(8), this.du = function() {
		var fk = this.fk,
			fk = (fk[0] = -4 * bV.ft, fk[1] = 4, fk[2] = -fk[0], fk[3] = -fk[1], this.aMs);
		fk[0] = -4 * bV.ft - 4, fk[1] = -4 * bV.ft, fk[2] = -4 * bV.ft + 4, fk[3] = -4, fk[4] = 4, fk[5] = 4 * bV.ft - 4, fk[6] = 4 * bV.ft, fk[7] = 4 * bV.ft + 4
	}, this.dt = function() {
		if (this.aMf ? (this.aMf.fill(0), this.aMg.fill(0), this.aMh.fill(0), this.aMi.fill(0), this.aMj.fill(0), this.aMk.fill(0), this.aMl.fill(0), this.aMm.fill(0), this.aMn.fill(0), this.aMo.fill(0), this.aD6.fill(0)) : (this.aMf =
				new Uint8Array(aE.ff), this.aMg = new Uint8Array(aE.ff), this.aMh = new Uint8Array(aE.ff), this.aMi = new Uint8Array(aE.ff), this.aMj = new Uint8Array(aE.ff), this.aMk = new Uint8Array(aE.ff), this.aMl = new Uint8Array(aE.ff),
				this.aMm = new Uint8Array(aE.ff), this.aMn = new Uint8Array(aE.ff), this.aMo = new Uint8Array(aE.ff), this.aD6 = new Uint8Array(aE.ff)), aE.ie)
			for (var aFL = bj.aFL, aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aC = aE.ff - 1; 0 <= aC; aC--) {
				var es = aFL[aC],
					lz = bO.g9((aMe[es][3] + 1) * az.random(), az.value(100));
				aMf[aC] = aMd[es][0] + lz * aMe[es][0], aMg[aC] = aMd[es][1] + lz * aMe[es][1], aMh[aC] = aMd[es][2] + lz * aMe[es][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aMu(0, aE.l4), aMv(aE.l4, aE.ff)) : aMv(0, aE.ff) : aMu(0, aE.ff);
		! function() {
			var aC, fl, aMf = ad.aMf,
				aMg = ad.aMg,
				aMh = ad.aMh;
			for (aC = aE.ff - 1; 0 <= aC; aC--) fl = bO.g9(aMf[aC] + aMg[aC] + aMh[aC], 3), aMf[aC] += aN1(fl - aMf[aC], 2), aMg[aC] += aN1(fl - aMg[aC], 2), aMh[aC] += aN1(fl - aMh[aC], 2), aMf[aC] -= aMf[aC] % 4, aMg[aC] -= aMg[aC] % 4, aMh[
				aC] -= aMh[aC] % 4
		}(),
		function() {
			for (var fi = aE.ff, aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aMi = ad.aMi, aC = 0; aC < fi; aC++) aMf[aC] += aC >> 7, aMg[aC] += aC >> 5 & 3, aMh[aC] += aC >> 3 & 3, aMi[aC] = 7 & aC
		}(), this.aMy(),
			function() {
				for (var fi = aE.ff, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aC = 0; aC < fi; aC++) {
					var eQ = aMf[aC],
						vz = aMg[aC],
						g2 = aMh[aC];
					60 <= eQ + vz + g2 ? (aMj[aC] = Math.max(eQ - 40, 3 & eQ), aMk[aC] = Math.max(vz - 40, 3 & vz), aMl[aC] = Math.max(g2 - 40, 3 & g2)) : (aMj[aC] = eQ + 40, aMk[aC] = vz + 40, aMl[aC] = g2 + 40)
				}
			}(),
			function() {
				for (var fi = aE.ff, aMm = ad.aMm, aMn = ad.aMn, aMo = ad.aMo, aMf = ad.aMf, aMg = ad.aMg, aMh = ad.aMh, aC = 0; aC < fi; aC++) {
					var eQ = aMf[aC],
						vz = aMg[aC],
						g2 = aMh[aC];
					688 <= eQ + vz + g2 ? (aMm[aC] = eQ - 88, aMn[aC] = vz - 88, aMo[aC] = g2 - 88) : (aMm[aC] = Math.min(eQ + 88, 252 + (3 & eQ)), aMn[aC] = Math.min(vz + 88, 252 + (3 & vz)), aMo[aC] = Math.min(g2 + 88, 252 + (3 & g2)))
				}
			}()
	}, this.aBy = function(player) {
		var h = bR.gH;
		return h[0] = this.aMf[player], h[1] = this.aMg[player], h[2] = this.aMh[player], h
	}, this.aMy = function() {
		for (var aC = aE.ff - 1; 0 <= aC; aC--) this.aD6[aC] = this.aMf[aC] + this.aMg[aC] + this.aMh[aC] < 280 ? 0 : 1
	}, this.a2W = function(fM) {
		return bO.g9(fM, 4) % bV.ft
	}, this.a2X = function(fM) {
		return bO.g9(fM, 4 * bV.ft)
	}, this.a24 = function(fp, fr) {
		return Math.floor(4 * (fr * bV.ft + fp))
	}, this.a2K = function(fM) {
		var fk = this.fk;
		return this.aN2(fM + fk[0]) || this.aN2(fM + fk[1]) || this.aN2(fM + fk[2]) || this.aN2(fM + fk[3])
	}, this.g6 = function(fM) {
		var fk = this.fk;
		return this.fn(fM + fk[0]) || this.fn(fM + fk[1]) || this.fn(fM + fk[2]) || this.fn(fM + fk[3])
	}, this.a2I = function(fM, player) {
		var fk = this.fk;
		return this.aN3(fM + fk[0], player) || this.aN3(fM + fk[1], player) || this.aN3(fM + fk[2], player) || this.aN3(fM + fk[3], player)
	}, this.aN4 = function(aC, aN5, aN6, aN7) {
		this.aMf[aC] = aN5 >> 16, this.aMg[aC] = aN5 >> 8 & 255, this.aMh[aC] = 255 & aN5, this.aMj[aC] = aN6 >> 16, this.aMk[aC] = aN6 >> 8 & 255, this.aMl[aC] = 255 & aN6, this.aMm[aC] = aN7 >> 16, this.aMn[aC] = aN7 >> 8 & 255, this.aMo[aC] =
			255 & aN7
	}, this.aN8 = function(aC) {
		return [(this.aMf[aC] << 16) + (this.aMg[aC] << 8) + this.aMh[aC], (this.aMj[aC] << 16) + (this.aMk[aC] << 8) + this.aMl[aC], (this.aMm[aC] << 16) + (this.aMn[aC] << 8) + this.aMo[aC]]
	}, this.hI = function(fM) {
		return 208 <= aGp[fM + 3]
	}, this.a2Q = function(player, fM) {
		return this.hI(fM) && this.a2T(player, fM)
	}, this.a2T = function(player, fM) {
		return player === this.fa(fM)
	}, this.aN9 = function(fM) {
		return 208 <= aGp[fM + 3] && aGp[fM + 3] < 224
	}, this.kF = function(fM) {
		return 224 <= aGp[fM + 3] && aGp[fM + 3] < 248
	}, this.aNA = function(fM) {
		return 248 <= aGp[fM + 3]
	}, this.a2J = function(fM) {
		for (var fk = this.fk, aC = 3; 0 <= aC; aC--)
			if (this.j0(fM + fk[aC])) return !0;
		return !1
	}, this.fd = function(fM) {
		return this.hI(fM) || this.fZ(fM)
	}, this.j0 = function(fM) {
		return 0 === aGp[fM + 3] && 2 === aGp[fM + 2]
	}, this.fZ = function(fM) {
		return 0 === aGp[fM + 3] && 1 === aGp[fM + 2]
	}, this.a19 = function(fM) {
		return 0 === aGp[fM + 3] && 3 === aGp[fM + 2]
	}, this.fn = function(fM) {
		return 0 === aGp[fM + 3] && 5 === aGp[fM + 2]
	}, this.aN2 = function(fM) {
		return 0 === aGp[fM + 3] && 3 <= aGp[fM + 2]
	}, this.fQ = function(fM) {
		return (aGp[fM] >> 1 << 8) + aGp[fM + 1]
	}, this.aNB = function(fM) {
		return 1 & aGp[fM]
	}, this.aN3 = function(fM, player) {
		return this.fZ(fM) || this.hI(fM) && player !== this.fa(fM)
	}, this.fa = function(fM) {
		return ((3 & aGp[fM]) << 7) + ((3 & aGp[fM + 1]) << 5) + ((3 & aGp[fM + 2]) << 3) + (7 & aGp[fM + 3])
	}, this.a2R = function(fM) {
		aNC(fM, 1)
	}, this.aND = function(fM) {
		aNC(fM, 2)
	}, this.a25 = function(fM, player) {
		aGp[fM] = this.aMf[player], aGp[fM + 1] = this.aMg[player], aGp[fM + 2] = this.aMh[player], aGp[fM + 3] = 208 + this.aMi[player], aNF(fM)
	}, this.hD = function(fM, player) {
		aGp[fM] = this.aMj[player], aGp[fM + 1] = this.aMk[player], aGp[fM + 2] = this.aMl[player], aGp[fM + 3] = 224 + this.aMi[player], aNF(fM)
	}, this.kG = function(fM, player) {
		aGp[fM] = this.aMm[player], aGp[fM + 1] = this.aMn[player], aGp[fM + 2] = this.aMo[player], aGp[fM + 3] = 248 + this.aMi[player], aNF(fM)
	}
}

function d0() {
	var aNG = 0,
		aNH = new Uint16Array(64);

	function fE(a9q) {
		aNG -= 2;
		for (var aC = a9q; aC < aNG; aC += 2) aNH[aC] = aNH[aC + 2], aNH[aC + 1] = aNH[aC + 3]
	}
	this.dt = function() {
		aNG = 0
	}, this.en = function() {
		var aC, kD, jM;
		if (0 !== aNG)
			if (0 === ah.ng[aE.fS]) aNG = 0;
			else if (0 === ae.gp(aE.fS)) aNG = 0;
		else
			for (aC = aNG - 2; 0 <= aC; aC -= 2)(kD = aNH[aC]) < aE.ff && 0 === ah.ng[kD] ? fE(aC) : (jM = aNH[aC + 1], (kD >= aE.ff && bw.aNJ(aE.fS) || kD < aE.ff && bw.aNK(aE.fS, kD)) && (bB.i9.iG(jM, kD), fE(aC)))
	}, this.iH = function(kD, jM) {
		! function(kD, jM) {
			for (var aC = 0; aC < aNG; aC += 2)
				if (aNH[aC] === kD) return aNH[aC + 1] = Math.min(aNH[aC + 1] + jM, 1023), 1;
			return
		}(kD, jM) && 64 !== aNG && (aNH[aNG] = kD, aNH[aNG + 1] = jM, aNG += 2)
	}
}

function cc() {
	function aNS(player) {
		var ej;
		bD.h4.a7u(player) && (ej = ah.hk[player] - ah.a7z[player] + ae.aNU(player), bg.h8(player, Math.abs(ej), ej < 0 ? 18 : 12)), ah.hk[player] = 0, ah.a7z[player] = 0
	}

	function aNb() {
		aY.show(!1, !1, !1, !0), aX.aFr(), bU.a4B.a4z()
	}

	function aNO(player, aNa) {
		for (var aC = aNa.length - 1; 0 <= aC; aC--) ae.aNd(aNa[aC], player)
	}

	function aNR(player) {
		var jc = ah.jc,
			jd = ah.jd,
			je = ah.je,
			jf = ah.jf,
			ft = bV.ft;
		if (ah.hW[player]) {
			ah.hW[player] = 0;
			for (var o7 = jc[player], o8 = je[player], fp = jd[player]; o7 <= fp; fp--)
				for (var fr = jf[player]; o8 <= fr; fr--) {
					var hG = 4 * (fr * ft + fp);
					ad.a2Q(player, hG) && ad.a2R(hG)
				}
		}
		jd[player] = jf[player] = 0, jc[player] = je[player] = Math.max(ft, bV.fu)
	}
	this.e1 = function(hG) {
		var player, ej = ah.hW[hG] + ah.a20[hG];
		bQ.z.l8[hG] ? ej && (aNO(player = hG, ae.aNP(player)), ag.aNQ(player), aNR(player), aG.h6(player), ae.clear(player), aNS(player), function(player) {
			ah.a20[player] = 0, ah.hA[player] = [], ah.hO[player] = [], ah.hP[player] = [], ah.g7[player] = []
		}(player)) : !ej && ah.hA[hG].length || this.aNN(hG)
	}, this.aNN = function(player) {
		! function(player) {
			bD.h4.kR(player) || (ah.a53[player] = bl.a5H.aNZ(), aE.a4R++);
			var aNa = ae.aNP(player);
			0 === aNa.length ? bD.h4.a7r(player) && aNb() : (aNO(player, aNa), function(player, aNa) {
				var aNf = aNa[function(aNa) {
					var aC, eR = 0;
					for (aC = aNa.length - 1; 1 <= aC; aC--) ah.hW[aNa[aC]] > ah.hW[aNa[eR]] && (eR = aC);
					return eR
				}(aNa)];
				9 === aE.lM && (1 === bj.fg[player] ? az.kw(8) && b0.aNg(aNf) : aF.iS[player] && (aO.aBI(765, 0), aO.a2t(280, L(173, [ah.a2u[aNf], ah.a2u[player]]), 765, aNf, bE.qE, bE.rf, -1, !0)));
				if (bD.h4.a7r(player)) aNb(), aO.a4d(aNf, 1);
				else {
					for (var aC = aNa.length - 1; 0 <= aC; aC--)
						if (bD.h4.a7u(aNa[aC]) && (bg.nc[4 - bD.h4.kR(player)]++, bD.h4.a7r(aNa[aC]))) return aO.a4d(player, 0);
					bD.h4.kR(player) || aO.aB1(0, player, aNf)
				}
			}(player, aNa))
		}(player), ag.aNQ(player), aNR(player), aNS(player),
			function(player) {
				ah.ng[player] = 0, ah.hA[player] = null, ah.hO[player] = null, ah.hP[player] = null, ah.g7[player] = null
			}(player), aG.h6(player), ae.clear(player), bQ.aNX.aNY(player)
	}
}

function d5() {
	var input;

	function aNh(e) {
		(e = e.target.files) && 0 < e.length && b7.aNk(e[0])
	}

	function aNo(e) {
		var es = new Image;
		es.onload = aNp, es.src = e.target.result
	}

	function aNp(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aNr = bm.buffer.data[162].value,
			max = Math.min(bV.aNs, aNr),
			aNr = (max = a1.id || bM.u0() ? Math.min(1400, aNr) : max) / Math.max(j, k);
		if (aNr < 1 && (j = Math.floor(aNr * j + .125), k = Math.floor(aNr * k + .125)), max < j || max < k || j < 10 || k < 10) aNr = "Invalid Image Dimensions!", a1.zk ? a1.zk.showToast(aNr) : alert(aNr);
		else {
			for (var max = document.createElement("canvas"), aNr = (max.width = j, max.height = k, max.getContext("2d")), aNu = document.createElement("canvas"), aNv = (aNu.width = e.width, aNu.height = e.height, aNu.getContext("2d")), e = (aNv
					.drawImage(e, 0, 0), aNv.getImageData(0, 0, aNu.width, aNu.height)), aNv = aNr.createImageData(j, k), src = e.data, aNy = aNv.data, aDg = aNu.width / j, aDh = aNu.height / k, fr = 0; fr < k; fr++)
				for (var fp = 0; fp < j; fp++) {
					var aNz = Math.floor(fp * aDg),
						aNz = 4 * (Math.floor(fr * aDh) * aNu.width + aNz),
						aO2 = 4 * (fr * j + fp);
					aNy[aO2] = src[aNz], aNy[1 + aO2] = src[1 + aNz], aNy[2 + aO2] = src[2 + aNz], aNy[3 + aO2] = 255
				}
			aNr.putImageData(aNv, 0, 0), 20 === u.vd && u.a5e().aNp(max)
		}
	}
	this.dt = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aNh
	}, this.y4 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNi = function() {
		input.click()
	}, this.aNk = function(aNl) {
		var h = aNl.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aNo, h.readAsDataURL(aNl))
	}
}

function d3() {
	this.aO3 = new Uint32Array(aE.ff), this.dt = function() {
		10 === aE.lM && this.aO3.fill(0)
	}, this.en = function() {
		10 === aE.lM && this.lt()
	}, this.lt = function() {
		for (var hG, target, aG4, aO3 = this.aO3, x6 = am.lf, a80 = ah.hk, aC = am.la - 1; 0 <= aC; aC--)(hG = x6[aC]) >= aE.l4 || (target = Math.max(bO.g9(a80[hG], 4), 2048), aG4 = Math.max(af.aG5(hG), 100), aO3[hG] += bO.g9(aG4 * target, 1e4),
			aO3[hG] > target && (aO3[hG] = target))
	}, this.a86 = function(player, iS) {
		return 10 !== aE.lM || bD.h4.kR(player) ? iS : Math.min(this.aO3[player], iS)
	}, this.a8C = function(player, iS) {
		10 !== aE.lM || bD.h4.kR(player) || (this.aO3[player] -= iS)
	}
}

function d6() {
	var aO4 = -1,
		aO5 = null,
		aO6 = -1,
		yZ = 4;

	function aO8() {
		aN.aAK() ? be.render() : be.a4b()
	}

	function aOG(es, fl) {
		var eQ = es >> 16,
			vz = es >> 8 & 255,
			es = 255 & es,
			aOH = 255 - fl,
			aOH = (aOH < eQ && aOH < vz && aOH < es && (fl = -fl), aO4 >> 7),
			aOJ = aO4 >> 5 & 3,
			aOK = aO4 >> 3 & 3;
		return (Math.max(Math.min(eQ + fl, 252 + aOH), aOH) << 16) + (Math.max(Math.min(vz + fl, 252 + aOJ), aOJ) << 8) + Math.max(Math.min(es + fl, 252 + aOK), aOK)
	}

	function aO7() {
		return -1 !== aO4 && (ad.aN4(aO4, aO5[0], aO5[1], aO5[2]), aOD(aO4), aO4 = -1)
	}

	function aOD(player) {
		bi.e0 = !0;
		for (var jc = ah.jc[player], je = ah.je[player], jd = ah.jd[player], jf = ah.jf[player], fr = je; fr <= jf; fr++)
			for (var fp = jc; fp <= jd; fp++) {
				var fM = ad.a24(fp, fr);
				ad.a2Q(player, fM) && (ad.aNA(fM) ? ad.kG(fM, player) : ad.kF(fM) ? ad.hD(fM, player) : ad.a25(fM, player))
			}
	}
	this.dt = function() {
		aO5 = null, aO6 = aO4 = -1, yZ = bO.iu(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.en = function(c2) {
		if (bm.buffer.data[15].value && 0 !== yZ && (c2 || !bM.u0())) {
			var c2 = bP.hz(bM.hn),
				i0 = bP.i1(bM.ho);
			if (bP.i2(c2, i0)) {
				c2 = bP.g5(c2, i0), i0 = bP.fY(c2);
				if (aO6 === i0)
					if (ad.hI(i0)) {
						if (aO4 === ad.fa(i0)) return
					} else if (-1 === aO4) return;
				! function(fM) {
					ad.hI(fM) ? (fM = ad.fa(fM)) !== aO4 && (aO7(), function(player) {
						aO4 = player, aO5 = ad.aN8(player);
						var aOB = function() {
							var q3 = aO5,
								aOE = yZ << 2,
								aOF = aOE << 1;
							return [aOG(q3[0], aOE), aOG(q3[1], aOF), aOG(q3[2], aOF)]
						}();
						ad.aN4(player, aOB[0], aOB[1], aOB[2]), aOD(player)
					}(fM), aO8()) : aO7() && aO8()
				}(aO6 = i0)
			} else aO7() && aO8()
		}
	}
}

function d7() {
	var yN = 0,
		aOL = 0,
		aOM = 0,
		aON = 0,
		aO6 = -1;

	function aOQ(fM) {
		if (aO6 === fM) return !1;
		if (-1 === (aO6 = fM)) yN = 0, aO.aBV(yN, 0);
		else {
			if (ad.hI(fM)) return aOM = ad.fa(fM), l3 = ah.hk[aOM] - ah.a7z[aOM], (4 !== yN || l3 !== aOL) && (yN = 4, aOL = l3, aO.aBV(yN, l3), !0);
			if (ad.fZ(fM)) return 3 !== yN && (yN = 3, aO.aBV(yN, 0), !0);
			if (ad.fn(fM)) return 2 !== yN && (yN = 2, aO.aBV(yN, 0), !0);
			var l3 = bQ.lt.aA8(bM.hn, bM.ho);
			if (-1 === l3) return 1 !== yN && (yN = 1, aO.aBV(yN, 0), !0);
			fM = bQ.z.aB9[l3];
			if (aOM = bQ.z.mx[l3], aON = bQ.z.my[l3] >> 3, 5 === yN && fM === aOL) return !1;
			yN = 5, aOL = fM, aO.aBV(yN, fM)
		}
		return !0
	}
	this.dt = function() {
		aON = aOM = aOL = yN = 0, aO6 = -1
	}, this.en = function(c2) {
		var i0;
		!c2 && bM.u0() || (c2 = bP.hz(bM.hn), i0 = bP.i1(bM.ho), bP.i2(c2, i0) ? (c2 = bP.g5(c2, i0), aOQ(bP.fY(c2))) : aOQ(-1))
	}, this.nN = function() {
		var aOS, l3, aA6, aOR;
		if (0 !== yN && 2 !== yN)
			if (bM.u0()) {
				if (1 !== yN && 3 !== yN) {
					if (4 === yN) return void(l3 = ah.hk[aOM] - ah.a7z[aOM], aOL === l3 || (aOL = l3, aO.aBV(yN, l3)));
					(aA6 = bQ.lt.o6(aON, aOM)) < 0 ? (yN = 1, aO.aBV(yN, 0)) : (aOR = bQ.z.aB9[aA6]) !== aOL && (aOL = aOR, aO.aBV(yN, aOR))
				}
			} else if (1 === yN) - 1 !== (aA6 = bQ.lt.aA8(bM.hn, bM.ho)) && (yN = 5, aOL = bQ.z.aB9[aA6], aO.aBV(yN, aOL));
		else if (3 === yN) ad.hI(aO6) && (yN = 4, aOS = ad.fa(aO6), aOL = ah.hk[aOS] - ah.a7z[aOS], aO.aBV(yN, aOL));
		else if (4 === yN) {
			if (ad.hI(aO6)) return void(aOS = ad.fa(aO6), l3 = ah.hk[aOS] - ah.a7z[aOS], aOL === l3 || (aOL = l3, aO.aBV(yN, l3)));
			yN = 3, aO.aBV(yN, 0)
		} else - 1 === (aA6 = bQ.lt.aA8(bM.hn, bM.ho)) ? (yN = 1, aO.aBV(yN, 0)) : (aOR = bQ.z.aB9[aA6]) !== aOL && (aOL = aOR, aO.aBV(yN, aOR))
	}
}

function dg() {
	function aOU(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOc, h.readAsText(e))
	}

	function aOc(e) {
		var aOf;
		aE.a4P || (e = JSON.parse(e.target.result), aOf = aE.data = new a8z, aOg(e, aOf, "mapType", 0, 2), aOg(e, aOf, "mapProceduralIndex", 0, 255), aOg(e, aOf, "mapRealisticIndex", 0, 255), aOg(e, aOf, "mapSeed", 0, 16383), function(aOe, aOf, hH,
				max) {
				aOe = aOe[hH];
				aOf[hH] = aOm(aOe) ? aOe.slice(0, max) : aOf[hH]
			}(e, aOf, "mapName", 20), function(aOe, aOf, hH) {
				var aNq;
				2 === aOf.mapType && (!aOm(aOe = aOe[hH]) || aOe.length <= 20 ? aOf.mapType = 0 : ((aNq = new Image).onload = function() {
					bC.aOn.aOo(aNq, 1), aNq.onload = null, aNq = null
				}, aNq.src = aOe))
			}(e, aOf, "canvas"), aOg(e, aOf, "passableWater", 0, 1), aOg(e, aOf, "passableMountains", 0, 1), aOg(e, aOf, "playerCount", 1, 512), aOg(e, aOf, "humanCount", 1, 1), aOg(e, aOf, "selectedPlayer", 0, 0), aOg(e, aOf, "gameMode", 0, 1),
			aOg(e, aOf, "playerMode", 0, 0), aOg(e, aOf, "battleRoyaleMode", 0, 0), aOg(e, aOf, "numberTeams", 0, 8), aOg(e, aOf, "isZombieMode", 0, 0), aOg(e, aOf, "isContest", 0, 0), aOg(e, aOf, "isReplay", 0, 0), aOj(e, aOf, "elo", 16, 2,
				16383), aOg(e, aOf, "colorsType", 0, 1), aOg(e, aOf, "colorsPersonalized", 0, 1), aOj(e, aOf, "colorsData", 32, 512, 262143), aOg(e, aOf, "selectableColor", 0, 1), aOj(e, aOf, "teamPlayerCount", 16, 9, 512), aOg(e, aOf,
				"neutralBots", 0, 1), aOg(e, aOf, "botDifficultyType", 0, 3), aOg(e, aOf, "botDifficultyValue", 0, 15), aOj(e, aOf, "botDifficultyTeam", 8, 9, 15), aOj(e, aOf, "botDifficultyData", 8, 512, 15), aOg(e, aOf, "spawningType", 0, 2),
			aOg(e, aOf, "spawningSeed", 0, 16383), aOj(e, aOf, "spawningData", 16, 1024, 4095), aOg(e, aOf, "selectableSpawn", 0, 1), aOg(e, aOf, "playerNamesType", 0, 2),
			function(aOe, aOf, hH, size, max) {
				var a72 = aOe[hH];
				if (Array.isArray(a72)) {
					for (var a73 = new Array(size), fi = Math.min(a72.length, size), aC = 0; aC < fi; aC++) a73[aC] = aOm(a72[aC]) ? a72[aC].slice(0, max) : "";
					a73.fill("", fi), aOf[hH] = a73
				}
			}(e, aOf, "playerNamesData", 512, 20), aOg(e, aOf, "selectableName", 0, 1), aOg(e, aOf, "aIncomeType", 0, 2), aOg(e, aOf, "aIncomeValue", 0, 255), aOj(e, aOf, "aIncomeData", 8, 512, 255), aOg(e, aOf, "tIncomeType", 0, 2), aOg(e, aOf,
				"tIncomeValue", 0, 255), aOj(e, aOf, "tIncomeData", 8, 512, 255), aOg(e, aOf, "iIncomeType", 0, 2), aOg(e, aOf, "iIncomeValue", 0, 255), aOj(e, aOf, "iIncomeData", 8, 512, 255), aOg(e, aOf, "sResourcesType", 0, 2), aOg(e, aOf,
				"sResourcesValue", 0, 2047), aOj(e, aOf, "sResourcesData", 16, 512, 2047), u.y(), u.z.vW[0] = 0, u.v(19))
	}

	function aOg(aOe, aOf, hH, min, max) {
		aOe = aOe[hH];
		aOf[hH] = "number" == typeof aOe && min <= aOe && aOe <= max ? Math.floor(aOe) : aOf[hH]
	}

	function aOm(pW) {
		return "string" == typeof pW
	}

	function aOj(aOe, aOf, hH, aOp, size, max) {
		var a72 = aOe[hH];
		if (Array.isArray(a72)) {
			for (var a73 = new(8 === aOp ? Uint8Array : 16 === aOp ? Uint16Array : Uint32Array)(size), fi = Math.min(a72.length, size), aC = 0; aC < fi; aC++) a73[aC] = bO.iu(a72[aC], 0, max);
			aOf[hH] = a73
		}
	}
	this.aOT = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aOU, input.click()
	}, this.aOV = function() {
		for (var aOY, aHQ, a9Z = aE.data, keys = Object.keys(a9Z), aOW = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9Z[key] instanceof Uint8Array || a9Z[key] instanceof Uint16Array || a9Z[key] instanceof Uint32Array ? aOW[key] = Array.from(a9Z[key]) : aOW[key] = a9Z[key]
		}
		aOW.canvas = 2 === aOW.mapType && aOW.canvas ? aOW.canvas.toDataURL() : null, aOY = aOW, aOY = JSON.stringify(aOY, null, 2), aOY = new Blob([aOY], {
			type: "application/json"
		}), (aHQ = document.createElement("a")).href = URL.createObjectURL(aOY), aHQ.download = "tt_scenario.json", aHQ.click()
	}
}

function cg() {
	var aOq, aOr, size, kD, iS, aOs;

	function aOt(player) {
		return player < aE.l4 ? aOq * player : aOq * aE.l4 + aOr * (player - aE.l4)
	}
	this.dt = function() {
		aOq = aE.l4 < 16 ? 12 : 8, aOr = 4;
		var fi = aOt(aE.ff);
		size = new Uint8Array(aE.ff), kD = new Uint16Array(fi), iS = new Uint32Array(fi), aOs = new Uint8Array(fi)
	}, this.sw = function(aCa, aOu) {
		var aOv = this.hl(aCa, aOu),
			aOu = (this.hj(aCa, aOu, 0), bD.h4.h7(aCa, aOv));
		bg.h8(aCa, aOv - aOu, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNd = function(player, aOu) {
		var aOy, aOu = function(player, aOu) {
			var aC, lz = aOt(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kD[lz + aC] === aOu) return aC;
			return size[player]
		}(player, aOu);
		aOu !== size[player] && (aOy = iS[aOt(player) + aOu], this.h9(player, aOu), this.er(player, aOy, aE.ff))
	}, this.kP = function(player, aOu) {
		for (var lz = aOt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aOu) return !0;
		return !1
	}, this.ki = function(player) {
		return player < aE.l4 ? size[player] < aOq : size[player] < aOr
	}, this.gp = function(player) {
		return size[player]
	}, this.gu = function(player, aC) {
		return kD[aOt(player) + aC]
	}, this.gv = function(player, aC) {
		return iS[aOt(player) + aC]
	}, this.hl = function(player, aOu) {
		for (var lz = aOt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aOu) return iS[lz + aC];
		return 0
	}, this.aNU = function(player) {
		for (var lz = aOt(player), gA = 0, aC = size[player] - 1; 0 <= aC; aC--) gA += iS[lz + aC];
		return gA
	}, this.hj = function(player, aOu, aOy) {
		for (var lz = aOt(player), aC = size[player] - 1; 0 <= aC; aC--) kD[lz + aC] === aOu && (iS[lz + aC] = aOy)
	}, this.hU = function(player, aC, aOy) {
		iS[aOt(player) + aC] = Math.max(aOy, 0)
	}, this.hV = function(player, aC) {
		aOs[aOt(player) + aC] = 0
	}, this.gw = function(player, aC) {
		return aOs[aOt(player) + aC]
	}, this.er = function(player, aOy, aOu) {
		ap.jr.kg[player] = ap.jr.kg[aOu] = 8, bD.h4.a7u(aOu) && bg.nc[6 - bD.h4.kR(player)]++;
		for (var lz = aOt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aOu) return iS[lz + aC] += aOy, void(iS[lz + aC] = iS[lz + aC] > aE.a82 ? aE.a82 : iS[lz + aC]);
		kD[lz + size[player]] = aOu, iS[lz + size[player]] = aOy, aOs[lz + size[player]] = 1, size[player]++, aOu === aE.fS ? aO.a4d(player, 5) : player < aE.l4 && player === aE.fS && ag.aB3(aOu)
	}, this.h9 = function(player, eR) {
		var g1, lz;
		if (0 !== size[player])
			for (lz = aOt(player), size[player]--, g1 = eR; g1 < size[player]; g1++) kD[lz + g1] = kD[lz + g1 + 1], iS[lz + g1] = iS[lz + g1 + 1], aOs[lz + g1] = aOs[lz + g1 + 1]
	}, this.aNP = function(player) {
		for (var g1, lz, aNa = [], aC = am.la - 1; 0 <= aC; aC--)
			for (lz = aOt(am.lf[aC]), g1 = size[am.lf[aC]] - 1; 0 <= g1; g1--)
				if (kD[lz + g1] === player) {
					aNa.push(am.lf[aC]);
					break
				} return aNa
	}
}

function ch() {
	var aOz;

	function aP1(player) {
		var eQ, kj;
		return bD.h4.kR(player) && player < aE.l4 ? 0 : (eQ = aOz[bO.g9((aE.ff - 1) * ah.hW[player], aE.ko)], bi.l1() < 1920 && (eQ = Math.max(bO.g9(100 * (13440 - 6 * bi.l1()), 1920), eQ)), kj = af.kk(player), ah.hk[player] > kj && (eQ -= bO.g9(2 *
			eQ * (ah.hk[player] - kj), kj)), Math.min(Math.max(eQ, 0), 700))
	}

	function aPD(oJ) {
		for (var hW = ah.hW, lf = am.lf, aC = am.la - 1; 0 <= aC; aC--) {
			var hG = lf[aC];
			bD.h4.h7(hG, bO.g9(oJ * hW[hG], 32))
		}
	}

	function aPA() {
		var a12 = aE.fS;
		bR.gE[0] = ah.hk[a12] - ah.a7z[a12]
	}

	function aPC(eR) {
		var a12 = aE.fS,
			a12 = ah.hk[a12] - ah.a7z[a12] - bR.gE[0];
		af.aEf += a12, bg.nc[eR] += a12
	}
	this.aEf = 0, this.dz = function() {
		for (var fi = aE.ff, aC = (aOz = new Uint16Array(fi), 0); aC < fi; aC++) aOz[aC] = 100 + aP0(bO.g9(25600 * aC, fi - 4), 9)
	}, this.dt = function() {
		(this.aEf = 0) === aE.data.iIncomeType ? this.aG5 = aP1 : 1 === aE.data.iIncomeType ? this.aG5 = function(player) {
			return bO.g9(aE.data.iIncomeValue * aP1(player), 64)
		} : this.aG5 = function(player) {
			return bO.g9(aE.data.iIncomeData[player] * aP1(player), 64)
		}
	}, this.en = function() {
		if (bi.l1() % 10 == 9 && (af.aEf = 0, function() {
				aPA();
				for (var lf = am.lf, hk = ah.hk, aC = am.la - 1; 0 <= aC; aC--) {
					var hG = lf[aC],
						aPB = bO.g9(af.aG5(hG) * hk[hG], 1e4);
					bD.h4.h7(hG, Math.max(aPB, 1))
				}
				aPC(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aPA(), 1 === aE.data.aIncomeType)
						for (var hW = ah.hW, lf = am.lf, oJ = aE.data.aIncomeValue, aC = am.la - 1; 0 <= aC; aC--) {
							var hG = lf[aC];
							bD.h4.h7(hG, bO.g9(oJ * hW[hG], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hW = ah.hW, lf = am.lf, oJ = aE.data.aIncomeData, aC = am.la - 1; 0 <= aC; aC--) {
								var hG = lf[aC];
								bD.h4.h7(hG, bO.g9(oJ[hG] * hW[hG], 128))
							}
						}();
					aPC(18)
				}
			}(), bi.l1() % 100 == 99)) {
			if (aPA(), 0 === aE.data.tIncomeType) aPD(32);
			else if (1 === aE.data.tIncomeType) aPD(aE.data.tIncomeValue);
			else
				for (var hW = ah.hW, lf = am.lf, oJ = aE.data.tIncomeData, aC = am.la - 1; 0 <= aC; aC--) {
					var hG = lf[aC];
					bD.h4.h7(hG, bO.g9(oJ[hG] * hW[hG], 32))
				}
			aPC(8)
		}
	}, this.kk = function(player) {
		return Math.min(100 * ah.hW[player], aE.a8v)
	}, this.rv = function(player, rw) {
		bu.sI(player, rw, bR.gF[0], 0), bD.h4.h7(rw, bR.gF[0]), bg.sJ(player, rw), ag.aP3(player, bR.gF[0] + bR.gF[1]), ag.sK(rw, bR.gF[0]), bD.h4.nE(player)
	}, this.aP4 = function() {
		for (var fi = am.la, x6 = am.lf, lz = 0, a80 = ah.hk, aC = 0; aC < fi; aC++) lz += a80[x6[aC]];
		return lz
	}, this.aP5 = function(aP6) {
		for (var hG, fi = am.la, x6 = am.lf, lz = 0, a80 = ah.hk, fg = bj.fg, aC = 0; aC < fi; aC++) fg[hG = x6[aC]] === aP6 && (lz += a80[hG]);
		return lz
	}
}

function cj() {
	var aPH, aPI, aPJ, aPK, aPL, aPM, aPN, aPO, aPP, aPQ, aPR, aPS, aPT, aPU, aPV, aPW, aPX, aPY, aPa, aPb, aHJ, aPc, aPd, aPj, aPk, aPZ = null,
		aPf = 0,
		aPg = !1,
		aPh = new Float32Array(4),
		aPi = 0,
		aFA = 112,
		aPl = 0;

	function tc() {
		aPP = Math.floor(+i.iw), aPQ = Math.floor(.5 * aPP), aPZ.width = i.j, aPZ.height = i.k, aPa = aPZ.getContext("2d", {
			alpha: !0
		}), bD.t6.textAlign(aPa, 1), bD.t6.textBaseline(aPa, 1), aPa.imageSmoothingEnabled = !0
	}

	function aPm() {
		var aC, aPr;
		for (z2.font = bD.t6.t9(1, 100 * aPR), aPr = 80 / Math.floor(z2.measureText(bD.pa.a3i(aE.a82)).width), z2.font = bD.t6.t9(1, 100), aC = aE.ff - 1; 0 <= aC; aC--) aPO[aC] = 100 / Math.floor(z2.measureText(ah.a2u[aC]).width), aPN[aC] = Math
			.min(aPr, aPO[aC])
	}

	function aPs(aC) {
		return !aPl || (aC = ah.hk[aC]) < 1e6 ? 1 : aC < 1e7 ? aPh[0] : aPh[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aPq(io) {
		aPg = !1, aPf = bi.ei, aPY = !1, aPX = 1, aPV = aPW = 0, io.clearRect(0, 0, i.j, i.k);
		for (var aPy, aPz, aC, aQ0, fontSize, aQ1, o7 = jN / ix, o8 = jO / ix, oK = (i.j + jN) / ix, oL = (i.k + jO) / ix, aQ2 = 0 !== ah.ng[aE.fS] && !bD.h4.kR(aE.fS), g1 = am.la - 1; 0 <= g1; g1--) aC = am.lf[g1], (fontSize = Math.floor(aPU * ix *
			aPs(aC) * aPN[aC] * aPL[aC])) < aPT || aPP <= fontSize || aPJ[aC] + aPL[aC] > o7 && aPJ[aC] < oK && aPK[aC] + aPM[aC] > o8 && aPK[aC] < oL && (aPy = Math.floor(i.j * (aPJ[aC] + aPL[aC] / 2 - o7) / (oK - o7)), aPz = Math.floor(i.k * (
			aPK[aC] + aPM[aC] / 2 - o8) / (oL - o8) - .1 * fontSize), aQ0 = ad.aD6[aC], io.font = bD.t6.t9(1 === ah.a7q[aC] ? 4 : 1, fontSize), io.fillStyle = aQ3(fontSize, aQ0 % 2), aPl ? aQ4(io, aC, fontSize, aPy, aPz, aQ0) : aQ5(aC,
			fontSize, aPy, aPz, io), aPY = !0, 0 < aHJ[aC] ? function(aPy, aPz, fontSize, aC, io) {
			0 === kp[aC] ? ak.q5.a3Z(aPb[aC]) ? (function(aPy, aPz, fontSize, player, s7, io) {
				for (var a1Z = aPz, im = (io.globalAlpha = aQD(fontSize), aPs(player) * (aPl ? aPi : aPO[player])), a1Y = aPy - .5 * fontSize / im - .9 * fontSize, g2 = 0; g2 < 2; g2++) io.fillText(ak.q5.a3R(s7), a1Y, a1Z), a1Y =
					aPy + .5 * fontSize / im + .9 * fontSize;
				io.globalAlpha = 1
			}(aPy, aPz, fontSize, aC, aPb[aC], io), aQ7(aPy, aPz, fontSize, 0, 0, io)) : ak.q5.a3b(aPb[aC]) ? (aQG(aPy, aPz, fontSize, aPb[aC], 0, io), aQ7(aPy, aPz, fontSize, 0, 1, io)) : (aQG(aPy, aPz, fontSize, aPb[aC], 1, io), aQ7(
				aPy, aPz, fontSize, 1, 0, io)) : aQG(aPy, aPz, fontSize, aPb[aC], 0, io)
		}(aPy, aPz, fontSize, aC, io) : 0 === kp[aC] && aQ7(aPy, aPz, fontSize, 0, 0, io), aQ2 && (0 < aHJ[aC + aE.ff] || 0 < aHJ[aC + 2 * aE.ff] || 0 < aHJ[aC + 3 * aE.ff] || 0 < aHJ[aC + 4 * aE.ff]) && function(aPy, aPz, fontSize, aC, io) {
			var es, hB = -1;
			for (es = 4; 1 <= es; es--) 0 < aHJ[aC + es * aE.ff] && hB++;
			for (es = 1; es < 5; es++) 0 < aHJ[aC + es * aE.ff] && (! function(aPy, aPz, fontSize, es, aC, aQB, ej, io) {
				var a7G;
				if (1 === es) {
					aC = aPb[aC + aE.ff];
					if (!ak.q5.a3a(aC)) return function(aPy, aPz, fontSize, s7, aQB, io) {
						io.globalAlpha = aQD(fontSize);
						aPy -= .534 * aQB * fontSize, aQB = aPz + 1.59 * fontSize;
						io.font = bD.t6.t9(0, .785 * fontSize), io.fillText(ak.q5.a3R(s7), aPy, aQB), io.globalAlpha = 1
					}(aPy, aPz, fontSize, aC, aQB, io);
					a7G = ak.a11.a30[aC - 1024 + ak.q5.a3C]
				} else a7G = 2 === es ? aM.a9o()[4].canvas[+(ej < 255)] : (3 === es ? aM.a9o()[5] : aM.a9o()[6]).canvas[0];
				aC = ak.a11.a31, ej = .8 * fontSize / aC, es = aPy - .5 * ej * aC - .534 * aQB * fontSize, aPy = aPz + 1.4 * ej * aC;
				io.setTransform(ej, 0, 0, ej, es, aPy), io.globalAlpha = aQD(fontSize), io.drawImage(a7G, 0, 0), io.globalAlpha = 1, io.setTransform(1, 0, 0, 1, 0, 0)
			}(aPy, aPz, fontSize, es, aC, hB, aHJ[aC + es * aE.ff], io), hB -= 2)
		}(aPy, aPz, fontSize, aC, io), (aQ1 = aPR * fontSize) < aPT || (io.font = bD.t6.t9(1, aQ1), aPz += Math.floor(.78 * fontSize), aPl ? aQ5(aC, aQ1, aPy, aPz, io) : aQ4(io, aC, aQ1, aPy, aPz, aQ0)))
	}

	function aQ5(aC, fontSize, fp, fr, io) {
		var ___id = aC;
		var showName = aC < aE.l4 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hk[___id] - ah.a7z[___id]) :
			"";
		if (showName) io.fillText(ah.a2u[aC], fp, fr), aC < aE.l4 && 2 !== ah.a7q[aC] || (aC = fontSize / aPO[aC], io.fillRect(fp - .5 * aC, fr + bD.t6.a3S * fontSize, aC, Math.max(1, .1 * fontSize)));
		aPl && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (io.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			io.fillText(__fx.utils.getDensity(___id), fp, showName ? fr + fontSize : fr),
			eliminationEstimate && io.fillText(eliminationEstimate, fp, showName ? fr + 2 * fontSize : fr + fontSize)
		);
	}

	function aQ4(io, aC, fontSize, aPy, aPz, aQ0) {
		var ej, a7z = ah.a7z[aC],
			aQA = bD.pa.a3i(ah.hk[aC] - a7z);

		function drawDensity() {
			var eliminationEstimate;
			!aPl && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (io.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), io.fillText(__fx.utils.getDensity(aC), aPy, aPz + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hk[aC] - a7z) : "") && io.fillText(eliminationEstimate, aPy, aPz + 2 * fontSize)
		}
		a7z ? (ej = io.fillStyle, io.fillStyle = aQ3(fontSize, 2 + aQ0 % 2), io.fillText(aQA, aPy, aPz), io.fillStyle = ej) : aQ0 >> 1 & 1 ? (io.lineWidth = .05 * fontSize, io.strokeStyle = aQ3(fontSize, aQ0 % 2), io.strokeText(aQA, aPy, aPz)) : (1 <
			aQ0 && (io.lineWidth = .12 * fontSize, io.strokeStyle = aQ3(fontSize, aQ0), io.strokeText(aQA, aPy, aPz)), io.fillText(aQA, aPy, aPz)), drawDensity()
	}

	function aQ7(aPy, aPz, fontSize, aQB, aQC, io) {
		var aAJ = .95 * fontSize / aPd,
			aPy = aPy - .5 * aAJ * aPc + .8 * aQB * fontSize,
			aQB = aPz - 1.76 * aAJ * aPd - (.35 - bD.t6.a3S + .7) * aQC * fontSize;
		io.setTransform(aAJ, 0, 0, aAJ, aPy, aQB), io.globalAlpha = aQD(fontSize), io.drawImage(ac.get(4), 0, 0), io.globalAlpha = 1, io.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aQG(aPy, aPz, fontSize, s7, aQB, io) {
		var ih, a1Y, aAJ;
		io.globalAlpha = aQD(fontSize), ak.q5.a3a(s7) ? (ih = ak.a11.a31, io.setTransform(aAJ = 1.1 * fontSize / ih, 0, 0, aAJ, a1Y = aPy - .5 * aAJ * ih - .8 * aQB * fontSize, aAJ = aPz - 1.55 * aAJ * ih), io.drawImage(ak.a11.a30[s7 - 1024 + ak.q5
			.a3C], 0, 0), io.setTransform(1, 0, 0, 1, 0, 0)) : (a1Y = aPy - .8 * aQB * fontSize, aAJ = aPz - (.35 - bD.t6.a3S + 1) * fontSize, io.fillText(ak.q5.a3R(s7), a1Y, aAJ)), io.globalAlpha = 1
	}

	function aQ3(fontSize, aQ0) {
		return aPQ <= fontSize && fontSize < aPP ? bj.aQI[aQ0] + aQD(fontSize).toFixed(3) + ")" : bj.aQJ[aQ0]
	}

	function aQD(fontSize) {
		return aPQ <= fontSize && fontSize < aPP ? 1 - (fontSize - aPQ) / (aPP - aPQ) : 1
	}

	function aQS(im, j) {
		return 1 + Math.floor(aPS * im * j)
	}

	function aQP(aC) {
		for (var left = aPJ[aC], g1 = aPJ[aC] - ah.jc[aC] - 1; 0 <= g1; g1--)
			if (!aQU(aC, --left, aPK[aC], aPM[aC])) {
				left++;
				break
			} var right = aPJ[aC];
		for (g1 = ah.jd[aC] - aPJ[aC] - aPL[aC]; 0 <= g1; g1--)
			if (!aQU(aC, ++right + aPL[aC] - 1, aPK[aC], aPM[aC])) {
				right--;
				break
			} var fp = Math.floor((left + right) / 2),
			top = aPK[aC];
		for (g1 = aPK[aC] - ah.je[aC] - 1; 0 <= g1; g1--)
			if (!aQV(aC, fp, --top, aPL[aC])) {
				top++;
				break
			} var bottom = aPK[aC];
		for (g1 = ah.jf[aC] - aPK[aC] - aPM[aC]; 0 <= g1; g1--)
			if (!aQV(aC, fp, ++bottom + aPM[aC] - 1, aPL[aC])) {
				bottom--;
				break
			} var fr = Math.floor((top + bottom) / 2);
		aQM(aC, fp, fr, aPL[aC], aPM[aC]) && (aPJ[aC] = fp, aPK[aC] = fr)
	}

	function aQM(player, fp, fr, j, k) {
		fl = Math.floor(.2 * j);
		for (var fl, es = fp + j - 1; fp <= es; es--)
			if (!aQU(player, es, fr, k)) return;
		for (es = fr + k - 1 - (fl = (fl = Math.floor(.25 * k)) < 1 ? 1 : fl); fr + fl <= es; es--)
			if (!aQV(player, fp, es, j)) return;
		return 1
	}

	function aQU(player, fp, fr, k) {
		return ad.a2Q(player, 4 * (fr * bV.ft + fp)) && ad.a2Q(player, 4 * ((fr + k - 1) * bV.ft + fp))
	}

	function aQV(player, fp, fr, j) {
		return ad.a2Q(player, 4 * (fr * bV.ft + fp)) && ad.a2Q(player, 4 * (fr * bV.ft + fp + j - 1))
	}
	this.dt = function() {
		if (aPl = bm.buffer.data[7].value || 8 === aE.lM, aPY = !1, aPU = .88, aPR = .5, aPS = 1.8, aPT = 12 - 3 * bm.buffer.data[9].value, aPI = aPH = 0, aPJ = new Uint16Array(aE.ff), aPK = new Uint16Array(aE.ff), aPL = new Uint16Array(aE.ff),
			aPM = new Uint16Array(aE.ff), aPN = new Float32Array(aE.ff), aPO = new Float32Array(aE.ff), aPb = new Uint16Array(2 * aE.ff), aHJ = new Uint8Array(5 * aE.ff), aPj = new Uint8Array(aE.ff), aPk = new Uint8Array(aE.ff), aPZ = aPZ ||
			document.createElement("canvas"), tc(), aPW = aPV = 0, aPX = 1, aPl) {
			var aC, aPr;
			for (aPm(), z2.font = bD.t6.t9(1, 100), aPr = 100 / Math.floor(z2.measureText("900 000").width), aC = aE.ff - 1; 0 <= aC; aC--) aPN[aC] = Math.min(aPr, 2 * aPO[aC]);
			aPi = aPr, aPh[0] = 100 / (aPr * Math.floor(z2.measureText("5 000 000").width)), aPh[1] = 100 / (aPr * Math.floor(z2.measureText("50 000 000").width)), aPh[2] = 100 / (aPr * Math.floor(z2.measureText("500 000 000").width)), aPh[3] =
				100 / (aPr * Math.floor(z2.measureText("1 000 000 000").width))
		} else aPm();
		! function() {
			var aC;
			for (aC = aE.ff - 1; 0 <= aC; aC--) ah.hW[aC] < 12 ? (aPJ[aC] = ah.jc[aC] + 1, aPK[aC] = ah.je[aC] + 1, aPL[aC] = 1, aPM[aC] = 1) : (aPJ[aC] = ah.jc[aC], aPK[aC] = ah.je[aC] + 1, aPL[aC] = 4, aPM[aC] = 2);
			if (aE.i7)
				for (aC = 0; aC < aE.l4; aC++) aPL[aC] = 0;
			aPc = ac.get(4).width, aPd = ac.get(4).height
		}()
	}, this.aP3 = function(hG, a9X) {
		a9X > 18 * ah.hW[hG] ? (aPk[hG] = 6, ad.aD6[hG] = 2 + ad.aD6[hG] % 2) : (aPj[hG] = 4, (ad.aD6[hG] < 2 || 3 < ad.aD6[hG]) && (ad.aD6[hG] = 6 + ad.aD6[hG] % 2))
	}, this.sK = function(hG, a9X) {
		a9X > 6 * ah.hW[hG] ? (aPk[hG] = 6, ad.aD6[hG] = 4 + ad.aD6[hG] % 2) : (aPj[hG] = 4, (ad.aD6[hG] < 4 || 5 < ad.aD6[hG]) && (ad.aD6[hG] = 8 + ad.aD6[hG] % 2))
	}, this.resize = function() {
		tc(), aPq(aPa)
	}, this.a8r = function() {
		for (var aC = 0; aC < aE.l4; aC++) ah.jd[aC] - ah.jc[aC] != 3 || ah.jf[aC] - ah.je[aC] != 3 ? (aPJ[aC] = ah.jc[aC] + (ah.jd[aC] !== ah.jc[aC] ? 1 : 0), aPK[aC] = ah.je[aC], aPL[aC] = 1, aPM[aC] = 1) : (aPJ[aC] = ah.jc[aC], aPK[aC] = ah
			.je[aC] + 1, aPL[aC] = 4, aPM[aC] = 2)
	}, this.sx = function(player, eR, aPt) {
		! function(player, eR, aPt) {
			player += eR * aE.ff;
			0 === eR ? aPb[player] === aPt && 0 < aHJ[player] ? aHJ[player] = 0 : (aPb[player] = aPt, aHJ[player] = ak.q5.a3Z(aPt) ? 255 : 64) : 1 === eR ? (aHJ[player] = 64, aPb[player] = aPt) : aHJ[player] = aPt
		}(player, eR, aPt), 2 === aE.a4P && this.nS(!0)
	}, this.z1 = function() {
		aPY && (1 !== aPX ? (z2.imageSmoothingEnabled = !0, z2.setTransform(aPX, 0, 0, aPX, 0, 0), z2.drawImage(aPZ, -aPV / aPX, -aPW / aPX), z2.setTransform(1, 0, 0, 1, 0, 0), z2.imageSmoothingEnabled = !1) : z2.drawImage(aPZ, -aPV, -aPW))
	}, this.aDs = function(j6, j9) {
		aPV += j6, aPW += j9
	}, this.a5x = function(j6, j9) {
		ag.aDs(j6, j9)
	}, this.zoom = function(a6p, mJ, mK) {
		aPX *= a6p, aPV = (aPV + mJ) * a6p - mJ, aPW = (aPW + mK) * a6p - mK
	}, this.aNQ = function(player) {
		var jc = ah.jc[player],
			jd = ah.jd[player],
			je = ah.je[player],
			jf = ah.jf[player],
			jH = bP.hz(0),
			jI = bP.i1(0),
			jJ = bP.hz(i.j),
			jK = bP.i1(i.k);
		jc < jJ && jH < jd && je < jK && jI < jf && (aPL[player] = 0, aPg = !0)
	}, this.nS = function(c2) {
		return !(!aPg && !c2 && bi.ei < aPf + (1 === aPX && 0 === aPV && 0 === aPW && (aE.a9L() || aE.i7 || 2 === aE.a4P) ? 1e3 : aFA) || (aPq(aPa), 0))
	}, this.aPw = function(aC) {
		return aPs(aC) * aPN[aC]
	}, this.aPx = function(player) {
		return aPN[player]
	}, this.en = function() {
		bi.l1() % 10 == 9 && (aPg = aPg || aE.a9N() && !aE.a9L()), !aE.a9L() && 4 <= ++aPI && function() {
			var aC, g1, g2;
			for (aPI = 0, g2 = 4; 1 <= g2; g2--)
				for (g1 = am.la - 1; 0 <= g1; g1--) aC = am.lf[g1] + g2 * aE.ff, 0 < aHJ[aC] && aHJ[aC] < 255 && aHJ[aC]--;
			if (2 !== aE.a4P)
				for (g1 = am.la - 1; 0 <= g1; g1--) aC = am.lf[g1], 0 < aHJ[aC] && aHJ[aC] < 255 && aHJ[aC]--
		}();
		var aC, g1, fi = Math.floor(.1 * am.la);
		for (fi = (fi = fi < 8 ? 8 : fi) > am.la ? am.la : fi, aC = aPH + fi - 1; aPH <= aC; aC--) g1 = aC % am.la, ! function(aC) {
			var im = aPs(aC) * aPN[aC];
			0 < aPL[aC] && aQM(aC, aPJ[aC], aPK[aC], aPL[aC], aPM[aC]) ? ! function(aC) {
				for (var fp, fr, j, k, fM = !1, g2 = 0; g2 < 8; g2++) {
					if (j = aPL[aC] + 2, k = aPM[aC] + 2, j > ah.jd[aC] - ah.jc[aC] + 1 || k > ah.jf[aC] - ah.je[aC] + 1) return fM;
					if (fp = aPJ[aC] - 1, fr = aPK[aC] - 1, !aQM(aC, fp, fr, j, k)) return fM;
					aPJ[aC] = fp, aPK[aC] = fr, aPL[aC] = j, aPM[aC] = k, fM = !0
				}
				return fM
			}(aC) && function(aC, im) {
				for (var fp, fr, j, k, fM = !1, aHS = aPL[aC], oJ = 1 + Math.floor(.02 * aHS), g2 = 1; g2 < 5; g2++) {
					if ((j = aHS + g2 * oJ) > ah.jd[aC] - ah.jc[aC] + 1) return fM;
					if ((k = aQS(im, j)) > ah.jf[aC] - ah.je[aC] + 1) return fM;
					fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - j)), fr = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - k)), aQM(aC, fp, fr, j, k) && (aPJ[aC] = fp, aPK[aC] = fr, aPL[
						aC] = j, aPM[aC] = k, fM = !0)
				}
				return fM
			}(aC, im) && aQP(aC) : ! function(aC, im) {
				var k, fp = aPJ[aC] + 1,
					fr = aPK[aC] + 1,
					j = aPL[aC] - 2;
				for (;;) {
					if (j < 1) {
						aPL[aC] = 0;
						break
					}
					if (k = aQS(im, j), aQM(aC, fp, fr, j, k)) return aPJ[aC] = fp, aPK[aC] = fr, aPL[aC] = j, aPM[aC] = k, 1;
					fp++, fr++, j -= 2
				}
				return
			}(aC, im) ? function(aC, im) {
				var fp, fr, j, k, g2, oP, kK = ah.jd[aC] - ah.jc[aC] + 1,
					aQT = Math.floor(.02 * kK);
				for (oP = -6 * (aQT = aQT < 1 ? 1 : aQT), g2 = kK; oP <= g2; g2 -= aQT)
					if (k = aQS(im, j = 0 < g2 ? g2 : 1), fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - j)), fr = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - k)), aQM(aC, fp, fr, j, k))
						return aPJ[aC] = fp, aPK[aC] = fr, aPL[aC] = j, aPM[aC] = k
			}(aC, im) : aQP(aC)
		}(am.lf[g1]);
		aPH = (aPH += fi) % am.la
	}, this.nM = function() {
		var aC, hG, a3X, a3Y;
		if (bi.l1() % 4 == 1)
			for (aC = am.la - 1; 0 <= aC; aC--) hG = am.lf[aC], ad.aD6[hG] < 2 || ((a3X = Math.max(aPj[hG] - 1, 0)) === (a3Y = Math.max(aPk[hG] - 1, 0)) ? 0 === a3X && (ad.aD6[hG] %= 2) : 0 === a3Y && ad.aD6[hG] < 6 && (ad.aD6[hG] += 4), aPj[
				hG] = a3X, aPk[hG] = a3Y)
	}, this.aB3 = function(player) {
		var aC = player + 2 * aE.ff,
			ej = aHJ[aC];
		return 0 < ej && (aO.a4X(50, player), aHJ[aC] = 0, 255 === ej)
	}, this.aA3 = function(player) {
		return 255 === aHJ[player + 2 * aE.ff]
	}
}

function cl() {
	var aQW, aQX, aQY;
	this.dt = function() {
		aQW =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQX =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQY = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aBL = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIk = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQW.length - 1; 0 <= aC; aC--)
			for (var g1 = aBL.length - 1; 0 <= g1; g1--) aQW[aC] = aQW[aC].replace(aBL[g1], aIk[g1]);
		if (__fx.settings.realisticNames) aQW = realisticNames;
	}, this.a98 = function() {
		var fi = aE.l4,
			a2u = ah.a2u,
			a58 = ah.a58,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fi)
			for (var aC = 0; aC < fi; aC++) a2u[aC] = a58[aC] = "Player " + az.kL(1e3);
		else
			for (aC = 0; aC < fi; aC++) a2u[aC] = a58[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lM) {
			for (var eQ = az.random(), aQe = aQY, aQf = aQX, iS = aF.iS, fi = aQe.length, lz = aE.data.teamPlayerCount[7], a2u = ah.a2u, a58 = ah.a58, aC = lz - 1; aC >= aE.l4; aC--) a2u[aC] = a58[aC] = aQe[(aC + eQ) % fi];
			for (fi = aQf.length - 1, aC = lz; aC < aE.ff; aC++) a2u[aC] = a58[aC] = aQf[iS[aC] ? fi : aC % fi]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fi = aE.ff, a2u = ah.a2u, a58 = ah.a58, playerNamesData = aE.data.playerNamesData, aC = aE.l4; aC < fi; aC++) a2u[aC] = a58[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2u = ah.a2u, a58 = ah.a58, aC = aE.l4; aC < aE.ff; aC++) a2u[aC] = a58[aC] = "Bot " + az.kL(1e3)
		} : function() {
			for (var aQg = aQW, fi = aQg.length, eQ = az.random(), a2u = ah.a2u, a58 = ah.a58, aC = aE.l4; aC < aE.ff; aC++) a2u[aC] = a58[aC] = aQg[(aC + eQ) % fi]
		})()
	}
}

function d4() {
	this.aQh = [], this.aQi = [], this.dt = function() {
		this.aQh = [], this.aQi = []
	}, this.en = function() {
		0 <= this.aQh.length && this.aQj(this.aQh), 0 <= this.aQi.length && this.aQj(this.aQi)
	}, this.aQj = function(h) {
		for (var g2 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ei--, h[aC].ei <= 0) {
				g2 = aC;
				break
			} for (aC = g2; 0 <= aC; aC--) h.shift()
	}, this.a9w = function(id, x6, aQk) {
		return this.g3(this.aQh, id, x6, aQk)
	}, this.aQl = function(id, x6, aQk) {
		return this.g3(this.aQi, id, x6, aQk)
	}, this.g3 = function(h, id, x6, aQk) {
		return ! function(h, id, x6) {
			var aC, ib;
			for (aC = x6.length - 1; 0 <= aC; aC--)
				for (ib = h.length - 1; 0 <= ib; ib--)
					if (h[ib].player === x6[aC] && id === h[ib].id) return 1;
			return
		}(h, id, x6) && (aQk && function(h, id, x6) {
			var aC;
			for (aC = x6.length - 1; 0 <= aC; aC--) h.push({
				player: x6[aC],
				id: id,
				ei: 384
			})
		}(h, id, x6), !0)
	}
}

function ck() {
	this.a58 = new Array(aE.ff), this.a2u = new Array(aE.ff), this.a7q = new Uint8Array(aE.ff), this.ng = new Uint8Array(aE.ff), this.jc = new Uint16Array(aE.ff), this.je = new Uint16Array(aE.ff), this.jd = new Uint16Array(aE.ff), this.jf =
		new Uint16Array(aE.ff), this.hW = new Uint32Array(aE.ff), this.a20 = new Uint32Array(aE.ff), this.hk = new Uint32Array(aE.ff), this.hA = null, this.hO = null, this.hP = null, this.g7 = null, this.sn = new Uint16Array(aE.ff), this.k7 =
		new Uint16Array(aE.ff), this.k8 = new Uint16Array(aE.ff), this.a53 = new Uint16Array(aE.ff), this.a51 = new Uint8Array(aE.ff), this.a7z = new Uint16Array(aE.ff), this.dt = function() {
			this.a58.fill(""), this.a2u.fill(""), this.a7q.fill(0), this.ng.fill(0), this.jc.fill(0), this.je.fill(0), this.jd.fill(0), this.jf.fill(0), this.hW.fill(0), this.a20.fill(0), this.hk.fill(0), this.hA = new Array(aE.ff), this.hO =
				new Array(aE.ff), this.hP = new Array(aE.ff), this.g7 = new Array(aE.ff), this.sn.fill(0), this.k7.fill(0), this.k8.fill(0), this.a53.fill(0), this.a51.fill(0), this.a7z.fill(0)
		}
}

function d2() {
	this.aHt = function(player) {
		aH.nf(player), aE.a4R++, ah.a7q[player] = 2, ah.a53[player] = bl.a5H.aNZ(), player === aE.fS && (aY.show(!1, !1), aX.aFr(), bU.a4B.a4z()), ag.aB3(player)
	}
}

function cd() {
	this.lf = null, this.la = 0, this.a9C = function() {
		for (this.la = 0, aC = aE.ff - 1; 0 <= aC; aC--) 0 !== ah.ng[aC] && this.la++;
		this.lf = new Uint16Array(this.la);
		for (var fi = 0, aC = 0; aC < aE.ff; aC++) 0 !== ah.ng[aC] && (this.lf[fi++] = aC)
	}, this.nL = function() {
		for (var hW = ah.hW, a20 = ah.a20, a51 = ah.a51, lf = am.lf, aC = am.la - 1; 0 <= aC; aC--) {
			var hG = lf[aC],
				ej = hW[hG],
				lz = a20[hG];
			ej <= bO.g9(lz, 4) ? al.e1(hG) : lz <= ej ? 250 <= (a20[hG] = ej) && (a51[hG] = 1) : a20[hG] = lz - Math.max(1, bO.g9(lz - ej, 1e3))
		}
		this.aQp()
	}, this.aQp = function() {
		for (var ng = ah.ng, ly = this.lf, aGZ = this.la, aC = aGZ - 1; 0 <= aC; aC--) 0 === ng[ly[aC]] && (ly[aC] = ly[--aGZ]);
		this.la = aGZ
	}
}

function ce() {
	var aQq = new Uint16Array(aE.ff),
		aQr = 0;

	function aQv(aBA, aQt) {
		var es = bi.l1();
		return 3213 <= es ? 4 + bO.g9(100 * aQt, af.kk(aBA)) : (aBA = 1 + bO.g9(aE.ko, 300), es < 357 ? 2 + bO.g9(100 * aQt, aBA) : es < 714 ? 2 + bO.g9(100 * aQt, 4 * aBA) : es < 1071 ? 2 + bO.g9(100 * aQt, 10 * aBA) : es < 2142 ? 2 + bO.g9(100 *
			aQt, 30 * aBA) : 2 + bO.g9(100 * aQt, 100 * aBA))
	}

	function aQu(aBA) {
		return aE.lO || 4284 <= bi.l1() || bD.h4.kR(aBA)
	}
	this.dt = function() {
		aQq.fill(0), aQr = 15
	}, this.iN = function(rw) {
		var player = aE.fS;
		return !!bD.h4.sp(player, rw) && !(!bD.h4.sF(player, bD.h4.jL(player, aS.iD()), rw) || (player = rw, rw = bR.gF[0], !aQu(player) && aQq[player] + aQv(player, rw) > aQr))
	}, this.er = function(aBA, aQt) {
		if (!aQu(aBA)) {
			aQt = aQv(aBA, aQt);
			if (aQq[aBA] + aQt > aQr) return !1;
			aQq[aBA] += aQt
		}
		return !0
	}, this.en = function() {
		bi.l1() % 100 == 99 && (bi.l1() < 1071 ? aQr += 4 : bi.l1() < 2142 ? aQr += 6 : bi.l1() < 3213 ? aQr += 8 : aQr += 10)
	}
}

function cm() {
	var aQw;
	this.lV = null, this.lU = 0, this.dt = function() {
		aQw = [], 9 === aE.lM && this.aQx()
	}, this.aQx = function() {
		this.lV = [0, 0, 0, 0, 0, 0];
		for (var aQy = [254, 227, 167, 149, 102, this.lU = 0, 0, 0], aQz = [0, 8, 24, 30, 46, 80, 256, 333], aR0 = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l4, aC = 1; aC < aQy.length; aC++)
			if (k <= aQz[aC]) {
				this.lU = aQy[aC - 1] - bO.g9((k - aQz[aC - 1]) * (aQy[aC - 1] - aQy[aC]), aQz[aC] - aQz[aC - 1]), this.lV[5] = aR0[aC - 1] - bO.g9((k - aQz[aC - 1]) * (aR0[aC - 1] - aR0[aC]), aQz[aC] - aQz[aC - 1]), this.lV[0] = aE.ff - k - this
					.lU - this.lV[5];
				break
			} aE.lQ = aE.ff - aE.l4, aE.data.numberTeams = (0 < aE.l4) + (0 < aE.lQ), aE.data.playerCount = aE.a1W = aE.l4 + aE.lQ, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l4 + this.lU, aE.lQ - this.lU]), aE.a90.a96()
	}, this.aNg = function(player) {
		aQw.push({
			player: player,
			hB: 14 + az.kL(20)
		})
	}, this.en = function() {
		if (9 === aE.lM)
			for (var aC = aQw.length - 1; 0 <= aC; aC--) --aQw[aC].hB <= 0 && (ag.sx(aQw[aC].player, 0, ak.q5.a3F + ak.q5.a3T), aQw.splice(aC, 1))
	}
}

function dL() {
	this.aR2 = 25, this.aR3 = 13, this.aNs = 4096, this.ft = 0, this.fu = 0, this.a0y = null, this.a0u = null, this.a0v = null, this.a0z = null, this.fO = 0, this.mapSeed = 0, this.a0w = !1, this.a0x = new aR4, this.xN = new aR5, this.aBS = new aR6;
	var aR7 = {
		aR8: function() {},
		dt: function() {}
	};

	function aRH() {
		return {
			ft: bV.ft,
			fu: bV.fu,
			a0y: bV.a0y,
			a0u: bV.a0u,
			a0v: bV.a0v,
			a0z: bV.a0z,
			fO: bV.fO,
			mapSeed: bV.mapSeed,
			a0w: bV.a0w
		}
	}

	function aRI(gA) {
		bV.ft = gA.ft, bV.fu = gA.fu, bV.a0y = gA.a0y, bV.a0u = gA.a0u, bV.a0v = gA.a0v, bV.a0z = gA.a0z, bV.fO = gA.fO, bV.mapSeed = gA.mapSeed, bV.a0w = gA.a0w
	}

	function aRA(aC) {
		return !(1 === aC || !bV.aIz(aC) || aC === bV.aRM())
	}
	this.dt = function() {
		this.xN.dt()
	}, this.a8 = function(map, aR9) {
		((map %= this.aR2) !== this.fO || aRA(this.fO) && aR9 !== this.mapSeed) && (this.a0w = !1, this.a0x.aR8(), az.a97(map), this.fO = map, this.mapSeed = aR9, aRA(map) && (bV.xN.a0p[map].aRB = aR9), this.aIz(this.fO) ? (map = bV.xN.a0p[this
			.fO], this.ft = map.j, this.fu = map.k, az.a97(map.aRB), ar.a8([this.ft, this.fu, map.nl, map.ni]), aRD(), aq.aRE(), ar.aRF()) : aRC())
	}, this.aRG = function(map, aR9) {
		var gR = aRH(),
			map = (this.a8(map, aR9), this.a0x.aR8(), aRH());
		return aRI(gR), map
	}, this.aJv = function(map, aR9) {
		var gR = aRH(),
			aRB = az.aRJ(),
			aRK = this.xN.a0p[map].aRB,
			aRL = this.a0x,
			aR9 = (this.a0x = aR7, this.a8(map, aR9), this.a0y);
		return this.a0x = aRL, this.xN.a0p[map].aRB = aRK, az.a97(aRB), aRI(gR), aR9
	}, this.a9T = function(canvas) {
		canvas && this.a0y !== canvas && (this.ft = canvas.width, this.fu = canvas.height, this.a0y = canvas, this.a0u = this.a0y.getContext("2d", {
			alpha: !1
		}), this.ik = this.a0u.getImageData(0, 0, this.ft, this.fu), this.a0z = this.ik.data, this.fO = this.aRM(), this.mapSeed = 0, bV.xN.a0p[this.fO].name = aE.data.mapName)
	}, this.fN = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aRM()
	}, this.aRN = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aRO = function(aC) {
		return 1 === aC
	}, this.aRM = function() {
		return this.aR2
	}, this.aIz = function(aC) {
		return void 0 === this.xN.a0p[aC].aRP
	}, this.aJq = aRA, this.a9S = function(q3) {
		return 0 === q3.mapType ? q3.mapProceduralIndex < 10 ? q3.mapProceduralIndex : 10 + q3.mapProceduralIndex : 1 === q3.mapType ? 10 <= q3.mapRealisticIndex ? 22 + q3.mapRealisticIndex - 10 : q3.mapRealisticIndex + 10 : void 0
	}, this.aJ0 = function(q3, aRQ) {
		0 === q3.mapType ? q3.mapProceduralIndex = aRQ < 10 ? aRQ : aRQ - 10 : 1 === q3.mapType && (q3.mapRealisticIndex = aRQ - (22 <= aRQ ? 12 : 10))
	}
}

function aR4() {
	function aRZ() {
		bV.a0x.en()
	}

	function aRe(hG, aRd) {
		0 < aRd && (bV.a0z[hG] += aRd, bV.a0z[hG + 1] += aRd, bV.a0z[hG + 2] += aRd)
	}

	function j0(hG) {
		return bV.a0z[hG + 2] > bV.a0z[hG] && bV.a0z[hG + 2] > bV.a0z[hG + 1]
	}
	this.aE4 = -1, this.a5U = 0, this.aRR = 0, this.aRS = 8, this.aRT = 32, this.aRU = 8, this.aRV = 32, this.aRW = [0, 0], this.aD6 = [0, 0, 0, 0], this.jW = null, this.aRX = !0, this.aRY = !1, this.aR8 = function() {
		-1 !== this.aE4 && clearTimeout(this.aE4), this.aE4 = -1, this.jW = null, ar.aRF()
	}, this.dt = function() {
		7 === ab.a5a() || this.aRY || (this.aRX = !0, this.a5U = 0, this.aRR = 1, this.aRW = [bV.xN.a0p[bV.fO].a1G[0], bV.xN.a0p[bV.fO].a1H[0]], this.aD6 = [bV.xN.a0p[bV.fO].aRP[3], bV.xN.a0p[bV.fO].aRP[4], bV.xN.a0p[bV.fO].aRP[5], bV.xN.a0p[bV
			.fO].aRP[6]], this.aRS = bV.xN.a0p[bV.fO].aRP[7], this.aRT = bV.xN.a0p[bV.fO].aRP[8], this.aRU = bV.xN.a0p[bV.fO].aRP[9], this.aRV = bV.xN.a0p[bV.fO].aRP[10], this.aRX ? this.aE4 = setTimeout(aRZ, 16) : this.en())
	}, this.en = function() {
		if (8 === ab.a5a() && aI.nz()) this.aE4 = setTimeout(aRZ, 16);
		else {
			if (0 === this.a5U) {
				var aRB = az.aRJ();
				if (az.a97(bV.xN.a0p[bV.fO].aRP[2]), ar.a8([bV.ft, bV.fu, bV.xN.a0p[bV.fO].aRP[0], bV.xN.a0p[bV.fO].aRP[1]]), az.a97(aRB), this.jW = ar.aRa(), this.a5U++, this.aRX) return void(this.aE4 = setTimeout(aRZ, 16))
			}
			for (var hG, fU, aRB = this.aRX ? 10 : 1e6, aRB = bV.fu - this.aRR - 1 < aRB ? bV.fu - this.aRR - 1 : aRB, a2D = this.aRR + aRB, fr = this.aRR; fr < a2D; fr++)
				for (var fp = 1; fp < bV.ft - 1; fp++) j0(hG = 4 * (fU = fp + fr * bV.ft)) ? this.aRb(hG, fU, 1) : (this.aRb(hG, fU, 0), function(fp, fr, hG) {
					return 1 < fp && j0(hG - 4) || fp < bV.ft - 2 && j0(hG + 4) || 1 < fr && j0(hG - 4 * bV.ft) || fr < bV.fu - 2 && j0(hG + 4 * bV.ft)
				}(fp, fr, hG) && this.aRc(fp, fr));
			this.aRR = a2D, this.aRR >= bV.fu - 1 ? (bV.a0u.putImageData(bV.a0v, 0, 0, 1, 1, bV.ft - 2, bV.fu - 2), bi.e0 = !0, this.aR8()) : this.aRX && (this.aE4 = setTimeout(aRZ, 16))
		}
	}, this.aRb = function(hG, fU, eR) {
		aRe(hG, Math.floor(this.aRW[eR] + this.aD6[eR] * this.jW[fU] / 1e4) - bV.a0z[hG])
	}, this.aRf = function(hG, eQ, aRg, eR, aD6) {
		aRe(hG, Math.floor(this.aRW[eR] + (1 - eQ / aRg) * aD6) - bV.a0z[hG])
	}, this.aRc = function(mJ, mK) {
		for (var hG, eQ, aRg, aDu = mJ - this.aRT, aRh = mK - this.aRT, a2E = mJ + this.aRT, a2D = mK + this.aRT, aDu = aDu < 1 ? 1 : aDu, a2E = a2E > bV.ft - 2 ? bV.ft - 2 : a2E, a2D = a2D > bV.fu - 2 ? bV.fu - 2 : a2D, fr = aRh < 1 ? 1 :
			aRh; fr <= a2D; fr++)
			for (var fp = aDu; fp <= a2E; fp++) j0(hG = 4 * (fp + fr * bV.ft)) ? (aRg = this.aRS + (this.aRT - this.aRS) * this.jW[fp + bV.ft * fr] / 1e4, Math.abs(mJ - fp) > aRg || Math.abs(mK - fr) > aRg || aRg <= (eQ = Math.sqrt((mJ - fp) * (
				mJ - fp) + (mK - fr) * (mK - fr))) || this.aRf(hG, eQ, aRg, 1, this.aD6[3])) : (aRg = this.aRU + (this.aRV - this.aRU) * this.jW[fp + bV.ft * fr] / 1e4, Math.abs(mJ - fp) > aRg || Math.abs(mK - fr) > aRg || aRg <= (eQ = Math
				.sqrt((mJ - fp) * (mJ - fp) + (mK - fr) * (mK - fr))) || this.aRf(hG, eQ, aRg, 0, this.aD6[2]))
	}
}

function aRD() {
	var vM = aRi(bV.fO);
	vM && aRj(vM[0], vM[1], vM[2], vM[3], vM[4])
}

function aRi(fO) {
	return 2 === fO ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fO ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fO ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fO ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fO ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aRj(aRk, aRl, aRm, aRn, aRo) {
	for (var fp, fr, aOE, aOF, a6p, aRr, j5 = aRk.length - 1, aRp = bV.ft + bV.fu, fi = (aRp *= aRp, aRm.length), aRq = Array(fi), aC = fi - 1; 0 <= aC; aC--) aRq[aC] = aRm[aC] * aRm[aC];
	var aRs = new Array(fi),
		aHG = new Array(fi),
		aRt = new Array(fi),
		gA = ar.aRa();
	if (void 0 === aRo)
		for (aRo = new Array(fi), aC = fi - 1; 0 <= aC; aC--) aRo[aC] = 0;
	for (aC = 1; aC < fi; aC++) aRs[aC] = aRq[aC] - aRq[aC - 1], aHG[aC] = aRn[aC] - aRn[aC - 1], aRt[aC] = aRo[aC] - aRo[aC - 1];
	for (fp = bV.ft - 1; 0 <= fp; fp--)
		for (fr = bV.fu - 1; 0 <= fr; fr--) {
			for (aOE = aRp, aC = j5; 0 <= aC; aC--) aOE = (aOF = (fp - aRk[aC]) * (fp - aRk[aC]) + (fr - aRl[aC]) * (fr - aRl[aC])) < aOE ? aOF : aOE;
			for (a6p = aRn[fi - 1], aRr = aRo[fi - 1], aC = 1; aC < fi; aC++)
				if (aOE < aRq[aC]) {
					a6p = aRn[aC - 1] + aN1((aOE - aRq[aC - 1]) * aHG[aC], aRs[aC]), aRr = aRo[aC - 1] + aN1((aOE - aRq[aC - 1]) * aRt[aC], aRs[aC]);
					break
				} aRu(bV.ft * fr + fp, a6p, aRr, gA)
		}
}

function aRu(eR, a6p, aRr, gA) {
	a6p < 500 ? gA[eR] = bO.g9(gA[eR] * a6p * 2, 1e3) : 500 < a6p && (gA[eR] += bO.g9(2 * (1e4 - gA[eR]) * (a6p - 500), 1e3)), gA[eR] += bO.g9(aRr * (10 * a6p - gA[eR]), 1e3)
}

function co() {
	var aRv;

	function aS5(a7G, im, fp, fr, globalAlpha) {
		bV.a0u.save(), bV.a0u.globalAlpha = globalAlpha, bV.a0u.imageSmoothingEnabled = !1, bV.a0u.scale(im, im), bV.a0u.drawImage(a7G, Math.floor(fp * (bV.ft / im - a7G.width)), Math.floor(fr * (bV.fu / im - a7G.height))), bV.a0u.restore()
	}
	this.aBP = 0, this.aBQ = 0, this.aBR = 0, this.aBS = 0, this.dt = function() {
		(aRv = new Array(bV.aR2))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eQ: [220, 250, 255, 220],
			vz: [190, 220, 0, 0],
			g2: [170, 200, 0, 0]
		}, aRv[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eQ: [25, 0, 100, 0, 25],
			vz: [25, 0, 0, 0, 25],
			g2: [25, 0, 0, 0, 25]
		}, aRv[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eQ: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			vz: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g2: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aRv[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eQ: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			vz: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g2: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aRv[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eQ: [10, 10, 20, 10, 10, 170, 212],
			vz: [20, 20, 60, 100, 100, 110, 170],
			g2: [70, 70, 160, 30, 30, 60, 120]
		}, aRv[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eQ: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			vz: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g2: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aRv[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eQ: [10, 10, 60, 255, 255, 200, 200],
			vz: [10, 10, 60, 255, 255, 200, 200],
			g2: [80, 80, 255, 255, 255, 200, 200]
		}, aRv[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eQ: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			vz: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g2: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aRv[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eQ: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			vz: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g2: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aRv[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eQ: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			vz: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g2: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aRv[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eQ: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			vz: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g2: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aRv[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eQ: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			vz: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g2: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aRE = function() {
		var aS4, aC, g1, gR, ik = function() {
				var ik;
				return bV.a0y = document.createElement("canvas"), bV.a0y.width = bV.ft, bV.a0y.height = bV.fu, bV.a0u = bV.a0y.getContext("2d", {
					alpha: !1
				}), ik = bV.a0u.getImageData(0, 0, bV.ft, bV.fu), bV.a0z = ik.data, ik
			}(),
			j = aRv[bV.fO].j,
			eQ = aRv[bV.fO].eQ,
			vz = aRv[bV.fO].vz,
			g2 = aRv[bV.fO].g2,
			gA = ar.aRa(),
			fi = j.length - 2,
			aRz = new Array(1 + fi),
			aS0 = new Array(1 + fi),
			aS1 = new Array(1 + fi),
			aS2 = new Array(1 + fi);
		for (g1 = fi; 0 <= g1; g1--) aRz[g1] = j[g1 + 1] - j[g1], aS0[g1] = eQ[g1 + 1] - eQ[g1], aS1[g1] = vz[g1 + 1] - vz[g1], aS2[g1] = g2[g1 + 1] - g2[g1];
		for (aC = bV.ft * bV.fu - 1; 0 <= aC; aC--)
			for (g1 = fi; 0 <= g1; g1--)
				if (gA[aC] >= j[g1]) {
					gR = gA[aC] - j[g1], bV.a0z[4 * aC] = eQ[g1] + aN1(aS0[g1] * gR, aRz[g1]), bV.a0z[4 * aC + 1] = vz[g1] + aN1(aS1[g1] * gR, aRz[g1]), bV.a0z[4 * aC + 2] = g2[g1] + aN1(aS2[g1] * gR, aRz[g1]), bV.a0z[4 * aC + 3] = 255;
					break
				} bV.a0u.putImageData(ik, 0, 0), bV.aRO(bV.fO) && ac.w3() && bV.aRO(bV.fO) && (ik = ac.xD("arena"), aS4 = ac.xD("territorial.io"), aS5(ik, 5, .5, .5, .1), aS5(aS4, 2, .5, .45, .1)), bV.a0w = !0, bi.e0 = !0
	}, this.a9A = function() {
		for (var hG, fp, fr, aS6, iZ, gT, aBQ = 0, j = bV.ft, k = bV.fu, gR = j * k * 4, aS7 = aGp, aS8 = bV.a0z, aC = j - 1; 0 <= aC; aC--) aS7[(hG = aC << 2) + 2] = aS7[gR - hG - 2] = 3;
		for (gR = 4 * j, aC = k - 1; 0 <= aC; aC--) aS7[(hG = aC * gR) + 2] = aS7[hG + gR - 2] = 3;
		for (aS6 = j - 1, iZ = k - 1, fr = 1; fr < iZ; fr++)
			for (gR = fr * j, fp = 1; fp < aS6; fp++) gT = 1 - (aS8[(hG = gR + fp << 2) + 2] > aS8[hG + 1] && aS8[hG + 2] > aS8[hG]), aS7[hG + 2] = 6 - 5 * gT, aBQ += gT;
		this.aBP = (j - 2) * (k - 2), this.aBS = 0, bV.fN(bV.fO) && (bV.aBS.aS9(), bV.aBS.aSA(4, 5)), this.aBQ = aE.ko = aBQ - this.aBS, this.aBR = this.aBP - this.aBQ - this.aBS, this.aBR && (bV.aBS.aSA(6, 2), bV.aBS.aSB())
	}
}

function aRC() {
	var pW;
	10 === bV.fO ? pW =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fO ? pW =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fO ? pW =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fO ? pW =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fO ? pW =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fO ? pW =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fO ? pW =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fO ? pW =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fO ? pW =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fO ? pW =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fO ? pW =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fO ? pW =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fO && (pW =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new a0i).a0k(pW)
}

function aR5() {
	this.a0p = null, this.aSC = null, this.aSD = null, this.xO = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dt = function() {
		this.aSE = [L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), "Mare Nostrum"];
		var aSF = [120, 105, 92],
			cos = [12, 12, 60],
			aSG = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aSH = [140, 130, 120],
			aSI = [12, 12, 76],
			aSJ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aSK = [130, 117, 106],
			aSL = [12, 12, 68],
			aSM = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.a0p = new Array(bV.aR2 + 1), __fx.customLobby.setMapInfo(this.a0p), this.a0p[0] = {
			j: 230,
			k: 230,
			nl: 1e3,
			ni: 2e3,
			aRB: 173
		}, this.a0p[1] = {
			j: 800,
			k: 800,
			nl: 100,
			ni: 50,
			aRB: 43
		}, this.a0p[2] = {
			j: 512,
			k: 512,
			nl: 128,
			ni: 32,
			aRB: 0
		}, this.a0p[3] = {
			j: 960,
			k: 960,
			nl: 60,
			ni: 8,
			aRB: 0
		}, this.a0p[4] = {
			j: 900,
			k: 900,
			nl: 100,
			ni: 5,
			aRB: 0
		}, this.a0p[5] = {
			j: 1e3,
			k: 1e3,
			nl: 100,
			ni: 40,
			aRB: 0
		}, this.a0p[6] = {
			j: 1e3,
			k: 1e3,
			nl: 100,
			ni: 20,
			aRB: 0
		}, this.a0p[7] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRB: 0
		}, this.a0p[8] = {
			j: 820,
			k: 820,
			nl: 200,
			ni: 100,
			aRB: 0
		}, this.a0p[9] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRB: 0
		}, this.a0p[10] = {
			a1G: aSH,
			a1H: aSI,
			aRP: aSJ
		}, this.a0p[11] = {
			a1G: aSK,
			a1H: aSL,
			aRP: aSM
		}, this.a0p[12] = {
			a1G: aSK,
			a1H: aSL,
			aRP: aSM
		}, this.a0p[13] = {
			a1G: aSF,
			a1H: cos,
			aRP: aSG
		}, this.a0p[14] = {
			a1G: aSF,
			a1H: cos,
			aRP: aSG
		}, this.a0p[15] = {
			a1G: aSH,
			a1H: aSI,
			aRP: aSJ
		}, this.a0p[16] = {
			a1G: aSH,
			a1H: aSI,
			aRP: aSJ
		}, this.a0p[17] = {
			a1G: aSF,
			a1H: cos,
			aRP: aSG
		}, this.a0p[18] = {
			a1G: aSK,
			a1H: aSL,
			aRP: aSM
		}, this.a0p[19] = {
			a1G: aSF,
			a1H: cos,
			aRP: aSG
		}, this.a0p[20] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRB: 0
		}, this.a0p[21] = {
			j: 940,
			k: 940,
			nl: 80,
			ni: 8,
			aRB: 0
		}, this.a0p[22] = {
			a1G: aSK,
			a1H: aSL,
			aRP: aSM
		}, this.a0p[23] = {
			a1G: aSH,
			a1H: aSI,
			aRP: aSJ
		}, this.a0p[24] = {
			a1G: [157, 136, 117],
			a1H: [16, 13, 68],
			aRP: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aBO: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aR2; aC++) this.a0p[aC].name = this.aSE[aC];
		this.a0p[bV.aR2] = {
			name: ""
		}, this.aSC = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aSC[aC] = aC;
		for (this.aSC[10] = 20, this.aSC[11] = 21, this.aSD = new Uint8Array(bV.aR3), aC = 0; aC < 10; aC++) this.aSD[aC] = 10 + aC;
		this.aSD[10] = 22, this.aSD[11] = 23, this.aSD[12] = 24
	}
}

function aR6() {
	this.aS9 = function() {
		for (var hG, fp, gR, aS7 = aGp, aS8 = bV.a0z, j = bV.ft, aS6 = j - 1, iZ = bV.fu - 1, hB = 0, fr = 1; fr < iZ; fr++)
			for (gR = fr * j, fp = 1; fp < aS6; fp++) aS8[hG = gR + fp << 2] === aS8[1 + hG] && aS8[hG] === aS8[2 + hG] && (hB++, aS7[2 + hG] = 4);
		aq.aBS = hB
	}, this.aSA = function(aSO, aSP) {
		for (var aS7 = aGp, j = bV.ft, aS6 = j - 1, iZ = bV.fu - 1, id = 0, fr = 1; fr < iZ; fr++)
			for (var gR = fr * j, fp = 1; fp < aS6; fp++) {
				var fM = 2 + (gR + fp << 2);
				aS7[fM] === aSO && (! function(fM, id, aSO, aSP) {
					var fi = 1,
						aS7 = aGp,
						fk = ad.aMs,
						a72 = [fM],
						aSR = id >> 8 << 1,
						aSS = 255 & id;
					aS7[fM - 2] = aSR, aS7[fM - 1] = aSS, aS7[fM] = 5;
					for (; fi;) {
						for (var a73 = [], aC = 0; aC < fi; aC++)
							for (var fX = a72[aC], fl = 0; fl < 8; fl++) {
								var fm = fX + fk[fl];
								aS7[fm] === aSO && (aS7[fm - 2] = aSR, aS7[fm - 1] = aSS, aS7[fm] = aSP, a73.push(fm))
							}
						fi = (a72 = a73).length
					}
				}(fM, id, aSO, aSP), id = (id + 1) % 32768)
			}
	}, this.aSB = function() {
		for (var aS7 = aGp, j = bV.ft, aS6 = j - 3, iZ = bV.fu - 3, aSU = 12 * j, fr = 3; fr < iZ; fr++)
			for (var gR = fr * j, fp = 3; fp < aS6; fp++) {
				var fM = 2 + (gR + fp << 2);
				2 !== aS7[fM] || 2 === aS7[fM - 12] && 2 === aS7[12 + fM] && 2 === aS7[fM - aSU] && 2 === aS7[fM + aSU] || (aS7[fM - 2] = 1 | aS7[fM - 2])
			}
	}
}

function a99() {
	(a2Z = void 0 === a2Z ? document.createElement("canvas") : a2Z).width = bV.ft, a2Z.height = bV.fu, a9D = a2Z.getContext("2d", {
		alpha: !0
	}), a9E = aGp = null, a9E = a9D.getImageData(0, 0, bV.ft, bV.fu), aGp = a9E.data, bD.tg.a10(aGp)
}

function cp() {
	var gA, j, k, max, aSV, ni, aSX, aSY, aSZ, aSa, aSb, aSc, aSd, aSe, aSW = 1e4;

	function aSl(aSk, nl, fi) {
		var aC;
		for (aSX[0] = aSk, aC = 1; aC < fi; aC++) aSX[aC] = aSX[aC - 1] + nl, nl = aSX[aC] >= aSW ? (aSX[aC] = aSW - 1, -nl) : aSX[aC] < 0 ? (aSX[aC] = 0, -nl) : (nl += 16384 <= az.random() ? ni : -ni) < -aSV ? -aSV : aSV < nl ? aSV : nl
	}

	function aSn(fp, fr, aSo, fi) {
		(aSo ? function(fp, fr, fi) {
			var aC;
			for (aC = 0; aC < fi; aC++) gA[fr * j + fp + aC] = aSX[aC]
		} : function(fp, fr, fi) {
			var aC;
			for (aC = 0; aC < fi; aC++) gA[fr * j + fp + aC * j] = aSX[aC]
		})(fp, fr, fi)
	}

	function aSr(value, fi) {
		var aC, aQT, fM, kJ = value - aSX[fi - 1];
		if (0 != kJ) {
			for (aQT = 1 + bO.g9(Math.abs(kJ), fi - 1), aQT = kJ < 0 ? -aQT : aQT, aSX[fi - 1] = value, fM = (fM = fi - 1 - bO.g9(Math.abs(kJ), Math.abs(aQT))) < 1 ? 1 : fi - 2 < fM ? fi - 2 : fM, aC = fi - 2; fM <= aC; aC--) aSX[aC] += kJ - (fi -
				1 - aC) * aQT;
			(kJ < 0 ? function(fi) {
				var aC;
				for (aC = fi - 2; 1 <= aC; aC--) aSX[aC] < 0 && (aSX[aC] = -aSX[aC] - 1)
			} : function(fi) {
				var aC;
				for (aC = fi - 2; 1 <= aC; aC--) aSX[aC] >= aSW && (aSX[aC] = 2 * aSW - aSX[aC] - 1)
			})(fi)
		}
	}

	function aSu(a72, a73, fi) {
		for (var aC = 0; aC < fi; aC++) a72[aC] = a73[aC]
	}

	function aSv(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aSw(a9q, gap, ia) {
		aSY.push(a9q), aSZ.push(gap), aSa.push(ia)
	}
	this.a8 = function(a8L) {
		! function(a8L) {
			var aC;
			for (j = a8L[0], k = a8L[1], aSV = a8L[2], ni = a8L[3], gA = new Int16Array(j * k), max = k < j ? j : k, aSX = new Int16Array(max), aSY = [], aSZ = [], aSa = [], aSb = new Array(j), aSc = new Array(k), aC = j - 1; 0 <= aC; aC--) aSb[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aSc[aC] = !1;
			aSd = new Int16Array(j), aSe = new Int16Array(k)
		}(a8L),
		function(fi) {
			var aSk = az.random() % aSW,
				nl = az.random() % (2 * aSV + 1) - aSV;
			aSl(aSk, nl, fi)
		}(max), aSu(aSe, aSX, k), aSn(0, 0, !0, j);
		var fp, fr, a8L = gA[0],
			fi = max,
			nl = az.random() % (2 * aSV + 1) - aSV;
		for (aSl(a8L, nl, fi), aSu(aSd, aSX, j), aSn(0, 0, !1, k), aSv(aSd), aSv(aSe), aSl(gA[j - 1], aSd[j - 1], k), aSn(j - 1, 0, !1, k), aSl(gA[j * (k - 1)], aSe[k - 1], j), aSr(gA[j * k - 1], j), aSn(0, k - 1, !0, j), aSb[j - 1] = aSb[0] = !
			0, aSc[k - 1] = aSc[0] = !0, aSw(0, j, !0), aSw(0, k, !1), ! function() {
				var aSy, a9q;
				for (;;) {
					if (aSy = function() {
							var aC, aSy = aSY.length - 1;
							for (aC = aSy - 1; 0 <= aC; aC--) aSZ[aC] > aSZ[aSy] && (aSy = aC);
							return aSy
						}(), aSZ[aSy] < 5) return;
					a9q = aSY[aSy] + bO.g9(aSZ[aSy], 2), (aSa[aSy] ? function(fp) {
						var fi, aT1, aC, aLb = 0,
							aT2 = 0;
						for (; aT2 < k - 1;) {
							for (aC = aLb + 1; aC < k; aC++)
								if (aSc[aC]) {
									aT2 = aC;
									break
								} fi = aT2 - aLb + 1, aSl(gA[fp + j * aLb], 0 === aLb ? aSd[fp] : aSX[aT1 - 1] - aSX[aT1 - 2], fi), aSr(gA[aT2 * j + fp], fi), aSn(fp, aLb, !1, fi), aT1 = fi, aLb = aT2
						}
						aSb[fp] = !0
					} : function(fr) {
						var fi, aT1, aC, aLb = 0,
							aT2 = 0;
						for (; aT2 < j - 1;) {
							for (aC = aLb + 1; aC < j; aC++)
								if (aSb[aC]) {
									aT2 = aC;
									break
								} fi = aT2 - aLb + 1, aSl(gA[fr * j + aLb], 0 === aLb ? aSe[fr] : aSX[aT1 - 1] - aSX[aT1 - 2], fi), aSr(gA[fr * j + aT2], fi), aSn(aLb, fr, !0, fi), aT1 = fi, aLb = aT2
						}
						aSc[fr] = !0
					})(a9q), aSw(a9q, aSY[aSy] + aSZ[aSy] - a9q, aSa[aSy]), aSZ[aSy] = a9q - aSY[aSy] + 1
				}
			}(), fp = 0; fp < j; fp++)
			if (!aSb[fp])
				for (fr = 0; fr < k; fr++) aSc[fr] || ! function(fp, fr) {
					var value = gA[fr * j + fp - 1] + gA[(fr - 1) * j + fp],
						aBo = 2;
					aSb[fp + 1] && (aBo++, value += gA[fr * j + fp + 1]);
					aSc[fr + 1] && (aBo++, value += gA[(fr + 1) * j + fp]);
					gA[fr * j + fp] = bO.g9(value, aBo)
				}(fp, fr)
	}, this.aRa = function() {
		return gA
	}, this.aRF = function() {
		gA = null
	}
}

function aN1(g1, g2) {
	return 0 <= g1 ? bO.g9(g1, g2) : -bO.g9(-g1, g2)
}

function ka(gA) {
	return gA * gA
}

function aAq(g1, g2) {
	return g2 < g1 ? g1 : g2
}

function aGD(g1, g2) {
	return g1 < g2 ? g1 : g2
}

function aDP(g1, gA, g2) {
	return gA < g1 ? g1 : g2 < gA ? g2 : gA
}

function aT4(gA, fi) {
	for (var es = bO.g9(gA + 1, 2), aC = 0; aC < fi; aC++) es = bO.g9(es + bO.g9(gA, es), 2);
	return es
}

function aP0(gA, fi) {
	return gA < 1 ? 0 : aT4(gA, fi)
}

function aT5(o7, o8, vi, aD9, oK, oL, vj, wO) {
	return !(o7 + vi <= oK || o8 + aD9 <= oL || oK + vj <= o7 || oL + wO <= o8)
}

function aT6(o7, o8, vi, aD9, oK, oL, vj, wO) {
	return o7 <= oK && o8 <= oL && oK + vj <= o7 + vi && oL + wO <= o8 + aD9
}

function a0r(gA) {
	return Math.floor(!!gA * (1 + Math.log2(gA + .5)))
}

function c5() {
	this.g9 = function(g1, g2) {
		return Math.floor((g1 + .5) / g2)
	}, this.aT7 = function(g1, g2) {
		return Math.floor(g1 * (g2 + .5))
	}, this.sqrt = function(gA) {
		return ~~Math.sqrt(gA + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iu = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aT8 = function(gR, gT, gV) {
		return Math.max(Math.min(gR, gT), gV)
	}, this.aT9 = function(aTA, aTB, fp, fr) {
		fp -= aTA, aTA = fr - aTB, fr = 0;
		return 0 == fp ? fr = 0 <= aTA ? Math.PI : 0 : (fr = Math.atan(aTA / fp), fr += 0 < fp ? .5 * Math.PI : 1.5 * Math.PI), fr
	}, this.log2 = function(gA) {
		return Math.floor(!!gA * (1 + Math.log2(gA + .5)))
	}, this.log10 = function(gA) {
		return Math.floor(Math.log10(gA + .5))
	}, this.aTD = function(aGl, aTE, aTF, aTG, aTH) {
		return aTF - aTH < aGl && aGl < aTF + aTH && aTG - aTH < aTE && aTE < aTG + aTH
	}, this.a1o = function(aDp, aDr) {
		return aDp * aDp + aDr * aDr
	}
}

function dN() {
	this.z = new aTI, this.aTJ = new aTK, this.vd = 0;
	var aTL = new Array(32);

	function aTO() {
		for (var fi = aTL.length, aC = 0; aC < fi; aC++) aTL[aC] = null
	}
	this.dt = function() {
		for (var aTM, aTN = document.body.firstChild; aTN;) aTM = aTN.nextSibling, !document.body.contains(aTN) || "DIV" !== aTN.tagName && "INPUT" !== aTN.tagName && "BUTTON" !== aTN.tagName || u.removeChild(document.body, aTN), aTN = aTM
	}, this.v = function(eR, a5f, a8L) {
		void 0 === a5f && (a5f = this.vd), bi.e0 = !0, 0 === eR && (0 === ab.a5a() ? eR = 5 : a1.a2.setState(13)), this.uW(), this.vd === eR && (a5f = aTL[eR].a5f, aTL[eR] = null), this.vd = eR;
		var lz = aTL[eR];
		if (!lz || 4 === eR || 7 === eR || 8 === eR || 9 === eR || 10 === eR || 11 === eR || 13 === eR || 15 === eR || 18 === eR || 20 <= eR && eR <= 28 || 32 === eR || 33 === eR) {
			if (0 === eR) return void aTO();
			1 === eR ? lz = new aTP : 2 === eR ? lz = new aTQ : 3 === eR ? lz = new aTR : 4 === eR || 9 === eR || 10 === eR || 11 === eR || 13 === eR || 33 === eR ? lz = a8L : 5 === eR ? lz = new aTS : 6 === eR ? lz = new aTT : 7 === eR ? lz =
				new aTU(u.z.aTV) : 8 === eR ? lz = a8L : 12 === eR ? lz = new aTW : 14 === eR ? lz = new aTX : 15 === eR ? lz = new aTU(u.z.aTY) : 16 === eR ? lz = new aTZ : 17 === eR ? lz = new aTa : 18 === eR ? lz = new aTb : 19 === eR ? lz =
				new aTc : 20 === eR ? lz = new aTd : 21 === eR ? lz = new aTe : 22 === eR ? lz = new aTf : 23 === eR ? lz = new aTg : 24 === eR ? lz = new aTh : 25 === eR ? lz = new aTi : 26 === eR ? lz = new aTj : 27 === eR ? lz = new aTk :
				28 === eR ? lz = new aTl : 29 === eR ? lz = new aTm : 30 === eR ? lz = new aTn : 31 === eR ? lz = new aTo : 32 === eR && (lz = new aTp), lz.a5f = a5f, aTL[eR] = lz
		}
		lz.show(a8L)
	}, this.a5Z = function() {
		this.iV() && this.aTq(this.a5e().a5f)
	}, this.aTq = function(eR) {
		this.iV() && (aTL[eR] ? (this.uW(), bi.e0 = !0, this.vd = eR, aTL[eR].show()) : this.v(eR))
	}, this.uW = function() {
		this.iV() && aTL[this.vd].uW()
	}, this.y = function() {
		this.iV() && (aTL[this.vd].uW(), aTO(), this.vd = 0, a1.a2.setState(13))
	}, this.z1 = function() {
		var lz;
		this.iV() && (lz = aTL[this.vd]).z1 && lz.z1()
	}, this.resize = function() {
		if (!this.iV()) return !1;
		aTL[this.vd].resize()
	}, this.hw = function(fp, fr) {
		var lz;
		this.iV() && (lz = aTL[this.vd]).hw && lz.hw(fp, fr)
	}, this.a5x = function(fp, fr) {
		var lz;
		this.iV() && (lz = aTL[this.vd]).a5x && lz.a5x(fp, fr)
	}, this.a6L = function() {
		var lz;
		this.iV() && (lz = aTL[this.vd]).a6L && lz.a6L()
	}, this.a60 = function(mJ, mK, deltaY) {
		var lz;
		this.iV() && (lz = aTL[this.vd]).a60 && lz.a60(mJ, mK, deltaY)
	}, this.a6V = function(code) {
		var lz;
		return !!this.iV() && ((lz = aTL[this.vd]).a6V && lz.a6V(code), !0)
	}, this.en = function() {
		var lz;
		this.iV() && (lz = aTL[this.vd]) && lz.en && lz.en()
	}, this.iV = function() {
		return 0 < this.vd
	}, this.a5e = function() {
		return aTL[this.vd]
	}, this.a9b = function(eR) {
		return aTL[eR]
	}, this.aTr = function() {
		return aTL
	}, this.removeChild = function(ow, a7l) {
		try {
			ow.removeChild(a7l)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aTU(data) {
	var aTs, aTt;

	function aUH(aKw, aUI) {
		if (aKw.tq === bE.re) return clearTimeout(aKw.aUJ), 1;
		aKw.ts(bE.re), clearTimeout(aKw.aUJ), aKw.aUJ = setTimeout(aUI, 1e3)
	}

	function aTw(tV, x8) {
		if (!data.aTu) {
			if (data.aUm) {
				if (x8) return
			} else {
				if (!x8) return;
				if (data.a0G < 1e4) return
			}
			var aUt, xJ = new tF,
				aUr = x8 && 1e5 <= data.a0G,
				aUs = xJ.tI(x8 ? (aUr ? "⚠️ " : "") + L(304) : L(305)),
				aUv = (aUr && (aUs.style.color = "yellow"), x8 ? xJ.tJ(L(306, [bD.pa.a8d(data.a0G, .01, 0)])) : ((aUt = new uK({
					value: data.aUu,
					eR: -1
				})).e.readOnly = !0, aUt.e.type = "password", xJ.tS(aUt), xJ.tS(new uh([new x(L(235), function(e) {
					return e.textContent === L(235) ? (e.textContent = L(236), aUt.e.type = "text") : (e.textContent = L(235), aUt.e.type = "password"), !0
				}).button, new x(L(232), function(e) {
					return bD.t6.a7j(aUt.e), bD.t6.yg(e), !0
				}).button]))), xJ.tN(L(x8 ? 305 : 307)).style.marginTop = "0.75em", new uK({
					value: "",
					eR: -1
				}, 0, 0)),
				aUx = (aUv.e.type = "email", aUv.e.autocomplete = "email", aUv.e.name = "email", aUv.e.inputMode = "email", aUv.e.spellcheck = !1, xJ.tS(aUv), xJ.tS(new uh([new x(L(308), function(e) {
					return b1.aUR.aUw({
						action: 3,
						pW: aUv.e.value.trim().substring(0, 63)
					}), bD.t6.yg(e), !0
				}).button])), x8 && xJ.tJ(L(309)), xJ.tN(L(310)).style.marginTop = "0.75em", new uK({
					value: "",
					eR: -1
				}, 1));
			xJ.tS(aUx), xJ.tS(new uh([new x(L(311), function() {
				b1.aUR.aUS({
					action: 4,
					pe: "",
					value: Math.floor(+aUx.e.value)
				}), u.v(8, u.a5e().a5f, new ve(18))
			}).button])), tV.push(xJ)
		}
	}
	this.show = function() {
		data.aTu && bL.aVF("account", data.pe), aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a5Z()
	}), new x(data.aTu ? "🔄 " + L(198) : L(199), function() {
		u.v(8, data.aTu ? u.a5e().a5f : void 0, new ve(25, {
			action: 0,
			pe: data.pe,
			vc: data.vc
		}))
	}, 0, 0, 1)]), aTt = new tT(aTs.ys, function() {
		var tV = [];
		aTw(tV, 1), tV.push(function() {
				var xJ = new tF;
				xJ.tI(L(281)), data.aUm && (xJ.tN("✅ " + L(282)).style.marginBottom = "0.75em");
				var a5B = data.aUn;
				a5B < 1 ? (xJ.tN(L(283)), 0 === data.aUo ? xJ.tJ(L(284)) : 1 === data.aUo ? xJ.tJ(L(285)) : 2 === data.aUo ? xJ.tJ(L(286)) : 3 === data.aUo ? xJ.tJ(L(287)) : 4 === data.aUo ? xJ.tJ(L(288)) : 5 === data.aUo ? xJ.tJ(L(
					289)) : 6 === data.aUo ? xJ.tJ(L(290)) : xJ.tJ(L(291))) : (xJ.tN(L(292)), a5B = a5B < 2 ? L(293) : a5B < 61 ? 2 === a5B ? L(294) : L(295, [a5B - 1]) : a5B < 84 ? 61 === a5B ? L(296) : L(297, [a5B - 60]) : a5B <
					255 ? 84 === a5B ? L(298) : L(299, [a5B - 83]) : L(300), xJ.tJ(a5B));
				{
					var tK, aUO;
					xJ.tS(new v5), data.aTu && (tK = xJ.tJ(), xJ.tS(new uh([new x(bm.zQ.xw(data.pe) ? L(164) : L(165), function(e) {
						return bm.zQ.zd(data.pe) ? (e.textContent = L(164), aUO(1)) : (e.textContent = L(165), aUO(0)), !0
					}).button])), aUO = function(gA) {
						tK.textContent = gA ? L(301) : ""
					}, bm.zQ.xw(data.pe) && aUO(1), xJ.tS(new v5))
				}
				var qD, uJ = new uK({
					value: data.username,
					eR: -1
				});
				uJ.e.readOnly = !0, xJ.tS(uJ), xJ.tS(new uh([new x(L(232), function(e) {
					return bD.t6.a7j(uJ.e), bD.t6.yg(e), !0
				}).button])), data.aTu || xJ.tJ(L(302));
				(data.aUp || data.aUq) && (xJ.tS(new v5), xJ.tJ(L(303)), data.aUp && ((qD = xJ.tJ("• Muted")).style.color = "orange", qD.style.marginTop = "0.5em"), data.aUq) && ((qD = xJ.tJ("• Redacted")).style.color = "orange", qD.style
					.marginTop = "0.5em");
				data.aTu && (xJ.tS(new v5), xJ.tN(b1.z.aUK("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xJ) {
					function click(e, aKy) {
						return bs.aKz(data.pe, aKy) && (bD.t6.yg(e), p7[0].ts(1), p7[1].ts(1)), !0
					}
					var color = bs.aKx(data.pe) ? 1 : 0,
						p7 = [];
					p7.push(new x(L(268), function(e) {
						return click(e, 1)
					}, color || bE.qp)), p7.push(new x(L(269), function(e) {
						return click(e, 0)
					}, color || bE.r4)), xJ.tS(new uh([p7[0].button])), xJ.tS(new uh([p7[1].button]))
				}(xJ));
				return xJ
			}()),
			function(tV) {
				var xJ, uJ, k, aUP, aKw, aUQ;
				data.aTu && data.aUW && ((xJ = new tF).tI(L(227)), xJ.tJ(L(221)), (uJ = new uK({
					value: data.aUW,
					eR: -1
				})).e.readOnly = !0, xJ.tS(uJ), k = !1, aUP = new x(L(228), function(e) {
					return k && b1.z.eo(0) && (bD.t6.yg(e), aUQ(), b1.aUR.aUX({
						action: 9,
						pe: data.pe
					})), !0
				}, 1), aKw = new x(L(219), function(e) {
					if (e.textContent === L(219)) {
						if (100 * data.aUW < data.a0G) return new t1(L(229)), !0;
						k = !0, e.textContent = L(170), aUP.ts(0), aUP.button.style.color = bE.rS
					} else aUQ();
					return !0
				}), xJ.tS(new uh([aKw.button])), aUQ = function() {
					k = !1, aKw.button.textContent = L(219), aUP.ts(1), aUP.button.style.color = bE.qN
				}, xJ.tS(new uh([aUP.button])), xJ.tJ(L(230)), tV.push(xJ))
			}(tV),
			function(tV) {
				var xJ, tK, aH5, aUz, aUP, aKw, aUQ;
				data.aTu || ((xJ = new tF).tI(L(312)), (tK = xJ.tJ(data.aUy.length + " / 160")).style.textAlign = "center", aH5 = !0, (aUz = new zA(0, 1, function(e) {
					e = e.target.value.length;
					tK.textContent = e + " / 160", 160 < e ? aH5 && (aH5 = !1, aKw.ts(1)) : aH5 || (aH5 = !0, aKw.ts(0))
				})).e.rows = 6, aUz.e.style.fontSize = "1em", aUz.zH(data.aUy), xJ.tS(aUz), 0 !== data.aV0 ? (aKw = new x(L(313), function() {
					if (!aH5) return !0;
					u.v(8, u.a5e().a5f, new ve(29, {
						action: 1,
						pW: aUz.zI().substring(0, 160)
					}))
				}, 0, 0, 1), xJ.tS(new uh([aKw.button])), xJ.tS(new uh([new x(1 === data.aV0 ? L(314) : L(315), function() {
					u.v(8, u.a5e().a5f, new ve(29, {
						action: 0,
						pW: ""
					}))
				}, 0, 0, 1).button])), xJ.tJ(1 === data.aV0 ? L(316, [data.aV1 - 1]) : L(317, [data.aV1 - 1])), xJ.tJ(L(318, [data.aV2]))) : (aUP = new x(L(228), function() {
					if (!aUz.e.readOnly) return !0;
					u.v(8, u.a5e().a5f, new ve(29, {
						action: 1,
						pW: aUz.zI().substring(0, 160)
					}))
				}, 1), aKw = new x(L(219), function(e) {
					if (e.textContent === L(219)) {
						if (!aH5) return !0;
						e.textContent = L(170), aUz.e.readOnly = !0, aUP.ts(0), aUP.button.style.color = bE.rS
					} else aUQ();
					return !0
				}), xJ.tS(new uh([aKw.button])), xJ.tJ(L(318, [data.aV2])), aUQ = function() {
					aKw.button.textContent = L(219), aUz.e.readOnly = !1, aUP.ts(1), aUP.button.style.color = bE.qN
				}, xJ.tS(new uh([aUP.button]))), tV.push(xJ))
			}(tV),
			function(tV) {
				var xJ;
				data.aTu && 0 !== data.aV0 && ((xJ = new tF).tI(L(319)), xJ.tL(data.aUy), xJ.tS(new uh([new x(L(320, 0, "Report"), function(e) {
					return b1.z.eo(0) && (bD.t6.yg(e), b1.aUR.aUX({
						action: 5,
						pe: data.pe
					})), !0
				}, 0, 0, 1).button])), tV.push(xJ))
			}(tV), tV.push(function() {
				var xJ = new tF,
					aUL = (xJ.tI(L(200)), xJ.tN(b1.z.aUK("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209), L(210), L(211), L(212), L(213), L(214)]),
					eQ = data.aUM;
				return xJ.tN(L(215) + bD.pa.a8d(data.a0G, .01, 2) + "<br>" + L(216) + (eQ + 1) + " / " + data.a0F + "<br>" + L(217) + aUL[function(eQ, a0G) {
					if (eQ < 10) return 0;
					if (eQ < 30) return 1;
					if (eQ < 60) return 2;
					if (3e4 <= (a0G = bO.g9(a0G, 100))) return 3;
					if (12e3 <= a0G) return 4;
					if (7e3 <= a0G) return 5;
					if (3e3 <= a0G) return 6;
					if (1e3 <= a0G) return 7;
					if (500 <= a0G) return 8;
					if (200 <= a0G) return 9;
					if (70 <= a0G) return 10;
					if (20 <= a0G) return 11;
					if (3 <= a0G) return 12;
					return 13
				}(eQ, data.a0G)]), xJ
			}()), data.aTu && tV.push(function() {
				var xJ = new tF,
					uJ = (xJ.tI(L(218)), xJ.tN(b1.z.aUK("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uK({
						value: bm.buffer.data[147].value,
						eR: -1
					}, 1, void 0, function(e) {
						bm.rt.pz(147, aUO(e.target.value))
					})),
					aUP = (xJ.tS(uJ), new x(L(21), function(e) {
						var gA;
						return uJ.e.readOnly && b1.z.eo(0) && (gA = parseInt(bm.buffer.data[147].value, 10), u.aTJ.send(gA, data.pe, function() {
							bD.t6.yg(e), aUQ(), b1.aUR.aUS({
								action: 0,
								pe: data.pe,
								value: gA
							})
						})), !0
					}, 1)),
					aKw = new x(L(219), function(e) {
						return e.textContent === L(219) ? (e.textContent = L(170), uJ.e.readOnly = !0, aUP.ts(0), aUP.button.style.color = bE.rS, bm.rt.pz(147, uJ.e.value), aUO(bm.buffer.data[147].value)) : aUQ(), !0
					}),
					tK = (xJ.tS(new uh([aKw.button])), xJ.tJ()),
					aUO = function(gA) {
						return tK.innerHTML = u.z.aUT(gA, bm.buffer.data[105].value, data.pe), gA
					},
					aUQ = function() {
						aKw.button.textContent = L(219), uJ.e.readOnly = !1, aUP.ts(1), aUP.button.style.color = bE.qN
					};
				return aUO(bm.buffer.data[147].value), xJ.tS(new uh([aUP.button])), xJ
			}());
		tV.push(function() {
			var xJ = new tF,
				uJ = (xJ.tI(L(231)), new uK({
					value: data.pe,
					eR: -1
				})),
				aUU = (uJ.e.readOnly = !0, xJ.tS(uJ), xJ.tS(new uh([new x(L(232), function(e) {
					return bD.t6.a7j(uJ.e), bD.t6.yg(e), !0
				}).button])), xJ.tS(new v5), new uK({
					value: data.pe,
					eR: -1
				}));
			return xJ.tS(aUU), xJ.tS(new uh([new x(L(233), function(e) {
				u.v(8, u.a5e().a5f, new ve(25, {
					action: 0,
					pe: aUU.e.value,
					vc: 0
				}))
			}).button])), xJ
		}()), data.aTu || (tV.push(function() {
			var xJ = new tF,
				aUY = (xJ.tI(L(234)), new uK(bm.buffer.data[106])),
				customPasswordInput = (aUY.e.readOnly = !0, aUY.e.type = "password", xJ.tS(aUY), xJ.tS(new uh([new x(L(235), function(e) {
					return e.textContent === L(235) ? (e.textContent = L(236), aUY.e.type = "text") : (e.textContent = L(235), aUY.e.type = "password"), !0
				}).button, new x(L(232), function(e) {
					return bD.t6.a7j(aUY.e), bD.t6.yg(e), !0
				}).button])), new uK({
					value: "",
					eR: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", xJ.tS(customPasswordInput), xJ.tS(new uh([new x(L(237), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a5e().a5f, new ve(15))
			}).button])), xJ.tI(L(238), "0.8em"), xJ.tJ(L(239)), xJ.tJ(L(240)), xJ.tJ(L(241)), xJ
		}()), tV.push(function() {
			var xJ = new tF;
			return xJ.tI(L(242)), xJ.tS(new uh([new x(L(243), function() {
				u.v(6, u.a5e().a5f)
			}).button])), xJ.tS(new uh([new x(L(244), function() {
				bm.rt.pz(105, ""), u.v(8, u.a5e().a5f, new ve(18))
			}).button])), xJ.tS(new uh([new x(L(245) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(246), L(247), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a9b(7).a5f)
				})]))
			}, bE.r4).button])), xJ
		}()), tV.push(function() {
			function aUa(eR) {
				aUZ[0].ts(0 === eR ? bE.qZ : bE.qk), aUZ[1].ts(0 === eR ? bE.qZ : bE.r4), aUZ[2].ts(eR === tQ.tR.length - 1 || eR < 5 ? bE.qZ : bE.r4)
			}
			var tQ, aUZ, xJ = new tF;
			xJ.tI(L(252)), xJ.tJ(L(253)), bm.z.zy();
			return aUZ = [new x(L(254), function() {
				var eR = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				eR < 1 || (eR = bm.z.a03(eR)) && (bm.rt.pz(105, eR.pe), bm.rt.pz(106, eR.password), u.v(8, u.a5e().a5f, new ve(18)))
			}, bE.qZ, 1), new x(L(250), function() {
				var eR = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				if (!(eR < 1)) {
					tQ.tR[eR].remove(), tQ.tR.splice(eR, 1);
					for (var aC = eR; aC < tQ.tR.length; aC++) tQ.tR[aC].name = "" + aC;
					bm.z.a01(eR), eR = bm.buffer.data[117].value, tQ.tR[eR].textContent = tQ.tR[eR].textContent.replace("⚪", "🟢"), aUa(eR)
				}
			}, bE.qZ, 1), new x(L(251), function() {
				var eR = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				if (eR !== tQ.tR.length - 1)
					if (aUH(aUZ[2], function() {
							var fi = tQ.tR.length;
							aUa(Math.min(bm.buffer.data[117].value, fi - 1))
						})) {
						for (var aC = tQ.tR.length - 1; eR < aC; aC--) tQ.tR[aC].remove(), tQ.tR.splice(aC, 1), bm.z.a01(aC);
						aUa(eR)
					}
			}, bE.qZ, 1)], tQ = new yj(bm.buffer.data[117], aUa), __fx.savedAccounts.decorate(tQ.tR, bm.buffer.data[117].vM), aUa(0), tQ.tR[0].style.marginTop = "0.5em", xJ.tP(tQ), xJ.tS(new uh([aUZ[0].button])), xJ.tS(new uh(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), xJ.tS(new uh([aUZ[1].button])), xJ.tS(new uh([aUZ[2].button])), xJ
		}()));
		return tV.push(function() {
				var xJ = new tF,
					pW = (xJ.tI(L(264)), L(265, [(data.aUc / 1e3).toFixed(3)]) + "<br>" + L(266, [data.aUd]));
				data.aUe && (pW += "<br>" + L(267, [(data.aUf / 1e3).toFixed(3)]));
				return xJ.tN(pW), xJ
			}()), tV.push(function() {
				var xJ = new tF,
					aUL = (xJ.tI(L(258)), [L(259), L(260), L(261), L(262)]),
					eQ = data.aUb;
				return xJ.tN(L(263) + (data.a4v / 100).toFixed(2) + "<br>" + L(216) + (eQ + 1) + " / " + data.a0F + "<br>" + L(217) + aUL[eQ < 10 ? 0 : eQ < 50 ? 1 : eQ < 200 ? 2 : 3]), xJ
			}()), tV.push(function() {
				var xJ = new tF;
				return xJ.tI(L(255)), xJ.tN(L(256) + bD.pa.a8d(data.a0C, .1, 1) + "<br>" + L(216) + (data.a0D + 1) + " / " + data.a0F + "<br>" + L(257) + data.a0E), xJ
			}()),
			function(tV) {
				var xJ = new tF,
					aV3 = data.a0J,
					aV4 = (xJ.tI(L(321)), xJ.tN(L(322, [data.a0H.length ? "[" + data.a0H + "]" : "-"])), xJ.tN(L(323, [bD.pa.a8d(aV3, .01, 2)])), xJ.tN(L(324, [data.a0L + 1 + " / " + data.a0F])), data.a0M),
					aV5 = (xJ.tN(L(325, [bD.pa.a8d(aV4, .1, 1)])), data.a0O);
				xJ.tN(L(326, [aV5])), xJ.tN(L(327, [bD.pa.a8d(aV4 / Math.max(aV5, 1), .1, 2)])), aV3 = data.a0K, xJ.tI(L(328), "0.8em"), xJ.tN(L(322, [data.a0I.length ? "[" + data.a0I + "]" : "-"])), xJ.tN(L(323, [bD.pa.a8d(aV3, .01, 2)])),
					aV4 = data.a0N, xJ.tN(L(325, [bD.pa.a8d(aV4, .1, 1)])), aV5 = data.a0P, xJ.tN(L(326, [aV5])), xJ.tN(L(327, [bD.pa.a8d(aV4 / Math.max(aV5, 1), .1, 2)])), xJ.tN(b1.z.aUK("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tV.push(xJ)
			}(tV),
			function(tV) {
				var xJ = new tF;
				xJ.tI(L(329)), xJ.tN(L(263) + (data.aV6 / 10).toFixed(1) + "<br>" + L(217) + (data.aV7.length ? L(330, [data.aV7]) : L(331))), data.aTu && xJ.tS(new uh([new x(L(279), function(e) {
					return b1.z.eo(0) && (bD.t6.yg(e), b1.aUR.aUX({
						action: 4,
						pe: data.pe
					})), !0
				}, 0, 0, 1).button]));
				xJ.tN(b1.z.aUK("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tV.push(xJ)
			}(tV), tV.push(function() {
				var xJ = new tF;
				{
					var uJ, aKw, aUl, tK, aUO, aUQ;
					xJ.tI(L(277)), xJ.tN(L(278) + data.aUj + "<br>" + L(216) + (data.aUk + 1) + " / " + data.a0F + "<br>" + L(217) + br.eT(data.aUk)), data.aTu && ((uJ = new uK({
						value: bm.buffer.data[157].value,
						eR: -1
					}, 1, void 0, function(e) {
						bm.rt.pz(157, aUO(e.target.value))
					})).e.style.marginTop = "0.6em", xJ.tS(uJ), aKw = new x(L(219), function(e) {
						return e.textContent === L(219) ? (e.textContent = L(170), uJ.e.readOnly = !0, aUl[0].ts(0), aUl[0].button.style.color = bE.rS, aUO(bm.buffer.data[157].value)) : aUQ(), !0
					}), xJ.tS(new uh([aKw.button])), aUl = [new x(L(279), function(e) {
						return uJ.e.readOnly && b1.z.eo(0) && (bD.t6.yg(e), aUQ(), b1.aUR.aUS({
							action: 1,
							pe: data.pe,
							value: bO.iu(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tK = xJ.tJ(), aUO = function(gA) {
						return gA = bD.h4.a8I(gA, 2, 3e4), tK.textContent = L(280, [gA - 1, gA, bm.buffer.data[105].value]), gA
					}, xJ.tS(new uh([aUl[0].button])), aUQ = function() {
						aKw.button.textContent = L(219), uJ.e.readOnly = !1, aUl[0].ts(1), aUl[0].button.style.color = bE.qN
					}, aUO(bm.buffer.data[157].value))
				}
				return xJ
			}()),
			function(tV) {
				var xJ, a7i;
				data.aTu && !data.aV8 || (0 === a1.id || data.aTu || data.aV8) && ((xJ = new tF).tI("Patreon"), !data.aTu && data.aV9 ? xJ.tS(new uh([new x(L(235), function() {
					b1.aUR.aUX({
						action: 7,
						pe: data.pe
					}), data.aV9 = 0, u.v(7)
				}).button])) : data.aV8 ? (xJ.tN(L(332, [(data.aVA / 100).toFixed(2)]) + "<br>" + L(333, [1 + data.aVB + " / " + data.aVC]) + "<br>" + L(334, [data.aVD ? L(335) : L(336)])), data.aTu || xJ.tS(new uh([new x(L(337),
					function() {
						b1.aUR.aUX({
							action: 8,
							pe: data.pe
						}), data.aV8 = 0, bm.rt.pz(160, 0), u.v(7)
					}).button]))) : (xJ.tN(L(338), "0.75em").style.marginBottom = "0.3em", xJ.tN("  • " + L(339), "0.75em").style.whiteSpace = "pre", xJ.tN("  • " + L(340), "0.75em").style.whiteSpace = "pre", xJ.tN("  • " + L(341),
						"0.75em").style.whiteSpace = "pre", xJ.tN(L(342), "0.75em").style.marginTop = "1.0em", xJ.tN(L(343), "0.75em").style.marginTop = "1.0em", xJ.tN("<a href='" + bN.aVE +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7i = "https://www.patreon.com/oauth2/authorize?state=" + data.pe +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4r() + "/", xJ.tN(L(344), "0.75em").style.marginTop = "1.0em", xJ.tN("<a href='" +
						a7i + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aTu || (xJ.tS(new v5), xJ.tS(new uh([new x(L(236), function() {
						b1.aUR.aUX({
							action: 6,
							pe: data.pe
						}), data.aV9 = 1, u.v(7)
					}).button])), xJ.tN(L(345), "0.75em").style.marginTop = "0.75em")), tV.push(xJ))
			}(tV), tV.push(function() {
				var xJ = new tF,
					aUL = (xJ.tI(L(270)), [L(271), L(272), L(273), L(274), "Scout", L(275)]),
					eQ = data.aUh;
				return xJ.tN(L(276) + (data.aUi / 100).toFixed(2) + "<br>" + L(216) + (eQ + 1) + " / " + data.a0F + "<br>" + L(217) + aUL[eQ < 3 ? 0 : eQ < 20 ? 1 : eQ < 100 ? 2 : eQ < 500 ? 3 : eQ < 2e3 ? 4 : 5]), xJ.tN(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xJ
			}()),
			function(tV) {
				var xJ, uJ, aUU, aUP, aKw, aUQ;
				data.aTu || ((xJ = new tF).tI(L(220)), xJ.tJ(L(221)), uJ = new uK({
					value: bm.buffer.data[184].value,
					eR: -1
				}, 1, void 0, function(e) {
					bm.rt.pz(184, e.target.value)
				}), xJ.tS(uJ), xJ.tJ(L(222)), aUU = new uK({
					value: bm.buffer.data[185].value,
					eR: -1
				}, 0, void 0, function(e) {
					bm.rt.pz(185, e.target.value)
				}), xJ.tS(aUU), aUP = new x(L(223), function(e) {
					var send;
					return uJ.e.readOnly && b1.z.eo(0) && (send = function() {
						bD.t6.yg(e), aUQ(), b1.aUR.aUS({
							action: 5,
							pe: bm.buffer.data[185].value,
							value: bO.iu(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vd, new w(L(225), L(226), !1, [new x("⬅️ " + L(49), function() {
						u.a5Z()
					}), new x("✅ OK", function() {
						u.a5Z(), send()
					})]))), !0
				}, 1), aKw = new x(L(219), function(e) {
					if (e.textContent === L(219)) {
						var g2 = bJ.f9;
						if (g2.fA(aUU.e.value, 5) === g2.fA(data.pe, 5)) return new t1(L(224)), !0;
						e.textContent = L(170), uJ.e.readOnly = !0, aUU.e.readOnly = !0, aUP.ts(0), aUP.button.style.color = bE.rS, bm.rt.pz(184, uJ.e.value)
					} else aUQ();
					return !0
				}), xJ.tS(new uh([aKw.button])), aUQ = function() {
					aKw.button.textContent = L(219), uJ.e.readOnly = !1, aUU.e.readOnly = !1, aUP.ts(1), aUP.button.style.color = bE.qN
				}, xJ.tS(new uh([aUP.button])), tV.push(xJ))
			}(tV),
			function(tV) {
				var xJ, tQ, aUZ, eR, aUa;
				data.aTu || bm.zQ.get().length && ((xJ = new tF).tI(L(248)), eR = 0, aUa = function() {
					var aGd = bm.zQ.get().length;
					aUZ[0].ts(eR === aGd ? bE.qZ : bE.qk), aUZ[1].ts(eR === aGd ? bE.qZ : bE.r4), aUZ[2].ts(eR === aGd || aGd - 1 <= eR || eR < 5 ? bE.qZ : bE.r4)
				}, aUZ = [new x(L(249), function() {
					u.v(8, void 0, new ve(25, {
						action: 0,
						pe: bm.zQ.get()[eR],
						vc: 0
					}))
				}, bE.qZ, 1), new x(L(250), function() {
					bm.zQ.zf(eR), tQ.tR[eR].remove(), tQ.tR.splice(eR, 1);
					for (var aC = eR; aC < tQ.tR.length; aC++) tQ.tR[aC].name = "" + aC;
					bm.zQ.get().length && (eR = Math.max(eR - 1, 0), tQ.tR[eR].textContent = tQ.tR[eR].textContent.replace("⚪", "🟢")), aUa()
				}, bE.qZ, 1), new x(L(251), function() {
					if (aUH(aUZ[2], aUa)) {
						for (var ib = tQ.tR.length - 1; eR < ib; ib--) bm.zQ.zf(ib), tQ.tR[ib].remove(), tQ.tR.splice(ib, 1);
						aUa()
					}
				}, bE.qZ, 1)], aUa(), tQ = new yj(bm.zQ.zc(), function(aC) {
					eR = aC, aUa()
				}), __fx.followedAccounts.decorate(tQ.tR, bm.zQ.get()), tQ.tR[0].style.marginTop = "0.5em", xJ.tP(tQ), xJ.tS(new uh([aUZ[0].button])), xJ.tS(new uh([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eR)
				}).button])), xJ.tS(new uh([aUZ[1].button])), xJ.tS(new uh([aUZ[2].button])), tV.push(xJ))
			}(tV), aTw(tV, 0), tV
	}())
}

function aTf() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.aIncomeType ? (bD.tg.a76(aVI.zI(), aE.data.aIncomeData, 255), bD.tg.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(346), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(348), L(349), L(350)],
			value: aE.data.aIncomeType
		}, function(eR) {
			aVL(), 2 !== eR || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.ff)), aE.data.aIncomeType = eR, u.v(22)
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ;
		1 === aE.data.aIncomeType && ((xJ = new tF).tI("Value"), xJ.tS(new uK({
			eR: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tV.push(xJ))
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.aIncomeType && ((xJ = new tF).tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.aIncomeData, 4)), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTi() {
	var aVG, aVH, aVI;

	function aVJ() {
		aVL(), 3 !== aE.data.botDifficultyType || bD.tg.a6u(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		3 === aE.data.botDifficultyType && bD.tg.a76(aVI.zI(), aE.data.botDifficultyData, aF.lF.length - 1)
	}

	function aVQ(tV, eR) {
		var xJ = new tF,
			value = (xJ.tI(eR < 0 ? L(76) : L(75) + " " + bj.a4m[eR % 9]), 0 <= eR && (xJ.tN(L(353) + ": " + aE.data.teamPlayerCount[eR]).style.marginBottom = "1em"), eR < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eR]);
		xJ.tP(new yj({
			vM: aF.lF,
			value: value
		}, function(ib) {
			eR < 0 ? aE.data.botDifficultyValue = ib : aE.data.botDifficultyTeam[eR] = ib
		})), tV.push(xJ)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(76), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, function() {
		var tV = [];
		if (function(tV) {
				var xJ = new tF,
					vM = (xJ.tI(L(347)), [L(349), L(351), L(352), L(350)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vM.splice(2, 1));
				xJ.tP(new yj({
					vM: vM,
					value: value
				}, function(eR) {
					aVL(), aE.data.botDifficultyType = eR, 0 === aE.data.gameMode && 2 === eR && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.ff)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tV.push(xJ)
			}(tV), 0 === aE.data.botDifficultyType) aVQ(tV, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aVQ(tV, aC);
		else 3 === aE.data.botDifficultyType && ! function(tV) {
			var xJ = new tF;
			xJ.tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.botDifficultyData, 8)), xJ.tS(aVI), tV.push(xJ)
		}(tV);
		return tV
	}())
}

function aVR(data) {
	var aTs, aVS, aVT, aVU, aVV, aVW, aVX, colors, aVY, aVZ, aVa = 0,
		aVb = 0,
		aVc = !1,
		aVd = !1,
		aVe = [1, 5, 60, 240, 1440, 10080, 43200];

	function aW8(mJ, mK) {
		! function(mJ, mK) {
			return aVS < mJ && mJ < aVS + aVU && aVT < mK && mK < aVT + aVV
		}(aVa = mJ, aVb = mK) ? (aVc && (bi.e0 = !0), aVc = !1) : (aVc = !0, bi.e0 = !0)
	}
	this.show = function() {
		aVd = bm.buffer.data[127].value, aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize();
		var es = i.l,
			z0 = aTs.yx(),
			aVn = es * z0.yz,
			es = es * z0.uY;
		aVW = bD.t6.w0(.06), aVX = bD.t6.w0(.04), aVS = bD.t6.w0(.06), aVT = es + aVW, aVU = i.j - aVS - aVX, aVV = aVn + es - aVT - aVX
	}, this.z1 = function() {
		aTs.z1(),
			function() {
				var aC, aVk, hB, fp, g1, h = data.data,
					aVr = 1,
					aVs = .125,
					aVt = aVd ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aVk = h[aC].aVk, hB = aVk.length, aVr = Math.max(hB, aVr), g1 = 0; g1 < hB; g1++) aVs = Math.max(aVk[g1], aVs), aVt = Math.min(aVk[g1], aVt);
				var o8 = aVT + aVV,
					a2N = aVV / (aVs - aVt),
					a2M = 1 / (aVr - 1);
				for (z2.lineWidth = bf.a3P, aC = 0; aC < h.length; aC++) {
					for (aVk = h[aC].aVk, hB = aVk.length, fp = aVS, z2.beginPath(), z2.moveTo(fp + aVU, o8 - a2N * (aVk[hB - 1] - aVt)), g1 = hB - 2; 0 <= g1; g1--) z2.lineTo(fp + a2M * g1 * aVU, o8 - a2N * (aVk[g1] - aVt));
					z2.strokeStyle = colors[aC], z2.stroke()
				}(function(aVt, aVs, o8, a2N) {
					z2.font = bD.t6.t9(0, .25 * aVS), bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 2), z2.fillStyle = colors[0];
					for (var fp = .92 * aVS, aC = 0; aC < 3; aC++) {
						var gA = aVt + aC * (aVs - aVt) / 2;
						z2.fillText((gA / 1e3).toFixed(3), fp, o8 - a2N * (gA - aVt))
					}
				})(aVt, aVs, o8, a2N),
				function(aVr) {
					var fr = aVT + aVV + .15 * aVX;
					z2.font = bD.t6.t9(0, Math.min(.4 * aVX, .028 * i.j)), bD.t6.textBaseline(z2, 0), bD.t6.textAlign(z2, 2), z2.fillStyle = colors[0], z2.fillText(bD.a6l.a7a(aVY), aVS + aVU, fr), bD.t6.textAlign(z2, 0), z2.fillText(bD.a6l.a7a(
						new Date(aVZ.getTime() - 6e4 * (aVr - 1) * aVe[data.aVj])), aVS, fr)
				}(aVr),
				function(aVr, aVt, aVs) {
					if (aVc && !(aVr < 2)) {
						for (var aDG, eR = (aVa - aVS) / aVU * (aVr - 1), aVw = Math.floor(eR), aVx = Math.floor(1 + eR), aVy = eR - aVw, aVz = 1e5, aW0 = -1, aW1 = -1, aW2 = aVs - (aVs - aVt) * (aVb - aVT) / aVV, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aHG, aVk = h[aC].aVk;
							aVk.length <= aVx || (aVk = aVk[aVw] + aVy * (aVk[aVx] - aVk[aVw]), (aHG = Math.abs(aW2 - aVk)) < aVz && (aVz = aHG, aW0 = aC, aW1 = aVk))
						} - 1 !== aW0 && (aVs = aVT + aVV - (aW1 - aVt) / (aVs - aVt) * aVV, z2.lineWidth = .5 * bf.a3P, z2.strokeStyle = colors[aW0], z2.beginPath(), z2.moveTo(aVS, aVs), z2.lineTo(aVa, aVs), z2.lineTo(aVa, aVT + aVV), z2
							.stroke(), z2.beginPath(), z2.arc(aVa, aVs, .1 * aVS, 0, 2 * Math.PI), z2.fillStyle = colors[aW0], z2.fill(), aVt = aVT + aVV + .15 * aVX, bD.t6.textAlign(z2, 1), aDG = aVr - 2 < eR ? (aDG = aVZ.getTime() - 6e4 *
								aVe[data.aVj], new Date(aDG + (eR - (aVr - 2)) * (aVY.getTime() - aDG))) : new Date(aVZ.getTime() - 6e4 * (aVr - eR - 1) * aVe[data.aVj]), aVr = bD.a6l.a7a(aDG), eR = bD.t6.measureText(aVr), aDG = bO.iu(aVa,
								aVS + .5 * eR, aVS + aVU - .5 * eR), z2.fillStyle = bD.color.qF(70, 50, 20), z2.fillRect(aDG - .52 * eR, aVT + aVV, 1.04 * eR, .55 * aVX), z2.fillStyle = colors[0], z2.fillText(aVr, aDG, aVt), z2.font = bD.t6
							.t9(0, .25 * aVS), bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 2), aDG = .92 * aVS, aVr = (aW1 / 1e3).toFixed(3), eR = bD.t6.measureText(aVr), aVt = aDG - 1.04 * eR, z2.fillStyle = bD.color.qF(70, 50, 20), z2
							.fillRect(aVt, aVs - .1625 * aVS, aVS - aVt, .275 * aVS), z2.fillStyle = colors[aW0], z2.fillText(aVr, aDG, aVs))
					}
				}(aVr, aVt, aVs)
			}(), z2.lineWidth = bf.a3P, z2.strokeStyle = bE.qN, z2.beginPath(), z2.moveTo(aVS, aVT), z2.lineTo(aVS, aVT + aVV), z2.lineTo(aVS + aVU, aVT + aVV), z2.stroke();
		var aC, fontSize = .5 * aVW,
			h = (z2.font = bD.t6.t9(0, fontSize), bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 0), data.data),
			fi = h.length,
			fr = aVT - .5 * aVW,
			pW = "";
		for (aC = 0; aC < fi; aC++) pW += h[aC].name + "  ";
		pW = pW.trim();
		var aW5 = bD.t6.measureText(pW),
			fp = .5 * (i.j - aW5);
		for (aW5 > i.j && (fp = 0, z2.font = bD.t6.t9(0, i.j / aW5 * fontSize)), aC = 0; aC < fi; aC++) z2.fillStyle = colors[aC], z2.fillText(h[aC].name, fp, fr), fp += bD.t6.measureText(h[aC].name + "  ")
	}, this.hw = function(mJ, mK) {
		aW8(mJ, mK)
	}, this.a5x = function(mJ, mK) {
		aW8(mJ, mK)
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	};
	var aC, ej, a7Y, ib, fl = data.data,
		fi = fl.length,
		max = 1;
	for (aC = 0; aC < fi; aC++) max = Math.max(max, fl[aC].aVk.length);
	for (aC = 0; aC < fi; aC++)
		for (; fl[aC].aVk.length < max;) fl[aC].aVk.unshift(0);
	ej = new Date, a7Y = 6e4 * ej.getTimezoneOffset(), ib = ej.getTime() - a7Y, aVY = new Date(ib), 6 === data.aVj ? function(ej, a7Y) {
		var aVm = ej.getUTCFullYear(),
			ej = ej.getUTCMonth() + 1;
		aVZ = ej < 12 ? new Date(Date.UTC(aVm, ej) - a7Y) : new Date(Date.UTC(aVm + 1, 0) - a7Y)
	}(ej, a7Y) : (a7Y = 6e4 * aVe[data.aVj], aVZ = data.aVj <= 4 ? new Date(ib + a7Y - ej.getTime() % a7Y) : new Date(ib + a7Y - (ej.getTime() + 2592e5) % a7Y)), ib = bD.color, colors = [bE.qN, ib.qF(255, 0, 0), ib.qF(0, 200, 0), ib.qF(80, 80,
		255), ib.qF(255, 255, 0), ib.qF(255, 0, 255), ib.qF(0, 255, 255), ib.qF(255, 140, 0), ib.qF(128, 128, 128), ib.qF(0, 255, 140)], aTs = new yn(L(354) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aVj] + ", " + bD.a6l.a7X(aVY), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(355), function() {
			u.v(14)
		})
	], !1)
}

function aTX() {
	var aTs, aTt, tV, aW9 = -1;
	this.show = function() {
		aTs.show(), this.resize(), aW9 = bm.buffer.data[125].value
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(356), [new x("⬅️ " + L(49), function() {
		aW9 !== bm.buffer.data[125].value ? u.z.aWA() : u.aTq(13)
	})]), aTt = new tT(aTs.ys, ((tV = []).push(function() {
		var xJ = new tF,
			aKw = (xJ.tI(L(357)), xJ.tJ(L(358)), new x(L(359), function() {
				bm.rt.pz(130, 0), u.z.aWA()
			}, 0, 0, 1)),
			uJ = new uK(bm.buffer.data[126], 0, function() {
				aKw.button.click()
			});
		return xJ.tS(uJ), uJ.e.placeholder = "a,b,c", uJ.e.style.marginTop = "0.5em", xJ.tS(new uh([aKw.button])), xJ
	}()), tV.push(function() {
		var xJ = new tF,
			aKw = new x(L(359), function() {
				bm.rt.pz(130, 1), u.z.aWA()
			}, 0, 0, 1),
			aWF = new uK(bm.buffer.data[129], 1, function() {
				aWF.e.focus()
			}),
			aWG = new uK(bm.buffer.data[128], 1, function() {
				aKw.button.click()
			});
		return xJ.tI(L(360)), xJ.tS(aWG), aWG.e.style.marginBottom = "0.5em", xJ.tI(L(361)), xJ.tS(aWF), xJ.tS(new uh([aKw.button])), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		return xJ.tI(L(362)), bm.buffer.data[125].vM = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xJ.tP(new yj(bm.buffer.data[125])), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		return xJ.tI(L(363)), xJ.tS(new ud(bm.buffer.data[127], L(364))), xJ
	}()), tV))
}

function aTW() {
	var aTs, aWH, aVU, aWI, aWJ, aWK, colors = [0, 0, 0],
		aWL = -1;

	function aWO(aC) {
		var aWP = aWH.fr + aC * (bf.gap + aWK);
		z2.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", z2.fillRect(aWI, aWP, colors[aC] * aWJ, aWK), z2.strokeStyle = bE.qN, z2.strokeRect(aWI, aWP, aWJ,
			aWK), z2.fillStyle = bE.qN, z2.font = bD.t6.t9(0, .32 * aWK), bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 0), z2.fillText(L(0 === aC ? 367 : 1 === aC ? 368 : 369) + aWM(aC), aWI + bf.gap, aWP + .53 * aWK)
	}

	function aWM(aC, aWQ) {
		return aWQ = aWQ || 256, bO.iu(Math.floor(aWQ * colors[aC]), 0, aWQ - 1)
	}

	function a6R(mJ, mK) {
		return !(mJ < aWI || mK < aWH.fr || mJ > aWH.fp + aWH.j || mK > aWH.fr + aWH.k)
	}
	this.show = function() {
		var gA = bm.buffer.data[121].value;
		colors[0] = (gA >> 12) / 63, colors[1] = (gA >> 6 & 63) / 63, colors[2] = (63 & gA) / 63, aTs.show(), this.resize()
	}, this.uW = function() {
		bm.rt.pz(121, (aWM(0, 64) << 12) + (aWM(1, 64) << 6) + aWM(2, 64)), aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aWH.resize();
		var es = i.l,
			z0 = aTs.yx(),
			aWN = (aWH.fr = Math.max(aWH.fr, es * z0.uY + bf.gap), es * z0.yz - 2 * bf.gap);
		aWH.k = Math.min(aWH.k, aWN), aWH.j = 2 * aWH.k, aWH.fr = es * z0.uY + .5 * (es * z0.yz - aWH.k), aWH.fp = .5 * (i.j - aWH.j), aVU = .25 * aWH.j, aWI = aWH.fp + aVU + bf.gap, aWJ = aWH.j - aVU - bf.gap, aWK = (aWH.k - 2 * bf.gap) / 3
	}, this.z1 = function() {
		var eQ, vz, g2;
		aTs.z1(), z2.lineWidth = bf.a3P, eQ = aWM(0), vz = aWM(1), g2 = aWM(2), z2.fillStyle = "rgb(" + eQ + "," + vz + "," + g2 + ")", z2.fillRect(aWH.fp, aWH.fr, aVU, aWH.k), z2.strokeStyle = bE.qN, z2.strokeRect(aWH.fp, aWH.fr, aVU, aWH.k), z2
			.fillStyle = eQ + vz + g2 < 306 && vz < 150 ? bE.qN : bE.qE, bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 1), z2.font = bD.t6.t9(0, .1 * aWH.k), z2.rotate(-Math.PI / 2), z2.fillText(L(366), -aWH.fr - .5 * aWH.k, aWH.fp + .5 * aVU),
			z2.setTransform(1, 0, 0, 1, 0, 0), aWO(0), aWO(1), aWO(2)
	}, this.hw = function(mJ, mK) {
		a6R(mJ, mK) && (aWL = bO.iu(Math.floor((mK - aWH.fr) / (aWK + .75 * bf.gap)), 0, 2), colors[aWL] = bO.iu((mJ - aWI) / aWJ, 0, 1), bi.e0 = !0)
	}, this.a5x = function(mJ) {
		-1 !== aWL && (colors[aWL] = bO.iu((mJ - aWI) / aWJ, 0, 1), bi.e0 = !0)
	}, this.a60 = function(mJ, mK, deltaY) {
		a6R(mJ, mK) && (mJ = bO.iu(Math.floor((mK - aWH.fr) / (aWK + .75 * bf.gap)), 0, 2), colors[mJ] = bO.iu(colors[mJ] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.e0 = !0)
	}, this.a6L = function() {
		0 <= aWL && (aWL = -1, bi.e0 = !0)
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(365), [new x("⬅️ " + L(49), function() {
		u.z.aHB()
	})], !1), aWH = new u8([.5, .25], [.5, .5], 1)
}

function aTe() {
	var aVG, aVH, aVI, p7;

	function aVJ() {
		aVL(), u.aTr()[19] = null, u.a5Z()
	}

	function aWR() {
		aVL(), u.v(21)
	}

	function aVL() {
		1 === aE.data.gameMode ? aE.a90.a96() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.tg.a76(aVI.zI(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, p7 = [new x("⬅️ " + L(49), aVJ)], 1 === aE.data.gameMode && p7.push(new x(L(370), aWR, 1, 1)), aVG = new yn(L(371), p7), aVH = new tT(aVG.ys, (p7 = [], 0 === aE.data.gameMode ? (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(372), L(350)],
			value: aE.data.colorsType
		}, function(eR) {
			aVL(), aE.data.colorsType = eR, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.ff || (aE.data.colorsData = new Uint32Array(aE.ff)), u.v(21)
		})), tV.push(xJ)
	}(p7), 1 === aE.data.colorsType && function(tV) {
		var xJ = new tF;
		xJ.tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.colorsData, 1)), xJ.tS(aVI), tV.push(xJ)
	}(p7)) : (aE.a90.a96(), p7.push(function() {
		var xJ = new tF;
		xJ.tI(L(353));
		for (var aC = 0; aC < bj.a4m.length; aC++) {
			var ib = (aC + 1) % bj.a4m.length,
				e = xJ.tN((0 == ib ? "" : "Team ") + bj.a4m[ib]);
			aC && (e.style.marginTop = "0.5em"), xJ.tS(new uK({
				eR: -1,
				value: aE.data.teamPlayerCount[ib]
			}, 1, 0, function(e) {
				aVG.yt[1].ts(0);
				var playerCount = bO.iu(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aWU] = playerCount
			})).e.aWU = ib
		}
		return xJ
	}()), function(tV) {
		for (var xJ = new tF, vM = (xJ.tI(L(373)), []), aC = 0; aC < bj.a4m.length; aC++) {
			var ib = (aC + 1) % bj.a4m.length;
			vM.push(bj.a4m[ib])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xJ.tP(new yj({
			vM: vM,
			value: (aE.data.colorsData[0] % 16 + bj.a4m.length - 1) % bj.a4m.length
		}, function(eR) {
			var eR = (eR + 1) % bj.a4m.length,
				aWV = bj.aWW[eR],
				aWV = (aWV[0] >> 2 << 12) + (aWV[1] >> 2 << 6) + (aWV[2] >> 2);
			aE.data.colorsData[0] = aWV - (15 & aWV) + eR
		})), tV.push(xJ)
	}(p7)), p7))
}

function ve(id, a8L, aWX) {
	var aTs, aWY;

	function aWd() {
		aWY.tW.innerHTML += "<br>" + L(376)
	}

	function aWm() {
		var g2 = 1;
		u.v(4, 1, new w(L(377), L(378), !1, [new x("🔄 Reload", function() {
			g2 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g2 = 0
		}, bE.qk)]))
	}

	function aWc() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dt(bG.aD), bm.rt.pz(110, __fx.passwordReset.getCustomPassword() || bI.f9
			.vf(bI.f9.vg(15))), b1.aUR.aWo()
	}
	this.aWZ = !0, this.aWa = id, this.show = function() {
		aTs.show(), this.resize(), 15 === id ? (b1.z.aWb(id) ? aWc : aWd)() : 16 === id ? b1.z.aWb(id) ? b1.ep.eq(2) : aWd() : 17 === id ? b1.z.aWb(id) ? b1.ep.eq(3) : aWd() : 18 === id ? (b1.z.close(0, 3253), b1.z.aLw(0, id, 0), aWd()) : 21 ===
			id ? b1.z.aWb(id) ? b1.aWe.aWf(a8L.vu, a8L.vv, a8L.vw) : aWd() : 22 === id ? b1.z.aWb(id) ? b1.aWe.aWg(a8L.vu, a8L.aWh, a8L.aWi) : aWd() : 23 === id ? b1.z.aWb(id) ? b1.aWe.aWj(a8L.aVj, a8L.a59) : aWd() : 24 === id ? b1.z.aWb(id) ? b1
			.aWe.aWk(a8L.aVj, a8L.vv, a8L.vw) : aWd() : 25 === id ? b1.z.aWb(id) ? b1.aUR.aUX(a8L) : aWd() : 28 === id ? b1.z.aWb(id) ? b1.aWe.aWl(a8L.vu, a8L.aWh, a8L.aWi) : aWd() : 29 === id ? b1.z.aWb(id) ? b1.aUR.aUw(a8L) : aWd() : 30 ===
			id && (b1.z.aWb(id) ? bA.aH6() || aWm() : aWd())
	}, this.aWn = function() {
		15 === id ? aWc() : 16 === id ? b1.ep.eq(2) : 17 === id ? b1.ep.eq(3) : 18 === id ? u.v(8, this.a5f, new ve(16)) : 21 === id ? b1.aWe.aWf(a8L.vu, a8L.vv, a8L.vw) : 22 === id ? b1.aWe.aWg(a8L.vu, a8L.aWh, a8L.aWi) : 23 === id ? b1.aWe.aWj(
			a8L.aVj, a8L.a59) : 24 === id ? b1.aWe.aWk(a8L.aVj, a8L.vv, a8L.vw) : 25 === id ? b1.aUR.aUX(a8L) : 28 === id ? b1.aWe.aWl(a8L.vu, a8L.aWh, a8L.aWi) : 29 === id ? b1.aUR.aUw(a8L) : 30 === id ? bA.aH6() || aWm() : 1e3 === id && (
			this.aWa = id = 25, b1.aUR.aUX(a8L))
	}, this.aHA = function(code, c2, data) {
		!c2 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5f) : 17 === code ? (b1.z.close(0, 3252), bm.z.a01(0), bm.buffer.data[117].vM && 0 < bm.buffer.data[117].vM.length && (c2 = bm.z.a03(0)) ? (bm.rt.pz(105, c2.pe), bm.rt.pz(
			106, c2.password), u.v(8, this.a5f, new ve(16))) : (bm.rt.pz(105, ""), u.z.aHB())) : 21 === code ? u.v(10, this.a5f, new aFX(data)) : 23 === code ? u.v(13, this.a5f, new aVR({
			data: data,
			aVj: a8L.aVj
		})) : 25 === code ? (u.z.aTY.pe = a8L.pe, bm.zQ.nT(a8L.pe), u.v(15, this.a5f)) : 30 === code && (data ? u.v(1) : aWm()))
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aWY.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(374), [new x("⬅️ " + L(49), function() {
		aWX ? u.v(29) : u.z.aHB()
	})]), aWY = new ug(aTs.ys, L(375))
}

function aTc() {
	var aVG, aVH, tV;

	function aWr() {
		var hB;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a90.a96()), hB = bD.tg.a70(aE.data.teamPlayerCount, 0), aE.data.numberTeams = hB) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aVJ() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aWt(), aE.data.canvas = null, u.v(5, 5)
	}

	function aWt() {
		bC.si.dt(), bm.rt.pz(156, bC.a9H.a3t())
	}

	function aWp() {
		aE.data.isReplay = 0, aWt(), aE.a90.a9U(), ab.aM7(), aE.a90.a9R(), aE.data.canvas = 2 === aE.data.mapType ? bV.a0y : null, aE.a94(), aE.a92 = 1
	}

	function aX5() {
		aWr();
		for (var h = [aWw(), aWx(), aWy()], aC = 3; aC < 6; aC++) u.removeChild(aVH.tW, aVH.tX[aC].tH), aVH.tX[aC] = h[aC - 3], aVH.tW.appendChild(aVH.tX[aC].tH);
		aVH.resize()
	}

	function aWw() {
		var aX6, xJ = new tF;
		return xJ.tI(L(371)), aX6 = 0 === aE.data.gameMode ? [L(372), L(350)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xJ.tN(aX6), xJ.tS(new uh([new x(L(382), function() {
			u.v(21)
		}).button])), xJ
	}

	function aWx() {
		var xJ = new tF,
			h = (xJ.tI(L(76)), [L(349) + ": " + aF.lF[aE.data.botDifficultyValue], L(351), L(352), L(350)]);
		return xJ.tN(h[aE.data.botDifficultyType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(25)
		}).button])), xJ
	}

	function aWy() {
		var xJ = new tF,
			h = (xJ.tI("Spawning"), [L(372), L(384), L(350)]);
		return xJ.tN(h[aE.data.spawningType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(24)
		}).button])), xJ
	}
	this.show = function() {
		aVG.show(), this.resize(), aVG.ys.scrollTop = u.z.vW[0]
	}, this.uW = function() {
		u.z.vW[0] = aVG.ys.scrollTop, aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn("🔧 " + L(379), [new x("⬅️ " + L(49), aVJ), new x(L(380), aWp)]), aWr(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a0y : 1 === aE.data.mapType ? aE.data.canvas = bV.aRG(bV.a9S(aE.data), 0).a0y : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aRG(bV.a9S(aE.data), aE.data.mapSeed).a0y)), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF,
			a7G = (xJ.tI(L(381)), aE.data.canvas);
		a7G.style.width = "100%", xJ.tS({
			e: a7G
		}), xJ.tS(new uh([new x(L(382), function() {
			u.v(20)
		}).button])), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ = new tF;
		xJ.tI(L(353)), xJ.tS(new uK({
			eR: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.iu(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.tg.a70(aE.data.teamPlayerCount, 0), aE.a90.a96(), bD.tg.a70(aE.data.teamPlayerCount, 0) !== e) && aX5()
		})), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF;
		xJ.tI(L(383)), xJ.tP(new yj({
			vM: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eR) {
			aE.data.gameMode !== eR && (1 === (aE.data.gameMode = eR) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aX5())
		})), tV.push(xJ)
	}(tV), tV.push(aWw()), tV.push(aWx()), tV.push(aWy()), function(tV) {
		var xJ = new tF,
			h = (xJ.tI(L(385)), [L(386), L(387), L(350)]);
		xJ.tN(h[aE.data.playerNamesType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(23)
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF,
			h = (xJ.tI(L(346)), [L(348), L(349) + ": " + aE.data.aIncomeValue, L(350)]);
		xJ.tN(h[aE.data.aIncomeType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(22)
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF,
			h = (xJ.tI(L(388)), [L(348), L(349) + ": " + aE.data.tIncomeValue, L(350)]);
		xJ.tN(h[aE.data.tIncomeType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(26)
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF,
			h = (xJ.tI(L(389)), [L(348), L(349) + ": " + aE.data.iIncomeValue, L(350)]);
		xJ.tN(h[aE.data.iIncomeType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(27)
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF,
			h = (xJ.tI(L(390)), [L(348), L(349) + ": " + aE.data.sResourcesValue, L(350)]);
		xJ.tN(h[aE.data.sResourcesType]), xJ.tS(new uh([new x(L(382), function() {
			u.v(28)
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF;
		xJ.tI(L(391)), xJ.tS(new uh([new x(L(392), function() {
			u.y(), aE.a90.a9V(), u.z.vW[0] = 0, u.v(19)
		}).button])), xJ.tS(new uh([new x(L(393), function() {
			bp.aOT()
		}).button])), xJ.tS(new uh([new x(L(394), function() {
			return bp.aOV(), !0
		}).button])), tV.push(xJ)
	}(tV), tV))
}

function aTn() {
	var aVG, q7 = !0;

	function pv(pu, a9Z) {
		var tH = document.createElement("div"),
			aX9 = document.createElement("span"),
			aXA = document.createElement("span");
		aX9.textContent = aX.aFt(a9Z.ei) + ":", aX9.style.color = bE.qc, aX9.style.paddingRight = "0.4em", aX9.style.display = "table-cell", aX9.style.width = "6ch", aX9.style.textAlign = "end", tH.appendChild(aX9), aXA.textContent = a9Z.pW, tH
			.appendChild(aXA), tH.style.display = "table", a9Z.s7 && function(tH, s7) {
				{
					var aNq;
					s7 >= 1024 - ak.q5.a3C ? ((aNq = document.createElement("img")).src = ak.a11.a30[s7 - 1024 + ak.q5.a3C].toDataURL(), aNq.style.width = "1.5em", aNq.style.height = "1.5em", aNq.style.verticalAlign = "middle", tH.appendChild(aNq)) :
						((aNq = document.createElement("span")).textContent = ak.q5.a3R(s7), aNq.style.display = "inline-block", aNq.style.fontSize = "1.5em", aNq.style.lineHeight = "1em", aNq.style.verticalAlign = "middle", tH.appendChild(aNq))
				}
			}(tH, a9Z.s7), pu.appendChild(tH)
	}

	function aX8() {
		q7 && (aVG.ys.scrollTop = aVG.ys.scrollHeight)
	}
	this.clear = function() {
		aVG.ys.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aAS = bu.a9c(), fi = aAS.length, pu = document.createDocumentFragment(), aC = 0; aC < fi; aC++) pv(pu, aAS[aC]);
		aVG.ys.appendChild(pu), aX8(), aVG.show(), this.resize(), q7 = !0, aX8()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVG.ys.style.padding = "0.4em " + bD.t6.th(bf.te)
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, this.a2t = function(a9Z) {
		var pu = document.createDocumentFragment();
		pv(pu, a9Z), aVG.ys.appendChild(pu), aX8()
	}, (aVG = new yn(L(395), [new x("⬅️ " + L(49), function() {
		u.aTq(1)
	})])).ys.style.overflowY = "auto", aVG.ys.addEventListener("scroll", function() {
		q7 = aVG.ys.scrollTop >= aVG.ys.scrollHeight - aVG.ys.clientHeight - 2
	})
}

function aTK() {
	var aXC = 0,
		aXD = 50;
	this.send = function(gA, pe, send) {
		gA = bD.h4.a8I(gA, 1, 1e6), aXC + gA < aXD ? (aXC += gA, send()) : u.v(4, u.vd, new w(L(225), L(396, [pe, gA]), !1, [new x("⬅️ " + L(49), function() {
			u.a5Z()
		}), new x("✅ OK", function() {
			aXC = 0, aXD *= 2, u.a5Z(), send()
		})]))
	}
}

function aTk() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.iIncomeType && bD.tg.a76(aVI.zI(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(389), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(348), L(349), L(350)],
			value: aE.data.iIncomeType
		}, function(eR) {
			aVL(), 2 !== eR || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.ff), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eR, u.v(27)
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ;
		1 === aE.data.iIncomeType && ((xJ = new tF).tI("Value"), xJ.tS(new uK({
			eR: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tV.push(xJ))
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.iIncomeType && ((xJ = new tF).tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.iIncomeData, 4)), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTS() {
	var aXE, aXF, aWH, uJ, aXG, ux = 0;
	this.aMc = new vk, aWH = new u8([.45, .27], [.5, .5], 2 / 3), aXF = [new x("⚔️<br>" + L(397), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aXH(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qq), new x("🗡️<br>" + L(379), function() {
			aXH(1)
		}, bE.rA), new x("🔑<br>" + L(398), function() {
			aXH(2)
		}, bE.rX), new x("☰<br>" + L(399), function() {
			aXH(3)
		}, bE.qa), new x("", function() {
			u.v(12)
		}, bE.qJ, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uJ = new uK(bm.buffer.data[122]);
	for (var aC = 0; aC < aXF.length; aC++) aXF[aC].button.style.position = "absolute";

	function aXH(eR) {
		a1.a2.setState(10), ac.w3() || ac.aMT(), 0 === eR ? u.z.a9K(1) : 1 === eR ? (bC.aOn.a0k(bm.buffer.data[156].value, 1) || aE.a90.a9V(), u.v(19)) : 2 === eR ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vd, new ve(16)) : u.z.aXI(u.vd,
			16) : 3 === eR && u.v(1)
	}
	uJ.e.style.position = "absolute", uJ.e.style.textAlign = "center", uJ.e.placeholder = L(400), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aMc.show(), aXF[4].ts(bD.color.a7N(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uJ.e);
		for (var aC = 0; aC < aXF.length; aC++) document.body.appendChild(aXF[aC].button);
		1 !== a1.id || a1.eA < 5 || (aXG && bi.ei > aXG + 144e5 ? a1.zk.setState(14) : aXG = bi.ei)
	}, this.uW = function() {
		this.aMc.uW(), u.removeChild(document.body, uJ.e);
		for (var aC = 0; aC < aXF.length; aC++) u.removeChild(document.body, aXF[aC].button)
	}, this.resize = function() {
		this.aMc.resize(), this.aMc.resize(), aWH.resize();
		var gap = .5 * bf.gap,
			wW = 10 / 99 * .84 * aWH.j,
			aXL = .16 * aWH.k,
			aDo = .19 * aWH.j,
			fp = aWH.fp + aDo,
			wW = aWH.fr + wW + 3 * gap,
			j = .5 * (aWH.j - gap) - aDo,
			aDo = aWH.j - 2 * aDo - aXL - gap,
			aDo = (bD.t6.w1(uJ.e, fp, wW, aDo, aXL), bD.t6.w1(aXF[4].button, fp + aDo + gap, wW, aXL, aXL), ux = wW, .5 * (aWH.fr + aWH.k - (wW += aXL + gap) - gap));
		bD.t6.w1(aXF[0].button, fp, wW, j, aDo), bD.t6.w1(aXF[1].button, fp + j + gap, wW, j, aDo), bD.t6.w1(aXF[2].button, fp, wW + aDo + gap, j, aDo), bD.t6.w1(aXF[3].button, fp + j + gap, wW + aDo + gap, j, aDo);
		bD.t6.w1(aXF[5].button, fp, wW + aDo * 2 + gap * 2, j * 2 + gap, aDo / 3);
		bD.t6.w1(aXF[6].button, fp, wW + aDo * 2.33 + gap * 3, j * 2 + gap, aDo / 3);
		for (var aC = 0; aC < aXF.length; aC++) aXF[aC].button.style.font = bD.t6.t9(0, bD.t6.yU(.065 * aWH.k)), bD.t6.tB(aXF[aC].button, 5);
		uJ.e.style.font = bD.t6.t9(0, bD.t6.yU(.08 * aWH.k)), bD.t6.tB(uJ.e, 5)
	}, this.z1 = function() {
		if (ab.aMB(), aU.z1(), fi = Math.floor((a1.a2.iv() ? .018 : .0137) * i.iw), z2.font = bD.t6.t9(0, Math.max(5, fi)), bD.t6.textBaseline(z2, 0), bD.t6.textAlign(z2, 2), z2.fillStyle = bE.qN, z2.fillText(m.eA, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = z2.measureText(text).width, fi = Math.max(5, fi), z2.textAlign = "left", z2.textBaseline = "middle", z2.fillText(text, z2.canvas.width - textLength - fi / 2, 2 * fi), aP.z1(ux), bb.z1(), ac.w3()) {
			z2.imageSmoothingEnabled = !1;
			var text = ac.xD("territorial.io"),
				textLength = .84 * aWH.j / text.width;
			z2.setTransform(textLength, 0, 0, textLength, aWH.fp + .08 * aWH.j, aWH.fr), aXE = aXE || bD.p3.a8J(text, bD.p3.a8Q, [0, 0, 0]);
			for (var fp = -1; fp <= 1; fp += 2)
				for (var fr = -1; fr <= 1; fr += 2) z2.drawImage(aXE, fp, fr);
			z2.drawImage(text, 0, 0), z2.imageSmoothingEnabled = !0;
			var fi = ac.xD("logo"),
				aXO = .6666 * textLength * text.height / fi.height,
				oK = .5 * i.j,
				oL = aWH.fr + .5 * textLength * text.height - .5 * aXO * fi.height;
			z2.setTransform(aXO, 0, 0, aXO, oK - .6 * textLength * text.width, oL), z2.drawImage(fi, 0, 0), z2.setTransform(aXO, 0, 0, aXO, oK + .6 * textLength * text.width - aXO * fi.width, oL), z2.drawImage(fi, 0, 0), z2.setTransform(1, 0, 0,
				1, 0, 0), z2.imageSmoothingEnabled = !0
		}
	}
}

function aTZ() {
	var aTs, aXP, aXQ, yo;

	function aXR(aC) {
		u.v(8, u.vd, new ve(21, {
			vu: aC,
			vv: 0,
			vw: 10
		}))
	}
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aXP.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aXQ = [new x(L(401), function() {
		aXR(1)
	}, 0, 0, 1), new x(L(402), function() {
		aXR(2)
	}, 0, 0, 1), new x(L(403), function() {
		aXR(3)
	}, 0, 0, 1), new x(L(404), function() {
		aXR(0)
	}, 0, 0, 1), new x(L(405), function() {
		aXR(9)
	}, 0, 0, 1), new x(L(406), function() {
		aXR(10)
	}, 0, 0, 1), new x(L(407), function() {
		aXR(11)
	}, 0, 0, 1), new x(L(408), function() {
		aXR(13)
	}, 0, 0, 1)], yo = [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})], aTs = new yn(L(409), yo), aXP = new u6(aXQ, aTs.ys)
}

function aHY(title, tO, aXS) {
	var aTs, aWY;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aWY.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aXS = aXS || [new x("⬅️ " + L(49), function() {
		u.a5Z()
	}, bE.r4)], aTs = new yn(title, aXS), aWY = new ug(aTs.ys, tO), bD.t6.textAlign(aTs.ys.style, 1)
}

function aFX(data) {
	var aTs, aXT;

	function aXc(fi) {
		return fi < 60 ? 1 === fi ? fi + " Second" : fi + " Seconds" : fi < 3600 ? 1 === (fi = Math.floor(fi / 60)) ? fi + " Minute" : fi + " Minutes" : fi < 172800 ? 1 === (fi = Math.floor(fi / 3600)) ? fi + " Hour" : fi + " Hours" : (fi = Math
			.floor(fi / 172800)) + " Days"
	}

	function aXV(kJ) {
		var fi = data.data.length;
		if (fi) {
			for (var vv, max = min = parseInt(data.data[0][0]), aC = 1; aC < fi; aC++) var aKO = parseInt(data.data[aC][0]),
				min = Math.min(aKO, min),
				max = Math.max(aKO, max);
			vv = kJ < 0 ? min + kJ : max + 1, u.v(8, u.a5e().a5f, new ve(21, {
				vu: data.vu,
				vv: vv,
				vw: vv + Math.abs(kJ)
			}))
		}
	}
	if (this.show = function() {
			aTs.show(), this.resize()
		}, this.uW = function() {
			aTs.uW()
		}, this.resize = function() {
			aTs.resize(), aXT.resize()
		}, this.a6V = function(es) {
			2 === es && aTs.yt[0].tp()
		}, data.aFY) {
		aTs = new yn(L(33), [new x("⬅️ " + L(49), function() {
			u.a5Z()
		})]);
		var fl = {
				vN: [],
				vS: [L(422), L(423), L(424) + " ↗"],
				vZ: [12, 50, 38]
			},
			a9P = aE.data.a9P;
		if (a9P) {
			for (var fi = a9P.length, vN = fl.vN, a2u = ah.a2u, aC = 0; aC < fi; aC++) vN.push([{
				gA: aC + 1 + ".",
				ej: 0
			}, {
				gA: a2u[aC],
				ej: 0
			}, {
				gA: bI.f9.a3i(a9P[aC], 5),
				ej: 1,
				pe: a9P[aC],
				vc: 0
			}]);
			aXT = new vL(aTs.ys, fl, {
				vV: 1
			})
		} else aXT = new vL(aTs.ys, fl)
	} else {
		var fl = data.data.length ? 0 : 1,
			aXS = [new x("⬅️ " + L(49), function() {
				u.a5Z()
			}), new x(L(410), function() {
				aXV(-10)
			}, fl, 0, 1), new x(L(411), function() {
				aXV(10)
			}, fl, 0, 1), new x(L(355), function() {
				u.v(11, 10, new aXW({
					vu: data.vu
				}))
			})],
			vS = [L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419), L(420), L(421), L(406), L(407), "Audit Log", L(408)];
		aTs = new yn(vS[data.vu], aXS), ! function() {
			var aC, fl = {
					vN: []
				},
				vN = fl.vN,
				aXY = data.data,
				fi = aXY.length;
			fi && 0 === aXY[0][0] && 0 <= (eR = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.vu]) && (u.z.vx[eR] = aXY[0][1]);
			var oJ = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.vu],
				a8W = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.vu],
				eR = [
					[L(425), L(32) + " ↗", L(426)],
					[L(425), L(427), L(428), L(429) + " ↗"],
					[L(425), L(32) + " ↗", L(428)],
					[L(425), L(32) + " ↗", L(428)],
					[L(422), L(430), L(431) + " ↗", L(432) + " ↗", L(133)],
					[L(422), L(430), L(433) + " ↗", L(434) + " ↗", L(435)],
					[L(422), L(430), L(436) + " ↗", L(437) + " ↗", L(438)],
					[L(422), L(430), L(433) + " ↗", L(434) + " ↗", L(439)],
					[L(422), L(430), L(431) + " ↗", L(432) + " ↗", L(133)],
					[L(425), L(32) + " ↗", L(428)],
					[L(425), L(32) + " ↗", L(440)],
					[L(425), L(32) + " ↗", L(428)],
					[L(422), L(430), L(431) + " ↗", L(432) + " ↗", L(441)],
					[L(425), L(32) + " ↗", L(428)]
				];
			if (fl.vS = eR[data.vu], fl.vZ = [
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
				][data.vu], 0 === data.vu || 2 === data.vu || 3 === data.vu || 9 === data.vu || 10 === data.vu || 11 === data.vu || 13 === data.vu)
				for (aC = 0; aC < fi; aC++) vN.push([{
					gA: aXY[aC][0] + 1 + ".",
					ej: 0
				}, {
					gA: aXY[aC][1],
					ej: 1,
					pe: aXY[aC][4],
					vc: aXY[aC][3]
				}, {
					gA: (oJ * aXY[aC][2]).toFixed(a8W),
					ej: 0
				}]);
			else if (12 === data.vu)
				for (aC = 0; aC < fi; aC++) {
					var aXb = aXY[aC][3];
					vN.push([{
						gA: "" + aXY[aC][0],
						ej: 0
					}, {
						gA: aXc(aXY[aC][4]),
						ej: 0
					}, {
						gA: aXY[aC][5],
						ej: 1,
						pe: aXY[aC][1],
						vc: 0
					}, {
						gA: aXY[aC][6],
						ej: 1,
						pe: aXY[aC][2],
						vc: 0
					}, {
						gA: br.eX(aXb, bI.f9.a3i(aXY[aC][1], 5)),
						ej: 0
					}])
				} else if (1 === data.vu)
					for (aC = 0; aC < fi; aC++) vN.push([{
						gA: aXY[aC][0] + 1 + ".",
						ej: 0
					}, {
						gA: aXY[aC][1],
						ej: 0
					}, {
						gA: (oJ * aXY[aC][2]).toFixed(a8W),
						ej: 0
					}, {
						gA: aXY[aC][3],
						ej: 1,
						pe: aXY[aC][5],
						vc: aXY[aC][4]
					}]);
				else if (4 === data.vu || 5 === data.vu || 6 === data.vu || 7 === data.vu || 8 === data.vu)
				for (aC = 0; aC < fi; aC++) {
					var aXd = aXY[aC][5];
					4 === data.vu || 8 === data.vu ? "100%" === (aXd = (aXd % 64 * 100 / (aXd >> 6)).toFixed(0) + "%") && (4 === data.vu ? aXd += " (" + L(442) + ")" : aXd += " (" + L(443) + ")") : 5 === data.vu ? 32768 <= aXd && (aXd = -(aXd -
						32768)) : aXd = (oJ * aXd).toFixed(a8W), vN.push([{
						gA: "" + aXY[aC][0],
						ej: 0
					}, {
						gA: aXc(aXY[aC][6]),
						ej: 0
					}, {
						gA: aXY[aC][7],
						ej: 1,
						pe: aXY[aC][1],
						vc: aXY[aC][2]
					}, {
						gA: aXY[aC][8],
						ej: 1,
						pe: aXY[aC][3],
						vc: aXY[aC][4]
					}, {
						gA: "" + aXd,
						ej: 0
					}])
				}
			aXT = new vL(aTs.ys, fl)
		}()
	}
}

function aXW(a8L) {
	var aTs, aTt, tV;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(444), [new x("⬅️ " + L(49), function() {
		u.aTq(10)
	})]), aTt = new tT(aTs.ys, ((tV = []).push(function() {
		var aKw, xJ = new tF,
			aWF = new uK(bm.buffer.data[132], 1, function() {
				aKw.button.click()
			}),
			aWG = new uK(bm.buffer.data[131], 1, function() {
				aWF.e.focus()
			});
		xJ.tI(L(360)), xJ.tS(aWG), aWG.e.style.marginBottom = "0.8em", xJ.tI(L(361)), xJ.tS(aWF);
		return aKw = new x(L(359), function() {
			vv = Math.floor(aWG.e.value), vw = Math.floor(aWF.e.value);
			var vw, vv = {
				a6y: Math.min(vv, vw),
				aSy: Math.max(vv, vw)
			};
			u.v(8, u.a9b(10).a5f, new ve(21, {
				vu: a8L.vu,
				vv: vv.a6y,
				vw: vv.aSy
			}))
		}, 0, 0, 1), xJ.tS(new uh([aKw.button])), xJ
	}()), tV.push(function() {
		var aKw, xJ = new tF,
			aWF = new uK(bm.buffer.data[134], 1, function() {
				aKw.button.click()
			}),
			aWG = new uK(bm.buffer.data[133], 0, function() {
				aWF.e.focus()
			});
		return xJ.tI(1 === a8L.vu ? L(445) : L(446)), xJ.tS(aWG), aWG.e.style.marginBottom = "0.8em", xJ.tI(L(447)), xJ.tS(aWF), aKw = new x(L(359), function() {
			var aWh = aWG.e.value.slice(0, 20),
				aWi = Math.abs(Math.floor(aWF.e.value));
			u.v(8, u.a9b(10).a5f, new ve(22, {
				vu: a8L.vu,
				aWh: aWh,
				aWi: aWi
			}))
		}, 0, 0, 1), xJ.tS(new uh([aKw.button])), xJ
	}()), tV.push(function() {
		var aKw, xJ = new tF,
			aWF = new uK(bm.buffer.data[152], 1, function() {
				aKw.button.click()
			}),
			aWG = new uK(bm.buffer.data[151], 0, function() {
				aWF.e.focus()
			});
		return xJ.tI(L(448)), xJ.tS(aWG), aWG.e.style.marginBottom = "0.8em", xJ.tI(L(447)), xJ.tS(aWF), aKw = new x(L(359), function() {
			var aWh = aWG.e.value.slice(0, 5),
				aWi = Math.abs(Math.floor(aWF.e.value));
			u.v(8, u.a9b(10).a5f, new ve(28, {
				vu: a8L.vu,
				aWh: aWh,
				aWi: aWi
			}))
		}, 0, 0, 1), xJ.tS(new uh([aKw.button])), xJ
	}()), tV))
}

function aTm() {
	var aXh, aXi, aXj, aXk, aXl, aXm, aXn, w6, w7, aXo = new Array(2);

	function aXq(button, aXs) {
		button = new uS("", button, 1, aXs);
		return button.uU.style.right = "0.2em", button.uU.style.textAlign = "left", button.uU.style.overflow = "hidden", button.uU.style.textOverflow = "ellipsis", button.uU.translate = !1, button
	}

	function aK5() {
		var input, aJ9;
		!bq.fF || (aJ9 = (input = aXh.wG.uJ.e).value.trim().slice(0, 255)).length < 1 || (bq.pY.a4T(aJ9), input.value = bq.pY.aKF(), aXh.wG.uT(), bM.u0()) || input.focus()
	}

	function aXp(wS) {
		var aXu = bq.z.aHs;
		aXu !== wS && (aXr(aXu, 0), aXr(wS, 1), bq.z.aHs = wS, 0 === aXu && b1.aIZ.aIa(1), 0 === wS ? (b1.aIZ.aIa(0), bz.nH.nT()) : 1 === wS && aXh.wH.nT(), aXh.wR(wS), aXh.resize())
	}

	function aXr(wS, color) {
		w6.p7[wS].ts(color ? bE.qm : bE.rh), w6.p7[wS].button.classList.toggle("fx-selected", !!color)
	}
	this.pY = function(pe) {
		aXp(0);
		var pW = aXh.wG.uJ.e.value,
			pe = "@" + pe + " ";
		pW.length && !bD.pa.a7k(pW, " ") && (pe = " " + pe), aXh.wG.uJ.e.value = pW += pe, aXh.wG.uT(), aXh.wG.uJ.e.focus()
	}, this.aJe = function() {
		aXh.wH.nT()
	}, this.aIb = function() {
		var tV = bq.tV,
			tV = tV.aIY() ? tV.xL ? bE.rN : bE.qm : bE.rh;
		w7.p7[1].ts(tV), aXh.wJ.nT()
	}, this.aJg = function() {
		var tV = bq.tV,
			aC = tV.xn(tV.xK);
		aC < 0 || (tV = tV.tV[aC], bV.a8(tV.fO, tV.mapSeed))
	}, this.aJf = function() {
		aXh.wP(bq.z.wQ);
		var x6 = bq.pm.x6,
			aXv = x6.length,
			xJ = bq.tV.tV[0],
			aXw = xJ ? Math.min(bq.tV.xM(xJ), aXv) : 0;
		aXi.uU.textContent = "" + aXv, aXj.uU.textContent = "" + aXw, aXk.uU.textContent = aP.aBk(0, 2), aXl.uU.textContent = aP.aBk(2, 4), aXm.uU.textContent = xJ ? bq.tV.xP(xJ.x4) + "   " + bV.xN.xO[xJ.fO] : "", aXn[0].uU.textContent = bq.lt
			.aJE(x6, 0, aXv), aXn[1].uU.textContent = xJ && xJ.x4 < 7 ? bq.lt.aJE(x6, 0, aXw) : "", aXo[1].uU.textContent = "Multiplayer: " + bq.z.aJa[0] + "   Single: " + bq.z.aJa[1] + "   Lobby: " + aXv, this.aIb()
	}, this.aJj = function() {
		bz.nH.nT()
	}, this.show = function() {
		bq.z.aHr++, aXh.show(), this.resize(), bq.message.show()
	}, this.uW = function() {
		aXh.uW(), bq.yF.uW(), bq.xj.uW(), bq.message.uW()
	}, this.resize = function() {
		aXh.resize(), bq.message.resize()
	}, this.a6V = function(es) {
		2 === es ? bq.tV.xK ? bq.tV.select(0) : w7.p7[0].tp() : es < 2 && bq.tV.click(0)
	}, w6 = new uk([new x(L(449), function() {
		return aXp(0), 2
	}), new x(L(33), function() {
		return aXp(1), 2
	}), new x(L(450), function() {
		return aXp(2), 2
	})], bE.rh, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) w6.p7[aC].button.style.padding = "0";
	w7 = new uk([new x(L(35, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.y4(), b1.z.a5n(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.y4(), b1.z.a5n(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(451), function() {
		return bq.tV.click(0), 2
	})], bE.rh, 0, [25, 75]), aXh = new w5(w6, w7, aK5, bq.yF.aKc, function(eR, xr) {
		bq.fF && bq.tV.click(eR, xr)
	});
	var join = w7.p7[1].button,
		input = (bD.t6.wg(join, null, function() {
			bq.fF && bq.tV.click(0, 1)
		}), aXh.wG.uJ.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fF && bq.pY.aKH(event, input) && aXh.wG.uT()
		}), aXi = new uS("0", w6.p7[1].button), aXj = new uS("0", w7.p7[1].button), aXk = aXq(w6.p7[2].button, 0), aXl = aXq(w6.p7[2].button, 1), (aXm = aXq(w7.p7[1].button, 0)).uU.style.right = "3em", (aXn = [new uS("", w6.p7[1].button, 1, 1),
			new uS("", w7.p7[1].button, 1, 1)
		])[0].uU.style.bottom = "0em", aXn[1].uU.style.bottom = "0em", aXn[0].uU.translate = !1, aXn[1].uU.translate = !1, aXr(bq.z.aHs, 1), (aXo = [new uS(L(353), aXh.wT(), 1, 0), new uS("", aXh.wT(), 1, 1)])[0].uU.style.fontSize = "0.4em", aXo[1]
		.uU.style.fontSize = "0.4em"
}

function aTT() {
	var aTs, aTt, tV;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(452), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a9b(7).a5f)
	}), new x(L(254), function() {
		bm.rt.pz(105, bJ.f9.a0a(aTt.tX[0].tG[0].e.value, 5)), bm.rt.pz(106, bJ.f9.a0a(aTt.tX[1].tG[0].e.value, 15)), u.v(8, u.a9b(7).a5f, new ve(18))
	})]), aTt = new tT(aTs.ys, ((tV = []).push(function() {
		var xJ = new tF;
		return xJ.tI(L(231)), xJ.tS(new uK({
			value: "",
			eR: -1
		})), xJ
	}()), tV.push(function() {
		var xJ = new tF,
			aUY = (xJ.tI(L(234)), new uK({
				value: "",
				eR: -1
			}));
		return aUY.e.type = "password", xJ.tS(aUY), xJ.tS(new uh([new x(L(235), function(e) {
			return e.textContent === L(235) ? (e.textContent = L(236), aUY.e.type = "text") : (e.textContent = L(235), aUY.e.type = "password"), !0
		}).button])), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		return xJ.tI(L(238)), xJ.tJ(L(453)), xJ.tJ(L(454)), xJ.tJ(L(455)), xJ
	}()), tV))
}

function aTa() {
	var aTs, aXP, aXQ, yo;

	function aXR(aC) {
		u.v(8, u.vd, new ve(21, {
			vu: aC,
			vv: 0,
			vw: 10
		}))
	}
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aXP.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aXQ = [new x(L(417), function() {
		aXR(5)
	}, 0, 0, 1), new x(L(418), function() {
		aXR(6)
	}, 0, 0, 1), new x(L(419), function() {
		aXR(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aXR(12)
	}, 0, 0, 1)], yo = [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})], aTs = new yn(L(456), yo), aXP = new u6(aXQ, aTs.ys)
}

function aTI() {
	this.buffer = {}, this.vx = new Array(8), this.aTY = null, this.aTV = null, this.vJ = 0, this.vW = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a9K = function(aXz) {
		aXz && (aa.fB = aXz), u.y(), aa.dt()
	}, __fx.customLobby.setJoinFunction(() => this.a9K(1)), this.aHB = function() {
		u.v(0 === ab.a5a() ? 5 : 0)
	}, this.aWA = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5e().a5f, new ve(24, {
			aVj: bm.buffer.data[125].value,
			vv: bm.buffer.data[128].value,
			vw: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5e().a5f, new ve(23, {
				aVj: bm.buffer.data[125].value,
				a59: h
			}))
		}
	}, this.aXI = function(a5f, target) {
		u.v(4, a5f, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aUK(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aUK("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a5f)
			}), new x("✅ Accept", function() {
				bm.rt.pz(140, 1), 0 === target ? u.v(2, a5f) : u.v(8, a5f, new ve(target))
			})]))
	}, this.aY0 = function() {
		for (var aC = 0; aC < 8; aC++) this.vx[aC] = bJ.a0R.a0V(bK.sW(5));
		this.vx[1] = "[" + this.vx[1] + "]", 5 === u.vd && (u.a5e().aMc.pz(this.vx), u.a5e().resize())
	}, this.aUT = function(gA, rr, aBA) {
		gA = bD.h4.a8I(gA, 1, 1e6);
		rr = L(457, [rr]);
		return (rr += "<br>") + L(458, [__fx.utils.escapeHtml("" + aBA)]) + "<br>" + L(459, [gA + "–" + (gA + 2)]) + "<br>" + L(460, [gA])
	}
}

function aTd() {
	var aVG, aVH, aY1, tV;

	function aVJ() {
		b7.y4(), u.aTr()[19] = null, u.a5Z()
	}

	function aY8() {
		aYB(), aY9()
	}

	function aYB() {
		aY1.tH.lastChild && u.removeChild(aY1.tH, aY1.tH.lastChild)
	}

	function aY9() {
		var aYC = bV.a9S(aE.data);
		aE.data.canvas = bV.aRG(aYC, aE.data.mapSeed).a0y, aYA()
	}

	function aYA() {
		var a7G = aE.data.canvas;
		a7G.style.width = "100%", aY1.tH.appendChild(a7G)
	}
	this.aNp = function(a7G) {
		aE.data.canvas && aYB(), aE.data.canvas = a7G, aYA()
	}, this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(381), [new x("⬅️ " + L(49), aVJ)]), 2 === aE.data.mapType && b7.dt(), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(461), L(462), L(463)],
			value: aE.data.mapType
		}, function(eR) {
			2 === (aE.data.mapType = eR) ? (b7.dt(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.y4()), u.v(20)
		})), 2 <= aE.data.mapType && (xJ.tS(new v5), xJ.tS(new ud({
			value: aE.data.passableWater
		}, L(464), function(value) {
			aE.data.passableWater = value
		})), xJ.tS(new ud({
			value: aE.data.passableMountains
		}, L(465), function(value) {
			aE.data.passableMountains = value
		})));
		tV.push(xJ)
	}(tV = []), function(tV) {
		if (0 === aE.data.mapType) {
			for (var xJ = new tF, vM = (xJ.tI(L(381)), []), aC = 0; aC < bV.xN.aSC.length; aC++) vM.push(bV.xN.a0p[bV.xN.aSC[aC]].name);
			xJ.tP(new yj({
				vM: vM,
				value: aE.data.mapProceduralIndex
			}, function(eR) {
				aE.data.mapProceduralIndex = eR, aY8()
			})), tV.push(xJ)
		}
	}(tV), function(tV) {
		if (1 === aE.data.mapType) {
			for (var xJ = new tF, vM = (xJ.tI(L(381)), []), aC = 0; aC < bV.xN.aSD.length; aC++) vM.push(bV.xN.a0p[bV.xN.aSD[aC]].name);
			xJ.tP(new yj({
				vM: vM,
				value: aE.data.mapRealisticIndex
			}, function(eR) {
				aE.data.mapRealisticIndex = eR, aY8()
			})), tV.push(xJ)
		}
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.mapType && ((xJ = new tF).tI(L(466)), xJ.tS(new uK(bm.buffer.data[162], 1)), xJ.tI(L(467), "0.8em"), xJ.tS(new uh([new x(L(468), function() {
			return b7.aNi(), !0
		}).button])), tV.push(xJ))
	}(tV), function(tV) {
		var xJ, uJ;
		2 === aE.data.mapType && ((xJ = new tF).tI(L(469)), uJ = new uK({
			eR: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xJ.tS(uJ), tV.push(xJ))
	}(tV), function(tV) {
		var xJ, uJ, aKw;
		0 === aE.data.mapType && ((xJ = new tF).tI("Seed"), uJ = new uK({
			eR: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aY8())
		}), aKw = new x(L(372), function(e) {
			var aRB = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aRB) return uJ.e.value = aE.data.mapSeed = aRB, aY8(), !0
		}), xJ.tS(uJ), xJ.tS(new uh([aKw.button])), tV.push(xJ))
	}(tV), function(tV) {
		(aY1 = new tF).tI(L(470)), 2 !== aE.data.mapType ? aY9() : aE.data.canvas && aYA();
		tV.push(aY1)
	}(tV), tV))
}

function w(title, tO, aYD, aXS) {
	var aTs, aWY;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aWY.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aXS = aXS || [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})], aTs = new yn(title, aXS), aWY = new ug(aTs.ys, tO), aYD && bD.t6.textAlign(aTs.ys.style, 1)
}

function aTg() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 === aE.data.playerNamesType && 1 === bD.tg.a6u(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.playerNamesType && bD.tg.a78(aVI.zI(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(385), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(386), L(387), L(350)],
			value: aE.data.playerNamesType
		}, function(eR) {
			aVL(), aE.data.playerNamesType = eR, u.v(23)
		})), xJ.tS(new v5), xJ.tS(new ud({
			value: aE.data.selectableName
		}, L(471), function(value) {
			aE.data.selectableName = value
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ;
		2 === aE.data.playerNamesType && ((xJ = new tF).tI("Data"), aVI = new zA(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.ff || (aE.data.playerNamesData = new Array(aE.ff), aE.data.playerNamesData
			.fill("")), aVI.zH(bD.pa.a8j(aE.data.playerNamesData, 1, '"')), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTo() {
	var aVG, aVH, tV;

	function aYJ() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var g1 = 0; g1 < 3; g1++) g1 < h.length && (colors[aC][g1] = Number(h[g1]))
		}
		return colors
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(472), [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})]), aVH = new tT(aVG.ys, ((tV = []).push(function() {
		var xJ = new tF;
		return xJ.tI(L(473)), xJ.tN(b1.z.aUK("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xJ.tN("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xJ
	}()), tV.push(function() {
		var xJ = new tF,
			eu = (xJ.tI(L(474)), bm.buffer.data[174].value),
			tK = xJ.tJ(eu.length + " / 180"),
			aUz = (tK.style.textAlign = "center", new zA(0, 1, function(e) {
				var e = e.target.value,
					hB = e.length;
				tK.textContent = hB + " / 180", hB <= 180 && bm.rt.pz(174, e)
			}));
		return aUz.e.rows = 6, aUz.e.style.fontSize = "1em", aUz.zH(eu), xJ.tS(aUz), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		xJ.tI(L(371));
		for (var aC = 0; aC < 11; aC++) {
			var j5 = xJ.tS(new uK(bm.buffer.data[163 + aC]));
			aC && (j5.e.style.marginTop = "0.6em")
		}
		return xJ.tS(new uh([new x(L(475), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zX(aC, data[aC].za);
			u.a5Z(), u.aTr()[31] = null, u.v(31)
		}).button])), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		return xJ.tI("Targeting"), xJ.tN(L(476)), xJ.tS(new uK(bm.buffer.data[175], 0, 0)), xJ
	}()), tV.push(function() {
		var xJ = new tF;
		return xJ.tI(L(470)), xJ.tS(new uh([new x(L(235), function() {
			(new et).show(bm.buffer.data[174].value, aYJ(), -1)
		}).button])), xJ
	}()), tV.push(function() {
		var xJ = new tF,
			aYK = (xJ.tI(L(477)), xJ.tN(L(478)), new uK(bm.buffer.data[176], 1, 0)),
			aYL = (xJ.tS(aYK), new x(L(479), function(e) {
				return aYM.button.textContent === L(170) && b1.z.eo(0) && (bD.t6.yg(e), aUQ(), b1.aUR.aYN(bm.buffer.data[176].value, aYJ(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aUQ = function() {
				aYM.button.textContent = L(219), aYL.ts(1), aYL.button.style.color = bE.qN
			},
			aYM = new x(L(219), function(e) {
				return e.textContent === L(219) ? (e.textContent = L(170), aYL.ts(0), aYL.button.style.color = bE.rS) : aUQ(), !0
			});
		return xJ.tS(new uh([aYM.button, aYL.button])), xJ
	}()), tV))
}

function aTp() {
	var aTs, aTt, tV;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn("🔒 " + L(480), [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})]), aTt = new tT(aTs.ys, ((tV = []).push(function() {
		var xJ = new tF,
			uJ = (xJ.tN(b1.z.aUK("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xJ.tI(L(231)), new uK({
				value: "",
				eR: -1
			})),
			aUv = (xJ.tS(uJ), xJ.tI(L(305), "0.8em"), new uK({
				value: "",
				eR: -1
			}, 0, 0)),
			aUP = (aUv.e.type = "email", aUv.e.autocomplete = "email", aUv.e.name = "email", aUv.e.inputMode = "email", aUv.e.spellcheck = !1, xJ.tS(aUv), new x(L(481), function(e) {
				return bD.t6.yg(e), b1.aUR.aUw({
					action: 4,
					pW: uJ.e.value.trim() + aUv.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xJ.tS(new uh([aUP.button])), xJ
	}()), tV))
}

function aTR() {
	var aVG, zF;

	function aYO() {
		u.y();
		var pW = bC.aYS(zF.zI());
		(aE.a4P && 0 < pW.length && pW === bC.si.a9G || bC.aOn.a0k(pW)) && bC.aYT()
	}
	this.show = function(aYP) {
		this.aYQ(aYP), aVG.show(), this.resize()
	}, this.aYQ = function(aYP) {
		0 === aE.a4P ? aYP ? zF.zH(aYP) : aE.a93.length && zF.zH(aE.a93) : (aE.hr || (bC.si.a9G = bC.a9H.a3t()), zF.zH(bC.aYR(bC.si.a9G)))
	}, this.zH = function(pW) {
		zF.zH(pW)
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), zF.resize()
	}, this.a6V = function(es) {
		2 === es ? aVG.yt[0].tp() : aYO()
	}, aVG = new yn(L(482), [new x("⬅️ " + L(49), function() {
		u.aTq(1)
	}), new x(L(483), function() {
		zF.zJ()
	}), new x(L(484), function() {
		zF.zK()
	}), new x(L(485), function() {
		zF.clear()
	}), new x(L(486), function() {
		aYO()
	})]), zF = new zA(L(487)), aVG.ys.appendChild(zF.e)
}

function aTQ() {
	var aTs, aTt, tV, xJ;

	function aYU() {
		bA.aGx !== bm.buffer.data[12].value ? (bA.dt(), u.v(8, 1, new ve(30))) : u.v(1)
	}
	this.show = function() {
			aTs.show(), this.resize()
		}, this.uW = function() {
			aTs.uW()
		}, this.resize = function() {
			aTs.resize(), aTt.resize()
		}, this.a6V = function(es) {
			2 === es && aTs.yt[0].tp()
		}, aTs = new yn(L(488), [new x("⬅️ " + L(49), aYU), new x(L(489), function() {
			u.y(), bm.rt.a08(), u.v(2)
		})]), tV = [], (xJ = new tF).tI(L(490)), xJ.tJ(L(491)), tV.push(xJ),
		function(tV) {
			var xJ = new tF,
				h = (xJ.tI(L(476)), bA.data.aHE());
			xJ.tP(new yj({
				vM: h,
				value: bA.data.aHI(h)
			}, function(eR) {
				return bm.rt.pz(12, h[eR].split(":")[0]), !0
			})), tV.push(xJ)
		}(tV),
		function(tV) {
			var xJ = new tF,
				aYX = (xJ.tI(L(516)), []);
			xJ.tS(new uh([new x(L(475), function(e) {
				ba.aYY();
				for (var aC = 0; aC < aYX.length; aC++) aYX[aC].e.value = ba.aGP[aC];
				return bD.t6.yg(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aYZ.length; aC++) {
				xJ.tJ(ba.aYZ[aC]);
				for (var g1 = 0; g1 < 2; g1++) {
					var eR = 2 * aC + g1,
						uJ = new uK({
							value: ba.aGP[eR],
							eR: -1
						});
					uJ.e.aYa = eR, aYX.push(uJ), uJ.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aYb(e.target.aYa, code)
					}), g1 && (uJ.e.style.marginLeft = "4%"), uJ.e.style.width = "48%", xJ.tS(uJ)
				}
			}
			tV.push(xJ)
		}(tV), (xJ = new tF).tI(L(492)), bm.buffer.data[1].vM = [L(493), L(494), L(495), L(496)], xJ.tP(new yj(bm.buffer.data[1])), tV.push(xJ), (xJ = new tF).tI(L(497)), bm.buffer.data[9].vM = [L(494), L(498), L(499)], xJ.tP(new yj(bm.buffer.data[
			9])), tV.push(xJ), (xJ = new tF).tI(L(500)), bm.buffer.data[11].vM = [L(501), L(9), L(502)], xJ.tP(new yj(bm.buffer.data[11])), tV.push(xJ), (xJ = new tF).tI(L(503)), xJ.tS(new ud(bm.buffer.data[2])), tV.push(xJ), (xJ = new tF).tI(L(
		504)), xJ.tS(new ud(bm.buffer.data[7])), tV.push(xJ), (xJ = new tF).tI(L(505)), xJ.tS(new ud(bm.buffer.data[8])), tV.push(xJ), (xJ = new tF).tI(L(506)), xJ.tS(new uK(bm.buffer.data[5])), tV.push(xJ), (xJ = new tF).tI(L(507)), xJ.tS(new ud(bm
			.buffer.data[13], L(508))), xJ.tS(new ud(bm.buffer.data[14], L(509))), tV.push(xJ), (xJ = new tF).tI(L(510)), xJ.tP(new yj({
			vM: [L(511), L(512), L(513)],
			value: aa.aLr
		}, function(aC) {
			aa.aLr = aC
		})), tV.push(xJ), (xJ = new tF).tI(L(514)), xJ.tS(new ud(bm.buffer.data[15])), xJ.tJ(L(515)), xJ.tS(new uK(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.iu(Math.floor(e.target.value), 0, 16)
		})), tV.push(xJ), aTt = new tT(aTs.ys, tV)
}

function aTh() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 !== aE.data.spawningType || bD.tg.a6u(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.spawningType && bD.tg.a76(aVI.zI(), aE.data.spawningData, bV.aNs - 1)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(517), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF,
			vM = (xJ.tI(L(347)), [L(372), L(384), L(350)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vM.splice(1, 1), 0 < value) && (value = 1);
		xJ.tP(new yj({
			vM: vM,
			value: value
		}, function(eR) {
			aVL(), aE.data.spawningType = eR, 0 === aE.data.gameMode && 1 === eR && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.ff)), u.v(24)
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ = new tF;
		xJ.tI("My Spawn"), xJ.tS(new ud({
			value: aE.data.selectableSpawn
		}, L(518), function(value) {
			aE.data.selectableSpawn = value
		})), tV.push(xJ)
	}(tV), function(tV) {
		var xJ = new tF,
			aYd = (xJ.tI("Seed"), new uK({
				eR: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xJ.tS(aYd), xJ.tS(new uh([new x(L(372), function() {
			aYd.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tV.push(xJ)
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.spawningType && ((xJ = new tF).tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.spawningData, 2)), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTP() {
	var aTs, aXP, aXQ, yo;

	function aYe(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new ve(16)) : u.v(2) : u.z.aXI(u.vd, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aTs.show(), this.resize(), this.en()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aXP.resize()
	}, this.en = function() {
		8 === ab.a5a() && (bg.aYj() ? aXQ[2].tq === bE.qZ && aXQ[2].ts(0) : aXQ[2].tq !== bE.qZ && aXQ[2].ts(bE.qZ), aE.hr || aE.hs || !aN.sz(aE.fS) ? aXQ[1].tq !== bE.qZ && aXQ[1].ts(bE.qZ) : aXQ[1].tq === bE.qZ && aXQ[1].ts(0), aE.hr || aE
			.hs || !ax.iY(aE.fS) ? aXQ[0].tq !== bE.qZ && aXQ[0].ts(bE.qZ) : aXQ[0].tq === bE.qZ && aXQ[0].ts(0))
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aXQ = [new x(L(519), function() {
		aYe(0)
	}), new x(L(409), function() {
		u.v(16)
	}), new x(L(456), function() {
		u.v(17)
	}), new x(L(520), function() {
		u.z.aWA()
	}, 0, 0, 1), new x(L(482), function() {
		u.v(3, 1)
	}), new x(L(521), function() {
		u.v(18)
	}), new x(L(472), function() {
		u.v(31)
	}), new x(L(522), function() {
		u.z.a9K(2)
	}), new x(L(488), function() {
		aYe(1)
	}), new x("🔒 " + L(480), function() {
		u.v(32)
	}), new x(L(523), function() {
		var a7g, qD;
		(a7g = []).push(["Wiki", (qD = "https://territorial.io/") + "wiki/gold"]), a7g.push(["Team Games", qD + "log/team"]), a7g.push(["Battle Royale Games", qD + "log/br"]), a7g.push(["1v1 Games", qD + "log/1v1"]), a7g.push([
			"Zombie Games", qD + "log/zombies"
		]), a7g.push(["Transactions", qD + "log/transactions"]), a7g.push(["Changelog", qD + "changelog"]), 2 !== a1.id && a7g.push(["Android App", bN.aHV]), 1 !== a1.id && a7g.push(["iOS App", bN.a5W]), 0 === a1.id && a7g.push([
			"Patreon", bN.aVE
		]), a7g.push(["Terms", bN.aYk]), a7g.push(["Privacy", bN.aYl]), u.v(4, 1, new w(L(523), bD.t6.a7f(a7g), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(524), function() {
		u.v(4, 1, new w(L(524), m.eA + "<br>" + b1.z.aUK("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(49),
				function() {
					u.v(1)
				})]))
	}), new x(L(525), function() {
		u.v(4, 1, new w(L(525), L(532) + "<br>" + L(533), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(534), function() {
			a1.a2.a5Q(), u.v(1)
		})]))
	}), new x("👁️ " + L(526), function() {
		a1.a2.a5R(), u.v(4, 1, new w(L(535), L(536) + " " + b1.z.aUK("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], yo = [new x("⬅️ " + L(49), function() {
		u.z.aHB()
	})], 8 === ab.a5a() && (aXQ.unshift(new x(L(395), function() {
		u.v(30)
	})), aXQ.unshift(new x(L(529), function() {
		bg.aYj() && (u.y(), bh.a6Y(), bi.e0 = !0)
	}, 0, 1)), aXQ.unshift(new x(L(530), function() {
		aE.hr || aE.hs || !aN.sz(aE.fS) || (bB.i9.sC(), u.y(), aN.ht && aN.a6Y())
	}, 0, 1)), aXQ.unshift(new x(L(531), function() {
		aE.hr || aE.hs || !ax.iY(aE.fS) || (bY.a9x(2), bB.i9.iU(), u.y(), aN.ht && aN.a6Y())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eA && aXQ.push(new x(L(527), function() {
		a1.a2.a5S()
	})), aTs = new yn(L(528), yo), aXP = new u6(aXQ, aTs.ys)
}

function aTl() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.sResourcesType && bD.tg.a76(aVI.zI(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(390), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(348), L(349), L(350)],
			value: aE.data.sResourcesType
		}, function(eR) {
			aVL(), 2 !== eR || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.ff)), aE.data.sResourcesType = eR, u.v(28)
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ;
		1 === aE.data.sResourcesType && ((xJ = new tF).tI("Value"), xJ.tS(new uK({
			eR: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tV.push(xJ))
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.sResourcesType && ((xJ = new tF).tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.sResourcesData, 2)), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTj() {
	var aVG, aVH, aVI, tV;

	function aVJ() {
		aVL(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aTr()[19] = null, u.a5Z()
	}

	function aVL() {
		2 === aE.data.tIncomeType && bD.tg.a76(aVI.zI(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aVG.show(), this.resize()
	}, this.uW = function() {
		aVG.uW()
	}, this.resize = function() {
		aVG.resize(), aVH.resize()
	}, this.a6V = function(es) {
		2 === es && aVG.yt[0].tp()
	}, aVG = new yn(L(388), [new x("⬅️ " + L(49), aVJ)]), aVH = new tT(aVG.ys, (function(tV) {
		var xJ = new tF;
		xJ.tI(L(347)), xJ.tP(new yj({
			vM: [L(348), L(349), L(350)],
			value: aE.data.tIncomeType
		}, function(eR) {
			aVL(), 2 !== eR || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.ff), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eR, u.v(26)
		})), tV.push(xJ)
	}(tV = []), function(tV) {
		var xJ;
		1 === aE.data.tIncomeType && ((xJ = new tF).tI("Value"), xJ.tS(new uK({
			eR: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tV.push(xJ))
	}(tV), function(tV) {
		var xJ;
		2 === aE.data.tIncomeType && ((xJ = new tF).tI("Data"), (aVI = new zA(0, 1, 0, 1)).zH(bD.pa.a8j(aE.data.tIncomeData, 4)), xJ.tS(aVI), tV.push(xJ))
	}(tV), tV))
}

function aTb() {
	var aTs, aTt, tV;
	this.show = function() {
		aTs.show(), this.resize()
	}, this.uW = function() {
		aTs.uW()
	}, this.resize = function() {
		aTs.resize(), aTt.resize()
	}, this.a6V = function(es) {
		2 === es && aTs.yt[0].tp()
	}, aTs = new yn(L(521), [new x("⬅️ " + L(49), function() {
		u.a5Z()
	})]), aTt = new tT(aTs.ys, ((tV = []).push(function() {
		function aUQ() {
			aYM.button.textContent = L(219), aYo.e.readOnly = !1, aYp.e.readOnly = !1, aUP.ts(1), aUP.button.style.color = bE.qN
		}
		var xJ = new tF,
			aYn = (xJ.tN(b1.z.aUK("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xJ.tI(L(537)), new uK({
				value: bm.buffer.data[105].value,
				eR: -1
			})),
			aYo = (aYn.e.readOnly = !0, xJ.tS(aYn), xJ.tI(L(434), "0.8em"), new uK(bm.buffer.data[148], 0, void 0, function(e) {
				aUO(bm.buffer.data[149].value, e.target.value)
			})),
			aYp = (xJ.tS(aYo), xJ.tI(L(438), "0.8em"), new uK(bm.buffer.data[149], 1, void 0, function(e) {
				aUO(e.target.value, bm.buffer.data[148].value)
			})),
			aYM = (xJ.tS(aYp), new x(L(219), function(e) {
				return e.textContent === L(219) ? (e.textContent = L(170), aYo.e.readOnly = !0, aYp.e.readOnly = !0, aUP.ts(0), aUP.button.style.color = bE.rS, bm.rt.pz(149, aYp.e.value), aUO(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aUQ(), !0
			})),
			aUP = (xJ.tS(new uh([aYM.button])), new x(L(21), function(e) {
				var pW, gA;
				return aYo.e.readOnly && b1.z.eo(0) && (pW = bm.buffer.data[148].value, gA = parseInt(bm.buffer.data[149].value, 10), u.aTJ.send(gA, pW, function() {
					bD.t6.yg(e), aUQ(), b1.aUR.aUS({
						action: 0,
						pe: pW,
						value: gA
					})
				})), !0
			}, 1)),
			tK = xJ.tJ(),
			aUO = (xJ.tJ(L(538)).style.fontWeight = "bold", function(gA, pW) {
				tK.innerHTML = u.z.aUT(gA, bm.buffer.data[105].value, pW)
			});
		return xJ.tS(new uh([aUP.button])), aUO(bm.buffer.data[149].value, bm.buffer.data[148].value), xJ
	}()), tV))
}

function c4() {
	"function" != typeof Math.log2 && (Math.log2 = function(fp) {
		return Math.log(fp) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fp) {
		return Math.log(fp) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fp) {
		return 0 < fp ? 1 : fp < 0 ? -1 : 0
	})
}

function cq() {
	var aE4, aYr, aYs, aYt, aYq = !1;

	function aYu() {
		aYq = !0, aE4 = -1, aYr = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aYr[aC] = !1;
		var a1o = Math.floor(1 + .02 * i.min);
		aYs = new Array(4), (aYt = new Array(4))[1] = aYt[3] = aYs[0] = aYs[2] = 0, aYt[0] = aYs[3] = -a1o, aYs[1] = aYt[2] = a1o
	}

	function aYv() {
		if (-1 !== aE4)
			if (0 !== aE.a4P && aI.oP()) {
				for (var aYw = !1, aC = 3; 0 <= aC; aC--) aYr[aC] && (aYw = !0, jN += aYs[aC], jO += aYt[aC], ag.a5x(aYs[aC], aYt[aC]), aT.aDk());
				aYw ? bi.e0 = !0 : at.oF()
			} else at.oF()
	}
	this.a6T = function(eR) {
		0 !== aE.a4P && aI.oP() && (aYq || aYu(), aYr[eR] = !0, -1 === aE4) && (aE4 = setInterval(aYv, 20), aYv())
	}, this.a6W = function(eR) {
		if (0 !== aE.a4P && (aYq || aYu(), aYr[eR] = !1, -1 !== aE4)) {
			for (var aYw = !1, aC = 3; 0 <= aC; aC--) aYw = aYw || aYr[aC];
			aYw || this.oF()
		}
	}, this.oF = function() {
		if (aYq && -1 !== aE4) {
			for (var aC = 3; 0 <= aC; aC--) aYr[aC] = !1;
			clearInterval(aE4), aE4 = -1
		}
	}
}

function cr() {
	this.z = new aYx, this.nO = new aYy, this.rr = new aYz, this.aIZ = new aZ0, this.ep = new aZ1, this.aUR = new aZ2, this.sV = new aZ3, this.aWe = new aZ4, this.aBA = new aZ5, this.aZ6 = new aZ7, this.aZ8 = new aZ9, this.aZA = new aZB, this.aZC =
		new aZD, this.dt = function() {
			this.z.dt()
		}
}

function aYx() {
	var aZF, aZG;
	this.aLv = 4, this.aZE = null, this.a5i = 0, this.fG = 0;

	function aZP() {
		return 0 === aa.aLr ? m.eE ? 1 : 0 : aa.aLr - 1
	}

	function aZS(oY, a5f, aZR) {
		aZG[oY].aYq = !0, aZL(oY), aZF[oY] = new aZV, aZF[oY].dt(oY, a5f, aZR)
	}

	function aZT(aC) {
		return aZG[aC].aYq && aZF[aC].aZT()
	}

	function aZL(oY) {
		aZG[oY].ei = bi.ei, aZG[oY].aZI = !1
	}
	this.dt = function() {
		this.aZE = new Array(this.aLv), this.aZE[0] = "territorial.io", this.aZE[1] = "1.territorial.io", this.aZE[2] = "4.territorial.io", this.aZE[3] = "5.territorial.io", aZF = new Array(this.aLv), aZG = new Array(this.aLv);
		for (var aC = this.aLv - 1; 0 <= aC; aC--) aZG[aC] = {
			aYq: !1,
			ei: 0,
			aZI: !1
		};
		this.aLw(0, 0, 0)
	}, this.aZJ = function(aC) {
		return aZF[aC]
	}, this.en = function() {
		for (var aC = this.aLv - 1; 0 <= aC; aC--) this.eo(aC) && bi.ei > aZG[aC].ei + 15e3 && (b1.rr.aZK(aC, aZG[aC].aZI), aZL(aC));
		!this.eo(0) && bi.ei > aZG[0].ei + 8e3 && (aZG[0].ei = bi.ei, this.aLw(0, 0, 0))
	}, this.aWb = function(id) {
		return this.aLw(0, id, 0) && this.aZM(0)
	}, this.aZN = function(aZO) {
		return aZO ? aa.aLs : aZP()
	}, this.a4r = function() {
		return aZP() ? "game.territorial.io" : "territorial.io"
	}, this.aUK = function(aZQ) {
		aZQ = this.a4r() + aZQ;
		return "<a href='https://" + aZQ + "' target='_blank'>" + aZQ + "</a>"
	}, this.aLw = function(oY, a5f, aZO) {
		aZO = this.aZN(aZO);
		if (aZG[oY].aYq) {
			if (aZF[oY].aZT()) return aZF[oY].aZU(a5f), aZF[oY].eo();
			aZF[oY].uW()
		}
		return aZS(oY, a5f, aZO), !1
	}, this.aZW = function(oY, a5f) {
		console.log("Connection to Server " + oY), b1.ep.aZX(oY)
	}, this.aZM = function(aC) {
		return this.eo(aC) && aZF[aC].aZM()
	}, this.aZY = function(aC) {
		aZF[aC].aZY()
	}, this.eo = function(aC) {
		return aZG[aC].aYq && aZF[aC].eo()
	}, this.send = function(oY, aD) {
		0 !== oY && aZL(oY), aZF[oY].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a6E = function(oY) {
		8 === ab.a5a() && (aZG[oY].aZI = !0, b1.nO.aZZ = !0)
	}, this.close = function(oY, aZa) {
		aZT(oY) && aZF[oY].close(aZa)
	}, this.aZb = function(oY, aZa) {
		p.a5m(aZa), aZT(oY) && aZF[oY].close(aZa)
	}, this.a5n = function(aZa) {
		for (var aC = this.aLv - 1; 0 <= aC; aC--) this.close(aC, aZa)
	}, this.aZc = function(oY, aZa) {
		for (var aC = this.aLv - 1; 0 <= aC; aC--) aC !== oY && this.close(aC, aZa)
	}, this.a9I = function() {
		0 === this.a5i && (aE.lO || aE.hr) || this.close(this.a5i, 3246)
	}, this.aZd = function(oY, e) {
		aZF[oY].uW(), p.a5X(oY, e.code)
	}
}

function aYy() {
	this.aZZ = !1, this.en = function() {
		bi.l1() % 250 != 249 || aE.hr || aE.hs || (b1.ep.aZe(+(this.aZZ && ah.ng[aE.fS]), am.la + bQ.z.mu), this.aZZ = !1)
	}
}

function aZ5() {
	this.aZg = function(oY, aD) {
		bK.dt(aD), 0 === bK.size ? b1.z.aZb(oY, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sW(1) ? function(oY) {
			var aZk = bK.sW(6);
			0 === aZk ? function(oY) {
					if (0 === oY && 8 !== ab.a5a()) {
						u.z.aY0();
						for (var aa2 = bK.sW(12), aa3 = bK.sW(6), h = new Array(aa2), aC = 0; aC < aa2; aC++) h[aC] = bK.sW(aa3);
						aU.aEA(h)
					}
				}(oY) : 2 === aZk ? b1.aZ6.aZm(oY) : 3 === aZk || 4 === aZk ? ay.dt() : 5 === aZk ? b1.aZ8.aZn() : 9 === aZk ? b1.aZ8.aZo(oY) : 10 === aZk ? b1.aZA.aZp() : 11 === aZk ? b1.aZ8.aZq(oY) : 12 === aZk ? b1.aZA.aZr() :
				13 === aZk ? b1.aZC.aZs() : 14 === aZk ? b1.aZC.aZt() : 15 === aZk ? b1.aZ8.aZu() : 16 === aZk ? b1.aZ6.aZv(oY) : 17 === aZk ? b1.aZ6.aZw(oY) : 19 === aZk ? b1.aZ6.aZx(oY) : 20 === aZk ? b1.aZ8.aZy(oY) : 21 !== aZk &&
				22 !== aZk && (23 === aZk ? b1.aZ8.aZz(oY) : 24 === aZk ? b1.aZ6.aa0(oY) : 25 === aZk && b1.aZA.aa1())
		} : function(oY) {
			if (8 !== ab.a5a() && !ay.aMN()) return;
			if (oY !== b1.z.a5i) b1.z.aZb(oY, 3244);
			else if (0 === bK.sW(1)) bi.a4Z.aa4(bK.aD);
			else {
				var aC, oY = bK.sW(2);
				if (0 === oY) {
					var s7, rr = bK.sW(9);
					0 !== ah.ng[rr] && 0 !== ah.ng[aE.fS] && (s7 = bK.sW(10), aO.s6(rr, aE.fS, s7), ag.sx(rr, 1, s7))
				} else if (1 === oY) ! function() {
					var rr = bK.sW(9);
					0 !== ah.ng[rr] && 0 !== ah.ng[aE.fS] && b6.aQl(0, [rr], !0) && aO.sO(rr, 1)
				}();
				else if (2 === oY) ! function() {
					var rr = bK.sW(9),
						target = bK.sW(9);
					0 !== ah.ng[rr] && 0 !== ah.ng[target] && 0 !== ah.ng[aE.fS] && b6.aQl(1, [rr], !0) && (ag.sx(rr, 3, 96), ag.sx(target, 4, 96), aO.aBH(rr, target))
				}();
				else if (m.aA && !m.aB) {
					var fi = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fi = Math.min(bB.rn.sY.length, 540), aC = 0; aC < fi; aC++) bG.aaA(32, bB.rn.sY[aC]);
					b1.z.send(b1.z.a5i, bG.aD)
				}
			}
		})(oY), bi.aZj())
	}
}

function aZB() {
	this.aZp = function() {
		bm.z.zx(), bm.rt.pz(105, bI.f9.vf(bI.f9.vg(5))), bm.rt.pz(106, bI.f9.vf(bI.f9.vg(15))), bm.rt.pz(109, 0), bm.rt.pz(108, bm.buffer.data[109].value), bm.rt.pz(111, bm.buffer.data[109].value + 1), bm.rt.pz(107, 0), bm.rt.pz(110, "")
	}, this.aa1 = function() {
		var id = bK.sW(8),
			pW = bJ.a0T.a0k(7);
		0 === id && (bm.z.a02(pW, bm.buffer.data[106].value), new t1(L(539, [pW])))
	}, this.aZr = function() {
		var data;
		bK.size < bG.aaB(29) ? b1.z.aZb(0, 3254) : ((data = {
			vc: bK.sW(30),
			a0C: bK.sW(16),
			a0D: bK.sW(30),
			a0E: bK.sW(30),
			a0F: bK.sW(30),
			a0G: bK.aaC(32),
			username: bJ.a0T.a0k(5),
			a0H: bJ.a0T.a0k(3),
			a0I: bJ.a0T.a0k(3),
			a0J: bK.aaC(32),
			a0K: bK.aaC(32),
			a0L: bK.sW(30),
			a0M: bK.aaC(32),
			a0N: bK.aaC(32),
			a0O: bK.aaC(32),
			a0P: bK.aaC(32),
			aUj: bK.aaC(32),
			aUk: bK.aaC(30),
			aV6: bK.aaC(32),
			aV7: bJ.a0T.a0k(3),
			aV0: bK.aaC(2),
			aV2: bK.aaC(10),
			aUy: bJ.a0T.a0k(8),
			aV1: bK.aaC(5),
			aUM: bK.sW(30),
			aUb: bK.sW(30),
			a4v: bK.aaC(32),
			aUo: bK.sW(3),
			aUn: bK.sW(8),
			aUh: bK.sW(30),
			aUi: bK.aaC(32),
			aUm: bK.sW(1),
			aUu: bJ.a0T.a0k(6),
			aUp: bK.sW(1),
			aUq: bK.sW(1),
			aUc: bK.sW(16),
			aUd: bK.sW(5),
			aUe: bK.sW(1),
			aaD: bK.sW(1),
			aUf: bK.sW(23),
			aUW: bK.sW(30),
			aV8: bK.sW(1),
			aV9: bK.sW(1)
		}).aV8 && (data.aVA = bK.aaC(32), data.aVB = bK.sW(30), data.aVC = bK.sW(30), data.aVD = bK.sW(1)), data.aaD && (data.aUf = -data.aUf), 8 === u.vd && (25 === u.a5e().aWa ? (data.aTu = !0, u.z.aTY = data, u.a5e().aHA(25, !1)) : (
			data.aTu = !1, bm.rt.pz(160, +(data.aV8 && data.aVD)), data.pe = bm.buffer.data[105].value, u.z.aTV = data, bm.rt.a0B(data), u.a5e().aHA(16, !0))))
	}
}

function aZD() {
	this.aZs = function() {
		var aC;
		if (bK.size < bG.aaB(23)) b1.z.aZb(0, 3259);
		else {
			var vu = bK.sW(6),
				fi = bK.sW(10),
				data = [];
			if (9 === vu || 10 === vu || 11 === vu || 13 === vu) {
				for (aC = 0; aC < fi; aC++) data.push([bK.sW(30), bJ.a0T.a0k(5), bK.aaC(32), 0, bK.sW(30)]);
				8 === u.vd && u.a5e().aHA(21, !0, {
					vu: vu,
					data: data
				})
			} else if (12 === vu) {
				for (aC = 0; aC < fi; aC++) data.push([bK.sW(20), bK.sW(30), bK.sW(30), bK.aaC(32), bK.sW(30), bJ.a0T.a0k(5), bJ.a0T.a0k(5)]);
				8 === u.vd && u.a5e().aHA(21, !0, {
					vu: vu,
					data: data
				})
			} else {
				var ii = bK.sW(16);
				if (bK.aaE(39 + 16 * ii + fi * (0 === vu ? 111 : 1 === vu ? 101 : 2 === vu || 3 === vu ? 127 : 212))) {
					if (0 === vu)
						for (aC = 0; aC < fi; aC++) data.push([bK.sW(30), bJ.a0R.a0V(bK.sW(5)), bK.sW(16), bK.sW(30), bK.sW(30)]);
					else if (1 === vu)
						for (aC = 0; aC < fi; aC++) data.push([bK.sW(16), bJ.a0R.a0V(bK.sW(3)), bK.sW(16), bJ.a0R.a0V(bK.sW(5)), bK.sW(31), bK.sW(30)]);
					else if (2 === vu || 3 === vu)
						for (aC = 0; aC < fi; aC++) data.push([bK.sW(30), bJ.a0R.a0V(bK.sW(5)), bK.aaC(32), bK.sW(30), bK.sW(30)]);
					else
						for (aC = 0; aC < fi; aC++) data.push([bK.sW(20), bK.sW(30), bK.sW(30), bK.sW(30), bK.sW(30), bK.aaC(32), bK.sW(30), bJ.a0R.a0V(bK.sW(5)), bJ.a0R.a0V(bK.sW(5))]);
					8 === u.vd && u.a5e().aHA(21, !0, {
						vu: vu,
						data: data
					})
				} else b1.z.aZb(0, 3260)
			}
		}
	}, this.aZt = function() {
		if (bK.size < bG.aaB(29)) b1.z.aZb(0, 3265);
		else {
			var aaF = bK.sW(4),
				aaG = bK.sW(7),
				aaH = bK.sW(11);
			if (bK.aaE(29 + 16 * aaG + 16 * aaH + 11 * aaF)) {
				for (var data = [], aC = 0; aC < aaF; aC++) {
					for (var a5A = bJ.a0R.a0V(bK.sW(3)), aaI = bK.sW(8), aVk = [], g1 = 0; g1 < aaI; g1++) aVk.push(bK.sW(16));
					data.push({
						name: "[" + a5A + "]",
						aVk: aVk
					})
				}
				8 === u.vd && u.a5e().aHA(23, !0, data)
			} else b1.z.aZb(0, 3266)
		}
	}
}

function aZ7() {
	function aaM() {
		var id = bK.sW(3);
		return 0 === id ? {
			id: id,
			pe: bK.sW(30),
			pf: aaN(),
			s: bJ.a0T.a0k(8)
		} : 1 === id ? {
			id: id,
			pe: bK.sW(30),
			pf: aaN(),
			aJ6: bK.sW(3),
			value: bK.sW(30),
			target: bK.sW(30),
			pg: aaN()
		} : 2 === id ? {
			id: id,
			pe: bK.sW(30),
			pf: aaN(),
			aJ6: bK.sW(3)
		} : 3 === id ? {
			id: id,
			pe: bK.sW(30),
			pf: aaN(),
			aJ6: bK.sW(3),
			value: bK.sW(4),
			target: bK.sW(30),
			pg: aaN()
		} : 4 === id ? {
			id: id,
			pe: bK.sW(30),
			pf: aaN(),
			aJ6: bK.sW(3),
			target: bK.sW(30),
			pg: aaN(),
			aJ8: bK.sW(1)
		} : 5 === id ? {
			id: id,
			aJ6: bK.sW(6)
		} : 6 === id ? {
			id: id,
			value: bK.sW(17)
		} : null
	}

	function aaN() {
		return bK.sW(1) ? bJ.a0T.a0k(5) : null
	}
	this.aZm = function(oY) {
		if (oY !== b1.z.fG) b1.z.close(oY, 3239);
		else if (6 !== ab.a5a()) b1.z.close(oY, 3271);
		else {
			bq.dt(), bq.z.wQ = bK.sW(10), bq.tV.aIT();
			for (var playerCount = bK.sW(16), g1 = 0; g1 < playerCount; g1++) bq.pm.aHt(bK.sW(30), bJ.a0T.a0k(5), bK.sW(4), bK.sW(30), bK.sW(7), bK.sW(16), bK.sW(18), bK.sW(11), bK.sW(12), bK.sW(6), bK.sW(13), bK.sW(1));
			u.v(29), bq.z.aJb(!0)
		}
	}, this.aZv = function(oY) {
		if (oY !== b1.z.fG) b1.z.close(oY, 3239);
		else if (bq.fF) {
			bq.z.aJa[0] = bK.sW(20), bq.z.aJa[1] = bK.sW(20);
			for (var aaJ = bK.sW(20), g1 = 0; g1 < aaJ; g1++) {
				var id = bK.sW(3);
				0 === id ? bq.pm.aHt(bK.sW(30), bJ.a0T.a0k(5), 0, 1234566, 127, 0, bK.sW(18), 0, bK.sW(12), 0, 0, 0) : 1 === id ? bq.pm.aID(bK.sW(16), bK.sW(16), bK.sW(13), bK.sW(1)) : 2 === id ? bq.pm.aI9(bK.sW(16), bJ.a0T.a0k(5)) : 3 === id ?
					bq.pm.aIB(bK.sW(16)) : 4 === id ? bq.pm.aI2(bK.sW(16), bK.sW(4), bK.sW(30), bK.sW(7), bK.sW(16), bK.sW(11), bK.sW(18)) : 5 === id ? bq.pm.aI4(bK.sW(16), bK.sW(1)) : 6 === id && bq.pm.aI3(bK.sW(16), bK.sW(6))
			}
			bq.z.wQ = bK.sW(10);
			for (var aaK = bK.sW(10), aC = 0; aC < aaK; aC++) {
				var xo = bK.sW(13),
					aXv = bK.sW(10),
					aIH = bK.sW(10),
					aHb = bq.z.aHb;
				if (aHb.aIH = aIH, aHb.a5i = bK.sW(10), aHb.aIv = bK.sW(10), aHb.fO = bK.sW(6), aHb.mapSeed = bK.sW(14), aHb.x4 = bK.sW(4), aHb.xV = bK.sW(1), aHb.spawningSeed = bK.sW(14), aHb.a4s = bK.sW(30) - 1, aHb.aII = null, 8 === aHb.x4) {
					aHb.aII = new Array(aIH);
					for (g1 = 0; g1 < aIH; g1++) aHb.aII[g1] = bK.sW(9)
				}
				xo = bq.pm.aIE(xo);
				if (bq.aHb.e1(xo, aXv, aIH)) return;
				bq.pm.aIK(xo, aXv, aIH, aHb.aII)
			}
			var aaL = bK.sW(13);
			aaL && bq.pm.aIN(aaL), bq.tV.aIT(), bq.z.aIj()
		} else b1.z.close(oY, 3251)
	}, this.aa0 = function(oY) {
		oY === b1.z.fG && bq.fF && bq.tV.aIc(bK.sW(13), bK.sW(1))
	}, this.aZw = function(oY) {
		if (oY !== b1.z.fG) b1.z.close(oY, 3272);
		else if (bq.fF) {
			for (var ps = bq.z.ps, y3 = (bq.z.pt = bK.sW(20), bK.sW(6)), aC = 0; aC < y3; aC++) {
				var aLJ = aaM();
				bq.q5.aLI(aLJ), bq.q5.aLO(aLJ), ps.push(aLJ)
			}
			ps.length > bq.z.q1 && ps.splice(0, ps.length - bq.z.q1), bq.z.aJi()
		} else b1.z.close(oY, 3273)
	}, this.aZx = function(oY) {
		var aLJ;
		oY !== b1.z.fG ? b1.z.close(oY, 3276) : bq.fF ? (aLJ = aaM(), bq.q5.aLI(aLJ), bq.message.aIV(aLJ)) : b1.z.close(oY, 3277)
	}
}

function aZ9() {
	this.aZn = function() {
		for (var id = bK.sW(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sW(8), bK.sW(8), bK.sW(8)]);
		var eu = bJ.a0T.a0k(8);
		bX.eb.er({
			id: id,
			colors: colors,
			eu: eu
		})
	}, this.aZy = function(oY) {
		var aaO = bK.sW(3),
			fl = bK.sW(5),
			fl = bl.aaP.aaQ(fl, bK.sW(30), bK.sW(30), bK.sW(30));
		b1.ep.aaR(oY, fl, aaO, 0)
	}, this.aZo = function(oY) {
		this.aZy(oY), bm.rt.pz(183, bI.f9.vf(bI.f9.vg(15))), 0 === oY && 0 === bm.buffer.data[105].value.length ? b1.ep.eq(0) : b1.aUR.aaS(oY), 4 === b1.z.aZJ(oY).aaT() ? 6 === ab.a5a() && b1.aIZ.aLx(oY) : 5 !== b1.z.aZJ(oY).aaT() || 8 !== ab
			.a5a() && 10 !== ab.a5a() || b1.rr.aML()
	}, this.aZq = function(oY) {
		var id = bK.sW(6);
		1 === id ? (bm.rt.pz(160, bK.sW(30)), b1.z.aZY(oY), aU.aE6 || b1.ep.eq(1), bA.aH6(), 8 === u.vd && u.a5e().aWn()) : 21 === id ? 8 === u.vd && u.a5e().aHA(17) : 22 === id && (bm.rt.pz(106, bm.buffer.data[110].value), bm.rt.pz(110, ""),
			8 === u.vd) && u.a5e().aHA(15)
	}, this.aZu = function() {
		var fi = bK.sW(16),
			aaU = bK.sW(16);
		if (bK.aaE(55 + 10 * fi + 16 * aaU)) {
			for (var h = [], aC = 0; aC < fi; aC++) h.push(bJ.a0R.a0V(bK.sW(10)));
			bA.aH9(h)
		} else b1.z.aZb(0, 3270)
	}, this.aZz = function(oY) {
		for (var aaO = bK.sW(3), fl = bK.sW(5), aaO = {
				aaO: aaO,
				u4: bl.aaP.aaQ(fl, bK.sW(30), bK.sW(30), bK.sW(30))
			}, fl = bK.aaC(32), aaV = [], aC = 0; aC < 17; aC++) aaV.push(new Uint8Array(bK.sW(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aaV[aC], fi = h.length, ib = 0; ib < fi; ib++) h[ib] = bK.aaC(8);
		bx.show(aaV, fl, oY, aaO)
	}
}

function aYz() {
	this.aZK = function(oY, aZI) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aZI ? 1 : 0), bG.a9(3, 0 === aE.a4P ? bq.fF ? 6 : 0 : aE.hr ? 1 : aE.lO ? 7 : aE.lM < 7 ? 2 : 8 === aE.lM ? 4 : 9 === aE.lM ? 5 : 3), b1.z.send(oY, bG.aD)
	}, this.aML = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fG), bG.a9(10, ay.aIv), bG.a9(10, ay.aME), bG.a9(10, m.eG), bG.a9(14, m.e5), b1.z.send(b1.z.a5i, bG.aD)
	}, this.rs = function(fU) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fU), b1.z.send(b1.z.a5i, bG.aD)
	}, this.ru = function(jM, kD) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jM), bG.a9(10, kD), b1.z.send(b1.z.a5i, bG.aD)
	}, this.ry = function(jM, rw) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jM), bG.a9(9, rw), b1.z.send(b1.z.a5i, bG.aD)
	}, this.s0 = function(jM, rz) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jM), bG.a9(27, rz), b1.z.send(b1.z.a5i, bG.aD)
	}, this.s2 = function(jM, o4) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jM), bG.a9(16, o4), b1.z.send(b1.z.a5i, bG.aD)
	}, this.s5 = function(kD) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kD), b1.z.send(b1.z.a5i, bG.aD)
	}, this.s9 = function(eR) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eR), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sB = function(sA) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sA), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sD = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sE = function(jM, fU, kD) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jM), bG.a9(10, kD), bG.a9(22, fU), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sM = function(aaW, aaX) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aaX), bG.a9(10, aaW), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sP = function(aBA) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aBA), b1.z.send(b1.z.a5i, bG.aD)
	}, this.sT = function(aaY, target) {
		var aC, fi = aaY.length;
		for (bG.a8(14 + 9 * fi), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fi; aC++) bG.a9(9, aaY[aC]);
		b1.z.send(b1.z.a5i, bG.aD)
	}
}

function aZ2() {
	this.aaZ = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.ep.aaa(), b1.z.send(0, bG.aD)
	}, this.aaS = function(oY) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f9.a0h(bm.buffer.data[105].value, 5), bJ.f9.a0h(bm.buffer.data[106].value, 15), b1.z.send(oY, bG.aD)
	}, this.aWo = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f9.a0h(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aUw = function(a8L) {
		var fi = a8L.pW.length;
		bG.a8(21 + 16 * fi), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a8L.action), bG.a9(8, fi), bI.a0R.a0g(a8L.pW), b1.z.send(0, bG.aD)
	}, this.aYN = function(a0G, colors, aac, eu) {
		bH.dt(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a0G, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var g1 = 0; g1 < 3; g1++) bH.a9(8, colors[aC][g1]);
		a0G = bA.data.aHD(aac.trim());
		bH.a9(8, -1 === a0G ? 255 : a0G), bI.a0T.a3t(eu.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aad())
	}, this.aUX = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f9.a0h(data.pe, 5), b1.z.send(0, bG.aD)
	}, this.aUS = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f9.a0h(data.pe, 5), bG.aaA(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aZ3() {
	this.sU = function() {
		for (var fi = aE.l4, a4E = bU.result.a4E, lz = a4E.length, a53 = (bG.a8(17 + 16 * fi + 33 * lz), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lz), bG.a9(1, +(2 === aE.a4M)), bG.a9(1, aE.a4i % 2), ah.a53), aC = 0; aC < fi; aC++) bG.a9(16, a53[
		aC]);
		for (var hW = ah.hW, aC = 0; aC < lz; aC++) {
			var hG = a4E[aC];
			bG.a9(9, hG), bG.a9(24, hW[hG])
		}
		b1.z.send(b1.z.a5i, bG.aD)
	}
}

function aZ4() {
	this.aWf = function(vu, vv, vw) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, vu), bG.a9(1, +(vv < 0)), bG.a9(1, +(vw < 0)), bG.a9(30, Math.abs(vv)), bG.a9(30, Math.abs(vw)), b1.z.send(0, bG.aD)
	}, this.aWg = function(vu, aWh, aWi) {
		bG.a8(18 + 16 * aWh.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, vu), b1.ep.aae(aWh), bG.a9(30, aWi), b1.z.send(0, bG.aD)
	}, this.aWl = function(vu, aWh, aWi) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, vu), bJ.f9.a0h(aWh, 5), bG.a9(30, aWi), b1.z.send(0, bG.aD)
	}, this.aWj = function(aVj, a59) {
		for (var fi = a59.length, ii = 0, aC = 0; aC < fi; aC++) ii += a59[aC].length;
		for (bG.a8(21 + 3 * fi + 16 * ii), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aVj), bG.a9(4, fi), bG.a9(7, ii), aC = 0; aC < fi; aC++) bG.a9(3, a59[aC].length), bI.a0R.a0g(a59[aC]);
		b1.z.send(0, bG.aD)
	}, this.aWk = function(aVj, vv, vw) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aVj), bG.a9(1, +(vv < 0)), bG.a9(1, +(vw < 0)), bG.a9(20, Math.abs(vv)), bG.a9(20, Math.abs(vw)), b1.z.send(0, bG.aD)
	}
}

function aZ0() {
	this.aLx = function(oY) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eG), b1.ep.aae(username), bD.color.a7L(bm.z.a05()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fG = oY, b1.z.send(oY, bG.aD)
	}, this.aIa = function(aaf, a8L) {
		bH.dt(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aaf), 2 === aaf ? bH.a9(30, a8L) : 4 === aaf ? (bH.a9(13, a8L.xo), bH.a9(1, a8L.xr)) : 3 === aaf ? bI.a0T.a3t(a8L, 8, bH) : 5 === aaf ? (bH.a9(3, a8L.id), bH.a9(3, a8L.value), bH.a9(30, a8L
			.pe)) : 6 === aaf && (bH.a9(2, a8L.x4), bH.a9(30, a8L.pe)), b1.z.send(b1.z.fG, bH.aad())
	}
}

function aZ1() {
	this.aZX = function(oY) {
		var aam;
		bG.a8(55 + bl.aag.sW()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e5), bG.a9(4, a1.id), bG.a9(7, a1.eA), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aam = bA.aHC(), bG.a9(8, aam[0]), bG.a9(8, aam[1]), bl.aag
		.a3t(), b1.z.send(oY, bG.aD)
	}, this.aaR = function(oY, u4, aaO, aai) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aaO), bG.a9(30, u4), bG.a9(30, aai), b1.z.send(oY, bG.aD)
	}, this.fH = function(fC) {
		bH.dt(), bH.a9(1, 0), bH.a9(6, 6), bI.a0T.a3t(fC, 16, bH), b1.z.send(b1.z.fG, bH.aad())
	}, this.eq = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.yO = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aH8 = function(id, pW) {
		var fi = Math.min(pW.length, 63);
		bG.a8(19 + 16 * fi), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fi), bI.a0R.a0g(pW), b1.z.send(0, bG.aD)
	}, this.aaj = function(aXz, q3) {
		bG.a8(7 + 26 * q3.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q3.length; aC++) bG.a9(16, q3[aC][0]), bG.a9(10, q3[aC][1]);
		b1.z.send(aXz, bG.aD)
	}, this.aZe = function(aak, aal) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aak), bG.a9(12, aal), b1.z.send(b1.z.a5i, bG.aD)
	}, this.aae = function(username) {
		bG.a9(5, username.length), bI.a0R.a0g(username)
	}, this.pH = function(pI, op, oY, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aaO), bG.a9(30, pow.u4), bG.aaA(32, op), bG.a9(16, pI), b1.z.send(oY, bG.aD)
	}
}

function aZV() {
	var aan, aao, b, aap = ["wss://", "/s50/", "/s51/", "/s52/"],
		aaq = 0;

	function aZW() {
		b1.z.aZW(aan, aao)
	}

	function aat(e) {
		b1.aBA.aZg(aan, new Uint8Array(e.data))
	}

	function aau() {}

	function aZd(e) {
		b1.z.aZd(aan, e)
	}
	this.dt = function(eR, a5f, aZR) {
		aan = eR, aao = a5f,
			function(aZR) {
				aZR = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e6 ? "ws://localhost:" + (7130 + aan) + "/" : aZR ? aap[0] + "game.territorial.io/x0" + aan + "/" : aap[0] + b1.z.aZE[aan] + aap[1 + m.e4];
				(b = new WebSocket(aZR)).binaryType = "arraybuffer", b.onopen = aZW, b.onmessage = aat, b.onclose = aZd, b.onerror = aau
			}(aZR)
	}, this.aas = function() {
		return b.readyState === b.CONNECTING
	}, this.eo = function() {
		return b.readyState === b.OPEN
	}, this.aZM = function() {
		return aaq
	}, this.aZY = function() {
		aaq = 1
	}, this.aZT = function() {
		return this.aas() || this.eo()
	}, this.aZU = function(a5f) {
		aao = a5f
	}, this.aaT = function() {
		return aao
	}, this.send = function(aD) {
		this.eo() && b.send(aD)
	}, this.close = function(aZa) {
		this.aZT() && (this.uW(), b.close(aZa))
	}, this.uW = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dU() {
	var gap, aav = !1,
		x5 = 0,
		j = 0,
		vi = 0,
		canvas = null,
		p4 = null,
		a6v = null;

	function aaz() {
		for (var aC = aE.a1d; 0 <= aC; aC--) a6v[aC] = 0;
		for (aC = am.la - 1; 0 <= aC; aC--) a6v[bj.fg[am.lf[aC]]] += ah.hW[am.lf[aC]];
		aav = !0
	}

	function aax() {
		for (var ab4, ab2 = 0, fi = 0, es = Math.floor(j / 2), eQ = Math.floor(vi / 2), ab3 = 1.5 * Math.PI, aC = aE.a1d; 0 <= aC; aC--) fi += a6v[aC], 0 === a6v[aC] && ab2++;
		if (aav = !1, p4.clearRect(0, 0, j, j), 0 < fi)
			if (ab2 === aE.a1d) {
				for (aC = aE.a1d; 0 <= aC; aC--)
					if (0 < a6v[aC]) {
						! function(aC, es, eQ) {
							p4.fillStyle = bj.ab8[bj.lR[aC]], p4.beginPath(), p4.arc(es, es, eQ, 0, 2 * Math.PI), p4.fill()
						}(aC, es, eQ);
						break
					}!
				function(es) {
					var fontSize = es / 3;
					p4.font = bD.t6.t9(1, fontSize), p4.fillStyle = bE.qN, p4.fillText("100%", es, es + .1 * fontSize)
				}(es)
			} else {
				for (aC = 0; aC <= aE.a1d; aC++) 0 < a6v[aC] && (ab4 = ab3 + 2 * Math.PI * a6v[aC] / fi, ab7(p4, bj.ab8[bj.lR[aC]], es, eQ, ab3, ab4), function(es, eQ, ab3, ab4) {
					var gA = (ab4 - ab3) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eQ * Math.min(gA, .37);
					fontSize < 8 || (ab3 = (ab3 + ab4) / 2, ab4 = (__fx.settings.detailedTeamPercentage ? (100 * gA).toFixed(2) : Math.floor(100 * gA + .5)) + "%", eQ *= .525 - Math.max(.6 * (gA - .7), 0), p4.font = bD.t6.t9(1, fontSize), p4
						.fillStyle = bE.qN, p4.fillText(ab4, es + Math.cos(ab3) * eQ, es + Math.cos(ab3 + 1.5 * Math.PI) * eQ))
				}(es, eQ, ab3, ab4), 0 !== aC && abA(p4, es, eQ, ab3), ab3 = ab4);
				abA(p4, es, eQ, 1.5 * Math.PI)
			} abB(p4, es, eQ)
	}

	function ab7(io, color, es, eQ, ab3, ab4) {
		io.fillStyle = color, io.beginPath(), io.arc(es, es, eQ, ab3, ab4), io.lineTo(es, es), io.fill()
	}

	function abA(io, es, eQ, abC) {
		io.beginPath(), io.moveTo(es, es), io.lineTo(es + Math.cos(abC) * eQ, es + Math.cos(abC + 1.5 * Math.PI) * eQ), io.stroke()
	}

	function abB(io, es, eQ) {
		io.beginPath(), io.arc(es, es, eQ, 0, 2 * Math.PI), io.stroke()
	}
	this.dt = function() {
		if (aE.ie) {
			x5 = 0, a6v = new Uint32Array(aE.a1d + 1);
			for (var aC = aE.a1d; 0 <= aC; aC--) a6v[aC] = 0;
			for (aC = am.la - 1; 0 <= aC; aC--) a6v[bj.fg[am.lf[aC]]] += 1;
			this.resize()
		} else a6v = p4 = canvas = null
	}, this.aCf = function() {
		return j
	}, this.resize = function() {
		aE.ie && (j = Math.floor(.95 * (a1.a2.iv() && !aE.oA ? .18 * i.min : .13 * i.iw)), j = (j *= 1 + (.5 + .2 * a1.a2.iv()) * aE.oA) + j % 2, gap = Math.max(1, .015 * j), vi = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p4 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p4.strokeStyle = bE.qN, bD.t6.textAlign(p4, 1), bD.t6.textBaseline(p4, 1), aax())
	}, this.lb = function(aay) {
		aay && aaz();
		var ej, aay = this.ld();
		return bj.lR[aay] || (aay = function() {
			for (var lc = -1, aC = aE.a1d; 1 <= aC; aC--)(-1 === lc || a6v[aC] > a6v[lc]) && (lc = aC);
			return lc
		}(), ej = ah.hW[mf[0]], -1 !== aay && a6v[aay] > ej) ? a6v[aay] : ej
	}, this.a5L = function() {
		return x5 = 31, this.en(), this.ld()
	}, this.ld = function() {
		for (var lc = 0, aC = aE.a1d; 0 < aC; aC--) a6v[aC] > a6v[lc] && (lc = aC);
		return lc
	}, this.l5 = function(ab1) {
		for (var hB = 0, lf = am.lf, fg = bj.fg, fi = am.la, gM = bR.gM, aC = 0; aC < fi; aC++) {
			var hG = lf[aC];
			fg[hG] === ab1 && (gM[hB++] = hG)
		}
		bR.gD[0] = hB
	}, this.le = function(ab1) {
		for (var hB = 0, lf = am.lf, fg = bj.fg, fi = am.la, gM = bR.gM, aC = 0; aC < fi; aC++) {
			var hG = lf[aC];
			fg[hG] !== ab1 && (gM[hB++] = hG)
		}
		bR.gD[0] = hB
	}, this.a7s = function() {
		for (var hB = 0, aC = aE.a1d; 0 <= aC; aC--) hB += 0 < a6v[aC];
		return hB
	}, this.en = function() {
		aE.ie && 32 <= ++x5 && (x5 = 0, aaz())
	}, this.nT = function() {
		aE.ie && aav && aax()
	}, this.xZ = function(io, hB, size) {
		var es = size >> 1,
			eQ = Math.floor(.4 * size),
			ab3 = 1.5 * Math.PI;
		io.clearRect(0, 0, size, size), io.lineWidth = .042 * size, io.strokeStyle = bE.qN;
		for (var aC = 0; aC < hB; aC++) {
			var ab4 = ab3 + 2 * Math.PI / hB;
			ab7(io, bj.ab8[aC + 1], es, eQ, ab3, ab4), 0 !== aC && abA(io, es, eQ, ab3), ab3 = ab4
		}
		abA(io, es, eQ, 1.5 * Math.PI), abB(io, es, eQ)
	}, this.z1 = function() {
		aE.ie && (aE.oA ? z2.drawImage(canvas, bf.gap, bf.gap) : z2.drawImage(canvas, bf.gap, aCe + 2 * bf.gap))
	}
}

function dl() {
	function abI(fp, fi, fr, a43, aDv, g8) {
		if (!(fr < 1 || aDv < fr))
			for (var aC = 0; aC <= fi; aC++) {
				var fM = bP.jQ(fp, fr);
				if (a43(fM)) return fM >> 2;
				fp += g8
			}
		return -1
	}

	function abM(fr, fi, fp, a43, abG, g8) {
		if (!(fp < 1 || abG < fp)) {
			fi = Math.max(fi, 0);
			for (var aC = 0; aC <= fi; aC++) {
				var fM = bP.jQ(fp, fr);
				if (a43(fM)) return fM >> 2;
				fr += g8
			}
		}
		return -1
	}

	function abQ(jD, jE, abD) {
		return -1 !== jE && (-1 === jD || bP.jF(jE, abD) < bP.jF(jD, abD)) ? jE : jD
	}
	this.i8 = function(abD) {
		return this.a4T(abD, function(fM) {
			return ad.fd(fM)
		})
	}, this.iE = function(abD) {
		return this.a4T(abD, function(fM) {
			return ad.aN3(fM, aE.fS)
		})
	}, this.a4T = function(abD, a43) {
		return function(abD, abE, a43) {
			for (var hy = bP.fq(abD), i0 = bP.fs(abD), abG = bV.ft - 2, aDv = bV.fu - 2, abH = -1, fl = 0; fl < abE; fl++) {
				var aDu = Math.max(hy - fl, 1),
					aRh = Math.max(i0 - fl, 1),
					a2E = Math.min(hy + fl, abG),
					a2D = Math.min(i0 + fl, aDv),
					jD = abI(hy, a2E - hy, i0 - fl, a43, aDv, 1),
					jE = abI(hy - 1, hy - aDu - 1, i0 - fl, a43, aDv, -1),
					a2E = abI(hy, a2E - hy, i0 + fl, a43, aDv, 1),
					aDu = abI(hy - 1, hy - aDu - 1, i0 + fl, a43, aDv, -1),
					abL = abM(i0, a2D - i0 - 1, hy - fl, a43, abG, 1),
					abN = abM(i0 - 1, i0 - aRh - 2, hy - fl, a43, abG, -1),
					a2D = abM(i0, a2D - i0 - 1, hy + fl, a43, abG, 1),
					aRh = abM(i0 - 1, i0 - aRh - 2, hy + fl, a43, abG, -1);
				if (abH = abQ(abH, jD, abD), abH = abQ(abH, jE, abD), abH = abQ(abH, a2E, abD), abH = abQ(abH, aDu, abD), abH = abQ(abH, abL, abD), abH = abQ(abH, abN, abD), abH = abQ(abH, a2D, abD), 0 <= (abH = abQ(abH, aRh, abD)) && fl *
					fl >= bP.jF(abH, abD)) return abH
			}
			return -1
		}(abD, bP.it(), a43)
	}
}

function dD() {
	function abR(key, size) {
		var aYP;
		return "undefined" == typeof URLSearchParams || (aYP = window.location.search, "string" != typeof(aYP = new URLSearchParams(aYP).get(key))) || aYP.length < 1 ? null : bJ.f9.a0a(aYP, size)
	}
	this.e1 = function() {
		if (0 !== a1.id) return !1;
		var a4s = abR("r", 6);
		if (! function() {
				var value = abR("account", 5);
				if (!value && !(value = abR("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vd, new ve(1e3, {
					action: 0,
					pe: value,
					vc: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4s) return !1;
			this.aVF("r", a4s), u.v(3, 0, L(540)), bC.abT(a4s)
		}
		return !0
	}, this.clear = function() {
		var a5V = new URL(window.location.href);
		a5V.search = "";
		try {
			return history.replaceState(null, "", a5V.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aVF = function(key, value) {
		if (0 === a1.id) try {
			var a5V = new URL(window.location.href),
				hG = a5V.searchParams;
			hG.set(key, value), a5V.search = hG.toString(), history.replaceState(null, "", a5V.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cs() {
	var abV, h;
	this.dt = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g9(32768 * aC, 100);
		this.a97(0)
	}, this.value = function(hG) {
		return h[hG]
	}, this.aRJ = function() {
		return bO.g9(abV - 1, 2)
	}, this.a97 = function(aRB) {
		abV = 2 * aRB % 32768 + 1
	}, this.random = function() {
		return abV = 167 * abV % 32768
	}, this.kL = function(nb) {
		return bO.g9(nb * this.random(), 32768)
	}, this.kw = function(hG) {
		return 0 !== hG && this.random() < this.value(hG)
	}, this.jh = function(g1, g2) {
		return g1 + this.kL(g2 - g1)
	}
}

function d9() {
	function abd(pW) {
		3 === u.vd && u.a5e().zH(pW)
	}
	this.si = new abW, this.a9H = new abX, this.aOn = new abY, this.dt = function() {
		aE.hr || this.si.dt()
	}, this.en = function() {
		aE.hr || (this.si.en(), 3 !== u.vd) || bi.l1() % 15 != 5 && 2 !== aE.a4P || u.a5e().aYQ()
	}, __fx.replay.restartReplay = () => this.aYT(), this.aYT = function() {
		var aba = 0 !== aE.a4P,
			abb = aE.a92;
		aba || ab.aM7(), aE.a90.a9R(), aE.data.canvas = null, b1.z.close(b1.z.a5i, 3257), b1.z.a5i = 0, aE.data.isReplay = 1, aE.a94(), aba && (aE.a92 = abb)
	}, this.aYS = function(pW) {
		var aC = pW.indexOf("=");
		return 0 <= aC ? pW.substring(aC + 1) : pW
	}, __fx.replayHistory.load = saved => {
		saved = bC.aYS(saved), bC.aOn.a0k(saved) && bC.aYT()
	}, this.abT = function(id) {
		var abc = new XMLHttpRequest;
		abc.open("GET", "https://" + b1.z.a4r() + "/log/?r=" + id), abc.onload = function() {
			var pW = 200 === abc.status ? abc.responseText : "";
			abd(pW.length ? pW : L(541))
		}, abc.onerror = function() {
			abd(L(542))
		}, abc.send()
	}, this.aYR = function(pW) {
		return pW
	}
}

function abW() {
	this.abe = null, this.abf = null, this.abg = null, this.abh = null, this.abi = null, this.abj = null, this.a9G = "";
	var abk = 0;
	this.dt = function() {
		this.abe = [], this.abf = [], this.abg = [], this.abh = [], this.abi = [0], this.abj = [0], abk = 0, this.a9G = ""
	}, this.sj = function(id, gR, gT, gV) {
		aE.hr || 2 === aE.a4P || (0 === this.abi[abk] && (this.abj[abk] ? (this.abi.push(1), this.abj.push(0), abk++) : this.abi[abk] = 1), this.abe.push(id), this.abf.push(gR), this.abg.push(void 0 === gT ? 0 : gT), this.abh.push(void 0 === gV ?
			0 : gV), this.abj[abk]++)
	}, this.en = function() {
		0 === this.abi[abk] ? this.abj[abk]++ : (this.abi.push(0), this.abj.push(0), abk++)
	}
}

function abY() {
	var abl = 0;

	function abp(pW, id) {
		console.log(pW), abl || (id ? 1 === id ? aO.aAa = L(225) + ": " + pW : u.v(4, 3, new w(L(544), pW, 1)) : u.v(4, 3, new w("⚠️ " + L(543), pW, 1)))
	}
	this.a0k = function(pW, abm) {
		var j5, q3;
		return abl = abm, bJ.f9.a0d(bJ.f9.a0b(bJ.f9.a0Z(pW))), aO.aAa = "", !! function() {
			if (bK.size < 10) abp("File Too Small");
			else {
				var abr = bK.sW(12),
					s = (abr !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, abp(s = (s += "   Found: " + abr) + ("   Compatible at " + b1.z.a4r() + "/" + abr), 1)), bK.sW(12)),
					abt = bK.sW(31);
				if (abt !== bK.size) abp("Size Error: Stated Size " + abt + " Actual Size " + bK.size);
				else if (function(k, abr) {
						for (var hG = bK.aD, fi = bK.size, aal = abr, aC = 3; aC < fi; aC++) aal = aal + hG[aC] & 4095;
						return aal === k || (abp("Hash Error: " + aal + " " + k + " " + fi), !1)
					}(s, abr)) return 1
			}
			return
		}() && (j5 = bK, (q3 = aE.data = new a8z).mapType = j5.sW(2), q3.mapProceduralIndex = j5.sW(8), q3.mapRealisticIndex = j5.sW(8), q3.mapSeed = j5.sW(14), q3.mapName = j5.abv(5), 2 === q3.mapType && j5.abw(), q3.passableWater = j5.sW(
			1), q3.passableMountains = j5.sW(1), q3.playerCount = j5.sW(10), q3.humanCount = j5.sW(10), q3.selectedPlayer = j5.sW(9), q3.gameMode = j5.sW(1), q3.playerMode = j5.sW(2), q3.battleRoyaleMode = j5.sW(2), q3.numberTeams = j5.sW(4),
			q3.isZombieMode = j5.sW(1), q3.isContest = j5.sW(1), q3.isReplay = j5.sW(1), q3.elo = j5.abx(2, 14, 2), q3.colorsType = j5.sW(1), q3.colorsPersonalized = j5.sW(1), q3.colorsData = j5.abx(10, 18, 512), q3.selectableColor = j5.sW(
			1), q3.teamPlayerCount = j5.abx(4, 10, 9), q3.neutralBots = j5.sW(1), q3.botDifficultyType = j5.sW(2), q3.botDifficultyValue = j5.sW(4), q3.botDifficultyTeam = j5.abx(4, 4, 9), q3.botDifficultyData = j5.abx(10, 4, 512), q3
			.spawningType = j5.sW(2), q3.spawningSeed = j5.sW(14), q3.spawningData = j5.abx(11, 12, 1024), q3.selectableSpawn = j5.sW(1), q3.playerNamesType = j5.sW(2), q3.playerNamesData = j5.aby(10, 5, 512), q3.selectableName = j5.sW(1), q3
			.aIncomeType = j5.sW(2), q3.aIncomeValue = j5.sW(8), q3.aIncomeData = j5.abx(10, 8, 512), q3.tIncomeType = j5.sW(2), q3.tIncomeValue = j5.sW(8), q3.tIncomeData = j5.abx(10, 8, 512), q3.iIncomeType = j5.sW(2), q3.iIncomeValue = j5
			.sW(8), q3.iIncomeData = j5.abx(10, 8, 512), q3.sResourcesType = j5.sW(2), q3.sResourcesValue = j5.sW(11), q3.sResourcesData = j5.abx(10, 11, 512), q3.a9P = j5.abx(10, 30, 0), !! function() {
				var j5 = bK,
					a0l = j5.sW(5),
					abz = j5.sW(30),
					ac0 = j5.sW(30);
				if (abz + ac0 > 8 * j5.size) return void abp("Corrupted File");
				return function(fi) {
						var ac3 = new Uint8Array(fi),
							ac4 = new Uint16Array(fi),
							ac5 = new Uint32Array(fi),
							ac6 = new Uint32Array(fi);
						bC.si.abe = ac3, bC.si.abf = ac4, bC.si.abg = ac5, bC.si.abh = ac6;
						for (var aC = 0; aC < fi; aC++) {
							var id = bK.sW(4);
							ac3[aC] = id, ac4[aC] = bK.sW(9), 0 === id ? ac5[aC] = bK.sW(22) : 1 === id ? (ac5[aC] = bK.sW(10), ac6[aC] = bK.sW(10)) : 2 === id ? (ac5[aC] = bK.sW(10), ac6[aC] = bK.sW(9)) : 3 === id ? (ac5[aC] = bK.sW(10),
								ac6[aC] = bK.sW(27)) : 4 === id ? (ac5[aC] = bK.sW(10), ac6[aC] = bK.sW(16)) : 5 === id || 6 === id ? ac5[aC] = bK.sW(10) : 7 === id ? ac5[aC] = bK.sW(1) : 10 === id && (ac5[aC] = bK.sW(20), ac6[aC] = bK
								.sW(22))
						}
					}(abz),
					function(fi, a0l) {
						var abi = new Uint8Array(fi),
							abj = new Array(fi);
						abj.fill(0), bC.si.abi = abi, bC.si.abj = abj;
						for (var aC = 0; aC < fi; aC++) abi[aC] = bK.sW(1), abj[aC] = bK.sW(a0l)
					}(ac0, a0l), 1
			}()) && (bK.eR < 8 * bK.size - 13 || bK.eR > 8 * bK.size ? (abp("Out Of Bounds Error: " + bK.eR + " " + 8 * bK.size), !1) : (bC.si.a9G = pW, 2 !== aE.data.mapType || (abp("Load base64 image...", 2), abm)))
	}, this.aOo = function(aNq, abq) {
		var a7G = document.createElement("canvas"),
			io = a7G.getContext("2d");
		if (a7G.width = aNq.width, a7G.height = aNq.height, io.drawImage(aNq, 0, 0), aE.data.canvas = a7G, abl || abq) return aE.a4P ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aYT()
	}
}

function abX() {
	this.a3t = function() {
		var a0l = function() {
				for (var abj = bC.si.abj, fi = abj.length, max = 0, aC = 0; aC < fi; aC++) max = Math.max(max, abj[aC]);
				return a0r(Math.max(max, 1))
			}(),
			j = (q3 = aE.data, (j = bH).dt(), j.a9(12, m.rVersion), j.eR += 43, j.a9(2, q3.mapType), j.a9(8, q3.mapProceduralIndex), j.a9(8, q3.mapRealisticIndex), j.a9(14, q3.mapSeed), j.acD(q3.mapName, 5), 2 === q3.mapType && j.acE(q3.canvas),
				j.a9(1, q3.passableWater), j.a9(1, q3.passableMountains), j.a9(10, q3.playerCount), j.a9(10, q3.humanCount), j.a9(9, q3.selectedPlayer), j.a9(1, q3.gameMode), j.a9(2, q3.playerMode), j.a9(2, q3.battleRoyaleMode), j.a9(4, q3
					.numberTeams), j.a9(1, q3.isZombieMode), j.a9(1, q3.isContest), j.a9(1, q3.isReplay), j.dz(q3.elo, 2, 14), j.a9(1, q3.colorsType), j.a9(1, q3.colorsPersonalized), j.dz(q3.colorsData, 10, 18), j.a9(1, q3.selectableColor), j.dz(
					q3.teamPlayerCount, 4, 10), j.a9(1, q3.neutralBots), j.a9(2, q3.botDifficultyType), j.a9(4, q3.botDifficultyValue), j.dz(q3.botDifficultyTeam, 4, 4), j.dz(q3.botDifficultyData, 10, 4), j.a9(2, q3.spawningType), j.a9(14, q3
					.spawningSeed), j.dz(q3.spawningData, 11, 12), j.a9(1, q3.selectableSpawn), j.a9(2, q3.playerNamesType), j.acF(q3.playerNamesData, 10, 5), j.a9(1, q3.selectableName), j.a9(2, q3.aIncomeType), j.a9(8, q3.aIncomeValue), j.dz(q3
					.aIncomeData, 10, 8), j.a9(2, q3.tIncomeType), j.a9(8, q3.tIncomeValue), j.dz(q3.tIncomeData, 10, 8), j.a9(2, q3.iIncomeType), j.a9(8, q3.iIncomeValue), j.dz(q3.iIncomeData, 10, 8), j.a9(2, q3.sResourcesType), j.a9(11, q3
					.sResourcesValue), j.dz(q3.sResourcesData, 10, 11), j.dz(q3.a9P, 10, 30), ! function(a0l) {
					var j = bH,
						abe = bC.si.abe,
						gR = bC.si.abf,
						gT = bC.si.abg,
						gV = bC.si.abh,
						fi = abe.length;
					j.a9(5, a0l), j.a9(30, fi), j.a9(30, bC.si.abj.length);
					for (var aC = 0; aC < fi; aC++) {
						var es = abe[aC];
						j.a9(4, es), j.a9(9, gR[aC]), 0 === es ? j.a9(22, gT[aC]) : 1 === es ? (j.a9(10, gT[aC]), j.a9(10, gV[aC])) : 2 === es ? (j.a9(10, gT[aC]), j.a9(9, gV[aC])) : 3 === es ? (j.a9(10, gT[aC]), j.a9(27, gV[aC])) : 4 === es ? (j
							.a9(10, gT[aC]), j.a9(16, gV[aC])) : 5 === es || 6 === es ? j.a9(10, gT[aC]) : 7 === es ? j.a9(1, gT[aC]) : 10 === es && (j.a9(20, gT[aC]), j.a9(22, gV[aC]))
					}
				}(a0l), ! function(a0l) {
					for (var j = bH, abi = bC.si.abi, abj = bC.si.abj, fi = abi.length, aC = 0; aC < fi; aC++) j.a9(1, abi[aC]), j.a9(a0l, abj[aC])
				}(a0l), bH.eR),
			q3 = bO.g9(j - 1, 6) + 1,
			a0l = (bG.aaB(6 * q3) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eR = 24, j.a9(31, j.h.length), j.eR = 12, j.a9(12, function() {
					for (var h = bH.h, fi = h.length, aal = m.rVersion, aC = 3; aC < fi; aC++) aal = aal + h[aC] & 4095;
					return aal
				}())
			}(), bK.dt(bH.h), bI.f9.vf(bI.f9.vg(q3)));
		return bK.y4(), bH.dt(), a0l
	}
}

function cx() {
	var es, c2 = !1,
		acH = !1,
		acI = -1e4,
		acJ = -1,
		acK = 0;

	function resize(acO) {
		es = 0, ac.w3() && (acM(acO) || c2) && (c2 = !1, bf.resize(), bZ.aGb.resize(), aZ.dt(), bb.dt(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a4P ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDk()) : (ab.aM9(), ab.aMA()), bi.e0 = !0)
	}

	function acL(gA) {
		return gA && 128 < gA ? Math.floor(gA) : 128
	}

	function acM(acO) {
		var j, k, acQ, vi, aD9;
		if (!(0 < i.vK)) return vi = acL(document.documentElement.clientWidth), aD9 = acL(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vi, k = aD9, acQ = 0 !== a1.id || j < k ?
			700 : 1200, acQ = Math.min(acQ / ((j + k) / 2), 1), acQ = 0 === bm.buffer.data[1].value ? 2 * acQ / 3 : Math.min(acQ + (bm.buffer.data[1].value - 1) * (1 - acQ) / 2, 1), i.l = (window.devicePixelRatio || 1) * acQ, __fx.hoveringTooltip
			.canvasPixelScale = i.l, acO && !acH ? (acH = !0, u.removeChild(document.body, a5w)) : acH && (acH = !1, document.body.appendChild(a5w)), j = Math.floor(.5 + vi * i.l), k = Math.floor(.5 + aD9 * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aGD(j, k), i.max = aAq(j, k), i.iw = bO.g9(j + k, 2), i.yy = j / k, a5w.width = j, a5w.height = k, a5w.style.width = vi + "px", a5w.style.height = aD9 + "px", acJ = bi.ei + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iw = 0, this.yy = 1, this.l = 1, this.vK = 0, this.du = function() {
		this.j = acL(document.documentElement.clientWidth) + 2, this.k = acL(document.documentElement.clientHeight) + 2
	}, this.dt = function() {
		es = 1, a5w = document.getElementById("canvasA"), 2 === a1.id && (a5w.style.webkitUserSelect = "none"), (z2 = a5w.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, acM(0)
	}, this.en = function() {
		50 <= ++es && resize(0), -1 === acJ || bi.ei < acJ || (acJ = -1, 2e3 * ++acK >= bi.ei + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e3 = function(kJ) {
		c2 = !0, resize(kJ)
	}, this.a6b = function() {
		acI + 1e3 > bi.ei || (acI = bi.ei, resize(0))
	}
}

function di() {
	var acS = [];
	this.aKx = function(pe) {
		for (var ej = (new Date).getTime() - 36e5, aC = acS.length - 1; 0 <= aC; aC--)
			if (acS[aC].ej < ej) acS.splice(aC, 1);
			else if (acS[aC].pe === pe) return !0;
		return !1
	}, this.aKz = function(pe, aKy) {
		return !(this.aKx(pe) || !b1.z.eo(0) || (b1.aUR.aUS({
			action: 6,
			pe: pe,
			value: aKy
		}), acS.push({
			pe: pe,
			ej: (new Date).getTime()
		}), 0))
	}
}

function dR() {
	this.aaP = new acT, this.a5H = new acU, this.aag = new acV
}

function acV() {
	var acW = acX(),
		acY = acZ(),
		aca = acb();
	this.sW = function() {
		return 123
	}, this.a3t = function() {
		bJ.f9.a0h(bm.buffer.data[183].value, 15), bG.a9(14, acW), bG.a9(7, acY), bG.a9(12, aca)
	}
}

function acX() {
	for (var es = document.createElement("canvas"), es = (es.width = 24, es.height = 24, es.getContext("2d", {
			alpha: !1
		})), fl = (es.fillStyle = "rgb(0,0,0)", es.fillRect(0, 0, 24, 24), es.font = "22px system-ui", es.textBaseline = "middle", es.textAlign = "center", es.fillStyle = "rgb(255,255,255)", es.fillText("Q", 12, 12), es.getImageData(0, 0, 24, 24)
			.data), fi = fl.length, lz = 0, aC = 0; aC < fi; aC += 4) lz += fl[aC];
	return 16383 & lz
}

function acZ() {
	var fl = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fl + .5) / 15))
}

function acb() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function acU() {
	this.a5I = function() {
		for (var hG, fi = am.la, x6 = am.lf, a53 = ah.a53, aCx = this.aNZ(), aC = 0; aC < fi; aC++) hG = x6[aC], bD.h4.kR(hG) || (a53[hG] = aCx);
		var sn = ah.sn,
			k7 = ah.k7,
			k8 = ah.k8,
			a51 = ah.a51,
			fi = aE.l4;
		for (aC = 0; aC < fi; aC++)(0 === a51[aC] || k8[aC] < 1 || 2 * sn[aC] > 3 * (k7[aC] + k8[aC])) && (a53[aC] = 0);
		var a5F = 0;
		for (aC = 0; aC < fi; aC++) a5F += 0 < a53[aC];
		return a5F
	}, this.aNZ = function() {
		return Math.min(65535, bi.l1())
	}
}

function acT() {
	function acf(h, gA, ib) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (gA >> (aC + ib) % 30 & 1)) % 256
	}
	this.en = function(acc, acd) {
		var h = new Uint8Array(256);
		return function(h, acc, acd) {
				var aC, ach = 3 + (4 + acc) % 32768,
					aci = 12 + acd % 32768,
					acj = 17 + ((acc & acd) + (acc | acd) + acc) % 32768;
				for (aC = 0; aC < 256; aC++) ach = 1 + ach * aci % acj, h[aC] = ach % 256
			}(h, acc, acd), acf(h, acc, 2), acf(h, acd, 7),
			function(h) {
				var aC, gA, eR = 0;
				for (aC = 0; aC < 3e4; aC++) gA = h[eR], h[eR] = (gA + aC + h[(eR + aC) % 256]) % 256, eR = (gA + aC + eR + (gA & eR)) % 256
			}(h),
			function(h) {
				var aC, aD9 = 1,
					wO = 1;
				for (aC = 0; aC < 256; aC += 2) aD9 = (1 + aD9) * (h[aC] + 1) % 1073741824, wO = (1 + wO) * (h[aC + 1] + 1) % 1073741824;
				return [aD9, wO]
			}(h)
	}, this.aaQ = function(ack, acl, acm, result) {
		for (var hB = 1 << ack, aC = 0; aC < hB; aC++)
			if (this.acn(aC, acl, acm) === result) return aC;
		return 0
	}, this.acn = function(aco, acl, acm) {
		for (var a1m = acl + aco, a1v = acm + aco, gA = a1m + a1v & 2147483647, g1 = 1; g1 <= 16; g1++) gA = (gA = (gA ^ gA >> g1) >>> 1 + (3 & a1m)) * (7 + (1023 & (a1m | a1v))) & 1073741823, a1v >>= 1 + (1 & (a1m >>= 1 + (1 & (gA += 65535 &
			a1v))));
		return gA &= 1073741823
	}
}

function cu() {
	var acp, acq, j0, acr;
	this.dt = function() {
		var aC, fp, fr, aWV, acs, j, k, p4, ik, a11, gA, hG, fy, g1, acv;
		if (function() {
				if (j0 = !0, acr = "rgb(" + bV.a0z[0] + "," + bV.a0z[1] + "," + bV.a0z[2] + ")", bV.aRN(bV.fO)) return 1;
				return j0 = !1, 0
			}()) acq = null;
		else {
			for (acp = bO.g9(96, 4), acs = 1 === bV.fO ? (aWV = 0, 160) : (aWV = 128, 32), acr = "rgb(" + aWV + "," + aWV + "," + aWV + ")", acq = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (acq[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.ft : acp, k = aC % 2 == 0 ? acp : bV.fu + 2 * acp, acq[aC].width = j, acq[aC].height = k, a11 = (ik = (p4 = acq[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fr = acp - 1; 0 <= fr; fr--)
						for (gA = acs + Math.floor((fr + 1) * (aWV - acs) / (acp + 1)), fp = j - 1; 0 <= fp; fp--) a11[hG = 4 * ((0 === aC ? acp - fr - 1 : fr) * j + fp)] = gA, a11[hG + 1] = gA, a11[hG + 2] = gA, a11[hG + 3] = 255;
				else {
					for (fp = acp - 1; 0 <= fp; fp--)
						for (gA = acs + Math.floor((fp + 1) * (aWV - acs) / (acp + 1)), fr = k - 1 - acp; acp <= fr; fr--) a11[hG = 4 * (fr * j + (3 === aC ? acp - fp - 1 : fp))] = gA, a11[hG + 1] = gA, a11[hG + 2] = gA, a11[hG + 3] = 255;
					for (g1 = 1; 0 <= g1; g1--)
						for (fp = acp - 1; 0 <= fp; fp--)
							for (fr = acp - 1; 0 <= fr; fr--) fy = (Math.pow(fp * fp + fr * fr, .5) + 1) / (acp + 1), gA = acs + Math.floor((1 < fy ? 1 : fy) * (aWV - acs)), a11[hG = 4 * ((0 === g1 ? acp - fr - 1 : fr + g1 * (k - acp)) * j + (
								1 === aC ? fp : acp - fp - 1))] = gA, a11[hG + 1] = gA, a11[hG + 2] = gA, a11[hG + 3] = 255
				}
				p4.putImageData(ik, 0, 0)
			}
			acv = acs, bV.a0u.fillStyle = "rgb(" + acv + "," + acv + "," + acv + ")", bV.a0u.fillRect(0, 0, bV.ft, 1), bV.a0u.fillRect(0, bV.fu - 1, bV.ft, 1), bV.a0u.fillRect(0, 0, 1, bV.fu), bV.a0u.fillRect(bV.ft - 1, 0, 1, bV.fu)
		}
	}, this.a2V = function() {
		var g1 = j0 ? 0 : -acp;
		aT6(g1, g1, bV.ft - 2 * g1, bV.fu - 2 * g1, bd.acw, bd.acx, bd.acy, bd.acz) || (z2.fillStyle = acr, z2.fillRect(0, 0, i.j, i.k))
	}, this.z1 = function() {
		j0 || (aT5(0, -acp, bV.ft, acp, bd.acw, bd.acx, bd.acy, bd.acz) && z2.drawImage(acq[0], bd.ad0, bd.ad1 - acp), aT5(bV.ft, -acp, acp, bV.fu + 2 * acp, bd.acw, bd.acx, bd.acy, bd.acz) && z2.drawImage(acq[1], bd.ad0 + bV.ft, bd.ad1 - acp),
			aT5(0, bV.fu, bV.ft, acp, bd.acw, bd.acx, bd.acy, bd.acz) && z2.drawImage(acq[2], bd.ad0, bd.ad1 + bV.fu), aT5(-acp, -acp, acp, bV.fu + 2 * acp, bd.acw, bd.acx, bd.acy, bd.acz) && z2.drawImage(acq[3], bd.ad0 - acp, bd.ad1 - acp))
	}
}

function dG() {
	this.aNX = new ad2, this.a2Y = new ad3, this.z = new ad4, this.jW = new ad5, this.acv = new ad6, this.mz = new ad7, this.ks = new ad8, this.lr = new ad9, this.adA = new adB, this.adC = new adD, this.nA = new adE, this.iJ = new adF, this.mQ =
		new adG, this.lt = new adH, this.iM = new adI, this.n3 = new adJ, this.sv = new adK, this.dt = function() {
			this.mQ.dt(), this.a2Y.dt(), this.z.dt(), this.jW.dt(), this.acv.dt(), this.adC.dt(), this.n3.dt()
		}, this.z1 = function() {
			this.adC.z1(), this.a2Y.z1()
		}
}

function ad8() {
	this.en = function(player) {
		return !!bQ.nA.nB(player) && !(bQ.z.l8[player] >= Math.max(3 * ap.performance.mI, aF.lI[aF.iS[player]]) || !bD.h4.nC(player, aF.lG[aF.iS[player]], 32, 0)) && (aX.aG0() ? function(player) {
			var adN = bQ.lt.aG3(),
				fi = adN.length;
			if (0 === fi) return !1;
			adN = adN[az.kL(fi)], fi = bQ.z.mx[adN];
			if (bQ.n3.n4(player, fi)) return !1;
			return !! function(player, n6) {
				var n6 = bP.jU(bQ.z.n9[n6]),
					hy = bP.fq(n6),
					n6 = bP.fs(n6),
					o7 = ah.jc[player],
					o8 = ah.je[player],
					oK = ah.jd[player],
					player = ah.jf[player],
					oK = Math.max(hy - oK, o7 - hy),
					o7 = Math.max(n6 - player, o8 - n6);
				return oK < 100 && o7 < 100
			}(player, adN) && !!bQ.iM.su(player, fi, 1) && (bD.h4.nE(player), bQ.z.nF(player), !0)
		}(player) : !!(ap.jv.en(player) || ap.jk.en(player) || ap.jm.en(player)) && (function(player) {
			bR.gK[1] = 4, bD.h4.nE(player), bQ.z.nF(player)
		}(player), !0))
	}
}

function adJ() {
	var adQ = 0,
		adR = null;
	this.dt = function() {
		null === adR && (adR = new Uint16Array(2 * bQ.z.lI)), adQ = 0
	}, this.er = function(adS, n3) {
		var adT = adR;
		adT[adQ++] = adS, adT[adQ++] = n3
	}, this.n4 = function(player, n2) {
		for (var adT = adR, fi = adQ, aC = 0; aC < fi; aC += 2)
			if (adT[aC] === n2 && bQ.lt.adU(adT[aC + 1]) && player === bQ.z.my[bR.gK[2]] >> 3) return !0;
		return !1
	}, this.adV = function(adW) {
		var mz = bQ.z.mv[adW];
		if (!(mz < 64)) {
			for (var n2 = bQ.z.mx[adW], adT = adR, fi = adQ, aC = fi - 2; 0 <= aC; aC -= 2)
				if (adT[aC] === n2) {
					{
						adb = void 0;
						var adb = adT[aC + 1];
						bQ.lt.adU(adb) && bQ.n3.adj(bR.gK[2])
					}
					adT[aC] = adT[fi - 2], adT[aC + 1] = adT[fi - 1], fi -= 2
				} adQ = fi
		}
	}, this.adY = function(adZ, ada) {
		for (var adb = bQ.z.mx[adZ], n2 = -1, adT = adR, fi = adQ, aC = 1; aC < fi; aC += 2)
			if (adT[aC] === adb) {
				n2 = adT[aC - 1];
				break
			} if (-1 === n2) return !1;
		if (!bQ.lt.adU(n2)) return !1;
		var adW = bR.gK[2],
			mP = bQ.z.mw[adW];
		if (ada === mP[mP.length - 1]) bQ.z.mw[adZ] = bQ.mQ.adc(bQ.z.mw[adZ], bQ.mQ.mY(mP));
		else {
			var add = bQ.lt.ade(mP, ada);
			if (-1 === add) return !1;
			var adf = bQ.z.n8[adW];
			add === adf ? (adW = bP.jU(bQ.z.n9[adW]), bQ.z.mw[adZ] = bQ.mQ.adh(bQ.z.mw[adZ], mP, add, ada, bP.jC(mP[add], ada) > bP.jC(mP[add], adW))) : bQ.z.mw[adZ] = bQ.mQ.adh(bQ.z.mw[adZ], mP, add, ada, adf < add)
		}
		return !0
	}, this.adj = function(adk) {
		var mP, lz = bQ.z,
			mz = lz.mv[adk];
		return mz % 64 != 5 && (mP = lz.mw[adk], lz.adl[adk] = 65535 - lz.adl[adk], lz.n8[adk] = mP.length - lz.n8[adk] - 2, lz.mw[adk] = bQ.mQ.mY(mP), lz.mv[adk] = mz - mz % 64 + 5, !0)
	}
}

function adE() {
	this.nB = function(player) {
		return !!aE.data.passableWater && bQ.z.mu !== bQ.z.lI && bQ.z.l8[player] !== bQ.z.adm && 0 !== ah.hP[player].length
	}, this.sq = function(abD) {
		var mz = bR.gK[1];
		return !(4 <= mz || !bQ.lt.adn(bP.fY(abD))) && ad.fd(bP.fY(bP.jY(abD, mz)))
	}
}

function ad2() {
	this.aNY = function(player) {
		for (var aCN = bQ.z.aCN, vv = player << 3, aC = vv + bQ.z.l8[player] - 1; vv <= aC; aC--) this.ado(aCN[aC])
	}, this.ado = function(adp) {
		var z = bQ.z,
			adq = z.mu - 1,
			adr = z.my[adp],
			ads = z.adt[adp],
			adu = z.n9[adp];
		z.mu = adq, z.my[adp] = z.my[adq], z.n9[adp] = z.n9[adq], z.adl[adp] = z.adl[adq], z.aB9[adp] = z.aB9[adq], z.adt[adp] = z.adt[adq], z.mx[adp] = z.mx[adq], z.mv[adp] = z.mv[adq], z.adv[adp] = z.adv[adq], z.mw[adp] = z.mw[adq], z.n8[adp] =
			z.n8[adq], z.aCN[z.my[adp]] = adp,
			function(abC) {
				var player = abC >> 3,
					z = bQ.z,
					fi = z.l8[player] - 1,
					ady = (player << 3) + fi;
				z.l8[player] = fi, ady !== abC && (z.aCN[abC] = z.aCN[ady], z.my[z.aCN[abC]] = abC)
			}(adr), bQ.jW.jW[bP.jV(z.n9[adp])][z.adt[adp]] = adp, adq = bP.jV(adu), adr = ads, adq = bQ.jW.jW[adq], z = adq.pop(), adr !== adq.length && (adq[adr] = z, bQ.z.adt[z] = adr)
	}
}

function ad3() {
	var ae0, ae1 = 8,
		ae2 = null;

	function ae7(a11, fU, eR) {
		fU *= 4;
		a11[fU] = 255, a11[1 + fU] = 255, a11[2 + fU] = eR, a11[3 + fU] = 255
	}

	function ae9(io, acr) {
		var fp, fr, j6, fU, aeA, aeB, ih = ae1,
			ik = bD.t6.getImageData(io, ih, ih),
			a11 = ik.data,
			lz = (ih >> 1) - .5,
			aeD = bD.tg.a6o(acr, .5);
		for (bD.tg.a6q(acr, aeD, 300) || bD.tg.a6s(acr, 100), fr = 0; fr < ih; fr++)
			for (fp = 0; fp < ih; fp++) aeB = (ih - 1.5) * (ih - 1.5) / 4, a11[fU = 4 * (fr * ih + fp)] = (aeA = (j6 = (j6 = fp - lz) * j6 + (j6 = fr - lz) * j6) <= (ih - 4.5) * (ih - 4.5) / 4 ? aeD : acr)[0], a11[1 + fU] = aeA[1], a11[2 + fU] = aeA[
				2], a11[3 + fU] = aeB < j6 ? 0 : 255;
		io.putImageData(ik, 0, 0)
	}
	this.dt = function() {
		var eR, ih, a7G, io, ik, a11;
		(ae0 = ae0 || new Array(aE.ff)).fill(null), eR = 255, ih = ae1 + 4, a7G = bD.t6.a0q(ih, ih), io = bD.t6.getContext(a7G, !0), ik = bD.t6.getImageData(io, ih, ih), ae7(a11 = ik.data, ih + 1, eR), ae7(a11, ih + 2, eR), ae7(a11, 2 * ih + 1,
				eR), ae7(a11, 2 * ih - 3, eR), ae7(a11, 2 * ih - 2, eR), ae7(a11, 3 * ih - 2, eR), ae7(a11, ih * (ih - 3) + 1, eR), ae7(a11, ih * (ih - 2) + 1, eR), ae7(a11, ih * (ih - 2) + 2, eR), ae7(a11, ih * (ih - 2) - 2, eR), ae7(a11, ih * (
				ih - 1) - 3, eR), ae7(a11, ih * (ih - 1) - 2, eR), io.putImageData(ik, 0, 0), ae2 = a7G,
			function() {
				if (aE.ie)
					for (var a7G = new Array(bj.lR.length), fi = aE.ff, ae5 = ae0, aFL = bj.aFL, aC = 0; aC < fi; aC++) {
						var a9q = aFL[aC];
						a7G[a9q] || (a7G[a9q] = function(a9q) {
							var a7G = bD.t6.a0q(ae1, ae1),
								io = bD.t6.getContext(a7G, !0),
								h = bR.gH;
							return h.set(bj.aWW[a9q]), ae9(io, h), a7G
						}(a9q)), ae5[aC] = a7G[a9q]
					}
			}()
	}, this.z1 = function() {
		var aC, player, aeE, aGl, iS, j5, aeG, aeI, aeJ, n9 = bQ.z.n9,
			my = bQ.z.my,
			aB9 = bQ.z.aB9,
			adv = bQ.z.adv,
			aeK = ae0,
			aeL = aE.fS,
			fi = bQ.z.mu,
			aeM = i.j,
			aeN = i.k,
			aeO = bV.ft << 4,
			fX = ix,
			fM = fX / ae1,
			o7 = jN / fX,
			o8 = jO / fX,
			j6 = (aeM + jN) / fX - o7,
			j9 = (aeN + jO) / fX - o8,
			io = z2;
		for (io.imageSmoothingEnabled = fX < 9, bD.t6.textAlign(io, 1), bD.t6.textBaseline(io, 1), aC = 0; aC < fi; aC++) player = my[aC] >> 3, iS = aB9[aC], aeE = .9 + .1 * Math.log10(iS), aGl = (j5 = n9[aC]) % aeO / 16 - aeE, j5 = aeN * (Math
			.floor(j5 / aeO) / 16 - aeE - o8) / j9, aeG = -2 * (aeJ = fX * aeE) * (1 + (aeI = +(player === aeL)) / 8), aeI = aeI * aeJ / 4, (aeJ = aeM * (aGl - o7) / j6) < aeG || j5 < aeG || aeM + aeI < aeJ || aeN + aeI < j5 || (aGl = 2 *
			aeE * fM, aeG = aeE * fX, null === (aeI = aeK[player]) && (aeK[player] = aeI = function(player) {
				var a7G = bD.t6.a0q(ae1, ae1);
				return ae9(bD.t6.getContext(a7G, !0), ad.aBy(player)), a7G
			}(player)), player === aeL && (io.setTransform(aGl, 0, 0, aGl, aeJ - 2 * aGl, j5 - 2 * aGl), io.drawImage(ae2, 0, 0)), io.setTransform(aGl, 0, 0, aGl, aeJ, j5), io.drawImage(aeI, 0, 0), (aeE = Math.floor(function(iS) {
				if (iS < 1e3) return .42;
				if (iS < 1e4) return .34;
				if (iS < 1e6) return .26;
				if (iS < 1e8) return .19;
				return .15
			}(iS) * aeG)) < 6) || (io.setTransform(1, 0, 0, 1, 0, 0), io.fillStyle = adv[aC] ? bE.qx : bE.qN, io.font = bD.t6.t9(1, aeE), io.fillText(bD.pa.a3i(iS), aeJ + aeG, j5 + aeG + .1 * aeE));
		io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function adD() {
	var aeR;
	this.dt = function() {
		if (!aeR) {
			aeR = new Array(bj.aeT.length);
			for (var aC = 0; aC < aeR.length; aC++) aeR[aC] = bS.z.aeU(20, bj.aeT[aC])
		}
	}, this.z1 = function() {
		var oR = ix;
		if (!(5 <= oR)) {
			var aeM = i.j,
				aeN = i.k,
				o7 = jN / oR,
				o8 = jO / oR,
				oK = (aeM + jN) / oR,
				oL = (aeN + jO) / oR,
				hH = -20 * oR,
				aeV = .5 * hH,
				aeO = bV.ft << 4,
				fi = bQ.z.mu,
				n9 = bQ.z.n9,
				my = bQ.z.my,
				aFL = bj.aFL,
				a7G = aeR,
				io = z2;
			3 < oR && (io.globalAlpha = .5 * (5 - oR));
			for (var aC = 0; aC < fi; aC++) {
				var j5 = n9[aC],
					fp = aeM * (j5 % aeO / 16 - o7) / (oK - o7) + aeV,
					j5 = aeN * (Math.floor(j5 / aeO) / 16 - o8) / (oL - o8) + aeV;
				aeM < fp || aeN < j5 || fp < hH || j5 < hH || (io.setTransform(oR, 0, 0, oR, fp, j5), fp = a7G[aFL[my[aC] >> 3]], io.drawImage(fp, 0, 0))
			}
			io.globalAlpha = 1, io.setTransform(oR, 0, 0, oR, 0, 0)
		}
	}
}

function adH() {
	this.aeY = function(player, id) {
		for (var aeZ = ah.hP[player], fi = aeZ.length, aC = 0; aC < fi; aC++)
			if (bP.iy(aeZ[aC], id)) return !0;
		return !1
	}, this.aea = function(player, fU) {
		for (var jE, aeb, fM, aeZ = ah.hP[player], fi = aeZ.length, j = bV.ft, aed = bP.fq(fU), aee = bP.fs(fU), fo = -1, min = bV.ft * bV.ft + bV.fu * bV.fu, id = ad.fQ(bP.fY(fU)), aC = 0; aC < fi; aC++)(aeb = (aeb = aed - (jE = (fM = aeZ[
			aC]) >> 2) % j) * aeb + (aeb = aee - ~~((.5 + jE) / j)) * aeb) < min && bP.iy(fM, id) && (min = aeb, fo = jE);
		return fo
	}, this.lu = function(jD, jE) {
		for (var id = ad.fQ(bP.fY(jE)), iz = bP.ir, fM = bP.fY(jD), aef = -1, aC = 0; aC < 4; aC++) {
			var fX = fM + iz[aC];
			ad.j0(fX) && ad.fQ(fX) === id && (-1 === aef || bP.jF(bP.fW(fX), jE) < bP.jF(aef, jE)) && (aef = bP.fW(fX))
		}
		return aef
	}, this.mT = function(player, fU) {
		for (var iz = bP.ir, fM = bP.fY(fU), aC = 0; aC < 4; aC++) {
			var fX = fM + iz[aC];
			if (ad.hI(fX) && ad.a2T(player, fX)) return !0
		}
		return !1
	}, this.mU = function(player, fU) {
		for (var iz = bP.ir, fM = bP.fY(fU), aC = 0; aC < 4; aC++) {
			var fX = fM + iz[aC];
			if (ad.fZ(fX)) return !0;
			if (ad.hI(fX)) {
				fX = ad.fa(fX);
				if (player !== fX && bw.fb(player, fX)) return !0
			}
		}
		return !1
	}, this.n0 = function(fU) {
		for (var iz = bP.ir, fM = bP.fY(fU), aC = 0; aC < 4; aC++) {
			var fX = fM + iz[aC];
			if (ad.hI(fX)) {
				fX = ad.fa(fX);
				if (bD.h4.kR(fX)) return fX
			}
		}
		return -1
	}, this.adn = function(fM) {
		if (ad.j0(fM))
			for (var iz = bP.ir, aC = 0; aC < 4; aC++)
				if (ad.fd(fM + iz[aC])) return !0;
		return !1
	}, this.o6 = function(player, id) {
		for (var vv = player << 3, vw = vv + bQ.z.l8[player], mx = bQ.z.mx, aCN = bQ.z.aCN, aC = vv; aC < vw; aC++) {
			var aCO = aCN[aC];
			if (mx[aCO] === id) return aCO
		}
		return -1
	}, this.oB = function(player) {
		return 0 === bQ.z.l8[player] ? -1 : bQ.z.aCN[player << 3]
	}, this.aA8 = function(mJ, mK) {
		var fi = bQ.z.mu;
		if (fi < 1) return -1;
		for (var n9 = bQ.z.n9, aeg = 80, aW0 = -1, aC = 0; aC < fi; aC++) {
			var fy = bP.j2(mJ, mK, n9[aC]);
			fy < aeg && (aeg = fy, aW0 = aC)
		}
		return function(aC, mJ, mK) {
			if (aC < 0) return;
			var aen = bQ.z.n9[aC],
				aeo = bP.j8(aen),
				aen = bP.jB(aen),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aB9[aC]));
			return aC = Math.max(aC, bP.jP(bD.t6.w0(.02, 1.7))), bO.aTD(bP.j7(mJ), bP.jA(mK), aeo, aen, aC)
		}(aW0, mJ, mK) ? aW0 : -1
	}, this.adU = function(o4) {
		for (var fi = bQ.z.mu, mx = bQ.z.mx, aC = 0; aC < fi; aC++)
			if (mx[aC] === o4) return bR.gK[2] = aC, !0;
		return !1
	}, this.aNU = function(player) {
		for (var vv = player << 3, vw = vv + bQ.z.l8[player], aCN = bQ.z.aCN, aB9 = bQ.z.aB9, iS = 0, aC = vv; aC < vw; aC++) iS += aB9[aCN[aC]];
		return iS
	}, this.aei = function(player, adk) {
		adk = bQ.z.mw[adk];
		return this.mT(player, adk[adk.length - 1])
	}, this.aej = function(jD, jE, fy, aek) {
		var jH = bP.fq(jD),
			jD = bP.fs(jD),
			jJ = bP.fq(jE),
			jE = bP.fs(jE),
			jJ = (fy = Math.max(fy, 1), jJ - jH),
			jE = jE - jD,
			j6 = bO.g9(Math.abs(jJ) * aek, fy),
			aek = bO.g9(Math.abs(jE) * aek, fy);
		return bP.g5(jH + Math.sign(jJ) * j6, jD + Math.sign(jE) * aek)
	}, this.ade = function(mP, fU) {
		for (var fi = mP.length - 1, fp = bP.fq(fU), fr = bP.fs(fU), aC = 0; aC < fi; aC++) {
			var jD = mP[aC],
				jE = mP[aC + 1],
				o7 = bP.fq(jD),
				jD = bP.fs(jD),
				oK = bP.fq(jE),
				jE = bP.fs(jE);
			if (!(fp !== o7 && fp !== oK && Math.sign(fp - o7) === Math.sign(fp - oK) || fr !== jD && fr !== jE && Math.sign(fr - jD) === Math.sign(fr - jE))) {
				if (o7 === oK || jD === jE) return aC;
				if (Math.abs(fp - o7) === Math.abs(fr - jD) && Math.abs(fp - oK) === Math.abs(fr - jE)) return aC
			}
		}
		return -1
	}, this.aG3 = function() {
		for (var aeq = mf[0], my = bQ.z.my, mu = bQ.z.mu, h = [], aC = 0; aC < mu; aC++) bD.h4.li(aeq, my[aC] >> 3) && h.push(aC);
		return h
	}, this.mR = function(player, mP) {
		for (var vv = player << 3, vw = vv + bQ.z.l8[player], aCN = bQ.z.aCN, mw = bQ.z.mw, iB = mP[0], lh = mP[mP.length - 1], aC = vv; aC < vw; aC++) {
			var hG = mw[aCN[aC]];
			if (hG[0] === iB && hG[hG.length - 1] === lh) return !0
		}
		return !1
	}
}

function adI() {
	function aet(player, adk) {
		adk = bP.jU(bQ.z.n9[adk]), adk = ad.fQ(bP.fY(adk));
		return !!bQ.lt.aeY(player, adk)
	}

	function aer(player) {
		return bQ.nA.nB(player) && !bQ.mQ.mW()
	}
	this.iN = function(player, fU) {
		return !!aer(player) && -1 !== (fU = function(player, fU) {
			for (var fi = bQ.z.mu, n9 = bQ.z.n9, my = bQ.z.my, aeg = bP.it(), aW0 = -1, aC = 0; aC < fi; aC++) {
				var fy = bP.jC(fU, bP.jU(n9[aC]));
				fy < aeg && bD.h4.li(player, my[aC] >> 3) && (aeg = fy, aW0 = aC)
			}
			return aW0
		}(player, fU)) && !!aet(player, fU) && (bR.gK[3] = bQ.z.mx[fU], !0)
	}, this.s1 = function(player, o4) {
		return !!aer(player) && !!bQ.lt.adU(o4) && !!aet(player, bR.gK[2])
	}, this.su = function(player, o4, aeu) {
		return !! function(player, o4, aeu) {
			if (aer(player) && bQ.lt.adU(o4)) {
				o4 = bR.gK[2];
				if (bD.h4.li(player, bQ.z.my[o4] >> 3)) {
					if (function(player, adk) {
							return bQ.lt.aei(player, adk) && (bR.h[0] = bQ.mQ.mY(bQ.z.mw[adk]), bR.gK[1] = 6, !0)
						}(player, o4)) return 1;
					var adP = bP.jU(bQ.z.n9[o4]),
						aey = bQ.lt.aea(player, adP);
					if (-1 !== aey) {
						aey = bP.jC(aey, adP);
						if (!(aeu && 120 < aey)) {
							aeu = function(adk, aez, adP) {
								var mP = bQ.z.mw[adk],
									adk = bQ.z.n8[adk],
									af1 = bP.jC(adP, mP[adk + 1]);
								if (aez <= af1) return bQ.lt.aej(adP, mP[adk + 1], af1, aez);
								for (var fy = aez - af1, fi = mP.length - 1, aC = adk + 1; aC < fi; aC++) {
									var af2 = bP.jC(mP[aC], mP[aC + 1]);
									if (fy <= af2) return bQ.lt.aej(mP[aC], mP[aC + 1], af2, fy);
									fy -= af2
								}
								return mP[fi]
							}(o4, aey, adP);
							if (bQ.lr.sr(player, aeu, 1)) return bR.gK[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o4, aeu) && (player = bR.gK[2], bQ.z.mv[player] = 64 + bQ.z.mv[player] % 64, bQ.n3.er(o4, bQ.z.nD), !0)
	}
}

function ad7() {
	function af7(player, iS, af5, adP) {
		var kD;
		if (ad.fZ(af5)) kD = aE.ff;
		else {
			if ((kD = ad.fa(af5)) === player) return void bg.h8(player, iS - bD.h4.h7(player, iS), 12);
			if (!bw.fb(player, kD)) return void bB.l6.sG(player, kD, iS)
		}
		ae.kP(player, kD) || ae.ki(player) ? (ah.hA[player].push(adP << 2), ae.er(player, iS, kD), aG.kB(player, !0)) : bg.h8(player, iS, 12)
	}
	this.en = function() {
		for (var mv = bQ.z.mv, n9 = bQ.z.n9, adl = bQ.z.adl, aC = bQ.z.mu - 1; 0 <= aC; aC--) 65535 === adl[aC] && function(aC, adP, ia) {
			if (6 === ia) {
				if (bQ.n3.adY(aC, adP)) return bQ.z.n8[aC]++, bQ.z.adl[aC] = 0, 0
			} else {
				var player = bQ.z.my[aC] >> 3,
					aC = bQ.z.aB9[aC];
				bg.af6(player), ia < 4 ? af7(player, aC, adP + bP.iq[ia] << 2, adP) : 4 === ia ? function(player, iS, adP) {
					var aC, fm, iz = bP.ir,
						fX = bP.fY(adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.fZ(fm)) return af7(player, iS, fm, adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.hI(fm) && !ad.a2T(player, fm)) return af7(player, iS, fm, adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.hI(fm)) return af7(player, iS, fm, adP)
				}(player, aC, adP) : 5 === ia && function(player, iS, adP) {
					var aC, fm, iz = bP.ir,
						fX = bP.fY(adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.hI(fm) && ad.a2T(player, fm)) return af7(player, iS, fm, adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.hI(fm)) return af7(player, iS, fm, adP);
					for (aC = 0; aC < 4; aC++)
						if (fm = fX + iz[aC], ad.fZ(fm)) return af7(player, iS, fm, adP)
				}(player, aC, adP)
			}
			return 1
		}(aC, bP.jU(n9[aC]), mv[aC] % 64) && (bQ.n3.adV(aC), bQ.aNX.ado(aC))
	}, this.af4 = function(player, fU, ia, o4, iS) {
		if (!(5 <= ia)) {
			var aeL = aE.fS;
			if (bD.h4.hv(aeL) && bw.fb(player, aeL) && player !== aeL && 0 !== ah.hP[aeL].length && bD.h4.a7v(player, 5)) {
				for (var af5, fw = !1, aC = 0; aC < 4; aC++)
					if (af5 = fU + bP.iq[aC] << 2, ad.fd(af5) && !ad.fZ(af5) && ad.fa(af5) === aeL) {
						fw = !0;
						break
					} fw && (aO.aBI(719, 0), ia = iS < 25e3 ? L(545) + " (" + bD.pa.a3i(iS) + ") ⛵" : L(546) + " (" + bD.pa.a3i(iS) + ") 🚢", aO.a2t(180, ia, 719, player, bE.qw, bE.qK, -1, !0, void 0, {
					g2: 1,
					o4: o4
				}))
			}
		}
	}
}

function ad4() {
	this.lI = 512, this.adm = 8, this.mu = 0, this.nD = 0, this.my = new Uint16Array(this.lI), this.n9 = new Uint32Array(this.lI), this.adl = new Uint16Array(this.lI), this.aB9 = new Uint32Array(this.lI), this.adt = new Uint16Array(this.lI), this
		.mx = new Uint16Array(this.lI), this.mv = new Uint8Array(this.lI), this.adv = new Uint8Array(this.lI), this.mw = new Array(this.lI), this.n8 = new Uint16Array(this.lI), this.l8 = new Uint8Array(aE.ff), this.aCN = new Uint16Array(this.adm * aE
			.ff), this.dt = function() {
			this.mu = 0, this.nD = 0, this.l8.fill(0), this.mw.fill(null)
		}, this.nF = function(player) {
			var iS = bR.gF[0],
				mz = bR.gK[1],
				mP = bR.h[0],
				afA = this.nD,
				fi = this.mu,
				afB = bP.jT(mP[0]),
				afC = this.l8[player],
				afD = (player << 3) + afC;
			this.my[fi] = afD, this.n9[fi] = afB, this.adl[fi] = 0, iS < 60 && (bD.h4.h5(player, 60 - iS), iS = 60), this.aB9[fi] = iS, this.adt[fi] = bQ.jW.nF(fi, bP.jV(afB)), this.mx[fi] = afA, this.mv[fi] = mz, this.adv[fi] = 0, this.mw[fi] = mP,
				this.n8[fi] = 0, this.nD = (afA + 1) % 65536, this.l8[player] = afC + 1, this.aCN[afD] = fi, this.mu++, bQ.mz.af4(player, mP[mP.length - 1], mz, afA, iS)
		}, this.en = function() {
			bQ.mz.en();
			for (var hG = aE.fS, ej = bQ.lt.aNU(hG), up = (! function(up) {
					for (var afI, n9 = up.n9, aB9 = up.aB9, adv = up.adv, adl = up.adl, adt = up.adt, mw = up.mw, n8 = up.n8, up = up.mu, aeO = bV.ft << 4, aC = up - 1; 0 <= aC; aC--) {
						var afJ = n9[aC],
							mP = mw[aC],
							afK = n8[aC],
							afB = bP.jT(mP[afK]),
							afL = bP.jT(mP[afK + 1]),
							afM = afB % aeO,
							afB = ~~((afB + .5) / aeO),
							afO = afL % aeO,
							afP = ~~((afL + .5) / aeO),
							afQ = afO - afM,
							afR = afP - afB,
							fl = Math.max(~~Math.sqrt(afQ * afQ + afR * afR + .5), 1),
							aOR = aB9[aC],
							aOR = (aOR = adv[aC] ? 4e4 : 25e4 + Math.min(20 * aOR, 3e5) + Math.min(aOR >> 3, 5e4), adl[aC] + Math.max(~~((aOR + .5) / fl), 1));
						65535 <= aOR ? afK + 2 < mP.length ? (n8[aC] = afK + 1, n9[aC] = afI = function(aC, afS, afM, afN, afK, fl, mP, aeO) {
							afS = Math.min(afS - 65535, 65535);
							var mP = bP.jT(mP[afK + 2]),
								afK = mP % aeO - afM,
								mP = ~~((mP + .5) / aeO) - afN,
								afV = Math.max(~~Math.sqrt(afK * afK + mP * mP + .5), 1);
							return afS = Math.min(Math.floor((fl * afS + .5) / afV), 65534), bQ.z.adl[aC] = afS, afM + bO.g9(afS * afK, 65535) + aeO * (afN + bO.g9(afS * mP, 65535))
						}(aC, aOR, afO, afP, afK, fl, mP, aeO)) : (n9[aC] = afI = afL, adl[aC] = 65535) : (adl[aC] = aOR, n9[aC] = afI = afM + bO.g9(aOR * afQ, 65535) + aeO * (afB + bO.g9(aOR * afR, 65535))), adt[aC] = bQ.jW.afU(adt[aC],
							afJ, afI)
					}
				}(this), ! function(up) {
					if (bi.l1() % 2 == 1) {
						var aC, ib, lz, g2, es, afW, a3M, afX, iB, o7, o8, afB, afY, aDp, afa, lh, fi = up.mu,
							n9 = up.n9,
							my = up.my,
							aB9 = up.aB9,
							adv = up.adv,
							jW = bQ.jW.jW,
							afc = jW.length,
							afd = bQ.jW.afd,
							aeO = bV.ft << 4,
							afe = aE.ie,
							ab1 = bj.fg,
							hH = (fi - 1) * (bO.g9(bi.l1(), 2) % 2);
						for (aC = 0; aC < fi; aC++)
							for (ib = Math.abs(aC - hH), afB = n9[ib], lz = bP.jV(afB), iB = my[ib] >> 3, o7 = afB % aeO, o8 = ~~((afB + .5) / aeO), afa = aB9[ib], g2 = 0; g2 < 9; g2++)
								if (!((afW = lz + afd[g2]) < 0 || afc <= afW))
									for (afX = jW[afW], a3M = afX.length, es = 0; es < a3M; es++) afY = afX[es], lh = my[afY] >> 3, iB == lh || afe && ab1[iB] === ab1[lh] && ab1[iB] || (lh = n9[afY], (aDp = o7 - lh % aeO) * aDp + (aDp = o8 -
										~~((lh + .5) / aeO)) * aDp < 14400 && (lh = aB9[afY], aDp = lh <= afa ? Math.max(1, bO.g9(lh + bO.g9(afa - lh, 10), 10)) : Math.max(1, bO.g9(afa, 10)), aB9[afY] = Math.max(lh - aDp, 0), adv[
										afY] = 4))
					}
				}(this), ! function(up) {
					if (bi.l1() % 5 == 3)
						for (var aB9 = up.aB9, fi = up.mu, aC = 0; aC < fi; aC++) {
							var iS = aB9[aC];
							aB9[aC] = Math.max(iS - Math.max(1, iS >> 7), 0)
						}
				}(this), this), aB9 = up.aB9, adv = up.adv, aC = up.mu - 1; 0 <= aC; aC--) adv[aC] = adv[aC] >> 1, 0 === aB9[aC] && (bQ.n3.adV(aC), bQ.aNX.ado(aC));
			bg.h8(hG, ej - bQ.lt.aNU(hG), 15)
		}
}

function ad5() {
	this.aff = 32, this.fp = 0, this.fr = 0, this.jX = 0, this.afg = 0, this.afh = 4, this.jW = null, this.afd = new Int16Array(9), this.dt = function() {
		this.jX = 1 + bO.g9(bV.ft - 1, this.aff), this.afg = 1 + bO.g9(bV.fu - 1, this.aff), this.jW = new Array(this.jX * this.afg), bD.tg.a6n(this.jW);
		var fp, fr, afd = this.afd,
			j = this.jX;
		for (fp = -1; fp <= 1; fp++)
			for (fr = -1; fr <= 1; fr++) afd[3 * (1 + fr) + 1 + fp] = fr * j + fp
	}, this.nF = function(afj, aC) {
		return this.jW[aC].push(afj), this.jW[aC].length - 1
	}, this.afU = function(afk, afB, afL) {
		var afl, afm, afB = bP.jV(afB),
			afL = bP.jV(afL);
		return afB === afL ? afk : (afl = this.jW[afB].pop(), this.jW[afB].length === afk ? this.nF(afl, afL) : (afm = this.jW[afB][afk], this.jW[afB][afk] = afl, bQ.z.adt[afl] = afk, this.nF(afm, afL)))
	}
}

function ad9() {
	this.ls = function(player, afn) {
		return -1 !== afn && !!bQ.lt.mU(player, afn) && this.sr(player, afn, 0)
	}, this.sr = function(player, afn, afo) {
		player = function(player, afn, afo) {
			var aey = bQ.lt.aea(player, afn);
			if (-1 === aey) return -1;
			aey = bQ.lt.lu(aey, afn);
			if (-1 === aey) return -1;
			var mN = bQ.mQ.mV(aey, afn);
			if (0 <= mN) return mN;
			if (bQ.mQ.mW()) return -1;
			if (0 <= (mN = bQ.mQ.mV(afn, aey))) return bQ.mQ.mX(bQ.mQ.mY(bQ.mQ.get(mN)));
			if (aey === afn) return bQ.mQ.mX(new Uint32Array([aey, afn]));
			if (0 <= (mN = bQ.adA.sr(aey, afn))) return mN;
			return afo ? function(afs, player) {
				var gP = bR.gP,
					buffer = (gP.fill(0), [afs]),
					is = (gP[afs] = 1, bP.is),
					aft = -1,
					fi = buffer.length;
				for (; - 1 === aft && fi;) {
					for (var h = [], aC = 0; aC < fi; aC++)
						for (var fU = buffer[aC], a8h = gP[fU], fl = 0; fl < 8; fl++) {
							var a0c, a5C, fo = fU + is[fl],
								fM = 4 * fo;
							ad.j0(fM) ? (a0c = gP[fo], a5C = a8h + 5 + ((1 & fl) << 1), 0 === a0c ? (h.push(fo), gP[fo] = a5C) : gP[fo] = Math.min(a5C, a0c)) : -1 === aft && fl % 2 == 0 && ad.a2Q(player, fM) && (aft = fU)
						}
					fi = (buffer = h).length
				}
				return -1 !== aft ? function(jD, afv) {
					var is = bP.is,
						afw = -1,
						ia = 0,
						nc = [];
					for (; afv !== jD;)(ia = function(fU, ia) {
						var gP = bR.gP,
							is = bP.is,
							a8h = gP[fU];
						if (a8h - gP[fU + is[ia]] != 5 + ((1 & ia) << 1))
							for (var g1 = 0; g1 < 8; g1++) {
								var fl = g1 + ia + 6 & 7;
								if (a8h - gP[fU + is[fl]] == 5 + ((1 & fl) << 1)) return fl
							}
						return ia
					}(afv, ia)) !== afw && (nc.push(afv), afw = ia), afv += is[ia];
					nc.push(jD);
					var mN = bQ.mQ.mV(nc[0], jD);
					if (0 <= mN) return mN;
					return bQ.mQ.mX(new Uint32Array(nc))
				}(afs, aft) : -1
			}(afn, player) : -1
		}(player, afn, afo);
		return -1 !== player && (bR.h[0] = bQ.mQ.get(player), !0)
	}
}

function adB() {
	function afy(hy, jI, jK) {
		for (var kK = Math.min(jI, jK), oP = Math.max(jI, jK), fr = kK + 1; fr < oP; fr++)
			if (!ad.j0(bP.jQ(hy, fr))) return;
		return 1
	}

	function afz(i0, jH, jJ) {
		for (var kK = Math.min(jH, jJ), oP = Math.max(jH, jJ), fp = kK + 1; fp < oP; fp++)
			if (!ad.j0(bP.jQ(fp, i0))) return;
		return 1
	}

	function ag0(jH, jI, jJ, jK, afq, afn) {
		for (var fi = Math.min(Math.abs(jJ - jH), Math.abs(jK - jI)), j6 = Math.sign(jJ - jH), j9 = Math.sign(jK - jI), aC = 0; aC < fi; aC++)
			if (!ad.j0(bP.jQ(jH += j6, jI += j9))) return null;
		return jH === jJ ? afy(jH, jI, jK) ? new Uint32Array([afq, bP.g5(jH, jI), afn]) : null : afz(jI, jH, jJ) ? new Uint32Array([afq, bP.g5(jH, jI), afn]) : null
	}
	this.sr = function(afq, afn) {
		afq = function(afq, afn) {
			var jH = bP.fq(afq),
				jI = bP.fs(afq),
				jJ = bP.fq(afn),
				jK = bP.fs(afn);
			if (jH === jJ) {
				if (afy(jH, jI, jK)) return new Uint32Array([afq, afn])
			} else {
				if (jI !== jK) return ag0(jH, jI, jJ, jK, afq, afn) || ag0(jJ, jK, jH, jI, afq, afn);
				if (afz(jI, jH, jJ)) return new Uint32Array([afq, afn])
			}
			return null
		}(afq, afn);
		return null === afq ? -1 : bQ.mQ.mX(afq)
	}
}

function adG() {
	var ag1 = [];
	this.dt = function() {
		ag1 = []
	}, this.mW = function() {
		return 65536 === ag1.length
	}, this.mV = function(afq, afn) {
		for (var mQ = ag1, fi = mQ.length, aC = 0; aC < fi; aC++) {
			var hG = mQ[aC];
			if (hG[0] === afq && hG[hG.length - 1] === afn) return aC
		}
		return -1
	}, this.mY = function(mP) {
		var ag2 = new Uint32Array(mP.length);
		return ag2.set(mP), ag2.reverse()
	}, this.adc = function(iB, lh) {
		var hB = iB.length - 1,
			ag3 = new Uint32Array(hB + lh.length);
		return ag3.set(iB, 0), ag3.set(lh, hB), ag3
	}, this.adh = function(iB, lh, a06, fU, ag4) {
		ag4 && (a06 = (lh = this.mY(lh)).length - a06 - 2);
		ag4 = lh.subarray(a06 + 1 + (fU === lh[a06 + 1])), fU = new Uint32Array(iB.length + ag4.length);
		return fU.set(iB, 0), fU.set(ag4, iB.length), fU
	}, this.mX = function(mP) {
		return ag1.push(mP), ag1.length - 1
	}, this.get = function(aC) {
		return ag1[aC]
	}, this.mS = function() {
		return ag1
	}, this.ag6 = function(afq, afn) {
		return null
	}
}

function adK() {
	this.en = function(player, o4) {
		player = bQ.lt.o6(player, o4);
		return !(player < 0 || !bQ.n3.adj(player) || (bQ.n3.adV(player), 0))
	}
}

function ad6() {
	var a31 = 32,
		a30 = new Array(2);

	function a0q(es) {
		var fp, fr, fU, j9, j6, ih = a31,
			a7G = bD.t6.a0q(ih, ih),
			io = bD.t6.getContext(a7G, !0),
			ik = bD.t6.getImageData(io, ih, ih),
			a11 = ik.data,
			lz = (ih >> 1) - .5,
			m0 = Math.sqrt(lz * lz);
		for (a11.fill(255), fr = 0; fr < ih; fr++)
			for (fp = 0; fp < ih; fp++) j6 = fp - lz, j9 = fr - lz, fU = 4 * (fr * ih + fp), j6 = 714 * (m0 - Math.sqrt(j6 * j6 + j9 * j9)) / m0, a11[2 + fU] = es, a11[3 + fU] = 255 < j6 ? 0 : j6;
		return io.putImageData(ik, 0, 0), a7G
	}
	this.ag7 = -1, this.dt = function() {
		this.ag7 = -1, a30[0] || (a30[0] = a0q(255), a30[1] = a0q(0))
	}, this.ag8 = function(io, fM, fp, fr, eQ, aC) {
		bD.h4.hv(aE.fS) && (io.setTransform(fM *= 4 / 3 * .625, 0, 0, fM, fp - (eQ *= 4 / 3), fr - eQ), io.drawImage(a30[+(bQ.z.mx[aC] === this.ag7)], 0, 0))
	}
}

function adF() {
	function abI(fp, fi, fr, ag9, aDv, g8, player) {
		if (!(fr < 1 || aDv < fr))
			for (var aC = 0; aC <= fi; aC++) {
				var fM = bP.jQ(fp, fr);
				if (bQ.lt.adn(fM) && !bD.tg.has(ag9, ad.fQ(fM)) && ad.a2I(fM, player)) return fM >> 2;
				fp += g8
			}
		return -1
	}

	function abM(fr, fi, fp, ag9, abG, g8, player) {
		if (!(fp < 1 || abG < fp)) {
			fi = Math.max(fi, 0);
			for (var aC = 0; aC <= fi; aC++) {
				var fM = bP.jQ(fp, fr);
				if (bQ.lt.adn(fM) && !bD.tg.has(ag9, ad.fQ(fM)) && ad.a2I(fM, player)) return fM >> 2;
				fr += g8
			}
		}
		return -1
	}

	function abQ(jD, jE, abD) {
		return -1 !== jE && (-1 === jD || bP.jF(jE, abD) < bP.jF(jD, abD)) ? jE : jD
	}
	this.iK = function(player, abD) {
		if (bQ.nA.nB(player))
			for (var abE = bP.it(), ag9 = [];;) {
				var aft = function(abD, abE, ag9, player) {
					for (var hy = bP.fq(abD), i0 = bP.fs(abD), abG = bV.ft - 2, aDv = bV.fu - 2, abH = -1, fl = 0; fl < abE; fl++) {
						var aDu = Math.max(hy - fl, 1),
							aRh = Math.max(i0 - fl, 1),
							a2E = Math.min(hy + fl, abG),
							a2D = Math.min(i0 + fl, aDv),
							jD = abI(hy, a2E - hy, i0 - fl, ag9, aDv, 1, player),
							jE = abI(hy - 1, hy - aDu - 1, i0 - fl, ag9, aDv, -1, player),
							a2E = abI(hy, a2E - hy, i0 + fl, ag9, aDv, 1, player),
							aDu = abI(hy - 1, hy - aDu - 1, i0 + fl, ag9, aDv, -1, player),
							abL = abM(i0, a2D - i0 - 1, hy - fl, ag9, abG, 1, player),
							abN = abM(i0 - 1, i0 - aRh - 2, hy - fl, ag9, abG, -1, player),
							a2D = abM(i0, a2D - i0 - 1, hy + fl, ag9, abG, 1, player),
							aRh = abM(i0 - 1, i0 - aRh - 2, hy + fl, ag9, abG, -1, player);
						if (abH = abQ(abH, jD, abD), abH = abQ(abH, jE, abD), abH = abQ(abH, a2E, abD), abH = abQ(abH, aDu, abD), abH = abQ(abH, abL, abD), abH = abQ(abH, abN, abD), abH = abQ(abH, a2D, abD), 0 <= (abH = abQ(abH, aRh, abD)) &&
							fl * fl >= bP.jF(abH, abD)) return abH
					}
					return -1
				}(abD, abE, ag9, player);
				if (-1 === aft) break;
				var id = ad.fQ(bP.fY(aft));
				if (bQ.lt.aeY(player, id)) return !! function(player, aft, abD) {
					for (var ia = bP.ja(aft, abD), aC = 0; aC < 4; aC++) {
						var fU = bP.jY(aft, ia);
						if (ad.aN3(bP.fY(fU), player)) return bR.gK[6] = ia, 1;
						ia = (ia + 1) % 4
					}
					return
				}(player, aft, abD) && (bR.gK[7] = aft, !0);
				ag9.push(id)
			}
		return !1
	}
}

function dw() {
	this.aYZ = [L(547), L(548), L(549), L(550), L(551), L(552), L(553), L(554), L(555), L(556), L(557), L(558), L(559), L(560), L(561), L(562)];
	var agC = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aGP = new Array(agC.length), this.dt = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lz = h.length;
		if (function() {
				for (var fi = agC.length, aC = 0; aC < fi; aC++) ba.aGP[aC] = agC[aC]
			}(), !(lz > agC.length))
			for (var aC = 0; aC < lz; aC++) h[aC].length && (this.aGP[aC] = h[aC])
	}, this.aYb = function(eR, code) {
		for (var aGP = this.aGP, agE = agC, pW = (aGP[eR] = code, ""), fi = aGP.length, agF = [], aC = 0; aC < fi; aC++) agF.push(aGP[aC] === agE[aC] ? "" : aGP[aC]);
		fi--;
		for (aC = 0; aC < fi; aC++) pW += agF[aC] + ";";
		bm.rt.pz(155, pW += agF[fi])
	}, this.aYY = function() {
		bm.rt.pz(155, ""), this.dt()
	}, this.es = function(code, eR) {
		return code === this.aGP[eR] || code === this.aGP[eR + 1]
	}
}

function dj() {
	var agG = new Array(1),
		agH = new Array(1),
		agI = 20,
		eg = 0,
		agJ = !1;

	function agL() {
		agI++, bt.play()
	}
	this.dt = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				agH[aC] = 0, agG[aC] = document.createElement("audio"), agG[aC].src = src, agG[aC].setAttribute("preload", "auto"), agG[aC].setAttribute("controls", "none"), agG[aC].style.display = "none", agG[aC].onpause = function() {
					agH[aC] = 1
				}, agG[aC].oncanplaythrough = function() {
					agH[aC] = 0 === agH[aC] ? 1 : agH[aC]
				}, document.body.appendChild(agG[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			agJ = !0
		}
	}, this.y4 = function() {
		if (agJ) {
			agJ = !1;
			for (var aC = 0; 0 <= aC; aC--) agG[aC].onpause = null, agG[aC].oncanplaythrough = null, u.removeChild(document.body, agG[aC]), agG[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (agJ) {
			var ej = performance.now();
			if (eg + 66 < ej)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === agH[aC]) return eg = ej, agH[aC] = 2, void agG[aC].play();
			0 < agI && (agI--, setTimeout(agL, 66))
		}
	}
}

function ci() {
	this.aCv = function() {
		var agO;
		return !(am.la < 3 || ah.hW[mf[0]] >= aE.ko >> 1) && (aE.ie ? 9 !== aE.lM && (agO = af.aP4(), !(2 * af.aP5(bk.ld()) >= agO)) : function() {
			if (8 === aE.lM) return !1;
			var agO = af.aP4();
			if (2 * ah.hk[mf[0]] >= agO) return !1;
			return !0
		}())
	}
}

function cI() {
	this.dt = function() {
		if (0 === aE.data.sResourcesType) {
			for (var afC = aE.l4, hk = ah.hk, aC = 0; aC < afC; aC++) hk[aC] = 512;
			var afD = aE.a1W,
				lH = aF.lH,
				iS = aF.iS;
			for (aC = afC; aC < afD; aC++) hk[aC] = lH[iS[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fi = aE.a1W, hk = ah.hk, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fi; aC++) hk[aC] = sResourcesValue
		} : function() {
			for (var fi = aE.a1W, hk = ah.hk, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fi; aC++) hk[aC] = sResourcesData[aC]
		})();
		bg.nc[8] = ah.hk[aE.fS]
	}
}

function dZ() {
	var aJk = 501,
		agW = (this.agT = new Uint32Array(aJk), this.a80 = new Uint32Array(aJk), this.aG4 = new Uint16Array(aJk), this.agU = 0, this.agV = 0, 1),
		yM = 0;

	function agZ(self) {
		self.max.fill(0)
	}

	function agb(self, aC) {
		self.max[0] = Math.max(self.agT[aC], self.max[0]), self.max[1] = Math.max(self.a80[aC], self.max[1]), self.max[2] = Math.max(self.aG4[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.agX = 0, this.nc = new Array(21), this.agY = null, this.du = function() {
		this.agY = [L(563), L(564), L(565), L(566), L(567), L(568), L(569), L(570), L(388), L(389), L(571), L(572), L(573), L(574), "", L(575), L(576), L(577), L(346), L(578), L(579)]
	}, this.dt = function() {
		this.agU = 0, this.agV = 0, agW = 1, this.agX = 0, yM = 0, agZ(this), this.nc.fill(0)
	}, this.aYj = function() {
		return 2 <= this.agU && !this.agV
	}, this.aB6 = function() {
		0 !== bi.l1() && (this.agV = 1, bh.iV) && bh.uW()
	}, this.so = function(player, jM) {
		bD.h4.a7u(player) && (this.nc[0] += jM + 1, this.nc[1]++, this.nc[12] += bR.gF[1])
	}, this.sJ = function(player, rw) {
		__fx.donationsTracker.logDonation(player, rw, bR.gF[0], aX.a9a());
		player === aE.fS && (aO.sJ(bR.gF[0], bR.gF[1], rw), this.nc[12] += bR.gF[1], this.nc[16] += bR.gF[0]), rw === aE.fS && (aO.aBM(bR.gF[0], player), this.nc[10] += bR.gF[0])
	}, this.ss = function(player) {
		bD.h4.a7u(player) && (this.nc[2]++, this.nc[12] += bR.gF[1])
	}, this.t0 = function(player) {
		bD.h4.a7u(player) && (this.nc[19]++, this.nc[12] += bR.gF[1])
	}, this.af6 = function(player) {
		bD.h4.a7u(player) && this.nc[20]++
	}, this.h8 = function(player, a8h, eR) {
		bD.h4.a7u(player) && (this.nc[eR] += a8h)
	}, this.en = function() {
		var self;
		this.agX || 0 < yM-- || ((self = this).agT[self.agU] = ah.hW[aE.fS], self.a80[self.agU] = ah.hk[aE.fS], self.aG4[self.agU] = af.aG5(aE.fS), agb(self, self.agU), self.agU++, self.agU === aJk && function(self) {
			agZ(self), agb(self, 0), self.agU = 1 + bO.g9(aJk, 2);
			for (var aC = 1; aC < self.agU; aC++) self.agT[aC] = self.agT[2 * aC], self.a80[aC] = self.a80[2 * aC], self.aG4[aC] = self.aG4[2 * aC], agb(self, aC);
			agW *= 2
		}(self), yM = agW - 1, bh.nT(), 0 === ah.ng[aE.fS] && (self.agX = bi.l1()))
	}
}

function da() {
	this.j = 0, this.k = 0, this.vi = 0, this.vj = 0, this.agd = 0, this.age = 0, this.aD9 = 0, this.wO = 0;
	var agg = this.agf = 0;
	this.agh = 0, this.agi = 0, this.agj = 0, this.aCU = 0, this.eR = 0, this.aFf = null, this.iV = !1, this.agk = -1, this.agl = !1, this.agm = [0, 0], this.du = function() {
		this.aFf = [L(580), L(135, 0, "Balance"), L(134, 0, "Interest"), L(581)]
	}, this.dt = function() {
		this.iV = !1, this.agk = -1, this.agl = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fl = a1.a2.iv() && i.j < i.k ? 1 : a1.a2.iv() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fl * this.j), this.j -= a1.a2.iv() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCU = Math.floor(this.k / 150), this.aCU = Math.max(this.aCU, 1.5), this.vi = Math.floor(1 + .02 * this
			.j), this.vj = Math.floor(1 + .04 * this.j), this.aD9 = this.vj, agg = Math.floor(.75 * this.aD9), this.wO = Math.floor(1 + .075 * this.j), this.agh = Math.floor(1 + .1125 * this.j), this.agi = Math.floor(this.j * (a1.a2.iv() ? .03 :
				.029)), this.agi = Math.max(this.agi, 4), this.agj = Math.floor(.035 * this.j), this.agj = Math.max(this.agj, 4), this.agf = this.k - 2 * this.aD9 - this.wO - this.agh, this.iV && this.agn()
	}, this.hw = function(mJ, mK) {
		var a1Z, a1Y;
		return !!this.iV && (a1Y = mJ, a1Z = mK, mJ -= bO.g9(i.j - this.j, 2), mK -= bO.g9(i.k - this.k, 2), mJ < 0 || mK < 0 || mJ >= this.j || mK >= this.k || mJ >= this.j - this.agh && mK < this.agh ? -1 !== aN.hw(a1Y, a1Z) || bF.hw(a1Y,
			a1Z) || this.uW() : mK < this.agh || (mK < this.k - this.wO ? (this.agl = !0, this.agk = (mJ - 2 * this.vi - this.agd) / this.age, 3 !== this.eR && (bi.e0 = !0)) : (a1Y = (a1Y = Math.floor(mJ / (this.j / this.aFf.length))) < 0 ?
				0 : a1Y >= this.aFf.length ? this.aFf.length - 1 : a1Y) !== this.eR && (this.eR = a1Y, this.agn(), bi.e0 = !0)), !0)
	}, this.a5x = function(mJ, mK) {
		return this.agm[0] = mJ, this.agm[1] = mK, !(!this.iV || !this.agl || (mJ -= bO.g9(i.j - this.j, 2), mK = this.agk, this.agk = (mJ - 2 * this.vi - this.agd) / this.age, (0 <= this.agk && this.agk <= 1 || 0 <= mK && mK <= 1) && (bi.e0 = !
			0), 0))
	}, this.a6M = function() {
		this.agl && (this.agl = !1)
	}, this.a6Y = function() {
		this.iV ? this.uW() : this.show()
	}, this.show = function() {
		bg.aYj() && (this.iV = !0, this.agn())
	}, this.uW = function() {
		this.iV = !1, this.agk = -1, bi.e0 = !0
	}, this.agn = function() {
		this.eR < 2 ? this.agd = aR.measureText(bD.pa.a3i(bg.max[this.eR]), bD.t6.t9(0, this.agi)) : 2 === this.eR && (this.agd = aR.measureText(bD.pa.a8a(6, 2), bD.t6.t9(0, this.agi))), this.age = this.j - 2 * this.vi - this.agd - this.vj
	}, this.nT = function() {
		this.iV && this.agn()
	}, this.z1 = function() {
		this.iV && this.aDQ()
	}, this.aDQ = function() {
		var fp = bO.g9(i.j - this.j, 2),
			fr = bO.g9(i.k - this.k, 2);
		z2.setTransform(1, 0, 0, 1, fp, fr), z2.fillStyle = bE.qK, z2.fillRect(0, this.agh, this.j, this.k - this.agh), this.ago(), this.aXN(), z2.strokeRect(0, 0, this.j, this.k), bD.t6.textAlign(z2, 2), z2.font = bD.t6.t9(0, this.agi), 0 ===
			this.eR ? this.agp(bg.agT, fp, fr) : 1 === this.eR ? this.agp(bg.a80, fp, fr) : 2 === this.eR ? this.agq(fp, fr) : 3 === this.eR && (this.agr(fp, fr), this.ags(fp, fr)), aN.aAQ(Math.floor(fp + this.j - .725 * this.agh), Math.floor(
				fr + .275 * this.agh), Math.floor(.45 * this.agh)), z2.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ago = function() {
		var aC, ej;
		for (z2.lineWidth = this.aCU, bD.t6.textBaseline(z2, 1), bD.t6.textAlign(z2, 1), z2.strokeStyle = bE.qN, z2.font = bD.t6.t9(1, this.agj), ej = this.j / this.aFf.length, z2.fillStyle = bE.qj, z2.fillRect(this.eR * ej, this.k - this.wO, ej,
				this.wO), z2.fillStyle = bE.qN, z2.fillRect(0, this.k - this.wO - .5 * this.aCU, this.j, this.aCU), aC = 1; aC <= 3; aC++) z2.fillRect(aC * ej, this.k - this.wO, this.aCU, this.wO);
		for (aC = this.aFf.length - 1; 0 <= aC; aC--) z2.fillText(bD.p4.a7U(this.aFf[aC], 0, .9 * ej), (aC + .5) * ej, this.k - .46 * this.wO)
	}, this.aXN = function() {
		z2.fillStyle = bE.rB, z2.fillRect(0, 0, this.j, this.agh), z2.fillStyle = bE.qN, z2.fillRect(0, this.agh - .5 * this.aCU, this.j, this.aCU), z2.font = bD.t6.t9(1, .39 * this.agh), z2.fillText(bD.p4.a7U(L(582), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.agh))
	}, this.agp = function(h, fp, fr) {
		var lz = bg.max[this.eR],
			a6p = (z2.setTransform(1, 0, 0, 1, fp + 2 * this.vi + this.agd, fr + this.aD9 + this.agh), z2.lineWidth = 2, this.agf / Math.sqrt(lz));
		z2.beginPath(), z2.moveTo(this.age, this.agf - a6p * Math.sqrt(h[bg.agU - 1]));
		for (var aC = bg.agU - 2; 0 <= aC; aC--) z2.lineTo(aC * this.age / (bg.agU - 1), this.agf - a6p * Math.sqrt(h[aC]));
		z2.stroke();
		fp = this.aAQ(h, a6p, .5);
		fp < .95 && z2.fillText(bD.pa.a3i(lz), -this.vi, 0), .05 < Math.abs(fp - .5) && z2.fillText(bD.pa.a3i(Math.floor(lz / 4)), -this.vi, Math.floor(this.agf / 2)), .05 < fp && z2.fillText("0", -this.vi, this.agf)
	}, this.agq = function(fp, fr) {
		z2.setTransform(1, 0, 0, 1, fp + 2 * this.vi + this.agd, fr + this.aD9 + this.agh), z2.lineWidth = 2;
		var a6p = this.agf / Math.max(bg.max[this.eR], 1);
		z2.beginPath(), z2.moveTo(this.age, this.agf - a6p * bg.aG4[bg.agU - 1]);
		for (var aC = bg.agU - 2; 0 <= aC; aC--) z2.lineTo(aC * this.age / (bg.agU - 1), this.agf - a6p * bg.aG4[aC]);
		z2.stroke();
		fp = this.aAQ(bg.aG4, a6p, 1), fr = bg.max[this.eR] / 100;
		fp < .95 && z2.fillText(bD.pa.a8a(fr, 2), -this.vi, 0), .05 < Math.abs(fp - .5) && z2.fillText(bD.pa.a8a(fr / 2, 2), -this.vi, Math.floor(this.agf / 2)), .05 < fp && z2.fillText(bD.pa.a8a(0, 2), -this.vi, this.agf)
	}, this.agr = function(fp, fr) {
		z2.setTransform(1, 0, 0, 1, fp + .34 * this.j, fr + 2 * agg + this.agh), bD.t6.textAlign(z2, 2);
		for (var aFN = this.k - 4 * agg - this.wO - this.agh, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) z2.fillText(bD.p4.a7U(bg.agY[h[aC]], 0, .31 * this.j), 0, aC * aFN / 9);
		var gA = bg.nc;
		for (z2.setTransform(1, 0, 0, 1, fp + .39 * this.j, fr + 2 * agg + this.agh), bD.t6.textAlign(z2, 0), z2.fillText(bD.pa.a8a(100 * gA[0] / (1024 * Math.max(gA[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) z2.fillText(gA[h[aC]].toString(), 0,
			aC * aFN / 9);
		z2.fillText(bD.pa.a8a(100 * (1 - ah.hW[aE.fS] / gA[7]), 0), 0, aFN)
	}, this.ags = function(fp, fr) {
		z2.setTransform(1, 0, 0, 1, fp + .79 * this.j, fr + 2 * agg + this.agh), bD.t6.textAlign(z2, 2);
		var aC, aFN = this.k - 4 * agg - this.wO - this.agh;
		for (z2.fillStyle = bE.qe, aC = 2; 0 <= aC; aC--) z2.fillText(bD.p4.a7U(bg.agY[aC + 8], 0, .31 * this.j), 0, aC * aFN / 9);
		z2.fillText(bD.p4.a7U(bg.agY[18], 0, .31 * this.j), 0, 3 * aFN / 9), z2.fillStyle = bE.qd, z2.fillText(bD.p4.a7U(bg.agY[11], 0, .31 * this.j), 0, 4 * aFN / 9), z2.fillStyle = bE.qy, z2.fillText(bD.p4.a7U(bg.agY[13], 0, .31 * this.j), 0,
				5 * aFN / 9), z2.fillText(bD.p4.a7U(bg.agY[15], 0, .31 * this.j), 0, 6 * aFN / 9), z2.fillText(bD.p4.a7U(bg.agY[16], 0, .31 * this.j), 0, 7 * aFN / 9), z2.fillText(bD.p4.a7U(bg.agY[12], 0, .31 * this.j), 0, 8 * aFN / 9), z2
			.fillStyle = bE.qx, z2.fillText(bD.p4.a7U(bg.agY[17], 0, .31 * this.j), 0, aFN), z2.fillStyle = bE.qe;
		var gA = bg.nc,
			aKO = gA[8] + gA[9] + gA[10] + gA[18],
			aKO = bD.pa.a3i(aKO),
			aW5 = z2.measureText(aKO).width,
			fp = (z2.setTransform(1, 0, 0, 1, fp + .83 * this.j + aW5, fr + 2 * agg + this.agh), z2.fillText(bD.pa.a3i(gA[8]), 0, 0), z2.fillText(bD.pa.a3i(gA[9]), 0, aFN / 9), z2.fillText(bD.pa.a3i(gA[10]), 0, 2 * aFN / 9), z2.fillText(bD.pa
				.a3i(gA[18]), 0, 3 * aFN / 9), z2.fillStyle = bE.qd, z2.fillText(aKO, 0, 4 * aFN / 9), z2.fillStyle = bE.qy, z2.fillText(bD.pa.a3i(gA[13]), 0, 5 * aFN / 9), z2.fillText(bD.pa.a3i(gA[15]), 0, 6 * aFN / 9), z2.fillText(bD.pa
				.a3i(gA[16]), 0, 7 * aFN / 9), z2.fillText(bD.pa.a3i(gA[12]), 0, 8 * aFN / 9), gA[12] + gA[13] + gA[15] + gA[16]);
		z2.fillStyle = bE.qx, z2.fillText(bD.pa.a3i(fp), 0, aFN), z2.fillStyle = bE.qN
	}, this.aAQ = function(h, a6p, aE3) {
		var aC, e, gR;
		return this.agk < 0 || 1 < this.agk ? .25 : (aC = this.agk * (bg.agU - 1), gR = h[e = Math.floor(aC)], gR += (aC - e) * (h[e < bg.agU - 1 ? e + 1 : e] - gR), z2.strokeStyle = bE.qQ, .04 < this.agk && this.agu(0, this.agf - a6p * Math.pow(
				gR, aE3), aC * this.age / (bg.agU - 1), this.agf - a6p * Math.pow(gR, aE3)), .04 < gR / bg.max[this.eR] && this.agu(aC * this.age / (bg.agU - 1), this.agf, aC * this.age / (bg.agU - 1), this.agf - a6p * Math.pow(gR, aE3)), z2
			.fillStyle = bE.r0, z2.beginPath(), z2.arc(aC * this.age / (bg.agU - 1), this.agf - a6p * Math.pow(gR, aE3), Math.max(2, .014 * this.k), 0, 2 * Math.PI), z2.fill(), h = this.agk * bi.aG6, h = 0 === ah.ng[aE.fS] ? Math.floor(h * bg
				.agX) : Math.floor(h * bi.l1()), z2.fillStyle = bE.qN, z2.fillText(1 === aE3 ? bD.pa.a8a(gR / 100, 2) : bD.pa.a3i(Math.floor(gR)), -this.vi, this.agf - a6p * Math.pow(gR, aE3)), bD.t6.textAlign(z2, 1), z2.fillText(aX.aFt(h),
				aC * this.age / (bg.agU - 1), this.agf + this.agi - (a1.a2.iv() ? 2 : 0) - this.aCU), bD.t6.textAlign(z2, 2), a6p * Math.pow(gR, aE3) / this.agf)
	}, this.agu = function(o7, o8, oK, oL) {
		z2.beginPath(), z2.moveTo(o7, o8), z2.lineTo(oK, oL), z2.stroke()
	}
}

function c6() {
	this.agv = "https://territorial.io/changelog", this.aYk = "https://territorial.io/terms", this.aYl = "https://territorial.io/privacy", this.agw = "https://territorial.io/tutorial", this.agx = "https://territorial.io/players", this.agy =
		"https://territorial.io/clans", this.agz = "https://territorial.io/clan-results", this.aVE = "https://patreon.com/c/territorial", this.aHV = "https://play.google.com/store/apps/details?id=territorial.io", this.a5W =
		"https://apps.apple.com/app/id1581110913", this.aHW = "https://discord.gg/pthqvpTXmh", this.aHX = "https://www.instagram.com/davidtschacher/", this.a3G =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dI() {
	this.z = new ah0, this.a2Y = new ah1, this.dt = function() {
		this.z.dt()
	}, this.en = function() {
		0 !== this.z.x5 && this.z.x5--
	}
}

function ah1() {
	this.z1 = function() {
		if (0 !== bS.z.x5 && (z2.globalAlpha = Math.min(bS.z.x5 / 580, 1), z2.drawImage(bS.z.ah4, 1 + aT.a2W(), 1 + aT.a2X()), z2.globalAlpha = 1, aE.i7)) {
			for (var o7 = jN / ix, o8 = jO / ix, oK = (i.j + jN) / ix, oL = (i.k + jO) / ix, hH = bS.z.ah5 * ix, ah6 = bS.z.ah6, aC = aE.l4 - 1; 0 <= aC; aC--) ! function(aC, hH, o7, o8, oK, oL, ah6) {
				var highlight;
				0 === ah.ng[aC] || 0 === ah.hW[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hH *= 2), oK = i.j * ((ah.jc[aC] + ah.jd[aC] + 1) / 2 - o7) / (oK - o7) - .5 * hH, o7 = i.k * ((ah.je[
					aC] + ah.jf[aC] + 1) / 2 - o8) / (oL - o8) - .5 * hH, oK > i.j) || o7 > i.k || oK < -hH || o7 < -hH || (highlight ? z2.setTransform(2 * ix, 0, 0, 2 * ix, oK, o7) : z2.setTransform(ix, 0, 0, ix, oK, o7), z2.drawImage(
					ah6[aE.ie ? bj.fg[aC] : 1], 0, 0))
			}(aC, hH, o7, o8, oK, oL, ah6);
			z2.setTransform(ix, 0, 0, ix, 0, 0)
		}
	}
}

function ah0() {
	this.ah5 = 28, this.x5 = 0, this.ah4 = null;
	var ah8 = this.ah6 = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function ahC(ih, ahD) {
		var fp, fr, fU, j6, a7G = bD.t6.a0q(ih, ih),
			io = bD.t6.getContext(a7G, !0),
			ik = bD.t6.getImageData(io, ih, ih),
			a11 = ik.data,
			lz = (ih >> 1) - .5,
			ahE = .5 + lz;
		for (ahE *= ahE, fr = 0; fr < ih; fr++)
			for (fp = 0; fp < ih; fp++) j6 = (j6 = fp - lz) * j6 + (j6 = fr - lz) * j6, a11[fU = 4 * (fr * ih + fp)] = ahD[0], a11[1 + fU] = ahD[1], a11[2 + fU] = ahD[2], a11[3 + fU] = (ahE - j6) * ahD[3] / ahE;
		return io.putImageData(ik, 0, 0), a7G
	}

	function ag8(aC, io, a7G, ih) {
		var highlight, fp, fr;
		0 !== ah.ng[aC] && 0 !== ah.hW[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ih *= 2), fp = ah.jc[aC] + ah.jd[aC] + 1 - ih - 2 >> 1, fr = ah.je[aC] + ah.jf[aC] + 1 - ih - 2 >> 1, highlight ? io
			.drawImage(a7G[aE.ie ? 9 === aE.lM && 5 === aF.iS[aC] ? 3 : bj.fg[aC] : aC < aE.l4 ? 1 : 0], fp, fr, ih, ih) : io.drawImage(a7G[aE.ie ? 9 === aE.lM && 5 === aF.iS[aC] ? 3 : bj.fg[aC] : aC < aE.l4 ? 1 : 0], fp, fr))
	}
	this.dt = function() {
		var up;
		this.x5 = 700,
			function(up) {
				var ih = up.ah5;
				if (up.ah6 = [], ah8 = [], aE.ie) {
					for (var aC = 0; aC <= aE.a1d; aC++) up.ah6.push(ahC(ih, bj.aeT[bj.lR[aC]])), ah8.push(ahC(ih >> 1, bj.aeT[bj.lR[aC]]));
					9 === aE.lM && ah8.push(ahC(ih, bj.aeT[1]))
				} else up.ah6.push(ahC(ih, bj.aeT[7])), up.ah6.push(ahC(ih, bj.aeT[4])), ah8.push(ahC(ih >> 1, bj.aeT[7]))
			}(this),
			function(up, ahI) {
				var aC, ah4 = up.ah4,
					io = bD.t6.getContext(ah4, !0),
					fi = aE.ff,
					ih = up.ah5 >> 1;
				io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0), ahI && io.clearRect(0, 0, ah4.width, ah4.height);
				if (9 === aE.lM) {
					ih <<= 1;
					up = b0.lV[5];
					for (aC = fi - up; aC < fi; aC++) ag8(aC, io, ah8, ih);
					fi -= up, ih >>= 1
				}
				for (aC = aE.l4; aC < fi; aC++) ag8(aC, io, ah8, ih)
			}(this, null !== (up = this).ah4 && up.ah4.width === bV.ft - 2 && up.ah4.height === bV.fu - 2 || (up.ah4 = bD.t6.a0q(bV.ft - 2, bV.fu - 2), !1)), aE.i7 || this.a8s()
	}, this.aeU = ahC, this.a8s = function() {
		for (var fi = aE.l4, ih = this.ah5, ah6 = this.ah6, io = bD.t6.getContext(this.ah4, !0), aC = 0; aC < fi; aC++) ag8(aC, io, ah6, ih)
	}
}

function dJ() {
	function ahL() {
		8 === aE.lM && 1 === aE.a4P && bU.a43.a4O()
	}

	function ahK(player) {
		aE.i7 ? (al.aNN(player), am.aQp(), aE.lO && aE.sk.en()) : b4.aHt(player)
	}
	this.sC = function(player) {
		aO.a4d(player, player === aE.fS ? 21 : 22), ahK(player), ahL()
	}, this.sh = function(player) {
		1 === aE.a4P && 0 !== ah.ng[player] && 2 !== ah.a7q[player] && ahK(player), aE.a4S--, aE.a4R--, aO.a4d(player, 4), bD.h4.hu(2) && aX.nS(!0), ahL()
	}
}

function dT() {
	this.ab8 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aFK = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qN, "rgb(170,170,170)"
	], this.ahM = [bE.qN, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qN, bE.qE], this.ahN = [bE.qE, bE.qN, bE.qN, bE.qN, bE.qE, bE.qE, bE.qE, bE.qE, bE.qN];
	var aQz = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aQI = ["rgba(" + aQz[0] + ",", "rgba(" + aQz[1] + ",", "rgba(" + aQz[2] + ",", "rgba(" + aQz[3] + ",", "rgba(" + aQz[4] + ",", "rgba(" + aQz[5] + ",", "rgba(" + aQz[6] + ",", "rgba(" + aQz[7] + ",", "rgba(" + aQz[8] + ",", "rgba(" + aQz[9] +
			","
		], this.aQJ = ["rgb(" + aQz[0] + ")", "rgb(" + aQz[1] + ")", "rgb(" + aQz[2] + ")", "rgb(" + aQz[3] + ")", "rgb(" + aQz[4] + ")", "rgb(" + aQz[5] + ")", "rgb(" + aQz[6] + ")", "rgb(" + aQz[7] + ")", "rgb(" + aQz[8] + ")", "rgb(" + aQz[9] +
			")"
		], this.a4m = null, this.aeT = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aWW = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lR = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fg = new Uint8Array(aE.ff), this.aFL = new Uint8Array(aE.ff), this.a1j = new Uint16Array(aE.ff), this.a1k = new Uint16Array(this.lR.length + 1), this.a1l = new Uint16Array(this.lR.length), this
		.du = function() {
			this.a4m = [L(583), L(584), L(585), L(586), L(587), L(588), L(589), L(590), L(591)]
		}, this.dt = function() {
			if (this.fg.fill(0), this.aFL.fill(0), this.ahO(), aE.ie) {
				if (9 === aE.lM) {
					for (var fg = bj.fg, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fg[aC] = 1;
					var fi = aE.ff;
					for (aC = aE.data.teamPlayerCount[7]; aC < fi; aC++) fg[aC] = 2;
					bj.lR[1] = 7, bj.lR[2] = 8
				} else aE.lO ? function() {
					var aWW = bj.aWW,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l4 - 1; 0 <= aC; aC--) colorsData[aC] = az.kL(262144);
					var ahZ = 0,
						fy = 768,
						aWV = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fl = 0, g2 = 0; g2 < 3; g2++) fl += Math.abs(aWW[aC][g2] - aWV[g2]);
							fl < fy && (ahZ = aC, fy = fl)
						} var aha = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) aha[aC] = teamPlayerCount[aC];
					var lR = bj.lR,
						ahb = new Uint8Array(9),
						hB = (lR[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) aha[aC] && (ahb[aC] = hB, lR[hB++] = aC);
					var kK = aE.l4,
						fg = bj.fg;
					aha[ahZ] ? (aha[ahZ]--, fg[0] = ahb[ahZ]) : kK = 0;
					var es = 0;
					for (aC = kK; aC < aE.a1W; aC++) {
						var ib = lR[es];
						if (aha[ib]) aha[ib]--, fg[aC] = ahb[ib];
						else if (aC--, 9 <= ++es) return console.log("error 325")
					}
				}() : this.en();
				! function() {
					for (var fi = aE.ff, a1j = bj.a1j, a1k = bj.a1k, a1l = bj.a1l, fg = bj.fg, lR = bj.lR, a1c = lR.length, buffer = new Array(a1c), aC = 0; aC < a1c; aC++) buffer[aC] = [];
					for (aC = 0; aC < fi; aC++) buffer[lR[fg[aC]]].push(aC);
					for (aC = 1; aC <= a1c; aC++) a1k[aC] = a1k[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a1c; aC++)
						for (var hB = buffer[aC].length, lz = a1k[aC], ib = 0; ib < hB; ib++) a1j[ib + lz] = buffer[aC][ib];
					var l4 = aE.l4;
					for (aC = 0; aC < a1c; aC++)
						for (hB = buffer[aC].length, lz = a1k[aC], ib = 0; ib < hB; ib++)
							if (a1j[ib + lz] >= l4) {
								a1l[aC] = ib;
								break
							}
				}(), ! function() {
					for (var fi = aE.ff, fg = bj.fg, aFL = bj.aFL, lR = bj.lR, aC = 0; aC < fi; aC++) aFL[aC] = lR[fg[aC]];
					9 === aE.lM && aFL.fill(1, fi - b0.lV[5])
				}()
			}
		}, this.ahO = function() {
			for (var aC = this.lR.length - 1; 0 <= aC; aC--) this.lR[aC] = aC
		}, this.en = function() {
			var a3X = new Uint8Array(aE.l4),
				a3Y = new Uint8Array(aE.l4),
				ahT = new Uint16Array(8),
				ahU = new Uint16Array(this.lR.length);
			this.ahV(a3X, a3Y, ahT, 1), this.aMt(ahT), this.ahW(ahU, a3X, a3Y), this.ahX(a3X, a3Y, ahU), this.ahY()
		}, this.ahV = function(a3X, a3Y, aha, ahc) {
			for (var g2, e, ahd, fi = this.lR.length - ahc, h = new Uint16Array(fi), aWW = this.aWW, colorsData = aE.data.colorsData, aC = aE.l4 - 1; 0 <= aC; aC--) {
				for (g2 = fi; ahc <= g2; g2--) h[g2 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aWW[g2][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aWW[g2][1]) + Math.abs(4 * (63 & colorsData[aC]) - aWW[g2][2]);
				for (ahd = 768, g2 = fi - 1; 0 <= g2; g2--) h[e = (g2 + aC) % fi] < ahd && (ahd = h[e], a3X[aC] = e);
				for (aha[a3X[aC]] += 4, ahd = 768, g2 = fi - 1; 0 <= g2; g2--) h[e = (g2 + aC) % fi] < ahd && e !== a3X[aC] && (ahd = h[e], a3Y[aC] = e);
				aha[a3Y[aC]]++
			}
		}, this.aMt = function(aha) {
			for (var g2, m1, fi = this.lR.length - 1, aC = fi; 0 <= aC; aC--) this.lR[aC] = aC;
			for (aC = fi - 1; 0 <= aC; aC--) aha[aC]++;
			for (aC = 1; aC <= fi; aC++) {
				for (m1 = 0, g2 = 1; g2 < fi; g2++) aha[g2] > aha[m1] && (m1 = g2);
				aha[m1] = 0, this.lR[aC] = m1 + 1
			}
		}, this.ahW = function(ahU, a3X, a3Y) {
			var g2, a5A, es, fl, e, oJ, vz, ahe = this.lR.length - 1,
				u1 = new Uint16Array(ahe),
				ahf = [],
				ahg = 0,
				a59 = [],
				ahh = [];
			loop: for (var aC = 0; aC < aE.l4; aC++)
				if (null !== (a5A = bD.pa.po(ah.a58[aC]))) {
					for (g2 = a59.length - 1; 0 <= g2; g2--)
						if (a5A === a59[g2]) {
							ahh[g2].push(aC), ahg = Math.max(ahg, ahh[g2].length);
							continue loop
						} a59.push(a5A), ahf.push(!1), ahh.push([aC]), ahg = Math.max(ahg, 1)
				}
			for (; 2 < aE.a1d && ahg > bO.g9(aE.l4, aE.a1d);) aE.a1d--, aE.lM--;
			for (g2 = a59.length - 1; 0 <= g2; g2--) {
				for (fl = -1, es = a59.length - 1; 0 <= es; es--) !ahf[es] && (-1 === fl || ahh[es].length > ahh[fl].length) && (fl = es);
				for (es = ahe - 1; 0 <= es; es--) u1[es] = 1;
				for (es = ahh[fl].length - 1; 0 <= es; es--) u1[a3X[ahh[fl][es]]] += 3, u1[a3Y[ahh[fl][es]]]++;
				for (aC = ahe - 1; 0 <= aC; aC--) {
					for (e = fl % ahe, es = ahe - 1; 0 <= es; es--) u1[es] > u1[e] && (e = es);
					for (oJ = -1, es = aE.a1d; 0 < es; es--)
						if (this.lR[es] === e + 1) {
							oJ = es;
							break
						} if (u1[e] = 0, -1 !== oJ) {
						for (vz = 0, es = aE.a1d; 0 < es; es--) ahU[oJ] > ahU[es] && vz++;
						if (vz !== aE.a1d - 1) {
							for (es = ahh[fl].length - 1; 0 <= es; es--) ahU[oJ]++, this.fg[ahh[fl][es]] = oJ;
							break
						}
					}
				}
				ahf[fl] = !0
			}
		}, this.ahX = function(a3X, a3Y, ahU) {
			for (var aC, j5, fi = this.lR.length - 1, border = bO.g9(aE.l4, aE.a1d), ahi = (0 < aE.l4 % aE.a1d && border++, new Uint8Array(1 + fi)), g2 = fi; 1 <= g2; g2--) ahi[this.lR[g2]] = g2;
			for (aC = 0; aC < aE.l4; aC++) j5 = ahi[a3X[aC] + 1], 0 === this.fg[aC] && j5 <= aE.a1d && ahU[j5] < border && (ahU[j5]++, this.fg[aC] = j5);
			for (aC = 0; aC < aE.l4; aC++) j5 = ahi[a3Y[aC] + 1], 0 === this.fg[aC] && j5 <= aE.a1d && ahU[j5] < border && (ahU[j5]++, this.fg[aC] = j5);
			for (g2 = aE.a1d; 1 <= g2; g2--)
				for (aC = aE.l4 - 1; 0 <= aC && !(ahU[g2] >= border); aC--) 0 === this.fg[aC] && (ahU[g2]++, this.fg[aC] = g2)
		}, this.ahY = function() {
			if (aE.a1d < 8) aE.a1d++, aE.lM++, aE.a1e = 1;
			else
				for (var aC = aE.l4; aC < aE.ff; aC++) this.fg[aC] = 1 + aC % aE.a1d
		}
}

function dm() {
	this.hX = function() {
		for (var fp, fr, aC = ge - 1; 0 <= aC; aC--) fp = bO.g9(gg[aC], 4) % bV.ft, fr = bO.g9(gg[aC], 4 * bV.ft), ah.jc[gZ] = Math.min(fp, ah.jc[gZ]), ah.je[gZ] = Math.min(fr, ah.je[gZ]), ah.jd[gZ] = Math.max(fp, ah.jd[gZ]), ah.jf[gZ] = Math
			.max(fr, ah.jf[gZ])
	}, this.gs = function() {
		var fl, hG, aC, fi = ah.hA[gZ].length,
			fk = ad.fk;
		loop: for (aC = fi - 1; 0 <= aC; aC--) {
			for (fl = 3; 0 <= fl; fl--)
				if (hG = ah.hA[gZ][aC] + fk[fl], ad.fZ(hG) || ad.hI(hG) && ad.fa(hG) !== gZ) {
					ad.kG(ah.hA[gZ][aC], gZ);
					continue loop
				} ah.hA[gZ][aC] = ah.hA[gZ][fi - 1], ah.hA[gZ].pop(), fi--
		}
	}, this.gt = function() {
		var player = gZ,
			hO = ah.hO,
			hP = ah.hP,
			g7 = ah.g7,
			fi = hO[player].length,
			fk = ad.fk;
		loop: for (var aC = fi - 1; 0 <= aC; aC--) {
			for (var ahj = !1, ahk = !1, fl = 3; 0 <= fl; fl--) {
				var hG = hO[player][aC] + fk[fl];
				if (ad.aN3(hG, player)) continue loop;
				ahj = ahj || ad.j0(hG), ahk = ahk || ad.aN2(hG)
			}
			ahj ? hP[player].push(hO[player][aC]) : ahk ? g7[player].push(hO[player][aC]) : ad.a25(hO[player][aC], player), hO[player][aC] = hO[player][fi - 1], hO[player].pop(), fi--
		}
	}, this.hM = function() {
		ah.hW[gd] -= ge
	}, this.hN = function(border) {
		for (var fi = border.length, aC = fi - 1; 0 <= aC; aC--) ad.a2Q(gd, border[aC]) || (border[aC] = border[fi - 1], border.pop(), fi--)
	}, this.hQ = function(border) {
		for (var fi = border.length, aC = fi - 1; 0 <= aC; aC--) !ad.a2Q(gd, border[aC]) && ad.fd(border[aC]) && (border[aC] = border[fi - 1], border.pop(), fi--)
	}, this.hR = function(border) {
		for (var fl, hG, fi = border.length, fk = ad.fk, aC = fi - 1; 0 <= aC; aC--)
			for (fl = 3; 0 <= fl; fl--)
				if (hG = border[aC] + fk[fl], ad.aN3(hG, gd)) {
					ah.hO[gd].push(border[aC]), border[aC] = border[fi - 1], border.pop(), fi--;
					break
				}
	}, this.hS = function() {
		for (var fl, hG, fk = ad.fk, aC = ge - 1; 0 <= aC; aC--)
			for (fl = 3; 0 <= fl; fl--) hG = gg[aC] + fk[fl], ad.a2T(gd, hG) && ad.aN9(hG) && (ah.hO[gd].push(hG), ad.hD(hG, gd))
	}, this.hT = function() {
		var fp, fr;
		loop: for (; ah.je[gd] < ah.jf[gd];) {
			for (fp = ah.jd[gd]; fp >= ah.jc[gd]; fp--)
				if (ad.a2Q(gd, 4 * (ah.je[gd] * bV.ft + fp))) break loop;
			ah.je[gd]++
		}
		loop: for (; ah.je[gd] < ah.jf[gd];) {
			for (fp = ah.jd[gd]; fp >= ah.jc[gd]; fp--)
				if (ad.a2Q(gd, 4 * (ah.jf[gd] * bV.ft + fp))) break loop;
			ah.jf[gd]--
		}
		loop: for (; ah.jc[gd] < ah.jd[gd];) {
			for (fr = ah.jf[gd]; fr >= ah.je[gd]; fr--)
				if (ad.a2Q(gd, 4 * (fr * bV.ft + ah.jc[gd]))) break loop;
			ah.jc[gd]++
		}
		loop: for (; ah.jc[gd] < ah.jd[gd];) {
			for (fr = ah.jf[gd]; fr >= ah.je[gd]; fr--)
				if (ad.a2Q(gd, 4 * (fr * bV.ft + ah.jd[gd]))) break loop;
			ah.jd[gd]--
		}
	}, this.fb = function(player, kD) {
		return 0 === bj.fg[player] || bj.fg[player] !== bj.fg[kD]
	}, this.iF = function(player) {
		for (var aC, hH, fi = ah.hO[player].length, fk = ad.fk, fl = 3; 0 <= fl; fl--)
			for (hH = fk[fl], aC = 0; aC < fi; aC++)
				if (ad.fZ(ah.hO[player][aC] + hH)) return !0;
		return !1
	}, this.aNJ = function(player) {
		for (var aC, hH, fi = ah.hO[player].length, fk = ad.fk, fl = 3; 0 <= fl; fl--)
			for (hH = fk[fl], aC = 0; aC < fi; aC++)
				if (ad.kF(ah.hO[player][aC]) && ad.fZ(ah.hO[player][aC] + hH)) return !0;
		return !1
	}, this.iI = function(a7w, a7x) {
		for (var aC, ej, hH, hG, afC = ah.hO[a7w].length, afD = ah.hO[a7x].length, fk = (afD < afC && (ej = a7w, a7w = a7x, a7x = ej, ej = afC, afC = afD, 0), ad.fk), fl = 3; 0 <= fl; fl--)
			for (hH = fk[fl], aC = 0; aC < afC; aC++)
				if (hG = ah.hO[a7w][aC] + hH, ad.hI(hG) && ad.fa(hG) === a7x) return !0;
		return !1
	}, this.aNK = function(a7w, a7x) {
		for (var aC, hH, hG, afC = ah.hO[a7w].length, fk = ad.fk, fl = 3; 0 <= fl; fl--)
			for (hH = fk[fl], aC = 0; aC < afC; aC++)
				if (ad.kF(ah.hO[a7w][aC]) && (hG = ah.hO[a7w][aC] + hH, ad.hI(hG)) && ad.fa(hG) === a7x) return !0;
		return !1
	}
}

function df() {
	this.st = new ahl
}

function ahl() {
	this.iL = function(player) {
		bD.h4.a7r(player) && aO.a2t(80, L(592), 637, 0, bE.rE, bE.qK, -1, !1)
	}, this.iO = function(player) {
		bD.h4.a7r(player) && aO.a2t(80, L(593), 637, 0, bE.rE, bE.qK, -1, !1)
	}
}

function ahm() {
	this.ahn = 0, this.en = function() {
		aP.en(), aa.en(), i.en(), b1.z.en(), ay.aMO(), bX.eb.en(), bq.xH.en(), bi.e0 && (bi.e0 = !1, ab.z1())
	}
}

function aho() {
	this.ei = bi.ei, this.eR = 0, this.ahn = 0, this.aMM = 0, this.ahp = null, this.ahq = 7, this.ahr = 0, this.dt = function() {
		this.aMM = 0, this.ahp = [], this.eR = 0, this.ahn = 0
	}, this.aa4 = function(aD) {
		if (aE.i7) this.aG7(aD);
		else if (this.ahp.push(aD), 2 === aE.a4P) {
			for (var aC = 0; aC < this.ahp.length; aC++) bB.rn.en(this.ahp[aC]);
			this.ahp = []
		}
	}, this.aG7 = function(aD) {
		2 !== aE.a4P && (bB.rn.en(aD), bC.en(), aX.aG7(this.aMM), this.aMM === aE.a8y ? (aE.sk.en(), this.aMM = 0, this.eR = 0, this.ahn = 0, this.ei = bi.ei) : (this.aMM++, ag.a8r(), ag.nS(!0), be.render()))
	}, this.en = function() {
		i.en(), aE.i7 ? (bi.e0 = aX.aG7(-1) || bi.e0, nU()) : (0 !== this.eR || bi.ei >= this.ei && (this.ei += bi.aG6 * Math.floor(1 + (bi.ei - this.ei) / bi.aG6), 2 === aE.a4P ? nG() : this.ahs(), this.eR++, 27 < bi.ei - this.ahr)) && this
		.aht(), nP(), bi.e0 && (bi.e0 = !1, a2U()), this.ahr = bi.ei
	}, this.aht = function() {
		bi.e0 = !0, nR(), this.eR = 0
	}, this.ahs = function() {
		var zq, aC;
		if (this.ahn !== 7 * this.aMM) nK(), be.render();
		else {
			zq = !1;
			loop: for (; this.ahu() && (zq = !0, nK(), 2 !== aE.a4P) && 0 < this.ahp.length;)
				for (aC = this.ahq - 2; 0 <= aC; aC--)
					if (nK(), 2 === aE.a4P) break loop;
			zq ? be.render() : (nG(), be.a8u())
		}
	}, this.ahu = function() {
		return 0 < this.ahp.length && (this.aMM++, bB.rn.en(this.ahp[0]), this.ahp.shift(), !0)
	}
}

function ahv() {
	var ahw, ahx, ahy, aMM, ahz, eR = 0,
		ei = bi.ei;

	function ai2() {
		! function() {
			if (!aE.i7) return;
			if (aE.lO) return;
			if (2 !== aE.a4P)
				if (ahz % 7 != 0) ahz++;
				else if (aMM === aE.a8y) {
				if (!ai5()) return;
				aX.aG7(aMM), aE.sk.en()
			} else {
				if (!ai5()) return;
				ahz++, aMM++, ag.a8r(), ag.nS(!0)
			}
			return 1
		}() && ai5() && nK()
	}

	function ai3() {
		eR = 0, (aE.i7 ? (bi.e0 = aX.aG7(aMM - (ahz % 7 == 0 ? 0 : 1) + ahz % 7 / 7) || bi.e0, nU) : aN.ht || !bF.a9M ? nU : (bi.e0 = !0, nR))()
	}

	function ai5() {
		var aC, fi, ai6 = bC.si.abe,
			gR = bC.si.abf,
			gT = bC.si.abg,
			gV = bC.si.abh,
			ai7 = bC.si.abi,
			ai8 = bC.si.abj;
		if (!(ahw >= ai8.length)) {
			if (ai8 = ai8[ahw], ai7[ahw]) {
				for (fi = ahx + ai8, aC = ahx; aC < fi; aC++) bB.rn.sX(ai6[aC], gR[aC], gT[aC], gV[aC]);
				ahx += ai8, ahw++
			} else ++ahy >= ai8 && (ahw++, ahy = 0);
			return __fx.replay.tick++, 1
		}
		aO.a5j("Replay file smaller than expected."), bF.a6Z(!1), aE.a4P = 2
	}
	this.ahn = 0, this.dt = function() {
		ahz = aMM = ahy = ahx = ahw = 0, __fx.replay.registerHooks({
			advance: () => ai2(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.e0 = !0
			},
			isEnded: () => 2 === aE.a4P,
			getTickInterval: () => bi.aG6
		})
	}, this.en = function() {
		var afc;
		i.en(), __fx.replay.frame() ? nG() : bF.aDK() < 1.7 ? 0 === eR ? bi.ei >= ei && (afc = bi.aG6 / bF.aDK(), ei += afc * Math.floor(1 + (bi.ei - ei) / afc), 2 === aE.a4P || aN.ht || !bF.a9M ? nG() : (ai2(), be.render()), eR++) : ai3() :
			function() {
				var afc;
				if (bi.ei >= ei)
					if (2 === aE.a4P || aN.ht || !bF.a9M) nG(), ei = bi.ei;
					else {
						for (afc = bi.aG6 / bF.aDK(), 16 < (bi.ei - ei) / afc && (ei = bi.ei - 16 * afc); bi.ei >= ei && 2 !== aE.a4P;) ei += afc, ai2();
						be.render()
					} ai3()
			}(), nP(), bi.e0 && (bi.e0 = !1, a2U())
	}, this.a4a = function() {
		bC.si.abj.length - ahw <= 2 || aO.a5j("Replay file larger than expected.")
	}
}

function ai9() {
	var eR = 0,
		ei = bi.ei;
	this.ahn = 0, this.en = function() {
		i.en(), aE.i7 ? nU() : 0 === eR ? bi.ei >= ei && (ei += bi.aG6 * Math.floor(1 + (bi.ei - ei) / bi.aG6), 2 === aE.a4P || aN.ht ? nG() : (nK(), be.render()), eR++) : ((aN.ht ? nU : (bi.e0 = !0, nR))(), eR = 0), nP(), bi.e0 && (bi.e0 = !1,
			a2U())
	}
}

function db() {
	this.a4Z = null, this.e0 = !1, this.ei = 0, this.aG6 = 56;
	var aiA = 0;

	function aiB() {
		bi.ei = aiA = performance.now(), bi.a4Z.en(), window.requestAnimationFrame(aiB)
	}
	this.dt = function() {
		this.a9J(), window.requestAnimationFrame(aiB), this.ei = performance.now()
	}, this.a9B = function() {
		aE.hr ? (this.a4Z = new ahv, this.a4Z.dt()) : aE.lO ? this.a4Z = new ai9 : (this.a4Z = new aho, this.a4Z.dt())
	}, this.a9J = function() {
		this.a4Z = new ahm, this.e0 = !0
	}, this.en = function() {
		this.a4Z.ahn++
	}, this.l1 = function() {
		return this.a4Z.ahn
	}, this.aZj = function() {
		var ej = performance.now();
		ej < aiA + 1e3 || (this.ei = ej, this.a4Z.en())
	}
}

function d1() {
	var aLm = 0,
		aiC = !0;
	this.en = function() {
		var ej, aBm;
		bi.ei < aLm || (aLm = bi.ei + 3e3, aE.hr) || aE.lO || bD.h4.hv(aE.fS) || (ej = new Date, aBm = ej.getUTCSeconds(), aiC ? aBm < 43 && (aiC = !1) : aBm < 43 || (aLm += 52e3, aiC = !0, aBm = (ej.getUTCMinutes() + 2) % 60, ej = aE.lM < 7 ?
			0 : 8 === aE.lM ? 2 : 9 === aE.lM ? 3 : 1, aP.aBb(ej, aBm) && (aBm = ej, aBm = [L(594), L(595), L(596), L(597)][aBm], aO.aBD(aBm))))
	}
}

function cv() {
	var o7, o8, oK, oL, aiE = 0,
		aiF = 0;

	function aiH() {
		return Math.pow(Math.pow(oK - o7, 2) + Math.pow(oL - o8, 2), .5)
	}

	function aiG(e) {
		o7 = i.l * e.touches[0].clientX, o8 = i.l * e.touches[0].clientY, oK = i.l * e.touches[1].clientX, oL = i.l * e.touches[1].clientY
	}
	this.a61 = function(e) {
		return 1 < e.touches.length ? (aiF = bi.ei, aiE = 3, aiG(e), aM.uW(), !0) : (aiE = 0, !1)
	}, this.a62 = function(e) {
		var aOE, j3, j4;
		return 0 !== aE.a4P && 1 < e.touches.length && (aiE = Math.max(aiE - 1, 0), aI.oP() && (aOE = aiH(), aiG(e), e = aiH(), j3 = Math.floor((o7 + oK) / 2), j4 = Math.floor((o8 + oL) / 2), aT.aDl(j3, j4, Math.max(.125, e) / Math.max(.125,
			aOE)), bi.e0 = !0), !0)
	}, this.a6P = function() {
		var fp, fr;
		return !!(aiE && (aiE = 0, bi.ei < aiF + 500)) && (fp = (o7 + oK) / 2, fr = (o8 + oL) / 2, aM.a6J(fp, fr), aM.click(fp, fr, !0) && (bi.e0 = !0), !0)
	}
}

function dC() {
	this.size = 0, this.eR = 0, this.aD = null, this.dt = function(aD) {
		this.eR = 0, this.aD = aD, this.size = aD.length
	}, this.y4 = function() {
		this.aD = null
	}, this.sW = function(size) {
		for (var gA = 0, aD = this.aD, oP = this.eR + size - 1, aC = this.eR; aC <= oP; aC++) gA |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oP - aC;
		return this.eR += size, this.eR > 8 * this.size && console.error("Unwrapper Overflow"), gA
	}, this.aaC = function(size) {
		var g2 = size >> 1;
		return (1 << g2) * this.sW(size - g2) + this.sW(g2)
	}, this.aaE = function(aiI) {
		return this.size === bG.aaB(aiI)
	}, this.abx = function(a1I, aiJ, aiK) {
		var hB = this.sW(a1I);
		if (!hB) return null;
		for (var a1I = Math.max(hB, aiK), h = new(aiJ <= 8 ? Uint8Array : aiJ <= 16 ? Uint16Array : Uint32Array)(a1I), aC = 0; aC < hB; aC++) h[aC] = this.sW(aiJ);
		aiK = h[hB - 1];
		return aiK && h.fill(aiK, hB), h
	}, this.aby = function(a1I, aiL, aiK) {
		var hB = this.sW(a1I);
		if (!hB) return null;
		for (var a1I = Math.max(hB, aiK), h = new Array(a1I), aC = 0; aC < hB; aC++) h[aC] = this.abv(aiL);
		return h.fill(h[hB - 1], hB), h
	}, this.abv = function(a1I) {
		return bJ.a0R.a0V(this.sW(a1I))
	}, this.abw = function() {
		var a3g = this.sW(30);
		if (!(6 * a3g > 8 * this.size - this.eR)) {
			var pW = bI.f9.vf(bI.f9.vg(a3g)),
				pW = bD.pa.a8m(pW, "_", "/");
			pW = bD.pa.a8m(pW, "-", "+");
			for (var aiM = "";
				(pW.length + aiM.length) % 4;) aiM += "=";
			pW = "data:image/png;base64," + pW + aiM;
			var aNq = new Image;
			aNq.onload = function() {
				bC.aOn.aOo(aNq), aNq.onload = null, aNq = null
			}, aNq.src = pW
		}
	}
}

function dV() {
	this.ad0 = 0, this.ad1 = 0, this.acw = 0, this.acx = 0, this.acy = 0, this.acz = 0, this.aGo = [0, 0, 0, 0], this.oO = function() {
		this.ad0 = aT.a2W(), this.ad1 = aT.a2X(), this.acw = -this.ad0, this.acx = -this.ad1, this.acy = i.j / ix, this.acz = i.k / ix, this.aGo[0] = Math.floor(this.acw), this.aGo[1] = Math.floor(this.acx), this.aGo[2] = Math.floor(this.aGo[0] +
			this.acy + 1), this.aGo[3] = Math.floor(this.aGo[1] + this.acz + 1), be.aGm = !0
	}
}

function cw() {
	var aCQ, nt;
	this.dt = function() {
		aCQ = 1, nt = 0
	}, this.en = function() {
		0 < aCQ && (nt = 0 === nt ? bi.ei + 16 : nt, aCQ = (aCQ -= .001 * (bi.ei - nt)) < 0 ? 0 : aCQ, nt = bi.ei, bi.e0 = !0)
	}, this.z1 = function() {
		0 < aCQ && (z2.fillStyle = "rgba(0,0,0," + aCQ + ")", z2.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eR = 0, this.aD = null, this.dt = function(aD) {
		this.eR = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(aiI) {
		return this.dt(new Uint8Array(this.aaB(aiI))), this.aD
	}, this.y4 = function() {
		this.aD = null
	}, this.a9 = function(size, aBo) {
		for (var aD = this.aD, oP = this.eR + size - 1, aC = this.eR; aC <= oP; aC++) aD[aC >> 3] |= (aBo >> oP - aC & 1) << 7 - (7 & aC);
		this.eR += size, this.eR > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aaA = function(size, aBo) {
		var g2 = size >> 1,
			fl = 1 << g2;
		this.a9(size - g2, bO.g9(aBo, fl)), this.a9(g2, aBo % fl)
	}, this.aiP = function(size) {
		for (var aD = this.aD, oP = this.eR + size, aC = this.eR; aC < oP; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aaB = function(aiI) {
		return aiI + 7 >> 3
	}, this.aiQ = function(h, kK, oP, aiR) {
		for (var aC = kK; aC < oP; aC++) this.a9(aiR, h[aC])
	}
}

function dB() {
	this.dt = function() {
		this.h = [], this.eR = 0
	}, this.aad = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(aiS, value) {
		for (var h = this.h, oP = this.eR + aiS - 1, aiT = 1 + (oP >> 3); h.length < aiT;) h.push(0);
		for (var aC = this.eR; aC <= oP; aC++) h[aC >> 3] |= (value >> oP - aC & 1) << 7 - (7 & aC);
		this.eR += aiS
	}, this.dz = function(h, a1I, aiJ) {
		var aiU = bD.tg.a7A(h);
		this.a9(a1I, aiU);
		for (var aC = 0; aC < aiU; aC++) this.a9(aiJ, h[aC])
	}, this.acF = function(h, a1I, aiL) {
		var aiU = bD.tg.a7A(h);
		this.a9(a1I, aiU);
		for (var aC = 0; aC < aiU; aC++) this.acD(h[aC], aiL)
	}, this.acD = function(pW, a1I) {
		var fi = pW.length;
		this.a9(a1I, fi);
		for (var aC = 0; aC < fi; aC++) this.a9(16, pW.charCodeAt(aC))
	}, this.acE = function(a7G) {
		var aiV = (a7G = a7G.toDataURL()).split(",");
		if (aiV.length < 2) console.log("error 266");
		else {
			a7G = bD.pa.a8m(a7G = aiV[aiV.length - 1], "/", "_"), a7G = bD.pa.a8m(a7G, "\\+", "-");
			var a7G = bD.pa.a8m(a7G, "=", ""),
				a0e = bJ.f9.a0b(a7G),
				fi = a0e.length;
			this.a9(30, fi);
			for (var aC = 0; aC < fi; aC++) this.a9(6, a0e[aC])
		}
	}
}
a(), self.aiCommand746 = function(gA) {
	0 === gA ? c1() : 1 !== gA || !a1 || 1 !== a1.id || a1.eA < 14 || bM.gB()
}, setTimeout(c1, 1e4), window.onload = function() {
	c1()
};