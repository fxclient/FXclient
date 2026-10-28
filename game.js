var a7K, a7J, a7L, a7d, a7a, a78, a7N, aFr, a7h, aFs, aFt, aFu, a7H, lT, d4, k8, a6l, aA4, a0X, a9H, aIP, aIQ, fQ, fT, eX, a9, fS, oC, fZ, fY, y, mS, fX, mY, fP, d, w, bz, aN, dK, k2, k5, oD, dA, aIR, aIS, a3x, xG, mK, zi, aIT, kN, aDi, pi, fq, aIU,
	fK, a9L, fU, aGB, aD, kH, rU, cr, zo, aIV, aIW, aIX, aIY, aIZ, aIa, aIb, lY, ko, uY, bK, aB, fM, l7, lH, b9, bE, gD, aGf, b1, aCM, eO, dI, d5, dF, ip, aIc, mv, l, fb, h, c0, aId, oA, fp, x, r, xR, iF, iN, ob, fO, n, jE, kk, bx, l8, bn, lk, aFc,
	aIe, aIf, an, aIg, bw, oX, ze, jS, cu, aRY, pz, xU, xV, a8x, mp, kE, iy, ix, j0, f0, a7, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden",
		"span", "1em", "0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "middle", "break-word", "Escape",
		"50%", "0.6em", "underline", "text", "scroll", "pointer", "bold", "Value", "Player ", "Enter", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "string", "rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "nowrap", "mouseleave",
		"keydown", "inline-block", "game.territorial.io", "focus", "fixed", "button", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em",
		" voted with ", "  • ", "   Gold: ", "⚠️ ", "wheel", "true", "translate(-50%, -50%)", "top", "tls7", "system-ui", "style", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)",
		"placeholder", "mouseover", "mouseout", "long", "logo", "loading", "italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "aria-pressed", "arena", "account",
		"accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui",
		"@room", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x",
		"-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> ", "   Contest"
	];

function a() {
	var b = 0;
	this.c = function() {
		d.c(), b = 0
	}, this.setState = function(e) {
		b = e
	}, this.f = function() {
		return b
	}, this.g = function() {
		this.setState(8), h.i()
	}, this.j = function(k) {
		if (!l.m) return !1;
		if (!(n.o < 400)) {
			if ("Enter" === k.key || "Escape" === k.key) {
				if (this.p()) return !0;
				if ("Enter" === k.key) {
					if (0 === b) return !0;
					if (7 === b) return !0
				}
			}
			return !1
		}
	}, this.q = function() {
		r.resize()
	}, this.p = function() {
		return !!r.s()
	}, this.t = function(u, v) {
		!l.m || r.t(u, v) || 6 === b && w.t(u, v) || x.t(u, v) || y.t(u, v)
	}, this.z = function(u, v) {
		!y.a0 && d.z(u, v, !0) || y.z(u, v)
	}, this.click = function(u, v) {
		y.a1()
	}, this.a2 = function(u, v, deltaY) {}, this.a3 = function() {
		d.a4(), n.a5 = !0
	}, this.a6 = function() {
		8 !== b && 10 !== b && (a7.imageSmoothingEnabled = !0, this.a8(), 0 !== b && (y.a6(), a9.a6(), this.aA(), x.a6()), 0 !== b && 6 === b && w.a6(), r.a6(), h.a6())
	}, this.a8 = function() {
		var aI, aG;
		if (__fx.makeMainMenuTransparent) a7.clearRect(0, 0, aD.aE, aD.aF);
		else l.m ? (aG = aD.aE / l.aH, aI = aD.aF / l.aJ, a7.setTransform(aG = aI < aG ? aG : aI, 0, 0, aG, Math.floor((aD.aE - aG * l.aH) / 2), Math.floor((aD.aF - aG * l.aJ) / 2)), a7.drawImage(l.aL, 0, 0), a7.setTransform(1, 0, 0, 1, 0, 0), a7
			.fillStyle = aB.aM) : a7.fillStyle = aB.aC, a7.fillRect(0, 0, aD.aE, aD.aF)
	}, this.aA = function() {
		var v = Math.floor(.3 * aD.aF),
			canvas = aN.aO("territorial.io"),
			aP = (aP = 1.75 * aD.aF / canvas.width) * canvas.width < .98 * aD.aE ? .98 * aD.aE / canvas.width : aP,
			u = (a7.globalAlpha = .15, a7.imageSmoothingEnabled = !1, Math.floor(.5 * (aD.aE - aP * canvas.width))),
			u = Math.floor(u / aP),
			v = Math.floor(v - .5 * canvas.height * aP),
			v = Math.floor(v / aP);
		a7.setTransform(aP, 0, 0, aP, u, v), a7.drawImage(canvas, u, v), a7.setTransform(1, 0, 0, 1, 0, 0), a7.globalAlpha = 1, a7.imageSmoothingEnabled = !0
	}
}

function aR() {
	var aS = [],
		aT = [],
		aU = [];

	function aa(aX) {
		for (var af = aX.af, aZ = [];;) {
			var ag = function ah(af, position) {
				position = af.indexOf("@", position);
				if (position < 0) return -1;
				var ak = af.substring(position + 1, position + 6);
				if (5 !== ak.length) return ah(af, position + 1);
				if (bK.bL.startsWith(ak, "room")) return ah(af, position + 1);
				var bM = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!bM.test(ak)) return ah(af, position + 1);
				bM = af.substring(position + 6, position + 7);
				if (1 !== bM.length) return position;
				ak = new RegExp("^[ :!.]+$");
				if (!ak.test(bM)) return ah(af, position + 1);
				return position
			}(af, 0);
			if (-1 === ag) {
				aZ.push(ai(af, aX));
				break
			}
			0 === ag ? aZ.push(aj(af.substring(1, 6), aX, ag)) : (aZ.push(ai(af.substring(0, ag), aX)), aZ.push(aj(af.substring(ag + 1, ag + 6), aX, ag))), af = af.substring(ag + 6)
		}
		return aZ
	}

	function aj(ak, aX, ag) {
		var al = function(ak) {
				var bC = bE.bA.bF(ak, 5),
					al = an.bG.bH(bC);
				if (al) {
					for (aS.push(al); 75 < aS.length;) aS.shift();
					return al
				}
				for (var bI = an.bG.bI, aW = bI.length - 1; 0 <= aW; aW--)
					if (al = bI[aW], bC === al.bC) return aS.push(al), al;
				for (aW = aS.length - 1; 0 <= aW; aW--)
					if (al = aS[aW], bC === al.bC) return aS.push(al), al;
				return an.bG.bJ(bC, ak, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(ak),
			ak = (0 === ag && 0 === aX.ab.id && aX.ac && (aX.fontSize = an.ao.ap(al.aq, al.ar), aX.ae = an.ao.at(al.ar)), document.createElement("span"));
		return ak.textContent = function(al, aX, ag) {
				if (al.b5) return al.b5--, ag = 2 === aX.ab.id || (3 === aX.ab.id || 4 === aX.ab.id) && 0 !== ag, al.username + (ag ? " (" + al.b7 + ")" : "");
				if (aX.ab.b8) return "Redacted " + b9.bA.bB(al.bC, 2);
				return al.username
			}(al, aX, ag), ak.style.display = "inline-block", ak.style.color = an.ao.aw(al.aq), 11 === al.aq && (ak.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), ak.style.cursor =
			"pointer", ak.style.margin = "0", ak.style.font = "inherit", ak.style.minWidth = ak.style.minHeight = "1em", an.ao.ax(al) && (ak.style.textDecoration = "underline"), al.ay && (ak.style.textDecorationLine = "underline", ak.style
				.textDecorationStyle = "dotted"), an.ao.at(al.ar) && (ak.style.fontWeight = "bold"), ak.onclick = function(k) {
				an.az.b0(k, al)
			}, b1.b2() || (ak.onmouseover = function(k) {
				an.b3.b4(k.target, al)
			}), aT.push(ak), ak
	}

	function ai(af, aX) {
		var au = document.createElement("span");
		return au.textContent = af, au.style.color = aX.bD, au.style.margin = "0", au.style.font = "inherit", au
	}

	function bT(al, bS, bC) {
		bC !== al.bC || al.b7 || (al.b7 = al.username, al.username = bS)
	}
	this.aV = function() {
		for (var aW = 0; aW < aT.length; aW++) aT[aW].onclick = aT[aW].onmouseover = null;
		aU = aT = null
	}, this.transform = function(aX) {
		for (var aY = document.createElement("div"), aZ = aa(aX), aW = 0; aW < aZ.length; aW++) aY.appendChild(aZ[aW]);
		0 === aX.ab.id && (aY.vx143 = aX.ab, aU.push(aY)), aY.style.margin = "0.6em 0.6em", aX.ac && (aY.style.marginLeft = aY.style.marginRight = "inherit"), aY.style.font = "inherit";
		var ad = 0 < aX.ab.id;
		return aX.ae && (aY.style.fontWeight = "bold"), ad && (aY.style.paddingLeft = "0.7em"), ad && (aY.style.fontStyle = "italic"), aY.style.fontSize = aX.fontSize.toFixed(2) + "em", aY
	}, this.bP = function(bQ) {
		if (bQ && (2 === bQ.id && 1 === bQ.bR || 3 === bQ.id && 2 === bQ.bR)) {
			var bC = 3 === bQ.id ? bQ.target : bQ.bC;
			if (!an.bG.bH(bC)) {
				for (var bS = "Redacted " + b9.bA.bB(bC, 2), bI = an.bG.bI, aW = bI.length - 1; 0 <= aW; aW--) bT(bI[aW], bS, bC);
				for (aW = aS.length - 1; 0 <= aW; aW--) bT(aS[aW], bS, bC)
			}
		}
	}, this.bU = function(bC) {
		for (var bV = aU, bW = "@" + b9.bA.bB(bC, 5), aW = bV.length - 1; 0 <= aW; aW--) {
			var bX = bV[aW];
			if (bX.vx143.bC === bC || 0 <= bX.vx143.af.indexOf(bW)) {
				for (; bX.firstChild;) h.removeChild(bX, bX.firstChild);
				for (var aZ = aa(an.ao.bY(bX.vx143, an.ao.bZ(bX.vx143))), ba = 0; ba < aZ.length; ba++) bX.appendChild(aZ[ba]);
				bV.splice(aW, 1)
			}
		}
	}, this.bb = function(bC) {
		for (var bV = aU, aW = bV.length - 1; 0 <= aW; aW--) {
			var bX = bV[aW];
			if (bX.vx143.bC === bC) {
				for (; bX.firstChild;) h.removeChild(bX, bX.firstChild);
				bX.vx143.af = "[Redacted Message]";
				for (var aZ = aa(an.ao.bY(bX.vx143, an.ao.bZ(bX.vx143))), ba = 0; ba < aZ.length; ba++) bX.appendChild(aZ[ba]);
				bV.splice(aW, 1)
			}
		}
	}
}

function bc() {
	this.bd = 0, this.be = null, this.bG = null, this.ao = null, this.bf = null, this.az = null, this.b3 = null, this.message = null, this.bg = null, this.bh = null, this.bi = null, this.bj = new bk, this.bl = 0, this.bm = 0, this.c = function() {
		this.bm = n.o, this.bd = bE.bA.bF(bn.buffer.data[105].value, 5), this.bG = new bo, this.ao = new bp, this.bf = new bq, this.az = new br, this.b3 = new bs, this.message = new bt, this.bg = new bu, this.bh = new aR, this.bi = new bv, this
			.bf.c(), bw.c(), this.bl = 1, bx.by.setState(1), bz.setState(0), c0.turnstile.c1()
	}, this.aV = function() {
		this.bh && this.bh.aV(), this.be = null, this.bG = null, this.ao = null, this.bf = null, this.az = null, this.b3 = null, this.message = null, this.bg = null, this.bh = null, this.bi = null, this.bl = 0, bw.aV(), bx.by.setState(0)
	}
}

function c2(c3) {
	this.c4 = -1, this.pow = -1;
	var c5 = c3 || {},
		c6 = this,
		c7 = null,
		c8 = null,
		c9 = null,
		cA = null,
		cB = null,
		cC = [],
		cD = 0,
		cE = null,
		cF = null,
		cG = null,
		cH = !1,
		cI = null,
		cL = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function cM(cN, cO, className) {
		cN = document.createElement(cN);
		return className && (cN.className = className), cO && cO.appendChild(cN), cN
	}

	function cQ(cR, cO, action) {
		cO = cM("button", cO);
		return cO.type = "button", cO.textContent = cR, cO.addEventListener("click", action), cO
	}

	function cS(cO) {
		cO = cM("canvas", cO);
		return cO.width = cO.height = 128, cO
	}

	function cb(canvas, cc) {
		for (var canvas = canvas.getContext("2d"), data = (cF || (cF = canvas.createImageData(128, 128), cG = new Uint32Array(cF.data.buffer)), cc), cU = cG, cV = 0, position = 0, color = 0; position < 16384; cV += 6, color ^= 1) {
			for (var cW = cV >> 3, cZ = position + ((data[cW] << 8 | data[1 + cW]) >> 10 - (7 & cV) & 63), ca = color ? cL : 4294967295, aW = position; aW < cZ; aW++) cU[aW] = ca;
			position = cZ
		}
		canvas.putImageData(cF, 0, 0)
	}

	function ce() {
		if (c7) {
			c7.setAttribute("aria-busy", String(cH)), cB.disabled = cH, cA.disabled = cH || !cD;
			for (var aW = 0; aW < cC.length; aW++) cC[aW].disabled = cH, cC[aW].setAttribute("aria-pressed", String(Boolean(cD & 1 << aW)))
		}
	}

	function cg(event) {
		var ci, ch;
		"Escape" === event.key && (event.preventDefault(), c6.close()), "Tab" === event.key && c7 && (ci = (ch = c7.querySelectorAll("button:not(:disabled)"))[0], ch = ch[ch.length - 1], event.shiftKey && document.activeElement === ci ? (event
			.preventDefault(), ch.focus()) : event.shiftKey || document.activeElement !== ch || (event.preventDefault(), ci.focus()))
	}

	function ck() {
		cI = document.activeElement, (c7 = cM("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), c7.setAttribute("aria-modal", "true"), c7.setAttribute("aria-label", "Select all images matching the reference");
		cM("style", c7).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var cl = cM("div", c7, "captcha-reference-row");
		cM("span", cl, "captcha-reference-label").textContent = "Find All:", (c9 = cS(cl)).className = "captcha-reference", c9.setAttribute("aria-label", "Reference image"), c8 = cM("div", c7, "captcha-grid");
		for (var aW = 0; aW < 16; aW++) cC.push(function(cW) {
			var button = cQ("", c8, function() {
				cH || (cD ^= 1 << cW, ce())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (cW + 1)), button.setAttribute("aria-pressed", "false"), cS(button).setAttribute("aria-hidden", "true"), button
		}(aW));
		var cl = cM("div", c7, "captcha-actions"),
			co = cQ("Close", cl, function() {
				c6.close()
			});
		cB = cQ("Reload", cl, cp), cA = cQ("Verify", cl, cq), c7.addEventListener("keydown", cg), c6.resize(), ce(), co.focus()
	}

	function cp() {
		cH || (c6.close(), cr.cs.ct(0, 0, cu.c4, cu.pow))
	}

	function cq() {
		var cv, cw;
		!cH && cD && (cv = cD, cw = cE, c6.close(), cr.cs.ct(cv, cw, cu.c4, cu.pow))
	}
	this.show = function(cx, cw, c4, pow) {
		this.c4 = c4, this.pow = pow, cE = cw, c7 || ck(), cb(c9, cx[0]);
		for (var cy = 0; cy < 16; cy++) cb(cC[cy].firstChild, cx[cy + 1]);
		cD = 0, cH = !1, ce(), "function" == typeof c5.cz && c5.cz()
	}, this.resize = function() {
		var size;
		c7 && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), c7.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (c7) {
			for (var d0 = c7.querySelectorAll("canvas"), aW = 0; aW < d0.length; aW++) d0[aW].width = d0[aW].height = 0;
			c7.remove(), c7 = c8 = c9 = cA = cB = null, cF = cG = cE = null, cD = 0, cH = !(cC = []), cI && document.body.contains(cI) && cI.focus(), cI = null, "function" == typeof c5.d1 && c5.d1()
		}
	}
}

function d2() {
	this.d3 = function(player) {
		return !!d4.data.passableWater && d5.bf.d6 !== d5.bf.d7 && d5.bf.d8[player] !== d5.bf.d9 && 0 !== dA.dB[player].length
	}, this.dC = function(dD) {
		var dE = dF.dG[1];
		return !(4 <= dE || !d5.ao.dH(dI.dJ(dD))) && dK.dL(dI.dJ(dI.dM(dD, dE)))
	}
}

function dN() {
	function dT(player, dR) {
		dR = dI.dg(d5.bf.dh[dR]), dR = dK.dj(dI.dJ(dR));
		return !!d5.ao.dk(player, dR)
	}

	function dQ(player) {
		return d5.eD.d3(player) && !d5.e8.eE()
	}
	this.dO = function(player, dP) {
		return !!dQ(player) && -1 !== (dP = function(player, dP) {
			for (var e4 = d5.bf.d6, dh = d5.bf.dh, dn = d5.bf.dn, eA = dI.eB(), eC = -1, aW = 0; aW < e4; aW++) {
				var e3 = dI.dt(dP, dI.dg(dh[aW]));
				e3 < eA && bK.dl.dm(player, dn[aW] >> 3) && (eA = e3, eC = aW)
			}
			return eC
		}(player, dP)) && !!dT(player, dP) && (dF.dG[3] = d5.bf.dU[dP], !0)
	}, this.dV = function(player, dW) {
		return !!dQ(player) && !!d5.ao.dX(dW) && !!dT(player, dF.dG[2])
	}, this.dY = function(player, dW, dZ) {
		return !! function(player, dW, dZ) {
			if (dQ(player) && d5.ao.dX(dW)) {
				dW = dF.dG[2];
				if (bK.dl.dm(player, d5.bf.dn[dW] >> 3)) {
					if (function(player, dR) {
							return d5.ao.e6(player, dR) && (dF.e7[0] = d5.e8.e9(d5.bf.dy[dR]), dF.dG[1] = 6, !0)
						}(player, dW)) return 1;
					var df = dI.dg(d5.bf.dh[dW]),
						dq = d5.ao.dr(player, df);
					if (-1 !== dq) {
						dq = dI.dt(dq, df);
						if (!(dZ && 120 < dq)) {
							dZ = function(dR, ds, df) {
								var dx = d5.bf.dy[dR],
									dR = d5.bf.e0[dR],
									e1 = dI.dt(df, dx[dR + 1]);
								if (ds <= e1) return d5.ao.e2(df, dx[dR + 1], e1, ds);
								for (var e3 = ds - e1, e4 = dx.length - 1, aW = dR + 1; aW < e4; aW++) {
									var e5 = dI.dt(dx[aW], dx[aW + 1]);
									if (e3 <= e5) return d5.ao.e2(dx[aW], dx[aW + 1], e5, e3);
									e3 -= e5
								}
								return dx[e4]
							}(dW, dq, df);
							if (d5.dv.dw(player, dZ, 1)) return dF.dG[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, dW, dZ) && (player = dF.dG[2], d5.bf.db[player] = 64 + d5.bf.db[player] % 64, d5.dc.dd(dW, d5.bf.de), !0)
	}
}

function eF() {
	this.size = 0, this.cW = 0, this.eG = null, this.c = function(eG) {
		this.cW = 0, this.eG = eG, this.size = eG.length
	}, this.eH = function(eI) {
		return this.c(new Uint8Array(this.eJ(eI))), this.eG
	}, this.aV = function() {
		this.eG = null
	}, this.eK = function(size, eL) {
		for (var eG = this.eG, cZ = this.cW + size - 1, aW = this.cW; aW <= cZ; aW++) eG[aW >> 3] |= (eL >> cZ - aW & 1) << 7 - (7 & aW);
		this.cW += size, this.cW > 8 * this.size && console.error("Wrapper Overflow")
	}, this.eM = function(size, eL) {
		var eN = size >> 1,
			bX = 1 << eN;
		this.eK(size - eN, eO.eP(eL, bX)), this.eK(eN, eL % bX)
	}, this.eQ = function(size) {
		for (var eG = this.eG, cZ = this.cW + size, aW = this.cW; aW < cZ; aW++) eG[aW >> 3] &= 255 ^ 128 >>> (7 & aW)
	}, this.eJ = function(eI) {
		return eI + 7 >> 3
	}, this.eR = function(e7, eS, cZ, eT) {
		for (var aW = eS; aW < cZ; aW++) this.eK(eT, e7[aW])
	}
}

function eU() {
	this.eV = function(player) {
		bK.dl.eW(player) && eX.eY(80, L(0), 637, 0, aB.eZ, aB.ea, -1, !1)
	}, this.eb = function(player) {
		bK.dl.eW(player) && eX.eY(80, L(1), 637, 0, aB.eZ, aB.ea, -1, !1)
	}
}

function ec(title, ed, ee, ef) {
	var eg, eh;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), eh.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, ef = ef || [new ei("⬅️ " + L(2), function() {
		h.ej()
	})], eg = new ek(title, ef), eh = new el(eg.em, ed), ee && bK.en.textAlign(eg.em.style, 1)
}

function eq() {
	var er, es, et = -15e3,
		eu = !1;

	function t(k) {
		fE() || (eu = !0, fF(k, 1), cr.bf.fG(cr.bf.fH), fI(Math.floor(aD.fJ * k.clientX), Math.floor(aD.fJ * k.clientY)))
	}

	function f3(k) {
		et = n.o, fF(k, 1), cr.bf.fG(cr.bf.fH), 0 < k.touches.length && (er = Math.floor(aD.fJ * k.touches[0].clientX), es = Math.floor(aD.fJ * k.touches[0].clientY), fK.f3(k) || fI(er, es))
	}

	function fI(u, v) {
		h.t(u, v), 0 === d4.fL ? bz.t(u, v) : fM.fN(u, v) || fO.t(u, v) || fP.t(u, v) || fQ.fR(u, v) || fS.t(u, v) || 0 <= fT.t(u, v) || fU.t(u, v) || b1.fV(u, v) || fQ.fW(u, v)
	}

	function z(k) {
		fE() || (eu = !0, fF(k, 1), fa(Math.floor(aD.fJ * k.clientX), Math.floor(aD.fJ * k.clientY)))
	}

	function f4(k) {
		et = n.o, fF(k, 1), 0 < k.touches.length && (er = Math.floor(aD.fJ * k.touches[0].clientX), es = Math.floor(aD.fJ * k.touches[0].clientY), fK.f4(k) || fa(er, es))
	}

	function fa(u, v) {
		b1.b2() || (b1.ey = u, b1.ez = v), h.z(u, v), 0 === d4.fL ? bz.z(u, v) : (fb.fc(u, v), fO.z(u, v) || (fT.z(u, v), fQ.fd() ? fQ.z(u, v) : fZ.fe ? fZ.z(u) && (n.a5 = !0) : (fX.z(u, v), fY.ff && fY.z(u, v) && (n.a5 = !0))))
	}

	function f2(k) {
		fE() || (fF(k, 1), fg(), 0 === d4.fL ? (bz.click(-1024, -1024), y.reset()) : (fX.a1(-1024, -1024), fT.z(-1024, -1024), fZ.fh(), fY.ff = !1))
	}

	function f1(k) {
		fE() || (fF(k, 1), fi(Math.floor(aD.fJ * k.clientX), Math.floor(aD.fJ * k.clientY), 2 === k.button), b1.ex && (b1.ex = !1, k.preventDefault()))
	}

	function click(k) {
		fE() || fF(k, 1)
	}

	function f5(k) {
		et = n.o, fF(k, 1), k && k.touches && 0 < k.touches.length && 0 !== d4.fL ? fY.ff = !1 : fK.fj() || (fi(er, es, !1), b1.ex && (b1.ex = !1, k.preventDefault()))
	}

	function f6(k) {
		et = n.o, fF(k, 1), fi(er, es, !1), b1.ex && (b1.ex = !1, k.preventDefault())
	}

	function f7(k) {}

	function f8(k) {}

	function f9(k) {
		fE() || fF(k, 0)
	}

	function fi(u, v, fk) {
		fg(), 0 === d4.fL ? bz.click(u, v) : (fX.a1(u, v), fO.a1(), fZ.fh(), fY.ff = !1, fQ.click(u, v, fk) ? n.a5 = !0 : fT.f1(u, v))
	}

	function fg() {
		h.fg()
	}

	function a2(k) {
		var u, v, deltaY;
		fE() || (fF(k, 1), cr.bf.fG(cr.bf.fH), u = Math.floor(aD.fJ * k.clientX), v = Math.floor(aD.fJ * k.clientY), deltaY = k.deltaY, 1 === k.deltaMode && (deltaY *= 16), h.a2(u, v, deltaY), 0 === d4.fL ? bz.a2(u, v, deltaY) : fX.a2(u, v,
			deltaY) || (fZ.fl(u, v) ? fZ.a2(deltaY) && (n.a5 = !0) : fY.a2(u, v, deltaY)))
	}

	function fA(k) {
		fF(k, 0)
	}

	function fF(k, id) {
		0 === id && h.fd() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== bz.f() && k.preventDefault()
	}

	function fB(k) {
		if (__fx.keybindHandler(k.key)) return;
		fE() || 0 < aD.fo || (k = k.code) && k.length && (fp.ag(k, 18) ? fq.fr(3) : fp.ag(k, 22) ? fq.fr(0) : fp.ag(k, 20) ? fq.fr(1) : fp.ag(k, 24) ? fq.fr(2) : fp.ag(k, 10) ? fZ.fs(31 / 32) : fp.ag(k, 8) ? fZ.fs(32 / 31) : fp.ag(k, 6) ? fZ.fs(7 /
				8) : fp.ag(k, 4) ? fZ.fs(8 / 7) : fp.ag(k, 14) ? 0 !== d4.fL && fY.a2(Math.floor(aD.aE / 2), Math.floor(aD.aF / 2), -200) : fp.ag(k, 16) ? 0 !== d4.fL && fY.a2(Math.floor(aD.aE / 2), Math.floor(aD.aF / 2), 200) : fp.ag(k, 0) ? d4
			.fL && fb.ft(0) : fp.ag(k, 2) ? d4.fL && fb.ft(1) : fp.ag(k, 30) ? d4.fL && fb.ft(2) : fp.ag(k, 26) ? d4.fL && fb.fu() : fp.ag(k, 28) && d4.fL && fb.fv())
	}

	function fC(k) {
		if (!fE() && !(0 < aD.fo || n.o < 400)) {
			var code = k.code;
			if (code && code.length && !("Enter" === code && h.j(1) || "Space" === code && h.j(0))) return an.bl ? an.az.j(code) ? void 0 : void("Escape" === code && b1.fw()) : void(8 !== bz.f() && bz.j(k) ? n.a5 = !0 : "Escape" === code ? b1.fw() :
				fp.ag(code, 18) ? fq.fx(3) : fp.ag(code, 22) ? fq.fx(0) : fp.ag(code, 20) ? fq.fx(1) : fp.ag(code, 24) ? fq.fx(2) : fp.ag(code, 12) ? fM.fy(!d4.fz) : "Space" === code && d4.fL && (fT.g0 && fT.g1(), d4.g2) && fM.g3(!1))
		}
	}

	function fD() {
		"hidden" !== document.visibilityState && (n.a5 = !0)
	}

	function fE() {
		return et + 15e3 > n.o
	}

	function resize() {
		aD.g5()
	}
	this.ev = 0, this.ew = "", this.ex = !1, this.ey = 0, this.ez = 0, this.c = function() {
		f0.addEventListener("mousedown", t, {
			passive: !1
		}), f0.addEventListener("mousemove", z, {
			passive: !1
		}), f0.addEventListener("mouseup", f1, {
			passive: !1
		}), f0.addEventListener("click", click, {
			passive: !1
		}), f0.addEventListener("mouseleave", f2, {
			passive: !1
		}), f0.addEventListener("wheel", a2, {
			passive: !1
		}), f0.addEventListener("touchstart", f3, {
			passive: !1
		}), f0.addEventListener("touchmove", f4, {
			passive: !1
		}), f0.addEventListener("touchend", f5, {
			passive: !1
		}), f0.addEventListener("touchcancel", f6, {
			passive: !1
		}), f0.addEventListener("dragover", f7), f0.addEventListener("drop", f8), f0.addEventListener("dblclick", f9), document.addEventListener("contextmenu", fA), document.addEventListener("keydown", fB), document.addEventListener("keyup",
			fC), document.addEventListener("visibilitychange", fD), window.addEventListener("resize", resize)
	}, this.fV = function(u, v) {
		return !!fM.t(u, v) || !!(fX.t(u, v) || fY.t(u, v) || fZ.t(u, v) || eX.t(u, v))
	}, this.g4 = fE, this.b2 = function() {
		return !eu || 0 < et
	}, this.fw = function() {
		if (!h.fd()) return 8 === bz.f() ? d4.fz ? void fM.fy(!1) : fO.fd ? void fO.g1() : void fT.g1() : void(7 !== bz.f() && 6 === bz.f() && w.g6());
		h.j(2)
	}
}

function g7() {
	function gk() {
		var id = gD.gE(3);
		return 0 === id ? {
			id: id,
			bC: gD.gE(30),
			af: an.bg.gm(bE.gO.gP(7))
		} : 1 === id ? {
			id: id,
			bC: gD.gE(30),
			bR: gD.gE(3),
			value: gD.gE(30),
			target: gD.gE(30)
		} : 2 === id ? {
			id: id,
			bC: gD.gE(30),
			bR: gD.gE(3)
		} : 3 === id ? {
			id: id,
			bC: gD.gE(30),
			bR: gD.gE(3),
			value: gD.gE(4),
			target: gD.gE(30)
		} : 4 === id ? {
			id: id,
			bC: gD.gE(30),
			bR: gD.gE(3),
			target: gD.gE(30)
		} : 5 === id ? {
			id: id,
			bR: gD.gE(6)
		} : 6 === id ? {
			id: id,
			value: gD.gE(17)
		} : null
	}
	this.g8 = function(c4) {
		if (c4 !== cr.bf.g9) cr.bf.close(c4, 3239);
		else if (6 !== bz.f()) cr.bf.close(c4, 3271);
		else {
			an.c();
			for (var aW = 0; aW < 4; aW++) {
				var gA = an.bf.gB[aW],
					playerCount = (gA.gC = gD.gE(10), gA.gF = gD.gE(6), gA.mapSeed = gD.gE(14), gA.gG = gD.gE(4), gA.gH = gD.gE(6), gA.gI = gD.gE(14), gA.gJ = gD.gE(4), gA.gK = gD.gE(1), gA.gL = gD.gE(12), gA.spawningSeed = gD.gE(14), gD.gE(16));
				an.bG.gM[aW] = gD.gE(16);
				for (var ba = 0; ba < playerCount; ba++) an.bG.gN(aW, gD.gE(30), bE.gO.gP(5), gD.gE(4), gD.gE(30), gD.gE(7), gD.gE(16), gD.gE(18), gD.gE(11), gD.gE(12), gD.gE(6))
			}
			h.gQ(29), an.bf.gR(!0)
		}
	}, this.gS = function(c4) {
		if (c4 !== cr.bf.g9) cr.bf.close(c4, 3239);
		else if (an.bl) {
			an.bf.gT[0] = gD.gE(20), an.bf.gT[1] = gD.gE(20);
			for (var gU = gD.gE(16), ba = 0; ba < gU; ba++) {
				var id = gD.gE(3);
				0 === id ? an.bG.gN(gD.gE(2), gD.gE(30), bE.gO.gP(5), 0, 1234566, 127, 0, gD.gE(18), 0, gD.gE(12), 0) : 1 === id ? an.bG.gV(gD.gE(16), gD.gE(2)) : 2 === id ? an.bG.gW(gD.gE(16), gD.gE(2), gD.gE(2)) : 3 === id ? an.bG.gX(gD.gE(16),
					gD.gE(2)) : 4 === id ? an.bG.gY(gD.gE(16), gD.gE(2), gD.gE(4), gD.gE(30), gD.gE(7), gD.gE(16), gD.gE(11), gD.gE(18)) : 5 === id ? an.bG.gZ(gD.gE(16), gD.gE(2), gD.gE(1)) : 6 === id && an.bG.ga(gD.gE(16), gD.gE(2), gD.gE(
					6))
			}
			for (var aW = 0; aW < 4; aW++) {
				var gA = an.bf.gB[aW];
				if (gA.gC = gD.gE(10), gA.gH = gD.gE(6), gA.gI = gD.gE(14), gA.gJ = gD.gE(4), 0 === gA.gC) {
					if (gA.fH = gD.gE(10), gA.gb = gD.gE(10), an.bj.gc(aW)) return;
					gA.gF = gD.gE(6), gA.mapSeed = gD.gE(14), gA.gG = gD.gE(4), gA.gK = gD.gE(1), gA.gL = gD.gE(12), gA.spawningSeed = gD.gE(14), gA.gd.push(gA.gd[0]), gA.gd.shift()
				}
			}
			an.bf.ge()
		} else cr.bf.close(c4, 3251)
	}, this.gf = function(c4) {
		if (c4 !== cr.bf.g9) cr.bf.close(c4, 3272);
		else if (an.bl) {
			for (var gg = gD.gE(4), gA = an.bf.gB[gg], gh = gA.gh, gj = (gA.gi = gD.gE(20), gD.gE(6)), aW = 0; aW < gj; aW++) {
				var bQ = gk();
				an.bh.bP(bQ), gh.push(bQ)
			}
			an.bf.gl(gg)
		} else cr.bf.close(c4, 3273)
	}, this.gn = function(c4) {
		c4 !== cr.bf.g9 ? cr.bf.close(c4, 3276) : an.bl ? an.message.go(gk()) : cr.bf.close(c4, 3277)
	}
}

function gp() {
	this.gq = function(e7) {
		e7.fill(0)
	}, this.gr = function(e7) {
		for (var e4 = e7.length, aW = 0; aW < e4; aW++) e7[aW] = []
	}, this.gs = function(gt, gu) {
		for (var gv = dF.gw, aW = 0; aW < 3; aW++) gv[aW] = gu * gt[aW];
		return gv
	}, this.gx = function(gt, gv, gy) {
		for (var gz = 0, aW = 0; aW < 3; aW++) gz += Math.abs(gt[aW] - gv[aW]);
		return gy <= gz
	}, this.h0 = function(gt, h1) {
		for (var aW = 0; aW < 3; aW++) gt[aW] = eO.h2(gt[aW] + h1, 0, 255);
		return gt
	}, this.h3 = function(e7, h4, h5) {
		h5 = h5 || e7.length - 1;
		for (var h6 = 0, aW = h4 = h4 || 0; aW <= h5; aW++) h6 += e7[aW];
		return h6
	}, this.h7 = function(e7, h8) {
		for (var aW, h9, e4 = e7.length, hA = [], ba = e4 - 1; 0 <= ba; ba--) {
			for (aW = h9 = 0; aW < e4; aW++) h8(e7[aW]) < h8(e7[h9]) && (h9 = aW);
			e4--, hA.push(e7[h9]), e7[h9] = e7[e4], e7.pop()
		}
		return hA
	}, this.min = function(e7) {
		var aW, hB, e4 = e7.length;
		if (0 === e4) return 0;
		for (hB = e7[0], aW = 1; aW < e4; aW++) hB = Math.min(hB, e7[aW]);
		return hB
	}, this.max = function(e7) {
		var e4 = e7.length;
		if (0 === e4) return 0;
		for (var hB = e7[0], aW = 1; aW < e4; aW++) hB = Math.max(hB, e7[aW]);
		return hB
	}, this.hC = function(e7, hB) {
		for (var e4 = e7.length, hD = 0, aW = 0; aW < e4; aW++) hD += e7[aW] > hB;
		return hD
	}, this.hE = function(hF, hG, min) {
		for (var e4 = hG[0], aW = e4 - 1; 0 <= aW; aW--) hF[aW] < min && (hF[aW] = hF[--e4]);
		hG[0] = e4
	}, this.hH = function(e7, e4, value) {
		for (var aW = 0; aW < e4; aW++) e7[aW] -= value
	}, this.hI = function(e7) {
		for (var e4 = e7.length, aW = 0; aW < e4; aW++)
			if ("string" != typeof e7[aW]) return !1;
		return !0
	}, this.hJ = function(ak, e7, hK) {
		e7.fill(0);
		for (var hL = ak.split(","), e4 = Math.min(hL.length, e7.length), aW = 0; aW < e4; aW++) e7[aW] = Math.min(parseInt(hL[aW]), hK)
	}, this.hM = function(ak, e7, hN) {
		e7.fill("");
		for (var hL = ak.split('"'), e4 = Math.min(hL.length, 2 * e7.length), cy = 0, aW = 1; aW < e4; aW += 2) e7[cy++] = hL[aW].slice(0, hN)
	}, this.hO = function(e7, hD) {
		if (0 === hD) e7.fill(0);
		else {
			var h6 = this.h3(e7),
				e4 = e7.length;
			if (0 === h6) e7.fill(eO.eP(hD, e4));
			else
				for (var aW = 0; aW < e4; aW++) e7[aW] = eO.eP(hD * e7[aW], h6);
			if (0 === (h6 = this.h3(e7))) e7[1] = hD;
			else
				for (var cy = 0; h6++ < hD;) e7[cy = (cy + 1) % e4] && e7[cy]++
		}
	}, this.hP = function(e7) {
		if (!e7) return 0;
		var e4 = e7.length;
		if (0 === e4) return 0;
		for (var hB = e7[e4 - 1], aW = e4 - 2; 0 <= aW; aW--)
			if (e7[aW] !== hB) return aW + 2;
		return 1
	}, this.hQ = function(e7) {
		for (var h6 = 0, aW = 0; aW < e7.length; aW++) h6 += e7[aW].length;
		return h6
	}, this.hR = function(hS) {
		for (var e7 = [], aW = 0; aW < hS.length; aW++) e7 = e7.concat(hS[aW]);
		return e7
	}, this.has = function(e7, hB) {
		for (var e4 = e7.length, aW = 0; aW < e4; aW++)
			if (e7[aW] === hB) return !0;
		return !1
	}
}

function hT() {
	this.hU = function(player) {
		for (var hV = d5.bf.hV, h4 = player << 3, aW = h4 + d5.bf.d8[player] - 1; h4 <= aW; aW--) this.hW(hV[aW])
	}, this.hW = function(hX) {
		var bf = d5.bf,
			hY = bf.d6 - 1,
			hZ = bf.dn[hX],
			ha = bf.hb[hX],
			hc = bf.dh[hX];
		bf.d6 = hY, bf.dn[hX] = bf.dn[hY], bf.dh[hX] = bf.dh[hY], bf.hd[hX] = bf.hd[hY], bf.he[hX] = bf.he[hY], bf.hb[hX] = bf.hb[hY], bf.dU[hX] = bf.dU[hY], bf.db[hX] = bf.db[hY], bf.hf[hX] = bf.hf[hY], bf.dy[hX] = bf.dy[hY], bf.e0[hX] = bf.e0[
				hY], bf.hV[bf.dn[hX]] = hX,
			function(hk) {
				var player = hk >> 3,
					bf = d5.bf,
					e4 = bf.d8[player] - 1,
					hl = (player << 3) + e4;
				bf.d8[player] = e4, hl !== hk && (bf.hV[hk] = bf.hV[hl], bf.dn[bf.hV[hk]] = hk)
			}(hZ), d5.hh.hh[dI.hi(bf.dh[hX])][bf.hb[hX]] = hX, hY = dI.hi(hc), hZ = ha, hY = d5.hh.hh[hY], bf = hY.pop(), hZ !== hY.length && (hY[hZ] = bf, d5.bf.hb[bf] = hZ)
	}
}

function ho() {
	this.c = function() {
		! function() {
			var data = bn.buffer.data;
			0 === data[2].hr && (aD.aF > aD.aE || 0 !== bx.id) && (data[2].value = data[2].hs = 1);
			0 === data[100].hr && (data[100].value = data[100].hs = (0 === bx.id ? "Player " : 1 === bx.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aW, data = bn.buffer.data,
			e4 = data.length;
		for (aW = 0; aW < e4; aW++) {
			var ht = bn.ep.hu(aW, !0);
			data[aW] && data[aW].hr === ht && (null === (ht = bn.ep.hv(aW)) ? data[aW].value = data[aW].hs : 2 === data[aW].type ? data[aW].value = ht : (ht = Number(ht), isNaN(ht) ? data[aW].value = data[aW].hs : data[aW].value = ht))
		}
	}
}

function hx() {
	var aF, canvas, hy, hz, i0, i1 = -1;

	function i4() {
		var i5, cd = canvas.getContext("2d", {
			alpha: !0
		});
		cd.clearRect(0, 0, aF, aF), cd.fillStyle = aB.i6, cd.fillRect(0, 0, aF, aF), 9 === hz && (cd.fillStyle = aB.i7, cd.fillRect(0, 0, aF, aF)), cd.fillStyle = aB.i8, cd.fillRect(0, 0, aF, 1), cd.fillRect(0, 0, 1, aF), cd.fillRect(0, aF - 1, aF,
			1), cd.fillRect(aF - 1, 0, 1, aF), i5 = .9 * aF / aN.get(0).width, cd.imageSmoothingEnabled = !0, cd.setTransform(i5, 0, 0, i5, Math.floor((aF - i5 * aN.get(0).width) / 2), Math.floor((aF - i5 * aN.get(0).height) / 2)), cd.drawImage(
			aN.get(0), 0, 0), cd.setTransform(1, 0, 0, 1, 0, 0)
	}

	function iJ(iH, iI) {
		if (!fT.g0) return iH <= aF + iN.gap && iI >= fZ.v ? 9 : -1;
		if (iH <= 4 * aF + iN.gap) {
			if (iI >= fZ.v) return 0;
			if (iI >= fZ.v - aF - i0 * iN.gap) return 2
		} else if (iH <= 7 * aF + iN.gap && iI >= fZ.v - aF - i0 * iN.gap) return 1;
		return -1
	}
	this.g0 = !1, this.c = function() {
		hz = -1, this.g0 = !1, i0 = bx.by.i2() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		aF = fZ.aF, (canvas = document.createElement("canvas")).width = aF, canvas.height = aF, hy = bK.en.i3(1, (bx.by.i2() ? .5 : .45) * aF), i4()
	}, this.i9 = function() {
		return !(1 !== d4.fL || d4.iA || (d4.g2 ? !fM.iB : this.g0 && d4.iC))
	}, this.g1 = function() {
		this.g0 = !this.g0, this.g0 ? (fM.fy(!1), d4.g2 && fM.iB && fM.g3(!0), this.iD(), 9 === hz && (hz = 0)) : (hz = -1, i4(), !d4.iC || 1 !== d4.fL || d4.iA || d4.g2 || bx.by.setState(1)), n.a5 = !0
	}, this.iD = function() {
		(d4.iC || d4.g2) && 1 === d4.fL && (fX.iE(!0), d4.iA || setTimeout(function() {
			iF.iG()
		}, 0), bx.by.setState(0))
	}, this.t = function(iH, iI) {
		return 0 <= (i1 = iJ(iH, iI)) || !fT.g0 || d4.iC || d4.g2 || fO.fd || fT.g1(), i1
	}, this.z = function(iH, iI) {
		iH = iJ(iH, iI);
		iH !== hz && (hz = iH, this.g0 || i4(), n.a5 = !0)
	}, this.f1 = function(iH, iI) {
		iH = iJ(iH, iI);
		return -1 !== iH && i1 === iH && (this.g0 ? d4.fz ? (0 <= iH && fM.fy(!1), !d4.g2) : (0 === iH ? d4.iM() : 1 === iH ? this.g1() : 2 === iH && h.gQ(1, 0), !0) : 9 === iH && (this.g1(), !0))
	}, this.a6 = function() {
		var aE;
		this.g0 ? (aE = Math.floor(5.5 * aF), a7.setTransform(1, 0, 0, 1, iN.gap, fZ.v), a7.fillStyle = aB.i6, a7.fillRect(0, 0, aE, aF), 0 === hz ? (a7.fillStyle = aB.i7, a7.fillRect(0, 0, 4 * aF, aF)) : 1 === hz && (a7.fillStyle = aB.i7, a7
				.fillRect(4 * aF, 0, Math.floor(1.5 * aF), aF)), a7.fillStyle = aB.i8, a7.fillRect(0, 0, aE, 1), a7.fillRect(0, 0, 1, aF), a7.fillRect(4 * aF, 0, 1, aF), a7.fillRect(0, aF - 1, aE, 1), a7.fillRect(aE - 1, 0, 1, aF), a7.font =
			hy, bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 1), a7.fillText(L(3), 2 * aF, .54 * aF), aE = .4 * aF, fT.iT(iN.gap + 4 * aF + (1.5 * aF - aE) / 2, fZ.v + .3 * aF, aE), aE = 1, a7.setTransform(1, 0, 0, 1, iN.gap, fZ.v - aE *
				i0 * iN.gap - aE * aF), a7.fillStyle = aB.i6, a7.fillRect(0, 0, 4 * aF, aF), hz === aE + 1 && (a7.fillStyle = aB.i7, a7.fillRect(0, 0, 4 * aF, aF)), a7.fillStyle = aB.i8, a7.fillRect(0, 0, 4 * aF, 1), a7.fillRect(0, 0, 1, aF),
			a7.fillRect(4 * aF, 0, 1, aF), a7.fillRect(0, aF - 1, 4 * aF, 1), a7.fillText(L(0 === aE ? 3 : 4), 2 * aF, .54 * aF), a7.setTransform(1, 0, 0, 1, 0, 0)) : a7.drawImage(canvas, iN.gap, fZ.v)
	}, this.iQ = function(player) {
		return 0 !== dA.iR[player] && 2 !== d4.fL && !bK.dl.iS(player)
	}, this.iT = function(u, v, e4) {
		a7.setTransform(1, 0, 0, 1, u, v), a7.lineWidth = iN.iV, a7.strokeStyle = aB.i8, a7.beginPath(), a7.moveTo(0, 0), a7.lineTo(e4, e4), a7.moveTo(0, e4), a7.lineTo(e4, 0), a7.stroke()
	}
}

function iW() {
	this.iX = function(ak, iY, iZ) {
		for (var ia = [], e4 = ak.length, max = 0, aW = 0; aW < e4; aW++) {
			var hB = ak.charCodeAt(aW);
			ia.push(hB), max = Math.max(max, hB)
		}
		var ib = max < 128 ? 7 : 16;
		for (iZ.eK(iY, e4), iZ.eK(1, +(16 == ib)), aW = 0; aW < e4; aW++) iZ.eK(ib, ia[aW])
	}
}

function ic() {
	this.ep = new ie, this.buffer = new ig, this.ih = new ii, this.bf = new ij, this.ik = new il, this.c = function() {
		this.buffer.c(), (new ho).c(), this.ik.c(), this.bf.im()
	}
}

function io() {
	this.a6 = function() {
		if (0 !== ip.bf.iq && (a7.globalAlpha = Math.min(ip.bf.iq / 580, 1), a7.drawImage(ip.bf.it, 1 + fY.iu(), 1 + fY.iv()), a7.globalAlpha = 1, d4.iA)) {
			for (var iw = ix / iy, iz = j0 / iy, j1 = (aD.aE + ix) / iy, j2 = (aD.aF + j0) / iy, j3 = ip.bf.j4 * iy, j5 = ip.bf.j5, aW = d4.j6 - 1; 0 <= aW; aW--) ! function(aW, j3, iw, iz, j1, j2, j5) {
				var highlight;
				0 === dA.iR[aW] || 0 === dA.j8[aW] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aW]) && (j3 *= 2), j1 = aD.aE * ((dA.j9[aW] + dA.jA[aW] + 1) / 2 - iw) / (j1 - iw) - .5 * j3, iw = aD.aF * ((dA
					.jB[aW] + dA.jC[aW] + 1) / 2 - iz) / (j2 - iz) - .5 * j3, aD.aE < j1) || iw > aD.aF || j1 < -j3 || iw < -j3 || (highlight ? a7.setTransform(2 * iy, 0, 0, 2 * iy, j1, iw) : a7.setTransform(iy, 0, 0, iy, j1, iw), a7
					.drawImage(j5[d4.jD ? jE.jF[aW] : 1], 0, 0))
			}(aW, j3, iw, iz, j1, j2, j5);
			a7.setTransform(iy, 0, 0, iy, 0, 0)
		}
	}
}

function jG() {
	this.jH = function(aK) {
		var jJ;
		return l.jI(l.gF) && d4.data.passableMountains && (jJ = dK.dj(aK), this.jK(d4.jL, jJ) || this.jM(d4.jL, jJ)) && 0 !== (jJ = function(jc) {
			for (var u = dI.jd(jc), v = dI.je(jc), max = Math.max(l.aH, l.aJ) - 2, jf = max * max, jg = !1, jh = 0, e3 = 0; e3 < max; e3++) {
				var ji, dP = function(u, v, e3) {
					for (var aW = 0; aW <= e3; aW++)
						for (var ba = -1; ba < 2; ba += 2)
							for (var eN = -1; eN < 2; eN += 2)
								for (var ag = 0; ag < 2; ag++) {
									var aK = function(u, v) {
										if (dI.jl(u, v)) {
											u = dI.jm(u, v), v = dI.dJ(u);
											if (dK.dL(v) && dK.jn(v)) return u
										}
										return 0
									}(u + ag * ba * aW + (1 - ag) * eN * e3, v + ag * eN * e3 + (1 - ag) * ba * aW);
									if (aK) return aK
								}
					return 0
				}(u, v, e3);
				dP && (ji = dI.jj(u, v, dP)) < jf && (jh = dP, jf = ji, jg || (jg = !0, max = Math.floor(Math.sqrt(ji)) + 1))
			}
			return jh
		}(dI.jO(aK))) && (aK = dI.dJ(jJ), dK.jQ(aK) || (aK = dK.jR(aK)) !== d4.jL && jS.jT(aK, d4.jL)) ? jJ : 0
	}, this.jU = function(player, dP) {
		dP = dI.dJ(dP);
		if (dK.dL(dP)) {
			if (dK.jQ(dP)) dF.jV[0] = d4.jW;
			else if (dK.jR(dP) !== dF.jV[0]) return !1;
			for (var jF = function(aK) {
					var jZ = dK.jZ,
						jF = [];
					loop: for (var bX = 3; 0 <= bX; bX--) {
						var ja = aK + jZ[bX];
						if (dK.jb(ja)) {
							for (var id = dK.dj(ja), aW = 0; aW < jF.length; aW++)
								if (id === jF[aW]) continue loop;
							dF.jY[jF.length] = ja, jF.push(id)
						}
					}
					return jF
				}(dP), e4 = jF.length, aW = 0; aW < e4; aW++)
				if (this.jK(player, jF[aW]) || this.jM(player, jF[aW])) return dF.jY[0] = dF.jY[aW], !0
		}
		return !1
	}, this.jK = function(player, jJ) {
		for (var jo = dA.jo[player], e4 = jo.length, jp = Math.max(eO.eP(e4, 12), 1), jZ = dK.jZ, aW = 0; aW < e4; aW += jp)
			for (var jP = jo[aW], bX = 3; 0 <= bX; bX--) {
				var ja = jP + jZ[bX];
				if (dK.jb(ja) && jJ === dK.dj(ja)) return !0
			}
		return !1
	}, this.jM = function(player, jJ) {
		for (var jo = dA.jo[player], e4 = jo.length, jZ = dK.jZ, aW = 0; aW < e4; aW++)
			for (var jP = jo[aW], bX = 3; 0 <= bX; bX--) {
				var ja = jP + jZ[bX];
				if (dK.jb(ja) && jJ === dK.dj(ja)) return !0
			}
		return !1
	}
}

function jq() {
	this.resize = function() {
		var aW, jr = document.head.querySelector("style#ss");
		if (jr)
			for (aW = jr.sheet.cssRules.length - 1; 0 <= aW; aW--) jr.sheet.deleteRule(0);
		else(jr = document.createElement("style")).id = "ss", document.head.appendChild(jr);
		var js = "::-webkit-scrollbar",
			jt = bK.en.ju(iN.jv),
			jw = bK.en.ju(Math.max(bK.en.jx(.012), 8));
		try {
			jr.sheet.insertRule(js + "{width:" + jw + ";height:" + jw + ";}", jr.sheet.cssRules.length), jr.sheet.insertRule(js + "-thumb{background-color:white;}", jr.sheet.cssRules.length), jr.sheet.insertRule(js + "-track{background:" + aB
				.i6 + ";}", jr.sheet.cssRules.length), jr.sheet.insertRule(js + "-track:horizontal{border-top:" + jt + " solid white;}", jr.sheet.cssRules.length), jr.sheet.insertRule(js + "-track:vertical{border-left:" + jt +
				" solid white;}", jr.sheet.cssRules.length), jr.sheet.insertRule(js + "-button{display:none;}", jr.sheet.cssRules.length)
		} catch (k) {
			for (console.log("error 3425: " + k), aW = jr.sheet.cssRules.length - 1; 0 <= aW; aW--) jr.sheet.deleteRule(0)
		}
	}
}

function jy() {
	function kU(player, kM, k7) {
		3 <= k7 && 2142 < n.kg() && (kM === d4.jW || dA.k9[kM] < eO.eP(dA.k9[player], 20)) && k8.kF(player, 20)
	}

	function kY(player, k1, kM, k7) {
		3 <= k7 && k7 < 6 && eO.eP(dA.k9[player], 8) > dA.k9[kM] && (k1 = Math.max(eO.eP(11 * dA.k9[kM], 5), eO.eP(dA.k9[player], 10)));
		k7 = dA.ks[player].length;
		kN.kO.kt(player, kM), kN.kO.ku(player, kM, k7, k1)
	}

	function kT(player, k1) {
		var kM = d4.jW,
			e4 = dA.ks[player].length;
		kN.kO.kv(player), dA.ks[player].length !== e4 && kN.kO.ku(player, kM, e4, k1)
	}
	this.jz = new Uint8Array(d4.jW), this.c = function() {
		this.jz.fill(0)
	}, this.k0 = function(player, k1) {
		var k4, k7, kA, kB;
		k2.k3(player) && (k4 = k5.k6(player), 3 <= (k7 = k8.k1[player]) && k7 < 6 && (k1 = Math.max(dA.k9[player] - k4, k1)), kA = dA.dB[player].length, kB = dA.kC[player].length, 30 * dA.j8[player] > d4.kD && kE[player] < 10 && 100 * kB <= kA &&
			k8.kF(player, 10), d4.jD ? function(player, k1, k7, k4) {
				var kM;
				if (kN.kO.kP(player, !1) || kN.kO.kQ(player, !1)) {
					if (!kN.kO.kR(player))
						if (kN.kO.kS()) kT(player, k1), kU(player, d4.jW, k7);
						else {
							if (kH.kV(k8.kW[k7])) kM = kN.kO.kX(player);
							else {
								if (kN.kO.kZ() && kH.kV(k8.ka[k7]) && kN.kO.kb(), 6 === k7) return kY(player, k1, kN.kO.kc(), k7);
								kM = kN.kO.kd(player)
							}
							kY(player, k1, kM, k7), kU(player, kM, k7)
						}
				} else d5.kJ.kK(player) || kN.ke.kK(player) || ! function(player, k1, k7, k4) {
					var jz = kN.kh.jz;
					jz[player] = 0;
					var ki = jE.jF[player];
					if (0 !== ki) {
						var kj = dA.k9[player],
							j8 = dA.j8;
						if (player < d4.j6 && (k1 = kj), !(kj < j8[player] || 5 === k7 && kj < k4 || 4 === k7 && kj < eO.eP(k4, 2))) {
							kk.kl(ki);
							for (var e4 = dF.km[0], kn = dF.kn, aW = kH.kI(e4), eN = 0; eN < e4; eN++) {
								var ag = kn[(eN + aW) % e4];
								if (jz[ag]) return ko.kp.kq(player, ag, k1)
							}
							var d8 = d5.bf.d8;
							for (eN = 0; eN < e4; eN++)
								if (ag = kn[(eN + aW) % e4], d8[ag] && ag !== player) return ko.kp.kq(player, ag, k1)
						}
					}
				}(player, k1, k7, k4)
			}(player, k1, k7, k4) : (!kB || kA && (kA < kB && !kH.kI(10) || 100 * kB <= kA && kH.kI(3) || !kH.kI(8))) && d5.kJ.kK(player) || function(player, k1, k7) {
				kN.kO.kP(player, !0) || kN.kO.kQ(player, !0) ? kN.kO.kR(player) || (kN.kO.kS() ? kT(player, k1) : kH.kV(k8.kW[k7]) ? kY(player, k1, kN.kO.kX(player), k7) : 5 === k7 ? kY(player, k1, kN.kO.kr(), k7) : (kN.kO.kZ() && kH.kV(k8
					.ka[k7]) && kN.kO.kb(), kY(player, k1, 6 === k7 ? kN.kO.kc() : kN.kO.kd(player), k7))) : kN.ke.kK(player)
			}(player, k1, k7))
	}
}

function kw() {
	var eg, kx, ky, l0;

	function kz(aW) {
		h.gQ(8, h.l2, new l3(21, {
			l4: aW,
			h4: 0,
			h5: 10
		}))
	}
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), kx.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, ky = [new ei(L(5), function() {
		kz(5)
	}, 0, 0, 1), new ei(L(6), function() {
		kz(6)
	}, 0, 0, 1), new ei(L(7), function() {
		kz(7)
	}, 0, 0, 1), new ei("Audit Log", function() {
		kz(12)
	}, 0, 0, 1)], l0 = [new ei("⬅️ " + L(2), function() {
		h.ej()
	})], eg = new ek(L(8), l0), kx = new l1(ky, eg.em)
}

function l5() {
	this.l6 = function(c4) {
		var lX;
		l7.eH(55 + l8.l9.gE()), l7.eK(1, 0), l7.eK(6, 13), l7.eK(14, lT.lU), l7.eK(4, bx.id), l7.eK(7, bx.hr), l7.eK(1, +lT.lV), l7.eK(1, +lT.lW), l7.eK(5, (new Date).getHours() % 24), lX = lY.lZ(), l7.eK(8, lX[0]), l7.eK(8, lX[1]), l8.l9.iX(),
			cr.bf.send(c4, l7.eG)
	}, this.lB = function(c4, lC, lD, lE) {
		l7.eH(70), l7.eK(1, 0), l7.eK(6, 30), l7.eK(3, lD), l7.eK(30, lC), l7.eK(30, lE), cr.bf.send(c4, l7.eG)
	}, this.lF = function(lG) {
		lH.c(), lH.eK(1, 0), lH.eK(6, 6), b9.gO.iX(lG, 16, lH), cr.bf.send(cr.bf.g9, lH.lI())
	}, this.lJ = function(id) {
		l7.eH(13), l7.eK(1, 0), l7.eK(6, 15), l7.eK(6, id), cr.bf.send(0, l7.eG)
	}, this.lK = function(id, value) {
		l7.eH(43), l7.eK(1, 0), l7.eK(6, 3), l7.eK(6, id), l7.eK(30, value), cr.bf.send(0, l7.eG)
	}, this.lL = function(id, ak) {
		var e4 = Math.min(ak.length, 63);
		l7.eH(19 + 16 * e4), l7.eK(1, 0), l7.eK(6, 26), l7.eK(6, id), l7.eK(6, e4), b9.lM.lN(ak), cr.bf.send(0, l7.eG)
	}, this.lO = function(lP, aX) {
		l7.eH(7 + 26 * aX.length), l7.eK(1, 0), l7.eK(6, 9);
		for (var aW = 0; aW < aX.length; aW++) l7.eK(16, aX[aW][0]), l7.eK(10, aX[aW][1]);
		cr.bf.send(lP, l7.eG)
	}, this.lQ = function(lR, lS) {
		l7.eH(20), l7.eK(1, 0), l7.eK(6, 19), l7.eK(1, lR), l7.eK(12, lS), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.la = function(username) {
		l7.eK(5, username.length), b9.lM.lN(username)
	}, this.ct = function(cv, cw, c4, pow) {
		l7.eH(88), l7.eK(1, 0), l7.eK(6, 8), l7.eK(3, pow.lD), l7.eK(30, pow.lC), l7.eM(32, cw), l7.eK(16, cv), cr.bf.send(c4, l7.eG)
	}
}

function lb() {
	var aE, u, lc, canvas, cd, fd, ld, le, hy, lf, lg = 11 / 12;

	function lj() {
		var lo = Math.floor(ld * (aE - 2 * lc)),
			lp = 1 + Math.floor(.0625 * fZ.aF),
			lq = 1 + Math.floor(.3 * fZ.aF),
			lr = Math.floor(.55 * fZ.aF);
		cd.clearRect(0, 0, aE, fZ.aF), cd.fillStyle = aB.i6, cd.fillRect(0, 0, lc, fZ.aF), cd.fillRect(lc + lo, 0, aE - lc - lo, fZ.aF), cd.fillStyle = ld < 1 / 3 ? "rgba(" + Math.floor(3 * ld * 130) + ",130,0,0.85)" : ld < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ld - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ld - 2 / 3) * 130) + ",0.85)", cd.fillRect(lc, 0, lo, fZ.aF), cd.fillStyle = aB.i8, cd.fillRect(0, 0, aE, 1), cd.fillRect(0, fZ.aF - 1, aE, 1),
			cd.fillRect(0, 0, 1, fZ.aF), cd.fillRect(lc, 0, 1, fZ.aF), cd.fillRect(lc + lo, 0, 1, fZ.aF), cd.fillRect(aE - lc, 0, 1, fZ.aF), cd.fillRect(aE - 1, 0, 1, fZ.aF), cd.fillRect(Math.floor(.25 * fZ.aF) + lq, Math.floor((fZ.aF - lp) / 2), fZ
				.aF - 2 * lq, lp), cd.fillRect(Math.floor(aE - 1.25 * fZ.aF) + lq, Math.floor((fZ.aF - lp) / 2), fZ.aF - 2 * lq - lq % 2, lp), cd.fillRect(Math.floor(aE - 1.25 * fZ.aF) + Math.floor((fZ.aF - lp) / 2), lq, lp, fZ.aF - 2 * lq - lq % 2),
			le = bK.dl.ls(d4.jL, fZ.lt()), cd.fillText(bK.bL.bB(le) + " (" + bK.bL.lu(100 * ld, +(ld < .1)) + ")", Math.floor(.5 * aE), lr)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ld = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => fZ.fs(arg1);

	function m3(gu) {
		return !(1 < gu && 1 === ld || (1 < gu && gu * ld - ld < 1 / 1024 ? gu = (ld + 1 / 1024) / ld : gu < 1 && ld - gu * ld < 1 / 1024 && (gu = (ld - 1 / 1024) / ld), ld = eO.h2(ld * gu, 1 / 1024, 1), lj(), 0))
	}

	function m4(iH) {
		return ld !== (ld = eO.h2((iH - u - lc) / (aE - 2 * lc), 1 / 1024, 1)) && (lj(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		lj(), n.a5 = !0
	}, this.v = 0, this.fe = !1, this.c = function() {
		fd = !d4.iA && !d4.g2, lf = !1, ld = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bn.buffer.data[182].value + 1) / 1024, le = 0, this.fe = !1, this.resize()
	}, this.resize = function() {
		bx.by.i2() && aD.aE < .8 * aD.aF ? (this.aF = Math.floor(.066 * aD.lh), aE = aD.aE - 4 * iN.gap - this.aF) : (aE = Math.floor((bx.by.i2() ? .65 : .389) * aD.lh), aE += 12 - aE % 12, this.aF = Math.floor(aE / 12)), lc = Math.floor(3 * this
			.aF / 2), hy = bK.en.i3(1, Math.floor(.5 * this.aF)), (canvas = document.createElement("canvas")).width = aE, __fx.mobileKeybinds.setSize(aE, this.aF, a7), canvas.height = this.aF, (cd = canvas.getContext("2d", {
			alpha: !0
		})).font = hy, bK.en.textBaseline(cd, 1), bK.en.textAlign(cd, 1), this.li(), lj()
	}, this.li = function() {
		u = bx.by.i2() && aD.aE < .8 * aD.aF ? this.aF + 3 * iN.gap : Math.floor((aD.aE - aE) / 2), this.v = aD.aF - this.aF - lk.ll() * iN.gap
	}, this.iE = function() {
		lf && (lf = !1, lj())
	}, this.fd = function() {
		return !(!fd || fT.g0 && u < Math.floor(iN.gap + 5.5 * this.aF))
	}, this.lv = function(lw) {
		return !!this.fd() && u + aE > aD.aE - lw - iN.gap
	}, this.lx = function() {
		fd = !d4.g2
	}, this.ly = function() {
		fd = !1
	}, this.lt = function() {
		return eO.h2(Math.floor(1024 * ld + .5) - 1, 0, 1023)
	}, this.fl = function(iH, iI) {
		return this.fd() && u < iH && iH < u + aE && iI > this.v
	}, this.t = function(iH, iI) {
		if (!this.fd()) return !1;
		if (!(__fx.settings.keybindButtons && iI > this.v - Math.floor(iN.gap / 4) - this.aF && iI < this.v - Math.floor(iN.gap / 4) && __fx.mobileKeybinds.click(iH - u))) {
			if (!fZ.fl(iH, iI)) return !1;
			fY.ff = !1, ! function(m2, iH, iI) {
				if (function(iH, iI) {
						return u < iH && iH < u + lc && iI > fZ.v
					}(iH, iI)) return m3(lg);
				if (function(iH, iI) {
						return u + aE - lc < iH && iH < u + aE && iI > fZ.v
					}(iH, iI)) return m3(1 / lg);
				return m2.fe = !0, m4(iH)
			}(this, iH, iI) || (n.a5 = !0)
		}
		return !0
	}, this.fs = function(m5) {
		0 !== d4.fL && this.fd() && m3(m5) && (n.a5 = !0)
	}, this.a2 = function(deltaY) {
		var m5;
		return !(0 === deltaY || !this.fd()) && m3(m5 = 0 < deltaY ? (m5 = 400 / (400 + deltaY)) < lg ? lg : m5 : 1 / lg < (m5 = (400 - deltaY) / 400) ? 1 / lg : m5)
	}, this.z = function(iH) {
		return !!this.fe && m4(iH)
	}, this.fh = function() {
		this.fe = !1
	}, this.kK = function() {
		this.fd() && le !== bK.dl.ls(d4.jL, this.lt()) && (lf = !0)
	}, this.a6 = function() {
		this.fd() && (a7.drawImage(canvas, u, this.v), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(a7, u, this.v)
	}
}

function m7() {
	var canvas, cd, u, v, m8, m9, gap, mA, fontSize, mB, mC, mD, mE, mF, mG, mH, mI, mJ;

	function mT() {
		cd.clearRect(0, 0, mY.aE, mY.aF), cd.fillStyle = aB.ea, cd.fillRect(0, 0, mY.aE, mY.aF), cd.fillStyle = aB.mZ, aK = 0 < mH ? mH : mE[4] / 1e4, cd.fillRect(0, mY.aF - m8 - 1, Math.floor(aK * mY.aE), m8), cd.fillStyle = aB.i8, cd.fillRect(0, 0,
			mY.aE, 1), cd.fillRect(0, 0, 1, mY.aF), cd.fillRect(mY.aE - 1, 0, 1, mY.aF), cd.fillRect(0, mY.aF - 1, mY.aE, 1), cd.fillRect(0, mY.aF - m8 - 1, mY.aE, 1);
		for (var aK, ma, m6 = 0, aW = 0; aW < mD.length; aW++) mF[aW] ? (bK.en.textAlign(cd, 0), ma = Math.floor((m9 - m8 + 2 * mA) * (aW - m6 + 1) / (mD.length + 1) - .7 * mA), cd.fillText(mD[aW], gap, ma), bK.en.textAlign(cd, 2), 5 === aW && 0 !==
			dA.iR[d4.jL] && dA.k9[d4.jL] >= k5.k6(d4.jL) ? (cd.fillStyle = aB.mb, cd.fillText(mP(aW), mY.aE - gap, ma), cd.fillStyle = aB.i8) : cd.fillText(mP(aW), mY.aE - gap, ma)) : m6++
	}

	function mP(aW) {
		return aW < 3 ? mE[aW].toString() : 3 === aW || 4 === aW || 5 === aW ? bK.bL.lu(mE[aW] / 100, 2) : aW < 7 ? bK.bL.bB(mE[aW]) : aW === 7 ? mY.mc(mE[7]) : aW === 8 ? __fx.utils.getMaxTroops(dA.j8, d4.jL) : __fx.utils.getDensity(d4.jL)
	}

	function mO() {
		dA.j8[d4.jL] !== mE[6] && (mE[6] = dA.j8[d4.jL], mB++)
	}
	this.c = function() {
		mH = mI = 0, (mC = new Array(8))[0] = L(9), mC[1] = d4.iC ? L(10) : L(11), mC[2] = L(12), mC[3] = L(13), mC[4] = L(14), mC[5] = L(15, 0, "Interest"), mC[6] = L(16), mC[7] = L(17),
			mC.push("Max Troops", "Density"), // add mC
			(mD = new Array(mC.length)).fill(""), (mE = new Array(mC.length))[0] = d4.iC ? 0 : d4.j6, mE[1] = d4.iC ? mK.mL : d4.mM, mE[2] = d4.mN, mE[3] = 0, mE[4] = eO.eP(1e4 * dA.j8[0], Math.max(d4.kD, 1)), mE[5] = 0 === d4.data.iIncomeType ?
			700 : 1 === d4.data.iIncomeType ? eO.eP(700 * d4.data.iIncomeValue, 64) : eO.eP(700 * d4.data.iIncomeData[d4.jL], 64), mE[6] = 0, mO(), mE[7] = 0, mG = mP(6), (mF = new Array(mC.length)).fill(!0), mJ = 0, mJ = d4.iC ? (mF[0] = !1, mF[
				2] = !1, mF[3] = !1, 3) : (mF[3] = !1, 1), mB = 0, this.resize()
	}, this.resize = function() {
		this.aE = Math.floor((bx.by.i2() ? .1646 : .126) * 1.25 * aD.lh), this.aF = Math.floor(1.18 * this.aE), m8 = Math.floor(.04 * this.aE), gap = Math.floor(.035 * this.aE), mA = .04 * this.aE, m9 = this.aF, this.aF -= Math.floor(mJ * (this
			.aF - 2 * m8) / mC.length), fontSize = Math.floor(.7 * (m9 - m8) / mC.length);
		var hy = bK.en.i3(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.aE, canvas.height = this.aF,
			function(hy, aE) {
				for (var aW = 0; aW < mD.length; aW++) mD[aW] = bK.cd.mU(mC[aW], hy, aE)
			}((cd = canvas.getContext("2d", {
				alpha: !0
			})).font = hy, .575 * this.aE), bK.en.textBaseline(cd, 1), cd.lineWidth = 1, this.mR(), this.li(), mS.li(), mT()
	}, this.li = function() {
		u = aD.aE - this.aE - iN.gap
	}, this.mV = function() {
		v = iN.gap
	}, this.mR = function() {
		v = iN.gap + (mS.mW() && 0 !== dA.iR[d4.jL] && !d4.iA ? mS.aF + iN.gap : 0)
	}, this.iE = function(mX) {
		(mX || 100 <= mB) && (mB = 0, mT())
	}, this.md = function() {
		return mE[7]
	}, this.mc = function(value) {
		var me = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * me) / 1e3);
		return value < 10 ? me + ":0" + value : me + ":" + value
	}, this.kK = function() {
		var n0, per;
		mF[0] && d4.mm - d4.mN !== mE[0] && (mE[0] = d4.mm - d4.mN, mB++), mK.mL - mE[0] !== mE[1] && (mE[1] = mK.mL - mE[0], mB++), this.mh(), (n0 = k5.n1(d4.jL)) !== mE[5] && (mE[5] = n0, mB++), mO(), mE[7] += n.n2, n0 = mP(7), mG !== n0 && (
			mG = n0, mB += 100), n0 = d4.jD ? kk.mo() : dA.j8[mp[0]], per = eO.eP(1e4 * n0, Math.max(d4.kD, 1)), mE[3] = n0, mE[4] !== per && (mB++, mE[4] = per), 8 === d4.mr && function() {
			for (var aW = 0; aW < 2; aW++)
				if (!bK.dl.mz(aW)) return mv.mw.mx(), 1;
			return
		}() || mE[3] < d4.kD || ! function() {
			for (var aW = mK.mL - 1; 0 <= aW; aW--)
				if (0 < dA.ks[mK.my[aW]].length) return;
			return 1
		}() || d5.ao.mu().length || d4.jD && kk.mo(1) < d4.kD || mv.mw.mx()
	}, this.mh = function() {
		mF[2] && d4.mN !== mE[2] && (mE[2] = d4.mN, mB += 2 === d4.fL ? 100 : 1)
	}, this.mq = function() {
		return mE[3] === d4.kD
	}, this.n3 = function(aW) {
		var hL, n4, m6;
		return 2 !== d4.fL && (aW % 2 == 1 && (fX.iE(1, 1), n.a5 = !0), aW === d4.n5 ? (mH = 0, mT(), !1) : (-1 !== aW || 0 !== mI) && (n4 = mH, mH = d4.g2 ? aW / d4.n5 : (m6 = performance.now(), 0 <= aW && (hL = m6 - 392 * aW, mI = 0 === aW ||
			hL < mI ? hL : mI), 1 < (mH = (m6 - mI) / (392 * d4.n5)) ? 1 : mH), mT(), mH !== n4))
	}, this.a6 = function() {
		a7.drawImage(canvas, u, v)
	}
}

function n6() {
	this.ll = function() {
		return bx.by.i2() ? 2 : 1
	}
}

function el(n7, ed) {
	var aY = document.createElement("div");
	this.n8 = aY, this.resize = function() {
		aY.style.padding = bK.en.ju(iN.n9), aY.style.lineHeight = bK.en.ju(bK.en.jx(.035))
	}, n7.style.overflowX = "hidden", n7.style.overflowY = "auto", aY.innerHTML = ed, n7.appendChild(aY)
}

function nA() {
	var aE, aF, nB;

	function nc(nd, bX, na, nG, nV) {
		bX = nb(nd, bX + 1 + 2 * nG & 3);
		! function(nd, ne) {
			return 1 < Math.abs(nd % aE - ne % aE) || 1 < Math.abs(nh(nd) - nh(ne))
		}(nd, bX) && 0 === nV[bX << 2] && (nV[bX << 2] = na)
	}

	function nh(nD) {
		return Math.floor((nD + .5) / aE) % aF
	}

	function nb(nD, bX) {
		return nD + nB[bX]
	}
	this.gP = function(ak) {
		var aW, nC, e4, nE, nH = gD;
		for (bE.bA.nI(bE.bA.nJ(ak)), l.nK.nL[l.gF].aE = l.aH = aE = nH.gE(12), l.nK.nL[l.gF].aF = l.aJ = aF = nH.gE(12), nB = [-aE, -1, aE, 1], l.aL = document.createElement("canvas"), l.aL.width = l.aH, l.aL.height = l.aJ, l.nQ = l.aL
			.getContext("2d", {
				alpha: !1
			}), l.nR = l.nT = null, l.nR = l.nQ.getImageData(0, 0, l.aH, l.aJ), l.nT = l.nR.data, bK.nU.gq(l.nT), e4 = nH.gE(12), nC = nH.gE(5), nE = nN(aE * aF - 1), aW = 0; aW < e4; aW++) ! function(me, nD, nF, nG) {
			var aW, bX, nH = gD,
				nV = l.nT,
				nW = nD,
				nX = nD,
				nY = 0,
				nZ = 1 + nF,
				na = 2 - nF;
			for (nV[nD << 2] = nZ, aW = 0; aW < me; aW++) bX = nH.gE(2), nD = nb(nD, bX), nV[nD << 2] === nZ ? nY % 2 == 1 && nc(nX, nY + 2 * nG + 3, na, nG, nV) : nV[nD << 2] = nZ, nc(nD, bX, na, nG, nV), nc(nX, bX, na, nG, nV), nX = nD,
				nY = bX;
			nb(nD, 0) === nW ? (nc(nD, 0, na, nG, nV), nc(nW, 0, na, nG, nV)) : nb(nD, 1) === nW && (nc(nD, 0, na, nG, nV), nc(nW, 2, na, nG, nV));
			0 === me && (nc(nW, 0, na, nG, nV), nc(nW, 2, na, nG, nV))
		}(nH.gE(nC), nH.gE(nE), 1 === nH.gE(1), 1 === nH.gE(1));
		var u, v, cy, ni, nj, nk, nV = l.nT,
			nl = !0,
			nm = l.nK.nL[l.gF].nm,
			nn = l.nK.nL[l.gF].nn;
		for (v = 0; v < aF; v++)
			for (ni = !0, nj = nl, u = nk = 0; u < aE; u++) cy = 4 * v * aE + 4 * u, nk <= u && 0 < nV[cy] && (nj = 2 === nV[cy], ni) && (ni = !1, nj !== nl) ? (nl = nj, nk = u + 1, u = -1) : (nj ? (nV[cy] = nn[0], nV[1 + cy] = nn[1], nV[2 +
				cy] = nn[2]) : (nV[cy] = nm[0], nV[1 + cy] = nm[1], nV[2 + cy] = nm[2]), nV[3 + cy] = 255);
		l.nQ.putImageData(l.nR, 0, 0), l.m = !0, l.nS.c(), n.a5 = !0
	}
}

function no() {
	this.np = function(c4) {
		var username = bn.buffer.data[122].value.slice(0, 20),
			username = (l7.eH(24 + 16 * username.length + 18), l7.eK(1, 0), l7.eK(6, 1), l7.eK(10, lT.nq), l7.eK(2, bn.buffer.data[158].value), cr.cs.la(username), bK.color.ns(bn.bf.nt()));
		l7.eK(6, username[0]), l7.eK(6, username[1]), l7.eK(6, username[2]), cr.bf.g9 = c4, cr.bf.send(c4, l7.eG)
	}, this.nu = function(nv, nw) {
		lH.c(), lH.eK(1, 0), lH.eK(6, 2), lH.eK(3, nv), 2 === nv ? lH.eK(2, nw) : 3 === nv ? b9.gO.iX(nw, 7, lH) : 5 === nv && (lH.eK(3, nw.id), lH.eK(3, nw.value), lH.eK(30, nw.bC)), cr.bf.send(cr.bf.g9, lH.lI())
	}
}

function nx() {
	var ag, mX = !1,
		ny = !1,
		nz = -1e4,
		o0 = -1,
		o1 = 0;

	function resize(o8) {
		ag = 0, aN.o9() && (o5(o8) || mX) && (mX = !1, iN.resize(), oA.oB.resize(), d.c(), x.c(), w.resize(), y.resize(), a9.resize(), cu.resize(), h.resize(), 1 <= d4.fL ? (fX.resize(!1), mS.resize(), mY.resize(), fY.resize(), fZ.resize(), eX
			.resize(), fT.resize(), fM.resize(), fU.resize(), fS.resize(), oC.resize(), fQ.resize(), fO.resize(), oD.resize(), fP.resize(), kk.resize(), fY.oE()) : (bz.q(), bz.a3()), n.a5 = !0)
	}

	function o4(hB) {
		return hB && 128 < hB ? Math.floor(hB) : 128
	}

	function o5(o8) {
		var aE, aF, oG, oI, lr;
		if (!(0 < aD.fo)) return oI = o4(document.documentElement.clientWidth), lr = o4(window.visualViewport && 2 !== bx.id ? window.visualViewport.height : document.documentElement.clientHeight), aE = oI, aF = lr, oG = 0 !== bx.id || aE < aF ?
			700 : 1200, oG = Math.min(oG / ((aE + aF) / 2), 1), oG = 0 === bn.buffer.data[1].value ? 2 * oG / 3 : Math.min(oG + (bn.buffer.data[1].value - 1) * (1 - oG) / 2, 1), aD.fJ = (window.devicePixelRatio || 1) * oG, __fx.hoveringTooltip
			.canvasPixelScale = aD.fJ, o8 && !ny ? (ny = !0, h.removeChild(document.body, f0)) : ny && (ny = !1, document.body.appendChild(f0)), aE = Math.floor(.5 + oI * aD.fJ), aF = Math.floor(.5 + lr * aD.fJ), aE !== aD.aE || aF !== aD.aF ? (
				aD.aE = aE, aD.aF = aF, aD.min = oL(aE, aF), aD.max = oM(aE, aF), aD.lh = eO.eP(aE + aF, 2), aD.o2 = aE / aF, f0.width = aE, f0.height = aF, f0.style.width = oI + "px", f0.style.height = lr + "px", o0 = n.o + 1e3, 1) : void 0
	}
	this.aE = 0, this.aF = 0, this.min = 0, this.max = 0, this.lh = 0, this.o2 = 1, this.fJ = 1, this.fo = 0, this.o3 = function() {
		this.aE = o4(document.documentElement.clientWidth) + 2, this.aF = o4(document.documentElement.clientHeight) + 2
	}, this.c = function() {
		ag = 1, f0 = document.getElementById("canvasA"), 2 === bx.id && (f0.style.webkitUserSelect = "none"), (a7 = f0.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, o5(0)
	}, this.kK = function() {
		50 <= ++ag && resize(0), -1 === o0 || n.o < o0 || (o1++, o0 = -1, n.o + 8e3 <= 2e3 * o1 ? console.log("error 3748") : bx.by.setState(15))
	}, this.o7 = function(gz) {
		mX = !0, resize(gz)
	}, this.g5 = function() {
		nz + 1e3 > n.o || (nz = n.o, resize(0))
	}
}

function oN() {
	var oP;

	function oS(player) {
		var fn, k4;
		return bK.dl.iS(player) && player < d4.j6 ? 0 : (fn = oP[eO.eP((d4.jW - 1) * dA.j8[player], d4.kD)], n.kg() < 1920 && (fn = Math.max(eO.eP(100 * (13440 - 6 * n.kg()), 1920), fn)), k4 = k5.k6(player), dA.k9[player] > k4 && (fn -= eO.eP(2 *
			fn * (dA.k9[player] - k4), k4)), Math.min(Math.max(fn, 0), 700))
	}

	function os(m5) {
		for (var j8 = dA.j8, my = mK.my, aW = mK.mL - 1; 0 <= aW; aW--) {
			var nD = my[aW];
			bK.dl.oa(nD, eO.eP(m5 * j8[nD], 32))
		}
	}

	function op() {
		var nW = d4.jL;
		dF.ow[0] = dA.k9[nW] - dA.ox[nW]
	}

	function or(cW) {
		var nW = d4.jL,
			nW = dA.k9[nW] - dA.ox[nW] - dF.ow[0];
		k5.oO += nW, ob.oy[cW] += nW
	}
	this.oO = 0, this.oQ = function() {
		for (var e4 = d4.jW, aW = (oP = new Uint16Array(e4), 0); aW < e4; aW++) oP[aW] = 100 + oR(eO.eP(25600 * aW, e4 - 4), 9)
	}, this.c = function() {
		(this.oO = 0) === d4.data.iIncomeType ? this.n1 = oS : 1 === d4.data.iIncomeType ? this.n1 = function(player) {
			return eO.eP(d4.data.iIncomeValue * oS(player), 64)
		} : this.n1 = function(player) {
			return eO.eP(d4.data.iIncomeData[player] * oS(player), 64)
		}
	}, this.kK = function() {
		if (n.kg() % 10 == 9 && (k5.oO = 0, function() {
				op();
				for (var my = mK.my, k9 = dA.k9, aW = mK.mL - 1; 0 <= aW; aW--) {
					var nD = my[aW],
						oq = eO.eP(k5.n1(nD) * k9[nD], 1e4);
					bK.dl.oa(nD, Math.max(oq, 1))
				}
				or(9)
			}(), function() {
				if (0 !== d4.data.aIncomeType) {
					if (op(), 1 === d4.data.aIncomeType)
						for (var j8 = dA.j8, my = mK.my, m5 = d4.data.aIncomeValue, aW = mK.mL - 1; 0 <= aW; aW--) {
							var nD = my[aW];
							bK.dl.oa(nD, eO.eP(m5 * j8[nD], 128))
						} else 2 === d4.data.aIncomeType && function() {
							for (var j8 = dA.j8, my = mK.my, m5 = d4.data.aIncomeData, aW = mK.mL - 1; 0 <= aW; aW--) {
								var nD = my[aW];
								bK.dl.oa(nD, eO.eP(m5[nD] * j8[nD], 128))
							}
						}();
					or(18)
				}
			}(), n.kg() % 100 == 99)) {
			if (op(), 0 === d4.data.tIncomeType) os(32);
			else if (1 === d4.data.tIncomeType) os(d4.data.tIncomeValue);
			else
				for (var j8 = dA.j8, my = mK.my, m5 = d4.data.tIncomeData, aW = mK.mL - 1; 0 <= aW; aW--) {
					var nD = my[aW];
					bK.dl.oa(nD, eO.eP(m5[nD] * j8[nD], 32))
				}
			or(8)
		}
	}, this.k6 = function(player) {
		return Math.min(100 * dA.j8[player], d4.oU)
	}, this.oV = function(player, oW) {
		oX.oY(player, oW, dF.oZ[0], 0), bK.dl.oa(oW, dF.oZ[0]), ob.oc(player, oW), oD.od(player, dF.oZ[0] + dF.oZ[1]), oD.oe(oW, dF.oZ[0]), bK.dl.og(player)
	}, this.oh = function() {
		for (var e4 = mK.mL, oi = mK.my, me = 0, oj = dA.k9, aW = 0; aW < e4; aW++) me += oj[oi[aW]];
		return me
	}, this.ok = function(ol) {
		for (var nD, e4 = mK.mL, oi = mK.my, me = 0, oj = dA.k9, jF = jE.jF, aW = 0; aW < e4; aW++) jF[nD = oi[aW]] === ol && (me += oj[nD]);
		return me
	}
}

function oz() {
	this.p0 = new p1, this.p2 = new p3, this.p4 = new p5, this.c = function() {
		d4.g2 || this.p0.c()
	}, this.kK = function() {
		d4.g2 || (this.p0.kK(), 3 !== h.l2) || n.kg() % 15 != 5 && 2 !== d4.fL || h.p7().p8()
	}, __fx.replay.restartReplay = () => this.p9(), this.p9 = function() {
		var pA = 0 !== d4.fL,
			pB = d4.pC;
		pA || bz.g(), d4.pD.pE(), d4.data.canvas = null, cr.bf.close(cr.bf.fH, 3257), cr.bf.fH = 0, d4.data.isReplay = 1, d4.pF(), pA && (d4.pC = pB)
	}, this.pG = function(ak) {
		var aW = ak.indexOf("=");
		return 0 <= aW ? ak.substring(aW + 1) : ak
	}, this.pH = function(ak) {
		return ak
	}, __fx.replayHistory.load = saved => {
		saved = uY.pG(saved), uY.p4.gP(saved) && uY.p9()
	}
}

function pI() {
	var pJ, pK = new Uint8Array(5),
		pL = new Uint8Array(5);
	this.pM = new pN, this.c = function() {
		for (var hB = bn.buffer.data[119].value, aW = 0; aW < pK.length; aW++) pK[aW] = (hB >> 2 * aW) % 4
	}, this.pO = function() {
		pJ = [L(18), "", L(19, [fp.pP[28]]), L(20, [fp.pP[26]]), L(21, [fp.pP[0]])], this.pM.c()
	}, this.kK = function() {
		this.pM.kK()
	}, this.pQ = function(id) {
		1 < id && b1.b2() || ! function(cW) {
			if (3 === pK[cW] || 1 === pL[cW]) return;
			if (pL[cW] = 1, !(Math.random() < .6)) {
				pK[cW]++;
				for (var hB = 0, aW = 0; aW < pK.length; aW++) hB += pK[aW] << 2 * aW;
				bn.ih.pT(119, hB)
			}
			return 1
		}(id) || eX.pS(pJ[id])
	}
}

function pU() {
	this.oB = new jq, this.c = function() {
		this.oB.resize()
	}
}

function pV() {
	var pW;

	function ps(pt, aP, u, v, globalAlpha) {
		l.nQ.save(), l.nQ.globalAlpha = globalAlpha, l.nQ.imageSmoothingEnabled = !1, l.nQ.scale(aP, aP), l.nQ.drawImage(pt, Math.floor(u * (l.aH / aP - pt.width)), Math.floor(v * (l.aJ / aP - pt.height))), l.nQ.restore()
	}
	this.pX = 0, this.pY = 0, this.pZ = 0, this.pa = 0, this.c = function() {
		(pW = new Array(l.pb))[0] = {
			aE: [0, 5e3, 8e3, 1e4],
			fn: [220, 250, 255, 220],
			hL: [190, 220, 0, 0],
			eN: [170, 200, 0, 0]
		}, pW[1] = {
			aE: [0, 4e3, 5e3, 6e3, 1e4],
			fn: [25, 0, 100, 0, 25],
			hL: [25, 0, 0, 0, 25],
			eN: [25, 0, 0, 0, 25]
		}, pW[2] = {
			aE: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			fn: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			hL: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eN: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, pW[3] = {
			aE: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			fn: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			hL: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eN: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, pW[4] = {
			aE: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			fn: [10, 10, 20, 10, 10, 170, 212],
			hL: [20, 20, 60, 100, 100, 110, 170],
			eN: [70, 70, 160, 30, 30, 60, 120]
		}, pW[5] = {
			aE: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			fn: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			hL: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eN: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, pW[6] = {
			aE: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			fn: [10, 10, 60, 255, 255, 200, 200],
			hL: [10, 10, 60, 255, 255, 200, 200],
			eN: [80, 80, 255, 255, 255, 200, 200]
		}, pW[7] = {
			aE: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			fn: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			hL: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eN: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, pW[8] = {
			aE: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			fn: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			hL: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eN: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, pW[9] = {
			aE: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			fn: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			hL: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eN: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, pW[20] = {
			aE: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			fn: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			hL: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eN: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, pW[21] = {
			aE: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			fn: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			hL: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eN: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.pc = function() {
		var pr, aW, ba, pk, pd = function() {
				var pd;
				return l.aL = document.createElement("canvas"), l.aL.width = l.aH, l.aL.height = l.aJ, l.nQ = l.aL.getContext("2d", {
					alpha: !1
				}), pd = l.nQ.getImageData(0, 0, l.aH, l.aJ), l.nT = pd.data, pd
			}(),
			aE = pW[l.gF].aE,
			fn = pW[l.gF].fn,
			hL = pW[l.gF].hL,
			eN = pW[l.gF].eN,
			hB = pi.pj(),
			e4 = aE.length - 2,
			pl = new Array(1 + e4),
			pm = new Array(1 + e4),
			pn = new Array(1 + e4),
			po = new Array(1 + e4);
		for (ba = e4; 0 <= ba; ba--) pl[ba] = aE[ba + 1] - aE[ba], pm[ba] = fn[ba + 1] - fn[ba], pn[ba] = hL[ba + 1] - hL[ba], po[ba] = eN[ba + 1] - eN[ba];
		for (aW = l.aH * l.aJ - 1; 0 <= aW; aW--)
			for (ba = e4; 0 <= ba; ba--)
				if (hB[aW] >= aE[ba]) {
					pk = hB[aW] - aE[ba], l.nT[4 * aW] = fn[ba] + pp(pm[ba] * pk, pl[ba]), l.nT[4 * aW + 1] = hL[ba] + pp(pn[ba] * pk, pl[ba]), l.nT[4 * aW + 2] = eN[ba] + pp(po[ba] * pk, pl[ba]), l.nT[4 * aW + 3] = 255;
					break
				} l.nQ.putImageData(pd, 0, 0), l.pg(l.gF) && aN.o9() && l.pg(l.gF) && (pd = aN.aO("arena"), pr = aN.aO("territorial.io"), ps(pd, 5, .5, .5, .1), ps(pr, 2, .5, .45, .1)), l.m = !0, n.a5 = !0
	}, this.pu = function() {
		for (var nD, u, v, pv, pw, px, pY = 0, aE = l.aH, aF = l.aJ, pk = aE * aF * 4, py = pz, q0 = l.nT, aW = aE - 1; 0 <= aW; aW--) py[(nD = aW << 2) + 2] = py[pk - nD - 2] = 3;
		for (pk = 4 * aE, aW = aF - 1; 0 <= aW; aW--) py[(nD = aW * pk) + 2] = py[nD + pk - 2] = 3;
		for (pv = aE - 1, pw = aF - 1, v = 1; v < pw; v++)
			for (pk = v * aE, u = 1; u < pv; u++) px = 1 - (q0[(nD = pk + u << 2) + 2] > q0[nD + 1] && q0[nD + 2] > q0[nD]), py[nD + 2] = 6 - 5 * px, pY += px;
		this.pX = (aE - 2) * (aF - 2), this.pa = 0, l.jI(l.gF) && (l.pa.q1(), l.pa.q2(4, 5)), this.pY = d4.kD = pY - this.pa, this.pZ = this.pX - this.pY - this.pa, this.pZ && (l.pa.q2(6, 2), l.pa.q3())
	}
}

function ii() {
	this.pT = function(cW, value) {
		2 !== bn.buffer.data[cW].type && (value = Math.floor(value)), bn.buffer.data[cW].value !== value && (bn.buffer.q4(cW, value), 0 === cW ? (h.i(), lY.c(), h.gQ(2)) : 1 === cW ? aD.o7(1) : 2 === cW ? aD.o7(0) : 5 === cW && (bK.en.q5(), aD
			.o7(0)))
	}, this.q6 = function() {
		for (var data = bn.buffer.data, aW = 0; aW < 100; aW++) data[aW] && bn.buffer.q4(aW, data[aW].hs);
		bK.en.q5(), aD.o7(1)
	}, this.q7 = function() {
		for (var data = bn.buffer.data, aW = 0; aW < data.length; aW++) data[aW] && bn.buffer.pT(aW, data[aW].hs)
	}, this.q8 = function() {
		for (var eN = bn.buffer, aW = 128; aW < 135; aW++) eN.q4(aW, eN.data[aW].hs)
	}, this.q9 = function(data) {
		bn.ih.pT(109, data.qA), bn.ih.pT(107, data.qB), bn.ih.pT(108, data.qC), bn.ih.pT(112, data.qD), bn.ih.pT(111, data.qE), bn.ih.pT(113, data.qF), bn.ih.pT(135, data.qG), bn.ih.pT(136, data.qH), bn.ih.pT(137, data.qI), bn.ih.pT(138, data
			.qJ), bn.ih.pT(139, data.qK), bn.ih.pT(141, data.qL), bn.ih.pT(142, data.qM), bn.ih.pT(143, data.qN), bn.ih.pT(144, data.qO)
	}
}

function qP() {
	this.qQ = null, this.a5 = !1, this.o = 0, this.n2 = 56;
	var qR = 0;

	function qT() {
		n.o = qR = performance.now(), n.qQ.kK(), window.requestAnimationFrame(qT)
	}
	this.c = function() {
		this.qS(), window.requestAnimationFrame(qT), this.o = performance.now()
	}, this.pO = function() {
		d4.g2 ? (this.qQ = new qU, this.qQ.c()) : d4.iC ? this.qQ = new qV : (this.qQ = new qW, this.qQ.c())
	}, this.qS = function() {
		this.qQ = new qX, this.a5 = !0
	}, this.kK = function() {
		this.qQ.qY++
	}, this.kg = function() {
		return this.qQ.qY
	}, this.qZ = function() {
		var m6 = performance.now();
		m6 < qR + 1e3 || (this.o = m6, this.qQ.kK())
	}
}

function qa() {
	this.c = function() {
		this.e7 = [], this.cW = 0
	}, this.lI = function() {
		return new Uint8Array(this.e7)
	}, this.eK = function(qb, value) {
		for (var e7 = this.e7, cZ = this.cW + qb - 1, qc = 1 + (cZ >> 3); e7.length < qc;) e7.push(0);
		for (var aW = this.cW; aW <= cZ; aW++) e7[aW >> 3] |= (value >> cZ - aW & 1) << 7 - (7 & aW);
		this.cW += qb
	}, this.oQ = function(e7, iY, qd) {
		var qe = bK.nU.hP(e7);
		this.eK(iY, qe);
		for (var aW = 0; aW < qe; aW++) this.eK(qd, e7[aW])
	}, this.qf = function(e7, iY, qg) {
		var qe = bK.nU.hP(e7);
		this.eK(iY, qe);
		for (var aW = 0; aW < qe; aW++) this.qh(e7[aW], qg)
	}, this.qh = function(ak, iY) {
		var e4 = ak.length;
		this.eK(iY, e4);
		for (var aW = 0; aW < e4; aW++) this.eK(16, ak.charCodeAt(aW))
	}, this.qi = function(pt) {
		var qj = (pt = pt.toDataURL()).split(",");
		if (qj.length < 2) console.log("error 266");
		else {
			pt = bK.bL.qk(pt = qj[qj.length - 1], "/", "_"), pt = bK.bL.qk(pt, "\\+", "-");
			var pt = bK.bL.qk(pt, "=", ""),
				ql = bE.bA.nJ(pt),
				e4 = ql.length;
			this.eK(30, e4);
			for (var aW = 0; aW < e4; aW++) this.eK(6, ql[aW])
		}
	}
}

function ek(title, l0, qm) {
	var qn = document.createElement("div"),
		qo = document.createElement("div"),
		qp = document.createElement("div"),
		qq = document.createElement("div"),
		qr = document.createElement("div");
	this.em = qp, this.eo = l0, this.show = function() {
			!1 !== qm ? document.body.appendChild(qn) : (document.body.appendChild(qo), document.body.appendChild(qq))
		}, this.s = function() {
			!1 !== qm ? h.removeChild(document.body, qn) : (h.removeChild(document.body, qo), h.removeChild(document.body, qq))
		}, this.qx = function() {
			var qy = bK.en.jx(.1),
				qz = bK.en.jx(.08 + .04 * (aD.o2 < 1), .3);
			return {
				qy: qy,
				qz: qz,
				r0: aD.aF / aD.fJ - qy - qz
			}
		}, this.resize = function(r1) {
			var e4 = l0.length,
				r2 = this.qx(),
				qy = r2.qy,
				qz = r2.qz;
			for (qo.style.height = bK.en.ju(qy), bK.en.r3(qo, 2), qq.style.top = bK.en.ju(aD.aF / aD.fJ - qz), qq.style.height = bK.en.ju(qz), bK.en.r3(qq, 8), qp.style.top = bK.en.ju(qy), qp.style.height = qp.style.maxHeight = bK.en.ju(r2.r0), qo
				.style.font = bK.en.i3(0, bK.en.jx(.02, .15)), qq.style.font = bK.en.i3(0, bK.en.jx(.02, .7)), qp.style.font = bK.en.i3(0, bK.en.jx(.02, .35)), aW = 1; aW < e4; aW++) bK.en.r3(l0[aW].button, 4);
			for (var r4 = 0, aW = 0; aW < e4; aW++) r4 += l0[aW].button.offsetWidth;
			if (r1 && r4 < qq.offsetWidth)
				for (aW = 0; aW < e4; aW++) l0[aW].button.style.width = (100 * l0[aW].button.offsetWidth / r4).toFixed(2) + "%";
			else
				for (aW = 0; aW < e4; aW++) l0[aW].button.style.width = "auto";
			qq.r5 && (qq.scrollLeft = qq.r5), r1 || this.resize(!0)
		}, this.a6 = function() {
			var r2 = this.qx(),
				ag = aD.fJ;
			a7.fillStyle = aB.i6, a7.fillRect(0, ag * r2.qy, aD.aE, ag * r2.r0)
		}, qn.style.position = "absolute", qn.style.top = "0", qn.style.left = "0", qn.style.width = "100%", qn.style.height = "100%", qo.style.position = "absolute", qo.style.top = "0", qo.style.left = "0", qo.style.width = "100%", qo.style
		.display = "flex", qo.style.backgroundColor = aB.i6, qq.style.position = "absolute", qq.style.left = "0", qq.style.width = "100%", bK.en.qs(qq), qr.style.height = qr.style.maxHeight = "100%", qp.style.position = "absolute", qp.style.width =
		"100%", qp.style.backgroundColor = aB.i6,
		function() {
			for (var aW = 0; aW < l0.length; aW++) l0[aW].button.style.height = "100%", l0[aW].button.style.padding = "0.0em 0.9em"
		}();
	for (var aW = 0; aW < l0.length; aW++) qr.appendChild(l0[aW].button);
	qo.appendChild(function() {
		var qw = document.createElement("h1");
		return qw.textContent = title, qw.style.margin = "auto", qw.style.fontSize = 18 <= title.length && aD.aF > aD.aE ? "1.8em" : "2.3em", qw.style.fontFamily = "Arial Black, system-ui", qw
	}()), qq.appendChild(qr), !1 !== qm && (qn.appendChild(qp), qn.appendChild(qo), qn.appendChild(qq))
}

function r6() {
	this.j4 = 28, this.iq = 0, this.it = null;
	var r7 = this.j5 = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function rE(jw, rI) {
		var u, v, dP, rJ, pt = bK.en.nM(jw, jw),
			rL = bK.en.getContext(pt, !0),
			pd = bK.en.getImageData(rL, jw, jw),
			nV = pd.data,
			me = (jw >> 1) - .5,
			rM = .5 + me;
		for (rM *= rM, v = 0; v < jw; v++)
			for (u = 0; u < jw; u++) rJ = (rJ = u - me) * rJ + (rJ = v - me) * rJ, nV[dP = 4 * (v * jw + u)] = rI[0], nV[1 + dP] = rI[1], nV[2 + dP] = rI[2], nV[3 + dP] = (rM - rJ) * rI[3] / rM;
		return rL.putImageData(pd, 0, 0), pt
	}

	function rW(aW, rL, pt, jw) {
		var highlight, u, v;
		0 !== dA.iR[aW] && 0 !== dA.j8[aW] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aW]) && (jw *= 2), u = dA.j9[aW] + dA.jA[aW] + 1 - jw - 2 >> 1, v = dA.jB[aW] + dA.jC[aW] + 1 - jw - 2 >> 1, highlight ? rL
			.drawImage(pt[d4.jD ? 9 === d4.mr && 5 === k8.k1[aW] ? 3 : jE.jF[aW] : aW < d4.j6 ? 1 : 0], u, v, jw, jw) : rL.drawImage(pt[d4.jD ? 9 === d4.mr && 5 === k8.k1[aW] ? 3 : jE.jF[aW] : aW < d4.j6 ? 1 : 0], u, v))
	}
	this.c = function() {
		var m2;
		this.iq = 700,
			function(m2) {
				var jw = m2.j4;
				if (m2.j5 = [], r7 = [], d4.jD) {
					for (var aW = 0; aW <= d4.rD; aW++) m2.j5.push(rE(jw, jE.rF[jE.rG[aW]])), r7.push(rE(jw >> 1, jE.rF[jE.rG[aW]]));
					9 === d4.mr && r7.push(rE(jw, jE.rF[1]))
				} else m2.j5.push(rE(jw, jE.rF[7])), m2.j5.push(rE(jw, jE.rF[4])), r7.push(rE(jw >> 1, jE.rF[7]))
			}(this),
			function(m2, rS) {
				var aW, it = m2.it,
					rL = bK.en.getContext(it, !0),
					e4 = d4.jW,
					jw = m2.j4 >> 1;
				rL.imageSmoothingEnabled = !1, rL.setTransform(1, 0, 0, 1, 0, 0), rS && rL.clearRect(0, 0, it.width, it.height);
				if (9 === d4.mr) {
					jw <<= 1;
					m2 = rU.rV[5];
					for (aW = e4 - m2; aW < e4; aW++) rW(aW, rL, r7, jw);
					e4 -= m2, jw >>= 1
				}
				for (aW = d4.j6; aW < e4; aW++) rW(aW, rL, r7, jw)
			}(this, null !== (m2 = this).it && m2.it.width === l.aH - 2 && m2.it.height === l.aJ - 2 || (m2.it = bK.en.nM(l.aH - 2, l.aJ - 2), !1)), d4.iA || this.rC()
	}, this.rH = rE, this.rC = function() {
		for (var e4 = d4.j6, jw = this.j4, j5 = this.j5, rL = bK.en.getContext(this.it, !0), aW = 0; aW < e4; aW++) rW(aW, rL, j5, jw)
	}
}

function rX() {
	this.kK = function() {
		if (n.kg() % 51 == 45)
			for (var e4 = d5.bf.d6, db = d5.bf.db, dy = d5.bf.dy, dU = d5.bf.dU, dn = d5.bf.dn, rZ = k8.rZ, k1 = k8.k1, aW = 0; aW < e4; aW++) {
				var dx, player, rc, dE = db[aW];
				dE % 64 == 6 || (dx = dy[aW], (player = d5.ao.ra(dx[dx.length - 1])) < 0) || !bK.dl.dm(player, dn[aW] >> 3) || kH.kI(1e3) >= rZ[k1[player]] || ! function(rf, dx) {
					for (var e4 = dx.length - 1, dz = d5.bf.e0[rf], e3 = 0, aW = dz + 1; aW < e4; aW++) e3 += dI.dt(dx[aW], dx[aW + 1]);
					return (e3 += dI.dt(dI.dg(d5.bf.dh[rf]), dx[dz + 1])) <= 60
				}(aW, dx) || (rc = dU[aW], 64 <= dE && d5.dc.rd(player, rc)) || function(player, dx, rc, rf, dE) {
					d5.eD.d3(player) && bK.dl.rg(player, k8.rh[k8.k1[player]], 32, 0) && (d5.bf.db[rf] = 64 + dE % 64, d5.dc.dd(rc, d5.bf.de), dF.e7[0] = d5.e8.e9(dx), dF.dG[1] = 6, bK.dl.og(player), d5.bf.ri(player))
				}(player, dx, rc, aW, dE)
			}
	}
}

function rj() {
	this.bf = new rk, this.rl = new rm, this.rn = new ro, this.rp = new no, this.cs = new l5, this.rq = new rr, this.rs = new rt, this.ru = new rv, this.rw = new rx, this.ry = new g7, this.rz = new s0, this.s1 = new s2, this.s3 = new s4, this.c =
		function() {
			this.bf.c()
		}
}

function s5(s6, s7, s8, s9, sA, sB) {
	var sC = document.createElement("div"),
		sD = document.createElement("div"),
		sE = document.createElement("div"),
		sF = document.createElement("div"),
		sG = document.createElement("div"),
		sH = document.createElement("div"),
		sI = document.createElement("div"),
		sJ = document.createElement("div"),
		sK = document.createElement("span"),
		sL = document.createElement("div");
	this.sM = new sN(sA, sB), this.sO = new sP(sB), this.sQ = [s6, s7, s8, s9], this.sW = function(gC) {
		gC = (gC / 10).toFixed(1) + "%";
		sJ.style.width = gC, sK.innerHTML = gC
	}, this.sX = function() {
		this.sO.s(sH), this.sM.show(sH)
	}, this.sY = function() {
		this.sM.s(sH), this.sO.show(sH)
	}, this.sZ = function() {
		return sD
	}, this.show = function() {
		document.body.appendChild(sC)
	}, this.s = function() {
		h.removeChild(document.body, sC)
	}, this.resize = function(sa) {
		var sb = 1 - .4 * bx.by.i2() * (aD.aE > 1.6 * aD.aF),
			sc = bK.en.jx(.05 * sb),
			sd = aD.aF > aD.aE,
			se = bK.en.jx(.06 * sb + .03 * sd),
			sf = bK.en.jx(.08 * sb + .03 * sd),
			sg = bK.en.jx(.04 + .02 * sd),
			sd = bK.en.jx(.02 * sb + .01 * sd),
			si = bK.en.jx(.025);
		sC.style.font = bK.en.i3(0, si), sG.style.font = bK.en.i3(0, .9 * si), sL.style.font = bK.en.i3(0, .9 * si), sb < 1 && (si = bK.en.i3(0, sb * si), sE.style.font = si, sG.style.font = si, sL.style.font = si, sI.style.font = si, sF.style
				.font = si), sD.style.height = bK.en.ju(sc), sD.style.font = bK.en.i3(0, .72 * sc), bK.en.r3(sD, 2), sE.style.top = bK.en.ju(sc), sE.style.height = bK.en.ju(sf), bK.en.r3(sE, 2), sF.style.font = bK.en.i3(0, sb * bK.en.jx(.02)), sF
			.style.top = bK.en.ju(sc + sf), sF.style.height = bK.en.ju(sg), bK.en.r3(sF, 2), sG.style.top = bK.en.ju(sc + sf + sg), sG.style.height = bK.en.ju(se), bK.en.r3(sG, 2), sH.style.top = bK.en.ju(sc + sf + sg + se), sH.style.height = bK
			.en.ju(aD.aF / aD.fJ - sc - sf - 2 * se - sg - sd), sI.style.top = bK.en.ju(aD.aF / aD.fJ - se - sd), sI.style.height = bK.en.ju(sd), bK.en.r3(sI, 8), sK.style.font = bK.en.i3(0, .8 * sd), sL.style.top = bK.en.ju(aD.aF / aD.fJ - se),
			sL.style.height = bK.en.ju(se), bK.en.r3(sL, 8), s6.resize(sE), s7.resize(sE), s8.resize(sE), s9.resize(sE), sa ? this.sM.resize(sH) : this.sO.resize()
	};
	sA = this;
	sC.style.position = "absolute", sC.style.top = "0", sC.style.left = "0", sC.style.width = "100%", sC.style.height = "100%", sC.style.backgroundColor = aB.sS, b1.b2() || (sC.style.backdropFilter = "blur(4px)", sC.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sC.style.display = "none"), sD.style.position = "absolute", sD.style.top = "0", sD.style.left = "0", sD.style.width = "100%", sD.style.display = "flex", sD.style.alignItems = "center", sD.translate = !1;
	for (var e7 = [sE, sF, sG, sL], aW = 0; aW < e7.length; aW++) e7[aW].style.position = "absolute", e7[aW].style.left = "0", e7[aW].style.width = "100%", bK.en.qs(e7[aW]);
	sH.style.position = "absolute", sH.style.left = "0", sH.style.width = "100%", sH.style.font = "inherit", sI.style.position = "absolute", sI.style.left = "0", sI.style.width = "100%", sJ.style.position = "absolute", sJ.style.top = "0", sJ.style
		.left = "0", sJ.style.height = "100%", sJ.style.width = "50%", sJ.style.backgroundColor = aB.sT, sK.innerHTML = "", sK.style.position = "absolute", sK.style.top = "50%", sK.style.left = "50%", sK.style.transform = "translate(-50%, -50%)", sK
		.translate = !1, sD.appendChild(function() {
			var oK = document.createElement("h1");
			return oK.textContent = L(22), oK.style.margin = "0 auto 0.15em auto", oK.style.fontFamily = "Arial Black, system-ui", oK.style.fontSize = "inherit", oK.style.fontWeight = "inherit", oK
		}()), sE.appendChild(s6.aY), sF.appendChild(s7.aY), sG.appendChild(s8.aY), sI.appendChild(sJ), sI.appendChild(sK), sL.appendChild(s9.aY), sC.appendChild(sD), sC.appendChild(sE), sC.appendChild(sF), sC.appendChild(sG), sC.appendChild(sH), sC
		.appendChild(sI), sC.appendChild(sL), sA.sO.show(sH)
}

function sk() {
	var hB, aE, aF, max, sl, sm, so, sp, sq, sr, ss, st, su, sv, sn = 1e4;

	function t4(t2, t3, e4) {
		var aW;
		for (so[0] = t2, aW = 1; aW < e4; aW++) so[aW] = so[aW - 1] + t3, t3 = so[aW] >= sn ? (so[aW] = sn - 1, -t3) : so[aW] < 0 ? (so[aW] = 0, -t3) : (t3 += 16384 <= kH.random() ? sm : -sm) < -sl ? -sl : sl < t3 ? sl : t3
	}

	function t6(u, v, t7, e4) {
		(t7 ? function(u, v, e4) {
			var aW;
			for (aW = 0; aW < e4; aW++) hB[v * aE + u + aW] = so[aW]
		} : function(u, v, e4) {
			var aW;
			for (aW = 0; aW < e4; aW++) hB[v * aE + u + aW * aE] = so[aW]
		})(u, v, e4)
	}

	function tA(value, e4) {
		var aW, tB, aK, gz = value - so[e4 - 1];
		if (0 != gz) {
			for (tB = 1 + eO.eP(Math.abs(gz), e4 - 1), tB = gz < 0 ? -tB : tB, so[e4 - 1] = value, aK = (aK = e4 - 1 - eO.eP(Math.abs(gz), Math.abs(tB))) < 1 ? 1 : e4 - 2 < aK ? e4 - 2 : aK, aW = e4 - 2; aK <= aW; aW--) so[aW] += gz - (e4 - 1 - aW) *
				tB;
			(gz < 0 ? function(e4) {
				var aW;
				for (aW = e4 - 2; 1 <= aW; aW--) so[aW] < 0 && (so[aW] = -so[aW] - 1)
			} : function(e4) {
				var aW;
				for (aW = e4 - 2; 1 <= aW; aW--) so[aW] >= sn && (so[aW] = 2 * sn - so[aW] - 1)
			})(e4)
		}
	}

	function tE(hF, hG, e4) {
		for (var aW = 0; aW < e4; aW++) hF[aW] = hG[aW]
	}

	function tF(e7) {
		for (var aW = 0; aW < e7.length - 1; aW++) e7[aW] = e7[aW + 1] - e7[aW];
		e7[e7.length - 1] = e7[e7.length - 3]
	}

	function tG(tH, gap, tI) {
		sp.push(tH), sq.push(gap), sr.push(tI)
	}
	this.eH = function(nw) {
		! function(nw) {
			var aW;
			for (aE = nw[0], aF = nw[1], sl = nw[2], sm = nw[3], hB = new Int16Array(aE * aF), max = aF < aE ? aE : aF, so = new Int16Array(max), sp = [], sq = [], sr = [], ss = new Array(aE), st = new Array(aF), aW = aE - 1; 0 <= aW; aW--) ss[
				aW] = !1;
			for (aW = aF - 1; 0 <= aW; aW--) st[aW] = !1;
			su = new Int16Array(aE), sv = new Int16Array(aF)
		}(nw),
		function(e4) {
			var t2 = kH.random() % sn,
				t3 = kH.random() % (2 * sl + 1) - sl;
			t4(t2, t3, e4)
		}(max), tE(sv, so, aF), t6(0, 0, !0, aE);
		var u, v, nw = hB[0],
			e4 = max,
			t3 = kH.random() % (2 * sl + 1) - sl;
		for (t4(nw, t3, e4), tE(su, so, aE), t6(0, 0, !1, aF), tF(su), tF(sv), t4(hB[aE - 1], su[aE - 1], aF), t6(aE - 1, 0, !1, aF), t4(hB[aE * (aF - 1)], sv[aF - 1], aE), tA(hB[aE * aF - 1], aE), t6(0, aF - 1, !0, aE), ss[aE - 1] = ss[0] = !0,
			st[aF - 1] = st[0] = !0, tG(0, aE, !0), tG(0, aF, !1), ! function() {
				var tK, tH;
				for (;;) {
					if (tK = function() {
							var aW, tK = sp.length - 1;
							for (aW = tK - 1; 0 <= aW; aW--) sq[aW] > sq[tK] && (tK = aW);
							return tK
						}(), sq[tK] < 5) return;
					tH = sp[tK] + eO.eP(sq[tK], 2), (sr[tK] ? function(u) {
						var e4, tN, aW, tO = 0,
							tP = 0;
						for (; tP < aF - 1;) {
							for (aW = tO + 1; aW < aF; aW++)
								if (st[aW]) {
									tP = aW;
									break
								} e4 = tP - tO + 1, t4(hB[u + aE * tO], 0 === tO ? su[u] : so[tN - 1] - so[tN - 2], e4), tA(hB[tP * aE + u], e4), t6(u, tO, !1, e4), tN = e4, tO = tP
						}
						ss[u] = !0
					} : function(v) {
						var e4, tN, aW, tO = 0,
							tP = 0;
						for (; tP < aE - 1;) {
							for (aW = tO + 1; aW < aE; aW++)
								if (ss[aW]) {
									tP = aW;
									break
								} e4 = tP - tO + 1, t4(hB[v * aE + tO], 0 === tO ? sv[v] : so[tN - 1] - so[tN - 2], e4), tA(hB[v * aE + tP], e4), t6(tO, v, !0, e4), tN = e4, tO = tP
						}
						st[v] = !0
					})(tH), tG(tH, sp[tK] + sq[tK] - tH, sr[tK]), sq[tK] = tH - sp[tK] + 1
				}
			}(), u = 0; u < aE; u++)
			if (!ss[u])
				for (v = 0; v < aF; v++) st[v] || ! function(u, v) {
					var value = hB[v * aE + u - 1] + hB[(v - 1) * aE + u],
						eL = 2;
					ss[u + 1] && (eL++, value += hB[v * aE + u + 1]);
					st[v + 1] && (eL++, value += hB[(v + 1) * aE + u]);
					hB[v * aE + u] = eO.eP(value, eL)
				}(u, v)
	}, this.pj = function() {
		return hB
	}, this.t0 = function() {
		hB = null
	}
}

function ei(tR, tS, tT, tU, tV) {
	var self, tW = document.createElement("button");

	function tc() {
		var ti;
		b1.b2() || (ti = bK.color.tj(tT), !1 !== tU && 0 < ti[0] && ti[0] < 255 && ti[0] === ti[1] && ti[0] === ti[2]) || (128 < ti[0] && 128 < ti[1] && 128 < ti[2] ? tW.style.backgroundColor = bK.color.tk(tT, -50) : tW.style.backgroundColor = bK
			.color.tk(tT, ti[3] && ti[3] < 120 ? 150 : 50))
	}

	function tb() {
		if (tU) {
			var ti = bK.color.tj(tT);
			if (ti[0] === ti[1] && ti[0] === ti[2]) return
		}
		tS && ((ti = tS(this)) ? 2 === ti && tc() : tl(this))
	}

	function te() {
		this.style.backgroundColor = tT
	}

	function td() {
		tl(this)
	}

	function tl(bX) {
		bX.style.backgroundColor = tT, bX.blur()
	}
	this.button = tW, this.ep = tS, this.tX = tT, this.ta = function(tf) {
		tf = 1.1 - Math.min(.01 * tR.length, .6) + .2 * tf;
		tW.style.fontSize = tf.toFixed(1) + "em"
	}, this.tZ = function(ag) {
		ag ? 1 === ag ? ag = aB.th : 2 === ag && (tU = 1, ag = aB.th) : (tU = 0, ag = aB.i6), this.tX = tT = ag, tW.style.backgroundColor = ag
	}, self = this, tW.innerHTML = tR, tW.style.color = tV ? aB.tY : aB.i8, tW.style.userSelect = "none", tW.style.outline = "none", tW.style.overflowWrap = "break-word", self.tZ(tT), tW.style.border = "none", tW.style.font = "inherit", self.ta(
		0), tW.style.padding = "0em 0.3em", tW.onclick = tb, tW.addEventListener("mouseover", tc), tW.addEventListener("mouseout", td), tW.addEventListener("focus", tc), tW.addEventListener("blur", te)
}

function tm() {
	function tr(e7, hB, cy) {
		for (var aW = 0; aW < 256; aW++) e7[aW] = (e7[aW] + (hB >> (aW + cy) % 30 & 1)) % 256
	}
	this.kK = function(tn, tp) {
		var e7 = new Uint8Array(256);
		return function(e7, tn, tp) {
				var aW, tu = 3 + (4 + tn) % 32768,
					tv = 12 + tp % 32768,
					tw = 17 + ((tn & tp) + (tn | tp) + tn) % 32768;
				for (aW = 0; aW < 256; aW++) tu = 1 + tu * tv % tw, e7[aW] = tu % 256
			}(e7, tn, tp), tr(e7, tn, 2), tr(e7, tp, 7),
			function(e7) {
				var aW, hB, cW = 0;
				for (aW = 0; aW < 3e4; aW++) hB = e7[cW], e7[cW] = (hB + aW + e7[(cW + aW) % 256]) % 256, cW = (hB + aW + cW + (hB & cW)) % 256
			}(e7),
			function(e7) {
				var aW, lr = 1,
					oK = 1;
				for (aW = 0; aW < 256; aW += 2) lr = (1 + lr) * (e7[aW] + 1) % 1073741824, oK = (1 + oK) * (e7[aW + 1] + 1) % 1073741824;
				return [lr, oK]
			}(e7)
	}, this.tx = function(ty, tz, u0, result) {
		for (var hD = 1 << ty, aW = 0; aW < hD; aW++)
			if (this.u1(aW, tz, u0) === result) return aW;
		return 0
	}, this.u1 = function(u2, tz, u0) {
		for (var u3 = tz + u2, u4 = u0 + u2, hB = u3 + u4 & 2147483647, ba = 1; ba <= 16; ba++) hB = (hB = (hB ^ hB >> ba) >>> 1 + (3 & u3)) * (7 + (1023 & (u3 | u4))) & 1073741823, u4 >>= 1 + (1 & (u3 >>= 1 + (1 & (hB += 65535 & u4))));
		return hB &= 1073741823
	}
}

function u5() {
	function u7(k) {
		var e7, k = k.target.files;
		k && 0 < k.length && (k = k[0], "json" === (e7 = k.name.split("."))[e7.length - 1].toLowerCase()) && ((e7 = new FileReader).onload = uK, e7.readAsText(k))
	}

	function uK(k) {
		var uO;
		d4.fL || (k = JSON.parse(k.target.result), uO = d4.data = new uP, uQ(k, uO, "mapType", 0, 2), uQ(k, uO, "mapProceduralIndex", 0, 255), uQ(k, uO, "mapRealisticIndex", 0, 255), uQ(k, uO, "mapSeed", 0, 16383), function(uN, uO, j3, max) {
			uN = uN[j3];
			uO[j3] = uW(uN) ? uN.slice(0, max) : uO[j3]
		}(k, uO, "mapName", 20), function(uN, uO, j3) {
			var uX;
			2 === uO.mapType && (!uW(uN = uN[j3]) || uN.length <= 20 ? uO.mapType = 0 : ((uX = new Image).onload = function() {
				uY.p4.uZ(uX, 1), uX.onload = null, uX = null
			}, uX.src = uN))
		}(k, uO, "canvas"), uQ(k, uO, "passableWater", 0, 1), uQ(k, uO, "passableMountains", 0, 1), uQ(k, uO, "playerCount", 1, 512), uQ(k, uO, "humanCount", 1, 1), uQ(k, uO, "selectedPlayer", 0, 0), uQ(k, uO, "gameMode", 0, 1), uQ(k, uO,
			"playerMode", 0, 0), uQ(k, uO, "battleRoyaleMode", 0, 0), uQ(k, uO, "numberTeams", 0, 8), uQ(k, uO, "isZombieMode", 0, 0), uQ(k, uO, "isContest", 0, 0), uQ(k, uO, "isReplay", 0, 0), uT(k, uO, "elo", 16, 2, 16383), uQ(k, uO,
			"colorsType", 0, 1), uQ(k, uO, "colorsPersonalized", 0, 1), uT(k, uO, "colorsData", 32, 512, 262143), uQ(k, uO, "selectableColor", 0, 1), uT(k, uO, "teamPlayerCount", 16, 9, 512), uQ(k, uO, "neutralBots", 0, 1), uQ(k, uO,
			"botDifficultyType", 0, 3), uQ(k, uO, "botDifficultyValue", 0, 15), uT(k, uO, "botDifficultyTeam", 8, 9, 15), uT(k, uO, "botDifficultyData", 8, 512, 15), uQ(k, uO, "spawningType", 0, 2), uQ(k, uO, "spawningSeed", 0, 16383), uT(k,
			uO, "spawningData", 16, 1024, 4095), uQ(k, uO, "selectableSpawn", 0, 1), uQ(k, uO, "playerNamesType", 0, 2), function(uN, uO, j3, size, max) {
			var hF = uN[j3];
			if (Array.isArray(hF)) {
				for (var hG = new Array(size), e4 = Math.min(hF.length, size), aW = 0; aW < e4; aW++) hG[aW] = uW(hF[aW]) ? hF[aW].slice(0, max) : "";
				hG.fill("", e4), uO[j3] = hG
			}
		}(k, uO, "playerNamesData", 512, 20), uQ(k, uO, "selectableName", 0, 1), uQ(k, uO, "aIncomeType", 0, 2), uQ(k, uO, "aIncomeValue", 0, 255), uT(k, uO, "aIncomeData", 8, 512, 255), uQ(k, uO, "tIncomeType", 0, 2), uQ(k, uO,
			"tIncomeValue", 0, 255), uT(k, uO, "tIncomeData", 8, 512, 255), uQ(k, uO, "iIncomeType", 0, 2), uQ(k, uO, "iIncomeValue", 0, 255), uT(k, uO, "iIncomeData", 8, 512, 255), uQ(k, uO, "sResourcesType", 0, 2), uQ(k, uO,
			"sResourcesValue", 0, 2047), uT(k, uO, "sResourcesData", 16, 512, 2047), h.i(), h.bf.uM[0] = 0, h.gQ(19))
	}

	function uQ(uN, uO, j3, min, max) {
		uN = uN[j3];
		uO[j3] = "number" == typeof uN && min <= uN && uN <= max ? Math.floor(uN) : uO[j3]
	}

	function uW(ak) {
		return "string" == typeof ak
	}

	function uT(uN, uO, j3, ua, size, max) {
		var hF = uN[j3];
		if (Array.isArray(hF)) {
			for (var hG = new(8 === ua ? Uint8Array : 16 === ua ? Uint16Array : Uint32Array)(size), e4 = Math.min(hF.length, size), aW = 0; aW < e4; aW++) hG[aW] = eO.h2(hF[aW], 0, max);
			uO[j3] = hG
		}
	}
	this.u6 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = u7, input.click()
	}, this.u8 = function() {
		for (var uC, uF, u9 = d4.data, keys = Object.keys(u9), uA = {}, aW = 0; aW < keys.length; aW++) {
			var key = keys[aW];
			u9[key] instanceof Uint8Array || u9[key] instanceof Uint16Array || u9[key] instanceof Uint32Array ? uA[key] = Array.from(u9[key]) : uA[key] = u9[key]
		}
		uA.canvas = 2 === uA.mapType && uA.canvas ? uA.canvas.toDataURL() : null, uC = uA, uC = JSON.stringify(uC, null, 2), uC = new Blob([uC], {
			type: "application/json"
		}), (uF = document.createElement("a")).href = URL.createObjectURL(uC), uF.download = "tt_scenario.json", uF.click()
	}
}

function ub() {
	this.uc = 2, this.lU = 1763, this.ud = 0;
	this.rVersion = 25, this.c = function() {
		this.ui = "2.16.62", this.hr = "28 Oct 2026 [" + this.ui + "]", this.hostname = window.location.hostname.toLowerCase(), this.lV = 0 <= this.hostname.indexOf("territorial.io"), this.uj = 0 <= this.hostname.indexOf("github.io"), this.uk =
			0 <= this.hostname.indexOf("game.territorial.io"), this.lW = function() {
				try {
					return window.self !== window.top
				} catch (k) {
					return !0
				}
			}(), this.nq = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.lV + " validMod: " + +this.uj)
	}, this.um = 0
}

function un() {
	var us, ut, uo = document.createElement("div"),
		up = document.createElement("div"),
		uq = 0,
		ur = 0;
	this.show = function(u, v, ak, uu, uv, ag) {
			if (uq) {
				if (!uu) return;
				this.s()
			}
			u === v && -1 === u ? (u = us, v = ut) : (us = u, ut = v);
			var uw = Math.floor(bK.en.jx(.018)),
				uv = (u = Math.max(uw + 2, u), uv || (ur = uu), uq = 1, aD.aE / aD.fJ),
				uu = (uo.style.whiteSpace = "pre", uo.textContent = ak, bK.en.r3(uo, 5), uo.style.font = bK.en.i3(0, bK.en.jx(.015)), uo.style.padding = "0.3em 0.6em", uo.style.left = u + "px", uo.style.top = "0px", document.body.appendChild(uo), u +
					uo.offsetWidth - uv),
				ak = (0 < uu && (u -= uu, u = Math.max(uw + 1, u), uo.style.left = u + "px", u < uw + 2) && (uo.style.whiteSpace = "pre-wrap"), uo.offsetHeight);
			uo.style.top = v - ak + ur * iN.jv + "px", u -= uw, up.style.backgroundColor = bK.color.uz(ag >> 12 << 2, (ag >> 6 & 63) << 2, (63 & ag) << 2), up.style.left = u + "px", up.style.top = uo.style.top, up.style.width = uw + "px", up.style
				.height = ak + "px", bK.en.r3(up, 4), bK.en.r3(up, 8), bK.en.r3(up, 2), document.body.appendChild(up)
		}, this.s = function(v0) {
			if (uq) {
				if (v0 && ur) return 0;
				uq = 0, h.removeChild(document.body, uo), h.removeChild(document.body, up)
			}
			return 1
		}, uo.style.position = "absolute", uo.style.backgroundColor = aB.i6, uo.style.color = aB.i8, uo.style.pointerEvents = "none", uo.style.zIndex = "5", uo.style.maxWidth = "100%", up.style.position = "absolute", up.style.color = aB.i8, up.style
		.pointerEvents = "none", up.style.zIndex = "5"
}

function v1() {
	this.eP = function(ba, eN) {
		return Math.floor((ba + .5) / eN)
	}, this.v2 = function(ba, eN) {
		return Math.floor(ba * (eN + .5))
	}, this.sqrt = function(hB) {
		return ~~Math.sqrt(hB + .5)
	}, this.pow = function(k) {
		return Math.floor(Math.pow(2, k) + .5)
	}, this.h2 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.v3 = function(pk, px, v4) {
		return Math.max(Math.min(pk, px), v4)
	}, this.v5 = function(v6, v7, u, v) {
		u -= v6, v6 = v - v7, v = 0;
		return 0 == u ? v = 0 <= v6 ? Math.PI : 0 : (v = Math.atan(v6 / u), v += 0 < u ? .5 * Math.PI : 1.5 * Math.PI), v
	}, this.log2 = function(hB) {
		return Math.floor(!!hB * (1 + Math.log2(hB + .5)))
	}, this.log10 = function(hB) {
		return Math.floor(Math.log10(hB + .5))
	}, this.v9 = function(vA, vB, vC, vD, vE) {
		return vC - vE < vA && vA < vC + vE && vD - vE < vB && vB < vD + vE
	}, this.vF = function(vG, vH) {
		return vG * vG + vH * vH
	}
}

function vI() {
	this.vJ = new jG
}

function vK() {
	function vZ() {
		var hL;
		return 8 === d4.mr ? 0 : (hL = Math.floor(dA.va[d4.jL] / 50), (hL = Math.min(hL, 200)) / 100)
	}

	function vN() {
		var hL = vZ();
		0 !== hL && eX.eY(440, L(23, [hL.toFixed(2)]), 40, 0, aB.vb, aB.ea, -1, !1)
	}
	this.kK = function() {
		var vO;
		0 === mv.result.vL || 0 === mv.result.vM.length || 8 === d4.mr ? bK.dl.mz(d4.jL) && vN() : (function(vO) {
			7 !== d4.mr && 10 !== d4.mr && 9 !== d4.mr || 0 !== d4.vj && vO && eX.eY(600, L(27, [vO.toFixed(2)]), 40, 0, aB.i8, aB.ea, -1, !1)
		}(vO = function() {
			eX.eY(520, L(24), 40, 0, aB.i8, aB.ea, -1, !1);
			for (var vM = mv.result.vM, e4 = vM.length, j8 = dA.j8, e7 = [], aW = 0; aW < e4; aW++) {
				var nD = vM[aW];
				e7.push({
					nD: nD,
					m6: j8[nD]
				})
			}
			e7.sort((ba, eN) => eN.m6 - ba.m6);
			var vc = dA.vd,
				m6 = mv.result.ve,
				hL = mv.result.vL,
				ak = "",
				vO = 0;
			for (aW = 0; aW < e4; aW++) {
				var vg = e7[aW].m6 * hL / (100 * m6),
					vh = vc[e7[aW].nD] + ": " + vg.toFixed(2) + "   ";
				e7[aW].nD === d4.jL && (vO = vg), 2 < aW && 4 !== e4 ? 3 === aW && (ak += "(" + L(25, [e4 - 3]) + ")") : ak += vh
			}
			eX.eY(560, bK.bL.vi(ak), 40, 0, aB.vb, aB.ea, -1, !1), vO ? eX.eY(580, L(26, [vO.toFixed(2) + " + " + vZ().toFixed(2)]), 40, 0, aB.vb, aB.ea, -1, !1) : bK.dl.mz(d4.jL) && vN();
			return vO
		}()), 2 === d4.vR || 7 <= d4.mr || function(vO) {
			var vM = mv.result.vM,
				e4 = vM.length,
				vk = dA.vk,
				j8 = dA.j8,
				vl = [];
			loop: for (var aW = 0; aW < e4; aW++) {
				var nD = vM[aW],
					vm = bK.bL.vn(vk[nD]);
				if (null !== vm) {
					for (var vo = j8[nD], eN = vl.length - 1; 0 <= eN; eN--)
						if (vm === vl[eN].name) {
							vl[eN].m6 += vo, vl[eN].e7.push({
								nD: nD,
								m6: vo
							});
							continue loop
						} vl.push({
						name: vm,
						m6: vo,
						e7: [{
							nD: nD,
							m6: vo
						}]
					})
				}
			}
			if (0 !== vl.length) {
				vl.sort((ba, eN) => eN.m6 - ba.m6);
				var e7 = vl[0].e7,
					vp = (e7.sort((ba, eN) => eN.m6 - ba.m6), "[" + vl[0].name + "]"),
					vq = 512 * mv.result.vL / 26214400,
					me = (eX.eY(0, L(28, [vp, vq.toFixed(4)]), 40, 0, aB.i8, aB.ea, -1, !1), e7.length),
					vr = vl[0].m6,
					vs = 1e4 * vq;
				for (aW = 0; aW < me; aW++)
					if (e7[aW].nD === d4.jL) {
						eX.eY(600, L(29, [(vs * e7[aW].m6 / (10 * vr)).toFixed(2)]), 40, 0, aB.i8, aB.ea, -1, !1), eX.eY(640, L(30, [(.2 * vO).toFixed(2), vp]), 40, 0, aB.i8, aB.ea, -1, !1);
						break
					}
			}
		}(vO))
	}, this.vT = function() {
		var vU, nW;
		d4.iC || (vU = dA, nW = d4.jL, 0 === vU.vV[nW]) || vU.vW[nW] < 1 || 2 * vU.vX[nW] > 3 * (vU.vY[nW] + vU.vW[nW]) || vN()
	}
}

function qV() {
	var cW = 0,
		o = n.o;
	this.qY = 0, this.kK = function() {
		aD.kK(), d4.iA ? vt() : 0 === cW ? n.o >= o && (o += n.n2 * Math.floor(1 + (n.o - o) / n.n2), 2 === d4.fL || fT.g0 ? vu() : (vv(), iF.render()), cW++) : ((fT.g0 ? vt : (n.a5 = !0, vw))(), cW = 0), vx(), n.a5 && (n.a5 = !1, vy())
	}
}

function vz() {
	this.c = function() {
		8 === d4.mr && eX.w0()
	}, this.w1 = function(w2) {
		var elo = d4.data.elo,
			gz = (elo[w2] - elo[1 - w2]) / 10,
			gz = 8 / (1 + Math.pow(2, gz / 32)),
			gz = Math.floor(10 * gz + .5),
			w4 = elo[w2] + gz,
			w5 = this.w6(w4),
			elo = this.w6(elo[1 - w2] - gz),
			gz = (0 === w2 ? eX.w8(w5, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : eX.w8(elo, w5, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), w4 * eO.sqrt(w4) >> 8),
			elo = ((1 + d4.wB) * gz / 100).toFixed(2);
		w2 === d4.jL ? eX.eY(640, L(31, [elo]), 40, 0, aB.i8, aB.ea, -1, !1) : eX.eY(640, L(32, [dA.vd[w2], elo]), 40, 0, aB.i8, aB.ea, -1, !1)
	}, this.w6 = function(elo) {
		return 16e3 === (elo = eO.h2(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function wC() {
	this.bA = new wD, this.lM = new wE, this.gO = new wF, this.c = function() {
		this.bA.c()
	}
}

function wG() {
	var wH, wI, wJ;

	function wP(aW) {
		var button = d.ch[aW],
			u = button.u,
			v = button.v,
			aE = button.aE,
			aF = button.aF;
		a7.fillStyle = button.wN, a7.fillRect(u, v, aE, aF), aW === wH && (a7.fillStyle = wJ, a7.fillRect(u, v, aE, aF)), a7.lineWidth = iN.iV, a7.strokeStyle = wI, a7.strokeRect(u, v, aE, aF),
			function(button) {
				var u = button.u,
					v = button.v,
					aE = button.aE,
					aF = button.aF;
				bK.en.textAlign(a7, 1), bK.en.textBaseline(a7, 1), a7.font = button.font, a7.fillStyle = wI, a7.fillText(button.wM, Math.floor(u + aE / 2), Math.floor(v + aF / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aE = 0, this.aF = 0, this.v = 0, this.gap = 0, this.c = function() {
		wH = -1, wI = aB.i8, wJ = "rgba(255,255,255,0.16)", this.ch = new Array(7), this.aF = Math.floor((bx.by.i2() ? .123 : .093) * aD.lh), this.aE = Math.floor((bx.by.i2() ? 3.96 : 4.2) * this.aF), this.gap = Math.floor(.025 * this.aE);
		var wK = Math.floor(.26 * this.aF),
			wL = bK.en.i3(1, wK);
		this.ch[0] = {
			u: 0,
			v: 0,
			aE: Math.floor(.6 * this.aE - this.gap / 2),
			aF: this.aF,
			wM: "Multiplayer",
			font: wL,
			wN: "rgba(22,88,22,0.8)",
			fontSize: wK
		}, wK = Math.floor(.18 * this.aF), wL = bK.en.i3(1, wK), this.ch[1] = {
			u: 0,
			v: 0,
			aE: this.aE - this.ch[0].aE - this.gap,
			aF: this.aF,
			wM: "Single Player",
			font: wL,
			wN: "rgba(22,88,88,0.8)",
			fontSize: wK
		}, this.ch[2] = {
			u: 0,
			v: 0,
			aE: this.aE,
			aF: Math.floor(.3 * this.aF),
			wM: "",
			font: this.ch[1].font,
			wN: "rgba(100,0,0,0.8)",
			fontSize: this.ch[1].fontSize
		}, this.ch[3] = {
			u: 0,
			v: 0,
			aE: this.aE,
			aF: this.aF,
			wM: "Back",
			font: this.ch[0].font,
			wN: "rgba(0,0,0,0.8)",
			fontSize: this.ch[0].fontSize
		}, this.ch[4] = {
			u: 0,
			v: 0,
			aE: this.aE,
			aF: Math.floor(.3 * this.aF),
			wM: "The game was updated!",
			font: this.ch[1].font,
			wN: "rgba(100,0,0,0.8)",
			fontSize: this.ch[1].fontSize
		}, this.ch[5] = {
			u: 0,
			v: 0,
			aE: this.ch[0].aE,
			aF: Math.floor(.8 * this.aF),
			wM: "Reload",
			font: this.ch[0].font,
			wN: "rgba(0,100,0,0.8)",
			fontSize: this.ch[0].fontSize
		}, this.ch[6] = {
			u: 0,
			v: 0,
			aE: this.ch[1].aE,
			aF: this.ch[5].aF,
			wM: "Back",
			font: this.ch[0].font,
			wN: "rgba(0,0,0,0.8)",
			fontSize: this.ch[0].fontSize
		}, this.a4()
	}, this.a4 = function() {
		this.v = Math.floor(.54 * aD.aF), this.ch[0].u = Math.floor(.5 * aD.aE - .5 * this.aE), this.ch[1].u = this.ch[0].u + this.ch[0].aE + this.gap, this.ch[2].u = this.ch[3].u = this.ch[0].u, this.ch[4].u = this.ch[5].u = this.ch[0].u, this
			.ch[6].u = this.ch[1].u, this.ch[0].v = Math.floor(.54 * aD.aF), this.ch[1].v = this.ch[0].v, this.ch[2].v = Math.floor((aD.aF - this.ch[2].aF - this.ch[3].aF - this.gap) / 2), this.ch[3].v = this.ch[2].v + this.ch[2].aF + this.gap,
			this.ch[4].v = Math.floor((aD.aF - this.ch[4].aF - this.ch[5].aF - this.gap) / 2), this.ch[5].v = this.ch[6].v = this.ch[4].v + this.ch[4].aF + this.gap
	}, this.wO = function() {
		wP(0), wP(1)
	}, this.wQ = function() {
		wP(2), wP(3)
	}, this.wR = function() {
		wP(4), wP(5), wP(6)
	}, this.z = function(u, v, iE) {
		var aW = -1;
		return 0 === bz.f() ? aW = this.fl(u, v, 0, 2) : 3 === bz.f() ? aW = this.fl(u, v, 3, 1) : 5 === bz.f() && (aW = this.fl(u, v, 5, 2)), wH !== aW && (wH = aW, iE) && (n.a5 = !0), -1 !== aW && (y.reset(), !0)
	}, this.fl = function(u, v, tO, size) {
		for (var aW = tO; aW < tO + size; aW++)
			if (u >= this.ch[aW].u && v >= this.ch[aW].v && u <= this.ch[aW].u + this.ch[aW].aE && v <= this.ch[aW].v + this.ch[aW].aF) return aW;
		return -1
	}
}

function il() {
	var wT = [];

	function wX(bC) {
		wT.unshift(bC), bn.ih.pT(161, wT.join(";"))
	}

	function wW(bC) {
		for (var wa = wT, e4 = wa.length, aW = 0; aW < e4; aW++)
			if (wa[aW] === bC) return wa.splice(aW, 1), bn.ih.pT(161, wa.join(";")), 1
	}
	this.c = function() {
		var ak = bn.buffer.data[161].value;
		ak.length && (wT = ak.split(";"))
	}, this.get = function() {
		return wT
	}, this.wU = function() {
		return {
			c3: wT,
			value: 0
		}
	}, this.ay = function(bC) {
		return bK.nU.has(wT, bC)
	}, this.wV = function(bC) {
		return wW(bC) ? 0 : (wX(bC), 1)
	}, this.wY = function(bC) {
		wW(bC) && wX(bC)
	}, this.wZ = function(cW) {
		cW < wT.length && (wT.splice(cW, 1), bn.ih.pT(161, wT.join(";")))
	}
}

function wb() {
	var wc = new Uint8Array(64);
	this.c = function() {
		var aW;
		for (wc[0] = 45, wc[37] = 95, aW = 0; aW < 10; aW++) wc[aW + 1] = 48 + aW;
		for (aW = 0; aW < 26; aW++) wc[aW + 11] = 65 + aW, wc[aW + 38] = 97 + aW
	}, this.wd = function(we) {
		for (var nH = gD, ql = new Uint8Array(we), aW = 0; aW < we; aW++) ql[aW] = nH.gE(6);
		return ql
	}, this.wf = function(ql) {
		for (var e4 = ql.length, wg = wc, e7 = [], aW = 0; aW < e4; aW++) e7.push(String.fromCharCode(wg[ql[aW]]));
		return e7.join("")
	}, this.bB = function(value, wh) {
		for (var wg = wc, e7 = [], aW = 0; aW < wh; aW++) e7.push(String.fromCharCode(wg[value >> 6 * (wh - 1 - aW) & 63]));
		return e7.join("")
	}
}

function wi() {
	function wk() {
		if (2 === d4.fL) return 1;
		fU.wm(), d4.fL = 2, d4.mN = d4.mm
	}

	function wl() {
		mv.wn.wo(), fP.show(1 === d4.vj, !1, 2 === d4.vj), mv.result.wo(), mv.wp.kK(), mv.wq.kK(), mv.wq.wr(), eX.ws(!0), eX.wt(247), eX.wt(956), eX.wt(957), fX.iE(!0), mY.iE(!0), fU.iE(), fM.wu(), d4.g2 && n.qQ.wv(), n.a5 = !0, iF.iG(), bx.by
			.setState(0)
	}
	this.wj = function() {
		wk() || (d4.vR = 2, wl())
	}, this.mx = function() {
		wk() || (d4.vR = 1, wl())
	}
}

function ww() {
	var wx = [];
	this.oY = function(player, oW, wy, wz) {
		player === d4.jL || oW === d4.jL || !wz && bK.dl.iS(player) || bK.dl.iS(oW) || this.eY(dA.vd[player] + " supported " + dA.vd[oW] + " with " + bK.bL.bB(wy) + " ressource" + (1 === wy ? "." : "s."))
	}, this.eY = function(ak, x0) {
		ak = {
			o: mY.md(),
			ak: ak,
			x0: x0
		};
		wx.push(ak), 30 === h.l2 && h.p7().eY(ak)
	}, this.clear = function() {
		wx = [];
		var hL = h.x1(30);
		hL && hL.clear()
	}, this.x2 = function() {
		return wx
	}
}

function x3() {
	var x4, x5;
	this.c = function() {
		x4 = 1, x5 = 0
	}, this.kK = function() {
		0 < x4 && (x5 = 0 === x5 ? n.o + 16 : x5, x4 = (x4 -= .001 * (n.o - x5)) < 0 ? 0 : x4, x5 = n.o, n.a5 = !0)
	}, this.a6 = function() {
		0 < x4 && (a7.fillStyle = "rgba(0,0,0," + x4 + ")", a7.fillRect(0, 0, aD.aE, aD.aF))
	}
}

function x8() {
	this.my = null, this.mL = 0, this.x9 = function() {
		for (this.mL = 0, aW = d4.jW - 1; 0 <= aW; aW--) 0 !== dA.iR[aW] && this.mL++;
		this.my = new Uint16Array(this.mL);
		for (var e4 = 0, aW = 0; aW < d4.jW; aW++) 0 !== dA.iR[aW] && (this.my[e4++] = aW)
	}, this.xA = function() {
		for (var j8 = dA.j8, xF = dA.xF, vV = dA.vV, my = mK.my, aW = mK.mL - 1; 0 <= aW; aW--) {
			var nD = my[aW],
				m6 = j8[nD],
				me = xF[nD];
			m6 <= eO.eP(me, 4) ? xG.gc(nD) : me <= m6 ? 250 <= (xF[nD] = m6) && (vV[nD] = 1) : xF[nD] = me - Math.max(1, eO.eP(me - m6, 1e3))
		}
		this.xC()
	}, this.xC = function() {
		for (var iR = dA.iR, xD = this.my, xE = this.mL, aW = xE - 1; 0 <= aW; aW--) 0 === iR[xD[aW]] && (xD[aW] = xD[--xE]);
		this.mL = xE
	}
}

function xH() {
	var xI = 32,
		xJ = new Array(2);

	function nM(ag) {
		var u, v, dP, rK, rJ, jw = xI,
			pt = bK.en.nM(jw, jw),
			rL = bK.en.getContext(pt, !0),
			pd = bK.en.getImageData(rL, jw, jw),
			nV = pd.data,
			me = (jw >> 1) - .5,
			xL = Math.sqrt(me * me);
		for (nV.fill(255), v = 0; v < jw; v++)
			for (u = 0; u < jw; u++) rJ = u - me, rK = v - me, dP = 4 * (v * jw + u), rJ = 714 * (xL - Math.sqrt(rJ * rJ + rK * rK)) / xL, nV[2 + dP] = ag, nV[3 + dP] = 255 < rJ ? 0 : rJ;
		return rL.putImageData(pd, 0, 0), pt
	}
	this.xK = -1, this.c = function() {
		this.xK = -1, xJ[0] || (xJ[0] = nM(255), xJ[1] = nM(0))
	}, this.rW = function(rL, aK, u, v, fn, aW) {
		bK.dl.mz(d4.jL) && (rL.setTransform(aK *= 4 / 3 * .625, 0, 0, aK, u - (fn *= 4 / 3), v - fn), rL.drawImage(xJ[+(d5.bf.dU[aW] === this.xK)], 0, 0))
	}
}

function xM() {
	this.xN = !1, this.xO = !1, this.xP = !1, this.xQ = [0, 0, 0, 0], this.render = function() {
		var iw, iz, j1, j2;
		this.xP = this.xP || this.xO, (this.xO || this.xN && this.xP) && (iw = xR.xS[0], iz = xR.xS[1], j1 = xR.xS[2], j2 = xR.xS[3], iw = iw < this.xQ[0] ? this.xQ[0] : iw, iz = iz < this.xQ[1] ? this.xQ[1] : iz, j1 = j1 > this.xQ[2] ? this.xQ[
			2] : j1, j2 = j2 > this.xQ[3] ? this.xQ[3] : j2, this.xO = !1, this.xN = !1, iw === this.xQ[0] && iz === this.xQ[1] && j1 === this.xQ[2] && j2 === this.xQ[3] ? this.xT() : iw <= j1 && iz <= j2 && xU.putImageData(xV, 0, 0, iw,
			iz, j1 - iw + 1, j2 - iz + 1))
	}, this.xT = function() {
		this.xP && this.xQ[2] >= this.xQ[0] && this.xQ[3] >= this.xQ[1] && xU.putImageData(xV, 0, 0, this.xQ[0], this.xQ[1], this.xQ[2] - this.xQ[0] + 1, this.xQ[3] - this.xQ[1] + 1), this.xP = !1
	}, this.iG = function() {
		this.xQ[2] >= this.xQ[0] && this.xQ[3] >= this.xQ[1] && xU.putImageData(xV, 0, 0, this.xQ[0], this.xQ[1], this.xQ[2] - this.xQ[0] + 1, this.xQ[3] - this.xQ[1] + 1), this.xP = !1
	}, this.c = function() {
		var u, v;
		this.xN = !1, this.xO = !1, this.xP = !1, this.xQ[0] = l.aH, this.xQ[1] = l.aJ, this.xQ[2] = this.xQ[3] = 0;
		loop: for (u = 1; u < l.aH - 1; u++)
			for (v = l.aJ - 2; 1 < v; v--)
				if (1 === pz[dK.xW(u, v) + 2]) {
					this.xQ[0] = u;
					break loop
				} loop: for (v = 1; v < l.aJ - 1; v++)
			for (u = l.aH - 2; 1 < u; u--)
				if (1 === pz[dK.xW(u, v) + 2]) {
					this.xQ[1] = v;
					break loop
				} loop: for (u = l.aH - 2; 0 < u; u--)
			for (v = l.aJ - 2; 1 < v; v--)
				if (1 === pz[dK.xW(u, v) + 2]) {
					this.xQ[2] = u;
					break loop
				} loop: for (v = l.aJ - 2; 0 < v; v--)
			for (u = l.aH - 2; 1 < u; u--)
				if (1 === pz[dK.xW(u, v) + 2]) {
					this.xQ[3] = v;
					break loop
				}
	}
}

function xX(xY, tR, xZ) {
	function click() {
		var value = 1 - xY.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tR, void 0 !== xY.cW ? bn.ih.pT(xY.cW, value) : xY.value = value, xZ && xZ(value)
	}
	var k;
	tR = tR || L(33), this.k = document.createElement("p"), (k = this.k).textContent = (xY.value ? "🟩 " : "⬜ ") + tR, k.style.margin = "0", k.style.marginBottom = "0.5em", k.style.cursor = "pointer", k.addEventListener("click", click)
}

function xa() {
	var bX = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + bX + .5) / 15))
}

function ig() {
	function xb(aW, type, hs, hr) {
		bn.buffer.data.push({
			cW: aW,
			type: type || 0,
			value: hs || 0,
			hs: hs || 0,
			hr: hr || 0
		})
	}

	function xc(aW, type, hs, hr) {
		bn.buffer.data.push({
			cW: aW,
			type: type,
			value: hs || "",
			hs: hs || "",
			hr: hr || 0
		})
	}

	function xd(cZ) {
		for (var aW = bn.buffer.data.length; aW < cZ; aW++) bn.buffer.data.push(null)
	}
	this.data = [], this.c = function() {
		xb(0, 1, 0, 5), xb(1, 1, 1), xb(2, 0), xc(3, 2), xb(4, 1), xc(5, 2, "system-ui", 2), xb(6, 0), xb(7, 0, 0), xb(8, 0), xb(9, 1, 1), xb(10, 1), xb(11, 1, 1), xc(12, 2, navigator.language), xb(13), xb(14), xb(15, 0, 1), xb(16, 0, 3), xd(
			100), xc(100, 2), xc(101, 2), xc(102, 2), xc(103, 2), xc(104, 2), xc(105, 2), xc(106, 2), xb(107), xb(108), xb(109), xc(110, 2), xb(111), xb(112), xb(113), xc(114, 2), xb(115), xc(116, 2), xb(117, 1), xc(118, 2, "", 2), xb(119, 1, 0,
				1), xc(120, 2), xb(121, 1, ~~(262144 * Math.random())), xc(122, 2, "Player " + Math.floor(1e3 * Math.random())), xb(123), xc(124), xb(125, 1), xc(126, 2), xb(127, 0, 1), xb(128), xb(129), xb(130), xb(131), xb(132), xc(133, 2), xb(
				134, 0, 5), xc(135, 2), xc(136, 2), xb(137), xb(138), xb(139), xb(140), xb(141), xb(142), xb(143), xb(144), xc(145, 2), xb(146), xb(147), xc(148, 2), xb(149), xb(150, 0, 1), xc(151, 2), xb(152, 0, 5), xb(153, 1), xb(154, 1), xc(
				155, 2), xc(156, 2), xb(157), xb(158), xb(159), xb(160), xc(161, 2), xb(162, 0, 1024), xc(163, 2, "0,0,0"), xc(164, 2, "100,100,100"), xc(165, 2, "30,30,30"), xc(166, 2, "70,70,70"), xc(167, 2, "100,100,100"), xc(168, 2,
				"85,85,85"), xc(169, 2, "100,100,100");
		for (var aW = 0; aW < 4; aW++) xc(170 + aW, 2, "255,255,255");
		xc(174, 2), xc(175, 2), xb(176, 0, 200), xd(180), xb(180, 0), xb(181, 0), xb(182, 0, 1023), xc(183, 2)
	}, this.pT = function(cW, value) {
		this.data[cW].value = value
	}, this.q4 = function(cW, value) {
		this.pT(cW, value);
		var value = String(value),
			e4 = value.length;
		5e4 < e4 ? console.log("storage value too large: index " + cW + " size " + e4) : (bn.ep.save(cW, value), bn.ep.save(cW, String(this.data[cW].hr), !0))
	}, this.xe = function(cW) {
		return Number(this.data[cW].value)
	}, this.xf = function(cW) {
		return String(this.data[cW].value)
	}
}

function xg() {
	var xh = [
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
		xi = [
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
	this.xj = null, this.xk = null, this.xl = null, this.xm = null, this.xn = null, this.xo = null, this.xp = null, this.xq = null, this.xr = null, this.xs = null;

	function xz(eS, cZ) {
		for (var xj = dK.xj, xk = dK.xk, xl = dK.xl, aW = eS; aW < cZ; aW++) xj[aW] = eO.eP(64 * kH.random(), kH.value(100)) << 2, xk[aW] = eO.eP(64 * kH.random(), kH.value(100)) << 2, xl[aW] = eO.eP(64 * kH.random(), kH.value(100)) << 2
	}

	function xy(eS, cZ) {
		for (var colorsData = d4.data.colorsData, xj = dK.xj, xk = dK.xk, xl = dK.xl, aW = eS; aW < cZ; aW++) {
			var hB = colorsData[aW];
			xj[aW] = 4 * (hB >> 12), xk[aW] = 4 * (hB >> 6 & 63), xl[aW] = 4 * (63 & hB)
		}
	}

	function yR(aK, yT) {
		pz[aK] = 0, pz[aK + 1] = 0, pz[aK + 2] = yT, pz[aK + 3] = 0, yU(aK)
	}

	function yU(aK) {
		var u;
		iF.xO || (u = dK.iu(aK), aK = dK.iv(aK), iF.xO = u >= xR.xS[0] && u <= xR.xS[2] && aK >= xR.xS[1] && aK <= xR.xS[3])
	}
	this.jZ = new Int32Array(4), this.xw = new Int32Array(8), this.o3 = function() {
		var jZ = this.jZ,
			jZ = (jZ[0] = -4 * l.aH, jZ[1] = 4, jZ[2] = -jZ[0], jZ[3] = -jZ[1], this.xw);
		jZ[0] = -4 * l.aH - 4, jZ[1] = -4 * l.aH, jZ[2] = -4 * l.aH + 4, jZ[3] = -4, jZ[4] = 4, jZ[5] = 4 * l.aH - 4, jZ[6] = 4 * l.aH, jZ[7] = 4 * l.aH + 4
	}, this.c = function() {
		if (this.xj ? (this.xj.fill(0), this.xk.fill(0), this.xl.fill(0), this.xm.fill(0), this.xn.fill(0), this.xo.fill(0), this.xp.fill(0), this.xq.fill(0), this.xr.fill(0), this.xs.fill(0), this.ln.fill(0)) : (this.xj = new Uint8Array(d4.jW),
				this.xk = new Uint8Array(d4.jW), this.xl = new Uint8Array(d4.jW), this.xm = new Uint8Array(d4.jW), this.xn = new Uint8Array(d4.jW), this.xo = new Uint8Array(d4.jW), this.xp = new Uint8Array(d4.jW), this.xq = new Uint8Array(d4.jW),
				this.xr = new Uint8Array(d4.jW), this.xs = new Uint8Array(d4.jW), this.ln = new Uint8Array(d4.jW)), d4.jD)
			for (var y7 = jE.y7, xj = dK.xj, xk = dK.xk, xl = dK.xl, aW = d4.jW - 1; 0 <= aW; aW--) {
				var ag = y7[aW],
					me = eO.eP((xi[ag][3] + 1) * kH.random(), kH.value(100));
				xj[aW] = xh[ag][0] + me * xi[ag][0], xk[aW] = xh[ag][1] + me * xi[ag][1], xl[aW] = xh[ag][2] + me * xi[ag][2]
			} else 0 === d4.data.colorsType ? d4.data.selectableColor ? (xy(0, d4.j6), xz(d4.j6, d4.jW)) : xz(0, d4.jW) : xy(0, d4.jW);
		! function() {
			var aW, bX, xj = dK.xj,
				xk = dK.xk,
				xl = dK.xl;
			for (aW = d4.jW - 1; 0 <= aW; aW--) bX = eO.eP(xj[aW] + xk[aW] + xl[aW], 3), xj[aW] += pp(bX - xj[aW], 2), xk[aW] += pp(bX - xk[aW], 2), xl[aW] += pp(bX - xl[aW], 2), xj[aW] -= xj[aW] % 4, xk[aW] -= xk[aW] % 4, xl[aW] -= xl[aW] % 4
		}(),
		function() {
			for (var e4 = d4.jW, xj = dK.xj, xk = dK.xk, xl = dK.xl, xm = dK.xm, aW = 0; aW < e4; aW++) xj[aW] += aW >> 7, xk[aW] += aW >> 5 & 3, xl[aW] += aW >> 3 & 3, xm[aW] = 7 & aW
		}(), this.y2(),
			function() {
				for (var e4 = d4.jW, xn = dK.xn, xo = dK.xo, xp = dK.xp, xj = dK.xj, xk = dK.xk, xl = dK.xl, aW = 0; aW < e4; aW++) {
					var fn = xj[aW],
						hL = xk[aW],
						eN = xl[aW];
					60 <= fn + hL + eN ? (xn[aW] = Math.max(fn - 40, 3 & fn), xo[aW] = Math.max(hL - 40, 3 & hL), xp[aW] = Math.max(eN - 40, 3 & eN)) : (xn[aW] = fn + 40, xo[aW] = hL + 40, xp[aW] = eN + 40)
				}
			}(),
			function() {
				for (var e4 = d4.jW, xq = dK.xq, xr = dK.xr, xs = dK.xs, xj = dK.xj, xk = dK.xk, xl = dK.xl, aW = 0; aW < e4; aW++) {
					var fn = xj[aW],
						hL = xk[aW],
						eN = xl[aW];
					688 <= fn + hL + eN ? (xq[aW] = fn - 88, xr[aW] = hL - 88, xs[aW] = eN - 88) : (xq[aW] = Math.min(fn + 88, 252 + (3 & fn)), xr[aW] = Math.min(hL + 88, 252 + (3 & hL)), xs[aW] = Math.min(eN + 88, 252 + (3 & eN)))
				}
			}()
	}, this.y5 = function(player) {
		var e7 = dF.y6;
		return e7[0] = this.xj[player], e7[1] = this.xk[player], e7[2] = this.xl[player], e7
	}, this.y2 = function() {
		for (var aW = d4.jW - 1; 0 <= aW; aW--) this.ln[aW] = this.xj[aW] + this.xk[aW] + this.xl[aW] < 280 ? 0 : 1
	}, this.iu = function(aK) {
		return eO.eP(aK, 4) % l.aH
	}, this.iv = function(aK) {
		return eO.eP(aK, 4 * l.aH)
	}, this.xW = function(u, v) {
		return Math.floor(4 * (v * l.aH + u))
	}, this.y8 = function(aK) {
		var jZ = this.jZ;
		return this.y9(aK + jZ[0]) || this.y9(aK + jZ[1]) || this.y9(aK + jZ[2]) || this.y9(aK + jZ[3])
	}, this.jn = function(aK) {
		var jZ = this.jZ;
		return this.jb(aK + jZ[0]) || this.jb(aK + jZ[1]) || this.jb(aK + jZ[2]) || this.jb(aK + jZ[3])
	}, this.yA = function(aK, player) {
		var jZ = this.jZ;
		return this.yB(aK + jZ[0], player) || this.yB(aK + jZ[1], player) || this.yB(aK + jZ[2], player) || this.yB(aK + jZ[3], player)
	}, this.yC = function(aW, yD, yE, yF) {
		this.xj[aW] = yD >> 16, this.xk[aW] = yD >> 8 & 255, this.xl[aW] = 255 & yD, this.xn[aW] = yE >> 16, this.xo[aW] = yE >> 8 & 255, this.xp[aW] = 255 & yE, this.xq[aW] = yF >> 16, this.xr[aW] = yF >> 8 & 255, this.xs[aW] = 255 & yF
	}, this.yG = function(aW) {
		return [(this.xj[aW] << 16) + (this.xk[aW] << 8) + this.xl[aW], (this.xn[aW] << 16) + (this.xo[aW] << 8) + this.xp[aW], (this.xq[aW] << 16) + (this.xr[aW] << 8) + this.xs[aW]]
	}, this.yH = function(aK) {
		return 208 <= pz[aK + 3]
	}, this.yI = function(player, aK) {
		return this.yH(aK) && this.yJ(player, aK)
	}, this.yJ = function(player, aK) {
		return player === this.jR(aK)
	}, this.yK = function(aK) {
		return 208 <= pz[aK + 3] && pz[aK + 3] < 224
	}, this.yL = function(aK) {
		return 224 <= pz[aK + 3] && pz[aK + 3] < 248
	}, this.yM = function(aK) {
		return 248 <= pz[aK + 3]
	}, this.yN = function(aK) {
		for (var jZ = this.jZ, aW = 3; 0 <= aW; aW--)
			if (this.yO(aK + jZ[aW])) return !0;
		return !1
	}, this.dL = function(aK) {
		return this.yH(aK) || this.jQ(aK)
	}, this.yO = function(aK) {
		return 0 === pz[aK + 3] && 2 === pz[aK + 2]
	}, this.jQ = function(aK) {
		return 0 === pz[aK + 3] && 1 === pz[aK + 2]
	}, this.nf = function(aK) {
		return 0 === pz[aK + 3] && 3 === pz[aK + 2]
	}, this.jb = function(aK) {
		return 0 === pz[aK + 3] && 5 === pz[aK + 2]
	}, this.y9 = function(aK) {
		return 0 === pz[aK + 3] && 3 <= pz[aK + 2]
	}, this.dj = function(aK) {
		return (pz[aK] >> 1 << 8) + pz[aK + 1]
	}, this.yP = function(aK) {
		return 1 & pz[aK]
	}, this.yB = function(aK, player) {
		return this.jQ(aK) || this.yH(aK) && player !== this.jR(aK)
	}, this.jR = function(aK) {
		return ((3 & pz[aK]) << 7) + ((3 & pz[aK + 1]) << 5) + ((3 & pz[aK + 2]) << 3) + (7 & pz[aK + 3])
	}, this.yQ = function(aK) {
		yR(aK, 1)
	}, this.yS = function(aK) {
		yR(aK, 2)
	}, this.yV = function(aK, player) {
		pz[aK] = this.xj[player], pz[aK + 1] = this.xk[player], pz[aK + 2] = this.xl[player], pz[aK + 3] = 208 + this.xm[player], yU(aK)
	}, this.yW = function(aK, player) {
		pz[aK] = this.xn[player], pz[aK + 1] = this.xo[player], pz[aK + 2] = this.xp[player], pz[aK + 3] = 224 + this.xm[player], yU(aK)
	}, this.yX = function(aK, player) {
		pz[aK] = this.xq[player], pz[aK + 1] = this.xr[player], pz[aK + 2] = this.xs[player], pz[aK + 3] = 248 + this.xm[player], yU(aK)
	}
}

function yY() {
	var yd, ye, yZ = "",
		ya = 0,
		yb = 0,
		yc = -1,
		yf = ["Team", "Zombie", "BR", "1v1"];

	function yg() {
		for (var m6 = new Date, yh = m6.getUTCMinutes(), m6 = m6.getUTCSeconds(), yj = [], yk = 0, aW = 0; aW < 6; aW++) yj.push(yk), yj.push(yk + 2), yj.push(yk + 5), yj.push(yk + 7), yk += 10;
		for (var e4 = yj.length, aW = 1; aW < e4 && !(yh < yj[aW]); aW++);
		aW %= e4;
		m6 = (yj[0] = 60) * (yj[aW] - yh) - m6;
		return m6 !== yc && (yZ = yf[aW % 4] + " " + ye + ": " + ym(Math.floor(m6 / 60)) + ":" + ym(m6 % 60), yc = m6, ya = oC.measureText(yZ, yd), ya += Math.floor(.4 * yb), 1)
	}

	function ym(eL) {
		return eL < 10 ? "0" + eL : String(eL)
	}
	this.c = function() {
		ye = L(34)
	}, this.resize = function() {
		ya = Math.floor((bx.by.i2() ? .53 : .36) * aD.lh), yb = Math.floor(.065 * ya), yd = bK.en.i3(1, Math.floor(.9 * yb)), yc += 1e3, yg()
	}, this.kK = function() {
		yg() && (n.a5 = !0)
	}, this.a6 = function(v) {
		a7.lineWidth = 1 + Math.floor(yb / 15), a7.translate(aD.aE - yb, v + ya), a7.rotate(-Math.PI / 2), a7.fillStyle = aB.i8, a7.fillRect(0, 0, ya, yb), a7.strokeStyle = aB.aC, a7.strokeRect(0, 0, ya, yb + 10), a7.fillStyle = aB.aC, a7.font =
			yd, bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 1), a7.fillText(yZ, Math.floor(ya / 2), Math.floor(.59 * yb)), a7.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function yn() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 === d4.data.playerNamesType && 1 === bK.nU.h3(d4.data.playerNamesData).length && (d4.data.playerNamesType = 0), 2 !== d4.data.playerNamesType && (d4.data.playerNamesData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.playerNamesType && bK.nU.hM(yq.yx(), d4.data.playerNamesData, 20)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(35), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(37), L(38), L(39)],
			value: d4.data.playerNamesType
		}, function(cW) {
			yu(), d4.data.playerNamesType = cW, h.gQ(23)
		})), hn.z5(new z6), hn.z5(new xX({
			value: d4.data.selectableName
		}, L(40), function(value) {
			d4.data.selectableName = value
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn;
		2 === d4.data.playerNamesType && ((hn = new z1).z2("Data"), yq = new z7(0, 1, 0, 1), d4.data.playerNamesData && d4.data.playerNamesData.length === d4.jW || (d4.data.playerNamesData = new Array(d4.jW), d4.data.playerNamesData.fill(
			"")), yq.z8(bK.bL.z9(d4.data.playerNamesData, 1, '"')), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function zA() {
	var zB = new Uint8Array(d4.jW),
		zC = new Uint16Array(d4.jW),
		zD = new Uint16Array(d4.jW),
		zE = new Uint8Array(d4.jW),
		zF = (this.k1 = new Uint8Array(d4.jW), new Uint16Array(d4.jW)),
		zG = new Uint16Array(d4.jW);

	function zO(aW) {
		zB[aW] = 1 + eO.eP(zF[aW] * kH.random(), 10 * kH.value(100))
	}
	this.zH = null, this.ka = [97, 94, 70, 40, 20, 0, 100], this.rh = [500, 450, 400, 300, 80, 50, 100], this.kW = [0, 0, 5, 25, 50, 100, 0], this.zI = [60, 74, 112, 200, 256, 512, 512], this.d7 = [1, 2, 3, 4, 6, 8, 1], this.zJ = [500, 450, 400, 300,
		80, 50, 100
	], this.rZ = [100, 150, 250, 400, 600, 1e3, 100], this.o3 = function() {
		this.zH = [L(41), L(42), L(43), L(44), L(45), L(46), "H Bot"]
	}, this.c = function() {
		zB.fill(0), zC.fill(0), zD.fill(0), zE.fill(0), this.k1.fill(0), zF.fill(0), zG.fill(0);
		var zK = d4.j6;
		if (9 === d4.mr) this.zL();
		else if (__fx.customLobby.isActive())
			for (aW = d4.mM - 1; 0 <= aW; aW--) this.k1[aW + zK] = __fx.customLobby.gameInfo.difficulty;
		else if (d4.iC)
			if (3 === d4.data.botDifficultyType)
				for (aW = d4.mM - 1; 0 <= aW; aW--) {
					var cy = aW + zK;
					this.k1[cy] = d4.data.botDifficultyData[cy]
				} else if (2 === d4.data.botDifficultyType)
					for (aW = d4.mM - 1; 0 <= aW; aW--) this.k1[cy = aW + zK] = d4.data.botDifficultyTeam[jE.rG[jE.jF[cy]]];
				else if (1 === d4.data.botDifficultyType) {
			var zN = this.zH.length;
			for (aW = d4.mM - 1; 0 <= aW; aW--) this.k1[aW + zK] = aW % zN
		} else
			for (zN = d4.data.botDifficultyValue, aW = d4.mM - 1; 0 <= aW; aW--) this.k1[aW + zK] = zN;
		else
			for (var zM = 8 === d4.mr ? 1 : 0, aW = d4.mM - 1; 0 <= aW; aW--) this.k1[aW + zK] = zM;
		for (aW = 0; aW < zK; aW++) this.k1[aW] = 6;
		var e4 = d4.jW;
		for (aW = 0; aW < e4; aW++) this.k1[aW] <= 2 ? (zE[aW] = 5, zF[aW] = zG[aW] = 1040, 0 === this.k1[aW] ? (zC[aW] = 980, zD[aW] = 980) : 1 === this.k1[aW] ? (zC[aW] = 980, zD[aW] = 920, zF[aW] = zG[aW] = 1100) : (zC[aW] = 825, zD[aW] =
			750)) : this.k1[aW] <= 4 ? (zE[aW] = 1 + kH.kI(20), 3 === this.k1[aW] ? (zC[aW] = zD[aW] = 500, zF[aW] = zG[aW] = 1e3) : (zG[aW] = 250 + kH.kI(1501), zF[aW] = 500 + kH.kI(501), zC[aW] = 300 + kH.kI(201), zD[aW] = 100 + kH.kI(
			201))) : this.k1[aW] <= 5 ? (zF[aW] = 1e3, zG[aW] = 1e3, zE[aW] = 35 + kH.kI(16), zC[aW] = 300 + kH.kI(201), zD[aW] = 50 + kH.kI(101)) : (zF[aW] = zG[aW] = 800, zE[aW] = 5, zC[aW] = 10, zD[aW] = 250), zO(aW)
	}, this.zL = function() {
		for (var aK = rU.zP, zK = d4.j6, aW = aK - 1; 0 <= aW; aW--) this.k1[aW + zK] = 0;
		for (var eN = 0; eN < 6; eN++) {
			for (aW = aK + rU.rV[eN] - 1; aK <= aW; aW--) this.k1[aW + zK] = eN;
			aK += rU.rV[eN]
		}
	}, this.kF = function(nD, value) {
		zB[nD] = Math.min(value, zB[nD])
	}, this.kK = function(nD) {
		0 == --zB[nD] && ! function(nD) {
			(function(nD) {
				zF[nD] !== zG[nD] && (zF[nD] += zF[nD] < zG[nD] ? 3 : -3);
				zC[nD] !== zD[nD] && (zC[nD] += zC[nD] < zD[nD] ? zE[nD] : -zE[nD], zC[nD] = (Math.abs(zC[nD] - zD[nD]) <= zE[nD] ? zD : zC)[nD]);
				zB[nD] = eO.eP(zF[nD], 10)
			})(nD), kN.kh.k0(nD, eO.eP(zC[nD] * dA.k9[nD], 1e3))
		}(nD)
	}, this.zS = function(nD, hD) {
		zF[nD] = zG[nD] = hD
	}
}

function zT() {
	var ey = 0,
		ez = 0;
	this.fc = function(u, v) {
		ey = u, ez = v
	}, this.ft = function(code) {
		var zV, zX, dP;
		d4.g2 || fT.g0 || (bK.dl.zU(0) || bK.dl.zU(1)) && bK.dl.mz(d4.jL) && (fZ.t(ey, ez) ? fZ.fe = !1 : fS.t(ey, ez) || (zV = dI.zW(ey), zX = dI.zY(ez), dP = dI.jm(zV, zX), dI.zZ(zV, zX) && (0 === code ? function(dP) {
			var zd, aK, jP;
			d4.iA ? -1 !== (zd = ze.zf(dP)) && ko.zg.zh(dP) : (aK = dI.dJ(dP), dK.jb(aK) ? (zd = zi.vJ.jH(aK)) && (jP = dI.dJ(zd), jP = dK.jQ(jP) ? d4.jW : dK.jR(jP), ko.zg.zj(fZ.lt(), zd, jP)) : (zd = ze.zk(dP)) < 0 || (aK = dI
				.dJ(zd), dK.jQ(aK) ? jS.zl(d4.jL) ? ko.zg.zm(fZ.lt(), d4.jW) : k2.zn(d4.jL) && zo.zp(d4.jW, fZ.lt()) : (jP = dK.jR(aK), jS.jT(jP, d4.jL) && (jS.zq(d4.jL, jP) ? ko.zg.zm(fZ.lt(), jP) : k2.zn(d4.jL) && zo.zp(
					jP, fZ.lt())))))
		}(dP) : 1 === code ? function(dP) {
			d5.zr.zs(d4.jL, dP) && ko.zg.eV(fZ.lt(), dF.dG[7])
		}(dP) : 2 === code && function(dP) {
			d5.zt.dO(d4.jL, dP) && ko.zg.eb(fZ.lt())
		}(dP))))
	}, this.fu = function() {
		if (!d4.g2 && !fT.g0 && bK.dl.zU(1)) {
			var nD = d4.jL;
			if (bK.dl.mz(nD)) {
				var e4 = k2.zn(nD);
				if (e4 < 1) ! function() {
					var nD = d4.jL;
					if (jS.zl(nD)) ko.zg.zm(fZ.lt(), d4.jW);
					else
						for (var jZ = dK.jZ, kC = dA.kC, e4 = kC[nD].length, pw = Math.floor(Math.random() * e4), aW = 0; aW < e4; aW++)
							for (var tI = 3; 0 <= tI; tI--) {
								var cy = kC[nD][(aW + pw) % e4] + jZ[tI];
								if (dK.yH(cy)) {
									cy = dK.jR(cy);
									if (cy !== nD && (!d4.jD || jS.jT(nD, cy))) return ko.zg.zm(fZ.lt(), cy)
								}
							}
				}();
				else {
					for (var zv = 0, k1 = k2.zw(nD, 0), aW = 1; aW < e4; aW++) {
						var vg = k2.zw(nD, aW);
						vg < k1 && (k1 = vg, zv = aW)
					}
					ko.zg.zm(fZ.lt(), k2.zx(nD, zv))
				}
			}
		}
	}, this.fv = function() {
		if (!d4.g2 && !fT.g0 && bK.dl.mz(d4.jL) && bK.dl.zU(1)) return fU.fd ? fU.zy(d4.jL) ? void ko.zg.zz(1) : void 0 : void(fU.a00(d4.jL) && ko.zg.fv())
	}
}

function a02() {
	var a03 = {
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
		a04 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a05 = function(cR) {
		return cR.replace(a04, function(match) {
			return a03[match] || match
		})
	}, this.bB = function(hB) {
		var aW, a06, a07, a08, a09;
		if (hB < 0) return "-" + this.bB(Math.abs(hB));
		if (hB < 1e3) return hB.toString();
		for (a06 = Math.floor(Math.log(hB + .5) / Math.log(10)) + 1, a07 = Math.floor((a06 - 1) / 3), a09 = (a08 = hB.toString()).substring(a06 - 3, a06), aW = 1; aW < a07; aW++) a09 = a08.substring(a06 - 3 * (aW + 1), a06 - 3 * aW) + " " + a09;
		return a08.substring(0, a06 - 3 * a07) + " " + a09
	}, this.lu = function(nD, a06) {
		return nD.toFixed(a06) + "%"
	}, this.a0A = function(hB, a0B) {
		return hB.toFixed(eO.h2(Math.floor((void 0 === a0B ? 3 : a0B) - Math.log10(Math.max(hB, 1))), 0, 8))
	}, this.a0C = function(hB, m5, a06) {
		return (hB * m5).toFixed(a06)
	}, this.vn = function(username) {
		var ja, jP = username.indexOf("[");
		return !(jP < 0) && 1 < (ja = username.indexOf("]")) - jP && ja - jP <= 8 ? username.substring(jP + 1, ja).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.vn;
	this.a0D = function(ak) {
		for (var ba = Math.floor(.5 * ak.length + .5), cZ = Math.floor(.5 * (ba - 1)), aW = 0; aW < cZ; aW++)
			for (var eN = -1; eN < 2; eN += 2) {
				var ag = ba + eN * aW;
				if (" " === ak[ag]) return [this.vi(ak.substring(0, ag)), this.a0E(ak.substring(ag))]
			}
		return [ak.substring(0, ba), ak.substring(ba)]
	}, this.a0E = function(ak) {
		for (var e4 = ak.length, aW = 0; aW < e4; aW++)
			if (" " !== ak[aW]) return ak.substring(aW);
		return ak
	}, this.vi = function(ak) {
		for (var aW = ak.length - 1; 0 <= aW; aW--)
			if (" " !== ak[aW]) return ak.substring(0, aW + 1);
		return ak
	}, this.a0F = function(ak, le) {
		return ak.split("(")[0] + "(🧈 " + le.toFixed(2) + ")"
	}, this.startsWith = function(ak, a0G) {
		return ak.substring(0, a0G.length) === a0G
	}, this.a0H = function(ak, a0G) {
		var e4 = ak.length;
		return ak.substring(e4 - a0G.length, e4) === a0G
	}, this.z9 = function(e7, a0I, a0J) {
		var ak = "",
			e4 = e7.length - 1;
		a0J = a0J || "";
		for (var aW = 0; aW < e4; aW++) ak += a0J + e7[aW] + a0J + ",", (aW + 1) % a0I == 0 && (ak += "\n");
		return ak += a0J + e7[e4] + a0J
	}, this.qk = function(ak, gt, gv) {
		return ak.replace(new RegExp(gt, "g"), gv)
	}
}

function a0K() {
	function a0W() {
		l.nS.kK()
	}

	function a0g(nD, a0f) {
		0 < a0f && (l.nT[nD] += a0f, l.nT[nD + 1] += a0f, l.nT[nD + 2] += a0f)
	}

	function yO(nD) {
		return l.nT[nD + 2] > l.nT[nD] && l.nT[nD + 2] > l.nT[nD + 1]
	}
	this.a0L = -1, this.b = 0, this.a0M = 0, this.a0N = 8, this.a0O = 32, this.a0P = 8, this.a0Q = 32, this.a0R = [0, 0], this.ln = [0, 0, 0, 0], this.hh = null, this.a0S = !0, this.a0T = !1, this.a0U = function() {
		-1 !== this.a0L && clearTimeout(this.a0L), this.a0L = -1, this.hh = null, pi.t0()
	}, this.c = function() {
		7 === bz.f() || this.a0T || (this.a0S = !0, this.b = 0, this.a0M = 1, this.a0R = [l.nK.nL[l.gF].nm[0], l.nK.nL[l.gF].nn[0]], this.ln = [l.nK.nL[l.gF].a0V[3], l.nK.nL[l.gF].a0V[4], l.nK.nL[l.gF].a0V[5], l.nK.nL[l.gF].a0V[6]], this.a0N = l
			.nK.nL[l.gF].a0V[7], this.a0O = l.nK.nL[l.gF].a0V[8], this.a0P = l.nK.nL[l.gF].a0V[9], this.a0Q = l.nK.nL[l.gF].a0V[10], this.a0S ? this.a0L = setTimeout(a0W, 16) : this.kK())
	}, this.kK = function() {
		if (8 === bz.f() && a0X.a0Y()) this.a0L = setTimeout(a0W, 16);
		else {
			if (0 === this.b) {
				var a0Z = kH.a0a();
				if (kH.a0b(l.nK.nL[l.gF].a0V[2]), pi.eH([l.aH, l.aJ, l.nK.nL[l.gF].a0V[0], l.nK.nL[l.gF].a0V[1]]), kH.a0b(a0Z), this.hh = pi.pj(), this.b++, this.a0S) return void(this.a0L = setTimeout(a0W, 16))
			}
			for (var nD, dP, a0Z = this.a0S ? 10 : 1e6, a0Z = l.aJ - this.a0M - 1 < a0Z ? l.aJ - this.a0M - 1 : a0Z, a0c = this.a0M + a0Z, v = this.a0M; v < a0c; v++)
				for (var u = 1; u < l.aH - 1; u++) yO(nD = 4 * (dP = u + v * l.aH)) ? this.a0d(nD, dP, 1) : (this.a0d(nD, dP, 0), function(u, v, nD) {
					return 1 < u && yO(nD - 4) || u < l.aH - 2 && yO(nD + 4) || 1 < v && yO(nD - 4 * l.aH) || v < l.aJ - 2 && yO(nD + 4 * l.aH)
				}(u, v, nD) && this.a0e(u, v));
			this.a0M = a0c, this.a0M >= l.aJ - 1 ? (l.nQ.putImageData(l.nR, 0, 0, 1, 1, l.aH - 2, l.aJ - 2), n.a5 = !0, this.a0U()) : this.a0S && (this.a0L = setTimeout(a0W, 16))
		}
	}, this.a0d = function(nD, dP, cW) {
		a0g(nD, Math.floor(this.a0R[cW] + this.ln[cW] * this.hh[dP] / 1e4) - l.nT[nD])
	}, this.a0h = function(nD, fn, a0i, cW, ln) {
		a0g(nD, Math.floor(this.a0R[cW] + (1 - fn / a0i) * ln) - l.nT[nD])
	}, this.a0e = function(iH, iI) {
		for (var nD, fn, a0i, a0j = iH - this.a0O, a0k = iI - this.a0O, a0l = iH + this.a0O, a0c = iI + this.a0O, a0j = a0j < 1 ? 1 : a0j, a0l = a0l > l.aH - 2 ? l.aH - 2 : a0l, a0c = l.aJ - 2 < a0c ? l.aJ - 2 : a0c, v = a0k < 1 ? 1 : a0k; v <=
			a0c; v++)
			for (var u = a0j; u <= a0l; u++) yO(nD = 4 * (u + v * l.aH)) ? (a0i = this.a0N + (this.a0O - this.a0N) * this.hh[u + l.aH * v] / 1e4, Math.abs(iH - u) > a0i || Math.abs(iI - v) > a0i || a0i <= (fn = Math.sqrt((iH - u) * (iH - u) + (
				iI - v) * (iI - v))) || this.a0h(nD, fn, a0i, 1, this.ln[3])) : (a0i = this.a0P + (this.a0Q - this.a0P) * this.hh[u + l.aH * v] / 1e4, Math.abs(iH - u) > a0i || Math.abs(iI - v) > a0i || a0i <= (fn = Math.sqrt((iH - u) * (iH -
				u) + (iI - v) * (iI - v))) || this.a0h(nD, fn, a0i, 0, this.ln[2]))
	}
}

function a0m() {
	this.bf = new r6, this.a0n = new io, this.c = function() {
		this.bf.c()
	}, this.kK = function() {
		0 !== this.bf.iq && this.bf.iq--
	}
}

function a0o() {
	this.a0p = function() {
		var a0s;
		return !(mK.mL < 3 || dA.j8[mp[0]] >= d4.kD >> 1) && (d4.jD ? 9 !== d4.mr && (a0s = k5.oh(), !(2 * k5.ok(kk.a0u()) >= a0s)) : function() {
			if (8 === d4.mr) return !1;
			var a0s = k5.oh();
			if (2 * dA.k9[mp[0]] >= a0s) return !1;
			return !0
		}())
	}
}

function a0v() {
	"function" != typeof Math.log2 && (Math.log2 = function(u) {
		return Math.log(u) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(u) {
		return Math.log(u) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(u) {
		return 0 < u ? 1 : u < 0 ? -1 : 0
	})
}

function a0w(a0x, type, a0y, a0z) {
	var k;
	this.k = document.createElement("input"), (k = this.k).type = type ? "number" : "text", k.id = "input" + h.bf.a10++, k.value = a0x.value, k.style.width = "100%", k.style.userSelect = "none", k.style.outline = "none", k.style.resize = "none", k
		.style.border = "inherit", k.style.font = "inherit", k.style.color = aB.i8, k.style.backgroundColor = aB.a11, k.style.fontSize = "1em", k.style.padding = "0.1em 0.2em", k.addEventListener("focus", function() {
			aD.fo++
		}), k.addEventListener("blur", function() {
			aD.fo--, -1 !== a0x.cW && bn.ih.pT(a0x.cW, k.value)
		}), k.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a0x.cW && bn.ih.pT(a0x.cW, k.value), a0y ? a0y() : k.blur())
		}), a0z && k.addEventListener("input", function(aX) {
			a0z(aX)
		})
}

function a12() {
	var a13 = [L(47), L(48), L(49), L(50), L(51), L(52), L(53)],
		a14 = [100, 60, 30, 15, 6, 1],
		a15 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a16 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a17 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a18 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.a19 = function(id, fn, cW) {
		fn = this.a1A(fn);
		return +(a15[fn][id] > cW)
	}, this.a1A = function(fn) {
		for (var aW = 0; aW < a14.length; aW++)
			if (a14[aW] <= fn) return aW;
		return a14.length
	}, this.a1B = function(fn) {
		return a13[this.a1A(fn)]
	}, this.a1C = function(id, a1D) {
		return a16[id].replace(new RegExp("x", "g"), a1D)
	}, this.a1E = function(id, a1D) {
		return a17[id].replace(new RegExp("x", "g"), a1D)
	}, this.a1F = function(id, a1G) {
		return this.a18[5][id]
	}
}

function a1H(a1I, tT, a1J) {
	this.aY = document.createElement("div"), this.ch = a1I;
	var a1K = 0;
	this.resize = function(n7, r1) {
		var e4 = a1I.length;
		if (!a1J)
			for (var aW = 1; aW < e4; aW++) bK.en.r3(a1I[aW].button, 4);
		for (var r4 = 0, aW = 0; aW < e4; aW++) r4 += a1I[aW].button.offsetWidth;
		if (n7 && (a1K = n7.offsetWidth), r1 && r4 < a1K)
			for (aW = 0; aW < e4; aW++) a1I[aW].button.style.width = (100 * a1I[aW].button.offsetWidth / r4).toFixed(2) + "%";
		else
			for (aW = 0; aW < e4; aW++) a1I[aW].button.style.width = "auto";
		r1 || this.resize(n7, 1)
	};
	var m2 = this;
	m2.aY.style.height = m2.aY.style.maxHeight = "100%";
	for (var aW = 0; aW < a1I.length; aW++) a1I[aW].tZ(tT), a1I[aW].button.style.height = "100%", a1I[aW].button.style.padding = "0.0em 0.9em", a1I[aW].button.style.whiteSpace = "pre", m2.aY.appendChild(a1I[aW].button)
}

function a1L() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 !== d4.data.aIncomeType && (d4.data.aIncomeData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.aIncomeType ? (bK.nU.hJ(yq.yx(), d4.data.aIncomeData, 255), bK.nU.max(d4.data.aIncomeData) || (d4.data.aIncomeType = 0)) : 1 !== d4.data.aIncomeType || d4.data.aIncomeValue || (d4.data.aIncomeType = 0)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(54), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(55), L(56), L(39)],
			value: d4.data.aIncomeType
		}, function(cW) {
			yu(), 2 !== cW || d4.data.aIncomeData || (d4.data.aIncomeData = new Uint8Array(d4.jW)), d4.data.aIncomeType = cW, h.gQ(22)
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn;
		1 === d4.data.aIncomeType && ((hn = new z1).z2("Value"), hn.z5(new a0w({
			cW: -1,
			value: d4.data.aIncomeValue
		}, 1, 0, function(k) {
			var value = eO.h2(Math.floor(k.target.value), 0, 255);
			k.target.value = d4.data.aIncomeValue = value
		})), yy.push(hn))
	}(yy), function(yy) {
		var hn;
		2 === d4.data.aIncomeType && ((hn = new z1).z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.aIncomeData, 4)), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function a1N() {
	var a1O, a1P, a1Q, a1R = ["wss://", "/s50/", "/s51/", "/s52/"],
		a1S = 0;

	function a1f() {
		cr.bf.a1f(a1O, a1P)
	}

	function a1g(k) {
		cr.rw.a1j(a1O, new Uint8Array(k.data))
	}

	function a1i() {}

	function a1h(k) {
		cr.bf.a1h(a1O, k)
	}
	this.c = function(cW, a1T, a1U) {
		a1O = cW, a1P = a1T,
			function(a1U) {
				a1U = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : lT.ud ? "ws://localhost:" + (7130 + a1O) + "/" : a1U ? a1R[0] + "game.territorial.io/x0" + a1O + "/" : a1R[0] + cr.bf.a1e[a1O] + a1R[1 + lT.uc];
				(a1Q = new WebSocket(a1U)).binaryType = "arraybuffer", a1Q.onopen = a1f, a1Q.onmessage = a1g, a1Q.onclose = a1h, a1Q.onerror = a1i
			}(a1U)
	}, this.a1W = function() {
		return a1Q.readyState === a1Q.CONNECTING
	}, this.a1X = function() {
		return a1Q.readyState === a1Q.OPEN
	}, this.a1Y = function() {
		return a1S
	}, this.a1Z = function() {
		a1S = 1
	}, this.a1a = function() {
		return this.a1W() || this.a1X()
	}, this.a1b = function(a1T) {
		a1P = a1T
	}, this.a1c = function() {
		return a1P
	}, this.send = function(eG) {
		this.a1X() && a1Q.send(eG)
	}, this.close = function(a1d) {
		this.a1a() && (this.s(), a1Q.close(a1d))
	}, this.s = function() {
		a1Q.onopen = null, a1Q.onmessage = null, a1Q.onclose = null, a1Q.onerror = null
	}
}

function a1k() {
	var a1l = 0,
		a1m = 0,
		a1n = 300,
		a1o = 300,
		a1p = 0;
	this.a1q = 0, this.buffer = new Uint32Array(512), this.c = function() {
		a1m = a1l = 0, this.a1q = 0, a1p = 0
	}, this.kK = function() {
		if (function() {
				var e4 = kN.a1v.a1q;
				if (0 === e4) return 1;
				var buffer = kN.a1v.buffer;
				if (n.kg() % 35 == 6) {
					for (var aW = e4 - 1; 0 <= aW; aW--) dK.jQ(buffer[aW] << 2) || (e4--, buffer[aW] = buffer[e4]);
					kN.a1v.a1q = e4
				}
				return e4 < buffer.length
			}())
			if (a1n <= a1l) {
				var a1u = kN.a1v.a1q;
				if (a1u) {
					if (n.kg() % 350 != 1) return;
					if (a1p !== a1u) return void(a1p = a1u);
					if (!bK.dl.iS(mp[0])) return
				} else if (n.kg() % 12 != 8) return;
				bK.dl.a1w() || kN.a1v.c()
			} else {
				var aW, aE = l.aH,
					a1x = aE - 2,
					a1u = a1x * (l.aJ - 2),
					a1y = a1n,
					buffer = kN.a1v.buffer,
					me = kN.a1v.a1q,
					a1z = buffer.length,
					j3 = Math.min(a1m + a1y * ((1 + 19 * kN.performance.a20) * a1o), a1u);
				for (aW = a1m; aW < j3; aW += a1y) {
					var aK = 4 * (aW % a1x + (eO.eP(aW, a1x) + 1) * aE + 1);
					if (dK.jQ(aK) && (buffer[me] = aK >> 2, ++me === a1z)) {
						aW += a1y;
						break
					}
				}(a1m = aW) >= a1u && (a1m = ++a1l), kN.a1v.a1q = me
			}
	}
}

function a21() {
	this.buffer = {}, this.a22 = new Array(8), this.a23 = null, this.a24 = null, this.a10 = 0, this.uM = [0, 0], this.a25 = function() {
		h.gQ(5, 5)
	}, this.a26 = function(lP) {
		lP && (w.a27 = lP), h.i(), w.c()
	}, __fx.customLobby.setJoinFunction(() => this.a26(1)), this.a28 = function() {
		h.gQ(0 === bz.f() ? 5 : 0)
	}, this.a29 = function() {
		if (1 === bn.buffer.data[130].value) h.gQ(8, h.p7().a1T, new l3(24, {
			a2A: bn.buffer.data[125].value,
			h4: bn.buffer.data[128].value,
			h5: bn.buffer.data[129].value
		}));
		else {
			for (var e7 = (e7 = bn.buffer.data[126].value.split(",")).slice(0, 10), aW = 0; aW < e7.length; aW++) e7[aW] = e7[aW].trim().slice(0, 7).toUpperCase();
			1 === e7.length && 0 === e7[0].length && (e7 = []), h.gQ(8, h.p7().a1T, new l3(23, {
				a2A: bn.buffer.data[125].value,
				vl: e7
			}))
		}
	}, this.a2B = function(a1T, target) {
		h.gQ(4, a1T, new ec("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + cr.bf.a2C(
				"/privacy"), !1, [new ei("⬅️ " + L(2), function() {
				h.gQ(a1T)
			}), new ei("✅ Accept", function() {
				bn.ih.pT(140, 1), 0 === target ? h.gQ(2, a1T) : h.gQ(8, a1T, new l3(target))
			})]))
	}, this.a2D = function() {
		for (var aW = 0; aW < 8; aW++) this.a22[aW] = bE.lM.a2E(gD.gE(5));
		this.a22[1] = "[" + this.a22[1] + "]", 5 === h.l2 && (h.p7().a2F.pT(this.a22), h.p7().resize())
	}, this.a2G = function(hB, rn, rw) {
		hB = bK.dl.a2H(hB, 1, 1e6);
		rn = L(57, [rn]);
		return (rn += "<br>") + L(58, [rw]) + "<br>" + L(59, [hB + "–" + (hB + 2)]) + "<br>" + L(60, [hB])
	}
}

function a2I() {
	this.zg = new a2J, this.dl = new a2K, this.a2L = new a2M, this.a2N = new a2O, this.kp = new a2P
}

function a2Q(a1I) {
	var sC = document.createElement("div"),
		a2R = document.createElement("div"),
		uq = (this.u = 0, this.v = 0);

	function a2U() {
		an.az.s()
	}
	this.ch = a1I, this.show = function(u, v, a2W) {
		if (uq) return [0, 0];
		uq = 1, this.u = u, this.v = v,
			function(self, a2W) {
				var aE = bK.en.jx(.16, .7),
					aF = a1I.length * aE / 3,
					a2Y = aD.aE / aD.fJ,
					a2Z = aD.aF / aD.fJ,
					m5 = Math.min(1, Math.min(a2Y / aE, a2Z / aF));
				aE *= m5, aF *= m5, a2W && (self.u += bK.en.jx(.03, .5)), self.u = eO.h2(self.u, 0, a2Y - aE), self.v = eO.h2(self.v, 0, a2Z - aF), a2R.style.left = self.u + "px", a2R.style.top = self.v + "px", a2R.style.width = aE + "px", a2R
					.style.height = aF + "px", a2R.style.font = bK.en.i3(0, .3 * aF / a1I.length), bK.en.r3(a2R, 5);
				for (var aW = 1; aW < a1I.length; aW++) bK.en.r3(a1I[aW].button, 8)
			}(this, a2W), document.body.appendChild(sC)
	}, this.s = function() {
		uq && (uq = 0, sC.removeEventListener("click", a2U), h.removeChild(document.body, sC))
	};
	for (var aW = 0; aW < a1I.length; aW++) new a2S("" + (1 + aW), a1I[aW].button, 0, 1);
	sC.style.position = "fixed", sC.style.top = "0", sC.style.left = "0", sC.style.width = "100%", sC.style.height = "100%", sC.style.zIndex = "5", a2R.style.position = "absolute",
		function() {
			for (var a2V = (100 / a1I.length).toFixed(2) + "%", aW = 0; aW < a1I.length; aW++) a1I[aW].button.style.width = "100%", a1I[aW].button.style.height = a1I[aW].button.style.maxHeight = a2V, a1I[aW].button.style.padding = "0.0em 0.9em", a2R
				.appendChild(a1I[aW].button)
		}(), sC.appendChild(a2R), sC.addEventListener("click", a2U)
}

function a2a() {
	var fd, a2b, aE, aF, lr, a2c, a2d, x4, canvas, x5, a2e;

	function iv() {
		return Math.floor((aD.aE - aE) / 2) < fZ.aF + 2 * iN.gap ? aD.aF - aF - 4 * iN.gap - fZ.aF : aD.aF - aF - 2 * iN.gap
	}
	this.c = function() {
		a2e = fd = !1, lr = .61, a2c = .07, a2d = .09, x5 = x4 = aF = 0
	}, this.resize = function() {
		var cd, iw, ag, a2i, a2j, i5;
		fd && (aE = oL(aE = bx.by.i2() ? Math.floor(.69 * aD.lh) : Math.floor(.5 * aD.lh), oM(aD.aE - 2 * iN.gap, 10)), aE = oL(aE, Math.floor(3.57 * oM(aD.aF - 2 * iN.gap, 3))), aF = Math.floor(.28 * aE), (canvas = document.createElement(
			"canvas")).width = aE, canvas.height = aF, cd = canvas.getContext("2d", {
			alpha: !0
		}), iw = Math.floor(1 + aF / 40), cd.clearRect(0, 0, aE, aF), cd.fillStyle = aB.ea, cd.fillRect(iw, iw, aE - 2 * iw, aF - 2 * iw), cd.lineJoin = "bevel", cd.lineWidth = 2 * iw, cd.strokeStyle = aB.i8, cd.strokeRect(iw, iw, aE -
			2 * iw, aF - 2 * iw), cd.imageSmoothingEnabled = !1, ag = aN.get(a2b), a2i = ag.width, i5 = (1 === a2b ? .85 : 21 === a2b ? .666 : .9) * lr * aF / (a2j = ag.height), cd.setTransform(i5, 0, 0, i5, Math.floor((aE - i5 * a2i) /
			2), Math.floor((aF - i5 * a2j) / 2)), cd.drawImage(ag, 0, 0), cd.setTransform(1, 0, 0, 1, Math.floor(aE - a2d * aF - a2c * aF - iw), Math.floor(iw + a2c * aF)), function(cd, e4) {
			cd.lineWidth = Math.floor(1 + aF / 80), cd.strokeStyle = aB.i8, cd.beginPath(), cd.moveTo(0, 0), cd.lineTo(e4, e4), cd.moveTo(0, e4), cd.lineTo(e4, 0), cd.stroke()
		}(cd, Math.floor(a2d * aF)), cd.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(hB, a2g, a0p, a2h) {
		fd || a2h && a2e || (a2b = a0p ? 21 : hB ? 1 : 2, fd = a2e = !0, this.resize(), fQ.s(), fZ.ly(), x5 = n.o, x4 = a2g ? 1 : 0)
	}, this.kK = function() {
		!fd || 1 <= x4 || (x4 = 1 < (x4 += 5e-4 * (n.o - x5)) ? 1 : x4, x5 = n.o, n.a5 = !0)
	}, this.t = function(u, v) {
		return !(!fd || x4 <= 0 || (u -= Math.floor((aD.aE - aE) / 2), v -= iv(), u < 0) || v < 0 || aE < u || aF < v || (aE - aF / 3 < u && v < aF / 3 && (fd = !1, n.a5 = !0), 0))
	}, this.a6 = function() {
		!fd || x4 <= 0 || (a7.globalAlpha = x4, a7.drawImage(canvas, Math.floor((aD.aE - aE) / 2), iv()), a7.globalAlpha = 1)
	}
}

function l3(id, nw, a2l) {
	var eg, eh;

	function a2q() {
		eh.n8.innerHTML += "<br>" + L(63)
	}

	function a32() {
		var eN = 1;
		h.gQ(4, 1, new ec(L(64), L(65), !1, [new ei("🔄 Reload", function() {
			eN && (setTimeout(function() {
				h.gQ(1)
			}, 5e3), bx.by.a39()), eN = 0
		}, aB.a3A)]))
	}

	function a2p() {
		l7.eH(90), l7.eK(30, Math.floor(eO.pow(30) * Math.random())), l7.eK(30, Math.floor(eO.pow(30) * Math.random())), l7.eK(30, Math.floor(eO.pow(30) * Math.random())), gD.c(l7.eG), bn.ih.pT(110, __fx.passwordReset.getCustomPassword() || b9.bA.wf(
			b9.bA.wd(15))), cr.rq.a3B()
	}
	this.a2m = !0, this.a2n = id, this.show = function() {
		eg.show(), this.resize(), 15 === id ? (cr.bf.a2o(id) ? a2p : a2q)() : 16 === id ? cr.bf.a2o(id) ? cr.cs.lJ(2) : a2q() : 17 === id ? cr.bf.a2o(id) ? cr.cs.lJ(3) : a2q() : 18 === id ? (cr.bf.close(0, 3253), cr.bf.a2r(0, id, 0), a2q()) :
			21 === id ? cr.bf.a2o(id) ? cr.ru.a2s(nw.l4, nw.h4, nw.h5) : a2q() : 22 === id ? cr.bf.a2o(id) ? cr.ru.a2t(nw.l4, nw.a2u, nw.a2v) : a2q() : 23 === id ? cr.bf.a2o(id) ? cr.ru.a2w(nw.a2A, nw.vl) : a2q() : 24 === id ? cr.bf.a2o(id) ? cr
			.ru.a2x(nw.a2A, nw.h4, nw.h5) : a2q() : 25 === id ? cr.bf.a2o(id) ? cr.rq.a2y(nw) : a2q() : 28 === id ? cr.bf.a2o(id) ? cr.ru.a2z(nw.l4, nw.a2u, nw.a2v) : a2q() : 29 === id ? cr.bf.a2o(id) ? cr.rq.a30(nw) : a2q() : 30 === id && (cr.bf
				.a2o(id) ? lY.a31() || a32() : a2q())
	}, this.a33 = function() {
		15 === id ? a2p() : 16 === id ? cr.cs.lJ(2) : 17 === id ? cr.cs.lJ(3) : 18 === id ? h.gQ(8, this.a1T, new l3(16)) : 21 === id ? cr.ru.a2s(nw.l4, nw.h4, nw.h5) : 22 === id ? cr.ru.a2t(nw.l4, nw.a2u, nw.a2v) : 23 === id ? cr.ru.a2w(nw.a2A,
			nw.vl) : 24 === id ? cr.ru.a2x(nw.a2A, nw.h4, nw.h5) : 25 === id ? cr.rq.a2y(nw) : 28 === id ? cr.ru.a2z(nw.l4, nw.a2u, nw.a2v) : 29 === id ? cr.rq.a30(nw) : 30 === id ? lY.a31() || a32() : 1e3 === id && (this.a2n = id = 25, cr.rq
			.a2y(nw))
	}, this.a34 = function(code, mX, data) {
		!mX && code !== id || (15 === code || 16 === code ? h.gQ(7, this.a1T) : 17 === code ? (cr.bf.close(0, 3252), bn.bf.a35(0), bn.buffer.data[117].c3 && 0 < bn.buffer.data[117].c3.length ? (mX = bn.bf.a36(0), bn.ih.pT(105, mX.bC), bn.ih.pT(
			106, mX.password), h.gQ(8, this.a1T, new l3(16))) : (bn.ih.pT(105, ""), h.bf.a28())) : 21 === code ? h.gQ(10, this.a1T, new a37(data)) : 23 === code ? h.gQ(13, this.a1T, new a38({
			data: data,
			a2A: nw.a2A
		})) : 25 === code ? (h.bf.a23.bC = nw.bC, bn.ik.wY(nw.bC), h.gQ(15, this.a1T)) : 30 === code && (data ? h.gQ(1) : a32()))
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), eh.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(61), [new ei("⬅️ " + L(2), function() {
		a2l ? h.gQ(29) : h.bf.a28()
	})]), eh = new el(eg.em, L(62))
}

function a3C() {
	var a3D, a3E, a3F, a3G, a3H, a3I, a3J, a3K, a3L, a3M, a3N, a3O, a3P, a3Q, a3R, a3S, a3T, a3U, a3W, a3X, a3Y, a3Z, a3a, a3g, a3h, a3V = null,
		a3c = 0,
		a3d = !1,
		a3e = new Float32Array(4),
		a3f = 0,
		a3i = 112,
		a3j = 0;

	function a3k() {
		a3L = Math.floor(+aD.lh), a3M = Math.floor(.5 * a3L), a3V.width = aD.aE, a3V.height = aD.aF, a3W = a3V.getContext("2d", {
			alpha: !0
		}), bK.en.textAlign(a3W, 1), bK.en.textBaseline(a3W, 1), a3W.imageSmoothingEnabled = !0
	}

	function a3l() {
		var aW, a3q;
		for (a7.font = bK.en.i3(1, 100 * a3N), a3q = 80 / Math.floor(a7.measureText(bK.bL.bB(d4.a3r)).width), a7.font = bK.en.i3(1, 100), aW = d4.jW - 1; 0 <= aW; aW--) a3K[aW] = 100 / Math.floor(a7.measureText(dA.vd[aW]).width), a3J[aW] = Math.min(
			a3q, a3K[aW])
	}

	function a3s(aW) {
		return !a3j || (aW = dA.k9[aW]) < 1e6 ? 1 : aW < 1e7 ? a3e[0] : a3e[Math.min(Math.floor(Math.log10(aW)) - 6, 3)]
	}

	function a3p(rL) {
		a3d = !1, a3c = n.o, a3U = !1, a3T = 1, a3R = a3S = 0, rL.clearRect(0, 0, aD.aE, aD.aF);
		for (var a49, a4A, aW, a4B, fontSize, a4C, iw = ix / iy, iz = j0 / iy, j1 = (aD.aE + ix) / iy, j2 = (aD.aF + j0) / iy, a4D = 0 !== dA.iR[d4.jL] && !bK.dl.iS(d4.jL), ba = mK.mL - 1; 0 <= ba; ba--) aW = mK.my[ba], (fontSize = Math.floor(a3Q *
			iy * a3s(aW) * a3J[aW] * a3H[aW])) < a3P || a3L <= fontSize || a3F[aW] + a3H[aW] > iw && a3F[aW] < j1 && a3G[aW] + a3I[aW] > iz && a3G[aW] < j2 && (a49 = Math.floor(aD.aE * (a3F[aW] + a3H[aW] / 2 - iw) / (j1 - iw)), a4A = Math.floor(
			aD.aF * (a3G[aW] + a3I[aW] / 2 - iz) / (j2 - iz) - .1 * fontSize), a4B = dK.ln[aW], rL.font = bK.en.i3(1 === dA.a4E[aW] ? 4 : 1, fontSize), rL.fillStyle = a4F(fontSize, a4B % 2), a3j ? a4G(rL, aW, fontSize, a49, a4A, a4B) : a4H(
			aW, fontSize, a49, a4A, rL), a3U = !0, 0 < a3Y[aW] ? function(a49, a4A, fontSize, aW, rL) {
			0 === kE[aW] ? a3x.bh.a3y(a3X[aW]) ? (function(a49, a4A, fontSize, player, x0, rL) {
				for (var a4R = a4A, aP = (rL.globalAlpha = a4S(fontSize), a3s(player) * (a3j ? a3f : a3K[player])), a4Q = a49 - .5 * fontSize / aP - .9 * fontSize, eN = 0; eN < 2; eN++) rL.fillText(a3x.bh.a4Z(x0), a4Q, a4R), a4Q =
					a49 + .5 * fontSize / aP + .9 * fontSize;
				rL.globalAlpha = 1
			}(a49, a4A, fontSize, aW, a3X[aW], rL), a4J(a49, a4A, fontSize, 0, 0, rL)) : a3x.bh.a4V(a3X[aW]) ? (a4W(a49, a4A, fontSize, a3X[aW], 0, rL), a4J(a49, a4A, fontSize, 0, 1, rL)) : (a4W(a49, a4A, fontSize, a3X[aW], 1, rL), a4J(
				a49, a4A, fontSize, 1, 0, rL)) : a4W(a49, a4A, fontSize, a3X[aW], 0, rL)
		}(a49, a4A, fontSize, aW, rL) : 0 === kE[aW] && a4J(a49, a4A, fontSize, 0, 0, rL), a4D && (0 < a3Y[aW + d4.jW] || 0 < a3Y[aW + 2 * d4.jW] || 0 < a3Y[aW + 3 * d4.jW] || 0 < a3Y[aW + 4 * d4.jW]) && function(a49, a4A, fontSize, aW, rL) {
			var ag, hD = -1;
			for (ag = 4; 1 <= ag; ag--) 0 < a3Y[aW + ag * d4.jW] && hD++;
			for (ag = 1; ag < 5; ag++) 0 < a3Y[aW + ag * d4.jW] && (! function(a49, a4A, fontSize, ag, aW, a4O, m6, rL) {
				var pt;
				if (1 === ag) {
					aW = a3X[aW + d4.jW];
					if (!a3x.bh.a4X(aW)) return function(a49, a4A, fontSize, x0, a4O, rL) {
						rL.globalAlpha = a4S(fontSize);
						a49 -= .534 * a4O * fontSize, a4O = a4A + 1.59 * fontSize;
						rL.font = bK.en.i3(0, .785 * fontSize), rL.fillText(a3x.bh.a4Z(x0), a49, a4O), rL.globalAlpha = 1
					}(a49, a4A, fontSize, aW, a4O, rL);
					pt = a3x.nV.xJ[aW - 1024 + a3x.bh.a4Y]
				} else pt = 2 === ag ? fQ.a4b()[4].canvas[+(m6 < 255)] : (3 === ag ? fQ.a4b()[5] : fQ.a4b()[6]).canvas[0];
				aW = a3x.nV.xI, m6 = .8 * fontSize / aW, ag = a49 - .5 * m6 * aW - .534 * a4O * fontSize, a49 = a4A + 1.4 * m6 * aW;
				rL.setTransform(m6, 0, 0, m6, ag, a49), rL.globalAlpha = a4S(fontSize), rL.drawImage(pt, 0, 0), rL.globalAlpha = 1, rL.setTransform(1, 0, 0, 1, 0, 0)
			}(a49, a4A, fontSize, ag, aW, hD, a3Y[aW + ag * d4.jW], rL), hD -= 2)
		}(a49, a4A, fontSize, aW, rL), (a4C = a3N * fontSize) < a3P || (rL.font = bK.en.i3(1, a4C), a4A += Math.floor(.78 * fontSize), a3j ? a4H(aW, a4C, a49, a4A, rL) : a4G(rL, aW, a4C, a49, a4A, a4B)))
	}

	function a4H(aW, fontSize, u, v, rL) {
		var ___id = aW;
		var showName = aW < d4.j6 || !__fx.settings.hideBotNames;
		if (showName) rL.fillText(dA.vd[aW], u, v), aW < d4.j6 && 2 !== dA.a4E[aW] || (aW = fontSize / a3K[aW], rL.fillRect(u - .5 * aW, v + bK.en.a4M * fontSize, aW, Math.max(1, .1 * fontSize)));
		a3j && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (rL.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			rL.fillText(__fx.utils.getDensity(___id), u, showName ? v + fontSize : v)
		);
	}

	function a4G(rL, aW, fontSize, a49, a4A, a4B) {
		var ox = dA.ox[aW],
			a4N = bK.bL.bB(dA.k9[aW] - ox);

		function drawDensity() {
			!a3j && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (rL.fillStyle = __fx.utils.textStyleBasedOnDensity(aW)), rL.fillText(__fx.utils.getDensity(aW), a49, a4A + fontSize))
		}
		ox ? (ox = rL.fillStyle, rL.fillStyle = a4F(fontSize, 2 + a4B % 2), rL.fillText(a4N, a49, a4A), rL.fillStyle = ox) : a4B >> 1 & 1 ? (rL.lineWidth = .05 * fontSize, rL.strokeStyle = a4F(fontSize, a4B % 2), rL.strokeText(a4N, a49, a4A)) : (1 <
			a4B && (rL.lineWidth = .12 * fontSize, rL.strokeStyle = a4F(fontSize, a4B), rL.strokeText(a4N, a49, a4A)), rL.fillText(a4N, a49, a4A)), drawDensity()
	}

	function a4J(a49, a4A, fontSize, a4O, a4P, rL) {
		var i5 = .95 * fontSize / a3a,
			a49 = a49 - .5 * i5 * a3Z + .8 * a4O * fontSize,
			a4O = a4A - 1.76 * i5 * a3a - (.35 - bK.en.a4M + .7) * a4P * fontSize;
		rL.setTransform(i5, 0, 0, i5, a49, a4O), rL.globalAlpha = a4S(fontSize), rL.drawImage(aN.get(4), 0, 0), rL.globalAlpha = 1, rL.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4W(a49, a4A, fontSize, x0, a4O, rL) {
		var jw, a4Q, i5;
		rL.globalAlpha = a4S(fontSize), a3x.bh.a4X(x0) ? (jw = a3x.nV.xI, rL.setTransform(i5 = 1.1 * fontSize / jw, 0, 0, i5, a4Q = a49 - .5 * i5 * jw - .8 * a4O * fontSize, i5 = a4A - 1.55 * i5 * jw), rL.drawImage(a3x.nV.xJ[x0 - 1024 + a3x.bh.a4Y],
			0, 0), rL.setTransform(1, 0, 0, 1, 0, 0)) : (a4Q = a49 - .8 * a4O * fontSize, i5 = a4A - (.35 - bK.en.a4M + 1) * fontSize, rL.fillText(a3x.bh.a4Z(x0), a4Q, i5)), rL.globalAlpha = 1
	}

	function a4F(fontSize, a4B) {
		return a3M <= fontSize && fontSize < a3L ? jE.a4c[a4B] + a4S(fontSize).toFixed(3) + ")" : jE.a4d[a4B]
	}

	function a4S(fontSize) {
		return a3M <= fontSize && fontSize < a3L ? 1 - (fontSize - a3M) / (a3L - a3M) : 1
	}

	function a4q(aP, aE) {
		return 1 + Math.floor(a3O * aP * aE)
	}

	function a4n(aW) {
		for (var left = a3F[aW], ba = a3F[aW] - dA.j9[aW] - 1; 0 <= ba; ba--)
			if (!a4s(aW, --left, a3G[aW], a3I[aW])) {
				left++;
				break
			} var right = a3F[aW];
		for (ba = dA.jA[aW] - a3F[aW] - a3H[aW]; 0 <= ba; ba--)
			if (!a4s(aW, ++right + a3H[aW] - 1, a3G[aW], a3I[aW])) {
				right--;
				break
			} var u = Math.floor((left + right) / 2),
			top = a3G[aW];
		for (ba = a3G[aW] - dA.jB[aW] - 1; 0 <= ba; ba--)
			if (!a4t(aW, u, --top, a3H[aW])) {
				top++;
				break
			} var bottom = a3G[aW];
		for (ba = dA.jC[aW] - a3G[aW] - a3I[aW]; 0 <= ba; ba--)
			if (!a4t(aW, u, ++bottom + a3I[aW] - 1, a3H[aW])) {
				bottom--;
				break
			} var v = Math.floor((top + bottom) / 2);
		a4k(aW, u, v, a3H[aW], a3I[aW]) && (a3F[aW] = u, a3G[aW] = v)
	}

	function a4k(player, u, v, aE, aF) {
		bX = Math.floor(.2 * aE);
		for (var bX, ag = u + aE - 1; u <= ag; ag--)
			if (!a4s(player, ag, v, aF)) return;
		for (ag = v + aF - 1 - (bX = (bX = Math.floor(.25 * aF)) < 1 ? 1 : bX); v + bX <= ag; ag--)
			if (!a4t(player, u, ag, aE)) return;
		return 1
	}

	function a4s(player, u, v, aF) {
		return dK.yI(player, 4 * (v * l.aH + u)) && dK.yI(player, 4 * ((v + aF - 1) * l.aH + u))
	}

	function a4t(player, u, v, aE) {
		return dK.yI(player, 4 * (v * l.aH + u)) && dK.yI(player, 4 * (v * l.aH + u + aE - 1))
	}
	this.c = function() {
		if (a3j = bn.buffer.data[7].value || 8 === d4.mr, a3U = !1, a3Q = .88, a3N = .5, a3O = 1.8, a3P = 12 - 3 * bn.buffer.data[9].value, a3E = a3D = 0, a3F = new Uint16Array(d4.jW), a3G = new Uint16Array(d4.jW), a3H = new Uint16Array(d4.jW),
			a3I = new Uint16Array(d4.jW), a3J = new Float32Array(d4.jW), a3K = new Float32Array(d4.jW), a3X = new Uint16Array(2 * d4.jW), a3Y = new Uint8Array(5 * d4.jW), a3g = new Uint8Array(d4.jW), a3h = new Uint8Array(d4.jW), a3V = a3V ||
			document.createElement("canvas"), a3k(), a3S = a3R = 0, a3T = 1, a3j) {
			var aW, a3q;
			for (a3l(), a7.font = bK.en.i3(1, 100), a3q = 100 / Math.floor(a7.measureText("900 000").width), aW = d4.jW - 1; 0 <= aW; aW--) a3J[aW] = Math.min(a3q, 2 * a3K[aW]);
			a3f = a3q, a3e[0] = 100 / (a3q * Math.floor(a7.measureText("5 000 000").width)), a3e[1] = 100 / (a3q * Math.floor(a7.measureText("50 000 000").width)), a3e[2] = 100 / (a3q * Math.floor(a7.measureText("500 000 000").width)), a3e[3] =
				100 / (a3q * Math.floor(a7.measureText("1 000 000 000").width))
		} else a3l();
		! function() {
			var aW;
			for (aW = d4.jW - 1; 0 <= aW; aW--) dA.j8[aW] < 12 ? (a3F[aW] = dA.j9[aW] + 1, a3G[aW] = dA.jB[aW] + 1, a3H[aW] = 1, a3I[aW] = 1) : (a3F[aW] = dA.j9[aW], a3G[aW] = dA.jB[aW] + 1, a3H[aW] = 4, a3I[aW] = 2);
			if (d4.iA)
				for (aW = 0; aW < d4.j6; aW++) a3H[aW] = 0;
			a3Z = aN.get(4).width, a3a = aN.get(4).height
		}()
	}, this.od = function(nD, wy) {
		wy > 18 * dA.j8[nD] ? (a3h[nD] = 6, dK.ln[nD] = 2 + dK.ln[nD] % 2) : (a3g[nD] = 4, (dK.ln[nD] < 2 || 3 < dK.ln[nD]) && (dK.ln[nD] = 6 + dK.ln[nD] % 2))
	}, this.oe = function(nD, wy) {
		wy > 6 * dA.j8[nD] ? (a3h[nD] = 6, dK.ln[nD] = 4 + dK.ln[nD] % 2) : (a3g[nD] = 4, (dK.ln[nD] < 4 || 5 < dK.ln[nD]) && (dK.ln[nD] = 8 + dK.ln[nD] % 2))
	}, this.resize = function() {
		a3k(), a3p(a3W)
	}, this.a3t = function() {
		for (var aW = 0; aW < d4.j6; aW++) dA.jA[aW] - dA.j9[aW] != 3 || dA.jC[aW] - dA.jB[aW] != 3 ? (a3F[aW] = dA.j9[aW] + (dA.jA[aW] !== dA.j9[aW] ? 1 : 0), a3G[aW] = dA.jB[aW], a3H[aW] = 1, a3I[aW] = 1) : (a3F[aW] = dA.j9[aW], a3G[aW] = dA
			.jB[aW] + 1, a3H[aW] = 4, a3I[aW] = 2)
	}, this.a3u = function(player, cW, a3v) {
		! function(player, cW, a3v) {
			player += cW * d4.jW;
			0 === cW ? a3X[player] === a3v && 0 < a3Y[player] ? a3Y[player] = 0 : (a3X[player] = a3v, a3Y[player] = a3x.bh.a3y(a3v) ? 255 : 64) : 1 === cW ? (a3Y[player] = 64, a3X[player] = a3v) : a3Y[player] = a3v
		}(player, cW, a3v), 2 === d4.fL && this.iE(!0)
	}, this.a6 = function() {
		a3U && (1 !== a3T ? (a7.imageSmoothingEnabled = !0, a7.setTransform(a3T, 0, 0, a3T, 0, 0), a7.drawImage(a3V, -a3R / a3T, -a3S / a3T), a7.setTransform(1, 0, 0, 1, 0, 0), a7.imageSmoothingEnabled = !1) : a7.drawImage(a3V, -a3R, -a3S))
	}, this.a3z = function(rJ, rK) {
		a3R += rJ, a3S += rK
	}, this.z = function(rJ, rK) {
		oD.a3z(rJ, rK)
	}, this.zoom = function(gu, iH, iI) {
		a3T *= gu, a3R = (a3R + iH) * gu - iH, a3S = (a3S + iI) * gu - iI
	}, this.a42 = function(player) {
		var j9 = dA.j9[player],
			jA = dA.jA[player],
			jB = dA.jB[player],
			jC = dA.jC[player],
			a43 = dI.zW(0),
			a44 = dI.zY(0),
			a45 = dI.zW(aD.aE),
			a46 = dI.zY(aD.aF);
		j9 < a45 && a43 < jA && jB < a46 && a44 < jC && (a3H[player] = 0, a3d = !0)
	}, this.iE = function(mX) {
		return !(!a3d && !mX && n.o < a3c + (1 === a3T && 0 === a3R && 0 === a3S && (d4.a41() || d4.iA || 2 === d4.fL) ? 1e3 : a3i) || (a3p(a3W), 0))
	}, this.a47 = function(aW) {
		return a3s(aW) * a3J[aW]
	}, this.a48 = function(player) {
		return a3J[player]
	}, this.kK = function() {
		n.kg() % 10 == 9 && (a3d = a3d || d4.a4e() && !d4.a41()), !d4.a41() && 4 <= ++a3E && function() {
			var aW, ba, eN;
			for (a3E = 0, eN = 4; 1 <= eN; eN--)
				for (ba = mK.mL - 1; 0 <= ba; ba--) aW = mK.my[ba] + eN * d4.jW, 0 < a3Y[aW] && a3Y[aW] < 255 && a3Y[aW]--;
			if (2 !== d4.fL)
				for (ba = mK.mL - 1; 0 <= ba; ba--) aW = mK.my[ba], 0 < a3Y[aW] && a3Y[aW] < 255 && a3Y[aW]--
		}();
		var aW, ba, e4 = Math.floor(.1 * mK.mL);
		for (e4 = (e4 = e4 < 8 ? 8 : e4) > mK.mL ? mK.mL : e4, aW = a3D + e4 - 1; a3D <= aW; aW--) ba = aW % mK.mL, ! function(aW) {
			var aP = a3s(aW) * a3J[aW];
			0 < a3H[aW] && a4k(aW, a3F[aW], a3G[aW], a3H[aW], a3I[aW]) ? ! function(aW) {
				for (var u, v, aE, aF, aK = !1, eN = 0; eN < 8; eN++) {
					if (aE = a3H[aW] + 2, aF = a3I[aW] + 2, aE > dA.jA[aW] - dA.j9[aW] + 1 || aF > dA.jC[aW] - dA.jB[aW] + 1) return aK;
					if (u = a3F[aW] - 1, v = a3G[aW] - 1, !a4k(aW, u, v, aE, aF)) return aK;
					a3F[aW] = u, a3G[aW] = v, a3H[aW] = aE, a3I[aW] = aF, aK = !0
				}
				return aK
			}(aW) && function(aW, aP) {
				for (var u, v, aE, aF, aK = !1, a4r = a3H[aW], m5 = 1 + Math.floor(.02 * a4r), eN = 1; eN < 5; eN++) {
					if ((aE = a4r + eN * m5) > dA.jA[aW] - dA.j9[aW] + 1) return aK;
					if ((aF = a4q(aP, aE)) > dA.jC[aW] - dA.jB[aW] + 1) return aK;
					u = dA.j9[aW] + Math.floor(Math.random() * (dA.jA[aW] - dA.j9[aW] + 2 - aE)), v = dA.jB[aW] + Math.floor(Math.random() * (dA.jC[aW] - dA.jB[aW] + 2 - aF)), a4k(aW, u, v, aE, aF) && (a3F[aW] = u, a3G[aW] = v, a3H[aW] =
						aE, a3I[aW] = aF, aK = !0)
				}
				return aK
			}(aW, aP) && a4n(aW) : ! function(aW, aP) {
				var aF, u = a3F[aW] + 1,
					v = a3G[aW] + 1,
					aE = a3H[aW] - 2;
				for (;;) {
					if (aE < 1) {
						a3H[aW] = 0;
						break
					}
					if (aF = a4q(aP, aE), a4k(aW, u, v, aE, aF)) return a3F[aW] = u, a3G[aW] = v, a3H[aW] = aE, a3I[aW] = aF, 1;
					u++, v++, aE -= 2
				}
				return
			}(aW, aP) ? function(aW, aP) {
				var u, v, aE, aF, eN, cZ, eS = dA.jA[aW] - dA.j9[aW] + 1,
					tB = Math.floor(.02 * eS);
				for (cZ = -6 * (tB = tB < 1 ? 1 : tB), eN = eS; cZ <= eN; eN -= tB)
					if (aF = a4q(aP, aE = 0 < eN ? eN : 1), u = dA.j9[aW] + Math.floor(Math.random() * (dA.jA[aW] - dA.j9[aW] + 2 - aE)), v = dA.jB[aW] + Math.floor(Math.random() * (dA.jC[aW] - dA.jB[aW] + 2 - aF)), a4k(aW, u, v, aE, aF))
						return a3F[aW] = u, a3G[aW] = v, a3H[aW] = aE, a3I[aW] = aF
			}(aW, aP) : a4n(aW)
		}(mK.my[ba]);
		a3D = (a3D += e4) % mK.mL
	}, this.a4h = function() {
		var aW, nD, gt, gv;
		if (n.kg() % 4 == 1)
			for (aW = mK.mL - 1; 0 <= aW; aW--) nD = mK.my[aW], dK.ln[nD] < 2 || ((gt = Math.max(a3g[nD] - 1, 0)) === (gv = Math.max(a3h[nD] - 1, 0)) ? 0 === gt && (dK.ln[nD] %= 2) : 0 === gv && dK.ln[nD] < 6 && (dK.ln[nD] += 4), a3g[nD] = gt,
				a3h[nD] = gv)
	}, this.a4i = function(player) {
		var aW = player + 2 * d4.jW,
			m6 = a3Y[aW];
		return 0 < m6 && (eX.wt(50, player), a3Y[aW] = 0, 255 === m6)
	}, this.a4j = function(player) {
		return 255 === a3Y[player + 2 * d4.jW]
	}
}

function a4u() {
	this.e7 = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a4v = function() {
		for (var a4w = [], e7 = this.e7, e4 = e7.length, aW = 0; aW < e4; aW++) a4w.push(e7[aW]);
		var a4x = bn.buffer.data[12].hs;
		for (aW = 0; aW < e4; aW++)
			if (a4w[aW] === a4x) {
				a4w.splice(aW, 1), e4--;
				break
			} a4w.sort(), e4++, a4w.unshift(a4x);
		try {
			if ("undefined" == typeof Intl) return a4w;
			for (aW = 0; aW < e4; aW++) {
				var ak = new Intl.DisplayNames([a4w[aW]], {
					type: "language"
				}).of(a4w[aW]);
				ak !== a4w[aW] && (a4w[aW] = a4w[aW] + ": " + ak)
			}
		} catch (k) {
			console.log("error 3646: " + k)
		}
		return a4w
	}, this.a4z = function(a3Y) {
		for (var ak = bn.buffer.data[12].value, e4 = a3Y.length, aW = 0; aW < e4; aW++)
			if (ak === a3Y[aW].split(":")[0]) return aW;
		return 0
	}, this.a50 = function(a51) {
		if (a51 && !(a51.length < 2)) {
			a51 = a51.split("-")[0].toLowerCase();
			for (var e7 = this.e7, e4 = e7.length, aW = 0; aW < e4; aW++)
				if (a51 === e7[aW]) return aW
		}
		return -1
	}
}

function a52() {
	var a53 = 0,
		a55 = new Uint16Array(64);

	function wW(tH) {
		a53 -= 2;
		for (var aW = tH; aW < a53; aW += 2) a55[aW] = a55[aW + 2], a55[aW + 1] = a55[aW + 3]
	}
	this.c = function() {
		a53 = 0
	}, this.kK = function() {
		var aW, kM, ld;
		if (0 !== a53)
			if (0 === dA.iR[d4.jL]) a53 = 0;
			else if (0 === k2.zn(d4.jL)) a53 = 0;
		else
			for (aW = a53 - 2; 0 <= aW; aW -= 2)(kM = a55[aW]) < d4.jW && 0 === dA.iR[kM] ? wW(aW) : (ld = a55[aW + 1], (d4.jW <= kM && jS.a57(d4.jL) || kM < d4.jW && jS.a58(d4.jL, kM)) && (ko.zg.zm(ld, kM), wW(aW)))
	}, this.zp = function(kM, ld) {
		! function(kM, ld) {
			for (var aW = 0; aW < a53; aW += 2)
				if (a55[aW] === kM) return a55[aW + 1] = Math.min(a55[aW + 1] + ld, 1023), 1;
			return
		}(kM, ld) && 64 !== a53 && (a55[a53] = kM, a55[a53 + 1] = ld, a53 += 2)
	}
}

function p3() {
	this.iX = function() {
		var nC = function() {
				for (var a5L = uY.p0.a5L, e4 = a5L.length, max = 0, aW = 0; aW < e4; aW++) max = Math.max(max, a5L[aW]);
				return nN(Math.max(max, 1))
			}(),
			aE = (aX = d4.data, (aE = lH).c(), aE.eK(12, lT.rVersion), aE.cW += 43, aE.eK(2, aX.mapType), aE.eK(8, aX.mapProceduralIndex), aE.eK(8, aX.mapRealisticIndex), aE.eK(14, aX.mapSeed), aE.qh(aX.mapName, 5), 2 === aX.mapType && aE.qi(aX
				.canvas), aE.eK(1, aX.passableWater), aE.eK(1, aX.passableMountains), aE.eK(10, aX.playerCount), aE.eK(10, aX.humanCount), aE.eK(9, aX.selectedPlayer), aE.eK(1, aX.gameMode), aE.eK(2, aX.playerMode), aE.eK(2, aX
				.battleRoyaleMode), aE.eK(4, aX.numberTeams), aE.eK(1, aX.isZombieMode), aE.eK(1, aX.isContest), aE.eK(1, aX.isReplay), aE.oQ(aX.elo, 2, 14), aE.eK(1, aX.colorsType), aE.eK(1, aX.colorsPersonalized), aE.oQ(aX.colorsData, 10,
				18), aE.eK(1, aX.selectableColor), aE.oQ(aX.teamPlayerCount, 4, 10), aE.eK(1, aX.neutralBots), aE.eK(2, aX.botDifficultyType), aE.eK(4, aX.botDifficultyValue), aE.oQ(aX.botDifficultyTeam, 4, 4), aE.oQ(aX.botDifficultyData, 10,
				4), aE.eK(2, aX.spawningType), aE.eK(14, aX.spawningSeed), aE.oQ(aX.spawningData, 11, 12), aE.eK(1, aX.selectableSpawn), aE.eK(2, aX.playerNamesType), aE.qf(aX.playerNamesData, 10, 5), aE.eK(1, aX.selectableName), aE.eK(2, aX
				.aIncomeType), aE.eK(8, aX.aIncomeValue), aE.oQ(aX.aIncomeData, 10, 8), aE.eK(2, aX.tIncomeType), aE.eK(8, aX.tIncomeValue), aE.oQ(aX.tIncomeData, 10, 8), aE.eK(2, aX.iIncomeType), aE.eK(8, aX.iIncomeValue), aE.oQ(aX
				.iIncomeData, 10, 8), aE.eK(2, aX.sResourcesType), aE.eK(11, aX.sResourcesValue), aE.oQ(aX.sResourcesData, 10, 11), aE.oQ(aX.a5G, 10, 30), ! function(nC) {
				var aE = lH,
					a5H = uY.p0.a5H,
					pk = uY.p0.a5I,
					px = uY.p0.a5J,
					v4 = uY.p0.a5K,
					e4 = a5H.length;
				aE.eK(5, nC), aE.eK(30, e4), aE.eK(30, uY.p0.a5L.length);
				for (var aW = 0; aW < e4; aW++) {
					var ag = a5H[aW];
					aE.eK(4, ag), aE.eK(9, pk[aW]), 0 === ag ? aE.eK(22, px[aW]) : 1 === ag ? (aE.eK(10, px[aW]), aE.eK(10, v4[aW])) : 2 === ag ? (aE.eK(10, px[aW]), aE.eK(9, v4[aW])) : 3 === ag ? (aE.eK(10, px[aW]), aE.eK(27, v4[aW])) :
						4 === ag ? (aE.eK(10, px[aW]), aE.eK(16, v4[aW])) : 5 === ag || 6 === ag ? aE.eK(10, px[aW]) : 7 === ag ? aE.eK(1, px[aW]) : 10 === ag && (aE.eK(20, px[aW]), aE.eK(22, v4[aW]))
				}
			}(nC), ! function(nC) {
				for (var aE = lH, a5M = uY.p0.a5M, a5L = uY.p0.a5L, e4 = a5M.length, aW = 0; aW < e4; aW++) aE.eK(1, a5M[aW]), aE.eK(nC, a5L[aW])
			}(nC), lH.cW),
			aX = eO.eP(aE - 1, 6) + 1,
			nC = (l7.eJ(6 * aX) !== lH.e7.length && lH.e7.push(0), ! function() {
				var aE = lH;
				aE.cW = 24, aE.eK(31, aE.e7.length), aE.cW = 12, aE.eK(12, function() {
					for (var e7 = lH.e7, e4 = e7.length, lS = lT.rVersion, aW = 3; aW < e4; aW++) lS = lS + e7[aW] & 4095;
					return lS
				}())
			}(), gD.c(lH.e7), b9.bA.wf(b9.bA.wd(aX)));
		return gD.aV(), lH.c(), nC
	}
}

function rm() {
	this.a5O = !1, this.kK = function() {
		n.kg() % 250 != 249 || d4.g2 || (cr.cs.lQ(+(this.a5O && dA.iR[d4.jL]), mK.mL + d5.bf.d6), this.a5O = !1)
	}
}

function wF() {
	this.gP = function(iY) {
		for (var nH = gD, size = nH.gE(iY), ib = 7 + 9 * nH.gE(1), e7 = [], aW = 0; aW < size; aW++) e7.push(String.fromCharCode(nH.gE(ib)));
		return e7.join("")
	}
}

function a5P() {
	var a5Q, e7;
	this.c = function() {
		for (var aW = (e7 = new Uint16Array(101)).length - 1; 0 <= aW; aW--) e7[aW] = eO.eP(32768 * aW, 100);
		this.a0b(0)
	}, this.value = function(nD) {
		return e7[nD]
	}, this.a0a = function() {
		return eO.eP(a5Q - 1, 2)
	}, this.a0b = function(a0Z) {
		a5Q = 2 * a0Z % 32768 + 1
	}, this.random = function() {
		return a5Q = 167 * a5Q % 32768
	}, this.kI = function(a5R) {
		return eO.eP(a5R * this.random(), 32768)
	}, this.kV = function(nD) {
		return 0 !== nD && this.random() < this.value(nD)
	}, this.a5S = function(ba, eN) {
		return ba + this.kI(eN - ba)
	}
}

function a5T() {
	var canvas, cd, a5U, font, js = 0,
		a5V = !1,
		a5W = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a5X = 5;

	function a5f() {
		if (a5V) {
			var aW, e4 = a5W.length,
				lr = Math.floor(.5 * a5U.aF),
				aF = e4 * lr,
				u = Math.floor(Math.floor(a5U.u) + .3 * a5U.aE - .5),
				v = Math.floor(Math.floor(a5U.v) - aF),
				aE = Math.floor(.4 * a5U.aE + 2.5);
			for (a7.fillStyle = aB.i6, a7.fillRect(u, v, aE, aF), a7.fillStyle = aB.a5n, a7.fillRect(u, v + a5X * lr, aE, lr), a7.fillStyle = aB.i8, a7.fillRect(u, v, 2, aF), a7.fillRect(u, v, aE, 2), a7.fillRect(u + aE - 2, v, 2, aF), aW = 1; aW <
				e4; aW++) a7.fillRect(u, v + aW * lr, aE, 2);
			for (a7.fillStyle = aB.i8, bK.en.textAlign(a7, 1), bK.en.textBaseline(a7, 1), a7.font = bK.en.i3(0, .6 * lr), u += .5 * aE, aW = 0; aW < e4; aW++) a7.fillText(a5o(aW), u, v + (aW + .6) * lr)
		}
		a7.drawImage(canvas, Math.floor(a5U.u), Math.floor(a5U.v))
	}

	function wY(m2) {
		var u, iw, iz, lr;
		cd.clearRect(0, 0, Math.floor(a5U.aE), Math.floor(a5U.aF)), cd.fillStyle = aB.i6, cd.fillRect(0, 0, Math.floor(a5U.aE), Math.floor(a5U.aF)), d4.fz && (cd.fillStyle = aB.a5n, cd.fillRect(0, 0, Math.floor(.3 * a5U.aE), Math.floor(a5U.aF))), cd
			.fillStyle = aB.i8, cd.fillText("Hide UI", .15 * a5U.aE, .5 * a5U.aF), cd.fillRect(Math.floor(.3 * a5U.aE - .5), 0, 2, Math.floor(a5U.aF)), u = .5 * a5U.aE, cd.fillText("Replay Speed", u, .31 * a5U.aF), cd.fillText(a5o(a5X), u, .69 * a5U
				.aF), cd.fillRect(Math.floor(.7 * a5U.aE - .5), 0, 2, Math.floor(a5U.aF)), m2.iB ? (u = Math.floor(.02 * a5U.aE), m2 = Math.floor(.025 * a5U.aE), iw = Math.floor(.85 * a5U.aE - u - .5 * m2), iz = Math.floor(.25 * a5U.aF), lr = Math
				.floor(a5U.aF) - 2 * iz, cd.fillRect(iw, iz, u, lr), cd.fillRect(iw + u + m2, iz, u, lr)) : function() {
				var aE = Math.floor(.46 * a5U.aF),
					aF = Math.floor(.23 * a5U.aF),
					u = Math.floor(.85 * a5U.aE - .5 * aE + aE / 12),
					v = Math.floor(.5 * a5U.aF - aF);
				cd.beginPath(), cd.moveTo(u, v), cd.lineTo(u + aE, v + aF), cd.lineTo(u, v + (aF << 1)), cd.fill()
			}(), cd.fillRect(0, 0, Math.floor(a5U.aE), 2), cd.fillRect(0, 0, 2, Math.floor(a5U.aF)), cd.fillRect(0, Math.floor(a5U.aF) - 2, Math.floor(a5U.aE), 2), cd.fillRect(Math.floor(a5U.aE - 2), 0, 2, Math.floor(a5U.aF))
	}

	function a5o(aW) {
		return 5 === aW ? "Normal" : "" + a5W[aW]
	}
	this.iB = !1, this.c = function() {
		d4.g2 && (a5X = 5, this.iB = !1, a5V = !1, a5U = new a5Y([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a5Z = function() {
		return a5W[a5X]
	}, this.iv = function() {
		return a5U.v
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.iB,
		fxGetSpeedIndex: () => a5X,
		fxSetSpeedIndex: index => {
			a5X = index, this.resize()
		},
		fxGetPanelTop: () => a5U && a5U.v
	}, this.lv = function(lw) {
		return !!d4.g2 && a5U.u + a5U.aE > aD.aE - lw - iN.gap
	}, this.resize = function() {
		d4.g2 && (a5U.resize(), a5U.v -= (lk.ll() - 1) * iN.gap, font = bK.en.i3(0, .3 * a5U.aF), (canvas = document.createElement("canvas")).width = Math.floor(a5U.aE), canvas.height = Math.floor(a5U.aF), (cd = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bK.en.textAlign(cd, 1), bK.en.textBaseline(cd, 1), wY(this))
	}, this.fy = function(a5a) {
		0 === d4.fL || h.fd() || a5a !== d4.fz && (d4.fz = a5a, kk.resize(), n.a5 = !0, d4.g2) && (js = n.o + 2e3, wY(this))
	}, this.t = function(u, v) {
		if (!d4.g2) return !1;
		if (u < a5U.u || v < a5U.v || u > a5U.u + a5U.aE) return a5V && function(m2, u, v) {
			var e4 = a5W.length,
				lr = Math.floor(.5 * a5U.aF),
				aF = e4 * lr,
				iw = Math.floor(Math.floor(a5U.u) + .3 * a5U.aE - .5),
				aF = Math.floor(Math.floor(a5U.v) - aF),
				aE = Math.floor(.4 * a5U.aE + 2.5);
			return a5V = !1, n.a5 = !0, u < iw || iw + aE < u || v < aF || (a5X = a5e(0, Math.floor((v - aF) / lr), e4 - 1), wY(m2)), !0
		}(this, u, v);
		if ((u -= a5U.u) < .3 * a5U.aE) a5V = !1, this.fy(!d4.fz);
		else {
			if (u < .7 * a5U.aE) return a5V = !a5V, n.a5 = !0;
			this.g3(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.g3(!0), this.g3 = function(a5c) {
		2 === d4.fL ? (this.fy(!1), h.gQ(3)) : (a5V = !1, this.iB = !this.iB, this.iB ? (fT.g0 && fT.g1(), bx.by.setState(1)) : a5c || fT.iD(), n.a5 = !0, wY(this))
	}, this.a5d = function() {
		this.iB = !1, fT.iD(), n.a5 = !0, wY(this)
	}, this.fN = function(u, v) {
		return !!d4.fz && (0 <= fT.t(u, v) || (d4.g2 ? ((n.o > js || !this.t(u, v)) && fY.t(u, v), n.a5 = !0, js = n.o + 2e3) : fY.t(u, v)), !0)
	}, this.kK = function() {
		d4.g2 && d4.fz && n.o > js - 1e3 && n.o < js && (n.a5 = !0)
	}, this.wu = function() {
		d4.g2 && (this.iB = !1, n.a5 = !0, wY(this))
	}, this.a6 = function() {
		if (d4.g2) {
			if (d4.fz) {
				if (n.o > js) return;
				if (js - 1e3 < n.o) return a7.globalAlpha = a5e(0, (1e3 - (n.o - (js - 1e3))) / 1e3, 1), a5f(), void(a7.globalAlpha = 1)
			}
			a5f()
		}
	}
}

function a5p() {
	this.a5q = function(canvas, a5r, nw) {
		var aE = canvas.width,
			aF = canvas.height,
			ag = bK.en.nM(aE, aF),
			rL = bK.en.getContext(ag, !0),
			canvas = (rL.drawImage(canvas, 0, 0), rL.getImageData(0, 0, aE, aF));
		return a5r(canvas.data, aE, aF, nw), rL.putImageData(canvas, 0, 0), ag
	}, this.a5s = function(nV, aE, aF) {
		for (var u = aE - 1; 0 <= u; u--)
			for (var v = aF - 1; 0 <= v; v--) {
				var aW = 4 * (u + v * aE);
				nV[3 + aW] = nV[aW], nV[aW] = nV[1 + aW] = nV[2 + aW] = 255
			}
	}, this.a5t = function(nV, aE, aF) {
		for (var u = aE - 1; 0 <= u; u--)
			for (var v = aF - 1; 0 <= v; v--) {
				var aW = 4 * (u + v * aE);
				nV[1 + aW] > nV[2 + aW] + 10 && (nV[3 + aW] = nV[aW], nV[1 + aW] = nV[2 + aW])
			}
	}, this.a5u = function(nV, aE, aF, nw) {
		for (var gap = Math.floor(Math.min(aE, aF) * nw), u = 0; u < aE; u++)
			for (var aW, v = 0; v < aF; v++)(u < gap || v < gap || aE - gap <= u || aF - gap <= v) && (nV[3 + (aW = 4 * (u + v * aE))] = 255 - 255 * (nV[1 + aW] - nV[aW]) / (255 - nV[aW]))
	}, this.a5v = function(nV, aE, aF, nw) {
		for (var u = aE - 1; 0 <= u; u--)
			for (var v = aF - 1; 0 <= v; v--) {
				var aW = 4 * (u + v * aE);
				nV[aW] = nw[0], nV[1 + aW] = nw[1], nV[2 + aW] = nw[2]
			}
	}, this.a5w = function(nV, aE, aF, nw) {
		for (var gap = Math.floor(aE * nw), u = 0; u < aE; u++)
			for (var aW, v = 0; v < aF; v++)(u < gap || v < gap || aE - gap <= u || aF - gap <= v) && (nV[aW = 4 * (u + v * aE)] = nV[1 + aW] = nV[2 + aW] = 0)
	}, this.a5x = function(nV, aE, aF) {
		for (var v, aW, u = aE - 1; 0 <= u; u--)
			for (v = aF - 1; 0 <= v; v--) 200 < nV[1 + (aW = 4 * (u + v * aE))] && nV[1 + aW] - 20 > nV[aW] && nV[1 + aW] - 20 > nV[2 + aW] ? nV[aW] + nV[2 + aW] < 40 ? nV[3 + aW] = 0 : (nV[3 + aW] = nV[aW], nV[aW] = 255, nV[1 + aW] = 255, nV[2 +
				aW] = 255) : nV[aW] < 50 && nV[1 + aW] < 50 && nV[2 + aW] < 50 && (nV[aW] + nV[1 + aW] + nV[2 + aW] < 50 ? nV[3 + aW] = 180 : nV[3 + aW] = 180 + Math.floor(75 * (nV[aW] + nV[1 + aW] + nV[2 + aW] - 50) / 100))
	}, this.a5y = function(nV, aE, aF) {
		for (var v, aW, u = aE - 1; 0 <= u; u--)
			for (v = aF - 1; 0 <= v; v--) nV[1 + (aW = 4 * (u + v * aE))] > nV[aW] + 20 && nV[1 + aW] > nV[2 + aW] + 20 && nV[aW] + nV[2] < 40 && (nV[3 + aW] = 255 - nV[1 + aW], nV[aW] = nV[1 + aW] = nV[2 + aW] = nV[aW])
	}, this.a5z = function(nV, aE, aF, nw) {
		for (var fn = aE >> 1, u = 0; u < aE; u++)
			for (var v = 0; v < aF; v++) Math.sqrt((u - fn) * (u - fn) + (v - fn) * (v - fn)) > nw * fn && (nV[4 * (u + v * aE) + 3] = 0)
	}
}

function a60() {
	this.bf = new a21, this.l2 = 0;
	var a61 = new Array(32);

	function a64() {
		for (var e4 = a61.length, aW = 0; aW < e4; aW++) a61[aW] = null
	}
	this.c = function() {
		for (var a62, a63 = document.body.firstChild; a63;) a62 = a63.nextSibling, !document.body.contains(a63) || "DIV" !== a63.tagName && "INPUT" !== a63.tagName && "BUTTON" !== a63.tagName || h.removeChild(document.body, a63), a63 = a62
	}, this.gQ = function(cW, a1T, nw) {
		void 0 === a1T && (a1T = this.l2), n.a5 = !0, 0 === cW && (0 === bz.f() ? cW = 5 : bx.by.setState(13)), this.s(), this.l2 === cW && (a1T = a61[cW].a1T, a61[cW] = null), this.l2 = cW;
		var me = a61[cW];
		if (!me || 4 === cW || 7 === cW || 8 === cW || 9 === cW || 10 === cW || 11 === cW || 13 === cW || 15 === cW || 18 === cW || 20 <= cW && cW <= 28 || 32 === cW || 33 === cW) {
			if (0 === cW) return void a64();
			1 === cW ? me = new a65 : 2 === cW ? me = new a66 : 3 === cW ? me = new a67 : 4 === cW || 9 === cW || 10 === cW || 11 === cW || 13 === cW || 33 === cW ? me = nw : 5 === cW ? me = new a68 : 6 === cW ? me = new a69 : 7 === cW ? me =
				new a6A(h.bf.a24) : 8 === cW ? me = nw : 12 === cW ? me = new a6B : 14 === cW ? me = new a6C : 15 === cW ? me = new a6A(h.bf.a23) : 16 === cW ? me = new a6D : 17 === cW ? me = new kw : 18 === cW ? me = new a6E : 19 === cW ? me =
				new a6F : 20 === cW ? me = new a6G : 21 === cW ? me = new a6H : 22 === cW ? me = new a1L : 23 === cW ? me = new yn : 24 === cW ? me = new a6I : 25 === cW ? me = new a6J : 26 === cW ? me = new a6K : 27 === cW ? me = new a6L :
				28 === cW ? me = new a6M : 29 === cW ? me = new a6N : 30 === cW ? me = new a6O : 31 === cW ? me = new a6P : 32 === cW && (me = new a6Q), me.a1T = a1T, a61[cW] = me
		}
		me.show(nw)
	}, this.ej = function() {
		this.fd() && this.a6R(this.p7().a1T)
	}, this.a6R = function(cW) {
		this.fd() && (a61[cW] ? (this.s(), n.a5 = !0, this.l2 = cW, a61[cW].show()) : this.gQ(cW))
	}, this.s = function() {
		this.fd() && a61[this.l2].s()
	}, this.i = function() {
		this.fd() && (a61[this.l2].s(), a64(), this.l2 = 0, bx.by.setState(13))
	}, this.a6 = function() {
		var me;
		this.fd() && (me = a61[this.l2]).a6 && me.a6()
	}, this.resize = function() {
		if (!this.fd()) return !1;
		a61[this.l2].resize()
	}, this.t = function(u, v) {
		var me;
		this.fd() && (me = a61[this.l2]).t && me.t(u, v)
	}, this.z = function(u, v) {
		var me;
		this.fd() && (me = a61[this.l2]).z && me.z(u, v)
	}, this.fg = function() {
		var me;
		this.fd() && (me = a61[this.l2]).fg && me.fg()
	}, this.a2 = function(iH, iI, deltaY) {
		var me;
		this.fd() && (me = a61[this.l2]).a2 && me.a2(iH, iI, deltaY)
	}, this.j = function(code) {
		var me;
		return !!this.fd() && ((me = a61[this.l2]).j && me.j(code), !0)
	}, this.kK = function() {
		var me;
		this.fd() && (me = a61[this.l2]) && me.kK && me.kK()
	}, this.fd = function() {
		return 0 < this.l2
	}, this.p7 = function() {
		return a61[this.l2]
	}, this.x1 = function(cW) {
		return a61[cW]
	}, this.yw = function() {
		return a61
	}, this.removeChild = function(cO, cP) {
		try {
			cO.removeChild(cP)
		} catch (k) {
			console.log("removeChild error " + k)
		}
	}
}

function a6S() {
	this.a6T = function() {
		for (var nD, e4 = mK.mL, oi = mK.my, va = dA.va, a6U = this.a6V(), aW = 0; aW < e4; aW++) nD = oi[aW], bK.dl.iS(nD) || (va[nD] = a6U);
		var vX = dA.vX,
			vY = dA.vY,
			vW = dA.vW,
			vV = dA.vV,
			e4 = d4.j6;
		for (aW = 0; aW < e4; aW++)(0 === vV[aW] || vW[aW] < 1 || 2 * vX[aW] > 3 * (vY[aW] + vW[aW])) && (va[aW] = 0);
		var a6W = 0;
		for (aW = 0; aW < e4; aW++) a6W += 0 < va[aW];
		return a6W
	}, this.a6V = function() {
		return Math.min(65535, n.kg())
	}
}

function a6X() {
	this.mw = new wi, this.result = new a6Y, this.a6Z = new a6a, this.wq = new a6b, this.wn = new a6c, this.wp = new vK, this.c = function() {
		this.result.c()
	}
}

function a6d() {
	var a6e, a6g = new Uint16Array(8);

	function a6k(size, player) {
		for (var aW = dA.ks[player].length - 1; size <= aW; aW--) dK.yX(dA.ks[player][aW], player)
	}
	this.c = function() {
		a6e = 0
	}, this.a6h = function(player, a6i) {
		return dF.jV[1] = dA.ks[player].length, dF.jV[0] === d4.jW ? kN.kO.kv(player) : this.kt(player, dF.jV[0]), (0 !== dF.jV[1] || 0 !== dA.ks[player].length) && !(!a6i && dF.jV[1] === dA.ks[player].length || (dF.jV[0] === d4.jW ? dA.vY[
			player]++ : dA.vW[player]++, 0))
	}, this.a6j = function(player) {
		a6k(dF.jV[1], player), k2.dd(player, dF.oZ[0], dF.jV[0]), a6l.a6m(player, !1)
	}, this.ku = function(player, kM, e4, k1) {
		var a6n = eO.eP(12 * dA.k9[player], 1024);
		k1 -= k1 >= eO.eP(dA.k9[player], 2) ? a6n : 0, a6k(e4, player), k2.dd(player, k1, kM), dA.k9[player] -= k1 + a6n, a6l.a6m(player, !1)
	}, this.kt = function(player, kM) {
		for (var tI, jZ = dK.jZ, aW = dA.kC[player].length - 1; 0 <= aW; aW--)
			if (dK.yL(dA.kC[player][aW]))
				for (tI = 3; 0 <= tI; tI--)
					if (dK.yH(dA.kC[player][aW] + jZ[tI]) && dK.jR(dA.kC[player][aW] + jZ[tI]) === kM) {
						dA.ks[player].push(dA.kC[player][aW]);
						break
					}
	}, this.kv = function(player) {
		for (var jZ = dK.jZ, aW = dA.kC[player].length - 1; 0 <= aW; aW--)
			if (dK.yL(dA.kC[player][aW]))
				for (var tI = 3; 0 <= tI; tI--)
					if (dK.jQ(dA.kC[player][aW] + jZ[tI])) {
						dA.ks[player].push(dA.kC[player][aW]);
						break
					}
	}, this.kP = function(player, a6o) {
		var aW, ba, tI, a01, e4 = dA.kC[player].length,
			gz = 256 <= e4 ? 12 : 32 <= e4 ? 6 : 1,
			eS = e4 - 1 - kH.kI(gz),
			jZ = dK.jZ;
		a6e = 0;
		loop: for (aW = eS; 0 <= aW; aW -= gz)
			for (tI = 3; 0 <= tI; tI--)
				if ((a01 = dK.jQ(dA.kC[player][aW] + jZ[tI]) ? d4.jW : dK.jR(dA.kC[player][aW] + jZ[tI])) === d4.jW || dK.yH(dA.kC[player][aW] + jZ[tI]) && a01 !== player && (a6o || jS.jT(player, a01))) {
					for (ba = a6e - 1; 0 <= ba; ba--)
						if (a6g[ba] === a01) continue loop;
					if (a6g[a6e] = a01, 8 <= ++a6e) return !0
				}
		return 0 < a6e
	}, this.kQ = function(player, a6o) {
		var aW, tI, a01, jZ = dK.jZ;
		for (a6e = 0, aW = dA.kC[player].length - 1; 0 <= aW; aW--)
			for (tI = 3; 0 <= tI; tI--)
				if ((a01 = dK.jQ(dA.kC[player][aW] + jZ[tI]) ? d4.jW : dK.jR(dA.kC[player][aW] + jZ[tI])) === d4.jW || dK.yH(dA.kC[player][aW] + jZ[tI]) && a01 !== player && (a6o || jS.jT(player, a01))) return a6g[a6e++] = a01, !0;
		return !1
	}, this.kS = function() {
		for (var eN, aW = a6e - 1; 0 <= aW; aW--)
			if (a6g[aW] === d4.jW) {
				for (a6e--, eN = aW; eN < a6e; eN++) a6g[eN] = a6g[eN + 1];
				return !0
			} return !1
	}, this.kR = function(player) {
		for (var eN, aW = a6e - 1; 0 <= aW; aW--)
			if (k2.a6p(player, a6g[aW]))
				for (a6e--, eN = aW; eN < a6e; eN++) a6g[eN] = a6g[eN + 1];
		return 0 === a6e
	}, this.kZ = function() {
		for (var aW = a6e - 1; 0 <= aW; aW--)
			if (bK.dl.iS(a6g[aW])) return !0;
		return !1
	}, this.kb = function() {
		for (var aW = a6e - 1; 0 <= aW; aW--) bK.dl.iS(a6g[aW]) || (a6g[aW] = a6g[--a6e]);
		return 0 < a6e
	}, this.kX = function(player) {
		for (var eN, a6q = a6g[0], a6r = dA.k9[a6q] + k2.a6s(a6q, player), aW = a6e - 1; 1 <= aW; aW--)(eN = dA.k9[a6g[aW]] + k2.a6s(a6g[aW], player)) < a6r && (a6q = a6g[aW], a6r = eN);
		return a6q
	}, this.kd = function(player) {
		var aF, a6t = a6g[0];
		if (1 !== a6e)
			for (var a6u = eO.eP(dA.jA[player] + dA.j9[player], 2), a6v = eO.eP(dA.jC[player] + dA.jB[player], 2), e3 = a6w(a6u - eO.eP(dA.jA[a6t] + dA.j9[a6t], 2)) + a6w(a6v - eO.eP(dA.jC[a6t] + dA.jB[a6t], 2)), aW = a6e - 1; 1 <= aW; aW--)(aF =
				a6w(a6u - eO.eP(dA.jA[a6g[aW]] + dA.j9[a6g[aW]], 2)) + a6w(a6v - eO.eP(dA.jC[a6g[aW]] + dA.jB[a6g[aW]], 2))) < e3 && (e3 = aF, a6t = a6g[aW]);
		return a6t
	}, this.kr = function() {
		for (var a6x = a6g, a6y = a6x[0], k9 = dA.k9, a6z = k9[a6y], aW = a6e - 1; 1 <= aW; aW--) {
			var nD = a6x[aW],
				eN = k9[nD];
			a6z < eN && (a6y = nD, a6z = eN)
		}
		return a6y
	}, this.kc = function() {
		return a6g[kH.kI(a6e)]
	}
}

function wD() {
	var a70 = new Uint8Array(78);
	this.c = function() {
		var aW;
		for (a70[50] = 37, aW = 0; aW < 10; aW++) a70[aW + 3] = aW + 1;
		for (aW = 0; aW < 26; aW++) a70[aW + 20] = aW + 11, a70[aW + 52] = aW + 38
	}, this.a71 = function(ak) {
		return ak.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a72 = function(ak, size) {
		if ((ak = this.a71(ak)).length > size) return ak.substring(0, size);
		for (; ak.length < size;) ak = "-" + ak;
		return ak
	}, this.nJ = function(ak) {
		for (var vr = a70, e4 = ak.length, e7 = new Uint8Array(e4), aW = 0; aW < e4; aW++) e7[aW] = vr[ak.charCodeAt(aW) - 45];
		return e7
	}, this.nI = function(ql) {
		l7.eH(6 * ql.length), this.a73(ql), gD.c(l7.eG)
	}, this.a73 = function(ql) {
		for (var e4 = ql.length, aE = l7, aW = 0; aW < e4; aW++) aE.eK(6, ql[aW])
	}, this.lN = function(ak) {
		this.a73(this.nJ(ak))
	}, this.a74 = function(ak, size) {
		this.a73(this.nJ(this.a72(ak, size)))
	}, this.bF = function(ak, size) {
		for (var e7 = this.nJ(this.a72(ak, size)), hB = 0, m5 = 1, aW = e7.length - 1; 0 <= aW; aW--) hB += m5 * e7[aW], m5 *= 64;
		return hB
	}
}

function a75() {
	a76() ? (a77(), a78 !== d4.jW && a79()) : a7A()
}

function a79() {
	jS.a7B(), jS.a7C(dA.kC[a78]), jS.a7C(dA.dB[a78]), l.jI(l.gF) && jS.a7C(dA.jo[a78]), jS.a7D(dA.ks[a78]), jS.a7E(dA.dB[a78]), jS.a7E(dA.jo[a78]), jS.a7F(), jS.a7G()
}

function a77() {
	a7H = !0, k2.a7I(a7J, a7K, a7L), k2.a7M(a7J, a7K), dA.j8[a7J] += a7N, jS.a7O(), a7P()
}

function a76() {
	return (a78 === d4.jW ? a7Q : a7R)()
}

function a7R() {
	var a7S = a7N * d4.a7T,
		a7U = a7V(),
		a7W = a7X(),
		a7U = a7S + 2 * a7U + a7W,
		a7Z = a7a * a7N;
	return a7U < a7Z ? (a7L -= a7U, ob.a7b(a7J, a7U, 13), a7c(a7U - a7S, a7W), !0) : a7d && 0 === a7W ? (a7L -= a7Z, a7Z += bK.dl.a7e(a7J, a7U - a7Z + 1), ob.a7b(a7J, a7Z, 13), a7c(a7Z - a7S, 0), !0) : (a7L -= a7Z, ob.a7b(a7J, a7Z, 13), a7c(a7Z -
		a7S, a7W), !1)
}

function a7c(a7Z, a7W) {
	if (0 < a7W) {
		if (a7Z <= a7W) return ob.a7b(a78, a7Z, 13), void k2.a7f(a78, a7J, a7W - a7Z);
		k2.a7f(a78, a7J, 0), a7Z -= a7W
	}
	a7Z = eO.eP(a7Z, 2), a7Z = Math.min(dA.k9[a78], a7Z), ob.a7b(a78, a7Z, 13), dA.k9[a78] -= a7Z
}

function a7X() {
	return k2.a6s(a78, a7J)
}

function a7V() {
	return eO.eP(a7N * dA.k9[a78], 1 + eO.eP(10 * dA.j8[a78], 16))
}

function a7Q() {
	var a7g = a7N * d4.a7T;
	return a7L -= a7g, ob.a7b(a7J, a7g, 13), !0
}

function a7P() {
	for (var aW = a7N - 1; 0 <= aW; aW--) dA.ks[a7J].push(a7h[aW]), dA.kC[a7J].push(a7h[aW]), dK.yW(a7h[aW], a7J)
}

function a7i() {
	var size, kJ;
	this.c = function() {
		size = d4.mM, kJ = new Uint16Array(d4.jW);
		for (var j6 = d4.j6, aW = d4.mM - 1; 0 <= aW; aW--) kJ[aW] = j6 + aW
	}, this.kK = function() {
		kN.a7j.kK();
		for (var aW = size - 1; 0 <= aW; aW--)
			if (0 === dA.iR[kJ[aW]]) {
				ba = void 0;
				var ba = aW;
				size--, kJ[ba] = kJ[size]
			} else k8.kK(kJ[aW])
	}, this.a7l = function(nD) {
		kJ[size++] = nD
	}
}

function a7n(nw) {
	var eg, a7o, yy;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(66), [new ei("⬅️ " + L(2), function() {
		h.a6R(10)
	})]), a7o = new ys(eg.em, ((yy = []).push(function() {
		var a7t, hn = new z1,
			a7u = new a0w(bn.buffer.data[132], 1, function() {
				a7t.button.click()
			}),
			a7v = new a0w(bn.buffer.data[131], 1, function() {
				a7u.k.focus()
			});
		hn.z2(L(67)), hn.z5(a7v), a7v.k.style.marginBottom = "0.8em", hn.z2(L(68)), hn.z5(a7u);
		return a7t = new ei(L(69), function() {
			h4 = Math.floor(a7v.k.value), h5 = Math.floor(a7u.k.value);
			var h5, h4 = {
				h9: Math.min(h4, h5),
				tK: Math.max(h4, h5)
			};
			h.gQ(8, h.x1(10).a1T, new l3(21, {
				l4: nw.l4,
				h4: h4.h9,
				h5: h4.tK
			}))
		}, 0, 0, 1), hn.z5(new a7x([a7t.button])), hn
	}()), yy.push(function() {
		var a7t, hn = new z1,
			a7u = new a0w(bn.buffer.data[134], 1, function() {
				a7t.button.click()
			}),
			a7v = new a0w(bn.buffer.data[133], 0, function() {
				a7u.k.focus()
			});
		return hn.z2(1 === nw.l4 ? L(70) : L(71)), hn.z5(a7v), a7v.k.style.marginBottom = "0.8em", hn.z2(L(72)), hn.z5(a7u), a7t = new ei(L(69), function() {
			var a2u = a7v.k.value.slice(0, 20),
				a2v = Math.abs(Math.floor(a7u.k.value));
			h.gQ(8, h.x1(10).a1T, new l3(22, {
				l4: nw.l4,
				a2u: a2u,
				a2v: a2v
			}))
		}, 0, 0, 1), hn.z5(new a7x([a7t.button])), hn
	}()), yy.push(function() {
		var a7t, hn = new z1,
			a7u = new a0w(bn.buffer.data[152], 1, function() {
				a7t.button.click()
			}),
			a7v = new a0w(bn.buffer.data[151], 0, function() {
				a7u.k.focus()
			});
		return hn.z2(L(73)), hn.z5(a7v), a7v.k.style.marginBottom = "0.8em", hn.z2(L(72)), hn.z5(a7u), a7t = new ei(L(69), function() {
			var a2u = a7v.k.value.slice(0, 5),
				a2v = Math.abs(Math.floor(a7u.k.value));
			h.gQ(8, h.x1(10).a1T, new l3(28, {
				l4: nw.l4,
				a2u: a2u,
				a2v: a2v
			}))
		}, 0, 0, 1), hn.z5(new a7x([a7t.button])), hn
	}()), yy))
}

function a7y() {
	var a7z, a80, size, kM, k1, a81;

	function a82(player) {
		return player < d4.j6 ? a7z * player : a7z * d4.j6 + a80 * (player - d4.j6)
	}
	this.c = function() {
		a7z = d4.j6 < 16 ? 12 : 8, a80 = 4;
		var e4 = a82(d4.jW);
		size = new Uint8Array(d4.jW), kM = new Uint16Array(e4), k1 = new Uint32Array(e4), a81 = new Uint8Array(e4)
	}, this.a83 = function(a84, a85) {
		var a86 = this.a6s(a84, a85),
			a85 = (this.a7f(a84, a85, 0), bK.dl.oa(a84, a86));
		ob.a7b(a84, a86 - a85, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a88 = function(player, a85) {
		var a8A, a85 = function(player, a85) {
			var aW, me = a82(player);
			for (aW = size[player] - 1; 0 <= aW; aW--)
				if (kM[me + aW] === a85) return aW;
			return size[player]
		}(player, a85);
		a85 !== size[player] && (a8A = k1[a82(player) + a85], this.a8B(player, a85), this.dd(player, a8A, d4.jW))
	}, this.a6p = function(player, a85) {
		for (var me = a82(player), aW = size[player] - 1; 0 <= aW; aW--)
			if (kM[me + aW] === a85) return !0;
		return !1
	}, this.k3 = function(player) {
		return player < d4.j6 ? size[player] < a7z : size[player] < a80
	}, this.zn = function(player) {
		return size[player]
	}, this.zx = function(player, aW) {
		return kM[a82(player) + aW]
	}, this.zw = function(player, aW) {
		return k1[a82(player) + aW]
	}, this.a6s = function(player, a85) {
		for (var me = a82(player), aW = size[player] - 1; 0 <= aW; aW--)
			if (kM[me + aW] === a85) return k1[me + aW];
		return 0
	}, this.a8C = function(player) {
		for (var me = a82(player), hB = 0, aW = size[player] - 1; 0 <= aW; aW--) hB += k1[me + aW];
		return hB
	}, this.a7f = function(player, a85, a8A) {
		for (var me = a82(player), aW = size[player] - 1; 0 <= aW; aW--) kM[me + aW] === a85 && (k1[me + aW] = a8A)
	}, this.a7I = function(player, aW, a8A) {
		k1[a82(player) + aW] = Math.max(a8A, 0)
	}, this.a7M = function(player, aW) {
		a81[a82(player) + aW] = 0
	}, this.a8D = function(player, aW) {
		return a81[a82(player) + aW]
	}, this.dd = function(player, a8A, a85) {
		kN.kh.jz[player] = kN.kh.jz[a85] = 8, bK.dl.a8E(a85) && ob.oy[6 - bK.dl.iS(player)]++;
		for (var me = a82(player), aW = size[player] - 1; 0 <= aW; aW--)
			if (kM[me + aW] === a85) return k1[me + aW] += a8A, void(k1[me + aW] = k1[me + aW] > d4.a3r ? d4.a3r : k1[me + aW]);
		kM[me + size[player]] = a85, k1[me + size[player]] = a8A, a81[me + size[player]] = 1, size[player]++, a85 === d4.jL ? eX.a8F(player, 5) : player < d4.j6 && player === d4.jL && oD.a4i(a85)
	}, this.a8B = function(player, cW) {
		var ba, me;
		if (0 !== size[player])
			for (me = a82(player), size[player]--, ba = cW; ba < size[player]; ba++) kM[me + ba] = kM[me + ba + 1], k1[me + ba] = k1[me + ba + 1], a81[me + ba] = a81[me + ba + 1]
	}, this.a8G = function(player) {
		for (var ba, me, a8H = [], aW = mK.mL - 1; 0 <= aW; aW--)
			for (me = a82(mK.my[aW]), ba = size[mK.my[aW]] - 1; 0 <= ba; ba--)
				if (kM[me + ba] === player) {
					a8H.push(mK.my[aW]);
					break
				} return a8H
	}
}

function a66() {
	var eg, a7o, yy, hn;

	function a8I() {
		lY.a8J !== bn.buffer.data[12].value ? (lY.c(), h.gQ(8, 1, new l3(30))) : h.gQ(1)
	}
	this.show = function() {
			eg.show(), this.resize()
		}, this.s = function() {
			eg.s()
		}, this.resize = function() {
			eg.resize(), a7o.resize()
		}, this.j = function(ag) {
			2 === ag && eg.eo[0].ep()
		}, eg = new ek(L(74), [new ei("⬅️ " + L(2), a8I), new ei(L(75), function() {
			h.i(), bn.ih.q6(), h.gQ(2)
		})]), yy = [], (hn = new z1).z2(L(76)), hn.a8K(L(77)), yy.push(hn),
		function(yy) {
			var hn = new z1,
				e7 = (hn.z2(L(104)), lY.data.a4v());
			hn.z3(new z4({
				c3: e7,
				value: lY.data.a4z(e7)
			}, function(cW) {
				return bn.ih.pT(12, e7[cW].split(":")[0]), !0
			})), yy.push(hn)
		}(yy),
		function(yy) {
			var hn = new z1,
				a8O = (hn.z2(L(102)), []);
			hn.z5(new a7x([new ei(L(103), function(k) {
				fp.a8P();
				for (var aW = 0; aW < a8O.length; aW++) a8O[aW].k.value = fp.pP[aW];
				return bK.en.a8Q(k), !0
			}).button]));
			for (var aW = 0; aW < fp.a8R.length; aW++) {
				hn.a8K(fp.a8R[aW]);
				for (var ba = 0; ba < 2; ba++) {
					var cW = 2 * aW + ba,
						a8S = new a0w({
							value: fp.pP[cW],
							cW: -1
						});
					a8S.k.a8T = cW, a8O.push(a8S), a8S.k.addEventListener("keydown", function(k) {
						k.preventDefault();
						var code = k.code;
						k.target.value = code, fp.a8U(k.target.a8T, code)
					}), ba && (a8S.k.style.marginLeft = "4%"), a8S.k.style.width = "48%", hn.z5(a8S)
				}
			}
			yy.push(hn)
		}(yy), (hn = new z1).z2(L(78)), bn.buffer.data[1].c3 = [L(79), L(80), L(81), L(82)], hn.z3(new z4(bn.buffer.data[1])), yy.push(hn), (hn = new z1).z2(L(83)), bn.buffer.data[9].c3 = [L(80), L(84), L(85)], hn.z3(new z4(bn.buffer.data[9])), yy
		.push(hn), (hn = new z1).z2(L(86)), bn.buffer.data[11].c3 = [L(87), L(43), L(88)], hn.z3(new z4(bn.buffer.data[11])), yy.push(hn), (hn = new z1).z2(L(89)), hn.z5(new xX(bn.buffer.data[2])), yy.push(hn), (hn = new z1).z2(L(90)), hn.z5(new xX(
			bn.buffer.data[7])), yy.push(hn), (hn = new z1).z2(L(91)), hn.z5(new xX(bn.buffer.data[8])), yy.push(hn), (hn = new z1).z2(L(92)), hn.z5(new a0w(bn.buffer.data[5])), yy.push(hn), (hn = new z1).z2(L(93)), hn.z5(new xX(bn.buffer.data[13],
			L(94))), hn.z5(new xX(bn.buffer.data[14], L(95))), yy.push(hn), (hn = new z1).z2(L(96)), hn.z3(new z4({
			c3: [L(97), L(98), L(99)],
			value: w.a8N
		}, function(aW) {
			w.a8N = aW
		})), yy.push(hn), (hn = new z1).z2(L(100)), hn.z5(new xX(bn.buffer.data[15])), hn.a8K(L(101)), hn.z5(new a0w(bn.buffer.data[16], 1, 0, function(k) {
			k.target.value = eO.h2(Math.floor(k.target.value), 0, 16)
		})), yy.push(hn), a7o = new ys(eg.em, yy)
}

function a2S(yZ, a8V, a8W, a8X) {
	var self;
	this.au = document.createElement("span"), (self = this).au.textContent = yZ, self.au.style.color = aB.i8, self.au.style.position = "absolute", self.au.style.font = "inherit", a8X ? self.au.style.bottom = "0.06em" : self.au.style.top = "0.12em",
		a8W ? self.au.style.left = "0.2em" : self.au.style.right = "0.2em", self.au.style.fontSize = "0.6em", self.au.style.pointerEvents = "none", self.au.style.whiteSpace = "pre", a8V.style.position = "relative", a8V.style.overflow = "hidden", a8V
		.appendChild(self.au)
}

function a8Y() {
	var a0L, a8a, a8b, a8c, a8Z = !1;

	function a8d() {
		a8Z = !0, a0L = -1, a8a = new Array(4);
		for (var aW = 3; 0 <= aW; aW--) a8a[aW] = !1;
		var vF = Math.floor(1 + .02 * aD.min);
		a8b = new Array(4), (a8c = new Array(4))[1] = a8c[3] = a8b[0] = a8b[2] = 0, a8c[0] = a8b[3] = -vF, a8b[1] = a8c[2] = vF
	}

	function a8e() {
		if (-1 !== a0L)
			if (0 !== d4.fL && a0X.cZ()) {
				for (var a8f = !1, aW = 3; 0 <= aW; aW--) a8a[aW] && (a8f = !0, ix += a8b[aW], j0 += a8c[aW], oD.z(a8b[aW], a8c[aW]), fY.oE());
				a8f ? n.a5 = !0 : fq.a8g()
			} else fq.a8g()
	}
	this.fr = function(cW) {
		0 !== d4.fL && a0X.cZ() && (a8Z || a8d(), a8a[cW] = !0, -1 === a0L) && (a0L = setInterval(a8e, 20), a8e())
	}, this.fx = function(cW) {
		if (0 !== d4.fL && (a8Z || a8d(), a8a[cW] = !1, -1 !== a0L)) {
			for (var a8f = !1, aW = 3; 0 <= aW; aW--) a8f = a8f || a8a[aW];
			a8f || this.a8g()
		}
	}, this.a8g = function() {
		if (a8Z && -1 !== a0L) {
			for (var aW = 3; 0 <= aW; aW--) a8a[aW] = !1;
			clearInterval(a0L), a0L = -1
		}
	}
}

function a8h() {
	var a8i, zB, x4, a8j, aF, hy, fontSize, a8k, a8l, a8m, a8n, canvas, cd, x5, a8o;

	function yx(aW) {
		return L(0 === aW ? 105 : 1 === aW ? 106 : 2 === aW ? 107 : 108)
	}

	function a8w() {
		d4.jD ? a8x + 4 * iN.gap + aF + kk.a8y() > fZ.v ? a7.drawImage(canvas, 2 * iN.gap + kk.a8y(), a8x + 2 * iN.gap) : a7.drawImage(canvas, iN.gap, a8x + 3 * iN.gap + kk.a8y()) : a7.drawImage(canvas, iN.gap, a8x + 2 * iN.gap)
	}

	function a8p() {
		canvas.width = a8i[0].width + a8m, canvas.height = aF + a8m, (cd = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a8i[0].width + a8m, aF + a8m), cd.translate(Math.floor(a8m / 2), Math.floor(a8m / 2)), cd.lineWidth = a8m, cd.fillStyle = 1 === a8i[0].a8u ? aB.a8z : aB.ea, a90(), cd.fill(), cd.strokeStyle = 1 === a8i[0].a8u ? aB.aC :
			aB.i8, a90(), cd.stroke(), bK.en.textAlign(cd, 1), bK.en.textBaseline(cd, 1), cd.fillStyle = 1 === a8i[0].a8u ? aB.aC : aB.i8, cd.font = hy[0], cd.fillText(yx(a8i[0].a8t), Math.floor(a8i[0].width / 2), Math.floor(.72 * a8k[0] * aF)), cd
			.font = hy[1], cd.fillText(a8i[0].ak, Math.floor(a8i[0].width / 2), Math.floor((a8k[0] + .48 * a8k[1]) * aF))
	}

	function a90() {
		cd.beginPath(), cd.moveTo(a8n, 0), cd.lineTo(a8i[0].width - a8n, 0), cd.lineTo(a8i[0].width, a8n), cd.lineTo(a8i[0].width, aF - a8n), cd.lineTo(a8i[0].width - a8n, aF), cd.lineTo(a8n, aF), cd.lineTo(0, aF - a8n), cd.lineTo(0, a8n), cd
			.closePath()
	}
	this.c = function() {
		zB = 4, x4 = a8j = x5 = 0, a8i = [], hy = new Array(2), fontSize = new Array(2), (a8k = new Array(2))[0] = .3, a8k[1] = .7, a8l = new Array(4), canvas = document.createElement("canvas"), a8o = n.o + 2e3, this.resize()
	}, this.resize = function() {
		var aW, aE;
		for (aF = Math.floor((bx.by.i2() ? .062 : .047) * aD.lh), fontSize[0] = Math.floor(.85 * a8k[0] * aF), fontSize[1] = Math.floor(.85 * a8k[1] * aF), hy[0] = bK.en.i3(1, fontSize[0]), hy[1] = bK.en.i3(1, fontSize[1]), aW = a8l.length -
			1; 0 <= aW; aW--) a8l[aW] = this.measureText(yx(aW) + "000", hy[0]);
		if (a8m = Math.floor(1 + .05 * aF), a8n = Math.floor(.2 * aF), 0 < a8i.length) {
			for (aW = a8i.length - 1; 0 <= aW; aW--) aE = this.measureText(a8i[aW].ak + "00", hy[1]), a8i[aW].width = aE < a8l[aW] ? a8l[aW] : aE;
			a8p()
		}
	}, this.kK = function() {
		0 !== zB && (4 === zB ? n.o > a8o && (zB = 0, 1 === d4.fL) && oC.a8r(l.nK.nL[l.gF].name, 3, 1, 9) : (1 === zB ? (0 === x4 && (a8p(), x4 = 1e-4), 1 <= (x4 += .002 * (n.o - x5)) && (a8j = 0, zB = 2, x4 = 1), n.a5 = !0) : 2 === zB ? ((a8j +=
			(n.o - x5) / 1e3) > a8i[0].a8v || 1 < a8j && 1 < a8i.length) && (zB = 3) : 3 === zB && ((x4 -= .002 * (n.o - x5)) <= 0 && (x4 = 0, a8i.shift(), zB = 0 < a8i.length ? 1 : 0), n.a5 = !0), x5 = n.o))
	}, this.measureText = function(ak, hy) {
		return a7.font = hy, Math.floor(a7.measureText(ak).width)
	}, this.dd = function(a84, aW) {
		this.a8r(dA.vd[a84], aW, 1, 0 === aW ? 3 : 7)
	}, this.a8r = function(ak, a8t, a8u, a8v) {
		var aE;
		ak.length && (aE = (aE = this.measureText(ak + "00", hy[1])) < a8l[a8t] ? a8l[a8t] : aE, a8i.push({
			ak: ak,
			width: aE,
			a8t: a8t,
			a8u: a8u,
			a8v: a8v
		}), 0 === zB) && (x4 = 0, zB = 1, x5 = n.o)
	}, this.a6 = function() {
		0 !== zB && 0 !== x4 && (x4 < 1 ? (a7.globalAlpha = x4, a8w(), a7.globalAlpha = 1) : a8w())
	}
}

function ij() {
	function a94(e7) {
		if (0 === e7.length) bn.ih.pT(116, "");
		else {
			for (var a95 = e7[0], aW = 1; aW < e7.length; aW++) a95 += ";" + e7[aW];
			bn.ih.pT(116, a95)
		}
	}
	this.a91 = function() {
		bn.buffer.data[110].value.length && (bn.buffer.data[106].value = bn.buffer.data[110], bn.ih.pT(110, ""), this.a92())
	}, this.a92 = function() {
		var e7 = bn.buffer.data[116].value.split(";");
		for (e7.length % 2 == 1 && e7.pop(), e7.unshift(bn.buffer.data[106].value), e7.unshift(bn.buffer.data[105].value), aW = 2; aW < e7.length; aW += 2)
			if (e7[aW] === e7[0]) {
				e7.splice(aW, 2);
				break
			} for (var a93 = [], aW = 0; aW < e7.length; aW += 2) a93.push(e7[aW]);
		a94(e7), bn.buffer.data[117].value = 0, bn.buffer.data[117].c3 = a93
	}, this.a35 = function(cW) {
		bn.buffer.data[117].c3.splice(cW, 1), bn.buffer.data[117].value = Math.min(cW, bn.buffer.data[117].c3.length - 1);
		var e7 = bn.buffer.data[116].value.split(";");
		e7.splice(2 * cW, 2), a94(e7)
	}, this.a36 = function(cW) {
		var e7 = bn.buffer.data[116].value.split(";");
		return {
			bC: e7[2 * cW],
			password: e7[2 * cW + 1]
		}
	}, this.nt = function() {
		var hB = eO.h2(bn.buffer.data[121].value, -1, 262143);
		return hB = -1 === hB ? ~~(262144 * Math.random()) : hB
	}, this.im = function() {
		for (var e7 = document.cookie.split(";"), aW = 0; aW < e7.length; aW++) {
			var a96, ak = e7[aW].trim();
			0 !== ak.length && (a96 = 0 <= (a96 = ak.indexOf("=")) ? ak.substring(0, a96) : ak, document.cookie = a96 + "=;expires=0;path=/", document.cookie = a96 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a96 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function a97() {
	this.id = 0, this.hr = 0, this.a98 = null, this.a99 = null, this.a9A = null, this.a9B = null, this.by = new a9C, this.c = function() {
		var self, hr;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (hr = Android.getVersion()) < 12 || (self.hr = hr, self.id = 1, self.a99 = Android),
			function(self) {
				var hr;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.a9A = mwIOSdataX, self.a9B = window.webkit.messageHandlers.iosCommandA, hr =
					self.a9A.version, self.hr = hr ? Number(hr) : 0)
			}(this),
			function(self) {
				var a98;
				try {
					if (!(a98 = window.localStorage)) return;
					a98.setItem("tls7", "1"), a98.removeItem("tls7")
				} catch (error) {
					return
				}
				self.a98 = a98
			}(this)
	}
}

function a9G() {
	this.dd = function(player, dP) {
		a9H.a9I(player, dI.jd(dP), dI.je(dP)) && (n.a5 = !0), d4.iC && this.kK()
	}, this.kK = function() {
		d4.iA = !1;
		for (var aW = 0; aW < d4.j6; aW++) 0 !== dA.iR[aW] && 0 === dA.j8[aW] && a9H.a9J(aW);
		0 !== dA.iR[d4.jL] ? (ob.oy[7] = dA.j8[d4.jL], ob.oy[8] = dA.k9[d4.jL], fZ.lx(), mY.mR(), d4.g2 || a0X.a9K(dA.j9[d4.jL] - 5, dA.jB[d4.jL] - 5, dA.jA[d4.jL] + 5, dA.jC[d4.jL] + 5), a9L.c()) : fP.show(!1, !1, !1, !0), eX.a9M(18), oD.a3t(),
			oD.iE(!0), ip.bf.rC(), fQ.s(), d4.a9N = null, iF.xP = !0, iF.xT(), d4.iC && bx.by.setState(1)
	}
}

function pp(ba, eN) {
	return 0 <= ba ? eO.eP(ba, eN) : -eO.eP(-ba, eN)
}

function a6w(hB) {
	return hB * hB
}

function oM(ba, eN) {
	return eN < ba ? ba : eN
}

function oL(ba, eN) {
	return ba < eN ? ba : eN
}

function a5e(ba, hB, eN) {
	return hB < ba ? ba : eN < hB ? eN : hB
}

function a9O(hB, e4) {
	for (var ag = eO.eP(hB + 1, 2), aW = 0; aW < e4; aW++) ag = eO.eP(ag + eO.eP(hB, ag), 2);
	return ag
}

function oR(hB, e4) {
	return hB < 1 ? 0 : a9O(hB, e4)
}

function a9P(iw, iz, oI, lr, j1, j2, oJ, oK) {
	return !(iw + oI <= j1 || iz + lr <= j2 || j1 + oJ <= iw || j2 + oK <= iz)
}

function a9Q(iw, iz, oI, lr, j1, j2, oJ, oK) {
	return iw <= j1 && iz <= j2 && j1 + oJ <= iw + oI && j2 + oK <= iz + lr
}

function nN(hB) {
	return Math.floor(!!hB * (1 + Math.log2(hB + .5)))
}

function a9R() {
	var a9S, a9T, yO, a9U;
	this.c = function() {
		var aW, u, v, nr, a9V, aE, aF, cd, pd, nV, hB, nD, e3, ba, a9Z;
		if (function() {
				if (yO = !0, a9U = "rgb(" + l.nT[0] + "," + l.nT[1] + "," + l.nT[2] + ")", l.a9Y(l.gF)) return 1;
				return yO = !1, 0
			}()) a9T = null;
		else {
			for (a9S = eO.eP(96, 4), a9V = 1 === l.gF ? (nr = 0, 160) : (nr = 128, 32), a9U = "rgb(" + nr + "," + nr + "," + nr + ")", a9T = new Array(4), aW = 3; 0 <= aW; aW--) {
				if (a9T[aW] = document.createElement("canvas"), aE = aW % 2 == 0 ? l.aH : a9S, aF = aW % 2 == 0 ? a9S : l.aJ + 2 * a9S, a9T[aW].width = aE, a9T[aW].height = aF, nV = (pd = (cd = a9T[aW].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aE, aF)).data, aW % 2 == 0)
					for (v = a9S - 1; 0 <= v; v--)
						for (hB = a9V + Math.floor((v + 1) * (nr - a9V) / (a9S + 1)), u = aE - 1; 0 <= u; u--) nV[nD = 4 * ((0 === aW ? a9S - v - 1 : v) * aE + u)] = hB, nV[nD + 1] = hB, nV[nD + 2] = hB, nV[nD + 3] = 255;
				else {
					for (u = a9S - 1; 0 <= u; u--)
						for (hB = a9V + Math.floor((u + 1) * (nr - a9V) / (a9S + 1)), v = aF - 1 - a9S; a9S <= v; v--) nV[nD = 4 * (v * aE + (3 === aW ? a9S - u - 1 : u))] = hB, nV[nD + 1] = hB, nV[nD + 2] = hB, nV[nD + 3] = 255;
					for (ba = 1; 0 <= ba; ba--)
						for (u = a9S - 1; 0 <= u; u--)
							for (v = a9S - 1; 0 <= v; v--) e3 = (Math.pow(u * u + v * v, .5) + 1) / (a9S + 1), hB = a9V + Math.floor((1 < e3 ? 1 : e3) * (nr - a9V)), nV[nD = 4 * ((0 === ba ? a9S - v - 1 : v + ba * (aF - a9S)) * aE + (1 === aW ?
								u : a9S - u - 1))] = hB, nV[nD + 1] = hB, nV[nD + 2] = hB, nV[nD + 3] = 255
				}
				cd.putImageData(pd, 0, 0)
			}
			a9Z = a9V, l.nQ.fillStyle = "rgb(" + a9Z + "," + a9Z + "," + a9Z + ")", l.nQ.fillRect(0, 0, l.aH, 1), l.nQ.fillRect(0, l.aJ - 1, l.aH, 1), l.nQ.fillRect(0, 0, 1, l.aJ), l.nQ.fillRect(l.aH - 1, 0, 1, l.aJ)
		}
	}, this.a8 = function() {
		var ba = yO ? 0 : -a9S;
		a9Q(ba, ba, l.aH - 2 * ba, l.aJ - 2 * ba, xR.a9a, xR.a9b, xR.a9c, xR.a9d) || (a7.fillStyle = a9U, a7.fillRect(0, 0, aD.aE, aD.aF))
	}, this.a6 = function() {
		yO || (a9P(0, -a9S, l.aH, a9S, xR.a9a, xR.a9b, xR.a9c, xR.a9d) && a7.drawImage(a9T[0], xR.a9e, xR.a9f - a9S), a9P(l.aH, -a9S, a9S, l.aJ + 2 * a9S, xR.a9a, xR.a9b, xR.a9c, xR.a9d) && a7.drawImage(a9T[1], xR.a9e + l.aH, xR.a9f - a9S), a9P(
			0, l.aJ, l.aH, a9S, xR.a9a, xR.a9b, xR.a9c, xR.a9d) && a7.drawImage(a9T[2], xR.a9e, xR.a9f + l.aJ), a9P(-a9S, -a9S, a9S, l.aJ + 2 * a9S, xR.a9a, xR.a9b, xR.a9c, xR.a9d) && a7.drawImage(a9T[3], xR.a9e - a9S, xR.a9f - a9S))
	}
}

function a9g() {
	for (var ag = document.createElement("canvas"), ag = (ag.width = 24, ag.height = 24, ag.getContext("2d", {
			alpha: !1
		})), bX = (ag.fillStyle = "rgb(0,0,0)", ag.fillRect(0, 0, 24, 24), ag.font = "22px system-ui", ag.textBaseline = "middle", ag.textAlign = "center", ag.fillStyle = "rgb(255,255,255)", ag.fillText("Q", 12, 12), ag.getImageData(0, 0, 24, 24)
			.data), e4 = bX.length, me = 0, aW = 0; aW < e4; aW += 4) me += bX[aW];
	return 16383 & me
}

function a6D() {
	var eg, kx, ky, l0;

	function kz(aW) {
		h.gQ(8, h.l2, new l3(21, {
			l4: aW,
			h4: 0,
			h5: 10
		}))
	}
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), kx.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, ky = [new ei(L(109), function() {
		kz(1)
	}, 0, 0, 1), new ei(L(110), function() {
		kz(2)
	}, 0, 0, 1), new ei(L(111), function() {
		kz(3)
	}, 0, 0, 1), new ei(L(112), function() {
		kz(0)
	}, 0, 0, 1), new ei(L(113), function() {
		kz(9)
	}, 0, 0, 1), new ei(L(114), function() {
		kz(10)
	}, 0, 0, 1), new ei(L(115), function() {
		kz(11)
	}, 0, 0, 1), new ei(L(116), function() {
		kz(13)
	}, 0, 0, 1)], l0 = [new ei("⬅️ " + L(2), function() {
		h.ej()
	})], eg = new ek(L(117), l0), kx = new l1(ky, eg.em)
}

function a9h() {
	var a9i = a9g(),
		a9j = xa(),
		a9k = a9l();
	this.gE = function() {
		return 123
	}, this.iX = function() {
		bE.bA.a74(bn.buffer.data[183].value, 15), l7.eK(14, a9i), l7.eK(7, a9j), l7.eK(12, a9k)
	}
}

function a9m() {
	var a9n = null;
	this.a4M = 0, this.q5 = function() {
		var hB = bn.buffer.data[5].value;
		a9n = "px " + hB, "system-ui" !== hB && (a9n += ", system-ui"), this.a4M = a9o(32, 32, ["a", "b", "m"], 200, a9n)
	}, this.nM = function(aE, aF) {
		var ag = document.createElement("canvas");
		return ag.width = aE, ag.height = aF, ag
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(cd, aE, aF) {
		return cd.getImageData(0, 0, aE, aF)
	}, this.i3 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a9n : 1 === type ? "bold " + size + a9n : 2 === type ? "lighter " + size + a9n : 3 === type ? "italic " + size + a9n : 4 === type ? "oblique " + size + a9n : 5 === type ? "small-caps " +
			size + a9n : "small-caps bold " + size + a9n
	}, this.textAlign = function(rL, id) {
		rL.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(rL, id) {
		rL.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.r3 = function(k, code, color) {
		color = this.ju(iN.jv) + " solid " + (color || aB.i8);
		5 === (code = code || 5) ? k.style.border = color : 4 === code ? k.style.borderLeft = color : 2 === code ? k.style.borderBottom = color : 6 === code ? k.style.borderRight = color : k.style.borderTop = color
	}, this.a9p = function(k, u, v, aE, aF) {
		k = k.style;
		k.left = this.a9r(u), k.top = this.a9r(v), k.width = this.a9r(aE), k.height = this.a9r(aF)
	}, this.a9s = function(hB) {
		return 1 + hB * bx.by.i2()
	}, this.jx = function(m5, j3) {
		return m5 * this.a9s(void 0 === j3 ? .5 : j3) * aD.lh / aD.fJ
	}, this.a9t = function(m5, j3) {
		return m5 * this.a9s(void 0 === j3 ? .5 : j3) * aD.lh
	}, this.a9u = function(m5, j3, a9v) {
		return this.a9s(j3) * Math.min(m5 * aD.lh, a9v * aD.aE) / aD.fJ
	}, this.ju = function(hB) {
		return hB.toFixed(1) + "px"
	}, this.a9r = function(hB) {
		return this.a9x(hB).toFixed(1) + "px"
	}, this.a9x = function(hB) {
		return hB / aD.fJ
	}, this.a9y = function(a9z) {
		for (var ak = "<ul>", e4 = a9z.length, aW = 0; aW < e4; aW++) ak += "<li>" + a9z[aW][0] + ": <a href='" + a9z[aW][1] + "' target='_blank'>" + a9z[aW][0] + "</a></li>";
		return ak += "</ul>"
	}, this.aA0 = function(aA1) {
		return "<a href='" + aA1 + "' target='_blank'>" + aA1 + "</a>"
	}, this.aA2 = function(k) {
		navigator.clipboard && navigator.clipboard.writeText(k.value)
	}, this.a8Q = function(k) {
		var m6 = k.textContent;
		bK.bL.a0H(m6, "✔") || (1 === m6.length ? k.textContent = "✔" : k.textContent = m6 + " ✔", setTimeout(function() {
			k.textContent = m6
		}, 500))
	}, this.measureText = function(ak) {
		return a7.measureText(ak).width
	}, this.qs = function(cP) {
		cP.style.overflowX = "auto", cP.style.overflowY = "hidden", cP.style.whiteSpace = "nowrap", cP.addEventListener("wheel", function(k) {
			Math.abs(k.deltaY) < Math.abs(k.deltaX) || (this.scrollLeft += k.deltaY, this.r5 = this.scrollLeft, k.preventDefault())
		}), cP.addEventListener("scroll", function() {
			this.r5 = this.scrollLeft
		})
	}
}

function aA3() {
	this.gN = function(player) {
		aA4.a7l(player), d4.mN++, dA.a4E[player] = 2, dA.va[player] = l8.aA5.a6V(), player === d4.jL && (fP.show(!1, !1), mY.mV(), mv.wp.vT()), oD.a4i(player)
	}
}

function a7x(aA6) {
	var aY = document.createElement("div");
	this.k = aY, this.aA7 = aA6, this.resize = function() {
		for (var e4 = aA6.length, aW = 1; aW < e4; aW++) bK.en.r3(aA6[aW], 4)
	};
	var aW, e4 = aA6.length;
	for (aY.style.width = "100%", aY.style.height = "2.7em", aY.style.marginTop = "0.6em", aY.style.border = "inherit", aW = 0; aW < e4; aW++) aA6[aW].style.verticalAlign = "top", aA6[aW].style.width = (100 / e4).toFixed(2) + "%", aA6[aW].style
		.height = "100%", aA6[aW].style.fontSize = "0.75em", aY.appendChild(aA6[aW])
}

function aA8() {
	this.size = 0, this.cW = 0, this.eG = null, this.c = function(eG) {
		this.cW = 0, this.eG = eG, this.size = eG.length
	}, this.aV = function() {
		this.eG = null
	}, this.gE = function(size) {
		for (var hB = 0, eG = this.eG, cZ = this.cW + size - 1, aW = this.cW; aW <= cZ; aW++) hB |= (eG[aW >> 3] >> 7 - (7 & aW) & 1) << cZ - aW;
		return this.cW += size, this.cW > 8 * this.size && console.error("Unwrapper Overflow"), hB
	}, this.aA9 = function(size) {
		var eN = size >> 1;
		return (1 << eN) * this.gE(size - eN) + this.gE(eN)
	}, this.aAA = function(eI) {
		return this.size === l7.eJ(eI)
	}, this.aAB = function(iY, qd, aAC) {
		var hD = this.gE(iY);
		if (!hD) return null;
		for (var iY = Math.max(hD, aAC), e7 = new(qd <= 8 ? Uint8Array : qd <= 16 ? Uint16Array : Uint32Array)(iY), aW = 0; aW < hD; aW++) e7[aW] = this.gE(qd);
		aAC = e7[hD - 1];
		return aAC && e7.fill(aAC, hD), e7
	}, this.aAD = function(iY, qg, aAC) {
		var hD = this.gE(iY);
		if (!hD) return null;
		for (var iY = Math.max(hD, aAC), e7 = new Array(iY), aW = 0; aW < hD; aW++) e7[aW] = this.aAE(qg);
		return e7.fill(e7[hD - 1], hD), e7
	}, this.aAE = function(iY) {
		return bE.lM.a2E(this.gE(iY))
	}, this.aAF = function() {
		var ak = b9.bA.wf(b9.bA.wd(this.gE(30))),
			ak = bK.bL.qk(ak, "_", "/");
		ak = bK.bL.qk(ak, "-", "+");
		for (var aAG = "";
			(ak.length + aAG.length) % 4;) aAG += "=";
		ak = "data:image/png;base64," + ak + aAG;
		var uX = new Image;
		uX.onload = function() {
			uY.p4.uZ(uX), uX.onload = null, uX = null
		}, uX.src = ak
	}
}

function aAH() {
	var aAI = 0,
		aAJ = 0,
		aAK = 0,
		aAL = 0,
		aAM = -1;

	function aAQ(aK) {
		if (aAM === aK) return !1;
		if (-1 === (aAM = aK)) aAI = 0, eX.aAR(aAI, 0);
		else {
			if (dK.yH(aK)) return aAK = dK.jR(aK), kj = dA.k9[aAK] - dA.ox[aAK], (4 !== aAI || kj !== aAJ) && (aAI = 4, aAJ = kj, eX.aAR(aAI, kj), !0);
			if (dK.jQ(aK)) return 3 !== aAI && (aAI = 3, eX.aAR(aAI, 0), !0);
			if (dK.jb(aK)) return 2 !== aAI && (aAI = 2, eX.aAR(aAI, 0), !0);
			var kj = d5.ao.aAT(b1.ey, b1.ez);
			if (-1 === kj) return 1 !== aAI && (aAI = 1, eX.aAR(aAI, 0), !0);
			aK = d5.bf.he[kj];
			if (aAK = d5.bf.dU[kj], aAL = d5.bf.dn[kj] >> 3, 5 === aAI && aK === aAJ) return !1;
			aAI = 5, aAJ = aK, eX.aAR(aAI, aK)
		}
		return !0
	}
	this.c = function() {
		aAL = aAK = aAJ = aAI = 0, aAM = -1
	}, this.kK = function(mX) {
		var zX;
		!mX && b1.b2() || (mX = dI.zW(b1.ey), zX = dI.zY(b1.ez), dI.zZ(mX, zX) ? (mX = dI.jm(mX, zX), aAQ(dI.dJ(mX))) : aAQ(-1))
	}, this.aAO = function() {
		var aAW, kj, aAS, aAU;
		if (0 !== aAI && 2 !== aAI)
			if (b1.b2()) {
				if (1 !== aAI && 3 !== aAI) {
					if (4 === aAI) return void(kj = dA.k9[aAK] - dA.ox[aAK], aAJ === kj || (aAJ = kj, eX.aAR(aAI, kj)));
					(aAS = d5.ao.aAV(aAL, aAK)) < 0 ? (aAI = 1, eX.aAR(aAI, 0)) : (aAU = d5.bf.he[aAS]) !== aAJ && (aAJ = aAU, eX.aAR(aAI, aAU))
				}
			} else if (1 === aAI) - 1 !== (aAS = d5.ao.aAT(b1.ey, b1.ez)) && (aAI = 5, aAJ = d5.bf.he[aAS], eX.aAR(aAI, aAJ));
		else if (3 === aAI) dK.yH(aAM) && (aAI = 4, aAW = dK.jR(aAM), aAJ = dA.k9[aAW] - dA.ox[aAW], eX.aAR(aAI, aAJ));
		else if (4 === aAI) {
			if (dK.yH(aAM)) return void(aAW = dK.jR(aAM), kj = dA.k9[aAW] - dA.ox[aAW], aAJ === kj || (aAJ = kj, eX.aAR(aAI, kj)));
			aAI = 3, eX.aAR(aAI, 0)
		} else - 1 === (aAS = d5.ao.aAT(b1.ey, b1.ez)) ? (aAI = 1, eX.aAR(aAI, 0)) : (aAU = d5.bf.he[aAS]) !== aAJ && (aAJ = aAU, eX.aAR(aAI, aAU))
	}
}

function aAX() {
	var us, ut, ya, yb, aAY, aAZ, aAa, aAb, aAc, aAd;

	function aAf() {
		var aAi = d4.aAi;
		for (aAc = aAi; aAc < d4.jW; aAc++) aAe();
		for (aAc = d4.iA ? d4.j6 : 0; aAc < aAi; aAc++) {
			if (!aAj()) {
				for (var eN = d4.aAl = aAc; eN < aAi; eN++) aAc = eN, aAe();
				return
			}
			aAk(aAZ + us * aAY + eO.eP(aAY, 2), aAa + ut * aAY + eO.eP(aAY, 2))
		}
	}

	function aBA(player) {
		for (var j9 = dA.j9, jB = dA.jB, jA = dA.jA, jC = dA.jC, v = jB[player]; v <= jC[player]; v++)
			for (var u = j9[player]; u <= jA[player]; u++) {
				var aK = dK.xW(u, v);
				dK.yH(aK) && (dK.yL(aK) ? dK.yW(aK, player) : dK.yV(aK, player))
			}
	}

	function aB9(e7, h4, h5) {
		var m6 = e7[h4];
		e7[h4] = e7[h5], e7[h5] = m6
	}

	function aAj() {
		return function() {
			var aW;
			for (aW = 0; aW < 8; aW++)
				if (us = eO.eP(ya * kH.random(), kH.value(100)), ut = eO.eP(yb * kH.random(), kH.value(100)), aBF()) return 1;
			return
		}() || function() {
			var rJ, rK, ba, a4R, eN, a4Q;
			for (rJ = eO.eP(ya * kH.random(), kH.value(100)), rK = eO.eP(yb * kH.random(), kH.value(100)), ba = 40; 1 <= ba; ba--)
				for (a4R = yb - ba; 0 <= a4R; a4R -= 40)
					for (ut = (a4R + rK) % yb, eN = 40; 1 <= eN; eN--)
						for (a4Q = ya - eN; 0 <= a4Q; a4Q -= 40)
							if (us = (a4Q + rJ) % ya, aBF()) return 1;
			return
		}()
	}

	function aBF() {
		for (var nD, aBH, gap = eO.eP(aAY - aAb, 2), a0c = aAa + ut * aAY + gap, a0l = aAZ + us * aAY + gap, aBG = a0c + aAb - 1; a0c <= aBG; aBG--)
			for (aBH = a0l + aAb - 1; a0l <= aBH; aBH--)
				if (nD = dK.xW(aBH, aBG), !dK.dL(nD) || dK.yL(nD)) return;
		return 1
	}

	function aAk(a4Q, a4R) {
		aAe(), aBI(a4Q - 2, a4R - 2)
	}

	function aAe() {
		dA.iR[aAc] = 0, dA.j8[aAc] = dA.xF[aAc] = 0, dA.ks[aAc] = [], dA.kC[aAc] = [], dA.dB[aAc] = [], dA.jo[aAc] = [], dA.j9[aAc] = dA.jB[aAc] = dA.jA[aAc] = dA.jC[aAc] = 0
	}

	function aBI(a4Q, a4R) {
		var nD, aW, aBJ, aBK;
		for (dA.iR[aAc] = 1, dA.j9[aAc] = a4Q + 10, dA.jB[aAc] = a4R + 10, dA.jC[aAc] = dA.jA[aAc] = 0, aBJ = a4Q; aBJ < a4Q + 4; aBJ++)
			for (aBK = a4R; aBK < a4R + 4; aBK++)(a4Q < aBJ && aBJ < a4Q + 3 || a4R < aBK && aBK < a4R + 3) && (nD = dK.xW(aBJ, aBK), dK.dL(nD)) && (dA.j9[aAc] = Math.min(aBJ, dA.j9[aAc]), dA.jA[aAc] = Math.max(aBJ, dA.jA[aAc]), dA.jB[aAc] = Math
				.min(aBK, dA.jB[aAc]), dA.jC[aAc] = Math.max(aBK, dA.jC[aAc]), aAd[dA.j8[aAc]] = nD, dA.j8[aAc]++, dK.yV(nD, aAc));
		for (dA.xF[aAc] = dA.j8[aAc], aW = dA.j8[aAc] - 1; 0 <= aW; aW--) dK.yA(aAd[aW], aAc) ? (dK.yW(aAd[aW], aAc), dA.kC[aAc].push(aAd[aW])) : dK.yN(aAd[aW]) ? (dK.yW(aAd[aW], aAc), dA.dB[aAc].push(aAd[aW])) : dK.y8(aAd[aW]) && (dK.yW(aAd[aW],
			aAc), dA.jo[aAc].push(aAd[aW]))
	}
	this.c = function() {
		if (aAd = new Array(12), aAb = 6, aAY = 10, ya = eO.eP(l.aH, aAY), yb = eO.eP(l.aJ, aAY), aAZ = eO.eP(l.aH - aAY * ya, 2), aAa = eO.eP(l.aJ - aAY * yb, 2), d4.iA)
			for (var aW = 0; aW < d4.j6; aW++) aAc = aW, aAe(), dA.iR[aAc] = 1;
		(0 === d4.data.spawningType ? aAf : 1 === d4.data.spawningType ? (aAf(), function() {
			var aAm = d4.rD;
			d4.aAn || aAm++;
			if (!(aAm < 3)) {
				for (var data = d4.data, eS = (d4.iA ? d4.j6 : 0) + data.teamPlayerCount[0], cZ = d4.aAl, aAo = new Uint32Array(aAm), aAp = new Uint32Array(aAm), aAq = new Uint16Array(aAm), aAr = new Uint16Array(aAm), jF = jE.jF, j9 = dA
						.j9, jB = dA.jB, jA = dA.jA, jC = dA.jC, aAs = dF.aAs, aAt = dF.aAt, aW = eS; aW < cZ; aW++) aAs[aW] = j9[aW] + jA[aW] >> 1, aAt[aW] = jB[aW] + jC[aW] >> 1;
				for (aW = eS; aW < cZ; aW++) {
					var id = jF[aW];
					aAo[id] += aAs[aW], aAp[id] += aAt[aW]
				}
				var rG = jE.rG;
				for (aW = 1; aW < aAm; aW++) {
					var hD = Math.max(data.teamPlayerCount[rG[aW]], 1);
					aAq[aW] = eO.eP(aAo[aW], hD), aAr[aW] = eO.eP(aAp[aW], hD)
				}
				var aAu = jE.aAu,
					aAv = jE.aAv,
					aAw = jE.aAw,
					kn = dF.kn;
				for (aW = 0; aW < 512; aW++) kn[aW] = aW;
				for (var fn = 0; fn < 2 + (4 <= aAm); fn++)
					for (aW = eS; aW < cZ; aW++) {
						for (var nd = aW, u3 = kn[nd], aAx = 1, e3 = eO.vF(aAs[u3] - aAq[1], aAt[u3] - aAr[1]), ba = 2; ba < aAm; ba++) {
							var aAy = eO.vF(aAs[u3] - aAq[ba], aAt[u3] - aAr[ba]);
							aAy < e3 && (e3 = aAy, aAx = ba)
						}
						var aAz = jF[nd];
						if (aAx !== aAz) {
							if (2 === fn && 4 <= aAm) {
								var aB0 = Math.max((aAx + 1) % aAm, 1),
									aB1 = eO.vF(aAs[u3] - aAq[aB0], aAt[u3] - aAr[aB0]);
								for (ba = 1; ba < aAm; ba++) aAy = eO.vF(aAs[u3] - aAq[ba], aAt[u3] - aAr[ba]), e3 < aAy && aAy < aB1 && (aB1 = aAy, aB0 = ba);
								aB0 !== aAz && eO.vF(aAq[aAz] - aAq[aB0], aAr[aAz] - aAr[aB0]) < eO.vF(aAq[aAz] - aAq[aAx], aAr[aAz] - aAr[aAx]) && (aAx = aB0)
							}
							var aB2 = rG[aAx],
								aB3 = aAv[aB2] + (d4.iA ? 0 : aAw[aB2]),
								ne = aAu[aB3],
								u4 = kn[ne],
								aB4 = aAv[aB2 + 1];
							e3 = eO.vF(aAs[u4] - aAq[aAz], aAt[u4] - aAr[aAz]);
							for (var ag = aB3 + 1; ag < aB4; ag++) {
								var aB5 = aAu[ag],
									aB6 = kn[aB5];
								(aAy = eO.vF(aAs[aB6] - aAq[aAz], aAt[aB6] - aAr[aAz])) < e3 && (e3 = aAy, ne = aB5)
							}
							ne < eS || cZ <= ne || (u4 = kn[ne], aAo[aAz] += aAs[u4] - aAs[u3], aAp[aAz] += aAt[u4] - aAt[u3], aAo[aAx] += aAs[u3] - aAs[u4], aAp[aAx] += aAt[u3] - aAt[u4], hD = data.teamPlayerCount[rG[aAz]], aAq[aAz] = eO
								.eP(aAo[aAz], hD), aAr[aAz] = eO.eP(aAp[aAz], hD), hD = data.teamPlayerCount[aB2], aAq[aAx] = eO.eP(aAo[aAx], hD), aAr[aAx] = eO.eP(aAp[aAx], hD), kn[nd] = u4, kn[ne] = u3)
						}
					}! function() {
						for (var kn = dF.kn, j9 = dA.j9, jB = dA.jB, jA = dA.jA, jC = dA.jC, j8 = dA.j8, xF = dA.xF, kC = dA.kC, dB = dA.dB, jo = dA.jo, aW = 0; aW < 512; aW++) {
							var aB8 = kn[aW];
							if (aB8 !== aW) {
								aB9(j9, aW, aB8), aB9(jB, aW, aB8), aB9(jA, aW, aB8), aB9(jC, aW, aB8), aB9(j8, aW, aB8), aB9(xF, aW, aB8), aB9(kC, aW, aB8), aB9(dB, aW, aB8), aB9(jo, aW, aB8), aBA(aW), aBA(aB8), kn[aW] = aW;
								for (var aF = aB8, j3 = kn[aF]; j3 !== aW;) j3 = kn[aF = j3];
								kn[aF] = aB8
							}
						}
					}()
			}
		}) : function() {
			var aAi = d4.aAi;
			for (aAc = aAi; aAc < d4.jW; aAc++) aAe();
			for (aAc = d4.iA ? d4.j6 : 0; aAc < aAi; aAc++)
				if (! function() {
						var spawningData = d4.data.spawningData,
							a4Q = spawningData[2 * aAc] + 1,
							spawningData = spawningData[2 * aAc + 1] + 1;
						if (3 < a4Q && a4Q < l.aH - 5 && 3 < spawningData && spawningData < l.aJ - 5 && dK.dL(dK.xW(a4Q, spawningData)) && function(a4Q, a4R) {
								var nD, aBH, aBG;
								for (aBG = a4R; a4R - 6 < aBG; aBG--)
									for (aBH = a4Q; a4Q - 6 < aBH; aBH--)
										if (nD = dK.xW(aBH, aBG), dK.yL(nD)) return;
								return 1
							}(a4Q + 3, spawningData + 3)) return aAk(a4Q + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aAj()) {
						for (var eN = d4.aAl = aAc; eN < aAi; eN++) aAc = eN, aAe();
						return
					}
					var a4Q = aAZ + us * aAY + eO.eP(aAY, 2),
						a4R = aAa + ut * aAY + eO.eP(aAY, 2);
					aAk(a4Q, a4R)
				}
		})(), ob.oy[7] = dA.j8[d4.jL]
	}, this.a9I = function(kM, rO, rP) {
		var aW, a4Q, a4R, nD, us, ut;
		for (aAc = kM, aW = 0; aW < 20; aW++)
			for (a4Q = rO + aW; rO - aW <= a4Q; a4Q--)
				for (a4R = rP + aW; rP - aW <= a4R; a4R--)
					if ((a4Q === rO + aW || a4Q === rO - aW || a4R === rP + aW || a4R === rP - aW) && 3 < a4Q && a4Q < l.aH - 5 && 3 < a4R && a4R < l.aJ - 5 && dK.dL(dK.xW(a4Q, a4R)) && function(a4Q, a4R) {
							var nD, aBH, aBG;
							for (aBG = a4R; a4R - 6 < aBG; aBG--)
								for (aBH = a4Q; a4Q - 6 < aBH; aBH--)
									if (nD = dK.xW(aBH, aBG), dK.yL(nD) && !dK.yJ(aAc, nD)) return;
							return 1
						}(a4Q + 3, a4R + 3)) {
						if (0 < dA.j8[aAc]) {
							for (ut = us = nD = void 0, us = dA.jA[aAc]; us >= dA.j9[aAc]; us--)
								for (ut = dA.jC[aAc]; ut >= dA.jB[aAc]; ut--) nD = 4 * (ut * l.aH + us), dK.yI(aAc, nD) && (dK.yQ(nD), dA.j8[aAc]--);
							aAe()
						}
						return aBI(a4Q - 1, a4R - 1), !0
					} return !1
	}, this.a9J = function(kM) {
		aAc = kM, aAj() ? aAk(aAZ + us * aAY + eO.eP(aAY, 2), aAa + ut * aAY + eO.eP(aAY, 2)) : aAe()
	}
}

function a6a() {
	this.aBN = function() {
		for (var e4 = mK.mL, oi = mK.my, vM = [], aW = 0; aW < e4; aW++) {
			var nD = oi[aW];
			bK.dl.aBO(nD) && vM.push(nD)
		}
		return vM
	}, this.aBP = function() {
		if (0 === jE.rG[d4.aBQ]) return this.aBR();
		kk.kl(d4.aBQ);
		for (var vM = [], e4 = dF.km[0], kn = dF.kn, aW = 0; aW < e4; aW++) {
			var nD = kn[aW];
			bK.dl.aBO(nD) && vM.push(nD)
		}
		return vM
	}, this.aBR = function() {
		var nD = mp[0];
		return bK.dl.aBO(nD) ? [nD] : []
	}, this.aBS = function(vM) {
		for (var e4 = vM.length, m6 = 0, j8 = dA.j8, aW = 0; aW < e4; aW++) m6 += j8[vM[aW]];
		return m6
	}
}

function s2() {
	this.aBT = function() {
		bn.bf.a91(), bn.ih.pT(105, b9.bA.wf(b9.bA.wd(5))), bn.ih.pT(106, b9.bA.wf(b9.bA.wd(15))), bn.ih.pT(109, 0), bn.ih.pT(108, bn.buffer.data[109].value), bn.ih.pT(111, bn.buffer.data[109].value + 1), bn.ih.pT(107, 0), bn.ih.pT(110, "")
	}, this.aBU = function() {
		var data;
		gD.size < l7.eJ(29) ? cr.bf.aBV(0, 3254) : ((data = {
			qA: gD.gE(30),
			qB: gD.gE(16),
			qC: gD.gE(30),
			qD: gD.gE(30),
			qE: gD.gE(30),
			qF: gD.aA9(32),
			username: bE.gO.gP(5),
			qG: bE.gO.gP(3),
			qH: bE.gO.gP(3),
			qI: gD.aA9(32),
			qJ: gD.aA9(32),
			qK: gD.gE(30),
			qL: gD.aA9(32),
			qM: gD.aA9(32),
			qN: gD.aA9(32),
			qO: gD.aA9(32),
			aBW: gD.aA9(32),
			aBX: gD.aA9(30),
			aBY: gD.aA9(32),
			aBZ: bE.gO.gP(3),
			aBa: gD.aA9(2),
			aBb: gD.aA9(10),
			aBc: bE.gO.gP(8),
			aBd: gD.aA9(5),
			aBe: gD.gE(30),
			aBf: gD.gE(30),
			vO: gD.aA9(32),
			aBg: gD.gE(3),
			aBh: gD.gE(8),
			aBi: gD.gE(30),
			aBj: gD.aA9(32),
			aBk: gD.gE(1),
			aBl: bE.gO.gP(6),
			aBm: gD.gE(1),
			aBn: gD.gE(1),
			aBo: gD.gE(1),
			aBp: gD.gE(17),
			aBq: gD.gE(5),
			aBr: gD.gE(1),
			aBs: gD.gE(1)
		}).aBr && (data.aBt = gD.aA9(32), data.aBu = gD.gE(30), data.aBv = gD.gE(30), data.aBw = gD.gE(1)), 8 === h.l2 && (25 === h.p7().a2n ? (data.aBx = !0, h.bf.a23 = data, h.p7().a34(25, !1)) : (data.aBx = !1, bn.ih.pT(160, +(data
			.aBr && data.aBw)), data.bC = bn.buffer.data[105].value, h.bf.a24 = data, bn.ih.q9(data), h.p7().a34(16, !0))))
	}
}

function bu() {
	var aBy = 0,
		aBz = "",
		aC0 = 0,
		aC1 = 0,
		aC2 = 0;

	function aC4(wM) {
		cr.rp.nu(3, wM)
	}

	function aCD(hD) {
		aBy = 1, an.message.go({
			id: 6,
			value: hD
		})
	}

	function aC7(af) {
		var aCI = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return af.match(aCI)
	}
	this.wo = function(af) {
		var aC3, e7, aC9;
		if (aBy) return aBy = 0, "yes" === (aC3 = af.toLowerCase()) || "y" === aC3 ? void aC4(aBz) : void an.message.go({
			id: 5,
			bR: 7
		});
		!(af.indexOf("@") < 0) && (aC3 = aC7(af)) ? (aBz = af, e7 = function(aC6) {
			for (var e4 = aC6.length, aCF = [0, 0, 0, 0], aW = 0; aW < e4; aW++)
				for (var aE = aC6[aW], ba = 0; ba < 4; ba++) aE === "@room" + (ba + 1) && (aCF[ba] = 1);
			if ((aC1 = bK.nU.h3(aCF)) % 4 == 0) return bK.nU.hR(an.bG.aCG);
			for (ba = 0; ba < 4; ba++) aCF[ba] = aCF[ba] ? an.bG.aCG[ba] : [];
			return bK.nU.hR(aCF)
		}(aC3), function(aC6, aC9, af) {
			if (!aC0) return;
			for (var e4 = aC9.length, aW = 0; aW < e4; aW++) 2 === aC9[aW].id && (af = af.replace(aC6[aC9[aW].cW], "@" + aC9[aW].hB));
			return aBy = 1, aC4((aBz = af).slice(0, 126) + "|"), 1
		}(aC3, aC9 = function(aC6) {
			for (var aC9 = [], e4 = (aC2 = aC0 = 0, aC6.length), aW = 0; aW < e4; aW++) {
				var aE = aC6[aW],
					me = aE.length;
				bK.bL.startsWith(aE, "@[") ? me <= 9 && bK.bL.a0H(aE, "]") && aC9.push({
					id: 0,
					hB: aE.substring(2, me - 1).toUpperCase()
				}) : 6 === me ? bK.bL.startsWith(aE, "@room") || (aC2++, aC9.push({
					id: 1,
					hB: bE.bA.bF(aE.substring(1), 5)
				})) : 1 < me && me < 5 && 0 <= (me = lY.data.a50(aE.substring(1))) && (aC9.push({
					id: 2,
					hB: me,
					cW: aW
				}), aC0 = 1)
			}
			return aC9
		}(aC3), af) || (0 === aC9.length ? aC1 || function(aC6) {
			for (var e4 = aC6.length, aW = 0; aW < e4; aW++) {
				var aE = aC6[aW];
				if ("@all" === aE || "@everyone" === aE) return 1
			}
			return
		}(aC3) ? aCD(e7.length) : aC4(af) : aC3.length === aC2 ? aC4(af) : (function(e7, aC9) {
			var me = aC9.length;
			if (0 === me) return;
			var e4 = e7.length;
			loop: for (var aW = e4 - 1; 0 <= aW; aW--) {
				for (var ba = 0; ba < me; ba++)
					if (0 === aC9[ba].id) {
						if (aC9[ba].hB === bK.bL.vn(e7[aW].username)) continue loop
					} else if (1 === aC9[ba].id && aC9[ba].hB === e7[aW].bC) continue loop;
				e7[aW] = e7[--e4], e7.pop()
			}
		}(e7, aC9), aCD(e7.length)))) : aC4(af)
	}, this.gm = function(af) {
		var aC6 = aC7(af);
		if (aC6)
			for (var aCJ = new RegExp("^[0-9]+$"), e4 = aC6.length, aW = 0; aW < e4; aW++) {
				var aE = aC6[aW].substring(1),
					me = aE.length;
				1 <= me && me <= 3 && aCJ.test(aE) && (me = parseInt(aE, 10), !isNaN(me)) && 0 <= me && me < lY.data.e7.length && (af = af.replace("@" + aE, "@" + lY.data.e7[me]))
			}
		return af
	}
}

function aCK() {
	var gap, mC, u = [0, 0, 0, 0, 0],
		v = [0, 0, 0, 0, 0],
		m5 = [1, 1, 1, 1, 1],
		hB = [!0, !0, !0, !1, !1],
		ag = (this.v4 = [!0, !0, !0, !1, !1], null);
	this.rA = function(pt, aCL) {
		ag = pt, hB = aCL, mC = [aCM.aCN, aCM.aCO, aCM.aCP, aCM.aCP, aCM.aCQ], this.c()
	}, this.c = function() {
		if (aN.o9()) {
			var aW, oI = Math.floor((bx.by.i2() ? .261 : .195) * aD.lh),
				oJ = Math.floor(.9 * oI),
				lr = Math.floor(.17 * oJ);
			if (gap = bx.by.i2() ? 2 * iN.gap : iN.gap, m5[0] = oI / ag[0].width, m5[1] = oJ / ag[1].width, m5[2] = lr / ag[2].height, m5[3] = lr / ag[3].height, m5[4] = lr / ag[4].height, m5[2] *= 1.7, m5[3] *= 1.07, u[0] = gap, u[1] = gap, u[
				2] = gap, u[3] = gap, u[4] = Math.floor(2 * gap + m5[3] * ag[3].width), v[0] = gap, v[1] = v[0] + gap + m5[0] * ag[0].height, v[2] = v[1] + gap + m5[1] * ag[1].height, v[3] = v[2] + gap + m5[2] * ag[2].height, v[4] = v[3], !hB[0])
				for (aW = 0; aW < 5; aW++) v[aW] -= m5[0] * ag[0].height + gap;
			if (!hB[1])
				for (aW = 2; aW < 5; aW++) v[aW] -= m5[1] * ag[1].height + gap
		}
	}, this.fd = function() {
		return !(7 === bz.f() && bx.by.i2())
	}, this.t = function(aCR, aCS) {
		if (ag && this.fd())
			for (var aW = hB.length - 1; 0 <= aW; aW--)
				if (hB[aW] && this.v4[aW] && u[aW] < aCR && v[aW] < aCS && aCR < u[aW] + m5[aW] * ag[aW].width && aCS < v[aW] + m5[aW] * ag[aW].height) return h.gQ(9, h.l2, new aCT(L(118), bK.en.aA0(mC[aW]))), !0;
		return !1
	}, this.a6 = function() {
		if (ag && this.fd()) {
			var aW;
			for (a7.imageSmoothingEnabled = !0, aW = 0; aW < 5; aW++) hB[aW] && this.v4[aW] && (a7.setTransform(m5[aW], 0, 0, m5[aW], u[aW], v[aW]), a7.drawImage(ag[aW], 0, 0));
			a7.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a6Y() {
	this.c = function() {
		this.a6W = 0, this.vM = [], this.ve = 0, this.vL = 0
	}, this.wo = function() {
		var m2;
		d4.iC || (m2 = this, 2 === d4.vR ? m2.vM = mv.a6Z.aBN() : d4.jD ? m2.vM = mv.a6Z.aBP() : m2.vM = mv.a6Z.aBR(), m2.a6W = l8.aA5.a6T(), m2.ve = Math.max(1, mv.a6Z.aBS(m2.vM)), ko.dl.aCV(), 8 === d4.mr ? mv.result.vL = 0 : m2.vL = 100 * mv
			.result.a6W * (1 + d4.wB))
	}
}

function aCX(n7, data, c3) {
	var e4 = data.aCY.length,
		aCZ = document.createElement("div"),
		aCa = document.createElement("div"),
		qp = document.createElement("div"),
		aCb = new Array(e4),
		yy = new Array(e4),
		aCc = new Array(data.aCd.length),
		aCe = bK.color.aCf(70, 70, 0, .35);

	function tk() {
		this.style.backgroundColor = bK.color.tk(aCe, 160)
	}

	function aCl() {
		this.style.backgroundColor = aCe
	}

	function a3k() {
		var ba;
		for (n7.style.font = bK.en.i3(0, bK.en.a9u(.026, .5, .03)), aW = 1; aW < aCc.length; aW++) bK.en.r3(aCc[aW], 4);
		if (bK.en.r3(aCZ, 2), e4) {
			for (var nd, oI = aCZ.offsetWidth, oJ = qp.offsetWidth, aW = 0; aW < aCc.length; aW++) nd = .01 * data.aCk[aW] * oJ, aCc[aW].style.width = (100 * nd / oI).toFixed(2) + "%";
			var me = data.aCY[0].length;
			for (aW = 0; aW < e4; aW++)
				for (bK.en.r3(aCb[aW], 2), ba = 1; ba < me; ba++) bK.en.r3(yy[aW][ba], 4);
			aCa.aCg && (aCa.scrollTop = aCa.aCg)
		}
	}
	this.resize = function() {
			a3k(), a3k()
		}, n7.style.display = "flex", n7.style.flexDirection = "column", aCa.style.overflowX = "hidden", aCa.style.overflowY = "auto", aCa.addEventListener("scroll", function() {
			this.aCg = this.scrollTop, c3 && c3.aCh && (h.bf.uM[c3.aCh] = this.scrollTop)
		}),
		function() {
			var bX, aW, aCY = data.aCY,
				me = e4 ? aCY[0].length : 0;
			for (aW = 0; aW < e4; aW++) {
				aCb[aW] = document.createElement("div"), aCb[aW].style.backgroundColor = function(aW) {
					return aW % 2 == 1 ? bK.color.aCf(130, 130, 130, .35) : aB.sS
				}(aW), aCb[aW].style.width = "100%", aCb[aW].style.display = "flex", yy[aW] = new Array(me);
				for (var ba = 0; ba < me; ba++) yy[aW][ba] = bX = document.createElement("div"), bX.style.display = "flex", bX.style.justifyContent = "center", bX.style.wordBreak = "break-all", bX.style.padding = "0.4em 0em", bX.style.width = data
					.aCk[ba] + "%", bX.textContent = aCY[aW][ba].hB, 1 === aCY[aW][ba].m6 && (bX.name = "" + aW, bX.style.color = aB.tY, bX.style.backgroundColor = aCe, bX.addEventListener("mouseover", tk), bX.addEventListener("mouseout", aCl),
						function(bX, bC, qA) {
							2147483647 !== qA && bX.addEventListener("click", function() {
								l7.eH(30), l7.eK(30, bC), gD.c(l7.eG), this.style.backgroundColor = aCe, h.gQ(8, h.l2, new l3(25, {
									action: 0,
									bC: b9.bA.wf(b9.bA.wd(5)),
									qA: qA
								}))
							})
						}(bX, aCY[aW][ba].bC, aCY[aW][ba].qA)), aCb[aW].appendChild(bX)
			}
			for (aCZ.style.display = "flex", aCZ.style.backgroundColor = bK.color.aCf(0, 120, 0, .35), aW = 0; aW < aCc.length; aW++) aCc[aW] = bX = document.createElement("div"), bX.style.display = "flex", bX.style.justifyContent = "center", bX
				.style.wordBreak = "break-all", bX.style.padding = "0.4em 0em", bX.style.width = data.aCk[aW] + "%", bX.innerHTML = data.aCd[aW], aCZ.appendChild(bX)
		}();
	for (var aW = 0; aW < e4; aW++) qp.appendChild(aCb[aW]);
	aCa.appendChild(qp), n7.appendChild(aCZ), n7.appendChild(aCa), c3 && c3.aCh && (aCa.aCg = h.bf.uM[c3.aCh])
}

function wE() {
	this.a2E = function(size) {
		for (var nH = gD, e7 = [], aW = 0; aW < size; aW++) e7.push(String.fromCharCode(nH.gE(16)));
		return e7.join("")
	}, this.aCn = function(ak) {
		return 20 < (ak = ak.trim()).length ? ak.substring(0, 20) : ak
	}
}

function aCo() {
	function aCy(u, e4, v, aCq, aCv, jp, player) {
		if (!(v < 1 || aCv < v))
			for (var aW = 0; aW <= e4; aW++) {
				var aK = dI.aD9(u, v);
				if (d5.ao.dH(aK) && !bK.nU.has(aCq, dK.dj(aK)) && dK.yA(aK, player)) return aK >> 2;
				u += jp
			}
		return -1
	}

	function aD3(v, e4, u, aCq, aCu, jp, player) {
		if (!(u < 1 || aCu < u)) {
			e4 = Math.max(e4, 0);
			for (var aW = 0; aW <= e4; aW++) {
				var aK = dI.aD9(u, v);
				if (d5.ao.dH(aK) && !bK.nU.has(aCq, dK.dj(aK)) && dK.yA(aK, player)) return aK >> 2;
				v += jp
			}
		}
		return -1
	}

	function aD7(aCx, aCz, dD) {
		return -1 !== aCz && (-1 === aCx || dI.aD8(aCz, dD) < dI.aD8(aCx, dD)) ? aCz : aCx
	}
	this.zs = function(player, dD) {
		if (d5.eD.d3(player))
			for (var aCp = dI.eB(), aCq = [];;) {
				var aCr = function(dD, aCp, aCq, player) {
					for (var zV = dI.jd(dD), zX = dI.je(dD), aCu = l.aH - 2, aCv = l.aJ - 2, aCw = -1, bX = 0; bX < aCp; bX++) {
						var a0j = Math.max(zV - bX, 1),
							a0k = Math.max(zX - bX, 1),
							a0l = Math.min(zV + bX, aCu),
							a0c = Math.min(zX + bX, aCv),
							aCx = aCy(zV, a0l - zV, zX - bX, aCq, aCv, 1, player),
							aCz = aCy(zV - 1, zV - a0j - 1, zX - bX, aCq, aCv, -1, player),
							a0l = aCy(zV, a0l - zV, zX + bX, aCq, aCv, 1, player),
							a0j = aCy(zV - 1, zV - a0j - 1, zX + bX, aCq, aCv, -1, player),
							aD2 = aD3(zX, a0c - zX - 1, zV - bX, aCq, aCu, 1, player),
							aD4 = aD3(zX - 1, zX - a0k - 2, zV - bX, aCq, aCu, -1, player),
							a0c = aD3(zX, a0c - zX - 1, zV + bX, aCq, aCu, 1, player),
							a0k = aD3(zX - 1, zX - a0k - 2, zV + bX, aCq, aCu, -1, player);
						if (aCw = aD7(aCw, aCx, dD), aCw = aD7(aCw, aCz, dD), aCw = aD7(aCw, a0l, dD), aCw = aD7(aCw, a0j, dD), aCw = aD7(aCw, aD2, dD), aCw = aD7(aCw, aD4, dD), aCw = aD7(aCw, a0c, dD), 0 <= (aCw = aD7(aCw, a0k, dD)) && bX *
							bX >= dI.aD8(aCw, dD)) return aCw
					}
					return -1
				}(dD, aCp, aCq, player);
				if (-1 === aCr) break;
				var id = dK.dj(dI.dJ(aCr));
				if (d5.ao.dk(player, id)) return !! function(player, aCr, dD) {
					for (var tI = dI.aDA(aCr, dD), aW = 0; aW < 4; aW++) {
						var dP = dI.dM(aCr, tI);
						if (dK.yB(dI.dJ(dP), player)) return dF.dG[6] = tI, 1;
						tI = (tI + 1) % 4
					}
					return
				}(player, aCr, dD) && (dF.dG[7] = aCr, !0);
				aCq.push(id)
			}
		return !1
	}
}

function aDB() {
	this.e7 = new Array(4), this.aDC = new Uint16Array(2), this.km = new Uint16Array(2), this.ow = new Int32Array(2), this.oZ = new Uint32Array(2), this.aDD = new Uint32Array(2), this.y6 = new Uint8Array(4), this.gw = new Uint8Array(4), this.jY =
		new Uint32Array(4), this.aDE = new Uint32Array(5), this.jV = new Uint32Array(8), this.dG = new Uint32Array(8), this.aDF = new Uint16Array(16), this.kn = new Uint16Array(512), this.aAs = new Uint16Array(512), this.aAt = new Uint16Array(512),
		this.aDG = new Uint16Array(0), this.c = function() {
			var e4 = l.aH * l.aJ;
			this.aDG.length !== e4 && (this.aDG = new Uint16Array(e4))
		}, this.aDH = function(e7, pk) {
			return e7[0] = pk, e7
		}, this.aDI = function(e7, pk, px) {
			return e7[0] = pk, e7[1] = px, e7
		}, this.aDJ = function(e7, pk, px, v4) {
			return e7[0] = pk, e7[1] = px, e7[2] = v4, e7
		}, this.aDK = function(e7, pk, px, v4, aDL) {
			return e7[0] = pk, e7[1] = px, e7[2] = v4, e7[3] = aDL, e7
		}
}

function a68() {
	var aDM, aDN, aDO, a8S, aDP, ut = 0;
	this.a2F = new aDQ, aDO = new a5Y([.45, .27], [.5, .5], 2 / 3), aDN = [new ei("⚔️<br>" + L(119), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aDR(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : aB.aDS), new ei("🗡️<br>" + L(120), function() {
			aDR(1)
		}, aB.aDT), new ei("🔑<br>" + L(121), function() {
			aDR(2)
		}, aB.aDU), new ei("☰<br>" + L(122), function() {
			aDR(3)
		}, aB.aDV), new ei("", function() {
			h.gQ(12)
		}, aB.i6, !1),
		new ei("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new ei("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], a8S = new a0w(bn.buffer.data[122]);
	for (var aW = 0; aW < aDN.length; aW++) aDN[aW].button.style.position = "absolute";

	function aDR(cW) {
		bx.by.setState(10), aN.o9() || aN.aDW(), 0 === cW ? h.bf.a26(1) : 1 === cW ? (uY.p4.gP(bn.buffer.data[156].value, 1) || d4.pD.aDX(), h.gQ(19)) : 2 === cW ? 0 !== bx.id || bn.buffer.data[140].value ? h.gQ(8, h.l2, new l3(16)) : h.bf.a2B(h.l2,
			16) : 3 === cW && h.gQ(1)
	}
	a8S.k.style.position = "absolute", a8S.k.style.textAlign = "center", a8S.k.placeholder = L(123), this.show = function() {
		bz.setState(0), bx.by.setState(12), this.a2F.show(), aDN[4].tZ(bK.color.aDY(bn.buffer.data[121].value)), this.resize(), document.body.appendChild(a8S.k);
		for (var aW = 0; aW < aDN.length; aW++) document.body.appendChild(aDN[aW].button);
		1 !== bx.id || bx.hr < 5 || (aDP && n.o > aDP + 144e5 ? bx.a99.setState(14) : aDP = n.o)
	}, this.s = function() {
		this.a2F.s(), h.removeChild(document.body, a8S.k);
		for (var aW = 0; aW < aDN.length; aW++) h.removeChild(document.body, aDN[aW].button)
	}, this.resize = function() {
		this.a2F.resize(), this.a2F.resize(), aDO.resize();
		var gap = .5 * iN.gap,
			sc = 10 / 99 * .84 * aDO.aE,
			aDb = .16 * aDO.aF,
			aDc = .19 * aDO.aE,
			u = aDO.u + aDc,
			sc = aDO.v + sc + 3 * gap,
			aE = .5 * (aDO.aE - gap) - aDc,
			aDc = aDO.aE - 2 * aDc - aDb - gap,
			aDc = (bK.en.a9p(a8S.k, u, sc, aDc, aDb), bK.en.a9p(aDN[4].button, u + aDc + gap, sc, aDb, aDb), ut = sc, .5 * (aDO.v + aDO.aF - (sc += aDb + gap) - gap));
		bK.en.a9p(aDN[0].button, u, sc, aE, aDc), bK.en.a9p(aDN[1].button, u + aE + gap, sc, aE, aDc), bK.en.a9p(aDN[2].button, u, sc + aDc + gap, aE, aDc), bK.en.a9p(aDN[3].button, u + aE + gap, sc + aDc + gap, aE, aDc);
		bK.en.a9p(aDN[5].button, u, sc + aDc * 2 + gap * 2, aE * 2 + gap, aDc / 3);
		bK.en.a9p(aDN[6].button, u, sc + aDc * 2.33 + gap * 3, aE * 2 + gap, aDc / 3);
		for (var aW = 0; aW < aDN.length; aW++) aDN[aW].button.style.font = bK.en.i3(0, bK.en.a9x(.065 * aDO.aF)), bK.en.r3(aDN[aW].button, 5);
		a8S.k.style.font = bK.en.i3(0, bK.en.a9x(.08 * aDO.aF)), bK.en.r3(a8S.k, 5)
	}, this.a6 = function() {
		if (bz.aA(), y.a6(), e4 = Math.floor((bx.by.i2() ? .018 : .0137) * aD.lh), a7.font = bK.en.i3(0, Math.max(5, e4)), bK.en.textBaseline(a7, 0), bK.en.textAlign(a7, 2), a7.fillStyle = aB.i8, a7.fillText(lT.hr, aD.aE, 0), text =
			"Win count: " + __fx.wins.count, textLength = a7.measureText(text).width, e4 = Math.max(5, e4), a7.textAlign = "left", a7.textBaseline = "middle", a7.fillText(text, a7.canvas.width - textLength - e4 / 2, 2 * e4), a9.a6(ut), x.a6(), aN
			.o9()) {
			a7.imageSmoothingEnabled = !1;
			var text = aN.aO("territorial.io"),
				textLength = .84 * aDO.aE / text.width;
			a7.setTransform(textLength, 0, 0, textLength, aDO.u + .08 * aDO.aE, aDO.v), aDM = aDM || bK.ca.a5q(text, bK.ca.a5v, [0, 0, 0]);
			for (var u = -1; u <= 1; u += 2)
				for (var v = -1; v <= 1; v += 2) a7.drawImage(aDM, u, v);
			a7.drawImage(text, 0, 0), a7.imageSmoothingEnabled = !0;
			var e4 = aN.aO("logo"),
				aDg = .6666 * textLength * text.height / e4.height,
				j1 = .5 * aD.aE,
				j2 = aDO.v + .5 * textLength * text.height - .5 * aDg * e4.height;
			a7.setTransform(aDg, 0, 0, aDg, j1 - .6 * textLength * text.width, j2), a7.drawImage(e4, 0, 0), a7.setTransform(aDg, 0, 0, aDg, j1 + .6 * textLength * text.width - aDg * e4.width, j2), a7.drawImage(e4, 0, 0), a7.setTransform(1, 0, 0,
				1, 0, 0), a7.imageSmoothingEnabled = !0
		}
	}
}

function aDh() {
	this.q1 = function() {
		for (var nD, u, pk, py = pz, q0 = l.nT, aE = l.aH, pv = aE - 1, pw = l.aJ - 1, hD = 0, v = 1; v < pw; v++)
			for (pk = v * aE, u = 1; u < pv; u++) q0[nD = pk + u << 2] === q0[1 + nD] && q0[nD] === q0[2 + nD] && (hD++, py[2 + nD] = 4);
		aDi.pa = hD
	}, this.q2 = function(aDj, aDk) {
		for (var py = pz, aE = l.aH, pv = aE - 1, pw = l.aJ - 1, id = 0, v = 1; v < pw; v++)
			for (var pk = v * aE, u = 1; u < pv; u++) {
				var aK = 2 + (pk + u << 2);
				py[aK] === aDj && (! function(aK, id, aDj, aDk) {
					var e4 = 1,
						py = pz,
						jZ = dK.xw,
						hF = [aK],
						aDm = id >> 8 << 1,
						aDn = 255 & id;
					py[aK - 2] = aDm, py[aK - 1] = aDn, py[aK] = 5;
					for (; e4;) {
						for (var hG = [], aW = 0; aW < e4; aW++)
							for (var jP = hF[aW], bX = 0; bX < 8; bX++) {
								var ja = jP + jZ[bX];
								py[ja] === aDj && (py[ja - 2] = aDm, py[ja - 1] = aDn, py[ja] = aDk, hG.push(ja))
							}
						e4 = (hF = hG).length
					}
				}(aK, id, aDj, aDk), id = (id + 1) % 32768)
			}
	}, this.q3 = function() {
		for (var py = pz, aE = l.aH, pv = aE - 3, pw = l.aJ - 3, aDp = 12 * aE, v = 3; v < pw; v++)
			for (var pk = v * aE, u = 3; u < pv; u++) {
				var aK = 2 + (pk + u << 2);
				2 !== py[aK] || 2 === py[aK - 12] && 2 === py[12 + aK] && 2 === py[aK - aDp] && 2 === py[aK + aDp] || (py[aK - 2] = 1 | py[aK - 2])
			}
	}
}

function a6N() {
	var aDq, s7, aDt, s6, s9, aDr = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aDs = new Array(4),
		aDu = new Array(2),
		aDv = [L(124), L(113), L(125), L(126)];

	function aC4() {
		var wM;
		!an.bl || (wM = aDq.sM.a8S.k.value.trim().slice(0, 127)).length < 1 || (aDq.sM.a8S.k.value = "", an.bg.wo(wM))
	}

	function aE0(aE5) {
		an.bf.aE2[3] = 1 - an.bf.aE2[3], aE1(3, 1, an.bf.aE2[3]), aE5 && cr.rp.nu(4), an.bf.aE2[3] && bn.ih.pT(158, an.bf.aE2[0])
	}

	function aDw(ba, eN) {
		an.bf.aE2[ba] !== eN && (0 === ba && an.bf.aE2[3] && aE0(0), aE1(ba, an.bf.aE2[ba], 0), aE1(ba, eN, 1), an.bf.aE2[ba] = eN, 0 === ba ? (cr.rp.nu(2, eN), an.bf.aE2[2] ? (aDq.sO.wY(), aDq.sM.reset(1)) : aDq.sM.reset(0), h.p7().aE7(), h.p7()
			.aE8()) : 2 === ba && (0 === eN ? (cr.rp.nu(0), aDq.sM.wY(), aDq.sX()) : (cr.rp.nu(1), aDq.sO.wY(), aDq.sY())))
	}

	function aE1(ba, eN, color) {
		aDq.sQ[ba].ch[eN].tZ(color ? aB.a5n : aB.aDx)
	}

	function aEC(gF) {
		return l.nK.aEK[gF]
	}

	function aED(gG) {
		return gG < 7 ? "   " + (gG + 2) + " Teams" : 10 === gG ? "   No Full-Sending" : ""
	}

	function aEE(gL, aEO) {
		return aEO ? gL <= 90 && 60 < gL ? "   Contest" : "" : gL <= 60 ? "   Contest" : ""
	}
	this.aE3 = function() {
		return aDq.sM
	}, this.bg = function(bC) {
		aDw(2, 0);
		var ak = aDq.sM.a8S.k.value,
			bC = "@" + bC + " ";
		ak.length && !bK.bL.a0H(ak, " ") && (bC = " " + bC), aDq.sM.a8S.k.value = ak += bC, aDq.sM.a8S.k.focus()
	}, this.aE9 = function() {
		aDq.sO.wY()
	}, this.aE7 = function() {
		var aEA = an.bf.aE2[0],
			aEA = an.bf.gB[aEA],
			eN = (l.eH(aEA.gF, aEA.mapSeed), s7.ch),
			aEB = aEC(aEA.gF, aEA.mapSeed) + aED(aEA.gG) + aEE(aEA.gL),
			aEA = L(131) + "   " + aEC(aEA.gH, aEA.gI) + aED(aEA.gJ) + aEE(aEA.gL, 1);
		eN[0].button.textContent === aEB && eN[1].button.textContent === aEA || (eN[0].button.textContent = aEB, eN[1].button.textContent = aEA, s7.resize())
	}, this.aE8 = function() {
		var aEA = an.bf.aE2[0],
			gA = an.bf.gB[aEA];
		aDq.sW(gA.gC);
		for (var hB, yh, aW = 0; aW < an.bG.aCG.length; aW++) aDr[0][aW].au.textContent = an.bG.aCG[aW].length, aDr[1][aW].au.textContent = (hB = an.bf.gB[aW].gL, yh = void 0, ((yh = eO.eP(hB, 60)) < 10 ? "0" : "") + yh + ":" + ((hB %= 60) < 10 ?
			"0" : "") + hB);
		var gA = an.bG.aCG[aEA],
			aEH = gA.length,
			aEI = an.bG.gM[aEA];
		aDr[2][1].au.textContent = "" + aEH, aDr[3][1].au.textContent = "" + aEI;
		for (aW = 0; aW < 4; aW++) {
			var aEJ = an.bf.gB[aW];
			aDs[aW] ? 0 === aEJ.gC && (aDs[aW].au.textContent = l.nK.aEK[aEJ.gF]) : aDs[aW] = new a2S(l.nK.aEK[aEJ.gF], s6.ch[aW].button, 1, 1), bK.bL.startsWith(aDv[aW], "🏆 ") ? aEJ.gK || (aDv[aW] = aDv[aW].substring(3), s6.ch[aW].button
				.textContent = aDv[aW], s6.ch[aW].button.appendChild(aDr[1][aW].au), s6.ch[aW].button.appendChild(aDr[0][aW].au), s6.ch[aW].button.appendChild(aDs[aW].au)) : aEJ.gK && (aDv[aW] = "🏆 " + aDv[aW], s6.ch[aW].button.textContent =
				aDv[aW], s6.ch[aW].button.appendChild(aDr[1][aW].au), s6.ch[aW].button.appendChild(aDr[0][aW].au), s6.ch[aW].button.appendChild(aDs[aW].au))
		}
		var aEL = "",
			aEM = "";
		0 === aEA && (aEL = an.ao.aEN(gA, 0, aEH), aEM = an.ao.aEN(gA, 0, aEI)), aDt[0].au.textContent = aEL, aDt[1].au.textContent = aEM, aDu[1].au.textContent = "MP: " + an.bf.gT[0] + "   SP: " + an.bf.gT[1] + "   Lobby: " + bK.nU.hQ(an.bG.aCG)
	}, this.aEP = function() {
		aDq.sM.wY()
	}, this.show = function() {
		an.bf.aEQ++, aDq.show(), this.resize(), an.message.show()
	}, this.s = function() {
		aDq.s(), an.az.s(), an.b3.s(), an.message.s()
	}, this.resize = function() {
		aDq.resize(1 - an.bf.aE2[2]), an.message.resize()
	}, this.j = function(ag) {
		2 === ag ? an.bf.aE2[3] ? aE0(1) : aDq.sQ[3].ch[0].ep() : ag < 2 && aE0(1)
	}, s6 = new a1H([new ei(aDv[0], function() {
		return aDw(0, 0), 2
	}), new ei(aDv[1], function() {
		return aDw(0, 1), 2
	}), new ei(aDv[2], function() {
		return aDw(0, 2), 2
	}), new ei(aDv[3], function() {
		return aDw(0, 3), 2
	})], aB.aDx), (s7 = new a1H([new ei("", 0, 2), new ei("", 0, 2)], aB.aDy, 1)).aY.translate = !1;
	var aDz = new a1H([new ei(L(127), function() {
		return aDw(2, 0), 2
	}), new ei(L(10), function() {
		return aDw(2, 1), 2
	})], aB.aDx);
	s9 = new a1H([new ei(L(128, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			h.i(), an.aV(), cr.bf.aE4(3240), __fx.customLobby.setActive(false), h.gQ(5, 5)
		}),
		function() {
			h.i(), an.aV(), cr.bf.aE4(3240), __fx.customLobby.setActive(false), h.gQ(5, 5)
		})), new ei(L(129), function() {
		return aE0(1), 2
	})], aB.aDx), aDq = new s5(s6, s7, aDz, s9, aC4, an.az.b0);
	for (var aW = 0; aW < 4; aW++) aDr[0][aW] = new a2S("0", s6.ch[aW].button), aDr[1][aW] = new a2S("0", s6.ch[aW].button, 1);
	aDr[2][1] = new a2S("0", aDz.ch[1].button), aDr[3][1] = new a2S("0", s9.ch[1].button), (aDt = [new a2S("", aDz.ch[1].button, 1, 1), new a2S("", s9.ch[1].button, 1, 1)])[0].au.style.bottom = "0em", aDt[1].au.style.bottom = "0em", aDt[0].au
		.translate = !1, aDt[1].au.translate = !1, aE1(0, an.bf.aE2[0], 1), aE1(2, an.bf.aE2[2], 1), (aDu = [new a2S(L(130), aDq.sZ(), 1, 0), new a2S("", aDq.sZ(), 1, 1)])[0].au.style.fontSize = "0.4em", aDu[1].au.style.fontSize = "0.4em"
}

function aER() {
	var aES = new Uint16Array(d4.jW),
		aET = 0;

	function aEZ(rw, aEX) {
		var ag = n.kg();
		return 3213 <= ag ? 4 + eO.eP(100 * aEX, k5.k6(rw)) : (rw = 1 + eO.eP(d4.kD, 300), ag < 357 ? 2 + eO.eP(100 * aEX, rw) : ag < 714 ? 2 + eO.eP(100 * aEX, 4 * rw) : ag < 1071 ? 2 + eO.eP(100 * aEX, 10 * rw) : ag < 2142 ? 2 + eO.eP(100 * aEX,
			30 * rw) : 2 + eO.eP(100 * aEX, 100 * rw))
	}

	function aEY(rw) {
		return d4.iC || 4284 <= n.kg() || bK.dl.iS(rw)
	}
	this.c = function() {
		aES.fill(0), aET = 15
	}, this.dO = function(oW) {
		var player = d4.jL;
		return !!bK.dl.aEU(player, oW) && !(!bK.dl.aEV(player, bK.dl.ls(player, fZ.lt()), oW) || (player = oW, oW = dF.oZ[0], !aEY(player) && aES[player] + aEZ(player, oW) > aET))
	}, this.dd = function(rw, aEX) {
		if (!aEY(rw)) {
			aEX = aEZ(rw, aEX);
			if (aES[rw] + aEX > aET) return !1;
			aES[rw] += aEX
		}
		return !0
	}, this.kK = function() {
		n.kg() % 100 == 99 && (n.kg() < 1071 ? aET += 4 : n.kg() < 2142 ? aET += 6 : n.kg() < 3213 ? aET += 8 : aET += 10)
	}
}

function aEa() {
	var aEb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.aEc = function(o) {
		var aEe, ak = new Date(o.getTime() - 6e4 * o.getTimezoneOffset()).toUTCString();
		return ak.length < 12 || (ak = ak.substring(5, ak.length), 0 === (o = o.getTimezoneOffset())) ? ak : (aEe = (o < 0 ? "+" : "-") + eO.eP(Math.abs(o), 60), 0 == (o = Math.abs(o) % 60) ? ak + aEe : ak + aEe + ":" + (o < 10 ? "0" : "") + o)
	}, this.aEf = function(o) {
		var ak = o.toUTCString();
		return ak.length < 12 ? ak : function(o) {
			return aEb[o.getUTCDay()]
		}(o) + ", " + ak.substring(5, ak.length - 4)
	}
}

function aEh() {
	var aEi = null,
		aEj = 2e4,
		aEk = 0;
	this.kK = function() {
		n.o < aEj || (aEj = n.o + 1e4, 0 !== bx.id) || aEi || c0.aEl() || (cr.bf.a1X(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || cr.cs.lJ(5) : aEj = n.o + 1e3)
	}, this.dd = function(ag) {
		aEi = ag
	}, this.show = function() {
		return !(!aEi || n.o < aEk) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (aEk = n.o + 6e4, (new aEm).show(aEi.cR, aEi.colors, aEi.id), !(aEi = null)))
	}
}

function aEn() {
	var a54 = 501,
		aEq = (this.aEo = new Uint32Array(a54), this.oj = new Uint32Array(a54), this.n0 = new Uint16Array(a54), this.aEp = 0, 1),
		aEr = 0;

	function aEu(self) {
		self.max.fill(0)
	}

	function aF1(self, aW) {
		self.max[0] = Math.max(self.aEo[aW], self.max[0]), self.max[1] = Math.max(self.oj[aW], self.max[1]), self.max[2] = Math.max(self.n0[aW], self.max[2])
	}
	this.max = [0, 0, 0], this.aEs = 0, this.oy = new Array(21), this.aEt = null, this.o3 = function() {
		this.aEt = [L(132), L(133), L(134), L(135), L(136), L(137), L(138), L(139), L(140), L(141), L(142), L(143), L(144), L(145), "", L(146), L(147), L(148), L(54), L(149), L(150)]
	}, this.c = function() {
		this.aEp = 0, aEq = 1, this.aEs = 0, aEr = 0, aEu(this), this.oy.fill(0)
	}, this.aEv = function(player, ld) {
		bK.dl.a8E(player) && (this.oy[0] += ld + 1, this.oy[1]++, this.oy[12] += dF.oZ[1])
	}, this.oc = function(player, oW) {
		__fx.donationsTracker.logDonation(player, oW, dF.oZ[0], mY.md());
		player === d4.jL && (eX.oc(dF.oZ[0], dF.oZ[1], oW), this.oy[12] += dF.oZ[1], this.oy[16] += dF.oZ[0]), oW === d4.jL && (eX.aEw(dF.oZ[0], player), this.oy[10] += dF.oZ[0])
	}, this.aEx = function(player) {
		bK.dl.a8E(player) && (this.oy[2]++, this.oy[12] += dF.oZ[1])
	}, this.aEy = function(player) {
		bK.dl.a8E(player) && (this.oy[19]++, this.oy[12] += dF.oZ[1])
	}, this.aEz = function(player) {
		bK.dl.a8E(player) && this.oy[20]++
	}, this.a7b = function(player, le, cW) {
		bK.dl.a8E(player) && (this.oy[cW] += le)
	}, this.kK = function() {
		var self;
		this.aEs || 0 < aEr-- || ((self = this).aEo[self.aEp] = dA.j8[d4.jL], self.oj[self.aEp] = dA.k9[d4.jL], self.n0[self.aEp] = k5.n1(d4.jL), aF1(self, self.aEp), self.aEp++, self.aEp === a54 && function(self) {
			aEu(self), aF1(self, 0), self.aEp = 1 + eO.eP(a54, 2);
			for (var aW = 1; aW < self.aEp; aW++) self.aEo[aW] = self.aEo[2 * aW], self.oj[aW] = self.oj[2 * aW], self.n0[aW] = self.n0[2 * aW], aF1(self, aW);
			aEq *= 2
		}(self), aEr = aEq - 1, fO.wY(), 0 === dA.iR[d4.jL] && (self.aEs = n.kg()))
	}
}

function aF3() {
	this.aF4 = new aF5, this.aF6 = new aEh, this.turnstile = new aF7, this.c = function() {
		bx.by.aF8(), this.turnstile.c()
	}, this.aEl = function() {
		return bn.buffer.data[160].value
	}
}

function aF9() {
	var aFA = 0,
		aFB = !0;

	function aFC(id) {
		id = [L(151), L(152), L(153), L(154)][id];
		eX.aFD(id)
	}
	this.kK = function() {
		var m6, yi;
		n.o < aFA || (aFA = n.o + 3e3, d4.g2) || d4.iC || bK.dl.mz(d4.jL) || (m6 = new Date, yi = m6.getUTCSeconds(), aFB ? yi < 43 && (aFB = !1) : yi < 43 || (aFA += 52e3, aFB = !0, (yi = (m6.getUTCMinutes() + 2) % 60) % 10 == 0 ? d4.mr < 7 &&
			aFC(0) : yi % 10 == 5 ? 7 !== d4.mr && 10 !== d4.mr || aFC(1) : yi % 10 == 7 ? 8 === d4.mr && aFC(2) : yi % 10 == 2 && 9 === d4.mr && aFC(3)))
	}
}

function aFE() {
	var aFF, aFG, aFH, aFI, aFJ, aFK, aFL, aFM, aFN, aFO, aFP, aFA, aFQ, aFR = 1,
		aFS = 0,
		aFT = 0;

	function aFW(aFX) {
		aFX ? aFQ = (aFQ + 1) % cr.bf.aFY : (cr.bf.close(aFQ, 3280), aFR ? aFR = 0 : (aFT = 1 - aFT, 0 === (aFS = (aFS + 1) % 2) && (aFQ = (aFQ + 1) % cr.bf.aFY, cr.bf.close(aFQ, 3280)))), aFA = n.o, w.aFU = aFT, cr.bf.a2r(aFQ, 4, 1) && cr.rp.np(aFQ)
	}

	function aFa() {
		if (0 !== aFQ) return 1 === aFQ && __fx.customLobby.isActive() ? (aFc.aFd(3249), __fx.customLobby.setActive(!1)) : void aFW();
		aFc.aFd(3249)
	}

	function aFi(v, aFh, gC) {
		var iw = Math.floor((aD.aE - aFI) / 2) + aFL,
			j1 = iw + Math.floor(gC * (aFI - 2 * aFL));
		a7.lineWidth = aFh, a7.beginPath(), a7.moveTo(iw, v), a7.lineTo(j1, v), a7.lineTo(Math.floor(iw - aFL + gC * aFI), v + aFH), a7.lineTo(iw - aFL, v + aFH), a7.closePath()
	}
	this.a27 = 1, this.a8N = 0, this.aFU = 0, this.c = function() {
		c0.turnstile.aFV(), bz.setState(6), aFF = 0, aFG = 1, aFM = "rgba(0,220,120,0.4)", aFN = "rgba(0,0,0,0.8)", this.resize(), n.a5 = !0, aFR = 1, aFS = 0, aFQ = this.a27 - 1, aFT = 0 === this.a8N ? lT.uk ? 1 : 0 : this.a8N - 1, aFW(1)
	}, this.resize = function() {
		aFI = Math.floor((bx.by.i2() ? .5 : .25) * aD.lh), aFJ = aFI + 12, aFH = Math.floor(.125 * aFI), aFL = 3 * aFH, aFK = Math.floor(.225 * aFI), aFP = Math.floor(.3 * aFH), aFO = bK.en.i3(0, aFP)
	}, this.aFZ = function(c4) {
		c4 === aFQ && aFa()
	}, this.t = function(u, v) {
		var iw = Math.floor((aD.aE - aFJ) / 2),
			iz = Math.floor(.5 * (aD.aF - iN.gap - aFH - aFK)) + aFH + iN.gap;
		return iw < u && u < iw + aFJ && iz < v && v < iz + aFK && (this.g6(), d.z(u, v, !1), !0)
	}, this.g6 = function() {
		cr.bf.aE4(3260), __fx.customLobby.setActive(false), h.bf.a25()
	}, this.kK = function() {
		6 === bz.f() && (n.o > aFA + 12e3 && aFa(), 100 < (aFF += .07 * aFG * (aFF < 16 ? 5 + aFF : 84 < aFF ? 105 - aFF : 17)) ? (aFF = 100, aFG = -1) : aFF < 0 && (aFF = 0, aFG = 1), aFM = "rgba(0," + Math.floor(190 - 1.9 * aFF) + "," + Math
			.floor(120 - 1.2 * aFF) + "," + (.4 + .004 * aFF) + ")", aFN = "rgba(0," + Math.floor(1.9 * aFF) + "," + Math.floor(1.2 * aFF) + "," + (.8 - .004 * aFF) + ")", n.a5 = !0)
	}, this.a6 = function() {
		var u = Math.floor((aD.aE - aFJ) / 2),
			v = Math.floor(.5 * (aD.aF - iN.gap - aFH - aFK));
		! function(title, v, aFh, gC) {
			a7.fillStyle = aFN, aFi(v, aFh, 1), a7.fill(), a7.fillStyle = aFM, aFi(v, aFh, gC), a7.fill(), a7.strokeStyle = aB.i8, aFi(v, aFh, 1), a7.stroke(),
				function(aFk, v) {
					bK.en.textAlign(a7, 1), bK.en.textBaseline(a7, 1), a7.font = aFO, a7.fillStyle = aB.i8, a7.fillText(aFk, Math.floor(.5 * aD.aE), Math.floor(v + .58 * aFH))
				}(title, v)
		}(L(155), v, 3, aFF / 100),
		function(u, v, aE, aF, wM) {
			a7.fillStyle = aB.aM, a7.fillRect(u, v, aE, aF), a7.lineWidth = 3, a7.strokeStyle = aB.i8, a7.strokeRect(u, v, aE, aF);
			var e4 = Math.floor(.3 * aF);
			bK.en.textAlign(a7, 1), bK.en.textBaseline(a7, 1), a7.font = bK.en.i3(0, e4), a7.fillStyle = aB.i8, a7.fillText(wM, Math.floor(u + aE / 2), Math.floor(v + aF / 2 + .1 * e4))
		}(u, v + aFH + iN.gap, aFJ, aFK, L(2))
	}
}

function a9l() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aFl() {
	this.kK = function(player) {
		return d5.dv.aFm(player, function(player) {
			var e4 = kN.a1v.a1q;
			if (0 === e4) return -1;
			for (var me = Math.min(e4, kN.performance.a20 ? e4 : 10), buffer = kN.a1v.buffer, eS = eO.eP(kH.random() * e4, kH.value(100)), k = eS + me, iH = kH.a5S(dA.j9[player], dA.jA[player]), iI = kH.a5S(dA.jB[player], dA.jC[player]),
					iL = -1, e3 = dI.aFo(0, 0, l.aH, l.aJ), aW = eS; aW < k; aW++) {
				var j3 = aW % e4,
					aFp = dI.jj(iH, iI, buffer[j3]);
				aFp < e3 && (e3 = aFp, iL = j3)
			}
			return -1 !== iL ? function(dP, iH, iI) {
				var zV = dI.jd(dP),
					zX = dI.je(dP),
					rJ = iH - zV,
					rK = iI - zX;
				Math.abs(rJ) >= Math.abs(rK) ? (rK = 0, rJ = Math.sign(rJ)) : (rJ = 0, rK = Math.sign(rK));
				rJ === rK && (rJ = 1);
				for (;;) {
					if (zV += rJ, zX += rK, !dI.jl(zV, zX)) break;
					if (dP = dI.jm(zV, zX), dK.yO(dI.dJ(dP))) return dP
				}
				return -1
			}(buffer[iL], iH, iI) : -1
		}(player))
	}
}

function aFv() {
	a7N = 0, aFr = 2048, a7h = new Uint32Array(4 * aFr), aFs = 0, aFt = new Uint32Array(aFr), aFu = new Uint8Array(l.aH * l.aJ)
}

function aFw(player) {
	a7J = player, a7H = !1, aFx(), aFy();
	for (var aW = k2.zn(a7J) - 1; 0 <= aW; aW--) a7K = aW, aFz();
	a7H && aG0()
}

function aG0() {
	jS.aG1(), jS.aG2()
}

function aFz() {
	a78 = k2.zx(a7J, a7K), a7L = k2.zw(a7J, a7K), a7d = k2.a8D(a7J, a7K), aG3(), (0 !== a7N && (aG4(), aG5()) ? a75 : a7A)()
}

function aG5() {
	if (!((a7a = eO.eP(a7L, a7N)) > d4.a7T)) {
		if (!a7d) return !1;
		var aG6 = a7N * (1 + d4.a7T);
		a7L += bK.dl.a7e(a7J, aG6 - a7L), a7a = eO.eP(a7L, a7N)
	}
	return !0
}

function aG4() {
	for (var aW = a7N - 1; 0 <= aW; aW--) aFu[eO.eP(a7h[aW], 4)] = 0
}

function a7A() {
	1 === k2.zn(a7J) && a6l.aG7(a7J);
	var m6 = bK.dl.oa(a7J, a7L);
	ob.a7b(a7J, a7L - m6, 12), k2.a8B(a7J, a7K)
}

function aFx() {
	for (var player = a7J, ks = dA.ks, e4 = Math.min(ks[player].length, aFr), hD = 0, aG8 = aFt, aW = e4 - 1; 0 <= aW; aW--) aG8[hD++] = ks[player][aW];
	aFs = hD
}

function aFy() {
	for (var aW = dA.ks[a7J].length - 1; 0 <= aW; aW--) dK.dL(dA.ks[a7J][aW]) && dK.yW(dA.ks[a7J][aW], a7J);
	dA.ks[a7J] = []
}

function aG3() {
	a7N = 0, (a78 === d4.jW ? aG9 : aGA)()
}

function aGA() {
	for (var nD, j3, aW, jZ = dK.jZ, bX = 3; 0 <= bX; bX--)
		for (aW = aFs - 1; 0 <= aW; aW--) nD = aFt[aW] + jZ[bX], j3 = eO.eP(nD, 4), 0 === aFu[j3] && dK.yH(nD) && dK.jR(nD) === a78 && (aFu[j3] = 1, a7h[a7N++] = nD)
}

function aG9() {
	for (var nD, j3, aW, jZ = dK.jZ, bX = 3; 0 <= bX; bX--)
		for (aW = aFs - 1; 0 <= aW; aW--) nD = aFt[aW] + jZ[bX], j3 = eO.eP(nD, 4), 0 === aFu[j3] && dK.jQ(nD) && (aFu[j3] = 1, a7h[a7N++] = nD)
}

function qX() {
	this.qY = 0, this.kK = function() {
		a9.kK(), w.kK(), aD.kK(), cr.bf.kK(), aGB.aGC(), c0.aF6.kK(), n.a5 && (n.a5 = !1, bz.a6())
	}
}

function aGD() {
	this.mU = function(ak, font, maxWidth) {
		if (font && (a7.font = font), a7.measureText(ak).width <= maxWidth) return ak;
		for (var aW = ak.length - 1; 1 <= aW; aW--)
			if (ak = ak.substring(0, aW), a7.measureText(ak + "...").width <= maxWidth) return ak + "...";
		return "..."
	}
}

function aGF() {
	this.bA = new wb, this.lM = new aGG, this.gO = new iW, this.c = function() {
		this.bA.c()
	}
}

function aGH() {
	this.a8R = [L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171)];
	var aGI = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.pP = new Array(aGI.length), this.c = function() {
		var e7 = bn.buffer.data[155].value.split(";"),
			me = e7.length;
		if (function() {
				for (var e4 = aGI.length, aW = 0; aW < e4; aW++) fp.pP[aW] = aGI[aW]
			}(), !(me > aGI.length))
			for (var aW = 0; aW < me; aW++) e7[aW].length && (this.pP[aW] = e7[aW])
	}, this.a8U = function(cW, code) {
		for (var pP = this.pP, aGK = aGI, ak = (pP[cW] = code, ""), e4 = pP.length, aGL = [], aW = 0; aW < e4; aW++) aGL.push(pP[aW] === aGK[aW] ? "" : pP[aW]);
		e4--;
		for (aW = 0; aW < e4; aW++) ak += aGL[aW] + ";";
		bn.ih.pT(155, ak += aGL[e4])
	}, this.a8P = function() {
		bn.ih.pT(155, ""), this.c()
	}, this.ag = function(code, cW) {
		return code === this.pP[cW] || code === this.pP[cW + 1]
	}
}

function a6M() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 !== d4.data.sResourcesType && (d4.data.sResourcesData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.sResourcesType && bK.nU.hJ(yq.yx(), d4.data.sResourcesData, 2047)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(172), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(55), L(56), L(39)],
			value: d4.data.sResourcesType
		}, function(cW) {
			yu(), 2 !== cW || d4.data.sResourcesData || (d4.data.sResourcesData = new Uint16Array(d4.jW)), d4.data.sResourcesType = cW, h.gQ(28)
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn;
		1 === d4.data.sResourcesType && ((hn = new z1).z2("Value"), hn.z5(new a0w({
			cW: -1,
			value: d4.data.sResourcesValue
		}, 1, 0, function(k) {
			var value = eO.h2(Math.floor(k.target.value), 0, 2047);
			k.target.value = d4.data.sResourcesValue = value
		})), yy.push(hn))
	}(yy), function(yy) {
		var hn;
		2 === d4.data.sResourcesType && ((hn = new z1).z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.sResourcesData, 2)), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function rk() {
	var aGM, aGN;
	this.aFY = 3, this.a1e = null, this.fH = 0, this.g9 = 0;

	function aGV() {
		return 0 === w.a8N ? lT.uk ? 1 : 0 : w.a8N - 1
	}

	function aGY(c4, a1T, a1U) {
		aGN[c4].a8Z = !0, aGS(c4), aGM[c4] = new a1N, aGM[c4].c(c4, a1T, a1U)
	}

	function a1a(aW) {
		return aGN[aW].a8Z && aGM[aW].a1a()
	}

	function aGS(c4) {
		aGN[c4].o = n.o, aGN[c4].aGP = !1
	}
	this.c = function() {
		this.a1e = new Array(this.aFY), this.a1e[0] = "territorial.io", this.a1e[1] = "1.territorial.io", this.a1e[2] = "4.territorial.io", aGM = new Array(this.aFY), aGN = new Array(this.aFY);
		for (var aW = this.aFY - 1; 0 <= aW; aW--) aGN[aW] = {
			a8Z: !1,
			o: 0,
			aGP: !1
		};
		this.a2r(0, 0, 0)
	}, this.aGQ = function(aW) {
		return aGM[aW]
	}, this.kK = function() {
		for (var aW = this.aFY - 1; 0 <= aW; aW--) this.a1X(aW) && n.o > aGN[aW].o + 15e3 && (cr.rn.aGR(aW, aGN[aW].aGP), aGS(aW));
		!this.a1X(0) && n.o > aGN[0].o + 8e3 && (aGN[0].o = n.o, this.a2r(0, 0, 0))
	}, this.a2o = function(id) {
		return this.a2r(0, id, 0) && this.a1Y(0)
	}, this.aGT = function(aGU) {
		return aGU ? w.aFU : aGV()
	}, this.aGW = function() {
		return aGV() ? "game.territorial.io" : "territorial.io"
	}, this.a2C = function(aGX) {
		aGX = this.aGW() + aGX;
		return "<a href='https://" + aGX + "' target='_blank'>" + aGX + "</a>"
	}, this.a2r = function(c4, a1T, aGU) {
		aGU = this.aGT(aGU);
		if (aGN[c4].a8Z) {
			if (aGM[c4].a1a()) return aGM[c4].a1b(a1T), aGM[c4].a1X();
			aGM[c4].s()
		}
		return aGY(c4, a1T, aGU), !1
	}, this.a1f = function(c4, a1T) {
		console.log("Connection to Server " + c4), cr.cs.l6(c4)
	}, this.a1Y = function(aW) {
		return this.a1X(aW) && aGM[aW].a1Y()
	}, this.a1Z = function(aW) {
		aGM[aW].a1Z()
	}, this.a1X = function(aW) {
		return aGN[aW].a8Z && aGM[aW].a1X()
	}, this.send = function(c4, eG) {
		0 !== c4 && aGS(c4), aGM[c4].send(eG)
	}, __fx.customLobby.setSendFunction(this.send), this.fG = function(c4) {
		8 === bz.f() && (aGN[c4].aGP = !0, cr.rl.a5O = !0)
	}, this.close = function(c4, a1d) {
		a1a(c4) && aGM[c4].close(a1d)
	}, this.aBV = function(c4, a1d) {
		aFc.aFd(a1d), a1a(c4) && aGM[c4].close(a1d)
	}, this.aE4 = function(a1d) {
		for (var aW = this.aFY - 1; 0 <= aW; aW--) this.close(aW, a1d)
	}, this.aGZ = function(c4, a1d) {
		for (var aW = this.aFY - 1; 0 <= aW; aW--) aW !== c4 && this.close(aW, a1d)
	}, this.aGa = function() {
		0 === this.fH && (d4.iC || d4.g2) || this.close(this.fH, 3246)
	}, this.a1h = function(c4, k) {
		aGM[c4].s(), aFc.aGb(c4, k.code)
	}
}

function aGc() {
	function aGe(key) {
		var aGh;
		return "undefined" == typeof URLSearchParams || (aGh = window.location.search, "string" != typeof(aGh = new URLSearchParams(aGh).get(key))) || aGh.length < 1 ? null : bE.bA.a72(aGh, 5)
	}
	this.gc = function() {
		if (0 !== bx.id) return !1;
		if (! function() {
				var value = aGe("account");
				if (!value && !(value = aGe("a"))) return void aGf.clear();
				return aGf.clear(), h.gQ(8, h.l2, new l3(1e3, {
					action: 0,
					bC: value,
					qA: 0
				})), 1
			}()) {
			var value = aGe("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			h.gQ(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aGg = new URL(window.location.href);
		aGg.search = "";
		try {
			return history.replaceState(null, "", aGg.toString()), !0
		} catch (k) {
			console.log("error 352: " + k)
		}
		return !1
	}, this.aGj = function(key, value) {
		if (0 === bx.id) try {
			var aGg = new URL(window.location.href),
				nD = aGg.searchParams;
			nD.set(key, value), aGg.search = nD.toString(), history.replaceState(null, "", aGg.toString())
		} catch (k) {
			console.log("error 358: " + k)
		}
	}
}

function aGk() {
	this.aFm = function(player, aGl) {
		return -1 !== aGl && !!d5.ao.aGm(player, aGl) && this.dw(player, aGl, 0)
	}, this.dw = function(player, aGl, aGn) {
		player = function(player, aGl, aGn) {
			var dq = d5.ao.dr(player, aGl);
			if (-1 === dq) return -1;
			dq = d5.ao.aGr(dq, aGl);
			if (-1 === dq) return -1;
			var aGo = d5.e8.aGs(dq, aGl);
			if (0 <= aGo) return aGo;
			if (d5.e8.eE()) return -1;
			if (0 <= (aGo = d5.e8.aGs(aGl, dq))) return d5.e8.aGt(d5.e8.e9(d5.e8.get(aGo)));
			if (dq === aGl) return d5.e8.aGt(new Uint32Array([dq, aGl]));
			if (0 <= (aGo = d5.aGu.dw(dq, aGl))) return aGo;
			return aGn ? function(aGw, player) {
				var aDG = dF.aDG,
					buffer = (aDG.fill(0), [aGw]),
					aGx = (aDG[aGw] = 1, dI.aGx),
					aCr = -1,
					e4 = buffer.length;
				for (; - 1 === aCr && e4;) {
					for (var e7 = [], aW = 0; aW < e4; aW++)
						for (var dP = buffer[aW], le = aDG[dP], bX = 0; bX < 8; bX++) {
							var vr, vp, jc = dP + aGx[bX],
								aK = 4 * jc;
							dK.yO(aK) ? (vr = aDG[jc], vp = le + 5 + ((1 & bX) << 1), 0 === vr ? (e7.push(jc), aDG[jc] = vp) : aDG[jc] = Math.min(vp, vr)) : -1 === aCr && bX % 2 == 0 && dK.yI(player, aK) && (aCr = dP)
						}
					e4 = (buffer = e7).length
				}
				return -1 !== aCr ? function(aCx, aGz) {
					var aGx = dI.aGx,
						aH0 = -1,
						tI = 0,
						oy = [];
					for (; aGz !== aCx;)(tI = function(dP, tI) {
						var aDG = dF.aDG,
							aGx = dI.aGx,
							le = aDG[dP];
						if (le - aDG[dP + aGx[tI]] != 5 + ((1 & tI) << 1))
							for (var ba = 0; ba < 8; ba++) {
								var bX = ba + tI + 6 & 7;
								if (le - aDG[dP + aGx[bX]] == 5 + ((1 & bX) << 1)) return bX
							}
						return tI
					}(aGz, tI)) !== aH0 && (oy.push(aGz), aH0 = tI), aGz += aGx[tI];
					oy.push(aCx);
					var aGo = d5.e8.aGs(oy[0], aCx);
					if (0 <= aGo) return aGo;
					return d5.e8.aGt(new Uint32Array(oy))
				}(aGw, aCr) : -1
			}(aGl, player) : -1
		}(player, aGl, aGn);
		return -1 !== player && (dF.e7[0] = d5.e8.get(player), !0)
	}
}

function aH2() {
	function aH5(player) {
		for (var jo = dA.jo[player], e4 = jo.length, jp = Math.max(eO.eP(e4, 12), 1), jZ = dK.jZ, fn = kH.kI(e4), aW = 0; aW < e4; aW += jp)
			for (var jP = jo[(aW + fn) % e4], bX = 3; 0 <= bX; bX--) {
				var ja = jP + jZ[bX];
				if (dK.jb(ja)) return {
					aK: ja,
					id: dK.dj(ja),
					nD: player
				}
			}
		return null
	}

	function aHA(player, aHB) {
		var k1 = bK.dl.aHC(player, k8.zJ[k8.k1[player]]);
		dA.ks[player].push(aHB.aK), k2.dd(player, k1, aHB.nD), a6l.a6m(player, !0)
	}
	this.kK = function(player) {
		return !!l.jI(l.gF) && !!d4.data.passableMountains && 0 !== dA.jo[player].length && function(player) {
			var aH4 = aH5(player);
			if (null === aH4) return !1;
			! function(player) {
				for (var my = mK.my, mL = mK.mL, e4 = Math.min(mL, 12), j3 = kH.kI(mL), aDF = dF.aDF, jo = dA.jo, hD = 0, aW = 0; aW < e4; aW++) {
					var nD = my[(aW + j3) % mL];
					nD !== player && jo[nD].length && jS.jT(player, nD) && (aDF[hD++] = nD)
				}
				dF.km[0] = hD
			}(player);
			var aH7 = function(jJ) {
				for (var e4 = dF.km[0], aDF = dF.aDF, aW = 0; aW < e4; aW++) {
					var aHB = aH5(aDF[aW]);
					if (null !== aHB && aHB.id === jJ) return aHB
				}
				return null
			}(aH4.id);
			return null !== aH7 ? (aHA(player, aH7), !0) : function(player, jJ) {
				var e4 = kN.a1v.a1q;
				if (0 !== e4)
					for (var aK = kN.a1v.buffer[kH.kI(e4)] << 2, jZ = dK.jZ, bX = kH.kI(4);;) {
						if (aK += jZ[bX], dK.jb(aK)) {
							if (dK.dj(aK) === jJ) return aHA(player, {
								aK: aK,
								nD: d4.jW
							}), !0;
							break
						}
						if (!dK.jQ(aK)) break
					}
				return !1
			}(player, aH4.id)
		}(player)
	}
}

function uP() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5G = null
}

function aHD() {
	this.kK = function(player) {
		return !!d5.eD.d3(player) && !(d5.bf.d8[player] >= Math.max(3 * kN.performance.a20, k8.d7[k8.k1[player]]) || !bK.dl.rg(player, k8.rh[k8.k1[player]], 32, 0)) && (mY.mq() ? function(player) {
			var aHJ = d5.ao.mu(),
				e4 = aHJ.length;
			if (0 === e4) return !1;
			aHJ = aHJ[kH.kI(e4)], e4 = d5.bf.dU[aHJ];
			if (d5.dc.rd(player, e4)) return !1;
			return !! function(player, rf) {
				var rf = dI.dg(d5.bf.dh[rf]),
					zV = dI.jd(rf),
					rf = dI.je(rf),
					iw = dA.j9[player],
					iz = dA.jB[player],
					j1 = dA.jA[player],
					player = dA.jC[player],
					j1 = Math.max(zV - j1, iw - zV),
					iw = Math.max(rf - player, iz - rf);
				return j1 < 100 && iw < 100
			}(player, aHJ) && !!d5.zt.dY(player, e4, 1) && (bK.dl.og(player), d5.bf.ri(player), !0)
		}(player) : !!(kN.aHF.kK(player) || kN.aHG.kK(player) || kN.aHH.kK(player)) && (function(player) {
			dF.dG[1] = 4, bK.dl.og(player), d5.bf.ri(player)
		}(player), !0))
	}
}

function aHL() {
	var aHM, canvas, vc, aHN;

	function aHS(cW, name, aHT, ak) {
		vc[cW] = name, canvas[cW] = new Image, canvas[cW].onload = function() {
			! function(cW, aHT) {
				var a5r, nw = null;
				7 === aHT ? a5r = bK.ca.a5t : 8 === aHT ? (a5r = bK.ca.a5w, nw = .1) : 3 === aHT ? (a5r = bK.ca.a5u, nw = .06) : 5 === aHT ? a5r = bK.ca.a5x : 6 === aHT ? a5r = bK.ca.a5s : 4 === aHT && (a5r = bK.ca.a5y);
				canvas[cW] = bK.ca.a5q(canvas[cW], a5r, nw)
			}(cW, aHT), aHV()
		}, canvas[cW].onerror = function(k) {
			console.error("Error loading image at index", cW, "Error:", k), aHV()
		}, canvas[cW].src = "data:image/png;base64," + ak
	}

	function aHV() {
		aHM--, aHP()
	}

	function aHP() {
		0 === aHM && (aHM = -1, aHR(), n.a5 = !0, canvas[7] = aHN, canvas[8] = aHN, canvas[9] = aHN, canvas[10] = aHN, 5 === h.l2) && h.p7().a2F.resize()
	}

	function aHR() {
		fQ.aHX(), x.rA([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== bx.id, 1 !== bx.id, !0, !0, !0]), a3x.nV = new aHY, a3x.nV.c(), fU.o3()
	}
	this.c = function() {
		if (void 0 === canvas) {
			aHM = 23, canvas = new Array(aHM), vc = new Array(aHM), (aHN = document.createElement("canvas")).width = 1;
			for (var aW = aHM - (aHN.height = 1); 0 <= aW; aW--) canvas[aW] = aHN;
			aHR(), aHS(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHS(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHS(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aHS(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHS(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHS(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHS(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(8,
					"googleplay", 3,
					"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"
					), aHS(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHS(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHS(14, "bestPlayer", 5,
					"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"
					), aHS(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHS(16, "apple", 3,
					"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"
					), aHS(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHS(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHS(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHS(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHS(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHS(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(cW) {
		return canvas[cW]
	}, this.aO = function(name) {
		for (var aW = vc.length - 1; 0 <= aW; aW--)
			if (vc[aW] === name) return canvas[aW];
		return aHN
	}, this.o9 = function() {
		return aHM <= 0
	}, this.aDW = function() {
		aHM = 0, aHP()
	}
}

function aHZ() {
	var aHa = new Uint16Array(d4.jW);

	function aHl(player, aHi) {
		for (var e4 = dF.km[0], aDF = dF.aDF, xL = -1, iL = d4.jW, aW = 0; aW < e4; aW++) {
			var e3, nD = aDF[aW];
			jS.jT(player, nD) && (e3 = dI.aD8(aHi, dI.aHr(nD)), -1 === xL || e3 < xL) && (xL = e3, iL = nD)
		}
		return iL
	}

	function aHn(aHk, aHi) {
		if (aHk === d4.jW) return 0;
		var dB = dA.dB[aHk],
			me = dB.length;
		if (0 === me) return 0;
		for (var e4 = Math.min(me, 10), iL = 0, xL = dI.aD8(dB[iL] >> 2, aHi), aW = 0; aW < e4; aW++) {
			var cy = kH.kI(me),
				e3 = dI.aD8(dB[cy] >> 2, aHi);
			e3 < xL && (xL = e3, iL = cy)
		}
		return dB[iL] >> 2
	}

	function aHo(player, aHi, kM, aHt) {
		var aHu;
		(aHt === d4.jW || (aHu = dI.aHr(kM), aHt = dI.aHr(aHt), dI.aD8(aHi, aHu) < dI.aD8(aHi, aHt))) && (aHa[player] = kM)
	}
	this.c = function() {
		aHa.fill(d4.jW)
	}, this.aHb = function() {
		if (n.kg() % 109 == 9 && !(mK.mL < 20) && d4.jD && !(kk.mo() < eO.eP(8 * d4.kD, 10))) {
			var aHc = kk.a0u();
			if (jE.rG[aHc]) {
				kk.aHd(aHc);
				var e4 = dF.km[0];
				if (0 !== e4)
					for (var e7 = dF.kn, my = mK.my, mL = mK.mL, aHe = aHa, cy = kH.kI(e4), aW = 0; aW < mL; aW++) {
						var nd = my[aW],
							ne = e7[cy];
						bK.dl.dm(nd, ne) && 512 === aHe[nd] && (aHe[nd] = ne, cy = (cy + 1) % e4)
					}
			}
		}
	}, this.kK = function(player) {
		var aHi, aHm, aHk, aHf = function(player) {
			var kM = aHa[player];
			if (kM !== d4.jW) {
				if (bK.dl.aHs(kM) && dA.dB[kM]) return kM;
				aHa[player] = d4.jW
			}
			return d4.jW
		}(player);
		return function(player) {
			for (var xD = mK.my, me = mK.mL, e4 = Math.min(me, me < 17 && 5 === kH.kI(20) ? 1 : 16), j3 = kH.kI(me), aDF = dF.aDF, dB = dA.dB, hD = 0, aW = 0; aW < e4; aW++) {
				var nD = xD[(aW + j3) % me];
				nD !== player && dB[nD].length && (aDF[hD++] = nD)
			}
			dF.km[0] = hD
		}(player), 0 !== dF.km[0] && (0 < (aHm = aHn(aHk = aHl(player, aHi = dI.aHj(player)), aHi)) && d5.dv.aFm(player, d5.ao.aGr(aHm, aHi)) ? (aHo(player, aHi, aHk, aHf), !0) : 0 < (aHk = function(player, aHi) {
			for (var e4 = dF.km[0], aDF = dF.aDF, aHe = aHa, j3 = 0, aW = 0; aW < e4; aW++) {
				var nD = aDF[aW],
					nD = aHe[nD];
				nD !== d4.jW && bK.dl.aHs(nD) && player !== nD && jS.jT(player, nD) && (aDF[j3++] = nD)
			}
			return 0 !== (dF.km[0] = j3) ? aHn(aHl(player, aHi), aHi) : 0
		}(player, aHi)) && d5.dv.aFm(player, d5.ao.aGr(aHk, aHi)) ? (aHo(player, aHi, dK.jR(aHk << 2), aHf), !0) : !!(0 < (aHm = aHn(aHf, aHi)) && d5.dv.aFm(player, d5.ao.aGr(aHm, aHi))))
	}
}

function aHw() {
	this.aHx = new Int16Array(4), this.aHy = new Int16Array(4), this.aGx = null, this.c = function() {
		var aW;
		for (this.aHx[0] = -l.aH, this.aHx[1] = 1, this.aHx[2] = l.aH, this.aHx[3] = -1, this.aGx = new Int16Array([-l.aH, 1 - l.aH, 1, l.aH + 1, l.aH, l.aH - 1, -1, -l.aH - 1]), aW = 0; aW < 4; aW++) this.aHy[aW] = 4 * this.aHx[aW]
	}, this.eB = function() {
		return eO.h2(Math.floor(.15 * (1 + .25 * bx.by.i2()) * aD.lh / iy), 4, 128)
	}, this.aHz = function(aK, id) {
		for (var aI0 = this.aHy, aW = 0; aW < 4; aW++) {
			var jP = aK + aI0[aW];
			if (dK.yO(jP) && dK.dj(jP) === id) return !0
		}
		return !1
	}, this.aI1 = function(player, aK) {
		return !dK.jQ(aK) && player === dK.jR(aK)
	}, this.jj = function(zV, zX, dP) {
		return (zV -= this.jd(dP)) * zV + (zX -= this.je(dP)) * zX
	}, this.aI2 = function(aCR, aCS, aI3) {
		aCR = this.aI4(aCR) - this.aI5(aI3), aCS = this.aI6(aCS) - this.aI7(aI3);
		return Math.sqrt(aCR * aCR + aCS * aCS)
	}, this.dt = function(aCx, aCz) {
		var rJ = this.jd(aCx) - this.jd(aCz),
			aCx = this.je(aCx) - this.je(aCz);
		return ~~Math.sqrt(rJ * rJ + aCx * aCx + .5)
	}, this.aD8 = function(aCx, aCz) {
		var rJ = this.jd(aCx) - this.jd(aCz),
			aCx = this.je(aCx) - this.je(aCz);
		return rJ * rJ + aCx * aCx
	}, this.aFo = function(a43, a44, a45, a46) {
		return (a43 -= a45) * a43 + (a44 -= a46) * a44
	}, this.ls = function(nD, ld) {
		return eO.eP(ld * dA.k9[nD], 1e3)
	}, this.aI4 = function(aCR) {
		return 16 * (aCR + ix) / iy
	}, this.aI6 = function(aCS) {
		return 16 * (aCS + j0) / iy
	}, this.aI8 = function(bX) {
		return 16 * bX / iy
	}, this.zW = function(aCR) {
		return Math.floor((aCR + ix) / iy)
	}, this.zY = function(aCS) {
		return Math.floor((aCS + j0) / iy)
	}, this.zZ = function(zV, zX) {
		return 1 <= zV && 1 <= zX && zV < l.aH - 1 && zX < l.aJ - 1
	}, this.jd = function(dP) {
		return dP % l.aH
	}, this.je = function(dP) {
		return eO.eP(dP, l.aH)
	}, this.jm = function(zV, zX) {
		return zX * l.aH + zV
	}, this.aD9 = function(zV, zX) {
		return 4 * this.jm(zV, zX)
	}, this.aI9 = function(dP) {
		return this.jl(this.jd(dP), this.je(dP))
	}, this.jl = function(zV, zX) {
		return 0 < zV && zV < l.aH - 1 && 0 < zX && zX < l.aJ - 1
	}, this.dJ = function(dP) {
		return dP << 2
	}, this.jO = function(aK) {
		return aK >> 2
	}, this.aIA = function(dP) {
		return l.aH * this.je(dP) * 256 + (this.jd(dP) << 4)
	}, this.aIB = function(dP) {
		return this.aIA(dP) + 8 + (l.aH << 7)
	}, this.dg = function(aI3) {
		return l.aH * (this.aI7(aI3) >> 4) + (this.aI5(aI3) >> 4)
	}, this.hi = function(aI3) {
		aI3 = this.dg(aI3);
		return (this.jd(aI3) >> 5) + d5.hh.aIC * (this.je(aI3) >> 5)
	}, this.aI5 = function(aI3) {
		return aI3 % (l.aH << 4)
	}, this.aI7 = function(aI3) {
		return eO.eP(aI3, l.aH << 4)
	}, this.dM = function(dP, tI) {
		return dP + this.aHx[tI]
	}, this.aID = function(aK, tI) {
		return aK + this.aHy[tI]
	}, this.aDA = function(aCx, aCz) {
		var rJ = this.jd(aCz) - this.jd(aCx),
			aCz = this.je(aCz) - this.je(aCx);
		return Math.abs(rJ) >= Math.abs(aCz) ? 1 + 2 * (rJ < 0) : 2 * (0 < aCz)
	}, this.aHr = function(player) {
		return this.jm(dA.j9[player] + dA.jA[player] >> 1, dA.jB[player] + dA.jC[player] >> 1)
	}, this.aHj = function(player) {
		return this.jm(kH.a5S(dA.j9[player], dA.jA[player]), kH.a5S(dA.jB[player], dA.jC[player]))
	}
}

function aIE() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a4Y = 13, this.aIF = this.emojis.length, this.aIG = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.aIG, this.aIH = 1024, this.aII = this.emojis.indexOf(
		"💀"), this.aIJ = this.aII + 1, this.aIK = this.emojis.indexOf("🥇"), this.aIL = this.emojis.indexOf("😊"), this.a4Z = function(hB) {
		return hB < this.aIG ? String.fromCharCode(55356, 56806 + eO.eP(hB, 26), 55356, 56806 + hB % 26) : this.emojis[Math.min(hB - this.aIG, this.aIF - 1)]
	}, this.aIM = function(ak) {
		for (var e4 = ak.length - 2, e7 = [], aW = 0; aW < e4; aW++) {
			var gt = ak.charCodeAt(aW) - 56806,
				gv = ak.charCodeAt(aW + 2) - 56806;
			0 <= gt && gt < 26 && 0 <= gv && gv < 26 && (e7.push(26 * gt + gv), aW += 3)
		}
		return e7
	}, this.a3y = function(hB) {
		return hB < this.aIG
	}, this.a4X = function(hB) {
		return hB >= 1024 - this.a4Y
	}, this.a4V = function(hB) {
		return hB >= this.aIG && hB < this.aIG + this.aIJ
	}
}

function aIN() {
	this.aIO = new eU
}

function aIh(mX) {
	lT && !mX || (a0v(), eO = new v1, aCM = new aIj, bK = new aIk, aB = new aIl, d4 = new aIm, lY = new aIn, b9 = new aGF, bE = new wC, k8 = new zA, a6l = new aIo, aA4 = new a7i, a0X = new aIp, a9H = new aAX, aIP = new aIq, aIQ = new aIr, fQ =
		new aIs, fT = new hx, eX = new aIt, a9 = new yY, fS = new aIu, oC = new a8h, fZ = new lb, fY = new aIv, y = new aIw, mS = new aIx, fX = new aIy, mY = new m7, fP = new a2a, d = new wG, w = new aFE, bz = new a, aN = new aHL, dK = new xg,
		xG = new aIz, mK = new x8, aIT = new aER, zi = new vI, k2 = new a7y, k5 = new oN, aIR = new a0o, oD = new a3C, dA = new aJ0, aIS = new aJ1, rU = new aJ2, a3x = new aJ3, aDi = new pV, pi = new sk, fq = new a8Y, cr = new rj, kH = new a5P,
		kN = new aJ4, aIU = new a9R, fK = new aJ5, a9L = new x3, aD = new nx, fU = new aJ6, aGB = new aJ7, zo = new a52, aIV = new aF9, aIW = new aA3, aIX = new aJ8, aIY = new aJ9, aIZ = new aJA, aIa = new aJB, aIb = new aAH, ko = new a2I, uY =
		new oz, fM = new a5T, l7 = new eF, lH = new qa, gD = new aA8, aGf = new aGc, b1 = new eq, dI = new aHw, d5 = new aJC, dF = new aDB, ip = new a0m, aIc = new aJD, mv = new a6X, l = new aJE, fb = new zT, h = new a60, c0 = new aF3, bx =
		new a97, lT = new ub, l8 = new aJF, bn = new ic, jE = new aJG, kk = new aJH, xR = new aJI, iF = new xM, aId = new pI, oA = new pU, ob = new aEn, fO = new aJJ, n = new qP, lk = new n6, iN = new aJK, aFc = new aJL, aIe = new aIN, aIf =
		new u5, an = new bc, bw = new aJM, oX = new ww, ze = new aJN, jS = new aJO, cu = new c2, lT.c(), bx.c(), aD.o3(), bn.c(), lY.c(), lY.aJQ(), (fp = new aGH).c(), bK.c(), aId.c(), cr.c(), b9.c(), bE.c(), l.c(), h.c(), x = new aCK, aD.c(), n
		.c(), iN.c(), oA.c(), r = new aJR, kH.c(), k5.oQ(), c0.c(), aDi.c(), bz.c(), y.c(), aIS.c(), b1.c(), aN.c(), n.a5 = !0, setTimeout(function() {
			l.eH(2, 14071)
		}, 0), h.gQ(5, 5), aGf.gc() || bx.by.aJS(), aD.o7(), lT.um = 1)
}

function a2J() {
	this.aJT = 1, this.zh = function(dP) {
		d4.iC ? ko.a2L.zh(d4.jL, dP) : cr.rn.aJU(dP)
	}, this.zm = function(ld, kM) {
		this.aJT && (this.aJT = 0, bn.ih.pT(182, ld)), d4.iC ? ko.a2L.zm(d4.jL, ld, kM) : cr.rn.aJV(ld, kM)
	}, this.oV = function(ld, oW) {
		d4.iC ? ko.a2L.aJW(d4.jL, ld, oW) : cr.rn.aJX(ld, oW)
	}, this.eV = function(ld, dP) {
		dP = (dP << 3) + dF.dG[6];
		d4.iC ? ko.a2L.eV(d4.jL, ld, dP) : d5.eD.d3(d4.jL) && cr.rn.aJZ(ld, dP)
	}, this.eb = function(ld) {
		849 === ld && (ld = 850);
		var dW = dF.dG[3];
		d4.iC ? ko.a2L.eb(d4.jL, ld, dW) : d5.zt.dV(d4.jL, dW) && cr.rn.aJa(ld, dW)
	}, this.aJb = function(dW) {
		d4.iC ? ko.a2L.aJb(d4.jL, dW) : cr.rn.aJa(849, dW)
	}, this.aJc = function(kM) {
		d4.iC ? ko.a2L.aJc(d4.jL, kM) : cr.rn.aJd(kM)
	}, this.aJe = function(x0) {
		d4.iC ? ko.a2L.aJf(d4.jL, x0) : cr.rn.aJg(x0)
	}, this.zz = function(aJh) {
		d4.iC ? ko.a2L.zz(d4.jL, aJh) : cr.rn.aJi(aJh)
	}, this.aJj = function() {
		d4.iC ? ko.a2L.aJj(d4.jL) : cr.rn.aJk()
	}, this.fv = function() {
		d4.iC ? ko.a2L.fv(d4.jL) : cr.rn.aJd(513)
	}, this.zj = function(ld, dP, kM) {
		d4.iC ? ko.a2L.zj(d4.jL, ld, dP, kM) : cr.rn.aJl(ld, dP, kM)
	}
}

function L(value, aJm, hs, aJn) {
	var ak = "number" == typeof value ? lY.aJo[value] : value;
	if (hs && lY.aJp() && (ak = hs), !aJm) return aJn ? ak.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : ak;
	for (var e4 = aJm.length, aW = 0; aW < e4; aW++)
		for (var ba = 0; ba < 3; ba++) ak = ak.replace("{" + (10 * ba + aW) + "}", aJm[aW]);
	return ak
}

function aJq(aJr) {
	var uo = document.createElement("div");

	function tc() {
		b1.b2() || (uo.style.backgroundColor = bK.color.tk(aB.i6, 50))
	}

	function td() {
		uo.style.backgroundColor = aB.i6
	}
	this.pT = function(gj) {
			uo.textContent = gj
		}, this.show = function() {
			document.body.appendChild(uo)
		}, this.resize = function() {
			var aF = bK.en.jx(.03, .5);
			uo.style.width = 2 * aF + "px", uo.style.height = aF + "px", uo.style.font = bK.en.i3(1, .75 * aF), bK.en.r3(uo, 4), bK.en.r3(uo, 2)
		}, this.aV = function() {
			uo.onclick = null, uo.onmouseover = null, uo.onmouseout = null, h.removeChild(document.body, uo), uo = null
		}, uo.style.position = "absolute", td(), uo.style.color = aB.i8, uo.style.zIndex = "3", uo.style.right = "0", uo.style.top = "0", uo.style.display = "flex", uo.style.justifyContent = "center", uo.style.alignItems = "center", uo.style
		.userSelect = "none", uo.style.outline = "none", uo.onclick = aJr, uo.onmouseover = tc, uo.onmouseout = td
}

function aJM() {
	var aJt = new Array(1),
		aJu = new Array(1),
		aJv = 20,
		aEj = 0,
		aJw = !1;

	function aJy() {
		aJv++, bw.play()
	}
	this.c = function() {
		if (!window.document.documentMode) {
			for (var aW = 0; 0 <= aW; aW--) ! function(aW, src) {
				aJu[aW] = 0, aJt[aW] = document.createElement("audio"), aJt[aW].src = src, aJt[aW].setAttribute("preload", "auto"), aJt[aW].setAttribute("controls", "none"), aJt[aW].style.display = "none", aJt[aW].onpause = function() {
					aJu[aW] = 1
				}, aJt[aW].oncanplaythrough = function() {
					aJu[aW] = 0 === aJu[aW] ? 1 : aJu[aW]
				}, document.body.appendChild(aJt[aW])
			}(aW,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aJw = !0
		}
	}, this.aV = function() {
		if (aJw) {
			aJw = !1;
			for (var aW = 0; 0 <= aW; aW--) aJt[aW].onpause = null, aJt[aW].oncanplaythrough = null, h.removeChild(document.body, aJt[aW]), aJt[aW] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bw.play()
	}), this.play = function() {
		if (aJw) {
			var m6 = performance.now();
			if (aEj + 66 < m6)
				for (var aW = 0; 0 <= aW; aW--)
					if (1 === aJu[aW]) return aEj = m6, aJu[aW] = 2, void aJt[aW].play();
			0 < aJv && (aJv--, setTimeout(aJy, 66))
		}
	}
}

function bk() {
	this.gc = function(cW) {
		if ((gM = an.bG.gM[cW]) < 2 && !__fx.customLobby.isActive()) return !1;
		var gA = an.bf.gB[cW],
			aJz = 9 === gA.gG ? 333 : 512,
			gM = Math.min(gM, aJz);
		8 === gA.gG && (gM -= gM % 2);
		aJz = an.bG.aCG[cW].splice(0, gM), an.bG.gM[cW] -= gM, gM = function(aK0) {
			if (an.be) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var e4 = aK0.length, bC = an.be.bC, aW = 0; aW < e4; aW++)
					if (aK0[aW].bC === bC) return aW
			}
			return -1
		}(aJz);
		return -1 === gM ? (an.bG.bI = an.bG.bI.concat(aJz), 1e3 < an.bG.bI.length && an.bG.bI.splice(0, an.bG.bI.length - 1e3), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === cW && 1 === an.bf.aE2[2], !1) : (8 === gA.gG && (gA.gb = (gA.gb + (gM >>
			1)) % 1024, cW = gM - gM % 2, gM %= 2, aJz = aJz.slice(cW, 2 + cW)), aGB.c(gA, aJz, gM), !0)
	}, this.aK3 = function(gA, aK0, aK1) {
		var bX = d4.data = new uP,
			aK6 = (bX.spawningSeed = gA.spawningSeed, gA.gG < 7 ? (bX.gameMode = 1, bX.numberTeams = gA.gG + 2) : 9 === gA.gG ? (bX.gameMode = bX.isZombieMode = 1, bX.numberTeams = 2) : (bX.gameMode = 0, bX.battleRoyaleMode = 7 === gA.gG ? 0 :
				10 === gA.gG ? 1 : 2), bX.selectedPlayer = aK1, bX.isContest = gA.gK, bX.mapType = l.aK4(gA.gF) ? 0 : 1, l.aK5(bX, gA.gF), bX.mapSeed = gA.mapSeed, bX.humanCount = aK0.length);
		bX.selectableSpawn = 1 === bX.gameMode || aK6 < 100, bX.colorsData = new Uint32Array(aK6), bX.playerNamesData = new Array(aK6), bX.a5G = new Uint32Array(aK6);
		for (var aW = 0; aW < aK6; aW++) bX.colorsData[aW] = aK0[aW].color, bX.playerNamesData[aW] = aK0[aW].username, bX.a5G[aW] = aK0[aW].bC;
		if (2 === bX.battleRoyaleMode)
			for (bX.elo = new Uint16Array(aK6), aW = 0; aW < aK6; aW++) bX.elo[aW] = aK0[aW].elo;
		cu.close(), bz.setState(8), l.eH(gA.gF, bX.mapSeed), d4.pF(), d4.pC = 2
	}
}

function a6b() {
	this.kK = function() {
		var aKF;
		2 === d4.vR ? (eX.a8F(0, 59), a0X.aK7(2700)) : d4.mr < 7 ? (aKF = jE.rG[d4.aBQ], aKF = jE.vc[aKF], oC.a8r(L(173, [aKF]), 2, 1, 12), eX.eY(0, L(174, [aKF]), 40, 0, aB.i8, aB.ea, -1, !1), a0X.aK7(2700)) : 8 === d4.mr ? (d4.vj ? eX.a8F(d4
			.aKC, 2) : eX.a8F(1 - d4.jL, 3), d4.aKD.w1(d4.aKC), a0X.aKE(d4.aKC, 2700, !1, 0)) : 9 === d4.mr ? (eX.aKH(), a0X.aK7(2700)) : (eX.aKI(d4.aKC), a0X.aKE(d4.aKC, 2700, !1, 0))
	}, this.wr = function() {
		var ak;
		d4.g2 || d4.iC || (ak = cr.bf.aGW(), d4.mr < 7 ? ak += "/log/team" : 8 === d4.mr ? ak += "/log/1v1" : 9 === d4.mr ? ak += "/log/zombies" : ak += "/log/br", eX.eY(720, ak, 736, 0, aB.i8, aB.aKJ, -1, !1))
	}
}

function aKK() {
	function aKL(zV, a44, a46) {
		for (var eS = Math.min(a44, a46), cZ = Math.max(a44, a46), v = eS + 1; v < cZ; v++)
			if (!dK.yO(dI.aD9(zV, v))) return;
		return 1
	}

	function aKM(zX, a43, a45) {
		for (var eS = Math.min(a43, a45), cZ = Math.max(a43, a45), u = eS + 1; u < cZ; u++)
			if (!dK.yO(dI.aD9(u, zX))) return;
		return 1
	}

	function aKN(a43, a44, a45, a46, aGq, aGl) {
		for (var e4 = Math.min(Math.abs(a45 - a43), Math.abs(a46 - a44)), rJ = Math.sign(a45 - a43), rK = Math.sign(a46 - a44), aW = 0; aW < e4; aW++)
			if (!dK.yO(dI.aD9(a43 += rJ, a44 += rK))) return null;
		return a43 === a45 ? aKL(a43, a44, a46) ? new Uint32Array([aGq, dI.jm(a43, a44), aGl]) : null : aKM(a44, a43, a45) ? new Uint32Array([aGq, dI.jm(a43, a44), aGl]) : null
	}
	this.dw = function(aGq, aGl) {
		aGq = function(aGq, aGl) {
			var a43 = dI.jd(aGq),
				a44 = dI.je(aGq),
				a45 = dI.jd(aGl),
				a46 = dI.je(aGl);
			if (a43 === a45) {
				if (aKL(a43, a44, a46)) return new Uint32Array([aGq, aGl])
			} else {
				if (a44 !== a46) return aKN(a43, a44, a45, a46, aGq, aGl) || aKN(a45, a46, a43, a44, aGq, aGl);
				if (aKM(a44, a43, a45)) return new Uint32Array([aGq, aGl])
			}
			return null
		}(aGq, aGl);
		return null === aGq ? -1 : d5.e8.aGt(aGq)
	}
}

function aKO() {
	this.kK = function(player, dW) {
		player = d5.ao.aAV(player, dW);
		return !(player < 0 || !d5.dc.aKP(player) || (d5.dc.aKQ(player), 0))
	}
}

function br() {
	var aKR = null,
		aKS = null,
		aKT = 0,
		aKU = 0,
		aKV = null;

	function aKW() {
		0 !== aKS.aq && (an.az.s(), h.gQ(8, 29, new l3(25, {
			action: 0,
			bC: b9.bA.bB(aKS.bC, 5),
			qA: 0
		}, 29)))
	}

	function aKY() {
		return !an.be || an.ao.ax(aKS) ? 1 : 0
	}

	function aKX() {
		var u = aKR.u,
			v = aKR.v,
			aKf = (an.az.s(), aKY());
		aKR = new a2Q([new ei(aIg.a18[5][0], function() {
			aKb(5, 0)
		}, aKf), new ei(aIg.a18[5][1], function() {
			aKb(5, 1)
		}, aKf), new ei(aIg.a18[5][2], function() {
			aKb(5, 2)
		}, aKf), new ei(aIg.a18[5][3], function() {
			aKb(5, 3)
		}, aKf)]), aKa(u, v), aKU = aKT = 2
	}

	function aKZ() {
		29 === h.l2 && h.p7().bg(b9.bA.bB(aKS.bC, 5))
	}

	function aKb(id, value) {
		5 === id && cr.rq.aKg({
			action: 3,
			bC: b9.bA.bB(aKS.bC, 5),
			value: value
		})
	}

	function aKa(u, v, a2W) {
		aKR.show(u, v, a2W), an.b3.show(aKR.u, aKR.v, aKS, 1)
	}
	this.b0 = function(k, aX) {
		aKT = 1, aKS = aX, aKR = new a2Q([new ei(L(175), aKW, 0 === aX.aq ? 1 : 0), new ei(L(176), aKX, aKY()), new ei(L(177), aKZ, 0)]), aKa((aKV = {
			clientX: k.clientX,
			clientY: k.clientY
		}).clientX, aKV.clientY, 1)
	}, this.j = function(code) {
		if (29 !== h.l2) return !1;
		if (!aKS) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.s();
			else if (bK.bL.startsWith(code, "Numpad") || bK.bL.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKT) this.b0(aKV, aKS);
				else {
					if (!aKR) return !1;
					1 === aKT ? code <= 1 ? aKW() : 2 === code ? aKX() : (aKZ(), this.s()) : (aKb(aKU, eO.h2(code - 1, 0, aIg.a18[aKU].length - 1)), this.s())
				}
		}
		return !0
	}, this.s = function() {
		aKT = 0, aKR && aKR.s(), aKR = null, an.b3.s()
	}
}

function sN(sA, sB) {
	var aKr, self, aKl = document.createElement("div"),
		aKm = document.createElement("div"),
		aKn = document.createElement("div"),
		aKo = null,
		aKs = (this.a8S = new a0w({
			value: "",
			cW: -1
		}, 0, aKp, function(k) {
			k.target.value = bK.bL.a05(k.target.value), aKo.au.textContent = 127 - k.target.value.length
		}), 0),
		aKt = 1,
		aKu = 0,
		aKv = 1048575;

	function aKp() {
		sA(), aKo.au.textContent = 127
	}

	function aKz(aKy, aX) {
		aX && (aX.ac = 1, aKy.appendChild(an.bh.transform(aX)))
	}

	function aL0(mX) {
		aKt ? aKl.scrollTop = aKl.scrollHeight : mX && (aKl.scrollTop = aKu)
	}
	this.reset = function(aKx) {
			aKv = 1048575, aKm.textContent = "", aKx || this.wY()
		}, this.wY = function() {
			var gg = an.bf.aE2[0],
				gg = an.bf.gB[gg],
				gh = gg.gh,
				e4 = gh.length,
				eS = 1048575 === aKv ? 0 : e4 - (gg.gi - aKv + 1048575) % 1048575;
			if (aKv = gg.gi, !(e4 <= (eS = Math.max(eS, 0)))) {
				for (var aKy = document.createDocumentFragment(), aW = eS; aW < e4; aW++) aKz(aKy, an.ao.bY(gh[aW], an.ao.bZ(gh[aW])));
				aKm.appendChild(aKy), aL0()
			}
		}, this.aL1 = function(af) {
			var aKy = document.createDocumentFragment();
			aKz(aKy, af), aKm.appendChild(aKy), aL0()
		}, this.show = function(n7) {
			n7.appendChild(aKl), n7.appendChild(aKn), this.resize(n7)
		}, this.s = function(n7) {
			h.removeChild(n7, aKl), h.removeChild(n7, aKn)
		}, this.resize = function(n7) {
			aKs = n7 ? n7.offsetHeight : aKs;
			var n7 = bK.en.jx(.04, .75),
				qy = Math.max(n7, aKs - n7),
				aL2 = aD.aE / aD.fJ,
				aDd = .7 * aL2,
				aL3 = bK.en.ju(aKs - n7 - qy),
				qy = (aKn.style.height = bK.en.ju(n7), aKl.style.height = bK.en.ju(qy), aD.aF > aD.aE || bx.by.i2() ? (aKn.style.top = aL3, aKl.style.top = bK.en.ju(aKs - qy), bK.en.r3(aKl, 8)) : (aKl.style.top = aL3, aKn.style.top = bK.en.ju(aKs -
						n7), bK.en.r3(aKl, 2)), this.a8S.k.style.width = bK.en.ju(aDd), this.a8S.k.style.fontSize = aKr.button.style.fontSize = bK.en.ju(.5 * n7), bK.en.r3(this.a8S.k, 6), aKr.button.style.left = bK.en.ju(aDd), aKr.button.style
					.width = bK.en.ju(aL2 - aDd), .385 * n7);
			bx.by.i2() && (qy *= .8 - .12 * (aD.aE > aD.aF)), aKm.style.marginLeft = aKm.style.marginRight = bK.en.ju(.5 * qy), aKm.style.fontSize = bK.en.ju(qy), aL0(1)
		}, (self = this).a8S.k.hN = 127, aKl.style.position = "absolute", aKl.style.left = "0", aKl.style.width = "100%", aKl.style.overflowX = "hidden", aKl.style.overflowY = "auto", aKl.style.font = "inherit", aKl.style.backgroundColor = aB.aKw,
		aKl.addEventListener("scroll", function() {
			aKu = aKl.scrollTop, aKt = aKu < aKl.scrollHeight - aKl.clientHeight - 2 ? 0 : 1
		}), aKm.style.font = "inherit", aKn.style.position = "absolute", aKn.style.left = "0", aKn.style.width = "100%", self.a8S.k.setAttribute("placeholder", L(178)), self.a8S.k.style.position = "absolute", self.a8S.k.style.top = "0", self.a8S.k
		.style.left = "0", self.a8S.k.style.height = "100%", self.a8S.k.style.backgroundColor = aB.aM, self.a8S.k.style.textAlign = "center", (aKr = new ei(L(179), aKp)).button.top = "0", aKr.button.style.position = "absolute", aKr.button.style
		.height = "100%", aKr.tZ(aB.aDx), aKo = new a2S("127", aKr.button, 1, 1), aKl.appendChild(aKm), aKn.appendChild(self.a8S.k), aKn.appendChild(aKr.button)
}

function a2P() {
	this.kq = function(player, oW, k1) {
		bK.dl.aEV(player, k1, oW) && (k5.oV(player, oW), !bK.dl.iS(oW)) && kN.kh.jz[oW] && kN.kh.jz[oW]--
	}, this.aL5 = function(player, oW, k1) {
		bK.dl.aL6(k1, oW) ? aIT.dd(oW, dF.oZ[0]) && (oX.oY(player, oW, dF.oZ[0], 1), bK.dl.oa(oW, dF.oZ[0]), ob.oc(player, oW), oD.oe(oW, dF.oZ[0])) : ob.a7b(player, k1, 12)
	}
}

function a6K() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 !== d4.data.tIncomeType && (d4.data.tIncomeData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.tIncomeType && bK.nU.hJ(yq.yx(), d4.data.tIncomeData, 255)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(140), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(55), L(56), L(39)],
			value: d4.data.tIncomeType
		}, function(cW) {
			yu(), 2 !== cW || d4.data.tIncomeData || (d4.data.tIncomeData = new Uint8Array(d4.jW), d4.data.tIncomeData.fill(32)), d4.data.tIncomeType = cW, h.gQ(26)
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn;
		1 === d4.data.tIncomeType && ((hn = new z1).z2("Value"), hn.z5(new a0w({
			cW: -1,
			value: d4.data.tIncomeValue
		}, 1, 0, function(k) {
			var value = eO.h2(Math.floor(k.target.value), 0, 255);
			k.target.value = d4.data.tIncomeValue = value
		})), yy.push(hn))
	}(yy), function(yy) {
		var hn;
		2 === d4.data.tIncomeType && ((hn = new z1).z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.tIncomeData, 4)), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function aIu() {
	var wx, aL7, aFO, yb, aFH, aL8 = 0,
		aL9 = 0;

	function aLB(aW) {
		var aLC = !0,
			gt = aB.i8,
			aE = (1 === wx[aW].id ? wx[aW].cd.fillStyle = aB.aLD : wx[aW].kM === d4.jW ? wx[aW].cd.fillStyle = aB.aLE : (dK.y5(wx[aW].kM), wx[aW].cd.fillStyle = bK.color.aCf(dF.y6[0], dF.y6[1], dF.y6[2], .87), 400 < bK.nU.h3(dF.y6, 0, 2) && (aLC = !
				1, gt = aB.aC)), wx[aW].canvas.width),
			oI = (wx[aW].cd.clearRect(0, 0, aE, yb), wx[aW].cd.fillRect(0, 0, aE, yb), wx[aW].cd.fillStyle = gt, ! function(cd, aE, yb) {
				cd.fillRect(0, 0, aE, 1), cd.fillRect(0, yb - 1, aE, 1), cd.fillRect(0, 0, 1, yb), cd.fillRect(aE - 1, 0, 1, yb)
			}(wx[aW].cd, aE, yb), aL7 + 2 * yb < aE && (wx[aW].cd.fillRect(aE - aL7 - yb, 0, 1, yb), wx[aW].cd.fillText(dA.vd[wx[aW].kM], Math.floor((aE - aL7) / 2), Math.floor(.57 * yb))), 0 !== wx[aW].id ? 0 : yb);
		wx[aW].cd.fillText(bK.bL.bB(wx[aW].k1), Math.floor(aE - aL7 / 2 - oI), Math.floor(.57 * yb)),
			function(aW, aE, oI, aLC) {
				wx[aW].cd.fillStyle = aLC ? aB.aLJ : aB.aKw;
				aLC = Math.floor(aL7 * wx[aW].k1 / wx[aW].aLK);
				wx[aW].cd.fillRect(Math.floor(aE - aL7 - oI), yb - aFH, aLC, aFH)
			}(aW, aE, oI, aLC), 0 === wx[aW].id ? (aLH(aW, aE, aLC, gt), function(aW, aE, aLC) {
				wx[aW].cd.strokeStyle = aLC ? aB.vb : aB.aLP, wx[aW].cd.fillRect(yb, 0, 1, yb);
				aLC = aE - yb;
				wx[aW].cd.beginPath(), wx[aW].cd.moveTo(Math.floor(.3 * yb + aLC), Math.floor(yb / 2)), wx[aW].cd.lineTo(Math.floor(yb - .3 * yb + 0 + aLC), Math.floor(yb / 2)), wx[aW].cd.stroke(), wx[aW].cd.beginPath(), wx[aW].cd.moveTo(Math
					.floor(yb / 2 + aLC), Math.floor(.3 * yb)), wx[aW].cd.lineTo(Math.floor(yb / 2 + aLC), Math.floor(yb - .3 * yb + 0)), wx[aW].cd.stroke()
			}(aW, aE, aLC)) : aLH(aW, 2 * yb, aLC, gt)
	}

	function aLH(aW, aE, aLC, gt) {
		wx[aW].cd.strokeStyle = wx[aW].aLL ? aB.aLM : aLC ? aB.aLN : aB.aLO, wx[aW].cd.fillStyle = gt, wx[aW].cd.fillRect(aE - yb, 0, 1, yb), wx[aW].cd.lineWidth = Math.max(Math.floor(yb / 12), 3), wx[aW].cd.lineCap = "round";
		aLC = .35;
		aE = yb + 1, wx[aW].cd.beginPath(), wx[aW].cd.moveTo(Math.floor(aE - aLC * yb + 0), Math.floor(aLC * yb)), wx[aW].cd.lineTo(Math.floor(aE - yb + aLC * yb), Math.floor(yb - aLC * yb + 0)), wx[aW].cd.stroke(), wx[aW].cd.beginPath(), wx[aW].cd
			.moveTo(Math.floor(aE - yb + aLC * yb), Math.floor(aLC * yb)), wx[aW].cd.lineTo(Math.floor(aE - aLC * yb + 0), Math.floor(yb - aLC * yb + 0)), wx[aW].cd.stroke()
	}

	function aLb(e7, aLZ) {
		for (var k1, aW = aLZ - 1; 0 <= aW; aW--) k1 = k2.zw(d4.jL, aW), e7[aW].k1 !== k1 && (e7[aW].k1 = k1, e7[aW].aLK = Math.max(k1, e7[aW].aLK), e7[aW].lf = !0)
	}

	function aLf(e7, aLd) {
		for (var h4 = d4.jL << 3, he = d5.bf.he, db = d5.bf.db, hV = d5.bf.hV, aW = aLd - 1; 0 <= aW; aW--) {
			var aLh = hV[h4 + aW],
				k1 = he[aLh];
			e7[aW].k1 !== k1 ? (e7[aW].k1 = k1, e7[aW].aLK = Math.max(k1, e7[aW].aLK), e7[aW].lf = !0) : e7[aW].aLL || db[aLh] % 64 != 5 || (e7[aW].aLL = !0, e7[aW].lf = !0)
		}
	}

	function aLA(u9) {
		u9.canvas = document.createElement("canvas"), l.nQ.font = aFO;
		var aE = aL7;
		u9.kM < d4.jW && 0 === u9.id && (aE += Math.floor(l.nQ.measureText(dA.vd[u9.kM] + "000").width)), aE += yb, 0 === u9.id && (aE += yb), u9.canvas.width = aE, u9.canvas.height = yb, u9.cd = u9.canvas.getContext("2d", {
			alpha: !0
		}), u9.cd.font = aFO, bK.en.textBaseline(u9.cd, 1), bK.en.textAlign(u9.cd, 1)
	}

	function aLV(aW) {
		return mS.mW() ? aD.aE - wx[aW].canvas.width - iN.gap : mS.u
	}

	function aLW(aW) {
		return Math.floor(2 * iN.gap + (mS.mW() ? mY.aF + iN.gap : 0) + mS.aF + aW * (1.3 * yb))
	}
	this.c = function() {
		aL8 = aL9 = 0, wx = [], this.resize()
	}, this.resize = function() {
		aFO = eX.hy, yb = eX.fontSize + 5, yb = Math.floor(1.25 * yb), bx.by.i2() && (yb = Math.floor(1.25 * yb)), aFH = Math.floor(.15 * yb), l.nQ.font = aFO, aL7 = Math.floor(l.nQ.measureText("02 000 000 0000").width);
		for (var aW = wx.length - 1; 0 <= aW; aW--) aLA(wx[aW]), aLB(aW)
	}, this.iE = function() {
		for (var aW = wx.length - 1; 0 <= aW; aW--) wx[aW].lf && (wx[aW].lf = !1, aLB(aW))
	}, this.t = function(iH, iI) {
		if (2 !== d4.fL && 0 !== dA.iR[d4.jL] && !d4.g2 && !bK.dl.iS(d4.jL))
			for (var aLQ, aLR, aLS, aLT = bx.by.i2() ? yb : 0, aLU = bx.by.i2() ? Math.floor(.15 * yb) : 0, aW = wx.length - 1; 0 <= aW; aW--)
				if (aLQ = aLV(aW), aLR = aLW(aW), aLS = wx[aW].canvas.width, aLR - aLU <= iI && iI <= aLR + yb + aLU) {
					if (aLQ - aLT <= iH && iH <= aLQ + yb + aLT) return wx[aW].aLL || (wx[aW].lf = !0, wx[aW].aLL = !0, 0 === wx[aW].id ? ko.zg.aJc(wx[aW].kM) : ko.zg.aJb(wx[aW].kM)), !0;
					if (0 === wx[aW].id && aLQ + aLS - yb - aLT <= iH && iH <= aLQ + aLS + aLT) return aId.pQ(3), ko.zg.zm(fZ.lt(), wx[aW].kM), !0
				} return !1
	}, this.kK = function() {
		var hF, hG, e7, aLZ;
		0 === dA.iR[d4.jL] || bK.dl.iS(d4.jL) && !d4.g2 || (hF = wx.slice(0, aL8), hG = wx.slice(aL8, aL8 + aL9), e7 = hF, aLZ = k2.zn(d4.jL), function(e7, aLZ) {
			if (aL8 !== aLZ) return 1;
			for (var aW = aLZ - 1; 0 <= aW; aW--)
				if (e7[aW].kM !== k2.zx(d4.jL, aW)) return 1;
			return
		}(e7, aLZ) ? aLb(e7 = function(e7, aLZ) {
			var aW, kM, eN, k1, aLi = [];
			loop: for (aW = 0; aW < aLZ; aW++) {
				for (kM = k2.zx(d4.jL, aW), eN = 0; eN < e7.length; eN++)
					if (e7[eN].kM === kM) {
						aLi.push(e7.splice(eN, 1)[0]);
						continue loop
					} k1 = k2.zw(d4.jL, aW), aLA(k1 = {
					kM: kM,
					k1: k1,
					aLK: k1,
					id: 0,
					lf: !0,
					aLL: !1,
					canvas: null,
					cd: null
				}), aLi.push(k1)
			}
			return aLi
		}(e7, aLZ), aLZ) : aLb(e7, aLZ), hF = e7, hG = function(e7) {
			var aLd = d5.bf.d8[d4.jL];
			return function(e7, aLd) {
				if (aL9 !== aLd) return 1;
				for (var h4 = d4.jL << 3, dU = d5.bf.dU, hV = d5.bf.hV, aW = aLd - 1; 0 <= aW; aW--) {
					var aLh = hV[h4 + aW];
					if (e7[aW].kM !== dU[aLh]) return 1
				}
				return
			}(e7, aLd) ? aLf(e7 = function(e7, aLd) {
				var aW, kM, eN, aLi = [],
					h4 = d4.jL << 3,
					dU = d5.bf.dU,
					he = d5.bf.he,
					hV = d5.bf.hV;
				loop: for (aW = 0; aW < aLd; aW++) {
					var aLh = hV[h4 + aW];
					for (kM = dU[aLh], eN = 0; eN < e7.length; eN++)
						if (e7[eN].kM === kM) {
							aLi.push(e7.splice(eN, 1)[0]);
							continue loop
						} aLh = he[aLh], aLA(aLh = {
						kM: kM,
						k1: aLh,
						aLK: aLh,
						id: 1,
						lf: !0,
						aLL: !1,
						canvas: null,
						cd: null
					}), aLi.push(aLh)
				}
				return aLi
			}(e7, aLd), aLd) : aLf(e7, aLd), e7
		}(hG), aL8 = hF.length, aL9 = hG.length, wx = hF.concat(hG))
	}, this.a6 = function() {
		if (0 !== dA.iR[d4.jL] && (!bK.dl.iS(d4.jL) || d4.g2))
			for (var aW = wx.length - 1; 0 <= aW; aW--) a7.drawImage(wx[aW].canvas, aLV(aW), aLW(aW))
	}
}

function aIx() {
	var hy, aE, v, aLj, aLk, aLl, canvas, cd, lf, oj, aLm, aLn, aLo, aLp;
	this.u = 0, this.aF = 0, this.c = function() {
		aLl = d4.aLq, aLn = "rgba(0,100,0,0.8)", aLo = "rgba(150,0,0,0.8)", lf = aLm = !0, oj = dA.k9[d4.jL], this.resize()
	}, this.resize = function() {
		aE = Math.floor((bx.by.i2() ? .305 : .24) * aD.lh), this.aF = Math.floor(.5 + .13 * aE), aE = Math.floor(6 * this.aF), hy = bK.en.i3(1, Math.floor(.8 * this.aF)), aLk = bK.en.i3(1, Math.floor(.45 * this.aF)), aLp = Math.floor(.5 * this
			.aF), l.nQ.font = hy, v = iN.gap, aLj = Math.floor(1 + .13 * this.aF), (canvas = document.createElement("canvas")).width = aE, canvas.height = this.aF, cd = canvas.getContext("2d", {
			alpha: !0
		}), bK.en.textBaseline(cd, 1), bK.en.textAlign(cd, 1), this.aLr()
	}, this.mW = function() {
		return bx.by.i2() && aD.aE < 1.2 * aD.aF
	}, this.li = function() {
		this.mW() ? this.u = aD.aE - aE - iN.gap : this.u = Math.floor(fX.aLs() + (aD.aE - fX.aLs() - mY.aE - aE) / 2 - .5 * iN.gap)
	}, this.iE = function() {
		lf && (lf = !1, this.aLr())
	}, this.aLr = function() {
		cd.font = hy, cd.clearRect(0, 0, aE, this.aF), cd.fillStyle = aLm ? aLn : aLo, cd.fillRect(0, 0, aE, this.aF), cd.fillStyle = aB.aLJ;
		var ag = this.aLt(),
			aLw = (this.aLu(), cd.fillStyle = dA.k9[d4.jL] >= k5.k6(d4.jL) ? aB.aLv : aB.i8, bK.bL.bB(oj)),
			aLw = (cd.fillText(aLw, Math.floor(aE / 2), aLp), cd.measureText(aLw).width),
			aLy = (cd.font = aLk, cd.fillStyle = 9 === ag ? aB.aLx : aB.i8, k5.oO),
			aLz = "+" + aLy,
			oJ = cd.measureText(aLz).width,
			aM0 = Math.floor(this.aF / 12),
			aLw = .5 * (aE + aLw) + aM0;
		(aLw + oJ + aLj <= aE || 1e3 <= aLy && (aLz = "+" + Math.floor(aLy / 1e3) + "K", aLw + (oJ = cd.measureText(aLz).width) + aLj <= aE)) && cd.fillText(aLz, Math.floor(aLw + .5 * oJ), Math.floor(.3 * this.aF)), __fx.settings
			.displayTickNumber && cd.fillText(9 - ag, Math.floor(2 * aLj + aM0), Math.floor(.3 * this.aF)), cd.fillStyle = aB.i8, cd.fillRect(0, 0, aE, 1), cd.fillRect(0, 0, 1, this.aF), cd.fillRect(0, this.aF - 1, aE, 1), cd.fillRect(aE - 1, 0,
				1, this.aF)
	}, this.aLt = function() {
		var ag = n.kg() % 100,
			a4R = (ag = 9 - eO.eP(ag -= ag % 10, 10), Math.floor(ag * (this.aF - aLj) / 9));
		return cd.fillRect(0, a4R, aLj, this.aF - a4R), cd.fillRect(aE - aLj, a4R, aLj, this.aF - a4R), ag
	}, this.aLu = function() {
		cd.fillRect(aLj, this.aF - aLj, Math.floor((aE - 2 * aLj) * dA.k9[d4.jL] / aLl), aLj)
	}, this.kK = function() {
		var nD = d4.jL;
		bK.dl.mz(nD) && (nD = dA.k9[nD] - dA.ox[nD], oj !== nD ? (aLl = oM(nD, aLl), aLm = oj < nD && 10 <= nD, oj = nD, lf = !0) : n.kg() % 10 == 9 && (lf = !0))
	}, this.a6 = function() {
		0 === dA.iR[d4.jL] || d4.iA || 2 === dA.a4E[d4.jL] || a7.drawImage(canvas, this.u, v)
	}
}

function aJJ() {
	this.aE = 0, this.aF = 0, this.oI = 0, this.oJ = 0, this.aM1 = 0, this.aM2 = 0, this.lr = 0, this.oK = 0;
	var aM4 = this.aM3 = 0;
	this.aM5 = 0, this.aM6 = 0, this.aM7 = 0, this.a8m = 0, this.cW = 0, this.mC = null, this.fd = !1, this.aM8 = -1, this.aM9 = !1, this.aMA = [0, 0], this.o3 = function() {
		this.mC = [L(180), L(16, 0, "Balance"), L(15, 0, "Interest"), L(181)]
	}, this.c = function() {
		this.fd = !1, this.aM8 = -1, this.aM9 = !1, this.resize()
	}, this.resize = function() {
		this.aE = aD.aE < 1.369 * aD.aF ? aD.aE : 1.369 * aD.aF;
		var bX = bx.by.i2() && aD.aE < aD.aF ? 1 : bx.by.i2() ? .8 : aD.aE < aD.aF ? .65 : .59;
		this.aE = Math.floor(bX * this.aE), this.aE -= bx.by.i2() && aD.aE < aD.aF ? 2 * iN.gap + 2 : 0, this.aF = Math.floor(this.aE / 1.369), this.a8m = Math.floor(this.aF / 150), this.a8m = Math.max(this.a8m, 1.5), this.oI = Math.floor(1 +
			.02 * this.aE), this.oJ = Math.floor(1 + .04 * this.aE), this.lr = this.oJ, aM4 = Math.floor(.75 * this.lr), this.oK = Math.floor(1 + .075 * this.aE), this.aM5 = Math.floor(1 + .1125 * this.aE), this.aM6 = Math.floor(this.aE * (bx
			.by.i2() ? .03 : .029)), this.aM6 = Math.max(this.aM6, 4), this.aM7 = Math.floor(.035 * this.aE), this.aM7 = Math.max(this.aM7, 4), this.aM3 = this.aF - 2 * this.lr - this.oK - this.aM5, this.fd && this.aMB()
	}, this.t = function(iH, iI) {
		var a4R, a4Q;
		return !!this.fd && (a4Q = iH, a4R = iI, iH -= eO.eP(aD.aE - this.aE, 2), iI -= eO.eP(aD.aF - this.aF, 2), iH < 0 || iI < 0 || iH >= this.aE || iI >= this.aF || iH >= this.aE - this.aM5 && iI < this.aM5 ? -1 !== fT.t(a4Q, a4R) || fM.t(
			a4Q, a4R) || this.s() : iI < this.aM5 || (iI < this.aF - this.oK ? (this.aM9 = !0, this.aM8 = (iH - 2 * this.oI - this.aM1) / this.aM2, 3 !== this.cW && (n.a5 = !0)) : (a4Q = (a4Q = Math.floor(iH / (this.aE / this.mC
			.length))) < 0 ? 0 : a4Q >= this.mC.length ? this.mC.length - 1 : a4Q) !== this.cW && (this.cW = a4Q, this.aMB(), n.a5 = !0)), !0)
	}, this.z = function(iH, iI) {
		return this.aMA[0] = iH, this.aMA[1] = iI, !(!this.fd || !this.aM9 || (iH -= eO.eP(aD.aE - this.aE, 2), iI = this.aM8, this.aM8 = (iH - 2 * this.oI - this.aM1) / this.aM2, (0 <= this.aM8 && this.aM8 <= 1 || 0 <= iI && iI <= 1) && (n
			.a5 = !0), 0))
	}, this.a1 = function() {
		this.aM9 && (this.aM9 = !1)
	}, this.g1 = function() {
		this.fd ? this.s() : this.show()
	}, this.show = function() {
		ob.aEp < 2 || (this.fd = !0, this.aMB())
	}, this.s = function() {
		this.fd = !1, this.aM8 = -1, n.a5 = !0
	}, this.aMB = function() {
		this.cW < 2 ? this.aM1 = oC.measureText(bK.bL.bB(ob.max[this.cW]), bK.en.i3(0, this.aM6)) : 2 === this.cW && (this.aM1 = oC.measureText(bK.bL.lu(6, 2), bK.en.i3(0, this.aM6))), this.aM2 = this.aE - 2 * this.oI - this.aM1 - this.oJ
	}, this.wY = function() {
		this.fd && this.aMB()
	}, this.a6 = function() {
		this.fd && this.a5f()
	}, this.a5f = function() {
		var u = eO.eP(aD.aE - this.aE, 2),
			v = eO.eP(aD.aF - this.aF, 2);
		a7.setTransform(1, 0, 0, 1, u, v), a7.fillStyle = aB.ea, a7.fillRect(0, this.aM5, this.aE, this.aF - this.aM5), this.aMC(), this.aDf(), a7.strokeRect(0, 0, this.aE, this.aF), bK.en.textAlign(a7, 2), a7.font = bK.en.i3(0, this.aM6), 0 ===
			this.cW ? this.aMD(ob.aEo, u, v) : 1 === this.cW ? this.aMD(ob.oj, u, v) : 2 === this.cW ? this.aME(u, v) : 3 === this.cW && (this.aMF(u, v), this.aMG(u, v)), fT.iT(Math.floor(u + this.aE - .725 * this.aM5), Math.floor(v + .275 * this
				.aM5), Math.floor(.45 * this.aM5)), a7.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aMC = function() {
		var aW, m6;
		for (a7.lineWidth = this.a8m, bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 1), a7.strokeStyle = aB.i8, a7.font = bK.en.i3(1, this.aM7), m6 = this.aE / this.mC.length, a7.fillStyle = aB.sT, a7.fillRect(this.cW * m6, this.aF - this.oK,
				m6, this.oK), a7.fillStyle = aB.i8, a7.fillRect(0, this.aF - this.oK - .5 * this.a8m, this.aE, this.a8m), aW = 1; aW <= 3; aW++) a7.fillRect(aW * m6, this.aF - this.oK, this.a8m, this.oK);
		for (aW = this.mC.length - 1; 0 <= aW; aW--) a7.fillText(bK.cd.mU(this.mC[aW], 0, .9 * m6), (aW + .5) * m6, this.aF - .46 * this.oK)
	}, this.aDf = function() {
		a7.fillStyle = aB.aMH, a7.fillRect(0, 0, this.aE, this.aM5), a7.fillStyle = aB.i8, a7.fillRect(0, this.aM5 - .5 * this.a8m, this.aE, this.a8m), a7.font = bK.en.i3(1, .39 * this.aM5), a7.fillText(bK.cd.mU(L(182), 0, .8 * this.aE), Math
			.floor(this.aE / 2), Math.floor(.55 * this.aM5))
	}, this.aMD = function(e7, u, v) {
		var me = ob.max[this.cW],
			gu = (a7.setTransform(1, 0, 0, 1, u + 2 * this.oI + this.aM1, v + this.lr + this.aM5), a7.lineWidth = 2, this.aM3 / Math.sqrt(me));
		a7.beginPath(), a7.moveTo(this.aM2, this.aM3 - gu * Math.sqrt(e7[ob.aEp - 1]));
		for (var aW = ob.aEp - 2; 0 <= aW; aW--) a7.lineTo(aW * this.aM2 / (ob.aEp - 1), this.aM3 - gu * Math.sqrt(e7[aW]));
		a7.stroke();
		u = this.iT(e7, gu, .5);
		u < .95 && a7.fillText(bK.bL.bB(me), -this.oI, 0), .05 < Math.abs(u - .5) && a7.fillText(bK.bL.bB(Math.floor(me / 4)), -this.oI, Math.floor(this.aM3 / 2)), .05 < u && a7.fillText("0", -this.oI, this.aM3)
	}, this.aME = function(u, v) {
		a7.setTransform(1, 0, 0, 1, u + 2 * this.oI + this.aM1, v + this.lr + this.aM5), a7.lineWidth = 2;
		var gu = this.aM3 / Math.max(ob.max[this.cW], 1);
		a7.beginPath(), a7.moveTo(this.aM2, this.aM3 - gu * ob.n0[ob.aEp - 1]);
		for (var aW = ob.aEp - 2; 0 <= aW; aW--) a7.lineTo(aW * this.aM2 / (ob.aEp - 1), this.aM3 - gu * ob.n0[aW]);
		a7.stroke();
		u = this.iT(ob.n0, gu, 1), v = ob.max[this.cW] / 100;
		u < .95 && a7.fillText(bK.bL.lu(v, 2), -this.oI, 0), .05 < Math.abs(u - .5) && a7.fillText(bK.bL.lu(v / 2, 2), -this.oI, Math.floor(this.aM3 / 2)), .05 < u && a7.fillText(bK.bL.lu(0, 2), -this.oI, this.aM3)
	}, this.aMF = function(u, v) {
		a7.setTransform(1, 0, 0, 1, u + .34 * this.aE, v + 2 * aM4 + this.aM5), bK.en.textAlign(a7, 2);
		for (var aMI = this.aF - 4 * aM4 - this.oK - this.aM5, e7 = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aW = 9; 0 <= aW; aW--) a7.fillText(bK.cd.mU(ob.aEt[e7[aW]], 0, .31 * this.aE), 0, aW * aMI / 9);
		var hB = ob.oy;
		for (a7.setTransform(1, 0, 0, 1, u + .39 * this.aE, v + 2 * aM4 + this.aM5), bK.en.textAlign(a7, 0), a7.fillText(bK.bL.lu(100 * hB[0] / (1024 * Math.max(hB[1], 1)), 1), 0, 0), aW = 8; 1 <= aW; aW--) a7.fillText(hB[e7[aW]].toString(), 0,
			aW * aMI / 9);
		a7.fillText(bK.bL.lu(100 * (1 - dA.j8[d4.jL] / hB[7]), 0), 0, aMI)
	}, this.aMG = function(u, v) {
		a7.setTransform(1, 0, 0, 1, u + .79 * this.aE, v + 2 * aM4 + this.aM5), bK.en.textAlign(a7, 2);
		var aW, aMI = this.aF - 4 * aM4 - this.oK - this.aM5;
		for (a7.fillStyle = aB.aMJ, aW = 2; 0 <= aW; aW--) a7.fillText(bK.cd.mU(ob.aEt[aW + 8], 0, .31 * this.aE), 0, aW * aMI / 9);
		a7.fillText(bK.cd.mU(ob.aEt[18], 0, .31 * this.aE), 0, 3 * aMI / 9), a7.fillStyle = aB.aMK, a7.fillText(bK.cd.mU(ob.aEt[11], 0, .31 * this.aE), 0, 4 * aMI / 9), a7.fillStyle = aB.aLO, a7.fillText(bK.cd.mU(ob.aEt[13], 0, .31 * this.aE), 0,
				5 * aMI / 9), a7.fillText(bK.cd.mU(ob.aEt[15], 0, .31 * this.aE), 0, 6 * aMI / 9), a7.fillText(bK.cd.mU(ob.aEt[16], 0, .31 * this.aE), 0, 7 * aMI / 9), a7.fillText(bK.cd.mU(ob.aEt[12], 0, .31 * this.aE), 0, 8 * aMI / 9), a7
			.fillStyle = aB.aLN, a7.fillText(bK.cd.mU(ob.aEt[17], 0, .31 * this.aE), 0, aMI), a7.fillStyle = aB.aMJ;
		var hB = ob.oy,
			aCH = hB[8] + hB[9] + hB[10] + hB[18],
			aCH = bK.bL.bB(aCH),
			aMM = a7.measureText(aCH).width,
			u = (a7.setTransform(1, 0, 0, 1, u + .83 * this.aE + aMM, v + 2 * aM4 + this.aM5), a7.fillText(bK.bL.bB(hB[8]), 0, 0), a7.fillText(bK.bL.bB(hB[9]), 0, aMI / 9), a7.fillText(bK.bL.bB(hB[10]), 0, 2 * aMI / 9), a7.fillText(bK.bL.bB(hB[
				18]), 0, 3 * aMI / 9), a7.fillStyle = aB.aMK, a7.fillText(aCH, 0, 4 * aMI / 9), a7.fillStyle = aB.aLO, a7.fillText(bK.bL.bB(hB[13]), 0, 5 * aMI / 9), a7.fillText(bK.bL.bB(hB[15]), 0, 6 * aMI / 9), a7.fillText(bK.bL.bB(hB[16]),
				0, 7 * aMI / 9), a7.fillText(bK.bL.bB(hB[12]), 0, 8 * aMI / 9), hB[12] + hB[13] + hB[15] + hB[16]);
		a7.fillStyle = aB.aLN, a7.fillText(bK.bL.bB(u), 0, aMI), a7.fillStyle = aB.i8
	}, this.iT = function(e7, gu, aMO) {
		var aW, k, pk;
		return this.aM8 < 0 || 1 < this.aM8 ? .25 : (aW = this.aM8 * (ob.aEp - 1), pk = e7[k = Math.floor(aW)], pk += (aW - k) * (e7[k < ob.aEp - 1 ? k + 1 : k] - pk), a7.strokeStyle = aB.aMP, .04 < this.aM8 && this.aMQ(0, this.aM3 - gu * Math
				.pow(pk, aMO), aW * this.aM2 / (ob.aEp - 1), this.aM3 - gu * Math.pow(pk, aMO)), .04 < pk / ob.max[this.cW] && this.aMQ(aW * this.aM2 / (ob.aEp - 1), this.aM3, aW * this.aM2 / (ob.aEp - 1), this.aM3 - gu * Math.pow(pk, aMO)),
			a7.fillStyle = aB.aMR, a7.beginPath(), a7.arc(aW * this.aM2 / (ob.aEp - 1), this.aM3 - gu * Math.pow(pk, aMO), Math.max(2, .014 * this.aF), 0, 2 * Math.PI), a7.fill(), e7 = this.aM8 * n.n2, e7 = 0 === dA.iR[d4.jL] ? Math.floor(
				e7 * ob.aEs) : Math.floor(e7 * n.kg()), a7.fillStyle = aB.i8, a7.fillText(1 === aMO ? bK.bL.lu(pk / 100, 2) : bK.bL.bB(Math.floor(pk)), -this.oI, this.aM3 - gu * Math.pow(pk, aMO)), bK.en.textAlign(a7, 1), a7.fillText(mY.mc(
				e7), aW * this.aM2 / (ob.aEp - 1), this.aM3 + this.aM6 - (bx.by.i2() ? 2 : 0) - this.a8m), bK.en.textAlign(a7, 2), gu * Math.pow(pk, aMO) / this.aM3)
	}, this.aMQ = function(iw, iz, j1, j2) {
		a7.beginPath(), a7.moveTo(iw, iz), a7.lineTo(j1, j2), a7.stroke()
	}
}

function aIr() {
	var aMS, aMT, aMU;
	aMS = [32, 65, 191, 913, 931], aMT = [64, 127, 688, 930, 1155], aMU = new Array(aMS.length + 1);
	for (var aW = 0; aW < aMU.length; aW++) {
		aMU[aW] = 0;
		for (var ba = aW - 1; 0 <= ba; ba--) aMU[aW] += aMT[ba] - aMS[ba]
	}

	function aMa(ag) {
		for (var aW = aMS.length - 1; 0 <= aW; aW--)
			if (ag >= aMS[aW] && ag < aMT[aW]) return aW;
		return -1
	}
	this.aCn = function(ak) {
		return 0 !== (ak = ak.trim()).indexOf("Bot ") && 0 !== ak.indexOf("[Bot] ") && function(ak, aMX, aMY) {
			var e4 = (ak = ak.trim()).length;
			if (e4 < aMX || aMY < e4) return !1;
			for (var ag, aMZ = 0, aW = 0; aW < e4; aW++)
				if (ag = ak.charCodeAt(aW), aMZ += 65 <= ag && ag <= 90 || 1040 <= ag && ag <= 1071 ? 1 : 0, -1 === aMa(ag)) return !1;
			if (3 < aMZ && aMZ > Math.floor(e4 / 2)) return !1;
			return !0
		}(ak, 3, 20)
	}, this.iX = function(ak) {
		for (var e4 = (ak = ak.trim()).length, e7 = [], aW = 0; aW < e4; aW++) {
			var ag, nD = aMa(ag = ak.charCodeAt(aW));
			e7.push(aMU[nD] + ag - aMS[nD])
		}
		return e7
	}, this.gP = function(e7) {
		for (var ag, eN, ak = "", e4 = e7.length, aW = 0; aW < e4; aW++)
			for (eN = 1; eN < aMU.length; eN++)
				if (e7[aW] < aMU[eN]) {
					ag = aMS[eN - 1] + e7[aW] - aMU[eN - 1], ak += String.fromCharCode(ag);
					break
				} return ak
	}, this.aMb = function(ak) {
		for (var e7 = this.iX(ak), result = "", aW = 0; aW < e7.length; aW++) result = (result += e7[aW] < 10 ? "00" : e7[aW] < 100 ? "0" : "") + e7[aW].toString(10);
		return result
	}, this.aMc = function(ak) {
		for (var e7 = new Array(Math.floor(ak.length / 3)), aW = 0; aW < ak.length; aW += 3) e7[Math.floor(aW / 3)] = parseInt(ak.substring(aW, aW + 3));
		return this.gP(e7)
	}, this.aMd = function(ak) {
		for (var hB, e7 = [ak.length], aW = 0; aW < ak.length; aW++) e7[aW] = ak.charCodeAt(aW) - 48;
		var result = "";
		for (aW = 0; aW < ak.length; aW++) aW === ak.length - 1 || 51 < 10 * e7[aW] + e7[aW + 1] ? result += e7[aW].toString() : (hB = 10 * e7[aW] + e7[aW + 1], result += String.fromCharCode(hB + (hB < 26 ? 65 : 71)), aW++);
		return result
	}, this.aMe = function(ak) {
		for (var ag, result = "", aW = 0; aW < ak.length; aW++) 48 <= (ag = ak.charCodeAt(aW)) && ag < 58 ? result += String.fromCharCode(ag) : 65 <= ag && ag < 75 ? result += "0" + (ag - 65).toString() : 75 <= ag && ag < 91 ? result += (ag - 65)
			.toString() : 97 <= ag && ag < 123 && (result += (ag - 71).toString());
		return result
	}, this.aMf = function(ak) {
		for (var e4 = ak.length, e7 = [], aW = 0; aW < e4; aW++)(ag = ak.charCodeAt(aW)) < 58 ? e7.push(ak[aW]) : (ag -= ag < 91 ? 65 : 71, e7.push(String(eO.eP(ag, 10))), e7.push(String(ag - 10 * eO.eP(ag, 10))));
		var e4 = e7.length - 2,
			ag = 0,
			ql = [];
		for (aW = 0; aW < e4; aW += 3) ql[ag++] = parseInt(e7[aW] + e7[aW + 1] + e7[aW + 2]);
		return ql
	}, this.aMg = function() {
		for (var fn, aMh = "", aW = 0; aW < 6; aW++) fn = 48 + kH.random() % 36, fn += 58 <= fn ? 39 : 0, aMh += String.fromCharCode(fn);
		return aMh
	}
}

function aEm() {
	var aMi, aEr, aAI;

	function aMo(aW) {
		return bK.color.uz(aEr[aW][0], aEr[aW][1], aEr[aW][2])
	}

	function aMt(ba, eN) {
		return bK.color.aN1(aEr[ba], aEr[eN]), aMo(eN)
	}

	function aMm() {
		aMi && (aMi.remove(), aMi = null)
	}
	this.show = function(cR, colors, id) {
		0 <= (aAI = id) && cr.bf.a1X(0) && cr.cs.lK(0, id), cR = (cR = (cR = (cR = (cR = (cR = (cR = (cR = (cR = (cR = (cR = (cR = cR.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			aEr = colors, (aMi = document.createElement("div")).style.position = "fixed", aMi.style.top = "0", aMi.style.left = "0", aMi.style.width = "100%", aMi.style.height = "100%", aMi.style.backgroundColor = bK.color.aCf(aEr[0][0], aEr[0][
				1], aEr[0][2], .6), aMi.style.zIndex = "6", aMi.onclick = function(k) {
				k.target === aMi && aMm()
			},
			function(cR) {
				var jw, aMn = document.createElement("div");
				aMn.style.position = "absolute", aMn.style.display = "flex", aMn.style.flexDirection = "column", aMn.style.top = "50%", aMn.style.left = "50%", aMn.style.backgroundColor = aMo(2), jw = bx.by.i2() ? bK.en.a9x(aD.min) : bK.en.jx(
				.4);
				jw = Math.max(jw, 200), aMn.style.width = bK.en.ju(jw), aMn.style.height = bK.en.ju(jw), aMn.style.transform = "translate(-50%, -50%)",
					function(aMn, jw) {
						var aMs = document.createElement("div");
						aMs.style.flex = "0 0 10%", aMs.style.overflow = "hidden", aMs.style.backgroundColor = aMo(1), aMs.style.color = aMt(1, 7), aMs.style.font = bK.en.i3(1, .05 * jw), aMs.style.display = "flex", aMs.style.alignItems =
							"center", aMs.style.justifyContent = "center", aMs.innerHTML = L(183), aMn.appendChild(aMs)
					}(aMn, jw),
					function(aMn, cR, jw) {
						var aMu = document.createElement("div");
						aMu.style.flex = "0 0 70%", aMu.style.overflowY = "auto", aMu.style.overflowX = "hidden", aMu.style.whiteSpace = "pre-wrap", aMu.style.wordWrap = "break-word", aMu.style.padding = bK.en.ju(.02 * jw), aMu.style
							.backgroundColor = aMo(2), aMu.style.color = aMt(2, 8), aMu.style.font = bK.en.i3(0, .07 * jw), aMu.innerHTML = cR, aMu.innerHTML = "<style>a { color: inherit; }</style>" + aMu.innerHTML, aMn.appendChild(aMu)
					}(aMn, cR, jw),
					function(aMn, jw) {
						var cO = document.createElement("div"),
							aMv = (cO.style.display = "flex", cO.style.flexDirection = "row", cO.style.justifyContent = "space-between", cO.style.alignItems = "stretch", cO.style.backgroundColor = aMo(3), cO.style.flex = "1", cO.style.padding =
								bK.en.ju(.01 * jw), cO.style.gap = bK.en.ju(.01 * jw), document.createElement("div")),
							aMw = (aMv.style.flex = "0 0 60%", aMv.style.height = "100%", new ei(L(128, 0, 0, 1), function() {
								aMm()
							}, aMo(4), !1)),
							aMw = (aMw.button.style.width = "100%", aMw.button.style.height = "100%", aMw.button.style.color = aMt(4, 9), aMw.button.style.font = bK.en.i3(1, .05 * jw), aMv.appendChild(aMw.button), document.createElement("div")),
							aMy = (aMw.style.flex = "0 0 15%", aMw.style.height = "100%", aMw.style.backgroundColor = aMo(5), document.createElement("div")),
							aMz = (aMy.style.flex = "1", aMy.style.height = "100%", new ei(L(184), function(k) {
								return bK.en.a8Q(k), aAI < 0 || cr.bf.a1X(0) && (cr.cs.lK(1, aAI), aAI = -1), !0
							}, aMo(6), !1));
						aMz.button.style.width = "100%", aMz.button.style.height = "100%", aMz.button.style.color = aMt(6, 10), aMz.button.style.font = bK.en.i3(1, .035 * jw), aMy.appendChild(aMz.button), cO.appendChild(aMv), cO.appendChild(aMw),
							cO.appendChild(aMy), aMn.appendChild(cO)
					}(aMn, jw), aMi.appendChild(aMn)
			}(cR), document.body.appendChild(aMi)
	}
}

function a6C() {
	var eg, a7o, yy, aN2 = -1;
	this.show = function() {
		eg.show(), this.resize(), aN2 = bn.buffer.data[125].value
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(185), [new ei("⬅️ " + L(2), function() {
		aN2 !== bn.buffer.data[125].value ? h.bf.a29() : h.a6R(13)
	})]), a7o = new ys(eg.em, ((yy = []).push(function() {
		var hn = new z1,
			a7t = (hn.z2(L(186)), hn.a8K(L(187)), new ei(L(69), function() {
				bn.ih.pT(130, 0), h.bf.a29()
			}, 0, 0, 1)),
			a8S = new a0w(bn.buffer.data[126], 0, function() {
				a7t.button.click()
			});
		return hn.z5(a8S), a8S.k.placeholder = "a,b,c", a8S.k.style.marginTop = "0.5em", hn.z5(new a7x([a7t.button])), hn
	}()), yy.push(function() {
		var hn = new z1,
			a7t = new ei(L(69), function() {
				bn.ih.pT(130, 1), h.bf.a29()
			}, 0, 0, 1),
			a7u = new a0w(bn.buffer.data[129], 1, function() {
				a7u.k.focus()
			}),
			a7v = new a0w(bn.buffer.data[128], 1, function() {
				a7t.button.click()
			});
		return hn.z2(L(67)), hn.z5(a7v), a7v.k.style.marginBottom = "0.5em", hn.z2(L(68)), hn.z5(a7u), hn.z5(new a7x([a7t.button])), hn
	}()), yy.push(function() {
		var hn = new z1;
		return hn.z2(L(188)), bn.buffer.data[125].c3 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], hn.z3(new z4(bn.buffer.data[125])), hn
	}()), yy.push(function() {
		var hn = new z1;
		return hn.z2(L(189)), hn.z5(new xX(bn.buffer.data[127], L(190))), hn
	}()), yy))
}

function a6G() {
	var yo, yp, aN6, yy;

	function yr() {
		aIZ.aV(), h.yw()[19] = null, h.ej()
	}

	function aNF() {
		aNK(), aNI()
	}

	function aNK() {
		aN6.aY.lastChild && h.removeChild(aN6.aY, aN6.aY.lastChild)
	}

	function aNI() {
		var aNL = l.aNM(d4.data);
		d4.data.canvas = l.aNN(aNL, d4.data.mapSeed).aL, aNJ()
	}

	function aNJ() {
		var pt = d4.data.canvas;
		pt.style.width = "100%", aN6.aY.appendChild(pt)
	}
	this.aNO = function(pt) {
		d4.data.canvas && aNK(), d4.data.canvas = pt, aNJ()
	}, this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(191), [new ei("⬅️ " + L(2), yr)]), 2 === d4.data.mapType && aIZ.c(), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(192), L(193), L(194)],
			value: d4.data.mapType
		}, function(cW) {
			2 === (d4.data.mapType = cW) ? (aIZ.c(), d4.data.canvas = null) : (d4.data.passableWater = d4.data.passableMountains = 1, aIZ.aV()), h.gQ(20)
		})), 2 <= d4.data.mapType && (hn.z5(new z6), hn.z5(new xX({
			value: d4.data.passableWater
		}, L(195), function(value) {
			d4.data.passableWater = value
		})), hn.z5(new xX({
			value: d4.data.passableMountains
		}, L(196), function(value) {
			d4.data.passableMountains = value
		})));
		yy.push(hn)
	}(yy = []), function(yy) {
		if (0 === d4.data.mapType) {
			for (var hn = new z1, c3 = (hn.z2(L(191)), []), aW = 0; aW < l.nK.aND.length; aW++) c3.push(l.nK.nL[l.nK.aND[aW]].name);
			hn.z3(new z4({
				c3: c3,
				value: d4.data.mapProceduralIndex
			}, function(cW) {
				d4.data.mapProceduralIndex = cW, aNF()
			})), yy.push(hn)
		}
	}(yy), function(yy) {
		if (1 === d4.data.mapType) {
			for (var hn = new z1, c3 = (hn.z2(L(191)), []), aW = 0; aW < l.nK.aNG.length; aW++) c3.push(l.nK.nL[l.nK.aNG[aW]].name);
			hn.z3(new z4({
				c3: c3,
				value: d4.data.mapRealisticIndex
			}, function(cW) {
				d4.data.mapRealisticIndex = cW, aNF()
			})), yy.push(hn)
		}
	}(yy), function(yy) {
		var hn;
		2 === d4.data.mapType && ((hn = new z1).z2(L(197)), hn.z5(new a0w(bn.buffer.data[162], 1)), hn.z2(L(198), "0.8em"), hn.z5(new a7x([new ei(L(199), function() {
			return aIZ.aNH(), !0
		}).button])), yy.push(hn))
	}(yy), function(yy) {
		var hn, a8S;
		2 === d4.data.mapType && ((hn = new z1).z2(L(200)), a8S = new a0w({
			cW: -1,
			value: d4.data.mapName
		}, 0, 0, function(k) {
			d4.data.mapName = k.target.value = k.target.value.slice(0, 20)
		}), hn.z5(a8S), yy.push(hn))
	}(yy), function(yy) {
		var hn, a8S, a7t;
		0 === d4.data.mapType && ((hn = new z1).z2("Seed"), a8S = new a0w({
			cW: -1,
			value: d4.data.mapSeed
		}, 1, 0, function(k) {
			k = Math.abs(Math.floor(k.target.value)) % 16384;
			d4.data.mapSeed !== k && (d4.data.mapSeed = k, aNF())
		}), a7t = new ei(L(201), function(k) {
			var a0Z = Math.floor(16384 * Math.random());
			if (d4.data.mapSeed !== a0Z) return a8S.k.value = d4.data.mapSeed = a0Z, aNF(), !0
		}), hn.z5(a8S), hn.z5(new a7x([a7t.button])), yy.push(hn))
	}(yy), function(yy) {
		(aN6 = new z1).z2(L(202)), 2 !== d4.data.mapType ? aNI() : d4.data.canvas && aNJ();
		yy.push(aN6)
	}(yy), yy))
}

function a6E() {
	var eg, a7o, yy;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(203), [new ei("⬅️ " + L(2), function() {
		h.ej()
	})]), a7o = new ys(eg.em, ((yy = []).push(function() {
		function aNV() {
			aNW.button.textContent = L(207), aNS.k.readOnly = !1, aNU.k.readOnly = !1, aNX.tZ(1), aNX.button.style.color = aB.i8
		}
		var hn = new z1,
			aNR = (hn.aNQ(cr.bf.a2C("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", hn.z2(L(204)), new a0w({
				value: bn.buffer.data[105].value,
				cW: -1
			})),
			aNS = (aNR.k.readOnly = !0, hn.z5(aNR), hn.z2(L(205), "0.8em"), new a0w(bn.buffer.data[148], 0, void 0, function(k) {
				aNT(bn.buffer.data[149].value, k.target.value)
			})),
			aNU = (hn.z5(aNS), hn.z2(L(206), "0.8em"), new a0w(bn.buffer.data[149], 1, void 0, function(k) {
				aNT(k.target.value, bn.buffer.data[148].value)
			})),
			aNW = (hn.z5(aNU), new ei(L(207), function(k) {
				return k.textContent === L(207) ? (k.textContent = L(208), aNS.k.readOnly = !0, aNU.k.readOnly = !0, aNX.tZ(0), aNX.button.style.color = aB.tY, bn.ih.pT(149, aNU.k.value), aNT(bn.buffer.data[149].value, bn
					.buffer.data[148].value)) : aNV(), !0
			})),
			aNX = (hn.z5(new a7x([aNW.button])), new ei(L(179), function(k) {
				return aNS.k.readOnly && cr.bf.a1X(0) && (bK.en.a8Q(k), aNV(), cr.rq.aKg({
					action: 0,
					bC: bn.buffer.data[148].value,
					value: parseInt(bn.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			aNY = hn.a8K(),
			aNT = (hn.a8K(L(209)).style.fontWeight = "bold", function(hB, ak) {
				aNY.innerHTML = h.bf.a2G(hB, bn.buffer.data[105].value, ak)
			});
		return hn.z5(new a7x([aNX.button])), aNT(bn.buffer.data[149].value, bn.buffer.data[148].value), hn
	}()), yy))
}

function a6H() {
	var yo, yp, yq, ch;

	function yr() {
		yu(), h.yw()[19] = null, h.ej()
	}

	function aNZ() {
		yu(), h.gQ(21)
	}

	function yu() {
		1 === d4.data.gameMode ? d4.pD.aNa() : 0 === d4.data.gameMode && 1 === d4.data.colorsType && bK.nU.hJ(yq.yx(), d4.data.colorsData, 262143)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, ch = [new ei("⬅️ " + L(2), yr)], 1 === d4.data.gameMode && ch.push(new ei(L(210), aNZ, 1, 1)), yo = new ek(L(211), ch), yp = new ys(yo.em, (ch = [], 0 === d4.data.gameMode ? (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(201), L(39)],
			value: d4.data.colorsType
		}, function(cW) {
			yu(), d4.data.colorsType = cW, 1 !== d4.data.colorsType || d4.data.colorsData && d4.data.colorsData.length === d4.jW || (d4.data.colorsData = new Uint32Array(d4.jW)), h.gQ(21)
		})), yy.push(hn)
	}(ch), 1 === d4.data.colorsType && function(yy) {
		var hn = new z1;
		hn.z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.colorsData, 1)), hn.z5(yq), yy.push(hn)
	}(ch)) : (d4.pD.aNa(), ch.push(function() {
		var hn = new z1;
		hn.z2(L(130));
		for (var aW = 0; aW < jE.vc.length; aW++) {
			var cy = (aW + 1) % jE.vc.length,
				k = hn.aNQ((0 == cy ? "" : "Team ") + jE.vc[cy]);
			aW && (k.style.marginTop = "0.5em"), hn.z5(new a0w({
				cW: -1,
				value: d4.data.teamPlayerCount[cy]
			}, 1, 0, function(k) {
				yo.eo[1].tZ(0);
				var playerCount = eO.h2(Math.floor(k.target.value), 0, 512);
				k.target.value = playerCount, d4.data.teamPlayerCount[k.target.aNd] = playerCount
			})).k.aNd = cy
		}
		return hn
	}()), function(yy) {
		for (var hn = new z1, c3 = (hn.z2(L(212)), []), aW = 0; aW < jE.vc.length; aW++) {
			var cy = (aW + 1) % jE.vc.length;
			c3.push(jE.vc[cy])
		}
		d4.data.colorsData || (d4.data.colorsData = new Uint32Array(1));
		hn.z3(new z4({
			c3: c3,
			value: (d4.data.colorsData[0] % 16 + jE.vc.length - 1) % jE.vc.length
		}, function(cW) {
			var cW = (cW + 1) % jE.vc.length,
				nr = jE.aNe[cW],
				nr = (nr[0] >> 2 << 12) + (nr[1] >> 2 << 6) + (nr[2] >> 2);
			d4.data.colorsData[0] = nr - (15 & nr) + cW
		})), yy.push(hn)
	}(ch)), ch))
}

function bv() {
	var aNf = [],
		aNg = [],
		aNh = 0;

	function aNi(e7, aEB, aEF, aNl) {
		var e4 = e7.length;
		if (0 === e4) return "";
		var ak = "@" + e7[0];
		if (1 === e4) return ak + aEB + aNl;
		for (var aW = 1; aW < e4 - 1; aW++) ak += ", @" + e7[aW];
		return ak + " and @" + e7[e4 - 1] + aEF + aNl
	}
	this.c = function() {
		var ak = aNi(aNg, " is", " are", " in the lobby.");
		ak.length && an.message.go({
			id: 7,
			af: ak
		}), aNf = [], aNg = [], aNh = 0
	}, this.aNj = function(aNk) {
		return an.bd !== aNk && (aNk = b9.bA.bB(aNk, 5), !!bn.ik.ay(aNk)) && (aNg.push(aNk), !0)
	}, this.join = function(player) {
		an.bd !== player.bC && (player = b9.bA.bB(player.bC, 5), bn.ik.ay(player)) && aNf.push(player)
	}, this.ge = function() {
		var aEB, aEF;
		++aNh < 3 || (aNh = 0, aEB = aNi(aNg, "", "", " entered the lobby!"), (aEB = (aEF = aNi(aNf, "", "", " joined a game!")).length ? aEB.length ? aEB + " " + aEF : aEF : aEB).length && an.message.go({
			id: 7,
			af: aEB
		}), aNf = [], aNg = [])
	}
}

function a6J() {
	var yo, yp, yq;

	function yr() {
		yu(), 3 !== d4.data.botDifficultyType || bK.nU.h3(d4.data.botDifficultyData) || (d4.data.botDifficultyType = 0), 3 !== d4.data.botDifficultyType && (d4.data.botDifficultyData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		3 === d4.data.botDifficultyType && bK.nU.hJ(yq.yx(), d4.data.botDifficultyData, k8.zH.length - 1)
	}

	function aNm(yy, cW) {
		var hn = new z1,
			value = (hn.z2(cW < 0 ? L(213) : L(124) + " " + jE.vc[cW % 9]), 0 <= cW && (hn.aNQ(L(130) + ": " + d4.data.teamPlayerCount[cW]).style.marginBottom = "1em"), cW < 0 ? d4.data.botDifficultyValue : d4.data.botDifficultyTeam[cW]);
		hn.z3(new z4({
			c3: k8.zH,
			value: value
		}, function(cy) {
			cW < 0 ? d4.data.botDifficultyValue = cy : d4.data.botDifficultyTeam[cW] = cy
		})), yy.push(hn)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(213), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, function() {
		var yy = [];
		if (function(yy) {
				var hn = new z1,
					c3 = (hn.z2(L(36)), [L(56), L(214), L(215), L(39)]),
					value = d4.data.botDifficultyType;
				0 === d4.data.gameMode && (value = Math.min(value, 2), c3.splice(2, 1));
				hn.z3(new z4({
					c3: c3,
					value: value
				}, function(cW) {
					yu(), d4.data.botDifficultyType = cW, 0 === d4.data.gameMode && 2 === cW && (d4.data.botDifficultyType = 3), 3 !== d4.data.botDifficultyType || d4.data.botDifficultyData || (d4.data.botDifficultyData =
						new Uint8Array(d4.jW)), 2 !== d4.data.botDifficultyType || d4.data.botDifficultyTeam || (d4.data.botDifficultyTeam = new Uint8Array(9)), h.gQ(25)
				})), yy.push(hn)
			}(yy), 0 === d4.data.botDifficultyType) aNm(yy, -1);
		else if (2 === d4.data.botDifficultyType)
			for (var aW = 0; aW < d4.data.teamPlayerCount.length; aW++) d4.data.teamPlayerCount[aW] && aNm(yy, aW);
		else 3 === d4.data.botDifficultyType && ! function(yy) {
			var hn = new z1;
			hn.z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.botDifficultyData, 8)), hn.z5(yq), yy.push(hn)
		}(yy);
		return yy
	}())
}

function aIn() {
	this.data = new a4u;
	var aNn = (new aNo).L84,
		aNp = (this.aJo = aNn, !(this.a8J = "en"));
	this.c = function() {
		var ak, e7;
		aNp = !1, ("en" === (ak = bn.buffer.data[12].value).split("-")[0].toLowerCase() ? (lY.aJo = aNn, lY.a8J = ak, 1) : bn.buffer.data[12].value === bn.buffer.data[145].value && 0 < bn.buffer.data[146].value && (ak = bn.buffer.data[146].value,
			(e7 = bn.ep.aNu(ak, !1)).length === ak) && !!bK.nU.hI(e7) && function(e7) {
			for (var e4 = e7.length, aF = 0; aF < e4; aF++) e7[aF] = e7[aF].replace("&#39;", "'");
			var aNw = bn.ep.aNu(e4, !0);
			if (e4 !== aNw.length) return !1;
			if (!bK.nU.hI(aNw)) return !1;
			for (var me = aNn.length, aNx = new Array(me), aNy = me === e4, hD = Math.min(e4, me), aW = 0; aW < me; aW++)
				if (aNx[aW] = aNn[aW], aW < e4 && aNw[aW] === aNx[aW]) aNx[aW] = e7[aW];
				else {
					aNy = !1;
					for (var eN = 0; eN < hD; eN++)
						if (aNw[eN] === aNx[aW]) {
							aNx[aW] = e7[eN];
							break
						}
				} return lY.aJo = aNx, lY.a8J = bn.buffer.data[12].value, aNy
		}(e7)) || (aNp = !0)
	}, this.aJQ = function() {
		jE.o3(), k8.o3(), fO.o3(), ob.o3(), a9.c(), aIg = new a12
	}, this.aJp = function() {
		return this.aJo === aNn || !aNn.length
	}, this.a31 = function() {
		var aNz;
		return !!aNp && (aNp = !1, 0 !== aNn.length) && (aNz = bn.buffer.data[12].value, cr.cs.lL(0, aNz.slice(0, 20)), !0)
	}, this.aO0 = function(e7) {
		e7.length !== aNn.length ? 8 === h.l2 && h.p7().a34(30, 0, 1) : (this.aJo = e7, this.a8J = bn.buffer.data[12].value, bn.ih.pT(145, this.a8J), bn.ih.pT(146, e7.length), bn.ep.aO1(e7, !1), bn.ep.aO1(aNn, !0), 8 === h.l2 ? h.p7().a34(30) :
			0 === bz.f() && 5 === h.l2 && h.bf.a28())
	}, this.lZ = function() {
		var ht, e7 = navigator.languages;
		return e7 && e7.length ? (ht = Math.max(lY.data.a50(e7[0]), 0), 1 === e7.length ? [ht, ht] : [ht, Math.max(lY.data.a50(e7[1]), 0)]) : [0, 0]
	}
}

function vu() {
	eX.kK(), oD.kK(), mY.mh(), cr.bf.kK()
}

function vv() {
	zo.kK(), aA4.kK(), aIT.kK(), k5.kK(), aIX.kK(), a6l.kK(), kN.kK(), d5.bf.kK(), mK.xA(), fX.kK(), rU.kK(), aId.kK(), oD.kK(), oD.a4h(), mY.kK(), ip.kK(), mS.kK(), fS.kK(), aIb.aAO(), eX.kK(), aIY.kK(), fZ.kK(), fU.kK(), ob.kK(), kk.kK(), cr.bf
	.kK(), cr.rl.kK(), h.kK(), c0.aF6.kK(), uY.kK(), n.kK()
}

function vx() {
	a0X.kK(), fP.kK(), oC.kK(), a9L.kK(), fM.kK(), aIa.kK(), aIb.kK(), aGB.aO2()
}

function vw() {
	fX.iE(!1), fS.iE(), mY.iE(!1), mS.iE(), fZ.iE(), fU.iE(), oD.iE(!1), kk.wY()
}

function vt() {
	oD.iE(!1) && (n.a5 = !0), cr.bf.kK()
}

function aJI() {
	this.a9e = 0, this.a9f = 0, this.a9a = 0, this.a9b = 0, this.a9c = 0, this.a9d = 0, this.xS = [0, 0, 0, 0], this.aO3 = function() {
		this.a9e = fY.iu(), this.a9f = fY.iv(), this.a9a = -this.a9e, this.a9b = -this.a9f, this.a9c = aD.aE / iy, this.a9d = aD.aF / iy, this.xS[0] = Math.floor(this.a9a), this.xS[1] = Math.floor(this.a9b), this.xS[2] = Math.floor(this.xS[0] +
			this.a9c + 1), this.xS[3] = Math.floor(this.xS[1] + this.a9d + 1), iF.xN = !0
	}
}

function aO4(aJr) {
	var sC = document.createElement("div"),
		aKn = document.createElement("div"),
		aO5 = [];

	function tc() {
		b1.b2() || (this.style.backgroundColor = bK.color.tk(aB.i6, 50))
	}

	function td() {
		this.style.backgroundColor = aB.i6
	}
	this.pT = function(aO7, gj) {
			aO5[2].textContent = aO7 + 1 + " / " + gj
		}, this.show = function(aX) {
			aX = an.ao.bY(aX, an.ao.bZ(aX)), aKn.appendChild(an.bh.transform(aX)), document.body.appendChild(sC)
		}, this.resize = function() {
			var aF = bK.en.jx(.03, .5);
			sC.style.width = 10 * aF + "px", sC.style.font = bK.en.i3(1, .75 * aF), bK.en.r3(sC, 4), aKn.style.top = aF + "px", aKn.style.font = bK.en.i3(0, .55 * aF), bK.en.r3(aKn, 2), sC.style.height = aF + aKn.offsetHeight + "px";
			for (var aW = 0; aW < 3; aW++) bK.en.r3(aO5[aW], 6), aO5[[0, 1, 3][aW]].style.width = 2 * aF + "px";
			for (aW = 0; aW < 4; aW++) aO5[aW].style.height = aF + "px", bK.en.r3(aO5[aW], 2);
			aO5[2].style.width = 4 * aF + "px", aO5[1].style.left = 2 * aF + "px", aO5[2].style.left = 4 * aF + "px", aO5[3].style.left = 8 * aF + "px"
		}, this.aV = function() {
			for (var aW = 0; aW < 4; aW++) aO5[aW].onclick = null, aO5[aW].onmouseover = null, aO5[aW].onmouseout = null;
			h.removeChild(document.body, sC), sC = aKn = aO5 = null
		}, sC.style.position = "absolute", sC.style.color = aB.i8, sC.style.zIndex = "3", sC.style.right = "0", sC.style.top = "0", aKn.style.position = "absolute", aKn.style.height = "auto", aKn.style.color = aB.i8, aKn.style.backgroundColor = aB
		.i6, aKn.style.left = "0", aKn.style.width = "100%", aKn.style.overflowWrap = "break-word", sC.appendChild(aKn);
	for (var aW = 0; aW < 4; aW++) aO5[aW] = document.createElement("div"), aO5[aW].style.position = "absolute", aO5[aW].style.backgroundColor = aB.i6, aO5[aW].style.color = aB.i8, aO5[aW].style.top = "0", aO5[aW].style.display = "flex", aO5[aW]
		.style.justifyContent = "center", aO5[aW].style.alignItems = "center", aO5[aW].style.userSelect = "none", aO5[aW].style.outline = "none", aO5[aW].style.font = "inherit", 2 !== (aO5[aW].aO6 = aW) && (aO5[aW].onclick = aJr, aO5[aW]
			.onmouseover = tc, aO5[aW].onmouseout = td), sC.appendChild(aO5[aW]);
	aO5[0].textContent = "◀", aO5[1].textContent = "▶", aO5[3].textContent = "✖"
}

function ie() {
	this.hu = function(cW, hr) {
		return Number(this.hv(cW, hr))
	}, this.hv = function(cW, hr) {
		var hB = null;
		return 0 === bx.id ? bx.a98 && (hB = bx.a98.getItem((hr ? "v" : "d") + cW)) : 1 === bx.id ? hB = bx.a99.loadString((hr ? 1e3 : 2e3) + cW) : 2 === bx.id && (hB = bx.a9A[(hr ? "v" : "d") + cW]), hB && 0 !== hB.length ? hB : null
	}, this.aNu = function(e4, aO8) {
		var e7 = [],
			aO9 = aO8 ? "e" : "l";
		if (0 === bx.id) {
			if (bx.a98)
				for (aW = 0; aW < e4; aW++) e7.push(bx.a98.getItem(aO9 + aW))
		} else if (1 === bx.id)
			for (var aOA = aO8 ? 5e3 : 3e3, aW = 0; aW < e4; aW++) e7.push(bx.a99.loadString(aOA + aW));
		else if (2 === bx.id)
			for (aW = 0; aW < e4; aW++) e7.push(bx.a9A[aO9 + aW]);
		return e7
	}, this.save = function(cW, value, hr) {
		var aOB = (hr ? "v" : "d") + cW;
		if (0 === bx.id) {
			if (bx.a98 && bn.buffer.data[140].value) try {
				bx.a98.setItem(aOB, value)
			} catch (k) {
				console.log(k)
			}
		} else 1 === bx.id ? bx.a99.saveString((hr ? 1e3 : 2e3) + cW, value) : 2 === bx.id && (bx.a9A[aOB] = value, bx.a9B.postMessage(aOB + " " + value))
	}, this.aO1 = function(e7, aO8) {
		var e4 = e7.length,
			aO9 = aO8 ? "e" : "l";
		if (0 === bx.id) {
			if (bx.a98 && bn.buffer.data[140].value) try {
				for (aW = 0; aW < e4; aW++) bx.a98.setItem(aO9 + aW, e7[aW])
			} catch (k) {
				console.log(k)
			}
		} else if (1 === bx.id)
			for (var aOA = aO8 ? 5e3 : 3e3, aW = 0; aW < e4; aW++) bx.a99.saveString(aOA + aW, e7[aW]);
		else if (2 === bx.id)
			for (aW = 0; aW < e4; aW++) bx.a9A[aO9 + aW] = e7[aW], bx.a9B.postMessage(aO9 + aW + " " + e7[aW])
	}
}

function aOC() {
	var aJs = 0,
		aOD = null;
	this.c = function() {
		null === aOD && (aOD = new Uint16Array(2 * d5.bf.d7)), aJs = 0
	}, this.dd = function(aOE, dc) {
		var aOF = aOD;
		aOF[aJs++] = aOE, aOF[aJs++] = dc
	}, this.rd = function(player, rc) {
		for (var aOF = aOD, e4 = aJs, aW = 0; aW < e4; aW += 2)
			if (aOF[aW] === rc && d5.ao.dX(aOF[aW + 1]) && player === d5.bf.dn[dF.dG[2]] >> 3) return !0;
		return !1
	}, this.aKQ = function(aOG) {
		var dE = d5.bf.db[aOG];
		if (!(dE < 64)) {
			for (var rc = d5.bf.dU[aOG], aOF = aOD, e4 = aJs, aW = e4 - 2; 0 <= aW; aW -= 2)
				if (aOF[aW] === rc) {
					{
						aOL = void 0;
						var aOL = aOF[aW + 1];
						d5.ao.dX(aOL) && d5.dc.aKP(dF.dG[2])
					}
					aOF[aW] = aOF[e4 - 2], aOF[aW + 1] = aOF[e4 - 1], e4 -= 2
				} aJs = e4
		}
	}, this.aOI = function(aOJ, aOK) {
		for (var aOL = d5.bf.dU[aOJ], rc = -1, aOF = aOD, e4 = aJs, aW = 1; aW < e4; aW += 2)
			if (aOF[aW] === aOL) {
				rc = aOF[aW - 1];
				break
			} if (-1 === rc) return !1;
		if (!d5.ao.dX(rc)) return !1;
		var aOG = dF.dG[2],
			dx = d5.bf.dy[aOG];
		if (aOK === dx[dx.length - 1]) d5.bf.dy[aOJ] = d5.e8.aOM(d5.bf.dy[aOJ], d5.e8.e9(dx));
		else {
			var aON = d5.ao.aOO(dx, aOK);
			if (-1 === aON) return !1;
			var aOP = d5.bf.e0[aOG];
			aON === aOP ? (aOG = dI.dg(d5.bf.dh[aOG]), d5.bf.dy[aOJ] = d5.e8.aOR(d5.bf.dy[aOJ], dx, aON, aOK, dI.dt(dx[aON], aOK) > dI.dt(dx[aON], aOG))) : d5.bf.dy[aOJ] = d5.e8.aOR(d5.bf.dy[aOJ], dx, aON, aOK, aOP < aON)
		}
		return !0
	}, this.aKP = function(dR) {
		var dx, me = d5.bf,
			dE = me.db[dR];
		return dE % 64 != 5 && (dx = me.dy[dR], me.hd[dR] = 65535 - me.hd[dR], me.e0[dR] = dx.length - me.e0[dR] - 2, me.dy[dR] = d5.e8.e9(dx), me.db[dR] = dE - dE % 64 + 5, !0)
	}
}

function aIo() {
	var aOT, aOU, aOV;

	function aOX(a5R) {
		for (var aW = aOT - 1; 0 <= aW; aW--) 0 === aOV[aOU[aW]] && dA.j8[aOU[aW]] >= a5R && aFw(aOU[aW])
	}

	function aOW(player) {
		var m6;
		64 === aOV[player] ? aOV[player] = 6 : (m6 = dA.j8[player], aOV[player] = m6 < 1e3 ? 3 : m6 < 1e4 ? 2 : m6 < 6e4 ? 1 : 0)
	}
	this.c = function() {
		aOT = 0, aOU = new Uint16Array(d4.jW), aOV = new Uint8Array(d4.jW)
	}, this.kK = function() {
		for (var aW = aOT - 1; 0 <= aW; aW--) 64 === aOV[aOU[aW]] ? aOW(aOU[aW]) : 0 == aOV[aOU[aW]]-- && (aOW(aOU[aW]), aFw(aOU[aW]));
		16e4 <= dA.j8[mp[0]] && (aOX(16e4), 3e5 <= dA.j8[mp[0]]) && aOX(3e5), bK.dl.aHs(d4.jL) && (ob.oy[7] = Math.max(dA.j8[d4.jL], ob.oy[7]))
	}, this.aG7 = function(player) {
		for (var ba, aW = aOT - 1; 0 <= aW; aW--)
			if (player === aOU[aW]) {
				for (aOT--, ba = aW; ba < aOT; ba++) aOU[ba] = aOU[ba + 1];
				return
			}
	}, this.a6m = function(player, aOZ) {
		for (var aW = aOT - 1; 0 <= aW; aW--)
			if (player === aOU[aW]) return;
		aOU[aOT++] = player, aOV[player] = aOZ ? 2 : 64
	}
}

function a65() {
	var eg, kx, ky, l0;

	function aOa(id) {
		0 !== bx.id || bn.buffer.data[140].value ? 0 === id ? h.gQ(8, 1, new l3(16)) : h.gQ(2) : h.bf.a2B(h.l2, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bx.by.setState(12), eg.show(), this.resize(), this.kK()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), kx.resize()
	}, this.kK = function() {
		8 === bz.f() && (2 <= ob.aEp ? ky[2].tX === aB.th && ky[2].tZ(0) : ky[2].tX !== aB.th && ky[2].tZ(aB.th), !d4.g2 && fT.iQ(d4.jL) ? ky[1].tX === aB.th && ky[1].tZ(0) : ky[1].tX !== aB.th && ky[1].tZ(aB.th), !d4.g2 && fU.a00(d4.jL) ? ky[0]
			.tX === aB.th && ky[0].tZ(0) : ky[0].tX !== aB.th && ky[0].tZ(aB.th))
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, ky = [new ei(L(216), function() {
		aOa(0)
	}), new ei(L(117), function() {
		h.gQ(16)
	}), new ei(L(8), function() {
		h.gQ(17)
	}), new ei(L(217), function() {
		h.bf.a29()
	}, 0, 0, 1), new ei(L(218), function() {
		h.gQ(3, 1)
	}), new ei(L(203), function() {
		h.gQ(18)
	}), new ei(L(219), function() {
		h.gQ(31)
	}), new ei(L(220), function() {
		h.bf.a26(2)
	}), new ei(L(74), function() {
		aOa(1)
	}), new ei("🔒 " + L(221), function() {
		h.gQ(32)
	}), new ei(L(222), function() {
		var a9z, a9q;
		(a9z = []).push(["Wiki", (a9q = "https://territorial.io/") + "wiki/gold"]), a9z.push(["Team Games", a9q + "log/team"]), a9z.push(["Battle Royale Games", a9q + "log/br"]), a9z.push(["1v1 Games", a9q + "log/1v1"]), a9z.push([
			"Zombie Games", a9q + "log/zombies"
		]), a9z.push(["Transactions", a9q + "log/transactions"]), a9z.push(["Changelog", a9q + "changelog"]), 2 !== bx.id && a9z.push(["Android App", aCM.aCN]), 1 !== bx.id && a9z.push(["iOS App", aCM.aCO]), 0 === bx.id && a9z.push([
			"Patreon", aCM.aOh
		]), a9z.push(["Terms", aCM.aOi]), a9z.push(["Privacy", aCM.aOj]), h.gQ(4, 1, new ec(L(222), bK.en.a9y(a9z), !1, [new ei("⬅️ " + L(2), function() {
			h.gQ(1)
		})]))
	}), new ei(L(223), function() {
		h.gQ(4, 1, new ec(L(223), lT.hr + "<br>" + cr.bf.a2C("/changelog") + "<br><br><lT>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></lT>", !0, [new ei("⬅️ " + L(2),
				function() {
					h.gQ(1)
				})]))
	}), new ei(L(224), function() {
		h.gQ(4, 1, new ec(L(224), L(232) + "<br>" + L(233), !1, [new ei("⬅️ " + L(2), function() {
			h.gQ(1)
		}), new ei(L(234), function() {
			bx.by.aOk(), h.gQ(1)
		})]))
	}), new ei("👁️ " + L(225), function() {
		bx.by.aOe(), h.gQ(4, 1, new ec(L(235), L(236) + " " + cr.bf.a2C("/privacy"), !1, [new ei("⬅️ " + L(2), function() {
			h.gQ(1)
		})]))
	})], l0 = [new ei("⬅️ " + L(2), function() {
		h.bf.a28()
	})], 8 === bz.f() && (ky.unshift(new ei(L(228), function() {
		h.gQ(30)
	})), ky.unshift(new ei(L(229), function() {
		2 <= ob.aEp && (h.i(), fO.g1(), n.a5 = !0)
	}, 0, 1)), ky.unshift(new ei(L(230), function() {
		!d4.g2 && fT.iQ(d4.jL) && (ko.zg.aJj(), h.i(), fT.g0) && fT.g1()
	}, 0, 1)), ky.unshift(new ei(L(231), function() {
		!d4.g2 && fU.a00(d4.jL) && (aId.pQ(2), ko.zg.fv(), h.i(), fT.g0) && fT.g1()
	}, 0, 1))), 1 === bx.id && 5 <= bx.hr && ky.push(new ei(L(226), function() {
		bx.by.aOg()
	})), eg = new ek(L(227), l0), kx = new l1(ky, eg.em)
}

function aIk() {
	this.en = new a9m, this.nU = new gp, this.dl = new aOl, this.bL = new a02, this.cd = new aGD, this.ca = new a5p, this.canvas = new aOm, this.color = new aOn, this.aOo = new aEa, this.c = function() {
		this.en.q5()
	}
}

function rv() {
	this.a2s = function(l4, h4, h5) {
		l7.eH(75), l7.eK(1, 0), l7.eK(6, 21), l7.eK(6, l4), l7.eK(1, +(h4 < 0)), l7.eK(1, +(h5 < 0)), l7.eK(30, Math.abs(h4)), l7.eK(30, Math.abs(h5)), cr.bf.send(0, l7.eG)
	}, this.a2t = function(l4, a2u, a2v) {
		l7.eH(18 + 16 * a2u.length + 30), l7.eK(1, 0), l7.eK(6, 22), l7.eK(6, l4), cr.cs.la(a2u), l7.eK(30, a2v), cr.bf.send(0, l7.eG)
	}, this.a2z = function(l4, a2u, a2v) {
		l7.eH(73), l7.eK(1, 0), l7.eK(6, 28), l7.eK(6, l4), bE.bA.a74(a2u, 5), l7.eK(30, a2v), cr.bf.send(0, l7.eG)
	}, this.a2w = function(a2A, vl) {
		for (var e4 = vl.length, aOp = 0, aW = 0; aW < e4; aW++) aOp += vl[aW].length;
		for (l7.eH(21 + 3 * e4 + 16 * aOp), l7.eK(1, 0), l7.eK(6, 23), l7.eK(3, a2A), l7.eK(4, e4), l7.eK(7, aOp), aW = 0; aW < e4; aW++) l7.eK(3, vl[aW].length), b9.lM.lN(vl[aW]);
		cr.bf.send(0, l7.eG)
	}, this.a2x = function(a2A, h4, h5) {
		l7.eH(52), l7.eK(1, 0), l7.eK(6, 24), l7.eK(3, a2A), l7.eK(1, +(h4 < 0)), l7.eK(1, +(h5 < 0)), l7.eK(20, Math.abs(h4)), l7.eK(20, Math.abs(h5)), cr.bf.send(0, l7.eG)
	}
}

function a69() {
	var eg, a7o, yy;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(237), [new ei("⬅️ " + L(2), function() {
		h.gQ(7, h.x1(7).a1T)
	}), new ei(L(238), function() {
		bn.ih.pT(105, bE.bA.a72(a7o.aOr[0].aOs[0].k.value, 5)), bn.ih.pT(106, bE.bA.a72(a7o.aOr[1].aOs[0].k.value, 15)), h.gQ(8, h.x1(7).a1T, new l3(18))
	})]), a7o = new ys(eg.em, ((yy = []).push(function() {
		var hn = new z1;
		return hn.z2(L(239)), hn.z5(new a0w({
			value: "",
			cW: -1
		})), hn
	}()), yy.push(function() {
		var hn = new z1,
			aOw = (hn.z2(L(240)), new a0w({
				value: "",
				cW: -1
			}));
		return aOw.k.type = "password", hn.z5(aOw), hn.z5(new a7x([new ei(L(241), function(k) {
			return k.textContent === L(241) ? (k.textContent = L(242), aOw.k.type = "text") : (k.textContent = L(241), aOw.k.type = "password"), !0
		}).button])), hn
	}()), yy.push(function() {
		var hn = new z1;
		return hn.z2(L(243)), hn.a8K(L(244)), hn.a8K(L(245)), hn.a8K(L(246)), hn
	}()), yy))
}

function aJ1() {
	var aOx, aOy, aOz;
	this.c = function() {
		aOx =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aOy =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aOz = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aEB = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEF = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aW = aOx.length - 1; 0 <= aW; aW--)
			for (var ba = aEB.length - 1; 0 <= ba; ba--) aOx[aW] = aOx[aW].replace(aEB[ba], aEF[ba]);
		if (__fx.settings.realisticNames) aOx = realisticNames;
	}, this.aP0 = function() {
		var e4 = d4.j6,
			vd = dA.vd,
			vk = dA.vk,
			playerNamesData = d4.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < e4)
			for (var aW = 0; aW < e4; aW++) vd[aW] = vk[aW] = "Player " + kH.kI(1e3);
		else
			for (aW = 0; aW < e4; aW++) vd[aW] = vk[aW] = __fx.nameFilter.filter(playerNamesData[aW])
	}, this.eH = function() {
		if (9 === d4.mr) {
			for (var fn = kH.random(), aP6 = aOz, aP7 = aOy, k1 = k8.k1, e4 = aP6.length, me = d4.data.teamPlayerCount[7], vd = dA.vd, vk = dA.vk, aW = me - 1; aW >= d4.j6; aW--) vd[aW] = vk[aW] = aP6[(aW + fn) % e4];
			for (e4 = aP7.length - 1, aW = me; aW < d4.jW; aW++) vd[aW] = vk[aW] = aP7[k1[aW] ? e4 : aW % e4]
		} else(2 === d4.data.playerNamesType ? function() {
			for (var e4 = d4.jW, vd = dA.vd, vk = dA.vk, playerNamesData = d4.data.playerNamesData, aW = d4.j6; aW < e4; aW++) vd[aW] = vk[aW] = __fx.nameFilter.filter(playerNamesData[aW])
		} : 1 === d4.data.playerNamesType ? function() {
			for (var vd = dA.vd, vk = dA.vk, aW = d4.j6; aW < d4.jW; aW++) vd[aW] = vk[aW] = "Bot " + kH.kI(1e3)
		} : function() {
			for (var aP8 = aOx, e4 = aP8.length, fn = kH.random(), vd = dA.vd, vk = dA.vk, aW = d4.j6; aW < d4.jW; aW++) vd[aW] = vk[aW] = aP8[(aW + fn) % e4]
		})()
	}
}

function aJG() {
	this.aP9 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aPA = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", aB.i8, "rgb(170,170,170)"
	], this.aPB = [aB.i8, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", aB.i8, aB.aC], this.aPC = [aB.aC, aB.i8, aB.i8, aB.i8, aB.aC, aB.aC, aB.aC, aB.aC, aB.i8];
	var aPD = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.a4c = ["rgba(" + aPD[0] + ",", "rgba(" + aPD[1] + ",", "rgba(" + aPD[2] + ",", "rgba(" + aPD[3] + ",", "rgba(" + aPD[4] + ",", "rgba(" + aPD[5] + ",", "rgba(" + aPD[6] + ",", "rgba(" + aPD[7] + ",", "rgba(" + aPD[8] + ",", "rgba(" + aPD[9] +
			","
		], this.a4d = ["rgb(" + aPD[0] + ")", "rgb(" + aPD[1] + ")", "rgb(" + aPD[2] + ")", "rgb(" + aPD[3] + ")", "rgb(" + aPD[4] + ")", "rgb(" + aPD[5] + ")", "rgb(" + aPD[6] + ")", "rgb(" + aPD[7] + ")", "rgb(" + aPD[8] + ")", "rgb(" + aPD[9] +
			")"
		], this.vc = null, this.rF = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aNe = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.rG = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.jF = new Uint8Array(d4.jW), this.y7 = new Uint8Array(d4.jW), this.aAu = new Uint16Array(d4.jW), this.aAv = new Uint16Array(this.rG.length + 1), this.aAw = new Uint16Array(this.rG.length), this
		.o3 = function() {
			this.vc = [L(247), L(248), L(249), L(250), L(251), L(252), L(253), L(254), L(255)]
		}, this.c = function() {
			if (this.jF.fill(0), this.y7.fill(0), this.aPE(), d4.jD) {
				if (9 === d4.mr) {
					for (var jF = jE.jF, aW = d4.data.teamPlayerCount[7] - 1; 0 <= aW; aW--) jF[aW] = 1;
					var e4 = d4.jW;
					for (aW = d4.data.teamPlayerCount[7]; aW < e4; aW++) jF[aW] = 2;
					jE.rG[1] = 7, jE.rG[2] = 8
				} else d4.iC ? function() {
					var aNe = jE.aNe,
						colorsData = d4.data.colorsData;
					if (!d4.data.selectableColor)
						for (var aW = d4.j6 - 1; 0 <= aW; aW--) colorsData[aW] = kH.kI(262144);
					var aPP = 0,
						e3 = 768,
						nr = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = d4.data.teamPlayerCount;
					for (aW = 0; aW < 9; aW++)
						if (teamPlayerCount[aW]) {
							for (var bX = 0, eN = 0; eN < 3; eN++) bX += Math.abs(aNe[aW][eN] - nr[eN]);
							bX < e3 && (aPP = aW, e3 = bX)
						} var aPQ = new Uint16Array(9);
					for (aW = 0; aW < 9; aW++) aPQ[aW] = teamPlayerCount[aW];
					var rG = jE.rG,
						aPR = new Uint8Array(9),
						hD = (rG[0] = 0, 1);
					for (aW = 1; aW < 9; aW++) aPQ[aW] && (aPR[aW] = hD, rG[hD++] = aW);
					var eS = d4.j6,
						jF = jE.jF;
					aPQ[aPP] ? (aPQ[aPP]--, jF[0] = aPR[aPP]) : eS = 0;
					var ag = 0;
					for (aW = eS; aW < d4.aAi; aW++) {
						var cy = rG[ag];
						if (aPQ[cy]) aPQ[cy]--, jF[aW] = aPR[cy];
						else if (aW--, 9 <= ++ag) return console.log("error 325")
					}
				}() : this.kK();
				! function() {
					for (var e4 = d4.jW, aAu = jE.aAu, aAv = jE.aAv, aAw = jE.aAw, jF = jE.jF, rG = jE.rG, aAm = rG.length, buffer = new Array(aAm), aW = 0; aW < aAm; aW++) buffer[aW] = [];
					for (aW = 0; aW < e4; aW++) buffer[rG[jF[aW]]].push(aW);
					for (aW = 1; aW <= aAm; aW++) aAv[aW] = aAv[aW - 1] + buffer[aW - 1].length;
					for (aW = 0; aW < aAm; aW++)
						for (var hD = buffer[aW].length, me = aAv[aW], cy = 0; cy < hD; cy++) aAu[cy + me] = buffer[aW][cy];
					var j6 = d4.j6;
					for (aW = 0; aW < aAm; aW++)
						for (hD = buffer[aW].length, me = aAv[aW], cy = 0; cy < hD; cy++)
							if (aAu[cy + me] >= j6) {
								aAw[aW] = cy;
								break
							}
				}(), ! function() {
					for (var e4 = d4.jW, jF = jE.jF, y7 = jE.y7, rG = jE.rG, aW = 0; aW < e4; aW++) y7[aW] = rG[jF[aW]];
					9 === d4.mr && y7.fill(1, e4 - rU.rV[5])
				}()
			}
		}, this.aPE = function() {
			for (var aW = this.rG.length - 1; 0 <= aW; aW--) this.rG[aW] = aW
		}, this.kK = function() {
			var gt = new Uint8Array(d4.j6),
				gv = new Uint8Array(d4.j6),
				aPJ = new Uint16Array(8),
				aPK = new Uint16Array(this.rG.length);
			this.aPL(gt, gv, aPJ, 1), this.xx(aPJ), this.aPM(aPK, gt, gv), this.aPN(gt, gv, aPK), this.aPO()
		}, this.aPL = function(gt, gv, aPQ, aPS) {
			for (var eN, k, aPT, e4 = this.rG.length - aPS, e7 = new Uint16Array(e4), aNe = this.aNe, colorsData = d4.data.colorsData, aW = d4.j6 - 1; 0 <= aW; aW--) {
				for (eN = e4; aPS <= eN; eN--) e7[eN - 1] = Math.abs(4 * (colorsData[aW] >> 12) - aNe[eN][0]) + Math.abs(4 * (colorsData[aW] >> 6 & 63) - aNe[eN][1]) + Math.abs(4 * (63 & colorsData[aW]) - aNe[eN][2]);
				for (aPT = 768, eN = e4 - 1; 0 <= eN; eN--) e7[k = (eN + aW) % e4] < aPT && (aPT = e7[k], gt[aW] = k);
				for (aPQ[gt[aW]] += 4, aPT = 768, eN = e4 - 1; 0 <= eN; eN--) e7[k = (eN + aW) % e4] < aPT && k !== gt[aW] && (aPT = e7[k], gv[aW] = k);
				aPQ[gv[aW]]++
			}
		}, this.xx = function(aPQ) {
			for (var eN, iL, e4 = this.rG.length - 1, aW = e4; 0 <= aW; aW--) this.rG[aW] = aW;
			for (aW = e4 - 1; 0 <= aW; aW--) aPQ[aW]++;
			for (aW = 1; aW <= e4; aW++) {
				for (iL = 0, eN = 1; eN < e4; eN++) aPQ[eN] > aPQ[iL] && (iL = eN);
				aPQ[iL] = 0, this.rG[aW] = iL + 1
			}
		}, this.aPM = function(aPK, gt, gv) {
			var eN, vm, ag, bX, k, m5, hL, aPU = this.rG.length - 1,
				ti = new Uint16Array(aPU),
				aPV = [],
				aPW = 0,
				vl = [],
				aPX = [];
			loop: for (var aW = 0; aW < d4.j6; aW++)
				if (null !== (vm = bK.bL.vn(dA.vk[aW]))) {
					for (eN = vl.length - 1; 0 <= eN; eN--)
						if (vm === vl[eN]) {
							aPX[eN].push(aW), aPW = Math.max(aPW, aPX[eN].length);
							continue loop
						} vl.push(vm), aPV.push(!1), aPX.push([aW]), aPW = Math.max(aPW, 1)
				}
			for (; 2 < d4.rD && aPW > eO.eP(d4.j6, d4.rD);) d4.rD--, d4.mr--;
			for (eN = vl.length - 1; 0 <= eN; eN--) {
				for (bX = -1, ag = vl.length - 1; 0 <= ag; ag--) !aPV[ag] && (-1 === bX || aPX[ag].length > aPX[bX].length) && (bX = ag);
				for (ag = aPU - 1; 0 <= ag; ag--) ti[ag] = 1;
				for (ag = aPX[bX].length - 1; 0 <= ag; ag--) ti[gt[aPX[bX][ag]]] += 3, ti[gv[aPX[bX][ag]]]++;
				for (aW = aPU - 1; 0 <= aW; aW--) {
					for (k = bX % aPU, ag = aPU - 1; 0 <= ag; ag--) ti[ag] > ti[k] && (k = ag);
					for (m5 = -1, ag = d4.rD; 0 < ag; ag--)
						if (this.rG[ag] === k + 1) {
							m5 = ag;
							break
						} if (ti[k] = 0, -1 !== m5) {
						for (hL = 0, ag = d4.rD; 0 < ag; ag--) aPK[m5] > aPK[ag] && hL++;
						if (hL !== d4.rD - 1) {
							for (ag = aPX[bX].length - 1; 0 <= ag; ag--) aPK[m5]++, this.jF[aPX[bX][ag]] = m5;
							break
						}
					}
				}
				aPV[bX] = !0
			}
		}, this.aPN = function(gt, gv, aPK) {
			for (var aW, aI3, e4 = this.rG.length - 1, border = eO.eP(d4.j6, d4.rD), aPY = (0 < d4.j6 % d4.rD && border++, new Uint8Array(1 + e4)), eN = e4; 1 <= eN; eN--) aPY[this.rG[eN]] = eN;
			for (aW = 0; aW < d4.j6; aW++) aI3 = aPY[gt[aW] + 1], 0 === this.jF[aW] && aI3 <= d4.rD && aPK[aI3] < border && (aPK[aI3]++, this.jF[aW] = aI3);
			for (aW = 0; aW < d4.j6; aW++) aI3 = aPY[gv[aW] + 1], 0 === this.jF[aW] && aI3 <= d4.rD && aPK[aI3] < border && (aPK[aI3]++, this.jF[aW] = aI3);
			for (eN = d4.rD; 1 <= eN; eN--)
				for (aW = d4.j6 - 1; 0 <= aW && !(aPK[eN] >= border); aW--) 0 === this.jF[aW] && (aPK[eN]++, this.jF[aW] = eN)
		}, this.aPO = function() {
			if (d4.rD < 8) d4.rD++, d4.mr++, d4.aAn = 1;
			else
				for (var aW = d4.j6; aW < d4.jW; aW++) this.jF[aW] = 1 + aW % d4.rD
		}
}

function aOn() {
	this.ns = function(hB) {
		return [hB >> 12 & 63, hB >> 6 & 63, 63 & hB]
	}, this.aPZ = function(hB) {
		for (var e7 = this.ns(hB), aW = 0; aW < 3; aW++) e7[aW] = ~~(4.05 * e7[aW]);
		return e7
	}, this.aDY = function(hB) {
		hB = this.aPZ(hB);
		return bK.color.uz(hB[0], hB[1], hB[2])
	}, this.aPa = function(e7) {
		for (var aW = 0; aW < 3; aW++) e7[aW] = ~~(e7[aW] / 4.04);
		return (e7[0] << 12) + (e7[1] << 6) + e7[2]
	}, this.uz = function(fn, hL, eN) {
		return "rgb(" + fn + "," + hL + "," + eN + ")"
	}, this.aCf = function(fn, hL, eN, ba) {
		return "rgba(" + fn + "," + hL + "," + eN + "," + ba.toFixed(3) + ")"
	}, this.tj = function(ag) {
		for (var e7 = ag.split("(")[1].split(","), y6 = dF.y6, aW = 0; aW < 3; aW++) y6[aW] = parseInt(e7[aW]);
		return 4 === e7.length ? y6[3] = 255 * parseFloat(e7[3].slice(0, -1)) : y6[3] = 255, y6
	}, this.tk = function(aPb, bX) {
		for (var e7 = aPb.slice(aPb.indexOf("(") + 1, aPb.indexOf(")")).split(","), y6 = dF.y6, aW = 0; aW < 3; aW++) y6[aW] = eO.h2(parseInt(e7[aW].trim(), 10) + bX, 0, 255);
		return 3 === e7.length ? this.uz(y6[0], y6[1], y6[2]) : (aPb = parseFloat(e7[3].trim()), this.aCf(y6[0], y6[1], y6[2], aPb = 0 === aPb ? .3 : aPb))
	}, this.aN1 = function(aPc, aPd) {
		for (var gz = 0, aW = 0; aW < 3; aW++) gz += Math.abs(aPd[aW] - aPc[aW]);
		if (!(240 <= gz))
			for (aW = 0; aW < 3; aW++) aPd[aW] = aPc[aW] + (aPc[aW] < 128 ? 80 : -80)
	}, this.aPe = function(e7) {
		for (var ak = "#", aW = 0; aW < 3; aW++) {
			var fn = e7[aW].toString(16);
			ak += 1 === fn.length ? "0" + fn : fn
		}
		return ak
	}, this.aPf = function(ak) {
		var fn, hL;
		return ak.length < 7 ? aB.aC : (fn = parseInt(ak.slice(1, 3), 16), hL = parseInt(ak.slice(3, 5), 16), ak = parseInt(ak.slice(5, 7), 16), this.uz(fn, hL, ak))
	}
}

function aJ4() {
	this.a1v = new a1k, this.aHG = new aFl, this.aHH = new aHZ, this.performance = new aPg, this.kO = new a6d, this.kh = new jy, this.ke = new aH2, this.aHF = new aPh, this.a7j = new rX, this.c = function() {
		this.a1v.c(), this.aHH.c(), this.performance.c(), this.kO.c(), this.kh.c()
	}, this.kK = function() {
		this.performance.kK(), this.a1v.kK(), this.aHH.aHb()
	}
}

function ys(n7, yy) {
	var aY = document.createElement("div");

	function a3k() {
		var aW, a9q, aF, j3, bX, aPj = aD.fJ * aY.offsetWidth,
			aPl = new Float64Array(function(aPj) {
				var aE = .25 * bK.en.a9s(.6) * aD.lh;
				return Math.max(Math.floor(aPj / aE), 1)
			}(aPj)),
			n9 = iN.n9,
			aPm = (aPj - (aPl.length + 1) * iN.gap) / (aPl.length * aD.fJ);
		for (aPl.fill(n9), aW = 0; aW < yy.length; aW++) a9q = (bX = yy[aW].aY).style, aF = bK.nU.min(aPl), j3 = aPl.indexOf(aF), a9q.top = bK.en.ju(aF), a9q.left = bK.en.ju(n9 + j3 * (aPm + n9)), a9q.width = bK.en.ju(aPm), bK.en.r3(bX, 5), aPl[
			j3] += bX.offsetHeight + 3 * n9;
		aY.style.height = bK.en.ju(bK.nU.max(aPl) - 2 * n9)
	}
	this.n8 = aY, this.aOr = yy, this.resize = function() {
		var aW;
		for (aW = 0; aW < yy.length; aW++) yy[aW].resize();
		a3k(), a3k()
	}, aY.style.width = "100%", aY.style.maxWidth = "100%", n7.style.lineHeight = "1.5em", n7.style.overflowX = "hidden", n7.style.overflowY = "auto";
	for (var aW = 0; aW < yy.length; aW++) aY.appendChild(yy[aW].aY);
	n7.appendChild(aY)
}

function qW() {
	this.o = n.o, this.cW = 0, this.qY = 0, this.aPn = 0, this.aPo = null, this.aPp = 7, this.aPq = 0, this.c = function() {
		this.aPn = 0, this.aPo = [], this.cW = 0, this.qY = 0
	}, this.aPr = function(eG) {
		if (d4.iA) this.n3(eG);
		else if (this.aPo.push(eG), 2 === d4.fL) {
			for (var aW = 0; aW < this.aPo.length; aW++) ko.a2N.kK(this.aPo[aW]);
			this.aPo = []
		}
	}, this.n3 = function(eG) {
		2 !== d4.fL && (ko.a2N.kK(eG), uY.kK(), mY.n3(this.aPn), this.aPn === d4.n5 ? (d4.a9N.kK(), this.aPn = 0, this.cW = 0, this.qY = 0, this.o = n.o) : (this.aPn++, oD.a3t(), oD.iE(!0), iF.render()))
	}, this.kK = function() {
		aD.kK(), d4.iA ? (n.a5 = mY.n3(-1) || n.a5, vt()) : (0 !== this.cW || n.o >= this.o && (this.o += n.n2 * Math.floor(1 + (n.o - this.o) / n.n2), 2 === d4.fL ? vu() : this.aPs(), this.cW++, 27 < n.o - this.aPq)) && this.aPt(), vx(), n.a5 &&
			(n.a5 = !1, vy()), this.aPq = n.o
	}, this.aPt = function() {
		n.a5 = !0, vw(), this.cW = 0
	}, this.aPs = function() {
		var aOB, aW;
		if (this.qY !== 7 * this.aPn) vv(), iF.render();
		else {
			aOB = !1;
			loop: for (; this.aPu() && (aOB = !0, vv(), 2 !== d4.fL) && 0 < this.aPo.length;)
				for (aW = this.aPp - 2; 0 <= aW; aW--)
					if (vv(), 2 === d4.fL) break loop;
			aOB ? iF.render() : (vu(), iF.xT())
		}
	}, this.aPu = function() {
		return 0 < this.aPo.length && (this.aPn++, ko.a2N.kK(this.aPo[0]), this.aPo.shift(), !0)
	}
}

function l1(ch, n7) {
	var aY;
	this.resize = function() {
		for (var aW = 0; aW < ch.length; aW++) bK.en.r3(ch[aW].button);
		aY.style.gap = aY.style.padding = bK.en.ju(iN.n9)
	}, (aY = document.createElement("div")).style.display = "grid", aY.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", aY.style.overflowY = "auto", aY.style.gridAutoRows = "5.3em", aY.style.maxHeight = "100%";
	for (var aW = 0; aW < ch.length; aW++) ch[aW].ta(1), aY.appendChild(ch[aW].button);
	n7.appendChild(aY)
}

function aJB() {
	var aPv = -1,
		aPw = null,
		aAM = -1,
		aMt = 4;

	function aPy() {
		fT.i9() ? iF.render() : iF.iG()
	}

	function aQ6(ag, bX) {
		var fn = ag >> 16,
			hL = ag >> 8 & 255,
			ag = 255 & ag,
			aQ7 = 255 - bX,
			aQ7 = (aQ7 < fn && aQ7 < hL && aQ7 < ag && (bX = -bX), aPv >> 7),
			aQ9 = aPv >> 5 & 3,
			aQA = aPv >> 3 & 3;
		return (Math.max(Math.min(fn + bX, 252 + aQ7), aQ7) << 16) + (Math.max(Math.min(hL + bX, 252 + aQ9), aQ9) << 8) + Math.max(Math.min(ag + bX, 252 + aQA), aQA)
	}

	function aPx() {
		return -1 !== aPv && (dK.yC(aPv, aPw[0], aPw[1], aPw[2]), aQ3(aPv), aPv = -1)
	}

	function aQ3(player) {
		n.a5 = !0;
		for (var j9 = dA.j9[player], jB = dA.jB[player], jA = dA.jA[player], jC = dA.jC[player], v = jB; v <= jC; v++)
			for (var u = j9; u <= jA; u++) {
				var aK = dK.xW(u, v);
				dK.yI(player, aK) && (dK.yM(aK) ? dK.yX(aK, player) : dK.yL(aK) ? dK.yW(aK, player) : dK.yV(aK, player))
			}
	}
	this.c = function() {
		aPw = null, aAM = aPv = -1, aMt = eO.h2(Math.floor(bn.buffer.data[16].value), 0, 16)
	}, this.kK = function(mX) {
		if (bn.buffer.data[15].value && 0 !== aMt && (mX || !b1.b2())) {
			var mX = dI.zW(b1.ey),
				zX = dI.zY(b1.ez);
			if (dI.zZ(mX, zX)) {
				mX = dI.jm(mX, zX), zX = dI.dJ(mX);
				if (aAM === zX)
					if (dK.yH(zX)) {
						if (aPv === dK.jR(zX)) return
					} else if (-1 === aPv) return;
				! function(aK) {
					dK.yH(aK) ? (aK = dK.jR(aK)) !== aPv && (aPx(), function(player) {
						aPv = player, aPw = dK.yG(player);
						var aQ1 = function() {
							var aX = aPw,
								aQ4 = aMt << 2,
								aQ5 = aQ4 << 1;
							return [aQ6(aX[0], aQ4), aQ6(aX[1], aQ5), aQ6(aX[2], aQ5)]
						}();
						dK.yC(player, aQ1[0], aQ1[1], aQ1[2]), aQ3(player)
					}(aK), aPy()) : aPx() && aPy()
				}(aAM = zX)
			} else aPx() && aPy()
		}
	}
}

function aCT(title, ed, ef) {
	var eg, eh;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), eh.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, ef = ef || [new ei("⬅️ " + L(2), function() {
		h.ej()
	}, aB.aQB)], eg = new ek(title, ef), eh = new el(eg.em, ed), bK.en.textAlign(eg.em.style, 1)
}

function a38(data) {
	var eg, aQC, aQD, aQE, aQF, aQG, aQH, colors, aQI, aQJ, aQK = 0,
		aQL = 0,
		aQM = !1,
		aQN = !1,
		aQO = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQp(iH, iI) {
		! function(iH, iI) {
			return aQC < iH && iH < aQC + aQE && aQD < iI && iI < aQD + aQF
		}(aQK = iH, aQL = iI) ? (aQM && (n.a5 = !0), aQM = !1) : (aQM = !0, n.a5 = !0)
	}
	this.show = function() {
		aQN = bn.buffer.data[127].value, eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize();
		var ag = aD.fJ,
			r2 = eg.qx(),
			aQW = ag * r2.r0,
			ag = ag * r2.qy;
		aQG = bK.en.a9t(.06), aQH = bK.en.a9t(.04), aQC = bK.en.a9t(.06), aQD = ag + aQG, aQE = aD.aE - aQC - aQH, aQF = aQW + ag - aQD - aQH
	}, this.a6 = function() {
		eg.a6(),
			function() {
				var aW, aQT, hD, u, ba, e7 = data.data,
					aQa = 1,
					aQb = .125,
					aQc = aQN ? 65536 : 0;
				for (aW = 0; aW < e7.length; aW++)
					for (aQT = e7[aW].aQT, hD = aQT.length, aQa = Math.max(hD, aQa), ba = 0; ba < hD; ba++) aQb = Math.max(aQT[ba], aQb), aQc = Math.min(aQT[ba], aQc);
				var iz = aQD + aQF,
					rP = aQF / (aQb - aQc),
					rO = 1 / (aQa - 1);
				for (a7.lineWidth = iN.iV, aW = 0; aW < e7.length; aW++) {
					for (aQT = e7[aW].aQT, hD = aQT.length, u = aQC, a7.beginPath(), a7.moveTo(u + aQE, iz - rP * (aQT[hD - 1] - aQc)), ba = hD - 2; 0 <= ba; ba--) a7.lineTo(u + rO * ba * aQE, iz - rP * (aQT[ba] - aQc));
					a7.strokeStyle = colors[aW], a7.stroke()
				}(function(aQc, aQb, iz, rP) {
					a7.font = bK.en.i3(0, .25 * aQC), bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 2), a7.fillStyle = colors[0];
					for (var u = .92 * aQC, aW = 0; aW < 3; aW++) {
						var hB = aQc + aW * (aQb - aQc) / 2;
						a7.fillText((hB / 1e3).toFixed(3), u, iz - rP * (hB - aQc))
					}
				})(aQc, aQb, iz, rP),
				function(aQa) {
					var v = aQD + aQF + .15 * aQH;
					a7.font = bK.en.i3(0, Math.min(.4 * aQH, .028 * aD.aE)), bK.en.textBaseline(a7, 0), bK.en.textAlign(a7, 2), a7.fillStyle = colors[0], a7.fillText(bK.aOo.aEf(aQI), aQC + aQE, v), bK.en.textAlign(a7, 0), a7.fillText(bK.aOo.aEf(
						new Date(aQJ.getTime() - 6e4 * (aQa - 1) * aQO[data.a2A])), aQC, v)
				}(aQa),
				function(aQa, aQc, aQb) {
					if (aQM && !(aQa < 2)) {
						for (var js, cW = (aQK - aQC) / aQE * (aQa - 1), aQf = Math.floor(cW), aQg = Math.floor(1 + cW), aQh = cW - aQf, aQi = 1e5, eC = -1, aQj = -1, aQk = aQb - (aQb - aQc) * (aQL - aQD) / aQF, e7 = data.data, aW = 0; aW < e7
							.length; aW++) {
							var a4x, aQT = e7[aW].aQT;
							aQT.length <= aQg || (aQT = aQT[aQf] + aQh * (aQT[aQg] - aQT[aQf]), (a4x = Math.abs(aQk - aQT)) < aQi && (aQi = a4x, eC = aW, aQj = aQT))
						} - 1 !== eC && (aQb = aQD + aQF - (aQj - aQc) / (aQb - aQc) * aQF, a7.lineWidth = .5 * iN.iV, a7.strokeStyle = colors[eC], a7.beginPath(), a7.moveTo(aQC, aQb), a7.lineTo(aQK, aQb), a7.lineTo(aQK, aQD + aQF), a7.stroke(),
							a7.beginPath(), a7.arc(aQK, aQb, .1 * aQC, 0, 2 * Math.PI), a7.fillStyle = colors[eC], a7.fill(), aQc = aQD + aQF + .15 * aQH, bK.en.textAlign(a7, 1), js = aQa - 2 < cW ? (js = aQJ.getTime() - 6e4 * aQO[data.a2A],
								new Date(js + (cW - (aQa - 2)) * (aQI.getTime() - js))) : new Date(aQJ.getTime() - 6e4 * (aQa - cW - 1) * aQO[data.a2A]), aQa = bK.aOo.aEf(js), cW = bK.en.measureText(aQa), js = eO.h2(aQK, aQC + .5 * cW, aQC +
								aQE - .5 * cW), a7.fillStyle = bK.color.uz(70, 50, 20), a7.fillRect(js - .52 * cW, aQD + aQF, 1.04 * cW, .55 * aQH), a7.fillStyle = colors[0], a7.fillText(aQa, js, aQc), a7.font = bK.en.i3(0, .25 * aQC), bK.en
							.textBaseline(a7, 1), bK.en.textAlign(a7, 2), js = .92 * aQC, aQa = (aQj / 1e3).toFixed(3), cW = bK.en.measureText(aQa), aQc = js - 1.04 * cW, a7.fillStyle = bK.color.uz(70, 50, 20), a7.fillRect(aQc, aQb - .1625 *
								aQC, aQC - aQc, .275 * aQC), a7.fillStyle = colors[eC], a7.fillText(aQa, js, aQb))
					}
				}(aQa, aQc, aQb)
			}(), a7.lineWidth = iN.iV, a7.strokeStyle = aB.i8, a7.beginPath(), a7.moveTo(aQC, aQD), a7.lineTo(aQC, aQD + aQF), a7.lineTo(aQC + aQE, aQD + aQF), a7.stroke();
		var aW, fontSize = .5 * aQG,
			e7 = (a7.font = bK.en.i3(0, fontSize), bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 0), data.data),
			e4 = e7.length,
			v = aQD - .5 * aQG,
			ak = "";
		for (aW = 0; aW < e4; aW++) ak += e7[aW].name + "  ";
		ak = ak.trim();
		var aMM = bK.en.measureText(ak),
			u = .5 * (aD.aE - aMM);
		for (aMM > aD.aE && (u = 0, a7.font = bK.en.i3(0, aD.aE / aMM * fontSize)), aW = 0; aW < e4; aW++) a7.fillStyle = colors[aW], a7.fillText(e7[aW].name, u, v), u += bK.en.measureText(e7[aW].name + "  ")
	}, this.t = function(iH, iI) {
		aQp(iH, iI)
	}, this.z = function(iH, iI) {
		aQp(iH, iI)
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	};
	var aW, m6, aEd, cy, bX = data.data,
		e4 = bX.length,
		max = 1;
	for (aW = 0; aW < e4; aW++) max = Math.max(max, bX[aW].aQT.length);
	for (aW = 0; aW < e4; aW++)
		for (; bX[aW].aQT.length < max;) bX[aW].aQT.unshift(0);
	m6 = new Date, aEd = 6e4 * m6.getTimezoneOffset(), cy = m6.getTime() - aEd, aQI = new Date(cy), 6 === data.a2A ? function(m6, aEd) {
		var aQV = m6.getUTCFullYear(),
			m6 = m6.getUTCMonth() + 1;
		aQJ = m6 < 12 ? new Date(Date.UTC(aQV, m6) - aEd) : new Date(Date.UTC(aQV + 1, 0) - aEd)
	}(m6, aEd) : (aEd = 6e4 * aQO[data.a2A], aQJ = data.a2A <= 4 ? new Date(cy + aEd - m6.getTime() % aEd) : new Date(cy + aEd - (m6.getTime() + 2592e5) % aEd)), cy = bK.color, colors = [aB.i8, cy.uz(255, 0, 0), cy.uz(0, 200, 0), cy.uz(80, 80,
		255), cy.uz(255, 255, 0), cy.uz(255, 0, 255), cy.uz(0, 255, 255), cy.uz(255, 140, 0), cy.uz(128, 128, 128), cy.uz(0, 255, 140)], eg = new ek(L(256) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.a2A] + ", " + bK.aOo.aEc(aQI), [
		new ei("⬅️ " + L(2), function() {
			h.gQ(1)
		}), new ei(L(257), function() {
			h.gQ(14)
		})
	], !1)
}

function aIw() {
	var e7, a0j, aCv, aFh, gap, aQq, aQr, aQs, aQt, aQu, hy, bm, ey, aMO, lo, a0L, aQv;

	function aQy() {
		aFh = Math.floor(.2 * (bx.by.i2() ? .07 : .035) * aD.lh), aFh = oM(bx.by.i2() ? 3 : 1, aFh);
		var aR0 = aD.aE / (e7.length + gap);
		aFh = aFh < aR0 ? aR0 : aFh, lo = Math.floor((1 - gap) * aFh), a0j = 0, aR1()
	}

	function aR1() {
		a0j = (a0j = a0j < -20 ? -20 : a0j) > (e7.length - 15) * aFh ? (e7.length - 15) * aFh : a0j, aQr = Math.floor(a0j / aFh), aQs = (aQs = aQr + Math.floor(aD.aE / aFh)) > e7.length - 1 ? e7.length - 1 : aQs, aQr = (aQr = aQs < aQr ? aQs : aQr) <
			0 ? 0 : aQr;
		var me = aQs;
		aQq = aCv / e7[me];
		for (var aW = aQs - 1; aQr <= aW; aW--) e7[aW] > e7[me] && (me = aW, aQq = aCv / Math.pow(e7[aW], aMO))
	}

	function aR3(u) {
		u = Math.floor((a0j + aD.aE - u - gap * aFh) / aFh);
		return (u = u < -1 ? -1 : -1 === u ? 0 : u > e7.length - 1 ? -1 : u) !== aQt && (aQt = u, -1 === a0L && 0 === aQt && y.aQw && (a0L = setInterval(aR4, 100)), 1)
	}

	function aR5(aW) {
		var m8 = Math.floor(aQq * Math.pow(e7[aW], aMO));
		a7.fillRect(a0j + aD.aE - (aW + 1) * aFh, aD.aF - m8, lo, m8)
	}

	function aR4() {
		var nD;
		0 !== (aQt = 8 === bz.f() ? -1 : aQt) ? (aQv = (new Date).getTime(), clearInterval(a0L), a0L = -1) : (nD = e7[1] / 864e3, -1 !== aQv && (nD += ((new Date).getTime() - aQv) * e7[1] / 864e5, aQv = -1), 0 < nD && (e7[0] += Math.floor(nD), n
			.a5 = !0))
	}
	this.aQw = !1, this.c = function() {
		aQv = a0L = -1, aQt = -(aMO = 1), this.a0 = !1, ey = 0, bm = new Date, a0j = 0, gap = .3, e7 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aCv = Math.floor(.15 * aD.aF), aQu = (aQu = Math.floor((bx.by.i2() ? .018 : .0137) * aD.lh)) < 2 ? 2 : aQu, hy = bK.en.i3(1, aQu), aQy()
	}, this.aQz = function(aNx) {
		var aW;
		for (this.aQw = !0, aW = 0; aW < aNx.length; aW++) e7.unshift(aNx[aW]);
		aQy(), n.a5 = !0
	}, this.a4 = function() {
		aR1()
	}, this.z = function(u, v) {
		v > aD.aF - .6 * aCv ? this.a0 ? u !== ey && (a0j += u - ey, ey = u, aR1(), aR3(u), this.a0 = -1 !== aQt, n.a5 = !0) : aR3(u) && (n.a5 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aQt && (this.a0 = !1, aQt = -1, n.a5 = !0)
	}, this.a2 = function(u, deltaY) {
		-1 !== aQt && (a0j += Math.floor(deltaY), aR1(), aR3(u), n.a5 = !0)
	}, this.t = function(u, v) {
		this.z(u, v), -1 !== aQt && (ey = u, this.a0 = !0)
	}, this.a1 = function() {
		-1 !== aQt && (this.a0 = !1)
	}, this.a6 = function() {
		a7.fillStyle = aB.aMP;
		for (var aR8, month, m6, oJ, aRB, aRC, iz, aRD, aRE, aW = aQs; aQr <= aW; aW--) aR5(aW);
		this.aQw && 0 === aQr && (a7.fillStyle = aB.aR6, aR5(0)), -1 !== aQt && (a7.fillStyle = aB.aLJ, aR5(aQt)), -1 !== aQt && (a7.font = hy, bK.en.textBaseline(a7, 2), (m6 = new Date).setTime(bm.getTime() - 1e3 * aQt * 60 * 60 * 24), month =
			"month", aR8 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(m6), aR8 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(m6)), aR8 = aR8 + ", " + m6.getUTCDate() + " " + month + " " + m6.getFullYear(), month = 1 === e7[aQt] ? L(258) : L(259), month = bK.bL.bB(e7[aQt]) + " " + month, m6 = Math.floor(a7.measureText(aR8).width), oJ = Math
			.floor(a7.measureText(month).width), aRB = Math.floor(.5 * (m6 + aQu)), aRC = (aRC = a0j + aD.aE - (aQt + 1) * aFh) < aRB ? aRB : aRC > aD.aE - aRB ? aD.aE - aRB : aRC, iz = aD.aF - Math.floor(aQq * Math.pow(e7[aQt], aMO)), aRD =
			Math.floor(1.1 * aQu), aRE = iz > aD.aF - aRD ? aD.aF - aRD : iz, a7.fillStyle = aB.ea, a7.fillRect(aD.aE - oJ - aQu, aRE - aRD, oJ + aQu, aRD), a7.fillRect(aRC - aRB, aD.aF - aRD, m6 + aQu, aRD), a7.fillStyle = aB.i8, bK.en
			.textAlign(a7, 2), a7.fillText(month, Math.floor(aD.aE - .5 * aQu), aRE), bK.en.textAlign(a7, 1), a7.fillText(aR8, aRC, aD.aF), a7.strokeStyle = aB.aRF, a7.lineWidth = 1, a7.beginPath(), a7.moveTo(0, iz), a7.lineTo(aD.aE, iz), a7
			.closePath(), a7.stroke())
	}
}

function aJ9() {
	this.aRG = [], this.aRH = [], this.c = function() {
		this.aRG = [], this.aRH = []
	}, this.kK = function() {
		0 <= this.aRG.length && this.aRI(this.aRG), 0 <= this.aRH.length && this.aRI(this.aRH)
	}, this.aRI = function(e7) {
		for (var eN = -1, aW = e7.length - 1; 0 <= aW; aW--)
			if (e7[aW].o--, e7[aW].o <= 0) {
				eN = aW;
				break
			} for (aW = eN; 0 <= aW; aW--) e7.shift()
	}, this.aRJ = function(id, oi, aRK) {
		return this.jk(this.aRG, id, oi, aRK)
	}, this.aRL = function(id, oi, aRK) {
		return this.jk(this.aRH, id, oi, aRK)
	}, this.jk = function(e7, id, oi, aRK) {
		return ! function(e7, id, oi) {
			var aW, cy;
			for (aW = oi.length - 1; 0 <= aW; aW--)
				for (cy = e7.length - 1; 0 <= cy; cy--)
					if (e7[cy].player === oi[aW] && id === e7[cy].id) return 1;
			return
		}(e7, id, oi) && (aRK && function(e7, id, oi) {
			var aW;
			for (aW = oi.length - 1; 0 <= aW; aW--) e7.push({
				player: oi[aW],
				id: id,
				o: 384
			})
		}(e7, id, oi), !0)
	}
}

function aRO() {
	var a1Q, aRP;

	function aRU() {
		(a1Q = new WebSocket("wss://territorial.io/s52/")).onopen = aRW, a1Q.onclose = function() {
			aRX()
		}
	}

	function aRW() {
		if (a1Q && a1Q.readyState === a1Q.OPEN) {
			var aE = new eF;
			aE.eH(1608), aE.eK(1, 0), aE.eK(6, 7), aE.eK(2, bx ? bx.id : 3), aE.eK(1, lT.lV ? 1 : 0), aE.eK(1, lT.lW ? 1 : 0), aE.eK(1, lT ? lT.um : 0);
			for (var aW = 0; aW < aRP.length && aW < 228; aW++) aE.eK(7, aRP.charCodeAt(aW) % 128);
			a1Q.send(aE.eG), aRX()
		}
	}

	function aRX() {
		a1Q && (a1Q.onclose = null, a1Q.onopen = null, a1Q = null)
	}
	window.addEventListener("error", function aRQ(k) {
		aRP = "";
		try {
			var aRR = function(k) {
				if (!k.error) return 0;
				var stack = k.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, aCJ = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = aCJ.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(k);
			return 0 === aRR || k.lineno <= 3 ? void console.log("Error: External Code | " + aRR) : (window.removeEventListener("error", aRQ), aRP = k.lineno + " " + k.colno + "|" + aRR, __fx.reportError(k, aRP), alert("Error:\n" + k
				.filename + " " + k.lineno + " " + k.colno + " " + k.message))
		} catch (k) {
			aRP = "SE|" + aRP + "|" + k, console.log(aRP), alert(aRP)
		}
		aRU()
	})
}

function vy() {
	aIU.a8(), a7.setTransform(iy, 0, 0, iy, 0, 0), a7.imageSmoothingEnabled = iy < 3, a7.drawImage(l.aL, fY.iu(), fY.iv()), ip.a0n.a6(), a7.drawImage(aRY, fY.iu(), fY.iv()), aIU.a6(), d5.a6(), oD.a6(), (d4.fz ? (kk.a6(), fM) : (eX.a6(), fX.a6(), fZ
		.a6(), fM.a6(), fU.a6(), mY.a6(), fY.a6(), oC.a6(), kk.a6(), mS.a6(), fS.a6(), fT.a6(), fQ.a6(), fP.a6(), fO.a6(), a9L)).a6(), h.a6()
}

function aRZ(cd, aE, aF) {
	cd.clearRect(0, 0, aE, aF), cd.fillStyle = aB.ea, cd.fillRect(0, 0, aE, aF)
}

function aRa(cd, aE, aF, aRb) {
	cd.fillStyle = aB.i8, cd.fillRect(0, 0, aE, aRb), cd.fillRect(0, 0, aRb, aF), cd.fillRect(aE - aRb, 0, aRb, aF), cd.fillRect(0, aF - aRb, aE, aRb)
}

function aRc(cd, u, v, jw, aRb, nD, aRd) {
	cd.fillStyle = aB.i8;
	var nD = Math.floor(jw * nD),
		oJ = (nD += (nD - aRb) % 2, Math.floor((nD - aRb) / 2)),
		jw = Math.floor((jw - nD) / 2);
	cd.fillRect(u + jw, v + jw + oJ, nD, aRb), aRd && cd.fillRect(u + jw + oJ, v + jw, aRb, nD)
}

function bo() {
	function aRn(e7, h4, h5) {
		var aRo = e7[h4];
		e7[h4] = e7[h5], e7[h5] = aRo
	}
	this.aCG = [
		[],
		[],
		[],
		[]
	], this.gM = [0, 0, 0, 0], this.bI = [], this.gN = function(aRf, bC, username, aq, ar, aKd, elo, color, qF, aRg, code) {
		username = this.bJ(bC, username, aq, ar, aKd, elo, color, qF, aRg, code);
		this.aCG[aRf].push(username), an.bd === bC && (an.be = username), an.bi.aNj(bC) && (username.ay = 1), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRf && 1 === an.bf.aE2[2]
	}, this.bJ = function(bC, username, aq, ar, aKd, elo, color, qF, aRg, code) {
		return {
			bC: bC,
			username: code ? __fx.nameFilter.filter(username) : "Player " + b9.bA.bB(bC, 2),
			aRh: __fx.nameFilter.filter(username),
			aq: aq,
			ar: ar,
			aKd: aKd,
			elo: elo,
			color: color,
			qF: qF,
			aRg: aRg
		}
	}, this.gY = function(cW, aRf, aq, ar, aKd, elo, qF, color) {
		cW = this.aCG[aRf][cW];
		cW.aq = aq, cW.ar = ar, cW.aKd = aKd, cW.elo = elo, cW.qF = qF, cW.color = color, an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRf && 1 === an.bf.aE2[2]
	}, this.ga = function(cW, aRf, code) {
		cW = this.aCG[aRf][cW];
		1 === code && (cW.username = cW.aRh), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRf && 1 === an.bf.aE2[2]
	}, this.gZ = function(cW, aRf, aRi) {
		var cW = this.aCG[aRf][cW],
			aRj = cW.username,
			bS = "Redacted " + b9.bA.bB(cW.bC, 2);
		cW.username = aRi ? "[" + bK.bL.vn(aRj) + "] " + bS : bS, aRj.indexOf("Redacted") < 0 && (cW.b7 = aRj), an.bh.bU(cW.bC), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRf && 1 === an.bf.aE2[2]
	}, this.gW = function(cW, aRk, aRl) {
		var player = this.aCG[aRk][cW];
		this.gX(cW, aRk), this.aCG[aRl].push(player), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRl && 1 === an.bf.aE2[2]
	}, this.gX = function(cW, aRk) {
		var bG = this.aCG[aRk];
		this.bI.push(bG[cW]), 1e3 < this.bI.length && this.bI.shift(), cW >= this.gM[aRk] ? bG[cW] = bG[bG.length - 1] : (this.gM[aRk]--, 2 === aRk ? (bG.splice(this.gM[aRk] + 1, 0, bG[bG.length - 1]), bG.splice(cW, 1)) : (bG[cW] = bG[this.gM[
			aRk]], bG[this.gM[aRk]] = bG[bG.length - 1])), bG.pop(), an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === aRk && 1 === an.bf.aE2[2]
	}, this.gV = function(cW, gg) {
		an.bf.aEQ += 29 === h.l2 && an.bf.aE2[0] === gg && 1 === an.bf.aE2[2];
		var bG = this.aCG[gg],
			aX = bG[cW];
		if (2 === gg)
			if (cW >= this.gM[gg]) {
				an.bi.join(aX);
				for (var aRm = this.gM[gg], elo = aX.elo; aRm && elo > bG[aRm - 1].elo;) aRm--;
				bG[cW] = bG[this.gM[gg]], bG.splice(this.gM[gg]++, 1), bG.splice(aRm, 0, aX)
			} else bG.splice(this.gM[gg]--, 0, aX), bG.splice(cW, 1);
		else cW >= this.gM[gg] ? (an.bi.join(aX), aRn(bG, this.gM[gg]++, cW)) : aRn(bG, --this.gM[gg], cW)
	}, this.bH = function(bC) {
		for (var aCG = this.aCG, e4 = aCG.length, aW = 0; aW < e4; aW++)
			for (var bG = aCG[aW], me = bG.length, ba = 0; ba < me; ba++)
				if (bC === bG[ba].bC) return bG[ba];
		return null
	}
}

function aHY() {
	this.fd = !1;
	this.xJ = [], this.xI = 100;
	var iw, iz, gap, jw, aRp, aRr, aRs = 0,
		aRt = new Array(9),
		aRu = [],
		aRv = [],
		aRw = 0,
		aRx = 0,
		aRy = 0,
		aRz = 0;

	function aS7() {
		aRt.sort(function(ba, eN) {
			return eN.zB - ba.zB
		});
		for (var ak = "" + aRt[0].x0, aW = 1; aW < 9; aW++) ak += "," + aRt[aW].x0;
		for (aW = 0; aW < 9; aW++) ak += "," + aRt[aW].zB;
		bn.buffer.q4(120, ak)
	}
	this.c = function() {
		for (var aS0 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aW = 0; aW < aS0.length; aW++) {
			var color = 6 === aS0[aW] ? aB.aS1 : aB.aKw;
			this.xJ.push(bK.canvas.aS2(aN.get(3), aS0[aW], color))
		}
		for (aW = 0; aW < a3x.bh.a4Y; aW++) aRv.push(a3x.bh.aIH - a3x.bh.a4Y + aW);
		for (aW = 0; aW < a3x.bh.aIF; aW++) aRv.push(a3x.bh.aIG + aW);
		var aS3 = a3x.bh.aIM(aCM.aS3);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = aS3.slice(), aW = 0; aW < aS3.length; aW++) aRv.push(aS3[aW]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					aRt[q] = {
						x0: isNaN(qcode) ? 1015 + q : qcode,
						zB: 0
					}
				} else {
					var aW, e7 = bn.buffer.data[120].value.split(",");
					if (18 !== e7.length)
						for (aW = 0; aW < 9; aW++) aRt[aW] = {
							x0: 1015 + aW,
							zB: 0
						};
					else
						for (aW = 0; aW < 9; aW++) {
							var hB = parseInt(e7[aW]),
								ag = (hB = 0 <= hB && hB < a3x.bh.aIH ? hB : 0, parseInt(e7[aW + 9]));
							ag = 0 <= ag && ag < 1e3 ? ag : 0, aRt[aW] = {
								x0: hB,
								zB: ag
							}
						}
				}
		}()
	}, this.show = function(iH, iI, aS8) {
		var aW;
		if (aRw = iH, aRx = iI, aRs = aS8 || 0, this.fd = !0, aRu = [], 0 === aRs)
			for (aW = 0; aW < 9; aW++) aRu.push(aRt[aW].x0);
		else {
			var eN = 49 * aRs,
				aS8 = eN - 49;
			for (aS8 >= aRv.length && (aRs = 1, aS8 = 0, eN = 49), aW = aS8 = (eN = Math.min(eN, aRv.length)) - 49; aW < eN; aW++) aRu.push(aRv[aW])
		}
		aRu.push(1024);
		aS8 = aRu.length, jw = Math.floor((bx.by.i2() ? .075 : .0468) * aD.lh), gap = Math.floor(jw / 3), (aRy = 10 * (aRp = jw + gap)) > aD.aE && (aRy = aD.aE, gap = (aRp = aRy / 10) - (jw = 3 * aRp / 4)), aRr = eO.eP(aS8, 10) + !!(aS8 % 10), (
			aRz = aRr * aRp) > aD.aF && (aRz = aD.aF, gap = (aRp = aRz / aRr) - (jw = 3 * aRp / 4)), aS8 = .5 * gap;
		iw = Math.min(Math.max(iH - .5 * aRy + aS8, aS8), aD.aE - aRy + aS8), iz = Math.min(Math.max(iI - .5 * aRz + aS8, aS8), aD.aF - aRz + aS8)
	}, this.t = function(iH, iI, player) {
		if (!this.fd) return !1;
		if (this.aSA(iH, iI)) {
			iH = eO.h2(eO.eP(iH - iw + .5 * gap, aRp), 0, 9);
			if ((iH += 10 * eO.h2(eO.eP(iI - iz + .5 * gap, aRp), 0, 9)) >= aRu.length) return fQ.s(), !0;
			iI = aRu[iH];
			if (1024 === iI) return this.show(aRw, aRx, aRs + 1), !0;
			! function(x0) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aW = 0; aW < 9; aW++) aRt[aW].zB = Math.floor(.99 * aRt[aW].zB);
					for (aW = 0; aW < 9; aW++)
						if (x0 === aRt[aW].x0) return aRt[aW].zB = Math.min(aRt[aW].zB + 30, 999), aS7();
					aRt.splice(5, 0, {
						x0: x0,
						zB: Math.max(aRt[4].zB, 30)
					}), aRt.pop(), aS7()
				}
			}(iI), player === d4.jL ? ko.zg.aJe(iI) : ko.dl.aSB(iI, player)
		}
		return fQ.s(), !0
	}, this.aSA = function(iH, iI) {
		return !(iH < iw - .5 * gap || iI < iz - .5 * gap || iw + aRy - .5 * gap <= iH || iz + aRz - .5 * gap <= iI)
	}, this.a6 = function() {
		a7.fillStyle = aB.ea, a7.fillRect(iw - .5 * gap, iz - .5 * gap, aRy, aRz);
		for (var cy = .5 * iN.iV, e4 = (a7.lineWidth = iN.iV, a7.strokeStyle = a7.fillStyle = aB.i8, a7.strokeRect(iw - .5 * gap + cy, iz - .5 * gap + cy, aRy - 2 * cy, aRz - 2 * cy), a7.imageSmoothingEnabled = !0, aRu.length), aW = 0; aW <
			e4; aW++) this.aSC(aRu[aW], a7, iw + aW % 10 * aRp, iz + eO.eP(aW, 10) * aRp, jw);
		a7.imageSmoothingEnabled = !1
	}, this.aSC = function(x0, rL, u, v, jw) {
		var aK;
		x0 >= 1024 - a3x.bh.a4Y ? (aK = jw / this.xI, rL.setTransform(aK, 0, 0, aK, u, v), rL.drawImage(this.xJ[x0 - 1024 + a3x.bh.a4Y], 0, 0), rL.setTransform(1, 0, 0, 1, 0, 0)) : (bK.en.textAlign(rL, 1), bK.en.textBaseline(rL, 1), rL.font = bK
			.en.i3(0, .89 * jw), rL.fillText(a3x.bh.a4Z(x0), u + .5 * jw, v + (.35 - bK.en.a4M + .56) * jw))
	}
}

function aSD() {
	var ak;
	10 === l.gF ? ak =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === l.gF ? ak =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === l.gF ? ak =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === l.gF ? ak =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === l.gF ? ak =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === l.gF ? ak =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === l.gF ? ak =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === l.gF ? ak =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === l.gF ? ak =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === l.gF ? ak =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === l.gF ? ak =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === l.gF ? ak =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === l.gF && (ak =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new nA).gP(ak)
}

function z7(aSE, aSF, aSG, c5) {
	var aSH = document.createElement("textarea"),
		aSI = (this.k = aSH, !0);

	function aSL() {
		aSH.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aSF && bK.en.r3(aSH, 5)
		}, this.z8 = function(cR) {
			aSH.value = cR
		}, this.yx = function() {
			return aSH.value
		}, this.aSJ = function() {
			aSH.select()
		}, this.clear = function() {
			aSH.value = ""
		}, this.aSK = function() {
			aSI && navigator.clipboard ? (aSH.select(), navigator.clipboard.writeText(aSH.value).catch(function() {
				aSI = !1, aSL()
			})) : aSL()
		}, aSH.setAttribute("id", "textArea" + h.bf.a10++), aSH.setAttribute("autocomplete", "off"), aSE && aSH.setAttribute("placeholder", aSE), aSH.style.top = "0", aSH.style.left = "0", aSH.style.width = "100%", aSH.style.height = "100%", aSH
		.style.userSelect = "none", aSH.style.outline = "none", aSH.style.resize = "none", aSH.style.border = "none", aSH.style.color = aB.i8, aSH.style.backgroundColor = aB.a11, c5 ? (aSH.style.fontSize = "1em", aSH.rows = 6, aSH.style.padding =
			"0.25em") : (aSH.style.padding = "0.45em", aSH.style.fontSize = "1.2em"), aSG && aSH.addEventListener("input", function(k) {
			aSG(k)
		}), aSH.addEventListener("focus", function() {
			aD.fo++
		}), aSH.addEventListener("blur", function() {
			aD.fo--
		})
}

function aIz() {
	function aSQ(player) {
		var m6;
		bK.dl.a8E(player) && (m6 = dA.k9[player] - dA.ox[player] + k2.a8C(player), ob.a7b(player, Math.abs(m6), m6 < 0 ? 18 : 12)), dA.k9[player] = 0, dA.ox[player] = 0
	}

	function aSV() {
		fP.show(!1, !1, !1, !0), mY.mV(), mv.wp.vT()
	}

	function aSO(player, a8H) {
		for (var aW = a8H.length - 1; 0 <= aW; aW--) k2.a88(a8H[aW], player)
	}

	function aSP(player) {
		var j9 = dA.j9,
			jA = dA.jA,
			jB = dA.jB,
			jC = dA.jC,
			aH = l.aH;
		if (dA.j8[player]) {
			dA.j8[player] = 0;
			for (var iw = j9[player], iz = jB[player], u = jA[player]; iw <= u; u--)
				for (var v = jC[player]; iz <= v; v--) {
					var nD = 4 * (v * aH + u);
					dK.yI(player, nD) && dK.yQ(nD)
				}
		}
		jA[player] = jC[player] = 0, j9[player] = jB[player] = Math.max(aH, l.aJ)
	}
	this.gc = function(nD) {
		var player, m6 = dA.j8[nD] + dA.xF[nD];
		d5.bf.d8[nD] ? m6 && (aSO(player = nD, k2.a8G(player)), oD.a42(player), aSP(player), a6l.aG7(player), k2.clear(player), aSQ(player), function(player) {
			dA.xF[player] = 0, dA.ks[player] = [], dA.kC[player] = [], dA.dB[player] = [], dA.jo[player] = []
		}(player)) : !m6 && dA.ks[nD].length || this.aSN(nD)
	}, this.aSN = function(player) {
		! function(player) {
			bK.dl.iS(player) || (dA.va[player] = l8.aA5.a6V(), d4.mN++);
			var a8H = k2.a8G(player);
			0 === a8H.length ? bK.dl.eW(player) && aSV() : (aSO(player, a8H), function(player, a8H) {
				var aSY = a8H[function(a8H) {
					var aW, cW = 0;
					for (aW = a8H.length - 1; 1 <= aW; aW--) dA.j8[a8H[aW]] > dA.j8[a8H[cW]] && (cW = aW);
					return cW
				}(a8H)];
				9 === d4.mr && (1 === jE.jF[player] ? kH.kV(8) && rU.aSZ(aSY) : k8.k1[player] && (eX.aSa(765, 0), eX.eY(280, L(260, [dA.vd[aSY], dA.vd[player]]), 765, aSY, aB.aC, aB.aSb, -1, !0)));
				if (bK.dl.eW(player)) aSV(), eX.a8F(aSY, 1);
				else {
					for (var aW = a8H.length - 1; 0 <= aW; aW--)
						if (bK.dl.a8E(a8H[aW]) && (ob.oy[4 - bK.dl.iS(player)]++, bK.dl.eW(a8H[aW]))) return eX.a8F(player, 0);
					bK.dl.iS(player) || eX.aSc(0, player, aSY)
				}
			}(player, a8H))
		}(player), oD.a42(player), aSP(player), aSQ(player),
			function(player) {
				dA.iR[player] = 0, dA.ks[player] = null, dA.kC[player] = null, dA.dB[player] = null, dA.jo[player] = null
			}(player), a6l.aG7(player), k2.clear(player), d5.aSU.hU(player)
	}
}

function aIq() {
	this.c = function() {
		if (0 === d4.data.sResourcesType) {
			for (var aSg = d4.j6, k9 = dA.k9, aW = 0; aW < aSg; aW++) k9[aW] = 512;
			var aSh = d4.aAi,
				zI = k8.zI,
				k1 = k8.k1;
			for (aW = aSg; aW < aSh; aW++) k9[aW] = zI[k1[aW]]
		} else(1 === d4.data.sResourcesType ? function() {
			for (var e4 = d4.aAi, k9 = dA.k9, sResourcesValue = d4.data.sResourcesValue, aW = 0; aW < e4; aW++) k9[aW] = sResourcesValue
		} : function() {
			for (var e4 = d4.aAi, k9 = dA.k9, sResourcesData = d4.data.sResourcesData, aW = 0; aW < e4; aW++) k9[aW] = sResourcesData[aW]
		})();
		ob.oy[8] = dA.k9[d4.jL]
	}
}

function aPg() {
	this.a20 = 0, this.c = function() {
		this.a20 = 0
	}, this.kK = function() {
		if (!this.a20 && n.kg() % 30 == 7 && bK.dl.aSk(90) && (kN.performance.a20 = 1)) {
			if (d4.jD) {
				var aHc = kk.a0u();
				if (jE.rG[aHc]) {
					kk.kl(aHc);
					var e7 = dF.kn,
						e4 = dF.km[0];
					if (0 !== e4)
						for (var aSn = Math.min(100 + 10 * (e4 - 1), 400), aW = 0; aW < e4; aW++) k8.zS(e7[aW], aSn)
				}
			}
			k8.zS(mp[0], 100)
		}
	}
}

function s4() {
	this.aSo = function() {
		var aW;
		if (gD.size < l7.eJ(23)) cr.bf.aBV(0, 3259);
		else {
			var l4 = gD.gE(6),
				e4 = gD.gE(10),
				data = [];
			if (9 === l4 || 10 === l4 || 11 === l4 || 13 === l4) {
				for (aW = 0; aW < e4; aW++) data.push([gD.gE(30), bE.gO.gP(5), gD.aA9(32), 0, gD.gE(30)]);
				8 === h.l2 && h.p7().a34(21, !0, {
					l4: l4,
					data: data
				})
			} else if (12 === l4) {
				for (aW = 0; aW < e4; aW++) data.push([gD.gE(20), gD.gE(30), gD.gE(30), gD.aA9(32), gD.gE(30), bE.gO.gP(5), bE.gO.gP(5)]);
				8 === h.l2 && h.p7().a34(21, !0, {
					l4: l4,
					data: data
				})
			} else {
				var aOp = gD.gE(16);
				if (gD.aAA(39 + 16 * aOp + e4 * (0 === l4 ? 111 : 1 === l4 ? 101 : 2 === l4 || 3 === l4 ? 127 : 212))) {
					if (0 === l4)
						for (aW = 0; aW < e4; aW++) data.push([gD.gE(30), bE.lM.a2E(gD.gE(5)), gD.gE(16), gD.gE(30), gD.gE(30)]);
					else if (1 === l4)
						for (aW = 0; aW < e4; aW++) data.push([gD.gE(16), bE.lM.a2E(gD.gE(3)), gD.gE(16), bE.lM.a2E(gD.gE(5)), gD.gE(31), gD.gE(30)]);
					else if (2 === l4 || 3 === l4)
						for (aW = 0; aW < e4; aW++) data.push([gD.gE(30), bE.lM.a2E(gD.gE(5)), gD.aA9(32), gD.gE(30), gD.gE(30)]);
					else
						for (aW = 0; aW < e4; aW++) data.push([gD.gE(20), gD.gE(30), gD.gE(30), gD.gE(30), gD.gE(30), gD.aA9(32), gD.gE(30), bE.lM.a2E(gD.gE(5)), bE.lM.a2E(gD.gE(5))]);
					8 === h.l2 && h.p7().a34(21, !0, {
						l4: l4,
						data: data
					})
				} else cr.bf.aBV(0, 3260)
			}
		}
	}, this.aSp = function() {
		if (gD.size < l7.eJ(29)) cr.bf.aBV(0, 3265);
		else {
			var aSq = gD.gE(4),
				aSr = gD.gE(7),
				aSs = gD.gE(11);
			if (gD.aAA(29 + 16 * aSr + 16 * aSs + 11 * aSq)) {
				for (var data = [], aW = 0; aW < aSq; aW++) {
					for (var vm = bE.lM.a2E(gD.gE(3)), aSt = gD.gE(8), aQT = [], ba = 0; ba < aSt; ba++) aQT.push(gD.gE(16));
					data.push({
						name: "[" + vm + "]",
						aQT: aQT
					})
				}
				8 === h.l2 && h.p7().a34(23, !0, data)
			} else cr.bf.aBV(0, 3266)
		}
	}
}

function pN() {
	var aSu;
	this.c = function() {
		aSu = !1
	}, this.kK = function() {
		var nD;
		if (function() {
				if (!aSu) {
					if (n.kg() % 30 != 9) return;
					if (!bK.dl.aSk(90)) return;
					aSu = !0
				}
				return 1
			}() && (! function() {
				var aX = eX.aT0(956);
				if (aX) {
					if (bK.dl.aHs(aX.player)) return 1;
					eX.aSa(956, 0)
				}
				return
			}() && (-1 === (nD = (d4.jD ? function() {
				var id = kk.a0u(),
					e4 = mK.mL;
				if (jE.rG[id])
					for (var oi = mK.my, jF = jE.jF, aW = 0; aW < e4; aW++) {
						var nD = oi[aW];
						if (jF[nD] !== id) return nD
					} else if (1 < e4) return mp[e4 - 1];
				return -1
			} : function() {
				for (var xE = mK.mL, xD = mK.my, aT3 = kE, aW = 0; aW < xE; aW++) {
					var nD = xD[aW];
					if (0 !== aT3[nD]) return nD
				}
				return -1
			})()) ? ! function() {
				var aX = eX.aT0(957);
				if (aX && aX.aT4) {
					if (dK.jQ(aX.aT4.dP << 2)) return 1;
					eX.aSa(957, 0)
				}
				return
			}() : (eX.eY(0, L(261, [dA.vd[nD]]), 956, nD, aB.i8, aB.ea, -1, !0), 0)))) {
			var e4 = kN.a1v.a1q;
			if (0 !== e4)
				for (var buffer = kN.a1v.buffer, aW = 0; aW < e4; aW++) {
					var dP = buffer[aW];
					if (dK.jQ(dP << 2)) return void eX.eY(0, L(262, [dI.jd(dP), dI.je(dP)]), 957, 0, aB.i8, aB.ea, -1, !0, void 0, {
						ba: 1,
						dP: dP
					})
				}
		}
	}
}

function a6A(data) {
	var eg, a7o;

	function aT5(yy, aTX) {
		if (!data.aBx) {
			if (data.aBk) {
				if (aTX) return
			} else {
				if (!aTX) return;
				if (data.qF < 1e4) return
			}
			var aTa, hn = new z1,
				aTY = 1e5 <= data.qF,
				aTZ = hn.z2(aTX ? (aTY ? "⚠️ " : "") + L(347) : L(348)),
				aTb = (aTY && (aTZ.style.color = "yellow"), aTX ? hn.a8K(L(349, [bK.bL.a0C(data.qF, .01, 0)])) : ((aTa = new a0w({
					value: data.aBl,
					cW: -1
				})).k.readOnly = !0, aTa.k.type = "password", hn.z5(aTa), hn.z5(new a7x([new ei(L(241), function(k) {
					return k.textContent === L(241) ? (k.textContent = L(242), aTa.k.type = "text") : (k.textContent = L(241), aTa.k.type = "password"), !0
				}).button, new ei(L(284), function(k) {
					return bK.en.aA2(aTa.k), bK.en.a8Q(k), !0
				}).button]))), hn.aNQ(L(aTX ? 348 : 350)).style.marginTop = "0.75em", new a0w({
					value: "",
					cW: -1
				}, 0, 0)),
				aTc = (aTb.k.type = "email", aTb.k.autocomplete = "email", aTb.k.name = "email", aTb.k.inputMode = "email", aTb.k.spellcheck = !1, hn.z5(aTb), hn.z5(new a7x([new ei(L(351), function(k) {
					return cr.rq.a30({
						action: 3,
						ak: aTb.k.value.trim().substring(0, 63)
					}), bK.en.a8Q(k), !0
				}).button])), aTX && hn.a8K(L(352)), hn.aNQ(L(353)).style.marginTop = "0.75em", new a0w({
					value: "",
					cW: -1
				}, 1));
			hn.z5(aTc), hn.z5(new a7x([new ei(L(354), function() {
				cr.rq.aKg({
					action: 4,
					bC: "",
					value: Math.floor(+aTc.k.value)
				}), h.gQ(8, h.p7().a1T, new l3(18))
			}).button])), yy.push(hn)
		}
	}
	this.show = function() {
		data.aBx && aGf.aGj("account", data.bC), eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(data.username, [new ei("⬅️ " + L(2), function() {
		aGf.clear(), h.ej()
	}), new ei(data.aBx ? "🔄 " + L(263) : L(264), function() {
		h.gQ(8, data.aBx ? h.p7().a1T : void 0, new l3(25, {
			action: 0,
			bC: data.bC,
			qA: data.qA
		}))
	}, 0, 0, 1)]), a7o = new ys(eg.em, function() {
		var yy = [];
		aT5(yy, 1), yy.push(function() {
				var hn = new z1;
				hn.z2(L(320)), data.aBk && (hn.aNQ("✅ " + L(321)).style.marginBottom = "0.75em");
				var vo = data.aBh;
				vo < 1 ? (hn.aNQ(L(322)), 0 === data.aBg ? hn.a8K(L(323)) : 1 === data.aBg ? hn.a8K(L(324)) : 2 === data.aBg ? hn.a8K(L(325)) : 3 === data.aBg ? hn.a8K(L(326)) : 4 === data.aBg ? hn.a8K(L(327)) : 5 === data.aBg ? hn.a8K(L(
					328)) : 6 === data.aBg ? hn.a8K(L(329)) : hn.a8K(L(330))) : (hn.aNQ(L(331)), vo = vo < 2 ? L(332) : vo < 61 ? 2 === vo ? L(333) : L(334, [vo - 1]) : vo < 84 ? 61 === vo ? L(335) : L(336, [vo - 60]) : vo < 255 ?
					84 === vo ? L(337) : L(338, [vo - 83]) : L(339), hn.a8K(vo));
				{
					var aNY, aNT;
					hn.z5(new z6), data.aBx && (aNY = hn.a8K(), hn.z5(new a7x([new ei(bn.ik.ay(data.bC) ? L(340) : L(341), function(k) {
						return bn.ik.wV(data.bC) ? (k.textContent = L(340), aNT(1)) : (k.textContent = L(341), aNT(0)), !0
					}).button])), aNT = function(hB) {
						aNY.textContent = hB ? L(342) : ""
					}, bn.ik.ay(data.bC) && aNT(1), hn.z5(new z6))
				}
				var a9q, a8S = new a0w({
					value: data.username,
					cW: -1
				});
				a8S.k.readOnly = !0, hn.z5(a8S), hn.z5(new a7x([new ei(L(284), function(k) {
					return bK.en.aA2(a8S.k), bK.en.a8Q(k), !0
				}).button])), data.aBx || hn.a8K(L(343));
				(data.aBm || data.aBn || data.aBo) && (hn.z5(new z6), hn.a8K(L(344)), data.aBm && (hn.a8K("• Account Timeout").style.color = "orange"), data.aBn && ((a9q = hn.a8K("• Muted")).style.color = "orange", a9q.style.marginTop =
					"0.5em"), data.aBo) && ((a9q = hn.a8K("• Redacted")).style.color = "orange", a9q.style.marginTop = "0.5em");
				data.aBx && (hn.z5(new z6), hn.aNQ(cr.bf.a2C("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", hn.z5(new a7x([new ei(L(345), function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 0
					}), bK.en.a8Q(k), !0
				}, aB.aQB).button])), hn.z5(new a7x([new ei(L(346), function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 1
					}), bK.en.a8Q(k), !0
				}, aB.aQB).button])), hn.z5(new a7x([new ei("Cheater", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 2
					}), bK.en.a8Q(k), !0
				}, aB.aQB).button])), hn.z5(new a7x([new ei("False Reporter", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 3
					}), bK.en.a8Q(k), !0
				}, aB.aQB).button])), vo = "CRTOR" === (vo = bn.buffer.data[105].value) || "ADMIN" === vo) && (hn.z5(new a7x([new ei("Block Account", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 4
					}), bK.en.a8Q(k), !0
				}, aB.aTW).button])), hn.z5(new a7x([new ei("Ban IP", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 5
					}), bK.en.a8Q(k), !0
				}, aB.aTW).button])), hn.z5(new a7x([new ei("Gold Seizure", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 6
					}), bK.en.a8Q(k), !0
				}, aB.aTW).button])), hn.z5(new a7x([new ei("Remove Punishments", function(k) {
					return cr.rq.aKg({
						action: 3,
						bC: data.bC,
						value: 7
					}), bK.en.a8Q(k), !0
				}, aB.aLP).button])));
				return hn
			}()),
			function(yy) {
				var hn, aNY, aNy, aTd, aNX, a7t, aNV;
				data.aBx || ((hn = new z1).z2(L(355)), (aNY = hn.a8K(data.aBc.length + " / 160")).style.textAlign = "center", aNy = !0, (aTd = new z7(0, 1, function(k) {
					k = k.target.value.length;
					aNY.textContent = k + " / 160", 160 < k ? aNy && (aNy = !1, a7t.tZ(1)) : aNy || (aNy = !0, a7t.tZ(0))
				})).k.rows = 6, aTd.k.style.fontSize = "1em", aTd.z8(data.aBc), hn.z5(aTd), 0 !== data.aBa ? (a7t = new ei(L(356), function() {
					if (!aNy) return !0;
					h.gQ(8, h.p7().a1T, new l3(29, {
						action: 1,
						ak: aTd.yx().substring(0, 160)
					}))
				}, 0, 0, 1), hn.z5(new a7x([a7t.button])), hn.z5(new a7x([new ei(1 === data.aBa ? L(357) : L(358), function() {
					h.gQ(8, h.p7().a1T, new l3(29, {
						action: 0,
						ak: ""
					}))
				}, 0, 0, 1).button])), hn.a8K(1 === data.aBa ? L(359, [data.aBd - 1]) : L(360, [data.aBd - 1])), hn.a8K(L(361, [data.aBb]))) : (aNX = new ei(L(362), function() {
					if (!aTd.k.readOnly) return !0;
					h.gQ(8, h.p7().a1T, new l3(29, {
						action: 1,
						ak: aTd.yx().substring(0, 160)
					}))
				}, 1), a7t = new ei(L(207), function(k) {
					if (k.textContent === L(207)) {
						if (!aNy) return !0;
						k.textContent = L(208), aTd.k.readOnly = !0, aNX.tZ(0), aNX.button.style.color = aB.tY
					} else aNV();
					return !0
				}), hn.z5(new a7x([a7t.button])), hn.a8K(L(361, [data.aBb])), aNV = function() {
					a7t.button.textContent = L(207), aTd.k.readOnly = !1, aNX.tZ(1), aNX.button.style.color = aB.i8
				}, hn.z5(new a7x([aNX.button]))), yy.push(hn))
			}(yy),
			function(yy) {
				var hn;
				data.aBx && 0 !== data.aBa && ((hn = new z1).z2(L(363)), hn.aTe(data.aBc), hn.z5(new a7x([new ei(L(364, 0, "Report"), function(k) {
					return cr.bf.a1X(0) && (bK.en.a8Q(k), cr.rq.a2y({
						action: 5,
						bC: data.bC
					})), !0
				}, 0, 0, 1).button])), yy.push(hn))
			}(yy), yy.push(function() {
				var hn = new z1,
					aTM = (hn.z2(L(265)), hn.aNQ(cr.bf.a2C("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(266), L(267), L(268), L(269), L(270), L(271), L(272), L(273), L(274), L(275), L(276), L(277), L(278), L(279)]),
					fn = data.aBe;
				return hn.aNQ(L(280) + bK.bL.a0C(data.qF, .01, 2) + "<br>" + L(281) + (fn + 1) + " / " + data.qE + "<br>" + L(282) + aTM[function(fn, qF) {
					if (fn < 10) return 0;
					if (fn < 30) return 1;
					if (fn < 60) return 2;
					if (3e4 <= (qF = eO.eP(qF, 100))) return 3;
					if (12e3 <= qF) return 4;
					if (7e3 <= qF) return 5;
					if (3e3 <= qF) return 6;
					if (1e3 <= qF) return 7;
					if (500 <= qF) return 8;
					if (200 <= qF) return 9;
					if (70 <= qF) return 10;
					if (20 <= qF) return 11;
					if (3 <= qF) return 12;
					return 13
				}(fn, data.qF)]), hn
			}()), data.aBx && yy.push(function() {
				var hn = new z1,
					a8S = (hn.z2(L(283)), hn.aNQ(cr.bf.a2C("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new a0w({
						value: bn.buffer.data[147].value,
						cW: -1
					}, 1, void 0, function(k) {
						bn.ih.pT(147, aNT(k.target.value))
					})),
					aNX = (hn.z5(a8S), new ei(L(179), function(k) {
						return a8S.k.readOnly && cr.bf.a1X(0) && (bK.en.a8Q(k), aNV(), cr.rq.aKg({
							action: 0,
							bC: data.bC,
							value: parseInt(bn.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					a7t = new ei(L(207), function(k) {
						return k.textContent === L(207) ? (k.textContent = L(208), a8S.k.readOnly = !0, aNX.tZ(0), aNX.button.style.color = aB.tY, bn.ih.pT(147, a8S.k.value), aNT(bn.buffer.data[147].value)) : aNV(), !0
					}),
					aNY = (hn.z5(new a7x([a7t.button])), hn.a8K()),
					aNT = function(hB) {
						aNY.innerHTML = h.bf.a2G(hB, bn.buffer.data[105].value, data.bC)
					},
					aNV = function() {
						a7t.button.textContent = L(207), a8S.k.readOnly = !1, aNX.tZ(1), aNX.button.style.color = aB.i8
					};
				return aNT(bn.buffer.data[147].value), hn.z5(new a7x([aNX.button])), hn
			}());
		yy.push(function() {
			var hn = new z1,
				a8S = (hn.z2(L(239)), new a0w({
					value: data.bC,
					cW: -1
				})),
				aTO = (a8S.k.readOnly = !0, hn.z5(a8S), hn.z5(new a7x([new ei(L(284), function(k) {
					return bK.en.aA2(a8S.k), bK.en.a8Q(k), !0
				}).button])), hn.z5(new z6), new a0w({
					value: data.bC,
					cW: -1
				}));
			return hn.z5(aTO), hn.z5(new a7x([new ei(L(285), function(k) {
				h.gQ(8, h.p7().a1T, new l3(25, {
					action: 0,
					bC: aTO.k.value,
					qA: 0
				}))
			}).button])), hn
		}()), data.aBx || (yy.push(function() {
			var hn = new z1,
				aOw = (hn.z2(L(240)), new a0w(bn.buffer.data[106])),
				customPasswordInput = (aOw.k.readOnly = !0, aOw.k.type = "password", hn.z5(aOw), hn.z5(new a7x([new ei(L(241), function(k) {
					return k.textContent === L(241) ? (k.textContent = L(242), aOw.k.type = "text") : (k.textContent = L(241), aOw.k.type = "password"), !0
				}).button, new ei(L(284), function(k) {
					return bK.en.aA2(aOw.k), bK.en.a8Q(k), !0
				}).button])), new a0w({
					value: "",
					cW: -1
				}));
			return customPasswordInput.k.placeholder = "Custom new password (optional)", hn.z5(customPasswordInput), hn.z5(new a7x([new ei(L(286), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.k.value) && h.gQ(8, h.p7().a1T, new l3(15))
			}).button])), hn.z2(L(243), "0.8em"), hn.a8K(L(287)), hn.a8K(L(288)), hn.a8K(L(289)), hn
		}()), yy.push(function() {
			var hn = new z1;
			return hn.z2(L(290)), hn.z5(new a7x([new ei(L(291), function() {
				h.gQ(6, h.p7().a1T)
			}).button])), hn.z5(new a7x([new ei(L(292), function() {
				bn.ih.pT(105, ""), h.gQ(8, h.p7().a1T, new l3(18))
			}).button])), hn.z5(new a7x([new ei(L(293) + bn.buffer.data[105].value, function() {
				h.gQ(4, 0, new ec(L(294), L(295), !0, [new ei("⬅️ " + L(2), function() {
					h.gQ(7, h.x1(7).a1T)
				})]))
			}, aB.aQB).button])), hn
		}()), yy.push(function() {
			function aTR(cW) {
				aTQ[0].tZ(0 === cW ? aB.th : aB.a3A), aTQ[1].tZ(0 === cW ? aB.th : aB.aQB)
			}
			var aTP, aTQ, hn = new z1;
			hn.z2(L(299)), hn.a8K(L(300)), bn.bf.a92();
			return aTQ = [new ei(L(238), function() {
				var cW = Math.min(bn.buffer.data[117].value, aTP.aTS.length - 1);
				cW < 1 || (cW = bn.bf.a36(cW), bn.ih.pT(105, cW.bC), bn.ih.pT(106, cW.password), h.gQ(8, h.p7().a1T, new l3(18)))
			}, aB.th, 1), new ei(L(298), function() {
				var cW = Math.min(bn.buffer.data[117].value, aTP.aTS.length - 1);
				if (!(cW < 1)) {
					aTP.aTS[cW].remove(), aTP.aTS.splice(cW, 1);
					for (var aW = cW; aW < aTP.aTS.length; aW++) aTP.aTS[aW].name = "" + aW;
					bn.bf.a35(cW), cW = bn.buffer.data[117].value, aTP.aTS[cW].textContent = aTP.aTS[cW].textContent.replace("⚪", "🟢"), aTR(cW)
				}
			}, aB.th, 1)], aTP = new z4(bn.buffer.data[117], aTR), __fx.savedAccounts.decorate(aTP.aTS, bn.buffer.data[117].c3), aTR(0), aTP.aTS[0].style.marginTop = "0.5em", hn.z3(aTP), hn.z5(new a7x([aTQ[0].button])), hn.z5(
				new a7x([new ei("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bn.buffer.data[117].value)
				}).button])), hn.z5(new a7x([aTQ[1].button])), hn
		}()));
		return yy.push(function() {
				var aTT, hn = new z1;
				return hn.z2("Report Power"), aTT = 1 / (aTT = 1 - .95 * Math.max((10 - Math.sqrt(data.aBX)) / 10, 0)), hn.aNQ("Power: " + bK.bL.bB(data.aBp) + "<br>Remaining Reports ≈ " + Math.floor(aTT * Math.max(30 - data.aBq, 0))), hn
			}()), yy.push(function() {
				var hn = new z1,
					aTM = (hn.z2(L(304)), [L(305), L(306), L(307), L(308)]),
					fn = data.aBf;
				return hn.aNQ(L(309) + (data.vO / 100).toFixed(2) + "<br>" + L(281) + (fn + 1) + " / " + data.qE + "<br>" + L(282) + aTM[fn < 10 ? 0 : fn < 50 ? 1 : fn < 200 ? 2 : 3]), hn
			}()), yy.push(function() {
				var hn = new z1;
				return hn.z2(L(301)), hn.aNQ(L(302) + bK.bL.a0C(data.qB, .1, 1) + "<br>" + L(281) + (data.qC + 1) + " / " + data.qE + "<br>" + L(303) + data.qD), hn
			}()),
			function(yy) {
				var hn = new z1,
					aTf = data.qI,
					aTg = (hn.z2(L(365)), hn.aNQ(L(366, [data.qG.length ? "[" + data.qG + "]" : "-"])), hn.aNQ(L(367, [bK.bL.a0C(aTf, .01, 2)])), hn.aNQ(L(368, [data.qK + 1 + " / " + data.qE])), data.qL),
					aTh = (hn.aNQ(L(369, [bK.bL.a0C(aTg, .1, 1)])), data.qN);
				hn.aNQ(L(370, [aTh])), hn.aNQ(L(371, [bK.bL.a0C(aTg / Math.max(aTh, 1), .1, 2)])), aTf = data.qJ, hn.z2(L(372), "0.8em"), hn.aNQ(L(366, [data.qH.length ? "[" + data.qH + "]" : "-"])), hn.aNQ(L(367, [bK.bL.a0C(aTf, .01, 2)])),
					aTg = data.qM, hn.aNQ(L(369, [bK.bL.a0C(aTg, .1, 1)])), aTh = data.qO, hn.aNQ(L(370, [aTh])), hn.aNQ(L(371, [bK.bL.a0C(aTg / Math.max(aTh, 1), .1, 2)])), hn.aNQ(cr.bf.a2C("/wiki/clans"), "0.75em").style.marginTop =
					"0.8em", yy.push(hn)
			}(yy),
			function(yy) {
				var hn = new z1;
				hn.z2(L(373)), hn.aNQ(L(309) + (data.aBY / 10).toFixed(1) + "<br>" + L(282) + (data.aBZ.length ? L(374, [data.aBZ]) : L(375))), data.aBx && hn.z5(new a7x([new ei(L(318), function(k) {
					return cr.bf.a1X(0) && (bK.en.a8Q(k), cr.rq.a2y({
						action: 4,
						bC: data.bC
					})), !0
				}, 0, 0, 1).button]));
				hn.aNQ(cr.bf.a2C("/wiki/clans"), "0.75em").style.marginTop = "0.8em", yy.push(hn)
			}(yy), yy.push(function() {
				var hn = new z1;
				{
					var a8S, a7t, aTU, aNY, aNT, aNV;
					hn.z2(L(316)), hn.aNQ(L(317) + data.aBW + "<br>" + L(281) + (data.aBX + 1) + " / " + data.qE + "<br>" + L(282) + aIg.a1B(data.aBX)), data.aBx && ((a8S = new a0w({
						value: bn.buffer.data[157].value,
						cW: -1
					}, 1, void 0, function(k) {
						bn.ih.pT(157, aNT(k.target.value))
					})).k.style.marginTop = "0.6em", hn.z5(a8S), a7t = new ei(L(207), function(k) {
						return k.textContent === L(207) ? (k.textContent = L(208), a8S.k.readOnly = !0, aTU[0].tZ(0), aTU[0].button.style.color = aB.tY, aNT(bn.buffer.data[157].value)) : aNV(), !0
					}), hn.z5(new a7x([a7t.button])), aTU = [new ei(L(318), function(k) {
						return a8S.k.readOnly && cr.bf.a1X(0) && (bK.en.a8Q(k), aNV(), cr.rq.aKg({
							action: 1,
							bC: data.bC,
							value: eO.h2(parseInt(bn.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], aNY = hn.a8K(), aNT = function(hB) {
						return hB = bK.dl.a2H(hB, 2, 3e4), aNY.textContent = L(319, [hB - 1, hB, bn.buffer.data[105].value]), hB
					}, hn.z5(new a7x([aTU[0].button])), aNV = function() {
						a7t.button.textContent = L(207), a8S.k.readOnly = !1, aTU[0].tZ(1), aTU[0].button.style.color = aB.i8
					}, aNT(bn.buffer.data[157].value))
				}
				return hn
			}()),
			function(yy) {
				var hn, aA1;
				data.aBx && !data.aBr || (0 === bx.id || data.aBx || data.aBr) && ((hn = new z1).z2("Patreon"), !data.aBx && data.aBs ? hn.z5(new a7x([new ei(L(241), function() {
					cr.rq.a2y({
						action: 7,
						bC: data.bC
					}), data.aBs = 0, h.gQ(7)
				}).button])) : data.aBr ? (hn.aNQ(L(376, [(data.aBt / 100).toFixed(2)]) + "<br>" + L(377, [1 + data.aBu + " / " + data.aBv]) + "<br>" + L(378, [data.aBw ? L(379) : L(380)])), data.aBx || hn.z5(new a7x([new ei(L(381),
					function() {
						cr.rq.a2y({
							action: 8,
							bC: data.bC
						}), data.aBr = 0, bn.ih.pT(160, 0), h.gQ(7)
					}).button]))) : (hn.aNQ(L(382), "0.75em").style.marginBottom = "0.3em", hn.aNQ("  • " + L(383), "0.75em").style.whiteSpace = "pre", hn.aNQ("  • " + L(384), "0.75em").style.whiteSpace = "pre", hn.aNQ("  • " + L(
						385), "0.75em").style.whiteSpace = "pre", hn.aNQ(L(386), "0.75em").style.marginTop = "1.0em", hn.aNQ(L(387), "0.75em").style.marginTop = "1.0em", hn.aNQ("<a href='" + aCM.aOh +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aA1 = "https://www.patreon.com/oauth2/authorize?state=" + data.bC +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + cr.bf.aGW() + "/", hn.aNQ(L(388), "0.75em").style.marginTop = "1.0em", hn.aNQ("<a href='" +
						aA1 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aBx || (hn.z5(new z6), hn.z5(new a7x([new ei(L(242), function() {
						cr.rq.a2y({
							action: 6,
							bC: data.bC
						}), data.aBs = 1, h.gQ(7)
					}).button])), hn.aNQ(L(389), "0.75em").style.marginTop = "0.75em")), yy.push(hn))
			}(yy), yy.push(function() {
				var hn = new z1,
					aTM = (hn.z2(L(310)), [L(311), L(312), L(313), L(314), "Scout", L(315)]),
					fn = data.aBi;
				return hn.aNQ(L(309) + (data.aBj / 100).toFixed(2) + "<br>" + L(281) + (fn + 1) + " / " + data.qE + "<br>" + L(282) + aTM[fn < 3 ? 0 : fn < 20 ? 1 : fn < 100 ? 2 : fn < 500 ? 3 : fn < 2e3 ? 4 : 5]), hn.aNQ(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", hn
			}()),
			function(yy) {
				var hn, aTP, aTQ, cW, aTR;
				data.aBx || bn.ik.get().length && ((hn = new z1).z2(L(296)), cW = 0, aTR = function() {
					var jr = bn.ik.get().length;
					aTQ[0].tZ(cW === jr ? aB.th : aB.a3A), aTQ[1].tZ(cW === jr ? aB.th : aB.aQB)
				}, aTQ = [new ei(L(297), function() {
					h.gQ(8, void 0, new l3(25, {
						action: 0,
						bC: bn.ik.get()[cW],
						qA: 0
					}))
				}, aB.th, 1), new ei(L(298), function() {
					bn.ik.wZ(cW), aTP.aTS[cW].remove(), aTP.aTS.splice(cW, 1);
					for (var aW = cW; aW < aTP.aTS.length; aW++) aTP.aTS[aW].name = "" + aW;
					bn.ik.get().length && (cW = Math.max(cW - 1, 0), aTP.aTS[cW].textContent = aTP.aTS[cW].textContent.replace("⚪", "🟢")), aTR()
				}, aB.th, 1)], aTR(), aTP = new z4(bn.ik.wU(), function(aW) {
					cW = aW, aTR()
				}), __fx.followedAccounts.decorate(aTP.aTS, bn.ik.get()), aTP.aTS[0].style.marginTop = "0.5em", hn.z3(aTP), hn.z5(new a7x([aTQ[0].button])), hn.z5(new a7x([new ei("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(cW)
				}).button])), hn.z5(new a7x([aTQ[1].button])), yy.push(hn))
			}(yy), aT5(yy, 0), yy
	}())
}

function bs() {
	var uq = 0,
		aTi = 0,
		aTj = 0,
		aTk = null,
		aTl = null;

	function aTp(aX, aTq, aTr) {
		var ak = aX.username;
		return (ak += "   " + an.ao.aTs(aX.aq, aX.ar, aX.aKd)) + function(aX) {
			aX = aX.qF;
			if (aX < 1e3) return "   Gold: " + aX;
			if ((aX %= 1024) < 1e3) return "   Gold: " + aX + "k";
			return "   Gold: " + (aX - 999) + "M"
		}(aX) + ("   IP: " + b9.bA.bB(aX.aRg, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aTr ? aTi : aTo(aX, aTq)])
	}

	function aTo(aX, aTq) {
		return aTi = aTq || an.bG.bH(aX.bC) ? 1 : 0
	}
	this.aTm = 0, this.aTn = function() {
		!uq || aTi === aTo(aTl) && aTj === aTl.qF || (aTj = aTl.qF, aTk.show(-1, -1, aTp(aTl, 0, 1), 1, 1, aTl.color))
	}, this.b4 = function(k, aX, aTq) {
		var a5U = k.getBoundingClientRect();
		this.show(a5U.left, a5U.top, aX, 0, aTq), k.addEventListener("mouseleave", function remove() {
			k.removeEventListener("mouseleave", remove), an.b3 && an.b3.s(1)
		}), this.aTm = aTq
	}, this.show = function(u, v, aX, uu, aTq) {
		aTk = aTk || new un, aTj = (aTl = aX).qF, aTk.show(u, v, aTp(aX, aTq), uu, 0, aTl.color), uq = 1
	}, this.s = function(v0) {
		this.aTm = 0, aTk && aTk.s(v0) && (uq = 0, aTl = null)
	}
}

function sP(sB) {
	var sC = document.createElement("div"),
		sH = document.createElement("div");
	this.wY = function() {
			sH.textContent = "", an.b3.aTm && an.b3.s(1);
			for (var aKy = document.createDocumentFragment(), aTu = an.bf.aE2[0], bG = an.bG.aCG[aTu], gM = an.bG.gM[aTu], aW = 0; aW < bG.length; aW++) ! function(aKy, aX, aTw, aTu) {
				var au = document.createElement("span");
				au.textContent = (aTw ? "🟢 " : "⚪ ") + an.ao.aTx(aX, aTu), au.style.color = an.ao.aw(aX.aq), 11 === aX.aq && (au.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				au.style.cursor = "pointer", au.style.margin = "0.2em 0.2em 0.2em 0.2em", au.style.width = au.style.maxWidth = 2 === aTu ? "10em" : "9em", au.style.height = au.style.maxHeight = "1.4em", au.style.whiteSpace = "nowrap", au.style
					.overflow = "hidden", au.style.textOverflow = "ellipsis", au.style.font = "inherit", au.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (aTw = __fx.utils.getDuplicateIpHighlightColor(aX, an.bG.aCG[aTu],
						"aRg")) && (au.style.backgroundColor = aTw, au.style.borderRadius = "0.3em");
				an.ao.ax(aX) && (au.style.textDecoration = "underline"), aX.ay && (au.style.textDecorationLine = "underline", au.style.textDecorationStyle = "dotted");
				au.onclick = function(k) {
					sB(k, aX)
				}, b1.b2() || (au.onmouseover = function(k) {
					an.b3.b4(k.target, aX, 1)
				}), aKy.appendChild(au)
			}(aKy, bG[aW], aW < gM, aTu);
			sH.appendChild(aKy)
		}, this.show = function(n7) {
			n7.appendChild(sC)
		}, this.s = function(n7) {
			h.removeChild(n7, sC)
		}, this.resize = function() {
			sH.style.fontSize = bK.en.ju(bK.en.jx(.02, .3))
		}, sC.style.top = "0", sC.style.left = "0", sC.style.width = sC.style.height = "100%", sC.style.overflowX = "hidden", sC.style.overflowY = "auto", sC.style.font = "inherit", sH.style.font = "inherit", sH.style.margin = "0.4em", sC
		.appendChild(sH)
}

function aJR() {
	var u, v, aF, sc, aTy, aTz, aU0, aU1, aU2, aE, aA1, uF;
	this.fd = !1, this.c = function(ak, aU3) {
		if (1 === bx.id && 13 <= bx.hr && bx.hr < 18) return aU3 ? void(aA1 = ak) : aA1 !== ak ? void 0 : void bx.a99.saveString(200, ak);
		aU3 && (aA1 = ak, (uF = document.createElement("a")).appendChild(document.createTextNode(aA1)), this.fd = !0, uF.title = aA1, uF.target = "_blank", uF.href = aA1, uF.style.textAlign = "center", uF.style.color = aB.i8, uF.style.position =
			"absolute", uF.style.padding = "0px", uF.style.margin = "0px", this.resize(), document.body.appendChild(uF), n.a5 = !0)
	}, this.s = function() {
		return !(!this.fd || (h.removeChild(document.body, uF), this.fd = !1))
	}, this.t = function(aCR, aCS) {
		return !!this.fd && ((aCR < u || aCS < v || u + aE < aCR || v + aF < aCS || u + aE - sc < aCR && aCS < v + sc) && (n.a5 = !0, this.fd = !1, h.removeChild(document.body, uF)), !0)
	}, this.resize = function() {
		var hy, a4r;
		this.fd && (aU1 = Math.floor(.8 * (bx.by.i2() ? aD.aE > aD.aF ? .6 : .55 : .4) * aD.lh), sc = Math.floor(.15 * aU1), aTy = Math.floor(.35 * sc), aTz = Math.floor(.5 * sc), aU0 = Math.floor(2.5 * aTz), aF = sc + aTy + 3 * aTz, hy = bK.en
			.i3(1, aTy / aD.fJ), aU2 = Math.floor(aD.fJ * oC.measureText(aA1, hy)), a4r = aE = (aU1 < aU2 ? aU2 : aU1) + 2 * aU0, aE = Math.min(aE, aD.aE - 2 * (bx.by.i2() ? 2 : 1) * iN.gap), hy = bK.en.i3(1, aE / a4r * aTy / aD.fJ), aU2 =
			Math.floor(aD.fJ * oC.measureText(aA1, hy)), u = Math.floor((aD.aE - aE) / 2), v = Math.floor((aD.aF - aF) / 2), uF.style.font = hy, uF.style.top = Math.floor((v + 1.4 * aTz + sc) / aD.fJ) + "px", uF.style.left = Math.floor((u + (
				aE - aU2) / 2) / aD.fJ) + "px")
	}, this.a6 = function() {
		this.fd && (a7.fillStyle = aB.ea, a7.fillRect(u, v + sc, aE, aF - sc), a7.fillStyle = aB.aU4, a7.fillRect(u, v, aE, sc), a7.fillStyle = aB.i8, a7.lineWidth = iN.iV, a7.strokeStyle = aB.i8, a7.strokeRect(u, v, aE, aF), a7.fillRect(u, v +
			sc, aE, iN.iV), a7.font = bK.en.i3(1, .48 * sc), bK.en.textAlign(a7, 1), bK.en.textBaseline(a7, 1), a7.fillText(L(390), Math.floor(u + (aE - .5 * sc) / 2), Math.floor(v + .55 * sc)), fT.iT(Math.floor(u + aE - .8 * sc), Math
			.floor(v + .25 * sc), Math.floor(.5 * sc)), a7.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aF5() {
	var aEj = 12e3;
	this.show = function(aU5) {
		return !aU5 && !c0.aEl() && (0 === bx.id ? c0.aF6.show() : !(n.o < aEj) && (aU5 = 1 === bx.id ? 72e4 : 108e4, aEj = n.o + aU5, 2 === lT.uc) && bx.by.aU6(Math.floor(aU5)))
	}
}

function aU7() {
	var aU8;
	this.c = function() {
		if (!aU8) {
			aU8 = new Array(jE.rF.length);
			for (var aW = 0; aW < aU8.length; aW++) aU8[aW] = ip.bf.rH(20, jE.rF[aW])
		}
	}, this.a6 = function() {
		var aUA = iy;
		if (!(5 <= aUA)) {
			var aUB = aD.aE,
				aUC = aD.aF,
				iw = ix / aUA,
				iz = j0 / aUA,
				j1 = (aUB + ix) / aUA,
				j2 = (aUC + j0) / aUA,
				j3 = -20 * aUA,
				aUD = .5 * j3,
				aUE = l.aH << 4,
				e4 = d5.bf.d6,
				dh = d5.bf.dh,
				dn = d5.bf.dn,
				y7 = jE.y7,
				pt = aU8,
				rL = a7;
			3 < aUA && (rL.globalAlpha = .5 * (5 - aUA));
			for (var aW = 0; aW < e4; aW++) {
				var aI3 = dh[aW],
					u = aUB * (aI3 % aUE / 16 - iw) / (j1 - iw) + aUD,
					aI3 = aUC * (Math.floor(aI3 / aUE) / 16 - iz) / (j2 - iz) + aUD;
				aUB < u || aUC < aI3 || u < j3 || aI3 < j3 || (rL.setTransform(aUA, 0, 0, aUA, u, aI3), u = pt[y7[dn[aW] >> 3]], rL.drawImage(u, 0, 0))
			}
			rL.globalAlpha = 1, rL.setTransform(aUA, 0, 0, aUA, 0, 0)
		}
	}
}

function a67() {
	var yo, aSH;

	function aUH() {
		h.i();
		var ak = uY.pG(aSH.yx());
		(d4.fL && 0 < ak.length && ak === uY.p0.aUJ || uY.p4.gP(ak)) && uY.p9()
	}
	this.show = function(aGh) {
		this.p8(aGh), yo.show(), this.resize()
	}, this.p8 = function(aGh) {
		0 === d4.fL ? aGh ? aSH.z8(aGh) : d4.aUI.length && aSH.z8(d4.aUI) : (d4.g2 || (uY.p0.aUJ = uY.p2.iX()), aSH.z8(uY.pH(uY.p0.aUJ)))
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), aSH.resize()
	}, this.j = function(ag) {
		2 === ag ? yo.eo[0].ep() : aUH()
	}, yo = new ek(L(218), [new ei("⬅️ " + L(2), function() {
		h.a6R(1)
	}), new ei(L(391), function() {
		aSH.aSJ()
	}), new ei(L(392), function() {
		aSH.aSK()
	}), new ei(L(393), function() {
		aSH.clear()
	}), new ei(L(394), function() {
		aUH()
	})]), aSH = new z7(L(395)), yo.em.appendChild(aSH.k)
}

function aUK() {
	var aUL = [];
	this.c = function() {
		aUL = []
	}, this.eE = function() {
		return 65536 === aUL.length
	}, this.aGs = function(aGq, aGl) {
		for (var e8 = aUL, e4 = e8.length, aW = 0; aW < e4; aW++) {
			var nD = e8[aW];
			if (nD[0] === aGq && nD[nD.length - 1] === aGl) return aW
		}
		return -1
	}, this.e9 = function(dx) {
		var aUM = new Uint32Array(dx.length);
		return aUM.set(dx), aUM.reverse()
	}, this.aOM = function(nd, ne) {
		var hD = nd.length - 1,
			aUN = new Uint32Array(hD + ne.length);
		return aUN.set(nd, 0), aUN.set(ne, hD), aUN
	}, this.aOR = function(nd, ne, a96, dP, aUO) {
		aUO && (a96 = (ne = this.e9(ne)).length - a96 - 2);
		aUO = ne.subarray(a96 + 1 + (dP === ne[a96 + 1])), dP = new Uint32Array(nd.length + aUO.length);
		return dP.set(nd, 0), dP.set(aUO, nd.length), dP
	}, this.aGt = function(dx) {
		return aUL.push(dx), aUL.length - 1
	}, this.get = function(aW) {
		return aUL[aW]
	}, this.aUQ = function() {
		return aUL
	}, this.aUR = function(aGq, aGl) {
		return null
	}
}

function bp() {
	var a13 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aUS = [aB.aUT, aB.aUT, aB.aUU, aB.aUV, aB.aUW, aB.aUX, aB.aUY, aB.aUU, aB.aUZ, aB.tY, aB.aUa, aB.aC],
		aUb = [
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
		aUc = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aUh(gh, bC, aUj) {
		for (var eN = gh.length - 1; 0 <= eN; eN--) {
			var aX = gh[eN];
			0 === aX.id && aX.bC === bC && (aX.af = "[Redacted Message]", aUj) && (aX.b8 = 1)
		}
	}
	this.bZ = function(ab) {
		var aUd, vo;
		return ab.id < 5 && (aUd = "@" + b9.bA.bB(ab.bC, 5)), 0 === ab.id ? aUd + ": " + ab.af : 1 === ab.id ? (vo = "@" + b9.bA.bB(ab.target, 5), 0 === ab.bR ? 32768 <= ab.value ? aUd + " voted with " + (ab.value - 32768 + 1) +
				" gold against " + vo + " to weaken the latter's admin position. 📉" : aUd + " voted with " + (ab.value + 1) + " gold for " + vo + " to strengthen the latter's admin position. 💪" : 1 === ab.bR ? aUd + " sent " + Math.floor(ab
					.value / 100) + " 🧈 gold to " + vo + "." : aUd + " voted with " + (ab.value / 10).toFixed(1) + " points for " + vo + " to acknowledge the latter as clan leader. ✅") : 2 === ab.id ? 0 === ab.bR ? aUd +
			" was 🔇 muted for 1 Hour." : 1 === ab.bR ? "The username of " + aUd + " was ✂️ redacted. Duration: 1 Day" : aUd + " 👢 was kicked." : 3 === ab.id ? aUd + aIg.a1C(ab.bR, aIg.a18[ab.bR][ab.value]) + "@" + b9.bA.bB(ab.target, 5) + aIg
			.a1E(ab.bR, aIg.a18[ab.bR][ab.value]) : 4 === ab.id ? aUd + aIg.a1C(5, aIg.a18[5][ab.bR]) + "@" + b9.bA.bB(ab.target, 5) + aIg.a1E(5, aIg.a18[5][ab.bR]) : 5 === ab.id ? aUc[ab.bR] : 6 === ab.id ? "You are about to mention " + ab
			.value + " player" + (1 === ab.value ? "" : "s") + ". This action will cost " + (Math.max(10 * ab.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === ab.id ? ab.af : void 0
	}, this.bY = function(ab, wM) {
		return {
			ab: ab,
			af: wM,
			ae: 0,
			fontSize: 1,
			ac: 0,
			bD: ab.id ? aB.aUe : aB.i8
		}
	}, this.aTx = function(player, gg) {
		return (2 === gg ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.aw = function(aq) {
		return aUS[aq]
	}, this.ap = function(aq, ar) {
		return aq < 3 || 7 === aq ? aUb[aq][0] : 4 === aq ? aUb[aq][ar < 1 ? 0 : ar < 10 ? 1 : 2] : aUb[aq][ar < 10 ? 0 : 1]
	}, this.at = function(ar) {
		return 0 === ar
	}, this.bH = function(gg, bC) {
		for (var aCG = an.bG.aCG, bG = aCG[gg], e4 = bG.length, aW = 0; aW < e4; aW++)
			if (bC === bG[aW].bC) return bG[aW];
		for (var eN = 0; eN < aCG.length; eN++)
			if (gg !== eN)
				for (e4 = (bG = aCG[eN]).length, aW = 0; aW < e4; aW++)
					if (bC === bG[aW].bC) return bG[aW];
		return null
	}, this.ax = function(aX) {
		return !!an.be && aX.bC === an.be.bC
	}, this.aEN = function(bG, aUf, aUg) {
		var vl = [];
		loop: for (var aW = aUf; aW < aUg; aW++) {
			var vm = bK.bL.vn(bG[aW].username);
			if (vm) {
				for (var eN = vl.length - 1; 0 <= eN; eN--)
					if (vm === vl[eN].name) {
						vl[eN].hD++;
						continue loop
					} vl.push({
					name: vm,
					hD: 1
				})
			}
		}
		if (vl.sort(function(ba, eN) {
				return eN.hD - ba.hD
			}), 0 === vl.length) return "";
		for (var ak = vl[0].name + ": " + vl[0].hD, aW = 1; aW < vl.length; aW++) ak += "   " + vl[aW].name + ": " + vl[aW].hD;
		return ak
	}, this.aTs = function(aq, ar, aKd) {
		return 0 === a13[aq].length ? "Rank: " + (ar + 1) : a13[aq] + " Rank: " + (ar + 1) + (3 !== aq && aKd < 100 ? "   " + a13[3] + " Rank: " + (aKd + 1) : "")
	}, this.bb = function(bC) {
		for (var gB = an.bf.gB, aW = 0; aW < gB.length; aW++) aUh(gB[aW].gh, bC);
		aUh(an.message.aUi(), bC, 1), an.bh.bb(bC)
	}
}

function aJK() {
	this.iV = 0, this.gap = 0, this.jv = 0, this.n9 = 0, this.c = function() {
		this.resize()
	}, this.resize = function() {
		this.iV = .0022 * bK.en.a9s(.5) * aD.lh, this.jv = this.iV / aD.fJ, this.gap = Math.max(Math.floor((bx.by.i2() ? .0114 : .01296) * aD.lh), 2), this.n9 = this.gap / aD.fJ
	}
}

function aJN() {
	function aCy(u, e4, v, mw, aCv, jp) {
		if (!(v < 1 || aCv < v))
			for (var aW = 0; aW <= e4; aW++) {
				var aK = dI.aD9(u, v);
				if (mw(aK)) return aK >> 2;
				u += jp
			}
		return -1
	}

	function aD3(v, e4, u, mw, aCu, jp) {
		if (!(u < 1 || aCu < u)) {
			e4 = Math.max(e4, 0);
			for (var aW = 0; aW <= e4; aW++) {
				var aK = dI.aD9(u, v);
				if (mw(aK)) return aK >> 2;
				v += jp
			}
		}
		return -1
	}

	function aD7(aCx, aCz, dD) {
		return -1 !== aCz && (-1 === aCx || dI.aD8(aCz, dD) < dI.aD8(aCx, dD)) ? aCz : aCx
	}
	this.zf = function(dD) {
		return this.wo(dD, function(aK) {
			return dK.dL(aK)
		})
	}, this.zk = function(dD) {
		return this.wo(dD, function(aK) {
			return dK.yB(aK, d4.jL)
		})
	}, this.wo = function(dD, mw) {
		return function(dD, aCp, mw) {
			for (var zV = dI.jd(dD), zX = dI.je(dD), aCu = l.aH - 2, aCv = l.aJ - 2, aCw = -1, bX = 0; bX < aCp; bX++) {
				var a0j = Math.max(zV - bX, 1),
					a0k = Math.max(zX - bX, 1),
					a0l = Math.min(zV + bX, aCu),
					a0c = Math.min(zX + bX, aCv),
					aCx = aCy(zV, a0l - zV, zX - bX, mw, aCv, 1),
					aCz = aCy(zV - 1, zV - a0j - 1, zX - bX, mw, aCv, -1),
					a0l = aCy(zV, a0l - zV, zX + bX, mw, aCv, 1),
					a0j = aCy(zV - 1, zV - a0j - 1, zX + bX, mw, aCv, -1),
					aD2 = aD3(zX, a0c - zX - 1, zV - bX, mw, aCu, 1),
					aD4 = aD3(zX - 1, zX - a0k - 2, zV - bX, mw, aCu, -1),
					a0c = aD3(zX, a0c - zX - 1, zV + bX, mw, aCu, 1),
					a0k = aD3(zX - 1, zX - a0k - 2, zV + bX, mw, aCu, -1);
				if (aCw = aD7(aCw, aCx, dD), aCw = aD7(aCw, aCz, dD), aCw = aD7(aCw, a0l, dD), aCw = aD7(aCw, a0j, dD), aCw = aD7(aCw, aD2, dD), aCw = aD7(aCw, aD4, dD), aCw = aD7(aCw, a0c, dD), 0 <= (aCw = aD7(aCw, a0k, dD)) && bX * bX >= dI
					.aD8(aCw, dD)) return aCw
			}
			return -1
		}(dD, dI.eB(), mw)
	}
}

function a6F() {
	var yo, yp, yy;

	function aUn() {
		var hD;
		1 === d4.data.gameMode ? (d4.data.teamPlayerCount || (d4.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), d4.pD.aNa()), hD = bK.nU.hC(d4.data.teamPlayerCount, 0), d4.data.numberTeams = hD) : (2 === d4.data
			.botDifficultyType && (d4.data.botDifficultyType = 0), 1 === d4.data.spawningType && (d4.data.spawningType = 0))
	}

	function yr() {
		1 !== d4.data.gameMode && (d4.data.teamPlayerCount = null), aUp(), d4.data.canvas = null, h.gQ(5, 5)
	}

	function aUp() {
		uY.p0.c(), bn.ih.pT(156, uY.p2.iX())
	}

	function aUl() {
		d4.data.isReplay = 0, aUp(), d4.pD.aUq(), bz.g(), d4.pD.pE(), d4.data.canvas = 2 === d4.data.mapType ? l.aL : null, d4.pF(), d4.pC = 1
	}

	function aV2() {
		aUn();
		for (var e7 = [aUt(), aUu(), aUv()], aW = 3; aW < 6; aW++) h.removeChild(yp.n8, yp.aOr[aW].aY), yp.aOr[aW] = e7[aW - 3], yp.n8.appendChild(yp.aOr[aW].aY);
		yp.resize()
	}

	function aUt() {
		var aV3, hn = new z1;
		return hn.z2(L(211)), aV3 = 0 === d4.data.gameMode ? [L(201), L(39)][d4.data.colorsType] : d4.data.numberTeams + " Team" + (1 === d4.data.numberTeams ? "" : "s"), hn.aNQ(aV3), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(21)
		}).button])), hn
	}

	function aUu() {
		var hn = new z1,
			e7 = (hn.z2(L(213)), [L(56) + ": " + k8.zH[d4.data.botDifficultyValue], L(214), L(215), L(39)]);
		return hn.aNQ(e7[d4.data.botDifficultyType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(25)
		}).button])), hn
	}

	function aUv() {
		var hn = new z1,
			e7 = (hn.z2("Spawning"), [L(201), L(399), L(39)]);
		return hn.aNQ(e7[d4.data.spawningType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(24)
		}).button])), hn
	}
	this.show = function() {
		yo.show(), this.resize(), yo.em.scrollTop = h.bf.uM[0]
	}, this.s = function() {
		h.bf.uM[0] = yo.em.scrollTop, yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek("🔧 " + L(120), [new ei("⬅️ " + L(2), yr), new ei(L(396), aUl)]), aUn(), d4.data.canvas || (2 === d4.data.mapType ? d4.data.canvas = l.aL : 1 === d4.data.mapType ? d4.data.canvas = l.aNN(l.aNM(d4.data), 0).aL : (d4.data
		.mapType = 0, d4.data.passableWater = d4.data.passableMountains = 1, d4.data.canvas = l.aNN(l.aNM(d4.data), d4.data.mapSeed).aL)), yp = new ys(yo.em, (function(yy) {
		var hn = new z1,
			pt = (hn.z2(L(191)), d4.data.canvas);
		pt.style.width = "100%", hn.z5({
			k: pt
		}), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(20)
		}).button])), yy.push(hn)
	}(yy = []), function(yy) {
		var hn = new z1;
		hn.z2(L(130)), hn.z5(new a0w({
			cW: -1,
			value: d4.data.playerCount
		}, 1, 0, function(k) {
			var playerCount = eO.h2(Math.floor(k.target.value), 1, 512);
			k.target.value = d4.data.playerCount = playerCount, 1 === d4.data.gameMode && (k = bK.nU.hC(d4.data.teamPlayerCount, 0), d4.pD.aNa(), bK.nU.hC(d4.data.teamPlayerCount, 0) !== k) && aV2()
		})), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1;
		hn.z2(L(398)), hn.z3(new z4({
			c3: ["Battle Royale", "Teams"],
			value: d4.data.gameMode
		}, function(cW) {
			d4.data.gameMode !== cW && (1 === (d4.data.gameMode = cW) && (d4.data.colorsData || (d4.data.colorsData = new Uint32Array(1)), d4.data.colorsData[0] = 258049), aV2())
		})), yy.push(hn)
	}(yy), yy.push(aUt()), yy.push(aUu()), yy.push(aUv()), function(yy) {
		var hn = new z1,
			e7 = (hn.z2(L(35)), [L(37), L(38), L(39)]);
		hn.aNQ(e7[d4.data.playerNamesType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(23)
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1,
			e7 = (hn.z2(L(54)), [L(55), L(56) + ": " + d4.data.aIncomeValue, L(39)]);
		hn.aNQ(e7[d4.data.aIncomeType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(22)
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1,
			e7 = (hn.z2(L(140)), [L(55), L(56) + ": " + d4.data.tIncomeValue, L(39)]);
		hn.aNQ(e7[d4.data.tIncomeType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(26)
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1,
			e7 = (hn.z2(L(141)), [L(55), L(56) + ": " + d4.data.iIncomeValue, L(39)]);
		hn.aNQ(e7[d4.data.iIncomeType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(27)
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1,
			e7 = (hn.z2(L(172)), [L(55), L(56) + ": " + d4.data.sResourcesValue, L(39)]);
		hn.aNQ(e7[d4.data.sResourcesType]), hn.z5(new a7x([new ei(L(397), function() {
			h.gQ(28)
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1;
		hn.z2(L(400)), hn.z5(new a7x([new ei(L(401), function() {
			h.i(), d4.pD.aDX(), h.bf.uM[0] = 0, h.gQ(19)
		}).button])), hn.z5(new a7x([new ei(L(402), function() {
			aIf.u6()
		}).button])), hn.z5(new a7x([new ei(L(403), function() {
			return aIf.u8(), !0
		}).button])), yy.push(hn)
	}(yy), yy))
}

function aJL() {
	function aV4(k) {
		aVC(k), h.gQ(4, 5, new ec("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new ei("⬅️ " + L(2), function() {
				h.ej()
			}), new ei("🔄 Reload", function() {
				bx.by.a39()
			}, aB.a3A)]))
	}

	function aVB(k) {
		aVC(k), h.gQ(4, 5, new ec(L(404), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [k] ?? aV8(k), !0))
	}

	function aV8(k) {
		var ak = " [" + k + "]";
		return 3249 === k || 1006 === k ? "No Internet / No Server Response / Server Restart" + ak : 4527 === k ? "Player already in lobby" + ak : 4577 === k ? "Your IP is banned." + ak : 4530 === k ? "Lobby Timeout" + ak : 4528 === k ?
			"Lobby Kick: Another login detected." + ak : 4540 === k ? "You have been kicked." + ak : 4495 === k ? "Account doesn't exist." : 4229 === k ? "Bad Internet / Unresponsive Client" + ak : 4555 === k ? "This Account is blocked." + ak :
			4580 === k ? "More Gold needed" + ak : 4557 <= k && k <= 4560 || 4589 == k ? "Please try again later!" + ak : 4591 === k ? "The algo determined you are a bot." + ak : "Unknown error" + ak
	}

	function aVC(k) {
		aV5(k), h.bf.a25()
	}

	function aV5(k) {
		4540 === k && cr.bf.aE4(k);
		var b = bz.f();
		cu.close(), 6 === b ? cr.bf.aE4(k) : an.bl ? (h.i(), an.aV(), cr.bf.close(cr.bf.g9, 3256)) : 8 === b && d4.iM(!0)
	}
	this.aRT = [], this.aGb = function(c4, k) {
		if (1 === c4 && __fx.customLobby.isActive() && 6 !== bz.f() && __fx.customLobby.setActive(!1), this.aRT.push(k), 4321 === k && (data = bn.bf.a36(0), console.log("Reset to: " + data.bC), bn.ih.pT(105, data.bC), bn.ih.pT(106, data
				.password)), 8 === h.l2 && 0 === c4)
			if (4211 === k) aV4(k);
			else {
				if (an.bl && (4495 === k || 4480 === k) && cr.bf.g9 !== c4) return void h.ej();
				if (8 !== bz.f() && aV5(), 4480 === k) return bn.ih.q8(), void h.gQ(4, 0, new ec(L(406), L(407), !0));
				var data = 0;
				h.p7() && 10 === h.p7().a1T && (data = h.p7().a1T), h.gQ(4, data, new ec(L(404), aV8(k), !0))
			}
		else {
			data = bz.f();
			if (6 === data) {
				if (4211 === k) return void aV4(k);
				if (4215 !== k && 4516 !== k && 4527 !== k && 4533 !== k && 4528 !== k && !(4557 <= k && k <= 4560) && 4577 !== k && 4576 !== k) return void w.aFZ(c4)
			} else if (an.bl) {
				if (c4 !== cr.bf.g9) return
			} else {
				if (8 === data) return void(c4 !== cr.bf.fH || d4.iC || 1 !== d4.fL || d4.g2 || eX.aV9(L(405, [k])));
				if (!(4579 <= k && k <= 4589)) return
			}(4591 === k ? function(k) {
				aVC(k), h.gQ(4, 5, new ec("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new ei("⬅️ " + L(2), function() {
					h.ej()
				}), new ei("🔄 Reload", function() {
					bx.by.a39()
				}, aB.a3A)]))
			} : aVB)(k)
		}
	}, this.aFd = function(k) {
		this.aRT.push(k), 8 === bz.f() ? d4.iC || 1 !== d4.fL || eX.aV9(L(405, [k])) : aVB(k)
	}, this.aRV = function() {
		this.aRT.push(3268), aVC(3268)
	}
}

function aDQ() {
	var aT, aVF, qn = document.createElement("div"),
		aVD = document.createElement("div"),
		aVE = document.createElement("div"),
		qp = document.createElement("div"),
		ch = [],
		yf = [L(408), L(409), L(410), L(411), L(412), L(413), L(414), L(415)],
		aVG = [1, 2, 3, 0, 9, 10, 11, 13];

	function aVH(aW) {
		h.gQ(8, 0, new l3(21, {
			l4: aVG[aW],
			h4: 0,
			h5: 10
		}))
	}
	this.show = function() {
			this.pT(h.bf.a22), document.body.appendChild(qn)
		}, this.s = function() {
			h.removeChild(document.body, qn)
		}, this.pT = function(a22) {
			for (var aVM = [3, 0, 1, 2, 4, 5, 6, 7], aW = 0; aW < ch.length; aW++) {
				var aE = a22[aW];
				aT[aVM[aW]][1].au.textContent = aE || ""
			}
		}, this.resize = function() {
			var aW, hL = iN.gap,
				aF = bK.en.a9t(.085),
				aE = Math.min(4 * aF, aD.aE - 2 * hL),
				e4 = ch.length;
			for (bK.en.a9p(qn, hL, aD.aF - hL - aF, aE, aF), bK.en.r3(qn), bK.en.r3(aVD, 6), aW = 0; aW < e4 - 1; aW++) bK.en.r3(ch[aW].button, 6);
			for (aW = 0; aW < e4; aW++) aT[aW][0].resize(), aT[aW][1].resize();
			for (ch[0].u = 0, ch[0].button.style.left = bK.en.ju(ch[0].u), ch[0].button.style.width = bK.en.a9r(1.7 * aF), aW = 1; aW < e4; aW++) ch[aW].u = ch[aW - 1].u + ch[aW - 1].button.offsetWidth, ch[aW].button.style.left = bK.en.ju(ch[aW].u);
			if (!aVF) {
				if (!aN.o9()) return;
				(aVF = aN.get(14)).style.width = "24%", aVF.style.position = "absolute", aVD.appendChild(aVF)
			}
			aVF.style.left = bK.en.ju(0), aVF.style.top = "7%", aVE.r5 && (aVE.scrollLeft = aVE.r5)
		}, qn.style.position = "absolute", aVD.style.width = "25%", aVD.style.height = "100%", aVD.style.backgroundColor = aB.i6, aVE.style.position = "absolute", aVE.style.width = "75%", aVE.style.height = "100%", aVE.style.backgroundColor = aB.i6,
		aVE.style.top = aVE.style.right = bK.en.ju(0), bK.en.qs(aVE), qp.style.height = qp.style.maxHeight = "100%", ch.push(new ei("", function() {
			aVH(0)
		}, aB.aVI)), ch.push(new ei("", function() {
			aVH(1)
		}, aB.aDT)), ch.push(new ei("", function() {
			aVH(2)
		}, aB.aTW)), ch.push(new ei("", function() {
			aVH(3)
		}, aB.aKJ)), ch.push(new ei("", function() {
			aVH(4)
		}, aB.aVJ)), ch.push(new ei("", function() {
			aVH(5)
		}, aB.aVK)), ch.push(new ei("", function() {
			aVH(6)
		}, aB.aVJ)), ch.push(new ei("", function() {
			aVH(7)
		}, aB.aC)), aT = new Array(ch.length);
	for (var aW = 0; aW < ch.length; aW++) ch[aW].button.style.position = "absolute", aT[aW] = [new aVL(yf[aW], ch[aW].button, .25, .45), new aVL("", ch[aW].button, .53, .84, 1)], ch[aW].button.style.height = ch[aW].button.style.maxHeight = "100%",
		ch[aW].button.top = bK.en.ju(0), qp.appendChild(ch[aW].button);
	aVE.appendChild(qp), qn.appendChild(aVD), qn.appendChild(aVE)
}

function aVN() {
	this.aVO = 32, this.u = 0, this.v = 0, this.aIC = 0, this.aVP = 0, this.aVQ = 4, this.hh = null, this.aVR = new Int16Array(9), this.c = function() {
		this.aIC = 1 + eO.eP(l.aH - 1, this.aVO), this.aVP = 1 + eO.eP(l.aJ - 1, this.aVO), this.hh = new Array(this.aIC * this.aVP), bK.nU.gr(this.hh);
		var u, v, aVR = this.aVR,
			aE = this.aIC;
		for (u = -1; u <= 1; u++)
			for (v = -1; v <= 1; v++) aVR[3 * (1 + v) + 1 + u] = v * aE + u
	}, this.ri = function(aVT, aW) {
		return this.hh[aW].push(aVT), this.hh[aW].length - 1
	}, this.aVU = function(aVV, aVW, aVX) {
		var aVY, aVZ, aVW = dI.hi(aVW),
			aVX = dI.hi(aVX);
		return aVW === aVX ? aVV : (aVY = this.hh[aVW].pop(), this.hh[aVW].length === aVV ? this.ri(aVY, aVX) : (aVZ = this.hh[aVW][aVV], this.hh[aVW][aVV] = aVY, d5.bf.hb[aVY] = aVV, this.ri(aVZ, aVX)))
	}
}

function aGG() {
	this.lN = function(ak) {
		for (var e4 = ak.length, aE = l7, aW = 0; aW < e4; aW++) aE.eK(16, ak.charCodeAt(aW))
	}
}

function bt() {
	var aVa, aVb = [],
		aVc = -1,
		aVd = 0,
		aVe = 0;

	function aVi() {
		aVd = n.o, (3 === this.aO6 ? aVh : (aVc = (aVb.length + aVc + 2 * this.aO6 - 1) % aVb.length, aVg))()
	}

	function aVg() {
		0 !== aVb.length && (aVe = 0, aVa && aVa.aV(), (aVa = new aO4(aVi)).pT(aVc, aVb.length), aVa.show(aVb[aVc]), an.message.resize())
	}

	function aVh() {
		aVe = 1, aVa && aVa.aV(), (aVa = new aJq(aVg)).pT(aVb.length), aVa.show(), an.message.resize()
	}
	this.go = function(ab) {
		var aX;
		2 === ab.id && 3 === ab.bR ? an.ao.bb(ab.bC) : (aX = an.ao.bY(ab, an.ao.bZ(ab)), (5 !== ab.id && 6 !== ab.id || (h.x1(29).aE3().aL1(aX), 5 === ab.id)) && (aX = n.o < aVd + 2e4, aVc !== aVb.length - 1 && aX || (aVc = aVb.length), __fx
			.pingFilter.isMuted(ab, "af") || (aVb.push(ab), bn.buffer.data[14].value || 7 === ab.id || bw.play(), aVa && (aVe && (bn.buffer.data[13].value || aX) ? aVa.pT(aVb.length) : aVg()))))
	}, this.show = function() {
		aVh()
	}, this.s = function() {
		aVc = aVb.length - 1, aVa && aVa.aV(), aVa = null
	}, this.resize = function() {
		aVa && aVa.resize()
	}, this.aUi = function() {
		return aVb
	}
}

function a37(data) {
	var eg, aVj;

	function aVs(e4) {
		return e4 < 60 ? 1 === e4 ? e4 + " Second" : e4 + " Seconds" : e4 < 3600 ? 1 === (e4 = Math.floor(e4 / 60)) ? e4 + " Minute" : e4 + " Minutes" : e4 < 172800 ? 1 === (e4 = Math.floor(e4 / 3600)) ? e4 + " Hour" : e4 + " Hours" : (e4 = Math
			.floor(e4 / 172800)) + " Days"
	}

	function aVm(gz) {
		var e4 = data.data.length;
		if (e4) {
			for (var h4, max = min = parseInt(data.data[0][0]), aW = 1; aW < e4; aW++) var aCH = parseInt(data.data[aW][0]),
				min = Math.min(aCH, min),
				max = Math.max(aCH, max);
			h4 = gz < 0 ? min + gz : max + 1, h.gQ(8, h.p7().a1T, new l3(21, {
				l4: data.l4,
				h4: h4,
				h5: h4 + Math.abs(gz)
			}))
		}
	}
	if (this.show = function() {
			eg.show(), this.resize()
		}, this.s = function() {
			eg.s()
		}, this.resize = function() {
			eg.resize(), aVj.resize()
		}, this.j = function(ag) {
			2 === ag && eg.eo[0].ep()
		}, data.aVk) {
		eg = new ek(L(10), [new ei("⬅️ " + L(2), function() {
			h.ej()
		})]);
		var bX = {
				aCY: [],
				aCd: [L(425), L(426), L(427) + " ↗"],
				aCk: [12, 50, 38]
			},
			a5G = d4.data.a5G;
		if (a5G) {
			for (var e4 = a5G.length, aCY = bX.aCY, vd = dA.vd, aW = 0; aW < e4; aW++) aCY.push([{
				hB: aW + 1 + ".",
				m6: 0
			}, {
				hB: vd[aW],
				m6: 0
			}, {
				hB: b9.bA.bB(a5G[aW], 5),
				m6: 1,
				bC: a5G[aW],
				qA: 0
			}]);
			aVj = new aCX(eg.em, bX, {
				aCh: 1
			})
		} else aVj = new aCX(eg.em, bX)
	} else {
		var bX = data.data.length ? 0 : 1,
			ef = [new ei("⬅️ " + L(2), function() {
				h.ej()
			}), new ei(L(416), function() {
				aVm(-10)
			}, bX, 0, 1), new ei(L(417), function() {
				aVm(10)
			}, bX, 0, 1), new ei(L(257), function() {
				h.gQ(11, 10, new a7n({
					l4: data.l4
				}))
			})],
			aCd = [L(418), L(419), L(420), L(421), L(422), L(5), L(6), L(7), L(423), L(424), L(114), L(115), "Audit Log", L(116)];
		eg = new ek(aCd[data.l4], ef), ! function() {
			var aW, bX = {
					aCY: []
				},
				aCY = bX.aCY,
				aVo = data.data,
				e4 = aVo.length;
			e4 && 0 === aVo[0][0] && 0 <= (cW = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.l4]) && (h.bf.a22[cW] = aVo[0][1]);
			var m5 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.l4],
				a06 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.l4],
				cW = [
					[L(428), L(429) + " ↗", L(430)],
					[L(428), L(431), L(432), L(433) + " ↗"],
					[L(428), L(429) + " ↗", L(432)],
					[L(428), L(429) + " ↗", L(432)],
					[L(425), L(434), L(435) + " ↗", L(436) + " ↗", L(14)],
					[L(425), L(434), L(437) + " ↗", L(205) + " ↗", L(438)],
					[L(425), L(434), L(439) + " ↗", L(440) + " ↗", L(206)],
					[L(425), L(434), L(437) + " ↗", L(205) + " ↗", L(441)],
					[L(425), L(434), L(435) + " ↗", L(436) + " ↗", L(14)],
					[L(428), L(429) + " ↗", L(432)],
					[L(428), L(429) + " ↗", L(442)],
					[L(428), L(429) + " ↗", L(432)],
					[L(425), L(434), L(435) + " ↗", L(436) + " ↗", L(443)],
					[L(428), L(429) + " ↗", L(432)]
				];
			if (bX.aCd = cW[data.l4], bX.aCk = [
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
				][data.l4], 0 === data.l4 || 2 === data.l4 || 3 === data.l4 || 9 === data.l4 || 10 === data.l4 || 11 === data.l4 || 13 === data.l4)
				for (aW = 0; aW < e4; aW++) aCY.push([{
					hB: aVo[aW][0] + 1 + ".",
					m6: 0
				}, {
					hB: aVo[aW][1],
					m6: 1,
					bC: aVo[aW][4],
					qA: aVo[aW][3]
				}, {
					hB: (m5 * aVo[aW][2]).toFixed(a06),
					m6: 0
				}]);
			else if (12 === data.l4)
				for (aW = 0; aW < e4; aW++) {
					var aVr = aVo[aW][3];
					aCY.push([{
						hB: "" + aVo[aW][0],
						m6: 0
					}, {
						hB: aVs(aVo[aW][4]),
						m6: 0
					}, {
						hB: aVo[aW][5],
						m6: 1,
						bC: aVo[aW][1],
						qA: 0
					}, {
						hB: aVo[aW][6],
						m6: 1,
						bC: aVo[aW][2],
						qA: 0
					}, {
						hB: aIg.a1F(aVr, b9.bA.bB(aVo[aW][1], 5)),
						m6: 0
					}])
				} else if (1 === data.l4)
					for (aW = 0; aW < e4; aW++) aCY.push([{
						hB: aVo[aW][0] + 1 + ".",
						m6: 0
					}, {
						hB: aVo[aW][1],
						m6: 0
					}, {
						hB: (m5 * aVo[aW][2]).toFixed(a06),
						m6: 0
					}, {
						hB: aVo[aW][3],
						m6: 1,
						bC: aVo[aW][5],
						qA: aVo[aW][4]
					}]);
				else if (4 === data.l4 || 5 === data.l4 || 6 === data.l4 || 7 === data.l4 || 8 === data.l4)
				for (aW = 0; aW < e4; aW++) {
					var aVt = aVo[aW][5];
					4 === data.l4 || 8 === data.l4 ? "100%" === (aVt = (aVt % 64 * 100 / (aVt >> 6)).toFixed(0) + "%") && (4 === data.l4 ? aVt += " (" + L(444) + ")" : aVt += " (" + L(445) + ")") : 5 === data.l4 ? 32768 <= aVt && (aVt = -(aVt -
						32768)) : aVt = (m5 * aVt).toFixed(a06), aCY.push([{
						hB: "" + aVo[aW][0],
						m6: 0
					}, {
						hB: aVs(aVo[aW][6]),
						m6: 0
					}, {
						hB: aVo[aW][7],
						m6: 1,
						bC: aVo[aW][1],
						qA: aVo[aW][2]
					}, {
						hB: aVo[aW][8],
						m6: 1,
						bC: aVo[aW][3],
						qA: aVo[aW][4]
					}, {
						hB: "" + aVt,
						m6: 0
					}])
				}
			aVj = new aCX(eg.em, bX)
		}()
	}
}

function a9C() {
	this.aOk = function() {
		bn.ih.q6(), bn.ih.q7(), cr.bf.close(0, 3255), 0 === bx.id ? bx.a98 && bx.a98.clear() : 1 === bx.id ? bx.a99.saveString(199, "") : 2 === bx.id && bx.a9B.postMessage("clear")
	}, this.aOe = function() {
		2 === bx.id ? bx.a9B.postMessage("showConsentForm") : 1 === bx.id && bx.a99.setState(7)
	}, this.aOg = function() {
		this.setState(14)
	}, this.i2 = function() {
		return 1 === bn.buffer.xe(2)
	}, this.aVu = function() {
		bn.buffer.q4(102, "")
	}, this.setState = function(b) {
		1 === bx.id && 5 <= bx.hr && bx.a99.setState(b)
	}, this.a39 = function() {
		var aGg;
		1 === bx.id && 7 <= bx.hr ? bx.a99.setState(5) : 2 === bx.id ? bx.a9B.postMessage("reload 0") : ((aGg = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aGg.toString())
	}, this.aF8 = function() {
		0 !== bx.id && (1 === bx.id ? bx.a99.prepareAd("8646194357") : 2 === bx.id && (0 === bx.hr ? bx.a9B.postMessage("prepare ad 2904813909") : bx.a9B.postMessage("loadAds 2904813909")))
	}, this.aU6 = function(m6) {
		return 0 !== bx.id && (1 === bx.id ? 12 <= bx.hr && (bx.a99.presentAd(m6), !0) : 2 === bx.id && 0 !== bx.hr && (bx.a9B.postMessage("showAd"), !0))
	}, this.aJS = function() {
		2 === bx.id && bx.hr < 23 && h.gQ(4, 1, new ec("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + aCM.aCO + "' target='_blank'>" + aCM
			.aCO + "</a>", !0, [new ei("⬅️ " + L(2), function() {
				h.gQ(0)
			}, aB.aQB)]))
	}
}

function a6Q() {
	var eg, a7o, yy;
	this.show = function() {
		eg.show(), this.resize()
	}, this.s = function() {
		eg.s()
	}, this.resize = function() {
		eg.resize(), a7o.resize()
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek("🔒 " + L(221), [new ei("⬅️ " + L(2), function() {
		h.ej()
	})]), a7o = new ys(eg.em, ((yy = []).push(function() {
		var hn = new z1,
			a8S = (hn.aNQ(cr.bf.a2C("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", hn.z2(L(239)), new a0w({
				value: "",
				cW: -1
			})),
			aTb = (hn.z5(a8S), hn.z2(L(348), "0.8em"), new a0w({
				value: "",
				cW: -1
			}, 0, 0)),
			aNX = (aTb.k.type = "email", aTb.k.autocomplete = "email", aTb.k.name = "email", aTb.k.inputMode = "email", aTb.k.spellcheck = !1, hn.z5(aTb), new ei(L(446), function(k) {
				return bK.en.a8Q(k), cr.rq.a30({
					action: 4,
					ak: a8S.k.value.trim() + aTb.k.value.trim().substring(0, 63)
				}), !0
			}));
		return hn.z5(new a7x([aNX.button])), hn
	}()), yy))
}

function aNo() {
	this.L84 = ["Ship launched!", "Ship intercepted!", "Back", "Quit Game", "More", "Admin Election", "Blockchain", "Clan Leader Election", "📜 Logs", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Lobby",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!",
		"You earned an additional {10} gold because you played for {1}.", "You earned {10} gold!", "{0} earned {11} gold!", "Activated", "Contest", "Player Names", "Options", "Kingdom Names", "Simple Names", "Customized", "Selectable Name",
		"Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Additional Income", "Default", "Uniform", "Source Account: {0}",
		"Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "🛠️ List Options",
		"Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Intensity", "Shortcut Keys", "Reset", "Language", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players",
		"Patreon Members", "Zombie Players", "🏆 Leaderboards", "You are leaving Territorial.io.", "Multiplayer", "Custom Scenario", "My Account", "Game Menu", "Your Kingdom's Name", "Team", "1v1", "Zombie", "Chat", "Close {button}", "Ready",
		"Player Count", "Next Game", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income",
		"Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Loading", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Starting Resources", "Team {0}", "Team {0} won the game!", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Type your message here...", "Send", "Territory", "Numbers", "Statistics", "Propaganda", "Report Abuse", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Timeframe", "More Options", "Y-Axis Compression", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File",
		"Select File", "Map Name", "Random", "Preview", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount", "Confirm", "Cancel", "Send gold only to trusted accounts!", "Adjust", "Colors", "My Color", "Bot Difficulty", "Mixed",
		"Team dependent", "🔑 My Account", "📈 Clan Charts", "▶️ Replay", "📰 Propaganda", "⚔️ Join Lobby 2", "Account Recovery", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📜 Game Log", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Login", "➡️ Login", "Account Name", "Password", "Show", "Hide", "Security Tip",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta",
		"Cyan", "White", "Black", "Clan Chart", "🛠️ Options", "second played", "seconds played", "{0} defeated {1}!", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Refresh",
		"Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ",
		"Status: ", "Gold Transfer", "Copy", "Search", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier",
		"Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified",
		"🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline",
		"Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats",
		"Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "You are leaving Territorial.io!", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚔️ Play", "Settings", "Game Mode",
		"Clustered", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player",
		"Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Bio Reports",
		"Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Type", "Elo Deducted",
		"Bio Removed", "Request Email", "LEADERBOARD", "Incoming Boat!", "Incoming Ship!", "Spawning", "Manual Spawn", "Replay Error", "Warning", "Loading...", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp",
		"White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles",
		"This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!",
		"You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Index: {10}", "Coordinates: {10}", "Mountain: {10}",
		"Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Links", "Propaganda Text", "Launch Campaign", "Gold Investment", "Launch"
	]
}

function aVw() {
	(aRY = void 0 === aRY ? document.createElement("canvas") : aRY).width = l.aH, aRY.height = l.aJ, xU = aRY.getContext("2d", {
		alpha: !0
	}), xV = pz = null, xV = xU.getImageData(0, 0, l.aH, l.aJ), pz = xV.data, bK.nU.gq(pz)
}

function a6L() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 !== d4.data.iIncomeType && (d4.data.iIncomeData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.iIncomeType && bK.nU.hJ(yq.yx(), d4.data.iIncomeData, 255)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(141), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1;
		hn.z2(L(36)), hn.z3(new z4({
			c3: [L(55), L(56), L(39)],
			value: d4.data.iIncomeType
		}, function(cW) {
			yu(), 2 !== cW || d4.data.iIncomeData || (d4.data.iIncomeData = new Uint8Array(d4.jW), d4.data.iIncomeData.fill(32)), d4.data.iIncomeType = cW, h.gQ(27)
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn;
		1 === d4.data.iIncomeType && ((hn = new z1).z2("Value"), hn.z5(new a0w({
			cW: -1,
			value: d4.data.iIncomeValue
		}, 1, 0, function(k) {
			var value = eO.h2(Math.floor(k.target.value), 0, 255);
			k.target.value = d4.data.iIncomeValue = value
		})), yy.push(hn))
	}(yy), function(yy) {
		var hn;
		2 === d4.data.iIncomeType && ((hn = new z1).z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.iIncomeData, 4)), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function aJ3() {
	this.bh = new aIE, this.nV = new aHY
}

function aIs() {
	var ch, u, v, aVx, aVy, aVz, o, aW0, aW1, aW2, aW3, gap, zoom, aW4, aW5;

	function aWL(iH, iI, aK) {
		dK.dL(aK) || -1 === (iH = d5.ao.aAT(iH, iI)) ? eX.aWR(aK) : eX.aWS(iH)
	}

	function aWG(aW0) {
		for (var aW = aW4.length - 1; 0 <= aW; aW--)
			if (aW4[aW] === aW0) return 1
	}

	function aWE(tH) {
		var aW, e4;
		if (-1 !== tH)
			for (e4 = ch.length, aW = 0; aW < e4; aW++)
				if (ch[aW].fd && ch[aW].u + 1 === tH % 4 && ch[aW].v + 1 === tH >> 2) return aW;
		return -1
	}

	function aWC(iH, iI) {
		var hL = gap / 2;
		return iH < u - aVx - 3 * hL || u + 3 * aVx + 5 * hL < iH || iI < v - aVx - 3 * hL || v + 2 * aVx + 3 * hL < iI ? -1 : 4 * (iI < v - hL ? 0 : iI < v + aVx + hL ? 1 : 2) + (iH < u - hL ? 0 : iH < u + aVx + hL ? 1 : iH < u + 2 * aVx + 3 * hL ?
			2 : 3)
	}
	this.aHX = function() {
		var aW, eN, aW7 = [aB.aS1, aB.aW8, aB.aKw, aB.aW9, aB.aWA];
		for (ch = new Array(10), aW = 0; aW < 10; aW++) ch[aW] = {
			id: aW,
			fd: !1,
			iL: 0,
			canvas: [],
			u: 0,
			v: 0
		};
		for (ch[0].colors = [0, 1, 2, 3], ch[0].u = 0, ch[0].v = 0, ch[1].colors = [1, 4], ch[1].u = 1, ch[1].v = 0, ch[2].colors = [0, 1], ch[2].u = -1, ch[2].v = 0, ch[3].colors = [0], ch[3].u = 0, ch[3].v = 0, ch[4].colors = [0, 2], ch[4].u =
			1, ch[4].v = 1, ch[5].colors = [3], ch[5].u = 0, ch[5].v = -1, ch[6].id = 20, ch[6].colors = [0], ch[6].u = 1, ch[6].v = -1, ch[7].id = 21, ch[7].colors = [0], ch[7].u = 0, ch[7].v = 1, ch[8].id = 16, ch[8].colors = [0], ch[8].u = 0,
			ch[8].v = 0, ch[9].id = 10, ch[9].colors = [4], ch[9].u = 2, ch[9].v = 0, aW = 0; aW < 10; aW++)
			for (eN = 0; eN < ch[aW].colors.length; eN++) ch[aW].canvas.push(function(id, aWB) {
				if (id < 20) return bK.canvas.aS2(aN.get(3), id, aWB);
				var aWB = aN.get(3).height,
					pt = bK.en.nM(aWB, aWB),
					rL = bK.en.getContext(pt);
				20 === id ? rL.drawImage(aN.get(18), 0, 0) : 21 === id && a3x.nV.aSC(a3x.bh.aIG + a3x.bh.aIL, rL, 0, 0, aWB);
				return pt
			}(ch[aW].id, aW7[ch[aW].colors[eN]]))
	}, this.a4b = function() {
		return ch
	}, this.c = function() {
		aW4 = [], u = v = o = 0, aVy = aVz = -1e3, this.resize()
	}, this.resize = function() {
		aVx = Math.floor((bx.by.i2() ? .075 : .0468) * aD.lh), zoom = aVx / aN.get(3).height, gap = Math.floor(aVx / 3)
	}, this.fR = function(iH, iI) {
		return !!this.fd() && (n.a5 = !0, !!a3x.nV.t(iH, iI, aW1) || (iH = function(iH, iI) {
			aVz = aVy = -1e3;
			var aWD = aWE(aWC(iH, iI));
			if (-1 === aWD) return 0;
			if (1 !== ch[aWD].colors[ch[aWD].iL])
				if (5 === aWD) {
					if (! function() {
							var m6 = performance.now();
							aW5 + 4e3 < m6 && (aW4 = []);
							aW5 = m6
						}(), aWG(aW0)) return 1;
					aW4.push(aW0), 16 < aW4.length && aW4.shift()
				} else if (6 === aWD) {
				for (var aW = aW4.length - 1; 0 <= aW; aW--) 0 === dA.iR[aW4[aW]] && aW4.splice(aW, 1);
				0 < aW4.length && (aIY.aRJ(1, aW4, !0) && ko.dl.aWH(aW4, aW0), aW4 = [])
			} else if (2 === aWD) aIT.dO(aW0) && ko.zg.oV(fZ.lt(), aW0);
			else if (3 === aWD) d4.iA && ko.zg.zh(aW2);
			else if (0 === aWD)
				if (0 === ch[0].iL) {
					if (d4.aWI && mY.md() < 350) return 1;
					aId.pQ(4), ko.zg.zm(fZ.lt(), aW0)
				} else zo.zp(aW0, fZ.lt());
			else if (1 === aWD) ko.zg.eV(fZ.lt(), aW2);
			else if (9 === aWD) ko.zg.eb(fZ.lt());
			else {
				if (7 === aWD) return aId.pQ(0), a3x.nV.show(iH, iI), 2;
				if (4 === aWD) aIY.aRJ(0, [aW0], !0) && ko.dl.aWJ(aW0);
				else {
					if (8 !== aWD) return 0;
					ko.zg.zj(fZ.lt(), aW3, aW0)
				}
			}
			return 1
		}(iH, iI), this.s(), 2 === iH && (a3x.nV.fd = !0), 0 < iH))
	}, this.fW = function(iH, iI) {
		this.fd() || (aVy = iH, aVz = iI, o = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = dI.zW(mouseX),
			coordY = dI.zY(mouseY),
			point = dI.dJ(dI.jm(coordX, coordY));
		dI.zZ(coordX, coordY) && aWL(mouseX, mouseY, point)
	}, this.click = function(iH, iI, fk) {
		var zV = dI.zW(iH),
			zX = dI.zY(iI),
			dP = dI.jm(zV, zX),
			aK = dI.dJ(dP),
			aWK = (bx.by.i2() ? .025 : .0144) * aD.lh,
			m6 = performance.now();
		return !(Math.abs(iH - aVy) > aWK || Math.abs(iI - aVz) > aWK || o + 500 < m6 || (o = m6, b1.b2() && (b1.ey = iH, b1.ez = iI, aIa.kK(1), aIb.kK(1)), !dI.zZ(zV, zX))) && (fk ? (aWL(iH, iI, aK), !1) : fT.g0 || this.fd() || !bK.dl.mz(d4
			.jL) || d4.g2 ? (this.s(), !1) : (d4.iA ? 0 <= (aW2 = ze.zf(dP)) && (ch[3].fd = !0) : 2 === d4.fL ? dK.yH(aK) && (aW0 = dK.jR(aK), bK.dl.iS(aW0) || (ch[0].fd = !0, ch[0].iL = 1, ch[7].fd = !0)) : (d5.zt.dO(d4.jL, dP) && (ch[0]
					.fd = !0, ch[0].iL = 1, ch[1].fd = !0, ch[1].iL = 0, ch[9].fd = !0, ch[9].iL = 0), d5.zr.zs(d4.jL, dP) && (ch[0].fd = !0, ch[0].iL = 1, ch[1].fd = !0, ch[1].iL = 1, aW2 = dF.dG[7]), dK.jb(aK) ? (aW3 = zi.vJ.jH(aK)) &&
				(aWK = dI.dJ(aW3), ch[8].fd = !0, aW0 = dK.jQ(aWK) ? d4.jW : dK.jR(aWK)) : (dK.yI(d4.jL, aK) && (aW1 = d4.jL, ch[0].fd = !0, ch[0].iL = 1, ch[7].fd = !0), -1 !== (m6 = ze.zk(dP)) && (dK.jQ(m6 << 2) ? (aW0 = d4.jW, jS.zl(d4
					.jL) ? (ch[0].fd = !0, ch[0].iL = 0) : k2.zn(d4.jL) && (ch[0].fd = !0, ch[0].iL = 3)) : (aW0 = dK.jR(m6 << 2), ch[0].iL = 1, ch[5].fd = function(aW0) {
					return !bK.dl.iS(aW0) && !aWG(aW0) && aIY.aRJ(1, [aW0], !1)
				}(aW0), ch[7].fd || bK.dl.iS(aW0) || (aW1 = aW0, ch[7].fd = !0), ch[4].fd = !bK.dl.iS(aW0) && !oD.a4j(aW0) && aIY.aRJ(0, [aW0], !1), ch[6].fd = function(aW0) {
					if (0 === aW4.length) return !1;
					if (performance.now() > aW5 + 4e3) return !(aW4 = []);
					return !aWG(aW0) && ! function(aW0) {
						var aW;
						if (d4.jD)
							for (aW = aW4.length - 1; 0 <= aW; aW--)
								if (!jS.jT(aW0, aW4[aW])) return 1;
						return
					}(aW0)
				}(aW0), jS.jT(aW0, d4.jL) ? (jS.zq(d4.jL, aW0) ? (ch[0].iL = 0, ch[0].fd = !0) : k2.zn(d4.jL) && (ch[0].iL = 3, ch[0].fd = !0), ch[0].fd = this.aWQ()) : (ch[2].fd = !0, aIT.dO(aW0) ? ch[2].iL = 0 : ch[2].iL =
					1, ch[0].fd = !0))))), this.aWM(iH, iI)))
	}, this.aWM = function(iH, iI) {
		return u = iH - Math.floor(aVx / 2), v = iI - Math.floor(aVx / 2), !!this.fd()
	}, this.z = function(iH, iI) {
		return !!this.fd() && (a3x.nV.fd ? !a3x.nV.aSA(iH, iI) && (a3x.nV.fd = !1, n.a5 = !0) : function(m2, iH, iI) {
			iH = aWC(iH, iI);
			if (0 <= aWE(iH)) return !1;
			if ((1 === iH || 6 === iH) && 0 <= aWE(2)) return !1;
			if ((6 === iH || 9 === iH) && 0 <= aWE(10)) return !1;
			return m2.s(), n.a5 = !0
		}(this, iH, iI))
	}, this.s = function() {
		for (var aW = ch.length - 1; 0 <= aW; aW--) ch[aW].fd = !1, ch[aW].iL = 0;
		a3x.nV.fd = !1
	}, this.fd = function() {
		return this.aWQ() || a3x.nV.fd
	}, this.aWQ = function() {
		for (var e4 = ch.length, aW = 0; aW < e4; aW++)
			if (ch[aW].fd) return !0;
		return !1
	}, this.a6 = function() {
		if (this.fd())
			if (a3x.nV.fd) a3x.nV.a6();
			else {
				var aW, rL = a7,
					eN = ch,
					e4 = eN.length,
					aWW = (aVx + gap) / zoom;
				for (rL.imageSmoothingEnabled = !0, rL.setTransform(zoom, 0, 0, zoom, u, v), aW = 0; aW < e4; aW++) eN[aW].fd && a7.drawImage(eN[aW].canvas[eN[aW].iL], eN[aW].u * aWW, eN[aW].v * aWW);
				rL.imageSmoothingEnabled = !1, rL.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aIy() {
	var aWX, aWY, aWZ, aWa, aWb, aWc, aWd, aWe, aWf, aWg, aWh, aWi, aWj, aWk, aWl, aWm, aWn, aWo, aWp, aWq, aWr, aWs, position, aWt, aWu, aWv, aWw, aWx, aWy = 1,
		a3i = 1,
		aWz = "";
	var leaderboardHasChanged = true;
	this.playerPos = d4.jL;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kE[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kE[d4.jL]);
	}

	function aX1() {
		aWd.clearRect(0, 0, aWX, a8x),
			aWd.fillStyle = aWx ? aB.aX3 : aB.aX4,
			aWd.fillRect(0, 0, aWX, aWi),
			aWd.fillStyle = aB.i6,
			aWd.fillRect(0, aWi, aWX, a8x - aWi);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kE[d4.jL]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aWs = -1;
		if (__fx.leaderboardFilter.enabled && aWs >= __fx.leaderboardFilter.filteredLeaderboard.length) aWs = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= 0 && ownClanIndex >= position) aX5(ownClanIndex - position, aB.a5n);
			})() :
			(playerPos >= position && aX5(playerPos - position, aB.a5n),
				0 !== kE[d4.jL] && 0 === position && aX5(0, aB.aX6))
		),
		-1 !== aWs && aX5(aWs, aB.i7),
			aWd.fillStyle = aB.i6,
			//console.log("drawing", aWs),
			aWd.clearRect(0, a8x - __fx.leaderboardFilter.tabBarOffset, aWX, __fx.leaderboardFilter.tabBarOffset);
		aWd.fillRect(0, a8x - __fx.leaderboardFilter.tabBarOffset, aWX, __fx.leaderboardFilter.tabBarOffset);
		aWd.fillStyle = aB.i8,
			aWd.fillRect(0, aWi, aWX, 1),
			aWd.fillRect(0, a8x - __fx.leaderboardFilter.tabBarOffset, aWX, 1),
			__fx.leaderboardFilter.drawTabs(aWd, aWX, a8x - __fx.leaderboardFilter.tabBarOffset, aB.a5n),
			aWd.fillRect(0, 0, aWX, iN.iV),
			aWd.fillRect(0, 0, iN.iV, a8x),
			aWd.fillRect(aWX - iN.iV, 0, iN.iV, a8x),
			aWd.fillRect(0, a8x - iN.iV, aWX, iN.iV), aWd.font = aWY, bK.en.textBaseline(aWd, 1), bK.en.textAlign(aWd, 1), aWd.fillText(aWz, Math.floor((aWX + aWi - 22) / 2), Math.floor(aWg + aWZ / 2));
		__fx.playerList.drawButton(aWd, 12, 12, aWi - 22);
		var ba, j3 = playerPos < position + aWb - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) j3 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aWb)
				position = (rivalsCount > aWb ? rivalsCount : aWb) - aWb;
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aWb; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, dA.j8[repId], dA.vd[repId], dA.a4E[repId]]);
					dA.j8[repId] = rivalsEntry.territory;
					dA.vd[repId] = "[" + rivalsEntry.clan + "]";
					dA.a4E[repId] = 0;
				}
				for (aWd.font = aWa, bK.en.textAlign(aWd, 0), ba = aWb - j3; 0 <= ba; ba--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[ba + position];
					if (rivalsEntryLeft !== undefined)
						aX7(rivalsEntryLeft.representativeId), aX8(ba, ba + position, rivalsEntryLeft.representativeId);
				}
				for (bK.en.textAlign(aWd, 2), ba = aWb - j3; 0 <= ba; ba--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[ba + position];
					if (rivalsEntryRight !== undefined)
						aX7(rivalsEntryRight.representativeId), aX9(ba, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					dA.j8[entry[0]] = entry[1];
					dA.vd[entry[0]] = entry[2];
					dA.a4E[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aWb)
				position = (result.length > aWb ? result.length : aWb) - aWb;
			//if (position >= result.length) position = result.length - 1;
			for (aWd.font = aWa, bK.en.textAlign(aWd, 0), ba = aWb - j3; 0 <= ba; ba--) {
				const pos = result[ba + position];
				if (pos !== undefined)
					aX7(mp[pos]), aX8(ba, pos, mp[pos]);
			}
			for (bK.en.textAlign(aWd, 2), ba = aWb - j3; 0 <= ba; ba--) {
				const pos = result[ba + position];
				if (pos !== undefined)
					aX7(mp[pos]), aX9(ba, mp[pos]);
			}
		} else {
			for (aWd.font = aWa, bK.en.textAlign(aWd, 0), ba = aWb - j3; 0 <= ba; ba--)
				aX7(mp[ba + position]), aX8(ba, ba + position, mp[ba + position]);
			for (bK.en.textAlign(aWd, 2), ba = aWb - j3; 0 <= ba; ba--)
				aX7(mp[ba + position]), aX9(ba, mp[ba + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == j3 && (aX7(d4.jL), bK.en.textAlign(aWd, 0), aX8(aWb - 1, kE[d4.jL], d4.jL), bK.en.textAlign(aWd, 2), aX9(aWb - 1, d4.jL)), 0 === position && (j3 = .7 * aWj / aN.get(4).height, aWd.setTransform(
			j3, 0, 0, j3, Math.floor(aWk + .58 * aWj + .5 * j3 * aN.get(4).width), Math.floor(aWg + aWZ + .4 * aWj)), aWd.imageSmoothingEnabled = !0, aWd.drawImage(aN.get(4), -Math.floor(aN.get(4).width / 2), -Math.floor(aN.get(4).height /
			2)), aWd.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aX7(player) {
		d4.jD && (aWd.fillStyle = jE.aPA[jE.y7[player]])
	}

	function aX5(aW, aXB) {
		aWd.fillStyle = aXB, aW = aWb - 1 < aW ? aWb - 1 : aW;
		aXB = Math.floor((aW === aWb - 1 ? 2 : 0 === aW ? 1.15 : 1) * aWj), aXB = aW === aWb - 2 ? Math.floor(aWi + 9.15 * aWj) - Math.floor(aWi + 8.15 * aWj) : aXB;
		aWd.fillRect(0, Math.floor(aWi + (aW + (0 === aW ? 0 : .15)) * aWj), aWX, aXB)
	}

	function aX8(a96, ar, aW) {
		aWd.fillText(aWo[ar], aWk, Math.floor(aWg + aWZ + (a96 + .5) * aWj)), 1 === dA.a4E[aW] && (aWd.font = "italic " + aWa);
		ar = Math.floor(aWg + aWZ + (a96 + .5) * aWj);
		aWd.fillText(dA.vd[aW], aWl, ar), 0 !== dA.a4E[aW] && (aWd.font = aWa), aW < d4.j6 && 2 !== dA.a4E[aW] || aWd.fillRect(aWl, ar + .35 * aWy, aWn[aW], Math.max(1, .1 * aWy))
	}

	function aX9(a96, aW) {
		aWd.fillText(dA.j8[aW], aWm, Math.floor(aWg + aWZ + (a96 + .5) * aWj))
	}
	this.c = function() {
		var aW;
		for (h.bf.uM[0] = 0, aWw = aWv = aWt = 0, aWx = aWu = !1, aWs = -1, aWb = bx.by.i2() ? 6 : 10, a3i = (position = 0) === (a3i = bn.buffer.data[11].value) ? 10 : 1 === a3i ? 5 : 1, aWr = !1, aWp = new Uint16Array(aWb + 1), aWq =
			new Uint32Array(aWb + 1), aWf = d4.jW, mp = new Uint16Array(aWf), kE = new Uint16Array(aWf), aW = aWf - 1; 0 <= aW; aW--) mp[aW] = aW, kE[aW] = aW;
		this.resize(!0), aWn = new Uint16Array(d4.jW);
		var aX0 = Math.floor(aWX - aWl - aWk - aWe);
		for (aWo = new Array(d4.jW), aWd.font = aWa, aW = d4.jW - 1; 0 <= aW; aW--) aWo[aW] = aW + 1 + ".", dA.vd[aW] = bK.cd.mU(dA.vk[aW], aWa, aX0), aWn[aW] = Math.floor(aWd.measureText(dA.vd[aW]).width);
		aX1()
	}, this.resize = function(c) {
		if (a8x = bx.by.i2() ? (aWX = Math.floor(.335 * aD.lh), Math.floor(aWb * aWX / 8)) : (aWX = Math.floor(.27 * aD.lh), Math.floor(aWb * aWX / 10)), aWX = Math.floor(.97 * aWX), (aWc = document.createElement("canvas")).width = aWX, aWc
			.height = a8x, aWd = aWc.getContext("2d", {
				alpha: !0
			}), aWg = .025 * aWX, aWZ = .16 * aWX, aWh = 0 * aWX, aWi = Math.floor(.45 * aWg + aWZ), aWj = (a8x - aWZ - 2 * aWg - aWh) / aWb,
			aWc.height = a8x += aWj, __fx.leaderboardFilter.tabBarOffset = Math.floor(aWj * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8x - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aWX,
			aWY = bK.en.i3(1, Math.floor(.55 * aWZ)), aWy = Math.floor((bx.by.i2() ? .67 : .72) * aWj), aWa = bK.en.i3(0, aWy), aWd.font = aWa, aWk = Math.floor(.04 * aWX), aWl = Math.floor((bx.by.i2() ? .195 : .18) * aWX), aWe = Math.floor(aWd
				.measureText("00920600").width), aWd.font = aWY, aWm = aWX - aWk, !c) {
			aWd.font = aWa;
			for (var aW = d4.jW - 1; 0 <= aW; aW--) aWn[aW] = Math.floor(aWd.measureText(dA.vd[aW]).width);
			aX1()
		}
		aWz = bK.cd.mU(L(447), aWY, .96 * aWX)
	}, this.aLs = function() {
		return aWX
	}, this.iE = function(mX, aX2) {
		(aX2 || aWr && (mX || n.kg() % a3i == 0)) && (aWr = !1, aX1())
	}, this.kK = function() {
		! function() {
			for (var ba = aWf - 1; 0 <= ba; ba--) 0 === dA.iR[mp[ba]] && ! function(ba) {
				var aXI = mp[ba];
				aWf--;
				for (var aW = ba; aW < aWf; aW++) mp[aW] = mp[aW + 1], kE[mp[aW]] = aW;
				mp[aWf] = aXI, kE[mp[aWf]] = aWf
			}(ba)
		}();
		for (var aXG, cZ = aWf - 1, ba = 0; ba < cZ; ba++) dA.j8[mp[ba]] < dA.j8[mp[ba + 1]] && (aXG = mp[ba], mp[ba] = mp[ba + 1], mp[ba + 1] = aXG, kE[mp[ba]] = ba, kE[mp[ba + 1]] = ba + 1);
		! function() {
			for (var m6 = aWr, j3 = (aWr = !0, kE[d4.jL] >= aWb - 1 ? aWb - 2 : aWb - 1), aW = j3; 0 <= aW; aW--)
				if (aWp[aW] !== mp[aW] || aWq[aW] !== dA.j8[mp[aW]]) return;
			(j3 != aWb - 2 || aWp[aWb] === kE[d4.jL] && aWq[aWb] === dA.j8[d4.jL]) && (aWr = m6)
		}();
		for (var aW = aWb - 1; 0 <= aW; aW--) aWp[aW] = mp[aW], aWq[aW] = dA.j8[mp[aW]];
		aWp[aWb] = kE[d4.jL], aWq[aWb] = dA.j8[d4.jL];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.t = function(u, v) {
		if (aSA(u, v)) {
			if (__fx.utils.isPointInRectangle(u, v, iN.gap + 12, iN.gap + 12, aWi - 22, aWi - 22)) __fx.playerList.display(dA.vk);
			else {
				if (v - iN.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(u - iN.gap);
				u = aXK(v);
				0 <= u ? (aWt = n.o, aWu = !0, aWv = aWw = u, b1.g4() && (u = a5e(-1, aWw, aWb), aWs !== (u = u === aWb ? -1 : u)) && (aWs = u, aX1(), n.a5 = !0)) : (aWx && (aWx = !1, aX1(), n.a5 = !0), h.gQ(10, 0, new a37({
					aVk: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aX1(), n.a5 = !0
	};

	function aXK(v) {
		return (v -= iN.gap + aWi) < 0 ? Math.floor(v / aWj) - 1 : v < (aWb - 1) * aWj ? Math.floor(v / aWj) : v < a8x - aWi ? aWb - 1 : (v -= a8x - aWi, aWb + Math.floor(v / aWj))
	}

	function aSA(u, v) {
		return u >= iN.gap && u < iN.gap + aWX && v >= iN.gap && v < iN.gap + a8x
	}
	this.z = function(u, v) {
		var m6, aXJ;
		if (__fx.utils.isPointInRectangle(u, v, iN.gap + 12, iN.gap + 12, aWi - 22, aWi - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(u, v, iN.gap, iN.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), u - iN.gap)) return aXJ = aXK(v), u = aSA(u, v), v = !(!(aXJ < 0 && u) || b1.g4()), aWu ? (m6 = position, (position = a5e(0, position += aWv - aXJ, d4.jW - aWb)) !== m6 ? (aWx = v, aXJ = a5e(-
			1, aWv = aXJ, aWb), aWs = aXJ = aXJ !== aWb && u ? aXJ : -1, aX1(), n.a5 = !0) : aWx !== v && (aWx = v, aX1(), n.a5 = !0), !0) : (aXJ = (aXJ = a5e(-1, aXJ, aWb)) === aWb || !u || b1.g4() ? -1 : aXJ, (aWs !== aXJ || aWx !==
			v) && (aWs = aXJ, aWx = v, aX1(), n.a5 = !0))
	}, this.a1 = function(u, v) {
		if (!aWu) return !1;
		aWu = !1;
		var aXJ = aXK(v);
		var isEmptySpace = false;
		return b1.g4() && -1 !== aWs && (aWs = -1, aX1(), n.a5 = !0), n.o - aWt < 350 && aWw === aXJ && -1 !== (aXJ = (aXJ = a5e(-1, aXJ, aWb)) !== aWb && aSA(u, v) ? aXJ : -1) && (u = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aXJ + position] === undefined, __fx.leaderboardFilter.rivalsData[aXJ + position]?.representativeId ?? d4.jL) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mp[__fx.leaderboardFilter.filteredLeaderboard[aXJ + position] ?? (isEmptySpace = true, kE[d4.jL])]) : mp[aXJ + position]),
			aXJ === aWb - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kE[d4.jL]) >=
			position + aWb - 1 && (u = d4.jL), !isEmptySpace && d4.jD && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(u, dA.vk, d4.iC), 0 === dA.iR[u] || isEmptySpace || d4.iA && !d4.iC && !d4.g2 && u !== d4
			.jL || a0X.aKE(u, 800, !1, 0)), !0
	}, this.a2 = function(u, v, deltaY) {
		var aXN;
		return !(aWu || d4.fz || (aXN = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !aSA(u, v)) || (u = (u = a5e(-1, aXK(v), aWb)) === aWb || b1.g4() ? -1 : u, 0 < deltaY ? position < d4.jW - aWb && (position += Math.min(d4.jW - aWb -
			position, aXN), aWs = u, aX1(), n.a5 = !0) : 0 < position && (position -= Math.min(position, aXN), aWs = u, aX1(), n.a5 = !0), 0))
	}, this.a6 = function() {
		a7.drawImage(aWc, iN.gap, iN.gap)
	}
}

function aXO() {
	this.dk = function(player, id) {
		for (var aXP = dA.dB[player], e4 = aXP.length, aW = 0; aW < e4; aW++)
			if (dI.aHz(aXP[aW], id)) return !0;
		return !1
	}, this.dr = function(player, dP) {
		for (var aCz, aXQ, aK, aXP = dA.dB[player], e4 = aXP.length, aE = l.aH, aXS = dI.jd(dP), aXT = dI.je(dP), jc = -1, min = l.aH * l.aH + l.aJ * l.aJ, id = dK.dj(dI.dJ(dP)), aW = 0; aW < e4; aW++)(aXQ = (aXQ = aXS - (aCz = (aK = aXP[aW]) >>
			2) % aE) * aXQ + (aXQ = aXT - ~~((.5 + aCz) / aE)) * aXQ) < min && dI.aHz(aK, id) && (min = aXQ, jc = aCz);
		return jc
	}, this.aGr = function(aCx, aCz) {
		for (var id = dK.dj(dI.dJ(aCz)), aI0 = dI.aHy, aK = dI.dJ(aCx), aXU = -1, aW = 0; aW < 4; aW++) {
			var jP = aK + aI0[aW];
			dK.yO(jP) && dK.dj(jP) === id && (-1 === aXU || dI.aD8(dI.jO(jP), aCz) < dI.aD8(aXU, aCz)) && (aXU = dI.jO(jP))
		}
		return aXU
	}, this.aXV = function(player, dP) {
		for (var aI0 = dI.aHy, aK = dI.dJ(dP), aW = 0; aW < 4; aW++) {
			var jP = aK + aI0[aW];
			if (dK.yH(jP) && dK.yJ(player, jP)) return !0
		}
		return !1
	}, this.aGm = function(player, dP) {
		for (var aI0 = dI.aHy, aK = dI.dJ(dP), aW = 0; aW < 4; aW++) {
			var jP = aK + aI0[aW];
			if (dK.jQ(jP)) return !0;
			if (dK.yH(jP)) {
				jP = dK.jR(jP);
				if (player !== jP && jS.jT(player, jP)) return !0
			}
		}
		return !1
	}, this.ra = function(dP) {
		for (var aI0 = dI.aHy, aK = dI.dJ(dP), aW = 0; aW < 4; aW++) {
			var jP = aK + aI0[aW];
			if (dK.yH(jP)) {
				jP = dK.jR(jP);
				if (bK.dl.iS(jP)) return jP
			}
		}
		return -1
	}, this.dH = function(aK) {
		if (dK.yO(aK))
			for (var aI0 = dI.aHy, aW = 0; aW < 4; aW++)
				if (dK.dL(aK + aI0[aW])) return !0;
		return !1
	}, this.aAV = function(player, id) {
		for (var h4 = player << 3, h5 = h4 + d5.bf.d8[player], dU = d5.bf.dU, hV = d5.bf.hV, aW = h4; aW < h5; aW++) {
			var aLh = hV[aW];
			if (dU[aLh] === id) return aLh
		}
		return -1
	}, this.aXW = function(player) {
		return 0 === d5.bf.d8[player] ? -1 : d5.bf.hV[player << 3]
	}, this.aAT = function(iH, iI) {
		var e4 = d5.bf.d6;
		if (e4 < 1) return -1;
		for (var dh = d5.bf.dh, eA = 80, eC = -1, aW = 0; aW < e4; aW++) {
			var e3 = dI.aI2(iH, iI, dh[aW]);
			e3 < eA && (eA = e3, eC = aW)
		}
		return function(aW, iH, iI) {
			if (aW < 0) return;
			var aXb = d5.bf.dh[aW],
				aXc = dI.aI5(aXb),
				aXb = dI.aI7(aXb),
				aW = 20 * (.9 + .1 * Math.log10(d5.bf.he[aW]));
			return aW = Math.max(aW, dI.aI8(bK.en.a9t(.02, 1.7))), eO.v9(dI.aI4(iH), dI.aI6(iI), aXc, aXb, aW)
		}(eC, iH, iI) ? eC : -1
	}, this.dX = function(dW) {
		for (var e4 = d5.bf.d6, dU = d5.bf.dU, aW = 0; aW < e4; aW++)
			if (dU[aW] === dW) return dF.dG[2] = aW, !0;
		return !1
	}, this.a8C = function(player) {
		for (var h4 = player << 3, h5 = h4 + d5.bf.d8[player], hV = d5.bf.hV, he = d5.bf.he, k1 = 0, aW = h4; aW < h5; aW++) k1 += he[hV[aW]];
		return k1
	}, this.e6 = function(player, dR) {
		dR = d5.bf.dy[dR];
		return this.aXV(player, dR[dR.length - 1])
	}, this.e2 = function(aCx, aCz, e3, aXY) {
		var a43 = dI.jd(aCx),
			aCx = dI.je(aCx),
			a45 = dI.jd(aCz),
			aCz = dI.je(aCz),
			a45 = (e3 = Math.max(e3, 1), a45 - a43),
			aCz = aCz - aCx,
			rJ = eO.eP(Math.abs(a45) * aXY, e3),
			aXY = eO.eP(Math.abs(aCz) * aXY, e3);
		return dI.jm(a43 + Math.sign(a45) * rJ, aCx + Math.sign(aCz) * aXY)
	}, this.aOO = function(dx, dP) {
		for (var e4 = dx.length - 1, u = dI.jd(dP), v = dI.je(dP), aW = 0; aW < e4; aW++) {
			var aCx = dx[aW],
				aCz = dx[aW + 1],
				iw = dI.jd(aCx),
				aCx = dI.je(aCx),
				j1 = dI.jd(aCz),
				aCz = dI.je(aCz);
			if (!(u !== iw && u !== j1 && Math.sign(u - iw) === Math.sign(u - j1) || v !== aCx && v !== aCz && Math.sign(v - aCx) === Math.sign(v - aCz))) {
				if (iw === j1 || aCx === aCz) return aW;
				if (Math.abs(u - iw) === Math.abs(v - aCx) && Math.abs(u - j1) === Math.abs(v - aCz)) return aW
			}
		}
		return -1
	}, this.mu = function() {
		for (var aXe = mp[0], dn = d5.bf.dn, d6 = d5.bf.d6, e7 = [], aW = 0; aW < d6; aW++) bK.dl.dm(aXe, dn[aW] >> 3) && e7.push(aW);
		return e7
	}, this.aXf = function(player, dx) {
		for (var h4 = player << 3, h5 = h4 + d5.bf.d8[player], hV = d5.bf.hV, dy = d5.bf.dy, nd = dx[0], ne = dx[dx.length - 1], aW = h4; aW < h5; aW++) {
			var nD = dy[hV[aW]];
			if (nD[0] === nd && nD[nD.length - 1] === ne) return !0
		}
		return !1
	}
}

function s0() {
	this.aXg = function() {
		for (var id = gD.gE(20), colors = new Array(11), aW = 0; aW < 11; aW++) colors[aW] = new Uint8Array([gD.gE(8), gD.gE(8), gD.gE(8)]);
		var cR = bE.gO.gP(8);
		c0.aF6.dd({
			id: id,
			colors: colors,
			cR: cR
		})
	}, this.aXh = function(c4) {
		var lD = gD.gE(3),
			bX = gD.gE(5),
			bX = l8.aXi.tx(bX, gD.gE(30), gD.gE(30), gD.gE(30));
		cr.cs.lB(c4, bX, lD, 0)
	}, this.aXj = function(c4) {
		this.aXh(c4), bn.ih.pT(183, b9.bA.wf(b9.bA.wd(15))), 0 === c4 && 0 === bn.buffer.data[105].value.length ? cr.cs.lJ(0) : cr.rq.aXk(c4), 4 === cr.bf.aGQ(c4).a1c() ? 6 === bz.f() && cr.rp.np(c4) : 5 !== cr.bf.aGQ(c4).a1c() || 8 !== bz.f() &&
			10 !== bz.f() || cr.rn.aXl()
	}, this.aXm = function(c4) {
		var id = gD.gE(6);
		1 === id ? (bn.ih.pT(160, gD.gE(30)), cr.bf.a1Z(c4), y.aQw || cr.cs.lJ(1), lY.a31(), 8 === h.l2 && h.p7().a33()) : 21 === id ? 8 === h.l2 && h.p7().a34(17) : 22 === id && (bn.ih.pT(106, bn.buffer.data[110].value), bn.ih.pT(110, ""), 8 ===
			h.l2) && h.p7().a34(15)
	}, this.aXn = function() {
		var e4 = gD.gE(16),
			aXo = gD.gE(16);
		if (gD.aAA(55 + 10 * e4 + 16 * aXo)) {
			for (var e7 = [], aW = 0; aW < e4; aW++) e7.push(bE.lM.a2E(gD.gE(10)));
			lY.aO0(e7)
		} else cr.bf.aBV(0, 3270)
	}, this.aXp = function(c4) {
		for (var lD = gD.gE(3), bX = gD.gE(5), lD = {
				lD: lD,
				lC: l8.aXi.tx(bX, gD.gE(30), gD.gE(30), gD.gE(30))
			}, bX = gD.aA9(32), aXq = [], aW = 0; aW < 17; aW++) aXq.push(new Uint8Array(gD.gE(16)));
		for (aW = 0; aW < 17; aW++)
			for (var e7 = aXq[aW], e4 = e7.length, cy = 0; cy < e4; cy++) e7[cy] = gD.aA9(8);
		cu.show(aXq, bX, c4, lD)
	}
}

function a9o(jw, size, aOp, aXr, font) {
	var aW, aP = .2,
		canvas = document.createElement("canvas"),
		rL = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = jw, canvas.height = jw, rL.font = size + font, rL.textAlign = "center", rL.textBaseline = "middle", rL.fillStyle = "red", aW = 0; aW < aOp.length; aW++) rL.fillText(aOp[aW], .5 * jw, .5 * jw);
	return -1 < (canvas = function(pd) {
		var aW, fn, bX = pd.data;
		for (aW = bX.length - 4; 0 <= aW; aW -= 4)
			if (fn = bX[aW], aXr <= fn) return Math.floor(aW / (4 * jw));
		return -1
	}(rL.getImageData(0, 0, jw, jw))) && (aP = (canvas - .5 * jw + .1 * size) / size), Math.max(aP, 0)
}

function a2M() {
	this.zh = function(player, dP) {
		bK.dl.zU(0) && bK.dl.mz(player) && dI.aI9(dP) && (uY.p0.aXu(0, player, dP), d4.a9N.dd(player, dP))
	}, this.zm = function(player, ld, kM) {
		bK.dl.zU(1) && bK.dl.mz(player) && bK.dl.aXv(player, kM) && bK.dl.rg(player, ld, 12, 0) && bK.dl.aXw(player, kM) && ((kM = k2.a6p(player, dF.jV[0])) || k2.k3(player)) && (dA.vX[player]++, uY.p0.aXu(1, player, ld, dF.jV[0]), kN.kO.a6h(
			player, kM)) && (bK.dl.og(player), ob.aEv(player, ld), kN.kO.a6j(player))
	}, this.aJW = function(player, ld, oW) {
		bK.dl.zU(1) && bK.dl.mz(player) && d4.jD && bK.dl.aXv(player, oW) && bK.dl.aEU(player, oW) && bK.dl.aEV(player, bK.dl.ls(player, ld), oW) && aIT.dd(oW, dF.oZ[0]) && (uY.p0.aXu(2, player, ld, oW), k5.oV(player, oW))
	}, this.eV = function(player, ld, aJY) {
		dF.dG[1] = 7 & aJY;
		var dP = aJY >> 3;
		bK.dl.zU(1) && bK.dl.mz(player) && dI.aI9(dP) && d5.eD.d3(player) && d5.eD.dC(dP) && bK.dl.rg(player, ld, 32, 0) && d5.dv.dw(player, dP, 1) && (ob.aEx(player), uY.p0.aXu(3, player, ld, aJY), bK.dl.og(player), aIe.aIO.eV(player), d5.bf.ri(
			player))
	}, this.eb = function(player, ld, dW) {
		849 === ld ? this.aJb(player, dW) : bK.dl.zU(1) && bK.dl.mz(player) && bK.dl.rg(player, ld, 32, 0) && d5.zt.dY(player, dW) && (ob.aEx(player), uY.p0.aXu(4, player, ld, dW), bK.dl.og(player), aIe.aIO.eb(player), d5.bf.ri(player))
	}, this.aJb = function(player, dW) {
		bK.dl.zU(1) && bK.dl.mz(player) && d5.aXx.kK(player, dW) && uY.p0.aXu(4, player, 849, dW)
	}, this.aJc = function(player, kM) {
		513 === kM ? this.fv(player) : bK.dl.zU(1) && bK.dl.mz(player) && (kM = Math.min(kM, d4.jW), k2.a6p(player, kM)) && (uY.p0.aXu(5, player, kM), k2.a83(player, kM))
	}, this.aJf = function(player, x0) {
		(bK.dl.zU(1) || bK.dl.zU(2)) && bK.dl.mz(player) && (x0 = eO.h2(x0, 0, 1023), uY.p0.aXu(6, player, x0), oD.a3u(player, 0, x0))
	}, this.zz = function(player, aJh) {
		fU.zy(player) && (uY.p0.aXu(7, player, aJh), fU.aXy(player, aJh))
	}, this.aJj = function(player) {
		(bK.dl.zU(0) || bK.dl.zU(1)) && bK.dl.mz(player) && fT.iQ(player) && (uY.p0.aXu(8, player), aIc.aJj(player))
	}, this.aXz = function(player) {
		uY.p0.aXu(9, player), aIc.aXz(player)
	}, this.fv = function(player) {
		fU.a00(player) && (uY.p0.aXu(5, player, 513), fU.fv(player))
	}, this.zj = function(player, ld, dP, kM) {
		bK.dl.zU(1) && bK.dl.mz(player) && bK.dl.aXv(player, kM) && bK.dl.aXw(player, kM) && dI.aI9(dP) && zi.vJ.jU(player, dP) && (k2.a6p(player, dF.jV[0]) || k2.k3(player)) && (uY.p0.aXu(10, player, (ld << 10) + dF.jV[0], dP), kM = bK.dl.aHC(
			player, ld), dA.ks[player].push(dF.jY[0]), k2.dd(player, kM, dF.jV[0]), a6l.a6m(player, !0), ob.aEy(player))
	}
}

function aIv() {
	var aY0, aY1, aE, u, v, aY2, aY3;
	this.c = function() {
		aY0 = new Array(2), aY1 = new Array(2), this.ff = !1, aY3 = aY2 = j0 = ix = 0, iy = 1, this.resize()
	}, this.resize = function() {
		aE = (aE = Math.floor((bx.by.i2() ? .072 : .0502) * aD.lh)) < 8 ? 8 : aE;
		for (var aW = 1; 0 <= aW; aW--) aY0[aW] = document.createElement("canvas"), aY0[aW].width = aE, aY0[aW].height = aE, aY1[aW] = aY0[aW].getContext("2d", {
			alpha: !0
		});
		this.li(),
			function() {
				for (var aYH = Math.floor(1 + aE / 20), aW = 1; 0 <= aW; aW--) aY1[aW].clearRect(0, 0, aE, aE), aY1[aW].fillStyle = aB.a11, aY1[aW].beginPath(), aY1[aW].arc(aE / 2, aE / 2, aE / 2 - aYH, 0, 2 * Math.PI), aY1[aW].fill(), aY1[aW]
					.lineWidth = aYH, aY1[aW].fillStyle = aB.i8, aY1[aW].strokeStyle = aB.i8, aY1[aW].beginPath(), aY1[aW].arc(aE / 2, aE / 2, aE / 2 - aYH, 0, 2 * Math.PI), aY1[aW].stroke(), aRc(aY1[aW], 0, 0, aE, aYH, .3, 0 === aW)
			}()
	}, this.iu = function() {
		return -ix / iy
	}, this.iv = function() {
		return -j0 / iy
	}, this.aY7 = function(aY8, aCR) {
		ix = iy * aY8 - aCR
	}, this.aY9 = function(aYA, aCS) {
		j0 = iy * aYA - aCS
	}, this.t = function(aY6, aQ) {
		return d4.fz || ! function(aY6, aQ) {
			return Math.pow(aY6 - (u + aE / 2), 2) + Math.pow(aQ - (v + aE / 2), 2) < aE * aE / 4 || Math.pow(aY6 - (u + aE / 2), 2) + Math.pow(aQ - (v + 2 * aE), 2) < aE * aE / 4
		}(aY6, aQ) || bn.buffer.data[8].value ? (a0X.cZ() && (this.ff = !0, aY2 = aY6, aY3 = aQ), !1) : aQ < v + 1.25 * aE ? this.a2(Math.floor(aD.aE / 2), Math.floor(aD.aF / 2), -200) : this.a2(Math.floor(aD.aE / 2), Math.floor(aD.aF / 2),
			200)
	}, this.z = function(aY6, aQ) {
		var aYB, aYC, rJ, rK;
		return !a0X.cZ() || (aYB = ix, aYC = j0, ix += rJ = aY2 - aY6, j0 += rK = aY3 - aQ, oD.z(rJ, rK), this.oE(), aY2 = aY6, aY3 = aQ, aYB !== ix) || aYC !== j0
	}, this.a2 = function(iH, iI, deltaY) {
		var m5;
		if (a0X.cZ()) {
			if (0 < deltaY) m5 = (m5 = 500 / (500 + deltaY)) < .5 ? .5 : m5;
			else {
				if (!(deltaY < 0)) return !1;
				m5 = 2 < (m5 = (500 - deltaY) / 500) ? 2 : m5
			}
			this.aYD(iH, iI, m5), n.a5 = !0
		}
		return !0
	}, this.aYD = function(u, v, aK) {
		var gu;
		aK = gu = (gu = 1024 < (gu = aK) * iy ? 1024 / iy : gu) * iy < .125 ? .125 / iy : gu, oD.zoom(aK, u, v),
			function(gu, iH, iI) {
				iy *= gu, ix = (ix + iH) * gu - iH, j0 = (j0 + iI) * gu - iI, fY.oE()
			}(aK, u, v)
	}, this.oE = function() {
		var aDc = aD.aE / 16,
			vG = 0,
			aYG = aD.aF / 16,
			vH = 0;
		ix < -aD.aE + aDc && (vG = -aD.aE + aDc - ix), ix > iy * l.aH - aDc && (vG = iy * l.aH - aDc - ix), j0 < -aD.aF + aYG && (vH = -aD.aF + aYG - j0), j0 > iy * l.aJ - aYG && (vH = iy * l.aJ - aYG - j0), ix += vG, j0 += vH, xR.aO3(), oD.a3z(
			vG, vH)
	}, this.li = function() {
		u = aD.aE - aE - iN.gap, v = Math.floor(aD.aF / 2 - 1.25 * aE)
	}, this.a6 = function() {
		bn.buffer.data[8].value || (a7.drawImage(aY0[0], u, v), a7.drawImage(aY0[1], u, Math.floor(v + 3 * aE / 2)))
	}
}

function z1() {
	var aY;
	this.aOs = [], this.aY = document.createElement("div"), this.z2 = function(ak, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ak, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.aY.appendChild(
			title), title
	}, this.a8K = function(ak, marginBottom) {
		var aNY = document.createElement("p");
		return aNY.textContent = ak, aNY.style.fontSize = "0.75em", aNY.style.lineHeight = "1.2em", aNY.style.marginBottom = marginBottom || "0", this.aY.appendChild(aNY), aNY
	}, this.aTe = function(ak) {
		var aYI = document.createElement("p");
		return aYI.textContent = ak, aYI.style.fontSize = "1em", aYI.style.marginBottom = "0", aYI.style.whiteSpace = "pre-wrap", aYI.style.overflowWrap = "break-word", this.aY.appendChild(aYI), aYI
	}, this.aNQ = function(ed, fontSize) {
		var aY = document.createElement("div");
		return aY.innerHTML = ed, aY.style.fontSize = fontSize || "1em", aY.style.lineHeight = "1.2em", this.aY.appendChild(aY), aY
	}, this.z3 = function(aTP) {
		for (var aTS = aTP.aTS, e4 = aTS.length, aW = 0; aW < e4; aW++) this.aY.appendChild(aTS[aW])
	}, this.z5 = function(aX) {
		return this.aOs.push(aX), this.aY.appendChild(aX.k), aX
	}, this.resize = function() {
		for (var e4 = this.aOs.length, aW = 0; aW < e4; aW++) this.aOs[aW].resize && this.aOs[aW].resize()
	}, (aY = this.aY).style.position = "absolute", aY.style.height = "auto", aY.style.padding = "0.5em"
}

function aYJ() {
	var aYK, aYL = 8,
		aYM = null;

	function aYR(nV, dP, cW) {
		dP *= 4;
		nV[dP] = 255, nV[1 + dP] = 255, nV[2 + dP] = cW, nV[3 + dP] = 255
	}

	function aYT(rL, a9U) {
		var u, v, rJ, dP, aYU, aYV, jw = aYL,
			pd = bK.en.getImageData(rL, jw, jw),
			nV = pd.data,
			me = (jw >> 1) - .5,
			aYX = bK.nU.gs(a9U, .5);
		for (bK.nU.gx(a9U, aYX, 300) || bK.nU.h0(a9U, 100), v = 0; v < jw; v++)
			for (u = 0; u < jw; u++) aYV = (jw - 1.5) * (jw - 1.5) / 4, nV[dP = 4 * (v * jw + u)] = (aYU = (rJ = (rJ = u - me) * rJ + (rJ = v - me) * rJ) <= (jw - 4.5) * (jw - 4.5) / 4 ? aYX : a9U)[0], nV[1 + dP] = aYU[1], nV[2 + dP] = aYU[2], nV[3 +
				dP] = aYV < rJ ? 0 : 255;
		rL.putImageData(pd, 0, 0)
	}
	this.c = function() {
		var cW, jw, pt, rL, pd, nV;
		(aYK = aYK || new Array(d4.jW)).fill(null), cW = 255, jw = aYL + 4, pt = bK.en.nM(jw, jw), rL = bK.en.getContext(pt, !0), pd = bK.en.getImageData(rL, jw, jw), aYR(nV = pd.data, jw + 1, cW), aYR(nV, jw + 2, cW), aYR(nV, 2 * jw + 1, cW),
			aYR(nV, 2 * jw - 3, cW), aYR(nV, 2 * jw - 2, cW), aYR(nV, 3 * jw - 2, cW), aYR(nV, jw * (jw - 3) + 1, cW), aYR(nV, jw * (jw - 2) + 1, cW), aYR(nV, jw * (jw - 2) + 2, cW), aYR(nV, jw * (jw - 2) - 2, cW), aYR(nV, jw * (jw - 1) - 3, cW),
			aYR(nV, jw * (jw - 1) - 2, cW), rL.putImageData(pd, 0, 0), aYM = pt,
			function() {
				if (d4.jD)
					for (var pt = new Array(jE.rG.length), e4 = d4.jW, aYP = aYK, y7 = jE.y7, aW = 0; aW < e4; aW++) {
						var tH = y7[aW];
						pt[tH] || (pt[tH] = function(tH) {
							var pt = bK.en.nM(aYL, aYL),
								rL = bK.en.getContext(pt, !0),
								e7 = dF.y6;
							return e7.set(jE.aNe[tH]), aYT(rL, e7), pt
						}(tH)), aYP[aW] = pt[tH]
					}
			}()
	}, this.a6 = function() {
		var aW, player, aTT, vA, k1, aI3, aYZ, aYb, aYc, dh = d5.bf.dh,
			dn = d5.bf.dn,
			he = d5.bf.he,
			hf = d5.bf.hf,
			aYd = aYK,
			aYe = d4.jL,
			e4 = d5.bf.d6,
			aUB = aD.aE,
			aUC = aD.aF,
			aUE = l.aH << 4,
			jP = iy,
			aK = jP / aYL,
			iw = ix / jP,
			iz = j0 / jP,
			rJ = (aUB + ix) / jP - iw,
			rK = (aUC + j0) / jP - iz,
			rL = a7;
		for (rL.imageSmoothingEnabled = jP < 9, bK.en.textAlign(rL, 1), bK.en.textBaseline(rL, 1), aW = 0; aW < e4; aW++) player = dn[aW] >> 3, k1 = he[aW], aTT = .9 + .1 * Math.log10(k1), vA = (aI3 = dh[aW]) % aUE / 16 - aTT, aI3 = aUC * (Math
			.floor(aI3 / aUE) / 16 - aTT - iz) / rK, aYZ = -2 * (aYc = jP * aTT) * (1 + (aYb = +(player === aYe)) / 8), aYb = aYb * aYc / 4, (aYc = aUB * (vA - iw) / rJ) < aYZ || aI3 < aYZ || aUB + aYb < aYc || aUC + aYb < aI3 || (vA = 2 *
			aTT * aK, aYZ = aTT * jP, null === (aYb = aYd[player]) && (aYd[player] = aYb = function(player) {
				var pt = bK.en.nM(aYL, aYL);
				return aYT(bK.en.getContext(pt, !0), dK.y5(player)), pt
			}(player)), player === aYe && (rL.setTransform(vA, 0, 0, vA, aYc - 2 * vA, aI3 - 2 * vA), rL.drawImage(aYM, 0, 0)), rL.setTransform(vA, 0, 0, vA, aYc, aI3), rL.drawImage(aYb, 0, 0), (aTT = Math.floor(function(k1) {
				if (k1 < 1e3) return .42;
				if (k1 < 1e4) return .34;
				if (k1 < 1e6) return .26;
				if (k1 < 1e8) return .19;
				return .15
			}(k1) * aYZ)) < 6) || (rL.setTransform(1, 0, 0, 1, 0, 0), rL.fillStyle = hf[aW] ? aB.aLN : aB.i8, rL.font = bK.en.i3(1, aTT), rL.fillText(bK.bL.bB(k1), aYc + aYZ, aI3 + aYZ + .1 * aTT));
		rL.imageSmoothingEnabled = !1, rL.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aYh() {
	function aYm(player, k1, aYl, df) {
		var kM;
		if (dK.jQ(aYl)) kM = d4.jW;
		else {
			if ((kM = dK.jR(aYl)) === player) return void ob.a7b(player, k1 - bK.dl.oa(player, k1), 12);
			if (!jS.jT(player, kM)) return void ko.kp.aL5(player, kM, k1)
		}
		k2.a6p(player, kM) || k2.k3(player) ? (dA.ks[player].push(df << 2), k2.dd(player, k1, kM), a6l.a6m(player, !0)) : ob.a7b(player, k1, 12)
	}
	this.kK = function() {
		for (var db = d5.bf.db, dh = d5.bf.dh, hd = d5.bf.hd, aW = d5.bf.d6 - 1; 0 <= aW; aW--) 65535 === hd[aW] && function(aW, df, tI) {
			if (6 === tI) {
				if (d5.dc.aOI(aW, df)) return d5.bf.e0[aW]++, d5.bf.hd[aW] = 0, 0
			} else {
				var player = d5.bf.dn[aW] >> 3,
					aW = d5.bf.he[aW];
				ob.aEz(player), tI < 4 ? aYm(player, aW, df + dI.aHx[tI] << 2, df) : 4 === tI ? function(player, k1, df) {
					var aW, ja, aI0 = dI.aHy,
						jP = dI.dJ(df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.jQ(ja)) return aYm(player, k1, ja, df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.yH(ja) && !dK.yJ(player, ja)) return aYm(player, k1, ja, df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.yH(ja)) return aYm(player, k1, ja, df)
				}(player, aW, df) : 5 === tI && function(player, k1, df) {
					var aW, ja, aI0 = dI.aHy,
						jP = dI.dJ(df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.yH(ja) && dK.yJ(player, ja)) return aYm(player, k1, ja, df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.yH(ja)) return aYm(player, k1, ja, df);
					for (aW = 0; aW < 4; aW++)
						if (ja = jP + aI0[aW], dK.jQ(ja)) return aYm(player, k1, ja, df)
				}(player, aW, df)
			}
			return 1
		}(aW, dI.dg(dh[aW]), db[aW] % 64) && (d5.dc.aKQ(aW), d5.aSU.hW(aW))
	}, this.aYj = function(player, dP, tI, dW, k1) {
		if (!(5 <= tI)) {
			var aYe = d4.jL;
			if (bK.dl.mz(aYe) && jS.jT(player, aYe) && player !== aYe && 0 !== dA.dB[aYe].length && bK.dl.aYk(player, 5)) {
				for (var aYl, jg = !1, aW = 0; aW < 4; aW++)
					if (aYl = dP + dI.aHx[aW] << 2, dK.dL(aYl) && !dK.jQ(aYl) && dK.jR(aYl) === aYe) {
						jg = !0;
						break
					} jg && (eX.aSa(719, 0), tI = k1 < 25e3 ? L(448) + " (" + bK.bL.bB(k1) + ") ⛵" : L(449) + " (" + bK.bL.bB(k1) + ") 🚢", eX.eY(180, tI, 719, player, aB.aLv, aB.ea, -1, !0, void 0, {
					eN: 1,
					dW: dW
				}))
			}
		}
	}
}

function a6I() {
	var yo, yp, yq, yy;

	function yr() {
		yu(), 2 !== d4.data.spawningType || bK.nU.h3(d4.data.spawningData) || (d4.data.spawningType = 0), 2 !== d4.data.spawningType && (d4.data.spawningData = null), h.yw()[19] = null, h.ej()
	}

	function yu() {
		2 === d4.data.spawningType && bK.nU.hJ(yq.yx(), d4.data.spawningData, l.aYp - 1)
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(450), [new ei("⬅️ " + L(2), yr)]), yp = new ys(yo.em, (function(yy) {
		var hn = new z1,
			c3 = (hn.z2(L(36)), [L(201), L(399), L(39)]),
			value = d4.data.spawningType;
		0 === d4.data.gameMode && (c3.splice(1, 1), 0 < value) && (value = 1);
		hn.z3(new z4({
			c3: c3,
			value: value
		}, function(cW) {
			yu(), d4.data.spawningType = cW, 0 === d4.data.gameMode && 1 === cW && (d4.data.spawningType = 2), 2 !== d4.data.spawningType || d4.data.spawningData || (d4.data.spawningData = new Uint16Array(2 * d4.jW)), h.gQ(24)
		})), yy.push(hn)
	}(yy = []), function(yy) {
		var hn = new z1;
		hn.z2("My Spawn"), hn.z5(new xX({
			value: d4.data.selectableSpawn
		}, L(451), function(value) {
			d4.data.selectableSpawn = value
		})), yy.push(hn)
	}(yy), function(yy) {
		var hn = new z1,
			aYr = (hn.z2("Seed"), new a0w({
				cW: -1,
				value: d4.data.spawningSeed
			}, 1, 0, function(k) {
				var value = Math.abs(Math.floor(k.target.value)) % 16384;
				k.target.value = d4.data.spawningSeed = value
			}));
		hn.z5(aYr), hn.z5(new a7x([new ei(L(201), function() {
			aYr.k.value = d4.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), yy.push(hn)
	}(yy), function(yy) {
		var hn;
		2 === d4.data.spawningType && ((hn = new z1).z2("Data"), (yq = new z7(0, 1, 0, 1)).z8(bK.bL.z9(d4.data.spawningData, 2)), hn.z5(yq), yy.push(hn))
	}(yy), yy))
}

function aYs() {
	var c3 = aYt(l.gF);
	c3 && aYu(c3[0], c3[1], c3[2], c3[3], c3[4])
}

function aYt(gF) {
	return 2 === gF ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === gF ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === gF ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === gF ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === gF ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aYu(aYv, aYw, aYx, aYy, aYz) {
	for (var u, v, aQ4, aQ5, gu, aZ2, aI3 = aYv.length - 1, aZ0 = l.aH + l.aJ, e4 = (aZ0 *= aZ0, aYx.length), aZ1 = Array(e4), aW = e4 - 1; 0 <= aW; aW--) aZ1[aW] = aYx[aW] * aYx[aW];
	var aZ3 = new Array(e4),
		a4x = new Array(e4),
		aZ4 = new Array(e4),
		hB = pi.pj();
	if (void 0 === aYz)
		for (aYz = new Array(e4), aW = e4 - 1; 0 <= aW; aW--) aYz[aW] = 0;
	for (aW = 1; aW < e4; aW++) aZ3[aW] = aZ1[aW] - aZ1[aW - 1], a4x[aW] = aYy[aW] - aYy[aW - 1], aZ4[aW] = aYz[aW] - aYz[aW - 1];
	for (u = l.aH - 1; 0 <= u; u--)
		for (v = l.aJ - 1; 0 <= v; v--) {
			for (aQ4 = aZ0, aW = aI3; 0 <= aW; aW--) aQ4 = (aQ5 = (u - aYv[aW]) * (u - aYv[aW]) + (v - aYw[aW]) * (v - aYw[aW])) < aQ4 ? aQ5 : aQ4;
			for (gu = aYy[e4 - 1], aZ2 = aYz[e4 - 1], aW = 1; aW < e4; aW++)
				if (aQ4 < aZ1[aW]) {
					gu = aYy[aW - 1] + pp((aQ4 - aZ1[aW - 1]) * a4x[aW], aZ3[aW]), aZ2 = aYz[aW - 1] + pp((aQ4 - aZ1[aW - 1]) * aZ4[aW], aZ3[aW]);
					break
				} aZ5(l.aH * v + u, gu, aZ2, hB)
		}
}

function aZ5(cW, gu, aZ2, hB) {
	gu < 500 ? hB[cW] = eO.eP(hB[cW] * gu * 2, 1e3) : 500 < gu && (hB[cW] += eO.eP(2 * (1e4 - hB[cW]) * (gu - 500), 1e3)), hB[cW] += eO.eP(aZ2 * (10 * gu - hB[cW]), 1e3)
}

function p5() {
	var aZ6 = 0;

	function aZB(ak, id) {
		console.log(ak), aZ6 || (id ? 1 === id ? eX.aZ8 = L(453) + ": " + ak : h.gQ(4, 3, new ec(L(454), ak, 1)) : h.gQ(4, 3, new ec("⚠️ " + L(452), ak, 1)))
	}
	this.gP = function(ak, aZ7) {
		var aI3, aX;
		return aZ6 = aZ7, bE.bA.nI(bE.bA.nJ(bE.bA.a71(ak))), eX.aZ8 = "", !! function() {
			if (gD.size < 10) aZB("File Too Small");
			else {
				var aZD = gD.gE(12),
					af = (aZD !== lT.rVersion && (af = "Incompatible Version   Required: " + lT.rVersion, aZB(af = (af += "   Found: " + aZD) + ("   Compatible at " + cr.bf.aGW() + "/" + aZD), 1)), gD.gE(12)),
					aZE = gD.gE(31);
				if (aZE !== gD.size) aZB("Size Error: Stated Size " + aZE + " Actual Size " + gD.size);
				else if (function(aF, aZD) {
						for (var nD = gD.eG, e4 = gD.size, lS = aZD, aW = 3; aW < e4; aW++) lS = lS + nD[aW] & 4095;
						return lS === aF || (aZB("Hash Error: " + lS + " " + aF + " " + e4), !1)
					}(af, aZD)) return 1
			}
			return
		}() && (aI3 = gD, (aX = d4.data = new uP).mapType = aI3.gE(2), aX.mapProceduralIndex = aI3.gE(8), aX.mapRealisticIndex = aI3.gE(8), aX.mapSeed = aI3.gE(14), aX.mapName = aI3.aAE(5), 2 === aX.mapType && aI3.aAF(), aX.passableWater =
			aI3.gE(1), aX.passableMountains = aI3.gE(1), aX.playerCount = aI3.gE(10), aX.humanCount = aI3.gE(10), aX.selectedPlayer = aI3.gE(9), aX.gameMode = aI3.gE(1), aX.playerMode = aI3.gE(2), aX.battleRoyaleMode = aI3.gE(2), aX
			.numberTeams = aI3.gE(4), aX.isZombieMode = aI3.gE(1), aX.isContest = aI3.gE(1), aX.isReplay = aI3.gE(1), aX.elo = aI3.aAB(2, 14, 2), aX.colorsType = aI3.gE(1), aX.colorsPersonalized = aI3.gE(1), aX.colorsData = aI3.aAB(10, 18,
				512), aX.selectableColor = aI3.gE(1), aX.teamPlayerCount = aI3.aAB(4, 10, 9), aX.neutralBots = aI3.gE(1), aX.botDifficultyType = aI3.gE(2), aX.botDifficultyValue = aI3.gE(4), aX.botDifficultyTeam = aI3.aAB(4, 4, 9), aX
			.botDifficultyData = aI3.aAB(10, 4, 512), aX.spawningType = aI3.gE(2), aX.spawningSeed = aI3.gE(14), aX.spawningData = aI3.aAB(11, 12, 1024), aX.selectableSpawn = aI3.gE(1), aX.playerNamesType = aI3.gE(2), aX.playerNamesData = aI3
			.aAD(10, 5, 512), aX.selectableName = aI3.gE(1), aX.aIncomeType = aI3.gE(2), aX.aIncomeValue = aI3.gE(8), aX.aIncomeData = aI3.aAB(10, 8, 512), aX.tIncomeType = aI3.gE(2), aX.tIncomeValue = aI3.gE(8), aX.tIncomeData = aI3.aAB(10,
				8, 512), aX.iIncomeType = aI3.gE(2), aX.iIncomeValue = aI3.gE(8), aX.iIncomeData = aI3.aAB(10, 8, 512), aX.sResourcesType = aI3.gE(2), aX.sResourcesValue = aI3.gE(11), aX.sResourcesData = aI3.aAB(10, 11, 512), aX.a5G = aI3
			.aAB(10, 30, 0), !! function() {
				var aI3 = gD,
					nC = aI3.gE(5),
					aZG = aI3.gE(30),
					aZH = aI3.gE(30);
				if (aZG + aZH > 8 * aI3.size) return void aZB("Corrupted File");
				return function(e4) {
						var aZK = new Uint8Array(e4),
							aZL = new Uint16Array(e4),
							aZM = new Uint32Array(e4),
							aZN = new Uint32Array(e4);
						uY.p0.a5H = aZK, uY.p0.a5I = aZL, uY.p0.a5J = aZM, uY.p0.a5K = aZN;
						for (var aW = 0; aW < e4; aW++) {
							var id = gD.gE(4);
							aZK[aW] = id, aZL[aW] = gD.gE(9), 0 === id ? aZM[aW] = gD.gE(22) : 1 === id ? (aZM[aW] = gD.gE(10), aZN[aW] = gD.gE(10)) : 2 === id ? (aZM[aW] = gD.gE(10), aZN[aW] = gD.gE(9)) : 3 === id ? (aZM[aW] = gD.gE(10),
								aZN[aW] = gD.gE(27)) : 4 === id ? (aZM[aW] = gD.gE(10), aZN[aW] = gD.gE(16)) : 5 === id || 6 === id ? aZM[aW] = gD.gE(10) : 7 === id ? aZM[aW] = gD.gE(1) : 10 === id && (aZM[aW] = gD.gE(20), aZN[aW] = gD
								.gE(22))
						}
					}(aZG),
					function(e4, nC) {
						var a5M = new Uint8Array(e4),
							a5L = new Array(e4);
						a5L.fill(0), uY.p0.a5M = a5M, uY.p0.a5L = a5L;
						for (var aW = 0; aW < e4; aW++) a5M[aW] = gD.gE(1), a5L[aW] = gD.gE(nC)
					}(aZH, nC), 1
			}()) && (gD.cW < 8 * gD.size - 13 || gD.cW > 8 * gD.size ? (aZB("Out Of Bounds Error: " + gD.cW + " " + 8 * gD.size), !1) : (uY.p0.aUJ = ak, 2 !== d4.data.mapType || (aZB("Load base64 image...", 2), aZ7)))
	}, this.uZ = function(uX, aZC) {
		var pt = document.createElement("canvas"),
			rL = pt.getContext("2d");
		if (pt.width = uX.width, pt.height = uX.height, rL.drawImage(uX, 0, 0), d4.data.canvas = pt, aZ6 || aZC) return d4.fL ? void 0 : (d4.data.mapType = 2, h.i(), void h.gQ(19));
		uY.p9()
	}
}

function z4(a0x, aNE) {
	this.aTS = [];
	var aZO = this.aTS;

	function click() {
		for (var aW = 0; aW < aZO.length; aW++) aZO[aW].textContent = aZO[aW].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var cW = parseInt(this.name);
		void 0 !== a0x.cW && bn.ih.pT(a0x.cW, cW), aNE && aNE(cW)
	}
	for (var aZP, e4 = a0x.c3.length, aW = 0; aW < e4; aW++)(aZP = document.createElement("p")).textContent = "⚪ " + a0x.c3[aW], aZP.style.margin = "0", aZP.name = "" + aW, aZP.style.cursor = "pointer", aZP.style.fontSize = "1em", aZP
		.addEventListener("click", click), aZO.push(aZP);
	aZO[a0x.value].textContent = aZO[a0x.value].textContent.replace("⚪", "🟢")
}

function rr() {
	this.aZQ = function() {
		l7.eH(39), l7.eK(1, 0), l7.eK(6, 16), cr.cs.aZR(), cr.bf.send(0, l7.eG)
	}, this.aXk = function(c4) {
		l7.eH(127), l7.eK(1, 0), l7.eK(6, 17), bE.bA.a74(bn.buffer.data[105].value, 5), bE.bA.a74(bn.buffer.data[106].value, 15), cr.bf.send(c4, l7.eG)
	}, this.a3B = function() {
		l7.eH(97), l7.eK(1, 0), l7.eK(6, 18), bE.bA.a74(bn.buffer.data[110].value, 15), cr.bf.send(0, l7.eG)
	}, this.a30 = function(nw) {
		var e4 = nw.ak.length;
		l7.eH(21 + 16 * e4), l7.eK(1, 0), l7.eK(6, 29), l7.eK(6, nw.action), l7.eK(8, e4), b9.lM.lN(nw.ak), cr.bf.send(0, l7.eG)
	}, this.aZT = function(qF, colors, aZU, cR) {
		lH.c(), lH.eK(1, 0), lH.eK(6, 16), lH.eK(20, Math.min(qF, 1e6));
		for (var aW = 0; aW < 11; aW++)
			for (var ba = 0; ba < 3; ba++) lH.eK(8, colors[aW][ba]);
		qF = lY.data.a50(aZU.trim());
		lH.eK(8, -1 === qF ? 255 : qF), b9.gO.iX(cR.trim().substring(0, 180), 8, lH), cr.bf.send(0, lH.lI())
	}, this.a2y = function(data) {
		l7.eH(43), l7.eK(1, 0), l7.eK(6, 25), l7.eK(6, data.action), bE.bA.a74(data.bC, 5), cr.bf.send(0, l7.eG)
	}, this.aKg = function(data) {
		l7.eH(75), l7.eK(1, 0), l7.eK(6, 27), l7.eK(6, data.action), bE.bA.a74(data.bC, 5), l7.eM(32, data.value), cr.bf.send(0, l7.eG)
	}
}

function aJE() {
	function aZZ() {
		return {
			aH: l.aH,
			aJ: l.aJ,
			aL: l.aL,
			nQ: l.nQ,
			nR: l.nR,
			nT: l.nT,
			gF: l.gF,
			mapSeed: l.mapSeed,
			m: l.m
		}
	}

	function aZY(aW) {
		return 1 !== aW && l.aK4(aW) && aW !== l.aZc()
	}
	this.pb = 25, this.aZV = 13, this.aYp = 4096, this.aH = 0, this.aJ = 0, this.aL = null, this.nQ = null, this.nR = null, this.nT = null, this.gF = 0, this.mapSeed = 0, this.m = !1, this.nS = new a0K, this.nK = new aZW, this.pa = new aDh, this.c =
		function() {
			this.nK.c()
		}, this.eH = function(map, aZX) {
			((map %= this.pb) !== this.gF || aZY(this.gF) && aZX !== this.mapSeed) && (this.m = !1, this.nS.a0U(), kH.a0b(map), this.gF = map, this.mapSeed = aZX, aZY(map) && (l.nK.nL[map].a0Z = aZX), this.aK4(this.gF) ? (map = l.nK.nL[this.gF], this
				.aH = map.aE, this.aJ = map.aF, kH.a0b(map.a0Z), pi.eH([this.aH, this.aJ, map.t3, map.sm]), aYs(), aDi.pc(), pi.t0()) : aSD())
		}, this.aNN = function(map, aZX) {
			var pk = aZZ(),
				map = (this.eH(map, aZX), this.nS.a0U(), aZZ());
			return aZX = pk, l.aH = aZX.aH, l.aJ = aZX.aJ, l.aL = aZX.aL, l.nQ = aZX.nQ, l.nR = aZX.nR, l.nT = aZX.nT, l.gF = aZX.gF, l.mapSeed = aZX.mapSeed, l.m = aZX.m, map
		}, this.aZb = function(canvas) {
			canvas && this.aL !== canvas && (this.aH = canvas.width, this.aJ = canvas.height, this.aL = canvas, this.nQ = this.aL.getContext("2d", {
				alpha: !1
			}), this.pd = this.nQ.getImageData(0, 0, this.aH, this.aJ), this.nT = this.pd.data, this.gF = this.aZc(), this.mapSeed = 0, l.nK.nL[this.gF].name = d4.data.mapName)
		}, this.jI = function(aW) {
			return 3 === aW || 7 === aW || 9 === aW || 21 === aW || aW === this.aZc()
		}, this.a9Y = function(aW) {
			return 2 === aW || 7 === aW || 9 === aW || 20 === aW
		}, this.pg = function(aW) {
			return 1 === aW
		}, this.aZc = function() {
			return this.pb
		}, this.aK4 = function(aW) {
			return void 0 === this.nK.nL[aW].a0V
		}, this.aNM = function(aX) {
			return 0 === aX.mapType ? aX.mapProceduralIndex < 10 ? aX.mapProceduralIndex : 10 + aX.mapProceduralIndex : 1 === aX.mapType ? 10 <= aX.mapRealisticIndex ? 22 + aX.mapRealisticIndex - 10 : aX.mapRealisticIndex + 10 : void 0
		}, this.aK5 = function(aX, aZd) {
			0 === aX.mapType ? aX.mapProceduralIndex = aZd < 10 ? aZd : aZd - 10 : 1 === aX.mapType && (aX.mapRealisticIndex = aZd - (22 <= aZd ? 12 : 10))
		}
}

function p1() {
	this.a5H = null, this.a5I = null, this.a5J = null, this.a5K = null, this.a5M = null, this.a5L = null, this.aUJ = "";
	var aZe = 0;
	this.c = function() {
		this.a5H = [], this.a5I = [], this.a5J = [], this.a5K = [], this.a5M = [0], this.a5L = [0], aZe = 0, this.aUJ = ""
	}, this.aXu = function(id, pk, px, v4) {
		d4.g2 || 2 === d4.fL || (0 === this.a5M[aZe] && (this.a5L[aZe] ? (this.a5M.push(1), this.a5L.push(0), aZe++) : this.a5M[aZe] = 1), this.a5H.push(id), this.a5I.push(pk), this.a5J.push(void 0 === px ? 0 : px), this.a5K.push(void 0 === v4 ?
			0 : v4), this.a5L[aZe]++)
	}, this.kK = function() {
		0 === this.a5M[aZe] ? this.a5L[aZe]++ : (this.a5M.push(0), this.a5L.push(0), aZe++)
	}
}

function aZW() {
	this.nL = null, this.aND = null, this.aNG = null, this.c = function() {
		this.aEK = [L(455), L(456), L(457), L(458), L(459), L(460), L(461), L(462), L(463), L(464), L(465), L(466), L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), "Mare Nostrum"];
		var aZf = [120, 105, 92],
			cos = [12, 12, 60],
			aZg = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aZh = [140, 130, 120],
			aZi = [12, 12, 76],
			aZj = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aZk = [130, 117, 106],
			aZl = [12, 12, 68],
			aZm = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.nL = new Array(l.pb + 1), __fx.customLobby.setMapInfo(this.nL), this.nL[0] = {
			aE: 230,
			aF: 230,
			t3: 1e3,
			sm: 2e3,
			a0Z: 173
		}, this.nL[1] = {
			aE: 800,
			aF: 800,
			t3: 100,
			sm: 50,
			a0Z: 43
		}, this.nL[2] = {
			aE: 512,
			aF: 512,
			t3: 128,
			sm: 32,
			a0Z: 0
		}, this.nL[3] = {
			aE: 960,
			aF: 960,
			t3: 60,
			sm: 8,
			a0Z: 0
		}, this.nL[4] = {
			aE: 900,
			aF: 900,
			t3: 100,
			sm: 5,
			a0Z: 0
		}, this.nL[5] = {
			aE: 1e3,
			aF: 1e3,
			t3: 100,
			sm: 40,
			a0Z: 0
		}, this.nL[6] = {
			aE: 1e3,
			aF: 1e3,
			t3: 100,
			sm: 20,
			a0Z: 0
		}, this.nL[7] = {
			aE: 1024,
			aF: 1024,
			t3: 128,
			sm: 32,
			a0Z: 0
		}, this.nL[8] = {
			aE: 820,
			aF: 820,
			t3: 200,
			sm: 100,
			a0Z: 0
		}, this.nL[9] = {
			aE: 1024,
			aF: 1024,
			t3: 128,
			sm: 32,
			a0Z: 0
		}, this.nL[10] = {
			nm: aZh,
			nn: aZi,
			a0V: aZj
		}, this.nL[11] = {
			nm: aZk,
			nn: aZl,
			a0V: aZm
		}, this.nL[12] = {
			nm: aZk,
			nn: aZl,
			a0V: aZm
		}, this.nL[13] = {
			nm: aZf,
			nn: cos,
			a0V: aZg
		}, this.nL[14] = {
			nm: aZf,
			nn: cos,
			a0V: aZg
		}, this.nL[15] = {
			nm: aZh,
			nn: aZi,
			a0V: aZj
		}, this.nL[16] = {
			nm: aZh,
			nn: aZi,
			a0V: aZj
		}, this.nL[17] = {
			nm: aZf,
			nn: cos,
			a0V: aZg
		}, this.nL[18] = {
			nm: aZk,
			nn: aZl,
			a0V: aZm
		}, this.nL[19] = {
			nm: aZf,
			nn: cos,
			a0V: aZg
		}, this.nL[20] = {
			aE: 1024,
			aF: 1024,
			t3: 128,
			sm: 32,
			a0Z: 0
		}, this.nL[21] = {
			aE: 940,
			aF: 940,
			t3: 80,
			sm: 8,
			a0Z: 0
		}, this.nL[22] = {
			nm: aZk,
			nn: aZl,
			a0V: aZm
		}, this.nL[23] = {
			nm: aZh,
			nn: aZi,
			a0V: aZj
		}, this.nL[24] = {
			nm: [157, 136, 117],
			nn: [16, 13, 68],
			a0V: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aZp: "[OG] Neutronian"
		};
		for (var aW = 0; aW < l.pb; aW++) this.nL[aW].name = this.aEK[aW];
		this.nL[l.pb] = {
			name: ""
		}, this.aND = new Uint8Array(12);
		for (aW = 0; aW < 10; aW++) this.aND[aW] = aW;
		for (this.aND[10] = 20, this.aND[11] = 21, this.aNG = new Uint8Array(l.aZV), aW = 0; aW < 10; aW++) this.aNG[aW] = 10 + aW;
		this.aNG[10] = 22, this.aNG[11] = 23, this.aNG[12] = 24
	}
}

function aIj() {
	this.aZq = "https://territorial.io/changelog", this.aOi = "https://territorial.io/terms", this.aOj = "https://territorial.io/privacy", this.aZr = "https://territorial.io/tutorial", this.aZs = "https://territorial.io/players", this.aZt =
		"https://territorial.io/clans", this.aZu = "https://territorial.io/clan-results", this.aOh = "https://patreon.com/c/territorial", this.aCN = "https://play.google.com/store/apps/details?id=territorial.io", this.aCO =
		"https://apps.apple.com/app/id1581110913", this.aCP = "https://discord.gg/pthqvpTXmh", this.aCQ = "https://www.instagram.com/davidtschacher/", this.aS3 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function rx() {
	this.a1j = function(c4, eG) {
		gD.c(eG), 0 === gD.size ? cr.bf.aBV(c4, 3205) : __fx.customLobby.isCustomMessage(eG) || ((0 === gD.gE(1) ? function(c4) {
			var aZx = gD.gE(6);
			0 === aZx ? function(c4) {
					if (0 === c4 && 8 !== bz.f()) {
						h.bf.a2D();
						for (var aZz = gD.gE(12), aa0 = gD.gE(6), e7 = new Array(aZz), aW = 0; aW < aZz; aW++) e7[aW] = gD.gE(aa0);
						y.aQz(e7)
					}
				}(c4) : 2 === aZx ? cr.ry.g8(c4) : 3 === aZx || 4 === aZx ? aGB.c() : 5 === aZx ? cr.rz.aXg() : 9 === aZx ? cr.rz.aXj(c4) : 10 === aZx ? cr.s1.aBT() : 11 === aZx ? cr.rz.aXm(c4) : 12 === aZx ? cr.s1.aBU() : 13 ===
				aZx ? cr.s3.aSo() : 14 === aZx ? cr.s3.aSp() : 15 === aZx ? cr.rz.aXn() : 16 === aZx ? cr.ry.gS(c4) : 17 === aZx ? cr.ry.gf(c4) : 19 === aZx ? cr.ry.gn(c4) : 20 === aZx ? cr.rz.aXh(c4) : 21 !== aZx && 22 !== aZx &&
				23 === aZx && cr.rz.aXp(c4)
		} : function(c4) {
			if (8 !== bz.f() && !aGB.aa1()) return;
			if (c4 !== cr.bf.fH) cr.bf.aBV(c4, 3244);
			else if (0 === gD.gE(1)) n.qQ.aPr(gD.eG);
			else {
				var aW, c4 = gD.gE(2);
				if (0 === c4) {
					var x0, rn = gD.gE(9);
					0 !== dA.iR[rn] && 0 !== dA.iR[d4.jL] && (x0 = gD.gE(10), eX.aJe(rn, d4.jL, x0), oD.a3u(rn, 1, x0))
				} else if (1 === c4) ! function() {
					var rn = gD.gE(9);
					0 !== dA.iR[rn] && 0 !== dA.iR[d4.jL] && aIY.aRL(0, [rn], !0) && eX.aa8(rn, 1)
				}();
				else if (2 === c4) ! function() {
					var rn = gD.gE(9),
						target = gD.gE(9);
					0 !== dA.iR[rn] && 0 !== dA.iR[target] && 0 !== dA.iR[d4.jL] && aIY.aRL(1, [rn], !0) && (oD.a3u(rn, 3, 96), oD.a3u(target, 4, 96), eX.aa9(rn, target))
				}();
				else if (lT.lV && !lT.lW) {
					var e4 = 540;
					for (l7.eH(17287), l7.eK(1, 0), l7.eK(6, 10), e4 = Math.min(ko.a2N.aa7.length, 540), aW = 0; aW < e4; aW++) l7.eM(32, ko.a2N.aa7[aW]);
					cr.bf.send(cr.bf.fH, l7.eG)
				}
			}
		})(c4), n.qZ())
	}
}

function aIl() {
	var ag = bK.color;
	this.aC = ag.uz(0, 0, 0), this.a11 = ag.aCf(0, 0, 0, .7), this.aM = ag.aCf(0, 0, 0, .5), this.i6 = ag.aCf(0, 0, 0, .85), this.ea = ag.aCf(0, 0, 0, .75), this.aKw = ag.aCf(0, 0, 0, .6), this.sS = ag.aCf(0, 0, 0, .35), this.i8 = ag.uz(255, 255,
			255), this.i7 = ag.aCf(255, 255, 255, .3), this.aLJ = ag.aCf(255, 255, 255, .6), this.aMP = ag.aCf(255, 255, 255, .4), this.aRF = ag.aCf(255, 255, 255, .25), this.a8z = ag.aCf(255, 255, 255, .85), this.aaA = ag.aCf(255, 255, 255, .75),
		this.aaB = ag.aCf(255, 255, 255, .15), this.aaC = ag.aCf(255, 255, 255, .11), this.aLM = ag.uz(128, 128, 128), this.aaD = ag.aCf(64, 64, 64, .75), this.aLE = ag.aCf(88, 88, 88, .83), this.th = ag.aCf(60, 60, 60, .85), this.aDV = ag.aCf(80,
			60, 60, .85), this.aUT = ag.uz(170, 170, 170), this.aUU = ag.uz(200, 235, 245), this.aMK = ag.uz(30, 255, 30), this.aMJ = ag.uz(0, 200, 0), this.vb = ag.uz(128, 255, 128), this.aaE = ag.aCf(10, 65, 10, .75), this.mZ = ag.aCf(0, 255, 0,
			.6), this.aaF = ag.aCf(0, 255, 0, .5), this.sT = ag.aCf(0, 200, 0, .5), this.a3A = ag.aCf(0, 100, 0, .75), this.aKJ = ag.aCf(0, 60, 0, .8), this.a5n = ag.aCf(0, 255, 0, .3), this.aS1 = ag.aCf(0, 180, 0, .6), this.aaG = ag.aCf(0, 120, 0,
			.85), this.aLP = ag.uz(0, 120, 0), this.aDS = ag.aCf(0, 70, 0, .85), this.aaH = ag.uz(190, 230, 190), this.aUX = ag.uz(0, 255, 0), this.aaI = ag.uz(255, 120, 120), this.aLv = ag.uz(255, 160, 160), this.aLN = ag.uz(255, 70, 70), this.aLO =
		ag.uz(230, 0, 0), this.aR6 = ag.aCf(220, 0, 0, .6), this.aMR = ag.aCf(255, 100, 100, .8), this.aaJ = ag.aCf(100, 0, 0, .85), this.aTW = ag.aCf(60, 0, 0, .85), this.aW8 = ag.aCf(200, 0, 0, .6), this.aQB = ag.aCf(120, 0, 0, .85), this.aaK = ag
		.uz(255, 70, 10), this.aUe = ag.uz(230, 190, 190), this.aUV = ag.uz(255, 0, 0), this.aUW = ag.uz(255, 0, 255), this.aVI = ag.aCf(60, 0, 60, .85), this.aDT = ag.aCf(0, 60, 60, .85), this.aMH = ag.aCf(10, 60, 60, .9), this.aaL = ag.aCf(0, 96,
			96, .75), this.aUY = ag.uz(0, 255, 255), this.eZ = ag.uz(160, 160, 255), this.aX4 = ag.aCf(0, 40, 90, .75), this.aWA = ag.aCf(0, 0, 255, .6), this.aaM = ag.uz(200, 200, 255), this.aLD = ag.aCf(50, 50, 255, .83), this.aX3 = ag.aCf(20, 90,
			150, .75), this.aaN = ag.aCf(10, 10, 120, .75), this.mb = ag.uz(255, 120, 100), this.aaO = ag.aCf(255, 255, 0, .5), this.aX6 = ag.aCf(255, 255, 150, .2), this.tY = ag.uz(255, 255, 0), this.aaP = ag.uz(255, 255, 200), this.aW9 = ag.aCf(
			200, 200, 0, .6), this.aaQ = ag.aCf(140, 120, 0, .75), this.aaR = ag.aCf(180, 160, 40, .75), this.aDU = ag.aCf(70, 50, 20, .85), this.aaS = ag.aCf(30, 30, 0, .85), this.aVK = ag.aCf(60, 60, 0, .85), this.aLx = ag.uz(255, 255, 100), this
		.aUa = ag.uz(255, 255, 140), this.aU4 = ag.aCf(255, 140, 0, .75), this.aVJ = ag.aCf(70, 40, 0, .85), this.aUZ = ag.uz(255, 150, 0), this.aSb = ag.aCf(255, 200, 80, .85), this.aaT = ag.aCf(0, 0, 0, 0), this.aDx = ag.aCf(255, 255, 255, 0), this
		.aDy = ag.aCf(254, 254, 254, 0)
}

function aIt() {
	var a8i, aF, aaU, aaV, aaW, aaX, aaY, aaZ, aaa;

	function iv() {
		return fZ.lv(eX.aal()) ? fU.fd ? __fx.settings.keybindButtons ? fZ.v - 2 * fZ.aF - 3 * aaU : fZ.v - fZ.aF - 2 * aaU : __fx.settings.keybindButtons ? fZ.v - fZ.aF - 2 * aaU : fZ.v - aaU : fM.lv(eX.aan()) ? fU.fd ? fM.iv() - fZ.aF - 2 * aaU :
			fM.iv() - aaU : fU.fd ? aD.aF - fZ.aF - (lk.ll() + 1) * aaU : aD.aF - lk.ll() * iN.gap
	}

	function aae(m6, ak, id, nD, aag, aah, ne, aai, aaj, aT4, aaq) {
		var aW, cd, pt, aX, aar = void 0 !== aaj,
			aE = Math.floor(oC.measureText(ak, eX.hy) + 1.5 * aaV + (aar ? aF : 1.5 * aaV));
		if (n.a5 = !0, aaq || oX.eY(ak, aaj), aE + 2 * aaU + fZ.aF > aD.aE && !aar && 50 !== id && 20 < ak.length) aae(m6, (aaq = bK.bL.a0D(ak))[0], id, nD, aag, aah, ne, aai, aaj, aT4, !0), aae(m6, aaq[1], id, nD, aag, aah, ne, aai, aaj, aT4, !0);
		else if (aaq = aE + (50 === id ? aaW : 0), (pt = document.createElement("canvas")).width = aE, pt.height = aF, (cd = pt.getContext("2d", {
				alpha: !0
			})).font = eX.hy, bK.en.textBaseline(cd, 1), bK.en.textAlign(cd, 0), cd.clearRect(0, 0, aE, aF), cd.fillStyle = aah, cd.fillRect(0, 0, aE, aF), cd.fillStyle = aag, cd.fillText(ak, Math.floor(1.5 * aaV), Math.floor(aF / 2)), aar && (cd
				.imageSmoothingEnabled = !0, a3x.nV.aSC(aaj, cd, aE - aF, 0, aF)), 0 === (aX = {
				o: m6,
				ak: ak,
				id: id,
				player: nD,
				canvas: pt,
				aag: aag,
				aah: aah,
				aE: aE,
				aam: aaq,
				ne: ne,
				aai: aai,
				aaj: aaj,
				aT4: aT4
			}).o || 0 < a8i.length && 0 < a8i[0].o) a8i.unshift(aX);
		else {
			for (aW = 1; aW < a8i.length; aW++)
				if (0 < a8i[aW].o) return void a8i.splice(aW, 0, aX);
			a8i.push(aX)
		}
	}

	function aaf(fn, hL, eN) {
		return "rgb(" + fn + "," + hL + "," + eN + ")"
	}

	function aas(id, hD) {
		for (var e4 = a8i.length, aW = 0; aW < e4; aW++) a8i[aW].id === id && hD-- <= 0 && (a8i.splice(aW, 1), aW--, e4--)
	}

	function aat(id, player) {
		for (var jg = !1, aW = a8i.length - 1; 0 <= aW; aW--) a8i[aW].id !== id || player !== d4.jW && a8i[aW].player !== player || (a8i.splice(aW, 1), jg = !0);
		return jg
	}

	function ab4(ak) {
		aae(340, ak, 6, 0, aaf(215, 245, 255), aB.ea, -1, !1)
	}
	this.aZ8 = "", this.c = function() {
		var self;
		aaZ = 0, aaY = bx.by.i2() ? 7 : 12, aaX = {
			oi: [0, 0, 0],
			aab: [0, 0, 0],
			a8v: [220, 180, 180],
			r2: [0, 0, 0],
			ag: [0, 0, 0]
		}, a8i = [], this.resize(), d4.iA && this.a8F(0, 18), l.nK.nL[l.gF].name.length && ab4(L(519, [l.nK.nL[l.gF].name])), l.nK.nL[l.gF].aZp && ab4(L(520, [l.nK.nL[l.gF].aZp])), ab4(L(521, [l.aH - 2 + "x" + (l.aJ - 2)])), ab4(L(522, [bK.bL
			.bB(aDi.pX)
		])), aDi.pX !== aDi.pY && ab4(L(523, [bK.bL.bB(aDi.pY) + " (" + bK.bL.lu(100 * aDi.pY / aDi.pX, 1) + ")"])), 0 < aDi.pZ && ab4(L(499, [bK.bL.bB(aDi.pZ) + " (" + bK.bL.lu(100 * aDi.pZ / aDi.pX, 1) + ")"])), 0 < aDi.pa && ab4(L(524, [bK
			.bL.bB(aDi.pa) + " (" + bK.bL.lu(100 * aDi.pa / aDi.pX, 1) + ")"
		])), 10 === d4.mr && aae(120, L(525), 6, 0, aaf(235, 255, 120), aB.ea, -1, !1), 0 !== (self = this).aZ8.length && (aae(200, self.aZ8, 0, 0, aB.i8, aB.ea, -1, !1), self.aZ8 = ""), d4.wB && aae(340, L(479), 6, 0, aaf(255, 200, 0), aB
			.ea, -1, !1)
	}, this.resize = function() {
		var aLi, aW;
		if (aF = (aF = Math.floor((bx.by.i2() ? .031 : .0249) * aD.lh)) < 10 ? 10 : aF, this.fontSize = Math.floor(2 * aF / 3), this.hy = bK.en.i3(1, this.fontSize), aaU = iN.gap, aaV = Math.floor(aF / 5), 0 < a8i.length)
			for (aLi = a8i, a8i = [], aW = aLi.length - 1; 0 <= aW; aW--) aae(aLi[aW].o, aLi[aW].ak, aLi[aW].id, aLi[aW].player, aLi[aW].aag, aLi[aW].aah, aLi[aW].ne, aLi[aW].aai, aLi[aW].aaj, aLi[aW].aT4, !0);
		this.aak()
	}, this.aak = function() {
		aaa = document.createElement("canvas");
		var ak = L(480),
			cd = (aaW = oC.measureText(ak, this.hy) + 5 * aaV, aaa.height = aF, aaa.width = aaW, aaa.getContext("2d", {
				alpha: !0
			}));
		cd.font = this.hy, bK.en.textBaseline(cd, 1), bK.en.textAlign(cd, 1), cd.clearRect(0, 0, aaW, aF), cd.fillStyle = aB.a3A, cd.fillRect(0, 0, aaW, aF), cd.fillStyle = aB.i8, cd.fillText(ak, Math.floor(aaW / 2), Math.floor(aF / 2))
	}, this.aal = function() {
		var e4;
		return fU.fd ? fU.aE : 0 === (e4 = a8i.length) ? 0 : 1 === e4 ? a8i[0].aam : oM(a8i[0].aam, a8i[1].aam)
	}, this.aan = function() {
		var e4 = a8i.length;
		return fU.fd ? e4 ? oM(fU.aE, a8i[0].aam) : fU.aE : 0 === e4 ? 0 : 1 === e4 ? a8i[0].aam : 2 === e4 ? oM(a8i[0].aam, a8i[1].aam) : oM(oM(a8i[0].aam, a8i[1].aam), a8i[2].aam)
	}, this.t = function(u, v) {
		for (var iw, aQ, aao = iv(), aW = a8i.length - 1; 0 <= aW; aW--)
			if ((aQ = aao - (aW + 1) * aF) <= v && v < aQ + aF) return 50 === a8i[aW].id ? u >= aD.aE - aaW - aaU - a8i[aW].aE && (u >= aD.aE - aaW - aaU ? ko.dl.aWJ(a8i[aW].player) : a0X.aKE(a8i[aW].player, 800, !1, 0), !0) : u >= aD.aE - a8i[
				aW].aE - aaU && (736 === a8i[aW].id ? window.open("https://" + a8i[aW].ak, "_blank") : a8i[aW].aai && (a8i[aW].aT4 && a8i[aW].aT4.ba ? (aQ = a8i[aW].aT4.dP, iw = dI.jd(aQ) - 10, aQ = dI.je(aQ) - 10, a0X.a9K(iw, aQ, 19 +
				iw, 19 + aQ)) : a8i[aW].aT4 && a8i[aW].aT4.eN ? a0X.aap(a8i[aW].player, a8i[aW].aT4.dW) : (a0X.aKE(a8i[aW].player, 800, !1, 0), 0 <= a8i[aW].ne && (iw = a8i[aW].ne, a8i[aW].ne = a8i[aW].player, a8i[aW].player =
				iw))), !0);
		return !1
	}, this.eY = function(m6, ak, id, nD, aag, aah, ne, aai, aaj, aT4) {
		aae(m6, ak, id, nD, aag, aah, ne, aai, aaj, aT4)
	}, this.pS = function(af) {
		aae(300, af, 252, 0, aB.i8, aB.ea, -1, !1)
	}, this.a9M = function(id) {
		for (var aW = a8i.length - 1; 0 <= aW; aW--) a8i[aW].id === id && (a8i[aW].o = 1)
	}, this.a8F = function(player, id) {
		0 === id ? (oC.dd(player, 0), aas(423, 2), aae(160, L(481, [dA.vd[player]]), 423, player, "rgb(10,220,10)", aB.ea, -1, !1)) : 1 === id ? (aat(50, d4.jW), oC.dd(player, 1), aae(360, L(482, [dA.vd[player]]), 0, player, aB.aaK, aB.ea, -1, !
				0), a0X.aKE(player, 2700, !1, 0)) : 2 === id ? (oC.dd(player, 2), aae(0, L(483), 0, player, "rgb(10,255,255)", aB.ea, -1, !0), a0X.aKE(player, 2700, !1, 0)) : 3 === id ? (oC.dd(player, 2), aae(0, L(484, [dA.vd[player]]), 0,
				player, aB.i8, aB.ea, -1, !0), a0X.aKE(player, 2700, !1, 0)) : 4 === id ? this.aSc(1, player, player) : 5 === id ? bK.dl.iS(d4.jL) || (function(id, a5R) {
				var aW, cY = 0,
					e4 = a8i.length;
				for (aW = 0; aW < e4; aW++)
					if (a8i[aW].id === id && a5R <= ++cY) return a8i.splice(aW, 1)
			}(1, 5), oD.a4i(player) && aae(180, L(485, [dA.vd[player]]), 1, player, aaf(255, 200, 180), aB.ea, -1, !0), bK.dl.aYk(player, 10) && (aas(573, 0), aae(180, L(486, [dA.vd[player]]), 573, player, aB.aaK, aB.ea, -1, !0))) : 18 === id ?
			aae(255, L(487), 18, 0, aB.i8, aB.ea, -1, !1) : 21 === id ? aae(220, L(488), id, 0, aB.i8, aB.ea, -1, !1) : 22 === id ? this.aSc(2, player, player) : 59 === id && aae(0, L(489), id, 0, aB.aaP, aB.ea, 0, !1)
	}, this.aV9 = function(af) {
		aae(200, L(490, [af]), 94, 0, aB.i8, aB.aaJ, -1, !1)
	}, this.aKI = function(aav) {
		if (d4.jL === aav && !d4.iC && !d4.g2)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aae(0, "Your Win Count is now " + __fx.wins.count, 3, aav, aB.i8, aB.ea, -1, !0);
		dA.j8[aav] && (oC.dd(aav, 2), d4.j6 < 100 ? aae(0, L(484, [dA.vd[aav]]), 3, aav, aB.i8, aB.ea, -1, !0) : aae(0, L(491, [dA.vd[aav]]), 3, aav, aB.i8, aB.ea, -1, !0))
	}, this.aWR = function(aK) {
		var ak, aaw, aML = "(" + dI.jd(aK >> 2) + ", " + dI.je(aK >> 2) + ")",
			aai = !1,
			player = 0;
		dK.dL(aK) ? dK.jQ(aK) ? aML = L(492, [aML]) : (player = dK.jR(aK), d4.g2 && !1 === __fx.hoveringTooltip.active && (d4.jL = player), ak = L(493, [bK.cd.mU(dA.vk[player], bK.en.i3(0, 10), 150)]) + "   ", ak = (ak += L(494, [bK.bL.bB(dA.k9[
				player])]) + "   ") + L(495, [bK.bL.bB(dA.j8[player])]) + "   ", d4.jD && (aaw = jE.vc[jE.rG[jE.jF[player]]], ak += L(124) + ": " + aaw + "   "), bK.dl.iS(player) && (ak += L(213) + ": " + k8.zH[k8.k1[player]] + "   "), aML =
			ak = (ak += L(496, [player]) + "   ") + L(497, [aML]), aai = !0) : aML = dK.jb(aK) ? L(498, [aML]) + "   #" + dK.dj(aK) : L(499, [aML]), aas(55, 0), aae(220, aML, 55, player, aB.i8, aB.ea, -1, aai, void 0, void 0, !0)
	}, this.aWS = function(aax) {
		var me = d5.bf,
			player = me.dn[aax] >> 3,
			ak = (n.a5 = !0, aas(55, 0), L(500, [dA.vd[player]]) + "   ");
		aae(220, ak += L(494, [bK.bL.bB(me.he[aax])]), 55, player, aB.i8, aB.ea, -1, !0)
	}, this.aJe = function(rn, rw, x0) {
		rn === d4.jL ? aae(175, " " + L(501, [dA.vd[rw]]) + ": ", 1001, rw, aaf(200, 255, 210), aB.ea, -1, !0, x0) : this.aay(rn, x0)
	}, this.aay = function(rn, x0) {
		aas(1e3, 0), aae(175, dA.vd[rn] + ": ", 1e3, rn, aB.i8, "rgba(5,60,25,0.9)", -1, !0, x0)
	}, this.aKH = function() {
		var af;
		d4.vj ? (af = L(502), oC.a8r(L(503), 2, 1, 12), aae(0, af, 40, 0, "rgb(10,220,10)", aB.ea, -1, !1)) : (af = L(504), oC.a8r(L(505), 2, 0, 16), aae(0, af, 41, 0, aB.i8, aB.ea, -1, !1))
	}, this.w0 = function() {
		var hD = dA.vd,
			bX = d4.data;
		aae(300, hD[0] + " [" + d4.aKD.w6(bX.elo[0]) + "] vs " + hD[1] + " [" + d4.aKD.w6(bX.elo[1]) + "]", 65, 0, aB.aC, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aFD = function(af) {
		aae(350, af, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aaz = function(ab0) {
		aae(0, L(ab0 ? 506 : 507), 247, 0, aB.tY, aB.ea, -1, !1)
	}, this.w8 = function(w5, w7, ab1) {
		var bX = d4.data,
			hD = dA.vd;
		aae(0, hD[0] + ": " + d4.aKD.w6(bX.elo[0]) + " -> " + w5, 66, 0, aB.i8, ab1[0], -1, !1), aae(0, hD[1] + ": " + d4.aKD.w6(bX.elo[1]) + " -> " + w7, 66, 1, aB.i8, ab1[1], -1, !1)
	}, this.aa8 = function(player, id) {
		0 === id ? aat(50, player) ? (aae(128, L(508, [dA.vd[player]]), 52, player, aaf(180, 255, 180), aB.ea, -1, !0), oD.a3u(player, 2, 255)) : aae(384, L(509, [dA.vd[player]]), 51, player, aaf(210, 210, 255), aB.ea, -1, !0) : aat(51, player) ?
			(aae(128, L(510, [dA.vd[player]]), 52, player, aB.i8, "rgba(60,120,10,0.9)", -1, !0), oD.a3u(player, 2, 255)) : (aae(384, L(511, [dA.vd[player]]), 50, player, aB.i8, "rgba(90,90,90,0.9)", -1, !0), oD.a3u(player, 2, 96))
	}, this.ab2 = function(oi, target) {
		var color = aaf(210, 255, 210);
		1 < oi.length ? aae(230, L(512, [oi.length, dA.vd[target]]), 66, target, color, aB.ea, -1, !0) : aae(230, L(513, [dA.vd[oi[0]], dA.vd[target]]), 66, oi[0], color, aB.ea, target, !0)
	}, this.aa9 = function(player, target) {
		aae(230, L(514, [dA.vd[player], dA.vd[target]]), 66, player, aB.i8, "rgba(75,65,5,0.9)", target, !0)
	}, this.aSa = function(id, hD) {
		aas(id, hD)
	}, this.wt = function(id, player) {
		aat(id, void 0 === player ? d4.jW : player)
	}, this.aT0 = function(id) {
		for (var aW = a8i.length - 1; 0 <= aW; aW--)
			if (a8i[aW].id === id) return a8i[aW];
		return null
	}, this.oc = function(wy, ab3, player) {
		2 !== dA.a4E[d4.jL] && aae(200, 1 === wy ? L(515, [dA.vd[player]]) : L(516, [bK.bL.bB(wy), dA.vd[player]]), 30, player, "rgb(190,255,190)", aB.ea, -1, !0)
	}, this.aEw = function(wy, player) {
		2 !== dA.a4E[d4.jL] && (aas(31, 0), wy = " (" + bK.bL.bB(wy) + ") 💸", aae(150, wy = bK.dl.iS(player) ? L(517) + wy : L(518, [dA.vd[player]]) + wy, 31, player, aB.aC, "rgba(205,205,205,0.9)", -1, !0))
	}, this.ws = function(mX) {
		for (var ag = n.kg(), aW = 2; 0 <= aW; aW--) 0 < aaX.r2[aW] && (mX || aaX.ag[aW] < ag - 220) && this.ab5(aW)
	}, this.ab5 = function(id) {
		var ak, e4 = aaX.r2[id],
			player = aaX.oi[id];
		aaX.r2[id] = 0, 1 === e4 ? (0 === id ? ak = L(526, [dA.vd[player], dA.vd[aaX.aab[0]]]) : 1 === id ? ak = L(527, [dA.vd[player]]) : 2 === id ? ak = L(528, [dA.vd[player]]) : 3 === id && (ak = L(529, [dA.vd[player]])), aas(7, 0), aae(aaX
			.a8v[id], ak, 7, aaX.aab[id], aB.i8, aB.ea, -1, !0)) : (ak = L(0 === id ? 530 : 1 === id ? 531 : 532, [e4]), aas(7, 0), aae(aaX.a8v[id], ak, 7, player, aB.i8, aB.ea, -1, !1))
	}, this.aSc = function(id, nd, ne) {
		var ag = n.kg(),
			e4 = aaX.r2[id] + 1;
		aaX.r2[id]++, aaX.oi[id] = nd, aaX.aab[id] = ne, 1 === e4 && (aaX.ag[id] = ag), (1 === e4 && (d4.mm < 32 || 2 === d4.fL) || 1 < e4 && (aaX.ag[id] < ag - 140 || 2 === d4.fL)) && this.ab5(id)
	}, this.kK = function() {
		aIV.kK();
		for (var gz = (gz = a8i.length - aaY) <= 1 ? 1 : gz * gz, aW = a8i.length - 1; 0 <= aW; aW--) 0 < a8i[aW].o && (a8i[aW].o -= gz, a8i[aW].o <= 0) && (n.a5 = !0, a8i.splice(aW, 1));
		! function() {
			var hD, aW;
			if (128 !== aaZ && !(++aaZ < 128))
				for (hD = 5, aW = mK.mL - 1; 0 <= aW; aW--) 1 === dA.a4E[mK.my[aW]] && 0 < hD-- && aae(240, L(529, [dA.vd[mK.my[aW]]]), 1, mK.my[aW], aB.aC, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.ws(!1)
	}, this.a6 = function() {
		for (var a4R, v = iv(), aW = a8i.length - 1; 0 <= aW; aW--) a4R = v - (aW + 1) * aF, 50 === a8i[aW].id ? (a7.drawImage(a8i[aW].canvas, aD.aE - a8i[aW].aE - aaW - aaU, a4R), a7.drawImage(aaa, aD.aE - aaW - aaU, a4R)) : a7.drawImage(a8i[aW]
			.canvas, aD.aE - a8i[aW].aE - aaU, a4R)
	}, this.aAR = function(id, k1) {
		var aML, ab7 = aB.aaD;
		0 === id ? aML = L(533) : 1 === id ? (aML = L(534), ab7 = aB.aaN) : 2 === id ? aML = L(535) : 3 === id ? aML = L(536) : (aML = bK.bL.bB(k1), ab7 = 5 === id ? aB.aaN : aB.ea), aas(74, 0), aae(0, aML, 74, 0, aB.i8, ab7, -1, !1, void 0,
			void 0, !0)
	}
}

function aOl() {
	this.zU = function(b) {
		return 0 === b ? 1 === d4.fL && d4.iA : 1 === b ? 1 === d4.fL && !d4.iA : 2 === d4.fL
	}, this.mz = function(player) {
		return 0 !== dA.iR[player] && 2 !== dA.a4E[player]
	}, this.eW = function(player) {
		return player === d4.jL && 2 !== dA.a4E[player]
	}, this.dm = function(player, kM) {
		return player !== kM && (0 === jE.jF[player] || jE.jF[player] !== jE.jF[kM])
	}, this.a1w = function() {
		return mK.mL < 2 ? 0 : d4.jD ? 1 < kk.ab8() : dA.j8[mp[1]]
	}, this.ab9 = function() {
		var mL = mK.mL;
		if (0 !== mL) {
			if (!d4.jD) return !this.iS(mp[0]);
			for (var jF = jE.jF, aHc = kk.a0u(), my = mK.my, aW = mL - 1; 0 <= aW; aW--) {
				var nD = my[aW];
				if (jF[nD] === aHc && !this.iS(nD)) return 1
			}
		}
		return 0
	}, this.a8E = function(player) {
		return player === d4.jL
	}, this.aYk = function(kM, m5) {
		return dA.k9[d4.jL] < m5 * dA.k9[kM]
	}, this.iS = function(player) {
		return player >= d4.j6 || 2 === dA.a4E[player]
	}, this.aHs = function(player) {
		return 0 !== dA.iR[player]
	}, this.aBO = function(player) {
		return player < d4.j6
	}, this.aXv = function(abA, abB) {
		return abA !== abB
	}, this.oa = function(player, hB) {
		var min;
		return hB = this.abC(player, hB), dA.k9[player] += hB, dA.ox[player] && (min = Math.min(dA.ox[player], dA.k9[player]), dA.ox[player] -= min, dA.k9[player] -= min), hB
	}, this.abC = function(player, hB) {
		var oj = dA.k9[player];
		return hB = Math.min(hB, dA.j8[player] * d4.abD - oj), hB = Math.min(hB, d4.a3r - oj), Math.max(hB, 0)
	}, this.rg = function(player, ld, abE, abF) {
		var oj = dA.k9[player],
			ld = eO.eP(oj * (ld + 1), 1024),
			abE = eO.eP(abE * oj, 1024),
			ld = Math.min(ld, oj - abE);
		return ld = aIX.abH(player, ld), dF.oZ[0] = ld, dF.oZ[1] = abE, abF <= ld
	}, this.aEV = function(player, aJW, oW) {
		var player = dA.k9[player],
			abG = eO.eP(64 * player, 1024);
		return aJW = Math.min(aJW, player - abG), aJW = this.abC(oW, aJW), dF.oZ[0] = aJW, dF.oZ[1] = abG, 1 <= aJW
	}, this.abI = function(player, aJW, oW) {
		var player = dA.k9[player],
			abG = eO.eP(64 * player, 1024);
		return aJW = Math.min(aJW, player - abG), this.abC(oW, aJW)
	}, this.aL6 = function(aJW, oW) {
		return aJW = this.abC(oW, aJW), dF.oZ[0] = aJW, dF.oZ[1] = 0, 1 <= aJW
	}, this.ls = function(player, abJ) {
		return eO.eP(dA.k9[player] * (abJ + 1), 1024)
	}, this.abK = function(player, abE) {
		abE = eO.eP(abE * dA.k9[player], 1024);
		dF.oZ[1] = abE, dA.k9[player] -= abE
	}, this.a7e = function(player, abL) {
		var px, v4, eN = dA.k9[player];
		return abL <= eN ? dA.k9[player] -= abL : (dA.k9[player] = 0, v4 = dA.ox[player] + (px = 5 * ((eN = abL - eN) >> 2)), ob.a7b(player, px - eN, 12), v4 <= d4.abM ? dA.ox[player] = v4 : (dA.ox[player] = d4.abM, ob.a7b(player, v4 - d4.abM,
			18))), abL
	}, this.aHC = function(player, ld) {
		var k9 = dA.k9,
			oj = k9[player],
			ld = eO.eP(oj * (ld + 1), 1024),
			abG = Math.max(eO.eP(oj, 10), 1e3);
		return (ld = Math.min(ld, oj - abG)) < 0 ? (k9[player] = 0, abG = Math.min(1e3, oj + d4.abM - dA.ox[player]), dF.oZ[1] = abG, dA.ox[player] += abG - oj, 0) : (dF.oZ[1] = abG, ld = aIX.abH(player, ld), k9[player] -= abG + ld, aIX.abN(
			player, ld), ld)
	}, this.og = function(player) {
		var k1 = dF.oZ[0];
		dA.k9[player] -= k1 + dF.oZ[1], aIX.abN(player, k1)
	}, this.aXw = function(player, kM) {
		return (kM = Math.min(kM, d4.jW)) < d4.jW && 0 === dA.iR[kM] && (kM = d4.jW), (dF.jV[0] = kM) === d4.jW || jS.jT(player, kM)
	}, this.aEU = function(player, oW) {
		return 0 !== dA.iR[oW] && !jS.jT(player, oW)
	}, this.abO = function(player, abP) {
		for (var nD, e4 = mK.mL, ar = 0, abQ = mp, aW = 0; aW < e4; aW++)
			if (nD = abQ[aW], !this.iS(nD)) {
				if (player === nD) return !0;
				if (++ar > abP) return !1
			} return !1
	}, this.aSk = function(nD) {
		var mn = d4.jD ? kk.mo() : dA.j8[mp[0]];
		return mn >= eO.eP(nD * d4.kD, 100)
	}, this.a2H = function(hB, min, max) {
		return Math.floor(eO.h2(isNaN(hB) ? 0 : Number(hB), min, max))
	}
}

function a2K() {
	this.aSB = function(x0, player) {
		eX.aJe(d4.jL, player, x0), cr.rn.abR(x0, player)
	}, this.aWJ = function(player) {
		eX.aa8(player, 0), cr.rn.abS(player)
	}, this.aWH = function(aW4, player) {
		eX.ab2(aW4, player), cr.rn.abT(aW4, player)
	}, this.aCV = function() {
		d4.iC || d4.g2 || cr.rs.aCV()
	}
}

function aF7() {
	this.abU = 0;
	var abX, abV = null,
		abW = 0,
		abY = "",
		abZ = 0,
		aba = null,
		abb = -1,
		abc = -1,
		abd = 0;

	function wW() {
		if (null !== aba && null !== abV) {
			abW = 0;
			try {
				window.turnstile.remove(abV), aba.remove()
			} catch (k) {
				console.log("turnstile remove failed " + k)
			}
			abV = aba = null
		}
	}

	function abg(abh) {
		return "" !== abY && abZ + 1e3 * (300 - abh) > performance.now()
	}
	this.c = function() {
		var abf;
		lT.ud || !lT.lV && !lT.uj ? (console.log("turnstile cannot be loaded"), this.abU = -1) : ((abf = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", abf.async = !0, abf.onload =
			function() {
				c0.turnstile.abU = 1, console.log("turnstile onload"), c0.turnstile.aFV()
			}, abf.onerror = function() {
				c0.turnstile.abU = -1, console.log("turnstile onerror")
			}, document.head.appendChild(abf))
	}, this.aFV = function() {
		var m6;
		return !(1 !== this.abU || (window.turnstile ? abW ? (console.log("turnstile error 246"), 1) : abg(30) || (m6 = performance.now()) < abd && abb === bE.bA.bF(bn.buffer.data[105].value, 5) && abc === w.a27 || (abY = "", abW = 1, abX = m6, (
				aba = document.createElement("div")).style.position = "fixed", aba.style.left = "0", aba.style.top = "0", aba.style.zIndex = "100", document.body.appendChild(aba), console.log("turnstile render"), abV = window
			.turnstile.render(aba, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(lG) {
					console.log("turnstile success " + Math.floor(performance.now() - abX)), abY = lG, abZ = performance.now(), c0.turnstile.c1(), wW()
				},
				"expired-callback": function() {
					wW(), console.log("turnstile expired " + Math.floor(performance.now() - abX))
				},
				"error-callback": function() {
					wW(), console.log("turnstile callback error " + Math.floor(performance.now() - abX)), c0.turnstile.abU = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		wW()
	}, this.c1 = function() {
		abg(8) && an.bl && cr.bf.a1X(cr.bf.g9) && (abd = performance.now() + 36e5 - 1e4, abb = bE.bA.bF(bn.buffer.data[105].value, 5), abc = w.a27, cr.cs.lF(abY), abY = "", console.log("sendTokenToLobby success"))
	}
}

function aIp() {
	var sm, abi, abj, t3, abk, abl, abm, abn, abo, abp, abq, x5, abr, abt = !1,
		abu = !1;

	function abv(a8v) {
		x5 = n.o, abj = t3 = abi = 0, abk = (abr = 33) / a8v, sm = 1 / (a8v / abr / 4), abl = (aD.aE / 2 + ix) / iy, abm = (aD.aF / 2 + j0) / iy, abn = iy
	}

	function abx(aW) {
		var iw; - 1 !== aW && (aW = dI.dg(d5.bf.dh[aW]), iw = dI.jd(aW) - 15, aW = dI.je(aW) - 15, a0X.a9K(iw, aW, 29 + iw, 29 + aW))
	}

	function ac2(a1D) {
		Math.abs(Math.log(abq / abn)) < .125 && (abq = a1D * abn)
	}

	function ac1(iw, iz, j1, j2) {
		abo = (iw + j1 + 1) / 2, abp = (iz + j2 + 1) / 2;
		j1 = aD.aE / (j1 - iw + 1), iw = aD.aF / (j2 - iz + 1);
		abq = .9 * (j1 < iw ? j1 : iw)
	}
	this.a0Y = function() {
		return abt
	}, this.abw = function() {
		abv(1), this.a9K(0, 0, l.aH - 1, l.aJ - 1), d4.iA || d4.g2 || this.aKE(d4.jL, 3e3, !0, .3)
	}, this.aap = function(player, dW) {
		abx(d5.ao.aAV(player, dW))
	}, this.aKE = function(player, a8v, aby, zoom) {
		d4.fz || abt && !aby && abu || (0 === dA.j8[player] ? abx(d5.ao.aXW(player)) : (fY.ff = !1, abu = aby, abv(a8v), function(player) {
			abo = (dA.j9[player] + dA.jA[player] + 1) / 2, abp = (dA.jB[player] + dA.jC[player] + 1) / 2
		}(player), function(zoom, player) {
			var rJ = dA.jA[player] - dA.j9[player] + 1,
				player = dA.jC[player] - dA.jB[player] + 1,
				ba = aD.aE / rJ,
				eN = aD.aF / player,
				ba = (abq = ba < eN ? ba : eN, 0 !== zoom ? zoom : rJ < 20 && player < 20 ? .5 : .9);
			abq *= ba, ac2(7 / 8)
		}(zoom, player), abt = !0, fq.a8g()))
	}, this.aK7 = function(a8v) {
		d4.g2 || d4.fz || (fY.ff = !1, abu = !1, abv(a8v), ac1(0, 0, l.aH - 1, l.aJ - 1), ac2(7 / 8), abt = !0, fq.a8g())
	}, this.a9K = function(iw, iz, j1, j2) {
		abt = !1, ac1(iw, iz, j1, j2), iy = abq, fY.aY7(abo, aD.aE / 2), fY.aY9(abp, aD.aF / 2), xR.aO3(), n.a5 = !0
	}, this.cZ = function() {
		return !(abt && abu || (abt = !1))
	}, this.kK = function() {
		var ac4, ac5, bX, ac8;
		abt && (abi < .5 ? t3 < abk && (t3 += abk * sm, abj = abi) : 1 - abj < abi && (t3 = (t3 -= abk * sm) < abk * sm ? abk * sm : t3), x5 = x5 >= n.o ? n.o - 1 : x5, bX = n.o - x5, abi = 1e3 < bX || 1 < (abi += t3 * bX / abr) ? 1 : abi, x5 = n
			.o, bX = iy, ac4 = ix, ac5 = j0, bX = (iy = abn * Math.pow(abq / abn, abi)) / bX, ac8 = 1 - (abn * Math.pow(abq / abn, 1 - abi) - abn) / (abq - abn), fY.aY7(abl + ac8 * (abo - abl), aD.aE / 2), fY.aY9(abm + ac8 * (abp - abm), aD
				.aF / 2), oD.zoom(bX, (ac4 * bX - ix) / (1 - bX), (ac5 * bX - j0) / (1 - bX)), xR.aO3(), 1 <= abi && (abt = !1, iF.xO = !0), n.a5 = !0)
	}
}

function ac9() {
	this.gC = 0, this.gF = 0, this.mapSeed = 0, this.gG = 0, this.gH = 0, this.gI = 0, this.gJ = 0, this.gK = 0, this.gL = 0, this.spawningSeed = 0, this.fH = 0, this.gb = 0, this.gh = [], this.gi = 1048575, this.acA = 0, this.gd = [{
		gF: 0,
		mapSeed: 0,
		gG: 0,
		o: 100,
		gK: 0
	}, {
		gF: 1,
		mapSeed: 0,
		gG: 1,
		o: 200,
		gK: 0
	}, {
		gF: 2,
		mapSeed: 0,
		gG: 2,
		o: 300,
		gK: 0
	}, {
		gF: 3,
		mapSeed: 0,
		gG: 3,
		o: 400,
		gK: 0
	}, {
		gF: 0,
		mapSeed: 0,
		gG: 9,
		o: 500,
		gK: 0
	}, {
		gF: 1,
		mapSeed: 0,
		gG: 10,
		o: 600,
		gK: 0
	}, {
		gF: 2,
		mapSeed: 0,
		gG: 8,
		o: 700,
		gK: 0
	}, {
		gF: 3,
		mapSeed: 0,
		gG: 3,
		o: 800,
		gK: 0
	}]
}

function z6() {
	var k;
	this.k = document.createElement("hr"), this.resize = function() {
		bK.en.r3(this.k, 8, aB.aLM)
	}, (k = this.k).style.marginBottom = k.style.marginTop = "0.65em", k.style.marginLeft = k.style.marginRight = "-4%", k.style.border = "none"
}

function ro() {
	this.aGR = function(c4, aGP) {
		l7.eH(11), l7.eK(1, 0), l7.eK(6, 4), l7.eK(1, aGP ? 1 : 0), l7.eK(3, 0 === d4.fL ? an.bl ? 6 : 0 : d4.g2 ? 1 : d4.iC ? 7 : d4.mr < 7 ? 2 : 8 === d4.mr ? 4 : 9 === d4.mr ? 5 : 3), cr.bf.send(c4, l7.eG)
	}, this.aXl = function() {
		l7.eH(58), l7.eK(1, 0), l7.eK(6, 5), l7.eK(8, cr.bf.g9), l7.eK(10, aGB.gb), l7.eK(9, aGB.acB), l7.eK(10, lT.nq), l7.eK(14, lT.lU), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJU = function(dP) {
		l7.eH(27), l7.eK(1, 1), l7.eK(4, 0), l7.eK(22, dP), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJV = function(ld, kM) {
		l7.eH(25), l7.eK(1, 1), l7.eK(4, 1), l7.eK(10, ld), l7.eK(10, kM), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJX = function(ld, oW) {
		l7.eH(24), l7.eK(1, 1), l7.eK(4, 2), l7.eK(10, ld), l7.eK(9, oW), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJZ = function(ld, aJY) {
		l7.eH(42), l7.eK(1, 1), l7.eK(4, 3), l7.eK(10, ld), l7.eK(27, aJY), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJa = function(ld, dW) {
		l7.eH(31), l7.eK(1, 1), l7.eK(4, 4), l7.eK(10, ld), l7.eK(16, dW), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJd = function(kM) {
		l7.eH(15), l7.eK(1, 1), l7.eK(4, 5), l7.eK(10, kM), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJg = function(cW) {
		l7.eH(15), l7.eK(1, 1), l7.eK(4, 6), l7.eK(10, cW), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJi = function(aJh) {
		l7.eH(6), l7.eK(1, 1), l7.eK(4, 7), l7.eK(1, aJh), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJk = function() {
		l7.eH(5), l7.eK(1, 1), l7.eK(4, 8), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.aJl = function(ld, dP, kM) {
		l7.eH(47), l7.eK(1, 1), l7.eK(4, 10), l7.eK(10, ld), l7.eK(10, kM), l7.eK(22, dP), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.abR = function(acC, acD) {
		l7.eH(24), l7.eK(1, 1), l7.eK(4, 15), l7.eK(9, acD), l7.eK(10, acC), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.abS = function(rw) {
		l7.eH(14), l7.eK(1, 1), l7.eK(4, 14), l7.eK(9, rw), cr.bf.send(cr.bf.fH, l7.eG)
	}, this.abT = function(acE, target) {
		var aW, e4 = acE.length;
		for (l7.eH(14 + 9 * e4), l7.eK(1, 1), l7.eK(4, 13), l7.eK(9, target), aW = 0; aW < e4; aW++) l7.eK(9, acE[aW]);
		cr.bf.send(cr.bf.fH, l7.eG)
	}
}

function bq() {
	function acF() {
		h.x1(29) && (an.bf.aEQ && 1 === an.bf.aE2[2] && h.x1(29).aE9(), an.bf.aEQ = 0, h.x1(29).aE8(), h.x1(29).aE7(), an.b3.aTn())
	}
	this.gB = new Array(4), this.aE2 = [0, 0, 1, 0], this.aEQ = 0, this.gT = [0, 0], this.c = function() {
		for (var aW = 0; aW < this.gB.length; aW++) this.gB[aW] = new ac9;
		this.aE2[0] = bn.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.gB), __fx.lobbyReminders.setPopupHandler(function(text) {
			an.message.go({
				id: 7,
				af: text
			})
		})
	}, this.gR = function() {
		acF(), an.bi.c(), __fx.lobbyReminders.check()
	}, this.ge = function() {
		an.bi.ge();
		for (var aW = 0; aW < an.bf.gB.length; aW++) {
			var gA = an.bf.gB[aW];
			0 === gA.gC ? gA.acA = 0 : (gA.gL = Math.max(gA.gL - gA.acA % 2, 0), gA.acA++)
		}
		acF(), __fx.lobbyReminders.check()
	}, this.gl = function(gg) {
		this.aE2[0] !== gg || this.aE2[2] || h.x1(29).aEP()
	}
}

function aPh() {
	this.kK = function(player) {
		var aGo = function(player) {
			for (var e8 = d5.e8.aUQ(), e4 = e8.length, me = Math.min(e4, 32), cy = kH.kI(e4), aW = 0; aW < me; aW++) {
				var aGo = (aW + cy) % e4,
					dx = e8[aGo],
					aCx = dx[0],
					aCz = dx[dx.length - 1];
				if (d5.ao.aXV(player, aCx) && d5.ao.aGm(player, aCz)) return aGo;
				if (d5.ao.aXV(player, aCz) && d5.ao.aGm(player, aCx)) return 0 <= (aGo = d5.e8.aGs(aCz, aCx)) ? aGo : d5.e8.eE() ? -1 : d5.e8.aGt(d5.e8.e9(dx))
			}
			return -1
		}(player);
		return -1 !== aGo && (aGo = d5.e8.get(aGo), !d5.ao.aXf(player, aGo)) && (dF.e7[0] = aGo, !0)
	}
}

function aIm() {
	this.jW = 512, this.a3r = 15e8, this.oU = 1e9, this.abM = 5e4, this.aLq = 512, this.a7T = 2, this.jL = 0, this.j6 = 0, this.mm = 0, this.mM = 0, this.mN = 0, this.aAi = 512, this.aAl = 512, this.abD = 150, this.iC = !0, this.g2 = 0, this.fL = 0,
		this.kD = 0, this.fz = !1, this.iA = 0, this.aWI = 0, this.jD = !1, this.rD = 0, this.aAn = 0, this.mr = 0, this.wB = 0, this.a9N = null, this.aKD = new vz, this.n5 = 30, this.vR = 0, this.vj = 0, this.aKC = 0, this.aBQ = 0, this.data =
		new uP, this.pD = new acI, this.pC = 0, this.aUI = "", this.pF = function() {
			c0.turnstile.close(), dF.c(), mv.c(), oX.clear(), this.mm = this.j6 = this.data.humanCount, this.iC = 1 === this.mm && !__fx.customLobby.isActive(), this.fz = !1, this.g2 = this.data.isReplay, this.mr = 0 === this.data.gameMode ? [7, 10,
					8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.wB = this.data.isContest, this.jD = this.mr < 7 || 9 === this.mr, this.mr = 10 === this.mr && this.iC ? 7 : this.mr, this.mr = 8 === this
				.mr && 2 !== this.j6 ? 7 : this.mr, rU.c(), this.rD = this.data.numberTeams, this.data.teamPlayerCount ? this.aAn = +(0 < this.data.teamPlayerCount[0]) : (this.aAn = 0, this.jD && this.iC && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.rD + 1), d4.pD.aNa())), this.n5 = this.j6 <= 2 ? 30 : this.j6 <= 50 ? 40 : 50, this.aWI = this.iA = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.a9N = this.iA ? new a9G : null, this.aAi = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.j6) : 1 === lT.uc ? this
				.aAi = this.j6 : this.aAi = this.data.playerCount,
				this.aAl = this.aAi, this.mM = this.aAi - this.j6, this.mN = 0, this.jL = this.data.selectedPlayer, this.vR = 0, this.vj = 0, this.aKC = 0, this.aBQ = 0, kH.a0b(this.data.spawningSeed), k5.c(), dA.c(), aIT.c(), aIS.aP0(), ko.a2N
				.aa7 = [], ko.zg.aJT = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), jE.c(), this.fL = 1, ob.c(), aVw(), dK.o3(), aDi.pu(), iF.c(), dK.c(), aIU.c(), dI
				.c(), d5.c(), kN.c(), aId.pO(), k8.c(), aIS.eH(), a9H.c(), aIP.c(), mK.x9(), uY.c(), kk.c(), ip.c(), fO.c(), xU.putImageData(xV, 0, 0), fX.c(), fY.c(), fZ.c(), fM.c(), fU.c(), mS.c(), mY.c(), fT.c(), oC.c(), eX.c(), fS.c(), fQ.c(), fP
				.c(), a6l.c(), aA4.c(), aFv(), k2.c(), oD.c(), aIX.c(), aIY.c(), zo.c(), aIa.c(), aIb.c(), this.aKD.c(), n.pO(), a0X.abw(), 0 === dA.iR[d4.jL] && fP.show(!1, !0), oD.iE(!0), a9L.c(), n.a5 = !0, this.g2 || this.iC && this.iA || bx.by
				.setState(1), this.pC = 0
		}, this.iM = function(aU5) {
			uY.p0.aUJ.length ? this.aUI = uY.p0.aUJ : this.aUI = uY.p2.iX(), __fx.replayHistory.save(this.aUI), !1 === __fx.customLobby.isActive() && cr.bf.aGa(), oX.clear(), this.fL = 0, n.qS(), bx.by.setState(0), bz.setState(0), __fx.customLobby
				.isActive() || c0.aF4.show(aU5), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.pC ? h.bf.a26(0) : 1 === this.pC ? h.gQ(19) : h.gQ(5, 5)
		}, this.a41 = function() {
			return this.g2 ? fT.g0 || !fM.iB : this.iC && (fT.g0 || this.iA)
		}, this.a4e = function() {
			return 1 === this.fL && !this.iA
		}
}

function aJF() {
	this.aXi = new tm, this.aA5 = new a6S, this.l9 = new a9h
}

function a6O() {
	var yo, aKt = !0;

	function aKz(aKy, u9) {
		var aY = document.createElement("div"),
			acL = document.createElement("span"),
			acM = document.createElement("span");
		acL.textContent = mY.mc(u9.o) + ":", acL.style.color = aB.aUU, acL.style.paddingRight = "0.4em", acL.style.display = "table-cell", acL.style.width = "6ch", acL.style.textAlign = "end", aY.appendChild(acL), acM.textContent = u9.ak, aY
			.appendChild(acM), aY.style.display = "table", u9.x0 && function(aY, x0) {
				{
					var uX;
					x0 >= 1024 - a3x.bh.a4Y ? ((uX = document.createElement("img")).src = a3x.nV.xJ[x0 - 1024 + a3x.bh.a4Y].toDataURL(), uX.style.width = "1.5em", uX.style.height = "1.5em", uX.style.verticalAlign = "middle", aY.appendChild(uX)) : ((
						uX = document.createElement("span")).textContent = a3x.bh.a4Z(x0), uX.style.display = "inline-block", uX.style.fontSize = "1.5em", uX.style.lineHeight = "1em", uX.style.verticalAlign = "middle", aY.appendChild(uX))
				}
			}(aY, u9.x0), aKy.appendChild(aY)
	}

	function aL0() {
		aKt && (yo.em.scrollTop = yo.em.scrollHeight)
	}
	this.clear = function() {
		yo.em.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a8i = oX.x2(), e4 = a8i.length, aKy = document.createDocumentFragment(), aW = 0; aW < e4; aW++) aKz(aKy, a8i[aW]);
		yo.em.appendChild(aKy), aL0(), yo.show(), this.resize(), aKt = !0, aL0()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yo.em.style.padding = "0.4em " + bK.en.ju(iN.n9)
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, this.eY = function(u9) {
		var aKy = document.createDocumentFragment();
		aKz(aKy, u9), yo.em.appendChild(aKy), aL0()
	}, (yo = new ek(L(228), [new ei("⬅️ " + L(2), function() {
		h.a6R(1)
	})])).em.style.overflowY = "auto", yo.em.addEventListener("scroll", function() {
		aKt = yo.em.scrollTop >= yo.em.scrollHeight - yo.em.clientHeight - 2
	})
}

function aJ2() {
	var acO;
	this.rV = null, this.zP = 0, this.c = function() {
		acO = [], 9 === d4.mr && this.acP()
	}, this.acP = function() {
		this.rV = [0, 0, 0, 0, 0, 0];
		for (var acQ = [250, 226, 166, 148, 100, this.zP = 0, 0, 0], aPD = [0, 8, 24, 30, 46, 70, 256, 333], acR = [0, 0, 3, 9, 17, 25, 256, 179], aF = d4.j6, aW = 1; aW < acQ.length; aW++)
			if (aF <= aPD[aW]) {
				this.zP = acQ[aW - 1] - eO.eP((aF - aPD[aW - 1]) * (acQ[aW - 1] - acQ[aW]), aPD[aW] - aPD[aW - 1]), this.rV[5] = acR[aW - 1] - eO.eP((aF - aPD[aW - 1]) * (acR[aW - 1] - acR[aW]), aPD[aW] - aPD[aW - 1]), this.rV[0] = d4.jW - aF -
					this.zP - this.rV[5];
				break
			} d4.mM = d4.jW - d4.j6, d4.data.numberTeams = (0 < d4.j6) + (0 < d4.mM), d4.data.playerCount = d4.aAi = d4.j6 + d4.mM, d4.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, d4.j6 + this.zP, d4.mM - this.zP]), d4.pD.aNa()
	}, this.aSZ = function(player) {
		acO.push({
			player: player,
			hD: 14 + kH.kI(20)
		})
	}, this.kK = function() {
		if (9 === d4.mr)
			for (var aW = acO.length - 1; 0 <= aW; aW--) --acO[aW].hD <= 0 && (oD.a3u(acO[aW].player, 0, a3x.bh.aIG + a3x.bh.aII), acO.splice(aW, 1))
	}
}

function aJD() {
	function acU() {
		8 === d4.mr && 1 === d4.fL && mv.mw.mx()
	}

	function acT(player) {
		d4.iA ? (xG.aSN(player), mK.xC(), d4.iC && d4.a9N.kK()) : aIW.gN(player)
	}
	this.aJj = function(player) {
		eX.a8F(player, player === d4.jL ? 21 : 22), acT(player), acU()
	}, this.aXz = function(player) {
		1 === d4.fL && 0 !== dA.iR[player] && 2 !== dA.a4E[player] && acT(player), d4.mm--, d4.mN--, eX.a8F(player, 4), bK.dl.zU(2) && mY.iE(!0), acU()
	}
}

function acI() {
	this.aNa = function() {
		var acV = d4.data;
		bK.nU.hO(acV.teamPlayerCount, acV.playerCount), acV.numberTeams = bK.nU.hC(acV.teamPlayerCount, 0), acV.teamPlayerCount[0] && acV.teamPlayerCount[7] && (acV.teamPlayerCount[7] = 0, this.aNa())
	}, this.pE = function() {
		var acV = d4.data;
		acV.mapType < 2 ? l.eH(l.aNM(acV), acV.mapSeed) : l.aZb(acV.canvas)
	}, this.aUq = function() {
		var acV = d4.data;
		acV.colorsData || (acV.colorsData = new Uint32Array(1)), 0 === acV.gameMode && (acV.colorsData[0] = bn.bf.nt()), acV.selectableName && (acV.playerNamesData || (acV.playerNamesData = new Array(1)), acV.playerNamesData[0] = bn.buffer.data[
			122].value), acV.a5G = new Uint32Array(1), acV.a5G[0] = bE.bA.bF(bn.buffer.data[105].value, 5)
	}, this.aDX = function() {
		d4.data = new uP
	}
}

function aJ8() {
	this.acW = new Uint32Array(d4.jW), this.c = function() {
		10 === d4.mr && this.acW.fill(0)
	}, this.kK = function() {
		10 === d4.mr && this.ao()
	}, this.ao = function() {
		for (var nD, target, n0, acW = this.acW, oi = mK.my, oj = dA.k9, aW = mK.mL - 1; 0 <= aW; aW--)(nD = oi[aW]) >= d4.j6 || (target = Math.max(eO.eP(oj[nD], 4), 2048), n0 = Math.max(k5.n1(nD), 100), acW[nD] += eO.eP(n0 * target, 1e4), acW[
			nD] > target && (acW[nD] = target))
	}, this.abH = function(player, k1) {
		return 10 !== d4.mr || bK.dl.iS(player) ? k1 : Math.min(this.acW[player], k1)
	}, this.abN = function(player, k1) {
		10 !== d4.mr || bK.dl.iS(player) || (this.acW[player] -= k1)
	}
}

function a2O() {
	this.kK = function(eG) {
		var id, pk, cZ;
		for (gD.c(eG), gD.cW += 2, cZ = 8 * gD.size; gD.cW + 8 <= cZ;) id = gD.gE(4), pk = gD.gE(9), 0 === id ? this.acX(id, pk, gD.gE(22)) : 1 === id ? this.acX(id, pk, gD.gE(10), gD.gE(10)) : 2 === id ? this.acX(id, pk, gD.gE(10), gD.gE(9)) :
			3 === id ? this.acX(id, pk, gD.gE(10), gD.gE(27)) : 4 === id ? this.acX(id, pk, gD.gE(10), gD.gE(16)) : 5 === id || 6 === id ? this.acX(id, pk, gD.gE(10)) : 7 === id ? this.acX(id, pk, gD.gE(1)) : 10 === id ? this.acX(id, pk, gD.gE(
				20), gD.gE(22)) : this.acX(id, pk)
	}, this.aa7 = [], this.acY = function() {
		for (var aca = 0, acb = 0, acc = 0, acd = 0, ace = 0, acf = 0, aW = 0; aW < 512; aW++) aca += dA.iR[aW], acb += dA.j8[aW], acc += dA.k9[aW], acd += d5.bf.d8[aW];
		ace += d5.bf.d6, acf += mK.mL, this.aa7.push(acc % 1073741824 * 4 + (aca + acb + acd + ace + acf) % 4)
	}, this.acX = function(id, pk, px, v4) {
		0 === id ? ko.a2L.zh(pk, px) : 1 === id ? ko.a2L.zm(pk, px, v4) : 2 === id ? ko.a2L.aJW(pk, px, v4) : 3 === id ? ko.a2L.eV(pk, px, v4) : 4 === id ? ko.a2L.eb(pk, px, v4) : 5 === id ? ko.a2L.aJc(pk, px) : 6 === id ? ko.a2L.aJf(pk, px) :
			7 === id ? ko.a2L.zz(pk, px) : 8 === id ? ko.a2L.aJj(pk) : 9 === id ? ko.a2L.aXz(pk) : 10 === id && ko.a2L.zj(pk, px >> 10, v4, px % 1024)
	}
}

function aJ6() {
	var aF, canvas, cd, acg, ach, aci, acj, lf, ack, acl, acm, acn, ab0 = !1,
		pt = (this.fd = !1, this.aE = 0, new Array(2)),
		aco = 0;

	function wY() {
		var aE = fU.aE,
			me = (lf = !1, aRZ(cd, aE, aF), Math.floor(aE / 2));
		1 === acg ? (cd.fillStyle = aB.mZ, cd.fillRect(me, 0, me, aF)) : -1 === acg && (cd.fillStyle = aB.aR6, cd.fillRect(0, 0, me, aF)), aRa(cd, aE, aF, 2);
		var me = (me = Math.floor(.25 * aF)) < 2 ? 2 : me,
			pX = (cd.fillStyle = aB.aaA, Math.floor((aF - 4) * ach[1] / aci[1]));
		0 < pX && cd.fillRect(2, aF - 2 - pX, me, pX), 0 < (pX = Math.floor((aF - 4) * ach[0] / aci[0])) && cd.fillRect(aE - 2 - me, aF - 2 - pX, me, pX);
		me = (me = Math.floor(aF / 8)) < 2 ? 2 : me, aRc(cd, Math.floor(.4 * aF), 0, aF, me, .5, !1), aRc(cd, Math.floor(aE - 1.4 * aF), 0, aF, me, .5, !0), pX = 1.1 * aF / pt[0].width;
		cd.imageSmoothingEnabled = !0, cd.setTransform(pX, 0, 0, pX, (aE - pX * pt[0].width) / 2, -.05 * aF), cd.drawImage(pt[+ab0], 0, 0), cd.setTransform(1, 0, 0, 1, 0, 0)
	}

	function act() {
		acn = -1, ab0 = aIR.a0p(), eX.a9M(257), eX.aaz(ab0), fU.fd = !0, lf = !0, ack = 360;
		for (var hB, m6 = 0, aW = mK.mL - 1; 0 <= aW; aW--) bK.dl.iS(mK.my[aW]) || (m6 += dA.j8[mK.my[aW]]);
		ab0 ? aci[0] = Math.max(eO.eP(3 * m6, 4), 1) : d4.jD ? (hB = 9 === d4.mr ? 8 === jE.rG[kk.a0u()] ? 80 : (hB = eO.eP(100 * kk.mo(), d4.kD), eO.eP(eO.h2(1550 - 11 * hB, 400, 1e3), 10)) : (hB = eO.eP(100 * kk.mo(), d4.kD), eO.eP(eO.h2(1600 -
			12 * hB, 400, 1e3), 10)), hB = eO.eP(hB * m6, 100), aci[0] = Math.max(hB, 1)) : 8 === d4.mr ? aci[0] = Math.max(eO.eP(3 * m6, 4), 1) : aci[0] = Math.max(eO.eP(3 * m6, 5), 1), aci[1] = Math.max(m6 - aci[0], 1)
	}

	function ly() {
		acm = n.kg(), lf = !0, ack = acg = 0, acj = [], fU.fd = !1, eX.wt(247), ach[0] = ach[1] = 0, eX.a9M(673)
	}

	function iv() {
		return fZ.lv(eX.aal()) ? __fx.settings.keybindButtons ? fZ.v - 2 * (aF + iN.gap) : fZ.v - aF - iN.gap : fM.lv(eX.aan()) ? fM.iv() - aF - iN.gap : aD.aF - aF - lk.ll() * iN.gap
	}
	this.o3 = function() {
		for (var aW = 0; aW < 2; aW++) pt[aW] = bK.canvas.aS2(aN.get(3), 8 - aW, aB.aaT), pt[aW] = bK.canvas.acp(pt[aW])
	}, this.c = function() {
		acm = -1e4, acl = aco = 0, acn = -1, this.fd = !1, lf = ab0 = !1, ach = [acg = ack = 0, 0], aci = [1, 1], acj = [], this.resize()
	}, this.resize = function() {
		aF = fZ.aF, this.aE = 4 * aF, (canvas = document.createElement("canvas")).width = this.aE, canvas.height = aF, cd = canvas.getContext("2d", {
			alpha: !0
		}), wY()
	}, this.iE = function() {
		lf && wY()
	}, this.t = function(u, v) {
		return !!this.fd && !(u < aD.aE - this.aE - iN.gap || v < iv() || (d4.g2 || this.zy(d4.jL) && (fT.g0 && fT.g1(), ko.zg.zz(u > aD.aE - iN.gap - this.aE / 2 ? 1 : 0)), 0))
	}, this.kK = function() {
		0 < acl ? 0 === --acl && ly() : this.fd ? 180 == --ack && 3 * ach[0] < aci[0] ? ly() : ach[0] >= aci[0] ? ab0 ? mv.mw.wj() : mv.mw.mx() : ach[1] >= aci[1] ? acl = 4 : ack <= 0 && ly() : ! function() {
			var a6U = n.kg();
			if (a6U % 40 == 14) {
				if (aco) return !(a6U < aco) && !(a6U < acm + 535) && (aco = a6U + 1071, bK.dl.ab9()) ? (act(), 1) : 0;
				(1 === mK.mL || (d4.jD ? kk.mo() : dA.j8[mp[0]]) >= eO.eP(96 * d4.kD, 100)) && (aco = a6U + 535)
			}
			return
		}() && 0 <= acn && (eX.eY(250, L(537, [dA.vd[acn]]), 673, acn, aB.i8, aB.ea, -1, !0), act())
	}, this.wm = function() {
		this.fd && ach[0] < aci[0] && ly()
	}, this.aXy = function(player, acv) {
		var acw = L(acv ? 538 : 539, [dA.vd[player]]),
			acw = (eX.eY(450, acw, 257, player, acv ? aB.vb : aB.aLv, aB.ea, -1, !0), acj.push(player), lf = !0, d4.iC ? Math.max(aci[0], aci[1]) : dA.j8[player]),
			acw = Math.max(acw, 1);
		acv ? ach[0] += acw : ach[1] += acw, player === d4.jL && (acg = acv ? 1 : -1)
	}, this.a6 = function() {
		var v;
		this.fd && (v = iv(), a7.drawImage(canvas, aD.aE - this.aE - iN.gap, v))
	}, this.a00 = function(player) {
		if (0 !== ack) return !1;
		if (!bK.dl.zU(1)) return !1;
		if (!bK.dl.mz(player)) return !1;
		if (10 <= kE[player] && !bK.dl.abO(player, 9)) return !1;
		if (!d4.iC) {
			player = n.kg();
			if (player < acm + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.zy = function(nD) {
		if (!bK.dl.zU(1)) return !1;
		if (!bK.dl.mz(nD)) return !1;
		if (!this.fd) return !1;
		for (var aW = acj.length - 1; 0 <= aW; aW--)
			if (acj[aW] === nD) return !1;
		return !0
	}, this.fv = function(player) {
		acn = player
	}
}

function a6c() {
	this.wo = function() {
		if (2 === d4.vR) d4.vj = 2;
		else {
			if (8 === d4.mr) bK.dl.iS(0) || 0 === dA.iR[0] ? d4.aKC = 1 : bK.dl.iS(1) || 0 === dA.iR[1] ? d4.aKC = 0 : d4.aKC = +(dA.j8[1] > dA.j8[0]);
			else {
				if (d4.jD) {
					var aHc = kk.acz();
					if (d4.aBQ = aHc, jE.rG[aHc]) return void(d4.vj = +(jE.jF[d4.jL] === aHc))
				}
				d4.aKC = mp[0]
			}
			d4.vj = +(d4.aKC === d4.jL)
		}
	}
}

function aJ7() {
	this.gb = 0;
	var ad0, ad1, ad2, ad3, ad4, ad5 = this.acB = 0;

	function ad6() {
		ad3 = ad4 = null, ad5 = 0
	}
	this.c = function(gA, aK0, aK1) {
		h.i(), an.aV(), bz.setState(10), ad3 = gA, ad4 = aK0, ad5 = aK1, this.gb = gA.gb, this.acB = aK1, ad0 = 0, ad1 = n.o + 4500, cr.bf.fH = gA.fH, cr.bf.g9 === gA.fH ? (console.log("direct pass"), ad2 = 0) : (console.log("delayed pass"), cr
			.bf.close(cr.bf.g9, 3247), ad2 = 2, cr.bf.a2r(gA.fH, 5, 2) && cr.rn.aXl()), a7.imageSmoothingEnabled = !0, bz.a8();
		aK0 = aN.aO("loading"), aK1 = (bx.by.i2() ? .396 : .25) * aD.lh / aK0.width;
		a7.setTransform(aK1, 0, 0, aK1, Math.floor((aD.aE - aK1 * aK0.width) / 2), Math.floor((aD.aF - aK1 * aK0.height) / 2)), a7.imageSmoothingEnabled = !1, a7.drawImage(aK0, 0, 0), a7.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aO2 = function() {
		0 < ad2 && n.o > ad1 && (ad2--, ad1 += 4500, 0 === n.aPn) && 0 === n.kg() && cr.bf.a2r(cr.bf.fH, 5, 2)
	}, this.aa1 = function() {
		return 10 === bz.f() && (an.bj.aK3(ad3, ad4, ad5), ad6(), !0)
	}, this.aGC = function() {
		10 === bz.f() && 2 <= ++ad0 && (an.bj.aK3(ad3, ad4, ad5), ad6())
	}
}

function qU() {
	var ad8, ad9, adA, aPn, adB, cW = 0,
		o = n.o;

	function adF() {
		! function() {
			if (!d4.iA) return;
			if (d4.iC) return;
			if (2 !== d4.fL)
				if (adB % 7 != 0) adB++;
				else if (aPn === d4.n5) {
				if (!adI()) return;
				mY.n3(aPn), d4.a9N.kK()
			} else {
				if (!adI()) return;
				adB++, aPn++, oD.a3t(), oD.iE(!0)
			}
			return 1
		}() && adI() && vv()
	}

	function adG() {
		cW = 0, (d4.iA ? (n.a5 = mY.n3(aPn - (adB % 7 == 0 ? 0 : 1) + adB % 7 / 7) || n.a5, vt) : fT.g0 || !fM.iB ? vt : (n.a5 = !0, vw))()
	}

	function adI() {
		var aW, e4, adJ = uY.p0.a5H,
			pk = uY.p0.a5I,
			px = uY.p0.a5J,
			v4 = uY.p0.a5K,
			adK = uY.p0.a5M,
			adL = uY.p0.a5L;
		if (!(ad8 >= adL.length)) {
			if (adL = adL[ad8], adK[ad8]) {
				for (e4 = ad9 + adL, aW = ad9; aW < e4; aW++) ko.a2N.acX(adJ[aW], pk[aW], px[aW], v4[aW]);
				ad9 += adL, ad8++
			} else ++adA >= adL && (ad8++, adA = 0);
			return __fx.replay.tick++, 1
		}
		eX.aV9("Replay file smaller than expected."), fM.g3(!1), d4.fL = 2
	}
	this.qY = 0, this.c = function() {
		adB = aPn = adA = ad9 = ad8 = 0, __fx.replay.registerHooks({
			advance: () => adF(),
			finishTick: () => iF.render(),
			requestRedraw: () => {
				n.a5 = !0
			},
			isEnded: () => 2 === d4.fL,
			getTickInterval: () => n.n2
		})
	}, this.kK = function() {
		var adE;
		aD.kK(), __fx.replay.frame() ? vu() : fM.a5Z() < 1.7 ? 0 === cW ? n.o >= o && (adE = n.n2 / fM.a5Z(), o += adE * Math.floor(1 + (n.o - o) / adE), 2 === d4.fL || fT.g0 || !fM.iB ? vu() : (adF(), iF.render()), cW++) : adG() : function() {
			var adE;
			if (n.o >= o)
				if (2 === d4.fL || fT.g0 || !fM.iB) vu(), o = n.o;
				else {
					for (adE = n.n2 / fM.a5Z(), 16 < (n.o - o) / adE && (o = n.o - 16 * adE); n.o >= o && 2 !== d4.fL;) o += adE, adF();
					iF.render()
				} adG()
		}(), vx(), n.a5 && (n.a5 = !1, vy())
	}, this.wv = function() {
		uY.p0.a5L.length - ad8 <= 2 || eX.aV9("Replay file larger than expected.")
	}
}

function aJH() {
	var gap, adM = !1,
		iq = 0,
		aE = 0,
		oI = 0,
		canvas = null,
		cd = null,
		h6 = null;

	function adQ() {
		for (var aW = d4.rD; 0 <= aW; aW--) h6[aW] = 0;
		for (aW = mK.mL - 1; 0 <= aW; aW--) h6[jE.jF[mK.my[aW]]] += dA.j8[mK.my[aW]];
		adM = !0
	}

	function adO() {
		for (var adV, adT = 0, e4 = 0, ag = Math.floor(aE / 2), fn = Math.floor(oI / 2), adU = 1.5 * Math.PI, aW = d4.rD; 0 <= aW; aW--) e4 += h6[aW], 0 === h6[aW] && adT++;
		if (adM = !1, cd.clearRect(0, 0, aE, aE), 0 < e4)
			if (adT === d4.rD) {
				for (aW = d4.rD; 0 <= aW; aW--)
					if (0 < h6[aW]) {
						! function(aW, ag, fn) {
							cd.fillStyle = jE.aP9[jE.rG[aW]], cd.beginPath(), cd.arc(ag, ag, fn, 0, 2 * Math.PI), cd.fill()
						}(aW, ag, fn);
						break
					}!
				function(ag) {
					var fontSize = ag / 3;
					cd.font = bK.en.i3(1, fontSize), cd.fillStyle = aB.i8, cd.fillText("100%", ag, ag + .1 * fontSize)
				}(ag)
			} else {
				for (aW = 0; aW <= d4.rD; aW++) 0 < h6[aW] && (! function(aW, ag, fn, adU, adV) {
					cd.fillStyle = jE.aP9[jE.rG[aW]], cd.beginPath(), cd.arc(ag, ag, fn, adU, adV), cd.lineTo(ag, ag), cd.fill()
				}(aW, ag, fn, adU, adV = adU + 2 * Math.PI * h6[aW] / e4), function(ag, fn, adU, adV) {
					var hB = (adV - adU) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * fn * Math.min(hB, .37);
					fontSize < 8 || (adU = (adU + adV) / 2, adV = (__fx.settings.detailedTeamPercentage ? (100 * hB).toFixed(2) : Math.floor(100 * hB + .5)) + "%", fn *= .525 - Math.max(.6 * (hB - .7), 0), cd.font = bK.en.i3(1, fontSize), cd
						.fillStyle = aB.i8, cd.fillText(adV, ag + Math.cos(adU) * fn, ag + Math.cos(adU + 1.5 * Math.PI) * fn))
				}(ag, fn, adU, adV), 0 !== aW && ada(ag, fn, adU), adU = adV);
				ada(ag, fn, 1.5 * Math.PI)
			}!
		function(ag, fn) {
			cd.beginPath(), cd.arc(ag, ag, fn, 0, 2 * Math.PI), cd.stroke()
		}(ag, fn)
	}

	function ada(ag, fn, hk) {
		cd.beginPath(), cd.moveTo(ag, ag), cd.lineTo(ag + Math.cos(hk) * fn, ag + Math.cos(hk + 1.5 * Math.PI) * fn), cd.stroke()
	}
	this.c = function() {
		if (d4.jD) {
			iq = 0, h6 = new Uint32Array(d4.rD + 1);
			for (var aW = d4.rD; 0 <= aW; aW--) h6[aW] = 0;
			for (aW = mK.mL - 1; 0 <= aW; aW--) h6[jE.jF[mK.my[aW]]] += 1;
			this.resize()
		} else h6 = cd = canvas = null
	}, this.a8y = function() {
		return aE
	}, this.resize = function() {
		d4.jD && (aE = Math.floor(.95 * (bx.by.i2() && !d4.fz ? .18 * aD.min : .13 * aD.lh)), aE = (aE *= 1 + (.5 + .2 * bx.by.i2()) * d4.fz) + aE % 2, gap = Math.max(1, .015 * aE), oI = Math.floor(aE - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = aE, canvas.height = aE, (cd = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, cd.strokeStyle = aB.i8, bK.en.textAlign(cd, 1), bK.en.textBaseline(cd, 1), adO())
	}, this.mo = function(adP) {
		adP && adQ();
		var m6, adP = this.a0u();
		return jE.rG[adP] || (adP = function() {
			for (var aHc = -1, aW = d4.rD; 1 <= aW; aW--)(-1 === aHc || h6[aW] > h6[aHc]) && (aHc = aW);
			return aHc
		}(), m6 = dA.j8[mp[0]], -1 !== adP && h6[adP] > m6) ? h6[adP] : m6
	}, this.acz = function() {
		return iq = 31, this.kK(), this.a0u()
	}, this.a0u = function() {
		for (var aHc = 0, aW = d4.rD; 0 < aW; aW--) h6[aW] > h6[aHc] && (aHc = aW);
		return aHc
	}, this.kl = function(adS) {
		for (var hD = 0, my = mK.my, jF = jE.jF, e4 = mK.mL, kn = dF.kn, aW = 0; aW < e4; aW++) {
			var nD = my[aW];
			jF[nD] === adS && (kn[hD++] = nD)
		}
		dF.km[0] = hD
	}, this.aHd = function(adS) {
		for (var hD = 0, my = mK.my, jF = jE.jF, e4 = mK.mL, kn = dF.kn, aW = 0; aW < e4; aW++) {
			var nD = my[aW];
			jF[nD] !== adS && (kn[hD++] = nD)
		}
		dF.km[0] = hD
	}, this.ab8 = function() {
		for (var hD = 0, aW = d4.rD; 0 <= aW; aW--) hD += 0 < h6[aW];
		return hD
	}, this.kK = function() {
		d4.jD && 32 <= ++iq && (iq = 0, adQ())
	}, this.wY = function() {
		d4.jD && adM && adO()
	}, this.a6 = function() {
		d4.jD && (d4.fz ? a7.drawImage(canvas, iN.gap, iN.gap) : a7.drawImage(canvas, iN.gap, a8x + 2 * iN.gap))
	}
}

function aJ0() {
	this.vk = new Array(d4.jW), this.vd = new Array(d4.jW), this.a4E = new Uint8Array(d4.jW), this.iR = new Uint8Array(d4.jW), this.j9 = new Uint16Array(d4.jW), this.jB = new Uint16Array(d4.jW), this.jA = new Uint16Array(d4.jW), this.jC =
		new Uint16Array(d4.jW), this.j8 = new Uint32Array(d4.jW), this.xF = new Uint32Array(d4.jW), this.k9 = new Uint32Array(d4.jW), this.ks = null, this.kC = null, this.dB = null, this.jo = null, this.vX = new Uint16Array(d4.jW), this.vY =
		new Uint16Array(d4.jW), this.vW = new Uint16Array(d4.jW), this.va = new Uint16Array(d4.jW), this.vV = new Uint8Array(d4.jW), this.ox = new Uint16Array(d4.jW), this.c = function() {
			this.vk.fill(""), this.vd.fill(""), this.a4E.fill(0), this.iR.fill(0), this.j9.fill(0), this.jB.fill(0), this.jA.fill(0), this.jC.fill(0), this.j8.fill(0), this.xF.fill(0), this.k9.fill(0), this.ks = new Array(d4.jW), this.kC = new Array(
				d4.jW), this.dB = new Array(d4.jW), this.jo = new Array(d4.jW), this.vX.fill(0), this.vY.fill(0), this.vW.fill(0), this.va.fill(0), this.vV.fill(0), this.ox.fill(0)
		}
}

function aVL(yZ, a8V, adc, add, ade) {
	var self;
	this.au = document.createElement("span"), this.resize = function() {
			this.au.style.fontSize = ((add - adc) * a8V.offsetHeight).toFixed(1) + "px"
		}, (self = this).au.textContent = yZ, self.au.style.color = aB.i8, self.au.style.font = "inherit", self.au.style.margin = "0.1em 0.6em", self.au.style.pointerEvents = "none", ade && (self.au.style.fontWeight = "bold"), self.au.style
		.whiteSpace = "nowrap", self.au.style.display = "block", a8V.appendChild(self.au)
}

function aJA() {
	var input;

	function adf(k) {
		(k = k.target.files) && 0 < k.length && aIZ.adh(k[0])
	}

	function adi(k) {
		var ag = new Image;
		ag.onload = aNO, ag.src = k.target.result
	}

	function aNO(k) {
		var k = k.target,
			aE = k.width,
			aF = k.height,
			adj = bn.buffer.data[162].value,
			max = Math.min(l.aYp, adj),
			adj = (max = bx.id || b1.b2() ? Math.min(1400, adj) : max) / Math.max(aE, aF);
		if (adj < 1 && (aE = Math.floor(adj * aE + .125), aF = Math.floor(adj * aF + .125)), max < aE || max < aF || aE < 10 || aF < 10) adj = "Invalid Image Dimensions!", bx.a99 ? bx.a99.showToast(adj) : alert(adj);
		else {
			for (var max = document.createElement("canvas"), adj = (max.width = aE, max.height = aF, max.getContext("2d")), adl = document.createElement("canvas"), adm = (adl.width = k.width, adl.height = k.height, adl.getContext("2d")), k = (adm
					.drawImage(k, 0, 0), adm.getImageData(0, 0, adl.width, adl.height)), adm = adj.createImageData(aE, aF), src = k.data, adp = adm.data, aY8 = adl.width / aE, aYA = adl.height / aF, v = 0; v < aF; v++)
				for (var u = 0; u < aE; u++) {
					var adq = Math.floor(u * aY8),
						adq = 4 * (Math.floor(v * aYA) * adl.width + adq),
						adt = 4 * (v * aE + u);
					adp[adt] = src[adq], adp[1 + adt] = src[1 + adq], adp[2 + adt] = src[2 + adq], adp[3 + adt] = 255
				}
			adj.putImageData(adm, 0, 0), 20 === h.l2 && h.p7().aNO(max)
		}
	}
	this.c = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = adf
	}, this.aV = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNH = function() {
		input.click()
	}, this.adh = function(uH) {
		var e7 = uH.name.split("."),
			e7 = e7[e7.length - 1].toLowerCase();
		"gif" !== e7 && "jpg" !== e7 && "jpeg" !== e7 && "png" !== e7 || ((e7 = new FileReader).onload = adi, e7.readAsDataURL(uH))
	}
}

function rt() {
	this.aCV = function() {
		for (var e4 = d4.j6, vM = mv.result.vM, me = vM.length, va = (l7.eH(17 + 16 * e4 + 33 * me), l7.eK(1, 1), l7.eK(4, 12), l7.eK(10, me), l7.eK(1, +(2 === d4.vR)), l7.eK(1, d4.aKC % 2), dA.va), aW = 0; aW < e4; aW++) l7.eK(16, va[aW]);
		for (var j8 = dA.j8, aW = 0; aW < me; aW++) {
			var nD = vM[aW];
			l7.eK(9, nD), l7.eK(24, j8[nD])
		}
		cr.bf.send(cr.bf.fH, l7.eG)
	}
}

function aJC() {
	this.aSU = new hT, this.a0n = new aYJ, this.bf = new adu, this.hh = new aVN, this.a9Z = new xH, this.dE = new aYh, this.kJ = new aHD, this.dv = new aGk, this.aGu = new aKK, this.adv = new aU7, this.eD = new d2, this.zr = new aCo, this.e8 =
		new aUK, this.ao = new aXO, this.zt = new dN, this.dc = new aOC, this.aXx = new aKO, this.c = function() {
			this.e8.c(), this.a0n.c(), this.bf.c(), this.hh.c(), this.a9Z.c(), this.adv.c(), this.dc.c()
		}, this.a6 = function() {
			this.adv.a6(), this.a0n.a6()
		}
}

function a6B() {
	var eg, aDO, aQE, adw, adx, ady, colors = [0, 0, 0],
		adz = -1;

	function ae2(aW) {
		var ae3 = aDO.v + aW * (iN.gap + ady);
		a7.fillStyle = "rgb(" + (0 === aW ? 150 : 2 === aW ? 30 : 0) + "," + (1 === aW ? 130 : 2 === aW ? 30 : 0) + "," + (2 === aW ? 220 : 0) + ")", a7.fillRect(adw, ae3, colors[aW] * adx, ady), a7.strokeStyle = aB.i8, a7.strokeRect(adw, ae3, adx,
			ady), a7.fillStyle = aB.i8, a7.font = bK.en.i3(0, .32 * ady), bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 0), a7.fillText(L(0 === aW ? 542 : 1 === aW ? 543 : 544) + ae0(aW), adw + iN.gap, ae3 + .53 * ady)
	}

	function ae0(aW, ae4) {
		return ae4 = ae4 || 256, eO.h2(Math.floor(ae4 * colors[aW]), 0, ae4 - 1)
	}

	function fl(iH, iI) {
		return !(iH < adw || iI < aDO.v || iH > aDO.u + aDO.aE || iI > aDO.v + aDO.aF)
	}
	this.show = function() {
		var hB = bn.buffer.data[121].value;
		colors[0] = (hB >> 12) / 63, colors[1] = (hB >> 6 & 63) / 63, colors[2] = (63 & hB) / 63, eg.show(), this.resize()
	}, this.s = function() {
		bn.ih.pT(121, (ae0(0, 64) << 12) + (ae0(1, 64) << 6) + ae0(2, 64)), eg.s()
	}, this.resize = function() {
		eg.resize(), aDO.resize();
		var ag = aD.fJ,
			r2 = eg.qx(),
			ae1 = (aDO.v = Math.max(aDO.v, ag * r2.qy + iN.gap), ag * r2.r0 - 2 * iN.gap);
		aDO.aF = Math.min(aDO.aF, ae1), aDO.aE = 2 * aDO.aF, aDO.v = ag * r2.qy + .5 * (ag * r2.r0 - aDO.aF), aDO.u = .5 * (aD.aE - aDO.aE), aQE = .25 * aDO.aE, adw = aDO.u + aQE + iN.gap, adx = aDO.aE - aQE - iN.gap, ady = (aDO.aF - 2 * iN
			.gap) / 3
	}, this.a6 = function() {
		var fn, hL, eN;
		eg.a6(), a7.lineWidth = iN.iV, fn = ae0(0), hL = ae0(1), eN = ae0(2), a7.fillStyle = "rgb(" + fn + "," + hL + "," + eN + ")", a7.fillRect(aDO.u, aDO.v, aQE, aDO.aF), a7.strokeStyle = aB.i8, a7.strokeRect(aDO.u, aDO.v, aQE, aDO.aF), a7
			.fillStyle = fn + hL + eN < 306 && hL < 150 ? aB.i8 : aB.aC, bK.en.textBaseline(a7, 1), bK.en.textAlign(a7, 1), a7.font = bK.en.i3(0, .1 * aDO.aF), a7.rotate(-Math.PI / 2), a7.fillText(L(541), -aDO.v - .5 * aDO.aF, aDO.u + .5 * aQE),
			a7.setTransform(1, 0, 0, 1, 0, 0), ae2(0), ae2(1), ae2(2)
	}, this.t = function(iH, iI) {
		fl(iH, iI) && (adz = eO.h2(Math.floor((iI - aDO.v) / (ady + .75 * iN.gap)), 0, 2), colors[adz] = eO.h2((iH - adw) / adx, 0, 1), n.a5 = !0)
	}, this.z = function(iH) {
		-1 !== adz && (colors[adz] = eO.h2((iH - adw) / adx, 0, 1), n.a5 = !0)
	}, this.a2 = function(iH, iI, deltaY) {
		fl(iH, iI) && (iH = eO.h2(Math.floor((iI - aDO.v) / (ady + .75 * iN.gap)), 0, 2), colors[iH] = eO.h2(colors[iH] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), n.a5 = !0)
	}, this.fg = function() {
		0 <= adz && (adz = -1, n.a5 = !0)
	}, this.j = function(ag) {
		2 === ag && eg.eo[0].ep()
	}, eg = new ek(L(540), [new ei("⬅️ " + L(2), function() {
		h.bf.a28()
	})], !1), aDO = new a5Y([.5, .25], [.5, .5], 1)
}

function a6P() {
	var yo, yp, yy;

	function aeA() {
		for (var colors = new Array(11), aW = 0; aW < 11; aW++) {
			var e7 = bn.buffer.data[163 + aW].value.split(",");
			colors[aW] = new Uint8Array(3);
			for (var ba = 0; ba < 3; ba++) ba < e7.length && (colors[aW][ba] = Number(e7[ba]))
		}
		return colors
	}
	this.show = function() {
		yo.show(), this.resize()
	}, this.s = function() {
		yo.s()
	}, this.resize = function() {
		yo.resize(), yp.resize()
	}, this.j = function(ag) {
		2 === ag && yo.eo[0].ep()
	}, yo = new ek(L(219), [new ei("⬅️ " + L(2), function() {
		h.ej()
	})]), yp = new ys(yo.em, ((yy = []).push(function() {
		var hn = new z1;
		return hn.z2(L(545)), hn.aNQ(cr.bf.a2C("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", hn.aNQ("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), hn
	}()), yy.push(function() {
		var hn = new z1,
			cR = (hn.z2(L(546)), bn.buffer.data[174].value),
			aNY = hn.a8K(cR.length + " / 180"),
			aTd = (aNY.style.textAlign = "center", new z7(0, 1, function(k) {
				var k = k.target.value,
					hD = k.length;
				aNY.textContent = hD + " / 180", hD <= 180 && bn.ih.pT(174, k)
			}));
		return aTd.k.rows = 6, aTd.k.style.fontSize = "1em", aTd.z8(cR), hn.z5(aTd), hn
	}()), yy.push(function() {
		var hn = new z1;
		hn.z2(L(211));
		for (var aW = 0; aW < 11; aW++) {
			var aI3 = hn.z5(new a0w(bn.buffer.data[163 + aW]));
			aW && (aI3.k.style.marginTop = "0.6em")
		}
		return hn.z5(new a7x([new ei(L(103), function() {
			for (var data = bn.buffer.data, aW = 163; aW < 174; aW++) data[aW] && bn.buffer.q4(aW, data[aW].hs);
			h.ej(), h.yw()[31] = null, h.gQ(31)
		}).button])), hn
	}()), yy.push(function() {
		var hn = new z1;
		return hn.z2("Targeting"), hn.aNQ(L(104)), hn.z5(new a0w(bn.buffer.data[175], 0, 0)), hn
	}()), yy.push(function() {
		var hn = new z1;
		return hn.z2(L(202)), hn.z5(new a7x([new ei(L(241), function() {
			(new aEm).show(bn.buffer.data[174].value, aeA(), -1)
		}).button])), hn
	}()), yy.push(function() {
		var hn = new z1,
			aeB = (hn.z2(L(547)), hn.aNQ(L(548)), new a0w(bn.buffer.data[176], 1, 0)),
			aeC = (hn.z5(aeB), new ei(L(549), function(k) {
				return aNW.button.textContent === L(208) && cr.bf.a1X(0) && (bK.en.a8Q(k), aNV(), cr.rq.aZT(bn.buffer.data[176].value, aeA(), bn.buffer.data[175].value, bn.buffer.data[174].value)), !0
			}, 1)),
			aNV = function() {
				aNW.button.textContent = L(207), aeC.tZ(1), aeC.button.style.color = aB.i8
			},
			aNW = new ei(L(207), function(k) {
				return k.textContent === L(207) ? (k.textContent = L(208), aeC.tZ(0), aeC.button.style.color = aB.tY) : aNV(), !0
			});
		return hn.z5(new a7x([aNW.button, aeC.button])), hn
	}()), yy))
}

function adu() {
	this.d7 = 512, this.d9 = 8, this.d6 = 0, this.de = 0, this.dn = new Uint16Array(this.d7), this.dh = new Uint32Array(this.d7), this.hd = new Uint16Array(this.d7), this.he = new Uint32Array(this.d7), this.hb = new Uint16Array(this.d7), this.dU =
		new Uint16Array(this.d7), this.db = new Uint8Array(this.d7), this.hf = new Uint8Array(this.d7), this.dy = new Array(this.d7), this.e0 = new Uint16Array(this.d7), this.d8 = new Uint8Array(d4.jW), this.hV = new Uint16Array(this.d9 * d4.jW),
		this.c = function() {
			this.d6 = 0, this.de = 0, this.d8.fill(0), this.dy.fill(null)
		}, this.ri = function(player) {
			var k1 = dF.oZ[0],
				dE = dF.dG[1],
				dx = dF.e7[0],
				aeD = this.de,
				e4 = this.d6,
				aVW = dI.aIB(dx[0]),
				aSg = this.d8[player],
				aSh = (player << 3) + aSg;
			this.dn[e4] = aSh, this.dh[e4] = aVW, this.hd[e4] = 0, k1 < 60 && (bK.dl.a7e(player, 60 - k1), k1 = 60), this.he[e4] = k1, this.hb[e4] = d5.hh.ri(e4, dI.hi(aVW)), this.dU[e4] = aeD, this.db[e4] = dE, this.hf[e4] = 0, this.dy[e4] = dx,
				this.e0[e4] = 0, this.de = (aeD + 1) % 65536, this.d8[player] = aSg + 1, this.hV[aSh] = e4, this.d6++, d5.dE.aYj(player, dx[dx.length - 1], dE, aeD, k1)
		}, this.kK = function() {
			d5.dE.kK();
			for (var nD = d4.jL, m6 = d5.ao.a8C(nD), m2 = (! function(m2) {
					for (var aeI, dh = m2.dh, he = m2.he, hf = m2.hf, hd = m2.hd, hb = m2.hb, dy = m2.dy, e0 = m2.e0, m2 = m2.d6, aUE = l.aH << 4, aW = m2 - 1; 0 <= aW; aW--) {
						var aeJ = dh[aW],
							dx = dy[aW],
							aeK = e0[aW],
							aVW = dI.aIB(dx[aeK]),
							aVX = dI.aIB(dx[aeK + 1]),
							aeL = aVW % aUE,
							aVW = ~~((aVW + .5) / aUE),
							aeN = aVX % aUE,
							aeO = ~~((aVX + .5) / aUE),
							aeP = aeN - aeL,
							aeQ = aeO - aVW,
							bX = Math.max(~~Math.sqrt(aeP * aeP + aeQ * aeQ + .5), 1),
							aAU = he[aW],
							aAU = (aAU = hf[aW] ? 4e4 : 25e4 + Math.min(20 * aAU, 3e5) + Math.min(aAU >> 3, 5e4), hd[aW] + Math.max(~~((aAU + .5) / bX), 1));
						65535 <= aAU ? aeK + 2 < dx.length ? (e0[aW] = aeK + 1, dh[aW] = aeI = function(aW, aeR, aeL, aeM, aeK, bX, dx, aUE) {
							aeR = Math.min(aeR - 65535, 65535);
							var dx = dI.aIB(dx[aeK + 2]),
								aeK = dx % aUE - aeL,
								dx = ~~((dx + .5) / aUE) - aeM,
								aeT = Math.max(~~Math.sqrt(aeK * aeK + dx * dx + .5), 1);
							return aeR = Math.min(Math.floor((bX * aeR + .5) / aeT), 65534), d5.bf.hd[aW] = aeR, aeL + eO.eP(aeR * aeK, 65535) + aUE * (aeM + eO.eP(aeR * dx, 65535))
						}(aW, aAU, aeN, aeO, aeK, bX, dx, aUE)) : (dh[aW] = aeI = aVX, hd[aW] = 65535) : (hd[aW] = aAU, dh[aW] = aeI = aeL + eO.eP(aAU * aeP, 65535) + aUE * (aVW + eO.eP(aAU * aeQ, 65535))), hb[aW] = d5.hh.aVU(hb[aW], aeJ,
							aeI)
					}
				}(this), ! function(m2) {
					if (n.kg() % 2 == 1) {
						var aW, cy, me, eN, ag, aeU, aS8, aeV, nd, iw, iz, aVW, aeW, vG, aeY, ne, e4 = m2.d6,
							dh = m2.dh,
							dn = m2.dn,
							he = m2.he,
							hf = m2.hf,
							hh = d5.hh.hh,
							adE = hh.length,
							aVR = d5.hh.aVR,
							aUE = l.aH << 4,
							aea = d4.jD,
							adS = jE.jF,
							j3 = (e4 - 1) * (eO.eP(n.kg(), 2) % 2);
						for (aW = 0; aW < e4; aW++)
							for (cy = Math.abs(aW - j3), aVW = dh[cy], me = dI.hi(aVW), nd = dn[cy] >> 3, iw = aVW % aUE, iz = ~~((aVW + .5) / aUE), aeY = he[cy], eN = 0; eN < 9; eN++)
								if (!((aeU = me + aVR[eN]) < 0 || adE <= aeU))
									for (aeV = hh[aeU], aS8 = aeV.length, ag = 0; ag < aS8; ag++) aeW = aeV[ag], ne = dn[aeW] >> 3, nd == ne || aea && adS[nd] === adS[ne] && adS[nd] || (ne = dh[aeW], (vG = iw - ne % aUE) * vG + (vG = iz - ~~(
										(ne + .5) / aUE)) * vG < 14400 && (ne = he[aeW], vG = ne <= aeY ? Math.max(1, eO.eP(ne + eO.eP(aeY - ne, 10), 10)) : Math.max(1, eO.eP(aeY, 10)), he[aeW] = Math.max(ne - vG, 0), hf[aeW] = 4))
					}
				}(this), ! function(m2) {
					if (n.kg() % 5 == 3)
						for (var he = m2.he, e4 = m2.d6, aW = 0; aW < e4; aW++) {
							var k1 = he[aW];
							he[aW] = Math.max(k1 - Math.max(1, k1 >> 7), 0)
						}
				}(this), this), he = m2.he, hf = m2.hf, aW = m2.d6 - 1; 0 <= aW; aW--) hf[aW] = hf[aW] >> 1, 0 === he[aW] && (d5.dc.aKQ(aW), d5.aSU.hW(aW));
			ob.a7b(nD, m6 - d5.ao.a8C(nD), 15)
		}
}

function a5Y(aeb, aec, aed) {
	this.u = 0, this.v = 0, this.aE = 0, this.aF = 0, this.resize = function() {
		this.aF = Math.min(bK.en.a9s(aed || .5) * aeb[1] * aD.lh, aD.aF - 2 * iN.gap), this.aE = Math.min(this.aF * (aeb[0] / aeb[1]), aD.aE - 2 * iN.gap), this.aF = aeb[1] * this.aE / aeb[0], this.u = iN.gap + aec[0] * (aD.aE - this.aE - 2 * iN
			.gap), this.v = iN.gap + aec[1] * (aD.aF - this.aF - 2 * iN.gap)
	}, this.aee = function() {
		return this.u + .5 * this.aE
	}
}

function aOm() {
	this.aS2 = function(aef, cW, aWB) {
		var jw = aef.height,
			pt = bK.en.nM(jw, jw),
			rL = bK.en.getContext(pt);
		return function(aE, rL, aWB) {
			rL.fillStyle = aWB, rL.beginPath(), rL.arc(aE / 2, aE / 2, .47 * aE, 0, 2 * Math.PI), rL.fill()
		}(jw, rL, aWB), rL.drawImage(aef, -cW * jw, 0), pt
	}, this.acp = function(aeh) {
		var rL, pd, jw = aeh.height;
		return aeh.width === jw && (pd = (rL = bK.en.getContext(aeh, !0)).getImageData(0, 0, jw, jw), bK.ca.a5z(pd.data, jw, jw, .9), rL.putImageData(pd, 0, 0)), aeh
	}
}

function aJO() {
	this.a7O = function() {
		for (var u, v, aW = a7N - 1; 0 <= aW; aW--) u = eO.eP(a7h[aW], 4) % l.aH, v = eO.eP(a7h[aW], 4 * l.aH), dA.j9[a7J] = Math.min(u, dA.j9[a7J]), dA.jB[a7J] = Math.min(v, dA.jB[a7J]), dA.jA[a7J] = Math.max(u, dA.jA[a7J]), dA.jC[a7J] = Math
			.max(v, dA.jC[a7J])
	}, this.aG1 = function() {
		var bX, nD, aW, e4 = dA.ks[a7J].length,
			jZ = dK.jZ;
		loop: for (aW = e4 - 1; 0 <= aW; aW--) {
			for (bX = 3; 0 <= bX; bX--)
				if (nD = dA.ks[a7J][aW] + jZ[bX], dK.jQ(nD) || dK.yH(nD) && dK.jR(nD) !== a7J) {
					dK.yX(dA.ks[a7J][aW], a7J);
					continue loop
				} dA.ks[a7J][aW] = dA.ks[a7J][e4 - 1], dA.ks[a7J].pop(), e4--
		}
	}, this.aG2 = function() {
		var player = a7J,
			kC = dA.kC,
			dB = dA.dB,
			jo = dA.jo,
			e4 = kC[player].length,
			jZ = dK.jZ;
		loop: for (var aW = e4 - 1; 0 <= aW; aW--) {
			for (var aei = !1, aej = !1, bX = 3; 0 <= bX; bX--) {
				var nD = kC[player][aW] + jZ[bX];
				if (dK.yB(nD, player)) continue loop;
				aei = aei || dK.yO(nD), aej = aej || dK.y9(nD)
			}
			aei ? dB[player].push(kC[player][aW]) : aej ? jo[player].push(kC[player][aW]) : dK.yV(kC[player][aW], player), kC[player][aW] = kC[player][e4 - 1], kC[player].pop(), e4--
		}
	}, this.a7B = function() {
		dA.j8[a78] -= a7N
	}, this.a7C = function(border) {
		for (var e4 = border.length, aW = e4 - 1; 0 <= aW; aW--) dK.yI(a78, border[aW]) || (border[aW] = border[e4 - 1], border.pop(), e4--)
	}, this.a7D = function(border) {
		for (var e4 = border.length, aW = e4 - 1; 0 <= aW; aW--) !dK.yI(a78, border[aW]) && dK.dL(border[aW]) && (border[aW] = border[e4 - 1], border.pop(), e4--)
	}, this.a7E = function(border) {
		for (var bX, nD, e4 = border.length, jZ = dK.jZ, aW = e4 - 1; 0 <= aW; aW--)
			for (bX = 3; 0 <= bX; bX--)
				if (nD = border[aW] + jZ[bX], dK.yB(nD, a78)) {
					dA.kC[a78].push(border[aW]), border[aW] = border[e4 - 1], border.pop(), e4--;
					break
				}
	}, this.a7F = function() {
		for (var bX, nD, jZ = dK.jZ, aW = a7N - 1; 0 <= aW; aW--)
			for (bX = 3; 0 <= bX; bX--) nD = a7h[aW] + jZ[bX], dK.yJ(a78, nD) && dK.yK(nD) && (dA.kC[a78].push(nD), dK.yW(nD, a78))
	}, this.a7G = function() {
		var u, v;
		loop: for (; dA.jB[a78] < dA.jC[a78];) {
			for (u = dA.jA[a78]; u >= dA.j9[a78]; u--)
				if (dK.yI(a78, 4 * (dA.jB[a78] * l.aH + u))) break loop;
			dA.jB[a78]++
		}
		loop: for (; dA.jB[a78] < dA.jC[a78];) {
			for (u = dA.jA[a78]; u >= dA.j9[a78]; u--)
				if (dK.yI(a78, 4 * (dA.jC[a78] * l.aH + u))) break loop;
			dA.jC[a78]--
		}
		loop: for (; dA.j9[a78] < dA.jA[a78];) {
			for (v = dA.jC[a78]; v >= dA.jB[a78]; v--)
				if (dK.yI(a78, 4 * (v * l.aH + dA.j9[a78]))) break loop;
			dA.j9[a78]++
		}
		loop: for (; dA.j9[a78] < dA.jA[a78];) {
			for (v = dA.jC[a78]; v >= dA.jB[a78]; v--)
				if (dK.yI(a78, 4 * (v * l.aH + dA.jA[a78]))) break loop;
			dA.jA[a78]--
		}
	}, this.jT = function(player, kM) {
		return 0 === jE.jF[player] || jE.jF[player] !== jE.jF[kM]
	}, this.zl = function(player) {
		for (var aW, j3, e4 = dA.kC[player].length, jZ = dK.jZ, bX = 3; 0 <= bX; bX--)
			for (j3 = jZ[bX], aW = 0; aW < e4; aW++)
				if (dK.jQ(dA.kC[player][aW] + j3)) return !0;
		return !1
	}, this.a57 = function(player) {
		for (var aW, j3, e4 = dA.kC[player].length, jZ = dK.jZ, bX = 3; 0 <= bX; bX--)
			for (j3 = jZ[bX], aW = 0; aW < e4; aW++)
				if (dK.yL(dA.kC[player][aW]) && dK.jQ(dA.kC[player][aW] + j3)) return !0;
		return !1
	}, this.zq = function(abA, abB) {
		for (var aW, m6, j3, nD, aSg = dA.kC[abA].length, aSh = dA.kC[abB].length, jZ = (aSh < aSg && (m6 = abA, abA = abB, abB = m6, m6 = aSg, aSg = aSh, 0), dK.jZ), bX = 3; 0 <= bX; bX--)
			for (j3 = jZ[bX], aW = 0; aW < aSg; aW++)
				if (nD = dA.kC[abA][aW] + j3, dK.yH(nD) && dK.jR(nD) === abB) return !0;
		return !1
	}, this.a58 = function(abA, abB) {
		for (var aW, j3, nD, aSg = dA.kC[abA].length, jZ = dK.jZ, bX = 3; 0 <= bX; bX--)
			for (j3 = jZ[bX], aW = 0; aW < aSg; aW++)
				if (dK.yL(dA.kC[abA][aW]) && (nD = dA.kC[abA][aW] + j3, dK.yH(nD)) && dK.jR(nD) === abB) return !0;
		return !1
	}
}

function aJ5() {
	var iw, iz, j1, j2, aek = 0,
		ael = 0;

	function aen() {
		return Math.pow(Math.pow(j1 - iw, 2) + Math.pow(j2 - iz, 2), .5)
	}

	function aem(k) {
		iw = aD.fJ * k.touches[0].clientX, iz = aD.fJ * k.touches[0].clientY, j1 = aD.fJ * k.touches[1].clientX, j2 = aD.fJ * k.touches[1].clientY
	}
	this.f3 = function(k) {
		return 1 < k.touches.length ? (ael = n.o, aek = 3, aem(k), fQ.s(), !0) : (aek = 0, !1)
	}, this.f4 = function(k) {
		var aQ4, aCR, aCS;
		return 0 !== d4.fL && 1 < k.touches.length && (aek = Math.max(aek - 1, 0), a0X.cZ() && (aQ4 = aen(), aem(k), k = aen(), aCR = Math.floor((iw + j1) / 2), aCS = Math.floor((iz + j2) / 2), fY.aYD(aCR, aCS, Math.max(.125, k) / Math.max(.125,
			aQ4)), n.a5 = !0), !0)
	}, this.fj = function() {
		var u, v;
		return !!(aek && (aek = 0, n.o < ael + 500)) && (u = (iw + j1) / 2, v = (iz + j2) / 2, fQ.fW(u, v), fQ.click(u, v, !0) && (n.a5 = !0), !0)
	}
}
aRO(), self.aiCommand746 = function(hB) {
	0 === hB ? aIh() : 1 !== hB || !bx || 1 !== bx.id || bx.hr < 14 || b1.fw()
}, setTimeout(aIh, 1e4), window.onload = function() {
	aIh()
};