var f6, f7, f8, f9, f1, d2, aN, cf, a0u, kq, aAM, aAb, a7F, eD, eb, cD, aQ, uM, zn, t0, iZ, no, gM, h6, d9, d8, zl, zN, av, qY, bE, cc, gW, qg, cV, aAc, aAd, eI, aAe, g7, uX, vy, k6, a9o, kg, aAf, a39, aAg, a11, eL, a12, gG, dJ, dL, an, ue, a9r, aAh,
	a0v, vv, or, aX, ee, a0z, g, dR, zm, lA, lN, lO, nu, cK, iw, cA, eo, gA, b9, b5, bK, a0x, aAi, dB, bR, aAj, t, aAk, ej, zj, c6, eF, aAl, sL, sJ, j, aP, aO, e8, aL, go, eH, cz, aV, iL, a7O, aAm, aAn, fj, aR, xD, a31, uU, mP, zf, h9, qn, qm, qo,
	aEm, gq, r1, ma, mZ, mb, ms, mq, mM, md, aKX, mx, aKY, aKZ, aKa, mX, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em",
		" / ", "territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em",
		"' target='_blank'>", "undefined", "pre", "</a>", "scroll", "qix3", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "top", "text", "string", "rgba(0,0,0,0.8)",
		"number", "nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload",
		"wheel", "underline", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo",
		"loading", "keydown", "italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale",
		"Back", "Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a(b, c) {
	var d = document.createElement("div");
	this.e = d, this.resize = function() {
		d.style.padding = g.h.i(j.k), d.style.lineHeight = g.h.i(g.h.l(.035))
	}, b.style.overflowX = "hidden", b.style.overflowY = "auto", d.innerHTML = c, b.appendChild(d)
}

function m() {
	var n, o, p, s;

	function r(y) {
		t.z(8, t.a0, new a1(21, {
			a2: y,
			a3: 0,
			a4: 10
		}))
	}
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), o.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, p = [new q(L(0), function() {
		r(5)
	}, 0, 0, 1), new q(L(1), function() {
		r(6)
	}, 0, 0, 1), new q(L(2), function() {
		r(7)
	}, 0, 0, 1), new q(L(3), function() {
		r(12)
	}, 0, 0, 1)], s = [new q("⬅️ " + L(4), function() {
		t.u()
	})], n = new v(L(5), s), o = new w(p, n.x)
}

function aA() {
	this.data = new aB;
	var aC = (new aD).L84,
		aF = (this.aE = aC, !1);
	this.f = function() {
		var aY, aZ;
		aF = !1, "en" !== aV.aW.data[12].value.split("-")[0].toLowerCase() ? aV.aW.data[12].value === aV.aW.data[145].value && 0 < aV.aW.data[146].value && (aY = aV.aW.data[146].value, (aZ = aV.a9.aa(aY, !1)).length === aY) && !!g.ab.ac(aZ) &&
			function(aZ) {
				for (var aY = aZ.length, ae = 0; ae < aY; ae++) aZ[ae] = aZ[ae].replace("&#39;", "'");
				var af = aV.a9.aa(aY, !0);
				if (aY !== af.length) return !1;
				if (!g.ab.ac(af)) return !1;
				for (var ag = aC.length, ah = new Array(ag), ai = ag === aY, aj = Math.min(aY, ag), y = 0; y < ag; y++)
					if (ah[y] = aC[y], y < aY && af[y] === ah[y]) ah[y] = aZ[y];
					else {
						ai = !1;
						for (var ak = 0; ak < aj; ak++)
							if (af[ak] === ah[y]) {
								ah[y] = aZ[ak];
								break
							}
					} return aX.aE = ah, ai
			}(aZ) || (aF = !0) : aX.aE = aC
	}, this.aK = function() {
		aL.aM(), aN.aM(), aO.aM(), aP.aM(), aQ.f(), aR = new aS
	}, this.aT = function() {
		return this.aE === aC || !aC.length
	}, this.al = function() {
		var am;
		aF && (aF = !1, 0 !== aC.length) && (am = aV.aW.data[12].value, an.ao.ap(0, am.slice(0, 20)))
	}, this.aq = function(aZ) {
		aZ.length === aC.length && (this.aE = aZ, aV.ar.at(145, aV.aW.data[12].value), aV.ar.at(146, aZ.length), aV.a9.au(aZ, !1), aV.a9.au(aC, !0), 0 === av.aw()) && 5 === t.a0 && t.ax.ay()
	}, this.az = function() {
		var b0, aZ = navigator.languages;
		return aZ && aZ.length ? (b0 = Math.max(aX.data.b1(aZ[0]), 0), 1 === aZ.length ? [b0, b0] : [b0, Math.max(aX.data.b1(aZ[1]), 0)]) : [0, 0]
	}
}

function b2() {
	function bc(bn, aY, bo, bB, bT, bp, player) {
		if (!(bo < 1 || bT < bo))
			for (var y = 0; y <= aY; y++) {
				var bq = b9.br(bn, bo);
				if (b5.bH.bs(bq) && !g.ab.has(bB, bE.bF(bq)) && bE.bt(bq, player)) return bq >> 2;
				bn += bp
			}
		return -1
	}

	function bh(bo, aY, bn, bB, bQ, bp, player) {
		if (!(bn < 1 || bQ < bn)) {
			aY = Math.max(aY, 0);
			for (var y = 0; y <= aY; y++) {
				var bq = b9.br(bn, bo);
				if (b5.bH.bs(bq) && !g.ab.has(bB, bE.bF(bq)) && bE.bt(bq, player)) return bq >> 2;
				bo += bp
			}
		}
		return -1
	}

	function bl(bb, bd, b4) {
		return -1 !== bd && (-1 === bb || b9.bm(bd, b4) < b9.bm(bb, b4)) ? bd : bb
	}
	this.b3 = function(player, b4) {
		if (b5.b6.b7(player))
			for (var b8 = b9.bA(), bB = [];;) {
				var bC = function(b4, b8, bB, player) {
					for (var bM = b9.bN(b4), bO = b9.bP(b4), bQ = bR.bS - 2, bT = bR.bU - 2, bV = -1, bW = 0; bW < b8; bW++) {
						var bX = Math.max(bM - bW, 1),
							bY = Math.max(bO - bW, 1),
							bZ = Math.min(bM + bW, bQ),
							ba = Math.min(bO + bW, bT),
							bb = bc(bM, bZ - bM, bO - bW, bB, bT, 1, player),
							bd = bc(bM - 1, bM - bX - 1, bO - bW, bB, bT, -1, player),
							bZ = bc(bM, bZ - bM, bO + bW, bB, bT, 1, player),
							bX = bc(bM - 1, bM - bX - 1, bO + bW, bB, bT, -1, player),
							bg = bh(bO, ba - bO - 1, bM - bW, bB, bQ, 1, player),
							bi = bh(bO - 1, bO - bY - 2, bM - bW, bB, bQ, -1, player),
							ba = bh(bO, ba - bO - 1, bM + bW, bB, bQ, 1, player),
							bY = bh(bO - 1, bO - bY - 2, bM + bW, bB, bQ, -1, player);
						if (bV = bl(bV, bb, b4), bV = bl(bV, bd, b4), bV = bl(bV, bZ, b4), bV = bl(bV, bX, b4), bV = bl(bV, bg, b4), bV = bl(bV, bi, b4), bV = bl(bV, ba, b4), 0 <= (bV = bl(bV, bY, b4)) && bW * bW >= b9.bm(bV, b4)) return bV
					}
					return -1
				}(b4, b8, bB, player);
				if (-1 === bC) break;
				var id = bE.bF(b9.bG(bC));
				if (b5.bH.bI(player, id)) return !! function(player, bC, b4) {
					for (var bu = b9.bv(bC, b4), y = 0; y < 4; y++) {
						var bw = b9.bx(bC, bu);
						if (bE.by(b9.bG(bw), player)) return bK.bL[6] = bu, 1;
						bu = (bu + 1) % 4
					}
					return
				}(player, bC, b4) && (bK.bL[7] = bC, !0);
				bB.push(id)
			}
		return !1
	}
}

function bz() {
	var c0, c1 = new Uint8Array(5),
		c2 = new Uint8Array(5);
	this.c3 = new c4, this.f = function() {
		for (var aU = aV.aW.data[119].value, y = 0; y < c1.length; y++) c1[y] = (aU >> 2 * y) % 4
	}, this.c5 = function() {
		c0 = [L(6), "", L(7, [c6.c7[28]]), L(8, [c6.c7[26]]), L(9, [c6.c7[0]])], this.c3.f()
	}, this.c8 = function() {
		this.c3.c8()
	}, this.c9 = function(id) {
		1 < id && cA.cB() || ! function(cF) {
			if (3 === c1[cF] || 1 === c2[cF]) return;
			if (c2[cF] = 1, !(Math.random() < .6)) {
				c1[cF]++;
				for (var aU = 0, y = 0; y < c1.length; y++) aU += c1[y] << 2 * y;
				aV.ar.at(119, aU)
			}
			return 1
		}(id) || cD.cE(c0[id])
	}
}

function cG() {
	this.cH = function(cI) {
		for (var cJ = cK, size = cJ.cL(cI), cM = 7 + 9 * cJ.cL(1), aZ = [], y = 0; y < size; y++) aZ.push(String.fromCharCode(cJ.cL(cM)));
		return aZ.join("")
	}
}

function cN(title, c, cO, cP) {
	var n, cQ;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), cQ.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, cP = cP || [new q("⬅️ " + L(4), function() {
		t.u()
	})], n = new v(title, cP), cQ = new a(n.x, c), cO && g.h.textAlign(n.x.style, 1)
}

function cR() {
	function ch(player) {
		var cU;
		g.cn.co(player) && (cU = cV.cp[player] - cV.cq[player] + cc.cr(player), aP.cs(player, Math.abs(cU), cU < 0 ? 18 : 12)), cV.cp[player] = 0, cV.cq[player] = 0
	}

	function d6() {
		d8.show(!1, !1, !1, !0), d9.dA(), dB.dC.dD()
	}

	function cb(player, d4) {
		for (var y = d4.length - 1; 0 <= y; y--) cc.dE(d4[y], player)
	}

	function ce(player) {
		for (var dY = cV.dY, dZ = cV.dZ, da = cV.da, db = cV.db, dc = dY[player], dd = da[player], bS = bR.bS, cW = cV.cW, bn = dZ[player]; dc <= bn; bn--)
			for (var bo = db[player]; dd <= bo; bo--) {
				var cT = 4 * (bo * bS + bn);
				bE.de(player, cT) && (bE.df(cT), cW[player]--)
			}
		dZ[player] = db[player] = 0, dY[player] = da[player] = Math.max(bS, bR.bU)
	}
	this.cS = function(cT) {
		var player, cU = cV.cW[cT];
		b5.ax.cX[cT] ? cU && (cb(player = cT, cc.cd(player)), ce(player), cf.cg(player), cc.clear(player), ch(player), function(player) {
			cV.cj[player] = 0, cV.ca[player] = [], cV.ck[player] = [], cV.cl[player] = [], cV.cm[player] = []
		}(player)) : !cU && cV.ca[cT].length || this.cZ(cT)
	}, this.cZ = function(player) {
		! function(player) {
			g.cn.cx(player) || (cV.cy[player] = cz.d0.d1(), d2.d3++);
			var d4 = cc.cd(player);
			0 === d4.length ? g.cn.d5(player) && d6() : (cb(player, d4), function(player, d4) {
				var dG = d4[function(d4) {
					var y, cF = 0;
					for (y = d4.length - 1; 1 <= y; y--) cV.cW[d4[y]] > cV.cW[d4[cF]] && (cF = y);
					return cF
				}(d4)];
				9 === d2.dH && (1 === aL.dI[player] ? dJ.dK(8) && dL.dM(dG) : aN.dN[player] && (cD.dO(765, 0), cD.dP(280, L(10, [cV.dQ[dG], cV.dQ[player]]), 765, dG, dR.dS, dR.dT, -1, !0)));
				if (g.cn.d5(player)) d6(), cD.dU(dG, 1);
				else {
					for (var y = d4.length - 1; 0 <= y; y--)
						if (g.cn.co(d4[y]) && (aP.dV[4 - g.cn.cx(player)]++, g.cn.d5(d4[y]))) return cD.dU(player, 0);
					g.cn.cx(player) || cD.dW(0, player, dG)
				}
			}(player, d4))
		}(player), ce(player), ch(player),
			function(player) {
				cV.dX[player] = 0, cV.ca[player] = null, cV.ck[player] = null, cV.cl[player] = null, cV.cm[player] = null
			}(player), cf.cg(player), cc.clear(player), b5.cv.cw(player)
	}
}

function dg() {
	var dh, canvas, di, dj;

	function ds(cF, name, dt, du) {
		di[cF] = name, canvas[cF] = new Image, canvas[cF].onload = function() {
			! function(cF, dt) {
				var dz, dy = null;
				7 === dt ? dz = g.e0.e1 : 8 === dt ? (dz = g.e0.e2, dy = .1) : 3 === dt ? (dz = g.e0.e3, dy = .06) : 5 === dt ? dz = g.e0.e4 : 6 === dt ? dz = g.e0.e5 : 4 === dt && (dz = g.e0.e6);
				canvas[cF] = g.e0.e7(canvas[cF], dz, dy)
			}(cF, dt), dw()
		}, canvas[cF].onerror = function(dx) {
			console.error("Error loading image at index", cF, "Error:", dx), dw()
		}, canvas[cF].src = "data:image/png;base64," + du
	}

	function dw() {
		dh--, dp()
	}

	function dp() {
		0 === dh && (dh = -1, dr(), e8.e9 = !0, canvas[7] = dj, canvas[8] = dj, canvas[9] = dj, canvas[10] = dj, 5 === t.a0) && t.eB().eC.resize()
	}

	function dr() {
		eD.eE(), eF.eG([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== eH.id, 1 !== eH.id, !0, !0, !0]), eI.eJ = new eK, eI.eJ.f(), eL.aM()
	}
	this.f = function() {
		if (void 0 === canvas) {
			dh = 23, canvas = new Array(dh), di = new Array(dh), (dj = document.createElement("canvas")).width = 1;
			for (var y = dh - (dj.height = 1); 0 <= y; y--) canvas[y] = dj;
			dr(), ds(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), ds(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), ds(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(3, "orders", 6,
					"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"
					), ds(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), ds(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), ds(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), ds(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(8,
					"googleplay", 3,
					"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"
					), ds(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), ds(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), ds(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), ds(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), ds(16, "apple", 3,
					"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"
					), ds(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), ds(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), ds(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), ds(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), ds(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), ds(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(cF) {
		return canvas[cF]
	}, this.dl = function(name) {
		for (var y = di.length - 1; 0 <= y; y--)
			if (di[y] === name) return canvas[y];
		return dj
	}, this.dm = function() {
		return dh <= 0
	}, this.dn = function() {
		dh = 0, dp()
	}
}

function eM() {
	var n, o, p, s;

	function eN(id) {
		0 !== eH.id || aV.aW.data[140].value ? 0 === id ? t.z(8, 1, new a1(16)) : t.z(2) : t.ax.el(t.a0, 0 === id ? 16 : 0)
	}
	this.show = function() {
		eH.eV.setState(12), n.show(), this.resize(), this.c8()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), o.resize()
	}, this.c8 = function() {
		8 === av.aw() && (2 <= aP.eX ? p[2].f3 === dR.f4 && p[2].f5(0) : p[2].f3 !== dR.f4 && p[2].f5(dR.f4), !d2.ea && eb.ec(d2.ed) ? p[1].f3 === dR.f4 && p[1].f5(0) : p[1].f3 !== dR.f4 && p[1].f5(dR.f4), !d2.ea && eL.ei(d2.ed) ? p[0].f3 === dR
			.f4 && p[0].f5(0) : p[0].f3 !== dR.f4 && p[0].f5(dR.f4))
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, p = [new q(L(11), function() {
		eN(0)
	}), new q(L(12), function() {
		t.z(16)
	}), new q(L(5), function() {
		t.z(17)
	}), new q(L(13), function() {
		t.ax.eO()
	}, 0, 0, 1), new q(L(14), function() {
		t.z(3, 1)
	}), new q(L(15), function() {
		t.z(18)
	}), new q(L(16), function() {
		eN(1)
	}), new q(L(17), function() {
		var em = ["Patreon", L(27), L(28), "YouTube Tutorial", "Discord", L(29), L(30), L(31), L(32), L(33), "Terms", "Privacy"],
			en = [eo.ep, eo.eq, eo.er, "https://www.youtube.com/watch?v=6QBmA9N1668", eo.es, eo.et, eo.eu, eo.ev, eo.ew, eo.ex, eo.ey, eo.ez];
		1 === eH.id ? (em.splice(2, 1), em.splice(0, 1), en.splice(2, 1), en.splice(0, 1)) : 2 === eH.id && (em.splice(1, 1), em.splice(0, 1), en.splice(1, 1), en.splice(0, 1)), t.z(4, 1, new cN(L(17), g.h.f0(em, en), !1, [new q("⬅️ " +
			L(4),
			function() {
				t.z(1)
			})]))
	}), new q(L(18), function() {
		t.z(4, 1, new cN(L(18), f1.eU + "<br><a href='" + eo.et + "' target='_blank'>" + eo.et + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(4), function() {
				t.z(1)
			})]))
	}), new q(L(19), function() {
		t.z(4, 1, new cN(L(19), L(34) + "<br>" + L(35), !1, [new q("⬅️ " + L(4), function() {
			t.z(1)
		}), new q(L(36), function() {
			eH.eV.f2(), t.z(1)
		})]))
	}), new q(L(20), function() {
		eH.eV.eS(), t.z(4, 1, new cN(L(37), L(38) + " <a href='" + eo.ez + "' target='_blank'>" + eo.ez + "</a>", !1, [new q("⬅️ " + L(4), function() {
			t.z(1)
		})]))
	})], s = [new q("⬅️ " + L(4), function() {
		t.ax.ay()
	})], 8 === av.aw() && (p.unshift(new q(L(23), function() {
		t.z(30)
	})), p.unshift(new q(L(24), function() {
		2 <= aP.eX && (t.eY(), aO.eZ(), e8.e9 = !0)
	}, 0, 1)), p.unshift(new q(L(25), function() {
		!d2.ea && eb.ec(d2.ed) && (ee.ef.eg(), t.eY(), eb.eh) && eb.eZ()
	}, 0, 1)), p.unshift(new q(L(26), function() {
		!d2.ea && eL.ei(d2.ed) && (ej.c9(2), ee.ef.ek(), t.eY(), eb.eh) && eb.eZ()
	}, 0, 1))), 1 === eH.id && 5 <= eH.eU && p.push(new q(L(21), function() {
		eH.eV.eW()
	})), n = new v(L(22), s), o = new w(p, n.x)
}

function fA() {
	(f6 = void 0 === f6 ? document.createElement("canvas") : f6).width = bR.bS, f6.height = bR.bU, f8 = f6.getContext("2d", {
		alpha: !0
	}), f9 = f7 = null, f9 = f8.getImageData(0, 0, bR.bS, bR.bU), f7 = f9.data, g.ab.fB(f7)
}

function fC() {
	this.c8 = function(player) {
		var fD = function(player) {
			for (var fG = b5.fG.fI(), aY = fG.length, ag = Math.min(aY, 32), fJ = dJ.fK(aY), y = 0; y < ag; y++) {
				var fD = (y + fJ) % aY,
					fF = fG[fD],
					bb = fF[0],
					bd = fF[fF.length - 1];
				if (b5.bH.fL(player, bb) && b5.bH.fM(player, bd)) return fD;
				if (b5.bH.fL(player, bd) && b5.bH.fM(player, bb)) return 0 <= (fD = b5.fG.fN(bd, bb)) ? fD : b5.fG.fO() ? -1 : b5.fG.fP(b5.fG.fQ(fF))
			}
			return -1
		}(player);
		return -1 !== fD && (fD = b5.fG.get(fD), !b5.bH.fH(player, fD)) && (bK.aZ[0] = fD, !0)
	}
}

function fR() {
	this.fS = function() {
		return eH.eV.fT() ? 2 : 1
	}
}

function fU(fV) {
	var fW = document.createElement("div"),
		fX = document.createElement("div"),
		fY = [];

	function fd() {
		cA.cB() || (this.style.backgroundColor = g.color.fh(dR.fb, 50))
	}

	function fe() {
		this.style.backgroundColor = dR.fb
	}
	this.at = function(ff, fg) {
			fY[2].textContent = ff + 1 + " / " + fg
		}, this.show = function(fi) {
			fX.appendChild(fj.fk.transform(fj.bH.fl(fi, fj.bH.fm(fi)))), document.body.appendChild(fW)
		}, this.resize = function() {
			var ae = g.h.l(.03, .5);
			fW.style.width = 10 * ae + "px", fW.style.font = g.h.fn(1, .75 * ae), g.h.fo(fW, 4), fX.style.top = ae + "px", fX.style.font = g.h.fn(0, .55 * ae), g.h.fo(fX, 2), fW.style.height = ae + fX.offsetHeight + "px";
			for (var y = 0; y < 3; y++) g.h.fo(fY[y], 6), fY[[0, 1, 3][y]].style.width = 2 * ae + "px";
			for (y = 0; y < 4; y++) fY[y].style.height = ae + "px", g.h.fo(fY[y], 2);
			fY[2].style.width = 4 * ae + "px", fY[1].style.left = 2 * ae + "px", fY[2].style.left = 4 * ae + "px", fY[3].style.left = 8 * ae + "px"
		}, this.fp = function() {
			for (var y = 0; y < 4; y++) fY[y].onclick = null, fY[y].onmouseover = null, fY[y].onmouseout = null;
			document.body.removeChild(fW), fW = fX = fY = null
		}, fW.style.position = "absolute", fW.style.color = dR.fa, fW.style.zIndex = "3", fW.style.right = "0", fW.style.top = "0", fX.style.position = "absolute", fX.style.height = "auto", fX.style.color = dR.fa, fX.style.backgroundColor = dR.fb, fX
		.style.left = "0", fX.style.width = "100%", fX.style.overflowWrap = "break-word", fW.appendChild(fX);
	for (var y = 0; y < 4; y++) fY[y] = document.createElement("div"), fY[y].style.position = "absolute", fY[y].style.backgroundColor = dR.fb, fY[y].style.color = dR.fa, fY[y].style.top = "0", fY[y].style.display = "flex", fY[y].style
		.justifyContent = "center", fY[y].style.alignItems = "center", fY[y].style.userSelect = "none", fY[y].style.outline = "none", fY[y].style.font = "inherit", 2 !== (fY[y].fc = y) && (fY[y].onclick = fV, fY[y].onmouseover = fd, fY[y]
			.onmouseout = fe), fW.appendChild(fY[y]);
	fY[0].textContent = "◀", fY[1].textContent = "▶", fY[3].textContent = "✖"
}

function fq() {
	var n, o, p, s;

	function r(y) {
		t.z(8, t.a0, new a1(21, {
			a2: y,
			a3: 0,
			a4: 10
		}))
	}
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), o.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, p = [new q(L(30), function() {
		r(1)
	}, 0, 0, 1), new q(L(39), function() {
		r(2)
	}, 0, 0, 1), new q(L(40), function() {
		r(3)
	}, 0, 0, 1), new q(L(32), function() {
		r(0)
	}, 0, 0, 1), new q(L(41), function() {
		r(9)
	}, 0, 0, 1), new q(L(42), function() {
		r(10)
	}, 0, 0, 1), new q(L(43), function() {
		r(11)
	}, 0, 0, 1)], s = [new q("⬅️ " + L(4), function() {
		t.u()
	})], n = new v(L(12), s), o = new w(p, n.x)
}

function fr() {
	var canvas, fs, bn, bo, ft, fu, gap, fv, fontSize, fw, fx, fy, fz, g0, g1, g2, g3, g4;

	function gN() {
		fs.clearRect(0, 0, d9.gF, d9.ae), fs.fillStyle = dR.gT, fs.fillRect(0, 0, d9.gF, d9.ae), fs.fillStyle = dR.gU, bq = 0 < g2 ? g2 : Math.sqrt(fz[4] / 1e4), fs.fillRect(0, d9.ae - ft - 1, Math.floor(bq * d9.gF), ft), fs.fillStyle = dR.fa, fs
			.fillRect(0, 0, d9.gF, 1), fs.fillRect(0, 0, 1, d9.ae), fs.fillRect(d9.gF - 1, 0, 1, d9.ae), fs.fillRect(0, d9.ae - 1, d9.gF, 1), fs.fillRect(0, d9.ae - ft - 1, d9.gF, 1);
		for (var bq, gV, cU = 0, y = 0; y < fy.length; y++) g0[y] ? (g.h.textAlign(fs, 0), gV = Math.floor((fu - ft + 2 * fv) * (y - cU + 1) / (fy.length + 1) - .7 * fv), fs.fillText(fy[y], gap, gV), g.h.textAlign(fs, 2), 5 === y && 0 !== cV.dX[d2
			.ed] && cV.cp[d2.ed] >= gW.gX(d2.ed) ? (fs.fillStyle = dR.gY, fs.fillText(gE(y), d9.gF - gap, gV), fs.fillStyle = dR.fa) : fs.fillText(gE(y), d9.gF - gap, gV)) : cU++
	}

	function gE(y) {
		return y < 3 ? fz[y].toString() : 3 === y || 4 === y || 5 === y ? g.gZ.ga(fz[y] / 100, 2) : y < 7 ? g.gZ.gb(fz[y]) : y === 7 ? d9.gc(fz[7]) : y === 8 ? __fx.utils.getMaxTroops(cV.cW, d2.ed) : __fx.utils.getDensity(d2.ed)
	}

	function gD() {
		cV.cW[d2.ed] !== fz[6] && (fz[6] = cV.cW[d2.ed], fw++)
	}
	this.f = function() {
		g2 = g3 = 0, (fx = new Array(8))[0] = L(44), fx[1] = d2.g5 ? L(45) : L(46), fx[2] = L(47), fx[3] = L(48), fx[4] = L(49), fx[5] = L(50, 0, "Interest"), fx[6] = L(51), fx[7] = L(52),
			fx.push("Max Troops", "Density"), // add fx
			(fy = new Array(fx.length)).fill(""), (fz = new Array(fx.length))[0] = d2.g5 ? 0 : d2.g6, fz[1] = d2.g5 ? g7.g8 : d2.g9, fz[2] = d2.d3, fz[3] = 0, fz[4] = gA.gB(1e4 * cV.cW[0], Math.max(d2.gC, 1)), fz[5] = 0 === d2.data.iIncomeType ?
			700 : 1 === d2.data.iIncomeType ? gA.gB(700 * d2.data.iIncomeValue, 64) : gA.gB(700 * d2.data.iIncomeData[d2.ed], 64), fz[6] = 0, gD(), fz[7] = 0, g1 = gE(6), g0 = new Array(fx.length);
		for (var y = fx.length - 1; 0 <= y; y--) g0[y] = !0;
		g4 = 0, g4 = d2.g5 ? (g0[0] = !1, g0[2] = !1, g0[3] = !1, 3) : (g0[3] = !1, 1), fw = 0, this.resize()
	}, this.resize = function() {
		this.gF = Math.floor((eH.eV.fT() ? .1646 : .126) * 1.25 * gG.gH), this.ae = Math.floor(1.18 * this.gF), ft = Math.floor(.04 * this.gF), gap = Math.floor(.035 * this.gF), fv = .04 * this.gF, fu = this.ae, this.ae -= Math.floor(g4 * (this
			.ae - 2 * ft) / fx.length), fontSize = Math.floor(.7 * (fu - ft) / fx.length);
		var gI = g.h.fn(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.gF, canvas.height = this.ae,
			function(gI, gF) {
				for (var y = 0; y < fy.length; y++) fy[y] = g.fs.gO(fx[y], gI, gF)
			}((fs = canvas.getContext("2d", {
				alpha: !0
			})).font = gI, .575 * this.gF), g.h.textBaseline(fs, 1), fs.lineWidth = 1, this.gK(), this.gL(), gM.gL(), gN()
	}, this.gL = function() {
		bn = gG.gF - this.gF - j.gap
	}, this.dA = function() {
		bo = j.gap
	}, this.gK = function() {
		bo = j.gap + (gM.gP() && 0 !== cV.dX[d2.ed] && !d2.gQ ? gM.ae + j.gap : 0)
	}, this.gR = function(gS) {
		(gS || 100 <= fw) && (fw = 0, gN())
	}, this.gd = function() {
		return fz[7]
	}, this.gc = function(value) {
		var ag = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ag) / 1e3);
		return value < 10 ? ag + ":0" + value : ag + ":" + value
	}, this.c8 = function() {
		var gz, per;
		g0[0] && d2.gl - d2.d3 !== fz[0] && (fz[0] = d2.gl - d2.d3, fw++), g7.g8 - fz[0] !== fz[1] && (fz[1] = g7.g8 - fz[0], fw++), this.gg(), (gz = gW.h0(d2.ed)) !== fz[5] && (fz[5] = gz, fw++), gD(), fz[7] += e8.h1, gz = gE(7), g1 !== gz && (
			g1 = gz, fw += 100), gz = d2.gn ? go.gp() : cV.cW[gq[0]], per = gA.gB(1e4 * gz, Math.max(d2.gC, 1)), fz[3] = gz, fz[4] !== per && (fw++, fz[4] = per), 8 === d2.dH && function() {
			for (var y = 0; y < 2; y++)
				if (!g.cn.gy(y)) return dB.gv.gw(), 1;
			return
		}() || fz[3] < d2.gC || ! function() {
			for (var y = g7.g8 - 1; 0 <= y; y--)
				if (0 < cV.ca[g7.gx[y]].length) return;
			return 1
		}() || b5.bH.gu().length || dB.gv.gw()
	}, this.gg = function() {
		g0[2] && d2.d3 !== fz[2] && (fz[2] = d2.d3, fw++)
	}, this.gr = function() {
		return fz[3] === d2.gC
	}, this.h2 = function(y) {
		var h3, h4, cU;
		return 2 !== d2.h5 && (y % 2 == 1 && (h6.gR(1, 1), e8.e9 = !0), y === d2.h7 ? (g2 = 0, gN(), !1) : (-1 !== y || 0 !== g3) && (h4 = g2, g2 = d2.ea ? y / d2.h7 : (cU = performance.now(), 0 <= y && (h3 = cU - 392 * y, g3 = 0 === y || h3 <
			g3 ? h3 : g3), 1 < (g2 = (cU - g3) / (392 * d2.h7)) ? 1 : g2), gN(), g2 !== h4))
	}, this.h8 = function() {
		h9.drawImage(canvas, bn, bo)
	}
}

function hA() {
	this.a9 = new hB, this.aW = new hC, this.ar = new hD, this.ax = new hE, this.f = function() {
		this.aW.f(), (new hF).f()
	}
}

function hG() {
	this.hH = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.hI = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", dR.fa, "rgb(170,170,170)"
	], this.hJ = [dR.fa, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", dR.fa, dR.dS], this.hK = [dR.dS, dR.fa, dR.fa, dR.fa, dR.dS, dR.dS, dR.dS, dR.dS, dR.fa];
	var hL = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.hM = ["rgba(" + hL[0] + ",", "rgba(" + hL[1] + ",", "rgba(" + hL[2] + ",", "rgba(" + hL[3] + ",", "rgba(" + hL[4] + ",", "rgba(" + hL[5] + ",", "rgba(" + hL[6] + ",", "rgba(" + hL[7] + ",", "rgba(" + hL[8] + ",", "rgba(" + hL[9] + ","], this
		.hN = ["rgb(" + hL[0] + ")", "rgb(" + hL[1] + ")", "rgb(" + hL[2] + ")", "rgb(" + hL[3] + ")", "rgb(" + hL[4] + ")", "rgb(" + hL[5] + ")", "rgb(" + hL[6] + ")", "rgb(" + hL[7] + ")", "rgb(" + hL[8] + ")", "rgb(" + hL[9] + ")"], this.di =
		null, this.hO = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.hP = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.hQ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.dI = new Uint8Array(d2.hR), this.hS = new Uint8Array(d2.hR), this.hT = new Uint16Array(d2.hR), this.hU = new Uint16Array(this.hQ.length + 1), this.hV = new Uint16Array(this.hQ.length), this.aM =
		function() {
			this.di = [L(53), L(54), L(55), L(56), L(57), L(58), L(59), L(60), L(61)]
		}, this.f = function() {
			if (this.dI.fill(0), this.hS.fill(0), this.hW(), d2.gn) {
				if (9 === d2.dH) {
					for (var dI = aL.dI, y = d2.data.teamPlayerCount[7] - 1; 0 <= y; y--) dI[y] = 1;
					var aY = d2.hR;
					for (y = d2.data.teamPlayerCount[7]; y < aY; y++) dI[y] = 2;
					aL.hQ[1] = 7, aL.hQ[2] = 8
				} else d2.g5 ? function() {
					var hP = aL.hP,
						colorsData = d2.data.colorsData;
					if (!d2.data.selectableColor)
						for (var y = d2.g6 - 1; 0 <= y; y--) colorsData[y] = dJ.fK(262144);
					var hk = 0,
						hl = 768,
						hm = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = d2.data.teamPlayerCount;
					for (y = 0; y < 9; y++)
						if (teamPlayerCount[y]) {
							for (var bW = 0, ak = 0; ak < 3; ak++) bW += Math.abs(hP[y][ak] - hm[ak]);
							bW < hl && (hk = y, hl = bW)
						} var hn = new Uint16Array(9);
					for (y = 0; y < 9; y++) hn[y] = teamPlayerCount[y];
					var hQ = aL.hQ,
						ho = new Uint8Array(9),
						aj = (hQ[0] = 0, 1);
					for (y = 1; y < 9; y++) hn[y] && (ho[y] = aj, hQ[aj++] = y);
					var hp = d2.g6,
						dI = aL.dI;
					hn[hk] ? (hn[hk]--, dI[0] = ho[hk]) : hp = 0;
					var a7 = 0;
					for (y = hp; y < d2.hq; y++) {
						var fJ = hQ[a7];
						if (hn[fJ]) hn[fJ]--, dI[y] = ho[fJ];
						else if (y--, 9 <= ++a7) return console.log("error 325")
					}
				}() : this.c8();
				! function() {
					for (var aY = d2.hR, hT = aL.hT, hU = aL.hU, hV = aL.hV, dI = aL.dI, hQ = aL.hQ, i7 = hQ.length, aW = new Array(i7), y = 0; y < i7; y++) aW[y] = [];
					for (y = 0; y < aY; y++) aW[hQ[dI[y]]].push(y);
					for (y = 1; y <= i7; y++) hU[y] = hU[y - 1] + aW[y - 1].length;
					for (y = 0; y < i7; y++)
						for (var aj = aW[y].length, ag = hU[y], fJ = 0; fJ < aj; fJ++) hT[fJ + ag] = aW[y][fJ];
					var g6 = d2.g6;
					for (y = 0; y < i7; y++)
						for (aj = aW[y].length, ag = hU[y], fJ = 0; fJ < aj; fJ++)
							if (hT[fJ + ag] >= g6) {
								hV[y] = fJ;
								break
							}
				}(), ! function() {
					for (var aY = d2.hR, dI = aL.dI, hS = aL.hS, hQ = aL.hQ, y = 0; y < aY; y++) hS[y] = hQ[dI[y]];
					9 === d2.dH && hS.fill(1, aY - dL.i8[5])
				}()
			}
		}, this.hW = function() {
			for (var y = this.hQ.length - 1; 0 <= y; y--) this.hQ[y] = y
		}, this.c8 = function() {
			var hb = new Uint8Array(d2.g6),
				hc = new Uint8Array(d2.g6),
				hd = new Uint16Array(8),
				he = new Uint16Array(this.hQ.length);
			this.hf(hb, hc, hd, 1), this.hg(hd), this.hh(he, hb, hc), this.hi(hb, hc, he), this.hj()
		}, this.hf = function(hb, hc, hn, hr) {
			for (var ak, dx, hs, aY = this.hQ.length - hr, aZ = new Uint16Array(aY), hP = this.hP, colorsData = d2.data.colorsData, y = d2.g6 - 1; 0 <= y; y--) {
				for (ak = aY; hr <= ak; ak--) aZ[ak - 1] = Math.abs(4 * (colorsData[y] >> 12) - hP[ak][0]) + Math.abs(4 * (colorsData[y] >> 6 & 63) - hP[ak][1]) + Math.abs(4 * (63 & colorsData[y]) - hP[ak][2]);
				for (hs = 768, ak = aY - 1; 0 <= ak; ak--) aZ[dx = (ak + y) % aY] < hs && (hs = aZ[dx], hb[y] = dx);
				for (hn[hb[y]] += 4, hs = 768, ak = aY - 1; 0 <= ak; ak--) aZ[dx = (ak + y) % aY] < hs && dx !== hb[y] && (hs = aZ[dx], hc[y] = dx);
				hn[hc[y]]++
			}
		}, this.hg = function(hn) {
			for (var ak, ht, aY = this.hQ.length - 1, y = aY; 0 <= y; y--) this.hQ[y] = y;
			for (y = aY - 1; 0 <= y; y--) hn[y]++;
			for (y = 1; y <= aY; y++) {
				for (ht = 0, ak = 1; ak < aY; ak++) hn[ak] > hn[ht] && (ht = ak);
				hn[ht] = 0, this.hQ[y] = ht + 1
			}
		}, this.hh = function(he, hb, hc) {
			var ak, hu, a7, bW, dx, hv, h3, hw = this.hQ.length - 1,
				hx = new Uint16Array(hw),
				hy = [],
				hz = 0,
				i0 = [],
				i1 = [];
			loop: for (var y = 0; y < d2.g6; y++)
				if (null !== (hu = g.gZ.i2(cV.i3[y]))) {
					for (ak = i0.length - 1; 0 <= ak; ak--)
						if (hu === i0[ak]) {
							i1[ak].push(y), hz = Math.max(hz, i1[ak].length);
							continue loop
						} i0.push(hu), hy.push(!1), i1.push([y]), hz = Math.max(hz, 1)
				}
			for (; 2 < d2.i4 && hz > gA.gB(d2.g6, d2.i4);) d2.i4--, d2.dH--;
			for (ak = i0.length - 1; 0 <= ak; ak--) {
				for (bW = -1, a7 = i0.length - 1; 0 <= a7; a7--) !hy[a7] && (-1 === bW || i1[a7].length > i1[bW].length) && (bW = a7);
				for (a7 = hw - 1; 0 <= a7; a7--) hx[a7] = 1;
				for (a7 = i1[bW].length - 1; 0 <= a7; a7--) hx[hb[i1[bW][a7]]] += 3, hx[hc[i1[bW][a7]]]++;
				for (y = hw - 1; 0 <= y; y--) {
					for (dx = bW % hw, a7 = hw - 1; 0 <= a7; a7--) hx[a7] > hx[dx] && (dx = a7);
					for (hv = -1, a7 = d2.i4; 0 < a7; a7--)
						if (this.hQ[a7] === dx + 1) {
							hv = a7;
							break
						} if (hx[dx] = 0, -1 !== hv) {
						for (h3 = 0, a7 = d2.i4; 0 < a7; a7--) he[hv] > he[a7] && h3++;
						if (h3 !== d2.i4 - 1) {
							for (a7 = i1[bW].length - 1; 0 <= a7; a7--) he[hv]++, this.dI[i1[bW][a7]] = hv;
							break
						}
					}
				}
				hy[bW] = !0
			}
		}, this.hi = function(hb, hc, he) {
			for (var y, i5, aY = this.hQ.length - 1, border = gA.gB(d2.g6, d2.i4), i6 = (0 < d2.g6 % d2.i4 && border++, new Uint8Array(1 + aY)), ak = aY; 1 <= ak; ak--) i6[this.hQ[ak]] = ak;
			for (y = 0; y < d2.g6; y++) i5 = i6[hb[y] + 1], 0 === this.dI[y] && i5 <= d2.i4 && he[i5] < border && (he[i5]++, this.dI[y] = i5);
			for (y = 0; y < d2.g6; y++) i5 = i6[hc[y] + 1], 0 === this.dI[y] && i5 <= d2.i4 && he[i5] < border && (he[i5]++, this.dI[y] = i5);
			for (ak = d2.i4; 1 <= ak; ak--)
				for (y = d2.g6 - 1; 0 <= y && !(he[ak] >= border); y--) 0 === this.dI[y] && (he[ak]++, this.dI[y] = ak)
		}, this.hj = function() {
			for (var y = d2.g6; y < d2.hR; y++) this.dI[y] = 1 + y % d2.i4
		}
}

function i9() {
	var canvas, fs, iA, font, iB = 0,
		iC = !1,
		iD = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		iE = 5;

	function ic() {
		if (iC) {
			var y, aY = iD.length,
				is = Math.floor(.5 * iA.ae),
				ae = aY * is,
				bn = Math.floor(Math.floor(iA.bn) + .3 * iA.gF - .5),
				bo = Math.floor(Math.floor(iA.bo) - ae),
				gF = Math.floor(.4 * iA.gF + 2.5);
			for (h9.fillStyle = dR.fb, h9.fillRect(bn, bo, gF, ae), h9.fillStyle = dR.io, h9.fillRect(bn, bo + iE * is, gF, is), h9.fillStyle = dR.fa, h9.fillRect(bn, bo, 2, ae), h9.fillRect(bn, bo, gF, 2), h9.fillRect(bn + gF - 2, bo, 2, ae), y =
				1; y < aY; y++) h9.fillRect(bn, bo + y * is, gF, 2);
			for (h9.fillStyle = dR.fa, g.h.textAlign(h9, 1), g.h.textBaseline(h9, 1), h9.font = g.h.fn(0, .6 * is), bn += .5 * gF, y = 0; y < aY; y++) h9.fillText(ip(y), bn, bo + (y + .6) * is)
		}
		h9.drawImage(canvas, Math.floor(iA.bn), Math.floor(iA.bo))
	}

	function iM(ig) {
		var bn, dc, dd, is;
		fs.clearRect(0, 0, Math.floor(iA.gF), Math.floor(iA.ae)), fs.fillStyle = dR.fb, fs.fillRect(0, 0, Math.floor(iA.gF), Math.floor(iA.ae)), d2.iQ && (fs.fillStyle = dR.io, fs.fillRect(0, 0, Math.floor(.3 * iA.gF), Math.floor(iA.ae))), fs
			.fillStyle = dR.fa, fs.fillText("Hide UI", .15 * iA.gF, .5 * iA.ae), fs.fillRect(Math.floor(.3 * iA.gF - .5), 0, 2, Math.floor(iA.ae)), bn = .5 * iA.gF, fs.fillText("Replay Speed", bn, .31 * iA.ae), fs.fillText(ip(iE), bn, .69 * iA.ae),
			fs.fillRect(Math.floor(.7 * iA.gF - .5), 0, 2, Math.floor(iA.ae)), ig.iF ? (bn = Math.floor(.02 * iA.gF), ig = Math.floor(.025 * iA.gF), dc = Math.floor(.85 * iA.gF - bn - .5 * ig), dd = Math.floor(.25 * iA.ae), is = Math.floor(iA.ae) -
				2 * dd, fs.fillRect(dc, dd, bn, is), fs.fillRect(dc + bn + ig, dd, bn, is)) : function() {
				var gF = Math.floor(.46 * iA.ae),
					ae = Math.floor(.23 * iA.ae),
					bn = Math.floor(.85 * iA.gF - .5 * gF + gF / 12),
					bo = Math.floor(.5 * iA.ae - ae);
				fs.beginPath(), fs.moveTo(bn, bo), fs.lineTo(bn + gF, bo + ae), fs.lineTo(bn, bo + (ae << 1)), fs.fill()
			}(), fs.fillRect(0, 0, Math.floor(iA.gF), 2), fs.fillRect(0, 0, 2, Math.floor(iA.ae)), fs.fillRect(0, Math.floor(iA.ae) - 2, Math.floor(iA.gF), 2), fs.fillRect(Math.floor(iA.gF - 2), 0, 2, Math.floor(iA.ae))
	}

	function ip(y) {
		return 5 === y ? "Normal" : "" + iD[y]
	}
	this.iF = !1, this.f = function() {
		d2.ea && (iE = 5, this.iF = !1, iC = !1, iA = new iG([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.iH = function() {
		return iD[iE]
	}, this.iI = function() {
		return iA.bo
	}, this.iJ = function(iK) {
		return !!d2.ea && iA.bn + iA.gF > gG.gF - iK - j.gap
	}, this.resize = function() {
		d2.ea && (iA.resize(), iA.bo -= (iL.fS() - 1) * j.gap, font = g.h.fn(0, .3 * iA.ae), (canvas = document.createElement("canvas")).width = Math.floor(iA.gF), canvas.height = Math.floor(iA.ae), (fs = canvas.getContext("2d", {
			alpha: !0
		})).font = font, g.h.textAlign(fs, 1), g.h.textBaseline(fs, 1), iM(this))
	}, this.iN = function(iO) {
		0 === d2.h5 || t.iP() || iO !== d2.iQ && (d2.iQ = iO, go.resize(), e8.e9 = !0, d2.ea) && (iB = e8.iR + 2e3, iM(this))
	}, this.iS = function(bn, bo) {
		if (!d2.ea) return !1;
		if (bn < iA.bn || bo < iA.bo || bn > iA.bn + iA.gF) return iC && function(ig, bn, bo) {
			var aY = iD.length,
				is = Math.floor(.5 * iA.ae),
				ae = aY * is,
				dc = Math.floor(Math.floor(iA.bn) + .3 * iA.gF - .5),
				ae = Math.floor(Math.floor(iA.bo) - ae),
				gF = Math.floor(.4 * iA.gF + 2.5);
			return iC = !1, e8.e9 = !0, bn < dc || dc + gF < bn || bo < ae || (iE = ib(0, Math.floor((bo - ae) / is), aY - 1), iM(ig)), !0
		}(this, bn, bo);
		if ((bn -= iA.bn) < .3 * iA.gF) iC = !1, this.iN(!d2.iQ);
		else {
			if (bn < .7 * iA.gF) return iC = !iC, e8.e9 = !0;
			this.iU(!1)
		}
		return !0
	}, this.iU = function(iV) {
		2 === d2.h5 ? (this.iN(!1), t.z(3)) : (iC = !1, this.iF = !this.iF, this.iF ? (eb.eh && eb.eZ(), eH.eV.setState(1)) : iV || eb.iW(), e8.e9 = !0, iM(this))
	}, this.iX = function() {
		this.iF = !1, eb.iW(), e8.e9 = !0, iM(this)
	}, this.iY = function(bn, bo) {
		return !!d2.iQ && (0 <= eb.iS(bn, bo) || (d2.ea ? ((e8.iR > iB || !this.iS(bn, bo)) && iZ.iS(bn, bo), e8.e9 = !0, iB = e8.iR + 2e3) : iZ.iS(bn, bo)), !0)
	}, this.c8 = function() {
		d2.ea && d2.iQ && e8.iR > iB - 1e3 && e8.iR < iB && (e8.e9 = !0)
	}, this.ia = function() {
		d2.ea && (this.iF = !1, e8.e9 = !0, iM(this))
	}, this.h8 = function() {
		if (d2.ea) {
			if (d2.iQ) {
				if (e8.iR > iB) return;
				if (iB - 1e3 < e8.iR) return h9.globalAlpha = ib(0, (1e3 - (e8.iR - (iB - 1e3))) / 1e3, 1), ic(), void(h9.globalAlpha = 1)
			}
			ic()
		}
	}
}

function it() {
	function iv(key) {
		var j1;
		return "undefined" == typeof URLSearchParams || (j1 = window.location.search, "string" != typeof(j1 = new URLSearchParams(j1).get(key))) || j1.length < 1 ? null : j1
	}
	this.cS = function() {
		if (0 !== eH.id) return !1;
		if (! function() {
				var value = iv("account");
				if (!value && !(value = iv("a"))) return void iw.clear();
				return iw.clear(), t.z(8, t.a0, new a1(1e3, {
					ix: 0,
					iy: value,
					iz: 0
				})), 1
			}()) {
			var value = iv("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.z(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var j0 = new URL(window.location.href);
		j0.search = "";
		try {
			return history.replaceState(null, "", j0.toString()), !0
		} catch (dx) {
			console.log("error 352: " + dx)
		}
		return !1
	}, this.j3 = function(key, value) {
		if (0 === eH.id) try {
			var j0 = new URL(window.location.href),
				cT = j0.searchParams;
			cT.set(key, value), j0.search = cT.toString(), history.replaceState(null, "", j0.toString())
		} catch (dx) {
			console.log("error 358: " + dx)
		}
	}
}

function aS() {
	var j4 = [L(62), L(63), L(64), L(65), L(66), L(67), L(68)],
		j5 = [100, 60, 30, 15, 6, 1],
		j6 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		j7 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		j8 = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		j9 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.jA = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.jB = function(id, jC, cF) {
		jC = this.jD(jC);
		return +(j6[jC][id] > cF)
	}, this.jD = function(jC) {
		for (var y = 0; y < j5.length; y++)
			if (j5[y] <= jC) return y;
		return j5.length
	}, this.jE = function(jC) {
		return j4[this.jD(jC)]
	}, this.jF = function(id, jG) {
		return j7[id].replace(new RegExp("x", "g"), jG)
	}, this.jH = function(id, jG) {
		return j9[id].replace(new RegExp("x", "g"), jG)
	}, this.jI = function(id, jJ) {
		return j8[id] + (this.jA[id][jJ].length ? " (" + this.jA[id][jJ] + ")" : "")
	}
}

function jK() {
	this.cw = function(player) {
		for (var jL = b5.ax.jL, a3 = player << 3, y = a3 + b5.ax.cX[player] - 1; a3 <= y; y--) this.jM(jL[y])
	}, this.jM = function(jN) {
		var ax = b5.ax,
			jO = ax.jP - 1,
			jQ = ax.jR[jN],
			jS = ax.jT[jN],
			jU = ax.jV[jN];
		ax.jP = jO, ax.jR[jN] = ax.jR[jO], ax.jV[jN] = ax.jV[jO], ax.jW[jN] = ax.jW[jO], ax.jX[jN] = ax.jX[jO], ax.jT[jN] = ax.jT[jO], ax.jY[jN] = ax.jY[jO], ax.jZ[jN] = ax.jZ[jO], ax.ja[jN] = ax.ja[jO], ax.jb[jN] = ax.jb[jO], ax.jc[jN] = ax.jc[
				jO], ax.jL[ax.jR[jN]] = jN,
			function(jh) {
				var player = jh >> 3,
					ax = b5.ax,
					aY = ax.cX[player] - 1,
					ji = (player << 3) + aY;
				ax.cX[player] = aY, ji !== jh && (ax.jL[jh] = ax.jL[ji], ax.jR[ax.jL[jh]] = jh)
			}(jQ), b5.je.je[b9.jf(ax.jV[jN])][ax.jT[jN]] = jN, jO = b9.jf(jU), jQ = jS, jO = b5.je.je[jO], ax = jO.pop(), jQ !== jO.length && (jO[jQ] = ax, b5.ax.jT[ax] = jQ)
	}
}

function jl() {
	this.jm = new jn, this.jo = new jp, this.jq = new jr, this.performance = new js, this.jt = new ju, this.jv = new jw, this.jx = new jy, this.jz = new fC, this.k0 = new k1, this.f = function() {
		this.jm.f(), this.jq.f(), this.performance.f(), this.jt.f(), this.jv.f()
	}, this.c8 = function() {
		this.performance.c8(), this.jm.c8(), this.jq.k2()
	}
}

function jp() {
	this.c8 = function(player) {
		return b5.k3.k4(player, function(player) {
			var aY = k6.jm.k7;
			if (0 === aY) return -1;
			for (var ag = Math.min(aY, k6.performance.k8 ? aY : 10), aW = k6.jm.aW, hp = gA.gB(dJ.random() * aY, dJ.value(100)), dx = hp + ag, k9 = dJ.kA(cV.dY[player], cV.dZ[player]), kB = dJ.kA(cV.da[player], cV.db[player]), ht = -1,
					hl = b9.kC(0, 0, bR.bS, bR.bU), y = hp; y < dx; y++) {
				var kD = y % aY,
					kE = b9.kF(k9, kB, aW[kD]);
				kE < hl && (hl = kE, ht = kD)
			}
			return -1 !== ht ? function(bw, k9, kB) {
				var bM = b9.bN(bw),
					bO = b9.bP(bw),
					kH = k9 - bM,
					kI = kB - bO;
				Math.abs(kH) >= Math.abs(kI) ? (kI = 0, kH = Math.sign(kH)) : (kH = 0, kI = Math.sign(kI));
				kH === kI && (kH = 1);
				for (;;) {
					if (bM += kH, bO += kI, !b9.kJ(bM, bO)) break;
					if (bw = b9.kK(bM, bO), bE.kL(b9.bG(bw))) return bw
				}
				return -1
			}(aW[ht], k9, kB) : -1
		}(player))
	}
}

function kM() {
	this.c8 = function(player, kN) {
		player = b5.bH.kP(player, kN);
		return !(player < 0 || !b5.kQ.kR(player) || (b5.kQ.kS(player), 0))
	}
}

function kT() {
	function ko() {
		bR.kp.c8()
	}

	function l4(cT, l2) {
		0 < l2 && (bR.l3[cT] += l2, bR.l3[cT + 1] += l2, bR.l3[cT + 2] += l2)
	}

	function kL(cT) {
		return bR.l3[cT + 2] > bR.l3[cT] && bR.l3[cT + 2] > bR.l3[cT + 1]
	}
	this.kU = -1, this.kV = 0, this.kW = 0, this.kX = 8, this.kY = 32, this.kZ = 8, this.ka = 32, this.kb = [0, 0], this.kc = [0, 0, 0, 0], this.je = null, this.kd = !0, this.ke = !1, this.kf = function() {
		-1 !== this.kU && clearTimeout(this.kU), this.kU = -1, this.je = null, kg.kh()
	}, this.f = function() {
		7 === av.aw() || this.ke || (this.kd = !0, this.kV = 0, this.kW = 1, this.kb = [bR.ki.kj[bR.kk].kl[0], bR.ki.kj[bR.kk].km[0]], this.kc = [bR.ki.kj[bR.kk].kn[3], bR.ki.kj[bR.kk].kn[4], bR.ki.kj[bR.kk].kn[5], bR.ki.kj[bR.kk].kn[6]], this
			.kX = bR.ki.kj[bR.kk].kn[7], this.kY = bR.ki.kj[bR.kk].kn[8], this.kZ = bR.ki.kj[bR.kk].kn[9], this.ka = bR.ki.kj[bR.kk].kn[10], this.kd ? this.kU = setTimeout(ko, 16) : this.c8())
	}, this.c8 = function() {
		if (8 === av.aw() && kq.kr()) this.kU = setTimeout(ko, 16);
		else {
			if (0 === this.kV) {
				var ks = dJ.kt();
				if (dJ.ku(bR.ki.kj[bR.kk].kn[2]), kg.kv([bR.bS, bR.bU, bR.ki.kj[bR.kk].kn[0], bR.ki.kj[bR.kk].kn[1]]), dJ.ku(ks), this.je = kg.kw(), this.kV++, this.kd) return void(this.kU = setTimeout(ko, 16))
			}
			for (var cT, bw, ks = this.kd ? 10 : 1e6, ks = bR.bU - this.kW - 1 < ks ? bR.bU - this.kW - 1 : ks, ba = this.kW + ks, bo = this.kW; bo < ba; bo++)
				for (var bn = 1; bn < bR.bS - 1; bn++) kL(cT = 4 * (bw = bn + bo * bR.bS)) ? this.kx(cT, bw, 1) : (this.kx(cT, bw, 0), function(bn, bo, cT) {
					return 1 < bn && kL(cT - 4) || bn < bR.bS - 2 && kL(cT + 4) || 1 < bo && kL(cT - 4 * bR.bS) || bo < bR.bU - 2 && kL(cT + 4 * bR.bS)
				}(bn, bo, cT) && this.kz(bn, bo));
			this.kW = ba, this.kW >= bR.bU - 1 ? (bR.l0.putImageData(bR.l1, 0, 0, 1, 1, bR.bS - 2, bR.bU - 2), e8.e9 = !0, this.kf()) : this.kd && (this.kU = setTimeout(ko, 16))
		}
	}, this.kx = function(cT, bw, cF) {
		l4(cT, Math.floor(this.kb[cF] + this.kc[cF] * this.je[bw] / 1e4) - bR.l3[cT])
	}, this.l5 = function(cT, jC, l6, cF, kc) {
		l4(cT, Math.floor(this.kb[cF] + (1 - jC / l6) * kc) - bR.l3[cT])
	}, this.kz = function(k9, kB) {
		for (var cT, jC, l6, bX = k9 - this.kY, bY = kB - this.kY, bZ = k9 + this.kY, ba = kB + this.kY, bX = bX < 1 ? 1 : bX, bZ = bZ > bR.bS - 2 ? bR.bS - 2 : bZ, ba = bR.bU - 2 < ba ? bR.bU - 2 : ba, bo = bY < 1 ? 1 : bY; bo <= ba; bo++)
			for (var bn = bX; bn <= bZ; bn++) kL(cT = 4 * (bn + bo * bR.bS)) ? (l6 = this.kX + (this.kY - this.kX) * this.je[bn + bR.bS * bo] / 1e4, Math.abs(k9 - bn) > l6 || Math.abs(kB - bo) > l6 || l6 <= (jC = Math.sqrt((k9 - bn) * (k9 - bn) +
				(kB - bo) * (kB - bo))) || this.l5(cT, jC, l6, 1, this.kc[3])) : (l6 = this.kZ + (this.ka - this.kZ) * this.je[bn + bR.bS * bo] / 1e4, Math.abs(k9 - bn) > l6 || Math.abs(kB - bo) > l6 || l6 <= (jC = Math.sqrt((k9 - bn) * (k9 -
				bn) + (kB - bo) * (kB - bo))) || this.l5(cT, jC, l6, 0, this.kc[2]))
	}
}

function l7() {
	this.l8 = function(l9) {
		var username = aV.aW.data[122].value.slice(0, 20),
			username = (lA.kv(24 + 16 * username.length + 18 + 18 + cz.lB.cL()), lA.lC(1, 0), lA.lC(6, 1), lA.lC(10, f1.lD), lA.lC(2, aV.aW.data[158].value), an.ao.lE(username), g.color.lF(aV.ax.lG())),
			username = (lA.lC(6, username[0]), lA.lC(6, username[1]), lA.lC(6, username[2]), aX.az());
		lA.lC(9, username[0]), lA.lC(9, username[1]), cz.lB.lI(), an.ax.lJ = l9, an.ax.send(l9, lA.lK)
	}, this.lL = function(lM, dy) {
		lN.f(), lN.lC(1, 0), lN.lC(6, 2), lN.lC(3, lM), 2 === lM ? lN.lC(2, dy) : 3 === lM ? lO.lP.lI(dy, 7, lN) : 5 === lM && (lN.lC(3, dy.id), lN.lC(3, dy.value), lN.lC(30, dy.iy)), an.ax.send(an.ax.lJ, lN.lQ())
	}
}

function lR() {
	var lS = null;
	this.lT = 0, this.lU = function() {
		var aU = aV.aW.data[5].value;
		lS = "px " + aU, "Trebuchet MS" !== aU && (lS += ", Trebuchet MS"), this.lT = lV(32, 32, ["a", "b", "m"], 200, lS)
	}, this.lW = function(gF, ae) {
		var a7 = document.createElement("canvas");
		return a7.width = gF, a7.height = ae, a7
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(fs, gF, ae) {
		return fs.getImageData(0, 0, gF, ae)
	}, this.fn = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + lS : 1 === type ? "bold " + size + lS : 2 === type ? "lighter " + size + lS : 3 === type ? "italic " + size + lS : 4 === type ? "oblique " + size + lS : 5 === type ? "small-caps " +
			size + lS : "small-caps bold " + size + lS
	}, this.textAlign = function(lX, id) {
		lX.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(lX, id) {
		lX.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.fo = function(dx, code, color) {
		color = this.i(j.lY) + " solid " + (color || dR.fa);
		5 === (code = code || 5) ? dx.style.border = color : 4 === code ? dx.style.borderLeft = color : 2 === code ? dx.style.borderBottom = color : 6 === code ? dx.style.borderRight = color : dx.style.borderTop = color
	}, this.lZ = function(dx, bn, bo, gF, ae) {
		dx = dx.style;
		dx.left = this.lb(bn), dx.top = this.lb(bo), dx.width = this.lb(gF), dx.height = this.lb(ae)
	}, this.lc = function(aU) {
		return 1 + aU * eH.eV.fT()
	}, this.l = function(hv, kD) {
		return hv * this.lc(void 0 === kD ? .5 : kD) * gG.gH / gG.ld
	}, this.le = function(hv, kD) {
		return hv * this.lc(void 0 === kD ? .5 : kD) * gG.gH
	}, this.lf = function(hv, kD, lg) {
		return this.lc(kD) * Math.min(hv * gG.gH, lg * gG.gF) / gG.ld
	}, this.i = function(aU) {
		return aU.toFixed(1) + "px"
	}, this.lb = function(aU) {
		return this.li(aU).toFixed(1) + "px"
	}, this.li = function(aU) {
		return aU / gG.ld
	}, this.f0 = function(em, en) {
		for (var du = "<ul>", aY = em.length, y = 0; y < aY; y++) du += "<li>" + em[y] + ": <a href='" + en[y] + "' target='_blank'>" + en[y] + "</a></li>";
		return du += "</ul>"
	}, this.lj = function(lk) {
		return "<a href='" + lk + "' target='_blank'>" + lk + "</a>"
	}, this.ll = function(dx) {
		navigator.clipboard && navigator.clipboard.writeText(dx.value)
	}, this.lm = function(dx) {
		var cU = dx.textContent;
		g.gZ.ln(cU, "✔") || (1 === cU.length ? dx.textContent = "✔" : dx.textContent = cU + " ✔", setTimeout(function() {
			dx.textContent = cU
		}, 500))
	}, this.measureText = function(du) {
		return h9.measureText(du).width
	}, this.lo = function(lp) {
		lp.style.overflowX = "auto", lp.style.overflowY = "hidden", lp.style.whiteSpace = "nowrap", lp.addEventListener("wheel", function(dx) {
			Math.abs(dx.deltaY) < Math.abs(dx.deltaX) || (this.scrollLeft += dx.deltaY, this.lq = this.scrollLeft, dx.preventDefault())
		}), lp.addEventListener("scroll", function() {
			this.lq = this.scrollLeft
		})
	}
}

function lr() {
	this.gv = new ls, this.result = new lt, this.lu = new lv, this.lw = new lx, this.ly = new lz, this.dC = new m0, this.f = function() {
		this.result.f()
	}
}

function m1() {
	this.m2 = function(l9) {
		lA.kv(39), lA.lC(1, 0), lA.lC(6, 13), lA.lC(14, f1.mG), lA.lC(4, eH.id), lA.lC(7, eH.eU), lA.lC(1, +f1.mH), lA.lC(1, +f1.mI), lA.lC(5, (new Date).getHours() % 24), an.ax.send(l9, lA.lK)
	}, this.m4 = function(l9, m5, m6) {
		lA.kv(70), lA.lC(1, 0), lA.lC(6, 14), lA.lC(3, m6), lA.lC(30, m5[0]), lA.lC(30, m5[1]), an.ax.send(l9, lA.lK)
	}, this.m7 = function(id) {
		lA.kv(13), lA.lC(1, 0), lA.lC(6, 15), lA.lC(6, id), an.ax.send(0, lA.lK)
	}, this.ap = function(id, du) {
		var aY = Math.min(du.length, 63);
		lA.kv(19 + 16 * aY), lA.lC(1, 0), lA.lC(6, 26), lA.lC(6, id), lA.lC(6, aY), lO.m8.m9(du), an.ax.send(0, lA.lK)
	}, this.mA = function(mB, fi) {
		lA.kv(7 + 26 * fi.length), lA.lC(1, 0), lA.lC(6, 9);
		for (var y = 0; y < fi.length; y++) lA.lC(16, fi[y][0]), lA.lC(10, fi[y][1]);
		an.ax.send(mB, lA.lK)
	}, this.mC = function(mD, mE) {
		lA.kv(20), lA.lC(1, 0), lA.lC(6, 19), lA.lC(1, mD), lA.lC(12, mE), an.ax.send(an.ax.mF, lA.lK)
	}, this.lE = function(username) {
		lA.lC(5, username.length), lO.m8.m9(username)
	}
}

function mJ() {
	mK() ? (mL(), mM !== d2.hR && mN()) : mO()
}

function mN() {
	mP.mQ(), mP.mR(cV.ck[mM]), mP.mR(cV.cl[mM]), bR.mS(bR.kk) && mP.mR(cV.cm[mM]), mP.mT(cV.ca[mM]), mP.mU(cV.cl[mM]), mP.mU(cV.cm[mM]), mP.mV(), mP.mW()
}

function mL() {
	mX = !0, cc.mY(mZ, ma, mb), cc.mc(mZ, ma), cV.cW[mZ] += md, mP.me(), mf()
}

function mK() {
	return (mM === d2.hR ? mg : mh)()
}

function mh() {
	var mi = md * d2.mj,
		mk = ml(),
		mm = mn(),
		mk = mi + 2 * mk + mm,
		mp = mq * md;
	return mk < mp ? (mb -= mk, aP.cs(mZ, mk, 13), mr(mk - mi, mm), !0) : ms && 0 === mm ? (mb -= mp, mp += g.cn.mt(mZ, mk - mp + 1), aP.cs(mZ, mp, 13), mr(mp - mi, 0), !0) : (mb -= mp, aP.cs(mZ, mp, 13), mr(mp - mi, mm), !1)
}

function mr(mp, mm) {
	if (0 < mm) {
		if (mp <= mm) return aP.cs(mM, mp, 13), void cc.mu(mM, mZ, mm - mp);
		cc.mu(mM, mZ, 0), mp -= mm
	}
	mp = gA.gB(mp, 2), mp = Math.min(cV.cp[mM], mp), aP.cs(mM, mp, 13), cV.cp[mM] -= mp
}

function mn() {
	return cc.mv(mM, mZ)
}

function ml() {
	return gA.gB(md * cV.cp[mM], 1 + gA.gB(10 * cV.cW[mM], 16))
}

function mg() {
	var mw = md * d2.mj;
	return mb -= mw, aP.cs(mZ, mw, 13), !0
}

function mf() {
	for (var y = md - 1; 0 <= y; y--) cV.ca[mZ].push(mx[y]), cV.ck[mZ].push(mx[y]), bE.my(mx[y], mZ)
}

function hD() {
	this.at = function(cF, value) {
		aV.aW.data[cF].value !== value && (aV.aW.mz(cF, value), 0 === cF ? (t.eY(), aX.f(), t.z(2)) : 1 === cF ? gG.n0(1) : 2 === cF ? gG.n0(0) : 5 === cF && (g.h.lU(), gG.n0(0)))
	}, this.n1 = function() {
		for (var data = aV.aW.data, y = 0; y < 100; y++) data[y] && aV.aW.mz(y, data[y].n2);
		g.h.lU(), gG.n0(1), aX.f()
	}, this.n3 = function() {
		for (var data = aV.aW.data, y = 0; y < data.length; y++) data[y] && aV.aW.at(y, data[y].n2)
	}, this.n4 = function() {
		for (var ak = aV.aW, y = 128; y < 135; y++) ak.mz(y, ak.data[y].n2)
	}, this.n5 = function(data) {
		aV.ar.at(109, data.iz), aV.ar.at(107, data.n6), aV.ar.at(108, data.n7), aV.ar.at(112, data.n8), aV.ar.at(111, data.n9), aV.ar.at(113, data.nA), aV.ar.at(135, data.nB), aV.ar.at(136, data.nC), aV.ar.at(137, data.nD), aV.ar.at(138, data
			.nE), aV.ar.at(139, data.nF), aV.ar.at(141, data.nG), aV.ar.at(142, data.nH), aV.ar.at(143, data.nI), aV.ar.at(144, data.nJ)
	}
}

function nK(nL, nM, nN, nO) {
	var nP = document.createElement("textarea"),
		nQ = (this.dx = nP, !0);

	function nZ() {
		nP.select(), document.execCommand("copy")
	}
	this.resize = function() {
			nM && g.h.fo(nP, 5)
		}, this.nU = function(nV) {
			nP.value = nV
		}, this.nW = function() {
			return nP.value
		}, this.nX = function() {
			nP.select()
		}, this.clear = function() {
			nP.value = ""
		}, this.nY = function() {
			nQ && navigator.clipboard ? (nP.select(), navigator.clipboard.writeText(nP.value).catch(function() {
				nQ = !1, nZ()
			})) : nZ()
		}, nP.setAttribute("id", "textArea" + t.ax.nR++), nP.setAttribute("autocomplete", "off"), nL && nP.setAttribute("placeholder", nL), nP.style.top = "0", nP.style.left = "0", nP.style.width = "100%", nP.style.height = "100%", nP.style
		.userSelect = "none", nP.style.outline = "none", nP.style.resize = "none", nP.style.border = "none", nP.style.color = dR.fa, nP.style.backgroundColor = dR.nS, nO ? (nP.style.fontSize = "1em", nP.rows = 6, nP.style.padding = "0.25em") : (nP
			.style.padding = "0.45em", nP.style.fontSize = "1.2em"), nN && nP.addEventListener("input", function(dx) {
			nN(dx)
		}), nP.addEventListener("focus", function() {
			gG.nT++
		}), nP.addEventListener("blur", function() {
			gG.nT--
		})
}

function na() {
	this.nb = function(l9) {
		var m6, m5;
		cK.nc(70) ? (m6 = cK.cL(3), m5 = cz.ne.c8(cK.cL(30), cK.cL(30)), an.ao.m4(l9, m5, m6), 0 < m6 || (0 === l9 && 0 === aV.aW.data[105].value.length ? an.ao.m7(0) : an.nf.ng(l9), 4 === an.ax.nh(l9).ni() ? 6 === av.aw() && an.nj.l8(l9) : 5 !==
			an.ax.nh(l9).ni() || 8 !== av.aw() && 10 !== av.aw() || an.nk.nl())) : an.ax.nd(l9, 3269)
	}, this.nm = function(l9) {
		var id = cK.cL(6);
		1 === id ? (aV.ar.at(160, cK.cL(30)), an.ax.nn(l9), no.np || an.ao.m7(1), aX.al(), 8 === t.a0 && t.eB().nq()) : 21 === id ? 8 === t.a0 && t.eB().nr(17) : 22 === id && (aV.ar.at(106, aV.aW.data[110].value), aV.ar.at(110, ""), 8 === t
			.a0) && t.eB().nr(15)
	}, this.ns = function() {
		var aY = cK.cL(16),
			nt = cK.cL(16);
		if (cK.nc(55 + 10 * aY + 16 * nt)) {
			for (var aZ = [], y = 0; y < aY; y++) aZ.push(nu.m8.nv(cK.cL(10)));
			aX.aq(aZ)
		} else an.ax.nd(0, 3270)
	}
}

function nw() {
	this.nx = new ny, this.nz = new o0, this.o1 = new o2, this.f = function() {
		d2.ea || this.nx.f()
	}, this.c8 = function() {
		d2.ea || (this.nx.c8(), 3 !== t.a0) || e8.o4() % 15 != 5 && 2 !== d2.h5 || t.eB().o5()
	}, this.o6 = function() {
		0 === d2.h5 && av.o7(), d2.o8.o9(), d2.data.canvas = null, an.ax.close(an.ax.mF, 3257), an.ax.mF = 0, d2.data.isReplay = 1, d2.oA()
	}, this.oB = function(du) {
		var y = du.indexOf("=");
		return 0 <= y ? du.substring(y + 1) : du
	}, this.oC = function(du) {
		return "https://territorial.io/?replay=" + du
	}
}

function oD() {
	var gI, gF, bo, oE, oF, canvas, fs, oG, oH, oI, oJ, oK, oL;
	this.bn = 0, this.ae = 0, this.f = function() {
		oF = d2.oM, oJ = "rgba(0,100,0,0.8)", oK = "rgba(150,0,0,0.8)", oG = oI = !0, oH = cV.cp[d2.ed], this.resize()
	}, this.resize = function() {
		gF = Math.floor((eH.eV.fT() ? .305 : .24) * gG.gH), this.ae = Math.floor(.5 + .13 * gF), gF = Math.floor(6 * this.ae), gI = g.h.fn(1, Math.floor(.8 * this.ae)), oL = Math.floor(.5 * this.ae), bR.l0.font = gI, bo = j.gap, oE = Math.floor(
			1 + .13 * this.ae), (canvas = document.createElement("canvas")).width = gF, canvas.height = this.ae, (fs = canvas.getContext("2d", {
			alpha: !0
		})).font = gI, g.h.textBaseline(fs, 1), g.h.textAlign(fs, 1), this.oN()
	}, this.gP = function() {
		return eH.eV.fT() && gG.gF < 1.2 * gG.ae
	}, this.gL = function() {
		this.gP() ? this.bn = gG.gF - gF - j.gap : this.bn = Math.floor(h6.oO() + (gG.gF - h6.oO() - d9.gF - gF) / 2 - .5 * j.gap)
	}, this.gR = function() {
		oG && (oG = !1, this.oN())
	}, this.oN = function() {
		fs.clearRect(0, 0, gF, this.ae), fs.fillStyle = oI ? oJ : oK, fs.fillRect(0, 0, gF, this.ae), fs.fillStyle = dR.oP, this.oQ(), this.oR(), fs.fillStyle = cV.cp[d2.ed] >= gW.gX(d2.ed) ? dR.oS : dR.fa, fs.fillText(g.gZ.gb(oH), Math.floor(
			gF / 2), oL), fs.fillStyle = dR.fa, fs.fillRect(0, 0, gF, 1), fs.fillRect(0, 0, 1, this.ae), fs.fillRect(0, this.ae - 1, gF, 1), fs.fillRect(gF - 1, 0, 1, this.ae)
	}, this.oQ = function() {
		var a7 = e8.o4() % 100,
			a7 = (a7 = 9 - gA.gB(a7 -= a7 % 10, 10), Math.floor(a7 * (this.ae - oE) / 9));
		fs.fillRect(0, a7, oE, this.ae - a7), fs.fillRect(gF - oE, a7, oE, this.ae - a7)
	}, this.oR = function() {
		fs.fillRect(oE, this.ae - oE, Math.floor((gF - 2 * oE) * cV.cp[d2.ed] / oF), oE)
	}, this.c8 = function() {
		var cT = d2.ed;
		g.cn.gy(cT) && (cT = cV.cp[cT] - cV.cq[cT], oH !== cT ? (oF = oU(cT, oF), oI = oH < cT && 10 <= cT, oH = cT, oG = !0) : e8.o4() % 10 == 9 && (oG = !0))
	}, this.h8 = function() {
		0 === cV.dX[d2.ed] || d2.gQ || 2 === cV.oV[d2.ed] || h9.drawImage(canvas, this.bn, bo)
	}
}

function oW() {
	this.resize = function() {
		var y, oX = document.head.querySelector("style#ss");
		if (oX)
			for (y = oX.sheet.cssRules.length - 1; 0 <= y; y--) oX.sheet.deleteRule(0);
		else(oX = document.createElement("style")).id = "ss", document.head.appendChild(oX);
		var iB = "::-webkit-scrollbar",
			oY = g.h.i(j.lY),
			oZ = g.h.i(Math.max(g.h.l(.012), 8));
		try {
			oX.sheet.insertRule(iB + "{width:" + oZ + ";height:" + oZ + ";}", oX.sheet.cssRules.length), oX.sheet.insertRule(iB + "-thumb{background-color:white;}", oX.sheet.cssRules.length), oX.sheet.insertRule(iB + "-track{background:" + dR
				.fb + ";}", oX.sheet.cssRules.length), oX.sheet.insertRule(iB + "-track:horizontal{border-top:" + oY + " solid white;}", oX.sheet.cssRules.length), oX.sheet.insertRule(iB + "-track:vertical{border-left:" + oY +
				" solid white;}", oX.sheet.cssRules.length), oX.sheet.insertRule(iB + "-button{display:none;}", oX.sheet.cssRules.length)
		} catch (dx) {
			for (console.log("error 3425: " + dx), y = oX.sheet.cssRules.length - 1; 0 <= y; y--) oX.sheet.deleteRule(0)
		}
	}
}

function oa() {
	this.ob = 0, this.kk = 0, this.mapSeed = 0, this.oc = 0, this.od = 0, this.oe = 0, this.og = 0, this.oh = 0, this.spawningSeed = 0, this.mF = 0, this.oi = 0, this.oj = [], this.ok = 1048575, this.ol = 0, this.om = [{
		kk: 0,
		mapSeed: 0,
		oc: 0,
		iR: 100,
		og: 0
	}, {
		kk: 1,
		mapSeed: 0,
		oc: 1,
		iR: 200,
		og: 0
	}, {
		kk: 2,
		mapSeed: 0,
		oc: 2,
		iR: 300,
		og: 0
	}, {
		kk: 3,
		mapSeed: 0,
		oc: 3,
		iR: 400,
		og: 0
	}, {
		kk: 0,
		mapSeed: 0,
		oc: 9,
		iR: 500,
		og: 0
	}, {
		kk: 1,
		mapSeed: 0,
		oc: 10,
		iR: 600,
		og: 0
	}, {
		kk: 2,
		mapSeed: 0,
		oc: 8,
		iR: 700,
		og: 0
	}, {
		kk: 3,
		mapSeed: 0,
		oc: 3,
		iR: 800,
		og: 0
	}]
}

function on() {
	var input;

	function oo(dx) {
		(dx = dx.target.files) && 0 < dx.length && or.os(dx[0])
	}

	function ow(dx) {
		var a7 = new Image;
		a7.onload = ox, a7.src = dx.target.result
	}

	function ox(dx) {
		var dx = dx.target,
			canvas = document.createElement("canvas");
		canvas.width = dx.width, canvas.height = dx.height;
		canvas.getContext("2d").drawImage(dx, 0, 0);
		var dx = canvas.width,
			ae = canvas.height;
		dx > bR.oz || ae > bR.oz || dx < 10 || ae < 10 ? (dx = "Image dimensions must be between 10 and " + bR.oz + ".", eH.p1 ? eH.p1.showToast(dx) : alert(dx)) : 20 === t.a0 && t.eB().ox(canvas)
	}
	this.f = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = oo
	}, this.fp = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.op = function() {
		input.click()
	}, this.os = function(ot) {
		var aZ = ot.name.split("."),
			aZ = aZ[aZ.length - 1].toLowerCase();
		"gif" !== aZ && "jpg" !== aZ && "jpeg" !== aZ && "png" !== aZ || ((aZ = new FileReader).onload = ow, aZ.readAsDataURL(ot))
	}
}

function p2() {
	this.fk = new p3, this.eJ = new eK
}

function p4(p5) {
	var fW = document.createElement("div"),
		p6 = document.createElement("div");
	this.iM = function() {
			p6.textContent = "", fj.p7.a5(1);
			for (var p8 = document.createDocumentFragment(), p9 = fj.ax.pA[0], pB = fj.pB.pC[p9], pD = fj.pB.pD[p9], y = 0; y < pB.length; y++) ! function(p8, fi, pF, p9) {
				var pG = document.createElement("span");
				pG.textContent = (pF ? "🟢 " : "⚪ ") + fj.bH.pH(fi, p9), pG.style.color = fj.bH.pI(fi.pJ), pG.style.cursor = "pointer", pG.style.margin = "0.2em 0.2em 0.2em 0.2em", pG.style.width = pG.style.maxWidth = 2 === p9 ? "10em" : "9em",
					pG.style.height = pG.style.maxHeight = "1.4em", pG.style.whiteSpace = "nowrap", pG.style.overflow = "hidden", pG.style.textOverflow = "ellipsis", pG.style.font = "inherit", pG.style.display = "inline-block", fj.bH.pK(fi) && (
						pG.style.textDecoration = "underline"), pG.onclick = function(dx) {
						p5(dx, fi)
					}, cA.cB() || (pG.onmouseover = function(dx) {
						fj.p7.pL(dx, fi, 1)
					}), p8.appendChild(pG)
			}(p8, pB[y], y < pD, p9);
			p6.appendChild(p8)
		}, this.show = function(b) {
			b.appendChild(fW)
		}, this.a5 = function(b) {
			b.removeChild(fW)
		}, this.resize = function() {
			p6.style.fontSize = g.h.i(g.h.l(.02, .3))
		}, fW.style.top = "0", fW.style.left = "0", fW.style.width = fW.style.height = "100%", fW.style.overflowX = "hidden", fW.style.overflowY = "auto", fW.style.font = "inherit", p6.style.font = "inherit", p6.style.margin = "0.4em", fW
		.appendChild(p6)
}

function pM() {
	this.me = function() {
		for (var bn, bo, y = md - 1; 0 <= y; y--) bn = gA.gB(mx[y], 4) % bR.bS, bo = gA.gB(mx[y], 4 * bR.bS), cV.dY[mZ] = Math.min(bn, cV.dY[mZ]), cV.da[mZ] = Math.min(bo, cV.da[mZ]), cV.dZ[mZ] = Math.max(bn, cV.dZ[mZ]), cV.db[mZ] = Math.max(bo,
			cV.db[mZ])
	}, this.pN = function() {
		var bW, cT, y, aY = cV.ca[mZ].length,
			pO = bE.pO;
		loop: for (y = aY - 1; 0 <= y; y--) {
			for (bW = 3; 0 <= bW; bW--)
				if (cT = cV.ca[mZ][y] + pO[bW], bE.pP(cT) || bE.pQ(cT) && bE.pR(cT) !== mZ) {
					bE.pS(cV.ca[mZ][y], mZ);
					continue loop
				} cV.ca[mZ][y] = cV.ca[mZ][aY - 1], cV.ca[mZ].pop(), aY--
		}
	}, this.pT = function() {
		var player = mZ,
			ck = cV.ck,
			cl = cV.cl,
			cm = cV.cm,
			aY = ck[player].length,
			pO = bE.pO;
		loop: for (var y = aY - 1; 0 <= y; y--) {
			for (var pU = !1, pV = !1, bW = 3; 0 <= bW; bW--) {
				var cT = ck[player][y] + pO[bW];
				if (bE.by(cT, player)) continue loop;
				pU = pU || bE.kL(cT), pV = pV || bE.pW(cT)
			}
			pU ? cl[player].push(ck[player][y]) : pV ? cm[player].push(ck[player][y]) : bE.pX(ck[player][y], player), ck[player][y] = ck[player][aY - 1], ck[player].pop(), aY--
		}
	}, this.mQ = function() {
		cV.cW[mM] -= md
	}, this.mR = function(border) {
		for (var aY = border.length, y = aY - 1; 0 <= y; y--) bE.de(mM, border[y]) || (border[y] = border[aY - 1], border.pop(), aY--)
	}, this.mT = function(border) {
		for (var aY = border.length, y = aY - 1; 0 <= y; y--) !bE.de(mM, border[y]) && bE.pY(border[y]) && (border[y] = border[aY - 1], border.pop(), aY--)
	}, this.mU = function(border) {
		for (var bW, cT, aY = border.length, pO = bE.pO, y = aY - 1; 0 <= y; y--)
			for (bW = 3; 0 <= bW; bW--)
				if (cT = border[y] + pO[bW], bE.by(cT, mM)) {
					cV.ck[mM].push(border[y]), border[y] = border[aY - 1], border.pop(), aY--;
					break
				}
	}, this.mV = function() {
		for (var bW, cT, pO = bE.pO, y = md - 1; 0 <= y; y--)
			for (bW = 3; 0 <= bW; bW--) cT = mx[y] + pO[bW], bE.pZ(mM, cT) && bE.pa(cT) && (cV.ck[mM].push(cT), bE.my(cT, mM))
	}, this.mW = function() {
		var bn, bo;
		loop: for (; cV.da[mM] < cV.db[mM];) {
			for (bn = cV.dZ[mM]; bn >= cV.dY[mM]; bn--)
				if (bE.de(mM, 4 * (cV.da[mM] * bR.bS + bn))) break loop;
			cV.da[mM]++
		}
		loop: for (; cV.da[mM] < cV.db[mM];) {
			for (bn = cV.dZ[mM]; bn >= cV.dY[mM]; bn--)
				if (bE.de(mM, 4 * (cV.db[mM] * bR.bS + bn))) break loop;
			cV.db[mM]--
		}
		loop: for (; cV.dY[mM] < cV.dZ[mM];) {
			for (bo = cV.db[mM]; bo >= cV.da[mM]; bo--)
				if (bE.de(mM, 4 * (bo * bR.bS + cV.dY[mM]))) break loop;
			cV.dY[mM]++
		}
		loop: for (; cV.dY[mM] < cV.dZ[mM];) {
			for (bo = cV.db[mM]; bo >= cV.da[mM]; bo--)
				if (bE.de(mM, 4 * (bo * bR.bS + cV.dZ[mM]))) break loop;
			cV.dZ[mM]--
		}
	}, this.pb = function(player, pc) {
		return 0 === aL.dI[player] || aL.dI[player] !== aL.dI[pc]
	}, this.pd = function(player) {
		for (var y, kD, aY = cV.ck[player].length, pO = bE.pO, bW = 3; 0 <= bW; bW--)
			for (kD = pO[bW], y = 0; y < aY; y++)
				if (bE.pP(cV.ck[player][y] + kD)) return !0;
		return !1
	}, this.pe = function(player) {
		for (var y, kD, aY = cV.ck[player].length, pO = bE.pO, bW = 3; 0 <= bW; bW--)
			for (kD = pO[bW], y = 0; y < aY; y++)
				if (bE.pf(cV.ck[player][y]) && bE.pP(cV.ck[player][y] + kD)) return !0;
		return !1
	}, this.pg = function(ph, pi) {
		for (var y, cU, kD, cT, pj = cV.ck[ph].length, pk = cV.ck[pi].length, pO = (pk < pj && (cU = ph, ph = pi, pi = cU, cU = pj, pj = pk, 0), bE.pO), bW = 3; 0 <= bW; bW--)
			for (kD = pO[bW], y = 0; y < pj; y++)
				if (cT = cV.ck[ph][y] + kD, bE.pQ(cT) && bE.pR(cT) === pi) return !0;
		return !1
	}, this.pl = function(ph, pi) {
		for (var y, kD, cT, pj = cV.ck[ph].length, pO = bE.pO, bW = 3; 0 <= bW; bW--)
			for (kD = pO[bW], y = 0; y < pj; y++)
				if (bE.pf(cV.ck[ph][y]) && (cT = cV.ck[ph][y] + kD, bE.pQ(cT)) && bE.pR(cT) === pi) return !0;
		return !1
	}
}

function pm() {
	var pn, po, pp, pq, pr, ps, pt, pu, pv, pw, px, py, pz, q0, q1, q2, q3, q4, q6, q7, q8, q9, qA, qH, qI, q5 = null,
		qC = 0,
		qD = !1,
		qE = new Float32Array(4),
		qF = 0,
		qG = !0,
		qJ = 400,
		qK = 0;

	function qL() {
		pv = Math.floor(+gG.gH), pw = Math.floor(.5 * pv)
	}

	function qM() {
		var y, qU;
		for (h9.font = g.h.fn(1, 100 * px), qU = 80 / Math.floor(h9.measureText(g.gZ.gb(d2.qV)).width), h9.font = g.h.fn(1, 100), y = d2.hR - 1; 0 <= y; y--) pu[y] = 100 / Math.floor(h9.measureText(cV.dQ[y]).width), pt[y] = Math.min(qU, pu[y])
	}

	function qW(y) {
		return !qK || (y = cV.cp[y]) < 1e6 ? 1 : y < 1e7 ? qE[0] : qE[Math.min(Math.floor(Math.log10(y)) - 6, 3)]
	}

	function qT(lX) {
		q4 = !1, q3 = 1, q1 = q2 = 0, qG && (g.h.textAlign(lX, 1), g.h.textBaseline(lX, 1));
		for (var qr, qs, y, qt, fontSize, qu, dc = qm / qn, dd = qo / qn, qp = (gG.gF + qm) / qn, qq = (gG.ae + qo) / qn, qv = 0 !== cV.dX[d2.ed] && !g.cn.cx(d2.ed), qw = g7.g8 - 1; 0 <= qw; qw--) y = g7.gx[qw], (fontSize = Math.floor(q0 * qn * qW(
			y) * pt[y] * pr[y])) < pz || pv <= fontSize || pp[y] + pr[y] > dc && pp[y] < qp && pq[y] + ps[y] > dd && pq[y] < qq && (qr = Math.floor(gG.gF * (pp[y] + pr[y] / 2 - dc) / (qp - dc)), qs = Math.floor(gG.ae * (pq[y] + ps[y] / 2 - dd) /
			(qq - dd) - .1 * fontSize), qt = bE.kc[y], lX.font = g.h.fn(1 === cV.oV[y] ? 4 : 1, fontSize), lX.fillStyle = qx(fontSize, qt % 2), qK ? qy(lX, y, fontSize, qr, qs, qt) : qz(y, fontSize, qr, qs, lX), q4 = !0, 0 < q8[y] ? function(
			qr, qs, fontSize, y, lX) {
			0 === r1[y] ? eI.fk.qd(q7[y]) ? (function(qr, qs, fontSize, player, rF, lX) {
					for (var oT = qs, rO = (lX.globalAlpha = rA(fontSize), qW(player) * (qK ? qF : pu[player])), r9 = qr - .5 * fontSize / rO - .9 * fontSize, ak = 0; ak < 2; ak++) lX.fillText(eI.fk.rK(rF), r9, oT), r9 = qr + .5 *
						fontSize / rO + .9 * fontSize;
					lX.globalAlpha = 1
				}(qr, qs, fontSize, y, q7[y], lX), r2(qr, qs, fontSize, 0, 0, lX)) : eI.fk.rD(q7[y]) ? (rE(qr, qs, fontSize, q7[y], 0, lX), r2(qr, qs, fontSize, 0, 1, lX)) : (rE(qr, qs, fontSize, q7[y], 1, lX), r2(qr, qs, fontSize, 1, 0,
				lX)) : rE(qr, qs, fontSize, q7[y], 0, lX)
		}(qr, qs, fontSize, y, lX) : 0 === r1[y] && r2(qr, qs, fontSize, 0, 0, lX), qv && (0 < q8[y + d2.hR] || 0 < q8[y + 2 * d2.hR] || 0 < q8[y + 3 * d2.hR] || 0 < q8[y + 4 * d2.hR]) && function(qr, qs, fontSize, y, lX) {
			var a7, aj = -1;
			for (a7 = 4; 1 <= a7; a7--) 0 < q8[y + a7 * d2.hR] && aj++;
			for (a7 = 1; a7 < 5; a7++) 0 < q8[y + a7 * d2.hR] && (! function(qr, qs, fontSize, a7, y, r6, cU, lX) {
				var rL;
				if (1 === a7) {
					y = q7[y + d2.hR];
					if (!eI.fk.rG(y)) return function(qr, qs, fontSize, rF, r6, lX) {
						lX.globalAlpha = rA(fontSize);
						qr -= .534 * r6 * fontSize, r6 = qs + 1.59 * fontSize;
						lX.font = g.h.fn(0, .785 * fontSize), lX.fillText(eI.fk.rK(rF), qr, r6), lX.globalAlpha = 1
					}(qr, qs, fontSize, y, r6, lX);
					rL = eI.eJ.rI[y - 1024 + eI.fk.rJ]
				} else rL = 2 === a7 ? eD.rN()[4].canvas[+(cU < 255)] : (3 === a7 ? eD.rN()[5] : eD.rN()[6]).canvas[0];
				y = eI.eJ.rH, cU = .8 * fontSize / y, a7 = qr - .5 * cU * y - .534 * r6 * fontSize, qr = qs + 1.4 * cU * y;
				lX.setTransform(cU, 0, 0, cU, a7, qr), lX.globalAlpha = rA(fontSize), lX.drawImage(rL, 0, 0), lX.globalAlpha = 1, lX.setTransform(1, 0, 0, 1, 0, 0)
			}(qr, qs, fontSize, a7, y, aj, q8[y + a7 * d2.hR], lX), aj -= 2)
		}(qr, qs, fontSize, y, lX), (qu = px * fontSize) < pz || (lX.font = g.h.fn(1, qu), qs += Math.floor(.78 * fontSize), qK ? qz(y, qu, qr, qs, lX) : qy(lX, y, qu, qr, qs, qt)))
	}

	function qz(y, fontSize, bn, bo, lX) {
		var ___id = y;
		var showName = y < d2.g6 || !__fx.settings.hideBotNames;
		if (showName) lX.fillText(cV.dQ[y], bn, bo), y < d2.g6 && 2 !== cV.oV[y] || (y = fontSize / pu[y], lX.fillRect(bn - .5 * y, bo + g.h.lT * fontSize, y, Math.max(1, .1 * fontSize)));
		qK && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (lX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			lX.fillText(__fx.utils.getDensity(___id), bn, showName ? bo + fontSize : bo)
		);
	}

	function qy(lX, y, fontSize, qr, qs, qt) {
		var ___id = y;
		y = g.gZ.gb(cV.cp[y]);
		qt >> 1 & 1 ? (lX.lineWidth = .05 * fontSize, lX.strokeStyle = qx(fontSize, qt % 2), lX.strokeText(y, qr, qs)) : (1 < qt && (lX.lineWidth = .12 * fontSize, lX.strokeStyle = qx(fontSize, qt), lX.strokeText(y, qr, qs)), lX.fillText(y, qr, qs));
		qK || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (lX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), lX.fillText(__fx.utils.getDensity(___id), qr, qs + fontSize))
	}

	function r2(qr, qs, fontSize, r6, r7, lX) {
		var r8 = .95 * fontSize / qA,
			qr = qr - .5 * r8 * q9 + .8 * r6 * fontSize,
			r6 = qs - 1.76 * r8 * qA - (.35 - g.h.lT + .7) * r7 * fontSize;
		lX.setTransform(r8, 0, 0, r8, qr, r6), lX.globalAlpha = rA(fontSize), lX.drawImage(qY.get(4), 0, 0), lX.globalAlpha = 1, lX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function rE(qr, qs, fontSize, rF, r6, lX) {
		var oZ, r9, r8;
		lX.globalAlpha = rA(fontSize), eI.fk.rG(rF) ? (oZ = eI.eJ.rH, lX.setTransform(r8 = 1.1 * fontSize / oZ, 0, 0, r8, r9 = qr - .5 * r8 * oZ - .8 * r6 * fontSize, r8 = qs - 1.55 * r8 * oZ), lX.drawImage(eI.eJ.rI[rF - 1024 + eI.fk.rJ], 0, 0), lX
			.setTransform(1, 0, 0, 1, 0, 0)) : (r9 = qr - .8 * r6 * fontSize, r8 = qs - (.35 - g.h.lT + 1) * fontSize, lX.fillText(eI.fk.rK(rF), r9, r8)), lX.globalAlpha = 1
	}

	function qx(fontSize, qt) {
		return pw <= fontSize && fontSize < pv ? aL.hM[qt] + rA(fontSize).toFixed(3) + ")" : aL.hN[qt]
	}

	function rA(fontSize) {
		return pw <= fontSize && fontSize < pv ? 1 - (fontSize - pw) / (pv - pw) : 1
	}

	function rc(rO, gF) {
		return 1 + Math.floor(py * rO * gF)
	}

	function rZ(y) {
		for (var left = pp[y], qw = pp[y] - cV.dY[y] - 1; 0 <= qw; qw--)
			if (!rg(y, --left, pq[y], ps[y])) {
				left++;
				break
			} var right = pp[y];
		for (qw = cV.dZ[y] - pp[y] - pr[y]; 0 <= qw; qw--)
			if (!rg(y, ++right + pr[y] - 1, pq[y], ps[y])) {
				right--;
				break
			} var bn = Math.floor((left + right) / 2),
			top = pq[y];
		for (qw = pq[y] - cV.da[y] - 1; 0 <= qw; qw--)
			if (!rh(y, bn, --top, pr[y])) {
				top++;
				break
			} var bottom = pq[y];
		for (qw = cV.db[y] - pq[y] - ps[y]; 0 <= qw; qw--)
			if (!rh(y, bn, ++bottom + ps[y] - 1, pr[y])) {
				bottom--;
				break
			} var bo = Math.floor((top + bottom) / 2);
		rW(y, bn, bo, pr[y], ps[y]) && (pp[y] = bn, pq[y] = bo)
	}

	function rW(player, bn, bo, gF, ae) {
		bW = Math.floor(.2 * gF);
		for (var bW, a7 = bn + gF - 1; bn <= a7; a7--)
			if (!rg(player, a7, bo, ae)) return;
		for (a7 = bo + ae - 1 - (bW = (bW = Math.floor(.25 * ae)) < 1 ? 1 : bW); bo + bW <= a7; a7--)
			if (!rh(player, bn, a7, gF)) return;
		return 1
	}

	function rg(player, bn, bo, ae) {
		return bE.de(player, 4 * (bo * bR.bS + bn)) && bE.de(player, 4 * ((bo + ae - 1) * bR.bS + bn))
	}

	function rh(player, bn, bo, gF) {
		return bE.de(player, 4 * (bo * bR.bS + bn)) && bE.de(player, 4 * (bo * bR.bS + bn + gF - 1))
	}
	this.f = function() {
		if (qK = aV.aW.data[7].value || 8 === d2.dH, qJ = 0 === (qJ = aV.aW.data[11].value) ? 280 : 1 === qJ ? 187 : 112, q4 = !1, q0 = .88, px = .5, py = 1.8, pz = 12 - 3 * aV.aW.data[9].value, po = pn = 0, pp = new Uint16Array(d2.hR), pq =
			new Uint16Array(d2.hR), pr = new Uint16Array(d2.hR), ps = new Uint16Array(d2.hR), pt = new Float32Array(d2.hR), pu = new Float32Array(d2.hR), q7 = new Uint16Array(2 * d2.hR), q8 = new Uint8Array(5 * d2.hR), qH = new Uint8Array(d2.hR),
			qI = new Uint8Array(d2.hR), qG || (q5 = q5 || document.createElement("canvas")), qL(), q2 = q1 = 0, q3 = 1, qK) {
			var y, qU;
			for (qM(), h9.font = g.h.fn(1, 100), qU = 100 / Math.floor(h9.measureText("900 000").width), y = d2.hR - 1; 0 <= y; y--) pt[y] = Math.min(qU, 2 * pu[y]);
			qF = qU, qE[0] = 100 / (qU * Math.floor(h9.measureText("5 000 000").width)), qE[1] = 100 / (qU * Math.floor(h9.measureText("50 000 000").width)), qE[2] = 100 / (qU * Math.floor(h9.measureText("500 000 000").width)), qE[3] = 100 / (
				qU * Math.floor(h9.measureText("1 000 000 000").width))
		} else qM();
		! function() {
			var y;
			for (y = d2.hR - 1; 0 <= y; y--) cV.cW[y] < 12 ? (pp[y] = cV.dY[y] + 1, pq[y] = cV.da[y] + 1, pr[y] = 1, ps[y] = 1) : (pp[y] = cV.dY[y], pq[y] = cV.da[y] + 1, pr[y] = 4, ps[y] = 2);
			if (d2.gQ)
				for (y = 0; y < d2.g6; y++) pr[y] = 0;
			q9 = qY.get(4).width, qA = qY.get(4).height
		}()
	}, this.qP = function(cT, qQ) {
		qQ > 18 * cV.cW[cT] ? (qI[cT] = 6, bE.kc[cT] = 2 + bE.kc[cT] % 2) : (qH[cT] = 4, (bE.kc[cT] < 2 || 3 < bE.kc[cT]) && (bE.kc[cT] = 6 + bE.kc[cT] % 2))
	}, this.qR = function(cT, qQ) {
		qQ > 6 * cV.cW[cT] ? (qI[cT] = 6, bE.kc[cT] = 4 + bE.kc[cT] % 2) : (qH[cT] = 4, (bE.kc[cT] < 4 || 5 < bE.kc[cT]) && (bE.kc[cT] = 8 + bE.kc[cT] % 2))
	}, this.resize = function() {
		qL(), qG || qT(q6)
	}, this.qZ = function() {
		for (var y = 0; y < d2.g6; y++) cV.dZ[y] - cV.dY[y] != 3 || cV.db[y] - cV.da[y] != 3 ? (pp[y] = cV.dY[y] + (cV.dZ[y] !== cV.dY[y] ? 1 : 0), pq[y] = cV.da[y], pr[y] = 1, ps[y] = 1) : (pp[y] = cV.dY[y], pq[y] = cV.da[y] + 1, pr[y] = 4, ps[
			y] = 2)
	}, this.qa = function(player, cF, qb) {
		! function(player, cF, qb) {
			player += cF * d2.hR;
			0 === cF ? q7[player] === qb && 0 < q8[player] ? q8[player] = 0 : (q7[player] = qb, q8[player] = eI.fk.qd(qb) ? 255 : 64) : 1 === cF ? (q8[player] = 64, q7[player] = qb) : q8[player] = qb
		}(player, cF, qb), 2 === d2.h5 && this.gR(!0)
	}, this.h8 = function() {
		qG ? qT(h9) : q4 && (1 !== q3 ? (h9.imageSmoothingEnabled = !0, h9.setTransform(q3, 0, 0, q3, 0, 0), h9.drawImage(q5, -q1 / q3, -q2 / q3), h9.setTransform(1, 0, 0, 1, 0, 0), h9.imageSmoothingEnabled = !1) : h9.drawImage(q5, -q1, -q2))
	}, this.qe = function(kH, kI) {
		q1 += kH, q2 += kI
	}, this.qf = function(kH, kI) {
		qg.qe(kH, kI)
	}, this.zoom = function(qh, k9, kB) {
		q3 *= qh, q1 = (q1 + k9) * qh - k9, q2 = (q2 + kB) * qh - kB
	}, this.gR = function(gS) {
		return !qG && !(!qD && !gS && e8.iR < qC + (1 === q3 && 0 === q1 && 0 === q2 && (d2.qj() || d2.gQ || 2 === d2.h5) ? 1e3 : qJ) || (qD = !1, qC = e8.iR, qT(q6), 0))
	}, this.qk = function(y) {
		return qW(y) * pt[y]
	}, this.ql = function(player) {
		return pt[player]
	}, this.c8 = function() {
		e8.o4() % 10 == 9 && (qD = d2.rP() && !d2.qj()), !d2.qj() && 4 <= ++po && function() {
			var y, qw, ak;
			for (po = 0, ak = 4; 1 <= ak; ak--)
				for (qw = g7.g8 - 1; 0 <= qw; qw--) y = g7.gx[qw] + ak * d2.hR, 0 < q8[y] && q8[y] < 255 && q8[y]--;
			if (2 !== d2.h5)
				for (qw = g7.g8 - 1; 0 <= qw; qw--) y = g7.gx[qw], 0 < q8[y] && q8[y] < 255 && q8[y]--
		}();
		var y, qw, aY = Math.floor(.1 * g7.g8);
		for (aY = (aY = aY < 8 ? 8 : aY) > g7.g8 ? g7.g8 : aY, y = pn + aY - 1; pn <= y; y--) qw = y % g7.g8, ! function(y) {
			var rO = qW(y) * pt[y];
			0 < pr[y] && rW(y, pp[y], pq[y], pr[y], ps[y]) ? ! function(y) {
				for (var bn, bo, gF, ae, bq = !1, ak = 0; ak < 8; ak++) {
					if (gF = pr[y] + 2, ae = ps[y] + 2, gF > cV.dZ[y] - cV.dY[y] + 1 || ae > cV.db[y] - cV.da[y] + 1) return bq;
					if (bn = pp[y] - 1, bo = pq[y] - 1, !rW(y, bn, bo, gF, ae)) return bq;
					pp[y] = bn, pq[y] = bo, pr[y] = gF, ps[y] = ae, bq = !0
				}
				return bq
			}(y) && function(y, rO) {
				for (var bn, bo, gF, ae, bq = !1, rd = pr[y], hv = 1 + Math.floor(.02 * rd), ak = 1; ak < 5; ak++) {
					if ((gF = rd + ak * hv) > cV.dZ[y] - cV.dY[y] + 1) return bq;
					if ((ae = rc(rO, gF)) > cV.db[y] - cV.da[y] + 1) return bq;
					bn = cV.dY[y] + Math.floor(Math.random() * (cV.dZ[y] - cV.dY[y] + 2 - gF)), bo = cV.da[y] + Math.floor(Math.random() * (cV.db[y] - cV.da[y] + 2 - ae)), rW(y, bn, bo, gF, ae) && (pp[y] = bn, pq[y] = bo, pr[y] = gF, ps[
						y] = ae, bq = !0)
				}
				return bq
			}(y, rO) && rZ(y) : ! function(y, rO) {
				var ae, bn = pp[y] + 1,
					bo = pq[y] + 1,
					gF = pr[y] - 2;
				for (;;) {
					if (gF < 1) {
						pr[y] = 0;
						break
					}
					if (ae = rc(rO, gF), rW(y, bn, bo, gF, ae)) return pp[y] = bn, pq[y] = bo, pr[y] = gF, ps[y] = ae, 1;
					bn++, bo++, gF -= 2
				}
				return
			}(y, rO) ? function(y, rO) {
				var bn, bo, gF, ae, ak, re, hp = cV.dZ[y] - cV.dY[y] + 1,
					rf = Math.floor(.02 * hp);
				for (re = -6 * (rf = rf < 1 ? 1 : rf), ak = hp; re <= ak; ak -= rf)
					if (ae = rc(rO, gF = 0 < ak ? ak : 1), bn = cV.dY[y] + Math.floor(Math.random() * (cV.dZ[y] - cV.dY[y] + 2 - gF)), bo = cV.da[y] + Math.floor(Math.random() * (cV.db[y] - cV.da[y] + 2 - ae)), rW(y, bn, bo, gF, ae))
						return pp[y] = bn, pq[y] = bo, pr[y] = gF, ps[y] = ae
			}(y, rO) : rZ(y)
		}(g7.gx[qw]);
		pn = (pn += aY) % g7.g8
	}, this.rS = function() {
		var y, cT, hb, hc;
		if (e8.o4() % 4 == 1)
			for (y = g7.g8 - 1; 0 <= y; y--) cT = g7.gx[y], bE.kc[cT] < 2 || ((hb = Math.max(qH[cT] - 1, 0)) === (hc = Math.max(qI[cT] - 1, 0)) ? 0 === hb && (bE.kc[cT] %= 2) : 0 === hc && bE.kc[cT] < 6 && (bE.kc[cT] += 4), qH[cT] = hb, qI[cT] =
				hc)
	}, this.rT = function(player) {
		var y = player + 2 * d2.hR,
			cU = q8[y];
		return 0 < cU && (cD.rU(50, player), q8[y] = 0, 255 === cU)
	}, this.rV = function(player) {
		return 255 === q8[player + 2 * d2.hR]
	}
}

function ri() {
	var rl, rm, rn, ro, rp, rq, rr, rs, rt, ru, rj = [
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
		rk = [
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

	function rz(hp, re) {
		for (var y = hp; y < re; y++) rl[y] = 4 * gA.gB(64 * dJ.random(), dJ.value(100)), rm[y] = 4 * gA.gB(64 * dJ.random(), dJ.value(100)), rn[y] = 4 * gA.gB(64 * dJ.random(), dJ.value(100))
	}

	function ry(hp, re) {
		for (var colorsData = d2.data.colorsData, y = hp; y < re; y++) {
			var aU = colorsData[y];
			rl[y] = 4 * (aU >> 12), rm[y] = 4 * (aU >> 6 & 63), rn[y] = 4 * (63 & aU)
		}
	}

	function sF(bq, sH) {
		f7[bq] = 0, f7[bq + 1] = 0, f7[bq + 2] = sH, f7[bq + 3] = 0, sI(bq)
	}

	function sI(bq) {
		var bn;
		sJ.sK || (bn = bE.s8(bq), bq = bE.iI(bq), sJ.sK = bn >= sL.sM[0] && bn <= sL.sM[2] && bq >= sL.sM[1] && bq <= sL.sM[3])
	}
	this.pO = new Int32Array(4), this.aM = function() {
		var pO = this.pO;
		pO[0] = -4 * bR.bS, pO[1] = 4, pO[2] = -pO[0], pO[3] = -pO[1]
	}, this.f = function() {
		if (rl = new Uint8Array(d2.hR), rm = new Uint8Array(d2.hR), rn = new Uint8Array(d2.hR), ro = new Uint8Array(d2.hR), rp = new Uint8Array(d2.hR), rq = new Uint8Array(d2.hR), rr = new Uint8Array(d2.hR), rs = new Uint8Array(d2.hR), rt =
			new Uint8Array(d2.hR), ru = new Uint8Array(d2.hR), this.kc = new Uint8Array(d2.hR), d2.gn)
			for (var hS = aL.hS, y = d2.hR - 1; 0 <= y; y--) {
				var a7 = hS[y],
					ag = gA.gB((rk[a7][3] + 1) * dJ.random(), dJ.value(100));
				rl[y] = rj[a7][0] + ag * rk[a7][0], rm[y] = rj[a7][1] + ag * rk[a7][1], rn[y] = rj[a7][2] + ag * rk[a7][2]
			} else 0 === d2.data.colorsType ? d2.data.selectableColor ? (ry(0, d2.g6), rz(d2.g6, d2.hR)) : rz(0, d2.hR) : ry(0, d2.hR);
		! function() {
			var y, bW;
			for (y = d2.hR - 1; 0 <= y; y--) bW = gA.gB(rl[y] + rm[y] + rn[y], 3), rl[y] += s7(bW - rl[y], 2), rm[y] += s7(bW - rm[y], 2), rn[y] += s7(bW - rn[y], 2), rl[y] -= rl[y] % 4, rm[y] -= rm[y] % 4, rn[y] -= rn[y] % 4
		}(),
		function() {
			for (var y = d2.hR - 1; 0 <= y; y--) rl[y] += gA.gB(y, 128), rm[y] += gA.gB(y % 128, 32), rn[y] += gA.gB(y % 32, 8), ro[y] = y % 8
		}(), this.s2(),
			function() {
				for (var y = d2.hR - 1; 0 <= y; y--) rp[y] = rl[y] < 32 ? rl[y] + 32 : rl[y] - 32, rq[y] = rm[y] < 32 ? rm[y] + 32 : rm[y] - 32, rr[y] = rn[y] < 32 ? rn[y] + 32 : rn[y] - 32
			}(),
			function() {
				for (var y = d2.hR - 1; 0 <= y; y--) rs[y] = 235 < rl[y] ? rl[y] - 20 : rl[y] + 20, rt[y] = 235 < rm[y] ? rm[y] - 20 : rm[y] + 20, ru[y] = 235 < rn[y] ? rn[y] - 20 : rn[y] + 20
			}()
	}, this.s5 = function(player) {
		var aZ = bK.s6;
		return aZ[0] = rl[player], aZ[1] = rm[player], aZ[2] = rn[player], aZ
	}, this.s2 = function() {
		for (var y = d2.hR - 1; 0 <= y; y--) this.kc[y] = rl[y] + rm[y] + rn[y] < 280 ? 0 : 1
	}, this.s8 = function(bq) {
		return gA.gB(bq, 4) % bR.bS
	}, this.iI = function(bq) {
		return gA.gB(bq, 4 * bR.bS)
	}, this.s9 = function(bn, bo) {
		return Math.floor(4 * (bo * bR.bS + bn))
	}, this.sA = function(bq) {
		var pO = this.pO;
		return this.pW(bq + pO[0]) || this.pW(bq + pO[1]) || this.pW(bq + pO[2]) || this.pW(bq + pO[3])
	}, this.sB = function(bq) {
		var pO = this.pO;
		return this.sC(bq + pO[0]) || this.sC(bq + pO[1]) || this.sC(bq + pO[2]) || this.sC(bq + pO[3])
	}, this.bt = function(bq, player) {
		var pO = this.pO;
		return this.by(bq + pO[0], player) || this.by(bq + pO[1], player) || this.by(bq + pO[2], player) || this.by(bq + pO[3], player)
	}, this.pQ = function(bq) {
		return 208 <= f7[bq + 3]
	}, this.de = function(player, bq) {
		return this.pQ(bq) && this.pZ(player, bq)
	}, this.pZ = function(player, bq) {
		return player === this.pR(bq)
	}, this.pa = function(bq) {
		return 208 <= f7[bq + 3] && f7[bq + 3] < 224
	}, this.pf = function(bq) {
		return 224 <= f7[bq + 3] && f7[bq + 3] < 248
	}, this.ky = function(bq) {
		for (var pO = this.pO, y = 3; 0 <= y; y--)
			if (this.kL(bq + pO[y])) return !0;
		return !1
	}, this.pY = function(bq) {
		return this.pQ(bq) || this.pP(bq)
	}, this.kL = function(bq) {
		return 0 === f7[bq + 3] && 2 === f7[bq + 2]
	}, this.pP = function(bq) {
		return 0 === f7[bq + 3] && 1 === f7[bq + 2]
	}, this.sD = function(bq) {
		return 0 === f7[bq + 3] && 3 === f7[bq + 2]
	}, this.sC = function(bq) {
		return 0 === f7[bq + 3] && 5 === f7[bq + 2]
	}, this.pW = function(bq) {
		return 0 === f7[bq + 3] && 3 <= f7[bq + 2]
	}, this.bF = function(bq) {
		return (f7[bq] >> 1 << 8) + f7[bq + 1]
	}, this.sE = function(bq) {
		return 1 & f7[bq]
	}, this.by = function(bq, player) {
		return this.pP(bq) || this.pQ(bq) && player !== this.pR(bq)
	}, this.pR = function(bq) {
		return f7[bq] % 4 * 128 + f7[bq + 1] % 4 * 32 + f7[bq + 2] % 4 * 8 + f7[bq + 3] % 8
	}, this.df = function(bq) {
		sF(bq, 1)
	}, this.sG = function(bq) {
		sF(bq, 2)
	}, this.pX = function(bq, player) {
		f7[bq] = rl[player], f7[bq + 1] = rm[player], f7[bq + 2] = rn[player], f7[bq + 3] = 208 + ro[player], sI(bq)
	}, this.my = function(bq, player) {
		f7[bq] = rp[player], f7[bq + 1] = rq[player], f7[bq + 2] = rr[player], f7[bq + 3] = 224 + ro[player], sI(bq)
	}, this.pS = function(bq, player) {
		f7[bq] = rs[player], f7[bq + 1] = rt[player], f7[bq + 2] = ru[player], f7[bq + 3] = 248 + ro[player], sI(bq)
	}
}

function sN() {
	var sO, sP, sQ, sR, sS, sT = 0,
		sU = 0;

	function sW(y) {
		var sX = !0,
			hb = dR.fa,
			gF = (1 === sO[y].id ? sO[y].fs.fillStyle = dR.sY : sO[y].pc === d2.hR ? sO[y].fs.fillStyle = dR.sZ : (bE.s5(sO[y].pc), sO[y].fs.fillStyle = g.color.sa(bK.s6[0], bK.s6[1], bK.s6[2], .87), 400 < g.ab.sb(bK.s6, 0, 2) && (sX = !1, hb = dR
				.dS)), sO[y].canvas.width),
			iq = (sO[y].fs.clearRect(0, 0, gF, sR), sO[y].fs.fillRect(0, 0, gF, sR), sO[y].fs.fillStyle = hb, ! function(fs, gF, sR) {
				fs.fillRect(0, 0, gF, 1), fs.fillRect(0, sR - 1, gF, 1), fs.fillRect(0, 0, 1, sR), fs.fillRect(gF - 1, 0, 1, sR)
			}(sO[y].fs, gF, sR), sP + 2 * sR < gF && (sO[y].fs.fillRect(gF - sP - sR, 0, 1, sR), sO[y].fs.fillText(cV.dQ[sO[y].pc], Math.floor((gF - sP) / 2), Math.floor(.57 * sR))), 0 !== sO[y].id ? 0 : sR);
		sO[y].fs.fillText(g.gZ.gb(sO[y].dN), Math.floor(gF - sP / 2 - iq), Math.floor(.57 * sR)),
			function(y, gF, iq, sX) {
				sO[y].fs.fillStyle = sX ? dR.oP : dR.sg;
				sX = Math.floor(sP * sO[y].dN / sO[y].si);
				sO[y].fs.fillRect(Math.floor(gF - sP - iq), sR - sS, sX, sS)
			}(y, gF, iq, sX), 0 === sO[y].id ? (se(y, gF, sX, hb), function(y, gF, sX) {
				sO[y].fs.strokeStyle = sX ? dR.sn : dR.so, sO[y].fs.fillRect(sR, 0, 1, sR);
				sX = gF - sR;
				sO[y].fs.beginPath(), sO[y].fs.moveTo(Math.floor(.3 * sR + sX), Math.floor(sR / 2)), sO[y].fs.lineTo(Math.floor(sR - .3 * sR + 0 + sX), Math.floor(sR / 2)), sO[y].fs.stroke(), sO[y].fs.beginPath(), sO[y].fs.moveTo(Math.floor(sR /
					2 + sX), Math.floor(.3 * sR)), sO[y].fs.lineTo(Math.floor(sR / 2 + sX), Math.floor(sR - .3 * sR + 0)), sO[y].fs.stroke()
			}(y, gF, sX)) : se(y, 2 * sR, sX, hb)
	}

	function se(y, gF, sX, hb) {
		sO[y].fs.strokeStyle = sO[y].sj ? dR.sk : sX ? dR.sl : dR.sm, sO[y].fs.fillStyle = hb, sO[y].fs.fillRect(gF - sR, 0, 1, sR), sO[y].fs.lineWidth = Math.max(Math.floor(sR / 12), 3), sO[y].fs.lineCap = "round";
		sX = .35;
		gF = sR + 1, sO[y].fs.beginPath(), sO[y].fs.moveTo(Math.floor(gF - sX * sR + 0), Math.floor(sX * sR)), sO[y].fs.lineTo(Math.floor(gF - sR + sX * sR), Math.floor(sR - sX * sR + 0)), sO[y].fs.stroke(), sO[y].fs.beginPath(), sO[y].fs.moveTo(Math
			.floor(gF - sR + sX * sR), Math.floor(sX * sR)), sO[y].fs.lineTo(Math.floor(gF - sX * sR + 0), Math.floor(sR - sX * sR + 0)), sO[y].fs.stroke()
	}

	function t9(aZ, t6) {
		for (var dN, y = t6 - 1; 0 <= y; y--) dN = cc.tH(d2.ed, y), aZ[y].dN !== dN && (aZ[y].dN = dN, aZ[y].si = Math.max(dN, aZ[y].si), aZ[y].oG = !0)
	}

	function tD(aZ, tB) {
		for (var a3 = d2.ed << 3, jX = b5.ax.jX, jZ = b5.ax.jZ, jL = b5.ax.jL, y = tB - 1; 0 <= y; y--) {
			var tG = jL[a3 + y],
				dN = jX[tG];
			aZ[y].dN !== dN ? (aZ[y].dN = dN, aZ[y].si = Math.max(dN, aZ[y].si), aZ[y].oG = !0) : aZ[y].sj || jZ[tG] % 64 != 5 || (aZ[y].sj = !0, aZ[y].oG = !0)
		}
	}

	function sV(tI) {
		tI.canvas = document.createElement("canvas"), bR.l0.font = sQ;
		var gF = sP;
		tI.pc < d2.hR && 0 === tI.id && (gF += Math.floor(bR.l0.measureText(cV.dQ[tI.pc] + "000").width)), gF += sR, 0 === tI.id && (gF += sR), tI.canvas.width = gF, tI.canvas.height = sR, tI.fs = tI.canvas.getContext("2d", {
			alpha: !0
		}), tI.fs.font = sQ, g.h.textBaseline(tI.fs, 1), g.h.textAlign(tI.fs, 1)
	}

	function sv(y) {
		return gM.gP() ? gG.gF - sO[y].canvas.width - j.gap : gM.bn
	}

	function sw(y) {
		return Math.floor(2 * j.gap + (gM.gP() ? d9.ae + j.gap : 0) + gM.ae + y * (1.3 * sR))
	}
	this.f = function() {
		sT = sU = 0, sO = [], this.resize()
	}, this.resize = function() {
		sQ = cD.gI, sR = cD.fontSize + 5, sR = Math.floor(1.25 * sR), eH.eV.fT() && (sR = Math.floor(1.25 * sR)), sS = Math.floor(.15 * sR), bR.l0.font = sQ, sP = Math.floor(bR.l0.measureText("02 000 000 0000").width);
		for (var y = sO.length - 1; 0 <= y; y--) sV(sO[y]), sW(y)
	}, this.gR = function() {
		for (var y = sO.length - 1; 0 <= y; y--) sO[y].oG && (sO[y].oG = !1, sW(y))
	}, this.iS = function(k9, kB) {
		if (2 !== d2.h5 && 0 !== cV.dX[d2.ed] && !d2.ea && !g.cn.cx(d2.ed))
			for (var sq, sr, ss, st = eH.eV.fT() ? sR : 0, su = eH.eV.fT() ? Math.floor(.15 * sR) : 0, y = sO.length - 1; 0 <= y; y--)
				if (sq = sv(y), sr = sw(y), ss = sO[y].canvas.width, sr - su <= kB && kB <= sr + sR + su) {
					if (sq - st <= k9 && k9 <= sq + sR + st) return sO[y].sj || (sO[y].oG = !0, sO[y].sj = !0, 0 === sO[y].id ? ee.ef.sx(sO[y].pc) : ee.ef.sy(sO[y].pc)), !0;
					if (0 === sO[y].id && sq + ss - sR - st <= k9 && k9 <= sq + ss + st) return ej.c9(3), ee.ef.sz(t0.t1(), sO[y].pc), !0
				} return !1
	}, this.c8 = function() {
		var t2, t3, aZ, t6;
		0 === cV.dX[d2.ed] || g.cn.cx(d2.ed) && !d2.ea || (t2 = sO.slice(0, sT), t3 = sO.slice(sT, sT + sU), aZ = t2, t6 = cc.t7(d2.ed), function(aZ, t6) {
			if (sT !== t6) return 1;
			for (var y = t6 - 1; 0 <= y; y--)
				if (aZ[y].pc !== cc.tF(d2.ed, y)) return 1;
			return
		}(aZ, t6) ? t9(aZ = function(aZ, t6) {
			var y, pc, ak, dN, tJ = [];
			loop: for (y = 0; y < t6; y++) {
				for (pc = cc.tF(d2.ed, y), ak = 0; ak < aZ.length; ak++)
					if (aZ[ak].pc === pc) {
						tJ.push(aZ.splice(ak, 1)[0]);
						continue loop
					} dN = cc.tH(d2.ed, y), sV(dN = {
					pc: pc,
					dN: dN,
					si: dN,
					id: 0,
					oG: !0,
					sj: !1,
					canvas: null,
					fs: null
				}), tJ.push(dN)
			}
			return tJ
		}(aZ, t6), t6) : t9(aZ, t6), t2 = aZ, t3 = function(aZ) {
			var tB = b5.ax.cX[d2.ed];
			return function(aZ, tB) {
				if (sU !== tB) return 1;
				for (var a3 = d2.ed << 3, jY = b5.ax.jY, jL = b5.ax.jL, y = tB - 1; 0 <= y; y--) {
					var tG = jL[a3 + y];
					if (aZ[y].pc !== jY[tG]) return 1
				}
				return
			}(aZ, tB) ? tD(aZ = function(aZ, tB) {
				var y, pc, ak, tJ = [],
					a3 = d2.ed << 3,
					jY = b5.ax.jY,
					jX = b5.ax.jX,
					jL = b5.ax.jL;
				loop: for (y = 0; y < tB; y++) {
					var tG = jL[a3 + y];
					for (pc = jY[tG], ak = 0; ak < aZ.length; ak++)
						if (aZ[ak].pc === pc) {
							tJ.push(aZ.splice(ak, 1)[0]);
							continue loop
						} tG = jX[tG], sV(tG = {
						pc: pc,
						dN: tG,
						si: tG,
						id: 1,
						oG: !0,
						sj: !1,
						canvas: null,
						fs: null
					}), tJ.push(tG)
				}
				return tJ
			}(aZ, tB), tB) : tD(aZ, tB), aZ
		}(t3), sT = t2.length, sU = t3.length, sO = t2.concat(t3))
	}, this.h8 = function() {
		if (0 !== cV.dX[d2.ed] && (!g.cn.cx(d2.ed) || d2.ea))
			for (var y = sO.length - 1; 0 <= y; y--) h9.drawImage(sO[y].canvas, sv(y), sw(y))
	}
}

function tK(data) {
	var n, tL, a7, em;

	function tM(tZ) {
		var aY = data.data.length;
		if (aY) {
			for (var a3, max = min = parseInt(data.data[0][0]), y = 1; y < aY; y++) var ta = parseInt(data.data[y][0]),
				min = Math.min(ta, min),
				max = Math.max(ta, max);
			a3 = tZ < 0 ? min + tZ : max + 1, t.z(8, t.eB().tb, new a1(21, {
				a2: data.a2,
				a3: a3,
				a4: a3 + Math.abs(tZ)
			}))
		}
	}
	this.show = function() {
			n.show(), this.resize()
		}, this.a5 = function() {
			n.a5()
		}, this.resize = function() {
			n.resize(), tL.resize()
		}, this.a6 = function(a7) {
			2 === a7 && n.a8[0].a9()
		}, a7 = data.data.length ? 0 : 1, a7 = [new q("⬅️ " + L(4), function() {
			t.u()
		}), new q(L(69), function() {
			tM(-10)
		}, a7, 0, 1), new q(L(70), function() {
			tM(10)
		}, a7, 0, 1), new q(L(71), function() {
			t.z(11, 10, new tN({
				a2: data.a2
			}))
		})], em = [L(72), L(73), L(74), L(75), L(76), L(0), L(1), L(2), L(77), L(78), L(42), L(43), L(3)], n = new v(em[data.a2], a7),
		function() {
			var y, bW = {
					tP: []
				},
				tP = bW.tP,
				tQ = data.data,
				aY = tQ.length;
			aY && 0 === tQ[0][0] && 0 <= (cF = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.a2]) && (t.ax.tR[cF] = tQ[0][1]);
			var hv = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.a2],
				tU = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.a2],
				cF = [
					[L(79), L(80) + " ↗", L(81)],
					[L(79), L(82), L(83), L(84) + " ↗"],
					[L(79), L(80) + " ↗", L(83)],
					[L(79), L(80) + " ↗", L(83)],
					[L(85), L(86), L(87) + " ↗", L(88) + " ↗", L(49)],
					[L(85), L(86), L(89) + " ↗", L(90) + " ↗", L(91)],
					[L(85), L(86), L(92) + " ↗", L(93) + " ↗", L(94)],
					[L(85), L(86), L(89) + " ↗", L(90) + " ↗", L(95)],
					[L(85), L(86), L(87) + " ↗", L(88) + " ↗", L(49)],
					[L(79), L(80) + " ↗", L(83)],
					[L(79), L(80) + " ↗", L(96)],
					[L(79), L(80) + " ↗", L(83)],
					[L(85), L(86), L(97) + " ↗", L(98) + " ↗", L(99)]
				];
			if (bW.em = cF[data.a2], bW.tV = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 13, 25, 25, 25]
				][data.a2], 0 === data.a2 || 2 === data.a2 || 3 === data.a2 || 9 === data.a2 || 10 === data.a2 || 11 === data.a2)
				for (y = 0; y < aY; y++) tP.push([{
					aU: tQ[y][0] + 1 + ".",
					cU: 0
				}, {
					aU: tQ[y][1],
					cU: 1,
					iy: tQ[y][4],
					iz: tQ[y][3]
				}, {
					aU: (hv * tQ[y][2]).toFixed(tU),
					cU: 0
				}]);
			else if (12 === data.a2)
				for (y = 0; y < aY; y++) {
					var tW = tQ[y][3];
					tP.push([{
						aU: "" + tQ[y][0],
						cU: 0
					}, {
						aU: "" + tQ[y][4],
						cU: 0
					}, {
						aU: tQ[y][5],
						cU: 1,
						iy: tQ[y][1],
						iz: 0
					}, {
						aU: tQ[y][6],
						cU: 1,
						iy: tQ[y][2],
						iz: 0
					}, {
						aU: aR.jI(tW % 16, tW >> 4),
						cU: 0
					}])
				} else if (1 === data.a2)
					for (y = 0; y < aY; y++) tP.push([{
						aU: tQ[y][0] + 1 + ".",
						cU: 0
					}, {
						aU: tQ[y][1],
						cU: 0
					}, {
						aU: (hv * tQ[y][2]).toFixed(tU),
						cU: 0
					}, {
						aU: tQ[y][3],
						cU: 1,
						iy: tQ[y][5],
						iz: tQ[y][4]
					}]);
				else if (4 === data.a2 || 5 === data.a2 || 6 === data.a2 || 7 === data.a2 || 8 === data.a2)
				for (y = 0; y < aY; y++) {
					var tX = tQ[y][5];
					4 === data.a2 || 8 === data.a2 ? "100%" === (tX = (tX % 64 * 100 / (tX >> 6)).toFixed(0) + "%") && (4 === data.a2 ? tX += " (" + L(100) + ")" : tX += " (" + L(101) + ")") : 5 === data.a2 ? 32768 <= tX && (tX = -(tX - 32768)) :
						tX = (hv * tX).toFixed(tU), tP.push([{
							aU: "" + tQ[y][0],
							cU: 0
						}, {
							aU: "" + tQ[y][6],
							cU: 0
						}, {
							aU: tQ[y][7],
							cU: 1,
							iy: tQ[y][1],
							iz: tQ[y][2]
						}, {
							aU: tQ[y][8],
							cU: 1,
							iy: tQ[y][3],
							iz: tQ[y][4]
						}, {
							aU: "" + tX,
							cU: 0
						}])
				}
			tL = new tY(n.x, bW)
		}()
}

function tc() {
	this.gO = function(du, font, maxWidth) {
		if (font && (h9.font = font), h9.measureText(du).width <= maxWidth) return du;
		for (var y = du.length - 1; 1 <= y; y--)
			if (du = du.substring(0, y), h9.measureText(du + "...").width <= maxWidth) return du + "...";
		return "..."
	}
}

function te() {
	var n, tf, to;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), tf.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(102), [new q("⬅️ " + L(4), function() {
		t.z(7, t.tg(7).tb)
	}), new q(L(103), function() {
		aV.ar.at(105, nu.tk.tl(tf.tm[0].tn[0].dx.value, 5)), aV.ar.at(106, nu.tk.tl(tf.tm[1].tn[0].dx.value, 8)), t.z(8, t.tg(7).tb, new a1(18))
	})]), tf = new ti(n.x, ((to = []).push(function() {
		var jk = new tr;
		return jk.ts(L(104)), jk.tt(new tu({
			value: "",
			cF: -1
		})), jk
	}()), to.push(function() {
		var jk = new tr,
			tv = (jk.ts(L(105)), new tu({
				value: "",
				cF: -1
			}));
		return tv.dx.type = "password", jk.tt(tv), jk.tt(new tw([new q(L(106), function(dx) {
			return dx.textContent === L(106) ? (dx.textContent = L(107), tv.dx.type = "text") : (dx.textContent = L(106), tv.dx.type = "password"), !0
		}).button])), jk
	}()), to))
}

function tx() {
	var ty = tz(bR.kk);
	ty && u0(ty[0], ty[1], ty[2], ty[3], ty[4])
}

function tz(kk) {
	return 2 === kk ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === kk ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === kk ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === kk ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === kk ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function u0(u1, u2, u3, u4, u5) {
	for (var bn, bo, u7, u8, qh, uA, i5 = u1.length - 1, u6 = bR.bS + bR.bU, aY = (u6 *= u6, u3.length), u9 = Array(aY), y = aY - 1; 0 <= y; y--) u9[y] = u3[y] * u3[y];
	var uB = new Array(aY),
		uC = new Array(aY),
		uD = new Array(aY),
		aU = kg.kw();
	if (void 0 === u5)
		for (u5 = new Array(aY), y = aY - 1; 0 <= y; y--) u5[y] = 0;
	for (y = 1; y < aY; y++) uB[y] = u9[y] - u9[y - 1], uC[y] = u4[y] - u4[y - 1], uD[y] = u5[y] - u5[y - 1];
	for (bn = bR.bS - 1; 0 <= bn; bn--)
		for (bo = bR.bU - 1; 0 <= bo; bo--) {
			for (u7 = u6, y = i5; 0 <= y; y--) u7 = (u8 = (bn - u1[y]) * (bn - u1[y]) + (bo - u2[y]) * (bo - u2[y])) < u7 ? u8 : u7;
			for (qh = u4[aY - 1], uA = u5[aY - 1], y = 1; y < aY; y++)
				if (u7 < u9[y]) {
					qh = u4[y - 1] + s7((u7 - u9[y - 1]) * uC[y], uB[y]), uA = u5[y - 1] + s7((u7 - u9[y - 1]) * uD[y], uB[y]);
					break
				} uE(bR.bS * bo + bn, qh, uA, aU)
		}
}

function uE(cF, qh, uA, aU) {
	qh < 500 ? aU[cF] = gA.gB(aU[cF] * qh * 2, 1e3) : 500 < qh && (aU[cF] += gA.gB(2 * (1e4 - aU[cF]) * (qh - 500), 1e3)), aU[cF] += gA.gB(uA * (10 * qh - aU[cF]), 1e3)
}

function uF() {
	var uG = 0,
		uH = 0;
	this.uI = function(bn, bo) {
		uG = bn, uH = bo
	}, this.uJ = function(code) {
		var bM, bO, bw;
		d2.ea || eb.eh || (g.cn.uK(0) || g.cn.uK(1)) && g.cn.gy(d2.ed) && (t0.iS(uG, uH) ? t0.uL = !1 : uM.iS(uG, uH) || (bM = b9.uN(uG), bO = b9.uO(uH), bw = b9.kK(bM, bO), b9.uP(bM, bO) && (0 === code ? function(bw) {
			var uT, bq, ua;
			d2.gQ ? -1 !== (uT = uU.uV(bw)) && ee.ef.uW(bw) : (bq = b9.bG(bw), bE.sC(bq) ? (uT = uX.uY.uZ(bq)) && (ua = b9.bG(uT), ua = bE.pP(ua) ? d2.hR : bE.pR(ua), ee.ef.uc(t0.t1(), uT, ua)) : (uT = uU.ud(bw)) < 0 || (bq = b9
				.bG(uT), bE.pP(bq) ? mP.pd(d2.ed) ? ee.ef.sz(t0.t1(), d2.hR) : cc.t7(d2.ed) && ue.uf(d2.hR, t0.t1()) : (ua = bE.pR(bq), mP.pb(ua, d2.ed) && (mP.pg(d2.ed, ua) ? ee.ef.sz(t0.t1(), ua) : cc.t7(d2.ed) && ue.uf(
					ua, t0.t1())))))
		}(bw) : 1 === code ? function(bw) {
			b5.ug.b3(d2.ed, bw) && ee.ef.uh(t0.t1(), bK.bL[7])
		}(bw) : 2 === code && function(bw) {
			b5.ui.uj(d2.ed, bw) && ee.ef.uk(t0.t1())
		}(bw))))
	}, this.ul = function() {
		if (!d2.ea && !eb.eh && g.cn.uK(1)) {
			var cT = d2.ed;
			if (g.cn.gy(cT)) {
				var aY = cc.t7(cT);
				if (aY < 1) ! function() {
					var cT = d2.ed;
					if (mP.pd(cT)) ee.ef.sz(t0.t1(), d2.hR);
					else
						for (var pO = bE.pO, ck = cV.ck, aY = ck[cT].length, ur = Math.floor(Math.random() * aY), y = 0; y < aY; y++)
							for (var bu = 3; 0 <= bu; bu--) {
								var fJ = ck[cT][(y + ur) % aY] + pO[bu];
								if (bE.pQ(fJ)) {
									fJ = bE.pR(fJ);
									if (fJ !== cT && (!d2.gn || mP.pb(cT, fJ))) return ee.ef.sz(t0.t1(), fJ)
								}
							}
				}();
				else {
					for (var un = 0, dN = cc.tH(cT, 0), y = 1; y < aY; y++) {
						var uo = cc.tH(cT, y);
						uo < dN && (dN = uo, un = y)
					}
					ee.ef.sz(t0.t1(), cc.tF(cT, un))
				}
			}
		}
	}, this.ek = function() {
		if (!d2.ea && !eb.eh && g.cn.gy(d2.ed) && g.cn.uK(1)) return eL.iP ? eL.up(d2.ed) ? void ee.ef.uq(1) : void 0 : void(eL.ei(d2.ed) && ee.ef.ek())
	}
}

function ut() {
	function ux(player, uv) {
		uv = b9.v6(b5.ax.jV[uv]), uv = bE.bF(b9.bG(uv));
		return !!b5.bH.bI(player, uv)
	}

	function uu(player) {
		return b5.b6.b7(player) && !b5.fG.fO()
	}
	this.uj = function(player, bw) {
		return !!uu(player) && -1 !== (bw = function(player, bw) {
			for (var aY = b5.ax.jP, jV = b5.ax.jV, jR = b5.ax.jR, vL = b9.bA(), vM = -1, y = 0; y < aY; y++) {
				var hl = b9.vD(bw, b9.v6(jV[y]));
				hl < vL && g.cn.v8(player, jR[y] >> 3) && (vL = hl, vM = y)
			}
			return vM
		}(player, bw)) && !!ux(player, bw) && (bK.bL[3] = b5.ax.jY[bw], !0)
	}, this.uy = function(player, kN) {
		return !!uu(player) && !!b5.bH.uz(kN) && !!ux(player, bK.bL[2])
	}, this.v0 = function(player, kN, v1) {
		return !! function(player, kN, v1) {
			if (uu(player) && b5.bH.uz(kN)) {
				kN = bK.bL[2];
				if (g.cn.v8(player, b5.ax.jR[kN] >> 3)) {
					if (function(player, uv) {
							return b5.bH.vK(player, uv) && (bK.aZ[0] = b5.fG.fQ(b5.ax.jb[uv]), bK.bL[1] = 6, !0)
						}(player, kN)) return 1;
					var v5 = b9.v6(b5.ax.jV[kN]),
						vA = b5.bH.vB(player, v5);
					if (-1 !== vA) {
						vA = b9.vD(vA, v5);
						if (!(v1 && 120 < vA)) {
							v1 = function(uv, vC, v5) {
								var fF = b5.ax.jb[uv],
									uv = b5.ax.jc[uv],
									vH = b9.vD(v5, fF[uv + 1]);
								if (vC <= vH) return b5.bH.vI(v5, fF[uv + 1], vH, vC);
								for (var hl = vC - vH, aY = fF.length - 1, y = uv + 1; y < aY; y++) {
									var vJ = b9.vD(fF[y], fF[y + 1]);
									if (hl <= vJ) return b5.bH.vI(fF[y], fF[y + 1], vJ, hl);
									hl -= vJ
								}
								return fF[aY]
							}(kN, vA, v5);
							if (b5.k3.vF(player, v1, 1)) return bK.bL[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, kN, v1) && (player = bK.bL[2], b5.ax.jZ[player] = 64 + b5.ax.jZ[player] % 64, b5.kQ.v3(kN, b5.ax.v4), !0)
	}
}

function vN() {
	this.ne = new vO, this.d0 = new vP, this.lB = new vQ, this.f = function() {
		this.lB.f()
	}
}

function vR() {
	var vS, bn, bo, vT, vU, vV, iR, vW, vX, vY, vZ, gap, zoom, va, vb;

	function w4(k9, kB, bq) {
		bE.pY(bq) || -1 === (k9 = b5.bH.wC(k9, kB)) ? cD.wB(bq) : cD.wD(k9)
	}

	function vu(vW) {
		for (var y = va.length - 1; 0 <= y; y--)
			if (va[y] === vW) return 1
	}

	function vs(vp) {
		var y, aY;
		if (-1 !== vp)
			for (aY = vS.length, y = 0; y < aY; y++)
				if (vS[y].iP && vS[y].bn + 1 === vp % 4 && vS[y].bo + 1 === vp >> 2) return y;
		return -1
	}

	function vq(k9, kB) {
		var h3 = gap / 2;
		return k9 < bn - vT - 3 * h3 || bn + 3 * vT + 5 * h3 < k9 || kB < bo - vT - 3 * h3 || bo + 2 * vT + 3 * h3 < kB ? -1 : 4 * (kB < bo - h3 ? 0 : kB < bo + vT + h3 ? 1 : 2) + (k9 < bn - h3 ? 0 : k9 < bn + vT + h3 ? 1 : k9 < bn + 2 * vT + 3 *
			h3 ? 2 : 3)
	}
	this.eE = function() {
		var y, ak, vd = [dR.ve, dR.vf, dR.sg, dR.vg, dR.vh];
		for (vS = new Array(10), y = 0; y < 10; y++) vS[y] = {
			id: y,
			iP: !1,
			ht: 0,
			canvas: [],
			bn: 0,
			bo: 0
		};
		for (vS[0].colors = [0, 1, 2, 3], vS[0].bn = 0, vS[0].bo = 0, vS[1].colors = [1, 4], vS[1].bn = 1, vS[1].bo = 0, vS[2].colors = [0, 1], vS[2].bn = -1, vS[2].bo = 0, vS[3].colors = [0], vS[3].bn = 0, vS[3].bo = 0, vS[4].colors = [0, 2],
			vS[4].bn = 1, vS[4].bo = 1, vS[5].colors = [3], vS[5].bn = 0, vS[5].bo = -1, vS[6].id = 20, vS[6].colors = [0], vS[6].bn = 1, vS[6].bo = -1, vS[7].id = 21, vS[7].colors = [0], vS[7].bn = 0, vS[7].bo = 1, vS[8].id = 16, vS[8]
			.colors = [0], vS[8].bn = 0, vS[8].bo = 0, vS[9].id = 10, vS[9].colors = [4], vS[9].bn = 2, vS[9].bo = 0, y = 0; y < 10; y++)
			for (ak = 0; ak < vS[y].colors.length; ak++) vS[y].canvas.push(function(id, vi) {
				if (id < 20) return g.canvas.vj(qY.get(3), id, vi);
				var vi = qY.get(3).height,
					rL = g.h.lW(vi, vi),
					lX = g.h.getContext(rL);
				20 === id ? lX.drawImage(qY.get(18), 0, 0) : 21 === id && eI.eJ.vk(eI.fk.vl + eI.fk.vm, lX, 0, 0, vi);
				return rL
			}(vS[y].id, vd[vS[y].colors[ak]]))
	}, this.rN = function() {
		return vS
	}, this.f = function() {
		va = [], bn = bo = iR = 0, vU = vV = -1e3, this.resize()
	}, this.resize = function() {
		vT = Math.floor((eH.eV.fT() ? .075 : .0468) * gG.gH), zoom = vT / qY.get(3).height, gap = Math.floor(vT / 3)
	}, this.vn = function(k9, kB) {
		return !!this.iP() && (e8.e9 = !0, !!eI.eJ.iS(k9, kB, vX) || (k9 = function(k9, kB) {
			vV = vU = -1e3;
			var vr = vs(vq(k9, kB));
			if (-1 === vr) return 0;
			if (1 !== vS[vr].colors[vS[vr].ht])
				if (5 === vr) {
					if (! function() {
							var cU = performance.now();
							vb + 4e3 < cU && (va = []);
							vb = cU
						}(), vu(vW)) return 1;
					va.push(vW), 16 < va.length && va.shift()
				} else if (6 === vr) {
				for (var y = va.length - 1; 0 <= y; y--) 0 === cV.dX[va[y]] && va.splice(y, 1);
				0 < va.length && (vv.vw(1, va, !0) && ee.cn.vx(va, vW), va = [])
			} else if (2 === vr) vy.uj(vW) && ee.ef.vz(t0.t1(), vW);
			else if (3 === vr) d2.gQ && ee.ef.uW(vY);
			else if (0 === vr)
				if (0 === vS[0].ht) {
					if (d2.w0 && d9.gd() < 350) return 1;
					ej.c9(4), ee.ef.sz(t0.t1(), vW)
				} else ue.uf(vW, t0.t1());
			else if (1 === vr) ee.ef.uh(t0.t1(), vY);
			else if (9 === vr) ee.ef.uk(t0.t1());
			else {
				if (7 === vr) return ej.c9(0), eI.eJ.show(k9, kB), 2;
				if (4 === vr) vv.vw(0, [vW], !0) && ee.cn.w1(vW);
				else {
					if (8 !== vr) return 0;
					ee.ef.uc(t0.t1(), vZ, vW)
				}
			}
			return 1
		}(k9, kB), this.a5(), 2 === k9 && (eI.eJ.iP = !0), 0 < k9))
	}, this.vo = function(k9, kB) {
		this.iP() || (vU = k9, vV = kB, iR = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = b9.uN(mouseX),
			coordY = b9.uO(mouseY),
			coord = b9.kK(coordX, coordY),
			coord = b9.bG(coord);
		b9.uP(coordX, coordY) && w4(mouseX, mouseY, coord)
	}, this.click = function(k9, kB, w2) {
		var bM = b9.uN(k9),
			bO = b9.uO(kB),
			bw = b9.kK(bM, bO),
			bq = b9.bG(bw);
		return !(!b9.uP(bM, bO) || (bM = (eH.eV.fT() ? .025 : .0144) * gG.gH, bO = performance.now(), Math.abs(k9 - vU) > bM) || Math.abs(kB - vV) > bM || iR + 500 < bO) && (iR = bO, w2 ? (w4(k9, kB, bq), !1) : eb.eh || this.iP() || !g.cn.gy(d2
			.ed) || d2.ea ? (this.a5(), !1) : (d2.gQ ? 0 <= (vY = uU.uV(bw)) && (vS[3].iP = !0) : 2 === d2.h5 ? bE.pQ(bq) && (vW = bE.pR(bq), g.cn.cx(vW) || (vS[0].iP = !0, vS[0].ht = 1, vS[7].iP = !0)) : (b5.ui.uj(d2.ed, bw) && (vS[0]
			.iP = !0, vS[0].ht = 1, vS[1].iP = !0, vS[1].ht = 0, vS[9].iP = !0, vS[9].ht = 0), b5.ug.b3(d2.ed, bw) && (vS[0].iP = !0, vS[0].ht = 1, vS[1].iP = !0, vS[1].ht = 1, vY = bK.bL[7]), bE.sC(bq) ? (vZ = uX.uY.uZ(bq)) && (
			bM = b9.bG(vZ), vS[8].iP = !0, vW = bE.pP(bM) ? d2.hR : bE.pR(bM)) : (bE.de(d2.ed, bq) && (vX = d2.ed, vS[0].iP = !0, vS[0].ht = 1, vS[7].iP = !0), -1 !== (bO = uU.ud(bw)) && (bE.pP(bO << 2) ? (vW = d2.hR, mP.pd(d2
			.ed) ? (vS[0].iP = !0, vS[0].ht = 0) : cc.t7(d2.ed) && (vS[0].iP = !0, vS[0].ht = 3)) : (vW = bE.pR(bO << 2), vS[0].ht = 1, vS[5].iP = function(vW) {
			return !g.cn.cx(vW) && !vu(vW) && vv.vw(1, [vW], !1)
		}(vW), vS[7].iP || g.cn.cx(vW) || (vX = vW, vS[7].iP = !0), vS[4].iP = !g.cn.cx(vW) && !qg.rV(vW) && vv.vw(0, [vW], !1), vS[6].iP = function(vW) {
			if (0 === va.length) return !1;
			if (performance.now() > vb + 4e3) return !(va = []);
			return !vu(vW) && ! function(vW) {
				var y;
				if (d2.gn)
					for (y = va.length - 1; 0 <= y; y--)
						if (!mP.pb(vW, va[y])) return 1;
				return
			}(vW)
		}(vW), mP.pb(vW, d2.ed) ? (mP.pg(d2.ed, vW) ? (vS[0].ht = 0, vS[0].iP = !0) : cc.t7(d2.ed) && (vS[0].ht = 3, vS[0].iP = !0), vS[0].iP = this.w9()) : (vS[2].iP = !0, vy.uj(vW) ? vS[2].ht = 0 : vS[2].ht = 1, vS[
			0].iP = !0))))), this.w5(k9, kB)))
	}, this.w5 = function(k9, kB) {
		return bn = k9 - Math.floor(vT / 2), bo = kB - Math.floor(vT / 2), !!this.iP()
	}, this.qf = function(k9, kB) {
		return !!this.iP() && (eI.eJ.iP ? !eI.eJ.wF(k9, kB) && (eI.eJ.iP = !1, e8.e9 = !0) : function(ig, k9, kB) {
			k9 = vq(k9, kB);
			if (0 <= vs(k9)) return !1;
			if ((1 === k9 || 6 === k9) && 0 <= vs(2)) return !1;
			if ((6 === k9 || 9 === k9) && 0 <= vs(10)) return !1;
			return ig.a5(), e8.e9 = !0
		}(this, k9, kB))
	}, this.a5 = function() {
		for (var y = vS.length - 1; 0 <= y; y--) vS[y].iP = !1, vS[y].ht = 0;
		eI.eJ.iP = !1
	}, this.iP = function() {
		return this.w9() || eI.eJ.iP
	}, this.w9 = function() {
		for (var aY = vS.length, y = 0; y < aY; y++)
			if (vS[y].iP) return !0;
		return !1
	}, this.h8 = function() {
		if (this.iP())
			if (eI.eJ.iP) eI.eJ.h8();
			else {
				var y, lX = h9,
					ak = vS,
					aY = ak.length,
					wI = (vT + gap) / zoom;
				for (lX.imageSmoothingEnabled = !0, lX.setTransform(zoom, 0, 0, zoom, bn, bo), y = 0; y < aY; y++) ak[y].iP && h9.drawImage(ak[y].canvas[ak[y].ht], ak[y].bn * wI, ak[y].bo * wI);
				lX.imageSmoothingEnabled = !1, lX.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function wJ() {
	var wK = 2e4;
	this.show = function() {
		if (e8.iR < wK) return !1;
		wK = e8.iR + 135e4, 2 === f1.wL && eH.eV.wM(Math.floor(135e4))
	}
}

function wN() {
	this.uY = new wO
}

function wP(wQ, wR, wS, wT, wU) {
	var self;
	this.pG = document.createElement("span"), this.resize = function() {
			this.pG.style.fontSize = ((wT - wS) * wR.offsetHeight).toFixed(1) + "px"
		}, (self = this).pG.textContent = wQ, self.pG.style.color = dR.fa, self.pG.style.font = "inherit", self.pG.style.margin = "0.1em 0.6em", self.pG.style.pointerEvents = "none", wU && (self.pG.style.fontWeight = "bold"), self.pG.style
		.whiteSpace = "nowrap", self.pG.style.display = "block", wR.appendChild(self.pG)
}

function wV() {
	var wW;

	function wr(rL, rO, bn, bo, globalAlpha) {
		bR.l0.save(), bR.l0.globalAlpha = globalAlpha, bR.l0.imageSmoothingEnabled = !1, bR.l0.scale(rO, rO), bR.l0.drawImage(rL, Math.floor(bn * (bR.bS / rO - rL.width)), Math.floor(bo * (bR.bU / rO - rL.height))), bR.l0.restore()
	}
	this.wX = 0, this.wY = 0, this.wZ = 0, this.wa = 0, this.f = function() {
		(wW = new Array(bR.wb))[0] = {
			gF: [0, 5e3, 8e3, 1e4],
			jC: [220, 250, 255, 220],
			h3: [190, 220, 0, 0],
			ak: [170, 200, 0, 0]
		}, wW[1] = {
			gF: [0, 4e3, 5e3, 6e3, 1e4],
			jC: [25, 0, 100, 0, 25],
			h3: [25, 0, 0, 0, 25],
			ak: [25, 0, 0, 0, 25]
		}, wW[2] = {
			gF: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			jC: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			h3: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ak: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, wW[3] = {
			gF: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			jC: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			h3: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ak: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, wW[4] = {
			gF: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			jC: [10, 10, 20, 10, 10, 170, 212],
			h3: [20, 20, 60, 100, 100, 110, 170],
			ak: [70, 70, 160, 30, 30, 60, 120]
		}, wW[5] = {
			gF: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			jC: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			h3: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ak: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, wW[6] = {
			gF: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			jC: [10, 10, 60, 255, 255, 200, 200],
			h3: [10, 10, 60, 255, 255, 200, 200],
			ak: [80, 80, 255, 255, 255, 200, 200]
		}, wW[7] = {
			gF: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			jC: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			h3: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ak: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, wW[8] = {
			gF: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			jC: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			h3: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ak: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, wW[9] = {
			gF: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			jC: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			h3: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ak: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, wW[20] = {
			gF: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			jC: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			h3: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ak: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, wW[21] = {
			gF: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			jC: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			h3: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ak: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.wc = function() {
		var wq, y, qw, wk, wd = function() {
				var wd;
				return bR.wj = document.createElement("canvas"), bR.wj.width = bR.bS, bR.wj.height = bR.bU, bR.l0 = bR.wj.getContext("2d", {
					alpha: !1
				}), wd = bR.l0.getImageData(0, 0, bR.bS, bR.bU), bR.l3 = wd.data, wd
			}(),
			gF = wW[bR.kk].gF,
			jC = wW[bR.kk].jC,
			h3 = wW[bR.kk].h3,
			ak = wW[bR.kk].ak,
			aU = kg.kw(),
			aY = gF.length - 2,
			wl = new Array(1 + aY),
			wm = new Array(1 + aY),
			wn = new Array(1 + aY),
			wo = new Array(1 + aY);
		for (qw = aY; 0 <= qw; qw--) wl[qw] = gF[qw + 1] - gF[qw], wm[qw] = jC[qw + 1] - jC[qw], wn[qw] = h3[qw + 1] - h3[qw], wo[qw] = ak[qw + 1] - ak[qw];
		for (y = bR.bS * bR.bU - 1; 0 <= y; y--)
			for (qw = aY; 0 <= qw; qw--)
				if (aU[y] >= gF[qw]) {
					wk = aU[y] - gF[qw], bR.l3[4 * y] = jC[qw] + s7(wm[qw] * wk, wl[qw]), bR.l3[4 * y + 1] = h3[qw] + s7(wn[qw] * wk, wl[qw]), bR.l3[4 * y + 2] = ak[qw] + s7(wo[qw] * wk, wl[qw]), bR.l3[4 * y + 3] = 255;
					break
				} bR.l0.putImageData(wd, 0, 0), bR.wg(bR.kk) && qY.dm() && bR.wg(bR.kk) && (wd = qY.dl("arena"), wq = qY.dl("territorial.io"), wr(wd, 5, .5, .5, .1), wr(wq, 2, .5, .45, .1)), bR.wi = !0, e8.e9 = !0
	}, this.ws = function() {
		for (var cT, bn, bo, wt, ur, wu, wY = 0, gF = bR.bS, ae = bR.bU, wk = gF * ae * 4, wv = f7, ww = bR.l3, y = gF - 1; 0 <= y; y--) wv[(cT = y << 2) + 2] = wv[wk - cT - 2] = 3;
		for (wk = 4 * gF, y = ae - 1; 0 <= y; y--) wv[(cT = y * wk) + 2] = wv[cT + wk - 2] = 3;
		for (wt = gF - 1, ur = ae - 1, bo = 1; bo < ur; bo++)
			for (wk = bo * gF, bn = 1; bn < wt; bn++) wu = 1 - (ww[(cT = wk + bn << 2) + 2] > ww[cT + 1] && ww[cT + 2] > ww[cT]), wv[cT + 2] = 6 - 5 * wu, wY += wu;
		this.wX = (gF - 2) * (ae - 2), this.wa = 0, bR.mS(bR.kk) && (bR.wa.wx(), bR.wa.wy(4, 5)), this.wY = d2.gC = wY - this.wa, this.wZ = this.wX - this.wY - this.wa, this.wZ && (bR.wa.wy(6, 2), bR.wa.wz())
	}
}

function x0() {
	this.m9 = function(du) {
		for (var aY = du.length, gF = lA, y = 0; y < aY; y++) gF.lC(16, du.charCodeAt(y))
	}
}

function x1() {
	var x2, x3 = [],
		x4 = -1,
		x5 = 0,
		x6 = 0;

	function xG() {
		x5 = e8.iR, (3 === this.fc ? (x6 = 1, xF) : (x4 = (x3.length + x4 + 2 * this.fc - 1) % x3.length, xE))()
	}

	function xE() {
		0 !== x3.length && (x6 = 0, x2 && x2.fp(), (x2 = new fU(xG)).at(x4, x3.length), x2.show(x3[x4]), fj.message.resize())
	}

	function xF() {
		x2 && x2.fp(), (x2 = new xH(xE)).at(x3.length), x2.show(), fj.message.resize()
	}
	this.x7 = function(x8) {
		var fi;
		2 === x8.id && 3 === x8.x9 ? fj.bH.xA(x8.iy) : (fi = fj.bH.fl(x8, fj.bH.fm(x8)), (5 !== x8.id && 6 !== x8.id || (t.tg(29).xB().xC(fi), 5 === x8.id)) && (fi = e8.iR < x5 + 2e4, x4 !== x3.length - 1 && fi || (x4 = x3.length), x3.push(x8),
			aV.aW.data[14].value || xD.play(), x2) && (aV.aW.data[13].value || x6 && fi ? x2.at(x3.length) : xE()))
	}, this.show = function() {
		xF()
	}, this.a5 = function() {
		x4 = x3.length - 1, x2 && x2.fp(), x2 = null
	}, this.resize = function() {
		x2 && x2.resize()
	}, this.xI = function() {
		return x3
	}
}

function a1(id, dy, xJ) {
	var n, cQ;

	function xO() {
		cQ.e.innerHTML += "<br>" + L(110)
	}

	function xN() {
		lA.kv(48), lA.lC(24, Math.floor(gA.pow(24) * Math.random())), lA.lC(24, Math.floor(gA.pow(24) * Math.random())), cK.f(lA.lK), aV.ar.at(110, lO.tk.xf(lO.tk.xg(8))), an.nf.xh()
	}
	this.xK = !0, this.xL = id, this.show = function() {
		n.show(), this.resize(), 15 === id ? (an.ax.xM(id) ? xN : xO)() : 16 === id ? an.ax.xM(id) ? an.ao.m7(2) : xO() : 17 === id ? an.ax.xM(id) ? an.ao.m7(3) : xO() : 18 === id ? (an.ax.close(0, 3253), an.ax.xP(0, id), xO()) : 21 === id ? an
			.ax.xM(id) ? an.xQ.xR(dy.a2, dy.a3, dy.a4) : xO() : 22 === id ? an.ax.xM(id) ? an.xQ.xS(dy.a2, dy.xT, dy.xU) : xO() : 23 === id ? an.ax.xM(id) ? an.xQ.xV(dy.xW, dy.i0) : xO() : 24 === id ? an.ax.xM(id) ? an.xQ.xX(dy.xW, dy.a3, dy
			.a4) : xO() : 25 === id ? an.ax.xM(id) ? an.nf.xY(dy) : xO() : 28 === id ? an.ax.xM(id) ? an.xQ.xZ(dy.a2, dy.xT, dy.xU) : xO() : 29 === id && (an.ax.xM(id) ? an.nf.xa(dy) : xO())
	}, this.nq = function() {
		15 === id ? xN() : 16 === id ? an.ao.m7(2) : 17 === id ? an.ao.m7(3) : 18 === id ? t.z(8, this.tb, new a1(16)) : 21 === id ? an.xQ.xR(dy.a2, dy.a3, dy.a4) : 22 === id ? an.xQ.xS(dy.a2, dy.xT, dy.xU) : 23 === id ? an.xQ.xV(dy.xW, dy.i0) :
			24 === id ? an.xQ.xX(dy.xW, dy.a3, dy.a4) : 25 === id ? an.nf.xY(dy) : 28 === id ? an.xQ.xZ(dy.a2, dy.xT, dy.xU) : 29 === id ? an.nf.xa(dy) : 1e3 === id && (this.xL = id = 25, an.nf.xY(dy))
	}, this.nr = function(code, gS, data) {
		!gS && code !== id || (15 === code || 16 === code ? t.z(7, this.tb) : 17 === code ? (an.ax.close(0, 3252), aV.ax.xb(0), aV.aW.data[117].ty && 0 < aV.aW.data[117].ty.length ? (gS = aV.ax.xc(0), aV.ar.at(105, gS.iy), aV.ar.at(106, gS
			.password), t.z(8, this.tb, new a1(16))) : (aV.ar.at(105, ""), t.ax.ay())) : 21 === code ? t.z(10, this.tb, new tK(data)) : 23 === code ? t.z(13, this.tb, new xd({
			data: data,
			xW: dy.xW
		})) : 25 === code && (t.ax.xe.iy = dy.iy, t.z(15, this.tb)))
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), cQ.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(108), [new q("⬅️ " + L(4), function() {
		xJ ? t.z(29) : t.ax.ay()
	})]), cQ = new a(n.x, L(109))
}

function xi(xj, xk) {
	this.xl = [];
	var xm = this.xl;

	function click() {
		for (var y = 0; y < xm.length; y++) xm[y].textContent = xm[y].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var cF = parseInt(this.name);
		void 0 !== xj.cF && aV.ar.at(xj.cF, cF), xk && xk(cF)
	}
	for (var xn, aY = xj.ty.length, y = 0; y < aY; y++)(xn = document.createElement("p")).textContent = "⚪ " + xj.ty[y], xn.style.margin = "0", xn.name = "" + y, xn.style.cursor = "pointer", xn.style.fontSize = "1em", xn.addEventListener("click",
		click), xm.push(xn);
	xm[xj.value].textContent = xm[xj.value].textContent.replace("⚪", "🟢")
}

function xo() {
	this.mG = 1103, this.xp = 2096, this.rVersion = 12, this.xq = 0, this.f = function() {
		this.wL = 2;
		var cU = gA.gB(this.xp, 10) % 100;
		this.eU = "20 Jul 2025 [" + gA.gB(this.xp, 1e3) + "." + (cU < 10 ? "0" : "") + cU + "." + this.xp % 10 + "]", this.mH = true, this.mI = function() {
			try {
				return window.self !== window.top
			} catch (dx) {
				return !0
			}
		}(), this.lD = (new Date).getTime() % 1048576
	}, this.xs = 0
}

function c4() {
	var xt;
	this.f = function() {
		xt = !1
	}, this.c8 = function() {
		var cT;
		if (function() {
				if (!xt) {
					if (e8.o4() % 30 != 9) return;
					if (!g.cn.xz(90)) return;
					xt = !0
				}
				return 1
			}() && (! function() {
				var fi = cD.y0(956);
				if (fi) {
					if (g.cn.y1(fi.player)) return 1;
					cD.dO(956, 0)
				}
				return
			}() && (-1 === (cT = (d2.gn ? function() {
				var id = go.y7(),
					aY = g7.g8;
				if (aL.hQ[id])
					for (var y8 = g7.gx, dI = aL.dI, y = 0; y < aY; y++) {
						var cT = y8[y];
						if (dI[cT] !== id) return cT
					} else if (1 < aY) return gq[aY - 1];
				return -1
			} : function() {
				for (var y4 = g7.g8, y5 = g7.gx, y6 = r1, y = 0; y < y4; y++) {
					var cT = y5[y];
					if (0 !== y6[cT]) return cT
				}
				return -1
			})()) ? ! function() {
				var fi = cD.y0(957);
				if (fi && fi.y9) {
					if (bE.pP(fi.y9.bw << 2)) return 1;
					cD.dO(957, 0)
				}
				return
			}() : (cD.dP(0, L(111, [cV.dQ[cT]]), 956, cT, dR.fa, dR.gT, -1, !0), 0)))) {
			var aY = k6.jm.k7;
			if (0 !== aY)
				for (var aW = k6.jm.aW, y = 0; y < aY; y++) {
					var bw = aW[y];
					if (bE.pP(bw << 2)) return void cD.dP(0, L(112, [b9.bN(bw), b9.bP(bw)]), 957, 0, dR.fa, dR.gT, -1, !0, void 0, {
						qw: 1,
						bw: bw
					})
				}
		}
	}
}

function yA() {
	var yB, yC, yD, vS;

	function yE() {
		yH(), 1 !== d2.data.colorsType && (d2.data.colorsData = null), t.yI()[19] = null, t.u()
	}

	function yF() {
		yH(), t.z(21)
	}

	function yH() {
		1 === d2.data.gameMode ? d2.o8.yJ() : 0 === d2.data.gameMode && 1 === d2.data.colorsType && g.ab.yK(yD.nW(), d2.data.colorsData, 262143)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, vS = [new q("⬅️ " + L(4), yE)], 1 === d2.data.gameMode && vS.push(new q(L(113), yF, 1, 1)), yB = new v(L(114), vS), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), 0 === d2.data.gameMode && (jk.yO(new xi({
			ty: [L(116), L(117)],
			value: d2.data.colorsType
		}, function(cF) {
			yH(), d2.data.colorsType = cF, 1 !== d2.data.colorsType || d2.data.colorsData && d2.data.colorsData.length === d2.hR || (d2.data.colorsData = new Uint32Array(d2.hR)), t.z(21)
		})), jk.tt(new yP));
		jk.tt(new yQ({
			value: d2.data.selectableColor
		}, L(118), function(value) {
			d2.data.selectableColor = value
		})), to.push(jk)
	}(vS = []), 0 === d2.data.gameMode ? 1 === d2.data.colorsType && function(to) {
		var jk = new tr;
		jk.ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.colorsData, 1)), jk.tt(yD), to.push(jk)
	}(vS) : (d2.o8.yJ(), vS.push(function() {
		var jk = new tr;
		jk.ts(L(119));
		for (var y = 0; y < aL.di.length; y++) {
			var fJ = (y + 1) % aL.di.length,
				dx = jk.yS((0 == fJ ? "" : "Team ") + aL.di[fJ]);
			y && (dx.style.marginTop = "0.5em"), jk.tt(new tu({
				cF: -1,
				value: d2.data.teamPlayerCount[fJ]
			}, 1, 0, function(dx) {
				yB.a8[1].f5(0);
				var playerCount = gA.yT(Math.floor(dx.target.value), 0, 512);
				dx.target.value = playerCount, d2.data.teamPlayerCount[dx.target.yU] = playerCount
			})).dx.yU = fJ
		}
		return jk
	}())), vS))
}

function aD() {
	this.L84 = ["Admin Election", "Blockchain", "Clan Leader Election", "Audit Log", "Back", "📜 Logs", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} has defeated {1}!", "🔑 My Account", "🏆 Leaderboards", "📈 Clan Charts", "▶️ Replay",
		"🧈 Gold Transfer", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clans", "Clan Results", "1v1 Players", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Clan Members", "Admins", "Battle Royale", "Richest Players", "Patreon Members", "Humans",
		"Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "No Admin", "Helper", "Junior Moderator", "Moderator",
		"Senior Moderator", "Lead Moderator", "Head Admin", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports", "Battle Royale Players", "Ranking",
		"Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted",
		"Bio Removed", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "⏳ Connecting...", "Find Server...", "New Connection...", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Adjust", "Colors", "Options", "Random", "Customized", "Selectable Color", "Player Count", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player",
		"Best Battle Royale Player", "Richest Player", "Top Patreon", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language",
		"An enemy ship belonging to {0} is heading towards your shore.", "Additional Income", "Default", "Uniform", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Starting Resources", "🔑 Show Account", "🚨 Moderation Actions", "🚩 Report User", "💬 Mention", "Bot Difficulty", "Mixed", "Team dependent", "Team", "This is a contest!", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}",
		"Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.",
		"{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.",
		"You have exported {10} resources to {1}.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.",
		"Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.",
		"{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Activated", "Next Contest: ", "Ship launched!", "Ship intercepted!", "Quit Game", "More", "YOU HAVE CONQUERED",
		"YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.",
		"You have earned {10} gold!", "{0} has earned {11} gold!", "Territory", "Numbers", "Statistics", "second played", "seconds played", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!",
		"Upcoming Zombie Contest!", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Territorial Income", "Interest Income", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered",
		"Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks",
		"Ships landed", "LEADERBOARD", "You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!",
		"Clan {0} has won {11} points.", "You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Refresh", "Public Profile", "🧈 Gold", "Monopolist",
		"Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Send", "Confirm",
		"Cancel", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Copy", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit", "Rating: ",
		"Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Source Account", "Send gold only to trusted accounts!", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index",
		"End Index", "Timeframe", "More Options", "Y-Axis Compression", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Type your message here...", "Choose Your Nation's Color!", "National Color",
		"Red: ", "Green: ", "Blue: ", "Team {0}", "Team {0} has won the game!", "Loading", "Spawning", "Selectable Spawn", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies",
		"Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Replay Error", "Warning", "Loading...", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World",
		"Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Clan Chart", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name"
	]
}

function tw(yV) {
	var d = document.createElement("div");
	this.dx = d, this.yW = yV, this.resize = function() {
		for (var aY = yV.length, y = 1; y < aY; y++) g.h.fo(yV[y], 4)
	};
	var y, aY = yV.length;
	for (d.style.width = "100%", d.style.height = "2.7em", d.style.marginTop = "0.6em", d.style.border = "inherit", y = 0; y < aY; y++) yV[y].style.verticalAlign = "top", yV[y].style.width = (100 / aY).toFixed(2) + "%", yV[y].style.height = "100%",
		yV[y].style.fontSize = "0.75em", d.appendChild(yV[y])
}

function yX() {
	var yc, yd, yY = document.createElement("div"),
		yZ = document.createElement("div"),
		ya = document.createElement("div"),
		yb = document.createElement("div"),
		vS = [],
		j8 = [L(120), L(121), L(122), L(123), L(124), L(125), L(126)],
		ye = [1, 2, 3, 0, 9, 10, 11];

	function yf(y) {
		t.z(8, 0, new a1(21, {
			a2: ye[y],
			a3: 0,
			a4: 10
		}))
	}
	this.show = function() {
			this.at(t.ax.tR), document.body.appendChild(yY)
		}, this.a5 = function() {
			document.body.removeChild(yY)
		}, this.at = function(tR) {
			for (var ym = [3, 0, 1, 2, 4, 5, 6], y = 0; y < vS.length; y++) {
				var gF = tR[y];
				yc[ym[y]][1].pG.textContent = gF || ""
			}
		}, this.resize = function() {
			var y, h3 = j.gap,
				ae = g.h.le(.085),
				gF = Math.min(4 * ae, gG.gF - 2 * h3),
				aY = vS.length;
			for (g.h.lZ(yY, h3, gG.ae - h3 - ae, gF, ae), g.h.fo(yY), g.h.fo(yZ, 6), y = 0; y < aY - 1; y++) g.h.fo(vS[y].button, 6);
			for (y = 0; y < aY; y++) yc[y][0].resize(), yc[y][1].resize();
			for (vS[0].bn = 0, vS[0].button.style.left = g.h.i(vS[0].bn), vS[0].button.style.width = g.h.lb(1.7 * ae), y = 1; y < aY; y++) vS[y].bn = vS[y - 1].bn + vS[y - 1].button.offsetWidth, vS[y].button.style.left = g.h.i(vS[y].bn);
			if (!yd) {
				if (!qY.dm()) return;
				(yd = qY.get(14)).style.width = "24%", yd.style.position = "absolute", yZ.appendChild(yd)
			}
			yd.style.left = g.h.i(0), yd.style.top = "7%", ya.lq && (ya.scrollLeft = ya.lq)
		}, yY.style.position = "absolute", yZ.style.width = "25%", yZ.style.height = "100%", yZ.style.backgroundColor = dR.fb, ya.style.position = "absolute", ya.style.width = "75%", ya.style.height = "100%", ya.style.backgroundColor = dR.fb, ya
		.style.top = ya.style.right = g.h.i(0), g.h.lo(ya), yb.style.height = yb.style.maxHeight = "100%", vS.push(new q("", function() {
			yf(0)
		}, dR.yg)), vS.push(new q("", function() {
			yf(1)
		}, dR.yh)), vS.push(new q("", function() {
			yf(2)
		}, dR.yi)), vS.push(new q("", function() {
			yf(3)
		}, dR.yj)), vS.push(new q("", function() {
			yf(4)
		}, dR.yk)), vS.push(new q("", function() {
			yf(5)
		}, dR.yl)), vS.push(new q("", function() {
			yf(6)
		}, dR.yk)), yc = new Array(vS.length);
	for (var y = 0; y < vS.length; y++) vS[y].button.style.position = "absolute", yc[y] = [new wP(j8[y], vS[y].button, .25, .45), new wP("", vS[y].button, .53, .84, 1)], vS[y].button.style.height = vS[y].button.style.maxHeight = "100%", vS[y].button
		.top = g.h.i(0), yb.appendChild(vS[y].button);
	ya.appendChild(yb), yY.appendChild(yZ), yY.appendChild(ya)
}

function yn() {
	this.yo = new Int16Array(4), this.yp = new Int16Array(4), this.yq = null, this.f = function() {
		var y;
		for (this.yo[0] = -bR.bS, this.yo[1] = 1, this.yo[2] = bR.bS, this.yo[3] = -1, this.yq = new Int16Array([-bR.bS, 1 - bR.bS, 1, bR.bS + 1, bR.bS, bR.bS - 1, -1, -bR.bS - 1]), y = 0; y < 4; y++) this.yp[y] = 4 * this.yo[y]
	}, this.bA = function() {
		return gA.yT(Math.floor(.15 * (1 + .25 * eH.eV.fT()) * gG.gH / qn), 4, 128)
	}, this.yr = function(bq, id) {
		for (var ys = this.yp, y = 0; y < 4; y++) {
			var ua = bq + ys[y];
			if (bE.kL(ua) && bE.bF(ua) === id) return !0
		}
		return !1
	}, this.yt = function(player, bq) {
		return !bE.pP(bq) && player === bE.pR(bq)
	}, this.kF = function(bM, bO, bw) {
		return (bM -= this.bN(bw)) * bM + (bO -= this.bP(bw)) * bO
	}, this.yu = function(yv, yw, i5) {
		yv = this.yx(yv) - this.yy(i5), yw = this.yz(yw) - this.z0(i5);
		return Math.sqrt(yv * yv + yw * yw)
	}, this.vD = function(bb, bd) {
		var kH = this.bN(bb) - this.bN(bd),
			bb = this.bP(bb) - this.bP(bd);
		return ~~Math.sqrt(kH * kH + bb * bb + .5)
	}, this.bm = function(bb, bd) {
		var kH = this.bN(bb) - this.bN(bd),
			bb = this.bP(bb) - this.bP(bd);
		return kH * kH + bb * bb
	}, this.kC = function(z1, z2, z3, z4) {
		return (z1 -= z3) * z1 + (z2 -= z4) * z2
	}, this.z5 = function(cT, z6) {
		return gA.gB(z6 * cV.cp[cT], 1e3)
	}, this.yx = function(yv) {
		return 16 * (yv + qm) / qn
	}, this.yz = function(yw) {
		return 16 * (yw + qo) / qn
	}, this.z7 = function(bW) {
		return 16 * bW / qn
	}, this.uN = function(yv) {
		return Math.floor((yv + qm) / qn)
	}, this.uO = function(yw) {
		return Math.floor((yw + qo) / qn)
	}, this.uP = function(bM, bO) {
		return 1 <= bM && 1 <= bO && bM < bR.bS - 1 && bO < bR.bU - 1
	}, this.bN = function(bw) {
		return bw % bR.bS
	}, this.bP = function(bw) {
		return gA.gB(bw, bR.bS)
	}, this.kK = function(bM, bO) {
		return bO * bR.bS + bM
	}, this.br = function(bM, bO) {
		return 4 * this.kK(bM, bO)
	}, this.z8 = function(bw) {
		return this.kJ(this.bN(bw), this.bP(bw))
	}, this.kJ = function(bM, bO) {
		return 0 < bM && bM < bR.bS - 1 && 0 < bO && bO < bR.bU - 1
	}, this.bG = function(bw) {
		return bw << 2
	}, this.z9 = function(bq) {
		return bq >> 2
	}, this.zA = function(bw) {
		return bR.bS * this.bP(bw) * 256 + (this.bN(bw) << 4)
	}, this.zB = function(bw) {
		return this.zA(bw) + 8 + (bR.bS << 7)
	}, this.v6 = function(i5) {
		return bR.bS * (this.z0(i5) >> 4) + (this.yy(i5) >> 4)
	}, this.jf = function(i5) {
		i5 = this.v6(i5);
		return (this.bN(i5) >> 5) + b5.je.zC * (this.bP(i5) >> 5)
	}, this.yy = function(i5) {
		return i5 % (bR.bS << 4)
	}, this.z0 = function(i5) {
		return gA.gB(i5, bR.bS << 4)
	}, this.bx = function(bw, bu) {
		return bw + this.yo[bu]
	}, this.zD = function(bq, bu) {
		return bq + this.yp[bu]
	}, this.bv = function(bb, bd) {
		var kH = this.bN(bd) - this.bN(bb),
			bd = this.bP(bd) - this.bP(bb);
		return Math.abs(kH) >= Math.abs(bd) ? 1 + 2 * (kH < 0) : 2 * (0 < bd)
	}, this.zE = function(player) {
		return this.kK(cV.dY[player] + cV.dZ[player] >> 1, cV.da[player] + cV.db[player] >> 1)
	}, this.zF = function(player) {
		return this.kK(dJ.kA(cV.dY[player], cV.dZ[player]), dJ.kA(cV.da[player], cV.db[player]))
	}
}

function zG() {
	var n, tf, to, am, jk;

	function zH() {
		var iR;
		am !== aV.aW.data[12].value ? (aX.f(), aX.al(), iR = e8.iR, t.z(4, 1, new cN(L(128), L(129), !1, [new q("⬅️ " + L(4), function() {
			t.z(1)
		}), new q("🔄 Reload", function() {
			e8.iR < iR + 1500 || eH.eV.zI()
		}, dR.zJ)]))) : t.z(1)
	}
	this.show = function() {
			am = aV.aW.data[12].value, n.show(), this.resize()
		}, this.a5 = function() {
			n.a5()
		}, this.resize = function() {
			n.resize(), tf.resize()
		}, this.a6 = function(a7) {
			2 === a7 && n.a8[0].a9()
		}, n = new v(L(16), [new q("⬅️ " + L(4), zH), new q(L(127), function() {
			t.eY(), aV.ar.n1(), t.z(2)
		})]), to = [], (jk = new tr).ts(L(130)), jk.zK(L(131)), to.push(jk),
		function(to) {
			var jk = new tr,
				aZ = (jk.ts(L(154)), aX.data.zV());
			jk.yO(new xi({
				ty: aZ,
				value: aX.data.zW(aZ)
			}, function(cF) {
				return aV.ar.at(12, aZ[cF].split(":")[0]), !0
			})), to.push(jk)
		}(to),
		function(to) {
			var jk = new tr,
				zP = (jk.ts(L(152)), []);
			jk.tt(new tw([new q(L(153), function(dx) {
				c6.zQ();
				for (var y = 0; y < zP.length; y++) zP[y].dx.value = c6.c7[y];
				return g.h.lm(dx), !0
			}).button]));
			for (var y = 0; y < c6.zR.length; y++) {
				jk.zK(c6.zR[y]);
				for (var qw = 0; qw < 2; qw++) {
					var cF = 2 * y + qw,
						zS = new tu({
							value: c6.c7[cF],
							cF: -1
						});
					zS.dx.zT = cF, zP.push(zS), zS.dx.addEventListener("keydown", function(dx) {
						dx.preventDefault();
						var code = dx.code;
						dx.target.value = code, c6.zU(dx.target.zT, code)
					}), qw && (zS.dx.style.marginLeft = "4%"), zS.dx.style.width = "48%", jk.tt(zS)
				}
			}
			to.push(jk)
		}(to), (jk = new tr).ts(L(132)), jk.yO(new xi({
			ty: ["1", "2"],
			value: zN.zO - 1
		}, function(y) {
			zN.zO = y + 1
		})), to.push(jk), (jk = new tr).ts(L(133)), aV.aW.data[1].ty = [L(134), L(135), L(136), L(137)], jk.yO(new xi(aV.aW.data[1])), to.push(jk), (jk = new tr).ts(L(138)), aV.aW.data[9].ty = [L(135), L(139), L(140)], jk.yO(new xi(aV.aW.data[9])),
		to.push(jk), (jk = new tr).ts(L(141)), aV.aW.data[11].ty = [L(142), L(143), L(144)], jk.yO(new xi(aV.aW.data[11])), to.push(jk), (jk = new tr).ts(L(145)), jk.tt(new yQ(aV.aW.data[2])), to.push(jk), (jk = new tr).ts(L(146)), jk.tt(new yQ(aV.aW
			.data[7])), to.push(jk), (jk = new tr).ts(L(147)), jk.tt(new yQ(aV.aW.data[8])), to.push(jk), (jk = new tr).ts(L(148)), jk.tt(new tu(aV.aW.data[5])), to.push(jk), (jk = new tr).ts(L(149)), jk.tt(new yQ(aV.aW.data[13], L(150))), jk.tt(
			new yQ(aV.aW.data[14], L(151))), to.push(jk), tf = new ti(n.x, to)
}

function zX() {
	var a7, gS = !1,
		zY = !1,
		zZ = -1e4,
		za = -1,
		zb = 0;

	function resize(zi) {
		a7 = 0, qY.dm() && (ze(zi) || gS) && (gS = !1, j.resize(), zj.zk.resize(), zl.f(), eF.f(), zN.resize(), no.resize(), aQ.resize(), t.resize(), 1 <= d2.h5 ? (h6.resize(!1), gM.resize(), d9.resize(), iZ.resize(), t0.resize(), cD.resize(), eb
			.resize(), zm.resize(), eL.resize(), uM.resize(), zn.resize(), eD.resize(), aO.resize(), qg.resize(), d8.resize(), go.resize(), iZ.zo()) : (av.zp(), av.zq()), e8.e9 = !0)
	}

	function zd(aU) {
		return aU && 128 < aU ? Math.floor(aU) : 128
	}

	function ze(zi) {
		var gF, ae, zs, iq, is;
		if (!(0 < gG.nT)) return iq = zd(document.documentElement.clientWidth), is = zd(window.visualViewport && 2 !== eH.id ? window.visualViewport.height : document.documentElement.clientHeight), gF = iq, ae = is, zs = 0 !== eH.id || gF < ae ?
			700 : 1200, zs = Math.min(zs / ((gF + ae) / 2), 1), zs = 0 === aV.aW.data[1].value ? 2 * zs / 3 : Math.min(zs + (aV.aW.data[1].value - 1) * (1 - zs) / 2, 1), gG.ld = (window.devicePixelRatio || 1) * zs, __fx.hoveringTooltip
			.canvasPixelScale = gG.ld, zi && !zY ? (zY = !0, document.body.removeChild(zf)) : zY && (zY = !1, document.body.appendChild(zf)), gF = Math.floor(.5 + iq * gG.ld), ae = Math.floor(.5 + is * gG.ld), gF !== gG.gF || ae !== gG.ae ? (gG
				.gF = gF, gG.ae = ae, gG.min = zv(gF, ae), gG.max = oU(gF, ae), gG.gH = gA.gB(gF + ae, 2), gG.zc = gF / ae, zf.width = gF, zf.height = ae, zf.style.width = iq + "px", zf.style.height = is + "px", za = e8.iR + 1e3, 1) : void 0
	}
	this.gF = 0, this.ae = 0, this.min = 0, this.max = 0, this.gH = 0, this.zc = 1, this.ld = 1, this.nT = 0, this.aM = function() {
		this.gF = zd(document.documentElement.clientWidth) + 2, this.ae = zd(document.documentElement.clientHeight) + 2
	}, this.f = function() {
		a7 = 1, zf = document.getElementById("canvasA"), (h9 = zf.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, ze(0)
	}, this.c8 = function() {
		50 <= ++a7 && resize(0), -1 === za || e8.iR < za || (zb++, za = -1, e8.iR + 8e3 <= 2e3 * zb ? console.log("error 3748") : eH.eV.setState(15))
	}, this.n0 = function(tZ) {
		gS = !0, resize(tZ)
	}, this.zh = function() {
		zZ + 1e3 > e8.iR || (zZ = e8.iR, resize(0))
	}
}

function zw() {
	var gap, fx, bn = [0, 0, 0, 0, 0],
		bo = [0, 0, 0, 0, 0],
		hv = [1, 1, 1, 1, 1],
		aU = [!0, !0, !0, !1, !1],
		a7 = (this.zx = [!0, !0, !0, !1, !1], null);
	this.eG = function(rL, zy) {
		a7 = rL, aU = zy, fx = [eo.eq, eo.er, eo.es, eo.es, eo.zz], this.f()
	}, this.f = function() {
		if (qY.dm()) {
			var y, iq = Math.floor((eH.eV.fT() ? .261 : .195) * gG.gH),
				ir = Math.floor(.9 * iq),
				is = Math.floor(.17 * ir);
			if (gap = eH.eV.fT() ? 2 * j.gap : j.gap, hv[0] = iq / a7[0].width, hv[1] = ir / a7[1].width, hv[2] = is / a7[2].height, hv[3] = is / a7[3].height, hv[4] = is / a7[4].height, hv[2] *= 1.7, hv[3] *= 1.07, bn[0] = gap, bn[1] = gap, bn[
					2] = gap, bn[3] = gap, bn[4] = Math.floor(2 * gap + hv[3] * a7[3].width), bo[0] = gap, bo[1] = bo[0] + gap + hv[0] * a7[0].height, bo[2] = bo[1] + gap + hv[1] * a7[1].height, bo[3] = bo[2] + gap + hv[2] * a7[2].height, bo[4] =
				bo[3], !aU[0])
				for (y = 0; y < 5; y++) bo[y] -= hv[0] * a7[0].height + gap;
			if (!aU[1])
				for (y = 2; y < 5; y++) bo[y] -= hv[1] * a7[1].height + gap
		}
	}, this.iP = function() {
		return !(7 === av.aw() && eH.eV.fT())
	}, this.iS = function(yv, yw) {
		if (a7 && this.iP())
			for (var y = aU.length - 1; 0 <= y; y--)
				if (aU[y] && this.zx[y] && bn[y] < yv && bo[y] < yw && yv < bn[y] + hv[y] * a7[y].width && yw < bo[y] + hv[y] * a7[y].height) return t.z(9, t.a0, new a00("You are leaving Territorial.io.", g.h.lj(fx[y]))), !0;
		return !1
	}, this.h8 = function() {
		if (a7 && this.iP()) {
			var y;
			for (h9.imageSmoothingEnabled = !0, y = 0; y < 5; y++) aU[y] && this.zx[y] && (h9.setTransform(hv[y], 0, 0, hv[y], bn[y], bo[y]), h9.drawImage(a7[y], 0, 0));
			h9.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a01() {
	function a09(player, dN, a05, v5) {
		var pc;
		if (bE.pP(a05)) pc = d2.hR;
		else {
			if ((pc = bE.pR(a05)) === player) return void aP.cs(player, dN - g.cn.a0D(player, dN), 12);
			if (!mP.pb(player, pc)) return void ee.a0E.a0F(player, pc, dN)
		}
		cc.a0G(player, pc) || cc.a0H(player) ? (cV.ca[player].push(v5 << 2), cc.v3(player, dN, pc), cf.a0I(player, !0)) : aP.cs(player, dN, 12)
	}
	this.c8 = function() {
		for (var jZ = b5.ax.jZ, jV = b5.ax.jV, jW = b5.ax.jW, y = b5.ax.jP - 1; 0 <= y; y--) 65535 === jW[y] && function(y, v5, bu) {
			if (6 === bu) {
				if (b5.kQ.a07(y, v5)) return b5.ax.jc[y]++, b5.ax.jW[y] = 0, 0
			} else {
				var player = b5.ax.jR[y] >> 3,
					y = b5.ax.jX[y];
				aP.a08(player), bu < 4 ? a09(player, y, v5 + b9.yo[bu] << 2, v5) : 4 === bu ? function(player, dN, v5) {
					var y, a0C, ys = b9.yp,
						ua = b9.bG(v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pP(a0C)) return a09(player, dN, a0C, v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pQ(a0C) && !bE.pZ(player, a0C)) return a09(player, dN, a0C, v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pQ(a0C)) return a09(player, dN, a0C, v5)
				}(player, y, v5) : 5 === bu && function(player, dN, v5) {
					var y, a0C, ys = b9.yp,
						ua = b9.bG(v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pQ(a0C) && bE.pZ(player, a0C)) return a09(player, dN, a0C, v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pQ(a0C)) return a09(player, dN, a0C, v5);
					for (y = 0; y < 4; y++)
						if (a0C = ua + ys[y], bE.pP(a0C)) return a09(player, dN, a0C, v5)
				}(player, y, v5)
			}
			return 1
		}(y, b9.v6(jV[y]), jZ[y] % 64) && (b5.kQ.kS(y), b5.cv.jM(y))
	}, this.a03 = function(player, bw, bu, kN) {
		if (!(4 <= bu)) {
			var a04 = d2.ed;
			if (g.cn.gy(a04) && mP.pb(player, a04) && player !== a04 && 0 !== cV.cl[a04].length) {
				var a05 = bw + b9.yo[bu] << 2;
				if (bE.pP(a05) || mP.pb(player, bE.pR(a05))) {
					for (var a06 = !1, y = 0; y < 4; y++)
						if (a05 = bw + b9.yo[y] << 2, bE.pY(a05) && !bE.pP(a05) && bE.pR(a05) === a04) {
							a06 = !0;
							break
						} a06 && (cD.dO(719, 0), cD.dP(180, L(155, [cV.dQ[player]]), 719, player, dR.oS, dR.gT, -1, !0, void 0, {
						ak: 1,
						kN: kN
					}))
				}
			}
		}
	}
}

function a0J() {
	var a0K = 0,
		a0L = null;
	this.f = function() {
		null === a0L && (a0L = new Uint16Array(2 * b5.ax.a0M)), a0K = 0
	}, this.v3 = function(a0N, kQ) {
		var a0O = a0L;
		a0O[a0K++] = a0N, a0O[a0K++] = kQ
	}, this.a0P = function(player, a0Q) {
		for (var a0O = a0L, aY = a0K, y = 0; y < aY; y += 2)
			if (a0O[y] === a0Q && b5.bH.uz(a0O[y + 1]) && player === b5.ax.jR[bK.bL[2]] >> 3) return !0;
		return !1
	}, this.kS = function(a0R) {
		var a0S = b5.ax.jZ[a0R];
		if (!(a0S < 64)) {
			var a0Q = b5.ax.jY[a0R],
				a0O = a0L,
				aY = a0K;
			for (let y = aY - 2; 0 <= y; y -= 2)
				if (a0O[y] === a0Q) {
					{
						a0W = void 0;
						var a0W = a0O[y + 1];
						b5.bH.uz(a0W) && b5.kQ.kR(bK.bL[2])
					}
					a0O[y] = a0O[aY - 2], a0O[y + 1] = a0O[aY - 1], aY -= 2
				} a0K = aY
		}
	}, this.a07 = function(a0U, a0V) {
		for (var a0W = b5.ax.jY[a0U], a0Q = -1, a0O = a0L, aY = a0K, y = 1; y < aY; y += 2)
			if (a0O[y] === a0W) {
				a0Q = a0O[y - 1];
				break
			} if (-1 === a0Q) return !1;
		if (!b5.bH.uz(a0Q)) return !1;
		var a0R = bK.bL[2],
			fF = b5.ax.jb[a0R];
		if (a0V === fF[fF.length - 1]) b5.ax.jb[a0U] = b5.fG.a0X(b5.ax.jb[a0U], b5.fG.fQ(fF));
		else {
			var a0Y = b5.bH.a0Z(fF, a0V);
			if (-1 === a0Y) return !1;
			var a0a = b5.ax.jc[a0R];
			a0Y === a0a ? (a0R = b9.v6(b5.ax.jV[a0R]), b5.ax.jb[a0U] = b5.fG.a0c(b5.ax.jb[a0U], fF, a0Y, a0V, b9.vD(fF[a0Y], a0V) > b9.vD(fF[a0Y], a0R))) : b5.ax.jb[a0U] = b5.fG.a0c(b5.ax.jb[a0U], fF, a0Y, a0V, a0a < a0Y)
		}
		return !0
	}, this.kR = function(uv) {
		var fF, ag = b5.ax,
			a0S = ag.jZ[uv];
		return a0S % 64 != 5 && (fF = ag.jb[uv], ag.jW[uv] = 65535 - ag.jW[uv], ag.jc[uv] = fF.length - ag.jc[uv] - 2, ag.jb[uv] = b5.fG.fQ(fF), ag.jZ[uv] = a0S - a0S % 64 + 5, !0)
	}
}

function a0e() {
	this.f = function() {
		if (0 === d2.data.sResourcesType) {
			for (var pj = d2.g6, cp = cV.cp, y = 0; y < pj; y++) cp[y] = 512;
			var pk = d2.hq,
				a0i = aN.a0i,
				dN = aN.dN;
			for (y = pj; y < pk; y++) cp[y] = a0i[dN[y]]
		} else(1 === d2.data.sResourcesType ? function() {
			for (var aY = d2.hq, cp = cV.cp, sResourcesValue = d2.data.sResourcesValue, y = 0; y < aY; y++) cp[y] = sResourcesValue
		} : function() {
			for (var aY = d2.hq, cp = cV.cp, sResourcesData = d2.data.sResourcesData, y = 0; y < aY; y++) cp[y] = sResourcesData[y]
		})();
		aP.dV[8] = cV.cp[d2.ed]
	}
}

function ny() {
	this.a0j = null, this.a0k = null, this.a0l = null, this.a0m = null, this.a0n = null, this.a0o = null, this.a0p = "";
	var a0q = 0;
	this.f = function() {
		this.a0j = [], this.a0k = [], this.a0l = [], this.a0m = [], this.a0n = [0], this.a0o = [0], a0q = 0, this.a0p = ""
	}, this.a0r = function(id, wk, wu, zx) {
		d2.ea || 2 === d2.h5 || (0 === this.a0n[a0q] && (this.a0o[a0q] ? (this.a0n.push(1), this.a0o.push(0), a0q++) : this.a0n[a0q] = 1), this.a0j.push(id), this.a0k.push(wk), this.a0l.push(void 0 === wu ? 0 : wu), this.a0m.push(void 0 === zx ?
			0 : zx), this.a0o[a0q]++)
	}, this.c8 = function() {
		0 === this.a0n[a0q] ? this.a0o[a0q]++ : (this.a0n.push(0), this.a0o.push(0), a0q++)
	}
}

function a0s() {
	cD.c8(), qg.c8(), d9.gg(), an.ax.c8()
}

function a0t() {
	ue.c8(), a0u.c8(), vy.c8(), gW.c8(), a0v.c8(), cf.c8(), k6.c8(), b5.ax.c8(), g7.a0w(), h6.c8(), dL.c8(), ej.c8(), qg.c8(), qg.rS(), d9.c8(), a0x.c8(), gM.c8(), uM.c8(), cD.c8(), vv.c8(), t0.c8(), eL.c8(), aP.c8(), go.c8(), an.ax.c8(), an.a0y
	.c8(), t.c8(), a0z.c8(), e8.c8()
}

function a10() {
	kq.c8(), d8.c8(), zn.c8(), a11.c8(), zm.c8(), a12.a13()
}

function a14() {
	h6.gR(!1), uM.gR(), d9.gR(!1), gM.gR(), t0.gR(), eL.gR(), qg.gR(!1), go.iM()
}

function a15() {
	qg.gR(!1) && (e8.e9 = !0), an.ax.c8()
}

function hF() {
	this.f = function() {
		! function() {
			var data = aV.aW.data;
			0 === data[2].eU && (gG.ae > gG.gF || 0 !== eH.id) && (data[2].value = data[2].n2 = 1);
			0 === data[100].eU && (data[100].value = data[100].n2 = (0 === eH.id ? "Player " : 1 === eH.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var y, aU, data = aV.aW.data,
			aY = data.length;
		for (y = 0; y < aY; y++) data[y] && data[y].eU === aV.a9.a18(y, !0) && (aU = aV.a9.a19(y), data[y].value = null === aU ? data[y].n2 : 2 === data[y].type ? aU : Number(aU))
	}
}

function a1A() {
	var a1B, a1C, size, pc, dN, a1D;

	function a1E(player) {
		return player < d2.g6 ? a1B * player : a1B * d2.g6 + a1C * (player - d2.g6)
	}
	this.f = function() {
		a1B = d2.g6 < 16 ? 12 : 8, a1C = 4;
		var aY = a1E(d2.hR);
		size = new Uint8Array(d2.hR), pc = new Uint16Array(aY), dN = new Uint32Array(aY), a1D = new Uint8Array(aY)
	}, this.a1F = function(a1G, a1H) {
		var a1I = this.mv(a1G, a1H),
			a1H = (this.mu(a1G, a1H, 0), g.cn.a0D(a1G, a1I));
		aP.cs(a1G, a1I - a1H, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.dE = function(player, a1H) {
		var a1L, a1H = function(player, a1H) {
			var y, ag = a1E(player);
			for (y = size[player] - 1; 0 <= y; y--)
				if (pc[ag + y] === a1H) return y;
			return size[player]
		}(player, a1H);
		a1H !== size[player] && (a1L = dN[a1E(player) + a1H], this.a1M(player, a1H), this.v3(player, a1L, d2.hR))
	}, this.a0G = function(player, a1H) {
		for (var ag = a1E(player), y = size[player] - 1; 0 <= y; y--)
			if (pc[ag + y] === a1H) return !0;
		return !1
	}, this.a0H = function(player) {
		return player < d2.g6 ? size[player] < a1B : size[player] < a1C
	}, this.t7 = function(player) {
		return size[player]
	}, this.tF = function(player, y) {
		return pc[a1E(player) + y]
	}, this.tH = function(player, y) {
		return dN[a1E(player) + y]
	}, this.mv = function(player, a1H) {
		for (var ag = a1E(player), y = size[player] - 1; 0 <= y; y--)
			if (pc[ag + y] === a1H) return dN[ag + y];
		return 0
	}, this.cr = function(player) {
		for (var ag = a1E(player), aU = 0, y = size[player] - 1; 0 <= y; y--) aU += dN[ag + y];
		return aU
	}, this.mu = function(player, a1H, a1L) {
		for (var ag = a1E(player), y = size[player] - 1; 0 <= y; y--) pc[ag + y] === a1H && (dN[ag + y] = a1L)
	}, this.mY = function(player, y, a1L) {
		dN[a1E(player) + y] = Math.max(a1L, 0)
	}, this.mc = function(player, y) {
		a1D[a1E(player) + y] = 0
	}, this.a1N = function(player, y) {
		return a1D[a1E(player) + y]
	}, this.v3 = function(player, a1L, a1H) {
		g.cn.co(a1H) && aP.dV[6 - g.cn.cx(player)]++;
		for (var ag = a1E(player), y = size[player] - 1; 0 <= y; y--)
			if (pc[ag + y] === a1H) return dN[ag + y] += a1L, void(dN[ag + y] = dN[ag + y] > d2.qV ? d2.qV : dN[ag + y]);
		pc[ag + size[player]] = a1H, dN[ag + size[player]] = a1L, a1D[ag + size[player]] = 1, size[player]++, player < d2.g6 && (a1H === d2.ed ? cD.dU(player, 5) : player === d2.ed && qg.rT(a1H))
	}, this.a1M = function(player, cF) {
		var qw, ag;
		if (0 !== size[player])
			for (ag = a1E(player), size[player]--, qw = cF; qw < size[player]; qw++) pc[ag + qw] = pc[ag + qw + 1], dN[ag + qw] = dN[ag + qw + 1], a1D[ag + qw] = a1D[ag + qw + 1]
	}, this.cd = function(player) {
		for (var qw, ag, d4 = [], y = g7.g8 - 1; 0 <= y; y--)
			for (ag = a1E(g7.gx[y]), qw = size[g7.gx[y]] - 1; 0 <= qw; qw--)
				if (pc[ag + qw] === player) {
					d4.push(g7.gx[y]);
					break
				} return d4
	}
}

function jn() {
	var a1O = 0,
		a1P = 0,
		a1Q = 300,
		a1R = 300,
		a1S = 0;
	this.k7 = 0, this.aW = new Uint32Array(512), this.f = function() {
		a1P = a1O = 0, this.k7 = 0, a1S = 0
	}, this.c8 = function() {
		if (function() {
				var aY = k6.jm.k7;
				if (0 === aY) return 1;
				var aW = k6.jm.aW;
				if (e8.o4() % 35 == 6) {
					for (var y = aY - 1; 0 <= y; y--) bE.pP(aW[y] << 2) || (aY--, aW[y] = aW[aY]);
					k6.jm.k7 = aY
				}
				return aY < aW.length
			}())
			if (a1Q <= a1O) {
				var a1W = k6.jm.k7;
				if (a1W) {
					if (e8.o4() % 350 != 1) return;
					if (a1S !== a1W) return void(a1S = a1W);
					if (!g.cn.cx(gq[0])) return
				} else if (e8.o4() % 12 != 8) return;
				g.cn.a1X() || k6.jm.f()
			} else {
				var y, gF = bR.bS,
					a1Y = gF - 2,
					a1W = a1Y * (bR.bU - 2),
					a1Z = a1Q,
					aW = k6.jm.aW,
					ag = k6.jm.k7,
					a1a = aW.length,
					kD = Math.min(a1P + a1Z * ((1 + 19 * k6.performance.k8) * a1R), a1W);
				for (y = a1P; y < kD; y += a1Z) {
					var bq = 4 * (y % a1Y + (gA.gB(y, a1Y) + 1) * gF + 1);
					if (bE.pP(bq) && (aW[ag] = bq >> 2, ++ag === a1a)) {
						y += a1Z;
						break
					}
				}(a1P = y) >= a1W && (a1P = ++a1O), k6.jm.k7 = ag
			}
	}
}

function a1b(wQ, wR, a1c, a1d) {
	var self;
	this.pG = document.createElement("span"), (self = this).pG.textContent = wQ, self.pG.style.color = dR.fa, self.pG.style.position = "absolute", self.pG.style.font = "inherit", a1d ? self.pG.style.bottom = "0.06em" : self.pG.style.top = "0.12em",
		a1c ? self.pG.style.left = "0.2em" : self.pG.style.right = "0.2em", self.pG.style.fontSize = "0.6em", self.pG.style.pointerEvents = "none", self.pG.style.whiteSpace = "pre", wR.style.position = "relative", wR.style.overflow = "hidden", wR
		.appendChild(self.pG)
}

function a1e() {
	this.a1f = 28, this.a1g = 0, this.a1h = null;
	var a1j = this.a1i = null;

	function a1n(oZ, a1p) {
		var bn, bo, bw, kH, rL = g.h.lW(oZ, oZ),
			lX = g.h.getContext(rL, !0),
			wd = g.h.getImageData(lX, oZ, oZ),
			eJ = wd.data,
			ag = (oZ >> 1) - .5,
			a1q = .5 + ag;
		for (a1q *= a1q, bo = 0; bo < oZ; bo++)
			for (bn = 0; bn < oZ; bn++) kH = (kH = bn - ag) * kH + (kH = bo - ag) * kH, eJ[bw = 4 * (bo * oZ + bn)] = a1p[0], eJ[1 + bw] = a1p[1], eJ[2 + bw] = a1p[2], eJ[3 + bw] = (a1q - kH) * a1p[3] / a1q;
		return lX.putImageData(wd, 0, 0), rL
	}

	function a1t(y, lX, rL, oZ) {
		var highlight, bn, bo;
		0 !== cV.dX[y] && 0 !== cV.cW[y] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[y]) && (oZ *= 2), bn = cV.dY[y] + cV.dZ[y] + 1 - oZ - 2 >> 1, bo = cV.da[y] + cV.db[y] + 1 - oZ - 2 >> 1, highlight ? lX
			.drawImage(rL[d2.gn ? 9 === d2.dH && 5 === aN.dN[y] ? 3 : aL.dI[y] : y < d2.g6 ? 1 : 0], bn, bo, oZ, oZ) : lX.drawImage(rL[d2.gn ? 9 === d2.dH && 5 === aN.dN[y] ? 3 : aL.dI[y] : y < d2.g6 ? 1 : 0], bn, bo))
	}
	this.f = function() {
		var ig;
		this.a1g = 700,
			function(ig) {
				var oZ = ig.a1f;
				if (ig.a1i = [], a1j = [], d2.gn) {
					for (var y = 0; y <= d2.i4; y++) ig.a1i.push(a1n(oZ, aL.hO[aL.hQ[y]])), a1j.push(a1n(oZ >> 1, aL.hO[aL.hQ[y]]));
					9 === d2.dH && a1j.push(a1n(oZ, aL.hO[1]))
				} else ig.a1i.push(a1n(oZ, aL.hO[7])), ig.a1i.push(a1n(oZ, aL.hO[4])), a1j.push(a1n(oZ >> 1, aL.hO[7]))
			}(this),
			function(ig, a1r) {
				var y, a1h = ig.a1h,
					lX = g.h.getContext(a1h, !0),
					aY = d2.hR,
					oZ = ig.a1f >> 1;
				lX.imageSmoothingEnabled = !1, lX.setTransform(1, 0, 0, 1, 0, 0), a1r && lX.clearRect(0, 0, a1h.width, a1h.height);
				if (9 === d2.dH) {
					oZ <<= 1;
					ig = dL.i8[5];
					for (y = aY - ig; y < aY; y++) a1t(y, lX, a1j, oZ);
					aY -= ig, oZ >>= 1
				}
				for (y = d2.g6; y < aY; y++) a1t(y, lX, a1j, oZ)
			}(this, null !== (ig = this).a1h && ig.a1h.width === bR.bS - 2 && ig.a1h.height === bR.bU - 2 || (ig.a1h = g.h.lW(bR.bS - 2, bR.bU - 2), !1)), d2.gQ || this.a1m()
	}, this.a1o = a1n, this.a1m = function() {
		for (var aY = d2.g6, oZ = this.a1f, a1i = this.a1i, lX = g.h.getContext(this.a1h, !0), y = 0; y < aY; y++) a1t(y, lX, a1i, oZ)
	}
}

function a1u() {
	this.b7 = function(player) {
		return !!d2.data.passableWater && b5.ax.jP !== b5.ax.a0M && b5.ax.cX[player] !== b5.ax.a1v && 0 !== cV.cl[player].length
	}, this.a1w = function(b4) {
		var a0S = bK.bL[1];
		return !(4 <= a0S || !b5.bH.bs(b9.bG(b4))) && bE.pY(b9.bG(b9.bx(b4, a0S)))
	}
}

function a1x() {
	var bn, bo, ae, a1y, a1z, a20, a21, a22, a23, gF, lk, a24;
	this.iP = !1, this.f = function(du, a25) {
		if (1 === eH.id && 13 <= eH.eU && eH.eU < 18) return a25 ? void(lk = du) : lk !== du ? void 0 : void eH.p1.saveString(200, du);
		a25 && (lk = du, (a24 = document.createElement("a")).appendChild(document.createTextNode(lk)), this.iP = !0, a24.title = lk, a24.target = "_blank", a24.href = lk, a24.style.textAlign = "center", a24.style.color = dR.fa, a24.style
			.position = "absolute", a24.style.padding = "0px", a24.style.margin = "0px", this.resize(), document.body.appendChild(a24), e8.e9 = !0)
	}, this.a5 = function() {
		return !(!this.iP || (document.body.removeChild(a24), this.iP = !1))
	}, this.iS = function(yv, yw) {
		return !!this.iP && ((yv < bn || yw < bo || bn + gF < yv || bo + ae < yw || bn + gF - a1y < yv && yw < bo + a1y) && (e8.e9 = !0, this.iP = !1, document.body.removeChild(a24)), !0)
	}, this.resize = function() {
		var gI, rd;
		this.iP && (a22 = Math.floor(.8 * (eH.eV.fT() ? gG.gF > gG.ae ? .6 : .55 : .4) * gG.gH), a1y = Math.floor(.15 * a22), a1z = Math.floor(.35 * a1y), a20 = Math.floor(.5 * a1y), a21 = Math.floor(2.5 * a20), ae = a1y + a1z + 3 * a20, gI = g.h
			.fn(1, a1z / gG.ld), a23 = Math.floor(gG.ld * zn.measureText(lk, gI)), rd = gF = (a22 < a23 ? a23 : a22) + 2 * a21, gF = Math.min(gF, gG.gF - 2 * (eH.eV.fT() ? 2 : 1) * j.gap), gI = g.h.fn(1, gF / rd * a1z / gG.ld), a23 = Math
			.floor(gG.ld * zn.measureText(lk, gI)), bn = Math.floor((gG.gF - gF) / 2), bo = Math.floor((gG.ae - ae) / 2), a24.style.font = gI, a24.style.top = Math.floor((bo + 1.4 * a20 + a1y) / gG.ld) + "px", a24.style.left = Math.floor((
				bn + (gF - a23) / 2) / gG.ld) + "px")
	}, this.h8 = function() {
		this.iP && (h9.fillStyle = dR.gT, h9.fillRect(bn, bo + a1y, gF, ae - a1y), h9.fillStyle = dR.a26, h9.fillRect(bn, bo, gF, a1y), h9.fillStyle = dR.fa, h9.lineWidth = j.a27, h9.strokeStyle = dR.fa, h9.strokeRect(bn, bo, gF, ae), h9
			.fillRect(bn, bo + a1y, gF, j.a27), h9.font = g.h.fn(1, .48 * a1y), g.h.textAlign(h9, 1), g.h.textBaseline(h9, 1), h9.fillText("You are leaving Territorial.io!", Math.floor(bn + (gF - .5 * a1y) / 2), Math.floor(bo + .55 * a1y)),
			eb.a28(Math.floor(bn + gF - .8 * a1y), Math.floor(bo + .25 * a1y), Math.floor(.5 * a1y)), h9.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function tY(b, data) {
	var aY = data.tP.length,
		a29 = document.createElement("div"),
		a2A = document.createElement("div"),
		yb = document.createElement("div"),
		a2B = new Array(aY),
		to = new Array(aY),
		a2C = new Array(data.em.length),
		a2D = g.color.sa(70, 70, 0, .35);

	function fh() {
		this.style.backgroundColor = g.color.fh(a2D, 160)
	}

	function a2J() {
		this.style.backgroundColor = a2D
	}

	function qL() {
		var qw;
		for (b.style.font = g.h.fn(0, g.h.lf(.026, .5, .03)), y = 1; y < a2C.length; y++) g.h.fo(a2C[y], 4);
		if (g.h.fo(a29, 2), aY) {
			for (var ub, iq = a29.offsetWidth, ir = yb.offsetWidth, y = 0; y < a2C.length; y++) ub = .01 * data.tV[y] * ir, a2C[y].style.width = (100 * ub / iq).toFixed(2) + "%";
			var ag = data.tP[0].length;
			for (y = 0; y < aY; y++)
				for (g.h.fo(a2B[y], 2), qw = 1; qw < ag; qw++) g.h.fo(to[y][qw], 4);
			a2A.a2E && (a2A.scrollTop = a2A.a2E)
		}
	}
	this.resize = function() {
			qL(), qL()
		}, b.style.display = "flex", b.style.flexDirection = "column", a2A.style.overflowX = "hidden", a2A.style.overflowY = "auto", a2A.addEventListener("scroll", function() {
			this.a2E = this.scrollTop
		}),
		function() {
			var bW, y, tP = data.tP,
				ag = aY ? tP[0].length : 0;
			for (y = 0; y < aY; y++) {
				a2B[y] = document.createElement("div"), a2B[y].style.backgroundColor = function(y) {
					return y % 2 == 1 ? g.color.sa(130, 130, 130, .35) : dR.a2L
				}(y), a2B[y].style.width = "100%", a2B[y].style.display = "flex", to[y] = new Array(ag);
				for (var qw = 0; qw < ag; qw++) to[y][qw] = bW = document.createElement("div"), bW.style.display = "flex", bW.style.justifyContent = "center", bW.style.wordBreak = "break-all", bW.style.padding = "0.4em 0em", bW.style.width = data.tV[
					qw] + "%", bW.innerHTML = tP[y][qw].aU, 1 === tP[y][qw].cU && (bW.name = "" + y, bW.style.color = dR.a2I, bW.style.backgroundColor = a2D, bW.addEventListener("mouseover", fh), bW.addEventListener("mouseout", a2J), function(bW,
					iy, iz) {
					2147483647 !== iz && bW.addEventListener("click", function() {
						lA.kv(30), lA.lC(30, iy), cK.f(lA.lK), this.style.backgroundColor = a2D, t.z(8, t.a0, new a1(25, {
							ix: 0,
							iy: lO.tk.xf(lO.tk.xg(5)),
							iz: iz
						}))
					})
				}(bW, tP[y][qw].iy, tP[y][qw].iz)), a2B[y].appendChild(bW)
			}
			for (a29.style.display = "flex", a29.style.backgroundColor = g.color.sa(0, 120, 0, .35), y = 0; y < a2C.length; y++) a2C[y] = bW = document.createElement("div"), bW.style.display = "flex", bW.style.justifyContent = "center", bW.style
				.wordBreak = "break-all", bW.style.padding = "0.4em 0em", bW.style.width = data.tV[y] + "%", bW.innerHTML = data.em[y], a29.appendChild(bW)
		}();
	for (var y = 0; y < aY; y++) yb.appendChild(a2B[y]);
	a2A.appendChild(yb), b.appendChild(a29), b.appendChild(a2A)
}

function a2M() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 !== d2.data.aIncomeType && (d2.data.aIncomeData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.aIncomeType ? (g.ab.yK(yD.nW(), d2.data.aIncomeData, 255), g.ab.max(d2.data.aIncomeData) || (d2.data.aIncomeType = 0)) : 1 !== d2.data.aIncomeType || d2.data.aIncomeValue || (d2.data.aIncomeType = 0)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(156), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(157), L(158), L(117)],
			value: d2.data.aIncomeType
		}, function(cF) {
			yH(), 2 !== cF || d2.data.aIncomeData || (d2.data.aIncomeData = new Uint8Array(d2.hR)), d2.data.aIncomeType = cF, t.z(22)
		})), to.push(jk)
	}(to = []), function(to) {
		var jk;
		1 === d2.data.aIncomeType && ((jk = new tr).ts("Value"), jk.tt(new tu({
			cF: -1,
			value: d2.data.aIncomeValue
		}, 1, 0, function(dx) {
			var value = gA.yT(Math.floor(dx.target.value), 0, 255);
			dx.target.value = d2.data.aIncomeValue = value
		})), to.push(jk))
	}(to), function(to) {
		var jk;
		2 === d2.data.aIncomeType && ((jk = new tr).ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.aIncomeData, 4)), jk.tt(yD), to.push(jk))
	}(to), to))
}

function s7(qw, ak) {
	return 0 <= qw ? gA.gB(qw, ak) : -gA.gB(-qw, ak)
}

function a2O(aU) {
	return aU * aU
}

function oU(qw, ak) {
	return ak < qw ? qw : ak
}

function zv(qw, ak) {
	return qw < ak ? qw : ak
}

function ib(qw, aU, ak) {
	return aU < qw ? qw : ak < aU ? ak : aU
}

function a2P(aU, aY) {
	for (var a7 = gA.gB(aU + 1, 2), y = 0; y < aY; y++) a7 = gA.gB(a7 + gA.gB(aU, a7), 2);
	return a7
}

function a2Q(aU, aY) {
	return aU < 1 ? 0 : a2P(aU, aY)
}

function a2R(dc, dd, iq, is, qp, qq, ir, zu) {
	return !(dc + iq <= qp || dd + is <= qq || qp + ir <= dc || qq + zu <= dd)
}

function a2S(dc, dd, iq, is, qp, qq, ir, zu) {
	return dc <= qp && dd <= qq && qp + ir <= dc + iq && qq + zu <= dd + is
}

function a2T(aU) {
	return Math.floor(!!aU * (1 + Math.log2(aU + .5)))
}

function a2U() {
	var l9, tb, a2V, a2W = ["wss://", "/s50/", "/s51/", "/s52/"],
		a2X = 0;

	function a2h() {
		an.ax.a2h(l9, tb)
	}

	function a2i(dx) {
		an.a2l.a2m(l9, new Uint8Array(dx.data))
	}

	function a2k() {}

	function a2j(dx) {
		an.ax.a2j(l9, dx)
	}
	this.f = function(cF, a2Y) {
		l9 = cF, tb = a2Y, cF = f1.xq ? "ws://localhost:" + (7130 + l9) + "/" : a2W[0] + an.ax.a2g[l9] + a2W[1 + f1.wL], (a2V = new WebSocket(__fx.customLobby.isActive() && 1 === l9 ? __fx.customLobby.getSocketURL() : cF)).binaryType =
			"arraybuffer", a2V.onopen = a2h, a2V.onmessage = a2i, a2V.onclose = a2j, a2V.onerror = a2k
	}, this.a2a = function() {
		return a2V.readyState === a2V.CONNECTING
	}, this.a2b = function() {
		return a2V.readyState === a2V.OPEN
	}, this.a2c = function() {
		return a2X
	}, this.nn = function() {
		a2X = 1
	}, this.a2d = function() {
		return this.a2a() || this.a2b()
	}, this.a2e = function(a2Y) {
		tb = a2Y
	}, this.ni = function() {
		return tb
	}, this.send = function(lK) {
		this.a2b() && a2V.send(lK)
	}, this.close = function(a2f) {
		this.a2d() && (a2V.close(a2f), this.a5())
	}, this.a5 = function() {
		a2V.onopen = null, a2V.onmessage = null, a2V.onclose = null, a2V.onerror = null
	}
}

function lz() {
	this.a2n = function() {
		if (2 === d2.a2o) d2.a2p = 2;
		else {
			if (8 === d2.dH) g.cn.cx(0) || 0 === cV.dX[0] ? d2.a2r = 1 : g.cn.cx(1) || 0 === cV.dX[1] ? d2.a2r = 0 : d2.a2r = +(cV.cW[1] > cV.cW[0]);
			else {
				if (d2.gn) {
					var a2s = go.a2t();
					if (d2.a2u = a2s, aL.hQ[a2s]) return void(d2.a2p = +(aL.dI[d2.ed] === a2s))
				}
				d2.a2r = gq[0]
			}
			d2.a2p = +(d2.a2r === d2.ed)
		}
	}
}

function a2v() {
	var yB, a2w = !0;

	function a33(p8, tI) {
		var d = document.createElement("div"),
			a34 = document.createElement("span"),
			a35 = document.createElement("span");
		a34.textContent = d9.gc(tI.iR) + ":", a34.style.color = dR.a36, a34.style.paddingRight = "0.4em", a34.style.display = "table-cell", a34.style.width = "6ch", a34.style.textAlign = "end", d.appendChild(a34), a35.textContent = tI.du, d
			.appendChild(a35), d.style.display = "table", tI.rF && function(d, rF) {
				{
					var oy;
					rF >= 1024 - eI.fk.rJ ? ((oy = document.createElement("img")).src = eI.eJ.rI[rF - 1024 + eI.fk.rJ].toDataURL(), oy.style.width = "1.5em", oy.style.height = "1.5em", oy.style.verticalAlign = "middle", d.appendChild(oy)) : ((oy =
						document.createElement("span")).textContent = eI.fk.rK(rF), oy.style.display = "inline-block", oy.style.fontSize = "1.5em", oy.style.lineHeight = "1em", oy.style.verticalAlign = "middle", d.appendChild(oy))
				}
			}(d, tI.rF), p8.appendChild(d)
	}

	function a2z() {
		a2w && (yB.x.scrollTop = yB.x.scrollHeight)
	}
	this.clear = function() {
		yB.x.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a30 = a31.a32(), aY = a30.length, p8 = document.createDocumentFragment(), y = 0; y < aY; y++) a33(p8, a30[y]);
		yB.x.appendChild(p8), a2z(), yB.show(), this.resize(), a2w = !0, a2z()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yB.x.style.padding = "0.4em " + g.h.i(j.k)
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, this.dP = function(tI) {
		var p8 = document.createDocumentFragment();
		a33(p8, tI), yB.x.appendChild(p8), a2z()
	}, (yB = new v(L(23), [new q("⬅️ " + L(4), function() {
		t.a2x(1)
	})])).x.style.overflowY = "auto", yB.x.addEventListener("scroll", function() {
		a2w = yB.x.scrollTop >= yB.x.scrollHeight - yB.x.clientHeight - 2
	})
}

function a38() {
	a39.a3A(), h9.setTransform(qn, 0, 0, qn, 0, 0), h9.imageSmoothingEnabled = qn < 3, h9.drawImage(bR.wj, iZ.s8(), iZ.iI()), a0x.a3B.h8(), h9.drawImage(f6, iZ.s8(), iZ.iI()), a39.h8(), b5.h8(), qg.h8(), (d2.iQ ? (go.h8(), zm) : (cD.h8(), h6.h8(), t0
		.h8(), zm.h8(), eL.h8(), d9.h8(), iZ.h8(), zn.h8(), go.h8(), gM.h8(), uM.h8(), eb.h8(), eD.h8(), d8.h8(), aO.h8(), a11)).h8(), t.h8()
}

function a3C(fs, gF, ae) {
	fs.clearRect(0, 0, gF, ae), fs.fillStyle = dR.gT, fs.fillRect(0, 0, gF, ae)
}

function a3D(fs, gF, ae, a3E) {
	fs.fillStyle = dR.fa, fs.fillRect(0, 0, gF, a3E), fs.fillRect(0, 0, a3E, ae), fs.fillRect(gF - a3E, 0, a3E, ae), fs.fillRect(0, ae - a3E, gF, a3E)
}

function a3F(fs, bn, bo, oZ, a3E, cT, a3G) {
	fs.fillStyle = dR.fa;
	var cT = Math.floor(oZ * cT),
		ir = (cT += (cT - a3E) % 2, Math.floor((cT - a3E) / 2)),
		oZ = Math.floor((oZ - cT) / 2);
	fs.fillRect(bn + oZ, bo + oZ + ir, cT, a3E), a3G && fs.fillRect(bn + oZ + ir, bo + oZ, a3E, cT)
}

function js() {
	this.k8 = 0, this.f = function() {
		this.k8 = 0
	}, this.c8 = function() {
		if (!this.k8 && e8.o4() % 30 == 7 && g.cn.xz(80) && (k6.performance.k8 = 1)) {
			if (d2.gn) {
				var a2s = go.y7();
				if (aL.hQ[a2s]) {
					go.a3M(a2s);
					var aZ = bK.a3N,
						aY = bK.a3O[0];
					if (0 !== aY)
						for (var a3P = Math.min(100 + 10 * (aY - 1), 400), y = 0; y < aY; y++) aN.a3Q(aZ[y], a3P)
				}
			}
			aN.a3Q(gq[0], 100)
		}
	}
}

function a3R() {
	this.uK = function(kV) {
		return 0 === kV ? 1 === d2.h5 && d2.gQ : 1 === kV ? 1 === d2.h5 && !d2.gQ : 2 === d2.h5
	}, this.gy = function(player) {
		return 0 !== cV.dX[player] && 2 !== cV.oV[player]
	}, this.d5 = function(player) {
		return player === d2.ed && 2 !== cV.oV[player]
	}, this.v8 = function(player, pc) {
		return player !== pc && (0 === aL.dI[player] || aL.dI[player] !== aL.dI[pc])
	}, this.a1X = function() {
		return g7.g8 < 2 ? 0 : d2.gn ? 1 < go.a3S() : cV.cW[gq[1]]
	}, this.a3T = function() {
		var g8 = g7.g8;
		if (0 !== g8) {
			if (!d2.gn) return !this.cx(gq[0]);
			for (var dI = aL.dI, a2s = go.y7(), gx = g7.gx, y = g8 - 1; 0 <= y; y--) {
				var cT = gx[y];
				if (dI[cT] === a2s && !this.cx(cT)) return 1
			}
		}
		return 0
	}, this.co = function(player) {
		return player === d2.ed
	}, this.cx = function(player) {
		return player >= d2.g6 || 2 === cV.oV[player]
	}, this.y1 = function(player) {
		return 0 !== cV.dX[player]
	}, this.a3U = function(player) {
		return player < d2.g6
	}, this.a3V = function(ph, pi) {
		return ph !== pi
	}, this.a0D = function(player, aU) {
		var min;
		return aU = this.a3W(player, aU), cV.cp[player] += aU, cV.cq[player] && (min = Math.min(cV.cq[player], cV.cp[player]), cV.cq[player] -= min, cV.cp[player] -= min), aU
	}, this.a3W = function(player, aU) {
		var oH = cV.cp[player];
		return aU = Math.min(aU, cV.cW[player] * d2.a3X - oH), aU = Math.min(aU, d2.qV - oH), Math.max(aU, 0)
	}, this.a3Y = function(player, z6, a3Z, a3a) {
		var oH = cV.cp[player],
			z6 = gA.gB(oH * (z6 + 1), 1024),
			a3Z = gA.gB(a3Z * oH, 1024),
			z6 = Math.min(z6, oH - a3Z);
		return 10 === d2.dH && (z6 = a0v.a3c(player, z6)), bK.a3d[0] = z6, bK.a3d[1] = a3Z, a3a <= z6
	}, this.a3e = function(player, a3f, a3g) {
		var player = cV.cp[player],
			a3b = gA.gB(64 * player, 1024);
		return a3f = Math.min(a3f, player - a3b), a3f = this.a3W(a3g, a3f), bK.a3d[0] = a3f, bK.a3d[1] = a3b, 1 <= a3f
	}, this.a3h = function(player, a3f, a3g) {
		var player = cV.cp[player],
			a3b = gA.gB(64 * player, 1024);
		return a3f = Math.min(a3f, player - a3b), this.a3W(a3g, a3f)
	}, this.a3i = function(a3f, a3g) {
		return a3f = this.a3W(a3g, a3f), bK.a3d[0] = a3f, bK.a3d[1] = 0, 1 <= a3f
	}, this.z5 = function(player, a3j) {
		return gA.gB(cV.cp[player] * (a3j + 1), 1024)
	}, this.a3k = function(player, a3Z) {
		a3Z = gA.gB(a3Z * cV.cp[player], 1024);
		bK.a3d[1] = a3Z, cV.cp[player] -= a3Z
	}, this.mt = function(player, a3l) {
		var wu, zx, ak = cV.cp[player];
		return a3l <= ak ? cV.cp[player] -= a3l : (cV.cp[player] = 0, zx = cV.cq[player] + (wu = 5 * ((ak = a3l - ak) >> 2)), aP.cs(player, wu - ak, 12), zx <= d2.a3m ? cV.cq[player] = zx : (cV.cq[player] = d2.a3m, aP.cs(player, zx - d2.a3m,
			18))), a3l
	}, this.a3n = function(player, z6) {
		var cp = cV.cp,
			oH = cp[player],
			z6 = gA.gB(oH * (z6 + 1), 1024),
			a3b = Math.max(gA.gB(oH, 10), 1e3);
		return (z6 = Math.min(z6, oH - a3b)) < 0 ? (cp[player] = 0, a3b = Math.min(1e3, oH + d2.a3m - cV.cq[player]), bK.a3d[1] = a3b, cV.cq[player] += a3b - oH, 0) : (bK.a3d[1] = a3b, 10 === d2.dH && (z6 = a0v.a3c(player, z6)), cp[player] -=
			a3b + z6, z6)
	}, this.a3o = function(player) {
		cV.cp[player] -= bK.a3d[0] + bK.a3d[1]
	}, this.a3p = function(player, pc) {
		return (pc = Math.min(pc, d2.hR)) < d2.hR && 0 === cV.dX[pc] && (pc = d2.hR), (bK.a3q[0] = pc) === d2.hR || mP.pb(player, pc)
	}, this.a3r = function(player, a3g) {
		return 0 !== cV.dX[a3g] && !mP.pb(player, a3g)
	}, this.a3s = function(player, a3t) {
		for (var cT, aY = g7.g8, a3u = 0, a3v = gq, y = 0; y < aY; y++)
			if (cT = a3v[y], !this.cx(cT)) {
				if (player === cT) return !0;
				if (++a3u > a3t) return !1
			} return !1
	}, this.xz = function(cT) {
		var gm = d2.gn ? go.gp() : cV.cW[gq[0]];
		return gm >= gA.gB(cT * d2.gC, 100)
	}, this.a3w = function(aU, min, max) {
		return Math.floor(gA.yT(isNaN(aU) ? 0 : Number(aU), min, max))
	}
}

function a3x() {
	this.gB = function(qw, ak) {
		return Math.floor((qw + .5) / ak)
	}, this.a3y = function(qw, ak) {
		return Math.floor(qw * (ak + .5))
	}, this.sqrt = function(aU) {
		return ~~Math.sqrt(aU + .5)
	}, this.pow = function(dx) {
		return Math.floor(Math.pow(2, dx) + .5)
	}, this.yT = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a3z = function(wk, wu, zx) {
		return Math.max(Math.min(wk, wu), zx)
	}, this.a40 = function(a41, a42, bn, bo) {
		bn -= a41, a41 = bo - a42, bo = 0;
		return 0 == bn ? bo = 0 <= a41 ? Math.PI : 0 : (bo = Math.atan(a41 / bn), bo += 0 < bn ? .5 * Math.PI : 1.5 * Math.PI), bo
	}, this.log2 = function(aU) {
		return Math.floor(!!aU * (1 + Math.log2(aU + .5)))
	}, this.log10 = function(aU) {
		return Math.floor(Math.log10(aU + .5))
	}, this.a44 = function(a45, a46, a47, a48, a49) {
		return a47 - a49 < a45 && a45 < a47 + a49 && a48 - a49 < a46 && a46 < a48 + a49
	}, this.a4A = function(a4B, a4C) {
		return a4B * a4B + a4C * a4C
	}
}

function a4D() {
	var a4E = new Uint8Array(d2.hR),
		a4F = new Uint16Array(d2.hR),
		a4G = new Uint16Array(d2.hR),
		a4H = new Uint8Array(d2.hR),
		a4I = (this.dN = new Uint8Array(d2.hR), new Uint16Array(d2.hR)),
		a4J = new Uint16Array(d2.hR);

	function a4U(y) {
		a4E[y] = 1 + gA.gB(a4I[y] * dJ.random(), 10 * dJ.value(100))
	}
	this.a4K = null, this.a4L = [97, 94, 70, 40, 20, 0, 100], this.a4M = [500, 450, 400, 300, 80, 50, 100], this.a4N = [0, 0, 5, 25, 50, 100, 0], this.a0i = [60, 74, 112, 200, 256, 512, 512], this.a0M = [1, 2, 3, 4, 6, 8, 1], this.a4O = [500, 450,
		400, 300, 80, 50, 100
	], this.a4P = [100, 150, 250, 400, 600, 1e3, 100], this.aM = function() {
		this.a4K = [L(159), L(160), L(143), L(161), L(162), L(163), "H Bot"]
	}, this.f = function() {
		a4E.fill(0), a4F.fill(0), a4G.fill(0), a4H.fill(0), this.dN.fill(0), a4I.fill(0), a4J.fill(0);
		var a4Q = d2.g6;
		if (9 === d2.dH) this.a4R();
		else if (d2.g5)
			if (3 === d2.data.botDifficultyType)
				for (y = d2.g9 - 1; 0 <= y; y--) {
					var fJ = y + a4Q;
					this.dN[fJ] = d2.data.botDifficultyData[fJ]
				} else if (2 === d2.data.botDifficultyType)
					for (y = d2.g9 - 1; 0 <= y; y--) this.dN[fJ = y + a4Q] = d2.data.botDifficultyTeam[aL.hQ[aL.dI[fJ]]];
				else if (1 === d2.data.botDifficultyType) {
			var a4T = this.a4K.length;
			for (y = d2.g9 - 1; 0 <= y; y--) this.dN[y + a4Q] = y % a4T
		} else
			for (a4T = d2.data.botDifficultyValue, y = d2.g9 - 1; 0 <= y; y--) this.dN[y + a4Q] = a4T;
		else
			for (var a4S = 8 === d2.dH ? 1 : 0, y = d2.g9 - 1; 0 <= y; y--) this.dN[y + a4Q] = a4S;
		for (y = 0; y < a4Q; y++) this.dN[y] = 6;
		var aY = d2.hR;
		for (y = 0; y < aY; y++) this.dN[y] <= 2 ? (a4H[y] = 5, a4I[y] = a4J[y] = 1040, 0 === this.dN[y] ? (a4F[y] = 980, a4G[y] = 980) : 1 === this.dN[y] ? (a4F[y] = 980, a4G[y] = 920, a4I[y] = a4J[y] = 1100) : (a4F[y] = 825, a4G[y] = 750)) :
			this.dN[y] <= 4 ? (a4H[y] = 1 + dJ.fK(20), 3 === this.dN[y] ? (a4F[y] = a4G[y] = 500, a4I[y] = a4J[y] = 1e3) : (a4J[y] = 250 + dJ.fK(1501), a4I[y] = 500 + dJ.fK(501), a4F[y] = 300 + dJ.fK(201), a4G[y] = 100 + dJ.fK(201))) : this.dN[
			y] <= 5 ? (a4I[y] = 1e3, a4J[y] = 1e3, a4H[y] = 35 + dJ.fK(16), a4F[y] = 300 + dJ.fK(201), a4G[y] = 50 + dJ.fK(101)) : (a4I[y] = a4J[y] = 800, a4H[y] = 5, a4F[y] = 10, a4G[y] = 250), a4U(y)
	}, this.a4R = function() {
		for (var bq = dL.a4V, a4Q = d2.g6, y = bq - 1; 0 <= y; y--) this.dN[y + a4Q] = 0;
		for (var ak = 0; ak < 6; ak++) {
			for (y = bq + dL.i8[ak] - 1; bq <= y; y--) this.dN[y + a4Q] = ak;
			bq += dL.i8[ak]
		}
	}, this.a4W = function(cT, value) {
		a4E[cT] = Math.min(value, a4E[cT])
	}, this.c8 = function(cT) {
		0 == --a4E[cT] && ! function(cT) {
			(function(cT) {
				a4I[cT] !== a4J[cT] && (a4I[cT] += a4I[cT] < a4J[cT] ? 3 : -3);
				a4F[cT] !== a4G[cT] && (a4F[cT] += a4F[cT] < a4G[cT] ? a4H[cT] : -a4H[cT], a4F[cT] = (Math.abs(a4F[cT] - a4G[cT]) <= a4H[cT] ? a4G : a4F)[cT]);
				a4E[cT] = gA.gB(a4I[cT], 10)
			})(cT), k6.jv.a4Z(cT, gA.gB(a4F[cT] * cV.cp[cT], 1e3))
		}(cT)
	}, this.a3Q = function(cT, aj) {
		a4I[cT] = a4J[cT] = aj
	}
}

function a4a() {
	function a4c(dx) {
		var aZ, dx = dx.target.files;
		dx && 0 < dx.length && (dx = dx[0], "json" === (aZ = dx.name.split("."))[aZ.length - 1].toLowerCase()) && ((aZ = new FileReader).onload = a4k, aZ.readAsText(dx))
	}

	function a4k(dx) {
		var a4o;
		d2.h5 || (dx = JSON.parse(dx.target.result), a4o = d2.data = new a4p, a4q(dx, a4o, "mapType", 0, 2), a4q(dx, a4o, "mapProceduralIndex", 0, 255), a4q(dx, a4o, "mapRealisticIndex", 0, 255), a4q(dx, a4o, "mapSeed", 0, 16383), function(a4n, a4o,
				kD, max) {
				a4n = a4n[kD];
				a4o[kD] = a4w(a4n) ? a4n.slice(0, max) : a4o[kD]
			}(dx, a4o, "mapName", 20), function(a4n, a4o, kD) {
				var oy;
				2 === a4o.mapType && (!a4w(a4n = a4n[kD]) || a4n.length <= 20 ? a4o.mapType = 0 : ((oy = new Image).onload = function() {
					a0z.o1.a4x(oy, 1), oy.onload = null, oy = null
				}, oy.src = a4n))
			}(dx, a4o, "canvas"), a4q(dx, a4o, "passableWater", 0, 1), a4q(dx, a4o, "passableMountains", 0, 1), a4q(dx, a4o, "playerCount", 1, 512), a4q(dx, a4o, "humanCount", 1, 1), a4q(dx, a4o, "selectedPlayer", 0, 0), a4q(dx, a4o, "gameMode",
				0, 1), a4q(dx, a4o, "playerMode", 0, 0), a4q(dx, a4o, "battleRoyaleMode", 0, 0), a4q(dx, a4o, "numberTeams", 0, 8), a4q(dx, a4o, "isZombieMode", 0, 0), a4q(dx, a4o, "isContest", 0, 0), a4q(dx, a4o, "isReplay", 0, 0), a4t(dx, a4o,
				"elo", 16, 2, 16383), a4q(dx, a4o, "colorsType", 0, 1), a4q(dx, a4o, "colorsPersonalized", 0, 1), a4t(dx, a4o, "colorsData", 32, 512, 262143), a4q(dx, a4o, "selectableColor", 0, 1), a4t(dx, a4o, "teamPlayerCount", 16, 9, 512),
			a4q(dx, a4o, "neutralBots", 0, 1), a4q(dx, a4o, "botDifficultyType", 0, 3), a4q(dx, a4o, "botDifficultyValue", 0, 15), a4t(dx, a4o, "botDifficultyTeam", 8, 9, 15), a4t(dx, a4o, "botDifficultyData", 8, 512, 15), a4q(dx, a4o,
				"spawningType", 0, 2), a4q(dx, a4o, "spawningSeed", 0, 16383), a4t(dx, a4o, "spawningData", 16, 1024, 4095), a4q(dx, a4o, "selectableSpawn", 0, 1), a4q(dx, a4o, "playerNamesType", 0, 2),
			function(a4n, a4o, kD, size, max) {
				var t2 = a4n[kD];
				if (Array.isArray(t2)) {
					for (var t3 = new Array(size), aY = Math.min(t2.length, size), y = 0; y < aY; y++) t3[y] = a4w(t2[y]) ? t2[y].slice(0, max) : "";
					a4o[kD] = t3
				}
			}(dx, a4o, "playerNamesData", 512, 20), a4q(dx, a4o, "selectableName", 0, 1), a4q(dx, a4o, "aIncomeType", 0, 2), a4q(dx, a4o, "aIncomeValue", 0, 255), a4t(dx, a4o, "aIncomeData", 8, 512, 255), a4q(dx, a4o, "tIncomeType", 0, 2), a4q(
				dx, a4o, "tIncomeValue", 0, 255), a4t(dx, a4o, "tIncomeData", 8, 512, 255), a4q(dx, a4o, "iIncomeType", 0, 2), a4q(dx, a4o, "iIncomeValue", 0, 255), a4t(dx, a4o, "iIncomeData", 8, 512, 255), a4q(dx, a4o, "sResourcesType", 0, 2),
			a4q(dx, a4o, "sResourcesValue", 0, 2047), a4t(dx, a4o, "sResourcesData", 16, 512, 2047), t.eY(), t.ax.a4m[0] = 0, t.z(19))
	}

	function a4q(a4n, a4o, kD, min, max) {
		a4n = a4n[kD];
		a4o[kD] = "number" == typeof a4n && min <= a4n && a4n <= max ? Math.floor(a4n) : a4o[kD]
	}

	function a4w(du) {
		return "string" == typeof du
	}

	function a4t(a4n, a4o, kD, a4y, size, max) {
		var t2 = a4n[kD];
		if (Array.isArray(t2)) {
			for (var t3 = new(8 === a4y ? Uint8Array : 16 === a4y ? Uint16Array : Uint32Array)(size), aY = Math.min(t2.length, size), y = 0; y < aY; y++) t3[y] = gA.yT(t2[y], 0, max);
			a4o[kD] = t3
		}
	}
	this.a4b = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = a4c, input.click()
	}, this.a4d = function() {
		for (var a4g, a24, tI = d2.data, keys = Object.keys(tI), a4e = {}, y = 0; y < keys.length; y++) {
			var key = keys[y];
			tI[key] instanceof Uint8Array || tI[key] instanceof Uint16Array || tI[key] instanceof Uint32Array ? a4e[key] = Array.from(tI[key]) : a4e[key] = tI[key]
		}
		a4e.canvas = 2 === a4e.mapType && a4e.canvas ? a4e.canvas.toDataURL() : null, a4g = a4e, a4g = JSON.stringify(a4g, null, 2), a4g = new Blob([a4g], {
			type: "application/json"
		}), (a24 = document.createElement("a")).href = URL.createObjectURL(a4g), a24.download = "tt_scenario.json", a24.click()
	}
}

function a4z() {
	function a52(dx) {
		fE(dx), t.z(4, 5, new cN("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(4), function() {
				t.u()
			}), new q("🔄 Reload", function() {
				eH.eV.zI()
			}, dR.zJ)]))
	}

	function a59(dx) {
		fE(dx), t.z(4, 5, new cN(L(164), a56(dx), !0))
	}

	function a56(dx) {
		var du = " [" + dx + "]";
		return 3249 === dx || 1006 === dx ? "No Internet / No Server Response" + du : 4527 === dx ? "Player already in lobby" + du : 4530 === dx ? "Lobby Timeout" + du : 4528 === dx ? "Lobby Kick: Another login detected." + du : 4540 === dx ?
			"You have been kicked." + du : 4495 === dx ? "Account doesn't exist." : 4229 === dx ? "Bad Internet / Unresponsive Client" + du : "Unknown error" + du
	}

	function fE(dx) {
		a54(dx), t.ax.a5C()
	}

	function a54(dx) {
		var kV = av.aw();
		6 === kV ? an.ax.a5D(dx) : fj.a53 ? (t.eY(), fj.fp(), an.ax.close(an.ax.lJ, 3256)) : 8 === kV && d2.a5E(!0)
	}
	this.a50 = [], this.a51 = function(l9, dx) {
		if (this.a50.push(dx), 8 === t.a0 && 0 === l9)
			if (4211 === dx) a52(dx);
			else {
				if (fj.a53 && (4495 === dx || 4480 === dx) && an.ax.lJ !== l9) return void t.u();
				if (8 !== av.aw() && a54(), 4480 === dx) return aV.ar.n4(), void t.z(4, 0, new cN(L(166), L(167), !0));
				t.z(4, 0, new cN(L(164), a56(dx), !0))
			}
		else {
			var kV = av.aw();
			if (6 === kV) {
				if (4211 === dx) return void a52(dx);
				if (4215 !== dx && 4516 !== dx && 4527 !== dx && 4533 !== dx && 4528 !== dx) return void zN.a57(l9)
			} else {
				if (!fj.a53) return 8 === kV ? void(l9 !== an.ax.mF || d2.g5 || 1 !== d2.h5 || d2.ea || cD.a58(L(165, [dx]))) : void 0;
				if (l9 !== an.ax.lJ) return
			}
			a59(dx)
		}
	}, this.a5A = function(dx) {
		this.a50.push(dx), 8 === av.aw() ? d2.g5 || 1 !== d2.h5 || cD.a58(L(165, [dx])) : a59(dx)
	}, this.a5B = function() {
		this.a50.push(3268), fE(3268)
	}
}

function lt() {
	this.f = function() {
		this.a5F = 0, this.a5G = [], this.a5H = 0, this.a5I = 0
	}, this.a2n = function() {
		var ig;
		d2.g5 || (ig = this, 2 === d2.a2o ? ig.a5G = dB.lu.a5K() : d2.gn ? ig.a5G = dB.lu.a5L() : ig.a5G = dB.lu.a5M(), ig.a5F = cz.d0.a5N(), ig.a5H = Math.max(1, dB.lu.a5O(ig.a5G)), ee.cn.a5P(), 8 === d2.dH ? dB.result.a5I = 0 : ig.a5I = 100 *
			dB.result.a5F * (1 + d2.a5R))
	}
}

function a5S() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 !== d2.data.sResourcesType && (d2.data.sResourcesData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.sResourcesType && g.ab.yK(yD.nW(), d2.data.sResourcesData, 2047)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(168), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(157), L(158), L(117)],
			value: d2.data.sResourcesType
		}, function(cF) {
			yH(), 2 !== cF || d2.data.sResourcesData || (d2.data.sResourcesData = new Uint16Array(d2.hR)), d2.data.sResourcesType = cF, t.z(28)
		})), to.push(jk)
	}(to = []), function(to) {
		var jk;
		1 === d2.data.sResourcesType && ((jk = new tr).ts("Value"), jk.tt(new tu({
			cF: -1,
			value: d2.data.sResourcesValue
		}, 1, 0, function(dx) {
			var value = gA.yT(Math.floor(dx.target.value), 0, 2047);
			dx.target.value = d2.data.sResourcesValue = value
		})), to.push(jk))
	}(to), function(to) {
		var jk;
		2 === d2.data.sResourcesType && ((jk = new tr).ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.sResourcesData, 2)), jk.tt(yD), to.push(jk))
	}(to), to))
}

function a5T() {
	this.a0M = 512, this.a1v = 8, this.jP = 0, this.v4 = 0, this.jR = new Uint16Array(this.a0M), this.jV = new Uint32Array(this.a0M), this.jW = new Uint16Array(this.a0M), this.jX = new Uint32Array(this.a0M), this.jT = new Uint16Array(this.a0M), this
		.jY = new Uint16Array(this.a0M), this.jZ = new Uint8Array(this.a0M), this.ja = new Uint8Array(this.a0M), this.jb = new Array(this.a0M), this.jc = new Uint16Array(this.a0M), this.cX = new Uint8Array(d2.hR), this.jL = new Uint16Array(this.a1v *
			d2.hR), this.f = function() {
			this.jP = 0, this.v4 = 0, this.cX.fill(0), this.jb.fill(null)
		}, this.a5U = function(player) {
			var dN = bK.a3d[0],
				a0S = bK.bL[1],
				fF = bK.aZ[0],
				a5V = this.v4,
				aY = this.jP,
				a5W = b9.zB(fF[0]),
				pj = this.cX[player],
				pk = (player << 3) + pj;
			this.jR[aY] = pk, this.jV[aY] = a5W, this.jW[aY] = 0, dN < 60 ? (g.cn.mt(player, 60 - dN), this.jX[aY] = 60) : this.jX[aY] = dN, this.jT[aY] = b5.je.a5U(aY, b9.jf(a5W)), this.jY[aY] = a5V, this.jZ[aY] = a0S, this.ja[aY] = 0, this.jb[aY] =
				fF, this.jc[aY] = 0, this.v4 = (a5V + 1) % 65536, this.cX[player] = pj + 1, this.jL[pk] = aY, this.jP++, b5.a0S.a03(player, fF[fF.length - 1], a0S, a5V)
		}, this.c8 = function() {
			b5.a0S.c8();
			for (var cT = d2.ed, cU = b5.bH.cr(cT), ig = (! function(ig) {
					for (var a5b, jV = ig.jV, jX = ig.jX, ja = ig.ja, jW = ig.jW, jT = ig.jT, jb = ig.jb, jc = ig.jc, ig = ig.jP, a5c = bR.bS << 4, y = ig - 1; 0 <= y; y--) {
						var a5d = jV[y],
							fF = jb[y],
							a5e = jc[y],
							a5W = b9.zB(fF[a5e]),
							a5f = b9.zB(fF[a5e + 1]),
							a5g = a5W % a5c,
							a5W = ~~((a5W + .5) / a5c),
							a5i = a5f % a5c,
							a5j = ~~((a5f + .5) / a5c),
							a5k = a5i - a5g,
							a5l = a5j - a5W,
							bW = Math.max(~~Math.sqrt(a5k * a5k + a5l * a5l + .5), 1),
							a5m = jX[y],
							a5m = (a5m = ja[y] ? 4e4 : 25e4 + Math.min(20 * a5m, 3e5) + Math.min(a5m >> 3, 5e4), jW[y] + Math.max(~~((a5m + .5) / bW), 1));
						65535 <= a5m ? a5e + 2 < fF.length ? (jc[y] = a5e + 1, jV[y] = a5b = function(y, a5n, a5g, a5h, a5e, bW, fF, a5c) {
							a5n = Math.min(a5n - 65535, 65535);
							var fF = b9.zB(fF[a5e + 2]),
								a5e = fF % a5c - a5g,
								fF = ~~((fF + .5) / a5c) - a5h,
								a5q = Math.max(~~Math.sqrt(a5e * a5e + fF * fF + .5), 1);
							return a5n = Math.min(Math.floor((bW * a5n + .5) / a5q), 65534), b5.ax.jW[y] = a5n, a5g + gA.gB(a5n * a5e, 65535) + a5c * (a5h + gA.gB(a5n * fF, 65535))
						}(y, a5m, a5i, a5j, a5e, bW, fF, a5c)) : (jV[y] = a5b = a5f, jW[y] = 65535) : (jW[y] = a5m, jV[y] = a5b = a5g + gA.gB(a5m * a5k, 65535) + a5c * (a5W + gA.gB(a5m * a5l, 65535))), jT[y] = b5.je.a5p(jT[y], a5d, a5b)
					}
				}(this), ! function(ig) {
					if (e8.o4() % 2 == 1) {
						var y, fJ, ag, ak, a7, a5r, a5s, a5t, ub, dc, dd, a5W, a5v, a4B, a5x, a5u, aY = ig.jP,
							jV = ig.jV,
							jR = ig.jR,
							jX = ig.jX,
							ja = ig.ja,
							je = b5.je.je,
							a5z = je.length,
							a60 = b5.je.a60,
							a5c = bR.bS << 4,
							a61 = d2.gn,
							a62 = aL.dI,
							kD = (aY - 1) * (gA.gB(e8.o4(), 2) % 2);
						for (y = 0; y < aY; y++)
							for (fJ = Math.abs(y - kD), a5W = jV[fJ], ag = b9.jf(a5W), ub = jR[fJ] >> 3, dc = a5W % a5c, dd = ~~((a5W + .5) / a5c), a5x = jX[fJ], ak = 0; ak < 9; ak++)
								if (!((a5r = ag + a60[ak]) < 0 || a5z <= a5r))
									for (a5t = je[a5r], a5s = a5t.length, a7 = 0; a7 < a5s; a7++) a5v = a5t[a7], a5u = jR[a5v] >> 3, ub == a5u || a61 && a62[ub] === a62[a5u] && a62[ub] || (a5u = jV[a5v], (a4B = dc - a5u % a5c) * a4B + (a4B =
										dd - ~~((a5u + .5) / a5c)) * a4B < 14400 && (a5u = jX[a5v], a4B = a5u <= a5x ? Math.max(1, gA.gB(a5u + gA.gB(a5x - a5u, 10), 10)) : Math.max(1, gA.gB(a5x, 10)), jX[a5v] = Math.max(a5u - a4B, 0),
										ja[a5v] = 4))
					}
				}(this), ! function(ig) {
					if (e8.o4() % 5 == 3)
						for (var jX = ig.jX, aY = ig.jP, y = 0; y < aY; y++) {
							var dN = jX[y];
							jX[y] = Math.max(dN - Math.max(1, dN >> 7), 0)
						}
				}(this), this), jX = ig.jX, ja = ig.ja, y = ig.jP - 1; 0 <= y; y--) ja[y] = ja[y] >> 1, 0 === jX[y] && (b5.kQ.kS(y), b5.cv.jM(y));
			aP.cs(cT, cU - b5.bH.cr(cT), 15)
		}
}

function a63() {
	var a64 = null,
		a65 = null,
		a66 = 0,
		a67 = 0,
		a68 = null;

	function a6B() {
		0 !== a65.pJ && (fj.a6L.a5(), t.z(8, 29, new a1(25, {
			ix: 0,
			iy: lO.tk.gb(a65.iy, 5),
			iz: 0
		}, 29)))
	}

	function a6C() {
		var bn = a64.bn,
			bo = a64.bo;
		fj.a6L.a5(), a64 = new a6A([new q("Kick User", function() {
			a6I(0, 0)
		}, a6M(0, 0)), new q("Block Chat", a6J, a6M(1, 0)), new q("Censor Username", a6K, a6M(2, 0))]), a6H(bn, bo), a66 = 2, a67 = 1
	}

	function a6M(id, cF) {
		var jC, a6O;
		return !fj.a6N || fj.bH.pK(a65) || (jC = a65.a3u) <= (a6O = fj.a6N.a6O) || 1 - aR.jB(id, a6O, cF) ? 1 : 4 === a65.pJ ? 50 <= jC ? +(jC <= a6O) : 20 <= jC ? +(jC / 2 <= a6O) : +(jC / 3 <= a6O) : 0
	}

	function a6F() {
		return !fj.a6N || fj.bH.pK(a65) ? 1 : 0
	}

	function a6E() {
		var bn = a64.bn,
			bo = a64.bo,
			a6P = (fj.a6L.a5(), a6F());
		a64 = new a6A([new q(aR.jA[5][0], function() {
			a6I(5, 0)
		}, a6P), new q(aR.jA[5][1], function() {
			a6I(5, 1)
		}, a6P), new q(aR.jA[5][2], function() {
			a6I(5, 2)
		}, a6P), new q(a65.a6O < 100 ? "Stealth Report" : aR.jA[5][3], function() {
			a6I(5, 3)
		}, a6P)]), a6H(bn, bo), a67 = a66 = 2
	}

	function a6G() {
		29 === t.a0 && t.eB().a6Q(lO.tk.gb(a65.iy, 5))
	}

	function a6I(id, value) {
		an.nj.lL(5, {
			id: id,
			value: value,
			iy: a65.iy
		})
	}

	function a6J() {
		var bn = a64.bn,
			bo = a64.bo;
		fj.a6L.a5(), a64 = new a6A([new q(aR.jA[1][0], function() {
			a6I(1, 0)
		}, a6M(1, 0)), new q(aR.jA[1][1], function() {
			a6I(1, 1)
		}, a6M(1, 1)), new q(aR.jA[1][2], function() {
			a6I(1, 2)
		}, a6M(1, 2)), new q(aR.jA[1][3], function() {
			a6I(1, 3)
		}, a6M(1, 3)), new q(aR.jA[1][4], function() {
			a6I(1, 4)
		}, a6M(1, 4))]), a6H(bn, bo), a66 = 3, a67 = 1
	}

	function a6K() {
		var bn = a64.bn,
			bo = a64.bo;
		fj.a6L.a5(), a64 = new a6A([new q(aR.jA[2][0], function() {
			a6I(2, 0)
		}, a6M(2, 0)), new q(aR.jA[2][1], function() {
			a6I(2, 1)
		}, a6M(2, 1)), new q(aR.jA[2][2], function() {
			a6I(2, 2)
		}, a6M(2, 2))]), a6H(bn, bo), a66 = 3, a67 = 2
	}

	function a6H(bn, bo, a6T) {
		a64.show(bn, bo, a6T), fj.p7.show(a64.bn, a64.bo, a65, 1)
	}
	this.a69 = function(dx, fi) {
		a66 = 1, a65 = fi, a64 = new a6A([new q(L(169), a6B, 0 === a65.pJ ? 1 : 0), new q(L(170), a6C, function() {
			if (!fj.a6N) return 1;
			if (fj.bH.pK(a65)) return 1;
			if (100 <= fj.a6N.a6O) return 1;
			if (fj.a6N.a6O >= a65.a3u) return 1;
			return 0
		}()), new q(L(171, 0, "🚩 Report"), a6E, a6F()), new q(L(172), a6G, 0)]), a6H((a68 = {
			clientX: dx.clientX,
			clientY: dx.clientY
		}).clientX, a68.clientY, 1)
	}, this.a6 = function(code) {
		if (29 !== t.a0) return !1;
		if (!a65) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.a5();
			else if (g.gZ.startsWith(code, "Numpad") || g.gZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === a66) this.a69(a68, a65);
				else {
					if (!a64) return !1;
					1 === a66 ? code <= 1 ? a6B() : 2 === code ? a6C() : 3 === code ? a6E() : (a6G(), this.a5()) : 2 === a66 ? 1 === a67 ? code <= 1 ? (a6I(0, 0), this.a5()) : (2 === code ? a6J : a6K)() : (a6I(5, gA.yT(code - 1, 0, 3)), this
					.a5()) : (a6I(a67, gA.yT(code - 1, 0, aR.jA[a67].length - 1)), this.a5())
				}
		}
		return !0
	}, this.a5 = function() {
		a66 = 0, a64 && a64.a5(), a64 = null, fj.p7.a5()
	}
}

function iG(a6U, a6V, a6W) {
	this.bn = 0, this.bo = 0, this.gF = 0, this.ae = 0, this.resize = function() {
		this.ae = Math.min(g.h.lc(a6W || .5) * a6U[1] * gG.gH, gG.ae - 2 * j.gap), this.gF = Math.min(this.ae * (a6U[0] / a6U[1]), gG.gF - 2 * j.gap), this.ae = a6U[1] * this.gF / a6U[0], this.bn = j.gap + a6V[0] * (gG.gF - this.gF - 2 * j.gap),
			this.bo = j.gap + a6V[1] * (gG.ae - this.ae - 2 * j.gap)
	}, this.a6X = function() {
		return this.bn + .5 * this.gF
	}
}

function a6Y() {
	var yB, yC, yD;

	function yE() {
		yH(), 3 !== d2.data.botDifficultyType || g.ab.sb(d2.data.botDifficultyData) || (d2.data.botDifficultyType = 0), 3 !== d2.data.botDifficultyType && (d2.data.botDifficultyData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		3 === d2.data.botDifficultyType && g.ab.yK(yD.nW(), d2.data.botDifficultyData, aN.a4K.length - 1)
	}

	function a6a(to, cF) {
		var jk = new tr,
			value = (jk.ts(cF < 0 ? L(173) : L(176) + " " + aL.di[cF % 9]), 0 <= cF && (jk.yS(L(119) + ": " + d2.data.teamPlayerCount[cF]).style.marginBottom = "1em"), cF < 0 ? d2.data.botDifficultyValue : d2.data.botDifficultyTeam[cF]);
		jk.yO(new xi({
			ty: aN.a4K,
			value: value
		}, function(fJ) {
			cF < 0 ? d2.data.botDifficultyValue = fJ : d2.data.botDifficultyTeam[cF] = fJ
		})), to.push(jk)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(173), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, function() {
		var to = [];
		if (function(to) {
				var jk = new tr,
					ty = (jk.ts(L(115)), [L(158), L(174), L(175), L(117)]),
					value = d2.data.botDifficultyType;
				0 === d2.data.gameMode && (value = Math.min(value, 2), ty.splice(2, 1));
				jk.yO(new xi({
					ty: ty,
					value: value
				}, function(cF) {
					yH(), d2.data.botDifficultyType = cF, 0 === d2.data.gameMode && 2 === cF && (d2.data.botDifficultyType = 3), 3 !== d2.data.botDifficultyType || d2.data.botDifficultyData || (d2.data.botDifficultyData =
						new Uint8Array(d2.hR)), 2 !== d2.data.botDifficultyType || d2.data.botDifficultyTeam || (d2.data.botDifficultyTeam = new Uint8Array(9)), t.z(25)
				})), to.push(jk)
			}(to), 0 === d2.data.botDifficultyType) a6a(to, -1);
		else if (2 === d2.data.botDifficultyType)
			for (var y = 0; y < d2.data.teamPlayerCount.length; y++) d2.data.teamPlayerCount[y] && a6a(to, y);
		else 3 === d2.data.botDifficultyType && ! function(to) {
			var jk = new tr;
			jk.ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.botDifficultyData, 8)), jk.tt(yD), to.push(jk)
		}(to);
		return to
	}())
}

function a6b() {
	var a6c = 0,
		a6d = 0,
		a6e = 0,
		a6f = null,
		a6g = null;

	function a6j(fi, a6k, a6l) {
		var du = fi.username;
		return (du += "   " + fj.bH.a6m(fi.pJ, fi.a3u, fi.a6O)) + function(fi) {
			fi = fi.nA;
			if (fi < 1e3) return "   Gold: " + fi;
			if ((fi %= 1024) < 1e3) return "   Gold: " + fi + "k";
			return "   Gold: " + (fi - 999) + "M"
		}(fi) + ("   IP: " + lO.tk.gb(fi.a6o, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][a6l ? a6d : a6i(fi, a6k)])
	}

	function a6i(fi, a6k) {
		return a6d = a6k || fj.pB.a6p(fi.iy) ? 1 : 0
	}
	this.a6h = function() {
		!a6c || a6d === a6i(a6g) && a6e === a6g.nA || (a6e = a6g.nA, a6f.show(-1, -1, a6j(a6g, 0, 1), 1, 1))
	}, this.pL = function(dx, fi, a6k) {
		var iA = dx.target.getBoundingClientRect();
		this.show(iA.left, iA.top, fi, 0, a6k), dx.target.addEventListener("mouseleave", function remove() {
			dx.target.removeEventListener("mouseleave", remove), fj.p7 && fj.p7.a5(1)
		})
	}, this.show = function(bn, bo, fi, a6q, a6k) {
		a6f = a6f || new a6r, a6e = (a6g = fi).nA, a6f.show(bn, bo, a6j(fi, a6k), a6q), a6c = 1
	}, this.a5 = function(a6s) {
		a6f && a6f.a5(a6s) && (a6c = 0, a6g = null)
	}
}

function a6t() {
	this.aW = {}, this.tR = new Array(7), this.xe = null, this.a6u = null, this.nR = 0, this.a4m = [0, 0], this.a5C = function() {
		t.z(5, 5)
	}, this.a6v = function() {
		t.eY(), zN.f()
	}, __fx.customLobby.setJoinFunction(() => {
		t.eY(), zN.f()
	}), this.ay = function() {
		t.z(0 === av.aw() ? 5 : 0)
	}, this.eO = function() {
		if (1 === aV.aW.data[130].value) t.z(8, t.eB().tb, new a1(24, {
			xW: aV.aW.data[125].value,
			a3: aV.aW.data[128].value,
			a4: aV.aW.data[129].value
		}));
		else {
			for (var aZ = (aZ = aV.aW.data[126].value.split(",")).slice(0, 10), y = 0; y < aZ.length; y++) aZ[y] = aZ[y].trim().slice(0, 7).toUpperCase();
			1 === aZ.length && 0 === aZ[0].length && (aZ = []), t.z(8, t.eB().tb, new a1(23, {
				xW: aV.aW.data[125].value,
				i0: aZ
			}))
		}
	}, this.el = function(tb, target) {
		t.z(4, tb, new cN("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + eo.ez +
			"' target='_blank'>" + eo.ez + "</a>", !1, [new q("⬅️ " + L(4), function() {
				t.z(tb)
			}), new q("✅ Accept", function() {
				aV.ar.at(140, 1), 0 === target ? t.z(2, tb) : t.z(8, tb, new a1(target))
			})]))
	}, this.a6w = function() {
		for (var y = 0; y < 7; y++) this.tR[y] = nu.m8.nv(cK.cL(5));
		this.tR[1] = "[" + this.tR[1] + "]", 5 === t.a0 && (t.eB().eC.at(this.tR), t.eB().resize())
	}
}

function a6x() {
	this.a6y = function(rF, player) {
		cD.a6z(d2.ed, player, rF), an.nk.a70(rF, player)
	}, this.w1 = function(player) {
		cD.a71(player, 0), an.nk.a72(player)
	}, this.vx = function(va, player) {
		cD.a73(va, player), an.nk.a74(va, player)
	}, this.a5P = function() {
		d2.g5 || d2.ea || an.a75.a5P()
	}
}

function a76() {
	var rH = 32,
		rI = new Array(2);

	function lW(a7) {
		var bn, bo, bw, kI, kH, oZ = rH,
			rL = g.h.lW(oZ, oZ),
			lX = g.h.getContext(rL, !0),
			wd = g.h.getImageData(lX, oZ, oZ),
			eJ = wd.data,
			ag = (oZ >> 1) - .5,
			a78 = Math.sqrt(ag * ag);
		for (eJ.fill(255), bo = 0; bo < oZ; bo++)
			for (bn = 0; bn < oZ; bn++) kH = bn - ag, kI = bo - ag, bw = 4 * (bo * oZ + bn), kH = 714 * (a78 - Math.sqrt(kH * kH + kI * kI)) / a78, eJ[2 + bw] = a7, eJ[3 + bw] = 255 < kH ? 0 : kH;
		return lX.putImageData(wd, 0, 0), rL
	}
	this.a77 = -1, this.f = function() {
		this.a77 = -1, rI[0] || (rI[0] = lW(255), rI[1] = lW(0))
	}, this.a1t = function(lX, bq, bn, bo, jC, y) {
		g.cn.gy(d2.ed) && (lX.setTransform(bq *= 4 / 3 * .625, 0, 0, bq, bn - (jC *= 4 / 3), bo - jC), lX.drawImage(rI[+(b5.ax.jY[y] === this.a77)], 0, 0))
	}
}

function a79() {
	var a7B, a7C;
	this.a7A = 5, this.a2g = null;

	function a2d(y) {
		return a7C[y].a7H && a7B[y].a2d()
	}

	function a7L(l9) {
		a7C[l9].iR = e8.iR, a7C[l9].a7I = !1
	}
	this.mF = 0, this.lJ = 0, this.f = function() {
		this.a2g = new Array(this.a7A);
		this.a2g[0] = "territorial.io";
		var ks = dJ.kt(0);
		dJ.ku(0);
		for (var y = 1; y < this.a7A; y++) this.a2g[y] = a7F.a7G() + ".territorial.io";
		for (dJ.ku(ks), a7B = new Array(this.a7A), a7C = new Array(this.a7A), y = this.a7A - 1; 0 <= y; y--) a7C[y] = {
			a7H: !1,
			iR: 0,
			a7I: !1
		};
		this.xP(0, 0)
	}, this.nh = function(y) {
		return a7B[y]
	}, this.c8 = function() {
		for (var y = this.a7A - 1; 0 <= y; y--) this.a2b(y) && e8.iR > a7C[y].iR + 15e3 && an.nk.a7J(y, a7C[y].a7I);
		!this.a2b(0) && e8.iR > a7C[0].iR + 8e3 && (a7C[0].iR = e8.iR, this.xP(0, 0))
	}, this.xM = function(id) {
		return this.xP(0, id) && this.a2c(0)
	}, this.xP = function(l9, tb) {
		if (a7C[l9].a7H) {
			if (a7B[l9].a2d()) return a7B[l9].a2e(tb), a7B[l9].a2b();
			a7B[l9].a5()
		}
		return this.a7K(l9, tb), !1
	}, this.a7K = function(l9, tb) {
		a7C[l9].a7H = !0, a7L(l9), a7B[l9] = new a2U, a7B[l9].f(l9, tb)
	}, this.a2e = function(l9, tb) {
		a2d(l9) && a7B[l9].a2e(tb)
	}, this.a2h = function(l9, tb) {
		an.ao.m2(l9)
	}, this.a2c = function(y) {
		return this.a2b(y) && a7B[y].a2c()
	}, this.nn = function(y) {
		a7B[y].nn()
	}, this.a2b = function(y) {
		return a7C[y].a7H && a7B[y].a2b()
	}, this.send = function(l9, lK) {
		a7L(l9), a7B[l9].send(lK)
	}, __fx.customLobby.setSendFunction(this.send), this.a7M = function(l9) {
		8 === av.aw() && (a7C[l9].a7I = !0, an.a0y.a7N = !0)
	}, this.close = function(l9, a2f) {
		a2d(l9) && a7B[l9].close(a2f)
	}, this.nd = function(l9, a2f) {
		a7O.a5A(a2f), a2d(l9) && a7B[l9].close(a2f)
	}, this.a5D = function(a2f) {
		for (var y = this.a7A - 1; 0 <= y; y--) this.close(y, a2f)
	}, this.a7P = function(l9, a2f) {
		for (var y = this.a7A - 1; 0 <= y; y--) y !== l9 && this.close(y, a2f)
	}, this.a7Q = function() {
		this.close(this.mF, 3246)
	}, this.a2j = function(l9, dx) {
		a7B[l9].a5(), a7O.a51(l9, dx.code)
	}
}

function a7R() {
	var iP, a7S, gF, ae, is, a7T, a7U, a7V, canvas, a7W, a7X;

	function iI() {
		return Math.floor((gG.gF - gF) / 2) < t0.ae + 2 * j.gap ? gG.ae - ae - 4 * j.gap - t0.ae : gG.ae - ae - 2 * j.gap
	}
	this.f = function() {
		a7X = iP = !1, is = .61, a7T = .07, a7U = .09, a7W = a7V = ae = 0
	}, this.resize = function() {
		var fs, dc, a7, a7d, a7e, r8;
		iP && (gF = zv(gF = eH.eV.fT() ? Math.floor(.69 * gG.gH) : Math.floor(.5 * gG.gH), oU(gG.gF - 2 * j.gap, 10)), gF = zv(gF, Math.floor(3.57 * oU(gG.ae - 2 * j.gap, 3))), ae = Math.floor(.28 * gF), (canvas = document.createElement(
			"canvas")).width = gF, canvas.height = ae, fs = canvas.getContext("2d", {
			alpha: !0
		}), dc = Math.floor(1 + ae / 40), fs.clearRect(0, 0, gF, ae), fs.fillStyle = dR.gT, fs.fillRect(dc, dc, gF - 2 * dc, ae - 2 * dc), fs.lineJoin = "bevel", fs.lineWidth = 2 * dc, fs.strokeStyle = dR.fa, fs.strokeRect(dc, dc, gF -
			2 * dc, ae - 2 * dc), fs.imageSmoothingEnabled = !1, a7 = qY.get(a7S), a7d = a7.width, r8 = (1 === a7S ? .85 : 21 === a7S ? .666 : .9) * is * ae / (a7e = a7.height), fs.setTransform(r8, 0, 0, r8, Math.floor((gF - r8 * a7d) /
			2), Math.floor((ae - r8 * a7e) / 2)), fs.drawImage(a7, 0, 0), fs.setTransform(1, 0, 0, 1, Math.floor(gF - a7U * ae - a7T * ae - dc), Math.floor(dc + a7T * ae)), function(fs, aY) {
			fs.lineWidth = Math.floor(1 + ae / 80), fs.strokeStyle = dR.fa, fs.beginPath(), fs.moveTo(0, 0), fs.lineTo(aY, aY), fs.moveTo(0, aY), fs.lineTo(aY, 0), fs.stroke()
		}(fs, Math.floor(a7U * ae)), fs.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aU, a7Z, a7a, a7b) {
		iP || a7b && a7X || (a7S = a7a ? 21 : aU ? 1 : 2, iP = a7X = !0, this.resize(), eD.a5(), t0.a7c(), a7W = e8.iR, a7V = a7Z ? 1 : 0)
	}, this.c8 = function() {
		!iP || 1 <= a7V || (a7V = 1 < (a7V += 5e-4 * (e8.iR - a7W)) ? 1 : a7V, a7W = e8.iR, e8.e9 = !0)
	}, this.iS = function(bn, bo) {
		return !(!iP || a7V <= 0 || (bn -= Math.floor((gG.gF - gF) / 2), bo -= iI(), bn < 0) || bo < 0 || gF < bn || ae < bo || (gF - ae / 3 < bn && bo < ae / 3 && (iP = !1, e8.e9 = !0), 0))
	}, this.h8 = function() {
		!iP || a7V <= 0 || (h9.globalAlpha = a7V, h9.drawImage(canvas, Math.floor((gG.gF - gF) / 2), iI()), h9.globalAlpha = 1)
	}
}

function a7g() {
	var a7 = g.color;
	this.dS = a7.a7h(0, 0, 0), this.nS = a7.sa(0, 0, 0, .7), this.a7i = a7.sa(0, 0, 0, .5), this.fb = a7.sa(0, 0, 0, .85), this.gT = a7.sa(0, 0, 0, .75), this.sg = a7.sa(0, 0, 0, .6), this.a2L = a7.sa(0, 0, 0, .35), this.fa = a7.a7h(255, 255, 255),
		this.a7j = a7.sa(255, 255, 255, .3), this.oP = a7.sa(255, 255, 255, .6), this.a7k = a7.sa(255, 255, 255, .4), this.a7l = a7.sa(255, 255, 255, .25), this.a7m = a7.sa(255, 255, 255, .85), this.a7n = a7.sa(255, 255, 255, .75), this.a7o = a7.sa(
			255, 255, 255, .15), this.a7p = a7.sa(255, 255, 255, .11), this.sk = a7.a7h(128, 128, 128), this.a7q = a7.sa(64, 64, 64, .75), this.sZ = a7.sa(88, 88, 88, .83), this.f4 = a7.sa(60, 60, 60, .85), this.a7r = a7.sa(80, 60, 60, .85), this
		.a7s = a7.a7h(170, 170, 170), this.a36 = a7.a7h(200, 235, 245), this.a7t = a7.a7h(30, 255, 30), this.a7u = a7.a7h(0, 200, 0), this.sn = a7.a7h(128, 255, 128), this.a7v = a7.sa(10, 65, 10, .75), this.gU = a7.sa(0, 255, 0, .6), this.a7w = a7
		.sa(0, 255, 0, .5), this.a7x = a7.sa(0, 200, 0, .5), this.zJ = a7.sa(0, 100, 0, .75), this.yj = a7.sa(0, 60, 0, .8), this.io = a7.sa(0, 255, 0, .3), this.ve = a7.sa(0, 180, 0, .6), this.a7y = a7.sa(0, 120, 0, .85), this.so = a7.a7h(0, 120,
		0), this.a7z = a7.sa(0, 70, 0, .85), this.a80 = a7.a7h(190, 230, 190), this.a81 = a7.a7h(0, 255, 0), this.a82 = a7.a7h(255, 120, 120), this.oS = a7.a7h(255, 160, 160), this.sl = a7.a7h(255, 70, 70), this.sm = a7.a7h(230, 0, 0), this.a83 = a7
		.sa(220, 0, 0, .6), this.a84 = a7.sa(255, 100, 100, .8), this.a85 = a7.sa(100, 0, 0, .85), this.yi = a7.sa(60, 0, 0, .85), this.vf = a7.sa(200, 0, 0, .6), this.a86 = a7.sa(120, 0, 0, .85), this.a87 = a7.a7h(255, 70, 10), this.a88 = a7.a7h(
			230, 190, 190), this.a89 = a7.a7h(255, 0, 0), this.a8A = a7.a7h(255, 0, 255), this.yg = a7.sa(60, 0, 60, .85), this.yh = a7.sa(0, 60, 60, .85), this.a8B = a7.sa(10, 60, 60, .9), this.a8C = a7.sa(0, 96, 96, .75), this.a8D = a7.a7h(0, 255,
			255), this.a8E = a7.a7h(160, 160, 255), this.a8F = a7.sa(0, 40, 90, .75), this.vh = a7.sa(0, 0, 255, .6), this.a8G = a7.a7h(200, 200, 255), this.sY = a7.sa(50, 50, 255, .83), this.gY = a7.a7h(255, 120, 100), this.a8H = a7.sa(255, 255, 0,
			.5), this.a8I = a7.sa(255, 255, 150, .2), this.a2I = a7.a7h(255, 255, 0), this.a8J = a7.a7h(255, 255, 200), this.vg = a7.sa(200, 200, 0, .6), this.a8K = a7.sa(140, 120, 0, .75), this.a8L = a7.sa(180, 160, 40, .75), this.a8M = a7.sa(70,
			50, 20, .85), this.a8N = a7.sa(30, 30, 0, .85), this.yl = a7.sa(60, 60, 0, .85), this.a26 = a7.sa(255, 140, 0, .75), this.yk = a7.sa(70, 40, 0, .85), this.a8O = a7.a7h(220, 120, 0), this.dT = a7.sa(255, 200, 80, .85), this.a8P = a7.a7h(
			255, 150, 120), this.a8Q = a7.sa(0, 0, 0, 0), this.a8R = a7.sa(255, 255, 255, 0), this.a8S = a7.sa(254, 254, 254, 0)
}

function a8T() {
	this.lI = function(du, cI, a8U) {
		for (var a8V = [], aY = du.length, max = 0, y = 0; y < aY; y++) {
			var aU = du.charCodeAt(y);
			a8V.push(aU), max = Math.max(max, aU)
		}
		var cM = max < 128 ? 7 : 16;
		for (a8U.lC(cI, aY), a8U.lC(1, +(16 == cM)), y = 0; y < aY; y++) a8U.lC(cM, a8V[y])
	}
}

function a8W() {
	this.a8X = function() {
		lA.kv(39), lA.lC(1, 0), lA.lC(6, 16), an.ao.a8Y(), an.ax.send(0, lA.lK)
	}, this.ng = function(l9) {
		lA.kv(115), lA.lC(1, 0), lA.lC(6, 17), nu.tk.a8a(aV.aW.data[105].value, 5), nu.tk.a8a(aV.aW.data[106].value, 8), lA.lC(30, aV.aW.data[109].value), an.ax.send(l9, lA.lK)
	}, this.xh = function() {
		lA.kv(55), lA.lC(1, 0), lA.lC(6, 18), nu.tk.m9(aV.aW.data[110].value), an.ax.send(0, lA.lK)
	}, this.xa = function(dy) {
		var aY = dy.du.length;
		lA.kv(21 + 16 * aY), lA.lC(1, 0), lA.lC(6, 29), lA.lC(6, dy.ix), lA.lC(8, aY), lO.m8.m9(dy.du), an.ax.send(0, lA.lK)
	}, this.xY = function(data) {
		lA.kv(43), lA.lC(1, 0), lA.lC(6, 25), lA.lC(6, data.ix), nu.tk.a8a(data.iy, 5), an.ax.send(0, lA.lK)
	}, this.a8b = function(data) {
		lA.kv(75), lA.lC(1, 0), lA.lC(6, 27), lA.lC(6, data.ix), nu.tk.a8a(data.iy, 5), lA.a8c(32, data.value), an.ax.send(0, lA.lK)
	}
}

function a8d() {
	this.tk = new a8e, this.m8 = new a8f, this.lP = new cG, this.f = function() {
		this.tk.f()
	}
}

function vP() {
	this.a5N = function() {
		for (var cT, aY = g7.g8, y8 = g7.gx, cy = cV.cy, a8g = this.d1(), y = 0; y < aY; y++) cT = y8[y], g.cn.cx(cT) || (cy[cT] = a8g);
		var a8h = cV.a8h,
			a8i = cV.a8i,
			a8j = cV.a8j,
			a8k = cV.a8k,
			aY = d2.g6;
		for (y = 0; y < aY; y++)(0 === a8k[y] || a8j[y] < 1 || 2 * a8h[y] > 3 * (a8i[y] + a8j[y])) && (cy[y] = 0);
		var a5F = 0;
		for (y = 0; y < aY; y++) a5F += 0 < cy[y];
		return a5F
	}, this.d1 = function() {
		return Math.min(65535, e8.o4())
	}
}

function a8l() {
	this.e7 = function(canvas, dz, dy) {
		var gF = canvas.width,
			ae = canvas.height,
			a7 = g.h.lW(gF, ae),
			lX = g.h.getContext(a7, !0),
			canvas = (lX.drawImage(canvas, 0, 0), lX.getImageData(0, 0, gF, ae));
		return dz(canvas.data, gF, ae, dy), lX.putImageData(canvas, 0, 0), a7
	}, this.e5 = function(eJ, gF, ae) {
		for (var bn = gF - 1; 0 <= bn; bn--)
			for (var bo = ae - 1; 0 <= bo; bo--) {
				var y = 4 * (bn + bo * gF);
				eJ[3 + y] = eJ[y], eJ[y] = eJ[1 + y] = eJ[2 + y] = 255
			}
	}, this.e1 = function(eJ, gF, ae) {
		for (var bn = gF - 1; 0 <= bn; bn--)
			for (var bo = ae - 1; 0 <= bo; bo--) {
				var y = 4 * (bn + bo * gF);
				eJ[1 + y] > eJ[2 + y] + 10 && (eJ[3 + y] = eJ[y], eJ[1 + y] = eJ[2 + y])
			}
	}, this.e3 = function(eJ, gF, ae, dy) {
		for (var gap = Math.floor(Math.min(gF, ae) * dy), bn = 0; bn < gF; bn++)
			for (var y, bo = 0; bo < ae; bo++)(bn < gap || bo < gap || gF - gap <= bn || ae - gap <= bo) && (eJ[3 + (y = 4 * (bn + bo * gF))] = 255 - 255 * (eJ[1 + y] - eJ[y]) / (255 - eJ[y]))
	}, this.a8m = function(eJ, gF, ae, dy) {
		for (var bn = gF - 1; 0 <= bn; bn--)
			for (var bo = ae - 1; 0 <= bo; bo--) {
				var y = 4 * (bn + bo * gF);
				eJ[y] = dy[0], eJ[1 + y] = dy[1], eJ[2 + y] = dy[2]
			}
	}, this.e2 = function(eJ, gF, ae, dy) {
		for (var gap = Math.floor(gF * dy), bn = 0; bn < gF; bn++)
			for (var y, bo = 0; bo < ae; bo++)(bn < gap || bo < gap || gF - gap <= bn || ae - gap <= bo) && (eJ[y = 4 * (bn + bo * gF)] = eJ[1 + y] = eJ[2 + y] = 0)
	}, this.e4 = function(eJ, gF, ae) {
		for (var bo, y, bn = gF - 1; 0 <= bn; bn--)
			for (bo = ae - 1; 0 <= bo; bo--) 200 < eJ[1 + (y = 4 * (bn + bo * gF))] && eJ[1 + y] - 20 > eJ[y] && eJ[1 + y] - 20 > eJ[2 + y] ? eJ[y] + eJ[2 + y] < 40 ? eJ[3 + y] = 0 : (eJ[3 + y] = eJ[y], eJ[y] = 255, eJ[1 + y] = 255, eJ[2 + y] =
				255) : eJ[y] < 50 && eJ[1 + y] < 50 && eJ[2 + y] < 50 && (eJ[y] + eJ[1 + y] + eJ[2 + y] < 50 ? eJ[3 + y] = 180 : eJ[3 + y] = 180 + Math.floor(75 * (eJ[y] + eJ[1 + y] + eJ[2 + y] - 50) / 100))
	}, this.e6 = function(eJ, gF, ae) {
		for (var bo, y, bn = gF - 1; 0 <= bn; bn--)
			for (bo = ae - 1; 0 <= bo; bo--) eJ[1 + (y = 4 * (bn + bo * gF))] > eJ[y] + 20 && eJ[1 + y] > eJ[2 + y] + 20 && eJ[y] + eJ[2] < 40 && (eJ[3 + y] = 255 - eJ[1 + y], eJ[y] = eJ[1 + y] = eJ[2 + y] = eJ[y])
	}, this.a8n = function(eJ, gF, ae, dy) {
		for (var jC = gF >> 1, bn = 0; bn < gF; bn++)
			for (var bo = 0; bo < ae; bo++) Math.sqrt((bn - jC) * (bn - jC) + (bo - jC) * (bo - jC)) > dy * jC && (eJ[4 * (bn + bo * gF) + 3] = 0)
	}
}

function a8o() {
	var a30, ae, a8p, a8q, a8r, a8s, a8t, a8u, a8v;

	function iI() {
		return t0.iJ(cD.a98()) ? eL.iP ? __fx.settings.keybindButtons ? t0.bo - 2 * t0.ae - 3 * a8p : t0.bo - t0.ae - 2 * a8p : __fx.settings.keybindButtons ? t0.bo - t0.ae - 2 * a8p : t0.bo - a8p : zm.iJ(cD.a9A()) ? eL.iP ? zm.iI() - t0.ae - 2 *
			a8p : zm.iI() - a8p : eL.iP ? gG.ae - t0.ae - (iL.fS() + 1) * a8p : gG.ae - iL.fS() * j.gap
	}

	function a91(cU, du, id, cT, a93, a94, a5u, a95, a96, y9, a9I) {
		var y, fs, rL, fi, a9J = void 0 !== a96,
			gF = Math.floor(zn.measureText(du, cD.gI) + 1.5 * a8q + (a9J ? ae : 1.5 * a8q));
		if (e8.e9 = !0, a9I || a31.dP(du, a96), gF + 2 * a8p + t0.ae > gG.gF && !a9J && 50 !== id && 20 < du.length) a91(cU, (a9I = g.gZ.a9K(du))[0], id, cT, a93, a94, a5u, a95, a96, y9, !0), a91(cU, a9I[1], id, cT, a93, a94, a5u, a95, a96, y9, !0);
		else if (a9I = gF + (50 === id ? a8r : 0), (rL = document.createElement("canvas")).width = gF, rL.height = ae, (fs = rL.getContext("2d", {
				alpha: !0
			})).font = cD.gI, g.h.textBaseline(fs, 1), g.h.textAlign(fs, 0), fs.clearRect(0, 0, gF, ae), fs.fillStyle = a94, fs.fillRect(0, 0, gF, ae), fs.fillStyle = a93, fs.fillText(du, Math.floor(1.5 * a8q), Math.floor(ae / 2)), a9J && (fs
				.imageSmoothingEnabled = !0, eI.eJ.vk(a96, fs, gF - ae, 0, ae)), 0 === (fi = {
				iR: cU,
				du: du,
				id: id,
				player: cT,
				canvas: rL,
				a93: a93,
				a94: a94,
				gF: gF,
				a99: a9I,
				a5u: a5u,
				a95: a95,
				a96: a96,
				y9: y9
			}).iR || 0 < a30.length && 0 < a30[0].iR) a30.unshift(fi);
		else {
			for (y = 1; y < a30.length; y++)
				if (0 < a30[y].iR) return void a30.splice(y, 0, fi);
			a30.push(fi)
		}
	}

	function a92(jC, h3, ak) {
		return "rgb(" + jC + "," + h3 + "," + ak + ")"
	}

	function a9M(id, aj) {
		for (var aY = a30.length, y = 0; y < aY; y++) a30[y].id === id && aj-- <= 0 && (a30.splice(y, 1), y--, aY--)
	}

	function a9N(id, player) {
		for (var a06 = !1, y = a30.length - 1; 0 <= y; y--) a30[y].id !== id || player !== d2.hR && a30[y].player !== player || (a30.splice(y, 1), a06 = !0);
		return a06
	}

	function a9n(du) {
		a91(340, du, 6, 0, a92(215, 245, 255), dR.gT, -1, !1)
	}
	this.a8w = "", this.f = function() {
		var self;
		a8u = 0, a8t = eH.eV.fT() ? 7 : 12, a8s = {
			y8: [0, 0, 0],
			a8x: [0, 0, 0],
			jJ: [220, 180, 180],
			a8y: [0, 0, 0],
			a7: [0, 0, 0]
		}, a30 = [], this.resize(), d2.gQ && this.dU(0, 18), bR.ki.kj[bR.kk].name.length && a9n(L(219, [bR.ki.kj[bR.kk].name])), a9n(L(220, [bR.bS - 2 + "x" + (bR.bU - 2)])), a9n(L(221, [g.gZ.gb(a9o.wX)])), a9o.wX !== a9o.wY && a9n(L(222, [g
			.gZ.gb(a9o.wY) + " (" + g.gZ.ga(100 * a9o.wY / a9o.wX, 1) + ")"
		])), 0 < a9o.wZ && a9n(L(197, [g.gZ.gb(a9o.wZ) + " (" + g.gZ.ga(100 * a9o.wZ / a9o.wX, 1) + ")"])), 0 < a9o.wa && a9n(L(223, [g.gZ.gb(a9o.wa) + " (" + g.gZ.ga(100 * a9o.wa / a9o.wX, 1) + ")"])), 10 === d2.dH && a91(120, L(224), 6, 0,
			a92(235, 255, 120), dR.gT, -1, !1), 0 !== (self = this).a8w.length && (a91(200, self.a8w, 0, 0, dR.fa, dR.gT, -1, !1), self.a8w = ""), d2.a5R && a91(340, L(177), 6, 0, a92(255, 200, 0), dR.gT, -1, !1)
	}, this.resize = function() {
		var tJ, y;
		if (ae = (ae = Math.floor((eH.eV.fT() ? .031 : .0249) * gG.gH)) < 10 ? 10 : ae, this.fontSize = Math.floor(2 * ae / 3), this.gI = g.h.fn(1, this.fontSize), a8p = j.gap, a8q = Math.floor(ae / 5), 0 < a30.length)
			for (tJ = a30, a30 = [], y = tJ.length - 1; 0 <= y; y--) a91(tJ[y].iR, tJ[y].du, tJ[y].id, tJ[y].player, tJ[y].a93, tJ[y].a94, tJ[y].a5u, tJ[y].a95, tJ[y].a96, tJ[y].y9, !0);
		this.a97()
	}, this.a97 = function() {
		a8v = document.createElement("canvas");
		var du = L(178),
			fs = (a8r = zn.measureText(du, this.gI) + 5 * a8q, a8v.height = ae, a8v.width = a8r, a8v.getContext("2d", {
				alpha: !0
			}));
		fs.font = this.gI, g.h.textBaseline(fs, 1), g.h.textAlign(fs, 1), fs.clearRect(0, 0, a8r, ae), fs.fillStyle = dR.zJ, fs.fillRect(0, 0, a8r, ae), fs.fillStyle = dR.fa, fs.fillText(du, Math.floor(a8r / 2), Math.floor(ae / 2))
	}, this.a98 = function() {
		var aY;
		return eL.iP ? eL.gF : 0 === (aY = a30.length) ? 0 : 1 === aY ? a30[0].a99 : oU(a30[0].a99, a30[1].a99)
	}, this.a9A = function() {
		var aY = a30.length;
		return eL.iP ? aY ? oU(eL.gF, a30[0].a99) : eL.gF : 0 === aY ? 0 : 1 === aY ? a30[0].a99 : 2 === aY ? oU(a30[0].a99, a30[1].a99) : oU(oU(a30[0].a99, a30[1].a99), a30[2].a99)
	}, this.iS = function(bn, bo) {
		for (var dc, a9B, a9C = iI(), y = a30.length - 1; 0 <= y; y--)
			if ((a9B = a9C - (y + 1) * ae) <= bo && bo < a9B + ae) return 50 === a30[y].id ? bn >= gG.gF - a8r - a8p - a30[y].gF && (bn >= gG.gF - a8r - a8p ? ee.cn.w1(a30[y].player) : kq.a9D(a30[y].player, 800, !1, 0), !0) : bn >= gG.gF - a30[y]
				.gF - a8p && (736 === a30[y].id ? (a9B = a30[y].du.split(" "), window.open(a9B[a9B.length - 1], "_blank")) : a30[y].a95 && (a30[y].y9 && a30[y].y9.qw ? (a9B = a30[y].y9.bw, dc = b9.bN(a9B) - 10, a9B = b9.bP(a9B) - 10, kq.a9F(
					dc, a9B, 19 + dc, 19 + a9B)) : a30[y].y9 && a30[y].y9.ak ? kq.a9G(a30[y].player, a30[y].y9.kN) : (kq.a9D(a30[y].player, 800, !1, 0), 0 <= a30[y].a5u && (dc = a30[y].a5u, a30[y].a5u = a30[y].player, a30[y].player =
					dc))), !0);
		return !1
	}, this.dP = function(cU, du, id, cT, a93, a94, a5u, a95, a96, y9) {
		a91(cU, du, id, cT, a93, a94, a5u, a95, a96, y9)
	}, this.cE = function(a9H) {
		a91(300, a9H, 252, 0, dR.fa, dR.gT, -1, !1)
	}, this.a9L = function(id) {
		for (var y = a30.length - 1; 0 <= y; y--) a30[y].id === id && (a30[y].iR = 1)
	}, this.dU = function(player, id) {
		0 === id ? (zn.v3(player, 0), a9M(423, 0), a91(160, L(179, [cV.dQ[player]]), 423, player, "rgb(10,220,10)", dR.gT, -1, !1)) : 1 === id ? (a9N(50, d2.hR), zn.v3(player, 1), a91(360, L(180, [cV.dQ[player]]), 0, player, dR.a87, dR.gT, -1, !
			0), kq.a9D(player, 2700, !1, 0)) : 2 === id ? (zn.v3(player, 2), a91(0, L(181), 0, player, "rgb(10,255,255)", dR.gT, -1, !0), kq.a9D(player, 2700, !1, 0)) : 3 === id ? (zn.v3(player, 2), a91(0, L(182, [cV.dQ[player]]), 0, player,
			dR.fa, dR.gT, -1, !0), kq.a9D(player, 2700, !1, 0)) : 4 === id ? this.dW(1, player, player) : 5 === id ? 2 === cV.oV[player] || g.cn.cx(d2.ed) || (function(id, a9V) {
			var y, a9W = 0,
				aY = a30.length;
			for (y = 0; y < aY; y++)
				if (a30[y].id === id && a9V <= ++a9W) return a30.splice(y, 1)
		}(1, 5), qg.rT(player) ? a91(180, L(183, [cV.dQ[player]]), 1, player, a92(255, 200, 180), dR.gT, -1, !0) : (a9M(573, 0), a91(180, L(184, [cV.dQ[player]]), 573, player, dR.a87, dR.gT, -1, !0))) : 18 === id ? a91(255, L(185), 18, 0, dR
			.fa, dR.gT, -1, !1) : 21 === id ? a91(220, L(186), id, 0, dR.fa, dR.gT, -1, !1) : 22 === id ? this.dW(2, player, player) : 59 === id && a91(0, L(187), id, 0, dR.a8J, dR.gT, 0, !1)
	}, this.a58 = function(a9H) {
		a91(200, L(188, [a9H]), 94, 0, dR.fa, dR.a85, -1, !1)
	}, this.a9P = function(a9Q) {
		if (d2.ed === a9Q && !d2.g5)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a91(0, "Your Win Count is now " + __fx.wins.count, 3, a9Q, dR.fa, dR.gT, -1, !0);
		cV.cW[a9Q] && (zn.v3(a9Q, 2), d2.g6 < 100 ? a91(0, L(182, [cV.dQ[a9Q]]), 3, a9Q, dR.fa, dR.gT, -1, !0) : a91(0, L(189, [cV.dQ[a9Q]]), 3, a9Q, dR.fa, dR.gT, -1, !0))
	}, this.wB = function(bq) {
		var a9S, du, a9R = "(" + b9.bN(bq >> 2) + ", " + b9.bP(bq >> 2) + ")",
			a95 = !1,
			player = 0;
		bE.pY(bq) ? bE.pP(bq) ? a9R = L(190, [a9R]) : (player = bE.pR(bq), du = L(191, [g.fs.gO(cV.i3[player], g.h.fn(0, 10), 150)]) + "   ", du = (du += L(192, [g.gZ.gb(cV.cp[player])]) + "   ") + L(193, [g.gZ.gb(cV.cW[player])]) + "   ", d2
				.gn && (a9S = aL.di[aL.hQ[aL.dI[player]]], du += L(176) + ": " + a9S + "   "), g.cn.cx(player) && (du += L(173) + ": " + aN.a4K[aN.dN[player]] + "   "), a9R = du = (du += L(194, [player]) + "   ") + L(195, [a9R]), a95 = !0) :
			a9R = bE.sC(bq) ? L(196, [a9R]) + "   #" + bE.bF(bq) : L(197, [a9R]), e8.e9 = !0, a9M(55, 0), a91(220, a9R, 55, player, dR.fa, dR.gT, -1, a95, void 0, void 0, !0)
	}, this.wD = function(a9T) {
		var ag = b5.ax,
			player = ag.jR[a9T] >> 3,
			du = (e8.e9 = !0, a9M(55, 0), L(198, [cV.dQ[player]]) + "   ");
		a91(220, du += L(192, [g.gZ.gb(ag.jX[a9T])]), 55, player, dR.fa, dR.gT, -1, !0)
	}, this.a6z = function(nk, a2l, rF) {
		nk === d2.ed ? a91(175, " " + L(199, [cV.dQ[a2l]]) + ": ", 1001, a2l, a92(200, 255, 210), dR.gT, -1, !0, rF) : this.a9U(nk, rF)
	}, this.a9U = function(nk, rF) {
		a9M(1e3, 0), a91(175, cV.dQ[nk] + ": ", 1e3, nk, dR.fa, "rgba(5,60,25,0.9)", -1, !0, rF)
	}, this.a9X = function() {
		var a9H;
		d2.a2p ? (a9H = L(200), zn.a9Y(L(201), 2, 1, 12), a91(0, a9H, 40, 0, "rgb(10,220,10)", dR.gT, -1, !1)) : (a9H = L(202), zn.a9Y(L(203), 2, 0, 16), a91(0, a9H, 41, 0, dR.fa, dR.gT, -1, !1))
	}, this.a9Z = function() {
		var aj = cV.dQ,
			bW = d2.data;
		a91(300, aj[0] + " [" + d2.a9a.a9b(bW.elo[0]) + "] vs " + aj[1] + " [" + d2.a9a.a9b(bW.elo[1]) + "]", 65, 0, dR.dS, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a9c = function(a9H) {
		a91(350, a9H, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a9d = function(a9e) {
		a91(0, L(a9e ? 204 : 205), 247, 0, dR.a2I, dR.gT, -1, !1)
	}, this.a9f = function(a9g, a9h, a9i) {
		var bW = d2.data,
			aj = cV.dQ;
		a91(0, aj[0] + ": " + d2.a9a.a9b(bW.elo[0]) + " -> " + a9g, 66, 0, dR.fa, a9i[0], -1, !1), a91(0, aj[1] + ": " + d2.a9a.a9b(bW.elo[1]) + " -> " + a9h, 66, 1, dR.fa, a9i[1], -1, !1)
	}, this.a71 = function(player, id) {
		0 === id ? a9N(50, player) ? (a91(128, L(206, [cV.dQ[player]]), 52, player, a92(180, 255, 180), dR.gT, -1, !0), qg.qa(player, 2, 255)) : a91(384, L(207, [cV.dQ[player]]), 51, player, a92(210, 210, 255), dR.gT, -1, !0) : a9N(51, player) ?
			(a91(128, L(208, [cV.dQ[player]]), 52, player, dR.fa, "rgba(60,120,10,0.9)", -1, !0), qg.qa(player, 2, 255)) : (a91(384, L(209, [cV.dQ[player]]), 50, player, dR.fa, "rgba(90,90,90,0.9)", -1, !0), qg.qa(player, 2, 96))
	}, this.a73 = function(y8, target) {
		var color = a92(210, 255, 210);
		1 < y8.length ? a91(230, L(210, [y8.length, cV.dQ[target]]), 66, target, color, dR.gT, -1, !0) : a91(230, L(211, [cV.dQ[y8[0]], cV.dQ[target]]), 66, y8[0], color, dR.gT, target, !0)
	}, this.a9j = function(player, target) {
		a91(230, L(212, [cV.dQ[player], cV.dQ[target]]), 66, player, dR.fa, "rgba(75,65,5,0.9)", target, !0)
	}, this.dO = function(id, aj) {
		a9M(id, aj)
	}, this.rU = function(id, player) {
		a9N(id, void 0 === player ? d2.hR : player)
	}, this.y0 = function(id) {
		for (var y = a30.length - 1; 0 <= y; y--)
			if (a30[y].id === id) return a30[y];
		return null
	}, this.a9k = function(qQ, a9l, player) {
		2 !== cV.oV[d2.ed] && a91(200, 1 === qQ ? L(213, [cV.dQ[player]]) : L(214, [g.gZ.gb(qQ), cV.dQ[player]]), 30, player, "rgb(190,255,190)", dR.gT, -1, !0)
	}, this.a9m = function(qQ, player) {
		2 !== cV.oV[d2.ed] && (a9M(31, 0), 2 === cV.oV[player] || player >= d2.g6 ? a91(150, 1 === qQ ? L(215, [cV.dQ[player]]) : L(216, [cV.dQ[player], g.gZ.gb(qQ)]), 31, player, dR.dS, "rgba(205,205,205,0.9)", -1, !0) : a91(150, 1 === qQ ? L(
			217, [cV.dQ[player]]) : L(218, [cV.dQ[player], g.gZ.gb(qQ)]), 31, player, dR.dS, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a9p = function(gS) {
		for (var a7 = e8.o4(), y = 2; 0 <= y; y--) 0 < a8s.a8y[y] && (gS || a8s.a7[y] < a7 - 220) && this.a9q(y)
	}, this.a9q = function(id) {
		var du, aY = a8s.a8y[id],
			player = a8s.y8[id];
		a8s.a8y[id] = 0, 1 === aY ? (0 === id ? du = L(225, [cV.dQ[player], cV.dQ[a8s.a8x[0]]]) : 1 === id ? du = L(226, [cV.dQ[player]]) : 2 === id ? du = L(227, [cV.dQ[player]]) : 3 === id && (du = L(228, [cV.dQ[player]])), a9M(7, 0), a91(a8s
			.jJ[id], du, 7, a8s.a8x[id], dR.fa, dR.gT, -1, !0)) : (du = L(0 === id ? 229 : 1 === id ? 230 : 231, [aY]), a9M(7, 0), a91(a8s.jJ[id], du, 7, player, dR.fa, dR.gT, -1, !1))
	}, this.dW = function(id, ub, a5u) {
		var a7 = e8.o4(),
			aY = a8s.a8y[id] + 1;
		a8s.a8y[id]++, a8s.y8[id] = ub, a8s.a8x[id] = a5u, 1 === aY && (a8s.a7[id] = a7), (1 === aY && (d2.gl < 32 || 2 === d2.h5) || 1 < aY && (a8s.a7[id] < a7 - 140 || 2 === d2.h5)) && this.a9q(id)
	}, this.c8 = function() {
		a9r.c8();
		for (var tZ = (tZ = a30.length - a8t) <= 1 ? 1 : tZ * tZ, y = a30.length - 1; 0 <= y; y--) 0 < a30[y].iR && (a30[y].iR -= tZ, a30[y].iR <= 0) && (e8.e9 = !0, a30.splice(y, 1));
		! function() {
			var aj, y;
			if (128 !== a8u && !(++a8u < 128))
				for (aj = 5, y = g7.g8 - 1; 0 <= y; y--) 1 === cV.oV[g7.gx[y]] && 0 < aj-- && a91(240, L(228, [cV.dQ[g7.gx[y]]]), 1, g7.gx[y], dR.dS, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a9p(!1)
	}, this.h8 = function() {
		for (var oT, bo = iI(), y = a30.length - 1; 0 <= y; y--) oT = bo - (y + 1) * ae, 50 === a30[y].id ? (h9.drawImage(a30[y].canvas, gG.gF - a30[y].gF - a8r - a8p, oT), h9.drawImage(a8v, gG.gF - a8r - a8p, oT)) : h9.drawImage(a30[y].canvas,
			gG.gF - a30[y].gF - a8p, oT)
	}
}

function a00(title, c, cP) {
	var n, cQ;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), cQ.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, cP = cP || [new q("⬅️ " + L(4), function() {
		t.u()
	}, dR.a86)], n = new v(title, cP), cQ = new a(n.x, c), g.h.textAlign(n.x.style, 1)
}

function q(a9t, a9u, a9v, a9w, a9x) {
	var self, a9y = document.createElement("button");

	function fd() {
		var hx;
		cA.cB() || (hx = g.color.aA4(a9v), !1 !== a9w && 0 < hx[0] && hx[0] < 255 && hx[0] === hx[1] && hx[0] === hx[2]) || (a9y.style.backgroundColor = g.color.fh(a9v, hx[3] && hx[3] < 120 ? 150 : 50))
	}

	function aA0() {
		if (a9w) {
			var hx = g.color.aA4(a9v);
			if (hx[0] === hx[1] && hx[0] === hx[2]) return
		}
		a9u && ((hx = a9u(this)) ? 2 === hx && fd() : aA5(this))
	}

	function aA1() {
		this.style.backgroundColor = a9v
	}

	function fe() {
		aA5(this)
	}

	function aA5(bW) {
		bW.style.backgroundColor = a9v, bW.blur()
	}
	this.button = a9y, this.a9 = a9u, this.f3 = a9v, this.a9z = function(aA2) {
			aA2 = 1.1 - Math.min(.01 * a9t.length, .6) + .2 * aA2;
			a9y.style.fontSize = aA2.toFixed(1) + "em"
		}, this.f5 = function(a7) {
			a7 ? 1 === a7 ? a7 = dR.f4 : 2 === a7 && (a9w = 1, a7 = dR.f4) : (a9w = 0, a7 = dR.fb), this.f3 = a9v = a7, a9y.style.backgroundColor = a7
		}, self = this, a9y.innerHTML = a9t, a9y.style.color = a9x ? dR.a2I : dR.fa, a9y.style.userSelect = "none", a9y.style.outline = "none", a9y.style.overflowWrap = "break-word", self.f5(a9v), a9y.style.border = "none", a9y.style.font =
		"inherit", self.a9z(0), a9y.style.padding = "0em 0.3em", a9y.onclick = aA0, a9y.addEventListener("mouseover", fd), a9y.addEventListener("mouseout", fe), a9y.addEventListener("focus", fd), a9y.addEventListener("blur", aA1)
}

function aA6() {
	this.tk = new aA7, this.m8 = new x0, this.lP = new a8T, this.f = function() {
		this.tk.f()
	}
}

function aA8() {
	this.size = 0, this.cF = 0, this.lK = null, this.f = function(lK) {
		this.cF = 0, this.lK = lK, this.size = lK.length
	}, this.fp = function() {
		this.lK = null
	}, this.cL = function(size) {
		for (var aU = 0, lK = this.lK, re = this.cF + size - 1, y = this.cF; y <= re; y++) aU |= (lK[y >> 3] >> 7 - (7 & y) & 1) << re - y;
		return this.cF += size, this.cF > 8 * this.size && console.error("Unwrapper Overflow"), aU
	}, this.aA9 = function(size) {
		var ak = size >> 1;
		return (1 << ak) * this.cL(size - ak) + this.cL(ak)
	}, this.nc = function(aAA) {
		return this.size === lA.aAB(aAA)
	}, this.aAC = function(cI, aAD, aAE) {
		var aj = this.cL(cI);
		if (!aj) return null;
		for (var cI = Math.max(aj, aAE), aZ = new(aAD <= 8 ? Uint8Array : aAD <= 16 ? Uint16Array : Uint32Array)(cI), y = 0; y < aj; y++) aZ[y] = this.cL(aAD);
		aAE = aZ[aj - 1];
		return aAE && aZ.fill(aAE, aj), aZ
	}, this.aAF = function(cI, aAG, aAE) {
		var aj = this.cL(cI);
		if (!aj) return null;
		for (var cI = Math.max(aj, aAE), aZ = new Array(cI), y = 0; y < aj; y++) aZ[y] = this.aAH(aAG);
		return aZ.fill(aZ[aj - 1], aj), aZ
	}, this.aAH = function(cI) {
		return nu.m8.nv(this.cL(cI))
	}, this.aAI = function() {
		var du = lO.tk.xf(lO.tk.xg(this.cL(30))),
			du = g.gZ.aAJ(du, "_", "/");
		du = g.gZ.aAJ(du, "-", "+");
		for (var aAK = "";
			(du.length + aAK.length) % 4;) aAK += "=";
		du = "data:image/png;base64," + du + aAK;
		var oy = new Image;
		oy.onload = function() {
			a0z.o1.a4x(oy), oy.onload = null, oy = null
		}, oy.src = du
	}
}

function aAL() {
	this.v3 = function(player, bw) {
		aAM.aAN(player, b9.bN(bw), b9.bP(bw)) && (e8.e9 = !0), d2.g5 && this.c8()
	}, this.c8 = function() {
		d2.gQ = !1;
		for (var y = 0; y < d2.g6; y++) 0 !== cV.dX[y] && 0 === cV.cW[y] && aAM.aAO(y);
		0 !== cV.dX[d2.ed] ? (aP.dV[7] = cV.cW[d2.ed], aP.dV[8] = cV.cp[d2.ed], t0.aAP(), d9.gK(), d2.ea || kq.a9F(cV.dY[d2.ed] - 5, cV.da[d2.ed] - 5, cV.dZ[d2.ed] + 5, cV.db[d2.ed] + 5), a11.f()) : d8.show(!1, !1, !1, !0), cD.a9L(18), qg.qZ(),
			qg.gR(!0), a0x.ax.a1m(), eD.a5(), d2.aAQ = null, sJ.aAR = !0, sJ.aAS(), d2.g5 && eH.eV.setState(1)
	}
}

function aAT() {
	this.f2 = function() {
		aV.ar.n1(), aV.ar.n3(), an.ax.close(0, 3255), 0 === eH.id ? eH.aAU && eH.aAU.clear() : 1 === eH.id ? eH.p1.saveString(199, "") : 2 === eH.id && eH.aAV.postMessage("clear")
	}, this.eS = function() {
		2 === eH.id ? eH.aAV.postMessage("showConsentForm") : 1 === eH.id && eH.p1.setState(7)
	}, this.eW = function() {
		this.setState(14)
	}, this.fT = function() {
		return 1 === aV.aW.aAW(2)
	}, this.aAX = function() {
		aV.aW.mz(102, "")
	}, this.setState = function(kV) {
		1 === eH.id && 5 <= eH.eU && eH.p1.setState(kV)
	}, this.zI = function() {
		var j0;
		1 === eH.id && 7 <= eH.eU ? eH.p1.setState(5) : ((j0 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = j0.toString())
	}, this.aAY = function() {
		1 !== eH.id || eH.eU < 17 || eH.p1.saveString(23, document.documentElement.outerHTML)
	}, this.aAZ = function() {
		0 !== eH.id && (1 === eH.id ? eH.p1.prepareAd("1688441405") : 2 === eH.id && (0 === eH.eU ? eH.aAV.postMessage("prepare ad 1770251391") : eH.aAV.postMessage("loadAds 1770251391")))
	}, this.wM = function(cU) {
		return 0 !== eH.id && 1 !== eH.id && 2 === eH.id && (0 === eH.eU ? eH.aAV.postMessage("show ad " + cU) : eH.aAV.postMessage("showAd"), !0)
	}, this.aAa = function() {
		2 === eH.id && eH.eU < 23 && t.z(4, 1, new cN("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + eo.er + "' target='_blank'>" +
			eo.er + "</a>", !0, [new q("⬅️ " + L(4), function() {
				t.z(0)
			}, dR.a86)]))
	}
}

function aAo(gS) {
	f1 && !gS || (aAq(), gA = new a3x, eo = new aAr, g = new aAs, dR = new a7g, d2 = new aAt, aX = new aA, lO = new aA6, nu = new a8d, aN = new a4D, cf = new aAu, a0u = new aAv, kq = new aAw, aAM = new aAx, aAb = new a0e, a7F = new aAy, eD = new vR,
		eb = new aAz, cD = new a8o, aQ = new aB0, uM = new sN, zn = new aB1, t0 = new aB2, iZ = new aB3, no = new aB4, gM = new oD, h6 = new aB5, d9 = new fr, d8 = new a7R, zl = new aB6, zN = new aB7, av = new aB8, qY = new dg, bE = new ri, aAe =
		new cR, g7 = new aB9, vy = new aBA, uX = new wN, cc = new a1A, gW = new aBB, aAc = new aBC, qg = new pm, cV = new aBD, aAd = new aBE, dL = new aBF, eI = new p2, a9o = new wV, kg = new aBG, aAf = new aBH, an = new aBI, dJ = new aBJ, k6 =
		new jl, a39 = new aBK, aAg = new aBL, a11 = new aBM, gG = new zX, eL = new aBN, a12 = new aBO, ue = new aBP, a9r = new aBQ, aAh = new aBR, a0v = new aBS, vv = new aBT, or = new on, ee = new aBU, a0z = new nw, zm = new i9, lA = new aBV,
		lN = new aBW, cK = new aA8, iw = new it, cA = new aBX, b9 = new yn, b5 = new aBY, bK = new aBZ, a0x = new aBa, aAi = new aBb, dB = new lr, bR = new aBc, aAj = new uF, t = new aBd, aAk = new aBe, eH = new aBf, f1 = new xo, cz = new vN,
		aV = new hA, aL = new hG, go = new aBg, sL = new aBh, sJ = new aBi, ej = new bz, zj = new aBj, aP = new aBk, aO = new aBl, e8 = new aBm, iL = new fR, j = new aBn, a7O = new a4z, aAm = new aBo, aAn = new a4a, fj = new aBp, xD = new aBq,
		a31 = new aBr, uU = new aBs, mP = new pM, f1.f(), eH.f(), gG.aM(), aV.f(), aX.f(), aX.aK(), (c6 = new aBu).f(), g.f(), ej.f(), an.f(), lO.f(), nu.f(), bR.f(), t.f(), eF = new zw, gG.f(), eH.eV.aAY(), e8.f(), j.f(), zj.f(), aAl = new a1x,
		dJ.f(), gW.aBv(), aAk.f(), a9o.f(), av.f(), no.f(), aAd.f(), cA.f(), qY.f(), cz.f(), e8.e9 = !0, setTimeout(function() {
			bR.kv(2, 14071)
		}, 0), t.z(5, 5), iw.cS() || eH.eV.aAa(), gG.n0(), f1.xs = 1)
}

function yQ(aBw, a9t, aBx) {
	function click() {
		var value = 1 - aBw.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + a9t, void 0 !== aBw.cF ? aV.ar.at(aBw.cF, value) : aBw.value = value, aBx && aBx(value)
	}
	var dx;
	a9t = a9t || L(232), this.dx = document.createElement("p"), (dx = this.dx).textContent = (aBw.value ? "🟩 " : "⬜ ") + a9t, dx.style.margin = "0", dx.style.marginBottom = "0.5em", dx.style.cursor = "pointer", dx.addEventListener("click", click)
}

function aBy() {
	this.c8 = function(lK) {
		var id, wk, re;
		for (cK.f(lK), cK.cF += 2, re = 8 * cK.size; cK.cF + 8 <= re;) id = cK.cL(4), wk = cK.cL(9), 0 === id ? this.aBz(id, wk, cK.cL(22)) : 1 === id ? this.aBz(id, wk, cK.cL(10), cK.cL(10)) : 2 === id ? this.aBz(id, wk, cK.cL(10), cK.cL(9)) :
			3 === id ? this.aBz(id, wk, cK.cL(10), cK.cL(27)) : 4 === id ? this.aBz(id, wk, cK.cL(10), cK.cL(16)) : 5 === id || 6 === id ? this.aBz(id, wk, cK.cL(10)) : 7 === id ? this.aBz(id, wk, cK.cL(1)) : 10 === id ? this.aBz(id, wk, cK.cL(
				20), cK.cL(22)) : this.aBz(id, wk)
	}, this.aC0 = [], this.aC1 = function() {
		for (var aC3 = 0, aC4 = 0, aC5 = 0, aC6 = 0, aC7 = 0, aC8 = 0, y = 0; y < 512; y++) aC3 += cV.dX[y], aC4 += cV.cW[y], aC5 += cV.cp[y], aC6 += b5.ax.cX[y];
		aC7 += b5.ax.jP, aC8 += g7.g8, this.aC0.push(aC5 % 1073741824 * 4 + (aC3 + aC4 + aC6 + aC7 + aC8) % 4)
	}, this.aBz = function(id, wk, wu, zx) {
		0 === id ? ee.aC9.uW(wk, wu) : 1 === id ? ee.aC9.sz(wk, wu, zx) : 2 === id ? ee.aC9.a3f(wk, wu, zx) : 3 === id ? ee.aC9.uh(wk, wu, zx) : 4 === id ? ee.aC9.uk(wk, wu, zx) : 5 === id ? ee.aC9.sx(wk, wu) : 6 === id ? ee.aC9.aCA(wk, wu) :
			7 === id ? ee.aC9.uq(wk, wu) : 8 === id ? ee.aC9.eg(wk) : 9 === id ? ee.aC9.aCB(wk) : 10 === id && ee.aC9.uc(wk, wu >> 10, zx, wu % 1024)
	}
}

function aBS() {
	this.aCC = null, this.f = function() {
		10 !== d2.dH ? this.aCC = null : this.aCC = new Uint32Array(d2.hR)
	}, this.c8 = function() {
		10 === d2.dH && this.bH()
	}, this.bH = function() {
		for (var cT, target, gz, aCC = this.aCC, y8 = g7.gx, oH = cV.cp, y = g7.g8 - 1; 0 <= y; y--)(cT = y8[y]) >= d2.g6 || (target = Math.max(gA.gB(oH[cT], 4), 2048), gz = Math.max(gW.h0(cT), 100), aCC[cT] += gA.gB(gz * target, 1e4), aCC[cT] >
			target && (aCC[cT] = target))
	}, this.a3c = function(player, dN) {
		return dN > this.aCC[player] ? (dN = this.aCC[player], this.aCC[player] = 0) : this.aCC[player] -= dN, dN
	}
}

function aCD() {
	this.uW = function(player, bw) {
		g.cn.uK(0) && g.cn.gy(player) && b9.z8(bw) && (a0z.nx.a0r(0, player, bw), d2.aAQ.v3(player, bw))
	}, this.sz = function(player, z6, pc) {
		g.cn.uK(1) && g.cn.gy(player) && g.cn.a3V(player, pc) && g.cn.a3Y(player, z6, 12, 0) && g.cn.a3p(player, pc) && ((pc = cc.a0G(player, bK.a3q[0])) || cc.a0H(player)) && (cV.a8h[player]++, a0z.nx.a0r(1, player, z6, bK.a3q[0]), k6.jt.aCF(
			player, pc)) && (k6.jv.aCG[player] = 1, g.cn.a3o(player), aP.aCH(player, z6), k6.jt.aCI(player))
	}, this.a3f = function(player, z6, a3g) {
		g.cn.uK(1) && g.cn.gy(player) && d2.gn && g.cn.a3V(player, a3g) && g.cn.a3r(player, a3g) && g.cn.a3e(player, g.cn.z5(player, z6), a3g) && vy.v3(a3g, bK.a3d[0]) && (a0z.nx.a0r(2, player, z6, a3g), gW.vz(player, a3g))
	}, this.uh = function(player, z6, aCJ) {
		bK.bL[1] = 7 & aCJ;
		var bw = aCJ >> 3;
		g.cn.uK(1) && g.cn.gy(player) && b9.z8(bw) && b5.b6.b7(player) && b5.b6.a1w(bw) && g.cn.a3Y(player, z6, 32, 0) && b5.k3.vF(player, bw, 1) && (k6.jv.aCG[player] = 1, aP.aCK(player), a0z.nx.a0r(3, player, z6, aCJ), g.cn.a3o(player), aAm.aCL
			.uh(player), b5.ax.a5U(player))
	}, this.uk = function(player, z6, kN) {
		849 === z6 ? this.sy(player, kN) : g.cn.uK(1) && g.cn.gy(player) && g.cn.a3Y(player, z6, 32, 0) && b5.ui.v0(player, kN) && (aP.aCK(player), a0z.nx.a0r(4, player, z6, kN), g.cn.a3o(player), aAm.aCL.uk(player), b5.ax.a5U(player))
	}, this.sy = function(player, kN) {
		g.cn.uK(1) && g.cn.gy(player) && b5.aCM.c8(player, kN) && a0z.nx.a0r(4, player, 849, kN)
	}, this.sx = function(player, pc) {
		513 === pc ? this.ek(player) : g.cn.uK(1) && g.cn.gy(player) && (pc = Math.min(pc, d2.hR), cc.a0G(player, pc)) && (a0z.nx.a0r(5, player, pc), cc.a1F(player, pc))
	}, this.aCA = function(player, rF) {
		(g.cn.uK(1) || g.cn.uK(2)) && g.cn.gy(player) && (rF = gA.yT(rF, 0, 1023), a0z.nx.a0r(6, player, rF), qg.qa(player, 0, rF))
	}, this.uq = function(player, aCN) {
		eL.up(player) && (a0z.nx.a0r(7, player, aCN), eL.aCO(player, aCN))
	}, this.eg = function(player) {
		(g.cn.uK(0) || g.cn.uK(1)) && g.cn.gy(player) && eb.ec(player) && (a0z.nx.a0r(8, player), aAi.eg(player))
	}, this.aCB = function(player) {
		a0z.nx.a0r(9, player), aAi.aCB(player)
	}, this.ek = function(player) {
		eL.ei(player) && (a0z.nx.a0r(5, player, 513), eL.ek(player))
	}, this.uc = function(player, z6, bw, pc) {
		g.cn.uK(1) && g.cn.gy(player) && g.cn.a3V(player, pc) && g.cn.a3p(player, pc) && b9.z8(bw) && uX.uY.aCP(player, bw) && (cc.a0G(player, bK.a3q[0]) || cc.a0H(player)) && (k6.jv.aCG[player] = 1, a0z.nx.a0r(10, player, (z6 << 10) + bK.a3q[0],
			bw), pc = g.cn.a3n(player, z6), cV.ca[player].push(bK.aCQ[0]), cc.v3(player, pc, bK.a3q[0]), cf.a0I(player, !0), aP.aCR(player))
	}
}

function aCS() {
	this.aCT = 0, this.c8 = function() {
		aQ.c8(), zN.c8(), gG.c8(), an.ax.c8(), a12.aCU(), e8.e9 && (e8.e9 = !1, av.h8())
	}
}

function wO() {
	this.uZ = function(bq) {
		var aCV;
		return bR.mS(bR.kk) && d2.data.passableMountains && (aCV = bE.bF(bq), this.aCW(d2.ed, aCV) || this.aCX(d2.ed, aCV)) && 0 !== (aCV = function(aCa) {
			for (var bn = b9.bN(aCa), bo = b9.bP(aCa), max = Math.max(bR.bS, bR.bU) - 2, aCb = max * max, a06 = !1, aCc = 0, hl = 0; hl < max; hl++) {
				var aCd, bw = function(bn, bo, hl) {
					for (var y = 0; y <= hl; y++)
						for (var qw = -1; qw < 2; qw += 2)
							for (var ak = -1; ak < 2; ak += 2)
								for (var a7 = 0; a7 < 2; a7++) {
									var bq = function(bn, bo) {
										if (b9.kJ(bn, bo)) {
											bn = b9.kK(bn, bo), bo = b9.bG(bn);
											if (bE.pY(bo) && bE.sB(bo)) return bn
										}
										return 0
									}(bn + a7 * qw * y + (1 - a7) * ak * hl, bo + a7 * ak * hl + (1 - a7) * qw * y);
									if (bq) return bq
								}
					return 0
				}(bn, bo, hl);
				bw && (aCd = b9.kF(bn, bo, bw)) < aCb && (aCc = bw, aCb = aCd, a06 || (a06 = !0, max = Math.floor(Math.sqrt(aCd)) + 1))
			}
			return aCc
		}(b9.z9(bq))) && (bq = b9.bG(aCV), bE.pP(bq) || (bq = bE.pR(bq)) !== d2.ed && mP.pb(bq, d2.ed)) ? aCV : 0
	}, this.aCP = function(player, bw) {
		bw = b9.bG(bw);
		if (bE.pY(bw)) {
			if (bE.pP(bw)) bK.a3q[0] = d2.hR;
			else if (bE.pR(bw) !== bK.a3q[0]) return !1;
			for (var dI = function(bq) {
					var pO = bE.pO,
						dI = [];
					loop: for (var bW = 3; 0 <= bW; bW--) {
						var a0C = bq + pO[bW];
						if (bE.sC(a0C)) {
							for (var id = bE.bF(a0C), y = 0; y < dI.length; y++)
								if (id === dI[y]) continue loop;
							bK.aCQ[dI.length] = a0C, dI.push(id)
						}
					}
					return dI
				}(bw), aY = dI.length, y = 0; y < aY; y++)
				if (this.aCW(player, dI[y]) || this.aCX(player, dI[y])) return bK.aCQ[0] = bK.aCQ[y], !0
		}
		return !1
	}, this.aCW = function(player, aCV) {
		for (var cm = cV.cm[player], aY = cm.length, bp = Math.max(gA.gB(aY, 12), 1), pO = bE.pO, y = 0; y < aY; y += bp)
			for (var ua = cm[y], bW = 3; 0 <= bW; bW--) {
				var a0C = ua + pO[bW];
				if (bE.sC(a0C) && aCV === bE.bF(a0C)) return !0
			}
		return !1
	}, this.aCX = function(player, aCV) {
		for (var cm = cV.cm[player], aY = cm.length, pO = bE.pO, y = 0; y < aY; y++)
			for (var ua = cm[y], bW = 3; 0 <= bW; bW--) {
				var a0C = ua + pO[bW];
				if (bE.sC(a0C) && aCV === bE.bF(a0C)) return !0
			}
		return !1
	}
}

function aCf() {
	this.cS = function(cF) {
		if ((pD = fj.pB.pD[cF]) < 2) return !1;
		var aCg = fj.ax.aCh[cF],
			aCi = 9 === aCg.oc ? 333 : 512,
			pD = Math.min(pD, aCi);
		8 === aCg.oc && (pD -= pD % 2);
		aCi = fj.pB.pC[cF].splice(0, pD), fj.pB.pD[cF] -= pD, pD = function(aCj) {
			if (fj.a6N) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var aY = aCj.length, iy = fj.a6N.iy, y = 0; y < aY; y++)
					if (aCj[y].iy === iy) return y
			}
			return -1
		}(aCi);
		return -1 === pD ? (fj.pB.aCm = fj.pB.aCm.concat(aCi), 1e3 < fj.pB.aCm.length && fj.pB.aCm.splice(0, fj.pB.aCm.length - 1e3), fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === cF && 1 === fj.ax.pA[2], !1) : (8 === aCg.oc && (aCg.oi = (aCg.oi +
			(pD >> 1)) % 1024, cF = pD - pD % 2, pD %= 2, aCi = aCi.slice(cF, 2 + cF)), a12.f(aCg, aCi, pD), !0)
	}, this.aCo = function(aCg, aCj, aCk) {
		var bW = d2.data = new a4p,
			aCr = (bW.spawningSeed = aCg.spawningSeed, aCg.oc < 7 ? (bW.gameMode = 1, bW.numberTeams = aCg.oc + 2) : 9 === aCg.oc ? (bW.gameMode = bW.isZombieMode = 1, bW.numberTeams = 2) : (bW.gameMode = 0, bW.battleRoyaleMode = 7 === aCg.oc ?
				0 : 10 === aCg.oc ? 1 : 2), bW.selectedPlayer = aCk, bW.isContest = aCg.og, bW.mapType = bR.aCp(aCg.kk) ? 0 : 1, bR.aCq(bW, aCg.kk), bW.mapSeed = aCg.mapSeed, bW.humanCount = aCj.length);
		bW.selectableSpawn = 1 === bW.gameMode || aCr < 100, bW.colorsData = new Uint32Array(aCr), bW.playerNamesData = new Array(aCr);
		for (var y = 0; y < aCr; y++) bW.colorsData[y] = aCj[y].color, bW.playerNamesData[y] = aCj[y].username;
		if (2 === bW.battleRoyaleMode)
			for (bW.elo = new Uint16Array(aCr), y = 0; y < aCr; y++) bW.elo[y] = aCj[y].elo;
		av.setState(8), bR.kv(aCg.kk, bW.mapSeed), d2.oA(), d2.aCs = 2
	}
}

function aB0() {
	var aCt, a1g, aCu, gF, ae, font, du;

	function aD0(aD1) {
		return aD1 < 10 ? "0" + aD1 : String(aD1)
	}
	this.f = function() {
		du = L(233)
	}, this.resize = function() {
		gF = Math.floor((eH.eV.fT() ? .53 : .36) * gG.gH), ae = Math.floor(.065 * gF), font = g.h.fn(1, Math.floor(.9 * ae)), aCu--, this.setTime()
	}, this.c8 = function() {
		this.setTime() && (e8.e9 = !0)
	}, this.setTime = function() {
		for (var cU = new Date, aCw = cU.getUTCMinutes(), aCx = cU.getUTCSeconds(), aCy = [0, 10, 20, 25, 30, 35, 40, 45, 50], aCz = (a1g = 3600 - 60 * aCw - aCx, a1g %= 300, 300), y = 0; y < aCy.length; y++)
			if ((60 * aCw + aCx + a1g) % 3600 == 60 * aCy[y]) {
				aCz = 0;
				break
			} return a1g += aCz, aCt = du + aD0(Math.floor(a1g / 60)) + ":" + aD0(a1g % 60), aCu !== (aCu = 60 * aCw + aCx) && (gF = zn.measureText(aCt, font), gF += Math.floor(.4 * ae), !0)
	}, this.h8 = function() {
		h9.lineWidth = 1 + Math.floor(ae / 15), h9.translate(gG.gF - ae, Math.floor(.5 * (gG.ae + gF))), h9.rotate(-Math.PI / 2), h9.fillStyle = dR.fa, h9.fillRect(0, 0, gF, ae), h9.strokeStyle = dR.dS, h9.strokeRect(0, 0, gF, ae + 10), h9
			.fillStyle = dR.dS, h9.font = font, g.h.textBaseline(h9, 1), g.h.textAlign(h9, 1), h9.fillText(aCt, Math.floor(gF / 2), Math.floor(.59 * ae)), h9.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aD2() {
	this.uh = function(player) {
		g.cn.d5(player) && cD.dP(80, L(234), 637, 0, dR.a8E, dR.gT, -1, !1)
	}, this.uk = function(player) {
		g.cn.d5(player) && cD.dP(80, L(235), 637, 0, dR.a8E, dR.gT, -1, !1)
	}
}

function aBJ() {
	var aD3, aZ;
	this.f = function() {
		for (var y = (aZ = new Uint16Array(101)).length - 1; 0 <= y; y--) aZ[y] = gA.gB(32768 * y, 100);
		this.ku(0)
	}, this.value = function(cT) {
		return aZ[cT]
	}, this.kt = function() {
		return gA.gB(aD3 - 1, 2)
	}, this.ku = function(ks) {
		aD3 = 2 * ks % 32768 + 1
	}, this.random = function() {
		return aD3 = 167 * aD3 % 32768
	}, this.fK = function(a9V) {
		return gA.gB(a9V * this.random(), 32768)
	}, this.dK = function(cT) {
		return 0 !== cT && this.random() < this.value(cT)
	}, this.kA = function(qw, ak) {
		return qw + this.fK(ak - qw)
	}
}

function aBG() {
	var aU, gF, ae, max, aD4, aD5, aD7, aD8, aD9, aDA, aDB, aDC, aDD, aDE, aD6 = 1e4;

	function aDM(aDK, aDL, aY) {
		var y;
		for (aD7[0] = aDK, y = 1; y < aY; y++) aD7[y] = aD7[y - 1] + aDL, aDL = aD7[y] >= aD6 ? (aD7[y] = aD6 - 1, -aDL) : aD7[y] < 0 ? (aD7[y] = 0, -aDL) : (aDL += 16384 <= dJ.random() ? aD5 : -aD5) < -aD4 ? -aD4 : aD4 < aDL ? aD4 : aDL
	}

	function aDO(bn, bo, aDP, aY) {
		(aDP ? function(bn, bo, aY) {
			var y;
			for (y = 0; y < aY; y++) aU[bo * gF + bn + y] = aD7[y]
		} : function(bn, bo, aY) {
			var y;
			for (y = 0; y < aY; y++) aU[bo * gF + bn + y * gF] = aD7[y]
		})(bn, bo, aY)
	}

	function aDS(value, aY) {
		var y, rf, bq, tZ = value - aD7[aY - 1];
		if (0 != tZ) {
			for (rf = 1 + gA.gB(Math.abs(tZ), aY - 1), rf = tZ < 0 ? -rf : rf, aD7[aY - 1] = value, bq = (bq = aY - 1 - gA.gB(Math.abs(tZ), Math.abs(rf))) < 1 ? 1 : aY - 2 < bq ? aY - 2 : bq, y = aY - 2; bq <= y; y--) aD7[y] += tZ - (aY - 1 - y) *
			rf;
			(tZ < 0 ? function(aY) {
				var y;
				for (y = aY - 2; 1 <= y; y--) aD7[y] < 0 && (aD7[y] = -aD7[y] - 1)
			} : function(aY) {
				var y;
				for (y = aY - 2; 1 <= y; y--) aD7[y] >= aD6 && (aD7[y] = 2 * aD6 - aD7[y] - 1)
			})(aY)
		}
	}

	function aDV(t2, t3, aY) {
		for (var y = 0; y < aY; y++) t2[y] = t3[y]
	}

	function aDW(aZ) {
		for (var y = 0; y < aZ.length - 1; y++) aZ[y] = aZ[y + 1] - aZ[y];
		aZ[aZ.length - 1] = aZ[aZ.length - 3]
	}

	function aDX(vp, gap, bu) {
		aD8.push(vp), aD9.push(gap), aDA.push(bu)
	}
	this.kv = function(dy) {
		! function(dy) {
			var y;
			for (gF = dy[0], ae = dy[1], aD4 = dy[2], aD5 = dy[3], aU = new Int16Array(gF * ae), max = ae < gF ? gF : ae, aD7 = new Int16Array(max), aD8 = [], aD9 = [], aDA = [], aDB = new Array(gF), aDC = new Array(ae), y = gF - 1; 0 <= y; y--)
				aDB[y] = !1;
			for (y = ae - 1; 0 <= y; y--) aDC[y] = !1;
			aDD = new Int16Array(gF), aDE = new Int16Array(ae)
		}(dy),
		function(aY) {
			var aDK = dJ.random() % aD6,
				aDL = dJ.random() % (2 * aD4 + 1) - aD4;
			aDM(aDK, aDL, aY)
		}(max), aDV(aDE, aD7, ae), aDO(0, 0, !0, gF);
		var bn, bo, dy = aU[0],
			aY = max,
			aDL = dJ.random() % (2 * aD4 + 1) - aD4;
		for (aDM(dy, aDL, aY), aDV(aDD, aD7, gF), aDO(0, 0, !1, ae), aDW(aDD), aDW(aDE), aDM(aU[gF - 1], aDD[gF - 1], ae), aDO(gF - 1, 0, !1, ae), aDM(aU[gF * (ae - 1)], aDE[ae - 1], gF), aDS(aU[gF * ae - 1], gF), aDO(0, ae - 1, !0, gF), aDB[gF -
				1] = aDB[0] = !0, aDC[ae - 1] = aDC[0] = !0, aDX(0, gF, !0), aDX(0, ae, !1), ! function() {
				var aDZ, vp;
				for (;;) {
					if (aDZ = function() {
							var y, aDZ = aD8.length - 1;
							for (y = aDZ - 1; 0 <= y; y--) aD9[y] > aD9[aDZ] && (aDZ = y);
							return aDZ
						}(), aD9[aDZ] < 5) return;
					vp = aD8[aDZ] + gA.gB(aD9[aDZ], 2), (aDA[aDZ] ? function(bn) {
						var aY, aDc, y, aDd = 0,
							aDe = 0;
						for (; aDe < ae - 1;) {
							for (y = aDd + 1; y < ae; y++)
								if (aDC[y]) {
									aDe = y;
									break
								} aY = aDe - aDd + 1, aDM(aU[bn + gF * aDd], 0 === aDd ? aDD[bn] : aD7[aDc - 1] - aD7[aDc - 2], aY), aDS(aU[aDe * gF + bn], aY), aDO(bn, aDd, !1, aY), aDc = aY, aDd = aDe
						}
						aDB[bn] = !0
					} : function(bo) {
						var aY, aDc, y, aDd = 0,
							aDe = 0;
						for (; aDe < gF - 1;) {
							for (y = aDd + 1; y < gF; y++)
								if (aDB[y]) {
									aDe = y;
									break
								} aY = aDe - aDd + 1, aDM(aU[bo * gF + aDd], 0 === aDd ? aDE[bo] : aD7[aDc - 1] - aD7[aDc - 2], aY), aDS(aU[bo * gF + aDe], aY), aDO(aDd, bo, !0, aY), aDc = aY, aDd = aDe
						}
						aDC[bo] = !0
					})(vp), aDX(vp, aD8[aDZ] + aD9[aDZ] - vp, aDA[aDZ]), aD9[aDZ] = vp - aD8[aDZ] + 1
				}
			}(), bn = 0; bn < gF; bn++)
			if (!aDB[bn])
				for (bo = 0; bo < ae; bo++) aDC[bo] || ! function(bn, bo) {
					var value = aU[bo * gF + bn - 1] + aU[(bo - 1) * gF + bn],
						aD1 = 2;
					aDB[bn + 1] && (aD1++, value += aU[bo * gF + bn + 1]);
					aDC[bo + 1] && (aD1++, value += aU[(bo + 1) * gF + bn]);
					aU[bo * gF + bn] = gA.gB(value, aD1)
				}(bn, bo)
	}, this.kw = function() {
		return aU
	}, this.kh = function() {
		aU = null
	}
}

function aAv() {
	var size, aDg;
	this.f = function() {
		size = d2.g9, aDg = new Uint16Array(d2.hR);
		for (var g6 = d2.g6, y = d2.g9 - 1; 0 <= y; y--) aDg[y] = g6 + y
	}, this.c8 = function() {
		k6.k0.c8();
		for (var y = size - 1; 0 <= y; y--)
			if (0 === cV.dX[aDg[y]]) {
				qw = void 0;
				var qw = y;
				size--, aDg[qw] = aDg[size]
			} else aN.c8(aDg[y])
	}, this.aDi = function(cT) {
		aDg[size++] = cT
	}
}

function aDk() {
	function aE3(aZ, a3, a4) {
		var aE4 = aZ[a3];
		aZ[a3] = aZ[a4], aZ[a4] = aE4
	}
	this.pC = [
		[],
		[],
		[],
		[]
	], this.pD = [0, 0, 0, 0], this.aCm = [], this.aDl = function(aDm, iy, username, pJ, a3u, a6O, elo, color, nA, a6o) {
		this.pC[aDm].push(this.aDn(iy, username, pJ, a3u, a6O, elo, color, nA, a6o)), fj.aDo === iy && (fj.a6N = this.pC[aDm][this.pC[aDm].length - 1]), fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aDm && 1 === fj.ax.pA[2]
	}, this.aDn = function(iy, username, pJ, a3u, a6O, elo, color, nA, a6o) {
		return {
			iy: iy,
			username: username,
			pJ: pJ,
			a3u: a3u,
			a6O: a6O,
			elo: elo,
			color: color,
			nA: nA,
			a6o: a6o
		}
	}, this.aDp = function(cF, aDm, pJ, a3u, a6O, elo, nA) {
		cF = this.pC[aDm][cF];
		cF.pJ = pJ, cF.a3u = a3u, cF.a6O = a6O, cF.elo = elo, cF.nA = nA, fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aDm && 1 === fj.ax.pA[2]
	}, this.aDq = function(cF, aDm, aDr) {
		var cF = this.pC[aDm][cF],
			aDs = cF.username,
			aDt = "Redacted " + lO.tk.gb(cF.iy, 2);
		cF.username = aDr ? "[" + g.gZ.i2(aDs) + "] " + aDt : aDt, aDs.indexOf("Redacted") < 0 && (cF.aDu = aDs, cF.aDv = 3), fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aDm && 1 === fj.ax.pA[2]
	}, this.aDw = function(cF, aDx, aDy) {
		var player = this.pC[aDx][cF];
		this.aDz(cF, aDx), this.pC[aDy].push(player), fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aDy && 1 === fj.ax.pA[2]
	}, this.aDz = function(cF, aDx) {
		var pB = this.pC[aDx];
		this.aCm.push(pB[cF]), 1e3 < this.aCm.length && this.aCm.shift(), cF >= this.pD[aDx] ? pB[cF] = pB[pB.length - 1] : (this.pD[aDx]--, 2 === aDx ? (pB.splice(this.pD[aDx] + 1, 0, pB[pB.length - 1]), pB.splice(cF, 1)) : (pB[cF] = pB[this.pD[
			aDx]], pB[this.pD[aDx]] = pB[pB.length - 1])), pB.pop(), fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aDx && 1 === fj.ax.pA[2]
	}, this.aE0 = function(cF, aE1) {
		fj.ax.aCn += 29 === t.a0 && fj.ax.pA[0] === aE1 && 1 === fj.ax.pA[2];
		var pB = this.pC[aE1],
			fi = pB[cF];
		if (2 === aE1)
			if (cF >= this.pD[aE1]) {
				for (var aE2 = this.pD[aE1], elo = fi.elo; aE2 && elo > pB[aE2 - 1].elo;) aE2--;
				pB[cF] = pB[this.pD[aE1]], pB.splice(this.pD[aE1]++, 1), pB.splice(aE2, 0, fi)
			} else pB.splice(this.pD[aE1]--, 0, fi), pB.splice(cF, 1);
		else cF >= this.pD[aE1] ? aE3(pB, this.pD[aE1]++, cF) : aE3(pB, --this.pD[aE1], cF)
	}, this.a6p = function(iy) {
		for (var pC = this.pC, aY = pC.length, y = 0; y < aY; y++)
			for (var pB = pC[y], ag = pB.length, qw = 0; qw < ag; qw++)
				if (iy === pB[qw].iy) return pB[qw];
		return null
	}
}

function aBd() {
	this.ax = new a6t, this.a0 = 0;
	var aE5 = new Array(31);

	function aE8() {
		for (var aY = aE5.length, y = 0; y < aY; y++) aE5[y] = null
	}
	this.f = function() {
		for (var aE6, aE7 = document.body.firstChild; aE7;) {
			if (aE6 = aE7.nextSibling, document.body.contains(aE7) && ("DIV" === aE7.tagName || "INPUT" === aE7.tagName || "BUTTON" === aE7.tagName)) try {
				document.body.removeChild(aE7)
			} catch (dx) {
				console.log("error 2623: " + dx)
			}
			aE7 = aE6
		}
	}, this.z = function(cF, tb, dy) {
		void 0 === tb && (tb = this.a0), e8.e9 = !0, 0 === cF && (0 === av.aw() ? cF = 5 : eH.eV.setState(13)), this.a5(), this.a0 === cF && (tb = aE5[cF].tb, aE5[cF] = null), this.a0 = cF;
		var ag = aE5[cF];
		if (!ag || 4 === cF || 7 === cF || 8 === cF || 9 === cF || 10 === cF || 11 === cF || 13 === cF || 15 === cF || 18 === cF || 20 <= cF && cF <= 28 || 32 === cF || 33 === cF) {
			if (0 === cF) return void aE8();
			1 === cF ? ag = new eM : 2 === cF ? ag = new zG : 3 === cF ? ag = new aE9 : 4 === cF || 9 === cF || 10 === cF || 11 === cF || 13 === cF || 33 === cF ? ag = dy : 5 === cF ? ag = new aEA : 6 === cF ? ag = new te : 7 === cF ? ag =
				new aEB(t.ax.a6u) : 8 === cF ? ag = dy : 12 === cF ? ag = new aEC : 14 === cF ? ag = new aED : 15 === cF ? ag = new aEB(t.ax.xe) : 16 === cF ? ag = new fq : 17 === cF ? ag = new m : 18 === cF ? ag = new aEE : 19 === cF ? ag =
				new aEF : 20 === cF ? ag = new aEG : 21 === cF ? ag = new yA : 22 === cF ? ag = new a2M : 23 === cF ? ag = new aEH : 24 === cF ? ag = new aEI : 25 === cF ? ag = new a6Y : 26 === cF ? ag = new aEJ : 27 === cF ? ag = new aEK :
				28 === cF ? ag = new a5S : 29 === cF ? ag = new aEL : 30 === cF && (ag = new a2v), ag.tb = tb, aE5[cF] = ag
		}
		ag.show(dy)
	}, this.u = function() {
		this.iP() && this.a2x(this.eB().tb)
	}, this.a2x = function(cF) {
		this.iP() && (aE5[cF] ? (this.a5(), e8.e9 = !0, this.a0 = cF, aE5[cF].show()) : this.z(cF))
	}, this.a5 = function() {
		this.iP() && aE5[this.a0].a5()
	}, this.eY = function() {
		this.iP() && (aE5[this.a0].a5(), aE8(), this.a0 = 0, eH.eV.setState(13))
	}, this.h8 = function() {
		var ag;
		this.iP() && (ag = aE5[this.a0]).h8 && ag.h8()
	}, this.resize = function() {
		if (!this.iP()) return !1;
		aE5[this.a0].resize()
	}, this.iS = function(bn, bo) {
		var ag;
		this.iP() && (ag = aE5[this.a0]).iS && ag.iS(bn, bo)
	}, this.qf = function(bn, bo) {
		var ag;
		this.iP() && (ag = aE5[this.a0]).qf && ag.qf(bn, bo)
	}, this.aEM = function() {
		var ag;
		this.iP() && (ag = aE5[this.a0]).aEM && ag.aEM()
	}, this.aEN = function(k9, kB, deltaY) {
		var ag;
		this.iP() && (ag = aE5[this.a0]).aEN && ag.aEN(k9, kB, deltaY)
	}, this.a6 = function(code) {
		var ag;
		return !!this.iP() && ((ag = aE5[this.a0]).a6 && ag.a6(code), !0)
	}, this.c8 = function() {
		var ag;
		this.iP() && (ag = aE5[this.a0]) && ag.c8 && ag.c8()
	}, this.iP = function() {
		return 0 < this.a0
	}, this.eB = function() {
		return aE5[this.a0]
	}, this.tg = function(cF) {
		return aE5[cF]
	}, this.yI = function() {
		return aE5
	}
}

function aAz() {
	var ae, canvas, gI, aEO, aEP, aEQ = -1;

	function aER() {
		var r8, fs = canvas.getContext("2d", {
			alpha: !0
		});
		fs.clearRect(0, 0, ae, ae), fs.fillStyle = dR.fb, fs.fillRect(0, 0, ae, ae), 0 === aEO && (fs.fillStyle = dR.a7j, fs.fillRect(0, 0, ae, ae)), fs.fillStyle = dR.fa, fs.fillRect(0, 0, ae, 1), fs.fillRect(0, 0, 1, ae), fs.fillRect(0, ae - 1, ae,
			1), fs.fillRect(ae - 1, 0, 1, ae), r8 = .9 * ae / qY.get(0).width, fs.imageSmoothingEnabled = !0, fs.setTransform(r8, 0, 0, r8, Math.floor((ae - r8 * qY.get(0).width) / 2), Math.floor((ae - r8 * qY.get(0).height) / 2)), fs.drawImage(
			qY.get(0), 0, 0), fs.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aET(k9, kB) {
		if (!eb.eh) return k9 <= ae + j.gap && kB >= t0.bo ? 9 : -1;
		if (k9 <= 4 * ae + j.gap) {
			if (kB >= t0.bo) return 0;
			if (kB >= t0.bo - ae - aEP * j.gap) return 2
		} else if (k9 <= 7 * ae + j.gap && kB >= t0.bo - ae - aEP * j.gap) return 1;
		return -1
	}
	this.eh = !1, this.f = function() {
		aEO = -1, this.eh = !1, aEP = eH.eV.fT() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ae = t0.ae, (canvas = document.createElement("canvas")).width = ae, canvas.height = ae, gI = g.h.fn(1, (eH.eV.fT() ? .5 : .45) * ae), aER()
	}, this.eZ = function() {
		this.eh = !this.eh, this.eh ? (zm.iN(!1), d2.ea && zm.iF && zm.iU(!0), this.iW()) : (aEO = -1, aER(), !d2.g5 || 1 !== d2.h5 || d2.gQ || d2.ea || eH.eV.setState(1)), e8.e9 = !0
	}, this.iW = function() {
		(d2.g5 || d2.ea) && 1 === d2.h5 && (h6.gR(!0), d2.gQ || setTimeout(function() {
			sJ.aES()
		}, 0), eH.eV.setState(0))
	}, this.iS = function(k9, kB) {
		return 0 <= (aEQ = aET(k9, kB)) || !eb.eh || d2.g5 || d2.ea || aO.iP || eb.eZ(), aEQ
	}, this.qf = function(k9, kB) {
		k9 = aET(k9, kB);
		k9 !== aEO && (aEO = k9, this.eh || aER(), e8.e9 = !0)
	}, this.aEV = function(k9, kB) {
		k9 = aET(k9, kB);
		return -1 !== k9 && aEQ === k9 && (this.eh ? d2.iQ ? (0 <= k9 && zm.iN(!1), !d2.ea) : (0 === k9 ? d2.a5E() : 1 === k9 ? this.eZ() : 2 === k9 && t.z(1, 0), !0) : 9 === k9 && (this.eZ(), !0))
	}, this.h8 = function() {
		var gF;
		this.eh ? (gF = Math.floor(5.5 * ae), h9.setTransform(1, 0, 0, 1, j.gap, t0.bo), h9.fillStyle = dR.fb, h9.fillRect(0, 0, gF, ae), 0 === aEO ? (h9.fillStyle = dR.a7j, h9.fillRect(0, 0, 4 * ae, ae)) : 1 === aEO && (h9.fillStyle = dR.a7j, h9
				.fillRect(4 * ae, 0, Math.floor(1.5 * ae), ae)), h9.fillStyle = dR.fa, h9.fillRect(0, 0, gF, 1), h9.fillRect(0, 0, 1, ae), h9.fillRect(4 * ae, 0, 1, ae), h9.fillRect(0, ae - 1, gF, 1), h9.fillRect(gF - 1, 0, 1, ae), h9.font =
			gI, g.h.textBaseline(h9, 1), g.h.textAlign(h9, 1), h9.fillText(L(236), 2 * ae, .54 * ae), gF = .4 * ae, eb.a28(j.gap + 4 * ae + (1.5 * ae - gF) / 2, t0.bo + .3 * ae, gF), gF = 1, h9.setTransform(1, 0, 0, 1, j.gap, t0.bo - gF *
				aEP * j.gap - gF * ae), h9.fillStyle = dR.fb, h9.fillRect(0, 0, 4 * ae, ae), aEO === gF + 1 && (h9.fillStyle = dR.a7j, h9.fillRect(0, 0, 4 * ae, ae)), h9.fillStyle = dR.fa, h9.fillRect(0, 0, 4 * ae, 1), h9.fillRect(0, 0, 1,
				ae), h9.fillRect(4 * ae, 0, 1, ae), h9.fillRect(0, ae - 1, 4 * ae, 1), h9.fillText(L(0 === gF ? 236 : 237), 2 * ae, .54 * ae), h9.setTransform(1, 0, 0, 1, 0, 0)) : h9.drawImage(canvas, j.gap, t0.bo)
	}, this.ec = function(player) {
		return 0 !== cV.dX[player] && 2 !== d2.h5 && !g.cn.cx(player)
	}, this.a28 = function(bn, bo, aY) {
		h9.setTransform(1, 0, 0, 1, bn, bo), h9.lineWidth = j.a27, h9.strokeStyle = dR.fa, h9.beginPath(), h9.moveTo(0, 0), h9.lineTo(aY, aY), h9.moveTo(0, aY), h9.lineTo(aY, 0), h9.stroke()
	}
}

function aB1() {
	var a30, a4E, a7V, aEZ, ae, gI, fontSize, aEa, aEb, aEc, aEd, canvas, fs, a7W, aEe;

	function nW(y) {
		return L(0 === y ? 238 : 1 === y ? 239 : 2 === y ? 240 : 241)
	}

	function aEk() {
		h9.drawImage(canvas, j.gap + (d2.gn ? j.gap + go.aEl() : 0), aEm + 2 * j.gap)
	}

	function aEf() {
		canvas.width = a30[0].width + aEc, canvas.height = ae + aEc, (fs = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a30[0].width + aEc, ae + aEc), fs.translate(Math.floor(aEc / 2), Math.floor(aEc / 2)), fs.lineWidth = aEc, fs.fillStyle = 1 === a30[0].aEj ? dR.a7m : dR.gT, aEn(), fs.fill(), fs.strokeStyle = 1 === a30[0].aEj ? dR.dS :
			dR.fa, aEn(), fs.stroke(), g.h.textAlign(fs, 1), g.h.textBaseline(fs, 1), fs.fillStyle = 1 === a30[0].aEj ? dR.dS : dR.fa, fs.font = gI[0], fs.fillText(nW(a30[0].aEi), Math.floor(a30[0].width / 2), Math.floor(.72 * aEa[0] * ae)), fs
			.font = gI[1], fs.fillText(a30[0].du, Math.floor(a30[0].width / 2), Math.floor((aEa[0] + .48 * aEa[1]) * ae))
	}

	function aEn() {
		fs.beginPath(), fs.moveTo(aEd, 0), fs.lineTo(a30[0].width - aEd, 0), fs.lineTo(a30[0].width, aEd), fs.lineTo(a30[0].width, ae - aEd), fs.lineTo(a30[0].width - aEd, ae), fs.lineTo(aEd, ae), fs.lineTo(0, ae - aEd), fs.lineTo(0, aEd), fs
			.closePath()
	}
	this.f = function() {
		a4E = 4, a7V = aEZ = a7W = 0, a30 = [], gI = new Array(2), fontSize = new Array(2), (aEa = new Array(2))[0] = .3, aEa[1] = .7, aEb = new Array(4), canvas = document.createElement("canvas"), aEe = e8.iR + 2e3, this.resize()
	}, this.resize = function() {
		var y, gF;
		for (ae = Math.floor((eH.eV.fT() ? .0725 : .058) * gG.gH), fontSize[0] = Math.floor(.85 * aEa[0] * ae), fontSize[1] = Math.floor(.85 * aEa[1] * ae), gI[0] = g.h.fn(1, fontSize[0]), gI[1] = g.h.fn(1, fontSize[1]), y = aEb.length - 1; 0 <=
			y; y--) aEb[y] = this.measureText(nW(y) + "000", gI[0]);
		if (aEc = Math.floor(1 + .05 * ae), aEd = Math.floor(.2 * ae), 0 < a30.length) {
			for (y = a30.length - 1; 0 <= y; y--) gF = this.measureText(a30[y].du + "00", gI[1]), a30[y].width = gF < aEb[y] ? aEb[y] : gF;
			aEf()
		}
	}, this.c8 = function() {
		0 !== a4E && (4 === a4E ? e8.iR > aEe && (a4E = 0, 1 === d2.h5) && zn.a9Y(bR.ki.kj[bR.kk].name, 3, 1, 9) : (1 === a4E ? (0 === a7V && (aEf(), a7V = 1e-4), 1 <= (a7V += .002 * (e8.iR - a7W)) && (aEZ = 0, a4E = 2, a7V = 1), e8.e9 = !0) :
			2 === a4E ? ((aEZ += (e8.iR - a7W) / 1e3) > a30[0].jJ || 1 < aEZ && 1 < a30.length) && (a4E = 3) : 3 === a4E && ((a7V -= .002 * (e8.iR - a7W)) <= 0 && (a7V = 0, a30.shift(), a4E = 0 < a30.length ? 1 : 0), e8.e9 = !0), a7W = e8
			.iR))
	}, this.measureText = function(du, gI) {
		return h9.font = gI, Math.floor(h9.measureText(du).width)
	}, this.v3 = function(a1G, y) {
		this.a9Y(cV.dQ[a1G], y, 1, 0 === y ? 3 : 7)
	}, this.a9Y = function(du, aEi, aEj, jJ) {
		var gF;
		du.length && (gF = (gF = this.measureText(du + "00", gI[1])) < aEb[aEi] ? aEb[aEi] : gF, a30.push({
			du: du,
			width: gF,
			aEi: aEi,
			aEj: aEj,
			jJ: jJ
		}), 0 === a4E) && (a7V = 0, a4E = 1, a7W = e8.iR)
	}, this.h8 = function() {
		0 !== a4E && 0 !== a7V && (a7V < 1 ? (h9.globalAlpha = a7V, aEk(), h9.globalAlpha = 1) : aEk())
	}
}

function aEo() {
	this.a5P = function() {
		for (var aY = d2.g6, a5G = dB.result.a5G, ag = a5G.length, cy = (lA.kv(17 + 16 * aY + 33 * ag), lA.lC(1, 1), lA.lC(4, 12), lA.lC(10, ag), lA.lC(1, +(2 === d2.a2o)), lA.lC(1, d2.a2r % 2), cV.cy), y = 0; y < aY; y++) lA.lC(16, cy[y]);
		for (var cW = cV.cW, y = 0; y < ag; y++) {
			var cT = a5G[y];
			lA.lC(9, cT), lA.lC(24, cW[cT])
		}
		an.ax.send(an.ax.mF, lA.lK)
	}
}

function aEp() {
	var du;
	10 === bR.kk ? du =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bR.kk ? du =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bR.kk ? du =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bR.kk ? du =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bR.kk ? du =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bR.kk ? du =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bR.kk ? du =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bR.kk ? du =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bR.kk ? du =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bR.kk && (du =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new aEq).cH(du)
}

function aAr() {
	this.aEr = "https://", this.aEs = this.aEr + "territorial.io/", this.et = this.aEs + "changelog", this.ey = this.aEs + "terms", this.aEt = this.aEs + "cookie_policy", this.ez = this.aEs + "privacy", this.ex = this.aEs + "tutorial", this.ew = this
		.aEs + "players", this.eu = this.aEs + "clans", this.ev = this.aEs + "clan-results", this.ep = "https://patreon.com/c/territorial", this.eq = this.aEr + "play.google.com/store/apps/details?id=territorial.io", this.er = this.aEr +
		"apps.apple.com/app/id1581110913", this.aEu = this.aEr + "www.youtube.com/watch?v=toZTQ8aRdFc", this.es = this.aEr + "discord.gg/pthqvpTXmh", this.zz = this.aEr + "www.instagram.com/davidtschacher/", this.aEv =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function vO() {
	function aEz(aZ, aU, fJ) {
		for (var y = 0; y < 256; y++) aZ[y] = (aZ[y] + (aU >> (y + fJ) % 30 & 1)) % 256
	}
	this.c8 = function(aEw, aEx) {
		var aZ = new Uint8Array(256);
		return function(aZ, aEw, aEx) {
				var y, aF2 = 3 + (4 + aEw) % 32768,
					aF3 = 12 + aEx % 32768,
					aF4 = 17 + ((aEw & aEx) + (aEw | aEx) + aEw) % 32768;
				for (y = 0; y < 256; y++) aF2 = 1 + aF2 * aF3 % aF4, aZ[y] = aF2 % 256
			}(aZ, aEw, aEx), aEz(aZ, aEw, 2), aEz(aZ, aEx, 7),
			function(aZ) {
				var y, aU, cF = 0;
				for (y = 0; y < 3e4; y++) aU = aZ[cF], aZ[cF] = (aU + y + aZ[(cF + y) % 256]) % 256, cF = (aU + y + cF + (aU & cF)) % 256
			}(aZ),
			function(aZ) {
				var y, is = 1,
					zu = 1;
				for (y = 0; y < 256; y += 2) is = (1 + is) * (aZ[y] + 1) % 1073741824, zu = (1 + zu) * (aZ[y + 1] + 1) % 1073741824;
				return [is, zu]
			}(aZ)
	}
}

function aBp() {
	this.aDo = 0, this.a6N = null, this.pB = null, this.bH = null, this.ax = null, this.a6L = null, this.p7 = null, this.message = null, this.a6Q = null, this.fk = null, this.aF5 = new aCf, this.a53 = 0, this.aF6 = 0, this.f = function() {
		this.aF6 = e8.iR, this.aDo = nu.tk.aF7(aV.aW.data[105].value), this.pB = new aDk, this.bH = new aF8, this.ax = new aF9, this.a6L = new a63, this.p7 = new a6b, this.message = new x1, this.a6Q = new aFA, this.fk = new aFB, this.ax.f(), xD
			.f(), this.a53 = 1, eH.eV.setState(1), av.setState(0)
	}, this.fp = function() {
		this.fk && this.fk.fp(), this.a6N = null, this.pB = null, this.bH = null, this.ax = null, this.a6L = null, this.p7 = null, this.message = null, this.a6Q = null, this.fk = null, this.a53 = 0, xD.fp(), eH.eV.setState(0), cz.lB.aFC()
	}
}

function aB2() {
	var gF, bn, aFD, canvas, fs, iP, z6, aFE, gI, oG, aFF = 11 / 12;

	function aFG() {
		var sh = Math.floor(z6 * (gF - 2 * aFD)),
			aFI = 1 + Math.floor(.0625 * t0.ae),
			aFJ = 1 + Math.floor(.3 * t0.ae),
			is = Math.floor(.55 * t0.ae);
		fs.clearRect(0, 0, gF, t0.ae), fs.fillStyle = dR.fb, fs.fillRect(0, 0, aFD, t0.ae), fs.fillRect(aFD + sh, 0, gF - aFD - sh, t0.ae), fs.fillStyle = z6 < 1 / 3 ? "rgba(" + Math.floor(3 * z6 * 130) + ",130,0,0.85)" : z6 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (z6 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (z6 - 2 / 3) * 130) + ",0.85)", fs.fillRect(aFD, 0, sh, t0.ae), fs.fillStyle = dR.fa, fs.fillRect(0, 0, gF, 1), fs.fillRect(0, t0.ae - 1, gF, 1),
			fs.fillRect(0, 0, 1, t0.ae), fs.fillRect(aFD, 0, 1, t0.ae), fs.fillRect(aFD + sh, 0, 1, t0.ae), fs.fillRect(gF - aFD, 0, 1, t0.ae), fs.fillRect(gF - 1, 0, 1, t0.ae), fs.fillRect(Math.floor(.25 * t0.ae) + aFJ, Math.floor((t0.ae - aFI) /
				2), t0.ae - 2 * aFJ, aFI), fs.fillRect(Math.floor(gF - 1.25 * t0.ae) + aFJ, Math.floor((t0.ae - aFI) / 2), t0.ae - 2 * aFJ - aFJ % 2, aFI), fs.fillRect(Math.floor(gF - 1.25 * t0.ae) + Math.floor((t0.ae - aFI) / 2), aFJ, aFI, t0.ae -
				2 * aFJ - aFJ % 2), aFE = g.cn.z5(d2.ed, t0.t1()), fs.fillText(g.gZ.gb(aFE) + " (" + g.gZ.ga(100 * z6, +(z6 < .1)) + ")", Math.floor(.5 * gF), is)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		z6 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => t0.aFR(arg1);

	function aFP(qh) {
		return !(1 < qh && 1 === z6 || (1 < qh && qh * z6 - z6 < 1 / 1024 ? qh = (z6 + 1 / 1024) / z6 : qh < 1 && z6 - qh * z6 < 1 / 1024 && (qh = (z6 - 1 / 1024) / z6), z6 = gA.yT(z6 * qh, 1 / 1024, 1), aFG(), 0))
	}

	function aFQ(k9) {
		return z6 !== (z6 = gA.yT((k9 - bn - aFD) / (gF - 2 * aFD), 1 / 1024, 1)) && (aFG(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aFG(), e8.e9 = !0
	}, this.bo = 0, this.uL = !1, this.f = function() {
		iP = !d2.gQ && !d2.ea, oG = !1, z6 = .5, aFE = 0, this.uL = !1, this.resize()
	}, this.resize = function() {
		eH.eV.fT() && gG.gF < .8 * gG.ae ? (this.ae = Math.floor(.066 * gG.gH), gF = gG.gF - 4 * j.gap - this.ae) : (gF = Math.floor((eH.eV.fT() ? .65 : .389) * gG.gH), gF += 12 - gF % 12, this.ae = Math.floor(gF / 12)), aFD = Math.floor(3 * this
			.ae / 2), gI = g.h.fn(1, Math.floor(.5 * this.ae)), (canvas = document.createElement("canvas")).width = gF, __fx.mobileKeybinds.setSize(gF, this.ae, h9), canvas.height = this.ae, (fs = canvas.getContext("2d", {
			alpha: !0
		})).font = gI, g.h.textBaseline(fs, 1), g.h.textAlign(fs, 1), this.gL(), aFG()
	}, this.gL = function() {
		bn = eH.eV.fT() && gG.gF < .8 * gG.ae ? this.ae + 3 * j.gap : Math.floor((gG.gF - gF) / 2), this.bo = gG.ae - this.ae - iL.fS() * j.gap
	}, this.gR = function() {
		oG && (oG = !1, aFG())
	}, this.iP = function() {
		return !(!iP || eb.eh && bn < Math.floor(j.gap + 5.5 * this.ae))
	}, this.iJ = function(iK) {
		return !!this.iP() && bn + gF > gG.gF - iK - j.gap
	}, this.aAP = function() {
		iP = !d2.ea
	}, this.a7c = function() {
		iP = !1
	}, this.t1 = function() {
		return gA.yT(Math.floor(1024 * z6 + .5) - 1, 0, 1023)
	}, this.aFK = function(k9, kB) {
		return this.iP() && bn < k9 && k9 < bn + gF && kB > this.bo
	}, this.iS = function(k9, kB) {
		if (!this.iP()) return !1;
		if (!(__fx.settings.keybindButtons && kB > this.bo - Math.floor(j.gap / 4) - this.ae && kB < this.bo - Math.floor(j.gap / 4) && __fx.mobileKeybinds.click(k9 - bn))) {
			if (!t0.aFK(k9, kB)) return !1;
			iZ.aFN = !1, ! function(ig, k9, kB) {
				if (function(k9, kB) {
						return bn < k9 && k9 < bn + aFD && kB > t0.bo
					}(k9, kB)) return aFP(aFF);
				if (function(k9, kB) {
						return bn + gF - aFD < k9 && k9 < bn + gF && kB > t0.bo
					}(k9, kB)) return aFP(1 / aFF);
				return ig.uL = !0, aFQ(k9)
			}(this, k9, kB) || (e8.e9 = !0)
		}
		return !0
	}, this.aFR = function(hv) {
		0 !== d2.h5 && this.iP() && aFP(hv) && (e8.e9 = !0)
	}, this.aEN = function(deltaY) {
		var hv;
		return !(0 === deltaY || !this.iP()) && aFP(hv = 0 < deltaY ? (hv = 400 / (400 + deltaY)) < aFF ? aFF : hv : 1 / aFF < (hv = (400 - deltaY) / 400) ? 1 / aFF : hv)
	}, this.qf = function(k9) {
		return !!this.uL && aFQ(k9)
	}, this.aFS = function() {
		this.uL = !1
	}, this.c8 = function() {
		this.iP() && aFE !== g.cn.z5(d2.ed, this.t1()) && (oG = !0)
	}, this.h8 = function() {
		this.iP() && (h9.drawImage(canvas, bn, this.bo), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(h9, bn, this.bo)
	}
}

function lv() {
	this.a5K = function() {
		for (var aY = g7.g8, y8 = g7.gx, a5G = [], y = 0; y < aY; y++) {
			var cT = y8[y];
			g.cn.a3U(cT) && a5G.push(cT)
		}
		return a5G
	}, this.a5L = function() {
		if (0 === aL.hQ[d2.a2u]) return this.a5M();
		go.a3M(d2.a2u);
		for (var a5G = [], aY = bK.a3O[0], a3N = bK.a3N, y = 0; y < aY; y++) {
			var cT = a3N[y];
			g.cn.a3U(cT) && a5G.push(cT)
		}
		return a5G
	}, this.a5M = function() {
		var cT = gq[0];
		return g.cn.a3U(cT) ? [cT] : []
	}, this.a5O = function(a5G) {
		for (var aY = a5G.length, cU = 0, cW = cV.cW, y = 0; y < aY; y++) cU += cW[a5G[y]];
		return cU
	}
}

function aBH() {
	var kU, aFT, aFU, aFV, a7H = !1;

	function aFW() {
		a7H = !0, kU = -1, aFT = new Array(4);
		for (var y = 3; 0 <= y; y--) aFT[y] = !1;
		var a4A = Math.floor(1 + .02 * gG.min);
		aFU = new Array(4), (aFV = new Array(4))[1] = aFV[3] = aFU[0] = aFU[2] = 0, aFV[0] = aFU[3] = -a4A, aFU[1] = aFV[2] = a4A
	}

	function aFY() {
		if (-1 !== kU)
			if (0 !== d2.h5 && kq.re()) {
				for (var aFa = !1, y = 3; 0 <= y; y--) aFT[y] && (aFa = !0, qm += aFU[y], qo += aFV[y], qg.qf(aFU[y], aFV[y]), iZ.zo());
				aFa ? e8.e9 = !0 : aAf.aFb()
			} else aAf.aFb()
	}
	this.aFX = function(cF) {
		0 !== d2.h5 && kq.re() && (a7H || aFW(), aFT[cF] = !0, -1 === kU) && (kU = setInterval(aFY, 20), aFY())
	}, this.aFZ = function(cF) {
		if (0 !== d2.h5 && (a7H || aFW(), aFT[cF] = !1, -1 !== kU)) {
			for (var aFa = !1, y = 3; 0 <= y; y--) aFa = aFa || aFT[y];
			aFa || this.aFb()
		}
	}, this.aFb = function() {
		if (a7H && -1 !== kU) {
			for (var y = 3; 0 <= y; y--) aFT[y] = !1;
			clearInterval(kU), kU = -1
		}
	}
}

function aBE() {
	var aFc, aFd, aFe;
	this.f = function() {
		aFc =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aFd =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aFe = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7E = ["K ", " Y", "E ", " Z", " z", " s", "S "], aFf = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], y = aFc.length - 1; 0 <= y; y--)
			for (var qw = a7E.length - 1; 0 <= qw; qw--) aFc[y] = aFc[y].replace(a7E[qw], aFf[qw]);
		if (__fx.settings.realisticNames) aFc = realisticNames;
	}, this.aFg = function() {
		var aY = d2.g6,
			dQ = cV.dQ,
			i3 = cV.i3,
			playerNamesData = d2.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < aY)
			for (var y = 0; y < aY; y++) dQ[y] = i3[y] = "Player " + dJ.fK(1e3);
		else
			for (y = 0; y < aY; y++) dQ[y] = i3[y] = playerNamesData[y]
	}, this.kv = function() {
		if (9 === d2.dH) {
			for (var jC = dJ.random(), aFm = aFe, aFn = aFd, dN = aN.dN, aY = aFm.length, ag = d2.data.teamPlayerCount[7], dQ = cV.dQ, i3 = cV.i3, y = ag - 1; y >= d2.g6; y--) dQ[y] = i3[y] = aFm[(y + jC) % aY];
			for (aY = aFn.length - 1, y = ag; y < d2.hR; y++) dQ[y] = i3[y] = aFn[dN[y] ? aY : y % aY]
		} else(2 === d2.data.playerNamesType ? function() {
			for (var aY = d2.hR, dQ = cV.dQ, i3 = cV.i3, playerNamesData = d2.data.playerNamesData, y = d2.g6; y < aY; y++) dQ[y] = i3[y] = playerNamesData[y]
		} : 1 === d2.data.playerNamesType ? function() {
			for (var dQ = cV.dQ, i3 = cV.i3, y = d2.g6; y < d2.hR; y++) dQ[y] = i3[y] = "Bot " + dJ.fK(1e3)
		} : function() {
			for (var aFo = aFc, aY = aFo.length, jC = dJ.random(), dQ = cV.dQ, i3 = cV.i3, y = d2.g6; y < d2.hR; y++) dQ[y] = i3[y] = aFo[(y + jC) % aY]
		})()
	}
}

function aFp() {
	this.h8 = function() {
		if (0 !== a0x.ax.a1g && (h9.globalAlpha = Math.min(a0x.ax.a1g / 580, 1), h9.drawImage(a0x.ax.a1h, 1 + iZ.s8(), 1 + iZ.iI()), h9.globalAlpha = 1, d2.gQ)) {
			for (var dc = qm / qn, dd = qo / qn, qp = (gG.gF + qm) / qn, qq = (gG.ae + qo) / qn, kD = a0x.ax.a1f * qn, a1i = a0x.ax.a1i, y = d2.g6 - 1; 0 <= y; y--) ! function(y, kD, dc, dd, qp, qq, a1i) {
				var highlight;
				0 === cV.dX[y] || 0 === cV.cW[y] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[y]) && (kD *= 2), qp = gG.gF * ((cV.dY[y] + cV.dZ[y] + 1) / 2 - dc) / (qp - dc) - .5 * kD, dc = gG.ae * ((cV.da[
					y] + cV.db[y] + 1) / 2 - dd) / (qq - dd) - .5 * kD, qp > gG.gF) || dc > gG.ae || qp < -kD || dc < -kD || (highlight ? h9.setTransform(2 * qn, 0, 0, 2 * qn, qp, dc) : h9.setTransform(qn, 0, 0, qn, qp, dc), h9.drawImage(
					a1i[d2.gn ? aL.dI[y] : 1], 0, 0))
			}(y, kD, dc, dd, qp, qq, a1i);
			h9.setTransform(qn, 0, 0, qn, 0, 0)
		}
	}
}

function tr() {
	var d;
	this.tn = [], this.d = document.createElement("div"), this.ts = function(du, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = du, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.d.appendChild(
			title), title
	}, this.zK = function(du, marginBottom) {
		var aFt = document.createElement("p");
		return aFt.textContent = du, aFt.style.fontSize = "0.75em", aFt.style.lineHeight = "1.2em", aFt.style.marginBottom = marginBottom || "0", this.d.appendChild(aFt), aFt
	}, this.aFu = function(du) {
		var aFv = document.createElement("p");
		return aFv.textContent = du, aFv.style.fontSize = "1em", aFv.style.marginBottom = "0", aFv.style.whiteSpace = "pre-wrap", aFv.style.overflowWrap = "break-word", this.d.appendChild(aFv), aFv
	}, this.yS = function(c, fontSize) {
		var d = document.createElement("div");
		return d.innerHTML = c, d.style.fontSize = fontSize || "1em", d.style.lineHeight = "1.2em", this.d.appendChild(d), d
	}, this.yO = function(aFw) {
		for (var xl = aFw.xl, aY = xl.length, y = 0; y < aY; y++) this.d.appendChild(xl[y])
	}, this.tt = function(fi) {
		return this.tn.push(fi), this.d.appendChild(fi.dx), fi
	}, this.resize = function() {
		for (var aY = this.tn.length, y = 0; y < aY; y++) this.tn[y].resize && this.tn[y].resize()
	}, (d = this.d).style.position = "absolute", d.style.height = "auto", d.style.padding = "0.5em"
}

function yP() {
	var dx;
	this.dx = document.createElement("hr"), this.resize = function() {
		g.h.fo(this.dx, 8, dR.sk)
	}, (dx = this.dx).style.marginBottom = dx.style.marginTop = "0.65em", dx.style.marginLeft = dx.style.marginRight = "-4%", dx.style.border = "none"
}

function o0() {
	this.lI = function() {
		var qX = function() {
				for (var a0o = a0z.nx.a0o, aY = a0o.length, max = 0, y = 0; y < aY; y++) max = Math.max(max, a0o[y]);
				return a2T(Math.max(max, 1))
			}(),
			gF = (fi = d2.data, (gF = lN).f(), gF.lC(12, f1.rVersion), gF.cF += 43, gF.lC(2, fi.mapType), gF.lC(8, fi.mapProceduralIndex), gF.lC(8, fi.mapRealisticIndex), gF.lC(14, fi.mapSeed), gF.aG4(fi.mapName, 5), 2 === fi.mapType && gF.aG5(fi
				.canvas), gF.lC(1, fi.passableWater), gF.lC(1, fi.passableMountains), gF.lC(10, fi.playerCount), gF.lC(10, fi.humanCount), gF.lC(9, fi.selectedPlayer), gF.lC(1, fi.gameMode), gF.lC(2, fi.playerMode), gF.lC(2, fi
				.battleRoyaleMode), gF.lC(4, fi.numberTeams), gF.lC(1, fi.isZombieMode), gF.lC(1, fi.isContest), gF.lC(1, fi.isReplay), gF.aBv(fi.elo, 2, 14), gF.lC(1, fi.colorsType), gF.lC(1, fi.colorsPersonalized), gF.aBv(fi.colorsData, 10,
				18), gF.lC(1, fi.selectableColor), gF.aBv(fi.teamPlayerCount, 4, 10), gF.lC(1, fi.neutralBots), gF.lC(2, fi.botDifficultyType), gF.lC(4, fi.botDifficultyValue), gF.aBv(fi.botDifficultyTeam, 4, 4), gF.aBv(fi.botDifficultyData,
				10, 4), gF.lC(2, fi.spawningType), gF.lC(14, fi.spawningSeed), gF.aBv(fi.spawningData, 11, 12), gF.lC(1, fi.selectableSpawn), gF.lC(2, fi.playerNamesType), gF.aG6(fi.playerNamesData, 10, 5), gF.lC(1, fi.selectableName), gF.lC(
				2, fi.aIncomeType), gF.lC(8, fi.aIncomeValue), gF.aBv(fi.aIncomeData, 10, 8), gF.lC(2, fi.tIncomeType), gF.lC(8, fi.tIncomeValue), gF.aBv(fi.tIncomeData, 10, 8), gF.lC(2, fi.iIncomeType), gF.lC(8, fi.iIncomeValue), gF.aBv(fi
				.iIncomeData, 10, 8), gF.lC(2, fi.sResourcesType), gF.lC(11, fi.sResourcesValue), gF.aBv(fi.sResourcesData, 10, 11), ! function(qX) {
				var gF = lN,
					a0j = a0z.nx.a0j,
					wk = a0z.nx.a0k,
					wu = a0z.nx.a0l,
					zx = a0z.nx.a0m,
					aY = a0j.length;
				gF.lC(5, qX), gF.lC(30, aY), gF.lC(30, a0z.nx.a0o.length);
				for (var y = 0; y < aY; y++) {
					var a7 = a0j[y];
					gF.lC(4, a7), gF.lC(9, wk[y]), 0 === a7 ? gF.lC(22, wu[y]) : 1 === a7 ? (gF.lC(10, wu[y]), gF.lC(10, zx[y])) : 2 === a7 ? (gF.lC(10, wu[y]), gF.lC(9, zx[y])) : 3 === a7 ? (gF.lC(10, wu[y]), gF.lC(27, zx[y])) : 4 === a7 ? (
						gF.lC(10, wu[y]), gF.lC(16, zx[y])) : 5 === a7 || 6 === a7 ? gF.lC(10, wu[y]) : 7 === a7 ? gF.lC(1, wu[y]) : 10 === a7 && (gF.lC(20, wu[y]), gF.lC(22, zx[y]))
				}
			}(qX), ! function(qX) {
				for (var gF = lN, a0n = a0z.nx.a0n, a0o = a0z.nx.a0o, aY = a0n.length, y = 0; y < aY; y++) gF.lC(1, a0n[y]), gF.lC(qX, a0o[y])
			}(qX), lN.cF),
			fi = gA.gB(gF - 1, 6) + 1,
			qX = (lA.aAB(6 * fi) !== lN.aZ.length && lN.aZ.push(0), ! function() {
				var gF = lN;
				gF.cF = 24, gF.lC(31, gF.aZ.length), gF.cF = 12, gF.lC(12, function() {
					for (var aZ = lN.aZ, aY = aZ.length, mE = f1.rVersion, y = 3; y < aY; y++) mE = mE + aZ[y] & 4095;
					return mE
				}())
			}(), cK.f(lN.aZ), lO.tk.xf(lO.tk.xg(fi)));
		return cK.fp(), lN.f(), qX
	}
}

function aG8() {
	var aG9, aGA;

	function aGD() {
		(aG9 = new WebSocket("wss://territorial.io/s52/")).onopen = aGE, aG9.onclose = function() {
			aGF()
		}
	}

	function aGE() {
		if (aG9 && aG9.readyState === aG9.OPEN) {
			var gF = new aBV;
			gF.kv(1608), gF.lC(1, 0), gF.lC(6, 7), gF.lC(2, eH ? eH.id : 3), gF.lC(1, f1.mH ? 1 : 0), gF.lC(1, f1.mI ? 1 : 0), gF.lC(1, f1 ? f1.xs : 0);
			for (var y = 0; y < aGA.length && y < 228; y++) gF.lC(7, aGA.charCodeAt(y) % 128);
			aG9.send(gF.lK), aGF()
		}
	}

	function aGF() {
		aG9 && (aG9.onclose = null, aG9.onopen = null, aG9 = null)
	}
	window.addEventListener("error", function aGB(dx) {
		aGA = "";
		try {
			return window.removeEventListener("error", aGB), aGA = dx.lineno + " " + dx.colno + "|" + function(dx) {
				if (!dx.error) return "NoStack";
				var stack = dx.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, aGG = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aGG.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(dx), __fx.reportError(dx, aGA), alert("Error:\n" + dx.filename + " " + dx.lineno + " " + dx.colno + " " + dx.message)
		} catch (dx) {
			aGA = "SE|" + aGA + "|" + dx, console.log(aGA), alert(aGA)
		}
		aGD()
	})
}

function aEH() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 === d2.data.playerNamesType && 1 === g.ab.sb(d2.data.playerNamesData).length && (d2.data.playerNamesType = 0), 2 !== d2.data.playerNamesType && (d2.data.playerNamesData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.playerNamesType && g.ab.aGH(yD.nW(), d2.data.playerNamesData, 20)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(242), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(243), L(244), L(117)],
			value: d2.data.playerNamesType
		}, function(cF) {
			yH(), d2.data.playerNamesType = cF, t.z(23)
		})), jk.tt(new yP), jk.tt(new yQ({
			value: d2.data.selectableName
		}, L(245), function(value) {
			d2.data.selectableName = value
		})), to.push(jk)
	}(to = []), function(to) {
		var jk;
		2 === d2.data.playerNamesType && ((jk = new tr).ts("Data"), yD = new nK(0, 1, 0, 1), d2.data.playerNamesData && d2.data.playerNamesData.length === d2.hR || (d2.data.playerNamesData = new Array(d2.hR), d2.data.playerNamesData.fill(
			"")), yD.nU(g.gZ.yR(d2.data.playerNamesData, 1, '"')), jk.tt(yD), to.push(jk))
	}(to), to))
}

function lV(oZ, size, aGI, aGJ, font) {
	var y, rO = .2,
		canvas = document.createElement("canvas"),
		lX = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = oZ, canvas.height = oZ, lX.font = size + font, lX.textAlign = "center", lX.textBaseline = "middle", lX.fillStyle = "red", y = 0; y < aGI.length; y++) lX.fillText(aGI[y], .5 * oZ, .5 * oZ);
	return -1 < (canvas = function(wd) {
		var y, jC, bW = wd.data;
		for (y = bW.length - 4; 0 <= y; y -= 4)
			if (jC = bW[y], aGJ <= jC) return Math.floor(y / (4 * oZ));
		return -1
	}(lX.getImageData(0, 0, oZ, oZ))) && (rO = (canvas - .5 * oZ + .1 * size) / size), Math.max(rO, 0)
}

function aBe() {
	this.aGM = new wJ, this.f = function() {
		eH.eV.aAZ()
	}, this.aGN = function() {
		return aV.aW.data[160].value
	}
}

function aBI() {
	this.ax = new a79, this.a0y = new aGO, this.nk = new aGP, this.nj = new l7, this.ao = new m1, this.nf = new a8W, this.a75 = new aEo, this.xQ = new aGQ, this.a2l = new aGR, this.aGS = new aGT, this.aGU = new na, this.aGV = new aGW, this.aGX =
		new aGY, this.f = function() {
			this.ax.f()
		}
}

function aBR() {
	this.aDl = function(player) {
		a0u.aDi(player), d2.d3++, cV.oV[player] = 2, cV.cy[player] = cz.d0.d1(), player === d2.ed && (d8.show(!1, !1), d9.dA(), dB.dC.dD()), qg.rT(player)
	}
}

function aBN() {
	var ae, canvas, fs, aGZ, aGa, aGb, aGc, oG, aGd, aGe, aGf, aGg, a9e = !1,
		rL = (this.iP = !1, this.gF = 0, new Array(2)),
		aGh = 0;

	function iM() {
		var gF = eL.gF,
			ag = (oG = !1, a3C(fs, gF, ae), Math.floor(gF / 2));
		1 === aGZ ? (fs.fillStyle = dR.gU, fs.fillRect(ag, 0, ag, ae)) : -1 === aGZ && (fs.fillStyle = dR.a83, fs.fillRect(0, 0, ag, ae)), a3D(fs, gF, ae, 2);
		var ag = (ag = Math.floor(.25 * ae)) < 2 ? 2 : ag,
			wX = (fs.fillStyle = dR.a7n, Math.floor((ae - 4) * aGa[1] / aGb[1]));
		0 < wX && fs.fillRect(2, ae - 2 - wX, ag, wX), 0 < (wX = Math.floor((ae - 4) * aGa[0] / aGb[0])) && fs.fillRect(gF - 2 - ag, ae - 2 - wX, ag, wX);
		ag = (ag = Math.floor(ae / 8)) < 2 ? 2 : ag, a3F(fs, Math.floor(.4 * ae), 0, ae, ag, .5, !1), a3F(fs, Math.floor(gF - 1.4 * ae), 0, ae, ag, .5, !0), wX = 1.1 * ae / rL[0].width;
		fs.imageSmoothingEnabled = !0, fs.setTransform(wX, 0, 0, wX, (gF - wX * rL[0].width) / 2, -.05 * ae), fs.drawImage(rL[+a9e], 0, 0), fs.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aGm() {
		aGg = -1, a9e = aAc.a7a(), cD.a9L(257), cD.a9d(a9e), eL.iP = !0, oG = !0, aGd = 360;
		for (var aU, cU = 0, y = g7.g8 - 1; 0 <= y; y--) g.cn.cx(g7.gx[y]) || (cU += cV.cW[g7.gx[y]]);
		a9e ? aGb[0] = Math.max(gA.gB(3 * cU, 4), 1) : d2.gn ? 9 === d2.dH && 8 === aL.hQ[go.y7()] ? aGb[0] = Math.max(cU, 1) : (aU = gA.gB(100 * go.gp(), d2.gC), aU = gA.yT(200 - 2 * aU, 40, 100), aU = gA.gB(aU * cU, 100), aGb[0] = Math.max(aU,
			1)) : aGb[0] = Math.max(gA.gB(3 * cU, 5), 1), aGb[1] = Math.max(cU - aGb[0], 1)
	}

	function a7c() {
		aGf = e8.o4(), oG = !0, aGd = aGZ = 0, aGc = [], eL.iP = !1, cD.rU(247), aGa[0] = aGa[1] = 0, cD.a9L(673)
	}

	function iI() {
		return t0.iJ(cD.a98()) ? __fx.settings.keybindButtons ? t0.bo - 2 * (ae + j.gap) : t0.bo - ae - j.gap : zm.iJ(cD.a9A()) ? zm.iI() - ae - j.gap : gG.ae - ae - iL.fS() * j.gap
	}
	this.aM = function() {
		for (var y = 0; y < 2; y++) rL[y] = g.canvas.vj(qY.get(3), 8 - y, dR.a8Q), rL[y] = g.canvas.aGi(rL[y])
	}, this.f = function() {
		aGf = -1e4, aGe = aGh = 0, aGg = -1, this.iP = !1, oG = a9e = !1, aGa = [aGZ = aGd = 0, 0], aGb = [1, 1], aGc = [], this.resize()
	}, this.resize = function() {
		ae = t0.ae, this.gF = 4 * ae, (canvas = document.createElement("canvas")).width = this.gF, canvas.height = ae, fs = canvas.getContext("2d", {
			alpha: !0
		}), iM()
	}, this.gR = function() {
		oG && iM()
	}, this.iS = function(bn, bo) {
		return !!this.iP && !(bn < gG.gF - this.gF - j.gap || bo < iI() || (d2.ea || this.up(d2.ed) && (eb.eh && eb.eZ(), ee.ef.uq(bn > gG.gF - j.gap - this.gF / 2 ? 1 : 0)), 0))
	}, this.c8 = function() {
		0 < aGe ? 0 === --aGe && a7c() : this.iP ? 180 == --aGd && 3 * aGa[0] < aGb[0] ? a7c() : aGa[0] >= aGb[0] ? a9e ? dB.gv.aGo() : dB.gv.gw() : aGa[1] >= aGb[1] ? aGe = 4 : aGd <= 0 && a7c() : ! function() {
			var a8g = e8.o4();
			if (a8g % 40 == 14) {
				if (aGh) return !(a8g < aGh) && !(a8g < aGf + 535) && (aGh = a8g + 1071, g.cn.a3T()) ? (aGm(), 1) : 0;
				(1 === g7.g8 || (d2.gn ? go.gp() : cV.cW[gq[0]]) >= gA.gB(96 * d2.gC, 100)) && (aGh = a8g + 535)
			}
			return
		}() && 0 <= aGg && (cD.dP(250, L(246, [cV.dQ[aGg]]), 673, aGg, dR.fa, dR.gT, -1, !0), aGm())
	}, this.aGp = function() {
		this.iP && aGa[0] < aGb[0] && a7c()
	}, this.aCO = function(player, aGq) {
		var aGr = L(aGq ? 247 : 248, [cV.dQ[player]]),
			aGr = (cD.dP(450, aGr, 257, player, aGq ? dR.sn : dR.oS, dR.gT, -1, !0), aGc.push(player), oG = !0, d2.g5 ? Math.max(aGb[0], aGb[1]) : cV.cW[player]),
			aGr = Math.max(aGr, 1);
		aGq ? aGa[0] += aGr : aGa[1] += aGr, player === d2.ed && (aGZ = aGq ? 1 : -1)
	}, this.h8 = function() {
		var bo;
		this.iP && (bo = iI(), h9.drawImage(canvas, gG.gF - this.gF - j.gap, bo))
	}, this.ei = function(player) {
		return !(!d2.g5 && e8.o4() < aGf + 140 || 0 !== aGd || !g.cn.uK(1) || !g.cn.gy(player) || 10 <= r1[player] && !g.cn.a3s(player, 9))
	}, this.up = function(cT) {
		if (!g.cn.uK(1)) return !1;
		if (!g.cn.gy(cT)) return !1;
		if (!this.iP) return !1;
		for (var y = aGc.length - 1; 0 <= y; y--)
			if (aGc[y] === cT) return !1;
		return !0
	}, this.ek = function(player) {
		aGg = player
	}
}

function aGs() {
	this.f = function() {
		8 === d2.dH && cD.a9Z()
	}, this.aGt = function(aGu) {
		var elo = d2.data.elo,
			tZ = (elo[aGu] - elo[1 - aGu]) / 10,
			tZ = 8 / (1 + Math.pow(2, tZ / 32)),
			tZ = Math.floor(10 * tZ + .5),
			aGw = elo[aGu] + tZ,
			a9g = this.a9b(aGw),
			elo = this.a9b(elo[1 - aGu] - tZ),
			tZ = (0 === aGu ? cD.a9f(a9g, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : cD.a9f(elo, a9g, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + d2.a5R) * (2e3 + aGw) / 1e3).toFixed(2));
		aGu === d2.ed ? cD.dP(640, L(249, [tZ]), 40, 0, dR.fa, dR.gT, -1, !1) : cD.dP(640, L(250, [cV.dQ[aGu], tZ]), 40, 0, dR.fa, dR.gT, -1, !1)
	}, this.a9b = function(elo) {
		return 16e3 === (elo = gA.yT(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function aBl() {
	this.gF = 0, this.ae = 0, this.iq = 0, this.ir = 0, this.aGy = 0, this.aGz = 0, this.is = 0, this.zu = 0;
	var aH1 = this.aH0 = 0;
	this.aH2 = 0, this.aH3 = 0, this.aH4 = 0, this.aEc = 0, this.cF = 0, this.fx = null, this.iP = !1, this.aH5 = -1, this.aH6 = !1, this.aH7 = [0, 0], this.aM = function() {
		this.fx = [L(251), L(51, 0, "Balance"), L(50, 0, "Interest"), L(252)]
	}, this.f = function() {
		this.iP = !1, this.aH5 = -1, this.aH6 = !1, this.resize()
	}, this.resize = function() {
		this.gF = gG.gF < 1.369 * gG.ae ? gG.gF : 1.369 * gG.ae;
		var bW = eH.eV.fT() && gG.gF < gG.ae ? 1 : eH.eV.fT() ? .8 : gG.gF < gG.ae ? .65 : .59;
		this.gF = Math.floor(bW * this.gF), this.gF -= eH.eV.fT() && gG.gF < gG.ae ? 2 * j.gap + 2 : 0, this.ae = Math.floor(this.gF / 1.369), this.aEc = Math.floor(this.ae / 150), this.aEc = Math.max(this.aEc, 1.5), this.iq = Math.floor(1 +
			.02 * this.gF), this.ir = Math.floor(1 + .04 * this.gF), this.is = this.ir, aH1 = Math.floor(.75 * this.is), this.zu = Math.floor(1 + .075 * this.gF), this.aH2 = Math.floor(1 + .1125 * this.gF), this.aH3 = Math.floor(this.gF * (eH
			.eV.fT() ? .03 : .029)), this.aH3 = Math.max(this.aH3, 4), this.aH4 = Math.floor(.035 * this.gF), this.aH4 = Math.max(this.aH4, 4), this.aH0 = this.ae - 2 * this.is - this.zu - this.aH2, this.iP && this.aH8()
	}, this.iS = function(k9, kB) {
		var oT, r9;
		return !!this.iP && (r9 = k9, oT = kB, k9 -= gA.gB(gG.gF - this.gF, 2), kB -= gA.gB(gG.ae - this.ae, 2), k9 < 0 || kB < 0 || k9 >= this.gF || kB >= this.ae || k9 >= this.gF - this.aH2 && kB < this.aH2 ? -1 !== eb.iS(r9, oT) || zm.iS(r9,
			oT) || this.a5() : kB < this.aH2 || (kB < this.ae - this.zu ? (this.aH6 = !0, this.aH5 = (k9 - 2 * this.iq - this.aGy) / this.aGz, 3 !== this.cF && (e8.e9 = !0)) : (r9 = (r9 = Math.floor(k9 / (this.gF / this.fx.length))) < 0 ?
			0 : r9 >= this.fx.length ? this.fx.length - 1 : r9) !== this.cF && (this.cF = r9, this.aH8(), e8.e9 = !0)), !0)
	}, this.qf = function(k9, kB) {
		return this.aH7[0] = k9, this.aH7[1] = kB, !(!this.iP || !this.aH6 || (k9 -= gA.gB(gG.gF - this.gF, 2), kB = this.aH5, this.aH5 = (k9 - 2 * this.iq - this.aGy) / this.aGz, (0 <= this.aH5 && this.aH5 <= 1 || 0 <= kB && kB <= 1) && (e8
			.e9 = !0), 0))
	}, this.aH9 = function() {
		this.aH6 && (this.aH6 = !1)
	}, this.eZ = function() {
		this.iP ? this.a5() : this.show()
	}, this.show = function() {
		aP.eX < 2 || (this.iP = !0, this.aH8())
	}, this.a5 = function() {
		this.iP = !1, this.aH5 = -1, e8.e9 = !0
	}, this.aH8 = function() {
		this.cF < 2 ? this.aGy = zn.measureText(g.gZ.gb(aP.max[this.cF]), g.h.fn(0, this.aH3)) : 2 === this.cF && (this.aGy = zn.measureText(g.gZ.ga(6, 2), g.h.fn(0, this.aH3))), this.aGz = this.gF - 2 * this.iq - this.aGy - this.ir
	}, this.iM = function() {
		this.iP && this.aH8()
	}, this.h8 = function() {
		this.iP && this.ic()
	}, this.ic = function() {
		var bn = gA.gB(gG.gF - this.gF, 2),
			bo = gA.gB(gG.ae - this.ae, 2);
		h9.setTransform(1, 0, 0, 1, bn, bo), h9.fillStyle = dR.gT, h9.fillRect(0, this.aH2, this.gF, this.ae - this.aH2), this.aHA(), this.aHB(), h9.strokeRect(0, 0, this.gF, this.ae), g.h.textAlign(h9, 2), h9.font = g.h.fn(0, this.aH3), 0 ===
			this.cF ? this.aHC(aP.aHD, bn, bo) : 1 === this.cF ? this.aHC(aP.oH, bn, bo) : 2 === this.cF ? this.aHE(bn, bo) : 3 === this.cF && (this.aHF(bn, bo), this.aHG(bn, bo)), eb.a28(Math.floor(bn + this.gF - .725 * this.aH2), Math.floor(
				bo + .275 * this.aH2), Math.floor(.45 * this.aH2)), h9.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aHA = function() {
		var y, cU;
		for (h9.lineWidth = this.aEc, g.h.textBaseline(h9, 1), g.h.textAlign(h9, 1), h9.strokeStyle = dR.fa, h9.font = g.h.fn(1, this.aH4), cU = this.gF / this.fx.length, h9.fillStyle = dR.a7x, h9.fillRect(this.cF * cU, this.ae - this.zu, cU,
				this.zu), h9.fillStyle = dR.fa, h9.fillRect(0, this.ae - this.zu - .5 * this.aEc, this.gF, this.aEc), y = 1; y <= 3; y++) h9.fillRect(y * cU, this.ae - this.zu, this.aEc, this.zu);
		for (y = this.fx.length - 1; 0 <= y; y--) h9.fillText(g.fs.gO(this.fx[y], 0, .9 * cU), (y + .5) * cU, this.ae - .46 * this.zu)
	}, this.aHB = function() {
		h9.fillStyle = dR.a8B, h9.fillRect(0, 0, this.gF, this.aH2), h9.fillStyle = dR.fa, h9.fillRect(0, this.aH2 - .5 * this.aEc, this.gF, this.aEc), h9.font = g.h.fn(1, .39 * this.aH2), h9.fillText(g.fs.gO(L(253), 0, .8 * this.gF), Math.floor(
			this.gF / 2), Math.floor(.55 * this.aH2))
	}, this.aHC = function(aZ, bn, bo) {
		var ag = aP.max[this.cF],
			qh = (h9.setTransform(1, 0, 0, 1, bn + 2 * this.iq + this.aGy, bo + this.is + this.aH2), h9.lineWidth = 2, this.aH0 / Math.sqrt(ag));
		h9.beginPath(), h9.moveTo(this.aGz, this.aH0 - qh * Math.sqrt(aZ[aP.eX - 1]));
		for (var y = aP.eX - 2; 0 <= y; y--) h9.lineTo(y * this.aGz / (aP.eX - 1), this.aH0 - qh * Math.sqrt(aZ[y]));
		h9.stroke();
		bn = this.a28(aZ, qh, .5);
		bn < .95 && h9.fillText(g.gZ.gb(ag), -this.iq, 0), .05 < Math.abs(bn - .5) && h9.fillText(g.gZ.gb(Math.floor(ag / 4)), -this.iq, Math.floor(this.aH0 / 2)), .05 < bn && h9.fillText("0", -this.iq, this.aH0)
	}, this.aHE = function(bn, bo) {
		h9.setTransform(1, 0, 0, 1, bn + 2 * this.iq + this.aGy, bo + this.is + this.aH2), h9.lineWidth = 2;
		var qh = this.aH0 / Math.max(aP.max[this.cF], 1);
		h9.beginPath(), h9.moveTo(this.aGz, this.aH0 - qh * aP.gz[aP.eX - 1]);
		for (var y = aP.eX - 2; 0 <= y; y--) h9.lineTo(y * this.aGz / (aP.eX - 1), this.aH0 - qh * aP.gz[y]);
		h9.stroke();
		bn = this.a28(aP.gz, qh, 1), bo = aP.max[this.cF] / 100;
		bn < .95 && h9.fillText(g.gZ.ga(bo, 2), -this.iq, 0), .05 < Math.abs(bn - .5) && h9.fillText(g.gZ.ga(bo / 2, 2), -this.iq, Math.floor(this.aH0 / 2)), .05 < bn && h9.fillText(g.gZ.ga(0, 2), -this.iq, this.aH0)
	}, this.aHF = function(bn, bo) {
		h9.setTransform(1, 0, 0, 1, bn + .34 * this.gF, bo + 2 * aH1 + this.aH2), g.h.textAlign(h9, 2);
		for (var aHH = this.ae - 4 * aH1 - this.zu - this.aH2, aZ = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], y = 9; 0 <= y; y--) h9.fillText(g.fs.gO(aP.aHI[aZ[y]], 0, .31 * this.gF), 0, y * aHH / 9);
		var aU = aP.dV;
		for (h9.setTransform(1, 0, 0, 1, bn + .39 * this.gF, bo + 2 * aH1 + this.aH2), g.h.textAlign(h9, 0), h9.fillText(g.gZ.ga(100 * aU[0] / (1024 * Math.max(aU[1], 1)), 1), 0, 0), y = 8; 1 <= y; y--) h9.fillText(aU[aZ[y]].toString(), 0, y *
			aHH / 9);
		h9.fillText(g.gZ.ga(100 * (1 - cV.cW[d2.ed] / aU[7]), 0), 0, aHH)
	}, this.aHG = function(bn, bo) {
		h9.setTransform(1, 0, 0, 1, bn + .79 * this.gF, bo + 2 * aH1 + this.aH2), g.h.textAlign(h9, 2);
		var y, aHH = this.ae - 4 * aH1 - this.zu - this.aH2;
		for (h9.fillStyle = dR.a7u, y = 2; 0 <= y; y--) h9.fillText(g.fs.gO(aP.aHI[y + 8], 0, .31 * this.gF), 0, y * aHH / 9);
		h9.fillText(g.fs.gO(aP.aHI[18], 0, .31 * this.gF), 0, 3 * aHH / 9), h9.fillStyle = dR.a7t, h9.fillText(g.fs.gO(aP.aHI[11], 0, .31 * this.gF), 0, 4 * aHH / 9), h9.fillStyle = dR.sm, h9.fillText(g.fs.gO(aP.aHI[13], 0, .31 * this.gF), 0, 5 *
				aHH / 9), h9.fillText(g.fs.gO(aP.aHI[15], 0, .31 * this.gF), 0, 6 * aHH / 9), h9.fillText(g.fs.gO(aP.aHI[16], 0, .31 * this.gF), 0, 7 * aHH / 9), h9.fillText(g.fs.gO(aP.aHI[12], 0, .31 * this.gF), 0, 8 * aHH / 9), h9.fillStyle =
			dR.sl, h9.fillText(g.fs.gO(aP.aHI[17], 0, .31 * this.gF), 0, aHH), h9.fillStyle = dR.a7u;
		var aU = aP.dV,
			ta = aU[8] + aU[9] + aU[10] + aU[18],
			ta = g.gZ.gb(ta),
			aHJ = h9.measureText(ta).width,
			bn = (h9.setTransform(1, 0, 0, 1, bn + .83 * this.gF + aHJ, bo + 2 * aH1 + this.aH2), h9.fillText(g.gZ.gb(aU[8]), 0, 0), h9.fillText(g.gZ.gb(aU[9]), 0, aHH / 9), h9.fillText(g.gZ.gb(aU[10]), 0, 2 * aHH / 9), h9.fillText(g.gZ.gb(aU[
				18]), 0, 3 * aHH / 9), h9.fillStyle = dR.a7t, h9.fillText(ta, 0, 4 * aHH / 9), h9.fillStyle = dR.sm, h9.fillText(g.gZ.gb(aU[13]), 0, 5 * aHH / 9), h9.fillText(g.gZ.gb(aU[15]), 0, 6 * aHH / 9), h9.fillText(g.gZ.gb(aU[16]), 0,
				7 * aHH / 9), h9.fillText(g.gZ.gb(aU[12]), 0, 8 * aHH / 9), aU[12] + aU[13] + aU[15] + aU[16]);
		h9.fillStyle = dR.sl, h9.fillText(g.gZ.gb(bn), 0, aHH), h9.fillStyle = dR.fa
	}, this.a28 = function(aZ, qh, aHL) {
		var y, dx, wk;
		return this.aH5 < 0 || 1 < this.aH5 ? .25 : (y = this.aH5 * (aP.eX - 1), wk = aZ[dx = Math.floor(y)], wk += (y - dx) * (aZ[dx < aP.eX - 1 ? dx + 1 : dx] - wk), h9.strokeStyle = dR.a7k, .04 < this.aH5 && this.aHM(0, this.aH0 - qh * Math
				.pow(wk, aHL), y * this.aGz / (aP.eX - 1), this.aH0 - qh * Math.pow(wk, aHL)), .04 < wk / aP.max[this.cF] && this.aHM(y * this.aGz / (aP.eX - 1), this.aH0, y * this.aGz / (aP.eX - 1), this.aH0 - qh * Math.pow(wk, aHL)), h9
			.fillStyle = dR.a84, h9.beginPath(), h9.arc(y * this.aGz / (aP.eX - 1), this.aH0 - qh * Math.pow(wk, aHL), Math.max(2, .014 * this.ae), 0, 2 * Math.PI), h9.fill(), aZ = this.aH5 * e8.h1, aZ = 0 === cV.dX[d2.ed] ? Math.floor(aZ *
				aP.aHN) : Math.floor(aZ * e8.o4()), h9.fillStyle = dR.fa, h9.fillText(1 === aHL ? g.gZ.ga(wk / 100, 2) : g.gZ.gb(Math.floor(wk)), -this.iq, this.aH0 - qh * Math.pow(wk, aHL)), g.h.textAlign(h9, 1), h9.fillText(d9.gc(aZ), y *
				this.aGz / (aP.eX - 1), this.aH0 + this.aH3 - (eH.eV.fT() ? 2 : 0) - this.aEc), g.h.textAlign(h9, 2), qh * Math.pow(wk, aHL) / this.aH0)
	}, this.aHM = function(dc, dd, qp, qq) {
		h9.beginPath(), h9.moveTo(dc, dd), h9.lineTo(qp, qq), h9.stroke()
	}
}

function aHO() {
	this.yJ = function() {
		var aHP = d2.data;
		g.ab.aHQ(aHP.teamPlayerCount, aHP.playerCount), aHP.numberTeams = g.ab.aHR(aHP.teamPlayerCount, 0), aHP.teamPlayerCount[0] && aHP.teamPlayerCount[7] && (aHP.teamPlayerCount[7] = 0, this.yJ())
	}, this.o9 = function() {
		var aHP = d2.data;
		aHP.mapType < 2 ? bR.kv(bR.aHS(aHP), aHP.mapSeed) : bR.aHT(aHP.canvas)
	}, this.aHU = function() {
		var aHP = d2.data;
		aHP.colorsData || (aHP.colorsData = new Uint32Array(1)), aHP.selectableColor && (aHP.colorsData[0] = aV.ax.lG()), aHP.selectableName && (aHP.playerNamesData || (aHP.playerNamesData = new Array(1)), aHP.playerNamesData[0] = aV.aW.data[122]
			.value)
	}, this.aHV = function() {
		d2.data = new a4p, d2.data.aIncomeType = 2, d2.data.aIncomeData = new Uint8Array(d2.hR), d2.data.aIncomeData[0] = 64
	}
}

function aBn() {
	this.a27 = 0, this.gap = 0, this.lY = 0, this.k = 0, this.f = function() {
		this.resize()
	}, this.resize = function() {
		this.a27 = .0022 * g.h.lc(.5) * gG.gH, this.lY = this.a27 / gG.ld, this.gap = Math.max(Math.floor((eH.eV.fT() ? .0114 : .01296) * gG.gH), 2), this.k = this.gap / gG.ld
	}
}

function aHW() {
	this.wx = function() {
		for (var cT, bn, wk, wv = f7, ww = bR.l3, gF = bR.bS, wt = gF - 1, ur = bR.bU - 1, aj = 0, bo = 1; bo < ur; bo++)
			for (wk = bo * gF, bn = 1; bn < wt; bn++) ww[cT = wk + bn << 2] === ww[1 + cT] && ww[cT] === ww[2 + cT] && (aj++, wv[2 + cT] = 4);
		a9o.wa = aj
	}, this.wy = function(aHX, aHY) {
		for (var wv = f7, gF = bR.bS, wt = gF - 1, ur = bR.bU - 1, id = 0, bo = 1; bo < ur; bo++)
			for (var wk = bo * gF, bn = 1; bn < wt; bn++) {
				var bq = 2 + (wk + bn << 2);
				wv[bq] === aHX && (! function(bq, id, aHX, aHY) {
					var aY = 1,
						wv = f7,
						pO = bE.pO,
						t2 = [bq],
						aHa = id >> 8 << 1,
						aHb = 255 & id;
					wv[bq - 2] = aHa, wv[bq - 1] = aHb, wv[bq] = 5;
					for (; aY;) {
						for (var t3 = [], y = 0; y < aY; y++)
							for (var ua = t2[y], bW = 3; 0 <= bW; bW--) {
								var a0C = ua + pO[bW];
								wv[a0C] === aHX && (wv[a0C - 2] = aHa, wv[a0C - 1] = aHb, wv[a0C] = aHY, t3.push(a0C))
							}
						aY = (t2 = t3).length
					}
				}(bq, id, aHX, aHY), id = (id + 1) % 32768)
			}
	}, this.wz = function() {
		for (var wv = f7, gF = bR.bS, wt = gF - 3, ur = bR.bU - 3, aHd = 12 * gF, bo = 3; bo < ur; bo++)
			for (var wk = bo * gF, bn = 3; bn < wt; bn++) {
				var bq = 2 + (wk + bn << 2);
				2 !== wv[bq] || 2 === wv[bq - 12] && 2 === wv[12 + bq] && 2 === wv[bq - aHd] && 2 === wv[bq + aHd] || (wv[bq - 2] = 1 | wv[bq - 2])
			}
	}
}

function aB9() {
	this.gx = null, this.g8 = 0, this.aHe = function() {
		for (this.g8 = 0, y = d2.hR - 1; 0 <= y; y--) 0 !== cV.dX[y] && this.g8++;
		this.gx = new Uint16Array(this.g8);
		for (var aY = 0, y = 0; y < d2.hR; y++) 0 !== cV.dX[y] && (this.gx[aY++] = y)
	}, this.a0w = function() {
		for (var cW = cV.cW, cj = cV.cj, a8k = cV.a8k, gx = g7.gx, y = g7.g8 - 1; 0 <= y; y--) {
			var cU, cT = gx[y];
			cW[cT] <= gA.gB(cj[cT], 4) ? aAe.cS(cT) : cW[cT] >= cj[cT] ? (cU = cW[cT], 250 <= (cj[cT] = cU) && (a8k[cT] = 1)) : cj[cT] -= Math.max(1, gA.gB(cj[cT] - cW[cT], 1e3))
		}
		this.aHg()
	}, this.aHg = function() {
		for (var dX = cV.dX, y5 = this.gx, y4 = this.g8, y = y4 - 1; 0 <= y; y--) 0 === dX[y5[y]] && (y5[y] = y5[--y4]);
		this.g8 = y4
	}
}

function aBj() {
	this.zk = new oW, this.f = function() {
		this.zk.resize()
	}
}

function aB4() {
	var aZ, bX, bT, aHh, gap, aHi, aHj, aHk, aHl, aHm, gI, aF6, uG, aHL, sh, kU, aHn;

	function aHq() {
		aHh = Math.floor(.2 * (eH.eV.fT() ? .07 : .035) * gG.gH), aHh = oU(eH.eV.fT() ? 3 : 1, aHh);
		var aHs = gG.gF / (aZ.length + gap);
		aHh = aHh < aHs ? aHs : aHh, sh = Math.floor((1 - gap) * aHh), bX = 0, aHt()
	}

	function aHt() {
		bX = (bX = bX < -20 ? -20 : bX) > (aZ.length - 15) * aHh ? (aZ.length - 15) * aHh : bX, aHj = Math.floor(bX / aHh), aHk = (aHk = aHj + Math.floor(gG.gF / aHh)) > aZ.length - 1 ? aZ.length - 1 : aHk, aHj = (aHj = aHk < aHj ? aHk : aHj) < 0 ?
			0 : aHj;
		var ag = aHk;
		aHi = bT / aZ[ag];
		for (var y = aHk - 1; aHj <= y; y--) aZ[y] > aZ[ag] && (ag = y, aHi = bT / Math.pow(aZ[y], aHL))
	}

	function aHw(bn) {
		bn = Math.floor((bX + gG.gF - bn - gap * aHh) / aHh);
		return (bn = bn < -1 ? -1 : -1 === bn ? 0 : bn > aZ.length - 1 ? -1 : bn) !== aHl && (aHl = bn, -1 === kU && 0 === aHl && no.np && (kU = setInterval(aHx, 100)), 1)
	}

	function aHz(y) {
		var ft = Math.floor(aHi * Math.pow(aZ[y], aHL));
		h9.fillRect(bX + gG.gF - (y + 1) * aHh, gG.ae - ft, sh, ft)
	}

	function aHx() {
		var cT;
		0 !== (aHl = 8 === av.aw() ? -1 : aHl) ? (aHn = (new Date).getTime(), clearInterval(kU), kU = -1) : (cT = aZ[1] / 864e3, -1 !== aHn && (cT += ((new Date).getTime() - aHn) * aZ[1] / 864e5, aHn = -1), 0 < cT && (aZ[0] += Math.floor(cT), e8
			.e9 = !0))
	}
	this.np = !1, this.f = function() {
		aHn = kU = -1, aHl = -(aHL = 1), this.aHo = !1, uG = 0, aF6 = new Date, bX = 0, gap = .3, aZ = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		bT = Math.floor(.15 * gG.ae), aHm = (aHm = Math.floor((eH.eV.fT() ? .018 : .0137) * gG.gH)) < 2 ? 2 : aHm, gI = g.h.fn(1, aHm), aHq()
	}, this.aHr = function(ah) {
		var y;
		for (this.np = !0, y = 0; y < ah.length; y++) aZ.unshift(ah[y]);
		aHq(), e8.e9 = !0
	}, this.aHu = function() {
		aHt()
	}, this.qf = function(bn, bo) {
		bo > gG.ae - .6 * bT ? this.aHo ? bn !== uG && (bX += bn - uG, uG = bn, aHt(), aHw(bn), this.aHo = -1 !== aHl, e8.e9 = !0) : aHw(bn) && (e8.e9 = !0) : this.aHy()
	}, this.aHy = function() {
		-1 !== aHl && (this.aHo = !1, aHl = -1, e8.e9 = !0)
	}, this.aEN = function(bn, deltaY) {
		-1 !== aHl && (bX += Math.floor(deltaY), aHt(), aHw(bn), e8.e9 = !0)
	}, this.iS = function(bn, bo) {
		this.qf(bn, bo), -1 !== aHl && (uG = bn, this.aHo = !0)
	}, this.aH9 = function() {
		-1 !== aHl && (this.aHo = !1)
	}, this.h8 = function() {
		h9.fillStyle = dR.a7k;
		for (var aI1, month, cU, ir, aI4, aI5, dd, aI6, aI7, y = aHk; aHj <= y; y--) aHz(y);
		this.np && 0 === aHj && (h9.fillStyle = dR.a83, aHz(0)), -1 !== aHl && (h9.fillStyle = dR.oP, aHz(aHl)), -1 !== aHl && (h9.font = gI, g.h.textBaseline(h9, 2), (cU = new Date).setTime(aF6.getTime() - 1e3 * aHl * 60 * 60 * 24), month =
			"month", aI1 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(cU), aI1 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(cU)), aI1 = aI1 + ", " + cU.getUTCDate() + " " + month + " " + cU.getFullYear(), month = 1 === aZ[aHl] ? L(254) : L(255), month = g.gZ.gb(aZ[aHl]) + " " + month, cU = Math.floor(h9.measureText(aI1).width), ir = Math
			.floor(h9.measureText(month).width), aI4 = Math.floor(.5 * (cU + aHm)), aI5 = (aI5 = bX + gG.gF - (aHl + 1) * aHh) < aI4 ? aI4 : aI5 > gG.gF - aI4 ? gG.gF - aI4 : aI5, dd = gG.ae - Math.floor(aHi * Math.pow(aZ[aHl], aHL)), aI6 =
			Math.floor(1.1 * aHm), aI7 = dd > gG.ae - aI6 ? gG.ae - aI6 : dd, h9.fillStyle = dR.gT, h9.fillRect(gG.gF - ir - aHm, aI7 - aI6, ir + aHm, aI6), h9.fillRect(aI5 - aI4, gG.ae - aI6, cU + aHm, aI6), h9.fillStyle = dR.fa, g.h
			.textAlign(h9, 2), h9.fillText(month, Math.floor(gG.gF - .5 * aHm), aI7), g.h.textAlign(h9, 1), h9.fillText(aI1, aI5, gG.ae), h9.strokeStyle = dR.a7l, h9.lineWidth = 1, h9.beginPath(), h9.moveTo(0, dd), h9.lineTo(gG.gF, dd), h9
			.closePath(), h9.stroke())
	}
}

function aBQ() {
	var aI8 = 0,
		aI9 = !0;

	function aIB(id) {
		id = [L(256), L(257), L(258), L(259)][id];
		cD.a9c(id)
	}
	this.c8 = function() {
		var cU, aCx;
		e8.iR < aI8 || (aI8 = e8.iR + 5e3, d2.ea) || d2.g5 || g.cn.gy(d2.ed) || (cU = new Date, aCx = cU.getUTCSeconds(), aI9 ? aCx < 50 && (aI9 = !1) : aCx < 50 || (aI9 = !0, (aCx = (cU.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == aCx || 20 ==
			aCx || 40 == aCx ? d2.dH < 7 && aIB(0) : 10 == aCx || 30 == aCx || 50 == aCx ? 7 !== d2.dH && 10 !== d2.dH || aIB(1) : 5 == aCx || 25 == aCx || 45 == aCx ? 8 === d2.dH && aIB(2) : 35 == aCx && 9 === d2.dH && aIB(3))))
	}
}

function aB3() {
	var aIC, aID, gF, bn, bo, aIE, aIF;
	this.f = function() {
		aIC = new Array(2), aID = new Array(2), this.aFN = !1, aIF = aIE = qo = qm = 0, qn = 1, this.resize()
	}, this.resize = function() {
		gF = (gF = Math.floor((eH.eV.fT() ? .072 : .0502) * gG.gH)) < 8 ? 8 : gF;
		for (var y = 1; 0 <= y; y--) aIC[y] = document.createElement("canvas"), aIC[y].width = gF, aIC[y].height = gF, aID[y] = aIC[y].getContext("2d", {
			alpha: !0
		});
		this.gL(),
			function() {
				for (var aIV = Math.floor(1 + gF / 20), y = 1; 0 <= y; y--) aID[y].clearRect(0, 0, gF, gF), aID[y].fillStyle = dR.nS, aID[y].beginPath(), aID[y].arc(gF / 2, gF / 2, gF / 2 - aIV, 0, 2 * Math.PI), aID[y].fill(), aID[y].lineWidth =
					aIV, aID[y].fillStyle = dR.fa, aID[y].strokeStyle = dR.fa, aID[y].beginPath(), aID[y].arc(gF / 2, gF / 2, gF / 2 - aIV, 0, 2 * Math.PI), aID[y].stroke(), a3F(aID[y], 0, 0, gF, aIV, .3, 0 === y)
			}()
	}, this.s8 = function() {
		return -qm / qn
	}, this.iI = function() {
		return -qo / qn
	}, this.aIJ = function(aIK, yv) {
		qm = qn * aIK - yv
	}, this.aIL = function(aIM, yw) {
		qo = qn * aIM - yw
	}, this.iS = function(aII, a9B) {
		return d2.iQ || ! function(aII, a9B) {
			return Math.pow(aII - (bn + gF / 2), 2) + Math.pow(a9B - (bo + gF / 2), 2) < gF * gF / 4 || Math.pow(aII - (bn + gF / 2), 2) + Math.pow(a9B - (bo + 2 * gF), 2) < gF * gF / 4
		}(aII, a9B) || aV.aW.data[8].value ? (kq.re() && (this.aFN = !0, aIE = aII, aIF = a9B), !1) : a9B < bo + 1.25 * gF ? this.aEN(Math.floor(gG.gF / 2), Math.floor(gG.ae / 2), -200) : this.aEN(Math.floor(gG.gF / 2), Math.floor(gG.ae / 2),
			200)
	}, this.qf = function(aII, a9B) {
		var aIN, aIO, kH, kI;
		return !kq.re() || (aIN = qm, aIO = qo, qm += kH = aIE - aII, qo += kI = aIF - a9B, qg.qf(kH, kI), this.zo(), aIE = aII, aIF = a9B, aIN !== qm) || aIO !== qo
	}, this.aEN = function(k9, kB, deltaY) {
		var hv;
		if (kq.re()) {
			if (0 < deltaY) hv = (hv = 500 / (500 + deltaY)) < .5 ? .5 : hv;
			else {
				if (!(deltaY < 0)) return !1;
				hv = 2 < (hv = (500 - deltaY) / 500) ? 2 : hv
			}
			this.aIP(k9, kB, hv), e8.e9 = !0
		}
		return !0
	}, this.aIP = function(bn, bo, bq) {
		var qh;
		bq = qh = (qh = 1024 < (qh = bq) * qn ? 1024 / qn : qh) * qn < .125 ? .125 / qn : qh, qg.zoom(bq, bn, bo),
			function(qh, k9, kB) {
				qn *= qh, qm = (qm + k9) * qh - k9, qo = (qo + kB) * qh - kB, iZ.zo()
			}(bq, bn, bo)
	}, this.zo = function() {
		var aIS = gG.gF / 16,
			a4B = 0,
			aIT = gG.ae / 16,
			a4C = 0;
		qm < -gG.gF + aIS && (a4B = -gG.gF + aIS - qm), qm > qn * bR.bS - aIS && (a4B = qn * bR.bS - aIS - qm), qo < -gG.ae + aIT && (a4C = -gG.ae + aIT - qo), qo > qn * bR.bU - aIT && (a4C = qn * bR.bU - aIT - qo), qm += a4B, qo += a4C, sL
		.aIU(), qg.qe(a4B, a4C)
	}, this.gL = function() {
		bn = gG.gF - gF - j.gap, bo = Math.floor(gG.ae / 2 - 1.25 * gF)
	}, this.h8 = function() {
		aV.aW.data[8].value || (h9.drawImage(aIC[0], bn, bo), h9.drawImage(aIC[1], bn, Math.floor(bo + 3 * gF / 2)))
	}
}

function hC() {
	function aIW(y, type, n2, eU) {
		aV.aW.data.push({
			cF: y,
			type: type || 0,
			value: n2 || 0,
			n2: n2 || 0,
			eU: eU || 0
		})
	}

	function aIX(y, type, n2, eU) {
		aV.aW.data.push({
			cF: y,
			type: type,
			value: n2 || "",
			n2: n2 || "",
			eU: eU || 0
		})
	}

	function aIY(re) {
		for (var y = aV.aW.data.length; y < re; y++) aV.aW.data.push(null)
	}
	this.data = [], this.f = function() {
		aIW(0, 1, 0, 5), aIW(1, 1, 1), aIW(2, 0), aIX(3, 2), aIW(4, 1), aIX(5, 2, "Trebuchet MS", 1), aIW(6, 0), aIW(7, 0, 0), aIW(8, 0), aIW(9, 1, 1), aIW(10, 1), aIW(11, 1, 1), aIX(12, 2, navigator.language), aIW(13), aIW(14), aIY(100), aIX(
				100, 2), aIX(101, 2), aIX(102, 2), aIX(103, 2), aIX(104, 2), aIX(105, 2), aIX(106, 2), aIW(107), aIW(108), aIW(109), aIX(110, 2), aIW(111), aIW(112), aIW(113), aIX(114, 2), aIW(115), aIX(116, 2), aIW(117, 1), aIX(118, 2, "", 2),
			aIW(119, 1, 0, 1), aIX(120, 2), aIW(121, 1, ~~(262144 * Math.random())), aIX(122, 2, "Player " + Math.floor(1e3 * Math.random())), aIW(123), aIX(124), aIW(125, 1), aIX(126, 2), aIW(127, 0, 1), aIW(128), aIW(129), aIW(130), aIW(131),
			aIW(132), aIX(133, 2), aIW(134, 0, 5), aIX(135, 2), aIX(136, 2), aIW(137), aIW(138), aIW(139), aIW(140), aIW(141), aIW(142), aIW(143), aIW(144), aIX(145, 2), aIW(146), aIW(147), aIX(148, 2), aIW(149), aIW(150, 0, 1), aIX(151, 2), aIW(
				152, 0, 5), aIW(153, 1), aIW(154, 1), aIX(155, 2), aIX(156, 2), aIW(157), aIW(158), aIW(159), aIW(160), aIY(180), aIW(180, 0), aIW(181, 0)
	}, this.at = function(cF, value) {
		this.data[cF].value = value
	}, this.mz = function(cF, value) {
		this.at(cF, value), aV.a9.save(cF, String(value)), aV.a9.save(cF, String(this.data[cF].eU), !0)
	}, this.aIZ = function() {
		for (var y = 0; y < this.data.length; y++) this.data[y] && (aV.a9.save(y, String(this.data[y].value)), aV.a9.save(y, String(this.data[y].eU), !0))
	}, this.aAW = function(cF) {
		return Number(this.data[cF].value)
	}, this.aIa = function(cF) {
		return String(this.data[cF].value)
	}
}

function hE() {
	function aIe(aZ) {
		if (0 === aZ.length) aV.ar.at(116, "");
		else {
			for (var aIf = aZ[0], y = 1; y < aZ.length; y++) aIf += ";" + aZ[y];
			aV.ar.at(116, aIf)
		}
	}
	this.aIb = function() {
		aV.aW.data[110].value.length && (aV.aW.data[106].value = aV.aW.data[110], aV.ar.at(110, ""), this.aIc())
	}, this.aIc = function() {
		var aZ = aV.aW.data[116].value.split(";");
		for (aZ.length % 2 == 1 && aZ.pop(), aZ.unshift(aV.aW.data[106].value), aZ.unshift(aV.aW.data[105].value), y = 2; y < aZ.length; y += 2)
			if (aZ[y] === aZ[0]) {
				aZ.splice(y, 2);
				break
			} for (var aId = [], y = 0; y < aZ.length; y += 2) aId.push(aZ[y]);
		aIe(aZ), aV.aW.data[117].value = 0, aV.aW.data[117].ty = aId
	}, this.xb = function(cF) {
		aV.aW.data[117].ty.splice(cF, 1), aV.aW.data[117].value = Math.min(cF, aV.aW.data[117].ty.length - 1);
		var aZ = aV.aW.data[116].value.split(";");
		aZ.splice(2 * cF, 2), aIe(aZ)
	}, this.xc = function(cF) {
		var aZ = aV.aW.data[116].value.split(";");
		return {
			iy: aZ[2 * cF],
			password: aZ[2 * cF + 1]
		}
	}, this.lG = function() {
		var aU = gA.yT(aV.aW.data[121].value, -1, 262143);
		return aU = -1 === aU ? ~~(262144 * Math.random()) : aU
	}
}

function aEF() {
	var yB, yC, to;

	function aIi() {
		var aj;
		1 === d2.data.gameMode ? (d2.data.teamPlayerCount || (d2.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), d2.o8.yJ()), aj = g.ab.aHR(d2.data.teamPlayerCount, 0), d2.data.numberTeams = aj) : (2 === d2.data
			.botDifficultyType && (d2.data.botDifficultyType = 0), 1 === d2.data.spawningType && (d2.data.spawningType = 0))
	}

	function yE() {
		1 !== d2.data.gameMode && (d2.data.teamPlayerCount = null), aIl(), d2.data.canvas = null, t.z(5, 5)
	}

	function aIl() {
		a0z.nx.f(), aV.ar.at(156, a0z.nz.lI())
	}

	function aIg() {
		d2.data.isReplay = 0, aIl(), d2.o8.aHU(), av.o7(), d2.o8.o9(), d2.data.canvas = 2 === d2.data.mapType ? bR.wj : null, d2.oA(), d2.aCs = 1
	}

	function aIx() {
		aIi();
		for (var aZ = [aIo(), aIp(), aIq()], y = 3; y < 6; y++) yC.e.removeChild(yC.tm[y].d), yC.tm[y] = aZ[y - 3], yC.e.appendChild(yC.tm[y].d);
		yC.resize()
	}

	function aIo() {
		var aIy, jk = new tr;
		return jk.ts(L(114)), aIy = 0 === d2.data.gameMode ? [L(116), L(117)][d2.data.colorsType] : d2.data.numberTeams + " Team" + (1 === d2.data.numberTeams ? "" : "s"), jk.yS(aIy), jk.tt(new tw([new q(L(263), function() {
			t.z(21)
		}).button])), jk
	}

	function aIp() {
		var jk = new tr,
			aZ = (jk.ts(L(173)), [L(158) + ": " + aN.a4K[d2.data.botDifficultyValue], L(174), L(175), L(117)]);
		return jk.yS(aZ[d2.data.botDifficultyType]), jk.tt(new tw([new q(L(263), function() {
			t.z(25)
		}).button])), jk
	}

	function aIq() {
		var jk = new tr,
			aZ = (jk.ts("Spawning"), [L(116), L(265), L(117)]);
		return jk.yS(aZ[d2.data.spawningType]), jk.tt(new tw([new q(L(263), function() {
			t.z(24)
		}).button])), jk
	}
	this.show = function() {
		yB.show(), this.resize(), yB.x.scrollTop = t.ax.a4m[0]
	}, this.a5 = function() {
		t.ax.a4m[0] = yB.x.scrollTop, yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v("🔧 " + L(260), [new q("⬅️ " + L(4), yE), new q(L(261), aIg)]), aIi(), d2.data.canvas || (2 === d2.data.mapType ? d2.data.canvas = bR.wj : 1 === d2.data.mapType ? d2.data.canvas = bR.aIk(bR.aHS(d2.data), 0).wj : (d2.data
		.mapType = 0, d2.data.passableWater = d2.data.passableMountains = 1, d2.data.canvas = bR.aIk(bR.aHS(d2.data), d2.data.mapSeed).wj)), yC = new ti(yB.x, (function(to) {
		var jk = new tr,
			rL = (jk.ts(L(262)), d2.data.canvas);
		rL.style.width = "100%", jk.tt({
			dx: rL
		}), jk.tt(new tw([new q(L(263), function() {
			t.z(20)
		}).button])), to.push(jk)
	}(to = []), function(to) {
		var jk = new tr;
		jk.ts(L(119)), jk.tt(new tu({
			cF: -1,
			value: d2.data.playerCount
		}, 1, 0, function(dx) {
			var playerCount = gA.yT(Math.floor(dx.target.value), 1, 512);
			dx.target.value = d2.data.playerCount = playerCount, 1 === d2.data.gameMode && (dx = g.ab.aHR(d2.data.teamPlayerCount, 0), d2.o8.yJ(), g.ab.aHR(d2.data.teamPlayerCount, 0) !== dx) && aIx()
		})), to.push(jk)
	}(to), function(to) {
		var jk = new tr;
		jk.ts(L(264)), jk.yO(new xi({
			ty: ["Battle Royale", "Teams"],
			value: d2.data.gameMode
		}, function(cF) {
			d2.data.gameMode !== cF && (d2.data.gameMode = cF, aIx())
		})), to.push(jk)
	}(to), to.push(aIo()), to.push(aIp()), to.push(aIq()), function(to) {
		var jk = new tr,
			aZ = (jk.ts(L(242)), [L(243), L(244), L(117)]);
		jk.yS(aZ[d2.data.playerNamesType]), jk.tt(new tw([new q(L(263), function() {
			t.z(23)
		}).button])), to.push(jk)
	}(to), function(to) {
		var jk = new tr,
			aZ = (jk.ts(L(156)), [L(157), L(158) + ": " + d2.data.aIncomeValue, L(117)]);
		jk.yS(aZ[d2.data.aIncomeType]), jk.tt(new tw([new q(L(263), function() {
			t.z(22)
		}).button])), to.push(jk)
	}(to), function(to) {
		var jk = new tr,
			aZ = (jk.ts(L(266)), [L(157), L(158) + ": " + d2.data.tIncomeValue, L(117)]);
		jk.yS(aZ[d2.data.tIncomeType]), jk.tt(new tw([new q(L(263), function() {
			t.z(26)
		}).button])), to.push(jk)
	}(to), function(to) {
		var jk = new tr,
			aZ = (jk.ts(L(267)), [L(157), L(158) + ": " + d2.data.iIncomeValue, L(117)]);
		jk.yS(aZ[d2.data.iIncomeType]), jk.tt(new tw([new q(L(263), function() {
			t.z(27)
		}).button])), to.push(jk)
	}(to), function(to) {
		var jk = new tr,
			aZ = (jk.ts(L(168)), [L(157), L(158) + ": " + d2.data.sResourcesValue, L(117)]);
		jk.yS(aZ[d2.data.sResourcesType]), jk.tt(new tw([new q(L(263), function() {
			t.z(28)
		}).button])), to.push(jk)
	}(to), function(to) {
		var jk = new tr;
		jk.ts(L(268)), jk.tt(new tw([new q(L(269), function() {
			t.eY(), d2.o8.aHV(), t.ax.a4m[0] = 0, t.z(19)
		}).button])), jk.tt(new tw([new q(L(270), function() {
			aAn.a4b()
		}).button])), jk.tt(new tw([new q(L(271), function() {
			return aAn.a4d(), !0
		}).button])), to.push(jk)
	}(to), to))
}

function aIz() {
	var aJ0;
	this.f = function() {
		if (d2.gn) {
			var ur = 1 - d2.aJ3;
			aJ0 = new Array(aL.hQ.length);
			for (var y = d2.i4 - 1; 0 <= y; y--) {
				var vp = aL.hQ[y + ur];
				aJ0[vp] = a0x.ax.a1o(20, aL.hO[vp])
			}
			9 === d2.dH && (aJ0[1] = a0x.ax.a1o(20, aL.hO[1]))
		} else aJ0 = [a0x.ax.a1o(20, aL.hO[7])]
	}, this.h8 = function() {
		var aJ4 = qn;
		if (!(5 <= aJ4)) {
			var aJ5 = gG.gF,
				aJ6 = gG.ae,
				dc = qm / aJ4,
				dd = qo / aJ4,
				qp = (aJ5 + qm) / aJ4,
				qq = (aJ6 + qo) / aJ4,
				kD = -20 * aJ4,
				aJ7 = .5 * kD,
				a5c = bR.bS << 4,
				aY = b5.ax.jP,
				jV = b5.ax.jV,
				jR = b5.ax.jR,
				hS = aL.hS,
				rL = aJ0,
				lX = h9;
			3 < aJ4 && (lX.globalAlpha = .5 * (5 - aJ4));
			for (var y = 0; y < aY; y++) {
				var i5 = jV[y],
					bn = aJ5 * (i5 % a5c / 16 - dc) / (qp - dc) + aJ7,
					i5 = aJ6 * (Math.floor(i5 / a5c) / 16 - dd) / (qq - dd) + aJ7;
				aJ5 < bn || aJ6 < i5 || bn < kD || i5 < kD || (lX.setTransform(aJ4, 0, 0, aJ4, bn, i5), lX.drawImage(rL[hS[jR[y] >> 3]], 0, 0))
			}
			lX.globalAlpha = 1, lX.setTransform(aJ4, 0, 0, aJ4, 0, 0)
		}
	}
}

function aJA() {
	this.uW = function(bw) {
		d2.g5 ? ee.aC9.uW(d2.ed, bw) : an.nk.aJB(bw)
	}, this.sz = function(z6, pc) {
		d2.g5 ? ee.aC9.sz(d2.ed, z6, pc) : an.nk.aJC(z6, pc)
	}, this.vz = function(z6, a3g) {
		d2.g5 ? ee.aC9.a3f(d2.ed, z6, a3g) : an.nk.aJD(z6, a3g)
	}, this.uh = function(z6, bw) {
		bw = (bw << 3) + bK.bL[6];
		d2.g5 ? ee.aC9.uh(d2.ed, z6, bw) : b5.b6.b7(d2.ed) && an.nk.aJE(z6, bw)
	}, this.uk = function(z6) {
		849 === z6 && (z6 = 850);
		var kN = bK.bL[3];
		d2.g5 ? ee.aC9.uk(d2.ed, z6, kN) : b5.ui.uy(d2.ed, kN) && an.nk.aJF(z6, kN)
	}, this.sy = function(kN) {
		d2.g5 ? ee.aC9.sy(d2.ed, kN) : an.nk.aJF(849, kN)
	}, this.sx = function(pc) {
		d2.g5 ? ee.aC9.sx(d2.ed, pc) : an.nk.aJG(pc)
	}, this.a6z = function(rF) {
		d2.g5 ? ee.aC9.aCA(d2.ed, rF) : an.nk.aJH(rF)
	}, this.uq = function(aCN) {
		d2.g5 ? ee.aC9.uq(d2.ed, aCN) : an.nk.aJI(aCN)
	}, this.eg = function() {
		d2.g5 ? ee.aC9.eg(d2.ed) : an.nk.aJJ()
	}, this.ek = function() {
		d2.g5 ? ee.aC9.ek(d2.ed) : an.nk.aJG(513)
	}, this.uc = function(z6, bw, pc) {
		d2.g5 ? ee.aC9.uc(d2.ed, z6, bw, pc) : an.nk.aJK(z6, bw, pc)
	}
}

function aBu() {
	this.zR = [L(272), L(273), L(274), L(275), L(276), L(277), L(278), L(279), L(280), L(281), L(282), L(283), L(284), L(285), L(286), L(287)];
	var aJL = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.c7 = new Array(aJL.length), this.f = function() {
		var aZ = aV.aW.data[155].value.split(";"),
			ag = aZ.length;
		if (function() {
				for (var aY = aJL.length, y = 0; y < aY; y++) c6.c7[y] = aJL[y]
			}(), !(ag > aJL.length))
			for (var y = 0; y < ag; y++) aZ[y].length && (this.c7[y] = aZ[y])
	}, this.zU = function(cF, code) {
		for (var c7 = this.c7, aJN = aJL, du = (c7[cF] = code, ""), aY = c7.length, aJO = [], y = 0; y < aY; y++) aJO.push(c7[y] === aJN[y] ? "" : c7[y]);
		aY--;
		for (y = 0; y < aY; y++) du += aJO[y] + ";";
		aV.ar.at(155, du += aJO[aY])
	}, this.zQ = function() {
		aV.ar.at(155, ""), this.f()
	}, this.a7 = function(code, cF) {
		return code === this.c7[cF] || code === this.c7[cF + 1]
	}
}

function aBk() {
	var aJP = 501,
		aJQ = (this.aHD = new Uint32Array(aJP), this.oH = new Uint32Array(aJP), this.gz = new Uint16Array(aJP), this.eX = 0, 1),
		aJR = 0;

	function aJS(self) {
		self.max.fill(0)
	}

	function aJU(self, y) {
		self.max[0] = Math.max(self.aHD[y], self.max[0]), self.max[1] = Math.max(self.oH[y], self.max[1]), self.max[2] = Math.max(self.gz[y], self.max[2])
	}
	this.max = [0, 0, 0], this.aHN = 0, this.dV = new Array(21), this.aHI = null, this.aM = function() {
		this.aHI = [L(288), L(289), L(290), L(291), L(292), L(293), L(294), L(295), L(266), L(267), L(296), L(297), L(298), L(299), "", L(300), L(301), L(302), L(156), L(303), L(304)]
	}, this.f = function() {
		this.eX = 0, aJQ = 1, this.aHN = 0, aJR = 0, aJS(this), this.dV.fill(0)
	}, this.aCH = function(player, z6) {
		g.cn.co(player) && (this.dV[0] += z6 + 1, this.dV[1]++, this.dV[12] += bK.a3d[1])
	}, this.a9k = function(player, a3g) {
		__fx.donationsTracker.logDonation(player, a3g, bK.a3d[0]);
		player === d2.ed && (cD.a9k(bK.a3d[0], bK.a3d[1], a3g), this.dV[12] += bK.a3d[1], this.dV[16] += bK.a3d[0]), a3g === d2.ed && (cD.a9m(bK.a3d[0], player), this.dV[10] += bK.a3d[0])
	}, this.aCK = function(player) {
		g.cn.co(player) && (this.dV[2]++, this.dV[12] += bK.a3d[1])
	}, this.aCR = function(player) {
		g.cn.co(player) && (this.dV[19]++, this.dV[12] += bK.a3d[1])
	}, this.a08 = function(player) {
		g.cn.co(player) && this.dV[20]++
	}, this.cs = function(player, aFE, cF) {
		g.cn.co(player) && (this.dV[cF] += aFE)
	}, this.c8 = function() {
		var self;
		this.aHN || 0 < aJR-- || ((self = this).aHD[self.eX] = cV.cW[d2.ed], self.oH[self.eX] = cV.cp[d2.ed], self.gz[self.eX] = gW.h0(d2.ed), aJU(self, self.eX), self.eX++, self.eX === aJP && function(self) {
			aJS(self), aJU(self, 0), self.eX = 1 + gA.gB(aJP, 2);
			for (var y = 1; y < self.eX; y++) self.aHD[y] = self.aHD[2 * y], self.oH[y] = self.oH[2 * y], self.gz[y] = self.gz[2 * y], aJU(self, y);
			aJQ *= 2
		}(self), aJR = aJQ - 1, aO.iM(), 0 === cV.dX[d2.ed] && (self.aHN = e8.o4()))
	}
}

function aEJ() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 !== d2.data.tIncomeType && (d2.data.tIncomeData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.tIncomeType && g.ab.yK(yD.nW(), d2.data.tIncomeData, 255)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(266), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(157), L(158), L(117)],
			value: d2.data.tIncomeType
		}, function(cF) {
			yH(), 2 !== cF || d2.data.tIncomeData || (d2.data.tIncomeData = new Uint8Array(d2.hR), d2.data.tIncomeData.fill(32)), d2.data.tIncomeType = cF, t.z(26)
		})), to.push(jk)
	}(to = []), function(to) {
		var jk;
		1 === d2.data.tIncomeType && ((jk = new tr).ts("Value"), jk.tt(new tu({
			cF: -1,
			value: d2.data.tIncomeValue
		}, 1, 0, function(dx) {
			var value = gA.yT(Math.floor(dx.target.value), 0, 255);
			dx.target.value = d2.data.tIncomeValue = value
		})), to.push(jk))
	}(to), function(to) {
		var jk;
		2 === d2.data.tIncomeType && ((jk = new tr).ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.tIncomeData, 4)), jk.tt(yD), to.push(jk))
	}(to), to))
}

function aAu() {
	var aJW, aJX, aJY;

	function aJb(a9V) {
		for (var y = aJW - 1; 0 <= y; y--) 0 === aJY[aJX[y]] && cV.cW[aJX[y]] >= a9V && aJa(aJX[y])
	}

	function aJZ(player) {
		var cU;
		64 === aJY[player] ? aJY[player] = 6 : (cU = cV.cW[player], aJY[player] = cU < 1e3 ? 3 : cU < 1e4 ? 2 : cU < 6e4 ? 1 : 0)
	}
	this.f = function() {
		aJW = 0, aJX = new Uint16Array(d2.hR), aJY = new Uint8Array(d2.hR)
	}, this.c8 = function() {
		for (var y = aJW - 1; 0 <= y; y--) 64 === aJY[aJX[y]] ? aJZ(aJX[y]) : 0 == aJY[aJX[y]]-- && (aJZ(aJX[y]), aJa(aJX[y]));
		16e4 <= cV.cW[gq[0]] && (aJb(16e4), 3e5 <= cV.cW[gq[0]]) && aJb(3e5), g.cn.y1(d2.ed) && (aP.dV[7] = Math.max(cV.cW[d2.ed], aP.dV[7]))
	}, this.cg = function(player) {
		for (var qw, y = aJW - 1; 0 <= y; y--)
			if (player === aJX[y]) {
				for (aJW--, qw = y; qw < aJW; qw++) aJX[qw] = aJX[qw + 1];
				return
			}
	}, this.a0I = function(player, aJd) {
		for (var y = aJW - 1; 0 <= y; y--)
			if (player === aJX[y]) return;
		aJX[aJW++] = player, aJY[player] = aJd ? 2 : 64
	}
}

function aB5() {
	var aJe, aJf, aJg, aJh, aJi, aJj, aJk, aJl, aJm, aJn, aJo, aJp, aJq, aJr, aJs, aJt, aJu, aJv, aJw, aJx, aJy, aJz, position, aK0, aK1, aK2, aK3, aK4 = 1,
		qJ = 1,
		aK5 = "";
	var leaderboardHasChanged = true;
	this.playerPos = d2.ed;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => r1[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(r1[d2.ed]);
	}

	function aK7() {
		aJk.clearRect(0, 0, aJe, aEm),
			aJk.fillStyle = dR.a8F,
			aJk.fillRect(0, 0, aJe, aJp),
			aJk.fillStyle = dR.fb,
			aJk.fillRect(0, aJp, aJe, aEm - aJp);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			r1[d2.ed]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aJz = -1;
		if (__fx.leaderboardFilter.enabled && aJz >= __fx.leaderboardFilter.filteredLeaderboard.length) aJz = -1;
		playerPos >= position && aK9(playerPos - position, dR.io),
			0 !== r1[d2.ed] && 0 === position && aK9(0, dR.a8I),
			-1 !== aJz && aK9(aJz, dR.a7j),
			aJk.fillStyle = dR.fb,
			//console.log("drawing", aJz),
			aJk.clearRect(0, aEm - __fx.leaderboardFilter.tabBarOffset, aJe, __fx.leaderboardFilter.tabBarOffset);
		aJk.fillRect(0, aEm - __fx.leaderboardFilter.tabBarOffset, aJe, __fx.leaderboardFilter.tabBarOffset);
		aJk.fillStyle = dR.fa,
			aJk.fillRect(0, aJp, aJe, 1),
			aJk.fillRect(0, aEm - __fx.leaderboardFilter.tabBarOffset, aJe, 1),
			__fx.leaderboardFilter.drawTabs(aJk, aJe, aEm - __fx.leaderboardFilter.tabBarOffset, dR.io),
			aJk.fillRect(0, 0, aJe, j.a27),
			aJk.fillRect(0, 0, j.a27, aEm),
			aJk.fillRect(aJe - j.a27, 0, j.a27, aEm),
			aJk.fillRect(0, aEm - j.a27, aJe, j.a27), aJk.font = aJf, g.h.textBaseline(aJk, 1), g.h.textAlign(aJk, 1), aJk.fillText(aK5, Math.floor((aJe + aJp - 22) / 2), Math.floor(aJn + aJg / 2));
		__fx.playerList.drawButton(aJk, 12, 12, aJp - 22);
		var qw, kD = playerPos < position + aJi - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aJi)
				position = (result.length > aJi ? result.length : aJi) - aJi;
			//if (position >= result.length) position = result.length - 1;
			for (aJk.font = aJh, g.h.textAlign(aJk, 0), qw = aJi - kD; 0 <= qw; qw--) {
				const pos = result[qw + position];
				if (pos !== undefined)
					aKA(gq[pos]), aKB(qw, pos, gq[pos]);
			}
			for (g.h.textAlign(aJk, 2), qw = aJi - kD; 0 <= qw; qw--) {
				const pos = result[qw + position];
				if (pos !== undefined)
					aKA(gq[pos]), aKC(qw, gq[pos]);
			}
		} else {
			for (aJk.font = aJh, g.h.textAlign(aJk, 0), qw = aJi - kD; 0 <= qw; qw--)
				aKA(gq[qw + position]), aKB(qw, qw + position, gq[qw + position]);
			for (g.h.textAlign(aJk, 2), qw = aJi - kD; 0 <= qw; qw--)
				aKA(gq[qw + position]), aKC(qw, gq[qw + position]);
		}
		2 == kD && (aKA(d2.ed), g.h.textAlign(aJk, 0), aKB(aJi - 1, r1[d2.ed], d2.ed), g.h.textAlign(aJk, 2), aKC(aJi - 1, d2.ed)), 0 === position && (kD = .7 * aJq / qY.get(4).height, aJk.setTransform(kD, 0, 0, kD, Math.floor(aJr + .58 * aJq + .5 *
			kD * qY.get(4).width), Math.floor(aJn + aJg + .4 * aJq)), aJk.imageSmoothingEnabled = !0, aJk.drawImage(qY.get(4), -Math.floor(qY.get(4).width / 2), -Math.floor(qY.get(4).height / 2)), aJk.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aKA(player) {
		d2.gn && (aJk.fillStyle = aL.hI[aL.hS[player]])
	}

	function aK9(y, aKE) {
		aJk.fillStyle = aKE, y = aJi - 1 < y ? aJi - 1 : y;
		aKE = Math.floor((y === aJi - 1 ? 2 : 0 === y ? 1.15 : 1) * aJq), aKE = y === aJi - 2 ? Math.floor(aJp + 9.15 * aJq) - Math.floor(aJp + 8.15 * aJq) : aKE;
		aJk.fillRect(0, Math.floor(aJp + (y + (0 === y ? 0 : .15)) * aJq), aJe, aKE)
	}

	function aKB(aKF, a3u, y) {
		aJk.fillText(aJv[a3u], aJr, Math.floor(aJn + aJg + (aKF + .5) * aJq)), 1 === cV.oV[y] && (aJk.font = "italic " + aJh);
		a3u = Math.floor(aJn + aJg + (aKF + .5) * aJq);
		aJk.fillText(cV.dQ[y], aJs, a3u), 0 !== cV.oV[y] && (aJk.font = aJh), y < d2.g6 && 2 !== cV.oV[y] || aJk.fillRect(aJs, a3u + .35 * aK4, aJu[y], Math.max(1, .1 * aK4))
	}

	function aKC(aKF, y) {
		aJk.fillText(cV.cW[y], aJt, Math.floor(aJn + aJg + (aKF + .5) * aJq))
	}

	function aKO(bo) {
		return (bo -= j.gap + aJp) < 0 ? Math.floor(bo / aJq) - 1 : bo < (aJi - 1) * aJq ? Math.floor(bo / aJq) : bo < aEm - aJp ? aJi - 1 : (bo -= aEm - aJp, aJi + Math.floor(bo / aJq))
	}

	function wF(bn, bo) {
		return bn >= j.gap && bn < j.gap + aJe && bo >= j.gap && bo < j.gap + aEm
	}
	this.f = function() {
			var y;
			for (aK1 = !1, aK3 = aK2 = aK0 = 0, aJz = -1, aJi = eH.eV.fT() ? 6 : 10, qJ = (position = 0) === (qJ = aV.aW.data[11].value) ? 10 : 1 === qJ ? 5 : 1, aJy = !1, aJw = new Uint16Array(aJi + 1), aJx = new Uint32Array(aJi + 1), aJm = d2.hR,
				gq = new Uint16Array(aJm), r1 = new Uint16Array(aJm), y = aJm - 1; 0 <= y; y--) gq[y] = y, r1[y] = y;
			this.resize(!0), aJu = new Uint16Array(d2.hR);
			var aK6 = Math.floor(aJe - aJs - aJr - aJl);
			for (aJv = new Array(d2.hR), aJk.font = aJh, y = d2.hR - 1; 0 <= y; y--) aJv[y] = y + 1 + ".", cV.dQ[y] = g.fs.gO(cV.i3[y], aJh, aK6), aJu[y] = Math.floor(aJk.measureText(cV.dQ[y]).width);
			aK7()
		}, this.resize = function(f) {
			if (aEm = eH.eV.fT() ? (aJe = Math.floor(.335 * gG.gH), Math.floor(aJi * aJe / 8)) : (aJe = Math.floor(.27 * gG.gH), Math.floor(aJi * aJe / 10)), aJe = Math.floor(.97 * aJe), (aJj = document.createElement("canvas")).width = aJe, aJj
				.height = aEm, aJk = aJj.getContext("2d", {
					alpha: !0
				}), aJn = .025 * aJe, aJg = .16 * aJe, aJo = 0 * aJe, aJp = Math.floor(.45 * aJn + aJg), aJq = (aEm - aJg - 2 * aJn - aJo) / aJi,
				aJj.height = aEm += aJq, __fx.leaderboardFilter.tabBarOffset = Math.floor(aJq * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aEm - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aJe,
				aJf = g.h.fn(1, Math.floor(.55 * aJg)), aK4 = Math.floor((eH.eV.fT() ? .67 : .72) * aJq), aJh = g.h.fn(0, aK4), aJk.font = aJh, aJr = Math.floor(.04 * aJe), aJs = Math.floor((eH.eV.fT() ? .195 : .18) * aJe), aJl = Math.floor(aJk
					.measureText("00920600").width), aJk.font = aJf, aJt = aJe - aJr, !f) {
				aJk.font = aJh;
				for (var y = d2.hR - 1; 0 <= y; y--) aJu[y] = Math.floor(aJk.measureText(cV.dQ[y]).width);
				aK7()
			}
			aK5 = g.fs.gO(L(305), aJf, .96 * aJe)
		}, this.oO = function() {
			return aJe
		}, this.gR = function(gS, aK8) {
			(aK8 || aJy && (gS || e8.o4() % qJ == 0)) && (aJy = !1, aK7())
		}, this.c8 = function() {
			! function() {
				for (var qw = aJm - 1; 0 <= qw; qw--) 0 === cV.dX[gq[qw]] && ! function(qw) {
					var aKM = gq[qw];
					aJm--;
					for (var y = qw; y < aJm; y++) gq[y] = gq[y + 1], r1[gq[y]] = y;
					gq[aJm] = aKM, r1[gq[aJm]] = aJm
				}(qw)
			}();
			for (var aKK, re = aJm - 1, qw = 0; qw < re; qw++) cV.cW[gq[qw]] < cV.cW[gq[qw + 1]] && (aKK = gq[qw], gq[qw] = gq[qw + 1], gq[qw + 1] = aKK, r1[gq[qw]] = qw, r1[gq[qw + 1]] = qw + 1);
			! function() {
				for (var cU = aJy, kD = (aJy = !0, r1[d2.ed] >= aJi - 1 ? aJi - 2 : aJi - 1), y = kD; 0 <= y; y--)
					if (aJw[y] !== gq[y] || aJx[y] !== cV.cW[gq[y]]) return;
				(kD != aJi - 2 || aJw[aJi] === r1[d2.ed] && aJx[aJi] === cV.cW[d2.ed]) && (aJy = cU)
			}();
			for (var y = aJi - 1; 0 <= y; y--) aJw[y] = gq[y], aJx[y] = cV.cW[gq[y]];
			aJw[aJi] = r1[d2.ed], aJx[aJi] = cV.cW[d2.ed];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.iS = function(bn, bo) {
			return !!wF(bn, bo) && ((__fx.utils.isPointInRectangle(bn, bo, j.gap + 12, j.gap + 12, aJp - 22, aJp - 22) && __fx.playerList.display(cV.i3), true) &&
				!(bo - j.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(bn - j.gap)) && (aK0 = e8.iR, aK1 = !0, aK2 = aK3 = aKO(bo), cA.aKP() && (bn = ib(-1, aK3, aJi), aJz !== (bn = bn === aJi ? -
					1 : bn)) && (aJz = bn, aK7(), e8.e9 = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aK7(), e8.e9 = !0;
		},
		this.qf = function(bn, bo) {
			if (__fx.utils.isPointInRectangle(bn, bo, j.gap + 12, j.gap + 12, aJp - 22, aJp - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aK7(), e8.e9 = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aK7(), e8.e9 = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(bn, bo, j.gap, j.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), bn - j.gap
				)) return;
			var cU, aKN = aKO(bo);
			return aK1 ? (cU = position, (position = ib(0, position += aK2 - aKN, d2.hR - aJi)) !== cU && (aKN = (aKN = ib(-1, aK2 = aKN, aJi)) !== aJi && wF(bn, bo) ? aKN : -1, aJz = aKN, aK7(), e8.e9 = !0), !0) : (aKN = (aKN = ib(-1, aKN, aJi)) ===
				aJi || !wF(bn, bo) || cA.aKP() ? -1 : aKN, aJz !== aKN && (aJz = aKN, aK7(), e8.e9 = !0))
		}, this.aH9 = function(bn, bo) {
			if (!aK1) return !1;
			aK1 = !1;
			var aKN = aKO(bo);
			var isEmptySpace = false;
			return cA.aKP() && -1 !== aJz && (aJz = -1, aK7(), e8.e9 = !0), e8.iR - aK0 < 350 && aK3 === aKN && -1 !== (aKN = (aKN = ib(-1, aKN, aJi)) !== aJi && wF(bn, bo) ? aKN : -1) && (bn = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					gq[__fx.leaderboardFilter.filteredLeaderboard[aKN + position] ?? (isEmptySpace = true, r1[d2.ed])]) : gq[aKN + position]), aKN === aJi - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : r1[d2.ed]) >=
				position + aJi - 1 && (bn = d2.ed), !isEmptySpace && d2.gn && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(bn, cV.i3, d2.g5), 0 !== cV.dX[bn] && !isEmptySpace) && kq.a9D(bn, 800, !1, 0), !0
		}, this.aEN = function(bn, bo, deltaY) {
			var aKQ;
			return !(aK1 || d2.iQ || (aKQ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !wF(bn, bo)) || (bn = (bn = ib(-1, aKO(bo), aJi)) === aJi || cA.aKP() ? -1 : bn, 0 < deltaY ? position < d2.hR - aJi && (position += Math.min(d2.hR - aJi -
				position, aKQ), aJz = bn, aK7(), e8.e9 = !0) : 0 < position && (position -= Math.min(position, aKQ), aJz = bn, aK7(), e8.e9 = !0), 0))
		}, this.h8 = function() {
			h9.drawImage(aJj, j.gap, j.gap)
		}
}

function aA7() {
	var aKR = new Uint8Array(64);
	this.f = function() {
		var y;
		for (aKR[0] = 45, aKR[37] = 95, y = 0; y < 10; y++) aKR[y + 1] = 48 + y;
		for (y = 0; y < 26; y++) aKR[y + 11] = 65 + y, aKR[y + 38] = 97 + y
	}, this.xg = function(aG2) {
		for (var cJ = cK, aKS = new Uint8Array(aG2), y = 0; y < aG2; y++) aKS[y] = cJ.cL(6);
		return aKS
	}, this.xf = function(aKS) {
		for (var aY = aKS.length, aKT = aKR, aZ = [], y = 0; y < aY; y++) aZ.push(String.fromCharCode(aKT[aKS[y]]));
		return aZ.join("")
	}, this.gb = function(value, aKU) {
		for (var aKT = aKR, aZ = [], y = 0; y < aKU; y++) aZ.push(String.fromCharCode(aKT[value >> 6 * (aKU - 1 - y) & 63]));
		return aZ.join("")
	}
}

function aBM() {
	var a7V, a7W;
	this.f = function() {
		a7V = 1, a7W = 0
	}, this.c8 = function() {
		0 < a7V && (a7W = 0 === a7W ? e8.iR + 16 : a7W, a7V = (a7V -= .001 * (e8.iR - a7W)) < 0 ? 0 : a7V, a7W = e8.iR, e8.e9 = !0)
	}, this.h8 = function() {
		0 < a7V && (h9.fillStyle = "rgba(0,0,0," + a7V + ")", h9.fillRect(0, 0, gG.gF, gG.ae))
	}
}

function aKb() {
	md = 0, aKX = 2048, mx = new Uint32Array(4 * aKX), aKY = 0, aKZ = new Uint32Array(aKX), aKa = new Uint8Array(bR.bS * bR.bU)
}

function aJa(player) {
	mZ = player, mX = !1, aKc(), aKd();
	for (var y = cc.t7(mZ) - 1; 0 <= y; y--) ma = y, aKe();
	mX && aKf()
}

function aKf() {
	mP.pN(), mP.pT()
}

function aKe() {
	mM = cc.tF(mZ, ma), mb = cc.tH(mZ, ma), ms = cc.a1N(mZ, ma), aKg(), (0 !== md && (aKh(), aKi()) ? mJ : mO)()
}

function aKi() {
	if (!((mq = gA.gB(mb, md)) > d2.mj)) {
		if (!ms) return !1;
		var aKj = md * (1 + d2.mj);
		mb += g.cn.mt(mZ, aKj - mb), mq = gA.gB(mb, md)
	}
	return !0
}

function aKh() {
	for (var y = md - 1; 0 <= y; y--) aKa[gA.gB(mx[y], 4)] = 0
}

function mO() {
	1 === cc.t7(mZ) && cf.cg(mZ);
	var cU = g.cn.a0D(mZ, mb);
	aP.cs(mZ, mb - cU, 12), cc.a1M(mZ, ma)
}

function aKc() {
	for (var player = mZ, ca = cV.ca, aY = Math.min(ca[player].length, aKX), aj = 0, aKk = aKZ, y = aY - 1; 0 <= y; y--) aKk[aj++] = ca[player][y];
	aKY = aj
}

function aKd() {
	for (var y = cV.ca[mZ].length - 1; 0 <= y; y--) bE.pY(cV.ca[mZ][y]) && bE.my(cV.ca[mZ][y], mZ);
	cV.ca[mZ] = []
}

function aKg() {
	md = 0, (mM === d2.hR ? aKl : aKm)()
}

function aKm() {
	for (var cT, kD, y, pO = bE.pO, bW = 3; 0 <= bW; bW--)
		for (y = aKY - 1; 0 <= y; y--) cT = aKZ[y] + pO[bW], kD = gA.gB(cT, 4), 0 === aKa[kD] && bE.pQ(cT) && bE.pR(cT) === mM && (aKa[kD] = 1, mx[md++] = cT)
}

function aKl() {
	for (var cT, kD, y, pO = bE.pO, bW = 3; 0 <= bW; bW--)
		for (y = aKY - 1; 0 <= y; y--) cT = aKZ[y] + pO[bW], kD = gA.gB(cT, 4), 0 === aKa[kD] && bE.pP(cT) && (aKa[kD] = 1, mx[md++] = cT)
}

function aBm() {
	this.aKn = null, this.e9 = !1, this.iR = 0, this.h1 = 56;
	var aKo = 0;

	function aKq() {
		e8.iR = aKo = performance.now(), e8.aKn.c8(), window.requestAnimationFrame(aKq)
	}
	this.f = function() {
		this.aKp(), window.requestAnimationFrame(aKq), this.iR = performance.now()
	}, this.c5 = function() {
		d2.ea ? (this.aKn = new aKr, this.aKn.f()) : d2.g5 ? this.aKn = new aKs : (this.aKn = new aKt, this.aKn.f())
	}, this.aKp = function() {
		this.aKn = new aCS, this.e9 = !0
	}, this.c8 = function() {
		this.aKn.aCT++
	}, this.o4 = function() {
		return this.aKn.aCT
	}, this.aKu = function() {
		var cU = performance.now();
		cU < aKo + 1e3 || (this.iR = cU, this.aKn.c8())
	}
}

function aGO() {
	this.a7N = !1, this.c8 = function() {
		e8.o4() % 250 != 249 || d2.ea || (an.ao.mC(+(this.a7N && cV.dX[d2.ed]), g7.g8 + b5.ax.jP), this.a7N = !1)
	}
}

function tu(xj, type, aKv, aKw) {
	var dx;
	this.dx = document.createElement("input"), (dx = this.dx).type = type ? "number" : "text", dx.id = "input" + t.ax.nR++, dx.value = xj.value, dx.style.width = "100%", dx.style.userSelect = "none", dx.style.outline = "none", dx.style.resize =
		"none", dx.style.border = "inherit", dx.style.font = "inherit", dx.style.color = dR.fa, dx.style.backgroundColor = dR.nS, dx.style.fontSize = "1em", dx.style.padding = "0.1em 0.2em", dx.addEventListener("focus", function() {
			gG.nT++
		}), dx.addEventListener("blur", function() {
			gG.nT--, -1 !== xj.cF && aV.ar.at(xj.cF, dx.value)
		}), dx.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== xj.cF && aV.ar.at(xj.cF, dx.value), aKv ? aKv() : dx.blur())
		}), aKw && dx.addEventListener("input", function(fi) {
			aKw(fi)
		})
}

function aKx() {
	this.aKy = 32, this.bn = 0, this.bo = 0, this.zC = 0, this.aKz = 0, this.aL0 = 4, this.je = null, this.a60 = new Int16Array(9), this.f = function() {
		this.zC = 1 + gA.gB(bR.bS - 1, this.aKy), this.aKz = 1 + gA.gB(bR.bU - 1, this.aKy), this.je = new Array(this.zC * this.aKz), g.ab.aL1(this.je);
		var bn, bo, a60 = this.a60,
			gF = this.zC;
		for (bn = -1; bn <= 1; bn++)
			for (bo = -1; bo <= 1; bo++) a60[3 * (1 + bo) + 1 + bn] = bo * gF + bn
	}, this.a5U = function(aL3, y) {
		return this.je[y].push(aL3), this.je[y].length - 1
	}, this.a5p = function(aL4, a5W, a5f) {
		var aL5, aL6, a5W = b9.jf(a5W),
			a5f = b9.jf(a5f);
		return a5W === a5f ? aL4 : (aL5 = this.je[a5W].pop(), this.je[a5W].length === aL4 ? this.a5U(aL5, a5f) : (aL6 = this.je[a5W][aL4], this.je[a5W][aL4] = aL5, b5.ax.jT[aL5] = aL4, this.a5U(aL6, a5f)))
	}
}

function aL7() {
	this.bI = function(player, id) {
		for (var aL8 = cV.cl[player], aY = aL8.length, y = 0; y < aY; y++)
			if (b9.yr(aL8[y], id)) return !0;
		return !1
	}, this.vB = function(player, bw) {
		for (var bd, aL9, bq, aL8 = cV.cl[player], aY = aL8.length, gF = bR.bS, aLB = b9.bN(bw), aLC = b9.bP(bw), aCa = -1, min = bR.bS * bR.bS + bR.bU * bR.bU, id = bE.bF(b9.bG(bw)), y = 0; y < aY; y++)(aL9 = (aL9 = aLB - (bd = (bq = aL8[y]) >>
			2) % gF) * aL9 + (aL9 = aLC - ~~((.5 + bd) / gF)) * aL9) < min && b9.yr(bq, id) && (min = aL9, aCa = bd);
		return aCa
	}, this.aLD = function(bb, bd) {
		for (var id = bE.bF(b9.bG(bd)), ys = b9.yp, bq = b9.bG(bb), aLE = -1, y = 0; y < 4; y++) {
			var ua = bq + ys[y];
			bE.kL(ua) && bE.bF(ua) === id && (-1 === aLE || b9.bm(b9.z9(ua), bd) < b9.bm(aLE, bd)) && (aLE = b9.z9(ua))
		}
		return aLE
	}, this.fL = function(player, bw) {
		for (var ys = b9.yp, bq = b9.bG(bw), y = 0; y < 4; y++) {
			var ua = bq + ys[y];
			if (bE.pQ(ua) && bE.pZ(player, ua)) return !0
		}
		return !1
	}, this.fM = function(player, bw) {
		for (var ys = b9.yp, bq = b9.bG(bw), y = 0; y < 4; y++) {
			var ua = bq + ys[y];
			if (bE.pP(ua)) return !0;
			if (bE.pQ(ua)) {
				ua = bE.pR(ua);
				if (player !== ua && mP.pb(player, ua)) return !0
			}
		}
		return !1
	}, this.aLF = function(bw) {
		for (var ys = b9.yp, bq = b9.bG(bw), y = 0; y < 4; y++) {
			var ua = bq + ys[y];
			if (bE.pQ(ua)) {
				ua = bE.pR(ua);
				if (g.cn.cx(ua)) return ua
			}
		}
		return -1
	}, this.bs = function(bq) {
		if (bE.kL(bq))
			for (var ys = b9.yp, y = 0; y < 4; y++)
				if (bE.pY(bq + ys[y])) return !0;
		return !1
	}, this.kP = function(player, id) {
		for (var a3 = player << 3, a4 = a3 + b5.ax.cX[player], jY = b5.ax.jY, jL = b5.ax.jL, y = a3; y < a4; y++) {
			var tG = jL[y];
			if (jY[tG] === id) return tG
		}
		return -1
	}, this.aLG = function(player) {
		return 0 === b5.ax.cX[player] ? -1 : b5.ax.jL[player << 3]
	}, this.wC = function(k9, kB) {
		var aY = b5.ax.jP;
		if (aY < 1) return -1;
		for (var jV = b5.ax.jV, vL = 80, vM = -1, y = 0; y < aY; y++) {
			var hl = b9.yu(k9, kB, jV[y]);
			hl < vL && (vL = hl, vM = y)
		}
		return function(y, k9, kB) {
			if (y < 0) return;
			var aLL = b5.ax.jV[y],
				aLM = b9.yy(aLL),
				aLL = b9.z0(aLL),
				y = 20 * (.9 + .1 * Math.log10(b5.ax.jX[y]));
			return y = Math.max(y, b9.z7(g.h.le(.02, 1.7))), gA.a44(b9.yx(k9), b9.yz(kB), aLM, aLL, y)
		}(vM, k9, kB) ? vM : -1
	}, this.uz = function(kN) {
		for (var aY = b5.ax.jP, jY = b5.ax.jY, y = 0; y < aY; y++)
			if (jY[y] === kN) return bK.bL[2] = y, !0;
		return !1
	}, this.cr = function(player) {
		for (var a3 = player << 3, a4 = a3 + b5.ax.cX[player], jL = b5.ax.jL, jX = b5.ax.jX, dN = 0, y = a3; y < a4; y++) dN += jX[jL[y]];
		return dN
	}, this.vK = function(player, uv) {
		uv = b5.ax.jb[uv];
		return this.fL(player, uv[uv.length - 1])
	}, this.vI = function(bb, bd, hl, aLI) {
		var z1 = b9.bN(bb),
			bb = b9.bP(bb),
			z3 = b9.bN(bd),
			bd = b9.bP(bd),
			z3 = (hl = Math.max(hl, 1), z3 - z1),
			bd = bd - bb,
			kH = gA.gB(Math.abs(z3) * aLI, hl),
			aLI = gA.gB(Math.abs(bd) * aLI, hl);
		return b9.kK(z1 + Math.sign(z3) * kH, bb + Math.sign(bd) * aLI)
	}, this.a0Z = function(fF, bw) {
		for (var aY = fF.length - 1, bn = b9.bN(bw), bo = b9.bP(bw), y = 0; y < aY; y++) {
			var bb = fF[y],
				bd = fF[y + 1],
				dc = b9.bN(bb),
				bb = b9.bP(bb),
				qp = b9.bN(bd),
				bd = b9.bP(bd);
			if (!(bn !== dc && bn !== qp && Math.sign(bn - dc) === Math.sign(bn - qp) || bo !== bb && bo !== bd && Math.sign(bo - bb) === Math.sign(bo - bd))) {
				if (dc === qp || bb === bd) return y;
				if (Math.abs(bn - dc) === Math.abs(bo - bb) && Math.abs(bn - qp) === Math.abs(bo - bd)) return y
			}
		}
		return -1
	}, this.gu = function() {
		for (var aLO = gq[0], jR = b5.ax.jR, jP = b5.ax.jP, aZ = [], y = 0; y < jP; y++) g.cn.v8(aLO, jR[y] >> 3) && aZ.push(y);
		return aZ
	}, this.fH = function(player, fF) {
		for (var a3 = player << 3, a4 = a3 + b5.ax.cX[player], jL = b5.ax.jL, jb = b5.ax.jb, ub = fF[0], a5u = fF[fF.length - 1], y = a3; y < a4; y++) {
			var cT = jb[jL[y]];
			if (cT[0] === ub && cT[cT.length - 1] === a5u) return !0
		}
		return !1
	}
}

function aLP() {
	this.aLQ = function(player, a3g, dN) {
		g.cn.a3e(player, dN, a3g) && (gW.vz(player, a3g), dJ.random() < dJ.value(6)) && (k6.jv.aCG[a3g] = 0)
	}, this.a0F = function(player, a3g, dN) {
		g.cn.a3i(dN, a3g) ? (g.cn.a0D(a3g, bK.a3d[0]), aP.a9k(player, a3g), qg.qR(a3g, bK.a3d[0])) : aP.cs(player, dN, 12)
	}
}

function a6A(aLR) {
	var fW = document.createElement("div"),
		aLS = document.createElement("div"),
		a6c = (this.bn = 0, this.bo = 0);

	function aLU() {
		fj.a6L.a5()
	}
	this.vS = aLR, this.show = function(bn, bo, a6T) {
		if (a6c) return [0, 0];
		a6c = 1, this.bn = bn, this.bo = bo,
			function(self, a6T) {
				var gF = g.h.l(.16, .7),
					ae = aLR.length * gF / 3,
					aLX = gG.gF / gG.ld,
					aLY = gG.ae / gG.ld,
					hv = Math.min(1, Math.min(aLX / gF, aLY / ae));
				gF *= hv, ae *= hv, a6T && (self.bn += g.h.l(.03, .5)), self.bn = gA.yT(self.bn, 0, aLX - gF), self.bo = gA.yT(self.bo, 0, aLY - ae), aLS.style.left = self.bn + "px", aLS.style.top = self.bo + "px", aLS.style.width = gF + "px",
					aLS.style.height = ae + "px", aLS.style.font = g.h.fn(0, .34 * ae / aLR.length), g.h.fo(aLS, 5);
				for (var y = 1; y < aLR.length; y++) g.h.fo(aLR[y].button, 8)
			}(this, a6T), document.body.appendChild(fW)
	}, this.a5 = function() {
		a6c && (a6c = 0, fW.removeEventListener("click", aLU), document.body.removeChild(fW))
	};
	for (var y = 0; y < aLR.length; y++) new a1b("" + (1 + y), aLR[y].button, 0, 1);
	fW.style.position = "fixed", fW.style.top = "0", fW.style.left = "0", fW.style.width = "100%", fW.style.height = "100%", fW.style.zIndex = "5", aLS.style.position = "absolute",
		function() {
			for (var aLV = (100 / aLR.length).toFixed(2) + "%", y = 0; y < aLR.length; y++) aLR[y].button.style.width = "100%", aLR[y].button.style.height = aLR[y].button.style.maxHeight = aLV, aLR[y].button.style.padding = "0.0em 0.9em", aLS
				.appendChild(aLR[y].button)
		}(), fW.appendChild(aLS), fW.addEventListener("click", aLU)
}

function m0() {
	function aLg() {
		var h3;
		return 8 === d2.dH ? 0 : (h3 = Math.floor(cV.cy[d2.ed] / 50), (h3 = Math.min(h3, 400)) / 100)
	}

	function aLZ() {
		var h3 = aLg();
		0 !== h3 && cD.dP(440, L(306, [h3.toFixed(2)]), 40, 0, dR.sn, dR.gT, -1, !1)
	}
	this.c8 = function() {
		var aLa;
		0 === dB.result.a5I || 0 === dB.result.a5G.length || 8 === d2.dH ? g.cn.gy(d2.ed) && aLZ() : (function(aLa) {
			7 !== d2.dH && 10 !== d2.dH || 0 !== d2.a2p && cD.dP(600, L(310, [aLa.toFixed(2)]), 40, 0, dR.fa, dR.gT, -1, !1)
		}(aLa = function() {
			cD.dP(520, L(307), 40, 0, dR.fa, dR.gT, -1, !1);
			for (var a5G = dB.result.a5G, aY = a5G.length, cW = cV.cW, aZ = [], y = 0; y < aY; y++) {
				var cT = a5G[y];
				aZ.push({
					cT: cT,
					cU: cW[cT]
				})
			}
			aZ.sort((qw, ak) => ak.cU - qw.cU);
			var di = cV.dQ,
				cU = dB.result.a5H,
				h3 = dB.result.a5I,
				du = "",
				aLa = 0;
			for (y = 0; y < aY; y++) {
				var uo = aZ[y].cU * h3 / (100 * cU),
					aLi = di[aZ[y].cT] + ": " + uo.toFixed(2) + "   ";
				aZ[y].cT === d2.ed && (aLa = uo), 2 < y && 4 !== aY ? 3 === y && (du += "(" + L(308, [aY - 3]) + ")") : du += aLi
			}
			cD.dP(560, g.gZ.aLj(du), 40, 0, dR.sn, dR.gT, -1, !1), aLa ? cD.dP(580, L(309, [aLa.toFixed(2) + " + " + aLg().toFixed(2)]), 40, 0, dR.sn, dR.gT, -1, !1) : g.cn.gy(d2.ed) && aLZ();
			return aLa
		}()), 2 === d2.a2o || 7 <= d2.dH || function(aLa) {
			var a5G = dB.result.a5G,
				aY = a5G.length,
				i3 = cV.i3,
				cW = cV.cW,
				i0 = [];
			loop: for (var y = 0; y < aY; y++) {
				var cT = a5G[y],
					hu = g.gZ.i2(i3[cT]);
				if (null !== hu) {
					for (var aCv = cW[cT], ak = i0.length - 1; 0 <= ak; ak--)
						if (hu === i0[ak].name) {
							i0[ak].cU += aCv, i0[ak].aZ.push({
								cT: cT,
								cU: aCv
							});
							continue loop
						} i0.push({
						name: hu,
						cU: aCv,
						aZ: [{
							cT: cT,
							cU: aCv
						}]
					})
				}
			}
			if (0 !== i0.length) {
				i0.sort((qw, ak) => ak.cU - qw.cU);
				var aZ = i0[0].aZ,
					aLk = (aZ.sort((qw, ak) => ak.cU - qw.cU), "[" + i0[0].name + "]"),
					aLl = 512 * dB.result.a5I / 26214400,
					ag = (cD.dP(0, L(311, [aLk, aLl.toFixed(4)]), 40, 0, dR.fa, dR.gT, -1, !1), aZ.length),
					aLm = i0[0].cU,
					aLn = 1e4 * aLl;
				for (y = 0; y < ag; y++)
					if (aZ[y].cT === d2.ed) {
						cD.dP(600, L(312, [(aLn * aZ[y].cU / (10 * aLm)).toFixed(2)]), 40, 0, dR.fa, dR.gT, -1, !1), cD.dP(640, L(313, [(.2 * aLa).toFixed(2), aLk]), 40, 0, dR.fa, dR.gT, -1, !1);
						break
					} d2.ea || cD.dP(720, L(314) + eo.ev, 736, 0, dR.fa, dR.yj, -1, !1)
			}
		}(aLa))
	}, this.dD = function() {
		var aLe, aLf;
		d2.g5 || (aLe = cV, aLf = d2.ed, 0 === aLe.a8k[aLf]) || aLe.a8j[aLf] < 1 || 2 * aLe.a8h[aLf] > 3 * (aLe.a8i[aLf] + aLe.a8j[aLf]) || aLZ()
	}
}

function aBo() {
	this.aCL = new aD2
}

function aEB(data) {
	var n, tf;
	this.show = function() {
		data.aLo && iw.j3("account", data.iy), n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), tf.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(data.username, [new q("⬅️ " + L(4), function() {
		iw.clear(), t.u()
	}), new q(data.aLo ? "🔄 " + L(315) : L(316), function() {
		t.z(8, t.eB().tb, new a1(25, {
			ix: 0,
			iy: data.iy,
			iz: data.iz
		}))
	}, 0, 0, 1)]), tf = new ti(n.x, function() {
		var to = [];
		to.push(function() {
				var jk = new tr,
					zS = (jk.ts(L(361)), new tu({
						value: data.username,
						cF: -1
					}));
				zS.dx.readOnly = !0, jk.tt(zS), jk.tt(new tw([new q(L(334), function(dx) {
					return g.h.ll(zS.dx), g.h.lm(dx), !0
				}).button])), data.aLo || jk.zK(L(362));
				return jk
			}()),
			function(to) {
				var jk, aFt, ai, aMH, aM8;
				data.aLo || ((jk = new tr).ts(L(363)), (aFt = jk.zK(data.aMG.length + " / 160")).style.textAlign = "center", ai = !0, (aMH = new nK(0, 1, function(dx) {
					dx = dx.target.value.length;
					aFt.textContent = dx + " / 160", 160 < dx ? ai && (ai = !1, aM8.f5(1), aM8.button.style.color = dR.fa) : ai || (ai = !0, aM8.f5(0), aM8.button.style.color = dR.a2I)
				})).dx.rows = 6, aMH.dx.style.fontSize = "1em", aMH.nU(data.aMG), jk.tt(aMH), aM8 = new q(L(364), function() {
					if (!ai) return !0;
					t.z(8, t.eB().tb, new a1(29, {
						ix: 1,
						du: aMH.nW().substring(0, 160)
					}))
				}, 0, 0, 1), jk.tt(new tw([aM8.button])), 0 !== data.aMI && (jk.tt(new tw([new q(L(1 === data.aMI ? 366 : 367), function() {
					t.z(8, t.eB().tb, new a1(29, {
						ix: 0,
						du: ""
					}))
				}, 0, 0, 1).button])), jk.zK(1 === data.aMI ? L(368, [data.aMK - 1]) : L(369, [data.aMK - 1]))), jk.zK(L(365, [data.aMJ])), to.push(jk))
			}(to),
			function(to) {
				var jk;
				data.aLo && 0 !== data.aMI && ((jk = new tr).ts(L(370)), jk.aFu(data.aMG), jk.tt(new tw([new q(L(371, 0, "Report"), function(dx) {
					return an.ax.a2b(0) && (g.h.lm(dx), an.nf.xY({
						ix: 5,
						iy: data.iy
					})), !0
				}, 0, 0, 1).button])), to.push(jk))
			}(to), to.push(function() {
				var jk = new tr,
					aM2 = (jk.ts(L(317)), [L(318), L(319), L(320), L(321), L(322)]),
					jC = data.aM3;
				jk.yS(L(323) + g.gZ.aM4(data.nA, .01, 2) + "<br>" + L(324) + (jC + 1) + " / " + data.n9 + "<br>" + L(325) + aM2[jC < 10 ? 0 : jC < 50 ? 1 : jC < 200 ? 2 : jC < 1e3 ? 3 : 4]), data.aLo || (jk.zK(L(326)), jk.zK(L(327)), jk
					.zK(L(328)));
				return jk
			}()), data.aLo && to.push(function() {
				var jk = new tr,
					zS = (jk.ts(L(329)), new tu({
						value: aV.aW.data[147].value,
						cF: -1
					}, 1, void 0, function(dx) {
						aV.ar.at(147, aM5(dx.target.value))
					})),
					aM6 = (jk.tt(zS), new q(L(330), function(dx) {
						return zS.dx.readOnly && an.ax.a2b(0) && (g.h.lm(dx), aM7(), an.nf.a8b({
							ix: 0,
							iy: data.iy,
							value: parseInt(aV.aW.data[147].value, 10)
						})), !0
					}, 1)),
					aM8 = new q(L(331), function(dx) {
						return dx.textContent === L(331) ? (dx.textContent = L(332), zS.dx.readOnly = !0, aM6.f5(0), aM6.button.style.color = dR.a2I, aV.ar.at(147, zS.dx.value), aM5(aV.aW.data[147].value)) : aM7(), !0
					}),
					aFt = (jk.tt(new tw([aM8.button])), jk.zK()),
					aM5 = function(aU) {
						aU = g.cn.a3w(aU, 2, 1e6);
						var aM9 = Math.max(1, 1 + Math.floor(.01 * (aU - 100)));
						aFt.textContent = L(333, [aU, aV.aW.data[105].value, aM9, data.iy, aU - aM9])
					},
					aM7 = function() {
						aM8.button.textContent = L(331), zS.dx.readOnly = !1, aM6.f5(1), aM6.button.style.color = dR.fa
					};
				return aM5(aV.aW.data[147].value), jk.tt(new tw([aM6.button])), jk
			}());
		to.push(function() {
			var jk = new tr,
				zS = (jk.ts(L(104)), new tu({
					value: data.iy,
					cF: -1
				}));
			return zS.dx.readOnly = !0, jk.tt(zS), jk.tt(new tw([new q(L(334), function(dx) {
				return g.h.ll(zS.dx), g.h.lm(dx), !0
			}).button])), jk
		}()), data.aLo || (to.push(function() {
			var jk = new tr,
				tv = (jk.ts(L(105)), new tu(aV.aW.data[106]));
			return tv.dx.readOnly = !0, tv.dx.type = "password", jk.tt(tv), jk.tt(new tw([new q(L(106), function(dx) {
				return dx.textContent === L(106) ? (dx.textContent = L(107), tv.dx.type = "text") : (dx.textContent = L(106), tv.dx.type = "password"), !0
			}).button, new q(L(334), function(dx) {
				return g.h.ll(tv.dx), g.h.lm(dx), !0
			}).button])), jk.tt(new tw([new q(L(335), function() {
				t.z(8, t.eB().tb, new a1(15))
			}).button])), jk.ts(L(336), "0.8em"), jk.zK(L(337)), jk.zK(L(338)), jk.zK(L(339)), jk
		}()), to.push(function() {
			var jk = new tr;
			return jk.ts(L(340)), jk.tt(new tw([new q(L(341), function() {
				t.z(6, t.eB().tb)
			}).button])), jk.tt(new tw([new q(L(342), function() {
				aV.ar.at(105, ""), t.z(8, t.eB().tb, new a1(18))
			}).button])), jk.tt(new tw([new q(L(343) + aV.aW.data[105].value, function() {
				t.z(4, 0, new cN(L(344), L(345), !0, [new q("⬅️ " + L(4), function() {
					t.z(7, t.tg(7).tb)
				})]))
			}, dR.a86).button])), jk
		}()), to.push(function() {
			function aMB(cF) {
				for (var y = 0; y < 2; y++) aMA[y].f5(0 === cF ? dR.f4 : 0 === y ? dR.a86 : dR.zJ)
			}
			var aFw, aMA, jk = new tr;
			jk.ts(L(346)), jk.zK(L(347)), aV.ax.aIc();
			return aMA = [new q(L(348), function() {
				var cF = Math.min(aV.aW.data[117].value, aFw.xl.length - 1);
				if (!(cF < 1)) {
					aFw.xl[cF].remove(), aFw.xl.splice(cF, 1);
					for (var y = cF; y < aFw.xl.length; y++) aFw.xl[y].name = "" + y;
					aV.ax.xb(cF), cF = aV.aW.data[117].value, aFw.xl[cF].textContent = aFw.xl[cF].textContent.replace("⚪", "🟢"), aMB(cF)
				}
			}, dR.f4), new q(L(103), function() {
				var cF = Math.min(aV.aW.data[117].value, aFw.xl.length - 1);
				cF < 1 || (cF = aV.ax.xc(cF), aV.ar.at(105, cF.iy), aV.ar.at(106, cF.password), t.z(8, t.eB().tb, new a1(18)))
			}, dR.f4)], (aFw = new xi(aV.aW.data[117], aMB)).xl[0].style.marginTop = "0.5em", jk.yO(aFw), jk.tt(new tw([aMA[1].button])), jk.tt(new tw([aMA[0].button])), jk
		}()));
		return to.push(function() {
				var jk = new tr,
					aM2 = (jk.ts(L(352)), [L(353), L(354), L(355), L(356)]),
					jC = data.aMC;
				return jk.yS(L(357) + (data.aLa / 100).toFixed(2) + "<br>" + L(324) + (jC + 1) + " / " + data.n9 + "<br>" + L(325) + aM2[jC < 10 ? 0 : jC < 50 ? 1 : jC < 200 ? 2 : 3]), jk
			}()), to.push(function() {
				var jk = new tr;
				return jk.ts(L(349)), jk.yS(L(350) + g.gZ.aM4(data.n6, .1, 1) + "<br>" + L(324) + (data.n7 + 1) + " / " + data.n9 + "<br>" + L(351) + data.n8), jk
			}()),
			function(to) {
				var jk = new tr,
					aML = data.nD,
					aMM = (jk.ts(L(372)), jk.yS(L(373, [data.nB.length ? "[" + data.nB + "]" : "-"])), jk.yS(L(374, [g.gZ.aM4(aML, .01, 2)])), jk.yS(L(375, [data.nF + 1 + " / " + data.n9])), data.nG),
					aMN = (jk.yS(L(376, [g.gZ.aM4(aMM, .1, 1)])), data.nI);
				jk.yS(L(377, [aMN])), jk.yS(L(378, [g.gZ.aM4(aMM / Math.max(aMN, 1), .1, 2)])), aML = data.nE, jk.ts(L(379), "0.8em"), jk.yS(L(373, [data.nC.length ? "[" + data.nC + "]" : "-"])), jk.yS(L(374, [g.gZ.aM4(aML, .01, 2)])), aMM =
					data.nH, jk.yS(L(376, [g.gZ.aM4(aMM, .1, 1)])), aMN = data.nJ, jk.yS(L(377, [aMN])), jk.yS(L(378, [g.gZ.aM4(aMM / Math.max(aMN, 1), .1, 2)])), data.aLo || (jk.zK(L(380)), jk.zK(L(381)));
				to.push(jk)
			}(to),
			function(to) {
				var jk = new tr;
				jk.ts(L(382)), jk.yS(L(357) + (data.aMO / 10).toFixed(1) + "<br>" + L(325) + (data.aMP.length ? L(383, [data.aMP]) : L(384))), data.aLo ? (jk.tt(new tw([new q(L(385), function(dx) {
					return an.ax.a2b(0) && (g.h.lm(dx), an.nf.xY({
						ix: 4,
						iy: data.iy
					})), !0
				}, 0, 0, 1).button])), jk.zK(L(386)), jk.zK(L(387))) : jk.zK(L(388));
				to.push(jk)
			}(to), to.push(function() {
				var jk = new tr;
				if (jk.ts(L(358)), jk.yS(L(359) + data.aMD + "<br>" + L(324) + (data.aME + 1) + " / " + data.n9 + "<br>" + L(325) + aR.jE(data.aME)), data.aLo) {
					var zS = new tu({
							value: aV.aW.data[157].value,
							cF: -1
						}, 1, void 0, function(dx) {
							aV.ar.at(157, aM5(dx.target.value))
						}),
						aM8 = (zS.dx.style.marginTop = "0.6em", jk.tt(zS), new q(L(331), function(dx) {
							return dx.textContent === L(331) ? (dx.textContent = L(332), zS.dx.readOnly = !0, aMF[0].f5(0), aMF[1].f5(0), aMF[0].button.style.color = dR.a2I, aMF[1].button.style.color = dR.a2I, aM5(aV.aW.data[157]
								.value)) : aM7(), !0
						})),
						aMF = (jk.tt(new tw([aM8.button])), [new q("−", function(dx) {
							return zS.dx.readOnly && an.ax.a2b(0) && (g.h.lm(dx), aM7(), an.nf.a8b({
								ix: 2,
								iy: data.iy,
								value: gA.yT(parseInt(aV.aW.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new q("+", function(dx) {
							return zS.dx.readOnly && an.ax.a2b(0) && (g.h.lm(dx), aM7(), an.nf.a8b({
								ix: 1,
								iy: data.iy,
								value: gA.yT(parseInt(aV.aW.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						aFt = jk.zK(),
						aM5 = function(aU) {
							return aU = g.cn.a3w(aU, 3, 32767), aFt.textContent = L(360, [aU - 1, aU, aV.aW.data[105].value]), aU
						};
					jk.tt(new tw([aMF[0].button, aMF[1].button]));
					for (var y = 0; y < 2; y++) aMF[y].button.style.fontSize = "1.6em";
					var aM7 = function() {
						aM8.button.textContent = L(331), zS.dx.readOnly = !1, aMF[0].f5(1), aMF[1].f5(1), aMF[0].button.style.color = dR.fa, aMF[1].button.style.color = dR.fa
					};
					aM5(aV.aW.data[157].value)
				}
				return jk
			}()),
			function(to) {
				var jk, lk;
				data.aLo && !data.aMQ || (0 === eH.id || data.aLo || data.aMQ) && ((jk = new tr).ts("Patreon"), !data.aLo && data.aMR ? jk.tt(new tw([new q(L(106), function() {
					an.nf.xY({
						ix: 7,
						iy: data.iy
					}), data.aMR = 0, t.z(7)
				}).button])) : data.aMQ ? (jk.yS(L(389, [(data.aMS / 100).toFixed(2)]) + "<br>" + L(390, [1 + data.aMT + " / " + data.aMU]) + "<br>" + L(391, [data.aMV ? L(392) : L(393)])), data.aLo || jk.tt(new tw([new q(L(394),
					function() {
						an.nf.xY({
							ix: 8,
							iy: data.iy
						}), data.aMQ = 0, aV.ar.at(160, 0), t.z(7)
					}).button]))) : (jk.yS(L(395), "0.75em").style.marginBottom = "0.3em", jk.yS("  • " + L(396), "0.75em").style.whiteSpace = "pre", jk.yS("  • " + L(397), "0.75em").style.whiteSpace = "pre", jk.yS("  • " + L(398),
						"0.75em").style.whiteSpace = "pre", jk.yS(L(399), "0.75em").style.marginTop = "1.0em", jk.yS(L(400), "0.75em").style.marginTop = "1.0em", jk.yS("<a href='" + eo.ep +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", lk = "https://www.patreon.com/oauth2/authorize?state=" + data.iy +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", jk.yS(L(401), "0.75em").style.marginTop = "1.0em", jk.yS("<a href='" + lk +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aLo || (jk.tt(new yP), jk.tt(new tw([new q(L(107), function() {
						an.nf.xY({
							ix: 6,
							iy: data.iy
						}), data.aMR = 1, t.z(7)
					}).button])), jk.yS(L(402), "0.75em").style.marginTop = "0.75em")), to.push(jk))
			}(to), to
	}())
}

function aAs() {
	this.h = new lR, this.ab = new aMW, this.cn = new a3R, this.gZ = new aMX, this.fs = new tc, this.e0 = new a8l, this.canvas = new aMY, this.color = new aMZ, this.aMa = new aMb, this.f = function() {
		this.h.lU()
	}
}

function aBX() {
	var aMc, aMd, aMe = -15e3,
		aMf = !1;

	function iS(dx) {
		cz.lB.aMw[0] = 1, aMx() || (aMf = !0, aMy(dx, 1), an.ax.a7M(an.ax.mF), aMz(Math.floor(gG.ld * dx.clientX), Math.floor(gG.ld * dx.clientY)))
	}

	function aMk(dx) {
		cz.lB.aMw[6] = 1, aMe = e8.iR, aMy(dx, 1), an.ax.a7M(an.ax.mF), 0 < dx.touches.length && (aMc = Math.floor(gG.ld * dx.touches[0].clientX), aMd = Math.floor(gG.ld * dx.touches[0].clientY), aAg.aMk(dx) || aMz(aMc, aMd))
	}

	function aMz(bn, bo) {
		t.iS(bn, bo), 0 === d2.h5 ? av.iS(bn, bo) : zm.iY(bn, bo) || aO.iS(bn, bo) || d8.iS(bn, bo) || eD.vn(bn, bo) || uM.iS(bn, bo) || 0 <= eb.iS(bn, bo) || eL.iS(bn, bo) || cA.aN0(bn, bo) || eD.vo(bn, bo)
	}

	function qf(dx) {
		cz.lB.aMw[1] = 1, aMx() || (aMf = !0, aMy(dx, 1), aN1(Math.floor(gG.ld * dx.clientX), Math.floor(gG.ld * dx.clientY)))
	}

	function aMl(dx) {
		cz.lB.aMw[7] = 1, aMe = e8.iR, aMy(dx, 1), 0 < dx.touches.length && (aMc = Math.floor(gG.ld * dx.touches[0].clientX), aMd = Math.floor(gG.ld * dx.touches[0].clientY), aAg.aMl(dx) || aN1(aMc, aMd))
	}

	function aN1(bn, bo) {
		t.qf(bn, bo), 0 === d2.h5 ? av.qf(bn, bo) : (aAj.uI(bn, bo), aO.qf(bn, bo) || (eb.qf(bn, bo), eD.iP() ? eD.qf(bn, bo) : t0.uL ? t0.qf(bn) && (e8.e9 = !0) : (h6.qf(bn, bo), iZ.aFN && iZ.qf(bn, bo) && (e8.e9 = !0))))
	}

	function aMj(dx) {
		cz.lB.aMw[4] = 1, aMx() || (aMy(dx, 1), aEM(), 0 === d2.h5 ? (av.click(-1024, -1024), no.aHy()) : (h6.aH9(-1024, -1024), eb.qf(-1024, -1024), t0.aFS(), iZ.aFN = !1))
	}

	function aEV(dx) {
		cz.lB.aMw[2] = 1, aMx() || (aMy(dx, 1), aN2(Math.floor(gG.ld * dx.clientX), Math.floor(gG.ld * dx.clientY), 2 === dx.button), cA.aMi && (cA.aMi = !1, dx.preventDefault()))
	}

	function click(dx) {
		cz.lB.aMw[3] = 1, aMx() || aMy(dx, 1)
	}

	function aMm(dx) {
		cz.lB.aMw[8] = 1, aMe = e8.iR, aMy(dx, 1), dx && dx.touches && 0 < dx.touches.length && 0 !== d2.h5 ? iZ.aFN = !1 : aAg.aN3() || (aN2(aMc, aMd, !1), cA.aMi && (cA.aMi = !1, dx.preventDefault()))
	}

	function aMn(dx) {
		cz.lB.aMw[9] = 1, aMe = e8.iR, aMy(dx, 1), aN2(aMc, aMd, !1), cA.aMi && (cA.aMi = !1, dx.preventDefault())
	}

	function aMo(dx) {}

	function aMp(dx) {}

	function aMq(dx) {
		aMx() || aMy(dx, 0)
	}

	function aN2(bn, bo, w2) {
		aEM(), 0 === d2.h5 ? av.click(bn, bo) : (h6.aH9(bn, bo), aO.aH9(), t0.aFS(), iZ.aFN = !1, eD.click(bn, bo, w2) ? e8.e9 = !0 : eb.aEV(bn, bo))
	}

	function aEM() {
		t.aEM()
	}

	function aEN(dx) {
		var bn, bo, deltaY;
		cz.lB.aMw[5] = 1, aMx() || (aMy(dx, 1), an.ax.a7M(an.ax.mF), bn = Math.floor(gG.ld * dx.clientX), bo = Math.floor(gG.ld * dx.clientY), deltaY = dx.deltaY, 1 === dx.deltaMode && (deltaY *= 16), t.aEN(bn, bo, deltaY), 0 === d2.h5 ? av.aEN(bn,
			bo, deltaY) : h6.aEN(bn, bo, deltaY) || (t0.aFK(bn, bo) ? t0.aEN(deltaY) && (e8.e9 = !0) : iZ.aEN(bn, bo, deltaY)))
	}

	function aMr(dx) {
		aMy(dx, 0)
	}

	function aMy(dx, id) {
		0 === id && t.iP() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== av.aw() && dx.preventDefault()
	}

	function aMs(dx) {
		if (__fx.keybindHandler(dx.key)) return;
		cz.lB.aMw[10] = 1, aMx() || 0 < gG.nT || (dx = dx.code) && dx.length && (c6.a7(dx, 18) ? aAf.aFX(3) : c6.a7(dx, 22) ? aAf.aFX(0) : c6.a7(dx, 20) ? aAf.aFX(1) : c6.a7(dx, 24) ? aAf.aFX(2) : c6.a7(dx, 10) ? t0.aFR(31 / 32) : c6.a7(dx, 8) ? t0
			.aFR(32 / 31) : c6.a7(dx, 6) ? t0.aFR(7 / 8) : c6.a7(dx, 4) ? t0.aFR(8 / 7) : c6.a7(dx, 14) ? 0 !== d2.h5 && iZ.aEN(Math.floor(gG.gF / 2), Math.floor(gG.ae / 2), -200) : c6.a7(dx, 16) ? 0 !== d2.h5 && iZ.aEN(Math.floor(gG.gF / 2),
				Math.floor(gG.ae / 2), 200) : c6.a7(dx, 0) ? d2.h5 && aAj.uJ(0) : c6.a7(dx, 2) ? d2.h5 && aAj.uJ(1) : c6.a7(dx, 30) ? d2.h5 && aAj.uJ(2) : c6.a7(dx, 26) ? d2.h5 && aAj.ul() : c6.a7(dx, 28) && d2.h5 && aAj.ek())
	}

	function aMt(dx) {
		if (cz.lB.aMw[11] = 1, !aMx() && !(0 < gG.nT || e8.iR < 400)) {
			var code = dx.code;
			if (code && code.length && !("Enter" === code && t.a6(1) || "Space" === code && t.a6(0))) return fj.a53 ? fj.a6L.a6(code) ? void 0 : void("Escape" === code && cA.aN5()) : void(8 !== av.aw() && av.a6(dx) ? e8.e9 = !0 : "Escape" === code ?
				cA.aN5() : c6.a7(code, 18) ? aAf.aFZ(3) : c6.a7(code, 22) ? aAf.aFZ(0) : c6.a7(code, 20) ? aAf.aFZ(1) : c6.a7(code, 24) ? aAf.aFZ(2) : c6.a7(code, 12) ? zm.iN(!d2.iQ) : "Space" === code && d2.h5 && (eb.eh && eb.eZ(), d2.ea) &&
				zm.iU(!1))
		}
	}

	function aMu() {
		cz.lB.aMw[12] = 1, "hidden" !== document.visibilityState && (e8.e9 = !0)
	}

	function aMx() {
		return aMe + 15e3 > e8.iR
	}

	function resize() {
		cz.lB.aMw[13] = 1, gG.zh()
	}

	function aMv() {
		eH.aAU && eH.aAU.setItem("qix3", "0")
	}
	this.aMg = 0, this.aMh = "", this.aMi = !1, this.f = function() {
		zf.addEventListener("mousedown", iS, {
			passive: !1
		}), zf.addEventListener("mousemove", qf, {
			passive: !1
		}), zf.addEventListener("mouseup", aEV, {
			passive: !1
		}), zf.addEventListener("click", click, {
			passive: !1
		}), zf.addEventListener("mouseleave", aMj, {
			passive: !1
		}), zf.addEventListener("wheel", aEN, {
			passive: !1
		}), zf.addEventListener("touchstart", aMk, {
			passive: !1
		}), zf.addEventListener("touchmove", aMl, {
			passive: !1
		}), zf.addEventListener("touchend", aMm, {
			passive: !1
		}), zf.addEventListener("touchcancel", aMn, {
			passive: !1
		}), zf.addEventListener("dragover", aMo), zf.addEventListener("drop", aMp), zf.addEventListener("dblclick", aMq), document.addEventListener("contextmenu", aMr), document.addEventListener("keydown", aMs), document.addEventListener(
			"keyup", aMt), document.addEventListener("visibilitychange", aMu), window.addEventListener("resize", resize), window.addEventListener("beforeunload", aMv)
	}, this.aN0 = function(bn, bo) {
		return !!zm.iS(bn, bo) || !!(h6.iS(bn, bo) || iZ.iS(bn, bo) || t0.iS(bn, bo) || cD.iS(bn, bo))
	}, this.aKP = aMx, this.cB = function() {
		return !aMf || 0 < aMe
	}, this.aN5 = function() {
		if (!t.iP()) return 8 === av.aw() ? d2.iQ ? void zm.iN(!1) : aO.iP ? void aO.eZ() : void eb.eZ() : void(7 !== av.aw() && 6 === av.aw() && zN.aN6());
		t.a6(2)
	}
}

function hB() {
	this.a18 = function(cF, eU) {
		return Number(this.a19(cF, eU))
	}, this.a19 = function(cF, eU) {
		var aU = null;
		return 0 === eH.id ? eH.aAU && (aU = eH.aAU.getItem((eU ? "v" : "d") + cF)) : 1 === eH.id ? aU = eH.p1.loadString((eU ? 1e3 : 2e3) + cF) : 2 === eH.id && (aU = eH.aN7[(eU ? "v" : "d") + cF]), aU && 0 !== aU.length ? aU : null
	}, this.aa = function(aY, aN8) {
		var aZ = [],
			aN9 = aN8 ? "e" : "l";
		if (0 === eH.id) {
			if (eH.aAU)
				for (y = 0; y < aY; y++) aZ.push(eH.aAU.getItem(aN9 + y))
		} else if (1 === eH.id)
			for (var aNA = aN8 ? 5e3 : 3e3, y = 0; y < aY; y++) aZ.push(eH.p1.loadString(aNA + y));
		else if (2 === eH.id)
			for (y = 0; y < aY; y++) aZ.push(eH.aN7[aN9 + y]);
		return aZ
	}, this.save = function(cF, value, eU) {
		var aNB = (eU ? "v" : "d") + cF;
		if (0 === eH.id) {
			if (eH.aAU && aV.aW.data[140].value) try {
				eH.aAU.setItem(aNB, value)
			} catch (dx) {
				console.log(dx)
			}
		} else 1 === eH.id ? eH.p1.saveString((eU ? 1e3 : 2e3) + cF, value) : 2 === eH.id && (eH.aN7[aNB] = value, eH.aAV.postMessage(aNB + " " + value))
	}, this.au = function(aZ, aN8) {
		var aY = aZ.length,
			aN9 = aN8 ? "e" : "l";
		if (0 === eH.id) {
			if (eH.aAU && aV.aW.data[140].value) try {
				for (y = 0; y < aY; y++) eH.aAU.setItem(aN9 + y, aZ[y])
			} catch (dx) {
				console.log(dx)
			}
		} else if (1 === eH.id)
			for (var aNA = aN8 ? 5e3 : 3e3, y = 0; y < aY; y++) eH.p1.saveString(aNA + y, aZ[y]);
		else if (2 === eH.id)
			for (y = 0; y < aY; y++) eH.aN7[aN9 + y] = aZ[y], eH.aAV.postMessage(aN9 + y + " " + aZ[y])
	}
}

function aMX() {
	var aNC = {
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
		aND = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.aNE = function(nV) {
		return nV.replace(aND, function(match) {
			return aNC[match] || match
		})
	}, this.gb = function(aU) {
		var y, tU, aNF, aNG, aNH;
		if (aU < 0) return "-" + this.gb(Math.abs(aU));
		if (aU < 1e3) return aU.toString();
		for (tU = Math.floor(Math.log(aU + .5) / Math.log(10)) + 1, aNF = Math.floor((tU - 1) / 3), aNH = (aNG = aU.toString()).substring(tU - 3, tU), y = 1; y < aNF; y++) aNH = aNG.substring(tU - 3 * (y + 1), tU - 3 * y) + " " + aNH;
		return aNG.substring(0, tU - 3 * aNF) + " " + aNH
	}, this.ga = function(cT, tU) {
		return cT.toFixed(tU) + "%"
	}, this.aNI = function(aU, aNJ) {
		return aU.toFixed(gA.yT(Math.floor((void 0 === aNJ ? 3 : aNJ) - Math.log10(Math.max(aU, 1))), 0, 8))
	}, this.aM4 = function(aU, hv, tU) {
		return (aU * hv).toFixed(tU)
	}, this.i2 = function(username) {
		var a0C, ua = username.indexOf("[");
		return !(ua < 0) && 1 < (a0C = username.indexOf("]")) - ua && a0C - ua <= 8 ? username.substring(ua + 1, a0C).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.i2;
	this.a9K = function(du) {
		for (var qw = Math.floor(.5 * du.length + .5), re = Math.floor(.5 * (qw - 1)), y = 0; y < re; y++)
			for (var ak = -1; ak < 2; ak += 2) {
				var a7 = qw + ak * y;
				if (" " === du[a7]) return [this.aLj(du.substring(0, a7)), this.aNK(du.substring(a7))]
			}
		return [du.substring(0, qw), du.substring(qw)]
	}, this.aNK = function(du) {
		for (var aY = du.length, y = 0; y < aY; y++)
			if (" " !== du[y]) return du.substring(y);
		return du
	}, this.aLj = function(du) {
		for (var y = du.length - 1; 0 <= y; y--)
			if (" " !== du[y]) return du.substring(0, y + 1);
		return du
	}, this.aNL = function(du, aFE) {
		return du.split("(")[0] + "(🧈 " + aFE.toFixed(2) + ")"
	}, this.startsWith = function(du, aNM) {
		return du.substring(0, aNM.length) === aNM
	}, this.ln = function(du, aNM) {
		var aY = du.length;
		return du.substring(aY - aNM.length, aY) === aNM
	}, this.yR = function(aZ, aNN, aNO) {
		var du = "",
			aY = aZ.length - 1;
		aNO = aNO || "";
		for (var y = 0; y < aY; y++) du += aNO + aZ[y] + aNO + ",", (y + 1) % aNN == 0 && (du += "\n");
		return du += aNO + aZ[aY] + aNO
	}, this.aAJ = function(du, hb, hc) {
		return du.replace(new RegExp(hb, "g"), hc)
	}
}

function aEE() {
	var n, tf, to;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), tf.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(15), [new q("⬅️ " + L(4), function() {
		t.u()
	})]), tf = new ti(n.x, ((to = []).push(function() {
		function aM7() {
			aNT.button.textContent = L(331), aNR.dx.readOnly = !1, aNS.dx.readOnly = !1, aM6.f5(1), aM6.button.style.color = dR.fa
		}
		var jk = new tr,
			aNQ = (jk.ts(L(403)), new tu({
				value: aV.aW.data[105].value,
				cF: -1
			})),
			aNR = (aNQ.dx.readOnly = !0, jk.tt(aNQ), jk.ts(L(90), "0.8em"), new tu(aV.aW.data[148])),
			aNR = new tu(aV.aW.data[148], 0, void 0, function(dx) {
				aM5(aV.aW.data[149].value, dx.target.value)
			}),
			aNS = (jk.tt(aNR), jk.ts(L(94), "0.8em"), new tu(aV.aW.data[149], 1, void 0, function(dx) {
				aM5(dx.target.value, aV.aW.data[148].value)
			})),
			aNT = (jk.tt(aNS), new q(L(331), function(dx) {
				return dx.textContent === L(331) ? (dx.textContent = L(332), aNR.dx.readOnly = !0, aNS.dx.readOnly = !0, aM6.f5(0), aM6.button.style.color = dR.a2I, aV.ar.at(149, aNS.dx.value), aM5(aV.aW.data[149].value, aV.aW
					.data[148].value)) : aM7(), !0
			})),
			aM6 = (jk.tt(new tw([aNT.button])), new q(L(330), function(dx) {
				return aNR.dx.readOnly && an.ax.a2b(0) && (g.h.lm(dx), aM7(), an.nf.a8b({
					ix: 0,
					iy: aV.aW.data[148].value,
					value: parseInt(aV.aW.data[149].value, 10)
				})), !0
			}, 1)),
			aFt = jk.zK(),
			aM5 = (jk.zK(L(404)).style.fontWeight = "bold", function(aU, du) {
				aU = g.cn.a3w(aU, 2, 1e6);
				var aM9 = Math.max(1, 1 + Math.floor(.01 * (aU - 100)));
				aFt.textContent = L(333, [aU, aV.aW.data[105].value, aM9, du, aU - aM9])
			});
		return jk.tt(new tw([aM6.button])), aM5(aV.aW.data[149].value, aV.aW.data[148].value), jk
	}()), to))
}

function aED() {
	var n, tf, to;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), tf.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(405), [new q("⬅️ " + L(4), function() {
		t.a2x(13)
	})]), tf = new ti(n.x, ((to = []).push(function() {
		var jk = new tr,
			aM8 = (jk.ts(L(406)), jk.zK(L(407)), new q(L(408), function() {
				aV.ar.at(130, 0), t.ax.eO()
			}, 0, 0, 1)),
			zS = new tu(aV.aW.data[126], 0, function() {
				aM8.button.click()
			});
		return jk.tt(zS), zS.dx.placeholder = "a,b,c", zS.dx.style.marginTop = "0.5em", jk.tt(new tw([aM8.button])), jk
	}()), to.push(function() {
		var jk = new tr,
			aM8 = new q(L(408), function() {
				aV.ar.at(130, 1), t.ax.eO()
			}, 0, 0, 1),
			aNY = new tu(aV.aW.data[129], 1, function() {
				aNY.dx.focus()
			}),
			aNZ = new tu(aV.aW.data[128], 1, function() {
				aM8.button.click()
			});
		return jk.ts(L(409)), jk.tt(aNZ), aNZ.dx.style.marginBottom = "0.5em", jk.ts(L(410)), jk.tt(aNY), jk.tt(new tw([aM8.button])), jk
	}()), to.push(function() {
		var jk = new tr;
		return jk.ts(L(411)), aV.aW.data[125].ty = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], jk.yO(new xi(aV.aW.data[125])), jk
	}()), to.push(function() {
		var jk = new tr;
		return jk.ts(L(412)), jk.tt(new yQ(aV.aW.data[127], L(413))), jk
	}()), to))
}

function aB6() {
	var aNa, aNb, aNc;

	function aNh(y) {
		var button = zl.vS[y],
			bn = button.bn,
			bo = button.bo,
			gF = button.gF,
			ae = button.ae;
		h9.fillStyle = button.aNf, h9.fillRect(bn, bo, gF, ae), y === aNa && (h9.fillStyle = aNc, h9.fillRect(bn, bo, gF, ae)), h9.lineWidth = j.a27, h9.strokeStyle = aNb, h9.strokeRect(bn, bo, gF, ae),
			function(button) {
				var bn = button.bn,
					bo = button.bo,
					gF = button.gF,
					ae = button.ae;
				g.h.textAlign(h9, 1), g.h.textBaseline(h9, 1), h9.font = button.font, h9.fillStyle = aNb, h9.fillText(button.aCt, Math.floor(bn + gF / 2), Math.floor(bo + ae / 2 + .1 * button.fontSize))
			}(button)
	}
	this.gF = 0, this.ae = 0, this.bo = 0, this.gap = 0, this.f = function() {
		aNa = -1, aNb = dR.fa, aNc = "rgba(255,255,255,0.16)", this.vS = new Array(7), this.ae = Math.floor((eH.eV.fT() ? .123 : .093) * gG.gH), this.gF = Math.floor((eH.eV.fT() ? 3.96 : 4.2) * this.ae), this.gap = Math.floor(.025 * this.gF);
		var aNd = Math.floor(.26 * this.ae),
			aNe = g.h.fn(1, aNd);
		this.vS[0] = {
			bn: 0,
			bo: 0,
			gF: Math.floor(.6 * this.gF - this.gap / 2),
			ae: this.ae,
			aCt: "Multiplayer",
			font: aNe,
			aNf: "rgba(22,88,22,0.8)",
			fontSize: aNd
		}, aNd = Math.floor(.18 * this.ae), aNe = g.h.fn(1, aNd), this.vS[1] = {
			bn: 0,
			bo: 0,
			gF: this.gF - this.vS[0].gF - this.gap,
			ae: this.ae,
			aCt: "Single Player",
			font: aNe,
			aNf: "rgba(22,88,88,0.8)",
			fontSize: aNd
		}, this.vS[2] = {
			bn: 0,
			bo: 0,
			gF: this.gF,
			ae: Math.floor(.3 * this.ae),
			aCt: "",
			font: this.vS[1].font,
			aNf: "rgba(100,0,0,0.8)",
			fontSize: this.vS[1].fontSize
		}, this.vS[3] = {
			bn: 0,
			bo: 0,
			gF: this.gF,
			ae: this.ae,
			aCt: "Back",
			font: this.vS[0].font,
			aNf: "rgba(0,0,0,0.8)",
			fontSize: this.vS[0].fontSize
		}, this.vS[4] = {
			bn: 0,
			bo: 0,
			gF: this.gF,
			ae: Math.floor(.3 * this.ae),
			aCt: "The game was updated!",
			font: this.vS[1].font,
			aNf: "rgba(100,0,0,0.8)",
			fontSize: this.vS[1].fontSize
		}, this.vS[5] = {
			bn: 0,
			bo: 0,
			gF: this.vS[0].gF,
			ae: Math.floor(.8 * this.ae),
			aCt: "Reload",
			font: this.vS[0].font,
			aNf: "rgba(0,100,0,0.8)",
			fontSize: this.vS[0].fontSize
		}, this.vS[6] = {
			bn: 0,
			bo: 0,
			gF: this.vS[1].gF,
			ae: this.vS[5].ae,
			aCt: "Back",
			font: this.vS[0].font,
			aNf: "rgba(0,0,0,0.8)",
			fontSize: this.vS[0].fontSize
		}, this.aHu()
	}, this.aHu = function() {
		this.bo = Math.floor(.54 * gG.ae), this.vS[0].bn = Math.floor(.5 * gG.gF - .5 * this.gF), this.vS[1].bn = this.vS[0].bn + this.vS[0].gF + this.gap, this.vS[2].bn = this.vS[3].bn = this.vS[0].bn, this.vS[4].bn = this.vS[5].bn = this.vS[0]
			.bn, this.vS[6].bn = this.vS[1].bn, this.vS[0].bo = Math.floor(.54 * gG.ae), this.vS[1].bo = this.vS[0].bo, this.vS[2].bo = Math.floor((gG.ae - this.vS[2].ae - this.vS[3].ae - this.gap) / 2), this.vS[3].bo = this.vS[2].bo + this.vS[2]
			.ae + this.gap, this.vS[4].bo = Math.floor((gG.ae - this.vS[4].ae - this.vS[5].ae - this.gap) / 2), this.vS[5].bo = this.vS[6].bo = this.vS[4].bo + this.vS[4].ae + this.gap
	}, this.aNg = function() {
		aNh(0), aNh(1)
	}, this.aNi = function() {
		aNh(2), aNh(3)
	}, this.aNj = function() {
		aNh(4), aNh(5), aNh(6)
	}, this.qf = function(bn, bo, gR) {
		var y = -1;
		return 0 === av.aw() ? y = this.aFK(bn, bo, 0, 2) : 3 === av.aw() ? y = this.aFK(bn, bo, 3, 1) : 5 === av.aw() && (y = this.aFK(bn, bo, 5, 2)), aNa !== y && (aNa = y, gR) && (e8.e9 = !0), -1 !== y && (no.aHy(), !0)
	}, this.aFK = function(bn, bo, aDd, size) {
		for (var y = aDd; y < aDd + size; y++)
			if (bn >= this.vS[y].bn && bo >= this.vS[y].bo && bn <= this.vS[y].bn + this.vS[y].gF && bo <= this.vS[y].bo + this.vS[y].ae) return y;
		return -1
	}
}

function vQ() {
	this.aMw = new Uint32Array(14);
	var aNl = -1;

	function aNo() {
		var rL = g.h.lW(2, 2),
			lX = g.h.getContext(rL, !1);
		return lX.fillStyle = "rgb(128,128,128)", lX.fillRect(0, 0, 2, 2), aNp(rL.toDataURL())
	}

	function aNp(du) {
		for (var aY = du.length, mE = aY, y = 0; y < aY; y++) mE += du.charCodeAt(y);
		return mE
	}
	this.f = function() {}, this.aFC = function() {
		eH.aAU && eH.aAU.setItem("qix3", "0")
	}, this.cL = function() {
		return 69
	}, this.lI = function() {
		var rL, lX;
		lA.lC(4, g.ab.sb(this.aMw)), lA.lC(1, this.aMw[1] || this.aMw[7]), lA.lC(1, navigator.webdriver ? 1 : 0), lA.lC(20, (0 <= aNl || (rL = g.h.lW(172, 24), (lX = g.h.getContext(rL, !0)).fillStyle = "rgba(0,0,250,0.573)", lX.fillRect(1, 10,
			100, 11), lX.textBaseline = "top", lX.font = "15.7px Arial", lX.fillStyle = "rgba(2,0,0,0.764)", lX.fillText("Ab🎯c DeFg4iJ1l Mnqzy", 2, 2), aNl = aNp(rL.toDataURL())), aNl % 1048576)), lA.lC(1, 1 - Math.abs(Math.sign(aNo() -
		aNo()))), lA.lC(20, f1.lD), eH.aAU ? (lX = eH.aAU.getItem("qix3"), eH.aAU.setItem("qix3", "1"), lX ? "0" === lX ? lA.lC(2, 2) : lA.lC(2, 3) : lA.lC(2, 1)) : lA.lC(2, 0), lA.lC(20, 0)
	}
}

function xH(fV) {
	var aNq = document.createElement("div");

	function fd() {
		cA.cB() || (aNq.style.backgroundColor = g.color.fh(dR.fb, 50))
	}

	function fe() {
		aNq.style.backgroundColor = dR.fb
	}
	this.at = function(fg) {
			aNq.textContent = fg
		}, this.show = function() {
			document.body.appendChild(aNq)
		}, this.resize = function() {
			var ae = g.h.l(.03, .5);
			aNq.style.width = 2 * ae + "px", aNq.style.height = ae + "px", aNq.style.font = g.h.fn(1, .75 * ae), g.h.fo(aNq, 4), g.h.fo(aNq, 2)
		}, this.fp = function() {
			aNq.onclick = null, aNq.onmouseover = null, aNq.onmouseout = null, document.body.removeChild(aNq), aNq = null
		}, aNq.style.position = "absolute", fe(), aNq.style.color = dR.fa, aNq.style.zIndex = "3", aNq.style.right = "0", aNq.style.top = "0", aNq.style.display = "flex", aNq.style.justifyContent = "center", aNq.style.alignItems = "center", aNq.style
		.userSelect = "none", aNq.style.outline = "none", aNq.onclick = fV, aNq.onmouseover = fd, aNq.onmouseout = fe
}

function aBa() {
	this.ax = new a1e, this.a3B = new aFp, this.f = function() {
		this.ax.f()
	}, this.c8 = function() {
		0 !== this.ax.a1g && this.ax.a1g--
	}
}

function aAx() {
	var aNr, aNs, aNt, sR, aNu, aNv, aNw, aNx, aNy, aNz;

	function aO1() {
		var hq = d2.hq;
		for (aNy = hq; aNy < d2.hR; aNy++) aO0();
		for (aNy = d2.gQ ? d2.g6 : 0; aNy < hq; aNy++) {
			if (!aO4()) {
				for (var ak = d2.aO6 = aNy; ak < hq; ak++) aNy = ak, aO0();
				return
			}
			aO5(aNv + aNr * aNu + gA.gB(aNu, 2), aNw + aNs * aNu + gA.gB(aNu, 2))
		}
	}

	function aOR(player) {
		for (var dY = cV.dY, da = cV.da, dZ = cV.dZ, db = cV.db, bo = da[player]; bo <= db[player]; bo++)
			for (var bn = dY[player]; bn <= dZ[player]; bn++) {
				var bq = bE.s9(bn, bo);
				bE.pQ(bq) && (bE.pf(bq) ? bE.my(bq, player) : bE.pX(bq, player))
			}
	}

	function aOQ(aZ, a3, a4) {
		var cU = aZ[a3];
		aZ[a3] = aZ[a4], aZ[a4] = cU
	}

	function aO4() {
		return function() {
			var y;
			for (y = 0; y < 8; y++)
				if (aNr = gA.gB(aNt * dJ.random(), dJ.value(100)), aNs = gA.gB(sR * dJ.random(), dJ.value(100)), aOW()) return 1;
			return
		}() || function() {
			var kH, kI, qw, oT, ak, r9;
			for (kH = gA.gB(aNt * dJ.random(), dJ.value(100)), kI = gA.gB(sR * dJ.random(), dJ.value(100)), qw = 40; 1 <= qw; qw--)
				for (oT = sR - qw; 0 <= oT; oT -= 40)
					for (aNs = (oT + kI) % sR, ak = 40; 1 <= ak; ak--)
						for (r9 = aNt - ak; 0 <= r9; r9 -= 40)
							if (aNr = (r9 + kH) % aNt, aOW()) return 1;
			return
		}()
	}

	function aOW() {
		for (var cT, aOY, gap = gA.gB(aNu - aNx, 2), ba = aNw + aNs * aNu + gap, bZ = aNv + aNr * aNu + gap, aOX = ba + aNx - 1; ba <= aOX; aOX--)
			for (aOY = bZ + aNx - 1; bZ <= aOY; aOY--)
				if (cT = bE.s9(aOY, aOX), !bE.pY(cT) || bE.pf(cT)) return;
		return 1
	}

	function aO5(r9, oT) {
		aO0(), aOZ(r9 - 2, oT - 2)
	}

	function aO0() {
		cV.dX[aNy] = 0, cV.cW[aNy] = cV.cj[aNy] = 0, cV.ca[aNy] = [], cV.ck[aNy] = [], cV.cl[aNy] = [], cV.cm[aNy] = [], cV.dY[aNy] = cV.da[aNy] = cV.dZ[aNy] = cV.db[aNy] = 0
	}

	function aOZ(r9, oT) {
		var cT, y, aOa, aOb;
		for (cV.dX[aNy] = 1, cV.dY[aNy] = r9 + 10, cV.da[aNy] = oT + 10, cV.db[aNy] = cV.dZ[aNy] = 0, aOa = r9; aOa < r9 + 4; aOa++)
			for (aOb = oT; aOb < oT + 4; aOb++)(r9 < aOa && aOa < r9 + 3 || oT < aOb && aOb < oT + 3) && (cT = bE.s9(aOa, aOb), bE.pY(cT)) && (cV.dY[aNy] = Math.min(aOa, cV.dY[aNy]), cV.dZ[aNy] = Math.max(aOa, cV.dZ[aNy]), cV.da[aNy] = Math.min(aOb,
				cV.da[aNy]), cV.db[aNy] = Math.max(aOb, cV.db[aNy]), aNz[cV.cW[aNy]] = cT, cV.cW[aNy]++, bE.pX(cT, aNy));
		for (cV.cj[aNy] = cV.cW[aNy], y = cV.cW[aNy] - 1; 0 <= y; y--) bE.bt(aNz[y], aNy) ? (bE.my(aNz[y], aNy), cV.ck[aNy].push(aNz[y])) : bE.ky(aNz[y]) ? (bE.my(aNz[y], aNy), cV.cl[aNy].push(aNz[y])) : bE.sA(aNz[y]) && (bE.my(aNz[y], aNy), cV.cm[
			aNy].push(aNz[y]))
	}
	this.f = function() {
		if (aNz = new Array(12), aNx = 6, aNu = 10, aNt = gA.gB(bR.bS, aNu), sR = gA.gB(bR.bU, aNu), aNv = gA.gB(bR.bS - aNu * aNt, 2), aNw = gA.gB(bR.bU - aNu * sR, 2), d2.gQ)
			for (var y = 0; y < d2.g6; y++) aNy = y, aO0(), cV.dX[aNy] = 1;
		(0 === d2.data.spawningType ? aO1 : 1 === d2.data.spawningType ? (aO1(), function() {
			var i7 = d2.i4;
			d2.aJ3 || i7++;
			if (!(i7 < 3)) {
				for (var data = d2.data, hp = (d2.gQ ? d2.g6 : 0) + data.teamPlayerCount[0], re = d2.aO6, aO7 = new Uint32Array(i7), aO8 = new Uint32Array(i7), aO9 = new Uint16Array(i7), aOA = new Uint16Array(i7), dI = aL.dI, dY = cV.dY,
						da = cV.da, dZ = cV.dZ, db = cV.db, aOB = bK.aOB, aOC = bK.aOC, y = hp; y < re; y++) aOB[y] = dY[y] + dZ[y] >> 1, aOC[y] = da[y] + db[y] >> 1;
				for (y = hp; y < re; y++) {
					var id = dI[y];
					aO7[id] += aOB[y], aO8[id] += aOC[y]
				}
				var hQ = aL.hQ;
				for (y = 1; y < i7; y++) {
					var aj = Math.max(data.teamPlayerCount[hQ[y]], 1);
					aO9[y] = gA.gB(aO7[y], aj), aOA[y] = gA.gB(aO8[y], aj)
				}
				var hT = aL.hT,
					hU = aL.hU,
					hV = aL.hV,
					a3N = bK.a3N;
				for (y = 0; y < 512; y++) a3N[y] = y;
				for (var jC = 0; jC < 2 + (4 <= i7); jC++)
					for (y = hp; y < re; y++) {
						for (var ub = y, aOD = a3N[ub], aOE = 1, hl = gA.a4A(aOB[aOD] - aO9[1], aOC[aOD] - aOA[1]), qw = 2; qw < i7; qw++) {
							var sp = gA.a4A(aOB[aOD] - aO9[qw], aOC[aOD] - aOA[qw]);
							sp < hl && (hl = sp, aOE = qw)
						}
						var aOF = dI[ub];
						if (aOE !== aOF) {
							if (2 === jC && 4 <= i7) {
								var aOG = Math.max((aOE + 1) % i7, 1),
									aOH = gA.a4A(aOB[aOD] - aO9[aOG], aOC[aOD] - aOA[aOG]);
								for (qw = 1; qw < i7; qw++) sp = gA.a4A(aOB[aOD] - aO9[qw], aOC[aOD] - aOA[qw]), hl < sp && sp < aOH && (aOH = sp, aOG = qw);
								aOG !== aOF && gA.a4A(aO9[aOF] - aO9[aOG], aOA[aOF] - aOA[aOG]) < gA.a4A(aO9[aOF] - aO9[aOE], aOA[aOF] - aOA[aOE]) && (aOE = aOG)
							}
							var aOI = hQ[aOE],
								aOJ = hU[aOI] + (d2.gQ ? 0 : hV[aOI]),
								a5u = hT[aOJ],
								aOK = a3N[a5u],
								aOL = hU[aOI + 1];
							hl = gA.a4A(aOB[aOK] - aO9[aOF], aOC[aOK] - aOA[aOF]);
							for (var a7 = aOJ + 1; a7 < aOL; a7++) {
								var aOM = hT[a7],
									aON = a3N[aOM];
								(sp = gA.a4A(aOB[aON] - aO9[aOF], aOC[aON] - aOA[aOF])) < hl && (hl = sp, a5u = aOM)
							}
							a5u < hp || re <= a5u || (aOK = a3N[a5u], aO7[aOF] += aOB[aOK] - aOB[aOD], aO8[aOF] += aOC[aOK] - aOC[aOD], aO7[aOE] += aOB[aOD] - aOB[aOK], aO8[aOE] += aOC[aOD] - aOC[aOK], aj = data.teamPlayerCount[hQ[aOF]],
								aO9[aOF] = gA.gB(aO7[aOF], aj), aOA[aOF] = gA.gB(aO8[aOF], aj), aj = data.teamPlayerCount[aOI], aO9[aOE] = gA.gB(aO7[aOE], aj), aOA[aOE] = gA.gB(aO8[aOE], aj), a3N[ub] = aOK, a3N[a5u] = aOD)
						}
					}! function() {
						for (var a3N = bK.a3N, dY = cV.dY, da = cV.da, dZ = cV.dZ, db = cV.db, cW = cV.cW, cj = cV.cj, ck = cV.ck, cl = cV.cl, cm = cV.cm, y = 0; y < 512; y++) {
							var aOP = a3N[y];
							if (aOP !== y) {
								aOQ(dY, y, aOP), aOQ(da, y, aOP), aOQ(dZ, y, aOP), aOQ(db, y, aOP), aOQ(cW, y, aOP), aOQ(cj, y, aOP), aOQ(ck, y, aOP), aOQ(cl, y, aOP), aOQ(cm, y, aOP), aOR(y), aOR(aOP), a3N[y] = y;
								for (var ae = aOP, kD = a3N[ae]; kD !== y;) kD = a3N[ae = kD];
								a3N[ae] = aOP
							}
						}
					}()
			}
		}) : function() {
			var hq = d2.hq;
			for (aNy = hq; aNy < d2.hR; aNy++) aO0();
			for (aNy = d2.gQ ? d2.g6 : 0; aNy < hq; aNy++)
				if (! function() {
						var spawningData = d2.data.spawningData,
							r9 = spawningData[2 * aNy] + 1,
							spawningData = spawningData[2 * aNy + 1] + 1;
						if (3 < r9 && r9 < bR.bS - 5 && 3 < spawningData && spawningData < bR.bU - 5 && bE.pY(bE.s9(r9, spawningData)) && function(r9, oT) {
								var cT, aOY, aOX;
								for (aOX = oT; oT - 6 < aOX; aOX--)
									for (aOY = r9; r9 - 6 < aOY; aOY--)
										if (cT = bE.s9(aOY, aOX), bE.pf(cT)) return;
								return 1
							}(r9 + 3, spawningData + 3)) return aO5(r9 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aO4()) {
						for (var ak = d2.aO6 = aNy; ak < hq; ak++) aNy = ak, aO0();
						return
					}
					var r9 = aNv + aNr * aNu + gA.gB(aNu, 2),
						oT = aNw + aNs * aNu + gA.gB(aNu, 2);
					aO5(r9, oT)
				}
		})(), aP.dV[7] = cV.cW[d2.ed]
	}, this.aAN = function(pc, aOc, aOd) {
		var y, r9, oT, cT, aNr, aNs;
		for (aNy = pc, y = 0; y < 20; y++)
			for (r9 = aOc + y; aOc - y <= r9; r9--)
				for (oT = aOd + y; aOd - y <= oT; oT--)
					if ((r9 === aOc + y || r9 === aOc - y || oT === aOd + y || oT === aOd - y) && 3 < r9 && r9 < bR.bS - 5 && 3 < oT && oT < bR.bU - 5 && bE.pY(bE.s9(r9, oT)) && function(r9, oT) {
							var cT, aOY, aOX;
							for (aOX = oT; oT - 6 < aOX; aOX--)
								for (aOY = r9; r9 - 6 < aOY; aOY--)
									if (cT = bE.s9(aOY, aOX), bE.pf(cT) && !bE.pZ(aNy, cT)) return;
							return 1
						}(r9 + 3, oT + 3)) {
						if (0 < cV.cW[aNy]) {
							for (aNs = aNr = cT = void 0, aNr = cV.dZ[aNy]; aNr >= cV.dY[aNy]; aNr--)
								for (aNs = cV.db[aNy]; aNs >= cV.da[aNy]; aNs--) cT = 4 * (aNs * bR.bS + aNr), bE.de(aNy, cT) && (bE.df(cT), cV.cW[aNy]--);
							aO0()
						}
						return aOZ(r9 - 1, oT - 1), !0
					} return !1
	}, this.aAO = function(pc) {
		aNy = pc, aO4() ? aO5(aNv + aNr * aNu + gA.gB(aNu, 2), aNw + aNs * aNu + gA.gB(aNu, 2)) : aO0()
	}
}

function a6r() {
	var aNr, aNs, aNq = document.createElement("div"),
		a6c = 0,
		aOg = 0;
	this.show = function(bn, bo, du, a6q, aOh) {
		if (a6c) {
			if (!a6q) return;
			this.a5()
		}
		bn === bo && -1 === bn ? (bn = aNr, bo = aNs) : (aNr = bn, aNs = bo), aOh || (aOg = a6q), a6c = 1;
		aOh = gG.gF / gG.ld, aNq.style.whiteSpace = "pre", aNq.textContent = du, g.h.fo(aNq, 5), aNq.style.font = g.h.fn(0, g.h.l(.015)), aNq.style.padding = "0.3em 0.6em", aNq.style.left = bn + "px", aNq.style.top = "0px", document.body
			.appendChild(aNq), a6q = bn + aNq.offsetWidth - aOh;
		0 < a6q && (aNq.style.left = (du = bn - a6q) + "px", du < 5) && (aNq.style.whiteSpace = "pre-wrap"), aNq.style.top = bo - aNq.offsetHeight + aOg * j.lY + "px"
	}, this.a5 = function(a6s) {
		if (a6c) {
			if (a6s && aOg) return 0;
			a6c = 0, document.body.removeChild(aNq)
		}
		return 1
	}, aNq.style.position = "absolute", aNq.style.backgroundColor = dR.fb, aNq.style.color = dR.fa, aNq.style.pointerEvents = "none", aNq.style.zIndex = "5", aNq.style.maxWidth = "100%"
}

function aBq() {
	var aOk = new Array(1),
		aOl = new Array(1),
		aOm = 20,
		wK = 0,
		aOn = !1;

	function aOp() {
		aOm++, xD.play()
	}
	this.f = function() {
		if (!window.document.documentMode) {
			for (var y = 0; 0 <= y; y--) ! function(y, src) {
				aOl[y] = 0, aOk[y] = document.createElement("audio"), aOk[y].src = src, aOk[y].setAttribute("preload", "auto"), aOk[y].setAttribute("controls", "none"), aOk[y].style.display = "none", aOk[y].onpause = function() {
					aOl[y] = 1
				}, aOk[y].oncanplaythrough = function() {
					aOl[y] = 0 === aOl[y] ? 1 : aOl[y]
				}, document.body.appendChild(aOk[y])
			}(y,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
			aOn = !0
		}
	}, this.fp = function() {
		if (aOn) {
			aOn = !1;
			for (var y = 0; 0 <= y; y--) aOk[y].onpause = null, aOk[y].oncanplaythrough = null, document.body.removeChild(aOk[y]), aOk[y] = null
		}
	}, this.play = function() {
		if (aOn) {
			var cU = performance.now();
			if (wK + 66 < cU)
				for (var y = 0; 0 <= y; y--)
					if (1 === aOl[y]) return wK = cU, aOl[y] = 2, void aOk[y].play();
			0 < aOm && (aOm--, setTimeout(aOp, 66))
		}
	}
}

function aBD() {
	this.i3 = new Array(d2.hR), this.dQ = new Array(d2.hR), this.oV = new Uint8Array(d2.hR), this.dX = new Uint8Array(d2.hR), this.dY = new Uint16Array(d2.hR), this.da = new Uint16Array(d2.hR), this.dZ = new Uint16Array(d2.hR), this.db =
		new Uint16Array(d2.hR), this.cW = new Uint32Array(d2.hR), this.cj = new Uint32Array(d2.hR), this.cp = new Uint32Array(d2.hR), this.ca = null, this.ck = null, this.cl = null, this.cm = null, this.a8h = new Uint16Array(d2.hR), this.a8i =
		new Uint16Array(d2.hR), this.a8j = new Uint16Array(d2.hR), this.cy = new Uint16Array(d2.hR), this.a8k = new Uint8Array(d2.hR), this.cq = new Uint16Array(d2.hR), this.f = function() {
			this.i3.fill(""), this.dQ.fill(""), this.oV.fill(0), this.dX.fill(0), this.dY.fill(0), this.da.fill(0), this.dZ.fill(0), this.db.fill(0), this.cW.fill(0), this.cj.fill(0), this.cp.fill(0), this.ca = new Array(d2.hR), this.ck = new Array(
				d2.hR), this.cl = new Array(d2.hR), this.cm = new Array(d2.hR), this.a8h.fill(0), this.a8i.fill(0), this.a8j.fill(0), this.cy.fill(0), this.a8k.fill(0), this.cq.fill(0)
		}
}

function tN(dy) {
	var n, tf, to;
	this.show = function() {
		n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize(), tf.resize()
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(414), [new q("⬅️ " + L(4), function() {
		t.a2x(10)
	})]), tf = new ti(n.x, ((to = []).push(function() {
		var aM8, jk = new tr,
			aNY = new tu(aV.aW.data[132], 1, function() {
				aM8.button.click()
			}),
			aNZ = new tu(aV.aW.data[131], 1, function() {
				aNY.dx.focus()
			});
		jk.ts(L(409)), jk.tt(aNZ), aNZ.dx.style.marginBottom = "0.8em", jk.ts(L(410)), jk.tt(aNY);
		return aM8 = new q(L(408), function() {
			a3 = Math.floor(aNZ.dx.value), a4 = Math.floor(aNY.dx.value);
			var a4, a3 = {
				aOt: Math.min(a3, a4),
				aDZ: Math.max(a3, a4)
			};
			t.z(8, t.tg(10).tb, new a1(21, {
				a2: dy.a2,
				a3: a3.aOt,
				a4: a3.aDZ
			}))
		}, 0, 0, 1), jk.tt(new tw([aM8.button])), jk
	}()), to.push(function() {
		var aM8, jk = new tr,
			aNY = new tu(aV.aW.data[134], 1, function() {
				aM8.button.click()
			}),
			aNZ = new tu(aV.aW.data[133], 0, function() {
				aNY.dx.focus()
			});
		return jk.ts(1 === dy.a2 ? L(415) : L(416)), jk.tt(aNZ), aNZ.dx.style.marginBottom = "0.8em", jk.ts(L(417)), jk.tt(aNY), aM8 = new q(L(408), function() {
			var xT = aNZ.dx.value.slice(0, 20),
				xU = Math.abs(Math.floor(aNY.dx.value));
			t.z(8, t.tg(10).tb, new a1(22, {
				a2: dy.a2,
				xT: xT,
				xU: xU
			}))
		}, 0, 0, 1), jk.tt(new tw([aM8.button])), jk
	}()), to.push(function() {
		var aM8, jk = new tr,
			aNY = new tu(aV.aW.data[152], 1, function() {
				aM8.button.click()
			}),
			aNZ = new tu(aV.aW.data[151], 0, function() {
				aNY.dx.focus()
			});
		return jk.ts(L(418)), jk.tt(aNZ), aNZ.dx.style.marginBottom = "0.8em", jk.ts(L(417)), jk.tt(aNY), aM8 = new q(L(408), function() {
			var xT = aNZ.dx.value.slice(0, 5),
				xU = Math.abs(Math.floor(aNY.dx.value));
			t.z(8, t.tg(10).tb, new a1(28, {
				a2: dy.a2,
				xT: xT,
				xU: xU
			}))
		}, 0, 0, 1), jk.tt(new tw([aM8.button])), jk
	}()), to))
}

function aOu(aOv, p5) {
	var aP1, self, aOw = document.createElement("div"),
		aOx = document.createElement("div"),
		fX = document.createElement("div"),
		aOy = null,
		aP2 = (this.zS = new tu({
			value: "",
			cF: -1
		}, 0, aOz, function(dx) {
			dx.target.value = g.gZ.aNE(dx.target.value), aOy.pG.textContent = 127 - dx.target.value.length
		}), 0),
		a2w = 1,
		aP3 = 0,
		aP4 = 1048575;

	function aOz() {
		aOv(), aOy.pG.textContent = 127
	}

	function a33(p8, fi) {
		fi && (fi.aP7 = 1, p8.appendChild(fj.fk.transform(fi)))
	}

	function a2z(gS) {
		a2w ? aOw.scrollTop = aOw.scrollHeight : gS && (aOw.scrollTop = aP3)
	}
	this.aHy = function(aP6) {
			aP4 = 1048575, aOx.textContent = "", aP6 || this.iM()
		}, this.iM = function() {
			var aE1 = fj.ax.pA[0],
				aE1 = fj.ax.aCh[aE1],
				oj = aE1.oj,
				aY = oj.length,
				hp = 1048575 === aP4 ? 0 : aY - (aE1.ok - aP4 + 1048575) % 1048575;
			if (aP4 = aE1.ok, !(aY <= (hp = Math.max(hp, 0)))) {
				for (var p8 = document.createDocumentFragment(), y = hp; y < aY; y++) a33(p8, fj.bH.fl(oj[y], fj.bH.fm(oj[y])));
				aOx.appendChild(p8), a2z()
			}
		}, this.xC = function(a9H) {
			var p8 = document.createDocumentFragment();
			a33(p8, a9H), aOx.appendChild(p8), a2z()
		}, this.show = function(b) {
			b.appendChild(aOw), b.appendChild(fX), this.resize(b)
		}, this.a5 = function(b) {
			b.removeChild(aOw), b.removeChild(fX)
		}, this.resize = function(b) {
			aP2 = b ? b.offsetHeight : aP2;
			var b = g.h.l(.04, .75),
				aP9 = Math.max(b, aP2 - b),
				aPA = gG.gF / gG.ld,
				aPB = .7 * aPA,
				aP9 = (fX.style.top = g.h.i(aP2 - b), fX.style.height = g.h.i(b), aOw.style.top = g.h.i(aP2 - b - aP9), aOw.style.height = g.h.i(aP9), g.h.fo(aOw, 2), this.zS.dx.style.width = g.h.i(aPB), this.zS.dx.style.fontSize = aP1.button.style
					.fontSize = g.h.i(.5 * b), g.h.fo(this.zS.dx, 6), aP1.button.style.left = g.h.i(aPB), aP1.button.style.width = g.h.i(aPA - aPB), .385 * b);
			eH.eV.fT() && (aP9 *= .8 - .12 * (gG.gF > gG.ae)), aOx.style.marginLeft = aOx.style.marginRight = g.h.i(.5 * aP9), aOx.style.fontSize = g.h.i(aP9), a2z(1)
		}, (self = this).zS.dx.aP5 = 127, aOw.style.position = "absolute", aOw.style.top = "0", aOw.style.left = "0", aOw.style.width = "100%", aOw.style.overflowX = "hidden", aOw.style.overflowY = "auto", aOw.style.font = "inherit", aOw.style
		.backgroundColor = dR.sg, aOw.addEventListener("scroll", function() {
			aP3 = aOw.scrollTop, a2w = aP3 < aOw.scrollHeight - aOw.clientHeight - 2 ? 0 : 1
		}), aOx.style.font = "inherit", fX.style.position = "absolute", fX.style.left = "0", fX.style.width = "100%", self.zS.dx.setAttribute("placeholder", L(419)), self.zS.dx.style.position = "absolute", self.zS.dx.style.top = "0", self.zS.dx.style
		.left = "0", self.zS.dx.style.height = "100%", self.zS.dx.style.backgroundColor = dR.a7i, self.zS.dx.style.textAlign = "center", (aP1 = new q(L(330), aOz)).button.top = "0", aP1.button.style.position = "absolute", aP1.button.style.height =
		"100%", aP1.f5(dR.a8R), aOy = new a1b("127", aP1.button, 1, 1), aOw.appendChild(aOx), fX.appendChild(self.zS.dx), fX.appendChild(aP1.button)
}

function v(title, s, aPD) {
	var yY = document.createElement("div"),
		aPE = document.createElement("div"),
		yb = document.createElement("div"),
		aPF = document.createElement("div"),
		aPG = document.createElement("div");
	this.x = yb, this.a8 = s, this.show = function() {
			!1 !== aPD ? document.body.appendChild(yY) : (document.body.appendChild(aPE), document.body.appendChild(aPF))
		}, this.a5 = function() {
			!1 !== aPD ? document.body.removeChild(yY) : (document.body.removeChild(aPE), document.body.removeChild(aPF))
		}, this.aPK = function() {
			var aP9 = g.h.l(.1),
				aP8 = g.h.l(.08 + .04 * (gG.zc < 1));
			return {
				aP9: aP9,
				aP8: aP8,
				aPL: gG.ae / gG.ld - aP9 - aP8
			}
		}, this.resize = function(aPM) {
			var aY = s.length,
				a8y = this.aPK(),
				aP9 = a8y.aP9,
				aP8 = a8y.aP8;
			for (aPE.style.height = g.h.i(aP9), g.h.fo(aPE, 2), aPF.style.top = g.h.i(gG.ae / gG.ld - aP8), aPF.style.height = g.h.i(aP8), g.h.fo(aPF, 8), yb.style.top = g.h.i(aP9), yb.style.height = yb.style.maxHeight = g.h.i(a8y.aPL), aPE.style
				.font = g.h.fn(0, g.h.l(.02, .3)), aPF.style.font = g.h.fn(0, g.h.l(.02, .7)), yb.style.font = g.h.fn(0, g.h.l(.02, .7)), y = 1; y < aY; y++) g.h.fo(s[y].button, 4);
			for (var aPN = 0, y = 0; y < aY; y++) aPN += s[y].button.offsetWidth;
			if (aPM && aPN < aPF.offsetWidth)
				for (y = 0; y < aY; y++) s[y].button.style.width = (100 * s[y].button.offsetWidth / aPN).toFixed(2) + "%";
			else
				for (y = 0; y < aY; y++) s[y].button.style.width = "auto";
			aPF.lq && (aPF.scrollLeft = aPF.lq), aPM || this.resize(!0)
		}, this.h8 = function() {
			var a8y = this.aPK(),
				a7 = gG.ld;
			h9.fillStyle = dR.fb, h9.fillRect(0, a7 * a8y.aP9, gG.gF, a7 * a8y.aPL)
		}, yY.style.position = "absolute", yY.style.top = "0", yY.style.left = "0", yY.style.width = "100%", yY.style.height = "100%", aPE.style.position = "absolute", aPE.style.top = "0", aPE.style.left = "0", aPE.style.width = "100%", aPE.style
		.display = "flex", aPE.style.backgroundColor = dR.fb, aPF.style.position = "absolute", aPF.style.left = "0", aPF.style.width = "100%", g.h.lo(aPF), aPG.style.height = aPG.style.maxHeight = "100%", yb.style.position = "absolute", yb.style
		.width = "100%", yb.style.backgroundColor = dR.fb,
		function() {
			for (var y = 0; y < s.length; y++) s[y].button.style.height = "100%", s[y].button.style.padding = "0.0em 0.9em"
		}();
	for (var y = 0; y < s.length; y++) aPG.appendChild(s[y].button);
	aPE.appendChild(function() {
		var aPJ = document.createElement("h1");
		return aPJ.textContent = title, aPJ.style.margin = "auto", aPJ.style.fontSize = 20 < title.length && gG.ae > gG.gF ? "1.8em" : "2.3em", aPJ.style.webkitTextStroke = "0.02em brown", aPJ.style.fontFamily = "Arial Black, Trebuchet MS",
			aPJ
	}()), aPF.appendChild(aPG), !1 !== aPD && (yY.appendChild(yb), yY.appendChild(aPE), yY.appendChild(aPF))
}

function aBW() {
	this.f = function() {
		this.aZ = [], this.cF = 0
	}, this.lQ = function() {
		return new Uint8Array(this.aZ)
	}, this.lC = function(aPO, value) {
		for (var aZ = this.aZ, re = this.cF + aPO - 1, aPP = 1 + (re >> 3); aZ.length < aPP;) aZ.push(0);
		for (var y = this.cF; y <= re; y++) aZ[y >> 3] |= (value >> re - y & 1) << 7 - (7 & y);
		this.cF += aPO
	}, this.aBv = function(aZ, cI, aAD) {
		var aPQ = g.ab.aPR(aZ);
		this.lC(cI, aPQ);
		for (var y = 0; y < aPQ; y++) this.lC(aAD, aZ[y])
	}, this.aG6 = function(aZ, cI, aAG) {
		var aPQ = g.ab.aPR(aZ);
		this.lC(cI, aPQ);
		for (var y = 0; y < aPQ; y++) this.aG4(aZ[y], aAG)
	}, this.aG4 = function(du, cI) {
		var aY = du.length;
		this.lC(cI, aY);
		for (var y = 0; y < aY; y++) this.lC(16, du.charCodeAt(y))
	}, this.aG5 = function(rL) {
		var aPS = (rL = rL.toDataURL()).split(",");
		if (aPS.length < 2) console.log("error 266");
		else {
			rL = g.gZ.aAJ(rL = aPS[aPS.length - 1], "/", "_"), rL = g.gZ.aAJ(rL, "\\+", "-");
			var rL = g.gZ.aAJ(rL, "=", ""),
				aKS = nu.tk.aPT(rL),
				aY = aKS.length;
			this.lC(30, aY);
			for (var y = 0; y < aY; y++) this.lC(6, aKS[y])
		}
	}
}

function aEC() {
	var n, aPU, aPV, aPW, aPX, aPY, colors = [0, 0, 0],
		aPZ = -1;

	function aPd(y) {
		var aPe = aPU.bo + y * (j.gap + aPY);
		h9.fillStyle = "rgb(" + (0 === y ? 150 : 2 === y ? 30 : 0) + "," + (1 === y ? 130 : 2 === y ? 30 : 0) + "," + (2 === y ? 220 : 0) + ")", h9.fillRect(aPW, aPe, colors[y] * aPX, aPY), h9.strokeStyle = dR.fa, h9.strokeRect(aPW, aPe, aPX, aPY),
			h9.fillStyle = dR.fa, h9.font = g.h.fn(0, .32 * aPY), g.h.textBaseline(h9, 1), g.h.textAlign(h9, 0), h9.fillText(L(0 === y ? 422 : 1 === y ? 423 : 424) + aPa(y), aPW + j.gap, aPe + .53 * aPY)
	}

	function aPa(y, aPf) {
		return aPf = aPf || 256, gA.yT(Math.floor(aPf * colors[y]), 0, aPf - 1)
	}

	function aFK(k9, kB) {
		return !(k9 < aPW || kB < aPU.bo || k9 > aPU.bn + aPU.gF || kB > aPU.bo + aPU.ae)
	}
	this.show = function() {
		var aU = aV.aW.data[121].value;
		colors[0] = (aU >> 12) / 63, colors[1] = (aU >> 6 & 63) / 63, colors[2] = (63 & aU) / 63, n.show(), this.resize()
	}, this.a5 = function() {
		aV.ar.at(121, (aPa(0, 64) << 12) + (aPa(1, 64) << 6) + aPa(2, 64)), n.a5()
	}, this.resize = function() {
		n.resize(), aPU.resize();
		var a7 = gG.ld,
			a8y = n.aPK(),
			aPb = (aPU.bo = Math.max(aPU.bo, a7 * a8y.aP9 + j.gap), a7 * a8y.aPL - 2 * j.gap);
		aPU.ae = Math.min(aPU.ae, aPb), aPU.gF = 2 * aPU.ae, aPU.bo = a7 * a8y.aP9 + .5 * (a7 * a8y.aPL - aPU.ae), aPU.bn = .5 * (gG.gF - aPU.gF), aPV = .25 * aPU.gF, aPW = aPU.bn + aPV + j.gap, aPX = aPU.gF - aPV - j.gap, aPY = (aPU.ae - 2 * j
			.gap) / 3
	}, this.h8 = function() {
		var jC, h3, ak;
		n.h8(), h9.lineWidth = j.a27, jC = aPa(0), h3 = aPa(1), ak = aPa(2), h9.fillStyle = "rgb(" + jC + "," + h3 + "," + ak + ")", h9.fillRect(aPU.bn, aPU.bo, aPV, aPU.ae), h9.strokeStyle = dR.fa, h9.strokeRect(aPU.bn, aPU.bo, aPV, aPU.ae), h9
			.fillStyle = jC + h3 + ak < 306 && h3 < 150 ? dR.fa : dR.dS, g.h.textBaseline(h9, 1), g.h.textAlign(h9, 1), h9.font = g.h.fn(0, .1 * aPU.ae), h9.rotate(-Math.PI / 2), h9.fillText(L(421), -aPU.bo - .5 * aPU.ae, aPU.bn + .5 * aPV), h9
			.setTransform(1, 0, 0, 1, 0, 0), aPd(0), aPd(1), aPd(2)
	}, this.iS = function(k9, kB) {
		aFK(k9, kB) && (aPZ = gA.yT(Math.floor((kB - aPU.bo) / (aPY + .75 * j.gap)), 0, 2), colors[aPZ] = gA.yT((k9 - aPW) / aPX, 0, 1), e8.e9 = !0)
	}, this.qf = function(k9) {
		-1 !== aPZ && (colors[aPZ] = gA.yT((k9 - aPW) / aPX, 0, 1), e8.e9 = !0)
	}, this.aEN = function(k9, kB, deltaY) {
		aFK(k9, kB) && (k9 = gA.yT(Math.floor((kB - aPU.bo) / (aPY + .75 * j.gap)), 0, 2), colors[k9] = gA.yT(colors[k9] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), e8.e9 = !0)
	}, this.aEM = function() {
		0 <= aPZ && (aPZ = -1, e8.e9 = !0)
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	}, n = new v(L(420), [new q("⬅️ " + L(4), function() {
		t.ax.ay()
	})], !1), aPU = new iG([.5, .25], [.5, .5], 1)
}

function L(value, aPg, n2) {
	var du = "number" == typeof value ? aX.aE[value] : value;
	if (n2 && aX.aT() && (du = n2), aPg)
		for (var aY = aPg.length, y = 0; y < aY; y++)
			for (var qw = 0; qw < 3; qw++) du = du.replace("{" + (10 * qw + y) + "}", aPg[y]);
	return du
}

function a8f() {
	this.nv = function(size) {
		for (var cJ = cK, aZ = [], y = 0; y < size; y++) aZ.push(String.fromCharCode(cJ.cL(16)));
		return aZ.join("")
	}, this.aPh = function(du) {
		return 20 < (du = du.trim()).length ? du.substring(0, 20) : du
	}
}

function w(vS, b) {
	var d;
	this.resize = function() {
		for (var y = 0; y < vS.length; y++) g.h.fo(vS[y].button);
		d.style.gap = d.style.padding = g.h.i(j.k)
	}, (d = document.createElement("div")).style.display = "grid", d.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", d.style.overflowY = "auto", d.style.gridAutoRows = "5.3em", d.style.maxHeight = "100%";
	for (var y = 0; y < vS.length; y++) vS[y].a9z(1), d.appendChild(vS[y].button);
	b.appendChild(d)
}

function aGQ() {
	this.xR = function(a2, a3, a4) {
		lA.kv(75), lA.lC(1, 0), lA.lC(6, 21), lA.lC(6, a2), lA.lC(1, +(a3 < 0)), lA.lC(1, +(a4 < 0)), lA.lC(30, Math.abs(a3)), lA.lC(30, Math.abs(a4)), an.ax.send(0, lA.lK)
	}, this.xS = function(a2, xT, xU) {
		lA.kv(18 + 16 * xT.length + 30), lA.lC(1, 0), lA.lC(6, 22), lA.lC(6, a2), an.ao.lE(xT), lA.lC(30, xU), an.ax.send(0, lA.lK)
	}, this.xZ = function(a2, xT, xU) {
		lA.kv(73), lA.lC(1, 0), lA.lC(6, 28), lA.lC(6, a2), nu.tk.a8a(xT, 5), lA.lC(30, xU), an.ax.send(0, lA.lK)
	}, this.xV = function(xW, i0) {
		for (var aY = i0.length, aGI = 0, y = 0; y < aY; y++) aGI += i0[y].length;
		for (lA.kv(21 + 3 * aY + 16 * aGI), lA.lC(1, 0), lA.lC(6, 23), lA.lC(3, xW), lA.lC(4, aY), lA.lC(7, aGI), y = 0; y < aY; y++) lA.lC(3, i0[y].length), lO.m8.m9(i0[y]);
		an.ax.send(0, lA.lK)
	}, this.xX = function(xW, a3, a4) {
		lA.kv(52), lA.lC(1, 0), lA.lC(6, 24), lA.lC(3, xW), lA.lC(1, +(a3 < 0)), lA.lC(1, +(a4 < 0)), lA.lC(20, Math.abs(a3)), lA.lC(20, Math.abs(a4)), an.ax.send(0, lA.lK)
	}
}

function aGW() {
	this.aPi = function() {
		aV.ax.aIb(), aV.ar.at(105, lO.tk.xf(lO.tk.xg(5))), aV.ar.at(106, lO.tk.xf(lO.tk.xg(8))), aV.ar.at(109, cK.cL(30)), aV.ar.at(108, aV.aW.data[109].value), aV.ar.at(111, aV.aW.data[109].value + 1), aV.ar.at(107, 0), aV.ar.at(110, "")
	}, this.aPj = function() {
		var data;
		cK.size < lA.aAB(29) ? an.ax.nd(0, 3254) : ((data = {
			iz: cK.cL(30),
			n6: cK.cL(16),
			n7: cK.cL(30),
			n8: cK.cL(30),
			n9: cK.cL(30),
			nA: cK.aA9(32),
			username: nu.lP.cH(5),
			nB: nu.lP.cH(3),
			nC: nu.lP.cH(3),
			nD: cK.aA9(32),
			nE: cK.aA9(32),
			nF: cK.cL(30),
			nG: cK.aA9(32),
			nH: cK.aA9(32),
			nI: cK.aA9(32),
			nJ: cK.aA9(32),
			aMD: cK.aA9(32),
			aME: cK.aA9(30),
			aMO: cK.aA9(32),
			aMP: nu.lP.cH(3),
			aMI: cK.aA9(2),
			aMJ: cK.aA9(10),
			aMG: nu.lP.cH(8),
			aMK: cK.aA9(5),
			aM3: cK.cL(30),
			aMC: cK.cL(30),
			aLa: cK.aA9(32),
			aMQ: cK.cL(1),
			aMR: cK.cL(1)
		}).aMQ && (data.aMS = cK.aA9(32), data.aMT = cK.cL(30), data.aMU = cK.cL(30), data.aMV = cK.cL(1)), 8 === t.a0 && (25 === t.eB().xL ? (data.aLo = !0, t.ax.xe = data, t.eB().nr(25, !1)) : (data.aLo = !1, aV.ar.at(160, +(data.aMQ &&
			data.aMV)), data.iy = aV.aW.data[105].value, t.ax.a6u = data, aV.ar.n5(data), t.eB().nr(16, !0))))
	}
}

function aKt() {
	this.iR = e8.iR, this.cF = 0, this.aCT = 0, this.aPk = 0, this.aPl = null, this.aPm = 7, this.aCu = 0, this.f = function() {
		this.aPk = 0, this.aPl = [], this.cF = 0, this.aCT = 0
	}, this.aPn = function(lK) {
		if (d2.gQ) this.h2(lK);
		else if (this.aPl.push(lK), 2 === d2.h5) {
			for (var y = 0; y < this.aPl.length; y++) ee.aPo.c8(this.aPl[y]);
			this.aPl = []
		}
	}, this.h2 = function(lK) {
		2 !== d2.h5 && (ee.aPo.c8(lK), a0z.c8(), d9.h2(this.aPk), this.aPk === d2.h7 ? (d2.aAQ.c8(), this.aPk = 0, this.cF = 0, this.aCT = 0, this.iR = e8.iR) : (this.aPk++, qg.qZ(), qg.gR(!0), sJ.aPp()))
	}, this.c8 = function() {
		gG.c8(), d2.gQ ? (e8.e9 = d9.h2(-1) || e8.e9, a15()) : (0 !== this.cF || e8.iR >= this.iR && (this.iR += e8.h1 * Math.floor(1 + (e8.iR - this.iR) / e8.h1), 2 === d2.h5 ? a0s() : this.aPq(), this.cF++, 27 < e8.iR - this.aCu)) && this
		.aPr(), a10(), e8.e9 && (e8.e9 = !1, a38()), this.aCu = e8.iR
	}, this.aPr = function() {
		e8.e9 = !0, a14(), this.cF = 0
	}, this.aPq = function() {
		var aNB, y;
		if (this.aCT !== 7 * this.aPk) a0t(), sJ.aPp();
		else {
			aNB = !1;
			loop: for (; this.aPs() && (aNB = !0, a0t(), 2 !== d2.h5) && 0 < this.aPl.length;)
				for (y = this.aPm - 2; 0 <= y; y--)
					if (a0t(), 2 === d2.h5) break loop;
			aNB ? sJ.aPp() : (a0s(), sJ.aAS())
		}
	}, this.aPs = function() {
		return 0 < this.aPl.length && (this.aPk++, ee.aPo.c8(this.aPl[0]), this.aPl.shift(), !0)
	}
}

function lx() {
	this.c8 = function() {
		var aPy;
		2 === d2.a2o ? (cD.dU(0, 59), kq.aPt(2700)) : d2.dH < 7 ? (aPy = aL.hQ[d2.a2u], aPy = aL.di[aPy], zn.a9Y(L(425, [aPy]), 2, 1, 12), cD.dP(0, L(426, [aPy]), 40, 0, dR.fa, dR.gT, -1, !1), kq.aPt(2700)) : 8 === d2.dH ? (d2.a2p ? cD.dU(d2.a2r,
			2) : cD.dU(1 - d2.ed, 3), d2.a9a.aGt(d2.a2r), kq.a9D(d2.a2r, 2700, !1, 0)) : 9 === d2.dH ? (cD.a9X(), kq.aPt(2700)) : (cD.a9P(d2.a2r), kq.a9D(d2.a2r, 2700, !1, 0))
	}
}

function aEq() {
	var gF, ae, aQ0;

	function aQC(ub, bW, aQA, aQ3, eJ) {
		bW = aQB(ub, bW + 1 + 2 * aQ3 & 3);
		! function(ub, a5u) {
			return 1 < Math.abs(ub % gF - a5u % gF) || 1 < Math.abs(aQE(ub) - aQE(a5u))
		}(ub, bW) && 0 === eJ[bW << 2] && (eJ[bW << 2] = aQA)
	}

	function aQE(cT) {
		return Math.floor((cT + .5) / gF) % ae
	}

	function aQB(cT, bW) {
		return cT + aQ0[bW]
	}
	this.cH = function(du) {
		var y, qX, aY, aQ1, cJ = cK;
		for (nu.tk.aQ4(nu.tk.aPT(du)), bR.ki.kj[bR.kk].gF = bR.bS = gF = cJ.cL(12), bR.ki.kj[bR.kk].ae = bR.bU = ae = cJ.cL(12), aQ0 = [-gF, -1, gF, 1], bR.wj = document.createElement("canvas"), bR.wj.width = bR.bS, bR.wj.height = bR.bU, bR.l0 =
			bR.wj.getContext("2d", {
				alpha: !1
			}), bR.l1 = bR.l3 = null, bR.l1 = bR.l0.getImageData(0, 0, bR.bS, bR.bU), bR.l3 = bR.l1.data, g.ab.fB(bR.l3), aY = cJ.cL(12), qX = cJ.cL(5), aQ1 = a2T(gF * ae - 1), y = 0; y < aY; y++) ! function(ag, cT, aQ2, aQ3) {
			var y, bW, cJ = cK,
				eJ = bR.l3,
				aLf = cT,
				aQ7 = cT,
				aQ8 = 0,
				aQ9 = 1 + aQ2,
				aQA = 2 - aQ2;
			for (eJ[cT << 2] = aQ9, y = 0; y < ag; y++) bW = cJ.cL(2), cT = aQB(cT, bW), eJ[cT << 2] === aQ9 ? aQ8 % 2 == 1 && aQC(aQ7, aQ8 + 2 * aQ3 + 3, aQA, aQ3, eJ) : eJ[cT << 2] = aQ9, aQC(cT, bW, aQA, aQ3, eJ), aQC(aQ7, bW, aQA, aQ3,
				eJ), aQ7 = cT, aQ8 = bW;
			aQB(cT, 0) === aLf ? (aQC(cT, 0, aQA, aQ3, eJ), aQC(aLf, 0, aQA, aQ3, eJ)) : aQB(cT, 1) === aLf && (aQC(cT, 0, aQA, aQ3, eJ), aQC(aLf, 2, aQA, aQ3, eJ));
			0 === ag && (aQC(aLf, 0, aQA, aQ3, eJ), aQC(aLf, 2, aQA, aQ3, eJ))
		}(cJ.cL(qX), cJ.cL(aQ1), 1 === cJ.cL(1), 1 === cJ.cL(1));
		var bn, bo, fJ, aQF, aQG, aQH, eJ = bR.l3,
			aQI = !0,
			kl = bR.ki.kj[bR.kk].kl,
			km = bR.ki.kj[bR.kk].km;
		for (bo = 0; bo < ae; bo++)
			for (aQF = !0, aQG = aQI, bn = aQH = 0; bn < gF; bn++) fJ = 4 * bo * gF + 4 * bn, aQH <= bn && 0 < eJ[fJ] && (aQG = 2 === eJ[fJ], aQF) && (aQF = !1, aQG !== aQI) ? (aQI = aQG, aQH = bn + 1, bn = -1) : (aQG ? (eJ[fJ] = km[0], eJ[1 +
				fJ] = km[1], eJ[2 + fJ] = km[2]) : (eJ[fJ] = kl[0], eJ[1 + fJ] = kl[1], eJ[2 + fJ] = kl[2]), eJ[3 + fJ] = 255);
		bR.l0.putImageData(bR.l1, 0, 0), bR.wi = !0, bR.kp.f(), e8.e9 = !0
	}
}

function aFB() {
	var aQJ = [],
		yc = [],
		aQK = [];

	function aQM(fi) {
		for (var a9H = fi.a9H, aQL = [];;) {
			var a7 = function aQP(a9H, position) {
				position = a9H.indexOf("@", position);
				if (position < 0) return -1;
				var du = a9H.substring(position + 1, position + 6);
				if (5 !== du.length) return aQP(a9H, position + 1);
				if (g.gZ.startsWith(du, "room")) return aQP(a9H, position + 1);
				var aQa = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aQa.test(du)) return aQP(a9H, position + 1);
				aQa = a9H.substring(position + 6, position + 7);
				if (1 !== aQa.length) return position;
				du = new RegExp("^[ :!.]+$");
				if (!du.test(aQa)) return aQP(a9H, position + 1);
				return position
			}(a9H, 0);
			if (-1 === a7) {
				aQL.push(aQQ(a9H, fi));
				break
			}
			0 === a7 ? aQL.push(aQR(a9H.substring(1, 6), fi, a7)) : (aQL.push(aQQ(a9H.substring(0, a7), fi)), aQL.push(aQR(a9H.substring(a7 + 1, a7 + 6), fi, a7))), a9H = a9H.substring(a7 + 6)
		}
		return aQL
	}

	function aQR(du, fi, a7) {
		var aQS = function(du) {
				var iy = nu.tk.aF7(du),
					aQS = fj.pB.a6p(iy);
				if (aQS) {
					for (aQJ.push(aQS); 75 < aQJ.length;) aQJ.shift();
					return aQS
				}
				for (var aCm = fj.pB.aCm, y = aCm.length - 1; 0 <= y; y--)
					if (aQS = aCm[y], iy === aQS.iy) return aQJ.push(aQS), aQS;
				for (y = aQJ.length - 1; 0 <= y; y--)
					if (aQS = aQJ[y], iy === aQS.iy) return aQJ.push(aQS), aQS;
				return fj.pB.aDn(iy, du, 1, 999999, 999999, 0, 0, 0, 0)
			}(du),
			du = (0 === a7 && 0 === fi.x8.id && fi.aP7 && (fi.fontSize = fj.bH.aQU(aQS.pJ, aQS.a3u), fi.aQO = fj.bH.aQV(aQS.a3u)), document.createElement("span"));
		return du.textContent = function(aQS, fi, a7) {
			if (aQS.aDv) return aQS.aDv--, a7 = 2 === fi.x8.id || (3 === fi.x8.id || 4 === fi.x8.id) && 0 !== a7, aQS.username + (a7 ? " (" + aQS.aDu + ")" : "");
			if (fi.x8.aQY) return "Redacted " + lO.tk.gb(aQS.iy, 2);
			return aQS.username
		}(aQS, fi, a7), du.style.display = "inline-block", du.style.color = fj.bH.pI(aQS.pJ), du.style.cursor = "pointer", du.style.margin = "0", du.style.font = "inherit", du.style.minWidth = du.style.minHeight = "1em", fj.bH.pK(aQS) && (du
			.style.textDecoration = "underline"), fj.bH.aQV(aQS.a3u) && (du.style.fontWeight = "bold"), du.onclick = function(dx) {
			fj.a6L.a69(dx, aQS)
		}, cA.cB() || (du.onmouseover = function(dx) {
			fj.p7.pL(dx, aQS)
		}), yc.push(du), du
	}

	function aQQ(a9H, fi) {
		var pG = document.createElement("span");
		return pG.textContent = a9H, pG.style.color = fi.aQZ, pG.style.margin = "0", pG.style.font = "inherit", pG
	}

	function aQf(aQS, aDt, iy) {
		iy !== aQS.iy || aQS.aDu || (aQS.aDu = aQS.username, aQS.aDv = 3, aQS.username = aDt)
	}
	this.fp = function() {
		for (var y = 0; y < yc.length; y++) yc[y].onclick = yc[y].onmouseover = null;
		aQK = yc = null
	}, this.transform = function(fi) {
		for (var d = document.createElement("div"), aQL = aQM(fi), y = 0; y < aQL.length; y++) d.appendChild(aQL[y]);
		0 === fi.x8.id && (d.vx143 = fi.x8, aQK.push(d)), d.style.margin = "0.6em 0.6em", fi.aP7 && (d.style.marginLeft = d.style.marginRight = "inherit"), d.style.font = "inherit";
		var aQN = 0 < fi.x8.id;
		return fi.aQO && (d.style.fontWeight = "bold"), aQN && (d.style.paddingLeft = "0.7em"), aQN && (d.style.fontStyle = "italic"), d.style.fontSize = fi.fontSize.toFixed(2) + "em", d
	}, this.aQd = function(aQe) {
		if (aQe && (2 === aQe.id && 1 === aQe.x9 || 3 === aQe.id && 2 === aQe.x9)) {
			var iy = 3 === aQe.id ? aQe.target : aQe.iy;
			if (!fj.pB.a6p(iy)) {
				for (var aDt = "Redacted " + lO.tk.gb(iy, 2), aCm = fj.pB.aCm, y = aCm.length - 1; 0 <= y; y--) aQf(aCm[y], aDt, iy);
				for (y = aQJ.length - 1; 0 <= y; y--) aQf(aQJ[y], aDt, iy)
			}
		}
	}, this.xA = function(iy) {
		for (var aQg = aQK, y = aQg.length - 1; 0 <= y; y--) {
			var bW = aQg[y];
			if (bW.vx143.iy === iy) {
				for (; bW.firstChild;) bW.removeChild(bW.firstChild);
				bW.vx143.a9H = "[Redacted Message]";
				for (var aQL = aQM(fj.bH.fl(bW.vx143, fj.bH.fm(bW.vx143))), qw = 0; qw < aQL.length; qw++) bW.appendChild(aQL[qw]);
				aQg.splice(y, 1)
			}
		}
	}
}

function aB7() {
	var aQh, aQi, sS, aQj, aQk, aQl, aQm, aQn, aQo, sQ, aQp, aI8, aQq, aQr = 1;

	function aQs(aQt) {
		!aQt && 1 === aQq && aQr ? (aQr = 0, an.ax.close(aQq, 3280)) : aQq = (aQq + 1) % an.ax.a7A, aI8 = e8.iR, an.ax.xP(aQq, 4) && an.nj.l8(aQq)
	}

	function aQu() {
		if (0 !== aQq) return 1 === aQq && __fx.customLobby.isActive() ? (a7O.a5A(3249), __fx.customLobby.setActive(!1)) : void aQs();
		a7O.a5A(3249)
	}

	function aQz(bo, aHh, ob) {
		var dc = Math.floor((gG.gF - aQj) / 2) + aQm,
			qp = dc + Math.floor(ob * (aQj - 2 * aQm));
		h9.lineWidth = aHh, h9.beginPath(), h9.moveTo(dc, bo), h9.lineTo(qp, bo), h9.lineTo(Math.floor(dc - aQm + ob * aQj), bo + sS), h9.lineTo(dc - aQm, bo + sS), h9.closePath()
	}
	this.zO = 1, this.f = function() {
		av.setState(6), aQh = 0, aQi = 1, aQn = "rgba(0,220,120,0.4)", aQo = "rgba(0,0,0,0.8)", this.resize(), e8.e9 = !0, aQr = 1, aQq = this.zO - 1, aQs(1)
	}, this.resize = function() {
		aQj = Math.floor((eH.eV.fT() ? .5 : .25) * gG.gH), aQk = aQj + 12, sS = Math.floor(.125 * aQj), aQm = 3 * sS, aQl = Math.floor(.225 * aQj), aQp = Math.floor(.3 * sS), sQ = g.h.fn(0, aQp)
	}, this.a57 = function(l9) {
		l9 === aQq && aQu()
	}, this.iS = function(bn, bo) {
		var dc = Math.floor((gG.gF - aQk) / 2),
			dd = Math.floor(.5 * (gG.ae - j.gap - sS - aQl)) + sS + j.gap;
		return dc < bn && bn < dc + aQk && dd < bo && bo < dd + aQl && (this.aN6(), zl.qf(bn, bo, !1), !0)
	}, this.aN6 = function() {
		an.ax.a5D(3260), __fx.customLobby.setActive(false), t.ax.a5C()
	}, this.c8 = function() {
		6 === av.aw() && (e8.iR > aI8 + 12e3 && aQu(), 100 < (aQh += .07 * aQi * (aQh < 16 ? 5 + aQh : 84 < aQh ? 105 - aQh : 17)) ? (aQh = 100, aQi = -1) : aQh < 0 && (aQh = 0, aQi = 1), aQn = "rgba(0," + Math.floor(190 - 1.9 * aQh) + "," + Math
			.floor(120 - 1.2 * aQh) + "," + (.4 + .004 * aQh) + ")", aQo = "rgba(0," + Math.floor(1.9 * aQh) + "," + Math.floor(1.2 * aQh) + "," + (.8 - .004 * aQh) + ")", e8.e9 = !0)
	}, this.h8 = function() {
		var bn = Math.floor((gG.gF - aQk) / 2),
			bo = Math.floor(.5 * (gG.ae - j.gap - sS - aQl));
		! function(title, bo, aHh, ob) {
			h9.fillStyle = aQo, aQz(bo, aHh, 1), h9.fill(), h9.fillStyle = aQn, aQz(bo, aHh, ob), h9.fill(), h9.strokeStyle = dR.fa, aQz(bo, aHh, 1), h9.stroke(),
				function(aR1, bo) {
					g.h.textAlign(h9, 1), g.h.textBaseline(h9, 1), h9.font = sQ, h9.fillStyle = dR.fa, h9.fillText(aR1, Math.floor(.5 * gG.gF), Math.floor(bo + .58 * sS))
				}(title, bo)
		}(L(427), bo, 3, aQh / 100),
		function(bn, bo, gF, ae, aCt) {
			h9.fillStyle = dR.a7i, h9.fillRect(bn, bo, gF, ae), h9.lineWidth = 3, h9.strokeStyle = dR.fa, h9.strokeRect(bn, bo, gF, ae);
			var aY = Math.floor(.3 * ae);
			g.h.textAlign(h9, 1), g.h.textBaseline(h9, 1), h9.font = g.h.fn(0, aY), h9.fillStyle = dR.fa, h9.fillText(aCt, Math.floor(bn + gF / 2), Math.floor(bo + ae / 2 + .1 * aY))
		}(bn, bo + sS + j.gap, aQk, aQl, L(4))
	}
}

function aBC() {
	this.a7a = function() {
		var aR4;
		return !(g7.g8 < 3 || cV.cW[gq[0]] >= d2.gC >> 1) && (d2.gn ? (aR4 = gW.aR5(), !(2 * gW.aR7(go.y7()) >= aR4)) : function() {
			var aR4 = gW.aR5();
			if (2 * cV.cp[gq[0]] >= aR4) return !1;
			return !0
		}())
	}
}

function aEI() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 !== d2.data.spawningType || g.ab.sb(d2.data.spawningData) || (d2.data.spawningType = 0), 2 !== d2.data.spawningType && (d2.data.spawningData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.spawningType && g.ab.yK(yD.nW(), d2.data.spawningData, bR.oz - 1)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(428), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr,
			ty = (jk.ts(L(115)), [L(116), L(265), L(117)]),
			value = d2.data.spawningType;
		0 === d2.data.gameMode && (ty.splice(1, 1), 0 < value) && (value = 1);
		jk.yO(new xi({
			ty: ty,
			value: value
		}, function(cF) {
			yH(), d2.data.spawningType = cF, 0 === d2.data.gameMode && 1 === cF && (d2.data.spawningType = 2), 2 !== d2.data.spawningType || d2.data.spawningData || (d2.data.spawningData = new Uint16Array(2 * d2.hR)), t.z(24)
		})), jk.tt(new yP), jk.tt(new yQ({
			value: d2.data.selectableSpawn
		}, L(429), function(value) {
			d2.data.selectableSpawn = value
		})), to.push(jk)
	}(to = []), function(to) {
		var jk = new tr;
		jk.ts("Seed"), jk.tt(new tu({
			cF: -1,
			value: d2.data.spawningSeed
		}, 1, 0, function(dx) {
			var value = Math.abs(Math.floor(dx.target.value)) % 16384;
			dx.target.value = d2.data.spawningSeed = value
		})), to.push(jk)
	}(to), function(to) {
		var jk;
		2 === d2.data.spawningType && ((jk = new tr).ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.spawningData, 2)), jk.tt(yD), to.push(jk))
	}(to), to))
}

function aR8() {
	function aRC(bM, z2, z4) {
		for (var hp = Math.min(z2, z4), re = Math.max(z2, z4), bo = hp + 1; bo < re; bo++)
			if (!bE.kL(b9.br(bM, bo))) return;
		return 1
	}

	function aRD(bO, z1, z3) {
		for (var hp = Math.min(z1, z3), re = Math.max(z1, z3), bn = hp + 1; bn < re; bn++)
			if (!bE.kL(b9.br(bn, bO))) return;
		return 1
	}

	function aRE(z1, z2, z3, z4, aR9, aRA) {
		for (var aY = Math.min(Math.abs(z3 - z1), Math.abs(z4 - z2)), kH = Math.sign(z3 - z1), kI = Math.sign(z4 - z2), y = 0; y < aY; y++)
			if (!bE.kL(b9.br(z1 += kH, z2 += kI))) return null;
		return z1 === z3 ? aRC(z1, z2, z4) ? new Uint32Array([aR9, b9.kK(z1, z2), aRA]) : null : aRD(z2, z1, z3) ? new Uint32Array([aR9, b9.kK(z1, z2), aRA]) : null
	}
	this.vF = function(aR9, aRA) {
		aR9 = function(aR9, aRA) {
			var z1 = b9.bN(aR9),
				z2 = b9.bP(aR9),
				z3 = b9.bN(aRA),
				z4 = b9.bP(aRA);
			if (z1 === z3) {
				if (aRC(z1, z2, z4)) return new Uint32Array([aR9, aRA])
			} else {
				if (z2 !== z4) return aRE(z1, z2, z3, z4, aR9, aRA) || aRE(z3, z4, z1, z2, aR9, aRA);
				if (aRD(z2, z1, z3)) return new Uint32Array([aR9, aRA])
			}
			return null
		}(aR9, aRA);
		return null === aR9 ? -1 : b5.fG.fP(aR9)
	}
}

function aGT() {
	function aRM() {
		var id = cK.cL(3);
		return 0 === id ? {
			id: id,
			iy: cK.cL(30),
			a9H: fj.a6Q.aRO(nu.lP.cH(7))
		} : 1 === id ? {
			id: id,
			iy: cK.cL(30),
			x9: cK.cL(3),
			value: cK.cL(30),
			target: cK.cL(30)
		} : 2 === id ? {
			id: id,
			iy: cK.cL(30),
			x9: cK.cL(3)
		} : 3 === id ? {
			id: id,
			iy: cK.cL(30),
			x9: cK.cL(3),
			value: cK.cL(4),
			target: cK.cL(30)
		} : 4 === id ? {
			id: id,
			iy: cK.cL(30),
			x9: cK.cL(3),
			target: cK.cL(30)
		} : 5 === id ? {
			id: id,
			x9: cK.cL(6)
		} : 6 === id ? {
			id: id,
			value: cK.cL(17)
		} : null
	}
	this.aRF = function(l9) {
		if (l9 !== an.ax.lJ) an.ax.close(l9, 3239);
		else if (6 !== av.aw()) an.ax.close(l9, 3271);
		else {
			fj.f();
			for (var y = 0; y < 4; y++) {
				var aCg = fj.ax.aCh[y],
					playerCount = (aCg.ob = cK.cL(10), aCg.kk = cK.cL(6), aCg.mapSeed = cK.cL(14), aCg.oc = cK.cL(4), aCg.od = cK.cL(6), aCg.oe = cK.cL(4), aCg.og = cK.cL(1), aCg.oh = cK.cL(12), aCg.spawningSeed = cK.cL(14), cK.cL(16));
				fj.pB.pD[y] = cK.cL(16);
				for (var qw = 0; qw < playerCount; qw++) fj.pB.aDl(y, cK.cL(30), nu.lP.cH(5), cK.cL(4), cK.cL(30), cK.cL(7), cK.cL(16), cK.cL(18), cK.cL(11), cK.cL(12))
			}
			t.z(29), fj.ax.aRG(!0)
		}
	}, this.aRH = function(l9) {
		if (l9 !== an.ax.lJ) an.ax.close(l9, 3239);
		else if (fj.a53) {
			fj.ax.aRI[0] = cK.cL(20), fj.ax.aRI[1] = cK.cL(20);
			for (var aRJ = cK.cL(16), qw = 0; qw < aRJ; qw++) {
				var id = cK.cL(3);
				0 === id ? fj.pB.aDl(cK.cL(2), cK.cL(30), nu.lP.cH(5), 0, 1234566, 127, 0, cK.cL(18), 0, cK.cL(12)) : 1 === id ? fj.pB.aE0(cK.cL(16), cK.cL(2)) : 2 === id ? fj.pB.aDw(cK.cL(16), cK.cL(2), cK.cL(2)) : 3 === id ? fj.pB.aDz(cK.cL(
					16), cK.cL(2)) : 4 === id ? fj.pB.aDp(cK.cL(16), cK.cL(2), cK.cL(4), cK.cL(30), cK.cL(7), cK.cL(16), cK.cL(11)) : 5 === id && fj.pB.aDq(cK.cL(16), cK.cL(2), cK.cL(1))
			}
			for (var y = 0; y < 4; y++) {
				var aCg = fj.ax.aCh[y];
				if (aCg.ob = cK.cL(10), 0 === aCg.ob) {
					if (aCg.mF = cK.cL(10), aCg.oi = cK.cL(10), fj.aF5.cS(y)) return;
					aCg.kk = cK.cL(6), aCg.mapSeed = cK.cL(14), aCg.oc = cK.cL(4), aCg.od = cK.cL(6), aCg.oe = cK.cL(4), aCg.og = cK.cL(1), aCg.oh = cK.cL(12), aCg.spawningSeed = cK.cL(14), aCg.om.push(aCg.om[0]), aCg.om.shift()
				}
			}
			fj.ax.aRK()
		} else an.ax.close(l9, 3251)
	}, this.aRL = function(l9) {
		if (l9 !== an.ax.lJ) an.ax.close(l9, 3272);
		else if (fj.a53) {
			for (var aE1 = cK.cL(4), aCg = fj.ax.aCh[aE1], oj = aCg.oj, fg = (aCg.ok = cK.cL(20), cK.cL(6)), y = 0; y < fg; y++) {
				var aQe = aRM();
				fj.fk.aQd(aQe), oj.push(aQe)
			}
			fj.ax.aRN(aE1)
		} else an.ax.close(l9, 3273)
	}, this.aRP = function(l9) {
		l9 !== an.ax.lJ ? an.ax.close(l9, 3276) : fj.a53 ? fj.message.x7(aRM()) : an.ax.close(l9, 3277)
	}
}

function aBZ() {
	this.aZ = new Array(4), this.aRQ = new Uint16Array(2), this.a3O = new Uint16Array(2), this.aRR = new Int32Array(2), this.a3d = new Uint32Array(2), this.aRS = new Uint32Array(2), this.s6 = new Uint8Array(4), this.aRT = new Uint8Array(4), this
		.aCQ = new Uint32Array(4), this.aRU = new Uint32Array(5), this.a3q = new Uint32Array(8), this.bL = new Uint32Array(8), this.aRV = new Uint16Array(16), this.a3N = new Uint16Array(512), this.aOB = new Uint16Array(512), this.aOC =
		new Uint16Array(512), this.aRW = new Uint16Array(0), this.f = function() {
			var aY = bR.bS * bR.bU;
			this.aRW.length !== aY && (this.aRW = new Uint16Array(aY))
		}, this.aRX = function(aZ, wk) {
			return aZ[0] = wk, aZ
		}, this.aRY = function(aZ, wk, wu) {
			return aZ[0] = wk, aZ[1] = wu, aZ
		}, this.aRZ = function(aZ, wk, wu, zx) {
			return aZ[0] = wk, aZ[1] = wu, aZ[2] = zx, aZ
		}, this.aRa = function(aZ, wk, wu, zx, aRb) {
			return aZ[0] = wk, aZ[1] = wu, aZ[2] = zx, aZ[3] = aRb, aZ
		}
}

function aBU() {
	this.ef = new aJA, this.cn = new a6x, this.aC9 = new aCD, this.aPo = new aBy, this.a0E = new aLP
}

function aF9() {
	function aRc(aRe) {
		fj.ax.aCn && 1 === fj.ax.pA[2] && t.tg(29).aRf(), fj.ax.aCn = 0, t.tg(29).aRg(), 0 !== fj.ax.aCh[fj.ax.pA[0]].ob && !aRe || t.tg(29).aRh(), fj.p7.a6h()
	}
	this.aCh = new Array(4), this.pA = [0, 0, 1, 0], this.aCn = 0, this.aRI = [0, 0], this.f = function() {
		for (var y = 0; y < this.aCh.length; y++) this.aCh[y] = new oa;
		this.pA[0] = aV.aW.data[158].value
	}, this.aRG = function() {
		aRc(!0)
	}, this.aRK = function() {
		for (var y = 0; y < fj.ax.aCh.length; y++) {
			var aCg = fj.ax.aCh[y];
			0 === aCg.ob ? aCg.ol = 0 : (aCg.oh = Math.max(aCg.oh - aCg.ol % 2, 0), aCg.ol++)
		}
		aRc(!1)
	}, this.aRN = function(aE1) {
		this.pA[0] !== aE1 || this.pA[2] || t.tg(29).aRi()
	}
}

function aRj() {
	this.k4 = function(player, aRA) {
		return -1 !== aRA && !!b5.bH.fM(player, aRA) && this.vF(player, aRA, 0)
	}, this.vF = function(player, aRA, aRk) {
		player = function(player, aRA, aRk) {
			var vA = b5.bH.vB(player, aRA);
			if (-1 === vA) return -1;
			vA = b5.bH.aLD(vA, aRA);
			if (-1 === vA) return -1;
			var fD = b5.fG.fN(vA, aRA);
			if (0 <= fD) return fD;
			if (b5.fG.fO()) return -1;
			if (0 <= (fD = b5.fG.fN(aRA, vA))) return b5.fG.fP(b5.fG.fQ(b5.fG.get(fD)));
			if (vA === aRA) return b5.fG.fP(new Uint32Array([vA, aRA]));
			if (0 <= (fD = b5.aRl.vF(vA, aRA))) return fD;
			return aRk ? function(aRn, player) {
				var aRW = bK.aRW,
					aW = (aRW.fill(0), [aRn]),
					yq = (aRW[aRn] = 1, b9.yq),
					bC = -1,
					aY = aW.length;
				for (; - 1 === bC && aY;) {
					for (var aZ = [], y = 0; y < aY; y++)
						for (var bw = aW[y], aFE = aRW[bw], bW = 0; bW < 8; bW++) {
							var aLm, aLk, aCa = bw + yq[bW],
								bq = 4 * aCa;
							bE.kL(bq) ? (aLm = aRW[aCa], aLk = aFE + 5 + ((1 & bW) << 1), 0 === aLm ? (aZ.push(aCa), aRW[aCa] = aLk) : aRW[aCa] = Math.min(aLk, aLm)) : -1 === bC && bW % 2 == 0 && bE.de(player, bq) && (bC = bw)
						}
					aY = (aW = aZ).length
				}
				return -1 !== bC ? function(bb, aRp) {
					var yq = b9.yq,
						aRq = -1,
						bu = 0,
						dV = [];
					for (; aRp !== bb;)(bu = function(bw, bu) {
						var aRW = bK.aRW,
							yq = b9.yq,
							aFE = aRW[bw];
						if (aFE - aRW[bw + yq[bu]] != 5 + ((1 & bu) << 1))
							for (var qw = 0; qw < 8; qw++) {
								var bW = qw + bu + 6 & 7;
								if (aFE - aRW[bw + yq[bW]] == 5 + ((1 & bW) << 1)) return bW
							}
						return bu
					}(aRp, bu)) !== aRq && (dV.push(aRp), aRq = bu), aRp += yq[bu];
					dV.push(bb);
					var fD = b5.fG.fN(dV[0], bb);
					if (0 <= fD) return fD;
					return b5.fG.fP(new Uint32Array(dV))
				}(aRn, bC) : -1
			}(aRA, player) : -1
		}(player, aRA, aRk);
		return -1 !== player && (bK.aZ[0] = b5.fG.get(player), !0)
	}
}

function aBT() {
	this.aRs = [], this.aRt = [], this.f = function() {
		this.aRs = [], this.aRt = []
	}, this.c8 = function() {
		0 <= this.aRs.length && this.aRu(this.aRs), 0 <= this.aRt.length && this.aRu(this.aRt)
	}, this.aRu = function(aZ) {
		for (var ak = -1, y = aZ.length - 1; 0 <= y; y--)
			if (aZ[y].iR--, aZ[y].iR <= 0) {
				ak = y;
				break
			} for (y = ak; 0 <= y; y--) aZ.shift()
	}, this.vw = function(id, y8, aRv) {
		return this.aCe(this.aRs, id, y8, aRv)
	}, this.aRw = function(id, y8, aRv) {
		return this.aCe(this.aRt, id, y8, aRv)
	}, this.aCe = function(aZ, id, y8, aRv) {
		return ! function(aZ, id, y8) {
			var y, fJ;
			for (y = y8.length - 1; 0 <= y; y--)
				for (fJ = aZ.length - 1; 0 <= fJ; fJ--)
					if (aZ[fJ].player === y8[y] && id === aZ[fJ].id) return 1;
			return
		}(aZ, id, y8) && (aRv && function(aZ, id, y8) {
			var y;
			for (y = y8.length - 1; 0 <= y; y--) aZ.push({
				player: y8[y],
				id: id,
				iR: 384
			})
		}(aZ, id, y8), !0)
	}
}

function aBb() {
	function aS0() {
		8 === d2.dH && 1 === d2.h5 && dB.gv.gw()
	}

	function aRz(player) {
		d2.gQ ? (aAe.cZ(player), g7.aHg(), d2.g5 && d2.aAQ.c8()) : aAh.aDl(player)
	}
	this.eg = function(player) {
		cD.dU(player, player === d2.ed ? 21 : 22), aRz(player), aS0()
	}, this.aCB = function(player) {
		1 === d2.h5 && 0 !== cV.dX[player] && 2 !== cV.oV[player] && aRz(player), d2.gl--, d2.d3--, cD.dU(player, 4), g.cn.uK(2) && d9.gR(!0), aS0()
	}
}

function ls() {
	function aS1() {
		if (2 === d2.h5) return 1;
		eL.aGp(), d2.h5 = 2, d2.d3 = d2.gl
	}

	function aS2() {
		dB.ly.a2n(), d8.show(1 === d2.a2p, !1, 2 === d2.a2p), dB.result.a2n(), dB.dC.c8(), dB.lw.c8(), cD.a9p(!0), cD.rU(247), cD.rU(956), cD.rU(957), h6.gR(!0), d9.gR(!0), eL.gR(), zm.ia(), d2.ea && e8.aKn.aS3(), e8.e9 = !0, sJ.aES(), eH.eV
			.setState(0)
	}
	this.aGo = function() {
		aS1() || (d2.a2o = 2, aS2())
	}, this.gw = function() {
		aS1() || (d2.a2o = 1, aS2())
	}
}

function aBg() {
	var aS4 = !1,
		a1g = 0,
		gF = 0,
		iq = 0,
		gap = 0,
		canvas = null,
		fs = null,
		aS5 = null;

	function aS7() {
		for (var aSD, aSB = 0, aY = 0, a7 = Math.floor(gF / 2), jC = Math.floor(iq / 2), aSC = 1.5 * Math.PI, y = d2.i4; 0 <= y; y--) aY += aS5[y], 0 === aS5[y] && aSB++;
		if (aS4 = !1, fs.clearRect(0, 0, gF, gF), fs.fillStyle = dR.gT, fs.fillRect(0, 0, gF, gF), fs.fillStyle = dR.fa, fs.fillRect(0, 0, gF, gap), fs.fillRect(0, 0, gap, gF), fs.fillRect(gF - gap, 0, gap, gF), fs.fillRect(0, gF - gap, gF, gap), 0 <
			aY)
			if (aSB === d2.i4) {
				for (y = d2.i4; 0 <= y; y--)
					if (0 < aS5[y]) {
						! function(y, a7, jC) {
							fs.fillStyle = aL.hH[aL.hQ[y]], fs.beginPath(), fs.arc(a7, a7, jC, 0, 2 * Math.PI), fs.fill()
						}(y, a7, jC);
						break
					}!
				function(a7) {
					var fontSize = a7 / 3;
					fs.font = g.h.fn(1, fontSize), fs.fillStyle = dR.fa, fs.fillText("100%", a7, a7 + .1 * fontSize)
				}(a7)
			} else {
				for (y = 0; y <= d2.i4; y++) 0 < aS5[y] && (! function(y, a7, jC, aSC, aSD) {
					fs.fillStyle = aL.hH[aL.hQ[y]], fs.beginPath(), fs.arc(a7, a7, jC, aSC, aSD), fs.lineTo(a7, a7), fs.fill()
				}(y, a7, jC, aSC, aSD = aSC + 2 * Math.PI * aS5[y] / aY), function(a7, jC, aSC, aSD) {
					var aU = (aSD - aSC) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * jC * Math.min(aU, .37);
					fontSize < 8 || (aSC = (aSC + aSD) / 2, aSD = (__fx.settings.detailedTeamPercentage ? (100 * aU).toFixed(2) : Math.floor(100 * aU + .5)) + "%", jC *= .525 - Math.max(.6 * (aU - .7), 0), fs.font = g.h.fn(1, fontSize), fs
						.fillStyle = dR.fa, fs.fillText(aSD, a7 + Math.cos(aSC) * jC, a7 + Math.cos(aSC + 1.5 * Math.PI) * jC))
				}(a7, jC, aSC, aSD), 0 !== y && aSI(a7, jC, aSC), aSC = aSD);
				aSI(a7, jC, 1.5 * Math.PI)
			}!
		function(a7, jC) {
			fs.beginPath(), fs.arc(a7, a7, jC, 0, 2 * Math.PI), fs.stroke()
		}(a7, jC)
	}

	function aSI(a7, jC, jh) {
		fs.beginPath(), fs.moveTo(a7, a7), fs.lineTo(a7 + Math.cos(jh) * jC, a7 + Math.cos(jh + 1.5 * Math.PI) * jC), fs.stroke()
	}
	this.f = function() {
		if (d2.gn) {
			a1g = 0, aS5 = new Uint32Array(d2.i4 + 1);
			for (var y = d2.i4; 0 <= y; y--) aS5[y] = 0;
			for (y = g7.g8 - 1; 0 <= y; y--) aS5[aL.dI[g7.gx[y]]] += 1;
			this.resize()
		} else aS5 = fs = canvas = null
	}, this.aEl = function() {
		return gF
	}, this.resize = function() {
		d2.gn && (gF = Math.floor(eH.eV.fT() && !d2.iQ ? .18 * gG.min : .13 * gG.gH), gF = (gF *= 1 + (.5 + .2 * eH.eV.fT()) * d2.iQ) + gF % 2, iq = Math.floor(7 * gF / 8), (canvas = canvas || document.createElement("canvas")).width = gF, canvas
			.height = gF, fs = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * gF), fs.lineWidth = gap, fs.strokeStyle = dR.fa, g.h.textAlign(fs, 1), g.h.textBaseline(fs, 1), aS7())
	}, this.gp = function() {
		var cU, a2s = this.y7();
		return aL.hQ[a2s] || (a2s = function() {
			for (var a2s = -1, y = d2.i4; 1 <= y; y--)(-1 === a2s || aS5[y] > aS5[a2s]) && (a2s = y);
			return a2s
		}(), cU = cV.cW[gq[0]], -1 !== a2s && aS5[a2s] > cU) ? aS5[a2s] : cU
	}, this.a2t = function() {
		return a1g = 31, this.c8(), this.y7()
	}, this.y7 = function() {
		for (var a2s = 0, y = d2.i4; 0 < y; y--) aS5[y] > aS5[a2s] && (a2s = y);
		return a2s
	}, this.a3M = function(a62) {
		for (var aj = 0, gx = g7.gx, dI = aL.dI, aY = g7.g8, a3N = bK.a3N, y = 0; y < aY; y++) {
			var cT = gx[y];
			dI[cT] === a62 && (a3N[aj++] = cT)
		}
		bK.a3O[0] = aj
	}, this.aS9 = function(a62) {
		for (var aj = 0, gx = g7.gx, dI = aL.dI, aY = g7.g8, a3N = bK.a3N, y = 0; y < aY; y++) {
			var cT = gx[y];
			dI[cT] !== a62 && (a3N[aj++] = cT)
		}
		bK.a3O[0] = aj
	}, this.a3S = function() {
		for (var aj = 0, y = d2.i4; 0 <= y; y--) aj += 0 < aS5[y];
		return aj
	}, this.c8 = function() {
		if (d2.gn && 32 <= ++a1g) {
			a1g = 0;
			for (var y = d2.i4; 0 <= y; y--) aS5[y] = 0;
			for (y = g7.g8 - 1; 0 <= y; y--) aS5[aL.dI[g7.gx[y]]] += cV.cW[g7.gx[y]];
			aS4 = !0
		}
	}, this.iM = function() {
		d2.gn && aS4 && aS7()
	}, this.h8 = function() {
		d2.gn && (d2.iQ ? h9.drawImage(canvas, j.gap, j.gap) : h9.drawImage(canvas, j.gap, aEm + 2 * j.gap))
	}
}

function aEL() {
	var aSK, aSL, aSO, aSR, aSS, aSM = [new Array(4), [], new Array(2), new Array(2)],
		aSN = new Array(4),
		aSP = new Array(2),
		aSQ = [L(176), L(41), L(430), L(431)];

	function aSY() {
		var aCt = aSK.aSb.zS.dx.value.trim().slice(0, 127);
		aCt.length < 1 || (aSK.aSb.zS.dx.value = "", fj.a6Q.a2n(aCt))
	}

	function aSW(aSc) {
		fj.ax.pA[3] = 1 - fj.ax.pA[3], aSZ(3, 1, fj.ax.pA[3]), aSc && an.nj.lL(4), fj.ax.pA[3] && aV.ar.at(158, fj.ax.pA[0])
	}

	function aSU(qw, ak) {
		fj.ax.pA[qw] !== ak && (0 === qw && fj.ax.pA[3] && aSW(0), aSZ(qw, fj.ax.pA[qw], 0), aSZ(qw, ak, 1), fj.ax.pA[qw] = ak, 0 === qw ? (an.nj.lL(2, ak), fj.ax.pA[2] ? (aSK.aSe.iM(), aSK.aSb.aHy(1)) : aSK.aSb.aHy(0), t.eB().aRh(), t.eB().aRg()) :
			2 === qw && (0 === ak ? (an.nj.lL(0), aSK.aSb.iM(), aSK.aSf()) : (an.nj.lL(1), aSK.aSe.iM(), aSK.aSg())))
	}

	function aSZ(qw, ak, color) {
		aSK.aSh[qw].vS[ak].f5(color ? dR.io : dR.a8R)
	}

	function aSj(oc) {
		return oc < 7 ? oc + 2 + " " + L(438) : 7 === oc || 10 === oc ? L(41) + " (Full-Sending: " + L(7 === oc ? 439 : 440) + ")" : 8 === oc ? "1v1" : L(441)
	}

	function aSk(aU) {
		var aCw = gA.gB(aU, 60),
			aU = aU % 60;
		return (aCw < 10 ? "0" : "") + aCw + ":" + (aU < 10 ? "0" : "") + aU
	}
	this.xB = function() {
		return aSK.aSb
	}, this.a6Q = function(iy) {
		aSU(2, 0);
		var du = aSK.aSb.zS.dx.value,
			iy = "@" + iy + " ";
		du.length && !g.gZ.ln(du, " ") && (iy = " " + iy), aSK.aSb.zS.dx.value = du += iy, aSK.aSb.zS.dx.focus()
	}, this.aRf = function() {
		aSK.aSe.iM()
	}, this.aRh = function() {
		var aSi = fj.ax.pA[0],
			aSi = fj.ax.aCh[aSi];
		bR.kv(aSi.kk, aSi.mapSeed), aSL.vS[0].button.textContent = L(262) + ": " + bR.ki.kj[aSi.kk].name, aSL.vS[1].button.textContent = L(264, 0, "Mode") + ": " + aSj(aSi.oc), aSL.vS[2].button.textContent = L(435) + ": " + bR.ki.kj[aSi.od].name,
			aSL.vS[3].button.textContent = L(436, 0, "Next Mode") + ": " + aSj(aSi.oe), aSL.vS[4].button.textContent = L(437) + ": " + aSk(aSi.oh), aSL.resize()
	}, this.aRg = function() {
		var aSi = fj.ax.pA[0],
			aCg = fj.ax.aCh[aSi];
		aSK.aSl(aCg.ob);
		for (var y = 0; y < fj.pB.pC.length; y++) aSM[0][y].pG.textContent = "" + fj.pB.pC[y].length;
		var pB = fj.pB.pC[aSi],
			aSm = pB.length,
			aSn = fj.pB.pD[aSi];
		aSM[2][1].pG.textContent = "" + aSm, aSM[3][1].pG.textContent = "" + aSn, aSL.vS[4].button.textContent = L(437) + ": " + aSk(aCg.oh);
		for (y = 0; y < 4; y++) {
			var aSo = fj.ax.aCh[y];
			aSN[y] ? 0 === aSo.ob && (aSN[y].pG.textContent = bR.ki.kj[aSo.kk].name) : aSN[y] = new a1b(bR.ki.kj[aSo.kk].name, aSR.vS[y].button, 1, 1), g.gZ.startsWith(aSQ[y], "🏆 ") ? aSo.og || (aSQ[y] = aSQ[y].substring(3), aSR.vS[y].button
				.textContent = aSQ[y], aSR.vS[y].button.appendChild(aSM[0][y].pG), aSR.vS[y].button.appendChild(aSN[y].pG)) : aSo.og && (aSQ[y] = "🏆 " + aSQ[y], aSR.vS[y].button.textContent = aSQ[y], aSR.vS[y].button.appendChild(aSM[0][y]
				.pG), aSR.vS[y].button.appendChild(aSN[y].pG))
		}
		var aCg = "",
			aSq = "";
		0 === aSi && (aCg = fj.bH.aSr(pB, 0, aSm), aSq = fj.bH.aSr(pB, 0, aSn)), aSO[0].pG.textContent = aCg, aSO[1].pG.textContent = aSq, aSP[1].pG.textContent = "MP: " + fj.ax.aRI[0] + "   SP: " + fj.ax.aRI[1] + "   Lobby: " + g.ab.aSs(fj.pB
			.pC)
	}, this.aRi = function() {
		aSK.aSb.iM()
	}, this.show = function() {
		aSK.show(), this.resize(), fj.message.show()
	}, this.a5 = function() {
		aSK.a5(), fj.a6L.a5(), fj.p7.a5(), fj.message.a5()
	}, this.resize = function() {
		aSK.resize(1 - fj.ax.pA[2]), fj.message.resize()
	}, this.a6 = function(a7) {
		2 === a7 ? fj.ax.pA[3] ? aSW(1) : aSK.aSh[3].vS[0].a9() : a7 < 2 && aSW(1)
	}, aSR = new aST([new q(aSQ[0], function() {
		return aSU(0, 0), 2
	}), new q(aSQ[1], function() {
		return aSU(0, 1), 2
	}), new q(aSQ[2], function() {
		return aSU(0, 2), 2
	}), new q(aSQ[3], function() {
		return aSU(0, 3), 2
	})], dR.a8R), aSL = new aST([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], dR.a8S, 1);
	var aSV = new aST([new q(L(432), function() {
		return aSU(2, 0), 2
	}), new q(L(45), function() {
		return aSU(2, 1), 2
	})], dR.a8R);
	aSS = new aST([new q(L(433), (__fx.customLobby.setLeaveFunction(() => {
			t.eY(), fj.fp(), an.ax.a5D(3240), __fx.customLobby.setActive(false), t.z(5, 5)
		}),
		function() {
			t.eY(), fj.fp(), an.ax.a5D(3240), __fx.customLobby.setActive(false), t.z(5, 5)
		})), new q(L(434), function() {
		return aSW(1), 2
	})], dR.a8R), aSK = new aSX(aSR, aSL, aSV, aSS, aSY, fj.a6L.a69);
	for (var y = 0; y < 4; y++) aSM[0][y] = new a1b("0", aSR.vS[y].button);
	aSM[2][1] = new a1b("0", aSV.vS[1].button), aSM[3][1] = new a1b("0", aSS.vS[1].button), aSO = [new a1b("", aSV.vS[1].button, 1, 1), new a1b("", aSS.vS[1].button, 1, 1)], aSZ(0, fj.ax.pA[0], 1), aSZ(2, fj.ax.pA[2], 1), (aSP = [new a1b(L(119), aSK
		.aSa(), 1, 0), new a1b("", aSK.aSa(), 1, 1)])[0].pG.style.fontSize = "0.4em", aSP[1].pG.style.fontSize = "0.4em"
}

function aKs() {
	var cF = 0,
		iR = e8.iR;
	this.aCT = 0, this.c8 = function() {
		gG.c8(), d2.gQ ? a15() : 0 === cF ? e8.iR >= iR && (iR += e8.h1 * Math.floor(1 + (e8.iR - iR) / e8.h1), 2 === d2.h5 || eb.eh ? a0s() : (a0t(), sJ.aPp()), cF++) : ((eb.eh ? a15 : (e8.e9 = !0, a14))(), cF = 0), a10(), e8.e9 && (e8.e9 = !1,
			a38())
	}
}

function a4p() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function aSt() {
	this.c8 = function(player) {
		return !!b5.b6.b7(player) && !(b5.ax.cX[player] >= Math.max(3 * k6.performance.k8, aN.a0M[aN.dN[player]]) || !g.cn.a3Y(player, aN.a4M[aN.dN[player]], 32, 0)) && (d9.gr() ? function(player) {
			var aSw = b5.bH.gu(),
				aY = aSw.length;
			if (0 === aY) return !1;
			aSw = aSw[dJ.fK(aY)], aY = b5.ax.jY[aSw];
			if (b5.kQ.a0P(player, aY)) return !1;
			return !! function(player, kO) {
				var kO = b9.v6(b5.ax.jV[kO]),
					bM = b9.bN(kO),
					kO = b9.bP(kO),
					dc = cV.dY[player],
					dd = cV.da[player],
					qp = cV.dZ[player],
					player = cV.db[player],
					qp = Math.max(bM - qp, dc - bM),
					dc = Math.max(kO - player, dd - kO);
				return qp < 100 && dc < 100
			}(player, aSw) && !!b5.ui.v0(player, aY, 1) && (g.cn.a3o(player), b5.ax.a5U(player), !0)
		}(player) : !!(k6.jz.c8(player) || k6.jo.c8(player) || k6.jq.c8(player)) && (function(player) {
			bK.bL[1] = 4, g.cn.a3o(player), b5.ax.a5U(player)
		}(player), !0))
	}
}

function aBs() {
	function bc(bn, aY, bo, gv, bT, bp) {
		if (!(bo < 1 || bT < bo))
			for (var y = 0; y <= aY; y++) {
				var bq = b9.br(bn, bo);
				if (gv(bq)) return bq >> 2;
				bn += bp
			}
		return -1
	}

	function bh(bo, aY, bn, gv, bQ, bp) {
		if (!(bn < 1 || bQ < bn)) {
			aY = Math.max(aY, 0);
			for (var y = 0; y <= aY; y++) {
				var bq = b9.br(bn, bo);
				if (gv(bq)) return bq >> 2;
				bo += bp
			}
		}
		return -1
	}

	function bl(bb, bd, b4) {
		return -1 !== bd && (-1 === bb || b9.bm(bd, b4) < b9.bm(bb, b4)) ? bd : bb
	}
	this.uV = function(b4) {
		return this.a2n(b4, function(bq) {
			return bE.pY(bq)
		})
	}, this.ud = function(b4) {
		return this.a2n(b4, function(bq) {
			return bE.by(bq, d2.ed)
		})
	}, this.a2n = function(b4, gv) {
		return function(b4, b8, gv) {
			for (var bM = b9.bN(b4), bO = b9.bP(b4), bQ = bR.bS - 2, bT = bR.bU - 2, bV = -1, bW = 0; bW < b8; bW++) {
				var bX = Math.max(bM - bW, 1),
					bY = Math.max(bO - bW, 1),
					bZ = Math.min(bM + bW, bQ),
					ba = Math.min(bO + bW, bT),
					bb = bc(bM, bZ - bM, bO - bW, gv, bT, 1),
					bd = bc(bM - 1, bM - bX - 1, bO - bW, gv, bT, -1),
					bZ = bc(bM, bZ - bM, bO + bW, gv, bT, 1),
					bX = bc(bM - 1, bM - bX - 1, bO + bW, gv, bT, -1),
					bg = bh(bO, ba - bO - 1, bM - bW, gv, bQ, 1),
					bi = bh(bO - 1, bO - bY - 2, bM - bW, gv, bQ, -1),
					ba = bh(bO, ba - bO - 1, bM + bW, gv, bQ, 1),
					bY = bh(bO - 1, bO - bY - 2, bM + bW, gv, bQ, -1);
				if (bV = bl(bV, bb, b4), bV = bl(bV, bd, b4), bV = bl(bV, bZ, b4), bV = bl(bV, bX, b4), bV = bl(bV, bg, b4), bV = bl(bV, bi, b4), bV = bl(bV, ba, b4), 0 <= (bV = bl(bV, bY, b4)) && bW * bW >= b9.bm(bV, b4)) return bV
			}
			return -1
		}(b4, b9.bA(), gv)
	}
}

function aFA() {
	var aSz = 0,
		aT0 = "",
		aT1 = 0,
		aT2 = 0,
		aT3 = 0;

	function aSY(aCt) {
		an.nj.lL(3, aCt)
	}

	function aTD(aj) {
		aSz = 1, fj.message.x7({
			id: 6,
			value: aj
		})
	}

	function aT7(a9H) {
		var aTH = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return a9H.match(aTH)
	}
	this.a2n = function(a9H) {
		var aT4, aZ, aT9;
		if (aSz) return aSz = 0, "yes" === (aT4 = a9H.toLowerCase()) || "y" === aT4 ? void aSY(aT0) : void fj.message.x7({
			id: 5,
			x9: 7
		});
		!(a9H.indexOf("@") < 0) && (aT4 = aT7(a9H)) ? (aT0 = a9H, aZ = function(aT6) {
			for (var aY = aT6.length, aTF = [0, 0, 0, 0], y = 0; y < aY; y++)
				for (var gF = aT6[y], qw = 0; qw < 4; qw++) gF === "@room" + (qw + 1) && (aTF[qw] = 1);
			if ((aT2 = g.ab.sb(aTF)) % 4 == 0) return g.ab.aTG(fj.pB.pC);
			for (qw = 0; qw < 4; qw++) aTF[qw] = aTF[qw] ? fj.pB.pC[qw] : [];
			return g.ab.aTG(aTF)
		}(aT4), function(aT6, aT9, a9H) {
			if (!aT1) return;
			for (var aY = aT9.length, y = 0; y < aY; y++) 2 === aT9[y].id && (a9H = a9H.replace(aT6[aT9[y].cF], "@" + aT9[y].aU));
			return aSz = 1, aSY((aT0 = a9H).slice(0, 126) + "|"), 1
		}(aT4, aT9 = function(aT6) {
			for (var aT9 = [], aY = (aT3 = aT1 = 0, aT6.length), y = 0; y < aY; y++) {
				var gF = aT6[y],
					ag = gF.length;
				g.gZ.startsWith(gF, "@[") ? ag <= 9 && g.gZ.ln(gF, "]") && aT9.push({
					id: 0,
					aU: gF.substring(2, ag - 1).toUpperCase()
				}) : 6 === ag ? g.gZ.startsWith(gF, "@room") || (aT3++, aT9.push({
					id: 1,
					aU: nu.tk.aF7(gF.substring(1))
				})) : 1 < ag && ag < 5 && 0 <= (ag = aX.data.b1(gF.substring(1))) && (aT9.push({
					id: 2,
					aU: ag,
					cF: y
				}), aT1 = 1)
			}
			return aT9
		}(aT4), a9H) || (0 === aT9.length ? aT2 || function(aT6) {
			for (var aY = aT6.length, y = 0; y < aY; y++) {
				var gF = aT6[y];
				if ("@all" === gF || "@everyone" === gF) return 1
			}
			return
		}(aT4) ? aTD(aZ.length) : aSY(a9H) : aT4.length === aT3 ? aSY(a9H) : (function(aZ, aT9) {
			var ag = aT9.length;
			if (0 === ag) return;
			var aY = aZ.length;
			loop: for (var y = aY - 1; 0 <= y; y--) {
				for (var qw = 0; qw < ag; qw++)
					if (0 === aT9[qw].id) {
						if (aT9[qw].aU === g.gZ.i2(aZ[y].username)) continue loop
					} else if (1 === aT9[qw].id && aT9[qw].aU === aZ[y].iy) continue loop;
				aZ[y] = aZ[--aY], aZ.pop()
			}
		}(aZ, aT9), aTD(aZ.length)))) : aSY(a9H)
	}, this.aRO = function(a9H) {
		var aT6 = aT7(a9H);
		if (aT6)
			for (var aGG = new RegExp("^[0-9]+$"), aY = aT6.length, y = 0; y < aY; y++) {
				var gF = aT6[y].substring(1),
					ag = gF.length;
				1 <= ag && ag <= 3 && aGG.test(gF) && (ag = parseInt(gF, 10), !isNaN(ag)) && 0 <= ag && ag < aX.data.aZ.length && (a9H = a9H.replace("@" + gF, "@" + aX.data.aZ[ag]))
			}
		return a9H
	}
}

function aTI() {
	var aTJ, aTK = 8,
		aTL = null;

	function aTQ(eJ, bw, cF) {
		bw *= 4;
		eJ[bw] = 255, eJ[1 + bw] = 255, eJ[2 + bw] = cF, eJ[3 + bw] = 255
	}

	function aTS(lX, aTT) {
		var bn, bo, kH, bw, aTU, aTV, oZ = aTK,
			wd = g.h.getImageData(lX, oZ, oZ),
			eJ = wd.data,
			ag = (oZ >> 1) - .5,
			aTX = g.ab.aTY(aTT, .5);
		for (g.ab.aTZ(aTT, aTX, 300) || g.ab.aTa(aTT, 100), bo = 0; bo < oZ; bo++)
			for (bn = 0; bn < oZ; bn++) aTV = (oZ - 1.5) * (oZ - 1.5) / 4, eJ[bw = 4 * (bo * oZ + bn)] = (aTU = (kH = (kH = bn - ag) * kH + (kH = bo - ag) * kH) <= (oZ - 4.5) * (oZ - 4.5) / 4 ? aTX : aTT)[0], eJ[1 + bw] = aTU[1], eJ[2 + bw] = aTU[2],
				eJ[3 + bw] = aTV < kH ? 0 : 255;
		lX.putImageData(wd, 0, 0)
	}
	this.f = function() {
		var cF, oZ, rL, lX, wd, eJ;
		(aTJ = aTJ || new Array(d2.hR)).fill(null), cF = 255, oZ = aTK + 4, rL = g.h.lW(oZ, oZ), lX = g.h.getContext(rL, !0), wd = g.h.getImageData(lX, oZ, oZ), aTQ(eJ = wd.data, oZ + 1, cF), aTQ(eJ, oZ + 2, cF), aTQ(eJ, 2 * oZ + 1, cF), aTQ(eJ,
				2 * oZ - 3, cF), aTQ(eJ, 2 * oZ - 2, cF), aTQ(eJ, 3 * oZ - 2, cF), aTQ(eJ, oZ * (oZ - 3) + 1, cF), aTQ(eJ, oZ * (oZ - 2) + 1, cF), aTQ(eJ, oZ * (oZ - 2) + 2, cF), aTQ(eJ, oZ * (oZ - 2) - 2, cF), aTQ(eJ, oZ * (oZ - 1) - 3, cF),
			aTQ(eJ, oZ * (oZ - 1) - 2, cF), lX.putImageData(wd, 0, 0), aTL = rL,
			function() {
				if (d2.gn)
					for (var rL = new Array(aL.hQ.length), aY = d2.hR, aTO = aTJ, hS = aL.hS, y = 0; y < aY; y++) {
						var vp = hS[y];
						rL[vp] || (rL[vp] = function(vp) {
							var rL = g.h.lW(aTK, aTK),
								lX = g.h.getContext(rL, !0),
								aZ = bK.s6;
							return aZ.set(aL.hP[vp]), aTS(lX, aZ), rL
						}(vp)), aTO[y] = rL[vp]
					}
			}()
	}, this.h8 = function() {
		var y, player, aTb, a45, dN, i5, aTd, aTf, aTg, jV = b5.ax.jV,
			jR = b5.ax.jR,
			jX = b5.ax.jX,
			ja = b5.ax.ja,
			aTh = aTJ,
			a04 = d2.ed,
			aY = b5.ax.jP,
			aJ5 = gG.gF,
			aJ6 = gG.ae,
			a5c = bR.bS << 4,
			ua = qn,
			bq = ua / aTK,
			dc = qm / ua,
			dd = qo / ua,
			kH = (aJ5 + qm) / ua - dc,
			kI = (aJ6 + qo) / ua - dd,
			lX = h9;
		for (lX.imageSmoothingEnabled = ua < 9, g.h.textAlign(lX, 1), g.h.textBaseline(lX, 1), y = 0; y < aY; y++) player = jR[y] >> 3, dN = jX[y], aTb = .9 + .1 * Math.log10(dN), a45 = (i5 = jV[y]) % a5c / 16 - aTb, i5 = aJ6 * (Math.floor(i5 /
			a5c) / 16 - aTb - dd) / kI, aTd = -2 * (aTg = ua * aTb) * (1 + (aTf = +(player === a04)) / 8), aTf = aTf * aTg / 4, (aTg = aJ5 * (a45 - dc) / kH) < aTd || i5 < aTd || aJ5 + aTf < aTg || aJ6 + aTf < i5 || (a45 = 2 * aTb * bq, aTd =
			aTb * ua, null === (aTf = aTh[player]) && (aTh[player] = aTf = function(player) {
				var rL = g.h.lW(aTK, aTK);
				return aTS(g.h.getContext(rL, !0), bE.s5(player)), rL
			}(player)), player === a04 && (lX.setTransform(a45, 0, 0, a45, aTg - 2 * a45, i5 - 2 * a45), lX.drawImage(aTL, 0, 0)), lX.setTransform(a45, 0, 0, a45, aTg, i5), lX.drawImage(aTf, 0, 0), (aTb = Math.floor(function(dN) {
				if (dN < 1e3) return .42;
				if (dN < 1e4) return .34;
				if (dN < 1e6) return .26;
				if (dN < 1e8) return .19;
				return .15
			}(dN) * aTd)) < 6) || (lX.setTransform(1, 0, 0, 1, 0, 0), lX.fillStyle = ja[y] ? dR.sl : dR.fa, lX.font = g.h.fn(1, aTb), lX.fillText(g.gZ.gb(dN), aTg + aTd, i5 + aTd + .1 * aTb));
		lX.imageSmoothingEnabled = !1, lX.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function jw() {
	function aTv(player, pc, aTl) {
		3 <= aTl && 2142 < e8.o4() && (pc === d2.hR || cV.cp[pc] < gA.gB(cV.cp[player], 20)) && aN.a4W(player, 20)
	}

	function aTx(player, dN, pc, aTl) {
		3 <= aTl && aTl < 6 && gA.gB(cV.cp[player], 8) > cV.cp[pc] && (dN = Math.max(gA.gB(11 * cV.cp[pc], 5), gA.gB(cV.cp[player], 10)));
		aTl = cV.ca[player].length;
		k6.jt.aU6(player, pc), k6.jt.aU7(player, pc, aTl, dN)
	}

	function aTu(player, dN) {
		var pc = d2.hR,
			aY = cV.ca[player].length;
		k6.jt.aU8(player), cV.ca[player].length !== aY && k6.jt.aU7(player, pc, aY, dN)
	}
	this.aCG = new Uint8Array(d2.hR), this.f = function() {
		this.aCG.fill(0)
	}, this.a4Z = function(player, dN) {
		var aTk, aTl, aTm, aTn;
		cc.a0H(player) && (aTk = gW.gX(player), 3 <= (aTl = aN.dN[player]) && aTl < 6 && (dN = Math.max(cV.cp[player] - aTk, dN)), aTm = cV.cl[player].length, aTn = cV.ck[player].length, 30 * cV.cW[player] > d2.gC && r1[player] < 10 && 100 *
			aTn <= aTm && aN.a4W(player, 10), d2.gn ? function(player, dN, aTl, aTk) {
				var pc;
				if (k6.jt.aTq(player, !1) || k6.jt.aTr(player, !1)) {
					if (!k6.jt.aTs(player))
						if (k6.jt.aTt()) aTu(player, dN), aTv(player, d2.hR, aTl);
						else {
							if (dJ.dK(aN.a4N[aTl])) pc = k6.jt.aTw(player);
							else {
								if (k6.jt.aTy() && dJ.dK(aN.a4L[aTl]) && k6.jt.aTz(), 6 === aTl) return aTx(player, dN, k6.jt.aU0(), aTl);
								pc = k6.jt.aU1(player)
							}
							aTx(player, dN, pc, aTl), aTv(player, pc, aTl)
						}
				} else b5.aDg.c8(player) || k6.jx.c8(player) ? k6.jv.aCG[player] = 1 : function(player, dN, aTl, aTk) {
					var y, ak, a7, dI = aL.dI,
						aU3 = dI[player];
					if (0 !== aU3) {
						var aU4 = cV.cp[player],
							cW = cV.cW;
						if (player < d2.g6 && (dN = aU4), !(aU4 < cW[player] || 5 === aTl && aU4 < aTk || 4 === aTl && aU4 < gA.gB(aTk, 2))) {
							var aY = g7.g8,
								gx = g7.gx,
								aCG = (y = dJ.fK(aY), k6.jv.aCG);
							for (ak = 0; ak < aY; ak++)
								if (a7 = gx[(ak + y) % aY], 1 === aCG[a7] && dI[a7] === aU3) return ee.a0E.aLQ(player, a7, dN)
						}
					}
				}(player, dN, aTl, aTk)
			}(player, dN, aTl, aTk) : (!aTn || aTm && (aTm < aTn && !dJ.fK(10) || 100 * aTn <= aTm && dJ.fK(3) || !dJ.fK(8))) && b5.aDg.c8(player) || function(player, dN, aTl) {
				k6.jt.aTq(player, !0) || k6.jt.aTr(player, !0) ? k6.jt.aTs(player) || (k6.jt.aTt() ? aTu(player, dN) : dJ.dK(aN.a4N[aTl]) ? aTx(player, dN, k6.jt.aTw(player), aTl) : 5 === aTl ? aTx(player, dN, k6.jt.aU5(), aTl) : (k6.jt
				.aTy() && dJ.dK(aN.a4L[aTl]) && k6.jt.aTz(), aTx(player, dN, 6 === aTl ? k6.jt.aU0() : k6.jt.aU1(player), aTl))) : k6.jx.c8(player)
			}(player, dN, aTl))
	}
}

function aBL() {
	var dc, dd, qp, qq, aU9 = 0,
		aUA = 0;

	function aUC() {
		return Math.pow(Math.pow(qp - dc, 2) + Math.pow(qq - dd, 2), .5)
	}

	function aUB(dx) {
		dc = gG.ld * dx.touches[0].clientX, dd = gG.ld * dx.touches[0].clientY, qp = gG.ld * dx.touches[1].clientX, qq = gG.ld * dx.touches[1].clientY
	}
	this.aMk = function(dx) {
		return 1 < dx.touches.length ? (aUA = e8.iR, aU9 = 3, aUB(dx), eD.a5(), !0) : (aU9 = 0, !1)
	}, this.aMl = function(dx) {
		var u7, yv, yw;
		return 0 !== d2.h5 && 1 < dx.touches.length && (aU9 = Math.max(aU9 - 1, 0), kq.re() && (u7 = aUC(), aUB(dx), dx = aUC(), yv = Math.floor((dc + qp) / 2), yw = Math.floor((dd + qq) / 2), iZ.aIP(yv, yw, Math.max(.125, dx) / Math.max(.125,
			u7)), e8.e9 = !0), !0)
	}, this.aN3 = function() {
		var bn, bo;
		return !!(aU9 && (aU9 = 0, e8.iR < aUA + 500)) && (bn = (dc + qp) / 2, bo = (dd + qq) / 2, eD.vo(bn, bo), eD.click(bn, bo, !0) && (e8.e9 = !0), !0)
	}
}

function aUD() {
	var aUE = [];
	this.f = function() {
		aUE = []
	}, this.fO = function() {
		return 65536 === aUE.length
	}, this.fN = function(aR9, aRA) {
		for (var fG = aUE, aY = fG.length, y = 0; y < aY; y++) {
			var cT = fG[y];
			if (cT[0] === aR9 && cT[cT.length - 1] === aRA) return y
		}
		return -1
	}, this.fQ = function(fF) {
		var aUF = new Uint32Array(fF.length);
		return aUF.set(fF), aUF.reverse()
	}, this.a0X = function(ub, a5u) {
		var aj = ub.length - 1,
			aUG = new Uint32Array(aj + a5u.length);
		return aUG.set(ub, 0), aUG.set(a5u, aj), aUG
	}, this.a0c = function(ub, a5u, aKF, bw, aUH) {
		aUH && (aKF = (a5u = this.fQ(a5u)).length - aKF - 2);
		aUH = a5u.subarray(aKF + 1 + (bw === a5u[aKF + 1])), bw = new Uint32Array(ub.length + aUH.length);
		return bw.set(ub, 0), bw.set(aUH, ub.length), bw
	}, this.fP = function(fF) {
		return aUE.push(fF), aUE.length - 1
	}, this.get = function(y) {
		return aUE[y]
	}, this.fI = function() {
		return aUE
	}, this.aUJ = function(aR9, aRA) {
		return null
	}
}

function aEA() {
	var aUK, aUL, aPU, zS, aUM;
	this.eC = new yX, aPU = new iG([.45, .27], [.5, .5], 2 / 3), aUL = [new q("⚔️<br>" + L(442), function() {
			aUN(0)
		}, dR.a7z), new q("🗡️<br>" + L(260), function() {
			aUN(1)
		}, dR.yh), new q("🔑<br>" + L(443), function() {
			aUN(2)
		}, dR.a8M), new q("☰<br>" + L(444), function() {
			aUN(3)
		}, dR.a7r), new q("", function() {
			t.z(12)
		}, dR.fb, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], zS = new tu(aV.aW.data[122]);
	for (var y = 0; y < aUL.length; y++) aUL[y].button.style.position = "absolute";

	function aUN(cF) {
		eH.eV.setState(10), qY.dm() || qY.dn(), 0 === cF ? t.ax.a6v() : 1 === cF ? (a0z.o1.cH(aV.aW.data[156].value, 1) || d2.o8.aHV(), t.z(19)) : 2 === cF ? 0 !== eH.id || aV.aW.data[140].value ? t.z(8, t.a0, new a1(16)) : t.ax.el(t.a0, 16) : 3 ===
			cF && t.z(1)
	}
	zS.dx.style.position = "absolute", zS.dx.style.textAlign = "center", zS.dx.placeholder = L(445), this.show = function() {
		av.setState(0), eH.eV.setState(12), this.eC.show(), aUL[4].f5(g.color.aUO(aV.aW.data[121].value)), this.resize(), document.body.appendChild(zS.dx);
		for (var y = 0; y < aUL.length; y++) document.body.appendChild(aUL[y].button);
		1 !== eH.id || eH.eU < 5 || (aUM && e8.iR > aUM + 144e5 ? eH.p1.setState(14) : aUM = e8.iR)
	}, this.a5 = function() {
		this.eC.a5(), document.body.removeChild(zS.dx);
		for (var y = 0; y < aUL.length; y++) document.body.removeChild(aUL[y].button)
	}, this.resize = function() {
		this.eC.resize(), this.eC.resize(), aPU.resize();
		var gap = .5 * j.gap,
			a1y = 10 / 99 * .84 * aPU.gF,
			aUR = .16 * aPU.ae,
			aIS = .19 * aPU.gF,
			bn = aPU.bn + aIS,
			a1y = aPU.bo + a1y + 3 * gap,
			gF = .5 * (aPU.gF - gap) - aIS,
			aIS = aPU.gF - 2 * aIS - aUR - gap,
			aIS = (g.h.lZ(zS.dx, bn, a1y, aIS, aUR), g.h.lZ(aUL[4].button, bn + aIS + gap, a1y, aUR, aUR), .5 * (aPU.bo + aPU.ae - (a1y += aUR + gap) - gap));
		g.h.lZ(aUL[0].button, bn, a1y, gF, aIS), g.h.lZ(aUL[1].button, bn + gF + gap, a1y, gF, aIS), g.h.lZ(aUL[2].button, bn, a1y + aIS + gap, gF, aIS), g.h.lZ(aUL[3].button, bn + gF + gap, a1y + aIS + gap, gF, aIS);
		g.h.lZ(aUL[5].button, bn, a1y + aIS * 2 + gap * 2, gF * 2 + gap, aIS / 3);
		g.h.lZ(aUL[6].button, bn, a1y + aIS * 2.33 + gap * 3, gF * 2 + gap, aIS / 3);
		for (var y = 0; y < aUL.length; y++) aUL[y].button.style.font = g.h.fn(0, g.h.li(.065 * aPU.ae)), g.h.fo(aUL[y].button, 5);
		zS.dx.style.font = g.h.fn(0, g.h.li(.08 * aPU.ae)), g.h.fo(zS.dx, 5)
	}, this.h8 = function() {
		if (av.aUS(), no.h8(), aQ.h8(), eF.h8(), qY.dm()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aPU.gF * 0.03);
				h9.font = g.h.fn(1, size);
				h9.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = h9.measureText(text).width;
				h9.textAlign = "left";
				h9.textBaseline = "middle";
				h9.fillText(text, h9.canvas.width - textLength - size / 2, size);
			};
			h9.imageSmoothingEnabled = !1;
			var a7 = qY.dl("territorial.io"),
				hv = .84 * aPU.gF / a7.width;
			h9.setTransform(hv, 0, 0, hv, aPU.bn + .08 * aPU.gF, aPU.bo), aUK = aUK || g.e0.e7(a7, g.e0.a8m, [0, 0, 0]);
			for (var bn = -1; bn <= 1; bn += 2)
				for (var bo = -1; bo <= 1; bo += 2) h9.drawImage(aUK, bn, bo);
			h9.drawImage(a7, 0, 0), h9.imageSmoothingEnabled = !0;
			var hc = qY.dl("logo"),
				aUT = .6666 * hv * a7.height / hc.height,
				qp = .5 * gG.gF,
				qq = aPU.bo + .5 * hv * a7.height - .5 * aUT * hc.height;
			h9.setTransform(aUT, 0, 0, aUT, qp - .6 * hv * a7.width, qq), h9.drawImage(hc, 0, 0), h9.setTransform(aUT, 0, 0, aUT, qp + .6 * hv * a7.width - aUT * hc.width, qq), h9.drawImage(hc, 0, 0), h9.setTransform(1, 0, 0, 1, 0, 0), h9
				.imageSmoothingEnabled = !0
		}
	}
}

function aB8() {
	var kV = 0;
	this.f = function() {
		zl.f(), kV = 0
	}, this.setState = function(aUU) {
		kV = aUU
	}, this.aw = function() {
		return kV
	}, this.o7 = function() {
		this.setState(8), t.eY()
	}, this.a6 = function(dx) {
		if (!bR.wi) return !1;
		if (!(e8.iR < 400)) {
			if ("Enter" === dx.key || "Escape" === dx.key) {
				if (this.aUV()) return !0;
				if ("Enter" === dx.key) {
					if (0 === kV) return !0;
					if (7 === kV) return !0
				}
			}
			return !1
		}
	}, this.zp = function() {
		aAl.resize()
	}, this.aUV = function() {
		return !!aAl.a5()
	}, this.iS = function(bn, bo) {
		!bR.wi || aAl.iS(bn, bo) || 6 === kV && zN.iS(bn, bo) || eF.iS(bn, bo) || no.iS(bn, bo)
	}, this.qf = function(bn, bo) {
		!no.aHo && zl.qf(bn, bo, !0) || no.qf(bn, bo)
	}, this.click = function(bn, bo) {
		no.aH9()
	}, this.aEN = function(bn, bo, deltaY) {}, this.zq = function() {
		zl.aHu(), e8.e9 = !0
	}, this.h8 = function() {
		8 !== kV && 10 !== kV && (h9.imageSmoothingEnabled = !0, this.a3A(), 0 !== kV && (no.h8(), aQ.h8(), this.aUS(), eF.h8()), 0 !== kV && 6 === kV && zN.h8(), aAl.h8(), t.h8())
	}, this.a3A = function() {
		var aUX, aUW;
		if (__fx.makeMainMenuTransparent) h9.clearRect(0, 0, gG.gF, gG.ae);
		else bR.wi ? (aUW = gG.gF / bR.bS, aUX = gG.ae / bR.bU, h9.setTransform(aUW = aUX < aUW ? aUW : aUX, 0, 0, aUW, Math.floor((gG.gF - aUW * bR.bS) / 2), Math.floor((gG.ae - aUW * bR.bU) / 2)), h9.drawImage(bR.wj, 0, 0), h9.setTransform(1,
			0, 0, 1, 0, 0), h9.fillStyle = dR.a7i) : h9.fillStyle = dR.dS, h9.fillRect(0, 0, gG.gF, gG.ae)
	}, this.aUS = function() {
		var bo = Math.floor(.3 * gG.ae),
			canvas = qY.dl("territorial.io"),
			rO = (rO = 1.75 * gG.ae / canvas.width) * canvas.width < .98 * gG.gF ? .98 * gG.gF / canvas.width : rO,
			bn = (h9.globalAlpha = .15, h9.imageSmoothingEnabled = !1, Math.floor(.5 * (gG.gF - rO * canvas.width))),
			bn = Math.floor(bn / rO),
			bo = Math.floor(bo - .5 * canvas.height * rO),
			bo = Math.floor(bo / rO);
		h9.setTransform(rO, 0, 0, rO, bn, bo), h9.drawImage(canvas, bn, bo), h9.setTransform(1, 0, 0, 1, 0, 0), h9.globalAlpha = 1, h9.imageSmoothingEnabled = !0
	}
}

function aMY() {
	this.vj = function(aUY, cF, vi) {
		var oZ = aUY.height,
			rL = g.h.lW(oZ, oZ),
			lX = g.h.getContext(rL);
		return function(gF, lX, vi) {
			lX.fillStyle = vi, lX.beginPath(), lX.arc(gF / 2, gF / 2, .47 * gF, 0, 2 * Math.PI), lX.fill()
		}(oZ, lX, vi), lX.drawImage(aUY, -cF * oZ, 0), rL
	}, this.aGi = function(aUa) {
		var lX, wd, oZ = aUa.height;
		return aUa.width === oZ && (wd = (lX = g.h.getContext(aUa, !0)).getImageData(0, 0, oZ, oZ), g.e0.a8n(wd.data, oZ, oZ, .9), lX.putImageData(wd, 0, 0)), aUa
	}
}

function ti(b, to) {
	var d = document.createElement("div");

	function qL() {
		var y, la, ae, kD, bW, aUc = gG.ld * d.offsetWidth,
			aUe = new Float64Array(function(aUc) {
				var gF = .25 * g.h.lc(.6) * gG.gH;
				return Math.max(Math.floor(aUc / gF), 1)
			}(aUc)),
			k = j.k,
			aUf = (aUc - (aUe.length + 1) * j.gap) / (aUe.length * gG.ld);
		for (aUe.fill(k), y = 0; y < to.length; y++) la = (bW = to[y].d).style, ae = g.ab.min(aUe), kD = aUe.indexOf(ae), la.top = g.h.i(ae), la.left = g.h.i(k + kD * (aUf + k)), la.width = g.h.i(aUf), g.h.fo(bW, 5), aUe[kD] += bW.offsetHeight + 3 *
			k;
		d.style.height = g.h.i(g.ab.max(aUe) - 2 * k)
	}
	this.e = d, this.tm = to, this.resize = function() {
		var y;
		for (y = 0; y < to.length; y++) to[y].resize();
		qL(), qL()
	}, d.style.width = "100%", d.style.maxWidth = "100%", b.style.lineHeight = "1.5em", b.style.overflowX = "hidden", b.style.overflowY = "auto";
	for (var y = 0; y < to.length; y++) d.appendChild(to[y].d);
	b.appendChild(d)
}

function aBh() {
	this.aUg = 0, this.aUh = 0, this.aUi = 0, this.aUj = 0, this.aUk = 0, this.aUl = 0, this.sM = [0, 0, 0, 0], this.aIU = function() {
		this.aUg = iZ.s8(), this.aUh = iZ.iI(), this.aUi = -this.aUg, this.aUj = -this.aUh, this.aUk = gG.gF / qn, this.aUl = gG.ae / qn, this.sM[0] = Math.floor(this.aUi), this.sM[1] = Math.floor(this.aUj), this.sM[2] = Math.floor(this.sM[0] +
			this.aUk + 1), this.sM[3] = Math.floor(this.sM[1] + this.aUl + 1), sJ.aUm = !0
	}
}

function aEK() {
	var yB, yC, yD, to;

	function yE() {
		yH(), 2 !== d2.data.iIncomeType && (d2.data.iIncomeData = null), t.yI()[19] = null, t.u()
	}

	function yH() {
		2 === d2.data.iIncomeType && g.ab.yK(yD.nW(), d2.data.iIncomeData, 255)
	}
	this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(267), [new q("⬅️ " + L(4), yE)]), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(157), L(158), L(117)],
			value: d2.data.iIncomeType
		}, function(cF) {
			yH(), 2 !== cF || d2.data.iIncomeData || (d2.data.iIncomeData = new Uint8Array(d2.hR), d2.data.iIncomeData.fill(32)), d2.data.iIncomeType = cF, t.z(27)
		})), to.push(jk)
	}(to = []), function(to) {
		var jk;
		1 === d2.data.iIncomeType && ((jk = new tr).ts("Value"), jk.tt(new tu({
			cF: -1,
			value: d2.data.iIncomeValue
		}, 1, 0, function(dx) {
			var value = gA.yT(Math.floor(dx.target.value), 0, 255);
			dx.target.value = d2.data.iIncomeValue = value
		})), to.push(jk))
	}(to), function(to) {
		var jk;
		2 === d2.data.iIncomeType && ((jk = new tr).ts("Data"), (yD = new nK(0, 1, 0, 1)).nU(g.gZ.yR(d2.data.iIncomeData, 4)), jk.tt(yD), to.push(jk))
	}(to), to))
}

function jr() {
	var aUn = new Uint16Array(d2.hR);

	function aUu(player, aUs) {
		for (var aY = bK.a3O[0], aRV = bK.aRV, a78 = -1, ht = d2.hR, y = 0; y < aY; y++) {
			var hl, cT = aRV[y];
			mP.pb(player, cT) && (hl = b9.bm(aUs, b9.zE(cT)), -1 === a78 || hl < a78) && (a78 = hl, ht = cT)
		}
		return ht
	}

	function aUw(aUt, aUs) {
		if (aUt === d2.hR) return 0;
		var cl = cV.cl[aUt],
			ag = cl.length;
		if (0 === ag) return 0;
		for (var aY = Math.min(ag, 10), ht = 0, a78 = b9.bm(cl[ht] >> 2, aUs), y = 0; y < aY; y++) {
			var fJ = dJ.fK(ag),
				hl = b9.bm(cl[fJ] >> 2, aUs);
			hl < a78 && (a78 = hl, ht = fJ)
		}
		return cl[ht] >> 2
	}

	function aUx(player, aUs, pc, aV0) {
		var aV1;
		(aV0 === d2.hR || (aV1 = b9.zE(pc), aV0 = b9.zE(aV0), b9.bm(aUs, aV1) < b9.bm(aUs, aV0))) && (aUn[player] = pc)
	}
	this.f = function() {
		aUn.fill(d2.hR)
	}, this.k2 = function() {
		if (e8.o4() % 109 == 9 && !(g7.g8 < 20) && d2.gn && !(go.gp() < gA.gB(8 * d2.gC, 10))) {
			var a2s = go.y7();
			if (aL.hQ[a2s]) {
				go.aS9(a2s);
				var aY = bK.a3O[0];
				if (0 !== aY)
					for (var aZ = bK.a3N, gx = g7.gx, g8 = g7.g8, aUo = aUn, fJ = dJ.fK(aY), y = 0; y < g8; y++) {
						var ub = gx[y],
							a5u = aZ[fJ];
						g.cn.v8(ub, a5u) && 512 === aUo[ub] && (aUo[ub] = a5u, fJ = (fJ + 1) % aY)
					}
			}
		}
	}, this.c8 = function(player) {
		var aUs, aUv, aUt, aUp = function(player) {
			var pc = aUn[player];
			if (pc !== d2.hR) {
				if (g.cn.y1(pc) && cV.cl[pc]) return pc;
				aUn[player] = d2.hR
			}
			return d2.hR
		}(player);
		return function(player) {
			for (var y5 = g7.gx, ag = g7.g8, aY = Math.min(ag, ag < 17 && 5 === dJ.fK(20) ? 1 : 16), kD = dJ.fK(ag), aRV = bK.aRV, cl = cV.cl, aj = 0, y = 0; y < aY; y++) {
				var cT = y5[(y + kD) % ag];
				cT !== player && cl[cT].length && (aRV[aj++] = cT)
			}
			bK.a3O[0] = aj
		}(player), 0 !== bK.a3O[0] && (0 < (aUv = aUw(aUt = aUu(player, aUs = b9.zF(player)), aUs)) && b5.k3.k4(player, b5.bH.aLD(aUv, aUs)) ? (aUx(player, aUs, aUt, aUp), !0) : 0 < (aUt = function(player, aUs) {
			for (var aY = bK.a3O[0], aRV = bK.aRV, aUo = aUn, kD = 0, y = 0; y < aY; y++) {
				var cT = aRV[y],
					cT = aUo[cT];
				cT !== d2.hR && g.cn.y1(cT) && player !== cT && mP.pb(player, cT) && (aRV[kD++] = cT)
			}
			return 0 !== (bK.a3O[0] = kD) ? aUw(aUu(player, aUs), aUs) : 0
		}(player, aUs)) && b5.k3.k4(player, b5.bH.aLD(aUt, aUs)) ? (aUx(player, aUs, bE.pR(aUt << 2), aUp), !0) : !!(0 < (aUv = aUw(aUp, aUs)) && b5.k3.k4(player, b5.bH.aLD(aUv, aUs))))
	}
}

function o2() {
	var aV3 = 0;

	function aV8(du, id) {
		aV3 || (id ? 1 === id ? cD.a8w = L(447) + ": " + du : t.z(4, 3, new cN(L(448), du, 1)) : t.z(4, 3, new cN("⚠️ " + L(446), du, 1)))
	}
	this.cH = function(du, aV4) {
		var fi;
		return aV3 = aV4, nu.tk.aQ4(nu.tk.aPT(nu.tk.aV5(du))), cD.a8w = "", !(! function() {
			if (cK.size < 10) aV8("File Too Small");
			else {
				var aVA = cK.cL(12),
					mE = (aVA !== f1.rVersion && aV8("Incompatible Version   Required: " + f1.rVersion + ("   Found: " + aVA) + ("   Compatible at territorial.io/" + aVA), 1), cK.cL(12)),
					aVB = cK.cL(31);
				if (aVB !== cK.size) aV8("Size Error: " + aVB + " " + cK.size);
				else if (function(ae, aVA) {
						for (var cT = cK.lK, aY = cK.size, mE = aVA, y = 3; y < aY; y++) mE = mE + cT[y] & 4095;
						return mE === ae || (aV8("Hash Error: " + mE + " " + ae + " " + aY), !1)
					}(mE, aVA)) return 1
			}
			return
		}() || (aV4 = cK, (fi = d2.data = new a4p).mapType = aV4.cL(2), fi.mapProceduralIndex = aV4.cL(8), fi.mapRealisticIndex = aV4.cL(8), fi.mapSeed = aV4.cL(14), fi.mapName = aV4.aAH(5), 2 === fi.mapType && aV4.aAI(), fi
			.passableWater = aV4.cL(1), fi.passableMountains = aV4.cL(1), fi.playerCount = aV4.cL(10), fi.humanCount = aV4.cL(10), fi.selectedPlayer = aV4.cL(9), fi.gameMode = aV4.cL(1), fi.playerMode = aV4.cL(2), fi.battleRoyaleMode =
			aV4.cL(2), fi.numberTeams = aV4.cL(4), fi.isZombieMode = aV4.cL(1), fi.isContest = aV4.cL(1), fi.isReplay = aV4.cL(1), fi.elo = aV4.aAC(2, 14, 2), fi.colorsType = aV4.cL(1), fi.colorsPersonalized = aV4.cL(1), fi.colorsData =
			aV4.aAC(10, 18, 512), fi.selectableColor = aV4.cL(1), fi.teamPlayerCount = aV4.aAC(4, 10, 9), fi.neutralBots = aV4.cL(1), fi.botDifficultyType = aV4.cL(2), fi.botDifficultyValue = aV4.cL(4), fi.botDifficultyTeam = aV4.aAC(4,
				4, 9), fi.botDifficultyData = aV4.aAC(10, 4, 512), fi.spawningType = aV4.cL(2), fi.spawningSeed = aV4.cL(14), fi.spawningData = aV4.aAC(11, 12, 1024), fi.selectableSpawn = aV4.cL(1), fi.playerNamesType = aV4.cL(2), fi
			.playerNamesData = aV4.aAF(10, 5, 512), fi.selectableName = aV4.cL(1), fi.aIncomeType = aV4.cL(2), fi.aIncomeValue = aV4.cL(8), fi.aIncomeData = aV4.aAC(10, 8, 512), fi.tIncomeType = aV4.cL(2), fi.tIncomeValue = aV4.cL(8), fi
			.tIncomeData = aV4.aAC(10, 8, 512), fi.iIncomeType = aV4.cL(2), fi.iIncomeValue = aV4.cL(8), fi.iIncomeData = aV4.aAC(10, 8, 512), fi.sResourcesType = aV4.cL(2), fi.sResourcesValue = aV4.cL(11), fi.sResourcesData = aV4.aAC(10,
				11, 512), ! function() {
				var i5 = cK,
					qX = i5.cL(5),
					aVD = i5.cL(30),
					aVE = i5.cL(30);
				if (aVD + aVE > 8 * i5.size) return void aV8("Corrupted File");
				return function(aY) {
						var aVH = new Uint8Array(aY),
							aVI = new Uint16Array(aY),
							aVJ = new Uint32Array(aY),
							aVK = new Uint32Array(aY);
						a0z.nx.a0j = aVH, a0z.nx.a0k = aVI, a0z.nx.a0l = aVJ, a0z.nx.a0m = aVK;
						for (var y = 0; y < aY; y++) {
							var id = cK.cL(4);
							aVH[y] = id, aVI[y] = cK.cL(9), 0 === id ? aVJ[y] = cK.cL(22) : 1 === id ? (aVJ[y] = cK.cL(10), aVK[y] = cK.cL(10)) : 2 === id ? (aVJ[y] = cK.cL(10), aVK[y] = cK.cL(9)) : 3 === id ? (aVJ[y] = cK.cL(10), aVK[
								y] = cK.cL(27)) : 4 === id ? (aVJ[y] = cK.cL(10), aVK[y] = cK.cL(16)) : 5 === id || 6 === id ? aVJ[y] = cK.cL(10) : 7 === id ? aVJ[y] = cK.cL(1) : 10 === id && (aVJ[y] = cK.cL(20), aVK[y] = cK.cL(22))
						}
					}(aVD),
					function(aY, qX) {
						var a0n = new Uint8Array(aY),
							a0o = new Array(aY);
						a0o.fill(0), a0z.nx.a0n = a0n, a0z.nx.a0o = a0o;
						for (var y = 0; y < aY; y++) a0n[y] = cK.cL(1), a0o[y] = cK.cL(qX)
					}(aVE, qX), 1
			}()) || (cK.cF < 8 * cK.size - 13 || cK.cF > 8 * cK.size ? (aV8("Out Of Bounds Error: " + cK.cF + " " + 8 * cK.size), 1) : (a0z.nx.a0p = du, 2 === d2.data.mapType && (aV8("Load base64 image...", 2), 1))))
	}, this.a4x = function(oy, aV9) {
		var rL = document.createElement("canvas"),
			lX = rL.getContext("2d");
		if (rL.width = oy.width, rL.height = oy.height, lX.drawImage(oy, 0, 0), d2.data.canvas = rL, aV3 || aV9) return d2.h5 ? void 0 : (d2.data.mapType = 2, t.eY(), void t.z(19));
		a0z.o6()
	}
}

function aBf() {
	this.id = 0, this.eU = 0, this.aAU = null, this.p1 = null, this.aN7 = null, this.aAV = null, this.eV = new aAT, this.f = function() {
		var self, eU;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eU = Android.getVersion()) < 12 || (self.eU = eU, self.id = 1, self.p1 = Android),
			function(self) {
				var eU;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aN7 = mwIOSdataX, self.aAV = window.webkit.messageHandlers.iosCommandA, eU =
					self.aN7.version, self.eU = eU ? Number(eU) : 0)
			}(this),
			function(self) {
				var aAU;
				try {
					if (!(aAU = window.localStorage)) return;
					aAU.setItem("tls7", "1"), aAU.removeItem("tls7")
				} catch (error) {
					return
				}
				self.aAU = aAU
			}(this)
	}
}

function aBO() {
	this.oi = 0;
	var aVP, aVQ, aVR, aVS, aVT, aVU = this.aVO = 0;

	function aVW() {
		aVS = aVT = null, aVU = 0
	}
	this.f = function(aCg, aCj, aCk) {
		t.eY(), fj.fp(), av.setState(10), aVS = aCg, aVT = aCj, aVU = aCk, this.oi = aCg.oi, this.aVO = aCk, aVP = 0, aVQ = e8.iR + 4500, an.ax.mF = aCg.mF, an.ax.lJ === aCg.mF ? (console.log("direct pass"), aVR = 0) : (console.log(
			"delayed pass"), an.ax.close(an.ax.lJ, 3247), aVR = 2, an.ax.xP(aCg.mF, 5) && an.nk.nl()), h9.imageSmoothingEnabled = !0, av.a3A();
		aCj = qY.dl("loading"), aCk = (eH.eV.fT() ? .396 : .25) * gG.gH / aCj.width;
		h9.setTransform(aCk, 0, 0, aCk, Math.floor((gG.gF - aCk * aCj.width) / 2), Math.floor((gG.ae - aCk * aCj.height) / 2)), h9.imageSmoothingEnabled = !1, h9.drawImage(aCj, 0, 0), h9.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a13 = function() {
		0 < aVR && e8.iR > aVQ && (aVR--, aVQ += 4500, 0 === e8.aPk) && 0 === e8.o4() && an.ax.xP(an.ax.mF, 5)
	}, this.aVX = function() {
		return 10 === av.aw() && (fj.aF5.aCo(aVS, aVT, aVU), aVW(), !0)
	}, this.aCU = function() {
		10 === av.aw() && 2 <= ++aVP && (fj.aF5.aCo(aVS, aVT, aVU), aVW())
	}
}

function aMZ() {
	this.lF = function(aU) {
		return [aU >> 12 & 63, aU >> 6 & 63, 63 & aU]
	}, this.aVZ = function(aU) {
		for (var aZ = this.lF(aU), y = 0; y < 3; y++) aZ[y] = ~~(4.05 * aZ[y]);
		return aZ
	}, this.aUO = function(aU) {
		aU = this.aVZ(aU);
		return g.color.a7h(aU[0], aU[1], aU[2])
	}, this.aVa = function(aZ) {
		for (var y = 0; y < 3; y++) aZ[y] = ~~(aZ[y] / 4.04);
		return (aZ[0] << 12) + (aZ[1] << 6) + aZ[2]
	}, this.a7h = function(jC, h3, ak) {
		return "rgb(" + jC + "," + h3 + "," + ak + ")"
	}, this.sa = function(jC, h3, ak, qw) {
		return "rgba(" + jC + "," + h3 + "," + ak + "," + qw.toFixed(3) + ")"
	}, this.aA4 = function(a7) {
		for (var aZ = a7.split("(")[1].split(","), s6 = bK.s6, y = 0; y < 3; y++) s6[y] = parseInt(aZ[y]);
		return 4 === aZ.length ? s6[3] = 255 * parseFloat(aZ[3].slice(0, -1)) : s6[3] = 255, s6
	}, this.fh = function(aVb, bW) {
		for (var aZ = aVb.slice(aVb.indexOf("(") + 1, aVb.indexOf(")")).split(","), s6 = bK.s6, y = 0; y < 3; y++) s6[y] = gA.yT(parseInt(aZ[y].trim(), 10) + bW, 0, 255);
		return 3 === aZ.length ? this.a7h(s6[0], s6[1], s6[2]) : (aVb = parseFloat(aZ[3].trim()), this.sa(s6[0], s6[1], s6[2], aVb = 0 === aVb ? .3 : aVb))
	}, this.aVc = function(aZ) {
		for (var du = "#", y = 0; y < 3; y++) {
			var jC = aZ[y].toString(16);
			du += 1 === jC.length ? "0" + jC : jC
		}
		return du
	}, this.aVd = function(du) {
		var jC, h3;
		return du.length < 7 ? dR.dS : (jC = parseInt(du.slice(1, 3), 16), h3 = parseInt(du.slice(3, 5), 16), du = parseInt(du.slice(5, 7), 16), this.a7h(jC, h3, du))
	}
}

function aBV() {
	this.size = 0, this.cF = 0, this.lK = null, this.f = function(lK) {
		this.cF = 0, this.lK = lK, this.size = lK.length
	}, this.kv = function(aAA) {
		return this.f(new Uint8Array(this.aAB(aAA))), this.lK
	}, this.fp = function() {
		this.lK = null
	}, this.lC = function(size, aD1) {
		for (var lK = this.lK, re = this.cF + size - 1, y = this.cF; y <= re; y++) lK[y >> 3] |= (aD1 >> re - y & 1) << 7 - (7 & y);
		this.cF += size, this.cF > 8 * this.size && console.error("Wrapper Overflow")
	}, this.a8c = function(size, aD1) {
		var ak = size >> 1,
			bW = 1 << ak;
		this.lC(size - ak, gA.gB(aD1, bW)), this.lC(ak, aD1 % bW)
	}, this.aVe = function(size) {
		for (var lK = this.lK, re = this.cF + size, y = this.cF; y < re; y++) lK[y >> 3] &= 255 ^ 128 >>> (7 & y)
	}, this.aAB = function(aAA) {
		return aAA + 7 >> 3
	}, this.aVf = function(aZ, hp, re, aVg) {
		for (var y = hp; y < re; y++) this.lC(aVg, aZ[y])
	}
}

function aGP() {
	this.a7J = function(l9, a7I) {
		lA.kv(8), lA.lC(1, 0), lA.lC(6, 4), lA.lC(1, a7I ? 1 : 0), an.ax.send(l9, lA.lK)
	}, this.nl = function() {
		lA.kv(58), lA.lC(1, 0), lA.lC(6, 5), lA.lC(8, an.ax.lJ), lA.lC(10, a12.oi), lA.lC(9, a12.aVO), lA.lC(10, f1.lD), lA.lC(14, f1.mG), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJB = function(bw) {
		lA.kv(27), lA.lC(1, 1), lA.lC(4, 0), lA.lC(22, bw), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJC = function(z6, pc) {
		lA.kv(25), lA.lC(1, 1), lA.lC(4, 1), lA.lC(10, z6), lA.lC(10, pc), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJD = function(z6, a3g) {
		lA.kv(24), lA.lC(1, 1), lA.lC(4, 2), lA.lC(10, z6), lA.lC(9, a3g), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJE = function(z6, aCJ) {
		lA.kv(42), lA.lC(1, 1), lA.lC(4, 3), lA.lC(10, z6), lA.lC(27, aCJ), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJF = function(z6, kN) {
		lA.kv(31), lA.lC(1, 1), lA.lC(4, 4), lA.lC(10, z6), lA.lC(16, kN), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJG = function(pc) {
		lA.kv(15), lA.lC(1, 1), lA.lC(4, 5), lA.lC(10, pc), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJH = function(cF) {
		lA.kv(15), lA.lC(1, 1), lA.lC(4, 6), lA.lC(10, cF), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJI = function(aCN) {
		lA.kv(6), lA.lC(1, 1), lA.lC(4, 7), lA.lC(1, aCN), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJJ = function() {
		lA.kv(5), lA.lC(1, 1), lA.lC(4, 8), an.ax.send(an.ax.mF, lA.lK)
	}, this.aJK = function(z6, bw, pc) {
		lA.kv(47), lA.lC(1, 1), lA.lC(4, 10), lA.lC(10, z6), lA.lC(10, pc), lA.lC(22, bw), an.ax.send(an.ax.mF, lA.lK)
	}, this.a70 = function(aVh, aVi) {
		lA.kv(24), lA.lC(1, 1), lA.lC(4, 15), lA.lC(9, aVi), lA.lC(10, aVh), an.ax.send(an.ax.mF, lA.lK)
	}, this.a72 = function(a2l) {
		lA.kv(14), lA.lC(1, 1), lA.lC(4, 14), lA.lC(9, a2l), an.ax.send(an.ax.mF, lA.lK)
	}, this.a74 = function(aVj, target) {
		var y, aY = aVj.length;
		for (lA.kv(14 + 9 * aY), lA.lC(1, 1), lA.lC(4, 13), lA.lC(9, target), y = 0; y < aY; y++) lA.lC(9, aVj[y]);
		an.ax.send(an.ax.mF, lA.lK)
	}
}

function aBP() {
	var aVk = 0,
		aVl = new Uint16Array(64);

	function aVn(vp) {
		aVk -= 2;
		for (var y = vp; y < aVk; y += 2) aVl[y] = aVl[y + 2], aVl[y + 1] = aVl[y + 3]
	}
	this.f = function() {
		aVk = 0
	}, this.c8 = function() {
		var y, pc, z6;
		if (0 !== aVk)
			if (0 === cV.dX[d2.ed]) aVk = 0;
			else if (0 === cc.t7(d2.ed)) aVk = 0;
		else
			for (y = aVk - 2; 0 <= y; y -= 2)(pc = aVl[y]) < d2.hR && 0 === cV.dX[pc] ? aVn(y) : (z6 = aVl[y + 1], (pc >= d2.hR && mP.pe(d2.ed) || pc < d2.hR && mP.pl(d2.ed, pc)) && (ee.ef.sz(z6, pc), aVn(y)))
	}, this.uf = function(pc, z6) {
		! function(pc, z6) {
			for (var y = 0; y < aVk; y += 2)
				if (aVl[y] === pc) return aVl[y + 1] = Math.min(aVl[y + 1] + z6, 1023), 1;
			return
		}(pc, z6) && 64 !== aVk && (aVl[aVk] = pc, aVl[aVk + 1] = z6, aVk += 2)
	}
}

function aKr() {
	var aVp, aVq, aVr, aPk, aVs, cF = 0,
		iR = e8.iR;

	function aVv() {
		! function() {
			if (!d2.gQ) return;
			if (d2.g5) return;
			if (2 !== d2.h5)
				if (aVs % 7 != 0) aVs++;
				else if (aPk === d2.h7) {
				if (!aVy()) return;
				d9.h2(aPk), d2.aAQ.c8()
			} else {
				if (!aVy()) return;
				aVs++, aPk++, qg.qZ(), qg.gR(!0)
			}
			return 1
		}() && aVy() && a0t()
	}

	function aVw() {
		cF = 0, (d2.gQ ? (e8.e9 = d9.h2(aPk - (aVs % 7 == 0 ? 0 : 1) + aVs % 7 / 7) || e8.e9, a15) : eb.eh || !zm.iF ? a15 : (e8.e9 = !0, a14))()
	}

	function aVy() {
		var y, aY, aVz = a0z.nx.a0j,
			wk = a0z.nx.a0k,
			wu = a0z.nx.a0l,
			zx = a0z.nx.a0m,
			aW0 = a0z.nx.a0n,
			aW1 = a0z.nx.a0o;
		if (!(aVp >= aW1.length)) {
			if (aW1 = aW1[aVp], aW0[aVp]) {
				for (aY = aVq + aW1, y = aVq; y < aY; y++) ee.aPo.aBz(aVz[y], wk[y], wu[y], zx[y]);
				aVq += aW1, aVp++
			} else ++aVr >= aW1 && (aVp++, aVr = 0);
			return 1
		}
		cD.a58("Replay file smaller than expected."), zm.iU(!1), d2.h5 = 2
	}
	this.aCT = 0, this.f = function() {
		aVs = aPk = aVr = aVq = aVp = 0
	}, this.c8 = function() {
		var a5z;
		gG.c8(), zm.iH() < 1.7 ? 0 === cF ? e8.iR >= iR && (a5z = e8.h1 / zm.iH(), iR += a5z * Math.floor(1 + (e8.iR - iR) / a5z), 2 === d2.h5 || eb.eh || !zm.iF ? a0s() : (aVv(), sJ.aPp()), cF++) : aVw() : function() {
			var a5z;
			if (e8.iR >= iR)
				if (2 === d2.h5 || eb.eh || !zm.iF) a0s(), iR = e8.iR;
				else {
					for (a5z = e8.h1 / zm.iH(), 16 < (e8.iR - iR) / a5z && (iR = e8.iR - 16 * a5z); e8.iR >= iR && 2 !== d2.h5;) iR += a5z, aVv();
					sJ.aPp()
				} aVw()
		}(), a10(), e8.e9 && (e8.e9 = !1, a38())
	}, this.aS3 = function() {
		a0z.nx.a0o.length - aVp <= 2 || cD.a58("Replay file larger than expected.")
	}
}

function aB() {
	this.aZ = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.zV = function() {
		for (var aW2 = [], aZ = this.aZ, aY = aZ.length, y = 0; y < aY; y++) aW2.push(aZ[y]);
		var uC = aV.aW.data[12].n2;
		for (y = 0; y < aY; y++)
			if (aW2[y] === uC) {
				aW2.splice(y, 1), aY--;
				break
			} aW2.sort(), aY++, aW2.unshift(uC);
		try {
			if ("undefined" == typeof Intl) return aW2;
			for (y = 0; y < aY; y++) {
				var du = new Intl.DisplayNames([aW2[y]], {
					type: "language"
				}).of(aW2[y]);
				du !== aW2[y] && (aW2[y] = aW2[y] + ": " + du)
			}
		} catch (dx) {
			console.log("error 3646: " + dx)
		}
		return aW2
	}, this.zW = function(q8) {
		for (var du = aV.aW.data[12].value, aY = q8.length, y = 0; y < aY; y++)
			if (du === q8[y].split(":")[0]) return y;
		return 0
	}, this.b1 = function(aW4) {
		if (!aW4 || aW4.length < 2) return 0;
		aW4 = aW4.split("-")[0].toLowerCase();
		for (var aZ = this.aZ, aY = aZ.length, y = 0; y < aY; y++)
			if (aW4 === aZ[y]) return y;
		return -1
	}
}

function aGY() {
	this.aW5 = function() {
		var y;
		if (cK.size < lA.aAB(23)) an.ax.nd(0, 3259);
		else {
			var a2 = cK.cL(6),
				aY = cK.cL(10),
				data = [];
			if (9 === a2 || 10 === a2 || 11 === a2) {
				for (y = 0; y < aY; y++) data.push([cK.cL(30), nu.lP.cH(5), cK.aA9(32), 0, cK.cL(30)]);
				8 === t.a0 && t.eB().nr(21, !0, {
					a2: a2,
					data: data
				})
			} else if (12 === a2) {
				for (y = 0; y < aY; y++) data.push([cK.cL(20), cK.cL(30), cK.cL(30), cK.aA9(32), cK.cL(30), nu.lP.cH(5), nu.lP.cH(5)]);
				8 === t.a0 && t.eB().nr(21, !0, {
					a2: a2,
					data: data
				})
			} else {
				var aGI = cK.cL(16);
				if (cK.nc(39 + 16 * aGI + aY * (0 === a2 ? 111 : 1 === a2 ? 101 : 2 === a2 || 3 === a2 ? 127 : 212))) {
					if (0 === a2)
						for (y = 0; y < aY; y++) data.push([cK.cL(30), nu.m8.nv(cK.cL(5)), cK.cL(16), cK.cL(30), cK.cL(30)]);
					else if (1 === a2)
						for (y = 0; y < aY; y++) data.push([cK.cL(16), nu.m8.nv(cK.cL(3)), cK.cL(16), nu.m8.nv(cK.cL(5)), cK.cL(31), cK.cL(30)]);
					else if (2 === a2 || 3 === a2)
						for (y = 0; y < aY; y++) data.push([cK.cL(30), nu.m8.nv(cK.cL(5)), cK.aA9(32), cK.cL(30), cK.cL(30)]);
					else
						for (y = 0; y < aY; y++) data.push([cK.cL(20), cK.cL(30), cK.cL(30), cK.cL(30), cK.cL(30), cK.aA9(32), cK.cL(30), nu.m8.nv(cK.cL(5)), nu.m8.nv(cK.cL(5))]);
					8 === t.a0 && t.eB().nr(21, !0, {
						a2: a2,
						data: data
					})
				} else an.ax.nd(0, 3260)
			}
		}
	}, this.aW6 = function() {
		if (cK.size < lA.aAB(29)) an.ax.nd(0, 3265);
		else {
			var aW7 = cK.cL(4),
				aW8 = cK.cL(7),
				aW9 = cK.cL(11);
			if (cK.nc(29 + 16 * aW8 + 16 * aW9 + 11 * aW7)) {
				for (var data = [], y = 0; y < aW7; y++) {
					for (var hu = nu.m8.nv(cK.cL(3)), aWA = cK.cL(8), aWB = [], qw = 0; qw < aWA; qw++) aWB.push(cK.cL(16));
					data.push({
						name: "[" + hu + "]",
						aWB: aWB
					})
				}
				8 === t.a0 && t.eB().nr(23, !0, data)
			} else an.ax.nd(0, 3266)
		}
	}
}

function aMW() {
	this.fB = function(aZ) {
		aZ.fill(0)
	}, this.aL1 = function(aZ) {
		for (var aY = aZ.length, y = 0; y < aY; y++) aZ[y] = []
	}, this.aTY = function(hb, qh) {
		for (var hc = bK.aRT, y = 0; y < 3; y++) hc[y] = qh * hb[y];
		return hc
	}, this.aTZ = function(hb, hc, aWC) {
		for (var tZ = 0, y = 0; y < 3; y++) tZ += Math.abs(hb[y] - hc[y]);
		return aWC <= tZ
	}, this.aTa = function(hb, aWD) {
		for (var y = 0; y < 3; y++) hb[y] = gA.yT(hb[y] + aWD, 0, 255);
		return hb
	}, this.sb = function(aZ, a3, a4) {
		a4 = a4 || aZ.length - 1;
		for (var aS5 = 0, y = a3 = a3 || 0; y <= a4; y++) aS5 += aZ[y];
		return aS5
	}, this.aWE = function(aZ, aWF) {
		for (var y, aOt, aY = aZ.length, aWG = [], qw = aY - 1; 0 <= qw; qw--) {
			for (y = aOt = 0; y < aY; y++) aWF(aZ[y]) < aWF(aZ[aOt]) && (aOt = y);
			aY--, aWG.push(aZ[aOt]), aZ[aOt] = aZ[aY], aZ.pop()
		}
		return aWG
	}, this.min = function(aZ) {
		var y, aU, aY = aZ.length;
		if (0 === aY) return 0;
		for (aU = aZ[0], y = 1; y < aY; y++) aU = Math.min(aU, aZ[y]);
		return aU
	}, this.max = function(aZ) {
		var aY = aZ.length;
		if (0 === aY) return 0;
		for (var aU = aZ[0], y = 1; y < aY; y++) aU = Math.max(aU, aZ[y]);
		return aU
	}, this.aHR = function(aZ, aU) {
		for (var aY = aZ.length, aj = 0, y = 0; y < aY; y++) aj += aZ[y] > aU;
		return aj
	}, this.aWH = function(t2, t3, min) {
		for (var aY = t3[0], y = aY - 1; 0 <= y; y--) t2[y] < min && (t2[y] = t2[--aY]);
		t3[0] = aY
	}, this.aWI = function(aZ, aY, value) {
		for (var y = 0; y < aY; y++) aZ[y] -= value
	}, this.ac = function(aZ) {
		for (var aY = aZ.length, y = 0; y < aY; y++)
			if ("string" != typeof aZ[y]) return !1;
		return !0
	}, this.yK = function(du, aZ, aWJ) {
		aZ.fill(0);
		for (var h3 = du.split(","), aY = Math.min(h3.length, aZ.length), y = 0; y < aY; y++) aZ[y] = Math.min(parseInt(h3[y]), aWJ)
	}, this.aGH = function(du, aZ, aP5) {
		aZ.fill("");
		for (var h3 = du.split('"'), aY = Math.min(h3.length, 2 * aZ.length), fJ = 0, y = 1; y < aY; y += 2) aZ[fJ++] = h3[y].slice(0, aP5)
	}, this.aHQ = function(aZ, aj) {
		if (0 === aj) aZ.fill(0);
		else {
			var aS5 = this.sb(aZ),
				aY = aZ.length;
			if (0 === aS5) aZ.fill(gA.gB(aj, aY));
			else
				for (var y = 0; y < aY; y++) aZ[y] = gA.gB(aj * aZ[y], aS5);
			if (0 === (aS5 = this.sb(aZ))) aZ[1] = aj;
			else
				for (var fJ = 0; aS5++ < aj;) aZ[fJ = (fJ + 1) % aY] && aZ[fJ]++
		}
	}, this.aPR = function(aZ) {
		if (!aZ) return 0;
		var aY = aZ.length;
		if (0 === aY) return 0;
		for (var aU = aZ[aY - 1], y = aY - 2; 0 <= y; y--)
			if (aZ[y] !== aU) return y + 2;
		return 1
	}, this.aSs = function(aZ) {
		for (var aS5 = 0, y = 0; y < aZ.length; y++) aS5 += aZ[y].length;
		return aS5
	}, this.aTG = function(aWK) {
		for (var aZ = [], y = 0; y < aWK.length; y++) aZ = aZ.concat(aWK[y]);
		return aZ
	}, this.has = function(aZ, aU) {
		for (var aY = aZ.length, y = 0; y < aY; y++)
			if (aZ[y] === aU) return !0;
		return !1
	}
}

function aBi() {
	this.aUm = !1, this.sK = !1, this.aAR = !1, this.aWL = [0, 0, 0, 0], this.aPp = function() {
		var dc, dd, qp, qq;
		this.aAR = this.aAR || this.sK, (this.sK || this.aUm && this.aAR) && (dc = sL.sM[0], dd = sL.sM[1], qp = sL.sM[2], qq = sL.sM[3], dc = dc < this.aWL[0] ? this.aWL[0] : dc, dd = dd < this.aWL[1] ? this.aWL[1] : dd, qp = qp > this.aWL[2] ?
			this.aWL[2] : qp, qq = qq > this.aWL[3] ? this.aWL[3] : qq, this.sK = !1, this.aUm = !1, dc === this.aWL[0] && dd === this.aWL[1] && qp === this.aWL[2] && qq === this.aWL[3] ? this.aAS() : dc <= qp && dd <= qq && f8.putImageData(
				f9, 0, 0, dc, dd, qp - dc + 1, qq - dd + 1))
	}, this.aAS = function() {
		this.aAR && this.aWL[2] >= this.aWL[0] && this.aWL[3] >= this.aWL[1] && f8.putImageData(f9, 0, 0, this.aWL[0], this.aWL[1], this.aWL[2] - this.aWL[0] + 1, this.aWL[3] - this.aWL[1] + 1), this.aAR = !1
	}, this.aES = function() {
		this.aWL[2] >= this.aWL[0] && this.aWL[3] >= this.aWL[1] && f8.putImageData(f9, 0, 0, this.aWL[0], this.aWL[1], this.aWL[2] - this.aWL[0] + 1, this.aWL[3] - this.aWL[1] + 1), this.aAR = !1
	}, this.f = function() {
		var bn, bo;
		this.aUm = !1, this.sK = !1, this.aAR = !1, this.aWL[0] = bR.bS, this.aWL[1] = bR.bU, this.aWL[2] = this.aWL[3] = 0;
		loop: for (bn = 1; bn < bR.bS - 1; bn++)
			for (bo = bR.bU - 2; 1 < bo; bo--)
				if (1 === f7[bE.s9(bn, bo) + 2]) {
					this.aWL[0] = bn;
					break loop
				} loop: for (bo = 1; bo < bR.bU - 1; bo++)
			for (bn = bR.bS - 2; 1 < bn; bn--)
				if (1 === f7[bE.s9(bn, bo) + 2]) {
					this.aWL[1] = bo;
					break loop
				} loop: for (bn = bR.bS - 2; 0 < bn; bn--)
			for (bo = bR.bU - 2; 1 < bo; bo--)
				if (1 === f7[bE.s9(bn, bo) + 2]) {
					this.aWL[2] = bn;
					break loop
				} loop: for (bo = bR.bU - 2; 0 < bo; bo--)
			for (bn = bR.bS - 2; 1 < bn; bn--)
				if (1 === f7[bE.s9(bn, bo) + 2]) {
					this.aWL[3] = bo;
					break loop
				}
	}
}

function aAw() {
	var aD5, aWM, aWN, aDL, aWO, aWP, aWQ, aWR, aWS, aWT, aWU, a7W, aWV, aWW = !1,
		aWX = !1;

	function aWY(jJ) {
		a7W = e8.iR, aWN = aDL = aWM = 0, aWO = (aWV = 33) / jJ, aD5 = 1 / (jJ / aWV / 4), aWP = (gG.gF / 2 + qm) / qn, aWQ = (gG.ae / 2 + qo) / qn, aWR = qn
	}

	function aWa(y) {
		var dc; - 1 !== y && (y = b9.v6(b5.ax.jV[y]), dc = b9.bN(y) - 10, y = b9.bP(y) - 10, kq.a9F(dc, y, 19 + dc, 19 + y))
	}

	function aWf(jG) {
		Math.abs(Math.log(aWU / aWR)) < .125 && (aWU = jG * aWR)
	}

	function aWe(dc, dd, qp, qq) {
		aWS = (dc + qp + 1) / 2, aWT = (dd + qq + 1) / 2;
		qp = gG.gF / (qp - dc + 1), dc = gG.ae / (qq - dd + 1);
		aWU = .9 * (qp < dc ? qp : dc)
	}
	this.kr = function() {
		return aWW
	}, this.aWZ = function() {
		aWY(1), this.a9F(0, 0, bR.bS - 1, bR.bU - 1), d2.gQ || d2.ea || this.a9D(d2.ed, 3e3, !0, .3)
	}, this.a9G = function(player, kN) {
		aWa(b5.bH.kP(player, kN))
	}, this.a9D = function(player, jJ, aWb, zoom) {
		d2.iQ || aWW && !aWb && aWX || (0 === cV.cW[player] ? aWa(b5.bH.aLG(player)) : (iZ.aFN = !1, aWX = aWb, aWY(jJ), function(player) {
			aWS = (cV.dY[player] + cV.dZ[player] + 1) / 2, aWT = (cV.da[player] + cV.db[player] + 1) / 2
		}(player), function(zoom, player) {
			var kH = cV.dZ[player] - cV.dY[player] + 1,
				player = cV.db[player] - cV.da[player] + 1,
				qw = gG.gF / kH,
				ak = gG.ae / player,
				qw = (aWU = qw < ak ? qw : ak, 0 !== zoom ? zoom : kH < 20 && player < 20 ? .5 : .9);
			aWU *= qw, aWf(7 / 8)
		}(zoom, player), aWW = !0, aAf.aFb()))
	}, this.aPt = function(jJ) {
		d2.ea || d2.iQ || (iZ.aFN = !1, aWX = !1, aWY(jJ), aWe(0, 0, bR.bS - 1, bR.bU - 1), aWf(7 / 8), aWW = !0, aAf.aFb())
	}, this.a9F = function(dc, dd, qp, qq) {
		aWe(dc, dd, qp, qq), qn = aWU, iZ.aIJ(aWS, gG.gF / 2), iZ.aIL(aWT, gG.ae / 2), sL.aIU(), e8.e9 = !0
	}, this.re = function() {
		return !(aWW && aWX || (aWW = !1))
	}, this.c8 = function() {
		var aWh, aWi, bW, aWl;
		aWW && (aWM < .5 ? aDL < aWO && (aDL += aWO * aD5, aWN = aWM) : 1 - aWN < aWM && (aDL = (aDL -= aWO * aD5) < aWO * aD5 ? aWO * aD5 : aDL), a7W = a7W >= e8.iR ? e8.iR - 1 : a7W, bW = e8.iR - a7W, aWM = 1e3 < bW || 1 < (aWM += aDL * bW /
			aWV) ? 1 : aWM, a7W = e8.iR, bW = qn, aWh = qm, aWi = qo, bW = (qn = aWR * Math.pow(aWU / aWR, aWM)) / bW, aWl = 1 - (aWR * Math.pow(aWU / aWR, 1 - aWM) - aWR) / (aWU - aWR), iZ.aIJ(aWP + aWl * (aWS - aWP), gG.gF / 2), iZ.aIL(
			aWQ + aWl * (aWT - aWQ), gG.ae / 2), qg.zoom(bW, (aWh * bW - qm) / (1 - bW), (aWi * bW - qo) / (1 - bW)), sL.aIU(), 1 <= aWM && (aWW = !1, sJ.sK = !0), e8.e9 = !0)
	}
}

function aWm() {
	this.kj = null, this.aWn = null, this.aWo = null, this.f = function() {
		var aWp = [120, 105, 92],
			cos = [12, 12, 60],
			aWq = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aWr = [140, 130, 120],
			aWs = [12, 12, 76],
			aWt = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aWu = [130, 117, 106],
			aWv = [12, 12, 68],
			aWw = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.kj = new Array(bR.wb + 1), this.kj[0] = {
			name: L(449),
			gF: 230,
			ae: 230,
			aDL: 1e3,
			aD5: 2e3,
			ks: 173
		}, this.kj[1] = {
			name: L(450),
			gF: 800,
			ae: 800,
			aDL: 100,
			aD5: 50,
			ks: 43
		}, this.kj[2] = {
			name: L(451),
			gF: 512,
			ae: 512,
			aDL: 128,
			aD5: 32,
			ks: 0
		}, this.kj[3] = {
			name: L(452) + " 1",
			gF: 960,
			ae: 960,
			aDL: 60,
			aD5: 8,
			ks: 0
		}, this.kj[4] = {
			name: L(453),
			gF: 900,
			ae: 900,
			aDL: 100,
			aD5: 5,
			ks: 0
		}, this.kj[5] = {
			name: L(454),
			gF: 1e3,
			ae: 1e3,
			aDL: 100,
			aD5: 40,
			ks: 0
		}, this.kj[6] = {
			name: L(455),
			gF: 1e3,
			ae: 1e3,
			aDL: 100,
			aD5: 20,
			ks: 0
		}, this.kj[7] = {
			name: L(456),
			gF: 1024,
			ae: 1024,
			aDL: 128,
			aD5: 32,
			ks: 0
		}, this.kj[8] = {
			name: L(457),
			gF: 820,
			ae: 820,
			aDL: 200,
			aD5: 100,
			ks: 0
		}, this.kj[9] = {
			name: L(458),
			gF: 1024,
			ae: 1024,
			aDL: 128,
			aD5: 32,
			ks: 0
		}, this.kj[10] = {
			name: L(459),
			kl: aWr,
			km: aWs,
			kn: aWt
		}, this.kj[11] = {
			name: L(460),
			kl: aWu,
			km: aWv,
			kn: aWw
		}, this.kj[12] = {
			name: L(461),
			kl: aWu,
			km: aWv,
			kn: aWw
		}, this.kj[13] = {
			name: L(462),
			kl: aWp,
			km: cos,
			kn: aWq
		}, this.kj[14] = {
			name: L(463),
			kl: aWp,
			km: cos,
			kn: aWq
		}, this.kj[15] = {
			name: L(464),
			kl: aWr,
			km: aWs,
			kn: aWt
		}, this.kj[16] = {
			name: L(465),
			kl: aWr,
			km: aWs,
			kn: aWt
		}, this.kj[17] = {
			name: L(466),
			kl: aWp,
			km: cos,
			kn: aWq
		}, this.kj[18] = {
			name: L(467),
			kl: aWu,
			km: aWv,
			kn: aWw
		}, this.kj[19] = {
			name: L(468),
			kl: aWp,
			km: cos,
			kn: aWq
		}, this.kj[20] = {
			name: L(469),
			gF: 1024,
			ae: 1024,
			aDL: 128,
			aD5: 32,
			ks: 0
		}, this.kj[21] = {
			name: L(452) + " 2",
			gF: 940,
			ae: 940,
			aDL: 80,
			aD5: 8,
			ks: 0
		}, this.kj[bR.wb] = {
			name: ""
		}, this.aWn = new Uint8Array(12);
		for (var y = 0; y < 10; y++) this.aWn[y] = y;
		for (this.aWn[10] = 20, this.aWn[11] = 21, this.aWo = new Uint8Array(10), y = 0; y < 10; y++) this.aWo[y] = 10 + y
	}
}

function xd(data) {
	var n, aWx, aWy, aPV, aWz, aX0, aX1, colors, aX2, aX3, aX4 = 0,
		aX5 = 0,
		aX6 = !1,
		aX7 = !1,
		aX8 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aXa(k9, kB) {
		! function(k9, kB) {
			return aWx < k9 && k9 < aWx + aPV && aWy < kB && kB < aWy + aWz
		}(aX4 = k9, aX5 = kB) ? (aX6 && (e8.e9 = !0), aX6 = !1) : (aX6 = !0, e8.e9 = !0)
	}
	this.show = function() {
		aX7 = aV.aW.data[127].value, n.show(), this.resize()
	}, this.a5 = function() {
		n.a5()
	}, this.resize = function() {
		n.resize();
		var a7 = gG.ld,
			a8y = n.aPK(),
			aXH = a7 * a8y.aPL,
			a7 = a7 * a8y.aP9;
		aX0 = g.h.le(.06), aX1 = g.h.le(.04), aWx = g.h.le(.06), aWy = a7 + aX0, aPV = gG.gF - aWx - aX1, aWz = aXH + a7 - aWy - aX1
	}, this.h8 = function() {
		n.h8(),
			function() {
				var y, aWB, aj, bn, qw, aZ = data.data,
					aXK = 1,
					aXL = .125,
					aXM = aX7 ? 65536 : 0;
				for (y = 0; y < aZ.length; y++)
					for (aWB = aZ[y].aWB, aj = aWB.length, aXK = Math.max(aj, aXK), qw = 0; qw < aj; qw++) aXL = Math.max(aWB[qw], aXL), aXM = Math.min(aWB[qw], aXM);
				var dd = aWy + aWz,
					aOd = aWz / (aXL - aXM),
					aOc = 1 / (aXK - 1);
				for (h9.lineWidth = j.a27, y = 0; y < aZ.length; y++) {
					for (aWB = aZ[y].aWB, aj = aWB.length, bn = aWx, h9.beginPath(), h9.moveTo(bn + aPV, dd - aOd * (aWB[aj - 1] - aXM)), qw = aj - 2; 0 <= qw; qw--) h9.lineTo(bn + aOc * qw * aPV, dd - aOd * (aWB[qw] - aXM));
					h9.strokeStyle = colors[y], h9.stroke()
				}(function(aXM, aXL, dd, aOd) {
					h9.font = g.h.fn(0, .25 * aWx), g.h.textBaseline(h9, 1), g.h.textAlign(h9, 2), h9.fillStyle = colors[0];
					for (var bn = .92 * aWx, y = 0; y < 3; y++) {
						var aU = aXM + y * (aXL - aXM) / 2;
						h9.fillText((aU / 1e3).toFixed(3), bn, dd - aOd * (aU - aXM))
					}
				})(aXM, aXL, dd, aOd),
				function(aXK) {
					var bo = aWy + aWz + .15 * aX1;
					h9.font = g.h.fn(0, Math.min(.4 * aX1, .028 * gG.gF)), g.h.textBaseline(h9, 0), g.h.textAlign(h9, 2), h9.fillStyle = colors[0], h9.fillText(g.aMa.aXP(aX2), aWx + aPV, bo), g.h.textAlign(h9, 0), h9.fillText(g.aMa.aXP(new Date(
						aX3.getTime() - 6e4 * (aXK - 1) * aX8[data.xW])), aWx, bo)
				}(aXK),
				function(aXK, aXM, aXL) {
					if (aX6 && !(aXK < 2)) {
						for (var iB, cF = (aX4 - aWx) / aPV * (aXK - 1), aXQ = Math.floor(cF), aXR = Math.floor(1 + cF), aXS = cF - aXQ, aXT = 1e5, vM = -1, aXU = -1, aXV = aXL - (aXL - aXM) * (aX5 - aWy) / aWz, aZ = data.data, y = 0; y < aZ
							.length; y++) {
							var uC, aWB = aZ[y].aWB;
							aWB.length <= aXR || (aWB = aWB[aXQ] + aXS * (aWB[aXR] - aWB[aXQ]), (uC = Math.abs(aXV - aWB)) < aXT && (aXT = uC, vM = y, aXU = aWB))
						} - 1 !== vM && (aXL = aWy + aWz - (aXU - aXM) / (aXL - aXM) * aWz, h9.lineWidth = .5 * j.a27, h9.strokeStyle = colors[vM], h9.beginPath(), h9.moveTo(aWx, aXL), h9.lineTo(aX4, aXL), h9.lineTo(aX4, aWy + aWz), h9.stroke(),
							h9.beginPath(), h9.arc(aX4, aXL, .1 * aWx, 0, 2 * Math.PI), h9.fillStyle = colors[vM], h9.fill(), aXM = aWy + aWz + .15 * aX1, g.h.textAlign(h9, 1), iB = aXK - 2 < cF ? (iB = aX3.getTime() - 6e4 * aX8[data.xW],
								new Date(iB + (cF - (aXK - 2)) * (aX2.getTime() - iB))) : new Date(aX3.getTime() - 6e4 * (aXK - cF - 1) * aX8[data.xW]), aXK = g.aMa.aXP(iB), cF = g.h.measureText(aXK), iB = gA.yT(aX4, aWx + .5 * cF, aWx +
								aPV - .5 * cF), h9.fillStyle = g.color.a7h(70, 50, 20), h9.fillRect(iB - .52 * cF, aWy + aWz, 1.04 * cF, .55 * aX1), h9.fillStyle = colors[0], h9.fillText(aXK, iB, aXM), h9.font = g.h.fn(0, .25 * aWx), g.h
							.textBaseline(h9, 1), g.h.textAlign(h9, 2), iB = .92 * aWx, aXK = (aXU / 1e3).toFixed(3), cF = g.h.measureText(aXK), aXM = iB - 1.04 * cF, h9.fillStyle = g.color.a7h(70, 50, 20), h9.fillRect(aXM, aXL - .1625 * aWx,
								aWx - aXM, .275 * aWx), h9.fillStyle = colors[vM], h9.fillText(aXK, iB, aXL))
					}
				}(aXK, aXM, aXL)
			}(), h9.lineWidth = j.a27, h9.strokeStyle = dR.fa, h9.beginPath(), h9.moveTo(aWx, aWy), h9.lineTo(aWx, aWy + aWz), h9.lineTo(aWx + aPV, aWy + aWz), h9.stroke();
		var y, fontSize = .5 * aX0,
			aZ = (h9.font = g.h.fn(0, fontSize), g.h.textBaseline(h9, 1), g.h.textAlign(h9, 0), data.data),
			aY = aZ.length,
			bo = aWy - .5 * aX0,
			du = "";
		for (y = 0; y < aY; y++) du += aZ[y].name + "  ";
		du = du.trim();
		var aHJ = g.h.measureText(du),
			bn = .5 * (gG.gF - aHJ);
		for (aHJ > gG.gF && (bn = 0, h9.font = g.h.fn(0, gG.gF / aHJ * fontSize)), y = 0; y < aY; y++) h9.fillStyle = colors[y], h9.fillText(aZ[y].name, bn, bo), bn += g.h.measureText(aZ[y].name + "  ")
	}, this.iS = function(k9, kB) {
		aXa(k9, kB)
	}, this.qf = function(k9, kB) {
		aXa(k9, kB)
	}, this.a6 = function(a7) {
		2 === a7 && n.a8[0].a9()
	};
	var y, cU, aXE, fJ, bW = data.data,
		aY = bW.length,
		max = 1;
	for (y = 0; y < aY; y++) max = Math.max(max, bW[y].aWB.length);
	for (y = 0; y < aY; y++)
		for (; bW[y].aWB.length < max;) bW[y].aWB.unshift(0);
	cU = new Date, aXE = 6e4 * cU.getTimezoneOffset(), fJ = cU.getTime() - aXE, aX2 = new Date(fJ), 6 === data.xW ? function(cU, aXE) {
		var aXG = cU.getUTCFullYear(),
			cU = cU.getUTCMonth() + 1;
		aX3 = cU < 12 ? new Date(Date.UTC(aXG, cU) - aXE) : new Date(Date.UTC(aXG + 1, 0) - aXE)
	}(cU, aXE) : (aXE = 6e4 * aX8[data.xW], aX3 = data.xW <= 4 ? new Date(fJ + aXE - cU.getTime() % aXE) : new Date(fJ + aXE - (cU.getTime() + 2592e5) % aXE)), fJ = g.color, colors = [dR.fa, fJ.a7h(255, 0, 0), fJ.a7h(0, 200, 0), fJ.a7h(80, 80,
		255), fJ.a7h(255, 255, 0), fJ.a7h(255, 0, 255), fJ.a7h(0, 255, 255), fJ.a7h(255, 140, 0), fJ.a7h(128, 128, 128), fJ.a7h(0, 255, 140)], n = new v(L(470) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.xW] + ", " + g.aMa.aXD(aX2),
		[new q("⬅️ " + L(4), function() {
			t.z(1)
		}), new q(L(71), function() {
			t.z(14)
		})], !1)
}

function aBA() {
	var aXb = new Uint16Array(d2.hR),
		aXc = 10;

	function aXf(a2l) {
		return d2.g5 || 7 <= d2.dH || 4284 <= e8.o4() || g.cn.cx(a2l)
	}
	this.f = function() {
		aXb.fill(0), aXc = 10
	}, this.uj = function(a3g) {
		var player = d2.ed;
		if (g.cn.a3r(player, a3g) && g.cn.a3e(player, g.cn.z5(player, t0.t1()), a3g)) {
			player = a3g, a3g = bK.a3d[0];
			if (!aXf(player)) {
				a3g = Math.max(gA.gB(100 * a3g, gW.gX(player)), 1);
				if (aXb[player] + a3g > aXc) return !!void 0
			}
			return !!1
		}
		return !1
	}, this.v3 = function(a2l, aXe) {
		if (!aXf(a2l)) {
			aXe = Math.max(gA.gB(100 * aXe, gW.gX(a2l)), 1);
			if (aXb[a2l] + aXe > aXc) return !1;
			aXb[a2l] += aXe
		}
		return !0
	}, this.c8 = function() {
		e8.o4() % 100 == 99 && (e8.o4() < 1071 ? aXc += 5 : e8.o4() < 2142 ? aXc += 8 : e8.o4() < 3213 ? aXc += 12 : aXc += 14)
	}
}

function aGR() {
	function aXr(aXs) {
		var bW = d2.data,
			aXs = (bW.selectedPlayer = cK.cL(aXs), bW.spawningSeed = cK.cL(14), cK.cL(4)),
			aXs = (aXs < 7 ? (bW.gameMode = 1, bW.numberTeams = aXs + 2) : 9 === aXs ? (bW.gameMode = bW.isZombieMode = 1, bW.numberTeams = 2) : (bW.gameMode = 0, bW.battleRoyaleMode = 7 === aXs ? 0 : 10 === aXs ? 1 : 2), bW.isContest = cK.cL(1), cK
				.cL(6));
		return bW.mapType = bR.aCp(aXs) ? 0 : 1, bR.aCq(bW, aXs), bW.mapSeed = cK.cL(14), aXs
	}
	this.a2m = function(l9, lK) {
		cK.f(lK), 0 === cK.size ? an.ax.nd(l9, 3205) : __fx.customLobby.isCustomMessage(lK) || ((0 === cK.cL(1) ? function(l9) {
			var aXi = cK.cL(6);
			0 === aXi ? function(l9) {
					if (0 === l9 && 8 !== av.aw()) {
						t.ax.a6w();
						for (var aXk = cK.cL(12), aXl = cK.cL(6), aZ = new Array(aXk), y = 0; y < aXk; y++) aZ[y] = cK.cL(aXl);
						no.aHr(aZ)
					}
				}(l9) : 2 === aXi ? an.aGS.aRF(l9) : 3 === aXi || 4 === aXi ? a12.f() : 9 === aXi ? an.aGU.nb(l9) : 10 === aXi ? an.aGV.aPi() : 11 === aXi ? an.aGU.nm(l9) : 12 === aXi ? an.aGV.aPj() : 13 === aXi ? an.aGX.aW5() :
				14 === aXi ? an.aGX.aW6() : 15 === aXi ? an.aGU.ns() : 16 === aXi ? an.aGS.aRH(l9) : 17 === aXi ? an.aGS.aRL(l9) : 19 === aXi && an.aGS.aRP(l9)
		} : function(l9) {
			if (8 !== av.aw() && !a12.aVX()) return;
			if (l9 !== an.ax.mF) an.ax.nd(l9, 3244);
			else if (0 === cK.cL(1)) e8.aKn.aPn(cK.lK);
			else {
				var y, l9 = cK.cL(2);
				if (0 === l9) {
					var rF, nk = cK.cL(9);
					0 !== cV.dX[nk] && 0 !== cV.dX[d2.ed] && (rF = cK.cL(10), cD.a6z(nk, d2.ed, rF), qg.qa(nk, 1, rF))
				} else if (1 === l9) ! function() {
					var nk = cK.cL(9);
					0 !== cV.dX[nk] && 0 !== cV.dX[d2.ed] && vv.aRw(0, [nk], !0) && cD.a71(nk, 1)
				}();
				else if (2 === l9) ! function() {
					var nk = cK.cL(9),
						target = cK.cL(9);
					0 !== cV.dX[nk] && 0 !== cV.dX[target] && 0 !== cV.dX[d2.ed] && vv.aRw(1, [nk], !0) && (qg.qa(nk, 3, 96), qg.qa(target, 4, 96), cD.a9j(nk, target))
				}();
				else if (f1.mH && !f1.mI) {
					var aY = 540;
					for (lA.kv(17287), lA.lC(1, 0), lA.lC(6, 10), aY = Math.min(ee.aPo.aC0.length, 540), y = 0; y < aY; y++) lA.a8c(32, ee.aPo.aC0[y]);
					an.ax.send(an.ax.mF, lA.lK)
				}
			}
		})(l9), e8.aKu())
	}, this.aXm = function(lK) {
		if (cK.f(lK), cK.cF = 1, 3 === cK.cL(6)) {
			cK.cF += 20;
			var bW = d2.data = new a4p,
				lK = aXr(9),
				aCr = bW.humanCount = cK.cL(9) + 1;
			bW.selectableSpawn = 1 === bW.gameMode || aCr < 100, bW.colorsData = new Uint32Array(aCr), bW.playerNamesData = new Array(aCr);
			for (var y = 0; y < aCr; y++) cK.cF++, bW.colorsData[y] = cK.cL(18), bW.playerNamesData[y] = nu.m8.nv(cK.cL(5));
			av.o7(), bR.kv(lK, bW.mapSeed), d2.oA()
		} else ! function() {
			cK.cF += 20;
			var bW = d2.data = new a4p,
				aXq = aXr(1);
			bW.humanCount = 2;
			bW.selectableSpawn = 1, bW.elo = new Uint16Array(2), bW.colorsData = new Uint32Array(2), bW.playerNamesData = new Array(2);
			for (var y = 0; y < 2; y++) cK.cF++, bW.colorsData[y] = cK.cL(18), bW.elo[y] = cK.cL(14), bW.playerNamesData[y] = nu.m8.nv(cK.cL(5));
			av.o7(), bR.kv(aXq, bW.mapSeed), d2.oA()
		}()
	}, this.aXp = function() {
		cK.cF = 1;
		var aXi = cK.cL(6),
			mB = cK.cL(10);
		return an.ax.lJ === mB ? (an.ax.mF = mB, !1) : (an.ax.close(an.ax.lJ, 3247), an.ax.mF = mB, a12.oi = cK.cL(10), a12.aVO = cK.cL(3 === aXi ? 9 : 1), an.ax.xP(mB, 5) && an.nk.nl(), !0)
	}
}

function aAt() {
	this.hR = 512, this.qV = 15e8, this.aXx = 1e9, this.a3m = 5e4, this.oM = 512, this.mj = 2, this.ed = 0, this.g6 = 0, this.gl = 0, this.g9 = 0, this.d3 = 0, this.hq = 512, this.aO6 = 512, this.a3X = 150, this.g5 = !0, this.ea = 0, this.h5 = 0,
		this.gC = 0, this.iQ = !1, this.gQ = 0, this.w0 = 0, this.gn = !1, this.i4 = 0, this.aJ3 = 0, this.dH = 0, this.a5R = 0, this.aAQ = null, this.a9a = new aGs, this.h7 = 30, this.a2o = 0, this.a2p = 0, this.a2r = 0, this.a2u = 0, this.data =
		new a4p, this.o8 = new aHO, this.aCs = 0, this.aXy = "", this.oA = function() {
			bK.f(), dB.f(), this.gl = this.g6 = this.data.humanCount, this.g5 = 1 === this.gl, this.iQ = !1, this.ea = this.data.isReplay, this.dH = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this
				.data.numberTeams - 2, this.a5R = this.data.isContest, this.gn = this.dH < 7 || 9 === this.dH, this.dH = 10 === this.dH && this.g5 ? 7 : this.dH, this.dH = 8 === this.dH && 2 !== this.g6 ? 7 : this.dH, dL.f(), this.i4 = this.data
				.numberTeams, this.data.teamPlayerCount ? this.aJ3 = +(0 < this.data.teamPlayerCount[0]) : (this.aJ3 = 0, this.gn && this.g5 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.i4 + 1), d2.o8
					.yJ())), this.h7 = this.g6 <= 2 ? 30 : this.g6 <= 50 ? 40 : 50, this.w0 = this.gQ = this.data.selectableSpawn, this.aAQ = this.gQ ? new aAL : null, 1 === f1.wL ? this.hq = this.g6 : this.hq = this.data.playerCount, this.aO6 = this
				.hq, this.g9 = this.hq - this.g6, this.d3 = 0, this.ed = this.data.selectedPlayer, this.a2o = 0, this.a2p = 0, this.a2r = 0, this.a2u = 0, dJ.ku(this.data.spawningSeed), gW.f(), cV.f(), vy.f(), aAd.aFg(), ee.aPo.aC0 = [], aL.f(), this
				.h5 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), aP.f(), fA(), bE.aM(), a9o.ws(), sJ.f(), bE.f(), a39.f(), b9.f(), b5.f(), k6.f(), ej.c5(), aN.f(), aAd.kv(),
				aAM.f(), aAb.f(), g7.aHe(), a0z.f(), go.f(), a0x.f(), aO.f(), f8.putImageData(f9, 0, 0), h6.f(), iZ.f(), t0.f(), zm.f(), eL.f(), gM.f(), d9.f(), eb.f(), zn.f(), cD.f(), uM.f(), eD.f(), d8.f(), cf.f(), a0u.f(), aKb(), cc.f(), qg.f(),
				a0v.f(), vv.f(), ue.f(), this.a9a.f(), e8.c5(), kq.aWZ(), 0 === cV.dX[d2.ed] && d8.show(!1, !0), qg.gR(!0), a11.f(), e8.e9 = !0, this.ea || this.g5 && this.gQ || eH.eV.setState(1), this.aCs = 0
		}, this.a5E = function(aY0) {
			a0z.nx.a0p.length ? this.aXy = a0z.nx.a0p : this.aXy = a0z.nz.lI(), an.ax.a7Q(), a31.clear(), this.h5 = 0, e8.aKp(), eH.eV.setState(0), av.setState(0), aY0 || aAk.aGM.show(), 2 === this.aCs ? t.ax.a6v() : 1 === this.aCs ? t.z(19) : t.z(5,
				5)
		}, this.qj = function() {
			return this.ea ? eb.eh || !zm.iF : this.g5 && (eb.eh || this.gQ)
		}, this.rP = function() {
			return 1 === this.h5 && !this.gQ
		}
}

function aBY() {
	this.cv = new jK, this.a3B = new aTI, this.ax = new a5T, this.je = new aKx, this.aY1 = new a76, this.a0S = new a01, this.aDg = new aSt, this.k3 = new aRj, this.aRl = new aR8, this.aY2 = new aIz, this.b6 = new a1u, this.ug = new b2, this.fG =
		new aUD, this.bH = new aL7, this.ui = new ut, this.kQ = new a0J, this.aCM = new kM, this.f = function() {
			this.fG.f(), this.a3B.f(), this.ax.f(), this.je.f(), this.aY1.f(), this.aY2.f(), this.kQ.f()
		}, this.h8 = function() {
			this.aY2.h8(), this.a3B.h8()
		}
}

function aBB() {
	var aY3;

	function aY4(player) {
		var jC, aTk;
		return g.cn.cx(player) && player < d2.g6 ? 0 : (jC = aY3[gA.gB((d2.hR - 1) * cV.cW[player], d2.gC)], e8.o4() < 1920 && (jC = Math.max(gA.gB(100 * (13440 - 6 * e8.o4()), 1920), jC)), aTk = gW.gX(player), cV.cp[player] > aTk && (jC -= gA.gB(2 *
			jC * (cV.cp[player] - aTk), aTk)), Math.min(Math.max(jC, 0), 700))
	}

	function aYD(hv) {
		for (var cW = cV.cW, gx = g7.gx, y = g7.g8 - 1; 0 <= y; y--) {
			var cT = gx[y];
			g.cn.a0D(cT, gA.gB(hv * cW[cT], 32))
		}
	}

	function aYA() {
		var aLf = d2.ed;
		bK.aRR[0] = cV.cp[aLf] - cV.cq[aLf]
	}

	function aYC(cF) {
		var aLf = d2.ed;
		aP.dV[cF] += cV.cp[aLf] - cV.cq[aLf] - bK.aRR[0]
	}
	this.aBv = function() {
		for (var aY = d2.hR, y = (aY3 = new Uint16Array(aY), 0); y < aY; y++) aY3[y] = 100 + a2Q(gA.gB(25600 * y, aY - 4), 9)
	}, this.f = function() {
		0 === d2.data.iIncomeType ? this.h0 = aY4 : 1 === d2.data.iIncomeType ? this.h0 = function(player) {
			return gA.gB(d2.data.iIncomeValue * aY4(player), 64)
		} : this.h0 = function(player) {
			return gA.gB(d2.data.iIncomeData[player] * aY4(player), 64)
		}
	}, this.c8 = function() {
		if (e8.o4() % 10 == 9 && (function() {
				aYA();
				for (var gx = g7.gx, cp = cV.cp, y = g7.g8 - 1; 0 <= y; y--) {
					var cT = gx[y],
						aYB = gA.gB(gW.h0(cT) * cp[cT], 1e4);
					g.cn.a0D(cT, Math.max(aYB, 1))
				}
				aYC(9)
			}(), function() {
				if (0 !== d2.data.aIncomeType) {
					if (aYA(), 1 === d2.data.aIncomeType)
						for (var cW = cV.cW, gx = g7.gx, hv = d2.data.aIncomeValue, y = g7.g8 - 1; 0 <= y; y--) {
							var cT = gx[y];
							g.cn.a0D(cT, gA.gB(hv * cW[cT], 128))
						} else 2 === d2.data.aIncomeType && function() {
							for (var cW = cV.cW, gx = g7.gx, hv = d2.data.aIncomeData, y = g7.g8 - 1; 0 <= y; y--) {
								var cT = gx[y];
								g.cn.a0D(cT, gA.gB(hv[cT] * cW[cT], 128))
							}
						}();
					aYC(18)
				}
			}(), e8.o4() % 100 == 99)) {
			if (aYA(), 0 === d2.data.tIncomeType) aYD(32);
			else if (1 === d2.data.tIncomeType) aYD(d2.data.tIncomeValue);
			else
				for (var cW = cV.cW, gx = g7.gx, hv = d2.data.tIncomeData, y = g7.g8 - 1; 0 <= y; y--) {
					var cT = gx[y];
					g.cn.a0D(cT, gA.gB(hv[cT] * cW[cT], 32))
				}
			aYC(8)
		}
	}, this.gX = function(player) {
		return Math.min(100 * cV.cW[player], d2.aXx)
	}, this.vz = function(player, a3g) {
		player === d2.ed || a3g === d2.ed || g.cn.cx(player) || g.cn.cx(a3g) || a31.dP(cV.dQ[player] + " has supported " + cV.dQ[a3g] + " with " + bK.a3d[0] + " ressource" + (1 === bK.a3d[0] ? "." : "s.")), g.cn.a0D(a3g, bK.a3d[0]), aP.a9k(
			player, a3g), qg.qP(player, bK.a3d[0] + bK.a3d[1]), qg.qR(a3g, bK.a3d[0]), g.cn.a3o(player)
	}, this.aR5 = function() {
		for (var aY = g7.g8, y8 = g7.gx, ag = 0, oH = cV.cp, y = 0; y < aY; y++) ag += oH[y8[y]];
		return ag
	}, this.aR7 = function(aY6) {
		for (var cT, aY = g7.g8, y8 = g7.gx, ag = 0, oH = cV.cp, dI = aL.dI, y = 0; y < aY; y++) dI[cT = y8[y]] === aY6 && (ag += oH[cT]);
		return ag
	}
}

function aST(aLR, a9v, aYH) {
	this.d = document.createElement("div"), this.vS = aLR;
	var aYI = 0;
	this.resize = function(b, aPM) {
		var aY = aLR.length;
		if (!aYH)
			for (var y = 1; y < aY; y++) g.h.fo(aLR[y].button, 4);
		for (var aPN = 0, y = 0; y < aY; y++) aPN += aLR[y].button.offsetWidth;
		if (b && (aYI = b.offsetWidth), aPM && aPN < aYI)
			for (y = 0; y < aY; y++) aLR[y].button.style.width = (100 * aLR[y].button.offsetWidth / aPN).toFixed(2) + "%";
		else
			for (y = 0; y < aY; y++) aLR[y].button.style.width = "auto";
		aPM || this.resize(b, 1)
	};
	var ig = this;
	ig.d.style.height = ig.d.style.maxHeight = "100%";
	for (var y = 0; y < aLR.length; y++) aLR[y].f5(a9v), aLR[y].button.style.height = "100%", aLR[y].button.style.padding = "0.0em 0.9em", ig.d.appendChild(aLR[y].button)
}

function aSX(aSR, aSL, aYJ, aSS, aOv, p5) {
	var fW = document.createElement("div"),
		aYK = document.createElement("div"),
		aYL = document.createElement("div"),
		aYM = document.createElement("div"),
		aYN = document.createElement("div"),
		p6 = document.createElement("div"),
		aYO = document.createElement("div"),
		aYP = document.createElement("div"),
		aYQ = document.createElement("span"),
		aYR = document.createElement("div");
	this.aSb = new aOu(aOv, p5), this.aSe = new p4(p5), this.aSh = [aSR, aSL, aYJ, aSS], this.aSl = function(ob) {
		ob = (ob / 10).toFixed(1) + "%";
		aYP.style.width = ob, aYQ.innerHTML = ob
	}, this.aSf = function() {
		this.aSe.a5(p6), this.aSb.show(p6)
	}, this.aSg = function() {
		this.aSb.a5(p6), this.aSe.show(p6)
	}, this.aSa = function() {
		return aYK
	}, this.show = function() {
		document.body.appendChild(fW)
	}, this.a5 = function() {
		document.body.removeChild(fW)
	}, this.resize = function(aYU) {
		var aYV = 1 - .4 * eH.eV.fT() * (gG.gF > 1.6 * gG.ae),
			a1y = g.h.l(.05 * aYV),
			aYW = gG.ae > gG.gF,
			aYX = g.h.l(.07 * aYV + .03 * aYW),
			aYY = g.h.l(.04 + .02 * aYW),
			aYW = g.h.l(.02 * aYV + .01 * aYW),
			aYa = g.h.l(.025);
		fW.style.font = g.h.fn(0, aYa), aYV < 1 && (aYa = g.h.fn(0, aYV * aYa), aYL.style.font = aYa, aYN.style.font = aYa, aYR.style.font = aYa, aYO.style.font = aYa, aYM.style.font = aYa), aYK.style.height = g.h.i(a1y), aYK.style.font = g.h.fn(
			0, .72 * a1y), g.h.fo(aYK, 2), aYL.style.top = g.h.i(a1y), aYL.style.height = g.h.i(aYX), g.h.fo(aYL, 2), aYM.style.font = g.h.fn(0, aYV * g.h.l(.02)), aYM.style.top = g.h.i(a1y + aYX), aYM.style.height = g.h.i(aYY), g.h.fo(aYM,
			2), aYN.style.top = g.h.i(a1y + aYX + aYY), aYN.style.height = g.h.i(aYX), g.h.fo(aYN, 2), p6.style.top = g.h.i(a1y + aYX + aYY + aYX), p6.style.height = g.h.i(gG.ae / gG.ld - a1y - 3 * aYX - aYY - aYW), aYO.style.top = g.h.i(gG
			.ae / gG.ld - aYX - aYW), aYO.style.height = g.h.i(aYW), g.h.fo(aYO, 8), aYQ.style.font = g.h.fn(0, .8 * aYW), aYR.style.top = g.h.i(gG.ae / gG.ld - aYX), aYR.style.height = g.h.i(aYX), g.h.fo(aYR, 8), aSR.resize(aYL), aSL.resize(
			aYL), aYJ.resize(aYL), aSS.resize(aYL), aYU ? this.aSb.resize(p6) : this.aSe.resize()
	};
	aOv = this;
	fW.style.position = "absolute", fW.style.top = "0", fW.style.left = "0", fW.style.width = "100%", fW.style.height = "100%", fW.style.backgroundColor = dR.a2L, cA.cB() || (fW.style.backdropFilter = "blur(4px)", fW.style.webkitBackdropFilter =
		"blur(4px)"), aYK.style.position = "absolute", aYK.style.top = "0", aYK.style.left = "0", aYK.style.width = "100%", aYK.style.display = "flex", aYK.style.alignItems = "center";
	for (var aZ = [aYL, aYM, aYN, aYR], y = 0; y < aZ.length; y++) aZ[y].style.position = "absolute", aZ[y].style.left = "0", aZ[y].style.width = "100%", g.h.lo(aZ[y]);
	p6.style.position = "absolute", p6.style.left = "0", p6.style.width = "100%", p6.style.font = "inherit", aYO.style.position = "absolute", aYO.style.left = "0", aYO.style.width = "100%", aYP.style.position = "absolute", aYP.style.top = "0", aYP
		.style.left = "0", aYP.style.height = "100%", aYP.style.width = "50%", aYP.style.backgroundColor = dR.a7x, aYQ.innerHTML = "", aYQ.style.position = "absolute", aYQ.style.top = "50%", aYQ.style.left = "50%", aYQ.style.transform =
		"translate(-50%, -50%)", aYK.appendChild(function() {
			var zu = document.createElement("h1");
			return zu.textContent = L(132), zu.style.margin = "0 auto 0.15em auto", zu.style.webkitTextStroke = "0.02em brown", zu.style.fontFamily = "Arial Black, Trebuchet MS", zu.style.fontSize = "inherit", zu.style.fontWeight = "inherit", zu
		}()), aYL.appendChild(aSR.d), aYM.appendChild(aSL.d), aYN.appendChild(aYJ.d), aYO.appendChild(aYP), aYO.appendChild(aYQ), aYR.appendChild(aSS.d), fW.appendChild(aYK), fW.appendChild(aYL), fW.appendChild(aYM), fW.appendChild(aYN), fW
		.appendChild(p6), fW.appendChild(aYO), fW.appendChild(aYR), aOv.aSe.show(p6)
}

function aMb() {
	var aYc = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aXD = function(iR) {
		var aYd, du = new Date(iR.getTime() - 6e4 * iR.getTimezoneOffset()).toUTCString();
		return du.length < 12 || (du = du.substring(5, du.length), 0 === (iR = iR.getTimezoneOffset())) ? du : (aYd = (iR < 0 ? "+" : "-") + gA.gB(Math.abs(iR), 60), 0 == (iR = Math.abs(iR) % 60) ? du + aYd : du + aYd + ":" + (iR < 10 ? "0" :
			"") + iR)
	}, this.aXP = function(iR) {
		var du = iR.toUTCString();
		return du.length < 12 ? du : function(iR) {
			return aYc[iR.getUTCDay()]
		}(iR) + ", " + du.substring(5, du.length - 4)
	}
}

function p3() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.rJ = 13, this.aYf = this.emojis.length, this.vl = 676, this.aYg = 1024, this.aYh = this.emojis.indexOf("💀"), this.aYi = this.aYh + 1, this.aYj = this.emojis.indexOf("🥇"), this.vm = this.emojis.indexOf("😊"), this.rK = function(aU) {
		return aU < this.vl ? String.fromCharCode(55356, 56806 + gA.gB(aU, 26), 55356, 56806 + aU % 26) : this.emojis[Math.min(aU - this.vl, this.aYf - 1)]
	}, this.aYk = function(du) {
		for (var aY = du.length - 2, aZ = [], y = 0; y < aY; y++) {
			var hb = du.charCodeAt(y) - 56806,
				hc = du.charCodeAt(y + 2) - 56806;
			0 <= hb && hb < 26 && 0 <= hc && hc < 26 && (aZ.push(26 * hb + hc), y += 3)
		}
		return aZ
	}, this.qd = function(aU) {
		return aU < this.vl
	}, this.rG = function(aU) {
		return aU >= 1024 - this.rJ
	}, this.rD = function(aU) {
		return aU >= this.vl && aU < this.vl + this.aYi
	}
}

function aBc() {
	function aYn() {
		return {
			bS: bR.bS,
			bU: bR.bU,
			wj: bR.wj,
			l0: bR.l0,
			l1: bR.l1,
			l3: bR.l3,
			kk: bR.kk,
			mapSeed: bR.mapSeed,
			wi: bR.wi
		}
	}

	function aYm(y) {
		return 1 !== y && bR.aCp(y) && y !== bR.aYp()
	}
	this.wb = 22, this.oz = 4096, this.bS = 0, this.bU = 0, this.wj = null, this.l0 = null, this.l1 = null, this.l3 = null, this.kk = 0, this.mapSeed = 0, this.wi = !1, this.kp = new kT, this.ki = new aWm, this.wa = new aHW, this.f = function() {
		this.ki.f()
	}, this.kv = function(map, aYl) {
		((map %= this.wb) !== this.kk || aYm(this.kk) && aYl !== this.mapSeed) && (this.wi = !1, this.kp.kf(), dJ.ku(map), this.kk = map, this.mapSeed = aYl, aYm(map) && (bR.ki.kj[map].ks = aYl), this.aCp(this.kk) ? (map = bR.ki.kj[this.kk], this
			.bS = map.gF, this.bU = map.ae, dJ.ku(map.ks), kg.kv([this.bS, this.bU, map.aDL, map.aD5]), tx(), a9o.wc(), kg.kh()) : aEp())
	}, this.aIk = function(map, aYl) {
		var wk = aYn(),
			map = (this.kv(map, aYl), this.kp.kf(), aYn());
		return aYl = wk, bR.bS = aYl.bS, bR.bU = aYl.bU, bR.wj = aYl.wj, bR.l0 = aYl.l0, bR.l1 = aYl.l1, bR.l3 = aYl.l3, bR.kk = aYl.kk, bR.mapSeed = aYl.mapSeed, bR.wi = aYl.wi, map
	}, this.aHT = function(canvas) {
		canvas && this.wj !== canvas && (this.bS = canvas.width, this.bU = canvas.height, this.wj = canvas, this.l0 = this.wj.getContext("2d", {
			alpha: !1
		}), this.wd = this.l0.getImageData(0, 0, this.bS, this.bU), this.l3 = this.wd.data, this.kk = this.aYp(), this.mapSeed = 0, bR.ki.kj[this.kk].name = d2.data.mapName)
	}, this.mS = function(y) {
		return 3 === y || 7 === y || 9 === y || 21 === y || y === this.aYp()
	}, this.aYq = function(y) {
		return 2 === y || 7 === y || 9 === y || 20 === y
	}, this.wg = function(y) {
		return 1 === y
	}, this.aYp = function() {
		return this.wb
	}, this.aCp = function(y) {
		return void 0 === this.ki.kj[y].kn
	}, this.aHS = function(fi) {
		return 0 === fi.mapType ? fi.mapProceduralIndex < 10 ? fi.mapProceduralIndex : 10 + fi.mapProceduralIndex : 1 === fi.mapType ? fi.mapRealisticIndex + 10 : void 0
	}, this.aCq = function(fi, aYr) {
		0 === fi.mapType ? fi.mapProceduralIndex = aYr < 10 ? aYr : aYr - 10 : 1 === fi.mapType && (fi.mapRealisticIndex = aYr - 10)
	}
}

function aBF() {
	var aYs;
	this.i8 = null, this.a4V = 0, this.f = function() {
		aYs = [], 9 === d2.dH && this.aYt()
	}, this.aYt = function() {
		this.i8 = [0, 0, 0, 0, 0, 0], this.a4V = 0, d2.g6 <= 8 ? (this.a4V = 256 - gA.gB(325 * d2.g6, 100), this.i8[0] = d2.hR - d2.g6 - this.a4V) : d2.g6 <= 12 ? (this.a4V = 230 - 6 * (d2.g6 - 8), this.i8[0] = d2.hR - d2.g6 - this.a4V) : d2
			.g6 <= 23 ? (this.a4V = 256 - gA.gB(256 * d2.g6, 60), this.i8[5] = gA.gB(d2.g6 - 7, 6), this.i8[0] = d2.hR - d2.g6 - this.a4V - this.i8[5]) : d2.g6 <= 46 ? (this.a4V = 256 - gA.gB(256 * d2.g6, 60), this.i8[5] = 3 + gA.gB(37 * (d2.g6 -
				23), 100), this.i8[0] = d2.hR - d2.g6 - this.a4V - this.i8[5]) : d2.g6 <= 56 ? (this.a4V = 60 - 6 * (d2.g6 - 46), this.i8[5] = 11 + gA.gB(46 * (d2.g6 - 46), 100), this.i8[0] = d2.hR - d2.g6 - this.a4V - this.i8[5]) : (this.i8[5] =
				Math.min(16 + gA.gB(61 * (d2.g6 - 56), 100), 179), this.i8[0] = 512 - d2.g6 - this.i8[5]), d2.g9 = d2.hR - d2.g6, d2.data.numberTeams = (0 < d2.g6) + (0 < d2.g9), d2.data.playerCount = d2.hq = d2.g6 + d2.g9, d2.data
			.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, d2.g6 + this.a4V, d2.g9 - this.a4V]), d2.o8.yJ()
	}, this.dM = function(player) {
		aYs.push({
			player: player,
			aj: 14 + dJ.fK(20)
		})
	}, this.c8 = function() {
		if (9 === d2.dH)
			for (var y = aYs.length - 1; 0 <= y; y--) --aYs[y].aj <= 0 && (qg.qa(aYs[y].player, 0, eI.fk.vl + eI.fk.aYh), aYs.splice(y))
	}
}

function eK() {
	this.iP = !1;
	this.rI = [], this.rH = 100;
	var dc, dd, gap, oZ, aYv, aYx, aYy = 0,
		aYz = new Array(9),
		aZ0 = [],
		aZ1 = [],
		aZ2 = 0,
		aZ3 = 0,
		aZ4 = 0,
		aZ5 = 0;

	function aZA() {
		aYz.sort(function(qw, ak) {
			return ak.a4E - qw.a4E
		});
		for (var du = "" + aYz[0].rF, y = 1; y < 9; y++) du += "," + aYz[y].rF;
		for (y = 0; y < 9; y++) du += "," + aYz[y].a4E;
		aV.aW.mz(120, du)
	}
	this.f = function() {
		for (var aZ6 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], y = 0; y < aZ6.length; y++) {
			var color = 6 === aZ6[y] ? dR.ve : dR.sg;
			this.rI.push(g.canvas.vj(qY.get(3), aZ6[y], color))
		}
		for (y = 0; y < eI.fk.rJ; y++) aZ1.push(eI.fk.aYg - eI.fk.rJ + y);
		for (y = 0; y < eI.fk.aYf; y++) aZ1.push(eI.fk.vl + y);
		var aEv = eI.fk.aYk(eo.aEv);
		for (y = 0; y < aEv.length; y++) aZ1.push(aEv[y]);
		! function() {
			var y, aZ = aV.aW.data[120].value.split(",");
			if (18 !== aZ.length)
				for (y = 0; y < 9; y++) aYz[y] = {
					rF: 1015 + y,
					a4E: 0
				};
			else
				for (y = 0; y < 9; y++) {
					var aU = parseInt(aZ[y]),
						a7 = (aU = 0 <= aU && aU < eI.fk.aYg ? aU : 0, parseInt(aZ[y + 9]));
					a7 = 0 <= a7 && a7 < 1e3 ? a7 : 0, aYz[y] = {
						rF: aU,
						a4E: a7
					}
				}
		}()
	}, this.show = function(k9, kB, a5s) {
		var y;
		if (aZ2 = k9, aZ3 = kB, aYy = a5s || 0, this.iP = !0, aZ0 = [], 0 === aYy)
			for (y = 0; y < 9; y++) aZ0.push(aYz[y].rF);
		else {
			var ak = 49 * aYy,
				a5s = ak - 49;
			for (a5s >= aZ1.length && (aYy = 1, a5s = 0, ak = 49), y = a5s = (ak = Math.min(ak, aZ1.length)) - 49; y < ak; y++) aZ0.push(aZ1[y])
		}
		aZ0.push(1024);
		a5s = aZ0.length, oZ = Math.floor((eH.eV.fT() ? .075 : .0468) * gG.gH), gap = Math.floor(oZ / 3), (aZ4 = 10 * (aYv = oZ + gap)) > gG.gF && (aZ4 = gG.gF, gap = (aYv = aZ4 / 10) - (oZ = 3 * aYv / 4)), aYx = gA.gB(a5s, 10) + !!(a5s % 10), (
			aZ5 = aYx * aYv) > gG.ae && (aZ5 = gG.ae, gap = (aYv = aZ5 / aYx) - (oZ = 3 * aYv / 4)), a5s = .5 * gap;
		dc = Math.min(Math.max(k9 - .5 * aZ4 + a5s, a5s), gG.gF - aZ4 + a5s), dd = Math.min(Math.max(kB - .5 * aZ5 + a5s, a5s), gG.ae - aZ5 + a5s)
	}, this.iS = function(k9, kB, player) {
		if (!this.iP) return !1;
		if (this.wF(k9, kB)) {
			k9 = gA.yT(gA.gB(k9 - dc + .5 * gap, aYv), 0, 9);
			if ((k9 += 10 * gA.yT(gA.gB(kB - dd + .5 * gap, aYv), 0, 9)) >= aZ0.length) return eD.a5(), !0;
			kB = aZ0[k9];
			if (1024 === kB) return this.show(aZ2, aZ3, aYy + 1), !0;
			! function(rF) {
				for (var y = 0; y < 9; y++) aYz[y].a4E = Math.floor(.99 * aYz[y].a4E);
				for (y = 0; y < 9; y++)
					if (rF === aYz[y].rF) return aYz[y].a4E = Math.min(aYz[y].a4E + 30, 999), aZA();
				aYz.splice(5, 0, {
					rF: rF,
					a4E: Math.max(aYz[4].a4E, 30)
				}), aYz.pop(), aZA()
			}(kB), player === d2.ed ? ee.ef.a6z(kB) : ee.cn.a6y(kB, player)
		}
		return eD.a5(), !0
	}, this.wF = function(k9, kB) {
		return !(k9 < dc - .5 * gap || kB < dd - .5 * gap || dc + aZ4 - .5 * gap <= k9 || dd + aZ5 - .5 * gap <= kB)
	}, this.h8 = function() {
		h9.fillStyle = dR.gT, h9.fillRect(dc - .5 * gap, dd - .5 * gap, aZ4, aZ5);
		for (var fJ = .5 * j.a27, aY = (h9.lineWidth = j.a27, h9.strokeStyle = h9.fillStyle = dR.fa, h9.strokeRect(dc - .5 * gap + fJ, dd - .5 * gap + fJ, aZ4 - 2 * fJ, aZ5 - 2 * fJ), h9.imageSmoothingEnabled = !0, aZ0.length), y = 0; y <
			aY; y++) this.vk(aZ0[y], h9, dc + y % 10 * aYv, dd + gA.gB(y, 10) * aYv, oZ);
		h9.imageSmoothingEnabled = !1
	}, this.vk = function(rF, lX, bn, bo, oZ) {
		var bq;
		rF >= 1024 - eI.fk.rJ ? (bq = oZ / this.rH, lX.setTransform(bq, 0, 0, bq, bn, bo), lX.drawImage(this.rI[rF - 1024 + eI.fk.rJ], 0, 0), lX.setTransform(1, 0, 0, 1, 0, 0)) : (g.h.textAlign(lX, 1), g.h.textBaseline(lX, 1), lX.font = g.h.fn(0,
			.89 * oZ), lX.fillText(eI.fk.rK(rF), bn + .5 * oZ, bo + (.35 - g.h.lT + .56) * oZ))
	}
}

function k1() {
	this.c8 = function() {
		if (e8.o4() % 51 == 45)
			for (var aY = b5.ax.jP, jZ = b5.ax.jZ, jb = b5.ax.jb, jY = b5.ax.jY, jR = b5.ax.jR, a4P = aN.a4P, dN = aN.dN, y = 0; y < aY; y++) {
				var fF, player, a0Q, a0S = jZ[y];
				a0S % 64 == 6 || (fF = jb[y], (player = b5.bH.aLF(fF[fF.length - 1])) < 0) || !g.cn.v8(player, jR[y] >> 3) || dJ.fK(1e3) >= a4P[dN[player]] || ! function(kO, fF) {
					for (var aY = fF.length - 1, vG = b5.ax.jc[kO], hl = 0, y = vG + 1; y < aY; y++) hl += b9.vD(fF[y], fF[y + 1]);
					return (hl += b9.vD(b9.v6(b5.ax.jV[kO]), fF[vG + 1])) <= 60
				}(y, fF) || (a0Q = jY[y], 64 <= a0S && b5.kQ.a0P(player, a0Q)) || function(player, fF, a0Q, kO, a0S) {
					b5.b6.b7(player) && g.cn.a3Y(player, aN.a4M[aN.dN[player]], 32, 0) && (b5.ax.jZ[kO] = 64 + a0S % 64, b5.kQ.v3(a0Q, b5.ax.v4), bK.aZ[0] = b5.fG.fQ(fF), bK.bL[1] = 6, g.cn.a3o(player), b5.ax.a5U(player))
				}(player, fF, a0Q, y, a0S)
			}
	}
}

function aE9() {
	var yB, nP;

	function aZE() {
		t.eY();
		var du = a0z.oB(nP.nW());
		(d2.h5 && 0 < du.length && du === a0z.nx.a0p || a0z.o1.cH(du)) && a0z.o6()
	}
	this.show = function(j1) {
		this.o5(j1), yB.show(), this.resize()
	}, this.o5 = function(j1) {
		0 === d2.h5 ? j1 ? nP.nU(j1) : d2.aXy.length && nP.nU(d2.aXy) : (d2.ea || (a0z.nx.a0p = a0z.nz.lI()), nP.nU(a0z.oC(a0z.nx.a0p)))
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), nP.resize()
	}, this.a6 = function(a7) {
		2 === a7 ? yB.a8[0].a9() : aZE()
	}, yB = new v(L(14), [new q("⬅️ " + L(4), function() {
		t.a2x(1)
	}), new q(L(471), function() {
		nP.nX()
	}), new q(L(472), function() {
		nP.nY()
	}), new q(L(473), function() {
		nP.clear()
	}), new q(L(474), function() {
		aZE()
	})]), nP = new nK(L(475)), yB.x.appendChild(nP.dx)
}

function aBK() {
	var aZF, aZG, kL, aTT;
	this.f = function() {
		var y, bn, bo, hm, aZH, gF, ae, fs, wd, eJ, aU, cT, hl, qw, aY1;
		if (function() {
				if (kL = !0, aTT = "rgb(" + bR.l3[0] + "," + bR.l3[1] + "," + bR.l3[2] + ")", bR.aYq(bR.kk)) return 1;
				return kL = !1, 0
			}()) aZG = null;
		else {
			for (aZF = gA.gB(96, 4), aZH = 1 === bR.kk ? (hm = 0, 160) : (hm = 128, 32), aTT = "rgb(" + hm + "," + hm + "," + hm + ")", aZG = new Array(4), y = 3; 0 <= y; y--) {
				if (aZG[y] = document.createElement("canvas"), gF = y % 2 == 0 ? bR.bS : aZF, ae = y % 2 == 0 ? aZF : bR.bU + 2 * aZF, aZG[y].width = gF, aZG[y].height = ae, eJ = (wd = (fs = aZG[y].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, gF, ae)).data, y % 2 == 0)
					for (bo = aZF - 1; 0 <= bo; bo--)
						for (aU = aZH + Math.floor((bo + 1) * (hm - aZH) / (aZF + 1)), bn = gF - 1; 0 <= bn; bn--) eJ[cT = 4 * ((0 === y ? aZF - bo - 1 : bo) * gF + bn)] = aU, eJ[cT + 1] = aU, eJ[cT + 2] = aU, eJ[cT + 3] = 255;
				else {
					for (bn = aZF - 1; 0 <= bn; bn--)
						for (aU = aZH + Math.floor((bn + 1) * (hm - aZH) / (aZF + 1)), bo = ae - 1 - aZF; aZF <= bo; bo--) eJ[cT = 4 * (bo * gF + (3 === y ? aZF - bn - 1 : bn))] = aU, eJ[cT + 1] = aU, eJ[cT + 2] = aU, eJ[cT + 3] = 255;
					for (qw = 1; 0 <= qw; qw--)
						for (bn = aZF - 1; 0 <= bn; bn--)
							for (bo = aZF - 1; 0 <= bo; bo--) hl = (Math.pow(bn * bn + bo * bo, .5) + 1) / (aZF + 1), aU = aZH + Math.floor((1 < hl ? 1 : hl) * (hm - aZH)), eJ[cT = 4 * ((0 === qw ? aZF - bo - 1 : bo + qw * (ae - aZF)) * gF + (
								1 === y ? bn : aZF - bn - 1))] = aU, eJ[cT + 1] = aU, eJ[cT + 2] = aU, eJ[cT + 3] = 255
				}
				fs.putImageData(wd, 0, 0)
			}
			aY1 = aZH, bR.l0.fillStyle = "rgb(" + aY1 + "," + aY1 + "," + aY1 + ")", bR.l0.fillRect(0, 0, bR.bS, 1), bR.l0.fillRect(0, bR.bU - 1, bR.bS, 1), bR.l0.fillRect(0, 0, 1, bR.bU), bR.l0.fillRect(bR.bS - 1, 0, 1, bR.bU)
		}
	}, this.a3A = function() {
		var qw = kL ? 0 : -aZF;
		a2S(qw, qw, bR.bS - 2 * qw, bR.bU - 2 * qw, sL.aUi, sL.aUj, sL.aUk, sL.aUl) || (h9.fillStyle = aTT, h9.fillRect(0, 0, gG.gF, gG.ae))
	}, this.h8 = function() {
		kL || (a2R(0, -aZF, bR.bS, aZF, sL.aUi, sL.aUj, sL.aUk, sL.aUl) && h9.drawImage(aZG[0], sL.aUg, sL.aUh - aZF), a2R(bR.bS, -aZF, aZF, bR.bU + 2 * aZF, sL.aUi, sL.aUj, sL.aUk, sL.aUl) && h9.drawImage(aZG[1], sL.aUg + bR.bS, sL.aUh - aZF),
			a2R(0, bR.bU, bR.bS, aZF, sL.aUi, sL.aUj, sL.aUk, sL.aUl) && h9.drawImage(aZG[2], sL.aUg, sL.aUh + bR.bU), a2R(-aZF, -aZF, aZF, bR.bU + 2 * aZF, sL.aUi, sL.aUj, sL.aUk, sL.aUl) && h9.drawImage(aZG[3], sL.aUg - aZF, sL.aUh - aZF))
	}
}

function aEG() {
	var yB, yC, aZK, to;

	function yE() {
		or.fp(), t.yI()[19] = null, t.u()
	}

	function aZR() {
		aZU(), aZS()
	}

	function aZU() {
		aZK.d.lastChild && aZK.d.removeChild(aZK.d.lastChild)
	}

	function aZS() {
		var aZV = bR.aHS(d2.data);
		d2.data.canvas = bR.aIk(aZV, d2.data.mapSeed).wj, aZT()
	}

	function aZT() {
		var rL = d2.data.canvas;
		rL.style.width = "100%", aZK.d.appendChild(rL)
	}
	this.ox = function(rL) {
		d2.data.canvas && aZU(), d2.data.canvas = rL, aZT()
	}, this.show = function() {
		yB.show(), this.resize()
	}, this.a5 = function() {
		yB.a5()
	}, this.resize = function() {
		yB.resize(), yC.resize()
	}, this.a6 = function(a7) {
		2 === a7 && yB.a8[0].a9()
	}, yB = new v(L(262), [new q("⬅️ " + L(4), yE)]), 2 === d2.data.mapType && or.f(), yC = new ti(yB.x, (function(to) {
		var jk = new tr;
		jk.ts(L(115)), jk.yO(new xi({
			ty: [L(476), L(477), L(478)],
			value: d2.data.mapType
		}, function(cF) {
			2 === (d2.data.mapType = cF) ? (or.f(), d2.data.canvas = null) : (d2.data.passableWater = d2.data.passableMountains = 1, or.fp()), t.z(20)
		})), 2 <= d2.data.mapType && (jk.tt(new yP), jk.tt(new yQ({
			value: d2.data.passableWater
		}, L(479), function(value) {
			d2.data.passableWater = value
		})), jk.tt(new yQ({
			value: d2.data.passableMountains
		}, L(480), function(value) {
			d2.data.passableMountains = value
		})));
		to.push(jk)
	}(to = []), function(to) {
		if (0 === d2.data.mapType) {
			for (var jk = new tr, ty = (jk.ts(L(262)), []), y = 0; y < bR.ki.aWn.length; y++) ty.push(bR.ki.kj[bR.ki.aWn[y]].name);
			jk.yO(new xi({
				ty: ty,
				value: d2.data.mapProceduralIndex
			}, function(cF) {
				d2.data.mapProceduralIndex = cF, aZR()
			})), to.push(jk)
		}
	}(to), function(to) {
		if (1 === d2.data.mapType) {
			for (var jk = new tr, ty = (jk.ts(L(262)), []), y = 0; y < bR.ki.aWo.length; y++) ty.push(bR.ki.kj[bR.ki.aWo[y]].name);
			jk.yO(new xi({
				ty: ty,
				value: d2.data.mapRealisticIndex
			}, function(cF) {
				d2.data.mapRealisticIndex = cF, aZR()
			})), to.push(jk)
		}
	}(to), function(to) {
		var jk;
		2 === d2.data.mapType && ((jk = new tr).ts(L(262)), jk.tt(new tw([new q(L(481), function() {
			return or.op(), !0
		}).button])), to.push(jk))
	}(to), function(to) {
		(aZK = new tr).ts(L(482)), 2 !== d2.data.mapType ? aZS() : d2.data.canvas && aZT();
		to.push(aZK)
	}(to), function(to) {
		var jk, zS, aM8;
		0 === d2.data.mapType && ((jk = new tr).ts("Seed"), zS = new tu({
			cF: -1,
			value: d2.data.mapSeed
		}, 1, 0, function(dx) {
			dx = Math.abs(Math.floor(dx.target.value)) % 16384;
			d2.data.mapSeed !== dx && (d2.data.mapSeed = dx, aZR())
		}), aM8 = new q(L(116), function(dx) {
			var ks = Math.floor(16384 * Math.random());
			if (d2.data.mapSeed !== ks) return zS.dx.value = d2.data.mapSeed = ks, aZR(), !0
		}), jk.tt(zS), jk.tt(new tw([aM8.button])), to.push(jk))
	}(to), function(to) {
		var jk, zS;
		2 === d2.data.mapType && ((jk = new tr).ts(L(483)), zS = new tu({
			cF: -1,
			value: d2.data.mapName
		}, 0, 0, function(dx) {
			d2.data.mapName = dx.target.value = dx.target.value.slice(0, 20)
		}), jk.tt(zS), to.push(jk))
	}(to), to))
}

function aBr() {
	var sO = [];
	this.dP = function(du, rF) {
		du = {
			iR: d9.gd(),
			du: du,
			rF: rF
		};
		sO.push(du), 30 === t.a0 && t.eB().dP(du)
	}, this.clear = function() {
		sO = [], t.tg(30) && t.tg(30).clear()
	}, this.a32 = function() {
		return sO
	}
}

function jy() {
	function aZY(player) {
		for (var cm = cV.cm[player], aY = cm.length, bp = Math.max(gA.gB(aY, 12), 1), pO = bE.pO, jC = dJ.fK(aY), y = 0; y < aY; y += bp)
			for (var ua = cm[(y + jC) % aY], bW = 3; 0 <= bW; bW--) {
				var a0C = ua + pO[bW];
				if (bE.sC(a0C)) return {
					bq: a0C,
					id: bE.bF(a0C),
					cT: player
				}
			}
		return null
	}

	function aZd(player, aZe) {
		var dN = g.cn.a3n(player, aN.a4O[aN.dN[player]]);
		cV.ca[player].push(aZe.bq), cc.v3(player, dN, aZe.cT), cf.a0I(player, !0)
	}
	this.c8 = function(player) {
		return !!bR.mS(bR.kk) && !!d2.data.passableMountains && 0 !== cV.cm[player].length && function(player) {
			var aZX = aZY(player);
			if (null === aZX) return !1;
			! function(player) {
				for (var gx = g7.gx, g8 = g7.g8, aY = Math.min(g8, 12), kD = dJ.fK(g8), aRV = bK.aRV, cm = cV.cm, aj = 0, y = 0; y < aY; y++) {
					var cT = gx[(y + kD) % g8];
					cT !== player && cm[cT].length && mP.pb(player, cT) && (aRV[aj++] = cT)
				}
				bK.a3O[0] = aj
			}(player);
			var aZa = function(aCV) {
				for (var aY = bK.a3O[0], aRV = bK.aRV, y = 0; y < aY; y++) {
					var aZe = aZY(aRV[y]);
					if (null !== aZe && aZe.id === aCV) return aZe
				}
				return null
			}(aZX.id);
			return null !== aZa ? (aZd(player, aZa), !0) : function(player, aCV) {
				var aY = k6.jm.k7;
				if (0 !== aY)
					for (var bq = k6.jm.aW[dJ.fK(aY)] << 2, pO = bE.pO, bW = dJ.fK(4);;) {
						if (bq += pO[bW], bE.sC(bq)) {
							if (bE.bF(bq) === aCV) return aZd(player, {
								bq: bq,
								cT: d2.hR
							}), !0;
							break
						}
						if (!bE.pP(bq)) break
					}
				return !1
			}(player, aZX.id)
		}(player)
	}
}

function a8e() {
	var aZf = new Uint8Array(78);
	this.f = function() {
		var y;
		for (aZf[50] = 37, y = 0; y < 10; y++) aZf[y + 3] = y + 1;
		for (y = 0; y < 26; y++) aZf[y + 20] = y + 11, aZf[y + 52] = y + 38
	}, this.aV5 = function(du) {
		return du.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.tl = function(du, size) {
		if ((du = this.aV5(du)).length > size) return du.substring(0, size);
		for (; du.length < size;) du = "-" + du;
		return du
	}, this.aPT = function(du) {
		for (var aLm = aZf, aY = du.length, aZ = new Uint8Array(aY), y = 0; y < aY; y++) aZ[y] = aLm[du.charCodeAt(y) - 45];
		return aZ
	}, this.aQ4 = function(aKS) {
		lA.kv(6 * aKS.length), this.aZg(aKS), cK.f(lA.lK)
	}, this.aZg = function(aKS) {
		for (var aY = aKS.length, gF = lA, y = 0; y < aY; y++) gF.lC(6, aKS[y])
	}, this.m9 = function(du) {
		this.aZg(this.aPT(du))
	}, this.a8a = function(du, size) {
		this.aZg(this.aPT(this.tl(du, size)))
	}, this.aF7 = function(du, size) {
		for (var aZ = this.aPT(this.tl(du, size)), aU = 0, hv = 1, y = aZ.length - 1; 0 <= y; y--) aU += hv * aZ[y], hv *= 64;
		return aU
	}
}

function ju() {
	var aZh, aZj = new Uint16Array(8);

	function aZk(size, player) {
		for (var y = cV.ca[player].length - 1; size <= y; y--) bE.pS(cV.ca[player][y], player)
	}
	this.f = function() {
		aZh = 0
	}, this.aCF = function(player, aCE) {
		return bK.a3q[1] = cV.ca[player].length, bK.a3q[0] === d2.hR ? k6.jt.aU8(player) : this.aU6(player, bK.a3q[0]), (0 !== bK.a3q[1] || 0 !== cV.ca[player].length) && !(!aCE && bK.a3q[1] === cV.ca[player].length || (bK.a3q[0] === d2.hR ? cV
			.a8i[player]++ : cV.a8j[player]++, 0))
	}, this.aCI = function(player) {
		aZk(bK.a3q[1], player), cc.v3(player, bK.a3d[0], bK.a3q[0]), cf.a0I(player, !1)
	}, this.aU7 = function(player, pc, aY, dN) {
		k6.jv.aCG[player] = 1;
		var aZl = gA.gB(12 * cV.cp[player], 1024);
		dN -= dN >= gA.gB(cV.cp[player], 2) ? aZl : 0, aZk(aY, player), cc.v3(player, dN, pc), cV.cp[player] -= dN + aZl, cf.a0I(player, !1)
	}, this.aU6 = function(player, pc) {
		for (var bu, pO = bE.pO, y = cV.ck[player].length - 1; 0 <= y; y--)
			if (bE.pf(cV.ck[player][y]))
				for (bu = 3; 0 <= bu; bu--)
					if (bE.pQ(cV.ck[player][y] + pO[bu]) && bE.pR(cV.ck[player][y] + pO[bu]) === pc) {
						cV.ca[player].push(cV.ck[player][y]);
						break
					}
	}, this.aU8 = function(player) {
		for (var pO = bE.pO, y = cV.ck[player].length - 1; 0 <= y; y--)
			if (bE.pf(cV.ck[player][y]))
				for (var bu = 3; 0 <= bu; bu--)
					if (bE.pP(cV.ck[player][y] + pO[bu])) {
						cV.ca[player].push(cV.ck[player][y]);
						break
					}
	}, this.aTq = function(player, aZm) {
		var y, qw, bu, us, aY = cV.ck[player].length,
			tZ = 256 <= aY ? 12 : 32 <= aY ? 6 : 1,
			hp = aY - 1 - dJ.fK(tZ),
			pO = bE.pO;
		aZh = 0;
		loop: for (y = hp; 0 <= y; y -= tZ)
			for (bu = 3; 0 <= bu; bu--)
				if ((us = bE.pP(cV.ck[player][y] + pO[bu]) ? d2.hR : bE.pR(cV.ck[player][y] + pO[bu])) === d2.hR || bE.pQ(cV.ck[player][y] + pO[bu]) && us !== player && (aZm || mP.pb(player, us))) {
					for (qw = aZh - 1; 0 <= qw; qw--)
						if (aZj[qw] === us) continue loop;
					if (aZj[aZh] = us, 8 <= ++aZh) return !0
				}
		return 0 < aZh
	}, this.aTr = function(player, aZm) {
		var y, bu, us, pO = bE.pO;
		for (aZh = 0, y = cV.ck[player].length - 1; 0 <= y; y--)
			for (bu = 3; 0 <= bu; bu--)
				if ((us = bE.pP(cV.ck[player][y] + pO[bu]) ? d2.hR : bE.pR(cV.ck[player][y] + pO[bu])) === d2.hR || bE.pQ(cV.ck[player][y] + pO[bu]) && us !== player && (aZm || mP.pb(player, us))) return aZj[aZh++] = us, !0;
		return !1
	}, this.aTt = function() {
		for (var ak, y = aZh - 1; 0 <= y; y--)
			if (aZj[y] === d2.hR) {
				for (aZh--, ak = y; ak < aZh; ak++) aZj[ak] = aZj[ak + 1];
				return !0
			} return !1
	}, this.aTs = function(player) {
		for (var ak, y = aZh - 1; 0 <= y; y--)
			if (cc.a0G(player, aZj[y]))
				for (aZh--, ak = y; ak < aZh; ak++) aZj[ak] = aZj[ak + 1];
		return 0 === aZh
	}, this.aTy = function() {
		for (var y = aZh - 1; 0 <= y; y--)
			if (g.cn.cx(aZj[y])) return !0;
		return !1
	}, this.aTz = function() {
		for (var y = aZh - 1; 0 <= y; y--) g.cn.cx(aZj[y]) || (aZj[y] = aZj[--aZh]);
		return 0 < aZh
	}, this.aTw = function(player) {
		for (var ak, aZn = aZj[0], aZo = cV.cp[aZn] + cc.mv(aZn, player), y = aZh - 1; 1 <= y; y--)(ak = cV.cp[aZj[y]] + cc.mv(aZj[y], player)) < aZo && (aZn = aZj[y], aZo = ak);
		return aZn
	}, this.aU1 = function(player) {
		var ae, aZp = aZj[0];
		if (1 !== aZh)
			for (var aZq = gA.gB(cV.dZ[player] + cV.dY[player], 2), aZr = gA.gB(cV.db[player] + cV.da[player], 2), hl = a2O(aZq - gA.gB(cV.dZ[aZp] + cV.dY[aZp], 2)) + a2O(aZr - gA.gB(cV.db[aZp] + cV.da[aZp], 2)), y = aZh - 1; 1 <= y; y--)(ae =
				a2O(aZq - gA.gB(cV.dZ[aZj[y]] + cV.dY[aZj[y]], 2)) + a2O(aZr - gA.gB(cV.db[aZj[y]] + cV.da[aZj[y]], 2))) < hl && (hl = ae, aZp = aZj[y]);
		return aZp
	}, this.aU5 = function() {
		for (var aZs = aZj, aZt = aZs[0], cp = cV.cp, aZu = cp[aZt], y = aZh - 1; 1 <= y; y--) {
			var cT = aZs[y],
				ak = cp[cT];
			aZu < ak && (aZt = cT, aZu = ak)
		}
		return aZt
	}, this.aU0 = function() {
		return aZj[dJ.fK(aZh)]
	}
}

function aF8() {
	var j4 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aZv = [dR.a7s, dR.a7s, dR.a36, dR.a89, dR.a8A, dR.a81, dR.a8D, dR.a36, dR.a8O, dR.a2I, dR.a8P],
		aZw = [
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
			[1.4, 1.2]
		],
		aZx = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aa1(oj, iy, aa2) {
		for (var ak = oj.length - 1; 0 <= ak; ak--) {
			var fi = oj[ak];
			0 === fi.id && fi.iy === iy && (fi.a9H = "[Redacted Message]", aa2) && (fi.aQY = 1)
		}
	}
	this.fm = function(x8) {
		var aZy, aCv;
		return x8.id < 5 && (aZy = "@" + lO.tk.gb(x8.iy, 5)), 0 === x8.id ? aZy + ": " + x8.a9H : 1 === x8.id ? (aCv = "@" + lO.tk.gb(x8.target, 5), 0 === x8.x9 ? 32768 <= x8.value ? aZy + " voted with " + (x8.value - 32768 + 1) +
				" gold against " + aCv + " to weaken the latter's admin position. 📉" : aZy + " voted with " + (x8.value + 1) + " gold for " + aCv + " to strengthen the latter's admin position. 💪" : 1 === x8.x9 ? aZy + " sent " + Math.floor(x8
					.value / 100) + " 🧈 gold to " + aCv + "." : aZy + " voted with " + (x8.value / 10).toFixed(1) + " points for " + aCv + " to acknowledge the latter as clan leader. ✅") : 2 === x8.id ? 0 === x8.x9 ? aZy +
			" was 🔇 muted for 1 Hour." : 1 === x8.x9 ? "The username of " + aZy + " was ✂️ redacted. Duration: 1 Day" : aZy + " 👢 was kicked." : 3 === x8.id ? aZy + aR.jF(x8.x9, aR.jA[x8.x9][x8.value]) + "@" + lO.tk.gb(x8.target, 5) + aR.jH(x8
				.x9, aR.jA[x8.x9][x8.value]) : 4 === x8.id ? aZy + aR.jF(5, aR.jA[5][x8.x9]) + "@" + lO.tk.gb(x8.target, 5) + aR.jH(5, aR.jA[5][x8.x9]) : 5 === x8.id ? aZx[x8.x9] : 6 === x8.id ? "You are about to mention " + x8.value +
			" player" + (1 === x8.value ? "" : "s") + ". This action will cost " + (Math.max(10 * x8.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.fl = function(x8, aCt) {
		return {
			x8: x8,
			a9H: aCt,
			aQO: 0,
			fontSize: 1,
			aP7: 0,
			aQZ: x8.id ? dR.a88 : dR.fa
		}
	}, this.pH = function(player, aE1) {
		return (2 === aE1 ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.pI = function(pJ) {
		return aZv[pJ]
	}, this.aQU = function(pJ, a3u) {
		return pJ < 3 || 7 === pJ ? aZw[pJ][0] : 4 === pJ ? aZw[pJ][a3u < 1 ? 0 : a3u < 10 ? 1 : 2] : aZw[pJ][a3u < 10 ? 0 : 1]
	}, this.aQV = function(a3u) {
		return 0 === a3u
	}, this.a6p = function(aE1, iy) {
		for (var pC = fj.pB.pC, pB = pC[aE1], aY = pB.length, y = 0; y < aY; y++)
			if (iy === pB[y].iy) return pB[y];
		for (var ak = 0; ak < pC.length; ak++)
			if (aE1 !== ak)
				for (aY = (pB = pC[ak]).length, y = 0; y < aY; y++)
					if (iy === pB[y].iy) return pB[y];
		return null
	}, this.pK = function(fi) {
		return !!fj.a6N && fi.iy === fj.a6N.iy
	}, this.aSr = function(pB, aZz, aa0) {
		var i0 = [];
		loop: for (var y = aZz; y < aa0; y++) {
			var hu = g.gZ.i2(pB[y].username);
			if (hu) {
				for (var ak = i0.length - 1; 0 <= ak; ak--)
					if (hu === i0[ak].name) {
						i0[ak].aj++;
						continue loop
					} i0.push({
					name: hu,
					aj: 1
				})
			}
		}
		if (i0.sort(function(qw, ak) {
				return ak.aj - qw.aj
			}), 0 === i0.length) return "";
		for (var du = i0[0].name + ": " + i0[0].aj, y = 1; y < i0.length; y++) du += "   " + i0[y].name + ": " + i0[y].aj;
		return du
	}, this.a6m = function(pJ, a3u, a6O) {
		return 0 === j4[pJ].length ? "Rank: " + (a3u + 1) : j4[pJ] + " Rank: " + (a3u + 1) + (3 !== pJ && a6O < 100 ? "   " + j4[3] + " Rank: " + (a6O + 1) : "")
	}, this.xA = function(iy) {
		for (var aCh = fj.ax.aCh, y = 0; y < aCh.length; y++) aa1(aCh[y].oj, iy);
		aa1(fj.message.xI(), iy, 1), fj.fk.xA(iy)
	}
}

function aAq() {
	"function" != typeof Math.log2 && (Math.log2 = function(bn) {
		return Math.log(bn) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(bn) {
		return Math.log(bn) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(bn) {
		return 0 < bn ? 1 : bn < 0 ? -1 : 0
	})
}

function aAy() {
	var aa3, aa4, aa5;
	aa3 = [32, 65, 191, 913, 931], aa4 = [64, 127, 688, 930, 1155], aa5 = new Array(aa3.length + 1);
	for (var y = 0; y < aa5.length; y++) {
		aa5[y] = 0;
		for (var qw = y - 1; 0 <= qw; qw--) aa5[y] += aa4[qw] - aa3[qw]
	}

	function aaB(a7) {
		for (var y = aa3.length - 1; 0 <= y; y--)
			if (a7 >= aa3[y] && a7 < aa4[y]) return y;
		return -1
	}
	this.aPh = function(du) {
		return 0 !== (du = du.trim()).indexOf("Bot ") && 0 !== du.indexOf("[Bot] ") && function(du, aa8, aa9) {
			var aY = (du = du.trim()).length;
			if (aY < aa8 || aa9 < aY) return !1;
			for (var a7, aaA = 0, y = 0; y < aY; y++)
				if (a7 = du.charCodeAt(y), aaA += 65 <= a7 && a7 <= 90 || 1040 <= a7 && a7 <= 1071 ? 1 : 0, -1 === aaB(a7)) return !1;
			if (3 < aaA && aaA > Math.floor(aY / 2)) return !1;
			return !0
		}(du, 3, 20)
	}, this.lI = function(du) {
		for (var aY = (du = du.trim()).length, aZ = [], y = 0; y < aY; y++) {
			var a7, cT = aaB(a7 = du.charCodeAt(y));
			aZ.push(aa5[cT] + a7 - aa3[cT])
		}
		return aZ
	}, this.cH = function(aZ) {
		for (var a7, ak, du = "", aY = aZ.length, y = 0; y < aY; y++)
			for (ak = 1; ak < aa5.length; ak++)
				if (aZ[y] < aa5[ak]) {
					a7 = aa3[ak - 1] + aZ[y] - aa5[ak - 1], du += String.fromCharCode(a7);
					break
				} return du
	}, this.aaC = function(du) {
		for (var aZ = this.lI(du), result = "", y = 0; y < aZ.length; y++) result = (result += aZ[y] < 10 ? "00" : aZ[y] < 100 ? "0" : "") + aZ[y].toString(10);
		return result
	}, this.aaD = function(du) {
		for (var aZ = new Array(Math.floor(du.length / 3)), y = 0; y < du.length; y += 3) aZ[Math.floor(y / 3)] = parseInt(du.substring(y, y + 3));
		return this.cH(aZ)
	}, this.aaE = function(du) {
		for (var aU, aZ = [du.length], y = 0; y < du.length; y++) aZ[y] = du.charCodeAt(y) - 48;
		var result = "";
		for (y = 0; y < du.length; y++) y === du.length - 1 || 51 < 10 * aZ[y] + aZ[y + 1] ? result += aZ[y].toString() : (aU = 10 * aZ[y] + aZ[y + 1], result += String.fromCharCode(aU + (aU < 26 ? 65 : 71)), y++);
		return result
	}, this.aaF = function(du) {
		for (var a7, result = "", y = 0; y < du.length; y++) 48 <= (a7 = du.charCodeAt(y)) && a7 < 58 ? result += String.fromCharCode(a7) : 65 <= a7 && a7 < 75 ? result += "0" + (a7 - 65).toString() : 75 <= a7 && a7 < 91 ? result += (a7 - 65)
			.toString() : 97 <= a7 && a7 < 123 && (result += (a7 - 71).toString());
		return result
	}, this.aaG = function(du) {
		for (var aY = du.length, aZ = [], y = 0; y < aY; y++)(a7 = du.charCodeAt(y)) < 58 ? aZ.push(du[y]) : (a7 -= a7 < 91 ? 65 : 71, aZ.push(String(gA.gB(a7, 10))), aZ.push(String(a7 - 10 * gA.gB(a7, 10))));
		var aY = aZ.length - 2,
			a7 = 0,
			aKS = [];
		for (y = 0; y < aY; y += 3) aKS[a7++] = parseInt(aZ[y] + aZ[y + 1] + aZ[y + 2]);
		return aKS
	}, this.a7G = function() {
		for (var jC, aaH = "", y = 0; y < 6; y++) jC = 48 + dJ.random() % 36, jC += 58 <= jC ? 39 : 0, aaH += String.fromCharCode(jC);
		return aaH
	}
}
aG8(), self.aiCommand746 = function(aU) {
	0 === aU ? aAo() : 1 !== aU || !eH || 1 !== eH.id || eH.eU < 14 || cA.aN5()
}, setTimeout(aAo, 1e4), window.onload = function() {
	aAo()
};