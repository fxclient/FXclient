var a0R, pO, a0S, a0T, a0U, pi, pL, a0V, pM, a0W, a0X, a0Y, a0Z, f9, i, cX, we, wf, ob, wZ, wa, a6t, kS, mI, hu, ca, tM, qI, qX, qh, o4, vY, hx, c0, hs, a18, tp, d0, k9, mr, gD, ve, c3, a5, a6u, wS, kA, n2, aF, a6v, wX, mk, oW, ta, wW, tJ, wl, hn,
	a1s, r, bA, lO, ct, wj, sq, a6w, wh, wi, a6x, cg, bx, bz, v, t, hy, iJ, iS, e4, jc, jX, a6y, p5, kH, bO, ri, pI, aK, wb, a6z, hr, ip, tQ, d2, ws, wY, a70, p2, o5, a71, xw, c6, ak, cZ, cY, bl, a1, vr, n, zb, ce, qS, fC, a72, jS, eT, cb, zH, rr,
	aCW, md, wc, wd, v8, v9, vA, al, a7, aFC, t1, aj, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em",
		"' target='_blank'>", "undefined", "pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel",
		"underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	var b = !1,
		c = 0,
		d = 0,
		e = 0,
		gap = 0,
		canvas = null,
		f = null,
		g = null;

	function x() {
		for (var aU, aQ = 0, aH = 0, aR = Math.floor(d / 2), aS = Math.floor(e / 2), aT = 1.5 * Math.PI, aA = i.k; 0 <= aA; aA--) aH += g[aA], 0 === g[aA] && aQ++;
		if (b = !1, f.clearRect(0, 0, d, d), f.fillStyle = t.ac, f.fillRect(0, 0, d, d), f.fillStyle = t.u, f.fillRect(0, 0, d, gap), f.fillRect(0, 0, gap, d), f.fillRect(d - gap, 0, gap, d), f.fillRect(0, d - gap, d, gap), 0 < aH)
			if (aQ === i.k) {
				for (aA = i.k; 0 <= aA; aA--)
					if (0 < g[aA]) {
						! function(aA, aR, aS) {
							f.fillStyle = a1.ad[a1.a2[aA]], f.beginPath(), f.arc(aR, aR, aS, 0, 2 * Math.PI), f.fill()
						}(aA, aR, aS);
						break
					}!
				function(aR) {
					var fontSize = aR / 3;
					f.font = v.w.ae(1, fontSize), f.fillStyle = t.u, f.fillText("100%", aR, aR + .1 * fontSize)
				}(aR)
			} else {
				for (aA = 0; aA <= i.k; aA++) 0 < g[aA] && (! function(aA, aR, aS, aT, aU) {
					f.fillStyle = a1.ad[a1.a2[aA]], f.beginPath(), f.arc(aR, aR, aS, aT, aU), f.lineTo(aR, aR), f.fill()
				}(aA, aR, aS, aT, aU = aT + 2 * Math.PI * g[aA] / aH), function(aR, aS, aT, aU) {
					var ah = (aU - aT) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * aS * Math.min(ah, .37);
					fontSize < 8 || (aT = (aT + aU) / 2, aU = (__fx.settings.detailedTeamPercentage ? (100 * ah).toFixed(2) : Math.floor(100 * ah + .5)) + "%", aS *= .525 - Math.max(.6 * (ah - .7), 0), f.font = v.w.ae(1, fontSize), f
						.fillStyle = t.u, f.fillText(aU, aR + Math.cos(aT) * aS, aR + Math.cos(aT + 1.5 * Math.PI) * aS))
				}(aR, aS, aT, aU), 0 !== aA && aa(aR, aS, aT), aT = aU);
				aa(aR, aS, 1.5 * Math.PI)
			}!
		function(aR, aS) {
			f.beginPath(), f.arc(aR, aR, aS, 0, 2 * Math.PI), f.stroke()
		}(aR, aS)
	}

	function aa(aR, aS, af) {
		f.beginPath(), f.moveTo(aR, aR), f.lineTo(aR + Math.cos(af) * aS, aR + Math.cos(af + 1.5 * Math.PI) * aS), f.stroke()
	}
	this.h = function() {
		if (i.j) {
			c = 0, g = new Uint32Array(i.k + 1);
			for (var aA = i.k; 0 <= aA; aA--) g[aA] = 0;
			for (aA = aF.aI - 1; 0 <= aA; aA--) g[a1.aG[aF.aE[aA]]] += 1;
			this.resize()
		} else g = f = canvas = null
	}, this.m = function() {
		return d
	}, this.resize = function() {
		i.j && (d = Math.floor(n.o.p() && !i.q ? .18 * r.min : .13 * r.s), d = (d *= 1 + (.5 + .2 * n.o.p()) * i.q) + d % 2, e = Math.floor(7 * d / 8), (canvas = canvas || document.createElement("canvas")).width = d, canvas.height = d, f = canvas
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * d), f.lineWidth = gap, f.strokeStyle = t.u, v.w.textAlign(f, 1), v.w.textBaseline(f, 1), x())
	}, this.y = function() {
		var a4, z = this.a0();
		return a1.a2[z] || (z = function() {
			for (var z = -1, aA = i.k; 1 <= aA; aA--)(-1 === z || g[aA] > g[z]) && (z = aA);
			return z
		}(), a4 = a5.a6[a7[0]], -1 !== z && g[z] > a4) ? g[z] : a4
	}, this.a8 = function() {
		return c = 31, this.a9(), this.a0()
	}, this.a0 = function() {
		for (var z = 0, aA = i.k; 0 < aA; aA--) g[aA] > g[z] && (z = aA);
		return z
	}, this.aB = function(aC) {
		for (var aD = 0, aE = aF.aE, aG = a1.aG, aH = aF.aI, aJ = aK.aJ, aA = 0; aA < aH; aA++) {
			var aL = aE[aA];
			aG[aL] === aC && (aJ[aD++] = aL)
		}
		aK.aM[0] = aD
	}, this.aN = function() {
		for (var aD = 0, aA = i.k; 0 <= aA; aA--) aD += 0 < g[aA];
		return aD
	}, this.a9 = function() {
		if (i.j && 32 <= ++c) {
			c = 0;
			for (var aA = i.k; 0 <= aA; aA--) g[aA] = 0;
			for (aA = aF.aI - 1; 0 <= aA; aA--) g[a1.aG[aF.aE[aA]]] += a5.a6[aF.aE[aA]];
			b = !0
		}
	}, this.aP = function() {
		i.j && b && x()
	}, this.ai = function() {
		i.j && (i.q ? aj.drawImage(canvas, ak.gap, ak.gap) : aj.drawImage(canvas, ak.gap, al + 2 * ak.gap))
	}
}

function am() {
	var ah, d, an, max, ao, ap, ar, at, au, av, aw, ax, ay, az, aq = 1e4;

	function bC(b9, bB, aH) {
		var aA;
		for (ar[0] = b9, aA = 1; aA < aH; aA++) ar[aA] = ar[aA - 1] + bB, bB = ar[aA] >= aq ? (ar[aA] = aq - 1, -bB) : ar[aA] < 0 ? (ar[aA] = 0, -bB) : (bB += 16384 <= bA.random() ? ap : -ap) < -ao ? -ao : ao < bB ? ao : bB
	}

	function bE(bF, bG, bH, aH) {
		(bH ? function(bF, bG, aH) {
			var aA;
			for (aA = 0; aA < aH; aA++) ah[bG * d + bF + aA] = ar[aA]
		} : function(bF, bG, aH) {
			var aA;
			for (aA = 0; aA < aH; aA++) ah[bG * d + bF + aA * d] = ar[aA]
		})(bF, bG, aH)
	}

	function bK(value, aH) {
		var aA, bL, bM, bN = value - ar[aH - 1];
		if (0 != bN) {
			for (bL = 1 + bO.bP(Math.abs(bN), aH - 1), bL = bN < 0 ? -bL : bL, ar[aH - 1] = value, bM = (bM = aH - 1 - bO.bP(Math.abs(bN), Math.abs(bL))) < 1 ? 1 : aH - 2 < bM ? aH - 2 : bM, aA = aH - 2; bM <= aA; aA--) ar[aA] += bN - (aH - 1 - aA) *
				bL;
			(bN < 0 ? function(aH) {
				var aA;
				for (aA = aH - 2; 1 <= aA; aA--) ar[aA] < 0 && (ar[aA] = -ar[aA] - 1)
			} : function(aH) {
				var aA;
				for (aA = aH - 2; 1 <= aA; aA--) ar[aA] >= aq && (ar[aA] = 2 * aq - ar[aA] - 1)
			})(aH)
		}
	}

	function bS(bT, bU, aH) {
		for (var aA = 0; aA < aH; aA++) bT[aA] = bU[aA]
	}

	function bV(bW) {
		for (var aA = 0; aA < bW.length - 1; aA++) bW[aA] = bW[aA + 1] - bW[aA];
		bW[bW.length - 1] = bW[bW.length - 3]
	}

	function bX(bY, gap, bZ) {
		at.push(bY), au.push(gap), av.push(bZ)
	}
	this.b0 = function(b1) {
		! function(b1) {
			var aA;
			for (d = b1[0], an = b1[1], ao = b1[2], ap = b1[3], ah = new Int16Array(d * an), max = an < d ? d : an, ar = new Int16Array(max), at = [], au = [], av = [], aw = new Array(d), ax = new Array(an), aA = d - 1; 0 <= aA; aA--) aw[aA] = !
			1;
			for (aA = an - 1; 0 <= aA; aA--) ax[aA] = !1;
			ay = new Int16Array(d), az = new Int16Array(an)
		}(b1),
		function(aH) {
			var b9 = bA.random() % aq,
				bB = bA.random() % (2 * ao + 1) - ao;
			bC(b9, bB, aH)
		}(max), bS(az, ar, an), bE(0, 0, !0, d);
		var bF, bG, b1 = ah[0],
			aH = max,
			bB = bA.random() % (2 * ao + 1) - ao;
		for (bC(b1, bB, aH), bS(ay, ar, d), bE(0, 0, !1, an), bV(ay), bV(az), bC(ah[d - 1], ay[d - 1], an), bE(d - 1, 0, !1, an), bC(ah[d * (an - 1)], az[an - 1], d), bK(ah[d * an - 1], d), bE(0, an - 1, !0, d), aw[d - 1] = aw[0] = !0, ax[an -
			1] = ax[0] = !0, bX(0, d, !0), bX(0, an, !1), ! function() {
				var bb, bY;
				for (;;) {
					if (bb = function() {
							var aA, bb = at.length - 1;
							for (aA = bb - 1; 0 <= aA; aA--) au[aA] > au[bb] && (bb = aA);
							return bb
						}(), au[bb] < 5) return;
					bY = at[bb] + bO.bP(au[bb], 2), (av[bb] ? function(bF) {
						var aH, be, aA, bf = 0,
							bg = 0;
						for (; bg < an - 1;) {
							for (aA = bf + 1; aA < an; aA++)
								if (ax[aA]) {
									bg = aA;
									break
								} aH = bg - bf + 1, bC(ah[bF + d * bf], 0 === bf ? ay[bF] : ar[be - 1] - ar[be - 2], aH), bK(ah[bg * d + bF], aH), bE(bF, bf, !1, aH), be = aH, bf = bg
						}
						aw[bF] = !0
					} : function(bG) {
						var aH, be, aA, bf = 0,
							bg = 0;
						for (; bg < d - 1;) {
							for (aA = bf + 1; aA < d; aA++)
								if (aw[aA]) {
									bg = aA;
									break
								} aH = bg - bf + 1, bC(ah[bG * d + bf], 0 === bf ? az[bG] : ar[be - 1] - ar[be - 2], aH), bK(ah[bG * d + bg], aH), bE(bf, bG, !0, aH), be = aH, bf = bg
						}
						ax[bG] = !0
					})(bY), bX(bY, at[bb] + au[bb] - bY, av[bb]), au[bb] = bY - at[bb] + 1
				}
			}(), bF = 0; bF < d; bF++)
			if (!aw[bF])
				for (bG = 0; bG < an; bG++) ax[bG] || ! function(bF, bG) {
					var value = ah[bG * d + bF - 1] + ah[(bG - 1) * d + bF],
						bi = 2;
					aw[bF + 1] && (bi++, value += ah[bG * d + bF + 1]);
					ax[bG + 1] && (bi++, value += ah[(bG + 1) * d + bF]);
					ah[bG * d + bF] = bO.bP(value, bi)
				}(bF, bG)
	}, this.b6 = function() {
		return ah
	}, this.b7 = function() {
		ah = null
	}
}

function bj() {
	this.bk = bl.bk, this.bm = 0, this.bn = 0, this.bo = 0, this.bp = null, this.bq = 7, this.br = 0, this.h = function() {
		this.bo = 0, this.bp = [], this.bm = 0, this.bn = 0
	}, this.bs = function(bt) {
		if (i.bu) this.bv(bt);
		else if (this.bp.push(bt), 2 === i.bw) {
			for (var aA = 0; aA < this.bp.length; aA++) bx.by.a9(this.bp[aA]);
			this.bp = []
		}
	}, this.bv = function(bt) {
		2 !== i.bw && (bx.by.a9(bt), bz.a9(), c0.bv(this.bo), this.bo === i.c1 ? (i.c2.a9(), this.bo = 0, this.bm = 0, this.bn = 0, this.bk = bl.bk) : (this.bo++, c3.c4(), c3.c5(!0), c6.c7()))
	}, this.a9 = function() {
		r.a9(), i.bu ? (bl.c8 = c0.bv(-1) || bl.c8, c9()) : (0 !== this.bm || bl.bk >= this.bk && (this.bk += bl.cA * Math.floor(1 + (bl.bk - this.bk) / bl.cA), 2 === i.bw ? cB() : this.cC(), this.bm++, 27 < bl.bk - this.br)) && this.cD(), cE(),
			bl.c8 && (bl.c8 = !1, cF()), this.br = bl.bk
	}, this.cD = function() {
		bl.c8 = !0, cG(), this.bm = 0
	}, this.cC = function() {
		var cH, aA;
		if (this.bn !== 7 * this.bo) cI(), c6.c7();
		else {
			cH = !1;
			loop: for (; this.cJ() && (cH = !0, cI(), 2 !== i.bw) && 0 < this.bp.length;)
				for (aA = this.bq - 2; 0 <= aA; aA--)
					if (cI(), 2 === i.bw) break loop;
			cH ? c6.c7() : (cB(), c6.cK())
		}
	}, this.cJ = function() {
		return 0 < this.bp.length && (this.bo++, bx.by.a9(this.bp[0]), this.bp.shift(), !0)
	}
}

function cL() {
	this.data = new cM;
	var cN = (new cO).L84,
		cQ = (this.cP = cN, !1);
	this.h = function() {
		var aH, bW;
		cQ = !1, "en" !== ce.cf.data[12].value.split("-")[0].toLowerCase() ? ce.cf.data[12].value === ce.cf.data[145].value && 0 < ce.cf.data[146].value && (aH = ce.cf.data[146].value, (bW = ce.ch.ci(aH, !1)).length === aH) && !!v.cj.ck(bW) &&
			function(bW) {
				for (var aH = bW.length, an = 0; an < aH; an++) bW[an] = bW[an].replace("&#39;", "'");
				var cm = ce.ch.ci(aH, !0);
				if (aH !== cm.length) return !1;
				if (!v.cj.ck(cm)) return !1;
				for (var cn = cN.length, co = new Array(cn), cp = cn === aH, aD = Math.min(aH, cn), aA = 0; aA < cn; aA++)
					if (co[aA] = cN[aA], aA < aH && cm[aA] === co[aA]) co[aA] = bW[aA];
					else {
						cp = !1;
						for (var cq = 0; cq < aD; cq++)
							if (cm[cq] === co[aA]) {
								co[aA] = bW[cq];
								break
							}
					} return cg.cP = co, cp
			}(bW) || (cQ = !0) : cg.cP = cN
	}, this.cV = function() {
		a1.cW(), cX.cW(), cY.cW(), cZ.cW(), ca.h(), cb = new cc
	}, this.cd = function() {
		return this.cP === cN || !cN.length
	}, this.cr = function() {
		var cs;
		cQ && (cQ = !1, 0 !== cN.length) && (cs = ce.cf.data[12].value, ct.cu.cv(0, cs.slice(0, 20)))
	}, this.cw = function(bW) {
		bW.length === cN.length && (this.cP = bW, ce.cx.cy(145, ce.cf.data[12].value), ce.cx.cy(146, bW.length), ce.ch.cz(bW, !1), ce.ch.cz(cN, !0), 0 === d0.d1()) && 5 === d2.d3 && d2.d4.d5()
	}, this.d6 = function() {
		var d7, bW = navigator.languages;
		return bW && bW.length ? (d7 = Math.max(cg.data.d8(bW[0]), 0), 1 === bW.length ? [d7, d7] : [d7, Math.max(cg.data.d8(bW[1]), 0)]) : [0, 0]
	}
}

function d9() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 === i.data.playerNamesType && 1 === v.cj.dO(i.data.playerNamesData).length && (i.data.playerNamesType = 0), 2 !== i.data.playerNamesType && (i.data.playerNamesData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.playerNamesType && v.cj.dP(dC.dQ(), i.data.playerNamesData, 20)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(0), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(3), L(4), L(5)],
			value: i.data.playerNamesType
		}, function(bm) {
			dK(), i.data.playerNamesType = bm, d2.da(23)
		})), dU.db(new dc), dU.db(new dd({
			value: i.data.selectableName
		}, L(6), function(value) {
			i.data.selectableName = value
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU;
		2 === i.data.playerNamesType && ((dU = new dV).dW("Data"), dC = new de(0, 1, 0, 1), i.data.playerNamesData && i.data.playerNamesData.length === i.df || (i.data.playerNamesData = new Array(i.df), i.data.playerNamesData.fill("")),
			dC.dg(v.dh.di(i.data.playerNamesData, 1, '"')), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function dm() {
	var dn = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		dp = [t.dq, t.dq, t.dr, t.ds, t.dt, t.du, t.dv, t.dr, t.dw, t.dx, t.dy],
		dz = [
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
		e0 = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function ek(el, e7, eo) {
		for (var cq = el.length - 1; 0 <= cq; cq--) {
			var eW = el[cq];
			0 === eW.id && eW.e7 === e7 && (eW.e8 = "[Redacted Message]", eo) && (eW.ep = 1)
		}
	}
	this.e1 = function(e2) {
		var e3, e9;
		return e2.id < 5 && (e3 = "@" + e4.e5.e6(e2.e7, 5)), 0 === e2.id ? e3 + ": " + e2.e8 : 1 === e2.id ? (e9 = "@" + e4.e5.e6(e2.target, 5), 0 === e2.eA ? 32768 <= e2.value ? e3 + " voted with " + (e2.value - 32768 + 1) + " gold against " +
				e9 + " to weaken the latter's admin position. 📉" : e3 + " voted with " + (e2.value + 1) + " gold for " + e9 + " to strengthen the latter's admin position. 💪" : 1 === e2.eA ? e3 + " sent " + Math.floor(e2.value / 100) +
				" 🧈 gold to " + e9 + "." : e3 + " voted with " + (e2.value / 10).toFixed(1) + " points for " + e9 + " to acknowledge the latter as clan leader. ✅") : 2 === e2.id ? 0 === e2.eA ? e3 + " was 🔇 muted for 1 Hour." : 1 === e2.eA ?
			"The username of " + e3 + " was ✂️ redacted. Duration: 1 Day" : e3 + " 👢 was kicked." : 3 === e2.id ? e3 + cb.eB(e2.eA, cb.eC[e2.eA][e2.value]) + "@" + e4.e5.e6(e2.target, 5) + cb.eD(e2.eA, cb.eC[e2.eA][e2.value]) : 4 === e2.id ?
			e3 + cb.eB(5, cb.eC[5][e2.eA]) + "@" + e4.e5.e6(e2.target, 5) + cb.eD(5, cb.eC[5][e2.eA]) : 5 === e2.id ? e0[e2.eA] : 6 === e2.id ? "You are about to mention " + e2.value + " player" + (1 === e2.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * e2.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.eE = function(e2, eF) {
		return {
			e2: e2,
			e8: eF,
			eG: 0,
			fontSize: 1,
			eH: 0,
			eI: e2.id ? t.eJ : t.u
		}
	}, this.eK = function(player, eL) {
		return (2 === eL ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.eM = function(eN) {
		return dp[eN]
	}, this.eO = function(eN, eP) {
		return eN < 3 || 7 === eN ? dz[eN][0] : 4 === eN ? dz[eN][eP < 1 ? 0 : eP < 10 ? 1 : 2] : dz[eN][eP < 10 ? 0 : 1]
	}, this.eQ = function(eP) {
		return 0 === eP
	}, this.eR = function(eL, e7) {
		for (var eS = eT.eU.eS, eU = eS[eL], aH = eU.length, aA = 0; aA < aH; aA++)
			if (e7 === eU[aA].e7) return eU[aA];
		for (var cq = 0; cq < eS.length; cq++)
			if (eL !== cq)
				for (aH = (eU = eS[cq]).length, aA = 0; aA < aH; aA++)
					if (e7 === eU[aA].e7) return eU[aA];
		return null
	}, this.eV = function(eW) {
		return !!eT.eX && eW.e7 === eT.eX.e7
	}, this.eY = function(eU, eZ, ea) {
		var eb = [];
		loop: for (var aA = eZ; aA < ea; aA++) {
			var ec = v.dh.ed(eU[aA].username);
			if (ec) {
				for (var cq = eb.length - 1; 0 <= cq; cq--)
					if (ec === eb[cq].name) {
						eb[cq].aD++;
						continue loop
					} eb.push({
					name: ec,
					aD: 1
				})
			}
		}
		if (eb.sort(function(ee, cq) {
				return cq.aD - ee.aD
			}), 0 === eb.length) return "";
		for (var ef = eb[0].name + ": " + eb[0].aD, aA = 1; aA < eb.length; aA++) ef += "   " + eb[aA].name + ": " + eb[aA].aD;
		return ef
	}, this.eg = function(eN, eP, eh) {
		return 0 === dn[eN].length ? "Rank: " + (eP + 1) : dn[eN] + " Rank: " + (eP + 1) + (3 !== eN && eh < 100 ? "   " + dn[3] + " Rank: " + (eh + 1) : "")
	}, this.ei = function(e7) {
		for (var ej = eT.d4.ej, aA = 0; aA < ej.length; aA++) ek(ej[aA].el, e7);
		ek(eT.message.em(), e7, 1), eT.en.ei(e7)
	}
}

function eq() {
	this.er = new es, this.result = new et, this.eu = new ev, this.ew = new ex, this.ey = new ez, this.f0 = new f1, this.h = function() {
		this.result.h()
	}
}

function f2() {
	var f3, f4;

	function fE() {
		(f3 = new WebSocket("wss://territorial.io/s52/")).onopen = fK, f3.onclose = function() {
			fL()
		}
	}

	function fK() {
		if (f3 && f3.readyState === f3.OPEN) {
			var d = new fN;
			d.b0(1608), d.fO(1, 0), d.fO(6, 7), d.fO(2, n ? n.id : 3), d.fO(1, f9.fP ? 1 : 0), d.fO(1, f9.fQ ? 1 : 0), d.fO(1, f9 ? f9.fA : 0);
			for (var aA = 0; aA < f4.length && aA < 228; aA++) d.fO(7, f4.charCodeAt(aA) % 128);
			f3.send(d.bt), fL()
		}
	}

	function fL() {
		f3 && (f3.onclose = null, f3.onopen = null, f3 = null)
	}
	window.addEventListener("error", function f5(f6) {
		window.removeEventListener("error", f5);
		return alert("Error:\n" + f6.filename + " " + f6.lineno + " " + f6.colno + " " + f6.message);
		f4 = "";
		try {
			var bW;
			if (window.removeEventListener("error", f5), f4 = f6.lineno + " " + f6.colno + "|" + function(f6) {
					if (!f6.error) return "NoStack";
					var stack = f6.error.stack;
					if (!stack || !stack.length) return "NoStack";
					for (var match, fM = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = fM.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
					return result.length ? result.join(" ") : "NoStack"
				}(f6), performance.memory && ((bW = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), bW.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), bW.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)),
					f4 = f4 + "|" + bW.join(" ")), f4 = (f4 = r ? f4 + "|R" + r.d + "," + r.an + "," + r.f8.toFixed(2) : f4) + "|" + f6.message, f9 && 1 === f9.fA) {
				if (f4 = f9.fB + "|" + fC.fD.join(",") + "|" + f4, f6.lineno < 43) return void fE();
				var e8 = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
				e8 += "<br>Error Message: " + f4, fC.fF(), d2.da(4, 5, new fG("🤖 Beep Boop! An error occurred.", e8, !0, [new dF("Close", function() {
					d2.fH(), d2.d4.fI()
				}), new dF("Reload", function() {
					n.o.fJ()
				})]))
			}
		} catch (f6) {
			f4 = "SE|" + f4 + "|" + f6, console.log(f4), alert(f4)
		}
		fE()
	})
}

function fR() {
	this.fS = function() {
		for (var aL, aH = aF.aI, fT = aF.aE, fU = a5.fU, fV = this.fW(), aA = 0; aA < aH; aA++) aL = fT[aA], v.fX.fY(aL) || (fU[aL] = fV);
		var fZ = a5.fZ,
			fa = a5.fa,
			fb = a5.fb,
			fc = a5.fc,
			aH = i.fd;
		for (aA = 0; aA < aH; aA++)(0 === fc[aA] || fb[aA] < 1 || 2 * fZ[aA] > 3 * (fa[aA] + fb[aA])) && (fU[aA] = 0);
		var fe = 0;
		for (aA = 0; aA < aH; aA++) fe += 0 < fU[aA];
		return fe
	}, this.fW = function() {
		return Math.min(65535, bl.ff())
	}
}

function fg() {
	this.fh = 1098, this.fB = 2089, this.rVersion = 9, this.fi = 0, this.h = function() {
		this.fj = 2;
		var a4 = bO.bP(this.fB, 10) % 100;
		this.fk = "4 Jul 2025 [" + bO.bP(this.fB, 1e3) + "." + (a4 < 10 ? "0" : "") + a4 + "." + this.fB % 10 + "]", this.fP = true, this.fQ = function() {
			try {
				return window.self !== window.top
			} catch (f6) {
				return !0
			}
		}(), this.fm = (new Date).getTime() % 1024
	}, this.fA = 0
}

function fn() {
	function ft(fw) {
		eT.d4.fp && 1 === eT.d4.fo[2] && d2.fx(29).fy(), eT.d4.fp = 0, d2.fx(29).fz(), 0 !== eT.d4.ej[eT.d4.fo[0]].g0 && !fw || d2.fx(29).g1(), eT.g2.g3()
	}
	this.ej = new Array(4), this.fo = [0, 0, 1, 0], this.fp = 0, this.fq = [0, 0], this.h = function() {
		for (var aA = 0; aA < this.ej.length; aA++) this.ej[aA] = new fr;
		this.fo[0] = ce.cf.data[158].value
	}, this.fs = function() {
		ft(!0)
	}, this.fu = function() {
		for (var aA = 0; aA < eT.d4.ej.length; aA++) {
			var g4 = eT.d4.ej[aA];
			0 === g4.g0 ? g4.g5 = 0 : (g4.g6 = Math.max(g4.g6 - g4.g5 % 2, 0), g4.g5++)
		}
		ft(!1)
	}, this.g7 = function(eL) {
		this.fo[0] !== eL || this.fo[2] || d2.fx(29).g8()
	}
}

function g9() {
	var bm = 0,
		gA = new Uint16Array(32);

	function remove(bY) {
		var aA;
		for (bm -= 2, aA = bY; aA < bm; aA += 2) gA[aA] = gA[aA + 2], gA[aA + 1] = gA[aA + 3]
	}
	this.h = function() {
		bm = 0
	}, this.a9 = function() {
		var aA, gH, gI;
		if (0 !== bm)
			if (0 === a5.gB[i.gC] || gD.gE(i.gC) === gD.gF(i.gC)) bm = 0;
			else
				for (aA = bm - 2; 0 <= aA; aA -= 2)(gH = gA[aA]) < i.df && 0 === a5.gB[gH] ? remove(aA) : (gI = gA[aA + 1], (i.df <= gH && gJ(i.gC) || gH < i.df && gK(i.gC, gH)) && (bx.gL.gM(gI, gH), remove(aA)))
	}, this.gN = function(gH, gI) {
		! function(gH, gI) {
			var aA;
			for (aA = 0; aA < bm; aA += 2)
				if (gA[aA] === gH) return gA[aA + 1] = Math.min(gA[aA + 1] + gI, 1023), 1;
			return
		}(gH, gI) && 32 !== bm && (gA[bm] = gH, gA[bm + 1] = gI, bm += 2)
	}
}

function gP(data) {
	var gQ, gR, gS, gT, gU, gV, gW, colors, gX, gY, gZ = 0,
		ga = 0,
		gb = !1,
		gc = !1,
		gd = [1, 5, 60, 240, 1440, 10080, 43200];

	function hV(hT, hU) {
		! function(hT, hU) {
			return gR < hT && hT < gR + gT && gS < hU && hU < gS + gU
		}(gZ = hT, ga = hU) ? (gb && (bl.c8 = !0), gb = !1) : (gb = !0, bl.c8 = !0)
	}
	this.show = function() {
		gc = ce.cf.data[127].value, gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize();
		var aR = r.f8,
			gt = gQ.gu(),
			gv = aR * gt.gw,
			aR = aR * gt.gx;
		gV = v.w.gy(.06), gW = v.w.gy(.04), gR = v.w.gy(.06), gS = aR + gV, gT = r.d - gR - gW, gU = gv + aR - gS - gW
	}, this.ai = function() {
		gQ.ai(),
			function() {
				var aA, gm, aD, bF, ee, bW = data.data,
					h3 = 1,
					h4 = .125,
					h5 = gc ? 65536 : 0;
				for (aA = 0; aA < bW.length; aA++)
					for (gm = bW[aA].gm, aD = gm.length, h3 = Math.max(aD, h3), ee = 0; ee < aD; ee++) h4 = Math.max(gm[ee], h4), h5 = Math.min(gm[ee], h5);
				var h6 = gS + gU,
					h7 = gU / (h4 - h5),
					h8 = 1 / (h3 - 1);
				for (aj.lineWidth = ak.h2, aA = 0; aA < bW.length; aA++) {
					for (gm = bW[aA].gm, aD = gm.length, bF = gR, aj.beginPath(), aj.moveTo(bF + gT, h6 - h7 * (gm[aD - 1] - h5)), ee = aD - 2; 0 <= ee; ee--) aj.lineTo(bF + h8 * ee * gT, h6 - h7 * (gm[ee] - h5));
					aj.strokeStyle = colors[aA], aj.stroke()
				}(function(h5, h4, h6, h7) {
					aj.font = v.w.ae(0, .25 * gR), v.w.textBaseline(aj, 1), v.w.textAlign(aj, 2), aj.fillStyle = colors[0];
					for (var bF = .92 * gR, aA = 0; aA < 3; aA++) {
						var ah = h5 + aA * (h4 - h5) / 2;
						aj.fillText((ah / 1e3).toFixed(3), bF, h6 - h7 * (ah - h5))
					}
				})(h5, h4, h6, h7),
				function(h3) {
					var bG = gS + gU + .15 * gW;
					aj.font = v.w.ae(0, Math.min(.4 * gW, .028 * r.d)), v.w.textBaseline(aj, 0), v.w.textAlign(aj, 2), aj.fillStyle = colors[0], aj.fillText(v.gj.hC(gX), gR + gT, bG), v.w.textAlign(aj, 0), aj.fillText(v.gj.hC(new Date(gY
					.getTime() - 6e4 * (h3 - 1) * gd[data.gi])), gR, bG)
				}(h3),
				function(h3, h5, h4) {
					if (gb && !(h3 < 2)) {
						for (var hN, bm = (gZ - gR) / gT * (h3 - 1), hD = Math.floor(bm), hE = Math.floor(1 + bm), hF = bm - hD, hG = 1e5, hH = -1, hI = -1, hJ = h4 - (h4 - h5) * (ga - gS) / gU, bW = data.data, aA = 0; aA < bW.length; aA++) {
							var hK, gm = bW[aA].gm;
							gm.length <= hE || (gm = gm[hD] + hF * (gm[hE] - gm[hD]), (hK = Math.abs(hJ - gm)) < hG && (hG = hK, hH = aA, hI = gm))
						} - 1 !== hH && (h4 = gS + gU - (hI - h5) / (h4 - h5) * gU, aj.lineWidth = .5 * ak.h2, aj.strokeStyle = colors[hH], aj.beginPath(), aj.moveTo(gR, h4), aj.lineTo(gZ, h4), aj.lineTo(gZ, gS + gU), aj.stroke(), aj.beginPath(),
							aj.arc(gZ, h4, .1 * gR, 0, 2 * Math.PI), aj.fillStyle = colors[hH], aj.fill(), h5 = gS + gU + .15 * gW, v.w.textAlign(aj, 1), hN = h3 - 2 < bm ? (hN = gY.getTime() - 6e4 * gd[data.gi], new Date(hN + (bm - (h3 -
								2)) * (gX.getTime() - hN))) : new Date(gY.getTime() - 6e4 * (h3 - bm - 1) * gd[data.gi]), h3 = v.gj.hC(hN), bm = v.w.measureText(h3), hN = bO.hQ(gZ, gR + .5 * bm, gR + gT - .5 * bm), aj.fillStyle = v.color.gs(
								70, 50, 20), aj.fillRect(hN - .52 * bm, gS + gU, 1.04 * bm, .55 * gW), aj.fillStyle = colors[0], aj.fillText(h3, hN, h5), aj.font = v.w.ae(0, .25 * gR), v.w.textBaseline(aj, 1), v.w.textAlign(aj, 2), hN = .92 *
							gR, h3 = (hI / 1e3).toFixed(3), bm = v.w.measureText(h3), h5 = hN - 1.04 * bm, aj.fillStyle = v.color.gs(70, 50, 20), aj.fillRect(h5, h4 - .1625 * gR, gR - h5, .275 * gR), aj.fillStyle = colors[hH], aj.fillText(h3,
								hN, h4))
					}
				}(h3, h5, h4)
			}(), aj.lineWidth = ak.h2, aj.strokeStyle = t.u, aj.beginPath(), aj.moveTo(gR, gS), aj.lineTo(gR, gS + gU), aj.lineTo(gR + gT, gS + gU), aj.stroke();
		var aA, fontSize = .5 * gV,
			bW = (aj.font = v.w.ae(0, fontSize), v.w.textBaseline(aj, 1), v.w.textAlign(aj, 0), data.data),
			aH = bW.length,
			bG = gS - .5 * gV,
			ef = "";
		for (aA = 0; aA < aH; aA++) ef += bW[aA].name + "  ";
		ef = ef.trim();
		var hO = v.w.measureText(ef),
			bF = .5 * (r.d - hO);
		for (r.d < hO && (bF = 0, aj.font = v.w.ae(0, r.d / hO * fontSize)), aA = 0; aA < aH; aA++) aj.fillStyle = colors[aA], aj.fillText(bW[aA].name, bF, bG), bF += v.w.measureText(bW[aA].name + "  ")
	}, this.hS = function(hT, hU) {
		hV(hT, hU)
	}, this.hW = function(hT, hU) {
		hV(hT, hU)
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	};
	var aA, a4, go, gp, gl = data.data,
		aH = gl.length,
		max = 1;
	for (aA = 0; aA < aH; aA++) max = Math.max(max, gl[aA].gm.length);
	for (aA = 0; aA < aH; aA++)
		for (; gl[aA].gm.length < max;) gl[aA].gm.unshift(0);
	a4 = new Date, go = 6e4 * a4.getTimezoneOffset(), gp = a4.getTime() - go, gX = new Date(gp), 6 === data.gi ? function(a4, go) {
		var gr = a4.getUTCFullYear(),
			a4 = a4.getUTCMonth() + 1;
		gY = a4 < 12 ? new Date(Date.UTC(gr, a4) - go) : new Date(Date.UTC(gr + 1, 0) - go)
	}(a4, go) : (go = 6e4 * gd[data.gi], gY = data.gi <= 4 ? new Date(gp + go - a4.getTime() % go) : new Date(gp + go - (a4.getTime() + 2592e5) % go)), gp = v.color, colors = [t.u, gp.gs(255, 0, 0), gp.gs(0, 200, 0), gp.gs(80, 80, 255), gp.gs(
		255, 255, 0), gp.gs(255, 0, 255), gp.gs(0, 255, 255), gp.gs(255, 140, 0), gp.gs(128, 128, 128), gp.gs(0, 255, 140)], gQ = new dE(L(7) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.gi] + ", " + v.gj.gk(gX), [new dF("⬅️ " + L(1),
		function() {
			d2.da(1)
		}), new dF(L(8), function() {
		d2.da(14)
	})], !1)
}

function dV() {
	var hZ;
	this.hY = [], this.hZ = document.createElement("div"), this.dW = function(ef, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ef, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.hZ.appendChild(
			title), title
	}, this.ha = function(ef, marginBottom) {
		var hb = document.createElement("p");
		return hb.textContent = ef, hb.style.fontSize = "0.75em", hb.style.lineHeight = "1.2em", hb.style.marginBottom = marginBottom || "0", this.hZ.appendChild(hb), hb
	}, this.hc = function(ef) {
		var hd = document.createElement("p");
		return hd.textContent = ef, hd.style.fontSize = "1em", hd.style.marginBottom = "0", hd.style.whiteSpace = "pre-wrap", hd.style.overflowWrap = "break-word", this.hZ.appendChild(hd), hd
	}, this.he = function(hf, fontSize) {
		var hZ = document.createElement("div");
		return hZ.innerHTML = hf, hZ.style.fontSize = fontSize || "1em", hZ.style.lineHeight = "1.2em", this.hZ.appendChild(hZ), hZ
	}, this.dX = function(hg) {
		for (var hh = hg.hh, aH = hh.length, aA = 0; aA < aH; aA++) this.hZ.appendChild(hh[aA])
	}, this.db = function(eW) {
		return this.hY.push(eW), this.hZ.appendChild(eW.f6), eW
	}, this.resize = function() {
		for (var aH = this.hY.length, aA = 0; aA < aH; aA++) this.hY[aA].resize && this.hY[aA].resize()
	}, (hZ = this.hZ).style.position = "absolute", hZ.style.height = "auto", hZ.style.padding = "0.5em"
}

function es() {
	function hj() {
		if (2 === i.bw) return 1;
		hn.ho(), i.bw = 2, i.hp = i.hq
	}

	function hl() {
		hr.ey.gG(), hs.show(1 === i.ht, !1, 2 === i.ht), hr.result.gG(), hr.f0.a9(), hr.ew.a9(), hu.hv(!0), hu.hw(247), hu.hw(956), hu.hw(957), hx.c5(!0), c0.c5(!0), hn.c5(), hy.hz(), i.i0 && bl.i1.i2(), bl.c8 = !0, c6.i3(), n.o.setState(0)
	}
	this.hi = function() {
		hj() || (i.hk = 2, hl())
	}, this.hm = function() {
		hj() || (i.hk = 1, hl())
	}
}

function i4() {
	function i8(bW, ah, gp) {
		for (var aA = 0; aA < 256; aA++) bW[aA] = (bW[aA] + (ah >> (aA + gp) % 30 & 1)) % 256
	}
	this.a9 = function(i5, i6) {
		var bW = new Uint8Array(256);
		return function(bW, i5, i6) {
				var aA, iB = 3 + (4 + i5) % 32768,
					iC = 12 + i6 % 32768,
					iD = 17 + ((i5 & i6) + (i5 | i6) + i5) % 32768;
				for (aA = 0; aA < 256; aA++) iB = 1 + iB * iC % iD, bW[aA] = iB % 256
			}(bW, i5, i6), i8(bW, i5, 2), i8(bW, i6, 7),
			function(bW) {
				var aA, ah, bm = 0;
				for (aA = 0; aA < 3e4; aA++) ah = bW[bm], bW[bm] = (ah + aA + bW[(bm + aA) % 256]) % 256, bm = (ah + aA + bm + (ah & bm)) % 256
			}(bW),
			function(bW) {
				var aA, iE = 1,
					iF = 1;
				for (aA = 0; aA < 256; aA += 2) iE = (1 + iE) * (bW[aA] + 1) % 1073741824, iF = (1 + iF) * (bW[aA + 1] + 1) % 1073741824;
				return [iE, iF]
			}(bW)
	}
}

function iG() {
	this.iH = function(iI) {
		var username = ce.cf.data[122].value.slice(0, 20),
			username = (iJ.b0(24 + 16 * username.length + 18 + 18), iJ.fO(1, 0), iJ.fO(6, 1), iJ.fO(10, f9.fm), iJ.fO(2, ce.cf.data[158].value), ct.cu.iK(username), v.color.iM(ce.d4.iN())),
			username = (iJ.fO(6, username[0]), iJ.fO(6, username[1]), iJ.fO(6, username[2]), cg.d6());
		iJ.fO(9, username[0]), iJ.fO(9, username[1]), ct.d4.iP = iI, ct.d4.send(iI, iJ.bt)
	}, this.iQ = function(iR, b1) {
		iS.h(), iS.fO(1, 0), iS.fO(6, 2), iS.fO(3, iR), 2 === iR ? iS.fO(2, b1) : 3 === iR ? e4.iT.iU(b1, 7, iS) : 5 === iR && (iS.fO(3, b1.id), iS.fO(3, b1.value), iS.fO(30, b1.e7)), ct.d4.send(ct.d4.iP, iS.iV())
	}
}

function L(value, iW, iX) {
	var ef = "number" == typeof value ? cg.cP[value] : value;
	if (iX && cg.cd() && (ef = iX), iW)
		for (var aH = iW.length, aA = 0; aA < aH; aA++)
			for (var ee = 0; ee < 3; ee++) ef = ef.replace("{" + (10 * ee + aA) + "}", iW[aA]);
	return ef
}

function iY(iZ, size, ia, ib, font) {
	var aA, ig = .2,
		canvas = document.createElement("canvas"),
		ih = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iZ, canvas.height = iZ, ih.font = size + font, ih.textAlign = "center", ih.textBaseline = "middle", ih.fillStyle = "red", aA = 0; aA < ia.length; aA++) ih.fillText(ia[aA], .5 * iZ, .5 * iZ);
	return -1 < (canvas = function(ic) {
		var aA, aS, gl = ic.data;
		for (aA = gl.length - 4; 0 <= aA; aA -= 4)
			if (aS = gl[aA], ib <= aS) return Math.floor(aA / (4 * iZ));
		return -1
	}(ih.getImageData(0, 0, iZ, iZ))) && (ig = (canvas - .5 * iZ + .1 * size) / size), Math.max(ig, 0)
}

function ij() {
	var dA, dB, dR;

	function im() {
		var aD;
		1 === i.data.gameMode ? (i.data.teamPlayerCount || (i.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), i.it.iu()), aD = v.cj.iv(i.data.teamPlayerCount, 0), i.data.numberTeams = aD) : (2 === i.data.botDifficultyType && (i
			.data.botDifficultyType = 0), 1 === i.data.spawningType && (i.data.spawningType = 0))
	}

	function dG() {
		1 !== i.data.gameMode && (i.data.teamPlayerCount = null), iw(), i.data.canvas = null, d2.da(5, 5)
	}

	function iw() {
		bz.ix.h(), ce.cx.cy(156, bz.iy.iU())
	}

	function ik() {
		i.data.isReplay = 0, iw(), i.it.iz(), d0.j0(), i.it.j1(), i.data.canvas = 2 === i.data.mapType ? ip.iq : null, i.j2(), i.j3 = 1
	}

	function jL() {
		im();
		for (var bW = [j7(), j8(), j9()], aA = 3; aA < 6; aA++) dB.jM.removeChild(dB.jN[aA].hZ), dB.jN[aA] = bW[aA - 3], dB.jM.appendChild(dB.jN[aA].hZ);
		dB.resize()
	}

	function j7() {
		var jO, dU = new dV;
		return dU.dW(L(15)), jO = 0 === i.data.gameMode ? [L(16), L(5)][i.data.colorsType] : i.data.numberTeams + " Team" + (1 === i.data.numberTeams ? "" : "s"), dU.he(jO), dU.db(new jH([new dF(L(12), function() {
			d2.da(21)
		}).button])), dU
	}

	function j8() {
		var dU = new dV,
			bW = (dU.dW(L(17)), [L(18) + ": " + cX.jP[i.data.botDifficultyValue], L(19), L(20), L(5)]);
		return dU.he(bW[i.data.botDifficultyType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(25)
		}).button])), dU
	}

	function j9() {
		var dU = new dV,
			bW = (dU.dW("Spawning"), [L(16), L(21), L(5)]);
		return dU.he(bW[i.data.spawningType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(24)
		}).button])), dU
	}
	this.show = function() {
		dA.show(), this.resize(), dA.dI.scrollTop = d2.d4.jR[0]
	}, this.dj = function() {
		d2.d4.jR[0] = dA.dI.scrollTop, dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE("🔧 " + L(9), [new dF("⬅️ " + L(1), dG), new dF(L(10), ik)]), im(), i.data.canvas || (2 === i.data.mapType ? i.data.canvas = ip.iq : 1 === i.data.mapType ? i.data.canvas = ip.ir(ip.is(i.data), 0).iq : (i.data.mapType = 0, i
		.data.passableWater = i.data.passableMountains = 1, i.data.canvas = ip.ir(ip.is(i.data), i.data.mapSeed).iq)), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV,
			jG = (dU.dW(L(11)), i.data.canvas);
		jG.style.width = "100%", dU.db({
			f6: jG
		}), dU.db(new jH([new dF(L(12), function() {
			d2.da(20)
		}).button])), dR.push(dU)
	}(dR = []), function(dR) {
		var dU = new dV;
		dU.dW(L(13)), dU.db(new jI({
			bm: -1,
			value: i.data.playerCount
		}, 1, 0, function(f6) {
			var playerCount = bO.hQ(Math.floor(f6.target.value), 1, 512);
			f6.target.value = i.data.playerCount = playerCount, 1 === i.data.gameMode && (f6 = v.cj.iv(i.data.teamPlayerCount, 0), i.it.iu(), v.cj.iv(i.data.teamPlayerCount, 0) !== f6) && jL()
		})), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV;
		dU.dW(L(14)), dU.dX(new dY({
			dZ: ["Battle Royale", "Teams"],
			value: i.data.gameMode
		}, function(bm) {
			i.data.gameMode !== bm && (i.data.gameMode = bm, jL())
		})), dR.push(dU)
	}(dR), dR.push(j7()), dR.push(j8()), dR.push(j9()), function(dR) {
		var dU = new dV,
			bW = (dU.dW(L(0)), [L(3), L(4), L(5)]);
		dU.he(bW[i.data.playerNamesType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(23)
		}).button])), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV,
			bW = (dU.dW(L(22)), [L(23), L(18) + ": " + i.data.aIncomeValue, L(5)]);
		dU.he(bW[i.data.aIncomeType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(22)
		}).button])), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV,
			bW = (dU.dW(L(24)), [L(23), L(18) + ": " + i.data.tIncomeValue, L(5)]);
		dU.he(bW[i.data.tIncomeType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(26)
		}).button])), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV,
			bW = (dU.dW(L(25)), [L(23), L(18) + ": " + i.data.iIncomeValue, L(5)]);
		dU.he(bW[i.data.iIncomeType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(27)
		}).button])), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV,
			bW = (dU.dW(L(26)), [L(23), L(18) + ": " + i.data.sResourcesValue, L(5)]);
		dU.he(bW[i.data.sResourcesType]), dU.db(new jH([new dF(L(12), function() {
			d2.da(28)
		}).button])), dR.push(dU)
	}(dR), function(dR) {
		var dU = new dV;
		dU.dW(L(27)), dU.db(new jH([new dF(L(28), function() {
			d2.fH(), i.it.jQ(), d2.d4.jR[0] = 0, d2.da(19)
		}).button])), dU.db(new jH([new dF(L(29), function() {
			jS.jT()
		}).button])), dU.db(new jH([new dF(L(30), function() {
			return jS.jU(), !0
		}).button])), dR.push(dU)
	}(dR), dR))
}

function jV() {
	this.jW = function() {
		var aA;
		if (jX.size < iJ.jY(23)) ct.d4.jZ(0, 3259);
		else {
			var ja = jX.jb(6),
				aH = jX.jb(10),
				data = [];
			if (9 === ja || 10 === ja || 11 === ja) {
				for (aA = 0; aA < aH; aA++) data.push([jX.jb(30), jc.iT.jd(5), jX.je(32), 0, jX.jb(30)]);
				8 === d2.d3 && d2.jf().jg(21, !0, {
					ja: ja,
					data: data
				})
			} else if (12 === ja) {
				for (aA = 0; aA < aH; aA++) data.push([jX.jb(20), jX.jb(30), jX.jb(30), jX.je(32), jX.jb(30), jc.iT.jd(5), jc.iT.jd(5)]);
				8 === d2.d3 && d2.jf().jg(21, !0, {
					ja: ja,
					data: data
				})
			} else {
				var ia = jX.jb(16);
				if (jX.jh(39 + 16 * ia + aH * (0 === ja ? 111 : 1 === ja ? 101 : 2 === ja || 3 === ja ? 127 : 212))) {
					if (0 === ja)
						for (aA = 0; aA < aH; aA++) data.push([jX.jb(30), jc.ji.jj(jX.jb(5)), jX.jb(16), jX.jb(30), jX.jb(30)]);
					else if (1 === ja)
						for (aA = 0; aA < aH; aA++) data.push([jX.jb(16), jc.ji.jj(jX.jb(3)), jX.jb(16), jc.ji.jj(jX.jb(5)), jX.jb(31), jX.jb(30)]);
					else if (2 === ja || 3 === ja)
						for (aA = 0; aA < aH; aA++) data.push([jX.jb(30), jc.ji.jj(jX.jb(5)), jX.je(32), jX.jb(30), jX.jb(30)]);
					else
						for (aA = 0; aA < aH; aA++) data.push([jX.jb(20), jX.jb(30), jX.jb(30), jX.jb(30), jX.jb(30), jX.je(32), jX.jb(30), jc.ji.jj(jX.jb(5)), jc.ji.jj(jX.jb(5))]);
					8 === d2.d3 && d2.jf().jg(21, !0, {
						ja: ja,
						data: data
					})
				} else ct.d4.jZ(0, 3260)
			}
		}
	}, this.jk = function() {
		if (jX.size < iJ.jY(29)) ct.d4.jZ(0, 3265);
		else {
			var jl = jX.jb(4),
				jm = jX.jb(7),
				jn = jX.jb(11);
			if (jX.jh(29 + 16 * jm + 16 * jn + 11 * jl)) {
				for (var data = [], aA = 0; aA < jl; aA++) {
					for (var ec = jc.ji.jj(jX.jb(3)), jo = jX.jb(8), gm = [], ee = 0; ee < jo; ee++) gm.push(jX.jb(16));
					data.push({
						name: "[" + ec + "]",
						gm: gm
					})
				}
				8 === d2.d3 && d2.jf().jg(23, !0, data)
			} else ct.d4.jZ(0, 3266)
		}
	}
}

function jp() {
	this.jq = !1;
	this.jv = [], this.jw = 100;
	var jr, h6, gap, iZ, js, ju, jx = 0,
		jy = new Array(9),
		jz = [],
		k0 = [],
		k1 = 0,
		k2 = 0,
		k3 = 0,
		k4 = 0;

	function kN() {
		jy.sort(function(ee, cq) {
			return cq.kK - ee.kK
		});
		for (var ef = "" + jy[0].kJ, aA = 1; aA < 9; aA++) ef += "," + jy[aA].kJ;
		for (aA = 0; aA < 9; aA++) ef += "," + jy[aA].kK;
		ce.cf.kO(120, ef)
	}
	this.h = function() {
		for (var k5 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < k5.length; aA++) {
			var color = 6 === k5[aA] ? t.k6 : t.k7;
			this.jv.push(v.canvas.k8(k9.get(3), k5[aA], color))
		}
		for (aA = 0; aA < kA.en.kB; aA++) k0.push(kA.en.kC - kA.en.kB + aA);
		for (aA = 0; aA < kA.en.kD; aA++) k0.push(kA.en.kE + aA);
		var kF = kA.en.kG(kH.kF);
		for (aA = 0; aA < kF.length; aA++) k0.push(kF[aA]);
		! function() {
			var aA, bW = ce.cf.data[120].value.split(",");
			if (18 !== bW.length)
				for (aA = 0; aA < 9; aA++) jy[aA] = {
					kJ: 1015 + aA,
					kK: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var ah = parseInt(bW[aA]),
						aR = (ah = 0 <= ah && ah < kA.en.kC ? ah : 0, parseInt(bW[aA + 9]));
					aR = 0 <= aR && aR < 1e3 ? aR : 0, jy[aA] = {
						kJ: ah,
						kK: aR
					}
				}
		}()
	}, this.show = function(hT, hU, kP) {
		var aA;
		if (k1 = hT, k2 = hU, jx = kP || 0, this.jq = !0, jz = [], 0 === jx)
			for (aA = 0; aA < 9; aA++) jz.push(jy[aA].kJ);
		else {
			var cq = 49 * jx,
				kP = cq - 49;
			for (kP >= k0.length && (jx = 1, kP = 0, cq = 49), aA = kP = (cq = Math.min(cq, k0.length)) - 49; aA < cq; aA++) jz.push(k0[aA])
		}
		jz.push(1024);
		kP = jz.length, iZ = Math.floor((n.o.p() ? .075 : .0468) * r.s), gap = Math.floor(iZ / 3), (k3 = 10 * (js = iZ + gap)) > r.d && (k3 = r.d, gap = (js = k3 / 10) - (iZ = 3 * js / 4)), ju = bO.bP(kP, 10) + !!(kP % 10), (k4 = ju * js) > r
			.an && (k4 = r.an, gap = (js = k4 / ju) - (iZ = 3 * js / 4)), kP = .5 * gap;
		jr = Math.min(Math.max(hT - .5 * k3 + kP, kP), r.d - k3 + kP), h6 = Math.min(Math.max(hU - .5 * k4 + kP, kP), r.an - k4 + kP)
	}, this.hS = function(hT, hU, player) {
		if (!this.jq) return !1;
		if (this.kR(hT, hU)) {
			hT = bO.hQ(bO.bP(hT - jr + .5 * gap, js), 0, 9);
			if ((hT += 10 * bO.hQ(bO.bP(hU - h6 + .5 * gap, js), 0, 9)) >= jz.length) return kS.dj(), !0;
			hU = jz[hT];
			if (1024 === hU) return this.show(k1, k2, jx + 1), !0;
			! function(kJ) {
				for (var aA = 0; aA < 9; aA++) jy[aA].kK = Math.floor(.99 * jy[aA].kK);
				for (aA = 0; aA < 9; aA++)
					if (kJ === jy[aA].kJ) return jy[aA].kK = Math.min(jy[aA].kK + 30, 999), kN();
				jy.splice(5, 0, {
					kJ: kJ,
					kK: Math.max(jy[4].kK, 30)
				}), jy.pop(), kN()
			}(hU), player === i.gC ? bx.gL.kT(hU) : bx.fX.kU(hU, player)
		}
		return kS.dj(), !0
	}, this.kR = function(hT, hU) {
		return !(hT < jr - .5 * gap || hU < h6 - .5 * gap || jr + k3 - .5 * gap <= hT || h6 + k4 - .5 * gap <= hU)
	}, this.ai = function() {
		aj.fillStyle = t.ac, aj.fillRect(jr - .5 * gap, h6 - .5 * gap, k3, k4);
		for (var gp = .5 * ak.h2, aH = (aj.lineWidth = ak.h2, aj.strokeStyle = aj.fillStyle = t.u, aj.strokeRect(jr - .5 * gap + gp, h6 - .5 * gap + gp, k3 - 2 * gp, k4 - 2 * gp), aj.imageSmoothingEnabled = !0, jz.length), aA = 0; aA < aH; aA++)
			this.kV(jz[aA], aj, jr + aA % 10 * js, h6 + bO.bP(aA, 10) * js, iZ);
		aj.imageSmoothingEnabled = !1
	}, this.kV = function(kJ, ih, bF, bG, iZ) {
		var bM;
		kJ >= 1024 - kA.en.kB ? (bM = iZ / this.jw, ih.setTransform(bM, 0, 0, bM, bF, bG), ih.drawImage(this.jv[kJ - 1024 + kA.en.kB], 0, 0), ih.setTransform(1, 0, 0, 1, 0, 0)) : (v.w.textAlign(ih, 1), v.w.textBaseline(ih, 1), ih.font = v.w.ae(0,
			.89 * iZ), ih.fillText(kA.en.kW(kJ), bF + .5 * iZ, bG + (.35 - v.w.kX + .56) * iZ))
	}
}

function kY() {
	this.ad = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.kZ = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", t.u, "rgb(170,170,170)"
	], this.ka = [t.u, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", t.u, t.kb], this.kc = [t.kb, t.u, t.u, t.u, t.kb, t.kb, t.kb, t.kb, t.u];
	var kd = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		ki = (this.ke = ["rgba(" + kd[0] + ",", "rgba(" + kd[1] + ",", "rgba(" + kd[2] + ",", "rgba(" + kd[3] + ",", "rgba(" + kd[4] + ",", "rgba(" + kd[5] + ",", "rgba(" + kd[6] + ",", "rgba(" + kd[7] + ",", "rgba(" + kd[8] + ",", "rgba(" + kd[9] +
				","
			], this.kf = ["rgb(" + kd[0] + ")", "rgb(" + kd[1] + ")", "rgb(" + kd[2] + ")", "rgb(" + kd[3] + ")", "rgb(" + kd[4] + ")", "rgb(" + kd[5] + ")", "rgb(" + kd[6] + ")", "rgb(" + kd[7] + ")", "rgb(" + kd[8] + ")", "rgb(" + kd[9] + ")"],
			this.kg = null, this.kh = [
				[128, 128, 128, 180],
				[255, 0, 0, 180],
				[0, 255, 0, 180],
				[50, 50, 255, 180],
				[255, 255, 0, 180],
				[255, 0, 255, 180],
				[0, 255, 255, 180],
				[255, 255, 255, 180],
				[0, 0, 0, 180]
			], [
				[128, 128, 128],
				[255, 0, 0],
				[0, 255, 0],
				[0, 0, 255],
				[255, 255, 0],
				[255, 0, 255],
				[0, 255, 255],
				[255, 255, 255],
				[0, 0, 0]
			]);
	this.a2 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.aG = new Uint8Array(i.df), this.kj = new Uint8Array(i.df), this.kk = new Uint16Array(i.df), this.kl = new Uint16Array(this.a2.length + 1), this.km = new Uint16Array(this.a2.length), this.cW =
function() {
		this.kg = [L(31), L(32), L(33), L(34), L(35), L(36), L(37), L(38), L(39)]
	}, this.h = function() {
		if (this.aG.fill(0), this.kn(), i.j) {
			if (9 === i.ko) {
				for (var aG = a1.aG, aA = i.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) aG[aA] = 1;
				var aH = i.df;
				for (aA = i.data.teamPlayerCount[7]; aA < aH; aA++) aG[aA] = 2;
				a1.a2[1] = 7, a1.a2[2] = 8
			} else i.kq ? function() {
				var colorsData = i.data.colorsData;
				if (!i.data.selectableColor)
					for (var aA = i.fd - 1; 0 <= aA; aA--) colorsData[aA] = bA.l3(262144);
				var l4 = 0,
					l5 = 768,
					iL = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = i.data.teamPlayerCount;
				for (aA = 0; aA < 9; aA++)
					if (teamPlayerCount[aA]) {
						for (var gl = 0, cq = 0; cq < 3; cq++) gl += Math.abs(ki[aA][cq] - iL[cq]);
						gl < l5 && (l4 = aA, l5 = gl)
					} var l6 = new Uint16Array(9);
				for (aA = 0; aA < 9; aA++) l6[aA] = teamPlayerCount[aA];
				var a2 = a1.a2,
					l7 = new Uint8Array(9),
					aD = (a2[0] = 0, 1);
				for (aA = 1; aA < 9; aA++) l6[aA] && (l7[aA] = aD, a2[aD++] = aA);
				var l8 = i.fd,
					aG = a1.aG;
				l6[l4] ? (l6[l4]--, aG[0] = l7[l4]) : l8 = 0;
				var aR = 0;
				for (aA = l8; aA < i.l9; aA++) {
					var gp = a2[aR];
					if (l6[gp]) l6[gp]--, aG[aA] = l7[gp];
					else if (aA--, 9 <= ++aR) return console.log("error 325")
				}
			}() : this.a9();
			! function() {
				for (var aH = i.df, kk = a1.kk, kl = a1.kl, km = a1.km, aG = a1.aG, a2 = a1.a2, lN = a2.length, cf = new Array(lN), aA = 0; aA < lN; aA++) cf[aA] = [];
				for (aA = 0; aA < aH; aA++) cf[a2[aG[aA]]].push(aA);
				for (aA = 1; aA <= lN; aA++) kl[aA] = kl[aA - 1] + cf[aA - 1].length;
				for (aA = 0; aA < lN; aA++)
					for (var aD = cf[aA].length, cn = kl[aA], gp = 0; gp < aD; gp++) kk[gp + cn] = cf[aA][gp];
				var fd = i.fd;
				for (aA = 0; aA < lN; aA++)
					for (aD = cf[aA].length, cn = kl[aA], gp = 0; gp < aD; gp++)
						if (kk[gp + cn] >= fd) {
							km[aA] = gp;
							break
						}
			}(), ! function() {
				for (var aH = i.df, aG = a1.aG, kj = a1.kj, a2 = a1.a2, aA = 0; aA < aH; aA++) kj[aA] = a2[aG[aA]];
				9 === i.ko && kj.fill(1, aH - lO.lP[5])
			}()
		}
	}, this.kn = function() {
		for (var aA = this.a2.length - 1; 0 <= aA; aA--) this.a2[aA] = aA
	}, this.a9 = function() {
		var ku = new Uint8Array(i.fd),
			kv = new Uint8Array(i.fd),
			kw = new Uint16Array(8),
			kx = new Uint16Array(this.a2.length);
		this.ky(ku, kv, kw, 1), this.kz(kw), this.l0(kx, ku, kv), this.l1(ku, kv, kx), this.l2()
	}, this.ky = function(ku, kv, l6, lA) {
		for (var cq, f6, lB, aH = this.a2.length - lA, bW = new Uint16Array(aH), colorsData = i.data.colorsData, aA = i.fd - 1; 0 <= aA; aA--) {
			for (cq = aH; lA <= cq; cq--) bW[cq - 1] = Math.abs(4 * (colorsData[aA] >> 12) - ki[cq][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - ki[cq][1]) + Math.abs(4 * (63 & colorsData[aA]) - ki[cq][2]);
			for (lB = 768, cq = aH - 1; 0 <= cq; cq--) bW[f6 = (cq + aA) % aH] < lB && (lB = bW[f6], ku[aA] = f6);
			for (l6[ku[aA]] += 4, lB = 768, cq = aH - 1; 0 <= cq; cq--) bW[f6 = (cq + aA) % aH] < lB && f6 !== ku[aA] && (lB = bW[f6], kv[aA] = f6);
			l6[kv[aA]]++
		}
	}, this.kz = function(l6) {
		for (var cq, lC, aH = this.a2.length - 1, aA = aH; 0 <= aA; aA--) this.a2[aA] = aA;
		for (aA = aH - 1; 0 <= aA; aA--) l6[aA]++;
		for (aA = 1; aA <= aH; aA++) {
			for (lC = 0, cq = 1; cq < aH; cq++) l6[cq] > l6[lC] && (lC = cq);
			l6[lC] = 0, this.a2[aA] = lC + 1
		}
	}, this.l0 = function(kx, ku, kv) {
		var cq, ec, aR, gl, f6, lD, lE, lF = this.a2.length - 1,
			lG = new Uint16Array(lF),
			lH = [],
			lI = 0,
			eb = [],
			lJ = [];
		loop: for (var aA = 0; aA < i.fd; aA++)
			if (null !== (ec = v.dh.ed(a5.lK[aA]))) {
				for (cq = eb.length - 1; 0 <= cq; cq--)
					if (ec === eb[cq]) {
						lJ[cq].push(aA), lI = Math.max(lI, lJ[cq].length);
						continue loop
					} eb.push(ec), lH.push(!1), lJ.push([aA]), lI = Math.max(lI, 1)
			}
		for (; 2 < i.k && lI > bO.bP(i.fd, i.k);) i.k--, i.ko--;
		for (cq = eb.length - 1; 0 <= cq; cq--) {
			for (gl = -1, aR = eb.length - 1; 0 <= aR; aR--) !lH[aR] && (-1 === gl || lJ[aR].length > lJ[gl].length) && (gl = aR);
			for (aR = lF - 1; 0 <= aR; aR--) lG[aR] = 1;
			for (aR = lJ[gl].length - 1; 0 <= aR; aR--) lG[ku[lJ[gl][aR]]] += 3, lG[kv[lJ[gl][aR]]]++;
			for (aA = lF - 1; 0 <= aA; aA--) {
				for (f6 = gl % lF, aR = lF - 1; 0 <= aR; aR--) lG[aR] > lG[f6] && (f6 = aR);
				for (lD = -1, aR = i.k; 0 < aR; aR--)
					if (this.a2[aR] === f6 + 1) {
						lD = aR;
						break
					} if (lG[f6] = 0, -1 !== lD) {
					for (lE = 0, aR = i.k; 0 < aR; aR--) kx[lD] > kx[aR] && lE++;
					if (lE !== i.k - 1) {
						for (aR = lJ[gl].length - 1; 0 <= aR; aR--) kx[lD]++, this.aG[lJ[gl][aR]] = lD;
						break
					}
				}
			}
			lH[gl] = !0
		}
	}, this.l1 = function(ku, kv, kx) {
		for (var aA, lL, aH = this.a2.length - 1, border = bO.bP(i.fd, i.k), lM = (0 < i.fd % i.k && border++, new Uint8Array(1 + aH)), cq = aH; 1 <= cq; cq--) lM[this.a2[cq]] = cq;
		for (aA = 0; aA < i.fd; aA++) lL = lM[ku[aA] + 1], 0 === this.aG[aA] && lL <= i.k && kx[lL] < border && (kx[lL]++, this.aG[aA] = lL);
		for (aA = 0; aA < i.fd; aA++) lL = lM[kv[aA] + 1], 0 === this.aG[aA] && lL <= i.k && kx[lL] < border && (kx[lL]++, this.aG[aA] = lL);
		for (cq = i.k; 1 <= cq; cq--)
			for (aA = i.fd - 1; 0 <= aA && !(kx[cq] >= border); aA--) 0 === this.aG[aA] && (kx[cq]++, this.aG[aA] = cq)
	}, this.l2 = function() {
		for (var aA = i.fd; aA < i.df; aA++) this.aG[aA] = 1 + aA % i.k
	}
}

function lQ() {
	var lR = {
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
		lS = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.lT = function(ag) {
		return ag.replace(lS, function(match) {
			return lR[match] || match
		})
	}, this.e6 = function(ah) {
		var aA, lU, lV, lW, lX;
		if (ah < 0) return "-" + this.e6(Math.abs(ah));
		if (ah < 1e3) return ah.toString();
		for (lU = Math.floor(Math.log(ah + .5) / Math.log(10)) + 1, lV = Math.floor((lU - 1) / 3), lX = (lW = ah.toString()).substring(lU - 3, lU), aA = 1; aA < lV; aA++) lX = lW.substring(lU - 3 * (aA + 1), lU - 3 * aA) + " " + lX;
		return lW.substring(0, lU - 3 * lV) + " " + lX
	}, this.lY = function(aL, lU) {
		return aL.toFixed(lU) + "%"
	}, this.lZ = function(ah, la) {
		return ah.toFixed(bO.hQ(Math.floor((void 0 === la ? 3 : la) - Math.log10(Math.max(ah, 1))), 0, 8))
	}, this.lb = function(ah, lD, lU) {
		return (ah * lD).toFixed(lU)
	}, this.ed = function(username) {
		var ld, lc = username.indexOf("[");
		return !(lc < 0) && 1 < (ld = username.indexOf("]")) - lc && ld - lc <= 8 ? username.substring(lc + 1, ld).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.ed;
	this.le = function(ef) {
		for (var ee = Math.floor(.5 * ef.length + .5), lf = Math.floor(.5 * (ee - 1)), aA = 0; aA < lf; aA++)
			for (var cq = -1; cq < 2; cq += 2) {
				var aR = ee + cq * aA;
				if (" " === ef[aR]) return [this.lg(ef.substring(0, aR)), this.lh(ef.substring(aR))]
			}
		return [ef.substring(0, ee), ef.substring(ee)]
	}, this.lh = function(ef) {
		for (var aH = ef.length, aA = 0; aA < aH; aA++)
			if (" " !== ef[aA]) return ef.substring(aA);
		return ef
	}, this.lg = function(ef) {
		for (var aA = ef.length - 1; 0 <= aA; aA--)
			if (" " !== ef[aA]) return ef.substring(0, aA + 1);
		return ef
	}, this.li = function(ef, lj) {
		return ef.split("(")[0] + "(🧈 " + lj.toFixed(2) + ")"
	}, this.startsWith = function(ef, lk) {
		return ef.substring(0, lk.length) === lk
	}, this.ll = function(ef, lk) {
		var aH = ef.length;
		return ef.substring(aH - lk.length, aH) === lk
	}, this.di = function(bW, lm, ln) {
		var ef = "",
			aH = bW.length - 1;
		ln = ln || "";
		for (var aA = 0; aA < aH; aA++) ef += ln + bW[aA] + ln + ",", (aA + 1) % lm == 0 && (ef += "\n");
		return ef += ln + bW[aH] + ln
	}, this.lo = function(ef, ku, kv) {
		return ef.replace(new RegExp(ku, "g"), kv)
	}
}

function lp() {
	function lq(aA, type, iX, fk) {
		ce.cf.data.push({
			bm: aA,
			type: type || 0,
			value: iX || 0,
			iX: iX || 0,
			fk: fk || 0
		})
	}

	function lr(aA, type, iX, fk) {
		ce.cf.data.push({
			bm: aA,
			type: type,
			value: iX || "",
			iX: iX || "",
			fk: fk || 0
		})
	}

	function ls(lf) {
		for (var aA = ce.cf.data.length; aA < lf; aA++) ce.cf.data.push(null)
	}
	this.data = [], this.h = function() {
		lq(0, 1, 0, 5), lq(1, 1, 1), lq(2, 0), lr(3, 2), lq(4, 1), lr(5, 2, "Trebuchet MS", 1), lq(6, 0), lq(7, 0, 0), lq(8, 0), lq(9, 1, 1), lq(10, 1), lq(11, 1, 1), lr(12, 2, navigator.language), lq(13), lq(14), ls(100), lr(100, 2), lr(101, 2),
			lr(102, 2), lr(103, 2), lr(104, 2), lr(105, 2), lr(106, 2), lq(107), lq(108), lq(109), lr(110, 2), lq(111), lq(112), lq(113), lr(114, 2), lq(115), lr(116, 2), lq(117, 1), lr(118, 2, "", 2), lq(119, 1, 0, 1), lr(120, 2), lq(121, 1, ~~(
				262144 * Math.random())), lr(122, 2, "Player " + Math.floor(1e3 * Math.random())), lq(123), lr(124), lq(125, 1), lr(126, 2), lq(127, 0, 1), lq(128), lq(129), lq(130), lq(131), lq(132), lr(133, 2), lq(134, 0, 5), lr(135, 2), lr(
				136, 2), lq(137), lq(138), lq(139), lq(140), lq(141), lq(142), lq(143), lq(144), lr(145, 2), lq(146), lq(147), lr(148, 2), lq(149), lq(150, 0, 1), lr(151, 2), lq(152, 0, 5), lq(153, 1), lq(154, 1), lr(155, 2), lr(156, 2), lq(157),
			lq(158), lq(159), lq(160), ls(180), lq(180, 0), lq(181, 0)
	}, this.cy = function(bm, value) {
		this.data[bm].value = value
	}, this.kO = function(bm, value) {
		this.cy(bm, value), ce.ch.save(bm, String(value)), ce.ch.save(bm, String(this.data[bm].fk), !0)
	}, this.lt = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (ce.ch.save(aA, String(this.data[aA].value)), ce.ch.save(aA, String(this.data[aA].fk), !0))
	}, this.lu = function(bm) {
		return Number(this.data[bm].value)
	}, this.lv = function(bm) {
		return String(this.data[bm].value)
	}
}

function lw() {
	var gQ, lx, dR;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), lx.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(40), [new dF("⬅️ " + L(1), function() {
		d2.da(7, d2.fx(7).ly)
	}), new dF(L(41), function() {
		ce.cx.cy(105, jc.e5.m1(lx.jN[0].hY[0].f6.value, 5)), ce.cx.cy(106, jc.e5.m1(lx.jN[1].hY[0].f6.value, 8)), d2.da(8, d2.fx(7).ly, new m2(18))
	})]), lx = new dH(gQ.dI, ((dR = []).push(function() {
		var dU = new dV;
		return dU.dW(L(42)), dU.db(new jI({
			value: "",
			bm: -1
		})), dU
	}()), dR.push(function() {
		var dU = new dV,
			m5 = (dU.dW(L(43)), new jI({
				value: "",
				bm: -1
			}));
		return m5.f6.type = "password", dU.db(m5), dU.db(new jH([new dF(L(44), function(f6) {
			return f6.textContent === L(44) ? (f6.textContent = L(45), m5.f6.type = "text") : (f6.textContent = L(44), m5.f6.type = "password"), !0
		}).button])), dU
	}()), dR))
}

function cc() {
	var dn = [L(46), L(47), L(48), L(49), L(50), L(51), L(52)],
		m6 = [100, 60, 30, 15, 6, 1],
		m7 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		m8 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		m9 = ["👢 Kick", "🔇 Mute", "✂️ Username Redaction", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		mA = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eC = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.mB = function(id, aS, bm) {
		aS = this.mC(aS);
		return +(m7[aS][id] > bm)
	}, this.mC = function(aS) {
		for (var aA = 0; aA < m6.length; aA++)
			if (m6[aA] <= aS) return aA;
		return m6.length
	}, this.mD = function(aS) {
		return dn[this.mC(aS)]
	}, this.eB = function(id, mE) {
		return m8[id].replace(new RegExp("x", "g"), mE)
	}, this.eD = function(id, mE) {
		return mA[id].replace(new RegExp("x", "g"), mE)
	}, this.mF = function(id, mG) {
		return m9[id] + (this.eC[id][mG].length ? " (" + this.eC[id][mG] + ")" : "")
	}
}

function mH() {
	var bm = 0,
		bk = bl.bk;
	this.bn = 0, this.a9 = function() {
		r.a9(), i.bu ? c9() : 0 === bm ? bl.bk >= bk && (bk += bl.cA * Math.floor(1 + (bl.bk - bk) / bl.cA), 2 === i.bw || mI.mJ ? cB() : (cI(), c6.c7()), bm++) : ((mI.mJ ? c9 : (bl.c8 = !0, cG))(), bm = 0), cE(), bl.c8 && (bl.c8 = !1, cF())
	}
}

function mK() {
	var mO, mP, mL = document.createElement("div"),
		mM = 0,
		mN = 0;
	this.show = function(bF, bG, ef, mR, mS) {
		if (mM) {
			if (!mR) return;
			this.dj()
		}
		bF === bG && -1 === bF ? (bF = mO, bG = mP) : (mO = bF, mP = bG), mS || (mN = mR), mM = 1;
		mS = r.d / r.f8, mL.style.whiteSpace = "pre", mL.textContent = ef, v.w.mU(mL, 5), mL.style.font = v.w.ae(0, v.w.mV(.015)), mL.style.padding = "0.3em 0.6em", mL.style.left = bF + "px", mL.style.top = "0px", document.body.appendChild(mL),
			mR = bF + mL.offsetWidth - mS;
		0 < mR && (mL.style.left = (ef = bF - mR) + "px", ef < 5) && (mL.style.whiteSpace = "pre-wrap"), mL.style.top = bG - mL.offsetHeight + mN * ak.mX + "px"
	}, this.dj = function(mY) {
		if (mM) {
			if (mY && mN) return 0;
			mM = 0, document.body.removeChild(mL)
		}
		return 1
	}, mL.style.position = "absolute", mL.style.backgroundColor = t.mQ, mL.style.color = t.u, mL.style.pointerEvents = "none", mL.style.zIndex = "5", mL.style.maxWidth = "100%"
}

function mZ() {
	this.ma = function() {
		for (var aL, bF, mb, mc = md, me = ip.mf, d = ip.mg, mh = d - 1, mi = ip.mj - 1, aD = 0, bG = 1; bG < mi; bG++)
			for (mb = bG * d, bF = 1; bF < mh; bF++) me[aL = mb + bF << 2] === me[1 + aL] && me[aL] === me[2 + aL] && (aD++, mc[2 + aL] = 4);
		mk.ml = aD
	}, this.mm = function(mn, mo) {
		for (var mc = md, d = ip.mg, mh = d - 1, mi = ip.mj - 1, id = 0, bG = 1; bG < mi; bG++)
			for (var mb = bG * d, bF = 1; bF < mh; bF++) {
				var bM = 2 + (mb + bF << 2);
				mc[bM] === mn && (! function(bM, id, mn, mo) {
					var aH = 1,
						mc = md,
						mq = mr.mq,
						bT = [bM],
						ms = id >> 8,
						mt = 255 & id;
					mc[bM - 2] = ms, mc[bM - 1] = mt, mc[bM] = 5;
					for (; aH;) {
						for (var bU = [], aA = 0; aA < aH; aA++)
							for (var lc = bT[aA], gl = 3; 0 <= gl; gl--) {
								var ld = lc + mq[gl];
								mc[ld] === mn && (mc[ld - 2] = ms, mc[ld - 1] = mt, mc[ld] = mo, bU.push(ld))
							}
						aH = (bT = bU).length
					}
				}(bM, id, mn, mo), id = (id + 1) % 65536)
			}
	}
}

function mu() {
	this.aE = null, this.aI = 0, this.mv = function() {
		for (this.aI = 0, aA = i.df - 1; 0 <= aA; aA--) 0 !== a5.gB[aA] && this.aI++;
		this.aE = new Uint16Array(this.aI);
		for (var aH = 0, aA = 0; aA < i.df; aA++) 0 !== a5.gB[aA] && (this.aE[aH++] = aA)
	}, this.mw = function() {
		for (var a6 = a5.a6, n1 = a5.n1, fc = a5.fc, aE = aF.aE, aA = aF.aI - 1; 0 <= aA; aA--) {
			var a4, aL = aE[aA];
			a6[aL] <= bO.bP(n1[aL], 4) ? n2.n3(aL) : a6[aL] >= n1[aL] ? (a4 = a6[aL], 250 <= (n1[aL] = a4) && (fc[aL] = 1)) : n1[aL] -= Math.max(1, bO.bP(n1[aL] - a6[aL], 1e3))
		}
		this.my()
	}, this.my = function() {
		for (var gB = a5.gB, mz = this.aE, n0 = this.aI, aA = n0 - 1; 0 <= aA; aA--) 0 === gB[mz[aA]] && (mz[aA] = mz[--n0]);
		this.aI = n0
	}
}

function n4() {
	this.n5 = function(iI) {
		iJ.b0(39), iJ.fO(1, 0), iJ.fO(6, 13), iJ.fO(14, f9.fh), iJ.fO(4, n.id), iJ.fO(7, n.fk), iJ.fO(1, +f9.fP), iJ.fO(1, +f9.fQ), iJ.fO(5, (new Date).getHours() % 24), ct.d4.send(iI, iJ.bt)
	}, this.n7 = function(iI, n8, n9) {
		iJ.b0(70), iJ.fO(1, 0), iJ.fO(6, 14), iJ.fO(3, n9), iJ.fO(30, n8[0]), iJ.fO(30, n8[1]), ct.d4.send(iI, iJ.bt)
	}, this.nA = function(id) {
		iJ.b0(13), iJ.fO(1, 0), iJ.fO(6, 15), iJ.fO(6, id), ct.d4.send(0, iJ.bt)
	}, this.cv = function(id, ef) {
		var aH = Math.min(ef.length, 63);
		iJ.b0(19 + 16 * aH), iJ.fO(1, 0), iJ.fO(6, 26), iJ.fO(6, id), iJ.fO(6, aH), e4.ji.nB(ef), ct.d4.send(0, iJ.bt)
	}, this.nC = function(nD, eW) {
		iJ.b0(7 + 26 * eW.length), iJ.fO(1, 0), iJ.fO(6, 9);
		for (var aA = 0; aA < eW.length; aA++) iJ.fO(16, eW[aA][0]), iJ.fO(10, eW[aA][1]);
		ct.d4.send(nD, iJ.bt)
	}, this.nE = function(nF, nG) {
		iJ.b0(20), iJ.fO(1, 0), iJ.fO(6, 19), iJ.fO(1, nF), iJ.fO(12, nG), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.iK = function(username) {
		iJ.fO(5, username.length), e4.ji.nB(username)
	}
}

function nI() {
	this.nJ = null, this.nK = null, this.nL = null, this.h = function() {
		var nM = [120, 105, 92],
			cos = [12, 12, 60],
			nN = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			nO = [140, 130, 120],
			nP = [12, 12, 76],
			nQ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			nR = [130, 117, 106],
			nS = [12, 12, 68],
			nT = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.nJ = new Array(ip.nU + 1), this.nJ[0] = {
			name: L(53),
			d: 230,
			an: 230,
			bB: 1e3,
			ap: 2e3,
			nV: 173
		}, this.nJ[1] = {
			name: L(54),
			d: 800,
			an: 800,
			bB: 100,
			ap: 50,
			nV: 43
		}, this.nJ[2] = {
			name: L(55),
			d: 512,
			an: 512,
			bB: 128,
			ap: 32,
			nV: 0
		}, this.nJ[3] = {
			name: L(56) + " 1",
			d: 960,
			an: 960,
			bB: 60,
			ap: 8,
			nV: 0
		}, this.nJ[4] = {
			name: L(57),
			d: 900,
			an: 900,
			bB: 100,
			ap: 5,
			nV: 0
		}, this.nJ[5] = {
			name: L(58),
			d: 1e3,
			an: 1e3,
			bB: 100,
			ap: 40,
			nV: 0
		}, this.nJ[6] = {
			name: L(59),
			d: 1e3,
			an: 1e3,
			bB: 100,
			ap: 20,
			nV: 0
		}, this.nJ[7] = {
			name: L(60),
			d: 1024,
			an: 1024,
			bB: 128,
			ap: 32,
			nV: 0
		}, this.nJ[8] = {
			name: L(61),
			d: 820,
			an: 820,
			bB: 200,
			ap: 100,
			nV: 0
		}, this.nJ[9] = {
			name: L(62),
			d: 1024,
			an: 1024,
			bB: 128,
			ap: 32,
			nV: 0
		}, this.nJ[10] = {
			name: L(63),
			nW: nO,
			nX: nP,
			nY: nQ
		}, this.nJ[11] = {
			name: L(64),
			nW: nR,
			nX: nS,
			nY: nT
		}, this.nJ[12] = {
			name: L(65),
			nW: nR,
			nX: nS,
			nY: nT
		}, this.nJ[13] = {
			name: L(66),
			nW: nM,
			nX: cos,
			nY: nN
		}, this.nJ[14] = {
			name: L(67),
			nW: nM,
			nX: cos,
			nY: nN
		}, this.nJ[15] = {
			name: L(68),
			nW: nO,
			nX: nP,
			nY: nQ
		}, this.nJ[16] = {
			name: L(69),
			nW: nO,
			nX: nP,
			nY: nQ
		}, this.nJ[17] = {
			name: L(70),
			nW: nM,
			nX: cos,
			nY: nN
		}, this.nJ[18] = {
			name: L(71),
			nW: nR,
			nX: nS,
			nY: nT
		}, this.nJ[19] = {
			name: L(72),
			nW: nM,
			nX: cos,
			nY: nN
		}, this.nJ[20] = {
			name: L(73),
			d: 1024,
			an: 1024,
			bB: 128,
			ap: 32,
			nV: 0
		}, this.nJ[21] = {
			name: L(56) + " 2",
			d: 940,
			an: 940,
			bB: 80,
			ap: 8,
			nV: 0
		}, this.nJ[ip.nU] = {
			name: ""
		}, this.nK = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.nK[aA] = aA;
		for (this.nK[10] = 20, this.nK[11] = 21, this.nL = new Uint8Array(10), aA = 0; aA < 10; aA++) this.nL[aA] = 10 + aA
	}
}

function nZ() {
	var na, nb, nc, nd, ne;
	this.nf = new ng, nc = new nh([.45, .27], [.5, .5], 2 / 3), nb = [new dF("⚔️<br>" + L(74), function() {
			ni(0)
		}, t.nj), new dF("🗡️<br>" + L(9), function() {
			ni(1)
		}, t.nk), new dF("🔑<br>" + L(75), function() {
			ni(2)
		}, t.nl), new dF("☰<br>" + L(76), function() {
			ni(3)
		}, t.nm), new dF("", function() {
			d2.da(12)
		}, t.mQ, !1),
		new dF("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new dF("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], nd = new jI(ce.cf.data[122]);
	for (var aA = 0; aA < nb.length; aA++) nb[aA].button.style.position = "absolute";

	function ni(bm) {
		n.o.setState(10), k9.nn() || k9.no(), 0 === bm ? d2.d4.np() : 1 === bm ? (bz.nq.jd(ce.cf.data[156].value, 1) || i.it.jQ(), d2.da(19)) : 2 === bm ? 0 !== n.id || ce.cf.data[140].value ? d2.da(8, d2.d3, new m2(16)) : d2.d4.nr(d2.d3, 16) : 3 ===
			bm && d2.da(1)
	}
	nd.f6.style.position = "absolute", nd.f6.style.textAlign = "center", nd.f6.placeholder = L(77), this.show = function() {
		d0.setState(0), n.o.setState(12), this.nf.show(), nb[4].ns(v.color.nt(ce.cf.data[121].value)), this.resize(), document.body.appendChild(nd.f6);
		for (var aA = 0; aA < nb.length; aA++) document.body.appendChild(nb[aA].button);
		1 !== n.id || n.fk < 5 || (ne && bl.bk > ne + 144e5 ? n.nv.setState(14) : ne = bl.bk)
	}, this.dj = function() {
		this.nf.dj(), document.body.removeChild(nd.f6);
		for (var aA = 0; aA < nb.length; aA++) document.body.removeChild(nb[aA].button)
	}, this.resize = function() {
		this.nf.resize(), this.nf.resize(), nc.resize();
		var gap = .5 * ak.gap,
			nw = 10 / 99 * .84 * nc.d,
			ny = .16 * nc.an,
			nz = .19 * nc.d,
			bF = nc.bF + nz,
			nw = nc.bG + nw + 3 * gap,
			d = .5 * (nc.d - gap) - nz,
			nz = nc.d - 2 * nz - ny - gap,
			nz = (v.w.o1(nd.f6, bF, nw, nz, ny), v.w.o1(nb[4].button, bF + nz + gap, nw, ny, ny), .5 * (nc.bG + nc.an - (nw += ny + gap) - gap));
		v.w.o1(nb[0].button, bF, nw, d, nz), v.w.o1(nb[1].button, bF + d + gap, nw, d, nz), v.w.o1(nb[2].button, bF, nw + nz + gap, d, nz), v.w.o1(nb[3].button, bF + d + gap, nw + nz + gap, d, nz);
		v.w.o1(nb[5].button, bF, nw + nz * 2 + gap * 2, d * 2 + gap, nz / 3);
		v.w.o1(nb[6].button, bF, nw + nz * 2.33 + gap * 3, d * 2 + gap, nz / 3);
		for (var aA = 0; aA < nb.length; aA++) nb[aA].button.style.font = v.w.ae(0, v.w.o2(.065 * nc.an)), v.w.mU(nb[aA].button, 5);
		nd.f6.style.font = v.w.ae(0, v.w.o2(.08 * nc.an)), v.w.mU(nd.f6, 5)
	}, this.ai = function() {
		if (d0.o3(), o4.ai(), ca.ai(), o5.ai(), k9.nn()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(nc.d * 0.03);
				aj.font = v.w.ae(1, size);
				aj.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = aj.measureText(text).width;
				aj.textAlign = "left";
				aj.textBaseline = "middle";
				aj.fillText(text, aj.canvas.width - textLength - size / 2, size);
			};
			aj.imageSmoothingEnabled = !1;
			var aR = k9.o7("territorial.io"),
				lD = .84 * nc.d / aR.width;
			aj.setTransform(lD, 0, 0, lD, nc.bF + .08 * nc.d, nc.bG), na = na || v.o8.o9(aR, v.o8.oA, [0, 0, 0]);
			for (var bF = -1; bF <= 1; bF += 2)
				for (var bG = -1; bG <= 1; bG += 2) aj.drawImage(na, bF, bG);
			aj.drawImage(aR, 0, 0), aj.imageSmoothingEnabled = !0;
			var kv = k9.o7("logo"),
				oB = .6666 * lD * aR.height / kv.height,
				oC = .5 * r.d,
				oD = nc.bG + .5 * lD * aR.height - .5 * oB * kv.height;
			aj.setTransform(oB, 0, 0, oB, oC - .6 * lD * aR.width, oD), aj.drawImage(kv, 0, 0), aj.setTransform(oB, 0, 0, oB, oC + .6 * lD * aR.width - oB * kv.width, oD), aj.drawImage(kv, 0, 0), aj.setTransform(1, 0, 0, 1, 0, 0), aj
				.imageSmoothingEnabled = !0
		}
	}
}

function oE() {
	var oF = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.gk = function(bk) {
		var oG, ef = new Date(bk.getTime() - 6e4 * bk.getTimezoneOffset()).toUTCString();
		return ef.length < 12 || (ef = ef.substring(5, ef.length), 0 === (bk = bk.getTimezoneOffset())) ? ef : (oG = (bk < 0 ? "+" : "-") + bO.bP(Math.abs(bk), 60), 0 == (bk = Math.abs(bk) % 60) ? ef + oG : ef + oG + ":" + (bk < 10 ? "0" : "") +
			bk)
	}, this.hC = function(bk) {
		var ef = bk.toUTCString();
		return ef.length < 12 ? ef : function(bk) {
			return oF[bk.getUTCDay()]
		}(bk) + ", " + ef.substring(5, ef.length - 4)
	}
}

function oI() {
	function oZ() {
		ip.oa.a9()
	}

	function op(aL, oo) {
		0 < oo && (ip.mf[aL] += oo, ip.mf[aL + 1] += oo, ip.mf[aL + 2] += oo)
	}

	function oi(aL) {
		return ip.mf[aL + 2] > ip.mf[aL] && ip.mf[aL + 2] > ip.mf[aL + 1]
	}
	this.oJ = -1, this.oK = 0, this.oL = 0, this.oM = 8, this.oN = 32, this.oO = 8, this.oP = 32, this.oQ = [0, 0], this.oR = [0, 0, 0, 0], this.oS = null, this.oT = !0, this.oU = !1, this.oV = function() {
		-1 !== this.oJ && clearTimeout(this.oJ), this.oJ = -1, this.oS = null, oW.b7()
	}, this.h = function() {
		7 === d0.d1() || this.oU || (this.oT = !0, this.oK = 0, this.oL = 1, this.oQ = [ip.oX.nJ[ip.oY].nW[0], ip.oX.nJ[ip.oY].nX[0]], this.oR = [ip.oX.nJ[ip.oY].nY[3], ip.oX.nJ[ip.oY].nY[4], ip.oX.nJ[ip.oY].nY[5], ip.oX.nJ[ip.oY].nY[6]], this
			.oM = ip.oX.nJ[ip.oY].nY[7], this.oN = ip.oX.nJ[ip.oY].nY[8], this.oO = ip.oX.nJ[ip.oY].nY[9], this.oP = ip.oX.nJ[ip.oY].nY[10], this.oT ? this.oJ = setTimeout(oZ, 16) : this.a9())
	}, this.a9 = function() {
		if (8 === d0.d1() && ob.oc()) this.oJ = setTimeout(oZ, 16);
		else {
			if (0 === this.oK) {
				var nV = bA.od();
				if (bA.oe(ip.oX.nJ[ip.oY].nY[2]), oW.b0([ip.mg, ip.mj, ip.oX.nJ[ip.oY].nY[0], ip.oX.nJ[ip.oY].nY[1]]), bA.oe(nV), this.oS = oW.b6(), this.oK++, this.oT) return void(this.oJ = setTimeout(oZ, 16))
			}
			for (var aL, oh, nV = this.oT ? 10 : 1e6, nV = ip.mj - this.oL - 1 < nV ? ip.mj - this.oL - 1 : nV, og = this.oL + nV, bG = this.oL; bG < og; bG++)
				for (var bF = 1; bF < ip.mg - 1; bF++) oi(aL = 4 * (oh = bF + bG * ip.mg)) ? this.oj(aL, oh, 1) : (this.oj(aL, oh, 0), function(bF, bG, aL) {
					return 1 < bF && oi(aL - 4) || bF < ip.mg - 2 && oi(aL + 4) || 1 < bG && oi(aL - 4 * ip.mg) || bG < ip.mj - 2 && oi(aL + 4 * ip.mg)
				}(bF, bG, aL) && this.ol(bF, bG));
			this.oL = og, this.oL >= ip.mj - 1 ? (ip.om.putImageData(ip.on, 0, 0, 1, 1, ip.mg - 2, ip.mj - 2), bl.c8 = !0, this.oV()) : this.oT && (this.oJ = setTimeout(oZ, 16))
		}
	}, this.oj = function(aL, oh, bm) {
		op(aL, Math.floor(this.oQ[bm] + this.oR[bm] * this.oS[oh] / 1e4) - ip.mf[aL])
	}, this.oq = function(aL, aS, or, bm, oR) {
		op(aL, Math.floor(this.oQ[bm] + (1 - aS / or) * oR) - ip.mf[aL])
	}, this.ol = function(hT, hU) {
		for (var aL, aS, or, os = hT - this.oN, ot = hU - this.oN, ou = hT + this.oN, og = hU + this.oN, os = os < 1 ? 1 : os, ou = ou > ip.mg - 2 ? ip.mg - 2 : ou, og = ip.mj - 2 < og ? ip.mj - 2 : og, bG = ot < 1 ? 1 : ot; bG <= og; bG++)
			for (var bF = os; bF <= ou; bF++) oi(aL = 4 * (bF + bG * ip.mg)) ? (or = this.oM + (this.oN - this.oM) * this.oS[bF + ip.mg * bG] / 1e4, Math.abs(hT - bF) > or || Math.abs(hU - bG) > or || or <= (aS = Math.sqrt((hT - bF) * (hT - bF) +
				(hU - bG) * (hU - bG))) || this.oq(aL, aS, or, 1, this.oR[3])) : (or = this.oO + (this.oP - this.oO) * this.oS[bF + ip.mg * bG] / 1e4, Math.abs(hT - bF) > or || Math.abs(hU - bG) > or || or <= (aS = Math.sqrt((hT - bF) * (hT -
				bF) + (hU - bG) * (hU - bG))) || this.oq(aL, aS, or, 0, this.oR[2]))
	}
}

function ov() {
	var ow, ox = new Uint8Array(5),
		oy = new Uint8Array(5);
	this.oz = new p0, this.h = function() {
		for (var ah = ce.cf.data[119].value, aA = 0; aA < ox.length; aA++) ox[aA] = (ah >> 2 * aA) % 4
	}, this.p1 = function() {
		ow = [L(78), L(79), L(80, [p2.p3[28]]), L(81, [p2.p3[26]]), L(82, [p2.p3[0]])], this.oz.h()
	}, this.a9 = function() {
		this.oz.a9()
	}, this.p4 = function(id) {
		1 < id && p5.p6() || ! function(bm) {
			if (3 === ox[bm] || 1 === oy[bm]) return;
			if (oy[bm] = 1, !(Math.random() < .6)) {
				ox[bm]++;
				for (var ah = 0, aA = 0; aA < ox.length; aA++) ah += ox[aA] << 2 * aA;
				ce.cx.cy(119, ah)
			}
			return 1
		}(id) || hu.p8(ow[id])
	}
}

function p9() {
	var jw = 32,
		jv = new Array(2);

	function pB(aR) {
		var bF, bG, oh, pD, pC, iZ = jw,
			jG = v.w.pB(iZ, iZ),
			ih = v.w.getContext(jG, !0),
			ic = v.w.getImageData(ih, iZ, iZ),
			pE = ic.data,
			cn = (iZ >> 1) - .5,
			pF = Math.sqrt(cn * cn);
		for (pE.fill(255), bG = 0; bG < iZ; bG++)
			for (bF = 0; bF < iZ; bF++) pC = bF - cn, pD = bG - cn, oh = 4 * (bG * iZ + bF), pC = 714 * (pF - Math.sqrt(pC * pC + pD * pD)) / pF, pE[2 + oh] = aR, pE[3 + oh] = 255 < pC ? 0 : pC;
		return ih.putImageData(ic, 0, 0), jG
	}
	this.pA = -1, this.h = function() {
		this.pA = -1, jv[0] || (jv[0] = pB(255), jv[1] = pB(0))
	}, this.pG = function(ih, bM, bF, bG, aS, aA) {
		v.fX.pH(i.gC) && (ih.setTransform(bM *= 4 / 3 * .625, 0, 0, bM, bF - (aS *= 4 / 3), bG - aS), ih.drawImage(jv[+(pI.d4.pJ[aA] === this.pA)], 0, 0))
	}
}

function pK() {
	for (var bF, bG, aA = pL - 1; 0 <= aA; aA--) bF = bO.bP(pM[aA], 4) % ip.mg, bG = bO.bP(pM[aA], 4 * ip.mg), a5.pN[pO] = Math.min(bF, a5.pN[pO]), a5.pP[pO] = Math.min(bG, a5.pP[pO]), a5.pQ[pO] = Math.max(bF, a5.pQ[pO]), a5.pR[pO] = Math.max(bG, a5
		.pR[pO])
}

function pS() {
	var gl, aL, aA, aH = a5.pT[pO].length,
		mq = mr.mq;
	loop: for (aA = aH - 1; 0 <= aA; aA--) {
		for (gl = 3; 0 <= gl; gl--)
			if (aL = a5.pT[pO][aA] + mq[gl], mr.pU(aL) || mr.pV(aL) && mr.pW(aL) !== pO) {
				mr.pX(a5.pT[pO][aA], pO);
				continue loop
			} a5.pT[pO][aA] = a5.pT[pO][aH - 1], a5.pT[pO].pop(), aH--
	}
}

function pY() {
	var player = pO,
		pZ = a5.pZ,
		pa = a5.pa,
		pb = a5.pb,
		aH = pZ[player].length,
		mq = mr.mq;
	loop: for (var aA = aH - 1; 0 <= aA; aA--) {
		for (var pc = !1, pd = !1, gl = 3; 0 <= gl; gl--) {
			var aL = pZ[player][aA] + mq[gl];
			if (mr.pe(aL, player)) continue loop;
			pc = pc || mr.oi(aL), pd = pd || mr.pf(aL)
		}
		pc ? pa[player].push(pZ[player][aA]) : pd ? pb[player].push(pZ[player][aA]) : mr.pg(pZ[player][aA], player), pZ[player][aA] = pZ[player][aH - 1], pZ[player].pop(), aH--
	}
}

function ph() {
	a5.a6[pi] -= pL
}

function pj(border) {
	for (var aH = border.length, aA = aH - 1; 0 <= aA; aA--) mr.pk(pi, border[aA]) || (border[aA] = border[aH - 1], border.pop(), aH--)
}

function pl(border) {
	for (var aH = border.length, aA = aH - 1; 0 <= aA; aA--) !mr.pk(pi, border[aA]) && mr.pm(border[aA]) && (border[aA] = border[aH - 1], border.pop(), aH--)
}

function pn(border) {
	for (var gl, aL, aH = border.length, mq = mr.mq, aA = aH - 1; 0 <= aA; aA--)
		for (gl = 3; 0 <= gl; gl--)
			if (aL = border[aA] + mq[gl], mr.pe(aL, pi)) {
				a5.pZ[pi].push(border[aA]), border[aA] = border[aH - 1], border.pop(), aH--;
				break
			}
}

function po() {
	for (var gl, aL, mq = mr.mq, aA = pL - 1; 0 <= aA; aA--)
		for (gl = 3; 0 <= gl; gl--) aL = pM[aA] + mq[gl], mr.pp(pi, aL) && mr.pq(aL) && (a5.pZ[pi].push(aL), mr.pr(aL, pi))
}

function ps() {
	var bF, bG;
	loop: for (; a5.pP[pi] < a5.pR[pi];) {
		for (bF = a5.pQ[pi]; bF >= a5.pN[pi]; bF--)
			if (mr.pk(pi, 4 * (a5.pP[pi] * ip.mg + bF))) break loop;
		a5.pP[pi]++
	}
	loop: for (; a5.pP[pi] < a5.pR[pi];) {
		for (bF = a5.pQ[pi]; bF >= a5.pN[pi]; bF--)
			if (mr.pk(pi, 4 * (a5.pR[pi] * ip.mg + bF))) break loop;
		a5.pR[pi]--
	}
	loop: for (; a5.pN[pi] < a5.pQ[pi];) {
		for (bG = a5.pR[pi]; bG >= a5.pP[pi]; bG--)
			if (mr.pk(pi, 4 * (bG * ip.mg + a5.pN[pi]))) break loop;
		a5.pN[pi]++
	}
	loop: for (; a5.pN[pi] < a5.pQ[pi];) {
		for (bG = a5.pR[pi]; bG >= a5.pP[pi]; bG--)
			if (mr.pk(pi, 4 * (bG * ip.mg + a5.pQ[pi]))) break loop;
		a5.pQ[pi]--
	}
}

function pt(player, gH) {
	return 0 === a1.aG[player] || a1.aG[player] !== a1.aG[gH]
}

function pu(player, gH) {
	for (var f6, pv = gD.gF(player), aA = 0; aA < pv; aA++)
		if (0 === gD.pw(player, aA))
			if ((f6 = gD.px(player, aA)) === i.df) {
				if (gH === i.df) return !1;
				if (py(gH)) return !0
			} else if (v.fX.pz(f6))
		if (gH === i.df) {
			if (py(f6)) return !0
		} else if (q0(gH, f6)) return !0;
	return !1
}

function py(player) {
	for (var aA, gn, aH = a5.pZ[player].length, mq = mr.mq, gl = 3; 0 <= gl; gl--)
		for (gn = mq[gl], aA = 0; aA < aH; aA++)
			if (mr.pU(a5.pZ[player][aA] + gn)) return !0;
	return !1
}

function gJ(player) {
	for (var aA, gn, aH = a5.pZ[player].length, mq = mr.mq, gl = 3; 0 <= gl; gl--)
		for (gn = mq[gl], aA = 0; aA < aH; aA++)
			if (mr.q1(a5.pZ[player][aA]) && mr.pU(a5.pZ[player][aA] + gn)) return !0;
	return !1
}

function q0(q2, q3) {
	for (var aA, a4, gn, aL, q4 = a5.pZ[q2].length, q5 = a5.pZ[q3].length, mq = (q5 < q4 && (a4 = q2, q2 = q3, q3 = a4, a4 = q4, q4 = q5, 0), mr.mq), gl = 3; 0 <= gl; gl--)
		for (gn = mq[gl], aA = 0; aA < q4; aA++)
			if (aL = a5.pZ[q2][aA] + gn, mr.pV(aL) && mr.pW(aL) === q3) return !0;
	return !1
}

function gK(q2, q3) {
	for (var aA, gn, aL, q4 = a5.pZ[q2].length, mq = mr.mq, gl = 3; 0 <= gl; gl--)
		for (gn = mq[gl], aA = 0; aA < q4; aA++)
			if (mr.q1(a5.pZ[q2][aA]) && (aL = a5.pZ[q2][aA] + gn, mr.pV(aL)) && mr.pW(aL) === q3) return !0;
	return !1
}

function q6() {
	var bF, bG, an, nw, q7, q8, q9, qA, qB, d, qC, qD;
	this.jq = !1, this.h = function(ef, qE) {
		if (1 === n.id && 13 <= n.fk && n.fk < 18) return qE ? void(qC = ef) : qC !== ef ? void 0 : void n.nv.saveString(200, ef);
		qE && (qC = ef, (qD = document.createElement("a")).appendChild(document.createTextNode(qC)), this.jq = !0, qD.title = qC, qD.target = "_blank", qD.href = qC, qD.style.textAlign = "center", qD.style.color = t.u, qD.style.position =
			"absolute", qD.style.padding = "0px", qD.style.margin = "0px", this.resize(), document.body.appendChild(qD), bl.c8 = !0)
	}, this.dj = function() {
		return !(!this.jq || (document.body.removeChild(qD), this.jq = !1))
	}, this.hS = function(qF, qG) {
		return !!this.jq && ((qF < bF || qG < bG || bF + d < qF || bG + an < qG || bF + d - nw < qF && qG < bG + nw) && (bl.c8 = !0, this.jq = !1, document.body.removeChild(qD)), !0)
	}, this.resize = function() {
		var qH, qJ;
		this.jq && (qA = Math.floor(.8 * (n.o.p() ? r.d > r.an ? .6 : .55 : .4) * r.s), nw = Math.floor(.15 * qA), q7 = Math.floor(.35 * nw), q8 = Math.floor(.5 * nw), q9 = Math.floor(2.5 * q8), an = nw + q7 + 3 * q8, qH = v.w.ae(1, q7 / r.f8),
			qB = Math.floor(r.f8 * qI.measureText(qC, qH)), qJ = d = (qA < qB ? qB : qA) + 2 * q9, d = Math.min(d, r.d - 2 * (n.o.p() ? 2 : 1) * ak.gap), qH = v.w.ae(1, d / qJ * q7 / r.f8), qB = Math.floor(r.f8 * qI.measureText(qC, qH)), bF =
			Math.floor((r.d - d) / 2), bG = Math.floor((r.an - an) / 2), qD.style.font = qH, qD.style.top = Math.floor((bG + 1.4 * q8 + nw) / r.f8) + "px", qD.style.left = Math.floor((bF + (d - qB) / 2) / r.f8) + "px")
	}, this.ai = function() {
		this.jq && (aj.fillStyle = t.ac, aj.fillRect(bF, bG + nw, d, an - nw), aj.fillStyle = t.qK, aj.fillRect(bF, bG, d, nw), aj.fillStyle = t.u, aj.lineWidth = ak.h2, aj.strokeStyle = t.u, aj.strokeRect(bF, bG, d, an), aj.fillRect(bF, bG + nw,
			d, ak.h2), aj.font = v.w.ae(1, .48 * nw), v.w.textAlign(aj, 1), v.w.textBaseline(aj, 1), aj.fillText("You are leaving Territorial.io!", Math.floor(bF + (d - .5 * nw) / 2), Math.floor(bG + .55 * nw)), mI.hB(Math.floor(bF + d -
			.8 * nw), Math.floor(bG + .25 * nw), Math.floor(.5 * nw)), aj.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function qL() {
	var d, bF, qM, canvas, f, jq, gI, lj, qH, qN, qO = 11 / 12;

	function qR() {
		var qV = Math.floor(gI * (d - 2 * qM)),
			qW = 1 + Math.floor(.0625 * qX.an),
			qY = 1 + Math.floor(.3 * qX.an),
			iE = Math.floor(.55 * qX.an);
		f.clearRect(0, 0, d, qX.an), f.fillStyle = t.mQ, f.fillRect(0, 0, qM, qX.an), f.fillRect(qM + qV, 0, d - qM - qV, qX.an), f.fillStyle = gI < 1 / 3 ? "rgba(" + Math.floor(3 * gI * 130) + ",130,0,0.85)" : gI < 2 / 3 ? "rgba(130," + (130 - Math
				.floor(3 * (gI - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (gI - 2 / 3) * 130) + ",0.85)", f.fillRect(qM, 0, qV, qX.an), f.fillStyle = t.u, f.fillRect(0, 0, d, 1), f.fillRect(0, qX.an - 1, d, 1), f.fillRect(0, 0, 1,
				qX.an), f.fillRect(qM, 0, 1, qX.an), f.fillRect(qM + qV, 0, 1, qX.an), f.fillRect(d - qM, 0, 1, qX.an), f.fillRect(d - 1, 0, 1, qX.an), f.fillRect(Math.floor(.25 * qX.an) + qY, Math.floor((qX.an - qW) / 2), qX.an - 2 * qY, qW), f
			.fillRect(Math.floor(d - 1.25 * qX.an) + qY, Math.floor((qX.an - qW) / 2), qX.an - 2 * qY - qY % 2, qW), f.fillRect(Math.floor(d - 1.25 * qX.an) + Math.floor((qX.an - qW) / 2), qY, qW, qX.an - 2 * qY - qY % 2), lj = v.fX.qZ(i.gC, qX
		.qa()), f.fillText(v.dh.e6(lj) + " (" + v.dh.lY(100 * gI, +(gI < .1)) + ")", Math.floor(.5 * d), iE)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		gI = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => qX.qn(arg1);

	function ql(qo) {
		return !(1 < qo && 1 === gI || (1 < qo && qo * gI - gI < 1 / 1024 ? qo = (gI + 1 / 1024) / gI : qo < 1 && gI - qo * gI < 1 / 1024 && (qo = (gI - 1 / 1024) / gI), gI = bO.hQ(gI * qo, 1 / 1024, 1), qR(), 0))
	}

	function qm(hT) {
		return gI !== (gI = bO.hQ((hT - bF - qM) / (d - 2 * qM), 1 / 1024, 1)) && (qR(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		qR(), bl.c8 = !0
	}, this.bG = 0, this.qP = !1, this.h = function() {
		jq = !i.bu && !i.i0, qN = !1, gI = .5, lj = 0, this.qP = !1, this.resize()
	}, this.resize = function() {
		n.o.p() && r.d < .8 * r.an ? (this.an = Math.floor(.066 * r.s), d = r.d - 4 * ak.gap - this.an) : (d = Math.floor((n.o.p() ? .65 : .389) * r.s), d += 12 - d % 12, this.an = Math.floor(d / 12)), qM = Math.floor(3 * this.an / 2), qH = v.w
			.ae(1, Math.floor(.5 * this.an)), (canvas = document.createElement("canvas")).width = d, __fx.mobileKeybinds.setSize(d, this.an, aj), canvas.height = this.an, (f = canvas.getContext("2d", {
				alpha: !0
			})).font = qH, v.w.textBaseline(f, 1), v.w.textAlign(f, 1), this.qQ(), qR()
	}, this.qQ = function() {
		bF = n.o.p() && r.d < .8 * r.an ? this.an + 3 * ak.gap : Math.floor((r.d - d) / 2), this.bG = r.an - this.an - qS.qT() * ak.gap
	}, this.c5 = function() {
		qN && (qN = !1, qR())
	}, this.jq = function() {
		return !(!jq || mI.mJ && bF < Math.floor(ak.gap + 5.5 * this.an))
	}, this.qb = function(qc) {
		return !!this.jq() && bF + d > r.d - qc - ak.gap
	}, this.qd = function() {
		jq = !i.i0
	}, this.qe = function() {
		jq = !1
	}, this.qa = function() {
		return bO.hQ(Math.floor(1024 * gI + .5) - 1, 0, 1023)
	}, this.hX = function(hT, hU) {
		return this.jq() && bF < hT && hT < bF + d && hU > this.bG
	}, this.hS = function(hT, hU) {
		if (!this.jq()) return !1;
		if (!(__fx.settings.keybindButtons && hU > this.bG - Math.floor(ak.gap / 4) - this.an && hU < this.bG - Math.floor(ak.gap / 4) && __fx.mobileKeybinds.click(hT - bF))) {
			if (!qX.hX(hT, hU)) return !1;
			qh.qi = !1, ! function(qk, hT, hU) {
				if (function(hT, hU) {
						return bF < hT && hT < bF + qM && hU > qX.bG
					}(hT, hU)) return ql(qO);
				if (function(hT, hU) {
						return bF + d - qM < hT && hT < bF + d && hU > qX.bG
					}(hT, hU)) return ql(1 / qO);
				return qk.qP = !0, qm(hT)
			}(this, hT, hU) || (bl.c8 = !0)
		}
		return !0
	}, this.qn = function(lD) {
		0 !== i.bw && this.jq() && ql(lD) && (bl.c8 = !0)
	}, this.qp = function(deltaY) {
		var lD;
		return !(0 === deltaY || !this.jq()) && ql(lD = 0 < deltaY ? (lD = 400 / (400 + deltaY)) < qO ? qO : lD : 1 / qO < (lD = (400 - deltaY) / 400) ? 1 / qO : lD)
	}, this.hW = function(hT) {
		return !!this.qP && qm(hT)
	}, this.qq = function() {
		this.qP = !1
	}, this.a9 = function() {
		this.jq() && lj !== v.fX.qZ(i.gC, this.qa()) && (qN = !0)
	}, this.ai = function() {
		this.jq() && (aj.drawImage(canvas, bF, this.bG), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(aj, bF, this.bG)
	}
}

function qr() {
	var qs, qt, qu;
	this.h = function() {
		qs = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), qt =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), qu = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var qv = ["K ", " Y", "E ", " Z", " z", " s", "S "], qw = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = qs.length - 1; 0 <= aA; aA--)
			for (var ee = qv.length - 1; 0 <= ee; ee--) qs[aA] = qs[aA].replace(qv[ee], qw[ee]);
		if (__fx.settings.realisticNames) qs = realisticNames;
	}, this.qx = function() {
		var aH = i.fd,
			r3 = a5.r3,
			lK = a5.lK,
			playerNamesData = i.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < aH)
			for (var aA = 0; aA < aH; aA++) r3[aA] = lK[aA] = "Player " + bA.l3(1e3);
		else
			for (aA = 0; aA < aH; aA++) r3[aA] = lK[aA] = playerNamesData[aA]
	}, this.b0 = function() {
		if (9 === i.ko) {
			for (var aS = bA.random(), r4 = qu, r5 = qt, r6 = cX.r6, aH = r4.length, cn = i.data.teamPlayerCount[7], r3 = a5.r3, lK = a5.lK, aA = cn - 1; aA >= i.fd; aA--) r3[aA] = lK[aA] = r4[(aA + aS) % aH];
			for (aH = r5.length - 1, aA = cn; aA < i.df; aA++) r3[aA] = lK[aA] = r5[r6[aA] ? aH : aA % aH]
		} else(2 === i.data.playerNamesType ? function() {
			for (var aH = i.df, r3 = a5.r3, lK = a5.lK, playerNamesData = i.data.playerNamesData, aA = i.fd; aA < aH; aA++) r3[aA] = lK[aA] = playerNamesData[aA]
		} : 1 === i.data.playerNamesType ? function() {
			for (var r3 = a5.r3, lK = a5.lK, aA = i.fd; aA < i.df; aA++) r3[aA] = lK[aA] = "Bot " + bA.l3(1e3)
		} : function() {
			for (var r7 = qs, aH = r7.length, aS = bA.random(), r3 = a5.r3, lK = a5.lK, aA = i.fd; aA < i.df; aA++) r3[aA] = lK[aA] = r7[(aA + aS) % aH]
		})()
	}
}

function r8() {
	var r9, an, rA, rB, rC, rD, rE, rF, rG;

	function rc() {
		return qX.qb(hu.rY()) ? hn.jq ? __fx.settings.keybindButtons ? qX.bG - 2 * qX.an - 3 * rA : qX.bG - qX.an - 2 * rA : __fx.settings.keybindButtons ? qX.bG - qX.an - 2 * rA : qX.bG - rA : hy.qb(hu.rb()) ? hn.jq ? hy.rc() - qX.an - 2 * rA : hy
			.rc() - rA : hn.jq ? r.an - qX.an - (qS.qT() + 1) * rA : r.an - qS.qT() * ak.gap
	}

	function rN(a4, ef, id, aL, rQ, rR, rS, rT, rU, rV, rp) {
		var aA, f, jG, eW, rq = void 0 !== rU,
			d = Math.floor(qI.measureText(ef, hu.qH) + 1.5 * rB + (rq ? an : 1.5 * rB));
		if (bl.c8 = !0, rp || rr.ro(ef, rU), d + 2 * rA + qX.an > r.d && !rq && 50 !== id && 20 < ef.length) rN(a4, (rp = v.dh.le(ef))[0], id, aL, rQ, rR, rS, rT, rU, rV, !0), rN(a4, rp[1], id, aL, rQ, rR, rS, rT, rU, rV, !0);
		else if (rp = d + (50 === id ? rC : 0), (jG = document.createElement("canvas")).width = d, jG.height = an, (f = jG.getContext("2d", {
				alpha: !0
			})).font = hu.qH, v.w.textBaseline(f, 1), v.w.textAlign(f, 0), f.clearRect(0, 0, d, an), f.fillStyle = rR, f.fillRect(0, 0, d, an), f.fillStyle = rQ, f.fillText(ef, Math.floor(1.5 * rB), Math.floor(an / 2)), rq && (f
				.imageSmoothingEnabled = !0, kA.pE.kV(rU, f, d - an, 0, an)), 0 === (eW = {
				bk: a4,
				ef: ef,
				id: id,
				player: aL,
				canvas: jG,
				rQ: rQ,
				rR: rR,
				d: d,
				rZ: rp,
				rS: rS,
				rT: rT,
				rU: rU,
				rV: rV
			}).bk || 0 < r9.length && 0 < r9[0].bk) r9.unshift(eW);
		else {
			for (aA = 1; aA < r9.length; aA++)
				if (0 < r9[aA].bk) return void r9.splice(aA, 0, eW);
			r9.push(eW)
		}
	}

	function rO(aS, lE, cq) {
		return "rgb(" + aS + "," + lE + "," + cq + ")"
	}

	function ru(id, aD) {
		for (var aH = r9.length, aA = 0; aA < aH; aA++) r9[aA].id === id && aD-- <= 0 && (r9.splice(aA, 1), aA--, aH--)
	}

	function rv(id, player) {
		for (var sd = !1, aA = r9.length - 1; 0 <= aA; aA--) r9[aA].id !== id || player !== i.df && r9[aA].player !== player || (r9.splice(aA, 1), sd = !0);
		return sd
	}

	function sj(ef) {
		rN(340, ef, 6, 0, rO(215, 245, 255), t.ac, -1, !1)
	}
	this.rH = "", this.h = function() {
		var self;
		rF = 0, rE = n.o.p() ? 7 : 12, rD = {
			fT: [0, 0, 0],
			rI: [0, 0, 0],
			mG: [220, 180, 180],
			gt: [0, 0, 0],
			aR: [0, 0, 0]
		}, r9 = [], this.resize(), i.bu && this.rJ(0, 18), ip.oX.nJ[ip.oY].name.length && sj(L(128, [ip.oX.nJ[ip.oY].name])), sj(L(129, [ip.mg - 2 + "x" + (ip.mj - 2)])), sj(L(130, [v.dh.e6(mk.sk)])), mk.sk !== mk.sl && sj(L(131, [v.dh.e6(mk
			.sl) + " (" + v.dh.lY(100 * mk.sl / mk.sk, 1) + ")"])), 0 < mk.sm && sj(L(104, [v.dh.e6(mk.sm) + " (" + v.dh.lY(100 * mk.sm / mk.sk, 1) + ")"])), 0 < mk.ml && sj(L(132, [v.dh.e6(mk.ml) + " (" + v.dh.lY(100 * mk.ml / mk.sk, 1) +
			")"
		])), 10 === i.ko && rN(120, L(133), 6, 0, rO(235, 255, 120), t.ac, -1, !1), 0 !== (self = this).rH.length && (rN(200, self.rH, 0, 0, t.u, t.ac, -1, !1), self.rH = ""), i.rM && rN(340, L(83), 6, 0, rO(255, 200, 0), t.ac, -1, !1)
	}, this.resize = function() {
		var rP, aA;
		if (an = (an = Math.floor((n.o.p() ? .031 : .0249) * r.s)) < 10 ? 10 : an, this.fontSize = Math.floor(2 * an / 3), this.qH = v.w.ae(1, this.fontSize), rA = ak.gap, rB = Math.floor(an / 5), 0 < r9.length)
			for (rP = r9, r9 = [], aA = rP.length - 1; 0 <= aA; aA--) rN(rP[aA].bk, rP[aA].ef, rP[aA].id, rP[aA].player, rP[aA].rQ, rP[aA].rR, rP[aA].rS, rP[aA].rT, rP[aA].rU, rP[aA].rV, !0);
		this.rW()
	}, this.rW = function() {
		rG = document.createElement("canvas");
		var ef = L(84),
			f = (rC = qI.measureText(ef, this.qH) + 5 * rB, rG.height = an, rG.width = rC, rG.getContext("2d", {
				alpha: !0
			}));
		f.font = this.qH, v.w.textBaseline(f, 1), v.w.textAlign(f, 1), f.clearRect(0, 0, rC, an), f.fillStyle = t.rX, f.fillRect(0, 0, rC, an), f.fillStyle = t.u, f.fillText(ef, Math.floor(rC / 2), Math.floor(an / 2))
	}, this.rY = function() {
		var aH;
		return hn.jq ? hn.d : 0 === (aH = r9.length) ? 0 : 1 === aH ? r9[0].rZ : ra(r9[0].rZ, r9[1].rZ)
	}, this.rb = function() {
		var aH = r9.length;
		return hn.jq ? aH ? ra(hn.d, r9[0].rZ) : hn.d : 0 === aH ? 0 : 1 === aH ? r9[0].rZ : 2 === aH ? ra(r9[0].rZ, r9[1].rZ) : ra(ra(r9[0].rZ, r9[1].rZ), r9[2].rZ)
	}, this.hS = function(bF, bG) {
		for (var jr, rd, re = rc(), aA = r9.length - 1; 0 <= aA; aA--)
			if ((rd = re - (aA + 1) * an) <= bG && bG < rd + an) return 50 === r9[aA].id ? bF >= r.d - rC - rA - r9[aA].d && (bF >= r.d - rC - rA ? bx.fX.rf(r9[aA].player) : ob.rg(r9[aA].player, 800, !1, 0), !0) : bF >= r.d - r9[aA].d - rA && (
				736 === r9[aA].id ? (rd = r9[aA].ef.split(" "), window.open(rd[rd.length - 1], "_blank")) : r9[aA].rT && (r9[aA].rV && r9[aA].rV.ee ? (rd = r9[aA].rV.oh, jr = ri.rj(rd) - 10, rd = ri.rk(rd) - 10, ob.rl(jr, rd, 19 + jr,
					19 + rd)) : r9[aA].rV && r9[aA].rV.cq ? ob.rm(r9[aA].player, r9[aA].rV.rn) : (ob.rg(r9[aA].player, 800, !1, 0), 0 <= r9[aA].rS && (jr = r9[aA].rS, r9[aA].rS = r9[aA].player, r9[aA].player = jr))), !0);
		return !1
	}, this.ro = function(a4, ef, id, aL, rQ, rR, rS, rT, rU, rV) {
		rN(a4, ef, id, aL, rQ, rR, rS, rT, rU, rV)
	}, this.p8 = function(e8) {
		rN(300, e8, 252, 0, t.u, t.ac, -1, !1)
	}, this.rs = function(id) {
		for (var aA = r9.length - 1; 0 <= aA; aA--) r9[aA].id === id && (r9[aA].bk = 1)
	}, this.rJ = function(player, id) {
		0 === id ? (qI.rt(player, 0), ru(423, 0), rN(160, L(85, [a5.r3[player]]), 423, player, "rgb(10,220,10)", t.ac, -1, !1)) : 1 === id ? (rv(50, i.df), qI.rt(player, 1), rN(360, L(86, [a5.r3[player]]), 0, player, t.rw, t.ac, -1, !0), ob.rg(
			player, 2700, !1, 0)) : 2 === id ? (qI.rt(player, 2), rN(0, L(87), 0, player, "rgb(10,255,255)", t.ac, -1, !0), ob.rg(player, 2700, !1, 0)) : 3 === id ? (qI.rt(player, 2), rN(0, L(88, [a5.r3[player]]), 0, player, t.u, t.ac, -1, !
			0), ob.rg(player, 2700, !1, 0)) : 4 === id ? this.rx(1, player, player) : 5 === id ? 2 === a5.ry[player] || v.fX.fY(i.gC) || (function(id, sK) {
			var aA, sL = 0,
				aH = r9.length;
			for (aA = 0; aA < aH; aA++)
				if (r9[aA].id === id && sK <= ++sL) return r9.splice(aA, 1)
		}(1, 5), c3.s0(player) ? rN(180, L(89, [a5.r3[player]]), 1, player, rO(255, 200, 180), t.ac, -1, !0) : (ru(573, 0), rN(180, L(90, [a5.r3[player]]), 573, player, t.rw, t.ac, -1, !0))) : 18 === id ? rN(255, L(91), 18, 0, t.u, t.ac, -1,
			!1) : 21 === id ? rN(220, L(92), id, 0, t.u, t.ac, -1, !1) : 22 === id ? this.rx(2, player, player) : 59 === id && rN(0, L(93), id, 0, t.s1, t.ac, 0, !1)
	}, this.s2 = function(e8) {
		rN(200, L(94, [e8]), 94, 0, t.u, t.s3, -1, !1)
	}, this.s4 = function(s5) {
		if (i.gC === s5 && !i.kq)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			rN(0, "Your Win Count is now " + __fx.wins.count, 3, s5, t.u, t.ac, -1, !0);
		a5.a6[s5] && (qI.rt(s5, 2), i.fd < 100 ? rN(0, L(88, [a5.r3[s5]]), 3, s5, t.u, t.ac, -1, !0) : rN(0, L(95, [a5.r3[s5]]), 3, s5, t.u, t.ac, -1, !0))
	}, this.s6 = function(bM) {
		var sA, ef, s7 = "(" + ri.rj(bM >> 2) + ", " + ri.rk(bM >> 2) + ")",
			rT = !1,
			player = 0;
		mr.pm(bM) ? mr.pU(bM) ? s7 = L(96, [s7]) : (player = mr.pW(bM), ef = L(97, [v.f.s8(a5.lK[player], v.w.ae(0, 10), 150)]) + "   ", ef = (ef += L(98, [v.dh.e6(a5.s9[player])]) + "   ") + L(99, [v.dh.e6(a5.a6[player])]) + "   ", i.j && (sA =
			a1.kg[a1.a2[a1.aG[player]]], ef += L(100) + ": " + sA + "   "), v.fX.fY(player) && (ef += L(17) + ": " + cX.jP[cX.r6[player]] + "   "), s7 = ef = (ef += L(101, [player]) + "   ") + L(102, [s7]), rT = !0) : s7 = mr.sB(bM) ? L(103,
			[s7]) + "   #" + mr.sC(bM) : L(104, [s7]), bl.c8 = !0, ru(55, 0), rN(220, s7, 55, player, t.u, t.ac, -1, rT, void 0, void 0, !0)
	}, this.sD = function(sE) {
		var cn = pI.d4,
			player = cn.sF[sE] >> 3,
			ef = (bl.c8 = !0, ru(55, 0), L(105, [a5.r3[player]]) + "   ");
		rN(220, ef += L(98, [cn.sG[sE]]), 55, player, t.u, t.ac, -1, !0)
	}, this.kT = function(sH, sI, kJ) {
		sH === i.gC ? rN(175, " " + L(106, [a5.r3[sI]]) + ": ", 1001, sI, rO(200, 255, 210), t.ac, -1, !0, kJ) : this.sJ(sH, kJ)
	}, this.sJ = function(sH, kJ) {
		ru(1e3, 0), rN(175, a5.r3[sH] + ": ", 1e3, sH, t.u, "rgba(5,60,25,0.9)", -1, !0, kJ)
	}, this.sM = function() {
		var e8;
		i.ht ? (e8 = L(107), qI.sN(L(108), 2, 1, 12), rN(0, e8, 40, 0, "rgb(10,220,10)", t.ac, -1, !1)) : (e8 = L(109), qI.sN(L(110), 2, 0, 16), rN(0, e8, 41, 0, t.u, t.ac, -1, !1))
	}, this.sO = function() {
		var aD = a5.r3,
			gl = i.data;
		rN(300, aD[0] + " [" + i.sP.sQ(gl.elo[0]) + "] vs " + aD[1] + " [" + i.sP.sQ(gl.elo[1]) + "]", 65, 0, t.kb, "rgba(100,255,255,0.75)", -1, !1)
	}, this.sR = function(e8) {
		rN(350, e8, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.sS = function(sT) {
		rN(0, L(sT ? 111 : 112), 247, 0, t.dx, t.ac, -1, !1)
	}, this.sU = function(sV, sW, sX) {
		var gl = i.data,
			aD = a5.r3;
		rN(0, aD[0] + ": " + i.sP.sQ(gl.elo[0]) + " -> " + sV, 66, 0, t.u, sX[0], -1, !1), rN(0, aD[1] + ": " + i.sP.sQ(gl.elo[1]) + " -> " + sW, 66, 1, t.u, sX[1], -1, !1)
	}, this.sY = function(player, id) {
		0 === id ? rv(50, player) ? (rN(128, L(113, [a5.r3[player]]), 52, player, rO(180, 255, 180), t.ac, -1, !0), c3.sZ(player, 2, 255)) : rN(384, L(114, [a5.r3[player]]), 51, player, rO(210, 210, 255), t.ac, -1, !0) : rv(51, player) ? (rN(128,
			L(115, [a5.r3[player]]), 52, player, t.u, "rgba(60,120,10,0.9)", -1, !0), c3.sZ(player, 2, 255)) : (rN(384, L(116, [a5.r3[player]]), 50, player, t.u, "rgba(90,90,90,0.9)", -1, !0), c3.sZ(player, 2, 96))
	}, this.sa = function(fT, target) {
		var color = rO(210, 255, 210);
		1 < fT.length ? rN(230, L(117, [fT.length, a5.r3[target]]), 66, target, color, t.ac, -1, !0) : rN(230, L(118, [a5.r3[fT[0]], a5.r3[target]]), 66, fT[0], color, t.ac, target, !0)
	}, this.sb = function(player, target) {
		rN(230, L(119, [a5.r3[player], a5.r3[target]]), 66, player, t.u, "rgba(75,65,5,0.9)", target, !0)
	}, this.sc = function(id, aD) {
		ru(id, aD)
	}, this.hw = function(id, player) {
		rv(id, void 0 === player ? i.df : player)
	}, this.se = function(id) {
		for (var aA = r9.length - 1; 0 <= aA; aA--)
			if (r9[aA].id === id) return r9[aA];
		return null
	}, this.sf = function(sg, sh, player) {
		2 !== a5.ry[i.gC] && (rN(200, sg = 1 === sg ? L(120, [a5.r3[player]]) : L(121, [v.dh.e6(sg), a5.r3[player]]), 30, player, "rgb(190,255,190)", t.ac, -1, !0), sh) && (sg = 1 === sh ? L(122) : L(123, [v.dh.e6(sh)]), rr.ro(sg))
	}, this.si = function(sg, player) {
		2 !== a5.ry[i.gC] && (ru(31, 0), 2 === a5.ry[player] || player >= i.fd ? rN(150, 1 === sg ? L(124, [a5.r3[player]]) : L(125, [a5.r3[player], v.dh.e6(sg)]), 31, player, t.kb, "rgba(205,205,205,0.9)", -1, !0) : rN(150, 1 === sg ? L(126, [a5
			.r3[player]
		]) : L(127, [a5.r3[player], v.dh.e6(sg)]), 31, player, t.kb, "rgba(205,255,205,0.9)", -1, !0))
	}, this.hv = function(sn) {
		for (var aR = bl.ff(), aA = 2; 0 <= aA; aA--) 0 < rD.gt[aA] && (sn || rD.aR[aA] < aR - 220) && this.so(aA)
	}, this.so = function(id) {
		var ef, aH = rD.gt[id],
			player = rD.fT[id];
		rD.gt[id] = 0, 1 === aH ? (0 === id ? ef = L(134, [a5.r3[player], a5.r3[rD.rI[0]]]) : 1 === id ? ef = L(135, [a5.r3[player]]) : 2 === id ? ef = L(136, [a5.r3[player]]) : 3 === id && (ef = L(137, [a5.r3[player]])), ru(7, 0), rN(rD.mG[id],
			ef, 7, rD.rI[id], t.u, t.ac, -1, !0)) : (ef = L(0 === id ? 138 : 1 === id ? 139 : 140, [aH]), ru(7, 0), rN(rD.mG[id], ef, 7, player, t.u, t.ac, -1, !1))
	}, this.rx = function(id, sp, rS) {
		var aR = bl.ff(),
			aH = rD.gt[id] + 1;
		rD.gt[id]++, rD.fT[id] = sp, rD.rI[id] = rS, 1 === aH && (rD.aR[id] = aR), (1 === aH && (i.hq < 32 || 2 === i.bw) || 1 < aH && (rD.aR[id] < aR - 140 || 2 === i.bw)) && this.so(id)
	}, this.a9 = function() {
		sq.a9();
		for (var bN = (bN = r9.length - rE) <= 1 ? 1 : bN * bN, aA = r9.length - 1; 0 <= aA; aA--) 0 < r9[aA].bk && (r9[aA].bk -= bN, r9[aA].bk <= 0) && (bl.c8 = !0, r9.splice(aA, 1));
		! function() {
			var aD, aA;
			if (128 !== rF && !(++rF < 128))
				for (aD = 5, aA = aF.aI - 1; 0 <= aA; aA--) 1 === a5.ry[aF.aE[aA]] && 0 < aD-- && rN(240, L(137, [a5.r3[aF.aE[aA]]]), 1, aF.aE[aA], t.kb, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.hv(!1)
	}, this.ai = function() {
		for (var ss, bG = rc(), aA = r9.length - 1; 0 <= aA; aA--) ss = bG - (aA + 1) * an, 50 === r9[aA].id ? (aj.drawImage(r9[aA].canvas, r.d - r9[aA].d - rC - rA, ss), aj.drawImage(rG, r.d - rC - rA, ss)) : aj.drawImage(r9[aA].canvas, r.d -
			r9[aA].d - rA, ss)
	}
}

function st() {
	var su, sv, sw = -15e3,
		sx = !1;

	function hS(f6) {
		tF() || (sx = !0, tG(f6, 1), ct.d4.tH(ct.d4.nH), tI(Math.floor(r.f8 * f6.clientX), Math.floor(r.f8 * f6.clientY)))
	}

	function t4(f6) {
		sw = bl.bk, tG(f6, 1), ct.d4.tH(ct.d4.nH), 0 < f6.touches.length && (su = Math.floor(r.f8 * f6.touches[0].clientX), sv = Math.floor(r.f8 * f6.touches[0].clientY), tJ.t4(f6) || tI(su, sv))
	}

	function tI(bF, bG) {
		d2.hS(bF, bG), 0 === i.bw ? d0.hS(bF, bG) : hy.tK(bF, bG) || cY.hS(bF, bG) || hs.hS(bF, bG) || kS.tL(bF, bG) || tM.hS(bF, bG) || 0 <= mI.hS(bF, bG) || hn.hS(bF, bG) || p5.tN(bF, bG) || kS.tO(bF, bG)
	}

	function hW(f6) {
		tF() || (sx = !0, tG(f6, 1), tP(Math.floor(r.f8 * f6.clientX), Math.floor(r.f8 * f6.clientY)))
	}

	function t5(f6) {
		sw = bl.bk, tG(f6, 1), 0 < f6.touches.length && (su = Math.floor(r.f8 * f6.touches[0].clientX), sv = Math.floor(r.f8 * f6.touches[0].clientY), tJ.t5(f6) || tP(su, sv))
	}

	function tP(bF, bG) {
		d2.hW(bF, bG), 0 === i.bw ? d0.hW(bF, bG) : (tQ.tR(bF, bG), cY.hW(bF, bG) || (mI.hW(bF, bG), kS.jq() ? kS.hW(bF, bG) : qX.qP ? qX.hW(bF) && (bl.c8 = !0) : (hx.hW(bF, bG), qh.qi && qh.hW(bF, bG) && (bl.c8 = !0))))
	}

	function t3(f6) {
		tF() || (tG(f6, 1), tS(), 0 === i.bw ? (d0.click(-1024, -1024), o4.tT()) : (hx.tU(-1024, -1024), mI.hW(-1024, -1024), qX.qq(), qh.qi = !1))
	}

	function t2(f6) {
		tF() || (tG(f6, 1), tV(Math.floor(r.f8 * f6.clientX), Math.floor(r.f8 * f6.clientY), 2 === f6.button), p5.t0 && (p5.t0 = !1, f6.preventDefault()))
	}

	function click(f6) {
		tF() || tG(f6, 1)
	}

	function t6(f6) {
		sw = bl.bk, tG(f6, 1), f6 && f6.touches && 0 < f6.touches.length && 0 !== i.bw ? qh.qi = !1 : tJ.tW() || (tV(su, sv, !1), p5.t0 && (p5.t0 = !1, f6.preventDefault()))
	}

	function t7(f6) {
		sw = bl.bk, tG(f6, 1), tV(su, sv, !1), p5.t0 && (p5.t0 = !1, f6.preventDefault())
	}

	function t8(f6) {}

	function t9(f6) {}

	function tA(f6) {
		tF() || tG(f6, 0)
	}

	function tV(bF, bG, tX) {
		tS(), 0 === i.bw ? d0.click(bF, bG) : (hx.tU(bF, bG), cY.tU(), qX.qq(), qh.qi = !1, kS.click(bF, bG, tX) ? bl.c8 = !0 : mI.t2(bF, bG))
	}

	function tS() {
		d2.tS()
	}

	function qp(f6) {
		var bF, bG, deltaY;
		tF() || (tG(f6, 1), ct.d4.tH(ct.d4.nH), bF = Math.floor(r.f8 * f6.clientX), bG = Math.floor(r.f8 * f6.clientY), deltaY = f6.deltaY, 1 === f6.deltaMode && (deltaY *= 16), d2.qp(bF, bG, deltaY), 0 === i.bw ? d0.qp(bF, bG, deltaY) : hx.qp(bF,
			bG, deltaY) || (qX.hX(bF, bG) ? qX.qp(deltaY) && (bl.c8 = !0) : qh.qp(bF, bG, deltaY)))
	}

	function tB(f6) {
		tG(f6, 0)
	}

	function tG(f6, id) {
		0 === id && d2.jq() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== d0.d1() && f6.preventDefault()
	}

	function tC(f6) {
		if (__fx.keybindHandler(f6.key)) return;
		tF() || 0 < r.tZ || (f6 = f6.code) && f6.length && (p2.aR(f6, 18) ? ta.tb(3) : p2.aR(f6, 22) ? ta.tb(0) : p2.aR(f6, 20) ? ta.tb(1) : p2.aR(f6, 24) ? ta.tb(2) : p2.aR(f6, 10) ? qX.qn(31 / 32) : p2.aR(f6, 8) ? qX.qn(32 / 31) : p2.aR(f6, 6) ? qX
			.qn(7 / 8) : p2.aR(f6, 4) ? qX.qn(8 / 7) : p2.aR(f6, 14) ? 0 !== i.bw && qh.qp(Math.floor(r.d / 2), Math.floor(r.an / 2), -200) : p2.aR(f6, 16) ? 0 !== i.bw && qh.qp(Math.floor(r.d / 2), Math.floor(r.an / 2), 200) : p2.aR(f6, 0) ? i
			.bw && tQ.tc(!1) : p2.aR(f6, 2) ? i.bw && tQ.tc(!0) : p2.aR(f6, 26) ? i.bw && tQ.td() : p2.aR(f6, 28) && i.bw && tQ.te())
	}

	function tD(f6) {
		if (!tF() && !(0 < r.tZ || bl.bk < 400)) {
			var code = f6.code;
			if (code && code.length && !("Enter" === code && d2.dk(1) || "Space" === code && d2.dk(0))) return eT.tf ? eT.tg.dk(code) ? void 0 : void("Escape" === code && p5.th()) : void(8 !== d0.d1() && d0.dk(f6) ? bl.c8 = !0 : "Escape" === code ?
				p5.th() : p2.aR(code, 18) ? ta.ti(3) : p2.aR(code, 22) ? ta.ti(0) : p2.aR(code, 20) ? ta.ti(1) : p2.aR(code, 24) ? ta.ti(2) : p2.aR(code, 12) ? hy.tj(!i.q) : "Space" === code && i.bw && (mI.mJ && mI.tk(), i.i0) && hy.tl(!1))
		}
	}

	function tE() {
		"hidden" === document.visibilityState ? 1 === i.bw && (i.i0 ? hy.tm() : !i.kq || mI.mJ || i.bu || mI.tk()) : bl.c8 = !0
	}

	function tF() {
		return sw + 15e3 > bl.bk
	}

	function resize() {
		r.to()
	}
	this.sy = 0, this.sz = "", this.t0 = !1, this.h = function() {
		t1.addEventListener("mousedown", hS, {
			passive: !1
		}), t1.addEventListener("mousemove", hW, {
			passive: !1
		}), t1.addEventListener("mouseup", t2, {
			passive: !1
		}), t1.addEventListener("click", click, {
			passive: !1
		}), t1.addEventListener("mouseleave", t3, {
			passive: !1
		}), t1.addEventListener("wheel", qp, {
			passive: !1
		}), t1.addEventListener("touchstart", t4, {
			passive: !1
		}), t1.addEventListener("touchmove", t5, {
			passive: !1
		}), t1.addEventListener("touchend", t6, {
			passive: !1
		}), t1.addEventListener("touchcancel", t7, {
			passive: !1
		}), t1.addEventListener("dragover", t8), t1.addEventListener("drop", t9), t1.addEventListener("dblclick", tA), document.addEventListener("contextmenu", tB), document.addEventListener("keydown", tC), document.addEventListener("keyup",
			tD), document.addEventListener("visibilitychange", tE), window.addEventListener("resize", resize)
	}, this.tN = function(bF, bG) {
		return !!hy.hS(bF, bG) || !!(hx.hS(bF, bG) || qh.hS(bF, bG) || qX.hS(bF, bG) || hu.hS(bF, bG))
	}, this.tn = tF, this.p6 = function() {
		return !sx || 0 < sw
	}, this.th = function() {
		if (!d2.jq()) return 8 === d0.d1() ? i.q ? void hy.tj(!1) : cY.jq ? void cY.tk() : void mI.tk() : void(7 !== d0.d1() && 6 === d0.d1() && tp.tq());
		d2.dk(2)
	}
}

function tr() {
	var ts, tt, tu;
	ts = [32, 65, 191, 913, 931], tt = [64, 127, 688, 930, 1155], tu = new Array(ts.length + 1);
	for (var aA = 0; aA < tu.length; aA++) {
		tu[aA] = 0;
		for (var ee = aA - 1; 0 <= ee; ee--) tu[aA] += tt[ee] - ts[ee]
	}

	function u1(aR) {
		for (var aA = ts.length - 1; 0 <= aA; aA--)
			if (aR >= ts[aA] && aR < tt[aA]) return aA;
		return -1
	}
	this.tw = function(ef) {
		return 0 !== (ef = ef.trim()).indexOf("Bot ") && 0 !== ef.indexOf("[Bot] ") && function(ef, ty, tz) {
			var aH = (ef = ef.trim()).length;
			if (aH < ty || tz < aH) return !1;
			for (var aR, u0 = 0, aA = 0; aA < aH; aA++)
				if (aR = ef.charCodeAt(aA), u0 += 65 <= aR && aR <= 90 || 1040 <= aR && aR <= 1071 ? 1 : 0, -1 === u1(aR)) return !1;
			if (3 < u0 && u0 > Math.floor(aH / 2)) return !1;
			return !0
		}(ef, 3, 20)
	}, this.iU = function(ef) {
		for (var aH = (ef = ef.trim()).length, bW = [], aA = 0; aA < aH; aA++) {
			var aR, aL = u1(aR = ef.charCodeAt(aA));
			bW.push(tu[aL] + aR - ts[aL])
		}
		return bW
	}, this.jd = function(bW) {
		for (var aR, cq, ef = "", aH = bW.length, aA = 0; aA < aH; aA++)
			for (cq = 1; cq < tu.length; cq++)
				if (bW[aA] < tu[cq]) {
					aR = ts[cq - 1] + bW[aA] - tu[cq - 1], ef += String.fromCharCode(aR);
					break
				} return ef
	}, this.u2 = function(ef) {
		for (var bW = this.iU(ef), result = "", aA = 0; aA < bW.length; aA++) result = (result += bW[aA] < 10 ? "00" : bW[aA] < 100 ? "0" : "") + bW[aA].toString(10);
		return result
	}, this.u3 = function(ef) {
		for (var bW = new Array(Math.floor(ef.length / 3)), aA = 0; aA < ef.length; aA += 3) bW[Math.floor(aA / 3)] = parseInt(ef.substring(aA, aA + 3));
		return this.jd(bW)
	}, this.u4 = function(ef) {
		for (var ah, bW = [ef.length], aA = 0; aA < ef.length; aA++) bW[aA] = ef.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < ef.length; aA++) aA === ef.length - 1 || 51 < 10 * bW[aA] + bW[aA + 1] ? result += bW[aA].toString() : (ah = 10 * bW[aA] + bW[aA + 1], result += String.fromCharCode(ah + (ah < 26 ? 65 : 71)), aA++);
		return result
	}, this.u5 = function(ef) {
		for (var aR, result = "", aA = 0; aA < ef.length; aA++) 48 <= (aR = ef.charCodeAt(aA)) && aR < 58 ? result += String.fromCharCode(aR) : 65 <= aR && aR < 75 ? result += "0" + (aR - 65).toString() : 75 <= aR && aR < 91 ? result += (aR - 65)
			.toString() : 97 <= aR && aR < 123 && (result += (aR - 71).toString());
		return result
	}, this.u6 = function(ef) {
		for (var aH = ef.length, bW = [], aA = 0; aA < aH; aA++)(aR = ef.charCodeAt(aA)) < 58 ? bW.push(ef[aA]) : (aR -= aR < 91 ? 65 : 71, bW.push(String(bO.bP(aR, 10))), bW.push(String(aR - 10 * bO.bP(aR, 10))));
		var aH = bW.length - 2,
			aR = 0,
			u7 = [];
		for (aA = 0; aA < aH; aA += 3) u7[aR++] = parseInt(bW[aA] + bW[aA + 1] + bW[aA + 2]);
		return u7
	}, this.u8 = function() {
		for (var aS, u9 = "", aA = 0; aA < 6; aA++) aS = 48 + bA.random() % 36, aS += 58 <= aS ? 39 : 0, u9 += String.fromCharCode(aS);
		return u9
	}
}

function uA() {
	this.e5 = new uB, this.ji = new uC, this.iT = new uD, this.h = function() {
		this.e5.h()
	}
}

function uE(title, hf, uF) {
	var gQ, uG;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), uG.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, uF = uF || [new dF("⬅️ " + L(1), function() {
		d2.dN()
	}, t.uH)], gQ = new dE(title, uF), uG = new uI(gQ.dI, hf), v.w.textAlign(gQ.dI.style, 1)
}

function uJ() {
	var uK;
	this.lP = null, this.uL = 0, this.h = function() {
		uK = [], 9 === i.ko && this.uM()
	}, this.uM = function() {
		var uN = [60, 80, 105, 150, 190, 333];
		this.lP = [0, 0, 0, 0, 0, 0], this.uL = 0, i.fd < 9 ? (this.uL = 256 - bO.bP(275 * i.fd, 100), this.lP[0] = i.df - i.fd - this.uL) : i.fd < 13 ? (this.uL = 234 - 7 * (i.fd - 8), this.lP[0] = i.df - i.fd - this.uL) : i.fd <= uN[0] ? (this
			.uL = 256 - bO.bP(256 * i.fd, uN[0]), i.fd <= 23 ? this.lP[5] = bO.bP(Math.max(i.fd - 7, 0), 6) : this.lP[5] = 3 + bO.bP(37 * (i.fd - 23), 100), this.lP[0] = i.df - i.fd - this.uL - this.lP[5]) : (this.lP[5] = Math.min(16 + bO.bP(
			61 * (i.fd - 60), 100), 179), this.lP[0] = 512 - i.fd - this.lP[5]), i.uO = i.df - i.fd, i.data.numberTeams = (0 < i.fd) + (0 < i.uO), i.data.playerCount = i.l9 = i.fd + i.uO, i.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0,
			0, 0, 0, i.fd + this.uL, i.uO - this.uL
		]), i.it.iu()
	}, this.uP = function(player) {
		uK.push({
			player: player,
			aD: 14 + bA.l3(20)
		})
	}, this.a9 = function() {
		if (9 === i.ko)
			for (var aA = uK.length - 1; 0 <= aA; aA--) --uK[aA].aD <= 0 && (c3.sZ(uK[aA].player, 0, kA.en.kE + kA.en.uR), uK.splice(aA))
	}
}

function uS() {
	this.ix = new uT, this.iy = new uU, this.nq = new uV, this.h = function() {
		i.i0 || this.ix.h()
	}, this.a9 = function() {
		i.i0 || (this.ix.a9(), 3 !== d2.d3) || bl.ff() % 15 != 5 && 2 !== i.bw || d2.jf().uX()
	}, this.uY = function() {
		0 === i.bw && d0.j0(), i.it.j1(), i.data.canvas = null, ct.d4.close(ct.d4.nH, 3257), ct.d4.nH = 0, i.data.isReplay = 1, i.j2()
	}, this.uZ = function(ef) {
		var aA = ef.indexOf("=");
		return 0 <= aA ? ef.substring(aA + 1) : ef
	}, this.ua = function(ef) {
		return "https://territorial.io/?replay=" + ef
	}
}

function ub() {
	var uc, jw = 8,
		ud = new Array(2);

	function ue(bm) {
		var iZ = jw + 4,
			jG = v.w.pB(iZ, iZ),
			ih = v.w.getContext(jG, !0),
			ic = v.w.getImageData(ih, iZ, iZ),
			pE = ic.data;
		return uf(pE, iZ + 1, bm), uf(pE, iZ + 2, bm), uf(pE, 2 * iZ + 1, bm), uf(pE, 2 * iZ - 3, bm), uf(pE, 2 * iZ - 2, bm), uf(pE, 3 * iZ - 2, bm), uf(pE, iZ * (iZ - 3) + 1, bm), uf(pE, iZ * (iZ - 2) + 1, bm), uf(pE, iZ * (iZ - 2) + 2, bm), uf(pE,
			iZ * (iZ - 2) - 2, bm), uf(pE, iZ * (iZ - 1) - 3, bm), uf(pE, iZ * (iZ - 1) - 2, bm), ih.putImageData(ic, 0, 0), jG
	}

	function uf(pE, oh, bm) {
		oh *= 4;
		pE[oh] = 255, pE[1 + oh] = 255, pE[2 + oh] = bm, pE[3 + oh] = 255
	}

	function pB(player) {
		var jG = v.w.pB(jw, jw);
		return function(ih, player) {
			var bF, bG, pC, oh, uh, ui, iZ = jw,
				ic = v.w.getImageData(ih, iZ, iZ),
				pE = ic.data,
				cn = (iZ >> 1) - .5,
				uk = mr.ul(player),
				um = v.cj.un(uk, .5);
			v.cj.uo(uk, um, 300) || v.cj.up(uk, 100);
			for (bG = 0; bG < iZ; bG++)
				for (bF = 0; bF < iZ; bF++) ui = (iZ - 1.5) * (iZ - 1.5) / 4, uh = (pC = (pC = bF - cn) * pC + (pC = bG - cn) * pC) <= (iZ - 4.5) * (iZ - 4.5) / 4 ? um : uk, pE[oh = 4 * (bG * iZ + bF)] = uh[0], pE[1 + oh] = uh[1], pE[2 + oh] =
					uh[2], pE[3 + oh] = ui < pC ? 0 : 255;
			ih.putImageData(ic, 0, 0)
		}(v.w.getContext(jG, !0), player), jG
	}
	this.h = function() {
		uc = new Array(i.df), ud[0] = ue(255), ud[1] = ue(0)
	}, this.ai = function() {
		var aA, player, uq, ur, r6, lL, uu, uw, ux, uy = pI.d4.uy,
			sF = pI.d4.sF,
			sG = pI.d4.sG,
			uz = pI.d4.uz,
			v0 = uc,
			v1 = i.gC,
			v2 = -1,
			aH = pI.d4.v3,
			v4 = r.d,
			v5 = r.an,
			v6 = ip.mg << 4,
			lc = v8,
			bM = lc / jw,
			jr = v9 / lc,
			h6 = vA / lc,
			pC = (v4 + v9) / lc - jr,
			pD = (v5 + vA) / lc - h6,
			ih = aj;
		for (pI.eu.vB(i.gC, pI.vC.pA) && (v2 = aK.vD[3]), ih.imageSmoothingEnabled = lc < 9, v.w.textAlign(ih, 1), v.w.textBaseline(ih, 1), aA = 0; aA < aH; aA++) player = sF[aA] >> 3, r6 = sG[aA], uq = .9 + .1 * Math.log10(r6), ur = (lL = uy[
				aA]) % v6 / 16 - uq, lL = v5 * (Math.floor(lL / v6) / 16 - uq - h6) / pD, uu = -2 * (ux = lc * uq) * (1 + (uw = +(player === v1)) / 8), uw = uw * ux / 4, (ux = v4 * (ur - jr) / pC) < uu || lL < uu || v4 + uw < ux || v5 + uw <
			lL || (ur = 2 * uq * bM, uu = uq * lc, void 0 === (uw = v0[player]) && (v0[player] = uw = pB(player)), player === v1 && (ih.setTransform(ur, 0, 0, ur, ux - 2 * ur, lL - 2 * ur), ih.drawImage(ud[+(aA === v2)], 0, 0)), ih.setTransform(
				ur, 0, 0, ur, ux, lL), ih.drawImage(uw, 0, 0), (uq = Math.floor(function(r6) {
				if (r6 < 1e3) return .42;
				if (r6 < 1e4) return .34;
				if (r6 < 1e6) return .26;
				if (r6 < 1e8) return .19;
				return .15
			}(r6) * uu)) < 6) || (ih.setTransform(1, 0, 0, 1, 0, 0), ih.fillStyle = uz[aA] ? t.vF : t.u, ih.font = v.w.ae(1, uq), ih.fillText(v.dh.e6(r6), ux + uu, lL + uu + .1 * uq));
		ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function vG() {
	var canvas, f, bF, bG, vH, vI, gap, vJ, fontSize, vK, vL, vM, vN, vO, vP, vQ, vR, vS;

	function vZ() {
		f.clearRect(0, 0, c0.d, c0.an), f.fillStyle = t.ac, f.fillRect(0, 0, c0.d, c0.an), f.fillStyle = t.vc, bM = 0 < vQ ? vQ : Math.sqrt(vN[4] / 1e4), f.fillRect(0, c0.an - vH - 1, Math.floor(bM * c0.d), vH), f.fillStyle = t.u, f.fillRect(0, 0, c0
			.d, 1), f.fillRect(0, 0, 1, c0.an), f.fillRect(c0.d - 1, 0, 1, c0.an), f.fillRect(0, c0.an - 1, c0.d, 1), f.fillRect(0, c0.an - vH - 1, c0.d, 1);
		for (var bM, vd, a4 = 0, aA = 0; aA < vM.length; aA++) vO[aA] ? (v.w.textAlign(f, 0), vd = Math.floor((vI - vH + 2 * vJ) * (aA - a4 + 1) / (vM.length + 1) - .7 * vJ), f.fillText(vM[aA], gap, vd), v.w.textAlign(f, 2), 5 === aA && 0 !== a5.gB[i
			.gC] && a5.s9[i.gC] >= ve.vf(i.gC) ? (f.fillStyle = t.vg, f.fillText(vV(aA), c0.d - gap, vd), f.fillStyle = t.u) : f.fillText(vV(aA), c0.d - gap, vd)) : a4++
	}

	function vV(aA) {
		return aA < 3 ? vN[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? v.dh.lY(vN[aA] / 100, 2) : aA < 7 ? v.dh.e6(vN[aA]) : aA === 7 ? c0.vh(vN[7]) : aA === 8 ? __fx.utils.getMaxTroops(a5.a6, i.gC) : __fx.utils.getDensity(i.gC)
	}

	function vU() {
		a5.a6[i.gC] !== vN[6] && (vN[6] = a5.a6[i.gC], vK++)
	}
	this.h = function() {
		vQ = vR = 0, (vL = new Array(8))[0] = L(141), vL[1] = i.kq ? L(142) : L(143), vL[2] = L(144), vL[3] = L(145), vL[4] = L(146), vL[5] = L(147, 0, "Interest"), vL[6] = L(148), vL[7] = L(149),
			vL.push("Max Troops", "Density"), // add vL
			(vM = new Array(vL.length)).fill(""), (vN = new Array(vL.length))[0] = i.kq ? 0 : i.fd, vN[1] = i.kq ? aF.aI : i.uO, vN[2] = i.hp, vN[3] = 0, vN[4] = bO.bP(1e4 * a5.a6[0], Math.max(i.vT, 1)), vN[5] = 0 === i.data.iIncomeType ? 700 :
			1 === i.data.iIncomeType ? bO.bP(700 * i.data.iIncomeValue, 64) : bO.bP(700 * i.data.iIncomeData[i.gC], 64), vN[6] = 0, vU(), vN[7] = 0, vP = vV(6), vO = new Array(vL.length);
		for (var aA = vL.length - 1; 0 <= aA; aA--) vO[aA] = !0;
		vS = 0, vS = i.kq ? (vO[0] = !1, vO[2] = !1, vO[3] = !1, 3) : (vO[3] = !1, 1), vK = 0, this.resize()
	}, this.resize = function() {
		this.d = Math.floor((n.o.p() ? .1646 : .126) * 1.25 * r.s), this.an = Math.floor(1.18 * this.d), vH = Math.floor(.04 * this.d), gap = Math.floor(.035 * this.d), vJ = .04 * this.d, vI = this.an, this.an -= Math.floor(vS * (this.an - 2 *
			vH) / vL.length), fontSize = Math.floor(.7 * (vI - vH) / vL.length);
		var qH = v.w.ae(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.d, canvas.height = this.an,
			function(qH, d) {
				for (var aA = 0; aA < vM.length; aA++) vM[aA] = v.f.s8(vL[aA], qH, d)
			}((f = canvas.getContext("2d", {
				alpha: !0
			})).font = qH, .575 * this.d), v.w.textBaseline(f, 1), f.lineWidth = 1, this.vX(), this.qQ(), vY.qQ(), vZ()
	}, this.qQ = function() {
		bF = r.d - this.d - ak.gap
	}, this.va = function() {
		bG = ak.gap
	}, this.vX = function() {
		bG = ak.gap + (vY.vb() && 0 !== a5.gB[i.gC] && !i.bu ? vY.an + ak.gap : 0)
	}, this.c5 = function(sn) {
		(sn || 100 <= vK) && (vK = 0, vZ())
	}, this.vi = function() {
		return vN[7]
	}, this.vh = function(value) {
		var cn = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * cn) / 1e3);
		return value < 10 ? cn + ":0" + value : cn + ":" + value
	}, this.a9 = function() {
		var vu, per;
		vO[0] && i.hq - i.hp !== vN[0] && (vN[0] = i.hq - i.hp, vK++), aF.aI - vN[0] !== vN[1] && (vN[1] = aF.aI - vN[0], vK++), this.vl(), (vu = ve.vv(i.gC)) !== vN[5] && (vN[5] = vu, vK++), vU(), vN[7] += bl.cA, vu = vV(7), vP !== vu && (vP =
			vu, vK += 100), vu = i.j ? vr.y() : a5.a6[a7[0]], per = bO.bP(1e4 * vu, Math.max(i.vT, 1)), vN[3] = vu, vN[4] !== per && (vK++, vN[4] = per), 8 === i.ko && function() {
			for (var aA = 0; aA < 2; aA++)
				if (!v.fX.pH(aA)) return hr.er.hm(), 1;
			return
		}() || vN[3] < i.vT || ! function() {
			for (var aA = aF.aI - 1; 0 <= aA; aA--)
				if (0 < a5.pT[aF.aE[aA]].length) return;
			return 1
		}() || hr.er.hm()
	}, this.vl = function() {
		vO[2] && i.hp !== vN[2] && (vN[2] = i.hp, vK++)
	}, this.bv = function(aA) {
		var lE, vw, a4;
		return 2 !== i.bw && (aA % 2 == 1 && (hx.c5(1, 1), bl.c8 = !0), aA === i.c1 ? (vQ = 0, vZ(), !1) : (-1 !== aA || 0 !== vR) && (vw = vQ, vQ = i.i0 ? aA / i.c1 : (a4 = performance.now(), 0 <= aA && (lE = a4 - 392 * aA, vR = 0 === aA || lE <
			vR ? lE : vR), 1 < (vQ = (a4 - vR) / (392 * i.c1)) ? 1 : vQ), vZ(), vQ !== vw))
	}, this.ai = function() {
		aj.drawImage(canvas, bF, bG)
	}
}

function vx() {
	var mM = 0,
		vy = 0,
		vz = 0,
		w0 = null,
		w1 = null;

	function w4(eW, w6, w8) {
		var ef = eW.username;
		return (ef += "   " + eT.w9.eg(eW.eN, eW.eP, eW.eh)) + function(eW) {
			eW = eW.w3;
			if (eW < 1e3) return "   Gold: " + eW;
			if ((eW %= 1024) < 1e3) return "   Gold: " + eW + "k";
			return "   Gold: " + (eW - 999) + "M"
		}(eW) + ("   IP: " + e4.e5.e6(eW.wB, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][w8 ? vy : w2(eW, w6)])
	}

	function w2(eW, w6) {
		return vy = w6 || eT.eU.eR(eW.e7) ? 1 : 0
	}
	this.g3 = function() {
		!mM || vy === w2(w1) && vz === w1.w3 || (vz = w1.w3, w0.show(-1, -1, w4(w1, 0, 1), 1, 1))
	}, this.w5 = function(f6, eW, w6) {
		var w7 = f6.target.getBoundingClientRect();
		this.show(w7.left, w7.top, eW, 0, w6), f6.target.addEventListener("mouseleave", function remove() {
			f6.target.removeEventListener("mouseleave", remove), eT.g2 && eT.g2.dj(1)
		})
	}, this.show = function(bF, bG, eW, mR, w6) {
		w0 = w0 || new mK, vz = (w1 = eW).w3, w0.show(bF, bG, w4(eW, w6), mR), mM = 1
	}, this.dj = function(mY) {
		w0 && w0.dj(mY) && (mM = 0, w1 = null)
	}
}

function wC() {
	this.df = 512, this.wD = 15e8, this.wE = 1e9, this.wF = 5e4, this.wG = 512, this.wH = 2, this.gC = 0, this.fd = 0, this.hq = 0, this.uO = 0, this.hp = 0, this.l9 = 512, this.wI = 512, this.wJ = 150, this.kq = !0, this.i0 = 0, this.bw = 0, this
		.vT = 0, this.q = !1, this.bu = 0, this.wK = 0, this.j = !1, this.k = 0, this.wL = 0, this.ko = 0, this.rM = 0, this.c2 = null, this.sP = new wM, this.c1 = 30, this.hk = 0, this.ht = 0, this.wN = 0, this.wO = 0, this.data = new wP, this.it =
		new wQ, this.j3 = 0, this.j2 = function() {
			hr.h(), this.hq = this.fd = this.data.humanCount, this.kq = 1 === this.hq, this.q = !1, this.i0 = this.data.isReplay, this.ko = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data
				.numberTeams - 2, this.rM = this.data.isContest, this.j = this.ko < 7 || 9 === this.ko, this.ko = 10 === this.ko && this.kq ? 7 : this.ko, this.ko = 8 === this.ko && 2 !== this.fd ? 7 : this.ko, lO.h(), this.k = this.data.numberTeams,
				this.data.teamPlayerCount ? this.wL = +(0 < this.data.teamPlayerCount[0]) : (this.wL = 0, this.j && this.kq && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.k + 1), i.it.iu())), this.c1 =
				this.fd <= 2 ? 30 : this.fd <= 50 ? 40 : 50, this.wK = this.bu = this.data.selectableSpawn, this.c2 = this.bu ? new wR : null, 1 === f9.fj ? this.l9 = this.fd : this.l9 = this.data.playerCount, this.wI = this.l9, this.uO = this.l9 -
				this.fd, this.hp = 0, this.gC = this.data.selectedPlayer, this.hk = 0, this.ht = 0, this.wN = 0, this.wO = 0, bA.oe(this.data.spawningSeed), ve.h(), a5.h(), wS.qx(), bx.by.wT = [], a1.h(), this.bw = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), cZ.h(), wU(), mr.cW(), mk.wV(), c6.h(), mr.h(), wW.h(), ri.h(), pI.h(), wX.h(), wY.p1(), cX.h(), wS.b0(), wZ
				.h(), wa.h(), aF.mv(), bz.h(), vr.h(), wb.h(), cY.h(), wc.putImageData(wd, 0, 0), hx.h(), qh.h(), qX.h(), hy.h(), hn.h(), vY.h(), c0.h(), mI.h(), qI.h(), hu.h(), tM.h(), kS.h(), hs.h(), we.h(), wf.h(), wg(), gD.h(), c3.h(), wh.h(), wi
				.h(), wj.h(), this.sP.h(), bl.p1(), ob.wm(), 0 === a5.gB[i.gC] && hs.show(!1, !0), c3.c5(!0), wl.h(), bl.c8 = !0, this.i0 || this.kq && this.bu || n.o.setState(1), this.j3 = 0
		}, this.wn = function(wo) {
			i.i0 || bz.ix.wp.length || (bz.ix.wp = bz.iy.iU()), ct.d4.wq(), rr.clear(), this.bw = 0, bl.wr(), n.o.setState(0), d0.setState(0), wo || ws.wt.show(), 2 === this.j3 ? d2.d4.np() : 1 === this.j3 ? d2.da(19) : d2.da(5, 5)
		}, this.wu = function() {
			return this.i0 ? mI.mJ || !hy.wv : this.kq && (mI.mJ || this.bu)
		}, this.ww = function() {
			return 1 === this.bw && !this.bu
		}
}

function wx() {
	this.lK = new Array(i.df), this.r3 = new Array(i.df), this.ry = new Uint8Array(i.df), this.gB = new Uint8Array(i.df), this.pN = new Uint16Array(i.df), this.pP = new Uint16Array(i.df), this.pQ = new Uint16Array(i.df), this.pR = new Uint16Array(i
			.df), this.a6 = new Uint32Array(i.df), this.n1 = new Uint32Array(i.df), this.s9 = new Uint32Array(i.df), this.pT = null, this.pZ = null, this.pa = null, this.pb = null, this.fZ = new Uint16Array(i.df), this.fa = new Uint16Array(i.df),
		this.fb = new Uint16Array(i.df), this.fU = new Uint16Array(i.df), this.fc = new Uint8Array(i.df), this.wy = new Uint16Array(i.df), this.h = function() {
			this.lK.fill(""), this.r3.fill(""), this.ry.fill(0), this.gB.fill(0), this.pN.fill(0), this.pP.fill(0), this.pQ.fill(0), this.pR.fill(0), this.a6.fill(0), this.n1.fill(0), this.s9.fill(0), this.pT = new Array(i.df), this.pZ = new Array(i
				.df), this.pa = new Array(i.df), this.pb = new Array(i.df), this.fZ.fill(0), this.fa.fill(0), this.fb.fill(0), this.fU.fill(0), this.fc.fill(0), this.wy.fill(0)
		}
}

function wz() {
	this.x0 = function(bM) {
		var x2;
		return ip.x1(ip.oY) && i.data.passableMountains && (x2 = mr.sC(bM), this.x3(i.gC, x2) || this.x4(i.gC, x2)) && 0 !== (x2 = function(xC) {
			for (var bF = ri.rj(xC), bG = ri.rk(xC), max = Math.max(ip.mg, ip.mj) - 2, xD = max * max, sd = !1, xE = 0, l5 = 0; l5 < max; l5++) {
				var xF, oh = function(bF, bG, l5) {
					for (var aA = 0; aA <= l5; aA++)
						for (var ee = -1; ee < 2; ee += 2)
							for (var cq = -1; cq < 2; cq += 2)
								for (var aR = 0; aR < 2; aR++) {
									var bM = function(bF, bG) {
										if (ri.xI(bF, bG)) {
											bF = ri.xJ(bF, bG), bG = ri.x7(bF);
											if (mr.pm(bG) && mr.xK(bG)) return bF
										}
										return 0
									}(bF + aR * ee * aA + (1 - aR) * cq * l5, bG + aR * cq * l5 + (1 - aR) * ee * aA);
									if (bM) return bM
								}
					return 0
				}(bF, bG, l5);
				oh && (xF = ri.xG(bF, bG, oh)) < xD && (xE = oh, xD = xF, sd || (sd = !0, max = Math.floor(Math.sqrt(xF)) + 1))
			}
			return xE
		}(ri.x6(bM))) && (bM = ri.x7(x2), mr.pU(bM) || (bM = mr.pW(bM)) !== i.gC && pt(bM, i.gC)) ? x2 : 0
	}, this.x8 = function(player, oh) {
		oh = ri.x7(oh);
		if (mr.pm(oh)) {
			if (mr.pU(oh)) aK.x9[0] = i.df;
			else if (mr.pW(oh) !== aK.x9[0]) return !1;
			for (var aG = function(bM) {
					var mq = mr.mq,
						aG = [];
					loop: for (var gl = 3; 0 <= gl; gl--) {
						var ld = bM + mq[gl];
						if (mr.sB(ld)) {
							for (var id = mr.sC(ld), aA = 0; aA < aG.length; aA++)
								if (id === aG[aA]) continue loop;
							aK.xB[aG.length] = ld, aG.push(id)
						}
					}
					return aG
				}(oh), aH = aG.length, aA = 0; aA < aH; aA++)
				if (this.x3(player, aG[aA]) || this.x4(player, aG[aA])) return aK.xB[0] = aK.xB[aA], !0
		}
		return !1
	}, this.x3 = function(player, x2) {
		for (var pb = a5.pb[player], aH = pb.length, xL = Math.max(bO.bP(aH, 12), 1), mq = mr.mq, aA = 0; aA < aH; aA += xL)
			for (var lc = pb[aA], gl = 3; 0 <= gl; gl--) {
				var ld = lc + mq[gl];
				if (mr.sB(ld) && x2 === mr.sC(ld)) return !0
			}
		return !1
	}, this.x4 = function(player, x2) {
		for (var pb = a5.pb[player], aH = pb.length, mq = mr.mq, aA = 0; aA < aH; aA++)
			for (var lc = pb[aA], gl = 3; 0 <= gl; gl--) {
				var ld = lc + mq[gl];
				if (mr.sB(ld) && x2 === mr.sC(ld)) return !0
			}
		return !1
	}
}

function xM() {
	var xP, xQ, xR, xS, xT, xU, xV, xW, xX, xY, xN = [
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
		xO = [
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

	function xd(l8, lf) {
		for (var aA = l8; aA < lf; aA++) xP[aA] = 4 * bO.bP(64 * bA.random(), bA.value(100)), xQ[aA] = 4 * bO.bP(64 * bA.random(), bA.value(100)), xR[aA] = 4 * bO.bP(64 * bA.random(), bA.value(100))
	}

	function xc(l8, lf) {
		for (var colorsData = i.data.colorsData, aA = l8; aA < lf; aA++) {
			var ah = colorsData[aA];
			xP[aA] = 4 * (ah >> 12), xQ[aA] = 4 * (ah >> 6 & 63), xR[aA] = 4 * (63 & ah)
		}
	}

	function xr(bM, xt) {
		md[bM] = 0, md[bM + 1] = 0, md[bM + 2] = xt, md[bM + 3] = 0, xu(bM)
	}

	function xu(bM) {
		var bF;
		c6.xv || (bF = mr.xl(bM), bM = mr.rc(bM), c6.xv = bF >= xw.xx[0] && bF <= xw.xx[2] && bM >= xw.xx[1] && bM <= xw.xx[3])
	}
	this.mq = new Int32Array(4), this.cW = function() {
		var mq = this.mq;
		mq[0] = -4 * ip.mg, mq[1] = 4, mq[2] = -mq[0], mq[3] = -mq[1]
	}, this.h = function() {
		if (xP = new Uint8Array(i.df), xQ = new Uint8Array(i.df), xR = new Uint8Array(i.df), xS = new Uint8Array(i.df), xT = new Uint8Array(i.df), xU = new Uint8Array(i.df), xV = new Uint8Array(i.df), xW = new Uint8Array(i.df), xX =
			new Uint8Array(i.df), xY = new Uint8Array(i.df), this.oR = new Uint8Array(i.df), i.j)
			for (var kj = a1.kj, aA = i.df - 1; 0 <= aA; aA--) {
				var aR = kj[aA],
					cn = bO.bP((xO[aR][3] + 1) * bA.random(), bA.value(100));
				xP[aA] = xN[aR][0] + cn * xO[aR][0], xQ[aA] = xN[aR][1] + cn * xO[aR][1], xR[aA] = xN[aR][2] + cn * xO[aR][2]
			} else 0 === i.data.colorsType ? i.data.selectableColor ? (xc(0, i.fd), xd(i.fd, i.df)) : xd(0, i.df) : xc(0, i.df);
		! function() {
			var aA, gl;
			for (aA = i.df - 1; 0 <= aA; aA--) gl = bO.bP(xP[aA] + xQ[aA] + xR[aA], 3), xP[aA] += xk(gl - xP[aA], 2), xQ[aA] += xk(gl - xQ[aA], 2), xR[aA] += xk(gl - xR[aA], 2), xP[aA] -= xP[aA] % 4, xQ[aA] -= xQ[aA] % 4, xR[aA] -= xR[aA] % 4
		}(),
		function() {
			for (var aA = i.df - 1; 0 <= aA; aA--) xP[aA] += bO.bP(aA, 128), xQ[aA] += bO.bP(aA % 128, 32), xR[aA] += bO.bP(aA % 32, 8), xS[aA] = aA % 8
		}(), this.xg(),
			function() {
				for (var aA = i.df - 1; 0 <= aA; aA--) xT[aA] = xP[aA] < 32 ? xP[aA] + 32 : xP[aA] - 32, xU[aA] = xQ[aA] < 32 ? xQ[aA] + 32 : xQ[aA] - 32, xV[aA] = xR[aA] < 32 ? xR[aA] + 32 : xR[aA] - 32
			}(),
			function() {
				for (var aA = i.df - 1; 0 <= aA; aA--) xW[aA] = 235 < xP[aA] ? xP[aA] - 20 : xP[aA] + 20, xX[aA] = 235 < xQ[aA] ? xQ[aA] - 20 : xQ[aA] + 20, xY[aA] = 235 < xR[aA] ? xR[aA] - 20 : xR[aA] + 20
			}()
	}, this.ul = function(player) {
		var bW = aK.xj;
		return bW[0] = xP[player], bW[1] = xQ[player], bW[2] = xR[player], bW
	}, this.xg = function() {
		for (var aA = i.df - 1; 0 <= aA; aA--) this.oR[aA] = xP[aA] + xQ[aA] + xR[aA] < 280 ? 0 : 1
	}, this.xl = function(bM) {
		return bO.bP(bM, 4) % ip.mg
	}, this.rc = function(bM) {
		return bO.bP(bM, 4 * ip.mg)
	}, this.xm = function(bF, bG) {
		return Math.floor(4 * (bG * ip.mg + bF))
	}, this.xn = function(bM) {
		var mq = this.mq;
		return this.pf(bM + mq[0]) || this.pf(bM + mq[1]) || this.pf(bM + mq[2]) || this.pf(bM + mq[3])
	}, this.xK = function(bM) {
		var mq = this.mq;
		return this.sB(bM + mq[0]) || this.sB(bM + mq[1]) || this.sB(bM + mq[2]) || this.sB(bM + mq[3])
	}, this.xo = function(bM, player) {
		var mq = this.mq;
		return this.pe(bM + mq[0], player) || this.pe(bM + mq[1], player) || this.pe(bM + mq[2], player) || this.pe(bM + mq[3], player)
	}, this.pV = function(bM) {
		return 208 <= md[bM + 3]
	}, this.pk = function(player, bM) {
		return this.pV(bM) && this.pp(player, bM)
	}, this.pp = function(player, bM) {
		return player === this.pW(bM)
	}, this.pq = function(bM) {
		return 208 <= md[bM + 3] && md[bM + 3] < 224
	}, this.q1 = function(bM) {
		return 224 <= md[bM + 3] && md[bM + 3] < 248
	}, this.ok = function(bM) {
		for (var mq = this.mq, aA = 3; 0 <= aA; aA--)
			if (this.oi(bM + mq[aA])) return !0;
		return !1
	}, this.pm = function(bM) {
		return this.pV(bM) || this.pU(bM)
	}, this.oi = function(bM) {
		return 0 === md[bM + 3] && 2 === md[bM + 2]
	}, this.pU = function(bM) {
		return 0 === md[bM + 3] && 1 === md[bM + 2]
	}, this.xp = function(bM) {
		return 0 === md[bM + 3] && 3 === md[bM + 2]
	}, this.sB = function(bM) {
		return 0 === md[bM + 3] && 5 === md[bM + 2]
	}, this.pf = function(bM) {
		return 0 === md[bM + 3] && 3 <= md[bM + 2]
	}, this.sC = function(bM) {
		return (md[bM] << 8) + md[bM + 1]
	}, this.pe = function(bM, player) {
		return this.pU(bM) || this.pV(bM) && player !== this.pW(bM)
	}, this.pW = function(bM) {
		return md[bM] % 4 * 128 + md[bM + 1] % 4 * 32 + md[bM + 2] % 4 * 8 + md[bM + 3] % 8
	}, this.xq = function(bM) {
		xr(bM, 1)
	}, this.xs = function(bM) {
		xr(bM, 2)
	}, this.pg = function(bM, player) {
		md[bM] = xP[player], md[bM + 1] = xQ[player], md[bM + 2] = xR[player], md[bM + 3] = 208 + xS[player], xu(bM)
	}, this.pr = function(bM, player) {
		md[bM] = xT[player], md[bM + 1] = xU[player], md[bM + 2] = xV[player], md[bM + 3] = 224 + xS[player], xu(bM)
	}, this.pX = function(bM, player) {
		md[bM] = xW[player], md[bM + 1] = xX[player], md[bM + 2] = xY[player], md[bM + 3] = 248 + xS[player], xu(bM)
	}
}

function xy() {
	this.resize = function() {
		var aA, xz = document.head.querySelector("style#ss");
		if (xz)
			for (aA = xz.sheet.cssRules.length - 1; 0 <= aA; aA--) xz.sheet.deleteRule(0);
		else(xz = document.createElement("style")).id = "ss", document.head.appendChild(xz);
		var hN = "::-webkit-scrollbar",
			y0 = v.w.y1(ak.mX),
			iZ = v.w.y1(Math.max(v.w.mV(.012), 8));
		try {
			xz.sheet.insertRule(hN + "{width:" + iZ + ";height:" + iZ + ";}", xz.sheet.cssRules.length), xz.sheet.insertRule(hN + "-thumb{background-color:white;}", xz.sheet.cssRules.length), xz.sheet.insertRule(hN + "-track{background:" + t.mQ +
				";}", xz.sheet.cssRules.length), xz.sheet.insertRule(hN + "-track:horizontal{border-top:" + y0 + " solid white;}", xz.sheet.cssRules.length), xz.sheet.insertRule(hN + "-track:vertical{border-left:" + y0 + " solid white;}", xz
				.sheet.cssRules.length), xz.sheet.insertRule(hN + "-button{display:none;}", xz.sheet.cssRules.length)
		} catch (f6) {
			for (console.log("error 3425: " + f6), aA = xz.sheet.cssRules.length - 1; 0 <= aA; aA--) xz.sheet.deleteRule(0)
		}
	}
}

function y2() {
	function yO() {
		var id = jX.jb(3);
		return 0 === id ? {
			id: id,
			e7: jX.jb(30),
			e8: eT.yQ.yR(jc.iT.jd(7))
		} : 1 === id ? {
			id: id,
			e7: jX.jb(30),
			eA: jX.jb(3),
			value: jX.jb(30),
			target: jX.jb(30)
		} : 2 === id ? {
			id: id,
			e7: jX.jb(30),
			eA: jX.jb(3)
		} : 3 === id ? {
			id: id,
			e7: jX.jb(30),
			eA: jX.jb(3),
			value: jX.jb(4),
			target: jX.jb(30)
		} : 4 === id ? {
			id: id,
			e7: jX.jb(30),
			eA: jX.jb(3),
			target: jX.jb(30)
		} : 5 === id ? {
			id: id,
			eA: jX.jb(6)
		} : 6 === id ? {
			id: id,
			value: jX.jb(17)
		} : null
	}
	this.y3 = function(iI) {
		if (iI !== ct.d4.iP) ct.d4.close(iI, 3239);
		else if (6 !== d0.d1()) ct.d4.close(iI, 3271);
		else {
			eT.h();
			for (var aA = 0; aA < 4; aA++) {
				var g4 = eT.d4.ej[aA],
					playerCount = (g4.g0 = jX.jb(10), g4.oY = jX.jb(6), g4.mapSeed = jX.jb(14), g4.y4 = jX.jb(4), g4.y5 = jX.jb(6), g4.y6 = jX.jb(4), g4.y7 = jX.jb(1), g4.g6 = jX.jb(12), g4.spawningSeed = jX.jb(14), jX.jb(16));
				eT.eU.y8[aA] = jX.jb(16);
				for (var ee = 0; ee < playerCount; ee++) eT.eU.y9(aA, jX.jb(30), jc.iT.jd(5), jX.jb(4), jX.jb(30), jX.jb(7), jX.jb(16), jX.jb(18), jX.jb(11), jX.jb(12))
			}
			d2.da(29), eT.d4.fs(!0)
		}
	}, this.yA = function(iI) {
		if (iI !== ct.d4.iP) ct.d4.close(iI, 3239);
		else if (eT.tf) {
			eT.d4.fq[0] = jX.jb(20), eT.d4.fq[1] = jX.jb(20);
			for (var yB = jX.jb(16), ee = 0; ee < yB; ee++) {
				var id = jX.jb(3);
				0 === id ? eT.eU.y9(jX.jb(2), jX.jb(30), jc.iT.jd(5), 0, 1234566, 127, 0, jX.jb(18), 0, jX.jb(12)) : 1 === id ? eT.eU.yC(jX.jb(16), jX.jb(2)) : 2 === id ? eT.eU.yD(jX.jb(16), jX.jb(2), jX.jb(2)) : 3 === id ? eT.eU.yE(jX.jb(16), jX
					.jb(2)) : 4 === id ? eT.eU.yF(jX.jb(16), jX.jb(2), jX.jb(4), jX.jb(30), jX.jb(7), jX.jb(16), jX.jb(11)) : 5 === id && eT.eU.yG(jX.jb(16), jX.jb(2), jX.jb(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var g4 = eT.d4.ej[aA];
				if (g4.g0 = jX.jb(10), 0 === g4.g0) {
					if (g4.nH = jX.jb(10), g4.yH = jX.jb(10), eT.yI.n3(aA)) return;
					g4.oY = jX.jb(6), g4.mapSeed = jX.jb(14), g4.y4 = jX.jb(4), g4.y5 = jX.jb(6), g4.y6 = jX.jb(4), g4.y7 = jX.jb(1), g4.g6 = jX.jb(12), g4.spawningSeed = jX.jb(14), g4.yJ.push(g4.yJ[0]), g4.yJ.shift()
				}
			}
			eT.d4.fu()
		} else ct.d4.close(iI, 3251)
	}, this.yK = function(iI) {
		if (iI !== ct.d4.iP) ct.d4.close(iI, 3272);
		else if (eT.tf) {
			for (var eL = jX.jb(4), g4 = eT.d4.ej[eL], el = g4.el, yM = (g4.yL = jX.jb(20), jX.jb(6)), aA = 0; aA < yM; aA++) {
				var yN = yO();
				eT.en.yP(yN), el.push(yN)
			}
			eT.d4.g7(eL)
		} else ct.d4.close(iI, 3273)
	}, this.yS = function(iI) {
		iI !== ct.d4.iP ? ct.d4.close(iI, 3276) : eT.tf ? eT.message.yT(yO()) : ct.d4.close(iI, 3277)
	}
}

function yU() {
	"function" != typeof Math.log2 && (Math.log2 = function(bF) {
		return Math.log(bF) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(bF) {
		return Math.log(bF) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(bF) {
		return 0 < bF ? 1 : bF < 0 ? -1 : 0
	})
}

function fG(title, hf, yV, uF) {
	var gQ, uG;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), uG.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, uF = uF || [new dF("⬅️ " + L(1), function() {
		d2.dN()
	})], gQ = new dE(title, uF), uG = new uI(gQ.dI, hf), yV && v.w.textAlign(gQ.dI.style, 1)
}

function yW() {
	var yX = 0,
		yY = !0;

	function yc(id) {
		id = [L(150), L(151), L(152), L(153)][id];
		hu.sR(id)
	}
	this.a9 = function() {
		var a4, ya;
		bl.bk < yX || (yX = bl.bk + 5e3, i.i0) || i.kq || v.fX.pH(i.gC) || (a4 = new Date, ya = a4.getUTCSeconds(), yY ? ya < 50 && (yY = !1) : ya < 50 || (yY = !0, (ya = (a4.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == ya || 20 == ya || 40 ==
			ya ? i.ko < 7 && yc(0) : 10 == ya || 30 == ya || 50 == ya ? 7 !== i.ko && 10 !== i.ko || yc(1) : 5 == ya || 25 == ya || 45 == ya ? 8 === i.ko && yc(2) : 35 == ya && 9 === i.ko && yc(3))))
	}
}

function m2(id, b1, yd) {
	var gQ, uG;

	function yi() {
		uG.jM.innerHTML += "<br>" + L(156)
	}

	function yh() {
		iJ.b0(48), iJ.fO(24, Math.floor(bO.pow(24) * Math.random())), iJ.fO(24, Math.floor(bO.pow(24) * Math.random())), jX.h(iJ.bt), ce.cx.cy(110, e4.e5.z2(e4.e5.z3(8))), ct.yt.z4()
	}
	this.ye = !0, this.yf = id, this.show = function() {
		gQ.show(), this.resize(), 15 === id ? (ct.d4.yg(id) ? yh : yi)() : 16 === id ? ct.d4.yg(id) ? ct.cu.nA(2) : yi() : 17 === id ? ct.d4.yg(id) ? ct.cu.nA(3) : yi() : 18 === id ? (ct.d4.close(0, 3253), ct.d4.yj(0, id), yi()) : 21 === id ? ct
			.d4.yg(id) ? ct.yk.yl(b1.ja, b1.ym, b1.yn) : yi() : 22 === id ? ct.d4.yg(id) ? ct.yk.yo(b1.ja, b1.yp, b1.yq) : yi() : 23 === id ? ct.d4.yg(id) ? ct.yk.yr(b1.gi, b1.eb) : yi() : 24 === id ? ct.d4.yg(id) ? ct.yk.ys(b1.gi, b1.ym, b1
			.yn) : yi() : 25 === id ? ct.d4.yg(id) ? ct.yt.yu(b1) : yi() : 28 === id ? ct.d4.yg(id) ? ct.yk.yv(b1.ja, b1.yp, b1.yq) : yi() : 29 === id && (ct.d4.yg(id) ? ct.yt.yw(b1) : yi())
	}, this.yx = function() {
		15 === id ? yh() : 16 === id ? ct.cu.nA(2) : 17 === id ? ct.cu.nA(3) : 18 === id ? d2.da(8, this.ly, new m2(16)) : 21 === id ? ct.yk.yl(b1.ja, b1.ym, b1.yn) : 22 === id ? ct.yk.yo(b1.ja, b1.yp, b1.yq) : 23 === id ? ct.yk.yr(b1.gi, b1
			.eb) : 24 === id ? ct.yk.ys(b1.gi, b1.ym, b1.yn) : 25 === id ? ct.yt.yu(b1) : 28 === id ? ct.yk.yv(b1.ja, b1.yp, b1.yq) : 29 === id ? ct.yt.yw(b1) : 1e3 === id && (this.yf = id = 25, ct.yt.yu(b1))
	}, this.jg = function(code, sn, data) {
		!sn && code !== id || (15 === code || 16 === code ? d2.da(7, this.ly) : 17 === code ? (ct.d4.close(0, 3252), ce.d4.yy(0), ce.cf.data[117].dZ && 0 < ce.cf.data[117].dZ.length ? (sn = ce.d4.yz(0), ce.cx.cy(105, sn.e7), ce.cx.cy(106, sn
			.password), d2.da(8, this.ly, new m2(16))) : (ce.cx.cy(105, ""), d2.d4.d5())) : 21 === code ? d2.da(10, this.ly, new z0(data)) : 23 === code ? d2.da(13, this.ly, new gP({
			data: data,
			gi: b1.gi
		})) : 25 === code && (d2.d4.z1.e7 = b1.e7, d2.da(15, this.ly)))
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), uG.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(154), [new dF("⬅️ " + L(1), function() {
		yd ? d2.da(29) : d2.d4.d5()
	})]), uG = new uI(gQ.dI, L(155))
}

function z5() {
	var ef;
	10 === ip.oY ? ef =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === ip.oY ? ef =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === ip.oY ? ef =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === ip.oY ? ef =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === ip.oY ? ef =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === ip.oY ? ef =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === ip.oY ? ef =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === ip.oY ? ef =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === ip.oY ? ef =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === ip.oY && (ef =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new z6).jd(ef)
}

function z7() {
	var z9 = new Array(1),
		zA = new Array(1),
		zB = 20,
		zC = 0,
		zD = !1;

	function zG() {
		zB++, zH.play()
	}
	this.h = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				zA[aA] = 0, z9[aA] = document.createElement("audio"), z9[aA].src = src, z9[aA].setAttribute("preload", "auto"), z9[aA].setAttribute("controls", "none"), z9[aA].style.display = "none", z9[aA].onpause = function() {
					zA[aA] = 1
				}, z9[aA].oncanplaythrough = function() {
					zA[aA] = 0 === zA[aA] ? 1 : zA[aA]
				}, document.body.appendChild(z9[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			zD = !0
		}
	}, this.zF = function() {
		if (zD) {
			zD = !1;
			for (var aA = 0; 0 <= aA; aA--) z9[aA].onpause = null, z9[aA].oncanplaythrough = null, document.body.removeChild(z9[aA]), z9[aA] = null
		}
	}, this.play = function() {
		if (zD) {
			var a4 = performance.now();
			if (zC + 66 < a4)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === zA[aA]) return zC = a4, zA[aA] = 2, void z9[aA].play();
			0 < zB && (zB--, setTimeout(zG, 66))
		}
	}
}

function zI() {
	this.w = new zJ, this.cj = new zK, this.fX = new zL, this.dh = new lQ, this.f = new zM, this.o8 = new zN, this.canvas = new zO, this.color = new zP, this.gj = new oE, this.h = function() {
		this.w.zQ()
	}
}

function zR() {
	var jr, h6, oC, oD, zS = 0,
		zT = 0;

	function zW() {
		return Math.pow(Math.pow(oC - jr, 2) + Math.pow(oD - h6, 2), .5)
	}

	function zU(f6) {
		jr = r.f8 * f6.touches[0].clientX, h6 = r.f8 * f6.touches[0].clientY, oC = r.f8 * f6.touches[1].clientX, oD = r.f8 * f6.touches[1].clientY
	}
	this.t4 = function(f6) {
		return 1 < f6.touches.length ? (zT = bl.bk, zS = 3, zU(f6), kS.dj(), !0) : (zS = 0, !1)
	}, this.t5 = function(f6) {
		var zV, qF, qG;
		return 0 !== i.bw && 1 < f6.touches.length && (zS = Math.max(zS - 1, 0), ob.lf() && (zV = zW(), zU(f6), f6 = zW(), qF = Math.floor((jr + oC) / 2), qG = Math.floor((h6 + oD) / 2), qh.zY(qF, qG, Math.max(.125, f6) / Math.max(.125, zV)), bl
			.c8 = !0), !0)
	}, this.tW = function() {
		var bF, bG;
		return !!(zS && (zS = 0, bl.bk < zT + 500)) && (bF = (jr + oC) / 2, bG = (h6 + oD) / 2, kS.tO(bF, bG), kS.click(bF, bG, !0) && (bl.c8 = !0), !0)
	}
}

function zZ() {
	this.y9 = function(player) {
		wf.za(player), i.hp++, a5.ry[player] = 2, a5.fU[player] = zb.zc.fW(), player === i.gC && (hs.show(!1, !1), c0.va(), hr.f0.zd()), c3.s0(player)
	}
}

function ze() {
	var kK = new Uint8Array(i.df),
		zf = new Uint16Array(i.df),
		zg = new Uint16Array(i.df),
		zh = new Uint8Array(i.df),
		zi = (this.r6 = new Uint8Array(i.df), new Uint16Array(i.df)),
		zj = new Uint16Array(i.df);

	function zu(aA) {
		kK[aA] = 1 + bO.bP(zi[aA] * bA.random(), 10 * bA.value(100))
	}
	this.jP = null, this.zk = [97, 94, 70, 40, 20, 0, 100], this.zl = [500, 450, 400, 300, 80, 50, 100], this.zm = [0, 0, 5, 25, 50, 100, 0], this.zn = [60, 74, 112, 200, 256, 512, 512], this.zo = [1, 2, 3, 4, 6, 8, 1], this.zp = [500, 450, 400, 300,
		80, 50, 100
	], this.cW = function() {
		this.jP = [L(157), L(158), L(159), L(160), L(161), L(162), "H Bot"]
	}, this.h = function() {
		kK.fill(0), zf.fill(0), zg.fill(0), zh.fill(0), this.r6.fill(0), zi.fill(0), zj.fill(0);
		var zq = i.fd;
		if (9 === i.ko) this.zr();
		else if (i.kq)
			if (3 === i.data.botDifficultyType)
				for (aA = i.uO - 1; 0 <= aA; aA--) {
					var gp = aA + zq;
					this.r6[gp] = i.data.botDifficultyData[gp]
				} else if (2 === i.data.botDifficultyType)
					for (aA = i.uO - 1; 0 <= aA; aA--) this.r6[gp = aA + zq] = i.data.botDifficultyTeam[a1.a2[a1.aG[gp]]];
				else if (1 === i.data.botDifficultyType) {
			var zt = this.jP.length;
			for (aA = i.uO - 1; 0 <= aA; aA--) this.r6[aA + zq] = aA % zt
		} else
			for (zt = i.data.botDifficultyValue, aA = i.uO - 1; 0 <= aA; aA--) this.r6[aA + zq] = zt;
		else
			for (var zs = 8 === i.ko ? 1 : 0, aA = i.uO - 1; 0 <= aA; aA--) this.r6[aA + zq] = zs;
		for (aA = 0; aA < zq; aA++) this.r6[aA] = 6;
		var aH = i.df;
		for (aA = 0; aA < aH; aA++) this.r6[aA] <= 2 ? (zh[aA] = 5, zi[aA] = zj[aA] = 1040, 0 === this.r6[aA] ? (zf[aA] = 980, zg[aA] = 980) : 1 === this.r6[aA] ? (zf[aA] = 980, zg[aA] = 920, zi[aA] = zj[aA] = 1100) : (zf[aA] = 825, zg[aA] =
			750)) : this.r6[aA] <= 4 ? (zh[aA] = 1 + bA.l3(20), 3 === this.r6[aA] ? (zf[aA] = zg[aA] = 500, zi[aA] = zj[aA] = 1e3) : (zj[aA] = 250 + bA.l3(1501), zi[aA] = 500 + bA.l3(501), zf[aA] = 300 + bA.l3(201), zg[aA] = 100 + bA.l3(
			201))) : this.r6[aA] <= 5 ? (zi[aA] = 1e3, zj[aA] = 1e3, zh[aA] = 35 + bA.l3(16), zf[aA] = 300 + bA.l3(201), zg[aA] = 50 + bA.l3(101)) : (zi[aA] = zj[aA] = 800, zh[aA] = 5, zf[aA] = 10, zg[aA] = 250), zu(aA)
	}, this.zr = function() {
		for (var bM = lO.uL, zq = i.fd, aA = bM - 1; 0 <= aA; aA--) this.r6[aA + zq] = 0;
		for (var cq = 0; cq < 6; cq++) {
			for (aA = bM + lO.lP[cq] - 1; bM <= aA; aA--) this.r6[aA + zq] = cq;
			bM += lO.lP[cq]
		}
	}, this.zv = function(aL, value) {
		kK[aL] = Math.min(value, kK[aL])
	}, this.a9 = function(aL) {
		0 == --kK[aL] && ! function(aL) {
			(function(aL) {
				zi[aL] !== zj[aL] && (zi[aL] += zi[aL] < zj[aL] ? 3 : -3);
				zf[aL] !== zg[aL] && (zf[aL] += zf[aL] < zg[aL] ? zh[aL] : -zh[aL], zf[aL] = (Math.abs(zf[aL] - zg[aL]) <= zh[aL] ? zg : zf)[aL]);
				kK[aL] = bO.bP(zi[aL], 10)
			})(aL), wX.zy.zz(aL, bO.bP(zf[aL] * a5.s9[aL], 1e3))
		}(aL)
	}, this.a00 = function(aL, aD) {
		zi[aL] = zj[aL] = aD
	}
}

function a01() {
	var gQ, a02, a03, a05;

	function a04(aA) {
		d2.da(8, d2.d3, new m2(21, {
			ja: aA,
			ym: 0,
			yn: 10
		}))
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), a02.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, a03 = [new dF(L(163), function() {
		a04(1)
	}, 0, 0, 1), new dF(L(164), function() {
		a04(2)
	}, 0, 0, 1), new dF(L(165), function() {
		a04(3)
	}, 0, 0, 1), new dF(L(166), function() {
		a04(0)
	}, 0, 0, 1), new dF(L(167), function() {
		a04(9)
	}, 0, 0, 1), new dF(L(168), function() {
		a04(10)
	}, 0, 0, 1), new dF(L(169), function() {
		a04(11)
	}, 0, 0, 1)], a05 = [new dF("⬅️ " + L(1), function() {
		d2.dN()
	})], gQ = new dE(L(170), a05), a02 = new a06(a03, gQ.dI)
}

function a07() {
	var gQ, lx, dR;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), lx.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(171), [new dF("⬅️ " + L(1), function() {
		d2.dN()
	})]), lx = new dH(gQ.dI, ((dR = []).push(function() {
		function a0D() {
			a0E.button.textContent = L(175), a0A.f6.readOnly = !1, a0C.f6.readOnly = !1, a0F.ns(1), a0F.button.style.color = t.u
		}
		var dU = new dV,
			a09 = (dU.dW(L(172)), new jI({
				value: ce.cf.data[105].value,
				bm: -1
			})),
			a0A = (a09.f6.readOnly = !0, dU.db(a09), dU.dW(L(173), "0.8em"), new jI(ce.cf.data[148])),
			a0A = new jI(ce.cf.data[148], 0, void 0, function(f6) {
				a0B(ce.cf.data[149].value, f6.target.value)
			}),
			a0C = (dU.db(a0A), dU.dW(L(174), "0.8em"), new jI(ce.cf.data[149], 1, void 0, function(f6) {
				a0B(f6.target.value, ce.cf.data[148].value)
			})),
			a0E = (dU.db(a0C), new dF(L(175), function(f6) {
				return f6.textContent === L(175) ? (f6.textContent = L(176), a0A.f6.readOnly = !0, a0C.f6.readOnly = !0, a0F.ns(0), a0F.button.style.color = t.dx, ce.cx.cy(149, a0C.f6.value), a0B(ce.cf.data[149].value, ce.cf
					.data[148].value)) : a0D(), !0
			})),
			a0F = (dU.db(new jH([a0E.button])), new dF(L(177), function(f6) {
				return a0A.f6.readOnly && ct.d4.a0G(0) && (v.w.a0H(f6), a0D(), ct.yt.a0I({
					a0J: 0,
					e7: ce.cf.data[148].value,
					value: parseInt(ce.cf.data[149].value, 10)
				})), !0
			}, 1)),
			hb = dU.ha(),
			a0B = (dU.ha(L(178)).style.fontWeight = "bold", function(ah, ef) {
				ah = v.fX.a0K(ah, 2, 1e6);
				var a0L = Math.max(1, 1 + Math.floor(.01 * (ah - 100)));
				hb.textContent = L(179, [ah, ce.cf.data[105].value, a0L, ef, ah - a0L])
			});
		return dU.db(new jH([a0F.button])), a0B(ce.cf.data[149].value, ce.cf.data[148].value), dU
	}()), dR))
}

function nh(a0M, a0N, a0O) {
	this.bF = 0, this.bG = 0, this.d = 0, this.an = 0, this.resize = function() {
		this.an = Math.min(v.w.a0P(a0O || .5) * a0M[1] * r.s, r.an - 2 * ak.gap), this.d = Math.min(this.an * (a0M[0] / a0M[1]), r.d - 2 * ak.gap), this.an = a0M[1] * this.d / a0M[0], this.bF = ak.gap + a0N[0] * (r.d - this.d - 2 * ak.gap), this
			.bG = ak.gap + a0N[1] * (r.an - this.an - 2 * ak.gap)
	}, this.a0Q = function() {
		return this.bF + .5 * this.d
	}
}

function wg() {
	pL = 0, a0V = 2048, pM = new Uint32Array(4 * a0V), a0W = 0, a0X = new Uint32Array(a0V), a0Y = new Uint8Array(ip.mg * ip.mj)
}

function a0a(player) {
	pO = player, a0Z = !1, a0b(), a0c();
	for (var aA = gD.gF(pO) - 1; 0 <= aA; aA--) 0 === gD.pw(pO, aA) && (a0R = aA, a0d());
	a0Z && a0e()
}

function a0e() {
	pS(), pY()
}

function a0d() {
	pi = gD.px(pO, a0R), a0S = gD.a0f(pO, a0R), a0T = gD.a0g(pO, a0R), a0h(), (0 !== pL && (a0j(), a0k()) ? a0l : a0i)()
}

function a0k() {
	if (!((a0U = bO.bP(a0S, pL)) > i.wH)) {
		if (!a0T) return !1;
		var a0m = pL * (1 + i.wH);
		a0S += v.fX.a0n(pO, a0m - a0S), a0U = bO.bP(a0S, pL)
	}
	return !0
}

function a0j() {
	for (var aA = pL - 1; 0 <= aA; aA--) a0Y[bO.bP(pM[aA], 4)] = 0
}

function a0i() {
	1 === gD.gF(pO) && we.a0o(pO);
	var a4 = v.fX.a0p(pO, a0S);
	cZ.a0q(pO, a0S - a4, 12), gD.a0r(pO, a0R)
}

function a0b() {
	for (var player = pO, pT = a5.pT, aH = Math.min(pT[player].length, a0V), aD = 0, a0s = a0X, aA = aH - 1; 0 <= aA; aA--) a0s[aD++] = pT[player][aA];
	a0W = aD
}

function a0c() {
	for (var aA = a5.pT[pO].length - 1; 0 <= aA; aA--) mr.pm(a5.pT[pO][aA]) && mr.pr(a5.pT[pO][aA], pO);
	a5.pT[pO] = []
}

function a0h() {
	pL = 0, (pi === i.df ? a0t : a0u)()
}

function a0u() {
	for (var aL, gn, aA, mq = mr.mq, gl = 3; 0 <= gl; gl--)
		for (aA = a0W - 1; 0 <= aA; aA--) aL = a0X[aA] + mq[gl], gn = bO.bP(aL, 4), 0 === a0Y[gn] && mr.pV(aL) && mr.pW(aL) === pi && (a0Y[gn] = 1, pM[pL++] = aL)
}

function a0t() {
	for (var aL, gn, aA, mq = mr.mq, gl = 3; 0 <= gl; gl--)
		for (aA = a0W - 1; 0 <= aA; aA--) aL = a0X[aA] + mq[gl], gn = bO.bP(aL, 4), 0 === a0Y[gn] && mr.pU(aL) && (a0Y[gn] = 1, pM[pL++] = aL)
}

function a0v() {
	var a0w, a0x, a0y;

	function a15(aA) {
		var button = a18.a0z[aA],
			bF = button.bF,
			bG = button.bG,
			d = button.d,
			an = button.an;
		aj.fillStyle = button.a12, aj.fillRect(bF, bG, d, an), aA === a0w && (aj.fillStyle = a0y, aj.fillRect(bF, bG, d, an)), aj.lineWidth = ak.h2, aj.strokeStyle = a0x, aj.strokeRect(bF, bG, d, an),
			function(button) {
				var bF = button.bF,
					bG = button.bG,
					d = button.d,
					an = button.an;
				v.w.textAlign(aj, 1), v.w.textBaseline(aj, 1), aj.font = button.font, aj.fillStyle = a0x, aj.fillText(button.eF, Math.floor(bF + d / 2), Math.floor(bG + an / 2 + .1 * button.fontSize))
			}(button)
	}
	this.d = 0, this.an = 0, this.bG = 0, this.gap = 0, this.h = function() {
		a0w = -1, a0x = t.u, a0y = "rgba(255,255,255,0.16)", this.a0z = new Array(7), this.an = Math.floor((n.o.p() ? .123 : .093) * r.s), this.d = Math.floor((n.o.p() ? 3.96 : 4.2) * this.an), this.gap = Math.floor(.025 * this.d);
		var a10 = Math.floor(.26 * this.an),
			a11 = v.w.ae(1, a10);
		this.a0z[0] = {
			bF: 0,
			bG: 0,
			d: Math.floor(.6 * this.d - this.gap / 2),
			an: this.an,
			eF: "Multiplayer",
			font: a11,
			a12: "rgba(22,88,22,0.8)",
			fontSize: a10
		}, a10 = Math.floor(.18 * this.an), a11 = v.w.ae(1, a10), this.a0z[1] = {
			bF: 0,
			bG: 0,
			d: this.d - this.a0z[0].d - this.gap,
			an: this.an,
			eF: "Single Player",
			font: a11,
			a12: "rgba(22,88,88,0.8)",
			fontSize: a10
		}, this.a0z[2] = {
			bF: 0,
			bG: 0,
			d: this.d,
			an: Math.floor(.3 * this.an),
			eF: "",
			font: this.a0z[1].font,
			a12: "rgba(100,0,0,0.8)",
			fontSize: this.a0z[1].fontSize
		}, this.a0z[3] = {
			bF: 0,
			bG: 0,
			d: this.d,
			an: this.an,
			eF: "Back",
			font: this.a0z[0].font,
			a12: "rgba(0,0,0,0.8)",
			fontSize: this.a0z[0].fontSize
		}, this.a0z[4] = {
			bF: 0,
			bG: 0,
			d: this.d,
			an: Math.floor(.3 * this.an),
			eF: "The game was updated!",
			font: this.a0z[1].font,
			a12: "rgba(100,0,0,0.8)",
			fontSize: this.a0z[1].fontSize
		}, this.a0z[5] = {
			bF: 0,
			bG: 0,
			d: this.a0z[0].d,
			an: Math.floor(.8 * this.an),
			eF: "Reload",
			font: this.a0z[0].font,
			a12: "rgba(0,100,0,0.8)",
			fontSize: this.a0z[0].fontSize
		}, this.a0z[6] = {
			bF: 0,
			bG: 0,
			d: this.a0z[1].d,
			an: this.a0z[5].an,
			eF: "Back",
			font: this.a0z[0].font,
			a12: "rgba(0,0,0,0.8)",
			fontSize: this.a0z[0].fontSize
		}, this.a13()
	}, this.a13 = function() {
		this.bG = Math.floor(.54 * r.an), this.a0z[0].bF = Math.floor(.5 * r.d - .5 * this.d), this.a0z[1].bF = this.a0z[0].bF + this.a0z[0].d + this.gap, this.a0z[2].bF = this.a0z[3].bF = this.a0z[0].bF, this.a0z[4].bF = this.a0z[5].bF = this
			.a0z[0].bF, this.a0z[6].bF = this.a0z[1].bF, this.a0z[0].bG = Math.floor(.54 * r.an), this.a0z[1].bG = this.a0z[0].bG, this.a0z[2].bG = Math.floor((r.an - this.a0z[2].an - this.a0z[3].an - this.gap) / 2), this.a0z[3].bG = this.a0z[2]
			.bG + this.a0z[2].an + this.gap, this.a0z[4].bG = Math.floor((r.an - this.a0z[4].an - this.a0z[5].an - this.gap) / 2), this.a0z[5].bG = this.a0z[6].bG = this.a0z[4].bG + this.a0z[4].an + this.gap
	}, this.a14 = function() {
		a15(0), a15(1)
	}, this.a16 = function() {
		a15(2), a15(3)
	}, this.a17 = function() {
		a15(4), a15(5), a15(6)
	}, this.hW = function(bF, bG, c5) {
		var aA = -1;
		return 0 === d0.d1() ? aA = this.hX(bF, bG, 0, 2) : 3 === d0.d1() ? aA = this.hX(bF, bG, 3, 1) : 5 === d0.d1() && (aA = this.hX(bF, bG, 5, 2)), a0w !== aA && (a0w = aA, c5) && (bl.c8 = !0), -1 !== aA && (o4.tT(), !0)
	}, this.hX = function(bF, bG, bf, size) {
		for (var aA = bf; aA < bf + size; aA++)
			if (bF >= this.a0z[aA].bF && bG >= this.a0z[aA].bG && bF <= this.a0z[aA].bF + this.a0z[aA].d && bG <= this.a0z[aA].bG + this.a0z[aA].an) return aA;
		return -1
	}
}

function a1A() {
	var a1B, a1C, a1D, a1E, a1F, a1G, a1H, a1I, a1J, a1K, a1L, yX, a1M, a1N = 1;

	function a1P(a1Q) {
		!a1Q && 1 === a1M && a1N ? (a1N = 0, ct.d4.close(a1M, 3280)) : a1M = (a1M + 1) % ct.d4.a1R, yX = bl.bk, ct.d4.yj(a1M, 4) && ct.a1S.iH(a1M)
	}

	function a1U() {
		if (0 !== a1M) return 1 === a1M && __fx.customLobby.isActive() ? (fC.a1W(3249), __fx.customLobby.setActive(!1)) : void a1P();
		fC.a1W(3249)
	}

	function a1d(bG, a1c, g0) {
		var jr = Math.floor((r.d - a1E) / 2) + a1H,
			oC = jr + Math.floor(g0 * (a1E - 2 * a1H));
		aj.lineWidth = a1c, aj.beginPath(), aj.moveTo(jr, bG), aj.lineTo(oC, bG), aj.lineTo(Math.floor(jr - a1H + g0 * a1E), bG + a1D), aj.lineTo(jr - a1H, bG + a1D), aj.closePath()
	}
	this.a1O = 1, this.h = function() {
		d0.setState(6), a1B = 0, a1C = 1, a1I = "rgba(0,220,120,0.4)", a1J = "rgba(0,0,0,0.8)", this.resize(), bl.c8 = !0, a1N = 1, a1M = this.a1O - 1, a1P(1)
	}, this.resize = function() {
		a1E = Math.floor((n.o.p() ? .5 : .25) * r.s), a1F = a1E + 12, a1D = Math.floor(.125 * a1E), a1H = 3 * a1D, a1G = Math.floor(.225 * a1E), a1L = Math.floor(.3 * a1D), a1K = v.w.ae(0, a1L)
	}, this.a1T = function(iI) {
		iI === a1M && a1U()
	}, this.hS = function(bF, bG) {
		var jr = Math.floor((r.d - a1F) / 2),
			h6 = Math.floor(.5 * (r.an - ak.gap - a1D - a1G)) + a1D + ak.gap;
		return jr < bF && bF < jr + a1F && h6 < bG && bG < h6 + a1G && (this.tq(), a18.hW(bF, bG, !1), !0)
	}, this.tq = function() {
		ct.d4.a1X(3260), __fx.customLobby.setActive(false), d2.d4.fI()
	}, this.a9 = function() {
		6 === d0.d1() && (bl.bk > yX + 12e3 && a1U(), 100 < (a1B += .07 * a1C * (a1B < 16 ? 5 + a1B : 84 < a1B ? 105 - a1B : 17)) ? (a1B = 100, a1C = -1) : a1B < 0 && (a1B = 0, a1C = 1), a1I = "rgba(0," + Math.floor(190 - 1.9 * a1B) + "," + Math
			.floor(120 - 1.2 * a1B) + "," + (.4 + .004 * a1B) + ")", a1J = "rgba(0," + Math.floor(1.9 * a1B) + "," + Math.floor(1.2 * a1B) + "," + (.8 - .004 * a1B) + ")", bl.c8 = !0)
	}, this.ai = function() {
		var bF = Math.floor((r.d - a1F) / 2),
			bG = Math.floor(.5 * (r.an - ak.gap - a1D - a1G));
		! function(title, bG, a1c, g0) {
			aj.fillStyle = a1J, a1d(bG, a1c, 1), aj.fill(), aj.fillStyle = a1I, a1d(bG, a1c, g0), aj.fill(), aj.strokeStyle = t.u, a1d(bG, a1c, 1), aj.stroke(),
				function(a1f, bG) {
					v.w.textAlign(aj, 1), v.w.textBaseline(aj, 1), aj.font = a1K, aj.fillStyle = t.u, aj.fillText(a1f, Math.floor(.5 * r.d), Math.floor(bG + .58 * a1D))
				}(title, bG)
		}(L(180), bG, 3, a1B / 100),
		function(bF, bG, d, an, eF) {
			aj.fillStyle = t.a1b, aj.fillRect(bF, bG, d, an), aj.lineWidth = 3, aj.strokeStyle = t.u, aj.strokeRect(bF, bG, d, an);
			var aH = Math.floor(.3 * an);
			v.w.textAlign(aj, 1), v.w.textBaseline(aj, 1), aj.font = v.w.ae(0, aH), aj.fillStyle = t.u, aj.fillText(eF, Math.floor(bF + d / 2), Math.floor(bG + an / 2 + .1 * aH))
		}(bF, bG + a1D + ak.gap, a1F, a1G, L(1))
	}
}

function a1g() {
	var dA, dB, dC;

	function dG() {
		dK(), 3 !== i.data.botDifficultyType || v.cj.dO(i.data.botDifficultyData) || (i.data.botDifficultyType = 0), 3 !== i.data.botDifficultyType && (i.data.botDifficultyData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		3 === i.data.botDifficultyType && v.cj.a1h(dC.dQ(), i.data.botDifficultyData, cX.jP.length - 1)
	}

	function a1i(dR, bm) {
		var dU = new dV,
			value = (dU.dW(bm < 0 ? L(17) : L(100) + " " + a1.kg[bm % 9]), 0 <= bm && (dU.he(L(13) + ": " + i.data.teamPlayerCount[bm]).style.marginBottom = "1em"), bm < 0 ? i.data.botDifficultyValue : i.data.botDifficultyTeam[bm]);
		dU.dX(new dY({
			dZ: cX.jP,
			value: value
		}, function(gp) {
			bm < 0 ? i.data.botDifficultyValue = gp : i.data.botDifficultyTeam[bm] = gp
		})), dR.push(dU)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(17), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, function() {
		var dR = [];
		if (function(dR) {
				var dU = new dV,
					dZ = (dU.dW(L(2)), [L(18), L(19), L(20), L(5)]),
					value = i.data.botDifficultyType;
				0 === i.data.gameMode && (value = Math.min(value, 2), dZ.splice(2, 1));
				dU.dX(new dY({
					dZ: dZ,
					value: value
				}, function(bm) {
					dK(), i.data.botDifficultyType = bm, 0 === i.data.gameMode && 2 === bm && (i.data.botDifficultyType = 3), 3 !== i.data.botDifficultyType || i.data.botDifficultyData || (i.data.botDifficultyData =
						new Uint8Array(i.df)), 2 !== i.data.botDifficultyType || i.data.botDifficultyTeam || (i.data.botDifficultyTeam = new Uint8Array(9)), d2.da(25)
				})), dR.push(dU)
			}(dR), 0 === i.data.botDifficultyType) a1i(dR, -1);
		else if (2 === i.data.botDifficultyType)
			for (var aA = 0; aA < i.data.teamPlayerCount.length; aA++) i.data.teamPlayerCount[aA] && a1i(dR, aA);
		else 3 === i.data.botDifficultyType && ! function(dR) {
			var dU = new dV;
			dU.dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.botDifficultyData, 8)), dU.db(dC), dR.push(dU)
		}(dR);
		return dR
	}())
}

function jH(a1j) {
	var hZ = document.createElement("div");
	this.f6 = hZ, this.a1k = a1j, this.resize = function() {
		for (var aH = a1j.length, aA = 1; aA < aH; aA++) v.w.mU(a1j[aA], 4)
	};
	var aA, aH = a1j.length;
	for (hZ.style.width = "100%", hZ.style.height = "2.7em", hZ.style.marginTop = "0.6em", hZ.style.border = "inherit", aA = 0; aA < aH; aA++) a1j[aA].style.verticalAlign = "top", a1j[aA].style.width = (100 / aH).toFixed(2) + "%", a1j[aA].style
		.height = "100%", a1j[aA].style.fontSize = "0.75em", hZ.appendChild(a1j[aA])
}

function a1l() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 !== i.data.spawningType || v.cj.dO(i.data.spawningData) || (i.data.spawningType = 0), 2 !== i.data.spawningType && (i.data.spawningData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.spawningType && v.cj.a1h(dC.dQ(), i.data.spawningData, ip.a1m - 1)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(181), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV,
			dZ = (dU.dW(L(2)), [L(16), L(21), L(5)]),
			value = i.data.spawningType;
		0 === i.data.gameMode && (dZ.splice(1, 1), 0 < value) && (value = 1);
		dU.dX(new dY({
			dZ: dZ,
			value: value
		}, function(bm) {
			dK(), i.data.spawningType = bm, 0 === i.data.gameMode && 1 === bm && (i.data.spawningType = 2), 2 !== i.data.spawningType || i.data.spawningData || (i.data.spawningData = new Uint16Array(2 * i.df)), d2.da(24)
		})), dU.db(new dc), dU.db(new dd({
			value: i.data.selectableSpawn
		}, L(182), function(value) {
			i.data.selectableSpawn = value
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU = new dV;
		dU.dW("Seed"), dU.db(new jI({
			bm: -1,
			value: i.data.spawningSeed
		}, 1, 0, function(f6) {
			var value = Math.abs(Math.floor(f6.target.value)) % 16384;
			f6.target.value = i.data.spawningSeed = value
		})), dR.push(dU)
	}(dR), function(dR) {
		var dU;
		2 === i.data.spawningType && ((dU = new dV).dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.spawningData, 2)), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function a1o() {
	this.a1p = function(iI, a1q) {
		iJ.b0(8), iJ.fO(1, 0), iJ.fO(6, 4), iJ.fO(1, a1q ? 1 : 0), ct.d4.send(iI, iJ.bt)
	}, this.a1r = function() {
		iJ.b0(58), iJ.fO(1, 0), iJ.fO(6, 5), iJ.fO(8, ct.d4.iP), iJ.fO(10, a1s.yH), iJ.fO(9, a1s.a1t), iJ.fO(10, f9.fm), iJ.fO(14, f9.fh), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a1u = function(oh) {
		iJ.b0(27), iJ.fO(1, 1), iJ.fO(4, 0), iJ.fO(22, oh), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a1v = function(gI, gH) {
		iJ.b0(25), iJ.fO(1, 1), iJ.fO(4, 1), iJ.fO(10, gI), iJ.fO(10, gH), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a1w = function(gI, a1x) {
		iJ.b0(24), iJ.fO(1, 1), iJ.fO(4, 2), iJ.fO(10, gI), iJ.fO(9, a1x), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a1y = function(gI, oh) {
		iJ.b0(37), iJ.fO(1, 1), iJ.fO(4, 3), iJ.fO(10, gI), iJ.fO(22, oh), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a1z = function(rn, oh) {
		iJ.b0(37), iJ.fO(1, 1), iJ.fO(4, 4), iJ.fO(10, rn), iJ.fO(22, oh), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a20 = function(gH) {
		iJ.b0(15), iJ.fO(1, 1), iJ.fO(4, 5), iJ.fO(10, gH), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a21 = function(bm) {
		iJ.b0(15), iJ.fO(1, 1), iJ.fO(4, 6), iJ.fO(10, bm), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a22 = function(a23) {
		iJ.b0(6), iJ.fO(1, 1), iJ.fO(4, 7), iJ.fO(1, a23), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a24 = function() {
		iJ.b0(5), iJ.fO(1, 1), iJ.fO(4, 8), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a25 = function(gI, oh, gH) {
		iJ.b0(47), iJ.fO(1, 1), iJ.fO(4, 10), iJ.fO(10, gI), iJ.fO(10, gH), iJ.fO(22, oh), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a26 = function(a27, a28) {
		iJ.b0(24), iJ.fO(1, 1), iJ.fO(4, 15), iJ.fO(9, a28), iJ.fO(10, a27), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a29 = function(sI) {
		iJ.b0(14), iJ.fO(1, 1), iJ.fO(4, 14), iJ.fO(9, sI), ct.d4.send(ct.d4.nH, iJ.bt)
	}, this.a2A = function(a2B, target) {
		var aA, aH = a2B.length;
		for (iJ.b0(14 + 9 * aH), iJ.fO(1, 1), iJ.fO(4, 13), iJ.fO(9, target), aA = 0; aA < aH; aA++) iJ.fO(9, a2B[aA]);
		ct.d4.send(ct.d4.nH, iJ.bt)
	}
}

function a2C(a2D, a2E) {
	var a2L, self, a2F = document.createElement("div"),
		a2G = document.createElement("div"),
		a2H = document.createElement("div"),
		a2I = null,
		a2M = (this.nd = new jI({
			value: "",
			bm: -1
		}, 0, a2J, function(f6) {
			f6.target.value = v.dh.lT(f6.target.value), a2I.a2T.textContent = 127 - f6.target.value.length
		}), 0),
		a2N = 1,
		a2O = 0,
		a2P = 1048575;

	function a2J() {
		a2D(), a2I.a2T.textContent = 127
	}

	function a2W(a2V, eW) {
		eW && (eW.eH = 1, a2V.appendChild(eT.en.transform(eW)))
	}

	function a2X(sn) {
		a2N ? a2F.scrollTop = a2F.scrollHeight : sn && (a2F.scrollTop = a2O)
	}
	this.tT = function(a2U) {
			a2P = 1048575, a2G.textContent = "", a2U || this.aP()
		}, this.aP = function() {
			var eL = eT.d4.fo[0],
				eL = eT.d4.ej[eL],
				el = eL.el,
				aH = el.length,
				l8 = 1048575 === a2P ? 0 : aH - (eL.yL - a2P + 1048575) % 1048575;
			if (a2P = eL.yL, !(aH <= (l8 = Math.max(l8, 0)))) {
				for (var a2V = document.createDocumentFragment(), aA = l8; aA < aH; aA++) a2W(a2V, eT.w9.eE(el[aA], eT.w9.e1(el[aA])));
				a2G.appendChild(a2V), a2X()
			}
		}, this.a2Y = function(e8) {
			var a2V = document.createDocumentFragment();
			a2W(a2V, e8), a2G.appendChild(a2V), a2X()
		}, this.show = function(a2Z) {
			a2Z.appendChild(a2F), a2Z.appendChild(a2H), this.resize(a2Z)
		}, this.dj = function(a2Z) {
			a2Z.removeChild(a2F), a2Z.removeChild(a2H)
		}, this.resize = function(a2Z) {
			a2M = a2Z ? a2Z.offsetHeight : a2M;
			var a2Z = v.w.mV(.04, .75),
				gx = Math.max(a2Z, a2M - a2Z),
				a2b = r.d / r.f8,
				o0 = .7 * a2b,
				gx = (a2H.style.top = v.w.y1(a2M - a2Z), a2H.style.height = v.w.y1(a2Z), a2F.style.top = v.w.y1(a2M - a2Z - gx), a2F.style.height = v.w.y1(gx), v.w.mU(a2F, 2), this.nd.f6.style.width = v.w.y1(o0), this.nd.f6.style.fontSize = a2L
					.button.style.fontSize = v.w.y1(.5 * a2Z), v.w.mU(this.nd.f6, 6), a2L.button.style.left = v.w.y1(o0), a2L.button.style.width = v.w.y1(a2b - o0), .385 * a2Z);
			n.o.p() && (gx *= .8 - .12 * (r.d > r.an)), a2G.style.marginLeft = a2G.style.marginRight = v.w.y1(.5 * gx), a2G.style.fontSize = v.w.y1(gx), a2X(1)
		}, (self = this).nd.f6.a2Q = 127, a2F.style.position = "absolute", a2F.style.top = "0", a2F.style.left = "0", a2F.style.width = "100%", a2F.style.overflowX = "hidden", a2F.style.overflowY = "auto", a2F.style.font = "inherit", a2F.style
		.backgroundColor = t.k7, a2F.addEventListener("scroll", function() {
			a2O = a2F.scrollTop, a2N = a2O < a2F.scrollHeight - a2F.clientHeight - 2 ? 0 : 1
		}), a2G.style.font = "inherit", a2H.style.position = "absolute", a2H.style.left = "0", a2H.style.width = "100%", self.nd.f6.setAttribute("placeholder", L(183)), self.nd.f6.style.position = "absolute", self.nd.f6.style.top = "0", self.nd.f6
		.style.left = "0", self.nd.f6.style.height = "100%", self.nd.f6.style.backgroundColor = t.a1b, self.nd.f6.style.textAlign = "center", (a2L = new dF(L(177), a2J)).button.top = "0", a2L.button.style.position = "absolute", a2L.button.style
		.height = "100%", a2L.ns(t.a2R), a2I = new a2S("127", a2L.button, 1, 1), a2F.appendChild(a2G), a2H.appendChild(self.nd.f6), a2H.appendChild(a2L.button)
}

function a2d() {
	this.a2e = function(iI) {
		var n9, n8;
		jX.jh(70) ? (n9 = jX.jb(3), n8 = zb.a2f.a9(jX.jb(30), jX.jb(30)), ct.cu.n7(iI, n8, n9), 0 < n9 || (0 === iI && 0 === ce.cf.data[105].value.length ? ct.cu.nA(0) : ct.yt.a2g(iI), 4 === ct.d4.a2h(iI).a2i() ? 6 === d0.d1() && ct.a1S.iH(iI) :
			5 !== ct.d4.a2h(iI).a2i() || 8 !== d0.d1() && 10 !== d0.d1() || ct.sH.a1r())) : ct.d4.jZ(iI, 3269)
	}, this.a2j = function(iI) {
		var id = jX.jb(6);
		1 === id ? (ce.cx.cy(160, jX.jb(30)), ct.d4.a2k(iI), o4.a2l || ct.cu.nA(1), cg.cr(), 8 === d2.d3 && d2.jf().yx()) : 21 === id ? 8 === d2.d3 && d2.jf().jg(17) : 22 === id && (ce.cx.cy(106, ce.cf.data[110].value), ce.cx.cy(110, ""), 8 ===
			d2.d3) && d2.jf().jg(15)
	}, this.a2m = function() {
		var aH = jX.jb(16),
			a2n = jX.jb(16);
		if (jX.jh(55 + 10 * aH + 16 * a2n)) {
			for (var bW = [], aA = 0; aA < aH; aA++) bW.push(jc.ji.jj(jX.jb(10)));
			cg.cw(bW)
		} else ct.d4.jZ(0, 3270)
	}
}

function a2o() {
	var an, canvas, qH, a2p, a2q, a2r = -1;

	function a2s() {
		var a2t, f = canvas.getContext("2d", {
			alpha: !0
		});
		f.clearRect(0, 0, an, an), f.fillStyle = t.mQ, f.fillRect(0, 0, an, an), 0 === a2p && (f.fillStyle = t.a2u, f.fillRect(0, 0, an, an)), f.fillStyle = t.u, f.fillRect(0, 0, an, 1), f.fillRect(0, 0, 1, an), f.fillRect(0, an - 1, an, 1), f
			.fillRect(an - 1, 0, 1, an), a2t = .9 * an / k9.get(0).width, f.imageSmoothingEnabled = !0, f.setTransform(a2t, 0, 0, a2t, Math.floor((an - a2t * k9.get(0).width) / 2), Math.floor((an - a2t * k9.get(0).height) / 2)), f.drawImage(k9.get(
				0), 0, 0), f.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2w(hT, hU) {
		if (!mI.mJ) return hT <= an + ak.gap && hU >= qX.bG ? 9 : -1;
		if (hT <= 4 * an + ak.gap) {
			if (hU >= qX.bG) return 0;
			if (hU >= qX.bG - an - a2q * ak.gap) return 2
		} else if (hT <= 7 * an + ak.gap && hU >= qX.bG - an - a2q * ak.gap) return 1;
		return -1
	}
	this.mJ = !1, this.h = function() {
		a2p = -1, this.mJ = !1, a2q = n.o.p() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		an = qX.an, (canvas = document.createElement("canvas")).width = an, canvas.height = an, qH = v.w.ae(1, (n.o.p() ? .5 : .45) * an), a2s()
	}, this.tk = function() {
		this.mJ = !this.mJ, this.mJ ? (hy.tj(!1), i.i0 && hy.wv && hy.tl(!0), this.a2v()) : (a2p = -1, a2s(), !i.kq || 1 !== i.bw || i.bu || i.i0 || n.o.setState(1)), bl.c8 = !0
	}, this.a2v = function() {
		(i.kq || i.i0) && 1 === i.bw && (hx.c5(!0), i.bu || setTimeout(function() {
			c6.i3()
		}, 0), n.o.setState(0))
	}, this.hS = function(hT, hU) {
		return 0 <= (a2r = a2w(hT, hU)) || !mI.mJ || i.kq || i.i0 || cY.jq || mI.tk(), a2r
	}, this.hW = function(hT, hU) {
		hT = a2w(hT, hU);
		hT !== a2p && (a2p = hT, this.mJ || a2s(), bl.c8 = !0)
	}, this.t2 = function(hT, hU) {
		hT = a2w(hT, hU);
		return -1 !== hT && a2r === hT && (this.mJ ? i.q ? (0 <= hT && hy.tj(!1), !i.i0) : (0 === hT ? i.wn() : 1 === hT ? this.tk() : 2 === hT && d2.da(1, 0), !0) : 9 === hT && (this.tk(), !0))
	}, this.ai = function() {
		var d;
		this.mJ ? (d = Math.floor(5.5 * an), aj.setTransform(1, 0, 0, 1, ak.gap, qX.bG), aj.fillStyle = t.mQ, aj.fillRect(0, 0, d, an), 0 === a2p ? (aj.fillStyle = t.a2u, aj.fillRect(0, 0, 4 * an, an)) : 1 === a2p && (aj.fillStyle = t.a2u, aj
				.fillRect(4 * an, 0, Math.floor(1.5 * an), an)), aj.fillStyle = t.u, aj.fillRect(0, 0, d, 1), aj.fillRect(0, 0, 1, an), aj.fillRect(4 * an, 0, 1, an), aj.fillRect(0, an - 1, d, 1), aj.fillRect(d - 1, 0, 1, an), aj.font = qH, v
			.w.textBaseline(aj, 1), v.w.textAlign(aj, 1), aj.fillText(L(184), 2 * an, .54 * an), d = .4 * an, mI.hB(ak.gap + 4 * an + (1.5 * an - d) / 2, qX.bG + .3 * an, d), d = 1, aj.setTransform(1, 0, 0, 1, ak.gap, qX.bG - d * a2q * ak
				.gap - d * an), aj.fillStyle = t.mQ, aj.fillRect(0, 0, 4 * an, an), a2p === d + 1 && (aj.fillStyle = t.a2u, aj.fillRect(0, 0, 4 * an, an)), aj.fillStyle = t.u, aj.fillRect(0, 0, 4 * an, 1), aj.fillRect(0, 0, 1, an), aj
			.fillRect(4 * an, 0, 1, an), aj.fillRect(0, an - 1, 4 * an, 1), aj.fillText(L(0 === d ? 184 : 185), 2 * an, .54 * an), aj.setTransform(1, 0, 0, 1, 0, 0)) : aj.drawImage(canvas, ak.gap, qX.bG)
	}, this.a30 = function(player) {
		return 0 !== a5.gB[player] && 2 !== i.bw && !v.fX.fY(player)
	}, this.hB = function(bF, bG, aH) {
		aj.setTransform(1, 0, 0, 1, bF, bG), aj.lineWidth = ak.h2, aj.strokeStyle = t.u, aj.beginPath(), aj.moveTo(0, 0), aj.lineTo(aH, aH), aj.moveTo(0, aH), aj.lineTo(aH, 0), aj.stroke()
	}
}

function a32(a33) {
	var mL = document.createElement("div");

	function a35() {
		p5.p6() || (mL.style.backgroundColor = v.color.a36(t.mQ, 50))
	}

	function a34() {
		mL.style.backgroundColor = t.mQ
	}
	this.cy = function(yM) {
			mL.textContent = yM
		}, this.show = function() {
			document.body.appendChild(mL)
		}, this.resize = function() {
			var an = v.w.mV(.03, .5);
			mL.style.width = 2 * an + "px", mL.style.height = an + "px", mL.style.font = v.w.ae(1, .75 * an), v.w.mU(mL, 4), v.w.mU(mL, 2)
		}, this.zF = function() {
			mL.onclick = null, mL.onmouseover = null, mL.onmouseout = null, document.body.removeChild(mL), mL = null
		}, mL.style.position = "absolute", a34(), mL.style.color = t.u, mL.style.zIndex = "3", mL.style.right = "0", mL.style.top = "0", mL.style.display = "flex", mL.style.justifyContent = "center", mL.style.alignItems = "center", mL.style
		.userSelect = "none", mL.style.outline = "none", mL.onclick = a33, mL.onmouseover = a35, mL.onmouseout = a34
}

function a37() {
	var aR = v.color;
	this.kb = aR.gs(0, 0, 0), this.a38 = aR.a39(0, 0, 0, .7), this.a1b = aR.a39(0, 0, 0, .5), this.mQ = aR.a39(0, 0, 0, .85), this.ac = aR.a39(0, 0, 0, .75), this.k7 = aR.a39(0, 0, 0, .6), this.a3A = aR.a39(0, 0, 0, .35), this.u = aR.gs(255, 255,
			255), this.a2u = aR.a39(255, 255, 255, .3), this.a3B = aR.a39(255, 255, 255, .6), this.a3C = aR.a39(255, 255, 255, .4), this.a3D = aR.a39(255, 255, 255, .25), this.a3E = aR.a39(255, 255, 255, .85), this.a3F = aR.a39(255, 255, 255, .75),
		this.a3G = aR.a39(255, 255, 255, .15), this.a3H = aR.a39(255, 255, 255, .11), this.a3I = aR.gs(128, 128, 128), this.a3J = aR.a39(64, 64, 64, .75), this.a3K = aR.a39(88, 88, 88, .83), this.a3L = aR.a39(60, 60, 60, .85), this.nm = aR.a39(80,
			60, 60, .85), this.dq = aR.gs(170, 170, 170), this.dr = aR.gs(200, 235, 245), this.a3M = aR.gs(30, 255, 30), this.a3N = aR.gs(0, 200, 0), this.a3O = aR.gs(128, 255, 128), this.a3P = aR.a39(10, 65, 10, .75), this.vc = aR.a39(0, 255, 0,
		.6), this.a3Q = aR.a39(0, 255, 0, .5), this.a3R = aR.a39(0, 200, 0, .5), this.rX = aR.a39(0, 100, 0, .75), this.a3S = aR.a39(0, 60, 0, .8), this.a3T = aR.a39(0, 255, 0, .3), this.k6 = aR.a39(0, 180, 0, .6), this.a3U = aR.a39(0, 120, 0, .85),
		this.a3V = aR.gs(0, 120, 0), this.nj = aR.a39(0, 70, 0, .85), this.a3W = aR.gs(190, 230, 190), this.du = aR.gs(0, 255, 0), this.a3X = aR.gs(255, 120, 120), this.a3Y = aR.gs(255, 160, 160), this.vF = aR.gs(255, 70, 70), this.a3Z = aR.gs(230,
			0, 0), this.a3a = aR.a39(220, 0, 0, .6), this.a3b = aR.a39(255, 100, 100, .8), this.s3 = aR.a39(100, 0, 0, .85), this.a3c = aR.a39(60, 0, 0, .85), this.a3d = aR.a39(200, 0, 0, .6), this.uH = aR.a39(120, 0, 0, .85), this.rw = aR.gs(255,
			70, 10), this.eJ = aR.gs(230, 190, 190), this.ds = aR.gs(255, 0, 0), this.dt = aR.gs(255, 0, 255), this.a3e = aR.a39(60, 0, 60, .85), this.nk = aR.a39(0, 60, 60, .85), this.a3f = aR.a39(10, 60, 60, .9), this.a3g = aR.a39(0, 96, 96, .75),
		this.dv = aR.gs(0, 255, 255), this.a3h = aR.gs(160, 160, 255), this.a3i = aR.a39(0, 40, 90, .75), this.a3j = aR.a39(0, 0, 255, .6), this.a3k = aR.gs(200, 200, 255), this.vg = aR.gs(255, 120, 100), this.a3l = aR.a39(255, 255, 0, .5), this
		.a3m = aR.a39(255, 255, 150, .2), this.dx = aR.gs(255, 255, 0), this.s1 = aR.gs(255, 255, 200), this.a3n = aR.a39(200, 200, 0, .6), this.a3o = aR.a39(140, 120, 0, .75), this.a3p = aR.a39(180, 160, 40, .75), this.nl = aR.a39(70, 50, 20, .85),
		this.a3q = aR.a39(30, 30, 0, .85), this.a3r = aR.a39(60, 60, 0, .85), this.qK = aR.a39(255, 140, 0, .75), this.a3s = aR.a39(70, 40, 0, .85), this.dw = aR.gs(220, 120, 0), this.a3t = aR.a39(255, 200, 80, .85), this.dy = aR.gs(255, 150, 120),
		this.a3u = aR.a39(0, 0, 0, 0), this.a2R = aR.a39(255, 255, 255, 0), this.a3v = aR.a39(254, 254, 254, 0)
}

function a3w() {
	var a3x;

	function a4A(jG, ig, bF, bG, globalAlpha) {
		ip.om.save(), ip.om.globalAlpha = globalAlpha, ip.om.imageSmoothingEnabled = !1, ip.om.scale(ig, ig), ip.om.drawImage(jG, Math.floor(bF * (ip.mg / ig - jG.width)), Math.floor(bG * (ip.mj / ig - jG.height))), ip.om.restore()
	}
	this.sk = 0, this.sl = 0, this.sm = 0, this.ml = 0, this.h = function() {
		(a3x = new Array(ip.nU))[0] = {
			d: [0, 5e3, 8e3, 1e4],
			aS: [220, 250, 255, 220],
			lE: [190, 220, 0, 0],
			cq: [170, 200, 0, 0]
		}, a3x[1] = {
			d: [0, 4e3, 5e3, 6e3, 1e4],
			aS: [25, 0, 100, 0, 25],
			lE: [25, 0, 0, 0, 25],
			cq: [25, 0, 0, 0, 25]
		}, a3x[2] = {
			d: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			aS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			lE: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cq: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a3x[3] = {
			d: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			aS: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			lE: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			cq: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, a3x[4] = {
			d: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			aS: [10, 10, 20, 10, 10, 170, 212],
			lE: [20, 20, 60, 100, 100, 110, 170],
			cq: [70, 70, 160, 30, 30, 60, 120]
		}, a3x[5] = {
			d: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			aS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			lE: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cq: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a3x[6] = {
			d: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			aS: [10, 10, 60, 255, 255, 200, 200],
			lE: [10, 10, 60, 255, 255, 200, 200],
			cq: [80, 80, 255, 255, 255, 200, 200]
		}, a3x[7] = {
			d: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			aS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			lE: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cq: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a3x[8] = {
			d: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			aS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			lE: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cq: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a3x[9] = {
			d: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			aS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			lE: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cq: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a3x[20] = {
			d: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			aS: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			lE: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			cq: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, a3x[21] = {
			d: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			aS: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			lE: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			cq: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.a3y = function() {
		var a49, aA, ee, mb, ic = function() {
				var ic;
				return ip.iq = document.createElement("canvas"), ip.iq.width = ip.mg, ip.iq.height = ip.mj, ip.om = ip.iq.getContext("2d", {
					alpha: !1
				}), ic = ip.om.getImageData(0, 0, ip.mg, ip.mj), ip.mf = ic.data, ic
			}(),
			d = a3x[ip.oY].d,
			aS = a3x[ip.oY].aS,
			lE = a3x[ip.oY].lE,
			cq = a3x[ip.oY].cq,
			ah = oW.b6(),
			aH = d.length - 2,
			a44 = new Array(1 + aH),
			a45 = new Array(1 + aH),
			a46 = new Array(1 + aH),
			a47 = new Array(1 + aH);
		for (ee = aH; 0 <= ee; ee--) a44[ee] = d[ee + 1] - d[ee], a45[ee] = aS[ee + 1] - aS[ee], a46[ee] = lE[ee + 1] - lE[ee], a47[ee] = cq[ee + 1] - cq[ee];
		for (aA = ip.mg * ip.mj - 1; 0 <= aA; aA--)
			for (ee = aH; 0 <= ee; ee--)
				if (ah[aA] >= d[ee]) {
					mb = ah[aA] - d[ee], ip.mf[4 * aA] = aS[ee] + xk(a45[ee] * mb, a44[ee]), ip.mf[4 * aA + 1] = lE[ee] + xk(a46[ee] * mb, a44[ee]), ip.mf[4 * aA + 2] = cq[ee] + xk(a47[ee] * mb, a44[ee]), ip.mf[4 * aA + 3] = 255;
					break
				} ip.om.putImageData(ic, 0, 0), ip.a41(ip.oY) && k9.nn() && ip.a41(ip.oY) && (ic = k9.o7("arena"), a49 = k9.o7("territorial.io"), a4A(ic, 5, .5, .5, .1), a4A(a49, 2, .5, .45, .1)), ip.a43 = !0, bl.c8 = !0
	}, this.wV = function() {
		for (var aL, bF, bG, mh, mi, a4B, sl = 0, d = ip.mg, an = ip.mj, mb = d * an * 4, mc = md, me = ip.mf, aA = d - 1; 0 <= aA; aA--) mc[(aL = aA << 2) + 2] = mc[mb - aL - 2] = 3;
		for (mb = 4 * d, aA = an - 1; 0 <= aA; aA--) mc[(aL = aA * mb) + 2] = mc[aL + mb - 2] = 3;
		for (mh = d - 1, mi = an - 1, bG = 1; bG < mi; bG++)
			for (mb = bG * d, bF = 1; bF < mh; bF++) a4B = 1 - (me[(aL = mb + bF << 2) + 2] > me[aL + 1] && me[aL + 2] > me[aL]), mc[aL + 2] = 6 - 5 * a4B, sl += a4B;
		this.sk = (d - 2) * (an - 2), this.ml = 0, ip.x1(ip.oY) && (ip.ml.ma(), ip.ml.mm(4, 5)), this.sl = i.vT = sl - this.ml, this.sm = this.sk - this.sl - this.ml, this.sm && ip.ml.mm(6, 2)
	}
}

function a4C() {
	var size, a4D;
	this.h = function() {
		size = i.uO, a4D = new Uint16Array(i.df);
		for (var fd = i.fd, aA = i.uO - 1; 0 <= aA; aA--) a4D[aA] = fd + aA
	}, this.a9 = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === a5.gB[a4D[aA]]) {
				ee = void 0;
				var ee = aA;
				size--, a4D[ee] = a4D[size]
			} else cX.a9(a4D[aA])
	}, this.za = function(aL) {
		a4D[size++] = aL
	}
}

function f1() {
	function a4P() {
		var lE;
		return 8 === i.ko ? 0 : (lE = Math.floor(a5.fU[i.gC] / 50), (lE = Math.min(lE, 400)) / 100)
	}

	function a4I() {
		var lE = a4P();
		0 !== lE && hu.ro(440, L(186, [lE.toFixed(2)]), 40, 0, t.a3O, t.ac, -1, !1)
	}
	this.a9 = function() {
		var a4J;
		0 === hr.result.a4G || 0 === hr.result.a4H.length || 8 === i.ko ? v.fX.pH(i.gC) && a4I() : (function(a4J) {
			7 !== i.ko && 10 !== i.ko || 0 !== i.ht && hu.ro(600, L(190, [a4J.toFixed(2)]), 40, 0, t.u, t.ac, -1, !1)
		}(a4J = function() {
			hu.ro(520, L(187), 40, 0, t.u, t.ac, -1, !1);
			for (var a4H = hr.result.a4H, aH = a4H.length, a6 = a5.a6, bW = [], aA = 0; aA < aH; aA++) {
				var aL = a4H[aA];
				bW.push({
					aL: aL,
					a4: a6[aL]
				})
			}
			bW.sort((ee, cq) => cq.a4 - ee.a4);
			var kg = a5.r3,
				a4 = hr.result.a4Q,
				lE = hr.result.a4G,
				ef = "",
				a4J = 0;
			for (aA = 0; aA < aH; aA++) {
				var a4S = bW[aA].a4 * lE / (100 * a4),
					a4T = kg[bW[aA].aL] + ": " + a4S.toFixed(2) + "   ";
				bW[aA].aL === i.gC && (a4J = a4S), 2 < aA && 4 !== aH ? 3 === aA && (ef += "(" + L(188, [aH - 3]) + ")") : ef += a4T
			}
			hu.ro(560, v.dh.lg(ef), 40, 0, t.a3O, t.ac, -1, !1), a4J ? hu.ro(580, L(189, [a4J.toFixed(2) + " + " + a4P().toFixed(2)]), 40, 0, t.a3O, t.ac, -1, !1) : v.fX.pH(i.gC) && a4I();
			return a4J
		}()), 2 === i.hk || 7 <= i.ko || function(a4J) {
			var a4H = hr.result.a4H,
				aH = a4H.length,
				lK = a5.lK,
				a6 = a5.a6,
				eb = [];
			loop: for (var aA = 0; aA < aH; aA++) {
				var aL = a4H[aA],
					ec = v.dh.ed(lK[aL]);
				if (null !== ec) {
					for (var e9 = a6[aL], cq = eb.length - 1; 0 <= cq; cq--)
						if (ec === eb[cq].name) {
							eb[cq].a4 += e9, eb[cq].bW.push({
								aL: aL,
								a4: e9
							});
							continue loop
						} eb.push({
						name: ec,
						a4: e9,
						bW: [{
							aL: aL,
							a4: e9
						}]
					})
				}
			}
			if (0 !== eb.length) {
				eb.sort((ee, cq) => cq.a4 - ee.a4);
				var bW = eb[0].bW,
					a4U = (bW.sort((ee, cq) => cq.a4 - ee.a4), "[" + eb[0].name + "]"),
					a4V = 512 * hr.result.a4G / 26214400,
					cn = (hu.ro(0, L(191, [a4U, a4V.toFixed(4)]), 40, 0, t.u, t.ac, -1, !1), bW.length),
					a4W = eb[0].a4,
					a4X = 1e4 * a4V;
				for (aA = 0; aA < cn; aA++)
					if (bW[aA].aL === i.gC) {
						hu.ro(600, L(192, [(a4X * bW[aA].a4 / (10 * a4W)).toFixed(2)]), 40, 0, t.u, t.ac, -1, !1), hu.ro(640, L(193, [(.2 * a4J).toFixed(2), a4U]), 40, 0, t.u, t.ac, -1, !1);
						break
					} i.i0 || hu.ro(720, L(194) + kH.a4Y, 736, 0, t.u, t.a3S, -1, !1)
			}
		}(a4J))
	}, this.zd = function() {
		var a4N, a4O;
		i.kq || (a4N = a5, a4O = i.gC, 0 === a4N.fc[a4O]) || a4N.fb[a4O] < 1 || 2 * a4N.fZ[a4O] > 3 * (a4N.fa[a4O] + a4N.fb[a4O]) || a4I()
	}
}

function a4Z() {
	var dA, a2N = !0;

	function a2W(a2V, a4e) {
		var hZ = document.createElement("div"),
			a4f = document.createElement("span"),
			a4g = document.createElement("span");
		a4f.textContent = c0.vh(a4e.bk) + ":", a4f.style.color = t.dr, a4f.style.paddingRight = "0.4em", a4f.style.display = "table-cell", a4f.style.width = "6ch", a4f.style.textAlign = "end", hZ.appendChild(a4f), a4g.textContent = a4e.ef, hZ
			.appendChild(a4g), hZ.style.display = "table", a4e.kJ && function(hZ, kJ) {
				{
					var a4i;
					kJ >= 1024 - kA.en.kB ? ((a4i = document.createElement("img")).src = kA.pE.jv[kJ - 1024 + kA.en.kB].toDataURL(), a4i.style.width = "1.5em", a4i.style.height = "1.5em", a4i.style.verticalAlign = "middle", hZ.appendChild(a4i)) : ((
						a4i = document.createElement("span")).textContent = kA.en.kW(kJ), a4i.style.display = "inline-block", a4i.style.fontSize = "1.5em", a4i.style.lineHeight = "1em", a4i.style.verticalAlign = "middle", hZ.appendChild(a4i))
				}
			}(hZ, a4e.kJ), a2V.appendChild(hZ)
	}

	function a2X() {
		a2N && (dA.dI.scrollTop = dA.dI.scrollHeight)
	}
	this.clear = function() {
		dA.dI.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var r9 = rr.a4d(), aH = r9.length, a2V = document.createDocumentFragment(), aA = 0; aA < aH; aA++) a2W(a2V, r9[aA]);
		dA.dI.appendChild(a2V), a2X(), dA.show(), this.resize(), a2N = !0, a2X()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dA.dI.style.padding = "0.4em " + v.w.y1(ak.a4c)
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, this.ro = function(a4e) {
		var a2V = document.createDocumentFragment();
		a2W(a2V, a4e), dA.dI.appendChild(a2V), a2X()
	}, (dA = new dE(L(195), [new dF("⬅️ " + L(1), function() {
		d2.a4a(1)
	})])).dI.style.overflowY = "auto", dA.dI.addEventListener("scroll", function() {
		a2N = dA.dI.scrollTop >= dA.dI.scrollHeight - dA.dI.clientHeight - 2
	})
}

function a4j(a2Z, data) {
	var aH = data.a4k.length,
		a4l = document.createElement("div"),
		a4m = document.createElement("div"),
		a4n = document.createElement("div"),
		a4o = new Array(aH),
		dR = new Array(aH),
		a4p = new Array(data.a4q.length),
		a4r = v.color.a39(70, 70, 0, .35);

	function a36() {
		this.style.backgroundColor = v.color.a36(a4r, 160)
	}

	function a4x() {
		this.style.backgroundColor = a4r
	}

	function a50() {
		var ee;
		for (a2Z.style.font = v.w.ae(0, v.w.a51(.026, .5, .03)), aA = 1; aA < a4p.length; aA++) v.w.mU(a4p[aA], 4);
		if (v.w.mU(a4l, 2), aH) {
			for (var sp, e = a4l.offsetWidth, a52 = a4n.offsetWidth, aA = 0; aA < a4p.length; aA++) sp = .01 * data.a4w[aA] * a52, a4p[aA].style.width = (100 * sp / e).toFixed(2) + "%";
			var cn = data.a4k[0].length;
			for (aA = 0; aA < aH; aA++)
				for (v.w.mU(a4o[aA], 2), ee = 1; ee < cn; ee++) v.w.mU(dR[aA][ee], 4);
			a4m.a4s && (a4m.scrollTop = a4m.a4s)
		}
	}
	this.resize = function() {
			a50(), a50()
		}, a2Z.style.display = "flex", a2Z.style.flexDirection = "column", a4m.style.overflowX = "hidden", a4m.style.overflowY = "auto", a4m.addEventListener("scroll", function() {
			this.a4s = this.scrollTop
		}),
		function() {
			var gl, aA, a4k = data.a4k,
				cn = aH ? a4k[0].length : 0;
			for (aA = 0; aA < aH; aA++) {
				a4o[aA] = document.createElement("div"), a4o[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? v.color.a39(130, 130, 130, .35) : t.a3A
				}(aA), a4o[aA].style.width = "100%", a4o[aA].style.display = "flex", dR[aA] = new Array(cn);
				for (var ee = 0; ee < cn; ee++) dR[aA][ee] = gl = document.createElement("div"), gl.style.display = "flex", gl.style.justifyContent = "center", gl.style.wordBreak = "break-all", gl.style.padding = "0.4em 0em", gl.style.width = data
					.a4w[ee] + "%", gl.innerHTML = a4k[aA][ee].ah, 1 === a4k[aA][ee].a4 && (gl.name = "" + aA, gl.style.color = t.dx, gl.style.backgroundColor = a4r, gl.addEventListener("mouseover", a36), gl.addEventListener("mouseout", a4x),
						function(gl, e7, a4z) {
							2147483647 !== a4z && gl.addEventListener("click", function() {
								iJ.b0(30), iJ.fO(30, e7), jX.h(iJ.bt), this.style.backgroundColor = a4r, d2.da(8, d2.d3, new m2(25, {
									a0J: 0,
									e7: e4.e5.z2(e4.e5.z3(5)),
									a4z: a4z
								}))
							})
						}(gl, a4k[aA][ee].e7, a4k[aA][ee].a4z)), a4o[aA].appendChild(gl)
			}
			for (a4l.style.display = "flex", a4l.style.backgroundColor = v.color.a39(0, 120, 0, .35), aA = 0; aA < a4p.length; aA++) a4p[aA] = gl = document.createElement("div"), gl.style.display = "flex", gl.style.justifyContent = "center", gl.style
				.wordBreak = "break-all", gl.style.padding = "0.4em 0em", gl.style.width = data.a4w[aA] + "%", gl.innerHTML = data.a4q[aA], a4l.appendChild(gl)
		}();
	for (var aA = 0; aA < aH; aA++) a4n.appendChild(a4o[aA]);
	a4m.appendChild(a4n), a2Z.appendChild(a4l), a2Z.appendChild(a4m)
}

function a53() {
	this.a2f = new i4, this.zc = new fR
}

function cB() {
	hu.a9(), c3.a9(), c0.vl(), ct.d4.a9()
}

function cI() {
	wj.a9(), wf.a9(), ve.a9(), wh.a9(), we.a9(), wX.a9(), pI.d4.a9(), aF.mw(), hx.a9(), lO.a9(), wY.a9(), c3.a9(), c3.a54(), c0.a9(), wb.a9(), vY.a9(), tM.a9(), hu.a9(), wi.a9(), qX.a9(), hn.a9(), cZ.a9(), vr.a9(), ct.d4.a9(), ct.a55.a9(), d2.a9(),
		bz.a9(), bl.a9()
}

function cE() {
	ob.a9(), hs.a9(), qI.a9(), wl.a9(), hy.a9(), a1s.a56()
}

function cG() {
	hx.c5(!1), tM.c5(), c0.c5(!1), vY.c5(), qX.c5(), hn.c5(), c3.c5(!1), vr.aP()
}

function c9() {
	c3.c5(!1) && (bl.c8 = !0), ct.d4.a9()
}

function a57(a2E) {
	var a58 = document.createElement("div"),
		a59 = document.createElement("div");
	this.aP = function() {
			a59.textContent = "", eT.g2.dj(1);
			for (var a2V = document.createDocumentFragment(), a5A = eT.d4.fo[0], eU = eT.eU.eS[a5A], y8 = eT.eU.y8[a5A], aA = 0; aA < eU.length; aA++) ! function(a2V, eW, a5C, a5A) {
				var a2T = document.createElement("span");
				a2T.textContent = (a5C ? "🟢 " : "⚪ ") + eT.w9.eK(eW, a5A), a2T.style.color = eT.w9.eM(eW.eN), a2T.style.cursor = "pointer", a2T.style.margin = "0.2em 0.2em 0.2em 0.2em", a2T.style.width = a2T.style.maxWidth = 2 === a5A ? "10em" :
					"9em", a2T.style.height = a2T.style.maxHeight = "1.4em", a2T.style.whiteSpace = "nowrap", a2T.style.overflow = "hidden", a2T.style.textOverflow = "ellipsis", a2T.style.font = "inherit", a2T.style.display = "inline-block", eT
					.w9.eV(eW) && (a2T.style.textDecoration = "underline"), a2T.onclick = function(f6) {
						a2E(f6, eW)
					}, p5.p6() || (a2T.onmouseover = function(f6) {
						eT.g2.w5(f6, eW, 1)
					}), a2V.appendChild(a2T)
			}(a2V, eU[aA], aA < y8, a5A);
			a59.appendChild(a2V)
		}, this.show = function(a2Z) {
			a2Z.appendChild(a58)
		}, this.dj = function(a2Z) {
			a2Z.removeChild(a58)
		}, this.resize = function() {
			a59.style.fontSize = v.w.y1(v.w.mV(.02, .3))
		}, a58.style.top = "0", a58.style.left = "0", a58.style.width = a58.style.height = "100%", a58.style.overflowX = "hidden", a58.style.overflowY = "auto", a58.style.font = "inherit", a59.style.font = "inherit", a59.style.margin = "0.4em", a58
		.appendChild(a59)
}

function a5D() {
	this.h = function() {
		if (0 === i.data.sResourcesType) {
			for (var q4 = i.fd, s9 = a5.s9, aA = 0; aA < q4; aA++) s9[aA] = 512;
			var q5 = i.l9,
				zn = cX.zn,
				r6 = cX.r6;
			for (aA = q4; aA < q5; aA++) s9[aA] = zn[r6[aA]]
		} else(1 === i.data.sResourcesType ? function() {
			for (var aH = i.l9, s9 = a5.s9, sResourcesValue = i.data.sResourcesValue, aA = 0; aA < aH; aA++) s9[aA] = sResourcesValue
		} : function() {
			for (var aH = i.l9, s9 = a5.s9, sResourcesData = i.data.sResourcesData, aA = 0; aA < aH; aA++) s9[aA] = sResourcesData[aA]
		})();
		cZ.a5H[8] = a5.s9[i.gC]
	}
}

function a5I() {
	var ap, a5J, a5K, bB, a5L, a5M, a5N, a5O, a5P, a5Q, a5R, a5S, a5T, a5U = !1,
		a5V = !1;

	function a5W(mG) {
		a5S = bl.bk, a5K = bB = a5J = 0, a5L = (a5T = 33) / mG, ap = 1 / (mG / a5T / 4), a5M = (r.d / 2 + v9) / v8, a5N = (r.an / 2 + vA) / v8, a5O = v8
	}

	function a5X(aA) {
		var jr; - 1 !== aA && (aA = ri.a5Z(pI.d4.uy[aA]), jr = ri.rj(aA) - 10, aA = ri.rk(aA) - 10, ob.rl(jr, aA, 19 + jr, 19 + aA))
	}

	function a5h(mE) {
		Math.abs(Math.log(a5R / a5O)) < .125 && (a5R = mE * a5O)
	}

	function a5g(jr, h6, oC, oD) {
		a5P = (jr + oC + 1) / 2, a5Q = (h6 + oD + 1) / 2;
		oC = r.d / (oC - jr + 1), jr = r.an / (oD - h6 + 1);
		a5R = .9 * (oC < jr ? oC : jr)
	}
	this.oc = function() {
		return a5U
	}, this.wm = function() {
		a5W(1), this.rl(0, 0, ip.mg - 1, ip.mj - 1), i.bu || i.i0 || this.rg(i.gC, 3e3, !0, .3)
	}, this.rm = function(player, rn) {
		a5X(pI.eu.a5Y(player, rn))
	}, this.rg = function(player, mG, a5a, zoom) {
		i.q || a5U && !a5a && a5V || (0 === a5.a6[player] ? a5X(pI.eu.a5b(player)) : (qh.qi = !1, a5V = a5a, a5W(mG), function(player) {
			a5P = (a5.pN[player] + a5.pQ[player] + 1) / 2, a5Q = (a5.pP[player] + a5.pR[player] + 1) / 2
		}(player), function(zoom, player) {
			var pC = a5.pQ[player] - a5.pN[player] + 1,
				player = a5.pR[player] - a5.pP[player] + 1,
				ee = r.d / pC,
				cq = r.an / player,
				ee = (a5R = ee < cq ? ee : cq, 0 !== zoom ? zoom : pC < 20 && player < 20 ? .5 : .9);
			a5R *= ee, a5h(7 / 8)
		}(zoom, player), a5U = !0, ta.a5e()))
	}, this.a5f = function(mG) {
		i.i0 || i.q || (qh.qi = !1, a5V = !1, a5W(mG), a5g(0, 0, ip.mg - 1, ip.mj - 1), a5h(7 / 8), a5U = !0, ta.a5e())
	}, this.rl = function(jr, h6, oC, oD) {
		a5g(jr, h6, oC, oD), v8 = a5R, qh.a5i(a5P, r.d / 2), qh.a5j(a5Q, r.an / 2), xw.a5k(), bl.c8 = !0
	}, this.lf = function() {
		return !(a5U && a5V || (a5U = !1))
	}, this.a9 = function() {
		var a5n, a5o, gl, a5r;
		a5U && (a5J < .5 ? bB < a5L && (bB += a5L * ap, a5K = a5J) : 1 - a5K < a5J && (bB = (bB -= a5L * ap) < a5L * ap ? a5L * ap : bB), a5S = a5S >= bl.bk ? bl.bk - 1 : a5S, a5J = 1e3 < (gl = bl.bk - a5S) || 1 < (a5J += bB * gl / a5T) ? 1 :
			a5J, a5S = bl.bk, gl = v8, a5n = v9, a5o = vA, gl = (v8 = a5O * Math.pow(a5R / a5O, a5J)) / gl, a5r = 1 - (a5O * Math.pow(a5R / a5O, 1 - a5J) - a5O) / (a5R - a5O), qh.a5i(a5M + a5r * (a5P - a5M), r.d / 2), qh.a5j(a5N + a5r * (
				a5Q - a5N), r.an / 2), c3.zoom(gl, (a5n * gl - v9) / (1 - gl), (a5o * gl - vA) / (1 - gl)), xw.a5k(), 1 <= a5J && (a5U = !1, c6.xv = !0), bl.c8 = !0)
	}
}

function a5s() {
	var oJ, a5u, a5v, a5w, a5t = !1;

	function a5x() {
		a5t = !0, oJ = -1, a5u = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) a5u[aA] = !1;
		var a5y = Math.floor(1 + .02 * r.min);
		a5v = new Array(4), (a5w = new Array(4))[1] = a5w[3] = a5v[0] = a5v[2] = 0, a5w[0] = a5v[3] = -a5y, a5v[1] = a5w[2] = a5y
	}

	function a5z() {
		if (-1 !== oJ)
			if (0 !== i.bw && ob.lf()) {
				for (var a60 = !1, aA = 3; 0 <= aA; aA--) a5u[aA] && (a60 = !0, v9 += a5v[aA], vA += a5w[aA], c3.hW(a5v[aA], a5w[aA]), qh.a61());
				a60 ? bl.c8 = !0 : ta.a5e()
			} else ta.a5e()
	}
	this.tb = function(bm) {
		0 !== i.bw && ob.lf() && (a5t || a5x(), a5u[bm] = !0, -1 === oJ) && (oJ = setInterval(a5z, 20), a5z())
	}, this.ti = function(bm) {
		if (0 !== i.bw && (a5t || a5x(), a5u[bm] = !1, -1 !== oJ)) {
			for (var a60 = !1, aA = 3; 0 <= aA; aA--) a60 = a60 || a5u[aA];
			a60 || this.a5e()
		}
	}, this.a5e = function() {
		if (a5t && -1 !== oJ) {
			for (var aA = 3; 0 <= aA; aA--) a5u[aA] = !1;
			clearInterval(oJ), oJ = -1
		}
	}
}

function fN() {
	this.size = 0, this.bm = 0, this.bt = null, this.h = function(bt) {
		this.bm = 0, this.bt = bt, this.size = bt.length
	}, this.b0 = function(a62) {
		return this.h(new Uint8Array(this.jY(a62))), this.bt
	}, this.zF = function() {
		this.bt = null
	}, this.fO = function(size, bi) {
		for (var bt = this.bt, lf = this.bm + size - 1, aA = this.bm; aA <= lf; aA++) bt[aA >> 3] |= (bi >> lf - aA & 1) << 7 - (7 & aA);
		this.bm += size, this.bm > 8 * this.size && console.error("Wrapper Overflow")
	}, this.a63 = function(size, bi) {
		var cq = size >> 1,
			gl = 1 << cq;
		this.fO(size - cq, bO.bP(bi, gl)), this.fO(cq, bi % gl)
	}, this.a64 = function(size) {
		for (var bt = this.bt, lf = this.bm + size, aA = this.bm; aA < lf; aA++) bt[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.jY = function(a62) {
		return a62 + 7 >> 3
	}, this.a65 = function(bW, l8, lf, a66) {
		for (var aA = l8; aA < lf; aA++) this.fO(a66, bW[aA])
	}
}

function a67() {
	var gQ, a02, a03, a05;

	function a68(id) {
		0 !== n.id || ce.cf.data[140].value ? 0 === id ? d2.da(8, 1, new m2(16)) : d2.da(2) : d2.d4.nr(d2.d3, 0 === id ? 16 : 0)
	}
	this.show = function() {
		n.o.setState(12), gQ.show(), this.resize(), this.a9()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), a02.resize()
	}, this.a9 = function() {
		8 === d0.d1() && (2 <= cZ.a6G ? a03[2].a6W === t.a3L && a03[2].ns(0) : a03[2].a6W !== t.a3L && a03[2].ns(t.a3L), !i.i0 && mI.a30(i.gC) ? a03[1].a6W === t.a3L && a03[1].ns(0) : a03[1].a6W !== t.a3L && a03[1].ns(t.a3L), !i.i0 && hn.a6I(i
			.gC) ? a03[0].a6W === t.a3L && a03[0].ns(0) : a03[0].a6W !== t.a3L && a03[0].ns(t.a3L))
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, a03 = [new dF(L(196), function() {
		a68(0)
	}), new dF(L(170), function() {
		d2.da(16)
	}), new dF(L(197), function() {
		d2.da(17)
	}), new dF(L(198), function() {
		d2.d4.a69()
	}, 0, 0, 1), new dF(L(199), function() {
		d2.da(3, 1)
	}), new dF(L(171), function() {
		d2.da(18)
	}), new dF(L(200), function() {
		a68(1)
	}), new dF(L(201), function() {
		var a4q = ["Patreon", L(210), L(211), "YouTube Tutorial", "Discord", L(212), L(163), L(213), L(166), L(214), "Terms", "Privacy"],
			a6J = [kH.a6K, kH.a6L, kH.a6M, "https://www.youtube.com/watch?v=6QBmA9N1668", kH.a6N, kH.a6O, kH.a6P, kH.a4Y, kH.a6Q, kH.a6R, kH.a6S, kH.a6T];
		1 === n.id ? (a4q.splice(2, 1), a4q.splice(0, 1), a6J.splice(2, 1), a6J.splice(0, 1)) : 2 === n.id && (a4q.splice(1, 1), a4q.splice(0, 1), a6J.splice(1, 1), a6J.splice(0, 1)), d2.da(4, 1, new fG(L(201), v.w.a6U(a4q, a6J), !1, [
			new dF("⬅️ " + L(1), function() {
				d2.da(1)
			})
		]))
	}), new dF(L(202), function() {
		d2.da(4, 1, new fG(L(202), f9.fk + "<br><a href='" + kH.a6O + "' target='_blank'>" + kH.a6O + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new dF("⬅️ " + L(1), function() {
				d2.da(1)
			})]))
	}), new dF(L(203), function() {
		d2.da(4, 1, new fG(L(203), L(215) + "<br>" + L(216), !1, [new dF("⬅️ " + L(1), function() {
			d2.da(1)
		}), new dF(L(217), function() {
			n.o.a6V(), d2.da(1)
		})]))
	}), new dF(L(204), function() {
		n.o.a6D(), d2.da(4, 1, new fG(L(218), L(219) + " <a href='" + kH.a6T + "' target='_blank'>" + kH.a6T + "</a>", !1, [new dF("⬅️ " + L(1), function() {
			d2.da(1)
		})]))
	})], a05 = [new dF("⬅️ " + L(1), function() {
		d2.d4.d5()
	})], 8 === d0.d1() && (a03.unshift(new dF(L(195), function() {
		d2.da(30)
	})), a03.unshift(new dF(L(207), function() {
		2 <= cZ.a6G && (d2.fH(), cY.tk(), bl.c8 = !0)
	}, 0, 1)), a03.unshift(new dF(L(208), function() {
		!i.i0 && mI.a30(i.gC) && (bx.gL.a6H(), d2.fH(), mI.mJ) && mI.tk()
	}, 0, 1)), a03.unshift(new dF(L(209), function() {
		!i.i0 && hn.a6I(i.gC) && (wY.p4(2), bx.gL.te(), d2.fH(), mI.mJ) && mI.tk()
	}, 0, 1))), 1 === n.id && 5 <= n.fk && a03.push(new dF(L(205), function() {
		n.o.a6F()
	})), gQ = new dE(L(206), a05), a02 = new a06(a03, gQ.dI)
}

function zO() {
	this.k8 = function(a6X, bm, a6Y) {
		var iZ = a6X.height,
			jG = v.w.pB(iZ, iZ),
			ih = v.w.getContext(jG);
		return function(d, ih, a6Y) {
			ih.fillStyle = a6Y, ih.beginPath(), ih.arc(d / 2, d / 2, .47 * d, 0, 2 * Math.PI), ih.fill()
		}(iZ, ih, a6Y), ih.drawImage(a6X, -bm * iZ, 0), jG
	}, this.a6a = function(a6b) {
		var ih, ic, iZ = a6b.height;
		return a6b.width === iZ && (ic = (ih = v.w.getContext(a6b, !0)).getImageData(0, 0, iZ, iZ), v.o8.a6c(ic.data, iZ, iZ, .9), ih.putImageData(ic, 0, 0)), a6b
	}
}

function a6d() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 !== i.data.tIncomeType && (i.data.tIncomeData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.tIncomeType && v.cj.a1h(dC.dQ(), i.data.tIncomeData, 255)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(24), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(23), L(18), L(5)],
			value: i.data.tIncomeType
		}, function(bm) {
			dK(), 2 !== bm || i.data.tIncomeData || (i.data.tIncomeData = new Uint8Array(i.df), i.data.tIncomeData.fill(32)), i.data.tIncomeType = bm, d2.da(26)
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU;
		1 === i.data.tIncomeType && ((dU = new dV).dW("Value"), dU.db(new jI({
			bm: -1,
			value: i.data.tIncomeValue
		}, 1, 0, function(f6) {
			var value = bO.hQ(Math.floor(f6.target.value), 0, 255);
			f6.target.value = i.data.tIncomeValue = value
		})), dR.push(dU))
	}(dR), function(dR) {
		var dU;
		2 === i.data.tIncomeType && ((dU = new dV).dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.tIncomeData, 4)), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function a6e() {
	this.yH = 0;
	var a6f, a6g, a6h, a6i, a6j, a6k = this.a1t = 0;

	function a6o() {
		a6i = a6j = null, a6k = 0
	}
	this.h = function(g4, a6l, a6m) {
		d2.fH(), eT.zF(), d0.setState(10), a6i = g4, a6j = a6l, a6k = a6m, this.yH = g4.yH, this.a1t = a6m, a6f = 0, a6g = bl.bk + 4500, ct.d4.nH = g4.nH, ct.d4.iP === g4.nH ? (console.log("direct pass"), a6h = 0) : (console.log("delayed pass"),
			ct.d4.close(ct.d4.iP, 3247), a6h = 2, ct.d4.yj(g4.nH, 5) && ct.sH.a1r()), aj.imageSmoothingEnabled = !0, d0.aV();
		a6l = k9.o7("loading"), a6m = (n.o.p() ? .396 : .25) * r.s / a6l.width;
		aj.setTransform(a6m, 0, 0, a6m, Math.floor((r.d - a6m * a6l.width) / 2), Math.floor((r.an - a6m * a6l.height) / 2)), aj.imageSmoothingEnabled = !1, aj.drawImage(a6l, 0, 0), aj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a56 = function() {
		0 < a6h && bl.bk > a6g && (a6h--, a6g += 4500, 0 === bl.bo) && 0 === bl.ff() && ct.d4.yj(ct.d4.nH, 5)
	}, this.a6p = function() {
		return 10 === d0.d1() && (eT.yI.a6q(a6i, a6j, a6k), a6o(), !0)
	}, this.a6r = function() {
		10 === d0.d1() && 2 <= ++a6f && (eT.yI.a6q(a6i, a6j, a6k), a6o())
	}
}

function a73(sn) {
	f9 && !sn || (yU(), bO = new a75, kH = new a76, v = new zI, t = new a37, i = new wC, cg = new cL, e4 = new uA, jc = new a77, cX = new ze, we = new a78, wf = new a4C, ob = new a5I, wZ = new a79, wa = new a5D, a6t = new tr, kS = new a7A, mI =
		new a2o, hu = new r8, ca = new a7B, tM = new a7C, qI = new a7D, qX = new qL, qh = new a7E, o4 = new a7F, vY = new a7G, hx = new a7H, c0 = new vG, hs = new a7I, a18 = new a0v, tp = new a1A, d0 = new a7J, k9 = new a7K, mr = new xM, n2 =
		new a7L, aF = new mu, a6v = new a7M, gD = new a7N, ve = new a7O, a6u = new a7P, c3 = new a7Q, a5 = new wx, wS = new qr, lO = new uJ, kA = new a7R, mk = new a3w, oW = new am, ta = new a5s, ct = new a7S, bA = new a7T, wX = new a7U, wW =
		new a7V, tJ = new zR, wl = new a7W, r = new a7X, hn = new a7Y, a1s = new a6e, wj = new g9, sq = new yW, a6w = new zZ, wh = new a7Z, wi = new a7a, a6x = new a7b, bx = new a7c, bz = new uS, hy = new a7d, iJ = new fN, iS = new a7e, jX =
		new a7f, a6y = new a7g, p5 = new st, ri = new a7h, pI = new a7i, aK = new a7j, wb = new a7k, a6z = new a7l, hr = new eq, ip = new a7m, tQ = new a7n, d2 = new a7o, ws = new a7p, n = new a7q, f9 = new fg, zb = new a53, ce = new a7r, a1 =
		new kY, vr = new a, xw = new a7s, c6 = new a7t, wY = new ov, a70 = new a7u, cZ = new a7v, cY = new a7w, bl = new a7x, qS = new a7y, ak = new a7z, fC = new a80, a72 = new a81, jS = new a82, eT = new a83, zH = new z7, rr = new a84, f9.h(),
		n.h(), r.cW(), ce.h(), cg.h(), cg.cV(), (p2 = new a86).h(), v.h(), wY.h(), ct.h(), e4.h(), jc.h(), ip.h(), d2.h(), o5 = new a87, r.h(), n.o.a88(), bl.h(), ak.h(), a70.h(), a71 = new q6, bA.h(), ve.a89(), ws.h(), mk.h(), d0.h(), o4.h(), wS
		.h(), p5.h(), k9.h(), bl.c8 = !0, setTimeout(function() {
			ip.b0(2, 14071)
		}, 0), d2.da(5, 5), a6y.n3() || n.o.a8A(), r.a8B(), f9.fA = 1)
}

function a7i() {
	this.eu = new a8C, this.a8D = new a8E, this.a8F = new ub, this.d4 = new a8G, this.oS = new a8H, this.vC = new p9, this.a8I = new a8J, this.a4D = new a8K, this.a8L = new a8M, this.a8N = new a8O, this.h = function() {
		this.a8F.h(), this.d4.h(), this.oS.h(), this.vC.h(), this.a8N.h()
	}, this.ai = function() {
		this.a8N.ai(), this.a8F.ai()
	}
}

function a7u() {
	this.a8P = new xy, this.h = function() {
		this.a8P.resize()
	}
}

function a7D() {
	var r9, kK, a8Q, a8R, an, qH, fontSize, a8S, a8T, a8U, a8V, canvas, f, a5S, a8W;

	function dQ(aA) {
		return L(0 === aA ? 220 : 1 === aA ? 221 : 2 === aA ? 222 : 223)
	}

	function a8d() {
		aj.drawImage(canvas, ak.gap + (i.j ? ak.gap + vr.m() : 0), al + 2 * ak.gap)
	}

	function a8X() {
		canvas.width = r9[0].width + a8U, canvas.height = an + a8U, (f = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, r9[0].width + a8U, an + a8U), f.translate(Math.floor(a8U / 2), Math.floor(a8U / 2)), f.lineWidth = a8U, f.fillStyle = 1 === r9[0].a8c ? t.a3E : t.ac, a8e(), f.fill(), f.strokeStyle = 1 === r9[0].a8c ? t.kb : t.u,
		a8e(), f.stroke(), v.w.textAlign(f, 1), v.w.textBaseline(f, 1), f.fillStyle = 1 === r9[0].a8c ? t.kb : t.u, f.font = qH[0], f.fillText(dQ(r9[0].a8b), Math.floor(r9[0].width / 2), Math.floor(.72 * a8S[0] * an)), f.font = qH[1], f.fillText(r9[
				0].ef, Math.floor(r9[0].width / 2), Math.floor((a8S[0] + .48 * a8S[1]) * an))
	}

	function a8e() {
		f.beginPath(), f.moveTo(a8V, 0), f.lineTo(r9[0].width - a8V, 0), f.lineTo(r9[0].width, a8V), f.lineTo(r9[0].width, an - a8V), f.lineTo(r9[0].width - a8V, an), f.lineTo(a8V, an), f.lineTo(0, an - a8V), f.lineTo(0, a8V), f.closePath()
	}
	this.h = function() {
		kK = 4, a8Q = a8R = a5S = 0, r9 = [], qH = new Array(2), fontSize = new Array(2), (a8S = new Array(2))[0] = .3, a8S[1] = .7, a8T = new Array(4), canvas = document.createElement("canvas"), a8W = bl.bk + 2e3, this.resize()
	}, this.resize = function() {
		var aA, d;
		for (an = Math.floor((n.o.p() ? .0725 : .058) * r.s), fontSize[0] = Math.floor(.85 * a8S[0] * an), fontSize[1] = Math.floor(.85 * a8S[1] * an), qH[0] = v.w.ae(1, fontSize[0]), qH[1] = v.w.ae(1, fontSize[1]), aA = a8T.length - 1; 0 <=
			aA; aA--) a8T[aA] = this.measureText(dQ(aA) + "000", qH[0]);
		if (a8U = Math.floor(1 + .05 * an), a8V = Math.floor(.2 * an), 0 < r9.length) {
			for (aA = r9.length - 1; 0 <= aA; aA--) d = this.measureText(r9[aA].ef + "00", qH[1]), r9[aA].width = d < a8T[aA] ? a8T[aA] : d;
			a8X()
		}
	}, this.a9 = function() {
		0 !== kK && (4 === kK ? bl.bk > a8W && (kK = 0, 1 === i.bw) && qI.sN(ip.oX.nJ[ip.oY].name, 3, 1, 9) : (1 === kK ? (0 === a8Q && (a8X(), a8Q = 1e-4), 1 <= (a8Q += .002 * (bl.bk - a5S)) && (a8R = 0, kK = 2, a8Q = 1), bl.c8 = !0) : 2 ===
			kK ? ((a8R += (bl.bk - a5S) / 1e3) > r9[0].mG || 1 < a8R && 1 < r9.length) && (kK = 3) : 3 === kK && ((a8Q -= .002 * (bl.bk - a5S)) <= 0 && (a8Q = 0, r9.shift(), kK = 0 < r9.length ? 1 : 0), bl.c8 = !0), a5S = bl.bk))
	}, this.measureText = function(ef, qH) {
		return aj.font = qH, Math.floor(aj.measureText(ef).width)
	}, this.rt = function(a8a, aA) {
		this.sN(a5.r3[a8a], aA, 1, 0 === aA ? 3 : 7)
	}, this.sN = function(ef, a8b, a8c, mG) {
		var d;
		ef.length && (d = (d = this.measureText(ef + "00", qH[1])) < a8T[a8b] ? a8T[a8b] : d, r9.push({
			ef: ef,
			width: d,
			a8b: a8b,
			a8c: a8c,
			mG: mG
		}), 0 === kK) && (a8Q = 0, kK = 1, a5S = bl.bk)
	}, this.ai = function() {
		0 !== kK && 0 !== a8Q && (a8Q < 1 ? (aj.globalAlpha = a8Q, a8d(), aj.globalAlpha = 1) : a8d())
	}
}

function a7O() {
	var a8f;

	function a8h(player) {
		var aS, a8j;
		return v.fX.fY(player) && player < i.fd ? 0 : (aS = a8f[bO.bP((i.df - 1) * a5.a6[player], i.vT)], bl.ff() < 1920 && (aS = Math.max(bO.bP(100 * (13440 - 6 * bl.ff()), 1920), aS)), a8j = ve.vf(player), a5.s9[player] > a8j && (aS -= bO.bP(2 *
			aS * (a5.s9[player] - a8j), a8j)), Math.min(Math.max(aS, 0), 700))
	}

	function a8z(lD) {
		for (var a6 = a5.a6, aE = aF.aE, aA = aF.aI - 1; 0 <= aA; aA--) {
			var aL = aE[aA];
			v.fX.a0p(aL, bO.bP(lD * a6[aL], 32))
		}
	}

	function a8w() {
		var a4O = i.gC;
		aK.a93[0] = a5.s9[a4O] - a5.wy[a4O]
	}

	function a8y(bm) {
		var a4O = i.gC;
		cZ.a5H[bm] += a5.s9[a4O] - a5.wy[a4O] - aK.a93[0]
	}
	this.a89 = function() {
		for (var aH = i.df, aA = (a8f = new Uint16Array(aH), 0); aA < aH; aA++) a8f[aA] = 100 + a8g(bO.bP(25600 * aA, aH - 4), 9)
	}, this.h = function() {
		0 === i.data.iIncomeType ? this.vv = a8h : 1 === i.data.iIncomeType ? this.vv = function(player) {
			return bO.bP(i.data.iIncomeValue * a8h(player), 64)
		} : this.vv = function(player) {
			return bO.bP(i.data.iIncomeData[player] * a8h(player), 64)
		}
	}, this.a9 = function() {
		if (bl.ff() % 10 == 9 && (function() {
				a8w();
				for (var aE = aF.aE, s9 = a5.s9, aA = aF.aI - 1; 0 <= aA; aA--) {
					var aL = aE[aA],
						a8x = bO.bP(ve.vv(aL) * s9[aL], 1e4);
					v.fX.a0p(aL, Math.max(a8x, 1))
				}
				a8y(9)
			}(), function() {
				if (0 !== i.data.aIncomeType) {
					if (a8w(), 1 === i.data.aIncomeType)
						for (var a6 = a5.a6, aE = aF.aE, lD = i.data.aIncomeValue, aA = aF.aI - 1; 0 <= aA; aA--) {
							var aL = aE[aA];
							v.fX.a0p(aL, bO.bP(lD * a6[aL], 128))
						} else 2 === i.data.aIncomeType && function() {
							for (var a6 = a5.a6, aE = aF.aE, lD = i.data.aIncomeData, aA = aF.aI - 1; 0 <= aA; aA--) {
								var aL = aE[aA];
								v.fX.a0p(aL, bO.bP(lD[aL] * a6[aL], 128))
							}
						}();
					a8y(18)
				}
			}(), bl.ff() % 100 == 99)) {
			if (a8w(), 0 === i.data.tIncomeType) a8z(32);
			else if (1 === i.data.tIncomeType) a8z(i.data.tIncomeValue);
			else
				for (var a6 = a5.a6, aE = aF.aE, lD = i.data.tIncomeData, aA = aF.aI - 1; 0 <= aA; aA--) {
					var aL = aE[aA];
					v.fX.a0p(aL, bO.bP(lD[aL] * a6[aL], 32))
				}
			a8y(8)
		}
	}, this.vf = function(player) {
		return Math.min(100 * a5.a6[player], i.wE)
	}, this.a8k = function(player, a1x) {
		v.fX.a0p(a1x, aK.a8l[0]), cZ.sf(player, a1x), c3.a8m(player, aK.a8l[0] + aK.a8l[1]), c3.a8n(a1x, aK.a8l[0]), v.fX.a8o(player)
	}, this.a8p = function() {
		for (var aH = aF.aI, fT = aF.aE, cn = 0, a8q = a5.s9, aA = 0; aA < aH; aA++) cn += a8q[fT[aA]];
		return cn
	}, this.a8r = function(a8s) {
		for (var aL, aH = aF.aI, fT = aF.aE, cn = 0, a8q = a5.s9, aG = a1.aG, aA = 0; aA < aH; aA++) aG[aL = fT[aA]] === a8s && (cn += a8q[aL]);
		return cn
	}
}

function a7G() {
	var qH, d, bG, a94, a95, canvas, f, qN, a8q, a96, a97, a98, a99;
	this.bF = 0, this.an = 0, this.h = function() {
		a95 = i.wG, a97 = "rgba(0,100,0,0.8)", a98 = "rgba(150,0,0,0.8)", qN = a96 = !0, a8q = a5.s9[i.gC], this.resize()
	}, this.resize = function() {
		d = Math.floor((n.o.p() ? .305 : .24) * r.s), this.an = Math.floor(.5 + .13 * d), d = Math.floor(6 * this.an), qH = v.w.ae(1, Math.floor(.8 * this.an)), a99 = Math.floor(.5 * this.an), ip.om.font = qH, bG = ak.gap, a94 = Math.floor(1 +
			.13 * this.an), (canvas = document.createElement("canvas")).width = d, canvas.height = this.an, (f = canvas.getContext("2d", {
			alpha: !0
		})).font = qH, v.w.textBaseline(f, 1), v.w.textAlign(f, 1), this.a9A()
	}, this.vb = function() {
		return n.o.p() && r.d < 1.2 * r.an
	}, this.qQ = function() {
		this.vb() ? this.bF = r.d - d - ak.gap : this.bF = Math.floor(hx.a9B() + (r.d - hx.a9B() - c0.d - d) / 2 - .5 * ak.gap)
	}, this.c5 = function() {
		qN && (qN = !1, this.a9A())
	}, this.a9A = function() {
		f.clearRect(0, 0, d, this.an), f.fillStyle = a96 ? a97 : a98, f.fillRect(0, 0, d, this.an), f.fillStyle = t.a3B, this.a9C(), this.a9D(), f.fillStyle = a5.s9[i.gC] >= ve.vf(i.gC) ? t.a3Y : t.u, f.fillText(v.dh.e6(a8q), Math.floor(d / 2),
			a99), f.fillStyle = t.u, f.fillRect(0, 0, d, 1), f.fillRect(0, 0, 1, this.an), f.fillRect(0, this.an - 1, d, 1), f.fillRect(d - 1, 0, 1, this.an)
	}, this.a9C = function() {
		var aR = bl.ff() % 100,
			aR = (aR = 9 - bO.bP(aR -= aR % 10, 10), Math.floor(aR * (this.an - a94) / 9));
		f.fillRect(0, aR, a94, this.an - aR), f.fillRect(d - a94, aR, a94, this.an - aR)
	}, this.a9D = function() {
		f.fillRect(a94, this.an - a94, Math.floor((d - 2 * a94) * a5.s9[i.gC] / a95), a94)
	}, this.a9 = function() {
		var aL = i.gC;
		v.fX.pH(aL) && (aL = a5.s9[aL] - a5.wy[aL], a8q !== aL ? (a95 = ra(aL, a95), a96 = a8q < aL && 10 <= aL, a8q = aL, qN = !0) : bl.ff() % 10 == 9 && (qN = !0))
	}, this.ai = function() {
		0 === a5.gB[i.gC] || i.bu || 2 === a5.ry[i.gC] || aj.drawImage(canvas, this.bF, bG)
	}
}

function dd(a9E, a9F, a9G) {
	function click() {
		var value = 1 - a9E.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + a9F, void 0 !== a9E.bm ? ce.cx.cy(a9E.bm, value) : a9E.value = value, a9G && a9G(value)
	}
	var f6;
	a9F = a9F || L(224), this.f6 = document.createElement("p"), (f6 = this.f6).textContent = (a9E.value ? "🟩 " : "⬜ ") + a9F, f6.style.margin = "0", f6.style.marginBottom = "0.5em", f6.style.cursor = "pointer", f6.addEventListener("click", click)
}

function fr() {
	this.g0 = 0, this.oY = 0, this.mapSeed = 0, this.y4 = 0, this.y5 = 0, this.y6 = 0, this.y7 = 0, this.g6 = 0, this.spawningSeed = 0, this.nH = 0, this.yH = 0, this.el = [], this.yL = 1048575, this.g5 = 0, this.yJ = [{
		oY: 0,
		mapSeed: 0,
		y4: 0,
		bk: 100,
		y7: 0
	}, {
		oY: 1,
		mapSeed: 0,
		y4: 1,
		bk: 200,
		y7: 0
	}, {
		oY: 2,
		mapSeed: 0,
		y4: 2,
		bk: 300,
		y7: 0
	}, {
		oY: 3,
		mapSeed: 0,
		y4: 3,
		bk: 400,
		y7: 0
	}, {
		oY: 0,
		mapSeed: 0,
		y4: 9,
		bk: 500,
		y7: 0
	}, {
		oY: 1,
		mapSeed: 0,
		y4: 10,
		bk: 600,
		y7: 0
	}, {
		oY: 2,
		mapSeed: 0,
		y4: 8,
		bk: 700,
		y7: 0
	}, {
		oY: 3,
		mapSeed: 0,
		y4: 3,
		bk: 800,
		y7: 0
	}]
}

function a84() {
	var a9H = [];
	this.ro = function(ef, kJ) {
		ef = {
			bk: c0.vi(),
			ef: ef,
			kJ: kJ
		};
		a9H.push(ef), 30 === d2.d3 && d2.jf().ro(ef)
	}, this.clear = function() {
		a9H = [], d2.fx(30) && d2.fx(30).clear()
	}, this.a4d = function() {
		return a9H
	}
}

function a7W() {
	var a8Q, a5S;
	this.h = function() {
		a8Q = 1, a5S = 0
	}, this.a9 = function() {
		0 < a8Q && (a5S = 0 === a5S ? bl.bk + 16 : a5S, a8Q = (a8Q -= .001 * (bl.bk - a5S)) < 0 ? 0 : a8Q, a5S = bl.bk, bl.c8 = !0)
	}, this.ai = function() {
		0 < a8Q && (aj.fillStyle = "rgba(0,0,0," + a8Q + ")", aj.fillRect(0, 0, r.d, r.an))
	}
}

function a7A() {
	var a0z, bF, bG, a9K, a9L, a9M, bk, player, a9N, gap, zoom, a9O, a9P;

	function a9Z(player) {
		for (var aA = a9O.length - 1; 0 <= aA; aA--)
			if (a9O[aA] === player) return 1
	}

	function a9X(bY) {
		var aA, aH;
		if (-1 !== bY)
			for (aH = a0z.length, aA = 0; aA < aH; aA++)
				if (a0z[aA].jq && a0z[aA].bF + 1 === bY % 4 && a0z[aA].bG + 1 === bY >> 2) return aA;
		return -1
	}

	function a9V(hT, hU) {
		var lE = gap / 2;
		return hT < bF - a9K - 3 * lE || bF + 3 * a9K + 5 * lE < hT || hU < bG - a9K - 3 * lE || bG + 2 * a9K + 3 * lE < hU ? -1 : 4 * (hU < bG - lE ? 0 : hU < bG + a9K + lE ? 1 : 2) + (hT < bF - lE ? 0 : hT < bF + a9K + lE ? 1 : hT < bF + 2 * a9K +
			3 * lE ? 2 : 3)
	}
	this.a9Q = function() {
		var aA, cq, a9T = [t.k6, t.a3d, t.k7, t.a3n, t.a3j];
		for (a0z = new Array(9), aA = 0; aA < 9; aA++) a0z[aA] = {
			id: aA,
			jq: !1,
			lC: 0,
			canvas: [],
			bF: 0,
			bG: 0
		};
		for (a0z[0].colors = [0, 1, 2, 3], a0z[0].bF = 0, a0z[0].bG = 0, a0z[1].colors = [0, 1, 4], a0z[1].bF = 1, a0z[1].bG = 0, a0z[2].colors = [0, 2], a0z[2].bF = -1, a0z[2].bG = 0, a0z[3].colors = [0], a0z[3].bF = 0, a0z[3].bG = 0, a0z[4]
			.colors = [0, 2], a0z[4].bF = 1, a0z[4].bG = 1, a0z[5].colors = [3], a0z[5].bF = 0, a0z[5].bG = -1, a0z[6].id = 20, a0z[6].colors = [0], a0z[6].bF = 1, a0z[6].bG = -1, a0z[7].id = 21, a0z[7].colors = [0], a0z[7].bF = 0, a0z[7].bG = 1,
			a0z[8].id = 16, a0z[8].colors = [0], a0z[8].bF = 0, a0z[8].bG = 0, aA = 0; aA < 9; aA++)
			for (cq = 0; cq < a0z[aA].colors.length; cq++) a0z[aA].canvas.push(function(id, a6Y) {
				if (id < 20) return v.canvas.k8(k9.get(3), id, a6Y);
				var a6Y = k9.get(3).height,
					jG = v.w.pB(a6Y, a6Y),
					ih = v.w.getContext(jG);
				20 === id ? ih.drawImage(k9.get(18), 0, 0) : 21 === id && kA.pE.kV(kA.en.kE + kA.en.a9U, ih, 0, 0, a6Y);
				return jG
			}(a0z[aA].id, a9T[a0z[aA].colors[cq]]))
	}, this.a9S = function() {
		return a0z
	}, this.h = function() {
		a9O = [], bF = bG = bk = 0, a9L = a9M = -1e3, this.resize()
	}, this.resize = function() {
		a9K = Math.floor((n.o.p() ? .075 : .0468) * r.s), zoom = a9K / k9.get(3).height, gap = Math.floor(a9K / 3)
	}, this.tL = function(hT, hU) {
		return !!this.jq() && (bl.c8 = !0, !!kA.pE.hS(hT, hU, player) || (hT = function(hT, hU) {
			a9M = a9L = -1e3;
			var a9W = a9X(a9V(hT, hU));
			if (-1 === a9W) return 0;
			if (1 !== a0z[a9W].colors[a0z[a9W].lC])
				if (5 === a9W) {
					if (! function() {
							var a4 = performance.now();
							a9P + 4e3 < a4 && (a9O = []);
							a9P = a4
						}(), a9Z(player)) return 1;
					a9O.push(player), 16 < a9O.length && a9O.shift()
				} else if (6 === a9W) {
				for (var aA = a9O.length - 1; 0 <= aA; aA--) 0 === a5.gB[a9O[aA]] && a9O.splice(aA, 1);
				0 < a9O.length && (wi.a9a(1, a9O, !0) && bx.fX.a9b(a9O, player), a9O = [])
			} else if (2 === a9W) bx.gL.a8k(qX.qa(), player);
			else if (3 === a9W) i.bu && bx.gL.a9c(a9N);
			else if (0 === a9W)
				if (0 === a0z[0].lC) {
					if (i.wK && c0.vi() < 350) return 1;
					wY.p4(4), bx.gL.gM(qX.qa(), player)
				} else wj.gN(player, qX.qa());
			else if (1 === a9W) wY.p4(1), bx.gL.a9d(qX.qa(), a9N);
			else {
				if (7 === a9W) return wY.p4(0), kA.pE.show(hT, hU), 2;
				if (4 === a9W) wi.a9a(0, [player], !0) && bx.fX.rf(player);
				else {
					if (8 !== a9W) return 0;
					bx.gL.a9e(qX.qa(), a9N, player)
				}
			}
			return 1
		}(hT, hU), this.dj(), 2 === hT && (kA.pE.jq = !0), 0 < hT))
	}, this.tO = function(hT, hU) {
		this.jq() || (a9L = hT, a9M = hU, bk = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = ri.a9g(mouseX),
			coordY = ri.a9i(mouseY),
			coord = ri.xJ(coordX, coordY),
			point = ri.x7(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(hT, hU, bM) {
			mr.pm(bM) || -1 === (hT = pI.eu.a9w(hT, hU)) ? hu.s6(bM) : hu.sD(hT)
		}(mouseX, mouseY, point))
	}
	this.click = function(hT, hU, tX) {
		var a9f = ri.a9g(hT),
			a9h = ri.a9i(hU),
			oh = ri.xJ(a9f, a9h),
			bM = ri.x7(oh);
		if (!ri.a9j(a9f, a9h)) return !1;
		a9f = (n.o.p() ? .025 : .0144) * r.s, a9h = performance.now();
		if (Math.abs(hT - a9L) > a9f || Math.abs(hU - a9M) > a9f || bk + 500 < a9h) return !1;
		if (bk = a9h, tX && ! function(hT, hU, bM) {
				mr.pm(bM) || -1 === (hT = pI.eu.a9w(hT, hU)) ? hu.s6(bM) : hu.sD(hT)
			}(hT, hU, bM), mI.mJ || this.jq() || !v.fX.pH(i.gC) || i.i0) return this.dj(), !1;
		if (i.bu) {
			if (!tX) {
				if (!mr.pm(bM)) return !1;
				a9N = oh, a0z[3].jq = !0
			}
		} else if (pI.eu.a9n(oh)) tX ? hu.sc(55, 0) : pI.vC.pA = -1;
		else {
			if (tX) return !1;
			pI.eu.a9o(hT, hU) || (2 === i.bw ? mr.pV(bM) && (player = mr.pW(bM), v.fX.fY(player) || (a0z[0].jq = !0, a0z[0].lC = 1, a0z[7].jq = !0)) : mr.sB(bM) ? (a9N = a6v.a9p.x0(bM)) && (a9f = ri.x7(a9N), a0z[8].jq = !0, player = mr.pU(a9f) ?
				i.df : mr.pW(a9f)) : (a9N = oh, pI.eu.a9q(i.gC, oh) && (a0z[0].jq = !0, a0z[0].lC = 1, a0z[1].jq = !0, a0z[1].lC = aK.vD[2] ? 0 : 2), mr.oi(bM) || (mr.pU(bM) ? (player = i.df, py(i.gC) ? (a0z[0].jq = !0, a0z[0].lC = 0) :
				pu(i.gC, player) && (a0z[0].jq = !0, a0z[0].lC = 3)) : (player = mr.pW(bM)) === i.gC ? (a0z[0].jq = !0, a0z[0].lC = 1, a0z[7].jq = !0) : (a0z[0].lC = 1, a0z[5].jq = function(player) {
				return !v.fX.fY(player) && !a9Z(player) && wi.a9a(1, [player], !1)
			}(player), a0z[7].jq = !v.fX.fY(player), pt(player, i.gC) ? (a0z[4].jq = !v.fX.fY(player) && !c3.a9s(player) && wi.a9a(0, [player], !1), a0z[6].jq = function(player) {
				if (0 === a9O.length) return !1;
				if (performance.now() > a9P + 4e3) return !(a9O = []);
				return !a9Z(player) && ! function(player) {
					var aA;
					if (i.j)
						for (aA = a9O.length - 1; 0 <= aA; aA--)
							if (!pt(player, a9O[aA])) return 1;
					return
				}(player)
			}(player), q0(i.gC, player) ? (a0z[0].lC = 0, a0z[0].jq = !0) : pu(i.gC, player) && (a0z[0].lC = 3, a0z[0].jq = !0), a0z[0].jq = this.a9u()) : (a0z[2].jq = !0, a0z[0].jq = !0)))))
		}
		return this.a9m(hT, hU)
	}, this.a9m = function(hT, hU) {
		return bF = hT - Math.floor(a9K / 2), bG = hU - Math.floor(a9K / 2), !!this.jq()
	}, this.hW = function(hT, hU) {
		return !!this.jq() && (kA.pE.jq ? !kA.pE.kR(hT, hU) && (kA.pE.jq = !1, bl.c8 = !0) : function(qk, hT, hU) {
			hT = a9V(hT, hU);
			if (0 <= a9X(hT)) return !1;
			if ((1 === hT || 6 === hT) && 0 <= a9X(2)) return !1;
			if ((6 === hT || 9 === hT) && 0 <= a9X(10)) return !1;
			return qk.dj(), bl.c8 = !0
		}(this, hT, hU))
	}, this.dj = function() {
		for (var aA = a0z.length - 1; 0 <= aA; aA--) a0z[aA].jq = !1, a0z[aA].lC = 0;
		kA.pE.jq = !1
	}, this.jq = function() {
		return this.a9u() || kA.pE.jq
	}, this.a9u = function() {
		for (var aH = a0z.length, aA = 0; aA < aH; aA++)
			if (a0z[aA].jq) return !0;
		return !1
	}, this.ai = function() {
		if (this.jq())
			if (kA.pE.jq) kA.pE.ai();
			else {
				var aA, ih = aj,
					cq = a0z,
					aH = cq.length,
					aA1 = (a9K + gap) / zoom;
				for (ih.imageSmoothingEnabled = !0, ih.setTransform(zoom, 0, 0, zoom, bF, bG), aA = 0; aA < aH; aA++) cq[aA].jq && aj.drawImage(cq[aA].canvas[cq[aA].lC], cq[aA].bF * aA1, cq[aA].bG * aA1);
				ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function a7N() {
	var aA2, aA3, size, gH, r6, id, aA4;

	function aA5(player) {
		return player < i.fd ? aA2 * player : aA2 * i.fd + aA3 * (player - i.fd)
	}
	this.h = function() {
		aA2 = i.fd < 16 ? 12 : 8, aA3 = 4;
		var aH = aA5(i.df);
		size = new Uint8Array(i.df), gH = new Uint16Array(aH), r6 = new Uint32Array(aH), id = new Uint16Array(aH), aA4 = new Uint8Array(aH)
	}, this.aA6 = function(a8a, aA7) {
		var aA8 = this.aA9(a8a, aA7),
			aA7 = (this.aAA(a8a, aA7, 0), v.fX.a0p(a8a, aA8));
		cZ.a0q(a8a, aA8 - aA7, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aAC = function(player, aA7) {
		var aAE, aA7 = function(player, aA7) {
			var aA, cn = aA5(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[cn + aA] && gH[cn + aA] === aA7) return aA;
			return size[player]
		}(player, aA7);
		aA7 !== size[player] && (aAE = r6[aA5(player) + aA7], this.a0r(player, aA7), this.rt(player, aAE, i.df))
	}, this.aAF = function(player, aA7) {
		for (var cn = aA5(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[cn + aA] && gH[cn + aA] === aA7) return !0;
		return !1
	}, this.aAG = function(player) {
		return player < i.fd ? size[player] < aA2 : size[player] < aA3
	}, this.gF = function(player) {
		return size[player]
	}, this.px = function(player, aA) {
		return gH[aA5(player) + aA]
	}, this.pw = function(player, aA) {
		return id[aA5(player) + aA]
	}, this.aAH = function(player, aAI) {
		for (var cn = aA5(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[cn + aA] === aAI) return aA;
		return -1
	}, this.a0f = function(player, aA) {
		return r6[aA5(player) + aA]
	}, this.aA9 = function(player, aA7) {
		for (var cn = aA5(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[cn + aA] && gH[cn + aA] === aA7) return r6[cn + aA];
		return 0
	}, this.aAJ = function(player) {
		for (var cn = aA5(player), ah = 0, aA = size[player] - 1; 0 <= aA; aA--) ah += r6[cn + aA];
		return ah
	}, this.aAK = function(player) {
		for (var cn = aA5(player), ah = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[cn + aA] && (ah += r6[cn + aA]);
		return ah
	}, this.gE = function(player) {
		for (var cn = aA5(player), aD = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[cn + aA] && aD++;
		return aD
	}, this.aAA = function(player, aA7, aAE) {
		for (var cn = aA5(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[cn + aA] && gH[cn + aA] === aA7 && (r6[cn + aA] = aAE)
	}, this.aAL = function(player, aA, aAE) {
		r6[aA5(player) + aA] = Math.max(aAE, 0)
	}, this.aAM = function(player, aA) {
		aA4[aA5(player) + aA] = 0
	}, this.a0g = function(player, aA) {
		return aA4[aA5(player) + aA]
	}, this.rt = function(player, aAE, aA7) {
		v.fX.aAN(aA7) && cZ.a5H[6 - v.fX.fY(player)]++;
		for (var cn = aA5(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[cn + aA] && gH[cn + aA] === aA7) return r6[cn + aA] += aAE, void(r6[cn + aA] = r6[cn + aA] > i.wD ? i.wD : r6[cn + aA]);
		gH[cn + size[player]] = aA7, r6[cn + size[player]] = aAE, id[cn + size[player]] = 0, aA4[cn + size[player]] = 1, size[player]++, player < i.fd && (aA7 === i.gC ? hu.rJ(player, 5) : player === i.gC && c3.s0(aA7))
	}, this.aAO = function(player, aAE, aAI) {
		var cn = aA5(player);
		gH[cn + size[player]] = 0, r6[cn + size[player]] = aAE, id[cn + size[player]] = aAI, aA4[cn + size[player]] = 0, size[player]++
	}, this.a0r = function(player, bm) {
		var ee, cn;
		if (0 !== size[player])
			for (cn = aA5(player), size[player]--, ee = bm; ee < size[player]; ee++) gH[cn + ee] = gH[cn + ee + 1], r6[cn + ee] = r6[cn + ee + 1], id[cn + ee] = id[cn + ee + 1], aA4[cn + ee] = aA4[cn + ee + 1]
	}, this.aAP = function(player) {
		for (var ee, cn, aAQ = [], aA = aF.aI - 1; 0 <= aA; aA--)
			for (cn = aA5(aF.aE[aA]), ee = size[aF.aE[aA]] - 1; 0 <= ee; ee--)
				if (0 === id[cn + ee] && gH[cn + ee] === player) {
					aAQ.push(aF.aE[aA]);
					break
				} return aAQ
	}
}

function dE(title, a05, aAR) {
	var aAS = document.createElement("div"),
		aAT = document.createElement("div"),
		a4n = document.createElement("div"),
		aAU = document.createElement("div"),
		aAV = document.createElement("div");
	this.dI = a4n, this.dl = a05, this.show = function() {
			!1 !== aAR ? document.body.appendChild(aAS) : (document.body.appendChild(aAT), document.body.appendChild(aAU))
		}, this.dj = function() {
			!1 !== aAR ? document.body.removeChild(aAS) : (document.body.removeChild(aAT), document.body.removeChild(aAU))
		}, this.gu = function() {
			var gx = v.w.mV(.1),
				a2a = v.w.mV(.08 + .04 * (r.aAa < 1));
			return {
				gx: gx,
				a2a: a2a,
				gw: r.an / r.f8 - gx - a2a
			}
		}, this.resize = function(aAb) {
			var aH = a05.length,
				gt = this.gu(),
				gx = gt.gx,
				a2a = gt.a2a;
			for (aAT.style.height = v.w.y1(gx), v.w.mU(aAT, 2), aAU.style.top = v.w.y1(r.an / r.f8 - a2a), aAU.style.height = v.w.y1(a2a), v.w.mU(aAU, 8), a4n.style.top = v.w.y1(gx), a4n.style.height = a4n.style.maxHeight = v.w.y1(gt.gw), aAT.style
				.font = v.w.ae(0, v.w.mV(.02, .3)), aAU.style.font = v.w.ae(0, v.w.mV(.02, .7)), a4n.style.font = v.w.ae(0, v.w.mV(.02, .7)), aA = 1; aA < aH; aA++) v.w.mU(a05[aA].button, 4);
			for (var aAc = 0, aA = 0; aA < aH; aA++) aAc += a05[aA].button.offsetWidth;
			if (aAb && aAc < aAU.offsetWidth)
				for (aA = 0; aA < aH; aA++) a05[aA].button.style.width = (100 * a05[aA].button.offsetWidth / aAc).toFixed(2) + "%";
			else
				for (aA = 0; aA < aH; aA++) a05[aA].button.style.width = "auto";
			aAU.aAd && (aAU.scrollLeft = aAU.aAd), aAb || this.resize(!0)
		}, this.ai = function() {
			var gt = this.gu(),
				aR = r.f8;
			aj.fillStyle = t.mQ, aj.fillRect(0, aR * gt.gx, r.d, aR * gt.gw)
		}, aAS.style.position = "absolute", aAS.style.top = "0", aAS.style.left = "0", aAS.style.width = "100%", aAS.style.height = "100%", aAT.style.position = "absolute", aAT.style.top = "0", aAT.style.left = "0", aAT.style.width = "100%", aAT
		.style.display = "flex", aAT.style.backgroundColor = t.mQ, aAU.style.position = "absolute", aAU.style.left = "0", aAU.style.width = "100%", v.w.aAW(aAU), aAV.style.height = aAV.style.maxHeight = "100%", a4n.style.position = "absolute", a4n
		.style.width = "100%", a4n.style.backgroundColor = t.mQ,
		function() {
			for (var aA = 0; aA < a05.length; aA++) a05[aA].button.style.height = "100%", a05[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < a05.length; aA++) aAV.appendChild(a05[aA].button);
	aAT.appendChild(function() {
		var aAZ = document.createElement("h1");
		return aAZ.textContent = title, aAZ.style.margin = "auto", aAZ.style.fontSize = 20 < title.length && r.an > r.d ? "1.8em" : "2.3em", aAZ.style.webkitTextStroke = "0.02em brown", aAZ.style.fontFamily = "Arial Black, Trebuchet MS", aAZ
	}()), aAU.appendChild(aAV), !1 !== aAR && (aAS.appendChild(a4n), aAS.appendChild(aAT), aAS.appendChild(aAU))
}

function a87() {
	var gap, vL, bF = [0, 0, 0, 0, 0],
		bG = [0, 0, 0, 0, 0],
		lD = [1, 1, 1, 1, 1],
		ah = [!0, !0, !0, !1, !1],
		aR = (this.aAe = [!0, !0, !0, !1, !1], null);
	this.aAf = function(jG, aAg) {
		aR = jG, ah = aAg, vL = [kH.a6L, kH.a6M, kH.a6N, kH.a6N, kH.aAh], this.h()
	}, this.h = function() {
		if (k9.nn()) {
			var aA, e = Math.floor((n.o.p() ? .261 : .195) * r.s),
				a52 = Math.floor(.9 * e),
				iE = Math.floor(.17 * a52);
			if (gap = n.o.p() ? 2 * ak.gap : ak.gap, lD[0] = e / aR[0].width, lD[1] = a52 / aR[1].width, lD[2] = iE / aR[2].height, lD[3] = iE / aR[3].height, lD[4] = iE / aR[4].height, lD[2] *= 1.7, lD[3] *= 1.07, bF[0] = gap, bF[1] = gap, bF[
				2] = gap, bF[3] = gap, bF[4] = Math.floor(2 * gap + lD[3] * aR[3].width), bG[0] = gap, bG[1] = bG[0] + gap + lD[0] * aR[0].height, bG[2] = bG[1] + gap + lD[1] * aR[1].height, bG[3] = bG[2] + gap + lD[2] * aR[2].height, bG[4] = bG[
					3], !ah[0])
				for (aA = 0; aA < 5; aA++) bG[aA] -= lD[0] * aR[0].height + gap;
			if (!ah[1])
				for (aA = 2; aA < 5; aA++) bG[aA] -= lD[1] * aR[1].height + gap
		}
	}, this.jq = function() {
		return !(7 === d0.d1() && n.o.p())
	}, this.hS = function(qF, qG) {
		if (aR && this.jq())
			for (var aA = ah.length - 1; 0 <= aA; aA--)
				if (ah[aA] && this.aAe[aA] && bF[aA] < qF && bG[aA] < qG && qF < bF[aA] + lD[aA] * aR[aA].width && qG < bG[aA] + lD[aA] * aR[aA].height) return d2.da(9, d2.d3, new uE("You are leaving Territorial.io.", v.w.aAi(vL[aA]))), !0;
		return !1
	}, this.ai = function() {
		if (aR && this.jq()) {
			var aA;
			for (aj.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) ah[aA] && this.aAe[aA] && (aj.setTransform(lD[aA], 0, 0, lD[aA], bF[aA], bG[aA]), aj.drawImage(aR[aA], 0, 0));
			aj.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a7B() {
	var eF, c, br, d, an, font, ef;

	function aAl(bi) {
		return bi < 10 ? "0" + bi : String(bi)
	}
	this.h = function() {
		ef = L(225)
	}, this.resize = function() {
		d = Math.floor((n.o.p() ? .53 : .36) * r.s), an = Math.floor(.065 * d), font = v.w.ae(1, Math.floor(.9 * an)), br--, this.setTime()
	}, this.a9 = function() {
		this.setTime() && (bl.c8 = !0)
	}, this.setTime = function() {
		for (var a4 = new Date, yb = a4.getUTCMinutes(), ya = a4.getUTCSeconds(), aAj = [0, 10, 20, 25, 30, 35, 40, 45, 50], aAk = (c = 3600 - 60 * yb - ya, c %= 300, 300), aA = 0; aA < aAj.length; aA++)
			if ((60 * yb + ya + c) % 3600 == 60 * aAj[aA]) {
				aAk = 0;
				break
			} return c += aAk, eF = ef + aAl(Math.floor(c / 60)) + ":" + aAl(c % 60), br !== (br = 60 * yb + ya) && (d = qI.measureText(eF, font), d += Math.floor(.4 * an), !0)
	}, this.ai = function() {
		aj.lineWidth = 1 + Math.floor(an / 15), aj.translate(r.d - an, Math.floor(.5 * (r.an + d))), aj.rotate(-Math.PI / 2), aj.fillStyle = t.u, aj.fillRect(0, 0, d, an), aj.strokeStyle = t.kb, aj.strokeRect(0, 0, d, an + 10), aj.fillStyle = t
			.kb, aj.font = font, v.w.textBaseline(aj, 1), v.w.textAlign(aj, 1), aj.fillText(eF, Math.floor(d / 2), Math.floor(.59 * an)), aj.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a7p() {
	this.wt = new aAm, this.h = function() {
		n.o.aAn()
	}, this.aAo = function() {
		return ce.cf.data[160].value
	}
}

function cM() {
	this.bW = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAp = function() {
		for (var aAq = [], bW = this.bW, aH = bW.length, aA = 0; aA < aH; aA++) aAq.push(bW[aA]);
		var hK = ce.cf.data[12].iX;
		for (aA = 0; aA < aH; aA++)
			if (aAq[aA] === hK) {
				aAq.splice(aA, 1), aH--;
				break
			} aAq.sort(), aH++, aAq.unshift(hK);
		try {
			if ("undefined" == typeof Intl) return aAq;
			for (aA = 0; aA < aH; aA++) {
				var ef = new Intl.DisplayNames([aAq[aA]], {
					type: "language"
				}).of(aAq[aA]);
				ef !== aAq[aA] && (aAq[aA] = aAq[aA] + ": " + ef)
			}
		} catch (f6) {
			console.log("error 3646: " + f6)
		}
		return aAq
	}, this.aAs = function(aAt) {
		for (var ef = ce.cf.data[12].value, aH = aAt.length, aA = 0; aA < aH; aA++)
			if (ef === aAt[aA].split(":")[0]) return aA;
		return 0
	}, this.d8 = function(aAu) {
		if (!aAu || aAu.length < 2) return 0;
		aAu = aAu.split("-")[0].toLowerCase();
		for (var bW = this.bW, aH = bW.length, aA = 0; aA < aH; aA++)
			if (aAu === bW[aA]) return aA;
		return -1
	}
}

function a7w() {
	this.d = 0, this.an = 0, this.e = 0, this.a52 = 0, this.aAv = 0, this.aAw = 0, this.iE = 0, this.iF = 0;
	var aAy = this.aAx = 0;
	this.aAz = 0, this.aB0 = 0, this.aB1 = 0, this.a8U = 0, this.bm = 0, this.vL = null, this.jq = !1, this.aB2 = -1, this.aB3 = !1, this.aB4 = [0, 0], this.cW = function() {
		this.vL = [L(226), L(148, 0, "Balance"), L(147, 0, "Interest"), L(227)]
	}, this.h = function() {
		this.jq = !1, this.aB2 = -1, this.aB3 = !1, this.resize()
	}, this.resize = function() {
		this.d = r.d < 1.369 * r.an ? r.d : 1.369 * r.an;
		var gl = n.o.p() && r.d < r.an ? 1 : n.o.p() ? .8 : r.d < r.an ? .65 : .59;
		this.d = Math.floor(gl * this.d), this.d -= n.o.p() && r.d < r.an ? 2 * ak.gap + 2 : 0, this.an = Math.floor(this.d / 1.369), this.a8U = Math.floor(this.an / 150), this.a8U = Math.max(this.a8U, 1.5), this.e = Math.floor(1 + .02 * this.d),
			this.a52 = Math.floor(1 + .04 * this.d), this.iE = this.a52, aAy = Math.floor(.75 * this.iE), this.iF = Math.floor(1 + .075 * this.d), this.aAz = Math.floor(1 + .1125 * this.d), this.aB0 = Math.floor(this.d * (n.o.p() ? .03 : .029)),
			this.aB0 = Math.max(this.aB0, 4), this.aB1 = Math.floor(.035 * this.d), this.aB1 = Math.max(this.aB1, 4), this.aAx = this.an - 2 * this.iE - this.iF - this.aAz, this.jq && this.aB5()
	}, this.hS = function(hT, hU) {
		var ss, a9z;
		return !!this.jq && (a9z = hT, ss = hU, hT -= bO.bP(r.d - this.d, 2), hU -= bO.bP(r.an - this.an, 2), hT < 0 || hU < 0 || hT >= this.d || hU >= this.an || hT >= this.d - this.aAz && hU < this.aAz ? -1 !== mI.hS(a9z, ss) || hy.hS(a9z,
			ss) || this.dj() : hU < this.aAz || (hU < this.an - this.iF ? (this.aB3 = !0, this.aB2 = (hT - 2 * this.e - this.aAv) / this.aAw, 3 !== this.bm && (bl.c8 = !0)) : (a9z = (a9z = Math.floor(hT / (this.d / this.vL.length))) < 0 ? 0 :
				a9z >= this.vL.length ? this.vL.length - 1 : a9z) !== this.bm && (this.bm = a9z, this.aB5(), bl.c8 = !0)), !0)
	}, this.hW = function(hT, hU) {
		return this.aB4[0] = hT, this.aB4[1] = hU, !(!this.jq || !this.aB3 || (hT -= bO.bP(r.d - this.d, 2), hU = this.aB2, this.aB2 = (hT - 2 * this.e - this.aAv) / this.aAw, (0 <= this.aB2 && this.aB2 <= 1 || 0 <= hU && hU <= 1) && (bl.c8 = !
			0), 0))
	}, this.tU = function() {
		this.aB3 && (this.aB3 = !1)
	}, this.tk = function() {
		this.jq ? this.dj() : this.show()
	}, this.show = function() {
		cZ.a6G < 2 || (this.jq = !0, this.aB5())
	}, this.dj = function() {
		this.jq = !1, this.aB2 = -1, bl.c8 = !0
	}, this.aB5 = function() {
		this.bm < 2 ? this.aAv = qI.measureText(v.dh.e6(cZ.max[this.bm]), v.w.ae(0, this.aB0)) : 2 === this.bm && (this.aAv = qI.measureText(v.dh.lY(6, 2), v.w.ae(0, this.aB0))), this.aAw = this.d - 2 * this.e - this.aAv - this.a52
	}, this.aP = function() {
		this.jq && this.aB5()
	}, this.ai = function() {
		this.jq && this.aB6()
	}, this.aB6 = function() {
		var bF = bO.bP(r.d - this.d, 2),
			bG = bO.bP(r.an - this.an, 2);
		aj.setTransform(1, 0, 0, 1, bF, bG), aj.fillStyle = t.ac, aj.fillRect(0, this.aAz, this.d, this.an - this.aAz), this.aB7(), this.o6(), aj.strokeRect(0, 0, this.d, this.an), v.w.textAlign(aj, 2), aj.font = v.w.ae(0, this.aB0), 0 === this
			.bm ? this.aB8(cZ.aB9, bF, bG) : 1 === this.bm ? this.aB8(cZ.a8q, bF, bG) : 2 === this.bm ? this.aBA(bF, bG) : 3 === this.bm && (this.aBB(bF, bG), this.aBC(bF, bG)), mI.hB(Math.floor(bF + this.d - .725 * this.aAz), Math.floor(bG +
				.275 * this.aAz), Math.floor(.45 * this.aAz)), aj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aB7 = function() {
		var aA, a4;
		for (aj.lineWidth = this.a8U, v.w.textBaseline(aj, 1), v.w.textAlign(aj, 1), aj.strokeStyle = t.u, aj.font = v.w.ae(1, this.aB1), a4 = this.d / this.vL.length, aj.fillStyle = t.a3R, aj.fillRect(this.bm * a4, this.an - this.iF, a4, this
				.iF), aj.fillStyle = t.u, aj.fillRect(0, this.an - this.iF - .5 * this.a8U, this.d, this.a8U), aA = 1; aA <= 3; aA++) aj.fillRect(aA * a4, this.an - this.iF, this.a8U, this.iF);
		for (aA = this.vL.length - 1; 0 <= aA; aA--) aj.fillText(v.f.s8(this.vL[aA], 0, .9 * a4), (aA + .5) * a4, this.an - .46 * this.iF)
	}, this.o6 = function() {
		aj.fillStyle = t.a3f, aj.fillRect(0, 0, this.d, this.aAz), aj.fillStyle = t.u, aj.fillRect(0, this.aAz - .5 * this.a8U, this.d, this.a8U), aj.font = v.w.ae(1, .39 * this.aAz), aj.fillText(v.f.s8(L(228), 0, .8 * this.d), Math.floor(this
			.d / 2), Math.floor(.55 * this.aAz))
	}, this.aB8 = function(bW, bF, bG) {
		var cn = cZ.max[this.bm],
			qo = (aj.setTransform(1, 0, 0, 1, bF + 2 * this.e + this.aAv, bG + this.iE + this.aAz), aj.lineWidth = 2, this.aAx / Math.sqrt(cn));
		aj.beginPath(), aj.moveTo(this.aAw, this.aAx - qo * Math.sqrt(bW[cZ.a6G - 1]));
		for (var aA = cZ.a6G - 2; 0 <= aA; aA--) aj.lineTo(aA * this.aAw / (cZ.a6G - 1), this.aAx - qo * Math.sqrt(bW[aA]));
		aj.stroke();
		bF = this.hB(bW, qo, .5);
		bF < .95 && aj.fillText(v.dh.e6(cn), -this.e, 0), .05 < Math.abs(bF - .5) && aj.fillText(v.dh.e6(Math.floor(cn / 4)), -this.e, Math.floor(this.aAx / 2)), .05 < bF && aj.fillText("0", -this.e, this.aAx)
	}, this.aBA = function(bF, bG) {
		aj.setTransform(1, 0, 0, 1, bF + 2 * this.e + this.aAv, bG + this.iE + this.aAz), aj.lineWidth = 2;
		var qo = this.aAx / Math.max(cZ.max[this.bm], 1);
		aj.beginPath(), aj.moveTo(this.aAw, this.aAx - qo * cZ.vu[cZ.a6G - 1]);
		for (var aA = cZ.a6G - 2; 0 <= aA; aA--) aj.lineTo(aA * this.aAw / (cZ.a6G - 1), this.aAx - qo * cZ.vu[aA]);
		aj.stroke();
		bF = this.hB(cZ.vu, qo, 1), bG = cZ.max[this.bm] / 100;
		bF < .95 && aj.fillText(v.dh.lY(bG, 2), -this.e, 0), .05 < Math.abs(bF - .5) && aj.fillText(v.dh.lY(bG / 2, 2), -this.e, Math.floor(this.aAx / 2)), .05 < bF && aj.fillText(v.dh.lY(0, 2), -this.e, this.aAx)
	}, this.aBB = function(bF, bG) {
		aj.setTransform(1, 0, 0, 1, bF + .34 * this.d, bG + 2 * aAy + this.aAz), v.w.textAlign(aj, 2);
		for (var aBD = this.an - 4 * aAy - this.iF - this.aAz, bW = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) aj.fillText(v.f.s8(cZ.aBE[bW[aA]], 0, .31 * this.d), 0, aA * aBD / 9);
		var ah = cZ.a5H;
		for (aj.setTransform(1, 0, 0, 1, bF + .39 * this.d, bG + 2 * aAy + this.aAz), v.w.textAlign(aj, 0), aj.fillText(v.dh.lY(100 * ah[0] / (1024 * Math.max(ah[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) aj.fillText(ah[bW[aA]].toString(), 0,
			aA * aBD / 9);
		aj.fillText(v.dh.lY(100 * (1 - a5.a6[i.gC] / ah[7]), 0), 0, aBD)
	}, this.aBC = function(bF, bG) {
		aj.setTransform(1, 0, 0, 1, bF + .79 * this.d, bG + 2 * aAy + this.aAz), v.w.textAlign(aj, 2);
		var aA, aBD = this.an - 4 * aAy - this.iF - this.aAz;
		for (aj.fillStyle = t.a3N, aA = 2; 0 <= aA; aA--) aj.fillText(v.f.s8(cZ.aBE[aA + 8], 0, .31 * this.d), 0, aA * aBD / 9);
		aj.fillText(v.f.s8(cZ.aBE[18], 0, .31 * this.d), 0, 3 * aBD / 9), aj.fillStyle = t.a3M, aj.fillText(v.f.s8(cZ.aBE[11], 0, .31 * this.d), 0, 4 * aBD / 9), aj.fillStyle = t.a3Z, aj.fillText(v.f.s8(cZ.aBE[13], 0, .31 * this.d), 0, 5 * aBD /
				9), aj.fillText(v.f.s8(cZ.aBE[15], 0, .31 * this.d), 0, 6 * aBD / 9), aj.fillText(v.f.s8(cZ.aBE[16], 0, .31 * this.d), 0, 7 * aBD / 9), aj.fillText(v.f.s8(cZ.aBE[12], 0, .31 * this.d), 0, 8 * aBD / 9), aj.fillStyle = t.vF, aj
			.fillText(v.f.s8(cZ.aBE[17], 0, .31 * this.d), 0, aBD), aj.fillStyle = t.a3N;
		var ah = cZ.a5H,
			aBF = ah[8] + ah[9] + ah[10] + ah[18],
			aBF = v.dh.e6(aBF),
			hO = aj.measureText(aBF).width,
			bF = (aj.setTransform(1, 0, 0, 1, bF + .83 * this.d + hO, bG + 2 * aAy + this.aAz), aj.fillText(v.dh.e6(ah[8]), 0, 0), aj.fillText(v.dh.e6(ah[9]), 0, aBD / 9), aj.fillText(v.dh.e6(ah[10]), 0, 2 * aBD / 9), aj.fillText(v.dh.e6(ah[18]),
				0, 3 * aBD / 9), aj.fillStyle = t.a3M, aj.fillText(aBF, 0, 4 * aBD / 9), aj.fillStyle = t.a3Z, aj.fillText(v.dh.e6(ah[13]), 0, 5 * aBD / 9), aj.fillText(v.dh.e6(ah[15]), 0, 6 * aBD / 9), aj.fillText(v.dh.e6(ah[16]), 0, 7 *
				aBD / 9), aj.fillText(v.dh.e6(ah[12]), 0, 8 * aBD / 9), ah[12] + ah[13] + ah[15] + ah[16]);
		aj.fillStyle = t.vF, aj.fillText(v.dh.e6(bF), 0, aBD), aj.fillStyle = t.u
	}, this.hB = function(bW, qo, aBH) {
		var aA, f6, mb;
		return this.aB2 < 0 || 1 < this.aB2 ? .25 : (aA = this.aB2 * (cZ.a6G - 1), mb = bW[f6 = Math.floor(aA)], mb += (aA - f6) * (bW[f6 < cZ.a6G - 1 ? f6 + 1 : f6] - mb), aj.strokeStyle = t.a3C, .04 < this.aB2 && this.aBI(0, this.aAx - qo *
				Math.pow(mb, aBH), aA * this.aAw / (cZ.a6G - 1), this.aAx - qo * Math.pow(mb, aBH)), .04 < mb / cZ.max[this.bm] && this.aBI(aA * this.aAw / (cZ.a6G - 1), this.aAx, aA * this.aAw / (cZ.a6G - 1), this.aAx - qo * Math.pow(mb,
				aBH)), aj.fillStyle = t.a3b, aj.beginPath(), aj.arc(aA * this.aAw / (cZ.a6G - 1), this.aAx - qo * Math.pow(mb, aBH), Math.max(2, .014 * this.an), 0, 2 * Math.PI), aj.fill(), bW = this.aB2 * bl.cA, bW = 0 === a5.gB[i.gC] ? Math
			.floor(bW * cZ.aBJ) : Math.floor(bW * bl.ff()), aj.fillStyle = t.u, aj.fillText(1 === aBH ? v.dh.lY(mb / 100, 2) : v.dh.e6(Math.floor(mb)), -this.e, this.aAx - qo * Math.pow(mb, aBH)), v.w.textAlign(aj, 1), aj.fillText(c0.vh(bW),
				aA * this.aAw / (cZ.a6G - 1), this.aAx + this.aB0 - (n.o.p() ? 2 : 0) - this.a8U), v.w.textAlign(aj, 2), qo * Math.pow(mb, aBH) / this.aAx)
	}, this.aBI = function(jr, h6, oC, oD) {
		aj.beginPath(), aj.moveTo(jr, h6), aj.lineTo(oC, oD), aj.stroke()
	}
}

function aBK() {
	function aBO(bW) {
		if (0 === bW.length) ce.cx.cy(116, "");
		else {
			for (var aBP = bW[0], aA = 1; aA < bW.length; aA++) aBP += ";" + bW[aA];
			ce.cx.cy(116, aBP)
		}
	}
	this.aBL = function() {
		ce.cf.data[110].value.length && (ce.cf.data[106].value = ce.cf.data[110], ce.cx.cy(110, ""), this.aBM())
	}, this.aBM = function() {
		var bW = ce.cf.data[116].value.split(";");
		for (bW.length % 2 == 1 && bW.pop(), bW.unshift(ce.cf.data[106].value), bW.unshift(ce.cf.data[105].value), aA = 2; aA < bW.length; aA += 2)
			if (bW[aA] === bW[0]) {
				bW.splice(aA, 2);
				break
			} for (var aBN = [], aA = 0; aA < bW.length; aA += 2) aBN.push(bW[aA]);
		aBO(bW), ce.cf.data[117].value = 0, ce.cf.data[117].dZ = aBN
	}, this.yy = function(bm) {
		ce.cf.data[117].dZ.splice(bm, 1), ce.cf.data[117].value = Math.min(bm, ce.cf.data[117].dZ.length - 1);
		var bW = ce.cf.data[116].value.split(";");
		bW.splice(2 * bm, 2), aBO(bW)
	}, this.yz = function(bm) {
		var bW = ce.cf.data[116].value.split(";");
		return {
			e7: bW[2 * bm],
			password: bW[2 * bm + 1]
		}
	}, this.iN = function() {
		var ah = bO.hQ(ce.cf.data[121].value, -1, 262143);
		return ah = -1 === ah ? ~~(262144 * Math.random()) : ah
	}
}

function aBQ(aBR, aBS, aBT, aBU, aBV) {
	var self;
	this.a2T = document.createElement("span"), this.resize = function() {
			this.a2T.style.fontSize = ((aBU - aBT) * aBS.offsetHeight).toFixed(1) + "px"
		}, (self = this).a2T.textContent = aBR, self.a2T.style.color = t.u, self.a2T.style.font = "inherit", self.a2T.style.margin = "0.1em 0.6em", self.a2T.style.pointerEvents = "none", aBV && (self.a2T.style.fontWeight = "bold"), self.a2T.style
		.whiteSpace = "nowrap", self.a2T.style.display = "block", aBS.appendChild(self.a2T)
}

function aBW() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.kB = 13, this.kD = this.emojis.length, this.kE = 676, this.kC = 1024, this.uR = this.emojis.indexOf("💀"), this.aBX = this.uR + 1, this.aBY = this.emojis.indexOf("🥇"), this.a9U = this.emojis.indexOf("😊"), this.kW = function(ah) {
		return ah < this.kE ? String.fromCharCode(55356, 56806 + bO.bP(ah, 26), 55356, 56806 + ah % 26) : this.emojis[Math.min(ah - this.kE, this.kD - 1)]
	}, this.kG = function(ef) {
		for (var aH = ef.length - 2, bW = [], aA = 0; aA < aH; aA++) {
			var ku = ef.charCodeAt(aA) - 56806,
				kv = ef.charCodeAt(aA + 2) - 56806;
			0 <= ku && ku < 26 && 0 <= kv && kv < 26 && (bW.push(26 * ku + kv), aA += 3)
		}
		return bW
	}, this.aBZ = function(ah) {
		return ah < this.kE
	}, this.aBa = function(ah) {
		return ah >= 1024 - this.kB
	}, this.aBb = function(ah) {
		return ah >= this.kE && ah < this.kE + this.aBX
	}
}

function aBc() {
	this.aBd = !1, this.a9 = function() {
		bl.ff() % 250 != 249 || i.i0 || (ct.cu.nE(+(this.aBd && a5.gB[i.gC]), aF.aI + pI.d4.v3), this.aBd = !1)
	}
}

function z6() {
	var d, an, aBe;

	function aBv(sp, gl, aBt, aBi, pE) {
		gl = aBu(sp, gl + 1 + 2 * aBi & 3);
		! function(sp, rS) {
			return 1 < Math.abs(sp % d - rS % d) || 1 < Math.abs(aBx(sp) - aBx(rS))
		}(sp, gl) && 0 === pE[gl << 2] && (pE[gl << 2] = aBt)
	}

	function aBx(aL) {
		return Math.floor((aL + .5) / d) % an
	}

	function aBu(aL, gl) {
		return aL + aBe[gl]
	}
	this.jd = function(ef) {
		var aA, aBf, aH, aBg, aBj = jX;
		for (jc.e5.aBk(jc.e5.aBl(ef)), ip.oX.nJ[ip.oY].d = ip.mg = d = aBj.jb(12), ip.oX.nJ[ip.oY].an = ip.mj = an = aBj.jb(12), aBe = [-d, -1, d, 1], ip.iq = document.createElement("canvas"), ip.iq.width = ip.mg, ip.iq.height = ip.mj, ip.om = ip
			.iq.getContext("2d", {
				alpha: !1
			}), ip.on = ip.mf = null, ip.on = ip.om.getImageData(0, 0, ip.mg, ip.mj), ip.mf = ip.on.data, v.cj.aBp(ip.mf), aH = aBj.jb(12), aBf = aBj.jb(5), aBg = aBm(d * an - 1), aA = 0; aA < aH; aA++) ! function(cn, aL, aBh, aBi) {
			var aA, gl, aBj = jX,
				pE = ip.mf,
				a4O = aL,
				aBq = aL,
				aBr = 0,
				aBs = 1 + aBh,
				aBt = 2 - aBh;
			for (pE[aL << 2] = aBs, aA = 0; aA < cn; aA++) gl = aBj.jb(2), aL = aBu(aL, gl), pE[aL << 2] === aBs ? aBr % 2 == 1 && aBv(aBq, aBr + 2 * aBi + 3, aBt, aBi, pE) : pE[aL << 2] = aBs, aBv(aL, gl, aBt, aBi, pE), aBv(aBq, gl, aBt,
				aBi, pE), aBq = aL, aBr = gl;
			aBu(aL, 0) === a4O ? (aBv(aL, 0, aBt, aBi, pE), aBv(a4O, 0, aBt, aBi, pE)) : aBu(aL, 1) === a4O && (aBv(aL, 0, aBt, aBi, pE), aBv(a4O, 2, aBt, aBi, pE));
			0 === cn && (aBv(a4O, 0, aBt, aBi, pE), aBv(a4O, 2, aBt, aBi, pE))
		}(aBj.jb(aBf), aBj.jb(aBg), 1 === aBj.jb(1), 1 === aBj.jb(1));
		var bF, bG, gp, aBy, aBz, aC0, pE = ip.mf,
			aC1 = !0,
			nW = ip.oX.nJ[ip.oY].nW,
			nX = ip.oX.nJ[ip.oY].nX;
		for (bG = 0; bG < an; bG++)
			for (aBy = !0, aBz = aC1, bF = aC0 = 0; bF < d; bF++) gp = 4 * bG * d + 4 * bF, aC0 <= bF && 0 < pE[gp] && (aBz = 2 === pE[gp], aBy) && (aBy = !1, aBz !== aC1) ? (aC1 = aBz, aC0 = bF + 1, bF = -1) : (aBz ? (pE[gp] = nX[0], pE[1 +
				gp] = nX[1], pE[2 + gp] = nX[2]) : (pE[gp] = nW[0], pE[1 + gp] = nW[1], pE[2 + gp] = nW[2]), pE[3 + gp] = 255);
		ip.om.putImageData(ip.on, 0, 0), ip.a43 = !0, ip.oa.h(), bl.c8 = !0
	}
}

function aC2(aC3, aC4, aC5, aC6, a2D, a2E) {
	var a58 = document.createElement("div"),
		aC7 = document.createElement("div"),
		aC8 = document.createElement("div"),
		aC9 = document.createElement("div"),
		aCA = document.createElement("div"),
		a59 = document.createElement("div"),
		aCB = document.createElement("div"),
		aCC = document.createElement("div"),
		aCD = document.createElement("span"),
		aCE = document.createElement("div");
	this.aCF = new a2C(a2D, a2E), this.aCG = new a57(a2E), this.aCH = [aC3, aC4, aC5, aC6], this.aCK = function(g0) {
		g0 = (g0 / 10).toFixed(1) + "%";
		aCC.style.width = g0, aCD.innerHTML = g0
	}, this.aCL = function() {
		this.aCG.dj(a59), this.aCF.show(a59)
	}, this.aCM = function() {
		this.aCF.dj(a59), this.aCG.show(a59)
	}, this.aCN = function() {
		return aC7
	}, this.show = function() {
		document.body.appendChild(a58)
	}, this.dj = function() {
		document.body.removeChild(a58)
	}, this.resize = function(aCO) {
		var aCP = 1 - .4 * n.o.p() * (r.d > 1.6 * r.an),
			nw = v.w.mV(.05 * aCP),
			aCQ = r.an > r.d,
			aCR = v.w.mV(.07 * aCP + .03 * aCQ),
			aCS = v.w.mV(.04 + .02 * aCQ),
			aCQ = v.w.mV(.02 * aCP + .01 * aCQ),
			aCU = v.w.mV(.025);
		a58.style.font = v.w.ae(0, aCU), aCP < 1 && (aCU = v.w.ae(0, aCP * aCU), aC8.style.font = aCU, aCA.style.font = aCU, aCE.style.font = aCU, aCB.style.font = aCU, aC9.style.font = aCU), aC7.style.height = v.w.y1(nw), aC7.style.font = v.w
			.ae(0, .72 * nw), v.w.mU(aC7, 2), aC8.style.top = v.w.y1(nw), aC8.style.height = v.w.y1(aCR), v.w.mU(aC8, 2), aC9.style.font = v.w.ae(0, aCP * v.w.mV(.02)), aC9.style.top = v.w.y1(nw + aCR), aC9.style.height = v.w.y1(aCS), v.w.mU(aC9,
				2), aCA.style.top = v.w.y1(nw + aCR + aCS), aCA.style.height = v.w.y1(aCR), v.w.mU(aCA, 2), a59.style.top = v.w.y1(nw + aCR + aCS + aCR), a59.style.height = v.w.y1(r.an / r.f8 - nw - 3 * aCR - aCS - aCQ), aCB.style.top = v.w.y1(r
				.an / r.f8 - aCR - aCQ), aCB.style.height = v.w.y1(aCQ), v.w.mU(aCB, 8), aCD.style.font = v.w.ae(0, .8 * aCQ), aCE.style.top = v.w.y1(r.an / r.f8 - aCR), aCE.style.height = v.w.y1(aCR), v.w.mU(aCE, 8), aC3.resize(aC8), aC4.resize(
				aC8), aC5.resize(aC8), aC6.resize(aC8), aCO ? this.aCF.resize(a59) : this.aCG.resize()
	};
	a2D = this;
	a58.style.position = "absolute", a58.style.top = "0", a58.style.left = "0", a58.style.width = "100%", a58.style.height = "100%", a58.style.backgroundColor = t.a3A, p5.p6() || (a58.style.backdropFilter = "blur(4px)", a58.style
		.webkitBackdropFilter = "blur(4px)"), aC7.style.position = "absolute", aC7.style.top = "0", aC7.style.left = "0", aC7.style.width = "100%", aC7.style.display = "flex", aC7.style.alignItems = "center";
	for (var bW = [aC8, aC9, aCA, aCE], aA = 0; aA < bW.length; aA++) bW[aA].style.position = "absolute", bW[aA].style.left = "0", bW[aA].style.width = "100%", v.w.aAW(bW[aA]);
	a59.style.position = "absolute", a59.style.left = "0", a59.style.width = "100%", a59.style.font = "inherit", aCB.style.position = "absolute", aCB.style.left = "0", aCB.style.width = "100%", aCC.style.position = "absolute", aCC.style.top = "0",
		aCC.style.left = "0", aCC.style.height = "100%", aCC.style.width = "50%", aCC.style.backgroundColor = t.a3R, aCD.innerHTML = "", aCD.style.position = "absolute", aCD.style.top = "50%", aCD.style.left = "50%", aCD.style.transform =
		"translate(-50%, -50%)", aC7.appendChild(function() {
			var iF = document.createElement("h1");
			return iF.textContent = L(229), iF.style.margin = "0 auto 0.15em auto", iF.style.webkitTextStroke = "0.02em brown", iF.style.fontFamily = "Arial Black, Trebuchet MS", iF.style.fontSize = "inherit", iF.style.fontWeight = "inherit", iF
		}()), aC8.appendChild(aC3.hZ), aC9.appendChild(aC4.hZ), aCA.appendChild(aC5.hZ), aCB.appendChild(aCC), aCB.appendChild(aCD), aCE.appendChild(aC6.hZ), a58.appendChild(aC7), a58.appendChild(aC8), a58.appendChild(aC9), a58.appendChild(aCA), a58
		.appendChild(a59), a58.appendChild(aCB), a58.appendChild(aCE), a2D.aCG.show(a59)
}

function wU() {
	(aCW = void 0 === aCW ? document.createElement("canvas") : aCW).width = ip.mg, aCW.height = ip.mj, wc = aCW.getContext("2d", {
		alpha: !0
	}), wd = md = null, wd = wc.getImageData(0, 0, ip.mg, ip.mj), md = wd.data, v.cj.aBp(md)
}

function a7v() {
	var aCX = 501,
		aCY = (this.aB9 = new Uint32Array(aCX), this.a8q = new Uint32Array(aCX), this.vu = new Uint16Array(aCX), this.a6G = 0, 1),
		aCZ = 0;

	function aCa(self) {
		self.max.fill(0)
	}

	function aCg(self, aA) {
		self.max[0] = Math.max(self.aB9[aA], self.max[0]), self.max[1] = Math.max(self.a8q[aA], self.max[1]), self.max[2] = Math.max(self.vu[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aBJ = 0, this.a5H = new Array(21), this.aBE = null, this.cW = function() {
		this.aBE = [L(230), L(231), L(232), L(233), L(234), L(235), L(236), L(237), L(24), L(25), L(238), L(239), L(240), L(241), "", L(242), L(243), L(244), L(22), L(245), L(246)]
	}, this.h = function() {
		this.a6G = 0, aCY = 1, this.aBJ = 0, aCZ = 0, aCa(this), this.a5H.fill(0)
	}, this.aCb = function(player, gI) {
		v.fX.aAN(player) && (this.a5H[0] += gI + 1, this.a5H[1]++, this.a5H[12] += aK.a8l[1])
	}, this.sf = function(player, a1x) {
		__fx.donationsTracker.logDonation(player, a1x, aK.a8l[0]);
		player === i.gC && (hu.sf(aK.a8l[0], aK.a8l[1], a1x), this.a5H[12] += aK.a8l[1], this.a5H[16] += aK.a8l[0]), a1x === i.gC && (hu.si(aK.a8l[0], player), this.a5H[10] += aK.a8l[0])
	}, this.aCc = function(player) {
		v.fX.aAN(player) && (this.a5H[2]++, this.a5H[12] += aK.a8l[1])
	}, this.aCd = function(player) {
		v.fX.aAN(player) && (this.a5H[19]++, this.a5H[12] += aK.a8l[1])
	}, this.aCe = function(player) {
		v.fX.aAN(player) && this.a5H[20]++
	}, this.a0q = function(player, lj, bm) {
		v.fX.aAN(player) && (this.a5H[bm] += lj)
	}, this.a9 = function() {
		var self;
		this.aBJ || 0 < aCZ-- || ((self = this).aB9[self.a6G] = a5.a6[i.gC], self.a8q[self.a6G] = a5.s9[i.gC], self.vu[self.a6G] = ve.vv(i.gC), aCg(self, self.a6G), self.a6G++, self.a6G === aCX && function(self) {
			aCa(self), aCg(self, 0), self.a6G = 1 + bO.bP(aCX, 2);
			for (var aA = 1; aA < self.a6G; aA++) self.aB9[aA] = self.aB9[2 * aA], self.a8q[aA] = self.a8q[2 * aA], self.vu[aA] = self.vu[2 * aA], aCg(self, aA);
			aCY *= 2
		}(self), aCZ = aCY - 1, cY.aP(), 0 === a5.gB[i.gC] && (self.aBJ = bl.ff()))
	}
}

function uI(a2Z, hf) {
	var hZ = document.createElement("div");
	this.jM = hZ, this.resize = function() {
		hZ.style.padding = v.w.y1(ak.a4c), hZ.style.lineHeight = v.w.y1(v.w.mV(.035))
	}, a2Z.style.overflowX = "hidden", a2Z.style.overflowY = "auto", hZ.innerHTML = hf, a2Z.appendChild(hZ)
}

function aCi() {
	this.aCj = 0, this.h = function() {
		this.aCj = 0
	}, this.a9 = function() {
		if (!this.aCj && bl.ff() % 30 == 7 && v.fX.aCm(80) && (wX.performance.aCj = 1)) {
			if (i.j) {
				var z = vr.a0();
				if (a1.a2[z]) {
					vr.aB(z);
					var bW = aK.aJ,
						aH = aK.aM[0];
					if (0 !== aH)
						for (var aCp = Math.min(100 + 10 * (aH - 1), 400), aA = 0; aA < aH; aA++) cX.a00(bW[aA], aCp)
				}
			}
			cX.a00(a7[0], 100)
		}
	}
}

function a7F() {
	var bW, os, aCq, a1c, gap, aCr, aCs, aCt, aCu, aCv, qH, aCw, aCx, aBH, qV, oJ, aCy;

	function aD1() {
		a1c = Math.floor(.2 * (n.o.p() ? .07 : .035) * r.s), a1c = ra(n.o.p() ? 3 : 1, a1c);
		var aD3 = r.d / (bW.length + gap);
		a1c = a1c < aD3 ? aD3 : a1c, qV = Math.floor((1 - gap) * a1c), os = 0, aD4()
	}

	function aD4() {
		os = (os = os < -20 ? -20 : os) > (bW.length - 15) * a1c ? (bW.length - 15) * a1c : os, aCs = Math.floor(os / a1c), aCt = (aCt = aCs + Math.floor(r.d / a1c)) > bW.length - 1 ? bW.length - 1 : aCt, aCs = (aCs = aCt < aCs ? aCt : aCs) < 0 ? 0 :
			aCs;
		var cn = aCt;
		aCr = aCq / bW[cn];
		for (var aA = aCt - 1; aCs <= aA; aA--) bW[aA] > bW[cn] && (cn = aA, aCr = aCq / Math.pow(bW[aA], aBH))
	}

	function aD6(bF) {
		bF = Math.floor((os + r.d - bF - gap * a1c) / a1c);
		return (bF = bF < -1 ? -1 : -1 === bF ? 0 : bF > bW.length - 1 ? -1 : bF) !== aCu && (aCu = bF, -1 === oJ && 0 === aCu && o4.a2l && (oJ = setInterval(aD7, 100)), 1)
	}

	function aD8(aA) {
		var vH = Math.floor(aCr * Math.pow(bW[aA], aBH));
		aj.fillRect(os + r.d - (aA + 1) * a1c, r.an - vH, qV, vH)
	}

	function aD7() {
		var aL;
		0 !== (aCu = 8 === d0.d1() ? -1 : aCu) ? (aCy = (new Date).getTime(), clearInterval(oJ), oJ = -1) : (aL = bW[1] / 864e3, -1 !== aCy && (aL += ((new Date).getTime() - aCy) * bW[1] / 864e5, aCy = -1), 0 < aL && (bW[0] += Math.floor(aL), bl
			.c8 = !0))
	}
	this.a2l = !1, this.h = function() {
		aCy = oJ = -1, aCu = -(aBH = 1), this.aCz = !1, aCx = 0, aCw = new Date, os = 0, gap = .3, bW = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aCq = Math.floor(.15 * r.an), aCv = (aCv = Math.floor((n.o.p() ? .018 : .0137) * r.s)) < 2 ? 2 : aCv, qH = v.w.ae(1, aCv), aD1()
	}, this.aD2 = function(co) {
		var aA;
		for (this.a2l = !0, aA = 0; aA < co.length; aA++) bW.unshift(co[aA]);
		aD1(), bl.c8 = !0
	}, this.a13 = function() {
		aD4()
	}, this.hW = function(bF, bG) {
		bG > r.an - .6 * aCq ? this.aCz ? bF !== aCx && (os += bF - aCx, aCx = bF, aD4(), aD6(bF), this.aCz = -1 !== aCu, bl.c8 = !0) : aD6(bF) && (bl.c8 = !0) : this.tT()
	}, this.tT = function() {
		-1 !== aCu && (this.aCz = !1, aCu = -1, bl.c8 = !0)
	}, this.qp = function(bF, deltaY) {
		-1 !== aCu && (os += Math.floor(deltaY), aD4(), aD6(bF), bl.c8 = !0)
	}, this.hS = function(bF, bG) {
		this.hW(bF, bG), -1 !== aCu && (aCx = bF, this.aCz = !0)
	}, this.tU = function() {
		-1 !== aCu && (this.aCz = !1)
	}, this.ai = function() {
		aj.fillStyle = t.a3C;
		for (var aDA, month, a4, a52, aDD, aDE, h6, aDF, aDG, aA = aCt; aCs <= aA; aA--) aD8(aA);
		this.a2l && 0 === aCs && (aj.fillStyle = t.a3a, aD8(0)), -1 !== aCu && (aj.fillStyle = t.a3B, aD8(aCu)), -1 !== aCu && (aj.font = qH, v.w.textBaseline(aj, 2), (a4 = new Date).setTime(aCw.getTime() - 1e3 * aCu * 60 * 60 * 24), month =
			"month", aDA = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(a4), aDA = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(a4)), aDA = aDA + ", " + a4.getUTCDate() + " " + month + " " + a4.getFullYear(), month = 1 === bW[aCu] ? L(247) : L(248), month = v.dh.e6(bW[aCu]) + " " + month, a4 = Math.floor(aj.measureText(aDA).width), a52 = Math
			.floor(aj.measureText(month).width), aDD = Math.floor(.5 * (a4 + aCv)), aDE = (aDE = os + r.d - (aCu + 1) * a1c) < aDD ? aDD : aDE > r.d - aDD ? r.d - aDD : aDE, h6 = r.an - Math.floor(aCr * Math.pow(bW[aCu], aBH)), aDF = Math
			.floor(1.1 * aCv), aDG = h6 > r.an - aDF ? r.an - aDF : h6, aj.fillStyle = t.ac, aj.fillRect(r.d - a52 - aCv, aDG - aDF, a52 + aCv, aDF), aj.fillRect(aDE - aDD, r.an - aDF, a4 + aCv, aDF), aj.fillStyle = t.u, v.w.textAlign(aj, 2),
			aj.fillText(month, Math.floor(r.d - .5 * aCv), aDG), v.w.textAlign(aj, 1), aj.fillText(aDA, aDE, r.an), aj.strokeStyle = t.a3D, aj.lineWidth = 1, aj.beginPath(), aj.moveTo(0, h6), aj.lineTo(r.d, h6), aj.closePath(), aj.stroke())
	}
}

function a81() {
	this.aDH = new aDI
}

function a8K() {
	this.a9 = function(player) {
		var aDJ;
		return !!i.data.passableWater && 0 !== a5.pa[player].length && pI.d4.v3 !== pI.d4.zo && !((aDJ = pI.d4.aDJ[player]) >= Math.max(3 * wX.performance.aCj, cX.zo[cX.r6[player]]) || aDJ === pI.d4.aDK || !v.fX.aDL(player, cX.zl[cX.r6[player]],
			32, 0) || !wX.aDM.a9(player) && !wX.aDN.a9(player) || ! function(q2) {
			var aDR = aK.vD[1] + ri.aDS[aK.vD[2] - 1] << 2;
			if (mr.pU(aDR)) return 1;
			return aDR = mr.pW(aDR), q2 !== aDR && !!pt(q2, aDR)
		}(player)) && function(player) {
			return v.fX.a8o(player), pI.d4.aDQ(player), !0
		}(player)
	}
}

function de(aDT, aDU, aDV, aDW) {
	var aDX = document.createElement("textarea"),
		aDY = (this.f6 = aDX, !0);

	function aDc() {
		aDX.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aDU && v.w.mU(aDX, 5)
		}, this.dg = function(ag) {
			aDX.value = ag
		}, this.dQ = function() {
			return aDX.value
		}, this.aDa = function() {
			aDX.select()
		}, this.clear = function() {
			aDX.value = ""
		}, this.aDb = function() {
			aDY && navigator.clipboard ? (aDX.select(), navigator.clipboard.writeText(aDX.value).catch(function() {
				aDY = !1, aDc()
			})) : aDc()
		}, aDX.setAttribute("id", "textArea" + d2.d4.aDZ++), aDX.setAttribute("autocomplete", "off"), aDT && aDX.setAttribute("placeholder", aDT), aDX.style.top = "0", aDX.style.left = "0", aDX.style.width = "100%", aDX.style.height = "100%", aDX
		.style.userSelect = "none", aDX.style.outline = "none", aDX.style.resize = "none", aDX.style.border = "none", aDX.style.color = t.u, aDX.style.backgroundColor = t.a38, aDW ? (aDX.style.fontSize = "1em", aDX.rows = 6, aDX.style.padding =
			"0.25em") : (aDX.style.padding = "0.45em", aDX.style.fontSize = "1.2em"), aDV && aDX.addEventListener("input", function(f6) {
			aDV(f6)
		}), aDX.addEventListener("focus", function() {
			r.tZ++
		}), aDX.addEventListener("blur", function() {
			r.tZ--
		})
}

function a8E() {
	this.aDd = function(player) {
		for (var aDe = pI.d4.aDe, ym = player << 3, aA = ym + pI.d4.aDJ[player] - 1; ym <= aA; aA--) this.aDf(aDe[aA])
	}, this.aDf = function(aDg) {
		var d4 = pI.d4,
			aDh = d4.v3 - 1,
			aDi = d4.sF[aDg],
			aDj = d4.aDk[aDg],
			aDl = d4.uy[aDg];
		d4.v3 = aDh, d4.sF[aDg] = d4.sF[aDh], d4.aDm[aDg] = d4.aDm[aDh], d4.aDn[aDg] = d4.aDn[aDh], d4.uy[aDg] = d4.uy[aDh], d4.aDo[aDg] = d4.aDo[aDh], d4.sG[aDg] = d4.sG[aDh], d4.aDk[aDg] = d4.aDk[aDh], d4.pJ[aDg] = d4.pJ[aDh], d4.aDp[aDg] = d4
			.aDp[aDh], d4.uz[aDg] = d4.uz[aDh], d4.aDe[d4.sF[aDg]] = aDg,
			function(af) {
				var player = af >> 3,
					d4 = pI.d4,
					aH = d4.aDJ[player] - 1,
					aDt = (player << 3) + aH;
				d4.aDJ[player] = aH, aDt !== af && (d4.aDe[af] = d4.aDe[aDt], d4.sF[d4.aDe[af]] = af)
			}(aDi), pI.oS.oS[ri.aDr(d4.uy[aDg])][d4.aDk[aDg]] = aDg, aDh = ri.aDr(aDl), aDi = aDj, aDh = pI.oS.oS[aDh], d4 = aDh.pop(), aDi !== aDh.length && (aDh[aDi] = d4, pI.d4.aDk[d4] = aDi)
	}
}

function aDv() {
	this.kU = function(kJ, player) {
		hu.kT(i.gC, player, kJ), ct.sH.a26(kJ, player)
	}, this.rf = function(player) {
		hu.sY(player, 0), ct.sH.a29(player)
	}, this.a9b = function(a9O, player) {
		hu.sa(a9O, player), ct.sH.a2A(a9O, player)
	}, this.aDw = function() {
		i.kq || i.i0 || ct.aDx.aDw()
	}
}

function wP() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a7b() {
	var input;

	function aDy(f6) {
		(f6 = f6.target.files) && 0 < f6.length && a6x.aE1(f6[0])
	}

	function aE5(f6) {
		var aR = new Image;
		aR.onload = aE6, aR.src = f6.target.result
	}

	function aE6(f6) {
		var f6 = f6.target,
			canvas = document.createElement("canvas");
		canvas.width = f6.width, canvas.height = f6.height;
		canvas.getContext("2d").drawImage(f6, 0, 0);
		var f6 = canvas.width,
			an = canvas.height;
		f6 > ip.a1m || an > ip.a1m || f6 < 10 || an < 10 ? (f6 = "Image dimensions must be between 10 and " + ip.a1m + ".", n.nv ? n.nv.showToast(f6) : alert(f6)) : 20 === d2.d3 && d2.jf().aE6(canvas)
	}
	this.h = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aDy
	}, this.zF = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aDz = function() {
		input.click()
	}, this.aE1 = function(aE2) {
		var bW = aE2.name.split("."),
			bW = bW[bW.length - 1].toLowerCase();
		"gif" !== bW && "jpg" !== bW && "jpeg" !== bW && "png" !== bW || ((bW = new FileReader).onload = aE5, bW.readAsDataURL(aE2))
	}
}

function aE8() {
	var iI, ly, aE9, aEA = ["wss://", "/s50/", "/s51/", "/s52/"],
		aEB = 0;

	function aEL() {
		ct.d4.aEL(iI, ly)
	}

	function aEM(f6) {
		ct.sI.aEP(iI, new Uint8Array(f6.data))
	}

	function aEO() {}

	function aEN(f6) {
		ct.d4.aEN(iI, f6)
	}
	this.h = function(bm, aEC) {
		iI = bm, ly = aEC, bm = f9.fi ? "ws://localhost:" + (7130 + iI) + "/" : aEA[0] + ct.d4.aEK[iI] + aEA[1 + f9.fj], (aE9 = new WebSocket(__fx.customLobby.isActive() && 1 === iI ? __fx.customLobby.getSocketURL() : bm)).binaryType =
			"arraybuffer", aE9.onopen = aEL, aE9.onmessage = aEM, aE9.onclose = aEN, aE9.onerror = aEO
	}, this.aEE = function() {
		return aE9.readyState === aE9.CONNECTING
	}, this.a0G = function() {
		return aE9.readyState === aE9.OPEN
	}, this.aEF = function() {
		return aEB
	}, this.a2k = function() {
		aEB = 1
	}, this.aEG = function() {
		return this.aEE() || this.a0G()
	}, this.aEH = function(aEC) {
		ly = aEC
	}, this.a2i = function() {
		return ly
	}, this.send = function(bt) {
		this.a0G() && aE9.send(bt)
	}, this.close = function(aEI) {
		this.aEG() && (aE9.close(aEI), this.dj())
	}, this.dj = function() {
		aE9.onopen = null, aE9.onmessage = null, aE9.onclose = null, aE9.onerror = null
	}
}

function aEQ() {
	var dA, dB, aER, dR;

	function dG() {
		a6x.zF(), d2.dM()[19] = null, d2.dN()
	}

	function aEZ() {
		aEd(), aEa()
	}

	function aEd() {
		aER.hZ.lastChild && aER.hZ.removeChild(aER.hZ.lastChild)
	}

	function aEa() {
		var aEe = ip.is(i.data);
		i.data.canvas = ip.ir(aEe, i.data.mapSeed).iq, aEb()
	}

	function aEb() {
		var jG = i.data.canvas;
		jG.style.width = "100%", aER.hZ.appendChild(jG)
	}
	this.aE6 = function(jG) {
		i.data.canvas && aEd(), i.data.canvas = jG, aEb()
	}, this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(11), [new dF("⬅️ " + L(1), dG)]), 2 === i.data.mapType && a6x.h(), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(249), L(250), L(251)],
			value: i.data.mapType
		}, function(bm) {
			2 === (i.data.mapType = bm) ? (a6x.h(), i.data.canvas = null) : (i.data.passableWater = i.data.passableMountains = 1, a6x.zF()), d2.da(20)
		})), 2 <= i.data.mapType && (dU.db(new dc), dU.db(new dd({
			value: i.data.passableWater
		}, L(252), function(value) {
			i.data.passableWater = value
		})), dU.db(new dd({
			value: i.data.passableMountains
		}, L(253), function(value) {
			i.data.passableMountains = value
		})));
		dR.push(dU)
	}(dR = []), function(dR) {
		if (0 === i.data.mapType) {
			for (var dU = new dV, dZ = (dU.dW(L(11)), []), aA = 0; aA < ip.oX.nK.length; aA++) dZ.push(ip.oX.nJ[ip.oX.nK[aA]].name);
			dU.dX(new dY({
				dZ: dZ,
				value: i.data.mapProceduralIndex
			}, function(bm) {
				i.data.mapProceduralIndex = bm, aEZ()
			})), dR.push(dU)
		}
	}(dR), function(dR) {
		if (1 === i.data.mapType) {
			for (var dU = new dV, dZ = (dU.dW(L(11)), []), aA = 0; aA < ip.oX.nL.length; aA++) dZ.push(ip.oX.nJ[ip.oX.nL[aA]].name);
			dU.dX(new dY({
				dZ: dZ,
				value: i.data.mapRealisticIndex
			}, function(bm) {
				i.data.mapRealisticIndex = bm, aEZ()
			})), dR.push(dU)
		}
	}(dR), function(dR) {
		var dU;
		2 === i.data.mapType && ((dU = new dV).dW(L(11)), dU.db(new jH([new dF(L(254), function() {
			return a6x.aDz(), !0
		}).button])), dR.push(dU))
	}(dR), function(dR) {
		(aER = new dV).dW(L(255)), 2 !== i.data.mapType ? aEa() : i.data.canvas && aEb();
		dR.push(aER)
	}(dR), function(dR) {
		var dU, nd, aEc;
		0 === i.data.mapType && ((dU = new dV).dW("Seed"), nd = new jI({
			bm: -1,
			value: i.data.mapSeed
		}, 1, 0, function(f6) {
			f6 = Math.abs(Math.floor(f6.target.value)) % 16384;
			i.data.mapSeed !== f6 && (i.data.mapSeed = f6, aEZ())
		}), aEc = new dF(L(16), function(f6) {
			var nV = Math.floor(16384 * Math.random());
			if (i.data.mapSeed !== nV) return nd.f6.value = i.data.mapSeed = nV, aEZ(), !0
		}), dU.db(nd), dU.db(new jH([aEc.button])), dR.push(dU))
	}(dR), function(dR) {
		var dU, nd;
		2 === i.data.mapType && ((dU = new dV).dW(L(256)), nd = new jI({
			bm: -1,
			value: i.data.mapName
		}, 0, 0, function(f6) {
			i.data.mapName = f6.target.value = f6.target.value.slice(0, 20)
		}), dU.db(nd), dR.push(dU))
	}(dR), dR))
}

function a7a() {
	this.aEf = [], this.aEg = [], this.h = function() {
		this.aEf = [], this.aEg = []
	}, this.a9 = function() {
		0 <= this.aEf.length && this.aEh(this.aEf), 0 <= this.aEg.length && this.aEh(this.aEg)
	}, this.aEh = function(bW) {
		for (var cq = -1, aA = bW.length - 1; 0 <= aA; aA--)
			if (bW[aA].bk--, bW[aA].bk <= 0) {
				cq = aA;
				break
			} for (aA = cq; 0 <= aA; aA--) bW.shift()
	}, this.a9a = function(id, fT, aEi) {
		return this.xH(this.aEf, id, fT, aEi)
	}, this.aEj = function(id, fT, aEi) {
		return this.xH(this.aEg, id, fT, aEi)
	}, this.xH = function(bW, id, fT, aEi) {
		return ! function(bW, id, fT) {
			var aA, gp;
			for (aA = fT.length - 1; 0 <= aA; aA--)
				for (gp = bW.length - 1; 0 <= gp; gp--)
					if (bW[gp].player === fT[aA] && id === bW[gp].id) return 1;
			return
		}(bW, id, fT) && (aEi && function(bW, id, fT) {
			var aA;
			for (aA = fT.length - 1; 0 <= aA; aA--) bW.push({
				player: fT[aA],
				id: id,
				bk: 384
			})
		}(bW, id, fT), !0)
	}
}

function a7Y() {
	var an, canvas, f, aEm, aEn, aEo, aEp, qN, aEq, aEr, aEs, aEt, sT = !1,
		jG = (this.jq = !1, this.d = 0, new Array(2)),
		aEu = 0;

	function aP() {
		var d = hn.d,
			cn = (qN = !1, aEv(f, d, an), Math.floor(d / 2));
		1 === aEm ? (f.fillStyle = t.vc, f.fillRect(cn, 0, cn, an)) : -1 === aEm && (f.fillStyle = t.a3a, f.fillRect(0, 0, cn, an)), aEw(f, d, an, 2);
		var cn = (cn = Math.floor(.25 * an)) < 2 ? 2 : cn,
			sk = (f.fillStyle = t.a3F, Math.floor((an - 4) * aEn[1] / aEo[1]));
		0 < sk && f.fillRect(2, an - 2 - sk, cn, sk), 0 < (sk = Math.floor((an - 4) * aEn[0] / aEo[0])) && f.fillRect(d - 2 - cn, an - 2 - sk, cn, sk);
		cn = (cn = Math.floor(an / 8)) < 2 ? 2 : cn, aEy(f, Math.floor(.4 * an), 0, an, cn, .5, !1), aEy(f, Math.floor(d - 1.4 * an), 0, an, cn, .5, !0), sk = 1.1 * an / jG[0].width;
		f.imageSmoothingEnabled = !0, f.setTransform(sk, 0, 0, sk, (d - sk * jG[0].width) / 2, -.05 * an), f.drawImage(jG[+sT], 0, 0), f.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aF4() {
		aEt = -1, sT = a6u.aF5(), hu.rs(257), hu.sS(sT), hn.jq = !0, qN = !0, aEq = 360;
		for (var ah, a4 = 0, aA = aF.aI - 1; 0 <= aA; aA--) v.fX.fY(aF.aE[aA]) || (a4 += a5.a6[aF.aE[aA]]);
		sT ? aEo[0] = Math.max(bO.bP(3 * a4, 4), 1) : i.j ? 9 === i.ko && 8 === a1.a2[vr.a0()] ? aEo[0] = Math.max(a4, 1) : (ah = bO.bP(100 * vr.y(), i.vT), ah = bO.hQ(200 - 2 * ah, 40, 100), ah = bO.bP(ah * a4, 100), aEo[0] = Math.max(ah, 1)) : aEo[
			0] = Math.max(bO.bP(3 * a4, 5), 1), aEo[1] = Math.max(a4 - aEo[0], 1)
	}

	function qe() {
		aEs = bl.ff(), qN = !0, aEq = aEm = 0, aEp = [], hn.jq = !1, hu.hw(247), aEn[0] = aEn[1] = 0, hu.rs(673)
	}

	function rc() {
		return qX.qb(hu.rY()) ? __fx.settings.keybindButtons ? qX.bG - 2 * (an + ak.gap) : qX.bG - an - ak.gap : hy.qb(hu.rb()) ? hy.rc() - an - ak.gap : r.an - an - qS.qT() * ak.gap
	}
	this.cW = function() {
		for (var aA = 0; aA < 2; aA++) jG[aA] = v.canvas.k8(k9.get(3), 8 - aA, t.a3u), jG[aA] = v.canvas.a6a(jG[aA])
	}, this.h = function() {
		aEs = -1e4, aEr = aEu = 0, aEt = -1, this.jq = !1, qN = sT = !1, aEn = [aEm = aEq = 0, 0], aEo = [1, 1], aEp = [], this.resize()
	}, this.resize = function() {
		an = qX.an, this.d = 4 * an, (canvas = document.createElement("canvas")).width = this.d, canvas.height = an, f = canvas.getContext("2d", {
			alpha: !0
		}), aP()
	}, this.c5 = function() {
		qN && aP()
	}, this.hS = function(bF, bG) {
		return !!this.jq && !(bF < r.d - this.d - ak.gap || bG < rc() || (i.i0 || this.aEz(i.gC) && (mI.mJ && mI.tk(), bx.gL.aF0(bF > r.d - ak.gap - this.d / 2 ? 1 : 0)), 0))
	}, this.a9 = function() {
		0 < aEr ? 0 === --aEr && qe() : this.jq ? 180 == --aEq && 3 * aEn[0] < aEo[0] ? qe() : aEn[0] >= aEo[0] ? sT ? hr.er.hi() : hr.er.hm() : aEn[1] >= aEo[1] ? aEr = 4 : aEq <= 0 && qe() : ! function() {
			var fV = bl.ff();
			if (fV % 40 == 14) {
				if (aEu) return !(fV < aEu) && !(fV < aEs + 535) && (aEu = fV + 1071, v.fX.aF7()) ? (aF4(), 1) : 0;
				(1 === aF.aI || (i.j ? vr.y() : a5.a6[a7[0]]) >= bO.bP(96 * i.vT, 100)) && (aEu = fV + 535)
			}
			return
		}() && 0 <= aEt && (hu.ro(250, L(257, [a5.r3[aEt]]), 673, aEt, t.u, t.ac, -1, !0), aF4())
	}, this.ho = function() {
		this.jq && aEn[0] < aEo[0] && qe()
	}, this.aF8 = function(player, aF9) {
		var aFA = L(aF9 ? 258 : 259, [a5.r3[player]]),
			aFA = (hu.ro(450, aFA, 257, player, aF9 ? t.a3O : t.a3Y, t.ac, -1, !0), aEp.push(player), qN = !0, i.kq ? Math.max(aEo[0], aEo[1]) : a5.a6[player]),
			aFA = Math.max(aFA, 1);
		aF9 ? aEn[0] += aFA : aEn[1] += aFA, player === i.gC && (aEm = aF9 ? 1 : -1)
	}, this.ai = function() {
		var bG;
		this.jq && (bG = rc(), aj.drawImage(canvas, r.d - this.d - ak.gap, bG))
	}, this.a6I = function(player) {
		return !(!i.kq && bl.ff() < aEs + 140 || 0 !== aEq || !v.fX.aFB(1) || !v.fX.pH(player) || 10 <= aFC[player] && !v.fX.aFD(player, 9))
	}, this.aEz = function(aL) {
		if (!v.fX.aFB(1)) return !1;
		if (!v.fX.pH(aL)) return !1;
		if (!this.jq) return !1;
		for (var aA = aEp.length - 1; 0 <= aA; aA--)
			if (aEp[aA] === aL) return !1;
		return !0
	}, this.te = function(player) {
		aEt = player
	}
}

function aAm() {
	var zC = 2e4;
	this.show = function() {
		if (bl.bk < zC) return !1;
		zC = bl.bk + 135e4, 2 === f9.fj && n.o.aFE(Math.floor(135e4))
	}
}

function aFF() {
	this.a6V = function() {
		ce.cx.aFG(), ce.cx.aFH(), ct.d4.close(0, 3255), 0 === n.id ? n.aFI && n.aFI.clear() : 1 === n.id ? n.nv.saveString(199, "") : 2 === n.id && n.aFJ.postMessage("clear")
	}, this.a6D = function() {
		2 === n.id ? n.aFJ.postMessage("showConsentForm") : 1 === n.id && n.nv.setState(7)
	}, this.a6F = function() {
		this.setState(14)
	}, this.p = function() {
		return 1 === ce.cf.lu(2)
	}, this.aFK = function() {
		ce.cf.kO(102, "")
	}, this.setState = function(oK) {
		1 === n.id && 5 <= n.fk && n.nv.setState(oK)
	}, this.fJ = function() {
		var aFL;
		1 === n.id && 7 <= n.fk ? n.nv.setState(5) : ((aFL = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aFL.toString())
	}, this.a88 = function() {
		1 !== n.id || n.fk < 17 || n.nv.saveString(23, document.documentElement.outerHTML)
	}, this.aAn = function() {
		0 !== n.id && (1 === n.id ? n.nv.prepareAd("1688441405") : 2 === n.id && (0 === n.fk ? n.aFJ.postMessage("prepare ad 1770251391") : n.aFJ.postMessage("loadAds 1770251391")))
	}, this.aFE = function(a4) {
		return 0 !== n.id && 1 !== n.id && 2 === n.id && (0 === n.fk ? n.aFJ.postMessage("show ad " + a4) : n.aFJ.postMessage("showAd"), !0)
	}, this.a8A = function() {
		2 === n.id && n.fk < 23 && d2.da(4, 1, new fG("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + kH.a6M + "' target='_blank'>" +
			kH.a6M + "</a>", !0, [new dF("⬅️ " + L(1), function() {
				d2.da(0)
			}, t.uH)]))
	}
}

function a82() {
	function aFM(f6) {
		var bW, f6 = f6.target.files;
		f6 && 0 < f6.length && (f6 = f6[0], "json" === (bW = f6.name.split("."))[bW.length - 1].toLowerCase()) && ((bW = new FileReader).onload = aFT, bW.readAsText(f6))
	}

	function aFT(f6) {
		var aFW;
		i.bw || (f6 = JSON.parse(f6.target.result), aFW = i.data = new wP, aFX(f6, aFW, "mapType", 0, 2), aFX(f6, aFW, "mapProceduralIndex", 0, 255), aFX(f6, aFW, "mapRealisticIndex", 0, 255), aFX(f6, aFW, "mapSeed", 0, 16383), function(aFV, aFW, gn,
				max) {
				aFV = aFV[gn];
				aFW[gn] = aFd(aFV) ? aFV.slice(0, max) : aFW[gn]
			}(f6, aFW, "mapName", 20), function(aFV, aFW, gn) {
				var a4i;
				2 === aFW.mapType && (!aFd(aFV = aFV[gn]) || aFV.length <= 20 ? aFW.mapType = 0 : ((a4i = new Image).onload = function() {
					bz.nq.aFe(a4i, 1), a4i.onload = null, a4i = null
				}, a4i.src = aFV))
			}(f6, aFW, "canvas"), aFX(f6, aFW, "passableWater", 0, 1), aFX(f6, aFW, "passableMountains", 0, 1), aFX(f6, aFW, "playerCount", 1, 512), aFX(f6, aFW, "humanCount", 1, 1), aFX(f6, aFW, "selectedPlayer", 0, 0), aFX(f6, aFW, "gameMode",
				0, 1), aFX(f6, aFW, "playerMode", 0, 0), aFX(f6, aFW, "battleRoyaleMode", 0, 0), aFX(f6, aFW, "numberTeams", 0, 8), aFX(f6, aFW, "isZombieMode", 0, 0), aFX(f6, aFW, "isContest", 0, 0), aFX(f6, aFW, "isReplay", 0, 0), aFa(f6, aFW,
				"elo", 16, 2, 16383), aFX(f6, aFW, "colorsType", 0, 1), aFX(f6, aFW, "colorsPersonalized", 0, 1), aFa(f6, aFW, "colorsData", 32, 512, 262143), aFX(f6, aFW, "selectableColor", 0, 1), aFa(f6, aFW, "teamPlayerCount", 16, 9, 512),
			aFX(f6, aFW, "neutralBots", 0, 1), aFX(f6, aFW, "botDifficultyType", 0, 3), aFX(f6, aFW, "botDifficultyValue", 0, 15), aFa(f6, aFW, "botDifficultyTeam", 8, 9, 15), aFa(f6, aFW, "botDifficultyData", 8, 512, 15), aFX(f6, aFW,
				"spawningType", 0, 2), aFX(f6, aFW, "spawningSeed", 0, 16383), aFa(f6, aFW, "spawningData", 16, 1024, 4095), aFX(f6, aFW, "selectableSpawn", 0, 1), aFX(f6, aFW, "playerNamesType", 0, 2),
			function(aFV, aFW, gn, size, max) {
				var bT = aFV[gn];
				if (Array.isArray(bT)) {
					for (var bU = new Array(size), aH = Math.min(bT.length, size), aA = 0; aA < aH; aA++) bU[aA] = aFd(bT[aA]) ? bT[aA].slice(0, max) : "";
					aFW[gn] = bU
				}
			}(f6, aFW, "playerNamesData", 512, 20), aFX(f6, aFW, "selectableName", 0, 1), aFX(f6, aFW, "aIncomeType", 0, 2), aFX(f6, aFW, "aIncomeValue", 0, 255), aFa(f6, aFW, "aIncomeData", 8, 512, 255), aFX(f6, aFW, "tIncomeType", 0, 2), aFX(
				f6, aFW, "tIncomeValue", 0, 255), aFa(f6, aFW, "tIncomeData", 8, 512, 255), aFX(f6, aFW, "iIncomeType", 0, 2), aFX(f6, aFW, "iIncomeValue", 0, 255), aFa(f6, aFW, "iIncomeData", 8, 512, 255), aFX(f6, aFW, "sResourcesType", 0, 2),
			aFX(f6, aFW, "sResourcesValue", 0, 2047), aFa(f6, aFW, "sResourcesData", 16, 512, 2047), d2.fH(), d2.d4.jR[0] = 0, d2.da(19))
	}

	function aFX(aFV, aFW, gn, min, max) {
		aFV = aFV[gn];
		aFW[gn] = "number" == typeof aFV && min <= aFV && aFV <= max ? Math.floor(aFV) : aFW[gn]
	}

	function aFd(ef) {
		return "string" == typeof ef
	}

	function aFa(aFV, aFW, gn, aFf, size, max) {
		var bT = aFV[gn];
		if (Array.isArray(bT)) {
			for (var bU = new(8 === aFf ? Uint8Array : 16 === aFf ? Uint16Array : Uint32Array)(size), aH = Math.min(bT.length, size), aA = 0; aA < aH; aA++) bU[aA] = bO.hQ(bT[aA], 0, max);
			aFW[gn] = bU
		}
	}
	this.jT = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFM, input.click()
	}, this.jU = function() {
		for (var aFP, qD, a4e = i.data, keys = Object.keys(a4e), aFN = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a4e[key] instanceof Uint8Array || a4e[key] instanceof Uint16Array || a4e[key] instanceof Uint32Array ? aFN[key] = Array.from(a4e[key]) : aFN[key] = a4e[key]
		}
		aFN.canvas = 2 === aFN.mapType && aFN.canvas ? aFN.canvas.toDataURL() : null, aFP = aFN, aFP = JSON.stringify(aFP, null, 2), aFP = new Blob([aFP], {
			type: "application/json"
		}), (qD = document.createElement("a")).href = URL.createObjectURL(aFP), qD.download = "tt_scenario.json", qD.click()
	}
}

function aFg() {
	var aFh = [],
		aFi = [],
		aFj = [];

	function aFl(eW) {
		for (var e8 = eW.e8, aFk = [];;) {
			var aR = function aFn(e8, position) {
				position = e8.indexOf("@", position);
				if (position < 0) return -1;
				var ef = e8.substring(position + 1, position + 6);
				if (5 !== ef.length) return aFn(e8, position + 1);
				if (v.dh.startsWith(ef, "room")) return aFn(e8, position + 1);
				var aG0 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aG0.test(ef)) return aFn(e8, position + 1);
				aG0 = e8.substring(position + 6, position + 7);
				if (1 !== aG0.length) return position;
				ef = new RegExp("^[ :!.]+$");
				if (!ef.test(aG0)) return aFn(e8, position + 1);
				return position
			}(e8, 0);
			if (-1 === aR) {
				aFk.push(aFo(e8, eW));
				break
			}
			0 === aR ? aFk.push(aFp(e8.substring(1, 6), eW, aR)) : (aFk.push(aFo(e8.substring(0, aR), eW)), aFk.push(aFp(e8.substring(aR + 1, aR + 6), eW, aR))), e8 = e8.substring(aR + 6)
		}
		return aFk
	}

	function aFp(ef, eW, aR) {
		var aFq = function(ef) {
				var e7 = jc.e5.aFx(ef),
					aFq = eT.eU.eR(e7);
				if (aFq) {
					for (aFh.push(aFq); 75 < aFh.length;) aFh.shift();
					return aFq
				}
				for (var aFy = eT.eU.aFy, aA = aFy.length - 1; 0 <= aA; aA--)
					if (aFq = aFy[aA], e7 === aFq.e7) return aFh.push(aFq), aFq;
				for (aA = aFh.length - 1; 0 <= aA; aA--)
					if (aFq = aFh[aA], e7 === aFq.e7) return aFh.push(aFq), aFq;
				return eT.eU.aFz(e7, ef, 1, 999999, 999999, 0, 0, 0, 0)
			}(ef),
			ef = (0 === aR && 0 === eW.e2.id && eW.eH && (eW.fontSize = eT.w9.eO(aFq.eN, aFq.eP), eW.eG = eT.w9.eQ(aFq.eP)), document.createElement("span"));
		return ef.textContent = function(aFq, eW, aR) {
			if (aFq.aFu) return aFq.aFu--, aR = 2 === eW.e2.id || (3 === eW.e2.id || 4 === eW.e2.id) && 0 !== aR, aFq.username + (aR ? " (" + aFq.aFw + ")" : "");
			if (eW.e2.ep) return "Redacted " + e4.e5.e6(aFq.e7, 2);
			return aFq.username
		}(aFq, eW, aR), ef.style.display = "inline-block", ef.style.color = eT.w9.eM(aFq.eN), ef.style.cursor = "pointer", ef.style.margin = "0", ef.style.font = "inherit", ef.style.minWidth = ef.style.minHeight = "1em", eT.w9.eV(aFq) && (ef
			.style.textDecoration = "underline"), eT.w9.eQ(aFq.eP) && (ef.style.fontWeight = "bold"), ef.onclick = function(f6) {
			eT.tg.aFt(f6, aFq)
		}, p5.p6() || (ef.onmouseover = function(f6) {
			eT.g2.w5(f6, aFq)
		}), aFi.push(ef), ef
	}

	function aFo(e8, eW) {
		var a2T = document.createElement("span");
		return a2T.textContent = e8, a2T.style.color = eW.eI, a2T.style.margin = "0", a2T.style.font = "inherit", a2T
	}

	function aG4(aFq, aG3, e7) {
		e7 !== aFq.e7 || aFq.aFw || (aFq.aFw = aFq.username, aFq.aFu = 3, aFq.username = aG3)
	}
	this.zF = function() {
		for (var aA = 0; aA < aFi.length; aA++) aFi[aA].onclick = aFi[aA].onmouseover = null;
		aFj = aFi = null
	}, this.transform = function(eW) {
		for (var hZ = document.createElement("div"), aFk = aFl(eW), aA = 0; aA < aFk.length; aA++) hZ.appendChild(aFk[aA]);
		0 === eW.e2.id && (hZ.vx143 = eW.e2, aFj.push(hZ)), hZ.style.margin = "0.6em 0.6em", eW.eH && (hZ.style.marginLeft = hZ.style.marginRight = "inherit"), hZ.style.font = "inherit";
		var aFm = 0 < eW.e2.id;
		return eW.eG && (hZ.style.fontWeight = "bold"), aFm && (hZ.style.paddingLeft = "0.7em"), aFm && (hZ.style.fontStyle = "italic"), hZ.style.fontSize = eW.fontSize.toFixed(2) + "em", hZ
	}, this.yP = function(yN) {
		if (yN && (2 === yN.id && 1 === yN.eA || 3 === yN.id && 2 === yN.eA)) {
			var e7 = 3 === yN.id ? yN.target : yN.e7;
			if (!eT.eU.eR(e7)) {
				for (var aG3 = "Redacted " + e4.e5.e6(e7, 2), aFy = eT.eU.aFy, aA = aFy.length - 1; 0 <= aA; aA--) aG4(aFy[aA], aG3, e7);
				for (aA = aFh.length - 1; 0 <= aA; aA--) aG4(aFh[aA], aG3, e7)
			}
		}
	}, this.ei = function(e7) {
		for (var aG5 = aFj, aA = aG5.length - 1; 0 <= aA; aA--) {
			var gl = aG5[aA];
			if (gl.vx143.e7 === e7) {
				for (; gl.firstChild;) gl.removeChild(gl.firstChild);
				gl.vx143.e8 = "[Redacted Message]";
				for (var aFk = aFl(eT.w9.eE(gl.vx143, eT.w9.e1(gl.vx143))), ee = 0; ee < aFk.length; ee++) gl.appendChild(aFk[ee]);
				aG5.splice(aA, 1)
			}
		}
	}
}

function uD() {
	this.iU = function(ef, aG6, aG7) {
		for (var aG8 = [], aH = ef.length, max = 0, aA = 0; aA < aH; aA++) {
			var ah = ef.charCodeAt(aA);
			aG8.push(ah), max = Math.max(max, ah)
		}
		var aG9 = max < 128 ? 7 : 16;
		for (aG7.fO(aG6, aH), aG7.fO(1, +(16 == aG9)), aA = 0; aA < aH; aA++) aG7.fO(aG9, aG8[aA])
	}
}

function a7n() {
	var aCx = 0,
		aGA = 0;
	this.tR = function(bF, bG) {
		aCx = bF, aGA = bG
	}, this.tc = function(aGB) {
		i.i0 || mI.mJ || (v.fX.aFB(0) || v.fX.aFB(1)) && v.fX.pH(i.gC) && (qX.hS(aCx, aGA) ? qX.qP = !1 : tM.hS(aCx, aGA) || function(aGB) {
			var a9f = ri.a9g(aCx),
				a9h = ri.a9i(aGA),
				oh = ri.xJ(a9f, a9h),
				bM = ri.x7(oh);
			ri.a9j(a9f, a9h) && (i.bu ? mr.pm(bM) && bx.gL.a9c(oh) : mr.sB(bM) ? aGB || (a9f = a6v.a9p.x0(bM)) && (a9h = ri.x7(a9f), a9h = mr.pU(a9h) ? i.df : mr.pW(a9h), bx.gL.a9e(qX.qa(), a9f, a9h)) : mr.oi(bM) || aGB ? pI.eu.a9q(i.gC,
				oh) && bx.gL.a9d(qX.qa(), oh) : mr.pU(bM) ? py(i.gC) ? bx.gL.gM(qX.qa(), i.df) : pu(i.gC, i.df) ? wj.gN(i.df, qX.qa()) : pI.eu.a9q(i.gC, oh) && bx.gL.a9d(qX.qa(), oh) : (a9f = mr.pW(bM)) !== i.gC && (pt(a9f, i
				.gC) ? q0(i.gC, a9f) ? bx.gL.gM(qX.qa(), a9f) : pu(i.gC, a9f) ? wj.gN(a9f, qX.qa()) : pI.eu.a9q(i.gC, oh) && bx.gL.a9d(qX.qa(), oh) : pI.eu.a9q(i.gC, oh) && bx.gL.a9d(qX.qa(), oh)))
		}(aGB))
	}, this.td = function() {
		if (!i.i0 && !mI.mJ && v.fX.aFB(1)) {
			var aL = i.gC;
			if (v.fX.pH(aL)) {
				var aH = gD.gF(aL);
				if (aH < 1) ! function() {
					var aL = i.gC;
					if (py(aL)) bx.gL.gM(qX.qa(), i.df);
					else
						for (var mq = mr.mq, pZ = a5.pZ, aH = pZ[aL].length, mi = Math.floor(Math.random() * aH), aA = 0; aA < aH; aA++)
							for (var bZ = 3; 0 <= bZ; bZ--) {
								var gp = pZ[aL][(aA + mi) % aH] + mq[bZ];
								if (mr.pV(gp)) {
									gp = mr.pW(gp);
									if (gp !== aL && (!i.j || pt(aL, gp))) return bx.gL.gM(qX.qa(), gp)
								}
							}
				}();
				else {
					for (var aGF = 0, r6 = gD.a0f(aL, 0), aA = 1; aA < aH; aA++) {
						var a4S = gD.a0f(aL, aA);
						a4S < r6 && (r6 = a4S, aGF = aA)
					}
					bx.gL.gM(qX.qa(), gD.px(aL, aGF))
				}
			}
		}
	}, this.te = function() {
		if (!i.i0 && !mI.mJ && v.fX.pH(i.gC) && v.fX.aFB(1)) return hn.jq ? hn.aEz(i.gC) ? void bx.gL.aF0(1) : void 0 : void(hn.a6I(i.gC) && bx.gL.te())
	}
}

function a7f() {
	this.size = 0, this.bm = 0, this.bt = null, this.h = function(bt) {
		this.bm = 0, this.bt = bt, this.size = bt.length
	}, this.zF = function() {
		this.bt = null
	}, this.jb = function(size) {
		for (var ah = 0, bt = this.bt, lf = this.bm + size - 1, aA = this.bm; aA <= lf; aA++) ah |= (bt[aA >> 3] >> 7 - (7 & aA) & 1) << lf - aA;
		return this.bm += size, this.bm > 8 * this.size && console.error("Unwrapper Overflow"), ah
	}, this.je = function(size) {
		var cq = size >> 1;
		return (1 << cq) * this.jb(size - cq) + this.jb(cq)
	}, this.jh = function(a62) {
		return this.size === iJ.jY(a62)
	}, this.aGH = function(aG6, aGI, aGJ) {
		var aD = this.jb(aG6);
		if (!aD) return null;
		for (var aG6 = Math.max(aD, aGJ), bW = new(aGI <= 8 ? Uint8Array : aGI <= 16 ? Uint16Array : Uint32Array)(aG6), aA = 0; aA < aD; aA++) bW[aA] = this.jb(aGI);
		aGJ = bW[aD - 1];
		return aGJ && bW.fill(aGJ, aD), bW
	}, this.aGK = function(aG6, aGL, aGJ) {
		var aD = this.jb(aG6);
		if (!aD) return null;
		for (var aG6 = Math.max(aD, aGJ), bW = new Array(aG6), aA = 0; aA < aD; aA++) bW[aA] = this.aGM(aGL);
		return bW.fill(bW[aD - 1], aD), bW
	}, this.aGM = function(aG6) {
		return jc.ji.jj(this.jb(aG6))
	}, this.aGN = function() {
		var ef = e4.e5.z2(e4.e5.z3(this.jb(30))),
			ef = v.dh.lo(ef, "_", "/");
		ef = v.dh.lo(ef, "-", "+");
		for (var aGO = "";
			(ef.length + aGO.length) % 4;) aGO += "=";
		ef = "data:image/png;base64," + ef + aGO;
		var a4i = new Image;
		a4i.onload = function() {
			bz.nq.aFe(a4i), a4i.onload = null, a4i = null
		}, a4i.src = ef
	}
}

function uV() {
	var aGP = 0;

	function aGU(ef, id) {
		aGP || (id ? 1 === id ? hu.rH = L(261) + ": " + ef : d2.da(4, 3, new fG(L(262), ef, 1)) : d2.da(4, 3, new fG("⚠️ " + L(260), ef, 1)))
	}
	this.jd = function(ef, aGQ) {
		var eW;
		return aGP = aGQ, jc.e5.aBk(jc.e5.aBl(jc.e5.aGR(ef))), hu.rH = "", !(! function() {
			if (jX.size < 10) aGU("File Too Small");
			else {
				var aGW = jX.jb(12),
					nG = (aGW !== f9.rVersion && aGU("Incompatible Version   Required: " + f9.rVersion + ("   Found: " + aGW) + ("   Compatible at territorial.io/" + aGW), 1), jX.jb(12)),
					aGX = jX.jb(31);
				if (aGX !== jX.size) aGU("Size Error: " + aGX + " " + jX.size);
				else if (function(an, aGW) {
						for (var aL = jX.bt, aH = jX.size, nG = aGW, aA = 3; aA < aH; aA++) nG = nG + aL[aA] & 4095;
						return nG === an || (aGU("Hash Error: " + nG + " " + an + " " + aH), !1)
					}(nG, aGW)) return 1
			}
			return
		}() || (aGQ = jX, (eW = i.data = new wP).mapType = aGQ.jb(2), eW.mapProceduralIndex = aGQ.jb(8), eW.mapRealisticIndex = aGQ.jb(8), eW.mapSeed = aGQ.jb(14), eW.mapName = aGQ.aGM(5), 2 === eW.mapType && aGQ.aGN(), eW.passableWater =
			aGQ.jb(1), eW.passableMountains = aGQ.jb(1), eW.playerCount = aGQ.jb(10), eW.humanCount = aGQ.jb(10), eW.selectedPlayer = aGQ.jb(9), eW.gameMode = aGQ.jb(1), eW.playerMode = aGQ.jb(2), eW.battleRoyaleMode = aGQ.jb(2), eW
			.numberTeams = aGQ.jb(4), eW.isZombieMode = aGQ.jb(1), eW.isContest = aGQ.jb(1), eW.isReplay = aGQ.jb(1), eW.elo = aGQ.aGH(2, 14, 2), eW.colorsType = aGQ.jb(1), eW.colorsPersonalized = aGQ.jb(1), eW.colorsData = aGQ.aGH(10,
				18, 512), eW.selectableColor = aGQ.jb(1), eW.teamPlayerCount = aGQ.aGH(4, 10, 9), eW.neutralBots = aGQ.jb(1), eW.botDifficultyType = aGQ.jb(2), eW.botDifficultyValue = aGQ.jb(4), eW.botDifficultyTeam = aGQ.aGH(4, 4, 9), eW
			.botDifficultyData = aGQ.aGH(10, 4, 512), eW.spawningType = aGQ.jb(2), eW.spawningSeed = aGQ.jb(14), eW.spawningData = aGQ.aGH(11, 12, 1024), eW.selectableSpawn = aGQ.jb(1), eW.playerNamesType = aGQ.jb(2), eW.playerNamesData =
			aGQ.aGK(10, 5, 512), eW.selectableName = aGQ.jb(1), eW.aIncomeType = aGQ.jb(2), eW.aIncomeValue = aGQ.jb(8), eW.aIncomeData = aGQ.aGH(10, 8, 512), eW.tIncomeType = aGQ.jb(2), eW.tIncomeValue = aGQ.jb(8), eW.tIncomeData = aGQ
			.aGH(10, 8, 512), eW.iIncomeType = aGQ.jb(2), eW.iIncomeValue = aGQ.jb(8), eW.iIncomeData = aGQ.aGH(10, 8, 512), eW.sResourcesType = aGQ.jb(2), eW.sResourcesValue = aGQ.jb(11), eW.sResourcesData = aGQ.aGH(10, 11, 512), !
			function() {
				var lL = jX,
					aBf = lL.jb(5),
					aGZ = lL.jb(30),
					aGa = lL.jb(30);
				if (aGZ + aGa > 8 * lL.size) return void aGU("Corrupted File");
				return function(aH) {
						var aGd = new Uint8Array(aH),
							aGe = new Uint16Array(aH),
							aGf = new Uint32Array(aH),
							aGg = new Uint32Array(aH);
						bz.ix.aGh = aGd, bz.ix.aGi = aGe, bz.ix.aGj = aGf, bz.ix.aGk = aGg;
						for (var aA = 0; aA < aH; aA++) {
							var id = jX.jb(4);
							aGd[aA] = id, aGe[aA] = jX.jb(9), 0 === id ? aGf[aA] = jX.jb(22) : 1 === id ? (aGf[aA] = jX.jb(10), aGg[aA] = jX.jb(10)) : 2 === id ? (aGf[aA] = jX.jb(10), aGg[aA] = jX.jb(9)) : 3 === id || 4 === id ? (aGf[
								aA] = jX.jb(10), aGg[aA] = jX.jb(22)) : 5 === id || 6 === id ? aGf[aA] = jX.jb(10) : 7 === id ? aGf[aA] = jX.jb(1) : 10 === id && (aGf[aA] = jX.jb(20), aGg[aA] = jX.jb(22))
						}
					}(aGZ),
					function(aH, aBf) {
						var aGl = new Uint8Array(aH),
							aGm = new Array(aH);
						aGm.fill(0), bz.ix.aGl = aGl, bz.ix.aGm = aGm;
						for (var aA = 0; aA < aH; aA++) aGl[aA] = jX.jb(1), aGm[aA] = jX.jb(aBf)
					}(aGa, aBf), 1
			}()) || (jX.bm < 8 * jX.size - 13 || jX.bm > 8 * jX.size ? (aGU("Out Of Bounds Error: " + jX.bm + " " + 8 * jX.size), 1) : (bz.ix.wp = ef, 2 === i.data.mapType && (aGU("Load base64 image...", 2), 1))))
	}, this.aFe = function(a4i, aGV) {
		var jG = document.createElement("canvas"),
			ih = jG.getContext("2d");
		if (jG.width = a4i.width, jG.height = a4i.height, ih.drawImage(a4i, 0, 0), aGP || aGV) return i.bw ? void 0 : (i.data.canvas = jG, i.data.mapType = 2, d2.fH(), void d2.da(19));
		bz.uY()
	}
}

function aGn() {
	var aGo, aGq = new Uint16Array(8);

	function aGy(size, player) {
		for (var aA = a5.pT[player].length - 1; size <= aA; aA--) mr.pX(a5.pT[player][aA], player)
	}
	this.h = function() {
		aGo = 0
	}, this.aGr = function(player, aGs) {
		return aK.x9[1] = a5.pT[player].length, aK.x9[0] === i.df ? wX.aGt.aGu(player) : this.aGv(player, aK.x9[0]), (0 !== aK.x9[1] || 0 !== a5.pT[player].length) && !(!aGs && aK.x9[1] === a5.pT[player].length || (aK.x9[0] === i.df ? a5.fa[
			player]++ : a5.fb[player]++, 0))
	}, this.aGw = function(player) {
		i.j && (wX.zy.aGx[player] = 1), aGy(aK.x9[1], player), gD.rt(player, aK.a8l[0], aK.x9[0]), we.aGz(player, !1)
	}, this.aH0 = function(player, gH, aH, r6) {
		var aH1 = bO.bP(12 * a5.s9[player], 1024);
		r6 -= r6 >= bO.bP(a5.s9[player], 2) ? aH1 : 0, aGy(aH, player), gD.rt(player, r6, gH), a5.s9[player] -= r6 + aH1, we.aGz(player, !1)
	}, this.aGv = function(player, gH) {
		for (var bZ, mq = mr.mq, aA = a5.pZ[player].length - 1; 0 <= aA; aA--)
			if (mr.q1(a5.pZ[player][aA]))
				for (bZ = 3; 0 <= bZ; bZ--)
					if (mr.pV(a5.pZ[player][aA] + mq[bZ]) && mr.pW(a5.pZ[player][aA] + mq[bZ]) === gH) {
						a5.pT[player].push(a5.pZ[player][aA]);
						break
					}
	}, this.aGu = function(player) {
		for (var mq = mr.mq, aA = a5.pZ[player].length - 1; 0 <= aA; aA--)
			if (mr.q1(a5.pZ[player][aA]))
				for (var bZ = 3; 0 <= bZ; bZ--)
					if (mr.pU(a5.pZ[player][aA] + mq[bZ])) {
						a5.pT[player].push(a5.pZ[player][aA]);
						break
					}
	}, this.aH2 = function(player, aH3) {
		var aA, ee, bZ, aGG, aH = a5.pZ[player].length,
			bN = 256 <= aH ? 12 : 32 <= aH ? 6 : 1,
			l8 = aH - 1 - bA.l3(bN),
			mq = mr.mq;
		aGo = 0;
		loop: for (aA = l8; 0 <= aA; aA -= bN)
			for (bZ = 3; 0 <= bZ; bZ--)
				if ((aGG = mr.pU(a5.pZ[player][aA] + mq[bZ]) ? i.df : mr.pW(a5.pZ[player][aA] + mq[bZ])) === i.df || mr.pV(a5.pZ[player][aA] + mq[bZ]) && aGG !== player && (aH3 || pt(player, aGG))) {
					for (ee = aGo - 1; 0 <= ee; ee--)
						if (aGq[ee] === aGG) continue loop;
					if (aGq[aGo] = aGG, 8 <= ++aGo) return !0
				}
		return 0 < aGo
	}, this.aH4 = function(player, aH3) {
		var aA, bZ, aGG, mq = mr.mq;
		for (aGo = 0, aA = a5.pZ[player].length - 1; 0 <= aA; aA--)
			for (bZ = 3; 0 <= bZ; bZ--)
				if ((aGG = mr.pU(a5.pZ[player][aA] + mq[bZ]) ? i.df : mr.pW(a5.pZ[player][aA] + mq[bZ])) === i.df || mr.pV(a5.pZ[player][aA] + mq[bZ]) && aGG !== player && (aH3 || pt(player, aGG))) return aGq[aGo++] = aGG, !0;
		return !1
	}, this.aH5 = function() {
		for (var cq, aA = aGo - 1; 0 <= aA; aA--)
			if (aGq[aA] === i.df) {
				for (aGo--, cq = aA; cq < aGo; cq++) aGq[cq] = aGq[cq + 1];
				return !0
			} return !1
	}, this.aH6 = function(player) {
		for (var cq, aA = aGo - 1; 0 <= aA; aA--)
			if (gD.aAF(player, aGq[aA]))
				for (aGo--, cq = aA; cq < aGo; cq++) aGq[cq] = aGq[cq + 1];
		return 0 === aGo
	}, this.aH7 = function() {
		for (var aA = aGo - 1; 0 <= aA; aA--)
			if (v.fX.fY(aGq[aA])) return !0;
		return !1
	}, this.aH8 = function() {
		for (var aA = aGo - 1; 0 <= aA; aA--) v.fX.fY(aGq[aA]) || (aGq[aA] = aGq[--aGo]);
		return 0 < aGo
	}, this.aH9 = function(player) {
		for (var cq, aHA = aGq[0], aHB = a5.s9[aHA] + gD.aA9(aHA, player), aA = aGo - 1; 1 <= aA; aA--)(cq = a5.s9[aGq[aA]] + gD.aA9(aGq[aA], player)) < aHB && (aHA = aGq[aA], aHB = cq);
		return aHA
	}, this.aHC = function(player) {
		var an, aHD = aGq[0];
		if (1 !== aGo)
			for (var aHE = bO.bP(a5.pQ[player] + a5.pN[player], 2), aHF = bO.bP(a5.pR[player] + a5.pP[player], 2), l5 = aHG(aHE - bO.bP(a5.pQ[aHD] + a5.pN[aHD], 2)) + aHG(aHF - bO.bP(a5.pR[aHD] + a5.pP[aHD], 2)), aA = aGo - 1; 1 <= aA; aA--)(an =
				aHG(aHE - bO.bP(a5.pQ[aGq[aA]] + a5.pN[aGq[aA]], 2)) + aHG(aHF - bO.bP(a5.pR[aGq[aA]] + a5.pP[aGq[aA]], 2))) < l5 && (l5 = an, aHD = aGq[aA]);
		return aHD
	}, this.aHH = function() {
		for (var aHI = aGq, aHJ = aHI[0], s9 = a5.s9, aHK = s9[aHJ], aA = aGo - 1; 1 <= aA; aA--) {
			var aL = aHI[aA],
				cq = s9[aL];
			aHK < cq && (aHJ = aL, aHK = cq)
		}
		return aHJ
	}, this.aHL = function() {
		return aGq[bA.l3(aGo)]
	}
}

function zJ() {
	var aHM = null;
	this.kX = 0, this.zQ = function() {
		var ah = ce.cf.data[5].value;
		aHM = "px " + ah, "Trebuchet MS" !== ah && (aHM += ", Trebuchet MS"), this.kX = iY(32, 32, ["a", "b", "m"], 200, aHM)
	}, this.pB = function(d, an) {
		var aR = document.createElement("canvas");
		return aR.width = d, aR.height = an, aR
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(f, d, an) {
		return f.getImageData(0, 0, d, an)
	}, this.ae = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aHM : 1 === type ? "bold " + size + aHM : 2 === type ? "lighter " + size + aHM : 3 === type ? "italic " + size + aHM : 4 === type ? "oblique " + size + aHM : 5 === type ? "small-caps " +
			size + aHM : "small-caps bold " + size + aHM
	}, this.textAlign = function(ih, id) {
		ih.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ih, id) {
		ih.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.mU = function(f6, code, color) {
		color = this.y1(ak.mX) + " solid " + (color || t.u);
		5 === (code = code || 5) ? f6.style.border = color : 4 === code ? f6.style.borderLeft = color : 2 === code ? f6.style.borderBottom = color : 6 === code ? f6.style.borderRight = color : f6.style.borderTop = color
	}, this.o1 = function(f6, bF, bG, d, an) {
		f6 = f6.style;
		f6.left = this.aHO(bF), f6.top = this.aHO(bG), f6.width = this.aHO(d), f6.height = this.aHO(an)
	}, this.a0P = function(ah) {
		return 1 + ah * n.o.p()
	}, this.mV = function(lD, gn) {
		return lD * this.a0P(void 0 === gn ? .5 : gn) * r.s / r.f8
	}, this.gy = function(lD, gn) {
		return lD * this.a0P(void 0 === gn ? .5 : gn) * r.s
	}, this.a51 = function(lD, gn, aHP) {
		return this.a0P(gn) * Math.min(lD * r.s, aHP * r.d) / r.f8
	}, this.y1 = function(ah) {
		return ah.toFixed(1) + "px"
	}, this.aHO = function(ah) {
		return this.o2(ah).toFixed(1) + "px"
	}, this.o2 = function(ah) {
		return ah / r.f8
	}, this.a6U = function(a4q, a6J) {
		for (var ef = "<ul>", aH = a4q.length, aA = 0; aA < aH; aA++) ef += "<li>" + a4q[aA] + ": <a href='" + a6J[aA] + "' target='_blank'>" + a6J[aA] + "</a></li>";
		return ef += "</ul>"
	}, this.aAi = function(qC) {
		return "<a href='" + qC + "' target='_blank'>" + qC + "</a>"
	}, this.aHR = function(f6) {
		navigator.clipboard && navigator.clipboard.writeText(f6.value)
	}, this.a0H = function(f6) {
		var a4 = f6.textContent;
		v.dh.ll(a4, "✔") || (1 === a4.length ? f6.textContent = "✔" : f6.textContent = a4 + " ✔", setTimeout(function() {
			f6.textContent = a4
		}, 500))
	}, this.measureText = function(ef) {
		return aj.measureText(ef).width
	}, this.aAW = function(aHS) {
		aHS.style.overflowX = "auto", aHS.style.overflowY = "hidden", aHS.style.whiteSpace = "nowrap", aHS.addEventListener("wheel", function(f6) {
			Math.abs(f6.deltaY) < Math.abs(f6.deltaX) || (this.scrollLeft += f6.deltaY, this.aAd = this.scrollLeft, f6.preventDefault())
		}), aHS.addEventListener("scroll", function() {
			this.aAd = this.scrollLeft
		})
	}
}

function a7U() {
	this.aHT = new aHU, this.aDM = new aHV, this.aDN = new aHW, this.performance = new aCi, this.aGt = new aGn, this.zy = new aHX, this.aHY = new aHZ, this.h = function() {
		this.aHT.h(), this.aDN.h(), this.performance.h(), this.aGt.h(), this.zy.h()
	}, this.a9 = function() {
		this.performance.a9(), this.aHT.a9()
	}
}

function ez() {
	this.gG = function() {
		if (2 === i.hk) i.ht = 2;
		else {
			if (8 === i.ko) v.fX.fY(0) || 0 === a5.gB[0] ? i.wN = 1 : v.fX.fY(1) || 0 === a5.gB[1] ? i.wN = 0 : i.wN = +(a5.a6[1] > a5.a6[0]);
			else {
				if (i.j) {
					var z = vr.a8();
					if (i.wO = z, a1.a2[z]) return void(i.ht = +(a1.aG[i.gC] === z))
				}
				i.wN = a7[0]
			}
			i.ht = +(i.wN === i.gC)
		}
	}
}

function aHb() {
	var dA, dB, dC, a0z;

	function dG() {
		dK(), 1 !== i.data.colorsType && (i.data.colorsData = null), d2.dM()[19] = null, d2.dN()
	}

	function aHc() {
		dK(), d2.da(21)
	}

	function dK() {
		1 === i.data.gameMode ? i.it.iu() : 0 === i.data.gameMode && 1 === i.data.colorsType && v.cj.a1h(dC.dQ(), i.data.colorsData, 262143)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, a0z = [new dF("⬅️ " + L(1), dG)], 1 === i.data.gameMode && a0z.push(new dF(L(263), aHc, 1, 1)), dA = new dE(L(15), a0z), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), 0 === i.data.gameMode && (dU.dX(new dY({
			dZ: [L(16), L(5)],
			value: i.data.colorsType
		}, function(bm) {
			dK(), i.data.colorsType = bm, 1 !== i.data.colorsType || i.data.colorsData && i.data.colorsData.length === i.df || (i.data.colorsData = new Uint32Array(i.df)), d2.da(21)
		})), dU.db(new dc));
		dU.db(new dd({
			value: i.data.selectableColor
		}, L(264), function(value) {
			i.data.selectableColor = value
		})), dR.push(dU)
	}(a0z = []), 0 === i.data.gameMode ? 1 === i.data.colorsType && function(dR) {
		var dU = new dV;
		dU.dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.colorsData, 1)), dU.db(dC), dR.push(dU)
	}(a0z) : (i.it.iu(), a0z.push(function() {
		var dU = new dV;
		dU.dW(L(13));
		for (var aA = 0; aA < a1.kg.length; aA++) {
			var gp = (aA + 1) % a1.kg.length,
				f6 = dU.he((0 == gp ? "" : "Team ") + a1.kg[gp]);
			aA && (f6.style.marginTop = "0.5em"), dU.db(new jI({
				bm: -1,
				value: i.data.teamPlayerCount[gp]
			}, 1, 0, function(f6) {
				dA.dl[1].ns(0);
				var playerCount = bO.hQ(Math.floor(f6.target.value), 0, 512);
				f6.target.value = playerCount, i.data.teamPlayerCount[f6.target.aHd] = playerCount
			})).f6.aHd = gp
		}
		return dU
	}())), a0z))
}

function dY(aHe, aEY) {
	this.hh = [];
	var aHf = this.hh;

	function click() {
		for (var aA = 0; aA < aHf.length; aA++) aHf[aA].textContent = aHf[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var bm = parseInt(this.name);
		void 0 !== aHe.bm && ce.cx.cy(aHe.bm, bm), aEY && aEY(bm)
	}
	for (var aHg, aH = aHe.dZ.length, aA = 0; aA < aH; aA++)(aHg = document.createElement("p")).textContent = "⚪ " + aHe.dZ[aA], aHg.style.margin = "0", aHg.name = "" + aA, aHg.style.cursor = "pointer", aHg.style.fontSize = "1em", aHg
		.addEventListener("click", click), aHf.push(aHg);
	aHf[aHe.value].textContent = aHf[aHe.value].textContent.replace("⚪", "🟢")
}

function a7m() {
	function aHl() {
		return {
			mg: ip.mg,
			mj: ip.mj,
			iq: ip.iq,
			om: ip.om,
			on: ip.on,
			mf: ip.mf,
			oY: ip.oY,
			mapSeed: ip.mapSeed,
			a43: ip.a43
		}
	}

	function aHi(aA) {
		return 1 !== aA && ip.aHj(aA) && aA !== ip.aHo()
	}
	this.nU = 22, this.a1m = 4096, this.mg = 0, this.mj = 0, this.iq = null, this.om = null, this.on = null, this.mf = null, this.oY = 0, this.mapSeed = 0, this.a43 = !1, this.oa = new oI, this.oX = new nI, this.ml = new mZ, this.h = function() {
		this.oX.h()
	}, this.b0 = function(map, aHh) {
		((map %= this.nU) !== this.oY || aHi(this.oY) && aHh !== this.mapSeed) && (this.a43 = !1, this.oa.oV(), bA.oe(map), this.oY = map, this.mapSeed = aHh, aHi(map) && (ip.oX.nJ[map].nV = aHh), this.aHj(this.oY) ? (map = ip.oX.nJ[this.oY],
			this.mg = map.d, this.mj = map.an, bA.oe(map.nV), oW.b0([this.mg, this.mj, map.bB, map.ap]), aHk(), mk.a3y(), oW.b7()) : z5())
	}, this.ir = function(map, aHh) {
		var mb = aHl(),
			map = (this.b0(map, aHh), this.oa.oV(), aHl());
		return aHh = mb, ip.mg = aHh.mg, ip.mj = aHh.mj, ip.iq = aHh.iq, ip.om = aHh.om, ip.on = aHh.on, ip.mf = aHh.mf, ip.oY = aHh.oY, ip.mapSeed = aHh.mapSeed, ip.a43 = aHh.a43, map
	}, this.aHn = function(canvas) {
		canvas && this.iq !== canvas && (this.mg = canvas.width, this.mj = canvas.height, this.iq = canvas, this.om = this.iq.getContext("2d", {
			alpha: !1
		}), this.ic = this.om.getImageData(0, 0, this.mg, this.mj), this.mf = this.ic.data, this.oY = this.aHo(), this.mapSeed = 0, ip.oX.nJ[this.oY].name = i.data.mapName)
	}, this.x1 = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aHo()
	}, this.aHp = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.a41 = function(aA) {
		return 1 === aA
	}, this.aHo = function() {
		return this.nU
	}, this.aHj = function(aA) {
		return void 0 === this.oX.nJ[aA].nY
	}, this.is = function(eW) {
		return 0 === eW.mapType ? eW.mapProceduralIndex < 10 ? eW.mapProceduralIndex : 10 + eW.mapProceduralIndex : 1 === eW.mapType ? eW.mapRealisticIndex + 10 : void 0
	}, this.aHq = function(eW, aHr) {
		0 === eW.mapType ? eW.mapProceduralIndex = aHr < 10 ? aHr : aHr - 10 : 1 === eW.mapType && (eW.mapRealisticIndex = aHr - 10)
	}
}

function a7r() {
	this.ch = new aHs, this.cf = new lp, this.cx = new aHt, this.d4 = new aBK, this.h = function() {
		this.cf.h(), (new aHu).h()
	}
}

function a7E() {
	var aHv, aHw, d, bF, bG, aHx, aHy;
	this.h = function() {
		aHv = new Array(2), aHw = new Array(2), this.qi = !1, aHy = aHx = vA = v9 = 0, v8 = 1, this.resize()
	}, this.resize = function() {
		d = (d = Math.floor((n.o.p() ? .072 : .0502) * r.s)) < 8 ? 8 : d;
		for (var aA = 1; 0 <= aA; aA--) aHv[aA] = document.createElement("canvas"), aHv[aA].width = d, aHv[aA].height = d, aHw[aA] = aHv[aA].getContext("2d", {
			alpha: !0
		});
		this.qQ(),
			function() {
				for (var aIC = Math.floor(1 + d / 20), aA = 1; 0 <= aA; aA--) aHw[aA].clearRect(0, 0, d, d), aHw[aA].fillStyle = t.a38, aHw[aA].beginPath(), aHw[aA].arc(d / 2, d / 2, d / 2 - aIC, 0, 2 * Math.PI), aHw[aA].fill(), aHw[aA]
					.lineWidth = aIC, aHw[aA].fillStyle = t.u, aHw[aA].strokeStyle = t.u, aHw[aA].beginPath(), aHw[aA].arc(d / 2, d / 2, d / 2 - aIC, 0, 2 * Math.PI), aHw[aA].stroke(), aEy(aHw[aA], 0, 0, d, aIC, .3, 0 === aA)
			}()
	}, this.xl = function() {
		return -v9 / v8
	}, this.rc = function() {
		return -vA / v8
	}, this.a5i = function(aI2, qF) {
		v9 = v8 * aI2 - qF
	}, this.a5j = function(aI3, qG) {
		vA = v8 * aI3 - qG
	}, this.hS = function(aI1, rd) {
		return i.q || ! function(aI1, rd) {
			return Math.pow(aI1 - (bF + d / 2), 2) + Math.pow(rd - (bG + d / 2), 2) < d * d / 4 || Math.pow(aI1 - (bF + d / 2), 2) + Math.pow(rd - (bG + 2 * d), 2) < d * d / 4
		}(aI1, rd) || ce.cf.data[8].value ? (ob.lf() && (this.qi = !0, aHx = aI1, aHy = rd), !1) : rd < bG + 1.25 * d ? this.qp(Math.floor(r.d / 2), Math.floor(r.an / 2), -200) : this.qp(Math.floor(r.d / 2), Math.floor(r.an / 2), 200)
	}, this.hW = function(aI1, rd) {
		var aI4, aI5, pC, pD;
		return !ob.lf() || (aI4 = v9, aI5 = vA, v9 += pC = aHx - aI1, vA += pD = aHy - rd, c3.hW(pC, pD), this.a61(), aHx = aI1, aHy = rd, aI4 !== v9) || aI5 !== vA
	}, this.qp = function(hT, hU, deltaY) {
		var lD;
		if (ob.lf()) {
			if (0 < deltaY) lD = (lD = 500 / (500 + deltaY)) < .5 ? .5 : lD;
			else {
				if (!(deltaY < 0)) return !1;
				lD = 2 < (lD = (500 - deltaY) / 500) ? 2 : lD
			}
			this.zY(hT, hU, lD), bl.c8 = !0
		}
		return !0
	}, this.zY = function(bF, bG, bM) {
		var qo;
		bM = qo = (qo = 1024 < (qo = bM) * v8 ? 1024 / v8 : qo) * v8 < .125 ? .125 / v8 : qo, c3.zoom(bM, bF, bG),
			function(qo, hT, hU) {
				v8 *= qo, v9 = (v9 + hT) * qo - hT, vA = (vA + hU) * qo - hU, qh.a61()
			}(bM, bF, bG)
	}, this.a61 = function() {
		var nz = r.d / 16,
			aI8 = 0,
			aI9 = r.an / 16,
			aIA = 0;
		v9 < -r.d + nz && (aI8 = -r.d + nz - v9), v9 > v8 * ip.mg - nz && (aI8 = v8 * ip.mg - nz - v9), vA < -r.an + aI9 && (aIA = -r.an + aI9 - vA), vA > v8 * ip.mj - aI9 && (aIA = v8 * ip.mj - aI9 - vA), v9 += aI8, vA += aIA, xw.a5k(), c3.aIB(
			aI8, aIA)
	}, this.qQ = function() {
		bF = r.d - d - ak.gap, bG = Math.floor(r.an / 2 - 1.25 * d)
	}, this.ai = function() {
		ce.cf.data[8].value || (aj.drawImage(aHv[0], bF, bG), aj.drawImage(aHv[1], bF, Math.floor(bG + 3 * d / 2)))
	}
}

function ng() {
	var aFi, aIF, aAS = document.createElement("div"),
		aID = document.createElement("div"),
		aIE = document.createElement("div"),
		a4n = document.createElement("div"),
		a0z = [],
		m9 = [L(265), L(266), L(267), L(268), L(269), L(270), L(271)],
		aIG = [1, 2, 3, 0, 9, 10, 11];

	function aIH(aA) {
		d2.da(8, 0, new m2(21, {
			ja: aIG[aA],
			ym: 0,
			yn: 10
		}))
	}
	this.show = function() {
			this.cy(d2.d4.aII), document.body.appendChild(aAS)
		}, this.dj = function() {
			document.body.removeChild(aAS)
		}, this.cy = function(aII) {
			for (var aIJ = [3, 0, 1, 2, 4, 5, 6], aA = 0; aA < a0z.length; aA++) {
				var d = aII[aA];
				aFi[aIJ[aA]][1].a2T.textContent = d || ""
			}
		}, this.resize = function() {
			var aA, lE = ak.gap,
				an = v.w.gy(.085),
				d = Math.min(4 * an, r.d - 2 * lE),
				aH = a0z.length;
			for (v.w.o1(aAS, lE, r.an - lE - an, d, an), v.w.mU(aAS), v.w.mU(aID, 6), aA = 0; aA < aH - 1; aA++) v.w.mU(a0z[aA].button, 6);
			for (aA = 0; aA < aH; aA++) aFi[aA][0].resize(), aFi[aA][1].resize();
			for (a0z[0].bF = 0, a0z[0].button.style.left = v.w.y1(a0z[0].bF), a0z[0].button.style.width = v.w.aHO(1.7 * an), aA = 1; aA < aH; aA++) a0z[aA].bF = a0z[aA - 1].bF + a0z[aA - 1].button.offsetWidth, a0z[aA].button.style.left = v.w.y1(a0z[
				aA].bF);
			if (!aIF) {
				if (!k9.nn()) return;
				(aIF = k9.get(14)).style.width = "24%", aIF.style.position = "absolute", aID.appendChild(aIF)
			}
			aIF.style.left = v.w.y1(0), aIF.style.top = "7%", aIE.aAd && (aIE.scrollLeft = aIE.aAd)
		}, aAS.style.position = "absolute", aID.style.width = "25%", aID.style.height = "100%", aID.style.backgroundColor = t.mQ, aIE.style.position = "absolute", aIE.style.width = "75%", aIE.style.height = "100%", aIE.style.backgroundColor = t.mQ,
		aIE.style.top = aIE.style.right = v.w.y1(0), v.w.aAW(aIE), a4n.style.height = a4n.style.maxHeight = "100%", a0z.push(new dF("", function() {
			aIH(0)
		}, t.a3e)), a0z.push(new dF("", function() {
			aIH(1)
		}, t.nk)), a0z.push(new dF("", function() {
			aIH(2)
		}, t.a3c)), a0z.push(new dF("", function() {
			aIH(3)
		}, t.a3S)), a0z.push(new dF("", function() {
			aIH(4)
		}, t.a3s)), a0z.push(new dF("", function() {
			aIH(5)
		}, t.a3r)), a0z.push(new dF("", function() {
			aIH(6)
		}, t.a3s)), aFi = new Array(a0z.length);
	for (var aA = 0; aA < a0z.length; aA++) a0z[aA].button.style.position = "absolute", aFi[aA] = [new aBQ(m9[aA], a0z[aA].button, .25, .45), new aBQ("", a0z[aA].button, .53, .84, 1)], a0z[aA].button.style.height = a0z[aA].button.style.maxHeight =
		"100%", a0z[aA].button.top = v.w.y1(0), a4n.appendChild(a0z[aA].button);
	aIE.appendChild(a4n), aAS.appendChild(aID), aAS.appendChild(aIE)
}

function aIK() {
	this.a9c = function(oh) {
		i.kq ? bx.aIL.a9c(i.gC, oh) : ct.sH.a1u(oh)
	}, this.gM = function(gI, gH) {
		i.kq ? bx.aIL.gM(i.gC, gI, gH) : ct.sH.a1v(gI, gH)
	}, this.a8k = function(gI, a1x) {
		i.kq ? bx.aIL.aIM(i.gC, gI, a1x) : ct.sH.a1w(gI, a1x)
	}, this.a9d = function(gI, oh) {
		i.kq ? bx.aIL.a9d(i.gC, gI, oh) : pI.eu.a9q(i.gC, oh) && ct.sH.a1y(gI, oh)
	}, this.a9n = function(rn, oh) {
		i.kq ? bx.aIL.a9n(i.gC, rn, oh) : pI.eu.aIN(i.gC, rn, oh) && ct.sH.a1z(rn, oh)
	}, this.aIO = function(gH) {
		i.kq ? bx.aIL.aIO(i.gC, gH) : ct.sH.a20(gH)
	}, this.kT = function(kJ) {
		i.kq ? bx.aIL.aIP(i.gC, kJ) : ct.sH.a21(kJ)
	}, this.aF0 = function(a23) {
		i.kq ? bx.aIL.aF0(i.gC, a23) : ct.sH.a22(a23)
	}, this.a6H = function() {
		i.kq ? bx.aIL.a6H(i.gC) : ct.sH.a24()
	}, this.te = function() {
		i.kq ? bx.aIL.te(i.gC) : ct.sH.a1y(1, 0)
	}, this.a9e = function(gI, oh, gH) {
		i.kq ? bx.aIL.a9e(i.gC, gI, oh, gH) : ct.sH.a25(gI, oh, gH)
	}
}

function a7x() {
	this.i1 = null, this.c8 = !1, this.bk = 0, this.cA = 56;
	var aIQ = 0;

	function aIR() {
		bl.bk = aIQ = performance.now(), bl.i1.a9(), window.requestAnimationFrame(aIR)
	}
	this.h = function() {
		this.wr(), window.requestAnimationFrame(aIR), this.bk = performance.now()
	}, this.p1 = function() {
		i.i0 ? (this.i1 = new aIS, this.i1.h()) : i.kq ? this.i1 = new mH : (this.i1 = new bj, this.i1.h())
	}, this.wr = function() {
		this.i1 = new aIT, this.c8 = !0
	}, this.a9 = function() {
		this.i1.bn++
	}, this.ff = function() {
		return this.i1.bn
	}, this.aIU = function() {
		var a4 = performance.now();
		a4 < aIQ + 1e3 || (this.bk = a4, this.i1.a9())
	}
}

function a7e() {
	this.h = function() {
		this.bW = [], this.bm = 0
	}, this.iV = function() {
		return new Uint8Array(this.bW)
	}, this.fO = function(aIV, value) {
		for (var bW = this.bW, lf = this.bm + aIV - 1, aIW = 1 + (lf >> 3); bW.length < aIW;) bW.push(0);
		for (var aA = this.bm; aA <= lf; aA++) bW[aA >> 3] |= (value >> lf - aA & 1) << 7 - (7 & aA);
		this.bm += aIV
	}, this.a89 = function(bW, aG6, aGI) {
		var aIX = v.cj.aIY(bW);
		this.fO(aG6, aIX);
		for (var aA = 0; aA < aIX; aA++) this.fO(aGI, bW[aA])
	}, this.aIZ = function(bW, aG6, aGL) {
		var aIX = v.cj.aIY(bW);
		this.fO(aG6, aIX);
		for (var aA = 0; aA < aIX; aA++) this.aIa(bW[aA], aGL)
	}, this.aIa = function(ef, aG6) {
		var aH = ef.length;
		this.fO(aG6, aH);
		for (var aA = 0; aA < aH; aA++) this.fO(16, ef.charCodeAt(aA))
	}, this.aIb = function(jG) {
		var aIc = (jG = jG.toDataURL()).split(",");
		if (aIc.length < 2) console.log("error 266");
		else {
			jG = v.dh.lo(jG = aIc[aIc.length - 1], "/", "_"), jG = v.dh.lo(jG, "\\+", "-");
			var jG = v.dh.lo(jG, "=", ""),
				u7 = jc.e5.aBl(jG),
				aH = u7.length;
			this.fO(30, aH);
			for (var aA = 0; aA < aH; aA++) this.fO(6, u7[aA])
		}
	}
}

function zP() {
	this.iM = function(ah) {
		return [ah >> 12 & 63, ah >> 6 & 63, 63 & ah]
	}, this.aId = function(ah) {
		for (var bW = this.iM(ah), aA = 0; aA < 3; aA++) bW[aA] = ~~(4.05 * bW[aA]);
		return bW
	}, this.nt = function(ah) {
		ah = this.aId(ah);
		return v.color.gs(ah[0], ah[1], ah[2])
	}, this.aIe = function(bW) {
		for (var aA = 0; aA < 3; aA++) bW[aA] = ~~(bW[aA] / 4.04);
		return (bW[0] << 12) + (bW[1] << 6) + bW[2]
	}, this.gs = function(aS, lE, cq) {
		return "rgb(" + aS + "," + lE + "," + cq + ")"
	}, this.a39 = function(aS, lE, cq, ee) {
		return "rgba(" + aS + "," + lE + "," + cq + "," + ee.toFixed(3) + ")"
	}, this.aIf = function(aR) {
		for (var bW = aR.split("(")[1].split(","), xj = aK.xj, aA = 0; aA < 3; aA++) xj[aA] = parseInt(bW[aA]);
		return 4 === bW.length ? xj[3] = 255 * parseFloat(bW[3].slice(0, -1)) : xj[3] = 255, xj
	}, this.a36 = function(aIg, gl) {
		for (var bW = aIg.slice(aIg.indexOf("(") + 1, aIg.indexOf(")")).split(","), xj = aK.xj, aA = 0; aA < 3; aA++) xj[aA] = bO.hQ(parseInt(bW[aA].trim(), 10) + gl, 0, 255);
		return 3 === bW.length ? this.gs(xj[0], xj[1], xj[2]) : (aIg = parseFloat(bW[3].trim()), this.a39(xj[0], xj[1], xj[2], aIg = 0 === aIg ? .3 : aIg))
	}, this.aIh = function(bW) {
		for (var ef = "#", aA = 0; aA < 3; aA++) {
			var aS = bW[aA].toString(16);
			ef += 1 === aS.length ? "0" + aS : aS
		}
		return ef
	}, this.aIi = function(ef) {
		var aS, lE;
		return ef.length < 7 ? t.kb : (aS = parseInt(ef.slice(1, 3), 16), lE = parseInt(ef.slice(3, 5), 16), ef = parseInt(ef.slice(5, 7), 16), this.gs(aS, lE, ef))
	}
}

function aIj() {
	this.ai = function() {
		if (0 !== wb.d4.c && (aj.globalAlpha = Math.min(wb.d4.c / 580, 1), aj.drawImage(wb.d4.aIm, 1 + qh.xl(), 1 + qh.rc()), aj.globalAlpha = 1, i.bu)) {
			for (var jr = v9 / v8, h6 = vA / v8, oC = (r.d + v9) / v8, oD = (r.an + vA) / v8, gn = wb.d4.aIn * v8, aIo = wb.d4.aIo, aA = i.fd - 1; 0 <= aA; aA--) ! function(aA, gn, jr, h6, oC, oD, aIo) {
				var highlight;
				0 === a5.gB[aA] || 0 === a5.a6[aA] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (gn *= 2), oC = r.d * ((a5.pN[aA] + a5.pQ[aA] + 1) / 2 - jr) / (oC - jr) - .5 * gn, jr = r.an * ((a5
					.pP[aA] + a5.pR[aA] + 1) / 2 - h6) / (oD - h6) - .5 * gn, oC > r.d) || jr > r.an || oC < -gn || jr < -gn || (highlight ? aj.setTransform(2 * v8, 0, 0, 2 * v8, oC, jr) : aj.setTransform(v8, 0, 0, v8, oC, jr), aj
					.drawImage(aIo[i.j ? a1.aG[aA] : 1], 0, 0))
			}(aA, gn, jr, h6, oC, oD, aIo);
			aj.setTransform(v8, 0, 0, v8, 0, 0)
		}
	}
}

function ex() {
	this.a9 = function() {
		var aIv;
		2 === i.hk ? (hu.rJ(0, 59), ob.a5f(2700)) : i.ko < 7 ? (aIv = a1.a2[i.wO], aIv = a1.kg[aIv], qI.sN(L(272, [aIv]), 2, 1, 12), hu.ro(0, L(273, [aIv]), 40, 0, t.u, t.ac, -1, !1), ob.a5f(2700)) : 8 === i.ko ? (i.ht ? hu.rJ(i.wN, 2) : hu.rJ(
			1 - i.gC, 3), i.sP.aIu(i.wN), ob.rg(i.wN, 2700, !1, 0)) : 9 === i.ko ? (hu.sM(), ob.a5f(2700)) : (hu.s4(i.wN), ob.rg(i.wN, 2700, !1, 0))
	}
}

function z0(data) {
	var gQ, aIx, aR, a4q;

	function aIy(bN) {
		var aH = data.data.length;
		if (aH) {
			for (var ym, max = min = parseInt(data.data[0][0]), aA = 1; aA < aH; aA++) var aBF = parseInt(data.data[aA][0]),
				min = Math.min(aBF, min),
				max = Math.max(aBF, max);
			ym = bN < 0 ? min + bN : max + 1, d2.da(8, d2.jf().ly, new m2(21, {
				ja: data.ja,
				ym: ym,
				yn: ym + Math.abs(bN)
			}))
		}
	}
	this.show = function() {
			gQ.show(), this.resize()
		}, this.dj = function() {
			gQ.dj()
		}, this.resize = function() {
			gQ.resize(), aIx.resize()
		}, this.dk = function(aR) {
			2 === aR && gQ.dl[0].ch()
		}, aR = data.data.length ? 0 : 1, aR = [new dF("⬅️ " + L(1), function() {
			d2.dN()
		}), new dF(L(274), function() {
			aIy(-10)
		}, aR, 0, 1), new dF(L(275), function() {
			aIy(10)
		}, aR, 0, 1), new dF(L(8), function() {
			d2.da(11, 10, new aIz({
				ja: data.ja
			}))
		})], a4q = [L(276), L(277), L(278), L(279), L(280), L(281), L(282), L(283), L(284), L(285), L(168), L(169), L(286)], gQ = new dE(a4q[data.ja], aR),
		function() {
			var aA, gl = {
					a4k: []
				},
				a4k = gl.a4k,
				aJ1 = data.data,
				aH = aJ1.length;
			aH && 0 === aJ1[0][0] && 0 <= (bm = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.ja]) && (d2.d4.aII[bm] = aJ1[0][1]);
			var lD = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.ja],
				lU = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.ja],
				bm = [
					[L(287), L(288) + " ↗", L(289)],
					[L(287), L(290), L(291), L(292) + " ↗"],
					[L(287), L(288) + " ↗", L(291)],
					[L(287), L(288) + " ↗", L(291)],
					[L(293), L(294), L(295) + " ↗", L(296) + " ↗", L(146)],
					[L(293), L(294), L(297) + " ↗", L(173) + " ↗", L(298)],
					[L(293), L(294), L(299) + " ↗", L(300) + " ↗", L(174)],
					[L(293), L(294), L(297) + " ↗", L(173) + " ↗", L(301)],
					[L(293), L(294), L(295) + " ↗", L(296) + " ↗", L(146)],
					[L(287), L(288) + " ↗", L(291)],
					[L(287), L(288) + " ↗", L(302)],
					[L(287), L(288) + " ↗", L(291)],
					[L(293), L(294), L(303) + " ↗", L(304) + " ↗", L(305)]
				];
			if (gl.a4q = bm[data.ja], gl.a4w = [
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
				][data.ja], 0 === data.ja || 2 === data.ja || 3 === data.ja || 9 === data.ja || 10 === data.ja || 11 === data.ja)
				for (aA = 0; aA < aH; aA++) a4k.push([{
					ah: aJ1[aA][0] + 1 + ".",
					a4: 0
				}, {
					ah: aJ1[aA][1],
					a4: 1,
					e7: aJ1[aA][4],
					a4z: aJ1[aA][3]
				}, {
					ah: (lD * aJ1[aA][2]).toFixed(lU),
					a4: 0
				}]);
			else if (12 === data.ja)
				for (aA = 0; aA < aH; aA++) {
					var aJ4 = aJ1[aA][3];
					a4k.push([{
						ah: "" + aJ1[aA][0],
						a4: 0
					}, {
						ah: "" + aJ1[aA][4],
						a4: 0
					}, {
						ah: aJ1[aA][5],
						a4: 1,
						e7: aJ1[aA][1],
						a4z: 0
					}, {
						ah: aJ1[aA][6],
						a4: 1,
						e7: aJ1[aA][2],
						a4z: 0
					}, {
						ah: cb.mF(aJ4 % 16, aJ4 >> 4),
						a4: 0
					}])
				} else if (1 === data.ja)
					for (aA = 0; aA < aH; aA++) a4k.push([{
						ah: aJ1[aA][0] + 1 + ".",
						a4: 0
					}, {
						ah: aJ1[aA][1],
						a4: 0
					}, {
						ah: (lD * aJ1[aA][2]).toFixed(lU),
						a4: 0
					}, {
						ah: aJ1[aA][3],
						a4: 1,
						e7: aJ1[aA][5],
						a4z: aJ1[aA][4]
					}]);
				else if (4 === data.ja || 5 === data.ja || 6 === data.ja || 7 === data.ja || 8 === data.ja)
				for (aA = 0; aA < aH; aA++) {
					var aJ5 = aJ1[aA][5];
					4 === data.ja || 8 === data.ja ? "100%" === (aJ5 = (aJ5 % 64 * 100 / (aJ5 >> 6)).toFixed(0) + "%") && (4 === data.ja ? aJ5 += " (" + L(306) + ")" : aJ5 += " (" + L(307) + ")") : 5 === data.ja ? 32768 <= aJ5 && (aJ5 = -(aJ5 -
						32768)) : aJ5 = (lD * aJ5).toFixed(lU), a4k.push([{
						ah: "" + aJ1[aA][0],
						a4: 0
					}, {
						ah: "" + aJ1[aA][6],
						a4: 0
					}, {
						ah: aJ1[aA][7],
						a4: 1,
						e7: aJ1[aA][1],
						a4z: aJ1[aA][2]
					}, {
						ah: aJ1[aA][8],
						a4: 1,
						e7: aJ1[aA][3],
						a4z: aJ1[aA][4]
					}, {
						ah: "" + aJ5,
						a4: 0
					}])
				}
			aIx = new a4j(gQ.dI, gl)
		}()
}

function aJ6() {
	this.cf = {}, this.aII = new Array(7), this.z1 = null, this.aJ7 = null, this.aDZ = 0, this.jR = [0, 0], this.fI = function() {
		d2.da(5, 5)
	}, this.np = function() {
		d2.fH(), tp.h()
	}, __fx.customLobby.setJoinFunction(() => {
		d2.fH(), tp.h()
	}), this.d5 = function() {
		d2.da(0 === d0.d1() ? 5 : 0)
	}, this.a69 = function() {
		if (1 === ce.cf.data[130].value) d2.da(8, d2.jf().ly, new m2(24, {
			gi: ce.cf.data[125].value,
			ym: ce.cf.data[128].value,
			yn: ce.cf.data[129].value
		}));
		else {
			for (var bW = (bW = ce.cf.data[126].value.split(",")).slice(0, 10), aA = 0; aA < bW.length; aA++) bW[aA] = bW[aA].trim().slice(0, 7).toUpperCase();
			1 === bW.length && 0 === bW[0].length && (bW = []), d2.da(8, d2.jf().ly, new m2(23, {
				gi: ce.cf.data[125].value,
				eb: bW
			}))
		}
	}, this.nr = function(ly, target) {
		d2.da(4, ly, new fG("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + kH.a6T +
			"' target='_blank'>" + kH.a6T + "</a>", !1, [new dF("⬅️ " + L(1), function() {
				d2.da(ly)
			}), new dF("✅ Accept", function() {
				ce.cx.cy(140, 1), 0 === target ? d2.da(2, ly) : d2.da(8, ly, new m2(target))
			})]))
	}, this.aJ8 = function() {
		for (var aA = 0; aA < 7; aA++) this.aII[aA] = jc.ji.jj(jX.jb(5));
		this.aII[1] = "[" + this.aII[1] + "]", 5 === d2.d3 && (d2.jf().nf.cy(this.aII), d2.jf().resize())
	}
}

function cF() {
	wW.aV(), aj.setTransform(v8, 0, 0, v8, 0, 0), aj.imageSmoothingEnabled = v8 < 3, aj.drawImage(ip.iq, qh.xl(), qh.rc()), wb.a8F.ai(), aj.drawImage(aCW, qh.xl(), qh.rc()), wW.ai(), pI.ai(), c3.ai(), (i.q ? (vr.ai(), hy) : (hu.ai(), hx.ai(), qX
	.ai(), hy.ai(), hn.ai(), c0.ai(), qh.ai(), qI.ai(), vr.ai(), vY.ai(), tM.ai(), mI.ai(), kS.ai(), hs.ai(), cY.ai(), wl)).ai(), d2.ai()
}

function aEv(f, d, an) {
	f.clearRect(0, 0, d, an), f.fillStyle = t.ac, f.fillRect(0, 0, d, an)
}

function aEw(f, d, an, aEx) {
	f.fillStyle = t.u, f.fillRect(0, 0, d, aEx), f.fillRect(0, 0, aEx, an), f.fillRect(d - aEx, 0, aEx, an), f.fillRect(0, an - aEx, d, aEx)
}

function aEy(f, bF, bG, iZ, aEx, aL, aJ9) {
	f.fillStyle = t.u;
	var aL = Math.floor(iZ * aL),
		a52 = (aL += (aL - aEx) % 2, Math.floor((aL - aEx) / 2)),
		iZ = Math.floor((iZ - aL) / 2);
	f.fillRect(bF + iZ, bG + iZ + a52, aL, aEx), aJ9 && f.fillRect(bF + iZ + a52, bG + iZ, aEx, aL)
}

function a2S(aBR, aBS, aJB, aJC) {
	var self;
	this.a2T = document.createElement("span"), (self = this).a2T.textContent = aBR, self.a2T.style.color = t.u, self.a2T.style.position = "absolute", self.a2T.style.font = "inherit", aJC ? self.a2T.style.bottom = "0.06em" : self.a2T.style.top =
		"0.12em", aJB ? self.a2T.style.left = "0.2em" : self.a2T.style.right = "0.2em", self.a2T.style.fontSize = "0.6em", self.a2T.style.pointerEvents = "none", self.a2T.style.whiteSpace = "pre", aBS.style.position = "relative", aBS.style.overflow =
		"hidden", aBS.appendChild(self.a2T)
}

function a75() {
	this.bP = function(ee, cq) {
		return Math.floor((ee + .5) / cq)
	}, this.aJD = function(ee, cq) {
		return Math.floor(ee * (cq + .5))
	}, this.sqrt = function(ah) {
		return ~~Math.sqrt(ah + .5)
	}, this.pow = function(f6) {
		return Math.floor(Math.pow(2, f6) + .5)
	}, this.hQ = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aJE = function(mb, a4B, aAe) {
		return Math.max(Math.min(mb, a4B), aAe)
	}, this.aJF = function(aJG, aJH, bF, bG) {
		bF -= aJG, aJG = bG - aJH, bG = 0;
		return 0 == bF ? bG = 0 <= aJG ? Math.PI : 0 : (bG = Math.atan(aJG / bF), bG += 0 < bF ? .5 * Math.PI : 1.5 * Math.PI), bG
	}, this.log2 = function(ah) {
		return Math.floor(!!ah * (1 + Math.log2(ah + .5)))
	}, this.log10 = function(ah) {
		return Math.floor(Math.log10(ah + .5))
	}, this.aJJ = function(ur, us, aJK, aJL, aJM) {
		return aJK - aJM < ur && ur < aJK + aJM && aJL - aJM < us && us < aJL + aJM
	}, this.a5y = function(aI8, aIA) {
		return aI8 * aI8 + aIA * aIA
	}
}

function wR() {
	this.rt = function(player, oh) {
		wZ.aJN(player, ri.rj(oh), ri.rk(oh)) && (bl.c8 = !0), i.kq && this.a9()
	}, this.a9 = function() {
		i.bu = !1;
		for (var aA = 0; aA < i.fd; aA++) 0 !== a5.gB[aA] && 0 === a5.a6[aA] && wZ.aJO(aA);
		0 !== a5.gB[i.gC] ? (cZ.a5H[7] = a5.a6[i.gC], cZ.a5H[8] = a5.s9[i.gC], qX.qd(), c0.vX(), i.i0 || ob.rl(a5.pN[i.gC] - 5, a5.pP[i.gC] - 5, a5.pQ[i.gC] + 5, a5.pR[i.gC] + 5), wl.h()) : hs.show(!1, !1, !1, !0), hu.rs(18), c3.c4(), c3.c5(!0),
			wb.d4.aJP(), kS.dj(), i.c2 = null, c6.aJQ = !0, c6.cK(), i.kq && n.o.setState(1)
	}
}

function aJR() {
	var gQ, lx, dR, cs, dU;

	function aJS() {
		var bk;
		cs !== ce.cf.data[12].value ? (cg.h(), cg.cr(), bk = bl.bk, d2.da(4, 1, new fG(L(309), L(310), !1, [new dF("⬅️ " + L(1), function() {
			d2.da(1)
		}), new dF("🔄 Reload", function() {
			bl.bk < bk + 1500 || n.o.fJ()
		}, t.rX)]))) : d2.da(1)
	}
	this.show = function() {
			cs = ce.cf.data[12].value, gQ.show(), this.resize()
		}, this.dj = function() {
			gQ.dj()
		}, this.resize = function() {
			gQ.resize(), lx.resize()
		}, this.dk = function(aR) {
			2 === aR && gQ.dl[0].ch()
		}, gQ = new dE(L(200), [new dF("⬅️ " + L(1), aJS), new dF(L(308), function() {
			d2.fH(), ce.cx.aFG(), d2.da(2)
		})]), dR = [], (dU = new dV).dW(L(311)), dU.ha(L(312)), dR.push(dU),
		function(dR) {
			var dU = new dV,
				bW = (dU.dW(L(333)), cg.data.aAp());
			dU.dX(new dY({
				dZ: bW,
				value: cg.data.aAs(bW)
			}, function(bm) {
				return ce.cx.cy(12, bW[bm].split(":")[0]), !0
			})), dR.push(dU)
		}(dR),
		function(dR) {
			var dU = new dV,
				aJV = (dU.dW(L(331)), []);
			dU.db(new jH([new dF(L(332), function(f6) {
				p2.aJW();
				for (var aA = 0; aA < aJV.length; aA++) aJV[aA].f6.value = p2.p3[aA];
				return v.w.a0H(f6), !0
			}).button]));
			for (var aA = 0; aA < p2.aJX.length; aA++) {
				dU.ha(p2.aJX[aA]);
				for (var ee = 0; ee < 2; ee++) {
					var bm = 2 * aA + ee,
						nd = new jI({
							value: p2.p3[bm],
							bm: -1
						});
					nd.f6.aJY = bm, aJV.push(nd), nd.f6.addEventListener("keydown", function(f6) {
						f6.preventDefault();
						var code = f6.code;
						f6.target.value = code, p2.aJZ(f6.target.aJY, code)
					}), ee && (nd.f6.style.marginLeft = "4%"), nd.f6.style.width = "48%", dU.db(nd)
				}
			}
			dR.push(dU)
		}(dR), (dU = new dV).dW(L(229)), dU.dX(new dY({
			dZ: ["1", "2"],
			value: tp.a1O - 1
		}, function(aA) {
			tp.a1O = aA + 1
		})), dR.push(dU), (dU = new dV).dW(L(313)), ce.cf.data[1].dZ = [L(314), L(315), L(316), L(317)], dU.dX(new dY(ce.cf.data[1])), dR.push(dU), (dU = new dV).dW(L(318)), ce.cf.data[9].dZ = [L(315), L(319), L(320)], dU.dX(new dY(ce.cf.data[9])),
		dR.push(dU), (dU = new dV).dW(L(321)), ce.cf.data[11].dZ = [L(322), L(159), L(323)], dU.dX(new dY(ce.cf.data[11])), dR.push(dU), (dU = new dV).dW(L(324)), dU.db(new dd(ce.cf.data[2])), dR.push(dU), (dU = new dV).dW(L(325)), dU.db(new dd(ce.cf
			.data[7])), dR.push(dU), (dU = new dV).dW(L(326)), dU.db(new dd(ce.cf.data[8])), dR.push(dU), (dU = new dV).dW(L(327)), dU.db(new jI(ce.cf.data[5])), dR.push(dU), (dU = new dV).dW(L(328)), dU.db(new dd(ce.cf.data[13], L(329))), dU.db(
			new dd(ce.cf.data[14], L(330))), dR.push(dU), lx = new dH(gQ.dI, dR)
}

function a7l() {
	function aJb() {
		8 === i.ko && 1 === i.bw && hr.er.hm()
	}

	function aJa(player) {
		i.bu ? (n2.aJd(player), aF.my(), i.kq && i.c2.a9()) : a6w.y9(player)
	}
	this.a6H = function(player) {
		hu.rJ(player, player === i.gC ? 21 : 22), aJa(player), aJb()
	}, this.aJc = function(player) {
		1 === i.bw && 0 !== a5.gB[player] && 2 !== a5.ry[player] && aJa(player), i.hq--, i.hp--, hu.rJ(player, 4), v.fX.aFB(2) && c0.c5(!0), aJb()
	}
}

function dc() {
	var f6;
	this.f6 = document.createElement("hr"), this.resize = function() {
		v.w.mU(this.f6, 8, t.a3I)
	}, (f6 = this.f6).style.marginBottom = f6.style.marginTop = "0.65em", f6.style.marginLeft = f6.style.marginRight = "-4%", f6.style.border = "none"
}

function p0() {
	var aJe;
	this.h = function() {
		aJe = !1
	}, this.a9 = function() {
		var aL;
		if (function() {
				if (!aJe) {
					if (bl.ff() % 30 != 9) return;
					if (!v.fX.aCm(90)) return;
					aJe = !0
				}
				return 1
			}() && (! function() {
				var eW = hu.se(956);
				if (eW) {
					if (v.fX.pz(eW.player)) return 1;
					hu.sc(956, 0)
				}
				return
			}() && (-1 === (aL = (i.j ? function() {
				var id = vr.a0(),
					aH = aF.aI;
				if (a1.a2[id])
					for (var fT = aF.aE, aG = a1.aG, aA = 0; aA < aH; aA++) {
						var aL = fT[aA];
						if (aG[aL] !== id) return aL
					} else if (1 < aH) return a7[aH - 1];
				return -1
			} : function() {
				for (var n0 = aF.aI, mz = aF.aE, aJm = aFC, aA = 0; aA < n0; aA++) {
					var aL = mz[aA];
					if (0 !== aJm[aL]) return aL
				}
				return -1
			})()) ? ! function() {
				var eW = hu.se(957);
				if (eW && eW.rV) {
					if (mr.pU(eW.rV.oh << 2)) return 1;
					hu.sc(957, 0)
				}
				return
			}() : (hu.ro(0, L(334, [a5.r3[aL]]), 956, aL, t.u, t.ac, -1, !0), 0)))) {
			var aH = wX.aHT.aJn;
			if (0 !== aH)
				for (var cf = wX.aHT.cf, aA = 0; aA < aH; aA++) {
					var oh = cf[aA];
					if (mr.pU(oh << 2)) return void hu.ro(0, L(335, [ri.rj(oh), ri.rk(oh)]), 957, 0, t.u, t.ac, -1, !0, void 0, {
						ee: 1,
						oh: oh
					})
				}
		}
	}
}

function a7s() {
	this.aJo = 0, this.aJp = 0, this.aJq = 0, this.aJr = 0, this.aJs = 0, this.aJt = 0, this.xx = [0, 0, 0, 0], this.a5k = function() {
		this.aJo = qh.xl(), this.aJp = qh.rc(), this.aJq = -this.aJo, this.aJr = -this.aJp, this.aJs = r.d / v8, this.aJt = r.an / v8, this.xx[0] = Math.floor(this.aJq), this.xx[1] = Math.floor(this.aJr), this.xx[2] = Math.floor(this.xx[0] + this
			.aJs + 1), this.xx[3] = Math.floor(this.xx[1] + this.aJt + 1), c6.aJu = !0
	}
}

function a7L() {
	function aJy(player) {
		var a4;
		v.fX.aAN(player) && (a4 = a5.s9[player] - a5.wy[player] + gD.aAJ(player), cZ.a0q(player, Math.abs(a4), a4 < 0 ? 18 : 12)), a5.s9[player] = 0, a5.wy[player] = 0
	}

	function aK3() {
		hs.show(!1, !1, !1, !0), c0.va(), hr.f0.zd()
	}

	function aJw(player, aAQ) {
		for (var aA = aAQ.length - 1; 0 <= aA; aA--) gD.aAC(aAQ[aA], player)
	}

	function aJx(player) {
		for (var pN = a5.pN, pQ = a5.pQ, pP = a5.pP, pR = a5.pR, jr = pN[player], h6 = pP[player], mg = ip.mg, a6 = a5.a6, bF = pQ[player]; jr <= bF; bF--)
			for (var bG = pR[player]; h6 <= bG; bG--) {
				var aL = 4 * (bG * mg + bF);
				mr.pk(player, aL) && (mr.xq(aL), a6[player]--)
			}
		pQ[player] = pR[player] = 0, pN[player] = pP[player] = Math.max(mg, ip.mj)
	}
	this.n3 = function(aL) {
		var player, a4 = a5.a6[aL];
		pI.d4.aDJ[aL] ? a4 && (aJw(player = aL, gD.aAP(player)), aJx(player), we.a0o(player), gD.clear(player), aJy(player), function(player) {
			a5.n1[player] = 0, a5.pT[player] = [], a5.pZ[player] = [], a5.pa[player] = [], a5.pb[player] = []
		}(player)) : !a4 && a5.pT[aL].length || this.aJd(aL)
	}, this.aJd = function(player) {
		! function(player) {
			v.fX.fY(player) || (a5.fU[player] = zb.zc.fW(), i.hp++);
			var aAQ = gD.aAP(player);
			0 === aAQ.length ? v.fX.aK2(player) && aK3() : (aJw(player, aAQ), function(player, aAQ) {
				var aK6 = aAQ[function(aAQ) {
					var aA, bm = 0;
					for (aA = aAQ.length - 1; 1 <= aA; aA--) a5.a6[aAQ[aA]] > a5.a6[aAQ[bm]] && (bm = aA);
					return bm
				}(aAQ)];
				9 === i.ko && (1 === a1.aG[player] ? bA.aK7(8) && lO.uP(aK6) : cX.r6[player] && (hu.sc(765, 0), hu.ro(280, L(336, [a5.r3[aK6], a5.r3[player]]), 765, aK6, t.kb, t.a3t, -1, !0)));
				if (v.fX.aK2(player)) aK3(), hu.rJ(aK6, 1);
				else {
					for (var aA = aAQ.length - 1; 0 <= aA; aA--)
						if (v.fX.aAN(aAQ[aA]) && (cZ.a5H[4 - v.fX.fY(player)]++, v.fX.aK2(aAQ[aA]))) return hu.rJ(player, 0);
					v.fX.fY(player) || hu.rx(0, player, aK6)
				}
			}(player, aAQ))
		}(player), aJx(player), aJy(player),
			function(player) {
				a5.gB[player] = 0, a5.pT[player] = null, a5.pZ[player] = null, a5.pa[player] = null, a5.pb[player] = null
			}(player), we.a0o(player), gD.clear(player), pI.a8D.aDd(player)
	}
}

function a83() {
	this.aK8 = 0, this.eX = null, this.eU = null, this.w9 = null, this.d4 = null, this.tg = null, this.g2 = null, this.message = null, this.yQ = null, this.en = null, this.yI = new aK9, this.tf = 0, this.aCw = 0, this.h = function() {
		this.aCw = bl.bk, this.aK8 = jc.e5.aFx(ce.cf.data[105].value), this.eU = new aKA, this.w9 = new dm, this.d4 = new fn, this.tg = new aKB, this.g2 = new vx, this.message = new aKC, this.yQ = new aKD, this.en = new aFg, this.d4.h(), zH.h(),
			this.tf = 1, n.o.setState(1), d0.setState(0)
	}, this.zF = function() {
		this.en && this.en.zF(), this.eX = null, this.eU = null, this.w9 = null, this.d4 = null, this.tg = null, this.g2 = null, this.message = null, this.yQ = null, this.en = null, this.tf = 0, zH.zF(), n.o.setState(0)
	}
}

function aKE() {
	var gQ, lx, dR;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), lx.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(337), [new dF("⬅️ " + L(1), function() {
		d2.a4a(13)
	})]), lx = new dH(gQ.dI, ((dR = []).push(function() {
		var dU = new dV,
			aEc = (dU.dW(L(338)), dU.ha(L(339)), new dF(L(340), function() {
				ce.cx.cy(130, 0), d2.d4.a69()
			}, 0, 0, 1)),
			nd = new jI(ce.cf.data[126], 0, function() {
				aEc.button.click()
			});
		return dU.db(nd), nd.f6.placeholder = "a,b,c", nd.f6.style.marginTop = "0.5em", dU.db(new jH([aEc.button])), dU
	}()), dR.push(function() {
		var dU = new dV,
			aEc = new dF(L(340), function() {
				ce.cx.cy(130, 1), d2.d4.a69()
			}, 0, 0, 1),
			aKJ = new jI(ce.cf.data[129], 1, function() {
				aKJ.f6.focus()
			}),
			aKK = new jI(ce.cf.data[128], 1, function() {
				aEc.button.click()
			});
		return dU.dW(L(341)), dU.db(aKK), aKK.f6.style.marginBottom = "0.5em", dU.dW(L(342)), dU.db(aKJ), dU.db(new jH([aEc.button])), dU
	}()), dR.push(function() {
		var dU = new dV;
		return dU.dW(L(343)), ce.cf.data[125].dZ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], dU.dX(new dY(ce.cf.data[125])), dU
	}()), dR.push(function() {
		var dU = new dV;
		return dU.dW(L(344)), dU.db(new dd(ce.cf.data[127], L(345))), dU
	}()), dR))
}

function a8M() {
	function aKS(aKX, aKM) {
		if (! function(aKX, aKc) {
				var aKN = ri.a5Z(aKX),
					aKd = Math.abs(ri.rj(aKc) - ri.rj(aKN)),
					aKN = Math.abs(ri.rk(aKc) - ri.rk(aKN));
				return 0 !== Math.max(aKd, aKN) && (function(aKW, aKX, aKd, aKe) {
					var aKg = ri.aKh(aKW),
						aKW = ri.aKj(aKW),
						aKk = ri.aKh(aKX),
						aKX = ri.aKj(aKX),
						aKk = aKk - aKg,
						aKX = aKX - aKW,
						aKo = Math.abs(aKk),
						aKp = Math.abs(aKX),
						aKk = 0 < aKk ? 1 : 3,
						aKX = 0 < aKX ? 2 : 0;
					aKp < aKo ? aKs(aKg, aKW, aKg + aKo, aKW + aKp, aKk, aKX, aKd) : aKs(aKW, aKg, aKW + aKp, aKg + aKo, aKX, aKk, aKe)
				}(aKX, ri.aKT(aKc), aKd, aKN), !0)
			}(aKX, aKM)) return !1;
		if (0 === aK.aKZ[0]) return !!mr.oi(aKM << 2);
		if (! function(aKc) {
				if (mr.oi(aKc << 2)) return 1;
				return function(aKc) {
					var aA, bZ, aKt = pI.d4.aKt,
						aKy = ri,
						aH = aK.aKZ[0],
						aKz = 4 * aKc;
					for (aA = aH - 1; 0 <= aA; aA--) {
						bZ = aKt[aA];
						var aL0 = aKz;
						if (aKz = aKy.aL1(aKz, bZ + 2 & 3), mr.oi(aKz)) return aK.aKZ[0] = aA, aK.vD[1] = aKz >> 2, aK.vD[2] = 1 + bZ, aK.vD[4] = aL0, 1
					}
					return
				}(aKc)
			}(aKM)) return !1;
		if (aK.vD[2] && mr.sB(aK.vD[4])) return !1;
		var aA, aKM = ri.a5Z(aKX),
			pE = md,
			aKt = pI.d4.aKt,
			aH = aK.aKZ[0] - 1,
			aKz = 4 * aKM,
			aL3 = ri.aL3;
		for (aA = 0; aA < aH; aA++)
			if (aKz += aL3[aKt[aA]], 0 !== pE[aKz + 3] || 2 !== pE[aKz + 2]) return !!void 0;
		return !!1
	}

	function aKs(aKg, aKi, aKk, aKl, aKq, aKr, aKd) {
		for (var bG, aKt = pI.d4.aKt, gn = 0, aKu = 0, an = aKl - aKi, d = aKk - aKg, aKv = aKg % 16, aA = 1; aA <= aKd; aA++) aKt[gn++] = aKq, aKt[gn] = aKr, gn += (bG = (an * (aKv + (aA << 4)) + .5) / d >> 4) - aKu, aKu = bG;
		aK.aKw(aK.aKZ, gn)
	}
	this.aKL = function(player, aKM) {
		var bZ, aKN, aGD = ri.aKO(player, aKM);
		return aGD !== aKM && (bZ = ri.aKP(aGD, aKM), aKN = ri.aKQ(aGD, bZ), !(!mr.oi(aKN << 2) && (bZ = ri.aKR(aGD, aKM, bZ), aKN = ri.aKQ(aGD, bZ), !mr.oi(aKN << 2)) || (aK.vD[0] = aKN, aK.vD[1] = aKM, aK.vD[2] = 0, aKN !== aKM && (!aKS(ri.aKT(
			aKN), aKM) || 0 !== aK.vD[2] && ri.aKU(player, aK.vD[1] + ri.aDS[aK.vD[2] - 1] << 2)))))
	}, this.aKV = function(aKM) {
		var aKW = pI.d4.uy[aK.vD[3]];
		return aK.vD[1] = aKM, aK.vD[2] = 0, aKS(aKW, aKM)
	}
}

function ev() {
	this.aL4 = function() {
		for (var aH = aF.aI, fT = aF.aE, a4H = [], aA = 0; aA < aH; aA++) {
			var aL = fT[aA];
			v.fX.aL5(aL) && a4H.push(aL)
		}
		return a4H
	}, this.aL6 = function() {
		if (0 === a1.a2[i.wO]) return this.aL7();
		vr.aB(i.wO);
		for (var a4H = [], aH = aK.aM[0], aJ = aK.aJ, aA = 0; aA < aH; aA++) {
			var aL = aJ[aA];
			v.fX.aL5(aL) && a4H.push(aL)
		}
		return a4H
	}, this.aL7 = function() {
		var aL = a7[0];
		return v.fX.aL5(aL) ? [aL] : []
	}, this.aL8 = function(a4H) {
		for (var aH = a4H.length, a4 = 0, a6 = a5.a6, aA = 0; aA < aH; aA++) a4 += a6[a4H[aA]];
		return a4
	}
}

function dH(a2Z, dR) {
	var hZ = document.createElement("div");

	function a50() {
		var aA, aHN, an, gn, gl, aLA = r.f8 * hZ.offsetWidth,
			aLC = new Float64Array(function(aLA) {
				var d = .25 * v.w.a0P(.6) * r.s;
				return Math.max(Math.floor(aLA / d), 1)
			}(aLA)),
			a4c = ak.a4c,
			aLD = (aLA - (aLC.length + 1) * ak.gap) / (aLC.length * r.f8);
		for (aLC.fill(a4c), aA = 0; aA < dR.length; aA++) aHN = (gl = dR[aA].hZ).style, an = v.cj.min(aLC), gn = aLC.indexOf(an), aHN.top = v.w.y1(an), aHN.left = v.w.y1(a4c + gn * (aLD + a4c)), aHN.width = v.w.y1(aLD), v.w.mU(gl, 5), aLC[gn] += gl
			.offsetHeight + 3 * a4c;
		hZ.style.height = v.w.y1(v.cj.max(aLC) - 2 * a4c)
	}
	this.jM = hZ, this.jN = dR, this.resize = function() {
		var aA;
		for (aA = 0; aA < dR.length; aA++) dR[aA].resize();
		a50(), a50()
	}, hZ.style.width = "100%", hZ.style.maxWidth = "100%", a2Z.style.lineHeight = "1.5em", a2Z.style.overflowX = "hidden", a2Z.style.overflowY = "auto";
	for (var aA = 0; aA < dR.length; aA++) hZ.appendChild(dR[aA].hZ);
	a2Z.appendChild(hZ)
}

function aHU() {
	var aLE = 0,
		aLF = 0,
		aLG = 300,
		aLH = 300,
		aLI = 0;
	this.aJn = 0, this.cf = new Uint32Array(512), this.h = function() {
		aLF = aLE = 0, this.aJn = 0, aLI = 0
	}, this.a9 = function() {
		if (function() {
				var aH = wX.aHT.aJn;
				if (0 === aH) return 1;
				var cf = wX.aHT.cf;
				if (bl.ff() % 35 == 6) {
					for (var aA = aH - 1; 0 <= aA; aA--) mr.pU(cf[aA] << 2) || (aH--, cf[aA] = cf[aH]);
					wX.aHT.aJn = aH
				}
				return aH < cf.length
			}())
			if (aLG <= aLE) {
				var aLM = wX.aHT.aJn;
				if (aLM) {
					if (bl.ff() % 350 != 1) return;
					if (aLI !== aLM) return void(aLI = aLM);
					if (!v.fX.fY(a7[0])) return
				} else if (bl.ff() % 12 != 8) return;
				v.fX.aLN() || wX.aHT.h()
			} else {
				var aA, d = ip.mg,
					aLO = d - 2,
					aLM = aLO * (ip.mj - 2),
					aLP = aLG,
					cf = wX.aHT.cf,
					cn = wX.aHT.aJn,
					aLQ = cf.length,
					gn = Math.min(aLF + aLP * ((1 + 19 * wX.performance.aCj) * aLH), aLM);
				for (aA = aLF; aA < gn; aA += aLP) {
					var bM = 4 * (aA % aLO + (bO.bP(aA, aLO) + 1) * d + 1);
					if (mr.pU(bM) && (cf[cn] = bM >> 2, ++cn === aLQ)) {
						aA += aLP;
						break
					}
				}(aLF = aA) >= aLM && (aLF = ++aLE), wX.aHT.aJn = cn
			}
	}
}

function aHW() {
	var aLR = new Uint16Array(i.df);

	function aLX(player, aLU) {
		for (var aH = aK.aM[0], aLd = aK.aLd, pF = -1, lC = i.df, aA = 0; aA < aH; aA++) {
			var l5, aL = aLd[aA];
			pt(player, aL) && (l5 = ri.aLe(aLU, ri.aLf(aL)), -1 === pF || l5 < pF) && (pF = l5, lC = aL)
		}
		return lC
	}

	function aLZ(aLW, aLU) {
		if (aLW === i.df) return 0;
		for (var pa = a5.pa[aLW], cn = pa.length, aH = Math.min(cn, 10), lC = 0, pF = ri.aLe(pa[lC] >> 2, aLU), aA = 0; aA < aH; aA++) {
			var gp = bA.l3(cn),
				l5 = ri.aLe(pa[gp] >> 2, aLU);
			l5 < pF && (pF = l5, lC = gp)
		}
		return pa[lC] >> 2
	}

	function aLa(player, aLU, gH, aLh) {
		var aLi;
		(aLh === i.df || (aLi = ri.aLf(gH), aLh = ri.aLf(aLh), ri.aLe(aLU, aLi) < ri.aLe(aLU, aLh))) && (aLR[player] = gH)
	}
	this.h = function() {
		aLR.fill(i.df)
	}, this.a9 = function(player) {
		var aLU, aLY, aLW, gH = function(player) {
			var gH = aLR[player];
			if (gH !== i.df) {
				if (v.fX.pz(gH)) return gH;
				aLR[player] = i.df
			}
			return i.df
		}(player);
		return function(player) {
			for (var mz = aF.aE, cn = aF.aI, aH = Math.min(cn, cn < 17 && 5 === bA.l3(20) ? 1 : 16), gn = bA.l3(cn), aLd = aK.aLd, pa = a5.pa, aD = 0, aA = 0; aA < aH; aA++) {
				var aL = mz[(aA + gn) % cn];
				aL !== player && pa[aL].length && (aLd[aD++] = aL)
			}
			aK.aM[0] = aD
		}(player), 0 !== aK.aM[0] && (0 < (aLY = aLZ(aLW = aLX(player, aLU = ri.aLV(player)), aLU)) && pI.a8L.aKL(player, aLY) ? (aLa(player, aLU, aLW, gH), !0) : 0 < (aLW = function(player, aLU) {
			for (var aH = aK.aM[0], aLd = aK.aLd, aLg = aLR, gn = 0, aA = 0; aA < aH; aA++) {
				var aL = aLd[aA],
					aL = aLg[aL];
				aL !== i.df && v.fX.pz(aL) && player !== aL && pt(player, aL) && (aLd[gn++] = aL)
			}
			return 0 !== (aK.aM[0] = gn) ? aLZ(aLX(player, aLU), aLU) : 0
		}(player, aLU)) && pI.a8L.aKL(player, aLW) ? (aLa(player, aLU, mr.pW(aLW << 2), gH), !0) : !!(0 < (aLY = aLZ(gH, aLU)) && pI.a8L.aKL(player, aLY)))
	}
}

function uT() {
	this.aGh = null, this.aGi = null, this.aGj = null, this.aGk = null, this.aGl = null, this.aGm = null, this.wp = "";
	var aLk = 0;
	this.h = function() {
		this.aGh = [], this.aGi = [], this.aGj = [], this.aGk = [], this.aGl = [0], this.aGm = [0], aLk = 0, this.wp = ""
	}, this.aLl = function(id, mb, a4B, aAe) {
		i.i0 || 2 === i.bw || (0 === this.aGl[aLk] && (this.aGm[aLk] ? (this.aGl.push(1), this.aGm.push(0), aLk++) : this.aGl[aLk] = 1), this.aGh.push(id), this.aGi.push(mb), this.aGj.push(void 0 === a4B ? 0 : a4B), this.aGk.push(void 0 === aAe ?
			0 : aAe), this.aGm[aLk]++)
	}, this.a9 = function() {
		0 === this.aGl[aLk] ? this.aGm[aLk]++ : (this.aGl.push(0), this.aGm.push(0), aLk++)
	}
}

function aIT() {
	this.bn = 0, this.a9 = function() {
		ca.a9(), tp.a9(), r.a9(), ct.d4.a9(), a1s.a6r(), bl.c8 && (bl.c8 = !1, d0.ai())
	}
}

function aHV() {
	this.a9 = function(player) {
		var oh = function(player) {
			var aH = wX.aHT.aJn;
			if (0 === aH) return -1;
			for (var cn = Math.min(aH, wX.performance.aCj ? aH : 10), cf = wX.aHT.cf, l8 = bO.bP(bA.random() * aH, bA.value(100)), f6 = l8 + cn, hT = bA.aLn(a5.pN[player], a5.pQ[player]), hU = bA.aLn(a5.pP[player], a5.pR[player]), lC = -1,
					l5 = ri.aLo(0, 0, ip.mg, ip.mj), aA = l8; aA < f6; aA++) {
				var gn = aA % aH,
					aLp = ri.xG(hT, hU, cf[gn]);
				aLp < l5 && (l5 = aLp, lC = gn)
			}
			return -1 !== lC ? cf[lC] : -1
		}(player);
		return -1 !== oh && pI.a8L.aKL(player, oh)
	}
}

function aDI() {
	this.a9d = function(player) {
		v.fX.aK2(player) && hu.ro(80, L(346), 637, 0, t.a3h, t.ac, -1, !1)
	}, this.a9o = function() {
		hu.ro(80, L(347), 637, 0, t.a3h, t.ac, -1, !1)
	}, this.a9n = function(player) {
		v.fX.aK2(player) && hu.ro(80, L(348), 637, 0, t.a3h, t.ac, -1, !1)
	}
}

function uU() {
	this.iU = function() {
		var aBf = function() {
				for (var aGm = bz.ix.aGm, aH = aGm.length, max = 0, aA = 0; aA < aH; aA++) max = Math.max(max, aGm[aA]);
				return aBm(Math.max(max, 1))
			}(),
			d = (eW = i.data, (d = iS).h(), d.fO(12, f9.rVersion), d.bm += 43, d.fO(2, eW.mapType), d.fO(8, eW.mapProceduralIndex), d.fO(8, eW.mapRealisticIndex), d.fO(14, eW.mapSeed), d.aIa(eW.mapName, 5), 2 === eW.mapType && d.aIb(eW.canvas), d
				.fO(1, eW.passableWater), d.fO(1, eW.passableMountains), d.fO(10, eW.playerCount), d.fO(10, eW.humanCount), d.fO(9, eW.selectedPlayer), d.fO(1, eW.gameMode), d.fO(2, eW.playerMode), d.fO(2, eW.battleRoyaleMode), d.fO(4, eW
					.numberTeams), d.fO(1, eW.isZombieMode), d.fO(1, eW.isContest), d.fO(1, eW.isReplay), d.a89(eW.elo, 2, 14), d.fO(1, eW.colorsType), d.fO(1, eW.colorsPersonalized), d.a89(eW.colorsData, 10, 18), d.fO(1, eW.selectableColor), d
				.a89(eW.teamPlayerCount, 4, 10), d.fO(1, eW.neutralBots), d.fO(2, eW.botDifficultyType), d.fO(4, eW.botDifficultyValue), d.a89(eW.botDifficultyTeam, 4, 4), d.a89(eW.botDifficultyData, 10, 4), d.fO(2, eW.spawningType), d.fO(14, eW
					.spawningSeed), d.a89(eW.spawningData, 11, 12), d.fO(1, eW.selectableSpawn), d.fO(2, eW.playerNamesType), d.aIZ(eW.playerNamesData, 10, 5), d.fO(1, eW.selectableName), d.fO(2, eW.aIncomeType), d.fO(8, eW.aIncomeValue), d.a89(
					eW.aIncomeData, 10, 8), d.fO(2, eW.tIncomeType), d.fO(8, eW.tIncomeValue), d.a89(eW.tIncomeData, 10, 8), d.fO(2, eW.iIncomeType), d.fO(8, eW.iIncomeValue), d.a89(eW.iIncomeData, 10, 8), d.fO(2, eW.sResourcesType), d.fO(11, eW
					.sResourcesValue), d.a89(eW.sResourcesData, 10, 11), ! function(aBf) {
					var d = iS,
						aGh = bz.ix.aGh,
						mb = bz.ix.aGi,
						a4B = bz.ix.aGj,
						aAe = bz.ix.aGk,
						aH = aGh.length;
					d.fO(5, aBf), d.fO(30, aH), d.fO(30, bz.ix.aGm.length);
					for (var aA = 0; aA < aH; aA++) {
						var aR = aGh[aA];
						d.fO(4, aR), d.fO(9, mb[aA]), 0 === aR ? d.fO(22, a4B[aA]) : 1 === aR ? (d.fO(10, a4B[aA]), d.fO(10, aAe[aA])) : 2 === aR ? (d.fO(10, a4B[aA]), d.fO(9, aAe[aA])) : 3 === aR || 4 === aR ? (d.fO(10, a4B[aA]), d.fO(22, aAe[
							aA])) : 5 === aR || 6 === aR ? d.fO(10, a4B[aA]) : 7 === aR ? d.fO(1, a4B[aA]) : 10 === aR && (d.fO(20, a4B[aA]), d.fO(22, aAe[aA]))
					}
				}(aBf), ! function(aBf) {
					for (var d = iS, aGl = bz.ix.aGl, aGm = bz.ix.aGm, aH = aGl.length, aA = 0; aA < aH; aA++) d.fO(1, aGl[aA]), d.fO(aBf, aGm[aA])
				}(aBf), iS.bm),
			eW = bO.bP(d - 1, 6) + 1,
			aBf = (iJ.jY(6 * eW) !== iS.bW.length && iS.bW.push(0), ! function() {
				var d = iS;
				d.bm = 24, d.fO(31, d.bW.length), d.bm = 12, d.fO(12, function() {
					for (var bW = iS.bW, aH = bW.length, nG = f9.rVersion, aA = 3; aA < aH; aA++) nG = nG + bW[aA] & 4095;
					return nG
				}())
			}(), jX.h(iS.bW), e4.e5.z2(e4.e5.z3(eW)));
		return jX.zF(), iS.h(), aBf
	}
}

function zK() {
	this.aBp = function(bW) {
		bW.fill(0)
	}, this.aLy = function(bW) {
		for (var aH = bW.length, aA = 0; aA < aH; aA++) bW[aA] = []
	}, this.un = function(ku, qo) {
		for (var kv = aK.aLz, aA = 0; aA < 3; aA++) kv[aA] = qo * ku[aA];
		return kv
	}, this.uo = function(ku, kv, aM0) {
		for (var bN = 0, aA = 0; aA < 3; aA++) bN += Math.abs(ku[aA] - kv[aA]);
		return aM0 <= bN
	}, this.up = function(ku, aM1) {
		for (var aA = 0; aA < 3; aA++) ku[aA] = bO.hQ(ku[aA] + aM1, 0, 255);
		return ku
	}, this.dO = function(bW, ym, yn) {
		yn = yn || bW.length - 1;
		for (var g = 0, aA = ym = ym || 0; aA <= yn; aA++) g += bW[aA];
		return g
	}, this.aM2 = function(bW, aM3) {
		for (var aA, aM4, aH = bW.length, aM5 = [], ee = aH - 1; 0 <= ee; ee--) {
			for (aA = aM4 = 0; aA < aH; aA++) aM3(bW[aA]) < aM3(bW[aM4]) && (aM4 = aA);
			aH--, aM5.push(bW[aM4]), bW[aM4] = bW[aH], bW.pop()
		}
		return aM5
	}, this.min = function(bW) {
		var aA, ah, aH = bW.length;
		if (0 === aH) return 0;
		for (ah = bW[0], aA = 1; aA < aH; aA++) ah = Math.min(ah, bW[aA]);
		return ah
	}, this.max = function(bW) {
		var aH = bW.length;
		if (0 === aH) return 0;
		for (var ah = bW[0], aA = 1; aA < aH; aA++) ah = Math.max(ah, bW[aA]);
		return ah
	}, this.iv = function(bW, ah) {
		for (var aH = bW.length, aD = 0, aA = 0; aA < aH; aA++) aD += bW[aA] > ah;
		return aD
	}, this.aM6 = function(bT, bU, min) {
		for (var aH = bU[0], aA = aH - 1; 0 <= aA; aA--) bT[aA] < min && (bT[aA] = bT[--aH]);
		bU[0] = aH
	}, this.aM7 = function(bW, aH, value) {
		for (var aA = 0; aA < aH; aA++) bW[aA] -= value
	}, this.ck = function(bW) {
		for (var aH = bW.length, aA = 0; aA < aH; aA++)
			if ("string" != typeof bW[aA]) return !1;
		return !0
	}, this.a1h = function(ef, bW, aM8) {
		bW.fill(0);
		for (var lE = ef.split(","), aH = Math.min(lE.length, bW.length), aA = 0; aA < aH; aA++) bW[aA] = Math.min(parseInt(lE[aA]), aM8)
	}, this.dP = function(ef, bW, a2Q) {
		bW.fill("");
		for (var lE = ef.split('"'), aH = Math.min(lE.length, 2 * bW.length), gp = 0, aA = 1; aA < aH; aA += 2) bW[gp++] = lE[aA].slice(0, a2Q)
	}, this.aM9 = function(bW, aD) {
		if (0 === aD) bW.fill(0);
		else {
			var g = this.dO(bW),
				aH = bW.length;
			if (0 === g) bW.fill(bO.bP(aD, aH));
			else
				for (var aA = 0; aA < aH; aA++) bW[aA] = bO.bP(aD * bW[aA], g);
			if (0 === (g = this.dO(bW))) bW[1] = aD;
			else
				for (var gp = 0; g++ < aD;) bW[gp = (gp + 1) % aH] && bW[gp]++
		}
	}, this.aIY = function(bW) {
		if (!bW) return 0;
		var aH = bW.length;
		if (0 === aH) return 0;
		for (var ah = bW[aH - 1], aA = aH - 2; 0 <= aA; aA--)
			if (bW[aA] !== ah) return aA + 2;
		return 1
	}, this.aMA = function(bW) {
		for (var g = 0, aA = 0; aA < bW.length; aA++) g += bW[aA].length;
		return g
	}, this.aMB = function(aMC) {
		for (var bW = [], aA = 0; aA < aMC.length; aA++) bW = bW.concat(aMC[aA]);
		return bW
	}
}

function aMD(a33) {
	var a58 = document.createElement("div"),
		a2H = document.createElement("div"),
		aME = [];

	function a35() {
		p5.p6() || (this.style.backgroundColor = v.color.a36(t.mQ, 50))
	}

	function a34() {
		this.style.backgroundColor = t.mQ
	}
	this.cy = function(aMG, yM) {
			aME[2].textContent = aMG + 1 + " / " + yM
		}, this.show = function(eW) {
			a2H.appendChild(eT.en.transform(eT.w9.eE(eW, eT.w9.e1(eW)))), document.body.appendChild(a58)
		}, this.resize = function() {
			var an = v.w.mV(.03, .5);
			a58.style.width = 10 * an + "px", a58.style.font = v.w.ae(1, .75 * an), v.w.mU(a58, 4), a2H.style.top = an + "px", a2H.style.font = v.w.ae(0, .55 * an), v.w.mU(a2H, 2), a58.style.height = an + a2H.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) v.w.mU(aME[aA], 6), aME[[0, 1, 3][aA]].style.width = 2 * an + "px";
			for (aA = 0; aA < 4; aA++) aME[aA].style.height = an + "px", v.w.mU(aME[aA], 2);
			aME[2].style.width = 4 * an + "px", aME[1].style.left = 2 * an + "px", aME[2].style.left = 4 * an + "px", aME[3].style.left = 8 * an + "px"
		}, this.zF = function() {
			for (var aA = 0; aA < 4; aA++) aME[aA].onclick = null, aME[aA].onmouseover = null, aME[aA].onmouseout = null;
			document.body.removeChild(a58), a58 = a2H = aME = null
		}, a58.style.position = "absolute", a58.style.color = t.u, a58.style.zIndex = "3", a58.style.right = "0", a58.style.top = "0", a2H.style.position = "absolute", a2H.style.height = "auto", a2H.style.color = t.u, a2H.style.backgroundColor = t
		.mQ, a2H.style.left = "0", a2H.style.width = "100%", a2H.style.overflowWrap = "break-word", a58.appendChild(a2H);
	for (var aA = 0; aA < 4; aA++) aME[aA] = document.createElement("div"), aME[aA].style.position = "absolute", aME[aA].style.backgroundColor = t.mQ, aME[aA].style.color = t.u, aME[aA].style.top = "0", aME[aA].style.display = "flex", aME[aA].style
		.justifyContent = "center", aME[aA].style.alignItems = "center", aME[aA].style.userSelect = "none", aME[aA].style.outline = "none", aME[aA].style.font = "inherit", 2 !== (aME[aA].aMF = aA) && (aME[aA].onclick = a33, aME[aA].onmouseover = a35,
			aME[aA].onmouseout = a34), a58.appendChild(aME[aA]);
	aME[0].textContent = "◀", aME[1].textContent = "▶", aME[3].textContent = "✖"
}

function aMH() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 !== i.data.sResourcesType && (i.data.sResourcesData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.sResourcesType && v.cj.a1h(dC.dQ(), i.data.sResourcesData, 2047)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(26), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(23), L(18), L(5)],
			value: i.data.sResourcesType
		}, function(bm) {
			dK(), 2 !== bm || i.data.sResourcesData || (i.data.sResourcesData = new Uint16Array(i.df)), i.data.sResourcesType = bm, d2.da(28)
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU;
		1 === i.data.sResourcesType && ((dU = new dV).dW("Value"), dU.db(new jI({
			bm: -1,
			value: i.data.sResourcesValue
		}, 1, 0, function(f6) {
			var value = bO.hQ(Math.floor(f6.target.value), 0, 2047);
			f6.target.value = i.data.sResourcesValue = value
		})), dR.push(dU))
	}(dR), function(dR) {
		var dU;
		2 === i.data.sResourcesType && ((dU = new dV).dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.sResourcesData, 2)), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function aMI() {
	var dA, aDX;

	function aMJ() {
		d2.fH();
		var ef = bz.uZ(aDX.dQ());
		(i.bw && 0 < ef.length && ef === bz.ix.wp || bz.nq.jd(ef)) && bz.uY()
	}
	this.show = function(aMK) {
		this.uX(aMK), dA.show(), this.resize()
	}, this.uX = function(aMK) {
		0 === i.bw ? aMK ? aDX.dg(aMK) : bz.ix.wp.length && aDX.dg(bz.ix.wp) : (i.i0 || (bz.ix.wp = bz.iy.iU()), aDX.dg(bz.ua(bz.ix.wp)))
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), aDX.resize()
	}, this.dk = function(aR) {
		2 === aR ? dA.dl[0].ch() : aMJ()
	}, dA = new dE(L(199), [new dF("⬅️ " + L(1), function() {
		d2.a4a(1)
	}), new dF(L(349), function() {
		aDX.aDa()
	}), new dF(L(350), function() {
		aDX.aDb()
	}), new dF(L(351), function() {
		aDX.clear()
	}), new dF(L(352), function() {
		aMJ()
	})]), aDX = new de(L(353)), dA.dI.appendChild(aDX.f6)
}

function aKD() {
	var aML = 0,
		aMM = "",
		aMN = 0,
		aMO = 0,
		aMP = 0;

	function aMR(eF) {
		ct.a1S.iQ(3, eF)
	}

	function aMa(aD) {
		aML = 1, eT.message.yT({
			id: 6,
			value: aD
		})
	}

	function aMU(e8) {
		var aMd = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return e8.match(aMd)
	}
	this.gG = function(e8) {
		var aMQ, bW, aMW;
		if (aML) return aML = 0, "yes" === (aMQ = e8.toLowerCase()) || "y" === aMQ ? void aMR(aMM) : void eT.message.yT({
			id: 5,
			eA: 7
		});
		!(e8.indexOf("@") < 0) && (aMQ = aMU(e8)) ? (aMM = e8, bW = function(aMT) {
			for (var aH = aMT.length, aMc = [0, 0, 0, 0], aA = 0; aA < aH; aA++)
				for (var d = aMT[aA], ee = 0; ee < 4; ee++) d === "@room" + (ee + 1) && (aMc[ee] = 1);
			if ((aMO = v.cj.dO(aMc)) % 4 == 0) return v.cj.aMB(eT.eU.eS);
			for (ee = 0; ee < 4; ee++) aMc[ee] = aMc[ee] ? eT.eU.eS[ee] : [];
			return v.cj.aMB(aMc)
		}(aMQ), function(aMT, aMW, e8) {
			if (!aMN) return;
			for (var aH = aMW.length, aA = 0; aA < aH; aA++) 2 === aMW[aA].id && (e8 = e8.replace(aMT[aMW[aA].bm], "@" + aMW[aA].ah));
			return aML = 1, aMR((aMM = e8).slice(0, 126) + "|"), 1
		}(aMQ, aMW = function(aMT) {
			for (var aMW = [], aH = (aMP = aMN = 0, aMT.length), aA = 0; aA < aH; aA++) {
				var d = aMT[aA],
					cn = d.length;
				v.dh.startsWith(d, "@[") ? cn <= 9 && v.dh.ll(d, "]") && aMW.push({
					id: 0,
					ah: d.substring(2, cn - 1).toUpperCase()
				}) : 6 === cn ? v.dh.startsWith(d, "@room") || (aMP++, aMW.push({
					id: 1,
					ah: jc.e5.aFx(d.substring(1))
				})) : 1 < cn && cn < 5 && 0 <= (cn = cg.data.d8(d.substring(1))) && (aMW.push({
					id: 2,
					ah: cn,
					bm: aA
				}), aMN = 1)
			}
			return aMW
		}(aMQ), e8) || (0 === aMW.length ? aMO || function(aMT) {
			for (var aH = aMT.length, aA = 0; aA < aH; aA++) {
				var d = aMT[aA];
				if ("@all" === d || "@everyone" === d) return 1
			}
			return
		}(aMQ) ? aMa(bW.length) : aMR(e8) : aMQ.length === aMP ? aMR(e8) : (function(bW, aMW) {
			var cn = aMW.length;
			if (0 === cn) return;
			var aH = bW.length;
			loop: for (var aA = aH - 1; 0 <= aA; aA--) {
				for (var ee = 0; ee < cn; ee++)
					if (0 === aMW[ee].id) {
						if (aMW[ee].ah === v.dh.ed(bW[aA].username)) continue loop
					} else if (1 === aMW[ee].id && aMW[ee].ah === bW[aA].e7) continue loop;
				bW[aA] = bW[--aH], bW.pop()
			}
		}(bW, aMW), aMa(bW.length)))) : aMR(e8)
	}, this.yR = function(e8) {
		var aMT = aMU(e8);
		if (aMT)
			for (var fM = new RegExp("^[0-9]+$"), aH = aMT.length, aA = 0; aA < aH; aA++) {
				var d = aMT[aA].substring(1),
					cn = d.length;
				1 <= cn && cn <= 3 && fM.test(d) && (cn = parseInt(d, 10), !isNaN(cn)) && 0 <= cn && cn < cg.data.bW.length && (e8 = e8.replace("@" + d, "@" + cg.data.bW[cn]))
			}
		return e8
	}
}

function aMe() {
	this.aMf = function(player, a1x, r6) {
		v.fX.aMg(player, r6, a1x) && (ve.a8k(player, a1x), a1x < i.fd) && bA.random() < bA.value(10) && (wX.zy.aGx[a1x] = 0)
	}, this.aMh = function(player, a1x, r6) {
		v.fX.aMi(r6, a1x) ? (v.fX.a0p(a1x, aK.a8l[0]), cZ.sf(player, a1x), c3.a8n(a1x, aK.a8l[0])) : cZ.a0q(player, r6, 12)
	}
}

function aK9() {
	this.n3 = function(bm) {
		if ((y8 = eT.eU.y8[bm]) < 2) return !1;
		var g4 = eT.d4.ej[bm],
			aMj = 9 === g4.y4 ? 333 : 512,
			y8 = Math.min(y8, aMj);
		8 === g4.y4 && (y8 -= y8 % 2);
		aMj = eT.eU.eS[bm].splice(0, y8), eT.eU.y8[bm] -= y8, y8 = function(a6l) {
			if (eT.eX) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var aH = a6l.length, e7 = eT.eX.e7, aA = 0; aA < aH; aA++)
					if (a6l[aA].e7 === e7) return aA
			}
			return -1
		}(aMj);
		return -1 === y8 ? (eT.eU.aFy = eT.eU.aFy.concat(aMj), 1e3 < eT.eU.aFy.length && eT.eU.aFy.splice(0, eT.eU.aFy.length - 1e3), eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === bm && 1 === eT.d4.fo[2], !1) : (8 === g4.y4 && (g4.yH = (g4.yH + (
			y8 >> 1)) % 1024, bm = y8 - y8 % 2, y8 %= 2, aMj = aMj.slice(bm, 2 + bm)), a1s.h(g4, aMj, y8), !0)
	}, this.a6q = function(g4, a6l, a6m) {
		var gl = i.data = new wP,
			aMl = (gl.spawningSeed = g4.spawningSeed, g4.y4 < 7 ? (gl.gameMode = 1, gl.numberTeams = g4.y4 + 2) : 9 === g4.y4 ? (gl.gameMode = gl.isZombieMode = 1, gl.numberTeams = 2) : (gl.gameMode = 0, gl.battleRoyaleMode = 7 === g4.y4 ? 0 :
				10 === g4.y4 ? 1 : 2), gl.selectedPlayer = a6m, gl.isContest = g4.y7, gl.mapType = ip.aHj(g4.oY) ? 0 : 1, ip.aHq(gl, g4.oY), gl.mapSeed = g4.mapSeed, gl.humanCount = a6l.length);
		gl.selectableSpawn = 1 === gl.gameMode || aMl < 100, gl.colorsData = new Uint32Array(aMl), gl.playerNamesData = new Array(aMl);
		for (var aA = 0; aA < aMl; aA++) gl.colorsData[aA] = a6l[aA].color, gl.playerNamesData[aA] = a6l[aA].username;
		if (2 === gl.battleRoyaleMode)
			for (gl.elo = new Uint16Array(aMl), aA = 0; aA < aMl; aA++) gl.elo[aA] = a6l[aA].elo;
		d0.setState(8), ip.b0(g4.oY, gl.mapSeed), i.j2(), i.j3 = 2
	}
}

function a7M() {
	this.a9p = new wz
}

function jI(aHe, type, aMm, aMn) {
	var f6;
	this.f6 = document.createElement("input"), (f6 = this.f6).type = type ? "number" : "text", f6.id = "input" + d2.d4.aDZ++, f6.value = aHe.value, f6.style.width = "100%", f6.style.userSelect = "none", f6.style.outline = "none", f6.style.resize =
		"none", f6.style.border = "inherit", f6.style.font = "inherit", f6.style.color = t.u, f6.style.backgroundColor = t.a38, f6.style.fontSize = "1em", f6.style.padding = "0.1em 0.2em", f6.addEventListener("focus", function() {
			r.tZ++
		}), f6.addEventListener("blur", function() {
			r.tZ--, -1 !== aHe.bm && ce.cx.cy(aHe.bm, f6.value)
		}), f6.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== aHe.bm && ce.cx.cy(aHe.bm, f6.value), aMm ? aMm() : f6.blur())
		}), aMn && f6.addEventListener("input", function(eW) {
			aMn(eW)
		})
}

function a7V() {
	var aMo, aMp, oi, uk;
	this.h = function() {
		var aA, bF, bG, iL, aMq, d, an, f, ic, pE, ah, aL, l5, ee, vC;
		if (function() {
				if (oi = !0, uk = "rgb(" + ip.mf[0] + "," + ip.mf[1] + "," + ip.mf[2] + ")", ip.aHp(ip.oY)) return 1;
				return oi = !1, 0
			}()) aMp = null;
		else {
			for (aMo = bO.bP(96, 4), aMq = 1 === ip.oY ? (iL = 0, 160) : (iL = 128, 32), uk = "rgb(" + iL + "," + iL + "," + iL + ")", aMp = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aMp[aA] = document.createElement("canvas"), d = aA % 2 == 0 ? ip.mg : aMo, an = aA % 2 == 0 ? aMo : ip.mj + 2 * aMo, aMp[aA].width = d, aMp[aA].height = an, pE = (ic = (f = aMp[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, d, an)).data, aA % 2 == 0)
					for (bG = aMo - 1; 0 <= bG; bG--)
						for (ah = aMq + Math.floor((bG + 1) * (iL - aMq) / (aMo + 1)), bF = d - 1; 0 <= bF; bF--) pE[aL = 4 * ((0 === aA ? aMo - bG - 1 : bG) * d + bF)] = ah, pE[aL + 1] = ah, pE[aL + 2] = ah, pE[aL + 3] = 255;
				else {
					for (bF = aMo - 1; 0 <= bF; bF--)
						for (ah = aMq + Math.floor((bF + 1) * (iL - aMq) / (aMo + 1)), bG = an - 1 - aMo; aMo <= bG; bG--) pE[aL = 4 * (bG * d + (3 === aA ? aMo - bF - 1 : bF))] = ah, pE[aL + 1] = ah, pE[aL + 2] = ah, pE[aL + 3] = 255;
					for (ee = 1; 0 <= ee; ee--)
						for (bF = aMo - 1; 0 <= bF; bF--)
							for (bG = aMo - 1; 0 <= bG; bG--) l5 = (Math.pow(bF * bF + bG * bG, .5) + 1) / (aMo + 1), ah = aMq + Math.floor((1 < l5 ? 1 : l5) * (iL - aMq)), pE[aL = 4 * ((0 === ee ? aMo - bG - 1 : bG + ee * (an - aMo)) * d + (
								1 === aA ? bF : aMo - bF - 1))] = ah, pE[aL + 1] = ah, pE[aL + 2] = ah, pE[aL + 3] = 255
				}
				f.putImageData(ic, 0, 0)
			}
			vC = aMq, ip.om.fillStyle = "rgb(" + vC + "," + vC + "," + vC + ")", ip.om.fillRect(0, 0, ip.mg, 1), ip.om.fillRect(0, ip.mj - 1, ip.mg, 1), ip.om.fillRect(0, 0, 1, ip.mj), ip.om.fillRect(ip.mg - 1, 0, 1, ip.mj)
		}
	}, this.aV = function() {
		var ee = oi ? 0 : -aMo;
		aMt(ee, ee, ip.mg - 2 * ee, ip.mj - 2 * ee, xw.aJq, xw.aJr, xw.aJs, xw.aJt) || (aj.fillStyle = uk, aj.fillRect(0, 0, r.d, r.an))
	}, this.ai = function() {
		oi || (aMu(0, -aMo, ip.mg, aMo, xw.aJq, xw.aJr, xw.aJs, xw.aJt) && aj.drawImage(aMp[0], xw.aJo, xw.aJp - aMo), aMu(ip.mg, -aMo, aMo, ip.mj + 2 * aMo, xw.aJq, xw.aJr, xw.aJs, xw.aJt) && aj.drawImage(aMp[1], xw.aJo + ip.mg, xw.aJp - aMo),
			aMu(0, ip.mj, ip.mg, aMo, xw.aJq, xw.aJr, xw.aJs, xw.aJt) && aj.drawImage(aMp[2], xw.aJo, xw.aJp + ip.mj), aMu(-aMo, -aMo, aMo, ip.mj + 2 * aMo, xw.aJq, xw.aJr, xw.aJs, xw.aJt) && aj.drawImage(aMp[3], xw.aJo - aMo, xw.aJp - aMo))
	}
}

function aMv() {
	this.aMw = function() {
		iJ.b0(39), iJ.fO(1, 0), iJ.fO(6, 16), ct.cu.aMx(), ct.d4.send(0, iJ.bt)
	}, this.a2g = function(iI) {
		iJ.b0(115), iJ.fO(1, 0), iJ.fO(6, 17), jc.e5.aMz(ce.cf.data[105].value, 5), jc.e5.aMz(ce.cf.data[106].value, 8), iJ.fO(30, ce.cf.data[109].value), ct.d4.send(iI, iJ.bt)
	}, this.z4 = function() {
		iJ.b0(55), iJ.fO(1, 0), iJ.fO(6, 18), jc.e5.nB(ce.cf.data[110].value), ct.d4.send(0, iJ.bt)
	}, this.yw = function(b1) {
		var aH = b1.ef.length;
		iJ.b0(21 + 16 * aH), iJ.fO(1, 0), iJ.fO(6, 29), iJ.fO(6, b1.a0J), iJ.fO(8, aH), e4.ji.nB(b1.ef), ct.d4.send(0, iJ.bt)
	}, this.yu = function(data) {
		iJ.b0(43), iJ.fO(1, 0), iJ.fO(6, 25), iJ.fO(6, data.a0J), jc.e5.aMz(data.e7, 5), ct.d4.send(0, iJ.bt)
	}, this.a0I = function(data) {
		iJ.b0(75), iJ.fO(1, 0), iJ.fO(6, 27), iJ.fO(6, data.a0J), jc.e5.aMz(data.e7, 5), iJ.a63(32, data.value), ct.d4.send(0, iJ.bt)
	}
}

function a7H() {
	var aN0, aN1, aN2, aN3, aN4, aN5, aN6, aN7, aN8, aN9, aNA, aNB, aNC, aND, aNE, aNF, aNG, aNH, aNI, aNJ, aNK, aNL, position, aNM, aNN, aNO, aNP, aNQ = 1,
		aNR = 1,
		aNS = "";
	var leaderboardHasChanged = true;
	this.playerPos = i.gC;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => aFC[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(aFC[i.gC]);
	}

	function aNU() {
		aN6.clearRect(0, 0, aN0, al),
			aN6.fillStyle = t.a3i,
			aN6.fillRect(0, 0, aN0, aNB),
			aN6.fillStyle = t.mQ,
			aN6.fillRect(0, aNB, aN0, al - aNB);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			aFC[i.gC]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aNL = -1;
		if (__fx.leaderboardFilter.enabled && aNL >= __fx.leaderboardFilter.filteredLeaderboard.length) aNL = -1;
		playerPos >= position && aNW(playerPos - position, t.a3T),
			0 !== aFC[i.gC] && 0 === position && aNW(0, t.a3m),
			-1 !== aNL && aNW(aNL, t.a2u),
			aN6.fillStyle = t.mQ,
			//console.log("drawing", aNL),
			aN6.clearRect(0, al - __fx.leaderboardFilter.tabBarOffset, aN0, __fx.leaderboardFilter.tabBarOffset);
		aN6.fillRect(0, al - __fx.leaderboardFilter.tabBarOffset, aN0, __fx.leaderboardFilter.tabBarOffset);
		aN6.fillStyle = t.u,
			aN6.fillRect(0, aNB, aN0, 1),
			aN6.fillRect(0, al - __fx.leaderboardFilter.tabBarOffset, aN0, 1),
			__fx.leaderboardFilter.drawTabs(aN6, aN0, al - __fx.leaderboardFilter.tabBarOffset, t.a3T),
			aN6.fillRect(0, 0, aN0, ak.h2),
			aN6.fillRect(0, 0, ak.h2, al),
			aN6.fillRect(aN0 - ak.h2, 0, ak.h2, al),
			aN6.fillRect(0, al - ak.h2, aN0, ak.h2), aN6.font = aN1, v.w.textBaseline(aN6, 1), v.w.textAlign(aN6, 1), aN6.fillText(aNS, Math.floor((aN0 + aNB - 22) / 2), Math.floor(aN9 + aN2 / 2));
		__fx.playerList.drawButton(aN6, 12, 12, aNB - 22);
		var ee, gn = playerPos < position + aN4 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aN4)
				position = (result.length > aN4 ? result.length : aN4) - aN4;
			//if (position >= result.length) position = result.length - 1;
			for (aN6.font = aN3, v.w.textAlign(aN6, 0), ee = aN4 - gn; 0 <= ee; ee--) {
				const pos = result[ee + position];
				if (pos !== undefined)
					aNX(a7[pos]), aNY(ee, pos, a7[pos]);
			}
			for (v.w.textAlign(aN6, 2), ee = aN4 - gn; 0 <= ee; ee--) {
				const pos = result[ee + position];
				if (pos !== undefined)
					aNX(a7[pos]), aNZ(ee, a7[pos]);
			}
		} else {
			for (aN6.font = aN3, v.w.textAlign(aN6, 0), ee = aN4 - gn; 0 <= ee; ee--)
				aNX(a7[ee + position]), aNY(ee, ee + position, a7[ee + position]);
			for (v.w.textAlign(aN6, 2), ee = aN4 - gn; 0 <= ee; ee--)
				aNX(a7[ee + position]), aNZ(ee, a7[ee + position]);
		}
		2 == gn && (aNX(i.gC), v.w.textAlign(aN6, 0), aNY(aN4 - 1, aFC[i.gC], i.gC), v.w.textAlign(aN6, 2), aNZ(aN4 - 1, i.gC)), 0 === position && (gn = .7 * aNC / k9.get(4).height, aN6.setTransform(gn, 0, 0, gn, Math.floor(aND + .58 * aNC + .5 *
			gn * k9.get(4).width), Math.floor(aN9 + aN2 + .4 * aNC)), aN6.imageSmoothingEnabled = !0, aN6.drawImage(k9.get(4), -Math.floor(k9.get(4).width / 2), -Math.floor(k9.get(4).height / 2)), aN6.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aNX(player) {
		i.j && (aN6.fillStyle = a1.kZ[a1.kj[player]])
	}

	function aNW(aA, aNb) {
		aN6.fillStyle = aNb, aA = aN4 - 1 < aA ? aN4 - 1 : aA;
		aNb = Math.floor((aA === aN4 - 1 ? 2 : 0 === aA ? 1.15 : 1) * aNC), aNb = aA === aN4 - 2 ? Math.floor(aNB + 9.15 * aNC) - Math.floor(aNB + 8.15 * aNC) : aNb;
		aN6.fillRect(0, Math.floor(aNB + (aA + (0 === aA ? 0 : .15)) * aNC), aN0, aNb)
	}

	function aNY(aNc, eP, aA) {
		aN6.fillText(aNH[eP], aND, Math.floor(aN9 + aN2 + (aNc + .5) * aNC)), 1 === a5.ry[aA] && (aN6.font = "italic " + aN3);
		eP = Math.floor(aN9 + aN2 + (aNc + .5) * aNC);
		aN6.fillText(a5.r3[aA], aNE, eP), 0 !== a5.ry[aA] && (aN6.font = aN3), aA < i.fd && 2 !== a5.ry[aA] || aN6.fillRect(aNE, eP + .35 * aNQ, aNG[aA], Math.max(1, .1 * aNQ))
	}

	function aNZ(aNc, aA) {
		aN6.fillText(a5.a6[aA], aNF, Math.floor(aN9 + aN2 + (aNc + .5) * aNC))
	}

	function aNl(bG) {
		return (bG -= ak.gap + aNB) < 0 ? Math.floor(bG / aNC) - 1 : bG < (aN4 - 1) * aNC ? Math.floor(bG / aNC) : bG < al - aNB ? aN4 - 1 : (bG -= al - aNB, aN4 + Math.floor(bG / aNC))
	}

	function kR(bF, bG) {
		return bF >= ak.gap && bF < ak.gap + aN0 && bG >= ak.gap && bG < ak.gap + al
	}
	this.h = function() {
			var aA;
			for (aNN = !1, aNP = aNO = aNM = 0, aNL = -1, aN4 = n.o.p() ? 6 : 10, aNR = (position = 0) === (aNR = ce.cf.data[11].value) ? 10 : 1 === aNR ? 5 : 1, aNK = !1, aNI = new Uint16Array(aN4 + 1), aNJ = new Uint32Array(aN4 + 1), aN8 = i.df,
				a7 = new Uint16Array(aN8), aFC = new Uint16Array(aN8), aA = aN8 - 1; 0 <= aA; aA--) a7[aA] = aA, aFC[aA] = aA;
			this.resize(!0), aNG = new Uint16Array(i.df);
			var aNT = Math.floor(aN0 - aNE - aND - aN7);
			for (aNH = new Array(i.df), aN6.font = aN3, aA = i.df - 1; 0 <= aA; aA--) aNH[aA] = aA + 1 + ".", a5.r3[aA] = v.f.s8(a5.lK[aA], aN3, aNT), aNG[aA] = Math.floor(aN6.measureText(a5.r3[aA]).width);
			aNU()
		}, this.resize = function(h) {
			if (al = n.o.p() ? (aN0 = Math.floor(.335 * r.s), Math.floor(aN4 * aN0 / 8)) : (aN0 = Math.floor(.27 * r.s), Math.floor(aN4 * aN0 / 10)), aN0 = Math.floor(.97 * aN0), (aN5 = document.createElement("canvas")).width = aN0, aN5.height = al,
				aN6 = aN5.getContext("2d", {
					alpha: !0
				}), aN9 = .025 * aN0, aN2 = .16 * aN0, aNA = 0 * aN0, aNB = Math.floor(.45 * aN9 + aN2), aNC = (al - aN2 - 2 * aN9 - aNA) / aN4,
				aN5.height = al += aNC, __fx.leaderboardFilter.tabBarOffset = Math.floor(aNC * 1.3), __fx.leaderboardFilter.verticalClickThreshold = al - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aN0,
				aN1 = v.w.ae(1, Math.floor(.55 * aN2)), aNQ = Math.floor((n.o.p() ? .67 : .72) * aNC), aN3 = v.w.ae(0, aNQ), aN6.font = aN3, aND = Math.floor(.04 * aN0), aNE = Math.floor((n.o.p() ? .195 : .18) * aN0), aN7 = Math.floor(aN6
					.measureText("00920600").width), aN6.font = aN1, aNF = aN0 - aND, !h) {
				aN6.font = aN3;
				for (var aA = i.df - 1; 0 <= aA; aA--) aNG[aA] = Math.floor(aN6.measureText(a5.r3[aA]).width);
				aNU()
			}
			aNS = v.f.s8(L(354), aN1, .96 * aN0)
		}, this.a9B = function() {
			return aN0
		}, this.c5 = function(sn, aNV) {
			(aNV || aNK && (sn || bl.ff() % aNR == 0)) && (aNK = !1, aNU())
		}, this.a9 = function() {
			! function() {
				for (var ee = aN8 - 1; 0 <= ee; ee--) 0 === a5.gB[a7[ee]] && ! function(ee) {
					var aNj = a7[ee];
					aN8--;
					for (var aA = ee; aA < aN8; aA++) a7[aA] = a7[aA + 1], aFC[a7[aA]] = aA;
					a7[aN8] = aNj, aFC[a7[aN8]] = aN8
				}(ee)
			}();
			for (var aNh, lf = aN8 - 1, ee = 0; ee < lf; ee++) a5.a6[a7[ee]] < a5.a6[a7[ee + 1]] && (aNh = a7[ee], a7[ee] = a7[ee + 1], a7[ee + 1] = aNh, aFC[a7[ee]] = ee, aFC[a7[ee + 1]] = ee + 1);
			! function() {
				for (var a4 = aNK, gn = (aNK = !0, aFC[i.gC] >= aN4 - 1 ? aN4 - 2 : aN4 - 1), aA = gn; 0 <= aA; aA--)
					if (aNI[aA] !== a7[aA] || aNJ[aA] !== a5.a6[a7[aA]]) return;
				(gn != aN4 - 2 || aNI[aN4] === aFC[i.gC] && aNJ[aN4] === a5.a6[i.gC]) && (aNK = a4)
			}();
			for (var aA = aN4 - 1; 0 <= aA; aA--) aNI[aA] = a7[aA], aNJ[aA] = a5.a6[a7[aA]];
			aNI[aN4] = aFC[i.gC], aNJ[aN4] = a5.a6[i.gC];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.hS = function(bF, bG) {
			return !!kR(bF, bG) && ((__fx.utils.isPointInRectangle(bF, bG, ak.gap + 12, ak.gap + 12, aNB - 22, aNB - 22) && __fx.playerList.display(a5.lK), true) &&
				!(bG - ak.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(bF - ak.gap)) && (aNM = bl.bk, aNN = !0, aNO = aNP = aNl(bG), p5.tn() && (bF = aNm(-1, aNP, aN4), aNL !== (bF = bF === aN4 ? -
					1 : bF)) && (aNL = bF, aNU(), bl.c8 = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aNU(), bl.c8 = !0;
		},
		this.hW = function(bF, bG) {
			if (__fx.utils.isPointInRectangle(bF, bG, ak.gap + 12, ak.gap + 12, aNB - 22, aNB - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aNU(), bl.c8 = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aNU(), bl.c8 = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(bF, bG, ak.gap, ak.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), bF - ak.gap
				)) return;
			var a4, aNk = aNl(bG);
			return aNN ? (a4 = position, (position = aNm(0, position += aNO - aNk, i.df - aN4)) !== a4 && (aNk = (aNk = aNm(-1, aNO = aNk, aN4)) !== aN4 && kR(bF, bG) ? aNk : -1, aNL = aNk, aNU(), bl.c8 = !0), !0) : (aNk = (aNk = aNm(-1, aNk,
				aN4)) === aN4 || !kR(bF, bG) || p5.tn() ? -1 : aNk, aNL !== aNk && (aNL = aNk, aNU(), bl.c8 = !0))
		}, this.tU = function(bF, bG) {
			if (!aNN) return !1;
			aNN = !1;
			var aNk = aNl(bG);
			var isEmptySpace = false;
			return p5.tn() && -1 !== aNL && (aNL = -1, aNU(), bl.c8 = !0), bl.bk - aNM < 350 && aNP === aNk && -1 !== (aNk = (aNk = aNm(-1, aNk, aN4)) !== aN4 && kR(bF, bG) ? aNk : -1) && (bF = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					a7[__fx.leaderboardFilter.filteredLeaderboard[aNk + position] ?? (isEmptySpace = true, aFC[i.gC])]) : a7[aNk + position]), aNk === aN4 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : aFC[i.gC]) >=
				position + aN4 - 1 && (bF = i.gC), !isEmptySpace && i.j && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(bF, a5.lK, i.kq), 0 !== a5.gB[bF] && !isEmptySpace) && ob.rg(bF, 800, !1, 0), !0
		}, this.qp = function(bF, bG, deltaY) {
			var aNn;
			return !(aNN || i.q || (aNn = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !kR(bF, bG)) || (bF = (bF = aNm(-1, aNl(bG), aN4)) === aN4 || p5.tn() ? -1 : bF, 0 < deltaY ? position < i.df - aN4 && (position += Math.min(i.df - aN4 -
				position, aNn), aNL = bF, aNU(), bl.c8 = !0) : 0 < position && (position -= Math.min(position, aNn), aNL = bF, aNU(), bl.c8 = !0), 0))
		}, this.ai = function() {
			aj.drawImage(aN5, ak.gap, ak.gap)
		}
}

function aNo() {
	this.jd = function(aG6) {
		for (var aBj = jX, size = aBj.jb(aG6), aG9 = 7 + 9 * aBj.jb(1), bW = [], aA = 0; aA < size; aA++) bW.push(String.fromCharCode(aBj.jb(aG9)));
		return bW.join("")
	}
}

function wM() {
	this.h = function() {
		8 === i.ko && hu.sO()
	}, this.aIu = function(aNp) {
		var elo = i.data.elo,
			bN = (elo[aNp] - elo[1 - aNp]) / 10,
			bN = 8 / (1 + Math.pow(2, bN / 32)),
			bN = Math.floor(10 * bN + .5),
			aNr = elo[aNp] + bN,
			aNr = this.sQ(aNr),
			elo = this.sQ(elo[1 - aNp] - bN);
		0 === aNp ? hu.sU(aNr, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : hu.sU(elo, aNr, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a5.fU[aNp] < 100 || hu.ro(220, L(355), 40, 0, t.u, t.ac, -1, !1)
	}, this.sQ = function(elo) {
		return 16e3 === (elo = bO.hQ(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function aHZ() {
	function aNu(player) {
		for (var pb = a5.pb[player], aH = pb.length, xL = Math.max(bO.bP(aH, 12), 1), mq = mr.mq, aS = bA.l3(aH), aA = 0; aA < aH; aA += xL)
			for (var lc = pb[(aA + aS) % aH], gl = 3; 0 <= gl; gl--) {
				var ld = lc + mq[gl];
				if (mr.sB(ld)) return {
					bM: ld,
					id: mr.sC(ld),
					aL: player
				}
			}
		return null
	}

	function aNz(player, aO0) {
		var r6 = v.fX.aO1(player, cX.zp[cX.r6[player]]);
		a5.pT[player].push(aO0.bM), gD.rt(player, r6, aO0.aL), we.aGz(player, !0)
	}
	this.a9 = function(player) {
		return !!ip.x1(ip.oY) && !!i.data.passableMountains && 0 !== a5.pb[player].length && function(player) {
			var aNt = aNu(player);
			if (null === aNt) return !1;
			! function(player) {
				for (var aE = aF.aE, aI = aF.aI, aH = Math.min(aI, 12), gn = bA.l3(aI), aLd = aK.aLd, pb = a5.pb, aD = 0, aA = 0; aA < aH; aA++) {
					var aL = aE[(aA + gn) % aI];
					aL !== player && pb[aL].length && pt(player, aL) && (aLd[aD++] = aL)
				}
				aK.aM[0] = aD
			}(player);
			var aNw = function(x2) {
				for (var aH = aK.aM[0], aLd = aK.aLd, aA = 0; aA < aH; aA++) {
					var aO0 = aNu(aLd[aA]);
					if (null !== aO0 && aO0.id === x2) return aO0
				}
				return null
			}(aNt.id);
			return null !== aNw ? (aNz(player, aNw), !0) : function(player, x2) {
				var aH = wX.aHT.aJn;
				if (0 !== aH)
					for (var bM = wX.aHT.cf[bA.l3(aH)] << 2, mq = mr.mq, gl = bA.l3(4);;) {
						if (bM += mq[gl], mr.sB(bM)) {
							if (mr.sC(bM) === x2) return aNz(player, {
								bM: bM,
								aL: i.df
							}), !0;
							break
						}
						if (!mr.pU(bM)) break
					}
				return !1
			}(player, aNt.id)
		}(player)
	}
}

function uB() {
	var aO2 = new Uint8Array(64);
	this.h = function() {
		var aA;
		for (aO2[0] = 45, aO2[37] = 95, aA = 0; aA < 10; aA++) aO2[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) aO2[aA + 11] = 65 + aA, aO2[aA + 38] = 97 + aA
	}, this.z3 = function(aLv) {
		for (var aBj = jX, u7 = new Uint8Array(aLv), aA = 0; aA < aLv; aA++) u7[aA] = aBj.jb(6);
		return u7
	}, this.z2 = function(u7) {
		for (var aH = u7.length, aO3 = aO2, bW = [], aA = 0; aA < aH; aA++) bW.push(String.fromCharCode(aO3[u7[aA]]));
		return bW.join("")
	}, this.e6 = function(value, aO4) {
		for (var aO3 = aO2, bW = [], aA = 0; aA < aO4; aA++) bW.push(String.fromCharCode(aO3[value >> 6 * (aO4 - 1 - aA) & 63]));
		return bW.join("")
	}
}

function a76() {
	this.aO5 = "https://", this.aO6 = this.aO5 + "territorial.io/", this.a6O = this.aO6 + "changelog", this.a6S = this.aO6 + "terms", this.aO7 = this.aO6 + "cookie_policy", this.a6T = this.aO6 + "privacy", this.a6R = this.aO6 + "tutorial", this.a6Q =
		this.aO6 + "players", this.a6P = this.aO6 + "clans", this.a4Y = this.aO6 + "clan-results", this.a6K = "https://patreon.com/c/territorial", this.a6L = this.aO5 + "play.google.com/store/apps/details?id=territorial.io", this.a6M = this.aO5 +
		"apps.apple.com/app/id1581110913", this.aO8 = this.aO5 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a6N = this.aO5 + "discord.gg/pthqvpTXmh", this.aAh = this.aO5 + "www.instagram.com/davidtschacher/", this.kF =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aO9() {
	function aOR(aOS) {
		var gl = i.data,
			aOS = (gl.selectedPlayer = jX.jb(aOS), gl.spawningSeed = jX.jb(14), jX.jb(4)),
			aOS = (aOS < 7 ? (gl.gameMode = 1, gl.numberTeams = aOS + 2) : 9 === aOS ? (gl.gameMode = gl.isZombieMode = 1, gl.numberTeams = 2) : (gl.gameMode = 0, gl.battleRoyaleMode = 7 === aOS ? 0 : 10 === aOS ? 1 : 2), gl.isContest = jX.jb(1), jX
				.jb(6));
		return gl.mapType = ip.aHj(aOS) ? 0 : 1, ip.aHq(gl, aOS), gl.mapSeed = jX.jb(14), aOS
	}
	this.aEP = function(iI, bt) {
		jX.h(bt), 0 === jX.size ? ct.d4.jZ(iI, 3205) : __fx.customLobby.isCustomMessage(bt) || ((0 === jX.jb(1) ? function(iI) {
			var aOC = jX.jb(6);
			0 === aOC ? function(iI) {
					if (0 === iI && 8 !== d0.d1()) {
						d2.d4.aJ8();
						for (var aOK = jX.jb(12), aOL = jX.jb(6), bW = new Array(aOK), aA = 0; aA < aOK; aA++) bW[aA] = jX.jb(aOL);
						o4.aD2(bW)
					}
				}(iI) : 2 === aOC ? ct.aOE.y3(iI) : 3 === aOC || 4 === aOC ? a1s.h() : 9 === aOC ? ct.aOF.a2e(iI) : 10 === aOC ? ct.aOG.aOH() : 11 === aOC ? ct.aOF.a2j(iI) : 12 === aOC ? ct.aOG.aOI() : 13 === aOC ? ct.aOJ.jW() :
				14 === aOC ? ct.aOJ.jk() : 15 === aOC ? ct.aOF.a2m() : 16 === aOC ? ct.aOE.yA(iI) : 17 === aOC ? ct.aOE.yK(iI) : 19 === aOC && ct.aOE.yS(iI)
		} : function(iI) {
			if (8 !== d0.d1() && !a1s.a6p()) return;
			if (iI !== ct.d4.nH) ct.d4.jZ(iI, 3244);
			else if (0 === jX.jb(1)) bl.i1.bs(jX.bt);
			else {
				var aA, iI = jX.jb(2);
				if (0 === iI) {
					var kJ, sH = jX.jb(9);
					0 !== a5.gB[sH] && 0 !== a5.gB[i.gC] && (kJ = jX.jb(10), hu.kT(sH, i.gC, kJ), c3.sZ(sH, 1, kJ))
				} else if (1 === iI) ! function() {
					var sH = jX.jb(9);
					0 !== a5.gB[sH] && 0 !== a5.gB[i.gC] && wi.aEj(0, [sH], !0) && hu.sY(sH, 1)
				}();
				else if (2 === iI) ! function() {
					var sH = jX.jb(9),
						target = jX.jb(9);
					0 !== a5.gB[sH] && 0 !== a5.gB[target] && 0 !== a5.gB[i.gC] && wi.aEj(1, [sH], !0) && (c3.sZ(sH, 3, 96), c3.sZ(target, 4, 96), hu.sb(sH, target))
				}();
				else if (f9.fP && !f9.fQ) {
					var aH = 540;
					for (iJ.b0(17287), iJ.fO(1, 0), iJ.fO(6, 10), aH = Math.min(bx.by.wT.length, 540), aA = 0; aA < aH; aA++) iJ.a63(32, bx.by.wT[aA]);
					ct.d4.send(ct.d4.nH, iJ.bt)
				}
			}
		})(iI), bl.aIU())
	}, this.aOM = function(bt) {
		if (jX.h(bt), jX.bm = 1, 3 === jX.jb(6)) {
			jX.bm += 20;
			var gl = i.data = new wP,
				bt = aOR(9),
				aMl = gl.humanCount = jX.jb(9) + 1;
			gl.selectableSpawn = 1 === gl.gameMode || aMl < 100, gl.colorsData = new Uint32Array(aMl), gl.playerNamesData = new Array(aMl);
			for (var aA = 0; aA < aMl; aA++) jX.bm++, gl.colorsData[aA] = jX.jb(18), gl.playerNamesData[aA] = jc.ji.jj(jX.jb(5));
			d0.j0(), ip.b0(bt, gl.mapSeed), i.j2()
		} else ! function() {
			jX.bm += 20;
			var gl = i.data = new wP,
				aOQ = aOR(1);
			gl.humanCount = 2;
			gl.selectableSpawn = 1, gl.elo = new Uint16Array(2), gl.colorsData = new Uint32Array(2), gl.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) jX.bm++, gl.colorsData[aA] = jX.jb(18), gl.elo[aA] = jX.jb(14), gl.playerNamesData[aA] = jc.ji.jj(jX.jb(5));
			d0.j0(), ip.b0(aOQ, gl.mapSeed), i.j2()
		}()
	}, this.aOP = function() {
		jX.bm = 1;
		var aOC = jX.jb(6),
			nD = jX.jb(10);
		return ct.d4.iP === nD ? (ct.d4.nH = nD, !1) : (ct.d4.close(ct.d4.iP, 3247), ct.d4.nH = nD, a1s.yH = jX.jb(10), a1s.a1t = jX.jb(3 === aOC ? 9 : 1), ct.d4.yj(nD, 5) && ct.sH.a1r(), !0)
	}
}

function a7Z() {
	this.aOX = null, this.h = function() {
		10 !== i.ko ? this.aOX = null : this.aOX = new Uint32Array(i.df)
	}, this.a9 = function() {
		10 === i.ko && this.w9()
	}, this.w9 = function() {
		for (var aL, target, vu, aOX = this.aOX, fT = aF.aE, a8q = a5.s9, aA = aF.aI - 1; 0 <= aA; aA--)(aL = fT[aA]) >= i.fd || (target = Math.max(bO.bP(a8q[aL], 4), 2048), vu = Math.max(ve.vv(aL), 100), aOX[aL] += bO.bP(vu * target, 1e4), aOX[
			aL] > target && (aOX[aL] = target))
	}, this.aOY = function(player, r6) {
		return r6 > this.aOX[player] ? (r6 = this.aOX[player], this.aOX[player] = 0) : this.aOX[player] -= r6, r6
	}
}

function a7k() {
	this.d4 = new aOZ, this.a8F = new aIj, this.h = function() {
		this.d4.h()
	}, this.a9 = function() {
		0 !== this.d4.c && this.d4.c--
	}
}

function aKB() {
	var aOa = null,
		aOb = null,
		aOc = 0,
		aOd = 0,
		aOe = null;

	function aOg() {
		0 !== aOb.eN && (eT.tg.dj(), d2.da(8, 29, new m2(25, {
			a0J: 0,
			e7: e4.e5.e6(aOb.e7, 5),
			a4z: 0
		}, 29)))
	}

	function aOh() {
		var bF = aOa.bF,
			bG = aOa.bG;
		eT.tg.dj(), aOa = new aOf([new dF("Kick User", function() {
			aOn(0, 0)
		}, aOq(0, 0)), new dF("Block Chat", aOo, aOq(1, 0)), new dF("Censor Username", aOp, aOq(2, 0))]), aOm(bF, bG), aOc = 2, aOd = 1
	}

	function aOq(id, bm) {
		var aS, eh;
		return !eT.eX || eT.w9.eV(aOb) || (aS = aOb.eP) <= (eh = eT.eX.eh) || 1 - cb.mB(id, eh, bm) ? 1 : 4 === aOb.eN ? 50 <= aS ? +(aS <= eh) : 20 <= aS ? +(aS / 2 <= eh) : +(aS / 3 <= eh) : 0
	}

	function aOk() {
		return !eT.eX || eT.w9.eV(aOb) ? 1 : 0
	}

	function aOj() {
		var bF = aOa.bF,
			bG = aOa.bG,
			aOr = (eT.tg.dj(), aOk());
		aOa = new aOf([new dF(cb.eC[5][0], function() {
			aOn(5, 0)
		}, aOr), new dF(cb.eC[5][1], function() {
			aOn(5, 1)
		}, aOr), new dF(cb.eC[5][2], function() {
			aOn(5, 2)
		}, aOr), new dF(aOb.eh < 100 ? "Stealth Report" : cb.eC[5][3], function() {
			aOn(5, 3)
		}, aOr)]), aOm(bF, bG), aOd = aOc = 2
	}

	function aOl() {
		29 === d2.d3 && d2.jf().yQ(e4.e5.e6(aOb.e7, 5))
	}

	function aOn(id, value) {
		ct.a1S.iQ(5, {
			id: id,
			value: value,
			e7: aOb.e7
		})
	}

	function aOo() {
		var bF = aOa.bF,
			bG = aOa.bG;
		eT.tg.dj(), aOa = new aOf([new dF(cb.eC[1][0], function() {
			aOn(1, 0)
		}, aOq(1, 0)), new dF(cb.eC[1][1], function() {
			aOn(1, 1)
		}, aOq(1, 1)), new dF(cb.eC[1][2], function() {
			aOn(1, 2)
		}, aOq(1, 2)), new dF(cb.eC[1][3], function() {
			aOn(1, 3)
		}, aOq(1, 3)), new dF(cb.eC[1][4], function() {
			aOn(1, 4)
		}, aOq(1, 4))]), aOm(bF, bG), aOc = 3, aOd = 1
	}

	function aOp() {
		var bF = aOa.bF,
			bG = aOa.bG;
		eT.tg.dj(), aOa = new aOf([new dF(cb.eC[2][0], function() {
			aOn(2, 0)
		}, aOq(2, 0)), new dF(cb.eC[2][1], function() {
			aOn(2, 1)
		}, aOq(2, 1)), new dF(cb.eC[2][2], function() {
			aOn(2, 2)
		}, aOq(2, 2))]), aOm(bF, bG), aOc = 3, aOd = 2
	}

	function aOm(bF, bG, aOu) {
		aOa.show(bF, bG, aOu), eT.g2.show(aOa.bF, aOa.bG, aOb, 1)
	}
	this.aFt = function(f6, eW) {
		aOc = 1, aOb = eW, aOa = new aOf([new dF(L(356), aOg, 0 === aOb.eN ? 1 : 0), new dF(L(357), aOh, function() {
			if (!eT.eX) return 1;
			if (eT.w9.eV(aOb)) return 1;
			if (100 <= eT.eX.eh) return 1;
			if (eT.eX.eh >= aOb.eP) return 1;
			return 0
		}()), new dF(L(358, 0, "🚩 Report"), aOj, aOk()), new dF(L(359), aOl, 0)]), aOm((aOe = {
			clientX: f6.clientX,
			clientY: f6.clientY
		}).clientX, aOe.clientY, 1)
	}, this.dk = function(code) {
		if (29 !== d2.d3) return !1;
		if (!aOb) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.dj();
			else if (v.dh.startsWith(code, "Numpad") || v.dh.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aOc) this.aFt(aOe, aOb);
				else {
					if (!aOa) return !1;
					1 === aOc ? code <= 1 ? aOg() : 2 === code ? aOh() : 3 === code ? aOj() : (aOl(), this.dj()) : 2 === aOc ? 1 === aOd ? code <= 1 ? (aOn(0, 0), this.dj()) : (2 === code ? aOo : aOp)() : (aOn(5, bO.hQ(code - 1, 0, 3)), this
					.dj()) : (aOn(aOd, bO.hQ(code - 1, 0, cb.eC[aOd].length - 1)), this.dj())
				}
		}
		return !0
	}, this.dj = function() {
		aOc = 0, aOa && aOa.dj(), aOa = null, eT.g2.dj()
	}
}

function zL() {
	this.aFB = function(oK) {
		return 0 === oK ? 1 === i.bw && i.bu : 1 === oK ? 1 === i.bw && !i.bu : 2 === i.bw
	}, this.pH = function(player) {
		return 0 !== a5.gB[player] && 2 !== a5.ry[player]
	}, this.aK2 = function(player) {
		return player === i.gC && 2 !== a5.ry[player]
	}, this.aLN = function() {
		return aF.aI < 2 ? 0 : i.j ? 1 < vr.aN() : a5.a6[a7[1]]
	}, this.aF7 = function() {
		var aI = aF.aI;
		if (0 !== aI) {
			if (!i.j) return !this.fY(a7[0]);
			for (var aG = a1.aG, z = vr.a0(), aE = aF.aE, aA = aI - 1; 0 <= aA; aA--) {
				var aL = aE[aA];
				if (aG[aL] === z && !this.fY(aL)) return 1
			}
		}
		return 0
	}, this.aAN = function(player) {
		return player === i.gC
	}, this.fY = function(player) {
		return player >= i.fd || 2 === a5.ry[player]
	}, this.pz = function(player) {
		return 0 !== a5.gB[player]
	}, this.aL5 = function(player) {
		return player < i.fd
	}, this.aOv = function(q2, q3) {
		return q2 !== q3
	}, this.a0p = function(player, ah) {
		var min;
		return ah = this.aOw(player, ah), a5.s9[player] += ah, a5.wy[player] && (min = Math.min(a5.wy[player], a5.s9[player]), a5.wy[player] -= min, a5.s9[player] -= min), ah
	}, this.aOw = function(player, ah) {
		var a8q = a5.s9[player];
		return ah = Math.min(ah, a5.a6[player] * i.wJ - a8q), ah = Math.min(ah, i.wD - a8q), Math.max(ah, 0)
	}, this.aDL = function(player, gI, aOx, aOy) {
		var a8q = a5.s9[player],
			gI = bO.bP(a8q * (gI + 1), 1024),
			aOx = bO.bP(aOx * a8q, 1024),
			gI = Math.min(gI, a8q - aOx);
		return 10 === i.ko && (gI = wh.aOY(player, gI)), aK.a8l[0] = gI, aK.a8l[1] = aOx, aOy <= gI
	}, this.aMg = function(player, aIM, a1x) {
		var player = a5.s9[player],
			aOz = bO.bP(64 * player, 1024),
			player = (aIM = Math.min(aIM, player - aOz), this.aP1(aIM));
		return aOz += player, aIM = this.aOw(a1x, aIM -= player), aK.a8l[0] = aIM, aK.a8l[1] = aOz, 1 <= aIM
	}, this.aMi = function(aIM, a1x) {
		var aP0 = this.aP1(aIM);
		return aIM = this.aOw(a1x, aIM -= aP0), aK.a8l[0] = aIM, aK.a8l[1] = aP0, 1 <= aIM
	}, this.qZ = function(player, aP2) {
		return bO.bP(a5.s9[player] * (aP2 + 1), 1024)
	}, this.aP1 = function(aP3) {
		return bO.bP(Math.max(2142 - bl.ff(), 0) * aP3, 2142)
	}, this.aP4 = function(player, aOx) {
		aOx = bO.bP(aOx * a5.s9[player], 1024);
		aK.a8l[1] = aOx, a5.s9[player] -= aOx
	}, this.a0n = function(player, aP5) {
		var a4B, aAe, cq = a5.s9[player];
		return aP5 <= cq ? a5.s9[player] -= aP5 : (a5.s9[player] = 0, aAe = a5.wy[player] + (a4B = 5 * ((cq = aP5 - cq) >> 2)), cZ.a0q(player, a4B - cq, 12), aAe <= i.wF ? a5.wy[player] = aAe : (a5.wy[player] = i.wF, cZ.a0q(player, aAe - i.wF,
			18))), aP5
	}, this.aO1 = function(player, gI) {
		var s9 = a5.s9,
			a8q = s9[player],
			gI = bO.bP(a8q * (gI + 1), 1024),
			aOz = Math.max(bO.bP(a8q, 10), 1e3);
		return (gI = Math.min(gI, a8q - aOz)) < 0 ? (s9[player] = 0, aOz = Math.min(1e3, a8q + i.wF - a5.wy[player]), aK.a8l[1] = aOz, a5.wy[player] += aOz - a8q, 0) : (aK.a8l[1] = aOz, 10 === i.ko && (gI = wh.aOY(player, gI)), s9[player] -=
			aOz + gI, gI)
	}, this.a8o = function(player) {
		a5.s9[player] -= aK.a8l[0] + aK.a8l[1]
	}, this.aP6 = function(player, gH) {
		return (gH = Math.min(gH, i.df)) < i.df && 0 === a5.gB[gH] && (gH = i.df), (aK.x9[0] = gH) === i.df || pt(player, gH)
	}, this.aP7 = function(player, a1x) {
		return 0 !== a5.gB[a1x] && !pt(player, a1x)
	}, this.aFD = function(player, aP8) {
		for (var aL, aH = aF.aI, eP = 0, aP9 = a7, aA = 0; aA < aH; aA++)
			if (aL = aP9[aA], !this.fY(aL)) {
				if (player === aL) return !0;
				if (++eP > aP8) return !1
			} return !1
	}, this.aCm = function(aL) {
		var vq = i.j ? vr.y() : a5.a6[a7[0]];
		return vq >= bO.bP(aL * i.vT, 100)
	}, this.a0K = function(ah, min, max) {
		return Math.floor(bO.hQ(isNaN(ah) ? 0 : Number(ah), min, max))
	}
}

function a8G() {
	this.aKt = null, this.zo = 512, this.aDK = 8, this.v3 = 0, this.aPA = 0, this.sF = new Uint16Array(this.zo), this.aDm = new Uint32Array(this.zo), this.aDn = new Uint32Array(this.zo), this.uy = new Uint32Array(this.zo), this.aDo = new Uint16Array(
			this.zo), this.sG = new Uint32Array(this.zo), this.aDk = new Uint16Array(this.zo), this.pJ = new Uint16Array(this.zo), this.aDp = new Uint8Array(this.zo), this.uz = new Uint8Array(this.zo), this.aDJ = new Uint8Array(i.df), this.aDe =
		new Uint16Array(this.aDK * i.df), this.h = function() {
			this.aPA = 0, this.v3 = 0, this.aKt = new Uint8Array(ip.mg + ip.mj), this.aDJ.fill(0)
		}, this.aDQ = function(player) {
			var aH = this.v3,
				aKW = ri.aKT(aK.vD[0]),
				q4 = this.aDJ[player],
				q5 = (player << 3) + q4,
				r6 = (this.sF[aH] = q5, this.aDm[aH] = aKW, this.uy[aH] = aKW, this.aDn[aH] = ri.aKT(aK.vD[1]), this.aDo[aH] = 0, aK.a8l[0]);
			r6 < 60 ? (v.fX.a0n(player, 60 - r6), this.sG[aH] = 60) : this.sG[aH] = r6, this.aDk[aH] = pI.oS.aDQ(aH, ri.aDr(aKW)), this.pJ[aH] = this.aPA, this.aDp[aH] = aK.vD[2], this.uz[aH] = 0, this.aPA = this.aPA + 1 & 1023, this.aDe[q5] = aH,
				this.aDJ[player] = q4 + 1, this.v3++, pI.a8I.aPB(player, aK.vD[1], aK.vD[2], this.pJ[aH])
		}, this.a9n = function() {
			var aPC = aK.vD[3];
			this.aDm[aPC] = this.uy[aPC], this.aDn[aPC] = ri.aKT(aK.vD[1]), this.aDo[aPC] = 0, this.aDp[aPC] = aK.vD[2], pI.a8I.aPB(this.sF[aPC] >> 3, aK.vD[1], aK.vD[2], this.pJ[aPC])
		}, this.a9 = function() {
			pI.a8I.a9();
			var aA, aL = i.gC,
				a4 = pI.eu.aAJ(aL),
				qk = (! function(qk) {
					var aA, aKX, aPH, aPI, aPJ, aKW, aPN, aPO, gl, gn, aDm = qk.aDm,
						aDn = qk.aDn,
						uy = qk.uy,
						sG = qk.sG,
						uz = qk.uz,
						aDo = qk.aDo,
						aDk = qk.aDk,
						qk = qk.v3,
						v6 = ip.mg << 4;
					for (aA = qk - 1; 0 <= aA; aA--) aPH = uy[aA], aKX = aDn[aA], aPH !== aKX && (aKW = aDm[aA], aPN = aKX % v6 - (aPJ = aKW % v6), aPO = ~~((aKX + .5) / v6) - (aKW = ~~((aKW + .5) / v6)), gl = ~~Math.sqrt(aPN * aPN + aPO * aPO +
						.5), gn = 2e5 + Math.min(20 * sG[aA], 4e5), uz[aA] && (gn = bO.bP(gn, 5)), 65535 <= (gn = aDo[aA] + Math.max(~~((gn + .5) / gl), 1)) ? uy[aA] = aPI = aKX : (aDo[aA] = gn, uy[aA] = aPI = aPJ + bO.bP(gn * aPN,
						65536) + v6 * (aKW + bO.bP(gn * aPO, 65536))), aDk[aA] = pI.oS.aPQ(aDk[aA], aPH, aPI))
				}(this), ! function(qk) {
					if (bl.ff() % 2 == 1) {
						var aA, gp, cn, cq, aR, aPR, kP, aPS, sp, jr, h6, aKW, aPT, aI8, aPV, rS, aH = qk.v3,
							uy = qk.uy,
							sF = qk.sF,
							sG = qk.sG,
							uz = qk.uz,
							oS = pI.oS.oS,
							aPX = oS.length,
							aPY = pI.oS.aPY,
							v6 = ip.mg << 4,
							aPZ = i.j,
							aC = a1.aG,
							gn = (aH - 1) * (bO.bP(bl.ff(), 2) % 2);
						for (aA = 0; aA < aH; aA++)
							for (gp = Math.abs(aA - gn), aKW = uy[gp], cn = ri.aDr(aKW), sp = sF[gp] >> 3, jr = aKW % v6, h6 = ~~((aKW + .5) / v6), aPV = sG[gp], cq = 0; cq < 9; cq++)
								if (!((aPR = cn + aPY[cq]) < 0 || aPX <= aPR))
									for (aPS = oS[aPR], kP = aPS.length, aR = 0; aR < kP; aR++) aPT = aPS[aR], rS = sF[aPT] >> 3, sp == rS || aPZ && aC[sp] === aC[rS] && aC[sp] || (rS = uy[aPT], (aI8 = jr - rS % v6) * aI8 + (aI8 = h6 - ~~((rS +
										.5) / v6)) * aI8 < 14400 && (rS = sG[aPT], aI8 = rS <= aPV ? Math.max(1, bO.bP(rS + bO.bP(aPV - rS, 10), 10)) : Math.max(1, bO.bP(aPV, 10)), sG[aPT] = Math.max(rS - aI8, 0), uz[aPT] = 4))
					}
				}(this), ! function(qk) {
					if (bl.ff() % 5 == 3) {
						var aA, r6, sG = qk.sG,
							aH = qk.v3;
						for (aA = 0; aA < aH; aA++) r6 = sG[aA], sG[aA] = Math.max(r6 - Math.max(1, r6 >> 7), 0)
					}
				}(this), this),
				sG = qk.sG,
				uz = qk.uz;
			for (aA = qk.v3 - 1; 0 <= aA; aA--) uz[aA] = uz[aA] >> 1, 0 === sG[aA] && pI.a8D.aDf(aA);
			cZ.a0q(aL, a4 - pI.eu.aAJ(aL), 15)
		}
}

function aPb() {
	var gQ, nc, gT, aPc, aPd, aPe, colors = [0, 0, 0],
		aPf = -1;

	function aPi(aA) {
		var aPj = nc.bG + aA * (ak.gap + aPe);
		aj.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", aj.fillRect(aPc, aPj, colors[aA] * aPd, aPe), aj.strokeStyle = t.u, aj.strokeRect(aPc, aPj, aPd,
			aPe), aj.fillStyle = t.u, aj.font = v.w.ae(0, .32 * aPe), v.w.textBaseline(aj, 1), v.w.textAlign(aj, 0), aj.fillText(L(0 === aA ? 362 : 1 === aA ? 363 : 364) + aPg(aA), aPc + ak.gap, aPj + .53 * aPe)
	}

	function aPg(aA, aPk) {
		return aPk = aPk || 256, bO.hQ(Math.floor(aPk * colors[aA]), 0, aPk - 1)
	}

	function hX(hT, hU) {
		return !(hT < aPc || hU < nc.bG || hT > nc.bF + nc.d || hU > nc.bG + nc.an)
	}
	this.show = function() {
		var ah = ce.cf.data[121].value;
		colors[0] = (ah >> 12) / 63, colors[1] = (ah >> 6 & 63) / 63, colors[2] = (63 & ah) / 63, gQ.show(), this.resize()
	}, this.dj = function() {
		ce.cx.cy(121, (aPg(0, 64) << 12) + (aPg(1, 64) << 6) + aPg(2, 64)), gQ.dj()
	}, this.resize = function() {
		gQ.resize(), nc.resize();
		var aR = r.f8,
			gt = gQ.gu(),
			aPh = (nc.bG = Math.max(nc.bG, aR * gt.gx + ak.gap), aR * gt.gw - 2 * ak.gap);
		nc.an = Math.min(nc.an, aPh), nc.d = 2 * nc.an, nc.bG = aR * gt.gx + .5 * (aR * gt.gw - nc.an), nc.bF = .5 * (r.d - nc.d), gT = .25 * nc.d, aPc = nc.bF + gT + ak.gap, aPd = nc.d - gT - ak.gap, aPe = (nc.an - 2 * ak.gap) / 3
	}, this.ai = function() {
		var aS, lE, cq;
		gQ.ai(), aj.lineWidth = ak.h2, aS = aPg(0), lE = aPg(1), cq = aPg(2), aj.fillStyle = "rgb(" + aS + "," + lE + "," + cq + ")", aj.fillRect(nc.bF, nc.bG, gT, nc.an), aj.strokeStyle = t.u, aj.strokeRect(nc.bF, nc.bG, gT, nc.an), aj
			.fillStyle = aS + lE + cq < 306 && lE < 150 ? t.u : t.kb, v.w.textBaseline(aj, 1), v.w.textAlign(aj, 1), aj.font = v.w.ae(0, .1 * nc.an), aj.rotate(-Math.PI / 2), aj.fillText(L(361), -nc.bG - .5 * nc.an, nc.bF + .5 * gT), aj
			.setTransform(1, 0, 0, 1, 0, 0), aPi(0), aPi(1), aPi(2)
	}, this.hS = function(hT, hU) {
		hX(hT, hU) && (aPf = bO.hQ(Math.floor((hU - nc.bG) / (aPe + .75 * ak.gap)), 0, 2), colors[aPf] = bO.hQ((hT - aPc) / aPd, 0, 1), bl.c8 = !0)
	}, this.hW = function(hT) {
		-1 !== aPf && (colors[aPf] = bO.hQ((hT - aPc) / aPd, 0, 1), bl.c8 = !0)
	}, this.qp = function(hT, hU, deltaY) {
		hX(hT, hU) && (hT = bO.hQ(Math.floor((hU - nc.bG) / (aPe + .75 * ak.gap)), 0, 2), colors[hT] = bO.hQ(colors[hT] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bl.c8 = !0)
	}, this.tS = function() {
		0 <= aPf && (aPf = -1, bl.c8 = !0)
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(360), [new dF("⬅️ " + L(1), function() {
		d2.d4.d5()
	})], !1), nc = new nh([.5, .25], [.5, .5], 1)
}

function aHs() {
	this.aPl = function(bm, fk) {
		return Number(this.aPm(bm, fk))
	}, this.aPm = function(bm, fk) {
		var ah = null;
		return 0 === n.id ? n.aFI && (ah = n.aFI.getItem((fk ? "v" : "d") + bm)) : 1 === n.id ? ah = n.nv.loadString((fk ? 1e3 : 2e3) + bm) : 2 === n.id && (ah = n.aPn[(fk ? "v" : "d") + bm]), ah && 0 !== ah.length ? ah : null
	}, this.ci = function(aH, aPo) {
		var bW = [],
			aPp = aPo ? "e" : "l";
		if (0 === n.id) {
			if (n.aFI)
				for (aA = 0; aA < aH; aA++) bW.push(n.aFI.getItem(aPp + aA))
		} else if (1 === n.id)
			for (var aPq = aPo ? 5e3 : 3e3, aA = 0; aA < aH; aA++) bW.push(n.nv.loadString(aPq + aA));
		else if (2 === n.id)
			for (aA = 0; aA < aH; aA++) bW.push(n.aPn[aPp + aA]);
		return bW
	}, this.save = function(bm, value, fk) {
		var cH = (fk ? "v" : "d") + bm;
		if (0 === n.id) {
			if (n.aFI && ce.cf.data[140].value) try {
				n.aFI.setItem(cH, value)
			} catch (f6) {
				console.log(f6)
			}
		} else 1 === n.id ? n.nv.saveString((fk ? 1e3 : 2e3) + bm, value) : 2 === n.id && (n.aPn[cH] = value, n.aFJ.postMessage(cH + " " + value))
	}, this.cz = function(bW, aPo) {
		var aH = bW.length,
			aPp = aPo ? "e" : "l";
		if (0 === n.id) {
			if (n.aFI && ce.cf.data[140].value) try {
				for (aA = 0; aA < aH; aA++) n.aFI.setItem(aPp + aA, bW[aA])
			} catch (f6) {
				console.log(f6)
			}
		} else if (1 === n.id)
			for (var aPq = aPo ? 5e3 : 3e3, aA = 0; aA < aH; aA++) n.nv.saveString(aPq + aA, bW[aA]);
		else if (2 === n.id)
			for (aA = 0; aA < aH; aA++) n.aPn[aPp + aA] = bW[aA], n.aFJ.postMessage(aPp + aA + " " + bW[aA])
	}
}

function a79() {
	var mO, mP, aPr, aPs, aPt, aPu, aPv, aPw, aPx, aPy;

	function aQ0() {
		var l9 = i.l9;
		for (aPx = l9; aPx < i.df; aPx++) aPz();
		for (aPx = i.bu ? i.fd : 0; aPx < l9; aPx++) {
			if (!aQ3()) {
				for (var cq = i.wI = aPx; cq < l9; cq++) aPx = cq, aPz();
				return
			}
			aQ4(aPu + mO * aPt + bO.bP(aPt, 2), aPv + mP * aPt + bO.bP(aPt, 2))
		}
	}

	function aQQ(player) {
		for (var pN = a5.pN, pP = a5.pP, pQ = a5.pQ, pR = a5.pR, bG = pP[player]; bG <= pR[player]; bG++)
			for (var bF = pN[player]; bF <= pQ[player]; bF++) {
				var bM = mr.xm(bF, bG);
				mr.pV(bM) && (mr.q1(bM) ? mr.pr(bM, player) : mr.pg(bM, player))
			}
	}

	function aQP(bW, ym, yn) {
		var a4 = bW[ym];
		bW[ym] = bW[yn], bW[yn] = a4
	}

	function aQ3() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (mO = bO.bP(aPr * bA.random(), bA.value(100)), mP = bO.bP(aPs * bA.random(), bA.value(100)), aQV()) return 1;
			return
		}() || function() {
			var pC, pD, ee, ss, cq, a9z;
			for (pC = bO.bP(aPr * bA.random(), bA.value(100)), pD = bO.bP(aPs * bA.random(), bA.value(100)), ee = 40; 1 <= ee; ee--)
				for (ss = aPs - ee; 0 <= ss; ss -= 40)
					for (mP = (ss + pD) % aPs, cq = 40; 1 <= cq; cq--)
						for (a9z = aPr - cq; 0 <= a9z; a9z -= 40)
							if (mO = (a9z + pC) % aPr, aQV()) return 1;
			return
		}()
	}

	function aQV() {
		for (var aL, aQX, gap = bO.bP(aPt - aPw, 2), og = aPv + mP * aPt + gap, ou = aPu + mO * aPt + gap, aQW = og + aPw - 1; og <= aQW; aQW--)
			for (aQX = ou + aPw - 1; ou <= aQX; aQX--)
				if (aL = mr.xm(aQX, aQW), !mr.pm(aL) || mr.q1(aL)) return;
		return 1
	}

	function aQ4(a9z, ss) {
		aPz(), aQY(a9z - 2, ss - 2)
	}

	function aPz() {
		a5.gB[aPx] = 0, a5.a6[aPx] = a5.n1[aPx] = 0, a5.pT[aPx] = [], a5.pZ[aPx] = [], a5.pa[aPx] = [], a5.pb[aPx] = [], a5.pN[aPx] = a5.pP[aPx] = a5.pQ[aPx] = a5.pR[aPx] = 0
	}

	function aQY(a9z, ss) {
		var aL, aA, aQZ, aQa;
		for (a5.gB[aPx] = 1, a5.pN[aPx] = a9z + 10, a5.pP[aPx] = ss + 10, a5.pR[aPx] = a5.pQ[aPx] = 0, aQZ = a9z; aQZ < a9z + 4; aQZ++)
			for (aQa = ss; aQa < ss + 4; aQa++)(a9z < aQZ && aQZ < a9z + 3 || ss < aQa && aQa < ss + 3) && (aL = mr.xm(aQZ, aQa), mr.pm(aL)) && (a5.pN[aPx] = Math.min(aQZ, a5.pN[aPx]), a5.pQ[aPx] = Math.max(aQZ, a5.pQ[aPx]), a5.pP[aPx] = Math.min(
				aQa, a5.pP[aPx]), a5.pR[aPx] = Math.max(aQa, a5.pR[aPx]), aPy[a5.a6[aPx]] = aL, a5.a6[aPx]++, mr.pg(aL, aPx));
		for (a5.n1[aPx] = a5.a6[aPx], aA = a5.a6[aPx] - 1; 0 <= aA; aA--) mr.xo(aPy[aA], aPx) ? (mr.pr(aPy[aA], aPx), a5.pZ[aPx].push(aPy[aA])) : mr.ok(aPy[aA]) ? (mr.pr(aPy[aA], aPx), a5.pa[aPx].push(aPy[aA])) : mr.xn(aPy[aA]) && (mr.pr(aPy[aA],
			aPx), a5.pb[aPx].push(aPy[aA]))
	}

	function aQU(a9z, ss) {
		for (var aL, aQX, aQW = ss; ss - 6 < aQW; aQW--)
			for (aQX = a9z; a9z - 6 < aQX; aQX--)
				if (aL = mr.xm(aQX, aQW), mr.q1(aL)) return;
		return 1
	}
	this.h = function() {
		if (aPy = new Array(12), aPw = 6, aPt = 10, aPr = bO.bP(ip.mg, aPt), aPs = bO.bP(ip.mj, aPt), aPu = bO.bP(ip.mg - aPt * aPr, 2), aPv = bO.bP(ip.mj - aPt * aPs, 2), i.bu)
			for (var aA = 0; aA < i.fd; aA++) aPx = aA, aPz(), a5.gB[aPx] = 1;
		(0 === i.data.spawningType ? aQ0 : 1 === i.data.spawningType ? (aQ0(), function() {
			var lN = i.k;
			i.wL || lN++;
			if (!(lN < 3)) {
				for (var data = i.data, l8 = (i.bu ? i.fd : 0) + data.teamPlayerCount[0], lf = i.wI, aQ5 = new Uint32Array(lN), aQ6 = new Uint32Array(lN), aQ7 = new Uint16Array(lN), aQ8 = new Uint16Array(lN), aG = a1.aG, pN = a5.pN, pP =
						a5.pP, pQ = a5.pQ, pR = a5.pR, aQ9 = aK.aQ9, aQA = aK.aQA, aA = l8; aA < lf; aA++) aQ9[aA] = pN[aA] + pQ[aA] >> 1, aQA[aA] = pP[aA] + pR[aA] >> 1;
				for (aA = l8; aA < lf; aA++) {
					var id = aG[aA];
					aQ5[id] += aQ9[aA], aQ6[id] += aQA[aA]
				}
				var a2 = a1.a2;
				for (aA = 1; aA < lN; aA++) {
					var aD = Math.max(data.teamPlayerCount[a2[aA]], 1);
					aQ7[aA] = bO.bP(aQ5[aA], aD), aQ8[aA] = bO.bP(aQ6[aA], aD)
				}
				var kk = a1.kk,
					kl = a1.kl,
					km = a1.km,
					aJ = aK.aJ;
				for (aA = 0; aA < 512; aA++) aJ[aA] = aA;
				for (var aS = 0; aS < 2 + (4 <= lN); aS++)
					for (aA = l8; aA < lf; aA++) {
						for (var sp = aA, aQB = aJ[sp], aQC = 1, l5 = bO.a5y(aQ9[aQB] - aQ7[1], aQA[aQB] - aQ8[1]), ee = 2; ee < lN; ee++) {
							var aQD = bO.a5y(aQ9[aQB] - aQ7[ee], aQA[aQB] - aQ8[ee]);
							aQD < l5 && (l5 = aQD, aQC = ee)
						}
						var aQE = aG[sp];
						if (aQC !== aQE) {
							if (2 === aS && 4 <= lN) {
								var aQF = Math.max((aQC + 1) % lN, 1),
									aQG = bO.a5y(aQ9[aQB] - aQ7[aQF], aQA[aQB] - aQ8[aQF]);
								for (ee = 1; ee < lN; ee++) aQD = bO.a5y(aQ9[aQB] - aQ7[ee], aQA[aQB] - aQ8[ee]), l5 < aQD && aQD < aQG && (aQG = aQD, aQF = ee);
								aQF !== aQE && bO.a5y(aQ7[aQE] - aQ7[aQF], aQ8[aQE] - aQ8[aQF]) < bO.a5y(aQ7[aQE] - aQ7[aQC], aQ8[aQE] - aQ8[aQC]) && (aQC = aQF)
							}
							var aQH = a2[aQC],
								aQI = kl[aQH] + (i.bu ? 0 : km[aQH]),
								rS = kk[aQI],
								aQJ = aJ[rS],
								aQK = kl[aQH + 1];
							l5 = bO.a5y(aQ9[aQJ] - aQ7[aQE], aQA[aQJ] - aQ8[aQE]);
							for (var aR = aQI + 1; aR < aQK; aR++) {
								var aQL = kk[aR],
									aQM = aJ[aQL];
								(aQD = bO.a5y(aQ9[aQM] - aQ7[aQE], aQA[aQM] - aQ8[aQE])) < l5 && (l5 = aQD, rS = aQL)
							}
							rS < l8 || lf <= rS || (aQJ = aJ[rS], aQ5[aQE] += aQ9[aQJ] - aQ9[aQB], aQ6[aQE] += aQA[aQJ] - aQA[aQB], aQ5[aQC] += aQ9[aQB] - aQ9[aQJ], aQ6[aQC] += aQA[aQB] - aQA[aQJ], aD = data.teamPlayerCount[a2[aQE]], aQ7[
								aQE] = bO.bP(aQ5[aQE], aD), aQ8[aQE] = bO.bP(aQ6[aQE], aD), aD = data.teamPlayerCount[aQH], aQ7[aQC] = bO.bP(aQ5[aQC], aD), aQ8[aQC] = bO.bP(aQ6[aQC], aD), aJ[sp] = aQJ, aJ[rS] = aQB)
						}
					}! function() {
						for (var aJ = aK.aJ, pN = a5.pN, pP = a5.pP, pQ = a5.pQ, pR = a5.pR, a6 = a5.a6, n1 = a5.n1, pZ = a5.pZ, pa = a5.pa, pb = a5.pb, aA = 0; aA < 512; aA++) {
							var aQO = aJ[aA];
							if (aQO !== aA) {
								aQP(pN, aA, aQO), aQP(pP, aA, aQO), aQP(pQ, aA, aQO), aQP(pR, aA, aQO), aQP(a6, aA, aQO), aQP(n1, aA, aQO), aQP(pZ, aA, aQO), aQP(pa, aA, aQO), aQP(pb, aA, aQO), aQQ(aA), aQQ(aQO), aJ[aA] = aA;
								for (var an = aQO, gn = aJ[an]; gn !== aA;) gn = aJ[an = gn];
								aJ[an] = aQO
							}
						}
					}()
			}
		}) : function() {
			var l9 = i.l9;
			for (aPx = l9; aPx < i.df; aPx++) aPz();
			for (aPx = i.bu ? i.fd : 0; aPx < l9; aPx++)
				if (! function() {
						var spawningData = i.data.spawningData,
							a9z = spawningData[2 * aPx] + 1,
							spawningData = spawningData[2 * aPx + 1] + 1;
						if (3 < a9z && a9z < ip.mg - 5 && 3 < spawningData && spawningData < ip.mj - 5 && mr.pm(mr.xm(a9z, spawningData)) && aQU(a9z + 3, spawningData + 3)) return aQ4(a9z + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aQ3()) {
						for (var cq = i.wI = aPx; cq < l9; cq++) aPx = cq, aPz();
						return
					}
					var a9z = aPu + mO * aPt + bO.bP(aPt, 2),
						ss = aPv + mP * aPt + bO.bP(aPt, 2);
					aQ4(a9z, ss)
				}
		})(), cZ.a5H[7] = a5.a6[i.gC]
	}, this.aJN = function(gH, h8, h7) {
		var aA, a9z, ss, aL, mO, mP;
		for (aPx = gH, aA = 0; aA < 20; aA++)
			for (a9z = h8 + aA; h8 - aA <= a9z; a9z--)
				for (ss = h7 + aA; h7 - aA <= ss; ss--)
					if ((a9z === h8 + aA || a9z === h8 - aA || ss === h7 + aA || ss === h7 - aA) && 3 < a9z && a9z < ip.mg - 5 && 3 < ss && ss < ip.mj - 5 && mr.pm(mr.xm(a9z, ss)) && aQU(a9z + 3, ss + 3)) {
						if (0 < a5.a6[aPx]) {
							for (mP = mO = aL = void 0, mO = a5.pQ[aPx]; mO >= a5.pN[aPx]; mO--)
								for (mP = a5.pR[aPx]; mP >= a5.pP[aPx]; mP--) aL = 4 * (mP * ip.mg + mO), mr.pk(aPx, aL) && (mr.xq(aL), a5.a6[aPx]--);
							aPz()
						}
						return aQY(a9z - 1, ss - 1), !0
					} return !1
	}, this.aJO = function(gH) {
		aPx = gH, aQ3() ? aQ4(aPu + mO * aPt + bO.bP(aPt, 2), aPv + mP * aPt + bO.bP(aPt, 2)) : aPz()
	}
}

function wQ() {
	this.iu = function() {
		var aQc = i.data;
		v.cj.aM9(aQc.teamPlayerCount, aQc.playerCount), aQc.numberTeams = v.cj.iv(aQc.teamPlayerCount, 0), aQc.teamPlayerCount[0] && aQc.teamPlayerCount[7] && (aQc.teamPlayerCount[7] = 0, this.iu())
	}, this.j1 = function() {
		var aQc = i.data;
		aQc.mapType < 2 ? ip.b0(ip.is(aQc), aQc.mapSeed) : ip.aHn(aQc.canvas)
	}, this.iz = function() {
		var aQc = i.data;
		aQc.colorsData || (aQc.colorsData = new Uint32Array(1)), aQc.selectableColor && (aQc.colorsData[0] = ce.d4.iN()), aQc.selectableName && (aQc.playerNamesData || (aQc.playerNamesData = new Array(1)), aQc.playerNamesData[0] = ce.cf.data[122]
			.value)
	}, this.jQ = function() {
		i.data = new wP, i.data.aIncomeType = 2, i.data.aIncomeData = new Uint8Array(i.df), i.data.aIncomeData[0] = 64
	}
}

function aQd() {
	this.yl = function(ja, ym, yn) {
		iJ.b0(75), iJ.fO(1, 0), iJ.fO(6, 21), iJ.fO(6, ja), iJ.fO(1, +(ym < 0)), iJ.fO(1, +(yn < 0)), iJ.fO(30, Math.abs(ym)), iJ.fO(30, Math.abs(yn)), ct.d4.send(0, iJ.bt)
	}, this.yo = function(ja, yp, yq) {
		iJ.b0(18 + 16 * yp.length + 30), iJ.fO(1, 0), iJ.fO(6, 22), iJ.fO(6, ja), ct.cu.iK(yp), iJ.fO(30, yq), ct.d4.send(0, iJ.bt)
	}, this.yv = function(ja, yp, yq) {
		iJ.b0(73), iJ.fO(1, 0), iJ.fO(6, 28), iJ.fO(6, ja), jc.e5.aMz(yp, 5), iJ.fO(30, yq), ct.d4.send(0, iJ.bt)
	}, this.yr = function(gi, eb) {
		for (var aH = eb.length, ia = 0, aA = 0; aA < aH; aA++) ia += eb[aA].length;
		for (iJ.b0(21 + 3 * aH + 16 * ia), iJ.fO(1, 0), iJ.fO(6, 23), iJ.fO(3, gi), iJ.fO(4, aH), iJ.fO(7, ia), aA = 0; aA < aH; aA++) iJ.fO(3, eb[aA].length), e4.ji.nB(eb[aA]);
		ct.d4.send(0, iJ.bt)
	}, this.ys = function(gi, ym, yn) {
		iJ.b0(52), iJ.fO(1, 0), iJ.fO(6, 24), iJ.fO(3, gi), iJ.fO(1, +(ym < 0)), iJ.fO(1, +(yn < 0)), iJ.fO(20, Math.abs(ym)), iJ.fO(20, Math.abs(yn)), ct.d4.send(0, iJ.bt)
	}
}

function a7d() {
	var canvas, f, w7, font, hN = 0,
		aQe = !1,
		aQf = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aQg = 5;

	function aB6() {
		if (aQe) {
			var aA, aH = aQf.length,
				iE = Math.floor(.5 * w7.an),
				an = aH * iE,
				bF = Math.floor(Math.floor(w7.bF) + .3 * w7.d - .5),
				bG = Math.floor(Math.floor(w7.bG) - an),
				d = Math.floor(.4 * w7.d + 2.5);
			for (aj.fillStyle = t.mQ, aj.fillRect(bF, bG, d, an), aj.fillStyle = t.a3T, aj.fillRect(bF, bG + aQg * iE, d, iE), aj.fillStyle = t.u, aj.fillRect(bF, bG, 2, an), aj.fillRect(bF, bG, d, 2), aj.fillRect(bF + d - 2, bG, 2, an), aA = 1; aA <
				aH; aA++) aj.fillRect(bF, bG + aA * iE, d, 2);
			for (aj.fillStyle = t.u, v.w.textAlign(aj, 1), v.w.textBaseline(aj, 1), aj.font = v.w.ae(0, .6 * iE), bF += .5 * d, aA = 0; aA < aH; aA++) aj.fillText(aQs(aA), bF, bG + (aA + .6) * iE)
		}
		aj.drawImage(canvas, Math.floor(w7.bF), Math.floor(w7.bG))
	}

	function aP(qk) {
		var bF, jr, h6, iE;
		f.clearRect(0, 0, Math.floor(w7.d), Math.floor(w7.an)), f.fillStyle = t.mQ, f.fillRect(0, 0, Math.floor(w7.d), Math.floor(w7.an)), i.q && (f.fillStyle = t.a3T, f.fillRect(0, 0, Math.floor(.3 * w7.d), Math.floor(w7.an))), f.fillStyle = t.u, f
			.fillText("Hide UI", .15 * w7.d, .5 * w7.an), f.fillRect(Math.floor(.3 * w7.d - .5), 0, 2, Math.floor(w7.an)), bF = .5 * w7.d, f.fillText("Replay Speed", bF, .31 * w7.an), f.fillText(aQs(aQg), bF, .69 * w7.an), f.fillRect(Math.floor(.7 *
				w7.d - .5), 0, 2, Math.floor(w7.an)), qk.wv ? (bF = Math.floor(.02 * w7.d), qk = Math.floor(.025 * w7.d), jr = Math.floor(.85 * w7.d - bF - .5 * qk), h6 = Math.floor(.25 * w7.an), iE = Math.floor(w7.an) - 2 * h6, f.fillRect(jr, h6,
				bF, iE), f.fillRect(jr + bF + qk, h6, bF, iE)) : function() {
				var d = Math.floor(.46 * w7.an),
					an = Math.floor(.23 * w7.an),
					bF = Math.floor(.85 * w7.d - .5 * d + d / 12),
					bG = Math.floor(.5 * w7.an - an);
				f.beginPath(), f.moveTo(bF, bG), f.lineTo(bF + d, bG + an), f.lineTo(bF, bG + (an << 1)), f.fill()
			}(), f.fillRect(0, 0, Math.floor(w7.d), 2), f.fillRect(0, 0, 2, Math.floor(w7.an)), f.fillRect(0, Math.floor(w7.an) - 2, Math.floor(w7.d), 2), f.fillRect(Math.floor(w7.d - 2), 0, 2, Math.floor(w7.an))
	}

	function aQs(aA) {
		return 5 === aA ? "Normal" : "" + aQf[aA]
	}
	this.wv = !1, this.h = function() {
		i.i0 && (aQg = 5, this.wv = !1, aQe = !1, w7 = new nh([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aQh = function() {
		return aQf[aQg]
	}, this.rc = function() {
		return w7.bG
	}, this.qb = function(qc) {
		return !!i.i0 && w7.bF + w7.d > r.d - qc - ak.gap
	}, this.resize = function() {
		i.i0 && (w7.resize(), w7.bG -= (qS.qT() - 1) * ak.gap, font = v.w.ae(0, .3 * w7.an), (canvas = document.createElement("canvas")).width = Math.floor(w7.d), canvas.height = Math.floor(w7.an), (f = canvas.getContext("2d", {
			alpha: !0
		})).font = font, v.w.textAlign(f, 1), v.w.textBaseline(f, 1), aP(this))
	}, this.tj = function(aQi) {
		0 === i.bw || d2.jq() || aQi !== i.q && (i.q = aQi, vr.resize(), bl.c8 = !0, i.i0) && (hN = bl.bk + 2e3, aP(this))
	}, this.hS = function(bF, bG) {
		if (!i.i0) return !1;
		if (bF < w7.bF || bG < w7.bG || bF > w7.bF + w7.d) return aQe && function(qk, bF, bG) {
			var aH = aQf.length,
				iE = Math.floor(.5 * w7.an),
				an = aH * iE,
				jr = Math.floor(Math.floor(w7.bF) + .3 * w7.d - .5),
				an = Math.floor(Math.floor(w7.bG) - an),
				d = Math.floor(.4 * w7.d + 2.5);
			return aQe = !1, bl.c8 = !0, bF < jr || jr + d < bF || bG < an || (aQg = aNm(0, Math.floor((bG - an) / iE), aH - 1), aP(qk)), !0
		}(this, bF, bG);
		if ((bF -= w7.bF) < .3 * w7.d) aQe = !1, this.tj(!i.q);
		else {
			if (bF < .7 * w7.d) return aQe = !aQe, bl.c8 = !0;
			this.tl(!1)
		}
		return !0
	}, this.tl = function(aQk) {
		2 === i.bw ? (this.tj(!1), d2.da(3)) : (aQe = !1, this.wv = !this.wv, this.wv ? (mI.mJ && mI.tk(), n.o.setState(1)) : aQk || mI.a2v(), bl.c8 = !0, aP(this))
	}, this.tm = function() {
		this.wv = !1, mI.a2v(), bl.c8 = !0, aP(this)
	}, this.tK = function(bF, bG) {
		return !!i.q && (0 <= mI.hS(bF, bG) || (i.i0 ? ((bl.bk > hN || !this.hS(bF, bG)) && qh.hS(bF, bG), bl.c8 = !0, hN = bl.bk + 2e3) : qh.hS(bF, bG)), !0)
	}, this.a9 = function() {
		i.i0 && i.q && bl.bk > hN - 1e3 && bl.bk < hN && (bl.c8 = !0)
	}, this.hz = function() {
		i.i0 && (this.wv = !1, bl.c8 = !0, aP(this))
	}, this.ai = function() {
		if (i.i0) {
			if (i.q) {
				if (bl.bk > hN) return;
				if (bl.bk > hN - 1e3) return aj.globalAlpha = aNm(0, (1e3 - (bl.bk - (hN - 1e3))) / 1e3, 1), aB6(), void(aj.globalAlpha = 1)
			}
			aB6()
		}
	}
}

function aQt() {
	var aQu, aC4, aQx, aC3, aC6, aQv = [new Array(4), [], new Array(2), new Array(2)],
		aQw = new Array(4),
		aQy = new Array(2),
		aQz = [L(100), L(167), L(365), L(366)];

	function aMR() {
		var eF = aQu.aCF.nd.f6.value.trim().slice(0, 127);
		eF.length < 1 || (aQu.aCF.nd.f6.value = "", eT.yQ.gG(eF))
	}

	function aR3(aR6) {
		eT.d4.fo[3] = 1 - eT.d4.fo[3], aR4(3, 1, eT.d4.fo[3]), aR6 && ct.a1S.iQ(4), eT.d4.fo[3] && ce.cx.cy(158, eT.d4.fo[0])
	}

	function aR1(ee, cq) {
		eT.d4.fo[ee] !== cq && (0 === ee && eT.d4.fo[3] && aR3(0), aR4(ee, eT.d4.fo[ee], 0), aR4(ee, cq, 1), eT.d4.fo[ee] = cq, 0 === ee ? (ct.a1S.iQ(2, cq), eT.d4.fo[2] ? (aQu.aCG.aP(), aQu.aCF.tT(1)) : aQu.aCF.tT(0), d2.jf().g1(), d2.jf().fz()) :
			2 === ee && (0 === cq ? (ct.a1S.iQ(0), aQu.aCF.aP(), aQu.aCL()) : (ct.a1S.iQ(1), aQu.aCG.aP(), aQu.aCM())))
	}

	function aR4(ee, cq, color) {
		aQu.aCH[ee].a0z[cq].ns(color ? t.a3T : t.a2R)
	}

	function aR9(y4) {
		return y4 < 7 ? y4 + 2 + " " + L(373) : 7 === y4 || 10 === y4 ? L(167) + " (Full-Sending: " + L(7 === y4 ? 374 : 375) + ")" : 8 === y4 ? "1v1" : L(376)
	}

	function aRA(ah) {
		var yb = bO.bP(ah, 60),
			ah = ah % 60;
		return (yb < 10 ? "0" : "") + yb + ":" + (ah < 10 ? "0" : "") + ah
	}
	this.aR5 = function() {
		return aQu.aCF
	}, this.yQ = function(e7) {
		aR1(2, 0);
		var ef = aQu.aCF.nd.f6.value,
			e7 = "@" + e7 + " ";
		ef.length && !v.dh.ll(ef, " ") && (e7 = " " + e7), aQu.aCF.nd.f6.value = ef += e7, aQu.aCF.nd.f6.focus()
	}, this.fy = function() {
		aQu.aCG.aP()
	}, this.g1 = function() {
		var aR8 = eT.d4.fo[0],
			aR8 = eT.d4.ej[aR8];
		ip.b0(aR8.oY, aR8.mapSeed), aC4.a0z[0].button.textContent = L(11) + ": " + ip.oX.nJ[aR8.oY].name, aC4.a0z[1].button.textContent = L(14, 0, "Mode") + ": " + aR9(aR8.y4), aC4.a0z[2].button.textContent = L(370) + ": " + ip.oX.nJ[aR8.y5]
			.name, aC4.a0z[3].button.textContent = L(371, 0, "Next Mode") + ": " + aR9(aR8.y6), aC4.a0z[4].button.textContent = L(372) + ": " + aRA(aR8.g6), aC4.resize()
	}, this.fz = function() {
		var aR8 = eT.d4.fo[0],
			g4 = eT.d4.ej[aR8];
		aQu.aCK(g4.g0);
		for (var aA = 0; aA < eT.eU.eS.length; aA++) aQv[0][aA].a2T.textContent = "" + eT.eU.eS[aA].length;
		var eU = eT.eU.eS[aR8],
			aRB = eU.length,
			aRC = eT.eU.y8[aR8];
		aQv[2][1].a2T.textContent = "" + aRB, aQv[3][1].a2T.textContent = "" + aRC, aC4.a0z[4].button.textContent = L(372) + ": " + aRA(g4.g6);
		for (aA = 0; aA < 4; aA++) {
			var aRD = eT.d4.ej[aA];
			aQw[aA] ? 0 === aRD.g0 && (aQw[aA].a2T.textContent = ip.oX.nJ[aRD.oY].name) : aQw[aA] = new a2S(ip.oX.nJ[aRD.oY].name, aC3.a0z[aA].button, 1, 1), v.dh.startsWith(aQz[aA], "🏆 ") ? aRD.y7 || (aQz[aA] = aQz[aA].substring(3), aC3.a0z[aA]
				.button.textContent = aQz[aA], aC3.a0z[aA].button.appendChild(aQv[0][aA].a2T), aC3.a0z[aA].button.appendChild(aQw[aA].a2T)) : aRD.y7 && (aQz[aA] = "🏆 " + aQz[aA], aC3.a0z[aA].button.textContent = aQz[aA], aC3.a0z[aA].button
				.appendChild(aQv[0][aA].a2T), aC3.a0z[aA].button.appendChild(aQw[aA].a2T))
		}
		var g4 = "",
			aRF = "";
		0 === aR8 && (g4 = eT.w9.eY(eU, 0, aRB), aRF = eT.w9.eY(eU, 0, aRC)), aQx[0].a2T.textContent = g4, aQx[1].a2T.textContent = aRF, aQy[1].a2T.textContent = "MP: " + eT.d4.fq[0] + "   SP: " + eT.d4.fq[1] + "   Lobby: " + v.cj.aMA(eT.eU.eS)
	}, this.g8 = function() {
		aQu.aCF.aP()
	}, this.show = function() {
		aQu.show(), this.resize(), eT.message.show()
	}, this.dj = function() {
		aQu.dj(), eT.tg.dj(), eT.g2.dj(), eT.message.dj()
	}, this.resize = function() {
		aQu.resize(1 - eT.d4.fo[2]), eT.message.resize()
	}, this.dk = function(aR) {
		2 === aR ? eT.d4.fo[3] ? aR3(1) : aQu.aCH[3].a0z[0].ch() : aR < 2 && aR3(1)
	}, aC3 = new aR0([new dF(aQz[0], function() {
		return aR1(0, 0), 2
	}), new dF(aQz[1], function() {
		return aR1(0, 1), 2
	}), new dF(aQz[2], function() {
		return aR1(0, 2), 2
	}), new dF(aQz[3], function() {
		return aR1(0, 3), 2
	})], t.a2R), aC4 = new aR0([new dF("", 0, 2), new dF("", 0, 2), new dF("", 0, 2), new dF("", 0, 2), new dF("", 0, 2)], t.a3v, 1);
	var aR2 = new aR0([new dF(L(367), function() {
		return aR1(2, 0), 2
	}), new dF(L(142), function() {
		return aR1(2, 1), 2
	})], t.a2R);
	aC6 = new aR0([new dF(L(368), (__fx.customLobby.setLeaveFunction(() => {
			d2.fH(), eT.zF(), ct.d4.a1X(3240), __fx.customLobby.setActive(false), d2.da(5, 5)
		}),
		function() {
			d2.fH(), eT.zF(), ct.d4.a1X(3240), __fx.customLobby.setActive(false), d2.da(5, 5)
		})), new dF(L(369), function() {
		return aR3(1), 2
	})], t.a2R), aQu = new aC2(aC3, aC4, aR2, aC6, aMR, eT.tg.aFt);
	for (var aA = 0; aA < 4; aA++) aQv[0][aA] = new a2S("0", aC3.a0z[aA].button);
	aQv[2][1] = new a2S("0", aR2.a0z[1].button), aQv[3][1] = new a2S("0", aC6.a0z[1].button), aQx = [new a2S("", aR2.a0z[1].button, 1, 1), new a2S("", aC6.a0z[1].button, 1, 1)], aR4(0, eT.d4.fo[0], 1), aR4(2, eT.d4.fo[2], 1), (aQy = [new a2S(L(13),
		aQu.aCN(), 1, 0), new a2S("", aQu.aCN(), 1, 1)])[0].a2T.style.fontSize = "0.4em", aQy[1].a2T.style.fontSize = "0.4em"
}

function a7j() {
	this.aKZ = new Uint16Array(2), this.aM = new Uint16Array(2), this.a93 = new Int32Array(2), this.a8l = new Uint32Array(2), this.aRG = new Uint32Array(2), this.xj = new Uint8Array(4), this.aLz = new Uint8Array(4), this.xB = new Uint32Array(4), this
		.vD = new Uint32Array(5), this.x9 = new Uint32Array(8), this.aLd = new Uint16Array(16), this.aJ = new Uint16Array(512), this.aQ9 = new Uint16Array(512), this.aQA = new Uint16Array(512), this.aKw = function(bW, mb) {
			return bW[0] = mb, bW
		}, this.aRH = function(bW, mb, a4B) {
			return bW[0] = mb, bW[1] = a4B, bW
		}, this.aRI = function(bW, mb, a4B, aAe) {
			return bW[0] = mb, bW[1] = a4B, bW[2] = aAe, bW
		}, this.aRJ = function(bW, mb, a4B, aAe, aRK) {
			return bW[0] = mb, bW[1] = a4B, bW[2] = aAe, bW[3] = aRK, bW
		}
}

function aRL() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 !== i.data.iIncomeType && (i.data.iIncomeData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.iIncomeType && v.cj.a1h(dC.dQ(), i.data.iIncomeData, 255)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(25), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(23), L(18), L(5)],
			value: i.data.iIncomeType
		}, function(bm) {
			dK(), 2 !== bm || i.data.iIncomeData || (i.data.iIncomeData = new Uint8Array(i.df), i.data.iIncomeData.fill(32)), i.data.iIncomeType = bm, d2.da(27)
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU;
		1 === i.data.iIncomeType && ((dU = new dV).dW("Value"), dU.db(new jI({
			bm: -1,
			value: i.data.iIncomeValue
		}, 1, 0, function(f6) {
			var value = bO.hQ(Math.floor(f6.target.value), 0, 255);
			f6.target.value = i.data.iIncomeValue = value
		})), dR.push(dU))
	}(dR), function(dR) {
		var dU;
		2 === i.data.iIncomeType && ((dU = new dV).dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.iIncomeData, 4)), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function aR0(aRM, aRN, aRO) {
	this.hZ = document.createElement("div"), this.a0z = aRM;
	var aRP = 0;
	this.resize = function(a2Z, aAb) {
		var aH = aRM.length;
		if (!aRO)
			for (var aA = 1; aA < aH; aA++) v.w.mU(aRM[aA].button, 4);
		for (var aAc = 0, aA = 0; aA < aH; aA++) aAc += aRM[aA].button.offsetWidth;
		if (a2Z && (aRP = a2Z.offsetWidth), aAb && aAc < aRP)
			for (aA = 0; aA < aH; aA++) aRM[aA].button.style.width = (100 * aRM[aA].button.offsetWidth / aAc).toFixed(2) + "%";
		else
			for (aA = 0; aA < aH; aA++) aRM[aA].button.style.width = "auto";
		aAb || this.resize(a2Z, 1)
	};
	var qk = this;
	qk.hZ.style.height = qk.hZ.style.maxHeight = "100%";
	for (var aA = 0; aA < aRM.length; aA++) aRM[aA].ns(aRN), aRM[aA].button.style.height = "100%", aRM[aA].button.style.padding = "0.0em 0.9em", qk.hZ.appendChild(aRM[aA].button)
}

function a0l() {
	aRQ() ? (aRR(), pi !== i.df && aRS()) : a0i()
}

function aRS() {
	ph(), pj(a5.pZ[pi]), pj(a5.pa[pi]), ip.x1(ip.oY) && pj(a5.pb[pi]), pl(a5.pT[pi]), pn(a5.pa[pi]), pn(a5.pb[pi]), po(), ps()
}

function aRR() {
	a0Z = !0, gD.aAL(pO, a0R, a0S), gD.aAM(pO, a0R), a5.a6[pO] += pL, pK(), aRT()
}

function aRQ() {
	return (pi === i.df ? aRU : aRV)()
}

function aRV() {
	var aRW = pL * i.wH,
		aRX = aRY(),
		aRZ = aRa(),
		aRX = aRW + 2 * aRX + aRZ,
		aRc = a0U * pL;
	return aRX < aRc ? (a0S -= aRX, cZ.a0q(pO, aRX, 13), aRd(aRX - aRW, aRZ), !0) : a0T && 0 === aRZ ? (a0S -= aRc, aRc += v.fX.a0n(pO, aRX - aRc + 1), cZ.a0q(pO, aRc, 13), aRd(aRc - aRW, 0), !0) : (a0S -= aRc, cZ.a0q(pO, aRc, 13), aRd(aRc - aRW,
		aRZ), !1)
}

function aRd(aRc, aRZ) {
	if (0 < aRZ) {
		if (aRc <= aRZ) return cZ.a0q(pi, aRc, 13), void gD.aAA(pi, pO, aRZ - aRc);
		gD.aAA(pi, pO, 0), aRc -= aRZ
	}
	aRc = bO.bP(aRc, 2), aRc = Math.min(a5.s9[pi], aRc), cZ.a0q(pi, aRc, 13), a5.s9[pi] -= aRc
}

function aRa() {
	return gD.aA9(pi, pO)
}

function aRY() {
	return bO.bP(pL * a5.s9[pi], 1 + bO.bP(10 * a5.a6[pi], 16))
}

function aRU() {
	var aRe = pL * i.wH;
	return a0S -= aRe, cZ.a0q(pO, aRe, 13), !0
}

function aRT() {
	for (var aA = pL - 1; 0 <= aA; aA--) a5.pT[pO].push(pM[aA]), a5.pZ[pO].push(pM[aA]), mr.pr(pM[aA], pO)
}

function a7z() {
	this.h2 = 0, this.gap = 0, this.mX = 0, this.a4c = 0, this.h = function() {
		this.resize()
	}, this.resize = function() {
		this.h2 = .0022 * v.w.a0P(.5) * r.s, this.mX = this.h2 / r.f8, this.gap = Math.max(Math.floor((n.o.p() ? .0114 : .01296) * r.s), 2), this.a4c = this.gap / r.f8
	}
}

function a7C() {
	var r9, aRf, qH, an, vH;

	function aRh(aA) {
		var aRi = !0,
			ku = t.u,
			d = (r9[aA].gH === i.df ? r9[aA].f.fillStyle = t.a3K : (mr.ul(r9[aA].gH), r9[aA].f.fillStyle = v.color.a39(aK.xj[0], aK.xj[1], aK.xj[2], .87), 400 < v.cj.dO(aK.xj, 0, 2) && (aRi = !1, ku = t.kb)), r9[aA].canvas.width),
			e = (r9[aA].f.clearRect(0, 0, d, an), r9[aA].f.fillRect(0, 0, d, an), r9[aA].f.fillStyle = ku, ! function(f, d, an) {
				f.fillRect(0, 0, d, 1), f.fillRect(0, an - 1, d, 1), f.fillRect(0, 0, 1, an), f.fillRect(d - 1, 0, 1, an)
			}(r9[aA].f, d, an), aRf + 2 * an < d && (r9[aA].f.fillRect(d - aRf - an, 0, 1, an), r9[aA].f.fillText(a5.r3[r9[aA].gH], Math.floor((d - aRf) / 2), Math.floor(.57 * an))), 0 !== r9[aA].id ? 0 : an);
		r9[aA].f.fillText(v.dh.e6(r9[aA].r6), Math.floor(d - aRf / 2 - e), Math.floor(.57 * an)),
			function(aA, d, e, aRi) {
				r9[aA].f.fillStyle = aRi ? t.a3B : t.k7;
				aRi = Math.floor(aRf * r9[aA].r6 / r9[aA].aRn);
				r9[aA].f.fillRect(Math.floor(d - aRf - e), an - vH, aRi, vH)
			}(aA, d, e, aRi), 0 === r9[aA].id ? (aRl(aA, d, aRi, ku), function(aA, d, aRi) {
				r9[aA].f.strokeStyle = aRi ? t.a3O : t.a3V, r9[aA].f.fillRect(an, 0, 1, an);
				aRi = d - an;
				r9[aA].f.beginPath(), r9[aA].f.moveTo(Math.floor(.3 * an + aRi), Math.floor(an / 2)), r9[aA].f.lineTo(Math.floor(an - .3 * an + 0 + aRi), Math.floor(an / 2)), r9[aA].f.stroke(), r9[aA].f.beginPath(), r9[aA].f.moveTo(Math.floor(
					an / 2 + aRi), Math.floor(.3 * an)), r9[aA].f.lineTo(Math.floor(an / 2 + aRi), Math.floor(an - .3 * an + 0)), r9[aA].f.stroke()
			}(aA, d, aRi)) : aRl(aA, 2 * an, aRi, ku)
	}

	function aRl(aA, d, aRi, ku) {
		r9[aA].f.strokeStyle = r9[aA].aRo ? t.a3I : aRi ? t.vF : t.a3Z, r9[aA].f.fillStyle = ku, r9[aA].f.fillRect(d - an, 0, 1, an), r9[aA].f.lineWidth = Math.max(Math.floor(an / 12), 3), r9[aA].f.lineCap = "round";
		aRi = .35;
		d = an + 1, r9[aA].f.beginPath(), r9[aA].f.moveTo(Math.floor(d - aRi * an + 0), Math.floor(aRi * an)), r9[aA].f.lineTo(Math.floor(d - an + aRi * an), Math.floor(an - aRi * an + 0)), r9[aA].f.stroke(), r9[aA].f.beginPath(), r9[aA].f.moveTo(
			Math.floor(d - an + aRi * an), Math.floor(aRi * an)), r9[aA].f.lineTo(Math.floor(d - aRi * an + 0), Math.floor(an - aRi * an + 0)), r9[aA].f.stroke()
	}

	function aRy(aH) {
		for (var r6, aA = aH - 1; 0 <= aA; aA--) r6 = gD.a0f(i.gC, aA), r9[aA].r6 !== r6 && (r9[aA].r6 = r6, r9[aA].aRn = r6 > r9[aA].aRn ? r6 : r9[aA].aRn, r9[aA].qN = !0)
	}

	function aRg(a4e) {
		a4e.canvas = document.createElement("canvas"), ip.om.font = qH;
		var d = aRf;
		a4e.gH < i.df && 0 === a4e.id && (d += Math.floor(ip.om.measureText(a5.r3[a4e.gH] + "000").width)), d += an, 0 === a4e.id && (d += an), a4e.canvas.width = d, a4e.canvas.height = an, a4e.f = a4e.canvas.getContext("2d", {
			alpha: !0
		}), a4e.f.font = qH, v.w.textBaseline(a4e.f, 1), v.w.textAlign(a4e.f, 1)
	}

	function aRu(aA) {
		return vY.vb() ? r.d - r9[aA].canvas.width - ak.gap : vY.bF
	}

	function aRv(aA) {
		return Math.floor(2 * ak.gap + (vY.vb() ? c0.an + ak.gap : 0) + vY.an + aA * (1.3 * an))
	}
	this.h = function() {
		r9 = [], this.resize()
	}, this.resize = function() {
		qH = hu.qH, an = hu.fontSize + 5, an = Math.floor(1.25 * an), n.o.p() && (an = Math.floor(1.25 * an)), vH = Math.floor(.15 * an), ip.om.font = qH, aRf = Math.floor(ip.om.measureText("02 000 000 0000").width);
		for (var aA = r9.length - 1; 0 <= aA; aA--) aRg(r9[aA]), aRh(aA)
	}, this.c5 = function() {
		for (var aA = r9.length - 1; 0 <= aA; aA--) r9[aA].qN && (r9[aA].qN = !1, aRh(aA))
	}, this.hS = function(hT, hU) {
		if (2 !== i.bw && 0 !== a5.gB[i.gC] && !i.i0 && !v.fX.fY(i.gC))
			for (var aRp, aRq, aRr, aRs = n.o.p() ? an : 0, aRt = n.o.p() ? Math.floor(.15 * an) : 0, aA = r9.length - 1; 0 <= aA; aA--)
				if (aRp = aRu(aA), aRq = aRv(aA), aRr = r9[aA].canvas.width, aRq - aRt <= hU && hU <= aRq + an + aRt) {
					if (aRp - aRs <= hT && hT <= aRp + an + aRs) return r9[aA].aRo || (r9[aA].qN = !0, r9[aA].aRo = !0, 0 === r9[aA].id && bx.gL.aIO(r9[aA].gH)), !0;
					if (0 === r9[aA].id && aRp + aRr - an - aRs <= hT && hT <= aRp + aRr + aRs) return wY.p4(3), bx.gL.gM(qX.qa(), r9[aA].gH), !0
				} return !1
	}, this.a9 = function() {
		var aH;
		0 === a5.gB[i.gC] || v.fX.fY(i.gC) && !i.i0 || (function(aH) {
			if (r9.length !== aH) return 1;
			for (var aA = aH - 1; 0 <= aA; aA--)
				if (r9[aA].id !== gD.pw(i.gC, aA) || r9[aA].gH !== gD.px(i.gC, aA)) return 1;
			return
		}(aH = gD.gF(i.gC)) && function(aH) {
			var aA, id, gH, cq, r6, rP = [];
			loop: for (aA = 0; aA < aH; aA++) {
				for (id = gD.pw(i.gC, aA), gH = gD.px(i.gC, aA), cq = 0; cq < r9.length; cq++)
					if (r9[cq].id === id && r9[cq].gH === gH) {
						rP.push(r9.splice(cq, 1)[0]);
						continue loop
					} r6 = gD.a0f(i.gC, aA), aRg(r6 = {
					gH: gH,
					r6: r6,
					aRn: r6,
					id: id,
					qN: !0,
					aRo: !1,
					canvas: null,
					f: null
				}), rP.push(r6)
			}
			r9 = rP
		}(aH), aRy(aH))
	}, this.aS0 = function(aL) {
		for (var aH = Math.min(r9.length, gD.gF(i.gC)), aA = 0; aA < aH; aA++)
			if (r9[aA].gH === aL) return void(r9 = [])
	}, this.ai = function() {
		if (0 !== a5.gB[i.gC] && (!v.fX.fY(i.gC) || i.i0))
			for (var aA = r9.length - 1; 0 <= aA; aA--) aj.drawImage(r9[aA].canvas, aRu(aA), aRv(aA))
	}
}

function a78() {
	var aS1, aS2, aS3;

	function aS5(sK) {
		for (var aA = aS1 - 1; 0 <= aA; aA--) 0 === aS3[aS2[aA]] && a5.a6[aS2[aA]] >= sK && a0a(aS2[aA])
	}

	function aS4(player) {
		var a4;
		64 === aS3[player] ? aS3[player] = 6 : (a4 = a5.a6[player], aS3[player] = a4 < 1e3 ? 3 : a4 < 1e4 ? 2 : a4 < 6e4 ? 1 : 0)
	}
	this.h = function() {
		aS1 = 0, aS2 = new Uint16Array(i.df), aS3 = new Uint8Array(i.df)
	}, this.a9 = function() {
		for (var aA = aS1 - 1; 0 <= aA; aA--) 64 === aS3[aS2[aA]] ? aS4(aS2[aA]) : 0 == aS3[aS2[aA]]-- && (aS4(aS2[aA]), a0a(aS2[aA]));
		16e4 <= a5.a6[a7[0]] && (aS5(16e4), 3e5 <= a5.a6[a7[0]]) && aS5(3e5), v.fX.pz(i.gC) && (cZ.a5H[7] = Math.max(a5.a6[i.gC], cZ.a5H[7]))
	}, this.a0o = function(player) {
		for (var ee, aA = aS1 - 1; 0 <= aA; aA--)
			if (player === aS2[aA]) {
				for (aS1--, ee = aA; ee < aS1; ee++) aS2[ee] = aS2[ee + 1];
				return
			}
	}, this.aGz = function(player, aS7) {
		for (var aA = aS1 - 1; 0 <= aA; aA--)
			if (player === aS2[aA]) return;
		aS2[aS1++] = player, aS3[player] = aS7 ? 2 : 64
	}
}

function a7X() {
	var aR, sn = !1,
		aS8 = !1,
		aS9 = -1e4,
		aSA = -1,
		aSB = 0;

	function resize(aSF) {
		aR = 0, k9.nn() && (aSD(aSF) || sn) && (sn = !1, ak.resize(), a70.a8P.resize(), a18.h(), o5.h(), tp.resize(), o4.resize(), ca.resize(), d2.resize(), 1 <= i.bw ? (hx.resize(!1), vY.resize(), c0.resize(), qh.resize(), qX.resize(), hu.resize(),
			mI.resize(), hy.resize(), hn.resize(), tM.resize(), qI.resize(), kS.resize(), cY.resize(), c3.resize(), hs.resize(), vr.resize(), qh.a61()) : (d0.aSG(), d0.aSH()), bl.c8 = !0)
	}

	function aSC(ah) {
		return ah && 128 < ah ? Math.floor(ah) : 128
	}

	function aSD(aSF) {
		var d, an, aSJ, e, iE;
		if (!(0 < r.tZ)) return e = aSC(document.documentElement.clientWidth), iE = aSC(window.visualViewport && 2 !== n.id ? window.visualViewport.height : document.documentElement.clientHeight), d = e, an = iE, aSJ = 0 !== n.id || d < an ? 700 :
			1200, aSJ = Math.min(aSJ / ((d + an) / 2), 1), aSJ = 0 === ce.cf.data[1].value ? 2 * aSJ / 3 : Math.min(aSJ + (ce.cf.data[1].value - 1) * (1 - aSJ) / 2, 1), r.f8 = (window.devicePixelRatio || 1) * aSJ, __fx.hoveringTooltip
			.canvasPixelScale = r.f8, aSF && !aS8 ? (aS8 = !0, document.body.removeChild(t1)) : aS8 && (aS8 = !1, document.body.appendChild(t1)), d = Math.floor(.5 + e * r.f8), an = Math.floor(.5 + iE * r.f8), d !== r.d || an !== r.an ? (r.d = d,
				r.an = an, r.min = aSL(d, an), r.max = ra(d, an), r.s = bO.bP(d + an, 2), r.aAa = d / an, t1.width = d, t1.height = an, t1.style.width = e + "px", t1.style.height = iE + "px", aSA = bl.bk + 1e3, 1) : void 0
	}
	this.d = 0, this.an = 0, this.min = 0, this.max = 0, this.s = 0, this.aAa = 1, this.f8 = 1, this.tZ = 0, this.cW = function() {
		this.d = aSC(document.documentElement.clientWidth) + 2, this.an = aSC(document.documentElement.clientHeight) + 2
	}, this.h = function() {
		aR = 1, t1 = document.getElementById("canvasA"), (aj = t1.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSD(0)
	}, this.a9 = function() {
		50 <= ++aR && resize(0), -1 === aSA || bl.bk < aSA || (aSA = -1, 2e3 * ++aSB >= bl.bk + 8e3 ? console.log("error 3748") : n.o.setState(15))
	}, this.a8B = function(bN) {
		sn = !0, resize(bN)
	}, this.to = function() {
		aS9 + 1e3 > bl.bk || (aS9 = bl.bk, resize(0))
	}
}

function a77() {
	this.e5 = new aSM, this.ji = new aSN, this.iT = new aNo, this.h = function() {
		this.e5.h()
	}
}

function aSO() {
	this.aOH = function() {
		ce.d4.aBL(), ce.cx.cy(105, e4.e5.z2(e4.e5.z3(5))), ce.cx.cy(106, e4.e5.z2(e4.e5.z3(8))), ce.cx.cy(109, jX.jb(30)), ce.cx.cy(108, ce.cf.data[109].value), ce.cx.cy(111, ce.cf.data[109].value + 1), ce.cx.cy(107, 0), ce.cx.cy(110, "")
	}, this.aOI = function() {
		var data;
		jX.size < iJ.jY(29) ? ct.d4.jZ(0, 3254) : ((data = {
			a4z: jX.jb(30),
			aSP: jX.jb(16),
			aSQ: jX.jb(30),
			aSR: jX.jb(30),
			aSS: jX.jb(30),
			w3: jX.je(32),
			username: jc.iT.jd(5),
			aST: jc.iT.jd(3),
			aSU: jc.iT.jd(3),
			aSV: jX.je(32),
			aSW: jX.je(32),
			aSX: jX.jb(30),
			aSY: jX.je(32),
			aSZ: jX.je(32),
			aSa: jX.je(32),
			aSb: jX.je(32),
			aSc: jX.je(32),
			aSd: jX.je(30),
			aSe: jX.je(32),
			aSf: jc.iT.jd(3),
			aSg: jX.je(2),
			aSh: jX.je(10),
			aSi: jc.iT.jd(8),
			aSj: jX.je(5),
			aSk: jX.jb(30),
			aSl: jX.jb(30),
			a4J: jX.je(32),
			aSm: jX.jb(1),
			aSn: jX.jb(1)
		}).aSm && (data.aSo = jX.je(32), data.aSp = jX.jb(30), data.aSq = jX.jb(30), data.aSr = jX.jb(1)), 8 === d2.d3 && (25 === d2.jf().yf ? (data.aSs = !0, d2.d4.z1 = data, d2.jf().jg(25, !1)) : (data.aSs = !1, ce.cx.cy(160, +(data
			.aSm && data.aSr)), data.e7 = ce.cf.data[105].value, d2.d4.aJ7 = data, ce.cx.aSt(data), d2.jf().jg(16, !0))))
	}
}

function aHk() {
	var dZ = aSu(ip.oY);
	dZ && aSv(dZ[0], dZ[1], dZ[2], dZ[3], dZ[4])
}

function aSu(oY) {
	return 2 === oY ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === oY ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === oY ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === oY ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === oY ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aSv(aSw, aSx, aSy, aSz, aT0) {
	for (var bF, bG, zV, zX, qo, aT3, lL = aSw.length - 1, aT1 = ip.mg + ip.mj, aH = (aT1 *= aT1, aSy.length), aT2 = Array(aH), aA = aH - 1; 0 <= aA; aA--) aT2[aA] = aSy[aA] * aSy[aA];
	var aT4 = new Array(aH),
		hK = new Array(aH),
		aT5 = new Array(aH),
		ah = oW.b6();
	if (void 0 === aT0)
		for (aT0 = new Array(aH), aA = aH - 1; 0 <= aA; aA--) aT0[aA] = 0;
	for (aA = 1; aA < aH; aA++) aT4[aA] = aT2[aA] - aT2[aA - 1], hK[aA] = aSz[aA] - aSz[aA - 1], aT5[aA] = aT0[aA] - aT0[aA - 1];
	for (bF = ip.mg - 1; 0 <= bF; bF--)
		for (bG = ip.mj - 1; 0 <= bG; bG--) {
			for (zV = aT1, aA = lL; 0 <= aA; aA--) zV = (zX = (bF - aSw[aA]) * (bF - aSw[aA]) + (bG - aSx[aA]) * (bG - aSx[aA])) < zV ? zX : zV;
			for (qo = aSz[aH - 1], aT3 = aT0[aH - 1], aA = 1; aA < aH; aA++)
				if (zV < aT2[aA]) {
					qo = aSz[aA - 1] + xk((zV - aT2[aA - 1]) * hK[aA], aT4[aA]), aT3 = aT0[aA - 1] + xk((zV - aT2[aA - 1]) * aT5[aA], aT4[aA]);
					break
				} aT6(ip.mg * bG + bF, qo, aT3, ah)
		}
}

function aT6(bm, qo, aT3, ah) {
	qo < 500 ? ah[bm] = bO.bP(ah[bm] * qo * 2, 1e3) : 500 < qo && (ah[bm] += bO.bP(2 * (1e4 - ah[bm]) * (qo - 500), 1e3)), ah[bm] += bO.bP(aT3 * (10 * qo - ah[bm]), 1e3)
}

function a7I() {
	var jq, aT7, d, an, iE, aT8, aT9, a8Q, canvas, a5S, aTA;

	function rc() {
		return Math.floor((r.d - d) / 2) < qX.an + 2 * ak.gap ? r.an - an - 4 * ak.gap - qX.an : r.an - an - 2 * ak.gap
	}
	this.h = function() {
		aTA = jq = !1, iE = .61, aT8 = .07, aT9 = .09, a5S = a8Q = an = 0
	}, this.resize = function() {
		var f, jr, aR, aTE, aTF, a2t;
		jq && (d = aSL(d = n.o.p() ? Math.floor(.69 * r.s) : Math.floor(.5 * r.s), ra(r.d - 2 * ak.gap, 10)), d = aSL(d, Math.floor(3.57 * ra(r.an - 2 * ak.gap, 3))), an = Math.floor(.28 * d), (canvas = document.createElement("canvas")).width =
			d, canvas.height = an, f = canvas.getContext("2d", {
				alpha: !0
			}), jr = Math.floor(1 + an / 40), f.clearRect(0, 0, d, an), f.fillStyle = t.ac, f.fillRect(jr, jr, d - 2 * jr, an - 2 * jr), f.lineJoin = "bevel", f.lineWidth = 2 * jr, f.strokeStyle = t.u, f.strokeRect(jr, jr, d - 2 * jr, an -
				2 * jr), f.imageSmoothingEnabled = !1, aR = k9.get(aT7), aTE = aR.width, a2t = (1 === aT7 ? .85 : 21 === aT7 ? .666 : .9) * iE * an / (aTF = aR.height), f.setTransform(a2t, 0, 0, a2t, Math.floor((d - a2t * aTE) / 2), Math
				.floor((an - a2t * aTF) / 2)), f.drawImage(aR, 0, 0), f.setTransform(1, 0, 0, 1, Math.floor(d - aT9 * an - aT8 * an - jr), Math.floor(jr + aT8 * an)),
			function(f, aH) {
				f.lineWidth = Math.floor(1 + an / 80), f.strokeStyle = t.u, f.beginPath(), f.moveTo(0, 0), f.lineTo(aH, aH), f.moveTo(0, aH), f.lineTo(aH, 0), f.stroke()
			}(f, Math.floor(aT9 * an)), f.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(ah, aTC, aF5, aTD) {
		jq || aTD && aTA || (aT7 = aF5 ? 21 : ah ? 1 : 2, jq = aTA = !0, this.resize(), kS.dj(), qX.qe(), a5S = bl.bk, a8Q = aTC ? 1 : 0)
	}, this.a9 = function() {
		!jq || 1 <= a8Q || (a8Q = 1 < (a8Q += 5e-4 * (bl.bk - a5S)) ? 1 : a8Q, a5S = bl.bk, bl.c8 = !0)
	}, this.hS = function(bF, bG) {
		return !(!jq || a8Q <= 0 || (bF -= Math.floor((r.d - d) / 2), bG -= rc(), bF < 0) || bG < 0 || d < bF || an < bG || (d - an / 3 < bF && bG < an / 3 && (jq = !1, bl.c8 = !0), 0))
	}, this.ai = function() {
		!jq || a8Q <= 0 || (aj.globalAlpha = a8Q, aj.drawImage(canvas, Math.floor((r.d - d) / 2), rc()), aj.globalAlpha = 1)
	}
}

function aIS() {
	var aTH, aTI, aTJ, bo, aTK, bm = 0,
		bk = bl.bk;

	function aTN() {
		! function() {
			if (!i.bu) return;
			if (i.kq) return;
			if (2 !== i.bw)
				if (aTK % 7 != 0) aTK++;
				else if (bo === i.c1) {
				if (!aTQ()) return;
				c0.bv(bo), i.c2.a9()
			} else {
				if (!aTQ()) return;
				aTK++, bo++, c3.c4(), c3.c5(!0)
			}
			return 1
		}() && aTQ() && cI()
	}

	function aTO() {
		bm = 0, (i.bu ? (bl.c8 = c0.bv(bo - (aTK % 7 == 0 ? 0 : 1) + aTK % 7 / 7) || bl.c8, c9) : mI.mJ || !hy.wv ? c9 : (bl.c8 = !0, cG))()
	}

	function aTQ() {
		var aA, aH, aTR = bz.ix.aGh,
			mb = bz.ix.aGi,
			a4B = bz.ix.aGj,
			aAe = bz.ix.aGk,
			aTS = bz.ix.aGl,
			aTT = bz.ix.aGm;
		if (!(aTH >= aTT.length)) {
			if (aTT = aTT[aTH], aTS[aTH]) {
				for (aH = aTI + aTT, aA = aTI; aA < aH; aA++) bx.by.aTU(aTR[aA], mb[aA], a4B[aA], aAe[aA]);
				aTI += aTT, aTH++
			} else ++aTJ >= aTT && (aTH++, aTJ = 0);
			return 1
		}
		hu.s2("Replay file smaller than expected."), hy.tl(!1), i.bw = 2
	}
	this.bn = 0, this.h = function() {
		aTK = bo = aTJ = aTI = aTH = 0
	}, this.a9 = function() {
		var aPX;
		r.a9(), hy.aQh() < 1.7 ? 0 === bm ? bl.bk >= bk && (aPX = bl.cA / hy.aQh(), bk += aPX * Math.floor(1 + (bl.bk - bk) / aPX), 2 === i.bw || mI.mJ || !hy.wv ? cB() : (aTN(), c6.c7()), bm++) : aTO() : function() {
			var aPX;
			if (bl.bk >= bk)
				if (2 === i.bw || mI.mJ || !hy.wv) cB(), bk = bl.bk;
				else {
					for (aPX = bl.cA / hy.aQh(), 16 < (bl.bk - bk) / aPX && (bk = bl.bk - 16 * aPX); bl.bk >= bk && 2 !== i.bw;) bk += aPX, aTN();
					c6.c7()
				} aTO()
		}(), cE(), bl.c8 && (bl.c8 = !1, cF())
	}, this.i2 = function() {
		bz.ix.aGm.length - aTH <= 2 || hu.s2("Replay file larger than expected.")
	}
}

function et() {
	this.h = function() {
		this.fe = 0, this.a4H = [], this.a4Q = 0, this.a4G = 0
	}, this.gG = function() {
		var qk;
		i.kq || (qk = this, 2 === i.hk ? qk.a4H = hr.eu.aL4() : i.j ? qk.a4H = hr.eu.aL6() : qk.a4H = hr.eu.aL7(), qk.fe = zb.zc.fS(), qk.a4Q = Math.max(1, hr.eu.aL8(qk.a4H)), bx.fX.aDw(), 8 === i.ko ? hr.result.a4G = 0 : qk.a4G = 100 * hr.result
			.fe * (1 + i.rM))
	}
}

function a8H() {
	this.aTX = 32, this.bF = 0, this.bG = 0, this.aTY = 0, this.aTZ = 0, this.aTa = 4, this.oS = null, this.aPY = new Int16Array(9), this.h = function() {
		this.aTY = 1 + bO.bP(ip.mg - 1, this.aTX), this.aTZ = 1 + bO.bP(ip.mj - 1, this.aTX), this.oS = new Array(this.aTY * this.aTZ), v.cj.aLy(this.oS);
		var bF, bG, aPY = this.aPY,
			d = this.aTY;
		for (bF = -1; bF <= 1; bF++)
			for (bG = -1; bG <= 1; bG++) aPY[3 * (1 + bG) + 1 + bF] = bG * d + bF
	}, this.aDQ = function(aTc, aA) {
		return this.oS[aA].push(aTc), this.oS[aA].length - 1
	}, this.aPQ = function(aTd, aKW, aKX) {
		var aTe, aTf, aKW = ri.aDr(aKW),
			aKX = ri.aDr(aKX);
		return aKW === aKX ? aTd : (aTe = this.oS[aKW].pop(), this.oS[aKW].length === aTd ? this.aDQ(aTe, aKX) : (aTf = this.oS[aKW][aTd], this.oS[aKW][aTd] = aTe, pI.d4.aDk[aTe] = aTd, this.aDQ(aTf, aKX)))
	}
}

function zM() {
	this.s8 = function(ef, font, maxWidth) {
		if (font && (aj.font = font), aj.measureText(ef).width <= maxWidth) return ef;
		for (var aA = ef.length - 1; 1 <= aA; aA--)
			if (ef = ef.substring(0, aA), aj.measureText(ef + "...").width <= maxWidth) return ef + "...";
		return "..."
	}
}

function a80() {
	function aTi(f6) {
		aKS(f6), d2.da(4, 5, new fG("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new dF("⬅️ " + L(1), function() {
				d2.dN()
			}), new dF("🔄 Reload", function() {
				n.o.fJ()
			}, t.rX)]))
	}

	function aTm(f6) {
		aKS(f6), d2.da(4, 5, new fG(L(377), aTl(f6), !0))
	}

	function aTl(f6) {
		var ef = " [" + f6 + "]";
		return 3249 === f6 || 1006 === f6 ? "No Internet / No Server Response" + ef : 4527 === f6 ? "Player already in lobby" + ef : 4530 === f6 ? "Lobby Timeout" + ef : 4528 === f6 ? "Lobby Kick: Another login detected." + ef : 4540 === f6 ?
			"You have been kicked." + ef : 4495 === f6 ? "Account doesn't exist." : "Unknown error" + ef
	}

	function aKS(f6) {
		aTj(f6), d2.d4.fI()
	}

	function aTj(f6) {
		var oK = d0.d1();
		6 === oK ? ct.d4.a1X(f6) : eT.tf ? (d2.fH(), eT.zF(), ct.d4.close(ct.d4.iP, 3256)) : 8 === oK && i.wn(!0)
	}
	this.fD = [], this.aTh = function(iI, f6) {
		if (this.fD.push(f6), 8 === d2.d3 && 0 === iI)
			if (4211 === f6) aTi(f6);
			else {
				if (eT.tf && 4495 === f6 && ct.d4.iP !== iI) return void d2.dN();
				if (8 !== d0.d1() && aTj(), 4480 === f6) return ce.cx.aTn(), void d2.da(4, 0, new fG(L(379), L(380), !0));
				d2.da(4, 0, new fG(L(377), aTl(f6), !0))
			}
		else {
			var oK = d0.d1();
			if (6 === oK) {
				if (4211 === f6) return void aTi(f6);
				if (4215 !== f6 && 4516 !== f6 && 4527 !== f6 && 4533 !== f6 && 4528 !== f6) return void tp.a1T(iI)
			} else {
				if (!eT.tf) return 8 === oK ? void(iI !== ct.d4.nH || i.kq || 1 !== i.bw || i.i0 || hu.s2(L(378, [f6]))) : void 0;
				if (iI !== ct.d4.iP) return
			}
			aTm(f6)
		}
	}, this.a1W = function(f6) {
		this.fD.push(f6), 8 === d0.d1() ? i.kq || 1 !== i.bw || hu.s2(L(378, [f6])) : aTm(f6)
	}, this.fF = function() {
		this.fD.push(3268), aKS(3268)
	}
}

function a7S() {
	this.d4 = new aTo, this.a55 = new aBc, this.sH = new a1o, this.a1S = new iG, this.cu = new n4, this.yt = new aMv, this.aDx = new aTp, this.yk = new aQd, this.sI = new aO9, this.aOE = new y2, this.aOF = new a2d, this.aOG = new aSO, this.aOJ =
		new jV, this.h = function() {
			this.d4.h()
		}
}

function aOZ() {
	this.aIn = 28, this.c = 0, this.aIm = null;
	var aTq = this.aIo = null;

	function aTt(iZ, aTv) {
		var bF, bG, oh, pC, jG = v.w.pB(iZ, iZ),
			ih = v.w.getContext(jG, !0),
			ic = v.w.getImageData(ih, iZ, iZ),
			pE = ic.data,
			cn = (iZ >> 1) - .5,
			aTw = .5 + cn;
		for (aTw *= aTw, bG = 0; bG < iZ; bG++)
			for (bF = 0; bF < iZ; bF++) pC = (pC = bF - cn) * pC + (pC = bG - cn) * pC, pE[oh = 4 * (bG * iZ + bF)] = aTv[0], pE[1 + oh] = aTv[1], pE[2 + oh] = aTv[2], pE[3 + oh] = (aTw - pC) * aTv[3] / aTw;
		return ih.putImageData(ic, 0, 0), jG
	}

	function pG(aA, ih, jG, iZ) {
		var highlight, bF, bG;
		0 !== a5.gB[aA] && 0 !== a5.a6[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (iZ *= 2), bF = a5.pN[aA] + a5.pQ[aA] + 1 - iZ - 2 >> 1, bG = a5.pP[aA] + a5.pR[aA] + 1 - iZ - 2 >> 1, highlight ? ih
			.drawImage(jG[i.j ? 9 === i.ko && 5 === cX.r6[aA] ? 3 : a1.aG[aA] : aA < i.fd ? 1 : 0], bF, bG, iZ, iZ) : ih.drawImage(jG[i.j ? 9 === i.ko && 5 === cX.r6[aA] ? 3 : a1.aG[aA] : aA < i.fd ? 1 : 0], bF, bG))
	}
	this.h = function() {
		var qk;
		this.c = 700,
			function(qk) {
				var iZ = qk.aIn;
				if (qk.aIo = [], aTq = [], i.j) {
					for (var aA = 0; aA <= i.k; aA++) qk.aIo.push(aTt(iZ, a1.kh[a1.a2[aA]])), aTq.push(aTt(iZ >> 1, a1.kh[a1.a2[aA]]));
					9 === i.ko && aTq.push(aTt(iZ, a1.kh[1]))
				} else qk.aIo.push(aTt(iZ, a1.kh[7])), qk.aIo.push(aTt(iZ, a1.kh[4])), aTq.push(aTt(iZ >> 1, a1.kh[7]))
			}(this),
			function(qk, aTx) {
				var aA, aIm = qk.aIm,
					ih = v.w.getContext(aIm, !0),
					aH = i.df,
					iZ = qk.aIn >> 1;
				ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0), aTx && ih.clearRect(0, 0, aIm.width, aIm.height);
				if (9 === i.ko) {
					iZ <<= 1;
					qk = lO.lP[5];
					for (aA = aH - qk; aA < aH; aA++) pG(aA, ih, aTq, iZ);
					aH -= qk, iZ >>= 1
				}
				for (aA = i.fd; aA < aH; aA++) pG(aA, ih, aTq, iZ)
			}(this, null !== (qk = this).aIm && qk.aIm.width === ip.mg - 2 && qk.aIm.height === ip.mj - 2 || (qk.aIm = v.w.pB(ip.mg - 2, ip.mj - 2), !1)), i.bu || this.aJP()
	}, this.aTu = aTt, this.aJP = function() {
		for (var aH = i.fd, iZ = this.aIn, aIo = this.aIo, ih = v.w.getContext(this.aIm, !0), aA = 0; aA < aH; aA++) pG(aA, ih, aIo, iZ)
	}
}

function aIz(b1) {
	var gQ, lx, dR;
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), lx.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(L(381), [new dF("⬅️ " + L(1), function() {
		d2.a4a(10)
	})]), lx = new dH(gQ.dI, ((dR = []).push(function() {
		var aEc, dU = new dV,
			aKJ = new jI(ce.cf.data[132], 1, function() {
				aEc.button.click()
			}),
			aKK = new jI(ce.cf.data[131], 1, function() {
				aKJ.f6.focus()
			});
		dU.dW(L(341)), dU.db(aKK), aKK.f6.style.marginBottom = "0.8em", dU.dW(L(342)), dU.db(aKJ);
		return aEc = new dF(L(340), function() {
			ym = Math.floor(aKK.f6.value), yn = Math.floor(aKJ.f6.value);
			var yn, ym = {
				aM4: Math.min(ym, yn),
				bb: Math.max(ym, yn)
			};
			d2.da(8, d2.fx(10).ly, new m2(21, {
				ja: b1.ja,
				ym: ym.aM4,
				yn: ym.bb
			}))
		}, 0, 0, 1), dU.db(new jH([aEc.button])), dU
	}()), dR.push(function() {
		var aEc, dU = new dV,
			aKJ = new jI(ce.cf.data[134], 1, function() {
				aEc.button.click()
			}),
			aKK = new jI(ce.cf.data[133], 0, function() {
				aKJ.f6.focus()
			});
		return dU.dW(1 === b1.ja ? L(382) : L(383)), dU.db(aKK), aKK.f6.style.marginBottom = "0.8em", dU.dW(L(384)), dU.db(aKJ), aEc = new dF(L(340), function() {
			var yp = aKK.f6.value.slice(0, 20),
				yq = Math.abs(Math.floor(aKJ.f6.value));
			d2.da(8, d2.fx(10).ly, new m2(22, {
				ja: b1.ja,
				yp: yp,
				yq: yq
			}))
		}, 0, 0, 1), dU.db(new jH([aEc.button])), dU
	}()), dR.push(function() {
		var aEc, dU = new dV,
			aKJ = new jI(ce.cf.data[152], 1, function() {
				aEc.button.click()
			}),
			aKK = new jI(ce.cf.data[151], 0, function() {
				aKJ.f6.focus()
			});
		return dU.dW(L(385)), dU.db(aKK), aKK.f6.style.marginBottom = "0.8em", dU.dW(L(384)), dU.db(aKJ), aEc = new dF(L(340), function() {
			var yp = aKK.f6.value.slice(0, 5),
				yq = Math.abs(Math.floor(aKJ.f6.value));
			d2.da(8, d2.fx(10).ly, new m2(28, {
				ja: b1.ja,
				yp: yp,
				yq: yq
			}))
		}, 0, 0, 1), dU.db(new jH([aEc.button])), dU
	}()), dR))
}

function a8O() {
	var jG;
	this.h = function() {
		jG = jG || wb.d4.aTu(20, a1.kh[7])
	}, this.ai = function() {
		var a5m = v8;
		if (!(5 <= a5m)) {
			var v4 = r.d,
				v5 = r.an,
				jr = v9 / a5m,
				h6 = vA / a5m,
				oC = (v4 + v9) / a5m,
				oD = (v5 + vA) / a5m,
				gn = -20 * a5m,
				aU2 = .5 * gn,
				v6 = ip.mg << 4,
				aH = pI.d4.v3,
				uy = pI.d4.uy,
				aU3 = jG,
				ih = aj;
			3 < a5m && (ih.globalAlpha = .5 * (5 - a5m));
			for (var aA = 0; aA < aH; aA++) {
				var lL = uy[aA],
					bF = v4 * (lL % v6 / 16 - jr) / (oC - jr) + aU2,
					lL = v5 * (Math.floor(lL / v6) / 16 - h6) / (oD - h6) + aU2;
				v4 < bF || v5 < lL || bF < gn || lL < gn || (ih.setTransform(a5m, 0, 0, a5m, bF, lL), ih.drawImage(aU3, 0, 0))
			}
			ih.globalAlpha = 1, ih.setTransform(a5m, 0, 0, a5m, 0, 0)
		}
	}
}

function aTo() {
	var aU6, aU7;
	this.a1R = 5, this.aEK = null;

	function aEG(aA) {
		return aU7[aA].a5t && aU6[aA].aEG()
	}

	function aUA(iI) {
		aU7[iI].bk = bl.bk, aU7[iI].a1q = !1
	}
	this.nH = 0, this.iP = 0, this.h = function() {
		this.aEK = new Array(this.a1R);
		this.aEK[0] = "territorial.io";
		var nV = bA.od(0);
		bA.oe(0);
		for (var aA = 1; aA < this.a1R; aA++) this.aEK[aA] = a6t.u8() + ".territorial.io";
		for (bA.oe(nV), aU6 = new Array(this.a1R), aU7 = new Array(this.a1R), aA = this.a1R - 1; 0 <= aA; aA--) aU7[aA] = {
			a5t: !1,
			bk: 0,
			a1q: !1
		};
		this.yj(0, 0)
	}, this.a2h = function(aA) {
		return aU6[aA]
	}, this.a9 = function() {
		for (var aA = this.a1R - 1; 0 <= aA; aA--) this.a0G(aA) && bl.bk > aU7[aA].bk + 15e3 && ct.sH.a1p(aA, aU7[aA].a1q);
		!this.a0G(0) && bl.bk > aU7[0].bk + 8e3 && (aU7[0].bk = bl.bk, this.yj(0, 0))
	}, this.yg = function(id) {
		return this.yj(0, id) && this.aEF(0)
	}, this.yj = function(iI, ly) {
		if (aU7[iI].a5t) {
			if (aU6[iI].aEG()) return aU6[iI].aEH(ly), aU6[iI].a0G();
			aU6[iI].dj()
		}
		return this.aU9(iI, ly), !1
	}, this.aU9 = function(iI, ly) {
		aU7[iI].a5t = !0, aUA(iI), aU6[iI] = new aE8, aU6[iI].h(iI, ly)
	}, this.aEH = function(iI, ly) {
		aEG(iI) && aU6[iI].aEH(ly)
	}, this.aEL = function(iI, ly) {
		ct.cu.n5(iI)
	}, this.aEF = function(aA) {
		return this.a0G(aA) && aU6[aA].aEF()
	}, this.a2k = function(aA) {
		aU6[aA].a2k()
	}, this.a0G = function(aA) {
		return aU7[aA].a5t && aU6[aA].a0G()
	}, this.send = function(iI, bt) {
		aUA(iI), aU6[iI].send(bt)
	}, __fx.customLobby.setSendFunction(this.send), this.tH = function(iI) {
		8 === d0.d1() && (aU7[iI].a1q = !0, ct.a55.aBd = !0)
	}, this.close = function(iI, aEI) {
		aEG(iI) && aU6[iI].close(aEI)
	}, this.jZ = function(iI, aEI) {
		fC.a1W(aEI), aEG(iI) && aU6[iI].close(aEI)
	}, this.a1X = function(aEI) {
		for (var aA = this.a1R - 1; 0 <= aA; aA--) this.close(aA, aEI)
	}, this.aUB = function(iI, aEI) {
		for (var aA = this.a1R - 1; 0 <= aA; aA--) aA !== iI && this.close(aA, aEI)
	}, this.wq = function() {
		this.close(this.nH, 3246)
	}, this.aEN = function(iI, f6) {
		aU6[iI].dj(), fC.aTh(iI, f6.code)
	}
}

function a7q() {
	this.id = 0, this.fk = 0, this.aFI = null, this.nv = null, this.aPn = null, this.aFJ = null, this.o = new aFF, this.h = function() {
		var self, fk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (fk = Android.getVersion()) < 12 || (self.fk = fk, self.id = 1, self.nv = Android),
			function(self) {
				var fk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.aPn = mwIOSdataX, self.aFJ = window.webkit.messageHandlers.iosCommandA, fk =
					self.aPn.version, self.fk = fk ? Number(fk) : 0)
			}(this),
			function(self) {
				var aFI;
				if (0 === self.id) {
					try {
						if (!(aFI = window.localStorage)) return;
						aFI.setItem("tls7", "1"), aFI.removeItem("tls7")
					} catch (error) {
						return
					}
					self.aFI = aFI
				}
			}(this)
	}
}

function a7Q() {
	var aUF, aUG, aUH, aUI, aUJ, aUK, aUL, aUM, aUN, aUO, aUP, aUQ, aUR, aUS, aUT, aUU, aUV, aUW, aUY, aUZ, aAt, aUa, aUb, aUi, aUj, aUX = null,
		aUd = 0,
		aUe = !1,
		aUf = new Float32Array(4),
		aUg = 0,
		aUh = !0,
		aNR = 400,
		aUk = 0;

	function a50() {
		aUN = Math.floor(+r.s), aUO = Math.floor(.5 * aUN)
	}

	function aUl() {
		var aA, aUq;
		for (aj.font = v.w.ae(1, 100 * aUP), aUq = 80 / Math.floor(aj.measureText(v.dh.e6(i.wD)).width), aj.font = v.w.ae(1, 100), aA = i.df - 1; 0 <= aA; aA--) aUM[aA] = 100 / Math.floor(aj.measureText(a5.r3[aA]).width), aUL[aA] = Math.min(aUq, aUM[
			aA])
	}

	function aUr(aA) {
		return !aUk || (aA = a5.s9[aA]) < 1e6 ? 1 : aA < 1e7 ? aUf[0] : aUf[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aUp(ih) {
		aUW = !1, aUV = 1, aUT = aUU = 0, aUh && (v.w.textAlign(ih, 1), v.w.textBaseline(ih, 1));
		for (var aUx, aUy, aA, aUz, fontSize, aV0, jr = v9 / v8, h6 = vA / v8, oC = (r.d + v9) / v8, oD = (r.an + vA) / v8, aV1 = 0 !== a5.gB[i.gC] && !v.fX.fY(i.gC), ee = aF.aI - 1; 0 <= ee; ee--) aA = aF.aE[ee], (fontSize = Math.floor(aUS * v8 *
			aUr(aA) * aUL[aA] * aUJ[aA])) < aUR || aUN <= fontSize || aUH[aA] + aUJ[aA] > jr && aUH[aA] < oC && aUI[aA] + aUK[aA] > h6 && aUI[aA] < oD && (aUx = Math.floor(r.d * (aUH[aA] + aUJ[aA] / 2 - jr) / (oC - jr)), aUy = Math.floor(r.an * (
			aUI[aA] + aUK[aA] / 2 - h6) / (oD - h6) - .1 * fontSize), aUz = mr.oR[aA], ih.font = v.w.ae(1 === a5.ry[aA] ? 4 : 1, fontSize), ih.fillStyle = aV2(fontSize, aUz % 2), aUk ? aV3(ih, aA, fontSize, aUx, aUy, aUz) : aV4(aA, fontSize,
			aUx, aUy, ih), aUW = !0, 0 < aAt[aA] ? function(aUx, aUy, fontSize, aA, ih) {
			0 === aFC[aA] ? kA.en.aBZ(aUZ[aA]) ? (function(aUx, aUy, fontSize, player, kJ, ih) {
				for (var ss = aUy, ig = (ih.globalAlpha = aVC(fontSize), aUr(player) * (aUk ? aUg : aUM[player])), a9z = aUx - .5 * fontSize / ig - .9 * fontSize, cq = 0; cq < 2; cq++) ih.fillText(kA.en.kW(kJ), a9z, ss), a9z = aUx +
					.5 * fontSize / ig + .9 * fontSize;
				ih.globalAlpha = 1
			}(aUx, aUy, fontSize, aA, aUZ[aA], ih), aV6(aUx, aUy, fontSize, 0, 0, ih)) : kA.en.aBb(aUZ[aA]) ? (aVF(aUx, aUy, fontSize, aUZ[aA], 0, ih), aV6(aUx, aUy, fontSize, 0, 1, ih)) : (aVF(aUx, aUy, fontSize, aUZ[aA], 1, ih), aV6(
				aUx, aUy, fontSize, 1, 0, ih)) : aVF(aUx, aUy, fontSize, aUZ[aA], 0, ih)
		}(aUx, aUy, fontSize, aA, ih) : 0 === aFC[aA] && aV6(aUx, aUy, fontSize, 0, 0, ih), aV1 && (0 < aAt[aA + i.df] || 0 < aAt[aA + 2 * i.df] || 0 < aAt[aA + 3 * i.df] || 0 < aAt[aA + 4 * i.df]) && function(aUx, aUy, fontSize, aA, ih) {
			var aR, aD = -1;
			for (aR = 4; 1 <= aR; aR--) 0 < aAt[aA + aR * i.df] && aD++;
			for (aR = 1; aR < 5; aR++) 0 < aAt[aA + aR * i.df] && (! function(aUx, aUy, fontSize, aR, aA, aVA, a4, ih) {
				var jG;
				if (1 === aR) {
					aA = aUZ[aA + i.df];
					if (!kA.en.aBa(aA)) return function(aUx, aUy, fontSize, kJ, aVA, ih) {
						ih.globalAlpha = aVC(fontSize);
						aUx -= .534 * aVA * fontSize, aVA = aUy + 1.59 * fontSize;
						ih.font = v.w.ae(0, .785 * fontSize), ih.fillText(kA.en.kW(kJ), aUx, aVA), ih.globalAlpha = 1
					}(aUx, aUy, fontSize, aA, aVA, ih);
					jG = kA.pE.jv[aA - 1024 + kA.en.kB]
				} else jG = 2 === aR ? kS.a9S()[4].canvas[+(a4 < 255)] : (3 === aR ? kS.a9S()[5] : kS.a9S()[6]).canvas[0];
				aA = kA.pE.jw, a4 = .8 * fontSize / aA, aR = aUx - .5 * a4 * aA - .534 * aVA * fontSize, aUx = aUy + 1.4 * a4 * aA;
				ih.setTransform(a4, 0, 0, a4, aR, aUx), ih.globalAlpha = aVC(fontSize), ih.drawImage(jG, 0, 0), ih.globalAlpha = 1, ih.setTransform(1, 0, 0, 1, 0, 0)
			}(aUx, aUy, fontSize, aR, aA, aD, aAt[aA + aR * i.df], ih), aD -= 2)
		}(aUx, aUy, fontSize, aA, ih), (aV0 = aUP * fontSize) < aUR || (ih.font = v.w.ae(1, aV0), aUy += Math.floor(.78 * fontSize), aUk ? aV4(aA, aV0, aUx, aUy, ih) : aV3(ih, aA, aV0, aUx, aUy, aUz)))
	}

	function aV4(aA, fontSize, bF, bG, ih) {
		var ___id = aA;
		var showName = aA < i.fd || !__fx.settings.hideBotNames;
		if (showName) ih.fillText(a5.r3[aA], bF, bG), aA < i.fd && 2 !== a5.ry[aA] || (aA = fontSize / aUM[aA], ih.fillRect(bF - .5 * aA, bG + v.w.kX * fontSize, aA, Math.max(1, .1 * fontSize)));
		aUk && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ih.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ih.fillText(__fx.utils.getDensity(___id), bF, showName ? bG + fontSize : bG)
		);
	}

	function aV3(ih, aA, fontSize, aUx, aUy, aUz) {
		var ___id = aA;
		aA = v.dh.e6(a5.s9[aA]);
		aUz >> 1 & 1 ? (ih.lineWidth = .05 * fontSize, ih.strokeStyle = aV2(fontSize, aUz % 2), ih.strokeText(aA, aUx, aUy)) : (1 < aUz && (ih.lineWidth = .12 * fontSize, ih.strokeStyle = aV2(fontSize, aUz), ih.strokeText(aA, aUx, aUy)), ih.fillText(
			aA, aUx, aUy));
		aUk || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ih.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), ih.fillText(__fx.utils.getDensity(___id), aUx, aUy + fontSize))
	}

	function aV6(aUx, aUy, fontSize, aVA, aVB, ih) {
		var a2t = .95 * fontSize / aUb,
			aUx = aUx - .5 * a2t * aUa + .8 * aVA * fontSize,
			aVA = aUy - 1.76 * a2t * aUb - (.35 - v.w.kX + .7) * aVB * fontSize;
		ih.setTransform(a2t, 0, 0, a2t, aUx, aVA), ih.globalAlpha = aVC(fontSize), ih.drawImage(k9.get(4), 0, 0), ih.globalAlpha = 1, ih.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aVF(aUx, aUy, fontSize, kJ, aVA, ih) {
		var iZ, a9z, a2t;
		ih.globalAlpha = aVC(fontSize), kA.en.aBa(kJ) ? (iZ = kA.pE.jw, ih.setTransform(a2t = 1.1 * fontSize / iZ, 0, 0, a2t, a9z = aUx - .5 * a2t * iZ - .8 * aVA * fontSize, a2t = aUy - 1.55 * a2t * iZ), ih.drawImage(kA.pE.jv[kJ - 1024 + kA.en.kB],
			0, 0), ih.setTransform(1, 0, 0, 1, 0, 0)) : (a9z = aUx - .8 * aVA * fontSize, a2t = aUy - (.35 - v.w.kX + 1) * fontSize, ih.fillText(kA.en.kW(kJ), a9z, a2t)), ih.globalAlpha = 1
	}

	function aV2(fontSize, aUz) {
		return aUO <= fontSize && fontSize < aUN ? a1.ke[aUz] + aVC(fontSize).toFixed(3) + ")" : a1.kf[aUz]
	}

	function aVC(fontSize) {
		return aUO <= fontSize && fontSize < aUN ? 1 - (fontSize - aUO) / (aUN - aUO) : 1
	}

	function aVP(ig, d) {
		return 1 + Math.floor(aUQ * ig * d)
	}

	function aVM(aA) {
		for (var left = aUH[aA], ee = aUH[aA] - a5.pN[aA] - 1; 0 <= ee; ee--)
			if (!aVQ(aA, --left, aUI[aA], aUK[aA])) {
				left++;
				break
			} var right = aUH[aA];
		for (ee = a5.pQ[aA] - aUH[aA] - aUJ[aA]; 0 <= ee; ee--)
			if (!aVQ(aA, ++right + aUJ[aA] - 1, aUI[aA], aUK[aA])) {
				right--;
				break
			} var bF = Math.floor((left + right) / 2),
			top = aUI[aA];
		for (ee = aUI[aA] - a5.pP[aA] - 1; 0 <= ee; ee--)
			if (!aVR(aA, bF, --top, aUJ[aA])) {
				top++;
				break
			} var bottom = aUI[aA];
		for (ee = a5.pR[aA] - aUI[aA] - aUK[aA]; 0 <= ee; ee--)
			if (!aVR(aA, bF, ++bottom + aUK[aA] - 1, aUJ[aA])) {
				bottom--;
				break
			} var bG = Math.floor((top + bottom) / 2);
		aVJ(aA, bF, bG, aUJ[aA], aUK[aA]) && (aUH[aA] = bF, aUI[aA] = bG)
	}

	function aVJ(player, bF, bG, d, an) {
		gl = Math.floor(.2 * d);
		for (var gl, aR = bF + d - 1; bF <= aR; aR--)
			if (!aVQ(player, aR, bG, an)) return;
		for (aR = bG + an - 1 - (gl = (gl = Math.floor(.25 * an)) < 1 ? 1 : gl); bG + gl <= aR; aR--)
			if (!aVR(player, bF, aR, d)) return;
		return 1
	}

	function aVQ(player, bF, bG, an) {
		return mr.pk(player, 4 * (bG * ip.mg + bF)) && mr.pk(player, 4 * ((bG + an - 1) * ip.mg + bF))
	}

	function aVR(player, bF, bG, d) {
		return mr.pk(player, 4 * (bG * ip.mg + bF)) && mr.pk(player, 4 * (bG * ip.mg + bF + d - 1))
	}
	this.h = function() {
		if (aUk = ce.cf.data[7].value || 8 === i.ko, aNR = 0 === (aNR = ce.cf.data[11].value) ? 280 : 1 === aNR ? 187 : 112, aUW = !1, aUS = .88, aUP = .5, aUQ = 1.8, aUR = 12 - 3 * ce.cf.data[9].value, aUG = aUF = 0, aUH = new Uint16Array(i.df),
			aUI = new Uint16Array(i.df), aUJ = new Uint16Array(i.df), aUK = new Uint16Array(i.df), aUL = new Float32Array(i.df), aUM = new Float32Array(i.df), aUZ = new Uint16Array(2 * i.df), aAt = new Uint8Array(5 * i.df), aUi = new Uint8Array(i
				.df), aUj = new Uint8Array(i.df), aUh || (aUX = aUX || document.createElement("canvas")), a50(), aUU = aUT = 0, aUV = 1, aUk) {
			var aA, aUq;
			for (aUl(), aj.font = v.w.ae(1, 100), aUq = 100 / Math.floor(aj.measureText("900 000").width), aA = i.df - 1; 0 <= aA; aA--) aUL[aA] = Math.min(aUq, 2 * aUM[aA]);
			aUg = aUq, aUf[0] = 100 / (aUq * Math.floor(aj.measureText("5 000 000").width)), aUf[1] = 100 / (aUq * Math.floor(aj.measureText("50 000 000").width)), aUf[2] = 100 / (aUq * Math.floor(aj.measureText("500 000 000").width)), aUf[3] =
				100 / (aUq * Math.floor(aj.measureText("1 000 000 000").width))
		} else aUl();
		! function() {
			var aA;
			for (aA = i.df - 1; 0 <= aA; aA--) a5.a6[aA] < 12 ? (aUH[aA] = a5.pN[aA] + 1, aUI[aA] = a5.pP[aA] + 1, aUJ[aA] = 1, aUK[aA] = 1) : (aUH[aA] = a5.pN[aA], aUI[aA] = a5.pP[aA] + 1, aUJ[aA] = 4, aUK[aA] = 2);
			if (i.bu)
				for (aA = 0; aA < i.fd; aA++) aUJ[aA] = 0;
			aUa = k9.get(4).width, aUb = k9.get(4).height
		}()
	}, this.a8m = function(aL, sg) {
		sg > 18 * a5.a6[aL] ? (aUj[aL] = 6, mr.oR[aL] = 2 + mr.oR[aL] % 2) : (aUi[aL] = 4, (mr.oR[aL] < 2 || 3 < mr.oR[aL]) && (mr.oR[aL] = 6 + mr.oR[aL] % 2))
	}, this.a8n = function(aL, sg) {
		sg > 6 * a5.a6[aL] ? (aUj[aL] = 6, mr.oR[aL] = 4 + mr.oR[aL] % 2) : (aUi[aL] = 4, (mr.oR[aL] < 4 || 5 < mr.oR[aL]) && (mr.oR[aL] = 8 + mr.oR[aL] % 2))
	}, this.resize = function() {
		a50(), aUh || aUp(aUY)
	}, this.c4 = function() {
		for (var aA = 0; aA < i.fd; aA++) a5.pQ[aA] - a5.pN[aA] != 3 || a5.pR[aA] - a5.pP[aA] != 3 ? (aUH[aA] = a5.pN[aA] + (a5.pQ[aA] !== a5.pN[aA] ? 1 : 0), aUI[aA] = a5.pP[aA], aUJ[aA] = 1, aUK[aA] = 1) : (aUH[aA] = a5.pN[aA], aUI[aA] = a5.pP[
			aA] + 1, aUJ[aA] = 4, aUK[aA] = 2)
	}, this.sZ = function(player, bm, aUs) {
		! function(player, bm, aUs) {
			player += bm * i.df;
			0 === bm ? aUZ[player] === aUs && 0 < aAt[player] ? aAt[player] = 0 : (aUZ[player] = aUs, aAt[player] = kA.en.aBZ(aUs) ? 255 : 64) : 1 === bm ? (aAt[player] = 64, aUZ[player] = aUs) : aAt[player] = aUs
		}(player, bm, aUs), 2 === i.bw && this.c5(!0)
	}, this.ai = function() {
		aUh ? aUp(aj) : aUW && (1 !== aUV ? (aj.imageSmoothingEnabled = !0, aj.setTransform(aUV, 0, 0, aUV, 0, 0), aj.drawImage(aUX, -aUT / aUV, -aUU / aUV), aj.setTransform(1, 0, 0, 1, 0, 0), aj.imageSmoothingEnabled = !1) : aj.drawImage(aUX, -
			aUT, -aUU))
	}, this.aIB = function(pC, pD) {
		aUT += pC, aUU += pD
	}, this.hW = function(pC, pD) {
		c3.aIB(pC, pD)
	}, this.zoom = function(qo, hT, hU) {
		aUV *= qo, aUT = (aUT + hT) * qo - hT, aUU = (aUU + hU) * qo - hU
	}, this.c5 = function(sn) {
		return !aUh && !(!aUe && !sn && bl.bk < aUd + (1 === aUV && 0 === aUT && 0 === aUU && (i.wu() || i.bu || 2 === i.bw) ? 1e3 : aNR) || (aUe = !1, aUd = bl.bk, aUp(aUY), 0))
	}, this.aUv = function(aA) {
		return aUr(aA) * aUL[aA]
	}, this.aUw = function(player) {
		return aUL[player]
	}, this.a9 = function() {
		bl.ff() % 10 == 9 && (aUe = i.ww() && !i.wu()), !i.wu() && 4 <= ++aUG && function() {
			var aA, ee, cq;
			for (aUG = 0, cq = 4; 1 <= cq; cq--)
				for (ee = aF.aI - 1; 0 <= ee; ee--) aA = aF.aE[ee] + cq * i.df, 0 < aAt[aA] && aAt[aA] < 255 && aAt[aA]--;
			if (2 !== i.bw)
				for (ee = aF.aI - 1; 0 <= ee; ee--) aA = aF.aE[ee], 0 < aAt[aA] && aAt[aA] < 255 && aAt[aA]--
		}();
		var aA, ee, aH = Math.floor(.1 * aF.aI);
		for (aH = (aH = aH < 8 ? 8 : aH) > aF.aI ? aF.aI : aH, aA = aUF + aH - 1; aUF <= aA; aA--) ee = aA % aF.aI, ! function(aA) {
			var ig = aUr(aA) * aUL[aA];
			0 < aUJ[aA] && aVJ(aA, aUH[aA], aUI[aA], aUJ[aA], aUK[aA]) ? ! function(aA) {
				for (var bF, bG, d, an, bM = !1, cq = 0; cq < 8; cq++) {
					if (d = aUJ[aA] + 2, an = aUK[aA] + 2, d > a5.pQ[aA] - a5.pN[aA] + 1 || an > a5.pR[aA] - a5.pP[aA] + 1) return bM;
					if (bF = aUH[aA] - 1, bG = aUI[aA] - 1, !aVJ(aA, bF, bG, d, an)) return bM;
					aUH[aA] = bF, aUI[aA] = bG, aUJ[aA] = d, aUK[aA] = an, bM = !0
				}
				return bM
			}(aA) && function(aA, ig) {
				for (var bF, bG, d, an, bM = !1, qJ = aUJ[aA], lD = 1 + Math.floor(.02 * qJ), cq = 1; cq < 5; cq++) {
					if ((d = qJ + cq * lD) > a5.pQ[aA] - a5.pN[aA] + 1) return bM;
					if ((an = aVP(ig, d)) > a5.pR[aA] - a5.pP[aA] + 1) return bM;
					bF = a5.pN[aA] + Math.floor(Math.random() * (a5.pQ[aA] - a5.pN[aA] + 2 - d)), bG = a5.pP[aA] + Math.floor(Math.random() * (a5.pR[aA] - a5.pP[aA] + 2 - an)), aVJ(aA, bF, bG, d, an) && (aUH[aA] = bF, aUI[aA] = bG, aUJ[
						aA] = d, aUK[aA] = an, bM = !0)
				}
				return bM
			}(aA, ig) && aVM(aA) : ! function(aA, ig) {
				var an, bF = aUH[aA] + 1,
					bG = aUI[aA] + 1,
					d = aUJ[aA] - 2;
				for (;;) {
					if (d < 1) {
						aUJ[aA] = 0;
						break
					}
					if (an = aVP(ig, d), aVJ(aA, bF, bG, d, an)) return aUH[aA] = bF, aUI[aA] = bG, aUJ[aA] = d, aUK[aA] = an, 1;
					bF++, bG++, d -= 2
				}
				return
			}(aA, ig) ? function(aA, ig) {
				var bF, bG, d, an, cq, lf, l8 = a5.pQ[aA] - a5.pN[aA] + 1,
					bL = Math.floor(.02 * l8);
				for (lf = -6 * (bL = bL < 1 ? 1 : bL), cq = l8; lf <= cq; cq -= bL)
					if (an = aVP(ig, d = 0 < cq ? cq : 1), bF = a5.pN[aA] + Math.floor(Math.random() * (a5.pQ[aA] - a5.pN[aA] + 2 - d)), bG = a5.pP[aA] + Math.floor(Math.random() * (a5.pR[aA] - a5.pP[aA] + 2 - an)), aVJ(aA, bF, bG, d,
						an)) return aUH[aA] = bF, aUI[aA] = bG, aUJ[aA] = d, aUK[aA] = an
			}(aA, ig) : aVM(aA)
		}(aF.aE[ee]);
		aUF = (aUF += aH) % aF.aI
	}, this.a54 = function() {
		var aA, aL, ku, kv;
		if (bl.ff() % 4 == 1)
			for (aA = aF.aI - 1; 0 <= aA; aA--) aL = aF.aE[aA], mr.oR[aL] < 2 || ((ku = Math.max(aUi[aL] - 1, 0)) === (kv = Math.max(aUj[aL] - 1, 0)) ? 0 === ku && (mr.oR[aL] %= 2) : 0 === kv && mr.oR[aL] < 6 && (mr.oR[aL] += 4), aUi[aL] = ku,
				aUj[aL] = kv)
	}, this.s0 = function(player) {
		var aA = player + 2 * i.df,
			a4 = aAt[aA];
		return 0 < a4 && (hu.hw(50, player), aAt[aA] = 0, 255 === a4)
	}, this.a9s = function(player) {
		return 255 === aAt[player + 2 * i.df]
	}
}

function a7h() {
	this.aDS = new Int16Array(4), this.aL3 = new Int16Array(4), this.h = function() {
		var aA;
		for (this.aDS[0] = -ip.mg, this.aDS[1] = 1, this.aDS[2] = ip.mg, this.aDS[3] = -1, aA = 0; aA < 4; aA++) this.aL3[aA] = 4 * this.aDS[aA]
	}, this.aKP = function(aGD, aKN) {
		var aI8 = this.rj(aKN) - this.rj(aGD),
			aKN = this.rk(aKN) - this.rk(aGD),
			aGD = aI8 >>> 31 << 1;
		return 5 + aGD + (1 - aGD) * (1 - (aKN >>> 31 << 1)) * (Math.abs(aI8) - Math.abs(aKN) >>> 31) & 3
	}, this.aKR = function(aGD, aKN, bZ) {
		return bZ % 2 == 0 ? bZ + (1 - bZ) * (1 - (this.rj(aKN) - this.rj(aGD) >>> 31 << 1)) + 4 & 3 : bZ + (2 - bZ) * (1 - (this.rk(aKN) - this.rk(aGD) >>> 31 << 1)) + 4 & 3
	}, this.aKO = function(aL, oh) {
		for (var aKN, aVT, aVV = a5.pa[aL], aH = aVV.length, d = ip.mg, aVW = this.rj(oh), aVX = this.rk(oh), xC = aVV[0] >> 2, min = this.xG(aVW, aVX, xC), aA = 1; aA < aH; aA++)(aVT = (aVT = aVW - (aKN = aVV[aA] >> 2) % d) * aVT + (aVT = aVX -
			~~((.5 + aKN) / d)) * aVT) < min && (min = aVT, xC = aKN);
		return xC
	}, this.aKU = function(player, bM) {
		return !mr.pU(bM) && player === mr.pW(bM)
	}, this.xG = function(a9f, a9h, oh) {
		return (a9f -= this.rj(oh)) * a9f + (a9h -= this.rk(oh)) * a9h
	}, this.aVY = function(qF, qG, lL) {
		qF = this.aVZ(qF) - this.aKh(lL), qG = this.aVa(qG) - this.aKj(lL);
		return Math.sqrt(qF * qF + qG * qG)
	}, this.aVb = function(aGD, aKN) {
		var pC = this.rj(aGD) - this.rj(aKN),
			aGD = this.rk(aGD) - this.rk(aKN);
		return Math.sqrt(pC * pC + aGD * aGD)
	}, this.aLe = function(aGD, aKN) {
		var pC = this.rj(aGD) - this.rj(aKN),
			aGD = this.rk(aGD) - this.rk(aKN);
		return pC * pC + aGD * aGD
	}, this.aLo = function(aVc, aVd, aVe, aVf) {
		return (aVc -= aVe) * aVc + (aVd -= aVf) * aVd
	}, this.qZ = function(aL, gI) {
		return bO.bP(gI * a5.s9[aL], 1e3)
	}, this.aVZ = function(qF) {
		return 16 * (qF + v9) / v8
	}, this.aVa = function(qG) {
		return 16 * (qG + vA) / v8
	}, this.aVg = function(gl) {
		return 16 * gl / v8
	}, this.a9g = function(qF) {
		return Math.floor((qF + v9) / v8)
	}, this.a9i = function(qG) {
		return Math.floor((qG + vA) / v8)
	}, this.a9j = function(a9f, a9h) {
		return 1 <= a9f && 1 <= a9h && a9f < ip.mg - 1 && a9h < ip.mj - 1
	}, this.rj = function(oh) {
		return oh % ip.mg
	}, this.rk = function(oh) {
		return bO.bP(oh, ip.mg)
	}, this.xJ = function(a9f, a9h) {
		return a9h * ip.mg + a9f
	}, this.aVh = function(oh) {
		return this.xI(this.rj(oh), this.rk(oh))
	}, this.xI = function(a9f, a9h) {
		return 0 < a9f && a9f < ip.mg - 1 && 0 < a9h && a9h < ip.mj - 1
	}, this.x7 = function(oh) {
		return oh << 2
	}, this.x6 = function(bM) {
		return bM >> 2
	}, this.aVi = function(oh) {
		return ip.mg * this.rk(oh) * 256 + (this.rj(oh) << 4)
	}, this.aKT = function(oh) {
		return this.aVi(oh) + 8 + (ip.mg << 7)
	}, this.a5Z = function(lL) {
		return ip.mg * (this.aKj(lL) >> 4) + (this.aKh(lL) >> 4)
	}, this.aDr = function(lL) {
		lL = this.a5Z(lL);
		return (this.rj(lL) >> 5) + pI.oS.aTY * (this.rk(lL) >> 5)
	}, this.aKh = function(lL) {
		return lL % (ip.mg << 4)
	}, this.aKj = function(lL) {
		return bO.bP(lL, ip.mg << 4)
	}, this.aKQ = function(oh, bZ) {
		return oh + this.aDS[bZ]
	}, this.aL1 = function(bM, bZ) {
		return bM + this.aL3[bZ]
	}, this.aLf = function(player) {
		return this.xJ(a5.pN[player] + a5.pQ[player] >> 1, a5.pP[player] + a5.pR[player] >> 1)
	}, this.aLV = function(player) {
		return this.xJ(bA.aLn(a5.pN[player], a5.pQ[player]), bA.aLn(a5.pP[player], a5.pR[player]))
	}
}

function dF(a9F, aVj, aRN, aVk, aVl) {
	var self, aVm = document.createElement("button");

	function a35() {
		var lG;
		p5.p6() || (lG = v.color.aIf(aRN), !1 !== aVk && 0 < lG[0] && lG[0] < 255 && lG[0] === lG[1] && lG[0] === lG[2]) || (aVm.style.backgroundColor = v.color.a36(aRN, lG[3] && lG[3] < 120 ? 150 : 50))
	}

	function aVo() {
		if (aVk) {
			var lG = v.color.aIf(aRN);
			if (lG[0] === lG[1] && lG[0] === lG[2]) return
		}
		aVj && ((lG = aVj(this)) ? 2 === lG && a35() : aVs(this))
	}

	function aVp() {
		this.style.backgroundColor = aRN
	}

	function a34() {
		aVs(this)
	}

	function aVs(gl) {
		gl.style.backgroundColor = aRN, gl.blur()
	}
	this.button = aVm, this.ch = aVj, this.a6W = aRN, this.aVn = function(aVq) {
			aVq = 1.1 - Math.min(.01 * a9F.length, .6) + .2 * aVq;
			aVm.style.fontSize = aVq.toFixed(1) + "em"
		}, this.ns = function(aR) {
			aR ? 1 === aR ? aR = t.a3L : 2 === aR && (aVk = 1, aR = t.a3L) : (aVk = 0, aR = t.mQ), this.a6W = aRN = aR, aVm.style.backgroundColor = aR
		}, self = this, aVm.innerHTML = a9F, aVm.style.color = aVl ? t.dx : t.u, aVm.style.userSelect = "none", aVm.style.outline = "none", aVm.style.overflowWrap = "break-word", self.ns(aRN), aVm.style.border = "none", aVm.style.font = "inherit",
		self.aVn(0), aVm.style.padding = "0em 0.3em", aVm.onclick = aVo, aVm.addEventListener("mouseover", a35), aVm.addEventListener("mouseout", a34), aVm.addEventListener("focus", a35), aVm.addEventListener("blur", aVp)
}

function aKA() {
	function aVz(bW, ym, yn) {
		var aW0 = bW[ym];
		bW[ym] = bW[yn], bW[yn] = aW0
	}
	this.eS = [
		[],
		[],
		[],
		[]
	], this.y8 = [0, 0, 0, 0], this.aFy = [], this.y9 = function(aVt, e7, username, eN, eP, eh, elo, color, w3, wB) {
		this.eS[aVt].push(this.aFz(e7, username, eN, eP, eh, elo, color, w3, wB)), eT.aK8 === e7 && (eT.eX = this.eS[aVt][this.eS[aVt].length - 1]), eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === aVt && 1 === eT.d4.fo[2]
	}, this.aFz = function(e7, username, eN, eP, eh, elo, color, w3, wB) {
		return {
			e7: e7,
			username: username,
			eN: eN,
			eP: eP,
			eh: eh,
			elo: elo,
			color: color,
			w3: w3,
			wB: wB
		}
	}, this.yF = function(bm, aVt, eN, eP, eh, elo, w3) {
		bm = this.eS[aVt][bm];
		bm.eN = eN, bm.eP = eP, bm.eh = eh, bm.elo = elo, bm.w3 = w3, eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === aVt && 1 === eT.d4.fo[2]
	}, this.yG = function(bm, aVt, aVu) {
		var bm = this.eS[aVt][bm],
			aVv = bm.username,
			aG3 = "Redacted " + e4.e5.e6(bm.e7, 2);
		bm.username = aVu ? "[" + v.dh.ed(aVv) + "] " + aG3 : aG3, aVv.indexOf("Redacted") < 0 && (bm.aFw = aVv, bm.aFu = 3), eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === aVt && 1 === eT.d4.fo[2]
	}, this.yD = function(bm, aVw, aVx) {
		var player = this.eS[aVw][bm];
		this.yE(bm, aVw), this.eS[aVx].push(player), eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === aVx && 1 === eT.d4.fo[2]
	}, this.yE = function(bm, aVw) {
		var eU = this.eS[aVw];
		this.aFy.push(eU[bm]), 1e3 < this.aFy.length && this.aFy.shift(), bm >= this.y8[aVw] ? eU[bm] = eU[eU.length - 1] : (this.y8[aVw]--, 2 === aVw ? (eU.splice(this.y8[aVw] + 1, 0, eU[eU.length - 1]), eU.splice(bm, 1)) : (eU[bm] = eU[this.y8[
			aVw]], eU[this.y8[aVw]] = eU[eU.length - 1])), eU.pop(), eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === aVw && 1 === eT.d4.fo[2]
	}, this.yC = function(bm, eL) {
		eT.d4.fp += 29 === d2.d3 && eT.d4.fo[0] === eL && 1 === eT.d4.fo[2];
		var eU = this.eS[eL],
			eW = eU[bm];
		if (2 === eL)
			if (bm >= this.y8[eL]) {
				for (var aVy = this.y8[eL], elo = eW.elo; aVy && elo > eU[aVy - 1].elo;) aVy--;
				eU[bm] = eU[this.y8[eL]], eU.splice(this.y8[eL]++, 1), eU.splice(aVy, 0, eW)
			} else eU.splice(this.y8[eL]--, 0, eW), eU.splice(bm, 1);
		else bm >= this.y8[eL] ? aVz(eU, this.y8[eL]++, bm) : aVz(eU, --this.y8[eL], bm)
	}, this.eR = function(e7) {
		for (var eS = this.eS, aH = eS.length, aA = 0; aA < aH; aA++)
			for (var eU = eS[aA], cn = eU.length, ee = 0; ee < cn; ee++)
				if (e7 === eU[ee].e7) return eU[ee];
		return null
	}
}

function aTp() {
	this.aDw = function() {
		for (var aH = i.fd, a4H = hr.result.a4H, cn = a4H.length, fU = (iJ.b0(17 + 16 * aH + 33 * cn), iJ.fO(1, 1), iJ.fO(4, 12), iJ.fO(10, cn), iJ.fO(1, +(2 === i.hk)), iJ.fO(1, i.wN % 2), a5.fU), aA = 0; aA < aH; aA++) iJ.fO(16, fU[aA]);
		for (var a6 = a5.a6, aA = 0; aA < cn; aA++) {
			var aL = a4H[aA];
			iJ.fO(9, aL), iJ.fO(24, a6[aL])
		}
		ct.d4.send(ct.d4.nH, iJ.bt)
	}
}

function a8J() {
	this.a9 = function() {
		for (var aW1, a8I, aDp = pI.d4.aDp, uy = pI.d4.uy, aDn = pI.d4.aDn, aA = pI.d4.v3 - 1; 0 <= aA; aA--) aW1 = uy[aA], 0 !== (a8I = aDp[aA]) && aW1 === aDn[aA] && (! function(aA, aW3, bZ) {
			var gH, player = pI.d4.sF[aA] >> 3,
				bZ = aW3 + ri.aDS[bZ] << 2,
				aA = pI.d4.sG[aA];
			if (cZ.aCe(player), mr.pU(bZ)) gH = i.df;
			else {
				if ((gH = mr.pW(bZ)) === player) return bZ = v.fX.a0p(player, aA), cZ.a0q(player, aA - bZ, 12);
				if (!pt(player, gH)) return bx.aW4.aMh(player, gH, aA)
			}
			gD.aAF(player, gH) || gD.aAG(player) ? (a5.pT[player].push(aW3 << 2), gD.rt(player, aA, gH), we.aGz(player, !0)) : cZ.a0q(player, aA, 12)
		}(aA, ri.a5Z(aW1), a8I - 1), pI.a8D.aDf(aA))
	}, this.aPB = function(player, oh, bZ, rn) {
		if (0 !== bZ) {
			var v1 = i.gC;
			if (v.fX.pH(v1) && pt(player, v1) && player !== v1 && 0 !== a5.pa[v1].length) {
				var aDR = oh + ri.aDS[--bZ] << 2;
				if (mr.pU(aDR) || pt(player, mr.pW(aDR))) {
					for (var sd = !1, aA = 0; aA < 4; aA++)
						if (aDR = oh + ri.aDS[aA] << 2, mr.pm(aDR) && !mr.pU(aDR) && mr.pW(aDR) === v1) {
							sd = !0;
							break
						} sd && (hu.sc(719, 0), hu.ro(180, L(386, [a5.r3[player]]), 719, player, t.a3Y, t.ac, -1, !0, void 0, {
						cq: 1,
						rn: rn
					}))
				}
			}
		}
	}
}

function a7P() {
	this.aF5 = function() {
		var aW7;
		return !(aF.aI < 3 || a5.a6[a7[0]] >= i.vT >> 1) && (i.j ? (aW7 = ve.a8p(), !(2 * ve.a8r(vr.a0()) >= aW7)) : function() {
			var aW7 = ve.a8p();
			if (2 * a5.s9[a7[0]] >= aW7) return !1;
			return !0
		}())
	}
}

function aSN() {
	this.jj = function(size) {
		for (var aBj = jX, bW = [], aA = 0; aA < size; aA++) bW.push(String.fromCharCode(aBj.jb(16)));
		return bW.join("")
	}, this.tw = function(ef) {
		return 20 < (ef = ef.trim()).length ? ef.substring(0, 20) : ef
	}
}

function aW9() {
	this.a9c = function(player, oh) {
		v.fX.aFB(0) && v.fX.pH(player) && ri.aVh(oh) && (bz.ix.aLl(0, player, oh), i.c2.rt(player, oh))
	}, this.gM = function(player, gI, gH) {
		v.fX.aFB(1) && v.fX.pH(player) && v.fX.aOv(player, gH) && v.fX.aDL(player, gI, 12, 0) && v.fX.aP6(player, gH) && ((gH = gD.aAF(player, aK.x9[0])) || gD.aAG(player)) && (a5.fZ[player]++, bz.ix.aLl(1, player, gI, aK.x9[0]), wX.aGt.aGr(
			player, gH)) && (v.fX.a8o(player), cZ.aCb(player, gI), wX.aGt.aGw(player))
	}, this.aIM = function(player, gI, a1x) {
		v.fX.aFB(1) && v.fX.pH(player) && i.j && v.fX.aOv(player, a1x) && v.fX.aP7(player, a1x) && v.fX.aMg(player, v.fX.qZ(player, gI), a1x) && (bz.ix.aLl(2, player, gI, a1x), ve.a8k(player, a1x))
	}, this.a9d = function(player, gI, oh) {
		v.fX.aFB(1) && v.fX.pH(player) && (0 === oh && 1 === gI ? this.te(player) : ri.aVh(oh) && pI.d4.v3 !== pI.d4.zo && pI.d4.aDJ[player] !== pI.d4.aDK && 0 !== a5.pa[player].length && v.fX.aDL(player, gI, 32, 0) && pI.a8L.aKL(player, oh) && (
			cZ.aCc(player), bz.ix.aLl(3, player, gI, oh), v.fX.a8o(player), a72.aDH.a9d(player), pI.d4.aDQ(player)))
	}, this.a9n = function(player, rn, oh) {
		v.fX.aFB(1) && v.fX.pH(player) && ri.aVh(oh) && pI.eu.vB(player, rn) && pI.a8L.aKV(oh) && (bz.ix.aLl(4, player, rn, oh), v.fX.aP4(player, 8), cZ.a0q(player, aK.a8l[1], 12), a72.aDH.a9n(player), pI.d4.a9n())
	}, this.aIO = function(player, gH) {
		v.fX.aFB(1) && v.fX.pH(player) && (gH = Math.min(gH, i.df), gD.aAF(player, gH)) && (bz.ix.aLl(5, player, gH), gD.aA6(player, gH))
	}, this.aIP = function(player, kJ) {
		(v.fX.aFB(1) || v.fX.aFB(2)) && v.fX.pH(player) && (kJ = bO.hQ(kJ, 0, 1023), bz.ix.aLl(6, player, kJ), c3.sZ(player, 0, kJ))
	}, this.aF0 = function(player, a23) {
		hn.aEz(player) && (bz.ix.aLl(7, player, a23), hn.aF8(player, a23))
	}, this.a6H = function(player) {
		(v.fX.aFB(0) || v.fX.aFB(1)) && v.fX.pH(player) && mI.a30(player) && (bz.ix.aLl(8, player), a6z.a6H(player))
	}, this.aJc = function(player) {
		bz.ix.aLl(9, player), a6z.aJc(player)
	}, this.te = function(player) {
		hn.a6I(player) && (bz.ix.aLl(3, player, 1, 0), hn.te(player))
	}, this.a9e = function(player, gI, oh, gH) {
		v.fX.aFB(1) && v.fX.pH(player) && v.fX.aOv(player, gH) && v.fX.aP6(player, gH) && ri.aVh(oh) && a6v.a9p.x8(player, oh) && (gD.aAF(player, aK.x9[0]) || gD.aAG(player)) && (bz.ix.aLl(10, player, (gI << 10) + aK.x9[0], oh), gH = v.fX.aO1(
			player, gI), a5.pT[player].push(aK.xB[0]), gD.rt(player, gH, aK.x9[0]), we.aGz(player, !0), cZ.aCd(player))
	}
}

function uC() {
	this.nB = function(ef) {
		for (var aH = ef.length, d = iJ, aA = 0; aA < aH; aA++) d.fO(16, ef.charCodeAt(aA))
	}
}

function aOf(aRM) {
	var a58 = document.createElement("div"),
		aWA = document.createElement("div"),
		mM = (this.bF = 0, this.bG = 0);

	function aWC() {
		eT.tg.dj()
	}
	this.a0z = aRM, this.show = function(bF, bG, aOu) {
		if (mM) return [0, 0];
		mM = 1, this.bF = bF, this.bG = bG,
			function(self, aOu) {
				var d = v.w.mV(.16, .7),
					an = aRM.length * d / 3,
					aWF = r.d / r.f8,
					aWG = r.an / r.f8,
					lD = Math.min(1, Math.min(aWF / d, aWG / an));
				d *= lD, an *= lD, aOu && (self.bF += v.w.mV(.03, .5)), self.bF = bO.hQ(self.bF, 0, aWF - d), self.bG = bO.hQ(self.bG, 0, aWG - an), aWA.style.left = self.bF + "px", aWA.style.top = self.bG + "px", aWA.style.width = d + "px", aWA
					.style.height = an + "px", aWA.style.font = v.w.ae(0, .34 * an / aRM.length), v.w.mU(aWA, 5);
				for (var aA = 1; aA < aRM.length; aA++) v.w.mU(aRM[aA].button, 8)
			}(this, aOu), document.body.appendChild(a58)
	}, this.dj = function() {
		mM && (mM = 0, a58.removeEventListener("click", aWC), document.body.removeChild(a58))
	};
	for (var aA = 0; aA < aRM.length; aA++) new a2S("" + (1 + aA), aRM[aA].button, 0, 1);
	a58.style.position = "fixed", a58.style.top = "0", a58.style.left = "0", a58.style.width = "100%", a58.style.height = "100%", a58.style.zIndex = "5", aWA.style.position = "absolute",
		function() {
			for (var aWD = (100 / aRM.length).toFixed(2) + "%", aA = 0; aA < aRM.length; aA++) aRM[aA].button.style.width = "100%", aRM[aA].button.style.height = aRM[aA].button.style.maxHeight = aWD, aRM[aA].button.style.padding = "0.0em 0.9em", aWA
				.appendChild(aRM[aA].button)
		}(), a58.appendChild(aWA), a58.addEventListener("click", aWC)
}

function xk(ee, cq) {
	return 0 <= ee ? bO.bP(ee, cq) : -bO.bP(-ee, cq)
}

function aHG(ah) {
	return ah * ah
}

function ra(ee, cq) {
	return cq < ee ? ee : cq
}

function aSL(ee, cq) {
	return ee < cq ? ee : cq
}

function aNm(ee, ah, cq) {
	return ah < ee ? ee : cq < ah ? cq : ah
}

function aWH(ah, aH) {
	for (var aR = bO.bP(ah + 1, 2), aA = 0; aA < aH; aA++) aR = bO.bP(aR + bO.bP(ah, aR), 2);
	return aR
}

function a8g(ah, aH) {
	return ah < 1 ? 0 : aWH(ah, aH)
}

function aMu(jr, h6, e, iE, oC, oD, a52, iF) {
	return !(jr + e <= oC || h6 + iE <= oD || oC + a52 <= jr || oD + iF <= h6)
}

function aMt(jr, h6, e, iE, oC, oD, a52, iF) {
	return jr <= oC && h6 <= oD && oC + a52 <= jr + e && oD + iF <= h6 + iE
}

function aBm(ah) {
	return Math.floor(!!ah * (1 + Math.log2(ah + .5)))
}

function aSM() {
	var aWI = new Uint8Array(78);
	this.h = function() {
		var aA;
		for (aWI[50] = 37, aA = 0; aA < 10; aA++) aWI[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) aWI[aA + 20] = aA + 11, aWI[aA + 52] = aA + 38
	}, this.aGR = function(ef) {
		return ef.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.m1 = function(ef, size) {
		if ((ef = this.aGR(ef)).length > size) return ef.substring(0, size);
		for (; ef.length < size;) ef = "-" + ef;
		return ef
	}, this.aBl = function(ef) {
		for (var a4W = aWI, aH = ef.length, bW = new Uint8Array(aH), aA = 0; aA < aH; aA++) bW[aA] = a4W[ef.charCodeAt(aA) - 45];
		return bW
	}, this.aBk = function(u7) {
		iJ.b0(6 * u7.length), this.aWJ(u7), jX.h(iJ.bt)
	}, this.aWJ = function(u7) {
		for (var aH = u7.length, d = iJ, aA = 0; aA < aH; aA++) d.fO(6, u7[aA])
	}, this.nB = function(ef) {
		this.aWJ(this.aBl(ef))
	}, this.aMz = function(ef, size) {
		this.aWJ(this.aBl(this.m1(ef, size)))
	}, this.aFx = function(ef, size) {
		for (var bW = this.aBl(this.m1(ef, size)), ah = 0, lD = 1, aA = bW.length - 1; 0 <= aA; aA--) ah += lD * bW[aA], lD *= 64;
		return ah
	}
}

function a7R() {
	this.en = new aBW, this.pE = new jp
}

function aWK() {
	this.a9 = function(bt) {
		var id, mb, lf;
		for (jX.h(bt), jX.bm += 2, lf = 8 * jX.size; jX.bm + 8 <= lf;) id = jX.jb(4), mb = jX.jb(9), 0 === id ? this.aTU(id, mb, jX.jb(22)) : 1 === id ? this.aTU(id, mb, jX.jb(10), jX.jb(10)) : 2 === id ? this.aTU(id, mb, jX.jb(10), jX.jb(9)) :
			3 === id || 4 === id ? this.aTU(id, mb, jX.jb(10), jX.jb(22)) : 5 === id || 6 === id ? this.aTU(id, mb, jX.jb(10)) : 7 === id ? this.aTU(id, mb, jX.jb(1)) : 10 === id ? this.aTU(id, mb, jX.jb(20), jX.jb(22)) : this.aTU(id, mb)
	}, this.wT = [], this.aWL = function() {
		for (var aWN = 0, aWO = 0, aWP = 0, aWQ = 0, aWR = 0, aWS = 0, aA = 0; aA < 512; aA++) aWN += a5.gB[aA], aWO += a5.a6[aA], aWP += a5.s9[aA], aWQ += pI.d4.aDJ[aA];
		aWR += pI.d4.v3, aWS += aF.aI, this.wT.push(aWP % 1073741824 * 4 + (aWN + aWO + aWQ + aWR + aWS) % 4)
	}, this.aTU = function(id, mb, a4B, aAe) {
		0 === id ? bx.aIL.a9c(mb, a4B) : 1 === id ? bx.aIL.gM(mb, a4B, aAe) : 2 === id ? bx.aIL.aIM(mb, a4B, aAe) : 3 === id ? bx.aIL.a9d(mb, a4B, aAe) : 4 === id ? bx.aIL.a9n(mb, a4B, aAe) : 5 === id ? bx.aIL.aIO(mb, a4B) : 6 === id ? bx.aIL
			.aIP(mb, a4B) : 7 === id ? bx.aIL.aF0(mb, a4B) : 8 === id ? bx.aIL.a6H(mb) : 9 === id ? bx.aIL.aJc(mb) : 10 === id && bx.aIL.a9e(mb, a4B >> 10, aAe, a4B % 1024)
	}
}

function a7y() {
	this.qT = function() {
		return n.o.p() ? 2 : 1
	}
}

function aHt() {
	this.cy = function(bm, value) {
		ce.cf.data[bm].value !== value && (ce.cf.kO(bm, value), 0 === bm ? (d2.fH(), cg.h(), d2.da(2)) : 1 === bm ? r.a8B(1) : 2 === bm ? r.a8B(0) : 5 === bm && (v.w.zQ(), r.a8B(0)))
	}, this.aFG = function() {
		for (var data = ce.cf.data, aA = 0; aA < 100; aA++) data[aA] && ce.cf.kO(aA, data[aA].iX);
		v.w.zQ(), r.a8B(1), cg.h()
	}, this.aFH = function() {
		for (var data = ce.cf.data, aA = 0; aA < data.length; aA++) data[aA] && ce.cf.cy(aA, data[aA].iX)
	}, this.aTn = function() {
		for (var cq = ce.cf, aA = 128; aA < 135; aA++) cq.kO(aA, cq.data[aA].iX)
	}, this.aSt = function(data) {
		ce.cx.cy(109, data.a4z), ce.cx.cy(107, data.aSP), ce.cx.cy(108, data.aSQ), ce.cx.cy(112, data.aSR), ce.cx.cy(111, data.aSS), ce.cx.cy(113, data.w3), ce.cx.cy(135, data.aST), ce.cx.cy(136, data.aSU), ce.cx.cy(137, data.aSV), ce.cx.cy(138,
			data.aSW), ce.cx.cy(139, data.aSX), ce.cx.cy(141, data.aSY), ce.cx.cy(142, data.aSZ), ce.cx.cy(143, data.aSa), ce.cx.cy(144, data.aSb)
	}
}

function a7t() {
	this.aJu = !1, this.xv = !1, this.aJQ = !1, this.aWT = [0, 0, 0, 0], this.c7 = function() {
		var jr, h6, oC, oD;
		this.aJQ = this.aJQ || this.xv, (this.xv || this.aJu && this.aJQ) && (jr = xw.xx[0], h6 = xw.xx[1], oC = xw.xx[2], oD = xw.xx[3], jr = jr < this.aWT[0] ? this.aWT[0] : jr, h6 = h6 < this.aWT[1] ? this.aWT[1] : h6, oC = oC > this.aWT[2] ?
			this.aWT[2] : oC, oD = oD > this.aWT[3] ? this.aWT[3] : oD, this.xv = !1, this.aJu = !1, jr === this.aWT[0] && h6 === this.aWT[1] && oC === this.aWT[2] && oD === this.aWT[3] ? this.cK() : jr <= oC && h6 <= oD && wc.putImageData(
				wd, 0, 0, jr, h6, oC - jr + 1, oD - h6 + 1))
	}, this.cK = function() {
		this.aJQ && this.aWT[2] >= this.aWT[0] && this.aWT[3] >= this.aWT[1] && wc.putImageData(wd, 0, 0, this.aWT[0], this.aWT[1], this.aWT[2] - this.aWT[0] + 1, this.aWT[3] - this.aWT[1] + 1), this.aJQ = !1
	}, this.i3 = function() {
		this.aWT[2] >= this.aWT[0] && this.aWT[3] >= this.aWT[1] && wc.putImageData(wd, 0, 0, this.aWT[0], this.aWT[1], this.aWT[2] - this.aWT[0] + 1, this.aWT[3] - this.aWT[1] + 1), this.aJQ = !1
	}, this.h = function() {
		var bF, bG;
		this.aJu = !1, this.xv = !1, this.aJQ = !1, this.aWT[0] = ip.mg, this.aWT[1] = ip.mj, this.aWT[2] = this.aWT[3] = 0;
		loop: for (bF = 1; bF < ip.mg - 1; bF++)
			for (bG = ip.mj - 2; 1 < bG; bG--)
				if (1 === md[mr.xm(bF, bG) + 2]) {
					this.aWT[0] = bF;
					break loop
				} loop: for (bG = 1; bG < ip.mj - 1; bG++)
			for (bF = ip.mg - 2; 1 < bF; bF--)
				if (1 === md[mr.xm(bF, bG) + 2]) {
					this.aWT[1] = bG;
					break loop
				} loop: for (bF = ip.mg - 2; 0 < bF; bF--)
			for (bG = ip.mj - 2; 1 < bG; bG--)
				if (1 === md[mr.xm(bF, bG) + 2]) {
					this.aWT[2] = bF;
					break loop
				} loop: for (bG = ip.mj - 2; 0 < bG; bG--)
			for (bF = ip.mg - 2; 1 < bF; bF--)
				if (1 === md[mr.xm(bF, bG) + 2]) {
					this.aWT[3] = bG;
					break loop
				}
	}
}

function a7K() {
	var aWU, canvas, kg, aWV;

	function aWa(bm, name, aWb, ef) {
		kg[bm] = name, canvas[bm] = new Image, canvas[bm].onload = function() {
			! function(bm, aWb) {
				var aWe, b1 = null;
				7 === aWb ? aWe = v.o8.aWf : 8 === aWb ? (aWe = v.o8.aWg, b1 = .1) : 3 === aWb ? (aWe = v.o8.aWh, b1 = .06) : 5 === aWb ? aWe = v.o8.aWi : 6 === aWb ? aWe = v.o8.aWj : 4 === aWb && (aWe = v.o8.aWk);
				canvas[bm] = v.o8.o9(canvas[bm], aWe, b1)
			}(bm, aWb), aWd()
		}, canvas[bm].onerror = function(f6) {
			console.error("Error loading image at index", bm, "Error:", f6), aWd()
		}, canvas[bm].src = "data:image/png;base64," + ef
	}

	function aWd() {
		aWU--, aWX()
	}

	function aWX() {
		0 === aWU && (aWU = -1, aWZ(), bl.c8 = !0, canvas[7] = aWV, canvas[8] = aWV, canvas[9] = aWV, canvas[10] = aWV, 5 === d2.d3) && d2.jf().nf.resize()
	}

	function aWZ() {
		kS.a9Q(), o5.aAf([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== n.id, 1 !== n.id, !0, !0, !0]), kA.pE = new jp, kA.pE.h(), hn.cW()
	}
	this.h = function() {
		if (void 0 === canvas) {
			aWU = 23, canvas = new Array(aWU), kg = new Array(aWU), (aWV = document.createElement("canvas")).width = 1;
			for (var aA = aWU - (aWV.height = 1); 0 <= aA; aA--) canvas[aA] = aWV;
			aWZ(), aWa(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aWa(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aWa(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aWa(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aWa(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aWa(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aWa(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(8,
					"googleplay", 3,
					"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"
					), aWa(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aWa(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aWa(14, "bestPlayer", 5,
					"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"
					), aWa(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aWa(16, "apple", 3,
					"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"
					), aWa(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aWa(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aWa(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aWa(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aWa(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aWa(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(bm) {
		return canvas[bm]
	}, this.o7 = function(name) {
		for (var aA = kg.length - 1; 0 <= aA; aA--)
			if (kg[aA] === name) return canvas[aA];
		return aWV
	}, this.nn = function() {
		return aWU <= 0
	}, this.no = function() {
		aWU = 0, aWX()
	}
}

function aHu() {
	this.h = function() {
		! function() {
			var data = ce.cf.data;
			0 === data[2].fk && (r.an > r.d || 0 !== n.id) && (data[2].value = data[2].iX = 1);
			0 === data[100].fk && (data[100].value = data[100].iX = (0 === n.id ? "Player " : 1 === n.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, ah, data = ce.cf.data,
			aH = data.length;
		for (aA = 0; aA < aH; aA++) data[aA] && data[aA].fk === ce.ch.aPl(aA, !0) && (ah = ce.ch.aPm(aA), data[aA].value = null === ah ? data[aA].iX : 2 === data[aA].type ? ah : Number(ah))
	}
}

function aWo() {
	var dA, dB, dC, dR;

	function dG() {
		dK(), 2 !== i.data.aIncomeType && (i.data.aIncomeData = null), d2.dM()[19] = null, d2.dN()
	}

	function dK() {
		2 === i.data.aIncomeType ? (v.cj.a1h(dC.dQ(), i.data.aIncomeData, 255), v.cj.max(i.data.aIncomeData) || (i.data.aIncomeType = 0)) : 1 !== i.data.aIncomeType || i.data.aIncomeValue || (i.data.aIncomeType = 0)
	}
	this.show = function() {
		dA.show(), this.resize()
	}, this.dj = function() {
		dA.dj()
	}, this.resize = function() {
		dA.resize(), dB.resize()
	}, this.dk = function(aR) {
		2 === aR && dA.dl[0].ch()
	}, dA = new dE(L(22), [new dF("⬅️ " + L(1), dG)]), dB = new dH(dA.dI, (function(dR) {
		var dU = new dV;
		dU.dW(L(2)), dU.dX(new dY({
			dZ: [L(23), L(18), L(5)],
			value: i.data.aIncomeType
		}, function(bm) {
			dK(), 2 !== bm || i.data.aIncomeData || (i.data.aIncomeData = new Uint8Array(i.df)), i.data.aIncomeType = bm, d2.da(22)
		})), dR.push(dU)
	}(dR = []), function(dR) {
		var dU;
		1 === i.data.aIncomeType && ((dU = new dV).dW("Value"), dU.db(new jI({
			bm: -1,
			value: i.data.aIncomeValue
		}, 1, 0, function(f6) {
			var value = bO.hQ(Math.floor(f6.target.value), 0, 255);
			f6.target.value = i.data.aIncomeValue = value
		})), dR.push(dU))
	}(dR), function(dR) {
		var dU;
		2 === i.data.aIncomeType && ((dU = new dV).dW("Data"), (dC = new de(0, 1, 0, 1)).dg(v.dh.di(i.data.aIncomeData, 4)), dU.db(dC), dR.push(dU))
	}(dR), dR))
}

function aKC() {
	var aWp, aWq = [],
		aWr = -1,
		aWs = 0,
		aWt = 0;

	function aWw() {
		aWs = bl.bk, (3 === this.aMF ? (aWt = 1, aWv) : (aWr = (aWq.length + aWr + 2 * this.aMF - 1) % aWq.length, aWu))()
	}

	function aWu() {
		0 !== aWq.length && (aWt = 0, aWp && aWp.zF(), (aWp = new aMD(aWw)).cy(aWr, aWq.length), aWp.show(aWq[aWr]), eT.message.resize())
	}

	function aWv() {
		aWp && aWp.zF(), (aWp = new a32(aWu)).cy(aWq.length), aWp.show(), eT.message.resize()
	}
	this.yT = function(e2) {
		var eW;
		2 === e2.id && 3 === e2.eA ? eT.w9.ei(e2.e7) : (eW = eT.w9.eE(e2, eT.w9.e1(e2)), (5 !== e2.id && 6 !== e2.id || (d2.fx(29).aR5().a2Y(eW), 5 === e2.id)) && (eW = bl.bk < aWs + 2e4, aWr !== aWq.length - 1 && eW || (aWr = aWq.length), aWq
			.push(e2), ce.cf.data[14].value || zH.play(), aWp) && (ce.cf.data[13].value || aWt && eW ? aWp.cy(aWq.length) : aWu()))
	}, this.show = function() {
		aWv()
	}, this.dj = function() {
		aWr = aWq.length - 1, aWp && aWp.zF(), aWp = null
	}, this.resize = function() {
		aWp && aWp.resize()
	}, this.em = function() {
		return aWq
	}
}

function a7J() {
	var oK = 0;
	this.h = function() {
		a18.h(), oK = 0
	}, this.setState = function(aWx) {
		oK = aWx
	}, this.d1 = function() {
		return oK
	}, this.j0 = function() {
		this.setState(8), d2.fH()
	}, this.dk = function(f6) {
		if (!ip.a43) return !1;
		if (!(bl.bk < 400)) {
			if ("Enter" === f6.key || "Escape" === f6.key) {
				if (this.aWy()) return !0;
				if ("Enter" === f6.key) {
					if (0 === oK) return !0;
					if (7 === oK) return !0
				}
			}
			return !1
		}
	}, this.aSG = function() {
		a71.resize()
	}, this.aWy = function() {
		return !!a71.dj()
	}, this.hS = function(bF, bG) {
		!ip.a43 || a71.hS(bF, bG) || 6 === oK && tp.hS(bF, bG) || o5.hS(bF, bG) || o4.hS(bF, bG)
	}, this.hW = function(bF, bG) {
		!o4.aCz && a18.hW(bF, bG, !0) || o4.hW(bF, bG)
	}, this.click = function(bF, bG) {
		o4.tU()
	}, this.qp = function(bF, bG, deltaY) {}, this.aSH = function() {
		a18.a13(), bl.c8 = !0
	}, this.ai = function() {
		8 !== oK && 10 !== oK && (aj.imageSmoothingEnabled = !0, this.aV(), 0 !== oK && (o4.ai(), ca.ai(), this.o3(), o5.ai()), 0 !== oK && 6 === oK && tp.ai(), a71.ai(), d2.ai())
	}, this.aV = function() {
		var aX0, aWz;
		if (__fx.makeMainMenuTransparent) aj.clearRect(0, 0, r.d, r.an);
		else ip.a43 ? (aWz = r.d / ip.mg, aX0 = r.an / ip.mj, aj.setTransform(aWz = aX0 < aWz ? aWz : aX0, 0, 0, aWz, Math.floor((r.d - aWz * ip.mg) / 2), Math.floor((r.an - aWz * ip.mj) / 2)), aj.drawImage(ip.iq, 0, 0), aj.setTransform(1, 0, 0,
			1, 0, 0), aj.fillStyle = t.a1b) : aj.fillStyle = t.kb, aj.fillRect(0, 0, r.d, r.an)
	}, this.o3 = function() {
		var bG = Math.floor(.3 * r.an),
			canvas = k9.o7("territorial.io"),
			ig = (ig = 1.75 * r.an / canvas.width) * canvas.width < .98 * r.d ? .98 * r.d / canvas.width : ig,
			bF = (aj.globalAlpha = .15, aj.imageSmoothingEnabled = !1, Math.floor(.5 * (r.d - ig * canvas.width))),
			bF = Math.floor(bF / ig),
			bG = Math.floor(bG - .5 * canvas.height * ig),
			bG = Math.floor(bG / ig);
		aj.setTransform(ig, 0, 0, ig, bF, bG), aj.drawImage(canvas, bF, bG), aj.setTransform(1, 0, 0, 1, 0, 0), aj.globalAlpha = 1, aj.imageSmoothingEnabled = !0
	}
}

function a7c() {
	this.gL = new aIK, this.fX = new aDv, this.aIL = new aW9, this.by = new aWK, this.aW4 = new aMe
}

function a7g() {
	function aX2(key) {
		var aMK;
		return "undefined" == typeof URLSearchParams || (aMK = window.location.search, "string" != typeof(aMK = new URLSearchParams(aMK).get(key))) || aMK.length < 1 ? null : aMK
	}
	this.n3 = function() {
		if (0 !== n.id) return !1;
		if (! function() {
				var value = aX2("account");
				if (!value && !(value = aX2("a"))) return void a6y.clear();
				return a6y.clear(), d2.da(8, d2.d3, new m2(1e3, {
					a0J: 0,
					e7: value,
					a4z: 0
				})), 1
			}()) {
			var value = aX2("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			d2.da(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aFL = new URL(window.location.href);
		aFL.search = "";
		try {
			return history.replaceState(null, "", aFL.toString()), !0
		} catch (f6) {
			console.log("error 352: " + f6)
		}
		return !1
	}, this.aX4 = function(key, value) {
		if (0 === n.id) try {
			var aFL = new URL(window.location.href),
				aL = aFL.searchParams;
			aL.set(key, value), aFL.search = aL.toString(), history.replaceState(null, "", aFL.toString())
		} catch (f6) {
			console.log("error 358: " + f6)
		}
	}
}

function a06(a0z, a2Z) {
	var hZ;
	this.resize = function() {
		for (var aA = 0; aA < a0z.length; aA++) v.w.mU(a0z[aA].button);
		hZ.style.gap = hZ.style.padding = v.w.y1(ak.a4c)
	}, (hZ = document.createElement("div")).style.display = "grid", hZ.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", hZ.style.overflowY = "auto", hZ.style.gridAutoRows = "5.3em", hZ.style.maxHeight = "100%";
	for (var aA = 0; aA < a0z.length; aA++) a0z[aA].aVn(1), hZ.appendChild(a0z[aA].button);
	a2Z.appendChild(hZ)
}

function a8C() {
	function aX7(aA, hT, hU) {
		var aX8, aW1;
		if (!(aA < 0)) return aW1 = pI.d4.uy[aA], aX8 = ri.aKh(aW1), aW1 = ri.aKj(aW1), aA = 20 * (.9 + .1 * Math.log10(pI.d4.sG[aA])), aA = Math.max(aA, ri.aVg(v.w.gy(.02, 1.7))), bO.aJJ(ri.aVZ(hT), ri.aVa(hU), aX8, aW1, aA)
	}

	function aX5(aKc) {
		var aXB = 4 + .03 * (1 + 1.5 * n.o.p()) * r.s / v8;
		return ri.aVb(aKc, aK.vD[1]) < aXB
	}
	this.a9q = function(player, aKc) {
		return !!(i.data.passableWater && ri.aVh(aKc) && pI.d4.v3 !== pI.d4.zo && pI.d4.aDJ[player] !== pI.d4.aDK && 0 !== a5.pa[player].length && pI.a8L.aKL(player, aKc) && aX5(aKc))
	}, this.aIN = function(player, rn, aKc) {
		return !!(ri.aVh(aKc) && this.vB(player, rn) && pI.a8L.aKV(aKc) && aX5(aKc))
	}, this.vB = function(player, id) {
		for (var aPC, ym = player << 3, yn = ym + pI.d4.aDJ[player], aDe = pI.d4.aDe, pJ = pI.d4.pJ, aA = ym; aA < yn; aA++)
			if (id === pJ[aPC = aDe[aA]]) return aK.vD[3] = aPC, !0;
		return !1
	}, this.a9n = function(oh) {
		var pA = pI.vC.pA;
		return !!this.vB(i.gC, pA) && (bx.gL.a9n(pA, oh), !0)
	}, this.a9o = function(hT, hU) {
		var player = i.gC,
			aH = pI.d4.aDJ[player];
		if (0 === aH) return !1;
		for (var aDe = pI.d4.aDe, uy = pI.d4.uy, ym = player << 3, aPa = 80, hH = -1, aA = ym + aH - 1; ym <= aA; aA--) {
			var aX6 = aDe[aA],
				l5 = ri.aVY(hT, hU, uy[aX6]);
			l5 < aPa && (aPa = l5, hH = aX6)
		}
		return !!aX7(hH, hT, hU) && (pI.vC.pA = pI.d4.pJ[hH], a72.aDH.a9o(), !0)
	}, this.a9w = function(hT, hU) {
		var aH = pI.d4.v3;
		if (aH < 1) return -1;
		for (var uy = pI.d4.uy, aPa = 80, hH = -1, aA = 0; aA < aH; aA++) {
			var l5 = ri.aVY(hT, hU, uy[aA]);
			l5 < aPa && (aPa = l5, hH = aA)
		}
		return aX7(hH, hT, hU) ? hH : -1
	}, this.a5Y = function(player, id) {
		for (var ym = player << 3, yn = ym + pI.d4.aDJ[player], pJ = pI.d4.pJ, aDe = pI.d4.aDe, aA = ym; aA < yn; aA++) {
			var aX6 = aDe[aA];
			if (pJ[aX6] === id) return aX6
		}
		return -1
	}, this.aAJ = function(player) {
		for (var ym = player << 3, yn = ym + pI.d4.aDJ[player], aDe = pI.d4.aDe, sG = pI.d4.sG, r6 = 0, aA = ym; aA < yn; aA++) r6 += sG[aDe[aA]];
		return r6
	}, this.a5b = function(player) {
		return 0 === pI.d4.aDJ[player] ? -1 : pI.d4.aDe[player << 3]
	}
}

function aXC() {
	var gQ, a02, a03, a05;

	function a04(aA) {
		d2.da(8, d2.d3, new m2(21, {
			ja: aA,
			ym: 0,
			yn: 10
		}))
	}
	this.show = function() {
		gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), a02.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, a03 = [new dF(L(281), function() {
		a04(5)
	}, 0, 0, 1), new dF(L(282), function() {
		a04(6)
	}, 0, 0, 1), new dF(L(283), function() {
		a04(7)
	}, 0, 0, 1), new dF(L(286), function() {
		a04(12)
	}, 0, 0, 1)], a05 = [new dF("⬅️ " + L(1), function() {
		d2.dN()
	})], gQ = new dE(L(197), a05), a02 = new a06(a03, gQ.dI)
}

function cO() {
	this.L84 = ["Player Names", "Back", "Options", "Kingdom Names", "Simple Names", "Customized", "Selectable Name", "Clan Chart", "🛠️ Options", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Player Count", "Game Mode", "Colors", "Random",
		"Bot Difficulty", "Uniform", "Mixed", "Team dependent", "Clustered", "Additional Income", "Default", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator",
		"Lead Moderator", "Head Admin", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Hint: The top 9 emojis are ordered by usage.", "Hint: Select a boat to send it to a new location.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "This is a contest!", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Index: {10}", "Coordinates: {10}",
		"Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.",
		"{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.",
		"You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.",
		"{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.",
		"{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Humans", "Players", "Bots", "Spectators",
		"Threshold", "Percentage", "Growth", "Income", "Time", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "🧈 Gold Transfer", "Source Account",
		"Target Account", "Amount", "Confirm", "Cancel", "Send", "Send gold only to trusted accounts!",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Loading", "Spawning", "Selectable Spawn", "Type your message here...", "Quit Game",
		"More", "You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!",
		"Clan {0} has won {11} points.", "You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "📜 Game Log", "🔑 My Account", "📜 Logs", "📈 Clan Charts",
		"▶️ Replay", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog",
		"Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.",
		"🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "Activated", "Next Contest: ", "Territory", "Numbers", "Statistics", "Lobby",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "second played", "seconds played", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File",
		"Preview", "Map Name", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "Replay Error", "Warning", "Loading...", "Adjust", "Selectable Color", "Top Clan", "Best Clan Member", "Top Admin",
		"Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Team {0}", "Team {0} has won the game!", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking",
		"1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter",
		"Votes", "Sender", "Receiver", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "{0} has defeated {1}!", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Ship launched!", "Ship selected!", "Ship on the way!", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "LEADERBOARD",
		"Top 100 players receive a daily gold payout.", "🔑 Show Account", "🚨 Moderation Actions", "🚩 Report User", "💬 Mention", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "1v1", "Zombie", "Chat", "Close",
		"Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "🛠️ List Options", "Clan Name Search", "Username Search",
		"Quantity", "Account Name Search", "An enemy ship belonging to {0} is heading towards your shore.", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Copy",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"If you hide Patreon, no one can share their membership with you.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote"
	]
}

function a7o() {
	this.d4 = new aJ6, this.d3 = 0;
	var aXD = new Array(31);

	function aXG() {
		for (var aH = aXD.length, aA = 0; aA < aH; aA++) aXD[aA] = null
	}
	this.h = function() {
		for (var aXE, aXF = document.body.firstChild; aXF;) {
			if (aXE = aXF.nextSibling, document.body.contains(aXF) && ("DIV" === aXF.tagName || "INPUT" === aXF.tagName || "BUTTON" === aXF.tagName)) try {
				document.body.removeChild(aXF)
			} catch (f6) {
				console.log("error 2623: " + f6)
			}
			aXF = aXE
		}
	}, this.da = function(bm, ly, b1) {
		void 0 === ly && (ly = this.d3), bl.c8 = !0, 0 === bm && (0 === d0.d1() ? bm = 5 : n.o.setState(13)), this.dj(), this.d3 === bm && (ly = aXD[bm].ly, aXD[bm] = null), this.d3 = bm;
		var cn = aXD[bm];
		if (!cn || 4 === bm || 7 === bm || 8 === bm || 9 === bm || 10 === bm || 11 === bm || 13 === bm || 15 === bm || 18 === bm || 20 <= bm && bm <= 28 || 32 === bm || 33 === bm) {
			if (0 === bm) return void aXG();
			1 === bm ? cn = new a67 : 2 === bm ? cn = new aJR : 3 === bm ? cn = new aMI : 4 === bm || 9 === bm || 10 === bm || 11 === bm || 13 === bm || 33 === bm ? cn = b1 : 5 === bm ? cn = new nZ : 6 === bm ? cn = new lw : 7 === bm ? cn =
				new aXH(d2.d4.aJ7) : 8 === bm ? cn = b1 : 12 === bm ? cn = new aPb : 14 === bm ? cn = new aKE : 15 === bm ? cn = new aXH(d2.d4.z1) : 16 === bm ? cn = new a01 : 17 === bm ? cn = new aXC : 18 === bm ? cn = new a07 : 19 === bm ? cn =
				new ij : 20 === bm ? cn = new aEQ : 21 === bm ? cn = new aHb : 22 === bm ? cn = new aWo : 23 === bm ? cn = new d9 : 24 === bm ? cn = new a1l : 25 === bm ? cn = new a1g : 26 === bm ? cn = new a6d : 27 === bm ? cn = new aRL : 28 ===
				bm ? cn = new aMH : 29 === bm ? cn = new aQt : 30 === bm && (cn = new a4Z), cn.ly = ly, aXD[bm] = cn
		}
		cn.show(b1)
	}, this.dN = function() {
		this.jq() && this.a4a(this.jf().ly)
	}, this.a4a = function(bm) {
		this.jq() && (aXD[bm] ? (this.dj(), bl.c8 = !0, this.d3 = bm, aXD[bm].show()) : this.da(bm))
	}, this.dj = function() {
		this.jq() && aXD[this.d3].dj()
	}, this.fH = function() {
		this.jq() && (aXD[this.d3].dj(), aXG(), this.d3 = 0, n.o.setState(13))
	}, this.ai = function() {
		var cn;
		this.jq() && (cn = aXD[this.d3]).ai && cn.ai()
	}, this.resize = function() {
		if (!this.jq()) return !1;
		aXD[this.d3].resize()
	}, this.hS = function(bF, bG) {
		var cn;
		this.jq() && (cn = aXD[this.d3]).hS && cn.hS(bF, bG)
	}, this.hW = function(bF, bG) {
		var cn;
		this.jq() && (cn = aXD[this.d3]).hW && cn.hW(bF, bG)
	}, this.tS = function() {
		var cn;
		this.jq() && (cn = aXD[this.d3]).tS && cn.tS()
	}, this.qp = function(hT, hU, deltaY) {
		var cn;
		this.jq() && (cn = aXD[this.d3]).qp && cn.qp(hT, hU, deltaY)
	}, this.dk = function(code) {
		var cn;
		return !!this.jq() && ((cn = aXD[this.d3]).dk && cn.dk(code), !0)
	}, this.a9 = function() {
		var cn;
		this.jq() && (cn = aXD[this.d3]) && cn.a9 && cn.a9()
	}, this.jq = function() {
		return 0 < this.d3
	}, this.jf = function() {
		return aXD[this.d3]
	}, this.fx = function(bm) {
		return aXD[bm]
	}, this.dM = function() {
		return aXD
	}
}

function aXH(data) {
	var gQ, lx;
	this.show = function() {
		data.aSs && a6y.aX4("account", data.e7), gQ.show(), this.resize()
	}, this.dj = function() {
		gQ.dj()
	}, this.resize = function() {
		gQ.resize(), lx.resize()
	}, this.dk = function(aR) {
		2 === aR && gQ.dl[0].ch()
	}, gQ = new dE(data.username, [new dF("⬅️ " + L(1), function() {
		a6y.clear(), d2.dN()
	}), new dF(data.aSs ? "🔄 " + L(387) : L(388), function() {
		d2.da(8, d2.jf().ly, new m2(25, {
			a0J: 0,
			e7: data.e7,
			a4z: data.a4z
		}))
	}, 0, 0, 1)]), lx = new dH(gQ.dI, function() {
		var dR = [];
		dR.push(function() {
				var dU = new dV,
					nd = (dU.dW(L(429)), new jI({
						value: data.username,
						bm: -1
					}));
				nd.f6.readOnly = !0, dU.db(nd), dU.db(new jH([new dF(L(402), function(f6) {
					return v.w.aHR(nd.f6), v.w.a0H(f6), !0
				}).button])), data.aSs || dU.ha(L(430));
				return dU
			}()),
			function(dR) {
				var dU, hb, cp, aXZ, aEc;
				data.aSs || ((dU = new dV).dW(L(431)), (hb = dU.ha(data.aSi.length + " / 160")).style.textAlign = "center", cp = !0, (aXZ = new de(0, 1, function(f6) {
					f6 = f6.target.value.length;
					hb.textContent = f6 + " / 160", 160 < f6 ? cp && (cp = !1, aEc.ns(1), aEc.button.style.color = t.u) : cp || (cp = !0, aEc.ns(0), aEc.button.style.color = t.dx)
				})).f6.rows = 6, aXZ.f6.style.fontSize = "1em", aXZ.dg(data.aSi), dU.db(aXZ), aEc = new dF(L(432), function() {
					if (!cp) return !0;
					d2.da(8, d2.jf().ly, new m2(29, {
						a0J: 1,
						ef: aXZ.dQ().substring(0, 160)
					}))
				}, 0, 0, 1), dU.db(new jH([aEc.button])), 0 !== data.aSg && (dU.db(new jH([new dF(L(1 === data.aSg ? 434 : 435), function() {
					d2.da(8, d2.jf().ly, new m2(29, {
						a0J: 0,
						ef: ""
					}))
				}, 0, 0, 1).button])), dU.ha(1 === data.aSg ? L(436, [data.aSj - 1]) : L(437, [data.aSj - 1]))), dU.ha(L(433, [data.aSh])), dR.push(dU))
			}(dR),
			function(dR) {
				var dU;
				data.aSs && 0 !== data.aSg && ((dU = new dV).dW(L(438)), dU.hc(data.aSi), dU.db(new jH([new dF(L(439, 0, "Report"), function(f6) {
					return ct.d4.a0G(0) && (v.w.a0H(f6), ct.yt.yu({
						a0J: 5,
						e7: data.e7
					})), !0
				}, 0, 0, 1).button])), dR.push(dU))
			}(dR), dR.push(function() {
				var dU = new dV,
					aXV = (dU.dW(L(389)), [L(390), L(391), L(392), L(393), L(394)]),
					aS = data.aSk;
				dU.he(L(395) + v.dh.lb(data.w3, .01, 2) + "<br>" + L(396) + (aS + 1) + " / " + data.aSS + "<br>" + L(397) + aXV[aS < 10 ? 0 : aS < 50 ? 1 : aS < 200 ? 2 : aS < 1e3 ? 3 : 4]), data.aSs || (dU.ha(L(398)), dU.ha(L(399)), dU
					.ha(L(400)));
				return dU
			}()), data.aSs && dR.push(function() {
				var dU = new dV,
					nd = (dU.dW(L(401)), new jI({
						value: ce.cf.data[147].value,
						bm: -1
					}, 1, void 0, function(f6) {
						ce.cx.cy(147, a0B(f6.target.value))
					})),
					a0F = (dU.db(nd), new dF(L(177), function(f6) {
						return nd.f6.readOnly && ct.d4.a0G(0) && (v.w.a0H(f6), a0D(), ct.yt.a0I({
							a0J: 0,
							e7: data.e7,
							value: parseInt(ce.cf.data[147].value, 10)
						})), !0
					}, 1)),
					aEc = new dF(L(175), function(f6) {
						return f6.textContent === L(175) ? (f6.textContent = L(176), nd.f6.readOnly = !0, a0F.ns(0), a0F.button.style.color = t.dx, ce.cx.cy(147, nd.f6.value), a0B(ce.cf.data[147].value)) : a0D(), !0
					}),
					hb = (dU.db(new jH([aEc.button])), dU.ha()),
					a0B = function(ah) {
						ah = v.fX.a0K(ah, 2, 1e6);
						var a0L = Math.max(1, 1 + Math.floor(.01 * (ah - 100)));
						hb.textContent = L(179, [ah, ce.cf.data[105].value, a0L, data.e7, ah - a0L])
					},
					a0D = function() {
						aEc.button.textContent = L(175), nd.f6.readOnly = !1, a0F.ns(1), a0F.button.style.color = t.u
					};
				return a0B(ce.cf.data[147].value), dU.db(new jH([a0F.button])), dU
			}());
		dR.push(function() {
			var dU = new dV,
				nd = (dU.dW(L(42)), new jI({
					value: data.e7,
					bm: -1
				}));
			return nd.f6.readOnly = !0, dU.db(nd), dU.db(new jH([new dF(L(402), function(f6) {
				return v.w.aHR(nd.f6), v.w.a0H(f6), !0
			}).button])), dU
		}()), data.aSs || (dR.push(function() {
			var dU = new dV,
				m5 = (dU.dW(L(43)), new jI(ce.cf.data[106]));
			return m5.f6.readOnly = !0, m5.f6.type = "password", dU.db(m5), dU.db(new jH([new dF(L(44), function(f6) {
				return f6.textContent === L(44) ? (f6.textContent = L(45), m5.f6.type = "text") : (f6.textContent = L(44), m5.f6.type = "password"), !0
			}).button, new dF(L(402), function(f6) {
				return v.w.aHR(m5.f6), v.w.a0H(f6), !0
			}).button])), dU.db(new jH([new dF(L(403), function() {
				d2.da(8, d2.jf().ly, new m2(15))
			}).button])), dU.dW(L(404), "0.8em"), dU.ha(L(405)), dU.ha(L(406)), dU.ha(L(407)), dU
		}()), dR.push(function() {
			var dU = new dV;
			return dU.dW(L(408)), dU.db(new jH([new dF(L(409), function() {
				d2.da(6, d2.jf().ly)
			}).button])), dU.db(new jH([new dF(L(410), function() {
				ce.cx.cy(105, ""), d2.da(8, d2.jf().ly, new m2(18))
			}).button])), dU.db(new jH([new dF(L(411) + ce.cf.data[105].value, function() {
				d2.da(4, 0, new fG(L(412), L(413), !0, [new dF("⬅️ " + L(1), function() {
					d2.da(7, d2.fx(7).ly)
				})]))
			}, t.uH).button])), dU
		}()), dR.push(function() {
			function aXX(bm) {
				for (var aA = 0; aA < 2; aA++) aXW[aA].ns(0 === bm ? t.a3L : 0 === aA ? t.uH : t.rX)
			}
			var hg, aXW, dU = new dV;
			dU.dW(L(414)), dU.ha(L(415)), ce.d4.aBM();
			return aXW = [new dF(L(416), function() {
				var bm = Math.min(ce.cf.data[117].value, hg.hh.length - 1);
				if (!(bm < 1)) {
					hg.hh[bm].remove(), hg.hh.splice(bm, 1);
					for (var aA = bm; aA < hg.hh.length; aA++) hg.hh[aA].name = "" + aA;
					ce.d4.yy(bm), bm = ce.cf.data[117].value, hg.hh[bm].textContent = hg.hh[bm].textContent.replace("⚪", "🟢"), aXX(bm)
				}
			}, t.a3L), new dF(L(41), function() {
				var bm = Math.min(ce.cf.data[117].value, hg.hh.length - 1);
				bm < 1 || (bm = ce.d4.yz(bm), ce.cx.cy(105, bm.e7), ce.cx.cy(106, bm.password), d2.da(8, d2.jf().ly, new m2(18)))
			}, t.a3L)], (hg = new dY(ce.cf.data[117], aXX)).hh[0].style.marginTop = "0.5em", dU.dX(hg), dU.db(new jH([aXW[1].button])), dU.db(new jH([aXW[0].button])), dU
		}()));
		return dR.push(function() {
				var dU = new dV,
					aXV = (dU.dW(L(420)), [L(421), L(422), L(423), L(424)]),
					aS = data.aSl;
				return dU.he(L(425) + (data.a4J / 100).toFixed(2) + "<br>" + L(396) + (aS + 1) + " / " + data.aSS + "<br>" + L(397) + aXV[aS < 10 ? 0 : aS < 50 ? 1 : aS < 200 ? 2 : 3]), dU
			}()), dR.push(function() {
				var dU = new dV;
				return dU.dW(L(417)), dU.he(L(418) + v.dh.lb(data.aSP, .1, 1) + "<br>" + L(396) + (data.aSQ + 1) + " / " + data.aSS + "<br>" + L(419) + data.aSR), dU
			}()),
			function(dR) {
				var dU = new dV,
					aXa = data.aSV,
					aXb = (dU.dW(L(440)), dU.he(L(441, [data.aST.length ? "[" + data.aST + "]" : "-"])), dU.he(L(442, [v.dh.lb(aXa, .01, 2)])), dU.he(L(443, [data.aSX + 1 + " / " + data.aSS])), data.aSY),
					aXc = (dU.he(L(444, [v.dh.lb(aXb, .1, 1)])), data.aSa);
				dU.he(L(445, [aXc])), dU.he(L(446, [v.dh.lb(aXb / Math.max(aXc, 1), .1, 2)])), aXa = data.aSW, dU.dW(L(447), "0.8em"), dU.he(L(441, [data.aSU.length ? "[" + data.aSU + "]" : "-"])), dU.he(L(442, [v.dh.lb(aXa, .01, 2)])), aXb =
					data.aSZ, dU.he(L(444, [v.dh.lb(aXb, .1, 1)])), aXc = data.aSb, dU.he(L(445, [aXc])), dU.he(L(446, [v.dh.lb(aXb / Math.max(aXc, 1), .1, 2)])), data.aSs || (dU.ha(L(448)), dU.ha(L(449)));
				dR.push(dU)
			}(dR),
			function(dR) {
				var dU = new dV;
				dU.dW(L(450)), dU.he(L(425) + (data.aSe / 10).toFixed(1) + "<br>" + L(397) + (data.aSf.length ? L(451, [data.aSf]) : L(452))), data.aSs ? (dU.db(new jH([new dF(L(453), function(f6) {
					return ct.d4.a0G(0) && (v.w.a0H(f6), ct.yt.yu({
						a0J: 4,
						e7: data.e7
					})), !0
				}, 0, 0, 1).button])), dU.ha(L(454)), dU.ha(L(455))) : dU.ha(L(456));
				dR.push(dU)
			}(dR), dR.push(function() {
				var dU = new dV;
				if (dU.dW(L(426)), dU.he(L(427) + data.aSc + "<br>" + L(396) + (data.aSd + 1) + " / " + data.aSS + "<br>" + L(397) + cb.mD(data.aSd)), data.aSs) {
					var nd = new jI({
							value: ce.cf.data[157].value,
							bm: -1
						}, 1, void 0, function(f6) {
							ce.cx.cy(157, a0B(f6.target.value))
						}),
						aEc = (nd.f6.style.marginTop = "0.6em", dU.db(nd), new dF(L(175), function(f6) {
							return f6.textContent === L(175) ? (f6.textContent = L(176), nd.f6.readOnly = !0, aXY[0].ns(0), aXY[1].ns(0), aXY[0].button.style.color = t.dx, aXY[1].button.style.color = t.dx, a0B(ce.cf.data[157]
								.value)) : a0D(), !0
						})),
						aXY = (dU.db(new jH([aEc.button])), [new dF("−", function(f6) {
							return nd.f6.readOnly && ct.d4.a0G(0) && (v.w.a0H(f6), a0D(), ct.yt.a0I({
								a0J: 2,
								e7: data.e7,
								value: bO.hQ(parseInt(ce.cf.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new dF("+", function(f6) {
							return nd.f6.readOnly && ct.d4.a0G(0) && (v.w.a0H(f6), a0D(), ct.yt.a0I({
								a0J: 1,
								e7: data.e7,
								value: bO.hQ(parseInt(ce.cf.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						hb = dU.ha(),
						a0B = function(ah) {
							return ah = v.fX.a0K(ah, 3, 32767), hb.textContent = L(428, [ah - 1, ah, ce.cf.data[105].value]), ah
						};
					dU.db(new jH([aXY[0].button, aXY[1].button]));
					for (var aA = 0; aA < 2; aA++) aXY[aA].button.style.fontSize = "1.6em";
					var a0D = function() {
						aEc.button.textContent = L(175), nd.f6.readOnly = !1, aXY[0].ns(1), aXY[1].ns(1), aXY[0].button.style.color = t.u, aXY[1].button.style.color = t.u
					};
					a0B(ce.cf.data[157].value)
				}
				return dU
			}()),
			function(dR) {
				var dU, qC;
				data.aSs && !data.aSm || (0 === n.id || data.aSs || data.aSm) && ((dU = new dV).dW("Patreon"), !data.aSs && data.aSn ? dU.db(new jH([new dF(L(44), function() {
					ct.yt.yu({
						a0J: 7,
						e7: data.e7
					}), data.aSn = 0, d2.da(7)
				}).button])) : data.aSm ? (dU.he(L(457, [(data.aSo / 100).toFixed(2)]) + "<br>" + L(458, [1 + data.aSp + " / " + data.aSq]) + "<br>" + L(459, [data.aSr ? L(460) : L(461)])), data.aSs || dU.db(new jH([new dF(L(462),
					function() {
						ct.yt.yu({
							a0J: 8,
							e7: data.e7
						}), data.aSm = 0, ce.cx.cy(160, 0), d2.da(7)
					}).button]))) : (dU.he(L(463), "0.75em").style.marginBottom = "0.3em", dU.he("  • " + L(464), "0.75em").style.whiteSpace = "pre", dU.he("  • " + L(465), "0.75em").style.whiteSpace = "pre", dU.he("  • " + L(466),
						"0.75em").style.whiteSpace = "pre", dU.he(L(467), "0.75em").style.marginTop = "1.0em", dU.he(L(468), "0.75em").style.marginTop = "1.0em", dU.he("<a href='" + kH.a6K +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", qC = "https://www.patreon.com/oauth2/authorize?state=" + data.e7 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", dU.he(L(469), "0.75em").style.marginTop = "1.0em", dU.he("<a href='" + qC +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aSs || (dU.db(new dc), dU.db(new jH([new dF(L(45), function() {
						ct.yt.yu({
							a0J: 6,
							e7: data.e7
						}), data.aSn = 1, d2.da(7)
					}).button])), dU.he(L(470), "0.75em").style.marginTop = "0.75em")), dR.push(dU))
			}(dR), dR
	}())
}

function aHX() {
	function aXj(player, gH, aXd) {
		3 <= aXd && 2142 < bl.ff() && (gH === i.df || a5.s9[gH] < bO.bP(a5.s9[player], 20)) && cX.zv(player, 20)
	}

	function aXk(player, r6, gH, aXd) {
		3 <= aXd && aXd < 6 && bO.bP(a5.s9[player], 8) > a5.s9[gH] && (r6 = Math.max(bO.bP(11 * a5.s9[gH], 5), bO.bP(a5.s9[player], 10)));
		aXd = a5.pT[player].length;
		wX.aGt.aGv(player, gH), wX.aGt.aH0(player, gH, aXd, r6)
	}

	function aXi(player, r6) {
		var gH = i.df,
			aH = a5.pT[player].length;
		wX.aGt.aGu(player), a5.pT[player].length !== aH && wX.aGt.aH0(player, gH, aH, r6)
	}
	this.aGx = new Uint8Array(i.df), this.h = function() {
		this.aGx.fill(0)
	}, this.zz = function(player, r6) {
		var a8j, aXd, aXe, aXf;
		gD.aAG(player) && (a8j = ve.vf(player), 3 <= (aXd = cX.r6[player]) && aXd < 6 && (r6 = Math.max(a5.s9[player] - a8j, r6)), aXe = a5.pa[player].length, aXf = a5.pZ[player].length, 30 * a5.a6[player] > i.vT && aFC[player] < 10 && 100 *
			aXf <= aXe && cX.zv(player, 10), i.j ? function(player, r6, aXd, a8j) {
				var gH;
				if (wX.zy.aGx[player] = 1, wX.aGt.aH2(player, !1) || wX.aGt.aH4(player, !1)) {
					if (!wX.aGt.aH6(player))
						if (wX.aGt.aH5()) aXi(player, r6), aXj(player, i.df, aXd);
						else {
							if (bA.aK7(cX.zm[aXd])) gH = wX.aGt.aH9(player);
							else {
								if (wX.aGt.aH7() && bA.aK7(cX.zk[aXd]) && wX.aGt.aH8(), 6 === aXd) return aXk(player, r6, wX.aGt.aHL(), aXd);
								gH = wX.aGt.aHC(player)
							}
							aXk(player, r6, gH, aXd), aXj(player, gH, aXd)
						}
				} else pI.a4D.a9(player) || wX.aHY.a9(player) || (wX.zy.aGx[player] = 0, function(player, r6, aXd, a8j) {
					var aA, cq, aR, aG = a1.aG,
						aXm = aG[player];
					if (0 !== aXm) {
						var aXn = a5.s9[player],
							a6 = a5.a6;
						if (player < i.fd && (r6 = aXn), !(aXn < a6[player] || 5 === aXd && aXn < a8j || 4 === aXd && aXn < bO.bP(a8j, 2))) {
							var aH = aF.aI,
								aE = aF.aE,
								aGx = (aA = bA.l3(aH), wX.zy.aGx);
							for (cq = 0; cq < aH; cq++)
								if (aR = aE[(cq + aA) % aH], 1 === aGx[aR] && aG[aR] === aXm) return bx.aW4.aMf(player, aR, r6)
						}
					}
				}(player, r6, aXd, a8j))
			}(player, r6, aXd, a8j) : (!aXf || aXe && (aXe < aXf && !bA.l3(10) || 100 * aXf <= aXe && bA.l3(3) || !bA.l3(8))) && pI.a4D.a9(player) || function(player, r6, aXd) {
				wX.aGt.aH2(player, !0) || wX.aGt.aH4(player, !0) ? wX.aGt.aH6(player) || (wX.aGt.aH5() ? aXi(player, r6) : bA.aK7(cX.zm[aXd]) ? aXk(player, r6, wX.aGt.aH9(player), aXd) : 5 === aXd ? aXk(player, r6, wX.aGt.aHH(), aXd) : (wX
					.aGt.aH7() && bA.aK7(cX.zk[aXd]) && wX.aGt.aH8(), aXk(player, r6, 6 === aXd ? wX.aGt.aHL() : wX.aGt.aHC(player), aXd))) : wX.aHY.a9(player)
			}(player, r6, aXd))
	}
}

function zN() {
	this.o9 = function(canvas, aWe, b1) {
		var d = canvas.width,
			an = canvas.height,
			aR = v.w.pB(d, an),
			ih = v.w.getContext(aR, !0),
			canvas = (ih.drawImage(canvas, 0, 0), ih.getImageData(0, 0, d, an));
		return aWe(canvas.data, d, an, b1), ih.putImageData(canvas, 0, 0), aR
	}, this.aWj = function(pE, d, an) {
		for (var bF = d - 1; 0 <= bF; bF--)
			for (var bG = an - 1; 0 <= bG; bG--) {
				var aA = 4 * (bF + bG * d);
				pE[3 + aA] = pE[aA], pE[aA] = pE[1 + aA] = pE[2 + aA] = 255
			}
	}, this.aWf = function(pE, d, an) {
		for (var bF = d - 1; 0 <= bF; bF--)
			for (var bG = an - 1; 0 <= bG; bG--) {
				var aA = 4 * (bF + bG * d);
				pE[1 + aA] > pE[2 + aA] + 10 && (pE[3 + aA] = pE[aA], pE[1 + aA] = pE[2 + aA])
			}
	}, this.aWh = function(pE, d, an, b1) {
		for (var gap = Math.floor(Math.min(d, an) * b1), bF = 0; bF < d; bF++)
			for (var aA, bG = 0; bG < an; bG++)(bF < gap || bG < gap || d - gap <= bF || an - gap <= bG) && (pE[3 + (aA = 4 * (bF + bG * d))] = 255 - 255 * (pE[1 + aA] - pE[aA]) / (255 - pE[aA]))
	}, this.oA = function(pE, d, an, b1) {
		for (var bF = d - 1; 0 <= bF; bF--)
			for (var bG = an - 1; 0 <= bG; bG--) {
				var aA = 4 * (bF + bG * d);
				pE[aA] = b1[0], pE[1 + aA] = b1[1], pE[2 + aA] = b1[2]
			}
	}, this.aWg = function(pE, d, an, b1) {
		for (var gap = Math.floor(d * b1), bF = 0; bF < d; bF++)
			for (var aA, bG = 0; bG < an; bG++)(bF < gap || bG < gap || d - gap <= bF || an - gap <= bG) && (pE[aA = 4 * (bF + bG * d)] = pE[1 + aA] = pE[2 + aA] = 0)
	}, this.aWi = function(pE, d, an) {
		for (var bG, aA, bF = d - 1; 0 <= bF; bF--)
			for (bG = an - 1; 0 <= bG; bG--) 200 < pE[1 + (aA = 4 * (bF + bG * d))] && pE[1 + aA] - 20 > pE[aA] && pE[1 + aA] - 20 > pE[2 + aA] ? pE[aA] + pE[2 + aA] < 40 ? pE[3 + aA] = 0 : (pE[3 + aA] = pE[aA], pE[aA] = 255, pE[1 + aA] = 255,
				pE[2 + aA] = 255) : pE[aA] < 50 && pE[1 + aA] < 50 && pE[2 + aA] < 50 && (pE[aA] + pE[1 + aA] + pE[2 + aA] < 50 ? pE[3 + aA] = 180 : pE[3 + aA] = 180 + Math.floor(75 * (pE[aA] + pE[1 + aA] + pE[2 + aA] - 50) / 100))
	}, this.aWk = function(pE, d, an) {
		for (var bG, aA, bF = d - 1; 0 <= bF; bF--)
			for (bG = an - 1; 0 <= bG; bG--) pE[1 + (aA = 4 * (bF + bG * d))] > pE[aA] + 20 && pE[1 + aA] > pE[2 + aA] + 20 && pE[aA] + pE[2] < 40 && (pE[3 + aA] = 255 - pE[1 + aA], pE[aA] = pE[1 + aA] = pE[2 + aA] = pE[aA])
	}, this.a6c = function(pE, d, an, b1) {
		for (var aS = d >> 1, bF = 0; bF < d; bF++)
			for (var bG = 0; bG < an; bG++) Math.sqrt((bF - aS) * (bF - aS) + (bG - aS) * (bG - aS)) > b1 * aS && (pE[4 * (bF + bG * d) + 3] = 0)
	}
}

function a7T() {
	var aXo, bW;
	this.h = function() {
		for (var aA = (bW = new Uint16Array(101)).length - 1; 0 <= aA; aA--) bW[aA] = bO.bP(32768 * aA, 100);
		this.oe(0)
	}, this.value = function(aL) {
		return bW[aL]
	}, this.od = function() {
		return bO.bP(aXo - 1, 2)
	}, this.oe = function(nV) {
		aXo = 2 * nV % 32768 + 1
	}, this.random = function() {
		return aXo = 167 * aXo % 32768
	}, this.l3 = function(sK) {
		return bO.bP(sK * this.random(), 32768)
	}, this.aK7 = function(aL) {
		return 0 !== aL && this.random() < this.value(aL)
	}, this.aLn = function(ee, cq) {
		return ee + this.l3(cq - ee)
	}
}

function a86() {
	this.aJX = [L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485)];
	var aXp = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.p3 = new Array(aXp.length), this.h = function() {
		var bW = ce.cf.data[155].value.split(";"),
			cn = bW.length;
		if (function() {
				for (var aH = aXp.length, aA = 0; aA < aH; aA++) p2.p3[aA] = aXp[aA]
			}(), !(cn > aXp.length))
			for (var aA = 0; aA < cn; aA++) bW[aA].length && (this.p3[aA] = bW[aA])
	}, this.aJZ = function(bm, code) {
		for (var p3 = this.p3, aXr = aXp, ef = (p3[bm] = code, ""), aH = p3.length, aXs = [], aA = 0; aA < aH; aA++) aXs.push(p3[aA] === aXr[aA] ? "" : p3[aA]);
		aH--;
		for (aA = 0; aA < aH; aA++) ef += aXs[aA] + ";";
		ce.cx.cy(155, ef += aXs[aH])
	}, this.aJW = function() {
		ce.cx.cy(155, ""), this.h()
	}, this.aR = function(code, bm) {
		return code === this.p3[bm] || code === this.p3[bm + 1]
	}
}
f2(), self.aiCommand746 = function(ah) {
	0 === ah ? a73() : 1 !== ah || !n || 1 !== n.id || n.fk < 14 || p5.th()
}, setTimeout(a73, 1e4), window.onload = function() {
	a73()
};