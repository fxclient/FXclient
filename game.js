function a() {
	this.b = new c, this.d = new e
}

function f(g) {
	var h = document.createElement("div");
	this.i = h, this.j = g, this.resize = function() {
		for (var m = g.length, l = 1; l < m; l++) n.o.p(g[l], 4)
	};
	var l, m = g.length;
	for (h.style.width = "100%", h.style.height = "2.7em", h.style.marginTop = "0.6em", h.style.border = "inherit", l = 0; l < m; l++) g[l].style.verticalAlign = "top", g[l].style.width = (100 / m).toFixed(2) + "%", g[l].style.height = "100%", g[l]
		.style.fontSize = "0.75em", h.appendChild(g[l])
}

function q() {
	var r, s, t;
	r = [32, 65, 191, 913, 931], s = [64, 127, 688, 930, 1155], t = new Array(r.length + 1);
	for (var l = 0; l < t.length; l++) {
		t[l] = 0;
		for (var v = l - 1; 0 <= v; v--) t[l] += s[v] - r[v]
	}

	function a3(a2) {
		for (var l = r.length - 1; 0 <= l; l--)
			if (a2 >= r[l] && a2 < s[l]) return l;
		return -1
	}
	this.w = function(x) {
		return 0 !== (x = x.trim()).indexOf("Bot ") && 0 !== x.indexOf("[Bot] ") && function(x, z, a0) {
			var m = (x = x.trim()).length;
			if (m < z || a0 < m) return !1;
			for (var a2, a1 = 0, l = 0; l < m; l++)
				if (a2 = x.charCodeAt(l), a1 += 65 <= a2 && a2 <= 90 || 1040 <= a2 && a2 <= 1071 ? 1 : 0, -1 === a3(a2)) return !1;
			if (3 < a1 && a1 > Math.floor(m / 2)) return !1;
			return !0
		}(x, 3, 20)
	}, this.a4 = function(x) {
		for (var m = (x = x.trim()).length, a5 = [], l = 0; l < m; l++) {
			var a2, a6 = a3(a2 = x.charCodeAt(l));
			a5.push(t[a6] + a2 - r[a6])
		}
		return a5
	}, this.a7 = function(a5) {
		for (var a2, a8, x = "", m = a5.length, l = 0; l < m; l++)
			for (a8 = 1; a8 < t.length; a8++)
				if (a5[l] < t[a8]) {
					a2 = r[a8 - 1] + a5[l] - t[a8 - 1], x += String.fromCharCode(a2);
					break
				} return x
	}, this.a9 = function(x) {
		for (var a5 = this.a4(x), result = "", l = 0; l < a5.length; l++) result = (result += a5[l] < 10 ? "00" : a5[l] < 100 ? "0" : "") + a5[l].toString(10);
		return result
	}, this.aA = function(x) {
		for (var a5 = new Array(Math.floor(x.length / 3)), l = 0; l < x.length; l += 3) a5[Math.floor(l / 3)] = parseInt(x.substring(l, l + 3));
		return this.a7(a5)
	}, this.aB = function(x) {
		for (var aC, a5 = [x.length], l = 0; l < x.length; l++) a5[l] = x.charCodeAt(l) - 48;
		var result = "";
		for (l = 0; l < x.length; l++) l === x.length - 1 || 51 < 10 * a5[l] + a5[l + 1] ? result += a5[l].toString() : (aC = 10 * a5[l] + a5[l + 1], result += String.fromCharCode(aC + (aC < 26 ? 65 : 71)), l++);
		return result
	}, this.aD = function(x) {
		for (var a2, result = "", l = 0; l < x.length; l++) 48 <= (a2 = x.charCodeAt(l)) && a2 < 58 ? result += String.fromCharCode(a2) : 65 <= a2 && a2 < 75 ? result += "0" + (a2 - 65).toString() : 75 <= a2 && a2 < 91 ? result += (a2 - 65)
			.toString() : 97 <= a2 && a2 < 123 && (result += (a2 - 71).toString());
		return result
	}, this.aE = function(x) {
		for (var m = x.length, a5 = [], l = 0; l < m; l++)(a2 = x.charCodeAt(l)) < 58 ? a5.push(x[l]) : (a2 -= a2 < 91 ? 65 : 71, a5.push(String(aF(a2, 10))), a5.push(String(a2 - 10 * aF(a2, 10))));
		var m = a5.length - 2,
			a2 = 0,
			aG = [];
		for (l = 0; l < m; l += 3) aG[a2++] = parseInt(a5[l] + a5[l + 1] + a5[l + 2]);
		return aG
	}, this.aH = function() {
		for (var aI, aJ = "", l = 0; l < 6; l++) aI = 48 + aK.random() % 36, aI += 58 <= aI ? 39 : 0, aJ += String.fromCharCode(aI);
		return aJ
	}
}

function aL() {
	function au(title, aw, i) {
		aY(i), aO.aQ(4, 5, new aR("⚠️ " + title, aw, !0))
	}

	function aY(i) {
		! function(i) {
			var aV = aW.aX();
			0 !== aV && (6 === aV ? ak.al.az(i) : 7 === aV ? (b0.b1(), ak.al.close(ak.al.am, 3256)) : 8 === aV && ao.b2(!0))
		}(i), aO.al.ay()
	}
	this.aM = function(aN, i) {
		if (8 === aO.aP && 0 === aN) aO.aQ(4, 0, new aR("⚠️ " + aS.aT(64), aS.aU(i), !0));
		else {
			var aV = aW.aX();
			if (6 === aV) {
				if (4211 === i) return aY(i), void aO.aQ(4, 5, new aR("🚀 " + aS.aZ[122], aS.aZ[123], !0, [new aa("❌ " + aS.aZ[92], function() {
					aO.ab()
				}, ac.ad), new aa("🔄 " + aS.aZ[124], function() {
					ae.af.ag()
				}, ac.ah)]));
				if (4214 !== i) return void ai.aj(aN)
			} else {
				if (7 !== aV) return 8 === aV ? void(aN !== ak.al.an || ao.ap || 1 !== ao.aq || ar.at(aS.aU(i))) : void 0;
				if (aN !== ak.al.am) return
			}
			au(aS.aT(64), aS.aU(i), i)
		}
	}, this.av = function(i) {
		8 === aW.aX() ? ao.ap || 1 !== ao.aq || ar.at(aS.aU(i)) : au(aS.aT(64), aS.aU(i), i)
	}
}

function b3() {
	var b4 = 0,
		b5 = b6.b5;
	this.b7 = 0, this.b8 = function() {
		b9.b8(), ao.bA ? bB() : 0 === b4 ? b6.b5 >= b5 && (b5 += b6.bC * Math.floor(1 + (b6.b5 - b5) / b6.bC), 2 === ao.aq || bD.bE ? bF() : (bG(), bH.bI()), b4++) : ((bD.bE ? bB : (b6.bJ = !0, bK))(), b4 = 0), bL(), b6.bJ && (b6.bJ = !1, bM())
	}
}

function bN() {
	this.bO = 0, this.bP = null;
	var bR = this.bQ = 0;
	this.bS = 0, this.bT = function() {
		0 !== bU.bV[ao.bW] && bX.bY(ao.bW) && 2 === ao.bZ && (ao.ba = 2)
	}, this.bb = function() {
		var bm, bo;
		this.bP = bc.bd.be(), this.bO = bf.bg.bh(), ao.bi < 7 && 2 !== ao.bZ ? this.bQ = bj.bk() : this.bQ = bc.bd.bl(), 8 === ao.bi && 1 === ao.bZ ? (bm = 1 - ao.bn, bo = bU.bp[bm], bU.bp[bm] = 0, bq.br.bs(), bU.bp[bm] = bo) : bq.br.bs(), bR =
			.01 * bU.bx[ao.bW] / 50, this.bS = 0, ao.bi < 7 ? bc.bu.bb(this.bP) : 7 === ao.bi || 10 === ao.bi ? n.br.c1(ao.bW) && (bm = bc.result.bO * (1 + ao.c3), 2 === ao.bZ ? bc.result.bS += bm * bU.bp[ao.bW] / bc.result.bQ : c4[0] === ao
				.bW && (bc.result.bS += bm)) : 8 !== ao.bi || 1 !== ao.ba || 0 === by.bz.data[107].value || 100 <= (bo = by.bz.data[108].value) || (bc.result.bS += .01 * (100 - bo) * 10)
	}, this.c5 = function() {
		0 !== bR && 0 !== bc.result.bS && ar.c6(0, "🏆 You earned prize money of 🧈 " + bc.result.bS.toFixed(2) + ".", 40, 0, ac.c7, ac.c8, -1, !1)
	}
}

function c9() {
	this.cA = [], this.cB = [], this.k = function() {
		this.cA = [], this.cB = []
	}, this.b8 = function() {
		0 <= this.cA.length && this.cC(this.cA), 0 <= this.cB.length && this.cC(this.cB)
	}, this.cC = function(a5) {
		for (var a8 = -1, l = a5.length - 1; 0 <= l; l--)
			if (a5[l].b5--, a5[l].b5 <= 0) {
				a8 = l;
				break
			} for (l = a8; 0 <= l; l--) a5.shift()
	}, this.cD = function(id, cE, cF) {
		return this.cG(this.cA, id, cE, cF)
	}, this.cH = function(id, cE, cF) {
		return this.cG(this.cB, id, cE, cF)
	}, this.cG = function(a5, id, cE, cF) {
		return ! function(a5, id, cE) {
			var l, cK;
			for (l = cE.length - 1; 0 <= l; l--)
				for (cK = a5.length - 1; 0 <= cK; cK--)
					if (a5[cK].player === cE[l] && id === a5[cK].id) return 1;
			return
		}(a5, id, cE) && (cF && function(a5, id, cE) {
			var l;
			for (l = cE.length - 1; 0 <= l; l--) a5.push({
				player: cE[l],
				id: id,
				b5: 384
			})
		}(a5, id, cE), !0)
	}
}

function cL() {
	this.cM = new cN, this.bg = new cO
}

function cP() {
	this.cQ = function(player, cR, cS) {
		n.br.cT(player, cS, cR) && (cU.cV(player, cR), cR < ao.cW) && aK.random() < aK.value(10) && (cX[cR] = 0)
	}, this.cY = function(player, cR, cS) {
		n.br.cZ(cS, cR) && (n.br.ca(cR, cb.cc[0]), cd.ce(player, cR), cf.cg(cR, cb.cc[0]))
	}
}

function ch() {
	var ci, cj, ck, cl, cm, cn, co, cq, cr, ct, cu, cv, cy, cz, d0, d1, d2, cp = 48,
		cw = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		cx = [0, 0, 0, 0];

	function d8(l, dE) {
		l = co[l].getContext("2d", {
			alpha: !0
		});
		l.clearRect(0, 0, cp, cp), d9.d.dG(dE, l, 0, 0, cp)
	}

	function d6(l, dH) {
		var l = co[l].getContext("2d", {
				alpha: !0
			}),
			zoom = (l.clearRect(0, 0, cp, cp), cp / dH.width),
			bo = cp / dH.height,
			zoom = bo < zoom ? bo : zoom;
		l.imageSmoothingEnabled = !0, l.setTransform(zoom, 0, 0, zoom, Math.floor((cp - zoom * dH.width) / 2), Math.floor((cp - zoom * dH.height) / 2)), l.drawImage(dH, 0, 0), l.setTransform(1, 0, 0, 1, 0, 0)
	}

	function dM(a2, aI, dQ, dF) {
		dF.beginPath(), dF.moveTo(a2, a2), dF.lineTo(a2 + Math.cos(dQ) * aI, a2 + Math.cos(dQ + 1.5 * Math.PI) * aI), dF.stroke()
	}

	function dy() {
		if (7 === aW.aX()) {
			for (var dz, dH, dF, zoom, bo, v = -1, l = cq.length - 1; 0 <= l; l--)
				if (null === cq[l].df) {
					v = l;
					break
				} - 1 !== v && (null !== (dz = dg(cq[v].dn, cq[v].dp)) ? cq[v].df = dz : (dz = {
					e0: e1.e0,
					e2: e1.e2,
					e3: e1.e3,
					e4: e1.e4,
					e5: e1.e5,
					e6: e1.e6,
					dh: e1.dh,
					di: e1.di
				}, e1.e7(cq[v].dn, cq[v].dp), e1.e8.e9(), (dH = document.createElement("canvas")).width = 128, dH.height = 128, dF = dH.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / e1.e0) < (bo = 128 / e1.e2) && (zoom = bo), dF.imageSmoothingEnabled = !0, dF.setTransform(zoom, 0, 0, zoom, (128 - zoom * e1.e0) / 2, (128 - zoom * e1.e2) / 2), dF.drawImage(e1.e3, 0, 0), e1.e0 = dz.e0, e1
				.e2 = dz.e2, e1.e3 = dz.e3, e1.e4 = dz.e4, e1.e5 = dz.e5, e1.e6 = dz.e6, e1.dh = dz.dh, e1.di = dz.di, cq[v].df = dH), b6.bJ = !0)
		}
	}

	function dg(dn, dp) {
		for (var l = cq.length - 1; 0 <= l; l--)
			if (null !== cq[l].df && cq[l].dn === dn && cq[l].dp === dp) return cq[l].df;
		return null
	}
	this.k = function() {
		var l;
		for (d2 = 0, ct = -1, aW.setState(7), cq = [], this.resize(), co = new Array(13), l = co.length; 0 <= l; l--) co[l] = document.createElement("canvas"), co[l].width = cp, co[l].height = cp;
		for (l = 0; l < 7; l++) ! function(dI) {
			var dK, dF = co[dI - 2].getContext("2d", {
					alpha: !0
				}),
				dJ = 1.5 * Math.PI,
				a2 = Math.floor(.5 * cp),
				aI = Math.floor(.48 * cp);
			dF.lineWidth = 2, dF.strokeStyle = ac.c7, dF.clearRect(0, 0, cp, cp);
			for (var l = 0; l < dI; l++) dK = dJ + 2 * Math.PI / dI,
				function(l, a2, aI, dJ, dK, dF) {
					dF.fillStyle = dO.dP[l], dF.beginPath(), dF.arc(a2, a2, aI, dJ, dK), dF.lineTo(a2, a2), dF.fill()
				}(l + 1, a2, aI, dJ, dK, dF), 0 !== l && dM(a2, aI, dJ, dF), dJ = dK;
			dM(a2, aI, 1.5 * Math.PI, dF),
				function(a2, aI, dF) {
					dF.beginPath(), dF.arc(a2, a2, aI, 0, 2 * Math.PI), dF.stroke()
				}(a2, aI, dF)
		}(l + 2);
		d6(7, d7.get(4)), d8(8, d9.b.dA + d9.b.dB), d8(9, d9.b.dA + d9.b.dC), d8(10, 1024 - d9.b.dD), d6(11, d7.get(19)), d6(12, d7.get(20)), b6.bJ = !0
	}, this.d4 = function() {
		this.b1(), ak.al.az(3240), aW.setState(0), aO.aQ(5, 5)
	}, this.b1 = function() {
		cq = [], co = []
	}, this.dR = function() {
		return cv
	}, this.resize = function() {
		var dS, dT, dU, dV;
		for (ck = [0, 0], cr = [0, 0, 0, 0], d1 = ae.af.dW() ? (cu = Math.floor(.8 * .4 * b9.dX), cv = Math.floor(.56 * cu), cr[0] = dY.gap, b9.dZ < b9.da ? (cr[1] = cv + 2 * dY.gap, cr[2] = b9.dZ - 3 * cr[0], cr[3] = b9.da - 3 * dY.gap - cv,
				cz = Math.floor(.95 * cv), d0 = Math.floor((b9.dZ - cu - dY.gap) / 2), Math.floor(dY.gap + cv / 2)) : (cr[1] = dY.gap, cr[2] = b9.dZ - 3 * dY.gap - cu, cr[3] = b9.da - 2 * dY.gap, cz = Math.floor(.8 * cu), cr[3] - cv < cu && (
				cz = Math.floor(.8 * (cr[3] - cv)), cz = db(cv, cz)), d0 = Math.floor(b9.dZ - cu / 2 - dY.gap), db(d1 = Math.floor(dY.gap + cv + (cr[3] - cv) / 2), Math.floor(cv + 2 * dY.gap + cz / 2)))) : (cu = Math.floor(.2016 * b9.dX), cv =
				Math.floor(.56 * cu), cr[2] = Math.floor(.5 * b9.dZ), cr[3] = Math.floor(.5 * b9.da), cr[1] = Math.floor(.45 * (b9.da - cr[3])), cr[0] = Math.floor((b9.dZ - cr[2]) / 2), cz = Math.floor(.75 * cv), d0 = Math.floor(b9.dZ / 2), Math
				.floor(cr[1] + cr[3] + (b9.da - cr[3] - cr[1]) / 2)), cy = n.o.dc(1, .65 * cv / 4), dS = dT = 1; dS * dT < cq.length;) cr[3] / (dT + 1) < cr[2] / (dS + 1) ? dS++ : dT++;
		dU = (cr[2] - (dS - 1) * dY.gap) / dS, dV = (cr[3] - (dT - 1) * dY.gap) / dT, ci = dU < dV ? dU : dV, cj = Math.floor(ci), cn = n.o.dc(1, .5 * ci / 5), ck[0] = dS, ck[1] = dT, cl = cr[0] + Math.floor((cr[2] - ck[0] * ci - (ck[0] - 1) * dY
			.gap) / 2), cm = cr[1] + Math.floor((cr[3] - ck[1] * ci - (ck[1] - 1) * dY.gap) / 2)
	}, this.dd = function(de, a6) {
		var l, bo, df, m = cq.length;
		for (cx = de, l = 0; l < a6.length; l++) df = dg(a6[l].dh, a6[l].di), cq.push({
			dj: a6[l].id,
			dk: a6[l].dk,
			dl: a6[l].dm,
			dn: a6[l].dh,
			dp: a6[l].di,
			joined: a6[l].dq,
			dr: a6[l].ds,
			dt: a6[l].dt,
			df: df,
			du: a6[l].du,
			dv: a6[l].dv,
			dw: a6[l].dw
		});
		for (l = m - 1; 0 <= l; l--) cq.shift();
		if (-1 !== ct)
			for (bo = ct, ct = -1, l = cq.length - 1; 0 <= l; l--)
				if (cq[l].dj === bo) {
					ct = bo;
					break
				}(cq.length > d2 || cq.length < d2) && (d2 = cq.length, this.resize()), this.dx(), b6.bJ = !0
	}, this.dx = function() {
		for (var l = cq.length - 1; 0 <= l; l--) null === cq[l].df && setTimeout(dy, 0)
	}, this.eA = function(eB, eC) {
		return 4 * ((eB - d0) * (eB - d0) + (eC - d1) * (eC - d1)) <= cz * cz ? (this.d4(), eD.eE(eB, eC, !1), !0) : function(eB, eC) {
			var v, a8, eG, eH;
			if (0 !== cq.length) {
				var l = 0;
				for (eH = cm, a8 = 0; a8 < ck[1]; a8++) {
					for (eG = cl, v = 0; v < ck[0]; v++) {
						if (eG < eB && eB < eG + ci && eH < eC && eC < eH + ci) return ak.eI.eJ(cq[l].dj), ct = cq[l].dj !== ct ? cq[l].dj : -1, b6.bJ = !0;
						if (++l >= cq.length) return !1;
						eG += ci + dY.gap
					}
					eH += ci + dY.gap
				}
			}
			return !1
		}(eB, eC)
	}, this.eK = function() {
		var v, a8, eB, aI, zoom, l = 0,
			eC = cm;
		if (eL.imageSmoothingEnabled = !0, eL.lineWidth = 3, aI = Math.floor(.5 * cz), eL.fillStyle = ac.eP, eL.beginPath(), eL.arc(d0, d1, aI, 0, 2 * Math.PI), eL.fill(), eL.strokeStyle = ac.c7, eL.beginPath(), eL.arc(d0, d1, aI, 0, 2 * Math
			.PI), eL.stroke(), aI = d7.get(0).height, zoom = .6 * cz / aI, eL.setTransform(zoom, 0, 0, zoom, Math.floor(d0 - .56 * zoom * d7.get(0).width), Math.floor(d1 - .5 * zoom * aI)), eL.drawImage(d7.get(0), 0, 0), eL.setTransform(1, 0, 0,
				1, 0, 0),
			function() {
				eL.fillStyle = ac.eP, eL.fillRect(b9.dZ - cu - dY.gap, dY.gap, cu, cv), 0 <= ct ? (eL.fillStyle = ac.eQ, eL.fillRect(b9.dZ - cu - dY.gap, dY.gap, cu, Math.floor(.25 * cv))) : (eL.fillStyle = ac.eR, eL.fillRect(b9.dZ - cu - dY.gap,
					dY.gap + Math.floor(.25 * cv), cu, Math.floor(.25 * cv)));
				eL.strokeStyle = ac.c7, eL.strokeRect(b9.dZ - cu - dY.gap, dY.gap, cu, cv), eL.fillStyle = ac.c7, eL.font = cy, n.o.textBaseline(eL, 1);
				for (var eC, eS = Math.floor(.04 * cu), eT = Math.floor(.08 * cv), l = 3; 0 <= l; l--) eC = Math.floor(dY.gap + (l + 1) * (cv + 2 * eT) / 5 - eT), n.o.textAlign(eL, 0), eL.fillText(cw[l], b9.dZ - cu - dY.gap + eS, eC), n.o
					.textAlign(eL, 2), eL.fillText(n.eU.eV(cx[l]), b9.dZ - dY.gap - eS, eC)
			}(), 0 !== cq.length)
			for (a8 = 0; a8 < ck[1]; a8++) {
				for (eB = cl, v = 0; v < ck[0]; v++) {
					if (! function(l, eB, eC) {
							var zoom, a8, eW, eY, ea;
							null === cq[l].df ? (eL.fillStyle = ac.eP, eL.fillRect(eB, eC, cj, cj)) : (zoom = cj / 128, eL.setTransform(zoom, 0, 0, zoom, eB, eC), eL.drawImage(cq[l].df, 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0));
							ct === cq[l].dj ? (function(eB, eC) {
								var en = Math.floor(.2 * cj),
									eo = Math.floor(.3 * en);
								eL.fillStyle = ac.ec, eL.fillRect(eB + cj - en, eC, en, en), eL.fillStyle = ac.ep, eL.fillRect(eB + cj - en, eC, 2, en), eL.fillRect(eB + cj - en, eC + en - 2, en, 2), bD.eb(eB + cj - en + eo, eC + eo, en -
									2 * eo), eL.setTransform(1, 0, 0, 1, 0, 0)
							}(eB, eC), eL.lineWidth = 3, eL.fillStyle = ac.ec) : eL.fillStyle = ac.ed;
							eY = Math.floor(ci / 4), eL.fillRect(eB, eC, eY, eY), ea = Math.floor(eC + .8 * ci), eL.fillRect(eB, ea, cj, Math.floor(ci / 5)),
								function(l, eB, eC) {
									var zoom;
									cq[l].dl && (l = d7.get(4), zoom = .5 * ci / l.width, eL.setTransform(zoom, 0, 0, zoom, Math.floor(eB + (ci - zoom * l.width) / 2), Math.floor(eC + (ci - zoom * l.height) / 2)), eL.globalAlpha = .6, eL
										.drawImage(l, 0, 0), eL.globalAlpha = 1, eL.setTransform(1, 0, 0, 1, 0, 0))
								}(l, eB, eC);
							var ef = new Array(cq[l].du);
							if (cq[l].du) {
								for (a8 = eW = 0; a8 < cq[l].du; a8++) cq[l].dv[a8] = n.eg.eh(cq[l].dv[a8], cn, .4 * ci), ef[a8] = ("" === cq[l].dv[a8] ? "other: " : "[" + cq[l].dv[a8] + "]: ") + cq[l].dw[a8];
								for (a8 = 0; a8 < cq[l].du; a8++) eW = Math.max(eW, ei.measureText(ef[a8], cn));
								eW += .05 * ci, a8 = 5 === cq[l].du, eY = a8 ? eC + eY : Math.max(eC + .8 * ci - .11 * cq[l].du * ci, eC + eY), ea = a8 ? ea : Math.min(eY + .11 * cq[l].du * ci + .05 * ci, ea), eL.fillRect(eB, eY, eW, ea - eY)
							}
							for (eL.font = cn, n.o.textBaseline(eL, 1), n.o.textAlign(eL, 0), eL.fillStyle = ac.ej, eL.fillText(cq[l].joined.toString(), Math.floor(eB + .22 * ci), Math.floor(eC + .9 * ci)), eL.fillStyle = ac.c7, a8 = 0; a8 < cq[
									l].du; a8++) eL.fillText(ef[cq[l].du - a8 - 1], Math.floor(eB + .03 * ci), Math.floor(eC + .77 * ci - .11 * a8 * ci));
							n.o.textAlign(eL, 2), eL.fillStyle = ac.ek, eL.fillText(cq[l].dr.toString(), Math.floor(eB + .81 * ci), Math.floor(eC + .9 * ci)), eL.strokeStyle = ct === cq[l].dj ? ac.el : ac.em, eL.strokeRect(eB, eC, cj, cj), ea =
								Math.floor(.16 * ci), zoom = ea / cp, eL.setTransform(zoom, 0, 0, zoom, Math.floor(eB + .33 * ea), Math.floor(eC + .33 * ea)), co.length > cq[l].dk && eL.drawImage(co[cq[l].dk], 0, 0);
							eL.setTransform(zoom, 0, 0, zoom, Math.floor(eB + .15 * ea), Math.floor(eC + ci - 1.08 * ea)), eL.drawImage(co[11], 0, 0), eL.setTransform(zoom, 0, 0, zoom, Math.floor(eB + ci - 1.05 * ea), Math.floor(eC + ci - 1.15 *
								ea)), eL.drawImage(co[12], 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0)
						}(l, Math.floor(eB), Math.floor(eC)), ++l >= cq.length) return;
					eB += ci + dY.gap
				}
				eC += ci + dY.gap
			}
	}
}

function er() {
	this.es = 0, this.cE = null, this.k = function() {
		this.es = 0, this.cE = []
	}, this.et = function(player) {
		this.cE.push(player), ao.eu++, bU.ev[player] = 2, bU.bx[player] = bf.bg.ew(), player === ao.bW && (ex.show(!1, !1), ey.ez()), cf.f0(player)
	}, this.f1 = function(player) {
		var l, cE;
		if (2 !== bU.ev[player])
			for (l = (cE = this.cE).length - 1; 0 <= l; l--)
				if (cE[l] === player) return void cE.splice(l, 1)
	}, this.b8 = function() {
		ao.ap || (30 === this.es && 2140 <= b6.f2() && this.f3(), this.es = (this.es + 1) % 60)
	}, this.f3 = function() {
		for (var cE = this.cE, l = cE.length - 1; 0 <= l; l--) ! function(player, f4) {
			!f6.f7(player) || (f4 = Math.max(Math.min(100, bU.f8[player]), aF(f4 * bU.f8[player], 100))) < 100 || (0 === bU.f9[player].length ? !fA.fB.b8(player) && ao.fC && fD(player, f4, 0, 0) : (ao.fC ? fE : fF)(player, f4))
		}(cE[l], 12)
	}
}

function fG() {
	var fH, fI, fK, fR, fJ = !1;

	function fL(id) {
		0 !== ae.id || by.bz.data[140].value ? 0 === id ? aO.aQ(8, 1, new fh(16)) : aO.aQ(2) : aO.al.fg(aO.aP, 0 === id ? 16 : 0)
	}
	this.show = function() {
		ae.af.setState(12), fH.show(), this.resize(), this.b8()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), fI.resize()
	}, this.b8 = function() {
		!fJ || bD.fY(ao.bW) || (aO.fT(), aO.aQ(1))
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fK = [new aa("🔑 " + aS.aZ[125], function() {
		fL(0)
	}), new aa("⚙️ " + aS.aZ[81], function() {
		fL(1)
	}), new aa("▶️ " + aS.aZ[82], function() {
		aO.aQ(3, 1, "")
	}), new aa("📈 Charts", function() {
		aO.al.fM()
	}), new aa("🔗 " + aS.aZ[83], function() {
		aO.aQ(4, 1, new aR("🔗 " + aS.aZ[83], n.o.fi(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [fj.fk, fj.fl, fj.fm, fj.fn, fj.fo, fj.fp, fj.fq, fj.fr, fj.fs,
			fj.ft
		]), !1, [new aa("❌ " + aS.aZ[92], function() {
			aO.aQ(1)
		}, ac.ad)]))
	}), new aa("ℹ️ " + aS.aZ[84], function() {
		aO.aQ(4, 1, new aR("ℹ️ " + aS.aZ[84], fu + "<br><a href='" + fj.fn + "' target='_blank'>" + fj.fn + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(1)
			}, ac.ad)]))
	}), new aa("🗑️ " + aS.aZ[85], function() {
		aO.aQ(4, 1, new aR("🗑️ " + aS.aZ[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(1)
			}), new aa("🗑️ Delete", function() {
				ae.af.fv(), aO.aQ(1)
			})]))
	}), new aa(aS.aZ[86], function() {
		ae.af.fQ(), aO.aQ(4, 1, new aR("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + fj.ft + "' target='_blank'>" + fj.ft + "</a>",
			!1, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(1)
			}, ac.ad)]))
	})], fR = [new aa("❌ " + aS.aZ[87], function() {
		aO.al.fS()
	})], 8 === aW.aX() && fK.unshift(new aa("📈 " + aS.aZ[88], function() {
		aO.fT(), 2 <= cd.fU && (fV.fW(), b6.bJ = !0)
	})), 8 === aW.aX() && !ao.fX && bD.fY(ao.bW) && (fJ = !0, fK.unshift(new aa("🏳️ " + aS.aZ[89], function() {
		bq.fZ.fa(), aO.fT(), bD.bE && bD.fW()
	}))), 1 === ae.id && 5 <= ae.fb && fK.push(new aa(aS.aZ[90], function() {
		ae.af.fc()
	})), fH = new fd("📙 " + aS.aZ[91], fR), fI = new fe(fK, fH.ff)
}

function g0() {
	var g1, df, g2, g3;

	function gA(b4, name, gB, x) {
		g2[b4] = name, df[b4] = new Image, df[b4].onload = function() {
			! function(b4, gB) {
				var gF, gE = null;
				7 === gB ? gF = n.gG.gH : 8 === gB ? (gF = n.gG.gI, gE = .1) : 3 === gB ? (gF = n.gG.gJ, gE = .06) : 5 === gB ? gF = n.gG.gK : 6 === gB ? gF = n.gG.gL : 4 === gB && (gF = n.gG.gM);
				df[b4] = n.gG.gN(df[b4], gF, gE)
			}(b4, gB), gD()
		}, df[b4].onerror = function(i) {
			console.error("Error loading image at index", b4, "Error:", i), gD()
		}, df[b4].src = "data:image/png;base64," + x
	}

	function gD() {
		g1--, g8()
	}

	function g8() {
		0 === g1 && (g1 = -1, gO.gP(), gQ.gR([df[8], df[16], df[7], df[9], df[10]], [2 !== ae.id, 1 !== ae.id, !0, !0, !0]), d9.d.k(), gS.gT(), b6.bJ = !0, df[7] = g3, df[8] = g3, df[9] = g3, df[10] = g3, 5 === aO.aP) && aO.gV().gW.resize()
	}
	this.k = function() {
		if (void 0 === df) {
			g1 = 23, df = new Array(g1), g2 = new Array(g1), (g3 = document.createElement("canvas")).width = 1, g3.height = 1;
			for (var l = g1 - 1; 0 <= l; l--) df[l] = g3;
			gA(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), gA(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), gA(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(3, "orders", 6,
					"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"
					), gA(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), gA(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), gA(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), gA(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(8,
					"googleplay", 3,
					"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"
					), gA(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(10, "insta", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), gA(14, "bestPlayer", 5,
					"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"
					), gA(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), gA(16, "apple", 3,
					"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"
					), gA(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), gA(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), gA(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), gA(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), gA(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), gA(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(b4) {
		return df[b4]
	}, this.g5 = function(name) {
		for (var l = g2.length - 1; 0 <= l; l--)
			if (g2[l] === name) return df[l];
		return g3
	}, this.g6 = function() {
		return g1 <= 0
	}, this.g7 = function() {
		g1 = 0, g8()
	}
}

function gX() {
	this.eh = function(x, font, maxWidth) {
		if (eL.font = font, eL.measureText(x).width <= maxWidth) return x;
		for (var l = x.length - 1; 1 <= l; l--)
			if (x = x.substring(0, l), eL.measureText(x + "...").width <= maxWidth) return x + "...";
		return "..."
	}
}

function cN() {
	function gd(aC, gf, min, max) {
		return min + (aC * gf + 137) % (max - min)
	}
	this.b8 = function(gY, gZ) {
		for (var gb = 1, l = 0; l <= 10; l++) gb = function(gb, gY, gZ, ge) {
			for (var m = 65536 + (gb * ge + 7 & 16383), l = 0; l < m; l++) gb = 1 + gb * gY % gZ;
			return gb
		}(gb, gY, gZ, l), gY = gd(gY, gb, 16384, 65536), gZ = gd(gZ, gb, 1 << 18, 1 << 20);
		return gb - 1 & 65535
	}
}

function gg() {
	var gl, gn;
	this.gh = 5, this.gi = this.gh - 1, this.gj = this.gh + this.gi, this.gk = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.gm = null;

	function h3(l) {
		return gn[l].gt && gl[l].h3()
	}

	function h5(aN) {
		gn[aN].b5 = b6.b5, gn[aN].gu = !1
	}
	this.an = 0, this.am = 0, this.k = function() {
		this.gm = new Array(this.gh);
		this.gm[0] = "territorial.io";
		var l, gf = aK.gq(0);
		for (aK.gr(0), l = 1; l < this.gh; l++) this.gm[l] = gs.aH() + ".territorial.io";
		for (aK.gr(gf), gl = new Array(this.gj), gn = new Array(this.gj), l = this.gj - 1; 0 <= l; l--) gn[l] = {
			gt: !1,
			b5: 0,
			gu: !1
		};
		this.gv(0, 0)
	}, this.gw = function(l) {
		return gl[l]
	}, this.gx = function() {
		return this.am < this.gh ? this.am : this.am - this.gi
	}, this.b8 = function() {
		for (var l = this.gj - 1; 0 <= l; l--) this.gy(l) && b6.b5 > gn[l].b5 + 15e3 && ak.gz.h0(l, gn[l].gu);
		!this.gy(0) && b6.b5 > gn[0].b5 + 8e3 && (gn[0].b5 = b6.b5, this.gv(0, 0))
	}, this.gv = function(aN, h1) {
		if (gn[aN].gt) {
			if (gl[aN].h3()) return gl[aN].h4(h1), gl[aN].gy();
			gl[aN].fw()
		}
		return this.h2(aN, h1), !1
	}, this.h2 = function(aN, h1) {
		gn[aN].gt = !0, h5(aN), gl[aN] = new h6, gl[aN].k(aN, h1)
	}, this.h4 = function(aN, h1) {
		h3(aN) && gl[aN].h4(h1)
	}, this.h7 = function(aN, h1) {
		ak.h8.h9(aN)
	}, this.gy = function(l) {
		return gn[l].gt && gl[l].gy()
	}, this.send = function(aN, hA) {
		h5(aN), gl[aN].send(hA)
	}, this.hB = function(aN) {
		8 === aW.aX() && (gn[aN].gu = !0, ak.hC.hD = !0)
	}, this.close = function(aN, hE) {
		h3(aN) && gl[aN].close(hE)
	}, this.hF = function(aN, hE) {
		hG.av(hE), h3(aN) && gl[aN].close(hE)
	}, this.az = function(hE) {
		for (var l = this.gj - 1; 0 <= l; l--) this.close(l, hE)
	}, this.hH = function(aN, hE) {
		for (var l = this.gj - 1; 0 <= l; l--) l !== aN && this.close(l, hE)
	}, this.hI = function() {
		this.close(this.an, 3246)
	}, this.hJ = function(aN, i) {
		gl[aN].fw(), hG.aM(aN, i.code)
	}
}

function hK() {
	this.size = 0, this.b4 = 0, this.hA = null, this.k = function(hA) {
		this.b4 = 0, this.hA = hA, this.size = hA.length
	}, this.e7 = function(hL) {
		return this.k(new Uint8Array(this.hM(hL))), this.hA
	}, this.b1 = function() {
		this.hA = null
	}, this.hN = function(size, hO) {
		for (var hA = this.hA, hP = this.b4 + size - 1, l = this.b4; l <= hP; l++) hA[l >> 3] |= (hO >> hP - l & 1) << 7 - (7 & l);
		this.b4 += size, this.b4 > 8 * this.size && console.log("error wrapper")
	}, this.hQ = function(size, hO) {
		var a8 = size >> 1,
			hR = 1 << a8;
		this.hN(size - a8, hS.hT(hO, hR)), this.hN(a8, hO % hR)
	}, this.hU = function(size) {
		for (var hA = this.hA, hP = this.b4 + size, l = this.b4; l < hP; l++) hA[l >> 3] &= 255 ^ 128 >>> (7 & l)
	}, this.hM = function(hL) {
		return hL + 7 >> 3
	}, this.hV = function(a5, hW, hP, hX) {
		for (var l = hW; l < hP; l++) this.hN(hX, a5[l])
	}
}

function e() {
	this.hY = !1;
	this.hd = [], this.he = 100;
	var eG, eH, gap, hZ, ha, hc, hg = 0,
		hh = new Array(9),
		hi = [],
		hj = [],
		hk = 0,
		hl = 0,
		hm = 0,
		hn = 0;

	function i0() {
		hh.sort(function(v, a8) {
			return a8.hx - v.hx
		});
		for (var x = "" + hh[0].dE, l = 1; l < 9; l++) x += "," + hh[l].dE;
		for (l = 0; l < 9; l++) x += "," + hh[l].hx;
		by.bz.i1(120, x)
	}
	this.k = function() {
		for (var ho = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], l = 0; l < ho.length; l++) {
			var color = 6 === ho[l] ? ac.hp : ac.hq;
			this.hd.push(n.df.hr(d7.get(3), ho[l], color))
		}
		for (l = 0; l < d9.b.dD; l++) hj.push(d9.b.hs - d9.b.dD + l);
		for (l = 0; l < d9.b.ht; l++) hj.push(d9.b.dA + l);
		var hu = d9.b.hv(fj.hu);
		for (l = 0; l < hu.length; l++) hj.push(hu[l]);
		! function() {
			var l, a5 = by.bz.data[120].value.split(",");
			if (18 !== a5.length)
				for (l = 0; l < 9; l++) hh[l] = {
					dE: 1015 + l,
					hx: 0
				};
			else
				for (l = 0; l < 9; l++) {
					var aC = parseInt(a5[l]),
						a2 = (aC = 0 <= aC && aC < d9.b.hs ? aC : 0, parseInt(a5[l + 9]));
					a2 = 0 <= a2 && a2 < 1e3 ? a2 : 0, hh[l] = {
						dE: aC,
						hx: a2
					}
				}
		}()
	}, this.show = function(i2, i3, i4) {
		var l;
		if (hk = i2, hl = i3, hg = i4 || 0, this.hY = !0, hi = [], 0 === hg)
			for (l = 0; l < 9; l++) hi.push(hh[l].dE);
		else {
			var a8 = 49 * hg,
				i4 = a8 - 49;
			for (i4 >= hj.length && (hg = 1, i4 = 0, a8 = 49), l = i4 = (a8 = Math.min(a8, hj.length)) - 49; l < a8; l++) hi.push(hj[l])
		}
		hi.push(1024);
		i4 = hi.length, hZ = Math.floor((ae.af.dW() ? .075 : .0468) * b9.dX), gap = Math.floor(hZ / 3), (hm = 10 * (ha = hZ + gap)) > b9.dZ && (hm = b9.dZ, gap = (ha = hm / 10) - (hZ = 3 * ha / 4)), hc = hS.hT(i4, 10) + !!(i4 % 10), (hn = hc *
			ha) > b9.da && (hn = b9.da, gap = (ha = hn / hc) - (hZ = 3 * ha / 4)), this.he, i4 = .5 * gap;
		eG = Math.min(Math.max(i2 - .5 * hm + i4, i4), b9.dZ - hm + i4), eH = Math.min(Math.max(i3 - .5 * hn + i4, i4), b9.da - hn + i4)
	}, this.eA = function(i2, i3, player) {
		if (!this.hY) return !1;
		if (this.i6(i2, i3)) {
			i2 = hS.i7(hS.hT(i2 - eG + .5 * gap, ha), 0, 9);
			if ((i2 += 10 * hS.i7(hS.hT(i3 - eH + .5 * gap, ha), 0, 9)) >= hi.length) return gO.fw(), !0;
			i3 = hi[i2];
			if (1024 === i3) return this.show(hk, hl, hg + 1), !0;
			! function(dE) {
				for (var l = 0; l < 9; l++) hh[l].hx = Math.floor(.99 * hh[l].hx);
				for (l = 0; l < 9; l++)
					if (dE === hh[l].dE) return hh[l].hx = Math.min(hh[l].hx + 30, 999), i0();
				hh.splice(5, 0, {
					dE: dE,
					hx: Math.max(hh[4].hx, 30)
				}), hh.pop(), i0()
			}(i3), player === ao.bW ? bq.fZ.i8(i3) : bq.br.i9(i3, player)
		}
		return gO.fw(), !0
	}, this.i6 = function(i2, i3) {
		return !(i2 < eG - .5 * gap || i3 < eH - .5 * gap || eG + hm - .5 * gap <= i2 || eH + hn - .5 * gap <= i3)
	}, this.eK = function() {
		eL.fillStyle = ac.c8, eL.fillRect(eG - .5 * gap, eH - .5 * gap, hm, hn);
		for (var cK = .5 * dY.iA, m = (eL.lineWidth = dY.iA, eL.strokeStyle = eL.fillStyle = ac.c7, eL.strokeRect(eG - .5 * gap + cK, eH - .5 * gap + cK, hm - 2 * cK, hn - 2 * cK), eL.imageSmoothingEnabled = !0, hi.length), l = 0; l < m; l++)
			this.dG(hi[l], eL, eG + l % 10 * ha, eH + hS.hT(l, 10) * ha, hZ);
		eL.imageSmoothingEnabled = !1
	}, this.dG = function(dE, dF, eB, eC, hZ) {
		var ge;
		dE >= 1024 - d9.b.dD ? (ge = hZ / this.he, dF.setTransform(ge, 0, 0, ge, eB, eC), dF.drawImage(this.hd[dE - 1024 + d9.b.dD], 0, 0), dF.setTransform(1, 0, 0, 1, 0, 0)) : (n.o.textAlign(dF, 1), n.o.textBaseline(dF, 1), dF.font = n.o.dc(0,
			.89 * hZ), dF.fillText(d9.b.iB(dE), eB + .5 * hZ, eC + (.35 - n.o.iC + .56) * hZ))
	}
}

function iD(iE, type, iF) {
	var i;
	this.i = document.createElement("input"), (i = this.i).type = type ? "number" : "text", i.id = "input" + iE.title, i.value = iE.value, i.style.width = "100%", i.style.userSelect = "none", i.style.outline = "none", i.style.resize = "none", i.style
		.border = "inherit", i.style.font = "inherit", i.style.color = ac.c7, i.style.backgroundColor = ac.ed, i.style.fontSize = "1em", i.style.padding = "0.1em 0.2em", -1 !== iE.b4 && (i.addEventListener("focus", function() {
			b9.iG++
		}), i.addEventListener("blur", function() {
			b9.iG--, by.iH.dd(iE.b4, i.value)
		}), i.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), by.iH.dd(iE.b4, i.value), iF ? iF() : i.blur())
		}))
}

function iI() {
	function iQ(l) {
		return void 0 !== e1.iM.iO[l].ie
	}

	function iP(l) {
		return 1 !== l && !iQ(l) && l !== e1.ia()
	}
	this.iJ = 21, this.e0 = 0, this.e2 = 0, this.e3 = null, this.e4 = null, this.e5 = null, this.e6 = null, this.dh = 0, this.di = 0, this.iK = !1, this.e8 = new iL, this.iM = new iN, this.k = function() {
		this.iM.k()
	}, this.e7 = function(map, dp) {
		((map %= this.iJ) !== this.dh || iP(this.dh) && dp !== this.di) && (this.iK = !1, this.e8.e9(), aK.gr(map), this.dh = map, this.di = dp, iP(map) && (e1.iM.iO[map].gf = dp), iQ(this.dh) ? iR() : (map = e1.iM.iO[this.dh], this.e0 = map.dZ,
			this.e2 = map.da, aK.gr(map.gf), iS.e7([this.e0, this.e2, map.iT, map.iU]), iV(), iW.iX(), iS.iY()))
	}, this.iZ = function(l) {
		return 3 === l || 7 === l || 9 === l || l === this.ia()
	}, this.ib = function(l) {
		return 2 === l || 7 === l || 9 === l
	}, this.ic = function(l) {
		return 1 === l
	}, this.ia = function() {
		return this.iJ
	}
}

function ig() {
	var eG, eH, ih, eZ, ii = 0,
		ij = 0;

	function iq() {
		return Math.pow(Math.pow(ih - eG, 2) + Math.pow(eZ - eH, 2), .5)
	}

	function il(i) {
		eG = b9.iy * i.touches[0].clientX, eH = b9.iy * i.touches[0].clientY, ih = b9.iy * i.touches[1].clientX, eZ = b9.iy * i.touches[1].clientY
	}
	this.ik = function(i) {
		return 1 < i.touches.length ? (ij = b6.b5, ii = 3, il(i), gO.fw(), !0) : (ii = 0, !1)
	}, this.im = function(i) {
		var ip, is, it;
		return 0 !== ao.aq && 1 < i.touches.length && (ii = Math.max(ii - 1, 0), io.hP() && (ip = iq(), il(i), i = iq(), is = Math.floor((eG + ih) / 2), it = Math.floor((eH + eZ) / 2), iu.iv(is, it, Math.max(.125, i) / Math.max(.125, ip)), b6
			.bJ = !0), !0)
	}, this.iw = function() {
		var eB, eC;
		return !!(ii && (ii = 0, b6.b5 < ij + 500)) && (eB = (eG + ih) / 2, eC = (eH + eZ) / 2, gO.ix(eB, eC), gO.click(eB, eC, !0) && (b6.bJ = !0), !0)
	}
}

function iz() {
	var a2, j0 = !1,
		j1 = !1,
		j2 = -1e4,
		j3 = -1,
		j4 = 0;

	function resize(jF) {
		a2 = 0, d7.g6() && (j8(jF) || j0) && (j0 = !1, dY.resize(), eD.k(), gQ.k(), ai.resize(), jG.resize(), jH.resize(), aO.resize(), 1 <= ao.aq ? (jI.resize(!1), jJ.resize(), ey.resize(), iu.resize(), jK.resize(), ar.resize(), bD.resize(), jL
			.resize(), gS.resize(), jM.resize(), ei.resize(), gO.resize(), fV.resize(), cf.resize(), ex.resize(), bj.resize(), iu.jN()) : (2 === aW.aX() && jO.resize(), aW.jP(), aW.jQ()), b6.bJ = !0)
	}

	function j6(aC) {
		return aC && 128 < aC ? Math.floor(aC) : 128
	}

	function j8(jF) {
		var dZ, da, jS, en, jU;
		if (!(0 < b9.iG)) return en = j6(document.documentElement.clientWidth), jU = j6(window.visualViewport && 2 !== ae.id ? window.visualViewport.height : document.documentElement.clientHeight), dZ = en, da = jU, jS = 0 !== ae.id || dZ < da ?
			700 : 1200, jS = Math.min(jS / ((dZ + da) / 2), 1), jS = 0 === by.bz.data[1].value ? 2 * jS / 3 : Math.min(jS + (by.bz.data[1].value - 1) * (1 - jS) / 2, 1), b9.iy = (window.devicePixelRatio || 1) * jS, hoveringTooltip
			.canvasPixelScale = b9.iy, jF && !j1 ? (j1 = !0, document.body.removeChild(j9)) : j1 && (j1 = !1, document.body.appendChild(j9)), dZ = Math.floor(.5 + en * b9.iy), da = Math.floor(.5 + jU * b9.iy), dZ !== b9.dZ || da !== b9.da ? (b9
				.dZ = dZ, b9.da = da, b9.min = jW(dZ, da), b9.max = db(dZ, da), b9.dX = aF(dZ + da, 2), b9.j5 = dZ / da, j9.width = dZ, j9.height = da, j9.style.width = en + "px", j9.style.height = jU + "px", j3 = b6.b5 + 1e3, 1) : void 0
	}
	this.dZ = 0, this.da = 0, this.min = 0, this.max = 0, this.dX = 0, this.j5 = 1, this.iy = 1, this.iG = 0, this.gT = function() {
		this.dZ = j6(document.documentElement.clientWidth) + 2, this.da = j6(document.documentElement.clientHeight) + 2
	}, this.k = function() {
		a2 = 1, j9 = document.getElementById("canvasA"), (eL = j9.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, j8(0)
	}, this.b8 = function() {
		jA.b8(), 50 <= ++a2 && resize(0), -1 === j3 || b6.b5 < j3 || (j3 = -1, 2e3 * ++j4 >= b6.b5 + 8e3 ? console.log("error 3748") : ae.af.setState(15))
	}, this.jC = function(jD) {
		j0 = !0, resize(jD)
	}, this.jE = function() {
		j2 + 1e3 > b6.b5 || (j2 = b6.b5, resize(0))
	}
}

function jX() {
	this.bb = function() {}
}

function jY() {
	function jc(a5, aC, cK) {
		for (var l = 0; l < 256; l++) a5[l] = (a5[l] + (aC >> (l + cK) % 30 & 1)) % 256
	}
	this.b8 = function(jZ, ja) {
		var a5 = new Uint8Array(256);
		return function(a5, jZ, ja) {
				var l, gb = 3 + (4 + jZ) % 32768,
					gY = 12 + ja % 32768,
					gZ = 17 + ((jZ & ja) + (jZ | ja) + jZ) % 32768;
				for (l = 0; l < 256; l++) gb = 1 + gb * gY % gZ, a5[l] = gb % 256
			}(a5, jZ, ja), jc(a5, jZ, 2), jc(a5, ja, 7),
			function(a5) {
				var l, aC, b4 = 0;
				for (l = 0; l < 3e4; l++) aC = a5[b4], a5[b4] = (aC + l + a5[(b4 + l) % 256]) % 256, b4 = (aC + l + b4 + (aC & b4)) % 256
			}(a5),
			function(a5) {
				var l, jU = 1,
					jV = 1;
				for (l = 0; l < 256; l += 2) jU = (1 + jU) * (a5[l] + 1) % 1073741824, jV = (1 + jV) * (a5[l + 1] + 1) % 1073741824;
				return [jU, jV]
			}(a5)
	}
}

function jf() {
	var fH, jg, cq;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), jg.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("🔑 " + aS.aZ[125], [new aa("💾 " + aS.aZ[97], function() {
		aO.ab()
	}, ac.ah)]), jg = new jh(fH.ff, ((cq = []).push(function() {
		var jq = new jr;
		return jq.js("🧈 Gold"), jq.kC("Balance: " + n.eU.kD(by.bz.data[113].value, .01, 2)), jq.jz(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), jq
	}()), cq.push(function() {
		var jq = new jr;
		return jq.js("1v1 Rating"), jq.kC("Elo: " + n.eU.kD(by.bz.data[107].value, .1, 1) + "<br>Rank: " + (by.bz.data[108].value + 1) + " / " + by.bz.data[111].value + "<br>Played Games: " + by.bz.data[112].value), jq
	}()), cq.push(function() {
		var jq = new jr,
			jt = (jq.js("Account Name"), new iD(by.bz.data[105]));
		return jt.i.readOnly = !0, jq.ju(jt), jq.ju(new f([new aa("Copy", function() {
			n.o.jv(jt.i), n.o.jw(this)
		}).button])), jq
	}()), cq.push(function() {
		var jq = new jr,
			jx = (jq.js("Password"), new iD(by.bz.data[106]));
		return jx.i.readOnly = !0, jx.i.type = "password", jq.ju(jx), jq.ju(new f([new aa("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", jx.i.type = "text") : (this.innerText = "Show", jx.i.type = "password")
		}).button, new aa("Copy", function() {
			n.o.jv(jx.i), n.o.jw(this)
		}).button])), jq.ju(new f([new aa("Request New Password", function() {
			aO.aQ(8, aO.gV().h1, new fh(15))
		}).button])), jq
	}()), cq.push(function() {
		var jq = new jr;
		return jq.js("Account Options"), jq.ju(new f([new aa("Log in to a Different Account", function() {
			aO.aQ(6, aO.gV().h1)
		}).button])), jq.ju(new f([new aa("Create New Account", function() {
			by.iH.dd(105, ""), aO.aQ(8, aO.gV().h1, new fh(18))
		}).button])), jq.ju(new f([new aa("Delete Account: " + by.bz.data[105].value, function() {
			aO.aQ(4, 0, new aR("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(7, aO.jy(7).h1)
			}), new aa("🗑️ Delete Account", function() {
				aO.aQ(8, aO.jy(7).h1, new fh(17))
			}, ac.ad)]))
		}, ac.ad).button])), jq
	}()), cq.push(function() {
		function k3(b4) {
			for (var l = 0; l < 2; l++) k2[l].k4(0 === b4 ? ac.k5 : 0 === l ? ac.ad : ac.ah)
		}
		var k1, k2, jq = new jr;
		jq.js("Saved Accounts"), jq.jz("Listed accounts may have been removed in the meantime due to insufficient funds."), by.al.k0();
		return k2 = [new aa("🗑️ Remove From List", function() {
			var b4 = Math.min(by.bz.data[117].value, k1.k6.length - 1);
			if (!(b4 < 1)) {
				k1.k6[b4].remove(), k1.k6.splice(b4, 1);
				for (var l = b4; l < k1.k6.length; l++) k1.k6[l].name = "" + l;
				by.al.k7(b4), b4 = by.bz.data[117].value, k1.k6[b4].textContent = k1.k6[b4].textContent.replace("⚪", "🟢"), k3(b4)
			}
		}, ac.k5), new aa("➡️ Login", function() {
			var b4 = Math.min(by.bz.data[117].value, k1.k6.length - 1);
			b4 < 1 || (b4 = by.al.k8(b4), by.iH.dd(105, b4.k9), by.iH.dd(106, b4.password), aO.aQ(8, aO.gV().h1, new fh(18)))
		}, ac.k5)], (k1 = new kA(by.bz.data[117], k3)).k6[0].style.marginTop = "0.5em", jq.kB(k1), jq.ju(new f([k2[1].button])), jq.ju(new f([k2[0].button])), jq
	}()), function(cq) {
		var jq = new jr,
			kL = by.bz.data[137].value,
			kM = (jq.js("Primary Clan Stats"), jq.kC("Clan: " + (kL ? "[" + by.bz.data[135].value + "]" : "-")), jq.kC("Monthly Points: " + n.eU.kD(kL, .001, 3)), jq.kC("Rank: " + (by.bz.data[139].value + 1) + " / " + by.bz.data[111]
				.value), by.bz.data[141].value),
			kN = (jq.kC("Total Points: " + n.eU.kD(kM, .01, 2)), by.bz.data[143].value);
		jq.kC("Won Games: " + kN), jq.kC("Avg. Points per Game: " + n.eU.kD(kM / Math.max(kN, 1), .01, 3)), kL = by.bz.data[138].value, jq.js("Secondary Clan Stats", "0.8em"), jq.kC("Clan: " + (kL ? "[" + by.bz.data[136].value + "]" :
			"-")), jq.kC("Monthly Points: " + n.eU.kD(kL, .001, 3)), kM = by.bz.data[142].value, jq.kC("Total Points: " + n.eU.kD(kM, .01, 2)), kN = by.bz.data[144].value, jq.kC("Won Games: " + kN), jq.kC("Avg. Points per Game: " + n
			.eU.kD(kM / Math.max(kN, 1), .01, 3)), cq.push(jq)
	}(cq), cq))
}

function kO() {
	this.kQ = function(aN) {
		var l, cx, kR, kS, kT;
		if (aN !== ak.al.am) ak.al.close(aN, 3239);
		else if (6 === aW.aX() && b0.k(), 7 !== aW.aX()) ak.al.close(aN, 3251);
		else {
			for (cx = [0, 0, 0, 0], kR = kU.kV(6), l = 0; l < 4; l++) cx[l] = kU.kV(kR);
			for (kS = kU.kV(4), kT = [], l = 0; l < kS; l++) {
				kT.push({
					id: kU.kV(5),
					dk: kU.kV(4),
					dm: 1 === kU.kV(1),
					dh: kU.kV(6),
					di: kU.kV(14),
					dq: kU.kV(kR),
					dt: kU.kV(9) + 1,
					ds: kU.kV(10)
				});
				for (var du = kU.kV(3), dv = new Array(du), dw = new Array(du), v = 0; v < du; v++) dw[v] = kU.kV(9) + 1, dv[v] = kW.kX.kY(kU.kV(3));
				kT[l].du = du, kT[l].dv = dv, kT[l].dw = dw
			}
			b0.dd(cx, kT)
		}
	}
}
var kZ, c4, ka;

function kb() {
	var kc, kd, ke, kf, kg, kh, ki, kj, kk, kl, km, kn, ko, kp, kq, kr, ks, kt, ku, kv, kw, kx, position, ky, kz, l0, l1, l2 = 1,
		l3 = 1;
	var leaderboardHasChanged = true;
	this.playerPos = ao.bW;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => ka[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(ka[ao.bW]);
	}

	function l8() {
		ki.clearRect(0, 0, kc, kZ),
			ki.fillStyle = ac.lB,
			ki.fillRect(0, 0, kc, kn),
			ki.fillStyle = ac.lC,
			ki.fillRect(0, kn, kc, kZ - kn);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			ka[ao.bW]
		);
		if (leaderboardFilter.hoveringOverTabs) kx = -1;
		if (leaderboardFilter.enabled && kx >= leaderboardFilter.filteredLeaderboard.length) kx = -1;
		playerPos >= position && lD(playerPos - position, ac.lE),
			0 !== ka[ao.bW] && 0 === position && lD(0, ac.lF),
			-1 !== kx && lD(kx, ac.lG),
			ki.fillStyle = ac.lC,
			//console.log("drawing", kx),
			ki.clearRect(0, kZ - leaderboardFilter.tabBarOffset, kc, leaderboardFilter.tabBarOffset);
		ki.fillRect(0, kZ - leaderboardFilter.tabBarOffset, kc, leaderboardFilter.tabBarOffset);
		ki.fillStyle = ac.c7,
			ki.fillRect(0, kn, kc, 1),
			ki.fillRect(0, kZ - leaderboardFilter.tabBarOffset, kc, 1),
			leaderboardFilter.drawTabs(ki, kc, kZ - leaderboardFilter.tabBarOffset, ac.lE),
			ki.fillRect(0, 0, kc, dY.iA),
			ki.fillRect(0, 0, dY.iA, kZ),
			ki.fillRect(kc - dY.iA, 0, dY.iA, kZ),
			ki.fillRect(0, kZ - dY.iA, kc, dY.iA), ki.font = kd, n.o.textBaseline(ki, 1), n.o.textAlign(ki, 1), ki.fillText(aS.aZ[65], Math.floor((kc + kn - 22) / 2), Math.floor(kl + ke / 2));
		playerList.drawButton(ki, 12, 12, kn - 22);
		var v, bm = playerPos < position + kg - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - kg)
				position = (result.length > kg ? result.length : kg) - kg;
			//if (position >= result.length) position = result.length - 1;
			for (ki.font = kf, n.o.textAlign(ki, 0), v = kg - bm; 0 <= v; v--) {
				const pos = result[v + position];
				if (pos !== undefined)
					lH(c4[pos]), lI(v, pos, c4[pos]);
			}
			for (n.o.textAlign(ki, 2), v = kg - bm; 0 <= v; v--) {
				const pos = result[v + position];
				if (pos !== undefined)
					lH(c4[pos]), lJ(v, c4[pos]);
			}
		} else {
			for (ki.font = kf, n.o.textAlign(ki, 0), v = kg - bm; 0 <= v; v--)
				lH(c4[v + position]), lI(v, v + position, c4[v + position]);
			for (n.o.textAlign(ki, 2), v = kg - bm; 0 <= v; v--)
				lH(c4[v + position]), lJ(v, c4[v + position]);
		}
		2 == bm && (lH(ao.bW), n.o.textAlign(ki, 0), lI(kg - 1, ka[ao.bW], ao.bW), n.o.textAlign(ki, 2), lJ(kg - 1, ao.bW)), 0 === position && (bm = .7 * ko / d7.get(4).height, ki.setTransform(bm, 0, 0, bm, Math.floor(kp + .58 * ko + .5 * bm * d7
			.get(4).width), Math.floor(kl + ke + .4 * ko)), ki.imageSmoothingEnabled = !0, ki.drawImage(d7.get(4), -Math.floor(d7.get(4).width / 2), -Math.floor(d7.get(4).height / 2)), ki.setTransform(1, 0, 0, 1, 0, 0))
	}

	function lH(player) {
		ao.fC && (ki.fillStyle = dO.lL[dO.lM[dO.lN[player]]])
	}

	function lD(l, lO) {
		ki.fillStyle = lO, l = kg - 1 < l ? kg - 1 : l;
		lO = Math.floor((l === kg - 1 ? 2 : 0 === l ? 1.15 : 1) * ko), lO = l === kg - 2 ? Math.floor(kn + 9.15 * ko) - Math.floor(kn + 8.15 * ko) : lO;
		ki.fillRect(0, Math.floor(kn + (l + (0 === l ? 0 : .15)) * ko), kc, lO)
	}

	function lI(lR, c0, l) {
		ki.fillText(kt[c0], kp, Math.floor(kl + ke + (lR + .5) * ko)), 1 === bU.ev[l] && (ki.font = "italic " + kf);
		c0 = Math.floor(kl + ke + (lR + .5) * ko);
		ki.fillText(bU.l6[l], kq, c0), 0 !== bU.ev[l] && (ki.font = kf), l < ao.cW && 2 !== bU.ev[l] || ki.fillRect(kq, c0 + .35 * l2, ks[l], Math.max(1, .1 * l2))
	}

	function lJ(lR, l) {
		ki.fillText(bU.bp[l], kr, Math.floor(kl + ke + (lR + .5) * ko))
	}

	function la(eC) {
		return (eC -= dY.gap + kn) < 0 ? Math.floor(eC / ko) - 1 : eC < (kg - 1) * ko ? Math.floor(eC / ko) : eC < kZ - kn ? kg - 1 : (eC -= kZ - kn, kg + Math.floor(eC / ko))
	}

	function i6(eB, eC) {
		return eB >= dY.gap && eB < dY.gap + kc && eC >= dY.gap && eC < dY.gap + kZ
	}
	this.k = function() {
			var l;
			for (kz = !1, l1 = l0 = ky = 0, kx = -1, kg = ae.af.dW() ? 6 : 10, l3 = (position = 0) === (l3 = by.bz.data[11].value) ? 10 : 1 === l3 ? 5 : 1, kw = !1, ku = new Uint16Array(kg + 1), kv = new Uint32Array(kg + 1), kk = ao.l4, c4 =
				new Uint16Array(kk), ka = new Uint16Array(kk), l = kk - 1; 0 <= l; l--) c4[l] = l, ka[l] = l;
			this.resize(!0), ks = new Uint16Array(ao.l4);
			var l5 = Math.floor(kc - kq - kp - kj);
			for (kt = new Array(ao.l4), ki.font = kf, l = ao.l4 - 1; 0 <= l; l--) kt[l] = l + 1 + ".", bU.l6[l] = n.eg.eh(bU.l7[l], kf, l5), ks[l] = Math.floor(ki.measureText(bU.l6[l]).width);
			l8()
		}, this.resize = function(k) {
			if (kZ = ae.af.dW() ? (kc = Math.floor(.335 * b9.dX), Math.floor(kg * kc / 8)) : (kc = Math.floor(.27 * b9.dX), Math.floor(kg * kc / 10)), kc = Math.floor(.97 * kc), (kh = document.createElement("canvas")).width = kc, kh.height = kZ, ki =
				kh.getContext("2d", {
					alpha: !0
				}), kl = .025 * kc, ke = .16 * kc, km = 0 * kc, kn = Math.floor(.45 * kl + ke), ko = (kZ - ke - 2 * kl - km) / kg,
				kh.height = kZ += ko, leaderboardFilter.tabBarOffset = Math.floor(ko * 1.3), leaderboardFilter.verticalClickThreshold = kZ - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = kc,
				kd = n.o.dc(1, Math.floor(.55 * ke)), l2 = Math.floor((ae.af.dW() ? .67 : .72) * ko), kf = n.o.dc(0, l2), ki.font = kf, kp = Math.floor(.04 * kc), kq = Math.floor((ae.af.dW() ? .195 : .18) * kc), kj = Math.floor(ki.measureText(
					"00920600").width), ki.font = kd, kr = kc - kp, !k) {
				ki.font = kf;
				for (var l = ao.l4 - 1; 0 <= l; l--) ks[l] = Math.floor(ki.measureText(bU.l6[l]).width);
				l8()
			}
		}, this.l9 = function() {
			return kc
		}, this.lA = function(j0) {
			kw && (j0 || b6.f2() % l3 == 0) && (kw = !1, l8())
		}, this.b8 = function() {
			! function() {
				for (var v = kk - 1; 0 <= v; v--) 0 === bU.bV[c4[v]] && ! function(v) {
					var lY = c4[v];
					kk--;
					for (var l = v; l < kk; l++) c4[l] = c4[l + 1], ka[c4[l]] = l;
					c4[kk] = lY, ka[c4[kk]] = kk
				}(v)
			}();
			for (var lW, hP = kk - 1, v = 0; v < hP; v++) bU.bp[c4[v]] < bU.bp[c4[v + 1]] && (lW = c4[v], c4[v] = c4[v + 1], c4[v + 1] = lW, ka[c4[v]] = v, ka[c4[v + 1]] = v + 1);
			! function() {
				for (var bo = kw, bm = (kw = !0, ka[ao.bW] >= kg - 1 ? kg - 2 : kg - 1), l = bm; 0 <= l; l--)
					if (ku[l] !== c4[l] || kv[l] !== bU.bp[c4[l]]) return;
				(bm != kg - 2 || ku[kg] === ka[ao.bW] && kv[kg] === bU.bp[ao.bW]) && (kw = bo)
			}();
			for (var l = kg - 1; 0 <= l; l--) ku[l] = c4[l], kv[l] = bU.bp[c4[l]];
			ku[kg] = ka[ao.bW], kv[kg] = bU.bp[ao.bW];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.eA = function(eB, eC) {
			return !!i6(eB, eC) && ((utils.isPointInRectangle(eB, eC, dY.gap + 12, dY.gap + 12, kn - 22, kn - 22) && playerList.display(bU.l7), true) &&
				!(eC - dY.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(eB - dY.gap)) && (ky = b6.b5, kz = !0, l0 = l1 = la(eC), lb.lc() && (eB = ld(-1, l1, kg), kx !== (eB = eB === kg ? -1 : eB)) && (kx =
					eB, l8(), b6.bJ = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			l8(), b6.bJ = !0;
		},
		this.eE = function(eB, eC) {
			if (utils.isPointInRectangle(eB, eC, dY.gap + 12, dY.gap + 12, kn - 22, kn - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, l8(), b6.bJ = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, l8(), b6.bJ = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(eB, eC, dY.gap, dY.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), eB - dY.gap
				)) return;
			var bo, lZ = la(eC);
			return kz ? (bo = position, (position = ld(0, position += l0 - lZ, ao.l4 - kg)) !== bo && (lZ = (lZ = ld(-1, l0 = lZ, kg)) !== kg && i6(eB, eC) ? lZ : -1, kx = lZ, l8(), b6.bJ = !0), !0) : (lZ = (lZ = ld(-1, lZ, kg)) === kg || !i6(eB,
				eC) || lb.lc() ? -1 : lZ, kx !== lZ && (kx = lZ, l8(), b6.bJ = !0))
		}, this.le = function(eB, eC) {
			if (!kz) return !1;
			kz = !1;
			var lZ = la(eC);
			var isEmptySpace = false;
			return lb.lc() && -1 !== kx && (kx = -1, l8(), b6.bJ = !0), b6.b5 - ky < 350 && l1 === lZ && -1 !== (lZ = (lZ = ld(-1, lZ, kg)) !== kg && i6(eB, eC) ? lZ : -1) && (eB = (leaderboardFilter.enabled ? (updateFilteredLb(), c4[
					leaderboardFilter.filteredLeaderboard[lZ + position] ?? (isEmptySpace = true, ka[ao.bW])]) : c4[lZ + position]), lZ === kg - 1 && (leaderboardFilter.enabled ? this.playerPos : ka[ao.bW]) >=
				position + kg - 1 && (eB = ao.bW), !isEmptySpace && ao.fC && donationsTracker.displayHistory(eB, bU.l7, ao.ap), 0 !== bU.bV[eB] && !isEmptySpace) && io.lf(eB, 800, !1, 0), !0
		}, this.lg = function(eB, eC, deltaY) {
			var li;
			return !(kz || ao.lh || (li = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !i6(eB, eC)) || (eB = (eB = ld(-1, la(eC), kg)) === kg || lb.lc() ? -1 : eB, 0 < deltaY ? position < ao.l4 - kg && (position += Math.min(ao.l4 - kg - position,
				li), kx = eB, l8(), b6.bJ = !0) : 0 < position && (position -= Math.min(position, li), kx = eB, l8(), b6.bJ = !0), 0))
		}, this.eK = function() {
			eL.drawImage(kh, dY.gap, dY.gap)
		}
}

function lj() {
	this.lk = new ll, this.bu = new lm, this.result = new bN, this.bd = new ln
}

function lo() {
	this.lp = [], this.aZ = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
		"Gra zakończyła się remisem!", "Błąd: {0}", "", "{0} został uwieczniony!", "Niezajęta ziemia {0}", "Gracz: {0}   Saldo: {1}   Terytorium: {2}   Współrzędne: {3}", "Góry {0}", "Woda {0}", "Właściciel statku: {0}   Siła: {1}",
		"Wiadomość do {0}: ", "{0}: ", "Ludzkość triumfuje! Nieumarli zostali odparci.", "Opor", "Era ludzkości dobiegła końca, przeważona przez nieustające fale nieumarłych.", "Wirus",
		"Jeśli zostanie uzgodniony pokój, gra zakończy się remisem.", "Podpisałeś pakt o nieagresji z {0}.", "Poprosiłeś {0} o podpisanie paktu o nieagresji.", "{0} zaakceptował pakt o nieagresji.", "{0} zaproponował pakt o nieagresji.",
		"Poprosiłeś {0} graczy o atak na {1}.", "Poprosiłeś {0} o atak na {1}.", "{0} zasugerował atak na {1}.", "Twoje saldo jest zbyt niskie!", "Wyeksportowałeś {0} zasobów do {1}.", "Pobrano podatek od {0} jednostek.",
		"{0} wsparł Cię {1} zasobami.", "Bot ({0}) wsparł Cię {1} zasobami.", "Mapa: {0}", "Wymiary: {0}x{1}", "Całkowita liczba pikseli: {0}", "Teren: {0} ({1})", "Woda: {0} ({1})", "Góry: {0} ({1})",
		"Pełne atakowanie graczy ludzkich jest wyłączone.", "{0} oraz {1} innych graczy zostało usuniętych.", "{0} oraz {1} innych graczy opuściło grę.", "{0} oraz {1} innych graczy poddało się.", "{0} został usunięty przez {1}.",
		"{0} opuścił grę.", "{0} poddał się.", "{0} dołączył do gry.", "{1006}Brak odpowiedzi serwera", "{3231}Konto zostało pomyślnie zapisane!", "{3232}Konto", "{3249}Nie znaleziono serwerów", "{3252}Dziękujemy za głos.",
		"{3265}Proszę zaakceptuj ciasteczka", "{3266}Nieprawidłowy format hasła", "{3605}Nieprawidłowy format powtórki", "{4207}Przekroczenie czasu oczekiwania w lobby", "{4214}Nieprawidłowa nazwa użytkownika", "{4224}Błąd lobby",
		"{4229}Brak odpowiedzi klienta", "Nieokreślony", "Błąd", "TABLICA WYNIKÓW", "WYELIMINOWAŁEŚ", "ZOSTAŁEŚ WYELIMINOWANY PRZEZ", "GRA WYGRANA PRZEZ", "MAPA:", "Ludzie", "Gracze", "Boty", "Widzowie", "Próg", "Zajęcie", "Odsetki", "Dochód",
		"Czas", "Opuść grę", "Więcej", "Ustawienia", "Powtórka", "Linki", "Wersja gry", "Usuń dane", "Ustawienia prywatności", "Zamknij", "Statystyki gry", "Poddaj się", "Wymuś restart gry", "Menu", "Powrót", "Zaznacz wszystko", "Kopiuj",
		"Wyczyść", "Uruchom", "Zapisz i zamknij", "Resetuj", "Informacje", "Zwiększanie rozdzielczości, zmniejszanie minimalnego rozmiaru czcionki i przyspieszanie renderowania tekstu mogą obciążać system i wpływać na responsywność gry.",
		"Język", "Rozdzielczość", "Przyjazny dla urządzeń mobilnych", "Czcionka", "Ukryj nazwy użytkowników", "Umieść saldo na górze", "Ukryj przyciski powiększania", "Minimalny rozmiar czcionki", "Lobby", "Szybkość renderowania tekstu", "Niska",
		"Średnia", "Wysoka", "Bardzo wysoka", "Mała", "Bardzo mała", "Lobby pośredniczone", "Wolne", "Normalne", "Szybkie", "Włączone", "Nowa aktualizacja gry", "Gra została zaktualizowana! Proszę przeładować grę.", "Przeładuj", "Moje konto",
		"Usuń konto", "", "", "Jeśli zostanie uzgodniony pokój, gracz z największym terytorium wygrywa grę."
	]
}

function lq() {
	this.lr = null, this.bJ = !1, this.b5 = 0, this.bC = 56;
	var ls = 0;

	function lu() {
		b6.b5 = ls = performance.now(), b6.lr.b8(), window.requestAnimationFrame(lu)
	}
	this.k = function() {
		this.lt(), window.requestAnimationFrame(lu), this.b5 = performance.now()
	}, this.lv = function() {
		ao.fX ? (this.lr = new lw, this.lr.k()) : ao.ap ? this.lr = new b3 : (this.lr = new lx, this.lr.k())
	}, this.lt = function() {
		this.lr = new ly, this.bJ = !0
	}, this.b8 = function() {
		this.lr.b7++
	}, this.f2 = function() {
		return this.lr.b7
	}, this.lz = function() {
		var bo = performance.now();
		bo < ls + 1e3 || (this.b5 = bo, this.lr.b8())
	}
}

function m0() {
	this.fv = function() {
		by.iH.m1(), by.iH.m2(), ak.al.close(0, 3255), 0 === ae.id ? ae.m3 && ae.m3.clear() : 1 === ae.id ? ae.m4.saveString(199, "") : 2 === ae.id && ae.m5.postMessage("clear")
	}, this.fQ = function() {
		2 === ae.id ? ae.m5.postMessage("showConsentForm") : 1 === ae.id ? ae.m4.setState(7) : m6.m7.showCMPScreen()
	}, this.fc = function() {
		this.setState(14)
	}, this.m8 = function() {
		var x = by.bz.m9(101),
			max = ("string" != typeof(x = "" === x ? function() {
				{
					if (2 === ae.id) return ae.mC.password;
					if (1 === ae.id) return 12 <= ae.fb ? ae.m4.loadString(22) : ""
				}
				return mD.mE(9)
			}() : x) && (x = ""), Math.floor(Math.pow(2, 48))),
			mB = Math.floor(parseInt(gs.aD(x)));
		return 0 < mB && mB < max ? by.bz.i1(101, x) : (mB = Math.floor(1 + (max - 1) * Math.random()), by.bz.i1(101, x)), mB
	}, this.dW = function() {
		return 1 === by.bz.mF(2)
	}, this.mG = function() {
		by.bz.i1(102, "")
	}, this.setState = function(aV) {
		1 === ae.id && 5 <= ae.fb && ae.m4.setState(aV)
	}, this.ag = function() {
		var mH;
		1 === ae.id && 7 <= ae.fb ? ae.m4.setState(5) : ((mH = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = mH.toString())
	}, this.mI = function() {
		1 !== ae.id || ae.fb < 17 || ae.m4.saveString(23, document.documentElement.outerHTML)
	}, this.mJ = function() {
		0 === ae.id ? m6.m7.k() : 1 === ae.id ? ae.m4.prepareAd("1688441405") : 2 === ae.id && (0 === ae.fb ? ae.m5.postMessage("prepare ad 4500876070") : ae.m5.postMessage("loadAds 4500876070"))
	}, this.mK = function(bo) {
		return 0 === ae.id ? !!m6.m7.mL() : 1 === ae.id ? 12 <= ae.fb && (ae.m4.presentAd(bo), !0) : 2 === ae.id && (0 === ae.fb ? ae.m5.postMessage("show ad " + bo) : ae.m5.postMessage("showAd"), !0)
	}, this.mM = function() {
		2 === ae.id && ae.fb < 23 && aO.aQ(4, 1, new aR("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + fj.fl + "' target='_blank'>" +
			fj.fl + "</a>", !0, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(0)
			}, ac.ad)]))
	}
}

function mN() {
	var df, eg, eB, eC, mO, mP, gap, mQ, fontSize, mS, mT, mU, mV, mW, mX, mY, mZ, ma;

	function mi() {
		eg.clearRect(0, 0, ey.dZ, ey.da), eg.fillStyle = ac.c8, eg.fillRect(0, 0, ey.dZ, ey.da), eg.fillStyle = ac.mk, ge = 0 < mX ? mX : Math.sqrt(mU[4] / 1e4), eg.fillRect(0, ey.da - mO - 1, Math.floor(ge * ey.dZ), mO), eg.fillStyle = ac.c7, eg
			.fillRect(0, 0, ey.dZ, 1), eg.fillRect(0, 0, 1, ey.da), eg.fillRect(ey.dZ - 1, 0, 1, ey.da), eg.fillRect(0, ey.da - 1, ey.dZ, 1), eg.fillRect(0, ey.da - mO - 1, ey.dZ, 1);
		for (var ge, ml, bo = 0, l = 0; l < mT.length; l++) mV[l] ? (n.o.textAlign(eg, 0), ml = Math.floor((mP - mO + 2 * mQ) * (l - bo + 1) / (mT.length + 1) - .7 * mQ), eg.fillText(mT[l], gap, ml), n.o.textAlign(eg, 2), 5 === l && 0 !== bU.bV[ao
			.bW] && bU.f8[ao.bW] >= cU.mm(ao.bW) ? (eg.fillStyle = ac.mn, eg.fillText(mf(l), ey.dZ - gap, ml), eg.fillStyle = ac.c7) : eg.fillText(mf(l), ey.dZ - gap, ml)) : bo++
	}

	function mf(l) {
		return l < 3 ? mU[l].toString() : 3 === l || 4 === l || 5 === l ? n.eU.mo(mU[l] / 100, 2) : l < 7 ? n.eU.eV(mU[l]) : l === 7 ? ey.mp(mU[7]) : l === 8 ? utils.getMaxTroops(bU.bp, ao.bW) : utils.getDensity(ao.bW)
	}

	function me() {
		bU.bp[ao.bW] !== mU[6] && (mU[6] = bU.bp[ao.bW], mS++)
	}
	this.k = function() {
		mX = mY = 0, (mT = new Array(8))[0] = aS.aZ[70], mT[1] = ao.ap ? aS.aZ[71] : aS.aZ[72], mT[2] = aS.aZ[73], mT[3] = aS.aZ[74], mT[4] = aS.aZ[75], mT[5] = aS.aZ[76], mT[6] = aS.aZ[77], mT[7] = aS.aZ[78],
			mT.push("Max Troops", "Density"), // add mT
			ma = ao.mb - aF(ao.mb, 100), (mU = new Array(mT.length))[0] = ao.ap ? 0 : ao.cW, mU[1] = ao.ap ? mc : ao.md, mU[2] = ao.eu, mU[3] = 0, mU[4] = aF(1e4 * bU.bp[0], ao.mb), mU[5] = 700, mU[6] = 0, me(), mU[7] = 0, mW = mf(6), mV =
			new Array(mT.length);
		for (var l = mT.length - 1; 0 <= l; l--) mV[l] = !0;
		mZ = 0, mZ = ao.ap ? (mV[0] = !1, mV[2] = !1, mV[3] = !1, 3) : (mV[3] = !1, 1), mS = 0, this.resize()
	}, this.resize = function() {
		this.dZ = Math.floor((ae.af.dW() ? .1646 : .126) * 1.25 * b9.dX), this.da = Math.floor(1.18 * this.dZ), mO = Math.floor(.04 * this.dZ), gap = Math.floor(.035 * this.dZ), mQ = .04 * this.dZ, mP = this.da, this.da -= Math.floor(mZ * (this
			.da - 2 * mO) / mT.length), fontSize = Math.floor(.7 * (mP - mO) / mT.length), fontSize = n.o.dc(1, fontSize), (df = document.createElement("canvas")).width = this.dZ, df.height = this.da, (eg = df.getContext("2d", {
			alpha: !0
		})).font = fontSize, n.o.textBaseline(eg, 1), eg.lineWidth = 1, this.mg(), this.mh(), jJ.mh(), mi()
	}, this.mh = function() {
		eB = b9.dZ - this.dZ - dY.gap
	}, this.ez = function() {
		eC = dY.gap
	}, this.mg = function() {
		eC = dY.gap + (jJ.mj() && 0 !== bU.bV[ao.bW] && !ao.bA ? jJ.da + dY.gap : 0)
	}, this.lA = function(j0) {
		(j0 || 100 <= mS) && (mS = 0, mi())
	}, this.mq = function() {
		return mU[7]
	}, this.mp = function(value) {
		var mr = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * mr) / 1e3);
		return value < 10 ? mr + ":0" + value : mr + ":" + value
	}, this.b8 = function() {
		var n6, per;
		mV[0] && ao.mz - ao.eu !== mU[0] && (mU[0] = ao.mz - ao.eu, mS++), mc - mU[0] !== mU[1] && (mU[1] = mc - mU[0], mS++), this.mu(), (n6 = cU.n7(ao.bW)) !== mU[5] && (mU[5] = n6, mS++), me(), mU[7] += b6.bC, n6 = mf(7), mW !== n6 && (mW =
			n6, mS += 100), n6 = ao.fC ? bj.bk() : bU.bp[c4[0]], per = aF(1e4 * n6, ao.mb), mU[3] = n6, mU[4] !== per && (mS++, mU[4] = per), 8 === ao.bi && function() {
			if (0 === bU.bV[0]) bc.lk.n2(1);
			else {
				if (0 !== bU.bV[1]) return;
				bc.lk.n2(0)
			}
			return 1
		}() || mU[3] < ma || mU[3] !== ao.mb && ! function() {
			for (var l = mc - 1; 0 <= l; l--)
				if (0 < bU.n4[n5[l]].length) return;
			return 1
		}() || bc.lk.n2(-1)
	}, this.mu = function() {
		mV[2] && ao.eu !== mU[2] && (mU[2] = ao.eu, mS++)
	}, this.n8 = function(l) {
		var n9, nA, bo;
		return 2 !== ao.aq && (l === ao.nB ? (mX = 0, mi(), !1) : (-1 !== l || 0 !== mY) && (nA = mX, mX = ao.fX ? l / ao.nB : (bo = performance.now(), 0 <= l && (n9 = bo - 392 * l, mY = 0 === l || n9 < mY ? n9 : mY), 1 < (mX = (bo - mY) / (392 *
			ao.nB)) ? 1 : mX), mi(), mX !== nA))
	}, this.eK = function() {
		eL.drawImage(df, eB, eC)
	}
}

function fd(title, fR, nC) {
	var nD = document.createElement("div"),
		nE = document.createElement("div"),
		nF = document.createElement("div"),
		nG = document.createElement("div");
	this.ff = nF, this.fy = fR, this.show = function() {
			!1 !== nC ? document.body.appendChild(nD) : (document.body.appendChild(nE), document.body.appendChild(nG))
		}, this.fw = function() {
			!1 !== nC ? document.body.removeChild(nD) : (document.body.removeChild(nE), document.body.removeChild(nG))
		}, this.nL = function() {
			var nM = n.o.nN(.1),
				nO = n.o.nN(.08 + .04 * (b9.j5 < 1));
			return {
				nM: nM,
				nO: nO,
				nP: b9.da / b9.iy - nM - nO
			}
		}, this.resize = function() {
			var l, i, m = fR.length,
				nQ = this.nL(),
				nM = nQ.nM,
				nO = nQ.nO;
			for (nE.style.height = n.o.nR(nM), n.o.p(nE, 2), nG.style.top = n.o.nR(b9.da / b9.iy - nO), nG.style.height = n.o.nR(nO), n.o.p(nG, 8), nF.style.top = n.o.nR(nM), nF.style.height = nF.style.maxHeight = n.o.nR(nQ.nP), nG.style.font = nE
				.style.font = n.o.dc(0, n.o.nN(.02, .25)), nF.style.font = n.o.dc(0, n.o.nN(.02, .4)), l = 0; l < m; l++)(i = fR[l].button).style.top = "0", i.style.left = (100 * l / m).toFixed(2) + "%", i.style.width = (100 / m).toFixed(2) + "%", i
				.style.height = "100%", 0 < l && n.o.p(i, 4)
		}, this.eK = function() {
			var nQ = this.nL(),
				a2 = b9.iy;
			eL.fillStyle = ac.lC, eL.fillRect(0, a2 * nQ.nM, b9.dZ, a2 * nQ.nP)
		}, nD.style.position = "absolute", nD.style.top = "0", nD.style.left = "0", nD.style.width = "100%", nD.style.height = "100%", nE.style.position = "absolute", nE.style.top = "0", nE.style.left = "0", nE.style.width = "100%", nE.style
		.display = "flex", nE.style.backgroundColor = ac.lC, nG.style.position = "absolute", nG.style.left = "0", nG.style.width = "100%", nF.style.position = "absolute", nF.style.width = "100%", nF.style.backgroundColor = ac.lC,
		function() {
			for (var l = 0; l < fR.length; l++) fR[l].button.style.position = "absolute", fR[l].button.style.fontSize = "1.2em"
		}();
	for (var l = 0; l < fR.length; l++) nG.appendChild(fR[l].button);
	nE.appendChild(function() {
		var nK = document.createElement("h1");
		return nK.textContent = title, nK.style.margin = "auto", nK.style.fontSize = "2.3em", nK
	}()), !1 !== nC && (nD.appendChild(nF), nD.appendChild(nE), nD.appendChild(nG))
}

function nS() {
	this.hT = function(v, a8) {
		return Math.floor((v + .5) / a8)
	}, this.nT = function(v, a8) {
		return Math.floor(v * (a8 + .5))
	}, this.sqrt = function(aC) {
		return ~~Math.sqrt(aC + .5)
	}, this.pow = function(i) {
		return Math.floor(Math.pow(2, i) + .5)
	}, this.i7 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.nU = function(nV, nW, nX) {
		return Math.max(Math.min(nV, nW), nX)
	}, this.nY = function(nZ, na, eB, eC) {
		eB -= nZ, nZ = eC - na, eC = 0;
		return 0 == eB ? eC = 0 <= nZ ? Math.PI : 0 : (eC = Math.atan(nZ / eB), eC += 0 < eB ? .5 * Math.PI : 1.5 * Math.PI), eC
	}, this.log2 = function(aC) {
		return Math.floor(!!aC * (1 + Math.log2(aC + .5)))
	}
}

function ne() {
	var nf = !1,
		es = 0,
		dZ = 0,
		en = 0,
		gap = 0,
		df = null,
		eg = null,
		ng = null;

	function nk() {
		for (var dK, nq = 0, m = 0, a2 = Math.floor(dZ / 2), aI = Math.floor(en / 2), dJ = 1.5 * Math.PI, l = ao.nh; 0 <= l; l--) m += ng[l], 0 === ng[l] && nq++;
		if (nf = !1, eg.clearRect(0, 0, dZ, dZ), eg.fillStyle = ac.c8, eg.fillRect(0, 0, dZ, dZ), eg.fillStyle = ac.c7, eg.fillRect(0, 0, dZ, gap), eg.fillRect(0, 0, gap, dZ), eg.fillRect(dZ - gap, 0, gap, dZ), eg.fillRect(0, dZ - gap, dZ, gap), 0 <
			m)
			if (nq === ao.nh) {
				for (l = ao.nh; 0 <= l; l--)
					if (0 < ng[l]) {
						! function(l, a2, aI) {
							eg.fillStyle = dO.dP[dO.lM[l]], eg.beginPath(), eg.arc(a2, a2, aI, 0, 2 * Math.PI), eg.fill()
						}(l, a2, aI);
						break
					}!
				function(a2) {
					var fontSize = a2 / 3;
					eg.font = n.o.dc(1, fontSize), eg.fillStyle = ac.c7, eg.fillText("100%", a2, a2 + .1 * fontSize)
				}(a2)
			} else {
				for (l = 0; l <= ao.nh; l++) 0 < ng[l] && (! function(l, a2, aI, dJ, dK) {
					eg.fillStyle = dO.dP[dO.lM[l]], eg.beginPath(), eg.arc(a2, a2, aI, dJ, dK), eg.lineTo(a2, a2), eg.fill()
				}(l, a2, aI, dJ, dK = dJ + 2 * Math.PI * ng[l] / m), function(a2, aI, dJ, dK) {
					var aC = (dK - dJ) / (2 * Math.PI),
						fontSize = +aI * Math.min(aC, .37);
					fontSize < 8 || (dJ = (dJ + dK) / 2, dK = Math.floor(100 * aC + .5) + "%", aI *= .525 - Math.max(.6 * (aC - .7), 0), eg.font = n.o.dc(1, fontSize), eg.fillStyle = ac.c7, eg.fillText(dK, a2 + Math.cos(dJ) * aI, a2 + Math
						.cos(dJ + 1.5 * Math.PI) * aI))
				}(a2, aI, dJ, dK), 0 !== l && dM(a2, aI, dJ), dJ = dK);
				dM(a2, aI, 1.5 * Math.PI)
			}!
		function(a2, aI) {
			eg.beginPath(), eg.arc(a2, a2, aI, 0, 2 * Math.PI), eg.stroke()
		}(a2, aI)
	}

	function dM(a2, aI, dQ) {
		eg.beginPath(), eg.moveTo(a2, a2), eg.lineTo(a2 + Math.cos(dQ) * aI, a2 + Math.cos(dQ + 1.5 * Math.PI) * aI), eg.stroke()
	}
	this.k = function() {
		if (ao.fC) {
			var l;
			for (es = 0, ng = new Uint32Array(ao.nh + 1), l = ao.nh; 0 <= l; l--) ng[l] = 0;
			for (l = mc - 1; 0 <= l; l--) ng[dO.lN[n5[l]]] += 1;
			this.resize()
		} else ng = eg = df = null
	}, this.nj = function() {
		return dZ
	}, this.resize = function() {
		ao.fC && (dZ = Math.floor(ae.af.dW() && !ao.lh ? .18 * b9.min : .13 * b9.dX), dZ = (dZ *= 1 + (.5 + .2 * ae.af.dW()) * ao.lh) + dZ % 2, en = Math.floor(7 * dZ / 8), (df = df || document.createElement("canvas")).width = dZ, df.height = dZ,
			eg = df.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * dZ), eg.lineWidth = gap, eg.strokeStyle = ac.c7, n.o.textAlign(eg, 1), n.o.textBaseline(eg, 1), nk())
	}, this.bk = function() {
		return ng[this.nl()]
	}, this.nm = function() {
		return es = 31, this.b8(), this.nl()
	}, this.nl = function() {
		for (var nn = 0, l = ao.nh; 0 < l; l--) ng[l] > ng[nn] && (nn = l);
		return nn
	}, this.b8 = function() {
		if (ao.fC && 32 <= ++es) {
			var l;
			for (es = 0, l = ao.nh; 0 <= l; l--) ng[l] = 0;
			for (l = mc - 1; 0 <= l; l--) ng[dO.lN[n5[l]]] += bU.bp[n5[l]];
			nf = !0
		}
	}, this.np = function() {
		ao.fC && nf && nk()
	}, this.eK = function() {
		ao.fC && (ao.lh ? eL.drawImage(df, dY.gap, dY.gap) : eL.drawImage(df, dY.gap, kZ + 2 * dY.gap))
	}
}

function h6() {
	var aN, h1, nw, nx = ["wss://", "/s50/", "/s51/", "/s52/"];

	function h7() {
		ak.al.h7(aN, h1)
	}

	function o4(i) {
		ak.o6.o7(aN, new Uint8Array(i.data))
	}

	function o5() {}

	function hJ(i) {
		ak.al.hJ(aN, i)
	}
	this.k = function(b4, ny) {
		aN = b4, h1 = ny;
		b4 = nx[0];
		aN < ak.al.gh ? b4 += ak.al.gm[aN] + nx[1 + o3] : b4 += ak.al.gm[0] + "/i" + (1 + o3) + (aN - ak.al.gi) + "/", (nw = new WebSocket(b4)).binaryType = "arraybuffer", nw.onopen = h7, nw.onmessage = o4, nw.onclose = hJ, nw.onerror = o5
	}, this.o0 = function() {
		return nw.readyState === nw.CONNECTING
	}, this.gy = function() {
		return nw.readyState === nw.OPEN
	}, this.h3 = function() {
		return this.o0() || this.gy()
	}, this.h4 = function(ny) {
		h1 = ny
	}, this.o1 = function() {
		return h1
	}, this.send = function(hA) {
		this.gy() && nw.send(hA)
	}, this.close = function(hE) {
		this.h3() && (nw.close(hE), this.fw())
	}, this.fw = function() {
		nw.onopen = null, nw.onmessage = null, nw.onclose = null, nw.onerror = null
	}
}

function o8() {
	this.id = new o9, this.k = function() {
		this.id.k()
	}
}

function oA() {
	this.gN = function(df, gF, gE) {
		var dZ = df.width,
			da = df.height,
			a2 = n.o.j7(dZ, da),
			dF = n.o.getContext(a2, !0),
			df = (dF.drawImage(df, 0, 0), dF.getImageData(0, 0, dZ, da));
		return gF(df.data, dZ, da, gE), dF.putImageData(df, 0, 0), a2
	}, this.gL = function(d, dZ, da) {
		for (var eB = dZ - 1; 0 <= eB; eB--)
			for (var eC = da - 1; 0 <= eC; eC--) {
				var l = 4 * (eB + eC * dZ);
				d[3 + l] = d[l], d[l] = d[1 + l] = d[2 + l] = 255
			}
	}, this.gH = function(d, dZ, da) {
		for (var eB = dZ - 1; 0 <= eB; eB--)
			for (var eC = da - 1; 0 <= eC; eC--) {
				var l = 4 * (eB + eC * dZ);
				d[1 + l] > d[2 + l] + 10 && (d[3 + l] = d[l], d[1 + l] = d[2 + l])
			}
	}, this.gJ = function(d, dZ, da, gE) {
		for (var gap = Math.floor(Math.min(dZ, da) * gE), eB = 0; eB < dZ; eB++)
			for (var l, eC = 0; eC < da; eC++)(eB < gap || eC < gap || dZ - gap <= eB || da - gap <= eC) && (d[3 + (l = 4 * (eB + eC * dZ))] = 255 - 255 * (d[1 + l] - d[l]) / (255 - d[l]))
	}, this.oC = function(d, dZ, da, gE) {
		for (var eB = dZ - 1; 0 <= eB; eB--)
			for (var eC = da - 1; 0 <= eC; eC--) {
				var l = 4 * (eB + eC * dZ);
				d[l] = gE[0], d[1 + l] = gE[1], d[2 + l] = gE[2]
			}
	}, this.gI = function(d, dZ, da, gE) {
		for (var gap = Math.floor(dZ * gE), eB = 0; eB < dZ; eB++)
			for (var l, eC = 0; eC < da; eC++)(eB < gap || eC < gap || dZ - gap <= eB || da - gap <= eC) && (d[l = 4 * (eB + eC * dZ)] = d[1 + l] = d[2 + l] = 0)
	}, this.gK = function(d, dZ, da) {
		for (var eC, l, eB = dZ - 1; 0 <= eB; eB--)
			for (eC = da - 1; 0 <= eC; eC--) 200 < d[1 + (l = 4 * (eB + eC * dZ))] && d[1 + l] - 20 > d[l] && d[1 + l] - 20 > d[2 + l] ? d[l] + d[2 + l] < 40 ? d[3 + l] = 0 : (d[3 + l] = d[l], d[l] = 255, d[1 + l] = 255, d[2 + l] = 255) : d[l] <
				50 && d[1 + l] < 50 && d[2 + l] < 50 && (d[l] + d[1 + l] + d[2 + l] < 50 ? d[3 + l] = 180 : d[3 + l] = 180 + Math.floor(75 * (d[l] + d[1 + l] + d[2 + l] - 50) / 100))
	}, this.gM = function(d, dZ, da) {
		for (var eC, l, eB = dZ - 1; 0 <= eB; eB--)
			for (eC = da - 1; 0 <= eC; eC--) d[1 + (l = 4 * (eB + eC * dZ))] > d[l] + 20 && d[1 + l] > d[2 + l] + 20 && d[l] + d[2] < 40 && (d[3 + l] = 255 - d[1 + l], d[l] = d[1 + l] = d[2 + l] = d[l])
	}, this.oD = function(d, dZ, da, gE) {
		for (var aI = dZ >> 1, eB = 0; eB < dZ; eB++)
			for (var eC = 0; eC < da; eC++) Math.sqrt((eB - aI) * (eB - aI) + (eC - aI) * (eC - aI)) > gE * aI && (d[4 * (eB + eC * dZ) + 3] = 0)
	}
}
var j9, eL, vO, ao, p3, pD, pE, pC, io, p5, gs, gO, bD, ar, jH, jM, ei, jK, iu, jG, jJ, jI, ey, ex, eD, ai, aW, jO, d7, bX, mD, f6, cU, cf, bU, vP, p4, d9, iW, iS, vQ, vR, p1, vS, pM, b0, vT, gS, vU, b9, aK, oX, ak, pJ, jA, pH, pG, pI, vV, oR, aS,
	bq, p7, n, ac, jL, t2, tM, kW, kU, vW, lb, fj, hS, p2, fA, cb, p9, p8, bc, e1, vX, aO, m6, vY, gQ, vZ, va, bH, dY, cd, fV, b6, dO, bj, ae, bf, by, vb, hG, vc, a0E, a0F, a0G, a0H, a0I, a0J, a0K, a0L, a0M, a0N, a0O, a0P, a0Q, a2t, a2r, a2s, cX,
	a9Z, uW, pA, pB, n5, mc, sF, sG, sH, o3, fu, uk, xu, zp, a3m, oE = [60, 74, 112, 200, 256, 512];

function oF() {
	var hx, oG, oH, oI, oJ, oK;

	function oV(l) {
		hx[l] = 1 + aF(oJ[l] * aK.random(), 10 * aK.value(100))
	}
	this.oL = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.oM = [97, 95, 93, 90, 87, 84], this.oN = [98, 95, 70, 40, 20, 0], this.oO = [85, 70, 50, 30, 7, 3], this.oP = [0, 0, 5, 25, 50, 90], this.cS = null, this.k =
	function() {
		var l, oQ;
		if (hx = new Uint8Array(ao.md), oG = new Uint16Array(ao.md), oH = new Uint16Array(ao.md), oI = new Uint8Array(ao.md), this.cS = new Uint8Array(ao.md), oJ = new Uint16Array(ao.md), oK = new Uint16Array(ao.md), oR.hD) {
			if (oR.iM.oS)
				for (l = ao.md - 1; 0 <= l; l--) this.cS[l] = oR.iM.oS[l + 1]
		} else if (9 === ao.bi) this.oT();
		else if (ao.ap)
			if (ao.fC)
				for (l = ao.md - 1; 0 <= l; l--) this.cS[l] = jO.oU[dO.lN[l + ao.cW] - 1].hR;
			else
				for (l = ao.md - 1; 0 <= l; l--) this.cS[l] = jO.oU[0].hR;
		else
			for (oQ = 8 === ao.bi ? 1 : 0, l = ao.md - 1; 0 <= l; l--) this.cS[l] = oQ;
		for (l = ao.md - 1; 0 <= l; l--) this.cS[l] <= 2 ? (oI[l] = 5, oJ[l] = oK[l] = 1040, 0 === this.cS[l] ? (oG[l] = 1e3, oH[l] = 1e3) : 1 === this.cS[l] ? (oG[l] = 1e3, oH[l] = 920, oJ[l] = oK[l] = 1100) : (oG[l] = 825, oH[l] = 750)) : this
			.cS[l] <= 4 ? (oI[l] = 1 + aK.oW(20), 3 === this.cS[l] ? (oG[l] = oH[l] = 500, oJ[l] = oK[l] = 1e3) : (oK[l] = 250 + aK.oW(1501), oJ[l] = 500 + aK.oW(501), oG[l] = 300 + aK.oW(201), oH[l] = 100 + aK.oW(201))) : (oJ[l] = 1e3, oK[l] =
				1e3, oI[l] = 35 + aK.oW(16), oG[l] = 300 + aK.oW(201), oH[l] = 50 + aK.oW(101)), oV(l)
	}, this.oT = function() {
		for (var l, ge = 0, a8 = 0; a8 < 6; a8++) {
			for (l = ge + oX.oY[a8] - 1; ge <= l; l--) this.cS[l] = a8;
			ge += oX.oY[a8]
		}
	}, this.oZ = function(oa, value) {
		0 <= oa && (hx[oa] = value)
	}, this.b8 = function(oa) {
		0 == --hx[oa] && ! function(oa) {
			! function(oa) {
				oJ[oa] !== oK[oa] && (oJ[oa] += oJ[oa] < oK[oa] ? 3 : -3);
				oG[oa] !== oH[oa] && (oG[oa] += oG[oa] < oH[oa] ? oI[oa] : -oI[oa], oG[oa] = (Math.abs(oG[oa] - oH[oa]) <= oI[oa] ? oH : oG)[oa]);
				hx[oa] = aF(oJ[oa], 10)
			}(oa);
			var player = oa + ao.cW;
			od(player, aF(oG[oa] * bU.f8[player], 1e3))
		}(oa)
	}
}

function oe() {
	this.l4 = 512, this.og = 15e8, this.oh = 1e9, this.oi = 512, this.oj = 2, this.bW = 0, this.cW = 0, this.mz = 0, this.md = 0, this.eu = 0, this.ok = 512, this.ol = 150, this.ap = !0, this.fX = !1, this.aq = 0, this.mb = 0, this.lh = !1, this
		.bA = !1, this.om = !1, this.fC = !1, this.nh = 0, this.bi = 0, this.c3 = !1, this.on = null, this.oo = null, this.nB = 30, this.bZ = 0, this.ba = 0, this.bn = 0, this.op = function(oq, or, cE, dk, dl, os) {
			this.lh = !1, this.fX = os, this.bi = dk, this.c3 = dl, this.fC = this.bi < 7 || 9 === this.bi, this.mz = this.cW = cE.length, this.ap = 1 === this.mz, this.bi = 10 === this.bi && this.ap ? 7 : this.bi, this.bi = 8 === this.bi && 2 !==
				this.cW ? 7 : this.bi, this.nh = 9 === this.bi ? 2 : this.bi + 2, this.nB = this.cW <= 2 ? 30 : this.cW <= 50 ? 40 : 50, oR.hD && !oR.iM.ot ? this.om = this.bA = !1 : this.om = this.bA = this.fC || this.cW < 100, this.on = this.bA ?
				new ou : null, 1 === o3 ? this.ok = this.cW : this.ap ? this.ok = jO.ov() : this.ok = this.l4, this.md = this.ok - this.cW, this.eu = 0, this.bW = or, this.bZ = 0, this.ba = 0, this.bn = 0, aK.gr(oq), oX.k(), bU.k(cE), bq.ow.ox = [],
				dO.k(cE), this.aq = 1, cd.k(), oy(), iW.oz(), bH.k(), cU.k(), p0(), bX.k(cE), p1.k(), p2.k(), fA.k(), p3.k(), p4.e7(), p5.k(), p6(), p7.k(oq, cE, dk, dl), bj.k(), p8.k(), p9.k(), fV.k(), pA.putImageData(pB, 0, 0), jI.k(), iu.k(), jK
				.k(), jL.k(), gS.k(), jJ.k(), ey.k(), bD.k(), ei.k(), ar.k(), jM.k(), gO.k(), ex.k(), pC.k(), pD.k(), pE.k(), pF(), f6.k(), cf.k(), pG.k(), pH.k(), pI.k(), pJ.k(), 8 === this.bi ? (this.oo = new pK, this.oo.k(cE)) : this.oo = null, b6
				.lv(), io.pN(), 0 === bU.bV[ao.bW] && ex.show(!1, !0), cf.lA(!0), pM.k(), b6.bJ = !0, this.fX || this.ap && this.bA || ae.af.setState(1)
		}, this.b2 = function(pO) {
			ak.al.hI(), this.aq = 0, b6.lt(), ae.af.setState(0), pO || m6.pP.show(), aW.setState(0), aO.aQ(5, 5)
		}, this.pQ = function() {
			return this.fX ? bD.bE || !jL.pR : this.ap && (bD.bE || this.bA)
		}, this.pS = function() {
			return 1 === this.aq && !this.bA
		}
}

function pT() {
	var aC, dZ, da, max, pU, iU, pW, pX, pY, pZ, pa, pb, pc, pd, pV = 1e4;

	function pl(pk, iT, m) {
		var l;
		for (pW[0] = pk, l = 1; l < m; l++) pW[l] = pW[l - 1] + iT, iT = pW[l] >= pV ? (pW[l] = pV - 1, -iT) : pW[l] < 0 ? (pW[l] = 0, -iT) : (iT += 16384 <= aK.random() ? iU : -iU) < -pU ? -pU : pU < iT ? pU : iT
	}

	function pn(eB, eC, po, m) {
		(po ? function(eB, eC, m) {
			var l;
			for (l = 0; l < m; l++) aC[eC * dZ + eB + l] = pW[l]
		} : function(eB, eC, m) {
			var l;
			for (l = 0; l < m; l++) aC[eC * dZ + eB + l * dZ] = pW[l]
		})(eB, eC, m)
	}

	function pr(value, m) {
		var l, ps, ge, jD = value - pW[m - 1];
		if (0 != jD) {
			for (ps = 1 + aF(Math.abs(jD), m - 1), ps = jD < 0 ? -ps : ps, pW[m - 1] = value, ge = (ge = m - 1 - aF(Math.abs(jD), Math.abs(ps))) < 1 ? 1 : m - 2 < ge ? m - 2 : ge, l = m - 2; ge <= l; l--) pW[l] += jD - (m - 1 - l) * ps;
			(jD < 0 ? function(m) {
				var l;
				for (l = m - 2; 1 <= l; l--) pW[l] < 0 && (pW[l] = -pW[l] - 1)
			} : function(m) {
				var l;
				for (l = m - 2; 1 <= l; l--) pW[l] >= pV && (pW[l] = 2 * pV - pW[l] - 1)
			})(m)
		}
	}

	function pv(pw, px, m) {
		for (var l = 0; l < m; l++) pw[l] = px[l]
	}

	function py(a5) {
		for (var l = 0; l < a5.length - 1; l++) a5[l] = a5[l + 1] - a5[l];
		a5[a5.length - 1] = a5[a5.length - 3]
	}

	function pz(q0, gap, q1) {
		pX.push(q0), pY.push(gap), pZ.push(q1)
	}
	this.e7 = function(gE) {
		! function(gE) {
			var l;
			for (dZ = gE[0], da = gE[1], pU = gE[2], iU = gE[3], aC = new Int16Array(dZ * da), max = da < dZ ? dZ : da, pW = new Int16Array(max), pX = [], pY = [], pZ = [], pa = new Array(dZ), pb = new Array(da), l = dZ - 1; 0 <= l; l--) pa[
				l] = !1;
			for (l = da - 1; 0 <= l; l--) pb[l] = !1;
			pc = new Int16Array(dZ), pd = new Int16Array(da)
		}(gE),
		function(m) {
			var pk = aK.random() % pV,
				iT = aK.random() % (2 * pU + 1) - pU;
			pl(pk, iT, m)
		}(max), pv(pd, pW, da), pn(0, 0, !0, dZ);
		var eB, eC, gE = aC[0],
			m = max,
			iT = aK.random() % (2 * pU + 1) - pU;
		for (pl(gE, iT, m), pv(pc, pW, dZ), pn(0, 0, !1, da), py(pc), py(pd), pl(aC[dZ - 1], pc[dZ - 1], da), pn(dZ - 1, 0, !1, da), pl(aC[dZ * (da - 1)], pd[da - 1], dZ), pr(aC[dZ * da - 1], dZ), pn(0, da - 1, !0, dZ), pa[dZ - 1] = pa[0] = !0,
			pb[da - 1] = pb[0] = !0, pz(0, dZ, !0), pz(0, da, !1), ! function() {
				var q3, q0;
				for (;;) {
					if (q3 = function() {
							var l, q3 = pX.length - 1;
							for (l = q3 - 1; 0 <= l; l--) pY[l] > pY[q3] && (q3 = l);
							return q3
						}(), pY[q3] < 5) return;
					q0 = pX[q3] + aF(pY[q3], 2), (pZ[q3] ? function(eB) {
						var m, q6, l, q7 = 0,
							q8 = 0;
						for (; q8 < da - 1;) {
							for (l = q7 + 1; l < da; l++)
								if (pb[l]) {
									q8 = l;
									break
								} m = q8 - q7 + 1, pl(aC[eB + dZ * q7], 0 === q7 ? pc[eB] : pW[q6 - 1] - pW[q6 - 2], m), pr(aC[q8 * dZ + eB], m), pn(eB, q7, !1, m), q6 = m, q7 = q8
						}
						pa[eB] = !0
					} : function(eC) {
						var m, q6, l, q7 = 0,
							q8 = 0;
						for (; q8 < dZ - 1;) {
							for (l = q7 + 1; l < dZ; l++)
								if (pa[l]) {
									q8 = l;
									break
								} m = q8 - q7 + 1, pl(aC[eC * dZ + q7], 0 === q7 ? pd[eC] : pW[q6 - 1] - pW[q6 - 2], m), pr(aC[eC * dZ + q8], m), pn(q7, eC, !0, m), q6 = m, q7 = q8
						}
						pb[eC] = !0
					})(q0), pz(q0, pX[q3] + pY[q3] - q0, pZ[q3]), pY[q3] = q0 - pX[q3] + 1
				}
			}(), eB = 0; eB < dZ; eB++)
			if (!pa[eB])
				for (eC = 0; eC < da; eC++) pb[eC] || ! function(eB, eC) {
					var value = aC[eC * dZ + eB - 1] + aC[(eC - 1) * dZ + eB],
						hO = 2;
					pa[eB + 1] && (hO++, value += aC[eC * dZ + eB + 1]);
					pb[eC + 1] && (hO++, value += aC[(eC + 1) * dZ + eB]);
					aC[eC * dZ + eB] = aF(value, hO)
				}(eB, eC)
	}, this.pi = function() {
		return aC
	}, this.iY = function() {
		aC = null
	}
}

function qA() {
	function qX(player, hW, qg, qh) {
		for (var eG, eH, dZ, da, aI, qi, ih, eZ, m = hW + qh, l = hW; l < m; l += qg)
			if (eG = (eG = bU.qa[player] - l) < 1 ? 1 : eG, eH = bU.qb[player] - l, ih = (ih = bU.qc[player] + l) >= e1.e0 - 1 ? e1.e0 - 2 : ih, da = (eZ = (eZ = bU.qd[player] + l) >= e1.e2 - 1 ? e1.e2 - 2 : eZ) - (eH = eH < 1 ? 1 : eH), ih = (aI =
					aF(aK.random() * (2 * (ih - eG + eZ - eH)), aK.value(100))) <= (dZ = ih - eG) ? (qi = eG + aI, eH) : aI <= dZ + da ? (qi = ih, eH + aI - dZ) : aI <= 2 * dZ + da ? (qi = eG + aI - dZ - da, eZ) : (qi = eG, eH + aI - 2 * dZ - da),
				qf(player, eZ = bX.qe(qi, ih))) return eZ;
		return -1
	}

	function qf(qM, bm) {
		return bX.qk(bm) && (bX.qR(bm) || qM !== (bm = bX.qS(bm)) && qT(qM, bm) && 0 < bU.qB[bm].length)
	}
	this.b8 = function(player) {
		return !(0 === bU.qB[player].length || bU.f8[player] < 100) && fA.al.qC !== fA.al.qD && (fA.al.qE[player] !== fA.al.qF && n.br.qG(player, 203, 32, 16) ? !! function(player) {
			var bm = function(player) {
				var l, qY, qZ, eG = bU.qa[player],
					eH = bU.qb[player],
					nb = bU.qc[player] - eG + 1,
					nc = bU.qd[player] - eH + 1,
					aC = aK.value(100);
				for (l = 0; l < 32; l++)
					if (qY = eG + hS.hT(aK.random() * nb, aC), qZ = eH + hS.hT(aK.random() * nc, aC), qY = bX.qe(qY, qZ), qf(player, qY)) return qY;
				return -1
			}(player);
			if (0 <= bm) return fA.qV.qW(player, bm >> 2);
			if (0 <= (bm = qX(player, 1, 4, 40))) return fA.qV.qW(player, bm >> 2);
			if (0 <= (bm = qX(player, 40, 8, 200))) return fA.qV.qW(player, bm >> 2);
			return
		}(player) && !! function(qM) {
			if (0 === cb.qO[2]) return void console.log("error 325234");
			var qP = cb.qO[1] + p2.qQ[cb.qO[2] - 1] << 2;
			if (bX.qR(qP)) return 1;
			return qP = bX.qS(qP), qM !== qP && !!qT(qM, qP)
		}(player) && function(player) {
			return n.br.qK(player), fA.al.qL(player), !0
		}(player) : void 0)
	}
}

function ln() {
	this.be = function() {
		for (var m = mc, cE = n5, bP = [], l = 0; l < m; l++) {
			var a6 = cE[l];
			bX.bY(a6) && bP.push(a6)
		}
		return bP
	}, this.bl = function() {
		for (var m = mc, cE = n5, bo = 0, bp = bU.bp, l = 0; l < m; l++) bo += bp[cE[l]];
		return bo
	}
}

function lm() {
	function qr(qp) {
		for (var jD = (1 + ao.c3) * bc.result.bO / (1e5 * bc.result.bQ), aw = "", l = 0; l < qp.length; l++) {
			var kL = qp[l].qu * jD;
			aw += "  " + qp[l].name + ": " + n.eU.qv(1e5 * kL)
		}
		aw.length && (ar.c6(0, "The following clans have won these glorious points:", 45, 0, n.color.qw(225, 240, 255), ac.c8, -1, !1), ar.c6(0, aw.trim(), 45, 0, n.color.qw(225, 240, 255), ac.c8, -1, !1))
	}
	this.bb = function(bP) {
		var ql = dO.lM[bj.nl()],
			qm = dO.g2[ql],
			qm = (ei.qn("Team " + qm, 2, 1, 12), ar.c6(0, "Team " + qm + " won the game!", 40, 0, ac.c7, ac.c8, -1, !1), ao.ba && n.br.c1(ao.bW) && (bc.result.bS += (n.eU.qt(bU.l7[ao.bW]) ? 2 : 1) * bc.result.bO * (1 + ao.c3) * bU.bp[ao.bW] / bc
				.result.bQ), function(cE) {
				var qp = [],
					username = bU.l7,
					m = cE.length;
				loop: for (var l = 0; l < m; l++) {
					var a6 = cE[l],
						qx = n.eU.qt(username[a6]);
					if (qx) {
						for (var v = qp.length - 1; 0 <= v; v--)
							if (qp[v].name === qx) {
								qp[v].qu += bU.bp[a6];
								continue loop
							} qp.push({
							name: qx,
							qu: bU.bp[a6],
							qy: dO.lN[a6]
						})
					}
				}
				return qp.sort(function(v, a8) {
					return a8.qu - v.qu
				}), qp
			}(bP));
		qm.length && (2 === ao.bZ ? qr(qm) : qr(function(qp, ql) {
			for (var l = qp.length - 1; 0 <= l; l--) dO.lM[qp[l].qy] !== ql && qp.splice(l, 1);
			return qp
		}(qm, ql)))
	}
}

function qz() {
	var r0, r1, r2;

	function r9(l) {
		var button = eD.r3[l],
			eB = button.eB,
			eC = button.eC,
			dZ = button.dZ,
			da = button.da;
		eL.fillStyle = button.r6, eL.fillRect(eB, eC, dZ, da), l === r0 && (eL.fillStyle = r2, eL.fillRect(eB, eC, dZ, da)), eL.lineWidth = dY.iA, eL.strokeStyle = r1, eL.strokeRect(eB, eC, dZ, da),
			function(button) {
				var eB = button.eB,
					eC = button.eC,
					dZ = button.dZ,
					da = button.da;
				n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.font = button.font, eL.fillStyle = r1, eL.fillText(button.aZ, Math.floor(eB + dZ / 2), Math.floor(eC + da / 2 + .1 * button.fontSize))
			}(button)
	}
	this.dZ = 0, this.da = 0, this.eC = 0, this.gap = 0, this.k = function() {
		r0 = -1, r1 = ac.c7, r2 = "rgba(255,255,255,0.16)", this.r3 = new Array(7), this.da = Math.floor((ae.af.dW() ? .123 : .093) * b9.dX), this.dZ = Math.floor((ae.af.dW() ? 3.96 : 4.2) * this.da), this.gap = Math.floor(.025 * this.dZ);
		var r4 = Math.floor(.26 * this.da),
			r5 = n.o.dc(1, r4);
		this.r3[0] = {
			eB: 0,
			eC: 0,
			dZ: Math.floor(.6 * this.dZ - this.gap / 2),
			da: this.da,
			aZ: "Multiplayer",
			font: r5,
			r6: "rgba(22,88,22,0.8)",
			fontSize: r4
		}, r4 = Math.floor(.18 * this.da), r5 = n.o.dc(1, r4), this.r3[1] = {
			eB: 0,
			eC: 0,
			dZ: this.dZ - this.r3[0].dZ - this.gap,
			da: this.da,
			aZ: "Single Player",
			font: r5,
			r6: "rgba(22,88,88,0.8)",
			fontSize: r4
		}, this.r3[2] = {
			eB: 0,
			eC: 0,
			dZ: this.dZ,
			da: Math.floor(.3 * this.da),
			aZ: "",
			font: this.r3[1].font,
			r6: "rgba(100,0,0,0.8)",
			fontSize: this.r3[1].fontSize
		}, this.r3[3] = {
			eB: 0,
			eC: 0,
			dZ: this.dZ,
			da: this.da,
			aZ: "Back",
			font: this.r3[0].font,
			r6: "rgba(0,0,0,0.8)",
			fontSize: this.r3[0].fontSize
		}, this.r3[4] = {
			eB: 0,
			eC: 0,
			dZ: this.dZ,
			da: Math.floor(.3 * this.da),
			aZ: "The game was updated!",
			font: this.r3[1].font,
			r6: "rgba(100,0,0,0.8)",
			fontSize: this.r3[1].fontSize
		}, this.r3[5] = {
			eB: 0,
			eC: 0,
			dZ: this.r3[0].dZ,
			da: Math.floor(.8 * this.da),
			aZ: "Reload",
			font: this.r3[0].font,
			r6: "rgba(0,100,0,0.8)",
			fontSize: this.r3[0].fontSize
		}, this.r3[6] = {
			eB: 0,
			eC: 0,
			dZ: this.r3[1].dZ,
			da: this.r3[5].da,
			aZ: "Back",
			font: this.r3[0].font,
			r6: "rgba(0,0,0,0.8)",
			fontSize: this.r3[0].fontSize
		}, this.r7()
	}, this.r7 = function() {
		this.eC = Math.floor(.54 * b9.da), this.r3[0].eB = Math.floor(.5 * b9.dZ - .5 * this.dZ), this.r3[1].eB = this.r3[0].eB + this.r3[0].dZ + this.gap, this.r3[2].eB = this.r3[3].eB = this.r3[0].eB, this.r3[4].eB = this.r3[5].eB = this.r3[0]
			.eB, this.r3[6].eB = this.r3[1].eB, this.r3[0].eC = Math.floor(.54 * b9.da), this.r3[1].eC = this.r3[0].eC, this.r3[2].eC = Math.floor((b9.da - this.r3[2].da - this.r3[3].da - this.gap) / 2), this.r3[3].eC = this.r3[2].eC + this.r3[2]
			.da + this.gap, this.r3[4].eC = Math.floor((b9.da - this.r3[4].da - this.r3[5].da - this.gap) / 2), this.r3[5].eC = this.r3[6].eC = this.r3[4].eC + this.r3[4].da + this.gap
	}, this.r8 = function() {
		r9(0), r9(1)
	}, this.rA = function() {
		r9(2), r9(3)
	}, this.rB = function() {
		r9(4), r9(5), r9(6)
	}, this.eE = function(eB, eC, lA) {
		var l = -1;
		return 0 === aW.aX() ? l = this.rC(eB, eC, 0, 2) : 3 === aW.aX() ? l = this.rC(eB, eC, 3, 1) : 5 === aW.aX() && (l = this.rC(eB, eC, 5, 2)), r0 !== l && (r0 = l, lA) && (b6.bJ = !0), -1 !== l && (jG.rD(), !0)
	}, this.rC = function(eB, eC, q7, size) {
		for (var l = q7; l < q7 + size; l++)
			if (eB >= this.r3[l].eB && eC >= this.r3[l].eC && eB <= this.r3[l].eB + this.r3[l].dZ && eC <= this.r3[l].eC + this.r3[l].da) return l;
		return -1
	}
}

function rF() {
	this.hr = function(rG, b4, rH) {
		var hZ = rG.height,
			dH = n.o.j7(hZ, hZ),
			dF = n.o.getContext(dH);
		return function(dZ, dF, rH) {
			dF.fillStyle = rH, dF.beginPath(), dF.arc(dZ / 2, dZ / 2, .47 * dZ, 0, 2 * Math.PI), dF.fill()
		}(hZ, dF, rH), dF.drawImage(rG, -b4 * hZ, 0), dH
	}, this.rJ = function(rK) {
		var hZ = rK.height,
			dF = n.o.getContext(rK, !0),
			oB = dF.getImageData(0, 0, hZ, hZ);
		return n.gG.oD(oB.data, hZ, hZ, .9), dF.putImageData(oB, 0, 0), rK
	}
}

function rL() {
	var rO, l, nD = document.createElement("div"),
		rM = document.createElement("div"),
		rN = document.createElement("div"),
		nF = document.createElement("div"),
		r3 = [],
		rP = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		ho = [1, 0, 2];

	function rQ(l) {
		aO.aQ(8, aO.gV().h1, new fh(21, {
			rT: ho[l],
			rU: 0,
			rV: 9
		}))
	}
	for (this.show = function() {
			this.dd(aO.al.rW), document.body.appendChild(nD)
		}, this.fw = function() {
			document.body.removeChild(nD)
		}, this.dd = function(rW) {
			for (var l = 0; l < r3.length; l++) r3[ho[l]].button.innerHTML = rP[l] + "<br>" + rW[l]
		}, this.resize = function() {
			var l, n9 = dY.gap,
				da = n.o.rX(.085),
				dZ = Math.min(4 * da, b9.dZ - 2 * n9),
				m = r3.length;
			for (n.o.rY(nD, n9, b9.da - n9 - da, dZ, da), n.o.p(nD), n.o.p(rM, 6), l = 0; l < m - 1; l++) n.o.p(r3[l].button, 6);
			for (l = 0; l < m; l++) r3[l].button.style.fontSize = n.o.rZ(.22 * da);
			if (!rO) {
				if (!d7.g6()) return;
				(rO = d7.get(14)).style.width = "24%", rO.style.position = "absolute", rM.appendChild(rO)
			}
			rO.style.left = n.o.nR(0), rO.style.top = "7%"
		}, nD.style.position = "absolute", rM.style.width = "25%", rM.style.height = "100%", rM.style.backgroundColor = ac.lC, rN.style.position = "absolute", rN.style.width = "75%", rN.style.height = "100%", rN.style.backgroundColor = ac.lC, rN
		.style.top = rN.style.right = n.o.nR(0), rN.style.overflowX = "auto", rN.style.overflowY = "hidden", rN.style.whiteSpace = "nowrap", nF.style.height = nF.style.maxHeight = "100%", r3.push(new aa("", function() {
			rQ(0)
		}, ac.rR)), r3.push(new aa("", function() {
			rQ(1)
		}, ac.ec)), r3.push(new aa("", function() {
			rQ(2)
		}, ac.rS)), l = 0; l < r3.length; l++) r3[l].button.style.height = "100%", nF.appendChild(r3[l].button);
	rN.appendChild(nF), nD.appendChild(rM), nD.appendChild(rN)
}

function ra() {
	var rb, a5;
	this.k = function() {
		for (var l = (a5 = new Uint16Array(101)).length - 1; 0 <= l; l--) a5[l] = aF(32768 * l, 100);
		this.gr(0)
	}, this.value = function(a6) {
		return a5[a6]
	}, this.gq = function() {
		return aF(rb - 1, 2)
	}, this.gr = function(gf) {
		rb = 2 * gf % 32768 + 1
	}, this.random = function() {
		return rb = 167 * rb % 32768
	}, this.oW = function(rc) {
		return aF(rc * this.random(), 32768)
	}, this.rd = function(a6) {
		return 0 !== a6 && this.random() < this.value(a6)
	}
}

function re() {
	var rf, he = 8,
		rg = new Array(2);

	function rh(b4) {
		var hZ = he + 4,
			dH = n.o.j7(hZ, hZ),
			dF = n.o.getContext(dH, !0),
			oB = n.o.getImageData(dF, hZ, hZ),
			d = oB.data;
		return ri(d, hZ + 1, b4), ri(d, hZ + 2, b4), ri(d, 2 * hZ + 1, b4), ri(d, 2 * hZ - 3, b4), ri(d, 2 * hZ - 2, b4), ri(d, 3 * hZ - 2, b4), ri(d, hZ * (hZ - 3) + 1, b4), ri(d, hZ * (hZ - 2) + 1, b4), ri(d, hZ * (hZ - 2) + 2, b4), ri(d, hZ * (
			hZ - 2) - 2, b4), ri(d, hZ * (hZ - 1) - 3, b4), ri(d, hZ * (hZ - 1) - 2, b4), dF.putImageData(oB, 0, 0), dH
	}

	function ri(d, rj, b4) {
		rj *= 4;
		d[rj] = 255, d[1 + rj] = 255, d[2 + rj] = b4, d[3 + rj] = 255
	}

	function j7(player) {
		var dH = n.o.j7(he, he);
		return function(dF, player) {
			var eB, eC, nb, rj, rm, dS, hZ = he,
				oB = n.o.getImageData(dF, hZ, hZ),
				d = oB.data,
				mr = (hZ >> 1) - .5,
				ro = bX.rp(player),
				rq = n.rr.rs(ro, .5);
			n.rr.rt(ro, rq, 300) || n.rr.ru(ro, 100);
			for (eC = 0; eC < hZ; eC++)
				for (eB = 0; eB < hZ; eB++) dS = (hZ - 1.5) * (hZ - 1.5) / 4, rm = (nb = (nb = eB - mr) * nb + (nb = eC - mr) * nb) <= (hZ - 4.5) * (hZ - 4.5) / 4 ? rq : ro, d[rj = 4 * (eC * hZ + eB)] = rm[0], d[1 + rj] = rm[1], d[2 + rj] = rm[
					2], d[3 + rj] = dS < nb ? 0 : 255;
			dF.putImageData(oB, 0, 0)
		}(n.o.getContext(dH, !0), player), dH
	}
	this.k = function() {
		rf = new Array(ao.l4), rg[0] = rh(255), rg[1] = rh(0)
	}, this.eK = function() {
		var l, player, rv, cS, rw, kH, s0, s2, s3, s4 = fA.al.s4,
			s5 = fA.al.s5,
			s6 = fA.al.s6,
			s7 = rf,
			s8 = ao.bW,
			s9 = -1,
			m = fA.al.qC,
			sA = b9.dZ,
			sB = b9.da,
			sC = e1.e0 << 4,
			sE = sF,
			ge = sE / he,
			eG = sG / sE,
			eH = sH / sE,
			nb = (sA + sG) / sE - eG,
			nc = (sB + sH) / sE - eH,
			dF = eL;
		for (fA.bd.sI(ao.bW, fA.sJ.sK) && (s9 = cb.qO[3]), dF.fillStyle = ac.c7, n.o.textAlign(dF, 1), n.o.textBaseline(dF, 1), l = 0; l < m; l++) player = s5[l] >> 3, cS = s6[l], rv = .625 + .125 * Math.sqrt(Math.sqrt(cS)), rw = (kH = s4[l]) %
			sC / 16 - rv, kH = sB * (Math.floor(kH / sC) / 16 - rv - eH) / nc, s0 = -2 * (s3 = sE * rv) * (1 + (s2 = +(player === s8)) / 8), s2 = s2 * s3 / 4, (s3 = sA * (rw - eG) / nb) < s0 || kH < s0 || sA + s2 < s3 || sB + s2 < kH || (rw =
				rv * sE, dF.imageSmoothingEnabled = (s0 = 2 * rv * ge) < 3, void 0 === (s2 = s7[player]) && (s7[player] = s2 = j7(player)), player === s8 && (dF.setTransform(s0, 0, 0, s0, s3 - 2 * s0, kH - 2 * s0), dF.drawImage(rg[+(l === s9)],
					0, 0)), dF.setTransform(s0, 0, 0, s0, s3, kH), dF.drawImage(s2, 0, 0), (rv = Math.floor(function(cS) {
					if (cS < 1e3) return .42;
					if (cS < 1e4) return .34;
					if (cS < 1e6) return .26;
					if (cS < 1e8) return .19;
					return .15
				}(cS) * rw)) < 6) || (dF.setTransform(1, 0, 0, 1, 0, 0), dF.font = n.o.dc(1, rv), dF.fillText(n.eU.eV(cS), s3 + rw, kH + rw + .1 * rv));
		dF.imageSmoothingEnabled = !1, dF.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function sM() {
	function sP(a5) {
		if (0 === a5.length) by.iH.dd(116, "");
		else {
			for (var sR = a5[0], l = 1; l < a5.length; l++) sR += ";" + a5[l];
			by.iH.dd(116, sR)
		}
	}
	this.sN = function() {
		by.bz.data[110].value.length && (by.bz.data[106].value = by.bz.data[110], by.iH.dd(110, ""), this.k0())
	}, this.k0 = function() {
		var a5 = by.bz.data[116].value.split(";");
		for (a5.length % 2 == 1 && a5.pop(), a5.unshift(by.bz.data[106].value), a5.unshift(by.bz.data[105].value), l = 2; l < a5.length; l += 2)
			if (a5[l] === a5[0]) {
				a5.splice(l, 2);
				break
			} for (var sO = [], l = 0; l < a5.length; l += 2) sO.push(a5[l]);
		sP(a5), by.bz.data[117].value = 0, by.bz.data[117].sQ = sO
	}, this.k7 = function(b4) {
		by.bz.data[117].sQ.splice(b4, 1), by.bz.data[117].value = Math.min(b4, by.bz.data[117].sQ.length - 1);
		var a5 = by.bz.data[116].value.split(";");
		a5.splice(2 * b4, 2), sP(a5)
	}, this.k8 = function(b4) {
		var a5 = by.bz.data[116].value.split(";");
		return {
			k9: a5[2 * b4],
			password: a5[2 * b4 + 1]
		}
	}, this.sS = function() {
		var aC = hS.i7(by.bz.data[121].value, -1, 262143);
		return aC = -1 === aC ? ~~(262144 * Math.random()) : aC
	}
}

function iR() {
	var x;
	10 === e1.dh ? x =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === e1.dh ? x =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === e1.dh ? x =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === e1.dh ? x =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === e1.dh ? x =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === e1.dh ? x =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === e1.dh ? x =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === e1.dh ? x =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === e1.dh ? x =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === e1.dh && (x =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sT).a7(x)
}

function ll() {
	function sV() {
		if (2 === ao.aq) return 1;
		gS.sd(), ao.aq = 2, ao.eu = ao.mz
	}

	function sY() {
		bc.result.bb(), bc.result.c5(), ar.se(!0), ar.sf(247, 0), jI.lA(!0), ey.lA(!0), gS.lA(), jL.sg(), ao.fX && b6.lr.sh(), b6.bJ = !0, bH.si(), ae.af.setState(0)
	}
	this.sU = function() {
		sV() || (ao.bZ = 2, bc.result.bT(), ar.sW(0, 59), io.sX(2700), ex.show(!1, !1, !0), sY())
	}, this.n2 = function(sZ) {
		sV() || (ao.bZ = 1, 8 === ao.bi ? (ao.bn = sZ < 0 ? bU.bp[0] >= bU.bp[1] ? 0 : 1 : sZ, ao.ba = +(ao.bn === ao.bW), ao.ba ? ar.sW(ao.bn, 2) : ar.sW(1 - ao.bW, 3), ao.oo.sa(ao.bn)) : ao.fC ? (ao.ba = +(dO.lN[ao.bW] === bj.nm()), 9 === ao
			.bi ? ar.sb() : io.sX(2700)) : (ao.bn = c4[0], ao.ba = +(ao.bn === ao.bW), ar.sc(ao.bn)), ex.show(1 === ao.ba, !1), sY())
	}
}

function cO() {
	this.bh = function() {
		for (var a6, m = mc, cE = n5, bx = bU.bx, sj = this.ew(), l = 0; l < m; l++) a6 = cE[l], bX.bY(a6) && (bx[a6] = sj);
		var sk = bU.sk,
			sl = bU.sl,
			sm = bU.sm,
			sn = bU.sn,
			m = ao.cW;
		for (l = 0; l < m; l++)(0 === sn[l] || sm[l] < 1 || 2 * sk[l] > 3 * (sl[l] + sm[l])) && (bx[l] = 0);
		var bO = 0;
		for (l = 0; l < m; l++) bO += 0 < bx[l];
		return bO
	}, this.ew = function() {
		return Math.min(65535, b6.f2())
	}
}

function so() {
	var sp = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.sq = function(b5) {
		var ss, x = new Date(b5.getTime() - 6e4 * b5.getTimezoneOffset()).toUTCString();
		return x.length < 12 || (x = x.substring(5, x.length), 0 === (b5 = b5.getTimezoneOffset())) ? x : (ss = (b5 < 0 ? "+" : "-") + hS.hT(Math.abs(b5), 60), 0 == (b5 = Math.abs(b5) % 60) ? x + ss : x + ss + ":" + (b5 < 10 ? "0" : "") + b5)
	}, this.st = function(b5) {
		var x = b5.toUTCString();
		return x.length < 12 ? x : function(b5) {
			return sp[b5.getUTCDay()]
		}(b5) + ", " + x.substring(5, x.length - 4)
	}
}

function sv() {
	var sw = new Uint8Array(78);
	this.k = function() {
		var l;
		for (sw[50] = 37, l = 0; l < 10; l++) sw[l + 3] = l + 1;
		for (l = 0; l < 26; l++) sw[l + 20] = l + 11, sw[l + 52] = l + 38
	}, this.sx = function(x) {
		return x.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.sy = function(x, size) {
		if ((x = this.sx(x)).length > size) return x.substring(0, size);
		for (; x.length < size;) x += "_";
		return x
	}, this.sz = function(x) {
		for (var t0 = sw, m = x.length, a5 = new Uint8Array(m), l = 0; l < m; l++) a5[l] = t0[x.charCodeAt(l) - 45];
		return a5
	}, this.t1 = function(aG) {
		t2.e7(6 * aG.length), this.t3(aG), kU.k(t2.hA)
	}, this.t3 = function(aG) {
		for (var m = aG.length, dZ = t2, l = 0; l < m; l++) dZ.hN(6, aG[l])
	}, this.t4 = function(x) {
		this.t3(this.sz(x))
	}, this.t5 = function(x, size) {
		this.t3(this.sz(this.sy(x, size)))
	}
}

function t6(t7, t8, f4) {
	var nD, l, t9 = new Array(t8.length),
		cq = new Array(t8.length);
	for (this.resize = function() {
			for (var m = t8.length, l = 0; l < m; l++) 0 < l && n.o.p(t9[l], 8)
		}, nD = document.createElement("div"), t7.style.overflowX = "hidden", t7.style.overflowY = "auto", ! function() {
			var l, hR, m = t8.length;
			for (l = 0; l < m; l++) {
				t9[l] = document.createElement("div"), t9[l].style.display = "flex", t9[l].style.width = "100%", t9[l].style.height = "2.5em", t9[l].style.backgroundColor = l % 2 == 0 ? ac.tB : ac.tC, cq[l] = new Array(t8[0].length);
				for (var v = 0; v < t8[0].length; v++) cq[l][v] = hR = document.createElement("div"), hR.style.display = "flex", hR.style.width = "100%", hR.style.height = "100%", hR.style.justifyContent = "center", hR.style.alignItems = "center", hR
					.innerHTML = t8[l][v], 0 < v && n.o.p(hR, 4), t9[l].appendChild(hR)
			}
		}(), l = 0; l < t8.length; l++) nD.appendChild(t9[l]);
	t7.appendChild(nD)
}

function tD() {
	this.tE = function(rT, rU, rV) {
		t2.e7(75), t2.hN(1, 0), t2.hN(6, 21), t2.hN(6, rT), t2.hN(1, +(rU < 0)), t2.hN(1, +(rV < 0)), t2.hN(30, Math.abs(rU)), t2.hN(30, Math.abs(rV)), ak.al.send(0, t2.hA)
	}, this.tF = function(rT, tG, tH) {
		t2.e7(18 + 16 * tG.length + 30), t2.hN(1, 0), t2.hN(6, 22), t2.hN(6, rT), ak.h8.tI(tG), t2.hN(30, tH), ak.al.send(0, t2.hA)
	}, this.tJ = function(tK, qp) {
		for (var m = qp.length, tL = 0, l = 0; l < m; l++) tL += qp[l].length;
		for (t2.e7(21 + 3 * m + 16 * tL), t2.hN(1, 0), t2.hN(6, 23), t2.hN(3, tK), t2.hN(4, m), t2.hN(7, tL), l = 0; l < m; l++) t2.hN(3, qp[l].length), tM.kX.t4(qp[l]);
		ak.al.send(0, t2.hA)
	}, this.tN = function(tK, rU, rV) {
		t2.e7(52), t2.hN(1, 0), t2.hN(6, 24), t2.hN(3, tK), t2.hN(1, +(rU < 0)), t2.hN(1, +(rV < 0)), t2.hN(20, Math.abs(rU)), t2.hN(20, Math.abs(rV)), ak.al.send(0, t2.hA)
	}
}

function tO() {
	this.lp = ["", ""], this.aZ = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
		"Teslim oldunuz!", "Oyun berabere bitti!", "Hata: {0}", "New Game Update", "{0} ölümsüzleştirildi!", "Sahipsiz Arazi {0}", "Oyuncu: {0}   Bakiye: {1}   Bölge: {2}   Koordinatlar: {3}", "Dağlar {0}", "Su {0}",
		"Gemi Sahibi: {0}   Güç: {1}", " {0} için Mesaj: ", "{0}: ", "İnsanlık zafer kazandı! Ölüler geri püskürtüldü.", "Direniş", "İnsanlığın çağı sona erdi, durdurulamayan ölülerin akını tarafından istila edildi.", "Virüs",
		"Barışa razı olmak oyunu beraberlikle sonuçlandırır!", "{0} ile saldırmazlık anlaşması imzaladınız.", "{0} ile saldırmazlık anlaşması imzalamasını istediniz.", "{0} saldırmazlık anlaşmasını kabul etti.",
		"{0} saldırmazlık anlaşması talep etti.", "{0} oyuncuya {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırması için istekte bulundunuz.", "{0}, {1}'e saldırmanızı istedi.", "Bakiyeniz çok düşük!",
		"{0} kaynak {1}'e ihraç ettiniz.", "{0} birim vergi kesintisi yapıldı.", "{0}, {1} kaynak ile sizi destekledi.", "Bir bot ({0}), {1} kaynak ile sizi destekledi.", "Harita: {0}", "Boyut: {0}x{1}", "Toplam Pikseller: {0}",
		"Arazi: {0} ({1})", "Su: {0} ({1})", "Dağlar: {0} ({1})", "İnsan oyunculara karşı tam gönderim engellendi.", "{0} ve diğer {1} oyuncu silindi.", "{0} ve diğer {1} oyuncu oyunu terk etti.", "{0} ve diğer {1} oyuncu teslim oldu.",
		"{0}, {1} tarafından silindi.", "{0} oyunu terk etti.", "{0} teslim oldu.", "{0} oyunu katıldı.", "Sunucudan Yanıt Yok", "Hesap başarıyla kaydedildi!", "Hesap", "Sunucu Bulunamadı", "Oyun için teşekkürler.", "Lütfen çerezleri kabul edin",
		"Geçersiz Şifre Formatı", "Geçersiz Yeniden Oynatma Formatı", "Lobi Zaman Aşımı", "Geçersiz Kullanıcı Adı", "{4224}Lobby Error", "İstemci Yanıtı Yok", "Tanımsız", "Hata", "LİDER TABLOSU", "YENILDINIZ", "SİZİ İHALE ETTİRENLER",
		"OYUNU KAZANAN", "HARİTA:", "İnsanlar", "Oyuncular", "Botlar", "İzleyiciler", "Eşik", "Meslek", "Faiz Oranı", "Gelir", "Zaman", "Oyundan Çık", "Daha Fazla", "Ayarlar", "Yeniden Oyna", "Bağlantılar", "Oyun Versiyonu", "Verileri Sil",
		"Gizlilik Ayarları", "Kapat", "Oyun İstatistikleri", "Teslim Ol", "Oyunu Yeniden Başlat", "Menü", "Geri", "Tümünü Seç", "Kopyala", "Temizle", "Başlat", "Kaydet & Kapat", "Sıfırla", "Bilgi",
		"Çözünürlüğü artırmanın, minimum yazı tipi boyutunu küçültmenin ve metin işleme hızını artırmanın sistem üzerinde yük oluşturabileceği ve oyun tepkiselliğini azaltabileceği konusunda uyarı.", "Dil", "Çözünürlük", "Mobil Dostu",
		"Yazı Tipi", "Kullanıcı Adlarını Gizle", "Bakiyeyi Yukarıda Göster", "Yakınlaştırma Düğmelerini Gizle", "Minimum Yazı Tipi Boyutu", "Lobi", "Metin İşleme Hızı", "Düşük", "Orta", "Yüksek", "Çok Yüksek", "Küçük", "Çok Küçük", "Proxy Lobi",
		"Yavaş", "Normal", "Hızlı", "Etkin", "Yeni Oyun Güncellemesi", "Oyun güncellendi! Lütfen oyunu yeniden yükle.", "Yeniden Yükle", "Hesabım", "Hesabı Sil", "", "", "Barış üzerinde anlaşılırsa, en büyük toprak sahibi oyunu kazanır."
	]
}

function tP() {
	var gap, mT, eB = [0, 0, 0, 0, 0],
		eC = [0, 0, 0, 0, 0],
		tQ = [1, 1, 1, 1, 1],
		aC = [!0, !0, !1, !1, !1],
		a2 = (this.nX = [!0, !0, !1, !1, !1], null);
	this.gR = function(dH, tR) {
		a2 = dH, aC = tR, mT = [fj.fk, fj.fl, fj.tS, fj.fm, fj.tT], this.k()
	}, this.k = function() {
		if (d7.g6()) {
			var l, en = Math.floor((ae.af.dW() ? .261 : .195) * b9.dX),
				eo = Math.floor(.9 * en),
				jU = Math.floor(.17 * eo);
			if (gap = ae.af.dW() ? 2 * dY.gap : dY.gap, tQ[0] = en / a2[0].width, tQ[1] = eo / a2[1].width, tQ[2] = jU / a2[2].height, tQ[3] = jU / a2[3].height, tQ[4] = jU / a2[4].height, tQ[3] *= 1.07, eB[0] = gap, eB[1] = gap, eB[2] = gap, eB[
					3] = gap, eB[4] = Math.floor(2 * gap + tQ[3] * a2[3].width), eC[0] = gap, eC[1] = eC[0] + gap + tQ[0] * a2[0].height, eC[2] = eC[1] + gap + tQ[1] * a2[1].height, eC[3] = eC[2] + gap + tQ[2] * a2[2].height, eC[4] = eC[3], !aC[
					0])
				for (l = 0; l < 5; l++) eC[l] -= tQ[0] * a2[0].height + gap;
			if (!aC[1])
				for (l = 2; l < 5; l++) eC[l] -= tQ[1] * a2[1].height + gap
		}
	}, this.hY = function() {
		return !(7 === aW.aX() && ae.af.dW())
	}, this.eA = function(is, it, tU) {
		if (a2 && this.hY())
			for (var l = aC.length - 1; 0 <= l; l--)
				if (aC[l] && this.nX[l] && eB[l] < is && eC[l] < it && is < eB[l] + tQ[l] * a2[l].width && it < eC[l] + tQ[l] * a2[l].height) return aO.aQ(9, aO.aP, new tV("You are leaving Territorial.io.", n.o.tW(mT[l]))), !0;
		return !1
	}, this.eK = function() {
		if (a2 && this.hY()) {
			var l;
			for (eL.imageSmoothingEnabled = !0, l = 0; l < 5; l++) aC[l] && this.nX[l] && (eL.setTransform(tQ[l], 0, 0, tQ[l], eB[l], eC[l]), eL.drawImage(a2[l], 0, 0));
			eL.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function kK(iE, title, fz) {
	function click() {
		var value = 1 - iE.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, by.iH.dd(iE.b4, value), fz(value)
	}
	var i;
	title = title || aS.aZ[121], fz = fz || function() {}, this.i = document.createElement("p"), (i = this.i).textContent = (iE.value ? "🟢 " : "⚪ ") + title, i.style.margin = "0", i.style.marginBottom = "0.5em", i.style.cursor = "pointer", i
		.addEventListener("click", click)
}

function tX() {
	"function" != typeof Math.log2 && (Math.log2 = function(eB) {
		return Math.log(eB) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eB) {
		return Math.log(eB) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eB) {
		return 0 < eB ? 1 : eB < 0 ? -1 : 0
	})
}

function tY() {
	this.o = new tZ, this.rr = new ta, this.br = new tb, this.eU = new tc, this.eg = new gX, this.gG = new oA, this.df = new rF, this.color = new td, this.te = new so, this.k = function() {
		this.o.tf()
	}
}

function jr() {
	var h;
	this.tg = [], this.h = document.createElement("div"), this.js = function(x, marginTop) {
		var title = document.createElement("h2");
		title.textContent = x, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.h.appendChild(title)
	}, this.jz = function(x) {
		var th = document.createElement("p");
		return th.textContent = x, th.style.fontSize = "0.75em", th.style.lineHeight = "1.2em", th.style.marginBottom = "0", this.h.appendChild(th), th
	}, this.kC = function(ti, fontSize) {
		var h = document.createElement("div");
		h.innerHTML = ti, h.style.fontSize = fontSize || "1em", h.style.lineHeight = "1.2em", this.h.appendChild(h)
	}, this.kB = function(k1) {
		for (var k6 = k1.k6, m = k6.length, l = 0; l < m; l++) this.h.appendChild(k6[l])
	}, this.ju = function(tj) {
		this.tg.push(tj), this.h.appendChild(tj.i)
	}, this.resize = function() {
		for (var m = this.tg.length, l = 0; l < m; l++) this.tg[l].resize && this.tg[l].resize()
	}, (h = this.h).style.position = "absolute", h.style.height = "auto", h.style.padding = "0.5em"
}

function tk() {
	function aY(ty, tl) {
		if (function(ty, u4) {
				var tm = p2.u3(ty),
					u5 = Math.abs(p2.u6(u4) - p2.u6(tm)),
					tm = Math.abs(p2.u8(u4) - p2.u8(tm));
				return 0 !== Math.max(u5, tm) && (function(tx, ty, u5, u7) {
					var uA = p2.uB(tx),
						tx = p2.uD(tx),
						uE = p2.uB(ty),
						ty = p2.uD(ty),
						uE = uE - uA,
						ty = ty - tx,
						uI = Math.abs(uE),
						uJ = Math.abs(ty),
						uE = 0 < uE ? 1 : 3,
						ty = 0 < ty ? 2 : 0;
					uJ < uI ? uM(uA, tx, uA + uI, tx + uJ, uE, ty, u5) : uM(tx, uA, tx + uJ, uA + uI, ty, uE, u7)
				}(ty, p2.tu(u4), u5, tm), !0)
			}(ty, tl)) {
			if (0 === cb.u0[0]) return !!bX.tr(tl << 2);
			if (function(u4) {
					if (bX.tr(u4 << 2)) return 1;
					return function(u4) {
						var l, q1, uN = fA.al.uN,
							uS = p2,
							m = cb.u0[0],
							uT = 4 * u4;
						for (l = m - 1; 0 <= l; l--)
							if (q1 = uN[l], uT = uS.uU(uT, q1 + 2 & 3), bX.tr(uT)) return cb.u0[0] = l, cb.qO[1] = uT >> 2, cb.qO[2] = 1 + q1, 1;
						return
					}(u4)
				}(tl)) {
				var l, tl = p2.u3(ty),
					d = uW,
					uN = fA.al.uN,
					m = cb.u0[0] - 1,
					uT = 4 * tl,
					uX = p2.uX;
				for (l = 0; l < m; l++)
					if (uT += uX[uN[l]], 0 !== d[uT + 3] || 2 !== d[uT + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function uM(uA, uC, uE, uF, uK, uL, u5) {
		for (var eC, uN = fA.al.uN, bm = 0, uO = 0, da = uF - uC, dZ = uE - uA, uP = uA % 16, l = 1; l <= u5; l++) uN[bm++] = uK, uN[bm] = uL, bm += (eC = (da * (uP + (l << 4)) + .5) / dZ >> 4) - uO, uO = eC;
		cb.uQ(cb.u0, bm)
	}
	this.qW = function(player, tl) {
		var q1, tm, tn = p2.to(player, tl);
		return tn !== tl && (q1 = p2.tp(tn, tl), tm = p2.tq(tn, q1), !(!bX.tr(tm << 2) && (q1 = p2.ts(tn, tl, q1), tm = p2.tq(tn, q1), bX.tt(tm << 2) || !bX.tr(tm << 2)) || (cb.qO[0] = tm, cb.qO[1] = tl, cb.qO[2] = 0, !aY(p2.tu(tm), tl)) || 0 !==
			cb.qO[2] && p2.tv(player, cb.qO[1] + p2.qQ[cb.qO[2] - 1] << 2)))
	}, this.tw = function(tl) {
		var tx = fA.al.s4[cb.qO[3]];
		return cb.qO[1] = tl, cb.qO[2] = 0, aY(tx, tl)
	}
}

function uY() {
	var fH, jg, cq, jq;
	this.show = function() {
			fH.show(), this.resize()
		}, this.fw = function() {
			fH.fw()
		}, this.resize = function() {
			fH.resize(), jg.resize()
		}, this.fx = function(a2) {
			2 === a2 && fH.fy[0].fz()
		}, fH = new fd("⚙️ " + aS.aZ[81], [new aa("💾 " + aS.aZ[97], function() {
			aO.aQ(1)
		}, ac.ah), new aa("🔄 " + aS.aZ[98], function() {
			aO.fT(), by.iH.m1(), aO.aQ(2)
		})]), cq = [], (jq = new jr).js(aS.aZ[99]), jq.jz(aS.aZ[100]), cq.push(jq), (jq = new jr).js(by.bz.data[0].title), jq.kB(new kA(by.bz.data[0])), cq.push(jq), (jq = new jr).js(by.bz.data[10].title), jq.kB(new kA(by.bz.data[10])), cq.push(jq),
		(jq = new jr).js(by.bz.data[1].title), jq.kB(new kA(by.bz.data[1])), cq.push(jq), (jq = new jr).js(by.bz.data[9].title), jq.kB(new kA(by.bz.data[9])), cq.push(jq), (jq = new jr).js(by.bz.data[11].title), jq.kB(new kA(by.bz.data[11])), cq
		.push(jq), (jq = new jr).js(by.bz.data[2].title), jq.ju(new kK(by.bz.data[2])), cq.push(jq), (jq = new jr).js(by.bz.data[7].title), jq.ju(new kK(by.bz.data[7])), cq.push(jq), (jq = new jr).js(by.bz.data[8].title), jq.ju(new kK(by.bz.data[
		8])), cq.push(jq), (jq = new jr).js(by.bz.data[5].title), jq.ju(new iD(by.bz.data[5])), cq.push(jq), jg = new jh(fH.ff, cq)
}

function uZ() {
	function uh(x, um) {
		um ? ar.ub = "Replay Error: " + x : aO.aQ(4, 3, new aR("⚠️ Replay Error", x, !0))
	}
	this.a7 = function(x) {
		if (kW.ua.t1(kW.ua.sz(kW.ua.sx(x))), ar.ub = "", ! function() {
				if (kU.size < 10) uh("File Too Small");
				else if (kU.kV(9) !== uk && uh("Incompatible Version Error", !0), kU.kV(31) !== kU.size) uh("Size Error");
				else {
					if (function(da) {
							var l, a6 = kU.hA,
								m = kU.size,
								un = 0;
							for (l = 7; l < m; l++) un = un + a6[l] & 65535;
							return un === da
						}(kU.kV(16))) return 1;
					uh("Hash Error")
				}
				return
			}()) return !1;
		var uo;
		(uo = {}).or = kU.kV(9), uo.oq = kU.kV(14), uo.dk = kU.kV(4), uo.dl = 1 === kU.kV(1), uo.dn = kU.kV(6), uo.dp = kU.kV(14), uo.up = kU.kV(10), p7.ui.uo = uo,
			function() {
				var l, uq, ur, name, m = p7.ui.uo.up,
					cE = [];
				for (l = 0; l < m; l++) uq = kU.kV(1), ur = [kU.kV(6), kU.kV(6), kU.kV(6)], name = kW.kX.kY(kU.kV(5)), cE.push({
					name: name,
					ur: ur,
					uq: uq
				});
				if (p7.ui.uo.cE = cE, 8 === p7.ui.uo.dk)
					for (l = 0; l < m; l++) cE[l].us = kU.kV(14)
			}();
		var l, m, ut = p7.ui.uo;
		if (1 === ut.cE.length)
			for (m = 6 < ut.dk ? 1 : ut.dk + 2, ut.uu = new Array(m), ut.uv = new Array(m), l = 0; l < m; l++) ut.uu[l] = kU.kV(3), ut.uv[l] = kU.kV(9) + 1;
		return !! function() {
			var dT = kU.kV(5),
				uw = kU.kV(30),
				ux = kU.kV(30);
			if (uw + ux > 8 * kU.size) return void uh("Corrupted File");
			return function(m) {
					var l, id, v0 = new Uint8Array(m),
						v1 = new Uint16Array(m),
						v2 = new Uint32Array(m),
						v3 = new Uint32Array(m);
					for (p7.ui.v4 = v0, p7.ui.v5 = v1, p7.ui.v6 = v2, p7.ui.v7 = v3, l = 0; l < m; l++) v0[l] = id = kU.kV(4), v1[l] = kU.kV(9), 0 === id ? v2[l] = kU.kV(22) : 1 === id ? (v2[l] = kU.kV(10), v3[l] = kU.kV(10)) : 2 === id ? (
						v2[l] = kU.kV(10), v3[l] = kU.kV(9)) : 3 === id || 4 === id ? (v2[l] = kU.kV(10), v3[l] = kU.kV(22)) : 5 === id || 6 === id ? v2[l] = kU.kV(10) : 7 === id && (v2[l] = kU.kV(1))
				}(uw),
				function(m, dT) {
					var l, v8 = new Uint8Array(m),
						v9 = new Array(m);
					for (v9.fill(0), p7.ui.v8 = v8, p7.ui.v9 = v9, l = 0; l < m; l++) v8[l] = kU.kV(1), v9[l] = kU.kV(dT)
				}(ux, dT), 1
		}() && (kU.b4 < 8 * kU.size - 13 || kU.b4 > 8 * kU.size ? (uh("Out Of Bounds Error: " + kU.b4 + " " + 8 * kU.size), !1) : (p7.ui.uj = x, !0))
	}
}

function vA() {
	function vF(map, eB, eC, dZ, da) {
		map >= e1.iJ || (e1.dh === map && (eL.fillStyle = ac.vE, eL.fillRect(eB, eC, dZ, da), eL.fillStyle = ac.c7), eL.strokeRect(eB, eC, dZ, da), eL.fillText(e1.iM.iO[map].name, Math.floor(eB + .5 * dZ), Math.floor(eC + .55 * da)))
	}
	this.hY = !1, this.vB = [0, 0, 0, 0], this.show = function() {
		this.hY = !0, this.resize(), b6.bJ = !0
	}, this.resize = function() {
		var vC = aF(e1.iJ + e1.iJ % 2, 2),
			vC = b9.da - vC * dY.gap;
		ae.af.dW() ? this.vB[2] = Math.floor(.75 * b9.min) : this.vB[2] = Math.floor(.5 * b9.min), this.vB[3] = Math.floor(1.25 * this.vB[2]), this.vB[3] > vC && (this.vB[3] = vC, this.vB[2] = Math.floor(vC / 1.2)), this.vB[0] = Math.floor((b9
			.dZ - this.vB[2]) / 2), this.vB[1] = Math.floor((b9.da - this.vB[3]) / 2)
	}, this.eE = function(eB, eC) {
		return !(eB < this.vB[0] || eC < this.vB[1] || eB > this.vB[0] + this.vB[2] || eC > this.vB[1] + this.vB[3])
	}, this.eA = function(eB, eC) {
		var jU, vC = aF(e1.iJ + e1.iJ % 2, 2);
		return b6.bJ = !0, eB < this.vB[0] || eC < this.vB[1] || eB > this.vB[0] + this.vB[2] || eC > this.vB[1] + this.vB[3] ? !(this.hY = !1) : (jU = Math.floor(.17 * this.vB[3]), eC < this.vB[1] + jU ? eB > this.vB[0] + this.vB[2] - jU && (
			this.hY = !1) : (eC = (eC = Math.floor(vC * (eC - this.vB[1] - jU - .00576 * b9.dX) / (this.vB[3] - jU - .01152 * b9.dX))) < 0 ? 0 : vC - 1 < eC ? vC - 1 : eC, eB > this.vB[0] + this.vB[2] / 2 && (eC += vC), eC >= e1.iJ || e1
			.e7(eC, Math.floor(16384 * Math.random()))), !0)
	}, this.eK = function() {
		var l, eH, jU = Math.floor(.17 * this.vB[3]),
			vC = aF(e1.iJ + e1.iJ % 2, 2),
			gap = .6 * .01152 * b9.dX,
			jV = (this.vB[3] - jU - (vC + 1) * gap) / vC,
			en = Math.floor((this.vB[2] - 3 * gap) / 2);
		for (eL.lineWidth = dY.iA, n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.fillStyle = ac.c8, eL.fillRect(this.vB[0], this.vB[1] + jU, this.vB[2], this.vB[3] - jU), eL.fillStyle = ac.vE, eL.fillRect(this.vB[0], this.vB[1], this.vB[2],
				jU), eL.strokeStyle = ac.c7, eL.strokeRect(this.vB[0], this.vB[1], this.vB[2], this.vB[3]), eL.fillStyle = ac.c7, eL.fillRect(this.vB[0], this.vB[1] + jU, this.vB[2], 2), eL.font = n.o.dc(1, .48 * jU), eL.fillText("Maps", Math
				.floor(this.vB[0] + this.vB[2] / 2), Math.floor(this.vB[1] + .55 * jU)), eL.font = n.o.dc(1, .48 * jV), l = vC - 1; 0 <= l; l--) eH = Math.floor(this.vB[1] + jU + gap + l * (jV + gap)), vF(l, this.vB[0] + gap, eH, en, jV), vF(l +
			vC, this.vB[0] + en + 2 * gap, eH, en, jV);
		bD.eb(Math.floor(this.vB[0] + this.vB[2] - .7 * jU), Math.floor(this.vB[1] + .3 * jU), Math.floor(.4 * jU)), eL.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function vG() {
	this.size = 0, this.b4 = 0, this.hA = null, this.k = function(hA) {
		this.b4 = 0, this.hA = hA, this.size = hA.length
	}, this.b1 = function() {
		this.hA = null
	}, this.kV = function(size) {
		for (var aC = 0, hA = this.hA, hP = this.b4 + size - 1, l = this.b4; l <= hP; l++) aC |= (hA[l >> 3] >> 7 - (7 & l) & 1) << hP - l;
		return this.b4 += size, this.b4 > 8 * this.size && console.log("error unwrapper"), aC
	}, this.vH = function(size) {
		var a8 = size >> 1;
		return (1 << a8) * this.kV(size - a8) + this.kV(a8)
	}, this.vI = function(size) {
		for (var a5 = new Array(size), l = 0; l < size; l++) a5[l] = this.kV(10);
		return gs.a7(a5)
	}, this.vJ = function(hL) {
		return this.size === t2.hM(hL)
	}
}

function vK() {
	this.id = 0, this.fb = 0, this.m3 = null, this.m4 = null, this.mC = null, this.m5 = null, this.af = new m0, this.k = function() {
		var self, fb;
		self = this, "undefined" == typeof Android || (fb = Android.getVersion()) < 12 || (self.fb = fb, self.id = 1, self.m4 = Android),
			function(self) {
				var fb;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.mC = mwIOSdataX, self.m5 = window.webkit.messageHandlers.iosCommandA, fb = self
					.mC.version, self.fb = fb ? Number(fb) : 0)
			}(this),
			function(self) {
				var m3;
				if (0 === self.id) {
					try {
						if (!(m3 = window.localStorage)) return;
						m3.setItem("tls7", "1"), m3.removeItem("tls7")
					} catch (error) {
						return
					}
					self.m3 = m3
				}
			}(this)
	}
}

function vd() {
	vO || (vf(), tX(), hS = new nS, fj = new vg, n = new tY, ac = new vh, ao = new oe, tM = new vi, kW = new vj, p3 = new oF, pD = new vk, pE = new vl, pC = new vm, io = new vn, p5 = new vo, gs = new q, gO = new vp, bD = new vq, ar = new vr, jH =
		new vs, jM = new vt, ei = new vu, jK = new vv, iu = new vw, jG = new vx, jJ = new vy, jI = new kb, ey = new mN, ex = new vz, eD = new qz, ai = new w0, aW = new w1, jO = new w2, d7 = new g0, bX = new w3, mD = new w4, f6 = new w5, cU =
		new w6, vP = new w7, cf = new w8, bU = new w9, p4 = new wA, oX = new wB, d9 = new a, iW = new wC, iS = new pT, vQ = new wD, ak = new wE, aK = new ra, vR = new wF, p1 = new wG, vS = new ig, pM = new wH, b9 = new iz, b0 = new ch, vT =
		new vA, gS = new wI, vU = new wJ, pJ = new wK, jA = new wL, pH = new er, pG = new wM, pI = new c9, vV = new wN, oR = new wO, bq = new wP, p7 = new wQ, jL = new wR, t2 = new hK, kU = new vG, vW = new wS, lb = new wT, p2 = new wU, fA =
		new wV, cb = new wW, p9 = new wX, p8 = new wY, bc = new lj, e1 = new iI, vX = new wZ, aO = new wa, m6 = new wb, aS = new wc, ae = new vK, vO = new wd, bf = new cL, by = new we, dO = new wf, bj = new ne, va = new wg, bH = new wh, vY =
		new wi, cd = new wj, fV = new wk, b6 = new lq, vb = new wl, dY = new wm, hG = new aL, vc = new o8, vO.k(), ae.k(), b9.gT(), by.k(), aS.k(), vc.k(), n.k(), mD.k(), vY.k(), ak.k(), tM.k(), kW.k(), e1.k(), wo(), aO.k(), gQ = new tP, b9.k(),
		ae.af.mI(), b6.k(), dY.k(), vZ = new wp, aK.k(), cU.wq(), m6.k(), iW.k(), aW.k(), vV.k(), jG.k(), p4.k(), lb.k(), d7.k(), b6.bJ = !0, setTimeout(function() {
			e1.e7(2, 14071)
		}, 0), aO.aQ(5, 5), vW.wr(), ae.af.mM(), b9.jC(), vO.ws = 1)
}

function wt() {
	var fH, jg, cq;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), jg.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("Login", [new aa("❌ " + aS.aZ[92], function() {
		aO.aQ(7, aO.jy(7).h1)
	}, ac.ad), new aa("➡️ Login", function() {
		by.iH.dd(105, kW.ua.sy(jg.wv[0].tg[0].i.value, 5)), by.iH.dd(106, kW.ua.sy(jg.wv[1].tg[0].i.value, 8)), aO.aQ(8, aO.jy(7).h1, new fh(18))
	}, ac.ah)]), jg = new jh(fH.ff, ((cq = []).push(function() {
		var jq = new jr;
		return jq.js("Account Name"), jq.ju(new iD({
			title: "AccountName",
			value: "",
			b4: -1
		})), jq
	}()), cq.push(function() {
		var jq = new jr,
			jx = (jq.js("Password"), new iD({
				title: "Password",
				value: "",
				b4: -1
			}));
		return jx.i.type = "password", jq.ju(jx), jq.ju(new f([new aa("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", jx.i.type = "text") : (this.innerText = "Show", jx.i.type = "password")
		}).button])), jq
	}()), cq))
}

function o9() {
	this.k = function() {
		0 === by.bz.data[181].value && (by.bz.i1(180, Math.floor(Math.random() * hS.pow(30))), by.bz.i1(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function wQ() {
	this.ui = new ww, this.wx = new wy, this.wz = new uZ, this.k = function(oq, cE, dk, dl) {
		var uo;
		ao.fX || ((uo = {}).or = ao.bW, uo.oq = oq, uo.cE = cE, uo.dk = dk, uo.dl = dl, uo.dn = e1.dh, uo.dp = e1.di, jO.x0(uo), this.ui.k(uo))
	}, this.b8 = function() {
		ao.fX || (this.ui.b8(), 3 !== aO.aP) || b6.f2() % 15 != 5 && 2 !== ao.aq || aO.gV().x2()
	}, this.x3 = function() {
		var n9 = this.ui.uo;
		0 === ao.aq && aW.x4(), e1.e7(n9.dn, n9.dp), 1 === n9.cE.length && (jO.x5(n9.dk), jO.x6(n9.uu, n9.uv)), ak.al.close(ak.al.an, 3257), ak.al.an = 0, ao.op(n9.oq, n9.or, n9.cE, n9.dk, n9.dl, !0)
	}, this.x7 = function(x) {
		var l = x.indexOf("=");
		return 0 <= l ? x.substring(l + 1) : x
	}, this.x8 = function(x) {
		return "https://territorial.io/?replay=" + x
	}
}

function x9() {
	this.xA = function(player, rj) {
		n.br.xB(0) && n.br.c1(player) && p2.xC(rj) && (p7.ui.xD(0, player, rj), ao.on.xE(player, rj))
	}, this.xF = function(player, f4, xG) {
		bU.sk[player]++, n.br.xB(1) && n.br.c1(player) && n.br.xH(player, xG) && n.br.qG(player, f4, 12, ao.oj) && n.br.xI(player, xG) && ((xG = f6.xK(player, cb.xL[0])) || f6.f7(player)) && xM(player, xG) && (p7.ui.xD(1, player, f4, cb.xL[0]), n
			.br.qK(player), cd.xN(player, f4), xO(player))
	}, this.xP = function(player, f4, cR) {
		n.br.xB(1) && n.br.c1(player) && ao.fC && n.br.xH(player, cR) && n.br.xQ(player, cR) && n.br.cT(player, n.br.xR(player, f4), cR) && (p7.ui.xD(2, player, f4, cR), cU.cV(player, cR))
	}, this.xS = function(player, f4, rj) {
		n.br.xB(1) && n.br.c1(player) && p2.xC(rj) && fA.al.qC !== fA.al.qD && fA.al.qE[player] !== fA.al.qF && 0 !== bU.qB[player].length && n.br.qG(player, f4, 32, 16) && fA.qV.qW(player, rj) && (p7.ui.xD(3, player, f4, rj), n.br.qK(player), fA
			.al.qL(player))
	}, this.xT = function(player, xU, rj) {
		n.br.xB(1) && n.br.c1(player) && p2.xC(rj) && fA.bd.sI(player, xU) && fA.qV.tw(rj) && (p7.ui.xD(4, player, xU, rj), n.br.xV(player, 8), fA.al.xT())
	}, this.xW = function(player, xG) {
		n.br.xB(1) && n.br.c1(player) && (xG = Math.min(xG, ao.l4), f6.xK(player, xG)) && (p7.ui.xD(5, player, xG), f6.xX(player, xG))
	}, this.xY = function(player, dE) {
		(n.br.xB(1) || n.br.xB(2)) && n.br.c1(player) && (dE = hS.i7(dE, 0, 1023), p7.ui.xD(6, player, dE), cf.xZ(player, 0, dE))
	}, this.xa = function(player, xb) {
		n.br.xB(1) && n.br.c1(player) && (p7.ui.xD(7, player, xb), gS.xc(player, xb))
	}, this.fa = function(player) {
		(n.br.xB(0) || n.br.xB(1)) && n.br.c1(player) && p8.fa(player) && p7.ui.xD(8, player)
	}, this.xd = function(player) {
		p8.xd(player), p7.ui.xD(9, player)
	}
}

function xe() {
	this.xf = function(b4, fb) {
		return Number(this.xg(b4, fb))
	}, this.xg = function(b4, fb) {
		var aC = null;
		return 0 === ae.id ? ae.m3 && (aC = ae.m3.getItem((fb ? "v" : "d") + b4)) : 1 === ae.id ? aC = ae.m4.loadString((fb ? 1e3 : 2e3) + b4) : 2 === ae.id && (aC = ae.mC[(fb ? "v" : "d") + b4]), aC && 0 !== aC.length ? aC : null
	}, this.save = function(b4, value, fb) {
		0 === ae.id ? ae.m3 && by.bz.data[140].value && ae.m3.setItem((fb ? "v" : "d") + b4, value) : 1 === ae.id ? ae.m4.saveString((fb ? 1e3 : 2e3) + b4, value) : 2 === ae.id && (ae.mC["d" + b4] = value, ae.m5.postMessage((fb ? "v" : "d") +
			b4 + " " + value))
	}
}

function wH() {
	var xh, xi;
	this.k = function() {
		xh = 1, xi = 0
	}, this.b8 = function() {
		0 < xh && (xi = 0 === xi ? b6.b5 + 16 : xi, xh = (xh -= .001 * (b6.b5 - xi)) < 0 ? 0 : xh, xi = b6.b5, b6.bJ = !0)
	}, this.eK = function() {
		0 < xh && (eL.fillStyle = "rgba(0,0,0," + xh + ")", eL.fillRect(0, 0, b9.dZ, b9.da))
	}
}

function xl() {
	function xt() {}
	this.k = function() {}, this.mL = function() {
		return !!xt() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		xt() && aipAPItag.showCMPScreen()
	}
}

function iL() {
	function y8() {
		e1.e8.b8()
	}

	function yF(a6, yE) {
		0 < yE && (e1.e6[a6] += yE, e1.e6[a6 + 1] += yE, e1.e6[a6 + 2] += yE)
	}

	function tr(a6) {
		return e1.e6[a6 + 2] > e1.e6[a6] && e1.e6[a6 + 2] > e1.e6[a6 + 1]
	}
	this.xv = -1, this.aV = 0, this.xw = 0, this.xx = 8, this.xy = 32, this.xz = 8, this.y0 = 32, this.y1 = [0, 0], this.y2 = [0, 0, 0, 0], this.y3 = null, this.y4 = !0, this.y5 = !1, this.e9 = function() {
		-1 !== this.xv && clearTimeout(this.xv), this.xv = -1, this.y3 = null, iS.iY()
	}, this.k = function() {
		7 === aW.aX() || this.y5 || (this.y4 = !0, this.aV = 0, this.xw = 1, this.y1 = [e1.iM.iO[e1.dh].y6[0], e1.iM.iO[e1.dh].y7[0]], this.y2 = [e1.iM.iO[e1.dh].ie[3], e1.iM.iO[e1.dh].ie[4], e1.iM.iO[e1.dh].ie[5], e1.iM.iO[e1.dh].ie[6]], this
			.xx = e1.iM.iO[e1.dh].ie[7], this.xy = e1.iM.iO[e1.dh].ie[8], this.xz = e1.iM.iO[e1.dh].ie[9], this.y0 = e1.iM.iO[e1.dh].ie[10], this.y4 ? this.xv = setTimeout(y8, 16) : this.b8())
	}, this.b8 = function() {
		if (8 === aW.aX() && io.y9()) this.xv = setTimeout(y8, 16);
		else {
			if (0 === this.aV) {
				var gf = aK.gq();
				if (aK.gr(e1.iM.iO[e1.dh].ie[2]), iS.e7([e1.e0, e1.e2, e1.iM.iO[e1.dh].ie[0], e1.iM.iO[e1.dh].ie[1]]), aK.gr(gf), this.y3 = iS.pi(), this.aV++, this.y4) return void(this.xv = setTimeout(y8, 16))
			}
			for (var a6, rj, gf = this.y4 ? 10 : 1e6, gf = e1.e2 - this.xw - 1 < gf ? e1.e2 - this.xw - 1 : gf, yA = this.xw + gf, eC = this.xw; eC < yA; eC++)
				for (var eB = 1; eB < e1.e0 - 1; eB++) tr(a6 = 4 * (rj = eB + eC * e1.e0)) ? this.yB(a6, rj, 1) : (this.yB(a6, rj, 0), function(eB, eC, a6) {
					return 1 < eB && tr(a6 - 4) || eB < e1.e0 - 2 && tr(a6 + 4) || 1 < eC && tr(a6 - 4 * e1.e0) || eC < e1.e2 - 2 && tr(a6 + 4 * e1.e0)
				}(eB, eC, a6) && this.yD(eB, eC));
			this.xw = yA, this.xw >= e1.e2 - 1 ? (e1.e4.putImageData(e1.e5, 0, 0, 1, 1, e1.e0 - 2, e1.e2 - 2), b6.bJ = !0, this.e9()) : this.y4 && (this.xv = setTimeout(y8, 16))
		}
	}, this.yB = function(a6, rj, b4) {
		yF(a6, Math.floor(this.y1[b4] + this.y2[b4] * this.y3[rj] / 1e4) - e1.e6[a6])
	}, this.yG = function(a6, aI, yH, b4, y2) {
		yF(a6, Math.floor(this.y1[b4] + (1 - aI / yH) * y2) - e1.e6[a6])
	}, this.yD = function(i2, i3) {
		for (var a6, aI, yH, yI = i2 - this.xy, yJ = i3 - this.xy, yK = i2 + this.xy, yA = i3 + this.xy, yI = yI < 1 ? 1 : yI, yK = yK > e1.e0 - 2 ? e1.e0 - 2 : yK, yA = yA > e1.e2 - 2 ? e1.e2 - 2 : yA, eC = yJ < 1 ? 1 : yJ; eC <= yA; eC++)
			for (var eB = yI; eB <= yK; eB++) tr(a6 = 4 * (eB + eC * e1.e0)) ? (yH = this.xx + (this.xy - this.xx) * this.y3[eB + e1.e0 * eC] / 1e4, Math.abs(i2 - eB) > yH || Math.abs(i3 - eC) > yH || yH <= (aI = Math.sqrt((i2 - eB) * (i2 - eB) +
				(i3 - eC) * (i3 - eC))) || this.yG(a6, aI, yH, 1, this.y2[3])) : (yH = this.xz + (this.y0 - this.xz) * this.y3[eB + e1.e0 * eC] / 1e4, Math.abs(i2 - eB) > yH || Math.abs(i3 - eC) > yH || yH <= (aI = Math.sqrt((i2 - eB) * (i2 -
				eB) + (i3 - eC) * (i3 - eC))) || this.yG(a6, aI, yH, 0, this.y2[2]))
	}
}

function vs() {
	var aZ, es, yL, dZ, da, font;

	function yO(hO) {
		return hO < 10 ? "0" + hO : String(hO)
	}
	this.k = function() {
		void 0 === dZ && this.resize(), this.setTime()
	}, this.resize = function() {
		dZ = Math.floor((ae.af.dW() ? .53 : .36) * b9.dX), da = Math.floor(.065 * dZ), font = n.o.dc(1, Math.floor(.9 * da)), yL--, this.setTime()
	}, this.b8 = function() {
		this.setTime() && (b6.bJ = !0)
	}, this.setTime = function() {
		var bo = new Date,
			yN = bo.getUTCMinutes(),
			bo = bo.getUTCSeconds();
		return es = 3600 - 60 * yN - bo, es %= 900, aZ = "Next Contest: " + yO(Math.floor(es / 60)) + ":" + yO(es % 60), yL !== (yL = 60 * yN + bo) && (dZ = ei.measureText(aZ, font), dZ += Math.floor(.4 * da), !0)
	}, this.eK = function() {
		eL.lineWidth = 1 + Math.floor(da / 15), 7 === aW.aX() && b0.dR() + 2 * dY.gap > .5 * (b9.da - dZ) ? eL.translate(b9.dZ - da, Math.floor(b0.dR() + 2 * dY.gap + dZ)) : eL.translate(b9.dZ - da, Math.floor(.5 * (b9.da + dZ))), eL.rotate(-Math
			.PI / 2), eL.fillStyle = ac.c7, eL.fillRect(0, 0, dZ, da), eL.strokeStyle = ac.ep, eL.strokeRect(0, 0, dZ, da + 10), eL.fillStyle = ac.ep, eL.font = font, n.o.textBaseline(eL, 1), n.o.textAlign(eL, 1), eL.fillText(aZ, Math.floor(
			dZ / 2), Math.floor(.59 * da)), eL.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function yP() {
	this.kY = function(size) {
		for (var yQ = kU, a5 = [], l = 0; l < size; l++) a5.push(String.fromCharCode(yQ.kV(16)));
		return a5.join("")
	}, this.w = function(x) {
		return 20 < (x = x.trim()).length ? x.substring(0, 20) : x
	}
}

function tb() {
	this.xB = function(aV) {
		return 0 === aV ? 1 === ao.aq && ao.bA : 1 === aV ? 1 === ao.aq && !ao.bA : 2 === ao.aq
	}, this.c1 = function(player) {
		return 0 !== bU.bV[player] && 2 !== bU.ev[player]
	}, this.xH = function(qM, qN) {
		return qM !== qN
	}, this.ca = function(player, aC) {
		return aC = this.yR(player, aC), bU.f8[player] += aC, aC
	}, this.yR = function(player, aC) {
		var yS = bU.f8[player];
		return aC = Math.min(aC, bU.bp[player] * ao.ol - yS), aC = Math.min(aC, ao.og - yS), Math.max(aC, 0)
	}, this.qG = function(player, f4, yT, yU) {
		var yS = bU.f8[player],
			f4 = hS.hT(yS * (f4 + 1), 1024),
			yT = hS.hT(yT * yS, 1024),
			f4 = Math.min(f4, yS - yT);
		return 10 === ao.bi && (f4 = pG.yW(player, f4)), cb.cc[0] = f4, cb.cc[1] = yT, yU <= f4
	}, this.cT = function(player, xP, cR) {
		var player = bU.f8[player],
			yV = hS.hT(64 * player, 1024);
		return xP = Math.min(xP, player - yV), yV += player = this.yY(xP), xP = this.yR(cR, xP -= player), cb.cc[0] = xP, cb.cc[1] = yV, 1 <= xP
	}, this.cZ = function(xP, cR) {
		var yX = this.yY(xP);
		return xP = this.yR(cR, xP -= yX), cb.cc[0] = xP, cb.cc[1] = yX, 1 <= xP
	}, this.xR = function(player, yZ) {
		return hS.hT(bU.f8[player] * (yZ + 1), 1024)
	}, this.yY = function(ya) {
		return hS.hT(Math.max(2142 - b6.f2(), 0) * ya, 2142)
	}, this.xV = function(player, yT) {
		bU.f8[player] -= hS.hT(yT * bU.f8[player], 1024)
	}, this.qK = function(player) {
		bU.f8[player] -= cb.cc[0] + cb.cc[1]
	}, this.xI = function(player, xG) {
		return (xG = Math.min(xG, ao.l4)) < ao.l4 && 0 === bU.bV[xG] && (xG = ao.l4), (cb.xL[0] = xG) === ao.l4 || qT(player, xG)
	}, this.xQ = function(player, cR) {
		return 0 !== bU.bV[cR] && !qT(player, cR)
	}
}

function jh(t7, cq) {
	var l, h = document.createElement("div");

	function yf() {
		var l, yg, da, bm, hR, yc = b9.iy * h.offsetWidth,
			yh = new Float64Array(function(yc) {
				var dZ = .25 * n.o.yd(.6) * b9.dX;
				return Math.max(Math.floor(yc / dZ), 1)
			}(yc)),
			yi = dY.yi,
			yj = (yc - (yh.length + 1) * dY.gap) / (yh.length * b9.iy);
		for (yh.fill(yi), l = 0; l < cq.length; l++) yg = (hR = cq[l].h).style, da = n.rr.min(yh), bm = yh.indexOf(da), yg.top = n.o.nR(da), yg.left = n.o.nR(yi + bm * (yj + yi)), yg.width = n.o.nR(yj), n.o.p(hR, 5), yh[bm] += hR.offsetHeight + 3 *
			yi;
		h.style.height = n.o.nR(n.rr.max(yh) - 2 * yi)
	}
	for (this.wv = cq, this.resize = function() {
			var l;
			for (l = 0; l < cq.length; l++) cq[l].resize();
			yf(), yf()
		}, h.style.width = "100%", h.style.maxWidth = "100%", t7.style.lineHeight = "1.5em", t7.style.overflowX = "hidden", t7.style.overflowY = "auto", l = 0; l < cq.length; l++) h.appendChild(cq[l].h);
	t7.appendChild(h)
}

function yk(name, placeholder) {
	var yl = document.createElement("textarea"),
		yn = (this.ym = yl, !0);

	function ys() {
		yl.select(), document.execCommand("copy")
	}
	this.resize = function() {
			yl.style.padding = n.o.nR(dY.yi)
		}, this.yo = function(nv) {
			yl.value = nv
		}, this.yp = function() {
			return yl.value
		}, this.yq = function() {
			yl.select()
		}, this.clear = function() {
			yl.value = ""
		}, this.yr = function() {
			yn && navigator.clipboard ? (yl.select(), navigator.clipboard.writeText(yl.value).catch(function() {
				yn = !1, ys()
			})) : ys()
		}, yl.setAttribute("name", name), yl.setAttribute("id", name + "Field"), yl.setAttribute("autocomplete", "off"), yl.setAttribute("placeholder", placeholder), yl.style.top = "0", yl.style.left = "0", yl.style.width = "100%", yl.style.height =
		"100%", yl.style.userSelect = "none", yl.style.outline = "none", yl.style.resize = "none", yl.style.border = "none", yl.style.color = ac.c7, yl.style.backgroundColor = ac.ed, yl.style.fontSize = "1.2em"
}

function yt() {
	this.yu = function() {
		t2.e7(39), t2.hN(1, 0), t2.hN(6, 16), ak.h8.yv(), ak.al.send(0, t2.hA)
	}, this.yw = function(aN) {
		t2.e7(115), t2.hN(1, 0), t2.hN(6, 17), kW.ua.t5(by.bz.data[105].value, 5), kW.ua.t5(by.bz.data[106].value, 8), t2.hN(30, by.bz.data[109].value), ak.al.send(aN, t2.hA)
	}, this.yy = function() {
		t2.e7(55), t2.hN(1, 0), t2.hN(6, 18), kW.ua.t4(by.bz.data[110].value), ak.al.send(0, t2.hA)
	}, this.yz = function(username) {
		t2.e7(12 + 16 * username.length), t2.hN(1, 0), t2.hN(6, 20), ak.h8.tI(username), ak.al.send(0, t2.hA)
	}
}

function wA() {
	var g2, z0;
	this.k = function() {
		g2 = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var l, v, gp = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			z1 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (z0 =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), l = g2.length - 1; 0 <= l; l--)
			for (v = gp.length - 1; 0 <= v; v--) g2[l] = g2[l].replace(gp[v], z1[v]);
		if (settings.realisticNames) g2 = realisticNames;
	}, this.e7 = function() {
		var l;
		if (oR.hD && oR.iM.z2)
			for (l = ao.cW; l < ao.l4; l++) bU.l6[l] = bU.l7[l] = oR.iM.z2[l % ao.ok];
		else(9 === ao.bi ? function() {
			var l, aI = aK.random(),
				m = g2.length,
				mr = ao.cW + oX.z7;
			for (l = mr - 1; l >= ao.cW; l--) bU.l6[l] = bU.l7[l] = g2[(l + aI) % m];
			for (m = z0.length, l = mr; l < ao.l4; l++) bU.l6[l] = bU.l7[l] = z0[l % m]
		} : ao.ap ? function() {
			var l, aI = aK.random();
			for (l = ao.cW; l < ao.l4; l++) bU.l6[l] = bU.l7[l] = g2[(l + aI) % ao.l4]
		} : function() {
			var l, m = g2.length,
				aI = aK.random();
			for (l = ao.cW; l < ao.l4; l++) bU.l6[l] = bU.l7[l] = g2[(l + aI) % m]
		})()
	}
}

function we() {
	this.fz = new xe, this.bz = new z8, this.iH = new z9, this.al = new sM, this.k = function() {
		this.bz.k(), (new zA).k()
	}
}

function vl() {
	var size, fB;
	this.k = function() {
		size = ao.md, fB = new Uint16Array(ao.md);
		for (var l = ao.md - 1; 0 <= l; l--) fB[l] = l
	}, this.b8 = function() {
		for (var l = size - 1; 0 <= l; l--) 0 === bU.bV[fB[l] + ao.cW] ? function(v) {
			size--;
			for (var l = v; l < size; l++) fB[l] = fB[l + 1]
		}(l) : p3.b8(fB[l])
	}
}

function lw() {
	var zD, zE, zF, zG, zH, b4 = 0,
		b5 = b6.b5;

	function zM() {
		! function() {
			if (!ao.bA) return;
			if (ao.ap) return;
			return zH % 7 != 0 ? zH++ : zG === ao.nB ? (zP(), ey.n8(zG), ao.on.b8()) : (zP(), zH++, zG++, cf.zQ(), cf.lA(!0)), 1
		}() && (zP(), bG())
	}

	function zN() {
		b4 = 0, (ao.bA ? (b6.bJ = ey.n8(zG - (zH % 7 == 0 ? 0 : 1) + zH % 7 / 7) || b6.bJ, bB) : bD.bE || !jL.pR ? bB : (b6.bJ = !0, bK))()
	}

	function zP() {
		var l, m, zR = p7.ui.v4,
			nV = p7.ui.v5,
			nW = p7.ui.v6,
			nX = p7.ui.v7,
			zS = p7.ui.v8,
			zT = p7.ui.v9;
		if (zD >= zT.length) ar.at("Replay file smaller than expected."), bc.lk.n2(-1);
		else if (zT = zT[zD], zS[zD]) {
			for (m = zE + zT, l = zE; l < m; l++) bq.ow.zU(zR[l], nV[l], nW[l], nX[l]);
			zE += zT, zD++
		} else ++zF >= zT && (zD++, zF = 0)
	}
	this.b7 = 0, this.k = function() {
		zH = zG = zF = zE = zD = 0
	}, this.b8 = function() {
		var zL;
		b9.b8(), jL.zI() < 1.7 ? 0 === b4 ? b6.b5 >= b5 && (zL = b6.bC / jL.zI(), b5 += zL * Math.floor(1 + (b6.b5 - b5) / zL), 2 === ao.aq || bD.bE || !jL.pR ? bF() : (zM(), bH.bI()), b4++) : zN() : function() {
			var zL;
			if (b6.b5 >= b5)
				if (2 === ao.aq || bD.bE || !jL.pR) bF(), b5 = b6.b5;
				else {
					for (zL = b6.bC / jL.zI(), 16 < (b6.b5 - b5) / zL && (b5 = b6.b5 - 16 * zL); b6.b5 >= b5 && 2 !== ao.aq;) b5 += zL, zM();
					bH.bI()
				} zN()
		}(), bL(), b6.bJ && (b6.bJ = !1, bM())
	}, this.sh = function() {
		zD !== p7.ui.v9.length && zD + 1 !== p7.ui.v9.length && ar.at("Replay file larger than expected.")
	}
}

function w4() {
	var g2, mU, m, zV, zW;

	function zb() {
		for (var un = 0, l = 1; l < 5; l++) un += mU[l] % 1024;
		return un
	}

	function za() {
		for (var l = 1; l < m - zW; l++) mU[l] = parseInt(mU[l])
	}

	function zc() {
		mU[0] = "Player " + Math.floor(1e3 * Math.random()), mU[1] = b9.dZ < b9.da ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, mU[2] = 1, mU[3] = 1, mU[4] = b9.dZ < b9.da ? 0 : 1, mU[5] = 0, mU[6] = "000", mU[7] = "0", mU[8] = "0",
			mU[9] = "0", mD.zd()
	}

	function zZ() {
		for (var l = m - zW - 1; 0 <= l; l--) mU[l] = gs.aD(mU[l]);
		mU[0] = gs.aA(mU[0])
	}

	function zl(name, value, zm) {
		var te = new Date,
			zm = (te.setTime(te.getTime() + Math.floor(31536e6 * zm)), name + "=" + value + ";expires=" + te.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = zm
	}
	this.k = function() {
		if (0 === ae.id) {
			zW = 4, g2 = [], m = 10;
			for (var l = zV = 0; l < m; l++) g2.push("u" + l);
			mU = new Array(m), ! function(zj) {
				for (var v, a6, zk = zj.split(";"), l = zk.length - 1; 0 <= l; l--) {
					for (zk[l] = zk[l].trim(), v = 2; 0 <= v; v--) zk[l] = zk[l].replace(" ", "");
					3 < zk[l].length && (v = g2.indexOf(zk[l].substring(0, 2)), a6 = zk[l].indexOf("="), 0 <= v && 2 === a6 ? mU[v] = zk[l].substring(a6 + 1, zk[l].length) : 0 < a6 && zl(zk[l].substring(0, a6), "0", 0))
				}
			}(document.cookie), mU[9] || (mU[9] = "0"), (! function() {
				for (var l = m - 1; 0 <= l; l--)
					if (void 0 === mU[l]) return;
				return 1
			}() || (zV = 2, zZ(), za(), zb() !== mU[5])) && zc()
		}
	}, this.zd = function() {
		if (2 === zV) {
			mU[1] = 0 === mU[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : mU[1], mU[5] = zb(), ! function() {
				for (var l = 1; l < m - zW; l++) mU[l] = mU[l].toString()
			}(), ! function() {
				mU[0] = gs.a9(mU[0]);
				for (var l = m - zW - 1; 0 <= l; l--) mU[l] = gs.aB(mU[l])
			}();
			for (var l = m - 1; 0 <= l; l--) zl(g2[l], mU[l], 1);
			zZ(), za()
		}
	}, this.zV = function() {
		return zV
	}, this.zh = function(v) {
		zV = v, this.zd()
	}, this.zi = function(l, value) {
		0 === ae.id && (mU[l] = value)
	}, this.mE = function(l) {
		return 0 !== ae.id ? 0 : mU[l]
	}
}

function zn() {
	this.zo = function(aN) {
		var username = by.bz.data[122].value.slice(0, 20),
			username = (t2.e7(22 + 16 * username.length + 18), t2.hN(1, 0), t2.hN(6, 1), t2.hN(10, zp), ak.h8.tI(username), n.color.zq(by.al.sS()));
		t2.hN(6, username[0]), t2.hN(6, username[1]), t2.hN(6, username[2]), ak.al.am = aN, ak.al.send(aN, t2.hA)
	}, this.eJ = function(dj) {
		return t2.e7(11), t2.hN(1, 0), t2.hN(6, 2), t2.hN(4, dj), ak.al.send(ak.al.am, t2.hA), !0
	}
}

function zr() {
	this.i9 = function(dE, player) {
		ar.i8(ao.bW, player, dE), ak.gz.zs(dE, player)
	}, this.zt = function(player) {
		ar.zu(player, 0), ak.gz.zv(player)
	}, this.zw = function(zx, player) {
		ar.zy(zx, player), ak.gz.zz(zx, player)
	}, this.bs = function() {
		ao.ap || ao.fX || ak.a00.bs()
	}
}

function ta() {
	this.a02 = function(a5) {
		a5.fill(0)
	}, this.a03 = function(a5) {
		for (var m = a5.length, l = 0; l < m; l++) a5[l] = []
	}, this.rs = function(dz, a04) {
		for (var a05 = cb.a06, l = 0; l < 3; l++) a05[l] = a04 * dz[l];
		return a05
	}, this.rt = function(dz, a05, a07) {
		for (var jD = 0, l = 0; l < 3; l++) jD += Math.abs(dz[l] - a05[l]);
		return a07 <= jD
	}, this.ru = function(dz, a08) {
		for (var l = 0; l < 3; l++) dz[l] = hS.i7(dz[l] + a08, 0, 255);
		return dz
	}, this.a09 = function(a5, rU, rV) {
		var l, ng = 0;
		for (rV = rV || a5.length - 1, l = rU = rU || 0; l <= rV; l++) ng += a5[l];
		return ng
	}, this.a0A = function(a5, a0B) {
		for (var l, a0C, m = a5.length, a0D = [], v = m - 1; 0 <= v; v--) {
			for (l = a0C = 0; l < m; l++) a0B(a5[l]) < a0B(a5[a0C]) && (a0C = l);
			m--, a0D.push(a5[a0C]), a5[a0C] = a5[m], a5.pop()
		}
		return a0D
	}, this.min = function(a5) {
		var l, aC, m = a5.length;
		if (0 === m) return 0;
		for (aC = a5[0], l = 1; l < m; l++) aC = Math.min(aC, a5[l]);
		return aC
	}, this.max = function(a5) {
		var l, aC, m = a5.length;
		if (0 === m) return 0;
		for (aC = a5[0], l = 1; l < m; l++) aC = Math.max(aC, a5[l]);
		return aC
	}
}

function pF() {
	a0J = 0, a0K = 2048, a0L = new Uint32Array(4 * a0K), a0M = 0, a0N = new Uint32Array(a0K), (a0O = new Int32Array(4))[0] = -4 * e1.e0, a0O[1] = 4, a0O[2] = -a0O[0], a0O[3] = -a0O[1], a0P = new Uint8Array(e1.e0 * e1.e2)
}

function a0R(player) {
	a0F = player, a0Q = !1, a0S(), a0T();
	for (var l = f6.a0U(a0F) - 1; 0 <= l; l--) 0 === f6.a0V(a0F, l) && (a0E = l, a0W());
	a0Q && a0X()
}

function a0X() {
	a0Y(), a0Z()
}

function a0W() {
	a0I = f6.a0a(a0F, a0E), a0G = f6.a0b(a0F, a0E), a0c(), (0 !== a0J && (a0e(), a0f()) ? a0g : a0d)()
}

function a0f() {
	return (a0H = aF(a0G, a0J)) > ao.oj
}

function a0e() {
	for (var l = a0J - 1; 0 <= l; l--) a0P[aF(a0L[l], 4)] = 0
}

function a0d() {
	var bo;
	1 === f6.a0U(a0F) && pD.a0h(a0F), a0F !== ao.bW ? (bU.f8[a0F] += a0G, cU.a0i(a0F)) : (bo = bU.f8[a0F], bU.f8[a0F] += a0G, cU.a0i(a0F), cd.mU[13] -= bU.f8[a0F] - bo), f6.a0j(a0F, a0E)
}

function a0S() {
	var l, m = bU.n4[a0F].length;
	for (a0M = 0, l = (a0K < m ? a0K : m) - 1; 0 <= l; l--) a0N[a0M++] = bU.n4[a0F][l]
}

function a0T() {
	for (var l = bU.n4[a0F].length - 1; 0 <= l; l--) bX.qk(bU.n4[a0F][l]) && bX.a0k(bU.n4[a0F][l], a0F);
	bU.n4[a0F] = []
}

function a0c() {
	a0J = 0, (a0I === ao.l4 ? a0l : a0m)()
}

function a0m() {
	for (var a6, bm, l, hR = 3; 0 <= hR; hR--)
		for (l = a0M - 1; 0 <= l; l--) bm = aF(a6 = a0N[l] + a0O[hR], 4), 0 === a0P[bm] && bX.a0n(a6) && bX.qS(a6) === a0I && (a0P[bm] = 1, a0L[a0J++] = a6)
}

function a0l() {
	for (var a6, bm, l, hR = 3; 0 <= hR; hR--)
		for (l = a0M - 1; 0 <= l; l--) bm = aF(a6 = a0N[l] + a0O[hR], 4), 0 === a0P[bm] && bX.qR(a6) && (a0P[bm] = 1, a0L[a0J++] = a6)
}

function z9() {
	this.dd = function(b4, value) {
		by.bz.data[b4].value !== value && (by.bz.i1(b4, value), 0 === b4 ? (aO.fT(), aS.k(), aO.aQ(2)) : 1 === b4 ? b9.jC(1) : 2 === b4 ? b9.jC(0) : 5 === b4 && (n.o.tf(), b9.jC(0)))
	}, this.m1 = function() {
		for (var data = by.bz.data, l = 0; l < 100; l++) data[l] && by.bz.i1(l, data[l].a0o);
		n.o.tf(), b9.jC(1), aS.k()
	}, this.m2 = function() {
		for (var data = by.bz.data, l = 0; l < data.length; l++) data[l] && by.bz.dd(l, data[l].a0o)
	}
}

function wI() {
	var da, df, eg, a0p, a0q, a0r, a0s, a0t, a0u, a0v, a0w, a0x, a0y = !1,
		dH = (this.hY = !1, this.dZ = 0, new Array(2));

	function np() {
		var dZ = gS.dZ,
			mr = (a0t = !1, a10(eg, dZ, da), Math.floor(dZ / 2));
		1 === a0p ? (eg.fillStyle = ac.mk, eg.fillRect(mr, 0, mr, da)) : -1 === a0p && (eg.fillStyle = ac.a11, eg.fillRect(0, 0, mr, da)), a12(eg, dZ, da, 2);
		var mr = (mr = Math.floor(.25 * da)) < 2 ? 2 : mr,
			a14 = (eg.fillStyle = ac.a13, Math.floor((da - 4) * a0q[1] / a0r[1]));
		0 < a14 && eg.fillRect(2, da - 2 - a14, mr, a14), 0 < (a14 = Math.floor((da - 4) * a0q[0] / a0r[0])) && eg.fillRect(dZ - 2 - mr, da - 2 - a14, mr, a14);
		mr = (mr = Math.floor(da / 8)) < 2 ? 2 : mr, a16(eg, Math.floor(.4 * da), 0, da, mr, .5, !1), a16(eg, Math.floor(dZ - 1.4 * da), 0, da, mr, .5, !0), a14 = 1.1 * da / dH[0].width;
		eg.imageSmoothingEnabled = !0, eg.setTransform(a14, 0, 0, a14, (dZ - a14 * dH[0].width) / 2, -.05 * da), eg.drawImage(dH[+a0y], 0, 0), eg.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a18() {
		a0t = !0, a0u = 140, a0p = 0, a0s = [], gS.hY = !1, ar.sf(247, 0), a0q[0] = a0q[1] = 0
	}

	function a17() {
		return jK.a1I(ar.a1J()) ? jK.eC - da - dY.gap : jL.a1I(ar.a1K()) ? jL.a17() - da - dY.gap : b9.da - da - vb.a1L() * dY.gap
	}
	this.gT = function() {
		for (var l = 0; l < 2; l++) dH[l] = n.df.hr(d7.get(3), 8 - l, ac.a0z), dH[l] = n.df.rJ(dH[l])
	}, this.k = function() {
		a0w = a0x = 0, this.hY = !1, a0t = a0y = !1, a0u = 140, a0q = [a0p = 0, 0], a0r = [1, 1], a0s = [], a0v = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		da = jK.da, this.dZ = 4 * da, (df = document.createElement("canvas")).width = this.dZ, df.height = da, eg = df.getContext("2d", {
			alpha: !0
		}), np()
	}, this.lA = function() {
		a0t && np()
	}, this.eA = function(eB, eC) {
		var eH;
		return !!this.hY && !(eB < b9.dZ - this.dZ - dY.gap || eC < (eH = a17()) || eH + da < eC || (ao.fX || bq.fZ.xa(eB > b9.dZ - dY.gap - this.dZ / 2 ? 1 : 0), 0))
	}, this.b8 = function() {
		if (0 < a0x) 0 === --a0x && a18();
		else if (this.hY) 270 == --a0u && 2 <= a0w && function() {
			var l;
			for (l = mc - 1; 0 <= l; l--)
				if (bX.bY(n5[l])) return;
			return 1
		}() && (a0t = !0, a0q[0] += a0r[0]), 180 === a0u && 3 * a0q[0] < a0r[0] ? a18() : a0q[0] >= a0r[0] ? a0y ? bc.lk.sU() : bc.lk.n2(-1) : a0q[1] >= a0r[1] ? a0x = 4 : a0u <= 0 && a18();
		else if (function() {
				var l;
				for (l = 9; 0 <= l; l--) 12 < Math.abs(a0v[l] - bU.bp[c4[l]]) && (a0u = 140), a0v[l] = bU.bp[c4[l]];
				if (--a0u <= 0) return 1;
				return
			}()) {
			a0y = vP.a1B(), ar.a1C(a0y), this.hY = !0, a0t = !0, a0u = 360;
			for (var aC, bo = 0, l = mc - 1; 0 <= l; l--) bX.bY(n5[l]) && (bo += bU.bp[n5[l]]);
			a0y ? a0r[0] = Math.max(aF(3 * bo, 4), 1) : ao.fC ? (aC = hS.hT(100 * bj.bk(), ao.mb), aC = 150 - (aC += 2 * Math.max(aC - 75, 0)), aC = hS.i7(aC, 0, 100), aC = hS.hT(aC * bo, 100), a0r[0] = Math.max(aC, 1)) : a0r[0] = Math.max(aF(3 *
				bo, 5), 1), a0r[1] = Math.max(bo - a0r[0], 1), a0w++
		}
	}, this.sd = function() {
		this.hY && a0q[0] < a0r[0] && a18()
	}, this.xc = function(player, a1F) {
		var l, bo;
		if (this.hY) {
			for (l = a0s.length - 1; 0 <= l; l--)
				if (a0s[l] === player) return;
			ar.c6(200, bU.l6[player] + (a1F ? " voted for" : " rejected") + " peace.", 257, player, a1F ? ac.a1G : ac.a1H, ac.c8, -1, !0), a0s.push(player), a0t = !0, bo = ao.ap ? a0r[0] : bU.bp[player], a1F ? a0q[0] += bo : a0q[1] += bo,
				player === ao.bW && (a0p = a1F ? 1 : -1)
		}
	}, this.eK = function() {
		var eC;
		this.hY && (eC = a17(), eL.drawImage(df, b9.dZ - this.dZ - dY.gap, eC))
	}
}

function wk() {
	this.dZ = 0, this.da = 0, this.en = 0, this.eo = 0, this.a1M = 0, this.a1N = 0, this.jU = 0, this.jV = 0, this.eq = 0, this.a1O = 0, this.a1P = 0, this.a1Q = 0, this.a1R = 0, this.b4 = 0, this.mT = ["Territory", "Balance", "Interest", "Numbers"],
		this.hY = !1, this.a1S = -1, this.a1T = !1, this.a1U = [0, 0], this.k = function() {
			this.hY = !1, this.a1S = -1, this.a1T = !1, this.resize()
		}, this.resize = function() {
			this.dZ = b9.dZ < 1.369 * b9.da ? b9.dZ : 1.369 * b9.da;
			var hR = ae.af.dW() && b9.dZ < b9.da ? 1 : ae.af.dW() ? .8 : b9.dZ < b9.da ? .65 : .59;
			this.dZ = Math.floor(hR * this.dZ), this.dZ -= ae.af.dW() && b9.dZ < b9.da ? 2 * dY.gap + 2 : 0, this.da = Math.floor(this.dZ / 1.369), this.a1R = Math.floor(this.da / 150), this.a1R = Math.max(this.a1R, 1.5), this.en = Math.floor(1 +
					.02 * this.dZ), this.eo = Math.floor(1 + .04 * this.dZ), this.jU = this.eo, this.jV = Math.floor(1 + .075 * this.dZ), this.a1O = Math.floor(1 + .1125 * this.dZ), this.a1P = Math.floor(this.dZ * (ae.af.dW() ? .03 : .029)), this
				.a1P = Math.max(this.a1P, 4), this.a1Q = Math.floor(.035 * this.dZ), this.a1Q = Math.max(this.a1Q, 4), this.eq = this.da - 2 * this.jU - this.jV - this.a1O, this.hY && this.a1W()
		}, this.eA = function(i2, i3) {
			var a1Y, a1X;
			return !!this.hY && (a1X = i2, a1Y = i3, i2 -= aF(b9.dZ - this.dZ, 2), i3 -= aF(b9.da - this.da, 2), i2 < 0 || i3 < 0 || i2 >= this.dZ || i3 >= this.da || i2 >= this.dZ - this.a1O && i3 < this.a1O ? 1 < bD.eA(a1X, a1Y) || this.fw() : i3 <
				this.a1O || (i3 < this.da - this.jV ? (this.a1T = !0, this.a1S = (i2 - 2 * this.en - this.a1M) / this.a1N, 3 !== this.b4 && (b6.bJ = !0)) : (a1X = (a1X = Math.floor(i2 / (this.dZ / this.mT.length))) < 0 ? 0 : a1X >= this.mT
					.length ? this.mT.length - 1 : a1X) !== this.b4 && (this.b4 = a1X, this.a1W(), b6.bJ = !0)), !0)
		}, this.a1Z = function() {
			var a1a = Math.floor((this.a1U[0] + sG) / sF),
				a1b = Math.floor((this.a1U[1] + sH) / sF);
			a1a < 1 || a1b < 1 || a1a >= e1.e0 - 1 || a1b >= e1.e2 - 1 || console.log(a1a + " " + a1b)
		}, this.eE = function(i2, i3) {
			return this.a1U[0] = i2, this.a1U[1] = i3, !(!this.hY || !this.a1T || (i2 -= aF(b9.dZ - this.dZ, 2), i3 = this.a1S, this.a1S = (i2 - 2 * this.en - this.a1M) / this.a1N, (0 <= this.a1S && this.a1S <= 1 || 0 <= i3 && i3 <= 1) && (b6.bJ = !
				0), 0))
		}, this.le = function() {
			this.a1T && (this.a1T = !1)
		}, this.fW = function() {
			this.hY ? this.fw() : this.show()
		}, this.show = function() {
			cd.fU < 2 || (this.hY = !0, this.a1W())
		}, this.fw = function() {
			this.hY = !1, this.a1S = -1, b6.bJ = !0
		}, this.a1W = function() {
			this.b4 < 2 ? this.a1M = ei.measureText(n.eU.eV(cd.max[this.b4]), n.o.dc(0, this.a1P)) : 2 === this.b4 && (this.a1M = ei.measureText(n.eU.mo(6, 2), n.o.dc(0, this.a1P))), this.a1N = this.dZ - 2 * this.en - this.a1M - this.eo
		}, this.np = function() {
			this.hY && this.a1W()
		}, this.eK = function() {
			this.hY && this.a1c()
		}, this.a1c = function() {
			var eB = aF(b9.dZ - this.dZ, 2),
				eC = aF(b9.da - this.da, 2);
			eL.setTransform(1, 0, 0, 1, eB, eC), eL.fillStyle = ac.c8, eL.fillRect(0, this.a1O, this.dZ, this.da - this.a1O), this.a1d(), this.a1e(), eL.strokeRect(0, 0, this.dZ, this.da), n.o.textAlign(eL, 2), eL.font = n.o.dc(0, this.a1P), 0 ===
				this.b4 ? this.a1f(cd.qu, eB, eC) : 1 === this.b4 ? this.a1f(cd.yS, eB, eC) : 2 === this.b4 ? this.a1g(eB, eC) : 3 === this.b4 && (this.a1h(eB, eC), this.a1i(eB, eC)), bD.eb(Math.floor(eB + this.dZ - .725 * this.a1O), Math.floor(eC +
					.275 * this.a1O), Math.floor(.45 * this.a1O)), eL.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a1d = function() {
			var l, bo;
			for (eL.lineWidth = this.a1R, n.o.textBaseline(eL, 1), n.o.textAlign(eL, 1), eL.strokeStyle = ac.c7, eL.font = n.o.dc(1, this.a1Q), bo = this.dZ / this.mT.length, eL.fillStyle = ac.el, eL.fillRect(this.b4 * bo, this.da - this.jV, bo, this
					.jV), eL.fillStyle = ac.c7, eL.fillRect(0, this.da - this.jV - .5 * this.a1R, this.dZ, this.a1R), l = 1; l <= 3; l++) eL.fillRect(l * bo, this.da - this.jV, this.a1R, this.jV);
			for (l = this.mT.length - 1; 0 <= l; l--) eL.fillText(this.mT[l], (l + .5) * bo, this.da - .46 * this.jV)
		}, this.a1e = function() {
			eL.fillStyle = ac.a1j, eL.fillRect(0, 0, this.dZ, this.a1O), eL.fillStyle = ac.c7, eL.fillRect(0, this.a1O - .5 * this.a1R, this.dZ, this.a1R), eL.font = n.o.dc(1, .39 * this.a1O), eL.fillText("Statistics", Math.floor(this.dZ / 2), Math
				.floor(.55 * this.a1O))
		}, this.a1f = function(a5, eB, eC) {
			var mr = cd.max[this.b4],
				a04 = (eL.setTransform(1, 0, 0, 1, eB + 2 * this.en + this.a1M, eC + this.jU + this.a1O), eL.lineWidth = 2, this.eq / Math.sqrt(mr));
			eL.beginPath(), eL.moveTo(this.a1N, this.eq - a04 * Math.sqrt(a5[cd.fU - 1]));
			for (var l = cd.fU - 2; 0 <= l; l--) eL.lineTo(l * this.a1N / (cd.fU - 1), this.eq - a04 * Math.sqrt(a5[l]));
			eL.stroke();
			eB = this.eb(a5, a04, .5);
			eB < .95 && eL.fillText(n.eU.eV(mr), -this.en, 0), .05 < Math.abs(eB - .5) && eL.fillText(n.eU.eV(Math.floor(mr / 4)), -this.en, Math.floor(this.eq / 2)), .05 < eB && eL.fillText("0", -this.en, this.eq)
		}, this.a1g = function(eB, eC) {
			eL.setTransform(1, 0, 0, 1, eB + 2 * this.en + this.a1M, eC + this.jU + this.a1O), eL.lineWidth = 2;
			var a04 = this.eq / Math.max(cd.max[this.b4], 1);
			eL.beginPath(), eL.moveTo(this.a1N, this.eq - a04 * cd.n6[cd.fU - 1]);
			for (var l = cd.fU - 2; 0 <= l; l--) eL.lineTo(l * this.a1N / (cd.fU - 1), this.eq - a04 * cd.n6[l]);
			eL.stroke();
			eB = this.eb(cd.n6, a04, 1), eC = cd.max[this.b4] / 100;
			eB < .95 && eL.fillText(n.eU.mo(eC, 2), -this.en, 0), .05 < Math.abs(eB - .5) && eL.fillText(n.eU.mo(eC / 2, 2), -this.en, Math.floor(this.eq / 2)), .05 < eB && eL.fillText(n.eU.mo(0, 2), -this.en, this.eq)
		}, this.a1h = function(eB, eC) {
			eL.setTransform(1, 0, 0, 1, eB + .34 * this.dZ, eC + 2 * this.jU + this.a1O), n.o.textAlign(eL, 2);
			for (var lP = this.da - 4 * this.jU - this.jV - this.a1O, l = 7; 0 <= l; l--) eL.fillText(cd.a1k[l], 0, l * lP / 7);
			eL.setTransform(1, 0, 0, 1, eB + .39 * this.dZ, eC + 2 * this.jU + this.a1O), n.o.textAlign(eL, 0);
			eB = cd.mU[1];
			for (eL.fillText(n.eU.mo(cd.mU[0] / (10 * (eB < 1 ? 1 : eB)), 1), 0, 0), l = 6; 1 <= l; l--) eL.fillText(cd.mU[l].toString(), 0, l * lP / 7);
			eL.fillText(n.eU.mo(100 * (1 - bU.bp[ao.bW] / cd.mU[7]), 0), 0, lP)
		}, this.a1i = function(eB, eC) {
			eL.setTransform(1, 0, 0, 1, eB + .79 * this.dZ, eC + 2 * this.jU + this.a1O), n.o.textAlign(eL, 2);
			var l, lP = this.da - 4 * this.jU - this.jV - this.a1O;
			for (eL.fillStyle = ac.kF, l = 2; 0 <= l; l--) eL.fillText(cd.a1k[l + 8], 0, l * lP / 9);
			for (eL.fillStyle = ac.a1l, eL.fillText(cd.a1k[11], 0, 3 * lP / 9), eL.fillStyle = ac.a1m, l = 8; 4 <= l; l--) eL.fillText(cd.a1k[l + 8], 0, l * lP / 9);
			eL.fillStyle = ac.kG, eL.fillText(cd.a1k[17], 0, 9 * lP / 9), eL.fillStyle = ac.kF;
			var a1n = n.eU.eV(cd.mU[8] + cd.mU[9] + cd.mU[10] + cd.mU[11]),
				a1o = eL.measureText(a1n).width,
				eB = (eL.setTransform(1, 0, 0, 1, eB + .83 * this.dZ + a1o, eC + 2 * this.jU + this.a1O), eL.fillText(n.eU.eV(cd.mU[8]), 0, 0), eL.fillText(n.eU.eV(cd.mU[9]), 0, lP / 9), eL.fillText(n.eU.eV(cd.mU[10]), 0, 2 * lP / 9), eL.fillStyle =
					ac.a1l, eL.fillText(a1n, 0, 3 * lP / 9), eL.fillStyle = ac.a1m, cd.mU[13] - f6.a1q(ao.bW)),
				a1o = (eL.fillText(n.eU.eV(cd.mU[12]), 0, 4 * lP / 9), eL.fillText(n.eU.eV(eB), 0, 5 * lP / 9), eL.fillText(n.eU.eV(cd.mU[14]), 0, 6 * lP / 9), eL.fillText(n.eU.eV(cd.mU[15]), 0, 7 * lP / 9), eL.fillText(n.eU.eV(cd.mU[16]), 0, 8 *
					lP / 9), cd.mU[12] + eB + cd.mU[14] + cd.mU[15] + cd.mU[16] + cd.mU[17]);
			eL.fillStyle = ac.kG, eL.fillText(n.eU.eV(a1o), 0, lP), eL.fillStyle = ac.c7
		}, this.eb = function(a5, a04, a1s) {
			var l, i, nV;
			return this.a1S < 0 || 1 < this.a1S ? .25 : (l = this.a1S * (cd.fU - 1), nV = a5[i = Math.floor(l)], nV += (l - i) * (a5[i < cd.fU - 1 ? i + 1 : i] - nV), eL.strokeStyle = ac.a1t, .04 < this.a1S && this.a1u(0, this.eq - a04 * Math.pow(nV,
					a1s), l * this.a1N / (cd.fU - 1), this.eq - a04 * Math.pow(nV, a1s)), .04 < nV / cd.max[this.b4] && this.a1u(l * this.a1N / (cd.fU - 1), this.eq, l * this.a1N / (cd.fU - 1), this.eq - a04 * Math.pow(nV, a1s)), eL.fillStyle =
				ac.a1v, eL.beginPath(), eL.arc(l * this.a1N / (cd.fU - 1), this.eq - a04 * Math.pow(nV, a1s), Math.max(2, .014 * this.da), 0, 2 * Math.PI), eL.fill(), a5 = this.a1S * b6.bC, a5 = 0 === bU.bV[ao.bW] ? Math.floor(a5 * ex.a1w) : Math
				.floor(a5 * b6.f2()), eL.fillStyle = ac.c7, eL.fillText(1 === a1s ? n.eU.mo(nV / 100, 2) : n.eU.eV(Math.floor(nV)), -this.en, this.eq - a04 * Math.pow(nV, a1s)), n.o.textAlign(eL, 1), eL.fillText(ey.mp(a5), l * this.a1N / (cd.fU -
					1), this.eq + this.a1P - (ae.af.dW() ? 2 : 0) - this.a1R), n.o.textAlign(eL, 2), a04 * Math.pow(nV, a1s) / this.eq)
		}, this.a1u = function(eG, eH, ih, eZ) {
			eL.beginPath(), eL.moveTo(eG, eH), eL.lineTo(ih, eZ), eL.stroke()
		}
}

function vm() {
	var a1x, a1y, a1z, a20, a21, a22, a23, a24;

	function a26(l) {
		var v;
		for (a1z--, v = l; v < a1z; v++) a20[v] = a20[v + 1], a21[v] = a21[v + 1], a22[v] = a22[v + 1], a23[v] = a23[v + 1], a24[v] = a24[v + 1]
	}
	this.k = function() {
		a1x = 1, a1z = 0, a1y = 2 * ao.l4, a20 = new Uint16Array(a1y), a21 = new Uint8Array(a1y), a22 = new Uint16Array(a1y), a23 = new Uint32Array(a1y), a24 = new Uint32Array(a1y)
	}, this.a25 = function(b4, position) {
		a23[b4] = position
	}, this.b8 = function() {
		for (var l = a1z - 1; 0 <= l; l--) 0 == a21[l]-- && (a21[l] = 2, vR.b8(l, a22[l], a20[l], a23[l], a24[l]))
	}, this.a0h = function(player, id) {
		for (var l = a1z - 1; 0 <= l; l--)
			if (player === a20[l] && id === a22[l]) return void a26(l)
	}, this.a27 = function(player) {
		for (var l = a1z - 1; 0 <= l; l--) player === a20[l] && (vR.a28(player, a23[l]), a26(l))
	}, this.a29 = function(player, hW, a2A) {
		if (a1y <= a1z) return 0;
		a20[a1z] = player, a21[a1z] = 0, a22[a1z] = a1x, a23[a1z] = hW, a24[a1z] = a2A;
		player = a1x;
		return a1z++, a1x = 2 * a1y < ++a1x ? 1 : a1x, player
	}, this.eK = function() {
		if (!(sF < 40 || 0 === a1z)) {
			var v, eB, eC, l, fontSize, a2F, cS, eG = sG / sF,
				eH = sH / sF,
				ih = (b9.dZ + sG) / sF,
				eZ = (b9.da + sH) / sF;
			for (n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), v = a1z - 1; 0 <= v; v--) eB = bX.a2G(a23[v]), eC = bX.a17(a23[v]), l = a20[v], eG - 1 < eB && eB < ih && eH - 1 < eC && eC < eZ && 0 !== bU.bV[l] && ((fontSize = Math.floor(.94 *
				sF * cf.a2H(l))) < 6 || (eB = Math.floor(b9.dZ * (eB + .5 - eG) / (ih - eG)), eC = Math.floor(b9.da * (eC + .48 - eH) / (eZ - eH)), eL.font = n.o.dc(1, fontSize), eL.fillStyle = ac.ep, cS = f6.a0b(l, f6.a2I(l, a22[v])), eL
				.fillText(by.bz.data[7].value ? n.eU.eV(cS) : bU.l6[l], eB, eC), (a2F = Math.floor(.5 * fontSize)) < 6) || (eL.font = n.o.dc(1, a2F), eL.fillText(by.bz.data[7].value ? bU.l6[l] : n.eU.eV(cS), eB, eC + Math.floor(.82 *
				fontSize))))
		}
	}
}

function w0() {
	var a2J, a2K, mO, a2L, a2M, a2N, a2O, a2P, a2Q, mR, fontSize, xi, a2R, gy, a2S = 0;

	function a2V() {
		return ak.al.gk[(a2R + a2S) % ak.al.gj]
	}

	function a2T() {
		a2R++, xi = b6.b5, ak.al.gv(a2V(), 4) && (gy = !0, ak.eI.zo(a2V()))
	}

	function a2W() {
		0 === a2R ? hG.av(3249) : (a2R === ak.al.gj - 1 && (a2R = -1), a2T())
	}

	function a2e(eC, a2d, ds) {
		var eG = Math.floor((b9.dZ - a2L) / 2) + a2O,
			ih = eG + Math.floor(ds * (a2L - 2 * a2O));
		eL.lineWidth = a2d, eL.beginPath(), eL.moveTo(eG, eC), eL.lineTo(ih, eC), eL.lineTo(Math.floor(eG - a2O + ds * a2L), eC + mO), eL.lineTo(eG - a2O, eC + mO), eL.closePath()
	}
	this.k = function() {
		aW.setState(6), a2J = 0, a2K = 1, a2P = "rgba(0,220,120,0.4)", a2Q = "rgba(0,0,0,0.8)", this.resize(), b6.bJ = !0, a2R = 0, gy = !1, a2T()
	}, this.resize = function() {
		a2L = Math.floor((ae.af.dW() ? .5 : .25) * b9.dX), a2M = a2L + 12, mO = Math.floor(.125 * a2L), a2O = 3 * mO, a2N = Math.floor(.225 * a2L), fontSize = Math.floor(.3 * mO), mR = n.o.dc(0, fontSize)
	}, this.a2U = function(v) {
		a2S = v
	}, this.aj = function(aN) {
		aN === a2V() && (gy = !1, a2W())
	}, this.a2X = function(aN) {
		6 !== aW.aX() || gy || (xi = b6.b5, gy = !0)
	}, this.eA = function(eB, eC) {
		var eG = Math.floor((b9.dZ - a2M) / 2),
			eH = Math.floor(.5 * (b9.da - dY.gap - mO - a2N)) + mO + dY.gap;
		return eG < eB && eB < eG + a2M && eH < eC && eC < eH + a2N && (this.a2Z(), eD.eE(eB, eC, !1), !0)
	}, this.a2Z = function() {
		ak.al.az(3260), aO.al.ay()
	}, this.b8 = function() {
		6 === aW.aX() && (gy ? b6.b5 > xi + 12e3 && hG.av(3250) : b6.b5 > xi + 12e3 && a2W(), 100 < (a2J += .07 * a2K * (a2J < 16 ? 5 + a2J : 84 < a2J ? 105 - a2J : 17)) ? (a2J = 100, a2K = -1) : a2J < 0 && (a2J = 0, a2K = 1), a2P = "rgba(0," +
			Math.floor(190 - 1.9 * a2J) + "," + Math.floor(120 - 1.2 * a2J) + "," + (.4 + .004 * a2J) + ")", a2Q = "rgba(0," + Math.floor(1.9 * a2J) + "," + Math.floor(1.2 * a2J) + "," + (.8 - .004 * a2J) + ")", b6.bJ = !0)
	}, this.eK = function() {
		var eB = Math.floor((b9.dZ - a2M) / 2),
			eC = Math.floor(.5 * (b9.da - dY.gap - mO - a2N));
		! function(title, eC, a2d, ds) {
			eL.fillStyle = a2Q, a2e(eC, a2d, 1), eL.fill(), eL.fillStyle = a2P, a2e(eC, a2d, ds), eL.fill(), eL.strokeStyle = ac.c7, a2e(eC, a2d, 1), eL.stroke(),
				function(a2g, eC) {
					n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.font = mR, eL.fillStyle = ac.c7, eL.fillText(a2g, Math.floor(.5 * b9.dZ), Math.floor(eC + .58 * mO))
				}(title, eC)
		}("Loading", eC, 3, a2J / 100),
		function(eB, eC, dZ, da, aZ) {
			eL.fillStyle = ac.eP, eL.fillRect(eB, eC, dZ, da), eL.lineWidth = 3, eL.strokeStyle = ac.c7, eL.strokeRect(eB, eC, dZ, da);
			var m = Math.floor(.3 * da);
			n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.font = n.o.dc(0, m), eL.fillStyle = ac.c7, eL.fillText(aZ, Math.floor(eB + dZ / 2), Math.floor(eC + da / 2 + .1 * m))
		}(eB, eC + mO + dY.gap, a2M, a2N, "Back")
	}
}

function xM(player, xJ) {
	return cb.xL[1] = bU.n4[player].length, cb.xL[0] === ao.l4 ? a2h(player) : a2i(player, cb.xL[0]), (0 !== cb.xL[1] || 0 !== bU.n4[player].length) && !(!xJ && cb.xL[1] === bU.n4[player].length || (cb.xL[0] === ao.l4 ? bU.sl[player]++ : bU.sm[
		player]++, 0))
}

function xO(player) {
	ao.fC && (cX[player] = 1), a2j(cb.xL[1], player), f6.xE(player, cb.cc[0], cb.xL[0]), pD.a29(player, !1)
}

function a2k(player, xG, m, cS) {
	var a2l = aF(3 * bU.f8[player], 256);
	cS -= cS >= aF(bU.f8[player], 2) ? a2l : 0, a2j(m, player), f6.xE(player, cS, xG), bU.f8[player] -= cS + a2l, pD.a29(player, !1)
}

function a2i(player, xG) {
	for (var q1, l = bU.f9[player].length - 1; 0 <= l; l--)
		if (bX.a2m(bU.f9[player][l]))
			for (q1 = 3; 0 <= q1; q1--)
				if (bX.a0n(bU.f9[player][l] + a0O[q1]) && bX.qS(bU.f9[player][l] + a0O[q1]) === xG) {
					bU.n4[player].push(bU.f9[player][l]);
					break
				}
}

function a2j(size, player) {
	for (var l = bU.n4[player].length - 1; size <= l; l--) bX.a2n(bU.n4[player][l], player)
}

function a2h(player) {
	for (var l = bU.f9[player].length - 1; 0 <= l; l--)
		if (bX.a2m(bU.f9[player][l]))
			for (var q1 = 3; 0 <= q1; q1--)
				if (bX.qR(bU.f9[player][l] + a0O[q1])) {
					bU.n4[player].push(bU.f9[player][l]);
					break
				}
}

function a2o(player, a2p) {
	var l, v, q1, a2q, m = bU.f9[player].length,
		jD = 256 <= m ? 12 : 32 <= m ? 6 : 1,
		hW = m - 1 - aK.oW(jD);
	a2r = 0;
	loop: for (l = hW; 0 <= l; l -= jD)
		for (q1 = 3; 0 <= q1; q1--)
			if ((a2q = bX.qR(bU.f9[player][l] + a0O[q1]) ? ao.l4 : bX.qS(bU.f9[player][l] + a0O[q1])) === ao.l4 || bX.a0n(bU.f9[player][l] + a0O[q1]) && a2q !== player && (a2p || qT(player, a2q))) {
				for (v = a2r - 1; 0 <= v; v--)
					if (a2s[v] === a2q) continue loop;
				if (a2s[a2r] = a2q, ++a2r >= a2t) return !0
			}
	return 0 < a2r
}

function a2u(player, a2p) {
	var l, q1, a2q;
	for (a2r = 0, l = bU.f9[player].length - 1; 0 <= l; l--)
		for (q1 = 3; 0 <= q1; q1--)
			if ((a2q = bX.qR(bU.f9[player][l] + a0O[q1]) ? ao.l4 : bX.qS(bU.f9[player][l] + a0O[q1])) === ao.l4 || bX.a0n(bU.f9[player][l] + a0O[q1]) && a2q !== player && (a2p || qT(player, a2q))) return a2s[a2r++] = a2q, !0;
	return !1
}

function a2v() {
	for (var a8, l = a2r - 1; 0 <= l; l--)
		if (a2s[l] === ao.l4) {
			for (a2r--, a8 = l; a8 < a2r; a8++) a2s[a8] = a2s[a8 + 1];
			return !0
		} return !1
}

function a2w(player) {
	for (var a8, l = a2r - 1; 0 <= l; l--)
		if (f6.xK(player, a2s[l]))
			for (a2r--, a8 = l; a8 < a2r; a8++) a2s[a8] = a2s[a8 + 1];
	return 0 === a2r
}

function a2x() {
	for (var l = a2r - 1; 0 <= l; l--)
		if (a2s[l] >= ao.cW) return !0;
	return !1
}

function a2y() {
	for (var l = a2r - 1; 0 <= l; l--) a2s[l] < ao.cW && (a2s[l] = a2s[--a2r]);
	return 0 < a2r
}

function a2z(player) {
	for (var a8, a30 = a2s[0], a31 = bU.f8[a30] + f6.a32(a30, player), l = a2r - 1; 1 <= l; l--)(a8 = bU.f8[a2s[l]] + f6.a32(a2s[l], player)) < a31 && (a30 = a2s[l], a31 = a8);
	return a30
}

function a33(player) {
	var da, a34 = a2s[0];
	if (1 !== a2r)
		for (var a35 = aF(bU.qc[player] + bU.qa[player], 2), a36 = aF(bU.qd[player] + bU.qb[player], 2), rl = a37(a35 - aF(bU.qc[a34] + bU.qa[a34], 2)) + a37(a36 - aF(bU.qd[a34] + bU.qb[a34], 2)), l = a2r - 1; 1 <= l; l--)(da = a37(a35 - aF(bU.qc[
			a2s[l]] + bU.qa[a2s[l]], 2)) + a37(a36 - aF(bU.qd[a2s[l]] + bU.qb[a2s[l]], 2))) < rl && (rl = da, a34 = a2s[l]);
	return a34
}

function a38() {
	return a2s[aK.oW(a2r)]
}

function z8() {
	function a39(l, title, type, sQ, a0o, fb) {
		by.bz.data.push({
			b4: l,
			title: title,
			type: type || 0,
			sQ: sQ,
			value: a0o || 0,
			a0o: a0o || 0,
			fb: fb || 0
		})
	}

	function a3A(l, title, type, sQ, a0o, fb) {
		by.bz.data.push({
			b4: l,
			title: title,
			type: type,
			sQ: sQ,
			value: a0o || "",
			a0o: a0o || "",
			fb: fb || 0
		})
	}

	function a3B(hP) {
		for (var l = by.bz.data.length; l < hP; l++) by.bz.data.push(null)
	}
	this.data = [], this.k = function() {
		a39(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), a39(1, "", 1, null, 1), a39(2, "", 0, [0, 1]), a3A(3, "Username", 2), a39(4, "Font5", 1, ["Default", "Custom"]), a3A(5, "", 2, null, "Trebuchet MS",
				1), a39(6, "", 0, [0, 1]), a39(7, "", 0, [0, 1], 0), a39(8, "", 0, [0, 1]), a39(9, "", 1, null, 1), a39(10, "", 1, null), a39(11, "", 1, null, 1), a3B(100), a3A(100, "Username", 2), a3A(101, "Password", 2), a3A(102, "Emojis", 2),
			a3A(103, "Colors", 2), a3A(104, "Clan", 2), a3A(105, "AccountName", 2), a3A(106, "Password", 2), a39(107), a39(108), a39(109), a3A(110, null, 2), a39(111), a39(112), a39(113), a3A(114, null, 2), a39(115), a3A(116, null, 2), a39(117,
				null, 1), a3A(118, null, 2, null, "", 2), a39(119, null, 1, null, 0, 1), a3A(120, null, 2), a39(121, "CountryColor", 1, null, ~~(262144 * Math.random())), a3A(122, "Username", 2, null, "Player " + Math.floor(1e3 * Math.random())),
			a39(123), a3A(124), a39(125, null, 1, ["M1", "M5", "H1", "H4", "D1", "W1", "MN"]), a3A(126, null, 2), a39(127, "Y-Axis Compression", 0, [0, 1], 1), a39(128), a39(129), a39(130), a39(131), a39(132), a3A(133, null, 2), a39(134, null, 0,
				null, 5), a3A(135, null, 2), a3A(136, null, 2), a39(137), a39(138), a39(139), a39(140), a39(141), a39(142), a39(143), a39(144), a3B(180), a39(180, "R0", 0), a39(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + aS.aZ[101], this.data[1].title = aS.aZ[102], this.data[2].title = aS.aZ[103], this.data[5].title = aS.aZ[104], this.data[6].title = aS.aZ[105], this.data[7].title = aS.aZ[106], this.data[8].title = aS.aZ[107],
			this.data[9].title = aS.aZ[108], this.data[10].title = aS.aZ[109], this.data[11].title = aS.aZ[110], this.data[1].sQ = [aS.aZ[111], aS.aZ[112], aS.aZ[113], aS.aZ[114]], this.data[9].sQ = [aS.aZ[112], aS.aZ[115], aS.aZ[116]], this
			.data[10].sQ = [aS.aZ[109] + " 1", aS.aZ[117] + " 1", aS.aZ[109] + " 2", aS.aZ[117] + " 2"], this.data[11].sQ = [aS.aZ[118], aS.aZ[119], aS.aZ[120]]
	}, this.dd = function(b4, value) {
		this.data[b4].value = value
	}, this.i1 = function(b4, value) {
		this.dd(b4, value), by.fz.save(b4, String(value)), by.fz.save(b4, String(this.data[b4].fb), !0)
	}, this.a3C = function() {
		for (var l = 0; l < this.data.length; l++) this.data[l] && (by.fz.save(l, String(this.data[l].value)), by.fz.save(l, String(this.data[l].fb), !0))
	}, this.mF = function(b4) {
		return Number(this.data[b4].value)
	}, this.m9 = function(b4) {
		return String(this.data[b4].value)
	}
}

function a3D() {
	this.o7 = function(aN, hA) {
		kU.k(hA), 0 === kU.size ? ak.al.hF(aN, 3205) : ((0 === kU.kV(1) ? function(aN) {
			var a3G = kU.kV(6);
			0 === a3G ? function(aN) {
				if (0 === aN && 8 !== aW.aX()) {
					aO.al.a3S();
					for (var a3T = kU.kV(12), a3U = kU.kV(6), a5 = new Array(a3T), l = 0; l < a3T; l++) a5[l] = kU.kV(a3U);
					jG.a3V(a5)
				}
			}(aN) : 2 === a3G ? ak.a3I.kQ(aN) : 3 === a3G || 4 === a3G ? vU.k() : 5 !== a3G && 6 !== a3G && 7 !== a3G && 8 !== a3G && (9 === a3G ? ak.a3J.a3K(aN) : 10 === a3G ? ak.a3L.a3M() : 11 === a3G ? ak.a3J.a3N() : 12 ===
				a3G ? ak.a3L.a3O() : 13 === a3G ? ak.a3P.a3Q() : 14 === a3G && ak.a3P.a3R())
		} : function(aN) {
			if (8 !== aW.aX() && !vU.a3f()) return;
			if (aN !== ak.al.an) ak.al.hF(aN, 3244);
			else if (0 === kU.kV(1)) b6.lr.a3g(kU.hA);
			else {
				var l, aN = kU.kV(2);
				if (0 === aN) {
					var dE, gz = kU.kV(9);
					0 !== bU.bV[gz] && 0 !== bU.bV[ao.bW] && (dE = kU.kV(10), ar.i8(gz, ao.bW, dE), cf.xZ(gz, 1, dE))
				} else if (1 === aN) ! function() {
					var gz = kU.kV(9);
					0 !== bU.bV[gz] && 0 !== bU.bV[ao.bW] && pI.cH(0, [gz], !0) && ar.zu(gz, 1)
				}();
				else if (2 === aN) ! function() {
					var gz = kU.kV(9),
						target = kU.kV(9);
					0 !== bU.bV[gz] && 0 !== bU.bV[target] && 0 !== bU.bV[ao.bW] && pI.cH(1, [gz], !0) && (cf.xZ(gz, 3, 96), cf.xZ(target, 4, 96), ar.a3n(gz, target))
				}();
				else if (xu && !a3m) {
					var m = 720;
					for (t2.e7(14407), t2.hN(1, 0), t2.hN(6, 10), m = Math.min(bq.ow.ox.length, 720), l = 0; l < m; l++) t2.hN(20, bq.ow.ox[l]);
					ak.al.send(ak.al.an, t2.hA)
				}
			}
		})(aN), b6.lz())
	}, this.a3W = function(hA) {
		if (kU.k(hA), kU.b4 = 1, 3 === kU.kV(6)) {
			kU.b4 += 20;
			for (var uq, ur, name, hA = kU.kV(9), oq = kU.kV(14), dk = kU.kV(4), dm = 1 === kU.kV(1), dn = kU.kV(6), dp = kU.kV(14), a3e = kU.kV(9) + 1, cE = [], l = 0; l < a3e; l++) uq = kU.kV(1), ur = [kU.kV(6), kU.kV(6), kU.kV(6)], name = kW
				.kX.kY(kU.kV(5)), cE.push({
					name: name,
					ur: ur,
					uq: uq
				});
			aW.x4(), e1.e7(dn, dp), 1 === cE.length && jO.x5(dk), ao.op(oq, hA, cE, dk, dm, !1)
		} else ! function() {
			kU.b4 += 20;
			for (var uq, ur, us, name, a3c = kU.kV(1), oq = kU.kV(14), dk = kU.kV(4), dm = 1 === kU.kV(1), dn = kU.kV(6), dp = kU.kV(14), cE = [], l = 0; l < 2; l++) uq = kU.kV(1), ur = [kU.kV(6), kU.kV(6), kU.kV(6)], us = kU.kV(14), name =
				kW.kX.kY(kU.kV(5)), cE.push({
					name: name,
					ur: ur,
					us: us,
					uq: uq
				});
			aW.x4(), e1.e7(dn, dp), ao.op(oq, a3c, cE, dk, dm, !1)
		}()
	}, this.a3Z = function() {
		kU.b4 = 1;
		var a3G = kU.kV(6),
			a3a = kU.kV(10);
		return ak.al.am > ak.al.gi && (a3a += ak.al.gi), ak.al.am === a3a ? (ak.al.an = a3a, !1) : (ak.al.close(ak.al.am, 3247), ak.al.an = a3a, vU.a3b = kU.kV(10), vU.a3c = kU.kV(3 === a3G ? 9 : 1), ak.al.gv(a3a, 5) && ak.gz.a3d(), !0)
	}
}

function wf() {
	this.dP = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.lL = [ac
		.c7, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ac.c7, "rgb(170,170,170)"
	], this.a3o = [ac.c7, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ac.c7, ac.ep], this.a3p = [ac.ep, ac.c7, ac.c7, ac.c7, ac.ep, ac.ep, ac.ep, ac.ep, ac.c7];
	var a3q = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		a3u = (this.a3r = ["rgba(" + a3q[0] + ",", "rgba(" + a3q[1] + ",", "rgba(" + a3q[2] + ",", "rgba(" + a3q[3] + ",", "rgba(" + a3q[4] + ",", "rgba(" + a3q[5] + ",", "rgba(" + a3q[6] + ",", "rgba(" + a3q[7] + ",", "rgba(" + a3q[8] + ",",
			"rgba(" + a3q[9] + ","
		], this.a3s = ["rgb(" + a3q[0] + ")", "rgb(" + a3q[1] + ")", "rgb(" + a3q[2] + ")", "rgb(" + a3q[3] + ")", "rgb(" + a3q[4] + ")", "rgb(" + a3q[5] + ")", "rgb(" + a3q[6] + ")", "rgb(" + a3q[7] + ")", "rgb(" + a3q[8] + ")", "rgb(" + a3q[
			9] + ")"
		], this.g2 = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.a3t = [
			[255, 255, 255, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], [
			[255, 255, 255],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		]);
	this.lM = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.lN = new Uint8Array(ao.l4), this.qp = null, this.a3v = null, this.k = function(cE) {
		this.lN.fill(0), this.a3w(), ao.fC && (oR.hD && oR.iM.a3x ? this.a3y() : 9 === ao.bi ? this.a3z() : this.b8(cE))
	}, this.a3y = function() {
		var l, m = ao.ok;
		for (this.lM = [0, 1, 2, 3, 4, 5, 6, 7, 8], l = 0; l < m; l++) this.lN[l] = oR.iM.a3x[l]
	}, this.a3w = function() {
		for (var l = this.lM.length - 1; 0 <= l; l--) this.lM[l] = l;
		this.qp = [], this.a3v = []
	}, this.a3z = function() {
		for (var l = ao.cW + oX.z7 - 1; 0 <= l; l--) this.lN[l] = 1;
		for (l = ao.cW + oX.z7; l < ao.l4; l++) this.lN[l] = 2;
		this.lM[1] = 7, this.lM[2] = 8
	}, this.b8 = function(cE) {
		var dz = new Uint8Array(ao.cW),
			a05 = new Uint8Array(ao.cW),
			a40 = new Uint16Array(8),
			a41 = new Uint16Array(this.lM.length);
		this.a42(cE, dz, a05, a40), this.a43(a40), ao.ap || this.a44(a41, dz, a05), this.a45(dz, a05, a41), ao.ap ? this.a46() : this.a47()
	}, this.a42 = function(cE, dz, a05, a48) {
		for (var a8, i, a49, m = this.lM.length - 1, a5 = new Uint16Array(m), l = ao.cW - 1; 0 <= l; l--) {
			for (a8 = m; 1 <= a8; a8--) a5[a8 - 1] = Math.abs(4 * cE[l].ur[0] - a3u[a8][0]) + Math.abs(4 * cE[l].ur[1] - a3u[a8][1]) + Math.abs(4 * cE[l].ur[2] - a3u[a8][2]);
			for (a49 = 768, a8 = m - 1; 0 <= a8; a8--) a5[i = (a8 + l) % m] < a49 && (a49 = a5[i], dz[l] = i);
			for (a48[dz[l]] += 4, a49 = 768, a8 = m - 1; 0 <= a8; a8--) a5[i = (a8 + l) % m] < a49 && i !== dz[l] && (a49 = a5[i], a05[l] = i);
			a48[a05[l]]++
		}
	}, this.a43 = function(a48) {
		for (var a8, a4A, m = this.lM.length - 1, l = m; 0 <= l; l--) this.lM[l] = l;
		for (l = m - 1; 0 <= l; l--) a48[l]++;
		for (l = 1; l <= m; l++) {
			for (a4A = 0, a8 = 1; a8 < m; a8++) a48[a8] > a48[a4A] && (a4A = a8);
			a48[a4A] = 0, this.lM[l] = a4A + 1
		}
	}, this.a44 = function(a41, dz, a05) {
		var l, a8, a4B, a2, hR, i, tQ, n9, a4C = this.lM.length - 1,
			a4D = new Uint16Array(a4C),
			a4E = [],
			jU = Math.max(ao.cW + 1 >> 1, 6);
		loop: for (l = 0; l < ao.cW; l++)
			if (null !== (a4B = n.eU.qt(bU.l7[l]))) {
				for (a8 = this.qp.length - 1; 0 <= a8; a8--)
					if (a4B === this.qp[a8] && this.a3v[a8].length < jU) {
						this.a3v[a8].push(l);
						continue loop
					} this.qp.push(a4B), a4E.push(!1), this.a3v.push([l])
			}
		for (a8 = this.qp.length - 1; 0 <= a8; a8--) {
			for (hR = -1, a2 = this.qp.length - 1; 0 <= a2; a2--) !a4E[a2] && (-1 === hR || this.a3v[a2].length > this.a3v[hR].length) && (hR = a2);
			for (a2 = a4C - 1; 0 <= a2; a2--) a4D[a2] = 1;
			for (a2 = this.a3v[hR].length - 1; 0 <= a2; a2--) a4D[dz[this.a3v[hR][a2]]] += 3, a4D[a05[this.a3v[hR][a2]]]++;
			for (l = a4C - 1; 0 <= l; l--) {
				for (i = hR % a4C, a2 = a4C - 1; 0 <= a2; a2--) a4D[a2] > a4D[i] && (i = a2);
				for (tQ = -1, a2 = ao.nh; 0 < a2; a2--)
					if (this.lM[a2] === i + 1) {
						tQ = a2;
						break
					} if (a4D[i] = 0, -1 !== tQ) {
					for (n9 = 0, a2 = ao.nh; 0 < a2; a2--) a41[tQ] > a41[a2] && n9++;
					if (n9 !== ao.nh - 1) {
						for (a2 = this.a3v[hR].length - 1; 0 <= a2; a2--) a41[tQ]++, this.lN[this.a3v[hR][a2]] = tQ;
						break
					}
				}
			}
			a4E[hR] = !0
		}
	}, this.a45 = function(dz, a05, a41) {
		for (var l, kH, m = this.lM.length - 1, border = aF(ao.cW, ao.nh), a4F = (0 < ao.cW % ao.nh && border++, new Uint8Array(1 + m)), a8 = m; 1 <= a8; a8--) a4F[this.lM[a8]] = a8;
		for (l = 0; l < ao.cW; l++) kH = a4F[dz[l] + 1], 0 === this.lN[l] && kH <= ao.nh && a41[kH] < border && (a41[kH]++, this.lN[l] = kH);
		for (l = 0; l < ao.cW; l++) kH = a4F[a05[l] + 1], 0 === this.lN[l] && kH <= ao.nh && a41[kH] < border && (a41[kH]++, this.lN[l] = kH);
		for (a8 = ao.nh; 1 <= a8; a8--)
			for (l = ao.cW - 1; 0 <= l && !(a41[a8] >= border); l--) 0 === this.lN[l] && (a41[a8]++, this.lN[l] = a8)
	}, this.a46 = function() {
		var l, v, a48 = new Uint16Array(ao.nh);
		for (a48[ao.nh - 1] = ao.l4, l = ao.nh - 2; 0 <= l; l--) a48[l] = jO.oU[l].dI;
		for (a48[0]--, v = 0 === a48[0] ? 1 : 0, l = ao.cW; l < ao.l4; l++) this.lN[l] = v + 1, a48[v]--, a48[v] <= 0 && v++
	}, this.a47 = function() {
		for (var l = ao.cW; l < ao.l4; l++) this.lN[l] = 1 + l % ao.nh
	}
}

function a4G() {
	this.bs = function() {
		for (var a6, lN, m = ao.cW, bP = bc.result.bP, a4H = bP.length, bx = (t2.e7(40 + 16 * m + a4H * (33 + 3 * (ao.bi < 7))), t2.hN(1, 1), t2.hN(4, 10), t2.hN(10, a4H), t2.hN(1, +(2 === ao.bZ)), t2.hN(24, bc.result.bQ), bU.bx), l = 0; l <
			m; l++) t2.hN(16, bx[l]);
		var bp = bU.bp;
		for (l = 0; l < a4H; l++) a6 = bP[l], t2.hN(9, a6), t2.hN(24, bp[a6]);
		if (ao.bi < 7)
			for (lN = dO.lN, l = 0; l < a4H; l++) t2.hN(3, 7 & lN[bP[l]]);
		ak.al.send(ak.al.an, t2.hA)
	}
}

function a4I() {
	var he = 32,
		hd = new Array(2);

	function j7(a2) {
		var eB, eC, rj, nc, nb, hZ = he,
			dH = n.o.j7(hZ, hZ),
			dF = n.o.getContext(dH, !0),
			oB = n.o.getImageData(dF, hZ, hZ),
			d = oB.data,
			mr = (hZ >> 1) - .5,
			a4J = Math.sqrt(mr * mr);
		for (d.fill(255), eC = 0; eC < hZ; eC++)
			for (eB = 0; eB < hZ; eB++) nb = eB - mr, nc = eC - mr, rj = 4 * (eC * hZ + eB), nb = 714 * (a4J - Math.sqrt(nb * nb + nc * nc)) / a4J, d[2 + rj] = a2, d[3 + rj] = 255 < nb ? 0 : nb;
		return dF.putImageData(oB, 0, 0), dH
	}
	this.sK = -1, this.k = function() {
		this.sK = -1, hd[0] || (hd[0] = j7(255), hd[1] = j7(0))
	}, this.a4K = function(dF, ge, eB, eC, aI, l) {
		n.br.c1(ao.bW) && (dF.setTransform(ge *= 4 / 3 * .625, 0, 0, ge, eB - (aI *= 4 / 3), eC - aI), dF.drawImage(hd[+(fA.al.a4L[l] === this.sK)], 0, 0))
	}
}

function a4M() {
	this.hD = !1, this.b8 = function() {
		b6.f2() % 250 != 249 || ao.fX || (ak.h8.a4N(+(this.hD && 0 < bU.bV[ao.bW]), mc + fA.al.qC), this.hD = !1)
	}
}

function iV() {
	2 === e1.dh ? a4O([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === e1.dh ? a4O([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === e1.dh ? a4O([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === e1.dh && a4O([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function a4O(a4P, a4Q, a4R, a4S, a4T) {
	for (var eB, eC, ip, ir, a04, a4V, kH = a4P.length - 1, a4U = e1.e0 + e1.e2, m = (a4U *= a4U, a4R.length), l = m - 1; 0 <= l; l--) a4R[l] *= a4R[l];
	var a4W = new Array(m),
		a4X = new Array(m),
		a4Y = new Array(m),
		aC = iS.pi();
	if (void 0 === a4T)
		for (a4T = new Array(m), l = m - 1; 0 <= l; l--) a4T[l] = 0;
	for (l = 1; l < m; l++) a4W[l] = a4R[l] - a4R[l - 1], a4X[l] = a4S[l] - a4S[l - 1], a4Y[l] = a4T[l] - a4T[l - 1];
	for (eB = e1.e0 - 1; 0 <= eB; eB--)
		for (eC = e1.e2 - 1; 0 <= eC; eC--) {
			for (ip = a4U, l = kH; 0 <= l; l--) ip = (ir = (eB - a4P[l]) * (eB - a4P[l]) + (eC - a4Q[l]) * (eC - a4Q[l])) < ip ? ir : ip;
			for (a04 = a4S[m - 1], a4V = a4T[m - 1], l = 1; l < m; l++)
				if (ip < a4R[l]) {
					a04 = a4S[l - 1] + a4Z((ip - a4R[l - 1]) * a4X[l], a4W[l]), a4V = a4T[l - 1] + a4Z((ip - a4R[l - 1]) * a4Y[l], a4W[l]);
					break
				} a4a(e1.e0 * eC + eB, a04, a4V, aC)
		}
}

function a4a(b4, a04, a4V, aC) {
	a04 < 500 ? aC[b4] = aF(aC[b4] * a04 * 2, 1e3) : 500 < a04 && (aC[b4] += aF(2 * (1e4 - aC[b4]) * (a04 - 500), 1e3)), aC[b4] += aF(a4V * (10 * a04 - aC[b4]), 1e3)
}

function wB() {
	var a4b;
	this.oY = null, this.k = function() {
		a4b = [], 9 === ao.bi && this.a4c()
	}, this.a4c = function() {
		var l, a4d = [50, 74, 95, 150, 190, 333];
		if (this.z7 = 0, this.oY = [0, 0, 0, 0, 0, 0], ao.cW <= a4d[0]) this.oY[0] = Math.max(hS.hT(ao.cW * (512 - ao.cW), a4d[0]), 13), ao.md = this.oY[0];
		else
			for (ao.md = ao.l4 - ao.cW, l = 1; l < 6; l++)
				if (ao.cW <= a4d[l]) {
					this.oY[l - 1] = 512 - a4d[l - 1] - aF((512 - a4d[l - 1]) * (ao.cW - a4d[l - 1]), a4d[l] - a4d[l - 1]), this.oY[l] = 512 - ao.cW - this.oY[l - 1];
					break
				} ao.ok = ao.cW + ao.md
	}, this.a4e = function(player) {
		a4b.push({
			player: player,
			dI: 14 + aK.oW(20)
		})
	}, this.b8 = function() {
		var l;
		if (9 === ao.bi)
			for (l = a4b.length - 1; 0 <= l; l--) --a4b[l].dI <= 0 && (cf.xZ(a4b[l].player, 0, d9.b.dA + d9.b.dC), a4b.splice(l))
	}
}

function a4g() {
	this.h9 = function(aN) {
		t2.e7(39), t2.hN(1, 0), t2.hN(6, 13), t2.hN(14, vO.a4m), t2.hN(4, ae.id), t2.hN(7, ae.fb), t2.hN(1, +xu), t2.hN(1, +a3m), t2.hN(5, (new Date).getHours() % 24), ak.al.send(aN, t2.hA)
	}, this.a4h = function(aN, a4i, a3i) {
		t2.e7(26), t2.hN(1, 0), t2.hN(6, 14), t2.hN(3, a3i), t2.hN(16, a4i), ak.al.send(aN, t2.hA)
	}, this.a4j = function(id) {
		t2.e7(13), t2.hN(1, 0), t2.hN(6, 15), t2.hN(6, id), ak.al.send(0, t2.hA)
	}, this.a4k = function(a3a, tj) {
		t2.e7(7 + 26 * tj.length), t2.hN(1, 0), t2.hN(6, 9);
		for (var l = 0; l < tj.length; l++) t2.hN(16, tj[l][0]), t2.hN(10, tj[l][1]);
		ak.al.send(a3a, t2.hA)
	}, this.a4N = function(a4l, un) {
		t2.e7(20), t2.hN(1, 0), t2.hN(6, 19), t2.hN(1, a4l), t2.hN(12, un), ak.al.send(ak.al.an, t2.hA)
	}, this.tI = function(username) {
		t2.hN(5, username.length), tM.kX.t4(username)
	}
}

function wN() {
	var input;

	function a4n(i) {
		a4q(i.target.files)
	}

	function a4q(files) {
		files && 0 < files.length && vV.a4r(files[0])
	}

	function a4v(i) {
		var a2 = new Image;
		a2.onload = a4w, a2.src = i.target.result
	}

	function a4w(i) {
		var a4x, i = i.target,
			dZ = i.width,
			da = i.height;
		4096 < dZ || 4096 < da || dZ < 10 || da < 10 ? (a4x = "Image w & h must be between 10 and 4096.", ae.m4 ? ae.m4.showToast(a4x) : alert(a4x)) : (oR.rD(), e1.dh = e1.ia(), e1.di = 0, e1.e0 = dZ, e1.e2 = da, e1.e3.width = e1.e0, e1.e3.height =
			e1.e2, e1.e4.drawImage(i, 0, 0), a4x = e1.e4.getImageData(0, 0, e1.e0, e1.e2), e1.e6 = a4x.data)
	}

	function a4y(i) {
		i.stopPropagation(), i.preventDefault()
	}

	function a4z() {
		return 0 === aW.aX() || 2 === aW.aX()
	}
	this.k = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a4n
	}, this.a4o = function() {
		input.click()
	}, this.a4p = function(i) {
		a4n(i)
	}, this.a4r = function(a4s) {
		var a5 = a4s.name.split("."),
			a4t = a5[a5.length - 1].toLowerCase();
		"json" === a4t ? oR.xg(a4s) : "gif" !== a4t && "jpg" !== a4t && "jpeg" !== a4t && "png" !== a4t || (e1.iM.iO[e1.ia()].name = a5[0], (a4t = new FileReader).onload = a4v, a4t.readAsDataURL(a4s))
	}, this.a50 = function(i) {
		a4z() && (a4y(i), i.dataTransfer.dropEffect = "copy")
	}, this.a51 = function(i) {
		a4z() && (a4y(i), a4q(i.dataTransfer.files))
	}
}

function aR(title, ti, a52, a53) {
	var fH, a54;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), a54.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, a53 = a53 || [new aa("❌ " + aS.aZ[92], function() {
		aO.ab()
	}, ac.ad)], fH = new fd(title, a53), a54 = new a55(fH.ff, ti), a52 && n.o.textAlign(fH.ff.style, 1)
}

function wW() {
	this.u0 = new Uint16Array(2), this.cc = new Uint32Array(2), this.a56 = new Uint32Array(2), this.a57 = new Uint8Array(4), this.a06 = new Uint8Array(4), this.qO = new Uint32Array(5), this.xL = new Uint32Array(8), this.a58 = new Uint16Array(512),
		this.uQ = function(a5, nV) {
			return a5[0] = nV, a5
		}, this.a59 = function(a5, nV, nW) {
			return a5[0] = nV, a5[1] = nW, a5
		}, this.a5A = function(a5, nV, nW, nX) {
			return a5[0] = nV, a5[1] = nW, a5[2] = nX, a5
		}, this.a5B = function(a5, nV, nW, nX, a5C) {
			return a5[0] = nV, a5[1] = nW, a5[2] = nX, a5[3] = a5C, a5
		}
}

function a5D() {
	var a5E = new Uint8Array(64);
	this.k = function() {
		var l;
		for (a5E[0] = 45, a5E[37] = 95, l = 0; l < 10; l++) a5E[l + 1] = 48 + l;
		for (l = 0; l < 26; l++) a5E[l + 11] = 65 + l, a5E[l + 38] = 97 + l
	}, this.a5F = function(a5G) {
		for (var yQ = kU, aG = new Uint8Array(a5G), l = 0; l < a5G; l++) aG[l] = yQ.kV(6);
		return aG
	}, this.a5H = function(aG) {
		for (var m = aG.length, a5I = a5E, a5 = [], l = 0; l < m; l++) a5.push(String.fromCharCode(a5I[aG[l]]));
		return a5.join("")
	}
}

function wo() {
	a2t = 8, a2r = 0, a2s = new Uint16Array(a2t)
}

function p0() {
	cX = ao.fC ? new Uint8Array(ao.l4) : null
}

function od(player, cS) {
	var a5J;
	ao.fC && (cX[player] = 0), !f6.f7(player) || cS < 60 || (0 === bU.f9[player].length ? fA.fB.b8(player) || (p3.oZ(player - ao.cW, 200), fD(player, cS, p3.cS[player - ao.cW], cU.mm(player))) : 0 < bU.qB[player].length && aK.random() < aK.value(bU
		.qB[player].length > bU.f9[player].length ? 7 : 3) && fA.fB.b8(player) || (a5J = cU.mm(player), bU.f8[player] > a5J && cS < bU.f8[player] - a5J && (cS = bU.f8[player] - a5J), ao.fC ? a5K(player, cS, p3.cS[player - ao.cW], a5J) : a5L(
		player, cS, p3.cS[player - ao.cW])))
}

function a5K(player, cS, a5M, a5J) {
	var xG;
	a2o(player, !1) || a2u(player, !1) ? (cX[player] = 1, a2w(player) || (a2v() ? (a5N(player, cS), a5O(player, ao.l4, a5M)) : (aK.rd(p3.oP[a5M]) ? a5P(player, cS, xG = a2z(player)) : (a2x() && aK.rd(p3.oN[a5M]) && a2y(), a5P(player, cS, xG = a33(
		player))), a5O(player, xG, a5M)))) : 0 < bU.qB[player].length && aK.random() < aK.value(60) && fA.fB.b8(player) || (p3.oZ(player - ao.cW, 200), fD(player, cS, a5M, a5J))
}

function fE(player, cS) {
	a2o(player, !1) || a2u(player, !1) ? (cX[player] = 1, a2v() ? a5N(player, cS) : a5P(player, cS, a38())) : fD(player, cS, 0, 0)
}

function a5O(player, xG, a5M) {
	3 <= a5M && 2142 < b6.f2() && (xG === ao.l4 || bU.f8[xG] < aF(bU.f8[player], 20)) && p3.oZ(player - ao.cW, 25)
}

function fD(player, cS, a5M, a5J) {
	var l, a8, a2;
	if (0 !== dO.lN[player] && !(5 === a5M && bU.f8[player] < a5J || 4 === a5M && bU.f8[player] < aF(a5J, 2)))
		for (l = aK.oW(mc), a8 = 0; a8 < mc; a8++)
			if (a2 = n5[(a8 + l) % mc], dO.lN[a2] === dO.lN[player] && 1 === cX[a2]) return void bq.a5Q.cQ(player, a2, cS)
}

function a5L(player, cS, a5M) {
	!a2o(player, !0) && !a2u(player, !0) || a2w(player) || (a2v() ? a5N(player, cS) : aK.rd(p3.oP[a5M]) ? a5P(player, cS, a2z(player)) : (a2x() && aK.rd(p3.oN[a5M]) && a2y(), a5P(player, cS, a33(player))))
}

function fF(player, cS) {
	(a2o(player, !0) || a2u(player, !0)) && (a2v() ? a5N(player, cS) : a5P(player, cS, a38()))
}

function a5P(player, cS, xG) {
	aF(bU.f8[player], 8) > bU.f8[xG] && (cS = (a5R = aF(11 * bU.f8[xG], 5)) < cS ? cS : a5R);
	var a5R = bU.n4[player].length;
	a2i(player, xG), a2k(player, xG, a5R, cS)
}

function a5N(player, cS) {
	var xG = ao.l4,
		m = bU.n4[player].length;
	return a2h(player), bU.n4[player].length !== m && (a2k(player, xG, m, cS), !0)
}

function vg() {
	this.a5S = "https://", this.a5T = this.a5S + "territorial.io/", this.fn = this.a5T + "changelog", this.fs = this.a5T + "terms", this.a5U = this.a5T + "cookie_policy", this.ft = this.a5T + "privacy", this.fr = this.a5T + "tutorial", this.fq = this
		.a5T + "players", this.fo = this.a5T + "clans", this.fp = this.a5T + "clan-results", this.fk = this.a5S + "play.google.com/store/apps/details?id=territorial.io", this.fl = this.a5S + "apps.apple.com/app/id1581110913", this.tS = this.a5S +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.fm = this.a5S + "discord.gg/pthqvpTXmh", this.tT = this.a5S + "www.instagram.com/davidtschacher/", this.hu =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function a5V() {
	function a5X(u4) {
		var a5j = 4 + .03 * (1 + 1.5 * ae.af.dW()) * b9.dX / sF;
		return p2.a5k(u4, cb.qO[1]) < a5j
	}
	this.a5W = function(player, u4) {
		return !!p2.xC(u4) && fA.al.qC !== fA.al.qD && fA.al.qE[player] !== fA.al.qF && 0 !== bU.qB[player].length && !!fA.qV.qW(player, u4) && !!a5X(u4)
	}, this.a5Y = function(player, xU, u4) {
		return !!(p2.xC(u4) && this.sI(player, xU) && fA.qV.tw(u4) && a5X(u4))
	}, this.sI = function(player, id) {
		for (var a5Z, rU = player << 3, rV = rU + fA.al.qE[player], a5a = fA.al.a5a, a4L = fA.al.a4L, l = rU; l < rV; l++)
			if (id === a4L[a5Z = a5a[l]]) return cb.qO[3] = a5Z, !0;
		return !1
	}, this.xT = function(rj) {
		var sK = fA.sJ.sK;
		return !!this.sI(ao.bW, sK) && (bq.fZ.xT(sK, rj), !0)
	}, this.a5b = function(i2, i3, a5c) {
		var l, rV, a5d, a5a, a5e, s4, a5f, rl, s6, a5g, player = ao.bW,
			m = fA.al.qE[player];
		if (0 === m) return !1;
		for (a5a = fA.al.a5a, s4 = fA.al.s4, s6 = fA.al.s6, rV = (player = player << 3) + m, a5e = .4 * n.o.yd(.5) * b9.dX / sF, a5d = -1, l = player; l < rV; l++) a5g = a5a[l], a5f = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(s6[a5g]))), (rl = p2
			.a5h(i2, i3, s4[a5g])) - a5f < a5e && (a5e = rl, a5d = a5g);
		return !(a5d < 0 || (a5c ? cb.a56[0] = fA.al.a4L[a5d] : fA.sJ.sK = fA.al.a4L[a5d], 0))
	}, this.a5i = function(i2, i3) {
		var l, a5d, a5e, s4, a5f, rl, s6, m = fA.al.qC;
		if (m < 1) return -1;
		for (s4 = fA.al.s4, s6 = fA.al.s6, a5e = 1e3, a5d = -1, l = 0; l < m; l++) a5f = 16 * n.o.yd(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(s6[l]))), (rl = p2.a5h(i2, i3, s4[l])) < a5e && rl < a5f && (a5e = rl, a5d = l);
		return a5d
	}
}

function kA(iE, a5l) {
	this.k6 = [];
	var a5m = this.k6;

	function click() {
		for (var l = 0; l < a5m.length; l++) a5m[l].textContent = a5m[l].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var b4 = parseInt(this.name);
		by.iH.dd(iE.b4, b4), a5l && a5l(b4)
	}
	for (var a5n, m = iE.sQ.length, l = 0; l < m; l++)(a5n = document.createElement("p")).textContent = "⚪ " + iE.sQ[l], a5n.style.margin = "0", a5n.name = "" + l, a5n.style.cursor = "pointer", a5n.style.fontSize = "1em", a5n.addEventListener(
		"click", click), a5m.push(a5n);
	a5m[iE.value].textContent = a5m[iE.value].textContent.replace("⚪", "🟢")
}

function wS() {
	this.wr = function() {
		var value, mH;
		0 === ae.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var a5p = window.location.search,
				a5p = new URLSearchParams(a5p).get(key);
			if ("string" != typeof a5p || a5p.length < 1) return null;
			return a5p
		}("replay"), (mH = new URL(window.location.href)).search = "", history.replaceState(null, "", mH.toString()), value) && aO.aQ(3, 0, value)
	}
}

function ly() {
	this.b8 = function() {
		jH.b8(), ai.b8(), b9.b8(), ak.al.b8(), vU.a5r(), b6.bJ && (b6.bJ = !1, aW.eK())
	}
}

function wg() {
	this.a5s = 0, this.a5t = 0, this.a5u = 0, this.a5v = 0, this.a5w = 0, this.a5x = 0, this.a5y = [0, 0, 0, 0], this.a5z = function() {
		this.a5s = iu.a2G(), this.a5t = iu.a17(), this.a5u = -this.a5s, this.a5v = -this.a5t, this.a5w = b9.dZ / sF, this.a5x = b9.da / sF, this.a5y[0] = Math.floor(this.a5u), this.a5y[1] = Math.floor(this.a5v), this.a5y[2] = Math.floor(this.a5y[
			0] + this.a5w + 1), this.a5y[3] = Math.floor(this.a5y[1] + this.a5x + 1), bH.a60 = !0
	}
}

function w3() {
	var a64, a65, a66, a67, a68, a69, a6A, a6B, a6C, a6D, a6E, a61 = [224, 224, 224],
		a62 = [
			[172, 172, 172],
			[144, 0, 0],
			[0, 128, 0],
			[0, 0, 144],
			[128, 128, 0],
			[128, 0, 128],
			[0, 128, 128],
			[196, 196, 196],
			[0, 0, 0]
		],
		a63 = [
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

	function a6c(a6, a6e) {
		uW[a6] = 0, uW[a6 + 1] = 0, uW[a6 + 2] = a6e, uW[a6 + 3] = 0, a6f(a6)
	}

	function a6f(a6) {
		var eB;
		bH.a6i || (eB = bX.a2G(a6), a6 = bX.a17(a6), bH.a6i = eB >= va.a5y[0] && eB <= va.a5y[2] && a6 >= va.a5y[1] && a6 <= va.a5y[3])
	}
	this.k = function(cE) {
		if (a64 = new Uint8Array(ao.l4), a65 = new Uint8Array(ao.l4), a66 = new Uint8Array(ao.l4), a67 = new Uint8Array(ao.l4), a68 = new Uint8Array(ao.l4), a69 = new Uint8Array(ao.l4), a6A = new Uint8Array(ao.l4), a6B = new Uint8Array(ao.l4),
			a6C = new Uint8Array(ao.l4), a6D = new Uint8Array(ao.l4), this.y2 = new Uint8Array(ao.l4), (a6E = new Int32Array(4))[0] = -4 * e1.e0, a6E[1] = 4, a6E[2] = -a6E[0], a6E[3] = -a6E[1], ao.fC)
			for (var mr, a2, l = ao.l4 - 1; 0 <= l; l--) a2 = dO.lM[dO.lN[l]], mr = aF((a63[a2][3] + 1) * aK.random(), aK.value(100)), a64[l] = a62[a2][0] + mr * a63[a2][0], a65[l] = a62[a2][1] + mr * a63[a2][1], a66[l] = a62[a2][2] + mr * a63[
				a2][2];
		else oR.hD && oR.iM.a6K ? function(a5) {
			var l;
			for (l = ao.ok - 1; 0 <= l; l--) a64[l] = 4 * a5[l][0], a65[l] = 4 * a5[l][1], a66[l] = 4 * a5[l][2]
		}(oR.iM.a6K) : (function() {
			for (var l = ao.l4 - 1; l >= ao.cW; l--) a64[l] = 4 * aF(64 * aK.random(), aK.value(100)), a65[l] = 4 * aF(64 * aK.random(), aK.value(100)), a66[l] = 4 * aF(64 * aK.random(), aK.value(100))
		}(), function(cE) {
			for (var l = ao.cW - 1; 0 <= l; l--) a64[l] = 4 * cE[l].ur[0], a65[l] = 4 * cE[l].ur[1], a66[l] = 4 * cE[l].ur[2]
		}(cE));
		! function() {
			var l, hR;
			for (l = ao.l4 - 1; 0 <= l; l--) hR = aF(a64[l] + a65[l] + a66[l], 3), a64[l] += a4Z(hR - a64[l], 2), a65[l] += a4Z(hR - a65[l], 2), a66[l] += a4Z(hR - a66[l], 2), a64[l] -= a64[l] % 4, a65[l] -= a65[l] % 4, a66[l] -= a66[l] % 4
		}(),
		function() {
			for (var l = ao.l4 - 1; 0 <= l; l--) a64[l] += aF(l, 128), a65[l] += aF(l % 128, 32), a66[l] += aF(l % 32, 8), a67[l] = l % 8
		}(), this.a6P(),
			function() {
				for (var l = ao.l4 - 1; 0 <= l; l--) a68[l] = a64[l] < 32 ? a64[l] + 32 : a64[l] - 32, a69[l] = a65[l] < 32 ? a65[l] + 32 : a65[l] - 32, a6A[l] = a66[l] < 32 ? a66[l] + 32 : a66[l] - 32
			}(),
			function() {
				for (var l = ao.l4 - 1; 0 <= l; l--) a6B[l] = 235 < a64[l] ? a64[l] - 20 : a64[l] + 20, a6C[l] = 235 < a65[l] ? a65[l] - 20 : a65[l] + 20, a6D[l] = 235 < a66[l] ? a66[l] - 20 : a66[l] + 20
			}()
	}, this.rp = function(player) {
		var a5 = cb.a57;
		return a5[0] = a64[player], a5[1] = a65[player], a5[2] = a66[player], a5
	}, this.a6P = function() {
		for (var l = ao.l4 - 1; 0 <= l; l--) this.y2[l] = a64[l] + a65[l] + a66[l] < 280 ? 0 : 1
	}, this.a2G = function(a6) {
		return aF(a6, 4) % e1.e0
	}, this.a17 = function(a6) {
		return aF(a6, 4 * e1.e0)
	}, this.qe = function(eB, eC) {
		return Math.floor(4 * (eC * e1.e0 + eB))
	}, this.a6S = function(a6) {
		return this.tt(a6 + a6E[0]) || this.tt(a6 + a6E[1]) || this.tt(a6 + a6E[2]) || this.tt(a6 + a6E[3])
	}, this.a6T = function(a6, player) {
		return this.a6U(a6 + a6E[0], player) || this.a6U(a6 + a6E[1], player) || this.a6U(a6 + a6E[2], player) || this.a6U(a6 + a6E[3], player)
	}, this.bY = function(player) {
		return player < ao.cW && 2 !== bU.ev[player]
	}, this.a0n = function(a6) {
		return 208 <= uW[a6 + 3]
	}, this.a6V = function(player, a6) {
		return this.a0n(a6) && this.a6W(player, a6)
	}, this.a6W = function(player, a6) {
		return player === this.qS(a6)
	}, this.a6X = function(a6) {
		return 208 <= uW[a6 + 3] && uW[a6 + 3] < 224
	}, this.a2m = function(a6) {
		return 224 <= uW[a6 + 3] && uW[a6 + 3] < 248
	}, this.yC = function(a6) {
		for (var l = 3; 0 <= l; l--)
			if (this.tr(a6 + a6E[l])) return !0;
		return !1
	}, this.a6Y = function(a6) {
		return 192 <= uW[a6 + 3] && uW[a6 + 3] < 208
	}, this.a6Z = function(a6, player) {
		return this.a6Y(a6) && player === this.qS(a6)
	}, this.qk = function(a6) {
		return this.a0n(a6) || this.qR(a6)
	}, this.tr = function(a6) {
		return 0 === uW[a6 + 3] && 2 === uW[a6 + 2]
	}, this.qR = function(a6) {
		return 0 === uW[a6 + 3] && 1 === uW[a6 + 2]
	}, this.tt = function(a6) {
		return 0 === uW[a6 + 3] && 3 === uW[a6 + 2]
	}, this.a6a = function(a6) {
		return this.tt(a6)
	}, this.a6U = function(a6, player) {
		return this.qR(a6) || this.a0n(a6) && player !== this.qS(a6)
	}, this.qS = function(a6) {
		return uW[a6] % 4 * 128 + uW[a6 + 1] % 4 * 32 + uW[a6 + 2] % 4 * 8 + uW[a6 + 3] % 8
	}, this.a6b = function(a6) {
		a6c(a6, 1)
	}, this.a6d = function(a6) {
		a6c(a6, 2)
	}, this.a6g = function(a6, player) {
		uW[a6] = a64[player], uW[a6 + 1] = a65[player], uW[a6 + 2] = a66[player], uW[a6 + 3] = 208 + a67[player], a6f(a6)
	}, this.a0k = function(a6, player) {
		uW[a6] = a68[player], uW[a6 + 1] = a69[player], uW[a6 + 2] = a6A[player], uW[a6 + 3] = 224 + a67[player], a6f(a6)
	}, this.a2n = function(a6, player) {
		uW[a6] = a6B[player], uW[a6 + 1] = a6C[player], uW[a6 + 2] = a6D[player], uW[a6 + 3] = 248 + a67[player], a6f(a6)
	}, this.a6h = function(a6, player) {
		uW[a6] = a61[0] + a64[player] % 4, uW[a6 + 1] = a61[1] + a65[player] % 4, uW[a6 + 2] = a61[2] + a66[player] % 4, uW[a6 + 3] = 192 + a67[player], a6f(a6)
	}
}

function a6j() {
	this.h0 = function(aN, gu) {
		t2.e7(8), t2.hN(1, 0), t2.hN(6, 4), t2.hN(1, gu ? 1 : 0), ak.al.send(aN, t2.hA)
	}, this.a3d = function() {
		t2.e7(58), t2.hN(1, 0), t2.hN(6, 5), t2.hN(8, ak.al.gx()), t2.hN(10, vU.a3b), t2.hN(9, vU.a3c), t2.hN(10, zp), t2.hN(14, vO.a4m), ak.al.send(ak.al.an, t2.hA)
	}, this.a6k = function(rj) {
		t2.e7(27), t2.hN(1, 1), t2.hN(4, 0), t2.hN(22, rj), ak.al.send(ak.al.an, t2.hA)
	}, this.a6l = function(f4, xG) {
		t2.e7(25), t2.hN(1, 1), t2.hN(4, 1), t2.hN(10, f4), t2.hN(10, xG), ak.al.send(ak.al.an, t2.hA)
	}, this.a6m = function(f4, cR) {
		t2.e7(24), t2.hN(1, 1), t2.hN(4, 2), t2.hN(10, f4), t2.hN(9, cR), ak.al.send(ak.al.an, t2.hA)
	}, this.a6n = function(f4, rj) {
		t2.e7(37), t2.hN(1, 1), t2.hN(4, 3), t2.hN(10, f4), t2.hN(22, rj), ak.al.send(ak.al.an, t2.hA)
	}, this.a6o = function(xU, rj) {
		t2.e7(37), t2.hN(1, 1), t2.hN(4, 4), t2.hN(10, xU), t2.hN(22, rj), ak.al.send(ak.al.an, t2.hA)
	}, this.a6p = function(xG) {
		t2.e7(15), t2.hN(1, 1), t2.hN(4, 5), t2.hN(10, xG), ak.al.send(ak.al.an, t2.hA)
	}, this.a6q = function(b4) {
		t2.e7(15), t2.hN(1, 1), t2.hN(4, 6), t2.hN(10, b4), ak.al.send(ak.al.an, t2.hA)
	}, this.a6r = function(xb) {
		t2.e7(6), t2.hN(1, 1), t2.hN(4, 7), t2.hN(1, xb), ak.al.send(ak.al.an, t2.hA)
	}, this.a6s = function() {
		t2.e7(5), t2.hN(1, 1), t2.hN(4, 8), ak.al.send(ak.al.an, t2.hA)
	}, this.zs = function(a6t, a6u) {
		t2.e7(24), t2.hN(1, 1), t2.hN(4, 15), t2.hN(9, a6u), t2.hN(10, a6t), ak.al.send(ak.al.an, t2.hA)
	}, this.zv = function(o6) {
		t2.e7(14), t2.hN(1, 1), t2.hN(4, 14), t2.hN(9, o6), ak.al.send(ak.al.an, t2.hA)
	}, this.zz = function(a6v, target) {
		var l, m = a6v.length;
		for (t2.e7(14 + 9 * m), t2.hN(1, 1), t2.hN(4, 13), t2.hN(9, target), l = 0; l < m; l++) t2.hN(9, a6v[l]);
		ak.al.send(ak.al.an, t2.hA)
	}
}

function vf() {
	var nw, a6w;

	function a6x() {
		var dZ = new hK;
		dZ.e7(1612), dZ.hN(1, 0), dZ.hN(6, 7), dZ.hN(2, ae ? ae.id : 3), dZ.hN(1, xu ? 1 : 0), dZ.hN(1, a3m ? 1 : 0), dZ.hN(1, vO ? vO.ws : 0);
		for (var l = 0; l < a6w.length && l < 100; l++) dZ.hN(16, a6w.charCodeAt(l));
		nw.send(dZ.hA), a6y()
	}

	function a6y() {
		nw && (nw.onclose = null, nw.onopen = null, nw = null)
	}
	window.addEventListener("error", function error(i) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + i.filename + " " + i.lineno + " " + i.colno + " " + i.message);
		window.removeEventListener("error", error), a6w = i.lineno + " " + i.colno + " " + i.message, (nw = new WebSocket("wss://territorial.io/s52/")).onopen = a6x, nw.onclose = function() {
			a6y()
		}, 0 === i.lineno && 0 === i.colno || (ae && 1 === ae.id ? ae.m4.showToast(a6w) : alert(a6w))
	})
}

function vt() {
	var a6z, a70, mR, da, mO;

	function a72(l) {
		var a73 = !0,
			dz = ac.c7,
			dZ = (a6z[l].xG === ao.l4 ? a6z[l].eg.fillStyle = ac.a74 : (bX.rp(a6z[l].xG), a6z[l].eg.fillStyle = n.color.a75(cb.a57[0], cb.a57[1], cb.a57[2], .87), 400 < n.rr.a09(cb.a57, 0, 2) && (a73 = !1, dz = ac.ep)), a6z[l].df.width),
			en = (a6z[l].eg.clearRect(0, 0, dZ, da), a6z[l].eg.fillRect(0, 0, dZ, da), a6z[l].eg.fillStyle = dz, ! function(eg, dZ, da) {
				eg.fillRect(0, 0, dZ, 1), eg.fillRect(0, da - 1, dZ, 1), eg.fillRect(0, 0, 1, da), eg.fillRect(dZ - 1, 0, 1, da)
			}(a6z[l].eg, dZ, da), a70 + 2 * da < dZ && (a6z[l].eg.fillRect(dZ - a70 - da, 0, 1, da), a6z[l].eg.fillText(bU.l6[a6z[l].xG], Math.floor((dZ - a70) / 2), Math.floor(.57 * da))), 0 !== a6z[l].id ? 0 : da);
		a6z[l].eg.fillText(n.eU.eV(a6z[l].cS), Math.floor(dZ - a70 / 2 - en), Math.floor(.57 * da)),
			function(l, dZ, en, a73) {
				a6z[l].eg.fillStyle = a73 ? ac.em : ac.hq;
				a73 = Math.floor(a70 * a6z[l].cS / a6z[l].a7A);
				a6z[l].eg.fillRect(Math.floor(dZ - a70 - en), da - mO, a73, mO)
			}(l, dZ, en, a73), 0 === a6z[l].id ? (a78(l, dZ, a73, dz), function(l, dZ, a73) {
				a6z[l].eg.strokeStyle = a73 ? ac.a1G : ac.a7D, a6z[l].eg.fillRect(da, 0, 1, da);
				a73 = dZ - da;
				a6z[l].eg.beginPath(), a6z[l].eg.moveTo(Math.floor(.3 * da + a73), Math.floor(da / 2)), a6z[l].eg.lineTo(Math.floor(da - .3 * da + 0 + a73), Math.floor(da / 2)), a6z[l].eg.stroke(), a6z[l].eg.beginPath(), a6z[l].eg.moveTo(Math
					.floor(da / 2 + a73), Math.floor(.3 * da)), a6z[l].eg.lineTo(Math.floor(da / 2 + a73), Math.floor(da - .3 * da + 0)), a6z[l].eg.stroke()
			}(l, dZ, a73)) : a78(l, 2 * da, a73, dz)
	}

	function a78(l, dZ, a73, dz) {
		a6z[l].eg.strokeStyle = a6z[l].a7B ? ac.a7C : a73 ? ac.kG : ac.a1m, a6z[l].eg.fillStyle = dz, a6z[l].eg.fillRect(dZ - da, 0, 1, da), a6z[l].eg.lineWidth = Math.max(Math.floor(da / 12), 3), a6z[l].eg.lineCap = "round";
		a73 = .35;
		dZ = da + 1, a6z[l].eg.beginPath(), a6z[l].eg.moveTo(Math.floor(dZ - a73 * da + 0), Math.floor(a73 * da)), a6z[l].eg.lineTo(Math.floor(dZ - da + a73 * da), Math.floor(da - a73 * da + 0)), a6z[l].eg.stroke(), a6z[l].eg.beginPath(), a6z[l].eg
			.moveTo(Math.floor(dZ - da + a73 * da), Math.floor(a73 * da)), a6z[l].eg.lineTo(Math.floor(dZ - a73 * da + 0), Math.floor(da - a73 * da + 0)), a6z[l].eg.stroke()
	}

	function a7P(m) {
		for (var cS, l = m - 1; 0 <= l; l--) cS = f6.a0b(ao.bW, l), a6z[l].cS !== cS && (a6z[l].cS = cS, a6z[l].a7A = cS > a6z[l].a7A ? cS : a6z[l].a7A, a6z[l].a0t = !0)
	}

	function a71(a7R) {
		a7R.df = document.createElement("canvas"), e1.e4.font = mR;
		var dZ = a70;
		a7R.xG < ao.l4 && 0 === a7R.id && (dZ += Math.floor(e1.e4.measureText(bU.l6[a7R.xG] + "000").width)), dZ += da, 0 === a7R.id && (dZ += da), a7R.df.width = dZ, a7R.df.height = da, a7R.eg = a7R.df.getContext("2d", {
			alpha: !0
		}), a7R.eg.font = mR, n.o.textBaseline(a7R.eg, 1), n.o.textAlign(a7R.eg, 1)
	}

	function a7K(l) {
		return jJ.mj() ? b9.dZ - a6z[l].df.width - dY.gap : jJ.eB
	}

	function a7L(l) {
		return Math.floor(2 * dY.gap + (jJ.mj() ? ey.da + dY.gap : 0) + jJ.da + l * (1.3 * da))
	}
	this.k = function() {
		a6z = [], this.resize()
	}, this.resize = function() {
		mR = ar.mR, da = ar.fontSize + 5, da = Math.floor(1.25 * da), ae.af.dW() && (da = Math.floor(1.25 * da)), mO = Math.floor(.15 * da), e1.e4.font = mR, a70 = Math.floor(e1.e4.measureText("02 000 000 0000").width);
		for (var l = a6z.length - 1; 0 <= l; l--) a71(a6z[l]), a72(l)
	}, this.lA = function() {
		for (var l = a6z.length - 1; 0 <= l; l--) a6z[l].a0t && (a6z[l].a0t = !1, a72(l))
	}, this.eA = function(i2, eC) {
		if (2 !== ao.aq && 0 !== bU.bV[ao.bW] && !ao.fX && bX.bY(ao.bW))
			for (var a7F, a7G, a7H, a7I = ae.af.dW() ? da : 0, a7J = ae.af.dW() ? Math.floor(.15 * da) : 0, l = a6z.length - 1; 0 <= l; l--)
				if (a7F = a7K(l), a7G = a7L(l), a7H = a6z[l].df.width, a7G - a7J <= eC && eC <= a7G + da + a7J) {
					if (a7F - a7I <= i2 && i2 <= a7F + da + a7I) return a6z[l].a7B || (a6z[l].a0t = !0, a6z[l].a7B = !0, 0 === a6z[l].id && bq.fZ.xW(a6z[l].xG)), !0;
					if (0 === a6z[l].id && a7F + a7H - da - a7I <= i2 && i2 <= a7F + a7H + a7I) return bq.fZ.xF(jK.a7M(), a6z[l].xG), !0
				} return !1
	}, this.b8 = function() {
		var m;
		2 !== ao.aq && 0 !== bU.bV[ao.bW] && !ao.fX && bX.bY(ao.bW) && (function(m) {
			if (a6z.length !== m) return 1;
			for (var l = m - 1; 0 <= l; l--)
				if (a6z[l].id !== f6.a0V(ao.bW, l) || a6z[l].xG !== f6.a0a(ao.bW, l)) return 1;
			return
		}(m = f6.a0U(ao.bW)) && function(m) {
			var l, id, xG, a8, cS, a7S = [];
			loop: for (l = 0; l < m; l++) {
				for (id = f6.a0V(ao.bW, l), xG = f6.a0a(ao.bW, l), a8 = 0; a8 < a6z.length; a8++)
					if (a6z[a8].id === id && a6z[a8].xG === xG) {
						a7S.push(a6z.splice(a8, 1)[0]);
						continue loop
					} cS = f6.a0b(ao.bW, l), a71(cS = {
					xG: xG,
					cS: cS,
					a7A: cS,
					id: id,
					a0t: !0,
					a7B: !1,
					df: null,
					eg: null
				}), a7S.push(cS)
			}
			a6z = a7S
		}(m), a7P(m))
	}, this.a7T = function(a6) {
		for (var m = Math.min(a6z.length, f6.a0U(ao.bW)), l = 0; l < m; l++)
			if (a6z[l].xG === a6) return void(a6z = [])
	}, this.eK = function() {
		if (0 !== bU.bV[ao.bW] && bX.bY(ao.bW) && !ao.fX)
			for (var l = a6z.length - 1; 0 <= l; l--) eL.drawImage(a6z[l].df, a7K(l), a7L(l))
	}
}

function w5() {
	var a7U, a7V, size, xG, cS, id;

	function a7W(player) {
		return player < ao.cW ? a7U * player : a7U * ao.cW + a7V * (player - ao.cW)
	}
	this.k = function() {
		a7U = ao.cW < 16 ? 12 : 8, a7V = 4;
		var m = a7W(ao.l4);
		size = new Uint8Array(ao.l4), xG = new Uint16Array(m), cS = new Uint32Array(m), id = new Uint16Array(m)
	}, this.xX = function(a7X, a7Y) {
		var a7Z = this.a32(a7X, a7Y);
		this.a7a(a7X, a7Y, 0), a7Z = n.br.ca(a7X, a7Z), a7X === ao.bW && (cd.mU[13] -= a7Z)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a7b = function(player, a7Y) {
		var a5R, a7Y = function(player, a7Y) {
			var l, mr = a7W(player);
			for (l = size[player] - 1; 0 <= l; l--)
				if (0 === id[mr + l] && xG[mr + l] === a7Y) return l;
			return size[player]
		}(player, a7Y);
		a7Y !== size[player] && (a5R = cS[a7W(player) + a7Y], this.a0j(player, a7Y), this.xE(player, a5R, ao.l4))
	}, this.xK = function(player, a7Y) {
		for (var mr = a7W(player), l = size[player] - 1; 0 <= l; l--)
			if (0 === id[mr + l] && xG[mr + l] === a7Y) return !0;
		return !1
	}, this.f7 = function(player) {
		return player < ao.cW ? size[player] < a7U : size[player] < a7V
	}, this.a0U = function(player) {
		return size[player]
	}, this.a0a = function(player, l) {
		return xG[a7W(player) + l]
	}, this.a0V = function(player, l) {
		return id[a7W(player) + l]
	}, this.a2I = function(player, a7d) {
		for (var mr = a7W(player), l = size[player] - 1; 0 <= l; l--)
			if (id[mr + l] === a7d) return l;
		return -1
	}, this.a0b = function(player, l) {
		return cS[a7W(player) + l]
	}, this.a32 = function(player, a7Y) {
		for (var mr = a7W(player), l = size[player] - 1; 0 <= l; l--)
			if (0 === id[mr + l] && xG[mr + l] === a7Y) return cS[mr + l];
		return 0
	}, this.a7e = function(player) {
		for (var mr = a7W(player), aC = 0, l = size[player] - 1; 0 <= l; l--) aC += cS[mr + l];
		return aC
	}, this.a1q = function(player) {
		for (var mr = a7W(player), aC = 0, l = size[player] - 1; 0 <= l; l--) 0 === id[mr + l] && (aC += cS[mr + l]);
		return aC
	}, this.a7f = function(player) {
		for (var mr = a7W(player), dI = 0, l = size[player] - 1; 0 <= l; l--) 0 < id[mr + l] && dI++;
		return dI
	}, this.a7a = function(player, a7Y, a5R) {
		for (var mr = a7W(player), l = size[player] - 1; 0 <= l; l--) 0 === id[mr + l] && xG[mr + l] === a7Y && (cS[mr + l] = a5R)
	}, this.a7g = function(player, l, a5R) {
		cS[a7W(player) + l] = a5R
	}, this.xE = function(player, a5R, a7Y) {
		var l, mr = a7W(player);
		for (a7Y === ao.bW && cd.mU[player < ao.cW ? 6 : 5]++, l = size[player] - 1; 0 <= l; l--)
			if (0 === id[mr + l] && xG[mr + l] === a7Y) return cS[mr + l] += a5R, void(cS[mr + l] = cS[mr + l] > ao.og ? ao.og : cS[mr + l]);
		xG[mr + size[player]] = a7Y, cS[mr + size[player]] = a5R, id[mr + size[player]] = 0, size[player]++, player < ao.cW && (a7Y === ao.bW ? ar.sW(player, 5) : player === ao.bW && cf.f0(a7Y))
	}, this.a7h = function(player, a5R, a7d) {
		var mr = a7W(player);
		bU.bV[player] = 2, xG[mr + size[player]] = 0, cS[mr + size[player]] = a5R, id[mr + size[player]] = a7d, size[player]++
	}, this.a0j = function(player, b4) {
		var v, mr;
		if (0 !== size[player])
			for (mr = a7W(player), size[player]--, v = b4; v < size[player]; v++) xG[mr + v] = xG[mr + v + 1], cS[mr + v] = cS[mr + v + 1], id[mr + v] = id[mr + v + 1]
	}, this.a7i = function(player) {
		for (var v, mr, a7j = [], l = mc - 1; 0 <= l; l--)
			for (mr = a7W(n5[l]), v = size[n5[l]] - 1; 0 <= v; v--)
				if (0 === id[mr + v] && xG[mr + v] === player) {
					a7j.push(n5[l]);
					break
				} return a7j
	}
}

function a7k() {
	this.lp = ["n", "en", "r"], this.aZ = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
		"{0} greift dich an!", "Wähle deine Startposition!", "Du hast aufgegeben!", "Das Spiel endete in einem Patt!", "Fehler: {0}", "New Game Update", "{0} wurde verewigt!", "Neutrales Land {0}",
		"Spieler: {0}   Bilanz: {1}   Territorium: {2}   Koordinaten: {3}", "Gebirge {0}", "Wasser {0}", "Schiffseigner: {0}   Stärke: {1}", " Nachricht an {0}: ", "{0}: ", "Die Menschheit triumphiert. Die Untoten wurden zurückgedrängt.",
		"Der Widerstand", "Die Ära der Menschheit endet, überrannt von den Untoten.", "Das Virus", "Die Zustimmung zum Frieden beendet das Spiel in einem Patt!", "Du hast einen Nichtangriffspakt mit {0} geschlossen.",
		"Du hast {0} gebeten, einen Nichtangriffspakt zu unterzeichnen.", "{0} hat den Nichtangriffspakt akzeptiert.", "{0} hat einen Nichtangriffspakt angefordert.", "Du bittest {0} Spieler, {1} anzugreifen.", "Du bittest {0}, {1} anzugreifen.",
		"{0} bittet dich, {1} anzugreifen.", "Deine Bilanz ist zu niedrig!", "Du hast {0} Ressource{20} an {1} exportiert.", "Eine Steuer von {0} Einheit{40} wurde abgezogen.", "{0} unterstützt dich mit {1} Ressource{21}.",
		"Ein Bot ({0}) unterstützt dich mit {1} Ressource{21}.", "Karte: {0}", "Dimension: {0}x{1}", "Gesamtpixel: {0}", "Land: {0} ({1})", "Wasser: {0} ({1})", "Gebirge: {0} ({1})", "Angriffe gegen menschliche Spieler sind limitiert.",
		"{0} und {1} weitere{61} Spieler wurden ausgelöscht.", "{0} und {1} weitere{61} Spieler haben das Spiel verlassen.", "{0} und {1} weitere{61} Spieler haben aufgegeben.", "{0} wurde von {1} ausgelöscht.", "{0} hat das Spiel verlassen.",
		"{0} hat aufgegeben.", "{0} ist dem Spiel beigetreten.", "{1006}Keine Serverantwort", "{3231}Konto erfolgreich gespeichert!", "{3232}Konto", "{3249}Keine Server gefunden", "{3252}Danke für die Abstimmung.",
		"{3265}Bitte akzeptiere Cookies", "{3266}Ungültiges Passwortformat", "{3605}Ungültiges Replayformat", "{4207}Lobby-Timeout", "{4214}Ungültiger Benutzername", "{4224}Lobby Error", "{4229}Keine Client-Antwort", "Undefiniert", "Fehler",
		"BESTENLISTE", "DU BESIEGTEST", "DU WURDEST AUSGELÖSCHT VON", "DAS SPIEL WURDE GEWONNEN VON", "KARTE:", "Menschen", "Spieler", "Bots", "Zuschauer", "Schwelle", "Besetzung", "Zinsen", "Einkommen", "Zeit", "Beenden", "Mehr",
		"Einstellungen", "Replay", "Links", "Spielversion", "Daten löschen", "Datenschutzeinstellungen", "Schließen", "Spielstatistiken", "Kapitulieren", "Spiel neustarten", "Menü", "Zurück", "Alles auswählen", "Kopieren", "Löschen", "Starten",
		"Speichern & Schließen", "Zurücksetzen", "Information",
		"Eine erhöhte Auflösung, die Verkleinerung der minimalen Schriftgröße und die Beschleunigung der Textdarstellung können Ihr System belasten und die Spielreaktionsfähigkeit beeinträchtigen.", "Sprache", "Auflösung", "Mobilfreundlich",
		"Schriftart", "Benutzernamen ausblenden", "Bilanz oben anzeigen", "Zoom-Tasten ausblenden", "Minimale Schriftgröße", "Lobby", "Textdarstellungsgeschwindigkeit", "Niedrig", "Mittel", "Hoch", "Sehr hoch", "Klein", "Sehr klein",
		"Proxy-Lobby", "Langsam", "Normal", "Schnell", "Aktiviert", "Neues Spiel-Update", "Das Spiel wurde aktualisiert! Bitte lade das Spiel neu.", "Neu laden", "Mein Konto", "Konto löschen", "", "",
		"Wenn Frieden geschlossen wird, gewinnt die Partei mit dem größten Territorium."
	]
}

function tc() {
	this.eV = function(aC) {
		var l, a7l, a7m, a7n, a7o;
		if (aC < 0) return "-" + this.eV(Math.abs(aC));
		if (aC < 1e3) return aC.toString();
		for (a7l = Math.floor(Math.log(aC + .5) / Math.log(10)) + 1, a7m = Math.floor((a7l - 1) / 3), a7o = (a7n = aC.toString()).substring(a7l - 3, a7l), l = 1; l < a7m; l++) a7o = a7n.substring(a7l - 3 * (l + 1), a7l - 3 * l) + " " + a7o;
		return a7n.substring(0, a7l - 3 * a7m) + " " + a7o
	}, this.mo = function(a6, a7l) {
		return a6.toFixed(a7l) + "%"
	}, this.qv = function(aC, a7p) {
		return aC.toFixed(hS.i7(Math.floor((void 0 === a7p ? 3 : a7p) - Math.log10(Math.max(aC, 1))), 0, 8))
	}, this.kD = function(aC, tQ, a7l) {
		return (aC * tQ).toFixed(a7l)
	}, this.qt = function(username) {
		var ry, sE = username.indexOf("[");
		return !(sE < 0) && 1 < (ry = username.indexOf("]")) - sE && ry - sE <= 8 ? username.substring(sE + 1, ry).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.qt;
	this.a7q = function(x) {
		for (var v = Math.floor(.5 * x.length + .5), hP = Math.floor(.5 * (v - 1)), l = 0; l < hP; l++)
			for (var a8 = -1; a8 < 2; a8 += 2) {
				var a2 = v + a8 * l;
				if (" " === x[a2]) return [this.a7r(x.substring(0, a2)), this.a7s(x.substring(a2))]
			}
		return [x.substring(0, v), x.substring(v)]
	}, this.a7s = function(x) {
		for (var m = x.length, l = 0; l < m; l++)
			if (" " !== x[l]) return x.substring(l);
		return x
	}, this.a7r = function(x) {
		for (var l = x.length - 1; 0 <= l; l--)
			if (" " !== x[l]) return x.substring(0, l + 1);
		return x
	}, this.a7t = function(x, a7u) {
		return x.split("(")[0] + "(🧈 " + a7u.toFixed(2) + ")"
	}, this.startsWith = function(x, a7v) {
		return x.substring(0, a7v.length) === a7v
	}
}

function wp() {
	var eB, eC, da, a7w, a7x, a7y, a7z, a80, a81, dZ, a82, a83;
	this.hY = !1, this.k = function(x, tU) {
		if (1 === ae.id && 13 <= ae.fb && ae.fb < 18) return tU ? void(a82 = x) : a82 !== x ? void 0 : void ae.m4.saveString(200, x);
		tU && (a82 = x, (a83 = document.createElement("a")).appendChild(document.createTextNode(a82)), this.hY = !0, a83.title = a82, a83.target = "_blank", a83.href = a82, a83.style.textAlign = "center", a83.style.color = ac.c7, a83.style
			.position = "absolute", a83.style.padding = "0px", a83.style.margin = "0px", this.resize(), document.body.appendChild(a83), b6.bJ = !0)
	}, this.fw = function() {
		return !(!this.hY || (document.body.removeChild(a83), this.hY = !1))
	}, this.eA = function(is, it) {
		return !!this.hY && ((is < eB || it < eC || eB + dZ < is || eC + da < it || eB + dZ - a7w < is && it < eC + a7w) && (b6.bJ = !0, this.hY = !1, document.body.removeChild(a83)), !0)
	}, this.resize = function() {
		var mR, a84;
		this.hY && (a80 = Math.floor(.8 * (ae.af.dW() ? b9.dZ > b9.da ? .6 : .55 : .4) * b9.dX), a7w = Math.floor(.15 * a80), a7x = Math.floor(.35 * a7w), a7y = Math.floor(.5 * a7w), a7z = Math.floor(2.5 * a7y), da = a7w + a7x + 3 * a7y, mR = n.o
			.dc(1, a7x / b9.iy), a81 = Math.floor(b9.iy * ei.measureText(a82, mR)), a84 = dZ = (a80 < a81 ? a81 : a80) + 2 * a7z, dZ = Math.min(dZ, b9.dZ - 2 * (ae.af.dW() ? 2 : 1) * dY.gap), mR = n.o.dc(1, dZ / a84 * a7x / b9.iy), a81 = Math
			.floor(b9.iy * ei.measureText(a82, mR)), eB = Math.floor((b9.dZ - dZ) / 2), eC = Math.floor((b9.da - da) / 2), a83.style.font = mR, a83.style.top = Math.floor((eC + 1.4 * a7y + a7w) / b9.iy) + "px", a83.style.left = Math.floor((
				eB + (dZ - a81) / 2) / b9.iy) + "px")
	}, this.eK = function() {
		this.hY && (eL.fillStyle = ac.c8, eL.fillRect(eB, eC + a7w, dZ, da - a7w), eL.fillStyle = ac.a85, eL.fillRect(eB, eC, dZ, a7w), eL.fillStyle = ac.c7, eL.lineWidth = dY.iA, eL.strokeStyle = ac.c7, eL.strokeRect(eB, eC, dZ, da), eL
			.fillRect(eB, eC + a7w, dZ, dY.iA), eL.font = n.o.dc(1, .48 * a7w), n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.fillText("You are leaving Territorial.io!", Math.floor(eB + (dZ - .5 * a7w) / 2), Math.floor(eC + .55 * a7w)),
			bD.eb(Math.floor(eB + dZ - .8 * a7w), Math.floor(eC + .25 * a7w), Math.floor(.5 * a7w)), eL.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function a86() {
	this.lp = [], this.aZ = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
		"Игра закончилась вничью!", "Ошибка: {0}", "New Game Update", "{0} был увековечен!", "Невостребованная Земля {0}", "Игрок: {0}   Баланс: {1}   Территория: {2}   Координаты: {3}", "Горы {0}", "Вода {0}",
		"Владелец корабля: {0}   Сила: {1}", " Сообщение для {0}: ", "{0}: ", "Человечество торжествует! Нежить отброшена назад.", "Сопротивление", "Эра человечества заканчивается, нежить непрерывно наступает.", "Вирус",
		"Согласие на мир заканчивает игру вничью!", "Вы подписали пакт о ненападении с {0}.", "Вы предложили {0} подписать пакт о ненападении.", "{0} принял пакт о ненападении.", "{0} предложил заключить пакт о ненападении.",
		"Вы призвали {0} игроков атаковать {1}.", "Вы попросили {0} атаковать {1}.", "{0} предложил вам атаковать {1}.", "Ваш баланс слишком низкий!", "Вы экспортировали {0} ресурс(ов) к {1}.", "Был удержан налог в размере {0} единиц(ы).",
		"{0} поддержал вас {1} ресурс(ов).", "Бот ({0}) поддержал вас {1} ресурс(ов).", "Карта: {0}", "Размер: {0}x{1}", "Общее количество пикселей: {0}", "Земля: {0} ({1})", "Вода: {0} ({1})", "Горы: {0} ({1})",
		"Полная отправка против игроков-людей отключена.", "{0} и еще {1} игрок(а) были уничтожены.", "{0} и еще {1} игрок(а) покинули игру.", "{0} и еще {1} игрок(а) сдались.", "{0} был уничтожен {1}.", "{0} покинул игру.", "{0} сдался.",
		"{0} присоединился к игре.", "{1006}Ответ от сервера не получен", "{3231}Аккаунт успешно сохранен!", "{3232}Аккаунт", "{3249}Серверы не найдены", "{3252}Спасибо за ваш голос.", "{3265}Пожалуйста, примите Cookies",
		"{3266}Неверный формат пароля", "{3605}Неверный формат повтора", "{4207}Тайм-аут лобби", "{4214}Неверное имя пользователя", "{4224}Lobby Error", "{4229}Нет ответа от клиента", "Неопределено", "Ошибка", "ТАБЛИЦА ЛИДЕРОВ", "ВЫ СТЕРЛИ",
		"ВАС УНИЧТОЖИЛ", "ИГРУ ВЫИГРАЛ", "КАРТА:", "Люди", "Игроки", "Боты", "Зрители", "Порог", "Занятие", "Интерес", "Доход", "Время", "Выйти из игры", "Ещё", "Настройки", "Повтор", "Ссылки", "Версия игры", "Удалить данные",
		"Настройки конфиденциальности", "Закрыть", "Статистика игры", "Сдаться", "Принудительный перезапуск игры", "Меню", "Назад", "Выбрать все", "Копировать", "Очистить", "Запустить", "Сохранить и закрыть", "Сброс", "Информация",
		"Увеличение разрешения, уменьшение минимального размера шрифта и ускорение рендеринга текста могут нагружать вашу систему и снижать отзывчивость игрового процесса.", "Язык", "Разрешение", "Подходит для мобильных", "Шрифт",
		"Скрыть имена пользователей", "Разместить баланс сверху", "Скрыть кнопки масштабирования", "Минимальный размер шрифта", "Лобби", "Скорость рендеринга текста", "Низкое", "Средний", "Высокое", "Очень высокое", "Маленький",
		"Очень маленький", "Проксированное Лобби", "Медленно", "Нормально", "Быстро", "Включено", "Новое обновление игры", "Игра была обновлена! Пожалуйста, перезагрузите игру.", "Перезагрузить", "Мой аккаунт", "Удалить аккаунт", "", "",
		"Если будет достигнуто соглашение о мире, побеждает игрок с наибольшей территорией."
	]
}

function a87() {
	var fH, jg, cq;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), jg.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("🛠️ Chart Options", [new aa("❌ " + aS.aZ[92], function() {
		aO.a88(13)
	})]), jg = new jh(fH.ff, ((cq = []).push(function() {
		function a8E() {
			var a7u = .1 + (0 === jt.i.value.length ? .1 : .01 * Math.min(jt.i.value.split(",").length, 10));
			a8D.button.innerHTML = n.eU.a7t(a8D.button.innerHTML, a7u)
		}
		var jq = new jr,
			a8D = (jq.js("Search Terms"), jq.jz("Separate search terms with a comma."), new aa("Go (🧈 0.00)", function() {
				by.iH.dd(130, 0), aO.al.fM()
			})),
			jt = new iD(by.bz.data[126], 0, function() {
				a8D.button.click()
			});
		jq.ju(jt), jt.i.placeholder = "a,b,c", jt.i.style.marginTop = "0.5em";
		return jt.i.addEventListener("input", a8E), a8E(), jq.ju(new f([a8D.button])), jq
	}()), cq.push(function() {
		function a8E() {
			rU = Math.floor(a8G.i.value), rV = Math.floor(a8F.i.value);
			var rV, rU = {
				a0C: Math.min(rU, rV),
				q3: Math.max(rU, rV)
			};
			a8D.button.innerHTML = n.eU.a7t(a8D.button.innerHTML, (rU.q3 - rU.a0C + 1 + 10) / 100)
		}
		var jq = new jr,
			a8D = new aa("Go (🧈 0.00)", function() {
				by.iH.dd(130, 1), aO.al.fM()
			}),
			a8F = new iD(by.bz.data[129], 1, function() {
				a8F.i.focus()
			}),
			a8G = new iD(by.bz.data[128], 1, function() {
				a8D.button.click()
			});
		jq.js("Start Index"), jq.ju(a8G), a8G.i.style.marginBottom = "0.5em", jq.js("End Index"), jq.ju(a8F);
		return a8G.i.addEventListener("input", a8E), a8F.i.addEventListener("input", a8E), a8E(), jq.ju(new f([a8D.button])), jq
	}()), cq.push(function() {
		var jq = new jr;
		return jq.js("Timeframe"), jq.kB(new kA(by.bz.data[125])), jq
	}()), cq.push(function() {
		var jq = new jr;
		return jq.js("More Options"), jq.ju(new kK(by.bz.data[127], by.bz.data[127].title)), jq
	}()), cq))
}

function wD() {
	var xv, a8I, a8J, a8K, gt = !1;

	function a8L() {
		gt = !0, xv = -1, a8I = new Array(4);
		for (var l = 3; 0 <= l; l--) a8I[l] = !1;
		var a8M = Math.floor(1 + .02 * b9.min);
		a8J = new Array(4), (a8K = new Array(4))[1] = a8K[3] = a8J[0] = a8J[2] = 0, a8K[0] = a8J[3] = -a8M, a8J[1] = a8K[2] = a8M
	}

	function a8O() {
		if (-1 !== xv)
			if (0 !== ao.aq && io.hP()) {
				for (var a8Q = !1, l = 3; 0 <= l; l--) a8I[l] && (a8Q = !0, sG += a8J[l], sH += a8K[l], cf.eE(a8J[l], a8K[l]), iu.jN());
				a8Q ? b6.bJ = !0 : vQ.a8R()
			} else vQ.a8R()
	}
	this.a8N = function(b4) {
		0 !== ao.aq && io.hP() && (gt || a8L(), a8I[b4] = !0, -1 === xv) && (xv = setInterval(a8O, 20), a8O())
	}, this.a8P = function(b4) {
		if (0 !== ao.aq && (gt || a8L(), a8I[b4] = !1, -1 !== xv)) {
			for (var a8Q = !1, l = 3; 0 <= l; l--) a8Q = a8Q || a8I[l];
			a8Q || this.a8R()
		}
	}, this.a8R = function() {
		if (gt && -1 !== xv) {
			for (var l = 3; 0 <= l; l--) a8I[l] = !1;
			clearInterval(xv), xv = -1
		}
	}
}

function a8S(hZ, size, tL, a8T, font) {
	var l, a1V = .2,
		df = document.createElement("canvas"),
		dF = df.getContext("2d", {
			alpha: !1
		});
	for (df.width = hZ, df.height = hZ, dF.font = size + font, dF.textAlign = "center", dF.textBaseline = "middle", dF.fillStyle = "red", l = 0; l < tL.length; l++) dF.fillText(tL[l], .5 * hZ, .5 * hZ);
	return -1 < (df = function(oB) {
		var l, aI;
		for (l = oB.data.length - 4; 0 <= l; l -= 4)
			if (aI = oB.data[l], a8T <= aI) return Math.floor(l / (4 * hZ));
		return -1
	}(dF.getImageData(0, 0, hZ, hZ))) && (a1V = (df - .5 * hZ + .1 * size) / size), Math.max(a1V, 0)
}

function wE() {
	this.al = new gg, this.hC = new a4M, this.gz = new a6j, this.eI = new zn, this.h8 = new a4g, this.a8W = new yt, this.a00 = new a4G, this.a8X = new tD, this.o6 = new a3D, this.a3I = new kO, this.a3J = new a8Y, this.a3L = new a8Z, this.a3P =
		new a8a, this.k = function() {
			this.al.k()
		}
}

function tZ() {
	var a8b = null;
	this.iC = 0, this.tf = function() {
		var aC = by.bz.data[5].value;
		a8b = "px " + aC, "Trebuchet MS" !== aC && (a8b += ", Trebuchet MS"), this.iC = a8S(32, 32, ["a", "b", "m"], 200, a8b)
	}, this.j7 = function(dZ, da) {
		var a2 = document.createElement("canvas");
		return a2.width = dZ, a2.height = da, a2
	}, this.getContext = function(df, alpha) {
		return df.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(eg, dZ, da) {
		return eg.getImageData(0, 0, dZ, da)
	}, this.dc = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a8b : 1 === type ? "bold " + size + a8b : 2 === type ? "lighter " + size + a8b : 3 === type ? "italic " + size + a8b : 4 === type ? "oblique " + size + a8b : 5 === type ? "small-caps " +
			size + a8b : "small-caps bold " + size + a8b
	}, this.textAlign = function(dF, id) {
		dF.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dF, id) {
		dF.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.p = function(i, code, color) {
		color = this.nR(dY.a8c) + " solid " + (color || ac.c7);
		5 === (code = code || 5) ? i.style.border = color : 4 === code ? i.style.borderLeft = color : 2 === code ? i.style.borderBottom = color : 6 === code ? i.style.borderRight = color : i.style.borderTop = color
	}, this.rY = function(i, eB, eC, dZ, da) {
		i = i.style;
		i.left = this.rZ(eB), i.top = this.rZ(eC), i.width = this.rZ(dZ), i.height = this.rZ(da)
	}, this.yd = function(aC) {
		return 1 + aC * ae.af.dW()
	}, this.nN = function(tQ, bm) {
		return tQ * this.yd(void 0 === bm ? .5 : bm) * b9.dX / b9.iy
	}, this.rX = function(tQ, bm) {
		return tQ * this.yd(void 0 === bm ? .5 : bm) * b9.dX
	}, this.nR = function(aC) {
		return aC.toFixed(1) + "px"
	}, this.rZ = function(aC) {
		return this.a8d(aC).toFixed(1) + "px"
	}, this.a8d = function(aC) {
		return aC / b9.iy
	}, this.fi = function(rP, a8e) {
		for (var x = "<ul>", m = rP.length, l = 0; l < m; l++) x += "<li>" + rP[l] + ": <a href='" + a8e[l] + "' target='_blank'>" + a8e[l] + "</a></li>";
		return x += "</ul>"
	}, this.tW = function(a82) {
		return "<a href='" + a82 + "' target='_blank'>" + a82 + "</a>"
	}, this.jv = function(i) {
		navigator.clipboard && navigator.clipboard.writeText(i.value)
	}, this.jw = function(i) {
		n.eU.startsWith(i.innerText, "✅ ") || (i.innerText = "✅ " + i.innerText, setTimeout(function() {
			i.innerText = i.innerText.substring(i.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(x) {
		return eL.measureText(x).width
	}
}

function wT() {
	var a8f, a8g, a8h = -15e3,
		a8i = !1;

	function eA(i) {
		a8v() || (a8i = !0, a8w(i, 1), ak.al.hB(ak.al.an), a8x(Math.floor(b9.iy * i.clientX), Math.floor(b9.iy * i.clientY)))
	}

	function ik(i) {
		a8h = b6.b5, a8w(i, 1), ak.al.hB(ak.al.an), 0 < i.touches.length && (a8f = Math.floor(b9.iy * i.touches[0].clientX), a8g = Math.floor(b9.iy * i.touches[0].clientY), vS.ik(i) || a8x(a8f, a8g))
	}

	function a8x(eB, eC) {
		aO.eA(eB, eC), 0 === ao.aq ? aW.eA(eB, eC) : jL.a8y(eB, eC) || fV.eA(eB, eC) || ex.eA(eB, eC) || gO.a8z(eB, eC) || jM.eA(eB, eC) || bD.eA(eB, eC) || lb.a90(eB, eC) || gS.eA(eB, eC) || gO.ix(eB, eC)
	}

	function eE(i) {
		a8v() || (a8i = !0, a8w(i, 1), a91(Math.floor(b9.iy * i.clientX), Math.floor(b9.iy * i.clientY)))
	}

	function im(i) {
		a8h = b6.b5, a8w(i, 1), 0 < i.touches.length && (a8f = Math.floor(b9.iy * i.touches[0].clientX), a8g = Math.floor(b9.iy * i.touches[0].clientY), vS.im(i) || a91(a8f, a8g))
	}

	function a91(eB, eC) {
		aO.eE(eB, eC), 0 === ao.aq ? aW.eE(eB, eC) : (vX.a92(eB, eC), fV.eE(eB, eC) || (bD.eE(eB, eC), gO.hY() ? gO.eE(eB, eC) : jK.a93 ? jK.eE(eB) && (b6.bJ = !0) : (jI.eE(eB, eC), iu.a94 && iu.eE(eB, eC) && (b6.bJ = !0))))
	}

	function a8n(i) {
		a8v() || (a8w(i, 1), a95(), 0 === ao.aq ? (aW.click(-1024, -1024), jG.rD()) : (jI.le(-1024, -1024), bD.eE(-1024, -1024), jK.a96(), iu.a94 = !1))
	}

	function a8m(i) {
		a8v() || (a8w(i, 1), a97(Math.floor(b9.iy * i.clientX), Math.floor(b9.iy * i.clientY), 2 === i.button), lb.a8l && (lb.a8l = !1, i.preventDefault()))
	}

	function click(i) {
		a8v() || a8w(i, 1)
	}

	function a8o(i) {
		a8h = b6.b5, a8w(i, 1), i && i.touches && 0 < i.touches.length && 0 !== ao.aq ? iu.a94 = !1 : vS.iw() || (a97(a8f, a8g, !1), lb.a8l && (lb.a8l = !1, i.preventDefault()))
	}

	function a8p(i) {
		a8h = b6.b5, a8w(i, 1), a97(a8f, a8g, !1), lb.a8l && (lb.a8l = !1, i.preventDefault())
	}

	function a50(i) {
		vV.a50(i)
	}

	function a51(i) {
		vV.a51(i)
	}

	function a8q(i) {
		a8v() || a8w(i, 0)
	}

	function a97(eB, eC, a98) {
		a95(), 0 === ao.aq ? aW.click(eB, eC) : (jI.le(eB, eC), fV.le(), jK.a96(), iu.a94 = !1, gO.click(eB, eC, a98) ? b6.bJ = !0 : bD.a8m(eB, eC))
	}

	function a95() {
		aO.a95()
	}

	function lg(i) {
		var eB, eC, deltaY;
		a8v() || (a8w(i, 1), ak.al.hB(ak.al.an), eB = Math.floor(b9.iy * i.clientX), eC = Math.floor(b9.iy * i.clientY), deltaY = i.deltaY, 1 === i.deltaMode && (deltaY *= 16), aO.lg(eB, eC, deltaY), 0 === ao.aq ? aW.lg(eB, eC, deltaY) : jI.lg(eB,
			eC, deltaY) || (jK.rC(eB, eC) ? jK.lg(deltaY) && (b6.bJ = !0) : iu.lg(eB, eC, deltaY)))
	}

	function a8r(i) {
		a8w(i, 0)
	}

	function a8w(i, id) {
		0 === id && aO.hY() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.aX() && i.preventDefault()
	}

	function a8t(i) {
		if (keybindHandler(i.key)) return;
		a8v() || ("ArrowLeft" === i.key ? vQ.a8N(3) : "ArrowUp" === i.key ? vQ.a8N(0) : "ArrowRight" === i.key ? vQ.a8N(1) : "ArrowDown" === i.key ? vQ.a8N(2) : "a" === i.key ? jK.a9A(.9375) : "d" === i.key ? jK.a9A(16 / 15) : "s" === i.key ? jK.a9A(
			7 / 8) : "w" === i.key ? jK.a9A(8 / 7) : "1" === i.key ? jK.a9A(.75) : "2" === i.key ? jK.a9A(7 / 8) : "3" === i.key ? jK.a9A(.9375) : "4" === i.key ? jK.a9A(31 / 32) : "5" === i.key ? jK.a9A(32 / 31) : "6" === i.key ? jK.a9A(16 /
			15) : "7" === i.key ? jK.a9A(8 / 7) : "8" === i.key ? jK.a9A(4 / 3) : "+" === i.key ? 0 !== ao.aq && iu.lg(Math.floor(b9.dZ / 2), Math.floor(b9.da / 2), -200) : "-" === i.key ? 0 !== ao.aq && iu.lg(Math.floor(b9.dZ / 2), Math
			.floor(b9.da / 2), 200) : "c" === i.key ? 0 !== ao.aq && fV.a1Z() : " " === i.key ? ao.aq && vX.a9B(!1) : "b" === i.key && ao.aq && vX.a9B(!0))
	}

	function a8s(i) {
		a8v() || b6.b5 < 400 || "Enter" === i.key && aO.fx(1) || (8 !== aW.aX() && aW.fx(i) ? b6.bJ = !0 : "Escape" === i.key ? lb.a01() : "ArrowLeft" === i.key || "a" === i.key ? vQ.a8P(3) : "ArrowUp" === i.key || "w" === i.key ? vQ.a8P(0) :
			"ArrowRight" === i.key || "d" === i.key ? vQ.a8P(1) : "ArrowDown" === i.key || "s" === i.key ? vQ.a8P(2) : "h" === i.key ? jL.a9C(!ao.lh) : " " === i.key && ao.aq && (bD.bE && bD.fW(), ao.fX) && jL.a9D(!1))
	}

	function a8u() {
		"hidden" === document.visibilityState ? 1 === ao.aq && (ao.fX ? jL.a9E() : !ao.ap || bD.bE || ao.bA || bD.fW()) : b6.bJ = !0
	}

	function a8v() {
		return a8h + 15e3 > b6.b5
	}

	function resize() {
		b9.jE()
	}
	this.a8j = 0, this.a8k = "", this.a8l = !1, this.k = function() {
		j9.addEventListener("mousedown", eA, {
			passive: !1
		}), j9.addEventListener("mousemove", eE, {
			passive: !1
		}), j9.addEventListener("mouseup", a8m, {
			passive: !1
		}), j9.addEventListener("click", click, {
			passive: !1
		}), j9.addEventListener("mouseleave", a8n, {
			passive: !1
		}), j9.addEventListener("wheel", lg, {
			passive: !1
		}), j9.addEventListener("touchstart", ik, {
			passive: !1
		}), j9.addEventListener("touchmove", im, {
			passive: !1
		}), j9.addEventListener("touchend", a8o, {
			passive: !1
		}), j9.addEventListener("touchcancel", a8p, {
			passive: !1
		}), j9.addEventListener("dragover", a50), j9.addEventListener("drop", a51), j9.addEventListener("dblclick", a8q), document.addEventListener("contextmenu", a8r), document.addEventListener("keyup", a8s), document.addEventListener(
			"keydown", a8t), document.addEventListener("visibilitychange", a8u), window.addEventListener("resize", resize)
	}, this.a90 = function(eB, eC) {
		return !!jL.eA(eB, eC) || !!(jI.eA(eB, eC) || iu.eA(eB, eC) || jK.eA(eB, eC) || ar.eA(eB, eC))
	}, this.lc = a8v, this.a9F = function() {
		return !a8i || 0 < a8h
	}, this.a01 = function() {
		if (!aO.hY()) return 8 === aW.aX() ? ao.lh ? void jL.a9C(!1) : fV.hY ? void fV.fW() : void bD.fW() : void(7 === aW.aX() ? b0.d4() : 6 === aW.aX() ? ai.a2Z() : 2 === aW.aX() && jO.a9G());
		aO.fx(2)
	}
}

function wj() {
	this.size = 501, this.qu = new Uint32Array(this.size), this.yS = new Uint32Array(this.size), this.n6 = new Uint16Array(this.size), this.fU = 0, this.a9H = 1, this.a2 = 0, this.max = [0, 0, 0], this.mU = 0, this.a1k = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.k = function() {
		this.fU = 0, this.a9H = 1, this.a2 = 0, this.a9I(), this.a9J()
	}, this.xN = function(player, f4) {
		player === ao.bW && (this.mU[0] += f4, this.mU[1]++, this.mU[12] += cb.cc[1], this.mU[13] += cb.cc[0])
	}, this.ce = function(player, cR) {
		donationsTracker.logDonation(player, cR, cb.cc[0]);
		player === ao.bW && (ar.ce(cb.cc[0], cb.cc[1], cR), this.mU[12] += cb.cc[1], this.mU[16] += cb.cc[0]), cR === ao.bW && (ar.a9K(cb.cc[0], player), this.mU[10] += cb.cc[0])
	}, this.b8 = function() {
		0 < this.a2-- || this.a9L()
	}, this.a9L = function() {
		0 !== bU.bV[ao.bW] && (this.qu[this.fU] = bU.bp[ao.bW], this.yS[this.fU] = bU.f8[ao.bW], this.n6[this.fU] = cU.n7(ao.bW), this.a9M(this.fU), this.fU++, this.fU === this.size && this.a9N(), this.a2 = this.a9H - 1, fV.np())
	}, this.a9N = function() {
		this.a9I(), this.a9M(0), this.fU = 1 + aF(this.size, 2);
		for (var l = 1; l < this.fU; l++) this.qu[l] = this.qu[2 * l], this.yS[l] = this.yS[2 * l], this.n6[l] = this.n6[2 * l], this.a9M(l);
		this.a9H *= 2
	}, this.a9I = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.a9J = function() {
		this.mU = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.a9M = function(l) {
		this.max[0] = this.qu[l] > this.max[0] ? this.qu[l] : this.max[0], this.max[1] = this.yS[l] > this.max[1] ? this.yS[l] : this.max[1], this.max[2] = this.n6[l] > this.max[2] ? this.n6[l] : this.max[2]
	}
}

function wL() {
	var xi = 0,
		a9O = !0;

	function a9Q(x) {
		8 !== aW.aX() || 2 !== bU.ev[ao.bW] && (0 !== bU.bV[ao.bW] || ao.bA) || ar.a9R(x)
	}
	this.b8 = function() {
		var bo, dr;
		b6.b5 > xi && (xi = b6.b5 + 2500, bo = new Date, dr = bo.getUTCSeconds(), a9O ? dr < 45 && (a9O = !1) : dr < 45 || (a9O = !0, (dr = bo.getUTCMinutes() + 1) % 15 == 0 && a9Q(30 === dr ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function lx() {
	this.b5 = b6.b5, this.b4 = 0, this.b7 = 0, this.zG = 0, this.a9S = null, this.a9T = 7, this.yL = 0, this.k = function() {
		this.zG = 0, this.a9S = [], this.b4 = 0, this.b7 = 0
	}, this.a3g = function(hA) {
		var l;
		if (ao.bA) this.n8(hA);
		else if (this.a9S.push(hA), 2 === ao.aq) {
			for (l = 0; l < this.a9S.length; l++) bq.ow.b8(this.a9S[l]);
			this.a9S = []
		}
	}, this.n8 = function(hA) {
		bq.ow.b8(hA), p7.b8(), ey.n8(this.zG), this.zG === ao.nB ? (ao.on.b8(), this.zG = 0, this.b4 = 0, this.b7 = 0, this.b5 = b6.b5) : (this.zG++, cf.zQ(), cf.lA(!0), bH.bI())
	}, this.b8 = function() {
		b9.b8(), ao.bA ? (b6.bJ = ey.n8(-1) || b6.bJ, bB()) : (0 !== this.b4 || b6.b5 >= this.b5 && (this.b5 += b6.bC * Math.floor(1 + (b6.b5 - this.b5) / b6.bC), 2 === ao.aq ? bF() : this.a9U(), this.b4++, 27 < b6.b5 - this.yL)) && this.a9V(),
			bL(), b6.bJ && (b6.bJ = !1, bM()), this.yL = b6.b5
	}, this.a9V = function() {
		b6.bJ = !0, bK(), this.b4 = 0
	}, this.a9U = function() {
		var a9W, l;
		if (this.b7 !== 7 * this.zG) bG(), bH.bI();
		else {
			for (a9W = !1; this.a9X() && (a9W = !0, bG(), 0 < this.a9S.length);)
				for (l = this.a9T - 2; 0 <= l; l--) bG();
			a9W ? bH.bI() : (bF(), bH.a9Y())
		}
	}, this.a9X = function() {
		return 0 < this.a9S.length && (this.zG++, bq.ow.b8(this.a9S[0]), this.a9S.shift(), !0)
	}
}

function oy() {
	(a9Z = void 0 === a9Z ? document.createElement("canvas") : a9Z).width = e1.e0, a9Z.height = e1.e2, pA = a9Z.getContext("2d", {
		alpha: !0
	}), pB = pA.getImageData(0, 0, e1.e0, e1.e2), uW = pB.data, n.rr.a02(uW)
}

function a9a() {
	this.xA = function(rj) {
		ao.ap ? bq.a9b.xA(ao.bW, rj) : ak.gz.a6k(rj)
	}, this.xF = function(f4, xG) {
		ar.a9c(), ao.ap ? bq.a9b.xF(ao.bW, f4, xG) : ak.gz.a6l(f4, xG)
	}, this.cV = function(f4, cR) {
		ar.a9c(), ao.ap ? bq.a9b.xP(ao.bW, f4, cR) : ak.gz.a6m(f4, cR)
	}, this.xS = function(f4, rj) {
		ao.ap ? bq.a9b.xS(ao.bW, f4, rj) : fA.bd.a5W(ao.bW, rj) && ak.gz.a6n(f4, rj)
	}, this.xT = function(xU, rj) {
		ao.ap ? bq.a9b.xT(ao.bW, xU, rj) : fA.bd.a5Y(ao.bW, xU, rj) && ak.gz.a6o(xU, rj)
	}, this.xW = function(xG) {
		ao.ap ? bq.a9b.xW(ao.bW, xG) : ak.gz.a6p(xG)
	}, this.i8 = function(dE) {
		ao.ap ? bq.a9b.xY(ao.bW, dE) : ak.gz.a6q(dE)
	}, this.xa = function(xb) {
		ao.ap ? bq.a9b.xa(ao.bW, xb) : ak.gz.a6r(xb)
	}, this.fa = function() {
		ao.ap ? bq.a9b.fa(ao.bW) : ak.gz.a6s()
	}
}

function wc() {
	this.aZ = null;
	var a9d, a9e = new a9f;
	this.k = function() {
		a9d = 1 === by.bz.data[0].value ? new a86 : 2 === by.bz.data[0].value ? new tO : 3 === by.bz.data[0].value ? new a9g : 4 === by.bz.data[0].value ? new a7k : 5 === by.bz.data[0].value ? new lo : a9e;
		var l, m = a9e.aZ.length,
			mr = a9d.aZ.length;
		for (l = 0; l < m; l++) mr === l ? (a9d.aZ.push(a9e.aZ[l]), mr++) : 0 === a9d.aZ[l].length && (a9d.aZ[l] = a9e.aZ[l]);
		this.aZ = a9d.aZ, by.bz.translate()
	}, this.a9i = function() {
		var nA = navigator.language;
		return n.eU.startsWith(nA, "en") ? 0 : n.eU.startsWith(nA, "ru") ? 1 : n.eU.startsWith(nA, "tr") ? 2 : n.eU.startsWith(nA, "es") ? 3 : n.eU.startsWith(nA, "de") ? 4 : n.eU.startsWith(nA, "pl") ? 5 : 0
	}, this.aU = function(a2) {
		for (var bm, m = this.aZ.length, l = 0; l < m; l++)
			if (n.eU.startsWith(this.aZ[l], "{") && (bm = this.aZ[l].replace("{" + a2 + "}", "")).length < this.aZ[l].length) return bm;
		return a2
	}, this.aT = function(b4, a9j, sQ) {
		var l, a8, m, x;
		if (!a9j) return this.aZ[b4];
		for (m = a9j.length, x = this.aZ[b4], l = 0; l < m; l++)
			if ("number" == typeof a9j[l])
				for (a8 = a9d.lp.length - 1; 0 <= a8; a8--) x = x.replace("{" + (20 * (a8 + 1) + l) + "}", (2 === a8 ? 1 !== a9j[l] : 1 === a9j[l]) ? "" : a9d.lp[a8]);
		if (sQ) {
			if (sQ.a9k)
				for (l = 0; l < sQ.a9k.length; l++) a9j[sQ.a9k[l]] = n.eU.eV(a9j[sQ.a9k[l]]);
			if (sQ.a9l)
				for (l = 0; l < sQ.a9l.length; l++) a9j[sQ.a9l[l]] = n.eU.mo(100 * a9j[sQ.a9l[l]], 1)
		}
		for (l = 0; l < m; l++) x = x.replace("{" + l + "}", a9j[l]);
		return x
	}
}

function a8a() {
	this.a3Q = function() {
		if (kU.size < t2.hM(38)) ak.al.hF(0, 3259);
		else {
			var rT = kU.kV(6),
				m = kU.kV(10),
				tL = kU.kV(15);
			if (kU.vJ(38 + 67 * m + 16 * tL)) {
				for (var tQ, data = [], a7l = 0 === rT ? (tQ = .1, 1) : (tQ = .001, 3), l = 0; l < m; l++) data.push(["" + (kU.kV(30) + 1), kW.kX.kY(kU.kV(5)), (tQ * kU.vH(32)).toFixed(a7l)]);
				8 === aO.aP && aO.gV().a9m(21, !0, {
					rT: rT,
					title: ["1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking"][rT],
					data: data
				})
			} else ak.al.hF(0, 3260)
		}
	}, this.a3R = function() {
		if (kU.size < t2.hM(29)) ak.al.hF(0, 3265);
		else {
			var a9n = kU.kV(4),
				a9o = kU.kV(7),
				a9p = kU.kV(11);
			if (kU.vJ(29 + 16 * a9o + 16 * a9p + 11 * a9n)) {
				for (var data = [], l = 0; l < a9n; l++) {
					for (var a4B = kW.kX.kY(kU.kV(3)), a9q = kU.kV(8), a9r = [], v = 0; v < a9q; v++) a9r.push(kU.kV(16));
					data.push({
						name: "[" + a4B + "]",
						a9r: a9r
					})
				}
				8 === aO.aP && aO.gV().a9m(23, !0, data)
			} else ak.al.hF(0, 3266)
		}
	}
}

function w1() {
	var aV = 0;
	this.k = function() {
		eD.k(), aV = 0
	}, this.setState = function(a9s) {
		aV = a9s
	}, this.aX = function() {
		return aV
	}, this.x4 = function() {
		this.setState(8), b0.b1(), aO.fT()
	}, this.fx = function(i) {
		if (!e1.iK) return !1;
		if (!(b6.b5 < 400)) {
			if ("Enter" === i.key || "Escape" === i.key) {
				if (this.a9t()) return !0;
				if ("Enter" === i.key) {
					if (0 === aV) return !0;
					if (7 === aV) return !0
				}
			}
			return !1
		}
	}, this.jP = function() {
		vZ.resize()
	}, this.a9t = function() {
		return !!vZ.fw()
	}, this.eA = function(eB, eC) {
		!e1.iK || vZ.eA(eB, eC) || 6 === aV && ai.eA(eB, eC) || 2 === aV && jO.eA(eB, eC) || (jG.eA(eB, eC), 0 !== aV && 7 === aV && b0.eA(eB, eC))
	}, this.eE = function(eB, eC) {
		if (!jG.a9u) {
			if (2 === aV && jO.eE(eB, eC)) return void jG.rD();
			if (eD.eE(eB, eC, !0)) return
		}
		jG.eE(eB, eC)
	}, this.click = function(eB, eC) {
		jG.le(), gQ.eA(eB, eC, !1)
	}, this.lg = function(eB, eC, deltaY) {}, this.jQ = function() {
		eD.r7(), 0 !== aV && 7 === aV && b0.resize(), b6.bJ = !0
	}, this.eK = function() {
		8 !== aV && 10 !== aV && (eL.imageSmoothingEnabled = !0, this.nr(), 0 !== aV && (jG.eK(), jH.eK(), this.a9v(), gQ.eK()), 0 !== aV && (2 === aV ? jO.eK() : 6 === aV ? ai.eK() : 7 === aV && b0.eK()), vZ.eK(), aO.eK())
	}, this.nr = function() {
		var a9x, a9w;
		if (makeMainMenuTransparent) eL.clearRect(0, 0, b9.dZ, b9.da);
		else e1.iK ? (a9w = b9.dZ / e1.e0, a9x = b9.da / e1.e2, eL.setTransform(a9w = a9x < a9w ? a9w : a9x, 0, 0, a9w, Math.floor((b9.dZ - a9w * e1.e0) / 2), Math.floor((b9.da - a9w * e1.e2) / 2)), eL.drawImage(e1.e3, 0, 0), eL.setTransform(1,
			0, 0, 1, 0, 0), eL.fillStyle = ac.eP) : eL.fillStyle = ac.ep, eL.fillRect(0, 0, b9.dZ, b9.da)
	}, this.a9v = function() {
		var eC = Math.floor(.3 * b9.da),
			df = d7.g5("territorial.io"),
			a1V = (a1V = 1.75 * b9.da / df.width) * df.width < .98 * b9.dZ ? .98 * b9.dZ / df.width : a1V,
			eB = (eL.globalAlpha = .15, eL.imageSmoothingEnabled = !1, Math.floor(.5 * (b9.dZ - a1V * df.width))),
			eB = Math.floor(eB / a1V),
			eC = Math.floor(eC - .5 * df.height * a1V),
			eC = Math.floor(eC / a1V);
		eL.setTransform(a1V, 0, 0, a1V, eB, eC), eL.drawImage(df, eB, eC), eL.setTransform(1, 0, 0, 1, 0, 0), eL.globalAlpha = 1, eL.imageSmoothingEnabled = !0
	}
}

function a9z() {
	var fH, yl;

	function aA0() {
		m6.m7.hideCMPButton(), aO.aQ(0);
		var x = p7.x7(yl.yp());
		(0 < x.length && x === p7.ui.uj || p7.wz.a7(x)) && p7.x3()
	}
	this.show = function(a5p) {
		this.x2(a5p), fH.show(), this.resize()
	}, this.x2 = function(a5p) {
		0 === ao.aq ? (a5p = a5p || yl.yp(), yl.yo(a5p)) : (ao.fX || (p7.ui.uj = p7.wx.a4()), yl.yo(p7.x8(p7.ui.uj)))
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), yl.resize()
	}, this.fx = function(a2) {
		2 === a2 ? fH.fy[0].fz() : aA0()
	}, fH = new fd("▶️ " + aS.aZ[82], [new aa("❌ " + aS.aZ[92], function() {
		aO.ab()
	}, ac.ad), new aa("🔲 " + aS.aZ[93], function() {
		yl.yq()
	}), new aa("📋 " + aS.aZ[94], function() {
		yl.yr()
	}), new aa("🗑️ " + aS.aZ[95], function() {
		yl.clear()
	}), new aa("▶️ " + aS.aZ[96], function() {
		aA0()
	}, ac.aA1)]), yl = new yk("replayData", "Insert the replay link here!"), fH.ff.appendChild(yl.ym)
}

function pK() {
	this.cE = null, this.k = function(cE) {
		this.cE = cE, ar.aA2(this.cE)
	}, this.sa = function(aA3) {
		var jD = (this.cE[aA3].us - this.cE[1 - aA3].us) / 10,
			jD = 8 / (1 + Math.pow(2, jD / 32)),
			jD = Math.floor(10 * jD + .5),
			aA5 = this.aA6(this.cE[aA3].us + jD + 1),
			jD = this.aA6(this.cE[1 - aA3].us - jD);
		0 === aA3 ? ar.aA8(this.cE, aA5, jD, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : ar.aA8(this.cE, jD, aA5, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.aA6 = function(us) {
		return 16e3 <= (us = us < 0 ? 0 : 16e3 < us ? 16e3 : us) ? "Unknown" : (us / 10).toFixed(1)
	}
}

function vz() {
	var hY, aA9, dZ, da, jU, aAA, aAB, xh, df, xi, aAC;

	function a17() {
		return Math.floor((b9.dZ - dZ) / 2) < jK.da + 2 * dY.gap ? b9.da - da - 4 * dY.gap - jK.da : b9.da - da - 2 * dY.gap
	}
	this.a1w = -1, this.k = function() {
		aAC = hY = !1, jU = .61, aAA = .07, aAB = .09, xi = xh = da = 0, this.a1w = -1
	}, this.resize = function() {
		var eg, eG, a2, aAG, aAH, lQ;
		hY && (dZ = jW(dZ = ae.af.dW() ? Math.floor(.69 * b9.dX) : Math.floor(.5 * b9.dX), db(b9.dZ - 2 * dY.gap, 10)), dZ = jW(dZ, Math.floor(3.57 * db(b9.da - 2 * dY.gap, 3))), da = Math.floor(.28 * dZ), (df = document.createElement("canvas"))
			.width = dZ, df.height = da, eg = df.getContext("2d", {
				alpha: !0
			}), eG = Math.floor(1 + da / 40), eg.clearRect(0, 0, dZ, da), eg.fillStyle = ac.c8, eg.fillRect(eG, eG, dZ - 2 * eG, da - 2 * eG), eg.lineJoin = "bevel", eg.lineWidth = 2 * eG, eg.strokeStyle = ac.c7, eg.strokeRect(eG, eG, dZ -
				2 * eG, da - 2 * eG), eg.imageSmoothingEnabled = !1, a2 = d7.get(aA9), aAG = a2.width, aAH = a2.height, lQ = (1 === aA9 ? .85 : 21 === aA9 ? .666 : .9) * jU * da / aAH, eg.setTransform(lQ, 0, 0, lQ, Math.floor((dZ - lQ *
				aAG) / 2), Math.floor((da - lQ * aAH) / 2)), eg.drawImage(a2, 0, 0), eg.setTransform(1, 0, 0, 1, Math.floor(dZ - aAB * da - aAA * da - eG), Math.floor(eG + aAA * da)),
			function(eg, m) {
				eg.lineWidth = Math.floor(1 + da / 80), eg.strokeStyle = ac.c7, eg.beginPath(), eg.moveTo(0, 0), eg.lineTo(m, m), eg.moveTo(0, m), eg.lineTo(m, 0), eg.stroke()
			}(eg, Math.floor(aAB * da)), eg.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(aC, aAE, a1B, aAF) {
		hY || aAF && aAC || (aA9 = a1B ? 21 : aC ? 1 : 2, hY = aAC = !0, this.resize(), gO.fw(), jK.a18(), xi = b6.b5, -1 === this.a1w && (this.a1w = b6.f2()), xh = aAE ? 1 : 0)
	}, this.b8 = function() {
		!hY || 1 <= xh || (xh = 1 < (xh += 5e-4 * (b6.b5 - xi)) ? 1 : xh, xi = b6.b5, b6.bJ = !0)
	}, this.eA = function(eB, eC) {
		return !(!hY || xh <= 0 || (eB -= Math.floor((b9.dZ - dZ) / 2), eC -= a17(), eB < 0) || eC < 0 || dZ < eB || da < eC || (dZ - da / 3 < eB && eC < da / 3 && (hY = !1, b6.bJ = !0), 0))
	}, this.eK = function() {
		!hY || xh <= 0 || (eL.globalAlpha = xh, eL.drawImage(df, Math.floor((b9.dZ - dZ) / 2), a17()), eL.globalAlpha = 1)
	}
}

function a9g() {
	this.lp = ["", ""], this.aZ = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
		"Te rendiste!", "¡El juego terminó en un empate!", "Error: {0}", "New Game Update", "{0} fue inmortalizado!", "Tierra sin reclamar {0}", "Jugador: {0}   Saldo: {1}   Territorio: {2}   Coordenadas: {3}", "Montañas {0}", "Agua {0}",
		"Propietario del barco: {0}   Fuerza: {1}", " Mensaje a {0}: ", "{0}: ", "¡La humanidad triunfa! Los no muertos han sido rechazados.", "La Resistencia",
		"La era de la humanidad termina, invadida por la implacable marea de los no muertos.", "El Virus", "¡Acordar la paz concluye el juego en un empate!", "Firmaste un pacto de no agresión con {0}.",
		"Le pediste a {0} que firmara un pacto de no agresión.", "{0} aceptó el pacto de no agresión.", "{0} solicitó un pacto de no agresión.", "Pediste a {0} jugadores atacar a {1}.", "Pediste a {0} que atacara a {1}.",
		"{0} te sugirió que atacaras a {1}.", "¡Tu saldo es demasiado bajo!", "Exportaste {0} recurso(s) a {1}.", "Se dedujo un impuesto de {0} unidad(es).", "{0} te apoyó con {1} recurso(s).", "Un bot ({0}) te apoyó con {1} recurso(s).",
		"Mapa: {0}", "Dimensión: {0}x{1}", "Píxeles totales: {0}", "Tierra: {0} ({1})", "Agua: {0} ({1})", "Montañas: {0} ({1})", "El envío completo contra jugadores humanos está deshabilitado.",
		"{0} y {1} otro(s) jugador(es) fueron eliminados.", "{0} y {1} otro(s) jugador(es) abandonaron el juego.", "{0} y {1} otro(s) jugador(es) se rindieron.", "{0} fue eliminado por {1}.", "{0} abandonó el juego.", "{0} se rindió.",
		"{0} se unió al juego.", "{1006}Sin respuesta del servidor", "{3231}¡Cuenta guardada con éxito!", "{3232}Cuenta", "{3249}No se encontraron servidores", "{3252}Gracias por el voto.", "{3265}Por favor, acepta las cookies",
		"{3266}Formato de contraseña inválido", "{3605}Formato de repetición inválido", "{4207}Tiempo de espera en el lobby", "{4214}Nombre de usuario inválido", "{4224}Lobby Error", "{4229}Sin respuesta del cliente", "Indefinido", "Error",
		"TABLA DE LIDERAZGO", "ELIMINASTE A", "FUERON ELIMINADOS POR", "EL JUEGO FUE GANADO POR", "MAPA:", "Humanos", "Jugadores", "Bots", "Espectadores", "Umbral", "Ocupación", "Interés", "Ingresos", "Tiempo", "Abandonar juego", "Más",
		"Ajustes", "Repetición", "Enlaces", "Versión del juego", "Eliminar datos", "Configuración de privacidad", "Cerrar", "Estadísticas del juego", "Rendirse", "Reiniciar juego forzosamente", "Menú", "Atrás", "Seleccionar todo", "Copiar",
		"Limpiar", "Lanzar", "Guardar y cerrar", "Restablecer", "Información",
		"Aumentar la resolución, reducir el tamaño mínimo de la fuente y acelerar la velocidad de renderizado del texto puede sobrecargar tu sistema y afectar la capacidad de respuesta del juego.", "Idioma", "Resolución", "Amigable para móviles",
		"Fuente", "Ocultar nombres de usuario", "Colocar saldo arriba", "Ocultar botones de zoom", "Tamaño mínimo de fuente", "Lobby", "Velocidad de renderizado de texto", "Bajo", "Medio", "Alto", "Muy alto", "Pequeño", "Muy pequeño",
		"Lobby proxy", "Lento", "Normal", "Rápido", "Habilitado", "Nueva actualización del juego", "¡El juego ha sido actualizado! Por favor, recarga el juego.", "Recargar", "Mi cuenta", "Eliminar cuenta", "", "",
		"Si se acuerda la paz, el jugador con el mayor territorio gana el juego."
	]
}

function fh(id, gE) {
	var fH, a54;

	function aAL() {
		a54.aAM.innerHTML += "<br>New Connection..."
	}
	this.aAJ = !0, this.show = function() {
		fH.show(), this.resize(), 15 === id ? ak.al.gv(0, id) ? this.aAK() : aAL() : 16 === id ? ak.al.gv(0, id) ? ak.h8.a4j(2) : aAL() : 17 === id ? ak.al.gv(0, id) ? ak.h8.a4j(3) : aAL() : 18 === id ? (ak.al.close(0, 3253), ak.al.gv(0, id),
			aAL()) : 20 === id ? ak.al.gv(0, id) ? ak.a8W.yz(gE) : aAL() : 21 === id ? ak.al.gv(0, id) ? ak.a8X.tE(gE.rT, gE.rU, gE.rV) : aAL() : 22 === id ? ak.al.gv(0, id) ? ak.a8X.tF(gE.rT, gE.tG, gE.tH) : aAL() : 23 === id ? ak.al.gv(0,
			id) ? ak.a8X.tJ(gE.tK, gE.qp) : aAL() : 24 === id && (ak.al.gv(0, id) ? ak.a8X.tN(gE.tK, gE.rU, gE.rV) : aAL())
	}, this.aAN = function() {
		15 === id ? this.aAK() : 16 === id ? ak.h8.a4j(2) : 17 === id ? ak.h8.a4j(3) : 18 === id ? aO.aQ(8, this.h1, new fh(16)) : 20 === id ? ak.a8W.yz(gE) : 21 === id ? ak.a8X.tE(gE.rT, gE.rU, gE.rV) : 22 === id ? ak.a8X.tF(gE.rT, gE.tG, gE
			.tH) : 23 === id ? ak.a8X.tJ(gE.tK, gE.qp) : 24 === id && ak.a8X.tN(gE.tK, gE.rU, gE.rV)
	}, this.a9m = function(code, j0, data) {
		!j0 && code !== id || (15 === code || 16 === code ? aO.aQ(7, this.h1) : 17 === code ? (ak.al.close(0, 3252), by.al.k7(0), 0 < by.bz.data[117].sQ.length ? (j0 = by.al.k8(0), by.iH.dd(105, j0.k9), by.iH.dd(106, j0.password), aO.aQ(8, this
			.h1, new fh(16))) : (by.iH.dd(105, ""), aO.al.fS())) : 20 === code ? aO.aQ(7, this.h1) : 21 === code ? aO.aQ(10, 0, new aAO(data)) : 23 === code && aO.aQ(13, 0, new aAP({
			data: data,
			tK: gE.tK
		})))
	}, this.aAK = function() {
		t2.e7(48), t2.hN(24, Math.floor(hS.pow(24) * Math.random())), t2.hN(24, Math.floor(hS.pow(24) * Math.random())), kU.k(t2.hA), by.iH.dd(110, tM.ua.a5H(tM.ua.a5F(8))), ak.a8W.yy()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), a54.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("⏳ Connecting...", [new aa("❌ " + aS.aZ[92], function() {
		aO.al.fS()
	})]), a54 = new a55(fH.ff, "Find Server...")
}

function vk() {
	var aAQ, a1z, a20, a21, aAR, aAS;

	function aAV(rc) {
		for (var l = a1z - 1; 0 <= l; l--) 0 === a21[a20[l]] && bU.bp[a20[l]] >= rc && a0R(a20[l])
	}

	function aAU(player) {
		10 === a21[player] ? a21[player] = aAQ : bU.bp[player] < 1e3 ? a21[player] = 3 : bU.bp[player] < 1e4 ? a21[player] = 2 : bU.bp[player] < 6e4 ? a21[player] = 1 : a21[player] = 0
	}
	this.k = function() {
		aAR = aAS = 0, aAQ = 6, a1z = 0, a20 = new Uint16Array(ao.l4), a21 = new Uint8Array(ao.l4)
	}, this.b8 = function() {
		var l;
		for (aAR = cd.mU[13], aAS = bU.f8[ao.bW], l = a1z - 1; 0 <= l; l--) 10 === a21[a20[l]] ? aAU(a20[l]) : 0 == a21[a20[l]]-- && (aAU(a20[l]), a0R(a20[l]));
		16e4 <= bU.bp[c4[0]] && (aAV(16e4), 3e5 <= bU.bp[c4[0]]) && aAV(3e5), bU.bp[ao.bW] > cd.mU[7] && (cd.mU[7] = bU.bp[ao.bW]), cd.mU[14] += aAS - bU.f8[ao.bW] + aAR - cd.mU[13]
	}, this.a0h = function(player) {
		for (var v, l = a1z - 1; 0 <= l; l--)
			if (player === a20[l]) {
				for (a1z--, v = l; v < a1z; v++) a20[v] = a20[v + 1];
				return
			}
	}, this.a29 = function(player, aAX) {
		for (var l = a1z - 1; 0 <= l; l--)
			if (player === a20[l]) return;
		a20[a1z++] = player, a21[player] = aAX ? 2 : 10
	}
}

function aAY() {
	this.b8 = function(hA) {
		var id, nV, hP;
		for (kU.k(hA), kU.b4 += 2, hP = 8 * kU.size; kU.b4 + 8 <= hP;) id = kU.kV(4), nV = kU.kV(9), 0 === id ? this.zU(id, nV, kU.kV(22)) : 1 === id ? this.zU(id, nV, kU.kV(10), kU.kV(10)) : 2 === id ? this.zU(id, nV, kU.kV(10), kU.kV(9)) :
			3 === id || 4 === id ? this.zU(id, nV, kU.kV(10), kU.kV(22)) : 5 === id || 6 === id ? this.zU(id, nV, kU.kV(10)) : 7 === id ? this.zU(id, nV, kU.kV(1)) : this.zU(id, nV);
		this.aAZ()
	}, this.ox = [], this.aAZ = function() {
		for (var aAb = 0, aAc = 0, aAd = 0, aAe = 0, aAf = 0, aAg = 0, l = 0; l < 512; l++) aAb += bU.bV[l], aAc += bU.bp[l], aAd += bU.f8[l], aAe += fA.al.qE[l];
		aAf += fA.al.qC, aAg += mc, this.ox.push(((255 & aAb + aAc + aAd + aAe + aAf + aAg) << 12) + ((3 & aAb) << 10) + ((3 & aAc) << 8) + ((3 & aAd) << 6) + ((3 & aAe) << 4) + ((3 & aAf) << 2) + (3 & aAg))
	}, this.zU = function(id, nV, nW, nX) {
		0 === id ? bq.a9b.xA(nV, nW) : 1 === id ? bq.a9b.xF(nV, nW, nX) : 2 === id ? bq.a9b.xP(nV, nW, nX) : 3 === id ? bq.a9b.xS(nV, nW, nX) : 4 === id ? bq.a9b.xT(nV, nW, nX) : 5 === id ? bq.a9b.xW(nV, nW) : 6 === id ? bq.a9b.xY(nV, nW) : 7 ===
			id ? bq.a9b.xa(nV, nW) : 8 === id ? bq.a9b.fa(nV) : bq.a9b.xd(nV)
	}
}

function wG() {
	var aAh, aAi, tr, ro;
	this.k = function() {
		var l, eB, eC, ur, aAj, dZ, da, eg, oB, d, aC, a6, rl, v, sJ;
		if (function() {
				if (tr = !0, ro = "rgb(" + e1.e6[0] + "," + e1.e6[1] + "," + e1.e6[2] + ")", e1.ib(e1.dh)) return 1;
				return tr = !1, 0
			}()) aAi = null;
		else {
			for (aAh = aF(96, 4), aAj = 1 === e1.dh ? (ur = 0, 160) : (ur = 128, 32), ro = "rgb(" + ur + "," + ur + "," + ur + ")", aAi = new Array(4), l = 3; 0 <= l; l--) {
				if (aAi[l] = document.createElement("canvas"), dZ = l % 2 == 0 ? e1.e0 : aAh, da = l % 2 == 0 ? aAh : e1.e2 + 2 * aAh, aAi[l].width = dZ, aAi[l].height = da, d = (oB = (eg = aAi[l].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, dZ, da)).data, l % 2 == 0)
					for (eC = aAh - 1; 0 <= eC; eC--)
						for (aC = aAj + Math.floor((eC + 1) * (ur - aAj) / (aAh + 1)), eB = dZ - 1; 0 <= eB; eB--) d[a6 = 4 * ((0 === l ? aAh - eC - 1 : eC) * dZ + eB)] = aC, d[a6 + 1] = aC, d[a6 + 2] = aC, d[a6 + 3] = 255;
				else {
					for (eB = aAh - 1; 0 <= eB; eB--)
						for (aC = aAj + Math.floor((eB + 1) * (ur - aAj) / (aAh + 1)), eC = da - 1 - aAh; aAh <= eC; eC--) d[a6 = 4 * (eC * dZ + (3 === l ? aAh - eB - 1 : eB))] = aC, d[a6 + 1] = aC, d[a6 + 2] = aC, d[a6 + 3] = 255;
					for (v = 1; 0 <= v; v--)
						for (eB = aAh - 1; 0 <= eB; eB--)
							for (eC = aAh - 1; 0 <= eC; eC--) rl = (Math.pow(eB * eB + eC * eC, .5) + 1) / (aAh + 1), aC = aAj + Math.floor((1 < rl ? 1 : rl) * (ur - aAj)), d[a6 = 4 * ((0 === v ? aAh - eC - 1 : eC + v * (da - aAh)) * dZ + (1 ===
								l ? eB : aAh - eB - 1))] = aC, d[a6 + 1] = aC, d[a6 + 2] = aC, d[a6 + 3] = 255
				}
				eg.putImageData(oB, 0, 0)
			}
			sJ = aAj, e1.e4.fillStyle = "rgb(" + sJ + "," + sJ + "," + sJ + ")", e1.e4.fillRect(0, 0, e1.e0, 1), e1.e4.fillRect(0, e1.e2 - 1, e1.e0, 1), e1.e4.fillRect(0, 0, 1, e1.e2), e1.e4.fillRect(e1.e0 - 1, 0, 1, e1.e2)
		}
	}, this.nr = function() {
		var v = tr ? 0 : -aAh;
		aAm(v, v, e1.e0 - 2 * v, e1.e2 - 2 * v, va.a5u, va.a5v, va.a5w, va.a5x) || (eL.fillStyle = ro, eL.fillRect(0, 0, b9.dZ, b9.da))
	}, this.eK = function() {
		tr || (aAn(0, -aAh, e1.e0, aAh, va.a5u, va.a5v, va.a5w, va.a5x) && eL.drawImage(aAi[0], va.a5s, va.a5t - aAh), aAn(e1.e0, -aAh, aAh, e1.e2 + 2 * aAh, va.a5u, va.a5v, va.a5w, va.a5x) && eL.drawImage(aAi[1], va.a5s + e1.e0, va.a5t - aAh),
			aAn(0, e1.e2, e1.e0, aAh, va.a5u, va.a5v, va.a5w, va.a5x) && eL.drawImage(aAi[2], va.a5s, va.a5t + e1.e2), aAn(-aAh, -aAh, aAh, e1.e2 + 2 * aAh, va.a5u, va.a5v, va.a5w, va.a5x) && eL.drawImage(aAi[3], va.a5s - aAh, va.a5t - aAh))
	}
}

function p6() {
	for (mc = 0, l = ao.l4 - 1; 0 <= l; l--) 0 !== bU.bV[l] && mc++;
	n5 = new Uint16Array(mc);
	for (var m = 0, l = 0; l < ao.l4; l++) 0 !== bU.bV[l] && (n5[m++] = l)
}

function aAo() {
	aAp(), aAq()
}

function aAq() {
	for (var l = mc - 1; 0 <= l; l--) 0 === bU.bV[n5[l]] && aAr(l)
}

function aAr(l) {
	mc--;
	for (var v = l; v < mc; v++) n5[v] = n5[v + 1]
}

function aAp() {
	for (var l = mc - 1; 0 <= l; l--) {
		var bo, a6 = n5[l];
		bU.bp[a6] <= aF(bU.aAs[a6], 4) ? bU.bp[a6] <= 1e3 && (2 !== bU.bV[a6] || 0 === bU.bp[a6]) && aAt(a6) : bU.bp[a6] >= bU.aAs[a6] ? (bo = bU.bp[a6], 250 <= (bU.aAs[a6] = bo) && (bU.sn[a6] = 1)) : bU.aAs[a6] -= Math.max(1, aF(bU.aAs[a6] - bU.bp[
			a6], 1e3))
	}
}

function aAu() {
	for (var un = 0, l = mc - 1; 0 <= l; l--) un += bU.f8[n5[l]];
	return un % 4096
}

function vo() {
	var eB, eC, dZ, da, aAv, yI, yJ, aAw, player, a5;

	function aB1() {
		return function() {
			var l;
			for (l = 0; l < 8; l++)
				if (eB = aF(dZ * aK.random(), aK.value(100)), eC = aF(da * aK.random(), aK.value(100)), aB8()) return 1;
			return
		}() || function() {
			var nb, nc, v, a1Y, a8, a1X;
			for (nb = aF(dZ * aK.random(), aK.value(100)), nc = aF(da * aK.random(), aK.value(100)), v = 40; 1 <= v; v--)
				for (a1Y = da - v; 0 <= a1Y; a1Y -= 40)
					for (eC = (a1Y + nc) % da, a8 = 40; 1 <= a8; a8--)
						for (a1X = dZ - a8; 0 <= a1X; a1X -= 40)
							if (eB = (a1X + nb) % dZ, aB8()) return 1;
			return
		}()
	}

	function aB8() {
		for (var a6, qY, gap = aF(aAv - aAw, 2), yA = yJ + eC * aAv + gap, yK = yI + eB * aAv + gap, qZ = yA + aAw - 1; yA <= qZ; qZ--)
			for (qY = yK + aAw - 1; yK <= qY; qY--)
				if (a6 = bX.qe(qY, qZ), !bX.qk(a6) || bX.a2m(a6)) return;
		return 1
	}

	function aB2(a1X, a1Y) {
		aAx(), aB9(a1X - 2, a1Y - 2)
	}

	function aAx() {
		bU.bV[player] = 0, bU.f8[player] = 0, bU.bp[player] = bU.aAs[player] = 0, bU.n4[player] = [], bU.f9[player] = [], bU.qB[player] = [], bU.aBA[player] = [], bU.qa[player] = bU.qb[player] = bU.qc[player] = bU.qd[player] = 0
	}

	function aB9(a1X, a1Y) {
		var a6, l, aBB, aBC;
		for (bU.bV[player] = 1, player < ao.cW ? bU.f8[player] = ao.oi : bU.f8[player] = oE[p3.cS[player - ao.cW]], bU.qa[player] = a1X + 10, bU.qb[player] = a1Y + 10, bU.qd[player] = bU.qc[player] = 0, aBB = a1X; aBB < a1X + 4; aBB++)
			for (aBC = a1Y; aBC < a1Y + 4; aBC++)(a1X < aBB && aBB < a1X + 3 || a1Y < aBC && aBC < a1Y + 3) && (a6 = bX.qe(aBB, aBC), bX.qk(a6)) && (bU.qa[player] = aBB < bU.qa[player] ? aBB : bU.qa[player], bU.qc[player] = aBB > bU.qc[player] ?
				aBB : bU.qc[player], bU.qb[player] = aBC < bU.qb[player] ? aBC : bU.qb[player], bU.qd[player] = aBC > bU.qd[player] ? aBC : bU.qd[player], a5[bU.bp[player]] = a6, bU.bp[player]++, bX.a6g(a6, player));
		for (bU.aAs[player] = bU.bp[player], l = bU.bp[player] - 1; 0 <= l; l--) bX.a6T(a5[l], player) ? (bX.a0k(a5[l], player), bU.f9[player].push(a5[l])) : bX.yC(a5[l]) ? (bX.a0k(a5[l], player), bU.qB[player].push(a5[l])) : bX.a6S(a5[l]) && (bX
			.a0k(a5[l], player), bU.aBA[player].push(a5[l]))
	}

	function aB7(a1X, a1Y) {
		for (var a6, qY, qZ = a1Y; a1Y - 6 < qZ; qZ--)
			for (qY = a1X; a1X - 6 < qY; qY--)
				if (a6 = bX.qe(qY, qZ), bX.a2m(a6)) return;
		return 1
	}
	this.k = function() {
		var l, a1X, a1Y;
		if (a5 = new Array(12), aAw = 6, aAv = 10, dZ = aF(e1.e0, aAv), da = aF(e1.e2, aAv), yI = aF(e1.e0 - aAv * dZ, 2), yJ = aF(e1.e2 - aAv * da, 2), ao.bA)
			for (l = 0; l < ao.cW; l++) player = l, aAx(), bU.bV[player] = 1;
		if (oR.hD && oR.iM.aAy) {
			for (player = 0; player < ao.l4; player++)
				if (1 !== bU.bV[player]) {
					if (player < ao.ok) {
						if (function() {
								var a1X = oR.iM.aAy[player] + 1,
									a1Y = oR.iM.aB6[player] + 1;
								if (3 < a1X && a1X < e1.e0 - 5 && 3 < a1Y && a1Y < e1.e2 - 5 && bX.qk(bX.qe(a1X, a1Y)) && aB7(a1X + 3, a1Y + 3)) return aB2(a1X + 1, a1Y + 1), 1;
								return
							}()) continue;
						if (aB1()) {
							a1X = yI + eB * aAv + aF(aAv, 2), a1Y = yJ + eC * aAv + aF(aAv, 2), aB2(a1X, a1Y);
							continue
						}
					}
					aAx()
				}
		} else ! function() {
			var a1X, a1Y;
			for (player = 0; player < ao.l4; player++) 1 !== bU.bV[player] && (player < ao.ok && aB1() ? (a1X = yI + eB * aAv + aF(aAv, 2), a1Y = yJ + eC * aAv + aF(aAv, 2), aB2(a1X, a1Y)) : aAx())
		}();
		cd.mU[7] = bU.bp[ao.bW], cd.mU[8] = bU.f8[ao.bW]
	}, this.aBD = function(xG, aBE, aBF) {
		var l, a1X, a1Y, a6, eB, eC;
		for (player = xG, l = 0; l < 20; l++)
			for (a1X = aBE + l; aBE - l <= a1X; a1X--)
				for (a1Y = aBF + l; aBF - l <= a1Y; a1Y--)
					if ((a1X === aBE + l || a1X === aBE - l || a1Y === aBF + l || a1Y === aBF - l) && 3 < a1X && a1X < e1.e0 - 5 && 3 < a1Y && a1Y < e1.e2 - 5 && bX.qk(bX.qe(a1X, a1Y)) && aB7(a1X + 3, a1Y + 3)) {
						if (0 < bU.bp[player]) {
							for (eC = eB = a6 = void 0, eB = bU.qc[player]; eB >= bU.qa[player]; eB--)
								for (eC = bU.qd[player]; eC >= bU.qb[player]; eC--) a6 = 4 * (eC * e1.e0 + eB), bX.a6V(player, a6) && (bX.a6b(a6), bU.bp[player]--);
							aAx()
						}
						return aB9(a1X - 1, a1Y - 1), !0
					} return !1
	}, this.aBH = function(xG) {
		player = xG, aB1() ? aB2(yI + eB * aAv + aF(aAv, 2), yJ + eC * aAv + aF(aAv, 2)) : aAx()
	}
}

function ou() {
	this.xE = function(player, rj) {
		p5.aBD(player, p2.u6(rj), p2.u8(rj)) && (b6.bJ = !0), ao.ap && this.b8()
	}, this.b8 = function() {
		ao.bA = !1;
		for (var l = 0; l < ao.cW; l++) 0 !== bU.bV[l] && 0 === bU.bp[l] && p5.aBH(l);
		0 !== bU.bV[ao.bW] ? (cd.mU[7] = bU.bp[ao.bW], cd.mU[8] = bU.f8[ao.bW], jK.aBI(), ey.mg(), ao.fX || io.aBJ(bU.qa[ao.bW] - 5, bU.qb[ao.bW] - 5, bU.qc[ao.bW] + 5, bU.qd[ao.bW] + 5), pM.k()) : ex.show(!1, !1, !1, !0), ar.aBK(18), cf.zQ(), cf
			.lA(!0), p9.al.aBL(), ao.on = null, bH.aBM = !0, bH.a9Y(), ao.ap && ae.af.setState(1)
	}
}

function wV() {
	this.bd = new a5V, this.aBN = new aBO, this.aBP = new re, this.al = new aBQ, this.y3 = new aBR, this.sJ = new a4I, this.aBS = new aBT, this.fB = new qA, this.qV = new tk, this.k = function() {
		this.aBP.k(), this.al.k(), this.y3.k(), this.sJ.k()
	}
}

function w7() {
	this.a1B = function() {
		var aBW;
		return !(mc < 3 || bU.bp[c4[0]] >= ao.mb >> 1) && (ao.fC ? (aBW = cU.aBX(), !(2 * cU.aBZ(bj.nl()) >= aBW)) : function() {
			var aBW = cU.aBX();
			if (2 * bU.f8[c4[0]] >= aBW) return !1;
			return !0
		}())
	}
}

function aBa() {
	var fH, aBb, aBc, aBd, aBe, aBf, colors = [0, 0, 0],
		aBg = -1;

	function aBk(l) {
		var aBl = aBb.eC + l * (dY.gap + aBf);
		eL.fillStyle = "rgb(" + (0 === l ? 150 : 2 === l ? 30 : 0) + "," + (1 === l ? 130 : 2 === l ? 30 : 0) + "," + (2 === l ? 220 : 0) + ")", eL.fillRect(aBd, aBl, colors[l] * aBe, aBf), eL.strokeStyle = ac.c7, eL.strokeRect(aBd, aBl, aBe, aBf),
			eL.fillStyle = ac.c7, eL.font = n.o.dc(0, .32 * aBf), n.o.textBaseline(eL, 1), n.o.textAlign(eL, 0), eL.fillText((0 === l ? "Red: " : 1 === l ? "Green: " : "Blue: ") + aBi(l), aBd + dY.gap, aBl + .53 * aBf)
	}

	function aBi(l, aBm) {
		return aBm = aBm || 256, hS.i7(Math.floor(aBm * colors[l]), 0, aBm - 1)
	}

	function rC(i2, i3) {
		return !(i2 < aBd || i3 < aBb.eC || i2 > aBb.eB + aBb.dZ || i3 > aBb.eC + aBb.da)
	}
	this.show = function() {
		var aC = by.bz.data[121].value;
		colors[0] = (aC >> 12) / 63, colors[1] = (aC >> 6 & 63) / 63, colors[2] = (63 & aC) / 63, fH.show(), this.resize()
	}, this.fw = function() {
		by.iH.dd(121, (aBi(0, 64) << 12) + (aBi(1, 64) << 6) + aBi(2, 64)), fH.fw()
	}, this.resize = function() {
		fH.resize(), aBb.resize();
		var a2 = b9.iy,
			nQ = fH.nL(),
			vD = (aBb.eC = Math.max(aBb.eC, a2 * nQ.nM + dY.gap), a2 * nQ.nP - 2 * dY.gap);
		aBb.da = Math.min(aBb.da, vD), aBb.dZ = 2 * aBb.da, aBb.eC = a2 * nQ.nM + .5 * (a2 * nQ.nP - aBb.da), aBb.eB = .5 * (b9.dZ - aBb.dZ), aBc = .25 * aBb.dZ, aBd = aBb.eB + aBc + dY.gap, aBe = aBb.dZ - aBc - dY.gap, aBf = (aBb.da - 2 * dY
			.gap) / 3
	}, this.eK = function() {
		var aI, n9, a8;
		fH.eK(), eL.lineWidth = dY.iA, aI = aBi(0), n9 = aBi(1), a8 = aBi(2), eL.fillStyle = "rgb(" + aI + "," + n9 + "," + a8 + ")", eL.fillRect(aBb.eB, aBb.eC, aBc, aBb.da), eL.strokeStyle = ac.c7, eL.strokeRect(aBb.eB, aBb.eC, aBc, aBb.da), eL
			.fillStyle = aI + n9 + a8 < 306 && n9 < 150 ? ac.c7 : ac.ep, n.o.textBaseline(eL, 1), n.o.textAlign(eL, 1), eL.font = n.o.dc(0, .1 * aBb.da), eL.rotate(-Math.PI / 2), eL.fillText("National Color", -aBb.eC - .5 * aBb.da, aBb.eB + .5 *
				aBc), eL.setTransform(1, 0, 0, 1, 0, 0), aBk(0), aBk(1), aBk(2)
	}, this.eA = function(i2, i3) {
		rC(i2, i3) && (aBg = hS.i7(Math.floor((i3 - aBb.eC) / (aBf + .75 * dY.gap)), 0, 2), colors[aBg] = hS.i7((i2 - aBd) / aBe, 0, 1), b6.bJ = !0)
	}, this.eE = function(i2) {
		-1 !== aBg && (colors[aBg] = hS.i7((i2 - aBd) / aBe, 0, 1), b6.bJ = !0)
	}, this.lg = function(i2, i3, deltaY) {
		rC(i2, i3) && (i2 = hS.i7(Math.floor((i3 - aBb.eC) / (aBf + .75 * dY.gap)), 0, 2), colors[i2] = hS.i7(colors[i2] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), b6.bJ = !0)
	}, this.a95 = function() {
		0 <= aBg && (aBg = -1, b6.bJ = !0)
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("Choose Your Nation's Color!", [new aa("❌ " + aS.aZ[92], function() {
		aO.al.fS()
	})], !1), aBb = new aBh([.5, .25], [.5, .5], 1)
}

function iN() {
	this.iO = null, this.k = function() {
		var aBn = [120, 105, 92],
			cos = [12, 12, 60],
			aBo = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aBp = [140, 130, 120],
			aBq = [12, 12, 76],
			aBr = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aBs = [130, 117, 106],
			aBt = [12, 12, 68],
			aBu = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.iO = new Array(e1.iJ + 1), this.iO[0] = {
			name: "White Arena",
			dZ: 230,
			da: 230,
			iT: 1e3,
			iU: 2e3,
			gf: 173
		}, this.iO[1] = {
			name: "Black Arena",
			dZ: 800,
			da: 800,
			iT: 100,
			iU: 50,
			gf: 43
		}, this.iO[2] = {
			name: "Island",
			dZ: 512,
			da: 512,
			iT: 128,
			iU: 32,
			gf: 0
		}, this.iO[3] = {
			name: "Mountains",
			dZ: 960,
			da: 960,
			iT: 60,
			iU: 8,
			gf: 0
		}, this.iO[4] = {
			name: "Desert",
			dZ: 900,
			da: 900,
			iT: 100,
			iU: 5,
			gf: 0
		}, this.iO[5] = {
			name: "Swamp",
			dZ: 1e3,
			da: 1e3,
			iT: 100,
			iU: 40,
			gf: 0
		}, this.iO[6] = {
			name: "Snow",
			dZ: 1e3,
			da: 1e3,
			iT: 100,
			iU: 20,
			gf: 0
		}, this.iO[7] = {
			name: "Cliffs",
			dZ: 1024,
			da: 1024,
			iT: 128,
			iU: 32,
			gf: 0
		}, this.iO[8] = {
			name: "Pond",
			dZ: 820,
			da: 820,
			iT: 200,
			iU: 100,
			gf: 0
		}, this.iO[9] = {
			name: "Halo",
			dZ: 1024,
			da: 1024,
			iT: 128,
			iU: 32,
			gf: 0
		}, this.iO[10] = {
			name: "Europe",
			y6: aBp,
			y7: aBq,
			ie: aBr
		}, this.iO[11] = {
			name: "World",
			y6: aBs,
			y7: aBt,
			ie: aBu
		}, this.iO[12] = {
			name: "Caucasia",
			y6: aBs,
			y7: aBt,
			ie: aBu
		}, this.iO[13] = {
			name: "Africa",
			y6: aBn,
			y7: cos,
			ie: aBo
		}, this.iO[14] = {
			name: "Middle East",
			y6: aBn,
			y7: cos,
			ie: aBo
		}, this.iO[15] = {
			name: "Scandinavia",
			y6: aBp,
			y7: aBq,
			ie: aBr
		}, this.iO[16] = {
			name: "North America",
			y6: aBp,
			y7: aBq,
			ie: aBr
		}, this.iO[17] = {
			name: "South America",
			y6: aBn,
			y7: cos,
			ie: aBo
		}, this.iO[18] = {
			name: "Asia",
			y6: aBs,
			y7: aBt,
			ie: aBu
		}, this.iO[19] = {
			name: "Australia",
			y6: aBn,
			y7: cos,
			ie: aBo
		}, this.iO[20] = {
			name: "Island Kingdom",
			dZ: 1024,
			da: 1024,
			iT: 128,
			iU: 32,
			gf: 0
		}, this.iO[e1.iJ] = {}
	}
}

function wa() {
	this.al = new aBv, this.aP = 0;
	var aBw = new Array(15);

	function aBz() {
		for (var m = aBw.length, l = 0; l < m; l++) aBw[l] = null
	}
	this.k = function() {
		for (var aBx, aBy = document.body.firstChild; aBy;) aBx = aBy.nextSibling, "DIV" !== aBy.tagName && "INPUT" !== aBy.tagName && "BUTTON" !== aBy.tagName || document.body.removeChild(aBy), aBy = aBx
	}, this.aQ = function(b4, h1, gE) {
		void 0 === h1 && (h1 = this.aP), b6.bJ = !0, 0 === b4 && (0 === aW.aX() ? b4 = 5 : ae.af.setState(13)), this.fw(), this.aP = b4;
		var mr = aBw[b4];
		if (!mr || 4 === b4 || 7 === b4 || 8 === b4 || 9 === b4 || 10 === b4 || 11 === b4 || 13 === b4) {
			if (0 === b4) return void aBz();
			1 === b4 ? mr = new fG : 2 === b4 ? mr = new uY : 3 === b4 ? mr = new a9z : 4 === b4 || 9 === b4 || 10 === b4 || 11 === b4 || 13 === b4 ? mr = gE : 5 === b4 ? mr = new aC0 : 6 === b4 ? mr = new wt : 7 === b4 ? mr = new jf : 8 === b4 ?
				mr = gE : 12 === b4 ? mr = new aBa : 14 === b4 && (mr = new a87), mr.h1 = h1, aBw[b4] = mr
		}
		mr.show(gE)
	}, this.ab = function() {
		this.hY() && this.aQ(aBw[this.aP].h1)
	}, this.a88 = function(b4) {
		this.hY() && (this.fw(), b6.bJ = !0, this.aP = b4, aBw[b4].show())
	}, this.fw = function() {
		this.hY() && aBw[this.aP].fw()
	}, this.fT = function() {
		this.hY() && (aBw[this.aP].fw(), aBz(), this.aP = 0, ae.af.setState(13))
	}, this.eK = function() {
		var mr;
		this.hY() && (mr = aBw[this.aP]).eK && mr.eK()
	}, this.resize = function() {
		if (!this.hY()) return !1;
		aBw[this.aP].resize()
	}, this.eA = function(eB, eC) {
		var mr;
		this.hY() && (mr = aBw[this.aP]).eA && mr.eA(eB, eC)
	}, this.eE = function(eB, eC) {
		var mr;
		this.hY() && (mr = aBw[this.aP]).eE && mr.eE(eB, eC)
	}, this.a95 = function() {
		var mr;
		this.hY() && (mr = aBw[this.aP]).a95 && mr.a95()
	}, this.lg = function(i2, i3, deltaY) {
		var mr;
		this.hY() && (mr = aBw[this.aP]).lg && mr.lg(i2, i3, deltaY)
	}, this.fx = function(code) {
		var mr;
		return !!this.hY() && ((mr = aBw[this.aP]).fx && mr.fx(code), !0)
	}, this.b8 = function() {
		var mr;
		this.hY() && (mr = aBw[this.aP]) && mr.b8 && mr.b8()
	}, this.hY = function() {
		return 0 < this.aP
	}, this.gV = function() {
		return aBw[this.aP]
	}, this.jy = function(b4) {
		return aBw[b4]
	}
}

function aBO() {
	this.aC1 = function(player) {
		for (var a5a = fA.al.a5a, rU = player << 3, l = rU + fA.al.qE[player] - 1; rU <= l; l--) this.aC2(a5a[l])
	}, this.aC2 = function(aC3) {
		var al = fA.al,
			aC4 = al.qC - 1,
			aC5 = al.s5[aC3],
			aC6 = al.aC7[aC3],
			aC8 = al.s4[aC3];
		al.qC = aC4, al.s5[aC3] = al.s5[aC4], al.aC9[aC3] = al.aC9[aC4], al.aCA[aC3] = al.aCA[aC4], al.s4[aC3] = al.s4[aC4], al.aCB[aC3] = al.aCB[aC4], al.s6[aC3] = al.s6[aC4], al.aC7[aC3] = al.aC7[aC4], al.a4L[aC3] = al.a4L[aC4], al.aCC[aC3] =
			al.aCC[aC4], al.a5a[al.s5[aC3]] = aC3,
			function(dQ) {
				var player = dQ >> 3,
					al = fA.al,
					m = al.qE[player] - 1,
					aCG = (player << 3) + m;
				al.qE[player] = m, aCG !== dQ && (al.a5a[dQ] = al.a5a[aCG], al.s5[al.a5a[dQ]] = dQ)
			}(aC5), fA.y3.y3[p2.aCE(al.s4[aC3])][al.aC7[aC3]] = aC3, aC4 = p2.aCE(aC8), aC5 = aC6, aC4 = fA.y3.y3[aC4], al = aC4.pop(), aC5 !== aC4.length && (aC4[aC5] = al, fA.al.aC7[al] = aC5)
	}
}

function vh() {
	var a2 = n.color;
	this.ep = a2.qw(0, 0, 0), this.ed = a2.a75(0, 0, 0, .7), this.eP = a2.a75(0, 0, 0, .5), this.lC = a2.a75(0, 0, 0, .85), this.c8 = a2.a75(0, 0, 0, .75), this.hq = a2.a75(0, 0, 0, .6), this.tC = a2.a75(0, 0, 0, .35), this.c7 = a2.qw(255, 255, 255),
		this.lG = a2.a75(255, 255, 255, .3), this.em = a2.a75(255, 255, 255, .6), this.a1t = a2.a75(255, 255, 255, .4), this.aCI = a2.a75(255, 255, 255, .25), this.aCJ = a2.a75(255, 255, 255, .85), this.a13 = a2.a75(255, 255, 255, .75), this.aCK = a2
		.a75(255, 255, 255, .15), this.a7C = a2.qw(128, 128, 128), this.tB = a2.a75(64, 64, 64, .75), this.a74 = a2.a75(88, 88, 88, .83), this.k5 = a2.a75(60, 60, 60, .85), this.aCL = a2.a75(80, 60, 60, .85), this.a1l = a2.qw(30, 255, 30), this.kF =
		a2.qw(0, 200, 0), this.a1G = a2.qw(128, 255, 128), this.aCM = a2.a75(10, 65, 10, .75), this.mk = a2.a75(0, 255, 0, .6), this.eQ = a2.a75(0, 255, 0, .5), this.el = a2.a75(0, 200, 0, .5), this.ah = a2.a75(0, 100, 0, .75), this.ec = a2.a75(0,
			60, 0, .8), this.lE = a2.a75(0, 255, 0, .3), this.hp = a2.a75(0, 180, 0, .6), this.aA1 = a2.a75(0, 120, 0, .85), this.a7D = a2.qw(0, 120, 0), this.aCN = a2.a75(0, 70, 0, .85), this.ek = a2.qw(255, 120, 120), this.a1H = a2.qw(255, 160,
			160), this.kG = a2.qw(255, 70, 70), this.a1m = a2.qw(230, 0, 0), this.a11 = a2.a75(220, 0, 0, .6), this.a1v = a2.a75(255, 100, 100, .8), this.aCO = a2.a75(100, 0, 0, .85), this.rR = a2.a75(60, 0, 0, .85), this.aCP = a2.a75(200, 0, 0, .6),
		this.ad = a2.a75(120, 0, 0, .85), this.aCQ = a2.qw(255, 70, 10), this.rS = a2.a75(0, 60, 60, .85), this.a1j = a2.a75(10, 60, 60, .9), this.vE = a2.a75(0, 96, 96, .75), this.ej = a2.qw(160, 160, 255), this.lB = a2.a75(0, 40, 90, .75), this
		.aCR = a2.a75(0, 0, 255, .6), this.aCS = a2.qw(200, 200, 255), this.mn = a2.qw(255, 120, 100), this.eR = a2.a75(255, 255, 0, .5), this.lF = a2.a75(255, 255, 150, .2), this.aCT = a2.qw(255, 255, 0), this.aCU = a2.qw(255, 255, 200), this.aCV =
		a2.a75(200, 200, 0, .6), this.aCW = a2.a75(140, 120, 0, .75), this.aCX = a2.a75(180, 160, 40, .75), this.aCY = a2.a75(70, 50, 20, .85), this.a85 = a2.a75(255, 140, 0, .75), this.a0z = a2.a75(0, 0, 0, 0)
}

function aAO(data) {
	var fH, aCZ, a53;

	function aCa(jD) {
		var rU = jD < 0 ? parseInt(data.data[0][0]) - 1 + jD : parseInt(data.data[data.data.length - 1][0]);
		aO.aQ(8, 0, new fh(21, {
			rT: data.rT,
			rU: rU,
			rV: rU + Math.abs(jD) - 1
		}))
	}
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), aCZ.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, a53 = [new aa("❌ " + aS.aZ[92], function() {
		aO.ab()
	}), new aa("⬆️ Prev 100 (🧈 1.01)", function() {
		aCa(-100)
	}), new aa("⬆️ Prev 10 (🧈 0.11)", function() {
		aCa(-10)
	}), new aa("⬇️ Next 10 (🧈 0.11)", function() {
		aCa(10)
	}), new aa("⬇️ Next 100 (🧈 1.01)", function() {
		aCa(100)
	}), new aa("🛠️ Custom", function() {
		aO.aQ(11, 10, new aCb({
			rT: data.rT
		}))
	})], fH = new fd(data.title, a53), aCZ = new t6(fH.ff, data.data)
}

function vn() {
	var iU, aCc, aCd, iT, aCe, aCf, aCg, aCh, aCi, aCj, aCk, xi, aCl, aCm = !1,
		aCn = !1;

	function aCo(aCp) {
		xi = b6.b5, aCd = iT = aCc = 0, aCe = (aCl = 33) / aCp, iU = 1 / (aCp / aCl / 4), aCf = (b9.dZ / 2 + sG) / sF, aCg = (b9.da / 2 + sH) / sF, aCh = sF
	}

	function aCu(aCv) {
		Math.abs(Math.log(aCk / aCh)) < .125 && (aCk = aCv * aCh)
	}

	function aCt(eG, eH, ih, eZ) {
		aCi = (eG + ih + 1) / 2, aCj = (eH + eZ + 1) / 2;
		ih = b9.dZ / (ih - eG + 1), eG = b9.da / (eZ - eH + 1);
		aCk = .9 * (ih < eG ? ih : eG)
	}
	this.y9 = function() {
		return aCm
	}, this.pN = function() {
		aCo(1), this.aBJ(0, 0, e1.e0 - 1, e1.e2 - 1), ao.bA || ao.fX || this.lf(ao.bW, 3e3, !0, .3)
	}, this.lf = function(player, aCp, aCq, zoom) {
		ao.lh || aCm && !aCq && aCn || 0 === bU.bp[player] || (iu.a94 = !1, aCn = aCq, aCo(aCp), function(player) {
			aCi = (bU.qa[player] + bU.qc[player] + 1) / 2, aCj = (bU.qb[player] + bU.qd[player] + 1) / 2
		}(player), function(zoom, player) {
			var nb = bU.qc[player] - bU.qa[player] + 1,
				player = bU.qd[player] - bU.qb[player] + 1,
				v = b9.dZ / nb,
				a8 = b9.da / player,
				v = (aCk = v < a8 ? v : a8, 0 !== zoom ? zoom : nb < 20 && player < 20 ? .5 : .9);
			aCk *= v, aCu(7 / 8)
		}(zoom, player), aCm = !0, vQ.a8R())
	}, this.sX = function(aCp) {
		ao.fX || ao.lh || (iu.a94 = !1, aCn = !1, aCo(aCp), aCt(0, 0, e1.e0 - 1, e1.e2 - 1), aCu(7 / 8), aCm = !0, vQ.a8R())
	}, this.aBJ = function(eG, eH, ih, eZ) {
		aCt(eG, eH, ih, eZ), sF = aCk, iu.aCw(aCi, b9.dZ / 2), iu.aCx(aCj, b9.da / 2), va.a5z()
	}, this.hP = function() {
		return !(aCm && aCn || (aCm = !1))
	}, this.b8 = function() {
		var aD0, aD1, hR, aD4;
		aCm && (aCc < .5 ? iT < aCe && (iT += aCe * iU, aCd = aCc) : 1 - aCd < aCc && (iT = (iT -= aCe * iU) < aCe * iU ? aCe * iU : iT), xi = xi >= b6.b5 ? b6.b5 - 1 : xi, hR = b6.b5 - xi, aCc = 1e3 < hR || 1 < (aCc += iT * hR / aCl) ? 1 : aCc,
			xi = b6.b5, hR = sF, aD0 = sG, aD1 = sH, hR = (sF = aCh * Math.pow(aCk / aCh, aCc)) / hR, aD4 = 1 - (aCh * Math.pow(aCk / aCh, 1 - aCc) - aCh) / (aCk - aCh), iu.aCw(aCf + aD4 * (aCi - aCf), b9.dZ / 2), iu.aCx(aCg + aD4 * (aCj -
				aCg), b9.da / 2), cf.zoom(hR, (aD0 * hR - sG) / (1 - hR), (aD1 * hR - sH) / (1 - hR)), va.a5z(), 1 <= aCc && (aCm = !1, bH.a6i = !0), b6.bJ = !0)
	}
}

function aD5() {
	for (var eB, eC, l = a0J - 1; 0 <= l; l--) eB = aF(a0L[l], 4) % e1.e0, eC = aF(a0L[l], 4 * e1.e0), bU.qa[a0F] = bU.qa[a0F] > eB ? eB : bU.qa[a0F], bU.qb[a0F] = bU.qb[a0F] > eC ? eC : bU.qb[a0F], bU.qc[a0F] = bU.qc[a0F] < eB ? eB : bU.qc[a0F], bU
		.qd[a0F] = bU.qd[a0F] < eC ? eC : bU.qd[a0F]
}

function a0Y() {
	var hR, a6, l, m = bU.n4[a0F].length;
	loop: for (l = m - 1; 0 <= l; l--) {
		for (hR = 3; 0 <= hR; hR--)
			if (a6 = bU.n4[a0F][l] + a0O[hR], bX.qR(a6) || bX.a0n(a6) && bX.qS(a6) !== a0F) {
				bX.a2n(bU.n4[a0F][l], a0F);
				continue loop
			} bU.n4[a0F][l] = bU.n4[a0F][m - 1], bU.n4[a0F].pop(), m--
	}
}

function a0Z() {
	var hR, a6, aD6, aD7, m = bU.f9[a0F].length;
	loop: for (var l = m - 1; 0 <= l; l--) {
		for (aD6 = aD7 = !1, hR = 3; 0 <= hR; hR--) {
			if (a6 = bU.f9[a0F][l] + a0O[hR], bX.a6U(a6, a0F)) continue loop;
			aD6 = aD6 || bX.tr(a6), aD7 = aD7 || bX.tt(a6)
		}
		aD6 ? bU.qB[a0F].push(bU.f9[a0F][l]) : aD7 ? bU.aBA[a0F].push(bU.f9[a0F][l]) : bX.a6g(bU.f9[a0F][l], a0F), bU.f9[a0F][l] = bU.f9[a0F][m - 1], bU.f9[a0F].pop(), m--
	}
}

function aD8() {
	bU.bp[a0I] -= a0J
}

function aD9(border) {
	for (var m = border.length, l = m - 1; 0 <= l; l--) bX.a6V(a0I, border[l]) || (border[l] = border[m - 1], border.pop(), m--)
}

function aDA(border) {
	for (var m = border.length, l = m - 1; 0 <= l; l--) !bX.a6V(a0I, border[l]) && bX.qk(border[l]) && (border[l] = border[m - 1], border.pop(), m--)
}

function aDB(border) {
	for (var hR, a6, m = border.length, l = m - 1; 0 <= l; l--)
		for (hR = 3; 0 <= hR; hR--)
			if (a6 = border[l] + a0O[hR], bX.a6U(a6, a0I)) {
				bU.f9[a0I].push(border[l]), border[l] = border[m - 1], border.pop(), m--;
				break
			}
}

function aDC() {
	for (var hR, a6, l = a0J - 1; 0 <= l; l--)
		for (hR = 3; 0 <= hR; hR--) a6 = a0L[l] + a0O[hR], bX.a6W(a0I, a6) && bX.a6X(a6) && (bU.f9[a0I].push(a6), bX.a0k(a6, a0I))
}

function aDD() {
	var eB, eC;
	loop: for (; bU.qb[a0I] < bU.qd[a0I];) {
		for (eB = bU.qc[a0I]; eB >= bU.qa[a0I]; eB--)
			if (bX.a6V(a0I, 4 * (bU.qb[a0I] * e1.e0 + eB))) break loop;
		bU.qb[a0I]++
	}
	loop: for (; bU.qb[a0I] < bU.qd[a0I];) {
		for (eB = bU.qc[a0I]; eB >= bU.qa[a0I]; eB--)
			if (bX.a6V(a0I, 4 * (bU.qd[a0I] * e1.e0 + eB))) break loop;
		bU.qd[a0I]--
	}
	loop: for (; bU.qa[a0I] < bU.qc[a0I];) {
		for (eC = bU.qd[a0I]; eC >= bU.qb[a0I]; eC--)
			if (bX.a6V(a0I, 4 * (eC * e1.e0 + bU.qa[a0I]))) break loop;
		bU.qa[a0I]++
	}
	loop: for (; bU.qa[a0I] < bU.qc[a0I];) {
		for (eC = bU.qd[a0I]; eC >= bU.qb[a0I]; eC--)
			if (bX.a6V(a0I, 4 * (eC * e1.e0 + bU.qc[a0I]))) break loop;
		bU.qc[a0I]--
	}
}

function qT(player, xG) {
	return 0 === dO.lN[player] || dO.lN[player] !== dO.lN[xG]
}

function aDE(player, xG) {
	for (var i, aDF = f6.a0U(player), l = 0; l < aDF; l++)
		if (0 === f6.a0V(player, l))
			if ((i = f6.a0a(player, l)) === ao.l4) {
				if (xG === ao.l4) return !1;
				if (aDG(xG)) return !0
			} else if (xG === ao.l4) {
		if (aDG(i)) return !0
	} else if (aDH(xG, i)) return !0;
	return !1
}

function aDG(player) {
	for (var l, bm, m = bU.f9[player].length, hR = 3; 0 <= hR; hR--)
		for (bm = a0O[hR], l = 0; l < m; l++)
			if (bX.qR(bU.f9[player][l] + bm)) return !0;
	return !1
}

function aDI(player) {
	for (var l, bm, m = bU.f9[player].length, hR = 3; 0 <= hR; hR--)
		for (bm = a0O[hR], l = 0; l < m; l++)
			if (bX.a2m(bU.f9[player][l]) && bX.qR(bU.f9[player][l] + bm)) return !0;
	return !1
}

function aDH(qM, qN) {
	var l, bo, hR, bm, a6, vC = bU.f9[qM].length,
		aDJ = bU.f9[qN].length;
	for (aDJ < vC && (bo = qM, qM = qN, qN = bo, bo = vC, vC = aDJ, 0), hR = 3; 0 <= hR; hR--)
		for (bm = a0O[hR], l = 0; l < vC; l++)
			if (a6 = bU.f9[qM][l] + bm, bX.a0n(a6) && bX.qS(a6) === qN) return !0;
	return !1
}

function aDK(qM, qN) {
	for (var l, bm, a6, vC = bU.f9[qM].length, hR = 3; 0 <= hR; hR--)
		for (bm = a0O[hR], l = 0; l < vC; l++)
			if (bX.a2m(bU.f9[qM][l]) && (a6 = bU.f9[qM][l] + bm, bX.a0n(a6)) && bX.qS(a6) === qN) return !0;
	return !1
}

function wK() {
	var b4 = 0,
		aDL = new Uint16Array(32);

	function remove(q0) {
		var l;
		for (b4 -= 2, l = q0; l < b4; l += 2) aDL[l] = aDL[l + 2], aDL[l + 1] = aDL[l + 3]
	}
	this.k = function() {
		b4 = 0
	}, this.b8 = function() {
		var l, xG, f4;
		if (0 !== b4)
			if (0 === bU.bV[ao.bW] || f6.a7f(ao.bW) === f6.a0U(ao.bW)) b4 = 0;
			else
				for (l = b4 - 2; 0 <= l; l -= 2)(xG = aDL[l]) < ao.l4 && 0 === bU.bV[xG] ? remove(l) : (f4 = aDL[l + 1], (xG >= ao.l4 && aDI(ao.bW) || xG < ao.l4 && aDK(ao.bW, xG)) && (bq.fZ.xF(f4, xG), remove(l)))
	}, this.aDM = function(xG, f4) {
		! function(xG, f4) {
			var l;
			for (l = 0; l < b4; l += 2)
				if (aDL[l] === xG) return aDL[l + 1] = Math.min(aDL[l + 1] + f4, 1023), 1;
			return
		}(xG, f4) && 32 !== b4 && (aDL[b4] = xG, aDL[b4 + 1] = f4, b4 += 2)
	}
}

function vq() {
	var da, df, mR, aDO, aDP, aDQ = -1;

	function aDR() {
		var lQ, eg = df.getContext("2d", {
			alpha: !0
		});
		eg.clearRect(0, 0, da, da), eg.fillStyle = ac.eP, eg.fillRect(0, 0, da, da), 0 === aDO && (eg.fillStyle = ac.lG, eg.fillRect(0, 0, da, da)), eg.fillStyle = ac.c7, eg.fillRect(0, 0, da, 1), eg.fillRect(0, 0, 1, da), eg.fillRect(0, da - 1, da,
			1), eg.fillRect(da - 1, 0, 1, da), lQ = .9 * da / d7.get(0).width, eg.imageSmoothingEnabled = !0, eg.setTransform(lQ, 0, 0, lQ, Math.floor((da - lQ * d7.get(0).width) / 2), Math.floor((da - lQ * d7.get(0).height) / 2)), eg.drawImage(
			d7.get(0), 0, 0), eg.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aDT(i2, i3) {
		if (!bD.bE) return i2 <= da + dY.gap && i3 >= jK.eC ? 0 : -1;
		if (i2 <= 4 * da + dY.gap) {
			if (i3 >= jK.eC) return 0;
			if (i3 >= jK.eC - da - aDP * dY.gap) return 2
		} else if (i2 <= 7 * da + dY.gap && i3 >= jK.eC - da - aDP * dY.gap) return 1;
		return -1
	}
	this.bE = !1, this.k = function() {
		aDO = -1, this.bE = !1, aDP = ae.af.dW() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		da = jK.da, (df = document.createElement("canvas")).width = da, df.height = da, mR = n.o.dc(1, (ae.af.dW() ? .5 : .45) * da), aDR()
	}, this.fW = function() {
		this.bE = !this.bE, this.bE ? (m6.m7.hideCMPButton(), jL.a9C(!1), ao.fX && jL.pR && jL.a9D(!0), this.aDS()) : (aDO = -1, aDR(), !ao.ap || 1 !== ao.aq || ao.bA || ao.fX || ae.af.setState(1)), b6.bJ = !0
	}, this.aDS = function() {
		(ao.ap || ao.fX) && 1 === ao.aq && (jI.lA(!0), ao.bA || setTimeout(function() {
			bH.si()
		}, 0), ae.af.setState(0))
	}, this.eA = function(i2, i3) {
		return 0 <= (aDQ = aDT(i2, i3))
	}, this.eE = function(i2, i3) {
		i2 = aDT(i2, i3);
		i2 !== aDO && (aDO = i2, this.bE || aDR(), b6.bJ = !0)
	}, this.a8m = function(i2, i3) {
		var a4A = aDT(i2, i3);
		if (-1 === a4A) return !1;
		if (aDQ !== a4A) return !1;
		if (this.bE) {
			if (ao.lh) return 0 <= a4A && jL.a9C(!1), !ao.fX;
			if (0 === a4A) ao.b2();
			else if (1 === a4A) this.fW();
			else if (2 === a4A) aO.aQ(1, 0);
			else {
				if (! function() {
						if (ao.ap || 1 !== ao.aq || ao.fX || fV.hY) return 1;
						bD.fW()
					}()) return !1;
				lb.a90(i2, i3) || gO.ix(i2, i3)
			}
			return !0
		}
		return 0 === a4A && (this.fW(), !0)
	}, this.eK = function() {
		var dZ;
		this.bE ? (dZ = Math.floor(5.5 * da), eL.setTransform(1, 0, 0, 1, dY.gap, jK.eC), eL.fillStyle = ac.eP, eL.fillRect(0, 0, dZ, da), 0 === aDO ? (eL.fillStyle = ac.lG, eL.fillRect(0, 0, 4 * da, da)) : 1 === aDO && (eL.fillStyle = ac.lG, eL
				.fillRect(4 * da, 0, Math.floor(1.5 * da), da)), eL.fillStyle = ac.c7, eL.fillRect(0, 0, dZ, 1), eL.fillRect(0, 0, 1, da), eL.fillRect(4 * da, 0, 1, da), eL.fillRect(0, da - 1, dZ, 1), eL.fillRect(dZ - 1, 0, 1, da), eL.font =
			mR, n.o.textBaseline(eL, 1), n.o.textAlign(eL, 1), eL.fillText(aS.aZ[79], 2 * da, .54 * da), dZ = .4 * da, bD.eb(dY.gap + 4 * da + (1.5 * da - dZ) / 2, jK.eC + .3 * da, dZ), dZ = 1, eL.setTransform(1, 0, 0, 1, dY.gap, jK.eC - dZ *
				aDP * dY.gap - dZ * da), eL.fillStyle = ac.eP, eL.fillRect(0, 0, 4 * da, da), aDO === dZ + 1 && (eL.fillStyle = ac.lG, eL.fillRect(0, 0, 4 * da, da)), eL.fillStyle = ac.c7, eL.fillRect(0, 0, 4 * da, 1), eL.fillRect(0, 0, 1,
				da), eL.fillRect(4 * da, 0, 1, da), eL.fillRect(0, da - 1, 4 * da, 1), eL.fillText(aS.aZ[79 + dZ], 2 * da, .54 * da), eL.setTransform(1, 0, 0, 1, 0, 0)) : eL.drawImage(df, dY.gap, jK.eC)
	}, this.fY = function(player) {
		return 0 !== bU.bV[player] && 2 !== ao.aq && bX.bY(player)
	}, this.eb = function(eB, eC, m) {
		eL.setTransform(1, 0, 0, 1, eB, eC), eL.lineWidth = dY.iA, eL.strokeStyle = ac.c7, eL.beginPath(), eL.moveTo(0, 0), eL.lineTo(m, m), eL.moveTo(0, m), eL.lineTo(m, 0), eL.stroke()
	}
}

function vx() {
	var a5, yI, aDY, a2d, gap, aDZ, aDa, aDb, aDc, aDd, mR, aDe, aDf, a1s, a2L, xv, aDg, aDh;

	function aDk() {
		a2d = Math.floor(.2 * (ae.af.dW() ? .07 : .035) * b9.dX), a2d = db(ae.af.dW() ? 3 : 1, a2d);
		var aDm = b9.dZ / (a5.length + gap);
		a2d = a2d < aDm ? aDm : a2d, a2L = Math.floor((1 - gap) * a2d), yI = 0, aDn()
	}

	function aDn() {
		yI = (yI = yI < -20 ? -20 : yI) > (a5.length - 15) * a2d ? (a5.length - 15) * a2d : yI, aDa = Math.floor(yI / a2d), aDb = (aDb = aDa + Math.floor(b9.dZ / a2d)) > a5.length - 1 ? a5.length - 1 : aDb, aDa = (aDa = aDb < aDa ? aDb : aDa) < 0 ?
			0 : aDa;
		var mr = aDb;
		aDZ = aDY / a5[mr];
		for (var l = aDb - 1; aDa <= l; l--) a5[l] > a5[mr] && (mr = l, aDZ = aDY / Math.pow(a5[l], a1s))
	}

	function aDp(eB) {
		eB = Math.floor((yI + b9.dZ - eB - gap * a2d) / a2d);
		return (eB = eB < -1 ? -1 : -1 === eB ? 0 : eB > a5.length - 1 ? -1 : eB) !== aDc && (aDc = eB, -1 === xv && 0 === aDc && jG.aDi && (xv = setInterval(aDq, 100)), 1)
	}

	function aDr(l) {
		var mO = Math.floor(aDZ * Math.pow(a5[l], a1s));
		eL.fillRect(yI + b9.dZ - (l + 1) * a2d, b9.da - mO, a2L, mO)
	}

	function aDq() {
		var a6;
		0 !== (aDc = 8 === aW.aX() ? -1 : aDc) ? (aDg = (new Date).getTime(), clearInterval(xv), xv = -1) : (a6 = a5[1] / 864e3, -1 !== aDg && (a6 += ((new Date).getTime() - aDg) * a5[1] / 864e5, aDg = -1), 0 < a6 && (a5[0] += Math.floor(a6), b6
			.bJ = !0))
	}
	this.aDi = !1, this.k = function() {
		aDg = xv = -1, aDc = -(a1s = 1), this.a9u = !1, aDf = 0, aDe = new Date, yI = 0, gap = .3, (aDh = []).push({
			dI: "Plateau A",
			m: 0,
			i: 57
		}), aDh.push({
			dI: "Max A",
			m: 1,
			i: 1
		}), aDh.push({
			dI: "Black Friday",
			m: 15,
			i: 15
		}), aDh.push({
			dI: "Max B",
			m: 19,
			i: 19
		}), aDh.push({
			dI: "Max C",
			m: 44,
			i: 44
		}), aDh.push({
			dI: "First Android Version",
			m: 58,
			i: 58
		}), aDh.push({
			dI: "Max D",
			m: 67,
			i: 67
		}), aDh.push({
			dI: "The iFrame Explosion",
			m: 98,
			i: 99
		}), aDh.push({
			dI: "The 155-Day Uptrend",
			m: 58,
			i: 213
		}), aDh.push({
			dI: "Max E",
			m: 213,
			i: 213
		}), aDh.push({
			dI: "Plateau B",
			m: 214,
			i: 259
		}), aDh.push({
			dI: "Turbulent Times",
			m: 260,
			i: 344
		}), aDh.push({
			dI: "Max F",
			m: 262,
			i: 262
		}), aDh.push({
			dI: "Max G",
			m: 282,
			i: 282
		}), aDh.push({
			dI: "Max H",
			m: 333,
			i: 333
		}), aDh.push({
			dI: "The 19-Day Downtrend",
			m: 283,
			i: 301
		}), aDh.push({
			dI: "Plateau C",
			m: 345,
			i: 385
		}), aDh.push({
			dI: "The Alliance Ascent",
			m: 386,
			i: 395
		}), aDh.push({
			dI: "Max I",
			m: 395,
			i: 395
		}), aDh.push({
			dI: "First iOS Version",
			m: 411,
			i: 411
		}), aDh.push({
			dI: "Plateau D",
			m: 396,
			i: 453
		}), aDh.push({
			dI: "The TikTok Revolution",
			m: 454,
			i: 470
		}), aDh.push({
			dI: "Max J",
			m: 456,
			i: 456
		}), aDh.push({
			dI: "Max K",
			m: 472,
			i: 472
		}), aDh.push({
			dI: "Max L",
			m: 478,
			i: 478
		}), aDh.push({
			dI: "YT Drew",
			m: 471,
			i: 485
		}), aDh.push({
			dI: "Plateau E",
			m: 485,
			i: 600
		}), aDh.push({
			dI: "Uptrend A",
			m: 600,
			i: 613
		}), aDh.push({
			dI: "Max M",
			m: 613,
			i: 613
		}), aDh.push({
			dI: "Downtrend A",
			m: 614,
			i: 635
		}), aDh.push({
			dI: "Plateau F",
			m: 636,
			i: 737
		}), aDh.push({
			dI: "End of Record",
			m: 738,
			i: 738
		}), a5 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
			268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535,
			228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444,
			195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919,
			202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004,
			178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937,
			161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946,
			243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019,
			49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426,
			19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047,
			18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741,
			26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011,
			15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393,
			12931e3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834,
			20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238,
			18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206,
			15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460,
			8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791,
			8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076,
			9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540,
			6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544,
			3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700,
			991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472,
			252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048,
			51372, 61916, 43236, 55172, 26776, 47e3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444,
			19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992,
			20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176
		], this.resize()
	}, this.resize = function() {
		aDY = Math.floor(.15 * b9.da), aDd = (aDd = Math.floor((ae.af.dW() ? .018 : .0137) * b9.dX)) < 2 ? 2 : aDd, mR = n.o.dc(1, aDd), aDk()
	}, this.a3V = function(aDl) {
		var l;
		for (this.aDi = !0, l = 0; l < aDl.length; l++) a5.unshift(aDl[l]);
		aDk(), b6.bJ = !0
	}, this.r7 = function() {
		aDn()
	}, this.eE = function(eB, eC) {
		eC > b9.da - .6 * aDY ? this.a9u ? eB !== aDf && (yI += eB - aDf, aDf = eB, aDn(), aDp(eB), this.a9u = -1 !== aDc, b6.bJ = !0) : aDp(eB) && (b6.bJ = !0) : this.rD()
	}, this.rD = function() {
		-1 !== aDc && (this.a9u = !1, aDc = -1, b6.bJ = !0)
	}, this.lg = function(eB, deltaY) {
		-1 !== aDc && (yI += Math.floor(deltaY), aDn(), aDp(eB), b6.bJ = !0)
	}, this.eA = function(eB, eC) {
		this.eE(eB, eC), -1 !== aDc && (aDf = eB, this.a9u = !0)
	}, this.le = function() {
		-1 !== aDc && (this.a9u = !1)
	}, this.eK = function() {
		eL.fillStyle = ac.a1t;
		for (var aDt, month, bo, eo, aDw, aDx, eH, aDy, aDz, l = aDb; aDa <= l; l--) aDr(l);
		this.aDi && 0 === aDa && (eL.fillStyle = ac.a11, aDr(0)), -1 !== aDc && (eL.fillStyle = ac.em, aDr(aDc)), -1 !== aDc && (eL.font = mR, n.o.textBaseline(eL, 2), (bo = new Date).setTime(aDe.getTime() - 1e3 * aDc * 60 * 60 * 24), month =
			"month", aDt = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(bo), aDt = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(bo)), aDt = aDt + ", " + bo.getUTCDate() + " " + month + " " + bo.getFullYear(), month = 1 === a5[aDc] ? " second played" : " seconds played", month = n.eU.eV(a5[aDc]) + month, bo = Math.floor(eL.measureText(aDt).width),
			eo = Math.floor(eL.measureText(month).width), aDw = Math.floor(.5 * (bo + aDd)), aDx = (aDx = yI + b9.dZ - (aDc + 1) * a2d) < aDw ? aDw : aDx > b9.dZ - aDw ? b9.dZ - aDw : aDx, eH = b9.da - Math.floor(aDZ * Math.pow(a5[aDc],
			a1s)), aDy = Math.floor(1.1 * aDd), aDz = eH > b9.da - aDy ? b9.da - aDy : eH, eL.fillStyle = ac.c8, eL.fillRect(b9.dZ - eo - aDd, aDz - aDy, eo + aDd, aDy), eL.fillRect(aDx - aDw, b9.da - aDy, bo + aDd, aDy), eL.fillStyle = ac
			.c7, n.o.textAlign(eL, 2), eL.fillText(month, Math.floor(b9.dZ - .5 * aDd), aDz),
			function(eH, aDy) {
				for (var en, a4A = -1, b4 = a5.length - aDc - 1, l = aDh.length - 1; 0 <= l; l--) b4 >= aDh[l].m && b4 <= aDh[l].i && (-1 === a4A || aDh[l].i - aDh[l].m < aDh[a4A].i - aDh[a4A].m) && (a4A = l); - 1 !== a4A && (en = Math.floor(
					eL.measureText(aDh[a4A].dI).width), eL.fillStyle = ac.c8, eL.fillRect(b9.dZ - en - aDd, eH, en + aDd, aDy), eL.fillStyle = ac.c7, eL.fillText(aDh[a4A].dI, Math.floor(b9.dZ - .5 * aDd), eH + aDy))
			}(aDz - 2 * aDy, aDy), n.o.textAlign(eL, 1), eL.fillText(aDt, aDx, b9.da), eL.strokeStyle = ac.aCI, eL.lineWidth = 1, eL.beginPath(), eL.moveTo(0, eH), eL.lineTo(b9.dZ, eH), eL.closePath(), eL.stroke())
	}
}

function vr() {
	var a6z, da, eT, aE1, aE2, aE3, aE4, aE5, aE6;

	function a17() {
		return jK.a1I(ar.a1J()) ? gS.hY ? jK.eC - jK.da - 2 * eT : jK.eC - eT : jL.a1I(ar.a1K()) ? gS.hY ? jL.a17() - jK.da - 2 * eT : jL.a17() - eT : gS.hY ? b9.da - jK.da - (vb.a1L() + 1) * eT : b9.da - vb.a1L() * dY.gap
	}

	function aEB(bo, x, id, a6, aEE, aEF, aEG, aEH, aEI) {
		var l, eg, dH, tj, a5, aEN = void 0 !== aEI,
			dZ = Math.floor(ei.measureText(x, ar.mR) + 1.5 * aE1 + (aEN ? da : 1.5 * aE1));
		if (b6.bJ = !0, dZ + eT > b9.dZ && !aEN && 50 !== id && 20 < x.length) aEB(bo, (a5 = n.eU.a7q(x))[0], id, a6, aEE, aEF, aEG, aEH, aEI), aEB(bo, a5[1], id, a6, aEE, aEF, aEG, aEH, aEI);
		else if (a5 = dZ + (50 === id ? aE2 : 0), (dH = document.createElement("canvas")).width = dZ, dH.height = da, (eg = dH.getContext("2d", {
				alpha: !0
			})).font = ar.mR, n.o.textBaseline(eg, 1), n.o.textAlign(eg, 0), eg.clearRect(0, 0, dZ, da), eg.fillStyle = aEF, eg.fillRect(0, 0, dZ, da), eg.fillStyle = aEE, eg.fillText(x, Math.floor(1.5 * aE1), Math.floor(da / 2)), aEN && (eg
				.imageSmoothingEnabled = !0, d9.d.dG(aEI, eg, dZ - da, 0, da)), 0 === (tj = {
				b5: bo,
				x: x,
				id: id,
				player: a6,
				df: dH,
				aEE: aEE,
				aEF: aEF,
				dZ: dZ,
				aEK: a5,
				aEG: aEG,
				aEH: aEH,
				aEI: aEI
			}).b5 || 0 < a6z.length && 0 < a6z[0].b5) a6z.unshift(tj);
		else {
			for (l = 1; l < a6z.length; l++)
				if (0 < a6z[l].b5) return void a6z.splice(l, 0, tj);
			a6z.push(tj)
		}
	}

	function aED(aI, n9, a8) {
		return "rgb(" + aI + "," + n9 + "," + a8 + ")"
	}

	function aEO(id, dI) {
		for (var m = a6z.length, l = 0; l < m; l++) a6z[l].id === id && dI-- <= 0 && (a6z.splice(l, 1), l--, m--)
	}

	function aEP(id, player) {
		for (var aEY = !1, l = a6z.length - 1; 0 <= l; l--) a6z[l].id !== id || player !== ao.l4 && a6z[l].player !== player || (a6z.splice(l, 1), aEY = !0);
		return aEY
	}

	function aEc(x) {
		aEB(340, x, 6, 0, aED(215, 245, 255), ac.c8, -1, !1)
	}
	this.ub = "", this.k = function() {
		var self;
		aE5 = 0, aE4 = ae.af.dW() ? 7 : 12, aE3 = {
			cE: [0, 0, 0],
			aE7: [0, 0, 0],
			aCp: [220, 180, 180],
			nQ: [0, 0, 0],
			a2: [0, 0, 0]
		}, a6z = [], this.resize(), ao.bA && this.sW(0, 18), aEc(aS.aT(37, [e1.iM.iO[e1.dh].name])), aEc(aS.aT(38, [e1.e0 - 2, e1.e2 - 2])), aEc(aS.aT(39, [iW.a14], {
			a9k: [0]
		})), iW.a14 !== iW.aEd && aEc(aS.aT(40, [iW.aEd, iW.aEd / iW.a14], {
			a9k: [0],
			a9l: [1]
		})), 0 < iW.aEe && aEc(aS.aT(41, [iW.aEe, iW.aEe / iW.a14], {
			a9k: [0],
			a9l: [1]
		})), 0 < iW.aEf && aEc(aS.aT(42, [iW.aEf, iW.aEf / iW.a14], {
			a9k: [0],
			a9l: [1]
		})), 10 === ao.bi && aEB(120, aS.aT(43), 6, 0, aED(235, 255, 120), ac.c8, -1, !1), 0 !== (self = this).ub.length && (aEB(200, self.ub, 0, 0, ac.c7, ac.c8, -1, !1), self.ub = ""), this.aEA()
	}, this.aEA = function() {
		var l, m;
		if (oR.hD)
			for (m = oR.iM.aEC.length, l = 0; l < m; l++) aEB(400, oR.iM.aEC[l], 6, 0, aED(255, 255, 255), ac.c8, -1, !1)
	}, this.resize = function() {
		var a7S, l;
		if (da = (da = Math.floor((ae.af.dW() ? .031 : .0249) * b9.dX)) < 10 ? 10 : da, this.fontSize = Math.floor(2 * da / 3), this.mR = n.o.dc(1, this.fontSize), eT = dY.gap, aE1 = Math.floor(da / 5), 0 < a6z.length)
			for (a7S = a6z, a6z = [], l = a7S.length - 1; 0 <= l; l--) aEB(a7S[l].b5, a7S[l].x, a7S[l].id, a7S[l].player, a7S[l].aEE, a7S[l].aEF, a7S[l].aEG, a7S[l].aEH, a7S[l].aEI);
		this.aEJ()
	}, this.aEJ = function() {
		aE6 = document.createElement("canvas");
		var x = aS.aT(0),
			eg = (aE2 = ei.measureText(x, this.mR) + 5 * aE1, aE6.height = da, aE6.width = aE2, aE6.getContext("2d", {
				alpha: !0
			}));
		eg.font = this.mR, n.o.textBaseline(eg, 1), n.o.textAlign(eg, 1), eg.clearRect(0, 0, aE2, da), eg.fillStyle = ac.ah, eg.fillRect(0, 0, aE2, da), eg.fillStyle = ac.c7, eg.fillText(x, Math.floor(aE2 / 2), Math.floor(da / 2))
	}, this.a1J = function() {
		var m;
		return gS.hY ? gS.dZ : 0 === (m = a6z.length) ? 0 : 1 === m ? a6z[0].aEK : db(a6z[0].aEK, a6z[1].aEK)
	}, this.a1K = function() {
		var m = a6z.length;
		return gS.hY ? m ? db(gS.dZ, a6z[0].aEK) : gS.dZ : 0 === m ? 0 : 1 === m ? a6z[0].aEK : 2 === m ? db(a6z[0].aEK, a6z[1].aEK) : db(db(a6z[0].aEK, a6z[1].aEK), a6z[2].aEK)
	}, this.eA = function(eB, eC) {
		for (var a9y, aEL = a17(), l = a6z.length - 1; 0 <= l; l--)
			if ((a9y = aEL - (l + 1) * da) <= eC && eC < a9y + da) return 50 === a6z[l].id ? eB >= b9.dZ - aE2 - eT - a6z[l].dZ && (eB >= b9.dZ - aE2 - eT ? bq.br.zt(a6z[l].player) : io.lf(a6z[l].player, 800, !1, 0), !0) : eB >= b9.dZ - a6z[l]
				.dZ - eT && (736 === a6z[l].id ? window.open("https://" + a6z[l].x, "_blank") : a6z[l].aEH && (io.lf(a6z[l].player, 800, !1, 0), 0 <= a6z[l].aEG) && (a9y = a6z[l].aEG, a6z[l].aEG = a6z[l].player, a6z[l].player = a9y), !0);
		return !1
	}, this.c6 = function(bo, x, id, a6, aEE, aEF, aEG, aEH, aEI) {
		aEB(bo, x, id, a6, aEE, aEF, aEG, aEH, aEI)
	}, this.aEM = function(aw) {
		aEB(300, aw, 252, 0, ac.c7, ac.c8, -1, !1)
	}, this.aBK = function(id) {
		for (var l = a6z.length - 1; 0 <= l; l--) a6z[l].id === id && (a6z[l].b5 = 1)
	}, this.sW = function(player, id) {
		0 === id ? (cd.mU[player < ao.cW ? 4 : 3]++, ei.xE(player, 0), aEO(423, 0), aEB(160, aS.aT(1, [bU.l6[player]]), 423, player, "rgb(10,220,10)", ac.c8, -1, !1)) : 1 === id ? (aEP(50, ao.l4), ei.xE(player, 1), aEB(360, aS.aT(2, [bU.l6[
			player]]), 0, player, ac.aCQ, ac.c8, -1, !0), io.lf(player, 2700, !1, 0)) : 2 === id ? (ei.xE(player, 2), aEB(0, aS.aT(3), 0, player, "rgb(10,255,255)", ac.c8, -1, !0), io.lf(player, 2700, !1, 0)) : 3 === id ? (ei.xE(player, 2),
			aEB(0, aS.aT(4, [bU.l6[player]]), 0, player, ac.c7, ac.c8, -1, !0), io.lf(player, 2700, !1, 0)) : 4 === id ? this.aEQ(1, player, player) : 5 === id ? 2 !== bU.ev[player] && bX.bY(ao.bW) && (function(id, rc) {
			var l, aEW = 0,
				m = a6z.length;
			for (l = 0; l < m; l++)
				if (a6z[l].id === id && rc <= ++aEW) return a6z.splice(l, 1)
		}(1, 5), cf.f0(player) ? aEB(180, aS.aT(5, [bU.l6[player]]), 1, player, aED(255, 200, 180), ac.c8, -1, !0) : (aEO(573, 0), aEB(180, aS.aT(6, [bU.l6[player]]), 573, player, ac.aCQ, ac.c8, -1, !0))) : 18 === id ? aEB(255, aS.aT(7), 18,
			0, ac.c7, ac.c8, -1, !1) : 21 === id ? aEB(220, aS.aT(8), id, 0, ac.c7, ac.c8, -1, !1) : 22 === id ? this.aEQ(2, player, player) : 59 === id && aEB(0, aS.aT(9), id, 0, ac.aCU, ac.c8, 0, !1)
	}, this.at = function(aw) {
		aEB(200, aS.aT(10, [aw]), 94, 0, ac.c7, ac.aCO, -1, !1)
	}, this.sc = function(sZ) {
		if (ao.bW === sZ && !ao.ap)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			aEB(0, "Your Win Count is now " + wins_counter, 3, sZ, ac.c7, ac.c8, -1, !0);
		ei.xE(sZ, 2), ao.cW < 100 ? aEB(0, aS.aT(4, [bU.l6[sZ]]), 3, sZ, ac.c7, ac.c8, -1, !0) : aEB(0, aS.aT(12, [bU.l6[sZ]]), 3, sZ, ac.c7, ac.c8, -1, !0), io.lf(sZ, 2700, !1, 0)
	}, this.aES = function(ge) {
		var a1n = "(" + p2.u6(ge >> 2) + ", " + p2.u8(ge >> 2) + ")",
			aEH = !1,
			player = 0;
		bX.qk(ge) ? bX.qR(ge) ? a1n = aS.aT(13, [a1n]) : (player = bX.qS(ge), a1n = aS.aT(14, [n.eg.eh(bU.l7[player], n.o.dc(0, 10), 150), n.eU.eV(bU.f8[player]), n.eU.eV(bU.bp[player]), a1n]), aEH = !0) : a1n = bX.a6a(ge) ? aS.aT(15, [a1n]) : aS
			.aT(16, [a1n]), b6.bJ = !0, aEO(55, 0), aEB(220, a1n, 55, player, ac.c7, ac.c8, -1, aEH)
	}, this.aET = function(aEU) {
		var mr = fA.al,
			player = mr.s5[aEU] >> 3;
		b6.bJ = !0, aEO(55, 0), aEB(220, aS.aT(17, [bU.l6[player], mr.s6[aEU]], {
			a9k: [1]
		}), 55, player, ac.c7, ac.c8, -1, !0)
	}, this.i8 = function(gz, o6, dE) {
		gz === ao.bW ? aEB(175, aS.aT(18, [bU.l6[o6]]), 1001, o6, aED(200, 255, 210), ac.c8, -1, !0, dE) : this.aEV(gz, dE)
	}, this.aEV = function(gz, dE) {
		aEO(1e3, 0), aEB(175, aS.aT(19, [bU.l6[gz]]), 1e3, gz, ac.c7, "rgba(5,60,25,0.9)", -1, !0, dE)
	}, this.sb = function() {
		var aw;
		ao.ba ? (aw = aS.aT(20), ei.qn(aS.aT(21), 2, 1, 12), aEB(0, aw, 40, 0, "rgb(10,220,10)", ac.c8, -1, !1)) : (aw = aS.aT(22), ei.qn(aS.aT(23), 2, 0, 16), aEB(0, aw, 41, 0, ac.c7, ac.c8, -1, !1)), io.sX(2700)
	}, this.aA2 = function(cE) {
		aEB(300, cE[0].name + " [" + ao.oo.aA6(cE[0].us) + "] vs " + cE[1].name + " [" + ao.oo.aA6(cE[1].us) + "]", 65, 0, ac.ep, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a9R = function(aw) {
		aEB(200, aw, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a1C = function(a0y) {
		aEB(0, aS.aT(a0y ? 24 : 129), 247, 0, ac.aCT, ac.c8, -1, !1)
	}, this.aA8 = function(cE, aA5, aA7, aEX) {
		aEB(0, cE[0].name + ": " + ao.oo.aA6(cE[0].us) + " -> " + aA5, 66, 0, ac.c7, aEX[0], -1, !1), aEB(0, cE[1].name + ": " + ao.oo.aA6(cE[1].us) + " -> " + aA7, 66, 1, ac.c7, aEX[1], -1, !1)
	}, this.zu = function(player, id) {
		0 === id ? aEP(50, player) ? (aEB(128, aS.aT(25, [bU.l6[player]]), 52, player, aED(180, 255, 180), ac.c8, -1, !0), cf.xZ(player, 2, 255)) : aEB(384, aS.aT(26, [bU.l6[player]]), 51, player, aED(210, 210, 255), ac.c8, -1, !0) : aEP(51,
			player) ? (aEB(128, aS.aT(27, [bU.l6[player]]), 52, player, ac.c7, "rgba(60,120,10,0.9)", -1, !0), cf.xZ(player, 2, 255)) : (aEB(384, aS.aT(28, [bU.l6[player]]), 50, player, ac.c7, "rgba(90,90,90,0.9)", -1, !0), cf.xZ(player, 2,
			96))
	}, this.zy = function(cE, target) {
		var color = aED(210, 255, 210);
		1 < cE.length ? aEB(230, aS.aT(29, [cE.length, bU.l6[target]]), 66, target, color, ac.c8, -1, !0) : aEB(230, aS.aT(30, [bU.l6[cE[0]], bU.l6[target]]), 66, cE[0], color, ac.c8, target, !0)
	}, this.a3n = function(player, target) {
		aEB(230, aS.aT(31, [bU.l6[player], bU.l6[target]]), 66, player, ac.c7, "rgba(75,65,5,0.9)", target, !0)
	}, this.sf = function(id, player) {
		aEP(id, player)
	}, this.a9c = function() {
		var b4;
		100 <= bU.f8[ao.bW] || (-1 === (b4 = function(id) {
			for (var l = a6z.length - 1; 0 <= l; l--)
				if (a6z[l].id === id) return l;
			return -1
		}(143)) ? aEB(80, aS.aT(32), 143, 0, ac.c7, ac.c8, -1, !1) : a6z[b4].b5 = 80)
	}, this.ce = function(aEa, aEb, player) {
		2 !== bU.ev[ao.bW] && (aEB(200, aS.aT(33, [aEa, bU.l6[player]], {
			a9k: [0]
		}), 30, player, "rgb(190,255,190)", ac.c8, -1, !0), aEb) && aEB(30, aS.aT(34, [aEb], {
			a9k: [0]
		}), 30, 0, ac.c7, ac.c8, -1, !1)
	}, this.a9K = function(aEa, player) {
		2 !== bU.ev[ao.bW] && (aEO(31, 0), 2 === bU.ev[player] || player >= ao.cW ? aEB(150, aS.aT(36, [bU.l6[player], aEa], {
			a9k: [1]
		}), 31, player, ac.ep, "rgba(205,205,205,0.9)", -1, !0) : aEB(150, aS.aT(35, [bU.l6[player], aEa], {
			a9k: [1]
		}), 31, player, ac.ep, "rgba(205,255,205,0.9)", -1, !0))
	}, this.se = function(j0) {
		for (var a2 = b6.f2(), l = 2; 0 <= l; l--) 0 < aE3.nQ[l] && (j0 || aE3.a2[l] < a2 - 220) && this.aEg(l)
	}, this.aEg = function(id) {
		var x, m = aE3.nQ[id],
			player = aE3.cE[id];
		aE3.nQ[id] = 0, 1 === m ? (x = 0 === id ? aS.aT(47, [bU.l6[player], bU.l6[aE3.aE7[0]]]) : aS.aT(47 + id, [bU.l6[player]]), aEO(7, 0), aEB(aE3.aCp[id], x, 7, aE3.aE7[id], ac.c7, ac.c8, -1, !0)) : 2 <= m && (x = aS.aT(44 + id, [bU.l6[
			player], m - 1]), aEO(7, 0), aEB(aE3.aCp[id], x, 7, player, ac.c7, ac.c8, -1, !1))
	}, this.aEQ = function(id, aEh, aEG) {
		var a2 = b6.f2(),
			m = aE3.nQ[id] + 1;
		aE3.nQ[id]++, aE3.cE[id] = aEh, aE3.aE7[id] = aEG, 1 === m && (aE3.a2[id] = a2), (1 === m && (ao.mz < 32 || 2 === ao.aq) || 1 < m && (aE3.a2[id] < a2 - 140 || 2 === ao.aq)) && this.aEg(id)
	}, this.b8 = function() {
		for (var jD = (jD = a6z.length - aE4) <= 1 ? 1 : jD * jD, l = a6z.length - 1; 0 <= l; l--) 0 < a6z[l].b5 && (a6z[l].b5 -= jD, a6z[l].b5 <= 0) && (b6.bJ = !0, a6z.splice(l, 1));
		! function() {
			var dI, l;
			if (128 !== aE5 && !(++aE5 < 128))
				for (dI = 5, l = mc - 1; 0 <= l; l--) 1 === bU.ev[n5[l]] && 0 < dI-- && aEB(240, aS.aT(50, [bU.l6[n5[l]]]), 1, n5[l], ac.ep, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.se(!1)
	}, this.eK = function() {
		for (var a1Y, eC = a17(), l = a6z.length - 1; 0 <= l; l--) a1Y = eC - (l + 1) * da, 50 === a6z[l].id ? (eL.drawImage(a6z[l].df, b9.dZ - a6z[l].dZ - aE2 - eT, a1Y), eL.drawImage(aE6, b9.dZ - aE2 - eT, a1Y)) : eL.drawImage(a6z[l].df, b9
			.dZ - a6z[l].dZ - eT, a1Y)
	}
}

function wb() {
	this.m7 = new xl, this.pP = new aEj, this.k = function() {
		ae.af.mJ()
	}
}

function td() {
	this.zq = function(aC) {
		return [aC >> 12 & 63, aC >> 6 & 63, 63 & aC]
	}, this.aEk = function(aC) {
		for (var a5 = this.zq(aC), l = 0; l < 3; l++) a5[l] = ~~(4.05 * a5[l]);
		return a5
	}, this.aEl = function(aC) {
		aC = this.aEk(aC);
		return n.color.qw(aC[0], aC[1], aC[2])
	}, this.aEm = function(a5) {
		for (var l = 0; l < 3; l++) a5[l] = ~~(a5[l] / 4.04);
		return (a5[0] << 12) + (a5[1] << 6) + a5[2]
	}, this.qw = function(aI, n9, a8) {
		return "rgb(" + aI + "," + n9 + "," + a8 + ")"
	}, this.a75 = function(aI, n9, a8, v) {
		return "rgba(" + aI + "," + n9 + "," + a8 + "," + v.toFixed(3) + ")"
	}, this.aEn = function(a2) {
		for (var a5 = a2.split("(")[1].split(","), a57 = (a5.length, cb.a57), l = 0; l < 3; l++) a57[l] = parseInt(a5[l]);
		return a57
	}, this.aEo = function(aEp, hR) {
		for (var a5 = aEp.slice(aEp.indexOf("(") + 1, aEp.indexOf(")")).split(","), a57 = cb.a57, l = 0; l < 3; l++) a57[l] = hS.i7(parseInt(a5[l].trim(), 10) + hR, 0, 255);
		return 3 === a5.length ? this.qw(a57[0], a57[1], a57[2]) : this.a75(a57[0], a57[1], a57[2], parseFloat(a5[3].trim()))
	}, this.aEq = function(a5) {
		for (var x = "#", l = 0; l < 3; l++) {
			var aI = a5[l].toString(16);
			x += 1 === aI.length ? "0" + aI : aI
		}
		return x
	}, this.aEr = function(x) {
		var aI, n9;
		return x.length < 7 ? ac.ep : (aI = parseInt(x.slice(1, 3), 16), n9 = parseInt(x.slice(3, 5), 16), x = parseInt(x.slice(5, 7), 16), this.qw(aI, n9, x))
	}
}

function wi() {
	var aEs = [0, 0],
		aEt = [0, 0];

	function aEv(b4) {
		return 3 !== aEs[b4] && 1 !== aEt[b4] && (aEt[b4] = 1, aEs[b4]++, by.iH.dd(119, (aEs[0] << 2) + aEs[1]), 1)
	}
	this.k = function() {
		var aC = by.bz.data[119].value;
		aEs[0] = aC >> 2, aEs[1] = 3 & aC
	}, this.aEu = function() {
		aEv(0) && ar.aEM(aS.aT(130))
	}, this.aEw = function() {
		aEv(1) && ar.aEM(aS.aT(131))
	}
}

function aEx() {
	this.eK = function() {
		if (0 !== p9.al.es && (eL.globalAlpha = Math.min(p9.al.es / 580, 1), eL.drawImage(p9.al.aF0, 1 + iu.a2G(), 1 + iu.a17()), eL.globalAlpha = 1, ao.bA)) {
			for (var eG = sG / sF, eH = sH / sF, ih = (b9.dZ + sG) / sF, eZ = (b9.da + sH) / sF, bm = p9.al.aF1 * sF, aF2 = p9.al.aF2, l = ao.cW - 1; 0 <= l; l--) ! function(l, bm, eG, eH, ih, eZ, aF2) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[l];
				if (highlight) bm *= 2;
				0 === bU.bV[l] || 0 === bU.bp[l] || (ih = b9.dZ * ((bU.qa[l] + bU.qc[l] + 1) / 2 - eG) / (ih - eG) - .5 * bm, eG = b9.da * ((bU.qb[l] + bU.qd[l] + 1) / 2 - eH) / (eZ - eH) - .5 * bm, ih > b9.dZ) || eG > b9.da || ih < -bm ||
					eG < -bm || (eL.setTransform(highlight ? sF * 2 : sF, 0, 0, highlight ? sF * 2 : sF, ih, eG), eL.drawImage(aF2[ao.fC ? dO.lN[l] : 1], 0, 0))
			}(l, bm, eG, eH, ih, eZ, aF2);
			eL.setTransform(sF, 0, 0, sF, 0, 0)
		}
	}
}

function vw() {
	var aF4, aF5, dZ, eB, eC, aF6, aF7;
	this.k = function() {
		aF4 = new Array(2), aF5 = new Array(2), this.a94 = !1, aF7 = aF6 = sH = sG = 0, sF = 1, this.resize()
	}, this.resize = function() {
		dZ = (dZ = Math.floor((ae.af.dW() ? .072 : .0502) * b9.dX)) < 8 ? 8 : dZ;
		for (var l = 1; 0 <= l; l--) aF4[l] = document.createElement("canvas"), aF4[l].width = dZ, aF4[l].height = dZ, aF5[l] = aF4[l].getContext("2d", {
			alpha: !0
		});
		this.mh(),
			function() {
				for (var aFM = Math.floor(1 + dZ / 20), l = 1; 0 <= l; l--) aF5[l].clearRect(0, 0, dZ, dZ), aF5[l].fillStyle = ac.ed, aF5[l].beginPath(), aF5[l].arc(dZ / 2, dZ / 2, dZ / 2 - aFM, 0, 2 * Math.PI), aF5[l].fill(), aF5[l].lineWidth =
					aFM, aF5[l].fillStyle = ac.c7, aF5[l].strokeStyle = ac.c7, aF5[l].beginPath(), aF5[l].arc(dZ / 2, dZ / 2, dZ / 2 - aFM, 0, 2 * Math.PI), aF5[l].stroke(), a16(aF5[l], 0, 0, dZ, aFM, .3, 0 === l)
			}()
	}, this.a2G = function() {
		return -sG / sF
	}, this.a17 = function() {
		return -sH / sF
	}, this.aCw = function(aFB, is) {
		sG = sF * aFB - is
	}, this.aCx = function(aFC, it) {
		sH = sF * aFC - it
	}, this.eA = function(aFA, a9y) {
		return ao.lh || ! function(aFA, a9y) {
			return Math.pow(aFA - (eB + dZ / 2), 2) + Math.pow(a9y - (eC + dZ / 2), 2) < dZ * dZ / 4 || Math.pow(aFA - (eB + dZ / 2), 2) + Math.pow(a9y - (eC + 2 * dZ), 2) < dZ * dZ / 4
		}(aFA, a9y) || by.bz.data[8].value ? (io.hP() && (this.a94 = !0, aF6 = aFA, aF7 = a9y), !1) : a9y < eC + 1.25 * dZ ? this.lg(Math.floor(b9.dZ / 2), Math.floor(b9.da / 2), -200) : this.lg(Math.floor(b9.dZ / 2), Math.floor(b9.da / 2),
			200)
	}, this.eE = function(aFA, a9y) {
		var aFD, aFE, nb, nc;
		return !io.hP() || (aFD = sG, aFE = sH, sG += nb = aF6 - aFA, sH += nc = aF7 - a9y, cf.eE(nb, nc), this.jN(), aF6 = aFA, aF7 = a9y, aFD !== sG) || aFE !== sH
	}, this.lg = function(i2, i3, deltaY) {
		var tQ;
		if (io.hP()) {
			if (0 < deltaY) tQ = (tQ = 500 / (500 + deltaY)) < .5 ? .5 : tQ;
			else {
				if (!(deltaY < 0)) return !1;
				tQ = 2 < (tQ = (500 - deltaY) / 500) ? 2 : tQ
			}
			this.iv(i2, i3, tQ), b6.bJ = !0
		}
		return !0
	}, this.iv = function(eB, eC, ge) {
		var a04;
		ge = a04 = (a04 = 1024 < (a04 = ge) * sF ? 1024 / sF : a04) * sF < .125 ? .125 / sF : a04, cf.zoom(ge, eB, eC),
			function(a04, i2, i3) {
				sF *= a04, sG = (sG + i2) * a04 - i2, sH = (sH + i3) * a04 - i3, iu.jN()
			}(ge, eB, eC)
	}, this.jN = function() {
		var aFH = b9.dZ / 16,
			aFI = 0,
			aFJ = b9.da / 16,
			aFK = 0;
		sG < -b9.dZ + aFH && (aFI = -b9.dZ + aFH - sG), sG > sF * e1.e0 - aFH && (aFI = sF * e1.e0 - aFH - sG), sH < -b9.da + aFJ && (aFK = -b9.da + aFJ - sH), sH > sF * e1.e2 - aFJ && (aFK = sF * e1.e2 - aFJ - sH), sG += aFI, sH += aFK, va
		.a5z(), cf.aFL(aFI, aFK)
	}, this.mh = function() {
		eB = b9.dZ - dZ - dY.gap, eC = Math.floor(b9.da / 2 - 1.25 * dZ)
	}, this.eK = function() {
		by.bz.data[8].value || (eL.drawImage(aF4[0], eB, eC), eL.drawImage(aF4[1], eB, Math.floor(eC + 3 * dZ / 2)))
	}
}

function aF(v, a8) {
	return Math.floor(v / a8 + 1 / (2 * a8))
}

function a4Z(v, a8) {
	return 0 <= v ? aF(v, a8) : -aF(-v, a8)
}

function a37(aC) {
	return aC * aC
}

function db(v, a8) {
	return a8 < v ? v : a8
}

function jW(v, a8) {
	return v < a8 ? v : a8
}

function ld(v, aC, a8) {
	return aC < v ? v : a8 < aC ? a8 : aC
}

function aFN(aC, m) {
	for (var a2 = aF(aC + 1, 2), l = 0; l < m; l++) a2 = aF(a2 + aF(aC, a2), 2);
	return a2
}

function aFO(aC, m) {
	return aC < 1 ? 0 : aFN(aC, m)
}

function aAn(eG, eH, en, jU, ih, eZ, eo, jV) {
	return !(eG + en <= ih || eH + jU <= eZ || ih + eo <= eG || eZ + jV <= eH)
}

function aAm(eG, eH, en, jU, ih, eZ, eo, jV) {
	return eG <= ih && eH <= eZ && ih + eo <= eG + en && eZ + jV <= eH + jU
}

function aFP(aC) {
	return Math.floor(!!aC * (1 + Math.log2(aC + .5)))
}

function a55(t7, ti) {
	var h = document.createElement("div");
	this.aAM = h, this.resize = function() {
		h.style.padding = n.o.nR(dY.yi), h.style.lineHeight = n.o.nR(n.o.nN(.035))
	}, t7.style.overflowX = "hidden", t7.style.overflowY = "auto", h.innerHTML = ti, t7.appendChild(h)
}

function aFQ() {
	this.aF1 = 28, this.es = 0, this.aF0 = null;
	var aFR = this.aF2 = null;

	function aFV(hZ, aFW) {
		var eB, eC, rj, nb, dH = n.o.j7(hZ, hZ),
			dF = n.o.getContext(dH, !0),
			oB = n.o.getImageData(dF, hZ, hZ),
			d = oB.data,
			mr = (hZ >> 1) - .5,
			aFX = .5 + mr;
		for (aFX *= aFX, eC = 0; eC < hZ; eC++)
			for (eB = 0; eB < hZ; eB++) nb = (nb = eB - mr) * nb + (nb = eC - mr) * nb, d[rj = 4 * (eC * hZ + eB)] = aFW[0], d[1 + rj] = aFW[1], d[2 + rj] = aFW[2], d[3 + rj] = (aFX - nb) * aFW[3] / aFX;
		return dF.putImageData(oB, 0, 0), dH
	}

	function a4K(l, dF, dH, hZ) {
		var eB, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[l];
		if (highlight) hZ *= 2;
		0 !== bU.bV[l] && 0 !== bU.bp[l] && (eB = bU.qa[l] + bU.qc[l] + 1 - hZ - 2 >> 1, y = bU.qb[l] + bU.qd[l] + 1 - hZ - 2 >> 1,
			highlight ? dF.drawImage(dH[ao.fC ? dO.lN[l] : l < ao.cW ? 1 : 0], eB, y, hZ, hZ) :
			dF.drawImage(dH[ao.fC ? dO.lN[l] : l < ao.cW ? 1 : 0], eB, y))
	}
	this.k = function() {
		var aFU;
		this.es = 700,
			function(aFU) {
				var hZ = aFU.aF1;
				if (aFU.aF2 = [], aFR = [], ao.fC)
					for (var l = 0; l <= ao.nh; l++) aFU.aF2.push(aFV(hZ, dO.a3t[dO.lM[l]])), aFR.push(aFV(hZ >> 1, dO.a3t[dO.lM[l]]));
				else aFU.aF2.push(aFV(hZ, dO.a3t[0])), aFU.aF2.push(aFV(hZ, dO.a3t[4])), aFR.push(aFV(hZ >> 1, dO.a3t[0]))
			}(this),
			function(aFU, aFY) {
				var l, aF0 = aFU.aF0,
					dF = n.o.getContext(aF0, !0),
					m = ao.l4,
					hZ = aFU.aF1 >> 1;
				dF.imageSmoothingEnabled = !1, dF.setTransform(1, 0, 0, 1, 0, 0), aFY && dF.clearRect(0, 0, aF0.width, aF0.height);
				for (l = ao.cW; l < m; l++) a4K(l, dF, aFR, hZ)
			}(this, null !== (aFU = this).aF0 && aFU.aF0.width === e1.e0 - 2 && aFU.aF0.height === e1.e2 - 2 || (aFU.aF0 = n.o.j7(e1.e0 - 2, e1.e2 - 2), !1)), ao.bA || this.aBL()
	}, this.aBL = function() {
		for (var m = ao.cW, hZ = this.aF1, aF2 = this.aF2, dF = n.o.getContext(this.aF0, !0), l = 0; l < m; l++) a4K(l, dF, aF2, hZ)
	}
}

function wh() {
	this.a60 = !1, this.a6i = !1, this.aBM = !1, this.aFZ = [0, 0, 0, 0], this.bI = function() {
		var eG, eH, ih, eZ;
		this.aBM = this.aBM || this.a6i, (this.a6i || this.a60 && this.aBM) && (eG = va.a5y[0], eH = va.a5y[1], ih = va.a5y[2], eZ = va.a5y[3], eG = eG < this.aFZ[0] ? this.aFZ[0] : eG, eH = eH < this.aFZ[1] ? this.aFZ[1] : eH, ih = ih > this
			.aFZ[2] ? this.aFZ[2] : ih, eZ = eZ > this.aFZ[3] ? this.aFZ[3] : eZ, this.a6i = !1, this.a60 = !1, eG === this.aFZ[0] && eH === this.aFZ[1] && ih === this.aFZ[2] && eZ === this.aFZ[3] ? this.a9Y() : eG <= ih && eH <= eZ && pA
			.putImageData(pB, 0, 0, eG, eH, ih - eG + 1, eZ - eH + 1))
	}, this.a9Y = function() {
		this.aBM && this.aFZ[2] >= this.aFZ[0] && this.aFZ[3] >= this.aFZ[1] && pA.putImageData(pB, 0, 0, this.aFZ[0], this.aFZ[1], this.aFZ[2] - this.aFZ[0] + 1, this.aFZ[3] - this.aFZ[1] + 1), this.aBM = !1
	}, this.si = function() {
		this.aFZ[2] >= this.aFZ[0] && this.aFZ[3] >= this.aFZ[1] && pA.putImageData(pB, 0, 0, this.aFZ[0], this.aFZ[1], this.aFZ[2] - this.aFZ[0] + 1, this.aFZ[3] - this.aFZ[1] + 1), this.aBM = !1
	}, this.k = function() {
		var eB, eC;
		this.a60 = !1, this.a6i = !1, this.aBM = !1, this.aFZ[0] = e1.e0, this.aFZ[1] = e1.e2, this.aFZ[2] = this.aFZ[3] = 0;
		loop: for (eB = 1; eB < e1.e0 - 1; eB++)
			for (eC = e1.e2 - 2; 1 < eC; eC--)
				if (1 === uW[bX.qe(eB, eC) + 2]) {
					this.aFZ[0] = eB;
					break loop
				} loop: for (eC = 1; eC < e1.e2 - 1; eC++)
			for (eB = e1.e0 - 2; 1 < eB; eB--)
				if (1 === uW[bX.qe(eB, eC) + 2]) {
					this.aFZ[1] = eC;
					break loop
				} loop: for (eB = e1.e0 - 2; 0 < eB; eB--)
			for (eC = e1.e2 - 2; 1 < eC; eC--)
				if (1 === uW[bX.qe(eB, eC) + 2]) {
					this.aFZ[2] = eB;
					break loop
				} loop: for (eC = e1.e2 - 2; 0 < eC; eC--)
			for (eB = e1.e0 - 2; 1 < eB; eB--)
				if (1 === uW[bX.qe(eB, eC) + 2]) {
					this.aFZ[3] = eC;
					break loop
				}
	}
}

function aC0() {
	var aFa, aFb, aBb, jt, aFc;
	this.gW = new rL, aBb = new aBh([.45, .27], [.5, .5], 2 / 3), aFb = [new aa("⚔️<br>Multiplayer", function() {
			aFd(0)
		}, ac.aCN), new aa("🗡️<br>Single Player", function() {
			aFd(1)
		}, ac.rS), new aa("🔑<br>My Account", function() {
			aFd(2)
		}, ac.aCY), new aa("⚙️<br>Menu", function() {
			aFd(3)
		}, ac.aCL), new aa("", function() {
			aO.aQ(12)
		}, ac.lC, !1),
		new aa("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], jt = new iD(by.bz.data[122]);
	for (var l = 0; l < aFb.length; l++) aFb[l].button.style.position = "absolute";

	function aFd(b4) {
		ae.af.setState(10), oR.rD(), d7.g6() || d7.g7(), 0 === b4 ? aO.al.aFe() : 1 === b4 ? aO.al.aFf() : 2 === b4 ? 0 !== ae.id || by.bz.data[140].value ? aO.aQ(8, aO.aP, new fh(16)) : aO.al.fg(aO.aP, 16) : 3 === b4 && aO.aQ(1, aO.aP)
	}
	jt.i.style.position = "absolute", jt.i.style.textAlign = "center", jt.i.placeholder = "Your Kingdom's Name", this.show = function() {
		aW.setState(0), ae.af.setState(12), this.gW.show(), aFb[4].k4(n.color.aEl(by.bz.data[121].value)), this.resize(), document.body.appendChild(jt.i);
		for (var l = 0; l < aFb.length; l++) document.body.appendChild(aFb[l].button);
		1 !== ae.id || ae.fb < 5 || (aFc && b6.b5 > aFc + 144e5 ? ae.m4.setState(14) : aFc = b6.b5)
	}, this.fw = function() {
		this.gW.fw(), document.body.removeChild(jt.i);
		for (var l = 0; l < aFb.length; l++) document.body.removeChild(aFb[l].button)
	}, this.resize = function() {
		this.gW.resize(), aBb.resize();
		var gap = .5 * dY.gap,
			a7w = 10 / 99 * .84 * aBb.dZ,
			aFi = .16 * aBb.da,
			aFH = .19 * aBb.dZ,
			eB = aBb.eB + aFH,
			a7w = aBb.eC + a7w + 3 * gap,
			dZ = .5 * (aBb.dZ - gap) - aFH,
			aFH = aBb.dZ - 2 * aFH - aFi - gap,
			aFH = (n.o.rY(jt.i, eB, a7w, aFH, aFi), n.o.rY(aFb[4].button, eB + aFH + gap, a7w, aFi, aFi), .5 * (aBb.eC + aBb.da - (a7w += aFi + gap) - gap));
		n.o.rY(aFb[0].button, eB, a7w, dZ, aFH), n.o.rY(aFb[1].button, eB + dZ + gap, a7w, dZ, aFH), n.o.rY(aFb[2].button, eB, a7w + aFH + gap, dZ, aFH), n.o.rY(aFb[3].button, eB + dZ + gap, a7w + aFH + gap, dZ, aFH);
		n.o.rY(aFb[5].button, eB, a7w + aFH * 2 + gap * 2, dZ * 2 + gap, aFH / 3);
		for (var l = 0; l < aFb.length; l++) aFb[l].button.style.font = n.o.dc(0, n.o.a8d(.065 * aBb.da)), n.o.p(aFb[l].button, 5);
		jt.i.style.font = n.o.dc(0, n.o.a8d(.08 * aBb.da)), n.o.p(jt.i, 5)
	}, this.eK = function() {
		if (aW.a9v(), jG.eK(), jH.eK(), gQ.eK(), d7.g6()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(aBb.dZ * 0.03);
				eL.font = n.o.dc(1, size);
				eL.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = eL.measureText(text).width;
				eL.textAlign = "left";
				eL.textBaseline = "middle";
				eL.fillText(text, eL.canvas.width - textLength - size / 2, size);
			};
			eL.imageSmoothingEnabled = !1;
			var a2 = d7.g5("territorial.io"),
				tQ = .84 * aBb.dZ / a2.width;
			eL.setTransform(tQ, 0, 0, tQ, aBb.eB + .08 * aBb.dZ, aBb.eC), aFa = aFa || n.gG.gN(a2, n.gG.oC, [0, 0, 0]);
			for (var eB = -1; eB <= 1; eB += 2)
				for (var eC = -1; eC <= 1; eC += 2) eL.drawImage(aFa, eB, eC);
			eL.drawImage(a2, 0, 0), eL.imageSmoothingEnabled = !0;
			var a05 = d7.g5("logo"),
				aFk = .6666 * tQ * a2.height / a05.height,
				ih = .5 * b9.dZ,
				eZ = aBb.eC + .5 * tQ * a2.height - .5 * aFk * a05.height;
			eL.setTransform(aFk, 0, 0, aFk, ih - .6 * tQ * a2.width, eZ), eL.drawImage(a05, 0, 0), eL.setTransform(aFk, 0, 0, aFk, ih + .6 * tQ * a2.width - aFk * a05.width, eZ), eL.drawImage(a05, 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0), eL
				.imageSmoothingEnabled = !0
		}
	}
}

function fe(r3, t7) {
	var h, l;
	for (this.resize = function() {
			for (var l = 0; l < r3.length; l++) n.o.p(r3[l].button);
			h.style.gap = h.style.padding = n.o.nR(dY.yi)
		}, (h = document.createElement("div")).style.display = "grid", h.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", h.style.overflowY = "auto", h.style.gridAutoRows = "5.3em", h.style.maxHeight = "100%", l = 0; l < r3
		.length; l++) r3[l].button.style.fontSize = "1.2em", h.appendChild(r3[l].button);
	t7.appendChild(h)
}

function vu() {
	var a6z, hx, xh, aFl, da, mR, fontSize, aFm, aFn, a1R, aFo, df, eg, xi, aFp;

	function aFv() {
		eL.drawImage(df, dY.gap + (ao.fC ? dY.gap + bj.nj() : 0), kZ + 2 * dY.gap)
	}

	function aFq() {
		df.width = a6z[0].width + a1R, df.height = da + a1R, (eg = df.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6z[0].width + a1R, da + a1R), eg.translate(Math.floor(a1R / 2), Math.floor(a1R / 2)), eg.lineWidth = a1R, eg.fillStyle = 1 === a6z[0].aFu ? ac.aCJ : ac.c8, aFw(), eg.fill(), eg.strokeStyle = 1 === a6z[0].aFu ? ac.ep :
			ac.c7, aFw(), eg.stroke(), n.o.textAlign(eg, 1), n.o.textBaseline(eg, 1), eg.fillStyle = 1 === a6z[0].aFu ? ac.ep : ac.c7, eg.font = mR[0], eg.fillText(aS.aZ[66 + a6z[0].aFt], Math.floor(a6z[0].width / 2), Math.floor(.72 * aFm[0] * da)),
			eg.font = mR[1], eg.fillText(a6z[0].x, Math.floor(a6z[0].width / 2), Math.floor((aFm[0] + .48 * aFm[1]) * da))
	}

	function aFw() {
		eg.beginPath(), eg.moveTo(aFo, 0), eg.lineTo(a6z[0].width - aFo, 0), eg.lineTo(a6z[0].width, aFo), eg.lineTo(a6z[0].width, da - aFo), eg.lineTo(a6z[0].width - aFo, da), eg.lineTo(aFo, da), eg.lineTo(0, da - aFo), eg.lineTo(0, aFo), eg
			.closePath()
	}
	this.k = function() {
		hx = 4, xh = aFl = xi = 0, a6z = [], mR = new Array(2), fontSize = new Array(2), (aFm = new Array(2))[0] = .3, aFm[1] = .7, aFn = new Array(4), df = document.createElement("canvas"), aFp = b6.b5 + 2e3, this.resize()
	}, this.resize = function() {
		var l, dZ;
		for (da = Math.floor((ae.af.dW() ? .0725 : .058) * b9.dX), fontSize[0] = Math.floor(.85 * aFm[0] * da), fontSize[1] = Math.floor(.85 * aFm[1] * da), mR[0] = n.o.dc(1, fontSize[0]), mR[1] = n.o.dc(1, fontSize[1]), l = aFn.length - 1; 0 <=
			l; l--) aFn[l] = this.measureText(aS.aZ[66 + l] + "000", mR[0]);
		if (a1R = Math.floor(1 + .05 * da), aFo = Math.floor(.2 * da), 0 < a6z.length) {
			for (l = a6z.length - 1; 0 <= l; l--) dZ = this.measureText(a6z[l].x + "00", mR[1]), a6z[l].width = dZ < aFn[l] ? aFn[l] : dZ;
			aFq()
		}
	}, this.b8 = function() {
		0 !== hx && (4 === hx ? b6.b5 > aFp && (hx = 0, 1 === ao.aq) && ei.qn(e1.iM.iO[e1.dh].name, 3, 1, 9) : (1 === hx ? (0 === xh && (aFq(), xh = 1e-4), 1 <= (xh += .002 * (b6.b5 - xi)) && (aFl = 0, hx = 2, xh = 1), b6.bJ = !0) : 2 === hx ? ((
			aFl += (b6.b5 - xi) / 1e3) > a6z[0].aCp || 1 < aFl && 1 < a6z.length) && (hx = 3) : 3 === hx && ((xh -= .002 * (b6.b5 - xi)) <= 0 && (xh = 0, a6z.shift(), hx = 0 < a6z.length ? 1 : 0), b6.bJ = !0), xi = b6.b5))
	}, this.measureText = function(x, mR) {
		return eL.font = mR, Math.floor(eL.measureText(x).width)
	}, this.xE = function(a7X, l) {
		this.qn(bU.l6[a7X], l, 1, 0 === l ? 3 : 7)
	}, this.qn = function(x, aFt, aFu, aCp) {
		var dZ = (dZ = this.measureText(x + "00", mR[1])) < aFn[aFt] ? aFn[aFt] : dZ;
		a6z.push({
			x: x,
			width: dZ,
			aFt: aFt,
			aFu: aFu,
			aCp: aCp
		}), 0 === hx && (xh = 0, hx = 1, xi = b6.b5)
	}, this.eK = function() {
		0 !== hx && 0 !== xh && (xh < 1 ? (eL.globalAlpha = xh, aFv(), eL.globalAlpha = 1) : aFv())
	}
}

function wC() {
	var aFx;

	function aG7(dH, a1V, eB, eC, globalAlpha) {
		e1.e4.save(), e1.e4.globalAlpha = globalAlpha, e1.e4.imageSmoothingEnabled = !1, e1.e4.scale(a1V, a1V), e1.e4.drawImage(dH, Math.floor(eB * (e1.e0 / a1V - dH.width)), Math.floor(eC * (e1.e2 / a1V - dH.height))), e1.e4.restore()
	}
	this.a14 = 0, this.aEd = 0, this.aEe = 0, this.aEf = 0, this.k = function() {
		(aFx = new Array(e1.iJ))[0] = {
			dZ: [0, 5e3, 8e3, 1e4],
			aI: [220, 250, 255, 220],
			n9: [190, 220, 0, 0],
			a8: [170, 200, 0, 0]
		}, aFx[1] = {
			dZ: [0, 4e3, 5e3, 6e3, 1e4],
			aI: [25, 0, 100, 0, 25],
			n9: [25, 0, 0, 0, 25],
			a8: [25, 0, 0, 0, 25]
		}, aFx[2] = {
			dZ: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			aI: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			n9: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			a8: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aFx[3] = {
			dZ: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			aI: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			n9: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			a8: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aFx[4] = {
			dZ: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			aI: [10, 10, 20, 10, 10, 170, 212],
			n9: [20, 20, 60, 100, 100, 110, 170],
			a8: [70, 70, 160, 30, 30, 60, 120]
		}, aFx[5] = {
			dZ: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			aI: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			n9: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			a8: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aFx[6] = {
			dZ: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			aI: [10, 10, 60, 255, 255, 200, 200],
			n9: [10, 10, 60, 255, 255, 200, 200],
			a8: [80, 80, 255, 255, 255, 200, 200]
		}, aFx[7] = {
			dZ: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			aI: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			n9: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			a8: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aFx[8] = {
			dZ: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			aI: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			n9: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			a8: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aFx[9] = {
			dZ: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			aI: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			n9: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			a8: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aFx[20] = {
			dZ: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			aI: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			n9: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			a8: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.iX = function() {
		var aG6, l, v, nV, oB = function() {
				var oB;
				return e1.e3 = document.createElement("canvas"), e1.e3.width = e1.e0, e1.e3.height = e1.e2, e1.e4 = e1.e3.getContext("2d", {
					alpha: !1
				}), oB = e1.e4.getImageData(0, 0, e1.e0, e1.e2), e1.e6 = oB.data, oB
			}(),
			dZ = aFx[e1.dh].dZ,
			aI = aFx[e1.dh].aI,
			n9 = aFx[e1.dh].n9,
			a8 = aFx[e1.dh].a8,
			aC = iS.pi(),
			m = dZ.length - 2,
			aG1 = new Array(1 + m),
			aG2 = new Array(1 + m),
			aG3 = new Array(1 + m),
			aG4 = new Array(1 + m);
		for (v = m; 0 <= v; v--) aG1[v] = dZ[v + 1] - dZ[v], aG2[v] = aI[v + 1] - aI[v], aG3[v] = n9[v + 1] - n9[v], aG4[v] = a8[v + 1] - a8[v];
		for (l = e1.e0 * e1.e2 - 1; 0 <= l; l--)
			for (v = m; 0 <= v; v--)
				if (aC[l] >= dZ[v]) {
					nV = aC[l] - dZ[v], e1.e6[4 * l] = aI[v] + a4Z(aG2[v] * nV, aG1[v]), e1.e6[4 * l + 1] = n9[v] + a4Z(aG3[v] * nV, aG1[v]), e1.e6[4 * l + 2] = a8[v] + a4Z(aG4[v] * nV, aG1[v]), e1.e6[4 * l + 3] = 255;
					break
				} e1.e4.putImageData(oB, 0, 0), e1.ic(e1.dh) && d7.g6() && e1.ic(e1.dh) && (oB = d7.g5("arena"), aG6 = d7.g5("territorial.io"), aG7(oB, 5, .5, .5, .1), aG7(aG6, 2, .5, .45, .1)), e1.iK = !0, b6.bJ = !0
	}, this.oz = function() {
		for (var a6, eB, eC, aG8, aG9, nW, aEd = 0, dZ = e1.e0, da = e1.e2, nV = dZ * da * 4, aGA = uW, aGB = e1.e6, l = dZ - 1; 0 <= l; l--) aGA[(a6 = l << 2) + 2] = aGA[nV - a6 - 2] = 3;
		for (nV = 4 * dZ, l = da - 1; 0 <= l; l--) aGA[(a6 = l * nV) + 2] = aGA[a6 + nV - 2] = 3;
		for (aG8 = dZ - 1, aG9 = da - 1, eC = 1; eC < aG9; eC++)
			for (nV = eC * dZ, eB = 1; eB < aG8; eB++) nW = 1 - (aGB[(a6 = nV + eB << 2) + 2] > aGB[a6 + 1] && aGB[a6 + 2] > aGB[a6]), aGA[a6 + 2] = 2 - nW, aEd += nW;
		this.a14 = (dZ - 2) * (da - 2), this.aEf = 0, e1.iZ(e1.dh) && function() {
			var a6, eB, eC, nV, aGA = uW,
				aGB = e1.e6,
				dZ = e1.e0,
				aG8 = dZ - 1,
				aG9 = e1.e2 - 1,
				dI = 0;
			for (eC = 1; eC < aG9; eC++)
				for (nV = eC * dZ, eB = 1; eB < aG8; eB++) aGB[a6 = nV + eB << 2] === aGB[1 + a6] && aGB[a6] === aGB[2 + a6] && (dI++, aGA[2 + a6] = 3);
			iW.aEf = dI
		}(), this.aEd = ao.mb = aEd - this.aEf, this.aEe = this.a14 - this.aEd - this.aEf
	}
}

function wF() {
	var player, cS, aEh, aGD, eG, eH, ih, eZ, b4, aGE, id;

	function aGK() {
		var xG;
		if (bX.qR(aEh)) xG = ao.l4;
		else {
			if ((xG = bX.qS(aEh)) === player) return void aGM(!0);
			if (!qT(player, xG)) return function(xG) {
				var max = bU.bp[xG] * ao.ol - bU.f8[xG];
				max <= 0 || (cS -= max = max < cS ? max : cS, player === ao.bW && (ar.ce(max, 0, xG), cd.mU[16] += max), xG === ao.bW && (ar.a9K(max, player), cd.mU[10] += max), bU.f8[xG] += max, cf.cg(xG, max))
			}(xG), void aGM(!0)
		}
		player === ao.bW && (cd.mU[13] += cS), pC.a0h(player, id), f6.a0j(player, aGE), bU.n4[player].push(aGD), f6.xE(player, cS, xG), pD.a29(player, !0)
	}

	function aGM(aGP) {
		pC.a0h(player, id), f6.a0j(player, aGE), aGP && (bU.f8[player] += cS)
	}

	function aGG() {
		bX.a6Z(aEh, player) && bX.a6d(aEh)
	}

	function aGF(l, a7d, a7X, hW, hP) {
		if (b4 = l, id = a7d, player = a7X, eG = bX.a2G(hW), eH = bX.a17(hW), ih = bX.a2G(hP), eZ = bX.a17(hP), aGD = aEh = bX.qe(eG, eH), -1 !== (aGE = f6.a2I(player, id))) return cS = f6.a0b(player, aGE), 1;
		aGG(), pC.a0h(player, id)
	}
	this.b8 = function(l, id, a7X, hW, hP) {
		aGF(l, id, a7X, hW, hP) && (aGG(), function() {
			var aGQ = aF(cS, 128);
			cS -= aGQ = aGQ < 1 ? 1 : aGQ, player === ao.bW && (cd.mU[15] += aGQ);
			if (cS <= ao.oj) return player === ao.bW && (cd.mU[15] += cS), void aGM(!1);
			return f6.a7g(player, aGE, cS), 1
		}()) && (l = bX.qe(eG, eH), aEh = Math.abs(ih - eG) >= Math.abs(eZ - eH) ? l + a0O[eG < ih ? 1 : 3] : l + a0O[eH < eZ ? 2 : 0], eG = bX.a2G(aEh), eH = bX.a17(aEh), pC.a25(b4, aEh), ! function() {
			if (bX.qk(aEh)) return;
			return 1
		}() ? aGK() : bX.tr(aEh) && bX.a6h(aEh, player))
	}, this.a28 = function(a7X, hW) {
		player = a7X, aEh = bX.qe(bX.a2G(hW), bX.a17(hW)), aGG()
	}
}

function tV(title, ti, a53) {
	var fH, a54;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), a54.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, a53 = a53 || [new aa("❌ " + aS.aZ[92], function() {
		aO.ab()
	}, ac.ad)], fH = new fd(title, a53), a54 = new a55(fH.ff, ti), n.o.textAlign(fH.ff.style, 1)
}

function wX() {
	this.al = new aFQ, this.aBP = new aEx, this.k = function() {
		this.al.k()
	}, this.b8 = function() {
		0 !== this.al.es && this.al.es--
	}
}

function a9f() {
	this.lp = ["s"], this.aZ = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You surrendered!", "The game ended in a stalemate!", "Error: {0}", "", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coordinates: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were conquered.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{1006}No Server Response", "{3231}Account successfully saved!", "{3232}Account", "{3249}No Servers Found", "{3252}Thanks for the vote.", "{3265}Please accept Cookies",
		"{3266}Invalid Password Format", "{3605}Invalid Replay Format", "{4207}Lobby Timeout", "{4214}Invalid Username", "{4224}Lobby Error", "{4229}No Client Response", "Undefined", "Error", "LEADERBOARD", "YOU CONQUERED",
		"YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Humans", "Players", "Bots", "Spectators", "Threshold", "Occupation", "Interest", "Income", "Time", "Quit Game", "More", "Settings", "Replay", "Links", "Game Version", "Delete Data",
		"Privacy Settings", "Close", "Game Statistics", "Surrender", "Force Restart Game", "Menu", "Back", "Select All", "Copy", "Clear", "Launch", "Save & Close", "Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Language", "Resolution", "Large UI", "Font", "Hide Usernames", "Place Balance Above",
		"Hide Zoom Buttons", "Minimum Font Size", "Lobby", "Text Rendering Speed", "Low", "Medium", "High", "Very High", "Small", "Very Small", "Proxied Lobby", "Slow", "Normal", "Fast", "Enabled", "New Game Update",
		"The game has been updated! Please reload the game.", "Reload", "My Account", "Delete Account", "", "", "If peace is agreed upon, the largest territory holder wins the game.", "Hint: Click on a boat to send it to a new location.",
		"Hint: The top 9 emojis are ordered by usage.", "{4480}Not enough gold! 💸"
	]
}

function wZ() {
	var aDf = 0,
		aGR = 0;
	this.a92 = function(eB, eC) {
		aDf = eB, aGR = eC
	}, this.a9B = function(aGS) {
		ao.fX || bD.bE || (n.br.xB(0) || n.br.xB(1)) && n.br.c1(ao.bW) && (jK.eA(aDf, aGR) ? jK.a93 = !1 : function(aGS) {
			var aGU = p2.aGV(aDf),
				aGW = p2.aGX(aGR),
				rj = p2.aGY(aGU, aGW),
				ge = p2.aGZ(rj);
			p2.aGa(aGU, aGW) && (ao.bA ? bX.qk(ge) && bq.fZ.xA(rj) : bX.a6a(ge) || (bX.tr(ge) || aGS ? fA.bd.a5W(ao.bW, rj) && bq.fZ.xS(jK.a7M(), rj) : bX.qR(ge) ? aDG(ao.bW) ? bq.fZ.xF(jK.a7M(), ao.l4) : aDE(ao.bW, ao.l4) ? pJ.aDM(ao.l4,
				jK.a7M()) : fA.bd.a5W(ao.bW, rj) && bq.fZ.xS(jK.a7M(), rj) : (aGU = bX.qS(ge)) !== ao.bW && (qT(aGU, ao.bW) ? aDH(ao.bW, aGU) ? bq.fZ.xF(jK.a7M(), aGU) : aDE(ao.bW, aGU) ? pJ.aDM(aGU, jK.a7M()) : fA.bd.a5W(ao
				.bW, rj) && bq.fZ.xS(jK.a7M(), rj) : fA.bd.a5W(ao.bW, rj) && bq.fZ.xS(jK.a7M(), rj))))
		}(aGS))
	}
}

function aGb() {
	this.t4 = function(x) {
		for (var m = x.length, dZ = t2, l = 0; l < m; l++) dZ.hN(16, x.charCodeAt(l))
	}
}

function aa(title, aGc, backgroundColor, aGd) {
	var aGf, self, aGe = document.createElement("button");

	function aEo() {
		if (!1 !== aGd) {
			var a4D = n.color.aEn(aGf);
			if (0 < a4D[0] && a4D[0] < 255 && a4D[0] === a4D[1] && a4D[0] === a4D[2]) return
		}
		this.style.backgroundColor = n.color.aEo(aGf, 50)
	}

	function aGh() {
		this.style.backgroundColor = aGf
	}

	function aGg() {
		this.style.backgroundColor = aGf, this.blur()
	}
	this.button = aGe, this.fz = aGc, this.k4 = function(a2) {
			aGf = a2, aGe.style.backgroundColor = a2
		}, self = this, aGe.innerHTML = title, aGe.style.color = ac.c7, aGe.style.userSelect = "none", aGe.style.outline = "none", aGe.style.overflowWrap = "break-word", self.k4(backgroundColor || ac.lC), aGe.style.border = "none", aGe.style.font =
		"inherit", aGe.style.fontSize = "1em", aGe.style.padding = "0em 0.3em", aGe.onclick = aGc, aGe.addEventListener("mouseover", aEo), aGe.addEventListener("mouseout", aGg), aGe.addEventListener("focus", aEo), aGe.addEventListener("blur", aGh)
}

function wy() {
	this.a4 = function() {
		var ut, dT = function() {
				var l, v9 = p7.ui.v9,
					m = v9.length,
					max = 0;
				for (l = 0; l < m; l++) max = Math.max(max, v9[l]);
				return aFP(Math.max(max, 1))
			}(),
			hL = function(dT) {
				return 179 + function() {
					var l, cE = p7.ui.uo.cE,
						m = cE.length,
						hL = 24 * m;
					for (l = 0; l < m; l++) hL += 16 * cE[l].name.length;
					8 === p7.ui.uo.dk && (hL += 14 * m);
					return hL
				}() + (1 === p7.ui.uo.cE.length ? 12 * p7.ui.uo.uu.length : 0) + function() {
					var l, v4 = p7.ui.v4,
						m = v4.length,
						hL = 13 * m,
						aGt = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (l = 0; l < m; l++) hL += aGt[v4[l]];
					return hL
				}() + function(dT) {
					return p7.ui.v9.length * (1 + dT)
				}(dT)
			}(dT);
		t2.e7(hL + (6 - hL % 6) % 6), ut = p7.ui.uo, t2.hN(9, uk), t2.hN(31, t2.size), t2.b4 += 16, t2.hN(9, ut.or), t2.hN(14, ut.oq), t2.hN(4, ut.dk), t2.hN(1, ut.dl), t2.hN(6, ut.dn), t2.hN(14, ut.dp), t2.hN(10, ut.cE.length);
		var l, cE = p7.ui.uo.cE,
			m = cE.length;
		for (l = 0; l < m; l++) t2.hN(1, cE[l].uq), t2.hN(18, (cE[l].ur[0] << 12) + (cE[l].ur[1] << 6) + cE[l].ur[2]), t2.hN(5, cE[l].name.length), tM.kX.t4(cE[l].name);
		if (8 === p7.ui.uo.dk)
			for (l = 0; l < m; l++) t2.hN(14, cE[l].us);
		return function() {
				var l, ut = p7.ui.uo;
				if (1 === ut.cE.length)
					for (l = 0; l < ut.uu.length; l++) t2.hN(3, ut.uu[l]), t2.hN(9, ut.uv[l] - 1)
			}(),
			function(dT) {
				var l, v4 = p7.ui.v4,
					nV = p7.ui.v5,
					nW = p7.ui.v6,
					nX = p7.ui.v7,
					m = v4.length;
				for (t2.hN(5, dT), t2.hN(30, m), t2.hN(30, p7.ui.v9.length), l = 0; l < m; l++) t2.hN(4, v4[l]), t2.hN(9, nV[l]), 0 === v4[l] ? t2.hN(22, nW[l]) : 1 === v4[l] ? (t2.hN(10, nW[l]), t2.hN(10, nX[l])) : 2 === v4[l] ? (t2.hN(10, nW[
					l]), t2.hN(9, nX[l])) : 3 === v4[l] || 4 === v4[l] ? (t2.hN(10, nW[l]), t2.hN(22, nX[l])) : 5 === v4[l] || 6 === v4[l] ? t2.hN(10, nW[l]) : 7 === v4[l] && t2.hN(1, nW[l])
			}(dT),
			function(dT) {
				var l, v8 = p7.ui.v8,
					v9 = p7.ui.v9,
					m = v8.length;
				for (l = 0; l < m; l++) t2.hN(1, v8[l]), t2.hN(dT, v9[l])
			}(dT), t2.b4 !== hL && ar.at("Encoder Index Error: " + t2.b4 + " " + hL), t2.b4 = 40, t2.hN(16, function() {
				var l, a6 = t2.hA,
					m = t2.size,
					un = 0;
				for (l = 7; l < m; l++) un = un + a6[l] & 65535;
				return un
			}()), kU.k(t2.hA), tM.ua.a5H(tM.ua.a5F(aF(hL - 1, 6) + 1))
	}
}

function bF() {
	ar.b8(), cf.b8(), ey.mu(), ak.al.b8()
}

function bG() {
	pJ.b8(), pE.b8(), cU.b8(), pG.b8(), pH.b8(), pD.b8(), pC.b8(), fA.al.b8(), aAo(), jI.b8(), oX.b8(), cf.b8(), cf.aGu(), ey.b8(), p9.b8(), jJ.b8(), jM.b8(), ar.b8(), pI.b8(), jK.b8(), gS.b8(), cd.b8(), bj.b8(), p8.b8(), ak.al.b8(), ak.hC.b8(), aO
		.b8(), p7.b8(), b6.b8()
}

function bL() {
	io.b8(), ex.b8(), ei.b8(), pM.b8(), jL.b8(), vU.aGv()
}

function bK() {
	jI.lA(!1), jM.lA(), ey.lA(!1), jJ.lA(), jK.lA(), gS.lA(), cf.lA(!1), bj.np()
}

function bB() {
	cf.lA(!1) && (b6.bJ = !0), ak.al.b8()
}

function vv() {
	var dZ, eB, a2M, df, eg, hY, f4, a7u, mR, a0t, aGw = 11 / 12;

	function aGx() {
		var a2L = Math.floor(f4 * (dZ - 2 * a2M)),
			aGz = 1 + Math.floor(.0625 * jK.da),
			aH0 = 1 + Math.floor(.3 * jK.da),
			jU = Math.floor(.55 * jK.da);
		eg.clearRect(0, 0, dZ, jK.da), eg.fillStyle = ac.lC, eg.fillRect(0, 0, a2M, jK.da), eg.fillRect(a2M + a2L, 0, dZ - a2M - a2L, jK.da), eg.fillStyle = f4 < 1 / 3 ? "rgba(" + Math.floor(3 * f4 * 130) + ",130,0,0.85)" : f4 < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (f4 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (f4 - 2 / 3) * 130) + ",0.85)", eg.fillRect(a2M, 0, a2L, jK.da), eg.fillStyle = ac.c7, eg.fillRect(0, 0, dZ, 1), eg.fillRect(0, jK.da - 1, dZ, 1), eg
			.fillRect(0, 0, 1, jK.da), eg.fillRect(a2M, 0, 1, jK.da), eg.fillRect(a2M + a2L, 0, 1, jK.da), eg.fillRect(dZ - a2M, 0, 1, jK.da), eg.fillRect(dZ - 1, 0, 1, jK.da), eg.fillRect(Math.floor(.25 * jK.da) + aH0, Math.floor((jK.da - aGz) / 2),
				jK.da - 2 * aH0, aGz), eg.fillRect(Math.floor(dZ - 1.25 * jK.da) + aH0, Math.floor((jK.da - aGz) / 2), jK.da - 2 * aH0 - aH0 % 2, aGz), eg.fillRect(Math.floor(dZ - 1.25 * jK.da) + Math.floor((jK.da - aGz) / 2), aH0, aGz, jK.da - 2 *
				aH0 - aH0 % 2), a7u = n.br.xR(ao.bW, jK.a7M()), eg.fillText(n.eU.eV(a7u) + " (" + n.eU.mo(100 * f4, +(f4 < .1)) + ")", Math.floor(.5 * dZ), jU)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		f4 = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => jK.a9A(arg1);

	function aH5(a04) {
		return !(1 < a04 && 1 === f4 || (1 < a04 && a04 * f4 - f4 < 1 / 1024 ? a04 = (f4 + 1 / 1024) / f4 : a04 < 1 && f4 - a04 * f4 < 1 / 1024 && (a04 = (f4 - 1 / 1024) / f4), f4 = hS.i7(f4 * a04, 1 / 1024, 1), aGx(), 0))
	}

	function aH6(i2) {
		return f4 !== (f4 = hS.i7((i2 - eB - a2M) / (dZ - 2 * a2M), 1 / 1024, 1)) && (aGx(), !0)
	}
	this.eC = 0, this.a93 = !1, this.k = function() {
		hY = !ao.bA && !ao.fX, a0t = !1, f4 = .5, a7u = 0, this.a93 = !1, this.resize()
	}, this.resize = function() {
		ae.af.dW() && b9.dZ < .8 * b9.da ? (this.da = Math.floor(.0536 * b9.dX), dZ = b9.dZ - 4 * dY.gap - this.da) : (dZ = Math.floor((ae.af.dW() ? .65 : .389) * b9.dX), dZ += 12 - dZ % 12, this.da = Math.floor(dZ / 12)), a2M = Math.floor(3 *
			this.da / 2), mR = n.o.dc(1, Math.floor(.5 * this.da)), (df = document.createElement("canvas")).width = dZ, df.height = this.da, (eg = df.getContext("2d", {
			alpha: !0
		})).font = mR, n.o.textBaseline(eg, 1), n.o.textAlign(eg, 1), this.mh(), aGx()
	}, this.mh = function() {
		eB = ae.af.dW() && b9.dZ < .8 * b9.da ? this.da + 3 * dY.gap : Math.floor((b9.dZ - dZ) / 2), this.eC = b9.da - this.da - vb.a1L() * dY.gap
	}, this.lA = function() {
		a0t && (a0t = !1, aGx())
	}, this.hY = function() {
		return !(!hY || bD.bE && eB < Math.floor(dY.gap + 5.5 * this.da))
	}, this.a1I = function(aH1) {
		return !!this.hY() && eB + dZ > b9.dZ - aH1 - dY.gap
	}, this.aBI = function() {
		hY = !ao.fX
	}, this.a18 = function() {
		hY = !1
	}, this.a7M = function() {
		return hS.i7(Math.floor(1024 * f4 + .5) - 1, 0, 1023)
	}, this.rC = function(i2, i3) {
		return this.hY() && eB < i2 && i2 < eB + dZ && i3 > this.eC
	}, this.eA = function(i2, i3) {
		return !!this.hY() && !!jK.rC(i2, i3) && (iu.a94 = !1, function(aFU, i2, i3) {
			if (function(i2, i3) {
					return eB < i2 && i2 < eB + a2M && i3 > jK.eC
				}(i2, i3)) return aH5(aGw);
			if (function(i2, i3) {
					return eB + dZ - a2M < i2 && i2 < eB + dZ && i3 > jK.eC
				}(i2, i3)) return aH5(1 / aGw);
			return aFU.a93 = !0, aH6(i2)
		}(this, i2, i3) && (b6.bJ = !0), !0)
	}, this.a9A = function(tQ) {
		0 !== ao.aq && this.hY() && aH5(tQ) && (b6.bJ = !0)
	}, this.lg = function(deltaY) {
		var tQ;
		return !(0 === deltaY || !this.hY()) && aH5(tQ = 0 < deltaY ? (tQ = 400 / (400 + deltaY)) < aGw ? aGw : tQ : 1 / aGw < (tQ = (400 - deltaY) / 400) ? 1 / aGw : tQ)
	}, this.eE = function(i2) {
		return !!this.a93 && aH6(i2)
	}, this.a96 = function() {
		this.a93 = !1
	}, this.b8 = function() {
		this.hY() && a7u !== n.br.xR(ao.bW, this.a7M()) && (a0t = !0)
	}, this.eK = function() {
		this.hY() && eL.drawImage(df, eB, this.eC)
	}
}

function w6() {
	var aH7, aH8, aH9, aHA, aHB, aHC;
	this.k = function() {
		aH9 = aH7 = 10, aHA = aH8 = 10
	}, this.wq = function() {
		aHC = 512, aHB = new Uint16Array(aHC);
		for (var l = 0; l < aHC; l++) aHB[l] = 100 + aFO(aF(25600 * l, aHC - 4), 9)
	}, this.mp = function() {
		return aHA
	}, this.b8 = function() {
		if (--aH9 <= 0 && (aH9 = aH7, function() {
				var l, aHH, bo = bU.f8[ao.bW];
				for (ao.ap && !ao.fC && 0 !== bU.bV[0] && 0 === jO.oU[0].hR && (bU.f8[0] += aF(bU.bp[0], 6)), l = mc - 1; 0 <= l; l--) aHH = aF(cU.n7(n5[l]) * bU.f8[n5[l]], 1e4), bU.f8[n5[l]] += aHH < 1 ? 1 : aHH, cU.a0i(n5[l]);
				cd.mU[9] += bU.f8[ao.bW] - bo
			}(), --aHA <= 0)) {
			aHA = aH8;
			for (var bo = bU.f8[ao.bW], l = mc - 1; 0 <= l; l--) bU.f8[n5[l]] += bU.bp[n5[l]], cU.a0i(n5[l]);
			cd.mU[8] += bU.f8[ao.bW] - bo
		}
	}, this.n7 = function(player) {
		var aI = aHB[aF((aHC - 1) * bU.bp[player], ao.mb)],
			aHG = (b6.f2() < 1920 && (aI = aI < (aHG = aF(100 * (13440 - 6 * b6.f2()), 1920)) ? aHG : aI), this.mm(player));
		return bU.f8[player] > aHG && (aI -= aF(2 * aI * (bU.f8[player] - aHG), aHG)), aI < 0 ? 0 : 700 < aI ? 700 : aI
	}, this.mm = function(player) {
		player = 100 * bU.bp[player];
		return player > ao.oh ? ao.oh : player
	}, this.a0i = function(player) {
		var aC = bU.bp[player] * ao.ol;
		bU.f8[player] = Math.min(Math.min(bU.f8[player], ao.og), aC)
	}, this.cV = function(player, cR) {
		n.br.ca(cR, cb.cc[0]), cd.ce(player, cR), cf.aHJ(player, cb.cc[0] + cb.cc[1]), cf.cg(cR, cb.cc[0]), n.br.qK(player)
	}, this.aBX = function() {
		for (var m = mc, cE = n5, mr = 0, yS = bU.f8, l = 0; l < m; l++) mr += yS[cE[l]];
		return mr
	}, this.aBZ = function(qy) {
		for (var a6, m = mc, cE = n5, mr = 0, yS = bU.f8, lN = dO.lN, l = 0; l < m; l++) lN[a6 = cE[l]] === qy && (mr += yS[a6]);
		return mr
	}
}

function aCb(gE) {
	var fH, jg, cq;
	this.show = function() {
		fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize(), jg.resize()
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, fH = new fd("🛠️ List Options", [new aa("❌ " + aS.aZ[92], function() {
		aO.a88(10)
	})]), jg = new jh(fH.ff, ((cq = []).push(function() {
		function a8H() {
			var rU = Math.floor(a8G.i.value),
				rV = Math.floor(a8F.i.value);
			return {
				a0C: Math.min(rU, rV),
				q3: Math.max(rU, rV)
			}
		}

		function a8E() {
			var tj = ((tj = a8H()).q3 - tj.a0C + 2) / 100;
			a8D.button.innerHTML = n.eU.a7t(a8D.button.innerHTML, tj)
		}
		var a8D, jq = new jr,
			a8F = new iD(by.bz.data[132], 1, function() {
				a8D.button.click()
			}),
			a8G = new iD(by.bz.data[131], 1, function() {
				a8F.i.focus()
			});
		jq.js("Start Index"), jq.ju(a8G), a8G.i.style.marginBottom = "0.5em", jq.js("End Index"), jq.ju(a8F), a8D = new aa("Go (🧈 2.01)", function() {
			var tj = a8H();
			aO.aQ(8, aO.gV().h1, new fh(21, {
				rT: gE.rT,
				rU: tj.a0C,
				rV: tj.q3
			}))
		});
		return a8G.i.addEventListener("input", a8E), a8F.i.addEventListener("input", a8E), a8E(), jq.ju(new f([a8D.button])), jq
	}()), cq.push(function() {
		function a8E() {
			var a7u = (5 + Math.max(Math.abs(Math.floor(a8F.i.value)), 1)) / 100;
			a8D.button.innerHTML = n.eU.a7t(a8D.button.innerHTML, a7u)
		}
		var a8D, jq = new jr,
			a8F = new iD(by.bz.data[134], 1, function() {
				a8D.button.click()
			}),
			a8G = new iD(by.bz.data[133], 0, function() {
				a8F.i.focus()
			});
		jq.js("Search"), jq.ju(a8G), a8G.i.style.marginBottom = "0.5em", jq.js("Matches"), jq.ju(a8F), a8D = new aa("Go (🧈 0.10)", function() {
			var tG = a8G.i.value.slice(0, 20),
				tH = Math.abs(Math.floor(a8F.i.value));
			aO.aQ(8, aO.gV().h1, new fh(22, {
				rT: gE.rT,
				tG: tG,
				tH: tH
			}))
		});
		return a8F.i.addEventListener("input", a8E), a8E(), jq.ju(new f([a8D.button])), jq
	}()), cq))
}

function aBR() {
	this.aHL = 32, this.eB = 0, this.eC = 0, this.aHM = 0, this.aHN = 0, this.aHO = 4, this.y3 = null, this.aHP = new Int16Array(9), this.k = function() {
		this.aHM = 1 + hS.hT(e1.e0 - 1, this.aHL), this.aHN = 1 + hS.hT(e1.e2 - 1, this.aHL), this.y3 = new Array(this.aHM * this.aHN), n.rr.a03(this.y3);
		var eB, eC, aHP = this.aHP,
			dZ = this.aHM;
		for (eB = -1; eB <= 1; eB++)
			for (eC = -1; eC <= 1; eC++) aHP[3 * (1 + eC) + 1 + eB] = eC * dZ + eB
	}, this.qL = function(aHR, l) {
		return this.y3[l].push(aHR), this.y3[l].length - 1
	}, this.aHS = function(aHT, tx, ty) {
		var aHU, aHV, tx = p2.aCE(tx),
			ty = p2.aCE(ty);
		return tx === ty ? aHT : (aHU = this.y3[tx].pop(), this.y3[tx].length === aHT ? this.qL(aHU, ty) : (aHV = this.y3[tx][aHT], this.y3[tx][aHT] = aHU, fA.al.aC7[aHU] = aHT, this.qL(aHV, ty)))
	}
}

function c() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.dD = 13, this.ht = this.emojis.length, this.dA = 676, this.hs = 1024, this.dC = this.emojis.indexOf("💀"), this.aHW = this.dC + 1, this.dB = this.emojis.indexOf("🥇"), this.aHX = this.emojis.indexOf("😊"), this.iB = function(aC) {
		return aC < this.dA ? String.fromCharCode(55356, 56806 + hS.hT(aC, 26), 55356, 56806 + aC % 26) : this.emojis[Math.min(aC - this.dA, this.ht - 1)]
	}, this.hv = function(x) {
		for (var m = x.length - 2, a5 = [], l = 0; l < m; l++) {
			var dz = x.charCodeAt(l) - 56806,
				a05 = x.charCodeAt(l + 2) - 56806;
			0 <= dz && dz < 26 && 0 <= a05 && a05 < 26 && (a5.push(26 * dz + a05), l += 3)
		}
		return a5
	}, this.aHY = function(aC) {
		return aC < this.dA
	}, this.aHZ = function(aC) {
		return aC >= 1024 - this.dD
	}, this.aHa = function(aC) {
		return aC >= this.dA && aC < this.dA + this.aHW
	}
}

function wm() {
	this.iA = 0, this.gap = 0, this.a8c = 0, this.yi = 0, this.k = function() {
		this.resize()
	}, this.resize = function() {
		this.iA = .0022 * n.o.yd(.5) * b9.dX, this.a8c = this.iA / b9.iy, this.gap = Math.max(Math.floor((ae.af.dW() ? .0114 : .01296) * b9.dX), 2), this.yi = this.gap / b9.iy
	}
}

function wP() {
	this.fZ = new a9a, this.br = new zr, this.a9b = new x9, this.ow = new aAY, this.a5Q = new cP
}

function a8Z() {
	this.a3M = function() {
		by.al.sN(), by.iH.dd(105, tM.ua.a5H(tM.ua.a5F(5))), by.iH.dd(106, tM.ua.a5H(tM.ua.a5F(8))), by.iH.dd(109, kU.kV(30)), by.iH.dd(108, by.bz.data[109].value), by.iH.dd(111, by.bz.data[109].value + 1), by.iH.dd(107, 0), by.iH.dd(110, "")
	}, this.a3O = function() {
		var aHb, aHc, aHd;
		kU.size < t2.hM(18) ? ak.al.hF(0, 3254) : (aHb = kU.kV(5), aHc = kU.kV(3), aHd = kU.kV(3), kU.vJ(186 + 16 * (aHb + aHc + aHd) + 32 + 32 + 30 + 128) ? (by.iH.dd(109, kU.kV(30)), by.iH.dd(107, kU.kV(16)), by.iH.dd(108, kU.kV(30)), by.iH.dd(
			112, kU.kV(30)), by.iH.dd(111, kU.kV(30)), by.iH.dd(113, kU.vH(32)), by.iH.dd(122, kW.kX.kY(aHb)), by.iH.dd(135, kW.kX.kY(aHc)), by.iH.dd(136, kW.kX.kY(aHd)), by.iH.dd(137, kU.vH(32)), by.iH.dd(138, kU.vH(32)), by.iH.dd(
			139, kU.kV(30)), by.iH.dd(141, kU.vH(32)), by.iH.dd(142, kU.vH(32)), by.iH.dd(143, kU.vH(32)), by.iH.dd(144, kU.vH(32)), 8 === aO.aP && aO.gV().a9m(16, !0)) : ak.al.hF(0, 3267))
	}
}

function aEj() {
	var b5 = 2e4;
	this.show = function() {
		if (b6.b5 < b5) return !1;
		b5 = b6.b5 + 135e4, 2 === o3 && ae.af.mK(Math.floor(135e4))
	}
}

function vy() {
	var mR, dZ, eC, aHe, aHf, df, eg, a0t, yS, aHg, aHh, aHi, aHj;
	this.eB = 0, this.da = 0, this.k = function() {
		aHf = ao.oi, aHh = "rgba(0,100,0,0.8)", aHi = "rgba(150,0,0,0.8)", a0t = !(aHg = !0), yS = bU.f8[ao.bW], this.resize()
	}, this.resize = function() {
		dZ = Math.floor((ae.af.dW() ? .305 : .24) * b9.dX), this.da = Math.floor(.5 + .13 * dZ), dZ = Math.floor(6 * this.da), mR = n.o.dc(1, Math.floor(.8 * this.da)), aHj = Math.floor(.5 * this.da), e1.e4.font = mR, eC = dY.gap, aHe = Math
			.floor(1 + .13 * this.da), (df = document.createElement("canvas")).width = dZ, df.height = this.da, (eg = df.getContext("2d", {
				alpha: !0
			})).font = mR, n.o.textBaseline(eg, 1), n.o.textAlign(eg, 1), this.aHk()
	}, this.mj = function() {
		return ae.af.dW() && b9.dZ < 1.2 * b9.da
	}, this.mh = function() {
		this.mj() ? this.eB = b9.dZ - dZ - dY.gap : this.eB = Math.floor(jI.l9() + (b9.dZ - jI.l9() - ey.dZ - dZ) / 2 - .5 * dY.gap)
	}, this.lA = function() {
		a0t && (a0t = !1, this.aHk())
	}, this.aHk = function() {
		eg.clearRect(0, 0, dZ, this.da), eg.fillStyle = aHg ? aHh : aHi, eg.fillRect(0, 0, dZ, this.da), eg.fillStyle = ac.em, this.aHl(), this.aHm(), eg.fillStyle = bU.f8[ao.bW] >= cU.mm(ao.bW) ? ac.a1H : ac.c7, eg.fillText(n.eU.eV(yS), Math
			.floor(dZ / 2), aHj), eg.fillStyle = ac.c7, eg.fillRect(0, 0, dZ, 1), eg.fillRect(0, 0, 1, this.da), eg.fillRect(0, this.da - 1, dZ, 1), eg.fillRect(dZ - 1, 0, 1, this.da)
	}, this.aHl = function() {
		var a1Y = jW(Math.floor((cU.mp() - 1) * this.da / 9), this.da - aHe);
		eg.fillRect(0, a1Y, aHe, this.da - a1Y), eg.fillRect(dZ - aHe, a1Y, aHe, this.da - a1Y)
	}, this.aHm = function() {
		eg.fillRect(aHe, this.da - aHe, Math.floor((dZ - 2 * aHe) * bU.f8[ao.bW] / aHf), aHe)
	}, this.b8 = function() {
		0 !== bU.bV[ao.bW] && 2 !== bU.ev[ao.bW] && yS !== bU.f8[ao.bW] && (aHf = db(bU.f8[ao.bW], aHf), aHg = bU.f8[ao.bW] > yS && 10 <= bU.f8[ao.bW], yS = bU.f8[ao.bW], a0t = !0)
	}, this.eK = function() {
		0 === bU.bV[ao.bW] || ao.bA || 2 === bU.ev[ao.bW] || eL.drawImage(df, this.eB, eC)
	}
}

function vi() {
	this.ua = new a5D, this.kX = new aGb, this.k = function() {
		this.ua.k()
	}
}

function sT() {
	var dZ, da, aHn;

	function aHx(aEh, hR, aHv, aHp, d) {
		hR = aHw(aEh, hR + 1 + 2 * aHp & 3);
		! function(aEh, aEG) {
			return 1 < Math.abs(aEh % dZ - aEG % dZ) || 1 < Math.abs(aHz(aEh) - aHz(aEG))
		}(aEh, hR) && 0 === d[hR << 2] && (d[hR << 2] = aHv)
	}

	function aHz(a6) {
		return Math.floor((a6 + .5) / dZ) % da
	}

	function aHw(a6, hR) {
		return a6 + aHn[hR]
	}
	this.a7 = function(x) {
		var l, dT, m, aHo, yQ = kU;
		for (kW.ua.t1(kW.ua.sz(x)), e1.e0 = dZ = yQ.kV(12), e1.e2 = da = yQ.kV(12), aHn = [-dZ, -1, dZ, 1], e1.e3 = document.createElement("canvas"), e1.e3.width = e1.e0, e1.e3.height = e1.e2, e1.e4 = e1.e3.getContext("2d", {
				alpha: !1
			}), e1.e5 = e1.e4.getImageData(0, 0, e1.e0, e1.e2), e1.e6 = e1.e5.data, n.rr.a02(e1.e6), m = yQ.kV(12), dT = yQ.kV(5), aHo = aFP(dZ * da - 1), l = 0; l < m; l++) ! function(mr, a6, u2, aHp) {
			var l, hR, yQ = kU,
				d = e1.e6,
				aHs = a6,
				aGD = a6,
				aHt = 0,
				aHu = 1 + u2,
				aHv = 2 - u2;
			for (d[a6 << 2] = aHu, l = 0; l < mr; l++) hR = yQ.kV(2), a6 = aHw(a6, hR), d[a6 << 2] === aHu ? aHt % 2 == 1 && aHx(aGD, aHt + 2 * aHp + 3, aHv, aHp, d) : d[a6 << 2] = aHu, aHx(a6, hR, aHv, aHp, d), aHx(aGD, hR, aHv, aHp, d),
				aGD = a6, aHt = hR;
			aHw(a6, 0) === aHs ? (aHx(a6, 0, aHv, aHp, d), aHx(aHs, 0, aHv, aHp, d)) : aHw(a6, 1) === aHs && (aHx(a6, 0, aHv, aHp, d), aHx(aHs, 2, aHv, aHp, d));
			0 === mr && (aHx(aHs, 0, aHv, aHp, d), aHx(aHs, 2, aHv, aHp, d))
		}(yQ.kV(dT), yQ.kV(aHo), 1 === yQ.kV(1), 1 === yQ.kV(1));
		var eB, eC, cK, aI0, aI1, aI2, d = e1.e6,
			aI3 = !0,
			y6 = e1.iM.iO[e1.dh].y6,
			y7 = e1.iM.iO[e1.dh].y7;
		for (eC = 0; eC < da; eC++)
			for (aI0 = !0, aI1 = aI3, eB = aI2 = 0; eB < dZ; eB++) cK = 4 * eC * dZ + 4 * eB, aI2 <= eB && 0 < d[cK] && (aI1 = 2 === d[cK], aI0) && (aI0 = !1, aI1 !== aI3) ? (aI3 = aI1, aI2 = eB + 1, eB = -1) : (aI1 ? (d[cK] = y7[0], d[1 + cK] =
				y7[1], d[2 + cK] = y7[2]) : (d[cK] = y6[0], d[1 + cK] = y6[1], d[2 + cK] = y6[2]), d[3 + cK] = 255);
		e1.e4.putImageData(e1.e5, 0, 0), e1.iK = !0, e1.e8.k(), b6.bJ = !0
	}
}

function bM() {
	p1.nr(), eL.setTransform(sF, 0, 0, sF, 0, 0), eL.imageSmoothingEnabled = sF < 3, eL.drawImage(e1.e3, iu.a2G(), iu.a17()), p9.aBP.eK(), eL.drawImage(a9Z, iu.a2G(), iu.a17()), p1.eK(), eL.imageSmoothingEnabled = !1, eL.setTransform(1, 0, 0, 1, 0,
		0), fA.aBP.eK(), cf.eK(), pC.eK(), (ao.lh ? (bj.eK(), jL) : (ar.eK(), jI.eK(), jK.eK(), jL.eK(), gS.eK(), ey.eK(), iu.eK(), ei.eK(), bj.eK(), jJ.eK(), jM.eK(), bD.eK(), gO.eK(), ex.eK(), fV.eK(), pM)).eK(), aO.eK()
}

function a10(eg, dZ, da) {
	eg.clearRect(0, 0, dZ, da), eg.fillStyle = ac.c8, eg.fillRect(0, 0, dZ, da)
}

function a12(eg, dZ, da, a15) {
	eg.fillStyle = ac.c7, eg.fillRect(0, 0, dZ, a15), eg.fillRect(0, 0, a15, da), eg.fillRect(dZ - a15, 0, a15, da), eg.fillRect(0, da - a15, dZ, a15)
}

function a16(eg, eB, eC, hZ, a15, a6, aI4) {
	eg.fillStyle = ac.c7;
	var a6 = Math.floor(hZ * a6),
		eo = (a6 += (a6 - a15) % 2, Math.floor((a6 - a15) / 2)),
		hZ = Math.floor((hZ - a6) / 2);
	eg.fillRect(eB + hZ, eC + hZ + eo, a6, a15), aI4 && eg.fillRect(eB + hZ + eo, eC + hZ, a15, a6)
}

function w8() {
	var aI6, aI7, aI8, aI9, aIA, aIB, aIC, aID, aIE, aIF, aIG, aIH, aII, aIJ, aIK, aIL, aIM, aIN, aIP, aIQ, aIR, aIS, aIT, aIZ, aIa, aIO = null,
		aIV = 0,
		aIW = !1,
		aIX = new Float32Array(4),
		aIY = 0,
		l3 = 400;

	function yf() {
		aIE = Math.floor(+b9.dX), aIF = Math.floor(.5 * aIE), aIO.width = b9.dZ, aIO.height = b9.da, aIP = aIO.getContext("2d", {
			alpha: !0
		}), n.o.textAlign(aIP, 1), n.o.textBaseline(aIP, 1), aIP.imageSmoothingEnabled = !0
	}

	function aIb() {
		var l, aIg;
		for (eL.font = n.o.dc(1, 100 * aIG), aIg = 80 / Math.floor(eL.measureText(n.eU.eV(ao.og)).width), eL.font = n.o.dc(1, 100), l = ao.l4 - 1; 0 <= l; l--) aID[l] = 100 / Math.floor(eL.measureText(bU.l6[l]).width), aIC[l] = Math.min(aIg, aID[l])
	}

	function aIh(l) {
		return !by.bz.data[7].value || bU.f8[l] < 1e6 ? 1 : bU.f8[l] < 1e7 ? aIX[0] : aIX[Math.min(Math.floor(Math.log10(bU.f8[l])) - 6, 3)]
	}

	function aIf(dF) {
		aIN = !1, aIM = 1, aIK = aIL = 0, dF.clearRect(0, 0, b9.dZ, b9.da);
		for (var a2D, a2E, l, aIm, fontSize, a2F, eG = sG / sF, eH = sH / sF, ih = (b9.dZ + sG) / sF, eZ = (b9.da + sH) / sF, aIn = 0 !== bU.bV[ao.bW] && bX.bY(ao.bW), v = mc - 1; 0 <= v; v--) l = n5[v], (fontSize = Math.floor(aIJ * sF * aIh(l) *
			aIC[l] * aIA[l])) < aII || aIE <= fontSize || aI8[l] + aIA[l] > eG && aI8[l] < ih && aI9[l] + aIB[l] > eH && aI9[l] < eZ && (a2D = Math.floor(b9.dZ * (aI8[l] + aIA[l] / 2 - eG) / (ih - eG)), a2E = Math.floor(b9.da * (aI9[l] + aIB[l] /
			2 - eH) / (eZ - eH) - .1 * fontSize), aIm = bX.y2[l], dF.font = n.o.dc(1 === bU.ev[l] ? 4 : 1, fontSize), dF.fillStyle = aIo(fontSize, aIm % 2), by.bz.data[7].value ? aIp(dF, l, fontSize, a2D, a2E, aIm) : aIq(l, fontSize, a2D,
			a2E, dF), aIN = !0, 0 < aIR[l] ? function(a2D, a2E, fontSize, l, dF) {
			0 === ka[l] ? d9.b.aHY(aIQ[l]) ? (function(a2D, a2E, fontSize, player, dE, dF) {
				for (var a1Y = a2E, a1V = (dF.globalAlpha = aIy(fontSize), aIh(player) * (by.bz.data[7].value ? aIY : aID[player])), a1X = a2D - .5 * fontSize / a1V - .9 * fontSize, a8 = 0; a8 < 2; a8++) dF.fillText(d9.b.iB(dE), a1X,
					a1Y), a1X = a2D + .5 * fontSize / a1V + .9 * fontSize;
				dF.globalAlpha = 1
			}(a2D, a2E, fontSize, l, aIQ[l], dF), aIs(a2D, a2E, fontSize, 0, 0, dF)) : d9.b.aHa(aIQ[l]) ? (aJ1(a2D, a2E, fontSize, aIQ[l], 0, dF), aIs(a2D, a2E, fontSize, 0, 1, dF)) : (aJ1(a2D, a2E, fontSize, aIQ[l], 1, dF), aIs(a2D, a2E,
				fontSize, 1, 0, dF)) : aJ1(a2D, a2E, fontSize, aIQ[l], 0, dF)
		}(a2D, a2E, fontSize, l, dF) : 0 === ka[l] && aIs(a2D, a2E, fontSize, 0, 0, dF), aIn && (0 < aIR[l + ao.l4] || 0 < aIR[l + 2 * ao.l4] || 0 < aIR[l + 3 * ao.l4] || 0 < aIR[l + 4 * ao.l4]) && function(a2D, a2E, fontSize, l, dF) {
			var a2, dI = -1;
			for (a2 = 4; 1 <= a2; a2--) 0 < aIR[l + a2 * ao.l4] && dI++;
			for (a2 = 1; a2 < 5; a2++) 0 < aIR[l + a2 * ao.l4] && (! function(a2D, a2E, fontSize, a2, l, aIw, bo, dF) {
				var dH;
				if (1 === a2) {
					l = aIQ[l + ao.l4];
					if (!d9.b.aHZ(l)) return function(a2D, a2E, fontSize, dE, aIw, dF) {
						dF.globalAlpha = aIy(fontSize);
						a2D -= .534 * aIw * fontSize, aIw = a2E + 1.59 * fontSize;
						dF.font = n.o.dc(0, .785 * fontSize), dF.fillText(d9.b.iB(dE), a2D, aIw), dF.globalAlpha = 1
					}(a2D, a2E, fontSize, l, aIw, dF);
					dH = d9.d.hd[l - 1024 + d9.b.dD]
				} else dH = 2 === a2 ? gO.aJ3()[4].df[+(bo < 255)] : (3 === a2 ? gO.aJ3()[5] : gO.aJ3()[6]).df[0];
				l = d9.d.he, bo = .8 * fontSize / l, a2 = a2D - .5 * bo * l - .534 * aIw * fontSize, a2D = a2E + 1.4 * bo * l;
				dF.setTransform(bo, 0, 0, bo, a2, a2D), dF.globalAlpha = aIy(fontSize), dF.drawImage(dH, 0, 0), dF.globalAlpha = 1, dF.setTransform(1, 0, 0, 1, 0, 0)
			}(a2D, a2E, fontSize, a2, l, dI, aIR[l + a2 * ao.l4], dF), dI -= 2)
		}(a2D, a2E, fontSize, l, dF), (a2F = aIG * fontSize) < aII || (dF.font = n.o.dc(1, a2F), a2E += Math.floor(.78 * fontSize), by.bz.data[7].value ? aIq(l, a2F, a2D, a2E, dF) : aIp(dF, l, a2F, a2D, a2E, aIm)))
	}

	function aIq(l, fontSize, eB, eC, dF) {
		var ___id = l;
		dF.fillText(bU.l6[l], eB, eC), l < ao.cW && 2 !== bU.ev[l] || (l = fontSize / aID[l], dF.fillRect(eB - .5 * l, eC + n.o.iC * fontSize, l, Math.max(1, .1 * fontSize)));
		by.bz.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (dF.fillStyle = utils.textStyleBasedOnDensity(___id)), dF.fillText(utils.getDensity(___id), eB, eC + fontSize));
	}

	function aIp(dF, l, fontSize, a2D, a2E, aIm) {
		var ___id = l;
		l = n.eU.eV(bU.f8[l]);
		aIm >> 1 & 1 ? (dF.lineWidth = .05 * fontSize, dF.strokeStyle = aIo(fontSize, aIm % 2), dF.strokeText(l, a2D, a2E)) : (1 < aIm && (dF.lineWidth = .12 * fontSize, dF.strokeStyle = aIo(fontSize, aIm), dF.strokeText(l, a2D, a2E)), dF.fillText(l,
			a2D, a2E));
		by.bz.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (dF.fillStyle = utils.textStyleBasedOnDensity(___id)), dF.fillText(utils.getDensity(___id), a2D, a2E + fontSize))
	}

	function aIs(a2D, a2E, fontSize, aIw, aIx, dF) {
		var lQ = .95 * fontSize / aIT,
			a2D = a2D - .5 * lQ * aIS + .8 * aIw * fontSize,
			aIw = a2E - 1.76 * lQ * aIT - (.35 - n.o.iC + .7) * aIx * fontSize;
		dF.setTransform(lQ, 0, 0, lQ, a2D, aIw), dF.globalAlpha = aIy(fontSize), dF.drawImage(d7.get(4), 0, 0), dF.globalAlpha = 1, dF.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJ1(a2D, a2E, fontSize, dE, aIw, dF) {
		var hZ, a1X, lQ;
		dF.globalAlpha = aIy(fontSize), d9.b.aHZ(dE) ? (hZ = d9.d.he, dF.setTransform(lQ = 1.1 * fontSize / hZ, 0, 0, lQ, a1X = a2D - .5 * lQ * hZ - .8 * aIw * fontSize, lQ = a2E - 1.55 * lQ * hZ), dF.drawImage(d9.d.hd[dE - 1024 + d9.b.dD], 0, 0), dF
			.setTransform(1, 0, 0, 1, 0, 0)) : (a1X = a2D - .8 * aIw * fontSize, lQ = a2E - (.35 - n.o.iC + 1) * fontSize, dF.fillText(d9.b.iB(dE), a1X, lQ)), dF.globalAlpha = 1
	}

	function aIo(fontSize, aIm) {
		return aIF <= fontSize && fontSize < aIE ? dO.a3r[aIm] + aIy(fontSize).toFixed(3) + ")" : dO.a3s[aIm]
	}

	function aIy(fontSize) {
		return aIF <= fontSize && fontSize < aIE ? 1 - (fontSize - aIF) / (aIE - aIF) : 1
	}

	function aJD(a1V, dZ) {
		return 1 + Math.floor(aIH * a1V * dZ)
	}

	function aJA(l) {
		for (var left = aI8[l], v = aI8[l] - bU.qa[l] - 1; 0 <= v; v--)
			if (!aJE(l, --left, aI9[l], aIB[l])) {
				left++;
				break
			} var right = aI8[l];
		for (v = bU.qc[l] - aI8[l] - aIA[l]; 0 <= v; v--)
			if (!aJE(l, ++right + aIA[l] - 1, aI9[l], aIB[l])) {
				right--;
				break
			} var eB = Math.floor((left + right) / 2),
			top = aI9[l];
		for (v = aI9[l] - bU.qb[l] - 1; 0 <= v; v--)
			if (!aJF(l, eB, --top, aIA[l])) {
				top++;
				break
			} var bottom = aI9[l];
		for (v = bU.qd[l] - aI9[l] - aIB[l]; 0 <= v; v--)
			if (!aJF(l, eB, ++bottom + aIB[l] - 1, aIA[l])) {
				bottom--;
				break
			} var eC = Math.floor((top + bottom) / 2);
		aJ7(l, eB, eC, aIA[l], aIB[l]) && (aI8[l] = eB, aI9[l] = eC)
	}

	function aJ7(player, eB, eC, dZ, da) {
		hR = Math.floor(.2 * dZ);
		for (var hR, a2 = eB + dZ - 1; eB <= a2; a2--)
			if (!aJE(player, a2, eC, da)) return;
		for (a2 = eC + da - 1 - (hR = (hR = Math.floor(.25 * da)) < 1 ? 1 : hR); eC + hR <= a2; a2--)
			if (!aJF(player, eB, a2, dZ)) return;
		return 1
	}

	function aJE(player, eB, eC, da) {
		return bX.a6V(player, 4 * (eC * e1.e0 + eB)) && bX.a6V(player, 4 * ((eC + da - 1) * e1.e0 + eB))
	}

	function aJF(player, eB, eC, dZ) {
		return bX.a6V(player, 4 * (eC * e1.e0 + eB)) && bX.a6V(player, 4 * (eC * e1.e0 + eB + dZ - 1))
	}
	this.k = function() {
		if (l3 = 0 === (l3 = by.bz.data[11].value) ? 280 : 1 === l3 ? 187 : 112, aIN = !1, aIJ = .88, aIG = .5, aIH = 1.8, aII = 12 - 3 * by.bz.data[9].value, aI7 = aI6 = 0, aI8 = new Uint16Array(ao.l4), aI9 = new Uint16Array(ao.l4), aIA =
			new Uint16Array(ao.l4), aIB = new Uint16Array(ao.l4), aIC = new Float32Array(ao.l4), aID = new Float32Array(ao.l4), aIQ = new Uint16Array(2 * ao.l4), aIR = new Uint8Array(5 * ao.l4), aIZ = new Uint8Array(ao.l4), aIa = new Uint8Array(
				ao.l4), aIO = aIO || document.createElement("canvas"), yf(), aIL = aIK = 0, aIM = 1, by.bz.data[7].value) {
			var l, aIg;
			for (aIb(), eL.font = n.o.dc(1, 100), aIg = 100 / Math.floor(eL.measureText("900 000").width), l = ao.l4 - 1; 0 <= l; l--) aIC[l] = Math.min(aIg, 2 * aID[l]);
			aIY = aIg, aIX[0] = 100 / (aIg * Math.floor(eL.measureText("5 000 000").width)), aIX[1] = 100 / (aIg * Math.floor(eL.measureText("50 000 000").width)), aIX[2] = 100 / (aIg * Math.floor(eL.measureText("500 000 000").width)), aIX[3] =
				100 / (aIg * Math.floor(eL.measureText("1 000 000 000").width))
		} else aIb();
		! function() {
			var l;
			for (l = ao.l4 - 1; 0 <= l; l--) bU.bp[l] < 12 ? (aI8[l] = bU.qa[l] + 1, aI9[l] = bU.qb[l] + 1, aIA[l] = 1, aIB[l] = 1) : (aI8[l] = bU.qa[l], aI9[l] = bU.qb[l] + 1, aIA[l] = 4, aIB[l] = 2);
			if (ao.bA)
				for (l = 0; l < ao.cW; l++) aIA[l] = 0;
			aIS = d7.get(4).width, aIT = d7.get(4).height
		}()
	}, this.aHJ = function(a6, aEa) {
		aEa > 18 * bU.bp[a6] ? (aIa[a6] = 6, bX.y2[a6] = 2 + bX.y2[a6] % 2) : (aIZ[a6] = 4, (bX.y2[a6] < 2 || 3 < bX.y2[a6]) && (bX.y2[a6] = 6 + bX.y2[a6] % 2))
	}, this.cg = function(a6, aEa) {
		aEa > 6 * bU.bp[a6] ? (aIa[a6] = 6, bX.y2[a6] = 4 + bX.y2[a6] % 2) : (aIZ[a6] = 4, (bX.y2[a6] < 4 || 5 < bX.y2[a6]) && (bX.y2[a6] = 8 + bX.y2[a6] % 2))
	}, this.resize = function() {
		yf(), aIf(aIP)
	}, this.zQ = function() {
		for (var l = 0; l < ao.cW; l++) bU.qc[l] - bU.qa[l] != 3 || bU.qd[l] - bU.qb[l] != 3 ? (aI8[l] = bU.qa[l] + (bU.qc[l] !== bU.qa[l] ? 1 : 0), aI9[l] = bU.qb[l], aIA[l] = 1, aIB[l] = 1) : (aI8[l] = bU.qa[l], aI9[l] = bU.qb[l] + 1, aIA[l] =
			4, aIB[l] = 2)
	}, this.xZ = function(player, b4, aIi) {
		! function(player, b4, aIi) {
			player += b4 * ao.l4;
			0 === b4 ? aIQ[player] === aIi && 0 < aIR[player] ? aIR[player] = 0 : (aIQ[player] = aIi, aIR[player] = d9.b.aHY(aIi) ? 255 : 64) : 1 === b4 ? (aIR[player] = 64, aIQ[player] = aIi) : aIR[player] = aIi
		}(player, b4, aIi), 2 === ao.aq && this.lA(!0)
	}, this.eK = function() {
		aIN && (1 !== aIM ? (eL.imageSmoothingEnabled = !0, eL.setTransform(aIM, 0, 0, aIM, 0, 0), eL.drawImage(aIO, -aIK / aIM, -aIL / aIM), eL.setTransform(1, 0, 0, 1, 0, 0), eL.imageSmoothingEnabled = !1) : eL.drawImage(aIO, -aIK, -aIL))
	}, this.aFL = function(nb, nc) {
		aIK += nb, aIL += nc
	}, this.eE = function(nb, nc) {
		cf.aFL(nb, nc)
	}, this.zoom = function(a04, i2, i3) {
		aIM *= a04, aIK = (aIK + i2) * a04 - i2, aIL = (aIL + i3) * a04 - i3
	}, this.lA = function(j0) {
		return !(!aIW && !j0 && b6.b5 < aIV + (1 === aIM && 0 === aIK && 0 === aIL && (ao.pQ() || ao.bA || 2 === ao.aq) ? 1e3 : l3) || (aIW = !1, aIV = b6.b5, aIf(aIP), 0))
	}, this.a2H = function(l) {
		return aIh(l) * aIC[l]
	}, this.aIl = function(player) {
		return aIC[player]
	}, this.b8 = function() {
		b6.f2() % 10 == 9 && (aIW = ao.pS() && !ao.pQ()), !ao.pQ() && 4 <= ++aI7 && function() {
			var l, v, a8;
			for (aI7 = 0, a8 = 4; 1 <= a8; a8--)
				for (v = mc - 1; 0 <= v; v--) l = n5[v] + a8 * ao.l4, 0 < aIR[l] && aIR[l] < 255 && aIR[l]--;
			if (2 !== ao.aq)
				for (v = mc - 1; 0 <= v; v--) l = n5[v], 0 < aIR[l] && aIR[l] < 255 && aIR[l]--
		}();
		for (var m = Math.floor(.1 * mc), l = aI6 + (m = mc < (m = m < 8 ? 8 : m) ? mc : m) - 1; aI6 <= l; l--) ! function(l) {
			var a1V = aIh(l) * aIC[l];
			0 < aIA[l] && aJ7(l, aI8[l], aI9[l], aIA[l], aIB[l]) ? ! function(l) {
				for (var eB, eC, dZ, da, ge = !1, a8 = 0; a8 < 8; a8++) {
					if (dZ = aIA[l] + 2, da = aIB[l] + 2, dZ > bU.qc[l] - bU.qa[l] + 1 || da > bU.qd[l] - bU.qb[l] + 1) return ge;
					if (eB = aI8[l] - 1, eC = aI9[l] - 1, !aJ7(l, eB, eC, dZ, da)) return ge;
					aI8[l] = eB, aI9[l] = eC, aIA[l] = dZ, aIB[l] = da, ge = !0
				}
				return ge
			}(l) && function(l, a1V) {
				for (var eB, eC, dZ, da, ge = !1, a84 = aIA[l], tQ = 1 + Math.floor(.02 * a84), a8 = 1; a8 < 5; a8++) {
					if ((dZ = a84 + a8 * tQ) > bU.qc[l] - bU.qa[l] + 1) return ge;
					if ((da = aJD(a1V, dZ)) > bU.qd[l] - bU.qb[l] + 1) return ge;
					eB = bU.qa[l] + Math.floor(Math.random() * (bU.qc[l] - bU.qa[l] + 2 - dZ)), eC = bU.qb[l] + Math.floor(Math.random() * (bU.qd[l] - bU.qb[l] + 2 - da)), aJ7(l, eB, eC, dZ, da) && (aI8[l] = eB, aI9[l] = eC, aIA[l] = dZ,
						aIB[l] = da, ge = !0)
				}
				return ge
			}(l, a1V) && aJA(l) : ! function(l, a1V) {
				var da, eB = aI8[l] + 1,
					eC = aI9[l] + 1,
					dZ = aIA[l] - 2;
				for (;;) {
					if (dZ < 1) {
						aIA[l] = 0;
						break
					}
					if (da = aJD(a1V, dZ), aJ7(l, eB, eC, dZ, da)) return aI8[l] = eB, aI9[l] = eC, aIA[l] = dZ, aIB[l] = da, 1;
					eB++, eC++, dZ -= 2
				}
				return
			}(l, a1V) ? function(l, a1V) {
				var eB, eC, dZ, da, a8, hP, hW = bU.qc[l] - bU.qa[l] + 1,
					ps = Math.floor(.02 * hW);
				for (hP = -6 * (ps = ps < 1 ? 1 : ps), a8 = hW; hP <= a8; a8 -= ps)
					if (da = aJD(a1V, dZ = 0 < a8 ? a8 : 1), eB = bU.qa[l] + Math.floor(Math.random() * (bU.qc[l] - bU.qa[l] + 2 - dZ)), eC = bU.qb[l] + Math.floor(Math.random() * (bU.qd[l] - bU.qb[l] + 2 - da)), aJ7(l, eB, eC, dZ, da))
						return aI8[l] = eB, aI9[l] = eC, aIA[l] = dZ, aIB[l] = da
			}(l, a1V) : aJA(l)
		}(n5[l % mc]);
		aI6 = (aI6 + m) % mc
	}, this.aGu = function() {
		var l, a6, dz, a05;
		if (b6.f2() % 4 == 1)
			for (l = mc - 1; 0 <= l; l--) a6 = n5[l], bX.y2[a6] < 2 || ((dz = Math.max(aIZ[a6] - 1, 0)) === (a05 = Math.max(aIa[a6] - 1, 0)) ? 0 === dz && (bX.y2[a6] %= 2) : 0 === a05 && bX.y2[a6] < 6 && (bX.y2[a6] += 4), aIZ[a6] = dz, aIa[a6] =
				a05)
	}, this.f0 = function(player) {
		var l = player + 2 * ao.l4,
			bo = aIR[l];
		return 0 < bo && (ar.sf(50, player), aIR[l] = 0, 255 === bo)
	}, this.aJ6 = function(player) {
		return 255 === aIR[player + 2 * ao.l4]
	}
}

function wd() {
	this.a4m = 1050, this.k = function() {
		o3 = 2, uk = 23, fu = "31 Jul 2024 [1.97.6]", xu = true, a3m = function() {
			try {
				return window.self !== window.top
			} catch (i) {
				return !0
			}
		}(), zp = (new Date).getTime() % 1024
	}, this.ws = 0
}

function wY() {
	this.aJH = -1, this.k = function() {
		this.aJH = -1
	}, this.b8 = function() {
		-1 !== this.aJH && bc.lk.n2(this.aJH)
	}, this.fa = function(player) {
		return !!bD.fY(player) && (1 === mc ? (this.aJH = player, ao.ap && ao.bA && ao.on.b8()) : (ar.sW(player, player === ao.bW ? 21 : 22), 8 === ao.bi ? this.aJH = 1 - player : ao.ap ? (aAt(player), aAq(), ao.bA && ao.on.b8()) : this.aJI(
			player)), !0)
	}, this.xd = function(player) {
		1 === ao.aq && 0 !== bU.bV[player] && 2 !== bU.ev[player] && (8 === ao.bi ? this.aJH = 1 - player : this.aJI(player)), ao.mz--, ao.eu--, ar.sW(player, 4), n.br.xB(2) && ey.lA(!0)
	}, this.aJI = function(player) {
		ao.bA ? (aAt(player), aAq()) : pH.et(player)
	}
}

function wO() {
	function a4v(i) {
		oR.hD = !0, oR.aJO(JSON.parse(i.target.result)), oR.bb()
	}

	function aJU(x, min, max, aJc) {
		return "string" != typeof x || x.length < min ? aJc : x.length > max ? x.substring(0, max) : x
	}

	function aJQ(aC, min, max) {
		return aC = "number" == typeof aC ? Math.floor(aC) : min, Math.min(Math.max(aC, min), max)
	}

	function aJS(aC, a0o) {
		return "boolean" == typeof aC ? aC : a0o
	}

	function aJW(aC, m, max, aJe) {
		var l, a5, mr;
		if (!Array.isArray(aC) || aC.length < 1) return null;
		for (a5 = new(8 === aJe ? Uint8Array : Uint16Array)(m), mr = aC.length, l = 0; l < m; l++) a5[l] = aJQ(aC[l % mr], 0, max);
		return a5
	}
	this.hD = !1, this.iM = null, this.rD = function() {
		this.hD = !1, this.iM = null
	}, this.aJJ = function() {
		this.iM.a6K && this.iM.aJK && (this.iM.a6K[0] = n.color.zq(by.al.sS())), ao.op(this.iM.aJL, 0, this.aJM(), this.iM.dk, !1, !1)
	}, this.aJM = function() {
		return [{
			name: this.iM.aJN ? by.bz.data[122].value : this.iM.z2[0],
			ur: [0, 0, 0],
			uq: 0
		}]
	}, this.xg = function(a4s) {
		var a4u = new FileReader;
		a4u.onload = a4v, a4u.readAsText(a4s)
	}, this.aJO = function(tj) {
		this.iM = {}, this.iM.aJP = aJQ(tj.numberPlayers, 1, 512), this.iM.aJR = aJQ(tj.modeID, 0, 1), this.iM.dh = aJQ(tj["gMap.mapID"], 0, e1.iJ - 1), this.iM.dp = aJQ(tj.seedMap, 0, 16383), this.iM.aJL = aJQ(tj.seedSpawn, 0, 16383), this.iM
			.ot = aJS(tj.selectableSpawn, !1), this.iM.aJN = aJS(tj.selectableName, !1), this.iM.aJK = aJS(tj.selectableColor, !1), e1.iM.iO[e1.ia()].name = this.iM.aJT = aJU(tj.mapName, 1, 25, "Custom Map"), this.iM.aEC = function(aC) {
				var l, m;
				if (!Array.isArray(aC) || aC.length < 1) return [];
				for (m = aC.length, l = 0; l < m; l++) aC[l] = aJU(aC[l], 0, 100, "");
				return aC
			}(tj.description), this.iM.aAy = aJW(tj.playerX, this.iM.aJP, 4096, 16), this.iM.aB6 = aJW(tj.playerY, this.iM.aJP, 4096, 16), this.iM.a3x = aJW(tj.playerTeam, this.iM.aJP, 8, 8), this.iM.oS = aJW(tj.playerStrength, this.iM.aJP, 5,
			8), this.iM.a6K = function(aC, m) {
				var l, a5, mr;
				if (!Array.isArray(aC) || aC.length < 1) return null;
				for (a5 = new Array(m), mr = aC.length, l = 0; l < m; l++) a5[l] = aJW(aC[l % mr], 3, 63, 8);
				return a5
			}(tj.playerColor, this.iM.aJP), this.iM.z2 = function(aC, m) {
				var l, a5, mr;
				if (!Array.isArray(aC) || aC.length < 1) return null;
				for (a5 = new Array(m), mr = aC.length, l = 0; l < m; l++) a5[l] = aJU(aC[l % mr], 3, 26, "Bot");
				return a5
			}(tj.playerName, this.iM.aJP), this.iM.aJZ = "string" == typeof tj.mapBase64 ? tj.mapBase64 : "", this.iM.aJN = this.iM.aJN || !this.iM.z2, this.iM.dk = 0 === this.iM.aJR ? 7 : 2 === this.iM.aJR ? 9 : 6, this.iM.aAy = this.iM.aB6 ?
			this.iM.aAy : null
	}, this.bb = function() {
		! function(x) {
			var df, oB, aJb = "data:image/png;base64,";
			if (x.length <= aJb.length) return;
			oR.iM.dh = 0, oR.iM.dp = 0, e1.e7(0, 0), x.substring(0, aJb.length) !== aJb && (x = aJb + x);
			return (df = new Image).onload = function() {
				e1.e0 = df.width, e1.e2 = df.height, 4096 < e1.e0 || 4096 < e1.e2 || e1.e0 < 10 || e1.e2 < 10 ? (e1.e7(0, 0), alert("Image w & h must be between 10 and 4096.")) : (e1.dh = e1.ia(), e1.di = 0, e1.e3.width = e1.e0, e1.e3
					.height = e1.e2, e1.e4.drawImage(df, 0, 0), oB = e1.e4.getImageData(0, 0, e1.e0, e1.e2), e1.e6 = oB.data)
			}, df.src = x, oR.iM.aJZ = "", 1
		}(this.iM.aJZ) && e1.e7(this.iM.dh, this.iM.dp)
	}, this.aJf = function() {
		for (var max = 0, m = this.iM.aJP, l = 0; l < m; l++) this.iM.a3x[l] > max && (max = this.iM.a3x[l]);
		return Math.max(0, max - 1)
	}
}

function a0g() {
	aJg() ? (aJh(), a0I !== ao.l4 && aJi()) : a0d()
}

function aJi() {
	aD8(), aD9(bU.f9[a0I]), aD9(bU.qB[a0I]), aDA(bU.n4[a0I]), aDB(bU.qB[a0I]), aDB(bU.aBA[a0I]), aDC(), aDD()
}

function aJh() {
	a0Q = !0, f6.a7g(a0F, a0E, a0G), bU.bp[a0F] += a0J, aD5(), aJj()
}

function aJg() {
	return (a0I === ao.l4 ? aJk : aJl)()
}

function aJl() {
	var aJm = a0J * ao.oj,
		aJn = aJo(),
		aJp = aJq(),
		aJn = aJm + 2 * aJn + aJp,
		aJs = a0H * a0J;
	return aJn < aJs ? (a0G -= aJn, aJt(aJn - aJm, aJp), !0) : (a0G -= aJs, aJt(aJs - aJm, aJp), !1)
}

function aJt(aJs, aJp) {
	if (0 < aJp) {
		if (!(aJp <= aJs)) return f6.a7a(a0I, a0F, aJp - aJs), void(aJs = 0);
		f6.a7a(a0I, a0F, 0), aJs -= aJp
	}
	aJs = aF(aJs, 2), bU.f8[a0I] >= aJs ? bU.f8[a0I] -= aJs : bU.f8[a0I] = 0
}

function aJq() {
	return f6.a32(a0I, a0F)
}

function aJo() {
	return hS.hT(a0J * bU.f8[a0I], 1 + hS.hT(10 * bU.bp[a0I], 16))
}

function aJk() {
	return a0G -= a0J * ao.oj, !0
}

function aJj() {
	for (var l = a0J - 1; 0 <= l; l--) bU.n4[a0F].push(a0L[l]), bU.f9[a0F].push(a0L[l]), bX.a0k(a0L[l], a0F)
}

function wl() {
	this.a1L = function() {
		return 2 === ae.id ? 4 : ae.af.dW() ? 2 : 1
	}
}

function wR() {
	var df, eg, aJu, font, dU = 0,
		aJv = !1,
		aJw = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aJx = 5;

	function a1c() {
		if (aJv) {
			var l, m = aJw.length,
				jU = Math.floor(.5 * aJu.da),
				da = m * jU,
				eB = Math.floor(Math.floor(aJu.eB) + .3 * aJu.dZ - .5),
				eC = Math.floor(Math.floor(aJu.eC) - da),
				dZ = Math.floor(.4 * aJu.dZ + 2.5);
			for (eL.fillStyle = ac.lC, eL.fillRect(eB, eC, dZ, da), eL.fillStyle = ac.lE, eL.fillRect(eB, eC + aJx * jU, dZ, jU), eL.fillStyle = ac.c7, eL.fillRect(eB, eC, 2, da), eL.fillRect(eB, eC, dZ, 2), eL.fillRect(eB + dZ - 2, eC, 2, da), l =
				1; l < m; l++) eL.fillRect(eB, eC + l * jU, dZ, 2);
			for (eL.fillStyle = ac.c7, n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.font = n.o.dc(0, .6 * jU), eB += .5 * dZ, l = 0; l < m; l++) eL.fillText(aK8(l), eB, eC + (l + .6) * jU)
		}
		eL.drawImage(df, Math.floor(aJu.eB), Math.floor(aJu.eC))
	}

	function np(aFU) {
		var eB, eG, eH, jU;
		eg.clearRect(0, 0, Math.floor(aJu.dZ), Math.floor(aJu.da)), eg.fillStyle = ac.lC, eg.fillRect(0, 0, Math.floor(aJu.dZ), Math.floor(aJu.da)), ao.lh && (eg.fillStyle = ac.lE, eg.fillRect(0, 0, Math.floor(.3 * aJu.dZ), Math.floor(aJu.da))), eg
			.fillStyle = ac.c7, eg.fillText("Hide UI", .15 * aJu.dZ, .5 * aJu.da), eg.fillRect(Math.floor(.3 * aJu.dZ - .5), 0, 2, Math.floor(aJu.da)), eB = .5 * aJu.dZ, eg.fillText("Replay Speed", eB, .31 * aJu.da), eg.fillText(aK8(aJx), eB, .69 *
				aJu.da), eg.fillRect(Math.floor(.7 * aJu.dZ - .5), 0, 2, Math.floor(aJu.da)), aFU.pR ? (eB = Math.floor(.02 * aJu.dZ), aFU = Math.floor(.025 * aJu.dZ), eG = Math.floor(.85 * aJu.dZ - eB - .5 * aFU), eH = Math.floor(.25 * aJu.da), jU =
				Math.floor(aJu.da) - 2 * eH, eg.fillRect(eG, eH, eB, jU), eg.fillRect(eG + eB + aFU, eH, eB, jU)) : function() {
				var dZ = Math.floor(.46 * aJu.da),
					da = Math.floor(.23 * aJu.da),
					eB = Math.floor(.85 * aJu.dZ - .5 * dZ + dZ / 12),
					eC = Math.floor(.5 * aJu.da - da);
				eg.beginPath(), eg.moveTo(eB, eC), eg.lineTo(eB + dZ, eC + da), eg.lineTo(eB, eC + (da << 1)), eg.fill()
			}(), eg.fillRect(0, 0, Math.floor(aJu.dZ), 2), eg.fillRect(0, 0, 2, Math.floor(aJu.da)), eg.fillRect(0, Math.floor(aJu.da) - 2, Math.floor(aJu.dZ), 2), eg.fillRect(Math.floor(aJu.dZ - 2), 0, 2, Math.floor(aJu.da))
	}

	function aK8(l) {
		return 5 === l ? "Normal" : "" + aJw[l]
	}
	this.pR = !1, this.k = function() {
		ao.fX && (aJx = 5, this.pR = !1, aJv = !1, aJu = new aBh([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.zI = function() {
		return aJw[aJx]
	}, this.a17 = function() {
		return aJu.eC
	}, this.a1I = function(aH1) {
		return !!ao.fX && aJu.eB + aJu.dZ > b9.dZ - aH1 - dY.gap
	}, this.resize = function() {
		ao.fX && (aJu.resize(), aJu.eC -= (vb.a1L() - 1) * dY.gap, font = n.o.dc(0, .3 * aJu.da), (df = document.createElement("canvas")).width = Math.floor(aJu.dZ), df.height = Math.floor(aJu.da), (eg = df.getContext("2d", {
			alpha: !0
		})).font = font, n.o.textAlign(eg, 1), n.o.textBaseline(eg, 1), np(this))
	}, this.a9C = function(aJy) {
		0 === ao.aq || aO.hY() || aJy !== ao.lh && (ao.lh = aJy, bj.resize(), b6.bJ = !0, ao.fX) && (dU = b6.b5 + 2e3, np(this))
	}, this.eA = function(eB, eC) {
		if (!ao.fX) return !1;
		if (eB < aJu.eB || eC < aJu.eC || eB > aJu.eB + aJu.dZ) return aJv && function(aFU, eB, eC) {
			var m = aJw.length,
				jU = Math.floor(.5 * aJu.da),
				da = m * jU,
				eG = Math.floor(Math.floor(aJu.eB) + .3 * aJu.dZ - .5),
				da = Math.floor(Math.floor(aJu.eC) - da),
				dZ = Math.floor(.4 * aJu.dZ + 2.5);
			return aJv = !1, b6.bJ = !0, eB < eG || eG + dZ < eB || eC < da || (aJx = ld(0, Math.floor((eC - da) / jU), m - 1), np(aFU)), !0
		}(this, eB, eC);
		if ((eB -= aJu.eB) < .3 * aJu.dZ) aJv = !1, this.a9C(!ao.lh);
		else {
			if (eB < .7 * aJu.dZ) return aJv = !aJv, b6.bJ = !0;
			this.a9D(!1)
		}
		return !0
	}, this.a9D = function(aK0) {
		2 === ao.aq ? (this.a9C(!1), aO.aQ(3)) : (aJv = !1, this.pR = !this.pR, this.pR ? (bD.bE && bD.fW(), ae.af.setState(1)) : aK0 || bD.aDS(), b6.bJ = !0, np(this))
	}, this.a9E = function() {
		this.pR = !1, bD.aDS(), b6.bJ = !0, np(this)
	}, this.a8y = function(eB, eC) {
		return !!ao.lh && (bD.eA(eB, eC) || (ao.fX ? ((b6.b5 > dU || !this.eA(eB, eC)) && iu.eA(eB, eC), b6.bJ = !0, dU = b6.b5 + 2e3) : iu.eA(eB, eC)), !0)
	}, this.b8 = function() {
		ao.fX && ao.lh && b6.b5 > dU - 1e3 && b6.b5 < dU && (b6.bJ = !0)
	}, this.sg = function() {
		ao.fX && (this.pR = !1, b6.bJ = !0, np(this))
	}, this.eK = function() {
		if (ao.fX) {
			if (ao.lh) {
				if (b6.b5 > dU) return;
				if (b6.b5 > dU - 1e3) return eL.globalAlpha = ld(0, (1e3 - (b6.b5 - (dU - 1e3))) / 1e3, 1), a1c(), void(eL.globalAlpha = 1)
			}
			a1c()
		}
	}
}

function a8Y() {
	this.a3K = function(aN) {
		var a3i = kU.kV(3),
			a4i = bf.cM.b8(kU.kV(16), kU.kV(20));
		ak.h8.a4h(aN, a4i, a3i), 0 < a3i || (0 === aN && 0 === by.bz.data[105].value.length ? ak.h8.a4j(0) : ak.a8W.yw(aN), 4 === ak.al.gw(aN).o1() ? 6 === aW.aX() && ak.eI.zo(aN) : 5 !== ak.al.gw(aN).o1() || 8 !== aW.aX() && 10 !== aW.aX() || ak
			.gz.a3d())
	}, this.a3N = function() {
		var id = kU.kV(6);
		0 === id ? (jG.aDi || ak.h8.a4j(1), 8 === aO.aP && aO.gV().aAN()) : 21 === id ? 8 === aO.aP && aO.gV().a9m(17) : 22 === id && (by.iH.dd(106, by.bz.data[110].value), by.iH.dd(110, ""), 8 === aO.aP) && aO.gV().a9m(15)
	}
}

function aBQ() {
	this.uN = null, this.qD = 512, this.qF = 8, this.qC = 0, this.a1x = 0, this.s5 = new Uint16Array(this.qD), this.aC9 = new Uint32Array(this.qD), this.aCA = new Uint32Array(this.qD), this.s4 = new Uint32Array(this.qD), this.aCB = new Uint16Array(
			this.qD), this.s6 = new Uint32Array(this.qD), this.aC7 = new Uint16Array(this.qD), this.a4L = new Uint16Array(this.qD), this.aCC = new Uint8Array(this.qD), this.qE = new Uint8Array(ao.l4), this.a5a = new Uint16Array(this.qF * ao.l4), this
		.k = function() {
			this.a1x = 0, this.qC = 0, this.uN = new Uint8Array(e1.e0 + e1.e2), this.qE.fill(0)
		}, this.qL = function(player) {
			var m = this.qC,
				tx = p2.tu(cb.qO[0]),
				vC = this.qE[player],
				aDJ = (player << 3) + vC;
			bU.bV[player] = 2, this.s5[m] = aDJ, this.aC9[m] = tx, this.s4[m] = tx, this.aCA[m] = p2.tu(cb.qO[1]), this.aCB[m] = 0, this.s6[m] = cb.cc[0], this.aC7[m] = fA.y3.qL(m, p2.aCE(tx)), this.a4L[m] = this.a1x, this.aCC[m] = cb.qO[2], this
				.a1x = this.a1x + 1 & 1023, this.a5a[aDJ] = m, this.qE[player] = vC + 1, this.qC++
		}, this.xT = function() {
			var a5Z = cb.qO[3];
			this.aC9[a5Z] = this.s4[a5Z], this.aCA[a5Z] = p2.tu(cb.qO[1]), this.aCB[a5Z] = 0, this.aCC[a5Z] = cb.qO[2]
		}, this.b8 = function() {
			if (b6.f2() % 5 == 3) {
				fA.aBS.b8(), ! function(aFU) {
					var l, ty, aKC, aKD, aKE, tx, aKI, aKJ, hR, bm, aC9 = aFU.aC9,
						aCA = aFU.aCA,
						s4 = aFU.s4,
						s6 = aFU.s6,
						aCB = aFU.aCB,
						aC7 = aFU.aC7,
						aFU = aFU.qC,
						sC = e1.e0 << 4;
					for (l = aFU - 1; 0 <= l; l--) aKC = s4[l], ty = aCA[l], aKC !== ty && (tx = aC9[l], aKI = ty % sC - (aKE = tx % sC), aKJ = ~~((ty + .5) / sC) - (tx = ~~((tx + .5) / sC)), hR = ~~Math.sqrt(aKI * aKI + aKJ * aKJ + .5), bm =
						4e5 + 2e4 * ~~Math.sqrt(.5 + (Math.sqrt(s6[l] + .5) << 4)), 65535 <= (bm = aCB[l] + Math.max(~~((.5 + bm) / hR), 1)) ? s4[l] = aKD = ty : (aCB[l] = bm, s4[l] = aKD = aKE + hS.hT(bm * aKI, 65536) + sC * (tx + hS.hT(bm *
							aKJ, 65536))), aC7[l] = fA.y3.aHS(aC7[l], aKC, aKD))
				}(this), ! function(aFU) {
					var l, cK, mr, a8, a2, aKL, i4, aKM, aEh, aFI, eG, eH, aKN, a5e, aKO, aEG, tx, aKR, m = aFU.qC,
						s4 = aFU.s4,
						s5 = aFU.s5,
						s6 = aFU.s6,
						y3 = fA.y3.y3,
						zL = y3.length,
						aHP = fA.y3.aHP,
						sC = e1.e0 << 4,
						aKS = ao.fC,
						aKT = dO.lN,
						bm = (m - 1) * (b6.f2() % 2);
					for (l = 0; l < m; l++) {
						for (cK = Math.abs(l - bm), tx = s4[cK], mr = p2.aCE(tx), aEh = s5[cK] >> 3, eG = tx % sC, eH = ~~((tx + .5) / sC), tx = s6[cK], aKR = 80 + ~~Math.sqrt(.5 + (Math.sqrt(tx + .5) << 8)), a5e = Math.min(aKR * aKR, 262144),
							aKO = -1, a8 = 0; a8 < 9; a8++)
							if (!((aKL = mr + aHP[a8]) < 0 || zL <= aKL))
								for (aKM = y3[aKL], i4 = aKM.length, a2 = 0; a2 < i4; a2++) aKN = aKM[a2], aEG = s5[aKN] >> 3, aEh == aEG || aKS && aKT[aEh] === aKT[aEG] || (aEG = s4[aKN], (aEG = (aFI = eG - aEG % sC) * aFI + (aFI = eH - ~~((
									aEG + .5) / sC)) * aFI) < a5e && (aKO = aKN, a5e = aEG)); - 1 !== aKO && (tx = Math.min(Math.max(1, hS.hT(tx * (aKR - Math.floor(Math.sqrt(a5e + .5))), 5 * aKR)), s6[aKO]), s6[cK] -= tx >> 4, s6[aKO] -= tx)
					}
				}(this);
				var l, cS, s6 = (aFU = this).s6,
					aFU = aFU.qC;
				for (l = aFU - 1; 0 <= l; l--) cS = s6[l], 0 < (cS -= Math.max(1, cS >> 7)) ? s6[l] = cS : fA.aBN.aC2(l)
			}
		}
}

function aKU() {
	function aKY(lO) {
		return lO < 0 ? 0 : 255 < lO ? 255 : Math.floor(lO)
	}
	this.dZ = 0, this.da = 0, this.hY = !1, this.aKV = 0, this.gap = 0, this.aKW = 0, this.a7w = 0, this.aBc = 0, this.aBe = 0, this.aBf = 0, this.colors = null, this.k = function() {
		this.hY = !0, this.aKV = 0, this.resize()
	}, this.resize = function() {
		this.hY && (b9.dZ < 1.4 * b9.da ? this.dZ = Math.floor((ae.af.dW() ? .94 : .43) * b9.dZ) : (this.da = Math.floor((ae.af.dW() ? .88 : .43) * b9.da), this.dZ = Math.floor(1.4 * this.da)), this.da = this.dZ / 1.4, this.gap = this.dZ / 32,
			this.a7w = Math.floor(.25 * this.da), this.aBc = (this.da - this.a7w - 3 * this.gap) / 2, this.aBe = this.dZ - 3 * this.gap - this.aBc, this.aBf = (this.da - this.a7w - 4 * this.gap) / 3)
	}, this.aKX = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var x = by.bz.data[103].value.split("");
		if (x.length < 6)
			for (var a8 = 2; 0 <= a8; a8--) this.colors[0][a8] = aKY(256 * Math.random());
		else
			for (var l = 2; 0 <= l; l--) this.colors[0][l] = aKY(4 * (10 * parseInt(x[2 * l]) + parseInt(x[2 * l + 1])));
		this.aKZ()
	}, this.aKa = function() {
		return [aF(this.colors[0][0], 4), aF(this.colors[0][1], 4), aF(this.colors[0][2], 4)]
	}, this.lg = function(i2, i3, deltaY) {
		var eG = (b9.dZ - this.dZ) / 2;
		i3 -= (b9.da - this.da) / 2 + this.a7w, (i2 -= eG) < 0 || i3 < 0 || i2 >= this.dZ || i3 >= this.da - this.a7w || (eG = Math.floor(3 * i3 / (this.da - this.a7w)), this.colors[this.aKW][eG] = aKY(this.colors[this.aKW][eG] + (deltaY < 0 ?
			1 : -1) * Math.max(Math.abs(.05 * deltaY), 1)), b6.bJ = !0)
	}, this.eA = function(i2, i3) {
		this.aKV = 0;
		var eG = (b9.dZ - this.dZ) / 2;
		return i3 -= (b9.da - this.da) / 2, (i2 -= eG) < 0 || i3 < 0 || i2 >= this.dZ - 1 || i3 >= this.da - 1 || i2 > this.dZ - (.4 * this.a7w + 3 * this.gap) && i3 < this.a7w ? (this.hY = !1, !(b6.bJ = !0)) : i2 < this.gap || i3 < this.gap +
			this.a7w || i2 >= this.dZ || i3 >= this.da - this.gap || (i2 < this.gap + this.aBc ? (i3 < this.gap + this.a7w + this.aBc && 0 !== this.aKW && (this.aKW = 0, b6.bJ = !0), !0) : i2 < this.gap + this.aBc || (i2 -= 2 * this.gap + this
				.aBc, i3 < this.gap + this.a7w + this.aBf ? (this.aKV = 1, this.colors[this.aKW][0] = aKY(256 * i2 / this.aBe), b6.bJ = !0) : i3 < 2 * this.gap + this.a7w + this.aBf || (i3 < 2 * this.gap + this.a7w + 2 * this.aBf ? (this
					.aKV = 2, this.colors[this.aKW][1] = aKY(256 * i2 / this.aBe), b6.bJ = !0) : !(i3 >= 3 * this.gap + this.a7w + 2 * this.aBf) || (this.aKV = 3, this.colors[this.aKW][2] = aKY(256 * i2 / this.aBe), b6.bJ = !0))))
	}, this.aKZ = function() {
		for (var a8 = 2; 0 <= a8; a8--) this.colors[0][a8] = aKY(this.colors[0][a8])
	}, this.aKb = function() {
		for (var aC, x = "", l = 0; l < 3; l++)(aC = aF(this.colors[0][l], 4)) < 10 && (x += "0"), x += aC.toString();
		return x
	}, this.eE = function(i2) {
		0 !== this.aKV && (i2 -= 2 * this.gap + this.aBc + (b9.dZ - this.dZ) / 2, this.colors[this.aKW][this.aKV - 1] = aKY(256 * i2 / this.aBe), b6.bJ = !0)
	}, this.a95 = function() {
		0 < this.aKV && (this.aKV = 0, this.aKZ(), by.iH.dd(103, this.aKb()), b6.bJ = !0)
	}, this.eK = function() {
		var eG = (b9.dZ - this.dZ) / 2,
			eH = (b9.da - this.da) / 2;
		eL.setTransform(1, 0, 0, 1, eG, eH), eL.fillStyle = ac.c8, eL.fillRect(0, this.a7w, this.dZ, this.da - this.a7w), eL.fillStyle = ac.tB, eL.fillRect(0, 0, this.dZ, this.a7w), eL.fillStyle = ac.c7, eL.lineWidth = dY.iA, eL.strokeStyle = ac
			.c7, eL.strokeRect(-1, -1, this.dZ + 2, this.da + 2), eL.fillRect(0, this.a7w, this.dZ, dY.iA), eL.font = n.o.dc(1, .31 * this.a7w), n.o.textBaseline(eL, 1), n.o.textAlign(eL, 1), eL.fillText("Choose Your Nation's Color!", Math.floor(
				(this.dZ - this.gap - .4 * this.a7w) / 2), Math.floor(.55 * this.a7w)), this.aBj(0), eL.lineWidth = dY.iA, this.aBk(0), this.aBk(1), this.aBk(2), bD.eb(Math.floor(eG + this.dZ - .4 * this.a7w - this.gap), Math.floor(eH + .3 * this
				.a7w), Math.floor(.4 * this.a7w)), eL.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aBj = function(l) {
		var aI = this.colors[l][0],
			n9 = this.colors[l][1],
			l = this.colors[l][2];
		eL.fillStyle = "rgb(" + aI + "," + n9 + "," + l + ")", eL.fillRect(this.gap, this.a7w + this.gap, this.aBc, 2 * this.aBc + this.gap), eL.lineWidth = dY.iA, eL.strokeStyle = ac.c7, eL.strokeRect(this.gap, this.a7w + this.gap, this.aBc, 2 *
			this.aBc + this.gap), eL.fillStyle = aI + n9 + l < 306 && n9 < 150 ? ac.c7 : ac.ep, eL.font = n.o.dc(1, .32 * this.aBf), n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1), eL.rotate(-Math.PI / 2), eL.fillText("National Color", Math
			.floor(-1.5 * this.gap - this.a7w - this.aBc), Math.floor(this.gap + .5 * this.aBc)), eL.rotate(Math.PI / 2)
	}, this.aBk = function(l) {
		eL.fillStyle = "rgb(" + (0 === l ? 150 : 2 === l ? 30 : 0) + "," + (1 === l ? 130 : 2 === l ? 30 : 0) + "," + (2 === l ? 220 : 0) + ")", eL.fillRect(2 * this.gap + this.aBc, this.a7w + this.gap + l * (this.gap + this.aBf), Math.floor(this
			.colors[this.aKW][l] * this.aBe / 255), this.aBf), eL.strokeStyle = ac.c7, eL.strokeRect(2 * this.gap + this.aBc, this.a7w + this.gap + l * (this.gap + this.aBf), this.aBe, this.aBf), eL.fillStyle = ac.c7, eL.font = n.o.dc(1,
			.32 * this.aBf), n.o.textBaseline(eL, 1), n.o.textAlign(eL, 0), eL.fillText((0 === l ? "Red: " : 1 === l ? "Green: " : "Blue: ") + this.colors[0][l].toString(), 3 * this.gap + this.aBc, Math.floor(this.a7w + this.gap + l * (this
			.gap + this.aBf) + .53 * this.aBf))
	}
}

function aAP(data) {
	var fH, aKc, aKd, aBc, aKe, aKf, aKg, colors, aKh, aKi, bo, sr, cK, aKj = 0,
		aKk = 0,
		aKl = !1,
		aKm = !1,
		aKn = [1, 5, 60, 240, 1440, 10080, 43200];

	function aLA(i2, i3) {
		! function(i2, i3) {
			return aKc < i2 && i2 < aKc + aBc && aKd < i3 && i3 < aKd + aKe
		}(aKj = i2, aKk = i3) ? (aKl && (b6.bJ = !0), aKl = !1) : (aKl = !0, b6.bJ = !0)
	}
	this.show = function() {
		aKm = by.bz.data[127].value, fH.show(), this.resize()
	}, this.fw = function() {
		fH.fw()
	}, this.resize = function() {
		fH.resize();
		var a2 = b9.iy,
			nQ = fH.nL(),
			aKs = a2 * nQ.nP,
			a2 = a2 * nQ.nM;
		aKf = n.o.rX(.06), aKg = n.o.rX(.04), aKc = n.o.rX(.06), aKd = a2 + aKf, aBc = b9.dZ - aKc - aKg, aKe = aKs + a2 - aKd - aKg
	}, this.eK = function() {
		fH.eK(),
			function() {
				var l, a9r, dI, eB, v, a5 = data.data,
					aKv = 1,
					aKw = .125,
					aKx = aKm ? 65536 : 0;
				for (l = 0; l < a5.length; l++)
					for (a9r = a5[l].a9r, dI = a9r.length, aKv = Math.max(dI, aKv), v = 0; v < dI; v++) aKw = Math.max(a9r[v], aKw), aKx = Math.min(a9r[v], aKx);
				var eH = aKd + aKe,
					aBF = aKe / (aKw - aKx),
					aBE = 1 / (aKv - 1);
				for (eL.lineWidth = dY.iA, l = 0; l < a5.length; l++) {
					for (a9r = a5[l].a9r, dI = a9r.length, eB = aKc, eL.beginPath(), eL.moveTo(eB + aBc, eH - aBF * (a9r[dI - 1] - aKx)), v = dI - 2; 0 <= v; v--) eL.lineTo(eB + aBE * v * aBc, eH - aBF * (a9r[v] - aKx));
					eL.strokeStyle = colors[l], eL.stroke()
				}(function(aKx, aKw, eH, aBF) {
					eL.font = n.o.dc(0, .25 * aKc), n.o.textBaseline(eL, 1), n.o.textAlign(eL, 2), eL.fillStyle = colors[0];
					for (var eB = .92 * aKc, l = 0; l < 3; l++) {
						var aC = aKx + l * (aKw - aKx) / 2;
						eL.fillText((aC / 1e3).toFixed(3), eB, eH - aBF * (aC - aKx))
					}
				})(aKx, aKw, eH, aBF),
				function(aKv) {
					var eC = aKd + aKe + .15 * aKg;
					eL.font = n.o.dc(0, .4 * aKg), n.o.textBaseline(eL, 0), n.o.textAlign(eL, 2), eL.fillStyle = colors[0], eL.fillText(n.te.st(aKh), aKc + aBc, eC), n.o.textAlign(eL, 0), eL.fillText(n.te.st(new Date(aKi.getTime() - 6e4 * (aKv -
						1) * aKn[data.tK])), aKc, eC)
				}(aKv),
				function(aKv, aKx, aKw) {
					if (aKl && !(aKv < 2)) {
						for (var dU, b4 = (aKj - aKc) / aBc * (aKv - 1), aL0 = Math.floor(b4), aL1 = Math.floor(1 + b4), aL2 = b4 - aL0, aL3 = 1e5, a5d = -1, aL4 = -1, aL5 = aKw - (aKw - aKx) * (aKk - aKd) / aKe, a5 = data.data, l = 0; l < a5
							.length; l++) {
							var a4X, a9r = a5[l].a9r;
							a9r.length <= aL1 || (a9r = a9r[aL0] + aL2 * (a9r[aL1] - a9r[aL0]), (a4X = Math.abs(aL5 - a9r)) < aL3 && (aL3 = a4X, a5d = l, aL4 = a9r))
						} - 1 !== a5d && (aKw = aKd + aKe - (aL4 - aKx) / (aKw - aKx) * aKe, eL.lineWidth = .5 * dY.iA, eL.strokeStyle = colors[a5d], eL.beginPath(), eL.moveTo(aKc, aKw), eL.lineTo(aKj, aKw), eL.lineTo(aKj, aKd + aKe), eL
						.stroke(), eL.beginPath(), eL.arc(aKj, aKw, .1 * aKc, 0, 2 * Math.PI), eL.fillStyle = colors[a5d], eL.fill(), aKx = aKd + aKe + .15 * aKg, n.o.textAlign(eL, 1), dU = aKv - 2 < b4 ? (dU = aKi.getTime() - 6e4 * aKn[data
								.tK], new Date(dU + (b4 - (aKv - 2)) * (aKh.getTime() - dU))) : new Date(aKi.getTime() - 6e4 * (aKv - b4 - 1) * aKn[data.tK]), aKv = n.te.st(dU), b4 = n.o.measureText(aKv), dU = hS.i7(aKj, aKc + .5 * b4, aKc +
								aBc - .5 * b4), eL.fillStyle = n.color.qw(70, 50, 20), eL.fillRect(dU - .52 * b4, aKd + aKe, 1.04 * b4, .55 * aKg), eL.fillStyle = colors[0], eL.fillText(aKv, dU, aKx), eL.font = n.o.dc(0, .25 * aKc), n.o
							.textBaseline(eL, 1), n.o.textAlign(eL, 2), dU = .92 * aKc, aKv = (aL4 / 1e3).toFixed(3), b4 = n.o.measureText(aKv), aKx = dU - 1.04 * b4, eL.fillStyle = n.color.qw(70, 50, 20), eL.fillRect(aKx, aKw - .1625 * aKc,
								aKc - aKx, .275 * aKc), eL.fillStyle = colors[a5d], eL.fillText(aKv, dU, aKw))
					}
				}(aKv, aKx, aKw)
			}(), eL.lineWidth = dY.iA, eL.strokeStyle = ac.c7, eL.beginPath(), eL.moveTo(aKc, aKd), eL.lineTo(aKc, aKd + aKe), eL.lineTo(aKc + aBc, aKd + aKe), eL.stroke();
		var l, fontSize = .5 * aKf,
			a5 = (eL.font = n.o.dc(0, fontSize), n.o.textBaseline(eL, 1), n.o.textAlign(eL, 0), data.data),
			m = a5.length,
			eC = aKd - .5 * aKf,
			x = "";
		for (l = 0; l < m; l++) x += a5[l].name + "  ";
		x = x.trim();
		var a1o = n.o.measureText(x),
			eB = .5 * (b9.dZ - a1o);
		for (a1o > b9.dZ && (eB = 0, eL.font = n.o.dc(0, b9.dZ / a1o * fontSize)), l = 0; l < m; l++) eL.fillStyle = colors[l], eL.fillText(a5[l].name, eB, eC), eB += n.o.measureText(a5[l].name + "  ")
	}, this.eA = function(i2, i3) {
		aLA(i2, i3)
	}, this.eE = function(i2, i3) {
		aLA(i2, i3)
	}, this.fx = function(a2) {
		2 === a2 && fH.fy[0].fz()
	}, bo = new Date, sr = 6e4 * bo.getTimezoneOffset(), cK = bo.getTime() - sr, aKh = new Date(cK), 6 === data.tK ? function(bo, sr) {
		var aKr = bo.getUTCFullYear(),
			bo = bo.getUTCMonth() + 1;
		aKi = bo < 12 ? new Date(Date.UTC(aKr, bo) - sr) : new Date(Date.UTC(aKr + 1, 0) - sr)
	}(bo, sr) : (sr = 6e4 * aKn[data.tK], aKi = data.tK <= 4 ? new Date(cK + sr - bo.getTime() % sr) : new Date(cK + sr - (bo.getTime() + 2592e5) % sr)), cK = n.color, colors = [ac.c7, cK.qw(255, 0, 0), cK.qw(0, 200, 0), cK.qw(80, 80, 255), cK
		.qw(255, 255, 0), cK.qw(255, 0, 255), cK.qw(0, 255, 255), cK.qw(255, 140, 0), cK.qw(128, 128, 128), cK.qw(0, 255, 140)
	], fH = new fd("Clan Chart, " + by.bz.data[125].sQ[data.tK] + ", " + n.te.sq(aKh), [new aa("❌ " + aS.aZ[92], function() {
		aO.al.fS()
	}), new aa("🛠️ Custom", function() {
		aO.aQ(14)
	})], !1)
}

function aBh(aLB, aLC, aLD) {
	this.eB = 0, this.eC = 0, this.dZ = 0, this.da = 0, this.resize = function() {
		this.da = Math.min(n.o.yd(aLD || .5) * aLB[1] * b9.dX, b9.da - 2 * dY.gap), this.dZ = Math.min(this.da * (aLB[0] / aLB[1]), b9.dZ - 2 * dY.gap), this.da = aLB[1] * this.dZ / aLB[0], this.eB = dY.gap + aLC[0] * (b9.dZ - this.dZ - 2 * dY
			.gap), this.eC = dY.gap + aLC[1] * (b9.da - this.da - 2 * dY.gap)
	}, this.aLE = function() {
		return this.eB + .5 * this.dZ
	}
}

function aBv() {
	this.bz = {}, this.rW = ["", "", ""], this.ay = function() {
		aO.aQ(5, 5)
	}, this.aFf = function() {
		aO.fT(), jO.k()
	}, this.aFe = function() {
		aO.fT(), ai.a2U(by.bz.data[10].value), ai.k()
	}, this.fS = function() {
		aO.aQ(0 === aW.aX() ? 5 : 0)
	}, this.fM = function() {
		if (1 === by.bz.data[130].value) aO.aQ(8, aO.gV().h1, new fh(24, {
			tK: by.bz.data[125].value,
			rU: by.bz.data[128].value,
			rV: by.bz.data[129].value
		}));
		else {
			for (var a5 = (a5 = by.bz.data[126].value.split(",")).slice(0, 10), l = 0; l < a5.length; l++) a5[l] = a5[l].trim().slice(0, 7).toUpperCase();
			1 === a5.length && 0 === a5[0].length && (a5 = []), aO.aQ(8, aO.gV().h1, new fh(23, {
				tK: by.bz.data[125].value,
				qp: a5
			}))
		}
	}, this.fg = function(h1, target) {
		aO.aQ(4, h1, new aR("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + fj.ft +
			"' target='_blank'>" + fj.ft + "</a>", !1, [new aa("❌ " + aS.aZ[92], function() {
				aO.aQ(h1)
			}), new aa("✅ " + aS.aZ[0], function() {
				by.iH.dd(140, 1), 0 === target ? aO.aQ(2, h1) : aO.aQ(8, h1, new fh(target))
			})]))
	}, this.a3S = function() {
		for (var l = 0; l < 3; l++) this.rW[l] = kW.kX.kY(kU.kV(5));
		this.rW[1] = "[" + this.rW[1] + "]", 5 === aO.aP && aO.gV().gW.dd(this.rW)
	}
}

function vp() {
	var eB, eC, aLF, aLG, aLH, b5, player, aLI, gap, zoom, zx, aLJ, r3 = new Array(10);

	function aLQ(player) {
		for (var l = zx.length - 1; 0 <= l; l--)
			if (zx[l] === player) return 1
	}

	function aLO(q0) {
		var l, m;
		if (-1 !== q0)
			for (m = r3.length, l = 0; l < m; l++)
				if (r3[l].hY && r3[l].eB + 1 === q0 % 4 && r3[l].eC + 1 === q0 >> 2) return l;
		return -1
	}

	function aLM(i2, i3) {
		var n9 = gap / 2;
		return i2 < eB - aLF - 3 * n9 || eB + 3 * aLF + 5 * n9 < i2 || i3 < eC - aLF - 3 * n9 || eC + 2 * aLF + 3 * n9 < i3 ? -1 : 4 * (i3 < eC - n9 ? 0 : i3 < eC + aLF + n9 ? 1 : 2) + (i2 < eB - n9 ? 0 : i2 < eB + aLF + n9 ? 1 : i2 < eB + 2 * aLF +
			3 * n9 ? 2 : 3)
	}
	this.gP = function() {
		var l, a8, aLL = [ac.hp, ac.aCP, ac.hq, ac.aCV, ac.aCR];
		for (r3 = new Array(8), l = 0; l < 8; l++) r3[l] = {
			id: l,
			hY: !1,
			a4A: 0,
			df: [],
			eB: 0,
			eC: 0
		};
		for (r3[0].colors = [0, 1, 2, 3], r3[0].eB = 0, r3[0].eC = 0, r3[1].colors = [0, 1, 4], r3[1].eB = 1, r3[1].eC = 0, r3[2].colors = [0, 2], r3[2].eB = -1, r3[2].eC = 0, r3[3].colors = [0], r3[3].eB = 0, r3[3].eC = 0, r3[4].colors = [0, 2],
			r3[4].eB = 1, r3[4].eC = 1, r3[5].colors = [3], r3[5].eB = 0, r3[5].eC = -1, r3[6].id = 20, r3[6].colors = [0], r3[6].eB = 1, r3[6].eC = -1, r3[7].id = 21, r3[7].colors = [0], r3[7].eB = 0, r3[7].eC = 1, l = 0; l < 8; l++)
			for (a8 = 0; a8 < r3[l].colors.length; a8++) r3[l].df.push(function(id, rH) {
				if (id < 20) return n.df.hr(d7.get(3), id, rH);
				var rH = d7.get(3).height,
					dH = n.o.j7(rH, rH),
					dF = n.o.getContext(dH);
				20 === id ? dF.drawImage(d7.get(18), 0, 0) : 21 === id && d9.d.dG(d9.b.dA + d9.b.aHX, dF, 0, 0, rH);
				return dH
			}(r3[l].id, aLL[r3[l].colors[a8]]))
	}, this.aJ3 = function() {
		return r3
	}, this.k = function() {
		zx = [], eB = eC = b5 = 0, aLG = aLH = -1e3, this.resize()
	}, this.resize = function() {
		aLF = Math.floor((ae.af.dW() ? .075 : .0468) * b9.dX), zoom = aLF / d7.get(3).height, gap = Math.floor(aLF / 3)
	}, this.a8z = function(i2, i3) {
		return !!this.hY() && (b6.bJ = !0, !!d9.d.eA(i2, i3, player) || (i2 = function(i2, i3) {
			aLH = aLG = -1e3;
			var aLN = aLO(aLM(i2, i3));
			if (-1 === aLN) return 0;
			if (1 !== r3[aLN].colors[r3[aLN].a4A])
				if (5 === aLN) {
					if (! function() {
							var bo = performance.now();
							aLJ + 4e3 < bo && (zx = []);
							aLJ = bo
						}(), aLQ(player)) return 1;
					zx.push(player), 16 < zx.length && zx.shift()
				} else if (6 === aLN) {
				for (var l = zx.length - 1; 0 <= l; l--) 0 === bU.bV[zx[l]] && zx.splice(l, 1);
				0 < zx.length && (pI.cD(1, zx, !0) && bq.br.zw(zx, player), zx = [])
			} else if (2 === aLN) bq.fZ.cV(jK.a7M(), player);
			else if (3 === aLN) ao.bA && bq.fZ.xA(aLI);
			else if (0 === aLN)
				if (0 === r3[0].a4A) {
					if (ao.om && ey.mq() < 300) return 1;
					bq.fZ.xF(jK.a7M(), player)
				} else pJ.aDM(player, jK.a7M());
			else if (1 === aLN) vY.aEu(), bq.fZ.xS(jK.a7M(), aLI);
			else {
				if (7 === aLN) return vY.aEw(), d9.d.show(i2, i3), 2;
				if (4 !== aLN) return 0;
				pI.cD(0, [player], !0) && bq.br.zt(player)
			}
			return 1
		}(i2, i3), this.fw(), 2 === i2 && (d9.d.hY = !0), 0 < i2))
	}, this.ix = function(i2, i3) {
		this.hY() || (aLG = i2, aLH = i3, b5 = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = p2.aGV(mouseX),
			coordY = p2.aGX(mouseY),
			coord = p2.aGY(coordX, coordY),
			point = p2.aGZ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(i2, i3, ge) {
			bX.qk(ge) || -1 === (i2 = fA.bd.a5i(i2, i3)) ? ar.aES(ge) : ar.aET(i2)
		}(mouseX, mouseY, point))
	}
	this.click = function(i2, i3, a98) {
		var aGU = p2.aGV(i2),
			aGW = p2.aGX(i3),
			rj = p2.aGY(aGU, aGW),
			ge = p2.aGZ(rj);
		return !(!p2.aGa(aGU, aGW) || (aGU = (ae.af.dW() ? .025 : .0144) * b9.dX, aGW = performance.now(), Math.abs(i2 - aLG) > aGU) || Math.abs(i3 - aLH) > aGU || b5 + 500 < aGW) && (b5 = aGW, a98 ? (function(i2, i3, ge) {
			bX.qk(ge) || -1 === (i2 = fA.bd.a5i(i2, i3)) ? ar.aES(ge) : ar.aET(i2)
		}(i2, i3, ge), !1) : bD.bE || this.hY() || !n.br.c1(ao.bW) || ao.fX ? (this.fw(), !1) : ao.bA ? !!bX.qk(ge) && (aLI = rj, r3[3].hY = !0, this.aLT(i2, i3)) : (fA.bd.xT(rj) ? fA.sJ.sK = -1 : fA.bd.a5b(i2, i3) || (2 === ao.aq ? bX
			.a0n(ge) && (player = bX.qS(ge), bX.bY(player)) && (r3[0].hY = !0, r3[0].a4A = 1, r3[7].hY = !0) : bX.a6a(ge) || (aLI = rj, fA.bd.a5W(ao.bW, rj) && (r3[0].hY = !0, r3[0].a4A = 1, r3[1].hY = !0, r3[1].a4A = cb.qO[2] ? 0 :
				2), bX.tr(ge)) || (bX.qR(ge) ? (player = ao.l4, aDG(ao.bW) ? (r3[0].hY = !0, r3[0].a4A = 0) : aDE(ao.bW, player) && (r3[0].hY = !0, r3[0].a4A = 3)) : (player = bX.qS(ge)) === ao.bW ? (r3[0].hY = !0, r3[0].a4A = 1, r3[
				7].hY = !0) : (r3[0].a4A = 1, r3[5].hY = function(player) {
				return bX.bY(player) && !aLQ(player) && pI.cD(1, [player], !1)
			}(player), r3[7].hY = bX.bY(player), qT(player, ao.bW) ? (r3[4].hY = bX.bY(player) && !cf.aJ6(player) && pI.cD(0, [player], !1), r3[6].hY = function(player) {
				if (0 === zx.length) return !1;
				if (performance.now() > aLJ + 4e3) return !(zx = []);
				return !aLQ(player) && ! function(player) {
					var l;
					if (ao.fC)
						for (l = zx.length - 1; 0 <= l; l--)
							if (!qT(player, zx[l])) return 1;
					return
				}(player)
			}(player), aDH(ao.bW, player) ? (r3[0].a4A = 0, r3[0].hY = !0) : aDE(ao.bW, player) && (r3[0].a4A = 3, r3[0].hY = !0), r3[0].hY = this.aLW()) : (r3[2].hY = !0, r3[0].hY = !0)))), this.aLT(i2, i3)))
	}, this.aLT = function(i2, i3) {
		return eB = i2 - Math.floor(aLF / 2), eC = i3 - Math.floor(aLF / 2), !!this.hY()
	}, this.eE = function(i2, i3) {
		return !!this.hY() && (d9.d.hY ? !d9.d.i6(i2, i3) && (d9.d.hY = !1, b6.bJ = !0) : function(aFU, i2, i3) {
			i2 = aLM(i2, i3);
			if (0 <= aLO(i2)) return !1;
			if ((1 === i2 || 6 === i2) && 0 <= aLO(2)) return !1;
			if ((6 === i2 || 9 === i2) && 0 <= aLO(10)) return !1;
			return aFU.fw(), b6.bJ = !0
		}(this, i2, i3))
	}, this.fw = function() {
		for (var l = r3.length - 1; 0 <= l; l--) r3[l].hY = !1, r3[l].a4A = 0;
		d9.d.hY = !1
	}, this.hY = function() {
		return this.aLW() || d9.d.hY
	}, this.aLW = function() {
		for (var m = r3.length, l = 0; l < m; l++)
			if (r3[l].hY) return !0;
		return !1
	}, this.eK = function() {
		if (this.hY())
			if (d9.d.hY) d9.d.eK();
			else {
				var l, dF = eL,
					a8 = r3,
					m = a8.length,
					aLb = (aLF + gap) / zoom;
				for (dF.imageSmoothingEnabled = !0, dF.setTransform(zoom, 0, 0, zoom, eB, eC), l = 0; l < m; l++) a8[l].hY && eL.drawImage(a8[l].df[a8[l].a4A], a8[l].eB * aLb, a8[l].eC * aLb);
				dF.imageSmoothingEnabled = !1, dF.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aBT() {
	this.b8 = function() {
		for (var aLc, aBS, aCC = fA.al.aCC, s4 = fA.al.s4, aCA = fA.al.aCA, l = fA.al.qC - 1; 0 <= l; l--) aLc = s4[l], 0 !== (aBS = aCC[l]) && aLc === aCA[l] && (! function(l, aLe, q1) {
			var xG, player = fA.al.s5[l] >> 3,
				q1 = aLe + p2.qQ[q1] << 2,
				l = fA.al.s6[l];
			if (bX.qR(q1)) xG = ao.l4;
			else {
				if ((xG = bX.qS(q1)) === player) return n.br.ca(player, l);
				if (!qT(player, xG)) return bq.a5Q.cY(player, xG, l)
			}
			player === ao.bW && (cd.mU[13] += l);
			bU.n4[player].push(aLe << 2), f6.xE(player, l, xG), pD.a29(player, !0)
		}(l, p2.u3(aLc), aBS - 1), fA.aBN.aC2(l))
	}
}

function wJ() {
	var hA, sj, aLf, aLg;
	this.a3b = 0, this.a3c = 0, this.k = function() {
		var df, tQ;
		7 === aW.aX() && (hA = kU.hA, sj = 0, aLf = b6.b5 + 4500, aLg = ak.o6.a3Z() ? 2 : 0, aW.setState(10), eL.imageSmoothingEnabled = !0, aW.nr(), df = d7.g5("loading"), tQ = (ae.af.dW() ? .396 : .25) * b9.dX / df.width, eL.setTransform(tQ, 0,
			0, tQ, Math.floor((b9.dZ - tQ * df.width) / 2), Math.floor((b9.da - tQ * df.height) / 2)), eL.imageSmoothingEnabled = !1, eL.drawImage(df, 0, 0), eL.setTransform(1, 0, 0, 1, 0, 0))
	}, this.aGv = function() {
		0 < aLg && b6.b5 > aLf && (aLg--, aLf += 4500, 0 === b6.zG) && 0 === b6.f2() && (0 === aLg && ak.al.an < ak.al.gh && (ak.al.an += ak.al.gi), ak.al.gv(ak.al.an, 5))
	}, this.a3f = function() {
		var a6, l;
		return 10 === aW.aX() && (a6 = kU.hA, l = kU.b4, ak.o6.a3W(hA), hA = null, kU.k(a6), kU.b4 = l, !0)
	}, this.a5r = function() {
		10 === aW.aX() && 2 <= ++sj && (ak.o6.a3W(hA), hA = null)
	}
}

function w2() {
	var vB = [0, 0, 0, 0];

	function aLl(eB, eC, hZ, aLn) {
		eL.fillStyle = ac.c7;
		var en = db(2, Math.floor((aLn ? .5 : .35) * hZ)),
			jU = (en -= en % 2, db(2, Math.floor(.1 * hZ))),
			hZ = (jU -= jU % 2, Math.floor((hZ - en) / 2)),
			ih = Math.floor(hZ + (en - jU) / 2);
		eL.fillRect(eB + hZ, eC + ih, en, jU), aLn && eL.fillRect(eB + ih, eC + hZ, jU, en)
	}

	function a2c(eB, eC, dZ, da, lO, a04, aZ, cS, dI) {
		eL.fillStyle = lO, eL.fillRect(eB, eC, dZ, da), 0 <= cS && function(eB, eC, dZ, da, cS) {
			eL.fillStyle = "rgba(" + 22 * cS + "," + (110 - 22 * cS) + ",0,0.75)", eL.fillRect(eB, eC, (1 + cS) * dZ / 6, da)
		}(eB, eC, dZ, da, cS), 0 < dI && function(eB, eC, dZ, da, dI) {
			eL.fillStyle = "rgba(255,255,255,0.3)", eL.fillRect(eB, eC, dI * dZ / ao.l4, da)
		}(eB, eC, dZ, da, dI), eL.strokeStyle = ac.c7, eL.strokeRect(eB, eC, dZ, da), 0 !== a04 && (eL.fillStyle = ac.c7, eL.font = n.o.dc(1, a04 * da), eL.fillText(aZ, Math.floor(eB + dZ / 2), Math.floor(eC + .52 * da)))
	}
	this.oU = [{
		hR: 0,
		dI: 512
	}], this.k = function() {
		vT.hY = !1, aW.setState(2), this.resize(), b6.bJ = !0
	}, this.b1 = function() {}, this.resize = function() {
		vB[2] = Math.floor((ae.af.dW() ? .49 : .4) * b9.dX), vB[1] = Math.floor((b9.da - vB[2] / 6 - this.oU.length * (dY.gap + vB[2] / 10)) / 2), vB[0] = Math.floor((b9.dZ - vB[2]) / 2), vT.hY && vT.resize()
	}, this.x5 = function(dk) {
		var l;
		if (6 < dk) this.oU = [{
			hR: 0,
			dI: 512
		}];
		else {
			for (this.oU = [], l = 0; l < dk + 2; l++) this.oU.push({
				hR: 0,
				dI: 0
			});
			this.aLi()
		}
		ak.al.an = 0
	}, this.x6 = function(uu, uv) {
		for (var m = uu.length, l = 0; l < m; l++) this.oU[l].hR = uu[l], this.oU[l].dI = uv[l]
	}, this.x0 = function(n9) {
		var l, m;
		if (1 === n9.cE.length)
			for (m = this.oU.length, n9.uu = new Array(m), n9.uv = new Array(m), l = 0; l < m; l++) n9.uu[l] = this.oU[l].hR, n9.uv[l] = this.oU[l].dI
	}, this.a9G = function() {
		b6.bJ = !0, vT.hY ? vT.hY = !1 : (this.b1(), aW.setState(0), aO.aQ(5, 5))
	}, this.ov = function() {
		var l, dI;
		if (oR.hD) return oR.iM.aJP;
		for (dI = 0, l = this.oU.length - 1; 0 <= l; l--) dI += this.oU[l].dI;
		return dI
	}, this.eE = function(eB, eC) {
		return !(!vT.hY || !vT.eE(eB, eC)) || -1 !== this.rC(eB, eC)
	}, this.aLj = function() {
		var v;
		ak.al.an = 0, aW.x4(), oR.hD ? oR.aJJ() : (v = (v = this.oU.length - 2) < 0 ? 7 : v, ao.op(Math.floor(16384 * Math.random()), 0, [{
			name: by.bz.data[122].value,
			ur: n.color.zq(by.al.sS()),
			uq: 0
		}], v, !1, !1))
	}, this.eA = function(eB, eC) {
		if (vT.hY && !oR.hD) return vT.eA(eB, eC);
		var l, v, max, en, eC = this.rC(eB, eC);
		if (-1 === eC) return !1;
		if (0 === eC) this.a9G();
		else if (1 === eC) oR.hD ? (oR.rD(), b6.bJ = !0) : vT.show();
		else if (100 === eC) vV.a4o();
		else if (2 === eC) this.b1(), this.aLj();
		else {
			if (oR.hD) return !1;
			if (27 === eC) this.oU.length < 8 && (this.oU.push({
				hR: 0,
				dI: ao.l4
			}), this.aLi(), this.resize(), b6.bJ = !0);
			else if (l = Math.floor((eC - 3) / 3), eC % 3 == 0) 1 < this.oU.length && (this.oU.splice(l, 1), this.resize(), b6.bJ = !0);
			else if (en = (vB[2] - vB[2] / 10 - 2 * dY.gap) / 2, eC % 3 == 1) 0 === l && 1 === this.oU[l].dI || (eB < vB[0] + vB[2] - 1.5 * en - dY.gap ? this.oU[l].hR-- : this.oU[l].hR++, this.oU[l].hR < 0 ? this.oU[l].hR = 5 : 5 < this.oU[l]
				.hR && (this.oU[l].hR = 0), b6.bJ = !0);
			else {
				for (b6.bJ = !0, eC = (eB - (vB[0] + vB[2] - en)) / en - .5, eC *= eC < 0 ? -eC : eC, eC = 0 === (eC = Math.floor(eC * ao.l4)) ? 1 : eC, max = ao.l4, v = this.oU.length - 1; 0 <= v; v--) l !== v && (max -= this.oU[v].dI);
				if (eC < 0) {
					if (1 === this.oU[l].dI) return this.oU[l].dI = max, !0
				} else if (this.oU[l].dI === max) return this.oU[l].dI = 1, !0;
				this.oU[l].dI += eC, this.oU[l].dI < 1 ? this.oU[l].dI = 1 : this.oU[l].dI > max && (this.oU[l].dI = max)
			}
		}
		return !0
	}, this.aLi = function() {
		for (var dI = Math.floor(ao.l4 / this.oU.length), aLk = ao.l4 % this.oU.length, l = this.oU.length - 1; 0 <= l; l--) this.oU[l].dI = dI;
		this.oU[0].dI += aLk
	}, this.rC = function(eB, eC) {
		var en = (vB[2] - 3 * dY.gap) / 4,
			jU = vB[2] / 6;
		if (eB < vB[0] || eC < vB[1] || vB[0] + vB[2] <= eB) return -1;
		if (eC < vB[1] + jU) return eB < vB[0] + en ? 0 : eB < vB[0] + en + dY.gap ? -1 : eB < vB[0] + 2 * en + dY.gap ? 100 : eB < vB[0] + 2 * (en + dY.gap) ? -1 : eB < vB[0] + 3 * en + 2 * dY.gap ? 1 : eB < vB[0] + 3 * (en + dY.gap) ? -1 : 2;
		for (var eH, jV = vB[2] / 10, en = (vB[2] - jV - 2 * dY.gap) / 2, l = 0; l < this.oU.length; l++) {
			if (eC < (eH = vB[1] + jU + dY.gap + l * (jV + dY.gap))) return -1;
			if (!(eH + jV < eC)) return eB < vB[0] + jV ? 3 + 3 * l : eB < vB[0] + jV + dY.gap ? -1 : eB < vB[0] + vB[2] - en - dY.gap ? 4 + 3 * l : eB < vB[0] + vB[2] - en ? -1 : 5 + 3 * l
		}
		return !(this.oU.length < 8) || eC < (eH = vB[1] + jU + dY.gap + this.oU.length * (jV + dY.gap)) || eH + jV < eC || vB[0] + jV < eB ? -1 : 27
	}, this.eK = function() {
		eL.lineWidth = dY.iA, n.o.textAlign(eL, 1), n.o.textBaseline(eL, 1);
		var en = (vB[2] - 3 * dY.gap) / 4,
			jU = vB[2] / 6;
		if (a2c(vB[0], vB[1], en, jU, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), a2c(vB[0] + en + dY.gap, vB[1], en, jU, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), a2c(vB[0] + 2 * (en + dY.gap), vB[1], en, jU, "rgba(" + (oR.hD ? 128 : 0) +
				",128,128,0.75)", .34, oR.hD ? "Reset" : "Maps", -1, -1), a2c(vB[0] + vB[2] - en, vB[1], en, jU, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !oR.hD) {
			for (var eH, jV = vB[2] / 10, en = (vB[2] - jV - 2 * dY.gap) / 2, l = 0; l < this.oU.length; l++) eH = vB[1] + jU + dY.gap + l * (jV + dY.gap), a2c(vB[0], eH, jV, jV, 1 < this.oU.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)",
				0, null, -1), 1 < this.oU.length && aLl(vB[0], eH, jV, !1), a2c(vB[0] + jV + dY.gap, eH, en, jV, ac.c8, .4, this.aLm(l), this.oU[l].hR, -1), a2c(vB[0] + vB[2] - en, eH, en, jV, ac.c8, .4, this.a9k(l), -1, this.oU[l].dI);
			this.oU.length < 8 && (eH = vB[1] + jU + dY.gap + this.oU.length * (jV + dY.gap), a2c(vB[0], eH, jV, jV, "rgba(0,128,20,0.75)", 0, null, -1, -1), aLl(vB[0], eH, jV, !0)), vT.hY && vT.eK()
		}
	}, this.aLm = function(l) {
		return 0 === l && 1 === this.oU[l].dI ? "You" : p3.oL[this.oU[l].hR]
	}, this.a9k = function(l) {
		return 1 === this.oU[l].dI ? "1 Player" : this.oU[l].dI + " Players"
	}
}

function w9() {
	this.l7 = new Array(ao.l4), this.l6 = new Array(ao.l4), this.ev = new Uint8Array(ao.l4), this.bV = new Uint8Array(ao.l4), this.qa = new Uint16Array(ao.l4), this.qb = new Uint16Array(ao.l4), this.qc = new Uint16Array(ao.l4), this.qd =
		new Uint16Array(ao.l4), this.bp = new Uint32Array(ao.l4), this.aAs = new Uint32Array(ao.l4), this.f8 = new Uint32Array(ao.l4), this.n4 = null, this.f9 = null, this.qB = null, this.aBA = null, this.sk = new Uint16Array(ao.l4), this.sl =
		new Uint16Array(ao.l4), this.sm = new Uint16Array(ao.l4), this.bx = new Uint16Array(ao.l4), this.sn = new Uint8Array(ao.l4), this.k = function(cE) {
			for (var l = cE.length - 1; 0 <= l; l--) this.l6[l] = this.l7[l] = cE[l].name, this.ev[l] = cE[l].uq;
			this.bV.fill(0), this.qa.fill(0), this.qb.fill(0), this.qc.fill(0), this.qd.fill(0), this.bp.fill(0), this.aAs.fill(0), this.f8.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.n4 = new Array(ao.l4), this.f9 = new Array(
				ao.l4), this.qB = new Array(ao.l4), this.aBA = new Array(ao.l4), this.sk.fill(0), this.sl.fill(0), this.sm.fill(0), this.bx.fill(0), this.sn.fill(0)
		}
}

function zA() {
	this.k = function() {
		! function() {
			var data = by.bz.data;
			0 === data[2].fb && (b9.da > b9.dZ || 0 !== ae.id) && (data[2].value = data[2].a0o = 1);
			0 === data[100].fb && (data[100].value = data[100].a0o = (0 === ae.id ? "Player " : 1 === ae.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].a0o = aS.a9i()
		}();
		var l, aC, data = by.bz.data,
			m = data.length;
		for (l = 0; l < m; l++) data[l] && data[l].fb === by.fz.xf(l, !0) && (aC = by.fz.xg(l), data[l].value = null === aC ? data[l].a0o : 2 === data[l].type ? aC : Number(aC));
		by.bz.data[10].value = by.bz.data[10].a0o
	}
}

function ww() {
	this.v4 = null, this.v5 = null, this.v6 = null, this.v7 = null, this.v8 = null, this.v9 = null;
	var aLs = 0;
	this.uo = null, this.uj = "", this.k = function(uo) {
		this.v4 = [], this.v5 = [], this.v6 = [], this.v7 = [], this.v8 = [0], this.v9 = [0], aLs = 0, this.uo = uo, this.uj = ""
	}, this.xD = function(id, nV, nW, nX) {
		ao.fX || 2 === ao.aq || (0 === this.v8[aLs] && (this.v9[aLs] ? (this.v8.push(1), this.v9.push(0), aLs++) : this.v8[aLs] = 1), this.v4.push(id), this.v5.push(nV), this.v6.push(void 0 === nW ? 0 : nW), this.v7.push(void 0 === nX ? 0 : nX),
			this.v9[aLs]++)
	}, this.b8 = function() {
		0 === this.v8[aLs] ? this.v9[aLs]++ : (this.v8.push(0), this.v9.push(0), aLs++)
	}
}

function wM() {
	this.aLt = null, this.k = function() {
		10 !== ao.bi ? this.aLt = null : this.aLt = new Uint32Array(ao.l4)
	}, this.b8 = function() {
		10 === ao.bi && this.aY()
	}, this.aY = function() {
		for (var a6, target, n6, aLt = this.aLt, cE = n5, yS = bU.f8, l = mc - 1; 0 <= l; l--)(a6 = cE[l]) >= ao.cW || (target = Math.max(aF(yS[a6], 4), 2048), n6 = Math.max(cU.n7(a6), 100), aLt[a6] += aF(n6 * target, 1e4), aLt[a6] > target && (
			aLt[a6] = target))
	}, this.yW = function(player, cS) {
		return cS > this.aLt[player] ? (cS = this.aLt[player], this.aLt[player] = 0) : this.aLt[player] -= cS, cS
	}
}

function wU() {
	this.qQ = new Int16Array(4), this.uX = new Int16Array(4), this.k = function() {
		var l;
		for (this.qQ[0] = -e1.e0, this.qQ[1] = 1, this.qQ[2] = e1.e0, this.qQ[3] = -1, l = 0; l < 4; l++) this.uX[l] = 4 * this.qQ[l]
	}, this.tp = function(tn, tm) {
		var aFI = this.u6(tm) - this.u6(tn),
			tm = this.u8(tm) - this.u8(tn),
			tn = aFI >>> 31 << 1;
		return 5 + tn + (1 - tn) * (1 - (tm >>> 31 << 1)) * (Math.abs(aFI) - Math.abs(tm) >>> 31) & 3
	}, this.ts = function(tn, tm, q1) {
		return q1 % 2 == 0 ? q1 + (1 - q1) * (1 - (this.u6(tm) - this.u6(tn) >>> 31 << 1)) + 4 & 3 : q1 + (2 - q1) * (1 - (this.u8(tm) - this.u8(tn) >>> 31 << 1)) + 4 & 3
	}, this.to = function(a6, rj) {
		for (var tm, aLv, aLx = bU.qB[a6], m = aLx.length, dZ = e1.e0, aLy = this.u6(rj), aLz = this.u8(rj), aM0 = aLx[0] >> 2, min = this.aM1(aLy, aLz, aM0), l = 1; l < m; l++)(aLv = (aLv = aLy - (tm = aLx[l] >> 2) % dZ) * aLv + (aLv = aLz - ~~(
			(.5 + tm) / dZ)) * aLv) < min && (min = aLv, aM0 = tm);
		return aM0
	}, this.tv = function(player, ge) {
		return !bX.qR(ge) && player === bX.qS(ge)
	}, this.aM1 = function(aGU, aGW, rj) {
		return (aGU -= this.u6(rj)) * aGU + (aGW -= this.u8(rj)) * aGW
	}, this.a5h = function(is, it, kH) {
		is = this.aM2(is) - this.uB(kH), it = this.aM3(it) - this.uD(kH);
		return Math.sqrt(is * is + it * it)
	}, this.a5k = function(tn, tm) {
		var nb = this.u6(tn) - this.u6(tm),
			tn = this.u8(tn) - this.u8(tm);
		return Math.sqrt(nb * nb + tn * tn)
	}, this.xR = function(a6, f4) {
		return hS.hT(f4 * bU.f8[a6], 1e3)
	}, this.aM2 = function(is) {
		return 16 * (is + sG) / sF
	}, this.aM3 = function(it) {
		return 16 * (it + sH) / sF
	}, this.aGV = function(is) {
		return Math.floor((is + sG) / sF)
	}, this.aGX = function(it) {
		return Math.floor((it + sH) / sF)
	}, this.aGa = function(aGU, aGW) {
		return 1 <= aGU && 1 <= aGW && aGU < e1.e0 - 1 && aGW < e1.e2 - 1
	}, this.u6 = function(rj) {
		return rj % e1.e0
	}, this.u8 = function(rj) {
		return hS.hT(rj, e1.e0)
	}, this.aGY = function(aGU, aGW) {
		return aGW * e1.e0 + aGU
	}, this.xC = function(rj) {
		var aGU = this.u6(rj),
			rj = this.u8(rj);
		return 0 < aGU && aGU < e1.e0 - 1 && 0 < rj && rj < e1.e2 - 1
	}, this.aGZ = function(rj) {
		return rj << 2
	}, this.aM4 = function(rj) {
		return e1.e0 * this.u8(rj) * 256 + (this.u6(rj) << 4)
	}, this.tu = function(rj) {
		return this.aM4(rj) + 8 + (e1.e0 << 7)
	}, this.u3 = function(kH) {
		return e1.e0 * (this.uD(kH) >> 4) + (this.uB(kH) >> 4)
	}, this.aCE = function(kH) {
		kH = this.u3(kH);
		return (this.u6(kH) >> 5) + fA.y3.aHM * (this.u8(kH) >> 5)
	}, this.uB = function(kH) {
		return kH % (e1.e0 << 4)
	}, this.uD = function(kH) {
		return hS.hT(kH, e1.e0 << 4)
	}, this.tq = function(rj, q1) {
		return rj + this.qQ[q1]
	}, this.uU = function(ge, q1) {
		return ge + this.uX[q1]
	}
}

function vj() {
	this.ua = new sv, this.kX = new yP, this.k = function() {
		this.ua.k()
	}
}

function aAt(player) {
	aM5(player), aM6(player), aM7(player), pD.a0h(player), pC.a27(player), f6.clear(player), fA.aBN.aC1(player)
}

function aM5(player) {
	bX.bY(player) && (bU.bx[player] = bf.bg.ew(), ao.eu++);
	var a7j = f6.a7i(player);
	0 === a7j.length ? player === ao.bW && aM8() : (aM9(player, a7j), aMA(player, a7j))
}

function aM8() {
	cd.mU[17] += bU.f8[ao.bW] + f6.a7e(ao.bW), ex.show(!1, !1, !1, !0), ey.ez()
}

function aM9(player, a7j) {
	for (var l = a7j.length - 1; 0 <= l; l--) f6.a7b(a7j[l], player)
}

function aMB(a7j) {
	for (var b4 = 0, l = a7j.length - 1; 1 <= l; l--) bU.bp[a7j[l]] > bU.bp[a7j[b4]] && (b4 = l);
	return b4
}

function aMA(player, a7j) {
	var l, aEY, aMC = a7j[aMB(a7j)];
	if (9 === ao.bi && 1 === dO.lN[player] && aK.rd(8) && oX.a4e(aMC), player === ao.bW) 2 !== bU.ev[player] && ar.sW(aMC, 1), aM8();
	else {
		for (aEY = !1, l = a7j.length - 1; 0 <= l; l--)
			if (a7j[l] === ao.bW) return aEY = !0, void ar.sW(player, 0);
		!aEY && player < ao.cW && 2 !== bU.ev[player] && ar.aEQ(0, player, aMC)
	}
}

function aM7(player) {
	bU.bV[player] = bU.f8[player] = 0, bU.n4[player] = null, bU.f9[player] = null, bU.qB[player] = null, bU.aBA[player] = null, pH.f1(player)
}

function aM6(player) {
	for (var a6, eC, eB = bU.qc[player]; eB >= bU.qa[player]; eB--)
		for (eC = bU.qd[player]; eC >= bU.qb[player]; eC--) a6 = 4 * (eC * e1.e0 + eB), bX.a6V(player, a6) && (bX.a6b(a6), bU.bp[player]--)
}
self.aiCommand746 = function(aC) {
	0 === aC ? vd() : 1 !== aC || 1 !== ae.id || ae.fb < 14 || lb.a01()
}, setTimeout(vd, 1e4), window.onload = function() {
	vd()
};