var cS, cT, cU, f3, kj, iI, iJ, eo, aI, iD, iK, iL, ct, iF, iG, uh, aP, aS, aa, ek, aR, f6, aZ, aY, ak, f7, aX, be, aO, ui, bK, aK, eJ, i4, iN, hO, cz, bX, uj, hz, nl, uk, gC, ul, hy, iA, i6, r1, ay, ey, aE, f8, aT, jg, aA, hw, hs, a5, iP, ol, um,
	gi, iO, un, iQ, iR, jG, du, eN, bT, dK, aL, lo, uo, c9, k0, jz, up, aU, uq, gf, i9, f4, gk, f1, ur, dj, dC, ad, aH, hq, iB, us, aw, el, ut, dF, i8, dO, h0, aN, aC, g8, f5, ca, dq, cs, nV, uu, uv, uw, b7, ux, rr, hr, uy, h7, uz, a1R, a1S, a1T,
	a1U, a1V, a1W, a1X, a1Y, a1Z, a1a, a1b, a1c, a1d, l, dQ, a9C, gE, pI, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "span", "1em",
		"0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
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
	var b, c, d = -15e3,
		e = !1;

	function m(a2) {
		a3() || (e = !0, a4(a2, 1), a5.a6.a7(a5.a6.a8), a9(Math.floor(aA.aB * a2.clientX), Math.floor(aA.aB * a2.clientY)))
	}

	function r(a2) {
		d = aC.aD, a4(a2, 1), a5.a6.a7(a5.a6.a8), 0 < a2.touches.length && (b = Math.floor(aA.aB * a2.touches[0].clientX), c = Math.floor(aA.aB * a2.touches[0].clientY), aE.r(a2) || a9(b, c))
	}

	function a9(aF, aG) {
		aH.m(aF, aG), 0 === aI.aJ ? aK.m(aF, aG) : aL.aM(aF, aG) || aN.m(aF, aG) || aO.m(aF, aG) || aP.aQ(aF, aG) || aR.m(aF, aG) || 0 <= aS.m(aF, aG) || aT.m(aF, aG) || aU.aV(aF, aG) || aP.aW(aF, aG)
	}

	function n(a2) {
		a3() || (e = !0, a4(a2, 1), ab(Math.floor(aA.aB * a2.clientX), Math.floor(aA.aB * a2.clientY)))
	}

	function s(a2) {
		d = aC.aD, a4(a2, 1), 0 < a2.touches.length && (b = Math.floor(aA.aB * a2.touches[0].clientX), c = Math.floor(aA.aB * a2.touches[0].clientY), aE.s(a2) || ab(b, c))
	}

	function ab(aF, aG) {
		aU.ac() || (aU.i = aF, aU.j = aG), aH.n(aF, aG), 0 === aI.aJ ? aK.n(aF, aG) : (ad.ae(aF, aG), aN.n(aF, aG) || (aS.n(aF, aG), aP.af() ? aP.n(aF, aG) : aZ.ag ? aZ.n(aF) && (aC.ah = !0) : (aX.n(aF, aG), aY.ai && aY.n(aF, aG) && (aC.ah = !0))))
	}

	function p(a2) {
		a3() || (a4(a2, 1), aj(), 0 === aI.aJ ? (aK.click(-1024, -1024), ak.reset()) : (aX.al(-1024, -1024), aS.n(-1024, -1024), aZ.am(), aY.ai = !1))
	}

	function o(a2) {
		a3() || (a4(a2, 1), an(Math.floor(aA.aB * a2.clientX), Math.floor(aA.aB * a2.clientY), 2 === a2.button), aU.h && (aU.h = !1, a2.preventDefault()))
	}

	function click(a2) {
		a3() || a4(a2, 1)
	}

	function t(a2) {
		d = aC.aD, a4(a2, 1), a2 && a2.touches && 0 < a2.touches.length && 0 !== aI.aJ ? aY.ai = !1 : aE.ao() || (an(b, c, !1), aU.h && (aU.h = !1, a2.preventDefault()))
	}

	function u(a2) {
		d = aC.aD, a4(a2, 1), an(b, c, !1), aU.h && (aU.h = !1, a2.preventDefault())
	}

	function v(a2) {}

	function w(a2) {}

	function x(a2) {
		a3() || a4(a2, 0)
	}

	function an(aF, aG, ap) {
		aj(), 0 === aI.aJ ? aK.click(aF, aG) : (aX.al(aF, aG), aN.al(), aZ.am(), aY.ai = !1, aP.click(aF, aG, ap) ? aC.ah = !0 : aS.o(aF, aG))
	}

	function aj() {
		aH.aj()
	}

	function q(a2) {
		var aF, aG, deltaY;
		a3() || (a4(a2, 1), a5.a6.a7(a5.a6.a8), aF = Math.floor(aA.aB * a2.clientX), aG = Math.floor(aA.aB * a2.clientY), deltaY = a2.deltaY, 1 === a2.deltaMode && (deltaY *= 16), aH.q(aF, aG, deltaY), 0 === aI.aJ ? aK.q(aF, aG, deltaY) : aX.q(aF,
			aG, deltaY) || (aZ.aq(aF, aG) ? aZ.q(deltaY) && (aC.ah = !0) : aY.q(aF, aG, deltaY)))
	}

	function y(a2) {
		a4(a2, 0)
	}

	function a4(a2, id) {
		0 === id && aH.af() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aK.at() && a2.preventDefault()
	}

	function z(a2) {
		if (__fx.keybindHandler(a2.key)) return;
		a3() || 0 < aA.av || (a2 = a2.code) && a2.length && (aw.ax(a2, 18) ? ay.az(3) : aw.ax(a2, 22) ? ay.az(0) : aw.ax(a2, 20) ? ay.az(1) : aw.ax(a2, 24) ? ay.az(2) : aw.ax(a2, 10) ? aZ.b0(31 / 32) : aw.ax(a2, 8) ? aZ.b0(32 / 31) : aw.ax(a2, 6) ?
			aZ.b0(7 / 8) : aw.ax(a2, 4) ? aZ.b0(8 / 7) : aw.ax(a2, 14) ? 0 !== aI.aJ && aY.q(Math.floor(aA.b1 / 2), Math.floor(aA.b2 / 2), -200) : aw.ax(a2, 16) ? 0 !== aI.aJ && aY.q(Math.floor(aA.b1 / 2), Math.floor(aA.b2 / 2), 200) : aw.ax(a2,
				0) ? aI.aJ && ad.b3(0) : aw.ax(a2, 2) ? aI.aJ && ad.b3(1) : aw.ax(a2, 30) ? aI.aJ && ad.b3(2) : aw.ax(a2, 26) ? aI.aJ && ad.b4() : aw.ax(a2, 28) && aI.aJ && ad.b5())
	}

	function a0(a2) {
		if (!a3() && !(0 < aA.av || aC.aD < 400)) {
			var code = a2.code;
			if (code && code.length && !("Enter" === code && aH.b6(1) || "Space" === code && aH.b6(0))) return b7.b8 ? b7.b9.b6(code) ? void 0 : void("Escape" === code && aU.bA()) : void(8 !== aK.at() && aK.b6(a2) ? aC.ah = !0 : "Escape" === code ?
				aU.bA() : aw.ax(code, 18) ? ay.bB(3) : aw.ax(code, 22) ? ay.bB(0) : aw.ax(code, 20) ? ay.bB(1) : aw.ax(code, 24) ? ay.bB(2) : aw.ax(code, 12) ? aL.bC(!aI.bD) : "Space" === code && aI.aJ && (aS.bE && aS.bF(), aI.bG) && aL.bH(!
					1))
		}
	}

	function a1() {
		"hidden" !== document.visibilityState && (aC.ah = !0)
	}

	function a3() {
		return d + 15e3 > aC.aD
	}

	function resize() {
		aA.bJ()
	}
	this.f = 0, this.g = "", this.h = !1, this.i = 0, this.j = 0, this.k = function() {
		l.addEventListener("mousedown", m, {
				passive: !1
			}), l.addEventListener("mousemove", n, {
				passive: !1
			}), l.addEventListener("mouseup", o, {
				passive: !1
			}), l.addEventListener("click", click, {
				passive: !1
			}), l.addEventListener("mouseleave", p, {
				passive: !1
			}), l.addEventListener("wheel", q, {
				passive: !1
			}), l.addEventListener("touchstart", r, {
				passive: !1
			}), l.addEventListener("touchmove", s, {
				passive: !1
			}), l.addEventListener("touchend", t, {
				passive: !1
			}), l.addEventListener("touchcancel", u, {
				passive: !1
			}), l.addEventListener("dragover", v), l.addEventListener("drop", w), l.addEventListener("dblclick", x), document.addEventListener("contextmenu", y), document.addEventListener("keydown", z), document.addEventListener("keyup", a0),
			document.addEventListener("visibilitychange", a1), window.addEventListener("resize", resize)
	}, this.aV = function(aF, aG) {
		return !!aL.m(aF, aG) || !!(aX.m(aF, aG) || aY.m(aF, aG) || aZ.m(aF, aG) || aa.m(aF, aG))
	}, this.bI = a3, this.ac = function() {
		return !e || 0 < d
	}, this.bA = function() {
		if (!aH.af()) return 8 === aK.at() ? aI.bD ? void aL.bC(!1) : aN.af ? void aN.bF() : void aS.bF() : void(7 !== aK.at() && 6 === aK.at() && bK.bL());
		aH.b6(2)
	}
}

function bM() {
	var bN = [];
	this.bO = function(player, bP, bQ, bR) {
		player === aI.bS || bP === aI.bS || !bR && bT.bU.bV(player) || bT.bU.bV(bP) || this.bW(bX.bY[player] + " supported " + bX.bY[bP] + " with " + bT.bZ.ba(bQ) + " ressource" + (1 === bQ ? "." : "s."))
	}, this.bW = function(bb, bc) {
		bb = {
			aD: be.bf(),
			bb: bb,
			bc: bc
		};
		bN.push(bb), 30 === aH.bg && aH.bh().bW(bb)
	}, this.clear = function() {
		bN = [];
		var bi = aH.bj(30);
		bi && bi.clear()
	}, this.bk = function() {
		return bN
	}
}

function bl() {
	var bm = 0,
		bn = 0,
		bo = 0,
		bp = null,
		bq = null;

	function bv(bx, by, c2) {
		var bb = bx.username;
		return (bb += "   " + b7.c3.c4(bx.c5, bx.c6, bx.c7)) + function(bx) {
			bx = bx.bu;
			if (bx < 1e3) return "   Gold: " + bx;
			if ((bx %= 1024) < 1e3) return "   Gold: " + bx + "k";
			return "   Gold: " + (bx - 999) + "M"
		}(bx) + ("   IP: " + c9.cA.ba(bx.cB, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][c2 ? bn : bt(bx, by)])
	}

	function bt(bx, by) {
		return bn = by || b7.cC.cD(bx.cE) ? 1 : 0
	}
	this.br = 0, this.bs = function() {
		!bm || bn === bt(bq) && bo === bq.bu || (bo = bq.bu, bp.show(-1, -1, bv(bq, 0, 1), 1, 1, bq.color))
	}, this.bw = function(a2, bx, by) {
		var bz = a2.getBoundingClientRect();
		this.show(bz.left, bz.top, bx, 0, by), a2.addEventListener("mouseleave", function remove() {
			a2.removeEventListener("mouseleave", remove), b7.c0 && b7.c0.c1(1)
		}), this.br = by
	}, this.show = function(aF, aG, bx, cF, by) {
		bp = bp || new cG, bo = (bq = bx).bu, bp.show(aF, aG, bv(bx, by), cF, 0, bq.color), bm = 1
	}, this.c1 = function(cH) {
		this.br = 0, bp && bp.c1(cH) && (bm = 0, bq = null)
	}
}

function cI() {
	this.cJ = new cK, this.bU = new cL, this.cM = new cN, this.cO = new cP, this.cQ = new cR
}

function cV() {
	var cW, cX, b1, aF, aG, cY, cZ;
	this.k = function() {
		cW = new Array(2), cX = new Array(2), this.ai = !1, cZ = cY = cU = cT = 0, cS = 1, this.resize()
	}, this.resize = function() {
		b1 = (b1 = Math.floor((ca.cb.cc() ? .072 : .0502) * aA.cd)) < 8 ? 8 : b1;
		for (var ce = 1; 0 <= ce; ce--) cW[ce] = document.createElement("canvas"), cW[ce].width = b1, cW[ce].height = b1, cX[ce] = cW[ce].getContext("2d", {
			alpha: !0
		});
		this.cf(),
			function() {
				for (var dJ = Math.floor(1 + b1 / 20), ce = 1; 0 <= ce; ce--) cX[ce].clearRect(0, 0, b1, b1), cX[ce].fillStyle = dK.dL, cX[ce].beginPath(), cX[ce].arc(b1 / 2, b1 / 2, b1 / 2 - dJ, 0, 2 * Math.PI), cX[ce].fill(), cX[ce].lineWidth =
					dJ, cX[ce].fillStyle = dK.dM, cX[ce].strokeStyle = dK.dM, cX[ce].beginPath(), cX[ce].arc(b1 / 2, b1 / 2, b1 / 2 - dJ, 0, 2 * Math.PI), cX[ce].stroke(), dN(cX[ce], 0, 0, b1, dJ, .3, 0 === ce)
			}()
	}, this.ck = function() {
		return -cT / cS
	}, this.cl = function() {
		return -cU / cS
	}, this.cm = function(cn, co) {
		cT = cS * cn - co
	}, this.cp = function(cq, cr) {
		cU = cS * cq - cr
	}, this.m = function(ci, cj) {
		return aI.bD || ! function(ci, cj) {
			return Math.pow(ci - (aF + b1 / 2), 2) + Math.pow(cj - (aG + b1 / 2), 2) < b1 * b1 / 4 || Math.pow(ci - (aF + b1 / 2), 2) + Math.pow(cj - (aG + 2 * b1), 2) < b1 * b1 / 4
		}(ci, cj) || cs.buffer.data[8].value ? (ct.cu() && (this.ai = !0, cY = ci, cZ = cj), !1) : cj < aG + 1.25 * b1 ? this.q(Math.floor(aA.b1 / 2), Math.floor(aA.b2 / 2), -200) : this.q(Math.floor(aA.b1 / 2), Math.floor(aA.b2 / 2), 200)
	}, this.n = function(ci, cj) {
		var cv, cw, cx, cy;
		return !ct.cu() || (cv = cT, cw = cU, cT += cx = cY - ci, cU += cy = cZ - cj, cz.n(cx, cy), this.d0(), cY = ci, cZ = cj, cv !== cT) || cw !== cU
	}, this.q = function(d1, d2, deltaY) {
		var d3;
		if (ct.cu()) {
			if (0 < deltaY) d3 = (d3 = 500 / (500 + deltaY)) < .5 ? .5 : d3;
			else {
				if (!(deltaY < 0)) return !1;
				d3 = 2 < (d3 = (500 - deltaY) / 500) ? 2 : d3
			}
			this.d4(d1, d2, d3), aC.ah = !0
		}
		return !0
	}, this.d4 = function(aF, aG, d5) {
		var dI;
		d5 = dI = (dI = 1024 < (dI = d5) * cS ? 1024 / cS : dI) * cS < .125 ? .125 / cS : dI, cz.zoom(d5, aF, aG),
			function(dI, d1, d2) {
				cS *= dI, cT = (cT + d1) * dI - d1, cU = (cU + d2) * dI - d2, aY.d0()
			}(d5, aF, aG)
	}, this.d0 = function() {
		var d8 = aA.b1 / 16,
			d9 = 0,
			dA = aA.b2 / 16,
			dB = 0;
		cT < d8 - aA.b1 && (d9 = -aA.b1 + d8 - cT), cT > cS * dC.dD - d8 && (d9 = cS * dC.dD - d8 - cT), cU < dA - aA.b2 && (dB = -aA.b2 + dA - cU), cS * dC.dE - dA < cU && (dB = cS * dC.dE - dA - cU), cT += d9, cU += dB, dF.dG(), cz.dH(d9, dB)
	}, this.cf = function() {
		aF = aA.b1 - b1 - dO.gap, aG = Math.floor(aA.b2 / 2 - 1.25 * b1)
	}, this.dP = function() {
		cs.buffer.data[8].value || (dQ.drawImage(cW[0], aF, aG), dQ.drawImage(cW[1], aF, Math.floor(aG + 3 * b1 / 2)))
	}
}

function dR() {
	this.dS = new dT, this.dU = new dV, this.turnstile = new dW, this.k = function() {
		ca.cb.dX(), this.turnstile.k()
	}, this.dY = function() {
		return cs.buffer.data[160].value
	}
}

function dZ() {
	this.k = function() {
		this.da = 0, this.db = [], this.dc = 0, this.dd = 0
	}, this.de = function() {
		var dh;
		aI.df || (dh = this, 2 === aI.di ? dh.db = dj.dk.dl() : aI.dm ? dh.db = dj.dk.dn() : dh.db = dj.dk.dp(), dh.da = dq.dr.ds(), dh.dc = Math.max(1, dj.dk.dt(dh.db)), du.bU.dv(), 8 === aI.dw ? dj.result.dd = 0 : dh.dd = 100 * dj.result.da * (
			1 + aI.dy))
	}
}

function dz() {
	var e0, e1, e2, e3, e4, e5 = 0;
	this.e6 = new e7, e2 = new e8([.45, .27], [.5, .5], 2 / 3), e1 = [new e9("⚔️<br>" + L(0), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : eA(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : dK.eB), new e9("🗡️<br>" + L(1), function() {
			eA(1)
		}, dK.eC), new e9("🔑<br>" + L(2), function() {
			eA(2)
		}, dK.eD), new e9("☰<br>" + L(3), function() {
			eA(3)
		}, dK.eE), new e9("", function() {
			aH.eF(12)
		}, dK.eG, !1),
		new e9("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new e9("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], e3 = new eH(cs.buffer.data[122]);
	for (var ce = 0; ce < e1.length; ce++) e1[ce].button.style.position = "absolute";

	function eA(eI) {
		ca.cb.setState(10), eJ.eK() || eJ.eL(), 0 === eI ? aH.a6.eM(1) : 1 === eI ? (eN.eO.eP(cs.buffer.data[156].value, 1) || aI.eQ.eR(), aH.eF(19)) : 2 === eI ? 0 !== ca.id || cs.buffer.data[140].value ? aH.eF(8, aH.bg, new eS(16)) : aH.a6.eT(aH
			.bg, 16) : 3 === eI && aH.eF(1)
	}
	e3.a2.style.position = "absolute", e3.a2.style.textAlign = "center", e3.a2.placeholder = L(4), this.show = function() {
		aK.setState(0), ca.cb.setState(12), this.e6.show(), e1[4].eU(bT.color.eV(cs.buffer.data[121].value)), this.resize(), document.body.appendChild(e3.a2);
		for (var ce = 0; ce < e1.length; ce++) document.body.appendChild(e1[ce].button);
		1 !== ca.id || ca.eX < 5 || (e4 && aC.aD > e4 + 144e5 ? ca.eY.setState(14) : e4 = aC.aD)
	}, this.c1 = function() {
		this.e6.c1(), aH.removeChild(document.body, e3.a2);
		for (var ce = 0; ce < e1.length; ce++) aH.removeChild(document.body, e1[ce].button)
	}, this.resize = function() {
		this.e6.resize(), this.e6.resize(), e2.resize();
		var gap = .5 * dO.gap,
			eZ = 10 / 99 * .84 * e2.b1,
			eb = .16 * e2.b2,
			d8 = .19 * e2.b1,
			aF = e2.aF + d8,
			eZ = e2.aG + eZ + 3 * gap,
			b1 = .5 * (e2.b1 - gap) - d8,
			d8 = e2.b1 - 2 * d8 - eb - gap,
			d8 = (bT.ed.ee(e3.a2, aF, eZ, d8, eb), bT.ed.ee(e1[4].button, aF + d8 + gap, eZ, eb, eb), e5 = eZ, .5 * (e2.aG + e2.b2 - (eZ += eb + gap) - gap));
		bT.ed.ee(e1[0].button, aF, eZ, b1, d8), bT.ed.ee(e1[1].button, aF + b1 + gap, eZ, b1, d8), bT.ed.ee(e1[2].button, aF, eZ + d8 + gap, b1, d8), bT.ed.ee(e1[3].button, aF + b1 + gap, eZ + d8 + gap, b1, d8);
		bT.ed.ee(e1[5].button, aF, eZ + d8 * 2 + gap * 2, b1 * 2 + gap, d8 / 3);
		bT.ed.ee(e1[6].button, aF, eZ + d8 * 2.33 + gap * 3, b1 * 2 + gap, d8 / 3);
		for (var ce = 0; ce < e1.length; ce++) e1[ce].button.style.font = bT.ed.ef(0, bT.ed.eg(.065 * e2.b2)), bT.ed.eh(e1[ce].button, 5);
		e3.a2.style.font = bT.ed.ef(0, bT.ed.eg(.08 * e2.b2)), bT.ed.eh(e3.a2, 5)
	}, this.dP = function() {
		if (aK.ei(), ak.dP(), en = Math.floor((ca.cb.cc() ? .018 : .0137) * aA.cd), dQ.font = bT.ed.ef(0, Math.max(5, en)), bT.ed.textBaseline(dQ, 0), bT.ed.textAlign(dQ, 2), dQ.fillStyle = dK.dM, dQ.fillText(eo.eX, aA.b1, 0), text =
			"Win count: " + __fx.wins.count, textLength = dQ.measureText(text).width, en = Math.max(5, en), dQ.textAlign = "left", dQ.textBaseline = "middle", dQ.fillText(text, dQ.canvas.width - textLength - en / 2, 2 * en), ek.dP(e5), el.dP(),
			eJ.eK()) {
			dQ.imageSmoothingEnabled = !1;
			var text = eJ.ep("territorial.io"),
				textLength = .84 * e2.b1 / text.width;
			dQ.setTransform(textLength, 0, 0, textLength, e2.aF + .08 * e2.b1, e2.aG), e0 = e0 || bT.eq.er(text, bT.eq.es, [0, 0, 0]);
			for (var aF = -1; aF <= 1; aF += 2)
				for (var aG = -1; aG <= 1; aG += 2) dQ.drawImage(e0, aF, aG);
			dQ.drawImage(text, 0, 0), dQ.imageSmoothingEnabled = !0;
			var en = eJ.ep("logo"),
				eu = .6666 * textLength * text.height / en.height,
				ev = .5 * aA.b1,
				ew = e2.aG + .5 * textLength * text.height - .5 * eu * en.height;
			dQ.setTransform(eu, 0, 0, eu, ev - .6 * textLength * text.width, ew), dQ.drawImage(en, 0, 0), dQ.setTransform(eu, 0, 0, eu, ev + .6 * textLength * text.width - eu * en.width, ew), dQ.drawImage(en, 0, 0), dQ.setTransform(1, 0, 0, 1, 0,
				0), dQ.imageSmoothingEnabled = !0
		}
	}
}

function ex() {
	ey.ez(), dQ.setTransform(cS, 0, 0, cS, 0, 0), dQ.imageSmoothingEnabled = cS < 3, dQ.drawImage(dC.f0, aY.ck(), aY.cl()), f1.f2.dP(), dQ.drawImage(f3, aY.ck(), aY.cl()), ey.dP(), f4.dP(), cz.dP(), (aI.bD ? (f5.dP(), aL) : (aa.dP(), aX.dP(), aZ
	.dP(), aL.dP(), aT.dP(), be.dP(), aY.dP(), f6.dP(), f5.dP(), f7.dP(), aR.dP(), aS.dP(), aP.dP(), aO.dP(), aN.dP(), f8)).dP(), aH.dP()
}

function f9(fA, b1, b2) {
	fA.clearRect(0, 0, b1, b2), fA.fillStyle = dK.fB, fA.fillRect(0, 0, b1, b2)
}

function fC(fA, b1, b2, fD) {
	fA.fillStyle = dK.dM, fA.fillRect(0, 0, b1, fD), fA.fillRect(0, 0, fD, b2), fA.fillRect(b1 - fD, 0, fD, b2), fA.fillRect(0, b2 - fD, b1, fD)
}

function dN(fA, aF, aG, fE, fD, fF, fG) {
	fA.fillStyle = dK.dM;
	var fF = Math.floor(fE * fF),
		fI = (fF += (fF - fD) % 2, Math.floor((fF - fD) / 2)),
		fE = Math.floor((fE - fF) / 2);
	fA.fillRect(aF + fE, aG + fE + fI, fF, fD), fG && fA.fillRect(aF + fE + fI, aG + fE, fD, fF)
}

function fK() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 !== aI.data.spawningType || bT.fY.fc(aI.data.spawningData) || (aI.data.spawningType = 0), 2 !== aI.data.spawningType && (aI.data.spawningData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.spawningType && bT.fY.fZ(fN.fa(), aI.data.spawningData, dC.fb - 1)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(5), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj,
			fl = (fi.fk(L(7)), [L(8), L(9), L(10)]),
			value = aI.data.spawningType;
		0 === aI.data.gameMode && (fl.splice(1, 1), 0 < value) && (value = 1);
		fi.fm(new fn({
			fl: fl,
			value: value
		}, function(eI) {
			fU(), aI.data.spawningType = eI, 0 === aI.data.gameMode && 1 === eI && (aI.data.spawningType = 2), 2 !== aI.data.spawningType || aI.data.spawningData || (aI.data.spawningData = new Uint16Array(2 * aI.fo)), aH.eF(
				24)
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi = new fj;
		fi.fk("My Spawn"), fi.fp(new fq({
			value: aI.data.selectableSpawn
		}, L(11), function(value) {
			aI.data.selectableSpawn = value
		})), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj,
			fr = (fi.fk("Seed"), new eH({
				eI: -1,
				value: aI.data.spawningSeed
			}, 1, 0, function(a2) {
				var value = Math.abs(Math.floor(a2.target.value)) % 16384;
				a2.target.value = aI.data.spawningSeed = value
			}));
		fi.fp(fr), fi.fp(new fs([new e9(L(8), function() {
			fr.a2.value = aI.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi;
		2 === aI.data.spawningType && ((fi = new fj).fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.spawningData, 2)), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function fy() {
	this.fz = function(g0) {
		return 0 === g0 ? 1 === aI.aJ && aI.g1 : 1 === g0 ? 1 === aI.aJ && !aI.g1 : 2 === aI.aJ
	}, this.g2 = function(player) {
		return 0 !== bX.g3[player] && 2 !== bX.g4[player]
	}, this.g5 = function(player) {
		return player === aI.bS && 2 !== bX.g4[player]
	}, this.g6 = function(player, g7) {
		return player !== g7 && (0 === g8.g9[player] || g8.g9[player] !== g8.g9[g7])
	}, this.gA = function() {
		return gC.gB < 2 ? 0 : aI.dm ? 1 < f5.gF() : bX.gD[gE[1]]
	}, this.gG = function() {
		var gB = gC.gB;
		if (0 !== gB) {
			if (!aI.dm) return !this.bV(gE[0]);
			for (var g9 = g8.g9, gH = f5.gI(), gJ = gC.gJ, ce = gB - 1; 0 <= ce; ce--) {
				var fF = gJ[ce];
				if (g9[fF] === gH && !this.bV(fF)) return 1
			}
		}
		return 0
	}, this.gK = function(player) {
		return player === aI.bS
	}, this.gL = function(g7, d3) {
		return bX.gM[aI.bS] < d3 * bX.gM[g7]
	}, this.bV = function(player) {
		return player >= aI.gN || 2 === bX.g4[player]
	}, this.gO = function(player) {
		return 0 !== bX.g3[player]
	}, this.gP = function(player) {
		return player < aI.gN
	}, this.gQ = function(gR, gS) {
		return gR !== gS
	}, this.gT = function(player, gU) {
		var min;
		return gU = this.gV(player, gU), bX.gM[player] += gU, bX.gW[player] && (min = Math.min(bX.gW[player], bX.gM[player]), bX.gW[player] -= min, bX.gM[player] -= min), gU
	}, this.gV = function(player, gU) {
		var gX = bX.gM[player];
		return gU = Math.min(gU, bX.gD[player] * aI.gY - gX), gU = Math.min(gU, aI.gZ - gX), Math.max(gU, 0)
	}, this.ga = function(player, gb, gc, gd) {
		var gX = bX.gM[player],
			gb = gf.gg(gX * (gb + 1), 1024),
			gc = gf.gg(gc * gX, 1024),
			gb = Math.min(gb, gX - gc);
		return 10 === aI.dw && (gb = gi.gj(player, gb)), gk.gl[0] = gb, gk.gl[1] = gc, gd <= gb
	}, this.gm = function(player, gn, bP) {
		var player = bX.gM[player],
			gh = gf.gg(64 * player, 1024);
		return gn = Math.min(gn, player - gh), gn = this.gV(bP, gn), gk.gl[0] = gn, gk.gl[1] = gh, 1 <= gn
	}, this.go = function(player, gn, bP) {
		var player = bX.gM[player],
			gh = gf.gg(64 * player, 1024);
		return gn = Math.min(gn, player - gh), this.gV(bP, gn)
	}, this.gp = function(gn, bP) {
		return gn = this.gV(bP, gn), gk.gl[0] = gn, gk.gl[1] = 0, 1 <= gn
	}, this.gq = function(player, gr) {
		return gf.gg(bX.gM[player] * (gr + 1), 1024)
	}, this.gs = function(player, gc) {
		gc = gf.gg(gc * bX.gM[player], 1024);
		gk.gl[1] = gc, bX.gM[player] -= gc
	}, this.gt = function(player, gu) {
		var gx, gz, gv = bX.gM[player];
		return gu <= gv ? bX.gM[player] -= gu : (bX.gM[player] = 0, gz = bX.gW[player] + (gx = 5 * ((gv = gu - gv) >> 2)), h0.h1(player, gx - gv, 12), gz <= aI.h2 ? bX.gW[player] = gz : (bX.gW[player] = aI.h2, h0.h1(player, gz - aI.h2, 18))), gu
	}, this.h3 = function(player, gb) {
		var gM = bX.gM,
			gX = gM[player],
			gb = gf.gg(gX * (gb + 1), 1024),
			gh = Math.max(gf.gg(gX, 10), 1e3);
		return (gb = Math.min(gb, gX - gh)) < 0 ? (gM[player] = 0, gh = Math.min(1e3, gX + aI.h2 - bX.gW[player]), gk.gl[1] = gh, bX.gW[player] += gh - gX, 0) : (gk.gl[1] = gh, 10 === aI.dw && (gb = gi.gj(player, gb)), gM[player] -= gh + gb, gb)
	}, this.h4 = function(player) {
		bX.gM[player] -= gk.gl[0] + gk.gl[1]
	}, this.h5 = function(player, g7) {
		return (g7 = Math.min(g7, aI.fo)) < aI.fo && 0 === bX.g3[g7] && (g7 = aI.fo), (gk.h6[0] = g7) === aI.fo || h7.h8(player, g7)
	}, this.h9 = function(player, bP) {
		return 0 !== bX.g3[bP] && !h7.h8(player, bP)
	}, this.hA = function(player, hB) {
		for (var fF, en = gC.gB, c6 = 0, hC = gE, ce = 0; ce < en; ce++)
			if (fF = hC[ce], !this.bV(fF)) {
				if (player === fF) return !0;
				if (++c6 > hB) return !1
			} return !1
	}, this.hD = function(fF) {
		var hE = aI.dm ? f5.hF() : bX.gD[gE[0]];
		return hE >= gf.gg(fF * aI.hG, 100)
	}, this.hH = function(gU, min, max) {
		return Math.floor(gf.hI(isNaN(gU) ? 0 : Number(gU), min, max))
	}
}

function hJ() {
	this.hK = function() {
		var hN;
		return !(gC.gB < 3 || bX.gD[gE[0]] >= aI.hG >> 1) && (aI.dm ? 9 !== aI.dw && (hN = hO.hP(), !(2 * hO.hR(f5.gI()) >= hN)) : function() {
			if (8 === aI.dw) return !1;
			var hN = hO.hP();
			if (2 * bX.gM[gE[0]] >= hN) return !1;
			return !0
		}())
	}
}

function hS() {
	this.fo = 512, this.gZ = 15e8, this.hT = 1e9, this.h2 = 5e4, this.hU = 512, this.hV = 2, this.bS = 0, this.gN = 0, this.hW = 0, this.hX = 0, this.hY = 0, this.hZ = 512, this.ha = 512, this.gY = 150, this.df = !0, this.bG = 0, this.aJ = 0, this
		.hG = 0, this.bD = !1, this.g1 = 0, this.hb = 0, this.dm = !1, this.hc = 0, this.hd = 0, this.dw = 0, this.dy = 0, this.he = null, this.hf = new hg, this.hh = 30, this.di = 0, this.hi = 0, this.hj = 0, this.hk = 0, this.data = new hl, this
		.eQ = new hm, this.hn = 0, this.ho = "", this.hp = function() {
			hq.turnstile.close(), gk.k(), dj.k(), hr.clear(), this.hW = this.gN = this.data.humanCount, this.df = 1 === this.hW && !__fx.customLobby.isActive(), this.bD = !1, this.bG = this.data.isReplay, this.dw = 0 === this.data.gameMode ? [7, 10,
					8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.dy = this.data.isContest, this.dm = this.dw < 7 || 9 === this.dw, this.dw = 10 === this.dw && this.df ? 7 : this.dw, this.dw = 8 === this
				.dw && 2 !== this.gN ? 7 : this.dw, hs.k(), this.hc = this.data.numberTeams, this.data.teamPlayerCount ? this.hd = +(0 < this.data.teamPlayerCount[0]) : (this.hd = 0, this.dm && this.df && (this.data.teamPlayerCount = new Uint16Array(
					9), this.data.teamPlayerCount.fill(1, 1, this.hc + 1), aI.eQ.ht())), this.hh = this.gN <= 2 ? 30 : this.gN <= 50 ? 40 : 50, this.hb = this.g1 = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data
				.selectableSpawn, this.he = this.g1 ? new hu : null, this.hZ = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.gN) : 1 === eo.hv ? this.hZ = this.gN : this.hZ = this
				.data.playerCount,
				this.ha = this.hZ, this.hX = this.hZ - this.gN, this.hY = 0, this.bS = this.data.selectedPlayer, this.di = 0, this.hi = 0, this.hj = 0, this.hk = 0, hw.hx(this.data.spawningSeed), hO.k(), bX.k(), hy.k(), hz.i0(), du.cO.i1 = [], du.cJ
				.i2 = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), g8.k(), this.aJ = 1, h0.k(), i3(), i4.i5(), i6.i7(), i8.k(), i4.k(), ey.k(), i9.k(), f4.k(), iA.k(),
				iB.iC(), iD.k(), hz.iE(), iF.k(), iG.k(), gC.iH(), eN.k(), f5.k(), f1.k(), aN.k(), iI.putImageData(iJ, 0, 0), aX.k(), aY.k(), aZ.k(), aL.k(), aT.k(), f7.k(), be.k(), aS.k(), f6.k(), aa.k(), aR.k(), aP.k(), aO.k(), iK.k(), iL.k(),
			iM(), iN.k(), cz.k(), gi.k(), iO.k(), iP.k(), iQ.k(), iR.k(), this.hf.k(), aC.iC(), ct.iT(), 0 === bX.g3[aI.bS] && aO.show(!1, !0), cz.iU(!0), f8.k(), aC.ah = !0, this.bG || this.df && this.g1 || ca.cb.setState(1), this.hn = 0
		}, this.iV = function(iW) {
			eN.iX.iY.length ? this.ho = eN.iX.iY : this.ho = eN.iZ.ia(), __fx.replayHistory.save(this.ho), !1 === __fx.customLobby.isActive() && a5.a6.ib(), hr.clear(), this.aJ = 0, aC.ic(), ca.cb.setState(0), aK.setState(0), __fx.customLobby
				.isActive() || hq.dS.show(iW), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.hn ? aH.a6.eM(0) : 1 === this.hn ? aH.eF(19) : aH.eF(5, 5)
		}, this.ie = function() {
			return this.bG ? aS.bE || !aL.ig : this.df && (aS.bE || this.g1)
		}, this.ih = function() {
			return 1 === this.aJ && !this.g1
		}
}

function ii() {
	var ij = 501,
		io = (this.ik = new Uint32Array(ij), this.gX = new Uint32Array(ij), this.il = new Uint16Array(ij), this.im = 0, 1),
		ip = 0;

	function it(self) {
		self.max.fill(0)
	}

	function j4(self, ce) {
		self.max[0] = Math.max(self.ik[ce], self.max[0]), self.max[1] = Math.max(self.gX[ce], self.max[1]), self.max[2] = Math.max(self.il[ce], self.max[2])
	}
	this.max = [0, 0, 0], this.iq = 0, this.ir = new Array(21), this.is = null, this.i5 = function() {
		this.is = [L(12), L(13), L(14), L(15), L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23), L(24), L(25), "", L(26), L(27), L(28), L(29), L(30), L(31)]
	}, this.k = function() {
		this.im = 0, io = 1, this.iq = 0, ip = 0, it(this), this.ir.fill(0)
	}, this.iu = function(player, gb) {
		bT.bU.gK(player) && (this.ir[0] += gb + 1, this.ir[1]++, this.ir[12] += gk.gl[1])
	}, this.iv = function(player, bP) {
		__fx.donationsTracker.logDonation(player, bP, gk.gl[0], be.bf());
		player === aI.bS && (aa.iv(gk.gl[0], gk.gl[1], bP), this.ir[12] += gk.gl[1], this.ir[16] += gk.gl[0]), bP === aI.bS && (aa.iw(gk.gl[0], player), this.ir[10] += gk.gl[0])
	}, this.ix = function(player) {
		bT.bU.gK(player) && (this.ir[2]++, this.ir[12] += gk.gl[1])
	}, this.iy = function(player) {
		bT.bU.gK(player) && (this.ir[19]++, this.ir[12] += gk.gl[1])
	}, this.iz = function(player) {
		bT.bU.gK(player) && this.ir[20]++
	}, this.h1 = function(player, j0, eI) {
		bT.bU.gK(player) && (this.ir[eI] += j0)
	}, this.j1 = function() {
		var self;
		this.iq || 0 < ip-- || ((self = this).ik[self.im] = bX.gD[aI.bS], self.gX[self.im] = bX.gM[aI.bS], self.il[self.im] = hO.j3(aI.bS), j4(self, self.im), self.im++, self.im === ij && function(self) {
			it(self), j4(self, 0), self.im = 1 + gf.gg(ij, 2);
			for (var ce = 1; ce < self.im; ce++) self.ik[ce] = self.ik[2 * ce], self.gX[ce] = self.gX[2 * ce], self.il[ce] = self.il[2 * ce], j4(self, ce);
			io *= 2
		}(self), ip = io - 1, aN.j6(), 0 === bX.g3[aI.bS] && (self.iq = aC.j7()))
	}
}

function j8() {
	var j9, jA, fd, fi;

	function jB() {
		jG.jH !== cs.buffer.data[12].value ? (jG.k(), aH.eF(8, 1, new eS(30))) : aH.eF(1)
	}
	this.show = function() {
			j9.show(), this.resize()
		}, this.c1 = function() {
			j9.c1()
		}, this.resize = function() {
			j9.resize(), jA.resize()
		}, this.b6 = function(ax) {
			2 === ax && j9.fw[0].fx()
		}, j9 = new fP(L(32), [new e9("⬅️ " + L(6), jB), new e9(L(33), function() {
			aH.jC(), cs.jD.jE(), aH.eF(2)
		})]), fd = [], (fi = new fj).fk(L(34)), fi.jI(L(35)), fd.push(fi),
		function(fd) {
			var fi = new fj,
				jU = (fi.fk(L(63)), jG.data.jV());
			fi.fm(new fn({
				fl: jU,
				value: jG.data.jW(jU)
			}, function(eI) {
				return cs.jD.jX(12, jU[eI].split(":")[0]), !0
			})), fd.push(fi)
		}(fd),
		function(fd) {
			var fi = new fj,
				jM = (fi.fk(L(61)), []);
			fi.fp(new fs([new e9(L(62), function(a2) {
				aw.jN();
				for (var ce = 0; ce < jM.length; ce++) jM[ce].a2.value = aw.jO[ce];
				return bT.ed.jP(a2), !0
			}).button]));
			for (var ce = 0; ce < aw.jQ.length; ce++) {
				fi.jI(aw.jQ[ce]);
				for (var jR = 0; jR < 2; jR++) {
					var eI = 2 * ce + jR,
						e3 = new eH({
							value: aw.jO[eI],
							eI: -1
						});
					e3.a2.jS = eI, jM.push(e3), e3.a2.addEventListener("keydown", function(a2) {
						a2.preventDefault();
						var code = a2.code;
						a2.target.value = code, aw.jT(a2.target.jS, code)
					}), jR && (e3.a2.style.marginLeft = "4%"), e3.a2.style.width = "48%", fi.fp(e3)
				}
			}
			fd.push(fi)
		}(fd), (fi = new fj).fk(L(36)), cs.buffer.data[1].fl = [L(37), L(38), L(39), L(40)], fi.fm(new fn(cs.buffer.data[1])), fd.push(fi), (fi = new fj).fk(L(41)), cs.buffer.data[9].fl = [L(38), L(42), L(43)], fi.fm(new fn(cs.buffer.data[9])), fd
		.push(fi), (fi = new fj).fk(L(44)), cs.buffer.data[11].fl = [L(45), L(46), L(47)], fi.fm(new fn(cs.buffer.data[11])), fd.push(fi), (fi = new fj).fk(L(48)), fi.fp(new fq(cs.buffer.data[2])), fd.push(fi), (fi = new fj).fk(L(49)), fi.fp(new fq(
			cs.buffer.data[7])), fd.push(fi), (fi = new fj).fk(L(50)), fi.fp(new fq(cs.buffer.data[8])), fd.push(fi), (fi = new fj).fk(L(51)), fi.fp(new eH(cs.buffer.data[5])), fd.push(fi), (fi = new fj).fk(L(52)), fi.fp(new fq(cs.buffer.data[13], L(
			53))), fi.fp(new fq(cs.buffer.data[14], L(54))), fd.push(fi), (fi = new fj).fk(L(55)), fi.fm(new fn({
			fl: [L(56), L(57), L(58)],
			value: bK.jL
		}, function(ce) {
			bK.jL = ce
		})), fd.push(fi), (fi = new fj).fk(L(59)), fi.fp(new fq(cs.buffer.data[15])), fi.jI(L(60)), fi.fp(new eH(cs.buffer.data[16], 1, 0, function(a2) {
			a2.target.value = gf.hI(Math.floor(a2.target.value), 0, 16)
		})), fd.push(fi), jA = new fR(j9.fS, fd)
}

function jY() {
	aa.j1(), cz.j1(), be.jZ(), a5.a6.j1()
}

function ja() {
	iP.j1(), iL.j1(), hy.j1(), hO.j1(), gi.j1(), iK.j1(), iA.j1(), f4.a6.j1(), gC.jb(), aX.j1(), hs.j1(), iB.j1(), cz.j1(), cz.jc(), be.j1(), f1.j1(), f7.j1(), aR.j1(), iR.jd(), aa.j1(), iO.j1(), aZ.j1(), aT.j1(), h0.j1(), f5.j1(), a5.a6.j1(), a5.je
		.j1(), aH.j1(), hq.dU.j1(), eN.j1(), aC.j1()
}

function jf() {
	ct.j1(), aO.j1(), f6.j1(), f8.j1(), aL.j1(), iQ.j1(), iR.j1(), jg.jh()
}

function ji() {
	aX.iU(!1), aR.iU(), be.iU(!1), f7.iU(), aZ.iU(), aT.iU(), cz.iU(!1), f5.j6()
}

function jj() {
	cz.iU(!1) && (aC.ah = !0), a5.a6.j1()
}

function cR() {
	this.jk = function(player, bP, ge) {
		bT.bU.gm(player, ge, bP) && (hO.jl(player, bP), !bT.bU.bV(bP)) && iA.jm.jn[bP] && iA.jm.jn[bP]--
	}, this.jo = function(player, bP, ge) {
		bT.bU.gp(ge, bP) ? hy.jp(bP, gk.gl[0]) && (hr.bO(player, bP, gk.gl[0], 1), bT.bU.gT(bP, gk.gl[0]), h0.iv(player, bP), cz.jq(bP, gk.gl[0])) : h0.h1(player, ge, 12)
	}
}

function jr() {
	var b1, b2, js;

	function kO(kP, gy, kM, jx, kH) {
		gy = kN(kP, gy + 1 + 2 * jx & 3);
		! function(kP, kQ) {
			return 1 < Math.abs(kP % b1 - kQ % b1) || 1 < Math.abs(kT(kP) - kT(kQ))
		}(kP, gy) && 0 === kH[gy << 2] && (kH[gy << 2] = kM)
	}

	function kT(fF) {
		return Math.floor((fF + .5) / b1) % b2
	}

	function kN(fF, gy) {
		return fF + js[gy]
	}
	this.eP = function(bb) {
		var ce, jt, en, jv, jy = jz;
		for (k0.cA.k1(k0.cA.k2(bb)), dC.k3.k4[dC.k5].b1 = dC.dD = b1 = jy.k6(12), dC.k3.k4[dC.k5].b2 = dC.dE = b2 = jy.k6(12), js = [-b1, -1, b1, 1], dC.f0 = document.createElement("canvas"), dC.f0.width = dC.dD, dC.f0.height = dC.dE, dC.kB = dC
			.f0.getContext("2d", {
				alpha: !1
			}), dC.kC = dC.kF = null, dC.kC = dC.kB.getImageData(0, 0, dC.dD, dC.dE), dC.kF = dC.kC.data, bT.fY.kG(dC.kF), en = jy.k6(12), jt = jy.k6(5), jv = k8(b1 * b2 - 1), ce = 0; ce < en; ce++) ! function(ju, fF, jw, jx) {
			var ce, gy, jy = jz,
				kH = dC.kF,
				kI = fF,
				kJ = fF,
				kK = 0,
				kL = 1 + jw,
				kM = 2 - jw;
			for (kH[fF << 2] = kL, ce = 0; ce < ju; ce++) gy = jy.k6(2), fF = kN(fF, gy), kH[fF << 2] === kL ? kK % 2 == 1 && kO(kJ, kK + 2 * jx + 3, kM, jx, kH) : kH[fF << 2] = kL, kO(fF, gy, kM, jx, kH), kO(kJ, gy, kM, jx, kH), kJ = fF,
				kK = gy;
			kN(fF, 0) === kI ? (kO(fF, 0, kM, jx, kH), kO(kI, 0, kM, jx, kH)) : kN(fF, 1) === kI && (kO(fF, 0, kM, jx, kH), kO(kI, 2, kM, jx, kH));
			0 === ju && (kO(kI, 0, kM, jx, kH), kO(kI, 2, kM, jx, kH))
		}(jy.k6(jt), jy.k6(jv), 1 === jy.k6(1), 1 === jy.k6(1));
		var aF, aG, kU, kV, kW, kX, kH = dC.kF,
			kY = !0,
			kZ = dC.k3.k4[dC.k5].kZ,
			ka = dC.k3.k4[dC.k5].ka;
		for (aG = 0; aG < b2; aG++)
			for (kV = !0, kW = kY, aF = kX = 0; aF < b1; aF++) kU = 4 * aG * b1 + 4 * aF, kX <= aF && 0 < kH[kU] && (kW = 2 === kH[kU], kV) && (kV = !1, kW !== kY) ? (kY = kW, kX = aF + 1, aF = -1) : (kW ? (kH[kU] = ka[0], kH[1 + kU] = ka[1], kH[
				2 + kU] = ka[2]) : (kH[kU] = kZ[0], kH[1 + kU] = kZ[1], kH[2 + kU] = kZ[2]), kH[3 + kU] = 255);
		dC.kB.putImageData(dC.kC, 0, 0), dC.kD = !0, dC.kE.k(), aC.ah = !0
	}
}

function dV() {
	var kb = null,
		kc = 2e4,
		kd = 0;
	this.j1 = function() {
		aC.aD < kc || (kc = aC.aD + 1e4, 0 !== ca.id) || kb || hq.dY() || (a5.a6.ke(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || a5.kf.kg(5) : kc = aC.aD + 1e3)
	}, this.jp = function(ax) {
		kb = ax
	}, this.show = function() {
		return !(!kb || aC.aD < kd) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (kd = aC.aD + 6e4, (new kh).show(kb.ki, kb.colors, kb.id), !(kb = null)))
	}
}

function i3() {
	(f3 = void 0 === f3 ? document.createElement("canvas") : f3).width = dC.dD, f3.height = dC.dE, iI = f3.getContext("2d", {
		alpha: !0
	}), iJ = kj = null, iJ = iI.getImageData(0, 0, dC.dD, dC.dE), kj = iJ.data, bT.fY.kG(kj)
}

function kk() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 === aI.data.playerNamesType && 1 === bT.fY.fc(aI.data.playerNamesData).length && (aI.data.playerNamesType = 0), 2 !== aI.data.playerNamesType && (aI.data.playerNamesData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.playerNamesType && bT.fY.kl(fN.fa(), aI.data.playerNamesData, 20)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(64), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(65), L(66), L(10)],
			value: aI.data.playerNamesType
		}, function(eI) {
			fU(), aI.data.playerNamesType = eI, aH.eF(23)
		})), fi.fp(new km), fi.fp(new fq({
			value: aI.data.selectableName
		}, L(67), function(value) {
			aI.data.selectableName = value
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi;
		2 === aI.data.playerNamesType && ((fi = new fj).fk("Data"), fN = new ft(0, 1, 0, 1), aI.data.playerNamesData && aI.data.playerNamesData.length === aI.fo || (aI.data.playerNamesData = new Array(aI.fo), aI.data.playerNamesData.fill(
			"")), fN.fu(bT.bZ.fv(aI.data.playerNamesData, 1, '"')), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function kn() {
	function lH(player, ge, l5, lC) {
		var g7;
		if (i4.l8(l5)) g7 = aI.fo;
		else {
			if ((g7 = i4.l9(l5)) === player) return void h0.h1(player, ge - bT.bU.gT(player, ge), 12);
			if (!h7.h8(player, g7)) return void du.cQ.jo(player, g7, ge)
		}
		iN.lR(player, g7) || iN.lS(player) ? (bX.lT[player].push(lC << 2), iN.jp(player, ge, g7), iK.lU(player, !0)) : h0.h1(player, ge, 12)
	}
	this.j1 = function() {
		for (var ko = f4.a6.ko, kp = f4.a6.kp, kq = f4.a6.kq, ce = f4.a6.kr - 1; 0 <= ce; ce--) 65535 === kq[ce] && function(ce, lC, l0) {
			if (6 === l0) {
				if (f4.ku.lD(ce, lC)) return f4.a6.lE[ce]++, f4.a6.kq[ce] = 0, 0
			} else {
				var player = f4.a6.lF[ce] >> 3,
					ce = f4.a6.lG[ce];
				h0.iz(player), l0 < 4 ? lH(player, ce, lC + i9.l6[l0] << 2, lC) : 4 === l0 ? function(player, ge, lC) {
					var ce, lK, lL = i9.lM,
						lN = i9.lO(lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.l8(lK)) return lH(player, ge, lK, lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.lP(lK) && !i4.lQ(player, lK)) return lH(player, ge, lK, lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.lP(lK)) return lH(player, ge, lK, lC)
				}(player, ce, lC) : 5 === l0 && function(player, ge, lC) {
					var ce, lK, lL = i9.lM,
						lN = i9.lO(lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.lP(lK) && i4.lQ(player, lK)) return lH(player, ge, lK, lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.lP(lK)) return lH(player, ge, lK, lC);
					for (ce = 0; ce < 4; ce++)
						if (lK = lN + lL[ce], i4.l8(lK)) return lH(player, ge, lK, lC)
				}(player, ce, lC)
			}
			return 1
		}(ce, i9.kt(kp[ce]), ko[ce] % 64) && (f4.ku.kv(ce), f4.kw.kx(ce))
	}, this.ky = function(player, kz, l0, l1, ge) {
		if (!(5 <= l0)) {
			var l2 = aI.bS;
			if (bT.bU.g2(l2) && h7.h8(player, l2) && player !== l2 && 0 !== bX.l3[l2].length && bT.bU.gL(player, 5)) {
				for (var l5, l4 = !1, ce = 0; ce < 4; ce++)
					if (l5 = kz + i9.l6[ce] << 2, i4.l7(l5) && !i4.l8(l5) && i4.l9(l5) === l2) {
						l4 = !0;
						break
					} l4 && (aa.lA(719, 0), l0 = ge < 25e3 ? L(68) + " (" + bT.bZ.ba(ge) + ") ⛵" : L(69) + " (" + bT.bZ.ba(ge) + ") 🚢", aa.bW(180, l0, 719, player, dK.lB, dK.fB, -1, !0, void 0, {
					gv: 1,
					l1: l1
				}))
			}
		}
	}
}

function lV() {
	this.lW = new lX
}

function lY() {
	this.lZ = new la, this.result = new dZ, this.dk = new lb, this.lc = new ld, this.le = new lf, this.lg = new lh, this.k = function() {
		this.result.k()
	}
}

function li() {
	this.size = 0, this.eI = 0, this.lj = null, this.k = function(lj) {
		this.eI = 0, this.lj = lj, this.size = lj.length
	}, this.lk = function() {
		this.lj = null
	}, this.k6 = function(size) {
		for (var gU = 0, lj = this.lj, cu = this.eI + size - 1, ce = this.eI; ce <= cu; ce++) gU |= (lj[ce >> 3] >> 7 - (7 & ce) & 1) << cu - ce;
		return this.eI += size, this.eI > 8 * this.size && console.error("Unwrapper Overflow"), gU
	}, this.ll = function(size) {
		var gv = size >> 1;
		return (1 << gv) * this.k6(size - gv) + this.k6(gv)
	}, this.lm = function(ln) {
		return this.size === lo.lp(ln)
	}, this.lq = function(lr, ls, lt) {
		var lu = this.k6(lr);
		if (!lu) return null;
		for (var lr = Math.max(lu, lt), jU = new(ls <= 8 ? Uint8Array : ls <= 16 ? Uint16Array : Uint32Array)(lr), ce = 0; ce < lu; ce++) jU[ce] = this.k6(ls);
		lt = jU[lu - 1];
		return lt && jU.fill(lt, lu), jU
	}, this.lv = function(lr, lw, lt) {
		var lu = this.k6(lr);
		if (!lu) return null;
		for (var lr = Math.max(lu, lt), jU = new Array(lr), ce = 0; ce < lu; ce++) jU[ce] = this.lx(lw);
		return jU.fill(jU[lu - 1], lu), jU
	}, this.lx = function(lr) {
		return k0.ly.lz(this.k6(lr))
	}, this.m0 = function() {
		var bb = c9.cA.m1(c9.cA.m2(this.k6(30))),
			bb = bT.bZ.m3(bb, "_", "/");
		bb = bT.bZ.m3(bb, "-", "+");
		for (var m4 = "";
			(bb.length + m4.length) % 4;) m4 += "=";
		bb = "data:image/png;base64," + bb + m4;
		var m5 = new Image;
		m5.onload = function() {
			eN.eO.m6(m5), m5.onload = null, m5 = null
		}, m5.src = bb
	}
}

function m7() {
	this.m8 = function(m9, mA) {
		lo.iE(11), lo.mB(1, 0), lo.mB(6, 4), lo.mB(1, mA ? 1 : 0), lo.mB(3, 0 === aI.aJ ? b7.b8 ? 6 : 0 : aI.bG ? 1 : aI.df ? 7 : aI.dw < 7 ? 2 : 8 === aI.dw ? 4 : 9 === aI.dw ? 5 : 3), a5.a6.send(m9, lo.lj)
	}, this.mC = function() {
		lo.iE(58), lo.mB(1, 0), lo.mB(6, 5), lo.mB(8, a5.a6.mD), lo.mB(10, jg.mE), lo.mB(9, jg.mF), lo.mB(10, eo.mG), lo.mB(14, eo.mH), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mI = function(kz) {
		lo.iE(27), lo.mB(1, 1), lo.mB(4, 0), lo.mB(22, kz), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mJ = function(gb, g7) {
		lo.iE(25), lo.mB(1, 1), lo.mB(4, 1), lo.mB(10, gb), lo.mB(10, g7), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mK = function(gb, bP) {
		lo.iE(24), lo.mB(1, 1), lo.mB(4, 2), lo.mB(10, gb), lo.mB(9, bP), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mL = function(gb, mM) {
		lo.iE(42), lo.mB(1, 1), lo.mB(4, 3), lo.mB(10, gb), lo.mB(27, mM), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mN = function(gb, l1) {
		lo.iE(31), lo.mB(1, 1), lo.mB(4, 4), lo.mB(10, gb), lo.mB(16, l1), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mO = function(g7) {
		lo.iE(15), lo.mB(1, 1), lo.mB(4, 5), lo.mB(10, g7), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mP = function(eI) {
		lo.iE(15), lo.mB(1, 1), lo.mB(4, 6), lo.mB(10, eI), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mQ = function(mR) {
		lo.iE(6), lo.mB(1, 1), lo.mB(4, 7), lo.mB(1, mR), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mS = function() {
		lo.iE(5), lo.mB(1, 1), lo.mB(4, 8), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mT = function(gb, kz, g7) {
		lo.iE(47), lo.mB(1, 1), lo.mB(4, 10), lo.mB(10, gb), lo.mB(10, g7), lo.mB(22, kz), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mU = function(mV, mW) {
		lo.iE(24), lo.mB(1, 1), lo.mB(4, 15), lo.mB(9, mW), lo.mB(10, mV), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mX = function(mY) {
		lo.iE(14), lo.mB(1, 1), lo.mB(4, 14), lo.mB(9, mY), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.mZ = function(ma, target) {
		var ce, en = ma.length;
		for (lo.iE(14 + 9 * en), lo.mB(1, 1), lo.mB(4, 13), lo.mB(9, target), ce = 0; ce < en; ce++) lo.mB(9, ma[ce]);
		a5.a6.send(a5.a6.a8, lo.lj)
	}
}

function mb() {
	var mc = 0,
		md = !0;

	function mi(id) {
		id = [L(70), L(71), L(72), L(73)][id];
		aa.mk(id)
	}
	this.j1 = function() {
		var mf, mg;
		aC.aD < mc || (mc = aC.aD + 3e3, aI.bG) || aI.df || bT.bU.g2(aI.bS) || (mf = new Date, mg = mf.getUTCSeconds(), md ? mg < 43 && (md = !1) : mg < 43 || (mc += 52e3, md = !0, (mg = (mf.getUTCMinutes() + 2) % 60) % 10 == 0 ? aI.dw < 7 && mi(
			0) : mg % 10 == 5 ? 7 !== aI.dw && 10 !== aI.dw || mi(1) : mg % 10 == 7 ? 8 === aI.dw && mi(2) : mg % 10 == 2 && 9 === aI.dw && mi(3)))
	}
}

function ml() {
	var mm = new Uint8Array(64);
	this.k = function() {
		var ce;
		for (mm[0] = 45, mm[37] = 95, ce = 0; ce < 10; ce++) mm[ce + 1] = 48 + ce;
		for (ce = 0; ce < 26; ce++) mm[ce + 11] = 65 + ce, mm[ce + 38] = 97 + ce
	}, this.m2 = function(mn) {
		for (var jy = jz, mo = new Uint8Array(mn), ce = 0; ce < mn; ce++) mo[ce] = jy.k6(6);
		return mo
	}, this.m1 = function(mo) {
		for (var en = mo.length, mp = mm, jU = [], ce = 0; ce < en; ce++) jU.push(String.fromCharCode(mp[mo[ce]]));
		return jU.join("")
	}, this.ba = function(value, mq) {
		for (var mp = mm, jU = [], ce = 0; ce < mq; ce++) jU.push(String.fromCharCode(mp[value >> 6 * (mq - 1 - ce) & 63]));
		return jU.join("")
	}
}

function mr() {
	this.k = function() {
		if (0 === aI.data.sResourcesType) {
			for (var mv = aI.gN, gM = bX.gM, ce = 0; ce < mv; ce++) gM[ce] = 512;
			var mw = aI.hZ,
				mx = iD.mx,
				ge = iD.ge;
			for (ce = mv; ce < mw; ce++) gM[ce] = mx[ge[ce]]
		} else(1 === aI.data.sResourcesType ? function() {
			for (var en = aI.hZ, gM = bX.gM, sResourcesValue = aI.data.sResourcesValue, ce = 0; ce < en; ce++) gM[ce] = sResourcesValue
		} : function() {
			for (var en = aI.hZ, gM = bX.gM, sResourcesData = aI.data.sResourcesData, ce = 0; ce < en; ce++) gM[ce] = sResourcesData[ce]
		})();
		h0.ir[8] = bX.gM[aI.bS]
	}
}

function my() {
	var mz, b2, n0, n1, n2, n3, n4, n5, n6;

	function cl() {
		return aZ.nU(aa.nQ()) ? aT.af ? __fx.settings.keybindButtons ? aZ.aG - 2 * aZ.b2 - 3 * n0 : aZ.aG - aZ.b2 - 2 * n0 : __fx.settings.keybindButtons ? aZ.aG - aZ.b2 - 2 * n0 : aZ.aG - n0 : aL.nU(aa.nT()) ? aT.af ? aL.cl() - aZ.b2 - 2 * n0 : aL
			.cl() - n0 : aT.af ? aA.b2 - aZ.b2 - (nV.nW() + 1) * n0 : aA.b2 - nV.nW() * dO.gap
	}

	function nF(mf, bb, id, fF, nJ, nK, kQ, nL, nM, nN, nh) {
		var ce, fA, ni, bx, nj = void 0 !== nM,
			b1 = Math.floor(f6.measureText(bb, aa.nI) + 1.5 * n1 + (nj ? b2 : 1.5 * n1));
		if (aC.ah = !0, nh || hr.bW(bb, nM), b1 + 2 * n0 + aZ.b2 > aA.b1 && !nj && 50 !== id && 20 < bb.length) nF(mf, (nh = bT.bZ.nk(bb))[0], id, fF, nJ, nK, kQ, nL, nM, nN, !0), nF(mf, nh[1], id, fF, nJ, nK, kQ, nL, nM, nN, !0);
		else if (nh = b1 + (50 === id ? n2 : 0), (ni = document.createElement("canvas")).width = b1, ni.height = b2, (fA = ni.getContext("2d", {
				alpha: !0
			})).font = aa.nI, bT.ed.textBaseline(fA, 1), bT.ed.textAlign(fA, 0), fA.clearRect(0, 0, b1, b2), fA.fillStyle = nK, fA.fillRect(0, 0, b1, b2), fA.fillStyle = nJ, fA.fillText(bb, Math.floor(1.5 * n1), Math.floor(b2 / 2)), nj && (fA
				.imageSmoothingEnabled = !0, nl.kH.nm(nM, fA, b1 - b2, 0, b2)), 0 === (bx = {
				aD: mf,
				bb: bb,
				id: id,
				player: fF,
				canvas: ni,
				nJ: nJ,
				nK: nK,
				b1: b1,
				nR: nh,
				kQ: kQ,
				nL: nL,
				nM: nM,
				nN: nN
			}).aD || 0 < mz.length && 0 < mz[0].aD) mz.unshift(bx);
		else {
			for (ce = 1; ce < mz.length; ce++)
				if (0 < mz[ce].aD) return void mz.splice(ce, 0, bx);
			mz.push(bx)
		}
	}

	function nG(au, bi, gv) {
		return "rgb(" + au + "," + bi + "," + gv + ")"
	}

	function no(id, lu) {
		for (var en = mz.length, ce = 0; ce < en; ce++) mz[ce].id === id && lu-- <= 0 && (mz.splice(ce, 1), ce--, en--)
	}

	function np(id, player) {
		for (var l4 = !1, ce = mz.length - 1; 0 <= ce; ce--) mz[ce].id !== id || player !== aI.fo && mz[ce].player !== player || (mz.splice(ce, 1), l4 = !0);
		return l4
	}

	function oa(bb) {
		nF(340, bb, 6, 0, nG(215, 245, 255), dK.fB, -1, !1)
	}
	this.n7 = "", this.k = function() {
		var self;
		n5 = 0, n4 = ca.cb.cc() ? 7 : 12, n3 = {
			n8: [0, 0, 0],
			n9: [0, 0, 0],
			nA: [220, 180, 180],
			nB: [0, 0, 0],
			ax: [0, 0, 0]
		}, mz = [], this.resize(), aI.g1 && this.nC(0, 18), dC.k3.k4[dC.k5].name.length && oa(L(116, [dC.k3.k4[dC.k5].name])), dC.k3.k4[dC.k5].ob && oa(L(117, [dC.k3.k4[dC.k5].ob])), oa(L(118, [dC.dD - 2 + "x" + (dC.dE - 2)])), oa(L(119, [bT
			.bZ.ba(i6.oc)
		])), i6.oc !== i6.od && oa(L(120, [bT.bZ.ba(i6.od) + " (" + bT.bZ.oe(100 * i6.od / i6.oc, 1) + ")"])), 0 < i6.og && oa(L(96, [bT.bZ.ba(i6.og) + " (" + bT.bZ.oe(100 * i6.og / i6.oc, 1) + ")"])), 0 < i6.oh && oa(L(121, [bT.bZ.ba(i6
			.oh) + " (" + bT.bZ.oe(100 * i6.oh / i6.oc, 1) + ")"
		])), 10 === aI.dw && nF(120, L(122), 6, 0, nG(235, 255, 120), dK.fB, -1, !1), 0 !== (self = this).n7.length && (nF(200, self.n7, 0, 0, dK.dM, dK.fB, -1, !1), self.n7 = ""), aI.dy && nF(340, L(74), 6, 0, nG(255, 200, 0), dK.fB, -1, !1)
	}, this.resize = function() {
		var nH, ce;
		if (b2 = (b2 = Math.floor((ca.cb.cc() ? .031 : .0249) * aA.cd)) < 10 ? 10 : b2, this.fontSize = Math.floor(2 * b2 / 3), this.nI = bT.ed.ef(1, this.fontSize), n0 = dO.gap, n1 = Math.floor(b2 / 5), 0 < mz.length)
			for (nH = mz, mz = [], ce = nH.length - 1; 0 <= ce; ce--) nF(nH[ce].aD, nH[ce].bb, nH[ce].id, nH[ce].player, nH[ce].nJ, nH[ce].nK, nH[ce].kQ, nH[ce].nL, nH[ce].nM, nH[ce].nN, !0);
		this.nO()
	}, this.nO = function() {
		n6 = document.createElement("canvas");
		var bb = L(75),
			fA = (n2 = f6.measureText(bb, this.nI) + 5 * n1, n6.height = b2, n6.width = n2, n6.getContext("2d", {
				alpha: !0
			}));
		fA.font = this.nI, bT.ed.textBaseline(fA, 1), bT.ed.textAlign(fA, 1), fA.clearRect(0, 0, n2, b2), fA.fillStyle = dK.nP, fA.fillRect(0, 0, n2, b2), fA.fillStyle = dK.dM, fA.fillText(bb, Math.floor(n2 / 2), Math.floor(b2 / 2))
	}, this.nQ = function() {
		var en;
		return aT.af ? aT.b1 : 0 === (en = mz.length) ? 0 : 1 === en ? mz[0].nR : nS(mz[0].nR, mz[1].nR)
	}, this.nT = function() {
		var en = mz.length;
		return aT.af ? en ? nS(aT.b1, mz[0].nR) : aT.b1 : 0 === en ? 0 : 1 === en ? mz[0].nR : 2 === en ? nS(mz[0].nR, mz[1].nR) : nS(nS(mz[0].nR, mz[1].nR), mz[2].nR)
	}, this.m = function(aF, aG) {
		for (var na, cj, nX = cl(), ce = mz.length - 1; 0 <= ce; ce--)
			if ((cj = nX - (ce + 1) * b2) <= aG && aG < cj + b2) return 50 === mz[ce].id ? aF >= aA.b1 - n2 - n0 - mz[ce].b1 && (aF >= aA.b1 - n2 - n0 ? du.bU.nY(mz[ce].player) : ct.nZ(mz[ce].player, 800, !1, 0), !0) : aF >= aA.b1 - mz[ce].b1 -
				n0 && (736 === mz[ce].id ? window.open("https://" + mz[ce].bb, "_blank") : mz[ce].nL && (mz[ce].nN && mz[ce].nN.jR ? (cj = mz[ce].nN.kz, na = i9.nb(cj) - 10, cj = i9.nd(cj) - 10, ct.ne(na, cj, 19 + na, 19 + cj)) : mz[ce].nN &&
					mz[ce].nN.gv ? ct.nf(mz[ce].player, mz[ce].nN.l1) : (ct.nZ(mz[ce].player, 800, !1, 0), 0 <= mz[ce].kQ && (na = mz[ce].kQ, mz[ce].kQ = mz[ce].player, mz[ce].player = na))), !0);
		return !1
	}, this.bW = function(mf, bb, id, fF, nJ, nK, kQ, nL, nM, nN) {
		nF(mf, bb, id, fF, nJ, nK, kQ, nL, nM, nN)
	}, this.ng = function(mj) {
		nF(300, mj, 252, 0, dK.dM, dK.fB, -1, !1)
	}, this.nn = function(id) {
		for (var ce = mz.length - 1; 0 <= ce; ce--) mz[ce].id === id && (mz[ce].aD = 1)
	}, this.nC = function(player, id) {
		0 === id ? (f6.jp(player, 0), no(423, 2), nF(160, L(76, [bX.bY[player]]), 423, player, "rgb(10,220,10)", dK.fB, -1, !1)) : 1 === id ? (np(50, aI.fo), f6.jp(player, 1), nF(360, L(77, [bX.bY[player]]), 0, player, dK.nq, dK.fB, -1, !0), ct
			.nZ(player, 2700, !1, 0)) : 2 === id ? (f6.jp(player, 2), nF(0, L(78), 0, player, "rgb(10,255,255)", dK.fB, -1, !0), ct.nZ(player, 2700, !1, 0)) : 3 === id ? (f6.jp(player, 2), nF(0, L(79, [bX.bY[player]]), 0, player, dK.dM, dK
			.fB, -1, !0), ct.nZ(player, 2700, !1, 0)) : 4 === id ? this.nr(1, player, player) : 5 === id ? bT.bU.bV(aI.bS) || (function(id, oE) {
			var ce, oF = 0,
				en = mz.length;
			for (ce = 0; ce < en; ce++)
				if (mz[ce].id === id && oE <= ++oF) return mz.splice(ce, 1)
		}(1, 5), cz.nt(player) && nF(180, L(80, [bX.bY[player]]), 1, player, nG(255, 200, 180), dK.fB, -1, !0), bT.bU.gL(player, 10) && (no(573, 0), nF(180, L(81, [bX.bY[player]]), 573, player, dK.nq, dK.fB, -1, !0))) : 18 === id ? nF(255, L(
			82), 18, 0, dK.dM, dK.fB, -1, !1) : 21 === id ? nF(220, L(83), id, 0, dK.dM, dK.fB, -1, !1) : 22 === id ? this.nr(2, player, player) : 59 === id && nF(0, L(84), id, 0, dK.nu, dK.fB, 0, !1)
	}, this.nv = function(mj) {
		nF(200, L(85, [mj]), 94, 0, dK.dM, dK.nw, -1, !1)
	}, this.nx = function(ny) {
		if (aI.bS === ny && !aI.df && !aI.bG)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			nF(0, "Your Win Count is now " + __fx.wins.count, 3, ny, dK.dM, dK.fB, -1, !0);
		bX.gD[ny] && (f6.jp(ny, 2), aI.gN < 100 ? nF(0, L(79, [bX.bY[ny]]), 3, ny, dK.dM, dK.fB, -1, !0) : nF(0, L(86, [bX.bY[ny]]), 3, ny, dK.dM, dK.fB, -1, !0))
	}, this.nz = function(d5) {
		var bb, o3, o0 = "(" + i9.nb(d5 >> 2) + ", " + i9.nd(d5 >> 2) + ")",
			nL = !1,
			player = 0;
		i4.l7(d5) ? i4.l8(d5) ? o0 = L(87, [o0]) : (player = i4.l9(d5), aI.bG && !1 === __fx.hoveringTooltip.active && (aI.bS = player), bb = L(88, [bT.fA.o1(bX.o2[player], bT.ed.ef(0, 10), 150)]) + "   ", bb = (bb += L(89, [bT.bZ.ba(bX.gM[
			player])]) + "   ") + L(90, [bT.bZ.ba(bX.gD[player])]) + "   ", aI.dm && (o3 = g8.o4[g8.o5[g8.g9[player]]], bb += L(91) + ": " + o3 + "   "), bT.bU.bV(player) && (bb += L(92) + ": " + iD.o6[iD.ge[player]] + "   "), o0 = bb = (
			bb += L(93, [player]) + "   ") + L(94, [o0]), nL = !0) : o0 = i4.o7(d5) ? L(95, [o0]) + "   #" + i4.o8(d5) : L(96, [o0]), no(55, 0), nF(220, o0, 55, player, dK.dM, dK.fB, -1, nL, void 0, void 0, !0)
	}, this.o9 = function(oA) {
		var ju = f4.a6,
			player = ju.lF[oA] >> 3,
			bb = (aC.ah = !0, no(55, 0), L(97, [bX.bY[player]]) + "   ");
		nF(220, bb += L(89, [bT.bZ.ba(ju.lG[oA])]), 55, player, dK.dM, dK.fB, -1, !0)
	}, this.oB = function(oC, mY, bc) {
		oC === aI.bS ? nF(175, " " + L(98, [bX.bY[mY]]) + ": ", 1001, mY, nG(200, 255, 210), dK.fB, -1, !0, bc) : this.oD(oC, bc)
	}, this.oD = function(oC, bc) {
		no(1e3, 0), nF(175, bX.bY[oC] + ": ", 1e3, oC, dK.dM, "rgba(5,60,25,0.9)", -1, !0, bc)
	}, this.oG = function() {
		var mj;
		aI.hi ? (mj = L(99), f6.oH(L(100), 2, 1, 12), nF(0, mj, 40, 0, "rgb(10,220,10)", dK.fB, -1, !1)) : (mj = L(101), f6.oH(L(102), 2, 0, 16), nF(0, mj, 41, 0, dK.dM, dK.fB, -1, !1))
	}, this.oI = function() {
		var lu = bX.bY,
			gy = aI.data;
		nF(300, lu[0] + " [" + aI.hf.oJ(gy.elo[0]) + "] vs " + lu[1] + " [" + aI.hf.oJ(gy.elo[1]) + "]", 65, 0, dK.oK, "rgba(100,255,255,0.75)", -1, !1)
	}, this.mk = function(mj) {
		nF(350, mj, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.oL = function(oM) {
		nF(0, L(oM ? 103 : 104), 247, 0, dK.oN, dK.fB, -1, !1)
	}, this.oO = function(oP, oQ, oR) {
		var gy = aI.data,
			lu = bX.bY;
		nF(0, lu[0] + ": " + aI.hf.oJ(gy.elo[0]) + " -> " + oP, 66, 0, dK.dM, oR[0], -1, !1), nF(0, lu[1] + ": " + aI.hf.oJ(gy.elo[1]) + " -> " + oQ, 66, 1, dK.dM, oR[1], -1, !1)
	}, this.oS = function(player, id) {
		0 === id ? np(50, player) ? (nF(128, L(105, [bX.bY[player]]), 52, player, nG(180, 255, 180), dK.fB, -1, !0), cz.oT(player, 2, 255)) : nF(384, L(106, [bX.bY[player]]), 51, player, nG(210, 210, 255), dK.fB, -1, !0) : np(51, player) ? (nF(
			128, L(107, [bX.bY[player]]), 52, player, dK.dM, "rgba(60,120,10,0.9)", -1, !0), cz.oT(player, 2, 255)) : (nF(384, L(108, [bX.bY[player]]), 50, player, dK.dM, "rgba(90,90,90,0.9)", -1, !0), cz.oT(player, 2, 96))
	}, this.oU = function(n8, target) {
		var color = nG(210, 255, 210);
		1 < n8.length ? nF(230, L(109, [n8.length, bX.bY[target]]), 66, target, color, dK.fB, -1, !0) : nF(230, L(110, [bX.bY[n8[0]], bX.bY[target]]), 66, n8[0], color, dK.fB, target, !0)
	}, this.oV = function(player, target) {
		nF(230, L(111, [bX.bY[player], bX.bY[target]]), 66, player, dK.dM, "rgba(75,65,5,0.9)", target, !0)
	}, this.lA = function(id, lu) {
		no(id, lu)
	}, this.oW = function(id, player) {
		np(id, void 0 === player ? aI.fo : player)
	}, this.oX = function(id) {
		for (var ce = mz.length - 1; 0 <= ce; ce--)
			if (mz[ce].id === id) return mz[ce];
		return null
	}, this.iv = function(bQ, oY, player) {
		2 !== bX.g4[aI.bS] && nF(200, 1 === bQ ? L(112, [bX.bY[player]]) : L(113, [bT.bZ.ba(bQ), bX.bY[player]]), 30, player, "rgb(190,255,190)", dK.fB, -1, !0)
	}, this.iw = function(bQ, player) {
		2 !== bX.g4[aI.bS] && (no(31, 0), bQ = " (" + bT.bZ.ba(bQ) + ") 💸", nF(150, bQ = bT.bU.bV(player) ? L(114) + bQ : L(115, [bX.bY[player]]) + bQ, 31, player, dK.oK, "rgba(205,205,205,0.9)", -1, !0))
	}, this.oi = function(oj) {
		for (var ax = aC.j7(), ce = 2; 0 <= ce; ce--) 0 < n3.nB[ce] && (oj || n3.ax[ce] < ax - 220) && this.ok(ce)
	}, this.ok = function(id) {
		var bb, en = n3.nB[id],
			player = n3.n8[id];
		n3.nB[id] = 0, 1 === en ? (0 === id ? bb = L(123, [bX.bY[player], bX.bY[n3.n9[0]]]) : 1 === id ? bb = L(124, [bX.bY[player]]) : 2 === id ? bb = L(125, [bX.bY[player]]) : 3 === id && (bb = L(126, [bX.bY[player]])), no(7, 0), nF(n3.nA[id],
			bb, 7, n3.n9[id], dK.dM, dK.fB, -1, !0)) : (bb = L(0 === id ? 127 : 1 === id ? 128 : 129, [en]), no(7, 0), nF(n3.nA[id], bb, 7, player, dK.dM, dK.fB, -1, !1))
	}, this.nr = function(id, kP, kQ) {
		var ax = aC.j7(),
			en = n3.nB[id] + 1;
		n3.nB[id]++, n3.n8[id] = kP, n3.n9[id] = kQ, 1 === en && (n3.ax[id] = ax), (1 === en && (aI.hW < 32 || 2 === aI.aJ) || 1 < en && (n3.ax[id] < ax - 140 || 2 === aI.aJ)) && this.ok(id)
	}, this.j1 = function() {
		ol.j1();
		for (var om = (om = mz.length - n4) <= 1 ? 1 : om * om, ce = mz.length - 1; 0 <= ce; ce--) 0 < mz[ce].aD && (mz[ce].aD -= om, mz[ce].aD <= 0) && (aC.ah = !0, mz.splice(ce, 1));
		! function() {
			var lu, ce;
			if (128 !== n5 && !(++n5 < 128))
				for (lu = 5, ce = gC.gB - 1; 0 <= ce; ce--) 1 === bX.g4[gC.gJ[ce]] && 0 < lu-- && nF(240, L(126, [bX.bY[gC.gJ[ce]]]), 1, gC.gJ[ce], dK.oK, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.oi(!1)
	}, this.dP = function() {
		for (var oo, aG = cl(), ce = mz.length - 1; 0 <= ce; ce--) oo = aG - (ce + 1) * b2, 50 === mz[ce].id ? (dQ.drawImage(mz[ce].canvas, aA.b1 - mz[ce].b1 - n2 - n0, oo), dQ.drawImage(n6, aA.b1 - n2 - n0, oo)) : dQ.drawImage(mz[ce].canvas, aA
			.b1 - mz[ce].b1 - n0, oo)
	}, this.op = function(id, ge) {
		var o0, oq = dK.or;
		0 === id ? o0 = L(130) : 1 === id ? (o0 = L(131), oq = dK.os) : 2 === id ? o0 = L(132) : 3 === id ? o0 = L(133) : (o0 = bT.bZ.ba(ge), oq = 5 === id ? dK.os : dK.fB), no(74, 0), nF(0, o0, 74, 0, dK.dM, oq, -1, !1, void 0, void 0, !0)
	}
}

function ot() {
	this.dv = function() {
		for (var en = aI.gN, db = dj.result.db, ju = db.length, ou = (lo.iE(17 + 16 * en + 33 * ju), lo.mB(1, 1), lo.mB(4, 12), lo.mB(10, ju), lo.mB(1, +(2 === aI.di)), lo.mB(1, aI.hj % 2), bX.ou), ce = 0; ce < en; ce++) lo.mB(16, ou[ce]);
		for (var gD = bX.gD, ce = 0; ce < ju; ce++) {
			var fF = db[ce];
			lo.mB(9, fF), lo.mB(24, gD[fF])
		}
		a5.a6.send(a5.a6.a8, lo.lj)
	}
}

function ov() {
	var j9, jA, fd;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(134), [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})]), jA = new fR(j9.fS, ((fd = []).push(function() {
		function p3() {
			p4.button.textContent = L(138), p0.a2.readOnly = !1, p2.a2.readOnly = !1, p5.eU(1), p5.button.style.color = dK.dM
		}
		var fi = new fj,
			oz = (fi.ox(a5.a6.oy("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", fi.fk(L(135)), new eH({
				value: cs.buffer.data[105].value,
				eI: -1
			})),
			p0 = (oz.a2.readOnly = !0, fi.fp(oz), fi.fk(L(136), "0.8em"), new eH(cs.buffer.data[148], 0, void 0, function(a2) {
				p1(cs.buffer.data[149].value, a2.target.value)
			})),
			p2 = (fi.fp(p0), fi.fk(L(137), "0.8em"), new eH(cs.buffer.data[149], 1, void 0, function(a2) {
				p1(a2.target.value, cs.buffer.data[148].value)
			})),
			p4 = (fi.fp(p2), new e9(L(138), function(a2) {
				return a2.textContent === L(138) ? (a2.textContent = L(139), p0.a2.readOnly = !0, p2.a2.readOnly = !0, p5.eU(0), p5.button.style.color = dK.oN, cs.jD.jX(149, p2.a2.value), p1(cs.buffer.data[149].value, cs
					.buffer.data[148].value)) : p3(), !0
			})),
			p5 = (fi.fp(new fs([p4.button])), new e9(L(140), function(a2) {
				return p0.a2.readOnly && a5.a6.ke(0) && (bT.ed.jP(a2), p3(), a5.p6.p7({
					action: 0,
					cE: cs.buffer.data[148].value,
					value: parseInt(cs.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			p8 = fi.jI(),
			p1 = (fi.jI(L(141)).style.fontWeight = "bold", function(gU, bb) {
				p8.innerHTML = aH.a6.p9(gU, cs.buffer.data[105].value, bb)
			});
		return fi.fp(new fs([p5.button])), p1(cs.buffer.data[149].value, cs.buffer.data[148].value), fi
	}()), fd))
}

function pA() {
	function pU(player, g7, pE) {
		3 <= pE && 2142 < aC.j7() && (g7 === aI.fo || bX.gM[g7] < gf.gg(bX.gM[player], 20)) && iD.pJ(player, 20)
	}

	function pY(player, ge, g7, pE) {
		3 <= pE && pE < 6 && gf.gg(bX.gM[player], 8) > bX.gM[g7] && (ge = Math.max(gf.gg(11 * bX.gM[g7], 5), gf.gg(bX.gM[player], 10)));
		pE = bX.lT[player].length;
		iA.pO.pn(player, g7), iA.pO.po(player, g7, pE, ge)
	}

	function pT(player, ge) {
		var g7 = aI.fo,
			en = bX.lT[player].length;
		iA.pO.pp(player), bX.lT[player].length !== en && iA.pO.po(player, g7, en, ge)
	}
	this.jn = new Uint8Array(aI.fo), this.k = function() {
		this.jn.fill(0)
	}, this.pB = function(player, ge) {
		var pC, pE, pF, pG;
		iN.lS(player) && (pC = hO.pD(player), 3 <= (pE = iD.ge[player]) && pE < 6 && (ge = Math.max(bX.gM[player] - pC, ge)), pF = bX.l3[player].length, pG = bX.pH[player].length, 30 * bX.gD[player] > aI.hG && pI[player] < 10 && 100 * pG <= pF &&
			iD.pJ(player, 10), aI.dm ? function(player, ge, pE, pC) {
				var g7;
				if (iA.pO.pP(player, !1) || iA.pO.pQ(player, !1)) {
					if (!iA.pO.pR(player))
						if (iA.pO.pS()) pT(player, ge), pU(player, aI.fo, pE);
						else {
							if (hw.pV(iD.pW[pE])) g7 = iA.pO.pX(player);
							else {
								if (iA.pO.pZ() && hw.pV(iD.pa[pE]) && iA.pO.pb(), 6 === pE) return pY(player, ge, iA.pO.pc(), pE);
								g7 = iA.pO.pd(player)
							}
							pY(player, ge, g7, pE), pU(player, g7, pE)
						}
				} else f4.pM.j1(player) || iA.pe.j1(player) || ! function(player, ge, pE, pC) {
					var jn = iA.jm.jn;
					jn[player] = 0;
					var pg = g8.g9[player];
					if (0 !== pg) {
						var ph = bX.gM[player],
							gD = bX.gD;
						if (player < aI.gN && (ge = ph), !(ph < gD[player] || 5 === pE && ph < pC || 4 === pE && ph < gf.gg(pC, 2))) {
							f5.pi(pg);
							for (var en = gk.pj[0], pk = gk.pk, ce = hw.pL(en), gv = 0; gv < en; gv++) {
								var ax = pk[(gv + ce) % en];
								if (jn[ax]) return du.cQ.jk(player, ax, ge)
							}
							var pl = f4.a6.pl;
							for (gv = 0; gv < en; gv++)
								if (ax = pk[(gv + ce) % en], pl[ax] && ax !== player) return du.cQ.jk(player, ax, ge)
						}
					}
				}(player, ge, pE, pC)
			}(player, ge, pE, pC) : (!pG || pF && (pF < pG && !hw.pL(10) || 100 * pG <= pF && hw.pL(3) || !hw.pL(8))) && f4.pM.j1(player) || function(player, ge, pE) {
				iA.pO.pP(player, !0) || iA.pO.pQ(player, !0) ? iA.pO.pR(player) || (iA.pO.pS() ? pT(player, ge) : hw.pV(iD.pW[pE]) ? pY(player, ge, iA.pO.pX(player), pE) : 5 === pE ? pY(player, ge, iA.pO.pm(), pE) : (iA.pO.pZ() && hw.pV(iD
					.pa[pE]) && iA.pO.pb(), pY(player, ge, 6 === pE ? iA.pO.pc() : iA.pO.pd(player), pE))) : iA.pe.j1(player)
			}(player, ge, pE))
	}
}

function pq() {
	function px() {
		aH.bj(29) && (b7.a6.pt && 1 === b7.a6.ps[2] && aH.bj(29).q2(), b7.a6.pt = 0, aH.bj(29).q3(), aH.bj(29).q4(), b7.c0.bs())
	}
	this.pr = new Array(4), this.ps = [0, 0, 1, 0], this.pt = 0, this.pu = [0, 0], this.k = function() {
		for (var ce = 0; ce < this.pr.length; ce++) this.pr[ce] = new pv;
		this.ps[0] = cs.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.pr), __fx.lobbyReminders.setPopupHandler(function(text) {
			b7.message.zC({
				id: 7,
				mj: text
			})
		})
	}, this.pw = function() {
		px(), b7.py.k(), __fx.lobbyReminders.check()
	}, this.pz = function() {
		b7.py.pz();
		for (var ce = 0; ce < b7.a6.pr.length; ce++) {
			var q5 = b7.a6.pr[ce];
			0 === q5.q6 ? q5.q7 = 0 : (q5.q8 = Math.max(q5.q8 - q5.q7 % 2, 0), q5.q7++)
		}
		px(), __fx.lobbyReminders.check()
	}, this.q9 = function(qA) {
		this.ps[0] !== qA || this.ps[2] || aH.bj(29).qB()
	}
}

function qC() {
	this.aD = aC.aD, this.eI = 0, this.qD = 0, this.qE = 0, this.qF = null, this.qG = 7, this.qH = 0, this.k = function() {
		this.qE = 0, this.qF = [], this.eI = 0, this.qD = 0
	}, this.qI = function(lj) {
		if (aI.g1) this.qJ(lj);
		else if (this.qF.push(lj), 2 === aI.aJ) {
			for (var ce = 0; ce < this.qF.length; ce++) du.cO.j1(this.qF[ce]);
			this.qF = []
		}
	}, this.qJ = function(lj) {
		2 !== aI.aJ && (du.cO.j1(lj), eN.j1(), be.qJ(this.qE), this.qE === aI.hh ? (aI.he.j1(), this.qE = 0, this.eI = 0, this.qD = 0, this.aD = aC.aD) : (this.qE++, cz.qK(), cz.iU(!0), i8.render()))
	}, this.j1 = function() {
		aA.j1(), aI.g1 ? (aC.ah = be.qJ(-1) || aC.ah, jj()) : (0 !== this.eI || aC.aD >= this.aD && (this.aD += aC.qL * Math.floor(1 + (aC.aD - this.aD) / aC.qL), 2 === aI.aJ ? jY() : this.qM(), this.eI++, 27 < aC.aD - this.qH)) && this.qN(),
		jf(), aC.ah && (aC.ah = !1, ex()), this.qH = aC.aD
	}, this.qN = function() {
		aC.ah = !0, ji(), this.eI = 0
	}, this.qM = function() {
		var qO, ce;
		if (this.qD !== 7 * this.qE) ja(), i8.render();
		else {
			qO = !1;
			loop: for (; this.qP() && (qO = !0, ja(), 2 !== aI.aJ) && 0 < this.qF.length;)
				for (ce = this.qG - 2; 0 <= ce; ce--)
					if (ja(), 2 === aI.aJ) break loop;
			qO ? i8.render() : (jY(), i8.qQ())
		}
	}, this.qP = function() {
		return 0 < this.qF.length && (this.qE++, du.cO.j1(this.qF[0]), this.qF.shift(), !0)
	}
}

function qR() {
	this.qS = new qT
}

function qU() {
	this.qV = 0, this.k = function() {
		this.qV = 0
	}, this.j1 = function() {
		if (!this.qV && aC.j7() % 30 == 7 && bT.bU.hD(90) && (iA.performance.qV = 1)) {
			if (aI.dm) {
				var gH = f5.gI();
				if (g8.o5[gH]) {
					f5.pi(gH);
					var jU = gk.pk,
						en = gk.pj[0];
					if (0 !== en)
						for (var qa = Math.min(100 + 10 * (en - 1), 400), ce = 0; ce < en; ce++) iD.qb(jU[ce], qa)
				}
			}
			iD.qb(gE[0], 100)
		}
	}
}

function qc() {
	var gy = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + gy + .5) / 15))
}

function qd(qe, qf, qg, qh, qi) {
	var self;
	this.qj = document.createElement("span"), this.resize = function() {
			this.qj.style.fontSize = ((qh - qg) * qf.offsetHeight).toFixed(1) + "px"
		}, (self = this).qj.textContent = qe, self.qj.style.color = dK.dM, self.qj.style.font = "inherit", self.qj.style.margin = "0.1em 0.6em", self.qj.style.pointerEvents = "none", qi && (self.qj.style.fontWeight = "bold"), self.qj.style
		.whiteSpace = "nowrap", self.qj.style.display = "block", qf.appendChild(self.qj)
}

function qk() {
	var fl = ql(dC.k5);
	fl && qm(fl[0], fl[1], fl[2], fl[3], fl[4])
}

function ql(k5) {
	return 2 === k5 ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === k5 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === k5 ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === k5 ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === k5 ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function qm(qn, qo, qp, qq, qr) {
	for (var aF, aG, qu, qv, dI, qx, qs = qn.length - 1, qt = dC.dD + dC.dE, en = (qt *= qt, qp.length), qw = Array(en), ce = en - 1; 0 <= ce; ce--) qw[ce] = qp[ce] * qp[ce];
	var qy = new Array(en),
		qz = new Array(en),
		r0 = new Array(en),
		gU = r1.r2();
	if (void 0 === qr)
		for (qr = new Array(en), ce = en - 1; 0 <= ce; ce--) qr[ce] = 0;
	for (ce = 1; ce < en; ce++) qy[ce] = qw[ce] - qw[ce - 1], qz[ce] = qq[ce] - qq[ce - 1], r0[ce] = qr[ce] - qr[ce - 1];
	for (aF = dC.dD - 1; 0 <= aF; aF--)
		for (aG = dC.dE - 1; 0 <= aG; aG--) {
			for (qu = qt, ce = qs; 0 <= ce; ce--) qu = (qv = (aF - qn[ce]) * (aF - qn[ce]) + (aG - qo[ce]) * (aG - qo[ce])) < qu ? qv : qu;
			for (dI = qq[en - 1], qx = qr[en - 1], ce = 1; ce < en; ce++)
				if (qu < qw[ce]) {
					dI = qq[ce - 1] + r3((qu - qw[ce - 1]) * qz[ce], qy[ce]), qx = qr[ce - 1] + r3((qu - qw[ce - 1]) * r0[ce], qy[ce]);
					break
				} r4(dC.dD * aG + aF, dI, qx, gU)
		}
}

function r4(eI, dI, qx, gU) {
	dI < 500 ? gU[eI] = gf.gg(gU[eI] * dI * 2, 1e3) : 500 < dI && (gU[eI] += gf.gg(2 * (1e4 - gU[eI]) * (dI - 500), 1e3)), gU[eI] += gf.gg(qx * (10 * dI - gU[eI]), 1e3)
}

function fs(r5) {
	var r6 = document.createElement("div");
	this.a2 = r6, this.r7 = r5, this.resize = function() {
		for (var en = r5.length, ce = 1; ce < en; ce++) bT.ed.eh(r5[ce], 4)
	};
	var ce, en = r5.length;
	for (r6.style.width = "100%", r6.style.height = "2.7em", r6.style.marginTop = "0.6em", r6.style.border = "inherit", ce = 0; ce < en; ce++) r5[ce].style.verticalAlign = "top", r5[ce].style.width = (100 / en).toFixed(2) + "%", r5[ce].style.height =
		"100%", r5[ce].style.fontSize = "0.75em", r6.appendChild(r5[ce])
}

function r8() {
	this.buffer = {}, this.r9 = new Array(8), this.rA = null, this.rB = null, this.rC = 0, this.rD = [0, 0], this.rE = function() {
		aH.eF(5, 5)
	}, this.eM = function(rF) {
		rF && (bK.rG = rF), aH.jC(), bK.k()
	}, __fx.customLobby.setJoinFunction(() => this.eM(1)), this.rH = function() {
		aH.eF(0 === aK.at() ? 5 : 0)
	}, this.rI = function() {
		if (1 === cs.buffer.data[130].value) aH.eF(8, aH.bh().rJ, new eS(24, {
			rK: cs.buffer.data[125].value,
			rL: cs.buffer.data[128].value,
			rM: cs.buffer.data[129].value
		}));
		else {
			for (var jU = (jU = cs.buffer.data[126].value.split(",")).slice(0, 10), ce = 0; ce < jU.length; ce++) jU[ce] = jU[ce].trim().slice(0, 7).toUpperCase();
			1 === jU.length && 0 === jU[0].length && (jU = []), aH.eF(8, aH.bh().rJ, new eS(23, {
				rK: cs.buffer.data[125].value,
				rN: jU
			}))
		}
	}, this.eT = function(rJ, target) {
		aH.eF(4, rJ, new rO("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + a5.a6.oy(
				"/privacy"), !1, [new e9("⬅️ " + L(6), function() {
				aH.eF(rJ)
			}), new e9("✅ Accept", function() {
				cs.jD.jX(140, 1), 0 === target ? aH.eF(2, rJ) : aH.eF(8, rJ, new eS(target))
			})]))
	}, this.rP = function() {
		for (var ce = 0; ce < 8; ce++) this.r9[ce] = k0.ly.lz(jz.k6(5));
		this.r9[1] = "[" + this.r9[1] + "]", 5 === aH.bg && (aH.bh().e6.jX(this.r9), aH.bh().resize())
	}, this.p9 = function(gU, oC, mY) {
		gU = bT.bU.hH(gU, 1, 1e6);
		oC = L(142, [oC]);
		return (oC += "<br>") + L(143, [mY]) + "<br>" + L(144, [gU + "–" + (gU + 2)]) + "<br>" + L(145, [gU])
	}
}

function L(value, rQ, rR, rS) {
	var bb = "number" == typeof value ? jG.rT[value] : value;
	if (rR && jG.rU() && (bb = rR), !rQ) return rS ? bb.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : bb;
	for (var en = rQ.length, ce = 0; ce < en; ce++)
		for (var jR = 0; jR < 3; jR++) bb = bb.replace("{" + (10 * jR + ce) + "}", rQ[ce]);
	return bb
}

function km() {
	var a2;
	this.a2 = document.createElement("hr"), this.resize = function() {
		bT.ed.eh(this.a2, 8, dK.rV)
	}, (a2 = this.a2).style.marginBottom = a2.style.marginTop = "0.65em", a2.style.marginLeft = a2.style.marginRight = "-4%", a2.style.border = "none"
}

function rW() {
	this.iX = new rX, this.iZ = new rY, this.eO = new rZ, this.k = function() {
		aI.bG || this.iX.k()
	}, this.j1 = function() {
		aI.bG || (this.iX.j1(), 3 !== aH.bg) || aC.j7() % 15 != 5 && 2 !== aI.aJ || aH.bh().rb()
	}, __fx.replay.restartReplay = () => this.rc(), this.rc = function() {
		var rd = 0 !== aI.aJ,
			re = aI.hn;
		rd || aK.rf(), aI.eQ.rg(), aI.data.canvas = null, a5.a6.close(a5.a6.a8, 3257), a5.a6.a8 = 0, aI.data.isReplay = 1, aI.hp(), rd && (aI.hn = re)
	}, this.rh = function(bb) {
		var ce = bb.indexOf("=");
		return 0 <= ce ? bb.substring(ce + 1) : bb
	}, this.ri = function(bb) {
		return bb
	}, __fx.replayHistory.load = saved => {
		saved = eN.rh(saved), eN.eO.eP(saved) && eN.rc()
	}
}

function rj() {
	var rl = new Array(1),
		rm = new Array(1),
		rn = 20,
		kc = 0,
		ro = !1;

	function rq() {
		rn++, rr.play()
	}
	this.k = function() {
		if (!window.document.documentMode) {
			for (var ce = 0; 0 <= ce; ce--) ! function(ce, src) {
				rm[ce] = 0, rl[ce] = document.createElement("audio"), rl[ce].src = src, rl[ce].setAttribute("preload", "auto"), rl[ce].setAttribute("controls", "none"), rl[ce].style.display = "none", rl[ce].onpause = function() {
					rm[ce] = 1
				}, rl[ce].oncanplaythrough = function() {
					rm[ce] = 0 === rm[ce] ? 1 : rm[ce]
				}, document.body.appendChild(rl[ce])
			}(ce,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			ro = !0
		}
	}, this.lk = function() {
		if (ro) {
			ro = !1;
			for (var ce = 0; 0 <= ce; ce--) rl[ce].onpause = null, rl[ce].oncanplaythrough = null, aH.removeChild(document.body, rl[ce]), rl[ce] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		rr.play()
	}), this.play = function() {
		if (ro) {
			var mf = performance.now();
			if (kc + 66 < mf)
				for (var ce = 0; 0 <= ce; ce--)
					if (1 === rm[ce]) return kc = mf, rm[ce] = 2, void rl[ce].play();
			0 < rn && (rn--, setTimeout(rq, 66))
		}
	}
}

function ft(rs, rt, ru, rv) {
	var rw = document.createElement("textarea"),
		rx = (this.a2 = rw, !0);

	function s0() {
		rw.select(), document.execCommand("copy")
	}
	this.resize = function() {
			rt && bT.ed.eh(rw, 5)
		}, this.fu = function(ki) {
			rw.value = ki
		}, this.fa = function() {
			return rw.value
		}, this.ry = function() {
			rw.select()
		}, this.clear = function() {
			rw.value = ""
		}, this.rz = function() {
			rx && navigator.clipboard ? (rw.select(), navigator.clipboard.writeText(rw.value).catch(function() {
				rx = !1, s0()
			})) : s0()
		}, rw.setAttribute("id", "textArea" + aH.a6.rC++), rw.setAttribute("autocomplete", "off"), rs && rw.setAttribute("placeholder", rs), rw.style.top = "0", rw.style.left = "0", rw.style.width = "100%", rw.style.height = "100%", rw.style
		.userSelect = "none", rw.style.outline = "none", rw.style.resize = "none", rw.style.border = "none", rw.style.color = dK.dM, rw.style.backgroundColor = dK.dL, rv ? (rw.style.fontSize = "1em", rw.rows = 6, rw.style.padding = "0.25em") : (rw
			.style.padding = "0.45em", rw.style.fontSize = "1.2em"), ru && rw.addEventListener("input", function(a2) {
			ru(a2)
		}), rw.addEventListener("focus", function() {
			aA.av++
		}), rw.addEventListener("blur", function() {
			aA.av--
		})
}

function s1() {
	var s2, s3, s4, s5, s6, s7, s8, s9, sA, sB, sC, sD, sE, sF, sG, sH, sI, sJ, sL, sM, sN, sO, sP, sV, sW, sK = null,
		sR = 0,
		sS = !1,
		sT = new Float32Array(4),
		sU = 0,
		sX = 112,
		sY = 0;

	function sZ() {
		sA = Math.floor(+aA.cd), sB = Math.floor(.5 * sA), sK.width = aA.b1, sK.height = aA.b2, sL = sK.getContext("2d", {
			alpha: !0
		}), bT.ed.textAlign(sL, 1), bT.ed.textBaseline(sL, 1), sL.imageSmoothingEnabled = !0
	}

	function sa() {
		var ce, sh;
		for (dQ.font = bT.ed.ef(1, 100 * sC), sh = 80 / Math.floor(dQ.measureText(bT.bZ.ba(aI.gZ)).width), dQ.font = bT.ed.ef(1, 100), ce = aI.fo - 1; 0 <= ce; ce--) s9[ce] = 100 / Math.floor(dQ.measureText(bX.bY[ce]).width), s8[ce] = Math.min(sh,
			s9[ce])
	}

	function si(ce) {
		return !sY || (ce = bX.gM[ce]) < 1e6 ? 1 : ce < 1e7 ? sT[0] : sT[Math.min(Math.floor(Math.log10(ce)) - 6, 3)]
	}

	function sg(t1) {
		sS = !1, sR = aC.aD, sJ = !1, sI = 1, sG = sH = 0, t1.clearRect(0, 0, aA.b1, aA.b2);
		for (var t2, t3, ce, t4, fontSize, t5, na = cT / cS, nc = cU / cS, ev = (aA.b1 + cT) / cS, ew = (aA.b2 + cU) / cS, t6 = 0 !== bX.g3[aI.bS] && !bT.bU.bV(aI.bS), jR = gC.gB - 1; 0 <= jR; jR--) ce = gC.gJ[jR], (fontSize = Math.floor(sF * cS *
			si(ce) * s8[ce] * s6[ce])) < sE || sA <= fontSize || s4[ce] + s6[ce] > na && s4[ce] < ev && s5[ce] + s7[ce] > nc && s5[ce] < ew && (t2 = Math.floor(aA.b1 * (s4[ce] + s6[ce] / 2 - na) / (ev - na)), t3 = Math.floor(aA.b2 * (s5[ce] + s7[
				ce] / 2 - nc) / (ew - nc) - .1 * fontSize), t4 = i4.se[ce], t1.font = bT.ed.ef(1 === bX.g4[ce] ? 4 : 1, fontSize), t1.fillStyle = t7(fontSize, t4 % 2), sY ? t8(t1, ce, fontSize, t2, t3, t4) : t9(ce, fontSize, t2, t3, t1), sJ = !0,
			0 < sN[ce] ? function(t2, t3, fontSize, ce, t1) {
				0 === pI[ce] ? nl.sp.sq(sM[ce]) ? (function(t2, t3, fontSize, player, bc, t1) {
					for (var oo = t3, tW = (t1.globalAlpha = tK(fontSize), si(player) * (sY ? sU : s9[player])), tJ = t2 - .5 * fontSize / tW - .9 * fontSize, gv = 0; gv < 2; gv++) t1.fillText(nl.sp.tT(bc), tJ, oo), tJ = t2 + .5 *
						fontSize / tW + .9 * fontSize;
					t1.globalAlpha = 1
				}(t2, t3, fontSize, ce, sM[ce], t1), tB(t2, t3, fontSize, 0, 0, t1)) : nl.sp.tN(sM[ce]) ? (tO(t2, t3, fontSize, sM[ce], 0, t1), tB(t2, t3, fontSize, 0, 1, t1)) : (tO(t2, t3, fontSize, sM[ce], 1, t1), tB(t2, t3, fontSize, 1, 0,
					t1)) : tO(t2, t3, fontSize, sM[ce], 0, t1)
			}(t2, t3, fontSize, ce, t1) : 0 === pI[ce] && tB(t2, t3, fontSize, 0, 0, t1), t6 && (0 < sN[ce + aI.fo] || 0 < sN[ce + 2 * aI.fo] || 0 < sN[ce + 3 * aI.fo] || 0 < sN[ce + 4 * aI.fo]) && function(t2, t3, fontSize, ce, t1) {
				var ax, lu = -1;
				for (ax = 4; 1 <= ax; ax--) 0 < sN[ce + ax * aI.fo] && lu++;
				for (ax = 1; ax < 5; ax++) 0 < sN[ce + ax * aI.fo] && (! function(t2, t3, fontSize, ax, ce, tG, mf, t1) {
					var ni;
					if (1 === ax) {
						ce = sM[ce + aI.fo];
						if (!nl.sp.tP(ce)) return function(t2, t3, fontSize, bc, tG, t1) {
							t1.globalAlpha = tK(fontSize);
							t2 -= .534 * tG * fontSize, tG = t3 + 1.59 * fontSize;
							t1.font = bT.ed.ef(0, .785 * fontSize), t1.fillText(nl.sp.tT(bc), t2, tG), t1.globalAlpha = 1
						}(t2, t3, fontSize, ce, tG, t1);
						ni = nl.kH.tR[ce - 1024 + nl.sp.tS]
					} else ni = 2 === ax ? aP.tV()[4].canvas[+(mf < 255)] : (3 === ax ? aP.tV()[5] : aP.tV()[6]).canvas[0];
					ce = nl.kH.tQ, mf = .8 * fontSize / ce, ax = t2 - .5 * mf * ce - .534 * tG * fontSize, t2 = t3 + 1.4 * mf * ce;
					t1.setTransform(mf, 0, 0, mf, ax, t2), t1.globalAlpha = tK(fontSize), t1.drawImage(ni, 0, 0), t1.globalAlpha = 1, t1.setTransform(1, 0, 0, 1, 0, 0)
				}(t2, t3, fontSize, ax, ce, lu, sN[ce + ax * aI.fo], t1), lu -= 2)
			}(t2, t3, fontSize, ce, t1), (t5 = sC * fontSize) < sE || (t1.font = bT.ed.ef(1, t5), t3 += Math.floor(.78 * fontSize), sY ? t9(ce, t5, t2, t3, t1) : t8(t1, ce, t5, t2, t3, t4)))
	}

	function t9(ce, fontSize, aF, aG, t1) {
		var ___id = ce;
		var showName = ce < aI.gN || !__fx.settings.hideBotNames;
		if (showName) t1.fillText(bX.bY[ce], aF, aG), ce < aI.gN && 2 !== bX.g4[ce] || (ce = fontSize / s9[ce], t1.fillRect(aF - .5 * ce, aG + bT.ed.tE * fontSize, ce, Math.max(1, .1 * fontSize)));
		sY && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (t1.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			t1.fillText(__fx.utils.getDensity(___id), aF, showName ? aG + fontSize : aG)
		);
	}

	function t8(t1, ce, fontSize, t2, t3, t4) {
		var gW = bX.gW[ce],
			tF = bT.bZ.ba(bX.gM[ce] - gW);

		function drawDensity() {
			!sY && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (t1.fillStyle = __fx.utils.textStyleBasedOnDensity(ce)), t1.fillText(__fx.utils.getDensity(ce), t2, t3 + fontSize))
		}
		gW ? (gW = t1.fillStyle, t1.fillStyle = t7(fontSize, 2 + t4 % 2), t1.fillText(tF, t2, t3), t1.fillStyle = gW) : t4 >> 1 & 1 ? (t1.lineWidth = .05 * fontSize, t1.strokeStyle = t7(fontSize, t4 % 2), t1.strokeText(tF, t2, t3)) : (1 < t4 && (t1
			.lineWidth = .12 * fontSize, t1.strokeStyle = t7(fontSize, t4), t1.strokeText(tF, t2, t3)), t1.fillText(tF, t2, t3)), drawDensity()
	}

	function tB(t2, t3, fontSize, tG, tH, t1) {
		var tI = .95 * fontSize / sP,
			t2 = t2 - .5 * tI * sO + .8 * tG * fontSize,
			tG = t3 - 1.76 * tI * sP - (.35 - bT.ed.tE + .7) * tH * fontSize;
		t1.setTransform(tI, 0, 0, tI, t2, tG), t1.globalAlpha = tK(fontSize), t1.drawImage(eJ.get(4), 0, 0), t1.globalAlpha = 1, t1.setTransform(1, 0, 0, 1, 0, 0)
	}

	function tO(t2, t3, fontSize, bc, tG, t1) {
		var fE, tJ, tI;
		t1.globalAlpha = tK(fontSize), nl.sp.tP(bc) ? (fE = nl.kH.tQ, t1.setTransform(tI = 1.1 * fontSize / fE, 0, 0, tI, tJ = t2 - .5 * tI * fE - .8 * tG * fontSize, tI = t3 - 1.55 * tI * fE), t1.drawImage(nl.kH.tR[bc - 1024 + nl.sp.tS], 0, 0), t1
			.setTransform(1, 0, 0, 1, 0, 0)) : (tJ = t2 - .8 * tG * fontSize, tI = t3 - (.35 - bT.ed.tE + 1) * fontSize, t1.fillText(nl.sp.tT(bc), tJ, tI)), t1.globalAlpha = 1
	}

	function t7(fontSize, t4) {
		return sB <= fontSize && fontSize < sA ? g8.tX[t4] + tK(fontSize).toFixed(3) + ")" : g8.tY[t4]
	}

	function tK(fontSize) {
		return sB <= fontSize && fontSize < sA ? 1 - (fontSize - sB) / (sA - sB) : 1
	}

	function tj(tW, b1) {
		return 1 + Math.floor(sD * tW * b1)
	}

	function tg(ce) {
		for (var left = s4[ce], jR = s4[ce] - bX.sj[ce] - 1; 0 <= jR; jR--)
			if (!tn(ce, --left, s5[ce], s7[ce])) {
				left++;
				break
			} var right = s4[ce];
		for (jR = bX.sl[ce] - s4[ce] - s6[ce]; 0 <= jR; jR--)
			if (!tn(ce, ++right + s6[ce] - 1, s5[ce], s7[ce])) {
				right--;
				break
			} var aF = Math.floor((left + right) / 2),
			top = s5[ce];
		for (jR = s5[ce] - bX.sk[ce] - 1; 0 <= jR; jR--)
			if (!tp(ce, aF, --top, s6[ce])) {
				top++;
				break
			} var bottom = s5[ce];
		for (jR = bX.sm[ce] - s5[ce] - s7[ce]; 0 <= jR; jR--)
			if (!tp(ce, aF, ++bottom + s7[ce] - 1, s6[ce])) {
				bottom--;
				break
			} var aG = Math.floor((top + bottom) / 2);
		td(ce, aF, aG, s6[ce], s7[ce]) && (s4[ce] = aF, s5[ce] = aG)
	}

	function td(player, aF, aG, b1, b2) {
		gy = Math.floor(.2 * b1);
		for (var gy, ax = aF + b1 - 1; aF <= ax; ax--)
			if (!tn(player, ax, aG, b2)) return;
		for (ax = aG + b2 - 1 - (gy = (gy = Math.floor(.25 * b2)) < 1 ? 1 : gy); aG + gy <= ax; ax--)
			if (!tp(player, aF, ax, b1)) return;
		return 1
	}

	function tn(player, aF, aG, b2) {
		return i4.tq(player, 4 * (aG * dC.dD + aF)) && i4.tq(player, 4 * ((aG + b2 - 1) * dC.dD + aF))
	}

	function tp(player, aF, aG, b1) {
		return i4.tq(player, 4 * (aG * dC.dD + aF)) && i4.tq(player, 4 * (aG * dC.dD + aF + b1 - 1))
	}
	this.k = function() {
		if (sY = cs.buffer.data[7].value || 8 === aI.dw, sJ = !1, sF = .88, sC = .5, sD = 1.8, sE = 12 - 3 * cs.buffer.data[9].value, s3 = s2 = 0, s4 = new Uint16Array(aI.fo), s5 = new Uint16Array(aI.fo), s6 = new Uint16Array(aI.fo), s7 =
			new Uint16Array(aI.fo), s8 = new Float32Array(aI.fo), s9 = new Float32Array(aI.fo), sM = new Uint16Array(2 * aI.fo), sN = new Uint8Array(5 * aI.fo), sV = new Uint8Array(aI.fo), sW = new Uint8Array(aI.fo), sK = sK || document
			.createElement("canvas"), sZ(), sH = sG = 0, sI = 1, sY) {
			var ce, sh;
			for (sa(), dQ.font = bT.ed.ef(1, 100), sh = 100 / Math.floor(dQ.measureText("900 000").width), ce = aI.fo - 1; 0 <= ce; ce--) s8[ce] = Math.min(sh, 2 * s9[ce]);
			sU = sh, sT[0] = 100 / (sh * Math.floor(dQ.measureText("5 000 000").width)), sT[1] = 100 / (sh * Math.floor(dQ.measureText("50 000 000").width)), sT[2] = 100 / (sh * Math.floor(dQ.measureText("500 000 000").width)), sT[3] = 100 / (
				sh * Math.floor(dQ.measureText("1 000 000 000").width))
		} else sa();
		! function() {
			var ce;
			for (ce = aI.fo - 1; 0 <= ce; ce--) bX.gD[ce] < 12 ? (s4[ce] = bX.sj[ce] + 1, s5[ce] = bX.sk[ce] + 1, s6[ce] = 1, s7[ce] = 1) : (s4[ce] = bX.sj[ce], s5[ce] = bX.sk[ce] + 1, s6[ce] = 4, s7[ce] = 2);
			if (aI.g1)
				for (ce = 0; ce < aI.gN; ce++) s6[ce] = 0;
			sO = eJ.get(4).width, sP = eJ.get(4).height
		}()
	}, this.sd = function(fF, bQ) {
		bQ > 18 * bX.gD[fF] ? (sW[fF] = 6, i4.se[fF] = 2 + i4.se[fF] % 2) : (sV[fF] = 4, (i4.se[fF] < 2 || 3 < i4.se[fF]) && (i4.se[fF] = 6 + i4.se[fF] % 2))
	}, this.jq = function(fF, bQ) {
		bQ > 6 * bX.gD[fF] ? (sW[fF] = 6, i4.se[fF] = 4 + i4.se[fF] % 2) : (sV[fF] = 4, (i4.se[fF] < 4 || 5 < i4.se[fF]) && (i4.se[fF] = 8 + i4.se[fF] % 2))
	}, this.resize = function() {
		sZ(), sg(sL)
	}, this.qK = function() {
		for (var ce = 0; ce < aI.gN; ce++) bX.sl[ce] - bX.sj[ce] != 3 || bX.sm[ce] - bX.sk[ce] != 3 ? (s4[ce] = bX.sj[ce] + (bX.sl[ce] !== bX.sj[ce] ? 1 : 0), s5[ce] = bX.sk[ce], s6[ce] = 1, s7[ce] = 1) : (s4[ce] = bX.sj[ce], s5[ce] = bX.sk[ce] +
			1, s6[ce] = 4, s7[ce] = 2)
	}, this.oT = function(player, eI, sn) {
		! function(player, eI, sn) {
			player += eI * aI.fo;
			0 === eI ? sM[player] === sn && 0 < sN[player] ? sN[player] = 0 : (sM[player] = sn, sN[player] = nl.sp.sq(sn) ? 255 : 64) : 1 === eI ? (sN[player] = 64, sM[player] = sn) : sN[player] = sn
		}(player, eI, sn), 2 === aI.aJ && this.iU(!0)
	}, this.dP = function() {
		sJ && (1 !== sI ? (dQ.imageSmoothingEnabled = !0, dQ.setTransform(sI, 0, 0, sI, 0, 0), dQ.drawImage(sK, -sG / sI, -sH / sI), dQ.setTransform(1, 0, 0, 1, 0, 0), dQ.imageSmoothingEnabled = !1) : dQ.drawImage(sK, -sG, -sH))
	}, this.dH = function(cx, cy) {
		sG += cx, sH += cy
	}, this.n = function(cx, cy) {
		cz.dH(cx, cy)
	}, this.zoom = function(dI, d1, d2) {
		sI *= dI, sG = (sG + d1) * dI - d1, sH = (sH + d2) * dI - d2
	}, this.ss = function(player) {
		var sj = bX.sj[player],
			sl = bX.sl[player],
			sk = bX.sk[player],
			sm = bX.sm[player],
			st = i9.su(0),
			sv = i9.sw(0),
			sx = i9.su(aA.b1),
			sy = i9.sw(aA.b2);
		sj < sx && st < sl && sk < sy && sv < sm && (s6[player] = 0, sS = !0)
	}, this.iU = function(oj) {
		return !(!sS && !oj && aC.aD < sR + (1 === sI && 0 === sG && 0 === sH && (aI.ie() || aI.g1 || 2 === aI.aJ) ? 1e3 : sX) || (sg(sL), 0))
	}, this.sz = function(ce) {
		return si(ce) * s8[ce]
	}, this.t0 = function(player) {
		return s8[player]
	}, this.j1 = function() {
		aC.j7() % 10 == 9 && (sS = sS || aI.ih() && !aI.ie()), !aI.ie() && 4 <= ++s3 && function() {
			var ce, jR, gv;
			for (s3 = 0, gv = 4; 1 <= gv; gv--)
				for (jR = gC.gB - 1; 0 <= jR; jR--) ce = gC.gJ[jR] + gv * aI.fo, 0 < sN[ce] && sN[ce] < 255 && sN[ce]--;
			if (2 !== aI.aJ)
				for (jR = gC.gB - 1; 0 <= jR; jR--) ce = gC.gJ[jR], 0 < sN[ce] && sN[ce] < 255 && sN[ce]--
		}();
		var ce, jR, en = Math.floor(.1 * gC.gB);
		for (en = (en = en < 8 ? 8 : en) > gC.gB ? gC.gB : en, ce = s2 + en - 1; s2 <= ce; ce--) jR = ce % gC.gB, ! function(ce) {
			var tW = si(ce) * s8[ce];
			0 < s6[ce] && td(ce, s4[ce], s5[ce], s6[ce], s7[ce]) ? ! function(ce) {
				for (var aF, aG, b1, b2, d5 = !1, gv = 0; gv < 8; gv++) {
					if (b1 = s6[ce] + 2, b2 = s7[ce] + 2, b1 > bX.sl[ce] - bX.sj[ce] + 1 || b2 > bX.sm[ce] - bX.sk[ce] + 1) return d5;
					if (aF = s4[ce] - 1, aG = s5[ce] - 1, !td(ce, aF, aG, b1, b2)) return d5;
					s4[ce] = aF, s5[ce] = aG, s6[ce] = b1, s7[ce] = b2, d5 = !0
				}
				return d5
			}(ce) && function(ce, tW) {
				for (var aF, aG, b1, b2, d5 = !1, tk = s6[ce], d3 = 1 + Math.floor(.02 * tk), gv = 1; gv < 5; gv++) {
					if ((b1 = tk + gv * d3) > bX.sl[ce] - bX.sj[ce] + 1) return d5;
					if ((b2 = tj(tW, b1)) > bX.sm[ce] - bX.sk[ce] + 1) return d5;
					aF = bX.sj[ce] + Math.floor(Math.random() * (bX.sl[ce] - bX.sj[ce] + 2 - b1)), aG = bX.sk[ce] + Math.floor(Math.random() * (bX.sm[ce] - bX.sk[ce] + 2 - b2)), td(ce, aF, aG, b1, b2) && (s4[ce] = aF, s5[ce] = aG, s6[
						ce] = b1, s7[ce] = b2, d5 = !0)
				}
				return d5
			}(ce, tW) && tg(ce) : ! function(ce, tW) {
				var b2, aF = s4[ce] + 1,
					aG = s5[ce] + 1,
					b1 = s6[ce] - 2;
				for (;;) {
					if (b1 < 1) {
						s6[ce] = 0;
						break
					}
					if (b2 = tj(tW, b1), td(ce, aF, aG, b1, b2)) return s4[ce] = aF, s5[ce] = aG, s6[ce] = b1, s7[ce] = b2, 1;
					aF++, aG++, b1 -= 2
				}
				return
			}(ce, tW) ? function(ce, tW) {
				var aF, aG, b1, b2, gv, cu, tl = bX.sl[ce] - bX.sj[ce] + 1,
					tm = Math.floor(.02 * tl);
				for (cu = -6 * (tm = tm < 1 ? 1 : tm), gv = tl; cu <= gv; gv -= tm)
					if (b2 = tj(tW, b1 = 0 < gv ? gv : 1), aF = bX.sj[ce] + Math.floor(Math.random() * (bX.sl[ce] - bX.sj[ce] + 2 - b1)), aG = bX.sk[ce] + Math.floor(Math.random() * (bX.sm[ce] - bX.sk[ce] + 2 - b2)), td(ce, aF, aG, b1,
							b2)) return s4[ce] = aF, s5[ce] = aG, s6[ce] = b1, s7[ce] = b2
			}(ce, tW) : tg(ce)
		}(gC.gJ[jR]);
		s2 = (s2 += en) % gC.gB
	}, this.jc = function() {
		var ce, fF, tb, et;
		if (aC.j7() % 4 == 1)
			for (ce = gC.gB - 1; 0 <= ce; ce--) fF = gC.gJ[ce], i4.se[fF] < 2 || ((tb = Math.max(sV[fF] - 1, 0)) === (et = Math.max(sW[fF] - 1, 0)) ? 0 === tb && (i4.se[fF] %= 2) : 0 === et && i4.se[fF] < 6 && (i4.se[fF] += 4), sV[fF] = tb, sW[
				fF] = et)
	}, this.nt = function(player) {
		var ce = player + 2 * aI.fo,
			mf = sN[ce];
		return 0 < mf && (aa.oW(50, player), sN[ce] = 0, 255 === mf)
	}, this.tc = function(player) {
		return 255 === sN[player + 2 * aI.fo]
	}
}

function tr() {
	this.lz = function(size) {
		for (var jy = jz, jU = [], ce = 0; ce < size; ce++) jU.push(String.fromCharCode(jy.k6(16)));
		return jU.join("")
	}, this.ts = function(bb) {
		return 20 < (bb = bb.trim()).length ? bb.substring(0, 20) : bb
	}
}

function tt() {
	var tu = 0,
		tv = 0,
		tw = 0,
		tx = 0,
		ty = -1;

	function u4(d5) {
		if (ty === d5) return !1;
		if (-1 === (ty = d5)) tu = 0, aa.op(tu, 0);
		else {
			if (i4.lP(d5)) return tw = i4.l9(d5), ph = bX.gM[tw] - bX.gW[tw], (4 !== tu || ph !== tv) && (tu = 4, tv = ph, aa.op(tu, ph), !0);
			if (i4.l8(d5)) return 3 !== tu && (tu = 3, aa.op(tu, 0), !0);
			if (i4.o7(d5)) return 2 !== tu && (tu = 2, aa.op(tu, 0), !0);
			var ph = f4.c3.u7(aU.i, aU.j);
			if (-1 === ph) return 1 !== tu && (tu = 1, aa.op(tu, 0), !0);
			d5 = f4.a6.lG[ph];
			if (tw = f4.a6.u9[ph], tx = f4.a6.lF[ph] >> 3, 5 === tu && d5 === tv) return !1;
			tu = 5, tv = d5, aa.op(tu, d5)
		}
		return !0
	}
	this.k = function() {
		tx = tw = tv = tu = 0, ty = -1
	}, this.j1 = function(oj) {
		var u2;
		!oj && aU.ac() || (oj = i9.su(aU.i), u2 = i9.sw(aU.j), i9.u3(oj, u2) ? (oj = i9.u5(oj, u2), u4(i9.lO(oj))) : u4(-1))
	}, this.jd = function() {
		var uB, ph, u6, u8;
		if (0 !== tu && 2 !== tu)
			if (aU.ac()) {
				if (1 !== tu && 3 !== tu) {
					if (4 === tu) return void(ph = bX.gM[tw] - bX.gW[tw], tv === ph || (tv = ph, aa.op(tu, ph)));
					(u6 = f4.c3.uA(tx, tw)) < 0 ? (tu = 1, aa.op(tu, 0)) : (u8 = f4.a6.lG[u6]) !== tv && (tv = u8, aa.op(tu, u8))
				}
			} else if (1 === tu) - 1 !== (u6 = f4.c3.u7(aU.i, aU.j)) && (tu = 5, tv = f4.a6.lG[u6], aa.op(tu, tv));
		else if (3 === tu) i4.lP(ty) && (tu = 4, uB = i4.l9(ty), tv = bX.gM[uB] - bX.gW[uB], aa.op(tu, tv));
		else if (4 === tu) {
			if (i4.lP(ty)) return void(uB = i4.l9(ty), ph = bX.gM[uB] - bX.gW[uB], tv === ph || (tv = ph, aa.op(tu, ph)));
			tu = 3, aa.op(tu, 0)
		} else - 1 === (u6 = f4.c3.u7(aU.i, aU.j)) ? (tu = 1, aa.op(tu, 0)) : (u8 = f4.a6.lG[u6]) !== tv && (tv = u8, aa.op(tu, u8))
	}
}

function rO(title, uC, uD, uE) {
	var j9, uF;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), uF.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, uE = uE || [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})], j9 = new fP(title, uE), uF = new uG(j9.fS, uC), uD && bT.ed.textAlign(j9.fS.style, 1)
}

function uH() {
	var uI = new Uint8Array(aI.fo),
		uJ = new Uint16Array(aI.fo),
		uK = new Uint16Array(aI.fo),
		uL = new Uint8Array(aI.fo),
		uM = (this.ge = new Uint8Array(aI.fo), new Uint16Array(aI.fo)),
		uN = new Uint16Array(aI.fo);

	function uW(ce) {
		uI[ce] = 1 + gf.gg(uM[ce] * hw.random(), 10 * hw.value(100))
	}
	this.o6 = null, this.pa = [97, 94, 70, 40, 20, 0, 100], this.uO = [500, 450, 400, 300, 80, 50, 100], this.pW = [0, 0, 5, 25, 50, 100, 0], this.mx = [60, 74, 112, 200, 256, 512, 512], this.uP = [1, 2, 3, 4, 6, 8, 1], this.uQ = [500, 450, 400, 300,
		80, 50, 100
	], this.uR = [100, 150, 250, 400, 600, 1e3, 100], this.i5 = function() {
		this.o6 = [L(146), L(147), L(46), L(148), L(149), L(150), "H Bot"]
	}, this.k = function() {
		uI.fill(0), uJ.fill(0), uK.fill(0), uL.fill(0), this.ge.fill(0), uM.fill(0), uN.fill(0);
		var uS = aI.gN;
		if (9 === aI.dw) this.uT();
		else if (__fx.customLobby.isActive())
			for (ce = aI.hX - 1; 0 <= ce; ce--) this.ge[ce + uS] = __fx.customLobby.gameInfo.difficulty;
		else if (aI.df)
			if (3 === aI.data.botDifficultyType)
				for (ce = aI.hX - 1; 0 <= ce; ce--) {
					var kU = ce + uS;
					this.ge[kU] = aI.data.botDifficultyData[kU]
				} else if (2 === aI.data.botDifficultyType)
					for (ce = aI.hX - 1; 0 <= ce; ce--) this.ge[kU = ce + uS] = aI.data.botDifficultyTeam[g8.o5[g8.g9[kU]]];
				else if (1 === aI.data.botDifficultyType) {
			var uV = this.o6.length;
			for (ce = aI.hX - 1; 0 <= ce; ce--) this.ge[ce + uS] = ce % uV
		} else
			for (uV = aI.data.botDifficultyValue, ce = aI.hX - 1; 0 <= ce; ce--) this.ge[ce + uS] = uV;
		else
			for (var uU = 8 === aI.dw ? 1 : 0, ce = aI.hX - 1; 0 <= ce; ce--) this.ge[ce + uS] = uU;
		for (ce = 0; ce < uS; ce++) this.ge[ce] = 6;
		var en = aI.fo;
		for (ce = 0; ce < en; ce++) this.ge[ce] <= 2 ? (uL[ce] = 5, uM[ce] = uN[ce] = 1040, 0 === this.ge[ce] ? (uJ[ce] = 980, uK[ce] = 980) : 1 === this.ge[ce] ? (uJ[ce] = 980, uK[ce] = 920, uM[ce] = uN[ce] = 1100) : (uJ[ce] = 825, uK[ce] =
			750)) : this.ge[ce] <= 4 ? (uL[ce] = 1 + hw.pL(20), 3 === this.ge[ce] ? (uJ[ce] = uK[ce] = 500, uM[ce] = uN[ce] = 1e3) : (uN[ce] = 250 + hw.pL(1501), uM[ce] = 500 + hw.pL(501), uJ[ce] = 300 + hw.pL(201), uK[ce] = 100 + hw.pL(
			201))) : this.ge[ce] <= 5 ? (uM[ce] = 1e3, uN[ce] = 1e3, uL[ce] = 35 + hw.pL(16), uJ[ce] = 300 + hw.pL(201), uK[ce] = 50 + hw.pL(101)) : (uM[ce] = uN[ce] = 800, uL[ce] = 5, uJ[ce] = 10, uK[ce] = 250), uW(ce)
	}, this.uT = function() {
		for (var d5 = hs.uX, uS = aI.gN, ce = d5 - 1; 0 <= ce; ce--) this.ge[ce + uS] = 0;
		for (var gv = 0; gv < 6; gv++) {
			for (ce = d5 + hs.uY[gv] - 1; d5 <= ce; ce--) this.ge[ce + uS] = gv;
			d5 += hs.uY[gv]
		}
	}, this.pJ = function(fF, value) {
		uI[fF] = Math.min(value, uI[fF])
	}, this.j1 = function(fF) {
		0 == --uI[fF] && ! function(fF) {
			(function(fF) {
				uM[fF] !== uN[fF] && (uM[fF] += uM[fF] < uN[fF] ? 3 : -3);
				uJ[fF] !== uK[fF] && (uJ[fF] += uJ[fF] < uK[fF] ? uL[fF] : -uL[fF], uJ[fF] = (Math.abs(uJ[fF] - uK[fF]) <= uL[fF] ? uK : uJ)[fF]);
				uI[fF] = gf.gg(uM[fF], 10)
			})(fF), iA.jm.pB(fF, gf.gg(uJ[fF] * bX.gM[fF], 1e3))
		}(fF)
	}, this.qb = function(fF, lu) {
		uM[fF] = uN[fF] = lu
	}
}

function hu() {
	this.jp = function(player, kz) {
		iF.ub(player, i9.nb(kz), i9.nd(kz)) && (aC.ah = !0), aI.df && this.j1()
	}, this.j1 = function() {
		aI.g1 = !1;
		for (var ce = 0; ce < aI.gN; ce++) 0 !== bX.g3[ce] && 0 === bX.gD[ce] && iF.uc(ce);
		0 !== bX.g3[aI.bS] ? (h0.ir[7] = bX.gD[aI.bS], h0.ir[8] = bX.gM[aI.bS], aZ.ud(), be.ue(), aI.bG || ct.ne(bX.sj[aI.bS] - 5, bX.sk[aI.bS] - 5, bX.sl[aI.bS] + 5, bX.sm[aI.bS] + 5), f8.k()) : aO.show(!1, !1, !1, !0), aa.nn(18), cz.qK(), cz
			.iU(!0), f1.a6.uf(), aP.c1(), aI.he = null, i8.ug = !0, i8.qQ(), aI.df && ca.cb.setState(1)
	}
}

function v0(oj) {
	eo && !oj || (v2(), gf = new v3, uq = new v4, bT = new v5, dK = new v6, aI = new hS, jG = new v7, c9 = new v8, k0 = new v9, iD = new uH, iK = new vA, iL = new vB, ct = new vC, iF = new vD, iG = new mr, uh = new vE, aP = new vF, aS = new vG, aa =
		new my, ek = new vH, aR = new vI, f6 = new vJ, aZ = new vK, aY = new cV, ak = new vL, f7 = new vM, aX = new vN, be = new vO, aO = new vP, ui = new vQ, bK = new vR, aK = new vS, eJ = new vT, i4 = new vU, uk = new vV, gC = new vW, hy =
		new vX, ul = new lV, iN = new vY, hO = new vZ, uj = new hJ, cz = new s1, bX = new va, hz = new vb, hs = new vc, nl = new vd, i6 = new ve, r1 = new vf, ay = new vg, a5 = new vh, hw = new vi, iA = new vj, ey = new vk, aE = new vl, f8 =
		new vm, aA = new vn, aT = new vo, jg = new vp, iP = new vq, ol = new mb, um = new vr, gi = new vs, iO = new vt, un = new vu, iQ = new vv, iR = new tt, du = new cI, eN = new rW, aL = new vw, lo = new vx, uo = new vy, jz = new li, up =
		new vz, aU = new a, i9 = new w0, f4 = new w1, gk = new w2, f1 = new w3, ur = new w4, dj = new lY, dC = new w5, ad = new w6, aH = new w7, hq = new dR, ca = new w8, eo = new w9, dq = new wA, cs = new wB, g8 = new wC, f5 = new wD, dF =
		new wE, i8 = new wF, iB = new wG, us = new wH, h0 = new ii, aN = new wI, aC = new wJ, nV = new wK, dO = new wL, uu = new wM, uv = new qR, uw = new wN, b7 = new wO, rr = new rj, hr = new bM, uy = new wP, h7 = new wQ, uz = new wR, eo.k(),
		ca.k(), aA.i5(), cs.k(), jG.k(), jG.wT(), (aw = new wU).k(), bT.k(), iB.k(), a5.k(), c9.k(), k0.k(), dC.k(), aH.k(), el = new wV, aA.k(), aC.k(), dO.k(), us.k(), ut = new wW, hw.k(), hO.wX(), hq.k(), i6.k(), aK.k(), ak.k(), hz.k(), aU
	.k(), eJ.k(), aC.ah = !0, setTimeout(function() {
			dC.iE(2, 14071)
		}, 0), aH.eF(5, 5), up.wY() || ca.cb.wZ(), aA.wa(), eo.wb = 1)
}

function wc() {
	this.j1 = function(player) {
		return !!f4.wd.we(player) && !(f4.a6.pl[player] >= Math.max(3 * iA.performance.qV, iD.uP[iD.ge[player]]) || !bT.bU.ga(player, iD.uO[iD.ge[player]], 32, 0)) && (be.wf() ? function(player) {
			var wl = f4.c3.wm(),
				en = wl.length;
			if (0 === en) return !1;
			wl = wl[hw.pL(en)], en = f4.a6.u9[wl];
			if (f4.ku.wo(player, en)) return !1;
			return !! function(player, wn) {
				var wn = i9.kt(f4.a6.kp[wn]),
					u1 = i9.nb(wn),
					wn = i9.nd(wn),
					na = bX.sj[player],
					nc = bX.sk[player],
					ev = bX.sl[player],
					player = bX.sm[player],
					ev = Math.max(u1 - ev, na - u1),
					na = Math.max(wn - player, nc - wn);
				return ev < 100 && na < 100
			}(player, wl) && !!f4.wq.wr(player, en, 1) && (bT.bU.h4(player), f4.a6.ws(player), !0)
		}(player) : !!(iA.wh.j1(player) || iA.wi.j1(player) || iA.wj.j1(player)) && (function(player) {
			gk.wt[1] = 4, bT.bU.h4(player), f4.a6.ws(player)
		}(player), !0))
	}
}

function wu() {
	var wv = new Uint16Array(aI.fo);

	function x5(player, x2) {
		for (var en = gk.pj[0], xG = gk.xG, xH = -1, xI = aI.fo, ce = 0; ce < en; ce++) {
			var xJ, fF = xG[ce];
			h7.h8(player, fF) && (xJ = i9.xK(x2, i9.xL(fF)), -1 === xH || xJ < xH) && (xH = xJ, xI = fF)
		}
		return xI
	}

	function x7(x4, x2) {
		if (x4 === aI.fo) return 0;
		var l3 = bX.l3[x4],
			ju = l3.length;
		if (0 === ju) return 0;
		for (var en = Math.min(ju, 10), xI = 0, xH = i9.xK(l3[xI] >> 2, x2), ce = 0; ce < en; ce++) {
			var kU = hw.pL(ju),
				xJ = i9.xK(l3[kU] >> 2, x2);
			xJ < xH && (xH = xJ, xI = kU)
		}
		return l3[xI] >> 2
	}

	function xB(player, x2, g7, xM) {
		var xN;
		(xM === aI.fo || (xN = i9.xL(g7), xM = i9.xL(xM), i9.xK(x2, xN) < i9.xK(x2, xM))) && (wv[player] = g7)
	}
	this.k = function() {
		wv.fill(aI.fo)
	}, this.ww = function() {
		if (aC.j7() % 109 == 9 && !(gC.gB < 20) && aI.dm && !(f5.hF() < gf.gg(8 * aI.hG, 10))) {
			var gH = f5.gI();
			if (g8.o5[gH]) {
				f5.wx(gH);
				var en = gk.pj[0];
				if (0 !== en)
					for (var jU = gk.pk, gJ = gC.gJ, gB = gC.gB, wy = wv, kU = hw.pL(en), ce = 0; ce < gB; ce++) {
						var kP = gJ[ce],
							kQ = jU[kU];
						bT.bU.g6(kP, kQ) && 512 === wy[kP] && (wy[kP] = kQ, kU = (kU + 1) % en)
					}
			}
		}
	}, this.j1 = function(player) {
		var x2, x6, x4, wz = function(player) {
			var g7 = wv[player];
			if (g7 !== aI.fo) {
				if (bT.bU.gO(g7) && bX.l3[g7]) return g7;
				wv[player] = aI.fo
			}
			return aI.fo
		}(player);
		return function(player) {
			for (var xE = gC.gJ, ju = gC.gB, en = Math.min(ju, ju < 17 && 5 === hw.pL(20) ? 1 : 16), xF = hw.pL(ju), xG = gk.xG, l3 = bX.l3, lu = 0, ce = 0; ce < en; ce++) {
				var fF = xE[(ce + xF) % ju];
				fF !== player && l3[fF].length && (xG[lu++] = fF)
			}
			gk.pj[0] = lu
		}(player), 0 !== gk.pj[0] && (0 < (x6 = x7(x4 = x5(player, x2 = i9.x3(player)), x2)) && f4.x8.x9(player, f4.c3.xA(x6, x2)) ? (xB(player, x2, x4, wz), !0) : 0 < (x4 = function(player, x2) {
			for (var en = gk.pj[0], xG = gk.xG, wy = wv, xF = 0, ce = 0; ce < en; ce++) {
				var fF = xG[ce],
					fF = wy[fF];
				fF !== aI.fo && bT.bU.gO(fF) && player !== fF && h7.h8(player, fF) && (xG[xF++] = fF)
			}
			return 0 !== (gk.pj[0] = xF) ? x7(x5(player, x2), x2) : 0
		}(player, x2)) && f4.x8.x9(player, f4.c3.xA(x4, x2)) ? (xB(player, x2, i4.l9(x4 << 2), wz), !0) : !!(0 < (x6 = x7(wz, x2)) && f4.x8.x9(player, f4.c3.xA(x6, x2))))
	}
}

function vb() {
	var xP, xQ, xR;
	this.k = function() {
		xP = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), xQ =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), xR = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var oZ = ["K ", " Y", "E ", " Z", " z", " s", "S "], xS = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], ce = xP.length - 1; 0 <= ce; ce--)
			for (var jR = oZ.length - 1; 0 <= jR; jR--) xP[ce] = xP[ce].replace(oZ[jR], xS[jR]);
		if (__fx.settings.realisticNames) xP = realisticNames;
	}, this.i0 = function() {
		var en = aI.gN,
			bY = bX.bY,
			o2 = bX.o2,
			playerNamesData = aI.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var ce = 0; ce < en; ce++) bY[ce] = o2[ce] = "Player " + hw.pL(1e3);
		else
			for (ce = 0; ce < en; ce++) bY[ce] = o2[ce] = __fx.nameFilter.filter(playerNamesData[ce])
	}, this.iE = function() {
		if (9 === aI.dw) {
			for (var au = hw.random(), xY = xR, xZ = xQ, ge = iD.ge, en = xY.length, ju = aI.data.teamPlayerCount[7], bY = bX.bY, o2 = bX.o2, ce = ju - 1; ce >= aI.gN; ce--) bY[ce] = o2[ce] = xY[(ce + au) % en];
			for (en = xZ.length - 1, ce = ju; ce < aI.fo; ce++) bY[ce] = o2[ce] = xZ[ge[ce] ? en : ce % en]
		} else(2 === aI.data.playerNamesType ? function() {
			for (var en = aI.fo, bY = bX.bY, o2 = bX.o2, playerNamesData = aI.data.playerNamesData, ce = aI.gN; ce < en; ce++) bY[ce] = o2[ce] = __fx.nameFilter.filter(playerNamesData[ce])
		} : 1 === aI.data.playerNamesType ? function() {
			for (var bY = bX.bY, o2 = bX.o2, ce = aI.gN; ce < aI.fo; ce++) bY[ce] = o2[ce] = "Bot " + hw.pL(1e3)
		} : function() {
			for (var xa = xP, en = xa.length, au = hw.random(), bY = bX.bY, o2 = bX.o2, ce = aI.gN; ce < aI.fo; ce++) bY[ce] = o2[ce] = xa[(ce + au) % en]
		})()
	}
}

function xb() {
	function xp() {
		dC.kE.j1()
	}

	function xz(fF, xy) {
		0 < xy && (dC.kF[fF] += xy, dC.kF[fF + 1] += xy, dC.kF[fF + 2] += xy)
	}

	function xu(fF) {
		return dC.kF[fF + 2] > dC.kF[fF] && dC.kF[fF + 2] > dC.kF[fF + 1]
	}
	this.xc = -1, this.g0 = 0, this.xd = 0, this.xe = 8, this.xf = 32, this.xg = 8, this.xh = 32, this.xi = [0, 0], this.se = [0, 0, 0, 0], this.xj = null, this.xk = !0, this.xl = !1, this.xm = function() {
		-1 !== this.xc && clearTimeout(this.xc), this.xc = -1, this.xj = null, r1.xn()
	}, this.k = function() {
		7 === aK.at() || this.xl || (this.xk = !0, this.g0 = 0, this.xd = 1, this.xi = [dC.k3.k4[dC.k5].kZ[0], dC.k3.k4[dC.k5].ka[0]], this.se = [dC.k3.k4[dC.k5].xo[3], dC.k3.k4[dC.k5].xo[4], dC.k3.k4[dC.k5].xo[5], dC.k3.k4[dC.k5].xo[6]], this
			.xe = dC.k3.k4[dC.k5].xo[7], this.xf = dC.k3.k4[dC.k5].xo[8], this.xg = dC.k3.k4[dC.k5].xo[9], this.xh = dC.k3.k4[dC.k5].xo[10], this.xk ? this.xc = setTimeout(xp, 16) : this.j1())
	}, this.j1 = function() {
		if (8 === aK.at() && ct.xq()) this.xc = setTimeout(xp, 16);
		else {
			if (0 === this.g0) {
				var xr = hw.xs();
				if (hw.hx(dC.k3.k4[dC.k5].xo[2]), r1.iE([dC.dD, dC.dE, dC.k3.k4[dC.k5].xo[0], dC.k3.k4[dC.k5].xo[1]]), hw.hx(xr), this.xj = r1.r2(), this.g0++, this.xk) return void(this.xc = setTimeout(xp, 16))
			}
			for (var fF, kz, xr = this.xk ? 10 : 1e6, xr = dC.dE - this.xd - 1 < xr ? dC.dE - this.xd - 1 : xr, xt = this.xd + xr, aG = this.xd; aG < xt; aG++)
				for (var aF = 1; aF < dC.dD - 1; aF++) xu(fF = 4 * (kz = aF + aG * dC.dD)) ? this.xv(fF, kz, 1) : (this.xv(fF, kz, 0), function(aF, aG, fF) {
					return 1 < aF && xu(fF - 4) || aF < dC.dD - 2 && xu(fF + 4) || 1 < aG && xu(fF - 4 * dC.dD) || aG < dC.dE - 2 && xu(fF + 4 * dC.dD)
				}(aF, aG, fF) && this.xx(aF, aG));
			this.xd = xt, this.xd >= dC.dE - 1 ? (dC.kB.putImageData(dC.kC, 0, 0, 1, 1, dC.dD - 2, dC.dE - 2), aC.ah = !0, this.xm()) : this.xk && (this.xc = setTimeout(xp, 16))
		}
	}, this.xv = function(fF, kz, eI) {
		xz(fF, Math.floor(this.xi[eI] + this.se[eI] * this.xj[kz] / 1e4) - dC.kF[fF])
	}, this.y0 = function(fF, au, y1, eI, se) {
		xz(fF, Math.floor(this.xi[eI] + (1 - au / y1) * se) - dC.kF[fF])
	}, this.xx = function(d1, d2) {
		for (var fF, au, y1, y2 = d1 - this.xf, y3 = d2 - this.xf, y4 = d1 + this.xf, xt = d2 + this.xf, y2 = y2 < 1 ? 1 : y2, y4 = y4 > dC.dD - 2 ? dC.dD - 2 : y4, xt = xt > dC.dE - 2 ? dC.dE - 2 : xt, aG = y3 < 1 ? 1 : y3; aG <= xt; aG++)
			for (var aF = y2; aF <= y4; aF++) xu(fF = 4 * (aF + aG * dC.dD)) ? (y1 = this.xe + (this.xf - this.xe) * this.xj[aF + dC.dD * aG] / 1e4, Math.abs(d1 - aF) > y1 || Math.abs(d2 - aG) > y1 || y1 <= (au = Math.sqrt((d1 - aF) * (d1 - aF) +
				(d2 - aG) * (d2 - aG))) || this.y0(fF, au, y1, 1, this.se[3])) : (y1 = this.xg + (this.xh - this.xg) * this.xj[aF + dC.dD * aG] / 1e4, Math.abs(d1 - aF) > y1 || Math.abs(d2 - aG) > y1 || y1 <= (au = Math.sqrt((d1 - aF) * (d1 -
				aF) + (d2 - aG) * (d2 - aG))) || this.y0(fF, au, y1, 0, this.se[2]))
	}
}

function y5() {
	var y6 = null,
		y7 = null,
		y8 = 0,
		y9 = 0,
		yA = null;

	function yD() {
		0 !== y7.c5 && (b7.b9.c1(), aH.eF(8, 29, new eS(25, {
			action: 0,
			cE: c9.cA.ba(y7.cE, 5),
			yK: 0
		}, 29)))
	}

	function yF() {
		return !b7.yP || b7.c3.yQ(y7) ? 1 : 0
	}

	function yE() {
		var aF = y6.aF,
			aG = y6.aG,
			yT = (b7.b9.c1(), yF());
		y6 = new yC([new e9(ux.yJ[5][0], function() {
			yI(5, 0)
		}, yT), new e9(ux.yJ[5][1], function() {
			yI(5, 1)
		}, yT), new e9(ux.yJ[5][2], function() {
			yI(5, 2)
		}, yT), new e9(ux.yJ[5][3], function() {
			yI(5, 3)
		}, yT)]), yH(aF, aG), y9 = y8 = 2
	}

	function yG() {
		29 === aH.bg && aH.bh().yU(c9.cA.ba(y7.cE, 5))
	}

	function yI(id, value) {
		5 === id && a5.p6.p7({
			action: 3,
			cE: c9.cA.ba(y7.cE, 5),
			value: value
		})
	}

	function yH(aF, aG, yX) {
		y6.show(aF, aG, yX), b7.c0.show(y6.aF, y6.aG, y7, 1)
	}
	this.yB = function(a2, bx) {
		y8 = 1, y7 = bx, y6 = new yC([new e9(L(151), yD, 0 === bx.c5 ? 1 : 0), new e9(L(152), yE, yF()), new e9(L(153), yG, 0)]), yH((yA = {
			clientX: a2.clientX,
			clientY: a2.clientY
		}).clientX, yA.clientY, 1)
	}, this.b6 = function(code) {
		if (29 !== aH.bg) return !1;
		if (!y7) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.c1();
			else if (bT.bZ.startsWith(code, "Numpad") || bT.bZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === y8) this.yB(yA, y7);
				else {
					if (!y6) return !1;
					1 === y8 ? code <= 1 ? yD() : 2 === code ? yE() : (yG(), this.c1()) : (yI(y9, gf.hI(code - 1, 0, ux.yJ[y9].length - 1)), this.c1())
				}
		}
		return !0
	}, this.c1 = function() {
		y8 = 0, y6 && y6.c1(), y6 = null, b7.c0.c1()
	}
}

function yY() {
	this.we = function(player) {
		return !!aI.data.passableWater && f4.a6.kr !== f4.a6.uP && f4.a6.pl[player] !== f4.a6.yZ && 0 !== bX.l3[player].length
	}, this.ya = function(yb) {
		var yc = gk.wt[1];
		return !(4 <= yc || !f4.c3.yd(i9.lO(yb))) && i4.l7(i9.lO(i9.ye(yb, yc)))
	}
}

function wL() {
	this.yf = 0, this.gap = 0, this.yg = 0, this.yh = 0, this.k = function() {
		this.resize()
	}, this.resize = function() {
		this.yf = .0022 * bT.ed.yi(.5) * aA.cd, this.yg = this.yf / aA.aB, this.gap = Math.max(Math.floor((ca.cb.cc() ? .0114 : .01296) * aA.cd), 2), this.yh = this.gap / aA.aB
	}
}

function yj() {
	function z7() {
		var id = jz.k6(3);
		return 0 === id ? {
			id: id,
			cE: jz.k6(30),
			mj: b7.yU.z9(k0.ys.eP(7))
		} : 1 === id ? {
			id: id,
			cE: jz.k6(30),
			zA: jz.k6(3),
			value: jz.k6(30),
			target: jz.k6(30)
		} : 2 === id ? {
			id: id,
			cE: jz.k6(30),
			zA: jz.k6(3)
		} : 3 === id ? {
			id: id,
			cE: jz.k6(30),
			zA: jz.k6(3),
			value: jz.k6(4),
			target: jz.k6(30)
		} : 4 === id ? {
			id: id,
			cE: jz.k6(30),
			zA: jz.k6(3),
			target: jz.k6(30)
		} : 5 === id ? {
			id: id,
			zA: jz.k6(6)
		} : 6 === id ? {
			id: id,
			value: jz.k6(17)
		} : null
	}
	this.yk = function(m9) {
		if (m9 !== a5.a6.mD) a5.a6.close(m9, 3239);
		else if (6 !== aK.at()) a5.a6.close(m9, 3271);
		else {
			b7.k();
			for (var ce = 0; ce < 4; ce++) {
				var q5 = b7.a6.pr[ce],
					playerCount = (q5.q6 = jz.k6(10), q5.k5 = jz.k6(6), q5.mapSeed = jz.k6(14), q5.yl = jz.k6(4), q5.ym = jz.k6(6), q5.yn = jz.k6(14), q5.yo = jz.k6(4), q5.yp = jz.k6(1), q5.q8 = jz.k6(12), q5.spawningSeed = jz.k6(14), jz.k6(16));
				b7.cC.yq[ce] = jz.k6(16);
				for (var jR = 0; jR < playerCount; jR++) b7.cC.yr(ce, jz.k6(30), k0.ys.eP(5), jz.k6(4), jz.k6(30), jz.k6(7), jz.k6(16), jz.k6(18), jz.k6(11), jz.k6(12))
			}
			aH.eF(29), b7.a6.pw(!0)
		}
	}, this.yt = function(m9) {
		if (m9 !== a5.a6.mD) a5.a6.close(m9, 3239);
		else if (b7.b8) {
			b7.a6.pu[0] = jz.k6(20), b7.a6.pu[1] = jz.k6(20);
			for (var yu = jz.k6(16), jR = 0; jR < yu; jR++) {
				var id = jz.k6(3);
				0 === id ? b7.cC.yr(jz.k6(2), jz.k6(30), k0.ys.eP(5), 0, 1234566, 127, 0, jz.k6(18), 0, jz.k6(12)) : 1 === id ? b7.cC.yv(jz.k6(16), jz.k6(2)) : 2 === id ? b7.cC.yw(jz.k6(16), jz.k6(2), jz.k6(2)) : 3 === id ? b7.cC.yx(jz.k6(16), jz
					.k6(2)) : 4 === id ? b7.cC.yy(jz.k6(16), jz.k6(2), jz.k6(4), jz.k6(30), jz.k6(7), jz.k6(16), jz.k6(11), jz.k6(18)) : 5 === id && b7.cC.yz(jz.k6(16), jz.k6(2), jz.k6(1))
			}
			for (var ce = 0; ce < 4; ce++) {
				var q5 = b7.a6.pr[ce];
				if (q5.q6 = jz.k6(10), q5.ym = jz.k6(6), q5.yn = jz.k6(14), q5.yo = jz.k6(4), 0 === q5.q6) {
					if (q5.a8 = jz.k6(10), q5.mE = jz.k6(10), b7.z0.wY(ce)) return;
					q5.k5 = jz.k6(6), q5.mapSeed = jz.k6(14), q5.yl = jz.k6(4), q5.yp = jz.k6(1), q5.q8 = jz.k6(12), q5.spawningSeed = jz.k6(14), q5.z1.push(q5.z1[0]), q5.z1.shift()
				}
			}
			b7.a6.pz()
		} else a5.a6.close(m9, 3251)
	}, this.z2 = function(m9) {
		if (m9 !== a5.a6.mD) a5.a6.close(m9, 3272);
		else if (b7.b8) {
			for (var qA = jz.k6(4), q5 = b7.a6.pr[qA], z3 = q5.z3, z5 = (q5.z4 = jz.k6(20), jz.k6(6)), ce = 0; ce < z5; ce++) {
				var z6 = z7();
				b7.sp.z8(z6), z3.push(z6)
			}
			b7.a6.q9(qA)
		} else a5.a6.close(m9, 3273)
	}, this.zB = function(m9) {
		m9 !== a5.a6.mD ? a5.a6.close(m9, 3276) : b7.b8 ? b7.message.zC(z7()) : a5.a6.close(m9, 3277)
	}
}

function zD() {
	var j9, zE, zF, zH;

	function zG(ce) {
		aH.eF(8, aH.bg, new eS(21, {
			zJ: ce,
			rL: 0,
			rM: 10
		}))
	}
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), zE.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, zF = [new e9(L(154), function() {
		zG(5)
	}, 0, 0, 1), new e9(L(155), function() {
		zG(6)
	}, 0, 0, 1), new e9(L(156), function() {
		zG(7)
	}, 0, 0, 1), new e9("Audit Log", function() {
		zG(12)
	}, 0, 0, 1)], zH = [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})], j9 = new fP(L(157), zH), zE = new zI(zF, j9.fS)
}

function wJ() {
	this.zK = null, this.ah = !1, this.aD = 0, this.qL = 56;
	var zL = 0;

	function zM() {
		aC.aD = zL = performance.now(), aC.zK.j1(), window.requestAnimationFrame(zM)
	}
	this.k = function() {
		this.ic(), window.requestAnimationFrame(zM), this.aD = performance.now()
	}, this.iC = function() {
		aI.bG ? (this.zK = new zN, this.zK.k()) : aI.df ? this.zK = new zO : (this.zK = new qC, this.zK.k())
	}, this.ic = function() {
		this.zK = new zP, this.ah = !0
	}, this.j1 = function() {
		this.zK.qD++
	}, this.j7 = function() {
		return this.zK.qD
	}, this.zQ = function() {
		var mf = performance.now();
		mf < zL + 1e3 || (this.aD = mf, this.zK.j1())
	}
}

function vA() {
	var zR, zS, zT;

	function zW(oE) {
		for (var ce = zR - 1; 0 <= ce; ce--) 0 === zT[zS[ce]] && bX.gD[zS[ce]] >= oE && zV(zS[ce])
	}

	function zU(player) {
		var mf;
		64 === zT[player] ? zT[player] = 6 : (mf = bX.gD[player], zT[player] = mf < 1e3 ? 3 : mf < 1e4 ? 2 : mf < 6e4 ? 1 : 0)
	}
	this.k = function() {
		zR = 0, zS = new Uint16Array(aI.fo), zT = new Uint8Array(aI.fo)
	}, this.j1 = function() {
		for (var ce = zR - 1; 0 <= ce; ce--) 64 === zT[zS[ce]] ? zU(zS[ce]) : 0 == zT[zS[ce]]-- && (zU(zS[ce]), zV(zS[ce]));
		16e4 <= bX.gD[gE[0]] && (zW(16e4), 3e5 <= bX.gD[gE[0]]) && zW(3e5), bT.bU.gO(aI.bS) && (h0.ir[7] = Math.max(bX.gD[aI.bS], h0.ir[7]))
	}, this.zY = function(player) {
		for (var jR, ce = zR - 1; 0 <= ce; ce--)
			if (player === zS[ce]) {
				for (zR--, jR = ce; jR < zR; jR++) zS[jR] = zS[jR + 1];
				return
			}
	}, this.lU = function(player, zZ) {
		for (var ce = zR - 1; 0 <= ce; ce--)
			if (player === zS[ce]) return;
		zS[zR++] = player, zT[player] = zZ ? 2 : 64
	}
}

function lf() {
	this.de = function() {
		if (2 === aI.di) aI.hi = 2;
		else {
			if (8 === aI.dw) bT.bU.bV(0) || 0 === bX.g3[0] ? aI.hj = 1 : bT.bU.bV(1) || 0 === bX.g3[1] ? aI.hj = 0 : aI.hj = +(bX.gD[1] > bX.gD[0]);
			else {
				if (aI.dm) {
					var gH = f5.zb();
					if (aI.hk = gH, g8.o5[gH]) return void(aI.hi = +(g8.g9[aI.bS] === gH))
				}
				aI.hj = gE[0]
			}
			aI.hi = +(aI.hj === aI.bS)
		}
	}
}

function zc() {
	var zf, zg;
	this.zd = 3, this.ze = null, this.a8 = 0, this.mD = 0;

	function zr() {
		return 0 === bK.jL ? eo.zs ? 1 : 0 : bK.jL - 1
	}

	function zw(m9, rJ, zv) {
		zg[m9].zi = !0, zl(m9), zf[m9] = new zz, zf[m9].k(m9, rJ, zv)
	}

	function zx(ce) {
		return zg[ce].zi && zf[ce].zx()
	}

	function zl(m9) {
		zg[m9].aD = aC.aD, zg[m9].mA = !1
	}
	this.k = function() {
		this.ze = new Array(this.zd), this.ze[0] = "territorial.io", this.ze[1] = "1.territorial.io", this.ze[2] = "4.territorial.io", zf = new Array(this.zd), zg = new Array(this.zd);
		for (var ce = this.zd - 1; 0 <= ce; ce--) zg[ce] = {
			zi: !1,
			aD: 0,
			mA: !1
		};
		this.zj(0, 0, 0)
	}, this.zk = function(ce) {
		return zf[ce]
	}, this.j1 = function() {
		for (var ce = this.zd - 1; 0 <= ce; ce--) this.ke(ce) && aC.aD > zg[ce].aD + 15e3 && (a5.oC.m8(ce, zg[ce].mA), zl(ce));
		!this.ke(0) && aC.aD > zg[0].aD + 8e3 && (zg[0].aD = aC.aD, this.zj(0, 0, 0))
	}, this.zm = function(id) {
		return this.zj(0, id, 0) && this.zn(0)
	}, this.zo = function(zp) {
		return zp ? bK.zq : zr()
	}, this.zt = function() {
		return zr() ? "game.territorial.io" : "territorial.io"
	}, this.oy = function(zu) {
		zu = this.zt() + zu;
		return "<a href='https://" + zu + "' target='_blank'>" + zu + "</a>"
	}, this.zj = function(m9, rJ, zp) {
		zp = this.zo(zp);
		if (zg[m9].zi) {
			if (zf[m9].zx()) return zf[m9].zy(rJ), zf[m9].ke();
			zf[m9].c1()
		}
		return zw(m9, rJ, zp), !1
	}, this.a00 = function(m9, rJ) {
		console.log("Connection to Server " + m9), a5.kf.a01(m9)
	}, this.zn = function(ce) {
		return this.ke(ce) && zf[ce].zn()
	}, this.a02 = function(ce) {
		zf[ce].a02()
	}, this.ke = function(ce) {
		return zg[ce].zi && zf[ce].ke()
	}, this.send = function(m9, lj) {
		0 !== m9 && zl(m9), zf[m9].send(lj)
	}, __fx.customLobby.setSendFunction(this.send), this.a7 = function(m9) {
		8 === aK.at() && (zg[m9].mA = !0, a5.je.a03 = !0)
	}, this.close = function(m9, a04) {
		zx(m9) && zf[m9].close(a04)
	}, this.a05 = function(m9, a04) {
		uu.a06(a04), zx(m9) && zf[m9].close(a04)
	}, this.a07 = function(a04) {
		for (var ce = this.zd - 1; 0 <= ce; ce--) this.close(ce, a04)
	}, this.a08 = function(m9, a04) {
		for (var ce = this.zd - 1; 0 <= ce; ce--) ce !== m9 && this.close(ce, a04)
	}, this.ib = function() {
		0 === this.a8 && (aI.df || aI.bG) || this.close(this.a8, 3246)
	}, this.a09 = function(m9, a2) {
		zf[m9].c1(), uu.a0A(m9, a2.code)
	}
}

function fj() {
	var r6;
	this.a0B = [], this.r6 = document.createElement("div"), this.fk = function(bb, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = bb, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.r6.appendChild(
			title), title
	}, this.jI = function(bb, marginBottom) {
		var p8 = document.createElement("p");
		return p8.textContent = bb, p8.style.fontSize = "0.75em", p8.style.lineHeight = "1.2em", p8.style.marginBottom = marginBottom || "0", this.r6.appendChild(p8), p8
	}, this.a0C = function(bb) {
		var a0D = document.createElement("p");
		return a0D.textContent = bb, a0D.style.fontSize = "1em", a0D.style.marginBottom = "0", a0D.style.whiteSpace = "pre-wrap", a0D.style.overflowWrap = "break-word", this.r6.appendChild(a0D), a0D
	}, this.ox = function(uC, fontSize) {
		var r6 = document.createElement("div");
		return r6.innerHTML = uC, r6.style.fontSize = fontSize || "1em", r6.style.lineHeight = "1.2em", this.r6.appendChild(r6), r6
	}, this.fm = function(a0E) {
		for (var a0F = a0E.a0F, en = a0F.length, ce = 0; ce < en; ce++) this.r6.appendChild(a0F[ce])
	}, this.fp = function(bx) {
		return this.a0B.push(bx), this.r6.appendChild(bx.a2), bx
	}, this.resize = function() {
		for (var en = this.a0B.length, ce = 0; ce < en; ce++) this.a0B[ce].resize && this.a0B[ce].resize()
	}, (r6 = this.r6).style.position = "absolute", r6.style.height = "auto", r6.style.padding = "0.5em"
}

function a0G() {
	var a0H = a0I(),
		a0J = qc(),
		a0K = a0L();
	this.k6 = function() {
		return 123
	}, this.ia = function() {
		k0.cA.a0M(cs.buffer.data[183].value, 15), lo.mB(14, a0H), lo.mB(7, a0J), lo.mB(12, a0K)
	}
}

function a0N() {
	var fL, fM, fN, a0O;

	function fQ() {
		fU(), aH.fW()[19] = null, aH.fX()
	}

	function a0P() {
		fU(), aH.eF(21)
	}

	function fU() {
		1 === aI.data.gameMode ? aI.eQ.ht() : 0 === aI.data.gameMode && 1 === aI.data.colorsType && bT.fY.fZ(fN.fa(), aI.data.colorsData, 262143)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, a0O = [new e9("⬅️ " + L(6), fQ)], 1 === aI.data.gameMode && a0O.push(new e9(L(158), a0P, 1, 1)), fL = new fP(L(159), a0O), fM = new fR(fL.fS, (a0O = [], 0 === aI.data.gameMode ? (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(8), L(10)],
			value: aI.data.colorsType
		}, function(eI) {
			fU(), aI.data.colorsType = eI, 1 !== aI.data.colorsType || aI.data.colorsData && aI.data.colorsData.length === aI.fo || (aI.data.colorsData = new Uint32Array(aI.fo)), aH.eF(21)
		})), fd.push(fi)
	}(a0O), 1 === aI.data.colorsType && function(fd) {
		var fi = new fj;
		fi.fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.colorsData, 1)), fi.fp(fN), fd.push(fi)
	}(a0O)) : (aI.eQ.ht(), a0O.push(function() {
		var fi = new fj;
		fi.fk(L(160));
		for (var ce = 0; ce < g8.o4.length; ce++) {
			var kU = (ce + 1) % g8.o4.length,
				a2 = fi.ox((0 == kU ? "" : "Team ") + g8.o4[kU]);
			ce && (a2.style.marginTop = "0.5em"), fi.fp(new eH({
				eI: -1,
				value: aI.data.teamPlayerCount[kU]
			}, 1, 0, function(a2) {
				fL.fw[1].eU(0);
				var playerCount = gf.hI(Math.floor(a2.target.value), 0, 512);
				a2.target.value = playerCount, aI.data.teamPlayerCount[a2.target.a0S] = playerCount
			})).a2.a0S = kU
		}
		return fi
	}()), function(fd) {
		for (var fi = new fj, fl = (fi.fk(L(161)), []), ce = 0; ce < g8.o4.length; ce++) {
			var kU = (ce + 1) % g8.o4.length;
			fl.push(g8.o4[kU])
		}
		aI.data.colorsData || (aI.data.colorsData = new Uint32Array(1));
		fi.fm(new fn({
			fl: fl,
			value: (aI.data.colorsData[0] % 16 + g8.o4.length - 1) % g8.o4.length
		}, function(eI) {
			var eI = (eI + 1) % g8.o4.length,
				a0U = g8.a0V[eI],
				a0U = (a0U[0] >> 2 << 12) + (a0U[1] >> 2 << 6) + (a0U[2] >> 2);
			aI.data.colorsData[0] = a0U - (15 & a0U) + eI
		})), fd.push(fi)
	}(a0O)), a0O))
}

function wI() {
	this.b1 = 0, this.b2 = 0, this.fH = 0, this.fI = 0, this.a0W = 0, this.a0X = 0, this.a0Y = 0, this.a0Z = 0;
	var a0b = this.a0a = 0;
	this.a0c = 0, this.a0d = 0, this.a0e = 0, this.a0f = 0, this.eI = 0, this.a0g = null, this.af = !1, this.a0h = -1, this.a0i = !1, this.a0j = [0, 0], this.i5 = function() {
		this.a0g = [L(162), L(163, 0, "Balance"), L(164, 0, "Interest"), L(165)]
	}, this.k = function() {
		this.af = !1, this.a0h = -1, this.a0i = !1, this.resize()
	}, this.resize = function() {
		this.b1 = aA.b1 < 1.369 * aA.b2 ? aA.b1 : 1.369 * aA.b2;
		var gy = ca.cb.cc() && aA.b1 < aA.b2 ? 1 : ca.cb.cc() ? .8 : aA.b1 < aA.b2 ? .65 : .59;
		this.b1 = Math.floor(gy * this.b1), this.b1 -= ca.cb.cc() && aA.b1 < aA.b2 ? 2 * dO.gap + 2 : 0, this.b2 = Math.floor(this.b1 / 1.369), this.a0f = Math.floor(this.b2 / 150), this.a0f = Math.max(this.a0f, 1.5), this.fH = Math.floor(1 +
			.02 * this.b1), this.fI = Math.floor(1 + .04 * this.b1), this.a0Y = this.fI, a0b = Math.floor(.75 * this.a0Y), this.a0Z = Math.floor(1 + .075 * this.b1), this.a0c = Math.floor(1 + .1125 * this.b1), this.a0d = Math.floor(this.b1 *
			(ca.cb.cc() ? .03 : .029)), this.a0d = Math.max(this.a0d, 4), this.a0e = Math.floor(.035 * this.b1), this.a0e = Math.max(this.a0e, 4), this.a0a = this.b2 - 2 * this.a0Y - this.a0Z - this.a0c, this.af && this.a0k()
	}, this.m = function(d1, d2) {
		var oo, tJ;
		return !!this.af && (tJ = d1, oo = d2, d1 -= gf.gg(aA.b1 - this.b1, 2), d2 -= gf.gg(aA.b2 - this.b2, 2), d1 < 0 || d2 < 0 || d1 >= this.b1 || d2 >= this.b2 || d1 >= this.b1 - this.a0c && d2 < this.a0c ? -1 !== aS.m(tJ, oo) || aL.m(tJ,
			oo) || this.c1() : d2 < this.a0c || (d2 < this.b2 - this.a0Z ? (this.a0i = !0, this.a0h = (d1 - 2 * this.fH - this.a0W) / this.a0X, 3 !== this.eI && (aC.ah = !0)) : (tJ = (tJ = Math.floor(d1 / (this.b1 / this.a0g.length))) < 0 ?
				0 : tJ >= this.a0g.length ? this.a0g.length - 1 : tJ) !== this.eI && (this.eI = tJ, this.a0k(), aC.ah = !0)), !0)
	}, this.n = function(d1, d2) {
		return this.a0j[0] = d1, this.a0j[1] = d2, !(!this.af || !this.a0i || (d1 -= gf.gg(aA.b1 - this.b1, 2), d2 = this.a0h, this.a0h = (d1 - 2 * this.fH - this.a0W) / this.a0X, (0 <= this.a0h && this.a0h <= 1 || 0 <= d2 && d2 <= 1) && (aC
			.ah = !0), 0))
	}, this.al = function() {
		this.a0i && (this.a0i = !1)
	}, this.bF = function() {
		this.af ? this.c1() : this.show()
	}, this.show = function() {
		h0.im < 2 || (this.af = !0, this.a0k())
	}, this.c1 = function() {
		this.af = !1, this.a0h = -1, aC.ah = !0
	}, this.a0k = function() {
		this.eI < 2 ? this.a0W = f6.measureText(bT.bZ.ba(h0.max[this.eI]), bT.ed.ef(0, this.a0d)) : 2 === this.eI && (this.a0W = f6.measureText(bT.bZ.oe(6, 2), bT.ed.ef(0, this.a0d))), this.a0X = this.b1 - 2 * this.fH - this.a0W - this.fI
	}, this.j6 = function() {
		this.af && this.a0k()
	}, this.dP = function() {
		this.af && this.a0l()
	}, this.a0l = function() {
		var aF = gf.gg(aA.b1 - this.b1, 2),
			aG = gf.gg(aA.b2 - this.b2, 2);
		dQ.setTransform(1, 0, 0, 1, aF, aG), dQ.fillStyle = dK.fB, dQ.fillRect(0, this.a0c, this.b1, this.b2 - this.a0c), this.a0m(), this.em(), dQ.strokeRect(0, 0, this.b1, this.b2), bT.ed.textAlign(dQ, 2), dQ.font = bT.ed.ef(0, this.a0d), 0 ===
			this.eI ? this.a0n(h0.ik, aF, aG) : 1 === this.eI ? this.a0n(h0.gX, aF, aG) : 2 === this.eI ? this.a0o(aF, aG) : 3 === this.eI && (this.a0p(aF, aG), this.a0q(aF, aG)), aS.a0r(Math.floor(aF + this.b1 - .725 * this.a0c), Math.floor(aG +
				.275 * this.a0c), Math.floor(.45 * this.a0c)), dQ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a0m = function() {
		var ce, mf;
		for (dQ.lineWidth = this.a0f, bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 1), dQ.strokeStyle = dK.dM, dQ.font = bT.ed.ef(1, this.a0e), mf = this.b1 / this.a0g.length, dQ.fillStyle = dK.a0s, dQ.fillRect(this.eI * mf, this.b2 - this.a0Z,
				mf, this.a0Z), dQ.fillStyle = dK.dM, dQ.fillRect(0, this.b2 - this.a0Z - .5 * this.a0f, this.b1, this.a0f), ce = 1; ce <= 3; ce++) dQ.fillRect(ce * mf, this.b2 - this.a0Z, this.a0f, this.a0Z);
		for (ce = this.a0g.length - 1; 0 <= ce; ce--) dQ.fillText(bT.fA.o1(this.a0g[ce], 0, .9 * mf), (ce + .5) * mf, this.b2 - .46 * this.a0Z)
	}, this.em = function() {
		dQ.fillStyle = dK.a0t, dQ.fillRect(0, 0, this.b1, this.a0c), dQ.fillStyle = dK.dM, dQ.fillRect(0, this.a0c - .5 * this.a0f, this.b1, this.a0f), dQ.font = bT.ed.ef(1, .39 * this.a0c), dQ.fillText(bT.fA.o1(L(166), 0, .8 * this.b1), Math
			.floor(this.b1 / 2), Math.floor(.55 * this.a0c))
	}, this.a0n = function(jU, aF, aG) {
		var ju = h0.max[this.eI],
			dI = (dQ.setTransform(1, 0, 0, 1, aF + 2 * this.fH + this.a0W, aG + this.a0Y + this.a0c), dQ.lineWidth = 2, this.a0a / Math.sqrt(ju));
		dQ.beginPath(), dQ.moveTo(this.a0X, this.a0a - dI * Math.sqrt(jU[h0.im - 1]));
		for (var ce = h0.im - 2; 0 <= ce; ce--) dQ.lineTo(ce * this.a0X / (h0.im - 1), this.a0a - dI * Math.sqrt(jU[ce]));
		dQ.stroke();
		aF = this.a0r(jU, dI, .5);
		aF < .95 && dQ.fillText(bT.bZ.ba(ju), -this.fH, 0), .05 < Math.abs(aF - .5) && dQ.fillText(bT.bZ.ba(Math.floor(ju / 4)), -this.fH, Math.floor(this.a0a / 2)), .05 < aF && dQ.fillText("0", -this.fH, this.a0a)
	}, this.a0o = function(aF, aG) {
		dQ.setTransform(1, 0, 0, 1, aF + 2 * this.fH + this.a0W, aG + this.a0Y + this.a0c), dQ.lineWidth = 2;
		var dI = this.a0a / Math.max(h0.max[this.eI], 1);
		dQ.beginPath(), dQ.moveTo(this.a0X, this.a0a - dI * h0.il[h0.im - 1]);
		for (var ce = h0.im - 2; 0 <= ce; ce--) dQ.lineTo(ce * this.a0X / (h0.im - 1), this.a0a - dI * h0.il[ce]);
		dQ.stroke();
		aF = this.a0r(h0.il, dI, 1), aG = h0.max[this.eI] / 100;
		aF < .95 && dQ.fillText(bT.bZ.oe(aG, 2), -this.fH, 0), .05 < Math.abs(aF - .5) && dQ.fillText(bT.bZ.oe(aG / 2, 2), -this.fH, Math.floor(this.a0a / 2)), .05 < aF && dQ.fillText(bT.bZ.oe(0, 2), -this.fH, this.a0a)
	}, this.a0p = function(aF, aG) {
		dQ.setTransform(1, 0, 0, 1, aF + .34 * this.b1, aG + 2 * a0b + this.a0c), bT.ed.textAlign(dQ, 2);
		for (var a0u = this.b2 - 4 * a0b - this.a0Z - this.a0c, jU = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], ce = 9; 0 <= ce; ce--) dQ.fillText(bT.fA.o1(h0.is[jU[ce]], 0, .31 * this.b1), 0, ce * a0u / 9);
		var gU = h0.ir;
		for (dQ.setTransform(1, 0, 0, 1, aF + .39 * this.b1, aG + 2 * a0b + this.a0c), bT.ed.textAlign(dQ, 0), dQ.fillText(bT.bZ.oe(100 * gU[0] / (1024 * Math.max(gU[1], 1)), 1), 0, 0), ce = 8; 1 <= ce; ce--) dQ.fillText(gU[jU[ce]].toString(), 0,
			ce * a0u / 9);
		dQ.fillText(bT.bZ.oe(100 * (1 - bX.gD[aI.bS] / gU[7]), 0), 0, a0u)
	}, this.a0q = function(aF, aG) {
		dQ.setTransform(1, 0, 0, 1, aF + .79 * this.b1, aG + 2 * a0b + this.a0c), bT.ed.textAlign(dQ, 2);
		var ce, a0u = this.b2 - 4 * a0b - this.a0Z - this.a0c;
		for (dQ.fillStyle = dK.a0v, ce = 2; 0 <= ce; ce--) dQ.fillText(bT.fA.o1(h0.is[ce + 8], 0, .31 * this.b1), 0, ce * a0u / 9);
		dQ.fillText(bT.fA.o1(h0.is[18], 0, .31 * this.b1), 0, 3 * a0u / 9), dQ.fillStyle = dK.a0w, dQ.fillText(bT.fA.o1(h0.is[11], 0, .31 * this.b1), 0, 4 * a0u / 9), dQ.fillStyle = dK.a0x, dQ.fillText(bT.fA.o1(h0.is[13], 0, .31 * this.b1), 0,
				5 * a0u / 9), dQ.fillText(bT.fA.o1(h0.is[15], 0, .31 * this.b1), 0, 6 * a0u / 9), dQ.fillText(bT.fA.o1(h0.is[16], 0, .31 * this.b1), 0, 7 * a0u / 9), dQ.fillText(bT.fA.o1(h0.is[12], 0, .31 * this.b1), 0, 8 * a0u / 9), dQ
			.fillStyle = dK.a0y, dQ.fillText(bT.fA.o1(h0.is[17], 0, .31 * this.b1), 0, a0u), dQ.fillStyle = dK.a0v;
		var gU = h0.ir,
			a0z = gU[8] + gU[9] + gU[10] + gU[18],
			a0z = bT.bZ.ba(a0z),
			a10 = dQ.measureText(a0z).width,
			aF = (dQ.setTransform(1, 0, 0, 1, aF + .83 * this.b1 + a10, aG + 2 * a0b + this.a0c), dQ.fillText(bT.bZ.ba(gU[8]), 0, 0), dQ.fillText(bT.bZ.ba(gU[9]), 0, a0u / 9), dQ.fillText(bT.bZ.ba(gU[10]), 0, 2 * a0u / 9), dQ.fillText(bT.bZ.ba(
				gU[18]), 0, 3 * a0u / 9), dQ.fillStyle = dK.a0w, dQ.fillText(a0z, 0, 4 * a0u / 9), dQ.fillStyle = dK.a0x, dQ.fillText(bT.bZ.ba(gU[13]), 0, 5 * a0u / 9), dQ.fillText(bT.bZ.ba(gU[15]), 0, 6 * a0u / 9), dQ.fillText(bT.bZ.ba(gU[
				16]), 0, 7 * a0u / 9), dQ.fillText(bT.bZ.ba(gU[12]), 0, 8 * a0u / 9), gU[12] + gU[13] + gU[15] + gU[16]);
		dQ.fillStyle = dK.a0y, dQ.fillText(bT.bZ.ba(aF), 0, a0u), dQ.fillStyle = dK.dM
	}, this.a0r = function(jU, dI, a12) {
		var ce, a2, gw;
		return this.a0h < 0 || 1 < this.a0h ? .25 : (ce = this.a0h * (h0.im - 1), gw = jU[a2 = Math.floor(ce)], gw += (ce - a2) * (jU[a2 < h0.im - 1 ? a2 + 1 : a2] - gw), dQ.strokeStyle = dK.a13, .04 < this.a0h && this.a14(0, this.a0a - dI * Math
				.pow(gw, a12), ce * this.a0X / (h0.im - 1), this.a0a - dI * Math.pow(gw, a12)), .04 < gw / h0.max[this.eI] && this.a14(ce * this.a0X / (h0.im - 1), this.a0a, ce * this.a0X / (h0.im - 1), this.a0a - dI * Math.pow(gw, a12)), dQ
			.fillStyle = dK.a15, dQ.beginPath(), dQ.arc(ce * this.a0X / (h0.im - 1), this.a0a - dI * Math.pow(gw, a12), Math.max(2, .014 * this.b2), 0, 2 * Math.PI), dQ.fill(), jU = this.a0h * aC.qL, jU = 0 === bX.g3[aI.bS] ? Math.floor(jU *
				h0.iq) : Math.floor(jU * aC.j7()), dQ.fillStyle = dK.dM, dQ.fillText(1 === a12 ? bT.bZ.oe(gw / 100, 2) : bT.bZ.ba(Math.floor(gw)), -this.fH, this.a0a - dI * Math.pow(gw, a12)), bT.ed.textAlign(dQ, 1), dQ.fillText(be.a16(jU),
				ce * this.a0X / (h0.im - 1), this.a0a + this.a0d - (ca.cb.cc() ? 2 : 0) - this.a0f), bT.ed.textAlign(dQ, 2), dI * Math.pow(gw, a12) / this.a0a)
	}, this.a14 = function(na, nc, ev, ew) {
		dQ.beginPath(), dQ.moveTo(na, nc), dQ.lineTo(ev, ew), dQ.stroke()
	}
}

function a17() {
	this.a18 = function(zJ, rL, rM) {
		lo.iE(75), lo.mB(1, 0), lo.mB(6, 21), lo.mB(6, zJ), lo.mB(1, +(rL < 0)), lo.mB(1, +(rM < 0)), lo.mB(30, Math.abs(rL)), lo.mB(30, Math.abs(rM)), a5.a6.send(0, lo.lj)
	}, this.a19 = function(zJ, a1A, a1B) {
		lo.iE(18 + 16 * a1A.length + 30), lo.mB(1, 0), lo.mB(6, 22), lo.mB(6, zJ), a5.kf.a1C(a1A), lo.mB(30, a1B), a5.a6.send(0, lo.lj)
	}, this.a1D = function(zJ, a1A, a1B) {
		lo.iE(73), lo.mB(1, 0), lo.mB(6, 28), lo.mB(6, zJ), k0.cA.a0M(a1A, 5), lo.mB(30, a1B), a5.a6.send(0, lo.lj)
	}, this.a1E = function(rK, rN) {
		for (var en = rN.length, a1F = 0, ce = 0; ce < en; ce++) a1F += rN[ce].length;
		for (lo.iE(21 + 3 * en + 16 * a1F), lo.mB(1, 0), lo.mB(6, 23), lo.mB(3, rK), lo.mB(4, en), lo.mB(7, a1F), ce = 0; ce < en; ce++) lo.mB(3, rN[ce].length), c9.ly.a1G(rN[ce]);
		a5.a6.send(0, lo.lj)
	}, this.a1H = function(rK, rL, rM) {
		lo.iE(52), lo.mB(1, 0), lo.mB(6, 24), lo.mB(3, rK), lo.mB(1, +(rL < 0)), lo.mB(1, +(rM < 0)), lo.mB(20, Math.abs(rL)), lo.mB(20, Math.abs(rM)), a5.a6.send(0, lo.lj)
	}
}

function a1I() {
	var a1J = new Uint8Array(78);
	this.k = function() {
		var ce;
		for (a1J[50] = 37, ce = 0; ce < 10; ce++) a1J[ce + 3] = ce + 1;
		for (ce = 0; ce < 26; ce++) a1J[ce + 20] = ce + 11, a1J[ce + 52] = ce + 38
	}, this.a1K = function(bb) {
		return bb.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a1L = function(bb, size) {
		if ((bb = this.a1K(bb)).length > size) return bb.substring(0, size);
		for (; bb.length < size;) bb = "-" + bb;
		return bb
	}, this.k2 = function(bb) {
		for (var a1M = a1J, en = bb.length, jU = new Uint8Array(en), ce = 0; ce < en; ce++) jU[ce] = a1M[bb.charCodeAt(ce) - 45];
		return jU
	}, this.k1 = function(mo) {
		lo.iE(6 * mo.length), this.a1N(mo), jz.k(lo.lj)
	}, this.a1N = function(mo) {
		for (var en = mo.length, b1 = lo, ce = 0; ce < en; ce++) b1.mB(6, mo[ce])
	}, this.a1G = function(bb) {
		this.a1N(this.k2(bb))
	}, this.a0M = function(bb, size) {
		this.a1N(this.k2(this.a1L(bb, size)))
	}, this.a1O = function(bb, size) {
		for (var jU = this.k2(this.a1L(bb, size)), gU = 0, d3 = 1, ce = jU.length - 1; 0 <= ce; ce--) gU += d3 * jU[ce], d3 *= 64;
		return gU
	}
}

function a1P() {
	this.j1 = function(player, l1) {
		player = f4.c3.uA(player, l1);
		return !(player < 0 || !f4.ku.a1Q(player) || (f4.ku.kv(player), 0))
	}
}

function iM() {
	a1X = 0, a1Y = 2048, a1Z = new Uint32Array(4 * a1Y), a1a = 0, a1b = new Uint32Array(a1Y), a1c = new Uint8Array(dC.dD * dC.dE)
}

function zV(player) {
	a1S = player, a1d = !1, a1e(), a1f();
	for (var ce = iN.a1g(a1S) - 1; 0 <= ce; ce--) a1R = ce, a1h();
	a1d && a1i()
}

function a1i() {
	h7.a1j(), h7.a1k()
}

function a1h() {
	a1W = iN.a1l(a1S, a1R), a1T = iN.a1m(a1S, a1R), a1U = iN.a1n(a1S, a1R), a1o(), (0 !== a1X && (a1q(), a1r()) ? a1s : a1p)()
}

function a1r() {
	if (!((a1V = gf.gg(a1T, a1X)) > aI.hV)) {
		if (!a1U) return !1;
		var a1t = a1X * (1 + aI.hV);
		a1T += bT.bU.gt(a1S, a1t - a1T), a1V = gf.gg(a1T, a1X)
	}
	return !0
}

function a1q() {
	for (var ce = a1X - 1; 0 <= ce; ce--) a1c[gf.gg(a1Z[ce], 4)] = 0
}

function a1p() {
	1 === iN.a1g(a1S) && iK.zY(a1S);
	var mf = bT.bU.gT(a1S, a1T);
	h0.h1(a1S, a1T - mf, 12), iN.a1u(a1S, a1R)
}

function a1e() {
	for (var player = a1S, lT = bX.lT, en = Math.min(lT[player].length, a1Y), lu = 0, a1v = a1b, ce = en - 1; 0 <= ce; ce--) a1v[lu++] = lT[player][ce];
	a1a = lu
}

function a1f() {
	for (var ce = bX.lT[a1S].length - 1; 0 <= ce; ce--) i4.l7(bX.lT[a1S][ce]) && i4.a1w(bX.lT[a1S][ce], a1S);
	bX.lT[a1S] = []
}

function a1o() {
	a1X = 0, (a1W === aI.fo ? a1x : a1y)()
}

function a1y() {
	for (var fF, xF, ce, a1z = i4.a1z, gy = 3; 0 <= gy; gy--)
		for (ce = a1a - 1; 0 <= ce; ce--) fF = a1b[ce] + a1z[gy], xF = gf.gg(fF, 4), 0 === a1c[xF] && i4.lP(fF) && i4.l9(fF) === a1W && (a1c[xF] = 1, a1Z[a1X++] = fF)
}

function a1x() {
	for (var fF, xF, ce, a1z = i4.a1z, gy = 3; 0 <= gy; gy--)
		for (ce = a1a - 1; 0 <= ce; ce--) fF = a1b[ce] + a1z[gy], xF = gf.gg(fF, 4), 0 === a1c[xF] && i4.l8(fF) && (a1c[xF] = 1, a1Z[a1X++] = fF)
}

function zI(a0O, a20) {
	var r6;
	this.resize = function() {
		for (var ce = 0; ce < a0O.length; ce++) bT.ed.eh(a0O[ce].button);
		r6.style.gap = r6.style.padding = bT.ed.a23(dO.yh)
	}, (r6 = document.createElement("div")).style.display = "grid", r6.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", r6.style.overflowY = "auto", r6.style.gridAutoRows = "5.3em", r6.style.maxHeight = "100%";
	for (var ce = 0; ce < a0O.length; ce++) a0O[ce].a22(1), r6.appendChild(a0O[ce].button);
	a20.appendChild(r6)
}

function vG() {
	var b2, canvas, nI, a24, a25, a26 = -1;

	function a27() {
		var tI, fA = canvas.getContext("2d", {
			alpha: !0
		});
		fA.clearRect(0, 0, b2, b2), fA.fillStyle = dK.eG, fA.fillRect(0, 0, b2, b2), 9 === a24 && (fA.fillStyle = dK.a28, fA.fillRect(0, 0, b2, b2)), fA.fillStyle = dK.dM, fA.fillRect(0, 0, b2, 1), fA.fillRect(0, 0, 1, b2), fA.fillRect(0, b2 - 1, b2,
			1), fA.fillRect(b2 - 1, 0, 1, b2), tI = .9 * b2 / eJ.get(0).width, fA.imageSmoothingEnabled = !0, fA.setTransform(tI, 0, 0, tI, Math.floor((b2 - tI * eJ.get(0).width) / 2), Math.floor((b2 - tI * eJ.get(0).height) / 2)), fA.drawImage(
			eJ.get(0), 0, 0), fA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2C(d1, d2) {
		if (!aS.bE) return d1 <= b2 + dO.gap && d2 >= aZ.aG ? 9 : -1;
		if (d1 <= 4 * b2 + dO.gap) {
			if (d2 >= aZ.aG) return 0;
			if (d2 >= aZ.aG - b2 - a25 * dO.gap) return 2
		} else if (d1 <= 7 * b2 + dO.gap && d2 >= aZ.aG - b2 - a25 * dO.gap) return 1;
		return -1
	}
	this.bE = !1, this.k = function() {
		a24 = -1, this.bE = !1, a25 = ca.cb.cc() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		b2 = aZ.b2, (canvas = document.createElement("canvas")).width = b2, canvas.height = b2, nI = bT.ed.ef(1, (ca.cb.cc() ? .5 : .45) * b2), a27()
	}, this.a29 = function() {
		return !(1 !== aI.aJ || aI.g1 || (aI.bG ? !aL.ig : this.bE && aI.df))
	}, this.bF = function() {
		this.bE = !this.bE, this.bE ? (aL.bC(!1), aI.bG && aL.ig && aL.bH(!0), this.a2A(), 9 === a24 && (a24 = 0)) : (a24 = -1, a27(), !aI.df || 1 !== aI.aJ || aI.g1 || aI.bG || ca.cb.setState(1)), aC.ah = !0
	}, this.a2A = function() {
		(aI.df || aI.bG) && 1 === aI.aJ && (aX.iU(!0), aI.g1 || setTimeout(function() {
			i8.a2B()
		}, 0), ca.cb.setState(0))
	}, this.m = function(d1, d2) {
		return 0 <= (a26 = a2C(d1, d2)) || !aS.bE || aI.df || aI.bG || aN.af || aS.bF(), a26
	}, this.n = function(d1, d2) {
		d1 = a2C(d1, d2);
		d1 !== a24 && (a24 = d1, this.bE || a27(), aC.ah = !0)
	}, this.o = function(d1, d2) {
		d1 = a2C(d1, d2);
		return -1 !== d1 && a26 === d1 && (this.bE ? aI.bD ? (0 <= d1 && aL.bC(!1), !aI.bG) : (0 === d1 ? aI.iV() : 1 === d1 ? this.bF() : 2 === d1 && aH.eF(1, 0), !0) : 9 === d1 && (this.bF(), !0))
	}, this.dP = function() {
		var b1;
		this.bE ? (b1 = Math.floor(5.5 * b2), dQ.setTransform(1, 0, 0, 1, dO.gap, aZ.aG), dQ.fillStyle = dK.eG, dQ.fillRect(0, 0, b1, b2), 0 === a24 ? (dQ.fillStyle = dK.a28, dQ.fillRect(0, 0, 4 * b2, b2)) : 1 === a24 && (dQ.fillStyle = dK.a28,
				dQ.fillRect(4 * b2, 0, Math.floor(1.5 * b2), b2)), dQ.fillStyle = dK.dM, dQ.fillRect(0, 0, b1, 1), dQ.fillRect(0, 0, 1, b2), dQ.fillRect(4 * b2, 0, 1, b2), dQ.fillRect(0, b2 - 1, b1, 1), dQ.fillRect(b1 - 1, 0, 1, b2), dQ
			.font = nI, bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 1), dQ.fillText(L(167), 2 * b2, .54 * b2), b1 = .4 * b2, aS.a0r(dO.gap + 4 * b2 + (1.5 * b2 - b1) / 2, aZ.aG + .3 * b2, b1), b1 = 1, dQ.setTransform(1, 0, 0, 1, dO.gap, aZ
				.aG - b1 * a25 * dO.gap - b1 * b2), dQ.fillStyle = dK.eG, dQ.fillRect(0, 0, 4 * b2, b2), a24 === b1 + 1 && (dQ.fillStyle = dK.a28, dQ.fillRect(0, 0, 4 * b2, b2)), dQ.fillStyle = dK.dM, dQ.fillRect(0, 0, 4 * b2, 1), dQ
			.fillRect(0, 0, 1, b2), dQ.fillRect(4 * b2, 0, 1, b2), dQ.fillRect(0, b2 - 1, 4 * b2, 1), dQ.fillText(L(0 === b1 ? 167 : 168), 2 * b2, .54 * b2), dQ.setTransform(1, 0, 0, 1, 0, 0)) : dQ.drawImage(canvas, dO.gap, aZ.aG)
	}, this.a2G = function(player) {
		return 0 !== bX.g3[player] && 2 !== aI.aJ && !bT.bU.bV(player)
	}, this.a0r = function(aF, aG, en) {
		dQ.setTransform(1, 0, 0, 1, aF, aG), dQ.lineWidth = dO.yf, dQ.strokeStyle = dK.dM, dQ.beginPath(), dQ.moveTo(0, 0), dQ.lineTo(en, en), dQ.moveTo(0, en), dQ.lineTo(en, 0), dQ.stroke()
	}
}

function vD() {
	var a2I, e5, a2J, a2K, a2L, a2M, a2N, a2O, a2P, a2Q;

	function a2S() {
		var hZ = aI.hZ;
		for (a2P = hZ; a2P < aI.fo; a2P++) a2R();
		for (a2P = aI.g1 ? aI.gN : 0; a2P < hZ; a2P++) {
			if (!a2V()) {
				for (var gv = aI.ha = a2P; gv < hZ; gv++) a2P = gv, a2R();
				return
			}
			a2W(a2M + a2I * a2L + gf.gg(a2L, 2), a2N + e5 * a2L + gf.gg(a2L, 2))
		}
	}

	function a2z(player) {
		for (var sj = bX.sj, sk = bX.sk, sl = bX.sl, sm = bX.sm, aG = sk[player]; aG <= sm[player]; aG++)
			for (var aF = sj[player]; aF <= sl[player]; aF++) {
				var d5 = i4.a30(aF, aG);
				i4.lP(d5) && (i4.a31(d5) ? i4.a1w(d5, player) : i4.a32(d5, player))
			}
	}

	function a2y(jU, rL, rM) {
		var mf = jU[rL];
		jU[rL] = jU[rM], jU[rM] = mf
	}

	function a2V() {
		return function() {
			var ce;
			for (ce = 0; ce < 8; ce++)
				if (a2I = gf.gg(a2J * hw.random(), hw.value(100)), e5 = gf.gg(a2K * hw.random(), hw.value(100)), a37()) return 1;
			return
		}() || function() {
			var cx, cy, jR, oo, gv, tJ;
			for (cx = gf.gg(a2J * hw.random(), hw.value(100)), cy = gf.gg(a2K * hw.random(), hw.value(100)), jR = 40; 1 <= jR; jR--)
				for (oo = a2K - jR; 0 <= oo; oo -= 40)
					for (e5 = (oo + cy) % a2K, gv = 40; 1 <= gv; gv--)
						for (tJ = a2J - gv; 0 <= tJ; tJ -= 40)
							if (a2I = (tJ + cx) % a2J, a37()) return 1;
			return
		}()
	}

	function a37() {
		for (var fF, a39, gap = gf.gg(a2L - a2O, 2), xt = a2N + e5 * a2L + gap, y4 = a2M + a2I * a2L + gap, a38 = xt + a2O - 1; xt <= a38; a38--)
			for (a39 = y4 + a2O - 1; y4 <= a39; a39--)
				if (fF = i4.a30(a39, a38), !i4.l7(fF) || i4.a31(fF)) return;
		return 1
	}

	function a2W(tJ, oo) {
		a2R(), a3A(tJ - 2, oo - 2)
	}

	function a2R() {
		bX.g3[a2P] = 0, bX.gD[a2P] = bX.a2v[a2P] = 0, bX.lT[a2P] = [], bX.pH[a2P] = [], bX.l3[a2P] = [], bX.a2w[a2P] = [], bX.sj[a2P] = bX.sk[a2P] = bX.sl[a2P] = bX.sm[a2P] = 0
	}

	function a3A(tJ, oo) {
		var fF, ce, a3B, a3C;
		for (bX.g3[a2P] = 1, bX.sj[a2P] = tJ + 10, bX.sk[a2P] = oo + 10, bX.sm[a2P] = bX.sl[a2P] = 0, a3B = tJ; a3B < tJ + 4; a3B++)
			for (a3C = oo; a3C < oo + 4; a3C++)(tJ < a3B && a3B < tJ + 3 || oo < a3C && a3C < oo + 3) && (fF = i4.a30(a3B, a3C), i4.l7(fF)) && (bX.sj[a2P] = Math.min(a3B, bX.sj[a2P]), bX.sl[a2P] = Math.max(a3B, bX.sl[a2P]), bX.sk[a2P] = Math.min(a3C,
				bX.sk[a2P]), bX.sm[a2P] = Math.max(a3C, bX.sm[a2P]), a2Q[bX.gD[a2P]] = fF, bX.gD[a2P]++, i4.a32(fF, a2P));
		for (bX.a2v[a2P] = bX.gD[a2P], ce = bX.gD[a2P] - 1; 0 <= ce; ce--) i4.a3D(a2Q[ce], a2P) ? (i4.a1w(a2Q[ce], a2P), bX.pH[a2P].push(a2Q[ce])) : i4.xw(a2Q[ce]) ? (i4.a1w(a2Q[ce], a2P), bX.l3[a2P].push(a2Q[ce])) : i4.a3E(a2Q[ce]) && (i4.a1w(a2Q[
			ce], a2P), bX.a2w[a2P].push(a2Q[ce]))
	}
	this.k = function() {
		if (a2Q = new Array(12), a2O = 6, a2L = 10, a2J = gf.gg(dC.dD, a2L), a2K = gf.gg(dC.dE, a2L), a2M = gf.gg(dC.dD - a2L * a2J, 2), a2N = gf.gg(dC.dE - a2L * a2K, 2), aI.g1)
			for (var ce = 0; ce < aI.gN; ce++) a2P = ce, a2R(), bX.g3[a2P] = 1;
		(0 === aI.data.spawningType ? a2S : 1 === aI.data.spawningType ? (a2S(), function() {
			var a2X = aI.hc;
			aI.hd || a2X++;
			if (!(a2X < 3)) {
				for (var data = aI.data, tl = (aI.g1 ? aI.gN : 0) + data.teamPlayerCount[0], cu = aI.ha, a2Y = new Uint32Array(a2X), a2Z = new Uint32Array(a2X), a2a = new Uint16Array(a2X), a2b = new Uint16Array(a2X), g9 = g8.g9, sj = bX
						.sj, sk = bX.sk, sl = bX.sl, sm = bX.sm, a2c = gk.a2c, a2d = gk.a2d, ce = tl; ce < cu; ce++) a2c[ce] = sj[ce] + sl[ce] >> 1, a2d[ce] = sk[ce] + sm[ce] >> 1;
				for (ce = tl; ce < cu; ce++) {
					var id = g9[ce];
					a2Y[id] += a2c[ce], a2Z[id] += a2d[ce]
				}
				var o5 = g8.o5;
				for (ce = 1; ce < a2X; ce++) {
					var lu = Math.max(data.teamPlayerCount[o5[ce]], 1);
					a2a[ce] = gf.gg(a2Y[ce], lu), a2b[ce] = gf.gg(a2Z[ce], lu)
				}
				var a2e = g8.a2e,
					a2f = g8.a2f,
					a2g = g8.a2g,
					pk = gk.pk;
				for (ce = 0; ce < 512; ce++) pk[ce] = ce;
				for (var au = 0; au < 2 + (4 <= a2X); au++)
					for (ce = tl; ce < cu; ce++) {
						for (var kP = ce, a2h = pk[kP], a2i = 1, xJ = gf.a2j(a2c[a2h] - a2a[1], a2d[a2h] - a2b[1]), jR = 2; jR < a2X; jR++) {
							var a2k = gf.a2j(a2c[a2h] - a2a[jR], a2d[a2h] - a2b[jR]);
							a2k < xJ && (xJ = a2k, a2i = jR)
						}
						var a2l = g9[kP];
						if (a2i !== a2l) {
							if (2 === au && 4 <= a2X) {
								var a2m = Math.max((a2i + 1) % a2X, 1),
									a2n = gf.a2j(a2c[a2h] - a2a[a2m], a2d[a2h] - a2b[a2m]);
								for (jR = 1; jR < a2X; jR++) a2k = gf.a2j(a2c[a2h] - a2a[jR], a2d[a2h] - a2b[jR]), xJ < a2k && a2k < a2n && (a2n = a2k, a2m = jR);
								a2m !== a2l && gf.a2j(a2a[a2l] - a2a[a2m], a2b[a2l] - a2b[a2m]) < gf.a2j(a2a[a2l] - a2a[a2i], a2b[a2l] - a2b[a2i]) && (a2i = a2m)
							}
							var a2o = o5[a2i],
								a2p = a2f[a2o] + (aI.g1 ? 0 : a2g[a2o]),
								kQ = a2e[a2p],
								a2q = pk[kQ],
								a2r = a2f[a2o + 1];
							xJ = gf.a2j(a2c[a2q] - a2a[a2l], a2d[a2q] - a2b[a2l]);
							for (var ax = a2p + 1; ax < a2r; ax++) {
								var a2s = a2e[ax],
									a2t = pk[a2s];
								(a2k = gf.a2j(a2c[a2t] - a2a[a2l], a2d[a2t] - a2b[a2l])) < xJ && (xJ = a2k, kQ = a2s)
							}
							kQ < tl || cu <= kQ || (a2q = pk[kQ], a2Y[a2l] += a2c[a2q] - a2c[a2h], a2Z[a2l] += a2d[a2q] - a2d[a2h], a2Y[a2i] += a2c[a2h] - a2c[a2q], a2Z[a2i] += a2d[a2h] - a2d[a2q], lu = data.teamPlayerCount[o5[a2l]], a2a[
								a2l] = gf.gg(a2Y[a2l], lu), a2b[a2l] = gf.gg(a2Z[a2l], lu), lu = data.teamPlayerCount[a2o], a2a[a2i] = gf.gg(a2Y[a2i], lu), a2b[a2i] = gf.gg(a2Z[a2i], lu), pk[kP] = a2q, pk[kQ] = a2h)
						}
					}! function() {
						for (var pk = gk.pk, sj = bX.sj, sk = bX.sk, sl = bX.sl, sm = bX.sm, gD = bX.gD, a2v = bX.a2v, pH = bX.pH, l3 = bX.l3, a2w = bX.a2w, ce = 0; ce < 512; ce++) {
							var a2x = pk[ce];
							if (a2x !== ce) {
								a2y(sj, ce, a2x), a2y(sk, ce, a2x), a2y(sl, ce, a2x), a2y(sm, ce, a2x), a2y(gD, ce, a2x), a2y(a2v, ce, a2x), a2y(pH, ce, a2x), a2y(l3, ce, a2x), a2y(a2w, ce, a2x), a2z(ce), a2z(a2x), pk[ce] = ce;
								for (var b2 = a2x, xF = pk[b2]; xF !== ce;) xF = pk[b2 = xF];
								pk[b2] = a2x
							}
						}
					}()
			}
		}) : function() {
			var hZ = aI.hZ;
			for (a2P = hZ; a2P < aI.fo; a2P++) a2R();
			for (a2P = aI.g1 ? aI.gN : 0; a2P < hZ; a2P++)
				if (! function() {
						var spawningData = aI.data.spawningData,
							tJ = spawningData[2 * a2P] + 1,
							spawningData = spawningData[2 * a2P + 1] + 1;
						if (3 < tJ && tJ < dC.dD - 5 && 3 < spawningData && spawningData < dC.dE - 5 && i4.l7(i4.a30(tJ, spawningData)) && function(tJ, oo) {
								var fF, a39, a38;
								for (a38 = oo; oo - 6 < a38; a38--)
									for (a39 = tJ; tJ - 6 < a39; a39--)
										if (fF = i4.a30(a39, a38), i4.a31(fF)) return;
								return 1
							}(tJ + 3, spawningData + 3)) return a2W(tJ + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a2V()) {
						for (var gv = aI.ha = a2P; gv < hZ; gv++) a2P = gv, a2R();
						return
					}
					var tJ = a2M + a2I * a2L + gf.gg(a2L, 2),
						oo = a2N + e5 * a2L + gf.gg(a2L, 2);
					a2W(tJ, oo)
				}
		})(), h0.ir[7] = bX.gD[aI.bS]
	}, this.ub = function(g7, a3F, a3G) {
		var ce, tJ, oo, fF, a2I, e5;
		for (a2P = g7, ce = 0; ce < 20; ce++)
			for (tJ = a3F + ce; a3F - ce <= tJ; tJ--)
				for (oo = a3G + ce; a3G - ce <= oo; oo--)
					if ((tJ === a3F + ce || tJ === a3F - ce || oo === a3G + ce || oo === a3G - ce) && 3 < tJ && tJ < dC.dD - 5 && 3 < oo && oo < dC.dE - 5 && i4.l7(i4.a30(tJ, oo)) && function(tJ, oo) {
							var fF, a39, a38;
							for (a38 = oo; oo - 6 < a38; a38--)
								for (a39 = tJ; tJ - 6 < a39; a39--)
									if (fF = i4.a30(a39, a38), i4.a31(fF) && !i4.lQ(a2P, fF)) return;
							return 1
						}(tJ + 3, oo + 3)) {
						if (0 < bX.gD[a2P]) {
							for (e5 = a2I = fF = void 0, a2I = bX.sl[a2P]; a2I >= bX.sj[a2P]; a2I--)
								for (e5 = bX.sm[a2P]; e5 >= bX.sk[a2P]; e5--) fF = 4 * (e5 * dC.dD + a2I), i4.tq(a2P, fF) && (i4.a3J(fF), bX.gD[a2P]--);
							a2R()
						}
						return a3A(tJ - 1, oo - 1), !0
					} return !1
	}, this.uc = function(g7) {
		a2P = g7, a2V() ? a2W(a2M + a2I * a2L + gf.gg(a2L, 2), a2N + e5 * a2L + gf.gg(a2L, 2)) : a2R()
	}
}

function v3() {
	this.gg = function(jR, gv) {
		return Math.floor((jR + .5) / gv)
	}, this.a3K = function(jR, gv) {
		return Math.floor(jR * (gv + .5))
	}, this.sqrt = function(gU) {
		return ~~Math.sqrt(gU + .5)
	}, this.pow = function(a2) {
		return Math.floor(Math.pow(2, a2) + .5)
	}, this.hI = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a3L = function(gw, gx, gz) {
		return Math.max(Math.min(gw, gx), gz)
	}, this.a3M = function(a3N, a3O, aF, aG) {
		aF -= a3N, a3N = aG - a3O, aG = 0;
		return 0 == aF ? aG = 0 <= a3N ? Math.PI : 0 : (aG = Math.atan(a3N / aF), aG += 0 < aF ? .5 * Math.PI : 1.5 * Math.PI), aG
	}, this.log2 = function(gU) {
		return Math.floor(!!gU * (1 + Math.log2(gU + .5)))
	}, this.log10 = function(gU) {
		return Math.floor(Math.log10(gU + .5))
	}, this.a3Q = function(a3R, a3S, a3T, a3U, a3V) {
		return a3T - a3V < a3R && a3R < a3T + a3V && a3U - a3V < a3S && a3S < a3U + a3V
	}, this.a2j = function(d9, dB) {
		return d9 * d9 + dB * dB
	}
}

function vh() {
	this.a6 = new zc, this.je = new a3W, this.oC = new m7, this.a3X = new a3Y, this.kf = new a3Z, this.p6 = new a3a, this.a3b = new ot, this.a3c = new a17, this.mY = new a3d, this.a3e = new yj, this.a3f = new a3g, this.a3h = new a3i, this.a3j =
		new a3k, this.k = function() {
			this.a6.k()
		}
}

function a3l() {
	var a3m = {
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
		a3n = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a3o = function(ki) {
		return ki.replace(a3n, function(match) {
			return a3m[match] || match
		})
	}, this.ba = function(gU) {
		var ce, a3p, a3q, a3r, a3s;
		if (gU < 0) return "-" + this.ba(Math.abs(gU));
		if (gU < 1e3) return gU.toString();
		for (a3p = Math.floor(Math.log(gU + .5) / Math.log(10)) + 1, a3q = Math.floor((a3p - 1) / 3), a3s = (a3r = gU.toString()).substring(a3p - 3, a3p), ce = 1; ce < a3q; ce++) a3s = a3r.substring(a3p - 3 * (ce + 1), a3p - 3 * ce) + " " + a3s;
		return a3r.substring(0, a3p - 3 * a3q) + " " + a3s
	}, this.oe = function(fF, a3p) {
		return fF.toFixed(a3p) + "%"
	}, this.a3t = function(gU, a3u) {
		return gU.toFixed(gf.hI(Math.floor((void 0 === a3u ? 3 : a3u) - Math.log10(Math.max(gU, 1))), 0, 8))
	}, this.a3v = function(gU, d3, a3p) {
		return (gU * d3).toFixed(a3p)
	}, this.a3w = function(username) {
		var lK, lN = username.indexOf("[");
		return !(lN < 0) && 1 < (lK = username.indexOf("]")) - lN && lK - lN <= 8 ? username.substring(lN + 1, lK).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a3w;
	this.nk = function(bb) {
		for (var jR = Math.floor(.5 * bb.length + .5), cu = Math.floor(.5 * (jR - 1)), ce = 0; ce < cu; ce++)
			for (var gv = -1; gv < 2; gv += 2) {
				var ax = jR + gv * ce;
				if (" " === bb[ax]) return [this.a3x(bb.substring(0, ax)), this.a3y(bb.substring(ax))]
			}
		return [bb.substring(0, jR), bb.substring(jR)]
	}, this.a3y = function(bb) {
		for (var en = bb.length, ce = 0; ce < en; ce++)
			if (" " !== bb[ce]) return bb.substring(ce);
		return bb
	}, this.a3x = function(bb) {
		for (var ce = bb.length - 1; 0 <= ce; ce--)
			if (" " !== bb[ce]) return bb.substring(0, ce + 1);
		return bb
	}, this.a3z = function(bb, j0) {
		return bb.split("(")[0] + "(🧈 " + j0.toFixed(2) + ")"
	}, this.startsWith = function(bb, a40) {
		return bb.substring(0, a40.length) === a40
	}, this.a41 = function(bb, a40) {
		var en = bb.length;
		return bb.substring(en - a40.length, en) === a40
	}, this.fv = function(jU, a42, a43) {
		var bb = "",
			en = jU.length - 1;
		a43 = a43 || "";
		for (var ce = 0; ce < en; ce++) bb += a43 + jU[ce] + a43 + ",", (ce + 1) % a42 == 0 && (bb += "\n");
		return bb += a43 + jU[en] + a43
	}, this.m3 = function(bb, tb, et) {
		return bb.replace(new RegExp(tb, "g"), et)
	}
}

function vH() {
	var a45, a46, qe = "",
		a2J = 0,
		a2K = 0,
		a44 = -1,
		a47 = ["Team", "Zombie", "BR", "1v1"];

	function a48() {
		for (var mf = new Date, mh = mf.getUTCMinutes(), mf = mf.getUTCSeconds(), a49 = [], a4A = 0, ce = 0; ce < 6; ce++) a49.push(a4A), a49.push(a4A + 2), a49.push(a4A + 5), a49.push(a4A + 7), a4A += 10;
		for (var en = a49.length, ce = 1; ce < en && !(mh < a49[ce]); ce++);
		ce %= en;
		mf = (a49[0] = 60) * (a49[ce] - mh) - mf;
		return mf !== a44 && (qe = a47[ce % 4] + " " + a46 + ": " + a4C(Math.floor(mf / 60)) + ":" + a4C(mf % 60), a44 = mf, a2J = f6.measureText(qe, a45), a2J += Math.floor(.4 * a2K), 1)
	}

	function a4C(a4D) {
		return a4D < 10 ? "0" + a4D : String(a4D)
	}
	this.k = function() {
		a46 = L(169)
	}, this.resize = function() {
		a2J = Math.floor((ca.cb.cc() ? .53 : .36) * aA.cd), a2K = Math.floor(.065 * a2J), a45 = bT.ed.ef(1, Math.floor(.9 * a2K)), a44 += 1e3, a48()
	}, this.j1 = function() {
		a48() && (aC.ah = !0)
	}, this.dP = function(aG) {
		dQ.lineWidth = 1 + Math.floor(a2K / 15), dQ.translate(aA.b1 - a2K, aG + a2J), dQ.rotate(-Math.PI / 2), dQ.fillStyle = dK.dM, dQ.fillRect(0, 0, a2J, a2K), dQ.strokeStyle = dK.oK, dQ.strokeRect(0, 0, a2J, a2K + 10), dQ.fillStyle = dK.oK, dQ
			.font = a45, bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 1), dQ.fillText(qe, Math.floor(a2J / 2), Math.floor(.59 * a2K)), dQ.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function dT() {
	var kc = 12e3;
	this.show = function(iW) {
		return !iW && !hq.dY() && (0 === ca.id ? hq.dU.show() : !(aC.aD < kc) && (iW = 1 === ca.id ? 72e4 : 108e4, kc = aC.aD + iW, 2 === eo.hv) && ca.cb.a4E(Math.floor(iW)))
	}
}

function rZ() {
	var a4F = 0;

	function a4J(bb, id) {
		console.log(bb), a4F || (id ? 1 === id ? aa.n7 = L(171) + ": " + bb : aH.eF(4, 3, new rO(L(172), bb, 1)) : aH.eF(4, 3, new rO("⚠️ " + L(170), bb, 1)))
	}
	this.eP = function(bb, a4G) {
		var qs, bx;
		return a4F = a4G, k0.cA.k1(k0.cA.k2(k0.cA.a1K(bb))), aa.n7 = "", !! function() {
			if (jz.size < 10) a4J("File Too Small");
			else {
				var a4L = jz.k6(12),
					mj = (a4L !== eo.rVersion && (mj = "Incompatible Version   Required: " + eo.rVersion, a4J(mj = (mj += "   Found: " + a4L) + ("   Compatible at " + a5.a6.zt() + "/" + a4L), 1)), jz.k6(12)),
					a4N = jz.k6(31);
				if (a4N !== jz.size) a4J("Size Error: Stated Size " + a4N + " Actual Size " + jz.size);
				else if (function(b2, a4L) {
						for (var fF = jz.lj, en = jz.size, a4M = a4L, ce = 3; ce < en; ce++) a4M = a4M + fF[ce] & 4095;
						return a4M === b2 || (a4J("Hash Error: " + a4M + " " + b2 + " " + en), !1)
					}(mj, a4L)) return 1
			}
			return
		}() && (qs = jz, (bx = aI.data = new hl).mapType = qs.k6(2), bx.mapProceduralIndex = qs.k6(8), bx.mapRealisticIndex = qs.k6(8), bx.mapSeed = qs.k6(14), bx.mapName = qs.lx(5), 2 === bx.mapType && qs.m0(), bx.passableWater = qs.k6(1),
			bx.passableMountains = qs.k6(1), bx.playerCount = qs.k6(10), bx.humanCount = qs.k6(10), bx.selectedPlayer = qs.k6(9), bx.gameMode = qs.k6(1), bx.playerMode = qs.k6(2), bx.battleRoyaleMode = qs.k6(2), bx.numberTeams = qs.k6(4), bx
			.isZombieMode = qs.k6(1), bx.isContest = qs.k6(1), bx.isReplay = qs.k6(1), bx.elo = qs.lq(2, 14, 2), bx.colorsType = qs.k6(1), bx.colorsPersonalized = qs.k6(1), bx.colorsData = qs.lq(10, 18, 512), bx.selectableColor = qs.k6(1), bx
			.teamPlayerCount = qs.lq(4, 10, 9), bx.neutralBots = qs.k6(1), bx.botDifficultyType = qs.k6(2), bx.botDifficultyValue = qs.k6(4), bx.botDifficultyTeam = qs.lq(4, 4, 9), bx.botDifficultyData = qs.lq(10, 4, 512), bx.spawningType =
			qs.k6(2), bx.spawningSeed = qs.k6(14), bx.spawningData = qs.lq(11, 12, 1024), bx.selectableSpawn = qs.k6(1), bx.playerNamesType = qs.k6(2), bx.playerNamesData = qs.lv(10, 5, 512), bx.selectableName = qs.k6(1), bx.aIncomeType = qs
			.k6(2), bx.aIncomeValue = qs.k6(8), bx.aIncomeData = qs.lq(10, 8, 512), bx.tIncomeType = qs.k6(2), bx.tIncomeValue = qs.k6(8), bx.tIncomeData = qs.lq(10, 8, 512), bx.iIncomeType = qs.k6(2), bx.iIncomeValue = qs.k6(8), bx
			.iIncomeData = qs.lq(10, 8, 512), bx.sResourcesType = qs.k6(2), bx.sResourcesValue = qs.k6(11), bx.sResourcesData = qs.lq(10, 11, 512), bx.a4P = qs.lq(10, 30, 0), !! function() {
				var qs = jz,
					jt = qs.k6(5),
					a4Q = qs.k6(30),
					a4R = qs.k6(30);
				if (a4Q + a4R > 8 * qs.size) return void a4J("Corrupted File");
				return function(en) {
						var a4U = new Uint8Array(en),
							a4V = new Uint16Array(en),
							a4W = new Uint32Array(en),
							a4X = new Uint32Array(en);
						eN.iX.a4Y = a4U, eN.iX.a4Z = a4V, eN.iX.a4a = a4W, eN.iX.a4b = a4X;
						for (var ce = 0; ce < en; ce++) {
							var id = jz.k6(4);
							a4U[ce] = id, a4V[ce] = jz.k6(9), 0 === id ? a4W[ce] = jz.k6(22) : 1 === id ? (a4W[ce] = jz.k6(10), a4X[ce] = jz.k6(10)) : 2 === id ? (a4W[ce] = jz.k6(10), a4X[ce] = jz.k6(9)) : 3 === id ? (a4W[ce] = jz.k6(10),
								a4X[ce] = jz.k6(27)) : 4 === id ? (a4W[ce] = jz.k6(10), a4X[ce] = jz.k6(16)) : 5 === id || 6 === id ? a4W[ce] = jz.k6(10) : 7 === id ? a4W[ce] = jz.k6(1) : 10 === id && (a4W[ce] = jz.k6(20), a4X[ce] = jz
								.k6(22))
						}
					}(a4Q),
					function(en, jt) {
						var a4c = new Uint8Array(en),
							a4d = new Array(en);
						a4d.fill(0), eN.iX.a4c = a4c, eN.iX.a4d = a4d;
						for (var ce = 0; ce < en; ce++) a4c[ce] = jz.k6(1), a4d[ce] = jz.k6(jt)
					}(a4R, jt), 1
			}()) && (jz.eI < 8 * jz.size - 13 || jz.eI > 8 * jz.size ? (a4J("Out Of Bounds Error: " + jz.eI + " " + 8 * jz.size), !1) : (eN.iX.iY = bb, 2 !== aI.data.mapType || (a4J("Load base64 image...", 2), a4G)))
	}, this.m6 = function(m5, a4K) {
		var ni = document.createElement("canvas"),
			t1 = ni.getContext("2d");
		if (ni.width = m5.width, ni.height = m5.height, t1.drawImage(m5, 0, 0), aI.data.canvas = ni, a4F || a4K) return aI.aJ ? void 0 : (aI.data.mapType = 2, aH.jC(), void aH.eF(19));
		eN.rc()
	}
}

function a4e() {
	this.jU = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.jV = function() {
		for (var a4f = [], jU = this.jU, en = jU.length, ce = 0; ce < en; ce++) a4f.push(jU[ce]);
		var qz = cs.buffer.data[12].rR;
		for (ce = 0; ce < en; ce++)
			if (a4f[ce] === qz) {
				a4f.splice(ce, 1), en--;
				break
			} a4f.sort(), en++, a4f.unshift(qz);
		try {
			if ("undefined" == typeof Intl) return a4f;
			for (ce = 0; ce < en; ce++) {
				var bb = new Intl.DisplayNames([a4f[ce]], {
					type: "language"
				}).of(a4f[ce]);
				bb !== a4f[ce] && (a4f[ce] = a4f[ce] + ": " + bb)
			}
		} catch (a2) {
			console.log("error 3646: " + a2)
		}
		return a4f
	}, this.jW = function(sN) {
		for (var bb = cs.buffer.data[12].value, en = sN.length, ce = 0; ce < en; ce++)
			if (bb === sN[ce].split(":")[0]) return ce;
		return 0
	}, this.a4h = function(a4i) {
		if (a4i && !(a4i.length < 2)) {
			a4i = a4i.split("-")[0].toLowerCase();
			for (var jU = this.jU, en = jU.length, ce = 0; ce < en; ce++)
				if (a4i === jU[ce]) return ce
		}
		return -1
	}
}

function a4j() {
	this.ds = function() {
		for (var fF, en = gC.gB, n8 = gC.gJ, ou = bX.ou, a4k = this.a4l(), ce = 0; ce < en; ce++) fF = n8[ce], bT.bU.bV(fF) || (ou[fF] = a4k);
		var a4m = bX.a4m,
			a4n = bX.a4n,
			a4o = bX.a4o,
			a4p = bX.a4p,
			en = aI.gN;
		for (ce = 0; ce < en; ce++)(0 === a4p[ce] || a4o[ce] < 1 || 2 * a4m[ce] > 3 * (a4n[ce] + a4o[ce])) && (ou[ce] = 0);
		var da = 0;
		for (ce = 0; ce < en; ce++) da += 0 < ou[ce];
		return da
	}, this.a4l = function() {
		return Math.min(65535, aC.j7())
	}
}

function vm() {
	var a4q, a4r;
	this.k = function() {
		a4q = 1, a4r = 0
	}, this.j1 = function() {
		0 < a4q && (a4r = 0 === a4r ? aC.aD + 16 : a4r, a4q = (a4q -= .001 * (aC.aD - a4r)) < 0 ? 0 : a4q, a4r = aC.aD, aC.ah = !0)
	}, this.dP = function() {
		0 < a4q && (dQ.fillStyle = "rgba(0,0,0," + a4q + ")", dQ.fillRect(0, 0, aA.b1, aA.b2))
	}
}

function vK() {
	var b1, aF, a4u, canvas, fA, af, gb, j0, nI, a4v, a4w = 11 / 12;

	function a4x() {
		var a4z = Math.floor(gb * (b1 - 2 * a4u)),
			a50 = 1 + Math.floor(.0625 * aZ.b2),
			a51 = 1 + Math.floor(.3 * aZ.b2),
			a0Y = Math.floor(.55 * aZ.b2);
		fA.clearRect(0, 0, b1, aZ.b2), fA.fillStyle = dK.eG, fA.fillRect(0, 0, a4u, aZ.b2), fA.fillRect(a4u + a4z, 0, b1 - a4u - a4z, aZ.b2), fA.fillStyle = gb < 1 / 3 ? "rgba(" + Math.floor(3 * gb * 130) + ",130,0,0.85)" : gb < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (gb - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (gb - 2 / 3) * 130) + ",0.85)", fA.fillRect(a4u, 0, a4z, aZ.b2), fA.fillStyle = dK.dM, fA.fillRect(0, 0, b1, 1), fA.fillRect(0, aZ.b2 - 1, b1, 1), fA
			.fillRect(0, 0, 1, aZ.b2), fA.fillRect(a4u, 0, 1, aZ.b2), fA.fillRect(a4u + a4z, 0, 1, aZ.b2), fA.fillRect(b1 - a4u, 0, 1, aZ.b2), fA.fillRect(b1 - 1, 0, 1, aZ.b2), fA.fillRect(Math.floor(.25 * aZ.b2) + a51, Math.floor((aZ.b2 - a50) / 2),
				aZ.b2 - 2 * a51, a50), fA.fillRect(Math.floor(b1 - 1.25 * aZ.b2) + a51, Math.floor((aZ.b2 - a50) / 2), aZ.b2 - 2 * a51 - a51 % 2, a50), fA.fillRect(Math.floor(b1 - 1.25 * aZ.b2) + Math.floor((aZ.b2 - a50) / 2), a51, a50, aZ.b2 - 2 *
				a51 - a51 % 2), j0 = bT.bU.gq(aI.bS, aZ.a52()), fA.fillText(bT.bZ.ba(j0) + " (" + bT.bZ.oe(100 * gb, +(gb < .1)) + ")", Math.floor(.5 * b1), a0Y)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		gb = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aZ.b0(arg1);

	function a58(dI) {
		return !(1 < dI && 1 === gb || (1 < dI && dI * gb - gb < 1 / 1024 ? dI = (gb + 1 / 1024) / gb : dI < 1 && gb - dI * gb < 1 / 1024 && (dI = (gb - 1 / 1024) / gb), gb = gf.hI(gb * dI, 1 / 1024, 1), a4x(), 0))
	}

	function a59(d1) {
		return gb !== (gb = gf.hI((d1 - aF - a4u) / (b1 - 2 * a4u), 1 / 1024, 1)) && (a4x(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a4x(), aC.ah = !0
	}, this.aG = 0, this.ag = !1, this.k = function() {
		af = !aI.g1 && !aI.bG, a4v = !1, gb = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (cs.buffer.data[182].value + 1) / 1024, j0 = 0, this.ag = !1, this.resize()
	}, this.resize = function() {
		ca.cb.cc() && aA.b1 < .8 * aA.b2 ? (this.b2 = Math.floor(.066 * aA.cd), b1 = aA.b1 - 4 * dO.gap - this.b2) : (b1 = Math.floor((ca.cb.cc() ? .65 : .389) * aA.cd), b1 += 12 - b1 % 12, this.b2 = Math.floor(b1 / 12)), a4u = Math.floor(3 *
			this.b2 / 2), nI = bT.ed.ef(1, Math.floor(.5 * this.b2)), (canvas = document.createElement("canvas")).width = b1, __fx.mobileKeybinds.setSize(b1, this.b2, dQ), canvas.height = this.b2, (fA = canvas.getContext("2d", {
			alpha: !0
		})).font = nI, bT.ed.textBaseline(fA, 1), bT.ed.textAlign(fA, 1), this.cf(), a4x()
	}, this.cf = function() {
		aF = ca.cb.cc() && aA.b1 < .8 * aA.b2 ? this.b2 + 3 * dO.gap : Math.floor((aA.b1 - b1) / 2), this.aG = aA.b2 - this.b2 - nV.nW() * dO.gap
	}, this.iU = function() {
		a4v && (a4v = !1, a4x())
	}, this.af = function() {
		return !(!af || aS.bE && aF < Math.floor(dO.gap + 5.5 * this.b2))
	}, this.nU = function(a53) {
		return !!this.af() && aF + b1 > aA.b1 - a53 - dO.gap
	}, this.ud = function() {
		af = !aI.bG
	}, this.a54 = function() {
		af = !1
	}, this.a52 = function() {
		return gf.hI(Math.floor(1024 * gb + .5) - 1, 0, 1023)
	}, this.aq = function(d1, d2) {
		return this.af() && aF < d1 && d1 < aF + b1 && d2 > this.aG
	}, this.m = function(d1, d2) {
		if (!this.af()) return !1;
		if (!(__fx.settings.keybindButtons && d2 > this.aG - Math.floor(dO.gap / 4) - this.b2 && d2 < this.aG - Math.floor(dO.gap / 4) && __fx.mobileKeybinds.click(d1 - aF))) {
			if (!aZ.aq(d1, d2)) return !1;
			aY.ai = !1, ! function(dh, d1, d2) {
				if (function(d1, d2) {
						return aF < d1 && d1 < aF + a4u && d2 > aZ.aG
					}(d1, d2)) return a58(a4w);
				if (function(d1, d2) {
						return aF + b1 - a4u < d1 && d1 < aF + b1 && d2 > aZ.aG
					}(d1, d2)) return a58(1 / a4w);
				return dh.ag = !0, a59(d1)
			}(this, d1, d2) || (aC.ah = !0)
		}
		return !0
	}, this.b0 = function(d3) {
		0 !== aI.aJ && this.af() && a58(d3) && (aC.ah = !0)
	}, this.q = function(deltaY) {
		var d3;
		return !(0 === deltaY || !this.af()) && a58(d3 = 0 < deltaY ? (d3 = 400 / (400 + deltaY)) < a4w ? a4w : d3 : 1 / a4w < (d3 = (400 - deltaY) / 400) ? 1 / a4w : d3)
	}, this.n = function(d1) {
		return !!this.ag && a59(d1)
	}, this.am = function() {
		this.ag = !1
	}, this.j1 = function() {
		this.af() && j0 !== bT.bU.gq(aI.bS, this.a52()) && (a4v = !0)
	}, this.dP = function() {
		this.af() && (dQ.drawImage(canvas, aF, this.aG), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(dQ, aF, this.aG)
	}
}

function a0I() {
	for (var ax = document.createElement("canvas"), ax = (ax.width = 24, ax.height = 24, ax.getContext("2d", {
			alpha: !1
		})), gy = (ax.fillStyle = "rgb(0,0,0)", ax.fillRect(0, 0, 24, 24), ax.font = "22px system-ui", ax.textBaseline = "middle", ax.textAlign = "center", ax.fillStyle = "rgb(255,255,255)", ax.fillText("Q", 12, 12), ax.getImageData(0, 0, 24, 24)
			.data), en = gy.length, ju = 0, ce = 0; ce < en; ce += 4) ju += gy[ce];
	return 16383 & ju
}

function a5A() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 !== aI.data.tIncomeType && (aI.data.tIncomeData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.tIncomeType && bT.fY.fZ(fN.fa(), aI.data.tIncomeData, 255)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(20), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(173), L(174), L(10)],
			value: aI.data.tIncomeType
		}, function(eI) {
			fU(), 2 !== eI || aI.data.tIncomeData || (aI.data.tIncomeData = new Uint8Array(aI.fo), aI.data.tIncomeData.fill(32)), aI.data.tIncomeType = eI, aH.eF(26)
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi;
		1 === aI.data.tIncomeType && ((fi = new fj).fk("Value"), fi.fp(new eH({
			eI: -1,
			value: aI.data.tIncomeValue
		}, 1, 0, function(a2) {
			var value = gf.hI(Math.floor(a2.target.value), 0, 255);
			a2.target.value = aI.data.tIncomeValue = value
		})), fd.push(fi))
	}(fd), function(fd) {
		var fi;
		2 === aI.data.tIncomeType && ((fi = new fj).fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.tIncomeData, 4)), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function rY() {
	this.ia = function() {
		var jt = function() {
				for (var a4d = eN.iX.a4d, en = a4d.length, max = 0, ce = 0; ce < en; ce++) max = Math.max(max, a4d[ce]);
				return k8(Math.max(max, 1))
			}(),
			b1 = (bx = aI.data, (b1 = uo).k(), b1.mB(12, eo.rVersion), b1.eI += 43, b1.mB(2, bx.mapType), b1.mB(8, bx.mapProceduralIndex), b1.mB(8, bx.mapRealisticIndex), b1.mB(14, bx.mapSeed), b1.a5I(bx.mapName, 5), 2 === bx.mapType && b1.a5J(bx
				.canvas), b1.mB(1, bx.passableWater), b1.mB(1, bx.passableMountains), b1.mB(10, bx.playerCount), b1.mB(10, bx.humanCount), b1.mB(9, bx.selectedPlayer), b1.mB(1, bx.gameMode), b1.mB(2, bx.playerMode), b1.mB(2, bx
				.battleRoyaleMode), b1.mB(4, bx.numberTeams), b1.mB(1, bx.isZombieMode), b1.mB(1, bx.isContest), b1.mB(1, bx.isReplay), b1.wX(bx.elo, 2, 14), b1.mB(1, bx.colorsType), b1.mB(1, bx.colorsPersonalized), b1.wX(bx.colorsData, 10,
				18), b1.mB(1, bx.selectableColor), b1.wX(bx.teamPlayerCount, 4, 10), b1.mB(1, bx.neutralBots), b1.mB(2, bx.botDifficultyType), b1.mB(4, bx.botDifficultyValue), b1.wX(bx.botDifficultyTeam, 4, 4), b1.wX(bx.botDifficultyData, 10,
				4), b1.mB(2, bx.spawningType), b1.mB(14, bx.spawningSeed), b1.wX(bx.spawningData, 11, 12), b1.mB(1, bx.selectableSpawn), b1.mB(2, bx.playerNamesType), b1.a5K(bx.playerNamesData, 10, 5), b1.mB(1, bx.selectableName), b1.mB(2, bx
				.aIncomeType), b1.mB(8, bx.aIncomeValue), b1.wX(bx.aIncomeData, 10, 8), b1.mB(2, bx.tIncomeType), b1.mB(8, bx.tIncomeValue), b1.wX(bx.tIncomeData, 10, 8), b1.mB(2, bx.iIncomeType), b1.mB(8, bx.iIncomeValue), b1.wX(bx
				.iIncomeData, 10, 8), b1.mB(2, bx.sResourcesType), b1.mB(11, bx.sResourcesValue), b1.wX(bx.sResourcesData, 10, 11), b1.wX(bx.a4P, 10, 30), ! function(jt) {
				var b1 = uo,
					a4Y = eN.iX.a4Y,
					gw = eN.iX.a4Z,
					gx = eN.iX.a4a,
					gz = eN.iX.a4b,
					en = a4Y.length;
				b1.mB(5, jt), b1.mB(30, en), b1.mB(30, eN.iX.a4d.length);
				for (var ce = 0; ce < en; ce++) {
					var ax = a4Y[ce];
					b1.mB(4, ax), b1.mB(9, gw[ce]), 0 === ax ? b1.mB(22, gx[ce]) : 1 === ax ? (b1.mB(10, gx[ce]), b1.mB(10, gz[ce])) : 2 === ax ? (b1.mB(10, gx[ce]), b1.mB(9, gz[ce])) : 3 === ax ? (b1.mB(10, gx[ce]), b1.mB(27, gz[ce])) :
						4 === ax ? (b1.mB(10, gx[ce]), b1.mB(16, gz[ce])) : 5 === ax || 6 === ax ? b1.mB(10, gx[ce]) : 7 === ax ? b1.mB(1, gx[ce]) : 10 === ax && (b1.mB(20, gx[ce]), b1.mB(22, gz[ce]))
				}
			}(jt), ! function(jt) {
				for (var b1 = uo, a4c = eN.iX.a4c, a4d = eN.iX.a4d, en = a4c.length, ce = 0; ce < en; ce++) b1.mB(1, a4c[ce]), b1.mB(jt, a4d[ce])
			}(jt), uo.eI),
			bx = gf.gg(b1 - 1, 6) + 1,
			jt = (lo.lp(6 * bx) !== uo.jU.length && uo.jU.push(0), ! function() {
				var b1 = uo;
				b1.eI = 24, b1.mB(31, b1.jU.length), b1.eI = 12, b1.mB(12, function() {
					for (var jU = uo.jU, en = jU.length, a4M = eo.rVersion, ce = 3; ce < en; ce++) a4M = a4M + jU[ce] & 4095;
					return a4M
				}())
			}(), jz.k(uo.jU), c9.cA.m1(c9.cA.m2(bx)));
		return jz.lk(), uo.k(), jt
	}
}

function a5M() {
	function a5d(jU, rL, rM) {
		var a5e = jU[rL];
		jU[rL] = jU[rM], jU[rM] = a5e
	}
	this.a5N = [
		[],
		[],
		[],
		[]
	], this.yq = [0, 0, 0, 0], this.a5O = [], this.yr = function(a5P, cE, username, c5, c6, c7, elo, color, bu, cB) {
		username = this.a5R(cE, username, c5, c6, c7, elo, color, bu, cB);
		this.a5N[a5P].push(username), b7.a5S === cE && (b7.yP = username), b7.py.a5T(cE) && (username.a5U = 1), b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === a5P && 1 === b7.a6.ps[2]
	}, this.a5R = function(cE, username, c5, c6, c7, elo, color, bu, cB) {
		return {
			cE: cE,
			username: __fx.nameFilter.filter(username),
			c5: c5,
			c6: c6,
			c7: c7,
			elo: elo,
			color: color,
			bu: bu,
			cB: cB
		}
	}, this.yy = function(eI, a5P, c5, c6, c7, elo, bu, color) {
		eI = this.a5N[a5P][eI];
		eI.c5 = c5, eI.c6 = c6, eI.c7 = c7, eI.elo = elo, eI.bu = bu, eI.color = color, b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === a5P && 1 === b7.a6.ps[2]
	}, this.yz = function(eI, a5P, a5V) {
		var eI = this.a5N[a5P][eI],
			a5W = eI.username,
			a5X = "Redacted " + c9.cA.ba(eI.cE, 2);
		eI.username = a5V ? "[" + bT.bZ.a3w(a5W) + "] " + a5X : a5X, a5W.indexOf("Redacted") < 0 && (eI.a5Y = a5W), b7.sp.a5Z(eI.cE), b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === a5P && 1 === b7.a6.ps[2]
	}, this.yw = function(eI, a5a, a5b) {
		var player = this.a5N[a5a][eI];
		this.yx(eI, a5a), this.a5N[a5b].push(player), b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === a5b && 1 === b7.a6.ps[2]
	}, this.yx = function(eI, a5a) {
		var cC = this.a5N[a5a];
		this.a5O.push(cC[eI]), 1e3 < this.a5O.length && this.a5O.shift(), eI >= this.yq[a5a] ? cC[eI] = cC[cC.length - 1] : (this.yq[a5a]--, 2 === a5a ? (cC.splice(this.yq[a5a] + 1, 0, cC[cC.length - 1]), cC.splice(eI, 1)) : (cC[eI] = cC[this.yq[
			a5a]], cC[this.yq[a5a]] = cC[cC.length - 1])), cC.pop(), b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === a5a && 1 === b7.a6.ps[2]
	}, this.yv = function(eI, qA) {
		b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === qA && 1 === b7.a6.ps[2];
		var cC = this.a5N[qA],
			bx = cC[eI];
		if (2 === qA)
			if (eI >= this.yq[qA]) {
				b7.py.join(bx);
				for (var a5c = this.yq[qA], elo = bx.elo; a5c && elo > cC[a5c - 1].elo;) a5c--;
				cC[eI] = cC[this.yq[qA]], cC.splice(this.yq[qA]++, 1), cC.splice(a5c, 0, bx)
			} else cC.splice(this.yq[qA]--, 0, bx), cC.splice(eI, 1);
		else eI >= this.yq[qA] ? (b7.py.join(bx), a5d(cC, this.yq[qA]++, eI)) : a5d(cC, --this.yq[qA], eI)
	}, this.cD = function(cE) {
		for (var a5N = this.a5N, en = a5N.length, ce = 0; ce < en; ce++)
			for (var cC = a5N[ce], ju = cC.length, jR = 0; jR < ju; jR++)
				if (cE === cC[jR].cE) return cC[jR];
		return null
	}
}

function v6() {
	var ax = bT.color;
	this.oK = ax.a5f(0, 0, 0), this.dL = ax.a5g(0, 0, 0, .7), this.a5h = ax.a5g(0, 0, 0, .5), this.eG = ax.a5g(0, 0, 0, .85), this.fB = ax.a5g(0, 0, 0, .75), this.a5i = ax.a5g(0, 0, 0, .6), this.a5j = ax.a5g(0, 0, 0, .35), this.dM = ax.a5f(255, 255,
			255), this.a28 = ax.a5g(255, 255, 255, .3), this.a5k = ax.a5g(255, 255, 255, .6), this.a13 = ax.a5g(255, 255, 255, .4), this.a5l = ax.a5g(255, 255, 255, .25), this.a5m = ax.a5g(255, 255, 255, .85), this.a5n = ax.a5g(255, 255, 255, .75),
		this.a5o = ax.a5g(255, 255, 255, .15), this.a5p = ax.a5g(255, 255, 255, .11), this.rV = ax.a5f(128, 128, 128), this.or = ax.a5g(64, 64, 64, .75), this.a5q = ax.a5g(88, 88, 88, .83), this.a5r = ax.a5g(60, 60, 60, .85), this.eE = ax.a5g(80, 60,
			60, .85), this.a5s = ax.a5f(170, 170, 170), this.a5t = ax.a5f(200, 235, 245), this.a0w = ax.a5f(30, 255, 30), this.a0v = ax.a5f(0, 200, 0), this.a5u = ax.a5f(128, 255, 128), this.a5v = ax.a5g(10, 65, 10, .75), this.a5w = ax.a5g(0, 255, 0,
			.6), this.a5x = ax.a5g(0, 255, 0, .5), this.a0s = ax.a5g(0, 200, 0, .5), this.nP = ax.a5g(0, 100, 0, .75), this.a5y = ax.a5g(0, 60, 0, .8), this.a5z = ax.a5g(0, 255, 0, .3), this.a60 = ax.a5g(0, 180, 0, .6), this.a61 = ax.a5g(0, 120, 0,
			.85), this.a62 = ax.a5f(0, 120, 0), this.eB = ax.a5g(0, 70, 0, .85), this.a63 = ax.a5f(190, 230, 190), this.a64 = ax.a5f(0, 255, 0), this.a65 = ax.a5f(255, 120, 120), this.lB = ax.a5f(255, 160, 160), this.a0y = ax.a5f(255, 70, 70), this
		.a0x = ax.a5f(230, 0, 0), this.a66 = ax.a5g(220, 0, 0, .6), this.a15 = ax.a5g(255, 100, 100, .8), this.nw = ax.a5g(100, 0, 0, .85), this.a67 = ax.a5g(60, 0, 0, .85), this.a68 = ax.a5g(200, 0, 0, .6), this.a69 = ax.a5g(120, 0, 0, .85), this
		.nq = ax.a5f(255, 70, 10), this.a6A = ax.a5f(230, 190, 190), this.a6B = ax.a5f(255, 0, 0), this.a6C = ax.a5f(255, 0, 255), this.a6D = ax.a5g(60, 0, 60, .85), this.eC = ax.a5g(0, 60, 60, .85), this.a0t = ax.a5g(10, 60, 60, .9), this.a6E = ax
		.a5g(0, 96, 96, .75), this.a6F = ax.a5f(0, 255, 255), this.a6G = ax.a5f(160, 160, 255), this.a6H = ax.a5g(0, 40, 90, .75), this.a6I = ax.a5g(0, 0, 255, .6), this.a6J = ax.a5f(200, 200, 255), this.a6K = ax.a5g(50, 50, 255, .83), this.a6L = ax
		.a5g(20, 90, 150, .75), this.os = ax.a5g(10, 10, 120, .75), this.a6M = ax.a5f(255, 120, 100), this.a6N = ax.a5g(255, 255, 0, .5), this.a6O = ax.a5g(255, 255, 150, .2), this.oN = ax.a5f(255, 255, 0), this.nu = ax.a5f(255, 255, 200), this.a6P =
		ax.a5g(200, 200, 0, .6), this.a6Q = ax.a5g(140, 120, 0, .75), this.a6R = ax.a5g(180, 160, 40, .75), this.eD = ax.a5g(70, 50, 20, .85), this.a6S = ax.a5g(30, 30, 0, .85), this.a6T = ax.a5g(60, 60, 0, .85), this.a6U = ax.a5f(255, 255, 100),
		this.a6V = ax.a5f(255, 255, 140), this.a6W = ax.a5g(255, 140, 0, .75), this.a6X = ax.a5g(70, 40, 0, .85), this.a6Y = ax.a5f(255, 150, 0), this.a6Z = ax.a5g(255, 200, 80, .85), this.a6a = ax.a5g(0, 0, 0, 0), this.a6b = ax.a5g(255, 255, 255,
		0), this.a6c = ax.a5g(254, 254, 254, 0)
}

function v7() {
	this.data = new a4e;
	var a6d = (new a6e).L84,
		a6f = (this.rT = a6d, !(this.jH = "en"));
	this.k = function() {
		var bb, jU;
		a6f = !1, ("en" === (bb = cs.buffer.data[12].value).split("-")[0].toLowerCase() ? (jG.rT = a6d, jG.jH = bb, 1) : cs.buffer.data[12].value === cs.buffer.data[145].value && 0 < cs.buffer.data[146].value && (bb = cs.buffer.data[146].value, (
			jU = cs.fx.a6l(bb, !1)).length === bb) && !!bT.fY.a6m(jU) && function(jU) {
			for (var en = jU.length, b2 = 0; b2 < en; b2++) jU[b2] = jU[b2].replace("&#39;", "'");
			var a6o = cs.fx.a6l(en, !0);
			if (en !== a6o.length) return !1;
			if (!bT.fY.a6m(a6o)) return !1;
			for (var ju = a6d.length, a6p = new Array(ju), a6q = ju === en, lu = Math.min(en, ju), ce = 0; ce < ju; ce++)
				if (a6p[ce] = a6d[ce], ce < en && a6o[ce] === a6p[ce]) a6p[ce] = jU[ce];
				else {
					a6q = !1;
					for (var gv = 0; gv < lu; gv++)
						if (a6o[gv] === a6p[ce]) {
							a6p[ce] = jU[gv];
							break
						}
				} return jG.rT = a6p, jG.jH = cs.buffer.data[12].value, a6q
		}(jU)) || (a6f = !0)
	}, this.wT = function() {
		g8.i5(), iD.i5(), aN.i5(), h0.i5(), ek.k(), ux = new a6k
	}, this.rU = function() {
		return this.rT === a6d || !a6d.length
	}, this.a6r = function() {
		var a6s;
		return !!a6f && (a6f = !1, 0 !== a6d.length) && (a6s = cs.buffer.data[12].value, a5.kf.a6t(0, a6s.slice(0, 20)), !0)
	}, this.a6u = function(jU) {
		jU.length !== a6d.length ? 8 === aH.bg && aH.bh().a6v(30, 0, 1) : (this.rT = jU, this.jH = cs.buffer.data[12].value, cs.jD.jX(145, this.jH), cs.jD.jX(146, jU.length), cs.fx.a6w(jU, !1), cs.fx.a6w(a6d, !0), 8 === aH.bg ? aH.bh().a6v(30) :
			0 === aK.at() && 5 === aH.bg && aH.a6.rH())
	}, this.a6x = function() {
		var a6y, jU = navigator.languages;
		return jU && jU.length ? (a6y = Math.max(jG.data.a4h(jU[0]), 0), 1 === jU.length ? [a6y, a6y] : [a6y, Math.max(jG.data.a4h(jU[1]), 0)]) : [0, 0]
	}
}

function vU() {
	var a6z = [
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
		a70 = [
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
	this.a71 = null, this.a72 = null, this.a73 = null, this.a74 = null, this.a75 = null, this.a76 = null, this.a77 = null, this.a78 = null, this.a79 = null, this.a7A = null;

	function a7H(tl, cu) {
		for (var a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, ce = tl; ce < cu; ce++) a71[ce] = gf.gg(64 * hw.random(), hw.value(100)) << 2, a72[ce] = gf.gg(64 * hw.random(), hw.value(100)) << 2, a73[ce] = gf.gg(64 * hw.random(), hw.value(100)) << 2
	}

	function a7G(tl, cu) {
		for (var colorsData = aI.data.colorsData, a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, ce = tl; ce < cu; ce++) {
			var gU = colorsData[ce];
			a71[ce] = 4 * (gU >> 12), a72[ce] = 4 * (gU >> 6 & 63), a73[ce] = 4 * (63 & gU)
		}
	}

	function a7b(d5, a7d) {
		kj[d5] = 0, kj[d5 + 1] = 0, kj[d5 + 2] = a7d, kj[d5 + 3] = 0, a7e(d5)
	}

	function a7e(d5) {
		var aF;
		i8.a7g || (aF = i4.ck(d5), d5 = i4.cl(d5), i8.a7g = aF >= dF.a7h[0] && aF <= dF.a7h[2] && d5 >= dF.a7h[1] && d5 <= dF.a7h[3])
	}
	this.a1z = new Int32Array(4), this.a7E = new Int32Array(8), this.i5 = function() {
		var a1z = this.a1z,
			a1z = (a1z[0] = -4 * dC.dD, a1z[1] = 4, a1z[2] = -a1z[0], a1z[3] = -a1z[1], this.a7E);
		a1z[0] = -4 * dC.dD - 4, a1z[1] = -4 * dC.dD, a1z[2] = -4 * dC.dD + 4, a1z[3] = -4, a1z[4] = 4, a1z[5] = 4 * dC.dD - 4, a1z[6] = 4 * dC.dD, a1z[7] = 4 * dC.dD + 4
	}, this.k = function() {
		if (this.a71 ? (this.a71.fill(0), this.a72.fill(0), this.a73.fill(0), this.a74.fill(0), this.a75.fill(0), this.a76.fill(0), this.a77.fill(0), this.a78.fill(0), this.a79.fill(0), this.a7A.fill(0), this.se.fill(0)) : (this.a71 =
				new Uint8Array(aI.fo), this.a72 = new Uint8Array(aI.fo), this.a73 = new Uint8Array(aI.fo), this.a74 = new Uint8Array(aI.fo), this.a75 = new Uint8Array(aI.fo), this.a76 = new Uint8Array(aI.fo), this.a77 = new Uint8Array(aI.fo),
				this.a78 = new Uint8Array(aI.fo), this.a79 = new Uint8Array(aI.fo), this.a7A = new Uint8Array(aI.fo), this.se = new Uint8Array(aI.fo)), aI.dm)
			for (var a7P = g8.a7P, a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, ce = aI.fo - 1; 0 <= ce; ce--) {
				var ax = a7P[ce],
					ju = gf.gg((a70[ax][3] + 1) * hw.random(), hw.value(100));
				a71[ce] = a6z[ax][0] + ju * a70[ax][0], a72[ce] = a6z[ax][1] + ju * a70[ax][1], a73[ce] = a6z[ax][2] + ju * a70[ax][2]
			} else 0 === aI.data.colorsType ? aI.data.selectableColor ? (a7G(0, aI.gN), a7H(aI.gN, aI.fo)) : a7H(0, aI.fo) : a7G(0, aI.fo);
		! function() {
			var ce, gy, a71 = i4.a71,
				a72 = i4.a72,
				a73 = i4.a73;
			for (ce = aI.fo - 1; 0 <= ce; ce--) gy = gf.gg(a71[ce] + a72[ce] + a73[ce], 3), a71[ce] += r3(gy - a71[ce], 2), a72[ce] += r3(gy - a72[ce], 2), a73[ce] += r3(gy - a73[ce], 2), a71[ce] -= a71[ce] % 4, a72[ce] -= a72[ce] % 4, a73[ce] -=
				a73[ce] % 4
		}(),
		function() {
			for (var en = aI.fo, a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, a74 = i4.a74, ce = 0; ce < en; ce++) a71[ce] += ce >> 7, a72[ce] += ce >> 5 & 3, a73[ce] += ce >> 3 & 3, a74[ce] = 7 & ce
		}(), this.a7K(),
			function() {
				for (var en = aI.fo, a75 = i4.a75, a76 = i4.a76, a77 = i4.a77, a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, ce = 0; ce < en; ce++) {
					var au = a71[ce],
						bi = a72[ce],
						gv = a73[ce];
					60 <= au + bi + gv ? (a75[ce] = Math.max(au - 40, 3 & au), a76[ce] = Math.max(bi - 40, 3 & bi), a77[ce] = Math.max(gv - 40, 3 & gv)) : (a75[ce] = au + 40, a76[ce] = bi + 40, a77[ce] = gv + 40)
				}
			}(),
			function() {
				for (var en = aI.fo, a78 = i4.a78, a79 = i4.a79, a7A = i4.a7A, a71 = i4.a71, a72 = i4.a72, a73 = i4.a73, ce = 0; ce < en; ce++) {
					var au = a71[ce],
						bi = a72[ce],
						gv = a73[ce];
					688 <= au + bi + gv ? (a78[ce] = au - 88, a79[ce] = bi - 88, a7A[ce] = gv - 88) : (a78[ce] = Math.min(au + 88, 252 + (3 & au)), a79[ce] = Math.min(bi + 88, 252 + (3 & bi)), a7A[ce] = Math.min(gv + 88, 252 + (3 & gv)))
				}
			}()
	}, this.a7N = function(player) {
		var jU = gk.a7O;
		return jU[0] = this.a71[player], jU[1] = this.a72[player], jU[2] = this.a73[player], jU
	}, this.a7K = function() {
		for (var ce = aI.fo - 1; 0 <= ce; ce--) this.se[ce] = this.a71[ce] + this.a72[ce] + this.a73[ce] < 280 ? 0 : 1
	}, this.ck = function(d5) {
		return gf.gg(d5, 4) % dC.dD
	}, this.cl = function(d5) {
		return gf.gg(d5, 4 * dC.dD)
	}, this.a30 = function(aF, aG) {
		return Math.floor(4 * (aG * dC.dD + aF))
	}, this.a3E = function(d5) {
		var a1z = this.a1z;
		return this.a7Q(d5 + a1z[0]) || this.a7Q(d5 + a1z[1]) || this.a7Q(d5 + a1z[2]) || this.a7Q(d5 + a1z[3])
	}, this.a7R = function(d5) {
		var a1z = this.a1z;
		return this.o7(d5 + a1z[0]) || this.o7(d5 + a1z[1]) || this.o7(d5 + a1z[2]) || this.o7(d5 + a1z[3])
	}, this.a3D = function(d5, player) {
		var a1z = this.a1z;
		return this.a7S(d5 + a1z[0], player) || this.a7S(d5 + a1z[1], player) || this.a7S(d5 + a1z[2], player) || this.a7S(d5 + a1z[3], player)
	}, this.a7T = function(ce, a7U, a7V, a7W) {
		this.a71[ce] = a7U >> 16, this.a72[ce] = a7U >> 8 & 255, this.a73[ce] = 255 & a7U, this.a75[ce] = a7V >> 16, this.a76[ce] = a7V >> 8 & 255, this.a77[ce] = 255 & a7V, this.a78[ce] = a7W >> 16, this.a79[ce] = a7W >> 8 & 255, this.a7A[ce] =
			255 & a7W
	}, this.a7X = function(ce) {
		return [(this.a71[ce] << 16) + (this.a72[ce] << 8) + this.a73[ce], (this.a75[ce] << 16) + (this.a76[ce] << 8) + this.a77[ce], (this.a78[ce] << 16) + (this.a79[ce] << 8) + this.a7A[ce]]
	}, this.lP = function(d5) {
		return 208 <= kj[d5 + 3]
	}, this.tq = function(player, d5) {
		return this.lP(d5) && this.lQ(player, d5)
	}, this.lQ = function(player, d5) {
		return player === this.l9(d5)
	}, this.a7Y = function(d5) {
		return 208 <= kj[d5 + 3] && kj[d5 + 3] < 224
	}, this.a31 = function(d5) {
		return 224 <= kj[d5 + 3] && kj[d5 + 3] < 248
	}, this.a7Z = function(d5) {
		return 248 <= kj[d5 + 3]
	}, this.xw = function(d5) {
		for (var a1z = this.a1z, ce = 3; 0 <= ce; ce--)
			if (this.xu(d5 + a1z[ce])) return !0;
		return !1
	}, this.l7 = function(d5) {
		return this.lP(d5) || this.l8(d5)
	}, this.xu = function(d5) {
		return 0 === kj[d5 + 3] && 2 === kj[d5 + 2]
	}, this.l8 = function(d5) {
		return 0 === kj[d5 + 3] && 1 === kj[d5 + 2]
	}, this.kR = function(d5) {
		return 0 === kj[d5 + 3] && 3 === kj[d5 + 2]
	}, this.o7 = function(d5) {
		return 0 === kj[d5 + 3] && 5 === kj[d5 + 2]
	}, this.a7Q = function(d5) {
		return 0 === kj[d5 + 3] && 3 <= kj[d5 + 2]
	}, this.o8 = function(d5) {
		return (kj[d5] >> 1 << 8) + kj[d5 + 1]
	}, this.a7a = function(d5) {
		return 1 & kj[d5]
	}, this.a7S = function(d5, player) {
		return this.l8(d5) || this.lP(d5) && player !== this.l9(d5)
	}, this.l9 = function(d5) {
		return ((3 & kj[d5]) << 7) + ((3 & kj[d5 + 1]) << 5) + ((3 & kj[d5 + 2]) << 3) + (7 & kj[d5 + 3])
	}, this.a3J = function(d5) {
		a7b(d5, 1)
	}, this.a7c = function(d5) {
		a7b(d5, 2)
	}, this.a32 = function(d5, player) {
		kj[d5] = this.a71[player], kj[d5 + 1] = this.a72[player], kj[d5 + 2] = this.a73[player], kj[d5 + 3] = 208 + this.a74[player], a7e(d5)
	}, this.a1w = function(d5, player) {
		kj[d5] = this.a75[player], kj[d5 + 1] = this.a76[player], kj[d5 + 2] = this.a77[player], kj[d5 + 3] = 224 + this.a74[player], a7e(d5)
	}, this.a7f = function(d5, player) {
		kj[d5] = this.a78[player], kj[d5 + 1] = this.a79[player], kj[d5 + 2] = this.a7A[player], kj[d5 + 3] = 248 + this.a74[player], a7e(d5)
	}
}

function vg() {
	var xc, a7i, a7j, a7k, zi = !1;

	function a7l() {
		zi = !0, xc = -1, a7i = new Array(4);
		for (var ce = 3; 0 <= ce; ce--) a7i[ce] = !1;
		var a2j = Math.floor(1 + .02 * aA.min);
		a7j = new Array(4), (a7k = new Array(4))[1] = a7k[3] = a7j[0] = a7j[2] = 0, a7k[0] = a7j[3] = -a2j, a7j[1] = a7k[2] = a2j
	}

	function a7m() {
		if (-1 !== xc)
			if (0 !== aI.aJ && ct.cu()) {
				for (var a7n = !1, ce = 3; 0 <= ce; ce--) a7i[ce] && (a7n = !0, cT += a7j[ce], cU += a7k[ce], cz.n(a7j[ce], a7k[ce]), aY.d0());
				a7n ? aC.ah = !0 : ay.a7o()
			} else ay.a7o()
	}
	this.az = function(eI) {
		0 !== aI.aJ && ct.cu() && (zi || a7l(), a7i[eI] = !0, -1 === xc) && (xc = setInterval(a7m, 20), a7m())
	}, this.bB = function(eI) {
		if (0 !== aI.aJ && (zi || a7l(), a7i[eI] = !1, -1 !== xc)) {
			for (var a7n = !1, ce = 3; 0 <= ce; ce--) a7n = a7n || a7i[ce];
			a7n || this.a7o()
		}
	}, this.a7o = function() {
		if (zi && -1 !== xc) {
			for (var ce = 3; 0 <= ce; ce--) a7i[ce] = !1;
			clearInterval(xc), xc = -1
		}
	}
}

function fn(a7p, a0T) {
	this.a0F = [];
	var a7q = this.a0F;

	function click() {
		for (var ce = 0; ce < a7q.length; ce++) a7q[ce].textContent = a7q[ce].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eI = parseInt(this.name);
		void 0 !== a7p.eI && cs.jD.jX(a7p.eI, eI), a0T && a0T(eI)
	}
	for (var a7r, en = a7p.fl.length, ce = 0; ce < en; ce++)(a7r = document.createElement("p")).textContent = "⚪ " + a7p.fl[ce], a7r.style.margin = "0", a7r.name = "" + ce, a7r.style.cursor = "pointer", a7r.style.fontSize = "1em", a7r
		.addEventListener("click", click), a7q.push(a7r);
	a7q[a7p.value].textContent = a7q[a7p.value].textContent.replace("⚪", "🟢")
}

function wH() {
	this.a7s = new a7t, this.k = function() {
		this.a7s.resize()
	}
}

function vr() {
	this.yr = function(player) {
		iL.a7u(player), aI.hY++, bX.g4[player] = 2, bX.ou[player] = dq.dr.a4l(), player === aI.bS && (aO.show(!1, !1), be.a7v(), dj.lg.a7w()), cz.nt(player)
	}
}

function a7x() {
	this.x9 = function(player, a7y) {
		return -1 !== a7y && !!f4.c3.a7z(player, a7y) && this.a80(player, a7y, 0)
	}, this.a80 = function(player, a7y, a81) {
		player = function(player, a7y, a81) {
			var a85 = f4.c3.a86(player, a7y);
			if (-1 === a85) return -1;
			a85 = f4.c3.xA(a85, a7y);
			if (-1 === a85) return -1;
			var a82 = f4.a84.a88(a85, a7y);
			if (0 <= a82) return a82;
			if (f4.a84.a89()) return -1;
			if (0 <= (a82 = f4.a84.a88(a7y, a85))) return f4.a84.a8A(f4.a84.a8B(f4.a84.get(a82)));
			if (a85 === a7y) return f4.a84.a8A(new Uint32Array([a85, a7y]));
			if (0 <= (a82 = f4.a8C.a80(a85, a7y))) return a82;
			return a81 ? function(a8E, player) {
				var a8F = gk.a8F,
					buffer = (a8F.fill(0), [a8E]),
					a8G = (a8F[a8E] = 1, i9.a8G),
					a8H = -1,
					en = buffer.length;
				for (; - 1 === a8H && en;) {
					for (var jU = [], ce = 0; ce < en; ce++)
						for (var kz = buffer[ce], j0 = a8F[kz], gy = 0; gy < 8; gy++) {
							var a1M, a8J, a8I = kz + a8G[gy],
								d5 = 4 * a8I;
							i4.xu(d5) ? (a1M = a8F[a8I], a8J = j0 + 5 + ((1 & gy) << 1), 0 === a1M ? (jU.push(a8I), a8F[a8I] = a8J) : a8F[a8I] = Math.min(a8J, a1M)) : -1 === a8H && gy % 2 == 0 && i4.tq(player, d5) && (a8H = kz)
						}
					en = (buffer = jU).length
				}
				return -1 !== a8H ? function(a8L, a8M) {
					var a8G = i9.a8G,
						a8N = -1,
						l0 = 0,
						ir = [];
					for (; a8M !== a8L;)(l0 = function(kz, l0) {
						var a8F = gk.a8F,
							a8G = i9.a8G,
							j0 = a8F[kz];
						if (j0 - a8F[kz + a8G[l0]] != 5 + ((1 & l0) << 1))
							for (var jR = 0; jR < 8; jR++) {
								var gy = jR + l0 + 6 & 7;
								if (j0 - a8F[kz + a8G[gy]] == 5 + ((1 & gy) << 1)) return gy
							}
						return l0
					}(a8M, l0)) !== a8N && (ir.push(a8M), a8N = l0), a8M += a8G[l0];
					ir.push(a8L);
					var a82 = f4.a84.a88(ir[0], a8L);
					if (0 <= a82) return a82;
					return f4.a84.a8A(new Uint32Array(ir))
				}(a8E, a8H) : -1
			}(a7y, player) : -1
		}(player, a7y, a81);
		return -1 !== player && (gk.jU[0] = f4.a84.get(player), !0)
	}
}

function wF() {
	this.a8P = !1, this.a7g = !1, this.ug = !1, this.a8Q = [0, 0, 0, 0], this.render = function() {
		var na, nc, ev, ew;
		this.ug = this.ug || this.a7g, (this.a7g || this.a8P && this.ug) && (na = dF.a7h[0], nc = dF.a7h[1], ev = dF.a7h[2], ew = dF.a7h[3], na = na < this.a8Q[0] ? this.a8Q[0] : na, nc = nc < this.a8Q[1] ? this.a8Q[1] : nc, ev = ev > this.a8Q[
			2] ? this.a8Q[2] : ev, ew = ew > this.a8Q[3] ? this.a8Q[3] : ew, this.a7g = !1, this.a8P = !1, na === this.a8Q[0] && nc === this.a8Q[1] && ev === this.a8Q[2] && ew === this.a8Q[3] ? this.qQ() : na <= ev && nc <= ew && iI
			.putImageData(iJ, 0, 0, na, nc, ev - na + 1, ew - nc + 1))
	}, this.qQ = function() {
		this.ug && this.a8Q[2] >= this.a8Q[0] && this.a8Q[3] >= this.a8Q[1] && iI.putImageData(iJ, 0, 0, this.a8Q[0], this.a8Q[1], this.a8Q[2] - this.a8Q[0] + 1, this.a8Q[3] - this.a8Q[1] + 1), this.ug = !1
	}, this.a2B = function() {
		this.a8Q[2] >= this.a8Q[0] && this.a8Q[3] >= this.a8Q[1] && iI.putImageData(iJ, 0, 0, this.a8Q[0], this.a8Q[1], this.a8Q[2] - this.a8Q[0] + 1, this.a8Q[3] - this.a8Q[1] + 1), this.ug = !1
	}, this.k = function() {
		var aF, aG;
		this.a8P = !1, this.a7g = !1, this.ug = !1, this.a8Q[0] = dC.dD, this.a8Q[1] = dC.dE, this.a8Q[2] = this.a8Q[3] = 0;
		loop: for (aF = 1; aF < dC.dD - 1; aF++)
			for (aG = dC.dE - 2; 1 < aG; aG--)
				if (1 === kj[i4.a30(aF, aG) + 2]) {
					this.a8Q[0] = aF;
					break loop
				} loop: for (aG = 1; aG < dC.dE - 1; aG++)
			for (aF = dC.dD - 2; 1 < aF; aF--)
				if (1 === kj[i4.a30(aF, aG) + 2]) {
					this.a8Q[1] = aG;
					break loop
				} loop: for (aF = dC.dD - 2; 0 < aF; aF--)
			for (aG = dC.dE - 2; 1 < aG; aG--)
				if (1 === kj[i4.a30(aF, aG) + 2]) {
					this.a8Q[2] = aF;
					break loop
				} loop: for (aG = dC.dE - 2; 0 < aG; aG--)
			for (aF = dC.dD - 2; 1 < aF; aF--)
				if (1 === kj[i4.a30(aF, aG) + 2]) {
					this.a8Q[3] = aG;
					break loop
				}
	}
}

function cK() {
	this.i2 = 1, this.a8R = function(kz) {
		aI.df ? du.cM.a8R(aI.bS, kz) : a5.oC.mI(kz)
	}, this.a8S = function(gb, g7) {
		this.i2 && (this.i2 = 0, cs.jD.jX(182, gb)), aI.df ? du.cM.a8S(aI.bS, gb, g7) : a5.oC.mJ(gb, g7)
	}, this.jl = function(gb, bP) {
		aI.df ? du.cM.gn(aI.bS, gb, bP) : a5.oC.mK(gb, bP)
	}, this.a8T = function(gb, kz) {
		kz = (kz << 3) + gk.wt[6];
		aI.df ? du.cM.a8T(aI.bS, gb, kz) : f4.wd.we(aI.bS) && a5.oC.mL(gb, kz)
	}, this.a8U = function(gb) {
		849 === gb && (gb = 850);
		var l1 = gk.wt[3];
		aI.df ? du.cM.a8U(aI.bS, gb, l1) : f4.wq.a8V(aI.bS, l1) && a5.oC.mN(gb, l1)
	}, this.a8W = function(l1) {
		aI.df ? du.cM.a8W(aI.bS, l1) : a5.oC.mN(849, l1)
	}, this.a8X = function(g7) {
		aI.df ? du.cM.a8X(aI.bS, g7) : a5.oC.mO(g7)
	}, this.oB = function(bc) {
		aI.df ? du.cM.a8Y(aI.bS, bc) : a5.oC.mP(bc)
	}, this.a8Z = function(mR) {
		aI.df ? du.cM.a8Z(aI.bS, mR) : a5.oC.mQ(mR)
	}, this.a8a = function() {
		aI.df ? du.cM.a8a(aI.bS) : a5.oC.mS()
	}, this.b5 = function() {
		aI.df ? du.cM.b5(aI.bS) : a5.oC.mO(513)
	}, this.a8b = function(gb, kz, g7) {
		aI.df ? du.cM.a8b(aI.bS, gb, kz, g7) : a5.oC.mT(gb, kz, g7)
	}
}

function a8c() {
	function a8g(player) {
		for (var a2w = bX.a2w[player], en = a2w.length, a8p = Math.max(gf.gg(en, 12), 1), a1z = i4.a1z, au = hw.pL(en), ce = 0; ce < en; ce += a8p)
			for (var lN = a2w[(ce + au) % en], gy = 3; 0 <= gy; gy--) {
				var lK = lN + a1z[gy];
				if (i4.o7(lK)) return {
					d5: lK,
					id: i4.o8(lK),
					fF: player
				}
			}
		return null
	}

	function a8l(player, a8q) {
		var ge = bT.bU.h3(player, iD.uQ[iD.ge[player]]);
		bX.lT[player].push(a8q.d5), iN.jp(player, ge, a8q.fF), iK.lU(player, !0)
	}
	this.j1 = function(player) {
		return !!dC.a8d(dC.k5) && !!aI.data.passableMountains && 0 !== bX.a2w[player].length && function(player) {
			var a8f = a8g(player);
			if (null === a8f) return !1;
			! function(player) {
				for (var gJ = gC.gJ, gB = gC.gB, en = Math.min(gB, 12), xF = hw.pL(gB), xG = gk.xG, a2w = bX.a2w, lu = 0, ce = 0; ce < en; ce++) {
					var fF = gJ[(ce + xF) % gB];
					fF !== player && a2w[fF].length && h7.h8(player, fF) && (xG[lu++] = fF)
				}
				gk.pj[0] = lu
			}(player);
			var a8i = function(a8m) {
				for (var en = gk.pj[0], xG = gk.xG, ce = 0; ce < en; ce++) {
					var a8q = a8g(xG[ce]);
					if (null !== a8q && a8q.id === a8m) return a8q
				}
				return null
			}(a8f.id);
			return null !== a8i ? (a8l(player, a8i), !0) : function(player, a8m) {
				var en = iA.a8n.a8o;
				if (0 !== en)
					for (var d5 = iA.a8n.buffer[hw.pL(en)] << 2, a1z = i4.a1z, gy = hw.pL(4);;) {
						if (d5 += a1z[gy], i4.o7(d5)) {
							if (i4.o8(d5) === a8m) return a8l(player, {
								d5: d5,
								fF: aI.fo
							}), !0;
							break
						}
						if (!i4.l8(d5)) break
					}
				return !1
			}(player, a8f.id)
		}(player)
	}
}

function wD() {
	var gap, a8r = !1,
		a8s = 0,
		b1 = 0,
		fH = 0,
		canvas = null,
		fA = null,
		a8t = null;

	function a8y() {
		for (var ce = aI.hc; 0 <= ce; ce--) a8t[ce] = 0;
		for (ce = gC.gB - 1; 0 <= ce; ce--) a8t[g8.g9[gC.gJ[ce]]] += bX.gD[gC.gJ[ce]];
		a8r = !0
	}

	function a8w() {
		for (var a93, a91 = 0, en = 0, ax = Math.floor(b1 / 2), au = Math.floor(fH / 2), a92 = 1.5 * Math.PI, ce = aI.hc; 0 <= ce; ce--) en += a8t[ce], 0 === a8t[ce] && a91++;
		if (a8r = !1, fA.clearRect(0, 0, b1, b1), 0 < en)
			if (a91 === aI.hc) {
				for (ce = aI.hc; 0 <= ce; ce--)
					if (0 < a8t[ce]) {
						! function(ce, ax, au) {
							fA.fillStyle = g8.a9A[g8.o5[ce]], fA.beginPath(), fA.arc(ax, ax, au, 0, 2 * Math.PI), fA.fill()
						}(ce, ax, au);
						break
					}!
				function(ax) {
					var fontSize = ax / 3;
					fA.font = bT.ed.ef(1, fontSize), fA.fillStyle = dK.dM, fA.fillText("100%", ax, ax + .1 * fontSize)
				}(ax)
			} else {
				for (ce = 0; ce <= aI.hc; ce++) 0 < a8t[ce] && (! function(ce, ax, au, a92, a93) {
					fA.fillStyle = g8.a9A[g8.o5[ce]], fA.beginPath(), fA.arc(ax, ax, au, a92, a93), fA.lineTo(ax, ax), fA.fill()
				}(ce, ax, au, a92, a93 = a92 + 2 * Math.PI * a8t[ce] / en), function(ax, au, a92, a93) {
					var gU = (a93 - a92) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * au * Math.min(gU, .37);
					fontSize < 8 || (a92 = (a92 + a93) / 2, a93 = (__fx.settings.detailedTeamPercentage ? (100 * gU).toFixed(2) : Math.floor(100 * gU + .5)) + "%", au *= .525 - Math.max(.6 * (gU - .7), 0), fA.font = bT.ed.ef(1, fontSize), fA
						.fillStyle = dK.dM, fA.fillText(a93, ax + Math.cos(a92) * au, ax + Math.cos(a92 + 1.5 * Math.PI) * au))
				}(ax, au, a92, a93), 0 !== ce && a98(ax, au, a92), a92 = a93);
				a98(ax, au, 1.5 * Math.PI)
			}!
		function(ax, au) {
			fA.beginPath(), fA.arc(ax, ax, au, 0, 2 * Math.PI), fA.stroke()
		}(ax, au)
	}

	function a98(ax, au, a9B) {
		fA.beginPath(), fA.moveTo(ax, ax), fA.lineTo(ax + Math.cos(a9B) * au, ax + Math.cos(a9B + 1.5 * Math.PI) * au), fA.stroke()
	}
	this.k = function() {
		if (aI.dm) {
			a8s = 0, a8t = new Uint32Array(aI.hc + 1);
			for (var ce = aI.hc; 0 <= ce; ce--) a8t[ce] = 0;
			for (ce = gC.gB - 1; 0 <= ce; ce--) a8t[g8.g9[gC.gJ[ce]]] += 1;
			this.resize()
		} else a8t = fA = canvas = null
	}, this.a8v = function() {
		return b1
	}, this.resize = function() {
		aI.dm && (b1 = Math.floor(.95 * (ca.cb.cc() && !aI.bD ? .18 * aA.min : .13 * aA.cd)), b1 = (b1 *= 1 + (.5 + .2 * ca.cb.cc()) * aI.bD) + b1 % 2, gap = Math.max(1, .015 * b1), fH = Math.floor(b1 - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = b1, canvas.height = b1, (fA = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, fA.strokeStyle = dK.dM, bT.ed.textAlign(fA, 1), bT.ed.textBaseline(fA, 1), a8w())
	}, this.hF = function(a8x) {
		a8x && a8y();
		var mf, a8x = this.gI();
		return g8.o5[a8x] || (a8x = function() {
			for (var gH = -1, ce = aI.hc; 1 <= ce; ce--)(-1 === gH || a8t[ce] > a8t[gH]) && (gH = ce);
			return gH
		}(), mf = bX.gD[gE[0]], -1 !== a8x && a8t[a8x] > mf) ? a8t[a8x] : mf
	}, this.zb = function() {
		return a8s = 31, this.j1(), this.gI()
	}, this.gI = function() {
		for (var gH = 0, ce = aI.hc; 0 < ce; ce--) a8t[ce] > a8t[gH] && (gH = ce);
		return gH
	}, this.pi = function(a90) {
		for (var lu = 0, gJ = gC.gJ, g9 = g8.g9, en = gC.gB, pk = gk.pk, ce = 0; ce < en; ce++) {
			var fF = gJ[ce];
			g9[fF] === a90 && (pk[lu++] = fF)
		}
		gk.pj[0] = lu
	}, this.wx = function(a90) {
		for (var lu = 0, gJ = gC.gJ, g9 = g8.g9, en = gC.gB, pk = gk.pk, ce = 0; ce < en; ce++) {
			var fF = gJ[ce];
			g9[fF] !== a90 && (pk[lu++] = fF)
		}
		gk.pj[0] = lu
	}, this.gF = function() {
		for (var lu = 0, ce = aI.hc; 0 <= ce; ce--) lu += 0 < a8t[ce];
		return lu
	}, this.j1 = function() {
		aI.dm && 32 <= ++a8s && (a8s = 0, a8y())
	}, this.j6 = function() {
		aI.dm && a8r && a8w()
	}, this.dP = function() {
		aI.dm && (aI.bD ? dQ.drawImage(canvas, dO.gap, dO.gap) : dQ.drawImage(canvas, dO.gap, a9C + 2 * dO.gap))
	}
}

function a9D() {
	var fL, fM, a9E, fd;

	function fQ() {
		un.lk(), aH.fW()[19] = null, aH.fX()
	}

	function a9M() {
		a9S(), a9Q()
	}

	function a9S() {
		a9E.r6.lastChild && aH.removeChild(a9E.r6, a9E.r6.lastChild)
	}

	function a9Q() {
		var a9T = dC.a9U(aI.data);
		aI.data.canvas = dC.a9V(a9T, aI.data.mapSeed).f0, a9R()
	}

	function a9R() {
		var ni = aI.data.canvas;
		ni.style.width = "100%", a9E.r6.appendChild(ni)
	}
	this.a9W = function(ni) {
		aI.data.canvas && a9S(), aI.data.canvas = ni, a9R()
	}, this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(175), [new e9("⬅️ " + L(6), fQ)]), 2 === aI.data.mapType && un.k(), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(176), L(177), L(178)],
			value: aI.data.mapType
		}, function(eI) {
			2 === (aI.data.mapType = eI) ? (un.k(), aI.data.canvas = null) : (aI.data.passableWater = aI.data.passableMountains = 1, un.lk()), aH.eF(20)
		})), 2 <= aI.data.mapType && (fi.fp(new km), fi.fp(new fq({
			value: aI.data.passableWater
		}, L(179), function(value) {
			aI.data.passableWater = value
		})), fi.fp(new fq({
			value: aI.data.passableMountains
		}, L(180), function(value) {
			aI.data.passableMountains = value
		})));
		fd.push(fi)
	}(fd = []), function(fd) {
		if (0 === aI.data.mapType) {
			for (var fi = new fj, fl = (fi.fk(L(175)), []), ce = 0; ce < dC.k3.a9L.length; ce++) fl.push(dC.k3.k4[dC.k3.a9L[ce]].name);
			fi.fm(new fn({
				fl: fl,
				value: aI.data.mapProceduralIndex
			}, function(eI) {
				aI.data.mapProceduralIndex = eI, a9M()
			})), fd.push(fi)
		}
	}(fd), function(fd) {
		if (1 === aI.data.mapType) {
			for (var fi = new fj, fl = (fi.fk(L(175)), []), ce = 0; ce < dC.k3.a9N.length; ce++) fl.push(dC.k3.k4[dC.k3.a9N[ce]].name);
			fi.fm(new fn({
				fl: fl,
				value: aI.data.mapRealisticIndex
			}, function(eI) {
				aI.data.mapRealisticIndex = eI, a9M()
			})), fd.push(fi)
		}
	}(fd), function(fd) {
		var fi;
		2 === aI.data.mapType && ((fi = new fj).fk(L(181)), fi.fp(new eH(cs.buffer.data[162], 1)), fi.fk(L(182), "0.8em"), fi.fp(new fs([new e9(L(183), function() {
			return un.a9O(), !0
		}).button])), fd.push(fi))
	}(fd), function(fd) {
		var fi, e3;
		2 === aI.data.mapType && ((fi = new fj).fk(L(184)), e3 = new eH({
			eI: -1,
			value: aI.data.mapName
		}, 0, 0, function(a2) {
			aI.data.mapName = a2.target.value = a2.target.value.slice(0, 20)
		}), fi.fp(e3), fd.push(fi))
	}(fd), function(fd) {
		var fi, e3, a9P;
		0 === aI.data.mapType && ((fi = new fj).fk("Seed"), e3 = new eH({
			eI: -1,
			value: aI.data.mapSeed
		}, 1, 0, function(a2) {
			a2 = Math.abs(Math.floor(a2.target.value)) % 16384;
			aI.data.mapSeed !== a2 && (aI.data.mapSeed = a2, a9M())
		}), a9P = new e9(L(8), function(a2) {
			var xr = Math.floor(16384 * Math.random());
			if (aI.data.mapSeed !== xr) return e3.a2.value = aI.data.mapSeed = xr, a9M(), !0
		}), fi.fp(e3), fi.fp(new fs([a9P.button])), fd.push(fi))
	}(fd), function(fd) {
		(a9E = new fj).fk(L(185)), 2 !== aI.data.mapType ? a9Q() : aI.data.canvas && a9R();
		fd.push(a9E)
	}(fd), fd))
}

function a9X(data) {
	var j9, a9Y;

	function a9n(en) {
		return en < 60 ? 1 === en ? en + " Second" : en + " Seconds" : en < 3600 ? 1 === (en = Math.floor(en / 60)) ? en + " Minute" : en + " Minutes" : en < 172800 ? 1 === (en = Math.floor(en / 3600)) ? en + " Hour" : en + " Hours" : (en = Math
			.floor(en / 172800)) + " Days"
	}

	function a9b(om) {
		var en = data.data.length;
		if (en) {
			for (var rL, max = min = parseInt(data.data[0][0]), ce = 1; ce < en; ce++) var a0z = parseInt(data.data[ce][0]),
				min = Math.min(a0z, min),
				max = Math.max(a0z, max);
			rL = om < 0 ? min + om : max + 1, aH.eF(8, aH.bh().rJ, new eS(21, {
				zJ: data.zJ,
				rL: rL,
				rM: rL + Math.abs(om)
			}))
		}
	}
	if (this.show = function() {
			j9.show(), this.resize()
		}, this.c1 = function() {
			j9.c1()
		}, this.resize = function() {
			j9.resize(), a9Y.resize()
		}, this.b6 = function(ax) {
			2 === ax && j9.fw[0].fx()
		}, data.a9Z) {
		j9 = new fP(L(186), [new e9("⬅️ " + L(6), function() {
			aH.fX()
		})]);
		var gy = {
				a9f: [],
				a9d: [L(200), L(201), L(202) + " ↗"],
				a9g: [12, 50, 38]
			},
			a4P = aI.data.a4P;
		if (a4P) {
			for (var en = a4P.length, a9f = gy.a9f, bY = bX.bY, ce = 0; ce < en; ce++) a9f.push([{
				gU: ce + 1 + ".",
				mf: 0
			}, {
				gU: bY[ce],
				mf: 0
			}, {
				gU: c9.cA.ba(a4P[ce], 5),
				mf: 1,
				cE: a4P[ce],
				yK: 0
			}]);
			a9Y = new a9h(j9.fS, gy, {
				a9i: 1
			})
		} else a9Y = new a9h(j9.fS, gy)
	} else {
		var gy = data.data.length ? 0 : 1,
			uE = [new e9("⬅️ " + L(6), function() {
				aH.fX()
			}), new e9(L(187), function() {
				a9b(-10)
			}, gy, 0, 1), new e9(L(188), function() {
				a9b(10)
			}, gy, 0, 1), new e9(L(189), function() {
				aH.eF(11, 10, new a9c({
					zJ: data.zJ
				}))
			})],
			a9d = [L(190), L(191), L(192), L(193), L(194), L(154), L(155), L(156), L(195), L(196), L(197), L(198), "Audit Log", L(199)];
		j9 = new fP(a9d[data.zJ], uE), ! function() {
			var ce, gy = {
					a9f: []
				},
				a9f = gy.a9f,
				a9j = data.data,
				en = a9j.length;
			en && 0 === a9j[0][0] && 0 <= (eI = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.zJ]) && (aH.a6.r9[eI] = a9j[0][1]);
			var d3 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.zJ],
				a3p = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.zJ],
				eI = [
					[L(203), L(204) + " ↗", L(205)],
					[L(203), L(206), L(207), L(208) + " ↗"],
					[L(203), L(204) + " ↗", L(207)],
					[L(203), L(204) + " ↗", L(207)],
					[L(200), L(209), L(210) + " ↗", L(211) + " ↗", L(212)],
					[L(200), L(209), L(213) + " ↗", L(136) + " ↗", L(214)],
					[L(200), L(209), L(215) + " ↗", L(216) + " ↗", L(137)],
					[L(200), L(209), L(213) + " ↗", L(136) + " ↗", L(217)],
					[L(200), L(209), L(210) + " ↗", L(211) + " ↗", L(212)],
					[L(203), L(204) + " ↗", L(207)],
					[L(203), L(204) + " ↗", L(218)],
					[L(203), L(204) + " ↗", L(207)],
					[L(200), L(209), L(210) + " ↗", L(211) + " ↗", L(219)],
					[L(203), L(204) + " ↗", L(207)]
				];
			if (gy.a9d = eI[data.zJ], gy.a9g = [
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
				][data.zJ], 0 === data.zJ || 2 === data.zJ || 3 === data.zJ || 9 === data.zJ || 10 === data.zJ || 11 === data.zJ || 13 === data.zJ)
				for (ce = 0; ce < en; ce++) a9f.push([{
					gU: a9j[ce][0] + 1 + ".",
					mf: 0
				}, {
					gU: a9j[ce][1],
					mf: 1,
					cE: a9j[ce][4],
					yK: a9j[ce][3]
				}, {
					gU: (d3 * a9j[ce][2]).toFixed(a3p),
					mf: 0
				}]);
			else if (12 === data.zJ)
				for (ce = 0; ce < en; ce++) {
					var a9m = a9j[ce][3];
					a9f.push([{
						gU: "" + a9j[ce][0],
						mf: 0
					}, {
						gU: a9n(a9j[ce][4]),
						mf: 0
					}, {
						gU: a9j[ce][5],
						mf: 1,
						cE: a9j[ce][1],
						yK: 0
					}, {
						gU: a9j[ce][6],
						mf: 1,
						cE: a9j[ce][2],
						yK: 0
					}, {
						gU: ux.a9o(a9m, c9.cA.ba(a9j[ce][1], 5)),
						mf: 0
					}])
				} else if (1 === data.zJ)
					for (ce = 0; ce < en; ce++) a9f.push([{
						gU: a9j[ce][0] + 1 + ".",
						mf: 0
					}, {
						gU: a9j[ce][1],
						mf: 0
					}, {
						gU: (d3 * a9j[ce][2]).toFixed(a3p),
						mf: 0
					}, {
						gU: a9j[ce][3],
						mf: 1,
						cE: a9j[ce][5],
						yK: a9j[ce][4]
					}]);
				else if (4 === data.zJ || 5 === data.zJ || 6 === data.zJ || 7 === data.zJ || 8 === data.zJ)
				for (ce = 0; ce < en; ce++) {
					var a9p = a9j[ce][5];
					4 === data.zJ || 8 === data.zJ ? "100%" === (a9p = (a9p % 64 * 100 / (a9p >> 6)).toFixed(0) + "%") && (4 === data.zJ ? a9p += " (" + L(220) + ")" : a9p += " (" + L(221) + ")") : 5 === data.zJ ? 32768 <= a9p && (a9p = -(a9p -
						32768)) : a9p = (d3 * a9p).toFixed(a3p), a9f.push([{
						gU: "" + a9j[ce][0],
						mf: 0
					}, {
						gU: a9n(a9j[ce][6]),
						mf: 0
					}, {
						gU: a9j[ce][7],
						mf: 1,
						cE: a9j[ce][1],
						yK: a9j[ce][2]
					}, {
						gU: a9j[ce][8],
						mf: 1,
						cE: a9j[ce][3],
						yK: a9j[ce][4]
					}, {
						gU: "" + a9p,
						mf: 0
					}])
				}
			a9Y = new a9h(j9.fS, gy)
		}()
	}
}

function a9q() {
	var a9r = 0,
		a9s = 0,
		a9t = 300,
		a9u = 300,
		a9v = 0;
	this.a8o = 0, this.buffer = new Uint32Array(512), this.k = function() {
		a9s = a9r = 0, this.a8o = 0, a9v = 0
	}, this.j1 = function() {
		if (function() {
				var en = iA.a8n.a8o;
				if (0 === en) return 1;
				var buffer = iA.a8n.buffer;
				if (aC.j7() % 35 == 6) {
					for (var ce = en - 1; 0 <= ce; ce--) i4.l8(buffer[ce] << 2) || (en--, buffer[ce] = buffer[en]);
					iA.a8n.a8o = en
				}
				return en < buffer.length
			}())
			if (a9t <= a9r) {
				var a9z = iA.a8n.a8o;
				if (a9z) {
					if (aC.j7() % 350 != 1) return;
					if (a9v !== a9z) return void(a9v = a9z);
					if (!bT.bU.bV(gE[0])) return
				} else if (aC.j7() % 12 != 8) return;
				bT.bU.gA() || iA.a8n.k()
			} else {
				var ce, b1 = dC.dD,
					aA0 = b1 - 2,
					a9z = aA0 * (dC.dE - 2),
					aA1 = a9t,
					buffer = iA.a8n.buffer,
					ju = iA.a8n.a8o,
					aA2 = buffer.length,
					xF = Math.min(a9s + aA1 * ((1 + 19 * iA.performance.qV) * a9u), a9z);
				for (ce = a9s; ce < xF; ce += aA1) {
					var d5 = 4 * (ce % aA0 + (gf.gg(ce, aA0) + 1) * b1 + 1);
					if (i4.l8(d5) && (buffer[ju] = d5 >> 2, ++ju === aA2)) {
						ce += aA1;
						break
					}
				}(a9s = ce) >= a9z && (a9s = ++a9r), iA.a8n.a8o = ju
			}
	}
}

function aA3() {
	this.aA4 = function() {
		cs.jD.jE(), cs.jD.aA5(), a5.a6.close(0, 3255), 0 === ca.id ? ca.aA6 && ca.aA6.clear() : 1 === ca.id ? ca.eY.saveString(199, "") : 2 === ca.id && ca.aA7.postMessage("clear")
	}, this.aA8 = function() {
		2 === ca.id ? ca.aA7.postMessage("showConsentForm") : 1 === ca.id && ca.eY.setState(7)
	}, this.aA9 = function() {
		this.setState(14)
	}, this.cc = function() {
		return 1 === cs.buffer.aAA(2)
	}, this.aAB = function() {
		cs.buffer.aAC(102, "")
	}, this.setState = function(g0) {
		1 === ca.id && 5 <= ca.eX && ca.eY.setState(g0)
	}, this.aAD = function() {
		var aAE;
		1 === ca.id && 7 <= ca.eX ? ca.eY.setState(5) : 2 === ca.id ? ca.aA7.postMessage("reload 0") : ((aAE = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aAE.toString())
	}, this.dX = function() {
		0 !== ca.id && (1 === ca.id ? ca.eY.prepareAd("8646194357") : 2 === ca.id && (0 === ca.eX ? ca.aA7.postMessage("prepare ad 2904813909") : ca.aA7.postMessage("loadAds 2904813909")))
	}, this.a4E = function(mf) {
		return 0 !== ca.id && (1 === ca.id ? 12 <= ca.eX && (ca.eY.presentAd(mf), !0) : 2 === ca.id && 0 !== ca.eX && (ca.aA7.postMessage("showAd"), !0))
	}, this.wZ = function() {
		2 === ca.id && ca.eX < 23 && aH.eF(4, 1, new rO("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + uq.aAF + "' target='_blank'>" + uq
			.aAF + "</a>", !0, [new e9("⬅️ " + L(6), function() {
				aH.eF(0)
			}, dK.a69)]))
	}
}

function vC() {
	var aAG, aAH, aAI, aAJ, aAK, aAL, aAM, aAN, aAO, aAP, aAQ, a4r, aAR, aAS = !1,
		aAT = !1;

	function aAU(nA) {
		a4r = aC.aD, aAI = aAJ = aAH = 0, aAK = (aAR = 33) / nA, aAG = 1 / (nA / aAR / 4), aAL = (aA.b1 / 2 + cT) / cS, aAM = (aA.b2 / 2 + cU) / cS, aAN = cS
	}

	function aAV(ce) {
		var na; - 1 !== ce && (ce = i9.kt(f4.a6.kp[ce]), na = i9.nb(ce) - 15, ce = i9.nd(ce) - 15, ct.ne(na, ce, 29 + na, 29 + ce))
	}

	function aAc(aAd) {
		Math.abs(Math.log(aAQ / aAN)) < .125 && (aAQ = aAd * aAN)
	}

	function aAb(na, nc, ev, ew) {
		aAO = (na + ev + 1) / 2, aAP = (nc + ew + 1) / 2;
		ev = aA.b1 / (ev - na + 1), na = aA.b2 / (ew - nc + 1);
		aAQ = .9 * (ev < na ? ev : na)
	}
	this.xq = function() {
		return aAS
	}, this.iT = function() {
		aAU(1), this.ne(0, 0, dC.dD - 1, dC.dE - 1), aI.g1 || aI.bG || this.nZ(aI.bS, 3e3, !0, .3)
	}, this.nf = function(player, l1) {
		aAV(f4.c3.uA(player, l1))
	}, this.nZ = function(player, nA, aAW, zoom) {
		aI.bD || aAS && !aAW && aAT || (0 === bX.gD[player] ? aAV(f4.c3.aAX(player)) : (aY.ai = !1, aAT = aAW, aAU(nA), function(player) {
			aAO = (bX.sj[player] + bX.sl[player] + 1) / 2, aAP = (bX.sk[player] + bX.sm[player] + 1) / 2
		}(player), function(zoom, player) {
			var cx = bX.sl[player] - bX.sj[player] + 1,
				player = bX.sm[player] - bX.sk[player] + 1,
				jR = aA.b1 / cx,
				gv = aA.b2 / player,
				jR = (aAQ = jR < gv ? jR : gv, 0 !== zoom ? zoom : cx < 20 && player < 20 ? .5 : .9);
			aAQ *= jR, aAc(7 / 8)
		}(zoom, player), aAS = !0, ay.a7o()))
	}, this.aAa = function(nA) {
		aI.bG || aI.bD || (aY.ai = !1, aAT = !1, aAU(nA), aAb(0, 0, dC.dD - 1, dC.dE - 1), aAc(7 / 8), aAS = !0, ay.a7o())
	}, this.ne = function(na, nc, ev, ew) {
		aAS = !1, aAb(na, nc, ev, ew), cS = aAQ, aY.cm(aAO, aA.b1 / 2), aY.cp(aAP, aA.b2 / 2), dF.dG(), aC.ah = !0
	}, this.cu = function() {
		return !(aAS && aAT || (aAS = !1))
	}, this.j1 = function() {
		var aAg, aAh, gy, aAk;
		aAS && (aAH < .5 ? aAJ < aAK && (aAJ += aAK * aAG, aAI = aAH) : 1 - aAI < aAH && (aAJ = (aAJ -= aAK * aAG) < aAK * aAG ? aAK * aAG : aAJ), a4r = a4r >= aC.aD ? aC.aD - 1 : a4r, gy = aC.aD - a4r, aAH = 1e3 < gy || 1 < (aAH += aAJ * gy /
			aAR) ? 1 : aAH, a4r = aC.aD, gy = cS, aAg = cT, aAh = cU, gy = (cS = aAN * Math.pow(aAQ / aAN, aAH)) / gy, aAk = 1 - (aAN * Math.pow(aAQ / aAN, 1 - aAH) - aAN) / (aAQ - aAN), aY.cm(aAL + aAk * (aAO - aAL), aA.b1 / 2), aY.cp(
			aAM + aAk * (aAP - aAM), aA.b2 / 2), cz.zoom(gy, (aAg * gy - cT) / (1 - gy), (aAh * gy - cU) / (1 - gy)), dF.dG(), 1 <= aAH && (aAS = !1, i8.a7g = !0), aC.ah = !0)
	}
}

function v5() {
	this.ed = new aAl, this.fY = new aAm, this.bU = new fy, this.bZ = new a3l, this.fA = new aAn, this.eq = new aAo, this.canvas = new aAp, this.color = new aAq, this.aAr = new aAs, this.k = function() {
		this.ed.aAt()
	}
}

function aAp() {
	this.aAu = function(aAv, eI, aAw) {
		var fE = aAv.height,
			ni = bT.ed.k7(fE, fE),
			t1 = bT.ed.getContext(ni);
		return function(b1, t1, aAw) {
			t1.fillStyle = aAw, t1.beginPath(), t1.arc(b1 / 2, b1 / 2, .47 * b1, 0, 2 * Math.PI), t1.fill()
		}(fE, t1, aAw), t1.drawImage(aAv, -eI * fE, 0), ni
	}, this.aAy = function(aAz) {
		var t1, aB0, fE = aAz.height;
		return aAz.width === fE && (aB0 = (t1 = bT.ed.getContext(aAz, !0)).getImageData(0, 0, fE, fE), bT.eq.aB1(aB0.data, fE, fE, .9), t1.putImageData(aB0, 0, 0)), aAz
	}
}

function aB2() {
	var rk = 0,
		aB3 = null;
	this.k = function() {
		null === aB3 && (aB3 = new Uint16Array(2 * f4.a6.uP)), rk = 0
	}, this.jp = function(aB4, ku) {
		var aB5 = aB3;
		aB5[rk++] = aB4, aB5[rk++] = ku
	}, this.wo = function(player, aB6) {
		for (var aB5 = aB3, en = rk, ce = 0; ce < en; ce += 2)
			if (aB5[ce] === aB6 && f4.c3.aB7(aB5[ce + 1]) && player === f4.a6.lF[gk.wt[2]] >> 3) return !0;
		return !1
	}, this.kv = function(aB8) {
		var yc = f4.a6.ko[aB8];
		if (!(yc < 64)) {
			for (var aB6 = f4.a6.u9[aB8], aB5 = aB3, en = rk, ce = en - 2; 0 <= ce; ce -= 2)
				if (aB5[ce] === aB6) {
					{
						aBC = void 0;
						var aBC = aB5[ce + 1];
						f4.c3.aB7(aBC) && f4.ku.a1Q(gk.wt[2])
					}
					aB5[ce] = aB5[en - 2], aB5[ce + 1] = aB5[en - 1], en -= 2
				} rk = en
		}
	}, this.lD = function(aBA, aBB) {
		for (var aBC = f4.a6.u9[aBA], aB6 = -1, aB5 = aB3, en = rk, ce = 1; ce < en; ce += 2)
			if (aB5[ce] === aBC) {
				aB6 = aB5[ce - 1];
				break
			} if (-1 === aB6) return !1;
		if (!f4.c3.aB7(aB6)) return !1;
		var aB8 = gk.wt[2],
			aBD = f4.a6.aBE[aB8];
		if (aBB === aBD[aBD.length - 1]) f4.a6.aBE[aBA] = f4.a84.aBF(f4.a6.aBE[aBA], f4.a84.a8B(aBD));
		else {
			var aBG = f4.c3.aBH(aBD, aBB);
			if (-1 === aBG) return !1;
			var aBI = f4.a6.lE[aB8];
			aBG === aBI ? (aB8 = i9.kt(f4.a6.kp[aB8]), f4.a6.aBE[aBA] = f4.a84.aBK(f4.a6.aBE[aBA], aBD, aBG, aBB, i9.aBL(aBD[aBG], aBB) > i9.aBL(aBD[aBG], aB8))) : f4.a6.aBE[aBA] = f4.a84.aBK(f4.a6.aBE[aBA], aBD, aBG, aBB, aBI < aBG)
		}
		return !0
	}, this.a1Q = function(aBN) {
		var aBD, ju = f4.a6,
			yc = ju.ko[aBN];
		return yc % 64 != 5 && (aBD = ju.aBE[aBN], ju.kq[aBN] = 65535 - ju.kq[aBN], ju.lE[aBN] = aBD.length - ju.lE[aBN] - 2, ju.aBE[aBN] = f4.a84.a8B(aBD), ju.ko[aBN] = yc - yc % 64 + 5, !0)
	}
}

function a9c(aBO) {
	var j9, jA, fd;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(222), [new e9("⬅️ " + L(6), function() {
		aH.aBP(10)
	})]), jA = new fR(j9.fS, ((fd = []).push(function() {
		var a9P, fi = new fj,
			aBT = new eH(cs.buffer.data[132], 1, function() {
				a9P.button.click()
			}),
			aBU = new eH(cs.buffer.data[131], 1, function() {
				aBT.a2.focus()
			});
		fi.fk(L(223)), fi.fp(aBU), aBU.a2.style.marginBottom = "0.8em", fi.fk(L(224)), fi.fp(aBT);
		return a9P = new e9(L(225), function() {
			rL = Math.floor(aBU.a2.value), rM = Math.floor(aBT.a2.value);
			var rM, rL = {
				aBW: Math.min(rL, rM),
				aBX: Math.max(rL, rM)
			};
			aH.eF(8, aH.bj(10).rJ, new eS(21, {
				zJ: aBO.zJ,
				rL: rL.aBW,
				rM: rL.aBX
			}))
		}, 0, 0, 1), fi.fp(new fs([a9P.button])), fi
	}()), fd.push(function() {
		var a9P, fi = new fj,
			aBT = new eH(cs.buffer.data[134], 1, function() {
				a9P.button.click()
			}),
			aBU = new eH(cs.buffer.data[133], 0, function() {
				aBT.a2.focus()
			});
		return fi.fk(1 === aBO.zJ ? L(226) : L(227)), fi.fp(aBU), aBU.a2.style.marginBottom = "0.8em", fi.fk(L(228)), fi.fp(aBT), a9P = new e9(L(225), function() {
			var a1A = aBU.a2.value.slice(0, 20),
				a1B = Math.abs(Math.floor(aBT.a2.value));
			aH.eF(8, aH.bj(10).rJ, new eS(22, {
				zJ: aBO.zJ,
				a1A: a1A,
				a1B: a1B
			}))
		}, 0, 0, 1), fi.fp(new fs([a9P.button])), fi
	}()), fd.push(function() {
		var a9P, fi = new fj,
			aBT = new eH(cs.buffer.data[152], 1, function() {
				a9P.button.click()
			}),
			aBU = new eH(cs.buffer.data[151], 0, function() {
				aBT.a2.focus()
			});
		return fi.fk(L(229)), fi.fp(aBU), aBU.a2.style.marginBottom = "0.8em", fi.fk(L(228)), fi.fp(aBT), a9P = new e9(L(225), function() {
			var a1A = aBU.a2.value.slice(0, 5),
				a1B = Math.abs(Math.floor(aBT.a2.value));
			aH.eF(8, aH.bj(10).rJ, new eS(28, {
				zJ: aBO.zJ,
				a1A: a1A,
				a1B: a1B
			}))
		}, 0, 0, 1), fi.fp(new fs([a9P.button])), fi
	}()), fd))
}

function vu() {
	var input;

	function aBY(a2) {
		(a2 = a2.target.files) && 0 < a2.length && un.aBa(a2[0])
	}

	function aBe(a2) {
		var ax = new Image;
		ax.onload = a9W, ax.src = a2.target.result
	}

	function a9W(a2) {
		var a2 = a2.target,
			b1 = a2.width,
			b2 = a2.height,
			aBf = cs.buffer.data[162].value,
			max = Math.min(dC.fb, aBf),
			aBf = (max = ca.id || aU.ac() ? Math.min(1400, aBf) : max) / Math.max(b1, b2);
		if (aBf < 1 && (b1 = Math.floor(aBf * b1 + .125), b2 = Math.floor(aBf * b2 + .125)), max < b1 || max < b2 || b1 < 10 || b2 < 10) aBf = "Invalid Image Dimensions!", ca.eY ? ca.eY.showToast(aBf) : alert(aBf);
		else {
			for (var max = document.createElement("canvas"), aBf = (max.width = b1, max.height = b2, max.getContext("2d")), aBh = document.createElement("canvas"), aBi = (aBh.width = a2.width, aBh.height = a2.height, aBh.getContext("2d")), a2 = (aBi
					.drawImage(a2, 0, 0), aBi.getImageData(0, 0, aBh.width, aBh.height)), aBi = aBf.createImageData(b1, b2), src = a2.data, aBl = aBi.data, cn = aBh.width / b1, cq = aBh.height / b2, aG = 0; aG < b2; aG++)
				for (var aF = 0; aF < b1; aF++) {
					var aBm = Math.floor(aF * cn),
						aBm = 4 * (Math.floor(aG * cq) * aBh.width + aBm),
						aBp = 4 * (aG * b1 + aF);
					aBl[aBp] = src[aBm], aBl[1 + aBp] = src[1 + aBm], aBl[2 + aBp] = src[2 + aBm], aBl[3 + aBp] = 255
				}
			aBf.putImageData(aBi, 0, 0), 20 === aH.bg && aH.bh().a9W(max)
		}
	}
	this.k = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aBY
	}, this.lk = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.a9O = function() {
		input.click()
	}, this.aBa = function(aBb) {
		var jU = aBb.name.split("."),
			jU = jU[jU.length - 1].toLowerCase();
		"gif" !== jU && "jpg" !== jU && "jpeg" !== jU && "png" !== jU || ((jU = new FileReader).onload = aBe, jU.readAsDataURL(aBb))
	}
}

function aBq() {
	var bb;
	10 === dC.k5 ? bb =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === dC.k5 ? bb =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === dC.k5 ? bb =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === dC.k5 ? bb =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === dC.k5 ? bb =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === dC.k5 ? bb =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === dC.k5 ? bb =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === dC.k5 ? bb =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === dC.k5 ? bb =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === dC.k5 ? bb =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === dC.k5 ? bb =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === dC.k5 ? bb =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === dC.k5 && (bb =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new jr).eP(bb)
}

function aBr() {
	this.aBs = 28, this.a8s = 0, this.aBt = null;
	var aBv = this.aBu = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aC0(fE, aC3) {
		var aF, aG, kz, cx, ni = bT.ed.k7(fE, fE),
			t1 = bT.ed.getContext(ni, !0),
			aB0 = bT.ed.getImageData(t1, fE, fE),
			kH = aB0.data,
			ju = (fE >> 1) - .5,
			aC4 = .5 + ju;
		for (aC4 *= aC4, aG = 0; aG < fE; aG++)
			for (aF = 0; aF < fE; aF++) cx = (cx = aF - ju) * cx + (cx = aG - ju) * cx, kH[kz = 4 * (aG * fE + aF)] = aC3[0], kH[1 + kz] = aC3[1], kH[2 + kz] = aC3[2], kH[3 + kz] = (aC4 - cx) * aC3[3] / aC4;
		return t1.putImageData(aB0, 0, 0), ni
	}

	function aCA(ce, t1, ni, fE) {
		var highlight, aF, aG;
		0 !== bX.g3[ce] && 0 !== bX.gD[ce] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ce]) && (fE *= 2), aF = bX.sj[ce] + bX.sl[ce] + 1 - fE - 2 >> 1, aG = bX.sk[ce] + bX.sm[ce] + 1 - fE - 2 >> 1, highlight ? t1
			.drawImage(ni[aI.dm ? 9 === aI.dw && 5 === iD.ge[ce] ? 3 : g8.g9[ce] : ce < aI.gN ? 1 : 0], aF, aG, fE, fE) : t1.drawImage(ni[aI.dm ? 9 === aI.dw && 5 === iD.ge[ce] ? 3 : g8.g9[ce] : ce < aI.gN ? 1 : 0], aF, aG))
	}
	this.k = function() {
		var dh;
		this.a8s = 700,
			function(dh) {
				var fE = dh.aBs;
				if (dh.aBu = [], aBv = [], aI.dm) {
					for (var ce = 0; ce <= aI.hc; ce++) dh.aBu.push(aC0(fE, g8.aC1[g8.o5[ce]])), aBv.push(aC0(fE >> 1, g8.aC1[g8.o5[ce]]));
					9 === aI.dw && aBv.push(aC0(fE, g8.aC1[1]))
				} else dh.aBu.push(aC0(fE, g8.aC1[7])), dh.aBu.push(aC0(fE, g8.aC1[4])), aBv.push(aC0(fE >> 1, g8.aC1[7]))
			}(this),
			function(dh, aC8) {
				var ce, aBt = dh.aBt,
					t1 = bT.ed.getContext(aBt, !0),
					en = aI.fo,
					fE = dh.aBs >> 1;
				t1.imageSmoothingEnabled = !1, t1.setTransform(1, 0, 0, 1, 0, 0), aC8 && t1.clearRect(0, 0, aBt.width, aBt.height);
				if (9 === aI.dw) {
					fE <<= 1;
					dh = hs.uY[5];
					for (ce = en - dh; ce < en; ce++) aCA(ce, t1, aBv, fE);
					en -= dh, fE >>= 1
				}
				for (ce = aI.gN; ce < en; ce++) aCA(ce, t1, aBv, fE)
			}(this, null !== (dh = this).aBt && dh.aBt.width === dC.dD - 2 && dh.aBt.height === dC.dE - 2 || (dh.aBt = bT.ed.k7(dC.dD - 2, dC.dE - 2), !1)), aI.g1 || this.uf()
	}, this.aC2 = aC0, this.uf = function() {
		for (var en = aI.gN, fE = this.aBs, aBu = this.aBu, t1 = bT.ed.getContext(this.aBt, !0), ce = 0; ce < en; ce++) aCA(ce, t1, aBu, fE)
	}
}

function aCB() {
	this.aCC = 32, this.aF = 0, this.aG = 0, this.aCD = 0, this.aCE = 0, this.aCF = 4, this.xj = null, this.aCG = new Int16Array(9), this.k = function() {
		this.aCD = 1 + gf.gg(dC.dD - 1, this.aCC), this.aCE = 1 + gf.gg(dC.dE - 1, this.aCC), this.xj = new Array(this.aCD * this.aCE), bT.fY.aCH(this.xj);
		var aF, aG, aCG = this.aCG,
			b1 = this.aCD;
		for (aF = -1; aF <= 1; aF++)
			for (aG = -1; aG <= 1; aG++) aCG[3 * (1 + aG) + 1 + aF] = aG * b1 + aF
	}, this.ws = function(aCJ, ce) {
		return this.xj[ce].push(aCJ), this.xj[ce].length - 1
	}, this.aCK = function(aCL, aCM, aCN) {
		var aCO, aCP, aCM = i9.aCQ(aCM),
			aCN = i9.aCQ(aCN);
		return aCM === aCN ? aCL : (aCO = this.xj[aCM].pop(), this.xj[aCM].length === aCL ? this.ws(aCO, aCN) : (aCP = this.xj[aCM][aCL], this.xj[aCM][aCL] = aCO, f4.a6.aCR[aCO] = aCL, this.ws(aCP, aCN)))
	}
}

function va() {
	this.o2 = new Array(aI.fo), this.bY = new Array(aI.fo), this.g4 = new Uint8Array(aI.fo), this.g3 = new Uint8Array(aI.fo), this.sj = new Uint16Array(aI.fo), this.sk = new Uint16Array(aI.fo), this.sl = new Uint16Array(aI.fo), this.sm =
		new Uint16Array(aI.fo), this.gD = new Uint32Array(aI.fo), this.a2v = new Uint32Array(aI.fo), this.gM = new Uint32Array(aI.fo), this.lT = null, this.pH = null, this.l3 = null, this.a2w = null, this.a4m = new Uint16Array(aI.fo), this.a4n =
		new Uint16Array(aI.fo), this.a4o = new Uint16Array(aI.fo), this.ou = new Uint16Array(aI.fo), this.a4p = new Uint8Array(aI.fo), this.gW = new Uint16Array(aI.fo), this.k = function() {
			this.o2.fill(""), this.bY.fill(""), this.g4.fill(0), this.g3.fill(0), this.sj.fill(0), this.sk.fill(0), this.sl.fill(0), this.sm.fill(0), this.gD.fill(0), this.a2v.fill(0), this.gM.fill(0), this.lT = new Array(aI.fo), this.pH = new Array(
				aI.fo), this.l3 = new Array(aI.fo), this.a2w = new Array(aI.fo), this.a4m.fill(0), this.a4n.fill(0), this.a4o.fill(0), this.ou.fill(0), this.a4p.fill(0), this.gW.fill(0)
		}
}

function aCS() {
	this.j1 = function() {
		if (aC.j7() % 51 == 45)
			for (var en = f4.a6.kr, ko = f4.a6.ko, aBE = f4.a6.aBE, u9 = f4.a6.u9, lF = f4.a6.lF, uR = iD.uR, ge = iD.ge, ce = 0; ce < en; ce++) {
				var aBD, player, aB6, yc = ko[ce];
				yc % 64 == 6 || (aBD = aBE[ce], (player = f4.c3.aCT(aBD[aBD.length - 1])) < 0) || !bT.bU.g6(player, lF[ce] >> 3) || hw.pL(1e3) >= uR[ge[player]] || ! function(wn, aBD) {
					for (var en = aBD.length - 1, aCW = f4.a6.lE[wn], xJ = 0, ce = aCW + 1; ce < en; ce++) xJ += i9.aBL(aBD[ce], aBD[ce + 1]);
					return (xJ += i9.aBL(i9.kt(f4.a6.kp[wn]), aBD[aCW + 1])) <= 60
				}(ce, aBD) || (aB6 = u9[ce], 64 <= yc && f4.ku.wo(player, aB6)) || function(player, aBD, aB6, wn, yc) {
					f4.wd.we(player) && bT.bU.ga(player, iD.uO[iD.ge[player]], 32, 0) && (f4.a6.ko[wn] = 64 + yc % 64, f4.ku.jp(aB6, f4.a6.aCX), gk.jU[0] = f4.a84.a8B(aBD), gk.wt[1] = 6, bT.bU.h4(player), f4.a6.ws(player))
				}(player, aBD, aB6, ce, yc)
			}
	}
}

function zz() {
	var aCY, aCZ, aCa, aCb = ["wss://", "/s50/", "/s51/", "/s52/"],
		aCc = 0;

	function a00() {
		a5.a6.a00(aCY, aCZ)
	}

	function aCh(a2) {
		a5.mY.aCj(aCY, new Uint8Array(a2.data))
	}

	function aCi() {}

	function a09(a2) {
		a5.a6.a09(aCY, a2)
	}
	this.k = function(eI, rJ, zv) {
		aCY = eI, aCZ = rJ,
			function(zv) {
				zv = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : eo.aCg ? "ws://localhost:" + (7130 + aCY) + "/" : zv ? aCb[0] + "game.territorial.io/x0" + aCY + "/" : aCb[0] + a5.a6.ze[aCY] + aCb[1 + eo.hv];
				(aCa = new WebSocket(zv)).binaryType = "arraybuffer", aCa.onopen = a00, aCa.onmessage = aCh, aCa.onclose = a09, aCa.onerror = aCi
			}(zv)
	}, this.aCe = function() {
		return aCa.readyState === aCa.CONNECTING
	}, this.ke = function() {
		return aCa.readyState === aCa.OPEN
	}, this.zn = function() {
		return aCc
	}, this.a02 = function() {
		aCc = 1
	}, this.zx = function() {
		return this.aCe() || this.ke()
	}, this.zy = function(rJ) {
		aCZ = rJ
	}, this.aCf = function() {
		return aCZ
	}, this.send = function(lj) {
		this.ke() && aCa.send(lj)
	}, this.close = function(a04) {
		this.zx() && (this.c1(), aCa.close(a04))
	}, this.c1 = function() {
		aCa.onopen = null, aCa.onmessage = null, aCa.onclose = null, aCa.onerror = null
	}
}

function wO() {
	this.a5S = 0, this.yP = null, this.cC = null, this.c3 = null, this.a6 = null, this.b9 = null, this.c0 = null, this.message = null, this.yU = null, this.sp = null, this.py = null, this.z0 = new aCk, this.b8 = 0, this.aCl = 0, this.k = function() {
		this.aCl = aC.aD, this.a5S = k0.cA.a1O(cs.buffer.data[105].value, 5), this.cC = new a5M, this.c3 = new aCm, this.a6 = new pq, this.b9 = new y5, this.c0 = new bl, this.message = new aCn, this.yU = new aCo, this.sp = new aCp, this.py =
			new aCq, this.a6.k(), rr.k(), this.b8 = 1, ca.cb.setState(1), aK.setState(0), hq.turnstile.aCr()
	}, this.lk = function() {
		this.sp && this.sp.lk(), this.yP = null, this.cC = null, this.c3 = null, this.a6 = null, this.b9 = null, this.c0 = null, this.message = null, this.yU = null, this.sp = null, this.py = null, this.b8 = 0, rr.lk(), ca.cb.setState(0)
	}
}

function a3Z() {
	this.a01 = function(m9) {
		var aD6;
		lo.iE(55 + dq.aCs.k6()), lo.mB(1, 0), lo.mB(6, 13), lo.mB(14, eo.mH), lo.mB(4, ca.id), lo.mB(7, ca.eX), lo.mB(1, +eo.aD4), lo.mB(1, +eo.aD5), lo.mB(5, (new Date).getHours() % 24), aD6 = jG.a6x(), lo.mB(8, aD6[0]), lo.mB(8, aD6[1]), dq.aCs
			.ia(), a5.a6.send(m9, lo.lj)
	}, this.aCu = function(m9, a5H, aCv, aCw) {
		lo.iE(70), lo.mB(1, 0), lo.mB(6, 30), lo.mB(3, aCv), lo.mB(30, a5H), lo.mB(30, aCw), a5.a6.send(m9, lo.lj)
	}, this.aCx = function(aCy) {
		uo.k(), uo.mB(1, 0), uo.mB(6, 6), c9.ys.ia(aCy, 16, uo), a5.a6.send(a5.a6.mD, uo.aCz())
	}, this.kg = function(id) {
		lo.iE(13), lo.mB(1, 0), lo.mB(6, 15), lo.mB(6, id), a5.a6.send(0, lo.lj)
	}, this.aD0 = function(id, value) {
		lo.iE(43), lo.mB(1, 0), lo.mB(6, 3), lo.mB(6, id), lo.mB(30, value), a5.a6.send(0, lo.lj)
	}, this.a6t = function(id, bb) {
		var en = Math.min(bb.length, 63);
		lo.iE(19 + 16 * en), lo.mB(1, 0), lo.mB(6, 26), lo.mB(6, id), lo.mB(6, en), c9.ly.a1G(bb), a5.a6.send(0, lo.lj)
	}, this.aD1 = function(rF, bx) {
		lo.iE(7 + 26 * bx.length), lo.mB(1, 0), lo.mB(6, 9);
		for (var ce = 0; ce < bx.length; ce++) lo.mB(16, bx[ce][0]), lo.mB(10, bx[ce][1]);
		a5.a6.send(rF, lo.lj)
	}, this.aD2 = function(aD3, a4M) {
		lo.iE(20), lo.mB(1, 0), lo.mB(6, 19), lo.mB(1, aD3), lo.mB(12, a4M), a5.a6.send(a5.a6.a8, lo.lj)
	}, this.a1C = function(username) {
		lo.mB(5, username.length), c9.ly.a1G(username)
	}, this.aD7 = function(aD8, aD9, m9, pow) {
		lo.iE(88), lo.mB(1, 0), lo.mB(6, 8), lo.mB(3, pow.aCv), lo.mB(30, pow.a5H), lo.aDA(32, aD9), lo.mB(16, aD8), a5.a6.send(m9, lo.lj)
	}
}

function vT() {
	var aDB, canvas, o4, aDC;

	function aDH(eI, name, aDI, bb) {
		o4[eI] = name, canvas[eI] = new Image, canvas[eI].onload = function() {
			! function(eI, aDI) {
				var aDL, aBO = null;
				7 === aDI ? aDL = bT.eq.aDM : 8 === aDI ? (aDL = bT.eq.aDN, aBO = .1) : 3 === aDI ? (aDL = bT.eq.aDO, aBO = .06) : 5 === aDI ? aDL = bT.eq.aDP : 6 === aDI ? aDL = bT.eq.aDQ : 4 === aDI && (aDL = bT.eq.aDR);
				canvas[eI] = bT.eq.er(canvas[eI], aDL, aBO)
			}(eI, aDI), aDK()
		}, canvas[eI].onerror = function(a2) {
			console.error("Error loading image at index", eI, "Error:", a2), aDK()
		}, canvas[eI].src = "data:image/png;base64," + bb
	}

	function aDK() {
		aDB--, aDE()
	}

	function aDE() {
		0 === aDB && (aDB = -1, aDG(), aC.ah = !0, canvas[7] = aDC, canvas[8] = aDC, canvas[9] = aDC, canvas[10] = aDC, 5 === aH.bg) && aH.bh().e6.resize()
	}

	function aDG() {
		aP.aDT(), el.aBy([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== ca.id, 1 !== ca.id, !0, !0, !0]), nl.kH = new aDU, nl.kH.k(), aT.i5()
	}
	this.k = function() {
		if (void 0 === canvas) {
			aDB = 23, canvas = new Array(aDB), o4 = new Array(aDB), (aDC = document.createElement("canvas")).width = 1;
			for (var ce = aDB - (aDC.height = 1); 0 <= ce; ce--) canvas[ce] = aDC;
			aDG(), aDH(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aDH(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aDH(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(3, "orders", 6,
					"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"
					), aDH(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aDH(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aDH(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAptRLHQAAAAAAAAAAAAAAAAAA5K4OHTpE165dY++9947dd989SktLo3nz5tGoUaNo2LBhlJSUxA477BCFhYX/8X2ffvppfPbZZ/Hxxx/HunXr4sMPP4z3338/3nnnnVi1alW88sorsWjRoli7dm2iRwYAAAAAAAAAAAAAQJYZ7gEAAAAAAAAAAAAAAAAAIiKie/fucfTRR0eXLl2ibdu2seeee0aTJk1q7f4qKyvjrbfeipUrV8ayZcvimWeeiTlz5sTbb79da/cJAAAAAAAAAAAAAAAREQURsTF1BAAAAAAAAAAAAAAAAACw/bVp0yYGDBgQvXr1iq5du0azZs1SJ0VlZWUsX748nn322ViwYEHcfvvtUVFRkToLAAAAAAAAAAAAAIA6xnAPAAAAAAAAAAAAAAAAAGRIq1atYtiwYXHEEUdEly5dol69eqmTNmvNmjWxePHiuP/+++Pmm2+OysrK1EkAAAAAAAAAAAAAANQBhnsAAAAAAAAAAAAAAAAAIANOOeWUOOOMM6Jnz55RXFycOqdG3nnnnZg3b15cd911sXTp0tQ5AAAAAAAAAAAAAADkMcM9AAAAAAAAAAAAAAAAAFBHFRYWxqhRo+KMM86Idu3apc7ZZj7//PN4+umn48c//nE89NBDqXMAAAAAAAAAAAAAAMhDhnsAAAAAAAAAAAAAAAAAoA668MILY+jQodG6devUKbVm48aNsXDhwpg8eXLMnTs3dQ4AAAAAAAAAAAAAAHnEcA8AAAAAAAAAAAAAAAAA1CEnnXRSjB8/Pjp27Jg6ZbuprKyMefPmRVlZWbz00kupcwAAAAAAAAAAAAAAyAOGewAAAAAAAAAAAAAAAID/csUVV0T79u1TZ2TO9OnTY8GCBakzyFOtWrWK6dOnx7HHHhsFBQWpc5JYt25dzJgxI8rLy6OysjJ1DgAAAAAAAAAAAAAAOcxwDwAAAAAAAAAAAAAAAPBfFi9eHN/4xjdSZ2TO0KFDY9asWakzyENnnXVWTJ48OZo1a5Y6JSe88MILcc4558SSJUtSpwAAAAAAAAAAAAAAkKMKUwcAAAAAAAAAAAAAAAAAADVTv379uOOOO2LWrFlGe/5Nly5d4rHHHosRI0akTgEAAAAAAAAAAAAAIEcZ7gEAAAAAAAAAAAAAAACAPNSuXbtYvHhxnHLKKVFQUJA6J+c0btw4rr766rj99tujsNDHKQEAAAAAAAAAAAAA+E+uNAcAAAAAAAAAAAAAAACAPHPIIYfE448/HgcccEDqlJx36qmnxtNPPx1NmzZNnQIAAAAAAAAAAAAAQA4x3AMAAAAAAAAAAAAAAAAAeaR///7xwAMPRMuWLVOn5I2DDz44fv/730ebNm1SpwAAAAAAAAAAAAAAkCMM9wAAAAAAAAAAAAAAAABAnujfv3/Mnj07mjZtmjol73To0CHmzZtnvAcAAAAAAAAAAAAAgIgw3AMAAAAAAAAAAAAAAAAAeaFPnz4xe/bs2HHHHVOn5K22bdvGI488Ei1atEidAgAAAAAAAAAAAABAYoZ7AAAAAAAAAAAAAAAAACDHde/e3WjPNtKuXbt46KGHoqSkJHUKAAAAAAAAAAAAAAAJGe4BAAAAAAAAAAAAAAAAgBxWWload9xxRzRr1ix1Sp3RtWvXuPvuu1NnAAAAAAAAAAAAAACQkOEeAAAAAAAAAAAAAAAAAMhh9957b+y1116pM+qcY489NiZPnpw6AwAAAAAAAAAAAACARAz3AAAAAAAAAAAAAAAAAECOuvzyy+PQQw9NnVFnDR8+PPr27Zs6AwAAAAAAAAAAAACABAz3AAAAAAAAAAAAAAAAAEAOOuyww+L8889PnVGnNWjQIKZNmxaNGjVKnQIAAAAAAAAAAAAAwHZmuAcAAAAAAAAAAAAAAAAAckxhYWFMnTo1SkpKUqfUea1bt44ZM2akzgAAAAAAAAAAAAAAYDsz3AMAAAAAAAAAAAAAAAAAOWbixImx7777ps7IjFNOOSWOOeaY1BkAAAAAAAAAAAAAAGxH9VIHAAAAAAAAAAAAAABAXVFaWhr77LNPtGjRInbZZZfYeeedo2nTptGkSZNo0qRJ1KtXL3bYYYcoKSmJevXqRaNGjaKgoOBf319YWBgNGzaMDRs2xKeffvqv2ysqKuKTTz6JTz/9NDZs2BAfffRRfPzxx7F27dr48MMP48MPP4z33nsv/va3v8Vrr70Wb7/9doqHDwBsI61atYpzzz03dUam1KtXLyZOnBjz589PnQIAAAAAAAAAAAAAwHZiuAcAAAAAAAAAAAAAALagsLAwDjzwwGjfvn20bt06WrZsGbvttls0a9YsSktLo0mTJtG0adMoKSlJnRoREZ999lmsWbMmPvjgg3jvvffi7bffjrfffjtWrVoVy5Yti8WLF8e7776bOhMA2IQpU6ZE06ZNU2dkTrdu3WLYsGExY8aM1CkAAAAAAAAAAAAAAGwHhnsAAAAAAAAAAAAAAOCfOnToED179ox99tnnXwM9LVu2jBYtWkT9+vVT51VZgwYNYtddd41dd911k1/zj3/8I956661YtWpV/OUvf4lly5bFkiVL4plnntmOpQDAF7Vt2zb69++fOiOzfvjDHxruAQAAAAAAAAAAAADICMM9AAAAAAAAAAAAAABkTv369aN3795x0EEHRadOnaJ169axxx57RNOmTVOnbTc777xz7LzzztGxY8f/uH3dunXx17/+NZYvXx5//vOfY+HChTF//vyorKxMVAoA2TJhwoRo2LBh6ozM2nvvveO8886LadOmpU4BAAAAAAAAAAAAAKCWFUTExtQRAAAAAAAAAAAAAABQmw477LA49NBDo2vXrtGuXbto3bp11K9fP3VW3vjkk0/i9ddfjz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aDH(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(8,
					"googleplay", 3,
					"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"
					), aDH(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aDH(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDH(14, "bestPlayer", 5,
					"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"
					), aDH(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aDH(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aDH(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aDH(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aDH(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aDH(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aDH(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aDH(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eI) {
		return canvas[eI]
	}, this.ep = function(name) {
		for (var ce = o4.length - 1; 0 <= ce; ce--)
			if (o4[ce] === name) return canvas[ce];
		return aDC
	}, this.eK = function() {
		return aDB <= 0
	}, this.eL = function() {
		aDB = 0, aDE()
	}
}

function vw() {
	var canvas, fA, bz, font, aDV = 0,
		aDW = !1,
		aDX = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aDY = 5;

	function a0l() {
		if (aDW) {
			var ce, en = aDX.length,
				a0Y = Math.floor(.5 * bz.b2),
				b2 = en * a0Y,
				aF = Math.floor(Math.floor(bz.aF) + .3 * bz.b1 - .5),
				aG = Math.floor(Math.floor(bz.aG) - b2),
				b1 = Math.floor(.4 * bz.b1 + 2.5);
			for (dQ.fillStyle = dK.eG, dQ.fillRect(aF, aG, b1, b2), dQ.fillStyle = dK.a5z, dQ.fillRect(aF, aG + aDY * a0Y, b1, a0Y), dQ.fillStyle = dK.dM, dQ.fillRect(aF, aG, 2, b2), dQ.fillRect(aF, aG, b1, 2), dQ.fillRect(aF + b1 - 2, aG, 2, b2),
				ce = 1; ce < en; ce++) dQ.fillRect(aF, aG + ce * a0Y, b1, 2);
			for (dQ.fillStyle = dK.dM, bT.ed.textAlign(dQ, 1), bT.ed.textBaseline(dQ, 1), dQ.font = bT.ed.ef(0, .6 * a0Y), aF += .5 * b1, ce = 0; ce < en; ce++) dQ.fillText(aDn(ce), aF, aG + (ce + .6) * a0Y)
		}
		dQ.drawImage(canvas, Math.floor(bz.aF), Math.floor(bz.aG))
	}

	function j6(dh) {
		var aF, na, nc, a0Y;
		fA.clearRect(0, 0, Math.floor(bz.b1), Math.floor(bz.b2)), fA.fillStyle = dK.eG, fA.fillRect(0, 0, Math.floor(bz.b1), Math.floor(bz.b2)), aI.bD && (fA.fillStyle = dK.a5z, fA.fillRect(0, 0, Math.floor(.3 * bz.b1), Math.floor(bz.b2))), fA
			.fillStyle = dK.dM, fA.fillText("Hide UI", .15 * bz.b1, .5 * bz.b2), fA.fillRect(Math.floor(.3 * bz.b1 - .5), 0, 2, Math.floor(bz.b2)), aF = .5 * bz.b1, fA.fillText("Replay Speed", aF, .31 * bz.b2), fA.fillText(aDn(aDY), aF, .69 * bz.b2),
			fA.fillRect(Math.floor(.7 * bz.b1 - .5), 0, 2, Math.floor(bz.b2)), dh.ig ? (aF = Math.floor(.02 * bz.b1), dh = Math.floor(.025 * bz.b1), na = Math.floor(.85 * bz.b1 - aF - .5 * dh), nc = Math.floor(.25 * bz.b2), a0Y = Math.floor(bz.b2) -
				2 * nc, fA.fillRect(na, nc, aF, a0Y), fA.fillRect(na + aF + dh, nc, aF, a0Y)) : function() {
				var b1 = Math.floor(.46 * bz.b2),
					b2 = Math.floor(.23 * bz.b2),
					aF = Math.floor(.85 * bz.b1 - .5 * b1 + b1 / 12),
					aG = Math.floor(.5 * bz.b2 - b2);
				fA.beginPath(), fA.moveTo(aF, aG), fA.lineTo(aF + b1, aG + b2), fA.lineTo(aF, aG + (b2 << 1)), fA.fill()
			}(), fA.fillRect(0, 0, Math.floor(bz.b1), 2), fA.fillRect(0, 0, 2, Math.floor(bz.b2)), fA.fillRect(0, Math.floor(bz.b2) - 2, Math.floor(bz.b1), 2), fA.fillRect(Math.floor(bz.b1 - 2), 0, 2, Math.floor(bz.b2))
	}

	function aDn(ce) {
		return 5 === ce ? "Normal" : "" + aDX[ce]
	}
	this.ig = !1, this.k = function() {
		aI.bG && (aDY = 5, this.ig = !1, aDW = !1, bz = new e8([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aDZ = function() {
		return aDX[aDY]
	}, this.cl = function() {
		return bz.aG
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.ig,
		fxGetSpeedIndex: () => aDY,
		fxSetSpeedIndex: index => {
			aDY = index, this.resize()
		},
		fxGetPanelTop: () => bz && bz.aG
	}, this.nU = function(a53) {
		return !!aI.bG && bz.aF + bz.b1 > aA.b1 - a53 - dO.gap
	}, this.resize = function() {
		aI.bG && (bz.resize(), bz.aG -= (nV.nW() - 1) * dO.gap, font = bT.ed.ef(0, .3 * bz.b2), (canvas = document.createElement("canvas")).width = Math.floor(bz.b1), canvas.height = Math.floor(bz.b2), (fA = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bT.ed.textAlign(fA, 1), bT.ed.textBaseline(fA, 1), j6(this))
	}, this.bC = function(aDa) {
		0 === aI.aJ || aH.af() || aDa !== aI.bD && (aI.bD = aDa, f5.resize(), aC.ah = !0, aI.bG) && (aDV = aC.aD + 2e3, j6(this))
	}, this.m = function(aF, aG) {
		if (!aI.bG) return !1;
		if (aF < bz.aF || aG < bz.aG || aF > bz.aF + bz.b1) return aDW && function(dh, aF, aG) {
			var en = aDX.length,
				a0Y = Math.floor(.5 * bz.b2),
				b2 = en * a0Y,
				na = Math.floor(Math.floor(bz.aF) + .3 * bz.b1 - .5),
				b2 = Math.floor(Math.floor(bz.aG) - b2),
				b1 = Math.floor(.4 * bz.b1 + 2.5);
			return aDW = !1, aC.ah = !0, aF < na || na + b1 < aF || aG < b2 || (aDY = aDf(0, Math.floor((aG - b2) / a0Y), en - 1), j6(dh)), !0
		}(this, aF, aG);
		if ((aF -= bz.aF) < .3 * bz.b1) aDW = !1, this.bC(!aI.bD);
		else {
			if (aF < .7 * bz.b1) return aDW = !aDW, aC.ah = !0;
			this.bH(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.bH(!0), this.bH = function(aDc) {
		2 === aI.aJ ? (this.bC(!1), aH.eF(3)) : (aDW = !1, this.ig = !this.ig, this.ig ? (aS.bE && aS.bF(), ca.cb.setState(1)) : aDc || aS.a2A(), aC.ah = !0, j6(this))
	}, this.aDd = function() {
		this.ig = !1, aS.a2A(), aC.ah = !0, j6(this)
	}, this.aM = function(aF, aG) {
		return !!aI.bD && (0 <= aS.m(aF, aG) || (aI.bG ? ((aC.aD > aDV || !this.m(aF, aG)) && aY.m(aF, aG), aC.ah = !0, aDV = aC.aD + 2e3) : aY.m(aF, aG)), !0)
	}, this.j1 = function() {
		aI.bG && aI.bD && aC.aD > aDV - 1e3 && aC.aD < aDV && (aC.ah = !0)
	}, this.aDe = function() {
		aI.bG && (this.ig = !1, aC.ah = !0, j6(this))
	}, this.dP = function() {
		if (aI.bG) {
			if (aI.bD) {
				if (aC.aD > aDV) return;
				if (aC.aD > aDV - 1e3) return dQ.globalAlpha = aDf(0, (1e3 - (aC.aD - (aDV - 1e3))) / 1e3, 1), a0l(), void(dQ.globalAlpha = 1)
			}
			a0l()
		}
	}
}

function aDo() {
	this.k = function() {
		! function() {
			var data = cs.buffer.data;
			0 === data[2].eX && (aA.b2 > aA.b1 || 0 !== ca.id) && (data[2].value = data[2].rR = 1);
			0 === data[100].eX && (data[100].value = data[100].rR = (0 === ca.id ? "Player " : 1 === ca.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var ce, data = cs.buffer.data,
			en = data.length;
		for (ce = 0; ce < en; ce++) {
			var a6y = cs.fx.aDr(ce, !0);
			data[ce] && data[ce].eX === a6y && (null === (a6y = cs.fx.aDs(ce)) ? data[ce].value = data[ce].rR : 2 === data[ce].type ? data[ce].value = a6y : (a6y = Number(a6y), isNaN(a6y) ? data[ce].value = data[ce].rR : data[ce].value = a6y))
		}
	}
}

function aAl() {
	var aDu = null;
	this.tE = 0, this.aAt = function() {
		var gU = cs.buffer.data[5].value;
		aDu = "px " + gU, "system-ui" !== gU && (aDu += ", system-ui"), this.tE = aDv(32, 32, ["a", "b", "m"], 200, aDu)
	}, this.k7 = function(b1, b2) {
		var ax = document.createElement("canvas");
		return ax.width = b1, ax.height = b2, ax
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(fA, b1, b2) {
		return fA.getImageData(0, 0, b1, b2)
	}, this.ef = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aDu : 1 === type ? "bold " + size + aDu : 2 === type ? "lighter " + size + aDu : 3 === type ? "italic " + size + aDu : 4 === type ? "oblique " + size + aDu : 5 === type ? "small-caps " +
			size + aDu : "small-caps bold " + size + aDu
	}, this.textAlign = function(t1, id) {
		t1.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(t1, id) {
		t1.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.eh = function(a2, code, color) {
		color = this.a23(dO.yg) + " solid " + (color || dK.dM);
		5 === (code = code || 5) ? a2.style.border = color : 4 === code ? a2.style.borderLeft = color : 2 === code ? a2.style.borderBottom = color : 6 === code ? a2.style.borderRight = color : a2.style.borderTop = color
	}, this.ee = function(a2, aF, aG, b1, b2) {
		a2 = a2.style;
		a2.left = this.aDx(aF), a2.top = this.aDx(aG), a2.width = this.aDx(b1), a2.height = this.aDx(b2)
	}, this.yi = function(gU) {
		return 1 + gU * ca.cb.cc()
	}, this.aDy = function(d3, xF) {
		return d3 * this.yi(void 0 === xF ? .5 : xF) * aA.cd / aA.aB
	}, this.aDz = function(d3, xF) {
		return d3 * this.yi(void 0 === xF ? .5 : xF) * aA.cd
	}, this.aE0 = function(d3, xF, aE1) {
		return this.yi(xF) * Math.min(d3 * aA.cd, aE1 * aA.b1) / aA.aB
	}, this.a23 = function(gU) {
		return gU.toFixed(1) + "px"
	}, this.aDx = function(gU) {
		return this.eg(gU).toFixed(1) + "px"
	}, this.eg = function(gU) {
		return gU / aA.aB
	}, this.aE3 = function(aE4) {
		for (var bb = "<ul>", en = aE4.length, ce = 0; ce < en; ce++) bb += "<li>" + aE4[ce][0] + ": <a href='" + aE4[ce][1] + "' target='_blank'>" + aE4[ce][0] + "</a></li>";
		return bb += "</ul>"
	}, this.aE5 = function(aE6) {
		return "<a href='" + aE6 + "' target='_blank'>" + aE6 + "</a>"
	}, this.aE7 = function(a2) {
		navigator.clipboard && navigator.clipboard.writeText(a2.value)
	}, this.jP = function(a2) {
		var mf = a2.textContent;
		bT.bZ.a41(mf, "✔") || (1 === mf.length ? a2.textContent = "✔" : a2.textContent = mf + " ✔", setTimeout(function() {
			a2.textContent = mf
		}, 500))
	}, this.measureText = function(bb) {
		return dQ.measureText(bb).width
	}, this.aE8 = function(aE9) {
		aE9.style.overflowX = "auto", aE9.style.overflowY = "hidden", aE9.style.whiteSpace = "nowrap", aE9.addEventListener("wheel", function(a2) {
			Math.abs(a2.deltaY) < Math.abs(a2.deltaX) || (this.scrollLeft += a2.deltaY, this.aEA = this.scrollLeft, a2.preventDefault())
		}), aE9.addEventListener("scroll", function() {
			this.aEA = this.scrollLeft
		})
	}
}

function aEB() {
	function aEM(aF, en, aG, aEF, aEK, a8p, player) {
		if (!(aG < 1 || aEK < aG))
			for (var ce = 0; ce <= en; ce++) {
				var d5 = i9.aEW(aF, aG);
				if (f4.c3.yd(d5) && !bT.fY.has(aEF, i4.o8(d5)) && i4.a3D(d5, player)) return d5 >> 2;
				aF += a8p
			}
		return -1
	}

	function aER(aG, en, aF, aEF, aEJ, a8p, player) {
		if (!(aF < 1 || aEJ < aF)) {
			en = Math.max(en, 0);
			for (var ce = 0; ce <= en; ce++) {
				var d5 = i9.aEW(aF, aG);
				if (f4.c3.yd(d5) && !bT.fY.has(aEF, i4.o8(d5)) && i4.a3D(d5, player)) return d5 >> 2;
				aG += a8p
			}
		}
		return -1
	}

	function aEV(a8L, aEN, yb) {
		return -1 !== aEN && (-1 === a8L || i9.xK(aEN, yb) < i9.xK(a8L, yb)) ? aEN : a8L
	}
	this.aEC = function(player, yb) {
		if (f4.wd.we(player))
			for (var aED = i9.aEE(), aEF = [];;) {
				var a8H = function(yb, aED, aEF, player) {
					for (var u1 = i9.nb(yb), u2 = i9.nd(yb), aEJ = dC.dD - 2, aEK = dC.dE - 2, aEL = -1, gy = 0; gy < aED; gy++) {
						var y2 = Math.max(u1 - gy, 1),
							y3 = Math.max(u2 - gy, 1),
							y4 = Math.min(u1 + gy, aEJ),
							xt = Math.min(u2 + gy, aEK),
							a8L = aEM(u1, y4 - u1, u2 - gy, aEF, aEK, 1, player),
							aEN = aEM(u1 - 1, u1 - y2 - 1, u2 - gy, aEF, aEK, -1, player),
							y4 = aEM(u1, y4 - u1, u2 + gy, aEF, aEK, 1, player),
							y2 = aEM(u1 - 1, u1 - y2 - 1, u2 + gy, aEF, aEK, -1, player),
							aEQ = aER(u2, xt - u2 - 1, u1 - gy, aEF, aEJ, 1, player),
							aES = aER(u2 - 1, u2 - y3 - 2, u1 - gy, aEF, aEJ, -1, player),
							xt = aER(u2, xt - u2 - 1, u1 + gy, aEF, aEJ, 1, player),
							y3 = aER(u2 - 1, u2 - y3 - 2, u1 + gy, aEF, aEJ, -1, player);
						if (aEL = aEV(aEL, a8L, yb), aEL = aEV(aEL, aEN, yb), aEL = aEV(aEL, y4, yb), aEL = aEV(aEL, y2, yb), aEL = aEV(aEL, aEQ, yb), aEL = aEV(aEL, aES, yb), aEL = aEV(aEL, xt, yb), 0 <= (aEL = aEV(aEL, y3, yb)) && gy *
							gy >= i9.xK(aEL, yb)) return aEL
					}
					return -1
				}(yb, aED, aEF, player);
				if (-1 === a8H) break;
				var id = i4.o8(i9.lO(a8H));
				if (f4.c3.aEH(player, id)) return !! function(player, a8H, yb) {
					for (var l0 = i9.aEX(a8H, yb), ce = 0; ce < 4; ce++) {
						var kz = i9.ye(a8H, l0);
						if (i4.a7S(i9.lO(kz), player)) return gk.wt[6] = l0, 1;
						l0 = (l0 + 1) % 4
					}
					return
				}(player, a8H, yb) && (gk.wt[7] = a8H, !0);
				aEF.push(id)
			}
		return !1
	}
}

function eS(id, aBO, aEY) {
	var j9, uF;

	function aEc() {
		uF.aEg.innerHTML += "<br>" + L(232)
	}

	function aEf() {
		var gv = 1;
		aH.eF(4, 1, new rO(L(233), L(234), !1, [new e9("🔄 Reload", function() {
			gv && (setTimeout(function() {
				aH.eF(1)
			}, 5e3), ca.cb.aAD()), gv = 0
		}, dK.nP)]))
	}

	function aEb() {
		lo.iE(90), lo.mB(30, Math.floor(gf.pow(30) * Math.random())), lo.mB(30, Math.floor(gf.pow(30) * Math.random())), lo.mB(30, Math.floor(gf.pow(30) * Math.random())), jz.k(lo.lj), cs.jD.jX(110, c9.cA.m1(c9.cA.m2(15))), a5.p6.aEm()
	}
	this.aEZ = !0, this.aEa = id, this.show = function() {
		j9.show(), this.resize(), 15 === id ? (a5.a6.zm(id) ? aEb : aEc)() : 16 === id ? a5.a6.zm(id) ? a5.kf.kg(2) : aEc() : 17 === id ? a5.a6.zm(id) ? a5.kf.kg(3) : aEc() : 18 === id ? (a5.a6.close(0, 3253), a5.a6.zj(0, id, 0), aEc()) : 21 ===
			id ? a5.a6.zm(id) ? a5.a3c.a18(aBO.zJ, aBO.rL, aBO.rM) : aEc() : 22 === id ? a5.a6.zm(id) ? a5.a3c.a19(aBO.zJ, aBO.a1A, aBO.a1B) : aEc() : 23 === id ? a5.a6.zm(id) ? a5.a3c.a1E(aBO.rK, aBO.rN) : aEc() : 24 === id ? a5.a6.zm(id) ? a5
			.a3c.a1H(aBO.rK, aBO.rL, aBO.rM) : aEc() : 25 === id ? a5.a6.zm(id) ? a5.p6.aEd(aBO) : aEc() : 28 === id ? a5.a6.zm(id) ? a5.a3c.a1D(aBO.zJ, aBO.a1A, aBO.a1B) : aEc() : 29 === id ? a5.a6.zm(id) ? a5.p6.aEe(aBO) : aEc() : 30 === id &&
			(a5.a6.zm(id) ? jG.a6r() || aEf() : aEc())
	}, this.aEh = function() {
		15 === id ? aEb() : 16 === id ? a5.kf.kg(2) : 17 === id ? a5.kf.kg(3) : 18 === id ? aH.eF(8, this.rJ, new eS(16)) : 21 === id ? a5.a3c.a18(aBO.zJ, aBO.rL, aBO.rM) : 22 === id ? a5.a3c.a19(aBO.zJ, aBO.a1A, aBO.a1B) : 23 === id ? a5.a3c
			.a1E(aBO.rK, aBO.rN) : 24 === id ? a5.a3c.a1H(aBO.rK, aBO.rL, aBO.rM) : 25 === id ? a5.p6.aEd(aBO) : 28 === id ? a5.a3c.a1D(aBO.zJ, aBO.a1A, aBO.a1B) : 29 === id ? a5.p6.aEe(aBO) : 30 === id ? jG.a6r() || aEf() : 1e3 === id && (this
				.aEa = id = 25, a5.p6.aEd(aBO))
	}, this.a6v = function(code, oj, data) {
		!oj && code !== id || (15 === code || 16 === code ? aH.eF(7, this.rJ) : 17 === code ? (a5.a6.close(0, 3252), cs.a6.aEi(0), cs.buffer.data[117].fl && 0 < cs.buffer.data[117].fl.length ? (oj = cs.a6.aEj(0), cs.jD.jX(105, oj.cE), cs.jD.jX(
			106, oj.password), aH.eF(8, this.rJ, new eS(16))) : (cs.jD.jX(105, ""), aH.a6.rH())) : 21 === code ? aH.eF(10, this.rJ, new a9X(data)) : 23 === code ? aH.eF(13, this.rJ, new aEk({
			data: data,
			rK: aBO.rK
		})) : 25 === code ? (aH.a6.rA.cE = aBO.cE, cs.aEl.j6(aBO.cE), aH.eF(15, this.rJ)) : 30 === code && (data ? aH.eF(1) : aEf()))
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), uF.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(230), [new e9("⬅️ " + L(6), function() {
		aEY ? aH.eF(29) : aH.a6.rH()
	})]), uF = new uG(j9.fS, L(231))
}

function wC() {
	this.a9A = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aEn = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dK.dM, "rgb(170,170,170)"
	], this.aEo = [dK.dM, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dK.dM, dK.oK], this.aEp = [dK.oK, dK.dM, dK.dM, dK.dM, dK.oK, dK.oK, dK.oK, dK.oK, dK.dM];
	var aEq = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.tX = ["rgba(" + aEq[0] + ",", "rgba(" + aEq[1] + ",", "rgba(" + aEq[2] + ",", "rgba(" + aEq[3] + ",", "rgba(" + aEq[4] + ",", "rgba(" + aEq[5] + ",", "rgba(" + aEq[6] + ",", "rgba(" + aEq[7] + ",", "rgba(" + aEq[8] + ",", "rgba(" + aEq[9] +
			","
		], this.tY = ["rgb(" + aEq[0] + ")", "rgb(" + aEq[1] + ")", "rgb(" + aEq[2] + ")", "rgb(" + aEq[3] + ")", "rgb(" + aEq[4] + ")", "rgb(" + aEq[5] + ")", "rgb(" + aEq[6] + ")", "rgb(" + aEq[7] + ")", "rgb(" + aEq[8] + ")", "rgb(" + aEq[9] +
			")"], this.o4 = null, this.aC1 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.a0V = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.o5 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.g9 = new Uint8Array(aI.fo), this.a7P = new Uint8Array(aI.fo), this.a2e = new Uint16Array(aI.fo), this.a2f = new Uint16Array(this.o5.length + 1), this.a2g = new Uint16Array(this.o5.length), this
		.i5 = function() {
			this.o4 = [L(235), L(236), L(237), L(238), L(239), L(240), L(241), L(242), L(243)]
		}, this.k = function() {
			if (this.g9.fill(0), this.a7P.fill(0), this.aEr(), aI.dm) {
				if (9 === aI.dw) {
					for (var g9 = g8.g9, ce = aI.data.teamPlayerCount[7] - 1; 0 <= ce; ce--) g9[ce] = 1;
					var en = aI.fo;
					for (ce = aI.data.teamPlayerCount[7]; ce < en; ce++) g9[ce] = 2;
					g8.o5[1] = 7, g8.o5[2] = 8
				} else aI.df ? function() {
					var a0V = g8.a0V,
						colorsData = aI.data.colorsData;
					if (!aI.data.selectableColor)
						for (var ce = aI.gN - 1; 0 <= ce; ce--) colorsData[ce] = hw.pL(262144);
					var aF2 = 0,
						xJ = 768,
						a0U = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aI.data.teamPlayerCount;
					for (ce = 0; ce < 9; ce++)
						if (teamPlayerCount[ce]) {
							for (var gy = 0, gv = 0; gv < 3; gv++) gy += Math.abs(a0V[ce][gv] - a0U[gv]);
							gy < xJ && (aF2 = ce, xJ = gy)
						} var aF3 = new Uint16Array(9);
					for (ce = 0; ce < 9; ce++) aF3[ce] = teamPlayerCount[ce];
					var o5 = g8.o5,
						aF4 = new Uint8Array(9),
						lu = (o5[0] = 0, 1);
					for (ce = 1; ce < 9; ce++) aF3[ce] && (aF4[ce] = lu, o5[lu++] = ce);
					var tl = aI.gN,
						g9 = g8.g9;
					aF3[aF2] ? (aF3[aF2]--, g9[0] = aF4[aF2]) : tl = 0;
					var ax = 0;
					for (ce = tl; ce < aI.hZ; ce++) {
						var kU = o5[ax];
						if (aF3[kU]) aF3[kU]--, g9[ce] = aF4[kU];
						else if (ce--, 9 <= ++ax) return console.log("error 325")
					}
				}() : this.j1();
				! function() {
					for (var en = aI.fo, a2e = g8.a2e, a2f = g8.a2f, a2g = g8.a2g, g9 = g8.g9, o5 = g8.o5, a2X = o5.length, buffer = new Array(a2X), ce = 0; ce < a2X; ce++) buffer[ce] = [];
					for (ce = 0; ce < en; ce++) buffer[o5[g9[ce]]].push(ce);
					for (ce = 1; ce <= a2X; ce++) a2f[ce] = a2f[ce - 1] + buffer[ce - 1].length;
					for (ce = 0; ce < a2X; ce++)
						for (var lu = buffer[ce].length, ju = a2f[ce], kU = 0; kU < lu; kU++) a2e[kU + ju] = buffer[ce][kU];
					var gN = aI.gN;
					for (ce = 0; ce < a2X; ce++)
						for (lu = buffer[ce].length, ju = a2f[ce], kU = 0; kU < lu; kU++)
							if (a2e[kU + ju] >= gN) {
								a2g[ce] = kU;
								break
							}
				}(), ! function() {
					for (var en = aI.fo, g9 = g8.g9, a7P = g8.a7P, o5 = g8.o5, ce = 0; ce < en; ce++) a7P[ce] = o5[g9[ce]];
					9 === aI.dw && a7P.fill(1, en - hs.uY[5])
				}()
			}
		}, this.aEr = function() {
			for (var ce = this.o5.length - 1; 0 <= ce; ce--) this.o5[ce] = ce
		}, this.j1 = function() {
			var tb = new Uint8Array(aI.gN),
				et = new Uint8Array(aI.gN),
				aEw = new Uint16Array(8),
				aEx = new Uint16Array(this.o5.length);
			this.aEy(tb, et, aEw, 1), this.a7F(aEw), this.aEz(aEx, tb, et), this.aF0(tb, et, aEx), this.aF1()
		}, this.aEy = function(tb, et, aF3, aF5) {
			for (var gv, a2, aF6, en = this.o5.length - aF5, jU = new Uint16Array(en), a0V = this.a0V, colorsData = aI.data.colorsData, ce = aI.gN - 1; 0 <= ce; ce--) {
				for (gv = en; aF5 <= gv; gv--) jU[gv - 1] = Math.abs(4 * (colorsData[ce] >> 12) - a0V[gv][0]) + Math.abs(4 * (colorsData[ce] >> 6 & 63) - a0V[gv][1]) + Math.abs(4 * (63 & colorsData[ce]) - a0V[gv][2]);
				for (aF6 = 768, gv = en - 1; 0 <= gv; gv--) jU[a2 = (gv + ce) % en] < aF6 && (aF6 = jU[a2], tb[ce] = a2);
				for (aF3[tb[ce]] += 4, aF6 = 768, gv = en - 1; 0 <= gv; gv--) jU[a2 = (gv + ce) % en] < aF6 && a2 !== tb[ce] && (aF6 = jU[a2], et[ce] = a2);
				aF3[et[ce]]++
			}
		}, this.a7F = function(aF3) {
			for (var gv, xI, en = this.o5.length - 1, ce = en; 0 <= ce; ce--) this.o5[ce] = ce;
			for (ce = en - 1; 0 <= ce; ce--) aF3[ce]++;
			for (ce = 1; ce <= en; ce++) {
				for (xI = 0, gv = 1; gv < en; gv++) aF3[gv] > aF3[xI] && (xI = gv);
				aF3[xI] = 0, this.o5[ce] = xI + 1
			}
		}, this.aEz = function(aEx, tb, et) {
			var gv, aF7, ax, gy, a2, d3, bi, aF8 = this.o5.length - 1,
				aF9 = new Uint16Array(aF8),
				aFA = [],
				aFB = 0,
				rN = [],
				aFC = [];
			loop: for (var ce = 0; ce < aI.gN; ce++)
				if (null !== (aF7 = bT.bZ.a3w(bX.o2[ce]))) {
					for (gv = rN.length - 1; 0 <= gv; gv--)
						if (aF7 === rN[gv]) {
							aFC[gv].push(ce), aFB = Math.max(aFB, aFC[gv].length);
							continue loop
						} rN.push(aF7), aFA.push(!1), aFC.push([ce]), aFB = Math.max(aFB, 1)
				}
			for (; 2 < aI.hc && aFB > gf.gg(aI.gN, aI.hc);) aI.hc--, aI.dw--;
			for (gv = rN.length - 1; 0 <= gv; gv--) {
				for (gy = -1, ax = rN.length - 1; 0 <= ax; ax--) !aFA[ax] && (-1 === gy || aFC[ax].length > aFC[gy].length) && (gy = ax);
				for (ax = aF8 - 1; 0 <= ax; ax--) aF9[ax] = 1;
				for (ax = aFC[gy].length - 1; 0 <= ax; ax--) aF9[tb[aFC[gy][ax]]] += 3, aF9[et[aFC[gy][ax]]]++;
				for (ce = aF8 - 1; 0 <= ce; ce--) {
					for (a2 = gy % aF8, ax = aF8 - 1; 0 <= ax; ax--) aF9[ax] > aF9[a2] && (a2 = ax);
					for (d3 = -1, ax = aI.hc; 0 < ax; ax--)
						if (this.o5[ax] === a2 + 1) {
							d3 = ax;
							break
						} if (aF9[a2] = 0, -1 !== d3) {
						for (bi = 0, ax = aI.hc; 0 < ax; ax--) aEx[d3] > aEx[ax] && bi++;
						if (bi !== aI.hc - 1) {
							for (ax = aFC[gy].length - 1; 0 <= ax; ax--) aEx[d3]++, this.g9[aFC[gy][ax]] = d3;
							break
						}
					}
				}
				aFA[gy] = !0
			}
		}, this.aF0 = function(tb, et, aEx) {
			for (var ce, qs, en = this.o5.length - 1, border = gf.gg(aI.gN, aI.hc), aFD = (0 < aI.gN % aI.hc && border++, new Uint8Array(1 + en)), gv = en; 1 <= gv; gv--) aFD[this.o5[gv]] = gv;
			for (ce = 0; ce < aI.gN; ce++) qs = aFD[tb[ce] + 1], 0 === this.g9[ce] && qs <= aI.hc && aEx[qs] < border && (aEx[qs]++, this.g9[ce] = qs);
			for (ce = 0; ce < aI.gN; ce++) qs = aFD[et[ce] + 1], 0 === this.g9[ce] && qs <= aI.hc && aEx[qs] < border && (aEx[qs]++, this.g9[ce] = qs);
			for (gv = aI.hc; 1 <= gv; gv--)
				for (ce = aI.gN - 1; 0 <= ce && !(aEx[gv] >= border); ce--) 0 === this.g9[ce] && (aEx[gv]++, this.g9[ce] = gv)
		}, this.aF1 = function() {
			if (aI.hc < 8) aI.hc++, aI.dw++, aI.hd = 1;
			else
				for (var ce = aI.gN; ce < aI.fo; ce++) this.g9[ce] = 1 + ce % aI.hc
		}
}

function aDv(fE, size, a1F, aFE, font) {
	var ce, tW = .2,
		canvas = document.createElement("canvas"),
		t1 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = fE, canvas.height = fE, t1.font = size + font, t1.textAlign = "center", t1.textBaseline = "middle", t1.fillStyle = "red", ce = 0; ce < a1F.length; ce++) t1.fillText(a1F[ce], .5 * fE, .5 * fE);
	return -1 < (canvas = function(aB0) {
		var ce, au, gy = aB0.data;
		for (ce = gy.length - 4; 0 <= ce; ce -= 4)
			if (au = gy[ce], aFE <= au) return Math.floor(ce / (4 * fE));
		return -1
	}(t1.getImageData(0, 0, fE, fE))) && (tW = (canvas - .5 * fE + .1 * size) / size), Math.max(tW, 0)
}

function aFH() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.tS = 13, this.aFI = this.emojis.length, this.aFJ = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.aFJ, this.aFK = 1024, this.aFL = this.emojis.indexOf(
		"💀"), this.aFM = this.aFL + 1, this.aFN = this.emojis.indexOf("🥇"), this.aFO = this.emojis.indexOf("😊"), this.tT = function(gU) {
		return gU < this.aFJ ? String.fromCharCode(55356, 56806 + gf.gg(gU, 26), 55356, 56806 + gU % 26) : this.emojis[Math.min(gU - this.aFJ, this.aFI - 1)]
	}, this.aFP = function(bb) {
		for (var en = bb.length - 2, jU = [], ce = 0; ce < en; ce++) {
			var tb = bb.charCodeAt(ce) - 56806,
				et = bb.charCodeAt(ce + 2) - 56806;
			0 <= tb && tb < 26 && 0 <= et && et < 26 && (jU.push(26 * tb + et), ce += 3)
		}
		return jU
	}, this.sq = function(gU) {
		return gU < this.aFJ
	}, this.tP = function(gU) {
		return gU >= 1024 - this.tS
	}, this.tN = function(gU) {
		return gU >= this.aFJ && gU < this.aFJ + this.aFM
	}
}

function wW() {
	var aF, aG, b2, eZ, aFQ, aFR, aFS, aFT, aFU, b1, aE6, aFV;
	this.af = !1, this.k = function(bb, aFW) {
		if (1 === ca.id && 13 <= ca.eX && ca.eX < 18) return aFW ? void(aE6 = bb) : aE6 !== bb ? void 0 : void ca.eY.saveString(200, bb);
		aFW && (aE6 = bb, (aFV = document.createElement("a")).appendChild(document.createTextNode(aE6)), this.af = !0, aFV.title = aE6, aFV.target = "_blank", aFV.href = aE6, aFV.style.textAlign = "center", aFV.style.color = dK.dM, aFV.style
			.position = "absolute", aFV.style.padding = "0px", aFV.style.margin = "0px", this.resize(), document.body.appendChild(aFV), aC.ah = !0)
	}, this.c1 = function() {
		return !(!this.af || (aH.removeChild(document.body, aFV), this.af = !1))
	}, this.m = function(co, cr) {
		return !!this.af && ((co < aF || cr < aG || aF + b1 < co || aG + b2 < cr || aF + b1 - eZ < co && cr < aG + eZ) && (aC.ah = !0, this.af = !1, aH.removeChild(document.body, aFV)), !0)
	}, this.resize = function() {
		var nI, tk;
		this.af && (aFT = Math.floor(.8 * (ca.cb.cc() ? aA.b1 > aA.b2 ? .6 : .55 : .4) * aA.cd), eZ = Math.floor(.15 * aFT), aFQ = Math.floor(.35 * eZ), aFR = Math.floor(.5 * eZ), aFS = Math.floor(2.5 * aFR), b2 = eZ + aFQ + 3 * aFR, nI = bT.ed
			.ef(1, aFQ / aA.aB), aFU = Math.floor(aA.aB * f6.measureText(aE6, nI)), tk = b1 = (aFT < aFU ? aFU : aFT) + 2 * aFS, b1 = Math.min(b1, aA.b1 - 2 * (ca.cb.cc() ? 2 : 1) * dO.gap), nI = bT.ed.ef(1, b1 / tk * aFQ / aA.aB), aFU = Math
			.floor(aA.aB * f6.measureText(aE6, nI)), aF = Math.floor((aA.b1 - b1) / 2), aG = Math.floor((aA.b2 - b2) / 2), aFV.style.font = nI, aFV.style.top = Math.floor((aG + 1.4 * aFR + eZ) / aA.aB) + "px", aFV.style.left = Math.floor((
				aF + (b1 - aFU) / 2) / aA.aB) + "px")
	}, this.dP = function() {
		this.af && (dQ.fillStyle = dK.fB, dQ.fillRect(aF, aG + eZ, b1, b2 - eZ), dQ.fillStyle = dK.a6W, dQ.fillRect(aF, aG, b1, eZ), dQ.fillStyle = dK.dM, dQ.lineWidth = dO.yf, dQ.strokeStyle = dK.dM, dQ.strokeRect(aF, aG, b1, b2), dQ.fillRect(
			aF, aG + eZ, b1, dO.yf), dQ.font = bT.ed.ef(1, .48 * eZ), bT.ed.textAlign(dQ, 1), bT.ed.textBaseline(dQ, 1), dQ.fillText(L(244), Math.floor(aF + (b1 - .5 * eZ) / 2), Math.floor(aG + .55 * eZ)), aS.a0r(Math.floor(aF + b1 - .8 *
			eZ), Math.floor(aG + .25 * eZ), Math.floor(.5 * eZ)), dQ.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function ve() {
	var aFX;

	function aFk(ni, tW, aF, aG, globalAlpha) {
		dC.kB.save(), dC.kB.globalAlpha = globalAlpha, dC.kB.imageSmoothingEnabled = !1, dC.kB.scale(tW, tW), dC.kB.drawImage(ni, Math.floor(aF * (dC.dD / tW - ni.width)), Math.floor(aG * (dC.dE / tW - ni.height))), dC.kB.restore()
	}
	this.oc = 0, this.od = 0, this.og = 0, this.oh = 0, this.k = function() {
		(aFX = new Array(dC.aFY))[0] = {
			b1: [0, 5e3, 8e3, 1e4],
			au: [220, 250, 255, 220],
			bi: [190, 220, 0, 0],
			gv: [170, 200, 0, 0]
		}, aFX[1] = {
			b1: [0, 4e3, 5e3, 6e3, 1e4],
			au: [25, 0, 100, 0, 25],
			bi: [25, 0, 0, 0, 25],
			gv: [25, 0, 0, 0, 25]
		}, aFX[2] = {
			b1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			au: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			bi: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			gv: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aFX[3] = {
			b1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			au: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			bi: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			gv: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aFX[4] = {
			b1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			au: [10, 10, 20, 10, 10, 170, 212],
			bi: [20, 20, 60, 100, 100, 110, 170],
			gv: [70, 70, 160, 30, 30, 60, 120]
		}, aFX[5] = {
			b1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			au: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			bi: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			gv: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aFX[6] = {
			b1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			au: [10, 10, 60, 255, 255, 200, 200],
			bi: [10, 10, 60, 255, 255, 200, 200],
			gv: [80, 80, 255, 255, 255, 200, 200]
		}, aFX[7] = {
			b1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			au: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			bi: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			gv: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aFX[8] = {
			b1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			au: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			bi: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			gv: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aFX[9] = {
			b1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			au: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			bi: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			gv: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aFX[20] = {
			b1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			au: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			bi: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			gv: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aFX[21] = {
			b1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			au: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			bi: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			gv: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aFZ = function() {
		var aFj, ce, jR, gw, aB0 = function() {
				var aB0;
				return dC.f0 = document.createElement("canvas"), dC.f0.width = dC.dD, dC.f0.height = dC.dE, dC.kB = dC.f0.getContext("2d", {
					alpha: !1
				}), aB0 = dC.kB.getImageData(0, 0, dC.dD, dC.dE), dC.kF = aB0.data, aB0
			}(),
			b1 = aFX[dC.k5].b1,
			au = aFX[dC.k5].au,
			bi = aFX[dC.k5].bi,
			gv = aFX[dC.k5].gv,
			gU = r1.r2(),
			en = b1.length - 2,
			aFe = new Array(1 + en),
			aFf = new Array(1 + en),
			aFg = new Array(1 + en),
			aFh = new Array(1 + en);
		for (jR = en; 0 <= jR; jR--) aFe[jR] = b1[jR + 1] - b1[jR], aFf[jR] = au[jR + 1] - au[jR], aFg[jR] = bi[jR + 1] - bi[jR], aFh[jR] = gv[jR + 1] - gv[jR];
		for (ce = dC.dD * dC.dE - 1; 0 <= ce; ce--)
			for (jR = en; 0 <= jR; jR--)
				if (gU[ce] >= b1[jR]) {
					gw = gU[ce] - b1[jR], dC.kF[4 * ce] = au[jR] + r3(aFf[jR] * gw, aFe[jR]), dC.kF[4 * ce + 1] = bi[jR] + r3(aFg[jR] * gw, aFe[jR]), dC.kF[4 * ce + 2] = gv[jR] + r3(aFh[jR] * gw, aFe[jR]), dC.kF[4 * ce + 3] = 255;
					break
				} dC.kB.putImageData(aB0, 0, 0), dC.aFc(dC.k5) && eJ.eK() && dC.aFc(dC.k5) && (aB0 = eJ.ep("arena"), aFj = eJ.ep("territorial.io"), aFk(aB0, 5, .5, .5, .1), aFk(aFj, 2, .5, .45, .1)), dC.kD = !0, aC.ah = !0
	}, this.i7 = function() {
		for (var fF, aF, aG, aFl, aFm, gx, od = 0, b1 = dC.dD, b2 = dC.dE, gw = b1 * b2 * 4, aFn = kj, aFo = dC.kF, ce = b1 - 1; 0 <= ce; ce--) aFn[(fF = ce << 2) + 2] = aFn[gw - fF - 2] = 3;
		for (gw = 4 * b1, ce = b2 - 1; 0 <= ce; ce--) aFn[(fF = ce * gw) + 2] = aFn[fF + gw - 2] = 3;
		for (aFl = b1 - 1, aFm = b2 - 1, aG = 1; aG < aFm; aG++)
			for (gw = aG * b1, aF = 1; aF < aFl; aF++) gx = 1 - (aFo[(fF = gw + aF << 2) + 2] > aFo[fF + 1] && aFo[fF + 2] > aFo[fF]), aFn[fF + 2] = 6 - 5 * gx, od += gx;
		this.oc = (b1 - 2) * (b2 - 2), this.oh = 0, dC.a8d(dC.k5) && (dC.oh.aFp(), dC.oh.aFq(4, 5)), this.od = aI.hG = od - this.oh, this.og = this.oc - this.od - this.oh, this.og && (dC.oh.aFq(6, 2), dC.oh.aFr())
	}
}

function r3(jR, gv) {
	return 0 <= jR ? gf.gg(jR, gv) : -gf.gg(-jR, gv)
}

function aFs(gU) {
	return gU * gU
}

function nS(jR, gv) {
	return gv < jR ? jR : gv
}

function aFt(jR, gv) {
	return jR < gv ? jR : gv
}

function aDf(jR, gU, gv) {
	return gU < jR ? jR : gv < gU ? gv : gU
}

function aFu(gU, en) {
	for (var ax = gf.gg(gU + 1, 2), ce = 0; ce < en; ce++) ax = gf.gg(ax + gf.gg(gU, ax), 2);
	return ax
}

function aFv(gU, en) {
	return gU < 1 ? 0 : aFu(gU, en)
}

function aFw(na, nc, fH, a0Y, ev, ew, fI, a0Z) {
	return !(na + fH <= ev || nc + a0Y <= ew || ev + fI <= na || ew + a0Z <= nc)
}

function aFx(na, nc, fH, a0Y, ev, ew, fI, a0Z) {
	return na <= ev && nc <= ew && ev + fI <= na + fH && ew + a0Z <= nc + a0Y
}

function k8(gU) {
	return Math.floor(!!gU * (1 + Math.log2(gU + .5)))
}

function vk() {
	var aFy, aFz, xu, aG0;
	this.k = function() {
		var ce, aF, aG, a0U, aG1, b1, b2, fA, aB0, kH, gU, fF, xJ, jR, aG5;
		if (function() {
				if (xu = !0, aG0 = "rgb(" + dC.kF[0] + "," + dC.kF[1] + "," + dC.kF[2] + ")", dC.aG4(dC.k5)) return 1;
				return xu = !1, 0
			}()) aFz = null;
		else {
			for (aFy = gf.gg(96, 4), aG1 = 1 === dC.k5 ? (a0U = 0, 160) : (a0U = 128, 32), aG0 = "rgb(" + a0U + "," + a0U + "," + a0U + ")", aFz = new Array(4), ce = 3; 0 <= ce; ce--) {
				if (aFz[ce] = document.createElement("canvas"), b1 = ce % 2 == 0 ? dC.dD : aFy, b2 = ce % 2 == 0 ? aFy : dC.dE + 2 * aFy, aFz[ce].width = b1, aFz[ce].height = b2, kH = (aB0 = (fA = aFz[ce].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, b1, b2)).data, ce % 2 == 0)
					for (aG = aFy - 1; 0 <= aG; aG--)
						for (gU = aG1 + Math.floor((aG + 1) * (a0U - aG1) / (aFy + 1)), aF = b1 - 1; 0 <= aF; aF--) kH[fF = 4 * ((0 === ce ? aFy - aG - 1 : aG) * b1 + aF)] = gU, kH[fF + 1] = gU, kH[fF + 2] = gU, kH[fF + 3] = 255;
				else {
					for (aF = aFy - 1; 0 <= aF; aF--)
						for (gU = aG1 + Math.floor((aF + 1) * (a0U - aG1) / (aFy + 1)), aG = b2 - 1 - aFy; aFy <= aG; aG--) kH[fF = 4 * (aG * b1 + (3 === ce ? aFy - aF - 1 : aF))] = gU, kH[fF + 1] = gU, kH[fF + 2] = gU, kH[fF + 3] = 255;
					for (jR = 1; 0 <= jR; jR--)
						for (aF = aFy - 1; 0 <= aF; aF--)
							for (aG = aFy - 1; 0 <= aG; aG--) xJ = (Math.pow(aF * aF + aG * aG, .5) + 1) / (aFy + 1), gU = aG1 + Math.floor((1 < xJ ? 1 : xJ) * (a0U - aG1)), kH[fF = 4 * ((0 === jR ? aFy - aG - 1 : aG + jR * (b2 - aFy)) * b1 + (
								1 === ce ? aF : aFy - aF - 1))] = gU, kH[fF + 1] = gU, kH[fF + 2] = gU, kH[fF + 3] = 255
				}
				fA.putImageData(aB0, 0, 0)
			}
			aG5 = aG1, dC.kB.fillStyle = "rgb(" + aG5 + "," + aG5 + "," + aG5 + ")", dC.kB.fillRect(0, 0, dC.dD, 1), dC.kB.fillRect(0, dC.dE - 1, dC.dD, 1), dC.kB.fillRect(0, 0, 1, dC.dE), dC.kB.fillRect(dC.dD - 1, 0, 1, dC.dE)
		}
	}, this.ez = function() {
		var jR = xu ? 0 : -aFy;
		aFx(jR, jR, dC.dD - 2 * jR, dC.dE - 2 * jR, dF.aG6, dF.aG7, dF.aG8, dF.aG9) || (dQ.fillStyle = aG0, dQ.fillRect(0, 0, aA.b1, aA.b2))
	}, this.dP = function() {
		xu || (aFw(0, -aFy, dC.dD, aFy, dF.aG6, dF.aG7, dF.aG8, dF.aG9) && dQ.drawImage(aFz[0], dF.aGA, dF.aGB - aFy), aFw(dC.dD, -aFy, aFy, dC.dE + 2 * aFy, dF.aG6, dF.aG7, dF.aG8, dF.aG9) && dQ.drawImage(aFz[1], dF.aGA + dC.dD, dF.aGB - aFy),
			aFw(0, dC.dE, dC.dD, aFy, dF.aG6, dF.aG7, dF.aG8, dF.aG9) && dQ.drawImage(aFz[2], dF.aGA, dF.aGB + dC.dE), aFw(-aFy, -aFy, aFy, dC.dE + 2 * aFy, dF.aG6, dF.aG7, dF.aG8, dF.aG9) && dQ.drawImage(aFz[3], dF.aGA - aFy, dF.aGB - aFy))
	}
}

function aGC() {
	function aGG(jU) {
		if (0 === jU.length) cs.jD.jX(116, "");
		else {
			for (var aGH = jU[0], ce = 1; ce < jU.length; ce++) aGH += ";" + jU[ce];
			cs.jD.jX(116, aGH)
		}
	}
	this.aGD = function() {
		cs.buffer.data[110].value.length && (cs.buffer.data[106].value = cs.buffer.data[110], cs.jD.jX(110, ""), this.aGE())
	}, this.aGE = function() {
		var jU = cs.buffer.data[116].value.split(";");
		for (jU.length % 2 == 1 && jU.pop(), jU.unshift(cs.buffer.data[106].value), jU.unshift(cs.buffer.data[105].value), ce = 2; ce < jU.length; ce += 2)
			if (jU[ce] === jU[0]) {
				jU.splice(ce, 2);
				break
			} for (var aGF = [], ce = 0; ce < jU.length; ce += 2) aGF.push(jU[ce]);
		aGG(jU), cs.buffer.data[117].value = 0, cs.buffer.data[117].fl = aGF
	}, this.aEi = function(eI) {
		cs.buffer.data[117].fl.splice(eI, 1), cs.buffer.data[117].value = Math.min(eI, cs.buffer.data[117].fl.length - 1);
		var jU = cs.buffer.data[116].value.split(";");
		jU.splice(2 * eI, 2), aGG(jU)
	}, this.aEj = function(eI) {
		var jU = cs.buffer.data[116].value.split(";");
		return {
			cE: jU[2 * eI],
			password: jU[2 * eI + 1]
		}
	}, this.aGI = function() {
		var gU = gf.hI(cs.buffer.data[121].value, -1, 262143);
		return gU = -1 === gU ? ~~(262144 * Math.random()) : gU
	}, this.aGJ = function() {
		for (var jU = document.cookie.split(";"), ce = 0; ce < jU.length; ce++) {
			var aGK, bb = jU[ce].trim();
			0 !== bb.length && (aGK = 0 <= (aGK = bb.indexOf("=")) ? bb.substring(0, aGK) : bb, document.cookie = aGK + "=;expires=0;path=/", document.cookie = aGK + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aGK +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function aGL() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 !== aI.data.iIncomeType && (aI.data.iIncomeData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.iIncomeType && bT.fY.fZ(fN.fa(), aI.data.iIncomeData, 255)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(21), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(173), L(174), L(10)],
			value: aI.data.iIncomeType
		}, function(eI) {
			fU(), 2 !== eI || aI.data.iIncomeData || (aI.data.iIncomeData = new Uint8Array(aI.fo), aI.data.iIncomeData.fill(32)), aI.data.iIncomeType = eI, aH.eF(27)
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi;
		1 === aI.data.iIncomeType && ((fi = new fj).fk("Value"), fi.fp(new eH({
			eI: -1,
			value: aI.data.iIncomeValue
		}, 1, 0, function(a2) {
			var value = gf.hI(Math.floor(a2.target.value), 0, 255);
			a2.target.value = aI.data.iIncomeValue = value
		})), fd.push(fi))
	}(fd), function(fd) {
		var fi;
		2 === aI.data.iIncomeType && ((fi = new fj).fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.iIncomeData, 4)), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function cN() {
	this.a8R = function(player, kz) {
		bT.bU.fz(0) && bT.bU.g2(player) && i9.aGM(kz) && (eN.iX.aGN(0, player, kz), aI.he.jp(player, kz))
	}, this.a8S = function(player, gb, g7) {
		bT.bU.fz(1) && bT.bU.g2(player) && bT.bU.gQ(player, g7) && bT.bU.ga(player, gb, 12, 0) && bT.bU.h5(player, g7) && ((g7 = iN.lR(player, gk.h6[0])) || iN.lS(player)) && (bX.a4m[player]++, eN.iX.aGN(1, player, gb, gk.h6[0]), iA.pO.aGP(
			player, g7)) && (bT.bU.h4(player), h0.iu(player, gb), iA.pO.aGQ(player))
	}, this.gn = function(player, gb, bP) {
		bT.bU.fz(1) && bT.bU.g2(player) && aI.dm && bT.bU.gQ(player, bP) && bT.bU.h9(player, bP) && bT.bU.gm(player, bT.bU.gq(player, gb), bP) && hy.jp(bP, gk.gl[0]) && (eN.iX.aGN(2, player, gb, bP), hO.jl(player, bP))
	}, this.a8T = function(player, gb, mM) {
		gk.wt[1] = 7 & mM;
		var kz = mM >> 3;
		bT.bU.fz(1) && bT.bU.g2(player) && i9.aGM(kz) && f4.wd.we(player) && f4.wd.ya(kz) && bT.bU.ga(player, gb, 32, 0) && f4.x8.a80(player, kz, 1) && (h0.ix(player), eN.iX.aGN(3, player, gb, mM), bT.bU.h4(player), uv.qS.a8T(player), f4.a6.ws(
			player))
	}, this.a8U = function(player, gb, l1) {
		849 === gb ? this.a8W(player, l1) : bT.bU.fz(1) && bT.bU.g2(player) && bT.bU.ga(player, gb, 32, 0) && f4.wq.wr(player, l1) && (h0.ix(player), eN.iX.aGN(4, player, gb, l1), bT.bU.h4(player), uv.qS.a8U(player), f4.a6.ws(player))
	}, this.a8W = function(player, l1) {
		bT.bU.fz(1) && bT.bU.g2(player) && f4.aGR.j1(player, l1) && eN.iX.aGN(4, player, 849, l1)
	}, this.a8X = function(player, g7) {
		513 === g7 ? this.b5(player) : bT.bU.fz(1) && bT.bU.g2(player) && (g7 = Math.min(g7, aI.fo), iN.lR(player, g7)) && (eN.iX.aGN(5, player, g7), iN.aGS(player, g7))
	}, this.a8Y = function(player, bc) {
		(bT.bU.fz(1) || bT.bU.fz(2)) && bT.bU.g2(player) && (bc = gf.hI(bc, 0, 1023), eN.iX.aGN(6, player, bc), cz.oT(player, 0, bc))
	}, this.a8Z = function(player, mR) {
		aT.aGT(player) && (eN.iX.aGN(7, player, mR), aT.aGU(player, mR))
	}, this.a8a = function(player) {
		(bT.bU.fz(0) || bT.bU.fz(1)) && bT.bU.g2(player) && aS.a2G(player) && (eN.iX.aGN(8, player), ur.a8a(player))
	}, this.aGV = function(player) {
		eN.iX.aGN(9, player), ur.aGV(player)
	}, this.b5 = function(player) {
		aT.aGW(player) && (eN.iX.aGN(5, player, 513), aT.b5(player))
	}, this.a8b = function(player, gb, kz, g7) {
		bT.bU.fz(1) && bT.bU.g2(player) && bT.bU.gQ(player, g7) && bT.bU.h5(player, g7) && i9.aGM(kz) && ul.lW.aGX(player, kz) && (iN.lR(player, gk.h6[0]) || iN.lS(player)) && (eN.iX.aGN(10, player, (gb << 10) + gk.h6[0], kz), g7 = bT.bU.h3(
			player, gb), bX.lT[player].push(gk.aGY[0]), iN.jp(player, g7, gk.h6[0]), iK.lU(player, !0), h0.iy(player))
	}
}

function ld() {
	this.j1 = function() {
		var aGe;
		2 === aI.di ? (aa.nC(0, 59), ct.aAa(2700)) : aI.dw < 7 ? (aGe = g8.o5[aI.hk], aGe = g8.o4[aGe], f6.oH(L(245, [aGe]), 2, 1, 12), aa.bW(0, L(246, [aGe]), 40, 0, dK.dM, dK.fB, -1, !1), ct.aAa(2700)) : 8 === aI.dw ? (aI.hi ? aa.nC(aI.hj, 2) :
			aa.nC(1 - aI.bS, 3), aI.hf.aGd(aI.hj), ct.nZ(aI.hj, 2700, !1, 0)) : 9 === aI.dw ? (aa.oG(), ct.aAa(2700)) : (aa.nx(aI.hj), ct.nZ(aI.hj, 2700, !1, 0))
	}, this.aGg = function() {
		var bb;
		aI.bG || aI.df || (bb = a5.a6.zt(), aI.dw < 7 ? bb += "/log/team" : 8 === aI.dw ? bb += "/log/1v1" : 9 === aI.dw ? bb += "/log/zombies" : bb += "/log/br", aa.bW(720, bb, 736, 0, dK.dM, dK.a5y, -1, !1))
	}
}

function vc() {
	var aGh;
	this.uY = null, this.uX = 0, this.k = function() {
		aGh = [], 9 === aI.dw && this.aGi()
	}, this.aGi = function() {
		this.uY = [0, 0, 0, 0, 0, 0];
		for (var aGj = [256, 227, 166, 148, 100, this.uX = 0, 0, 0], aEq = [0, 8, 24, 30, 46, 70, 256, 333], aGk = [0, 0, 3, 9, 17, 25, 256, 179], b2 = aI.gN, ce = 1; ce < aGj.length; ce++)
			if (b2 <= aEq[ce]) {
				this.uX = aGj[ce - 1] - gf.gg((b2 - aEq[ce - 1]) * (aGj[ce - 1] - aGj[ce]), aEq[ce] - aEq[ce - 1]), this.uY[5] = aGk[ce - 1] - gf.gg((b2 - aEq[ce - 1]) * (aGk[ce - 1] - aGk[ce]), aEq[ce] - aEq[ce - 1]), this.uY[0] = aI.fo - b2 -
					this.uX - this.uY[5];
				break
			} aI.hX = aI.fo - aI.gN, aI.data.numberTeams = (0 < aI.gN) + (0 < aI.hX), aI.data.playerCount = aI.hZ = aI.gN + aI.hX, aI.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aI.gN + this.uX, aI.hX - this.uX]), aI.eQ.ht()
	}, this.aGl = function(player) {
		aGh.push({
			player: player,
			lu: 14 + hw.pL(20)
		})
	}, this.j1 = function() {
		if (9 === aI.dw)
			for (var ce = aGh.length - 1; 0 <= ce; ce--) --aGh[ce].lu <= 0 && (cz.oT(aGh[ce].player, 0, nl.sp.aFJ + nl.sp.aFL), aGh.splice(ce))
	}
}

function wE() {
	this.aGA = 0, this.aGB = 0, this.aG6 = 0, this.aG7 = 0, this.aG8 = 0, this.aG9 = 0, this.a7h = [0, 0, 0, 0], this.dG = function() {
		this.aGA = aY.ck(), this.aGB = aY.cl(), this.aG6 = -this.aGA, this.aG7 = -this.aGB, this.aG8 = aA.b1 / cS, this.aG9 = aA.b2 / cS, this.a7h[0] = Math.floor(this.aG6), this.a7h[1] = Math.floor(this.aG7), this.a7h[2] = Math.floor(this.a7h[
			0] + this.aG8 + 1), this.a7h[3] = Math.floor(this.a7h[1] + this.aG9 + 1), i8.a8P = !0
	}
}

function aGn() {
	var aGo, aGp, aGs, aGv, aGw, aGq = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aGr = new Array(4),
		aGt = new Array(2),
		aGu = [L(91), L(247), L(248), L(249)];

	function aH2() {
		var aH6;
		!b7.b8 || (aH6 = aGo.aH7.e3.a2.value.trim().slice(0, 127)).length < 1 || (aGo.aH7.e3.a2.value = "", b7.yU.de(aH6))
	}

	function aH0(aH9) {
		b7.a6.ps[3] = 1 - b7.a6.ps[3], aH4(3, 1, b7.a6.ps[3]), aH9 && a5.a3X.aHA(4), b7.a6.ps[3] && cs.jD.jX(158, b7.a6.ps[0])
	}

	function aGy(jR, gv) {
		b7.a6.ps[jR] !== gv && (0 === jR && b7.a6.ps[3] && aH0(0), aH4(jR, b7.a6.ps[jR], 0), aH4(jR, gv, 1), b7.a6.ps[jR] = gv, 0 === jR ? (a5.a3X.aHA(2, gv), b7.a6.ps[2] ? (aGo.aHC.j6(), aGo.aH7.reset(1)) : aGo.aH7.reset(0), aH.bh().q4(), aH.bh()
			.q3()) : 2 === jR && (0 === gv ? (a5.a3X.aHA(0), aGo.aH7.j6(), aGo.aHD()) : (a5.a3X.aHA(1), aGo.aHC.j6(), aGo.aHE())))
	}

	function aH4(jR, gv, color) {
		aGo.aHF[jR].a0O[gv].eU(color ? dK.a5z : dK.a6b)
	}

	function aHH(k5) {
		return dC.k3.aHP[k5]
	}

	function aHI(yl) {
		return yl < 7 ? "   " + (yl + 2) + " Teams" : 10 === yl ? "   No Full-Sending" : ""
	}

	function aHJ(q8, aHU) {
		return aHU ? q8 <= 90 && 60 < q8 ? "   Contest" : "" : q8 <= 60 ? "   Contest" : ""
	}
	this.aH8 = function() {
		return aGo.aH7
	}, this.yU = function(cE) {
		aGy(2, 0);
		var bb = aGo.aH7.e3.a2.value,
			cE = "@" + cE + " ";
		bb.length && !bT.bZ.a41(bb, " ") && (cE = " " + cE), aGo.aH7.e3.a2.value = bb += cE, aGo.aH7.e3.a2.focus()
	}, this.q2 = function() {
		aGo.aHC.j6()
	}, this.q4 = function() {
		var aHG = b7.a6.ps[0],
			aHG = b7.a6.pr[aHG],
			gv = (dC.iE(aHG.k5, aHG.mapSeed), aGp.a0O),
			oZ = aHH(aHG.k5, aHG.mapSeed) + aHI(aHG.yl) + aHJ(aHG.q8),
			aHG = L(253) + "   " + aHH(aHG.ym, aHG.yn) + aHI(aHG.yo) + aHJ(aHG.q8, 1);
		gv[0].button.textContent === oZ && gv[1].button.textContent === aHG || (gv[0].button.textContent = oZ, gv[1].button.textContent = aHG, aGp.resize())
	}, this.q3 = function() {
		var aHG = b7.a6.ps[0],
			q5 = b7.a6.pr[aHG];
		aGo.aHK(q5.q6);
		for (var gU, mh, ce = 0; ce < b7.cC.a5N.length; ce++) aGq[0][ce].qj.textContent = b7.cC.a5N[ce].length, aGq[1][ce].qj.textContent = (gU = b7.a6.pr[ce].q8, mh = void 0, ((mh = gf.gg(gU, 60)) < 10 ? "0" : "") + mh + ":" + ((gU %= 60) < 10 ?
			"0" : "") + gU);
		var q5 = b7.cC.a5N[aHG],
			aHM = q5.length,
			aHN = b7.cC.yq[aHG];
		aGq[2][1].qj.textContent = "" + aHM, aGq[3][1].qj.textContent = "" + aHN;
		for (ce = 0; ce < 4; ce++) {
			var aHO = b7.a6.pr[ce];
			aGr[ce] ? 0 === aHO.q6 && (aGr[ce].qj.textContent = dC.k3.aHP[aHO.k5]) : aGr[ce] = new aH3(dC.k3.aHP[aHO.k5], aGv.a0O[ce].button, 1, 1), bT.bZ.startsWith(aGu[ce], "🏆 ") ? aHO.yp || (aGu[ce] = aGu[ce].substring(3), aGv.a0O[ce].button
				.textContent = aGu[ce], aGv.a0O[ce].button.appendChild(aGq[1][ce].qj), aGv.a0O[ce].button.appendChild(aGq[0][ce].qj), aGv.a0O[ce].button.appendChild(aGr[ce].qj)) : aHO.yp && (aGu[ce] = "🏆 " + aGu[ce], aGv.a0O[ce].button
				.textContent = aGu[ce], aGv.a0O[ce].button.appendChild(aGq[1][ce].qj), aGv.a0O[ce].button.appendChild(aGq[0][ce].qj), aGv.a0O[ce].button.appendChild(aGr[ce].qj))
		}
		var aHQ = "",
			aHR = "";
		0 === aHG && (aHQ = b7.c3.aHS(q5, 0, aHM), aHR = b7.c3.aHS(q5, 0, aHN)), aGs[0].qj.textContent = aHQ, aGs[1].qj.textContent = aHR, aGt[1].qj.textContent = "MP: " + b7.a6.pu[0] + "   SP: " + b7.a6.pu[1] + "   Lobby: " + bT.fY.aHT(b7.cC
			.a5N)
	}, this.qB = function() {
		aGo.aH7.j6()
	}, this.show = function() {
		b7.a6.pt++, aGo.show(), this.resize(), b7.message.show()
	}, this.c1 = function() {
		aGo.c1(), b7.b9.c1(), b7.c0.c1(), b7.message.c1()
	}, this.resize = function() {
		aGo.resize(1 - b7.a6.ps[2]), b7.message.resize()
	}, this.b6 = function(ax) {
		2 === ax ? b7.a6.ps[3] ? aH0(1) : aGo.aHF[3].a0O[0].fx() : ax < 2 && aH0(1)
	}, aGv = new aGx([new e9(aGu[0], function() {
		return aGy(0, 0), 2
	}), new e9(aGu[1], function() {
		return aGy(0, 1), 2
	}), new e9(aGu[2], function() {
		return aGy(0, 2), 2
	}), new e9(aGu[3], function() {
		return aGy(0, 3), 2
	})], dK.a6b), aGp = new aGx([new e9("", 0, 2), new e9("", 0, 2)], dK.a6c, 1);
	var aGz = new aGx([new e9(L(250), function() {
		return aGy(2, 0), 2
	}), new e9(L(186), function() {
		return aGy(2, 1), 2
	})], dK.a6b);
	aGw = new aGx([new e9(L(251, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			aH.jC(), b7.lk(), a5.a6.a07(3240), __fx.customLobby.setActive(false), aH.eF(5, 5)
		}),
		function() {
			aH.jC(), b7.lk(), a5.a6.a07(3240), __fx.customLobby.setActive(false), aH.eF(5, 5)
		})), new e9(L(252), function() {
		return aH0(1), 2
	})], dK.a6b), aGo = new aH1(aGv, aGp, aGz, aGw, aH2, b7.b9.yB);
	for (var ce = 0; ce < 4; ce++) aGq[0][ce] = new aH3("0", aGv.a0O[ce].button), aGq[1][ce] = new aH3("0", aGv.a0O[ce].button, 1);
	aGq[2][1] = new aH3("0", aGz.a0O[1].button), aGq[3][1] = new aH3("0", aGw.a0O[1].button), (aGs = [new aH3("", aGz.a0O[1].button, 1, 1), new aH3("", aGw.a0O[1].button, 1, 1)])[0].qj.style.bottom = "0em", aGs[1].qj.style.bottom = "0em", aH4(0, b7
		.a6.ps[0], 1), aH4(2, b7.a6.ps[2], 1), (aGt = [new aH3(L(160), aGo.aH5(), 1, 0), new aH3("", aGo.aH5(), 1, 1)])[0].qj.style.fontSize = "0.4em", aGt[1].qj.style.fontSize = "0.4em"
}

function aCn() {
	var aHV, aHW = [],
		aHX = -1,
		aHY = 0,
		aHZ = 0;

	function aHi() {
		aHY = aC.aD, (3 === this.aHj ? aHh : (aHX = (aHW.length + aHX + 2 * this.aHj - 1) % aHW.length, aHg))()
	}

	function aHg() {
		0 !== aHW.length && (aHZ = 0, aHV && aHV.lk(), (aHV = new aHk(aHi)).jX(aHX, aHW.length), aHV.show(aHW[aHX]), b7.message.resize())
	}

	function aHh() {
		aHZ = 1, aHV && aHV.lk(), (aHV = new aHl(aHg)).jX(aHW.length), aHV.show(), b7.message.resize()
	}
	this.zC = function(aHa) {
		var bx;
		2 === aHa.id && 3 === aHa.zA ? b7.c3.aHb(aHa.cE) : (bx = b7.c3.aHc(aHa, b7.c3.aHd(aHa)), (5 !== aHa.id && 6 !== aHa.id || (aH.bj(29).aH8().aHe(bx), 5 === aHa.id)) && (bx = aC.aD < aHY + 2e4, aHX !== aHW.length - 1 && bx || (aHX = aHW
			.length), __fx.pingFilter.isMuted(aHa, "mj") || (aHW.push(aHa), cs.buffer.data[14].value || 7 === aHa.id || rr.play(), aHV && (aHZ && (cs.buffer.data[13].value || bx) ? aHV.jX(aHW.length) : aHg()))))
	}, this.show = function() {
		aHh()
	}, this.c1 = function() {
		aHX = aHW.length - 1, aHV && aHV.lk(), aHV = null
	}, this.resize = function() {
		aHV && aHV.resize()
	}, this.aHm = function() {
		return aHW
	}
}

function vE() {
	var aHn, aHo, aHp;
	aHn = [32, 65, 191, 913, 931], aHo = [64, 127, 688, 930, 1155], aHp = new Array(aHn.length + 1);
	for (var ce = 0; ce < aHp.length; ce++) {
		aHp[ce] = 0;
		for (var jR = ce - 1; 0 <= jR; jR--) aHp[ce] += aHo[jR] - aHn[jR]
	}

	function aHv(ax) {
		for (var ce = aHn.length - 1; 0 <= ce; ce--)
			if (ax >= aHn[ce] && ax < aHo[ce]) return ce;
		return -1
	}
	this.ts = function(bb) {
		return 0 !== (bb = bb.trim()).indexOf("Bot ") && 0 !== bb.indexOf("[Bot] ") && function(bb, aHs, aHt) {
			var en = (bb = bb.trim()).length;
			if (en < aHs || aHt < en) return !1;
			for (var ax, aHu = 0, ce = 0; ce < en; ce++)
				if (ax = bb.charCodeAt(ce), aHu += 65 <= ax && ax <= 90 || 1040 <= ax && ax <= 1071 ? 1 : 0, -1 === aHv(ax)) return !1;
			if (3 < aHu && aHu > Math.floor(en / 2)) return !1;
			return !0
		}(bb, 3, 20)
	}, this.ia = function(bb) {
		for (var en = (bb = bb.trim()).length, jU = [], ce = 0; ce < en; ce++) {
			var ax, fF = aHv(ax = bb.charCodeAt(ce));
			jU.push(aHp[fF] + ax - aHn[fF])
		}
		return jU
	}, this.eP = function(jU) {
		for (var ax, gv, bb = "", en = jU.length, ce = 0; ce < en; ce++)
			for (gv = 1; gv < aHp.length; gv++)
				if (jU[ce] < aHp[gv]) {
					ax = aHn[gv - 1] + jU[ce] - aHp[gv - 1], bb += String.fromCharCode(ax);
					break
				} return bb
	}, this.aHw = function(bb) {
		for (var jU = this.ia(bb), result = "", ce = 0; ce < jU.length; ce++) result = (result += jU[ce] < 10 ? "00" : jU[ce] < 100 ? "0" : "") + jU[ce].toString(10);
		return result
	}, this.aHx = function(bb) {
		for (var jU = new Array(Math.floor(bb.length / 3)), ce = 0; ce < bb.length; ce += 3) jU[Math.floor(ce / 3)] = parseInt(bb.substring(ce, ce + 3));
		return this.eP(jU)
	}, this.aHy = function(bb) {
		for (var gU, jU = [bb.length], ce = 0; ce < bb.length; ce++) jU[ce] = bb.charCodeAt(ce) - 48;
		var result = "";
		for (ce = 0; ce < bb.length; ce++) ce === bb.length - 1 || 51 < 10 * jU[ce] + jU[ce + 1] ? result += jU[ce].toString() : (gU = 10 * jU[ce] + jU[ce + 1], result += String.fromCharCode(gU + (gU < 26 ? 65 : 71)), ce++);
		return result
	}, this.aHz = function(bb) {
		for (var ax, result = "", ce = 0; ce < bb.length; ce++) 48 <= (ax = bb.charCodeAt(ce)) && ax < 58 ? result += String.fromCharCode(ax) : 65 <= ax && ax < 75 ? result += "0" + (ax - 65).toString() : 75 <= ax && ax < 91 ? result += (ax - 65)
			.toString() : 97 <= ax && ax < 123 && (result += (ax - 71).toString());
		return result
	}, this.aI0 = function(bb) {
		for (var en = bb.length, jU = [], ce = 0; ce < en; ce++)(ax = bb.charCodeAt(ce)) < 58 ? jU.push(bb[ce]) : (ax -= ax < 91 ? 65 : 71, jU.push(String(gf.gg(ax, 10))), jU.push(String(ax - 10 * gf.gg(ax, 10))));
		var en = jU.length - 2,
			ax = 0,
			mo = [];
		for (ce = 0; ce < en; ce += 3) mo[ax++] = parseInt(jU[ce] + jU[ce + 1] + jU[ce + 2]);
		return mo
	}, this.aI1 = function() {
		for (var au, aI2 = "", ce = 0; ce < 6; ce++) au = 48 + hw.random() % 36, au += 58 <= au ? 39 : 0, aI2 += String.fromCharCode(au);
		return aI2
	}
}

function vX() {
	var aI3 = new Uint16Array(aI.fo),
		aI4 = 0;

	function aI9(mY, aI7) {
		var ax = aC.j7();
		return 3213 <= ax ? 4 + gf.gg(100 * aI7, hO.pD(mY)) : (mY = 1 + gf.gg(aI.hG, 300), ax < 357 ? 2 + gf.gg(100 * aI7, mY) : ax < 714 ? 2 + gf.gg(100 * aI7, 4 * mY) : ax < 1071 ? 2 + gf.gg(100 * aI7, 10 * mY) : ax < 2142 ? 2 + gf.gg(100 * aI7,
			30 * mY) : 2 + gf.gg(100 * aI7, 100 * mY))
	}

	function aI8(mY) {
		return aI.df || 4284 <= aC.j7() || bT.bU.bV(mY)
	}
	this.k = function() {
		aI3.fill(0), aI4 = 15
	}, this.aI5 = function(bP) {
		var player = aI.bS;
		return !!bT.bU.h9(player, bP) && !(!bT.bU.gm(player, bT.bU.gq(player, aZ.a52()), bP) || (player = bP, bP = gk.gl[0], !aI8(player) && aI3[player] + aI9(player, bP) > aI4))
	}, this.jp = function(mY, aI7) {
		if (!aI8(mY)) {
			aI7 = aI9(mY, aI7);
			if (aI3[mY] + aI7 > aI4) return !1;
			aI3[mY] += aI7
		}
		return !0
	}, this.j1 = function() {
		aC.j7() % 100 == 99 && (aC.j7() < 1071 ? aI4 += 4 : aC.j7() < 2142 ? aI4 += 6 : aC.j7() < 3213 ? aI4 += 8 : aI4 += 10)
	}
}

function aIA() {
	function aIB(u1, sv, sy) {
		for (var tl = Math.min(sv, sy), cu = Math.max(sv, sy), aG = tl + 1; aG < cu; aG++)
			if (!i4.xu(i9.aEW(u1, aG))) return;
		return 1
	}

	function aIC(u2, st, sx) {
		for (var tl = Math.min(st, sx), cu = Math.max(st, sx), aF = tl + 1; aF < cu; aF++)
			if (!i4.xu(i9.aEW(aF, u2))) return;
		return 1
	}

	function aID(st, sv, sx, sy, a87, a7y) {
		for (var en = Math.min(Math.abs(sx - st), Math.abs(sy - sv)), cx = Math.sign(sx - st), cy = Math.sign(sy - sv), ce = 0; ce < en; ce++)
			if (!i4.xu(i9.aEW(st += cx, sv += cy))) return null;
		return st === sx ? aIB(st, sv, sy) ? new Uint32Array([a87, i9.u5(st, sv), a7y]) : null : aIC(sv, st, sx) ? new Uint32Array([a87, i9.u5(st, sv), a7y]) : null
	}
	this.a80 = function(a87, a7y) {
		a87 = function(a87, a7y) {
			var st = i9.nb(a87),
				sv = i9.nd(a87),
				sx = i9.nb(a7y),
				sy = i9.nd(a7y);
			if (st === sx) {
				if (aIB(st, sv, sy)) return new Uint32Array([a87, a7y])
			} else {
				if (sv !== sy) return aID(st, sv, sx, sy, a87, a7y) || aID(sx, sy, st, sv, a87, a7y);
				if (aIC(sv, st, sx)) return new Uint32Array([a87, a7y])
			}
			return null
		}(a87, a7y);
		return null === a87 ? -1 : f4.a84.a8A(a87)
	}
}

function aIE() {
	this.jX = function(eI, value) {
		2 !== cs.buffer.data[eI].type && (value = Math.floor(value)), cs.buffer.data[eI].value !== value && (cs.buffer.aAC(eI, value), 0 === eI ? (aH.jC(), jG.k(), aH.eF(2)) : 1 === eI ? aA.wa(1) : 2 === eI ? aA.wa(0) : 5 === eI && (bT.ed.aAt(),
			aA.wa(0)))
	}, this.jE = function() {
		for (var data = cs.buffer.data, ce = 0; ce < 100; ce++) data[ce] && cs.buffer.aAC(ce, data[ce].rR);
		bT.ed.aAt(), aA.wa(1)
	}, this.aA5 = function() {
		for (var data = cs.buffer.data, ce = 0; ce < data.length; ce++) data[ce] && cs.buffer.jX(ce, data[ce].rR)
	}, this.aIF = function() {
		for (var gv = cs.buffer, ce = 128; ce < 135; ce++) gv.aAC(ce, gv.data[ce].rR)
	}, this.aIG = function(data) {
		cs.jD.jX(109, data.yK), cs.jD.jX(107, data.aIH), cs.jD.jX(108, data.aII), cs.jD.jX(112, data.aIJ), cs.jD.jX(111, data.aIK), cs.jD.jX(113, data.bu), cs.jD.jX(135, data.aIL), cs.jD.jX(136, data.aIM), cs.jD.jX(137, data.aIN), cs.jD.jX(138,
			data.aIO), cs.jD.jX(139, data.aIP), cs.jD.jX(141, data.aIQ), cs.jD.jX(142, data.aIR), cs.jD.jX(143, data.aIS), cs.jD.jX(144, data.aIT)
	}
}

function rX() {
	this.a4Y = null, this.a4Z = null, this.a4a = null, this.a4b = null, this.a4c = null, this.a4d = null, this.iY = "";
	var aIU = 0;
	this.k = function() {
		this.a4Y = [], this.a4Z = [], this.a4a = [], this.a4b = [], this.a4c = [0], this.a4d = [0], aIU = 0, this.iY = ""
	}, this.aGN = function(id, gw, gx, gz) {
		aI.bG || 2 === aI.aJ || (0 === this.a4c[aIU] && (this.a4d[aIU] ? (this.a4c.push(1), this.a4d.push(0), aIU++) : this.a4c[aIU] = 1), this.a4Y.push(id), this.a4Z.push(gw), this.a4a.push(void 0 === gx ? 0 : gx), this.a4b.push(void 0 === gz ?
			0 : gz), this.a4d[aIU]++)
	}, this.j1 = function() {
		0 === this.a4c[aIU] ? this.a4d[aIU]++ : (this.a4c.push(0), this.a4d.push(0), aIU++)
	}
}

function vJ() {
	var mz, uI, a4q, aIV, b2, nI, fontSize, aIW, aIX, a0f, aIY, canvas, fA, a4r, aIZ;

	function fa(ce) {
		return L(0 === ce ? 254 : 1 === ce ? 255 : 2 === ce ? 256 : 257)
	}

	function aIg() {
		aI.dm ? a9C + 4 * dO.gap + b2 + f5.a8v() > aZ.aG ? dQ.drawImage(canvas, 2 * dO.gap + f5.a8v(), a9C + 2 * dO.gap) : dQ.drawImage(canvas, dO.gap, a9C + 3 * dO.gap + f5.a8v()) : dQ.drawImage(canvas, dO.gap, a9C + 2 * dO.gap)
	}

	function aIa() {
		canvas.width = mz[0].width + a0f, canvas.height = b2 + a0f, (fA = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, mz[0].width + a0f, b2 + a0f), fA.translate(Math.floor(a0f / 2), Math.floor(a0f / 2)), fA.lineWidth = a0f, fA.fillStyle = 1 === mz[0].aIf ? dK.a5m : dK.fB, aIh(), fA.fill(), fA.strokeStyle = 1 === mz[0].aIf ? dK.oK : dK
			.dM, aIh(), fA.stroke(), bT.ed.textAlign(fA, 1), bT.ed.textBaseline(fA, 1), fA.fillStyle = 1 === mz[0].aIf ? dK.oK : dK.dM, fA.font = nI[0], fA.fillText(fa(mz[0].aIe), Math.floor(mz[0].width / 2), Math.floor(.72 * aIW[0] * b2)), fA.font =
			nI[1], fA.fillText(mz[0].bb, Math.floor(mz[0].width / 2), Math.floor((aIW[0] + .48 * aIW[1]) * b2))
	}

	function aIh() {
		fA.beginPath(), fA.moveTo(aIY, 0), fA.lineTo(mz[0].width - aIY, 0), fA.lineTo(mz[0].width, aIY), fA.lineTo(mz[0].width, b2 - aIY), fA.lineTo(mz[0].width - aIY, b2), fA.lineTo(aIY, b2), fA.lineTo(0, b2 - aIY), fA.lineTo(0, aIY), fA.closePath()
	}
	this.k = function() {
		uI = 4, a4q = aIV = a4r = 0, mz = [], nI = new Array(2), fontSize = new Array(2), (aIW = new Array(2))[0] = .3, aIW[1] = .7, aIX = new Array(4), canvas = document.createElement("canvas"), aIZ = aC.aD + 2e3, this.resize()
	}, this.resize = function() {
		var ce, b1;
		for (b2 = Math.floor((ca.cb.cc() ? .062 : .047) * aA.cd), fontSize[0] = Math.floor(.85 * aIW[0] * b2), fontSize[1] = Math.floor(.85 * aIW[1] * b2), nI[0] = bT.ed.ef(1, fontSize[0]), nI[1] = bT.ed.ef(1, fontSize[1]), ce = aIX.length -
			1; 0 <= ce; ce--) aIX[ce] = this.measureText(fa(ce) + "000", nI[0]);
		if (a0f = Math.floor(1 + .05 * b2), aIY = Math.floor(.2 * b2), 0 < mz.length) {
			for (ce = mz.length - 1; 0 <= ce; ce--) b1 = this.measureText(mz[ce].bb + "00", nI[1]), mz[ce].width = b1 < aIX[ce] ? aIX[ce] : b1;
			aIa()
		}
	}, this.j1 = function() {
		0 !== uI && (4 === uI ? aC.aD > aIZ && (uI = 0, 1 === aI.aJ) && f6.oH(dC.k3.k4[dC.k5].name, 3, 1, 9) : (1 === uI ? (0 === a4q && (aIa(), a4q = 1e-4), 1 <= (a4q += .002 * (aC.aD - a4r)) && (aIV = 0, uI = 2, a4q = 1), aC.ah = !0) : 2 ===
			uI ? ((aIV += (aC.aD - a4r) / 1e3) > mz[0].nA || 1 < aIV && 1 < mz.length) && (uI = 3) : 3 === uI && ((a4q -= .002 * (aC.aD - a4r)) <= 0 && (a4q = 0, mz.shift(), uI = 0 < mz.length ? 1 : 0), aC.ah = !0), a4r = aC.aD))
	}, this.measureText = function(bb, nI) {
		return dQ.font = nI, Math.floor(dQ.measureText(bb).width)
	}, this.jp = function(aId, ce) {
		this.oH(bX.bY[aId], ce, 1, 0 === ce ? 3 : 7)
	}, this.oH = function(bb, aIe, aIf, nA) {
		var b1;
		bb.length && (b1 = (b1 = this.measureText(bb + "00", nI[1])) < aIX[aIe] ? aIX[aIe] : b1, mz.push({
			bb: bb,
			width: b1,
			aIe: aIe,
			aIf: aIf,
			nA: nA
		}), 0 === uI) && (a4q = 0, uI = 1, a4r = aC.aD)
	}, this.dP = function() {
		0 !== uI && 0 !== a4q && (a4q < 1 ? (dQ.globalAlpha = a4q, aIg(), dQ.globalAlpha = 1) : aIg())
	}
}

function qT() {
	this.a8T = function(player) {
		bT.bU.g5(player) && aa.bW(80, L(258), 637, 0, dK.a6G, dK.fB, -1, !1)
	}, this.a8U = function(player) {
		bT.bU.g5(player) && aa.bW(80, L(259), 637, 0, dK.a6G, dK.fB, -1, !1)
	}
}

function a6e() {
	this.L84 = ["Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "Spawning", "Back", "Options", "Random", "Clustered", "Customized", "Manual Spawn", "Avg. Attack Strength", "Land Attacks", "Ships launched",
		"Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses",
		"Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct",
		"Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "Incoming Boat!", "Incoming Ship!", "Upcoming Team Contest!",
		"Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send",
		"Send gold only to trusted accounts!", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "🔑 Show Account", "🚩 Report Abuse",
		"💬 Mention", "Admin Election", "Blockchain", "Clan Leader Election", "📜 Logs", "Adjust", "Colors", "Player Count", "My Color", "Territory", "Income", "Growth", "Numbers", "Statistics", "Quit Game", "More", "Contest", "Replay Error",
		"Warning", "Loading...", "Default", "Uniform", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Players",
		"Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Richest Players", "Patreon Members", "Zombie Players", "Index",
		"Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed",
		"🛠️ List Options", "Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required",
		"A game reload is required to apply the new configuration.", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "You are leaving Territorial.io!", "Team {0}", "Team {0} won the game!", "Battle Royale",
		"1v1", "Zombie", "Chat", "Close {button}", "Ready", "Next Game", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Ship launched!", "Ship intercepted!", "📜 Game Log", "second played", "seconds played",
		"{0} defeated {1}!", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar",
		"Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Account Name", "Copy", "Search", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User",
		"Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "⚔️ Play", "Settings", "Game Mode", "Mixed", "Team dependent", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Humans",
		"Bots", "Spectators", "Threshold", "Time", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Clan Chart", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp",
		"White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles",
		"🔑 My Account", "🏆 Leaderboards", "📈 Clan Charts", "▶️ Replay", "📰 Propaganda", "⚔️ Join Lobby 2", "Account Recovery", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Request Email", "LEADERBOARD", "You are leaving Territorial.io.",
		"{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe", "More Options", "Y-Axis Compression",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Loading", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player",
		"Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Activated", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "🔲 Select All", "📋 Copy", "🗑️ Clear",
		"▶️ Launch", "Insert the replay data here!", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "You earned {10} gold!", "{0} earned {11} gold!", "You earned a participation reward of {10} gold.",
		"The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!",
		"You earned an additional {10} gold because you played for {1}.", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "Propaganda", "Report Abuse", "Type your message here...", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch", "Clans", "Clan Members",
		"Admins", "1v1 Players", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!"
	]
}

function zO() {
	var eI = 0,
		aD = aC.aD;
	this.qD = 0, this.j1 = function() {
		aA.j1(), aI.g1 ? jj() : 0 === eI ? aC.aD >= aD && (aD += aC.qL * Math.floor(1 + (aC.aD - aD) / aC.qL), 2 === aI.aJ || aS.bE ? jY() : (ja(), i8.render()), eI++) : ((aS.bE ? jj : (aC.ah = !0, ji))(), eI = 0), jf(), aC.ah && (aC.ah = !1,
		ex())
	}
}

function eH(a7p, type, aIi, aIj) {
	var a2;
	this.a2 = document.createElement("input"), (a2 = this.a2).type = type ? "number" : "text", a2.id = "input" + aH.a6.rC++, a2.value = a7p.value, a2.style.width = "100%", a2.style.userSelect = "none", a2.style.outline = "none", a2.style.resize =
		"none", a2.style.border = "inherit", a2.style.font = "inherit", a2.style.color = dK.dM, a2.style.backgroundColor = dK.dL, a2.style.fontSize = "1em", a2.style.padding = "0.1em 0.2em", a2.addEventListener("focus", function() {
			aA.av++
		}), a2.addEventListener("blur", function() {
			aA.av--, -1 !== a7p.eI && cs.jD.jX(a7p.eI, a2.value)
		}), a2.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a7p.eI && cs.jD.jX(a7p.eI, a2.value), aIi ? aIi() : a2.blur())
		}), aIj && a2.addEventListener("input", function(bx) {
			aIj(bx)
		})
}

function aIk() {
	var fL, aIl = !0;

	function aIp(aIo, bd) {
		var r6 = document.createElement("div"),
			aIq = document.createElement("span"),
			aIr = document.createElement("span");
		aIq.textContent = be.a16(bd.aD) + ":", aIq.style.color = dK.a5t, aIq.style.paddingRight = "0.4em", aIq.style.display = "table-cell", aIq.style.width = "6ch", aIq.style.textAlign = "end", r6.appendChild(aIq), aIr.textContent = bd.bb, r6
			.appendChild(aIr), r6.style.display = "table", bd.bc && function(r6, bc) {
				{
					var m5;
					bc >= 1024 - nl.sp.tS ? ((m5 = document.createElement("img")).src = nl.kH.tR[bc - 1024 + nl.sp.tS].toDataURL(), m5.style.width = "1.5em", m5.style.height = "1.5em", m5.style.verticalAlign = "middle", r6.appendChild(m5)) : ((m5 =
						document.createElement("span")).textContent = nl.sp.tT(bc), m5.style.display = "inline-block", m5.style.fontSize = "1.5em", m5.style.lineHeight = "1em", m5.style.verticalAlign = "middle", r6.appendChild(m5))
				}
			}(r6, bd.bc), aIo.appendChild(r6)
	}

	function aIn() {
		aIl && (fL.fS.scrollTop = fL.fS.scrollHeight)
	}
	this.clear = function() {
		fL.fS.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var mz = hr.bk(), en = mz.length, aIo = document.createDocumentFragment(), ce = 0; ce < en; ce++) aIp(aIo, mz[ce]);
		fL.fS.appendChild(aIo), aIn(), fL.show(), this.resize(), aIl = !0, aIn()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fL.fS.style.padding = "0.4em " + bT.ed.a23(dO.yh)
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, this.bW = function(bd) {
		var aIo = document.createDocumentFragment();
		aIp(aIo, bd), fL.fS.appendChild(aIo), aIn()
	}, (fL = new fP(L(260), [new e9("⬅️ " + L(6), function() {
		aH.aBP(1)
	})])).fS.style.overflowY = "auto", fL.fS.addEventListener("scroll", function() {
		aIl = fL.fS.scrollTop >= fL.fS.scrollHeight - fL.fS.clientHeight - 2
	})
}

function vL() {
	var jU, y2, aEK, aIt, gap, aIu, aIv, aIw, aIx, aIy, nI, aCl, i, a12, a4z, xc, aIz;

	function aJ3() {
		aIt = Math.floor(.2 * (ca.cb.cc() ? .07 : .035) * aA.cd), aIt = nS(ca.cb.cc() ? 3 : 1, aIt);
		var aJ5 = aA.b1 / (jU.length + gap);
		aIt = aIt < aJ5 ? aJ5 : aIt, a4z = Math.floor((1 - gap) * aIt), y2 = 0, aJ6()
	}

	function aJ6() {
		y2 = (y2 = y2 < -20 ? -20 : y2) > (jU.length - 15) * aIt ? (jU.length - 15) * aIt : y2, aIv = Math.floor(y2 / aIt), aIw = (aIw = aIv + Math.floor(aA.b1 / aIt)) > jU.length - 1 ? jU.length - 1 : aIw, aIv = (aIv = aIw < aIv ? aIw : aIv) < 0 ?
			0 : aIv;
		var ju = aIw;
		aIu = aEK / jU[ju];
		for (var ce = aIw - 1; aIv <= ce; ce--) jU[ce] > jU[ju] && (ju = ce, aIu = aEK / Math.pow(jU[ce], a12))
	}

	function aJ9(aF) {
		aF = Math.floor((y2 + aA.b1 - aF - gap * aIt) / aIt);
		return (aF = aF < -1 ? -1 : -1 === aF ? 0 : aF > jU.length - 1 ? -1 : aF) !== aIx && (aIx = aF, -1 === xc && 0 === aIx && ak.aJ0 && (xc = setInterval(aJA, 100)), 1)
	}

	function aJB(ce) {
		var aJD = Math.floor(aIu * Math.pow(jU[ce], a12));
		dQ.fillRect(y2 + aA.b1 - (ce + 1) * aIt, aA.b2 - aJD, a4z, aJD)
	}

	function aJA() {
		var fF;
		0 !== (aIx = 8 === aK.at() ? -1 : aIx) ? (aIz = (new Date).getTime(), clearInterval(xc), xc = -1) : (fF = jU[1] / 864e3, -1 !== aIz && (fF += ((new Date).getTime() - aIz) * jU[1] / 864e5, aIz = -1), 0 < fF && (jU[0] += Math.floor(fF), aC
			.ah = !0))
	}
	this.aJ0 = !1, this.k = function() {
		aIz = xc = -1, aIx = -(a12 = 1), this.aJ1 = !1, i = 0, aCl = new Date, y2 = 0, gap = .3, jU = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aEK = Math.floor(.15 * aA.b2), aIy = (aIy = Math.floor((ca.cb.cc() ? .018 : .0137) * aA.cd)) < 2 ? 2 : aIy, nI = bT.ed.ef(1, aIy), aJ3()
	}, this.aJ4 = function(a6p) {
		var ce;
		for (this.aJ0 = !0, ce = 0; ce < a6p.length; ce++) jU.unshift(a6p[ce]);
		aJ3(), aC.ah = !0
	}, this.aJ7 = function() {
		aJ6()
	}, this.n = function(aF, aG) {
		aG > aA.b2 - .6 * aEK ? this.aJ1 ? aF !== i && (y2 += aF - i, i = aF, aJ6(), aJ9(aF), this.aJ1 = -1 !== aIx, aC.ah = !0) : aJ9(aF) && (aC.ah = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aIx && (this.aJ1 = !1, aIx = -1, aC.ah = !0)
	}, this.q = function(aF, deltaY) {
		-1 !== aIx && (y2 += Math.floor(deltaY), aJ6(), aJ9(aF), aC.ah = !0)
	}, this.m = function(aF, aG) {
		this.n(aF, aG), -1 !== aIx && (i = aF, this.aJ1 = !0)
	}, this.al = function() {
		-1 !== aIx && (this.aJ1 = !1)
	}, this.dP = function() {
		dQ.fillStyle = dK.a13;
		for (var aJE, month, mf, fI, aJH, aJI, nc, aJJ, aJK, ce = aIw; aIv <= ce; ce--) aJB(ce);
		this.aJ0 && 0 === aIv && (dQ.fillStyle = dK.a66, aJB(0)), -1 !== aIx && (dQ.fillStyle = dK.a5k, aJB(aIx)), -1 !== aIx && (dQ.font = nI, bT.ed.textBaseline(dQ, 2), (mf = new Date).setTime(aCl.getTime() - 1e3 * aIx * 60 * 60 * 24), month =
			"month", aJE = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(mf), aJE = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(mf)), aJE = aJE + ", " + mf.getUTCDate() + " " + month + " " + mf.getFullYear(), month = 1 === jU[aIx] ? L(261) : L(262), month = bT.bZ.ba(jU[aIx]) + " " + month, mf = Math.floor(dQ.measureText(aJE).width), fI = Math
			.floor(dQ.measureText(month).width), aJH = Math.floor(.5 * (mf + aIy)), aJI = (aJI = y2 + aA.b1 - (aIx + 1) * aIt) < aJH ? aJH : aJI > aA.b1 - aJH ? aA.b1 - aJH : aJI, nc = aA.b2 - Math.floor(aIu * Math.pow(jU[aIx], a12)), aJJ =
			Math.floor(1.1 * aIy), aJK = nc > aA.b2 - aJJ ? aA.b2 - aJJ : nc, dQ.fillStyle = dK.fB, dQ.fillRect(aA.b1 - fI - aIy, aJK - aJJ, fI + aIy, aJJ), dQ.fillRect(aJI - aJH, aA.b2 - aJJ, mf + aIy, aJJ), dQ.fillStyle = dK.dM, bT.ed
			.textAlign(dQ, 2), dQ.fillText(month, Math.floor(aA.b1 - .5 * aIy), aJK), bT.ed.textAlign(dQ, 1), dQ.fillText(aJE, aJI, aA.b2), dQ.strokeStyle = dK.a5l, dQ.lineWidth = 1, dQ.beginPath(), dQ.moveTo(0, nc), dQ.lineTo(aA.b1, nc), dQ
			.closePath(), dQ.stroke())
	}
}

function aJL() {
	this.a1G = function(bb) {
		for (var en = bb.length, b1 = lo, ce = 0; ce < en; ce++) b1.mB(16, bb.charCodeAt(ce))
	}
}

function w4() {
	function aJN() {
		8 === aI.dw && 1 === aI.aJ && dj.lZ.aJO()
	}

	function aJM(player) {
		aI.g1 ? (uk.aJP(player), gC.aJQ(), aI.df && aI.he.j1()) : um.yr(player)
	}
	this.a8a = function(player) {
		aa.nC(player, player === aI.bS ? 21 : 22), aJM(player), aJN()
	}, this.aGV = function(player) {
		1 === aI.aJ && 0 !== bX.g3[player] && 2 !== bX.g4[player] && aJM(player), aI.hW--, aI.hY--, aa.nC(player, 4), bT.bU.fz(2) && be.iU(!0), aJN()
	}
}

function vl() {
	var na, nc, ev, ew, aJR = 0,
		aJS = 0;

	function aJU() {
		return Math.pow(Math.pow(ev - na, 2) + Math.pow(ew - nc, 2), .5)
	}

	function aJT(a2) {
		na = aA.aB * a2.touches[0].clientX, nc = aA.aB * a2.touches[0].clientY, ev = aA.aB * a2.touches[1].clientX, ew = aA.aB * a2.touches[1].clientY
	}
	this.r = function(a2) {
		return 1 < a2.touches.length ? (aJS = aC.aD, aJR = 3, aJT(a2), aP.c1(), !0) : (aJR = 0, !1)
	}, this.s = function(a2) {
		var qu, co, cr;
		return 0 !== aI.aJ && 1 < a2.touches.length && (aJR = Math.max(aJR - 1, 0), ct.cu() && (qu = aJU(), aJT(a2), a2 = aJU(), co = Math.floor((na + ev) / 2), cr = Math.floor((nc + ew) / 2), aY.d4(co, cr, Math.max(.125, a2) / Math.max(.125,
			qu)), aC.ah = !0), !0)
	}, this.ao = function() {
		var aF, aG;
		return !!(aJR && (aJR = 0, aC.aD < aJS + 500)) && (aF = (na + ev) / 2, aG = (nc + ew) / 2, aP.aW(aF, aG), aP.click(aF, aG, !0) && (aC.ah = !0), !0)
	}
}

function aJV() {
	this.aFp = function() {
		for (var fF, aF, gw, aFn = kj, aFo = dC.kF, b1 = dC.dD, aFl = b1 - 1, aFm = dC.dE - 1, lu = 0, aG = 1; aG < aFm; aG++)
			for (gw = aG * b1, aF = 1; aF < aFl; aF++) aFo[fF = gw + aF << 2] === aFo[1 + fF] && aFo[fF] === aFo[2 + fF] && (lu++, aFn[2 + fF] = 4);
		i6.oh = lu
	}, this.aFq = function(aJW, aJX) {
		for (var aFn = kj, b1 = dC.dD, aFl = b1 - 1, aFm = dC.dE - 1, id = 0, aG = 1; aG < aFm; aG++)
			for (var gw = aG * b1, aF = 1; aF < aFl; aF++) {
				var d5 = 2 + (gw + aF << 2);
				aFn[d5] === aJW && (! function(d5, id, aJW, aJX) {
					var en = 1,
						aFn = kj,
						a1z = i4.a7E,
						aJZ = [d5],
						aJa = id >> 8 << 1,
						aJb = 255 & id;
					aFn[d5 - 2] = aJa, aFn[d5 - 1] = aJb, aFn[d5] = 5;
					for (; en;) {
						for (var aJc = [], ce = 0; ce < en; ce++)
							for (var lN = aJZ[ce], gy = 0; gy < 8; gy++) {
								var lK = lN + a1z[gy];
								aFn[lK] === aJW && (aFn[lK - 2] = aJa, aFn[lK - 1] = aJb, aFn[lK] = aJX, aJc.push(lK))
							}
						en = (aJZ = aJc).length
					}
				}(d5, id, aJW, aJX), id = (id + 1) % 32768)
			}
	}, this.aFr = function() {
		for (var aFn = kj, b1 = dC.dD, aFl = b1 - 3, aFm = dC.dE - 3, aJe = 12 * b1, aG = 3; aG < aFm; aG++)
			for (var gw = aG * b1, aF = 3; aF < aFl; aF++) {
				var d5 = 2 + (gw + aF << 2);
				2 !== aFn[d5] || 2 === aFn[d5 - 12] && 2 === aFn[12 + d5] && 2 === aFn[d5 - aJe] && 2 === aFn[d5 + aJe] || (aFn[d5 - 2] = 1 | aFn[d5 - 2])
			}
	}
}

function aCp() {
	var aJf = [],
		aJg = [],
		aJh = [];

	function aJj(bx) {
		for (var mj = bx.mj, aJi = [];;) {
			var ax = function aJn(mj, position) {
				position = mj.indexOf("@", position);
				if (position < 0) return -1;
				var bb = mj.substring(position + 1, position + 6);
				if (5 !== bb.length) return aJn(mj, position + 1);
				if (bT.bZ.startsWith(bb, "room")) return aJn(mj, position + 1);
				var aJz = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aJz.test(bb)) return aJn(mj, position + 1);
				aJz = mj.substring(position + 6, position + 7);
				if (1 !== aJz.length) return position;
				bb = new RegExp("^[ :!.]+$");
				if (!bb.test(aJz)) return aJn(mj, position + 1);
				return position
			}(mj, 0);
			if (-1 === ax) {
				aJi.push(aJo(mj, bx));
				break
			}
			0 === ax ? aJi.push(aJp(mj.substring(1, 6), bx, ax)) : (aJi.push(aJo(mj.substring(0, ax), bx)), aJi.push(aJp(mj.substring(ax + 1, ax + 6), bx, ax))), mj = mj.substring(ax + 6)
		}
		return aJi
	}

	function aJp(bb, bx, ax) {
		var a5Q = function(bb) {
				var cE = k0.cA.a1O(bb, 5),
					a5Q = b7.cC.cD(cE);
				if (a5Q) {
					for (aJf.push(a5Q); 75 < aJf.length;) aJf.shift();
					return a5Q
				}
				for (var a5O = b7.cC.a5O, ce = a5O.length - 1; 0 <= ce; ce--)
					if (a5Q = a5O[ce], cE === a5Q.cE) return aJf.push(a5Q), a5Q;
				for (ce = aJf.length - 1; 0 <= ce; ce--)
					if (a5Q = aJf[ce], cE === a5Q.cE) return aJf.push(a5Q), a5Q;
				return b7.cC.a5R(cE, bb, 1, 999999, 999999, 0, 0, 0, 0)
			}(bb),
			bb = (0 === ax && 0 === bx.aHa.id && bx.aJk && (bx.fontSize = b7.c3.aJr(a5Q.c5, a5Q.c6), bx.aJm = b7.c3.aJs(a5Q.c6)), document.createElement("span"));
		return bb.textContent = function(a5Q, bx, ax) {
				if (a5Q.aJv) return a5Q.aJv--, ax = 2 === bx.aHa.id || (3 === bx.aHa.id || 4 === bx.aHa.id) && 0 !== ax, a5Q.username + (ax ? " (" + a5Q.a5Y + ")" : "");
				if (bx.aHa.aJx) return "Redacted " + c9.cA.ba(a5Q.cE, 2);
				return a5Q.username
			}(a5Q, bx, ax), bb.style.display = "inline-block", bb.style.color = b7.c3.aJu(a5Q.c5), 11 === a5Q.c5 && (bb.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), bb.style.cursor =
			"pointer", bb.style.margin = "0", bb.style.font = "inherit", bb.style.minWidth = bb.style.minHeight = "1em", b7.c3.yQ(a5Q) && (bb.style.textDecoration = "underline"), a5Q.a5U && (bb.style.textDecorationLine = "underline", bb.style
				.textDecorationStyle = "dotted"), b7.c3.aJs(a5Q.c6) && (bb.style.fontWeight = "bold"), bb.onclick = function(a2) {
				b7.b9.yB(a2, a5Q)
			}, aU.ac() || (bb.onmouseover = function(a2) {
				b7.c0.bw(a2.target, a5Q)
			}), aJg.push(bb), bb
	}

	function aJo(mj, bx) {
		var qj = document.createElement("span");
		return qj.textContent = mj, qj.style.color = bx.aJy, qj.style.margin = "0", qj.style.font = "inherit", qj
	}

	function aK2(a5Q, a5X, cE) {
		cE !== a5Q.cE || a5Q.a5Y || (a5Q.a5Y = a5Q.username, a5Q.username = a5X)
	}
	this.lk = function() {
		for (var ce = 0; ce < aJg.length; ce++) aJg[ce].onclick = aJg[ce].onmouseover = null;
		aJh = aJg = null
	}, this.transform = function(bx) {
		for (var r6 = document.createElement("div"), aJi = aJj(bx), ce = 0; ce < aJi.length; ce++) r6.appendChild(aJi[ce]);
		0 === bx.aHa.id && (r6.vx143 = bx.aHa, aJh.push(r6)), r6.style.margin = "0.6em 0.6em", bx.aJk && (r6.style.marginLeft = r6.style.marginRight = "inherit"), r6.style.font = "inherit";
		var aJl = 0 < bx.aHa.id;
		return bx.aJm && (r6.style.fontWeight = "bold"), aJl && (r6.style.paddingLeft = "0.7em"), aJl && (r6.style.fontStyle = "italic"), r6.style.fontSize = bx.fontSize.toFixed(2) + "em", r6
	}, this.z8 = function(z6) {
		if (z6 && (2 === z6.id && 1 === z6.zA || 3 === z6.id && 2 === z6.zA)) {
			var cE = 3 === z6.id ? z6.target : z6.cE;
			if (!b7.cC.cD(cE)) {
				for (var a5X = "Redacted " + c9.cA.ba(cE, 2), a5O = b7.cC.a5O, ce = a5O.length - 1; 0 <= ce; ce--) aK2(a5O[ce], a5X, cE);
				for (ce = aJf.length - 1; 0 <= ce; ce--) aK2(aJf[ce], a5X, cE)
			}
		}
	}, this.a5Z = function(cE) {
		for (var aK3 = aJh, aK4 = "@" + c9.cA.ba(cE, 5), ce = aK3.length - 1; 0 <= ce; ce--) {
			var gy = aK3[ce];
			if (gy.vx143.cE === cE || 0 <= gy.vx143.mj.indexOf(aK4)) {
				for (; gy.firstChild;) aH.removeChild(gy, gy.firstChild);
				for (var aJi = aJj(b7.c3.aHc(gy.vx143, b7.c3.aHd(gy.vx143))), jR = 0; jR < aJi.length; jR++) gy.appendChild(aJi[jR]);
				aK3.splice(ce, 1)
			}
		}
	}, this.aHb = function(cE) {
		for (var aK3 = aJh, ce = aK3.length - 1; 0 <= ce; ce--) {
			var gy = aK3[ce];
			if (gy.vx143.cE === cE) {
				for (; gy.firstChild;) aH.removeChild(gy, gy.firstChild);
				gy.vx143.mj = "[Redacted Message]";
				for (var aJi = aJj(b7.c3.aHc(gy.vx143, b7.c3.aHd(gy.vx143))), jR = 0; jR < aJi.length; jR++) gy.appendChild(aJi[jR]);
				aK3.splice(ce, 1)
			}
		}
	}
}

function vV() {
	function aK9(player) {
		var mf;
		bT.bU.gK(player) && (mf = bX.gM[player] - bX.gW[player] + iN.aKB(player), h0.h1(player, Math.abs(mf), mf < 0 ? 18 : 12)), bX.gM[player] = 0, bX.gW[player] = 0
	}

	function aKG() {
		aO.show(!1, !1, !1, !0), be.a7v(), dj.lg.a7w()
	}

	function aK6(player, aKF) {
		for (var ce = aKF.length - 1; 0 <= ce; ce--) iN.aKI(aKF[ce], player)
	}

	function aK8(player) {
		var sj = bX.sj,
			sl = bX.sl,
			sk = bX.sk,
			sm = bX.sm,
			dD = dC.dD;
		if (bX.gD[player]) {
			bX.gD[player] = 0;
			for (var na = sj[player], nc = sk[player], aF = sl[player]; na <= aF; aF--)
				for (var aG = sm[player]; nc <= aG; aG--) {
					var fF = 4 * (aG * dD + aF);
					i4.tq(player, fF) && i4.a3J(fF)
				}
		}
		sl[player] = sm[player] = 0, sj[player] = sk[player] = Math.max(dD, dC.dE)
	}
	this.wY = function(fF) {
		var player, mf = bX.gD[fF] + bX.a2v[fF];
		f4.a6.pl[fF] ? mf && (aK6(player = fF, iN.aK7(player)), cz.ss(player), aK8(player), iK.zY(player), iN.clear(player), aK9(player), function(player) {
			bX.a2v[player] = 0, bX.lT[player] = [], bX.pH[player] = [], bX.l3[player] = [], bX.a2w[player] = []
		}(player)) : !mf && bX.lT[fF].length || this.aJP(fF)
	}, this.aJP = function(player) {
		! function(player) {
			bT.bU.bV(player) || (bX.ou[player] = dq.dr.a4l(), aI.hY++);
			var aKF = iN.aK7(player);
			0 === aKF.length ? bT.bU.g5(player) && aKG() : (aK6(player, aKF), function(player, aKF) {
				var aKK = aKF[function(aKF) {
					var ce, eI = 0;
					for (ce = aKF.length - 1; 1 <= ce; ce--) bX.gD[aKF[ce]] > bX.gD[aKF[eI]] && (eI = ce);
					return eI
				}(aKF)];
				9 === aI.dw && (1 === g8.g9[player] ? hw.pV(8) && hs.aGl(aKK) : iD.ge[player] && (aa.lA(765, 0), aa.bW(280, L(263, [bX.bY[aKK], bX.bY[player]]), 765, aKK, dK.oK, dK.a6Z, -1, !0)));
				if (bT.bU.g5(player)) aKG(), aa.nC(aKK, 1);
				else {
					for (var ce = aKF.length - 1; 0 <= ce; ce--)
						if (bT.bU.gK(aKF[ce]) && (h0.ir[4 - bT.bU.bV(player)]++, bT.bU.g5(aKF[ce]))) return aa.nC(player, 0);
					bT.bU.bV(player) || aa.nr(0, player, aKK)
				}
			}(player, aKF))
		}(player), cz.ss(player), aK8(player), aK9(player),
			function(player) {
				bX.g3[player] = 0, bX.lT[player] = null, bX.pH[player] = null, bX.l3[player] = null, bX.a2w[player] = null
			}(player), iK.zY(player), iN.clear(player), f4.kw.aKE(player)
	}
}

function aKL() {
	this.aDr = function(eI, eX) {
		return Number(this.aDs(eI, eX))
	}, this.aDs = function(eI, eX) {
		var gU = null;
		return 0 === ca.id ? ca.aA6 && (gU = ca.aA6.getItem((eX ? "v" : "d") + eI)) : 1 === ca.id ? gU = ca.eY.loadString((eX ? 1e3 : 2e3) + eI) : 2 === ca.id && (gU = ca.aKM[(eX ? "v" : "d") + eI]), gU && 0 !== gU.length ? gU : null
	}, this.a6l = function(en, aKN) {
		var jU = [],
			aKO = aKN ? "e" : "l";
		if (0 === ca.id) {
			if (ca.aA6)
				for (ce = 0; ce < en; ce++) jU.push(ca.aA6.getItem(aKO + ce))
		} else if (1 === ca.id)
			for (var aKP = aKN ? 5e3 : 3e3, ce = 0; ce < en; ce++) jU.push(ca.eY.loadString(aKP + ce));
		else if (2 === ca.id)
			for (ce = 0; ce < en; ce++) jU.push(ca.aKM[aKO + ce]);
		return jU
	}, this.save = function(eI, value, eX) {
		var qO = (eX ? "v" : "d") + eI;
		if (0 === ca.id) {
			if (ca.aA6 && cs.buffer.data[140].value) try {
				ca.aA6.setItem(qO, value)
			} catch (a2) {
				console.log(a2)
			}
		} else 1 === ca.id ? ca.eY.saveString((eX ? 1e3 : 2e3) + eI, value) : 2 === ca.id && (ca.aKM[qO] = value, ca.aA7.postMessage(qO + " " + value))
	}, this.a6w = function(jU, aKN) {
		var en = jU.length,
			aKO = aKN ? "e" : "l";
		if (0 === ca.id) {
			if (ca.aA6 && cs.buffer.data[140].value) try {
				for (ce = 0; ce < en; ce++) ca.aA6.setItem(aKO + ce, jU[ce])
			} catch (a2) {
				console.log(a2)
			}
		} else if (1 === ca.id)
			for (var aKP = aKN ? 5e3 : 3e3, ce = 0; ce < en; ce++) ca.eY.saveString(aKP + ce, jU[ce]);
		else if (2 === ca.id)
			for (ce = 0; ce < en; ce++) ca.aKM[aKO + ce] = jU[ce], ca.aA7.postMessage(aKO + ce + " " + jU[ce])
	}
}

function aKQ(data) {
	var j9, jA;

	function aKS(fd, aLB) {
		if (!data.aKR) {
			if (data.aL2) {
				if (aLB) return
			} else {
				if (!aLB) return;
				if (data.bu < 1e4) return
			}
			var aLE, fi = new fj,
				aLC = 1e5 <= data.bu,
				aLD = fi.fk(aLB ? (aLC ? "⚠️ " : "") + L(354) : L(355)),
				aLG = (aLC && (aLD.style.color = "yellow"), aLB ? fi.jI(L(356, [bT.bZ.a3v(data.bu, .01, 0)])) : ((aLE = new eH({
					value: data.aLF,
					eI: -1
				})).a2.readOnly = !0, aLE.a2.type = "password", fi.fp(aLE), fi.fp(new fs([new e9(L(289), function(a2) {
					return a2.textContent === L(289) ? (a2.textContent = L(290), aLE.a2.type = "text") : (a2.textContent = L(289), aLE.a2.type = "password"), !0
				}).button, new e9(L(286), function(a2) {
					return bT.ed.aE7(aLE.a2), bT.ed.jP(a2), !0
				}).button]))), fi.ox(L(aLB ? 355 : 357)).style.marginTop = "0.75em", new eH({
					value: "",
					eI: -1
				}, 0, 0)),
				aLH = (aLG.a2.type = "email", aLG.a2.autocomplete = "email", aLG.a2.name = "email", aLG.a2.inputMode = "email", aLG.a2.spellcheck = !1, fi.fp(aLG), fi.fp(new fs([new e9(L(358), function(a2) {
					return a5.p6.aEe({
						action: 3,
						bb: aLG.a2.value.trim().substring(0, 63)
					}), bT.ed.jP(a2), !0
				}).button])), aLB && fi.jI(L(359)), fi.ox(L(360)).style.marginTop = "0.75em", new eH({
					value: "",
					eI: -1
				}, 1));
			fi.fp(aLH), fi.fp(new fs([new e9(L(361), function() {
				a5.p6.p7({
					action: 4,
					cE: "",
					value: Math.floor(+aLH.a2.value)
				}), aH.eF(8, aH.bh().rJ, new eS(18))
			}).button])), fd.push(fi)
		}
	}
	this.show = function() {
		data.aKR && up.aLZ("account", data.cE), j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(data.username, [new e9("⬅️ " + L(6), function() {
		up.clear(), aH.fX()
	}), new e9(data.aKR ? "🔄 " + L(264) : L(265), function() {
		aH.eF(8, data.aKR ? aH.bh().rJ : void 0, new eS(25, {
			action: 0,
			cE: data.cE,
			yK: data.yK
		}))
	}, 0, 0, 1)]), jA = new fR(j9.fS, function() {
		var fd = [];
		aKS(fd, 1), fd.push(function() {
				var fi = new fj;
				fi.fk(L(327)), data.aL2 && (fi.ox("✅ " + L(328)).style.marginBottom = "0.75em");
				var aL3 = data.aL4;
				aL3 < 1 ? (fi.ox(L(329)), 0 === data.aL5 ? fi.jI(L(330)) : 1 === data.aL5 ? fi.jI(L(331)) : 2 === data.aL5 ? fi.jI(L(332)) : 3 === data.aL5 ? fi.jI(L(333)) : 4 === data.aL5 ? fi.jI(L(334)) : 5 === data.aL5 ? fi.jI(L(
					335)) : 6 === data.aL5 ? fi.jI(L(336)) : fi.jI(L(337))) : (fi.ox(L(338)), aL3 = aL3 < 2 ? L(339) : aL3 < 61 ? 2 === aL3 ? L(340) : L(341, [aL3 - 1]) : aL3 < 84 ? 61 === aL3 ? L(342) : L(343, [aL3 - 60]) : aL3 <
					255 ? 84 === aL3 ? L(344) : L(345, [aL3 - 83]) : L(346), fi.jI(aL3));
				{
					var p8, p1;
					fi.fp(new km), data.aKR && (p8 = fi.jI(), fi.fp(new fs([new e9(cs.aEl.a5U(data.cE) ? L(347) : L(348), function(a2) {
						return cs.aEl.aL6(data.cE) ? (a2.textContent = L(347), p1(1)) : (a2.textContent = L(348), p1(0)), !0
					}).button])), p1 = function(gU) {
						p8.textContent = gU ? L(349) : ""
					}, cs.aEl.a5U(data.cE) && p1(1), fi.fp(new km))
				}
				var aDw, e3 = new eH({
					value: data.username,
					eI: -1
				});
				e3.a2.readOnly = !0, fi.fp(e3), fi.fp(new fs([new e9(L(286), function(a2) {
					return bT.ed.aE7(e3.a2), bT.ed.jP(a2), !0
				}).button])), data.aKR || fi.jI(L(350));
				(data.aL7 || data.aL8 || data.aL9) && (fi.fp(new km), fi.jI(L(351)), data.aL7 && (fi.jI("• Account Timeout").style.color = "orange"), data.aL8 && ((aDw = fi.jI("• Muted")).style.color = "orange", aDw.style.marginTop =
					"0.5em"), data.aL9) && ((aDw = fi.jI("• Redacted")).style.color = "orange", aDw.style.marginTop = "0.5em");
				data.aKR && (fi.fp(new km), fi.ox(a5.a6.oy("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", fi.fp(new fs([new e9(L(352), function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 0
					}), bT.ed.jP(a2), !0
				}, dK.a69).button])), fi.fp(new fs([new e9(L(353), function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 1
					}), bT.ed.jP(a2), !0
				}, dK.a69).button])), fi.fp(new fs([new e9("Cheater", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 2
					}), bT.ed.jP(a2), !0
				}, dK.a69).button])), fi.fp(new fs([new e9("False Reporter", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 3
					}), bT.ed.jP(a2), !0
				}, dK.a69).button])), aL3 = "CRTOR" === (aL3 = cs.buffer.data[105].value) || "ADMIN" === aL3) && (fi.fp(new fs([new e9("Block Account", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 4
					}), bT.ed.jP(a2), !0
				}, dK.a67).button])), fi.fp(new fs([new e9("Ban IP", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 5
					}), bT.ed.jP(a2), !0
				}, dK.a67).button])), fi.fp(new fs([new e9("Gold Seizure", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 6
					}), bT.ed.jP(a2), !0
				}, dK.a67).button])), fi.fp(new fs([new e9("Remove Punishments", function(a2) {
					return a5.p6.p7({
						action: 3,
						cE: data.cE,
						value: 7
					}), bT.ed.jP(a2), !0
				}, dK.a62).button])));
				return fi
			}()),
			function(fd) {
				var fi, p8, a6q, aLJ, p5, a9P, p3;
				data.aKR || ((fi = new fj).fk(L(362)), (p8 = fi.jI(data.aLI.length + " / 160")).style.textAlign = "center", a6q = !0, (aLJ = new ft(0, 1, function(a2) {
					a2 = a2.target.value.length;
					p8.textContent = a2 + " / 160", 160 < a2 ? a6q && (a6q = !1, a9P.eU(1)) : a6q || (a6q = !0, a9P.eU(0))
				})).a2.rows = 6, aLJ.a2.style.fontSize = "1em", aLJ.fu(data.aLI), fi.fp(aLJ), 0 !== data.aLK ? (a9P = new e9(L(363), function() {
					if (!a6q) return !0;
					aH.eF(8, aH.bh().rJ, new eS(29, {
						action: 1,
						bb: aLJ.fa().substring(0, 160)
					}))
				}, 0, 0, 1), fi.fp(new fs([a9P.button])), fi.fp(new fs([new e9(1 === data.aLK ? L(364) : L(365), function() {
					aH.eF(8, aH.bh().rJ, new eS(29, {
						action: 0,
						bb: ""
					}))
				}, 0, 0, 1).button])), fi.jI(1 === data.aLK ? L(366, [data.aLL - 1]) : L(367, [data.aLL - 1])), fi.jI(L(368, [data.aLM]))) : (p5 = new e9(L(369), function() {
					if (!aLJ.a2.readOnly) return !0;
					aH.eF(8, aH.bh().rJ, new eS(29, {
						action: 1,
						bb: aLJ.fa().substring(0, 160)
					}))
				}, 1), a9P = new e9(L(138), function(a2) {
					if (a2.textContent === L(138)) {
						if (!a6q) return !0;
						a2.textContent = L(139), aLJ.a2.readOnly = !0, p5.eU(0), p5.button.style.color = dK.oN
					} else p3();
					return !0
				}), fi.fp(new fs([a9P.button])), fi.jI(L(368, [data.aLM])), p3 = function() {
					a9P.button.textContent = L(138), aLJ.a2.readOnly = !1, p5.eU(1), p5.button.style.color = dK.dM
				}, fi.fp(new fs([p5.button]))), fd.push(fi))
			}(fd),
			function(fd) {
				var fi;
				data.aKR && 0 !== data.aLK && ((fi = new fj).fk(L(370)), fi.a0C(data.aLI), fi.fp(new fs([new e9(L(371, 0, "Report"), function(a2) {
					return a5.a6.ke(0) && (bT.ed.jP(a2), a5.p6.aEd({
						action: 5,
						cE: data.cE
					})), !0
				}, 0, 0, 1).button])), fd.push(fi))
			}(fd), fd.push(function() {
				var fi = new fj,
					aKk = (fi.fk(L(266)), fi.ox(a5.a6.oy("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(267), L(268), L(269), L(270), L(271), L(272), L(273), L(274), L(275), L(276), L(277), L(278), L(279), L(280)]),
					au = data.aKl;
				return fi.ox(L(281) + bT.bZ.a3v(data.bu, .01, 2) + "<br>" + L(282) + (au + 1) + " / " + data.aIK + "<br>" + L(283) + aKk[function(au, bu) {
					if (au < 10) return 0;
					if (au < 30) return 1;
					if (au < 60) return 2;
					if (3e4 <= (bu = gf.gg(bu, 100))) return 3;
					if (12e3 <= bu) return 4;
					if (7e3 <= bu) return 5;
					if (3e3 <= bu) return 6;
					if (1e3 <= bu) return 7;
					if (500 <= bu) return 8;
					if (200 <= bu) return 9;
					if (70 <= bu) return 10;
					if (20 <= bu) return 11;
					if (3 <= bu) return 12;
					return 13
				}(au, data.bu)]), fi
			}()), data.aKR && fd.push(function() {
				var fi = new fj,
					e3 = (fi.fk(L(284)), fi.ox(a5.a6.oy("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new eH({
						value: cs.buffer.data[147].value,
						eI: -1
					}, 1, void 0, function(a2) {
						cs.jD.jX(147, p1(a2.target.value))
					})),
					p5 = (fi.fp(e3), new e9(L(140), function(a2) {
						return e3.a2.readOnly && a5.a6.ke(0) && (bT.ed.jP(a2), p3(), a5.p6.p7({
							action: 0,
							cE: data.cE,
							value: parseInt(cs.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					a9P = new e9(L(138), function(a2) {
						return a2.textContent === L(138) ? (a2.textContent = L(139), e3.a2.readOnly = !0, p5.eU(0), p5.button.style.color = dK.oN, cs.jD.jX(147, e3.a2.value), p1(cs.buffer.data[147].value)) : p3(), !0
					}),
					p8 = (fi.fp(new fs([a9P.button])), fi.jI()),
					p1 = function(gU) {
						p8.innerHTML = aH.a6.p9(gU, cs.buffer.data[105].value, data.cE)
					},
					p3 = function() {
						a9P.button.textContent = L(138), e3.a2.readOnly = !1, p5.eU(1), p5.button.style.color = dK.dM
					};
				return p1(cs.buffer.data[147].value), fi.fp(new fs([p5.button])), fi
			}());
		fd.push(function() {
			var fi = new fj,
				e3 = (fi.fk(L(285)), new eH({
					value: data.cE,
					eI: -1
				})),
				aKn = (e3.a2.readOnly = !0, fi.fp(e3), fi.fp(new fs([new e9(L(286), function(a2) {
					return bT.ed.aE7(e3.a2), bT.ed.jP(a2), !0
				}).button])), fi.fp(new km), new eH({
					value: data.cE,
					eI: -1
				}));
			return fi.fp(aKn), fi.fp(new fs([new e9(L(287), function(a2) {
				aH.eF(8, aH.bh().rJ, new eS(25, {
					action: 0,
					cE: aKn.a2.value,
					yK: 0
				}))
			}).button])), fi
		}()), data.aKR || (fd.push(function() {
			var fi = new fj,
				aKo = (fi.fk(L(288)), new eH(cs.buffer.data[106]));
			return aKo.a2.readOnly = !0, aKo.a2.type = "password", fi.fp(aKo), fi.fp(new fs([new e9(L(289), function(a2) {
				return a2.textContent === L(289) ? (a2.textContent = L(290), aKo.a2.type = "text") : (a2.textContent = L(289), aKo.a2.type = "password"), !0
			}).button, new e9(L(286), function(a2) {
				return bT.ed.aE7(aKo.a2), bT.ed.jP(a2), !0
			}).button])), fi.fp(new fs([new e9(L(291), function() {
				aH.eF(8, aH.bh().rJ, new eS(15))
			}).button])), fi.fk(L(292), "0.8em"), fi.jI(L(293)), fi.jI(L(294)), fi.jI(L(295)), fi
		}()), fd.push(function() {
			var fi = new fj;
			return fi.fk(L(296)), fi.fp(new fs([new e9(L(297), function() {
				aH.eF(6, aH.bh().rJ)
			}).button])), fi.fp(new fs([new e9(L(298), function() {
				cs.jD.jX(105, ""), aH.eF(8, aH.bh().rJ, new eS(18))
			}).button])), fi.fp(new fs([new e9(L(299) + cs.buffer.data[105].value, function() {
				aH.eF(4, 0, new rO(L(300), L(301), !0, [new e9("⬅️ " + L(6), function() {
					aH.eF(7, aH.bj(7).rJ)
				})]))
			}, dK.a69).button])), fi
		}()), fd.push(function() {
			function aKq(eI) {
				aKp[0].eU(0 === eI ? dK.a5r : dK.nP), aKp[1].eU(0 === eI ? dK.a5r : dK.a69)
			}
			var a0E, aKp, fi = new fj;
			fi.fk(L(305)), fi.jI(L(306)), cs.a6.aGE();
			return aKp = [new e9(L(307), function() {
				var eI = Math.min(cs.buffer.data[117].value, a0E.a0F.length - 1);
				eI < 1 || (eI = cs.a6.aEj(eI), cs.jD.jX(105, eI.cE), cs.jD.jX(106, eI.password), aH.eF(8, aH.bh().rJ, new eS(18)))
			}, dK.a5r, 1), new e9(L(304), function() {
				var eI = Math.min(cs.buffer.data[117].value, a0E.a0F.length - 1);
				if (!(eI < 1)) {
					a0E.a0F[eI].remove(), a0E.a0F.splice(eI, 1);
					for (var ce = eI; ce < a0E.a0F.length; ce++) a0E.a0F[ce].name = "" + ce;
					cs.a6.aEi(eI), eI = cs.buffer.data[117].value, a0E.a0F[eI].textContent = a0E.a0F[eI].textContent.replace("⚪", "🟢"), aKq(eI)
				}
			}, dK.a5r, 1)], a0E = new fn(cs.buffer.data[117], aKq), aKq(0), a0E.a0F[0].style.marginTop = "0.5em", fi.fm(a0E), fi.fp(new fs([aKp[0].button])), fi.fp(new fs([aKp[1].button])), fi
		}()));
		return fd.push(function() {
				var fi = new fj,
					aKk = (fi.fk(L(311)), [L(312), L(313), L(314), L(315)]),
					au = data.aKu;
				return fi.ox(L(316) + (data.aKv / 100).toFixed(2) + "<br>" + L(282) + (au + 1) + " / " + data.aIK + "<br>" + L(283) + aKk[au < 10 ? 0 : au < 50 ? 1 : au < 200 ? 2 : 3]), fi
			}()), fd.push(function() {
				var fi = new fj;
				return fi.fk(L(308)), fi.ox(L(309) + bT.bZ.a3v(data.aIH, .1, 1) + "<br>" + L(282) + (data.aII + 1) + " / " + data.aIK + "<br>" + L(310) + data.aIJ), fi
			}()),
			function(fd) {
				var fi = new fj,
					aLN = data.aIN,
					aLO = (fi.fk(L(372)), fi.ox(L(373, [data.aIL.length ? "[" + data.aIL + "]" : "-"])), fi.ox(L(374, [bT.bZ.a3v(aLN, .01, 2)])), fi.ox(L(375, [data.aIP + 1 + " / " + data.aIK])), data.aIQ),
					aLP = (fi.ox(L(376, [bT.bZ.a3v(aLO, .1, 1)])), data.aIS);
				fi.ox(L(377, [aLP])), fi.ox(L(378, [bT.bZ.a3v(aLO / Math.max(aLP, 1), .1, 2)])), aLN = data.aIO, fi.fk(L(379), "0.8em"), fi.ox(L(373, [data.aIM.length ? "[" + data.aIM + "]" : "-"])), fi.ox(L(374, [bT.bZ.a3v(aLN, .01, 2)])),
					aLO = data.aIR, fi.ox(L(376, [bT.bZ.a3v(aLO, .1, 1)])), aLP = data.aIT, fi.ox(L(377, [aLP])), fi.ox(L(378, [bT.bZ.a3v(aLO / Math.max(aLP, 1), .1, 2)])), fi.ox(a5.a6.oy("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					fd.push(fi)
			}(fd),
			function(fd) {
				var fi = new fj;
				fi.fk(L(380)), fi.ox(L(316) + (data.aLQ / 10).toFixed(1) + "<br>" + L(283) + (data.aLR.length ? L(381, [data.aLR]) : L(382))), data.aKR && fi.fp(new fs([new e9(L(325), function(a2) {
					return a5.a6.ke(0) && (bT.ed.jP(a2), a5.p6.aEd({
						action: 4,
						cE: data.cE
					})), !0
				}, 0, 0, 1).button]));
				fi.ox(a5.a6.oy("/wiki/clans"), "0.75em").style.marginTop = "0.8em", fd.push(fi)
			}(fd), fd.push(function() {
				var fi = new fj;
				{
					var e3, a9P, aL1, p8, p1, p3;
					fi.fk(L(323)), fi.ox(L(324) + data.aKy + "<br>" + L(282) + (data.aKz + 1) + " / " + data.aIK + "<br>" + L(283) + ux.aL0(data.aKz)), data.aKR && ((e3 = new eH({
						value: cs.buffer.data[157].value,
						eI: -1
					}, 1, void 0, function(a2) {
						cs.jD.jX(157, p1(a2.target.value))
					})).a2.style.marginTop = "0.6em", fi.fp(e3), a9P = new e9(L(138), function(a2) {
						return a2.textContent === L(138) ? (a2.textContent = L(139), e3.a2.readOnly = !0, aL1[0].eU(0), aL1[0].button.style.color = dK.oN, p1(cs.buffer.data[157].value)) : p3(), !0
					}), fi.fp(new fs([a9P.button])), aL1 = [new e9(L(325), function(a2) {
						return e3.a2.readOnly && a5.a6.ke(0) && (bT.ed.jP(a2), p3(), a5.p6.p7({
							action: 1,
							cE: data.cE,
							value: gf.hI(parseInt(cs.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], p8 = fi.jI(), p1 = function(gU) {
						return gU = bT.bU.hH(gU, 2, 3e4), p8.textContent = L(326, [gU - 1, gU, cs.buffer.data[105].value]), gU
					}, fi.fp(new fs([aL1[0].button])), p3 = function() {
						a9P.button.textContent = L(138), e3.a2.readOnly = !1, aL1[0].eU(1), aL1[0].button.style.color = dK.dM
					}, p1(cs.buffer.data[157].value))
				}
				return fi
			}()),
			function(fd) {
				var fi, aE6;
				data.aKR && !data.aLS || (0 === ca.id || data.aKR || data.aLS) && ((fi = new fj).fk("Patreon"), !data.aKR && data.aLT ? fi.fp(new fs([new e9(L(289), function() {
					a5.p6.aEd({
						action: 7,
						cE: data.cE
					}), data.aLT = 0, aH.eF(7)
				}).button])) : data.aLS ? (fi.ox(L(383, [(data.aLU / 100).toFixed(2)]) + "<br>" + L(384, [1 + data.aLV + " / " + data.aLW]) + "<br>" + L(385, [data.aLX ? L(386) : L(387)])), data.aKR || fi.fp(new fs([new e9(L(388),
					function() {
						a5.p6.aEd({
							action: 8,
							cE: data.cE
						}), data.aLS = 0, cs.jD.jX(160, 0), aH.eF(7)
					}).button]))) : (fi.ox(L(389), "0.75em").style.marginBottom = "0.3em", fi.ox("  • " + L(390), "0.75em").style.whiteSpace = "pre", fi.ox("  • " + L(391), "0.75em").style.whiteSpace = "pre", fi.ox("  • " + L(392),
						"0.75em").style.whiteSpace = "pre", fi.ox(L(393), "0.75em").style.marginTop = "1.0em", fi.ox(L(394), "0.75em").style.marginTop = "1.0em", fi.ox("<a href='" + uq.aLY +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aE6 = "https://www.patreon.com/oauth2/authorize?state=" + data.cE +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + a5.a6.zt() + "/", fi.ox(L(395), "0.75em").style.marginTop = "1.0em", fi.ox("<a href='" +
						aE6 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aKR || (fi.fp(new km), fi.fp(new fs([new e9(L(290), function() {
						a5.p6.aEd({
							action: 6,
							cE: data.cE
						}), data.aLT = 1, aH.eF(7)
					}).button])), fi.ox(L(396), "0.75em").style.marginTop = "0.75em")), fd.push(fi))
			}(fd), fd.push(function() {
				var fi = new fj,
					aKk = (fi.fk(L(317)), [L(318), L(319), L(320), L(321), "Scout", L(322)]),
					au = data.aKw;
				return fi.ox(L(316) + (data.aKx / 100).toFixed(2) + "<br>" + L(282) + (au + 1) + " / " + data.aIK + "<br>" + L(283) + aKk[au < 3 ? 0 : au < 20 ? 1 : au < 100 ? 2 : au < 500 ? 3 : au < 2e3 ? 4 : 5]), fi.ox(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", fi
			}()),
			function(fd) {
				var fi, a0E, aKp, eI, aKq;
				data.aKR || cs.aEl.get().length && ((fi = new fj).fk(L(302)), eI = 0, aKq = function() {
					var aKr = cs.aEl.get().length;
					aKp[0].eU(eI === aKr ? dK.a5r : dK.nP), aKp[1].eU(eI === aKr ? dK.a5r : dK.a69)
				}, aKp = [new e9(L(303), function() {
					aH.eF(8, void 0, new eS(25, {
						action: 0,
						cE: cs.aEl.get()[eI],
						yK: 0
					}))
				}, dK.a5r, 1), new e9(L(304), function() {
					cs.aEl.aKs(eI), a0E.a0F[eI].remove(), a0E.a0F.splice(eI, 1);
					for (var ce = eI; ce < a0E.a0F.length; ce++) a0E.a0F[ce].name = "" + ce;
					cs.aEl.get().length && (eI = Math.max(eI - 1, 0), a0E.a0F[eI].textContent = a0E.a0F[eI].textContent.replace("⚪", "🟢")), aKq()
				}, dK.a5r, 1)], aKq(), (a0E = new fn(cs.aEl.aKt(), function(ce) {
					eI = ce, aKq()
				})).a0F[0].style.marginTop = "0.5em", fi.fm(a0E), fi.fp(new fs([aKp[0].button])), fi.fp(new fs([aKp[1].button])), fd.push(fi))
			}(fd), aKS(fd, 0), fd
	}())
}

function vM() {
	var nI, b1, aG, aLa, aLb, aLc, canvas, fA, a4v, gX, aLd, aLe, aLf, aLg;
	this.aF = 0, this.b2 = 0, this.k = function() {
		aLc = aI.hU, aLe = "rgba(0,100,0,0.8)", aLf = "rgba(150,0,0,0.8)", a4v = aLd = !0, gX = bX.gM[aI.bS], this.resize()
	}, this.resize = function() {
		b1 = Math.floor((ca.cb.cc() ? .305 : .24) * aA.cd), this.b2 = Math.floor(.5 + .13 * b1), b1 = Math.floor(6 * this.b2), nI = bT.ed.ef(1, Math.floor(.8 * this.b2)), aLb = bT.ed.ef(1, Math.floor(.45 * this.b2)), aLg = Math.floor(.5 * this
			.b2), dC.kB.font = nI, aG = dO.gap, aLa = Math.floor(1 + .13 * this.b2), (canvas = document.createElement("canvas")).width = b1, canvas.height = this.b2, fA = canvas.getContext("2d", {
			alpha: !0
		}), bT.ed.textBaseline(fA, 1), bT.ed.textAlign(fA, 1), this.aLh()
	}, this.aLi = function() {
		return ca.cb.cc() && aA.b1 < 1.2 * aA.b2
	}, this.cf = function() {
		this.aLi() ? this.aF = aA.b1 - b1 - dO.gap : this.aF = Math.floor(aX.aLj() + (aA.b1 - aX.aLj() - be.b1 - b1) / 2 - .5 * dO.gap)
	}, this.iU = function() {
		a4v && (a4v = !1, this.aLh())
	}, this.aLh = function() {
		fA.font = nI, fA.clearRect(0, 0, b1, this.b2), fA.fillStyle = aLd ? aLe : aLf, fA.fillRect(0, 0, b1, this.b2), fA.fillStyle = dK.a5k;
		var ax = this.aLk(),
			aLm = (this.aLl(), fA.fillStyle = bX.gM[aI.bS] >= hO.pD(aI.bS) ? dK.lB : dK.dM, bT.bZ.ba(gX)),
			aLm = (fA.fillText(aLm, Math.floor(b1 / 2), aLg), fA.measureText(aLm).width),
			aLn = (fA.font = aLb, fA.fillStyle = 9 === ax ? dK.a6U : dK.dM, hO.aLo),
			aLp = "+" + aLn,
			fI = fA.measureText(aLp).width,
			aLq = Math.floor(this.b2 / 12),
			aLm = .5 * (b1 + aLm) + aLq;
		(aLm + fI + aLa <= b1 || 1e3 <= aLn && (aLp = "+" + Math.floor(aLn / 1e3) + "K", aLm + (fI = fA.measureText(aLp).width) + aLa <= b1)) && fA.fillText(aLp, Math.floor(aLm + .5 * fI), Math.floor(.3 * this.b2)), __fx.settings
			.displayTickNumber && fA.fillText(9 - ax, Math.floor(2 * aLa + aLq), Math.floor(.3 * this.b2)), fA.fillStyle = dK.dM, fA.fillRect(0, 0, b1, 1), fA.fillRect(0, 0, 1, this.b2), fA.fillRect(0, this.b2 - 1, b1, 1), fA.fillRect(b1 - 1, 0,
				1, this.b2)
	}, this.aLk = function() {
		var ax = aC.j7() % 100,
			oo = (ax = 9 - gf.gg(ax -= ax % 10, 10), Math.floor(ax * (this.b2 - aLa) / 9));
		return fA.fillRect(0, oo, aLa, this.b2 - oo), fA.fillRect(b1 - aLa, oo, aLa, this.b2 - oo), ax
	}, this.aLl = function() {
		fA.fillRect(aLa, this.b2 - aLa, Math.floor((b1 - 2 * aLa) * bX.gM[aI.bS] / aLc), aLa)
	}, this.j1 = function() {
		var fF = aI.bS;
		bT.bU.g2(fF) && (fF = bX.gM[fF] - bX.gW[fF], gX !== fF ? (aLc = nS(fF, aLc), aLd = gX < fF && 10 <= fF, gX = fF, a4v = !0) : aC.j7() % 10 == 9 && (a4v = !0))
	}, this.dP = function() {
		0 === bX.g3[aI.bS] || aI.g1 || 2 === bX.g4[aI.bS] || dQ.drawImage(canvas, this.aF, aG)
	}
}

function a3a() {
	this.aLr = function() {
		lo.iE(39), lo.mB(1, 0), lo.mB(6, 16), a5.kf.aLs(), a5.a6.send(0, lo.lj)
	}, this.aLt = function(m9) {
		lo.iE(127), lo.mB(1, 0), lo.mB(6, 17), k0.cA.a0M(cs.buffer.data[105].value, 5), k0.cA.a0M(cs.buffer.data[106].value, 15), a5.a6.send(m9, lo.lj)
	}, this.aEm = function() {
		lo.iE(97), lo.mB(1, 0), lo.mB(6, 18), k0.cA.a0M(cs.buffer.data[110].value, 15), a5.a6.send(0, lo.lj)
	}, this.aEe = function(aBO) {
		var en = aBO.bb.length;
		lo.iE(21 + 16 * en), lo.mB(1, 0), lo.mB(6, 29), lo.mB(6, aBO.action), lo.mB(8, en), c9.ly.a1G(aBO.bb), a5.a6.send(0, lo.lj)
	}, this.aLv = function(bu, colors, aLw, ki) {
		uo.k(), uo.mB(1, 0), uo.mB(6, 16), uo.mB(20, Math.min(bu, 1e6));
		for (var ce = 0; ce < 11; ce++)
			for (var jR = 0; jR < 3; jR++) uo.mB(8, colors[ce][jR]);
		bu = jG.data.a4h(aLw.trim());
		uo.mB(8, -1 === bu ? 255 : bu), c9.ys.ia(ki.trim().substring(0, 180), 8, uo), a5.a6.send(0, uo.aCz())
	}, this.aEd = function(data) {
		lo.iE(43), lo.mB(1, 0), lo.mB(6, 25), lo.mB(6, data.action), k0.cA.a0M(data.cE, 5), a5.a6.send(0, lo.lj)
	}, this.p7 = function(data) {
		lo.iE(75), lo.mB(1, 0), lo.mB(6, 27), lo.mB(6, data.action), k0.cA.a0M(data.cE, 5), lo.aDA(32, data.value), a5.a6.send(0, lo.lj)
	}
}

function wN() {
	function aLy(a2) {
		var jU, a2 = a2.target.files;
		a2 && 0 < a2.length && (a2 = a2[0], "json" === (jU = a2.name.split("."))[jU.length - 1].toLowerCase()) && ((jU = new FileReader).onload = aM6, jU.readAsText(a2))
	}

	function aM6(a2) {
		var aM9;
		aI.aJ || (a2 = JSON.parse(a2.target.result), aM9 = aI.data = new hl, aMA(a2, aM9, "mapType", 0, 2), aMA(a2, aM9, "mapProceduralIndex", 0, 255), aMA(a2, aM9, "mapRealisticIndex", 0, 255), aMA(a2, aM9, "mapSeed", 0, 16383), function(aM8, aM9,
				xF, max) {
				aM8 = aM8[xF];
				aM9[xF] = aMG(aM8) ? aM8.slice(0, max) : aM9[xF]
			}(a2, aM9, "mapName", 20), function(aM8, aM9, xF) {
				var m5;
				2 === aM9.mapType && (!aMG(aM8 = aM8[xF]) || aM8.length <= 20 ? aM9.mapType = 0 : ((m5 = new Image).onload = function() {
					eN.eO.m6(m5, 1), m5.onload = null, m5 = null
				}, m5.src = aM8))
			}(a2, aM9, "canvas"), aMA(a2, aM9, "passableWater", 0, 1), aMA(a2, aM9, "passableMountains", 0, 1), aMA(a2, aM9, "playerCount", 1, 512), aMA(a2, aM9, "humanCount", 1, 1), aMA(a2, aM9, "selectedPlayer", 0, 0), aMA(a2, aM9, "gameMode",
				0, 1), aMA(a2, aM9, "playerMode", 0, 0), aMA(a2, aM9, "battleRoyaleMode", 0, 0), aMA(a2, aM9, "numberTeams", 0, 8), aMA(a2, aM9, "isZombieMode", 0, 0), aMA(a2, aM9, "isContest", 0, 0), aMA(a2, aM9, "isReplay", 0, 0), aMD(a2, aM9,
				"elo", 16, 2, 16383), aMA(a2, aM9, "colorsType", 0, 1), aMA(a2, aM9, "colorsPersonalized", 0, 1), aMD(a2, aM9, "colorsData", 32, 512, 262143), aMA(a2, aM9, "selectableColor", 0, 1), aMD(a2, aM9, "teamPlayerCount", 16, 9, 512),
			aMA(a2, aM9, "neutralBots", 0, 1), aMA(a2, aM9, "botDifficultyType", 0, 3), aMA(a2, aM9, "botDifficultyValue", 0, 15), aMD(a2, aM9, "botDifficultyTeam", 8, 9, 15), aMD(a2, aM9, "botDifficultyData", 8, 512, 15), aMA(a2, aM9,
				"spawningType", 0, 2), aMA(a2, aM9, "spawningSeed", 0, 16383), aMD(a2, aM9, "spawningData", 16, 1024, 4095), aMA(a2, aM9, "selectableSpawn", 0, 1), aMA(a2, aM9, "playerNamesType", 0, 2),
			function(aM8, aM9, xF, size, max) {
				var aJZ = aM8[xF];
				if (Array.isArray(aJZ)) {
					for (var aJc = new Array(size), en = Math.min(aJZ.length, size), ce = 0; ce < en; ce++) aJc[ce] = aMG(aJZ[ce]) ? aJZ[ce].slice(0, max) : "";
					aJc.fill("", en), aM9[xF] = aJc
				}
			}(a2, aM9, "playerNamesData", 512, 20), aMA(a2, aM9, "selectableName", 0, 1), aMA(a2, aM9, "aIncomeType", 0, 2), aMA(a2, aM9, "aIncomeValue", 0, 255), aMD(a2, aM9, "aIncomeData", 8, 512, 255), aMA(a2, aM9, "tIncomeType", 0, 2), aMA(
				a2, aM9, "tIncomeValue", 0, 255), aMD(a2, aM9, "tIncomeData", 8, 512, 255), aMA(a2, aM9, "iIncomeType", 0, 2), aMA(a2, aM9, "iIncomeValue", 0, 255), aMD(a2, aM9, "iIncomeData", 8, 512, 255), aMA(a2, aM9, "sResourcesType", 0, 2),
			aMA(a2, aM9, "sResourcesValue", 0, 2047), aMD(a2, aM9, "sResourcesData", 16, 512, 2047), aH.jC(), aH.a6.rD[0] = 0, aH.eF(19))
	}

	function aMA(aM8, aM9, xF, min, max) {
		aM8 = aM8[xF];
		aM9[xF] = "number" == typeof aM8 && min <= aM8 && aM8 <= max ? Math.floor(aM8) : aM9[xF]
	}

	function aMG(bb) {
		return "string" == typeof bb
	}

	function aMD(aM8, aM9, xF, aMH, size, max) {
		var aJZ = aM8[xF];
		if (Array.isArray(aJZ)) {
			for (var aJc = new(8 === aMH ? Uint8Array : 16 === aMH ? Uint16Array : Uint32Array)(size), en = Math.min(aJZ.length, size), ce = 0; ce < en; ce++) aJc[ce] = gf.hI(aJZ[ce], 0, max);
			aM9[xF] = aJc
		}
	}
	this.aLx = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aLy, input.click()
	}, this.aLz = function() {
		for (var aM2, aFV, bd = aI.data, keys = Object.keys(bd), aM0 = {}, ce = 0; ce < keys.length; ce++) {
			var key = keys[ce];
			bd[key] instanceof Uint8Array || bd[key] instanceof Uint16Array || bd[key] instanceof Uint32Array ? aM0[key] = Array.from(bd[key]) : aM0[key] = bd[key]
		}
		aM0.canvas = 2 === aM0.mapType && aM0.canvas ? aM0.canvas.toDataURL() : null, aM2 = aM0, aM2 = JSON.stringify(aM2, null, 2), aM2 = new Blob([aM2], {
			type: "application/json"
		}), (aFV = document.createElement("a")).href = URL.createObjectURL(aM2), aFV.download = "tt_scenario.json", aFV.click()
	}
}

function vv() {
	var aMI = -1,
		aMJ = null,
		ty = -1,
		aMK = 4;

	function aMM() {
		aS.a29() ? i8.render() : i8.a2B()
	}

	function aMS(ax, gy) {
		var au = ax >> 16,
			bi = ax >> 8 & 255,
			ax = 255 & ax,
			aMT = 255 - gy,
			aMT = (aMT < au && aMT < bi && aMT < ax && (gy = -gy), aMI >> 7),
			aMV = aMI >> 5 & 3,
			aMW = aMI >> 3 & 3;
		return (Math.max(Math.min(au + gy, 252 + aMT), aMT) << 16) + (Math.max(Math.min(bi + gy, 252 + aMV), aMV) << 8) + Math.max(Math.min(ax + gy, 252 + aMW), aMW)
	}

	function aML() {
		return -1 !== aMI && (i4.a7T(aMI, aMJ[0], aMJ[1], aMJ[2]), aMR(aMI), aMI = -1)
	}

	function aMR(player) {
		aC.ah = !0;
		for (var sj = bX.sj[player], sk = bX.sk[player], sl = bX.sl[player], sm = bX.sm[player], aG = sk; aG <= sm; aG++)
			for (var aF = sj; aF <= sl; aF++) {
				var d5 = i4.a30(aF, aG);
				i4.tq(player, d5) && (i4.a7Z(d5) ? i4.a7f(d5, player) : i4.a31(d5) ? i4.a1w(d5, player) : i4.a32(d5, player))
			}
	}
	this.k = function() {
		aMJ = null, ty = aMI = -1, aMK = gf.hI(Math.floor(cs.buffer.data[16].value), 0, 16)
	}, this.j1 = function(oj) {
		if (cs.buffer.data[15].value && 0 !== aMK && (oj || !aU.ac())) {
			var oj = i9.su(aU.i),
				u2 = i9.sw(aU.j);
			if (i9.u3(oj, u2)) {
				oj = i9.u5(oj, u2), u2 = i9.lO(oj);
				if (ty === u2)
					if (i4.lP(u2)) {
						if (aMI === i4.l9(u2)) return
					} else if (-1 === aMI) return;
				! function(d5) {
					i4.lP(d5) ? (d5 = i4.l9(d5)) !== aMI && (aML(), function(player) {
						aMI = player, aMJ = i4.a7X(player);
						var aMP = function() {
							var bx = aMJ,
								qu = aMK << 2,
								qv = qu << 1;
							return [aMS(bx[0], qu), aMS(bx[1], qv), aMS(bx[2], qv)]
						}();
						i4.a7T(player, aMP[0], aMP[1], aMP[2]), aMR(player)
					}(d5), aMM()) : aML() && aMM()
				}(ty = u2)
			} else aML() && aMM()
		}
	}
}

function aMX() {
	function aMY(ce, type, rR, eX) {
		cs.buffer.data.push({
			eI: ce,
			type: type || 0,
			value: rR || 0,
			rR: rR || 0,
			eX: eX || 0
		})
	}

	function aMZ(ce, type, rR, eX) {
		cs.buffer.data.push({
			eI: ce,
			type: type,
			value: rR || "",
			rR: rR || "",
			eX: eX || 0
		})
	}

	function aMa(cu) {
		for (var ce = cs.buffer.data.length; ce < cu; ce++) cs.buffer.data.push(null)
	}
	this.data = [], this.k = function() {
		aMY(0, 1, 0, 5), aMY(1, 1, 1), aMY(2, 0), aMZ(3, 2), aMY(4, 1), aMZ(5, 2, "system-ui", 2), aMY(6, 0), aMY(7, 0, 0), aMY(8, 0), aMY(9, 1, 1), aMY(10, 1), aMY(11, 1, 1), aMZ(12, 2, navigator.language), aMY(13), aMY(14), aMY(15, 0, 1), aMY(
				16, 0, 4), aMa(100), aMZ(100, 2), aMZ(101, 2), aMZ(102, 2), aMZ(103, 2), aMZ(104, 2), aMZ(105, 2), aMZ(106, 2), aMY(107), aMY(108), aMY(109), aMZ(110, 2), aMY(111), aMY(112), aMY(113), aMZ(114, 2), aMY(115), aMZ(116, 2), aMY(117,
				1), aMZ(118, 2, "", 2), aMY(119, 1, 0, 1), aMZ(120, 2), aMY(121, 1, ~~(262144 * Math.random())), aMZ(122, 2, "Player " + Math.floor(1e3 * Math.random())), aMY(123), aMZ(124), aMY(125, 1), aMZ(126, 2), aMY(127, 0, 1), aMY(128),
			aMY(129), aMY(130), aMY(131), aMY(132), aMZ(133, 2), aMY(134, 0, 5), aMZ(135, 2), aMZ(136, 2), aMY(137), aMY(138), aMY(139), aMY(140), aMY(141), aMY(142), aMY(143), aMY(144), aMZ(145, 2), aMY(146), aMY(147), aMZ(148, 2), aMY(149),
			aMY(150, 0, 1), aMZ(151, 2), aMY(152, 0, 5), aMY(153, 1), aMY(154, 1), aMZ(155, 2), aMZ(156, 2), aMY(157), aMY(158), aMY(159), aMY(160), aMZ(161, 2), aMY(162, 0, 1024), aMZ(163, 2, "0,0,0"), aMZ(164, 2, "100,100,100"), aMZ(165, 2,
				"30,30,30"), aMZ(166, 2, "70,70,70"), aMZ(167, 2, "100,100,100"), aMZ(168, 2, "85,85,85"), aMZ(169, 2, "100,100,100");
		for (var ce = 0; ce < 4; ce++) aMZ(170 + ce, 2, "255,255,255");
		aMZ(174, 2), aMZ(175, 2), aMY(176, 0, 200), aMa(180), aMY(180, 0), aMY(181, 0), aMY(182, 0, 1023), aMZ(183, 2)
	}, this.jX = function(eI, value) {
		this.data[eI].value = value
	}, this.aAC = function(eI, value) {
		this.jX(eI, value);
		var value = String(value),
			en = value.length;
		5e4 < en ? console.log("storage value too large: index " + eI + " size " + en) : (cs.fx.save(eI, value), cs.fx.save(eI, String(this.data[eI].eX), !0))
	}, this.aAA = function(eI) {
		return Number(this.data[eI].value)
	}, this.aMb = function(eI) {
		return String(this.data[eI].value)
	}
}

function aMc() {
	var tQ = 32,
		tR = new Array(2);

	function k7(ax) {
		var aF, aG, kz, cy, cx, fE = tQ,
			ni = bT.ed.k7(fE, fE),
			t1 = bT.ed.getContext(ni, !0),
			aB0 = bT.ed.getImageData(t1, fE, fE),
			kH = aB0.data,
			ju = (fE >> 1) - .5,
			xH = Math.sqrt(ju * ju);
		for (kH.fill(255), aG = 0; aG < fE; aG++)
			for (aF = 0; aF < fE; aF++) cx = aF - ju, cy = aG - ju, kz = 4 * (aG * fE + aF), cx = 714 * (xH - Math.sqrt(cx * cx + cy * cy)) / xH, kH[2 + kz] = ax, kH[3 + kz] = 255 < cx ? 0 : cx;
		return t1.putImageData(aB0, 0, 0), ni
	}
	this.aMd = -1, this.k = function() {
		this.aMd = -1, tR[0] || (tR[0] = k7(255), tR[1] = k7(0))
	}, this.aCA = function(t1, d5, aF, aG, au, ce) {
		bT.bU.g2(aI.bS) && (t1.setTransform(d5 *= 4 / 3 * .625, 0, 0, d5, aF - (au *= 4 / 3), aG - au), t1.drawImage(tR[+(f4.a6.u9[ce] === this.aMd)], 0, 0))
	}
}

function aMe() {
	var fL, fM, fd;

	function aMh() {
		var lu;
		1 === aI.data.gameMode ? (aI.data.teamPlayerCount || (aI.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aI.eQ.ht()), lu = bT.fY.aMj(aI.data.teamPlayerCount, 0), aI.data.numberTeams = lu) : (2 === aI.data
			.botDifficultyType && (aI.data.botDifficultyType = 0), 1 === aI.data.spawningType && (aI.data.spawningType = 0))
	}

	function fQ() {
		1 !== aI.data.gameMode && (aI.data.teamPlayerCount = null), aMk(), aI.data.canvas = null, aH.eF(5, 5)
	}

	function aMk() {
		eN.iX.k(), cs.jD.jX(156, eN.iZ.ia())
	}

	function aMf() {
		aI.data.isReplay = 0, aMk(), aI.eQ.aMl(), aK.rf(), aI.eQ.rg(), aI.data.canvas = 2 === aI.data.mapType ? dC.f0 : null, aI.hp(), aI.hn = 1
	}

	function aMz() {
		aMh();
		for (var jU = [aMo(), aMp(), aMq()], ce = 3; ce < 6; ce++) aH.removeChild(fM.aEg, fM.aN0[ce].r6), fM.aN0[ce] = jU[ce - 3], fM.aEg.appendChild(fM.aN0[ce].r6);
		fM.resize()
	}

	function aMo() {
		var aN1, fi = new fj;
		return fi.fk(L(159)), aN1 = 0 === aI.data.gameMode ? [L(8), L(10)][aI.data.colorsType] : aI.data.numberTeams + " Team" + (1 === aI.data.numberTeams ? "" : "s"), fi.ox(aN1), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(21)
		}).button])), fi
	}

	function aMp() {
		var fi = new fj,
			jU = (fi.fk(L(92)), [L(174) + ": " + iD.o6[aI.data.botDifficultyValue], L(400), L(401), L(10)]);
		return fi.ox(jU[aI.data.botDifficultyType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(25)
		}).button])), fi
	}

	function aMq() {
		var fi = new fj,
			jU = (fi.fk("Spawning"), [L(8), L(9), L(10)]);
		return fi.ox(jU[aI.data.spawningType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(24)
		}).button])), fi
	}
	this.show = function() {
		fL.show(), this.resize(), fL.fS.scrollTop = aH.a6.rD[0]
	}, this.c1 = function() {
		aH.a6.rD[0] = fL.fS.scrollTop, fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP("🔧 " + L(1), [new e9("⬅️ " + L(6), fQ), new e9(L(397), aMf)]), aMh(), aI.data.canvas || (2 === aI.data.mapType ? aI.data.canvas = dC.f0 : 1 === aI.data.mapType ? aI.data.canvas = dC.a9V(dC.a9U(aI.data), 0).f0 : (aI.data
		.mapType = 0, aI.data.passableWater = aI.data.passableMountains = 1, aI.data.canvas = dC.a9V(dC.a9U(aI.data), aI.data.mapSeed).f0)), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj,
			ni = (fi.fk(L(175)), aI.data.canvas);
		ni.style.width = "100%", fi.fp({
			a2: ni
		}), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(20)
		}).button])), fd.push(fi)
	}(fd = []), function(fd) {
		var fi = new fj;
		fi.fk(L(160)), fi.fp(new eH({
			eI: -1,
			value: aI.data.playerCount
		}, 1, 0, function(a2) {
			var playerCount = gf.hI(Math.floor(a2.target.value), 1, 512);
			a2.target.value = aI.data.playerCount = playerCount, 1 === aI.data.gameMode && (a2 = bT.fY.aMj(aI.data.teamPlayerCount, 0), aI.eQ.ht(), bT.fY.aMj(aI.data.teamPlayerCount, 0) !== a2) && aMz()
		})), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj;
		fi.fk(L(399)), fi.fm(new fn({
			fl: ["Battle Royale", "Teams"],
			value: aI.data.gameMode
		}, function(eI) {
			aI.data.gameMode !== eI && (1 === (aI.data.gameMode = eI) && (aI.data.colorsData || (aI.data.colorsData = new Uint32Array(1)), aI.data.colorsData[0] = 258049), aMz())
		})), fd.push(fi)
	}(fd), fd.push(aMo()), fd.push(aMp()), fd.push(aMq()), function(fd) {
		var fi = new fj,
			jU = (fi.fk(L(64)), [L(65), L(66), L(10)]);
		fi.ox(jU[aI.data.playerNamesType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(23)
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj,
			jU = (fi.fk(L(29)), [L(173), L(174) + ": " + aI.data.aIncomeValue, L(10)]);
		fi.ox(jU[aI.data.aIncomeType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(22)
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj,
			jU = (fi.fk(L(20)), [L(173), L(174) + ": " + aI.data.tIncomeValue, L(10)]);
		fi.ox(jU[aI.data.tIncomeType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(26)
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj,
			jU = (fi.fk(L(21)), [L(173), L(174) + ": " + aI.data.iIncomeValue, L(10)]);
		fi.ox(jU[aI.data.iIncomeType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(27)
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj,
			jU = (fi.fk(L(402)), [L(173), L(174) + ": " + aI.data.sResourcesValue, L(10)]);
		fi.ox(jU[aI.data.sResourcesType]), fi.fp(new fs([new e9(L(398), function() {
			aH.eF(28)
		}).button])), fd.push(fi)
	}(fd), function(fd) {
		var fi = new fj;
		fi.fk(L(403)), fi.fp(new fs([new e9(L(404), function() {
			aH.jC(), aI.eQ.eR(), aH.a6.rD[0] = 0, aH.eF(19)
		}).button])), fi.fp(new fs([new e9(L(405), function() {
			uw.aLx()
		}).button])), fi.fp(new fs([new e9(L(406), function() {
			return uw.aLz(), !0
		}).button])), fd.push(fi)
	}(fd), fd))
}

function cP() {
	this.j1 = function(lj) {
		var id, gw, cu;
		for (jz.k(lj), jz.eI += 2, cu = 8 * jz.size; jz.eI + 8 <= cu;) id = jz.k6(4), gw = jz.k6(9), 0 === id ? this.aN2(id, gw, jz.k6(22)) : 1 === id ? this.aN2(id, gw, jz.k6(10), jz.k6(10)) : 2 === id ? this.aN2(id, gw, jz.k6(10), jz.k6(9)) :
			3 === id ? this.aN2(id, gw, jz.k6(10), jz.k6(27)) : 4 === id ? this.aN2(id, gw, jz.k6(10), jz.k6(16)) : 5 === id || 6 === id ? this.aN2(id, gw, jz.k6(10)) : 7 === id ? this.aN2(id, gw, jz.k6(1)) : 10 === id ? this.aN2(id, gw, jz.k6(
				20), jz.k6(22)) : this.aN2(id, gw)
	}, this.i1 = [], this.aN3 = function() {
		for (var aN5 = 0, aN6 = 0, aN7 = 0, aN8 = 0, aN9 = 0, aNA = 0, ce = 0; ce < 512; ce++) aN5 += bX.g3[ce], aN6 += bX.gD[ce], aN7 += bX.gM[ce], aN8 += f4.a6.pl[ce];
		aN9 += f4.a6.kr, aNA += gC.gB, this.i1.push(aN7 % 1073741824 * 4 + (aN5 + aN6 + aN8 + aN9 + aNA) % 4)
	}, this.aN2 = function(id, gw, gx, gz) {
		0 === id ? du.cM.a8R(gw, gx) : 1 === id ? du.cM.a8S(gw, gx, gz) : 2 === id ? du.cM.gn(gw, gx, gz) : 3 === id ? du.cM.a8T(gw, gx, gz) : 4 === id ? du.cM.a8U(gw, gx, gz) : 5 === id ? du.cM.a8X(gw, gx) : 6 === id ? du.cM.a8Y(gw, gx) : 7 ===
			id ? du.cM.a8Z(gw, gx) : 8 === id ? du.cM.a8a(gw) : 9 === id ? du.cM.aGV(gw) : 10 === id && du.cM.a8b(gw, gx >> 10, gz, gx % 1024)
	}
}

function vq() {
	var aNB = 0,
		aNC = new Uint16Array(64);

	function aNE(aNH) {
		aNB -= 2;
		for (var ce = aNH; ce < aNB; ce += 2) aNC[ce] = aNC[ce + 2], aNC[ce + 1] = aNC[ce + 3]
	}
	this.k = function() {
		aNB = 0
	}, this.j1 = function() {
		var ce, g7, gb;
		if (0 !== aNB)
			if (0 === bX.g3[aI.bS]) aNB = 0;
			else if (0 === iN.a1g(aI.bS)) aNB = 0;
		else
			for (ce = aNB - 2; 0 <= ce; ce -= 2)(g7 = aNC[ce]) < aI.fo && 0 === bX.g3[g7] ? aNE(ce) : (gb = aNC[ce + 1], (g7 >= aI.fo && h7.aNF(aI.bS) || g7 < aI.fo && h7.aNG(aI.bS, g7)) && (du.cJ.a8S(gb, g7), aNE(ce)))
	}, this.aNI = function(g7, gb) {
		! function(g7, gb) {
			for (var ce = 0; ce < aNB; ce += 2)
				if (aNC[ce] === g7) return aNC[ce + 1] = Math.min(aNC[ce + 1] + gb, 1023), 1;
			return
		}(g7, gb) && 64 !== aNB && (aNC[aNB] = g7, aNC[aNB + 1] = gb, aNB += 2)
	}
}

function vO() {
	var canvas, fA, aF, aG, aJD, aNK, gap, aNL, fontSize, aNM, a0g, aNN, aNO, aNP, aNQ, aNR, aNS, aNT;

	function aNX() {
		fA.clearRect(0, 0, be.b1, be.b2), fA.fillStyle = dK.fB, fA.fillRect(0, 0, be.b1, be.b2), fA.fillStyle = dK.a5w, d5 = 0 < aNR ? aNR : aNO[4] / 1e4, fA.fillRect(0, be.b2 - aJD - 1, Math.floor(d5 * be.b1), aJD), fA.fillStyle = dK.dM, fA
			.fillRect(0, 0, be.b1, 1), fA.fillRect(0, 0, 1, be.b2), fA.fillRect(be.b1 - 1, 0, 1, be.b2), fA.fillRect(0, be.b2 - 1, be.b1, 1), fA.fillRect(0, be.b2 - aJD - 1, be.b1, 1);
		for (var d5, aNY, mf = 0, ce = 0; ce < aNN.length; ce++) aNP[ce] ? (bT.ed.textAlign(fA, 0), aNY = Math.floor((aNK - aJD + 2 * aNL) * (ce - mf + 1) / (aNN.length + 1) - .7 * aNL), fA.fillText(aNN[ce], gap, aNY), bT.ed.textAlign(fA, 2), 5 ===
			ce && 0 !== bX.g3[aI.bS] && bX.gM[aI.bS] >= hO.pD(aI.bS) ? (fA.fillStyle = dK.a6M, fA.fillText(aNV(ce), be.b1 - gap, aNY), fA.fillStyle = dK.dM) : fA.fillText(aNV(ce), be.b1 - gap, aNY)) : mf++
	}

	function aNV(ce) {
		return ce < 3 ? aNO[ce].toString() : 3 === ce || 4 === ce || 5 === ce ? bT.bZ.oe(aNO[ce] / 100, 2) : ce < 7 ? bT.bZ.ba(aNO[ce]) : ce === 7 ? be.a16(aNO[7]) : ce === 8 ? __fx.utils.getMaxTroops(bX.gD, aI.bS) : __fx.utils.getDensity(aI.bS)
	}

	function aNU() {
		bX.gD[aI.bS] !== aNO[6] && (aNO[6] = bX.gD[aI.bS], aNM++)
	}
	this.k = function() {
		aNR = aNS = 0, (a0g = new Array(8))[0] = L(407), a0g[1] = aI.df ? L(186) : L(408), a0g[2] = L(409), a0g[3] = L(410), a0g[4] = L(212), a0g[5] = L(164, 0, "Interest"), a0g[6] = L(163), a0g[7] = L(411),
			a0g.push("Max Troops", "Density"), // add a0g
			(aNN = new Array(a0g.length)).fill(""), (aNO = new Array(a0g.length))[0] = aI.df ? 0 : aI.gN, aNO[1] = aI.df ? gC.gB : aI.hX, aNO[2] = aI.hY, aNO[3] = 0, aNO[4] = gf.gg(1e4 * bX.gD[0], Math.max(aI.hG, 1)), aNO[5] = 0 === aI.data
			.iIncomeType ? 700 : 1 === aI.data.iIncomeType ? gf.gg(700 * aI.data.iIncomeValue, 64) : gf.gg(700 * aI.data.iIncomeData[aI.bS], 64), aNO[6] = 0, aNU(), aNO[7] = 0, aNQ = aNV(6), (aNP = new Array(a0g.length)).fill(!0), aNT = 0, aNT =
			aI.df ? (aNP[0] = !1, aNP[2] = !1, aNP[3] = !1, 3) : (aNP[3] = !1, 1), aNM = 0, this.resize()
	}, this.resize = function() {
		this.b1 = Math.floor((ca.cb.cc() ? .1646 : .126) * 1.25 * aA.cd), this.b2 = Math.floor(1.18 * this.b1), aJD = Math.floor(.04 * this.b1), gap = Math.floor(.035 * this.b1), aNL = .04 * this.b1, aNK = this.b2, this.b2 -= Math.floor(aNT * (
			this.b2 - 2 * aJD) / a0g.length), fontSize = Math.floor(.7 * (aNK - aJD) / a0g.length);
		var nI = bT.ed.ef(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.b1, canvas.height = this.b2,
			function(nI, b1) {
				for (var ce = 0; ce < aNN.length; ce++) aNN[ce] = bT.fA.o1(a0g[ce], nI, b1)
			}((fA = canvas.getContext("2d", {
				alpha: !0
			})).font = nI, .575 * this.b1), bT.ed.textBaseline(fA, 1), fA.lineWidth = 1, this.ue(), this.cf(), f7.cf(), aNX()
	}, this.cf = function() {
		aF = aA.b1 - this.b1 - dO.gap
	}, this.a7v = function() {
		aG = dO.gap
	}, this.ue = function() {
		aG = dO.gap + (f7.aLi() && 0 !== bX.g3[aI.bS] && !aI.g1 ? f7.b2 + dO.gap : 0)
	}, this.iU = function(oj) {
		(oj || 100 <= aNM) && (aNM = 0, aNX())
	}, this.bf = function() {
		return aNO[7]
	}, this.a16 = function(value) {
		var ju = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ju) / 1e3);
		return value < 10 ? ju + ":0" + value : ju + ":" + value
	}, this.j1 = function() {
		var il, per;
		aNP[0] && aI.hW - aI.hY !== aNO[0] && (aNO[0] = aI.hW - aI.hY, aNM++), gC.gB - aNO[0] !== aNO[1] && (aNO[1] = gC.gB - aNO[0], aNM++), this.jZ(), (il = hO.j3(aI.bS)) !== aNO[5] && (aNO[5] = il, aNM++), aNU(), aNO[7] += aC.qL, il = aNV(7),
			aNQ !== il && (aNQ = il, aNM += 100), il = aI.dm ? f5.hF() : bX.gD[gE[0]], per = gf.gg(1e4 * il, Math.max(aI.hG, 1)), aNO[3] = il, aNO[4] !== per && (aNM++, aNO[4] = per), 8 === aI.dw && function() {
				for (var ce = 0; ce < 2; ce++)
					if (!bT.bU.g2(ce)) return dj.lZ.aJO(), 1;
				return
			}() || aNO[3] < aI.hG || ! function() {
				for (var ce = gC.gB - 1; 0 <= ce; ce--)
					if (0 < bX.lT[gC.gJ[ce]].length) return;
				return 1
			}() || f4.c3.wm().length || aI.dm && f5.hF(1) < aI.hG || dj.lZ.aJO()
	}, this.jZ = function() {
		aNP[2] && aI.hY !== aNO[2] && (aNO[2] = aI.hY, aNM += 2 === aI.aJ ? 100 : 1)
	}, this.wf = function() {
		return aNO[3] === aI.hG
	}, this.qJ = function(ce) {
		var bi, aNh, mf;
		return 2 !== aI.aJ && (ce % 2 == 1 && (aX.iU(1, 1), aC.ah = !0), ce === aI.hh ? (aNR = 0, aNX(), !1) : (-1 !== ce || 0 !== aNS) && (aNh = aNR, aNR = aI.bG ? ce / aI.hh : (mf = performance.now(), 0 <= ce && (bi = mf - 392 * ce, aNS = 0 ===
			ce || bi < aNS ? bi : aNS), 1 < (aNR = (mf - aNS) / (392 * aI.hh)) ? 1 : aNR), aNX(), aNR !== aNh))
	}, this.dP = function() {
		dQ.drawImage(canvas, aF, aG)
	}
}

function a6k() {
	var aNi = [L(412), L(413), L(414), L(415), L(416), L(417), L(418)],
		aNj = [100, 60, 30, 15, 6, 1],
		aNk = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		aNl = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		aNm = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.yJ = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.yR = function(id, au, eI) {
		au = this.aNn(au);
		return +(aNk[au][id] > eI)
	}, this.aNn = function(au) {
		for (var ce = 0; ce < aNj.length; ce++)
			if (aNj[ce] <= au) return ce;
		return aNj.length
	}, this.aL0 = function(au) {
		return aNi[this.aNn(au)]
	}, this.aNo = function(id, aAd) {
		return aNl[id].replace(new RegExp("x", "g"), aAd)
	}, this.aNp = function(id, aAd) {
		return aNm[id].replace(new RegExp("x", "g"), aAd)
	}, this.a9o = function(id, aNq) {
		return this.yJ[5][id]
	}
}

function vt() {
	this.aNr = [], this.aNs = [], this.k = function() {
		this.aNr = [], this.aNs = []
	}, this.j1 = function() {
		0 <= this.aNr.length && this.aNt(this.aNr), 0 <= this.aNs.length && this.aNt(this.aNs)
	}, this.aNt = function(jU) {
		for (var gv = -1, ce = jU.length - 1; 0 <= ce; ce--)
			if (jU[ce].aD--, jU[ce].aD <= 0) {
				gv = ce;
				break
			} for (ce = gv; 0 <= ce; ce--) jU.shift()
	}, this.aNu = function(id, n8, aNv) {
		return this.aNw(this.aNr, id, n8, aNv)
	}, this.aNx = function(id, n8, aNv) {
		return this.aNw(this.aNs, id, n8, aNv)
	}, this.aNw = function(jU, id, n8, aNv) {
		return ! function(jU, id, n8) {
			var ce, kU;
			for (ce = n8.length - 1; 0 <= ce; ce--)
				for (kU = jU.length - 1; 0 <= kU; kU--)
					if (jU[kU].player === n8[ce] && id === jU[kU].id) return 1;
			return
		}(jU, id, n8) && (aNv && function(jU, id, n8) {
			var ce;
			for (ce = n8.length - 1; 0 <= ce; ce--) jU.push({
				player: n8[ce],
				id: id,
				aD: 384
			})
		}(jU, id, n8), !0)
	}
}

function uG(a20, uC) {
	var r6 = document.createElement("div");
	this.aEg = r6, this.resize = function() {
		r6.style.padding = bT.ed.a23(dO.yh), r6.style.lineHeight = bT.ed.a23(bT.ed.aDy(.035))
	}, a20.style.overflowX = "hidden", a20.style.overflowY = "auto", r6.innerHTML = uC, a20.appendChild(r6)
}

function aAs() {
	var aO0 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aO1 = function(aD) {
		var aO3, bb = new Date(aD.getTime() - 6e4 * aD.getTimezoneOffset()).toUTCString();
		return bb.length < 12 || (bb = bb.substring(5, bb.length), 0 === (aD = aD.getTimezoneOffset())) ? bb : (aO3 = (aD < 0 ? "+" : "-") + gf.gg(Math.abs(aD), 60), 0 == (aD = Math.abs(aD) % 60) ? bb + aO3 : bb + aO3 + ":" + (aD < 10 ? "0" :
			"") + aD)
	}, this.aO4 = function(aD) {
		var bb = aD.toUTCString();
		return bb.length < 12 ? bb : function(aD) {
			return aO0[aD.getUTCDay()]
		}(aD) + ", " + bb.substring(5, bb.length - 4)
	}
}

function hm() {
	this.ht = function() {
		var aO6 = aI.data;
		bT.fY.aO7(aO6.teamPlayerCount, aO6.playerCount), aO6.numberTeams = bT.fY.aMj(aO6.teamPlayerCount, 0), aO6.teamPlayerCount[0] && aO6.teamPlayerCount[7] && (aO6.teamPlayerCount[7] = 0, this.ht())
	}, this.rg = function() {
		var aO6 = aI.data;
		aO6.mapType < 2 ? dC.iE(dC.a9U(aO6), aO6.mapSeed) : dC.aO8(aO6.canvas)
	}, this.aMl = function() {
		var aO6 = aI.data;
		aO6.colorsData || (aO6.colorsData = new Uint32Array(1)), 0 === aO6.gameMode && (aO6.colorsData[0] = cs.a6.aGI()), aO6.selectableName && (aO6.playerNamesData || (aO6.playerNamesData = new Array(1)), aO6.playerNamesData[0] = cs.buffer.data[
			122].value), aO6.a4P = new Uint32Array(1), aO6.a4P[0] = k0.cA.a1O(cs.buffer.data[105].value, 5)
	}, this.eR = function() {
		aI.data = new hl
	}
}

function aO9() {
	var aOA, aOB = 8,
		aOC = null;

	function aOH(kH, kz, eI) {
		kz *= 4;
		kH[kz] = 255, kH[1 + kz] = 255, kH[2 + kz] = eI, kH[3 + kz] = 255
	}

	function aOJ(t1, aG0) {
		var aF, aG, cx, kz, aOK, aOL, fE = aOB,
			aB0 = bT.ed.getImageData(t1, fE, fE),
			kH = aB0.data,
			ju = (fE >> 1) - .5,
			aON = bT.fY.aOO(aG0, .5);
		for (bT.fY.aOP(aG0, aON, 300) || bT.fY.aOQ(aG0, 100), aG = 0; aG < fE; aG++)
			for (aF = 0; aF < fE; aF++) aOL = (fE - 1.5) * (fE - 1.5) / 4, kH[kz = 4 * (aG * fE + aF)] = (aOK = (cx = (cx = aF - ju) * cx + (cx = aG - ju) * cx) <= (fE - 4.5) * (fE - 4.5) / 4 ? aON : aG0)[0], kH[1 + kz] = aOK[1], kH[2 + kz] = aOK[2],
				kH[3 + kz] = aOL < cx ? 0 : 255;
		t1.putImageData(aB0, 0, 0)
	}
	this.k = function() {
		var eI, fE, ni, t1, aB0, kH;
		(aOA = aOA || new Array(aI.fo)).fill(null), eI = 255, fE = aOB + 4, ni = bT.ed.k7(fE, fE), t1 = bT.ed.getContext(ni, !0), aB0 = bT.ed.getImageData(t1, fE, fE), aOH(kH = aB0.data, fE + 1, eI), aOH(kH, fE + 2, eI), aOH(kH, 2 * fE + 1, eI),
			aOH(kH, 2 * fE - 3, eI), aOH(kH, 2 * fE - 2, eI), aOH(kH, 3 * fE - 2, eI), aOH(kH, fE * (fE - 3) + 1, eI), aOH(kH, fE * (fE - 2) + 1, eI), aOH(kH, fE * (fE - 2) + 2, eI), aOH(kH, fE * (fE - 2) - 2, eI), aOH(kH, fE * (fE - 1) - 3, eI),
			aOH(kH, fE * (fE - 1) - 2, eI), t1.putImageData(aB0, 0, 0), aOC = ni,
			function() {
				if (aI.dm)
					for (var ni = new Array(g8.o5.length), en = aI.fo, aOF = aOA, a7P = g8.a7P, ce = 0; ce < en; ce++) {
						var aNH = a7P[ce];
						ni[aNH] || (ni[aNH] = function(aNH) {
							var ni = bT.ed.k7(aOB, aOB),
								t1 = bT.ed.getContext(ni, !0),
								jU = gk.a7O;
							return jU.set(g8.a0V[aNH]), aOJ(t1, jU), ni
						}(aNH)), aOF[ce] = ni[aNH]
					}
			}()
	}, this.dP = function() {
		var ce, player, aOR, a3R, ge, qs, aOT, aOV, aOW, kp = f4.a6.kp,
			lF = f4.a6.lF,
			lG = f4.a6.lG,
			aOX = f4.a6.aOX,
			aOY = aOA,
			l2 = aI.bS,
			en = f4.a6.kr,
			aOZ = aA.b1,
			aOa = aA.b2,
			aOb = dC.dD << 4,
			lN = cS,
			d5 = lN / aOB,
			na = cT / lN,
			nc = cU / lN,
			cx = (aOZ + cT) / lN - na,
			cy = (aOa + cU) / lN - nc,
			t1 = dQ;
		for (t1.imageSmoothingEnabled = lN < 9, bT.ed.textAlign(t1, 1), bT.ed.textBaseline(t1, 1), ce = 0; ce < en; ce++) player = lF[ce] >> 3, ge = lG[ce], aOR = .9 + .1 * Math.log10(ge), a3R = (qs = kp[ce]) % aOb / 16 - aOR, qs = aOa * (Math
			.floor(qs / aOb) / 16 - aOR - nc) / cy, aOT = -2 * (aOW = lN * aOR) * (1 + (aOV = +(player === l2)) / 8), aOV = aOV * aOW / 4, (aOW = aOZ * (a3R - na) / cx) < aOT || qs < aOT || aOZ + aOV < aOW || aOa + aOV < qs || (a3R = 2 *
			aOR * d5, aOT = aOR * lN, null === (aOV = aOY[player]) && (aOY[player] = aOV = function(player) {
				var ni = bT.ed.k7(aOB, aOB);
				return aOJ(bT.ed.getContext(ni, !0), i4.a7N(player)), ni
			}(player)), player === l2 && (t1.setTransform(a3R, 0, 0, a3R, aOW - 2 * a3R, qs - 2 * a3R), t1.drawImage(aOC, 0, 0)), t1.setTransform(a3R, 0, 0, a3R, aOW, qs), t1.drawImage(aOV, 0, 0), (aOR = Math.floor(function(ge) {
				if (ge < 1e3) return .42;
				if (ge < 1e4) return .34;
				if (ge < 1e6) return .26;
				if (ge < 1e8) return .19;
				return .15
			}(ge) * aOT)) < 6) || (t1.setTransform(1, 0, 0, 1, 0, 0), t1.fillStyle = aOX[ce] ? dK.a0y : dK.dM, t1.font = bT.ed.ef(1, aOR), t1.fillText(bT.bZ.ba(ge), aOW + aOT, qs + aOT + .1 * aOR));
		t1.imageSmoothingEnabled = !1, t1.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function vp() {
	this.mE = 0;
	var aOe, aOf, aOg, aOh, aOi, aOj = this.mF = 0;

	function aOn() {
		aOh = aOi = null, aOj = 0
	}
	this.k = function(q5, aOk, aOl) {
		aH.jC(), b7.lk(), aK.setState(10), aOh = q5, aOi = aOk, aOj = aOl, this.mE = q5.mE, this.mF = aOl, aOe = 0, aOf = aC.aD + 4500, a5.a6.a8 = q5.a8, a5.a6.mD === q5.a8 ? (console.log("direct pass"), aOg = 0) : (console.log("delayed pass"),
			a5.a6.close(a5.a6.mD, 3247), aOg = 2, a5.a6.zj(q5.a8, 5, 2) && a5.oC.mC()), dQ.imageSmoothingEnabled = !0, aK.ez();
		aOk = eJ.ep("loading"), aOl = (ca.cb.cc() ? .396 : .25) * aA.cd / aOk.width;
		dQ.setTransform(aOl, 0, 0, aOl, Math.floor((aA.b1 - aOl * aOk.width) / 2), Math.floor((aA.b2 - aOl * aOk.height) / 2)), dQ.imageSmoothingEnabled = !1, dQ.drawImage(aOk, 0, 0), dQ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.jh = function() {
		0 < aOg && aC.aD > aOf && (aOg--, aOf += 4500, 0 === aC.qE) && 0 === aC.j7() && a5.a6.zj(a5.a6.a8, 5, 2)
	}, this.aOo = function() {
		return 10 === aK.at() && (b7.z0.aOp(aOh, aOi, aOj), aOn(), !0)
	}, this.aOq = function() {
		10 === aK.at() && 2 <= ++aOe && (b7.z0.aOp(aOh, aOi, aOj), aOn())
	}
}

function wB() {
	this.fx = new aKL, this.buffer = new aMX, this.jD = new aIE, this.a6 = new aGC, this.aEl = new aOs, this.k = function() {
		this.buffer.k(), (new aDo).k(), this.aEl.k(), this.a6.aGJ()
	}
}

function aEk(data) {
	var j9, aOt, aOu, aOv, aOw, aOx, aOy, colors, aOz, aP0, aP1 = 0,
		aP2 = 0,
		aP3 = !1,
		aP4 = !1,
		aP5 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aPa(d1, d2) {
		! function(d1, d2) {
			return aOt < d1 && d1 < aOt + aOv && aOu < d2 && d2 < aOu + aOw
		}(aP1 = d1, aP2 = d2) ? (aP3 && (aC.ah = !0), aP3 = !1) : (aP3 = !0, aC.ah = !0)
	}
	this.show = function() {
		aP4 = cs.buffer.data[127].value, j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize();
		var ax = aA.aB,
			nB = j9.aPD(),
			aPE = ax * nB.aPF,
			ax = ax * nB.aPG;
		aOx = bT.ed.aDz(.06), aOy = bT.ed.aDz(.04), aOt = bT.ed.aDz(.06), aOu = ax + aOx, aOv = aA.b1 - aOt - aOy, aOw = aPE + ax - aOu - aOy
	}, this.dP = function() {
		j9.dP(),
			function() {
				var ce, aPA, lu, aF, jR, jU = data.data,
					aPK = 1,
					aPL = .125,
					aPM = aP4 ? 65536 : 0;
				for (ce = 0; ce < jU.length; ce++)
					for (aPA = jU[ce].aPA, lu = aPA.length, aPK = Math.max(lu, aPK), jR = 0; jR < lu; jR++) aPL = Math.max(aPA[jR], aPL), aPM = Math.min(aPA[jR], aPM);
				var nc = aOu + aOw,
					a3G = aOw / (aPL - aPM),
					a3F = 1 / (aPK - 1);
				for (dQ.lineWidth = dO.yf, ce = 0; ce < jU.length; ce++) {
					for (aPA = jU[ce].aPA, lu = aPA.length, aF = aOt, dQ.beginPath(), dQ.moveTo(aF + aOv, nc - a3G * (aPA[lu - 1] - aPM)), jR = lu - 2; 0 <= jR; jR--) dQ.lineTo(aF + a3F * jR * aOv, nc - a3G * (aPA[jR] - aPM));
					dQ.strokeStyle = colors[ce], dQ.stroke()
				}(function(aPM, aPL, nc, a3G) {
					dQ.font = bT.ed.ef(0, .25 * aOt), bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 2), dQ.fillStyle = colors[0];
					for (var aF = .92 * aOt, ce = 0; ce < 3; ce++) {
						var gU = aPM + ce * (aPL - aPM) / 2;
						dQ.fillText((gU / 1e3).toFixed(3), aF, nc - a3G * (gU - aPM))
					}
				})(aPM, aPL, nc, a3G),
				function(aPK) {
					var aG = aOu + aOw + .15 * aOy;
					dQ.font = bT.ed.ef(0, Math.min(.4 * aOy, .028 * aA.b1)), bT.ed.textBaseline(dQ, 0), bT.ed.textAlign(dQ, 2), dQ.fillStyle = colors[0], dQ.fillText(bT.aAr.aO4(aOz), aOt + aOv, aG), bT.ed.textAlign(dQ, 0), dQ.fillText(bT.aAr.aO4(
						new Date(aP0.getTime() - 6e4 * (aPK - 1) * aP5[data.rK])), aOt, aG)
				}(aPK),
				function(aPK, aPM, aPL) {
					if (aP3 && !(aPK < 2)) {
						for (var aDV, eI = (aP1 - aOt) / aOv * (aPK - 1), aPP = Math.floor(eI), aPQ = Math.floor(1 + eI), aPR = eI - aPP, aPS = 1e5, aPT = -1, aPU = -1, aPV = aPL - (aPL - aPM) * (aP2 - aOu) / aOw, jU = data.data, ce = 0; ce < jU
							.length; ce++) {
							var qz, aPA = jU[ce].aPA;
							aPA.length <= aPQ || (aPA = aPA[aPP] + aPR * (aPA[aPQ] - aPA[aPP]), (qz = Math.abs(aPV - aPA)) < aPS && (aPS = qz, aPT = ce, aPU = aPA))
						} - 1 !== aPT && (aPL = aOu + aOw - (aPU - aPM) / (aPL - aPM) * aOw, dQ.lineWidth = .5 * dO.yf, dQ.strokeStyle = colors[aPT], dQ.beginPath(), dQ.moveTo(aOt, aPL), dQ.lineTo(aP1, aPL), dQ.lineTo(aP1, aOu + aOw), dQ
						.stroke(), dQ.beginPath(), dQ.arc(aP1, aPL, .1 * aOt, 0, 2 * Math.PI), dQ.fillStyle = colors[aPT], dQ.fill(), aPM = aOu + aOw + .15 * aOy, bT.ed.textAlign(dQ, 1), aDV = aPK - 2 < eI ? (aDV = aP0.getTime() - 6e4 * aP5[
								data.rK], new Date(aDV + (eI - (aPK - 2)) * (aOz.getTime() - aDV))) : new Date(aP0.getTime() - 6e4 * (aPK - eI - 1) * aP5[data.rK]), aPK = bT.aAr.aO4(aDV), eI = bT.ed.measureText(aPK), aDV = gf.hI(aP1, aOt +
								.5 * eI, aOt + aOv - .5 * eI), dQ.fillStyle = bT.color.a5f(70, 50, 20), dQ.fillRect(aDV - .52 * eI, aOu + aOw, 1.04 * eI, .55 * aOy), dQ.fillStyle = colors[0], dQ.fillText(aPK, aDV, aPM), dQ.font = bT.ed.ef(0,
								.25 * aOt), bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 2), aDV = .92 * aOt, aPK = (aPU / 1e3).toFixed(3), eI = bT.ed.measureText(aPK), aPM = aDV - 1.04 * eI, dQ.fillStyle = bT.color.a5f(70, 50, 20), dQ
							.fillRect(aPM, aPL - .1625 * aOt, aOt - aPM, .275 * aOt), dQ.fillStyle = colors[aPT], dQ.fillText(aPK, aDV, aPL))
					}
				}(aPK, aPM, aPL)
			}(), dQ.lineWidth = dO.yf, dQ.strokeStyle = dK.dM, dQ.beginPath(), dQ.moveTo(aOt, aOu), dQ.lineTo(aOt, aOu + aOw), dQ.lineTo(aOt + aOv, aOu + aOw), dQ.stroke();
		var ce, fontSize = .5 * aOx,
			jU = (dQ.font = bT.ed.ef(0, fontSize), bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 0), data.data),
			en = jU.length,
			aG = aOu - .5 * aOx,
			bb = "";
		for (ce = 0; ce < en; ce++) bb += jU[ce].name + "  ";
		bb = bb.trim();
		var a10 = bT.ed.measureText(bb),
			aF = .5 * (aA.b1 - a10);
		for (a10 > aA.b1 && (aF = 0, dQ.font = bT.ed.ef(0, aA.b1 / a10 * fontSize)), ce = 0; ce < en; ce++) dQ.fillStyle = colors[ce], dQ.fillText(jU[ce].name, aF, aG), aF += bT.ed.measureText(jU[ce].name + "  ")
	}, this.m = function(d1, d2) {
		aPa(d1, d2)
	}, this.n = function(d1, d2) {
		aPa(d1, d2)
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	};
	var ce, mf, aO2, kU, gy = data.data,
		en = gy.length,
		max = 1;
	for (ce = 0; ce < en; ce++) max = Math.max(max, gy[ce].aPA.length);
	for (ce = 0; ce < en; ce++)
		for (; gy[ce].aPA.length < max;) gy[ce].aPA.unshift(0);
	mf = new Date, aO2 = 6e4 * mf.getTimezoneOffset(), kU = mf.getTime() - aO2, aOz = new Date(kU), 6 === data.rK ? function(mf, aO2) {
		var aPC = mf.getUTCFullYear(),
			mf = mf.getUTCMonth() + 1;
		aP0 = mf < 12 ? new Date(Date.UTC(aPC, mf) - aO2) : new Date(Date.UTC(aPC + 1, 0) - aO2)
	}(mf, aO2) : (aO2 = 6e4 * aP5[data.rK], aP0 = data.rK <= 4 ? new Date(kU + aO2 - mf.getTime() % aO2) : new Date(kU + aO2 - (mf.getTime() + 2592e5) % aO2)), kU = bT.color, colors = [dK.dM, kU.a5f(255, 0, 0), kU.a5f(0, 200, 0), kU.a5f(80, 80,
		255), kU.a5f(255, 255, 0), kU.a5f(255, 0, 255), kU.a5f(0, 255, 255), kU.a5f(255, 140, 0), kU.a5f(128, 128, 128), kU.a5f(0, 255, 140)], j9 = new fP(L(419) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.rK] + ", " + bT.aAr.aO1(
		aOz), [new e9("⬅️ " + L(6), function() {
		aH.eF(1)
	}), new e9(L(189), function() {
		aH.eF(14)
	})], !1)
}

function aPb() {
	this.k4 = null, this.a9L = null, this.a9N = null, this.k = function() {
		this.aHP = [L(420), L(421), L(422), L(423), L(424), L(425), L(426), L(427), L(428), L(429), L(430), L(431), L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), "Mare Nostrum"];
		var aPc = [120, 105, 92],
			cos = [12, 12, 60],
			aPd = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aPe = [140, 130, 120],
			aPf = [12, 12, 76],
			aPg = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aPh = [130, 117, 106],
			aPi = [12, 12, 68],
			aPj = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.k4 = new Array(dC.aFY + 1), __fx.customLobby.setMapInfo(this.k4), this.k4[0] = {
			b1: 230,
			b2: 230,
			aAJ: 1e3,
			aAG: 2e3,
			xr: 173
		}, this.k4[1] = {
			b1: 800,
			b2: 800,
			aAJ: 100,
			aAG: 50,
			xr: 43
		}, this.k4[2] = {
			b1: 512,
			b2: 512,
			aAJ: 128,
			aAG: 32,
			xr: 0
		}, this.k4[3] = {
			b1: 960,
			b2: 960,
			aAJ: 60,
			aAG: 8,
			xr: 0
		}, this.k4[4] = {
			b1: 900,
			b2: 900,
			aAJ: 100,
			aAG: 5,
			xr: 0
		}, this.k4[5] = {
			b1: 1e3,
			b2: 1e3,
			aAJ: 100,
			aAG: 40,
			xr: 0
		}, this.k4[6] = {
			b1: 1e3,
			b2: 1e3,
			aAJ: 100,
			aAG: 20,
			xr: 0
		}, this.k4[7] = {
			b1: 1024,
			b2: 1024,
			aAJ: 128,
			aAG: 32,
			xr: 0
		}, this.k4[8] = {
			b1: 820,
			b2: 820,
			aAJ: 200,
			aAG: 100,
			xr: 0
		}, this.k4[9] = {
			b1: 1024,
			b2: 1024,
			aAJ: 128,
			aAG: 32,
			xr: 0
		}, this.k4[10] = {
			kZ: aPe,
			ka: aPf,
			xo: aPg
		}, this.k4[11] = {
			kZ: aPh,
			ka: aPi,
			xo: aPj
		}, this.k4[12] = {
			kZ: aPh,
			ka: aPi,
			xo: aPj
		}, this.k4[13] = {
			kZ: aPc,
			ka: cos,
			xo: aPd
		}, this.k4[14] = {
			kZ: aPc,
			ka: cos,
			xo: aPd
		}, this.k4[15] = {
			kZ: aPe,
			ka: aPf,
			xo: aPg
		}, this.k4[16] = {
			kZ: aPe,
			ka: aPf,
			xo: aPg
		}, this.k4[17] = {
			kZ: aPc,
			ka: cos,
			xo: aPd
		}, this.k4[18] = {
			kZ: aPh,
			ka: aPi,
			xo: aPj
		}, this.k4[19] = {
			kZ: aPc,
			ka: cos,
			xo: aPd
		}, this.k4[20] = {
			b1: 1024,
			b2: 1024,
			aAJ: 128,
			aAG: 32,
			xr: 0
		}, this.k4[21] = {
			b1: 940,
			b2: 940,
			aAJ: 80,
			aAG: 8,
			xr: 0
		}, this.k4[22] = {
			kZ: aPh,
			ka: aPi,
			xo: aPj
		}, this.k4[23] = {
			kZ: aPe,
			ka: aPf,
			xo: aPg
		}, this.k4[24] = {
			kZ: [157, 136, 117],
			ka: [16, 13, 68],
			xo: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			ob: "[OG] Neutronian"
		};
		for (var ce = 0; ce < dC.aFY; ce++) this.k4[ce].name = this.aHP[ce];
		this.k4[dC.aFY] = {
			name: ""
		}, this.a9L = new Uint8Array(12);
		for (ce = 0; ce < 10; ce++) this.a9L[ce] = ce;
		for (this.a9L[10] = 20, this.a9L[11] = 21, this.a9N = new Uint8Array(dC.aPm), ce = 0; ce < 10; ce++) this.a9N[ce] = 10 + ce;
		this.a9N[10] = 22, this.a9N[11] = 23, this.a9N[12] = 24
	}
}

function aPn() {
	var j9, zE, zF, zH;

	function aPo(id) {
		0 !== ca.id || cs.buffer.data[140].value ? 0 === id ? aH.eF(8, 1, new eS(16)) : aH.eF(2) : aH.a6.eT(aH.bg, 0 === id ? 16 : 0)
	}
	this.show = function() {
		ca.cb.setState(12), j9.show(), this.resize(), this.j1()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), zE.resize()
	}, this.j1 = function() {
		8 === aK.at() && (2 <= h0.im ? zF[2].aPx === dK.a5r && zF[2].eU(0) : zF[2].aPx !== dK.a5r && zF[2].eU(dK.a5r), !aI.bG && aS.a2G(aI.bS) ? zF[1].aPx === dK.a5r && zF[1].eU(0) : zF[1].aPx !== dK.a5r && zF[1].eU(dK.a5r), !aI.bG && aT.aGW(aI
			.bS) ? zF[0].aPx === dK.a5r && zF[0].eU(0) : zF[0].aPx !== dK.a5r && zF[0].eU(dK.a5r))
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, zF = [new e9(L(444), function() {
		aPo(0)
	}), new e9(L(445), function() {
		aH.eF(16)
	}), new e9(L(157), function() {
		aH.eF(17)
	}), new e9(L(446), function() {
		aH.a6.rI()
	}, 0, 0, 1), new e9(L(447), function() {
		aH.eF(3, 1)
	}), new e9(L(134), function() {
		aH.eF(18)
	}), new e9(L(448), function() {
		aH.eF(31)
	}), new e9(L(449), function() {
		aH.a6.eM(2)
	}), new e9(L(32), function() {
		aPo(1)
	}), new e9("🔒 " + L(450), function() {
		aH.eF(32)
	}), new e9(L(451), function() {
		var aE4, aDw;
		(aE4 = []).push(["Wiki", (aDw = "https://territorial.io/") + "wiki/gold"]), aE4.push(["Team Games", aDw + "log/team"]), aE4.push(["Battle Royale Games", aDw + "log/br"]), aE4.push(["1v1 Games", aDw + "log/1v1"]), aE4.push([
			"Zombie Games", aDw + "log/zombies"
		]), aE4.push(["Transactions", aDw + "log/transactions"]), aE4.push(["Changelog", aDw + "changelog"]), 2 !== ca.id && aE4.push(["Android App", uq.aPu]), 1 !== ca.id && aE4.push(["iOS App", uq.aAF]), 0 === ca.id && aE4.push([
			"Patreon", uq.aLY
		]), aE4.push(["Terms", uq.aPv]), aE4.push(["Privacy", uq.aPw]), aH.eF(4, 1, new rO(L(451), bT.ed.aE3(aE4), !1, [new e9("⬅️ " + L(6), function() {
			aH.eF(1)
		})]))
	}), new e9(L(452), function() {
		aH.eF(4, 1, new rO(L(452), eo.eX + "<br>" + a5.a6.oy("/changelog") + "<br><br><eo>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></eo>", !0, [new e9("⬅️ " + L(6),
				function() {
					aH.eF(1)
				})]))
	}), new e9(L(453), function() {
		aH.eF(4, 1, new rO(L(453), L(460) + "<br>" + L(461), !1, [new e9("⬅️ " + L(6), function() {
			aH.eF(1)
		}), new e9(L(462), function() {
			ca.cb.aA4(), aH.eF(1)
		})]))
	}), new e9("👁️ " + L(454), function() {
		ca.cb.aA8(), aH.eF(4, 1, new rO(L(463), L(464) + " " + a5.a6.oy("/privacy"), !1, [new e9("⬅️ " + L(6), function() {
			aH.eF(1)
		})]))
	})], zH = [new e9("⬅️ " + L(6), function() {
		aH.a6.rH()
	})], 8 === aK.at() && (zF.unshift(new e9(L(260), function() {
		aH.eF(30)
	})), zF.unshift(new e9(L(457), function() {
		2 <= h0.im && (aH.jC(), aN.bF(), aC.ah = !0)
	}, 0, 1)), zF.unshift(new e9(L(458), function() {
		!aI.bG && aS.a2G(aI.bS) && (du.cJ.a8a(), aH.jC(), aS.bE) && aS.bF()
	}, 0, 1)), zF.unshift(new e9(L(459), function() {
		!aI.bG && aT.aGW(aI.bS) && (iB.aPt(2), du.cJ.b5(), aH.jC(), aS.bE) && aS.bF()
	}, 0, 1))), 1 === ca.id && 5 <= ca.eX && zF.push(new e9(L(455), function() {
		ca.cb.aA9()
	})), j9 = new fP(L(456), zH), zE = new zI(zF, j9.fS)
}

function aPy() {
	this.aEH = function(player, id) {
		for (var aPz = bX.l3[player], en = aPz.length, ce = 0; ce < en; ce++)
			if (i9.aQ0(aPz[ce], id)) return !0;
		return !1
	}, this.a86 = function(player, kz) {
		for (var aEN, aQ1, d5, aPz = bX.l3[player], en = aPz.length, b1 = dC.dD, aQ3 = i9.nb(kz), aQ4 = i9.nd(kz), a8I = -1, min = dC.dD * dC.dD + dC.dE * dC.dE, id = i4.o8(i9.lO(kz)), ce = 0; ce < en; ce++)(aQ1 = (aQ1 = aQ3 - (aEN = (d5 = aPz[
			ce]) >> 2) % b1) * aQ1 + (aQ1 = aQ4 - ~~((.5 + aEN) / b1)) * aQ1) < min && i9.aQ0(d5, id) && (min = aQ1, a8I = aEN);
		return a8I
	}, this.xA = function(a8L, aEN) {
		for (var id = i4.o8(i9.lO(aEN)), lL = i9.lM, d5 = i9.lO(a8L), aQ5 = -1, ce = 0; ce < 4; ce++) {
			var lN = d5 + lL[ce];
			i4.xu(lN) && i4.o8(lN) === id && (-1 === aQ5 || i9.xK(i9.aQ6(lN), aEN) < i9.xK(aQ5, aEN)) && (aQ5 = i9.aQ6(lN))
		}
		return aQ5
	}, this.aQ7 = function(player, kz) {
		for (var lL = i9.lM, d5 = i9.lO(kz), ce = 0; ce < 4; ce++) {
			var lN = d5 + lL[ce];
			if (i4.lP(lN) && i4.lQ(player, lN)) return !0
		}
		return !1
	}, this.a7z = function(player, kz) {
		for (var lL = i9.lM, d5 = i9.lO(kz), ce = 0; ce < 4; ce++) {
			var lN = d5 + lL[ce];
			if (i4.l8(lN)) return !0;
			if (i4.lP(lN)) {
				lN = i4.l9(lN);
				if (player !== lN && h7.h8(player, lN)) return !0
			}
		}
		return !1
	}, this.aCT = function(kz) {
		for (var lL = i9.lM, d5 = i9.lO(kz), ce = 0; ce < 4; ce++) {
			var lN = d5 + lL[ce];
			if (i4.lP(lN)) {
				lN = i4.l9(lN);
				if (bT.bU.bV(lN)) return lN
			}
		}
		return -1
	}, this.yd = function(d5) {
		if (i4.xu(d5))
			for (var lL = i9.lM, ce = 0; ce < 4; ce++)
				if (i4.l7(d5 + lL[ce])) return !0;
		return !1
	}, this.uA = function(player, id) {
		for (var rL = player << 3, rM = rL + f4.a6.pl[player], u9 = f4.a6.u9, aQ8 = f4.a6.aQ8, ce = rL; ce < rM; ce++) {
			var aQ9 = aQ8[ce];
			if (u9[aQ9] === id) return aQ9
		}
		return -1
	}, this.aAX = function(player) {
		return 0 === f4.a6.pl[player] ? -1 : f4.a6.aQ8[player << 3]
	}, this.u7 = function(d1, d2) {
		var en = f4.a6.kr;
		if (en < 1) return -1;
		for (var kp = f4.a6.kp, aQA = 80, aPT = -1, ce = 0; ce < en; ce++) {
			var xJ = i9.aQB(d1, d2, kp[ce]);
			xJ < aQA && (aQA = xJ, aPT = ce)
		}
		return function(ce, d1, d2) {
			if (ce < 0) return;
			var aQI = f4.a6.kp[ce],
				aQJ = i9.aQK(aQI),
				aQI = i9.aQM(aQI),
				ce = 20 * (.9 + .1 * Math.log10(f4.a6.lG[ce]));
			return ce = Math.max(ce, i9.aQN(bT.ed.aDz(.02, 1.7))), gf.a3Q(i9.aQO(d1), i9.aQP(d2), aQJ, aQI, ce)
		}(aPT, d1, d2) ? aPT : -1
	}, this.aB7 = function(l1) {
		for (var en = f4.a6.kr, u9 = f4.a6.u9, ce = 0; ce < en; ce++)
			if (u9[ce] === l1) return gk.wt[2] = ce, !0;
		return !1
	}, this.aKB = function(player) {
		for (var rL = player << 3, rM = rL + f4.a6.pl[player], aQ8 = f4.a6.aQ8, lG = f4.a6.lG, ge = 0, ce = rL; ce < rM; ce++) ge += lG[aQ8[ce]];
		return ge
	}, this.aQD = function(player, aBN) {
		aBN = f4.a6.aBE[aBN];
		return this.aQ7(player, aBN[aBN.length - 1])
	}, this.aQE = function(a8L, aEN, xJ, aQF) {
		var st = i9.nb(a8L),
			a8L = i9.nd(a8L),
			sx = i9.nb(aEN),
			aEN = i9.nd(aEN),
			sx = (xJ = Math.max(xJ, 1), sx - st),
			aEN = aEN - a8L,
			cx = gf.gg(Math.abs(sx) * aQF, xJ),
			aQF = gf.gg(Math.abs(aEN) * aQF, xJ);
		return i9.u5(st + Math.sign(sx) * cx, a8L + Math.sign(aEN) * aQF)
	}, this.aBH = function(aBD, kz) {
		for (var en = aBD.length - 1, aF = i9.nb(kz), aG = i9.nd(kz), ce = 0; ce < en; ce++) {
			var a8L = aBD[ce],
				aEN = aBD[ce + 1],
				na = i9.nb(a8L),
				a8L = i9.nd(a8L),
				ev = i9.nb(aEN),
				aEN = i9.nd(aEN);
			if (!(aF !== na && aF !== ev && Math.sign(aF - na) === Math.sign(aF - ev) || aG !== a8L && aG !== aEN && Math.sign(aG - a8L) === Math.sign(aG - aEN))) {
				if (na === ev || a8L === aEN) return ce;
				if (Math.abs(aF - na) === Math.abs(aG - a8L) && Math.abs(aF - ev) === Math.abs(aG - aEN)) return ce
			}
		}
		return -1
	}, this.wm = function() {
		for (var aQQ = gE[0], lF = f4.a6.lF, kr = f4.a6.kr, jU = [], ce = 0; ce < kr; ce++) bT.bU.g6(aQQ, lF[ce] >> 3) && jU.push(ce);
		return jU
	}, this.aQR = function(player, aBD) {
		for (var rL = player << 3, rM = rL + f4.a6.pl[player], aQ8 = f4.a6.aQ8, aBE = f4.a6.aBE, kP = aBD[0], kQ = aBD[aBD.length - 1], ce = rL; ce < rM; ce++) {
			var fF = aBE[aQ8[ce]];
			if (fF[0] === kP && fF[fF.length - 1] === kQ) return !0
		}
		return !1
	}
}

function vy() {
	this.k = function() {
		this.jU = [], this.eI = 0
	}, this.aCz = function() {
		return new Uint8Array(this.jU)
	}, this.mB = function(aQS, value) {
		for (var jU = this.jU, cu = this.eI + aQS - 1, aQT = 1 + (cu >> 3); jU.length < aQT;) jU.push(0);
		for (var ce = this.eI; ce <= cu; ce++) jU[ce >> 3] |= (value >> cu - ce & 1) << 7 - (7 & ce);
		this.eI += aQS
	}, this.wX = function(jU, lr, ls) {
		var aQU = bT.fY.aQV(jU);
		this.mB(lr, aQU);
		for (var ce = 0; ce < aQU; ce++) this.mB(ls, jU[ce])
	}, this.a5K = function(jU, lr, lw) {
		var aQU = bT.fY.aQV(jU);
		this.mB(lr, aQU);
		for (var ce = 0; ce < aQU; ce++) this.a5I(jU[ce], lw)
	}, this.a5I = function(bb, lr) {
		var en = bb.length;
		this.mB(lr, en);
		for (var ce = 0; ce < en; ce++) this.mB(16, bb.charCodeAt(ce))
	}, this.a5J = function(ni) {
		var aQW = (ni = ni.toDataURL()).split(",");
		if (aQW.length < 2) console.log("error 266");
		else {
			ni = bT.bZ.m3(ni = aQW[aQW.length - 1], "/", "_"), ni = bT.bZ.m3(ni, "\\+", "-");
			var ni = bT.bZ.m3(ni, "=", ""),
				mo = k0.cA.k2(ni),
				en = mo.length;
			this.mB(30, en);
			for (var ce = 0; ce < en; ce++) this.mB(6, mo[ce])
		}
	}
}

function a3Y() {
	this.aQX = function(m9) {
		var username = cs.buffer.data[122].value.slice(0, 20),
			username = (lo.iE(24 + 16 * username.length + 18), lo.mB(1, 0), lo.mB(6, 1), lo.mB(10, eo.mG), lo.mB(2, cs.buffer.data[158].value), a5.kf.a1C(username), bT.color.aQY(cs.a6.aGI()));
		lo.mB(6, username[0]), lo.mB(6, username[1]), lo.mB(6, username[2]), a5.a6.mD = m9, a5.a6.send(m9, lo.lj)
	}, this.aHA = function(aQZ, aBO) {
		uo.k(), uo.mB(1, 0), uo.mB(6, 2), uo.mB(3, aQZ), 2 === aQZ ? uo.mB(2, aBO) : 3 === aQZ ? c9.ys.ia(aBO, 7, uo) : 5 === aQZ && (uo.mB(3, aBO.id), uo.mB(3, aBO.value), uo.mB(30, aBO.cE)), a5.a6.send(a5.a6.mD, uo.aCz())
	}
}

function dW() {
	this.aQa = 0;
	var aQd, aQb = null,
		aQc = 0,
		aQe = "",
		aQf = 0,
		aQg = null,
		aQh = -1,
		aQi = -1,
		aQj = 0;

	function aNE() {
		if (null !== aQg && null !== aQb) {
			aQc = 0;
			try {
				window.turnstile.remove(aQb), aQg.remove()
			} catch (a2) {
				console.log("turnstile remove failed " + a2)
			}
			aQb = aQg = null
		}
	}

	function aQo(aQp) {
		return "" !== aQe && aQf + 1e3 * (300 - aQp) > performance.now()
	}
	this.k = function() {
		var aQm;
		eo.aCg || !eo.aD4 && !eo.aQl ? (console.log("turnstile cannot be loaded"), this.aQa = -1) : ((aQm = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", aQm.async = !0, aQm
			.onload = function() {
				hq.turnstile.aQa = 1, console.log("turnstile onload"), hq.turnstile.aQn()
			}, aQm.onerror = function() {
				hq.turnstile.aQa = -1, console.log("turnstile onerror")
			}, document.head.appendChild(aQm))
	}, this.aQn = function() {
		var mf;
		return !(1 !== this.aQa || (window.turnstile ? aQc ? (console.log("turnstile error 246"), 1) : aQo(30) || (mf = performance.now()) < aQj && aQh === k0.cA.a1O(cs.buffer.data[105].value, 5) && aQi === bK.rG || (aQe = "", aQc = 1, aQd = mf,
			(aQg = document.createElement("div")).style.position = "fixed", aQg.style.left = "0", aQg.style.top = "0", aQg.style.zIndex = "100", document.body.appendChild(aQg), console.log("turnstile render"), aQb = window.turnstile
			.render(aQg, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(aCy) {
					console.log("turnstile success " + Math.floor(performance.now() - aQd)), aQe = aCy, aQf = performance.now(), hq.turnstile.aCr(), aNE()
				},
				"expired-callback": function() {
					aNE(), console.log("turnstile expired " + Math.floor(performance.now() - aQd))
				},
				"error-callback": function() {
					aNE(), console.log("turnstile callback error " + Math.floor(performance.now() - aQd)), hq.turnstile.aQa = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		aNE()
	}, this.aCr = function() {
		aQo(8) && b7.b8 && a5.a6.ke(a5.a6.mD) && (aQj = performance.now() + 36e5 - 1e4, aQh = k0.cA.a1O(cs.buffer.data[105].value, 5), aQi = bK.rG, a5.kf.aCx(aQe), aQe = "", console.log("sendTokenToLobby success"))
	}
}

function v4() {
	this.aQq = "https://territorial.io/changelog", this.aPv = "https://territorial.io/terms", this.aPw = "https://territorial.io/privacy", this.aQr = "https://territorial.io/tutorial", this.aQs = "https://territorial.io/players", this.aQt =
		"https://territorial.io/clans", this.aQu = "https://territorial.io/clan-results", this.aLY = "https://patreon.com/c/territorial", this.aPu = "https://play.google.com/store/apps/details?id=territorial.io", this.aAF =
		"https://apps.apple.com/app/id1581110913", this.aQv = "https://discord.gg/pthqvpTXmh", this.aQw = "https://www.instagram.com/davidtschacher/", this.aQx =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aQy() {
	var j9, jA, fd;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP("🔒 " + L(450), [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})]), jA = new fR(j9.fS, ((fd = []).push(function() {
		var fi = new fj,
			e3 = (fi.ox(a5.a6.oy("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", fi.fk(L(285)), new eH({
				value: "",
				eI: -1
			})),
			aLG = (fi.fp(e3), fi.fk(L(355), "0.8em"), new eH({
				value: "",
				eI: -1
			}, 0, 0)),
			p5 = (aLG.a2.type = "email", aLG.a2.autocomplete = "email", aLG.a2.name = "email", aLG.a2.inputMode = "email", aLG.a2.spellcheck = !1, fi.fp(aLG), new e9(L(465), function(a2) {
				return bT.ed.jP(a2), a5.p6.aEe({
					action: 4,
					bb: e3.a2.value.trim() + aLG.a2.value.trim().substring(0, 63)
				}), !0
			}));
		return fi.fp(new fs([p5.button])), fi
	}()), fd))
}

function aDU() {
	this.af = !1;
	this.tR = [], this.tQ = 100;
	var na, nc, gap, fE, aR0, aR2, aR3 = 0,
		aR4 = new Array(9),
		aR5 = [],
		aR6 = [],
		aR7 = 0,
		aR8 = 0,
		aR9 = 0,
		aRA = 0;

	function aRF() {
		aR4.sort(function(jR, gv) {
			return gv.uI - jR.uI
		});
		for (var bb = "" + aR4[0].bc, ce = 1; ce < 9; ce++) bb += "," + aR4[ce].bc;
		for (ce = 0; ce < 9; ce++) bb += "," + aR4[ce].uI;
		cs.buffer.aAC(120, bb)
	}
	this.k = function() {
		for (var aRB = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], ce = 0; ce < aRB.length; ce++) {
			var color = 6 === aRB[ce] ? dK.a60 : dK.a5i;
			this.tR.push(bT.canvas.aAu(eJ.get(3), aRB[ce], color))
		}
		for (ce = 0; ce < nl.sp.tS; ce++) aR6.push(nl.sp.aFK - nl.sp.tS + ce);
		for (ce = 0; ce < nl.sp.aFI; ce++) aR6.push(nl.sp.aFJ + ce);
		var aQx = nl.sp.aFP(uq.aQx);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = aQx.slice(), ce = 0; ce < aQx.length; ce++) aR6.push(aQx[ce]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					aR4[q] = {
						bc: isNaN(qcode) ? 1015 + q : qcode,
						uI: 0
					}
				} else {
					var ce, jU = cs.buffer.data[120].value.split(",");
					if (18 !== jU.length)
						for (ce = 0; ce < 9; ce++) aR4[ce] = {
							bc: 1015 + ce,
							uI: 0
						};
					else
						for (ce = 0; ce < 9; ce++) {
							var gU = parseInt(jU[ce]),
								ax = (gU = 0 <= gU && gU < nl.sp.aFK ? gU : 0, parseInt(jU[ce + 9]));
							ax = 0 <= ax && ax < 1e3 ? ax : 0, aR4[ce] = {
								bc: gU,
								uI: ax
							}
						}
				}
		}()
	}, this.show = function(d1, d2, aRG) {
		var ce;
		if (aR7 = d1, aR8 = d2, aR3 = aRG || 0, this.af = !0, aR5 = [], 0 === aR3)
			for (ce = 0; ce < 9; ce++) aR5.push(aR4[ce].bc);
		else {
			var gv = 49 * aR3,
				aRG = gv - 49;
			for (aRG >= aR6.length && (aR3 = 1, aRG = 0, gv = 49), ce = aRG = (gv = Math.min(gv, aR6.length)) - 49; ce < gv; ce++) aR5.push(aR6[ce])
		}
		aR5.push(1024);
		aRG = aR5.length, fE = Math.floor((ca.cb.cc() ? .075 : .0468) * aA.cd), gap = Math.floor(fE / 3), (aR9 = 10 * (aR0 = fE + gap)) > aA.b1 && (aR9 = aA.b1, gap = (aR0 = aR9 / 10) - (fE = 3 * aR0 / 4)), aR2 = gf.gg(aRG, 10) + !!(aRG % 10), (
			aRA = aR2 * aR0) > aA.b2 && (aRA = aA.b2, gap = (aR0 = aRA / aR2) - (fE = 3 * aR0 / 4)), aRG = .5 * gap;
		na = Math.min(Math.max(d1 - .5 * aR9 + aRG, aRG), aA.b1 - aR9 + aRG), nc = Math.min(Math.max(d2 - .5 * aRA + aRG, aRG), aA.b2 - aRA + aRG)
	}, this.m = function(d1, d2, player) {
		if (!this.af) return !1;
		if (this.aRI(d1, d2)) {
			d1 = gf.hI(gf.gg(d1 - na + .5 * gap, aR0), 0, 9);
			if ((d1 += 10 * gf.hI(gf.gg(d2 - nc + .5 * gap, aR0), 0, 9)) >= aR5.length) return aP.c1(), !0;
			d2 = aR5[d1];
			if (1024 === d2) return this.show(aR7, aR8, aR3 + 1), !0;
			! function(bc) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var ce = 0; ce < 9; ce++) aR4[ce].uI = Math.floor(.99 * aR4[ce].uI);
					for (ce = 0; ce < 9; ce++)
						if (bc === aR4[ce].bc) return aR4[ce].uI = Math.min(aR4[ce].uI + 30, 999), aRF();
					aR4.splice(5, 0, {
						bc: bc,
						uI: Math.max(aR4[4].uI, 30)
					}), aR4.pop(), aRF()
				}
			}(d2), player === aI.bS ? du.cJ.oB(d2) : du.bU.aRJ(d2, player)
		}
		return aP.c1(), !0
	}, this.aRI = function(d1, d2) {
		return !(d1 < na - .5 * gap || d2 < nc - .5 * gap || na + aR9 - .5 * gap <= d1 || nc + aRA - .5 * gap <= d2)
	}, this.dP = function() {
		dQ.fillStyle = dK.fB, dQ.fillRect(na - .5 * gap, nc - .5 * gap, aR9, aRA);
		for (var kU = .5 * dO.yf, en = (dQ.lineWidth = dO.yf, dQ.strokeStyle = dQ.fillStyle = dK.dM, dQ.strokeRect(na - .5 * gap + kU, nc - .5 * gap + kU, aR9 - 2 * kU, aRA - 2 * kU), dQ.imageSmoothingEnabled = !0, aR5.length), ce = 0; ce <
			en; ce++) this.nm(aR5[ce], dQ, na + ce % 10 * aR0, nc + gf.gg(ce, 10) * aR0, fE);
		dQ.imageSmoothingEnabled = !1
	}, this.nm = function(bc, t1, aF, aG, fE) {
		var d5;
		bc >= 1024 - nl.sp.tS ? (d5 = fE / this.tQ, t1.setTransform(d5, 0, 0, d5, aF, aG), t1.drawImage(this.tR[bc - 1024 + nl.sp.tS], 0, 0), t1.setTransform(1, 0, 0, 1, 0, 0)) : (bT.ed.textAlign(t1, 1), bT.ed.textBaseline(t1, 1), t1.font = bT.ed
			.ef(0, .89 * fE), t1.fillText(nl.sp.tT(bc), aF + .5 * fE, aG + (.35 - bT.ed.tE + .56) * fE))
	}
}

function wP() {
	function aEM(aF, en, aG, lZ, aEK, a8p) {
		if (!(aG < 1 || aEK < aG))
			for (var ce = 0; ce <= en; ce++) {
				var d5 = i9.aEW(aF, aG);
				if (lZ(d5)) return d5 >> 2;
				aF += a8p
			}
		return -1
	}

	function aER(aG, en, aF, lZ, aEJ, a8p) {
		if (!(aF < 1 || aEJ < aF)) {
			en = Math.max(en, 0);
			for (var ce = 0; ce <= en; ce++) {
				var d5 = i9.aEW(aF, aG);
				if (lZ(d5)) return d5 >> 2;
				aG += a8p
			}
		}
		return -1
	}

	function aEV(a8L, aEN, yb) {
		return -1 !== aEN && (-1 === a8L || i9.xK(aEN, yb) < i9.xK(a8L, yb)) ? aEN : a8L
	}
	this.aRK = function(yb) {
		return this.de(yb, function(d5) {
			return i4.l7(d5)
		})
	}, this.aRL = function(yb) {
		return this.de(yb, function(d5) {
			return i4.a7S(d5, aI.bS)
		})
	}, this.de = function(yb, lZ) {
		return function(yb, aED, lZ) {
			for (var u1 = i9.nb(yb), u2 = i9.nd(yb), aEJ = dC.dD - 2, aEK = dC.dE - 2, aEL = -1, gy = 0; gy < aED; gy++) {
				var y2 = Math.max(u1 - gy, 1),
					y3 = Math.max(u2 - gy, 1),
					y4 = Math.min(u1 + gy, aEJ),
					xt = Math.min(u2 + gy, aEK),
					a8L = aEM(u1, y4 - u1, u2 - gy, lZ, aEK, 1),
					aEN = aEM(u1 - 1, u1 - y2 - 1, u2 - gy, lZ, aEK, -1),
					y4 = aEM(u1, y4 - u1, u2 + gy, lZ, aEK, 1),
					y2 = aEM(u1 - 1, u1 - y2 - 1, u2 + gy, lZ, aEK, -1),
					aEQ = aER(u2, xt - u2 - 1, u1 - gy, lZ, aEJ, 1),
					aES = aER(u2 - 1, u2 - y3 - 2, u1 - gy, lZ, aEJ, -1),
					xt = aER(u2, xt - u2 - 1, u1 + gy, lZ, aEJ, 1),
					y3 = aER(u2 - 1, u2 - y3 - 2, u1 + gy, lZ, aEJ, -1);
				if (aEL = aEV(aEL, a8L, yb), aEL = aEV(aEL, aEN, yb), aEL = aEV(aEL, y4, yb), aEL = aEV(aEL, y2, yb), aEL = aEV(aEL, aEQ, yb), aEL = aEV(aEL, aES, yb), aEL = aEV(aEL, xt, yb), 0 <= (aEL = aEV(aEL, y3, yb)) && gy * gy >= i9.xK(
						aEL, yb)) return aEL
			}
			return -1
		}(yb, i9.aEE(), lZ)
	}
}

function aRN() {
	var fL, fM, fN;

	function fQ() {
		fU(), 3 !== aI.data.botDifficultyType || bT.fY.fc(aI.data.botDifficultyData) || (aI.data.botDifficultyType = 0), 3 !== aI.data.botDifficultyType && (aI.data.botDifficultyData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		3 === aI.data.botDifficultyType && bT.fY.fZ(fN.fa(), aI.data.botDifficultyData, iD.o6.length - 1)
	}

	function aRO(fd, eI) {
		var fi = new fj,
			value = (fi.fk(eI < 0 ? L(92) : L(91) + " " + g8.o4[eI % 9]), 0 <= eI && (fi.ox(L(160) + ": " + aI.data.teamPlayerCount[eI]).style.marginBottom = "1em"), eI < 0 ? aI.data.botDifficultyValue : aI.data.botDifficultyTeam[eI]);
		fi.fm(new fn({
			fl: iD.o6,
			value: value
		}, function(kU) {
			eI < 0 ? aI.data.botDifficultyValue = kU : aI.data.botDifficultyTeam[eI] = kU
		})), fd.push(fi)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(92), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, function() {
		var fd = [];
		if (function(fd) {
				var fi = new fj,
					fl = (fi.fk(L(7)), [L(174), L(400), L(401), L(10)]),
					value = aI.data.botDifficultyType;
				0 === aI.data.gameMode && (value = Math.min(value, 2), fl.splice(2, 1));
				fi.fm(new fn({
					fl: fl,
					value: value
				}, function(eI) {
					fU(), aI.data.botDifficultyType = eI, 0 === aI.data.gameMode && 2 === eI && (aI.data.botDifficultyType = 3), 3 !== aI.data.botDifficultyType || aI.data.botDifficultyData || (aI.data.botDifficultyData =
						new Uint8Array(aI.fo)), 2 !== aI.data.botDifficultyType || aI.data.botDifficultyTeam || (aI.data.botDifficultyTeam = new Uint8Array(9)), aH.eF(25)
				})), fd.push(fi)
			}(fd), 0 === aI.data.botDifficultyType) aRO(fd, -1);
		else if (2 === aI.data.botDifficultyType)
			for (var ce = 0; ce < aI.data.teamPlayerCount.length; ce++) aI.data.teamPlayerCount[ce] && aRO(fd, ce);
		else 3 === aI.data.botDifficultyType && ! function(fd) {
			var fi = new fj;
			fi.fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.botDifficultyData, 8)), fi.fp(fN), fd.push(fi)
		}(fd);
		return fd
	}())
}

function aAo() {
	this.er = function(canvas, aDL, aBO) {
		var b1 = canvas.width,
			b2 = canvas.height,
			ax = bT.ed.k7(b1, b2),
			t1 = bT.ed.getContext(ax, !0),
			canvas = (t1.drawImage(canvas, 0, 0), t1.getImageData(0, 0, b1, b2));
		return aDL(canvas.data, b1, b2, aBO), t1.putImageData(canvas, 0, 0), ax
	}, this.aDQ = function(kH, b1, b2) {
		for (var aF = b1 - 1; 0 <= aF; aF--)
			for (var aG = b2 - 1; 0 <= aG; aG--) {
				var ce = 4 * (aF + aG * b1);
				kH[3 + ce] = kH[ce], kH[ce] = kH[1 + ce] = kH[2 + ce] = 255
			}
	}, this.aDM = function(kH, b1, b2) {
		for (var aF = b1 - 1; 0 <= aF; aF--)
			for (var aG = b2 - 1; 0 <= aG; aG--) {
				var ce = 4 * (aF + aG * b1);
				kH[1 + ce] > kH[2 + ce] + 10 && (kH[3 + ce] = kH[ce], kH[1 + ce] = kH[2 + ce])
			}
	}, this.aDO = function(kH, b1, b2, aBO) {
		for (var gap = Math.floor(Math.min(b1, b2) * aBO), aF = 0; aF < b1; aF++)
			for (var ce, aG = 0; aG < b2; aG++)(aF < gap || aG < gap || b1 - gap <= aF || b2 - gap <= aG) && (kH[3 + (ce = 4 * (aF + aG * b1))] = 255 - 255 * (kH[1 + ce] - kH[ce]) / (255 - kH[ce]))
	}, this.es = function(kH, b1, b2, aBO) {
		for (var aF = b1 - 1; 0 <= aF; aF--)
			for (var aG = b2 - 1; 0 <= aG; aG--) {
				var ce = 4 * (aF + aG * b1);
				kH[ce] = aBO[0], kH[1 + ce] = aBO[1], kH[2 + ce] = aBO[2]
			}
	}, this.aDN = function(kH, b1, b2, aBO) {
		for (var gap = Math.floor(b1 * aBO), aF = 0; aF < b1; aF++)
			for (var ce, aG = 0; aG < b2; aG++)(aF < gap || aG < gap || b1 - gap <= aF || b2 - gap <= aG) && (kH[ce = 4 * (aF + aG * b1)] = kH[1 + ce] = kH[2 + ce] = 0)
	}, this.aDP = function(kH, b1, b2) {
		for (var aG, ce, aF = b1 - 1; 0 <= aF; aF--)
			for (aG = b2 - 1; 0 <= aG; aG--) 200 < kH[1 + (ce = 4 * (aF + aG * b1))] && kH[1 + ce] - 20 > kH[ce] && kH[1 + ce] - 20 > kH[2 + ce] ? kH[ce] + kH[2 + ce] < 40 ? kH[3 + ce] = 0 : (kH[3 + ce] = kH[ce], kH[ce] = 255, kH[1 + ce] = 255,
				kH[2 + ce] = 255) : kH[ce] < 50 && kH[1 + ce] < 50 && kH[2 + ce] < 50 && (kH[ce] + kH[1 + ce] + kH[2 + ce] < 50 ? kH[3 + ce] = 180 : kH[3 + ce] = 180 + Math.floor(75 * (kH[ce] + kH[1 + ce] + kH[2 + ce] - 50) / 100))
	}, this.aDR = function(kH, b1, b2) {
		for (var aG, ce, aF = b1 - 1; 0 <= aF; aF--)
			for (aG = b2 - 1; 0 <= aG; aG--) kH[1 + (ce = 4 * (aF + aG * b1))] > kH[ce] + 20 && kH[1 + ce] > kH[2 + ce] + 20 && kH[ce] + kH[2] < 40 && (kH[3 + ce] = 255 - kH[1 + ce], kH[ce] = kH[1 + ce] = kH[2 + ce] = kH[ce])
	}, this.aB1 = function(kH, b1, b2, aBO) {
		for (var au = b1 >> 1, aF = 0; aF < b1; aF++)
			for (var aG = 0; aG < b2; aG++) Math.sqrt((aF - au) * (aF - au) + (aG - au) * (aG - au)) > aBO * au && (kH[4 * (aF + aG * b1) + 3] = 0)
	}
}

function vN() {
	var aRP, aRQ, aRR, aRS, aRT, aRU, aRV, aRW, aRX, aRY, aRZ, aRa, aRb, aRc, aRd, aRe, aRf, aRg, aRh, aRi, aRj, aRk, position, aRl, aRm, aRn, aRo, aRp, aRq = 1,
		sX = 1,
		aRr = "";
	var leaderboardHasChanged = true;
	this.playerPos = aI.bS;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => pI[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(pI[aI.bS]);
	}

	function aRt() {
		aRV.clearRect(0, 0, aRP, a9C),
			aRV.fillStyle = aRp ? dK.a6L : dK.a6H,
			aRV.fillRect(0, 0, aRP, aRa),
			aRV.fillStyle = dK.eG,
			aRV.fillRect(0, aRa, aRP, a9C - aRa);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			pI[aI.bS]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aRk = -1;
		if (__fx.leaderboardFilter.enabled && aRk >= __fx.leaderboardFilter.filteredLeaderboard.length) aRk = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aRv(ownClanIndex - position, dK.a5z);
			})() :
			(playerPos >= position && aRv(playerPos - position, dK.a5z),
				0 !== pI[aI.bS] && 0 === position && aRv(0, dK.a6O))
		),
		-1 !== aRk && aRv(aRk, dK.a28),
			aRV.fillStyle = dK.eG,
			//console.log("drawing", aRk),
			aRV.clearRect(0, a9C - __fx.leaderboardFilter.tabBarOffset, aRP, __fx.leaderboardFilter.tabBarOffset);
		aRV.fillRect(0, a9C - __fx.leaderboardFilter.tabBarOffset, aRP, __fx.leaderboardFilter.tabBarOffset);
		aRV.fillStyle = dK.dM,
			aRV.fillRect(0, aRa, aRP, 1),
			aRV.fillRect(0, a9C - __fx.leaderboardFilter.tabBarOffset, aRP, 1),
			__fx.leaderboardFilter.drawTabs(aRV, aRP, a9C - __fx.leaderboardFilter.tabBarOffset, dK.a5z),
			aRV.fillRect(0, 0, aRP, dO.yf),
			aRV.fillRect(0, 0, dO.yf, a9C),
			aRV.fillRect(aRP - dO.yf, 0, dO.yf, a9C),
			aRV.fillRect(0, a9C - dO.yf, aRP, dO.yf), aRV.font = aRQ, bT.ed.textBaseline(aRV, 1), bT.ed.textAlign(aRV, 1), aRV.fillText(aRr, Math.floor((aRP + aRa - 22) / 2), Math.floor(aRY + aRR / 2));
		__fx.playerList.drawButton(aRV, 12, 12, aRa - 22);
		var jR, xF = playerPos < position + aRT - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) xF = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aRT)
				position = (rivalsCount > aRT ? rivalsCount : aRT) - aRT;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aRT; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, bX.gD[repId], bX.bY[repId], bX.g4[repId]]);
					bX.gD[repId] = rivalsEntry.territory;
					bX.bY[repId] = "[" + rivalsEntry.clan + "]";
					bX.g4[repId] = 0;
				}
				for (aRV.font = aRS, bT.ed.textAlign(aRV, 0), jR = aRT - xF; 0 <= jR; jR--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[jR + position];
					if (rivalsEntryLeft !== undefined)
						aRw(rivalsEntryLeft.representativeId), aRx(jR, jR + position, rivalsEntryLeft.representativeId);
				}
				for (bT.ed.textAlign(aRV, 2), jR = aRT - xF; 0 <= jR; jR--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[jR + position];
					if (rivalsEntryRight !== undefined)
						aRw(rivalsEntryRight.representativeId), aRy(jR, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					bX.gD[entry[0]] = entry[1];
					bX.bY[entry[0]] = entry[2];
					bX.g4[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aRT)
				position = (result.length > aRT ? result.length : aRT) - aRT;
			//if (position >= result.length) position = result.length - 1;
			for (aRV.font = aRS, bT.ed.textAlign(aRV, 0), jR = aRT - xF; 0 <= jR; jR--) {
				const pos = result[jR + position];
				if (pos !== undefined)
					aRw(gE[pos]), aRx(jR, pos, gE[pos]);
			}
			for (bT.ed.textAlign(aRV, 2), jR = aRT - xF; 0 <= jR; jR--) {
				const pos = result[jR + position];
				if (pos !== undefined)
					aRw(gE[pos]), aRy(jR, gE[pos]);
			}
		} else {
			for (aRV.font = aRS, bT.ed.textAlign(aRV, 0), jR = aRT - xF; 0 <= jR; jR--)
				aRw(gE[jR + position]), aRx(jR, jR + position, gE[jR + position]);
			for (bT.ed.textAlign(aRV, 2), jR = aRT - xF; 0 <= jR; jR--)
				aRw(gE[jR + position]), aRy(jR, gE[jR + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == xF && (aRw(aI.bS), bT.ed.textAlign(aRV, 0), aRx(aRT - 1, pI[aI.bS], aI.bS), bT.ed.textAlign(aRV, 2), aRy(aRT - 1, aI.bS)), 0 === position && (xF = .7 * aRb / eJ.get(4).height, aRV.setTransform(
			xF, 0, 0, xF, Math.floor(aRc + .58 * aRb + .5 * xF * eJ.get(4).width), Math.floor(aRY + aRR + .4 * aRb)), aRV.imageSmoothingEnabled = !0, aRV.drawImage(eJ.get(4), -Math.floor(eJ.get(4).width / 2), -Math.floor(eJ.get(4).height /
			2)), aRV.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aRw(player) {
		aI.dm && (aRV.fillStyle = g8.aEn[g8.a7P[player]])
	}

	function aRv(ce, aS0) {
		aRV.fillStyle = aS0, ce = aRT - 1 < ce ? aRT - 1 : ce;
		aS0 = Math.floor((ce === aRT - 1 ? 2 : 0 === ce ? 1.15 : 1) * aRb), aS0 = ce === aRT - 2 ? Math.floor(aRa + 9.15 * aRb) - Math.floor(aRa + 8.15 * aRb) : aS0;
		aRV.fillRect(0, Math.floor(aRa + (ce + (0 === ce ? 0 : .15)) * aRb), aRP, aS0)
	}

	function aRx(aGK, c6, ce) {
		aRV.fillText(aRg[c6], aRc, Math.floor(aRY + aRR + (aGK + .5) * aRb)), 1 === bX.g4[ce] && (aRV.font = "italic " + aRS);
		c6 = Math.floor(aRY + aRR + (aGK + .5) * aRb);
		aRV.fillText(bX.bY[ce], aRd, c6), 0 !== bX.g4[ce] && (aRV.font = aRS), ce < aI.gN && 2 !== bX.g4[ce] || aRV.fillRect(aRd, c6 + .35 * aRq, aRf[ce], Math.max(1, .1 * aRq))
	}

	function aRy(aGK, ce) {
		aRV.fillText(bX.gD[ce], aRe, Math.floor(aRY + aRR + (aGK + .5) * aRb))
	}
	this.k = function() {
		var ce;
		for (aH.a6.rD[0] = 0, aRo = aRn = aRl = 0, aRp = aRm = !1, aRk = -1, aRT = ca.cb.cc() ? 6 : 10, sX = (position = 0) === (sX = cs.buffer.data[11].value) ? 10 : 1 === sX ? 5 : 1, aRj = !1, aRh = new Uint16Array(aRT + 1), aRi =
			new Uint32Array(aRT + 1), aRX = aI.fo, gE = new Uint16Array(aRX), pI = new Uint16Array(aRX), ce = aRX - 1; 0 <= ce; ce--) gE[ce] = ce, pI[ce] = ce;
		this.resize(!0), aRf = new Uint16Array(aI.fo);
		var aRs = Math.floor(aRP - aRd - aRc - aRW);
		for (aRg = new Array(aI.fo), aRV.font = aRS, ce = aI.fo - 1; 0 <= ce; ce--) aRg[ce] = ce + 1 + ".", bX.bY[ce] = bT.fA.o1(bX.o2[ce], aRS, aRs), aRf[ce] = Math.floor(aRV.measureText(bX.bY[ce]).width);
		aRt()
	}, this.resize = function(k) {
		if (a9C = ca.cb.cc() ? (aRP = Math.floor(.335 * aA.cd), Math.floor(aRT * aRP / 8)) : (aRP = Math.floor(.27 * aA.cd), Math.floor(aRT * aRP / 10)), aRP = Math.floor(.97 * aRP), (aRU = document.createElement("canvas")).width = aRP, aRU
			.height = a9C, aRV = aRU.getContext("2d", {
				alpha: !0
			}), aRY = .025 * aRP, aRR = .16 * aRP, aRZ = 0 * aRP, aRa = Math.floor(.45 * aRY + aRR), aRb = (a9C - aRR - 2 * aRY - aRZ) / aRT,
			aRU.height = a9C += aRb, __fx.leaderboardFilter.tabBarOffset = Math.floor(aRb * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a9C - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aRP,
			aRQ = bT.ed.ef(1, Math.floor(.55 * aRR)), aRq = Math.floor((ca.cb.cc() ? .67 : .72) * aRb), aRS = bT.ed.ef(0, aRq), aRV.font = aRS, aRc = Math.floor(.04 * aRP), aRd = Math.floor((ca.cb.cc() ? .195 : .18) * aRP), aRW = Math.floor(aRV
				.measureText("00920600").width), aRV.font = aRQ, aRe = aRP - aRc, !k) {
			aRV.font = aRS;
			for (var ce = aI.fo - 1; 0 <= ce; ce--) aRf[ce] = Math.floor(aRV.measureText(bX.bY[ce]).width);
			aRt()
		}
		aRr = bT.fA.o1(L(466), aRQ, .96 * aRP)
	}, this.aLj = function() {
		return aRP
	}, this.iU = function(oj, aRu) {
		(aRu || aRj && (oj || aC.j7() % sX == 0)) && (aRj = !1, aRt())
	}, this.j1 = function() {
		! function() {
			for (var jR = aRX - 1; 0 <= jR; jR--) 0 === bX.g3[gE[jR]] && ! function(jR) {
				var aS7 = gE[jR];
				aRX--;
				for (var ce = jR; ce < aRX; ce++) gE[ce] = gE[ce + 1], pI[gE[ce]] = ce;
				gE[aRX] = aS7, pI[gE[aRX]] = aRX
			}(jR)
		}();
		for (var aS5, cu = aRX - 1, jR = 0; jR < cu; jR++) bX.gD[gE[jR]] < bX.gD[gE[jR + 1]] && (aS5 = gE[jR], gE[jR] = gE[jR + 1], gE[jR + 1] = aS5, pI[gE[jR]] = jR, pI[gE[jR + 1]] = jR + 1);
		! function() {
			for (var mf = aRj, xF = (aRj = !0, pI[aI.bS] >= aRT - 1 ? aRT - 2 : aRT - 1), ce = xF; 0 <= ce; ce--)
				if (aRh[ce] !== gE[ce] || aRi[ce] !== bX.gD[gE[ce]]) return;
			(xF != aRT - 2 || aRh[aRT] === pI[aI.bS] && aRi[aRT] === bX.gD[aI.bS]) && (aRj = mf)
		}();
		for (var ce = aRT - 1; 0 <= ce; ce--) aRh[ce] = gE[ce], aRi[ce] = bX.gD[gE[ce]];
		aRh[aRT] = pI[aI.bS], aRi[aRT] = bX.gD[aI.bS];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.m = function(aF, aG) {
		if (aRI(aF, aG)) {
			if (__fx.utils.isPointInRectangle(aF, aG, dO.gap + 12, dO.gap + 12, aRa - 22, aRa - 22)) __fx.playerList.display(bX.o2);
			else {
				if (aG - dO.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(aF - dO.gap);
				aF = aS9(aG);
				0 <= aF ? (aRl = aC.aD, aRm = !0, aRn = aRo = aF, aU.bI() && (aF = aDf(-1, aRo, aRT), aRk !== (aF = aF === aRT ? -1 : aF)) && (aRk = aF, aRt(), aC.ah = !0)) : (aRp && (aRp = !1, aRt(), aC.ah = !0), aH.eF(10, 0, new a9X({
					a9Z: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aRt(), aC.ah = !0
	};

	function aS9(aG) {
		return (aG -= dO.gap + aRa) < 0 ? Math.floor(aG / aRb) - 1 : aG < (aRT - 1) * aRb ? Math.floor(aG / aRb) : aG < a9C - aRa ? aRT - 1 : (aG -= a9C - aRa, aRT + Math.floor(aG / aRb))
	}

	function aRI(aF, aG) {
		return aF >= dO.gap && aF < dO.gap + aRP && aG >= dO.gap && aG < dO.gap + a9C
	}
	this.n = function(aF, aG) {
		var mf, aS8;
		if (__fx.utils.isPointInRectangle(aF, aG, dO.gap + 12, dO.gap + 12, aRa - 22, aRa - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(aF, aG, dO.gap, dO.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), aF - dO.gap)) return aS8 = aS9(aG), aF = aRI(aF, aG), aG = !(!(aS8 < 0 && aF) || aU.bI()), aRm ? (mf = position, (position = aDf(0, position += aRn - aS8, aI.fo - aRT)) !== mf ? (aRp = aG,
			aS8 = aDf(-1, aRn = aS8, aRT), aRk = aS8 = aS8 !== aRT && aF ? aS8 : -1, aRt(), aC.ah = !0) : aRp !== aG && (aRp = aG, aRt(), aC.ah = !0), !0) : (aS8 = (aS8 = aDf(-1, aS8, aRT)) === aRT || !aF || aU.bI() ? -1 : aS8, (aRk !==
			aS8 || aRp !== aG) && (aRk = aS8, aRp = aG, aRt(), aC.ah = !0))
	}, this.al = function(aF, aG) {
		if (!aRm) return !1;
		aRm = !1;
		var aS8 = aS9(aG);
		var isEmptySpace = false;
		return aU.bI() && -1 !== aRk && (aRk = -1, aRt(), aC.ah = !0), aC.aD - aRl < 350 && aRo === aS8 && -1 !== (aS8 = (aS8 = aDf(-1, aS8, aRT)) !== aRT && aRI(aF, aG) ? aS8 : -1) && (aF = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aS8 + position] === undefined, __fx.leaderboardFilter.rivalsData[aS8 + position]?.representativeId ?? aI.bS) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), gE[__fx.leaderboardFilter.filteredLeaderboard[aS8 + position] ?? (isEmptySpace = true, pI[aI.bS])]) : gE[aS8 + position]),
			aS8 === aRT - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : pI[aI.bS]) >=
			position + aRT - 1 && (aF = aI.bS), !isEmptySpace && aI.dm && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(aF, bX.o2, aI.df), 0 === bX.g3[aF] || isEmptySpace || aI.g1 && !aI.df && !aI.bG &&
			aF !== aI.bS || ct.nZ(aF, 800, !1, 0)), !0
	}, this.q = function(aF, aG, deltaY) {
		var aSC;
		return !(aRm || aI.bD || (aSC = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aRI(aF, aG)) || (aF = (aF = aDf(-1, aS9(aG), aRT)) === aRT || aU.bI() ? -1 : aF, 0 < deltaY ? position < aI.fo - aRT && (position += Math.min(aI.fo - aRT -
			position, aSC), aRk = aF, aRt(), aC.ah = !0) : 0 < position && (position -= Math.min(position, aSC), aRk = aF, aRt(), aC.ah = !0), 0))
	}, this.dP = function() {
		dQ.drawImage(aRU, dO.gap, dO.gap)
	}
}

function a3g() {
	this.aSD = function() {
		for (var id = jz.k6(20), colors = new Array(11), ce = 0; ce < 11; ce++) colors[ce] = new Uint8Array([jz.k6(8), jz.k6(8), jz.k6(8)]);
		var ki = k0.ys.eP(8);
		hq.dU.jp({
			id: id,
			colors: colors,
			ki: ki
		})
	}, this.aSE = function(m9) {
		var aCv = jz.k6(3),
			gy = jz.k6(5),
			gy = dq.aSF.aSG(gy, jz.k6(30), jz.k6(30), jz.k6(30));
		a5.kf.aCu(m9, gy, aCv, 0)
	}, this.aSH = function(m9) {
		this.aSE(m9), cs.jD.jX(183, c9.cA.m1(c9.cA.m2(15))), 0 === m9 && 0 === cs.buffer.data[105].value.length ? a5.kf.kg(0) : a5.p6.aLt(m9), 4 === a5.a6.zk(m9).aCf() ? 6 === aK.at() && a5.a3X.aQX(m9) : 5 !== a5.a6.zk(m9).aCf() || 8 !== aK
		.at() && 10 !== aK.at() || a5.oC.mC()
	}, this.aSI = function(m9) {
		var id = jz.k6(6);
		1 === id ? (cs.jD.jX(160, jz.k6(30)), a5.a6.a02(m9), ak.aJ0 || a5.kf.kg(1), jG.a6r(), 8 === aH.bg && aH.bh().aEh()) : 21 === id ? 8 === aH.bg && aH.bh().a6v(17) : 22 === id && (cs.jD.jX(106, cs.buffer.data[110].value), cs.jD.jX(110, ""),
			8 === aH.bg) && aH.bh().a6v(15)
	}, this.aSJ = function() {
		var en = jz.k6(16),
			aSK = jz.k6(16);
		if (jz.lm(55 + 10 * en + 16 * aSK)) {
			for (var jU = [], ce = 0; ce < en; ce++) jU.push(k0.ly.lz(jz.k6(10)));
			jG.a6u(jU)
		} else a5.a6.a05(0, 3270)
	}, this.aSL = function(m9) {
		for (var aCv = jz.k6(3), gy = jz.k6(5), aCv = {
				aCv: aCv,
				a5H: dq.aSF.aSG(gy, jz.k6(30), jz.k6(30), jz.k6(30))
			}, gy = jz.ll(32), aSM = [], ce = 0; ce < 17; ce++) aSM.push(new Uint8Array(jz.k6(16)));
		for (ce = 0; ce < 17; ce++)
			for (var jU = aSM[ce], en = jU.length, kU = 0; kU < en; kU++) jU[kU] = jz.ll(8);
		uz.show(aSM, gy, m9, aCv)
	}
}

function wV() {
	var gap, a0g, aF = [0, 0, 0, 0, 0],
		aG = [0, 0, 0, 0, 0],
		d3 = [1, 1, 1, 1, 1],
		gU = [!0, !0, !0, !1, !1],
		ax = (this.gz = [!0, !0, !0, !1, !1], null);
	this.aBy = function(ni, aSN) {
		ax = ni, gU = aSN, a0g = [uq.aPu, uq.aAF, uq.aQv, uq.aQv, uq.aQw], this.k()
	}, this.k = function() {
		if (eJ.eK()) {
			var ce, fH = Math.floor((ca.cb.cc() ? .261 : .195) * aA.cd),
				fI = Math.floor(.9 * fH),
				a0Y = Math.floor(.17 * fI);
			if (gap = ca.cb.cc() ? 2 * dO.gap : dO.gap, d3[0] = fH / ax[0].width, d3[1] = fI / ax[1].width, d3[2] = a0Y / ax[2].height, d3[3] = a0Y / ax[3].height, d3[4] = a0Y / ax[4].height, d3[2] *= 1.7, d3[3] *= 1.07, aF[0] = gap, aF[1] = gap,
				aF[2] = gap, aF[3] = gap, aF[4] = Math.floor(2 * gap + d3[3] * ax[3].width), aG[0] = gap, aG[1] = aG[0] + gap + d3[0] * ax[0].height, aG[2] = aG[1] + gap + d3[1] * ax[1].height, aG[3] = aG[2] + gap + d3[2] * ax[2].height, aG[4] =
				aG[3], !gU[0])
				for (ce = 0; ce < 5; ce++) aG[ce] -= d3[0] * ax[0].height + gap;
			if (!gU[1])
				for (ce = 2; ce < 5; ce++) aG[ce] -= d3[1] * ax[1].height + gap
		}
	}, this.af = function() {
		return !(7 === aK.at() && ca.cb.cc())
	}, this.m = function(co, cr) {
		if (ax && this.af())
			for (var ce = gU.length - 1; 0 <= ce; ce--)
				if (gU[ce] && this.gz[ce] && aF[ce] < co && aG[ce] < cr && co < aF[ce] + d3[ce] * ax[ce].width && cr < aG[ce] + d3[ce] * ax[ce].height) return aH.eF(9, aH.bg, new aSO(L(467), bT.ed.aE5(a0g[ce]))), !0;
		return !1
	}, this.dP = function() {
		if (ax && this.af()) {
			var ce;
			for (dQ.imageSmoothingEnabled = !0, ce = 0; ce < 5; ce++) gU[ce] && this.gz[ce] && (dQ.setTransform(d3[ce], 0, 0, d3[ce], aF[ce], aG[ce]), dQ.drawImage(ax[ce], 0, 0));
			dQ.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aAn() {
	this.o1 = function(bb, font, maxWidth) {
		if (font && (dQ.font = font), dQ.measureText(bb).width <= maxWidth) return bb;
		for (var ce = bb.length - 1; 1 <= ce; ce--)
			if (bb = bb.substring(0, ce), dQ.measureText(bb + "...").width <= maxWidth) return bb + "...";
		return "..."
	}
}

function vj() {
	this.a8n = new a9q, this.wi = new aSQ, this.wj = new wu, this.performance = new qU, this.pO = new aSR, this.jm = new pA, this.pe = new a8c, this.wh = new aSS, this.aST = new aCS, this.k = function() {
		this.a8n.k(), this.wj.k(), this.performance.k(), this.pO.k(), this.jm.k()
	}, this.j1 = function() {
		this.performance.j1(), this.a8n.j1(), this.wj.ww()
	}
}

function w7() {
	this.a6 = new r8, this.bg = 0;
	var aSU = new Array(32);

	function aSX() {
		for (var en = aSU.length, ce = 0; ce < en; ce++) aSU[ce] = null
	}
	this.k = function() {
		for (var aSV, aSW = document.body.firstChild; aSW;) aSV = aSW.nextSibling, !document.body.contains(aSW) || "DIV" !== aSW.tagName && "INPUT" !== aSW.tagName && "BUTTON" !== aSW.tagName || aH.removeChild(document.body, aSW), aSW = aSV
	}, this.eF = function(eI, rJ, aBO) {
		void 0 === rJ && (rJ = this.bg), aC.ah = !0, 0 === eI && (0 === aK.at() ? eI = 5 : ca.cb.setState(13)), this.c1(), this.bg === eI && (rJ = aSU[eI].rJ, aSU[eI] = null), this.bg = eI;
		var ju = aSU[eI];
		if (!ju || 4 === eI || 7 === eI || 8 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 15 === eI || 18 === eI || 20 <= eI && eI <= 28 || 32 === eI || 33 === eI) {
			if (0 === eI) return void aSX();
			1 === eI ? ju = new aPn : 2 === eI ? ju = new j8 : 3 === eI ? ju = new aSY : 4 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 33 === eI ? ju = aBO : 5 === eI ? ju = new dz : 6 === eI ? ju = new aSZ : 7 === eI ? ju =
				new aKQ(aH.a6.rB) : 8 === eI ? ju = aBO : 12 === eI ? ju = new aSa : 14 === eI ? ju = new aSb : 15 === eI ? ju = new aKQ(aH.a6.rA) : 16 === eI ? ju = new aSc : 17 === eI ? ju = new zD : 18 === eI ? ju = new ov : 19 === eI ? ju =
				new aMe : 20 === eI ? ju = new a9D : 21 === eI ? ju = new a0N : 22 === eI ? ju = new aSd : 23 === eI ? ju = new kk : 24 === eI ? ju = new fK : 25 === eI ? ju = new aRN : 26 === eI ? ju = new a5A : 27 === eI ? ju = new aGL : 28 ===
				eI ? ju = new aSe : 29 === eI ? ju = new aGn : 30 === eI ? ju = new aIk : 31 === eI ? ju = new aSf : 32 === eI && (ju = new aQy), ju.rJ = rJ, aSU[eI] = ju
		}
		ju.show(aBO)
	}, this.fX = function() {
		this.af() && this.aBP(this.bh().rJ)
	}, this.aBP = function(eI) {
		this.af() && (aSU[eI] ? (this.c1(), aC.ah = !0, this.bg = eI, aSU[eI].show()) : this.eF(eI))
	}, this.c1 = function() {
		this.af() && aSU[this.bg].c1()
	}, this.jC = function() {
		this.af() && (aSU[this.bg].c1(), aSX(), this.bg = 0, ca.cb.setState(13))
	}, this.dP = function() {
		var ju;
		this.af() && (ju = aSU[this.bg]).dP && ju.dP()
	}, this.resize = function() {
		if (!this.af()) return !1;
		aSU[this.bg].resize()
	}, this.m = function(aF, aG) {
		var ju;
		this.af() && (ju = aSU[this.bg]).m && ju.m(aF, aG)
	}, this.n = function(aF, aG) {
		var ju;
		this.af() && (ju = aSU[this.bg]).n && ju.n(aF, aG)
	}, this.aj = function() {
		var ju;
		this.af() && (ju = aSU[this.bg]).aj && ju.aj()
	}, this.q = function(d1, d2, deltaY) {
		var ju;
		this.af() && (ju = aSU[this.bg]).q && ju.q(d1, d2, deltaY)
	}, this.b6 = function(code) {
		var ju;
		return !!this.af() && ((ju = aSU[this.bg]).b6 && ju.b6(code), !0)
	}, this.j1 = function() {
		var ju;
		this.af() && (ju = aSU[this.bg]) && ju.j1 && ju.j1()
	}, this.af = function() {
		return 0 < this.bg
	}, this.bh = function() {
		return aSU[this.bg]
	}, this.bj = function(eI) {
		return aSU[eI]
	}, this.fW = function() {
		return aSU
	}, this.removeChild = function(aSg, aE9) {
		try {
			aSg.removeChild(aE9)
		} catch (a2) {
			console.log("removeChild error " + a2)
		}
	}
}

function wA() {
	this.aSF = new aSh, this.dr = new a4j, this.aCs = new a0G
}

function aSh() {
	function aSl(jU, gU, kU) {
		for (var ce = 0; ce < 256; ce++) jU[ce] = (jU[ce] + (gU >> (ce + kU) % 30 & 1)) % 256
	}
	this.j1 = function(aSi, aSj) {
		var jU = new Uint8Array(256);
		return function(jU, aSi, aSj) {
				var ce, aSo = 3 + (4 + aSi) % 32768,
					aSp = 12 + aSj % 32768,
					aSq = 17 + ((aSi & aSj) + (aSi | aSj) + aSi) % 32768;
				for (ce = 0; ce < 256; ce++) aSo = 1 + aSo * aSp % aSq, jU[ce] = aSo % 256
			}(jU, aSi, aSj), aSl(jU, aSi, 2), aSl(jU, aSj, 7),
			function(jU) {
				var ce, gU, eI = 0;
				for (ce = 0; ce < 3e4; ce++) gU = jU[eI], jU[eI] = (gU + ce + jU[(eI + ce) % 256]) % 256, eI = (gU + ce + eI + (gU & eI)) % 256
			}(jU),
			function(jU) {
				var ce, a0Y = 1,
					a0Z = 1;
				for (ce = 0; ce < 256; ce += 2) a0Y = (1 + a0Y) * (jU[ce] + 1) % 1073741824, a0Z = (1 + a0Z) * (jU[ce + 1] + 1) % 1073741824;
				return [a0Y, a0Z]
			}(jU)
	}, this.aSG = function(aSr, aSs, aSt, result) {
		for (var lu = 1 << aSr, ce = 0; ce < lu; ce++)
			if (this.aSu(ce, aSs, aSt) === result) return ce;
		return 0
	}, this.aSu = function(aSv, aSs, aSt) {
		for (var a2h = aSs + aSv, a2q = aSt + aSv, gU = a2h + a2q & 2147483647, jR = 1; jR <= 16; jR++) gU = (gU = (gU ^ gU >> jR) >>> 1 + (3 & a2h)) * (7 + (1023 & (a2h | a2q))) & 1073741823, a2q >>= 1 + (1 & (a2h >>= 1 + (1 & (gU += 65535 &
			a2q))));
		return gU &= 1073741823
	}
}

function vo() {
	var b2, canvas, fA, aSw, aSx, aSy, aSz, a4v, aT0, aT1, aT2, aT3, oM = !1,
		ni = (this.af = !1, this.b1 = 0, new Array(2)),
		aT4 = 0;

	function j6() {
		var b1 = aT.b1,
			ju = (a4v = !1, f9(fA, b1, b2), Math.floor(b1 / 2));
		1 === aSw ? (fA.fillStyle = dK.a5w, fA.fillRect(ju, 0, ju, b2)) : -1 === aSw && (fA.fillStyle = dK.a66, fA.fillRect(0, 0, ju, b2)), fC(fA, b1, b2, 2);
		var ju = (ju = Math.floor(.25 * b2)) < 2 ? 2 : ju,
			oc = (fA.fillStyle = dK.a5n, Math.floor((b2 - 4) * aSx[1] / aSy[1]));
		0 < oc && fA.fillRect(2, b2 - 2 - oc, ju, oc), 0 < (oc = Math.floor((b2 - 4) * aSx[0] / aSy[0])) && fA.fillRect(b1 - 2 - ju, b2 - 2 - oc, ju, oc);
		ju = (ju = Math.floor(b2 / 8)) < 2 ? 2 : ju, dN(fA, Math.floor(.4 * b2), 0, b2, ju, .5, !1), dN(fA, Math.floor(b1 - 1.4 * b2), 0, b2, ju, .5, !0), oc = 1.1 * b2 / ni[0].width;
		fA.imageSmoothingEnabled = !0, fA.setTransform(oc, 0, 0, oc, (b1 - oc * ni[0].width) / 2, -.05 * b2), fA.drawImage(ni[+oM], 0, 0), fA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aT8() {
		aT3 = -1, oM = uj.hK(), aa.nn(257), aa.oL(oM), aT.af = !0, a4v = !0, aT0 = 360;
		for (var gU, mf = 0, ce = gC.gB - 1; 0 <= ce; ce--) bT.bU.bV(gC.gJ[ce]) || (mf += bX.gD[gC.gJ[ce]]);
		oM ? aSy[0] = Math.max(gf.gg(3 * mf, 4), 1) : aI.dm ? (gU = 9 === aI.dw ? 8 === g8.o5[f5.gI()] ? 80 : (gU = gf.gg(100 * f5.hF(), aI.hG), gf.gg(gf.hI(1550 - 11 * gU, 400, 1e3), 10)) : (gU = gf.gg(100 * f5.hF(), aI.hG), gf.gg(gf.hI(1600 - 12 *
			gU, 400, 1e3), 10)), gU = gf.gg(gU * mf, 100), aSy[0] = Math.max(gU, 1)) : 8 === aI.dw ? aSy[0] = Math.max(gf.gg(3 * mf, 4), 1) : aSy[0] = Math.max(gf.gg(3 * mf, 5), 1), aSy[1] = Math.max(mf - aSy[0], 1)
	}

	function a54() {
		aT2 = aC.j7(), a4v = !0, aT0 = aSw = 0, aSz = [], aT.af = !1, aa.oW(247), aSx[0] = aSx[1] = 0, aa.nn(673)
	}

	function cl() {
		return aZ.nU(aa.nQ()) ? __fx.settings.keybindButtons ? aZ.aG - 2 * (b2 + dO.gap) : aZ.aG - b2 - dO.gap : aL.nU(aa.nT()) ? aL.cl() - b2 - dO.gap : aA.b2 - b2 - nV.nW() * dO.gap
	}
	this.i5 = function() {
		for (var ce = 0; ce < 2; ce++) ni[ce] = bT.canvas.aAu(eJ.get(3), 8 - ce, dK.a6a), ni[ce] = bT.canvas.aAy(ni[ce])
	}, this.k = function() {
		aT2 = -1e4, aT1 = aT4 = 0, aT3 = -1, this.af = !1, a4v = oM = !1, aSx = [aSw = aT0 = 0, 0], aSy = [1, 1], aSz = [], this.resize()
	}, this.resize = function() {
		b2 = aZ.b2, this.b1 = 4 * b2, (canvas = document.createElement("canvas")).width = this.b1, canvas.height = b2, fA = canvas.getContext("2d", {
			alpha: !0
		}), j6()
	}, this.iU = function() {
		a4v && j6()
	}, this.m = function(aF, aG) {
		return !!this.af && !(aF < aA.b1 - this.b1 - dO.gap || aG < cl() || (aI.bG || this.aGT(aI.bS) && (aS.bE && aS.bF(), du.cJ.a8Z(aF > aA.b1 - dO.gap - this.b1 / 2 ? 1 : 0)), 0))
	}, this.j1 = function() {
		0 < aT1 ? 0 === --aT1 && a54() : this.af ? 180 == --aT0 && 3 * aSx[0] < aSy[0] ? a54() : aSx[0] >= aSy[0] ? oM ? dj.lZ.aTA() : dj.lZ.aJO() : aSx[1] >= aSy[1] ? aT1 = 4 : aT0 <= 0 && a54() : ! function() {
			var a4k = aC.j7();
			if (a4k % 40 == 14) {
				if (aT4) return !(a4k < aT4) && !(a4k < aT2 + 535) && (aT4 = a4k + 1071, bT.bU.gG()) ? (aT8(), 1) : 0;
				(1 === gC.gB || (aI.dm ? f5.hF() : bX.gD[gE[0]]) >= gf.gg(96 * aI.hG, 100)) && (aT4 = a4k + 535)
			}
			return
		}() && 0 <= aT3 && (aa.bW(250, L(468, [bX.bY[aT3]]), 673, aT3, dK.dM, dK.fB, -1, !0), aT8())
	}, this.aTB = function() {
		this.af && aSx[0] < aSy[0] && a54()
	}, this.aGU = function(player, aTC) {
		var aTD = L(aTC ? 469 : 470, [bX.bY[player]]),
			aTD = (aa.bW(450, aTD, 257, player, aTC ? dK.a5u : dK.lB, dK.fB, -1, !0), aSz.push(player), a4v = !0, aI.df ? Math.max(aSy[0], aSy[1]) : bX.gD[player]),
			aTD = Math.max(aTD, 1);
		aTC ? aSx[0] += aTD : aSx[1] += aTD, player === aI.bS && (aSw = aTC ? 1 : -1)
	}, this.dP = function() {
		var aG;
		this.af && (aG = cl(), dQ.drawImage(canvas, aA.b1 - this.b1 - dO.gap, aG))
	}, this.aGW = function(player) {
		if (0 !== aT0) return !1;
		if (!bT.bU.fz(1)) return !1;
		if (!bT.bU.g2(player)) return !1;
		if (10 <= pI[player] && !bT.bU.hA(player, 9)) return !1;
		if (!aI.df) {
			player = aC.j7();
			if (player < aT2 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.aGT = function(fF) {
		if (!bT.bU.fz(1)) return !1;
		if (!bT.bU.g2(fF)) return !1;
		if (!this.af) return !1;
		for (var ce = aSz.length - 1; 0 <= ce; ce--)
			if (aSz[ce] === fF) return !1;
		return !0
	}, this.b5 = function(player) {
		aT3 = player
	}
}

function w1() {
	this.kw = new aTF, this.f2 = new aO9, this.a6 = new aTG, this.xj = new aCB, this.aG5 = new aMc, this.yc = new kn, this.pM = new wc, this.x8 = new a7x, this.a8C = new aIA, this.aTH = new aTI, this.wd = new yY, this.aTJ = new aEB, this.a84 =
		new aTK, this.c3 = new aPy, this.wq = new aTL, this.ku = new aB2, this.aGR = new a1P, this.k = function() {
			this.a84.k(), this.f2.k(), this.a6.k(), this.xj.k(), this.aG5.k(), this.aTH.k(), this.ku.k()
		}, this.dP = function() {
			this.aTH.dP(), this.f2.dP()
		}
}

function aSb() {
	var j9, jA, fd, aTM = -1;
	this.show = function() {
		j9.show(), this.resize(), aTM = cs.buffer.data[125].value
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(471), [new e9("⬅️ " + L(6), function() {
		aTM !== cs.buffer.data[125].value ? aH.a6.rI() : aH.aBP(13)
	})]), jA = new fR(j9.fS, ((fd = []).push(function() {
		var fi = new fj,
			a9P = (fi.fk(L(472)), fi.jI(L(473)), new e9(L(225), function() {
				cs.jD.jX(130, 0), aH.a6.rI()
			}, 0, 0, 1)),
			e3 = new eH(cs.buffer.data[126], 0, function() {
				a9P.button.click()
			});
		return fi.fp(e3), e3.a2.placeholder = "a,b,c", e3.a2.style.marginTop = "0.5em", fi.fp(new fs([a9P.button])), fi
	}()), fd.push(function() {
		var fi = new fj,
			a9P = new e9(L(225), function() {
				cs.jD.jX(130, 1), aH.a6.rI()
			}, 0, 0, 1),
			aBT = new eH(cs.buffer.data[129], 1, function() {
				aBT.a2.focus()
			}),
			aBU = new eH(cs.buffer.data[128], 1, function() {
				a9P.button.click()
			});
		return fi.fk(L(223)), fi.fp(aBU), aBU.a2.style.marginBottom = "0.5em", fi.fk(L(224)), fi.fp(aBT), fi.fp(new fs([a9P.button])), fi
	}()), fd.push(function() {
		var fi = new fj;
		return fi.fk(L(474)), cs.buffer.data[125].fl = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], fi.fm(new fn(cs.buffer.data[125])), fi
	}()), fd.push(function() {
		var fi = new fj;
		return fi.fk(L(475)), fi.fp(new fq(cs.buffer.data[127], L(476))), fi
	}()), fd))
}

function e9(aTQ, aTR, aTS, aTT, aTU) {
	var self, aTV = document.createElement("button");

	function aTX() {
		var aF9;
		aU.ac() || (aF9 = bT.color.aTc(aTS), !1 !== aTT && 0 < aF9[0] && aF9[0] < 255 && aF9[0] === aF9[1] && aF9[0] === aF9[2]) || (128 < aF9[0] && 128 < aF9[1] && 128 < aF9[2] ? aTV.style.backgroundColor = bT.color.aTd(aTS, -50) : aTV.style
			.backgroundColor = bT.color.aTd(aTS, aF9[3] && aF9[3] < 120 ? 150 : 50))
	}

	function aTW() {
		if (aTT) {
			var aF9 = bT.color.aTc(aTS);
			if (aF9[0] === aF9[1] && aF9[0] === aF9[2]) return
		}
		aTR && ((aF9 = aTR(this)) ? 2 === aF9 && aTX() : aTe(this))
	}

	function aTZ() {
		this.style.backgroundColor = aTS
	}

	function aTY() {
		aTe(this)
	}

	function aTe(gy) {
		gy.style.backgroundColor = aTS, gy.blur()
	}
	this.button = aTV, this.fx = aTR, this.aPx = aTS, this.a22 = function(aTa) {
			aTa = 1.1 - Math.min(.01 * aTQ.length, .6) + .2 * aTa;
			aTV.style.fontSize = aTa.toFixed(1) + "em"
		}, this.eU = function(ax) {
			ax ? 1 === ax ? ax = dK.a5r : 2 === ax && (aTT = 1, ax = dK.a5r) : (aTT = 0, ax = dK.eG), this.aPx = aTS = ax, aTV.style.backgroundColor = ax
		}, self = this, aTV.innerHTML = aTQ, aTV.style.color = aTU ? dK.oN : dK.dM, aTV.style.userSelect = "none", aTV.style.outline = "none", aTV.style.overflowWrap = "break-word", self.eU(aTS), aTV.style.border = "none", aTV.style.font = "inherit",
		self.a22(0), aTV.style.padding = "0em 0.3em", aTV.onclick = aTW, aTV.addEventListener("mouseover", aTX), aTV.addEventListener("mouseout", aTY), aTV.addEventListener("focus", aTX), aTV.addEventListener("blur", aTZ)
}

function wU() {
	this.jQ = [L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492)];
	var aTf = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.jO = new Array(aTf.length), this.k = function() {
		var jU = cs.buffer.data[155].value.split(";"),
			ju = jU.length;
		if (function() {
				for (var en = aTf.length, ce = 0; ce < en; ce++) aw.jO[ce] = aTf[ce]
			}(), !(ju > aTf.length))
			for (var ce = 0; ce < ju; ce++) jU[ce].length && (this.jO[ce] = jU[ce])
	}, this.jT = function(eI, code) {
		for (var jO = this.jO, aTh = aTf, bb = (jO[eI] = code, ""), en = jO.length, aTi = [], ce = 0; ce < en; ce++) aTi.push(jO[ce] === aTh[ce] ? "" : jO[ce]);
		en--;
		for (ce = 0; ce < en; ce++) bb += aTi[ce] + ";";
		cs.jD.jX(155, bb += aTi[en])
	}, this.jN = function() {
		cs.jD.jX(155, ""), this.k()
	}, this.ax = function(code, eI) {
		return code === this.jO[eI] || code === this.jO[eI + 1]
	}
}

function vY() {
	var aTj, aTk, size, g7, ge, aTl;

	function aTm(player) {
		return player < aI.gN ? aTj * player : aTj * aI.gN + aTk * (player - aI.gN)
	}
	this.k = function() {
		aTj = aI.gN < 16 ? 12 : 8, aTk = 4;
		var en = aTm(aI.fo);
		size = new Uint8Array(aI.fo), g7 = new Uint16Array(en), ge = new Uint32Array(en), aTl = new Uint8Array(en)
	}, this.aGS = function(aId, aTn) {
		var aTo = this.aTp(aId, aTn),
			aTn = (this.aTq(aId, aTn, 0), bT.bU.gT(aId, aTo));
		h0.h1(aId, aTo - aTn, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aKI = function(player, aTn) {
		var aTt, aTn = function(player, aTn) {
			var ce, ju = aTm(player);
			for (ce = size[player] - 1; 0 <= ce; ce--)
				if (g7[ju + ce] === aTn) return ce;
			return size[player]
		}(player, aTn);
		aTn !== size[player] && (aTt = ge[aTm(player) + aTn], this.a1u(player, aTn), this.jp(player, aTt, aI.fo))
	}, this.lR = function(player, aTn) {
		for (var ju = aTm(player), ce = size[player] - 1; 0 <= ce; ce--)
			if (g7[ju + ce] === aTn) return !0;
		return !1
	}, this.lS = function(player) {
		return player < aI.gN ? size[player] < aTj : size[player] < aTk
	}, this.a1g = function(player) {
		return size[player]
	}, this.a1l = function(player, ce) {
		return g7[aTm(player) + ce]
	}, this.a1m = function(player, ce) {
		return ge[aTm(player) + ce]
	}, this.aTp = function(player, aTn) {
		for (var ju = aTm(player), ce = size[player] - 1; 0 <= ce; ce--)
			if (g7[ju + ce] === aTn) return ge[ju + ce];
		return 0
	}, this.aKB = function(player) {
		for (var ju = aTm(player), gU = 0, ce = size[player] - 1; 0 <= ce; ce--) gU += ge[ju + ce];
		return gU
	}, this.aTq = function(player, aTn, aTt) {
		for (var ju = aTm(player), ce = size[player] - 1; 0 <= ce; ce--) g7[ju + ce] === aTn && (ge[ju + ce] = aTt)
	}, this.aTu = function(player, ce, aTt) {
		ge[aTm(player) + ce] = Math.max(aTt, 0)
	}, this.aTv = function(player, ce) {
		aTl[aTm(player) + ce] = 0
	}, this.a1n = function(player, ce) {
		return aTl[aTm(player) + ce]
	}, this.jp = function(player, aTt, aTn) {
		iA.jm.jn[player] = iA.jm.jn[aTn] = 8, bT.bU.gK(aTn) && h0.ir[6 - bT.bU.bV(player)]++;
		for (var ju = aTm(player), ce = size[player] - 1; 0 <= ce; ce--)
			if (g7[ju + ce] === aTn) return ge[ju + ce] += aTt, void(ge[ju + ce] = ge[ju + ce] > aI.gZ ? aI.gZ : ge[ju + ce]);
		g7[ju + size[player]] = aTn, ge[ju + size[player]] = aTt, aTl[ju + size[player]] = 1, size[player]++, aTn === aI.bS ? aa.nC(player, 5) : player < aI.gN && player === aI.bS && cz.nt(aTn)
	}, this.a1u = function(player, eI) {
		var jR, ju;
		if (0 !== size[player])
			for (ju = aTm(player), size[player]--, jR = eI; jR < size[player]; jR++) g7[ju + jR] = g7[ju + jR + 1], ge[ju + jR] = ge[ju + jR + 1], aTl[ju + jR] = aTl[ju + jR + 1]
	}, this.aK7 = function(player) {
		for (var jR, ju, aKF = [], ce = gC.gB - 1; 0 <= ce; ce--)
			for (ju = aTm(gC.gJ[ce]), jR = size[gC.gJ[ce]] - 1; 0 <= jR; jR--)
				if (g7[ju + jR] === player) {
					aKF.push(gC.gJ[ce]);
					break
				} return aKF
	}
}

function vR() {
	var aTw, aTx, aTy, aTz, aU0, aU1, aU2, aU3, aU4, aU5, aU6, mc, aU7, aU8 = 1,
		aU9 = 0,
		aUA = 0;

	function aUB(aUC) {
		aUC ? aU7 = (aU7 + 1) % a5.a6.zd : (a5.a6.close(aU7, 3280), aU8 ? aU8 = 0 : (aUA = 1 - aUA, 0 === (aU9 = (aU9 + 1) % 2) && (aU7 = (aU7 + 1) % a5.a6.zd, a5.a6.close(aU7, 3280)))), mc = aC.aD, bK.zq = aUA, a5.a6.zj(aU7, 4, 1) && a5.a3X.aQX(aU7)
	}

	function aUE() {
		if (0 !== aU7) return 1 === aU7 && __fx.customLobby.isActive() ? (uu.a06(3249), __fx.customLobby.setActive(!1)) : void aUB();
		uu.a06(3249)
	}

	function aUJ(aG, aIt, q6) {
		var na = Math.floor((aA.b1 - aTz) / 2) + aU2,
			ev = na + Math.floor(q6 * (aTz - 2 * aU2));
		dQ.lineWidth = aIt, dQ.beginPath(), dQ.moveTo(na, aG), dQ.lineTo(ev, aG), dQ.lineTo(Math.floor(na - aU2 + q6 * aTz), aG + aTy), dQ.lineTo(na - aU2, aG + aTy), dQ.closePath()
	}
	this.rG = 1, this.jL = 0, this.zq = 0, this.k = function() {
		hq.turnstile.aQn(), aK.setState(6), aTw = 0, aTx = 1, aU3 = "rgba(0,220,120,0.4)", aU4 = "rgba(0,0,0,0.8)", this.resize(), aC.ah = !0, aU8 = 1, aU9 = 0, aU7 = this.rG - 1, aUA = 0 === this.jL ? eo.zs ? 1 : 0 : this.jL - 1, aUB(1)
	}, this.resize = function() {
		aTz = Math.floor((ca.cb.cc() ? .5 : .25) * aA.cd), aU0 = aTz + 12, aTy = Math.floor(.125 * aTz), aU2 = 3 * aTy, aU1 = Math.floor(.225 * aTz), aU6 = Math.floor(.3 * aTy), aU5 = bT.ed.ef(0, aU6)
	}, this.aUD = function(m9) {
		m9 === aU7 && aUE()
	}, this.m = function(aF, aG) {
		var na = Math.floor((aA.b1 - aU0) / 2),
			nc = Math.floor(.5 * (aA.b2 - dO.gap - aTy - aU1)) + aTy + dO.gap;
		return na < aF && aF < na + aU0 && nc < aG && aG < nc + aU1 && (this.bL(), ui.n(aF, aG, !1), !0)
	}, this.bL = function() {
		a5.a6.a07(3260), __fx.customLobby.setActive(false), aH.a6.rE()
	}, this.j1 = function() {
		6 === aK.at() && (aC.aD > mc + 12e3 && aUE(), 100 < (aTw += .07 * aTx * (aTw < 16 ? 5 + aTw : 84 < aTw ? 105 - aTw : 17)) ? (aTw = 100, aTx = -1) : aTw < 0 && (aTw = 0, aTx = 1), aU3 = "rgba(0," + Math.floor(190 - 1.9 * aTw) + "," + Math
			.floor(120 - 1.2 * aTw) + "," + (.4 + .004 * aTw) + ")", aU4 = "rgba(0," + Math.floor(1.9 * aTw) + "," + Math.floor(1.2 * aTw) + "," + (.8 - .004 * aTw) + ")", aC.ah = !0)
	}, this.dP = function() {
		var aF = Math.floor((aA.b1 - aU0) / 2),
			aG = Math.floor(.5 * (aA.b2 - dO.gap - aTy - aU1));
		! function(title, aG, aIt, q6) {
			dQ.fillStyle = aU4, aUJ(aG, aIt, 1), dQ.fill(), dQ.fillStyle = aU3, aUJ(aG, aIt, q6), dQ.fill(), dQ.strokeStyle = dK.dM, aUJ(aG, aIt, 1), dQ.stroke(),
				function(aUL, aG) {
					bT.ed.textAlign(dQ, 1), bT.ed.textBaseline(dQ, 1), dQ.font = aU5, dQ.fillStyle = dK.dM, dQ.fillText(aUL, Math.floor(.5 * aA.b1), Math.floor(aG + .58 * aTy))
				}(title, aG)
		}(L(493), aG, 3, aTw / 100),
		function(aF, aG, b1, b2, aH6) {
			dQ.fillStyle = dK.a5h, dQ.fillRect(aF, aG, b1, b2), dQ.lineWidth = 3, dQ.strokeStyle = dK.dM, dQ.strokeRect(aF, aG, b1, b2);
			var en = Math.floor(.3 * b2);
			bT.ed.textAlign(dQ, 1), bT.ed.textBaseline(dQ, 1), dQ.font = bT.ed.ef(0, en), dQ.fillStyle = dK.dM, dQ.fillText(aH6, Math.floor(aF + b1 / 2), Math.floor(aG + b2 / 2 + .1 * en))
		}(aF, aG + aTy + dO.gap, aU0, aU1, L(6))
	}
}

function e7() {
	var aJg, aUQ, aUM = document.createElement("div"),
		aUN = document.createElement("div"),
		aUO = document.createElement("div"),
		aUP = document.createElement("div"),
		a0O = [],
		a47 = [L(494), L(495), L(496), L(497), L(498), L(499), L(500), L(501)],
		aUR = [1, 2, 3, 0, 9, 10, 11, 13];

	function aUS(ce) {
		aH.eF(8, 0, new eS(21, {
			zJ: aUR[ce],
			rL: 0,
			rM: 10
		}))
	}
	this.show = function() {
			this.jX(aH.a6.r9), document.body.appendChild(aUM)
		}, this.c1 = function() {
			aH.removeChild(document.body, aUM)
		}, this.jX = function(r9) {
			for (var aUT = [3, 0, 1, 2, 4, 5, 6, 7], ce = 0; ce < a0O.length; ce++) {
				var b1 = r9[ce];
				aJg[aUT[ce]][1].qj.textContent = b1 || ""
			}
		}, this.resize = function() {
			var ce, bi = dO.gap,
				b2 = bT.ed.aDz(.085),
				b1 = Math.min(4 * b2, aA.b1 - 2 * bi),
				en = a0O.length;
			for (bT.ed.ee(aUM, bi, aA.b2 - bi - b2, b1, b2), bT.ed.eh(aUM), bT.ed.eh(aUN, 6), ce = 0; ce < en - 1; ce++) bT.ed.eh(a0O[ce].button, 6);
			for (ce = 0; ce < en; ce++) aJg[ce][0].resize(), aJg[ce][1].resize();
			for (a0O[0].aF = 0, a0O[0].button.style.left = bT.ed.a23(a0O[0].aF), a0O[0].button.style.width = bT.ed.aDx(1.7 * b2), ce = 1; ce < en; ce++) a0O[ce].aF = a0O[ce - 1].aF + a0O[ce - 1].button.offsetWidth, a0O[ce].button.style.left = bT.ed
				.a23(a0O[ce].aF);
			if (!aUQ) {
				if (!eJ.eK()) return;
				(aUQ = eJ.get(14)).style.width = "24%", aUQ.style.position = "absolute", aUN.appendChild(aUQ)
			}
			aUQ.style.left = bT.ed.a23(0), aUQ.style.top = "7%", aUO.aEA && (aUO.scrollLeft = aUO.aEA)
		}, aUM.style.position = "absolute", aUN.style.width = "25%", aUN.style.height = "100%", aUN.style.backgroundColor = dK.eG, aUO.style.position = "absolute", aUO.style.width = "75%", aUO.style.height = "100%", aUO.style.backgroundColor = dK.eG,
		aUO.style.top = aUO.style.right = bT.ed.a23(0), bT.ed.aE8(aUO), aUP.style.height = aUP.style.maxHeight = "100%", a0O.push(new e9("", function() {
			aUS(0)
		}, dK.a6D)), a0O.push(new e9("", function() {
			aUS(1)
		}, dK.eC)), a0O.push(new e9("", function() {
			aUS(2)
		}, dK.a67)), a0O.push(new e9("", function() {
			aUS(3)
		}, dK.a5y)), a0O.push(new e9("", function() {
			aUS(4)
		}, dK.a6X)), a0O.push(new e9("", function() {
			aUS(5)
		}, dK.a6T)), a0O.push(new e9("", function() {
			aUS(6)
		}, dK.a6X)), a0O.push(new e9("", function() {
			aUS(7)
		}, dK.oK)), aJg = new Array(a0O.length);
	for (var ce = 0; ce < a0O.length; ce++) a0O[ce].button.style.position = "absolute", aJg[ce] = [new qd(a47[ce], a0O[ce].button, .25, .45), new qd("", a0O[ce].button, .53, .84, 1)], a0O[ce].button.style.height = a0O[ce].button.style.maxHeight =
		"100%", a0O[ce].button.top = bT.ed.a23(0), aUP.appendChild(a0O[ce].button);
	aUO.appendChild(aUP), aUM.appendChild(aUN), aUM.appendChild(aUO)
}

function w3() {
	this.a6 = new aBr, this.f2 = new aUU, this.k = function() {
		this.a6.k()
	}, this.j1 = function() {
		0 !== this.a6.a8s && this.a6.a8s--
	}
}

function aTI() {
	var aUV;
	this.k = function() {
		if (!aUV) {
			aUV = new Array(g8.aC1.length);
			for (var ce = 0; ce < aUV.length; ce++) aUV[ce] = f1.a6.aC2(20, g8.aC1[ce])
		}
	}, this.dP = function() {
		var aAf = cS;
		if (!(5 <= aAf)) {
			var aOZ = aA.b1,
				aOa = aA.b2,
				na = cT / aAf,
				nc = cU / aAf,
				ev = (aOZ + cT) / aAf,
				ew = (aOa + cU) / aAf,
				xF = -20 * aAf,
				aUX = .5 * xF,
				aOb = dC.dD << 4,
				en = f4.a6.kr,
				kp = f4.a6.kp,
				lF = f4.a6.lF,
				a7P = g8.a7P,
				ni = aUV,
				t1 = dQ;
			3 < aAf && (t1.globalAlpha = .5 * (5 - aAf));
			for (var ce = 0; ce < en; ce++) {
				var qs = kp[ce],
					aF = aOZ * (qs % aOb / 16 - na) / (ev - na) + aUX,
					qs = aOa * (Math.floor(qs / aOb) / 16 - nc) / (ew - nc) + aUX;
				aOZ < aF || aOa < qs || aF < xF || qs < xF || (t1.setTransform(aAf, 0, 0, aAf, aF, qs), aF = ni[a7P[lF[ce] >> 3]], t1.drawImage(aF, 0, 0))
			}
			t1.globalAlpha = 1, t1.setTransform(aAf, 0, 0, aAf, 0, 0)
		}
	}
}

function aH1(aGv, aGp, aUa, aGw, aUb, aUc) {
	var aUd = document.createElement("div"),
		aUe = document.createElement("div"),
		aUf = document.createElement("div"),
		aUg = document.createElement("div"),
		aUh = document.createElement("div"),
		aUi = document.createElement("div"),
		aUj = document.createElement("div"),
		aUk = document.createElement("div"),
		aUl = document.createElement("span"),
		aUm = document.createElement("div");
	this.aH7 = new aUn(aUb, aUc), this.aHC = new aUo(aUc), this.aHF = [aGv, aGp, aUa, aGw], this.aHK = function(q6) {
		q6 = (q6 / 10).toFixed(1) + "%";
		aUk.style.width = q6, aUl.innerHTML = q6
	}, this.aHD = function() {
		this.aHC.c1(aUi), this.aH7.show(aUi)
	}, this.aHE = function() {
		this.aH7.c1(aUi), this.aHC.show(aUi)
	}, this.aH5 = function() {
		return aUe
	}, this.show = function() {
		document.body.appendChild(aUd)
	}, this.c1 = function() {
		aH.removeChild(document.body, aUd)
	}, this.resize = function(aUr) {
		var aUs = 1 - .4 * ca.cb.cc() * (aA.b1 > 1.6 * aA.b2),
			eZ = bT.ed.aDy(.05 * aUs),
			aUt = aA.b2 > aA.b1,
			aUu = bT.ed.aDy(.06 * aUs + .03 * aUt),
			aUv = bT.ed.aDy(.08 * aUs + .03 * aUt),
			aUw = bT.ed.aDy(.04 + .02 * aUt),
			aUt = bT.ed.aDy(.02 * aUs + .01 * aUt),
			aUy = bT.ed.aDy(.025);
		aUd.style.font = bT.ed.ef(0, aUy), aUh.style.font = bT.ed.ef(0, .9 * aUy), aUm.style.font = bT.ed.ef(0, .9 * aUy), aUs < 1 && (aUy = bT.ed.ef(0, aUs * aUy), aUf.style.font = aUy, aUh.style.font = aUy, aUm.style.font = aUy, aUj.style
				.font = aUy, aUg.style.font = aUy), aUe.style.height = bT.ed.a23(eZ), aUe.style.font = bT.ed.ef(0, .72 * eZ), bT.ed.eh(aUe, 2), aUf.style.top = bT.ed.a23(eZ), aUf.style.height = bT.ed.a23(aUv), bT.ed.eh(aUf, 2), aUg.style.font =
			bT.ed.ef(0, aUs * bT.ed.aDy(.02)), aUg.style.top = bT.ed.a23(eZ + aUv), aUg.style.height = bT.ed.a23(aUw), bT.ed.eh(aUg, 2), aUh.style.top = bT.ed.a23(eZ + aUv + aUw), aUh.style.height = bT.ed.a23(aUu), bT.ed.eh(aUh, 2), aUi.style
			.top = bT.ed.a23(eZ + aUv + aUw + aUu), aUi.style.height = bT.ed.a23(aA.b2 / aA.aB - eZ - aUv - 2 * aUu - aUw - aUt), aUj.style.top = bT.ed.a23(aA.b2 / aA.aB - aUu - aUt), aUj.style.height = bT.ed.a23(aUt), bT.ed.eh(aUj, 8), aUl.style
			.font = bT.ed.ef(0, .8 * aUt), aUm.style.top = bT.ed.a23(aA.b2 / aA.aB - aUu), aUm.style.height = bT.ed.a23(aUu), bT.ed.eh(aUm, 8), aGv.resize(aUf), aGp.resize(aUf), aUa.resize(aUf), aGw.resize(aUf), aUr ? this.aH7.resize(aUi) : this
			.aHC.resize()
	};
	aUb = this;
	aUd.style.position = "absolute", aUd.style.top = "0", aUd.style.left = "0", aUd.style.width = "100%", aUd.style.height = "100%", aUd.style.backgroundColor = dK.a5j, aU.ac() || (aUd.style.backdropFilter = "blur(4px)", aUd.style
			.webkitBackdropFilter = "blur(4px)"),
		__fx.customLobby.isActive() && (aUd.style.display = "none"), aUe.style.position = "absolute", aUe.style.top = "0", aUe.style.left = "0", aUe.style.width = "100%", aUe.style.display = "flex", aUe.style.alignItems = "center";
	for (var jU = [aUf, aUg, aUh, aUm], ce = 0; ce < jU.length; ce++) jU[ce].style.position = "absolute", jU[ce].style.left = "0", jU[ce].style.width = "100%", bT.ed.aE8(jU[ce]);
	aUi.style.position = "absolute", aUi.style.left = "0", aUi.style.width = "100%", aUi.style.font = "inherit", aUj.style.position = "absolute", aUj.style.left = "0", aUj.style.width = "100%", aUk.style.position = "absolute", aUk.style.top = "0",
		aUk.style.left = "0", aUk.style.height = "100%", aUk.style.width = "50%", aUk.style.backgroundColor = dK.a0s, aUl.innerHTML = "", aUl.style.position = "absolute", aUl.style.top = "50%", aUl.style.left = "50%", aUl.style.transform =
		"translate(-50%, -50%)", aUe.appendChild(function() {
			var a0Z = document.createElement("h1");
			return a0Z.textContent = L(502), a0Z.style.margin = "0 auto 0.15em auto", a0Z.style.fontFamily = "Arial Black, system-ui", a0Z.style.fontSize = "inherit", a0Z.style.fontWeight = "inherit", a0Z
		}()), aUf.appendChild(aGv.r6), aUg.appendChild(aGp.r6), aUh.appendChild(aUa.r6), aUj.appendChild(aUk), aUj.appendChild(aUl), aUm.appendChild(aGw.r6), aUd.appendChild(aUe), aUd.appendChild(aUf), aUd.appendChild(aUg), aUd.appendChild(aUh), aUd
		.appendChild(aUi), aUd.appendChild(aUj), aUd.appendChild(aUm), aUb.aHC.show(aUi)
}

function fq(aV0, aTQ, aV1) {
	function click() {
		var value = 1 - aV0.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + aTQ, void 0 !== aV0.eI ? cs.jD.jX(aV0.eI, value) : aV0.value = value, aV1 && aV1(value)
	}
	var a2;
	aTQ = aTQ || L(503), this.a2 = document.createElement("p"), (a2 = this.a2).textContent = (aV0.value ? "🟩 " : "⬜ ") + aTQ, a2.style.margin = "0", a2.style.marginBottom = "0.5em", a2.style.cursor = "pointer", a2.addEventListener("click", click)
}

function w5() {
	function aV5() {
		return {
			dD: dC.dD,
			dE: dC.dE,
			f0: dC.f0,
			kB: dC.kB,
			kC: dC.kC,
			kF: dC.kF,
			k5: dC.k5,
			mapSeed: dC.mapSeed,
			kD: dC.kD
		}
	}

	function aV3(ce) {
		return 1 !== ce && dC.aV4(ce) && ce !== dC.aV7()
	}
	this.aFY = 25, this.aPm = 13, this.fb = 4096, this.dD = 0, this.dE = 0, this.f0 = null, this.kB = null, this.kC = null, this.kF = null, this.k5 = 0, this.mapSeed = 0, this.kD = !1, this.kE = new xb, this.k3 = new aPb, this.oh = new aJV, this.k =
		function() {
			this.k3.k()
		}, this.iE = function(map, aV2) {
			((map %= this.aFY) !== this.k5 || aV3(this.k5) && aV2 !== this.mapSeed) && (this.kD = !1, this.kE.xm(), hw.hx(map), this.k5 = map, this.mapSeed = aV2, aV3(map) && (dC.k3.k4[map].xr = aV2), this.aV4(this.k5) ? (map = dC.k3.k4[this.k5],
				this.dD = map.b1, this.dE = map.b2, hw.hx(map.xr), r1.iE([this.dD, this.dE, map.aAJ, map.aAG]), qk(), i6.aFZ(), r1.xn()) : aBq())
		}, this.a9V = function(map, aV2) {
			var gw = aV5(),
				map = (this.iE(map, aV2), this.kE.xm(), aV5());
			return aV2 = gw, dC.dD = aV2.dD, dC.dE = aV2.dE, dC.f0 = aV2.f0, dC.kB = aV2.kB, dC.kC = aV2.kC, dC.kF = aV2.kF, dC.k5 = aV2.k5, dC.mapSeed = aV2.mapSeed, dC.kD = aV2.kD, map
		}, this.aO8 = function(canvas) {
			canvas && this.f0 !== canvas && (this.dD = canvas.width, this.dE = canvas.height, this.f0 = canvas, this.kB = this.f0.getContext("2d", {
				alpha: !1
			}), this.aB0 = this.kB.getImageData(0, 0, this.dD, this.dE), this.kF = this.aB0.data, this.k5 = this.aV7(), this.mapSeed = 0, dC.k3.k4[this.k5].name = aI.data.mapName)
		}, this.a8d = function(ce) {
			return 3 === ce || 7 === ce || 9 === ce || 21 === ce || ce === this.aV7()
		}, this.aG4 = function(ce) {
			return 2 === ce || 7 === ce || 9 === ce || 20 === ce
		}, this.aFc = function(ce) {
			return 1 === ce
		}, this.aV7 = function() {
			return this.aFY
		}, this.aV4 = function(ce) {
			return void 0 === this.k3.k4[ce].xo
		}, this.a9U = function(bx) {
			return 0 === bx.mapType ? bx.mapProceduralIndex < 10 ? bx.mapProceduralIndex : 10 + bx.mapProceduralIndex : 1 === bx.mapType ? 10 <= bx.mapRealisticIndex ? 22 + bx.mapRealisticIndex - 10 : bx.mapRealisticIndex + 10 : void 0
		}, this.aV8 = function(bx, aV9) {
			0 === bx.mapType ? bx.mapProceduralIndex = aV9 < 10 ? aV9 : aV9 - 10 : 1 === bx.mapType && (bx.mapRealisticIndex = aV9 - (22 <= aV9 ? 12 : 10))
		}
}

function vn() {
	var ax, oj = !1,
		aVA = !1,
		aVB = -1e4,
		aVC = -1,
		aVD = 0;

	function resize(aVI) {
		ax = 0, eJ.eK() && (aVG(aVI) || oj) && (oj = !1, dO.resize(), us.a7s.resize(), ui.k(), el.k(), bK.resize(), ak.resize(), ek.resize(), uz.resize(), aH.resize(), 1 <= aI.aJ ? (aX.resize(!1), f7.resize(), be.resize(), aY.resize(), aZ.resize(),
			aa.resize(), aS.resize(), aL.resize(), aT.resize(), aR.resize(), f6.resize(), aP.resize(), aN.resize(), cz.resize(), aO.resize(), f5.resize(), aY.d0()) : (aK.aVJ(), aK.aVK()), aC.ah = !0)
	}

	function aVF(gU) {
		return gU && 128 < gU ? Math.floor(gU) : 128
	}

	function aVG(aVI) {
		var b1, b2, aVM, fH, a0Y;
		if (!(0 < aA.av)) return fH = aVF(document.documentElement.clientWidth), a0Y = aVF(window.visualViewport && 2 !== ca.id ? window.visualViewport.height : document.documentElement.clientHeight), b1 = fH, b2 = a0Y, aVM = 0 !== ca.id || b1 < b2 ?
			700 : 1200, aVM = Math.min(aVM / ((b1 + b2) / 2), 1), aVM = 0 === cs.buffer.data[1].value ? 2 * aVM / 3 : Math.min(aVM + (cs.buffer.data[1].value - 1) * (1 - aVM) / 2, 1), aA.aB = (window.devicePixelRatio || 1) * aVM, __fx
			.hoveringTooltip.canvasPixelScale = aA.aB, aVI && !aVA ? (aVA = !0, aH.removeChild(document.body, l)) : aVA && (aVA = !1, document.body.appendChild(l)), b1 = Math.floor(.5 + fH * aA.aB), b2 = Math.floor(.5 + a0Y * aA.aB), b1 !== aA
			.b1 || b2 !== aA.b2 ? (aA.b1 = b1, aA.b2 = b2, aA.min = aFt(b1, b2), aA.max = nS(b1, b2), aA.cd = gf.gg(b1 + b2, 2), aA.aVE = b1 / b2, l.width = b1, l.height = b2, l.style.width = fH + "px", l.style.height = a0Y + "px", aVC = aC.aD +
				1e3, 1) : void 0
	}
	this.b1 = 0, this.b2 = 0, this.min = 0, this.max = 0, this.cd = 0, this.aVE = 1, this.aB = 1, this.av = 0, this.i5 = function() {
		this.b1 = aVF(document.documentElement.clientWidth) + 2, this.b2 = aVF(document.documentElement.clientHeight) + 2
	}, this.k = function() {
		ax = 1, l = document.getElementById("canvasA"), 2 === ca.id && (l.style.webkitUserSelect = "none"), (dQ = l.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aVG(0)
	}, this.j1 = function() {
		50 <= ++ax && resize(0), -1 === aVC || aC.aD < aVC || (aVC = -1, 2e3 * ++aVD >= aC.aD + 8e3 ? console.log("error 3748") : ca.cb.setState(15))
	}, this.wa = function(om) {
		oj = !0, resize(om)
	}, this.bJ = function() {
		aVB + 1e3 > aC.aD || (aVB = aC.aD, resize(0))
	}
}

function lX() {
	this.aVO = function(d5) {
		var a8m;
		return dC.a8d(dC.k5) && aI.data.passableMountains && (a8m = i4.o8(d5), this.aVP(aI.bS, a8m) || this.aVQ(aI.bS, a8m)) && 0 !== (a8m = function(a8I) {
			for (var aF = i9.nb(a8I), aG = i9.nd(a8I), max = Math.max(dC.dD, dC.dE) - 2, aVT = max * max, l4 = !1, aVU = 0, xJ = 0; xJ < max; xJ++) {
				var aVV, kz = function(aF, aG, xJ) {
					for (var ce = 0; ce <= xJ; ce++)
						for (var jR = -1; jR < 2; jR += 2)
							for (var gv = -1; gv < 2; gv += 2)
								for (var ax = 0; ax < 2; ax++) {
									var d5 = function(aF, aG) {
										if (i9.aVX(aF, aG)) {
											aF = i9.u5(aF, aG), aG = i9.lO(aF);
											if (i4.l7(aG) && i4.a7R(aG)) return aF
										}
										return 0
									}(aF + ax * jR * ce + (1 - ax) * gv * xJ, aG + ax * gv * xJ + (1 - ax) * jR * ce);
									if (d5) return d5
								}
					return 0
				}(aF, aG, xJ);
				kz && (aVV = i9.aVW(aF, aG, kz)) < aVT && (aVU = kz, aVT = aVV, l4 || (l4 = !0, max = Math.floor(Math.sqrt(aVV)) + 1))
			}
			return aVU
		}(i9.aQ6(d5))) && (d5 = i9.lO(a8m), i4.l8(d5) || (d5 = i4.l9(d5)) !== aI.bS && h7.h8(d5, aI.bS)) ? a8m : 0
	}, this.aGX = function(player, kz) {
		kz = i9.lO(kz);
		if (i4.l7(kz)) {
			if (i4.l8(kz)) gk.h6[0] = aI.fo;
			else if (i4.l9(kz) !== gk.h6[0]) return !1;
			for (var g9 = function(d5) {
					var a1z = i4.a1z,
						g9 = [];
					loop: for (var gy = 3; 0 <= gy; gy--) {
						var lK = d5 + a1z[gy];
						if (i4.o7(lK)) {
							for (var id = i4.o8(lK), ce = 0; ce < g9.length; ce++)
								if (id === g9[ce]) continue loop;
							gk.aGY[g9.length] = lK, g9.push(id)
						}
					}
					return g9
				}(kz), en = g9.length, ce = 0; ce < en; ce++)
				if (this.aVP(player, g9[ce]) || this.aVQ(player, g9[ce])) return gk.aGY[0] = gk.aGY[ce], !0
		}
		return !1
	}, this.aVP = function(player, a8m) {
		for (var a2w = bX.a2w[player], en = a2w.length, a8p = Math.max(gf.gg(en, 12), 1), a1z = i4.a1z, ce = 0; ce < en; ce += a8p)
			for (var lN = a2w[ce], gy = 3; 0 <= gy; gy--) {
				var lK = lN + a1z[gy];
				if (i4.o7(lK) && a8m === i4.o8(lK)) return !0
			}
		return !1
	}, this.aVQ = function(player, a8m) {
		for (var a2w = bX.a2w[player], en = a2w.length, a1z = i4.a1z, ce = 0; ce < en; ce++)
			for (var lN = a2w[ce], gy = 3; 0 <= gy; gy--) {
				var lK = lN + a1z[gy];
				if (i4.o7(lK) && a8m === i4.o8(lK)) return !0
			}
		return !1
	}
}

function aCo() {
	var aVY = 0,
		aVZ = "",
		aVa = 0,
		aVb = 0,
		aVc = 0;

	function aH2(aH6) {
		a5.a3X.aHA(3, aH6)
	}

	function aVm(lu) {
		aVY = 1, b7.message.zC({
			id: 6,
			value: lu
		})
	}

	function aVg(mj) {
		var aVq = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return mj.match(aVq)
	}
	this.de = function(mj) {
		var aVd, jU, aVi;
		if (aVY) return aVY = 0, "yes" === (aVd = mj.toLowerCase()) || "y" === aVd ? void aH2(aVZ) : void b7.message.zC({
			id: 5,
			zA: 7
		});
		!(mj.indexOf("@") < 0) && (aVd = aVg(mj)) ? (aVZ = mj, jU = function(aVf) {
			for (var en = aVf.length, aVo = [0, 0, 0, 0], ce = 0; ce < en; ce++)
				for (var b1 = aVf[ce], jR = 0; jR < 4; jR++) b1 === "@room" + (jR + 1) && (aVo[jR] = 1);
			if ((aVb = bT.fY.fc(aVo)) % 4 == 0) return bT.fY.aVp(b7.cC.a5N);
			for (jR = 0; jR < 4; jR++) aVo[jR] = aVo[jR] ? b7.cC.a5N[jR] : [];
			return bT.fY.aVp(aVo)
		}(aVd), function(aVf, aVi, mj) {
			if (!aVa) return;
			for (var en = aVi.length, ce = 0; ce < en; ce++) 2 === aVi[ce].id && (mj = mj.replace(aVf[aVi[ce].eI], "@" + aVi[ce].gU));
			return aVY = 1, aH2((aVZ = mj).slice(0, 126) + "|"), 1
		}(aVd, aVi = function(aVf) {
			for (var aVi = [], en = (aVc = aVa = 0, aVf.length), ce = 0; ce < en; ce++) {
				var b1 = aVf[ce],
					ju = b1.length;
				bT.bZ.startsWith(b1, "@[") ? ju <= 9 && bT.bZ.a41(b1, "]") && aVi.push({
					id: 0,
					gU: b1.substring(2, ju - 1).toUpperCase()
				}) : 6 === ju ? bT.bZ.startsWith(b1, "@room") || (aVc++, aVi.push({
					id: 1,
					gU: k0.cA.a1O(b1.substring(1), 5)
				})) : 1 < ju && ju < 5 && 0 <= (ju = jG.data.a4h(b1.substring(1))) && (aVi.push({
					id: 2,
					gU: ju,
					eI: ce
				}), aVa = 1)
			}
			return aVi
		}(aVd), mj) || (0 === aVi.length ? aVb || function(aVf) {
			for (var en = aVf.length, ce = 0; ce < en; ce++) {
				var b1 = aVf[ce];
				if ("@all" === b1 || "@everyone" === b1) return 1
			}
			return
		}(aVd) ? aVm(jU.length) : aH2(mj) : aVd.length === aVc ? aH2(mj) : (function(jU, aVi) {
			var ju = aVi.length;
			if (0 === ju) return;
			var en = jU.length;
			loop: for (var ce = en - 1; 0 <= ce; ce--) {
				for (var jR = 0; jR < ju; jR++)
					if (0 === aVi[jR].id) {
						if (aVi[jR].gU === bT.bZ.a3w(jU[ce].username)) continue loop
					} else if (1 === aVi[jR].id && aVi[jR].gU === jU[ce].cE) continue loop;
				jU[ce] = jU[--en], jU.pop()
			}
		}(jU, aVi), aVm(jU.length)))) : aH2(mj)
	}, this.z9 = function(mj) {
		var aVf = aVg(mj);
		if (aVf)
			for (var aVr = new RegExp("^[0-9]+$"), en = aVf.length, ce = 0; ce < en; ce++) {
				var b1 = aVf[ce].substring(1),
					ju = b1.length;
				1 <= ju && ju <= 3 && aVr.test(b1) && (ju = parseInt(b1, 10), !isNaN(ju)) && 0 <= ju && ju < jG.data.jU.length && (mj = mj.replace("@" + b1, "@" + jG.data.jU[ju]))
			}
		return mj
	}
}

function wM() {
	function aVt(a2) {
		aW1(a2), aH.eF(4, 5, new rO("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new e9("⬅️ " + L(6), function() {
				aH.fX()
			}), new e9("🔄 Reload", function() {
				ca.cb.aAD()
			}, dK.nP)]))
	}

	function aVz(a2) {
		aW1(a2), aH.eF(4, 5, new rO(L(504), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [a2] ?? aVx(a2), !0))
	}

	function aVx(a2) {
		var bb = " [" + a2 + "]";
		return 3249 === a2 || 1006 === a2 ? "No Internet / No Server Response / Server Restart" + bb : 4527 === a2 ? "Player already in lobby" + bb : 4577 === a2 ? "Your IP is banned." + bb : 4530 === a2 ? "Lobby Timeout" + bb : 4528 === a2 ?
			"Lobby Kick: Another login detected." + bb : 4540 === a2 ? "You have been kicked." + bb : 4495 === a2 ? "Account doesn't exist." : 4229 === a2 ? "Bad Internet / Unresponsive Client" + bb : 4555 === a2 ? "This Account is blocked." + bb :
			4580 === a2 ? "More Gold needed" + bb : 4557 <= a2 && a2 <= 4560 || 4589 == a2 ? "Please try again later!" + bb : 4591 === a2 ? "The algo determined you are a bot." + bb : "Unknown error" + bb
	}

	function aW1(a2) {
		aVu(a2), aH.a6.rE()
	}

	function aVu(a2) {
		4540 === a2 && a5.a6.a07(a2);
		var g0 = aK.at();
		uz.close(), 6 === g0 ? a5.a6.a07(a2) : b7.b8 ? (aH.jC(), b7.lk(), a5.a6.close(a5.a6.mD, 3256)) : 8 === g0 && aI.iV(!0)
	}
	this.aVs = [], this.a0A = function(m9, a2) {
		if (1 === m9 && __fx.customLobby.isActive() && 6 !== aK.at() && __fx.customLobby.setActive(!1), this.aVs.push(a2), 8 === aH.bg && 0 === m9)
			if (4211 === a2) aVt(a2);
			else {
				if (b7.b8 && (4495 === a2 || 4480 === a2) && a5.a6.mD !== m9) return void aH.fX();
				if (8 !== aK.at() && aVu(), 4480 === a2) return cs.jD.aIF(), void aH.eF(4, 0, new rO(L(506), L(507), !0));
				var aVw = 0;
				aH.bh() && 10 === aH.bh().rJ && (aVw = aH.bh().rJ), aH.eF(4, aVw, new rO(L(504), aVx(a2), !0))
			}
		else {
			aVw = aK.at();
			if (6 === aVw) {
				if (4211 === a2) return void aVt(a2);
				if (4215 !== a2 && 4516 !== a2 && 4527 !== a2 && 4533 !== a2 && 4528 !== a2 && !(4557 <= a2 && a2 <= 4560) && 4577 !== a2 && 4576 !== a2) return void bK.aUD(m9)
			} else if (b7.b8) {
				if (m9 !== a5.a6.mD) return
			} else {
				if (8 === aVw) return void(m9 !== a5.a6.a8 || aI.df || 1 !== aI.aJ || aI.bG || aa.nv(L(505, [a2])));
				if (!(4579 <= a2 && a2 <= 4589)) return
			}(4591 === a2 ? function(a2) {
				aW1(a2), aH.eF(4, 5, new rO("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new e9("⬅️ " + L(6), function() {
					aH.fX()
				}), new e9("🔄 Reload", function() {
					ca.cb.aAD()
				}, dK.nP)]))
			} : aVz)(a2)
		}
	}, this.a06 = function(a2) {
		this.aVs.push(a2), 8 === aK.at() ? aI.df || 1 !== aI.aJ || aa.nv(L(505, [a2])) : aVz(a2)
	}, this.aW0 = function() {
		this.aVs.push(3268), aW1(3268)
	}
}

function vB() {
	var size, pM;
	this.k = function() {
		size = aI.hX, pM = new Uint16Array(aI.fo);
		for (var gN = aI.gN, ce = aI.hX - 1; 0 <= ce; ce--) pM[ce] = gN + ce
	}, this.j1 = function() {
		iA.aST.j1();
		for (var ce = size - 1; 0 <= ce; ce--)
			if (0 === bX.g3[pM[ce]]) {
				jR = void 0;
				var jR = ce;
				size--, pM[jR] = pM[size]
			} else iD.j1(pM[ce])
	}, this.a7u = function(fF) {
		pM[size++] = fF
	}
}

function aOs() {
	var aW4 = [];

	function aW5(cE) {
		aW4.unshift(cE), cs.jD.jX(161, aW4.join(";"))
	}

	function aNE(cE) {
		for (var aW6 = aW4, en = aW6.length, ce = 0; ce < en; ce++)
			if (aW6[ce] === cE) return aW6.splice(ce, 1), cs.jD.jX(161, aW6.join(";")), 1
	}
	this.k = function() {
		var bb = cs.buffer.data[161].value;
		bb.length && (aW4 = bb.split(";"))
	}, this.get = function() {
		return aW4
	}, __fx.followedAccounts.setSource(this.get), this.aKt = function() {
		return {
			fl: __fx.followedAccounts.decorate(aW4),
			value: 0
		}
	}, this.a5U = function(cE) {
		return bT.fY.has(aW4, cE)
	}, this.aL6 = function(cE) {
		return aNE(cE) ? 0 : (aW5(cE), 1)
	}, this.j6 = function(cE) {
		aNE(cE) && aW5(cE)
	}, this.aKs = function(eI) {
		eI < aW4.length && (aW4.splice(eI, 1), cs.jD.jX(161, aW4.join(";")))
	}
}

function aTL() {
	function aW9(player, aBN) {
		aBN = i9.kt(f4.a6.kp[aBN]), aBN = i4.o8(i9.lO(aBN));
		return !!f4.c3.aEH(player, aBN)
	}

	function aW7(player) {
		return f4.wd.we(player) && !f4.a84.a89()
	}
	this.aI5 = function(player, kz) {
		return !!aW7(player) && -1 !== (kz = function(player, kz) {
			for (var en = f4.a6.kr, kp = f4.a6.kp, lF = f4.a6.lF, aQA = i9.aEE(), aPT = -1, ce = 0; ce < en; ce++) {
				var xJ = i9.aBL(kz, i9.kt(kp[ce]));
				xJ < aQA && bT.bU.g6(player, lF[ce] >> 3) && (aQA = xJ, aPT = ce)
			}
			return aPT
		}(player, kz)) && !!aW9(player, kz) && (gk.wt[3] = f4.a6.u9[kz], !0)
	}, this.a8V = function(player, l1) {
		return !!aW7(player) && !!f4.c3.aB7(l1) && !!aW9(player, gk.wt[2])
	}, this.wr = function(player, l1, aWA) {
		return !! function(player, l1, aWA) {
			if (aW7(player) && f4.c3.aB7(l1)) {
				l1 = gk.wt[2];
				if (bT.bU.g6(player, f4.a6.lF[l1] >> 3)) {
					if (function(player, aBN) {
							return f4.c3.aQD(player, aBN) && (gk.jU[0] = f4.a84.a8B(f4.a6.aBE[aBN]), gk.wt[1] = 6, !0)
						}(player, l1)) return 1;
					var lC = i9.kt(f4.a6.kp[l1]),
						a85 = f4.c3.a86(player, lC);
					if (-1 !== a85) {
						a85 = i9.aBL(a85, lC);
						if (!(aWA && 120 < a85)) {
							aWA = function(aBN, aWE, lC) {
								var aBD = f4.a6.aBE[aBN],
									aBN = f4.a6.lE[aBN],
									aWG = i9.aBL(lC, aBD[aBN + 1]);
								if (aWE <= aWG) return f4.c3.aQE(lC, aBD[aBN + 1], aWG, aWE);
								for (var xJ = aWE - aWG, en = aBD.length - 1, ce = aBN + 1; ce < en; ce++) {
									var aWH = i9.aBL(aBD[ce], aBD[ce + 1]);
									if (xJ <= aWH) return f4.c3.aQE(aBD[ce], aBD[ce + 1], aWH, xJ);
									xJ -= aWH
								}
								return aBD[en]
							}(l1, a85, lC);
							if (f4.x8.a80(player, aWA, 1)) return gk.wt[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, l1, aWA) && (player = gk.wt[2], f4.a6.ko[player] = 64 + f4.a6.ko[player] % 64, f4.ku.jp(l1, f4.a6.aCX), !0)
	}
}

function cG() {
	var a2I, e5, aWI = document.createElement("div"),
		aWJ = document.createElement("div"),
		bm = 0,
		aWK = 0;
	this.show = function(aF, aG, bb, cF, aWL, ax) {
			if (bm) {
				if (!cF) return;
				this.c1()
			}
			aF === aG && -1 === aF ? (aF = a2I, aG = e5) : (a2I = aF, e5 = aG);
			var aWM = Math.floor(bT.ed.aDy(.018)),
				aWL = (aF = Math.max(aWM + 2, aF), aWL || (aWK = cF), bm = 1, aA.b1 / aA.aB),
				cF = (aWI.style.whiteSpace = "pre", aWI.textContent = bb, bT.ed.eh(aWI, 5), aWI.style.font = bT.ed.ef(0, bT.ed.aDy(.015)), aWI.style.padding = "0.3em 0.6em", aWI.style.left = aF + "px", aWI.style.top = "0px", document.body
					.appendChild(aWI), aF + aWI.offsetWidth - aWL),
				bb = (0 < cF && (aF -= cF, aF = Math.max(aWM + 1, aF), aWI.style.left = aF + "px", aF < aWM + 2) && (aWI.style.whiteSpace = "pre-wrap"), aWI.offsetHeight);
			aWI.style.top = aG - bb + aWK * dO.yg + "px", aF -= aWM, aWJ.style.backgroundColor = bT.color.a5f(ax >> 12 << 2, (ax >> 6 & 63) << 2, (63 & ax) << 2), aWJ.style.left = aF + "px", aWJ.style.top = aWI.style.top, aWJ.style.width = aWM +
				"px", aWJ.style.height = bb + "px", bT.ed.eh(aWJ, 4), bT.ed.eh(aWJ, 8), bT.ed.eh(aWJ, 2), document.body.appendChild(aWJ)
		}, this.c1 = function(cH) {
			if (bm) {
				if (cH && aWK) return 0;
				bm = 0, aH.removeChild(document.body, aWI), aH.removeChild(document.body, aWJ)
			}
			return 1
		}, aWI.style.position = "absolute", aWI.style.backgroundColor = dK.eG, aWI.style.color = dK.dM, aWI.style.pointerEvents = "none", aWI.style.zIndex = "5", aWI.style.maxWidth = "100%", aWJ.style.position = "absolute", aWJ.style.color = dK.dM,
		aWJ.style.pointerEvents = "none", aWJ.style.zIndex = "5"
}

function a1s() {
	aWP() ? (aWQ(), a1W !== aI.fo && aWR()) : a1p()
}

function aWR() {
	h7.aWS(), h7.aWT(bX.pH[a1W]), h7.aWT(bX.l3[a1W]), dC.a8d(dC.k5) && h7.aWT(bX.a2w[a1W]), h7.aWU(bX.lT[a1W]), h7.aWV(bX.l3[a1W]), h7.aWV(bX.a2w[a1W]), h7.aWW(), h7.aWX()
}

function aWQ() {
	a1d = !0, iN.aTu(a1S, a1R, a1T), iN.aTv(a1S, a1R), bX.gD[a1S] += a1X, h7.aWY(), aWZ()
}

function aWP() {
	return (a1W === aI.fo ? aWa : aWb)()
}

function aWb() {
	var aWc = a1X * aI.hV,
		aWd = aWe(),
		aWf = aWg(),
		aWd = aWc + 2 * aWd + aWf,
		aWi = a1V * a1X;
	return aWd < aWi ? (a1T -= aWd, h0.h1(a1S, aWd, 13), aWj(aWd - aWc, aWf), !0) : a1U && 0 === aWf ? (a1T -= aWi, aWi += bT.bU.gt(a1S, aWd - aWi + 1), h0.h1(a1S, aWi, 13), aWj(aWi - aWc, 0), !0) : (a1T -= aWi, h0.h1(a1S, aWi, 13), aWj(aWi - aWc,
		aWf), !1)
}

function aWj(aWi, aWf) {
	if (0 < aWf) {
		if (aWi <= aWf) return h0.h1(a1W, aWi, 13), void iN.aTq(a1W, a1S, aWf - aWi);
		iN.aTq(a1W, a1S, 0), aWi -= aWf
	}
	aWi = gf.gg(aWi, 2), aWi = Math.min(bX.gM[a1W], aWi), h0.h1(a1W, aWi, 13), bX.gM[a1W] -= aWi
}

function aWg() {
	return iN.aTp(a1W, a1S)
}

function aWe() {
	return gf.gg(a1X * bX.gM[a1W], 1 + gf.gg(10 * bX.gD[a1W], 16))
}

function aWa() {
	var aWk = a1X * aI.hV;
	return a1T -= aWk, h0.h1(a1S, aWk, 13), !0
}

function aWZ() {
	for (var ce = a1X - 1; 0 <= ce; ce--) bX.lT[a1S].push(a1Z[ce]), bX.pH[a1S].push(a1Z[ce]), i4.a1w(a1Z[ce], a1S)
}

function a0L() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function cL() {
	this.aRJ = function(bc, player) {
		aa.oB(aI.bS, player, bc), a5.oC.mU(bc, player)
	}, this.nY = function(player) {
		aa.oS(player, 0), a5.oC.mX(player)
	}, this.aWl = function(aWm, player) {
		aa.oU(aWm, player), a5.oC.mZ(aWm, player)
	}, this.dv = function() {
		aI.df || aI.bG || a5.a3b.dv()
	}
}

function vi() {
	var aWn, jU;
	this.k = function() {
		for (var ce = (jU = new Uint16Array(101)).length - 1; 0 <= ce; ce--) jU[ce] = gf.gg(32768 * ce, 100);
		this.hx(0)
	}, this.value = function(fF) {
		return jU[fF]
	}, this.xs = function() {
		return gf.gg(aWn - 1, 2)
	}, this.hx = function(xr) {
		aWn = 2 * xr % 32768 + 1
	}, this.random = function() {
		return aWn = 167 * aWn % 32768
	}, this.pL = function(oE) {
		return gf.gg(oE * this.random(), 32768)
	}, this.pV = function(fF) {
		return 0 !== fF && this.random() < this.value(fF)
	}, this.aWo = function(jR, gv) {
		return jR + this.pL(gv - jR)
	}
}

function wQ() {
	this.aWY = function() {
		for (var aF, aG, ce = a1X - 1; 0 <= ce; ce--) aF = gf.gg(a1Z[ce], 4) % dC.dD, aG = gf.gg(a1Z[ce], 4 * dC.dD), bX.sj[a1S] = Math.min(aF, bX.sj[a1S]), bX.sk[a1S] = Math.min(aG, bX.sk[a1S]), bX.sl[a1S] = Math.max(aF, bX.sl[a1S]), bX.sm[
			a1S] = Math.max(aG, bX.sm[a1S])
	}, this.a1j = function() {
		var gy, fF, ce, en = bX.lT[a1S].length,
			a1z = i4.a1z;
		loop: for (ce = en - 1; 0 <= ce; ce--) {
			for (gy = 3; 0 <= gy; gy--)
				if (fF = bX.lT[a1S][ce] + a1z[gy], i4.l8(fF) || i4.lP(fF) && i4.l9(fF) !== a1S) {
					i4.a7f(bX.lT[a1S][ce], a1S);
					continue loop
				} bX.lT[a1S][ce] = bX.lT[a1S][en - 1], bX.lT[a1S].pop(), en--
		}
	}, this.a1k = function() {
		var player = a1S,
			pH = bX.pH,
			l3 = bX.l3,
			a2w = bX.a2w,
			en = pH[player].length,
			a1z = i4.a1z;
		loop: for (var ce = en - 1; 0 <= ce; ce--) {
			for (var aWp = !1, aWq = !1, gy = 3; 0 <= gy; gy--) {
				var fF = pH[player][ce] + a1z[gy];
				if (i4.a7S(fF, player)) continue loop;
				aWp = aWp || i4.xu(fF), aWq = aWq || i4.a7Q(fF)
			}
			aWp ? l3[player].push(pH[player][ce]) : aWq ? a2w[player].push(pH[player][ce]) : i4.a32(pH[player][ce], player), pH[player][ce] = pH[player][en - 1], pH[player].pop(), en--
		}
	}, this.aWS = function() {
		bX.gD[a1W] -= a1X
	}, this.aWT = function(border) {
		for (var en = border.length, ce = en - 1; 0 <= ce; ce--) i4.tq(a1W, border[ce]) || (border[ce] = border[en - 1], border.pop(), en--)
	}, this.aWU = function(border) {
		for (var en = border.length, ce = en - 1; 0 <= ce; ce--) !i4.tq(a1W, border[ce]) && i4.l7(border[ce]) && (border[ce] = border[en - 1], border.pop(), en--)
	}, this.aWV = function(border) {
		for (var gy, fF, en = border.length, a1z = i4.a1z, ce = en - 1; 0 <= ce; ce--)
			for (gy = 3; 0 <= gy; gy--)
				if (fF = border[ce] + a1z[gy], i4.a7S(fF, a1W)) {
					bX.pH[a1W].push(border[ce]), border[ce] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.aWW = function() {
		for (var gy, fF, a1z = i4.a1z, ce = a1X - 1; 0 <= ce; ce--)
			for (gy = 3; 0 <= gy; gy--) fF = a1Z[ce] + a1z[gy], i4.lQ(a1W, fF) && i4.a7Y(fF) && (bX.pH[a1W].push(fF), i4.a1w(fF, a1W))
	}, this.aWX = function() {
		var aF, aG;
		loop: for (; bX.sk[a1W] < bX.sm[a1W];) {
			for (aF = bX.sl[a1W]; aF >= bX.sj[a1W]; aF--)
				if (i4.tq(a1W, 4 * (bX.sk[a1W] * dC.dD + aF))) break loop;
			bX.sk[a1W]++
		}
		loop: for (; bX.sk[a1W] < bX.sm[a1W];) {
			for (aF = bX.sl[a1W]; aF >= bX.sj[a1W]; aF--)
				if (i4.tq(a1W, 4 * (bX.sm[a1W] * dC.dD + aF))) break loop;
			bX.sm[a1W]--
		}
		loop: for (; bX.sj[a1W] < bX.sl[a1W];) {
			for (aG = bX.sm[a1W]; aG >= bX.sk[a1W]; aG--)
				if (i4.tq(a1W, 4 * (aG * dC.dD + bX.sj[a1W]))) break loop;
			bX.sj[a1W]++
		}
		loop: for (; bX.sj[a1W] < bX.sl[a1W];) {
			for (aG = bX.sm[a1W]; aG >= bX.sk[a1W]; aG--)
				if (i4.tq(a1W, 4 * (aG * dC.dD + bX.sl[a1W]))) break loop;
			bX.sl[a1W]--
		}
	}, this.h8 = function(player, g7) {
		return 0 === g8.g9[player] || g8.g9[player] !== g8.g9[g7]
	}, this.aWr = function(player) {
		for (var ce, xF, en = bX.pH[player].length, a1z = i4.a1z, gy = 3; 0 <= gy; gy--)
			for (xF = a1z[gy], ce = 0; ce < en; ce++)
				if (i4.l8(bX.pH[player][ce] + xF)) return !0;
		return !1
	}, this.aNF = function(player) {
		for (var ce, xF, en = bX.pH[player].length, a1z = i4.a1z, gy = 3; 0 <= gy; gy--)
			for (xF = a1z[gy], ce = 0; ce < en; ce++)
				if (i4.a31(bX.pH[player][ce]) && i4.l8(bX.pH[player][ce] + xF)) return !0;
		return !1
	}, this.aWs = function(gR, gS) {
		for (var ce, mf, xF, fF, mv = bX.pH[gR].length, mw = bX.pH[gS].length, a1z = (mw < mv && (mf = gR, gR = gS, gS = mf, mf = mv, mv = mw, 0), i4.a1z), gy = 3; 0 <= gy; gy--)
			for (xF = a1z[gy], ce = 0; ce < mv; ce++)
				if (fF = bX.pH[gR][ce] + xF, i4.lP(fF) && i4.l9(fF) === gS) return !0;
		return !1
	}, this.aNG = function(gR, gS) {
		for (var ce, xF, fF, mv = bX.pH[gR].length, a1z = i4.a1z, gy = 3; 0 <= gy; gy--)
			for (xF = a1z[gy], ce = 0; ce < mv; ce++)
				if (i4.a31(bX.pH[gR][ce]) && (fF = bX.pH[gR][ce] + xF, i4.lP(fF)) && i4.l9(fF) === gS) return !0;
		return !1
	}
}

function aUo(aUc) {
	var aUd = document.createElement("div"),
		aUi = document.createElement("div");
	this.j6 = function() {
			aUi.textContent = "", b7.c0.br && b7.c0.c1(1);
			for (var aIo = document.createDocumentFragment(), aWt = b7.a6.ps[0], cC = b7.cC.a5N[aWt], yq = b7.cC.yq[aWt], ce = 0; ce < cC.length; ce++) ! function(aIo, bx, aWv, aWt) {
				var qj = document.createElement("span");
				qj.textContent = (aWv ? "🟢 " : "⚪ ") + b7.c3.aWw(bx, aWt), qj.style.color = b7.c3.aJu(bx.c5), 11 === bx.c5 && (qj.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				qj.style.cursor = "pointer", qj.style.margin = "0.2em 0.2em 0.2em 0.2em", qj.style.width = qj.style.maxWidth = 2 === aWt ? "10em" : "9em", qj.style.height = qj.style.maxHeight = "1.4em", qj.style.whiteSpace = "nowrap", qj.style
					.overflow = "hidden", qj.style.textOverflow = "ellipsis", qj.style.font = "inherit", qj.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aWv = __fx.utils.getDuplicateIpHighlightColor(bx, b7.cC.a5N[aWt],
						"cB")) && (qj.style.backgroundColor = aWv, qj.style.borderRadius = "0.3em");
				b7.c3.yQ(bx) && (qj.style.textDecoration = "underline"), bx.a5U && (qj.style.textDecorationLine = "underline", qj.style.textDecorationStyle = "dotted");
				qj.onclick = function(a2) {
					aUc(a2, bx)
				}, aU.ac() || (qj.onmouseover = function(a2) {
					b7.c0.bw(a2.target, bx, 1)
				}), aIo.appendChild(qj)
			}(aIo, cC[ce], ce < yq, aWt);
			aUi.appendChild(aIo)
		}, this.show = function(a20) {
			a20.appendChild(aUd)
		}, this.c1 = function(a20) {
			aH.removeChild(a20, aUd)
		}, this.resize = function() {
			aUi.style.fontSize = bT.ed.a23(bT.ed.aDy(.02, .3))
		}, aUd.style.top = "0", aUd.style.left = "0", aUd.style.width = aUd.style.height = "100%", aUd.style.overflowX = "hidden", aUd.style.overflowY = "auto", aUd.style.font = "inherit", aUi.style.font = "inherit", aUi.style.margin = "0.4em", aUd
		.appendChild(aUi)
}

function aGx(aWx, aTS, aWy) {
	this.r6 = document.createElement("div"), this.a0O = aWx;
	var aWz = 0;
	this.resize = function(a20, aX0) {
		var en = aWx.length;
		if (!aWy)
			for (var ce = 1; ce < en; ce++) bT.ed.eh(aWx[ce].button, 4);
		for (var aX1 = 0, ce = 0; ce < en; ce++) aX1 += aWx[ce].button.offsetWidth;
		if (a20 && (aWz = a20.offsetWidth), aX0 && aX1 < aWz)
			for (ce = 0; ce < en; ce++) aWx[ce].button.style.width = (100 * aWx[ce].button.offsetWidth / aX1).toFixed(2) + "%";
		else
			for (ce = 0; ce < en; ce++) aWx[ce].button.style.width = "auto";
		aX0 || this.resize(a20, 1)
	};
	var dh = this;
	dh.r6.style.height = dh.r6.style.maxHeight = "100%";
	for (var ce = 0; ce < aWx.length; ce++) aWx[ce].eU(aTS), aWx[ce].button.style.height = "100%", aWx[ce].button.style.padding = "0.0em 0.9em", aWx[ce].button.style.whiteSpace = "pre", dh.r6.appendChild(aWx[ce].button)
}

function aSe() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 !== aI.data.sResourcesType && (aI.data.sResourcesData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.sResourcesType && bT.fY.fZ(fN.fa(), aI.data.sResourcesData, 2047)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(402), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(173), L(174), L(10)],
			value: aI.data.sResourcesType
		}, function(eI) {
			fU(), 2 !== eI || aI.data.sResourcesData || (aI.data.sResourcesData = new Uint16Array(aI.fo)), aI.data.sResourcesType = eI, aH.eF(28)
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi;
		1 === aI.data.sResourcesType && ((fi = new fj).fk("Value"), fi.fp(new eH({
			eI: -1,
			value: aI.data.sResourcesValue
		}, 1, 0, function(a2) {
			var value = gf.hI(Math.floor(a2.target.value), 0, 2047);
			a2.target.value = aI.data.sResourcesValue = value
		})), fd.push(fi))
	}(fd), function(fd) {
		var fi;
		2 === aI.data.sResourcesType && ((fi = new fj).fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.sResourcesData, 2)), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function w2() {
	this.jU = new Array(4), this.aX2 = new Uint16Array(2), this.pj = new Uint16Array(2), this.aX3 = new Int32Array(2), this.gl = new Uint32Array(2), this.aX4 = new Uint32Array(2), this.a7O = new Uint8Array(4), this.aX5 = new Uint8Array(4), this.aGY =
		new Uint32Array(4), this.aX6 = new Uint32Array(5), this.h6 = new Uint32Array(8), this.wt = new Uint32Array(8), this.xG = new Uint16Array(16), this.pk = new Uint16Array(512), this.a2c = new Uint16Array(512), this.a2d = new Uint16Array(512),
		this.a8F = new Uint16Array(0), this.k = function() {
			var en = dC.dD * dC.dE;
			this.a8F.length !== en && (this.a8F = new Uint16Array(en))
		}, this.aX7 = function(jU, gw) {
			return jU[0] = gw, jU
		}, this.aX8 = function(jU, gw, gx) {
			return jU[0] = gw, jU[1] = gx, jU
		}, this.aX9 = function(jU, gw, gx, gz) {
			return jU[0] = gw, jU[1] = gx, jU[2] = gz, jU
		}, this.aXA = function(jU, gw, gx, gz, aXB) {
			return jU[0] = gw, jU[1] = gx, jU[2] = gz, jU[3] = aXB, jU
		}
}

function aSY() {
	var fL, rw;

	function aXC() {
		aH.jC();
		var bb = eN.rh(rw.fa());
		(aI.aJ && 0 < bb.length && bb === eN.iX.iY || eN.eO.eP(bb)) && eN.rc()
	}
	this.show = function(aXD) {
		this.rb(aXD), fL.show(), this.resize()
	}, this.rb = function(aXD) {
		0 === aI.aJ ? aXD ? rw.fu(aXD) : aI.ho.length && rw.fu(aI.ho) : (aI.bG || (eN.iX.iY = eN.iZ.ia()), rw.fu(eN.ri(eN.iX.iY)))
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), rw.resize()
	}, this.b6 = function(ax) {
		2 === ax ? fL.fw[0].fx() : aXC()
	}, fL = new fP(L(447), [new e9("⬅️ " + L(6), function() {
		aH.aBP(1)
	}), new e9(L(508), function() {
		rw.ry()
	}), new e9(L(509), function() {
		rw.rz()
	}), new e9(L(510), function() {
		rw.clear()
	}), new e9(L(511), function() {
		aXC()
	})]), rw = new ft(L(512)), fL.fS.appendChild(rw.a2)
}

function aSa() {
	var j9, e2, aOv, aXE, aXF, aXG, colors = [0, 0, 0],
		aXH = -1;

	function aXK(ce) {
		var aXL = e2.aG + ce * (dO.gap + aXG);
		dQ.fillStyle = "rgb(" + (0 === ce ? 150 : 2 === ce ? 30 : 0) + "," + (1 === ce ? 130 : 2 === ce ? 30 : 0) + "," + (2 === ce ? 220 : 0) + ")", dQ.fillRect(aXE, aXL, colors[ce] * aXF, aXG), dQ.strokeStyle = dK.dM, dQ.strokeRect(aXE, aXL, aXF,
			aXG), dQ.fillStyle = dK.dM, dQ.font = bT.ed.ef(0, .32 * aXG), bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 0), dQ.fillText(L(0 === ce ? 515 : 1 === ce ? 516 : 517) + aXI(ce), aXE + dO.gap, aXL + .53 * aXG)
	}

	function aXI(ce, aXM) {
		return aXM = aXM || 256, gf.hI(Math.floor(aXM * colors[ce]), 0, aXM - 1)
	}

	function aq(d1, d2) {
		return !(d1 < aXE || d2 < e2.aG || d1 > e2.aF + e2.b1 || d2 > e2.aG + e2.b2)
	}
	this.show = function() {
		var gU = cs.buffer.data[121].value;
		colors[0] = (gU >> 12) / 63, colors[1] = (gU >> 6 & 63) / 63, colors[2] = (63 & gU) / 63, j9.show(), this.resize()
	}, this.c1 = function() {
		cs.jD.jX(121, (aXI(0, 64) << 12) + (aXI(1, 64) << 6) + aXI(2, 64)), j9.c1()
	}, this.resize = function() {
		j9.resize(), e2.resize();
		var ax = aA.aB,
			nB = j9.aPD(),
			aXJ = (e2.aG = Math.max(e2.aG, ax * nB.aPG + dO.gap), ax * nB.aPF - 2 * dO.gap);
		e2.b2 = Math.min(e2.b2, aXJ), e2.b1 = 2 * e2.b2, e2.aG = ax * nB.aPG + .5 * (ax * nB.aPF - e2.b2), e2.aF = .5 * (aA.b1 - e2.b1), aOv = .25 * e2.b1, aXE = e2.aF + aOv + dO.gap, aXF = e2.b1 - aOv - dO.gap, aXG = (e2.b2 - 2 * dO.gap) / 3
	}, this.dP = function() {
		var au, bi, gv;
		j9.dP(), dQ.lineWidth = dO.yf, au = aXI(0), bi = aXI(1), gv = aXI(2), dQ.fillStyle = "rgb(" + au + "," + bi + "," + gv + ")", dQ.fillRect(e2.aF, e2.aG, aOv, e2.b2), dQ.strokeStyle = dK.dM, dQ.strokeRect(e2.aF, e2.aG, aOv, e2.b2), dQ
			.fillStyle = au + bi + gv < 306 && bi < 150 ? dK.dM : dK.oK, bT.ed.textBaseline(dQ, 1), bT.ed.textAlign(dQ, 1), dQ.font = bT.ed.ef(0, .1 * e2.b2), dQ.rotate(-Math.PI / 2), dQ.fillText(L(514), -e2.aG - .5 * e2.b2, e2.aF + .5 * aOv), dQ
			.setTransform(1, 0, 0, 1, 0, 0), aXK(0), aXK(1), aXK(2)
	}, this.m = function(d1, d2) {
		aq(d1, d2) && (aXH = gf.hI(Math.floor((d2 - e2.aG) / (aXG + .75 * dO.gap)), 0, 2), colors[aXH] = gf.hI((d1 - aXE) / aXF, 0, 1), aC.ah = !0)
	}, this.n = function(d1) {
		-1 !== aXH && (colors[aXH] = gf.hI((d1 - aXE) / aXF, 0, 1), aC.ah = !0)
	}, this.q = function(d1, d2, deltaY) {
		aq(d1, d2) && (d1 = gf.hI(Math.floor((d2 - e2.aG) / (aXG + .75 * dO.gap)), 0, 2), colors[d1] = gf.hI(colors[d1] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), aC.ah = !0)
	}, this.aj = function() {
		0 <= aXH && (aXH = -1, aC.ah = !0)
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(513), [new e9("⬅️ " + L(6), function() {
		aH.a6.rH()
	})], !1), e2 = new e8([.5, .25], [.5, .5], 1)
}

function w6() {
	var i = 0,
		j = 0;
	this.ae = function(aF, aG) {
		i = aF, j = aG
	}, this.b3 = function(code) {
		var u1, u2, kz;
		aI.bG || aS.bE || (bT.bU.fz(0) || bT.bU.fz(1)) && bT.bU.g2(aI.bS) && (aZ.m(i, j) ? aZ.ag = !1 : aR.m(i, j) || (u1 = i9.su(i), u2 = i9.sw(j), kz = i9.u5(u1, u2), i9.u3(u1, u2) && (0 === code ? function(kz) {
			var aXQ, d5, lN;
			aI.g1 ? -1 !== (aXQ = uy.aRK(kz)) && du.cJ.a8R(kz) : (d5 = i9.lO(kz), i4.o7(d5) ? (aXQ = ul.lW.aVO(d5)) && (lN = i9.lO(aXQ), lN = i4.l8(lN) ? aI.fo : i4.l9(lN), du.cJ.a8b(aZ.a52(), aXQ, lN)) : (aXQ = uy.aRL(kz)) < 0 ||
				(d5 = i9.lO(aXQ), i4.l8(d5) ? h7.aWr(aI.bS) ? du.cJ.a8S(aZ.a52(), aI.fo) : iN.a1g(aI.bS) && iP.aNI(aI.fo, aZ.a52()) : (lN = i4.l9(d5), h7.h8(lN, aI.bS) && (h7.aWs(aI.bS, lN) ? du.cJ.a8S(aZ.a52(), lN) : iN.a1g(
					aI.bS) && iP.aNI(lN, aZ.a52())))))
		}(kz) : 1 === code ? function(kz) {
			f4.aTJ.aEC(aI.bS, kz) && du.cJ.a8T(aZ.a52(), gk.wt[7])
		}(kz) : 2 === code && function(kz) {
			f4.wq.aI5(aI.bS, kz) && du.cJ.a8U(aZ.a52())
		}(kz))))
	}, this.b4 = function() {
		if (!aI.bG && !aS.bE && bT.bU.fz(1)) {
			var fF = aI.bS;
			if (bT.bU.g2(fF)) {
				var en = iN.a1g(fF);
				if (en < 1) ! function() {
					var fF = aI.bS;
					if (h7.aWr(fF)) du.cJ.a8S(aZ.a52(), aI.fo);
					else
						for (var a1z = i4.a1z, pH = bX.pH, en = pH[fF].length, aFm = Math.floor(Math.random() * en), ce = 0; ce < en; ce++)
							for (var l0 = 3; 0 <= l0; l0--) {
								var kU = pH[fF][(ce + aFm) % en] + a1z[l0];
								if (i4.lP(kU)) {
									kU = i4.l9(kU);
									if (kU !== fF && (!aI.dm || h7.h8(fF, kU))) return du.cJ.a8S(aZ.a52(), kU)
								}
							}
				}();
				else {
					for (var aXS = 0, ge = iN.a1m(fF, 0), ce = 1; ce < en; ce++) {
						var aXT = iN.a1m(fF, ce);
						aXT < ge && (ge = aXT, aXS = ce)
					}
					du.cJ.a8S(aZ.a52(), iN.a1l(fF, aXS))
				}
			}
		}
	}, this.b5 = function() {
		if (!aI.bG && !aS.bE && bT.bU.g2(aI.bS) && bT.bU.fz(1)) return aT.af ? aT.aGT(aI.bS) ? void du.cJ.a8Z(1) : void 0 : void(aT.aGW(aI.bS) && du.cJ.b5())
	}
}

function w9() {
	this.hv = 2, this.mH = 1762, this.aCg = 0;
	this.rVersion = 25, this.k = function() {
		this.aXZ = "2.16.55", this.eX = "19 Oct 2026 [" + this.aXZ + "]", this.hostname = window.location.hostname.toLowerCase(), this.aD4 = 0 <= this.hostname.indexOf("territorial.io"), this.aQl = 0 <= this.hostname.indexOf("github.io"), this
			.zs = 0 <= this.hostname.indexOf("game.territorial.io"), this.aD5 = function() {
				try {
					return window.self !== window.top
				} catch (a2) {
					return !0
				}
			}(), this.mG = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aD4 + " validMod: " + +this.aQl)
	}, this.wb = 0
}

function aCk() {
	this.wY = function(eI) {
		if ((yq = b7.cC.yq[eI]) < 2 && !__fx.customLobby.isActive()) return !1;
		var q5 = b7.a6.pr[eI],
			aXb = 9 === q5.yl ? 333 : 512,
			yq = Math.min(yq, aXb);
		8 === q5.yl && (yq -= yq % 2);
		aXb = b7.cC.a5N[eI].splice(0, yq), b7.cC.yq[eI] -= yq, yq = function(aOk) {
			if (b7.yP) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var en = aOk.length, cE = b7.yP.cE, ce = 0; ce < en; ce++)
					if (aOk[ce].cE === cE) return ce
			}
			return -1
		}(aXb);
		return -1 === yq ? (b7.cC.a5O = b7.cC.a5O.concat(aXb), 1e3 < b7.cC.a5O.length && b7.cC.a5O.splice(0, b7.cC.a5O.length - 1e3), b7.a6.pt += 29 === aH.bg && b7.a6.ps[0] === eI && 1 === b7.a6.ps[2], !1) : (8 === q5.yl && (q5.mE = (q5.mE + (
			yq >> 1)) % 1024, eI = yq - yq % 2, yq %= 2, aXb = aXb.slice(eI, 2 + eI)), jg.k(q5, aXb, yq), !0)
	}, this.aOp = function(q5, aOk, aOl) {
		var gy = aI.data = new hl,
			aXd = (gy.spawningSeed = q5.spawningSeed, q5.yl < 7 ? (gy.gameMode = 1, gy.numberTeams = q5.yl + 2) : 9 === q5.yl ? (gy.gameMode = gy.isZombieMode = 1, gy.numberTeams = 2) : (gy.gameMode = 0, gy.battleRoyaleMode = 7 === q5.yl ? 0 :
				10 === q5.yl ? 1 : 2), gy.selectedPlayer = aOl, gy.isContest = q5.yp, gy.mapType = dC.aV4(q5.k5) ? 0 : 1, dC.aV8(gy, q5.k5), gy.mapSeed = q5.mapSeed, gy.humanCount = aOk.length);
		gy.selectableSpawn = 1 === gy.gameMode || aXd < 100, gy.colorsData = new Uint32Array(aXd), gy.playerNamesData = new Array(aXd), gy.a4P = new Uint32Array(aXd);
		for (var ce = 0; ce < aXd; ce++) gy.colorsData[ce] = aOk[ce].color, gy.playerNamesData[ce] = aOk[ce].username, gy.a4P[ce] = aOk[ce].cE;
		if (2 === gy.battleRoyaleMode)
			for (gy.elo = new Uint16Array(aXd), ce = 0; ce < aXd; ce++) gy.elo[ce] = aOk[ce].elo;
		uz.close(), aK.setState(8), dC.iE(q5.k5, gy.mapSeed), aI.hp(), aI.hn = 2
	}
}

function aXe() {
	this.eP = function(lr) {
		for (var jy = jz, size = jy.k6(lr), aXf = 7 + 9 * jy.k6(1), jU = [], ce = 0; ce < size; ce++) jU.push(String.fromCharCode(jy.k6(aXf)));
		return jU.join("")
	}
}

function aTF() {
	this.aKE = function(player) {
		for (var aQ8 = f4.a6.aQ8, rL = player << 3, ce = rL + f4.a6.pl[player] - 1; rL <= ce; ce--) this.kx(aQ8[ce])
	}, this.kx = function(aXg) {
		var a6 = f4.a6,
			aXh = a6.kr - 1,
			aXi = a6.lF[aXg],
			aXj = a6.aCR[aXg],
			aXk = a6.kp[aXg];
		a6.kr = aXh, a6.lF[aXg] = a6.lF[aXh], a6.kp[aXg] = a6.kp[aXh], a6.kq[aXg] = a6.kq[aXh], a6.lG[aXg] = a6.lG[aXh], a6.aCR[aXg] = a6.aCR[aXh], a6.u9[aXg] = a6.u9[aXh], a6.ko[aXg] = a6.ko[aXh], a6.aOX[aXg] = a6.aOX[aXh], a6.aBE[aXg] = a6.aBE[
				aXh], a6.lE[aXg] = a6.lE[aXh], a6.aQ8[a6.lF[aXg]] = aXg,
			function(a9B) {
				var player = a9B >> 3,
					a6 = f4.a6,
					en = a6.pl[player] - 1,
					aXn = (player << 3) + en;
				a6.pl[player] = en, aXn !== a9B && (a6.aQ8[a9B] = a6.aQ8[aXn], a6.lF[a6.aQ8[a9B]] = a9B)
			}(aXi), f4.xj.xj[i9.aCQ(a6.kp[aXg])][a6.aCR[aXg]] = aXg, aXh = i9.aCQ(aXk), aXi = aXj, aXh = f4.xj.xj[aXh], a6 = aXh.pop(), aXi !== aXh.length && (aXh[aXi] = a6, f4.a6.aCR[a6] = aXi)
	}
}

function vz() {
	function aXq(key) {
		var aXD;
		return "undefined" == typeof URLSearchParams || (aXD = window.location.search, "string" != typeof(aXD = new URLSearchParams(aXD).get(key))) || aXD.length < 1 ? null : aXD
	}
	this.wY = function() {
		if (0 !== ca.id) return !1;
		if (! function() {
				var value = aXq("account");
				if (!value && !(value = aXq("a"))) return void up.clear();
				return up.clear(), aH.eF(8, aH.bg, new eS(1e3, {
					action: 0,
					cE: value,
					yK: 0
				})), 1
			}()) {
			var value = aXq("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			aH.eF(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aAE = new URL(window.location.href);
		aAE.search = "";
		try {
			return history.replaceState(null, "", aAE.toString()), !0
		} catch (a2) {
			console.log("error 352: " + a2)
		}
		return !1
	}, this.aLZ = function(key, value) {
		if (0 === ca.id) try {
			var aAE = new URL(window.location.href),
				fF = aAE.searchParams;
			fF.set(key, value), aAE.search = fF.toString(), history.replaceState(null, "", aAE.toString())
		} catch (a2) {
			console.log("error 358: " + a2)
		}
	}
}

function aTG() {
	this.uP = 512, this.yZ = 8, this.kr = 0, this.aCX = 0, this.lF = new Uint16Array(this.uP), this.kp = new Uint32Array(this.uP), this.kq = new Uint16Array(this.uP), this.lG = new Uint32Array(this.uP), this.aCR = new Uint16Array(this.uP), this.u9 =
		new Uint16Array(this.uP), this.ko = new Uint8Array(this.uP), this.aOX = new Uint8Array(this.uP), this.aBE = new Array(this.uP), this.lE = new Uint16Array(this.uP), this.pl = new Uint8Array(aI.fo), this.aQ8 = new Uint16Array(this.yZ * aI.fo),
		this.k = function() {
			this.kr = 0, this.aCX = 0, this.pl.fill(0), this.aBE.fill(null)
		}, this.ws = function(player) {
			var ge = gk.gl[0],
				yc = gk.wt[1],
				aBD = gk.jU[0],
				aXs = this.aCX,
				en = this.kr,
				aCM = i9.aXt(aBD[0]),
				mv = this.pl[player],
				mw = (player << 3) + mv;
			this.lF[en] = mw, this.kp[en] = aCM, this.kq[en] = 0, ge < 60 && (bT.bU.gt(player, 60 - ge), ge = 60), this.lG[en] = ge, this.aCR[en] = f4.xj.ws(en, i9.aCQ(aCM)), this.u9[en] = aXs, this.ko[en] = yc, this.aOX[en] = 0, this.aBE[en] = aBD,
				this.lE[en] = 0, this.aCX = (aXs + 1) % 65536, this.pl[player] = mv + 1, this.aQ8[mw] = en, this.kr++, f4.yc.ky(player, aBD[aBD.length - 1], yc, aXs, ge)
		}, this.j1 = function() {
			f4.yc.j1();
			for (var fF = aI.bS, mf = f4.c3.aKB(fF), dh = (! function(dh) {
					for (var aXy, kp = dh.kp, lG = dh.lG, aOX = dh.aOX, kq = dh.kq, aCR = dh.aCR, aBE = dh.aBE, lE = dh.lE, dh = dh.kr, aOb = dC.dD << 4, ce = dh - 1; 0 <= ce; ce--) {
						var aXz = kp[ce],
							aBD = aBE[ce],
							aY0 = lE[ce],
							aCM = i9.aXt(aBD[aY0]),
							aCN = i9.aXt(aBD[aY0 + 1]),
							aY1 = aCM % aOb,
							aCM = ~~((aCM + .5) / aOb),
							aY3 = aCN % aOb,
							aY4 = ~~((aCN + .5) / aOb),
							aY5 = aY3 - aY1,
							aY6 = aY4 - aCM,
							gy = Math.max(~~Math.sqrt(aY5 * aY5 + aY6 * aY6 + .5), 1),
							u8 = lG[ce],
							u8 = (u8 = aOX[ce] ? 4e4 : 25e4 + Math.min(20 * u8, 3e5) + Math.min(u8 >> 3, 5e4), kq[ce] + Math.max(~~((u8 + .5) / gy), 1));
						65535 <= u8 ? aY0 + 2 < aBD.length ? (lE[ce] = aY0 + 1, kp[ce] = aXy = function(ce, aY7, aY1, aY2, aY0, gy, aBD, aOb) {
							aY7 = Math.min(aY7 - 65535, 65535);
							var aBD = i9.aXt(aBD[aY0 + 2]),
								aY0 = aBD % aOb - aY1,
								aBD = ~~((aBD + .5) / aOb) - aY2,
								aY9 = Math.max(~~Math.sqrt(aY0 * aY0 + aBD * aBD + .5), 1);
							return aY7 = Math.min(Math.floor((gy * aY7 + .5) / aY9), 65534), f4.a6.kq[ce] = aY7, aY1 + gf.gg(aY7 * aY0, 65535) + aOb * (aY2 + gf.gg(aY7 * aBD, 65535))
						}(ce, u8, aY3, aY4, aY0, gy, aBD, aOb)) : (kp[ce] = aXy = aCN, kq[ce] = 65535) : (kq[ce] = u8, kp[ce] = aXy = aY1 + gf.gg(u8 * aY5, 65535) + aOb * (aCM + gf.gg(u8 * aY6, 65535))), aCR[ce] = f4.xj.aCK(aCR[ce], aXz,
							aXy)
					}
				}(this), ! function(dh) {
					if (aC.j7() % 2 == 1) {
						var ce, kU, ju, gv, ax, aYA, aRG, aYB, kP, na, nc, aCM, aYC, d9, aYE, kQ, en = dh.kr,
							kp = dh.kp,
							lF = dh.lF,
							lG = dh.lG,
							aOX = dh.aOX,
							xj = f4.xj.xj,
							aYG = xj.length,
							aCG = f4.xj.aCG,
							aOb = dC.dD << 4,
							aYH = aI.dm,
							a90 = g8.g9,
							xF = (en - 1) * (gf.gg(aC.j7(), 2) % 2);
						for (ce = 0; ce < en; ce++)
							for (kU = Math.abs(ce - xF), aCM = kp[kU], ju = i9.aCQ(aCM), kP = lF[kU] >> 3, na = aCM % aOb, nc = ~~((aCM + .5) / aOb), aYE = lG[kU], gv = 0; gv < 9; gv++)
								if (!((aYA = ju + aCG[gv]) < 0 || aYG <= aYA))
									for (aYB = xj[aYA], aRG = aYB.length, ax = 0; ax < aRG; ax++) aYC = aYB[ax], kQ = lF[aYC] >> 3, kP == kQ || aYH && a90[kP] === a90[kQ] && a90[kP] || (kQ = kp[aYC], (d9 = na - kQ % aOb) * d9 + (d9 = nc - ~~(
										(kQ + .5) / aOb)) * d9 < 14400 && (kQ = lG[aYC], d9 = kQ <= aYE ? Math.max(1, gf.gg(kQ + gf.gg(aYE - kQ, 10), 10)) : Math.max(1, gf.gg(aYE, 10)), lG[aYC] = Math.max(kQ - d9, 0), aOX[aYC] = 4))
					}
				}(this), ! function(dh) {
					if (aC.j7() % 5 == 3)
						for (var lG = dh.lG, en = dh.kr, ce = 0; ce < en; ce++) {
							var ge = lG[ce];
							lG[ce] = Math.max(ge - Math.max(1, ge >> 7), 0)
						}
				}(this), this), lG = dh.lG, aOX = dh.aOX, ce = dh.kr - 1; 0 <= ce; ce--) aOX[ce] = aOX[ce] >> 1, 0 === lG[ce] && (f4.ku.kv(ce), f4.kw.kx(ce));
			h0.h1(fF, mf - f4.c3.aKB(fF), 15)
		}
}

function a3d() {
	this.aCj = function(m9, lj) {
		jz.k(lj), 0 === jz.size ? a5.a6.a05(m9, 3205) : __fx.customLobby.isCustomMessage(lj) || ((0 === jz.k6(1) ? function(m9) {
			var aYK = jz.k6(6);
			0 === aYK ? function(m9) {
					if (0 === m9 && 8 !== aK.at()) {
						aH.a6.rP();
						for (var aYQ = jz.k6(12), aYR = jz.k6(6), jU = new Array(aYQ), ce = 0; ce < aYQ; ce++) jU[ce] = jz.k6(aYR);
						ak.aJ4(jU)
					}
				}(m9) : 2 === aYK ? a5.a3e.yk(m9) : 3 === aYK || 4 === aYK ? jg.k() : 5 === aYK ? a5.a3f.aSD() : 9 === aYK ? a5.a3f.aSH(m9) : 10 === aYK ? a5.a3h.aYM() : 11 === aYK ? a5.a3f.aSI(m9) : 12 === aYK ? a5.a3h.aYN() : 13 ===
				aYK ? a5.a3j.aYO() : 14 === aYK ? a5.a3j.aYP() : 15 === aYK ? a5.a3f.aSJ() : 16 === aYK ? a5.a3e.yt(m9) : 17 === aYK ? a5.a3e.z2(m9) : 19 === aYK ? a5.a3e.zB(m9) : 20 === aYK ? a5.a3f.aSE(m9) : 21 !== aYK && 22 !==
				aYK && 23 === aYK && a5.a3f.aSL(m9)
		} : function(m9) {
			if (8 !== aK.at() && !jg.aOo()) return;
			if (m9 !== a5.a6.a8) a5.a6.a05(m9, 3244);
			else if (0 === jz.k6(1)) aC.zK.qI(jz.lj);
			else {
				var ce, m9 = jz.k6(2);
				if (0 === m9) {
					var bc, oC = jz.k6(9);
					0 !== bX.g3[oC] && 0 !== bX.g3[aI.bS] && (bc = jz.k6(10), aa.oB(oC, aI.bS, bc), cz.oT(oC, 1, bc))
				} else if (1 === m9) ! function() {
					var oC = jz.k6(9);
					0 !== bX.g3[oC] && 0 !== bX.g3[aI.bS] && iO.aNx(0, [oC], !0) && aa.oS(oC, 1)
				}();
				else if (2 === m9) ! function() {
					var oC = jz.k6(9),
						target = jz.k6(9);
					0 !== bX.g3[oC] && 0 !== bX.g3[target] && 0 !== bX.g3[aI.bS] && iO.aNx(1, [oC], !0) && (cz.oT(oC, 3, 96), cz.oT(target, 4, 96), aa.oV(oC, target))
				}();
				else if (eo.aD4 && !eo.aD5) {
					var en = 540;
					for (lo.iE(17287), lo.mB(1, 0), lo.mB(6, 10), en = Math.min(du.cO.i1.length, 540), ce = 0; ce < en; ce++) lo.aDA(32, du.cO.i1[ce]);
					a5.a6.send(a5.a6.a8, lo.lj)
				}
			}
		})(m9), aC.zQ())
	}
}

function yC(aWx) {
	var aUd = document.createElement("div"),
		aYX = document.createElement("div"),
		bm = (this.aF = 0, this.aG = 0);

	function aYZ() {
		b7.b9.c1()
	}
	this.a0O = aWx, this.show = function(aF, aG, yX) {
		if (bm) return [0, 0];
		bm = 1, this.aF = aF, this.aG = aG,
			function(self, yX) {
				var b1 = bT.ed.aDy(.16, .7),
					b2 = aWx.length * b1 / 3,
					aYc = aA.b1 / aA.aB,
					aYd = aA.b2 / aA.aB,
					d3 = Math.min(1, Math.min(aYc / b1, aYd / b2));
				b1 *= d3, b2 *= d3, yX && (self.aF += bT.ed.aDy(.03, .5)), self.aF = gf.hI(self.aF, 0, aYc - b1), self.aG = gf.hI(self.aG, 0, aYd - b2), aYX.style.left = self.aF + "px", aYX.style.top = self.aG + "px", aYX.style.width = b1 + "px",
					aYX.style.height = b2 + "px", aYX.style.font = bT.ed.ef(0, .3 * b2 / aWx.length), bT.ed.eh(aYX, 5);
				for (var ce = 1; ce < aWx.length; ce++) bT.ed.eh(aWx[ce].button, 8)
			}(this, yX), document.body.appendChild(aUd)
	}, this.c1 = function() {
		bm && (bm = 0, aUd.removeEventListener("click", aYZ), aH.removeChild(document.body, aUd))
	};
	for (var ce = 0; ce < aWx.length; ce++) new aH3("" + (1 + ce), aWx[ce].button, 0, 1);
	aUd.style.position = "fixed", aUd.style.top = "0", aUd.style.left = "0", aUd.style.width = "100%", aUd.style.height = "100%", aUd.style.zIndex = "5", aYX.style.position = "absolute",
		function() {
			for (var aYa = (100 / aWx.length).toFixed(2) + "%", ce = 0; ce < aWx.length; ce++) aWx[ce].button.style.width = "100%", aWx[ce].button.style.height = aWx[ce].button.style.maxHeight = aYa, aWx[ce].button.style.padding = "0.0em 0.9em", aYX
				.appendChild(aWx[ce].button)
		}(), aUd.appendChild(aYX), aUd.addEventListener("click", aYZ)
}

function vZ() {
	var aYe;

	function aYf(player) {
		var au, pC;
		return bT.bU.bV(player) && player < aI.gN ? 0 : (au = aYe[gf.gg((aI.fo - 1) * bX.gD[player], aI.hG)], aC.j7() < 1920 && (au = Math.max(gf.gg(100 * (13440 - 6 * aC.j7()), 1920), au)), pC = hO.pD(player), bX.gM[player] > pC && (au -= gf.gg(2 *
			au * (bX.gM[player] - pC), pC)), Math.min(Math.max(au, 0), 700))
	}

	function aYo(d3) {
		for (var gD = bX.gD, gJ = gC.gJ, ce = gC.gB - 1; 0 <= ce; ce--) {
			var fF = gJ[ce];
			bT.bU.gT(fF, gf.gg(d3 * gD[fF], 32))
		}
	}

	function aYl() {
		var kI = aI.bS;
		gk.aX3[0] = bX.gM[kI] - bX.gW[kI]
	}

	function aYn(eI) {
		var kI = aI.bS,
			kI = bX.gM[kI] - bX.gW[kI] - gk.aX3[0];
		hO.aLo += kI, h0.ir[eI] += kI
	}
	this.aLo = 0, this.wX = function() {
		for (var en = aI.fo, ce = (aYe = new Uint16Array(en), 0); ce < en; ce++) aYe[ce] = 100 + aFv(gf.gg(25600 * ce, en - 4), 9)
	}, this.k = function() {
		(this.aLo = 0) === aI.data.iIncomeType ? this.j3 = aYf : 1 === aI.data.iIncomeType ? this.j3 = function(player) {
			return gf.gg(aI.data.iIncomeValue * aYf(player), 64)
		} : this.j3 = function(player) {
			return gf.gg(aI.data.iIncomeData[player] * aYf(player), 64)
		}
	}, this.j1 = function() {
		if (aC.j7() % 10 == 9 && (hO.aLo = 0, function() {
				aYl();
				for (var gJ = gC.gJ, gM = bX.gM, ce = gC.gB - 1; 0 <= ce; ce--) {
					var fF = gJ[ce],
						aYm = gf.gg(hO.j3(fF) * gM[fF], 1e4);
					bT.bU.gT(fF, Math.max(aYm, 1))
				}
				aYn(9)
			}(), function() {
				if (0 !== aI.data.aIncomeType) {
					if (aYl(), 1 === aI.data.aIncomeType)
						for (var gD = bX.gD, gJ = gC.gJ, d3 = aI.data.aIncomeValue, ce = gC.gB - 1; 0 <= ce; ce--) {
							var fF = gJ[ce];
							bT.bU.gT(fF, gf.gg(d3 * gD[fF], 128))
						} else 2 === aI.data.aIncomeType && function() {
							for (var gD = bX.gD, gJ = gC.gJ, d3 = aI.data.aIncomeData, ce = gC.gB - 1; 0 <= ce; ce--) {
								var fF = gJ[ce];
								bT.bU.gT(fF, gf.gg(d3[fF] * gD[fF], 128))
							}
						}();
					aYn(18)
				}
			}(), aC.j7() % 100 == 99)) {
			if (aYl(), 0 === aI.data.tIncomeType) aYo(32);
			else if (1 === aI.data.tIncomeType) aYo(aI.data.tIncomeValue);
			else
				for (var gD = bX.gD, gJ = gC.gJ, d3 = aI.data.tIncomeData, ce = gC.gB - 1; 0 <= ce; ce--) {
					var fF = gJ[ce];
					bT.bU.gT(fF, gf.gg(d3[fF] * gD[fF], 32))
				}
			aYn(8)
		}
	}, this.pD = function(player) {
		return Math.min(100 * bX.gD[player], aI.hT)
	}, this.jl = function(player, bP) {
		hr.bO(player, bP, gk.gl[0], 0), bT.bU.gT(bP, gk.gl[0]), h0.iv(player, bP), cz.sd(player, gk.gl[0] + gk.gl[1]), cz.jq(bP, gk.gl[0]), bT.bU.h4(player)
	}, this.hP = function() {
		for (var en = gC.gB, n8 = gC.gJ, ju = 0, gX = bX.gM, ce = 0; ce < en; ce++) ju += gX[n8[ce]];
		return ju
	}, this.hR = function(aYh) {
		for (var fF, en = gC.gB, n8 = gC.gJ, ju = 0, gX = bX.gM, g9 = g8.g9, ce = 0; ce < en; ce++) g9[fF = n8[ce]] === aYh && (ju += gX[fF]);
		return ju
	}
}

function aSZ() {
	var j9, jA, fd;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), jA.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, j9 = new fP(L(518), [new e9("⬅️ " + L(6), function() {
		aH.eF(7, aH.bj(7).rJ)
	}), new e9(L(307), function() {
		cs.jD.jX(105, k0.cA.a1L(jA.aN0[0].a0B[0].a2.value, 5)), cs.jD.jX(106, k0.cA.a1L(jA.aN0[1].a0B[0].a2.value, 15)), aH.eF(8, aH.bj(7).rJ, new eS(18))
	})]), jA = new fR(j9.fS, ((fd = []).push(function() {
		var fi = new fj;
		return fi.fk(L(285)), fi.fp(new eH({
			value: "",
			eI: -1
		})), fi
	}()), fd.push(function() {
		var fi = new fj,
			aKo = (fi.fk(L(288)), new eH({
				value: "",
				eI: -1
			}));
		return aKo.a2.type = "password", fi.fp(aKo), fi.fp(new fs([new e9(L(289), function(a2) {
			return a2.textContent === L(289) ? (a2.textContent = L(290), aKo.a2.type = "text") : (a2.textContent = L(289), aKo.a2.type = "password"), !0
		}).button])), fi
	}()), fd.push(function() {
		var fi = new fj;
		return fi.fk(L(292)), fi.jI(L(519)), fi.jI(L(520)), fi.jI(L(521)), fi
	}()), fd))
}

function aCm() {
	var aNi = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aYu = [dK.a5s, dK.a5s, dK.a5t, dK.a6B, dK.a6C, dK.a64, dK.a6F, dK.a5t, dK.a6Y, dK.oN, dK.a6V, dK.oK],
		aYv = [
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
		aYw = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aZ0(z3, cE, aZ1) {
		for (var gv = z3.length - 1; 0 <= gv; gv--) {
			var bx = z3[gv];
			0 === bx.id && bx.cE === cE && (bx.mj = "[Redacted Message]", aZ1) && (bx.aJx = 1)
		}
	}
	this.aHd = function(aHa) {
		var aYx, aL3;
		return aHa.id < 5 && (aYx = "@" + c9.cA.ba(aHa.cE, 5)), 0 === aHa.id ? aYx + ": " + aHa.mj : 1 === aHa.id ? (aL3 = "@" + c9.cA.ba(aHa.target, 5), 0 === aHa.zA ? 32768 <= aHa.value ? aYx + " voted with " + (aHa.value - 32768 + 1) +
				" gold against " + aL3 + " to weaken the latter's admin position. 📉" : aYx + " voted with " + (aHa.value + 1) + " gold for " + aL3 + " to strengthen the latter's admin position. 💪" : 1 === aHa.zA ? aYx + " sent " + Math.floor(
					aHa.value / 100) + " 🧈 gold to " + aL3 + "." : aYx + " voted with " + (aHa.value / 10).toFixed(1) + " points for " + aL3 + " to acknowledge the latter as clan leader. ✅") : 2 === aHa.id ? 0 === aHa.zA ? aYx +
			" was 🔇 muted for 1 Hour." : 1 === aHa.zA ? "The username of " + aYx + " was ✂️ redacted. Duration: 1 Day" : aYx + " 👢 was kicked." : 3 === aHa.id ? aYx + ux.aNo(aHa.zA, ux.yJ[aHa.zA][aHa.value]) + "@" + c9.cA.ba(aHa.target, 5) + ux
			.aNp(aHa.zA, ux.yJ[aHa.zA][aHa.value]) : 4 === aHa.id ? aYx + ux.aNo(5, ux.yJ[5][aHa.zA]) + "@" + c9.cA.ba(aHa.target, 5) + ux.aNp(5, ux.yJ[5][aHa.zA]) : 5 === aHa.id ? aYw[aHa.zA] : 6 === aHa.id ? "You are about to mention " + aHa
			.value + " player" + (1 === aHa.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aHa.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aHa.id ? aHa.mj : void 0
	}, this.aHc = function(aHa, aH6) {
		return {
			aHa: aHa,
			mj: aH6,
			aJm: 0,
			fontSize: 1,
			aJk: 0,
			aJy: aHa.id ? dK.a6A : dK.dM
		}
	}, this.aWw = function(player, qA) {
		return (2 === qA ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.aJu = function(c5) {
		return aYu[c5]
	}, this.aJr = function(c5, c6) {
		return c5 < 3 || 7 === c5 ? aYv[c5][0] : 4 === c5 ? aYv[c5][c6 < 1 ? 0 : c6 < 10 ? 1 : 2] : aYv[c5][c6 < 10 ? 0 : 1]
	}, this.aJs = function(c6) {
		return 0 === c6
	}, this.cD = function(qA, cE) {
		for (var a5N = b7.cC.a5N, cC = a5N[qA], en = cC.length, ce = 0; ce < en; ce++)
			if (cE === cC[ce].cE) return cC[ce];
		for (var gv = 0; gv < a5N.length; gv++)
			if (qA !== gv)
				for (en = (cC = a5N[gv]).length, ce = 0; ce < en; ce++)
					if (cE === cC[ce].cE) return cC[ce];
		return null
	}, this.yQ = function(bx) {
		return !!b7.yP && bx.cE === b7.yP.cE
	}, this.aHS = function(cC, aYy, aYz) {
		var rN = [];
		loop: for (var ce = aYy; ce < aYz; ce++) {
			var aF7 = bT.bZ.a3w(cC[ce].username);
			if (aF7) {
				for (var gv = rN.length - 1; 0 <= gv; gv--)
					if (aF7 === rN[gv].name) {
						rN[gv].lu++;
						continue loop
					} rN.push({
					name: aF7,
					lu: 1
				})
			}
		}
		if (rN.sort(function(jR, gv) {
				return gv.lu - jR.lu
			}), 0 === rN.length) return "";
		for (var bb = rN[0].name + ": " + rN[0].lu, ce = 1; ce < rN.length; ce++) bb += "   " + rN[ce].name + ": " + rN[ce].lu;
		return bb
	}, this.c4 = function(c5, c6, c7) {
		return 0 === aNi[c5].length ? "Rank: " + (c6 + 1) : aNi[c5] + " Rank: " + (c6 + 1) + (3 !== c5 && c7 < 100 ? "   " + aNi[3] + " Rank: " + (c7 + 1) : "")
	}, this.aHb = function(cE) {
		for (var pr = b7.a6.pr, ce = 0; ce < pr.length; ce++) aZ0(pr[ce].z3, cE);
		aZ0(b7.message.aHm(), cE, 1), b7.sp.aHb(cE)
	}
}

function v2() {
	"function" != typeof Math.log2 && (Math.log2 = function(aF) {
		return Math.log(aF) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(aF) {
		return Math.log(aF) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(aF) {
		return 0 < aF ? 1 : aF < 0 ? -1 : 0
	})
}

function vI() {
	var bN, aZ2, aU5, a2K, aTy, aZ3 = 0,
		aZ4 = 0;

	function aZ6(ce) {
		var aZ7 = !0,
			tb = dK.dM,
			b1 = (1 === bN[ce].id ? bN[ce].fA.fillStyle = dK.a6K : bN[ce].g7 === aI.fo ? bN[ce].fA.fillStyle = dK.a5q : (i4.a7N(bN[ce].g7), bN[ce].fA.fillStyle = bT.color.a5g(gk.a7O[0], gk.a7O[1], gk.a7O[2], .87), 400 < bT.fY.fc(gk.a7O, 0, 2) && (
				aZ7 = !1, tb = dK.oK)), bN[ce].canvas.width),
			fH = (bN[ce].fA.clearRect(0, 0, b1, a2K), bN[ce].fA.fillRect(0, 0, b1, a2K), bN[ce].fA.fillStyle = tb, ! function(fA, b1, a2K) {
				fA.fillRect(0, 0, b1, 1), fA.fillRect(0, a2K - 1, b1, 1), fA.fillRect(0, 0, 1, a2K), fA.fillRect(b1 - 1, 0, 1, a2K)
			}(bN[ce].fA, b1, a2K), aZ2 + 2 * a2K < b1 && (bN[ce].fA.fillRect(b1 - aZ2 - a2K, 0, 1, a2K), bN[ce].fA.fillText(bX.bY[bN[ce].g7], Math.floor((b1 - aZ2) / 2), Math.floor(.57 * a2K))), 0 !== bN[ce].id ? 0 : a2K);
		bN[ce].fA.fillText(bT.bZ.ba(bN[ce].ge), Math.floor(b1 - aZ2 / 2 - fH), Math.floor(.57 * a2K)),
			function(ce, b1, fH, aZ7) {
				bN[ce].fA.fillStyle = aZ7 ? dK.a5k : dK.a5i;
				aZ7 = Math.floor(aZ2 * bN[ce].ge / bN[ce].aZC);
				bN[ce].fA.fillRect(Math.floor(b1 - aZ2 - fH), a2K - aTy, aZ7, aTy)
			}(ce, b1, fH, aZ7), 0 === bN[ce].id ? (aZA(ce, b1, aZ7, tb), function(ce, b1, aZ7) {
				bN[ce].fA.strokeStyle = aZ7 ? dK.a5u : dK.a62, bN[ce].fA.fillRect(a2K, 0, 1, a2K);
				aZ7 = b1 - a2K;
				bN[ce].fA.beginPath(), bN[ce].fA.moveTo(Math.floor(.3 * a2K + aZ7), Math.floor(a2K / 2)), bN[ce].fA.lineTo(Math.floor(a2K - .3 * a2K + 0 + aZ7), Math.floor(a2K / 2)), bN[ce].fA.stroke(), bN[ce].fA.beginPath(), bN[ce].fA.moveTo(
					Math.floor(a2K / 2 + aZ7), Math.floor(.3 * a2K)), bN[ce].fA.lineTo(Math.floor(a2K / 2 + aZ7), Math.floor(a2K - .3 * a2K + 0)), bN[ce].fA.stroke()
			}(ce, b1, aZ7)) : aZA(ce, 2 * a2K, aZ7, tb)
	}

	function aZA(ce, b1, aZ7, tb) {
		bN[ce].fA.strokeStyle = bN[ce].aZD ? dK.rV : aZ7 ? dK.a0y : dK.a0x, bN[ce].fA.fillStyle = tb, bN[ce].fA.fillRect(b1 - a2K, 0, 1, a2K), bN[ce].fA.lineWidth = Math.max(Math.floor(a2K / 12), 3), bN[ce].fA.lineCap = "round";
		aZ7 = .35;
		b1 = a2K + 1, bN[ce].fA.beginPath(), bN[ce].fA.moveTo(Math.floor(b1 - aZ7 * a2K + 0), Math.floor(aZ7 * a2K)), bN[ce].fA.lineTo(Math.floor(b1 - a2K + aZ7 * a2K), Math.floor(a2K - aZ7 * a2K + 0)), bN[ce].fA.stroke(), bN[ce].fA.beginPath(), bN[
			ce].fA.moveTo(Math.floor(b1 - a2K + aZ7 * a2K), Math.floor(aZ7 * a2K)), bN[ce].fA.lineTo(Math.floor(b1 - aZ7 * a2K + 0), Math.floor(a2K - aZ7 * a2K + 0)), bN[ce].fA.stroke()
	}

	function aZO(jU, aMx) {
		for (var ge, ce = aMx - 1; 0 <= ce; ce--) ge = iN.a1m(aI.bS, ce), jU[ce].ge !== ge && (jU[ce].ge = ge, jU[ce].aZC = Math.max(ge, jU[ce].aZC), jU[ce].a4v = !0)
	}

	function aZR(jU, aMy) {
		for (var rL = aI.bS << 3, lG = f4.a6.lG, ko = f4.a6.ko, aQ8 = f4.a6.aQ8, ce = aMy - 1; 0 <= ce; ce--) {
			var aQ9 = aQ8[rL + ce],
				ge = lG[aQ9];
			jU[ce].ge !== ge ? (jU[ce].ge = ge, jU[ce].aZC = Math.max(ge, jU[ce].aZC), jU[ce].a4v = !0) : jU[ce].aZD || ko[aQ9] % 64 != 5 || (jU[ce].aZD = !0, jU[ce].a4v = !0)
		}
	}

	function aZ5(bd) {
		bd.canvas = document.createElement("canvas"), dC.kB.font = aU5;
		var b1 = aZ2;
		bd.g7 < aI.fo && 0 === bd.id && (b1 += Math.floor(dC.kB.measureText(bX.bY[bd.g7] + "000").width)), b1 += a2K, 0 === bd.id && (b1 += a2K), bd.canvas.width = b1, bd.canvas.height = a2K, bd.fA = bd.canvas.getContext("2d", {
			alpha: !0
		}), bd.fA.font = aU5, bT.ed.textBaseline(bd.fA, 1), bT.ed.textAlign(bd.fA, 1)
	}

	function aZJ(ce) {
		return f7.aLi() ? aA.b1 - bN[ce].canvas.width - dO.gap : f7.aF
	}

	function aZK(ce) {
		return Math.floor(2 * dO.gap + (f7.aLi() ? be.b2 + dO.gap : 0) + f7.b2 + ce * (1.3 * a2K))
	}
	this.k = function() {
		aZ3 = aZ4 = 0, bN = [], this.resize()
	}, this.resize = function() {
		aU5 = aa.nI, a2K = aa.fontSize + 5, a2K = Math.floor(1.25 * a2K), ca.cb.cc() && (a2K = Math.floor(1.25 * a2K)), aTy = Math.floor(.15 * a2K), dC.kB.font = aU5, aZ2 = Math.floor(dC.kB.measureText("02 000 000 0000").width);
		for (var ce = bN.length - 1; 0 <= ce; ce--) aZ5(bN[ce]), aZ6(ce)
	}, this.iU = function() {
		for (var ce = bN.length - 1; 0 <= ce; ce--) bN[ce].a4v && (bN[ce].a4v = !1, aZ6(ce))
	}, this.m = function(d1, d2) {
		if (2 !== aI.aJ && 0 !== bX.g3[aI.bS] && !aI.bG && !bT.bU.bV(aI.bS))
			for (var aZE, aZF, aZG, aZH = ca.cb.cc() ? a2K : 0, aZI = ca.cb.cc() ? Math.floor(.15 * a2K) : 0, ce = bN.length - 1; 0 <= ce; ce--)
				if (aZE = aZJ(ce), aZF = aZK(ce), aZG = bN[ce].canvas.width, aZF - aZI <= d2 && d2 <= aZF + a2K + aZI) {
					if (aZE - aZH <= d1 && d1 <= aZE + a2K + aZH) return bN[ce].aZD || (bN[ce].a4v = !0, bN[ce].aZD = !0, 0 === bN[ce].id ? du.cJ.a8X(bN[ce].g7) : du.cJ.a8W(bN[ce].g7)), !0;
					if (0 === bN[ce].id && aZE + aZG - a2K - aZH <= d1 && d1 <= aZE + aZG + aZH) return iB.aPt(3), du.cJ.a8S(aZ.a52(), bN[ce].g7), !0
				} return !1
	}, this.j1 = function() {
		var aJZ, aJc, jU, aMx;
		0 === bX.g3[aI.bS] || bT.bU.bV(aI.bS) && !aI.bG || (aJZ = bN.slice(0, aZ3), aJc = bN.slice(aZ3, aZ3 + aZ4), jU = aJZ, aMx = iN.a1g(aI.bS), function(jU, aMx) {
			if (aZ3 !== aMx) return 1;
			for (var ce = aMx - 1; 0 <= ce; ce--)
				if (jU[ce].g7 !== iN.a1l(aI.bS, ce)) return 1;
			return
		}(jU, aMx) ? aZO(jU = function(jU, aMx) {
			var ce, g7, gv, ge, nH = [];
			loop: for (ce = 0; ce < aMx; ce++) {
				for (g7 = iN.a1l(aI.bS, ce), gv = 0; gv < jU.length; gv++)
					if (jU[gv].g7 === g7) {
						nH.push(jU.splice(gv, 1)[0]);
						continue loop
					} ge = iN.a1m(aI.bS, ce), aZ5(ge = {
					g7: g7,
					ge: ge,
					aZC: ge,
					id: 0,
					a4v: !0,
					aZD: !1,
					canvas: null,
					fA: null
				}), nH.push(ge)
			}
			return nH
		}(jU, aMx), aMx) : aZO(jU, aMx), aJZ = jU, aJc = function(jU) {
			var aMy = f4.a6.pl[aI.bS];
			return function(jU, aMy) {
				if (aZ4 !== aMy) return 1;
				for (var rL = aI.bS << 3, u9 = f4.a6.u9, aQ8 = f4.a6.aQ8, ce = aMy - 1; 0 <= ce; ce--) {
					var aQ9 = aQ8[rL + ce];
					if (jU[ce].g7 !== u9[aQ9]) return 1
				}
				return
			}(jU, aMy) ? aZR(jU = function(jU, aMy) {
				var ce, g7, gv, nH = [],
					rL = aI.bS << 3,
					u9 = f4.a6.u9,
					lG = f4.a6.lG,
					aQ8 = f4.a6.aQ8;
				loop: for (ce = 0; ce < aMy; ce++) {
					var aQ9 = aQ8[rL + ce];
					for (g7 = u9[aQ9], gv = 0; gv < jU.length; gv++)
						if (jU[gv].g7 === g7) {
							nH.push(jU.splice(gv, 1)[0]);
							continue loop
						} aQ9 = lG[aQ9], aZ5(aQ9 = {
						g7: g7,
						ge: aQ9,
						aZC: aQ9,
						id: 1,
						a4v: !0,
						aZD: !1,
						canvas: null,
						fA: null
					}), nH.push(aQ9)
				}
				return nH
			}(jU, aMy), aMy) : aZR(jU, aMy), jU
		}(aJc), aZ3 = aJZ.length, aZ4 = aJc.length, bN = aJZ.concat(aJc))
	}, this.dP = function() {
		if (0 !== bX.g3[aI.bS] && (!bT.bU.bV(aI.bS) || aI.bG))
			for (var ce = bN.length - 1; 0 <= ce; ce--) dQ.drawImage(bN[ce].canvas, aZJ(ce), aZK(ce))
	}
}

function zN() {
	var aZT, aZU, aZV, qE, aZW, eI = 0,
		aD = aC.aD;

	function aZZ() {
		! function() {
			if (!aI.g1) return;
			if (aI.df) return;
			if (2 !== aI.aJ)
				if (aZW % 7 != 0) aZW++;
				else if (qE === aI.hh) {
				if (!aZc()) return;
				be.qJ(qE), aI.he.j1()
			} else {
				if (!aZc()) return;
				aZW++, qE++, cz.qK(), cz.iU(!0)
			}
			return 1
		}() && aZc() && ja()
	}

	function aZa() {
		eI = 0, (aI.g1 ? (aC.ah = be.qJ(qE - (aZW % 7 == 0 ? 0 : 1) + aZW % 7 / 7) || aC.ah, jj) : aS.bE || !aL.ig ? jj : (aC.ah = !0, ji))()
	}

	function aZc() {
		var ce, en, aZd = eN.iX.a4Y,
			gw = eN.iX.a4Z,
			gx = eN.iX.a4a,
			gz = eN.iX.a4b,
			aZe = eN.iX.a4c,
			aZf = eN.iX.a4d;
		if (!(aZT >= aZf.length)) {
			if (aZf = aZf[aZT], aZe[aZT]) {
				for (en = aZU + aZf, ce = aZU; ce < en; ce++) du.cO.aN2(aZd[ce], gw[ce], gx[ce], gz[ce]);
				aZU += aZf, aZT++
			} else ++aZV >= aZf && (aZT++, aZV = 0);
			return __fx.replay.tick++, 1
		}
		aa.nv("Replay file smaller than expected."), aL.bH(!1), aI.aJ = 2
	}
	this.qD = 0, this.k = function() {
		aZW = qE = aZV = aZU = aZT = 0, __fx.replay.registerHooks({
			advance: () => aZZ(),
			finishTick: () => i8.render(),
			requestRedraw: () => {
				aC.ah = !0
			},
			isEnded: () => 2 === aI.aJ,
			getTickInterval: () => aC.qL
		})
	}, this.j1 = function() {
		var aYG;
		aA.j1(), __fx.replay.frame() ? jY() : aL.aDZ() < 1.7 ? 0 === eI ? aC.aD >= aD && (aYG = aC.qL / aL.aDZ(), aD += aYG * Math.floor(1 + (aC.aD - aD) / aYG), 2 === aI.aJ || aS.bE || !aL.ig ? jY() : (aZZ(), i8.render()), eI++) : aZa() :
			function() {
				var aYG;
				if (aC.aD >= aD)
					if (2 === aI.aJ || aS.bE || !aL.ig) jY(), aD = aC.aD;
					else {
						for (aYG = aC.qL / aL.aDZ(), 16 < (aC.aD - aD) / aYG && (aD = aC.aD - 16 * aYG); aC.aD >= aD && 2 !== aI.aJ;) aD += aYG, aZZ();
						i8.render()
					} aZa()
			}(), jf(), aC.ah && (aC.ah = !1, ex())
	}, this.aZg = function() {
		eN.iX.a4d.length - aZT <= 2 || aa.nv("Replay file larger than expected.")
	}
}

function aAm() {
	this.kG = function(jU) {
		jU.fill(0)
	}, this.aCH = function(jU) {
		for (var en = jU.length, ce = 0; ce < en; ce++) jU[ce] = []
	}, this.aOO = function(tb, dI) {
		for (var et = gk.aX5, ce = 0; ce < 3; ce++) et[ce] = dI * tb[ce];
		return et
	}, this.aOP = function(tb, et, aZh) {
		for (var om = 0, ce = 0; ce < 3; ce++) om += Math.abs(tb[ce] - et[ce]);
		return aZh <= om
	}, this.aOQ = function(tb, aZi) {
		for (var ce = 0; ce < 3; ce++) tb[ce] = gf.hI(tb[ce] + aZi, 0, 255);
		return tb
	}, this.fc = function(jU, rL, rM) {
		rM = rM || jU.length - 1;
		for (var a8t = 0, ce = rL = rL || 0; ce <= rM; ce++) a8t += jU[ce];
		return a8t
	}, this.aZj = function(jU, aZk) {
		for (var ce, aBW, en = jU.length, aZl = [], jR = en - 1; 0 <= jR; jR--) {
			for (ce = aBW = 0; ce < en; ce++) aZk(jU[ce]) < aZk(jU[aBW]) && (aBW = ce);
			en--, aZl.push(jU[aBW]), jU[aBW] = jU[en], jU.pop()
		}
		return aZl
	}, this.min = function(jU) {
		var ce, gU, en = jU.length;
		if (0 === en) return 0;
		for (gU = jU[0], ce = 1; ce < en; ce++) gU = Math.min(gU, jU[ce]);
		return gU
	}, this.max = function(jU) {
		var en = jU.length;
		if (0 === en) return 0;
		for (var gU = jU[0], ce = 1; ce < en; ce++) gU = Math.max(gU, jU[ce]);
		return gU
	}, this.aMj = function(jU, gU) {
		for (var en = jU.length, lu = 0, ce = 0; ce < en; ce++) lu += jU[ce] > gU;
		return lu
	}, this.aZm = function(aJZ, aJc, min) {
		for (var en = aJc[0], ce = en - 1; 0 <= ce; ce--) aJZ[ce] < min && (aJZ[ce] = aJZ[--en]);
		aJc[0] = en
	}, this.aZn = function(jU, en, value) {
		for (var ce = 0; ce < en; ce++) jU[ce] -= value
	}, this.a6m = function(jU) {
		for (var en = jU.length, ce = 0; ce < en; ce++)
			if ("string" != typeof jU[ce]) return !1;
		return !0
	}, this.fZ = function(bb, jU, aZo) {
		jU.fill(0);
		for (var bi = bb.split(","), en = Math.min(bi.length, jU.length), ce = 0; ce < en; ce++) jU[ce] = Math.min(parseInt(bi[ce]), aZo)
	}, this.kl = function(bb, jU, aZp) {
		jU.fill("");
		for (var bi = bb.split('"'), en = Math.min(bi.length, 2 * jU.length), kU = 0, ce = 1; ce < en; ce += 2) jU[kU++] = bi[ce].slice(0, aZp)
	}, this.aO7 = function(jU, lu) {
		if (0 === lu) jU.fill(0);
		else {
			var a8t = this.fc(jU),
				en = jU.length;
			if (0 === a8t) jU.fill(gf.gg(lu, en));
			else
				for (var ce = 0; ce < en; ce++) jU[ce] = gf.gg(lu * jU[ce], a8t);
			if (0 === (a8t = this.fc(jU))) jU[1] = lu;
			else
				for (var kU = 0; a8t++ < lu;) jU[kU = (kU + 1) % en] && jU[kU]++
		}
	}, this.aQV = function(jU) {
		if (!jU) return 0;
		var en = jU.length;
		if (0 === en) return 0;
		for (var gU = jU[en - 1], ce = en - 2; 0 <= ce; ce--)
			if (jU[ce] !== gU) return ce + 2;
		return 1
	}, this.aHT = function(jU) {
		for (var a8t = 0, ce = 0; ce < jU.length; ce++) a8t += jU[ce].length;
		return a8t
	}, this.aVp = function(aZq) {
		for (var jU = [], ce = 0; ce < aZq.length; ce++) jU = jU.concat(aZq[ce]);
		return jU
	}, this.has = function(jU, gU) {
		for (var en = jU.length, ce = 0; ce < en; ce++)
			if (jU[ce] === gU) return !0;
		return !1
	}
}

function hg() {
	this.k = function() {
		8 === aI.dw && aa.oI()
	}, this.aGd = function(aZr) {
		var elo = aI.data.elo,
			om = (elo[aZr] - elo[1 - aZr]) / 10,
			om = 8 / (1 + Math.pow(2, om / 32)),
			om = Math.floor(10 * om + .5),
			aZt = elo[aZr] + om,
			oP = this.oJ(aZt),
			elo = this.oJ(elo[1 - aZr] - om),
			om = (0 === aZr ? aa.oO(oP, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aa.oO(elo, oP, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), aZt * gf.sqrt(aZt) >> 8),
			elo = ((1 + aI.dy) * om / 100).toFixed(2);
		aZr === aI.bS ? aa.bW(640, L(522, [elo]), 40, 0, dK.dM, dK.fB, -1, !1) : aa.bW(640, L(523, [bX.bY[aZr], elo]), 40, 0, dK.dM, dK.fB, -1, !1)
	}, this.oJ = function(elo) {
		return 16e3 === (elo = gf.hI(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function aSO(title, uC, uE) {
	var j9, uF;
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), uF.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, uE = uE || [new e9("⬅️ " + L(6), function() {
		aH.fX()
	}, dK.a69)], j9 = new fP(title, uE), uF = new uG(j9.fS, uC), bT.ed.textAlign(j9.fS.style, 1)
}

function aCq() {
	var aZw = [],
		aZx = [],
		aZy = 0;

	function aZz(jU, oZ, xS, aa1) {
		var en = jU.length;
		if (0 === en) return "";
		var bb = "@" + jU[0];
		if (1 === en) return bb + oZ + aa1;
		for (var ce = 1; ce < en - 1; ce++) bb += ", @" + jU[ce];
		return bb + " and @" + jU[en - 1] + xS + aa1
	}
	this.k = function() {
		var bb = aZz(aZx, " is", " are", " in the lobby.");
		bb.length && b7.message.zC({
			id: 7,
			mj: bb
		}), aZw = [], aZx = [], aZy = 0
	}, this.a5T = function(aa0) {
		return b7.a5S !== aa0 && (aa0 = c9.cA.ba(aa0, 5), !!cs.aEl.a5U(aa0)) && (aZx.push(aa0), !0)
	}, this.join = function(player) {
		b7.a5S !== player.cE && (player = c9.cA.ba(player.cE, 5), cs.aEl.a5U(player)) && aZw.push(player)
	}, this.pz = function() {
		var oZ, xS;
		++aZy < 3 || (aZy = 0, oZ = aZz(aZx, "", "", " entered the lobby!"), (oZ = (xS = aZz(aZw, "", "", " joined a game!")).length ? oZ.length ? oZ + " " + xS : xS : oZ).length && b7.message.zC({
			id: 7,
			mj: oZ
		}), aZw = [], aZx = [])
	}
}

function aHl(aa2) {
	var aWI = document.createElement("div");

	function aTX() {
		aU.ac() || (aWI.style.backgroundColor = bT.color.aTd(dK.eG, 50))
	}

	function aTY() {
		aWI.style.backgroundColor = dK.eG
	}
	this.jX = function(z5) {
			aWI.textContent = z5
		}, this.show = function() {
			document.body.appendChild(aWI)
		}, this.resize = function() {
			var b2 = bT.ed.aDy(.03, .5);
			aWI.style.width = 2 * b2 + "px", aWI.style.height = b2 + "px", aWI.style.font = bT.ed.ef(1, .75 * b2), bT.ed.eh(aWI, 4), bT.ed.eh(aWI, 2)
		}, this.lk = function() {
			aWI.onclick = null, aWI.onmouseover = null, aWI.onmouseout = null, aH.removeChild(document.body, aWI), aWI = null
		}, aWI.style.position = "absolute", aTY(), aWI.style.color = dK.dM, aWI.style.zIndex = "3", aWI.style.right = "0", aWI.style.top = "0", aWI.style.display = "flex", aWI.style.justifyContent = "center", aWI.style.alignItems = "center", aWI
		.style.userSelect = "none", aWI.style.outline = "none", aWI.onclick = aa2, aWI.onmouseover = aTX, aWI.onmouseout = aTY
}

function a9h(a20, data, fl) {
	var en = data.a9f.length,
		aa3 = document.createElement("div"),
		aa4 = document.createElement("div"),
		aUP = document.createElement("div"),
		aa5 = new Array(en),
		fd = new Array(en),
		aa6 = new Array(data.a9d.length),
		aa7 = bT.color.a5g(70, 70, 0, .35);

	function aTd() {
		this.style.backgroundColor = bT.color.aTd(aa7, 160)
	}

	function aaB() {
		this.style.backgroundColor = aa7
	}

	function sZ() {
		var jR;
		for (a20.style.font = bT.ed.ef(0, bT.ed.aE0(.026, .5, .03)), ce = 1; ce < aa6.length; ce++) bT.ed.eh(aa6[ce], 4);
		if (bT.ed.eh(aa3, 2), en) {
			for (var kP, fH = aa3.offsetWidth, fI = aUP.offsetWidth, ce = 0; ce < aa6.length; ce++) kP = .01 * data.a9g[ce] * fI, aa6[ce].style.width = (100 * kP / fH).toFixed(2) + "%";
			var ju = data.a9f[0].length;
			for (ce = 0; ce < en; ce++)
				for (bT.ed.eh(aa5[ce], 2), jR = 1; jR < ju; jR++) bT.ed.eh(fd[ce][jR], 4);
			aa4.aa8 && (aa4.scrollTop = aa4.aa8)
		}
	}
	this.resize = function() {
			sZ(), sZ()
		}, a20.style.display = "flex", a20.style.flexDirection = "column", aa4.style.overflowX = "hidden", aa4.style.overflowY = "auto", aa4.addEventListener("scroll", function() {
			this.aa8 = this.scrollTop, fl && fl.a9i && (aH.a6.rD[fl.a9i] = this.scrollTop)
		}),
		function() {
			var gy, ce, a9f = data.a9f,
				ju = en ? a9f[0].length : 0;
			for (ce = 0; ce < en; ce++) {
				aa5[ce] = document.createElement("div"), aa5[ce].style.backgroundColor = function(ce) {
					return ce % 2 == 1 ? bT.color.a5g(130, 130, 130, .35) : dK.a5j
				}(ce), aa5[ce].style.width = "100%", aa5[ce].style.display = "flex", fd[ce] = new Array(ju);
				for (var jR = 0; jR < ju; jR++) fd[ce][jR] = gy = document.createElement("div"), gy.style.display = "flex", gy.style.justifyContent = "center", gy.style.wordBreak = "break-all", gy.style.padding = "0.4em 0em", gy.style.width = data
					.a9g[jR] + "%", gy.textContent = a9f[ce][jR].gU, 1 === a9f[ce][jR].mf && (gy.name = "" + ce, gy.style.color = dK.oN, gy.style.backgroundColor = aa7, gy.addEventListener("mouseover", aTd), gy.addEventListener("mouseout", aaB),
						function(gy, cE, yK) {
							2147483647 !== yK && gy.addEventListener("click", function() {
								lo.iE(30), lo.mB(30, cE), jz.k(lo.lj), this.style.backgroundColor = aa7, aH.eF(8, aH.bg, new eS(25, {
									action: 0,
									cE: c9.cA.m1(c9.cA.m2(5)),
									yK: yK
								}))
							})
						}(gy, a9f[ce][jR].cE, a9f[ce][jR].yK)), aa5[ce].appendChild(gy)
			}
			for (aa3.style.display = "flex", aa3.style.backgroundColor = bT.color.a5g(0, 120, 0, .35), ce = 0; ce < aa6.length; ce++) aa6[ce] = gy = document.createElement("div"), gy.style.display = "flex", gy.style.justifyContent = "center", gy
				.style.wordBreak = "break-all", gy.style.padding = "0.4em 0em", gy.style.width = data.a9g[ce] + "%", gy.innerHTML = data.a9d[ce], aa3.appendChild(gy)
		}();
	for (var ce = 0; ce < en; ce++) aUP.appendChild(aa5[ce]);
	aa4.appendChild(aUP), a20.appendChild(aa3), a20.appendChild(aa4), fl && fl.a9i && (aa4.aa8 = aH.a6.rD[fl.a9i])
}

function lh() {
	function aaI() {
		var bi;
		return 8 === aI.dw ? 0 : (bi = Math.floor(bX.ou[aI.bS] / 50), (bi = Math.min(bi, 200)) / 100)
	}

	function aaD() {
		var bi = aaI();
		0 !== bi && aa.bW(440, L(524, [bi.toFixed(2)]), 40, 0, dK.a5u, dK.fB, -1, !1)
	}
	this.j1 = function() {
		var aKv;
		0 === dj.result.dd || 0 === dj.result.db.length || 8 === aI.dw ? bT.bU.g2(aI.bS) && aaD() : (function(aKv) {
			7 !== aI.dw && 10 !== aI.dw && 9 !== aI.dw || 0 !== aI.hi && aKv && aa.bW(600, L(528, [aKv.toFixed(2)]), 40, 0, dK.dM, dK.fB, -1, !1)
		}(aKv = function() {
			aa.bW(520, L(525), 40, 0, dK.dM, dK.fB, -1, !1);
			for (var db = dj.result.db, en = db.length, gD = bX.gD, jU = [], ce = 0; ce < en; ce++) {
				var fF = db[ce];
				jU.push({
					fF: fF,
					mf: gD[fF]
				})
			}
			jU.sort((jR, gv) => gv.mf - jR.mf);
			var o4 = bX.bY,
				mf = dj.result.dc,
				bi = dj.result.dd,
				bb = "",
				aKv = 0;
			for (ce = 0; ce < en; ce++) {
				var aXT = jU[ce].mf * bi / (100 * mf),
					aaK = o4[jU[ce].fF] + ": " + aXT.toFixed(2) + "   ";
				jU[ce].fF === aI.bS && (aKv = aXT), 2 < ce && 4 !== en ? 3 === ce && (bb += "(" + L(526, [en - 3]) + ")") : bb += aaK
			}
			aa.bW(560, bT.bZ.a3x(bb), 40, 0, dK.a5u, dK.fB, -1, !1), aKv ? aa.bW(580, L(527, [aKv.toFixed(2) + " + " + aaI().toFixed(2)]), 40, 0, dK.a5u, dK.fB, -1, !1) : bT.bU.g2(aI.bS) && aaD();
			return aKv
		}()), 2 === aI.di || 7 <= aI.dw || function(aKv) {
			var db = dj.result.db,
				en = db.length,
				o2 = bX.o2,
				gD = bX.gD,
				rN = [];
			loop: for (var ce = 0; ce < en; ce++) {
				var fF = db[ce],
					aF7 = bT.bZ.a3w(o2[fF]);
				if (null !== aF7) {
					for (var aL3 = gD[fF], gv = rN.length - 1; 0 <= gv; gv--)
						if (aF7 === rN[gv].name) {
							rN[gv].mf += aL3, rN[gv].jU.push({
								fF: fF,
								mf: aL3
							});
							continue loop
						} rN.push({
						name: aF7,
						mf: aL3,
						jU: [{
							fF: fF,
							mf: aL3
						}]
					})
				}
			}
			if (0 !== rN.length) {
				rN.sort((jR, gv) => gv.mf - jR.mf);
				var jU = rN[0].jU,
					a8J = (jU.sort((jR, gv) => gv.mf - jR.mf), "[" + rN[0].name + "]"),
					aaL = 512 * dj.result.dd / 26214400,
					ju = (aa.bW(0, L(529, [a8J, aaL.toFixed(4)]), 40, 0, dK.dM, dK.fB, -1, !1), jU.length),
					a1M = rN[0].mf,
					aaM = 1e4 * aaL;
				for (ce = 0; ce < ju; ce++)
					if (jU[ce].fF === aI.bS) {
						aa.bW(600, L(530, [(aaM * jU[ce].mf / (10 * a1M)).toFixed(2)]), 40, 0, dK.dM, dK.fB, -1, !1), aa.bW(640, L(531, [(.2 * aKv).toFixed(2), a8J]), 40, 0, dK.dM, dK.fB, -1, !1);
						break
					}
			}
		}(aKv))
	}, this.a7w = function() {
		var aaH, kI;
		aI.df || (aaH = bX, kI = aI.bS, 0 === aaH.a4p[kI]) || aaH.a4o[kI] < 1 || 2 * aaH.a4m[kI] > 3 * (aaH.a4n[kI] + aaH.a4o[kI]) || aaD()
	}
}

function la() {
	function aaN() {
		if (2 === aI.aJ) return 1;
		aT.aTB(), aI.aJ = 2, aI.hY = aI.hW
	}

	function aaO() {
		dj.le.de(), aO.show(1 === aI.hi, !1, 2 === aI.hi), dj.result.de(), dj.lg.j1(), dj.lc.j1(), dj.lc.aGg(), aa.oi(!0), aa.oW(247), aa.oW(956), aa.oW(957), aX.iU(!0), be.iU(!0), aT.iU(), aL.aDe(), aI.bG && aC.zK.aZg(), aC.ah = !0, i8.a2B(), ca.cb
			.setState(0)
	}
	this.aTA = function() {
		aaN() || (aI.di = 2, aaO())
	}, this.aJO = function() {
		aaN() || (aI.di = 1, aaO())
	}
}

function hl() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a4P = null
}

function w0() {
	this.l6 = new Int16Array(4), this.lM = new Int16Array(4), this.a8G = null, this.k = function() {
		var ce;
		for (this.l6[0] = -dC.dD, this.l6[1] = 1, this.l6[2] = dC.dD, this.l6[3] = -1, this.a8G = new Int16Array([-dC.dD, 1 - dC.dD, 1, dC.dD + 1, dC.dD, dC.dD - 1, -1, -dC.dD - 1]), ce = 0; ce < 4; ce++) this.lM[ce] = 4 * this.l6[ce]
	}, this.aEE = function() {
		return gf.hI(Math.floor(.15 * (1 + .25 * ca.cb.cc()) * aA.cd / cS), 4, 128)
	}, this.aQ0 = function(d5, id) {
		for (var lL = this.lM, ce = 0; ce < 4; ce++) {
			var lN = d5 + lL[ce];
			if (i4.xu(lN) && i4.o8(lN) === id) return !0
		}
		return !1
	}, this.aaP = function(player, d5) {
		return !i4.l8(d5) && player === i4.l9(d5)
	}, this.aVW = function(u1, u2, kz) {
		return (u1 -= this.nb(kz)) * u1 + (u2 -= this.nd(kz)) * u2
	}, this.aQB = function(co, cr, qs) {
		co = this.aQO(co) - this.aQK(qs), cr = this.aQP(cr) - this.aQM(qs);
		return Math.sqrt(co * co + cr * cr)
	}, this.aBL = function(a8L, aEN) {
		var cx = this.nb(a8L) - this.nb(aEN),
			a8L = this.nd(a8L) - this.nd(aEN);
		return ~~Math.sqrt(cx * cx + a8L * a8L + .5)
	}, this.xK = function(a8L, aEN) {
		var cx = this.nb(a8L) - this.nb(aEN),
			a8L = this.nd(a8L) - this.nd(aEN);
		return cx * cx + a8L * a8L
	}, this.aaQ = function(st, sv, sx, sy) {
		return (st -= sx) * st + (sv -= sy) * sv
	}, this.gq = function(fF, gb) {
		return gf.gg(gb * bX.gM[fF], 1e3)
	}, this.aQO = function(co) {
		return 16 * (co + cT) / cS
	}, this.aQP = function(cr) {
		return 16 * (cr + cU) / cS
	}, this.aQN = function(gy) {
		return 16 * gy / cS
	}, this.su = function(co) {
		return Math.floor((co + cT) / cS)
	}, this.sw = function(cr) {
		return Math.floor((cr + cU) / cS)
	}, this.u3 = function(u1, u2) {
		return 1 <= u1 && 1 <= u2 && u1 < dC.dD - 1 && u2 < dC.dE - 1
	}, this.nb = function(kz) {
		return kz % dC.dD
	}, this.nd = function(kz) {
		return gf.gg(kz, dC.dD)
	}, this.u5 = function(u1, u2) {
		return u2 * dC.dD + u1
	}, this.aEW = function(u1, u2) {
		return 4 * this.u5(u1, u2)
	}, this.aGM = function(kz) {
		return this.aVX(this.nb(kz), this.nd(kz))
	}, this.aVX = function(u1, u2) {
		return 0 < u1 && u1 < dC.dD - 1 && 0 < u2 && u2 < dC.dE - 1
	}, this.lO = function(kz) {
		return kz << 2
	}, this.aQ6 = function(d5) {
		return d5 >> 2
	}, this.aaR = function(kz) {
		return dC.dD * this.nd(kz) * 256 + (this.nb(kz) << 4)
	}, this.aXt = function(kz) {
		return this.aaR(kz) + 8 + (dC.dD << 7)
	}, this.kt = function(qs) {
		return dC.dD * (this.aQM(qs) >> 4) + (this.aQK(qs) >> 4)
	}, this.aCQ = function(qs) {
		qs = this.kt(qs);
		return (this.nb(qs) >> 5) + f4.xj.aCD * (this.nd(qs) >> 5)
	}, this.aQK = function(qs) {
		return qs % (dC.dD << 4)
	}, this.aQM = function(qs) {
		return gf.gg(qs, dC.dD << 4)
	}, this.ye = function(kz, l0) {
		return kz + this.l6[l0]
	}, this.aaS = function(d5, l0) {
		return d5 + this.lM[l0]
	}, this.aEX = function(a8L, aEN) {
		var cx = this.nb(aEN) - this.nb(a8L),
			aEN = this.nd(aEN) - this.nd(a8L);
		return Math.abs(cx) >= Math.abs(aEN) ? 1 + 2 * (cx < 0) : 2 * (0 < aEN)
	}, this.xL = function(player) {
		return this.u5(bX.sj[player] + bX.sl[player] >> 1, bX.sk[player] + bX.sm[player] >> 1)
	}, this.x3 = function(player) {
		return this.u5(hw.aWo(bX.sj[player], bX.sl[player]), hw.aWo(bX.sk[player], bX.sm[player]))
	}
}

function a3k() {
	this.aYO = function() {
		var ce;
		if (jz.size < lo.lp(23)) a5.a6.a05(0, 3259);
		else {
			var zJ = jz.k6(6),
				en = jz.k6(10),
				data = [];
			if (9 === zJ || 10 === zJ || 11 === zJ || 13 === zJ) {
				for (ce = 0; ce < en; ce++) data.push([jz.k6(30), k0.ys.eP(5), jz.ll(32), 0, jz.k6(30)]);
				8 === aH.bg && aH.bh().a6v(21, !0, {
					zJ: zJ,
					data: data
				})
			} else if (12 === zJ) {
				for (ce = 0; ce < en; ce++) data.push([jz.k6(20), jz.k6(30), jz.k6(30), jz.ll(32), jz.k6(30), k0.ys.eP(5), k0.ys.eP(5)]);
				8 === aH.bg && aH.bh().a6v(21, !0, {
					zJ: zJ,
					data: data
				})
			} else {
				var a1F = jz.k6(16);
				if (jz.lm(39 + 16 * a1F + en * (0 === zJ ? 111 : 1 === zJ ? 101 : 2 === zJ || 3 === zJ ? 127 : 212))) {
					if (0 === zJ)
						for (ce = 0; ce < en; ce++) data.push([jz.k6(30), k0.ly.lz(jz.k6(5)), jz.k6(16), jz.k6(30), jz.k6(30)]);
					else if (1 === zJ)
						for (ce = 0; ce < en; ce++) data.push([jz.k6(16), k0.ly.lz(jz.k6(3)), jz.k6(16), k0.ly.lz(jz.k6(5)), jz.k6(31), jz.k6(30)]);
					else if (2 === zJ || 3 === zJ)
						for (ce = 0; ce < en; ce++) data.push([jz.k6(30), k0.ly.lz(jz.k6(5)), jz.ll(32), jz.k6(30), jz.k6(30)]);
					else
						for (ce = 0; ce < en; ce++) data.push([jz.k6(20), jz.k6(30), jz.k6(30), jz.k6(30), jz.k6(30), jz.ll(32), jz.k6(30), k0.ly.lz(jz.k6(5)), k0.ly.lz(jz.k6(5))]);
					8 === aH.bg && aH.bh().a6v(21, !0, {
						zJ: zJ,
						data: data
					})
				} else a5.a6.a05(0, 3260)
			}
		}
	}, this.aYP = function() {
		if (jz.size < lo.lp(29)) a5.a6.a05(0, 3265);
		else {
			var aaT = jz.k6(4),
				aaU = jz.k6(7),
				aaV = jz.k6(11);
			if (jz.lm(29 + 16 * aaU + 16 * aaV + 11 * aaT)) {
				for (var data = [], ce = 0; ce < aaT; ce++) {
					for (var aF7 = k0.ly.lz(jz.k6(3)), aaW = jz.k6(8), aPA = [], jR = 0; jR < aaW; jR++) aPA.push(jz.k6(16));
					data.push({
						name: "[" + aF7 + "]",
						aPA: aPA
					})
				}
				8 === aH.bg && aH.bh().a6v(23, !0, data)
			} else a5.a6.a05(0, 3266)
		}
	}
}

function wG() {
	var aaX, aaY = new Uint8Array(5),
		aaZ = new Uint8Array(5);
	this.aaa = new aab, this.k = function() {
		for (var gU = cs.buffer.data[119].value, ce = 0; ce < aaY.length; ce++) aaY[ce] = (gU >> 2 * ce) % 4
	}, this.iC = function() {
		aaX = [L(532), "", L(533, [aw.jO[28]]), L(534, [aw.jO[26]]), L(535, [aw.jO[0]])], this.aaa.k()
	}, this.j1 = function() {
		this.aaa.j1()
	}, this.aPt = function(id) {
		1 < id && aU.ac() || ! function(eI) {
			if (3 === aaY[eI] || 1 === aaZ[eI]) return;
			if (aaZ[eI] = 1, !(Math.random() < .6)) {
				aaY[eI]++;
				for (var gU = 0, ce = 0; ce < aaY.length; ce++) gU += aaY[ce] << 2 * ce;
				cs.jD.jX(119, gU)
			}
			return 1
		}(id) || aa.ng(aaX[id])
	}
}

function kh() {
	var aad, ip, tu;

	function aaj(ce) {
		return bT.color.a5f(ip[ce][0], ip[ce][1], ip[ce][2])
	}

	function aMK(jR, gv) {
		return bT.color.aav(ip[jR], ip[gv]), aaj(gv)
	}

	function aah() {
		aad && (aad.remove(), aad = null)
	}
	this.show = function(ki, colors, id) {
		0 <= (tu = id) && a5.a6.ke(0) && a5.kf.aD0(0, id), ki = (ki = (ki = (ki = (ki = (ki = (ki = (ki = (ki = (ki = (ki = (ki = ki.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ip = colors, (aad = document.createElement("div")).style.position = "fixed", aad.style.top = "0", aad.style.left = "0", aad.style.width = "100%", aad.style.height = "100%", aad.style.backgroundColor = bT.color.a5g(ip[0][0], ip[0][1],
				ip[0][2], .6), aad.style.zIndex = "6", aad.onclick = function(a2) {
				a2.target === aad && aah()
			},
			function(ki) {
				var fE, aai = document.createElement("div");
				aai.style.position = "absolute", aai.style.display = "flex", aai.style.flexDirection = "column", aai.style.top = "50%", aai.style.left = "50%", aai.style.backgroundColor = aaj(2), fE = ca.cb.cc() ? bT.ed.eg(aA.min) : bT.ed.aDy(
				.4);
				fE = Math.max(fE, 200), aai.style.width = bT.ed.a23(fE), aai.style.height = bT.ed.a23(fE), aai.style.transform = "translate(-50%, -50%)",
					function(aai, fE) {
						var aan = document.createElement("div");
						aan.style.flex = "0 0 10%", aan.style.overflow = "hidden", aan.style.backgroundColor = aaj(1), aan.style.color = aMK(1, 7), aan.style.font = bT.ed.ef(1, .05 * fE), aan.style.display = "flex", aan.style.alignItems =
							"center", aan.style.justifyContent = "center", aan.innerHTML = L(536), aai.appendChild(aan)
					}(aai, fE),
					function(aai, ki, fE) {
						var aao = document.createElement("div");
						aao.style.flex = "0 0 70%", aao.style.overflowY = "auto", aao.style.overflowX = "hidden", aao.style.whiteSpace = "pre-wrap", aao.style.wordWrap = "break-word", aao.style.padding = bT.ed.a23(.02 * fE), aao.style
							.backgroundColor = aaj(2), aao.style.color = aMK(2, 8), aao.style.font = bT.ed.ef(0, .07 * fE), aao.innerHTML = ki, aao.innerHTML = "<style>a { color: inherit; }</style>" + aao.innerHTML, aai.appendChild(aao)
					}(aai, ki, fE),
					function(aai, fE) {
						var aSg = document.createElement("div"),
							aap = (aSg.style.display = "flex", aSg.style.flexDirection = "row", aSg.style.justifyContent = "space-between", aSg.style.alignItems = "stretch", aSg.style.backgroundColor = aaj(3), aSg.style.flex = "1", aSg.style
								.padding = bT.ed.a23(.01 * fE), aSg.style.gap = bT.ed.a23(.01 * fE), document.createElement("div")),
							aaq = (aap.style.flex = "0 0 60%", aap.style.height = "100%", new e9(L(251, 0, 0, 1), function() {
								aah()
							}, aaj(4), !1)),
							aaq = (aaq.button.style.width = "100%", aaq.button.style.height = "100%", aaq.button.style.color = aMK(4, 9), aaq.button.style.font = bT.ed.ef(1, .05 * fE), aap.appendChild(aaq.button), document.createElement("div")),
							aas = (aaq.style.flex = "0 0 15%", aaq.style.height = "100%", aaq.style.backgroundColor = aaj(5), document.createElement("div")),
							aat = (aas.style.flex = "1", aas.style.height = "100%", new e9(L(537), function(a2) {
								return bT.ed.jP(a2), tu < 0 || a5.a6.ke(0) && (a5.kf.aD0(1, tu), tu = -1), !0
							}, aaj(6), !1));
						aat.button.style.width = "100%", aat.button.style.height = "100%", aat.button.style.color = aMK(6, 10), aat.button.style.font = bT.ed.ef(1, .035 * fE), aas.appendChild(aat.button), aSg.appendChild(aap), aSg.appendChild(
							aaq), aSg.appendChild(aas), aai.appendChild(aSg)
					}(aai, fE), aad.appendChild(aai)
			}(ki), document.body.appendChild(aad)
	}
}

function lb() {
	this.dl = function() {
		for (var en = gC.gB, n8 = gC.gJ, db = [], ce = 0; ce < en; ce++) {
			var fF = n8[ce];
			bT.bU.gP(fF) && db.push(fF)
		}
		return db
	}, this.dn = function() {
		if (0 === g8.o5[aI.hk]) return this.dp();
		f5.pi(aI.hk);
		for (var db = [], en = gk.pj[0], pk = gk.pk, ce = 0; ce < en; ce++) {
			var fF = pk[ce];
			bT.bU.gP(fF) && db.push(fF)
		}
		return db
	}, this.dp = function() {
		var fF = gE[0];
		return bT.bU.gP(fF) ? [fF] : []
	}, this.dt = function(db) {
		for (var en = db.length, mf = 0, gD = bX.gD, ce = 0; ce < en; ce++) mf += gD[db[ce]];
		return mf
	}
}

function a7t() {
	this.resize = function() {
		var ce, aKr = document.head.querySelector("style#ss");
		if (aKr)
			for (ce = aKr.sheet.cssRules.length - 1; 0 <= ce; ce--) aKr.sheet.deleteRule(0);
		else(aKr = document.createElement("style")).id = "ss", document.head.appendChild(aKr);
		var aDV = "::-webkit-scrollbar",
			aaw = bT.ed.a23(dO.yg),
			fE = bT.ed.a23(Math.max(bT.ed.aDy(.012), 8));
		try {
			aKr.sheet.insertRule(aDV + "{width:" + fE + ";height:" + fE + ";}", aKr.sheet.cssRules.length), aKr.sheet.insertRule(aDV + "-thumb{background-color:white;}", aKr.sheet.cssRules.length), aKr.sheet.insertRule(aDV +
				"-track{background:" + dK.eG + ";}", aKr.sheet.cssRules.length), aKr.sheet.insertRule(aDV + "-track:horizontal{border-top:" + aaw + " solid white;}", aKr.sheet.cssRules.length), aKr.sheet.insertRule(aDV +
				"-track:vertical{border-left:" + aaw + " solid white;}", aKr.sheet.cssRules.length), aKr.sheet.insertRule(aDV + "-button{display:none;}", aKr.sheet.cssRules.length)
		} catch (a2) {
			for (console.log("error 3425: " + a2), ce = aKr.sheet.cssRules.length - 1; 0 <= ce; ce--) aKr.sheet.deleteRule(0)
		}
	}
}

function aSd() {
	var fL, fM, fN, fd;

	function fQ() {
		fU(), 2 !== aI.data.aIncomeType && (aI.data.aIncomeData = null), aH.fW()[19] = null, aH.fX()
	}

	function fU() {
		2 === aI.data.aIncomeType ? (bT.fY.fZ(fN.fa(), aI.data.aIncomeData, 255), bT.fY.max(aI.data.aIncomeData) || (aI.data.aIncomeType = 0)) : 1 !== aI.data.aIncomeType || aI.data.aIncomeValue || (aI.data.aIncomeType = 0)
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(29), [new e9("⬅️ " + L(6), fQ)]), fM = new fR(fL.fS, (function(fd) {
		var fi = new fj;
		fi.fk(L(7)), fi.fm(new fn({
			fl: [L(173), L(174), L(10)],
			value: aI.data.aIncomeType
		}, function(eI) {
			fU(), 2 !== eI || aI.data.aIncomeData || (aI.data.aIncomeData = new Uint8Array(aI.fo)), aI.data.aIncomeType = eI, aH.eF(22)
		})), fd.push(fi)
	}(fd = []), function(fd) {
		var fi;
		1 === aI.data.aIncomeType && ((fi = new fj).fk("Value"), fi.fp(new eH({
			eI: -1,
			value: aI.data.aIncomeValue
		}, 1, 0, function(a2) {
			var value = gf.hI(Math.floor(a2.target.value), 0, 255);
			a2.target.value = aI.data.aIncomeValue = value
		})), fd.push(fi))
	}(fd), function(fd) {
		var fi;
		2 === aI.data.aIncomeType && ((fi = new fj).fk("Data"), (fN = new ft(0, 1, 0, 1)).fu(bT.bZ.fv(aI.data.aIncomeData, 4)), fi.fp(fN), fd.push(fi))
	}(fd), fd))
}

function vP() {
	var af, aax, b1, b2, a0Y, aay, aaz, a4q, canvas, a4r, ab0;

	function cl() {
		return Math.floor((aA.b1 - b1) / 2) < aZ.b2 + 2 * dO.gap ? aA.b2 - b2 - 4 * dO.gap - aZ.b2 : aA.b2 - b2 - 2 * dO.gap
	}
	this.k = function() {
		ab0 = af = !1, a0Y = .61, aay = .07, aaz = .09, a4r = a4q = b2 = 0
	}, this.resize = function() {
		var fA, na, ax, ab4, ab5, tI;
		af && (b1 = aFt(b1 = ca.cb.cc() ? Math.floor(.69 * aA.cd) : Math.floor(.5 * aA.cd), nS(aA.b1 - 2 * dO.gap, 10)), b1 = aFt(b1, Math.floor(3.57 * nS(aA.b2 - 2 * dO.gap, 3))), b2 = Math.floor(.28 * b1), (canvas = document.createElement(
			"canvas")).width = b1, canvas.height = b2, fA = canvas.getContext("2d", {
			alpha: !0
		}), na = Math.floor(1 + b2 / 40), fA.clearRect(0, 0, b1, b2), fA.fillStyle = dK.fB, fA.fillRect(na, na, b1 - 2 * na, b2 - 2 * na), fA.lineJoin = "bevel", fA.lineWidth = 2 * na, fA.strokeStyle = dK.dM, fA.strokeRect(na, na, b1 -
			2 * na, b2 - 2 * na), fA.imageSmoothingEnabled = !1, ax = eJ.get(aax), ab4 = ax.width, tI = (1 === aax ? .85 : 21 === aax ? .666 : .9) * a0Y * b2 / (ab5 = ax.height), fA.setTransform(tI, 0, 0, tI, Math.floor((b1 - tI * ab4) /
			2), Math.floor((b2 - tI * ab5) / 2)), fA.drawImage(ax, 0, 0), fA.setTransform(1, 0, 0, 1, Math.floor(b1 - aaz * b2 - aay * b2 - na), Math.floor(na + aay * b2)), function(fA, en) {
			fA.lineWidth = Math.floor(1 + b2 / 80), fA.strokeStyle = dK.dM, fA.beginPath(), fA.moveTo(0, 0), fA.lineTo(en, en), fA.moveTo(0, en), fA.lineTo(en, 0), fA.stroke()
		}(fA, Math.floor(aaz * b2)), fA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gU, ab2, hK, ab3) {
		af || ab3 && ab0 || (aax = hK ? 21 : gU ? 1 : 2, af = ab0 = !0, this.resize(), aP.c1(), aZ.a54(), a4r = aC.aD, a4q = ab2 ? 1 : 0)
	}, this.j1 = function() {
		!af || 1 <= a4q || (a4q = 1 < (a4q += 5e-4 * (aC.aD - a4r)) ? 1 : a4q, a4r = aC.aD, aC.ah = !0)
	}, this.m = function(aF, aG) {
		return !(!af || a4q <= 0 || (aF -= Math.floor((aA.b1 - b1) / 2), aG -= cl(), aF < 0) || aG < 0 || b1 < aF || b2 < aG || (b1 - b2 / 3 < aF && aG < b2 / 3 && (af = !1, aC.ah = !0), 0))
	}, this.dP = function() {
		!af || a4q <= 0 || (dQ.globalAlpha = a4q, dQ.drawImage(canvas, Math.floor((aA.b1 - b1) / 2), cl()), dQ.globalAlpha = 1)
	}
}

function aSS() {
	this.j1 = function(player) {
		var a82 = function(player) {
			for (var a84 = f4.a84.ab7(), en = a84.length, ju = Math.min(en, 32), kU = hw.pL(en), ce = 0; ce < ju; ce++) {
				var a82 = (ce + kU) % en,
					aBD = a84[a82],
					a8L = aBD[0],
					aEN = aBD[aBD.length - 1];
				if (f4.c3.aQ7(player, a8L) && f4.c3.a7z(player, aEN)) return a82;
				if (f4.c3.aQ7(player, aEN) && f4.c3.a7z(player, a8L)) return 0 <= (a82 = f4.a84.a88(aEN, a8L)) ? a82 : f4.a84.a89() ? -1 : f4.a84.a8A(f4.a84.a8B(aBD))
			}
			return -1
		}(player);
		return -1 !== a82 && (a82 = f4.a84.get(a82), !f4.c3.aQR(player, a82)) && (gk.jU[0] = a82, !0)
	}
}

function aAq() {
	this.aQY = function(gU) {
		return [gU >> 12 & 63, gU >> 6 & 63, 63 & gU]
	}, this.ab8 = function(gU) {
		for (var jU = this.aQY(gU), ce = 0; ce < 3; ce++) jU[ce] = ~~(4.05 * jU[ce]);
		return jU
	}, this.eV = function(gU) {
		gU = this.ab8(gU);
		return bT.color.a5f(gU[0], gU[1], gU[2])
	}, this.ab9 = function(jU) {
		for (var ce = 0; ce < 3; ce++) jU[ce] = ~~(jU[ce] / 4.04);
		return (jU[0] << 12) + (jU[1] << 6) + jU[2]
	}, this.a5f = function(au, bi, gv) {
		return "rgb(" + au + "," + bi + "," + gv + ")"
	}, this.a5g = function(au, bi, gv, jR) {
		return "rgba(" + au + "," + bi + "," + gv + "," + jR.toFixed(3) + ")"
	}, this.aTc = function(ax) {
		for (var jU = ax.split("(")[1].split(","), a7O = gk.a7O, ce = 0; ce < 3; ce++) a7O[ce] = parseInt(jU[ce]);
		return 4 === jU.length ? a7O[3] = 255 * parseFloat(jU[3].slice(0, -1)) : a7O[3] = 255, a7O
	}, this.aTd = function(abA, gy) {
		for (var jU = abA.slice(abA.indexOf("(") + 1, abA.indexOf(")")).split(","), a7O = gk.a7O, ce = 0; ce < 3; ce++) a7O[ce] = gf.hI(parseInt(jU[ce].trim(), 10) + gy, 0, 255);
		return 3 === jU.length ? this.a5f(a7O[0], a7O[1], a7O[2]) : (abA = parseFloat(jU[3].trim()), this.a5g(a7O[0], a7O[1], a7O[2], abA = 0 === abA ? .3 : abA))
	}, this.aav = function(abB, abC) {
		for (var om = 0, ce = 0; ce < 3; ce++) om += Math.abs(abC[ce] - abB[ce]);
		if (!(240 <= om))
			for (ce = 0; ce < 3; ce++) abC[ce] = abB[ce] + (abB[ce] < 128 ? 80 : -80)
	}, this.abD = function(jU) {
		for (var bb = "#", ce = 0; ce < 3; ce++) {
			var au = jU[ce].toString(16);
			bb += 1 === au.length ? "0" + au : au
		}
		return bb
	}, this.abE = function(bb) {
		var au, bi;
		return bb.length < 7 ? dK.oK : (au = parseInt(bb.slice(1, 3), 16), bi = parseInt(bb.slice(3, 5), 16), bb = parseInt(bb.slice(5, 7), 16), this.a5f(au, bi, bb))
	}
}

function a3i() {
	this.aYM = function() {
		cs.a6.aGD(), cs.jD.jX(105, c9.cA.m1(c9.cA.m2(5))), cs.jD.jX(106, c9.cA.m1(c9.cA.m2(15))), cs.jD.jX(109, 0), cs.jD.jX(108, cs.buffer.data[109].value), cs.jD.jX(111, cs.buffer.data[109].value + 1), cs.jD.jX(107, 0), cs.jD.jX(110, "")
	}, this.aYN = function() {
		var data;
		jz.size < lo.lp(29) ? a5.a6.a05(0, 3254) : ((data = {
			yK: jz.k6(30),
			aIH: jz.k6(16),
			aII: jz.k6(30),
			aIJ: jz.k6(30),
			aIK: jz.k6(30),
			bu: jz.ll(32),
			username: k0.ys.eP(5),
			aIL: k0.ys.eP(3),
			aIM: k0.ys.eP(3),
			aIN: jz.ll(32),
			aIO: jz.ll(32),
			aIP: jz.k6(30),
			aIQ: jz.ll(32),
			aIR: jz.ll(32),
			aIS: jz.ll(32),
			aIT: jz.ll(32),
			aKy: jz.ll(32),
			aKz: jz.ll(30),
			aLQ: jz.ll(32),
			aLR: k0.ys.eP(3),
			aLK: jz.ll(2),
			aLM: jz.ll(10),
			aLI: k0.ys.eP(8),
			aLL: jz.ll(5),
			aKl: jz.k6(30),
			aKu: jz.k6(30),
			aKv: jz.ll(32),
			aL5: jz.k6(3),
			aL4: jz.k6(8),
			aKw: jz.k6(30),
			aKx: jz.ll(32),
			aL2: jz.k6(1),
			aLF: k0.ys.eP(6),
			aL7: jz.k6(1),
			aL8: jz.k6(1),
			aL9: jz.k6(1),
			aLS: jz.k6(1),
			aLT: jz.k6(1)
		}).aLS && (data.aLU = jz.ll(32), data.aLV = jz.k6(30), data.aLW = jz.k6(30), data.aLX = jz.k6(1)), 8 === aH.bg && (25 === aH.bh().aEa ? (data.aKR = !0, aH.a6.rA = data, aH.bh().a6v(25, !1)) : (data.aKR = !1, cs.jD.jX(160, +(data
			.aLS && data.aLX)), data.cE = cs.buffer.data[105].value, aH.a6.rB = data, cs.jD.aIG(data), aH.bh().a6v(16, !0))))
	}
}

function vQ() {
	var abF, abG, abH;

	function abM(ce) {
		var button = ui.a0O[ce],
			aF = button.aF,
			aG = button.aG,
			b1 = button.b1,
			b2 = button.b2;
		dQ.fillStyle = button.abK, dQ.fillRect(aF, aG, b1, b2), ce === abF && (dQ.fillStyle = abH, dQ.fillRect(aF, aG, b1, b2)), dQ.lineWidth = dO.yf, dQ.strokeStyle = abG, dQ.strokeRect(aF, aG, b1, b2),
			function(button) {
				var aF = button.aF,
					aG = button.aG,
					b1 = button.b1,
					b2 = button.b2;
				bT.ed.textAlign(dQ, 1), bT.ed.textBaseline(dQ, 1), dQ.font = button.font, dQ.fillStyle = abG, dQ.fillText(button.aH6, Math.floor(aF + b1 / 2), Math.floor(aG + b2 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.b1 = 0, this.b2 = 0, this.aG = 0, this.gap = 0, this.k = function() {
		abF = -1, abG = dK.dM, abH = "rgba(255,255,255,0.16)", this.a0O = new Array(7), this.b2 = Math.floor((ca.cb.cc() ? .123 : .093) * aA.cd), this.b1 = Math.floor((ca.cb.cc() ? 3.96 : 4.2) * this.b2), this.gap = Math.floor(.025 * this.b1);
		var abI = Math.floor(.26 * this.b2),
			abJ = bT.ed.ef(1, abI);
		this.a0O[0] = {
			aF: 0,
			aG: 0,
			b1: Math.floor(.6 * this.b1 - this.gap / 2),
			b2: this.b2,
			aH6: "Multiplayer",
			font: abJ,
			abK: "rgba(22,88,22,0.8)",
			fontSize: abI
		}, abI = Math.floor(.18 * this.b2), abJ = bT.ed.ef(1, abI), this.a0O[1] = {
			aF: 0,
			aG: 0,
			b1: this.b1 - this.a0O[0].b1 - this.gap,
			b2: this.b2,
			aH6: "Single Player",
			font: abJ,
			abK: "rgba(22,88,88,0.8)",
			fontSize: abI
		}, this.a0O[2] = {
			aF: 0,
			aG: 0,
			b1: this.b1,
			b2: Math.floor(.3 * this.b2),
			aH6: "",
			font: this.a0O[1].font,
			abK: "rgba(100,0,0,0.8)",
			fontSize: this.a0O[1].fontSize
		}, this.a0O[3] = {
			aF: 0,
			aG: 0,
			b1: this.b1,
			b2: this.b2,
			aH6: "Back",
			font: this.a0O[0].font,
			abK: "rgba(0,0,0,0.8)",
			fontSize: this.a0O[0].fontSize
		}, this.a0O[4] = {
			aF: 0,
			aG: 0,
			b1: this.b1,
			b2: Math.floor(.3 * this.b2),
			aH6: "The game was updated!",
			font: this.a0O[1].font,
			abK: "rgba(100,0,0,0.8)",
			fontSize: this.a0O[1].fontSize
		}, this.a0O[5] = {
			aF: 0,
			aG: 0,
			b1: this.a0O[0].b1,
			b2: Math.floor(.8 * this.b2),
			aH6: "Reload",
			font: this.a0O[0].font,
			abK: "rgba(0,100,0,0.8)",
			fontSize: this.a0O[0].fontSize
		}, this.a0O[6] = {
			aF: 0,
			aG: 0,
			b1: this.a0O[1].b1,
			b2: this.a0O[5].b2,
			aH6: "Back",
			font: this.a0O[0].font,
			abK: "rgba(0,0,0,0.8)",
			fontSize: this.a0O[0].fontSize
		}, this.aJ7()
	}, this.aJ7 = function() {
		this.aG = Math.floor(.54 * aA.b2), this.a0O[0].aF = Math.floor(.5 * aA.b1 - .5 * this.b1), this.a0O[1].aF = this.a0O[0].aF + this.a0O[0].b1 + this.gap, this.a0O[2].aF = this.a0O[3].aF = this.a0O[0].aF, this.a0O[4].aF = this.a0O[5].aF =
			this.a0O[0].aF, this.a0O[6].aF = this.a0O[1].aF, this.a0O[0].aG = Math.floor(.54 * aA.b2), this.a0O[1].aG = this.a0O[0].aG, this.a0O[2].aG = Math.floor((aA.b2 - this.a0O[2].b2 - this.a0O[3].b2 - this.gap) / 2), this.a0O[3].aG = this
			.a0O[2].aG + this.a0O[2].b2 + this.gap, this.a0O[4].aG = Math.floor((aA.b2 - this.a0O[4].b2 - this.a0O[5].b2 - this.gap) / 2), this.a0O[5].aG = this.a0O[6].aG = this.a0O[4].aG + this.a0O[4].b2 + this.gap
	}, this.abL = function() {
		abM(0), abM(1)
	}, this.abN = function() {
		abM(2), abM(3)
	}, this.abO = function() {
		abM(4), abM(5), abM(6)
	}, this.n = function(aF, aG, iU) {
		var ce = -1;
		return 0 === aK.at() ? ce = this.aq(aF, aG, 0, 2) : 3 === aK.at() ? ce = this.aq(aF, aG, 3, 1) : 5 === aK.at() && (ce = this.aq(aF, aG, 5, 2)), abF !== ce && (abF = ce, iU) && (aC.ah = !0), -1 !== ce && (ak.reset(), !0)
	}, this.aq = function(aF, aG, abP, size) {
		for (var ce = abP; ce < abP + size; ce++)
			if (aF >= this.a0O[ce].aF && aG >= this.a0O[ce].aG && aF <= this.a0O[ce].aF + this.a0O[ce].b1 && aG <= this.a0O[ce].aG + this.a0O[ce].b2) return ce;
		return -1
	}
}

function fP(title, zH, abR) {
	var aUM = document.createElement("div"),
		abS = document.createElement("div"),
		aUP = document.createElement("div"),
		abT = document.createElement("div"),
		abU = document.createElement("div");
	this.fS = aUP, this.fw = zH, this.show = function() {
			!1 !== abR ? document.body.appendChild(aUM) : (document.body.appendChild(abS), document.body.appendChild(abT))
		}, this.c1 = function() {
			!1 !== abR ? aH.removeChild(document.body, aUM) : (aH.removeChild(document.body, abS), aH.removeChild(document.body, abT))
		}, this.aPD = function() {
			var aPG = bT.ed.aDy(.1),
				abY = bT.ed.aDy(.08 + .04 * (aA.aVE < 1), .3);
			return {
				aPG: aPG,
				abY: abY,
				aPF: aA.b2 / aA.aB - aPG - abY
			}
		}, this.resize = function(aX0) {
			var en = zH.length,
				nB = this.aPD(),
				aPG = nB.aPG,
				abY = nB.abY;
			for (abS.style.height = bT.ed.a23(aPG), bT.ed.eh(abS, 2), abT.style.top = bT.ed.a23(aA.b2 / aA.aB - abY), abT.style.height = bT.ed.a23(abY), bT.ed.eh(abT, 8), aUP.style.top = bT.ed.a23(aPG), aUP.style.height = aUP.style.maxHeight = bT.ed
				.a23(nB.aPF), abS.style.font = bT.ed.ef(0, bT.ed.aDy(.02, .15)), abT.style.font = bT.ed.ef(0, bT.ed.aDy(.02, .7)), aUP.style.font = bT.ed.ef(0, bT.ed.aDy(.02, .35)), ce = 1; ce < en; ce++) bT.ed.eh(zH[ce].button, 4);
			for (var aX1 = 0, ce = 0; ce < en; ce++) aX1 += zH[ce].button.offsetWidth;
			if (aX0 && aX1 < abT.offsetWidth)
				for (ce = 0; ce < en; ce++) zH[ce].button.style.width = (100 * zH[ce].button.offsetWidth / aX1).toFixed(2) + "%";
			else
				for (ce = 0; ce < en; ce++) zH[ce].button.style.width = "auto";
			abT.aEA && (abT.scrollLeft = abT.aEA), aX0 || this.resize(!0)
		}, this.dP = function() {
			var nB = this.aPD(),
				ax = aA.aB;
			dQ.fillStyle = dK.eG, dQ.fillRect(0, ax * nB.aPG, aA.b1, ax * nB.aPF)
		}, aUM.style.position = "absolute", aUM.style.top = "0", aUM.style.left = "0", aUM.style.width = "100%", aUM.style.height = "100%", abS.style.position = "absolute", abS.style.top = "0", abS.style.left = "0", abS.style.width = "100%", abS
		.style.display = "flex", abS.style.backgroundColor = dK.eG, abT.style.position = "absolute", abT.style.left = "0", abT.style.width = "100%", bT.ed.aE8(abT), abU.style.height = abU.style.maxHeight = "100%", aUP.style.position = "absolute", aUP
		.style.width = "100%", aUP.style.backgroundColor = dK.eG,
		function() {
			for (var ce = 0; ce < zH.length; ce++) zH[ce].button.style.height = "100%", zH[ce].button.style.padding = "0.0em 0.9em"
		}();
	for (var ce = 0; ce < zH.length; ce++) abU.appendChild(zH[ce].button);
	abS.appendChild(function() {
		var abX = document.createElement("h1");
		return abX.textContent = title, abX.style.margin = "auto", abX.style.fontSize = 18 <= title.length && aA.b2 > aA.b1 ? "1.8em" : "2.3em", abX.style.fontFamily = "Arial Black, system-ui", abX
	}()), abT.appendChild(abU), !1 !== abR && (aUM.appendChild(aUP), aUM.appendChild(abS), aUM.appendChild(abT))
}

function aHk(aa2) {
	var aUd = document.createElement("div"),
		abZ = document.createElement("div"),
		aba = [];

	function aTX() {
		aU.ac() || (this.style.backgroundColor = bT.color.aTd(dK.eG, 50))
	}

	function aTY() {
		this.style.backgroundColor = dK.eG
	}
	this.jX = function(abb, z5) {
			aba[2].textContent = abb + 1 + " / " + z5
		}, this.show = function(bx) {
			bx = b7.c3.aHc(bx, b7.c3.aHd(bx)), abZ.appendChild(b7.sp.transform(bx)), document.body.appendChild(aUd)
		}, this.resize = function() {
			var b2 = bT.ed.aDy(.03, .5);
			aUd.style.width = 10 * b2 + "px", aUd.style.font = bT.ed.ef(1, .75 * b2), bT.ed.eh(aUd, 4), abZ.style.top = b2 + "px", abZ.style.font = bT.ed.ef(0, .55 * b2), bT.ed.eh(abZ, 2), aUd.style.height = b2 + abZ.offsetHeight + "px";
			for (var ce = 0; ce < 3; ce++) bT.ed.eh(aba[ce], 6), aba[[0, 1, 3][ce]].style.width = 2 * b2 + "px";
			for (ce = 0; ce < 4; ce++) aba[ce].style.height = b2 + "px", bT.ed.eh(aba[ce], 2);
			aba[2].style.width = 4 * b2 + "px", aba[1].style.left = 2 * b2 + "px", aba[2].style.left = 4 * b2 + "px", aba[3].style.left = 8 * b2 + "px"
		}, this.lk = function() {
			for (var ce = 0; ce < 4; ce++) aba[ce].onclick = null, aba[ce].onmouseover = null, aba[ce].onmouseout = null;
			aH.removeChild(document.body, aUd), aUd = abZ = aba = null
		}, aUd.style.position = "absolute", aUd.style.color = dK.dM, aUd.style.zIndex = "3", aUd.style.right = "0", aUd.style.top = "0", abZ.style.position = "absolute", abZ.style.height = "auto", abZ.style.color = dK.dM, abZ.style.backgroundColor =
		dK.eG, abZ.style.left = "0", abZ.style.width = "100%", abZ.style.overflowWrap = "break-word", aUd.appendChild(abZ);
	for (var ce = 0; ce < 4; ce++) aba[ce] = document.createElement("div"), aba[ce].style.position = "absolute", aba[ce].style.backgroundColor = dK.eG, aba[ce].style.color = dK.dM, aba[ce].style.top = "0", aba[ce].style.display = "flex", aba[ce]
		.style.justifyContent = "center", aba[ce].style.alignItems = "center", aba[ce].style.userSelect = "none", aba[ce].style.outline = "none", aba[ce].style.font = "inherit", 2 !== (aba[ce].aHj = ce) && (aba[ce].onclick = aa2, aba[ce]
			.onmouseover = aTX, aba[ce].onmouseout = aTY), aUd.appendChild(aba[ce]);
	aba[0].textContent = "◀", aba[1].textContent = "▶", aba[3].textContent = "✖"
}

function aUn(aUb, aUc) {
	var abh, self, abc = document.createElement("div"),
		abd = document.createElement("div"),
		abZ = document.createElement("div"),
		abe = null,
		abi = (this.e3 = new eH({
			value: "",
			eI: -1
		}, 0, abf, function(a2) {
			a2.target.value = bT.bZ.a3o(a2.target.value), abe.qj.textContent = 127 - a2.target.value.length
		}), 0),
		aIl = 1,
		abj = 0,
		abk = 1048575;

	function abf() {
		aUb(), abe.qj.textContent = 127
	}

	function aIp(aIo, bx) {
		bx && (bx.aJk = 1, aIo.appendChild(b7.sp.transform(bx)))
	}

	function aIn(oj) {
		aIl ? abc.scrollTop = abc.scrollHeight : oj && (abc.scrollTop = abj)
	}
	this.reset = function(abl) {
			abk = 1048575, abd.textContent = "", abl || this.j6()
		}, this.j6 = function() {
			var qA = b7.a6.ps[0],
				qA = b7.a6.pr[qA],
				z3 = qA.z3,
				en = z3.length,
				tl = 1048575 === abk ? 0 : en - (qA.z4 - abk + 1048575) % 1048575;
			if (abk = qA.z4, !(en <= (tl = Math.max(tl, 0)))) {
				for (var aIo = document.createDocumentFragment(), ce = tl; ce < en; ce++) aIp(aIo, b7.c3.aHc(z3[ce], b7.c3.aHd(z3[ce])));
				abd.appendChild(aIo), aIn()
			}
		}, this.aHe = function(mj) {
			var aIo = document.createDocumentFragment();
			aIp(aIo, mj), abd.appendChild(aIo), aIn()
		}, this.show = function(a20) {
			a20.appendChild(abc), a20.appendChild(abZ), this.resize(a20)
		}, this.c1 = function(a20) {
			aH.removeChild(a20, abc), aH.removeChild(a20, abZ)
		}, this.resize = function(a20) {
			abi = a20 ? a20.offsetHeight : abi;
			var a20 = bT.ed.aDy(.04, .75),
				aPG = Math.max(a20, abi - a20),
				abm = aA.b1 / aA.aB,
				ec = .7 * abm,
				abn = bT.ed.a23(abi - a20 - aPG),
				aPG = (abZ.style.height = bT.ed.a23(a20), abc.style.height = bT.ed.a23(aPG), aA.b2 > aA.b1 || ca.cb.cc() ? (abZ.style.top = abn, abc.style.top = bT.ed.a23(abi - aPG), bT.ed.eh(abc, 8)) : (abc.style.top = abn, abZ.style.top = bT.ed
						.a23(abi - a20), bT.ed.eh(abc, 2)), this.e3.a2.style.width = bT.ed.a23(ec), this.e3.a2.style.fontSize = abh.button.style.fontSize = bT.ed.a23(.5 * a20), bT.ed.eh(this.e3.a2, 6), abh.button.style.left = bT.ed.a23(ec), abh
					.button.style.width = bT.ed.a23(abm - ec), .385 * a20);
			ca.cb.cc() && (aPG *= .8 - .12 * (aA.b1 > aA.b2)), abd.style.marginLeft = abd.style.marginRight = bT.ed.a23(.5 * aPG), abd.style.fontSize = bT.ed.a23(aPG), aIn(1)
		}, (self = this).e3.a2.aZp = 127, abc.style.position = "absolute", abc.style.left = "0", abc.style.width = "100%", abc.style.overflowX = "hidden", abc.style.overflowY = "auto", abc.style.font = "inherit", abc.style.backgroundColor = dK.a5i,
		abc.addEventListener("scroll", function() {
			abj = abc.scrollTop, aIl = abj < abc.scrollHeight - abc.clientHeight - 2 ? 0 : 1
		}), abd.style.font = "inherit", abZ.style.position = "absolute", abZ.style.left = "0", abZ.style.width = "100%", self.e3.a2.setAttribute("placeholder", L(538)), self.e3.a2.style.position = "absolute", self.e3.a2.style.top = "0", self.e3.a2
		.style.left = "0", self.e3.a2.style.height = "100%", self.e3.a2.style.backgroundColor = dK.a5h, self.e3.a2.style.textAlign = "center", (abh = new e9(L(140), abf)).button.top = "0", abh.button.style.position = "absolute", abh.button.style
		.height = "100%", abh.eU(dK.a6b), abe = new aH3("127", abh.button, 1, 1), abc.appendChild(abd), abZ.appendChild(self.e3.a2), abZ.appendChild(abh.button)
}

function aSf() {
	var fL, fM, fd;

	function abv() {
		for (var colors = new Array(11), ce = 0; ce < 11; ce++) {
			var jU = cs.buffer.data[163 + ce].value.split(",");
			colors[ce] = new Uint8Array(3);
			for (var jR = 0; jR < 3; jR++) jR < jU.length && (colors[ce][jR] = Number(jU[jR]))
		}
		return colors
	}
	this.show = function() {
		fL.show(), this.resize()
	}, this.c1 = function() {
		fL.c1()
	}, this.resize = function() {
		fL.resize(), fM.resize()
	}, this.b6 = function(ax) {
		2 === ax && fL.fw[0].fx()
	}, fL = new fP(L(448), [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})]), fM = new fR(fL.fS, ((fd = []).push(function() {
		var fi = new fj;
		return fi.fk(L(539)), fi.ox(a5.a6.oy("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", fi.ox("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), fi
	}()), fd.push(function() {
		var fi = new fj,
			ki = (fi.fk(L(540)), cs.buffer.data[174].value),
			p8 = fi.jI(ki.length + " / 180"),
			aLJ = (p8.style.textAlign = "center", new ft(0, 1, function(a2) {
				var a2 = a2.target.value,
					lu = a2.length;
				p8.textContent = lu + " / 180", lu <= 180 && cs.jD.jX(174, a2)
			}));
		return aLJ.a2.rows = 6, aLJ.a2.style.fontSize = "1em", aLJ.fu(ki), fi.fp(aLJ), fi
	}()), fd.push(function() {
		var fi = new fj;
		fi.fk(L(159));
		for (var ce = 0; ce < 11; ce++) {
			var qs = fi.fp(new eH(cs.buffer.data[163 + ce]));
			ce && (qs.a2.style.marginTop = "0.6em")
		}
		return fi.fp(new fs([new e9(L(62), function() {
			for (var data = cs.buffer.data, ce = 163; ce < 174; ce++) data[ce] && cs.buffer.aAC(ce, data[ce].rR);
			aH.fX(), aH.fW()[31] = null, aH.eF(31)
		}).button])), fi
	}()), fd.push(function() {
		var fi = new fj;
		return fi.fk("Targeting"), fi.ox(L(63)), fi.fp(new eH(cs.buffer.data[175], 0, 0)), fi
	}()), fd.push(function() {
		var fi = new fj;
		return fi.fk(L(185)), fi.fp(new fs([new e9(L(289), function() {
			(new kh).show(cs.buffer.data[174].value, abv(), -1)
		}).button])), fi
	}()), fd.push(function() {
		var fi = new fj,
			abw = (fi.fk(L(541)), fi.ox(L(542)), new eH(cs.buffer.data[176], 1, 0)),
			abx = (fi.fp(abw), new e9(L(543), function(a2) {
				return p4.button.textContent === L(139) && a5.a6.ke(0) && (bT.ed.jP(a2), p3(), a5.p6.aLv(cs.buffer.data[176].value, abv(), cs.buffer.data[175].value, cs.buffer.data[174].value)), !0
			}, 1)),
			p3 = function() {
				p4.button.textContent = L(138), abx.eU(1), abx.button.style.color = dK.dM
			},
			p4 = new e9(L(138), function(a2) {
				return a2.textContent === L(138) ? (a2.textContent = L(139), abx.eU(0), abx.button.style.color = dK.oN) : p3(), !0
			});
		return fi.fp(new fs([p4.button, abx.button])), fi
	}()), fd))
}

function aby() {
	var aCa, abz;

	function ac3() {
		(aCa = new WebSocket("wss://territorial.io/s52/")).onopen = ac4, aCa.onclose = function() {
			ac5()
		}
	}

	function ac4() {
		if (aCa && aCa.readyState === aCa.OPEN) {
			var b1 = new vx;
			b1.iE(1608), b1.mB(1, 0), b1.mB(6, 7), b1.mB(2, ca ? ca.id : 3), b1.mB(1, eo.aD4 ? 1 : 0), b1.mB(1, eo.aD5 ? 1 : 0), b1.mB(1, eo ? eo.wb : 0);
			for (var ce = 0; ce < abz.length && ce < 228; ce++) b1.mB(7, abz.charCodeAt(ce) % 128);
			aCa.send(b1.lj), ac5()
		}
	}

	function ac5() {
		aCa && (aCa.onclose = null, aCa.onopen = null, aCa = null)
	}
	window.addEventListener("error", function ac0(a2) {
		abz = "";
		try {
			var ac1 = function(a2) {
				if (!a2.error) return 0;
				var stack = a2.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, aVr = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aVr.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(a2);
			return 0 === ac1 || a2.lineno <= 3 ? void console.log("Error: External Code | " + ac1) : (window.removeEventListener("error", ac0), abz = a2.lineno + " " + a2.colno + "|" + ac1, __fx.reportError(a2, abz), alert("Error:\n" + a2
				.filename + " " + a2.lineno + " " + a2.colno + " " + a2.message))
		} catch (a2) {
			abz = "SE|" + abz + "|" + a2, console.log(abz), alert(abz)
		}
		ac3()
	})
}

function aSQ() {
	this.j1 = function(player) {
		return f4.x8.x9(player, function(player) {
			var en = iA.a8n.a8o;
			if (0 === en) return -1;
			for (var ju = Math.min(en, iA.performance.qV ? en : 10), buffer = iA.a8n.buffer, tl = gf.gg(hw.random() * en, hw.value(100)), a2 = tl + ju, d1 = hw.aWo(bX.sj[player], bX.sl[player]), d2 = hw.aWo(bX.sk[player], bX.sm[player]),
					xI = -1, xJ = i9.aaQ(0, 0, dC.dD, dC.dE), ce = tl; ce < a2; ce++) {
				var xF = ce % en,
					ac7 = i9.aVW(d1, d2, buffer[xF]);
				ac7 < xJ && (xJ = ac7, xI = xF)
			}
			return -1 !== xI ? function(kz, d1, d2) {
				var u1 = i9.nb(kz),
					u2 = i9.nd(kz),
					cx = d1 - u1,
					cy = d2 - u2;
				Math.abs(cx) >= Math.abs(cy) ? (cy = 0, cx = Math.sign(cx)) : (cx = 0, cy = Math.sign(cy));
				cx === cy && (cx = 1);
				for (;;) {
					if (u1 += cx, u2 += cy, !i9.aVX(u1, u2)) break;
					if (kz = i9.u5(u1, u2), i4.xu(i9.lO(kz))) return kz
				}
				return -1
			}(buffer[xI], d1, d2) : -1
		}(player))
	}
}

function wR(fl) {
	this.m9 = -1, this.pow = -1;
	var rv = fl || {},
		ac9 = this,
		acA = null,
		acB = null,
		acC = null,
		acD = null,
		acE = null,
		acF = [],
		acG = 0,
		acH = null,
		acI = null,
		acJ = null,
		acK = !1,
		acL = null,
		acO = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function acP(acQ, aSg, className) {
		acQ = document.createElement(acQ);
		return className && (acQ.className = className), aSg && aSg.appendChild(acQ), acQ
	}

	function acR(ki, aSg, action) {
		aSg = acP("button", aSg);
		return aSg.type = "button", aSg.textContent = ki, aSg.addEventListener("click", action), aSg
	}

	function acS(aSg) {
		aSg = acP("canvas", aSg);
		return aSg.width = aSg.height = 128, aSg
	}

	function aOm(canvas, acX) {
		for (var canvas = canvas.getContext("2d"), data = (acI || (acI = canvas.createImageData(128, 128), acJ = new Uint32Array(acI.data.buffer)), acX), acU = acJ, acV = 0, position = 0, color = 0; position < 16384; acV += 6, color ^= 1) {
			for (var eI = acV >> 3, cu = position + ((data[eI] << 8 | data[1 + eI]) >> 10 - (7 & acV) & 63), eq = color ? acO : 4294967295, ce = position; ce < cu; ce++) acU[ce] = eq;
			position = cu
		}
		canvas.putImageData(acI, 0, 0)
	}

	function acY() {
		if (acA) {
			acA.setAttribute("aria-busy", String(acK)), acE.disabled = acK, acD.disabled = acK || !acG;
			for (var ce = 0; ce < acF.length; ce++) acF[ce].disabled = acK, acF[ce].setAttribute("aria-pressed", String(Boolean(acG & 1 << ce)))
		}
	}

	function aca(event) {
		var acb, a0O;
		"Escape" === event.key && (event.preventDefault(), ac9.close()), "Tab" === event.key && acA && (acb = (a0O = acA.querySelectorAll("button:not(:disabled)"))[0], a0O = a0O[a0O.length - 1], event.shiftKey && document.activeElement === acb ? (
			event.preventDefault(), a0O.focus()) : event.shiftKey || document.activeElement !== a0O || (event.preventDefault(), acb.focus()))
	}

	function acd() {
		acL = document.activeElement, (acA = acP("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), acA.setAttribute("aria-modal", "true"), acA.setAttribute("aria-label", "Select all images matching the reference");
		acP("style", acA).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var ace = acP("div", acA, "captcha-reference-row");
		acP("span", ace, "captcha-reference-label").textContent = "Find All:", (acC = acS(ace)).className = "captcha-reference", acC.setAttribute("aria-label", "Reference image"), acB = acP("div", acA, "captcha-grid");
		for (var ce = 0; ce < 16; ce++) acF.push(function(eI) {
			var button = acR("", acB, function() {
				acK || (acG ^= 1 << eI, acY())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eI + 1)), button.setAttribute("aria-pressed", "false"), acS(button).setAttribute("aria-hidden", "true"), button
		}(ce));
		var ace = acP("div", acA, "captcha-actions"),
			ach = acR("Close", ace, function() {
				ac9.close()
			});
		acE = acR("Reload", ace, aci), acD = acR("Verify", ace, acj), acA.addEventListener("keydown", aca), ac9.resize(), acY(), ach.focus()
	}

	function aci() {
		acK || (ac9.close(), a5.kf.aD7(0, 0, uz.m9, uz.pow))
	}

	function acj() {
		var aD8, aD9;
		!acK && acG && (aD8 = acG, aD9 = acH, ac9.close(), a5.kf.aD7(aD8, aD9, uz.m9, uz.pow))
	}
	this.show = function(ack, aD9, m9, pow) {
		this.m9 = m9, this.pow = pow, acH = aD9, acA || acd(), aOm(acC, ack[0]);
		for (var kU = 0; kU < 16; kU++) aOm(acF[kU].firstChild, ack[kU + 1]);
		acG = 0, acK = !1, acY(), "function" == typeof rv.acl && rv.acl()
	}, this.resize = function() {
		var size;
		acA && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), acA.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (acA) {
			for (var acm = acA.querySelectorAll("canvas"), ce = 0; ce < acm.length; ce++) acm[ce].width = acm[ce].height = 0;
			acA.remove(), acA = acB = acC = acD = acE = null, acI = acJ = acH = null, acG = 0, acK = !(acF = []), acL && document.body.contains(acL) && acL.focus(), acL = null, "function" == typeof rv.acn && rv.acn()
		}
	}
}

function vx() {
	this.size = 0, this.eI = 0, this.lj = null, this.k = function(lj) {
		this.eI = 0, this.lj = lj, this.size = lj.length
	}, this.iE = function(ln) {
		return this.k(new Uint8Array(this.lp(ln))), this.lj
	}, this.lk = function() {
		this.lj = null
	}, this.mB = function(size, a4D) {
		for (var lj = this.lj, cu = this.eI + size - 1, ce = this.eI; ce <= cu; ce++) lj[ce >> 3] |= (a4D >> cu - ce & 1) << 7 - (7 & ce);
		this.eI += size, this.eI > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aDA = function(size, a4D) {
		var gv = size >> 1,
			gy = 1 << gv;
		this.mB(size - gv, gf.gg(a4D, gy)), this.mB(gv, a4D % gy)
	}, this.aco = function(size) {
		for (var lj = this.lj, cu = this.eI + size, ce = this.eI; ce < cu; ce++) lj[ce >> 3] &= 255 ^ 128 >>> (7 & ce)
	}, this.lp = function(ln) {
		return ln + 7 >> 3
	}, this.acp = function(jU, tl, cu, acq) {
		for (var ce = tl; ce < cu; ce++) this.mB(acq, jU[ce])
	}
}

function wK() {
	this.nW = function() {
		return ca.cb.cc() ? 2 : 1
	}
}

function aSR() {
	var acr, act = new Uint16Array(8);

	function acu(size, player) {
		for (var ce = bX.lT[player].length - 1; size <= ce; ce--) i4.a7f(bX.lT[player][ce], player)
	}
	this.k = function() {
		acr = 0
	}, this.aGP = function(player, aGO) {
		return gk.h6[1] = bX.lT[player].length, gk.h6[0] === aI.fo ? iA.pO.pp(player) : this.pn(player, gk.h6[0]), (0 !== gk.h6[1] || 0 !== bX.lT[player].length) && !(!aGO && gk.h6[1] === bX.lT[player].length || (gk.h6[0] === aI.fo ? bX.a4n[
			player]++ : bX.a4o[player]++, 0))
	}, this.aGQ = function(player) {
		acu(gk.h6[1], player), iN.jp(player, gk.gl[0], gk.h6[0]), iK.lU(player, !1)
	}, this.po = function(player, g7, en, ge) {
		var acv = gf.gg(12 * bX.gM[player], 1024);
		ge -= ge >= gf.gg(bX.gM[player], 2) ? acv : 0, acu(en, player), iN.jp(player, ge, g7), bX.gM[player] -= ge + acv, iK.lU(player, !1)
	}, this.pn = function(player, g7) {
		for (var l0, a1z = i4.a1z, ce = bX.pH[player].length - 1; 0 <= ce; ce--)
			if (i4.a31(bX.pH[player][ce]))
				for (l0 = 3; 0 <= l0; l0--)
					if (i4.lP(bX.pH[player][ce] + a1z[l0]) && i4.l9(bX.pH[player][ce] + a1z[l0]) === g7) {
						bX.lT[player].push(bX.pH[player][ce]);
						break
					}
	}, this.pp = function(player) {
		for (var a1z = i4.a1z, ce = bX.pH[player].length - 1; 0 <= ce; ce--)
			if (i4.a31(bX.pH[player][ce]))
				for (var l0 = 3; 0 <= l0; l0--)
					if (i4.l8(bX.pH[player][ce] + a1z[l0])) {
						bX.lT[player].push(bX.pH[player][ce]);
						break
					}
	}, this.pP = function(player, acw) {
		var ce, jR, l0, aXU, en = bX.pH[player].length,
			om = 256 <= en ? 12 : 32 <= en ? 6 : 1,
			tl = en - 1 - hw.pL(om),
			a1z = i4.a1z;
		acr = 0;
		loop: for (ce = tl; 0 <= ce; ce -= om)
			for (l0 = 3; 0 <= l0; l0--)
				if ((aXU = i4.l8(bX.pH[player][ce] + a1z[l0]) ? aI.fo : i4.l9(bX.pH[player][ce] + a1z[l0])) === aI.fo || i4.lP(bX.pH[player][ce] + a1z[l0]) && aXU !== player && (acw || h7.h8(player, aXU))) {
					for (jR = acr - 1; 0 <= jR; jR--)
						if (act[jR] === aXU) continue loop;
					if (act[acr] = aXU, 8 <= ++acr) return !0
				}
		return 0 < acr
	}, this.pQ = function(player, acw) {
		var ce, l0, aXU, a1z = i4.a1z;
		for (acr = 0, ce = bX.pH[player].length - 1; 0 <= ce; ce--)
			for (l0 = 3; 0 <= l0; l0--)
				if ((aXU = i4.l8(bX.pH[player][ce] + a1z[l0]) ? aI.fo : i4.l9(bX.pH[player][ce] + a1z[l0])) === aI.fo || i4.lP(bX.pH[player][ce] + a1z[l0]) && aXU !== player && (acw || h7.h8(player, aXU))) return act[acr++] = aXU, !0;
		return !1
	}, this.pS = function() {
		for (var gv, ce = acr - 1; 0 <= ce; ce--)
			if (act[ce] === aI.fo) {
				for (acr--, gv = ce; gv < acr; gv++) act[gv] = act[gv + 1];
				return !0
			} return !1
	}, this.pR = function(player) {
		for (var gv, ce = acr - 1; 0 <= ce; ce--)
			if (iN.lR(player, act[ce]))
				for (acr--, gv = ce; gv < acr; gv++) act[gv] = act[gv + 1];
		return 0 === acr
	}, this.pZ = function() {
		for (var ce = acr - 1; 0 <= ce; ce--)
			if (bT.bU.bV(act[ce])) return !0;
		return !1
	}, this.pb = function() {
		for (var ce = acr - 1; 0 <= ce; ce--) bT.bU.bV(act[ce]) || (act[ce] = act[--acr]);
		return 0 < acr
	}, this.pX = function(player) {
		for (var gv, acx = act[0], acy = bX.gM[acx] + iN.aTp(acx, player), ce = acr - 1; 1 <= ce; ce--)(gv = bX.gM[act[ce]] + iN.aTp(act[ce], player)) < acy && (acx = act[ce], acy = gv);
		return acx
	}, this.pd = function(player) {
		var b2, acz = act[0];
		if (1 !== acr)
			for (var ad0 = gf.gg(bX.sl[player] + bX.sj[player], 2), ad1 = gf.gg(bX.sm[player] + bX.sk[player], 2), xJ = aFs(ad0 - gf.gg(bX.sl[acz] + bX.sj[acz], 2)) + aFs(ad1 - gf.gg(bX.sm[acz] + bX.sk[acz], 2)), ce = acr - 1; 1 <= ce; ce--)(b2 =
				aFs(ad0 - gf.gg(bX.sl[act[ce]] + bX.sj[act[ce]], 2)) + aFs(ad1 - gf.gg(bX.sm[act[ce]] + bX.sk[act[ce]], 2))) < xJ && (xJ = b2, acz = act[ce]);
		return acz
	}, this.pm = function() {
		for (var ad2 = act, ad3 = ad2[0], gM = bX.gM, ad4 = gM[ad3], ce = acr - 1; 1 <= ce; ce--) {
			var fF = ad2[ce],
				gv = gM[fF];
			ad4 < gv && (ad3 = fF, ad4 = gv)
		}
		return ad3
	}, this.pc = function() {
		return act[hw.pL(acr)]
	}
}

function vf() {
	var gU, b1, b2, max, ad5, aAG, ad7, ad8, ad9, adA, adB, adC, adD, adE, ad6 = 1e4;

	function adL(adK, aAJ, en) {
		var ce;
		for (ad7[0] = adK, ce = 1; ce < en; ce++) ad7[ce] = ad7[ce - 1] + aAJ, aAJ = ad7[ce] >= ad6 ? (ad7[ce] = ad6 - 1, -aAJ) : ad7[ce] < 0 ? (ad7[ce] = 0, -aAJ) : (aAJ += 16384 <= hw.random() ? aAG : -aAG) < -ad5 ? -ad5 : ad5 < aAJ ? ad5 : aAJ
	}

	function adN(aF, aG, adO, en) {
		(adO ? function(aF, aG, en) {
			var ce;
			for (ce = 0; ce < en; ce++) gU[aG * b1 + aF + ce] = ad7[ce]
		} : function(aF, aG, en) {
			var ce;
			for (ce = 0; ce < en; ce++) gU[aG * b1 + aF + ce * b1] = ad7[ce]
		})(aF, aG, en)
	}

	function adR(value, en) {
		var ce, tm, d5, om = value - ad7[en - 1];
		if (0 != om) {
			for (tm = 1 + gf.gg(Math.abs(om), en - 1), tm = om < 0 ? -tm : tm, ad7[en - 1] = value, d5 = (d5 = en - 1 - gf.gg(Math.abs(om), Math.abs(tm))) < 1 ? 1 : en - 2 < d5 ? en - 2 : d5, ce = en - 2; d5 <= ce; ce--) ad7[ce] += om - (en - 1 -
				ce) * tm;
			(om < 0 ? function(en) {
				var ce;
				for (ce = en - 2; 1 <= ce; ce--) ad7[ce] < 0 && (ad7[ce] = -ad7[ce] - 1)
			} : function(en) {
				var ce;
				for (ce = en - 2; 1 <= ce; ce--) ad7[ce] >= ad6 && (ad7[ce] = 2 * ad6 - ad7[ce] - 1)
			})(en)
		}
	}

	function adU(aJZ, aJc, en) {
		for (var ce = 0; ce < en; ce++) aJZ[ce] = aJc[ce]
	}

	function adV(jU) {
		for (var ce = 0; ce < jU.length - 1; ce++) jU[ce] = jU[ce + 1] - jU[ce];
		jU[jU.length - 1] = jU[jU.length - 3]
	}

	function adW(aNH, gap, l0) {
		ad8.push(aNH), ad9.push(gap), adA.push(l0)
	}
	this.iE = function(aBO) {
		! function(aBO) {
			var ce;
			for (b1 = aBO[0], b2 = aBO[1], ad5 = aBO[2], aAG = aBO[3], gU = new Int16Array(b1 * b2), max = b2 < b1 ? b1 : b2, ad7 = new Int16Array(max), ad8 = [], ad9 = [], adA = [], adB = new Array(b1), adC = new Array(b2), ce = b1 - 1; 0 <=
				ce; ce--) adB[ce] = !1;
			for (ce = b2 - 1; 0 <= ce; ce--) adC[ce] = !1;
			adD = new Int16Array(b1), adE = new Int16Array(b2)
		}(aBO),
		function(en) {
			var adK = hw.random() % ad6,
				aAJ = hw.random() % (2 * ad5 + 1) - ad5;
			adL(adK, aAJ, en)
		}(max), adU(adE, ad7, b2), adN(0, 0, !0, b1);
		var aF, aG, aBO = gU[0],
			en = max,
			aAJ = hw.random() % (2 * ad5 + 1) - ad5;
		for (adL(aBO, aAJ, en), adU(adD, ad7, b1), adN(0, 0, !1, b2), adV(adD), adV(adE), adL(gU[b1 - 1], adD[b1 - 1], b2), adN(b1 - 1, 0, !1, b2), adL(gU[b1 * (b2 - 1)], adE[b2 - 1], b1), adR(gU[b1 * b2 - 1], b1), adN(0, b2 - 1, !0, b1), adB[
				b1 - 1] = adB[0] = !0, adC[b2 - 1] = adC[0] = !0, adW(0, b1, !0), adW(0, b2, !1), ! function() {
				var aBX, aNH;
				for (;;) {
					if (aBX = function() {
							var ce, aBX = ad8.length - 1;
							for (ce = aBX - 1; 0 <= ce; ce--) ad9[ce] > ad9[aBX] && (aBX = ce);
							return aBX
						}(), ad9[aBX] < 5) return;
					aNH = ad8[aBX] + gf.gg(ad9[aBX], 2), (adA[aBX] ? function(aF) {
						var en, ada, ce, abP = 0,
							adb = 0;
						for (; adb < b2 - 1;) {
							for (ce = abP + 1; ce < b2; ce++)
								if (adC[ce]) {
									adb = ce;
									break
								} en = adb - abP + 1, adL(gU[aF + b1 * abP], 0 === abP ? adD[aF] : ad7[ada - 1] - ad7[ada - 2], en), adR(gU[adb * b1 + aF], en), adN(aF, abP, !1, en), ada = en, abP = adb
						}
						adB[aF] = !0
					} : function(aG) {
						var en, ada, ce, abP = 0,
							adb = 0;
						for (; adb < b1 - 1;) {
							for (ce = abP + 1; ce < b1; ce++)
								if (adB[ce]) {
									adb = ce;
									break
								} en = adb - abP + 1, adL(gU[aG * b1 + abP], 0 === abP ? adE[aG] : ad7[ada - 1] - ad7[ada - 2], en), adR(gU[aG * b1 + adb], en), adN(abP, aG, !0, en), ada = en, abP = adb
						}
						adC[aG] = !0
					})(aNH), adW(aNH, ad8[aBX] + ad9[aBX] - aNH, adA[aBX]), ad9[aBX] = aNH - ad8[aBX] + 1
				}
			}(), aF = 0; aF < b1; aF++)
			if (!adB[aF])
				for (aG = 0; aG < b2; aG++) adC[aG] || ! function(aF, aG) {
					var value = gU[aG * b1 + aF - 1] + gU[(aG - 1) * b1 + aF],
						a4D = 2;
					adB[aF + 1] && (a4D++, value += gU[aG * b1 + aF + 1]);
					adC[aG + 1] && (a4D++, value += gU[(aG + 1) * b1 + aF]);
					gU[aG * b1 + aF] = gf.gg(value, a4D)
				}(aF, aG)
	}, this.r2 = function() {
		return gU
	}, this.xn = function() {
		gU = null
	}
}

function vs() {
	this.add = null, this.k = function() {
		10 !== aI.dw ? this.add = null : this.add = new Uint32Array(aI.fo)
	}, this.j1 = function() {
		10 === aI.dw && this.c3()
	}, this.c3 = function() {
		for (var fF, target, il, add = this.add, n8 = gC.gJ, gX = bX.gM, ce = gC.gB - 1; 0 <= ce; ce--)(fF = n8[ce]) >= aI.gN || (target = Math.max(gf.gg(gX[fF], 4), 2048), il = Math.max(hO.j3(fF), 100), add[fF] += gf.gg(il * target, 1e4), add[
			fF] > target && (add[fF] = target))
	}, this.gj = function(player, ge) {
		return ge > this.add[player] ? (ge = this.add[player], this.add[player] = 0) : this.add[player] -= ge, ge
	}
}

function vd() {
	this.sp = new aFH, this.kH = new aDU
}

function v9() {
	this.cA = new a1I, this.ly = new tr, this.ys = new aXe, this.k = function() {
		this.cA.k()
	}
}

function a3W() {
	this.a03 = !1, this.j1 = function() {
		aC.j7() % 250 != 249 || aI.bG || (a5.kf.aD2(+(this.a03 && bX.g3[aI.bS]), gC.gB + f4.a6.kr), this.a03 = !1)
	}
}

function vW() {
	this.gJ = null, this.gB = 0, this.iH = function() {
		for (this.gB = 0, ce = aI.fo - 1; 0 <= ce; ce--) 0 !== bX.g3[ce] && this.gB++;
		this.gJ = new Uint16Array(this.gB);
		for (var en = 0, ce = 0; ce < aI.fo; ce++) 0 !== bX.g3[ce] && (this.gJ[en++] = ce)
	}, this.jb = function() {
		for (var gD = bX.gD, a2v = bX.a2v, a4p = bX.a4p, gJ = gC.gJ, ce = gC.gB - 1; 0 <= ce; ce--) {
			var fF = gJ[ce],
				mf = gD[fF],
				ju = a2v[fF];
			mf <= gf.gg(ju, 4) ? uk.wY(fF) : ju <= mf ? 250 <= (a2v[fF] = mf) && (a4p[fF] = 1) : a2v[fF] = ju - Math.max(1, gf.gg(ju - mf, 1e3))
		}
		this.aJQ()
	}, this.aJQ = function() {
		for (var g3 = bX.g3, xE = this.gJ, adf = this.gB, ce = adf - 1; 0 <= ce; ce--) 0 === g3[xE[ce]] && (xE[ce] = xE[--adf]);
		this.gB = adf
	}
}

function pv() {
	this.q6 = 0, this.k5 = 0, this.mapSeed = 0, this.yl = 0, this.ym = 0, this.yn = 0, this.yo = 0, this.yp = 0, this.q8 = 0, this.spawningSeed = 0, this.a8 = 0, this.mE = 0, this.z3 = [], this.z4 = 1048575, this.q7 = 0, this.z1 = [{
		k5: 0,
		mapSeed: 0,
		yl: 0,
		aD: 100,
		yp: 0
	}, {
		k5: 1,
		mapSeed: 0,
		yl: 1,
		aD: 200,
		yp: 0
	}, {
		k5: 2,
		mapSeed: 0,
		yl: 2,
		aD: 300,
		yp: 0
	}, {
		k5: 3,
		mapSeed: 0,
		yl: 3,
		aD: 400,
		yp: 0
	}, {
		k5: 0,
		mapSeed: 0,
		yl: 9,
		aD: 500,
		yp: 0
	}, {
		k5: 1,
		mapSeed: 0,
		yl: 10,
		aD: 600,
		yp: 0
	}, {
		k5: 2,
		mapSeed: 0,
		yl: 8,
		aD: 700,
		yp: 0
	}, {
		k5: 3,
		mapSeed: 0,
		yl: 3,
		aD: 800,
		yp: 0
	}]
}

function aTK() {
	var adg = [];
	this.k = function() {
		adg = []
	}, this.a89 = function() {
		return 65536 === adg.length
	}, this.a88 = function(a87, a7y) {
		for (var a84 = adg, en = a84.length, ce = 0; ce < en; ce++) {
			var fF = a84[ce];
			if (fF[0] === a87 && fF[fF.length - 1] === a7y) return ce
		}
		return -1
	}, this.a8B = function(aBD) {
		var adh = new Uint32Array(aBD.length);
		return adh.set(aBD), adh.reverse()
	}, this.aBF = function(kP, kQ) {
		var lu = kP.length - 1,
			adi = new Uint32Array(lu + kQ.length);
		return adi.set(kP, 0), adi.set(kQ, lu), adi
	}, this.aBK = function(kP, kQ, aGK, kz, adj) {
		adj && (aGK = (kQ = this.a8B(kQ)).length - aGK - 2);
		adj = kQ.subarray(aGK + 1 + (kz === kQ[aGK + 1])), kz = new Uint32Array(kP.length + adj.length);
		return kz.set(kP, 0), kz.set(adj, kP.length), kz
	}, this.a8A = function(aBD) {
		return adg.push(aBD), adg.length - 1
	}, this.get = function(ce) {
		return adg[ce]
	}, this.ab7 = function() {
		return adg
	}, this.adl = function(a87, a7y) {
		return null
	}
}

function adm() {
	this.ia = function(bb, lr, adn) {
		for (var ado = [], en = bb.length, max = 0, ce = 0; ce < en; ce++) {
			var gU = bb.charCodeAt(ce);
			ado.push(gU), max = Math.max(max, gU)
		}
		var aXf = max < 128 ? 7 : 16;
		for (adn.mB(lr, en), adn.mB(1, +(16 == aXf)), ce = 0; ce < en; ce++) adn.mB(aXf, ado[ce])
	}
}

function e8(adp, adq, adr) {
	this.aF = 0, this.aG = 0, this.b1 = 0, this.b2 = 0, this.resize = function() {
		this.b2 = Math.min(bT.ed.yi(adr || .5) * adp[1] * aA.cd, aA.b2 - 2 * dO.gap), this.b1 = Math.min(this.b2 * (adp[0] / adp[1]), aA.b1 - 2 * dO.gap), this.b2 = adp[1] * this.b1 / adp[0], this.aF = dO.gap + adq[0] * (aA.b1 - this.b1 - 2 * dO
			.gap), this.aG = dO.gap + adq[1] * (aA.b2 - this.b2 - 2 * dO.gap)
	}, this.ads = function() {
		return this.aF + .5 * this.b1
	}
}

function aSc() {
	var j9, zE, zF, zH;

	function zG(ce) {
		aH.eF(8, aH.bg, new eS(21, {
			zJ: ce,
			rL: 0,
			rM: 10
		}))
	}
	this.show = function() {
		j9.show(), this.resize()
	}, this.c1 = function() {
		j9.c1()
	}, this.resize = function() {
		j9.resize(), zE.resize()
	}, this.b6 = function(ax) {
		2 === ax && j9.fw[0].fx()
	}, zF = [new e9(L(544), function() {
		zG(1)
	}, 0, 0, 1), new e9(L(545), function() {
		zG(2)
	}, 0, 0, 1), new e9(L(546), function() {
		zG(3)
	}, 0, 0, 1), new e9(L(547), function() {
		zG(0)
	}, 0, 0, 1), new e9(L(247), function() {
		zG(9)
	}, 0, 0, 1), new e9(L(197), function() {
		zG(10)
	}, 0, 0, 1), new e9(L(198), function() {
		zG(11)
	}, 0, 0, 1), new e9(L(199), function() {
		zG(13)
	}, 0, 0, 1)], zH = [new e9("⬅️ " + L(6), function() {
		aH.fX()
	})], j9 = new fP(L(445), zH), zE = new zI(zF, j9.fS)
}

function w8() {
	this.id = 0, this.eX = 0, this.aA6 = null, this.eY = null, this.aKM = null, this.aA7 = null, this.cb = new aA3, this.k = function() {
		var self, eX;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eX = Android.getVersion()) < 12 || (self.eX = eX, self.id = 1, self.eY = Android),
			function(self) {
				var eX;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aKM = mwIOSdataX, self.aA7 = window.webkit.messageHandlers.iosCommandA, eX =
					self.aKM.version, self.eX = eX ? Number(eX) : 0)
			}(this),
			function(self) {
				var aA6;
				try {
					if (!(aA6 = window.localStorage)) return;
					aA6.setItem("tls7", "1"), aA6.removeItem("tls7")
				} catch (error) {
					return
				}
				self.aA6 = aA6
			}(this)
	}
}

function v8() {
	this.cA = new ml, this.ly = new aJL, this.ys = new adm, this.k = function() {
		this.cA.k()
	}
}

function vF() {
	var a0O, aF, aG, adw, adx, ady, aD, adz, ae0, ae1, ae2, gap, zoom, aWm, ae3;

	function aeC(d1, d2, d5) {
		i4.l7(d5) || -1 === (d1 = f4.c3.u7(d1, d2)) ? aa.nz(d5) : aa.o9(d1)
	}

	function aeA(adz) {
		for (var ce = aWm.length - 1; 0 <= ce; ce--)
			if (aWm[ce] === adz) return 1
	}

	function ae8(aNH) {
		var ce, en;
		if (-1 !== aNH)
			for (en = a0O.length, ce = 0; ce < en; ce++)
				if (a0O[ce].af && a0O[ce].aF + 1 === aNH % 4 && a0O[ce].aG + 1 === aNH >> 2) return ce;
		return -1
	}

	function ae6(d1, d2) {
		var bi = gap / 2;
		return d1 < aF - adw - 3 * bi || aF + 3 * adw + 5 * bi < d1 || d2 < aG - adw - 3 * bi || aG + 2 * adw + 3 * bi < d2 ? -1 : 4 * (d2 < aG - bi ? 0 : d2 < aG + adw + bi ? 1 : 2) + (d1 < aF - bi ? 0 : d1 < aF + adw + bi ? 1 : d1 < aF + 2 * adw +
			3 * bi ? 2 : 3)
	}
	this.aDT = function() {
		var ce, gv, ae5 = [dK.a60, dK.a68, dK.a5i, dK.a6P, dK.a6I];
		for (a0O = new Array(10), ce = 0; ce < 10; ce++) a0O[ce] = {
			id: ce,
			af: !1,
			xI: 0,
			canvas: [],
			aF: 0,
			aG: 0
		};
		for (a0O[0].colors = [0, 1, 2, 3], a0O[0].aF = 0, a0O[0].aG = 0, a0O[1].colors = [1, 4], a0O[1].aF = 1, a0O[1].aG = 0, a0O[2].colors = [0, 1], a0O[2].aF = -1, a0O[2].aG = 0, a0O[3].colors = [0], a0O[3].aF = 0, a0O[3].aG = 0, a0O[4]
			.colors = [0, 2], a0O[4].aF = 1, a0O[4].aG = 1, a0O[5].colors = [3], a0O[5].aF = 0, a0O[5].aG = -1, a0O[6].id = 20, a0O[6].colors = [0], a0O[6].aF = 1, a0O[6].aG = -1, a0O[7].id = 21, a0O[7].colors = [0], a0O[7].aF = 0, a0O[7].aG = 1,
			a0O[8].id = 16, a0O[8].colors = [0], a0O[8].aF = 0, a0O[8].aG = 0, a0O[9].id = 10, a0O[9].colors = [4], a0O[9].aF = 2, a0O[9].aG = 0, ce = 0; ce < 10; ce++)
			for (gv = 0; gv < a0O[ce].colors.length; gv++) a0O[ce].canvas.push(function(id, aAw) {
				if (id < 20) return bT.canvas.aAu(eJ.get(3), id, aAw);
				var aAw = eJ.get(3).height,
					ni = bT.ed.k7(aAw, aAw),
					t1 = bT.ed.getContext(ni);
				20 === id ? t1.drawImage(eJ.get(18), 0, 0) : 21 === id && nl.kH.nm(nl.sp.aFJ + nl.sp.aFO, t1, 0, 0, aAw);
				return ni
			}(a0O[ce].id, ae5[a0O[ce].colors[gv]]))
	}, this.tV = function() {
		return a0O
	}, this.k = function() {
		aWm = [], aF = aG = aD = 0, adx = ady = -1e3, this.resize()
	}, this.resize = function() {
		adw = Math.floor((ca.cb.cc() ? .075 : .0468) * aA.cd), zoom = adw / eJ.get(3).height, gap = Math.floor(adw / 3)
	}, this.aQ = function(d1, d2) {
		return !!this.af() && (aC.ah = !0, !!nl.kH.m(d1, d2, ae0) || (d1 = function(d1, d2) {
			ady = adx = -1e3;
			var ae7 = ae8(ae6(d1, d2));
			if (-1 === ae7) return 0;
			if (1 !== a0O[ae7].colors[a0O[ae7].xI])
				if (5 === ae7) {
					if (! function() {
							var mf = performance.now();
							ae3 + 4e3 < mf && (aWm = []);
							ae3 = mf
						}(), aeA(adz)) return 1;
					aWm.push(adz), 16 < aWm.length && aWm.shift()
				} else if (6 === ae7) {
				for (var ce = aWm.length - 1; 0 <= ce; ce--) 0 === bX.g3[aWm[ce]] && aWm.splice(ce, 1);
				0 < aWm.length && (iO.aNu(1, aWm, !0) && du.bU.aWl(aWm, adz), aWm = [])
			} else if (2 === ae7) hy.aI5(adz) && du.cJ.jl(aZ.a52(), adz);
			else if (3 === ae7) aI.g1 && du.cJ.a8R(ae1);
			else if (0 === ae7)
				if (0 === a0O[0].xI) {
					if (aI.hb && be.bf() < 350) return 1;
					iB.aPt(4), du.cJ.a8S(aZ.a52(), adz)
				} else iP.aNI(adz, aZ.a52());
			else if (1 === ae7) du.cJ.a8T(aZ.a52(), ae1);
			else if (9 === ae7) du.cJ.a8U(aZ.a52());
			else {
				if (7 === ae7) return iB.aPt(0), nl.kH.show(d1, d2), 2;
				if (4 === ae7) iO.aNu(0, [adz], !0) && du.bU.nY(adz);
				else {
					if (8 !== ae7) return 0;
					du.cJ.a8b(aZ.a52(), ae2, adz)
				}
			}
			return 1
		}(d1, d2), this.c1(), 2 === d1 && (nl.kH.af = !0), 0 < d1))
	}, this.aW = function(d1, d2) {
		this.af() || (adx = d1, ady = d2, aD = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = i9.su(mouseX),
			coordY = i9.sw(mouseY),
			point = i9.lO(i9.u5(coordX, coordY));
		i9.u3(coordX, coordY) && aeC(mouseX, mouseY, point)
	}, this.click = function(d1, d2, ap) {
		var u1 = i9.su(d1),
			u2 = i9.sw(d2),
			kz = i9.u5(u1, u2),
			d5 = i9.lO(kz),
			aeB = (ca.cb.cc() ? .025 : .0144) * aA.cd,
			mf = performance.now();
		return !(Math.abs(d1 - adx) > aeB || Math.abs(d2 - ady) > aeB || aD + 500 < mf || (aD = mf, aU.ac() && (aU.i = d1, aU.j = d2, iQ.j1(1), iR.j1(1)), !i9.u3(u1, u2))) && (ap ? (aeC(d1, d2, d5), !1) : aS.bE || this.af() || !bT.bU.g2(aI.bS) ||
			aI.bG ? (this.c1(), !1) : (aI.g1 ? 0 <= (ae1 = uy.aRK(kz)) && (a0O[3].af = !0) : 2 === aI.aJ ? i4.lP(d5) && (adz = i4.l9(d5), bT.bU.bV(adz) || (a0O[0].af = !0, a0O[0].xI = 1, a0O[7].af = !0)) : (f4.wq.aI5(aI.bS, kz) && (a0O[0]
				.af = !0, a0O[0].xI = 1, a0O[1].af = !0, a0O[1].xI = 0, a0O[9].af = !0, a0O[9].xI = 0), f4.aTJ.aEC(aI.bS, kz) && (a0O[0].af = !0, a0O[0].xI = 1, a0O[1].af = !0, a0O[1].xI = 1, ae1 = gk.wt[7]), i4.o7(d5) ? (ae2 = ul.lW
				.aVO(d5)) && (aeB = i9.lO(ae2), a0O[8].af = !0, adz = i4.l8(aeB) ? aI.fo : i4.l9(aeB)) : (i4.tq(aI.bS, d5) && (ae0 = aI.bS, a0O[0].af = !0, a0O[0].xI = 1, a0O[7].af = !0), -1 !== (mf = uy.aRL(kz)) && (i4.l8(mf << 2) ?
				(adz = aI.fo, h7.aWr(aI.bS) ? (a0O[0].af = !0, a0O[0].xI = 0) : iN.a1g(aI.bS) && (a0O[0].af = !0, a0O[0].xI = 3)) : (adz = i4.l9(mf << 2), a0O[0].xI = 1, a0O[5].af = function(adz) {
					return !bT.bU.bV(adz) && !aeA(adz) && iO.aNu(1, [adz], !1)
				}(adz), a0O[7].af || bT.bU.bV(adz) || (ae0 = adz, a0O[7].af = !0), a0O[4].af = !bT.bU.bV(adz) && !cz.tc(adz) && iO.aNu(0, [adz], !1), a0O[6].af = function(adz) {
					if (0 === aWm.length) return !1;
					if (performance.now() > ae3 + 4e3) return !(aWm = []);
					return !aeA(adz) && ! function(adz) {
						var ce;
						if (aI.dm)
							for (ce = aWm.length - 1; 0 <= ce; ce--)
								if (!h7.h8(adz, aWm[ce])) return 1;
						return
					}(adz)
				}(adz), h7.h8(adz, aI.bS) ? (h7.aWs(aI.bS, adz) ? (a0O[0].xI = 0, a0O[0].af = !0) : iN.a1g(aI.bS) && (a0O[0].xI = 3, a0O[0].af = !0), a0O[0].af = this.aeH()) : (a0O[2].af = !0, hy.aI5(adz) ? a0O[2].xI = 0 :
					a0O[2].xI = 1, a0O[0].af = !0))))), this.aeD(d1, d2)))
	}, this.aeD = function(d1, d2) {
		return aF = d1 - Math.floor(adw / 2), aG = d2 - Math.floor(adw / 2), !!this.af()
	}, this.n = function(d1, d2) {
		return !!this.af() && (nl.kH.af ? !nl.kH.aRI(d1, d2) && (nl.kH.af = !1, aC.ah = !0) : function(dh, d1, d2) {
			d1 = ae6(d1, d2);
			if (0 <= ae8(d1)) return !1;
			if ((1 === d1 || 6 === d1) && 0 <= ae8(2)) return !1;
			if ((6 === d1 || 9 === d1) && 0 <= ae8(10)) return !1;
			return dh.c1(), aC.ah = !0
		}(this, d1, d2))
	}, this.c1 = function() {
		for (var ce = a0O.length - 1; 0 <= ce; ce--) a0O[ce].af = !1, a0O[ce].xI = 0;
		nl.kH.af = !1
	}, this.af = function() {
		return this.aeH() || nl.kH.af
	}, this.aeH = function() {
		for (var en = a0O.length, ce = 0; ce < en; ce++)
			if (a0O[ce].af) return !0;
		return !1
	}, this.dP = function() {
		if (this.af())
			if (nl.kH.af) nl.kH.dP();
			else {
				var ce, t1 = dQ,
					gv = a0O,
					en = gv.length,
					aeL = (adw + gap) / zoom;
				for (t1.imageSmoothingEnabled = !0, t1.setTransform(zoom, 0, 0, zoom, aF, aG), ce = 0; ce < en; ce++) gv[ce].af && dQ.drawImage(gv[ce].canvas[gv[ce].xI], gv[ce].aF * aeL, gv[ce].aG * aeL);
				t1.imageSmoothingEnabled = !1, t1.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aUU() {
	this.dP = function() {
		if (0 !== f1.a6.a8s && (dQ.globalAlpha = Math.min(f1.a6.a8s / 580, 1), dQ.drawImage(f1.a6.aBt, 1 + aY.ck(), 1 + aY.cl()), dQ.globalAlpha = 1, aI.g1)) {
			for (var na = cT / cS, nc = cU / cS, ev = (aA.b1 + cT) / cS, ew = (aA.b2 + cU) / cS, xF = f1.a6.aBs * cS, aBu = f1.a6.aBu, ce = aI.gN - 1; 0 <= ce; ce--) ! function(ce, xF, na, nc, ev, ew, aBu) {
				var highlight;
				0 === bX.g3[ce] || 0 === bX.gD[ce] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[ce]) && (xF *= 2), ev = aA.b1 * ((bX.sj[ce] + bX.sl[ce] + 1) / 2 - na) / (ev - na) - .5 * xF, na = aA.b2 * ((bX
					.sk[ce] + bX.sm[ce] + 1) / 2 - nc) / (ew - nc) - .5 * xF, ev > aA.b1) || na > aA.b2 || ev < -xF || na < -xF || (highlight ? dQ.setTransform(2 * cS, 0, 0, 2 * cS, ev, na) : dQ.setTransform(cS, 0, 0, cS, ev, na), dQ
					.drawImage(aBu[aI.dm ? g8.g9[ce] : 1], 0, 0))
			}(ce, xF, na, nc, ev, ew, aBu);
			dQ.setTransform(cS, 0, 0, cS, 0, 0)
		}
	}
}

function aH3(qe, qf, aeP, aeQ) {
	var self;
	this.qj = document.createElement("span"), (self = this).qj.textContent = qe, self.qj.style.color = dK.dM, self.qj.style.position = "absolute", self.qj.style.font = "inherit", aeQ ? self.qj.style.bottom = "0.06em" : self.qj.style.top = "0.12em",
		aeP ? self.qj.style.left = "0.2em" : self.qj.style.right = "0.2em", self.qj.style.fontSize = "0.6em", self.qj.style.pointerEvents = "none", self.qj.style.whiteSpace = "pre", qf.style.position = "relative", qf.style.overflow = "hidden", qf
		.appendChild(self.qj)
}

function zP() {
	this.qD = 0, this.j1 = function() {
		ek.j1(), bK.j1(), aA.j1(), a5.a6.j1(), jg.aOq(), hq.dU.j1(), aC.ah && (aC.ah = !1, aK.dP())
	}
}

function fR(a20, fd) {
	var r6 = document.createElement("div");

	function sZ() {
		var ce, aDw, b2, xF, gy, aeS = aA.aB * r6.offsetWidth,
			aeU = new Float64Array(function(aeS) {
				var b1 = .25 * bT.ed.yi(.6) * aA.cd;
				return Math.max(Math.floor(aeS / b1), 1)
			}(aeS)),
			yh = dO.yh,
			aeV = (aeS - (aeU.length + 1) * dO.gap) / (aeU.length * aA.aB);
		for (aeU.fill(yh), ce = 0; ce < fd.length; ce++) aDw = (gy = fd[ce].r6).style, b2 = bT.fY.min(aeU), xF = aeU.indexOf(b2), aDw.top = bT.ed.a23(b2), aDw.left = bT.ed.a23(yh + xF * (aeV + yh)), aDw.width = bT.ed.a23(aeV), bT.ed.eh(gy, 5), aeU[
			xF] += gy.offsetHeight + 3 * yh;
		r6.style.height = bT.ed.a23(bT.fY.max(aeU) - 2 * yh)
	}
	this.aEg = r6, this.aN0 = fd, this.resize = function() {
		var ce;
		for (ce = 0; ce < fd.length; ce++) fd[ce].resize();
		sZ(), sZ()
	}, r6.style.width = "100%", r6.style.maxWidth = "100%", a20.style.lineHeight = "1.5em", a20.style.overflowX = "hidden", a20.style.overflowY = "auto";
	for (var ce = 0; ce < fd.length; ce++) r6.appendChild(fd[ce].r6);
	a20.appendChild(r6)
}

function aab() {
	var aeW;
	this.k = function() {
		aeW = !1
	}, this.j1 = function() {
		var fF;
		if (function() {
				if (!aeW) {
					if (aC.j7() % 30 != 9) return;
					if (!bT.bU.hD(90)) return;
					aeW = !0
				}
				return 1
			}() && (! function() {
				var bx = aa.oX(956);
				if (bx) {
					if (bT.bU.gO(bx.player)) return 1;
					aa.lA(956, 0)
				}
				return
			}() && (-1 === (fF = (aI.dm ? function() {
				var id = f5.gI(),
					en = gC.gB;
				if (g8.o5[id])
					for (var n8 = gC.gJ, g9 = g8.g9, ce = 0; ce < en; ce++) {
						var fF = n8[ce];
						if (g9[fF] !== id) return fF
					} else if (1 < en) return gE[en - 1];
				return -1
			} : function() {
				for (var adf = gC.gB, xE = gC.gJ, aee = pI, ce = 0; ce < adf; ce++) {
					var fF = xE[ce];
					if (0 !== aee[fF]) return fF
				}
				return -1
			})()) ? ! function() {
				var bx = aa.oX(957);
				if (bx && bx.nN) {
					if (i4.l8(bx.nN.kz << 2)) return 1;
					aa.lA(957, 0)
				}
				return
			}() : (aa.bW(0, L(548, [bX.bY[fF]]), 956, fF, dK.dM, dK.fB, -1, !0), 0)))) {
			var en = iA.a8n.a8o;
			if (0 !== en)
				for (var buffer = iA.a8n.buffer, ce = 0; ce < en; ce++) {
					var kz = buffer[ce];
					if (i4.l8(kz << 2)) return void aa.bW(0, L(549, [i9.nb(kz), i9.nd(kz)]), 957, 0, dK.dM, dK.fB, -1, !0, void 0, {
						jR: 1,
						kz: kz
					})
				}
		}
	}
}

function vS() {
	var g0 = 0;
	this.k = function() {
		ui.k(), g0 = 0
	}, this.setState = function(aef) {
		g0 = aef
	}, this.at = function() {
		return g0
	}, this.rf = function() {
		this.setState(8), aH.jC()
	}, this.b6 = function(a2) {
		if (!dC.kD) return !1;
		if (!(aC.aD < 400)) {
			if ("Enter" === a2.key || "Escape" === a2.key) {
				if (this.aeg()) return !0;
				if ("Enter" === a2.key) {
					if (0 === g0) return !0;
					if (7 === g0) return !0
				}
			}
			return !1
		}
	}, this.aVJ = function() {
		ut.resize()
	}, this.aeg = function() {
		return !!ut.c1()
	}, this.m = function(aF, aG) {
		!dC.kD || ut.m(aF, aG) || 6 === g0 && bK.m(aF, aG) || el.m(aF, aG) || ak.m(aF, aG)
	}, this.n = function(aF, aG) {
		!ak.aJ1 && ui.n(aF, aG, !0) || ak.n(aF, aG)
	}, this.click = function(aF, aG) {
		ak.al()
	}, this.q = function(aF, aG, deltaY) {}, this.aVK = function() {
		ui.aJ7(), aC.ah = !0
	}, this.dP = function() {
		8 !== g0 && 10 !== g0 && (dQ.imageSmoothingEnabled = !0, this.ez(), 0 !== g0 && (ak.dP(), ek.dP(), this.ei(), el.dP()), 0 !== g0 && 6 === g0 && bK.dP(), ut.dP(), aH.dP())
	}, this.ez = function() {
		var aei, aeh;
		if (__fx.makeMainMenuTransparent) dQ.clearRect(0, 0, aA.b1, aA.b2);
		else dC.kD ? (aeh = aA.b1 / dC.dD, aei = aA.b2 / dC.dE, dQ.setTransform(aeh = aei < aeh ? aeh : aei, 0, 0, aeh, Math.floor((aA.b1 - aeh * dC.dD) / 2), Math.floor((aA.b2 - aeh * dC.dE) / 2)), dQ.drawImage(dC.f0, 0, 0), dQ.setTransform(1,
			0, 0, 1, 0, 0), dQ.fillStyle = dK.a5h) : dQ.fillStyle = dK.oK, dQ.fillRect(0, 0, aA.b1, aA.b2)
	}, this.ei = function() {
		var aG = Math.floor(.3 * aA.b2),
			canvas = eJ.ep("territorial.io"),
			tW = (tW = 1.75 * aA.b2 / canvas.width) * canvas.width < .98 * aA.b1 ? .98 * aA.b1 / canvas.width : tW,
			aF = (dQ.globalAlpha = .15, dQ.imageSmoothingEnabled = !1, Math.floor(.5 * (aA.b1 - tW * canvas.width))),
			aF = Math.floor(aF / tW),
			aG = Math.floor(aG - .5 * canvas.height * tW),
			aG = Math.floor(aG / tW);
		dQ.setTransform(tW, 0, 0, tW, aF, aG), dQ.drawImage(canvas, aF, aG), dQ.setTransform(1, 0, 0, 1, 0, 0), dQ.globalAlpha = 1, dQ.imageSmoothingEnabled = !0
	}
}
self.aiCommand746 = function(gU) {
	0 === gU ? v0() : 1 !== gU || !ca || 1 !== ca.id || ca.eX < 14 || aU.bA()
}, aby(), setTimeout(v0, 1e4), window.onload = function() {
	v0()
};